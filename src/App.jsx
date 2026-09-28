import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import ProductList from "./components/ProductList";

import "./App.css";



function App() {

  const [activeCategory, setActiveCategory] = useState("electronics")


  const handleCatChange = (newCategory) => {
    setActiveCategory(newCategory)
  }



  return (
    <div className="container">
      <Header />
      <div className="content-wrapper">
        <div className="content">
          <Sidebar
            activeCategory={activeCategory}
            handleCatChange={handleCatChange}
          />
          <ProductList
            activeCategory={activeCategory}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
