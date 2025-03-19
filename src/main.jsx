import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Navbar from './components/Navbar.jsx'
import ProductList from './components/ProductList.jsx'
import CartItem from './components/CartItem.jsx'
import { Provider } from 'react-redux'
import store from './store.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/navbar' element={<Navbar />} />
          <Route path='/shopping' element={<ProductList />} />
          <Route path='/cart' element={<CartItem />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
