import { Provider as ChakraUiProvider } from 'components/ui/provider'
import ReactDOM from 'react-dom/client'

import App from './app/app'
import './global.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ChakraUiProvider>
    <App />
  </ChakraUiProvider>
)
