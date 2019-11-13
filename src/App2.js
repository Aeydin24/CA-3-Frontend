import React from "react";
import Planets from "./components/Planets";
import Films from "./components/Films";
import Persons from "./components/Persons";
import Welcome from "./components/Welcome"
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";


export default function App2(){
    return (
        <Router>
            <div>
                <Header />
                <Content />
            </div>
        </Router>
    );
};
const Header = () => {
    return (
        <ul className="header">
            <li><NavLink exact to="/">Welcome Page</NavLink></li>
            <li><NavLink to="/planets">Planets</NavLink></li>
            <li><NavLink to="/persons">Persons</NavLink></li>
            <li><NavLink to="/films">Films</NavLink></li>
        </ul>
    );
};

const Content = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/"> <Welcome /> </Route>
                <Route path="/planets"> <Planets /> </Route>
                <Route path="/persons"> <Persons /> </Route>
                <Route path="/films"> <Films /> </Route>
            </Switch>
        </div>
    );
};

