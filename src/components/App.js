import React from "react";
import "./App.css";
import Header from "./header/Header";
import ContainerFooter from "./containerFooter/ContainerFooter";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
      <footer>
        <ContainerFooter />
      </footer>
    </Router>
  );
}

export default App;
