import "./scss/app.scss";
import "./App.css";
import Header from "./components/Header";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Header  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
