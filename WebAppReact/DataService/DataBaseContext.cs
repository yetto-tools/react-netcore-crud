using Microsoft.Data.SqlClient;
using System.Data;


namespace WebAppReact.DataService
{
    public class DataBaseContext
    {
        private readonly string _connectionString;

        public DataBaseContext(string connectionString)
        {
            _connectionString = connectionString;
        }

        private DataSet CreateErrorDataSet(string errorMessage)
        {
            DataSet dataSet = new DataSet();

            // Result and Message table
            DataTable responsetTable = new DataTable("response");
            
            responsetTable.Columns.Add("result", typeof(int));
            responsetTable.Columns.Add("message", typeof(string));
            responsetTable.Rows.Add(-1, errorMessage);
            dataSet.Tables.Add(responsetTable);

            // Error Details table
            DataTable contentTable = new DataTable("content");
            contentTable.Columns.Add("error", typeof(string));
            contentTable.Rows.Add(errorMessage);
            dataSet.Tables.Add(contentTable);

            return dataSet;
        }

        public DataSet ExecuteStoredProcedure(string storedProcedureName, SqlParameter[]? parameters = null)
        {
            try
            {
                using (var connection = new SqlConnection(_connectionString))
                {
                    connection.Open();
                    using (var command = new SqlCommand(storedProcedureName, connection))
                    {
                        command.CommandType = CommandType.StoredProcedure;
                        if (parameters != null)
                        {
                            command.Parameters.AddRange(parameters);
                        }

                        using (var adapter = new SqlDataAdapter(command))
                        {
                            DataSet dataSet = new DataSet("Response");
                            adapter.Fill(dataSet);
                            return dataSet;
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                return CreateErrorDataSet(ex.Message);
            }
        }

        public DataSet ExecuteQueryRaw(string queryRaw, SqlParameter[]? parameters = null)
        {
            try
            {
                using (var connection = new SqlConnection(_connectionString))
                {
                    connection.Open();
                    using (var command = new SqlCommand(queryRaw, connection))
                    {
                        command.CommandType = CommandType.Text;
                        if (parameters != null)
                        {
                            command.Parameters.AddRange(parameters);
                        }

                        using (var adapter = new SqlDataAdapter(command))
                        {
                            DataSet dataSet = new DataSet("response");
                            adapter.Fill(dataSet);
                            return dataSet;
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                return CreateErrorDataSet(ex.Message);
            }
        }

        public async Task<DataSet> ExecuteStoredProcedureAsync(string storedProcedureName, SqlParameter[]? parameters = null)
        {
            try
            {
                using (var connection = new SqlConnection(_connectionString))
                {
                    await connection.OpenAsync().ConfigureAwait(false);
                    using (var command = new SqlCommand(storedProcedureName, connection))
                    {
                        command.CommandType = CommandType.StoredProcedure;
                        if (parameters != null)
                        {
                            command.Parameters.AddRange(parameters);
                        }

                        using (var adapter = new SqlDataAdapter(command))
                        {
                            DataSet dataSet = new DataSet("response");
                            await Task.Run(() => adapter.Fill(dataSet)).ConfigureAwait(false);
                            return dataSet;
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                return CreateErrorDataSet(ex.Message);
            }
        }

        public async Task<DataSet> ExecuteQueryRawAsync(string queryRaw, SqlParameter[]? parameters = null)
        {
            try
            {
                using (var connection = new SqlConnection(_connectionString))
                {
                    await connection.OpenAsync().ConfigureAwait(false);
                    using (var command = new SqlCommand(queryRaw, connection))
                    {
                        command.CommandType = CommandType.Text;
                        if (parameters != null)
                        {
                            command.Parameters.AddRange(parameters);
                        }

                        using (var adapter = new SqlDataAdapter(command))
                        {
                            DataSet dataSet = new DataSet("response");
                            await Task.Run(() => adapter.Fill(dataSet)).ConfigureAwait(false);
                            return dataSet;
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                return CreateErrorDataSet(ex.Message);
            }
        }
    }
}
