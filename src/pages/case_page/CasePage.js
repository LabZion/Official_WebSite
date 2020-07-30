import React, {Component} from 'react';
import './CasePage.css';
import Container from "react-bootstrap/Container";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import BreadNav from "../../components/bread_nav/BreadNav";
import Col from "react-bootstrap/Col";
import {Row} from "react-bootstrap";

const markdown = require("markdown").markdown;

const cases = {
    SAIC: {
        title: '上汽',
        description: '这是上汽的描述',
        cases: [
            {
                title: '非常牛逼解决案例1',
                content: '## lalala'
            },
            {
                title: '非常牛逼解决案例2',
                content: '## lilili'
            }
        ]
    },
    DAIMLER: {
        title: '戴姆勒',
        description: '这是戴姆勒的描述',
        cases: [
            {
                title: '戴姆勒非常牛逼解决案例1',
                content: '## lalala'
            },
            {
                title: '戴姆勒非常牛逼解决案例2',
                content: '## lilili'
            }
        ]
    },
    GAC: {
        title: '',
        description: '',
        cases: [
            {
                title: '',
                content: ''
            },
            {
                title: '',
                content: ''
            }
        ]
    },
    PORSCHE: {
        title: '',
        description: '',
        cases: [
            {
                title: '',
                content: ''
            },
            {
                title: '',
                content: ''
            }
        ]
    },
    CMB: {
        title: '',
        description: '',
        cases: [
            {
                title: '',
                content: ''
            },
            {
                title: '',
                content: ''
            }
        ]
    },
    BOC: {
        title: '',
        description: '',
        cases: [
            {
                title: '',
                content: ''
            },
            {
                title: '',
                content: ''
            }
        ]
    },
    ZYBANK: {
        title: '',
        description: '',
        cases: [
            {
                title: '',
                content: ''
            },
            {
                title: '',
                content: ''
            }
        ]
    },
    LU: {
        title: '',
        description: '',
        cases: [
            {
                title: '',
                content: ''
            },
            {
                title: '',
                content: ''
            }
        ]
    },
    CM: {
        title: '',
        description: '',
        cases: [
            {
                title: '',
                content: ''
            },
            {
                title: '',
                content: ''
            }
        ]
    },
    HUMANA: {
        title: '',
        description: '',
        cases: [
            {
                title: '',
                content: ''
            },
            {
                title: '',
                content: ''
            }
        ]
    },
    HUAWEI: {
        title: '',
        description: '',
        cases: [
            {
                title: '',
                content: ''
            },
            {
                title: '',
                content: ''
            }
        ]
    },
    SALES: {
        title: '',
        description: '',
        cases: [
            {
                title: '',
                content: ''
            },
            {
                title: '',
                content: ''
            }
        ]
    },
    OOCL: {
        title: '',
        description: '',
        cases: [
            {
                title: '',
                content: ''
            },
            {
                title: '',
                content: ''
            }
        ]
    },
    LANDPORTGROUP: {
        title: '',
        description: '',
        cases: [
            {
                title: '',
                content: ''
            },
            {
                title: '',
                content: ''
            }
        ]
    }
};

class CasePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedCaseIndex: 0
        }
    }

    render() {
        let caseName = this.props.location.state.params;
        return (
            <Container style={{padding: 0}} className="CasePage">
                <BreadNav
                    bg={"url('https://static.thoughtworks.com/images/contact-us/contact-us-banner-1.jpg')"}
                    bread={cases[caseName].title}
                    subtitle={cases[caseName].description}
                />
                <Row style={{background: '#fff',paddingTop:'2em',paddingBottom:'2em'}}>
                    <Col md={2}></Col>
                    <Col md={2} style={{textAlign: 'left'}}>
                        <h2>案例:</h2>
                        <Container style={{paddingTop:'1em',paddingBottom:'2em'}}>
                            {
                                cases[caseName].cases.map((item, index) => {
                                    return <Row style={{display:'block',height:'2em'}} onClick={this.changeCase.bind(this, index)}><h5>{item.title}</h5></Row>
                                })
                            }
                        </Container>
                    </Col>
                    <Col md={6} style={{textAlign: 'left'}}>
                        <h2>{cases[caseName].cases[this.state.selectedCaseIndex].title}</h2>
                        <Container style={{padding: 0}}
                                   dangerouslySetInnerHTML={{__html: markdown.toHTML(cases[caseName].cases[this.state.selectedCaseIndex].content)}}>
                        </Container>
                    </Col>
                </Row>
            </Container>
        );
    };

    changeCase(index) {
        this.setState({
            selectedCaseIndex: index
        });
    }

    componentWillMount() {
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(CasePage);
