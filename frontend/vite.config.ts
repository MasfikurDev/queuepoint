import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@types": path.resolve(__dirname, "./src/types"),
            "@lib": path.resolve(__dirname, "./src/lib"),
            "@utils": path.resolve(__dirname, "./src/utils"),
            "@contexts": path.resolve(__dirname, "./src/contexts"),
            "@hooks": path.resolve(__dirname, "./src/hooks"),

            "@assets": path.resolve(__dirname, "./src/assets"),
            "@components": path.resolve(__dirname, "./src/components"),
            "@ui" : path.resolve(__dirname, "./src/components/ui"),

            "@app": path.resolve(__dirname, "./src/app"),
            "@pages": path.resolve(__dirname, "./src/app/pages"),
            "@layouts": path.resolve(__dirname, "./src/app/layouts"),
            
        },
    },
});
