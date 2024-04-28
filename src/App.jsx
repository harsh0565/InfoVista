import "./App.css";
import { Routes, Route } from "react-router-dom";

import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

const App = () => {
  // const apiKey = "769d491c00d1461f952e9e74c5764961";
  const apiKey = "f217511c9d1b40ca8a34592ab0e45296";
  // const apiKey = "d93b8f35c00a4f438e38cebfa6303763";
  return (
    <div>
      <Navbar />

      <Routes>
        <Route exact path="/" element={ <News apiKey={apiKey} country="in" category="general" />}/>
        <Route exact path="/business" element={ <News apiKey={apiKey} country="in" category="business" />}/>
        <Route exact path="/entertainment" element={ <News apiKey={apiKey} country="in" category="entertainment" />}/>
        <Route exact path="/general" element={ <News apiKey={apiKey} country="in" category="general" />}/>
        <Route exact path="/health" element={ <News apiKey={apiKey} country="in" category="health" />}/>
        <Route exact path="/science" element={ <News apiKey={apiKey} country="in" category="science" />}/>
        <Route exact path="/sports" element={ <News apiKey={apiKey} country="in" category="sports" />}/>
        <Route exact path="/technology" element={ <News apiKey={apiKey} country="in" category="technology" />}/>
      </Routes>
    </div>
  );
};

export default App;
