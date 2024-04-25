import React from "react";
import Heading from "./Heading";
import ProductCard from "./ProductCard";

import Img1 from "../../assets/products/p-1.jpg";
import Img2 from "../../assets/products/p-2.jpg";
import Img3 from "../../assets/products/p-3.jpg";
import Img4 from "../../assets/products/p-4.jpg";
import Img5 from "../../assets/products/p-5.jpg";
import Img6 from "../../assets/products/p-7.jpg";
import Img7 from "../../assets/products/p-9.jpg";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Roacky Mountain",
    price: "420",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Google",
    price: "320",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed",
    price: "220",
    aosDelay: "600",
  },
];
const ProductsData2 = [
  {
    id: 1,
    img: Img5,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img6,
    title: "Roacky Mountain",
    price: "420",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img7,
    title: "Google",
    price: "320",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img3,
    title: "Printed",
    price: "220",
    aosDelay: "600",
  },
];

const Products = () => {
  return (
    <div className="container">
      <Heading title="Our Products" subtitle={"Explore Our Products"} />
      {/* Body Section */}
      <ProductCard data={ProductsData} />
      <ProductCard data={ProductsData2} />
    </div>
  );
};

export default Products;
