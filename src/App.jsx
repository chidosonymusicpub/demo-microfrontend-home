import React from "react";
import ReactDOM from "react-dom";
import HomeContent from "./components/HomeContent";
import "remixicon/fonts/remixicon.css";
import Footer from "./Footer";
import Header from "./Header";
import "./index.scss";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="my-10">
      <HomeContent/>
    </div>
    <Footer/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
