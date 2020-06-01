import React, {Component} from 'react';
import './SolutionPage.css';
import Container from "react-bootstrap/Container";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import FollowUs from "../../components/followus/FollowUs";
import BreadNav from "../../components/bread_nav/BreadNav";
import {Row} from "react-bootstrap";

class SolutionPage extends Component {
    render() {
        return (
            <Container style={{padding: 0}} className="Home">
                <BreadNav/>
                <Row>
                </Row>
                <FollowUs/>
            </Container>
        );
    };

    componentWillMount() {
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(SolutionPage);
