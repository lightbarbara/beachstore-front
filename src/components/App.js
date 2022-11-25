import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from '../assets/GlobalStyle'
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Products from "../pages/Products";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}