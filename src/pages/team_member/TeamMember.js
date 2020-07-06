import React, {Component} from 'react';
import './TeamMember.css';
import Container from "react-bootstrap/Container";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import FollowUs from "../../components/followus/FollowUs";
import BreadNav from "../../components/bread_nav/BreadNav";
import {Col, Image, Row} from "react-bootstrap";
import LaoWang from "../../static/images/members/laowang.jpeg"
import Xingfeng from "../../static/images/members/xingfeng.png"
import Taoliu from "../../static/images/members/taoge.png"
import XuanLiu from "../../static/images/members/xuanliu_shenzhen.jpeg"
import YuBao from "../../static/images/members/Yuxia_Gao.jpeg"
import NengCao from "../../static/images/members/nengcao.png"
import LiangLiang from "../../static/images/members/liangliang.jpeg"
import HaoLi from "../../static/images/members/haoli.jpg"
import Luke from "../../static/images/members/luke.png"
import Lvju from "../../static/images/members/lvju.jpeg"
import LiWang from "../../static/images/members/liwang.png"
import YiYang from "../../static/images/members/yiyang.jpeg"
import ShiFu from "../../static/images/members/shifu.jpeg"
import ShauiGao from "../../static/images/members/shuage.jpeg"
import Hubing from "../../static/images/members/liuhubing.jpg"
import Wangjing from "../../static/images/members/jingwang.jpeg"

const members = [
    {
        name: 'Jing.Wang',
        title: 'Senior Consultant',
        address: 'Xi`An',
        img: Wangjing,
        github: 'http://github.com',
        youtube: 'http://github.com',
        twitter: 'http://github.com',
    },
    {
        name: 'Hubing.Liu',
        title: 'Consultant,IcC design engineer, Software Engineer',
        address: 'Xi`An',
        img: Hubing,
        github: 'http://github.com',
        youtube: 'http://github.com',
        twitter: 'http://github.com',
    },
    {
        name: 'Shuai.Gao',
        title: 'Senior Consultant',
        address: 'Xi`An',
        img: ShauiGao,
        github: 'http://github.com',
        youtube: 'http://github.com',
        twitter: 'http://github.com',
    },
    {
        name: 'Shifu.Wu',
        title: 'Senior Consultant',
        address: 'ChengDu',
        img: ShiFu,
        github: 'http://github.com',
        youtube: 'http://github.com',
        twitter: 'http://github.com',
    },
    {
        name: 'Yi.Yang',
        title: 'Senior Consultant',
        address: 'ChengDu',
        img: YiYang,
        github: 'http://github.com',
        youtube: 'http://github.com',
        twitter: 'http://github.com',
    },
    {
        name: 'Li.Wang',
        title: 'Senior Consultant',
        address: 'Xi`An',
        img: LiWang,
        github: 'http://github.com',
        youtube: 'http://github.com',
        twitter: 'http://github.com',
    },
    {
        name: 'Lyuju.Wang',
        title: 'Senior Consultant',
        address: 'Xi`An',
        img: Lvju,
        github: 'http://github.com',
        youtube: 'http://github.com',
        twitter: 'http://github.com',
    },
    {
        name: 'Lu.Yang',
        title: 'BU Head',
        address: 'Xi`An',
        img: Luke,
        github: 'http://github.com',
        youtube: 'http://github.com',
        twitter: 'http://github.com',
    },
    {
        name: 'Hao.Li',
        title: 'Lead Consultant',
        address: 'WuHan',
        img: HaoLi,
        github: 'http://github.com',
        youtube: 'http://github.com',
        twitter: 'http://github.com',
    },
    {
        name: 'Liangliang.Liu',
        title: 'Consultant, Software Engineer',
        address: 'Xi`An',
        img: LiangLiang,
        github: 'http://github.com',
        youtube: 'http://github.com',
        twitter: 'http://github.com',
    },
    {
        name: 'Neng.Cao',
        title: 'Senior Consultant, Software Engineer',
        address: 'WuHan',
        img: NengCao,
        github: 'http://github.com',
        youtube: 'http://github.com',
        twitter: 'http://github.com',
    },
    {
        name: 'Yuxia.Gao',
        title: 'Advisory, Consultant, Software Engineer',
        address: 'Xi`An',
        img: YuBao,
        github: 'http://github.com',
        youtube: 'http://github.com',
        twitter: 'http://github.com',
    },
    {
        name: 'Xuan.Liu',
        title: 'Consultant, Software Engineer',
        address: 'Xi`An',
        img: XuanLiu,
        github: 'http://github.com',
        youtube: 'http://github.com',
        twitter: 'http://github.com',
    },
    {
        name: 'Zhangjun.Wang',
        title: 'SynestiaOS Team',
        address: 'Xi`An',
        img: LaoWang,
        github: 'http://github.com',
        youtube: 'http://github.com',
        twitter: 'http://github.com',
    },
    {
        name: 'Tao.Liu',
        title: 'SynestiaOS Team',
        address: 'Beijing',
        img: Taoliu,
        github: 'http://github.com',
        youtube: 'http://github.com',
        twitter: 'http://github.com',
    },
    {
        name: 'Xingfeng.Yang',
        title: 'SynestiaOS Team',
        address: 'Xi`An',
        img: Xingfeng,
        github: 'http://github.com',
        youtube: 'http://github.com',
        twitter: 'http://github.com',
    }
];

class TeamMember extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container style={{padding: 0}} className="Home">
                <BreadNav bg={"url('https://static.thoughtworks.com/images/contact-us/contact-us-banner-1.jpg')"}
                          title={"The Security Business Union"}
                          subtitle={"Let's drive security into the fabric of your business together"}/>
                <Row>
                    <Col md={1}/>
                    <Col md={10}>
                        {this.renderMembers()}
                    </Col>
                </Row>

                <FollowUs/>
            </Container>
        );
    };

    renderMembers() {
        this.shuffle(members);
        return <Row>
            {members.map((item, index) => {
                return <Col md={4} style={{padding: '1em'}}>
                    <Row>
                        <Col md={6} style={{padding: '1em'}}>
                            <Image className={"head"} variant="top" src={item.img}/>
                        </Col>
                        <Col md={6} style={{padding: '2em', textAlign: "left", paddingLeft: '0.5em'}}>
                            <h4>{item.name}</h4>
                            <p>{item.title}</p>
                            <p/>
                            <p/>
                            <p>{item.address}</p>
                            <Row>
                                <Col style={{textAlign: 'left', marginTop: '1em'}}>
                                    <Col style={{width: '40px', display: "inline-block", padding: 0}}>
                                        <svg id="youtube-icon" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                            <circle className="m-cls-1" cx="20" cy="20" r="20"/>
                                            <path className="m-cls-2"
                                                  d="M30.91,14.53a2.89,2.89,0,0,0-2-2C27.12,12,20,12,20,12s-7.12,0-8.9.47a2.9,2.9,0,0,0-2,2A30.56,30.56,0,0,0,8.63,20a30.44,30.44,0,0,0,.46,5.47,2.89,2.89,0,0,0,2,2C12.9,28,20,28,20,28s7.12,0,8.9-.47a2.87,2.87,0,0,0,2-2A30.56,30.56,0,0,0,31.37,20,28.88,28.88,0,0,0,30.91,14.53ZM17.73,23.41V16.59L23.65,20Z"/>
                                        </svg>
                                    </Col>
                                    <Col style={{width: '40px', display: "inline-block", padding: 0, marginLeft: '1em'}}>
                                        <svg id="github-icon" viewBox="0 0 75.93 75.93" xmlns="http://www.w3.org/2000/svg">
                                            <path className="m-cls-1" d="M38,0a38,38,0,1,0,38,38A38,38,0,0,0,38,0Z"/>
                                            <path className="m-cls-2"
                                                  d="M38,15.59A22.95,22.95,0,0,0,30.71,60.3c1.15.21,1.57-.5,1.57-1.11s0-2,0-3.9c-6.38,1.39-7.73-3.07-7.73-3.07A6.09,6.09,0,0,0,22,48.86c-2.09-1.42.15-1.39.15-1.39a4.81,4.81,0,0,1,3.52,2.36c2,3.5,5.37,2.49,6.67,1.91a4.87,4.87,0,0,1,1.46-3.07c-5.09-.58-10.45-2.55-10.45-11.34a8.84,8.84,0,0,1,2.36-6.15,8.29,8.29,0,0,1,.23-6.07s1.92-.62,6.3,2.35a21.82,21.82,0,0,1,11.49,0c4.38-3,6.3-2.35,6.3-2.35a8.29,8.29,0,0,1,.23,6.07,8.84,8.84,0,0,1,2.36,6.15c0,8.81-5.37,10.75-10.48,11.32a5.46,5.46,0,0,1,1.56,4.25c0,3.07,0,5.54,0,6.29s.42,1.33,1.58,1.1A22.94,22.94,0,0,0,38,15.59Z"/>
                                        </svg>
                                    </Col>
                                    <Col style={{width: '40px', display: "inline-block", padding: 0, marginLeft: '1em'}}>
                                        <svg id="twitter-icon" viewBox="0 0 75.93 75.93" xmlns="http://www.w3.org/2000/svg">
                                            <circle className="m-cls-1" cx="37.97" cy="37.97" r="37.97"/>
                                            <path className="m-cls-2"
                                                  d="M55.2,22.73a15.43,15.43,0,0,1-4.88,1.91,7.56,7.56,0,0,0-5.61-2.49A7.78,7.78,0,0,0,37,30a7.56,7.56,0,0,0,.2,1.79,21.63,21.63,0,0,1-15.84-8.23,8,8,0,0,0,2.37,10.52,7.66,7.66,0,0,1-3.48-1v.09A7.84,7.84,0,0,0,26.45,41a7.54,7.54,0,0,1-2,.28A7.64,7.64,0,0,1,23,41.09a7.71,7.71,0,0,0,7.18,5.47,15.21,15.21,0,0,1-9.55,3.37,15.78,15.78,0,0,1-1.83-.11,21.41,21.41,0,0,0,11.78,3.54c14.13,0,21.86-12,21.86-22.42,0-.34,0-.68,0-1a15.67,15.67,0,0,0,3.83-4.08,14.9,14.9,0,0,1-4.41,1.24A7.8,7.8,0,0,0,55.2,22.73Z"
                                                  data-name="Twitter" id="Twitter-2"/>
                                        </svg>
                                    </Col>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            })}
        </Row>;
    }

    shuffle(array) {
        let len = array.length;
        for (let i = len - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    };

    componentWillMount() {
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(TeamMember);
