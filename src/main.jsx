/* eslint-disable react/jsx-no-undef */
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MyContext from './Context/MyContext.jsx'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MyContext>
      <App />
    </MyContext>
  </BrowserRouter>
)
