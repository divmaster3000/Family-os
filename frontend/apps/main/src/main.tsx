import { createRoot } from 'react-dom/client'
import "@packages/components/theme/theme.css"
import App from './App'

createRoot(document.getElementById('root')!).render(
  <App />
)
