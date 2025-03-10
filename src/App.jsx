import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Dishes from "./components/Dishes";
import About from "./components/About";
import Reviews from "./components/Reviews";
import SpicyDishes from "./Pages/SpicyDishes";
import SavouryDishes from "./Pages/SavouryDishes";
import Desserts from "./Pages/Desserts";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dishes" element={<Dishes />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/spicy" element={<SpicyDishes />} />
        <Route path="/savoury" element={<SavouryDishes />} />
        <Route path="/desserts" element={<Desserts />} />
      </Routes>
    </Router>
  );
}
