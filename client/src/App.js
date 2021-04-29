import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Footer from "./components/footer";
import TopNav from "./components/topNav";
import About from "./pages/about"
import Press from "./pages/press"
import Pd1 from "./pages/pd-1"

function App() {

  return (

    <Router>

      <div>
        <TopNav />

        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/press" component={Press} />
        <Route exact path="/pd-1" component={Pd1} />
        <Footer />
      </div>

    </Router>
  );
}

export default App;
