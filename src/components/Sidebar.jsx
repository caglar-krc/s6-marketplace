import { useState, useEffect } from "react";
import axios from "axios";
import Category from "./../components/Category";


export default function Sidebar({ activeCategory, handleCatChange }) {

  const [category, setcategory] = useState([])

  useEffect(() => {
    axios
      .get(" https://fakestoreapi.com/products/categories")
      .then((response) => {
        setcategory(response.data)
      })
      .catch((error) => {
        console.log("Kategoriler alınırken hata meydana geldi", error)
      })
  }, [])



  return (
    <nav>
      <h2>Kategoriler</h2>
      {category.map((category, index) => (
        <Category
          key={index}
          category={category}
          isActive={activeCategory}
          handleCatChange={handleCatChange}
        />
      ))}
    </nav>
  );
}
