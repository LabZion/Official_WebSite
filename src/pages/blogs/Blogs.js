import React, {Component} from 'react';
import './Blogs.css';
import Container from "react-bootstrap/Container";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import BreadNav from "../../components/bread_nav/BreadNav";
import {Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";

const markdown = require("markdown").markdown;

const blogs ={
    '怎样Hack Linux的内核符号？':{
        title:'怎样Hack Linux的内核符号？',
        description:'Inline Hook技术能够帮助我们完成函数的动态拦截和跳转，但要实现缺陷函数的自动化热修复则会面临更加复杂的挑战。本文从一个实际例子出发，阐述了在对二进制形式的Linux固件做自动化安全加固的时遇到的技术难题和解决办法。',
        content:''
    }
};
class Blogs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCaseIndex: 0
        }
    }

    render() {
        let blogName = this.props.location.state.params;
        return (
            <Container style={{padding: 0}} className="OpenSource">
                <BreadNav
                    bg={"url('https://dynamic.thoughtworks.com/landing_pages/hero_banner_image_desktop-e5bea60f1eaf14734c2dd2c07b404813.jpeg')"}
                    title={blogs[blogName].title}
                    subtitle={blogs[blogName].description}
                />

                <Row style={{background: '#f4f4f4'}}>
                    <Col md={2}></Col>
                    <Col md={8} style={{textAlign: 'left'}}>
                        <Container style={{padding: 0}}
                                   dangerouslySetInnerHTML={{__html: markdown.toHTML(blogs[blogName].content)}}>
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
