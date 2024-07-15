using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace WebAppReact.Domain
{
    public class TokenSettings
    {
        public string? SecretKey { get; set; }
        public string? Issuer { get; set; }
        public string? Audience { get; set; }
        public double AccessTokenDurationInMinutes { get; set; }
        public double RefreshTokenDurationInDays { get; set; }
        public double ExpriteTokenHours { get; set; }
    }

    public class TokenService
    {
        private readonly TokenSettings _tokenSettings;
        public readonly double ExpriteTokenHours;
        public readonly double RefreshTokenDurationInDays;
        public readonly double AccessTokenDurationInMinutes;

        public TokenService(TokenSettings tokenSettings)
        {
            _tokenSettings = tokenSettings;
            ExpriteTokenHours = tokenSettings.ExpriteTokenHours;
            RefreshTokenDurationInDays = tokenSettings.RefreshTokenDurationInDays;
            AccessTokenDurationInMinutes = tokenSettings.AccessTokenDurationInMinutes;
        }

        public string GenerateAccessToken(ClaimsIdentity identity)
        {
            var secretKey = _tokenSettings?.SecretKey;
            if (secretKey == null)
            {
                throw new InvalidOperationException("Secret Key is Empty");
            }
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = identity,
                Issuer = _tokenSettings.Issuer,
                Audience = _tokenSettings.Audience,
                Expires = DateTime.UtcNow.AddMinutes(_tokenSettings.AccessTokenDurationInMinutes),
                SigningCredentials = credentials
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }

        public string GenerateRefreshToken()
        {
            var randomNumber = new byte[32];
            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(randomNumber);
                return Convert.ToBase64String(randomNumber);
            }
        }

        public ClaimsIdentity GetIdentity(string pIdUsuario, string pUsuario, string pCorreo, string pRol)
        {
            var userClaims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, pIdUsuario),
                new Claim(ClaimTypes.Name, pUsuario),
                new Claim(ClaimTypes.Email, pCorreo),
                new Claim(ClaimTypes.Role, pRol)
            };

            return new ClaimsIdentity(userClaims, "bearer");
        }

        public ClaimsPrincipal? ValidateToken(string token)
        {
            var secretKey = _tokenSettings?.SecretKey;
            if (secretKey == null)
            {
                throw new InvalidOperationException("Secret Key is Empty");
            }

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.UTF8.GetBytes(secretKey);
            var validationParameters = new TokenValidationParameters
            {
                ValidateIssuer = true,
                ValidateAudience = true,
                ValidateLifetime = true,
                ValidateIssuerSigningKey = true,
                ValidIssuer = _tokenSettings.Issuer,
                ValidAudience = _tokenSettings.Audience,
                IssuerSigningKey = new SymmetricSecurityKey(key),
                ClockSkew = TimeSpan.Zero // Elimina la tolerancia en la expiración del token
            };

            try
            {
                var principal = tokenHandler.ValidateToken(token, validationParameters, out SecurityToken validatedToken);
                return principal;
            }
            catch
            {
                return null;
            }
        }
    }
}
