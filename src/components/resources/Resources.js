import React, {Component, Fragment} from 'react';
import './Resources.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Image} from "react-bootstrap";

class Resources extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Container style={{background: "#f4f4f4", paddingTop: '2em', paddingBottom: '2em'}}>
                    <Row>
                        <Col md={2}></Col>
                        <Col md={8} style={{textAlign: "left"}}>

                            <h2 style={{color: "#000"}}>Read Our Latest posts</h2>
                            <Row>
                                <Col md={4} style={{color: "#000", textAlign: "left", padding: "1em"}}>
                                    <Image style={{width: "100%"}} src={"https://1.cms.s81c.com/sites/default/files/2020-05-01/0600101_700x400.jpg"}/>
                                    <h4><strong>lign your security strategy with your business</strong></h4>
                                    <p>Building a custom security plan that is both industry-specific and aligned to your security maturity demands a
                                        partner with the expertise and resources to help you remotely or onsite. The ThoughtWorks Security Strategy and Risk
                                        services team is that trusted resource.</p>
                                    <Link className={"readResource"}><p>Learn more.</p></Link>
                                </Col>
                                <Col md={4} style={{color: "#000", textAlign: "left", padding: "1em"}}>
                                    <Image style={{width: "100%"}} src={"https://1.cms.s81c.com/sites/default/files/2020-05-01/0600101_700x400.jpg"}/>
                                    <h4><strong>lign your security strategy with your business</strong></h4>
                                    <p>Building a custom security plan that is both industry-specific and aligned to your security maturity demands a
                                        partner with the expertise and resources to help you remotely or onsite. The ThoughtWorks Security Strategy and Risk
                                        services team is that trusted resource.</p>
                                    <Link className={"readResource"}><p>Learn more.</p></Link>
                                </Col>
                                <Col md={4} style={{color: "#000", textAlign: "left", padding: "1em"}}>
                                    <Image style={{width: "100%"}} src={"https://1.cms.s81c.com/sites/default/files/2020-05-01/0600101_700x400.jpg"}/>
                                    <h4><strong>lign your security strategy with your business</strong></h4>
                                    <p>Building a custom security plan that is both industry-specific and aligned to your security maturity demands a
                                        partner with the expertise and resources to help you remotely or onsite. The ThoughtWorks Security Strategy and Risk
                                        services team is that trusted resource.</p>
                                    <Link className={"readResource"}><p>Learn more.</p></Link>
                                </Col>
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


export default connect(mapStateToProps, mapDispatchToProps)(Resources);
