import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Footer from "./components/footer";
import TopNav from "./components/topNav";

function App() {

  return (

    <Router>

      <div>
        <TopNav />

        <Route exact path="/" component={Home} />

        <Footer />
      </div>

    </Router>
  );
}

export default App;
