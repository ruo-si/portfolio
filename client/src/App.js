import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Footer from "./components/footer";
import TopNav from "./components/topNav";
import About from "./pages/about"
import Press from "./pages/press"
import Pd1 from "./pages/pd-1"
import Pd2 from "./pages/pd-2"
import Pd3 from "./pages/pd-3"
import Pd4 from "./pages/pd-4"
import Pd5 from "./pages/pd-5"
import Pd6 from "./pages/pd-6"
import Pd7 from "./pages/pd-7"

import Vr1 from "./pages/vr-1"

import Pd_Lutron from "./pages/pd-Lutron"

function App() {

  return (

    <Router>

      <div>
        <TopNav />

        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/press" component={Press} />
        <Route exact path="/pd-1" component={Pd1} />
        <Route exact path="/pd-2" component={Pd2} />
        <Route exact path="/pd-3" component={Pd3} />
        <Route exact path="/pd-4" component={Pd4} />
        <Route exact path="/pd-5" component={Pd5} />
        <Route exact path="/pd-6" component={Pd6} />
        <Route exact path="/pd-7" component={Pd7} />

        <Route exact path="/vr-1" component={Vr1} />
       

        <Route exact path="/pd-lt" component={Pd_Lutron} />
        
        <Footer />
      </div>

    </Router>
  );
}

export default App;
