import React, {Component, Fragment} from 'react';
import './Contact.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class Contact extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Container style={{background: "rgb(223,102,159)"}}>
                    <Row>
                        <Col md={1}></Col>
                        <Col md={10}>
                            <Row>
                                <Col md={3} className={"contactItem"}>
                                    <h3>If you are experiencing cybersecurity issues or an incident, contact us to help.</h3>
                                </Col>
                                <Col md={3} className={"contactItem"}>
                                    <h3>China hotline</h3>
                                    <h3>+86-029-63389890</h3>
                                </Col>
                                <Col md={3} className={"contactItem"}>
                                    <h3>Global hotline</h3>
                                    <h3>+86-029-63389890</h3>
                                </Col>

                                <Col md={3}></Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }


    componentWillReceiveProps(nextProps) {
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Contact);
