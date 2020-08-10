import React, {Component} from 'react';
import './ContactUs.css';
import Container from "react-bootstrap/Container";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import {FormControl, FormGroup, FormCheck,FormLabel} from "react-bootstrap";
import '../../static/iconfont/iconfont.css'


class ContactUs extends Component {
    render() {
        return (
            <Container style={{padding: 0}} className="ContactUs">

                <Row style={{background: '#f4f4f4'}}>
                    <br/><br/><br/>
                    <Col md={2}></Col>

                    <Col md={8} style={{paddingTop:'3em'}}>
                        <p style={{textAlign: "center", fontSize: '1.6em'}}>请填写下方表格，以便我们将您的咨询发送给相应团队。
                            您可以在此处查看我们的办公地点。</p>
                        <Row>

                            <Col md={2}></Col>
                            <Col md={8} style={{textAlign: "left"}}>
                                <h3>联系表</h3>
                                <br/>
                                <label style={{display: 'inline-block'}}><b>请选择您要咨询的事项</b></label>
                                <label style={{color: 'red',}}>*</label>
                                <FormGroup controlId="exampleForm.ControlSelect1">
                                    <FormControl as="select">
                                        <option>业务咨询</option>
                                        <option>应聘</option>
                                        <option>反馈</option>
                                        <option>其他咨询</option>
                                    </FormControl>
                                </FormGroup>
                                <label style={{display: 'inline-block'}}><b>您的姓名</b></label>
                                <label style={{color: 'red',}}>*</label>
                                <FormGroup controlId="formValidationSuccess1" validationState="success">
                                    <FormControl type="text"/>
                                </FormGroup>
                                <label style={{display: 'inline-block'}}><b>公司/单位</b></label>
                                <label style={{color: 'red',}}>*</label>
                                <FormGroup controlId="formValidationSuccess1" validationState="success">
                                    <FormControl type="text"/>
                                </FormGroup>
                                <label style={{display: 'inline-block'}}><b>职位</b></label>
                                <label style={{color: 'red',}}>*</label>
                                <FormGroup controlId="formValidationSuccess1" validationState="success">
                                    <FormControl type="text"/>
                                </FormGroup>
                                <label style={{display: 'inline-block'}}><b>邮箱</b></label>
                                <label style={{color: 'red',}}>*</label>
                                <FormGroup controlId="formValidationSuccess1" validationState="success">
                                    <FormControl type="text"/>
                                </FormGroup>
                                <label style={{display: 'inline-block'}}><b>电话</b></label>
                                <label style={{color: 'red',}}>*</label>
                                <FormGroup controlId="formValidationSuccess1" validationState="success">
                                    <FormControl type="text"/>
                                </FormGroup>
                                <label style={{display: 'inline-block'}}><b>您从哪里了解到我们？</b></label>
                                <label style={{color: 'red',}}>*</label>
                                <FormGroup controlId="formValidationSuccess1" validationState="success">
                                    <FormControl type="text"/>
                                </FormGroup>
                                <label style={{display: 'inline-block'}}><b>您希望获取怎样的帮助</b></label>
                                <label style={{color: 'red',}}>*</label>
                                <FormGroup controlId="formValidationSuccess1" validationState="success">
                                    <FormControl type="text"/>
                                </FormGroup>
                                <div style={{backgroud: '#000000', height: '3em',}}>
                                    <FormCheck style={{display: 'inline-block'}}></FormCheck>
                                    <label>我们尊重您的隐私，并将根据 <a href={'https://security.thoughtworks.cn/privacy'}>隐私政策 </a>对相应数据进行保密和处理。</label>
                                </div>
                                <input type="submit" className={'btn-info btn-lg '} value="提交"/>
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
                                    <span style={{float:'left'}} className="iconfont">&#xe501;</span>&nbsp;
                                    <p>+86 18618426569（业务咨询）</p>
                                    &nbsp;&nbsp;&nbsp;
                                    <span style={{float:'right'}} className="iconfont">&#xe60c;</span>&nbsp;
                                    <p>security-solution@thoughtworks.com</p>
                                    &nbsp;&nbsp;&nbsp;
                                    <span style={{float:'right'}} className="iconfont">&#xe503;</span>&nbsp;
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
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);
