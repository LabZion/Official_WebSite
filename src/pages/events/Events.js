import React, {Component} from 'react';
import './Events.css';
import Container from "react-bootstrap/Container";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import FollowUs from "../../components/followus/FollowUs";
import BreadNav from "../../components/bread_nav/BreadNav";
import {Image, Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import {withTranslation} from "react-i18next";


const events = {
    past: [
        {
            img: 'https://static001.infoq.cn/resource/image/c5/22/c5b1c098f463614dad2deab65f1aa422.jpg',
            videoUrl: '',
            time: '',
            title: '为什么新基建来了，我们还在聊中台？',
            author: '李好·ThoughtWorks首席咨询师'
        },
        {
            img: 'https://static001.infoq.cn/resource/image/c5/22/c5b1c098f463614dad2deab65f1aa422.jpg',
            videoUrl: '',
            time: '',
            title: '为什么新基建来了，我们还在聊中台？',
            author: '李好·ThoughtWorks首席咨询师'
        },
        {
            img: 'https://static001.infoq.cn/resource/image/c5/22/c5b1c098f463614dad2deab65f1aa422.jpg',
            videoUrl: '',
            time: '',
            title: '为什么新基建来了，我们还在聊中台？',
            author: '李好·ThoughtWorks首席咨询师'
        },
        {
            img: 'https://static001.infoq.cn/resource/image/c5/22/c5b1c098f463614dad2deab65f1aa422.jpg',
            videoUrl: '',
            time: '',
            title: '为什么新基建来了，我们还在聊中台？',
            author: '李好·ThoughtWorks首席咨询师'
        }
    ],
    uncome: [
        {
            img: 'https://static001.infoq.cn/resource/image/c5/22/c5b1c098f463614dad2deab65f1aa422.jpg',
            title: '为什么新基建来了，我们还在聊中台？',
            address: 'zoom: 99999999',
            author: '李好',
            time: '2020-7-24 19:00',
        },
        {
            img: 'https://static001.infoq.cn/resource/image/c5/22/c5b1c098f463614dad2deab65f1aa422.jpg',
            title: '为什么新基建来了，我们还在聊中台？',
            address: 'zoom: 99999999',
            author: '李好',
            time: '2020-7-24 19:00',
        }
    ]
};


class Events extends Component {
    render() {
        return (
            <Container style={{padding: 0}} className="OpenSource">
                <BreadNav
                    bg={"url('https://static.thoughtworks.com/images/news-banner.jpg')"}
                    title={this.props.t('EVENTS') +" & "+ this.props.t('INSIGHT')}
                    subtitle={"Knowledge should be for all, not just for the few. We believe in sharing what we learn, and regularly host and participate in thought-leadership events across the world."}
                />

                <Row style={{background: '#f4f4f4'}}>
                    <Col md={1}></Col>
                    <Col md={10} style={{marginTop: '2em'}}>
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
                <FollowUs/>
            </Container>
        );
    };

    renderUncomeEvent(item) {
        return <Row style={{marginBottom: '1em', background: '#fff', marginLeft: 0, padding: 0}}>
            <Col md={6} style={{margin: 0, padding: 0}}>
                <Image src={item.img} style={{width: '100%'}}/>
            </Col>
            <Col md={6} style={{margin: 0, padding: 0}}>
                <Container style={{
                    background: '#fff',
                    padding: 0,
                    paddingTop: '0.5em',
                    paddingBottom: '0.5em',
                    paddingLeft: '0.5em'
                }}>
                    <h6 style={{padding: 0, margin: 0}}>{item.title}</h6>
                    <p style={{padding: 0, margin: 0, marginTop: '1em'}}>{item.address}</p>
                    <p style={{padding: 0, margin: 0, marginTop: '1em'}}>
                        <span>{item.author}</span>&nbsp;&nbsp;&nbsp;<span>{item.time}</span></p>
                </Container>
            </Col>
        </Row>
    }

    renderPastVideos() {
        return events.past.map((item, index) => {
            return <Col md={4} sytle={{background: '#fff'}}>
                <Image src={item.img} style={{width: '100%'}}/>
                <Container style={{paddingTop: '1em', paddingBottom: '0.1em', background: '#fff', marginBottom: '2em'}}>
                    <h5>{item.title}</h5>
                    <p>{item.author}</p>
                </Container>
            </Col>
        });
    }

    componentWillMount() {
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(Events));
