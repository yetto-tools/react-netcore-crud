using System.Security.Cryptography;
using System.Text;

namespace WebAppReact.Hepler
{
    public class PasswordHelper
    {
        // Generar un hash SHA256 de una contraseña con sal
        public static string HashPassword(string password, string? salt = null)
        {

            if (salt == null)
            {
                salt = "3nCr1pt3d";
            }

            using (SHA256 sha256 = SHA256.Create())
            {
                // Convertir la contraseña y la sal a un array de bytes
                byte[] bytes = Encoding.UTF8.GetBytes(password + salt);
                // Hashear los bytes
                byte[] hash = sha256.ComputeHash(bytes);

                // Convertir el array de bytes de vuelta a una cadena hexadecimal
                StringBuilder stringBuilder = new StringBuilder();
                for (int i = 0; i < hash.Length; i++)
                {
                    stringBuilder.Append(hash[i].ToString("x2"));
                }
                return stringBuilder.ToString();
            }
        }

        public static bool VerifyPassword(string password, string hashedPassword)
        {
            string hashedInput = HashPassword(password);
            return hashedPassword == hashedInput;
        }

        // Generar una sal aleatoria
        public static string GenerateSalt()
        {
            byte[] randomBytes = new byte[32]; // 256 bits
            RandomNumberGenerator.Fill(randomBytes); // Método estático recomendado
            return Convert.ToBase64String(randomBytes);
        }
        public static string GenerateSecureSecretKey()
        {
            using (var random = RandomNumberGenerator.Create())
            {
                byte[] keyBytes = new byte[32]; // 256 bits
                random.GetBytes(keyBytes);
                return Convert.ToBase64String(keyBytes); // Convierte los bytes a una cadena segura
            }
        }
    }
}
