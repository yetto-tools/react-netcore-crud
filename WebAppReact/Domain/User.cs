using Microsoft.Data.SqlClient;
using Microsoft.IdentityModel.Tokens;
using System.Data;
using System.Security.Claims;
using System.Security.Cryptography;
using WebAppReact.DataService;
using WebAppReact.Hepler;

namespace WebAppReact.Domain
{
    public class User
    {
        private readonly DataBaseContext _dataBase;
        private readonly ILogger _logger;
        private TokenService _tokenService;

        public User(DataBaseContext dataBaseContext, ILogger<User> logger , TokenService tokenService)
        {
            _dataBase = dataBaseContext;
            _logger = logger;
            _tokenService = tokenService;
        }


        public async Task<DataSet> Save(
                                        Int64 pId,
                                        string? pUsuario,
                                        string? pCorreo,
                                        string? pPassword,
                                        int pEstado,
                                        Int64 pUid_creacion,
                                        string? pComentario = null
        )
        {
            DataSet data = new DataSet("USUARIO");
            try
            {
                pComentario = pPassword?.Trim();
                SqlParameter[] paramsSQL = new SqlParameter[]
                {
                    new SqlParameter("@pID_USUARIO"   , pId           ),
                    new SqlParameter("@pUSUARIO"      , pUsuario.IsNullOrEmpty()    ?  null :  pUsuario?.Trim().ToLower()   ),
                    new SqlParameter("@pCORREO"       , pCorreo.IsNullOrEmpty()     ?  null :  pCorreo?.Trim().ToLower()    ),
                    new SqlParameter("@pPASSWORD"     , pPassword.IsNullOrEmpty()   ?  null :  PasswordHelper.HashPassword(pPassword?.Trim() ?? "123456")),
                    new SqlParameter("@pESTADO"       , pEstado                                                   ),
                    new SqlParameter("@pUID_CREACION" , pUid_creacion                                             ),
                    new SqlParameter("@pCOMENTARIO"   , pComentario.IsNullOrEmpty() ?  null :  pComentario?.Trim()),
                };

                data = await _dataBase.ExecuteStoredProcedureAsync("spUsuario_Save", paramsSQL);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
            }
            return data;

        }




        public async Task<DataSet> GetAll(int? page_size, int? page_number)
        {
            SqlParameter[] paramsSQL = new SqlParameter[]
            {
                new SqlParameter("@pPageSize",     page_size),
                new SqlParameter("@pPageNumber",   page_number),

            };

            return await _dataBase.ExecuteStoredProcedureAsync("spUsuario_GetAll", paramsSQL);
        }

        public async Task<DataSet> FindById(int pIdUsuario, int? pEstado)
        {
            SqlParameter[] paramsSQL = new SqlParameter[]
            {
                new SqlParameter("@pID_USUARIO",   pIdUsuario),
                new SqlParameter("@pESTADO",       pEstado ?? 1),
            };

            return await _dataBase.ExecuteStoredProcedureAsync("spUsuario_By", paramsSQL);
        }

        public async Task<DataSet> FindByName(string pNombre, int? pEstado)
        {
            SqlParameter[] paramsSQL = new SqlParameter[]
            {
                new SqlParameter("@pNOMBRE",       pNombre),
                new SqlParameter("@pESTADO",       pEstado ?? 1),
            };

            return await _dataBase.ExecuteStoredProcedureAsync("spUsuario_By", paramsSQL);
        }

        public async Task<DataSet> Search(string? pValor = null, int pEstado = 1)
        {
            SqlParameter[] paramsSQL = new SqlParameter[]
            {
                new SqlParameter("@pValor",       pValor ),
                new SqlParameter("@pEstado",      pEstado),
            };

            return await _dataBase.ExecuteStoredProcedureAsync("spUsuario_Search", paramsSQL);
        }

        public async Task<DataSet> Login(int? pId = null, int? pEstado = null, string? pNombre = null)
        {
            SqlParameter[] paramsSQL = new SqlParameter[]
            {
                new SqlParameter("@pID_USUARIO",   pId),
                new SqlParameter("@pNOMBRE",       pNombre),
                new SqlParameter("@pESTADO",       pEstado),
            };

            return await _dataBase.ExecuteStoredProcedureAsync("spUsuario_Login", paramsSQL);
        }

        public async Task<bool> CreateTokens(long userId, string accessToken, string refreshToken, DateTime accessTokenExpiry, DateTime refreshTokenExpiry)
        {
            try
            {
                SqlParameter[] paramsSQL = new SqlParameter[]
                {
                    new SqlParameter("@ID_USUARIO", userId),
                    new SqlParameter("@ACCESS_TOKEN", accessToken),
                    new SqlParameter("@REFRESH_TOKEN", refreshToken),
                    new SqlParameter("@ACCESS_TOKEN_EXPIRY", accessTokenExpiry),
                    new SqlParameter("@REFRESH_TOKEN_EXPIRY", refreshTokenExpiry)
                };

                await _dataBase.ExecuteStoredProcedureAsync("spToken_Save", paramsSQL);
                return true;
            }
            catch (Exception ex)
            {
                _logger.LogError("Error creating tokens: " + ex.Message);
                return false;
            }
        }

        public async Task<bool> VerifyAccessToken(string accessToken)
        {
            try
            {
                SqlParameter[] paramsSQL = new SqlParameter[]
                {
            new SqlParameter("@ACCESS_TOKEN", accessToken)
                };

                var result = await _dataBase.ExecuteStoredProcedureAsync("spVerifyAccessToken", paramsSQL);
                if (result.Tables.Count > 0 && result.Tables[0].Rows.Count > 0)
                {
                    // Token es válido
                    return true;
                }
                // Token no es válido o ha expirado
                return false;
            }
            catch (Exception ex)
            {
                _logger.LogError("Error verifying access token: " + ex.Message);
                return false;
            }
        }

        public async Task<bool> RefreshTokens(string refreshToken, string pIdUsuario, string pUsuario, string pCorreo, string pRol)
        {
            try
            {
                // Crear una identidad con los claims del usuario. Deberías cargar estos datos desde alguna parte,
                // por ejemplo, de la base de datos, usando el refreshToken para encontrar al usuario correspondiente.
                var claimsIdentity = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.NameIdentifier, pIdUsuario),  
                    new Claim(ClaimTypes.Name,  pUsuario),  
                    new Claim(ClaimTypes.Email, pUsuario),  
                    new Claim(ClaimTypes.Email, pCorreo),
                    new Claim(ClaimTypes.Role,  pRol)
                });

                // Generar nuevos tokens usando la identidad creada.
                string newAccessToken = _tokenService.GenerateAccessToken(claimsIdentity);
                string newRefreshToken = _tokenService.GenerateRefreshToken();

                // Definir los tiempos de expiración para los nuevos tokens.
                DateTime newAccessTokenExpiry = DateTime.UtcNow.AddHours(_tokenService.ExpriteTokenHours); // Vida útil de 1 hora para el access token.
                DateTime newRefreshTokenExpiry = DateTime.UtcNow.AddDays(_tokenService.RefreshTokenDurationInDays); // Vida útil de 7 días para el refresh token.

                // Preparar los parámetros para el procedimiento almacenado que actualizará los tokens en la base de datos.
                SqlParameter[] paramsSQL = new SqlParameter[]
                {
                    new SqlParameter("@REFRESH_TOKEN", refreshToken),
                    new SqlParameter("@NEW_ACCESS_TOKEN", newAccessToken),
                    new SqlParameter("@NEW_REFRESH_TOKEN", newRefreshToken),
                    new SqlParameter("@NEW_ACCESS_TOKEN_EXPIRY", newAccessTokenExpiry),
                    new SqlParameter("@NEW_REFRESH_TOKEN_EXPIRY", newRefreshTokenExpiry)
                };

                // Ejecutar el procedimiento almacenado y verificar el resultado.
                var result = await _dataBase.ExecuteStoredProcedureAsync("spRefreshTokens", paramsSQL);
                if (result.Tables.Count > 0 && result.Tables[0].Rows.Count > 0)
                {
                    // Tokens renovados exitosamente.
                    return true;
                }
                // Refresh token no es válido o ha expirado.
                return false;
            }
            catch (Exception ex)
            {
                _logger.LogError("Error refreshing tokens: " + ex.Message);
                return false;
            }
        }

    }
}
