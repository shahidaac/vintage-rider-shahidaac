import React, { createContext, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Book from "./components/Book/Book";
import Header from "./components/Header/Header";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Destination from "./components/Destination/Destination";
import Contact from "./components/Contact/Contact";
import Blog from "./components/Blog/Blog";

export const riderContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <riderContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div className="bg">
        <Router>
          <Header />
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/destination/:riderType">
              <Book />
            </PrivateRoute>
            <PrivateRoute path="/search-result/:riderType">
              <Destination />
            </PrivateRoute>
            <PrivateRoute path="/destination">
              <Home />
            </PrivateRoute>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </riderContext.Provider>
  );
}

export default App;
