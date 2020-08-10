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
                    bg={"url('https://dynamic.thoughtworks.com/landing_pages/hero_banner_image_desktop-e5bea60f1eaf14734c2dd2c07b404813.jpeg')"}
                    title={caseName.customer}
                    subtitle={caseName.description}
                />
                <Row style={{background: '#fff', paddingTop: '2em', paddingBottom: '2em'}}>
                    <Col md={2}></Col>
                    <Col md={8} style={{textAlign: 'left'}}>
                        <Container
                            dangerouslySetInnerHTML={{__html: markdown.toHTML(caseName.content)}}>
                        </Container>
                    </Col>
                </Row>
            </Container>
        );
    };


    componentWillMount() {
    }

    componentDidMount() {
        window.scrollBy(0,-8000);
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(CasePage);
