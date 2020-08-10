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

const events = {
    past: [
        {
            img: 'https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/SSL%20and%20CA%E8%A7%86%E9%A2%91%E6%88%AA%E5%9B%BE.png',
            videoUrl: 'https://tw-chinasec-public.s3-ap-northeast-1.amazonaws.com/video/SSL_TLS+and+CA.mp4',
            time: '',
            title: '聊聊SSL/TLS和CA那些事？',
            author: '杨倚·ThoughtWorks资深咨询师',
            authorDesc: 'ThoughtWorks 资深咨询师， 企业信息安全顾问，敏捷咨询师',
            content: '##### 内容\n' +
                '\n' +
                'SSL/TLS与CA\n' +
                '\n' +
                '##### 大纲\n' +
                '\n' +
                '1. 简介\n' +
                '2. 对称与非对称加密\n' +
                '3. SSL\n' +
                '4. 证书\n' +
                '5. 自签名证书',
            resources: [
                {
                    name: 'SSL and CA Slide',
                    url: 'https://tw-chinasec-public.s3-ap-northeast-1.amazonaws.com/slides/SSL+and+CA.pptx'
                },
            ]
        },
        {
            img: 'https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/%E5%8C%BA%E5%9D%97%E9%93%BE%E8%A7%86%E9%A2%91%E6%88%AA%E5%9B%BE.png',
            videoUrl: 'https://tw-chinasec-public.s3-ap-northeast-1.amazonaws.com/video/hash%E5%92%8C%E5%8C%BA%E5%9D%97%E9%93%BE.mp4',
            time: '',
            title: '聊聊hash与区块链的那些事',
            author: '杨倚·ThoughtWorks资深咨询师',
            authorDesc: 'ThoughtWorks 资深咨询师， 企业信息安全顾问，敏捷咨询师',
            content: '##### 内容\n' +
                '\n' +
                'hash与区块链\n' +
                '\n' +
                '##### 大纲\n' +
                '\n' +
                '1. hash\n' +
                '2. 区块链',
            resources: [
                {
                    name: 'hash and blockchain Slide',
                    url: 'https://tw-chinasec-public.s3-ap-northeast-1.amazonaws.com/slides/Hash+and+Blockchain.pptx'
                },
            ]
        },
        {
            img: 'https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/Token%E8%87%AA%E9%89%B4%E6%9D%83%E8%A7%86%E9%A2%91%E6%88%AA%E5%9B%BE.png',
            videoUrl: 'https://tw-chinasec-public.s3-ap-northeast-1.amazonaws.com/video/token%E8%87%AA%E9%89%B4%E6%9D%83%E7%9A%84%E7%8C%9C%E6%83%B3.mp4',
            time: '',
            title: '关于Token自鉴权的一些猜想',
            author: '杨倚·ThoughtWorks资深咨询师',
            authorDesc: 'ThoughtWorks 资深咨询师， 企业信息安全顾问，敏捷咨询师',
            content: '##### 内容\n' +
                '\n' +
                'Token自鉴权的猜想\n' +
                '\n' +
                '##### 大纲\n' +
                '\n' +
                '1. Token自鉴权',
            resources: [
                {
                    name: 'Token自鉴权Slide',
                    url: 'https://tw-chinasec-public.s3-ap-northeast-1.amazonaws.com/slides/token%E8%87%AA%E9%89%B4%E6%9D%83.pptx'
                },
            ]
        }
    ],
    uncome: [
        {
            img: 'https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/session.jpg',
            title: 'Welink认证项目分享',
            address: 'zoom: 973 4849 5264 ',
            author: '王力',
            time: '2020-8-13 20:00',
        },
        {
            img: 'https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/%E6%95%AC%E8%AF%B7%E6%9C%9F%E5%BE%85.png',
            title: '敬请期待新的topic！',
            address: 'zoom: 999 999 999',
            author: 'Mr Zion',
            time: '2048-1-24 10:24',
        }
    ]
};

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
                    pathname: '/#event-detail/',
                    state: {params: item}
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
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(Events));
