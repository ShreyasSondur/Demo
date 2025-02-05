import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>First Time Finally T-T</h1>
    <App />
  </StrictMode>,
)
