import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import home from "./pages/home";
import Footer from "./components/footer";
import TopNav from "./components/topNav";

function App() {

  return (

    <Router>

      <div>
        <TopNav />
        <Route exact path="/" component={home} />
        <Footer />
      </div>

    </Router>
  );
}

export default App;
