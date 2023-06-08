import { Container } from "react-bootstrap";
import NavBar from "./NavBar";
import SlideShow from "./SlideShow";
// import ProductItem from "./ProductItem.jsx";
import Products from "./Products";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const CartContext = createContext();
import Home from "./Home";
import LoginPage from "./LoginPage";
import Cart from "./Cart";
import { Routes, Route } from "react-router-dom";
import ProductDescription from "./ProductDescription";
const App = () => {
  const [cart, setCart] = useState([]);
  const contextData = { cart: cart, setCart: setCart };

  return (
    <>
      <CartContext.Provider value={contextData}>
        <NavBar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route
              path="/productdescription/:id"
              element={<ProductDescription />}
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<LoginPage />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Container>
      </CartContext.Provider>
    </>
  );
};
export default App;
