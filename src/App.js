import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";

// navigation
import Home from "./pages/home";
import Footer from "./components/footer";
import TopNav from "./components/topNav";
import About from "./pages/about"
import Press from "./pages/press"

// ux projects
import LT from "./pages/pd-lt"
import CONFIGURATOR from "./pages/pd-configurator"
import DESIGN_STANDARDS from "./pages/ww-ds"

// rendering projects
import WW_TOKYO from "./pages/pd-tokyo"
import SHoP from "./pages/pd-shop"
import WW_COLUMBIA from "./pages/pd-colombia"

// dev projects
import DEV_WASTE_OF_TIME from "./pages/pd-wot"
import DEV_EXTRA_CREDIT from "./pages/pd-ec"
import DEV_PASSWORD_GENERATOR from "./pages/pd-pg"
import DEV_DESTINATION_DASHBOARD from "./pages/pd-dd"

// vr projects
import VR_CHICAGO from "./pages/vr-chicago"
import VR_DC from "./pages/vr-dc"
import VR_LA from "./pages/vr-la"
import VR_SEOUL from "./pages/vr-seoul"

// vr 360
// import VR_CHICAGO_360 from "./pages/vr-chicago-360"
// import VR_DC_360 from "./pages/vr-dc-360"
// import VR_LA_360 from "./pages/vr-la-360"
// import VR_SEOUL_360 from "./pages/vr-seoul-360"

function App() {

  return (

    <Router>

      <div>

        <TopNav />

        {/* navigation */}
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/press" component={Press} />

        {/* ux projects */}
        <Route exact path="/configurator" component={CONFIGURATOR} />
        <Route exact path="/lt" component={LT} />
        <Route exact path="/design-standards" component={DESIGN_STANDARDS} />

        {/* UX & dev projects */}
        <Route exact path="/waste-of-time" component={DEV_WASTE_OF_TIME} />
        <Route exact path="/extra-credit" component={DEV_EXTRA_CREDIT} />
        <Route exact path="/password-generator" component={DEV_PASSWORD_GENERATOR} />
        <Route exact path="/destination-dashboard" component={DEV_DESTINATION_DASHBOARD} />

        {/* 3d projects */}
        <Route exact path="/ww-tokyo" component={WW_TOKYO} />
        <Route exact path="/shop" component={SHoP} />
        <Route exact path="/ww-colombia" component={WW_COLUMBIA} />

        {/* vr projects */}
        <Route exact path="/vr-chicago" component={VR_CHICAGO} />
        <Route exact path="/vr-dc" component={VR_DC} />
        <Route exact path="/vr-la" component={VR_LA} />
        <Route exact path="/vr-seoul" component={VR_SEOUL} />

        {/* vr 360 */}
        {/* <Route exact path="/vr-chicago-360" component={VR_CHICAGO_360} /> */}
        {/* <Route exact path="/vr-dc-360" component={VR_DC_360} /> */}
        {/* <Route exact path="/vr-la-360" component={VR_LA_360} /> */}
        {/* <Route exact path="/vr-seoul-360" component={VR_SEOUL_360} /> */}

        <Footer />

      </div>

    </Router>
  );
}

export default App;
