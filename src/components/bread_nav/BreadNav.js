import React, {Component, Fragment} from 'react';
import './BreadNav.css';
import Container from "react-bootstrap/Container";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class BreadNav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Container className="BreadNav">
                    <Container className="SplashContainer">
                        <Container className={"bannerContainer"}
                                   style={{background: this.props.bg}}>
                            <Row>
                                <Col md={1}> </Col>
                                <Col md={5}>
                                    <Row>{this.props.bread}</Row>
                                    <Row style={{marginTop: '3em'}}><h1 style={{fontSize: '3em'}}>{this.props.title}</h1></Row>
                                    <Row><h3>{this.props.subtitle}</h3></Row>
                                </Col>
                            </Row>
                        </Container>
                    </Container>
                </Container>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(BreadNav);
