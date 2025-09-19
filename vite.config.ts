import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import path from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, "./lib/index.ts"),
            name: "react-beautiful-timeline",
            fileName: (format) => `index.${format}.ts`,
        },
        rollupOptions: {
            external: ["react", "react-dom", "tailwindcss"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                    tailwindcss: "tailwindcss",
                },
            },
        },
        sourcemap: true,
        emptyOutDir: true,
    },
    plugins: [
        react(),
        dts({ rollupTypes: true }),
        cssInjectedByJsPlugin(),
        tailwindcss()
    ],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./lib/setupTests.ts'],
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "lib"),
        },
    },
});