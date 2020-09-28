import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Switch } from "react-router-dom";
import Header from "./components/Header/Header.component";
import ProductPreview from "./components/ProductPreview/ProductPreview.component";
import Footer from "./components/Footer/Footer.component";

const App = () => (
  <div className='App'>
    <Navbar />
    <Header />
    <ProductPreview />
    <Footer />
  </div>
);

export default App;
