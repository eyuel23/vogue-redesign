import "./App.css";
import Button from "./components/Button";
import ClothesSection from "./components/Clothes-section";
import Header from "./components/Header.js";
import Navigation from "./components/Navigation.js";
import Sidebar from "./components/Sidebar.js";
import MainClothingSection from "./components/MainClothingSection";
import { useEffect, useState } from "react";

function App() {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handelScroll = () => {
      setSticky(window.scrollY > 945);
      console.log(window.scrollY);
    };
    window.addEventListener("scroll", handelScroll);
    return () => window.addEventListener("scroll", handelScroll);
  });

  return (
    <>
      <Header>
        <Navigation />
        <div className="collection">
          <h1 className="heading-collection">
            NEW WINTER <br /> COLLECTION 2022
          </h1>
          <Button />
        </div>
      </Header>
      <ClothesSection>
        {sticky && <Navigation />}
        <div className="section-2">
          <Sidebar />
          <MainClothingSection />
        </div>
      </ClothesSection>
    </>
  );
}

export default App;
