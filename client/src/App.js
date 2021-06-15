import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Footer from "./components/footer";
import TopNav from "./components/topNav";
import About from "./pages/about"
import Press from "./pages/press"
import WeworkTokyo from "./pages/pd-1"
import SHoPWork from "./pages/pd-2"
import Tco from "./pages/pd-3"
import WeWorkLatam from "./pages/pd-4"
import Pd5 from "./pages/pd-5"
import Pd6 from "./pages/pd-6"
import Pd7 from "./pages/pd-7"
import Pd8 from "./pages/pd-WasteOfTime"

import Vr1 from "./pages/vr-1"

import Pd_Lutron from "./pages/pd-Lutron"

import Vr_1d from "./pages/vr-1d"

function App() {

  return (

    <Router>

      <div>

        <TopNav />
        
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/press" component={Press} />
        <Route exact path="/wework-tokyo" component={WeworkTokyo} />
        <Route exact path="/shop-architects" component={SHoPWork} />
        <Route exact path="/tco" component={Tco} />
        <Route exact path="/wework-latam" component={WeWorkLatam} />
        <Route exact path="/pd-5" component={Pd5} />
        <Route exact path="/pd-6" component={Pd6} />
        <Route exact path="/pd-7" component={Pd7} />
        <Route exact path="/vr-1" component={Vr1} />
        <Route exact path="/pd-lt" component={Pd_Lutron} />
        <Route exact path="/pd-waste-of-time" component={Pd8} />
        <Route exact path="/vr-1d" component={Vr_1d} />
        
        <Footer />

      </div>

    </Router>
  );
}

export default App;
