import { useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import PopupCart from "./components/clothes/PopupCart";
import Navigation from "./components/Navigation/Navigation.js";
import Accessories from "./components/pages/Accessories";
import Checkout from "./components/pages/Checkout";
import Home from "./components/pages/Home";
import Men from "./components/pages/Men";
import OrderConfirm from "./components/pages/OrderConfirm";
import Shoes from "./components/pages/Shoes";
import UserProfile from "./components/pages/UserProfile";
import Women from "./components/pages/Womens";

function App() {
  const [cart, setCart] = useState(false);
  const showCart = () => {
    setCart(true);
  };
  const hideCart = () => {
    setCart(false);
  };
  return (
    <>
      <Navigation onCart={showCart} />
      {cart && <PopupCart onHide={hideCart} />}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Women" element={<Women />}></Route>
          <Route path="/Men" element={<Men />}></Route>
          <Route path="/Accessories" element={<Accessories />}></Route>
          <Route path="/Shoes" element={<Shoes />}></Route>
          <Route path="/Checkout" element={<Checkout />}></Route>
          <Route path="/Confirm" element={<OrderConfirm />}></Route>
          <Route path="/Profile" element={<UserProfile />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
