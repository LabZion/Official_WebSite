import React, {Component} from 'react';
import './Insight.css';
import Container from "react-bootstrap/Container";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import BreadNav from "../../components/bread_nav/BreadNav";
import {Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";


class Insight extends Component {
    render() {
        return (
            <Container style={{padding: 0}} className="OpenSource">
                <BreadNav
                    bg={"url('https://dynamic.thoughtworks.com/landing_pages/hero_banner_image_desktop-d487b9e3df79ed74c168f7aeeead5393.jpeg')"}
                    title={"Security Insight"}
                    subtitle={"Security is so much more than just table stakes for today’s digital business: it goes to the heart of trust in the relationship you build with your customers."}
                />

                <Row style={{background: '#f4f4f4'}}>
                    <Col md={2}></Col>
                    <Col md={8}>
                        <Container style={{textAlign: "left", paddingTop: '1em', paddingBottom: '2em'}}>
                            <Row>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        );
    };

    componentWillMount() {
    }

    componentDidMount() {
        window.scrollBy(0,-8000);
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Insight);
