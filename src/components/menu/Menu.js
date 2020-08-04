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
import {Link} from "react-router-dom";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.menu = {
            solution: [
                {
                    title: 'INDUSTRY',
                    items: [
                        {title: 'CAR', route: '/solution', state: {params: 'car'}},
                        {title: 'FINANCIAL', route: '/solution', state: {params: 'financial'}},
                        {title: 'CLOUD', route: '/solution', state: {params: 'cloud'}},
                        {title: 'SALES', route: '/solution', state: {params: 'sales'}},
                        //{title: 'LOGISTICS', route: '/solution', state: {params: 'logistics'}}
                    ]
                },
                // {
                //     title: 'SCOPE',
                //     items: [
                //         {title: 'DATA', route: '/solution', state: {params: 'data'}},
                //         {title: 'IDENTIFY', route: '/solution', state: {params: 'identify'}},
                //         {title: 'EMBED', route: '/solution', state: {params: 'embed'}},
                //         {title: 'TRUST', route: '/solution', state: {params: 'trust'}},
                //         {title: 'BUILDIN', route: '/solution', state: {params: 'buildin'}},
                //     ]
                // }
            ], customer: [{
                title: 'CUSTOMER',
                items: [
                    {title: 'CARINDUSTRY', route: '/cases', state: {params: 'car'}},
                    {title: 'CLOUDINDUSTRY', route: '/cases', state: {params: 'cloud'}},
                ]
            },

            ], resource: [
                {
                    title: 'OPENSOURCE',
                    items: [
                        {title: 'HOOKFRAMEWORK', route: '/open-source', state: {params: 'HOOKFRAMEWORK'}},
                        {title: 'SYNESTIA', route: '/open-source', state: {params: 'SYNESTIA'}},
                        {title: 'NDFS', route: '/open-source', state: {params: 'NDFS'}},
                        {title: 'TingGL', route: '/open-source', state: {params: 'TingGL'}},
                        {title: 'Du.rs', route: '/open-source', state: {params: 'Du.rs'}},
                        {title: 'JavascriptLike Compiler', route: '/open-source', state: {params: 'Compiler'}},
                    ]
                }
            ], aboutUs: [
                {
                    title: 'COMPANY',
                    items: [
                        {title: 'GENERAL', route: '/company', state: {params: ''}},

                    ]
                },
                {
                    title: 'TEAM',
                    items: [
                        {title: 'MEMBER', route: '/team/member', state: {params: ''}},
                    ]
                }
            ], contactUs: [
                {},
                {}
            ]
        };
        this.state = {
            isPanelShow: false,
            selected: 'solution',
            index: 0,
        };
    }

    render() {
        return (
            <Fragment>
                <Container className="Header">
                    <Row>
                        <Col md={2}> </Col>
                        <Col md={8} style={{padding: 0}}>
                            <Navbar bg="#fff" variant="light" style={{paddingLeft: 0, paddingRight: 0}}>
                                <Navbar.Brand className="icon-header" href="#home">
                                    <Dropdown>
                                        <Dropdown.Toggle onMouseEnter={this.onMenuEnterHandler.bind(this, 'solution')}
                                                         variant="success"
                                                         style={{
                                                             background: 'transparent',
                                                             color: '#4a4a4a',
                                                             border: 'none'
                                                         }}
                                                         id="dropdown-basic">
                                            {this.props.t('SOLUTION_SERVICE')}
                                        </Dropdown.Toggle>
                                        <Dropdown.Toggle onMouseEnter={this.onMenuEnterHandler.bind(this, 'customer')}
                                                         variant="success" style={{
                                            background: 'transparent',
                                            color: '#4a4a4a',
                                            border: 'none'
                                        }}
                                                         id="dropdown-basic">
                                            {this.props.t('CUSTOMER')}
                                        </Dropdown.Toggle>
                                        <Dropdown.Toggle onMouseEnter={this.onMenuEnterHandler.bind(this, 'resource')}
                                                         variant="success" style={{
                                            background: 'transparent',
                                            color: '#4a4a4a',
                                            border: 'none'
                                        }}
                                                         id="dropdown-basic">
                                            {this.props.t('RESOURCE')}
                                        </Dropdown.Toggle>
                                        <Dropdown.Toggle onMouseEnter={this.onMenuEnterHandler.bind(this, 'aboutUs')}
                                                         variant="success" style={{
                                            background: 'transparent',
                                            color: '#4a4a4a',
                                            border: 'none'
                                        }}
                                                         id="dropdown-basic">
                                            {this.props.t('ABOUT_US')}
                                        </Dropdown.Toggle>
                                        <Link to="/contact-us" style={{fontWeight: 'bolder', margin: 0, padding: 0}}>
                                        <button variant="success" style={{
                                            background: 'transparent',
                                            fontWeight:'lighter',
                                            fontSize:'0.8em',
                                            marginLeft:'1.2em',
                                            textDecoration:'none',
                                            display:'inline-block',
                                            color: '#4a4a4a',
                                            border: 'none'
                                        }} id="dropdown-basic">
                                            {this.props.t('CONTACT_US')}
                                        </button>
                                        </Link>
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

    onItemEnterHandler(index) {
        this.setState({
            isPanelShow: true,
            index: index
        });
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
            selected: 'solution',
            index: 0,
        });
    }


    renderMenuPanel() {
        return this.state.isPanelShow ? <Container className={"menuContainer"}
                                                   onMouseLeave={this.onMenuLeaveHandler.bind(this, 'solution')}>
            <Row>
                <Col md={2}> </Col>
                <Col md={8}>
                    <Row style={{borderTop: '1px solid #f0f1f3', paddingLeft: '1em'}}>
                        <Col md={3} style={{textAlign: 'left', borderRight: '1px solid #f0f1f3', paddingBottom: '1em'}}>
                            {
                                this.menu[this.state.selected].map((item, index) => {
                                    return <Row style={{paddingTop: '0.5em'}}
                                                className={this.state.index === index ? "featureItemOn" : "featureItem"}
                                                onMouseEnter={this.onItemEnterHandler.bind(this, index)}><strong>{this.props.t(item.title)}</strong><span
                                        style={{position: 'absolute', right: '2em'}}>></span></Row>
                                })
                            }
                        </Col>
                        <Col md={9} style={{textAlign: 'left', paddingBottom: '1em'}}>
                            <Row>
                                {
                                    this.menu[this.state.selected][this.state.index].items.map((item, index) => {
                                        return <Col md={4} style={{paddingTop: '0.5em'}} className={"featureItem"}>
                                            <Link to={{
                                                pathname: item.route,
                                                state: item.state,
                                            }} class={"menu-item"}>{this.props.t(item.title)}</Link>
                                        </Col>
                                    })
                                }
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
