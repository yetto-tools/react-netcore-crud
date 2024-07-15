using Microsoft.Data.SqlClient;
using Microsoft.IdentityModel.Tokens;
using System.Data;
using WebAppReact.DataService;

namespace WebAppReact.Domain
{
    public class Customer
    {
        private readonly DataBaseContext _dataBase;
        private readonly ILogger _logger;

        public Customer(DataBaseContext dataBaseContext, ILogger<Customer> logger)
        {
            _dataBase = dataBaseContext;
            _logger = logger;
        }

        public async Task<DataSet> GetAll(int? pPage_size, int? pPage_number)
        {
            SqlParameter[] paramsSQL = new SqlParameter[]
            {
                new SqlParameter("@pPageSize",     pPage_size),
                new SqlParameter("@pPageNumber",   pPage_number),

            };

            return await _dataBase.ExecuteStoredProcedureAsync("spCliente_GetAll", paramsSQL);
        }

        public async Task<DataSet> FindById(int pId, int? pEstado = null)
        {
            SqlParameter[] paramsSQL = new SqlParameter[]
            {
                new SqlParameter("@pID_CUSTOMER",   pId),
                new SqlParameter("@pESTADO",         pEstado),
            };

            return await _dataBase.ExecuteStoredProcedureAsync("spCliente_By", paramsSQL);
        }

        public async Task<DataSet> FindByName(string pNombre, int? pEstado = null)
        {
            SqlParameter[] paramsSQL = new SqlParameter[]
            {
                new SqlParameter("@pNOMBRE",         pNombre),
                new SqlParameter("@pESTADO",         pEstado),

            };

            return await _dataBase.ExecuteStoredProcedureAsync("spCliente_By", paramsSQL);
        }

        public async Task<DataSet> Search(string pValor, int pEstado = 1)
        {
            SqlParameter[] paramsSQL = new SqlParameter[]
            {
                new SqlParameter("@pValor",       pValor ),
                new SqlParameter("@pEstado",      pEstado),
            };

            return await _dataBase.ExecuteStoredProcedureAsync("spCliente_Search", paramsSQL);
        }

        public async Task<DataSet> Save(
                                Int64 pId,
                                string? pNombre,
                                string? pNit,
                                string? pDireccion,
                                string? pCorreo,
                                string? pTelefono,
                                int pEstado,
                                Int64 pUid_creacion,
                                string? pComentario = null
        )
        {
            DataSet data = new DataSet("CUSTOMER");
            try
            {
                SqlParameter[] paramsSQL = new SqlParameter[]
                {
                    new SqlParameter("@pID_CLIENTE"    , pId                                                          ),
                    new SqlParameter("@pNOMBRE"         , pNombre.IsNullOrEmpty()         ?  null : pNombre?.Trim()    ),
                    new SqlParameter("@pNIT"            , pNit.IsNullOrEmpty()            ?  null : pNit?.Trim()       ),
                    new SqlParameter("@pDIRECCION"      , pDireccion.IsNullOrEmpty()      ?  null : pDireccion?.Trim() ),
                    new SqlParameter("@pCORREO"         , pCorreo.IsNullOrEmpty()         ?  null : pCorreo?.Trim()    ),
                    new SqlParameter("@pTELEFONO"       , pTelefono.IsNullOrEmpty()       ?  null : pTelefono?.Trim()  ),
                    new SqlParameter("@pESTADO"         , pEstado                                                      ),
                    new SqlParameter("@pUID_CREACION"   , pUid_creacion                                                ),
                    new SqlParameter("@pCOMENTARIO"     , pComentario.IsNullOrEmpty()     ?  null : pComentario?.Trim()),
                };

                data = await _dataBase.ExecuteStoredProcedureAsync("spCliente_Save", paramsSQL);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
            }
            return data;

        }


    }
}
