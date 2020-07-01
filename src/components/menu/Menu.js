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
                    title: '行业',
                    items: [
                        {title: '汽车', route: '/solution/car'},
                        {title: '金融与保险', route: '/solution/financial'},
                        {title: '通信与云计算', route: '/solution/cloud'},
                        {title: '零售与互联网', route: '/solution/sales'},
                        {title: '物流', route: '/solution/traffic'}
                    ]
                }, {
                    title: '领域',
                    items: [
                        {title: '数据安全', route: '/solution/data'},
                        {title: '身份安全', route: '/solution/identify'},
                        {title: '嵌入式系统安全', route: '/solution/embed'},
                        {title: '可信计算', route: '/solution/trust'},
                        {title: '研发/内建安全', route: '/solution/buildin'},
                    ]
                }
            ], customer: [
                {
                    title: '汽车',
                    items: [
                        {title: '上汽', route: ''},
                        {title: '戴姆勒', route: ''},
                        {title: '广汽', route: ''},
                        {title: '保时捷', route: ''},
                    ]
                }, {
                    title: '金融',
                    items: [
                        {title: '招商银行', route: ''},
                        {title: '中国银行', route: ''},
                        {title: '中原银行', route: ''},
                        {title: '陆金所', route: ''},
                        {title: '外汇交易所', route: ''},
                        {title: 'Humana', route: ''},
                    ]
                }, {
                    title: '通信与云计算',
                    items: [
                        {title: '华为', route: ''},
                    ]
                }, {
                    title: '零售与互联网',
                    items: [
                        {title: '星巴克', route: ''},
                    ]
                },
                {
                    title: '物流',
                    items: [
                        {title: '东方海外', route: ''},
                        {title: '陆路港', route: ''},
                    ]
                }
            ], resource: [
                {
                    title: '开源',
                    items: [
                        {title: 'Linux内核hook框架', route: '/open-source/hook-framework'},
                        {title: 'Synestia内核', route: '/open-source/synestia-os'},
                    ]
                }
            ], aboutUs: [
                {
                    title: '公司',
                    items: [
                        {title: '景愿', route: '/company'},
                        {title: '发展历程', route: '/company'},
                        {title: '投资者关系', route: '/company'},
                    ]
                },
                {
                    title: '团队',
                    items: [
                        {title: '成员', route: '/team/member'},
                    ]
                }
            ], contactUs: [
                {
                    title: '中国区',
                    items: [
                        {title: '西安', route: '/contact'},
                        {title: '北京', route: '/contact'},
                        {title: '成都', route: '/contact'},
                        {title: '武汉', route: '/contact'},
                        {title: '深圳', route: '/contact'},
                    ]
                },
                {
                    title: '全球',
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
                            {
                                this.menu[this.state.selected].map((item, index) => {
                                    return <Row className={"featureItem"}
                                                onMouseEnter={this.onItemEnterHandler.bind(this, index)}><strong>{item.title}</strong><span
                                        style={{position: 'absolute', right: '2em'}}>></span></Row>
                                })
                            }
                        </Col>
                        <Col md={9} style={{textAlign: 'left', padding: '2em'}}>
                            <Row>
                                {
                                    this.menu[this.state.selected][this.state.index].items.map((item, index) => {
                                        return <Col md={3} className={"featureItem"}><Link to={item.route} style={{color: '#000'}}>{item.title}</Link></Col>
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
