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
                        {title: 'CAR', route: '/solution/car'},
                        {title: 'FINANCIAL', route: '/solution/financial'},
                        {title: 'CLOUD', route: '/solution/cloud'},
                        {title: 'SALES', route: '/solution/sales'},
                        {title: 'LOGISTICS', route: '/solution/traffic'}
                    ]
                }, {
                    title: 'SCOPE',
                    items: [
                        {title: 'DATA', route: '/solution/data'},
                        {title: 'IDENTIFY', route: '/solution/identify'},
                        {title: 'EMBED', route: '/solution/embed'},
                        {title: 'TRUST', route: '/solution/trust'},
                        {title: 'BUILDIN', route: '/solution/buildin'},
                    ]
                }
            ], customer: [
                {
                    title: 'CAR',
                    items: [
                        {title: '上汽', route: ''},
                        {title: 'DAIMLER', route: ''},
                        {title: '广汽', route: ''},
                        {title: '保时捷', route: ''},
                    ]
                }, {
                    title: 'FINANCIAL',
                    items: [
                        {title: '招商银行', route: ''},
                        {title: '中国银行', route: ''},
                        {title: '中原银行', route: ''},
                        {title: '陆金所', route: ''},
                        {title: '外汇交易所', route: ''},
                        {title: 'Humana', route: ''},
                    ]
                }, {
                    title: 'CLOUD',
                    items: [
                        {title: 'HUAWEI', route: ''},
                    ]
                }, {
                    title: 'SALES',
                    items: [
                        {title: 'STARBUCKS', route: ''},
                    ]
                },
                {
                    title: 'LOGISTICS',
                    items: [
                        {title: 'OOCL', route: ''},
                        {title: '陆路港', route: ''},
                    ]
                }
            ], resource: [
                {
                    title: 'OPENSOURCE',
                    items: [
                        {title: 'Linux内核hook框架', route: '/open-source/hook-framework'},
                        {title: 'Synestia内核', route: '/open-source/synestia-os'},
                    ]
                }
            ], aboutUs: [
                {
                    title: 'COMPANY',
                    items: [
                        {title: 'HOPE', route: '/company'},
                        {title: '发展历程', route: '/company'},
                        {title: '投资者关系', route: '/company'},
                    ]
                },
                {
                    title: 'TEAM',
                    items: [
                        {title: 'MEMBER', route: '/team/member'},
                    ]
                }
            ], contactUs: [
                {
                    title: 'CHINA',
                    items: [
                        {title: 'XIAN', route: '/contact'},
                        {title: 'BEIJING', route: '/contact'},
                        {title: 'CHENGDOU', route: '/contact'},
                        {title: 'WUHAN', route: '/contact'},
                        {title: 'SHENZHEN', route: '/contact'},
                    ]
                },
                {
                    title: 'GLOBAL',
                    items: [
                        {title: '柏林', route: '/contact'},
                    ]
                }
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
                                        <Dropdown.Toggle onMouseEnter={this.onMenuEnterHandler.bind(this, 'resource')}
                                                         variant="success" style={{background: 'transparent', color: '#4a4a4a', border: 'none'}}
                                                         id="dropdown-basic">
                                            {this.props.t('RESOURCE')}
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
                <Col md={1}> </Col>
                <Col md={10}>
                    <Row style={{borderTop: '1px solid #f0f1f3'}}>
                        <Col md={3} style={{textAlign: 'left', borderRight: '1px solid #f0f1f3', padding: '2em'}}>
                            {
                                this.menu[this.state.selected].map((item, index) => {
                                    return <Row className={this.state.index === index ? "featureItemOn" : "featureItem"}
                                                onMouseEnter={this.onItemEnterHandler.bind(this, index)}><strong>{this.props.t(item.title)}</strong><span
                                        style={{position: 'absolute', right: '2em'}}>></span></Row>
                                })
                            }
                        </Col>
                        <Col md={9} style={{textAlign: 'left', padding: '2em'}}>
                            <Row>
                                {
                                    this.menu[this.state.selected][this.state.index].items.map((item, index) => {
                                        return <Col md={3} className={"featureItem"}><Link to={item.route} style={{color: '#000'}}>{this.props.t(item.title)}</Link></Col>
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
