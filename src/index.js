import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import RouterPage from './pages/RouterPage'
import { GoogleOAuthProvider } from '@react-oauth/google'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <GoogleOAuthProvider clientId="244695757173-q8p1fdj9dohmfg0s066ie0fik88chbpo.apps.googleusercontent.com">
    <BrowserRouter>
      <RouterPage/>
    </BrowserRouter>
  </GoogleOAuthProvider>
)
