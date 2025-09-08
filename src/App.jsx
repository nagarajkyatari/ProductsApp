import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./Pages/Home"
import Cart from "./Pages/Cart"

function App() {
  return <>

    <Header />
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Cart />} path="/cart" />
       <Route path="/cart" element={<Cart />} />
      {/* You can also add a catch-all route for 404 pages */}
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>

  </>
}

export default App