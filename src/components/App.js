import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from '../assets/GlobalStyle'
import Cart from "./Cart";
import Checkout from "./Checkout";
import Products from "./Products";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

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