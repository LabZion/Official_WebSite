import React, {Component} from 'react';
import './Cases.css';
import Container from "react-bootstrap/Container";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import BreadNav from "../../components/bread_nav/BreadNav";
import {Image, Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";
import {cases} from "./casesData";

class Cases extends Component {
    render() {

        let industry = 'car';
        if(this.props.match.params) {
            industry = this.props.match.params.industry;
        }
        return (
            <Container style={{padding: 0}} className="Cases">
                <BreadNav
                    bg={cases[industry].img}
                    title={cases[industry].title}
                    subtitle={cases[industry].description}
                />
                <Row style={{background: '#f4f4f4'}}>
                    <Col md={2}></Col>
                    <Col md={8} style={{marginTop: '2em'}}>
                        <Row>
                            <Col md={12} style={{textAlign: 'left'}}>
                                <h3>客户案例</h3>
                                <Container style={{textAlign: "left", padding: 0, paddingTop: '1em', paddingBottom: '2em'}}>
                                    <Row>
                                        {this.renderCases(industry)}
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    };

    renderCases(industry) {
        return cases[industry].data.map((item, index) => {
            return <Col md={6} sytle={{background: '#fff'}}>
                <Link to={{
                    pathname: '/case-detail/'+industry+'/'+index
                }}>
                    <Image src={item.img} style={{width: '100%',height:'60%'}}/></Link>
                <Container style={{paddingTop: '1em', paddingBottom: '0.1em', background: '#fff', marginBottom: '2em'}}>
                    <h5>{item.customer}</h5>
                    <p>{item.description}</p>
                </Container>
            </Col>
        });
    }

    componentWillMount() {
    }

    componentDidMount() {
        window.scrollBy(0,-8000);
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Cases);
