import AddToCart from "./Pages/AddToCart"
import Home from "./Pages/Home"
import "./style/home.css"
import "./style/navbar.css"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addToCart" element={<AddToCart />} />
      </Routes>
    </div>
  )
}

export default App
