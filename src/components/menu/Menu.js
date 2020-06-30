import React, {Component, Fragment} from 'react';
import './Menu.css';
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Dropdown} from "react-bootstrap";
import {withTranslation} from "react-i18next";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.neum = {
            solution: {}, customer: {}, resources: {}, aboutUs: {}, contacts: {}
        };
        this.state = {
            isPanelShow: false,
            selected: 'solution'
        };
    }

    render() {
        return (
            <Fragment>
                <Container className="Header">
                    <Row>
                        <Col md={1}> </Col>
                        <Col md={10} style={{padding: 0}}>
                            <Navbar bg="#fff" variant="light" style={{paddingLeft: 0, paddingRight: 0}}>
                                <Navbar.Brand className="icon-header" href="#home">
                                    <Dropdown>
                                        <Dropdown.Toggle onMouseEnter={this.onMenuEnterHandler.bind(this, 'solution')}
                                                         variant="success"
                                                         style={{background: 'transparent', color: '#4a4a4a', border: 'none'}}
                                                         id="dropdown-basic">
                                            {this.props.t('SOLUTION_SERVICE')}
                                        </Dropdown.Toggle>
                                        <Dropdown.Toggle onMouseEnter={this.onMenuEnterHandler.bind(this, 'customer')}
                                                         variant="success" style={{background: 'transparent', color: '#4a4a4a', border: 'none'}}
                                                         id="dropdown-basic">
                                            {this.props.t('CUSTOMER')}
                                        </Dropdown.Toggle>
                                        <Dropdown.Toggle onMouseEnter={this.onMenuEnterHandler.bind(this, 'aboutUs')}
                                                         variant="success" style={{background: 'transparent', color: '#4a4a4a', border: 'none'}}
                                                         id="dropdown-basic">
                                            {this.props.t('ABOUT_US')}
                                        </Dropdown.Toggle>
                                        <Dropdown.Toggle onMouseEnter={this.onMenuEnterHandler.bind(this, 'contactUs')}
                                                         variant="success" style={{background: 'transparent', color: '#4a4a4a', border: 'none'}}
                                                         id="dropdown-basic">
                                            {this.props.t('CONTACT_US')}
                                        </Dropdown.Toggle>
                                    </Dropdown>
                                </Navbar.Brand>
                            </Navbar>

                            {this.renderMenuPanel()}
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }

    onMenuEnterHandler(menu) {
        this.setState({
            isPanelShow: true,
            selected: menu
        });
    }

    onMenuLeaveHandler(menu) {
        this.setState({
            isPanelShow: false,
            selected: menu
        });
    }


    renderMenuPanel() {
        return this.state.isPanelShow ? <Container className={"menuContainer"}
                                                   onMouseLeave={this.onMenuLeaveHandler.bind(this, 'solution')}>
            <Row>
                <Col md={1}> </Col>
                <Col md={10}>
                    <Row style={{borderTop: '1px solid #f0f1f3'}}>
                        <Col md={3} style={{textAlign: 'left', borderRight: '1px solid #f0f1f3', padding: '2em'}}>
                            <Row className={"featureItem"}>Solution By Use Case<span style={{position: 'absolute', right: '2em'}}>></span></Row>
                            <Row className={"featureItem"}>Solution By Industry<span style={{position: 'absolute', right: '2em'}}>></span></Row>
                        </Col>
                        <Col md={9} style={{textAlign: 'left', padding: '2em'}}>
                            <Row>
                                <Col md={3} className={"featureItem"}>数据安全</Col>
                                <Col md={3} className={"featureItem"}>身份安全</Col>
                                <Col md={3} className={"featureItem"}>可信计算</Col>
                                <Col md={3} className={"featureItem"}>内建安全</Col>
                            </Row>
                            <Row>
                                <Col md={3} className={"featureItem"}>保时捷</Col>
                                <Col md={3} className={"featureItem"}>华为</Col>
                                <Col md={3} className={"featureItem"}>广汽</Col>
                                <Col md={3} className={"featureItem"}>上汽</Col>
                                <Col md={3} className={"featureItem"}>戴姆勒</Col>
                                <Col md={3} className={"featureItem"}>招商银行</Col>
                                <Col md={3} className={"featureItem"}>中原银行</Col>
                                <Col md={3} className={"featureItem"}>步长制药</Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container> : null;
    }

    componentWillReceiveProps(nextProps) {
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(Menu));
