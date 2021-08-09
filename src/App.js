import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";

// navigation
import Home from "./pages/home";
import Footer from "./components/footer";
import TopNav from "./components/topNav";
import About from "./pages/about"
import Press from "./pages/press"

// rendering projects
import WeWork_Tokyo from "./pages/pd-tokyo"
import SHoP from "./pages/pd-shop"
import Tco from "./pages/pd-tco"
import WeWork_Colombia from "./pages/pd-colombia"
import LT from "./pages/pd-lt"


// dev projects
import DEV_WASTE_OF_TIME from "./pages/pd-WasteOfTime"

// vr projects
import VR_CHICAGO from "./pages/vr-chicago"
import VR_DC from "./pages/vr-dc"
import VR_LA from "./pages/vr-la"
import VR_SEOUL from "./pages/vr-seoul"
import VR_VILLA from "./pages/vr-villa-savoye"

// vr 360
import VR_CHICAGO_360 from "./pages/vr-chicago-360"
import VR_DC_360 from "./pages/vr-dc-360"
import VR_LA_360 from "./pages/vr-la-360"
import VR_SEOUL_360 from "./pages/vr-seoul-360"
import VR_VILLA_360 from "./pages/vr-villa-savoye-360"


// product projects
// import Pd_Lutron from "./pages/pd-Lutron"


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
        <Route exact path="/wework-tokyo" component={WeWork_Tokyo} />
        <Route exact path="/shop-architects" component={SHoP} />
        <Route exact path="/tco" component={Tco} />
        <Route exact path="/wework-colombia" component={WeWork_Colombia} />
        <Route exact path="/lt" component={LT} />

        {/* vr projects */}
        <Route exact path="/vr-chicago" component={VR_CHICAGO} />
        <Route exact path="/vr-dc" component={VR_DC} />
        <Route exact path="/vr-la" component={VR_LA} />
        <Route exact path="/vr-seoul" component={VR_SEOUL} />
        <Route exact path="/vr-villa" component={VR_VILLA} />


        {/* vr 360 */}
        <Route exact path="/vr-chicago-360" component={VR_CHICAGO_360} />
        <Route exact path="/vr-dc-360" component={VR_DC_360} />
        <Route exact path="/vr-la-360" component={VR_LA_360} />
        <Route exact path="/vr-seoul-360" component={VR_SEOUL_360} />
        <Route exact path="/vr-villa-360" component={VR_VILLA_360} />

        {/* product projects */}
        {/* <Route exact path="/pd-lt" component={Pd_Lutron} /> */}

        {/* UX & dev projects */}
        <Route exact path="/waste-of-time" component={DEV_WASTE_OF_TIME} />

        <Footer />

      </div>

    </Router>
  );
}

export default App;
