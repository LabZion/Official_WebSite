import React, {Component, Fragment} from 'react';
import './Header.css';
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";
import Image from "react-bootstrap/Image";
import Logo from "../../static/images/logo_new.png"
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Search from "../search/Search";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Container className="Header">
                    <Row>
                        <Col md={1}> </Col>
                        <Col md={10}>
                            <Navbar bg="#fff" variant="light" style={{paddingLeft: 0, paddingRight: 0}}>
                                <Link to="/home" style={{fontWeight: 'bolder', margin: 0, padding: 0}}>
                                    <Image src={Logo} className="logo-img" rounded/>
                                </Link>

                                <Link to="/column" style={{fontWeight: 'bolder', margin: 0, padding: 0}}>
                                    <Navbar.Brand className="icon-header" href="#home">
                                        <strong className={"headerTitleSpan"}>INSIGHT</strong>
                                    </Navbar.Brand>
                                </Link>

                                <Link to="/event" style={{fontWeight: 'bolder', margin: 0, padding: 0}}>
                                    <Navbar.Brand className="icon-header" href="#home">
                                        <strong className={"headerTitleSpan"}>EVENTS</strong>
                                    </Navbar.Brand>
                                </Link>

                                <Link to="/event" style={{fontWeight: 'bolder', margin: 0, padding: 0}}>
                                    <Navbar.Brand className="icon-header" href="#home">
                                        <strong className={"headerTitleSpan"}>BLOGS</strong>
                                    </Navbar.Brand>
                                </Link>

                                <Navbar.Collapse className="justify-content-end">
                                    <Search/>
                                </Navbar.Collapse>
                            </Navbar>
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


export default connect(mapStateToProps, mapDispatchToProps)(Header);
