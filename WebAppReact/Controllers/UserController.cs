using Microsoft.AspNetCore.Authorization;
using Azure.Core;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Data;
using System.Security.Cryptography;
using System.Text.Json;
using WebAppReact.DataService;
using WebAppReact.Domain;
using WebAppReact.Helper;
using WebAppReact.Hepler;

namespace WebAppReact.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private ILogger _logger;
        private DataBaseContext _DataBase;
        private User _user;

        public UserController(User user, DataBaseContext DataBase,  ILogger<UserController> logger) 
        { 
            _logger = logger;
            _DataBase = DataBase;
            _user = user;
        }

        [HttpGet("users")]
        
        public async Task<IActionResult> GetUsers(int page_size = 250, int page_number = 1)
        {
            //spUsuarios_GetAll
            try
            {
                JsonElement jsonResponse = new JsonElement();
                var result = await _user.GetAll(page_size, page_number);
                
                ConvertResponse.Formatter(result);
                jsonResponse = ConvertResponse.ResponseToJson(JsonConvert.SerializeObject(result));
                return Ok(jsonResponse);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error list users");
                var fail = ConvertResponse.ResponseFail(JsonConvert.SerializeObject(ex.Message));
                return BadRequest(fail);
            }
        }

        [HttpPost("{id:int}")]
        
        public async Task<IActionResult> FindById(int id, int? estado = null)
        {
            try
            {
                JsonElement jsonResponse = new JsonElement();
                var result = await _user.FindById(id, estado ?? 1);
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
        
        public async Task<IActionResult> FindByName(string nombre, int? estado = 1)
        {
            try
            {
                JsonElement jsonResponse = new JsonElement();
                var result = await _user.FindByName(nombre,  estado ?? 1);
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
        
        [HttpPost("search")]
        
        public async Task<IActionResult> FindBySearch(string? nombre = null, int? estado = null )
        {
            try
            {
                JsonElement jsonResponse = new JsonElement();
                var result = await _user.Search(nombre, estado ?? 1 );
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
        
        [HttpPut("save")]
        
        public async Task<IActionResult> SaveUser(JsonElement? jsonRequest) 
        {
            if (jsonRequest == null || !jsonRequest.HasValue)
            {
                _logger.LogError("Empty request received in SaveUser");
                return BadRequest("Request is empty");
            }

            try
            {
                JsonElement jsonResponse = new JsonElement();
                Int64   id              = jsonRequest.Value.TryGetProperty("id_usuario"     , out JsonElement var_id            ) ? var_id.GetInt64             () : 0;
                string? usuario         = jsonRequest.Value.TryGetProperty("usuario"        , out JsonElement var_usuario       ) ? var_usuario.GetString       () : null;
                string? correo          = jsonRequest.Value.TryGetProperty("correo"         , out JsonElement var_correo        ) ? var_correo.GetString        () : null;
                string? password        = jsonRequest.Value.TryGetProperty("password"       , out JsonElement var_password      ) ? var_password.GetString      () : null;
                Int32   estado          = jsonRequest.Value.TryGetProperty("estado"         , out JsonElement var_estado        ) ? var_estado.GetInt32         () : 1;
                Int64   uid_creacion    = jsonRequest.Value.TryGetProperty("uid_creacion"   , out JsonElement var_uid_creacion  ) ? var_uid_creacion.GetInt64   () : 0;
                string? comentario      = jsonRequest.Value.TryGetProperty("comentario"     , out JsonElement var_comentariod   ) ? var_comentariod.GetString   () : null;



                var hash = PasswordHelper.HashPassword(password);

                var isValidCredential = PasswordHelper.VerifyPassword(password, hash);

                if (!isValidCredential)
                {                   
                    jsonResponse = ConvertResponse.ResponseFail(message: "Clave de Usuario Incorrecta", result: LevelResult.warn);
                    return BadRequest(jsonResponse);
                }


                var result = await _user.Save(id, usuario, correo, hash, estado, uid_creacion, comentario);

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
                _logger.LogError(ex, "Error during save user");
                var fail = ConvertResponse.ResponseFail(JsonConvert.SerializeObject(ex.Message));
                return BadRequest(fail);
            }


        }

    }
}
