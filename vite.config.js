import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 8200,
    },
    plugins: [vue()],
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src"),
        },
    },
    optimizeDeps: {
        include: ["choices.js", "choices/public/assets/styles/choices.min.css"],
    },
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.js"),
            name: "VueDino",
        },
        rollupOptions: {
            external: ["vue"],
            output: {
                // Provide global variables to use in the UMD build
                // Add external deps here
                globals: {
                    vue: "Vue",
                },
            },
        },
    },
})
