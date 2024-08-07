﻿using Azure.Core;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Text.Json;
using WebAppReact.DataService;
using WebAppReact.Domain;
using WebAppReact.Helper;

namespace WebAppReact.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private ILogger _logger;
        private DataBaseContext _DataBase;
        private Category _categories;

        public CategoryController(Category categoiries, DataBaseContext DataBase, ILogger<CategoryController> logger)
        {
            _categories = categoiries;
            _DataBase = DataBase;
            _logger = logger;
        }

        [HttpGet("categories")]
        
        public async Task<IActionResult> ListCategories(int page_size = 250, int page_number = 1)
        {
            //spUsuarios_GetAll
            try
            {
                JsonElement jsonResponse = new JsonElement();
                var result = await _categories.GetAll(page_size, page_number);
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
                var result = await _categories.FindById(id, estado);
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
                var result = await _categories.FindByName(nombre, estado ?? 1);
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
                var result = await _categories.Search(value, estado);
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
                Int64 id = jsonRequest.Value.TryGetProperty("id", out JsonElement var_id) ? var_id.GetInt64() : 0;
                string? nombre = jsonRequest.Value.TryGetProperty("nombre", out JsonElement var_nombre) ? var_nombre.GetString() : null;
                string? descripcion = jsonRequest.Value.TryGetProperty("descripcion", out JsonElement var_descripcion) ? var_descripcion.GetString() : null;
                Int32 estado = jsonRequest.Value.TryGetProperty("estado", out JsonElement var_estado) ? var_estado.GetInt32() : 1;
                Int64 uid_creacion = jsonRequest.Value.TryGetProperty("uid_creacion", out JsonElement var_uid_creacion) ? var_uid_creacion.GetInt64() : 0;
                string? comentario = jsonRequest.Value.TryGetProperty("comentario", out JsonElement var_comentariod) ? var_comentariod.GetString() : null;




                var result = await _categories.Save(id, nombre, descripcion,estado, uid_creacion, comentario);


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






    }
}
