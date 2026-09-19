import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [react({
    babel:{Plugins:['babel-plugin-react-compiler']}}),
    
    ,tailwindcss()],
    resolve: {
    alias: {
      "@": `${import.meta.dirname}/src`,
    }
  }
})
