import React, { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountryDetails from "./components/CountryDetails";


function App() {

  const [theme, setTheme] = useState('light')
  

  return (
    <div className="App">
      <Navbar theme={theme} setTheme={setTheme} />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Content theme={theme} setTheme={setTheme} />} />
          <Route exact path="/country/:countryName" element={<CountryDetails theme={theme} setTheme={setTheme} />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
