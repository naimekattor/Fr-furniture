import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { DarkProvider } from './DarkContext.jsx'

createRoot(document.getElementById('root')).render(
  <DarkProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DarkProvider>,
)
