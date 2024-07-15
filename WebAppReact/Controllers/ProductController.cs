using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Text.Json;
using System.Xml.Linq;
using WebAppReact.DataService;
using WebAppReact.Domain;
using WebAppReact.Helper;

namespace WebAppReact.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private ILogger _logger;
        private DataBaseContext _DataBase;
        private Product _products;

        public ProductController(Product products, DataBaseContext DataBase, ILogger<ProductController> logger)
        {
            _logger = logger;
            _DataBase = DataBase;
            _products = products;
        }


        [HttpGet("products")]
        //[Authorize]
        public async Task<IActionResult> ListProducts(int page_size = 250, int page_number = 1)
        {
            //spUsuarios_GetAll
            try
            {
                JsonElement jsonResponse = new JsonElement();
                var result = await _products.GetAll(page_size, page_number);
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
        //[Authorize]
        public async Task<IActionResult> FindById(int id, int? estado = null)
        {
            try
            {
                JsonElement jsonResponse = new JsonElement();
                var result = await _products.FindById(id, estado ?? 1);
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

        [HttpPost("{nombre}")]
        //[Authorize]
        public async Task<IActionResult> FindByName(string nombre, int? estado = 1)
        {
            try
            {
                JsonElement jsonResponse = new JsonElement();
                var result = await _products.FindByName(nombre, estado ?? 1);
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
        //[Authorize]
        public async Task<IActionResult> Search(string nombre, int? estado = 1)
        {
            try
            {
                JsonElement jsonResponse = new JsonElement();
                var result = await _products.Search(nombre, estado ?? 1);
                
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
        //[Authorize]
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
                Int64 id            = jsonRequest.Value.TryGetProperty("id"           , out JsonElement var_id          ) ? var_id.GetInt64()           : 0;
                string? nombre      = jsonRequest.Value.TryGetProperty("nombre"       , out JsonElement var_nombre      ) ? var_nombre.GetString()      : null;
                string? precio      = jsonRequest.Value.TryGetProperty("precio"       , out JsonElement var_precio      ) ? var_precio.GetString()      : null;
                string? costo       = jsonRequest.Value.TryGetProperty("costo"        , out JsonElement var_costo        ) ? var_costo.GetString()      : null;
                string? descripcion = jsonRequest.Value.TryGetProperty("descripcion"  , out JsonElement var_descripcion ) ? var_descripcion.GetString() : null;
                Int32 estado        = jsonRequest.Value.TryGetProperty("estado"       , out JsonElement var_estado      ) ? var_estado.GetInt32()       : 1;
                Int64 uid_creacion  = jsonRequest.Value.TryGetProperty("uid_creacion" , out JsonElement var_uid_creacion) ? var_uid_creacion.GetInt64() : 0;
                string? comentario  = jsonRequest.Value.TryGetProperty("comentario"   , out JsonElement var_comentariod ) ? var_comentariod.GetString() : null;


                string? categoriesXml = string.Empty;
                if (jsonRequest.Value.TryGetProperty("categorias", out JsonElement categorias))
                {
                    categoriesXml = CreateCategoriesXml(categorias);
                }


                var result = await _products.Save(id, nombre, precio, costo, descripcion, categoriesXml, estado, uid_creacion, comentario);
            
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


        private string CreateCategoriesXml(JsonElement categories)
        {
            // Crea el elemento raíz 'Categorias'
            var xDoc = new XDocument(new XElement("Categorias"));

            // Iterar a través de cada categoría en el array JSON
            foreach (JsonElement categoria in categories.EnumerateArray())
            {
                // Agregar un elemento 'Categoria' para cada categoría en el JSON
                xDoc.Root?.Add(new XElement("categoria",
                    new XElement("id_categoria", categoria.GetProperty("id_categoria").GetInt64()),
                    new XElement("nombre", categoria.GetProperty("nombre").GetString()),
                    new XElement("descripcion", categoria.GetProperty("descripcion").GetString() ?? ""),  // Usar ?? para manejar posibles nulos
                    new XElement("estado", categoria.GetProperty("estado").GetInt32()),
                    new XElement("uid_creacion", categoria.GetProperty("uid_creacion").GetInt64()),
                    new XElement("comentario", categoria.GetProperty("comentario").GetString() ?? "")  // Usar ?? para manejar posibles nulos
                ));
            }

            return xDoc.ToString();
        }


    }
}
