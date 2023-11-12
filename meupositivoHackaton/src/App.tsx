import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import ProductDetail from './components/ProductDetail';
import DashboardPage from './components/DashBoardPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="souPositivo" element={<DashboardPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
