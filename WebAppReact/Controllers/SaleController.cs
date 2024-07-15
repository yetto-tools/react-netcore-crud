using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Globalization;
using System.Text.Json;
using System.Xml.Linq;
using WebAppReact.DataService;
using WebAppReact.Domain;
using WebAppReact.Helper;

namespace WebAppReact.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SaleController : ControllerBase
    {
        private ILogger _logger;
        private DataBaseContext _DataBase;
        private Sale _sales;
        CultureInfo _cultureInfo = new CultureInfo("es-GT");

        public SaleController(Sale sales, DataBaseContext DataBase, ILogger<SaleController> logger)
        {
            _sales = sales;
            _DataBase = DataBase;
            _logger = logger;
        }
        
        
        [HttpGet("sales")]
        public async Task<IActionResult> ListCategories(int page_size = 250, int page_number = 1)
        {
            //spUsuarios_GetAll
            try
            {
                JsonElement jsonResponse = new JsonElement();
                var result = await _sales.GetAll(page_size, page_number);
                ConvertResponse.Formatter(result);
                jsonResponse = ConvertResponse.ResponseToJson(JsonConvert.SerializeObject(result));
                return Ok(jsonResponse);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error saving user data");
                var fail = ConvertResponse.ResponseFail(JsonConvert.SerializeObject(ex.Message));
                return BadRequest(fail);
            }
        }

        [HttpPost("{id:int}")]
        public async Task<IActionResult> FindById(int id, int? estado = 1)
        {
            try
            {
                JsonElement jsonResponse = new JsonElement();
                var result = await _sales.FindById(id, estado);
                ConvertResponse.Formatter(result);
                jsonResponse = ConvertResponse.ResponseToJson(JsonConvert.SerializeObject(result));
                return Ok(jsonResponse);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error saving user data");
                var fail = ConvertResponse.ResponseFail(JsonConvert.SerializeObject(ex.Message));
                return BadRequest(fail);
            }

        }

        [HttpPost("{nombre}")]
        public async Task<IActionResult> FindByName(string nombre, int? estado = 1)
        {
            try
            {
                JsonElement jsonResponse = new JsonElement();
                var result = await _sales.FindByName(nombre, estado ?? 1);
                ConvertResponse.Formatter(result);
                jsonResponse = ConvertResponse.ResponseToJson(JsonConvert.SerializeObject(result));
                return Ok(jsonResponse);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error during find users");

                var fail = ConvertResponse.ResponseFail(JsonConvert.SerializeObject(ex.Message));
                return BadRequest(fail);
            }
        }



        [HttpGet("search")]
        public async Task<IActionResult> FindByName(string value, int estado = 1)
        {
            try
            {
                JsonElement jsonResponse = new JsonElement();
                var result = await _sales.Search(value, estado);
                ConvertResponse.Formatter(result);
                jsonResponse = ConvertResponse.ResponseToJson(JsonConvert.SerializeObject(result));
                return Ok(jsonResponse);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error saving user data");
                var fail = ConvertResponse.ResponseFail(JsonConvert.SerializeObject(ex.Message));
                return BadRequest(fail);
            }

        }

        [HttpPut("save")]
        public async Task<IActionResult> SaveCategories(JsonElement? jsonRequest)
        {
            if (jsonRequest == null || !jsonRequest.HasValue)
            {
                _logger.LogError("Empty request received in SaveUser");
                return BadRequest("Request is empty");
            }

            try
            {
                JsonElement jsonResponse = new JsonElement();
                Int64 id            = jsonRequest.Value.TryGetProperty("id", out JsonElement var_id) 
                                        ? var_id.GetInt64() 
                                        : 0;
                string? fecha_doc    = jsonRequest.Value.TryGetProperty("fecha_doc", out JsonElement var_fecha_doc)
                                        ? var_fecha_doc.GetDateTime().ToString(_cultureInfo )
                                        : DateTime.Now.ToString(_cultureInfo);
                string? nombre      = jsonRequest.Value.TryGetProperty("nombre", out JsonElement var_nombre) 
                                        ? var_nombre.GetString()?.Trim() 
                                        : null;
                string? descripcion = jsonRequest.Value.TryGetProperty("descripcion", out JsonElement var_descripcion) 
                                        ? var_descripcion.GetString()?.Trim() 
                                        : null;
                Int32 estado        = jsonRequest.Value.TryGetProperty("estado", out JsonElement var_estado) 
                                        ? var_estado.GetInt32() 
                                        : 1;
                Int64 uid_creacion  = jsonRequest.Value.TryGetProperty("uid_creacion", out JsonElement var_uid_creacion) 
                                        ? var_uid_creacion.GetInt64() : 0;
                string? comentario  = jsonRequest.Value.TryGetProperty("comentario", out JsonElement var_comentariod) 
                                        ? var_comentariod.GetString()?.Trim() 
                                        : null;

                string? categoriesXml = string.Empty;
                if (jsonRequest.Value.TryGetProperty("lineas_detalle", out JsonElement lineas_detalle))
                {
                    categoriesXml = CreateSaleDetailXml(lineas_detalle);
                }



                var result = await _sales.Save(id, nombre, descripcion, estado, uid_creacion, comentario);


                ConvertResponse.Formatter(result);
                jsonResponse = ConvertResponse.ResponseToJson(JsonConvert.SerializeObject(result));

                if (jsonResponse.ToString().Contains("ErrorState"))
                {
                    return StatusCode(409, jsonResponse);
                }

                return Ok(jsonResponse);



            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error saving user data");
                var fail = ConvertResponse.ResponseFail(JsonConvert.SerializeObject(ex.Message));
                return BadRequest(fail);
            }


        }

        private string CreateSaleDetailXml(JsonElement   pLinesDetalle)
        {
            // Crea el elemento raíz 'Categorias'
            var xDoc = new XDocument(new XElement("detalles"));

            // Iterar a través de cada categoría en el array JSON
            foreach (JsonElement linea_detalle in pLinesDetalle.EnumerateArray())
            {
                // Agregar un elemento 'Categoria' para cada categoría en el JSON
                xDoc.Root?.Add(new XElement("linea",
                    new XElement("no_linea",                linea_detalle.GetProperty("no_linea").GetInt64()),
                    new XElement("cantidad",                linea_detalle.GetProperty("cantidad").GetInt64()),
                    new XElement("id_producto",             linea_detalle.GetProperty("id_producto").GetInt64()),
                    new XElement("precio_vente",            linea_detalle.GetProperty("precio_vente").GetString()?.Trim()),
                    new XElement("precio_venta_sin_iva",    linea_detalle.GetProperty("precio_venta_sin_iva").GetString()),
                    new XElement("monto",                   linea_detalle.GetProperty("monto").GetString()?.Trim() ?? ""),  // Usar ?? para manejar posibles nulos                    
                    new XElement("monto_sin_iva",           linea_detalle.GetProperty("monto_sin_iva").GetString()?.Trim() ?? ""),  // Usar ?? para manejar posibles nulos                    
                    new XElement("uid_creacion",            linea_detalle.GetProperty("uid_creacion").GetInt64()),
                    new XElement("comentario",              linea_detalle.GetProperty("comentario").GetString()?.Trim() ?? "")  // Usar ?? para manejar posibles nulos
                ));
            }

            return xDoc.ToString();
        }




    }
}
