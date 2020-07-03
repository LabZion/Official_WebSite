import React, {Component, Fragment} from 'react';
import './OpenSource.css';
import Container from "react-bootstrap/Container";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import FollowUs from "../../components/followus/FollowUs";
import BreadNav from "../../components/bread_nav/BreadNav";
import {Image, Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import KernelHookLogo from "../../static/images/kernelhookframework.png";
import JS from "../../static/images/js.png";
import SynestiaOS from "../../static/images/os.png";
import Du from "../../static/images/duvm.png";
import TinyGL from "../../static/images/tinygl.png";
import NDFS from "../../static/images/ndfs.png";


const opensources = [
    {
        logo: KernelHookLogo,
        name: 'kernel-hook-framework',
        desc: 'Usually we want to hack a kernel function,to insert customized code before or after a certain kernel function been called, orto totally replace a function with new one. How can we manage that? ',
        github: 'http://github.com',
        youtube: 'http://github.com',
        twitter: 'http://github.com',
    },
    {
        logo: SynestiaOS,
        name: 'SynestiaOS',
        desc: 'An open source, standards-based software platform for iot devices, including smartwatch, TVs and automotive infotainment platforms.',
        github: 'https://github.com/SynestiaOS',
        youtube: '',
        twitter: '',
    },
    {
        logo: Du,
        name: 'Du.rs',
        desc: 'A Turing-complete virtual machine written in rust',
        github: 'https://github.com/LabZion/Du.rs',
        youtube: '',
        twitter: '',
    },
    {
        logo: JS,
        name: 'javascript-like-compiler',
        desc: 'This is a javascript like compilers, but much simpler. Code samples can be found in each part\'s testcase .Each part can be both compiled to a runnable program, or a library linked by others.',
        github: 'https://github.com/LabZion/javascript-like-compiler',
        youtube: '',
        twitter: '',
    },
    {
        logo: TinyGL,
        name: 'TinyGL',
        desc: 'A 3D soft raster renderer that does not rely on any third-party library, with a basic linear algebra library, model rendering, Phong\'s lighting, can be ported to most embedded systems.',
        github: 'https://github.com/LabZion/CenoGL',
        youtube: '',
        twitter: '',
    },
    {
        logo: NDFS,
        name: 'NDFS',
        desc: 'Distributed File System',
        github: 'https://github.com/LabZion/NDFS',
        youtube: '',
        twitter: '',
    },
];

class OpenSource extends Component {
    render() {
        return (
            <Container style={{padding: 0}} className="OpenSource">
                <BreadNav
                    bg={"url('https://dynamic.thoughtworks.com/landing_pages/hero_banner_image_desktop-e9e23004b65de8cd06ff36fab01a936c.jpeg')"}
                    title={"OpenSource"}
                    subtitle={"Our job is to foster a vibrant community where people have the freedom to make an extraordinary impact on the world through technology."}
                />
                <Row style={{background: '#f4f4f4'}}>
                    <Col md={1}></Col>
                    <Col md={10}>
                        <Container style={{textAlign: "left", paddingTop: '2em', paddingBottom: '1em'}}>
                            <h1>What we are building</h1>
                            <p>Our technologists bring successful, field-tested techniques and ideas from around the globe to open source solutions.
                                Here are some highlights of our work across many domains including machine learning, security and privacy, global
                                health, continuous delivery, monitoring, testing, and software development tools.</p>
                        </Container>
                    </Col>
                </Row>

                <Row style={{background: '#f4f4f4'}}>
                    <Col md={1}></Col>
                    <Col md={10}>
                        <Container style={{textAlign: "left", paddingTop: '1em', paddingBottom: '2em'}}>
                            <Row>
                                {this.renderOpenSources()}
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <FollowUs/>
            </Container>
        );
    };

    renderOpenSources() {
        return <Fragment>
            {opensources.map((item, index) => {
                return <Col md={6} style={{paddingTop: '1em', paddingBottom: '1em'}}>
                    <Row>
                        <Col md={4}>
                            <Image style={{width: '100%',padding: '1em'}} src={item.logo}/>
                        </Col>
                        <Col md={8}>
                            <h2>{item.name}</h2>
                            <p>{item.desc}</p>
                            <Row>
                                <Col style={{textAlign: 'left', marginTop: '1em'}}>
                                    <Col style={{width: '40px', display: "inline-block", padding: 0}}>
                                        <svg id="youtube-icon" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                            <circle className="m-cls-1" cx="20" cy="20" r="20"/>
                                            <path className="m-cls-2"
                                                  d="M30.91,14.53a2.89,2.89,0,0,0-2-2C27.12,12,20,12,20,12s-7.12,0-8.9.47a2.9,2.9,0,0,0-2,2A30.56,30.56,0,0,0,8.63,20a30.44,30.44,0,0,0,.46,5.47,2.89,2.89,0,0,0,2,2C12.9,28,20,28,20,28s7.12,0,8.9-.47a2.87,2.87,0,0,0,2-2A30.56,30.56,0,0,0,31.37,20,28.88,28.88,0,0,0,30.91,14.53ZM17.73,23.41V16.59L23.65,20Z"/>
                                        </svg>
                                    </Col>
                                    <Col style={{width: '40px', display: "inline-block", padding: 0, marginLeft: '1em'}}>
                                        <svg id="github-icon" viewBox="0 0 75.93 75.93" xmlns="http://www.w3.org/2000/svg">
                                            <path className="m-cls-1" d="M38,0a38,38,0,1,0,38,38A38,38,0,0,0,38,0Z"/>
                                            <path className="m-cls-2"
                                                  d="M38,15.59A22.95,22.95,0,0,0,30.71,60.3c1.15.21,1.57-.5,1.57-1.11s0-2,0-3.9c-6.38,1.39-7.73-3.07-7.73-3.07A6.09,6.09,0,0,0,22,48.86c-2.09-1.42.15-1.39.15-1.39a4.81,4.81,0,0,1,3.52,2.36c2,3.5,5.37,2.49,6.67,1.91a4.87,4.87,0,0,1,1.46-3.07c-5.09-.58-10.45-2.55-10.45-11.34a8.84,8.84,0,0,1,2.36-6.15,8.29,8.29,0,0,1,.23-6.07s1.92-.62,6.3,2.35a21.82,21.82,0,0,1,11.49,0c4.38-3,6.3-2.35,6.3-2.35a8.29,8.29,0,0,1,.23,6.07,8.84,8.84,0,0,1,2.36,6.15c0,8.81-5.37,10.75-10.48,11.32a5.46,5.46,0,0,1,1.56,4.25c0,3.07,0,5.54,0,6.29s.42,1.33,1.58,1.1A22.94,22.94,0,0,0,38,15.59Z"/>
                                        </svg>
                                    </Col>
                                    <Col style={{width: '40px', display: "inline-block", padding: 0, marginLeft: '1em'}}>
                                        <svg id="twitter-icon" viewBox="0 0 75.93 75.93" xmlns="http://www.w3.org/2000/svg">
                                            <circle className="m-cls-1" cx="37.97" cy="37.97" r="37.97"/>
                                            <path className="m-cls-2"
                                                  d="M55.2,22.73a15.43,15.43,0,0,1-4.88,1.91,7.56,7.56,0,0,0-5.61-2.49A7.78,7.78,0,0,0,37,30a7.56,7.56,0,0,0,.2,1.79,21.63,21.63,0,0,1-15.84-8.23,8,8,0,0,0,2.37,10.52,7.66,7.66,0,0,1-3.48-1v.09A7.84,7.84,0,0,0,26.45,41a7.54,7.54,0,0,1-2,.28A7.64,7.64,0,0,1,23,41.09a7.71,7.71,0,0,0,7.18,5.47,15.21,15.21,0,0,1-9.55,3.37,15.78,15.78,0,0,1-1.83-.11,21.41,21.41,0,0,0,11.78,3.54c14.13,0,21.86-12,21.86-22.42,0-.34,0-.68,0-1a15.67,15.67,0,0,0,3.83-4.08,14.9,14.9,0,0,1-4.41,1.24A7.8,7.8,0,0,0,55.2,22.73Z"
                                                  data-name="Twitter" id="Twitter-2"/>
                                        </svg>
                                    </Col>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            })}
        </Fragment>;
    }

    componentWillMount() {
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(OpenSource);
