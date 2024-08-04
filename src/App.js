import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Page/Home/home"
import About from "./Page/about"
import Contact from "./Page/contact"
function App() {
  return (
    <BrowserRouter>
   
    <Routes>
    <Route
          path="/"
          element={
            
              <Home />
            
          }
        />
        <Route
          path="/about"
          element={
            
              <About />
            
          }
        />
        <Route
          path="/contact"
          element={
            
              <Contact />
            
          }
        />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
