import React, {Component} from 'react';
import './Blogs.css';
import Container from "react-bootstrap/Container";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import BreadNav from "../../components/bread_nav/BreadNav";
import {Image, Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";
import {blogs} from "./blogsData";

class Blogs extends Component {
    render() {
        return (
            <Container style={{padding: 0}} className="Blogs">
                <BreadNav
                    bg={"url('https://dynamic.thoughtworks.com/landing_pages/hero_banner_image_desktop-e5bea60f1eaf14734c2dd2c07b404813.jpeg')"}
                    title={"博客"}
                    subtitle={"知识不应该仅仅为少数人所拥有，而应该为所有人所拥有。我们将持续分享我们的所思、所学，并定期组织和参加世界各地的思想交流活动。"}
                    // subtitle={"Knowledge should be for all, not just for the few. We believe in sharing what we learn, and regularly host and participate in thought-leadership events across the world."}
                />
                <Row style={{background: '#f4f4f4'}}>
                    <Col md={2}></Col>
                    <Col md={8} style={{marginTop: '2em'}}>
                        <Row>
                            <Col md={12} style={{textAlign: 'left'}}>
                                <h3>精选博客</h3>
                                <Container style={{textAlign: "left", padding: 0, paddingTop: '1em', paddingBottom: '2em'}}>
                                    <Row>
                                        {this.renderBlogs()}
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    };

    renderBlogs() {
        return blogs.blog.map((item, index) => {
            return <Col md={6} sytle={{background: '#fff'}}>
                <Link to={{
                    pathname: '/blog-detail/'+index
                }}>
                    <Image src={item.img} style={{width: '100%', height: '60%'}}/></Link>
                <Container style={{paddingTop: '1em', paddingBottom: '0.1em', background: '#fff', marginBottom: '2em'}}>
                    <h5>{item.title}</h5>
                    <p>{item.author}</p>
                </Container>
            </Col>
        });
    }

    componentWillMount() {
    }

    componentDidMount() {
        window.scrollBy(0,-80000);
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Blogs);
