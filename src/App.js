import React from 'react';
import './App.css';
import {Route, Switch} from "react-router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Menu from "./components/menu/Menu";
import SolutionPage from "./pages/solution_page/SolutionPage";
import TeamMember from "./pages/team_member/TeamMember";
import OpenSource from "./pages/opensource/OpenSource";
import Insight from "./pages/insight/Insight";
import Events from "./pages/events/Events";
import Blogs from "./pages/blogs/Blogs";
import BlogPage from "./pages/blog_page/BlogPage"
import CasePage from "./pages/case_page/CasePage";
import EventDetail from "./pages/events_detail/EventDetail";
import Privacy from "./pages/privacy/Privacy";
import Company from "./pages/company/Company";

function App() {
    return (
        <div className="App">
            <Header/>
            <Menu/>

            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/insight" component={Insight}/>
                <Route exact path="/insight/event" component={Events}/>
                <Route exact path="/event-detail" component={EventDetail}/>
                <Route exact path="/insight/blogs" component={Blogs}/>
                <Route exact path="/blog-detail" component={BlogPage}/>
                <Route exact path="/solution" component={SolutionPage}/>
                <Route exact path="/open-source" component={OpenSource}/>
                <Route exact path="/case" component={CasePage}/>
                <Route exact path="/company" component={SolutionPage}/>
                <Route exact path="/contact" component={SolutionPage}/>
                <Route exact path="/privacy" component={Privacy}/>
                <Route exact path="/company" component={Company}/>
                <Route exact path="/team/member" component={TeamMember}/>

            </Switch>
            <Footer/>
        </div>
    );
}

export default App;
