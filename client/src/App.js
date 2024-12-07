import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import Product from './pages/Product.jsx';
import Admin from './pages/Admin.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:categoryIdParam" element={<Home />} />
          <Route path="/:categoryIdParam/:subcategoryParam" element={<Home />} />
          <Route path="/:categoryIdParam/:subcategoryParam/:productName" element={<Product />} />
          <Route
            path="/about"
            element={<About/>}
          />
          <Route
            path="/contact"
            element={<Contact/>}
          />
          <Route 
            path="/adminPanel"
            element={<Admin/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
