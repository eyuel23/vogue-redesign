import { Route, Routes } from "react-router";
import "./App.css";
import Navigation from "./components/Navigation.js";
import Accessories from "./components/pages/Accessories";
import Home from "./components/pages/Home";
import Men from "./components/pages/Men";
import Shoes from "./components/pages/Shoes";
import Women from "./components/pages/Womens";

function App() {
  return (
    <>
      <Navigation />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Women" element={<Women />}></Route>
          <Route path="/Men" element={<Men />}></Route>
          <Route path="/Accessories" element={<Accessories />}></Route>
          <Route path="/Shoes" element={<Shoes />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
