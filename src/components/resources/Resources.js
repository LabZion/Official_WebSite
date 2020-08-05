import React, {Component, Fragment} from 'react';
import './Resources.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Image} from "react-bootstrap";

class Resources extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Container style={{ paddingTop: '2em', paddingBottom: '2em'}}>
                    <Row>
                        <Col md={2}></Col>
                        <Col md={8} style={{textAlign: "left"}}>

                            <h2 style={{color: "#000"}}>独特洞见</h2>
                            <Row>
                                <Col md={4} style={{color: "#000", textAlign: "left", padding: "1em"}}>
                                    <Image style={{width: "100%",height:'100%'}} src={"https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/Linux%20Blog1.png"}/>

                                </Col>
                                <Col md={4} style={{color: "#000", textAlign: "left", padding: "1em"}}>
                                    <Image style={{width: "100%",height:'100%'}} src={"https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/SSL%20and%20CA%E8%A7%86%E9%A2%91%E6%88%AA%E5%9B%BE.png"}/>

                                </Col>
                                <Col md={4} style={{color: "#000", textAlign: "left", padding: "1em"}}>
                                    <Image style={{width: "100%",height:'100%'}} src={"https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/Token%E8%87%AA%E9%89%B4%E6%9D%83%E8%A7%86%E9%A2%91%E6%88%AA%E5%9B%BE.png"}/>

                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row style={{background: "#fff"}}>
                        <Col md={2}></Col>
                        <Col md={8}>
                            <Container style={{textAlign: "left", paddingLeft: '2em', paddingBottom: '2em',}}>
                                <Row >
                                    <Col md={4}>
                                        <Container style={{
                                            background: '#fff',
                                            boxShadow: '0 5px 56px 0 rgb(35 30 29 / 12%)',
                                            marginTop: '-2em',
                                            paddingLeft: '2em',
                                            paddingRight:'2em'
                                        }}>
                                            <h4 style={{paddingTop:'2em',paddingBottom:'1em'}}><strong>怎样Hack Linux的内核符号？</strong></h4>
                                            {/*<p>Inline Hook技术能够帮助我们完成函数的动态拦截和跳转，但要实现缺陷函数的自动化热修复则会面临更加复杂的挑战。本文从一个实际例子出发，阐述了在对二进制形式的Linux固件做自动化安全加固的时遇到的技术难题和解决办法。</p>*/}
                                            <Link to={{
                                                pathname: '/blog-detail',
                                                state: {params: {
                                                        img: 'https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/Linux%20Blog1.png',
                                                        title: '怎样Hack Linux的内核符号？',
                                                        author: '刘涛·ThoughtWorks资深咨询师',
                                                        description: 'Inline Hook技术能够帮助我们完成函数的动态拦截和跳转，但要实现缺陷函数的自动化热修复则会面临更加复杂的挑战。本文从一个实际例子出发，阐述了在对二进制形式的Linux固件做自动化安全加固的时遇到的技术难题和解决办法。',
                                                        content: '\n' +
                                                            'Linux内核是不是坚不可摧？答案是NO！尽管内核中存在诸多限制，但你只需要稍微花点心思，也可以想办法突破它们。下面我们将通过一个例子来展示这趟有趣的旅程。  \n' +
                                                            '\n' +
                                                            '首先简单介绍一下项目的背景。客户提供了一批嵌入式智能设备给我们，希望能够检测并且修复其中的安全漏洞。我们能够从设备中接触到二进制形式的固件，但却接触不到固件的源码。对于二进制固件的漏扫和加固是一个行业难题。此外为了减少人工成本，客户还希望我们提供一个自动化的漏扫和加固解决方案，这无疑成为了一件不可能完成的任务。   \n' +
                                                            '\n' +
                                                            '所谓固件，其实就是一个嵌入式操作系统，常见的有定制化的Linux和安卓系统。本质上它们都具有相似的结构：Bootloader、Kernel、根文件系统等。根文件系统中又包含了众多用户态程序、脚本、配置等。对于Kernel的CVE漏洞自动化扫描和修复是我们当前工作的主要内容。而自动化漏扫技术又可单独成文，本文将主要介绍自动化漏洞修复所用到的内核符号Hack技术。  \n' +
                                                            '\n' +
                                                            '所谓内核漏洞，其实就是Linux内核中存在的缺陷函数。所谓漏洞利用，就是在用户态通过一系列精巧的传参和调用，最终触发内核缺陷的过程。这里存在两种修复方式：  \n' +
                                                            '\n' +
                                                            '>1)在触发缺陷的必由调用路径上设卡，做参数或调用关系过滤。比如c函数是缺陷函数，该漏洞触发的调用关系是Func a-> Func b-> Func c，那么可以在a或b函数上做传参检查，一旦参数非法则立刻退出。这种方式的优点是修复过程简单，尤其当c函数调用非常深的时候，可以在表层易于打桩的函数中做传参检查；缺点是需要开发者深入理解漏洞的利用原理，同时不同漏洞的利用方式各不相同，修复方式也各异。  \n' +
                                                            '>\n' +
                                                            '>2)用与c函数功能相同，并且已经打好补丁的c‘函数替换掉c函数。修补时只需要保证每次对c函数的调用都会无条件进入到c’即可。这种方式的优点是修复方法统一，便于自动化，可不必深究不同漏洞的利用原理。  \n' +
                                                            '>\n' +
                                                            '图示展示了方案二技术架构图：中间是Hook框架，提供缺陷函数拦截、函数跳板(Trampoline)、修复函数注册、内核代码区修改等基础功能；右侧是包含具体CVE漏洞修复业务的模块。这里有很多核心问题需要解决，其中之一是修复函数使用未导出内核符号问题。\n' +
                                                            '\n' +
                                                            '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/Linux%20Blog1.png#width-80)  \n' +
                                                            '\n' +
                                                            '我们都知道Linux是宏内核架构(Monolithic Kernel)。为了实现内核功能的动态扩展，Linux又引入了内核模块。内核模块将不可避免的使用内核函数。正常情况下，Linux内核代码会将一些基础功能性函数导出。如控制台输出函数printk等。所有被导出的函数都会通过export_symbols族的宏修饰。最后这些符号会被内核编译到特殊的段中。而针对我们漏洞修复的场景，内核缺陷函数可能存在于内核的任何地方，因此如果仅仅使用内核导出的少量符号，很多缺陷函数或其依赖函数将无法被解析到。  \n' +
                                                            ' \n' +
                                                            '于是我们把目光放到了内核的Kallsyms功能上。这个功能是内核为了方便调试而引入的。当内核发生错误时会输出一系列Stacktrace，后者其实是一系列函数地址。有了Kallsyms，在输出Stacktrace的时候内核可以把地址解析成函数名输出，告诉开发人员错误发生在哪个函数的哪个位置：  \n' +
                                                            '\n' +
                                                            '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/Linux%20blog2.png#width-80)  \n' +
                                                            '\n' +
                                                            '由于内核错误可能发生在任何地方，因此Kallsyms单独保存了一份函数符号和函数地址的对应关系，其中的符号数量远远多于export_symbols宏导出的符号量。即使内核开启了地址随机化(Address Space Layout Randomization)功能，Kallsyms也能在运行时解析到符号正确地址。如果在内核模块中想使用未导出的符号，可以使用Kallsyms提供的kallsyms_lookup_name函数将符号名解析到函数地址，再以函数指针的形式调用即可，如：  \n' +
                                                            '\n' +
                                                            '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/Linux%20Blog3.png#width-80)  \n' +
                                                            '\n' +
                                                            '普通需求到这里就完事了，但是针对客户的特殊场景，稍微思考一下就会发现有很大缺陷。假如修复补丁中一共涉及到了数百个未导出的函数，我们则要在修复代码中把所有使用到这些函数的地方全部修改成函数指针调用的形式，工作量增加了不少。最简单的解决办法是内核加载修复模块时，单独走Kallsyms解析模块符号，而绕过export_symbols这个符号子集（前提是不引入新的内核安全风险)。  \n' +
                                                            '\n' +
                                                            'Linux内核模块的加载过程其实跟可执行程序加载动态链接库的过程是一样的。举个简单例子，在printf(“hello world”)中，我们其实并没有实现printf（由puts函数封装而来）。它实际是由Libc库实现。当我们运行HelloWorld程序的时候，操作系统会解析程序符号，载入依赖的动态链接库(每次加载的基址可能不同)，计算重定位符号地址，并把地址填回HelloWorld程序中。我们可以通过下图过程来验证：  \n' +
                                                            '\n' +
                                                            '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/Linux%20Blog4.png#width-80)  \n' +
                                                            '\n' +
                                                            '对于Linux内核模块而言，它本质上也是动态链接库，因此加载模块时必然存在解析符号地址的函数。于是我们的思路是，动态拦截该函数，重定向到我们的替换函数中，并在替换函数中添加Kallsyms查找符号地址的逻辑即可：左图为我们的替换函数，右图为内核原始函数。这样达到的效果是，我们可以在CVE修复代码中直接使用诸如d_absolute_path这样的未导出函数，而不用做任何函数指针形式的改造，便于漏洞修复过程的自动化。  \n' +
                                                            '\n' +
                                                            '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/Linux%20Blog5.png#width-80)  \n' +
                                                            '\n' +
                                                            '可能会有同学感兴趣我们是如何实现内核函数拦截的，即如何从find_symbol_in_section跳转到hook_find_symbol_in_section，这里以ARM64架构CPU为例简单说明。我们在内核的find_symbol_in_section函数开头插入了下图所示的汇编指令（以二进制形式修改内核代码区）。这里借用了x0寄存器作远距离跳转（从内核跳转到内核模块）。由于无条件跳转不应该产生任何副作用（即栈帧和寄存器不能改变），因此我们需要先保存x0的值到栈上，远跳转后再恢复x0内容。\n' +
                                                            ' ldr指令从.addr(low)和.addr(high)中把跳板函数地址装载进x0，注意到ARM64的地址长度为64位，而ARM64的指令长度为32位，因此跳板函数地址被折成低32位和高32位。进入跳板函数后先恢复x0寄存器值，再做近距离跳转（内核模块内部跳转），注意前图hook_find_symbol_in_section函数末尾有一行HOOK_FUNC_TEMPLATE(find_symbol_in_section)，即为宏定义的find_symbol_in_section的跳板函数。这样经过连续无条件跳转后，执行流被拦截到我们的HOOK函数中。  \n' +
                                                            ' \n' +
                                                            '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/Linux%20Blog6.png#width-80)  \n' +
                                                            '\n' +
                                                            '此外顺便多提一下，上述使用Inline Hook技术的拦截方式跟CPU架构是强相关的，如果想实现ARM32或x86架构的函数拦截，则需要分别单独实现。\n' +
                                                            ' \n' +
                                                            '\n'
                                                    },}
                                            }}><p>Learn more.</p></Link>
                                        </Container>
                                    </Col>
                                    <Col md={4} style={{paddingLeft:'2em'}}>
                                        <Container style={{
                                            width:'105%',
                                            background: '#fff',
                                            boxShadow: '0 5px 56px 0 rgb(35 30 29 / 12%)',
                                            marginTop: '-2em',
                                            paddingLeft: '2em',
                                            paddingRight:'2em'
                                        }}>
                                            <h4 style={{paddingTop:'2em',paddingBottom:'1em'}}><strong>聊聊SSL/TLS和CA那些事？</strong></h4>
                                            {/*<p>想要了解对称与非对称加密的区别吗？还有SSL以及证书的作用吗？想知道如何自己给自己签发一个HTTPS证书吗？那就快点进来吧！     </p><br/><br/><br/>*/}
                                            <Link to={{
                                                pathname: '/event-detail',
                                                state: {params: {
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
                                                    },}
                                            }}><p>Learn more.</p></Link>
                                        </Container>
                                    </Col>
                                    <Col md={4} style={{paddingLeft:'3em'}}>
                                        <div style={{
                                            width:'105%',
                                            background: '#fff',
                                            boxShadow: '0 5px 56px 0 rgb(35 30 29 / 12%)',
                                            marginTop: '-2em',
                                            paddingLeft: '2em',
                                            paddingRight:'2em'
                                        }}>
                                            <h4 style={{paddingTop:'2em',paddingBottom:'1em'}}><strong>关于Token自鉴权的一些猜想</strong></h4>
                                            {/*<p>带你了解什么是JWT，以及什么是Token base JWT，解读session based authentication 与 token based authentication.</p><br/><br/><br/>*/}
                                            <Link to={{
                                                pathname: '/event-detail',
                                                state: {params: {
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
                                                    }}
                                            }}><p>Learn more.</p></Link>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }


    componentWillReceiveProps(nextProps) {
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Resources);
