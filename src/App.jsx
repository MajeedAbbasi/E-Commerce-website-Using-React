import React, { useEffect, useState } from "react";
import Navbar from "./compnents/Navbar/Navbar";
import Hero from "./compnents/Hero/Hero";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Catagory from "./compnents/Catagory/Catagory";
import Catagory2 from "./compnents/Catagory/Catagory2";
import Services from "./compnents/Services/Services";
import Banner from "./compnents/Banner/Banner";
import headphone from "./assets/Hero/headphone.png";
import Products from "./compnents/Products/Products";
import smartwatch2 from "./assets/catagory/smartwatch2-removebg-preview.png";
import Blogs from "./compnents/Blogs/Blogs";
import Partners from "./compnents/Partners/Partners";
import Footer from "./compnents/Footer/Footer";
import Popup from "./compnents/Popup/Popup";
import AOS from "aos";
import "aos/dist/aos.css";
const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 jan to 28 jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, dolor.",
  bgColor: "#f42c37",
};
const BannerData2 = {
  discount: "30% OFF",
  title: "Happy House",
  date: "14 jan to 28 jan",
  image: smartwatch2,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, dolor.",
  bgColor: "#2dcc6f",
};
const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      display: 100,
      offset: 100,
    });
    AOS.refresh();
  });
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden font-mono">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Catagory />
      <Catagory2 />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <Banner data={BannerData2} />
      <Blogs />
      <Partners />
      <Footer />
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
    </div>
  );
};

export default App;
