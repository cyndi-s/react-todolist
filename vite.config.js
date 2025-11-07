// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use repo base on CI/Pages, '/' locally
const isCI = !!process.env.GITHUB_ACTIONS

export default defineConfig({
  plugins: [react()],
  base: isCI ? '/react-todolist/' : '/',  // <-- change repo name if needed
})
