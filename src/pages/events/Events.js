import React, {Component} from 'react';
import './Events.css';
import Container from "react-bootstrap/Container";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import BreadNav from "../../components/bread_nav/BreadNav";
import {Image, Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import {withTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {events} from "./eventsData";

class Events extends Component {
    render() {
        return (
            <Container style={{padding: 0}} className="Events">
                <BreadNav
                    bg={"url('https://static.thoughtworks.com/images/news-banner.jpg')"}
                    title={'讲座'}
                    subtitle={"知识不应该仅仅为少数人所拥有，而应该为所有人所拥有。我们将持续分享我们的所学、所思，并定期组织技术分享交流活动。"}
                    // subtitle={"Knowledge should be for all, not just for the few. We believe in sharing what we learn, and regularly host and participate in thought-leadership events across the world."}
                />

                <Row style={{background: '#f4f4f4'}}>
                    <Col md={2}></Col>
                    <Col md={8} style={{marginTop: '2em'}}>
                        <Row>
                            <Col md={8} style={{textAlign: 'left'}}>
                                <h3>精选视频</h3>
                                <Container style={{textAlign: "left", padding: 0, paddingTop: '1em', paddingBottom: '2em'}}>
                                    <Row>
                                        {this.renderPastVideos()}
                                    </Row>
                                </Container>
                            </Col>
                            <Col md={4} style={{textAlign: 'left'}}>
                                <h3>即将开始</h3>
                                <Container style={{textAlign: "left", padding: 0, paddingTop: '1em', paddingBottom: '2em'}}>
                                    {
                                        events.uncome.map((item, index) => {
                                            return this.renderUncomeEvent(item);
                                        })
                                    }
                                </Container>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    };

    renderUncomeEvent(item) {
        return <Row style={{marginBottom: '1em', background: '#fff', marginLeft: 0, padding: 0}}>
            <Col md={4} style={{margin: 0, padding: 0}}>
                <Image src={item.img} style={{width: '100%',height:'100%'}}/>
            </Col>
            <Col md={8} style={{margin: 0, padding: 0}}>
                <Container style={{
                    background: '#fff',
                    padding: 0,
                    paddingTop: '0.5em',
                    paddingBottom: '0.5em',
                    paddingLeft: '0.5em'
                }}>
                    <h6 style={{padding: 0, margin: 0}}>{item.title}</h6>
                    <p style={{padding: 0, margin: 0, marginTop: '0.1em'}}>{item.address}</p>
                    <span style={{padding: 0, margin: 0, marginTop: '0.1em'}}>
                        <span>{item.author}</span>&nbsp;&nbsp;&nbsp;<span>{item.time}</span></span>
                </Container>
            </Col>
        </Row>
    }

    renderPastVideos() {
        return events.past.map((item, index) => {
            return <Col md={4} sytle={{background: '#fff'}}>
                <Link to={{
                    pathname: '/event-detail/'+index,
                }}>
                    <Image src={item.img} style={{width: '100%',height:'40%'}}/></Link>
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
        window.scrollBy(0,-8000);
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(Events));
