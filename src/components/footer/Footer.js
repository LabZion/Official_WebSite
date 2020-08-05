import React from 'react';
import './Footer.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {BrowserRouter as Router, Link} from "react-router-dom";
import Logo from "../../static/images/logo_large.png"
import {withTranslation} from 'react-i18next';
import {Button, Form, Image} from "react-bootstrap";

function Footer() {
    return (
        <Container className="Footer">
            <Container>
                <Router>
                    <Row>
                        <Col md={2}/>
                        <Col md={8}>
                            <Row>

                                <Col md={2}>
                                    <Row className={"footerTitle"}>SiteMap</Row>
                                    <Row><span className="footerText"><Link to="/home">Home</Link></span></Row>
                                    <Row><span className="footerText"><Link to="/open-source">Resourses</Link></span></Row>
                                    <Row><span className="footerText"><Link to="/company">Company</Link></span></Row>
                                    <Row><span className="footerText"><Link to="/contact-us">Cotact Us</Link></span></Row>
                                    <Row><span className="footerText"><Link to="/team/member">Team</Link></span></Row>
                                </Col>
                                <Col md={2}>
                                    <Row className={"footerTitle"}>Community</Row>
                                    <Row><span className="footerText"><Link to="/event">Events</Link></span></Row>
                                    <Row><span className="footerText"><Link to="/blogs">Blogs</Link></span></Row>
                                    <Row><span className="footerText"><Link to="/event">Insights</Link></span></Row>
                                </Col>
                                <Col md={2}>
                                    <Row className={"footerTitle"}>Links</Row>
                                    <Row><a href={"https://www.thoughtworks.com/"}><span className="footerText">ThoughtWorks</span></a></Row>
                                    <Row><a href={"https://insights.thoughtworks.cn/"}><span className="footerText">ThoughtWorks洞见</span></a></Row>
                                    <Row><a href={"https://www.thoughtworks.com/cn/radar"}><span className="footerText">ThoughtWorks技术雷达</span></a></Row>
                                </Col>
                                <Col md={6} style={{padding: 0, margin: 0, textAlign: 'right'}}>
                                    <Col style={{width: '40px', display: "inline-block", padding: 0, marginRight: '1em'}}>
                                        <svg id="youtube-icon" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">

                                            <circle className="cls-1" cx="20" cy="20" r="20"/>
                                            <path className="cls-2"
                                                  d="M30.91,14.53a2.89,2.89,0,0,0-2-2C27.12,12,20,12,20,12s-7.12,0-8.9.47a2.9,2.9,0,0,0-2,2A30.56,30.56,0,0,0,8.63,20a30.44,30.44,0,0,0,.46,5.47,2.89,2.89,0,0,0,2,2C12.9,28,20,28,20,28s7.12,0,8.9-.47a2.87,2.87,0,0,0,2-2A30.56,30.56,0,0,0,31.37,20,28.88,28.88,0,0,0,30.91,14.53ZM17.73,23.41V16.59L23.65,20Z"/>
                                            </svg>
                                    </Col>
                                    <Col style={{width: '40px', display: "inline-block", padding: 0, marginRight: '1em'}}>
                                        <svg id="github-icon" viewBox="0 0 75.93 75.93" xmlns="http://www.w3.org/2000/svg">
                                            <path className="cls-1" d="M38,0a38,38,0,1,0,38,38A38,38,0,0,0,38,0Z"/>
                                            <path className="cls-2"
                                                  d="M38,15.59A22.95,22.95,0,0,0,30.71,60.3c1.15.21,1.57-.5,1.57-1.11s0-2,0-3.9c-6.38,1.39-7.73-3.07-7.73-3.07A6.09,6.09,0,0,0,22,48.86c-2.09-1.42.15-1.39.15-1.39a4.81,4.81,0,0,1,3.52,2.36c2,3.5,5.37,2.49,6.67,1.91a4.87,4.87,0,0,1,1.46-3.07c-5.09-.58-10.45-2.55-10.45-11.34a8.84,8.84,0,0,1,2.36-6.15,8.29,8.29,0,0,1,.23-6.07s1.92-.62,6.3,2.35a21.82,21.82,0,0,1,11.49,0c4.38-3,6.3-2.35,6.3-2.35a8.29,8.29,0,0,1,.23,6.07,8.84,8.84,0,0,1,2.36,6.15c0,8.81-5.37,10.75-10.48,11.32a5.46,5.46,0,0,1,1.56,4.25c0,3.07,0,5.54,0,6.29s.42,1.33,1.58,1.1A22.94,22.94,0,0,0,38,15.59Z"/>
                                        </svg>
                                    </Col>
                                    <Col style={{width: '40px', display: "inline-block", padding: 0}}>
                                        <svg id="twitter-icon" viewBox="0 0 75.93 75.93" xmlns="http://www.w3.org/2000/svg">
                                            <circle className="cls-1" cx="37.97" cy="37.97" r="37.97"/>
                                            <path className="cls-2"
                                                  d="M55.2,22.73a15.43,15.43,0,0,1-4.88,1.91,7.56,7.56,0,0,0-5.61-2.49A7.78,7.78,0,0,0,37,30a7.56,7.56,0,0,0,.2,1.79,21.63,21.63,0,0,1-15.84-8.23,8,8,0,0,0,2.37,10.52,7.66,7.66,0,0,1-3.48-1v.09A7.84,7.84,0,0,0,26.45,41a7.54,7.54,0,0,1-2,.28A7.64,7.64,0,0,1,23,41.09a7.71,7.71,0,0,0,7.18,5.47,15.21,15.21,0,0,1-9.55,3.37,15.78,15.78,0,0,1-1.83-.11,21.41,21.41,0,0,0,11.78,3.54c14.13,0,21.86-12,21.86-22.42,0-.34,0-.68,0-1a15.67,15.67,0,0,0,3.83-4.08,14.9,14.9,0,0,1-4.41,1.24A7.8,7.8,0,0,0,55.2,22.73Z"
                                                  data-name="Twitter" id="Twitter-2"/>
                                        </svg>
                                    </Col>
                                </Col>
                            </Row>
                            <Row style={{marginTop: '1em', padding: 0}}>
                                <Col md={12}>
                                    <Row style={{display:'inline-block',float:'left'}}><Image style={{height: '4em', marginLeft: 0}} src={Logo}/> </Row>
                                    <Row style={{color: '#999',display:'inline-block',float:'right',paddingTop:'1.5em'}}><a style={{color: '#999'}} href={'/privacy'}>Privacy
                                        Guidelines </a>&nbsp;|   © 2020 ThoughtWorks, Inc. or its affiliates. </Row>
                                </Col>

                            </Row>
                        </Col>
                    </Row>
                </Router>
            </Container>
        </Container>
    );
}

export default Footer;
