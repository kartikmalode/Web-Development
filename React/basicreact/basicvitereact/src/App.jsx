

// import Chai from "./chai"


// function App() {
//   const username = "chai aur code"

//   return (
//     <>
//     <Chai/>
//     <h1>chai aur react {username}</h1>
//     <p>test para</p>
//    </>
//   )
// }




import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage.jsx";
import RegisterPage from "./components/RegisterPage.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

