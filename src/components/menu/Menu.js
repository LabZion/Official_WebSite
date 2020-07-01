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
        this.menu = {
            solution: [
                {
                    title: '行业',
                    items: ['汽车', '金融与保险', '通信与云计算', '零售与互联网', '物流']
                }, {
                    title: '领域',
                    items: ['数据安全', '身份安全', '嵌入式系统安全', '可信计算', '研发/内建安全']
                }
            ], customer: [
                {
                    title: '汽车',
                    items: ['上汽', '戴姆勒', '广汽', '保时捷', '物流']
                }, {
                    title: '金融',
                    items: ['招商银行', '中国银行', '中原银行', '陆金所', '外汇交易所', 'Humana']
                },
                {
                    title: '通信与云计算',
                    items: ['华为']
                },
                {
                    title: '零售与互联网',
                    items: ['星巴克']
                },
                {
                    title: '物流',
                    items: ['东方海外', '陆路港']
                }
            ], aboutUs: [
                {
                    title: '公司',
                    items: ['景愿', '发展历程', '投资者关系']
                },
                {
                    title: '团队',
                    items: ['成员']
                }
            ], contactUs: [
                {
                    title: '中国区',
                    items: ['西安', '北京', '成都', '武汉', '深圳']
                },
                {
                    title: '全球',
                    items: ['柏林']
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
                                    return <Row className={"featureItem"} onMouseEnter={this.onItemEnterHandler.bind(this, index)}>{item.title}<span
                                        style={{position: 'absolute', right: '2em'}}>></span></Row>
                                })
                            }
                        </Col>
                        <Col md={9} style={{textAlign: 'left', padding: '2em'}}>
                            <Row>
                                {
                                    this.menu[this.state.selected][this.state.index].items.map((item, index) => {
                                        return <Col md={3} className={"featureItem"}>{item}</Col>
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
