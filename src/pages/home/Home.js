import React, {Component} from 'react';
import './Home.css';
import Container from "react-bootstrap/Container";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Splash from "../../components/splash/Splash";
import Contact from "../../components/contact/Contact";
import Solution from "../../components/solution/Solution";
import LatestPosts from "../../components/latestposts/LatestPosts";
import Resources from "../../components/resources/Resources";
import Case from "../../components/case/Case";

class Home extends Component {
    render() {
        return (
            <Container style={{padding: 0}} className="Home">
                <Splash/>
                <Contact/>
                <Solution/>
                <Case/>
                <LatestPosts/>
                <Resources/>
            </Container>
        );
    };

    componentWillMount() {
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Home);
