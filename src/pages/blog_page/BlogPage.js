import React, {Component} from 'react';
import './BlogPage.css';
import Container from "react-bootstrap/Container";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import BreadNav from "../../components/bread_nav/BreadNav";
import {Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";

const markdown = require("markdown").markdown;

class BlogPage extends Component {
    render() {
        let detail = this.props.location.state.params;
        return (
            <Container style={{padding: 0}} className="BlogPage">
                <BreadNav
                    bg={"url('https://dynamic.thoughtworks.com/landing_pages/hero_banner_image_desktop-e5bea60f1eaf14734c2dd2c07b404813.jpeg')"}
                    title={detail.title}
                    subtitle={detail.description}
                />

                <Row style={{background: '#fff', paddingTop: '3em'}}>
                    <Col md={2}></Col>
                    <Col md={8} style={{textAlign: 'left'}}>
                        <Container>
                            <h3>{detail.title}</h3>
                            <p>{detail.author}</p>
                        </Container>
                        <Container className={"blog-container"}
                                   dangerouslySetInnerHTML={{__html: markdown.toHTML(detail.content)}}>
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


export default connect(mapStateToProps, mapDispatchToProps)(BlogPage);
