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
                <Route exact path="/insight" component={SolutionPage}/>
                <Route exact path="/event" component={SolutionPage}/>
                <Route exact path="/blogs" component={SolutionPage}/>
                <Route exact path="/solution" component={SolutionPage}/>
                <Route exact path="/solution/car" component={SolutionPage}/>
                <Route exact path="/solution/financial" component={SolutionPage}/>
                <Route exact path="/solution/cloud" component={SolutionPage}/>
                <Route exact path="/solution/sales" component={SolutionPage}/>
                <Route exact path="/solution/traffic" component={SolutionPage}/>
                <Route exact path="/solution/data" component={SolutionPage}/>
                <Route exact path="/solution/identify" component={SolutionPage}/>
                <Route exact path="/solution/embed" component={SolutionPage}/>
                <Route exact path="/solution/trust" component={SolutionPage}/>
                <Route exact path="/solution/buildin" component={SolutionPage}/>
                <Route exact path="/open-source/hook-framework" component={SolutionPage}/>
                <Route exact path="/case" component={SolutionPage}/>
                <Route exact path="/company" component={SolutionPage}/>
                <Route exact path="/contact" component={SolutionPage}/>
                <Route exact path="/team/member" component={SolutionPage}/>
                <Route exact path="/open-source/synestia-os" component={SolutionPage}/>
            </Switch>

            <Footer/>
        </div>
    );
}

export default App;
