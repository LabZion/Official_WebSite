import React, {Component, Fragment} from 'react';
import './Case.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Image} from "react-bootstrap";
import {Link} from "react-router-dom";

class Case extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Row>
                    <Col md={1}></Col>
                    <Col md={10}>
                        <Container style={{textAlign: "left", paddingTop: '2em', paddingBottom: '2em'}}>
                            <Row>
                                <Col md={3}>
                                    <h2>Our Case In Security</h2>
                                </Col>
                                <Col md={3}>
                                    <Image style={{width: "100%"}} src={"https://1.cms.s81c.com/sites/default/files/2020-05-01/0600101_700x400.jpg"}/>
                                    <h4 style={{marginTop: "0.5em"}}><strong>Protect your digital assets, users and data</strong></h4>
                                    <p>To help you build a foundation of trust in your interactions</p>
                                    <Link><p>Learn more.</p></Link>
                                </Col>
                                <Col md={3}>
                                    <Image style={{width: "100%"}} src={"https://1.cms.s81c.com/sites/default/files/2020-05-01/0600101_700x400.jpg"}/>
                                    <h4 style={{marginTop: "0.5em"}}><strong>Manage your defenses against growing threats</strong></h4>
                                    <p>When every second counts, you need a unified defense to identify</p>
                                    <Link><p>Learn more.</p></Link>
                                </Col>
                                <Col md={3}>
                                    <Image style={{width: "100%"}} src={"https://1.cms.s81c.com/sites/default/files/2020-05-01/0600101_700x400.jpg"}/>
                                    <h4 style={{marginTop: "0.5em"}}><strong>Modernize your security with an open, multicloud platform</strong></h4>
                                    <p>To protect your hybrid multicloud infrastructure in a world of complexity.</p>
                                    <Link><p>Learn more.</p></Link>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Fragment>
        );
    }


    componentWillReceiveProps(nextProps) {
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Case);
