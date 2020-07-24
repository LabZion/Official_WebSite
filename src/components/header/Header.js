import React, {Component, Fragment} from 'react';
import './Header.css';
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";
import Image from "react-bootstrap/Image";
import Logo from "../../static/images/logo_large.png"
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {withTranslation} from 'react-i18next';
import {Dropdown} from "react-bootstrap";


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
                                <Link to="/home" style={{fontWeight: 'bolder', margin: 0, padding: 0,marginRight:'2em'}}>
                                    <Image src={Logo} className="logo-img" rounded/>
                                </Link>

                                <Link to="/event" style={{fontWeight: 'bolder', margin: 0, padding: 0}}>
                                    <Navbar.Brand className="icon-header">
                                        <strong className={"headerTitleSpan"}>{this.props.t('EVENTS')} & {this.props.t('INSIGHT')}</strong>
                                    </Navbar.Brand>
                                </Link>

                                <Navbar.Collapse className="justify-content-end">
                                    <Dropdown>
                                        <Dropdown.Toggle variant="trans" id="dropdown-basic">
                                            {this.props.t('Language')}
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => this.changeLanguage('zh')}>简体中文</Dropdown.Item>
                                            <Dropdown.Item onClick={() => this.changeLanguage('en')}>English</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Navbar.Collapse>
                            </Navbar>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }

    changeLanguage(lng) {
        this.props.i18n.changeLanguage(lng);
    };


    componentWillReceiveProps(nextProps) {
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(Header));
