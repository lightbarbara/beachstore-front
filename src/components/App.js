import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from '../assets/GlobalStyle'
import { UserContext } from "../contexts/UserContext";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Payment from "../pages/Payment";
import Products from "../pages/Products";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

export default function App() {

  const [token, setToken] = useState('')

  const [cart, setCart] = useState('')

  const [newProducts, setNewProducts] = useState([])

  const [option, setOption] = useState('')

  return (
    <UserContext.Provider value={{ token, setToken, cart, setCart, newProducts, setNewProducts, option, setOption }}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/payment' element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}