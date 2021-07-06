import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

// navigation
import Home from "./pages/home";
import Footer from "./components/footer";
import TopNav from "./components/topNav";
import About from "./pages/about"
import Press from "./pages/press"

// rendering projects
import WeworkTokyo from "./pages/pd-1"
import SHoPWork from "./pages/pd-2"
import Tco from "./pages/pd-3"
import WeWorkLatam from "./pages/pd-4"
import Pd5 from "./pages/pd-5"
import Pd6 from "./pages/pd-6"
import Pd7 from "./pages/pd-7"
import Pd8 from "./pages/pd-WasteOfTime"

// vr projects
import VR_CHICAGO from "./pages/vr-chicago"
import VR_DC from "./pages/vr-dc"
import VR_LA from "./pages/vr-la"
import VR_SEOUL from "./pages/vr-seoul"

// vr 360
import VR_CHICAGO_360 from "./pages/vr-chicago-360"
import VR_DC_360 from "./pages/vr-dc-360"
import VR_LA_360 from "./pages/vr-la-360"
import VR_SEOUL_360 from "./pages/vr-seoul-360"

// product projects
import Pd_Lutron from "./pages/pd-Lutron"


function App() {

  return (

    <Router>

      <div>

        <TopNav />

        {/* navigation */}
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/press" component={Press} />

        {/* 3d projects */}
        <Route exact path="/wework-tokyo" component={WeworkTokyo} />
        <Route exact path="/shop-architects" component={SHoPWork} />
        <Route exact path="/tco" component={Tco} />
        <Route exact path="/wework-latam" component={WeWorkLatam} />
        <Route exact path="/pd-5" component={Pd5} />
        <Route exact path="/pd-6" component={Pd6} />
        <Route exact path="/pd-7" component={Pd7} />

        {/* vr projects */}
        <Route exact path="/vr-chicago" component={VR_CHICAGO} />
        <Route exact path="/vr-dc" component={VR_DC} />
        <Route exact path="/vr-la" component={VR_LA} />
        <Route exact path="/vr-seoul" component={VR_SEOUL} />

        {/* vr 360 */}
        <Route exact path="/vr-chicago-360" component={VR_CHICAGO_360} />
        <Route exact path="/vr-dc-360" component={VR_DC_360} />
        <Route exact path="/vr-la-360" component={VR_LA_360} />
        <Route exact path="/vr-seoul-360" component={VR_SEOUL_360} />

        {/* product projects */}
        <Route exact path="/pd-lt" component={Pd_Lutron} />

        {/* UX & dev projects */}
        <Route exact path="/pd-waste-of-time" component={Pd8} />

        <Footer />

      </div>

    </Router>
  );
}

export default App;
