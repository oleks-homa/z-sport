import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:categoryIdParam" element={<Home />} />
          <Route path="/:categoryIdParam/:subcategoryParam" element={<Home />} />
          <Route
            path="/about"
            element={<About/>}
          />
          <Route
            path="/contact"
            element={<Contact/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
