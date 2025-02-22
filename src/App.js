import "./App.css";
import "@google/model-viewer/dist/model-viewer.min.js";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import About from "./components/About/About";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import WishList from "./components/Wishlist/WishList";
import LandingPage from "./components/LandingPage/LandingPage"; // Import LandingPage
import { useState } from "react";

const App = () => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (item) => {
    setWishlist([...wishlist, item]);
  };

  const handleRemoveItem = (id) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} /> {/* LandingPage route */}
        <Route
          path="/products"
          element={
            <ProductList
              addToWishlist={addToWishlist}
              wishlist={wishlist}
              removeFromWishlist={handleRemoveItem}
            />
          }
        />
        <Route
          path="/wishlist"
          element={
            <WishList wishlist={wishlist} onRemoveItem={handleRemoveItem} />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
