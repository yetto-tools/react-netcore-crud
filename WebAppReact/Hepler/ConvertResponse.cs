using System.Data;
using System.Text.Json;

namespace WebAppReact.Helper
{
    public enum LevelResult
    {
        error = -1,
        warn = 0,
        success = 1,
        info = 2,
    }

    public static class ConvertResponse
    {

        public static void Formatter(DataSet result, string? accessToken = null, string? refreshToken = null)
        {

            DataTable tokenTable = new DataTable("token");
            if(accessToken != null && refreshToken != null) {
                // Añade la tabla de tokens
                tokenTable.Columns.Add("access_token", typeof(string));
                tokenTable.Columns.Add("refresh_token", typeof(string));
                DataRow tokenRow = tokenTable.NewRow();
                tokenRow["access_token"] = accessToken ?? null;
                tokenRow["refresh_token"] = refreshToken ?? null;
                tokenTable.Rows.Add(tokenRow);
                result.Tables.Add(tokenTable);
            }

            // Asumiendo que el DataSet ya tiene al menos una tabla cuando esta función es llamada
            if (result.Tables.Count > 1 )
            {
                if (result.Tables[1].Columns.Contains("password"))
                {

                if (result.Tables[1].Rows.Count > 0)
                    {

                    // Borra el valor y luego la columna 'password' en la segunda tabla
                    result.Tables[1].Rows[0]["password"] = DBNull.Value;
                    result.Tables[1].Columns.Remove("password");
                    }
                }
            }

            
                if (result.Tables.Count > 0)
                    result.Tables[0].TableName = "response";
                if(result.Tables.Count > 1 )
                    result.Tables[1].TableName = "content";
            
        }

        public static JsonElement ResponseToJson(string json)
        {
            try
            {
                using (JsonDocument document = JsonDocument.Parse(json))
                {
                    return document.RootElement.Clone(); // Devuelve una copia del elemento raíz
                }
            }
            catch (JsonException)
            {
                // Maneja el error de análisis aquí
                throw new JsonException("Invalid JSON format");
            }
        }

        public static JsonElement ResponseFail(string message, LevelResult result = LevelResult.error)
        {
            try
            {
                var fail = new
                {
                    response = new[] { new { result, message } },
                    content = new object[0]
                };

                string json = JsonSerializer.Serialize(fail);
                using (JsonDocument document = JsonDocument.Parse(json))
                {
                    return document.RootElement.Clone(); // Devuelve una copia del elemento raíz
                }
            }
            catch (JsonException)
            {
                // Maneja el error de análisis aquí
                throw new JsonException("Invalid JSON format");
            }
        }
    }
}
