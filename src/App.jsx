import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import DisplayProducts from "./DisplayProducts";
import productsData from "./Products";
import Cart from "./Cart";

function App() {
  const [cart, setCart] = useState({});

  const addItem = (id) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeItem = (id) => {
    setCart((prev) => {
      if (!prev[id]) return prev;
      const newCart = { ...prev, [id]: prev[id] - 1 };
      if (newCart[id] <= 0) delete newCart[id];
      return newCart;
    });
  };

  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <Router>
      <Navbar cartCount={cartCount} />
      <div className="container mt-4">
        <Routes>
          <Route
            path="/"
            element={<DisplayProducts products={productsData} addItem={addItem} removeItem={removeItem} />}
          />
          <Route
            path="/cart"
            element={<Cart products={productsData} cart={cart} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;