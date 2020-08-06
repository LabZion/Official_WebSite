import React, {Component, Fragment} from 'react';
import './Splash.css';
import Container from "react-bootstrap/Container";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Carousel, Col, Row} from "react-bootstrap";

class Splash extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Container className="Splash">
                    <Container className="SplashContainer">
                        <Carousel>
                            <Carousel.Item>
                                <Container className={"bannerContainer2"}>
                                    <Row>
                                        <Col md={2}></Col>
                                        <Col md={8}>
                                            <h1 className={"banner-title"}>ThoughtWorks Security</h1>
                                            <br/>
                                            <h3>让我们将安全品质注入您的商业世界，让您的资产固若金汤。</h3>
                                            {/*<h3>Let's drive security into the fabric of your business together</h3>*/}
                                        </Col>
                                    </Row>
                                </Container>

                                {/*<Carousel.Caption>*/}
                                {/*    <h3>ThoughtWorks Security</h3>*/}
                                {/*    <p>Let's drive security into the fabric of your business together</p>*/}
                                {/*</Carousel.Caption>*/}
                            </Carousel.Item>
                            <Carousel.Item>
                                <Container className={"bannerContainer2"}>
                                    <Row>
                                        <Col md={2}></Col>
                                        <Col md={8}>
                                            <h1 className={"banner-title"}>ThoughtWorks Security</h1>
                                            <br/>
                                            <h3>让我们将安全品质注入您的商业世界，让您的资产固若金汤。</h3>
                                            {/*<h3>Let's drive security into the fabric of your business together</h3>*/}
                                        </Col>
                                    </Row>
                                </Container>

                                {/*<Carousel.Caption>*/}
                                {/*    <h3>ThoughtWorks Security</h3>*/}
                                {/*    <p>Let's drive security into the fabric of your business together</p>*/}
                                {/*</Carousel.Caption>*/}
                            </Carousel.Item>
                            <Carousel.Item>
                                <Container className={"bannerContainer3"}>
                                    <Row>
                                        <Col md={2}></Col>
                                        <Col md={8}>
                                            <h1 className={"banner-title"}>ThoughtWorks Security</h1>
                                            <br/>
                                            <h3>让我们将安全品质注入您的商业世界，让您的资产固若金汤。</h3>
                                            {/*<h3>Let's drive security into the fabric of your business together</h3>*/}
                                        </Col>
                                    </Row>
                                </Container>

                                {/*<Carousel.Caption>*/}
                                {/*    <h3>ThoughtWorks Security</h3>*/}
                                {/*    <p>Let's drive security into the fabric of your business together</p>*/}
                                {/*</Carousel.Caption>*/}
                            </Carousel.Item>
                        </Carousel>
                    </Container>
                </Container>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Splash);
