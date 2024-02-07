
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Navbar from "./components/Navbar/Navbar";
import Cart from "./pages/Cart";
import { ShopContextProvider } from "./context/ShopContext";



function App() {

  return (
    <>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />

          </Routes>
        </Router>
      </ShopContextProvider>
    </>
  )
}

export default App
