import React, {Component, Fragment} from 'react';
import './LatestPosts.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class LatestPosts extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Container style={{background: "#0530ad", paddingTop: '2em', paddingBottom: '2em'}}>
                    <Row>
                        <Col md={1}></Col>
                        <Col md={10} style={{textAlign: "left"}}>

                            <h2 style={{color: "#fff"}}>Read Our Latest posts</h2>
                            <Row>
                                <Col md={3} className={"postItem"}>
                                    <Container style={{padding: 0, height: "20em"}}>
                                        <h4><strong>lign your security strategy with your business</strong></h4>
                                        <p>Building a custom security plan that is both industry-specific and aligned to your security maturity
                                            demands a
                                            partner with the expertise and resources to help you remotely or onsite. The IBM Security Strategy and
                                            Risk
                                            services team is that trusted resource.</p>
                                    </Container>
                                    <Link className={"readBlogPost"}><p>Read the blog post</p></Link>
                                </Col>
                                <Col md={3} className={"postItem"} style={{color: "#fff", textAlign: "left", padding: "1em"}}>
                                    <Container style={{padding: 0, height: "20em"}}>
                                        <h4><strong>lign your security strategy with your business</strong></h4>
                                        <p>Building a custom security plan that is both industry-specific and aligned to your security maturity
                                            demands a
                                            partner with the expertise and resources to help you remotely or onsite. The IBM Security Strategy and
                                            Risk
                                            services team is that trusted resource.</p>
                                    </Container>
                                    <Link className={"readBlogPost"}><p>Read the blog post</p></Link>
                                </Col>
                                <Col md={3} className={"postItem"} style={{color: "#fff", textAlign: "left", padding: "1em"}}>
                                    <Container style={{padding: 0, height: "20em"}}>
                                        <h4><strong>lign your security strategy with your business</strong></h4>
                                        <p>Building a custom security plan that is both industry-specific and aligned to your security maturity
                                            demands a
                                            partner with the expertise and resources to help you remotely or onsite. The IBM Security Strategy and
                                            Risk
                                            services team is that trusted resource.</p>
                                    </Container>
                                    <Link className={"readBlogPost"}><p>Read the blog post</p></Link>
                                </Col>
                                <Col md={3} className={"postItem"} style={{color: "#fff", textAlign: "left", padding: "1em"}}>
                                    <Container style={{padding: 0, height: "20em"}}>
                                        <h4><strong>lign your security strategy with your business</strong></h4>
                                        <p>Building a custom security plan that is both industry-specific and aligned to your security maturity
                                            demands a
                                            partner with the expertise and resources to help you remotely or onsite. The IBM Security Strategy and
                                            Risk
                                            services team is that trusted resource.</p>
                                    </Container>
                                    <Link className={"readBlogPost"}><p>Read the blog post</p></Link>
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


export default connect(mapStateToProps, mapDispatchToProps)(LatestPosts);
