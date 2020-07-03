import React, {Component} from 'react';
import './Events.css';
import Container from "react-bootstrap/Container";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import FollowUs from "../../components/followus/FollowUs";
import BreadNav from "../../components/bread_nav/BreadNav";
import {Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";


class Events extends Component {
    render() {
        return (
            <Container style={{padding: 0}} className="OpenSource">
                <BreadNav
                    bg={"url('https://static.thoughtworks.com/images/news-banner.jpg')"}
                    title={"Events"}
                    subtitle={"Knowledge should be for all, not just for the few. We believe in sharing what we learn, and regularly host and participate in thought-leadership events across the world."}
                />

                <Row style={{background: '#f4f4f4'}}>
                    <Col md={1}></Col>
                    <Col md={10}>
                        <Container style={{textAlign: "left", paddingTop: '1em', paddingBottom: '2em'}}>
                            <Row>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <FollowUs/>
            </Container>
        );
    };

    componentWillMount() {
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Events);
