import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/Navbar";
import ErrorPage from "./pages/ErrorPage";
import ProductsPage from "./pages/ProductsPage";

function App() {
   // o arquivo APP.JSX vai servir para guardar e gerenciar todas as nossas rotas
   return (
      <div className="App">
         <Navbar />

         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />

            <Route path="/products" element={<ProductsPage />} />

            <Route path="*" element={<ErrorPage />} />
         </Routes>
      </div>
   );
}

export default App;
