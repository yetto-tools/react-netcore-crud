import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Clean from 'vite-plugin-clean';


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(),

        Clean({
            targets: ['dist','../wwwroot', 'build-cache'], // Limpia m�ltiples directorios
        verbose: true // Activa mensajes detallados
    })],
    build: {
        outDir: '../wwwroot', // Directorio de salida para la construcci�n
        assetsDir: 'assets', // Subdirectorio para los archivos est�ticos
        minify: 'esbuild', // Herramienta para minificar el c�digo, puede ser 'terser', 'esbuild' o false
        sourcemap: true, // Generar archivos de mapa de c�digo fuente
        chunkSizeWarningLimit: 500, // L�mite en KB para advertencia de tama�o de chunks
    }
})
