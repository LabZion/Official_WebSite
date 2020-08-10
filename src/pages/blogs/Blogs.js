import React, {Component} from 'react';
import './Blogs.css';
import Container from "react-bootstrap/Container";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import BreadNav from "../../components/bread_nav/BreadNav";
import {Image, Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";

const blogs = {
    blog: [
        {
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
        },
        {
            img: 'https://raw.githubusercontent.com/CenoOS/Ceno-RTOS/master/docs/assets/arch2.png',
            title: '怎样Hack Linux的内核符号？',
            author: '杨兴峰·ThoughtWorks SynestiaOS开发',
            description: 'Inline Hook技术能够帮助我们完成函数的动态拦截和跳转，但要实现缺陷函数的自动化热修复则会面临更加复杂的挑战。本文从一个实际例子出发，阐述了在对二进制形式的Linux固件做自动化安全加固的时遇到的技术难题和解决办法。',
            content: ''
        },

    ]
};

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
                    pathname: '/blog-detail',
                    state: {params: item}
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
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Blogs);
