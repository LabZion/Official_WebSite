import React, {Component} from 'react';
import './CasePage.css';
import Container from "react-bootstrap/Container";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import BreadNav from "../../components/bread_nav/BreadNav";
import Col from "react-bootstrap/Col";
import {Row} from "react-bootstrap";

const markdown = require("markdown").markdown;


class CasePage extends Component {


    render() {
        let caseName = this.props.location.state.params;
        return (
            <Container style={{padding: 0}} className="CasePage">
                <BreadNav
                    bg={"url('https://static.thoughtworks.com/images/contact-us/contact-us-banner-1.jpg')"}
                    title={caseName.customer}
                    subtitle={caseName.description}
                />
                <Row style={{background: '#fff',paddingTop:'2em',paddingBottom:'2em'}}>
                    <Col md={2}></Col>
                    <Col md={7} style={{textAlign: 'left'}}>
                        <Container style={{paddingLeft: '5em'}}
                                   dangerouslySetInnerHTML={{__html: markdown.toHTML(caseName.content)}}>
                        </Container>
                    </Col>
                </Row>
            </Container>
        );
    };


    componentWillMount() {
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(CasePage);
