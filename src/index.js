import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Index from "./page/Index";
import About from "./page/About.jsx";
import Spesifikasi from "./page/Spesifikasi.jsx";
import Login from "./page/Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="About" element={<About />} />
        <Route
         exact path="Spesifikasi/:slug" component={Spesifikasi}
        />
        <Route path="Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
