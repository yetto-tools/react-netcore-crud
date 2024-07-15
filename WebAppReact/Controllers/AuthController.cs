using Azure;
using Azure.Core;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Data;
using System.Security.Claims;
using System.Text.Json;
using WebAppReact.DataService;
using WebAppReact.Domain;
using WebAppReact.Helper;
using WebAppReact.Hepler;


namespace WebAppReact.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private ILogger _logger;
        private DataBaseContext _DataBase;
        private User _user;
        private TokenService _tokenService;

        public AuthController(User user, DataBaseContext DataBase, ILogger<AuthController> logger, TokenService tokenService)
        {
            _logger = logger;
            _DataBase = DataBase;
            _user = user;
            _tokenService = tokenService;
        }


        [HttpPost("login")]
        public async Task<IActionResult> AuthenticateUser([FromBody] JsonElement? jsonRequest)
        {
            try
            {
                JsonElement jsonResponse = new JsonElement();
                string? username = jsonRequest.Value.TryGetProperty("username", out JsonElement var_usuario) ? var_usuario.GetString() : null;
                string? password = jsonRequest.Value.TryGetProperty("password", out JsonElement var_password) ? var_password.GetString() : null;

                if (jsonRequest.HasValue.ToString() == null || string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
                {
                    _logger.LogError($"<{jsonRequest}> Empty request received in AuthenticateUser");

                    
                    jsonResponse = ConvertResponse.ResponseFail(message:"Empty request received in AuthenticateUser", result: LevelResult.warn );
                    return BadRequest(jsonResponse);
                }


                var result = await _user.Login(pNombre: username.Trim().ToLower());
                

                if (result.Tables[0].Rows[0]["result"].ToString() == "0")
                {
                    ConvertResponse.Formatter(result);
                    jsonResponse = ConvertResponse.ResponseToJson(JsonConvert.SerializeObject(result));
                    return Ok(jsonResponse);
                }

                var userData = result.Tables[1].Rows[0];
                var isValidCredential = PasswordHelper.VerifyPassword(password.Trim(), userData["password"].ToString());

                if (!isValidCredential)
                {
                    
                    jsonResponse = ConvertResponse.ResponseFail("Usuario o contraseña incorrectos",result: LevelResult.warn);
                    return Unauthorized(jsonResponse);
                }

                
                if (!userData.IsNull("id_usuario") && !userData.IsNull("nombre"))
                {
                    // Create token and send response
                    var accessToken = _tokenService.GenerateAccessToken(new ClaimsIdentity(new Claim[]
                    {
                        new Claim(ClaimTypes.NameIdentifier, $"{userData["id_usuario"]}") ,
                        new Claim(ClaimTypes.Name,           $"{userData["nombre"]}") ,
                        new Claim(ClaimTypes.Email,          $"{userData["correo"]}") ,
                        new Claim(ClaimTypes.Role,           $"{userData["rol"]}") ,
                    }));

                    var refreshToken = _tokenService.GenerateRefreshToken();
                    var accessTokenExpiry = DateTime.UtcNow.AddMinutes(_tokenService.AccessTokenDurationInMinutes);
                    var refreshTokenExpiry = DateTime.UtcNow.AddDays(_tokenService.RefreshTokenDurationInDays);

                    var tokenCreated = await _user.CreateTokens(Convert.ToInt64(userData["id_usuario"].ToString()), accessToken, refreshToken, accessTokenExpiry, refreshTokenExpiry);

                    ConvertResponse.Formatter(result, accessToken, refreshToken);

                }


                jsonResponse = ConvertResponse.ResponseToJson(JsonConvert.SerializeObject(result));
                return Ok(jsonResponse);

            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error during user authentication");

                var fail = ConvertResponse.ResponseFail(JsonConvert.SerializeObject(ex.Message));
                return BadRequest(fail);
            }
        }

        [HttpPost("logout")]
        public async Task<IActionResult> UnauthenticateUser([FromBody] JsonElement? jsonRequest)
        {
            try
            {
                return Ok("logut out");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error during user Unauthentication");

                var fail = ConvertResponse.ResponseFail(JsonConvert.SerializeObject(ex.Message));
                return BadRequest(fail);
            }

        }


    }
}
