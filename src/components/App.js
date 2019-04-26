import React from "react";
import "./App.css";
import Header from "./header/Header";
import ContainerFooter from "./containerFooter/ContainerFooter";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Id from "../pages/id/Id";
import NotFound from "../pages/notFound/NotFound";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/work/:id" component={Id} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <footer>
        <ContainerFooter />
      </footer>
    </Router>
  );
}

export default App;
