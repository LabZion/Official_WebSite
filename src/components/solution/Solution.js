import React, {Component, Fragment} from 'react';
import './Solution.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Image} from "react-bootstrap";

class Solution extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Row style={{background: '#f4f4f4'}}>
                    <Col md={1}></Col>
                    <Col md={10}>
                        <Container style={{textAlign: "left", paddingTop: '2em', paddingBottom: '2em'}}>
                            <Row style={{marginTop: '1em'}}>
                                <Col md={3}>
                                    <Container style={{textAlign: 'center', marginTop: '0.5em'}}>
                                        <Image src={"https://1.cms.s81c.com/sites/default/files/2019-10-11/assess-risk-1.5-icon1.png"}/>
                                    </Container>
                                    <Container style={{padding: 0, marginTop: '1em'}}>
                                        <h4><strong>lign your security strategy with your business</strong></h4>
                                        <p>Building a custom security plan that is both industry-specific and aligned to your security maturity
                                            demands a
                                            partner with the expertise and resources to help you remotely or onsite. The ThoughtWorks Security
                                            Strategy and
                                            Risk
                                            services team is that trusted resource.</p>
                                    </Container>
                                </Col>
                                <Col md={3}>
                                    <Container style={{textAlign: 'center', marginTop: '0.5em'}}>
                                        <Image src={"https://1.cms.s81c.com/sites/default/files/2019-10-11/reduce-risk-1.5-icon2.png"}/>
                                    </Container>
                                    <Container style={{padding: 0, marginTop: '1em'}}>
                                        <h4><strong>Protect your digital assets, users and data</strong></h4>
                                        <p>To help you build a foundation of trust in your interactions, you should enable the right user to have the
                                            right access to the right data. ThoughtWorks Security Digital Trust solutions can help.</p>
                                    </Container>
                                </Col>
                                <Col md={3}>
                                    <Container style={{textAlign: 'center', marginTop: '0.5em'}}>
                                        <Image src={"https://1.cms.s81c.com/sites/default/files/2019-10-11/manage-risk-1.5-icon3.png"}/>
                                    </Container>
                                    <Container style={{padding: 0, marginTop: '1em'}}>
                                        <h4><strong>Manage your defenses against growing threats</strong></h4>
                                        <p>When every second counts, you need a unified defense to identify, orchestrate and automate your response to
                                            threats. ThoughtWorks Security Threat Management solutions help you thrive in the face of cyber
                                            uncertainty.</p>
                                    </Container>
                                </Col>
                                <Col md={3}>
                                    <Container style={{textAlign: 'center', marginTop: '0.5em'}}>
                                        <Image src={"https://1.cms.s81c.com/sites/default/files/2019-10-11/assess-risk-1.5-icon1.png"}/>
                                    </Container>
                                    <Container style={{padding: 0, marginTop: '1em'}}>
                                        <h4><strong>Modernize your security with an open, multicloud platform</strong></h4>
                                        <p>To protect your hybrid multicloud infrastructure in a world of complexity, you need to ensure the workload
                                            is
                                            secure, from processes to technologies. ThoughtWorks Security can help confidently secure your hybrid
                                            multicloud
                                            enterprise.</p>
                                    </Container>
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


export default connect(mapStateToProps, mapDispatchToProps)(Solution);
