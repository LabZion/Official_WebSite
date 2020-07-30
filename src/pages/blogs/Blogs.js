import React, {Component} from 'react';
import './Blogs.css';
import Container from "react-bootstrap/Container";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import BreadNav from "../../components/bread_nav/BreadNav";
import {Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";


class Blogs extends Component {
    render() {
        return (
            <Container style={{padding: 0}} className="OpenSource">
                <BreadNav
                    bg={"url('https://dynamic.thoughtworks.com/landing_pages/hero_banner_image_desktop-e5bea60f1eaf14734c2dd2c07b404813.jpeg')"}
                    title={"Blogs"}
                    subtitle={"From deep technical insights to strategic issues and current business trends, our variety of articles will expand your knowledge, impact your teams and help your business grow."}
                />

                <Row style={{background: '#f4f4f4'}}>
                    <Col md={2}></Col>
                    <Col md={8}>
                        <Container style={{textAlign: "left", paddingTop: '1em', paddingBottom: '2em'}}>
                            <Row>
                            </Row>
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


export default connect(mapStateToProps, mapDispatchToProps)(Blogs);
