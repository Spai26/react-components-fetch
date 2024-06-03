import { useEffect, useState } from "react";

import Navigation from "./components/Navbar/Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/login";
import Home from "./components/Home/Home";
import Product from "./components/Product/product";
import Category from "./components/category/Home";
function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://backend-clostech-7hke.onrender.com"
        );
        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }
        const result = await response.json();
        setData(result.message);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <header className="sliderbar">
        <div className="container">
          <Navigation />
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/login" Component={Login} />
        <Route path="/product" Component={Product} />
        <Route path="/category" Component={Category} />
      </Routes>
    </>
  );
}

export default App;
