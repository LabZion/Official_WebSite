import React, {Component} from 'react';
import './EventDetail.css';
import Container from "react-bootstrap/Container";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import FollowUs from "../../components/followus/FollowUs";
import {Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import {withTranslation} from "react-i18next";
import 'video-react/dist/video-react.css';
import {Player} from 'video-react';
const markdown = require("markdown").markdown;

class EventDetail extends Component {
    render() {
        let detail = this.props.location.state.params;
        return (
            <Container style={{padding: 0}} className="EventDetail">
                <Row style={{background: '#29292f'}}>
                    <Col md={2}></Col>
                    <Col md={8} style={{marginTop: '2em', background: '#29292f',color:'#fff'}}>
                        <Container style={{textAlign: "left", padding: 0, paddingTop: '1em', paddingBottom: '2em'}}>
                            <Player
                                playsInline
                                poster={detail.img}
                                src={detail.videoUrl}
                            />
                            <h3 style={{color:'hsla(0,0%,100%,.8)', marginTop:'1em'}}>{detail.title}</h3>
                            <p style={{color:'hsla(0,0%,100%,.6)'}}>{detail.author}</p>
                            <p style={{color:'#666'}}>{detail.authorDesc}</p>
                        </Container>
                    </Col>
                </Row>
                <Row style={{background: '#fff',paddingBottom:'2em'}}>
                    <Col md={2}></Col>
                    <Col md={8} style={{marginTop: '2em', textAlign:'left'}}>
                        <h3>内容介绍</h3>
                        <Container style={{padding:0}} dangerouslySetInnerHTML={{__html: markdown.toHTML(detail.content)}}>
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

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(EventDetail));
