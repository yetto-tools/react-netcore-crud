import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Clean from 'vite-plugin-clean';


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(),

        Clean({
            targets: ['dist','../wwwroot', 'build-cache'], // Limpia múltiples directorios
        verbose: true // Activa mensajes detallados
    })],
    build: {
        outDir: '../wwwroot', // Directorio de salida para la construcción
        assetsDir: 'assets', // Subdirectorio para los archivos estáticos
        minify: 'esbuild', // Herramienta para minificar el código, puede ser 'terser', 'esbuild' o false
        sourcemap: true, // Generar archivos de mapa de código fuente
        chunkSizeWarningLimit: 500, // Límite en KB para advertencia de tamaño de chunks
    }
})
