import React from 'react';
import './App.css';
import {Route, Switch} from "react-router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Menu from "./components/menu/Menu";
import SolutionPage from "./pages/solution_page/SolutionPage";

function App() {
    return (
        <div className="App">
            <Header/>
            <Menu/>

            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/solution" component={SolutionPage}/>
            </Switch>

            <Footer/>
        </div>
    );
}

export default App;
