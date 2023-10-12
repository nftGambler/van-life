import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import Vans from "./components/Vans";

function App() {
  return (
    <BrowserRouter>
    <header className="header">
      <Link className="site-logo" to='/'>#VanLife</Link>
      <nav>
        <Link to='/about'>About</Link>
        <Link to='/vans'>Vans</Link>
      </nav>
    </header>



    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/vans" element={<Vans />} />
    </Routes>

    {/* <div className="bottomSection">&#169; 2023 #VANLIFE</div> */}
    </BrowserRouter>

  );
}

export default App;
