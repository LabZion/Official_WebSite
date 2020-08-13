import React, {Component} from 'react';
import './ContactUs.css';
import Container from "react-bootstrap/Container";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import {FormControl, FormGroup, FormCheck, FormLabel} from "react-bootstrap";
import '../../static/iconfont/iconfont.css'


class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            advisoryType: '业务咨询',
            nameOfGuests: '',
            companyOfGuests: '',
            positionOfGuests: '',
            emailOfGuests: '',
            numberOfGuests: '',
            hearFromWhere: '',
            demand: '',
            isAgreePrivacyPolicy: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.name === 'isAgreePrivacyPolicy' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.isAgreePrivacyPolicy != true) {
            alert('请阅读隐私政策并选择同意。')
        } else {
            const data = new FormData(event.target);
            const xhr = new XMLHttpRequest();
            xhr.open(event.target.method, event.target.action);
            xhr.setRequestHeader("Accept", "application/json");
            xhr.send(data);
            alert("您的信息我们已经收到，我们会尽快联系您，请稍候！")
            window.location = '/contact-us';
        }
    }

    render() {
        return (
            // <iframe id="goldendata_form_jHeRJL"
            //         src="https://jinshuju.net/f/jHeRJL?background=white&banner=show&embedded=true&inner_redirect=false"
            //         width="100%" frameBorder={'0'} allowTransparency={'true'} height={'1124'}></iframe>
            <Container style={{padding: 0}} className="ContactUs">

                <Row style={{background: '#f4f4f4'}}>
                    <br/><br/><br/>
                    <Col md={2}></Col>

                    <Col md={8} style={{paddingTop: '3em'}}>
                        <p style={{textAlign: "center", fontSize: '1.2em'}}>我们真诚地期待您与我们取得联系，洽谈商业合作、应聘职位或留下宝贵的建议。
                        </p>
                        <Row>
                            <Col md={3}></Col>
                            <Col md={7} style={{textAlign: "left"}}>
                                <h3>联系表</h3>
                                <br/>
                                <form onSubmit={this.handleSubmit} action="https://formspree.io/mvowyqyw"
                                      method="POST">
                                    <label style={{display: 'inline-block'}}><b>请选择您要咨询的事项</b></label>
                                    <label style={{color: 'red',}}>*</label>
                                    <FormGroup style={{width: '80%'}}>
                                        <FormControl as="select" required="required" name="advisoryType"
                                                     value={this.state.advisoryType}
                                                     onChange={this.handleInputChange}>
                                            <option>业务咨询</option>
                                            <option>应聘</option>
                                            <option>反馈</option>
                                            <option>其他咨询</option>
                                        </FormControl>
                                    </FormGroup>
                                    <label style={{display: 'inline-block'}}><b>您的姓名</b>
                                    </label>
                                    <label style={{color: 'red',}}>*</label>
                                    <FormGroup validationState="success"
                                               style={{width: '80%'}}>
                                        <FormControl type="text" required="required" name="nameOfGuests"
                                                     value={this.state.nameOfGuests}
                                                     onChange={this.handleInputChange}/>
                                    </FormGroup>
                                    <label style={{display: 'inline-block'}}><b>公司/单位</b></label>
                                    <label style={{color: 'red',}}>*</label>
                                    <FormGroup validationState="success"
                                               style={{width: '80%'}}>
                                        <FormControl type="text" required="required" name="companyOfGuests"
                                                     value={this.state.companyOfGuests}
                                                     onChange={this.handleInputChange}/>
                                    </FormGroup>
                                    <label style={{display: 'inline-block'}}><b>职位</b></label>
                                    <label style={{color: 'red',}}>*</label>
                                    <FormGroup validationState="success"
                                               style={{width: '80%'}}>
                                        <FormControl type="text" required="required" name="positionOfGuests"
                                                     value={this.state.positionOfGuests}
                                                     onChange={this.handleInputChange}/>
                                    </FormGroup>
                                    <label style={{display: 'inline-block'}}><b>邮箱</b></label>
                                    <label style={{color: 'red',}}>*</label>
                                    <FormGroup validationState="success"
                                               style={{width: '80%'}}>
                                        <FormControl type="email" required="required" name="emailOfGuests"
                                                     value={this.state.emailOfGuests}
                                                     onChange={this.handleInputChange}/>
                                    </FormGroup>
                                    <label style={{display: 'inline-block'}}><b>电话</b></label>
                                    <label style={{color: 'red',}}>*</label>
                                    <FormGroup validationState="success"
                                               style={{width: '80%'}}>
                                        <FormControl type="tel" required="required" title='手机号格式不正确'
                                                     pattern="^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$"
                                                     name="numberOfGuests" value={this.state.numberOfGuests}
                                                     onChange={this.handleInputChange}/>
                                    </FormGroup>
                                    <label style={{display: 'inline-block'}}><b>您从哪里了解到我们？</b></label>
                                    <label style={{color: 'red',}}>*</label>
                                    <FormGroup validationState="success"
                                               style={{width: '80%'}}>
                                        <FormControl type="text" required="required" name="hearFromWhere"
                                                     value={this.state.hearFromWhere}
                                                     onChange={this.handleInputChange}/>
                                    </FormGroup>
                                    <label style={{display: 'inline-block'}}><b>您希望获取怎样的帮助</b></label>
                                    <label style={{color: 'red',}}>*</label>
                                    <FormGroup validationState="success"
                                               style={{width: '80%'}}>
                                        <FormControl as="textarea" rows="5" required="required" name="demand"
                                                     value={this.state.demand}
                                                     onChange={this.handleInputChange}/>
                                    </FormGroup>
                                    <div style={{backgroud: '#000000', height: '3em',}}>
                                        <FormCheck style={{display: 'inline-block'}} name="isAgreePrivacyPolicy"
                                                   checked={this.state.isAgreePrivacyPolicy}
                                                   onChange={this.handleInputChange}></FormCheck>
                                        <label>我们尊重您的隐私，并将根据 <a href={'/privacy'} target={'_blank'}>隐私政策 </a>对相应数据进行保密和处理。</label>
                                    </div>
                                    <div>
                                        <input type="submit"  style={{borderRadius:'500px', background:'linear-gradient(#34a5f8, #088ef0)'}} className={'btn-primary  btn-lg'} value="提交"/>
                                    </div>
                                    
                                </form>
                                <br/><br/>
                            </Col>
                        </Row>

                    </Col>
                </Row>
                <br/><br/>
                <Container style={{background: '#000', color: '#fff', padding: 0, margin: 0}}>
                    <Container style={{
                        height: '20em',
                        backgroundSize: '100%',
                        backgroundImage: "url(\"https://dynamic.thoughtworks.com/landing_pages/banner_image_desktop-14dbcce4163dddc934cb7b8da6a173dc.jpeg\")",
                        paddingTop: '2em'
                    }}>
                        <Row>
                            <Col md={2}> </Col>
                            <Col md={8}>
                                <Row style={{display: 'flex', justifyContent: 'center', marginTop: '1.5em'}}><h1
                                    style={{fontSize: '3em'}}>{'联系我们'}</h1></Row>
                                <br/><br/>
                                <Row style={{display: 'flex', justifyContent: 'center', marginTop: '1.5em'}}>
                                    <span style={{float: 'left'}} className="iconfont">&#xe501;</span>&nbsp;
                                    <p>+86 18618426569（业务咨询）</p>
                                    &nbsp;&nbsp;&nbsp;
                                    <span style={{float: 'right'}} className="iconfont">&#xe60c;</span>&nbsp;
                                    <p>security-solution@thoughtworks.com</p>
                                    &nbsp;&nbsp;&nbsp;
                                    <span style={{float: 'right'}} className="iconfont">&#xe503;</span>&nbsp;
                                    <p>北京、上海、西安、成都、武汉、深圳、北美</p>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Container>
        );
    };

    componentWillMount() {
    }

    componentDidMount() {
        window.scrollBy(0, -8000);
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);
