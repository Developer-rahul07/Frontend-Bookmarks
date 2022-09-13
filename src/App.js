import React from "react";
import "./App.css";
import Home from "./comp/Home";
import About from "./comp/About";
import Products from "./comp/Products";
import Login from "./comp/Login";
import Register from "./comp/Register";
import Errorpage from "./comp/Errorpage";
import Navbars from "./comp/Navbars";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Abovenav from "./comp/Abovenav";
import Footer from "./comp/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
      <Abovenav/>
        <Navbars />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/Products" component={Products} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route element={Errorpage}></Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
