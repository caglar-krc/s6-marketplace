import { useEffect, useState } from "react";
import axios from "axios";
import Product from "./../components/Product";


export default function ProductList({ activeCategory }) {

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/" + activeCategory)
      .then((response) => {
        setProducts(response.data)
      })
      .catch((error) => {
        console.log("Ürünler alınırken bir hata meydana geldi. ", error)
      })
  }, [activeCategory])


  return (
    <main className="productList">
      <h2 data-testid="productList-title">{activeCategory} ürünleri</h2>
      {products.map((item) => (
        <Product key={item.id} product={item} />
      ))}
    </main>
  );
}
