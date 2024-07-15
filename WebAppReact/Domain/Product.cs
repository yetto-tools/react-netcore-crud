using Microsoft.Data.SqlClient;
using Microsoft.IdentityModel.Tokens;
using System.Data;
using WebAppReact.DataService;

namespace WebAppReact.Domain
{
    public class Product
    {
        private readonly DataBaseContext _dataBase;
        private readonly ILogger _logger;

        public Product(DataBaseContext dataBaseContext, ILogger<Product> logger)
        {
            _dataBase = dataBaseContext;
            _logger = logger;
        }


        public async Task<DataSet> Save(
                                        Int64 pId,
                                        string? pNombre,
                                        string? pPrecio,
                                        string? pCosto,
                                        string? pDescripcion,
                                        string? pXmlCategorias,
                                        int pEstado,
                                        Int64 pUid_creacion,
                                        string? pComentario = null
        )
        {
            DataSet data = new DataSet("PRODUCTO");
            try
            {
                SqlParameter[] paramsSQL = new SqlParameter[]
                {
                    new SqlParameter("@pID_PRODUCTO"    , pId                                                             ),
                    new SqlParameter("@pNOMBRE"         , pNombre.IsNullOrEmpty()           ?  null :  pNombre?.Trim()     ),
                    new SqlParameter("@pPRECIO"         , pPrecio.IsNullOrEmpty()           ?  null :  pPrecio?.Trim()     ),
                    new SqlParameter("@pCOSTO"          , pCosto.IsNullOrEmpty()            ?  null :  pCosto?.Trim()    ),
                    new SqlParameter("@pDESCRIPCION"    , pDescripcion.IsNullOrEmpty()      ?  null :  pComentario?.Trim() ),
                    new SqlParameter("@pXML_CATEGORIAS" , pXmlCategorias.IsNullOrEmpty()    ?  null :  pXmlCategorias?.Trim() ),
                    new SqlParameter("@pESTADO"         , pEstado                                                     ),
                    new SqlParameter("@pUID_CREACION"   , pUid_creacion                                               ),
                    new SqlParameter("@pCOMENTARIO"     , pComentario.IsNullOrEmpty()       ?  null :  pComentario?.Trim()  ),
                };

                data = await _dataBase.ExecuteStoredProcedureAsync("spProducto_Save", paramsSQL);
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

            return await _dataBase.ExecuteStoredProcedureAsync("spProducto_GetAll", paramsSQL);
        }


        public async Task<DataSet> Search(string? pValor = null, int pEstado = 1)
        {
            SqlParameter[] paramsSQL = new SqlParameter[]
            {
                new SqlParameter("@pValor",       pValor ),
                new SqlParameter("@pEstado",      pEstado),
            };

            return await _dataBase.ExecuteStoredProcedureAsync("spProducto_Search", paramsSQL);
        }

        public async Task<DataSet> FindById(int pIdUsuario, int? pEstado)
        {
            SqlParameter[] paramsSQL = new SqlParameter[]
            {
                new SqlParameter("@pID_PRODUCTO",   pIdUsuario),
                new SqlParameter("@pESTADO",       pEstado ?? 1),
            };

            return await _dataBase.ExecuteStoredProcedureAsync("spUsuario_By", paramsSQL);
        }

        public async Task<DataSet> FindByName(string pNombre, int? pEstado = null)
        {
            SqlParameter[] paramsSQL = new SqlParameter[]
            {
                new SqlParameter("@pNOMBRE",        pNombre),
                new SqlParameter("@pESTADO",        pEstado ?? 1),
            };

            return await _dataBase.ExecuteStoredProcedureAsync("spProducto_By", paramsSQL);
        }
    }
}

