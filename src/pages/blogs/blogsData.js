export const blogs = {
    blog: [
        {
            img: 'https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/Linux%20Blog1.png',
            title: '怎样Hack Linux的内核符号？\n',
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
            img: 'https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blog-rtos.png',
            title: '来自Security的操作系统故事一：一个RTOS的设计与实现',
            author: 'NeoYang·SynestiaOS Team Member',
            description: '在嵌入式应用领域，很多场合对系统的实时性要求严格，因此操作系统的选择要基于实时系统,实时多任务操作系统,英文全称Real Time Operating System，简称RTOS。本文详细介绍了一个RTOS的设计与实现。',
            content: '## 写在前面\n' +
                '\n' +
                '近年来，互联网技术的发展，改变着电子设备、智能终端的形态、功能。嵌入式设备网络化、功能复杂化的趋势，以及嵌入式碎片化及其严重，各种个样的芯片型号，想要适配同样的代码在裸机环境下适配不同的硬件难度非常大。这也就会导致逻辑代码会过多依赖于底层软件。使得越来越多的、过去可以用裸奔实现的嵌入式产品，产生了应用操作系统的需求。芯片成本的连续下降，以及MCU性能和内存资源的迅速提高，又为大面积应用操作系统提供了物质基础。回顾裸机时代的开发，问题也渐渐显现出来。\n' +
                '\n' +
                '在嵌入式应用领域，很多场合对系统的实时性要求严格，因此操作系统的选择要基于实时系统。实时多任务操作系统(Real Time Operating System，简称RTOS)。\n' +
                '\n' +
                'RTOS系统强调实时性、短时间内响应，满足物联网高速、实时、可确定性、可靠性等诸多优势，同时也是实时商用多任务os，追求系统资料的最大利用率，未来前途广阔；RTOS代码量少，是编写管理代码的最佳系统。相比通用linux系统，就包含调度、文件、网络、驱动等完整代码，而RTOS仅包含调度、同步、互斥、时钟等代码，并能根据应用需求实际增加，大大减少编写和管理工作量。\n' +
                '\n' +
                '### 业内现状\n' +
                '\n' +
                '得益于IOT的发展,诞生了许多优秀的IOT应用,比如WeCare...这些应用都运行于RTOS之上,也随着工业的发展,RTOS也广泛应用与航天工业,船舶工业等领域,国外目前比较有名的有ucos和FreeRTOS,国内目前商用的RTOS为数不多，华为于2015年华为网络大会发布了敏捷网络3.0中的一个轻量级物联网操作系统LiteOS，和业内众所周知的由阿里开发的AliOS-Things。以及最近发展迅速的RT-Thread。它不仅仅是一个单一的实时操作系统内核，也是一个完整的应用系统，包含了实时、嵌入式系统相关的各个组件：TCP/IP协议栈，文件系统，libc接口，图形用户界面等。\n' +
                '\n' +
                '### 主要目的\n' +
                '\n' +
                'RTOS可应用于任务复杂的场合，随着物联网的发展，未来的嵌入式产品必然向着更为复杂、连接性更强以及需要更丰富的用户界面，因此，一个好的RTOS变得不可或缺；本文旨在细述一个运行于CortexM上的RTOS实现的细节和过程,为实时内核爱好者与RTOS爱好者带来思考。\n' +
                '\n' +
                '## 启动\n  ' +
                '' +
                '\n' +
                '\n' +
                '### 中断向量表\n' +
                '\n' +
                '我们从中断向量表(既中断服务程序入口地址)开始，当中断或异常发生的时候，CPU自动将PC指向一个特定的地址，这个地址就是中断向量表。 Arm的中断向量表一般位于内存0x00000000-0x0000001C处， 结构如表:![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos1.png#width-full)\n' +
                '\n' +
                '***\n' +
                '\n' +
                '内存中的第一个4字节用来初始化Main Stack Pointer(MSP)， 第二个4字节是指向reset handler函数的指针， 是起始地址， 或者被称为reset handler 函数的入口点， 用来初始化Program Counter(PC)。\n' +
                '\n' +
                '### 引导\n' +
                '\n' +
                '当处理器启动时首先读取两个引脚，包括引脚boot0和引脚boot1，如表:\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos2.png#width-full)\n' +
                '\n' +
                '处理器根据这两个引脚确定引导模式。然后，处理器将存储在地址0x00000000的值复制到Main Stack Pointer(MSP)，这一步基本上完成了Main Stack Pointer(MSP) 的初始化。接着处理器将存储在地址0x00000004的值复制到Program Counter(PC)。程序计数器始终保存下一个要由处理器执行的操作的内存地址，因此，在处理器启动后，处理器将立即开始执行reset handler。通常，reset handler首先执行一些硬件初始化，例如数据段和BSS段的初始化， 然后reset handler调用main()函数将控件传递给main函数。\n' +
                '\n' +
                '大多数Cortex-M处理器支持至少三种不同的引导模式，处理器可以从片内存储器，系统存储器或片内SRAM启动。存储在系统存储器中的代码称为引导加载程序(bootloader)，引导加载程序(bootloader)通常由芯片制造商提供。引导加载程序(bootloader)可以升级内部闪存内的固件。所有STM32微处理器在只读存储器区域(ROM)中都带有预编程的引导加载程序(bootloader)，该ROM区域称为系统存储器。\n' +
                '\n' +
                '但是，有时需要开发自定义引导加载程序(bootloader)，例如:需要加密固件并将其放在Internet上，以便客户可以升级固件。在这种情况下，必须编写自定义引导加载程序(bootloader)来解码加密的固件。下表是Arm Cortex-M处理器的内存映射:\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos3.png#width-full)\n' +
                '\n' +
                '每个存储区的地址范围是固定的。接下来看一下代码区域:\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos4.png#width-full)\n' +
                '\n' +
                '代码区域的范围是0x00000000到0x1FFFFFFF。顶部区域(0x1FFF0000-0x1FFFFFFF)是保留用于存储引导加载程序的ROM区域。中间区域是片内闪存。底部区域是可以物理映射到内部闪存，系统内存的区域。可以物理映射到内部闪存，系统内存和内部SRAM的区域。内部闪存，系统存储器和内部SRAM的起始地址也是固定的。具体来说，内部闪存的起始地址为0x08000000，系统内存的地址从0x1FFF0000开始。现在，我们回头再看一下引导模式。引导模式由引脚boot1和引脚boot0上的电压决定。\n' +
                '\n' +
                '1. 如果引脚boot0接地，则处理器将从内部闪存引导。如果引脚boot0接地，处理器将物理映射内部闪存到底部区域。例如，内存地址0x08000000将物理映射到地址0x00000000。换句话说，闪存内容可以从地址0x00000000或0x08000000访问。所以，当处理器启动时，它总是从内存地址0x00000000和0x00000004分别获取栈指针(SP)和程序计数器(PC)的值。因为内部闪存已经被物理映射到了起始地址0x00000000，所以实际上闪存就是是启动内存。\n' +
                '2. 当引脚boot1为低电平且引脚引导0为高电平时，系统存储器将物理映射到底部区域。当处理器从内存地址0x00000004获取程序计数器(PC)的值时，处理器实际上是从系统存储器中获取值。也就是说，系统存储器被选为引导存储器。在此启动模式下，处理器可以重新编程闪存或执行设备固件升级。\n' +
                '3. 当引脚boot1和引脚boot0都为高电平时，内部SRAM物理映射到底部区域，内存地址0x20000000物理映射到内存地址0x00000000因此处理器从SRAM引导。\n' +
                '\n' +
                '简单一点总结就是 arm 处理器从哪儿引导由pcb设计说了算，然后根据boot0/1两个针脚的电压决定把内存的哪块映射到0地址区域。然后处理器取4地址的值放到pc寄存器开始运行。\n' +
                '\n' +
                '### 启动代码\n' +
                '\n' +
                '那么，我们从开发者的角度看一下Start Up是如何做到的，以及如何将启动代码放到目标引导内存中:\n' +
                '\n' +
                '当链接器(Linker)将对象和库文件组合成单个可执行文件时，链接器脚本(Linker Script)提供两种关键类型的操作，如何对数据和代码段进行操作以及每个部分应放在内存中的位置进行操作。编程人员可以修改链接描述文件(Linker Script)以将代码放在目标引导内存中。例如这个项目中的链接描述文件:\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos5.png#width-full)\n' +
                '\n' +
                '\n' +
                '\n' +
                '从上面的描述文件可以看到代码段，数据段再内存里面的位置。\n' +
                '\n' +
                '然后，我们再看一下如何将值(Main Stack Pointer(SP)和Program Counter(PC))存在内存0x00000000地址和0x00000004地址，也就是启动代码，比如启动汇编文件中放置了这几个值，例如:\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos6.png#width-full)\n' +
                '\n' +
                '代码中__initial_sp便是Stack Pointer(SP)，Reset_Handler便是Program Counter(PC)的初始值。\n' +
                '\n' +
                '## 中断\n' +
                '\n' +
                '接下来我们看一下中断是如何在Arm Cortex-M微处理器上工作的，以及为什么需要中断，假设我们需要开发一个程序，按下按钮打开红色LED灯，有两种方法可以监视连接到按钮的输入引脚的逻辑状态，一种是轮询，另一种是中断，轮询方法就像是每隔几秒接起电话来查看是不是有电话打进来，中断方法就像等待电话铃响，显而易见，中断方法更高效。可以做任何事情，直到电话响了再把它接起来。下面是简化了的轮询代码:\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos7.png#width-full)\n' +
                '\n' +
                '在这个循环中，程序不断读取连接到按钮的引脚，直到按键被按下，程序跳出循环，打开LED灯。轮询方法是一种忙等待的方法，处理器不停地读取输入直到按钮被按下，显然，轮询方法很简单但是低效。中断方法比轮询更高效，如果用户按下按钮，则产生称为中断请求的电信号，当处理器收到中断请求时，它会自动暂停正常程序的执行，并开始执行一个称为中断处理程序的特殊定义函数。在中断处理程序完成后，处理器从暂停的地方重新启动执行常规程序。\n' +
                '\n' +
                '然后我们回头看一下Cortex-M4的内存映射，以及代码区和中断向量表，中断向量表保存一个存储器地址数组，中断表中的每个条目长度为4个字节，每个条目包含一个中断服务程序的起始地址，简单地说，中断表包含一个函数指针数组。为每个中断类型分配一个编号，称为中断号。 中断号用于索引中断向量表， 当触发中断x时，NVIC(Nested Vectored Interrupt Controller)使用中断号x作为索引值来查找中断x的相应中断服务程序的地址，并强制处理器跳转并执行该中断服务程序。\n' +
                '\n' +
                '那么，NVIC(Nested Vectored Interrupt Controller)控制器如何使用中断号来查找中断向量表。 正如表:\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos8.png#width-full)\n' +
                '\n' +
                '可以知道第一个四子节是MSP，第二个四字节是PC，对于ARM Cortex-M处理器，如果中断号为n，则指向中断n的中断服务程序的指针存储在中断向量表中的如下地址处:\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos9.png#width-full)\n' +
                '\n' +
                '例如对于中断 `EXTI3_IRQn=9`，他的中断服务程序地址便存在地址\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos10.png#width-full)\n' +
                '\n' +
                '这段描述放在内存里面便是:\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos11.png#width-full)\n' +
                '\n' +
                '值得注意的是，中断号可以是负的，比如SysTick的中断号是-1，$SysTick_IRQn = -1$，他的中断服务程序地址便存在地址\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos12.png#width-full)\n' +
                '\n' +
                '也就是说0x00000004到0x0000003C位置所存的中断服务函数地址所对应的中断服务函数的中断号都是负的，这十五个中断也叫做SystemExceptions。再往后就是厂商特定的中断服务，中断向量表的大小，在不同处理器芯片之间有差异。\n' +
                '\n' +
                '然后我们通过一个例子在看一下NVIC(Nested Vectored Interrupt Controller)是如何处理中断的，假设外部中断3(EXTI3)在这时到达，以及软件已经使能(Enable)了EXTI3中断，通过将中断允许寄存器中的相应位置1就可以使能中断，我们在前面定义了EXTI3的中断号是9，从中断使能寄存器看，外部中断3已经使能。中断优先级寄存器显示外部中断3的优先级设置为2。如表:\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos13.png#width-full)\n' +
                '\n' +
                'NVIC(Nested Vectored Interrupt Controller)首先将1写入外部中断3的挂起位。然后NVIC(Nested Vectored Interrupt Controller)开始压栈过程，并压入8个寄存器来保护运行环境，如果使用了浮点单元(FPU)，那么更多的寄存器会在压栈(push)过程中压入。NVIC(Nested Vectored Interrupt Controller)首先将程序状态寄存器(xPSR)压栈，然后将程序计数器(Program Counter(PC))即r15压栈，然后将Link寄存器(LR)即r14压栈，然后是r12，r3，r2，r1，最后压入r0。需要注意的是Arm Cortex使用下降的栈。如表\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos14.png#width-full)\n' +
                '\n' +
                '如果将32位推入栈，则栈指针(SP)将减少4，NVIC(Nested Vectored Interrupt Controller)将这八个寄存器压栈之后，栈大小会增加32字节，并且栈指针(SP)会减32。上面的压栈过程是由NVIC 控制器自动操作的，而不是用户代码。然后NVIC查找中断向量表找到外部中断3(中断号9)的起始地址，接着NVIC控制器将中断9的状态由挂起状态(pending)改为活动状态(active)。\n' +
                '\n' +
                '完了之后，NVIC强制处理器跳转到中断处理程序，并开始执行终端处理程序。中断服务程序通过执行~BX LR来完成他的运行，指令BX LR告诉NVIC控制器执行出栈操作。同时，中断活动寄存器(active register)的活动位(active bit)会被清零。出栈操作会把那8个寄存器从栈中弹出(pop)，因此，NVIC恢复处理器状态或者叫做运行环境到中断开始前的状态。\n' +
                '\n' +
                '然后再看一下出栈操作，首先NVIC弹出r0，然后是r1，r2，r3，r12，LR，PC，最后弹出程序状态寄存器xPSR。出栈操作完成之后，运行环境也就从栈中被恢复了。所有寄存器都有其原始值，就好像中断从未发生过一样。作为结果，处理器成功继续执行被外部中断3中断的用户程序。\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos15.png#width-full)\n' +
                '\n' +
                '再看一下NVIC如何处理多中断，假设外部中断EXTI_3(中断号9)此时到达，NVIC首先将那八个寄存器压栈，然后让处理器执行中断9(EXTI_3)的处理程序，假设另一个中断请求(DMA1_Channel2)在中断9处理程序结束之后到达，此外，这个新的中断比当前的服务的中断具有更高的紧迫性，从上面的表可以看到，(DMA1_Channel2) 的优先级是3，而(EXTI_3)的是5，需要注意的是对于Arm Cortex 处理器，更低的优先级值实际上代表更高的紧迫性，于是，NVIC不得不响应这个新的中断，因为新的中断有更高的紧迫性，然后NVIC停止当前的中断服务程序，执行另一个压栈过程，再一次，它把另外8个寄存器放到栈里，如表\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos16.png#width-full)\n' +
                '\n' +
                '需要注意的是两个寄存器集合有不同的值，前面的是用户程序的寄存器值，后面的是中断9(EXTI_3)的处理程序的寄存器值，压栈过程完成之后NVIC开始执行新中断的中断处理程序，也就是说停止当前中断去处理另一个中断，这个过程也叫做中断抢占(interrupt preemption)。\n' +
                '\n' +
                '中断12(DMA1_Channel2)的中断处理函数完成之后，NVIC又执行出栈过程，从栈里弹出(pop)八个寄存器，恢复中断9(EXTI_3)的中断服务程序的运行环境，然后NVIC继续执行中断9(EXTI_3)的服务程序，中断9(EXTI_3)的服务程序执行完成之后，NVIC执行继续执行出栈操作，将中断9(EXTI_3)的八个寄存器出栈，恢复用户程序的运行环境，用户程序恢复执行。如果一个比当前中断由更低紧迫性的中断请求到达，NVIC并不会中断当前的中断处理函数，而是让它处于挂起状态，继续当前的中断处理函数，直到当前的中断处理函数执行完成之后，再执行出栈，压栈过程再执行这个更低紧迫性的中断的中断处理函数，那么这个过程中出栈压栈的过程是不需要的，因为都是用户程序的寄存器。因此，Arm Cortex-M部署了一种称为末尾连锁(Tail-Chaining)的优化技术，以减少中断延迟。通常，出栈过程和压栈过程都需要12个时钟周期(cycle)，但是末尾连锁(Tail-Chaining)省略了出栈压栈过程之后只需要6个时钟周期。\n' +
                '\n' +
                '### SysTick\n' +
                '\n' +
                '系统计时器(System Timer)，也称为System Tick或SysTick，用于固定的时间间隔生成SysTick中断。首先，系统计时器可以测量经过的时间，所以软件可以使用系统计时器来实现延时功能，其次我们可以利用它实现定期执行一些特殊的任务，例如我们可以使用系统计时器定期轮询来检查外围设备状态或者定期读取外部输入，另外，操作系统依靠系统计时器来实现CPU调度以支持多任务处理和提高CPU利用率，CPU调度器定期的从准备队列里面选取一个新的进程来作为下一个执行的进程。\n' +
                '\n' +
                '系统计时器是ARM Cortex处理器内置的标准硬件组件，几乎所有的ARM Cortex处理器都具有系统计时器组件，如果使能，他可以定期产生SysTick中断请求，NVIC会监控并处理所有的中断请求根据它们的优先级，对于SysTick中断，NVIC强制处理器执行中断服务程序SysTick_Handler()。\n' +
                '\n' +
                '系统计时器是一个24位递减计数器，计数器从重载值递减到0，计数器递减到0后，系统计时器会复制存储在重载值寄存器里面的值，然后系统计时器再次开始倒计时，当计数器从1转换为0的时候会产生SysTick中断请求，那么SysTick中断的间隔便是:\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos17.png#width-full)\n' +
                '\n' +
                '然后我们看一下SysTick控制和状态寄存器(SysTick_CTRL)，在该寄存器中只有4位是有用的，一个状态位和3个控制位，状态位(16位)是计数器标志位(COUNTFLAG)，三个控制位分别是时钟源选择位(Clock Source)，SysTick中断使能位(TICKINT)和定时器使能位(ENABLE)。正如前面所述，24位计时器从重载值向下降至0，当计数器从1降到0时，计数标志位(COUNTFLAG)设为1，\n' +
                '\n' +
                '系统计时器由四个寄存器控制，包括控制和状态寄存器，重载值寄存器(SysTick_LOAD)，当前值寄存器(SysTick_VAL)和校准寄存器(SysTick_CALIB)，重载寄存器有32位，前八位不使用，他可以保存24位值，最大值为0xFFFFFF，即16777215，计数器从重载值向下计数到0，将0写入重载值寄存器可以禁用SysTick，与TICKINT无关。两个连续的SysTick中断的间隔是重载值加1的时钟源周期倍，例如两个连续的SysTick中断之间需要100个时钟周期，那么重载值就应该是99。\n' +
                '\n' +
                '当前值也是前八位不用，读取该寄存器的值可以得到当前的计数器的值，当当前值从1变成0的时候会产生SysTick中断，写入SysTick_VAL会将计数器和COUNTFLAG清零，使计数器在下一个定时器时钟重新加载，但是不会触发SysTick中断，需要注意的是，它在复位时有随机值。因此，软件应该始终在初始化的时候将它清零，可以通过将0写入当前值寄存器实现。\n' +
                '\n' +
                '然后看一下初始化并启用系统计时器的代码:\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos18.png#width-full)\n' +
                '\n' +
                '关于SysTick还需要知道的是重载值的计算，假设驱动定时器计数器的时钟源的频率为80MHz，我们希望每隔10ms产生一次SysTick中断，那么重载值就是:\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos19.png#width-full)\n' +
                '\n' +
                '## 系统实现\n' +
                '\n' +
                '首先需要澄清一点，本文旨在细述RTOS实现的每一个细节和过程，我所说的RTOS特指一个RTOS的实时内核组件，负责多任务处理，具体并不是指:硬件抽象层(HAL)，设备驱动程序，文件系统，网络或者其他有时候也归于RTOS的组件。开发平台为TivaC-LaunchPadGXL123 (ARM Cortex-M4 MCU TM4C123GH6PM)。我们在裸机程序的时候都知道，我们的程序一般都是写在一个死循环里，让CPU不停的执行那个循环，整个程序采用顺序结构，或者就是事件驱动，通过case事件来执行对应的代码，本质是一个大的状态机，所有应用逻辑全部写在死循环里，如果功能稍微复杂一点，结果可想而知，完全无法维护，其次对于一些延时功能，调用delay函数，一旦程序内的一个功能使用delay，就得考虑会不会影响其他功能。开发与维护难度可想而知，所有的功能逻辑几乎都是串行起来工作的，这个时候 CPU 就会有很多时间都浪费在了延时函数里，一直在空转，导致软件的并发效率非常差。\n' +
                '\n' +
                '我们都知道每个任务是一个函数，每个函数里面是一个死循环，如下:\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos20.png#width-full)\n' +
                '\n' +
                '事实证明，在顺序结构下面，不可能简单的一个接一个的调用这些函数，因为大码不可能执行出第一个函数，也就是说后面的函数不可能被执行，我们的目的就是探索这种执行的可能性，也就是多任务处理。\n' +
                '\n' +
                '### 多任务与线程切换\n' +
                '\n' +
                '我们在前一章说到SysTick中断应用场景的时候说到过操作系统依靠系统计时器来实现CPU调度以支持多任务处理和提高CPU利用率，CPU调度器定期的从准备队列里面选取一个新的进程来作为下一个执行的进程。 以及在NVIC处理中断服务程序的时候关于用户程序运行现场的保存和恢复，详细的讲述了，中断的机制，尤其是中断发生的时候，NVIC如何将用户程序压栈(Stacking)，以及中断服务程序结束之后，出栈的过程，即压入8个寄存器(xPSR，PC，LR，r12，r3，r2，r1，r0)来保护现场，等中断服务程序结束之后， NVIC依次弹出r0，r1，r2，r3，LR，PC，xPSR。然后处理器继续从PC执行，那也就说我们在SysTick中断结束的地方打个断点，然后中断结束之后手动将栈中PC的值修改为另一个函数的地址，就可以实现让CPU去处理另一个函数，那么重复该过程，就可以让CPU在多个任务之间跳转，这个方法说明在执行多个后台循环之间切换CPU是有可能的，也指出了这种CPU上下文切换的一般机制，即利用终端处理器中已有的中断处理硬件。同样也说明了单个CPU上进行多任务处理的一般概念，即在不同的后台循环之间切换CPU，当然这种方法是非法的，原因会在后面解释。\n' +
                '\n' +
                'RTOS内核的简单定义是:通过允许在单个CPU上运行多个后台循环(称为线程或任务)来扩展基本前台/后台架构的软件。对于多进程或者多线程的理解大致是这样，频繁地将CPU上下文从一个线程切换到另一个线程，以创建一个每个这样的线程都拥有整个CPU错觉。这两个定义都使用了术语“线程”，但是需要记住的是，这些线程本质上是来自前/后架构的后台循环。如图:\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos21.png#width-full)\n' +
                '\n' +
                '现在我们回过头来解释为什么更改栈上的PC寄存器值是非法的，以及怎样做才能将上下文从一个线程干净的切换到另一个线程。为了说明这个问题，可以举一个例子，假设我们有两个任务，CPU先运行任务1，在常规中断抢占的情况下，NVIC可以保存任务1的寄存器并恢复相同任务1的寄存器，一切正常，但是手动修改返回地址位任务2时，CPU可以返回到任务2，但是仍然恢复当初为任务1保存的寄存器，这是非法的。\n' +
                '\n' +
                '所以，需要将不同线程的寄存器集分来，换句话说，为任务1保存的寄存器无法恢复为任务2，反之亦然。这意味着需要为每个线程使用私有的堆栈，似乎很复杂，实际上并非如此。我们可以很容易的将一个堆栈添加到一个线程，因为它实际上只不过是RAM中的一个区域和一个指向该堆栈当前顶部的指针。在C语言中，这样的存储区可以表示为uint32_t类型的数组(对于CPU的23位寄存器)加上堆栈指针。\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos22.png#width-full)\n' +
                '\n' +
                '这样的话在主程序中就不需要再调用线程函数，相反，需要使用伪造的Cortex-M中断堆栈帧预填充每个线程的堆栈。目的是使堆栈看起来像在调用线程函数之前被中断抢占一样，因此，需要使用DataSheet中ARM异常帧布局作为模版。\n' +
                '\n' +
                '从堆栈的高内存地址端开始，因为ARM堆栈从高内存地址增长到低内存地址，此外需要注意的是ARM CPU要求ISR堆栈帧需要8字节对齐，最后ARM CPU使用“Full-Stack”，这意味着堆栈指针指向最后使用的堆栈条目，而不是第一个空闲条目。因此，要添加新的堆栈条目，首先将堆栈指针递减到第一个空闲位置，然后取消引用它以将值写入此位置。根据ARM异常帧布局，需要填充的第一个值是程序状态xPSR，这个只需要设置第24位就可以，该位对应ARM 的THUMB状态，表示ARM CPU使用THUMB指令集，实际上ARM 只支持THUMB指令集。由于历史原因，xPSR寄存器必须设置THUMB位。 即\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos23.png#width-full)\n' +
                '\n' +
                '堆栈上的下一个值是PC(Program Counter)，这是中断的返回地址，它需要设置为线程函数说的地址。 C语言允许使用与获取变量地址完全相同的&运算符来获取函数的地址，它使用函数的address-of运算符来生成一个指向函数的指针，然后需要将它强制类型转换为uint32_t。\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos24.png#width-full)\n' +
                '\n' +
                'ISR堆栈帧中的其他寄存器对于正确调用线程函数并不重要，因为县城不会返回，但是处于测试目的，可以使用寄存器编号对应的数字初始化堆栈，这有助于识别调试器中的堆栈帧。\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos25.png#width-full)\n' +
                '\n' +
                '那么现在在SysTick结束时设置断点，将CPU SP寄存器的值修改为sp_stack_task_01就可以将CPU堆栈切换为私有task_01堆栈。要想将上下文切换为其他的线程，可以重复上述步骤。假设需要将上下文切换为另一个线程task_02。需要在更改CPU中的SP寄存器之前，将SP的值从CPU复制到sp_stack_task_01堆栈指针变量中，因为这实际上是task_01线程的当前堆栈顶部，因此需要更新堆栈指针切断这个线程，\n' +
                '\n' +
                ' 然后用task_02线程的堆栈顶部覆盖CPU SP寄存器来执行。如图:\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos26.png#width-full)\n' +
                '\n' +
                '上面说明了为每个线程使用单独的私有堆栈的上下文切换的新方法，这种方法不再使用混合寄存器，相反，task_01线程的寄存器存储在sp_stack_task_01堆栈中，随后从相同的sp_stack_task_01堆栈恢复。 所有这些看起来很有希望作为线程上下文切换的方式，但是，我们还没有完全走出困境。剩下的问题是这种上下文切换仍然会破坏某些CPU寄存器，因为在恢复给定线程之前，CPU状态未正确恢复。\n' +
                '\n' +
                'Cortex-M异常堆栈帧对用于ARM应用程序过程调用标准(AAPCS)，因为它储存允许被函数调用破坏的寄存器，但是不存储R4-R11，所以必须通过函数调用保存。这适合在中断服务程序(ISR)中完成，因为ISR必须在返回到抢占点之前运行完成，\n' +
                '\n' +
                '假如task_01线程使用了R7寄存器，它并不会保存在Cortex-M ISR堆栈帧中。这时候ISR也可以使用R7， 但是他必须保存并在返回之前恢复，也就是说如果ISR是线程在被抢占之后唯一执行的代码，它就能正常工作。但是在我们这种情况下，task_01线程被抢占后不是返回到task_01线程，而是返回到另一个程:task_02，线程task_02也可以使用R7寄存器，因为AAPCS也有义务在返回时恢复R7。但是如果没有执行整个线程函数，而只是执行了一部分的话，这段代码不需要符合AAPCS，它可以更改R7的值，结果是，当task_01恢复执行时，R7寄存器可能已经被破坏，这是一个问题，当然，对于其他寄存器R4-R11都存在这种情况。解决方案是在ISR结束时，即将上下文切换之前，将剩余的8个寄存器R4\\textasciitilde R11保存在线程堆栈上，然后在ISR返回到此线程之前从线程堆栈中恢复这些寄存器。\n' +
                '\n' +
                '不妙的是，这额外的8个寄存器会给目前为止所做的手动上下文切换增加不少繁琐的工作，首先，需要将附加寄存器R4- R11附加到所有线程的堆栈帧中，其次，在保存当线程上下文时，需要在当前ISR堆栈顶部保存额外的8个寄存器，此外，需要从SP中减去0x20来调整SP CPU寄存器的值，然后将其保存在线程的堆栈指针中。然后在恢复下一个线程时，需要将附加寄存器R11- R4从线程堆栈恢复到CPU寄存器， 最后，在将线程堆栈指针写入CPU SP寄存器之前，需要给线程堆栈指针加0x20。\n' +
                '\n' +
                '### 线程初始化\n' +
                '\n' +
                '从前面的手动切换线程的过程中可以看到，每一个线程都需要私有堆栈指针SP，以及其他信息， 为了方便对它们进行管理，以及方便在后续扩展，我们定一个结构os_task来保存它们，在标准RTOS实现中，与线程相关的数据结构传统意义上称为线程控制快(TCB)，TCB中的信息大体分为两类:一类是线程的私有数据，包括PC(Program Counter)，SP(Statk Pointer)，其他寄存器(Context)如LR，R0-R3，R4-R7。第二类是这些TCB使用的其他数据例如，调度队列，锁，等待列表等。在我们的TCB里面，暂时需要线程启动函数，线程启动函数需要私有堆栈的内存和该堆栈的大小，以及线程在等待时需要放弃CPU，所以还需要timeout。调度时候的优先级priority。线程状态state，线程id等，\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos27.png#width-full)\n' +
                '\n' +
                '对于线程启动函数taskHandler的，可以使用C语言里面指向函数的指针，在这里它是一个指向不带参数，并返回os_err_t的函数的指针，定义如下:\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos28.png#width-full)\n' +
                '\n' +
                '接下来需要定义RTOS API，首先需要定义的第一个API是在每个线程的堆栈上构造寄存器上下文的函数， 传统上，这种RTOS服务称之为线程创建或者线程启动，我们使用os_task_开始，这个函数需要以下参数:一个指向TCB的指针，可以将这个参数命名为me，这可以作为一个编码约定。\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos29.png#width-full)\n' +
                '\n' +
                '在这个函数中，需要建立初始堆栈指针，从中构建堆栈帧，正如前面提到，在Cortex-M上，堆栈从高地址向低地址增长，所以需要从堆栈内存的末尾开始，前面还提到，Cortex-M堆栈需要在8字节边界对齐，显然调用函数的用户可能并不会知道这些，所以假设所提供的堆栈内存的末位是正确对齐是不明智的。我们可以通过舍入地址来确保正确对齐，即除以8，然后整数乘以8。\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos30.png#width-full)\n' +
                '\n' +
                '然后用上一小节中同样的方式填充堆栈帧，并将SP寄存器的值赋值为taskHandler，除此之外，可以填充额外寄存器R11- R4，最后在TCB中保存栈顶指针。此外，还可以添加一点额外的功能，比如用已知的位模式填充剩余的堆栈，例如使用0xDEADBEEF，这将使得很容易就能从内存中查看堆栈。方便调试。\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos31.png#width-full)\n' +
                '\n' +
                '### 中断优先级与中断触发\n' +
                '\n' +
                '初始化完了线程，那么接下来的功能便是上下文切换，正如在上面章节中说到，上下文切换需要在在中断返回时发生，例如SysTick。原则上可以在那儿编写代码，但是这样的话需要将上下文切换添加到系统的每一个ISR中，这不仅是重复的，而且会破坏代码的整洁性，因为对于上下文切换，不能用标准C编码，而是需要一些特定于CPU的汇编代码来构建非常特定的堆栈帧以及操作CPU堆栈帧寄存器。但是，ARM Cortex-M提供了一种解决方案，允许仅在一个中断中编写上下文切换，然后根据需要从其他中断或者甚至从线程代码中有效地触发。在中断那一章我们通过在系统控制模块内的特殊寄存器中设置了一个位来触发了SysTick， 那么，我们可以使用同样的方式来针对另一个名为PendSV的异常，几乎所有的Cortex-M的RTOS都将其用于上下文切换，但是，PendSV并不是那么特别，原则上可以使用任何其他异常或中断来进行上下文切换。 我们可以修改内存地址0xE000ED04，这是系统控制块中的中断控制和状态寄存器。可以在DataSheet中查看到，通过设置位数28(即0x1后跟7个零)来触发PendSV异常，将该值写入ICSR寄存器以触发PendSV。\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos32.png#width-full)\n' +
                '\n' +
                '但是这个时候我们给SysTick添加断点会发现，PendSV抢占了还处于Active状态的SysTick中断，显然，这不是我们想要的结果，我们希望SysTick_Handler 执行完成，而且只有在SysTick_Handler执行完成之后，PendSV_Handler才可以运行上下文切换，不过，幸运的是，Arm Cortex-M内核允许通过对每个异常相关的可调中断优先级来控制异常和中断之间如何相互抢占。具体而言，SysTick和PendSV的优先级由地址0xE000ED20的SYSPRI3寄存器控制，通过在内存中查看此寄存器，可以看到其中SysTick优先级为0xE0，且PendSV优先级为0x0。(需要注意的是更高优先级的数字意味着抢占的优先级更低)，这就是优先级为0的PendSV抢占优先级为E0的SysTick的原因。如果我们翻转它，那就是给SysTick优先级0和PendSV最低优先级E0，就可以得到我们需要的抢占顺序。这里有一点值得注意的是即使将FF写入PendSV相关的字节，该值还是会以E0的方式读回，这是因为ARM Cortex-M内核仅在优先级字节的最高位中实现中断优先级。TivaC MCU仅实现三个中断优先级位。其他Cortex-M MCU可能会实现更多位，例如STM32实现4个优先级位，因此如果将FF写入ST芯片，它将回读为F0。具体见 `interrupt_priority`，但是，对于今天，只需要记住PendSV需要具有所有异常和中断的最低中断优先级，可以通过将FF写入PendSV的优先级字节来设置。这涵盖ARM Cortex-M内核的所有可能版本。\n' +
                '\n' +
                'PendSV优先级设置需要在系统初始化期间进行，所以我们把它放在os_kernel_init()函数中。\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos33.png#width-full)\n' +
                '\n' +
                '在RTOS实现中，推荐使用SYSPRI3寄存器的原始内存地址而不是CMSIS接口，因为在任何特定的ARM Cortex-M内核，例如Cortex-M0，M3，M4或者M7中，PendSV优先级都处于相同的地址，因此该代码将更加通用。在应用程序级代码中，通常应避免使用具有最低优先级的中断，因为要为PendSV保留最低级别。因此，在bsp.c中，需要将SysTick的优先级从最低级别提高到零:我们使用了特定的TivaC MCU(TM4C123gh6pm)，因此可以使用CMSIS函数NVIC_SetPriority()来设置SysTick异常的优先级。\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos34.png#width-full)\n' +
                '\n' +
                '有了中断优先级，我们需要一个触发PendSV的功能，因为上下文切换的触发将与下一步调度哪个线程的决定密切相关。因此，此函数的名称将为os_sched()。\n' +
                '\n' +
                '要实现此调度服务，首先需要确定如何跟踪当前线程和下一个要执行的线程。这可以简单地编写为os_task_t对象的两个指针。osTaskCurr指针将指向当前线程，osTaskNext将指向要运行的下一个线程。 由于这些指针将在中断中使用，因此需要volatile，需要在星号后面放置“volatile”关键字，因为需要指针volatile。如果在星号之前放置了“volatile”，将得到一个指向volatile os_task_t结构的non-volatile指针，这并不是我们想要的。回到os_sched()函数的实现，它需要决定如何设置osTaskNext指针，我们先跳过这一步。\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos35.png#width-full)\n' +
                '\n' +
                '现在，让我们简单地编写如何触发PendSV异常，但仅限于下一个线程实际上与当前线程不同时。此时，与所有RTOS服务一样，应该非常仔细地了解竞争条件(Race Condition)。这实际上是构建RTOS的最困难的方面。\n' +
                '\n' +
                '因为使用了os_sched()，这就导致产生很多围绕当前和下一个指针的ReacCondition的机会，所以需要通过禁用中断来阻止它们。有两种选择:禁用函数内部的中断，如下所示。\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos36.png#width-full)\n' +
                '\n' +
                '或者，始终在已建立的临界区(Critical Section)中调用整个函数。\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos37.png#width-full)\n' +
                '\n' +
                '推荐使用第二种方式，因为事实证明，当已经禁用了中断时，通常需要调用调度程序，因此在os_sched()内再次禁用和重新启用它们可能会有问题。\n' +
                '\n' +
                '现在，我们就可以在SysTick_Handler的末尾调用调度程序，但是需要像上面一样放在临界区里。\n' +
                '\n' +
                '### 上下文切换\n' +
                '\n' +
                '在前面提到过，PendSV必然需要使用汇编进行编写，因为上下文切换需要一些特定于CPU的汇编代码来构建非常特定的堆栈帧以及操作CPU堆栈帧寄存器。有一种比较简单的方式是先用C编写，然后从编译器生成的汇编代码中复制，我使用的是arm-none-eabi-gcc，可以直接通过-S参数生成汇编代码，这部分可以配置在Makefile里，由于论文篇幅字数限制，编译构建工具链这一部分没法在此细述，本文的重点也不在这里，但是不可否认的是，对于一个操作系统项目，这部分也是不可忽视的非常重要的一部分，工欲善其事，必先利其器。\n' +
                '\n' +
                'PendSV需要做的第一件事便是禁用中断，\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos38.png#width-full)\n' +
                '\n' +
                '接下来，需要保存当前线程的堆栈上下文。但是需要小心，因为第一次没有线程运行，并且osTaskCurr指针将在复位时为0。因此需要在if语句中检查它。如果不是0则在if中将寄存器r4到r11压入到当前堆栈，压完寄存器后，需要将SP寄存器保存到当前线程的私有sp数据成员中。\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos39.png#width-full)\n' +
                '\n' +
                '保存当前线程的上下文后，需要恢复要运行的下一个线程的上下文。因此，将SP寄存器设置为osTaskNext线程中私有sp的值。当正在更改当前线程时，将osTaskCurr指针设置为osTaskNext。\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos40.png#width-full)\n' +
                '\n' +
                '最后，从新堆栈弹出寄存器r4到r11，重新使能中断，然后愉快地返回到下一个线程。\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos41.png#width-full)\n' +
                '\n' +
                '这样就完成了上下文切换。如图\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos42.png#width-full)\n' +
                '\n' +
                '### 轮训线程调度\n' +
                '\n' +
                '每个RTOS的核心都是调度程序，调度程序负责管理系统中线程的执行。到目前为止，在os_sched()函数内运行的下一个线程的调度仍然是手动的。如果对于特定的已知线程，我们可以extern 它们，然后通过if对应的条件来调度它们，但是显然，这样是不合理的，那么我们就需要一个数据结构来让他们可以被优雅的调度，一些RTOS将线程组织成一个链表，然后由调度程序遍历，我们使用一个简单暴力的解决方案，即将TCB存储在预先分配的数组os_task_t[]中。在调用os_task_create()的时候将线程加入到线程数组os_task_t[]中，所以，需要的第一件事是os_task_t[]数组，它的大小将为32 + 1个线程。还需要在变量osTaskNum中记住到目前为止已经有多少线程被保存。最后，调度程序需要记住os_task_t[]数组osTasks中的当前索引osTaskIndex，它将以循环递增。每次在os_task_create()中启动一个新线程时，指向该线程的“me”指针存储在os_task_t[]数数组中，\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos43.png#width-full)\n' +
                '\n' +
                'os_task_num计数器将递增到下一个线程。需要注意的是，这里要判断一下，防止溢出。\n' +
                '\n' +
                '然后将真正的调度代码写在前面定义的os_sched()函数中，首先需要将当前线程索引osTaskIndex增加1， 为了防止溢出，还需要在它等于osTaskNum的时候重置为0，然后将osNextTask赋值为线程数组里的当前索引线程，就可以简单的做到循环调度。\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos44.png#width-full)\n' +
                '\n' +
                '这种设计的优点是不再需要对应用程序中的线程进行硬编码，RTOS会在每次创建线程的时候将它注册到调度数组中。\n' +
                '\n' +
                '考虑现在的实现，第一次线程被切入运行，是发生在SysTick_Handler中，因为在那儿调用了os_sched()函数，而os_sched()函数对线程进行了调度，并出发了PendSV异常，然后在PendSV异常中实现了线程上下文切换。所以接下来需要的是在OS添加线程之后，先将第一个线程切入，然后再开启SysTick中断，让其调度。所以需要添加一个新的API os_run()，在该函数中配置SysTick中断，并调用os_sched()将第一个线程切入:\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos45.png#width-full)\n' +
                '\n' +
                '这样的话就通过定时器，把调度器放在定时中，就实现了简单的线程循环调度。还是一种是时间片轮询调度方法，是一种比较简单易用的调度方式。但是这种类型的调度通常不利于实时应用。所以我们不会再讨论它。后面会实现一种更适合实时应用的优先级抢占调度方式。\n' +
                '\n' +
                '### 延迟与阻塞\n' +
                '\n' +
                '现在可以在用户程序中通过简单的代码就可以初始化并执行多个线程，回到前面例子中提到的线程task_02:\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos46.png#width-full)\n' +
                '\n' +
                '这是一个让开发板上红色的led亮一秒，灭一秒的程序，非常简单。但是，线程仍在delay_block数内使用原始轮询来做到延时。delay_block内部的愚蠢轮询是一种非常低效的CPU周期浪费，但是怎么能消除这种浪费呢？完成前面的工作之后，我们有了一个全新的工具:上下文切换。使用此工具，就可以用一种完全不同方式处理delay()函数。在延迟开始时，可以将上下文切换到其他线程，然后在延迟结束时将上下文切换回它，而不是启动循环轮询。在这两个上下文切换之间，线程将非常有效地阻塞，根本不消耗CPU周期。\n' +
                '\n' +
                '从线程的角度来看，阻塞延迟与轮询延迟没有任何不同。无论哪种方式，线程都是简单地调用delay()函数，该函数在延迟过去之前不会返回。但是从整个系统的角度来看，这会产生重大影响，因为两个上下文切换之间的CPU周期可供其他实际有事可做的线程使用。从目前为止的描述中可以清楚地看出，这种阻塞延迟实现必须成为RTOS的一部分，作为RTOS的一部分，我们将被这个函数称为os_delay()函数。\n' +
                '\n' +
                '运行轮询delay_block()函数的线程一直参与循环调度，这意味着它会被切入切出。相反，处于阻塞状态的线程永远不应该被调度。 它只是不准备运行。这意味着RTOS线程有一个新属性，它告诉调度程序线程是否就绪。这个属性便是前面TCB里面的state，它是个枚举变量，枚举如下:\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos47.png#width-full)\n' +
                '\n' +
                '首次创建线程时，意味着为其分配了os_task_t对象和堆栈，它将变为休眠OS_STATE_DORMANT状态，在这种状态下，除非在其上调用了os_task_create()函数，否则它无法执行任何操作。在该调用之后，一个线程看起来就像是被中断抢占一样，所以它转换到生命周期的阶段，为OS_STATE_INTERRUPTED。最后，当线程被调度为运行时，它将转换为OS_STATE_RUNNING状态。过了一会儿，线程被调度出来并且另一个线程被调度，此时原始线程再次被抢占，状态为OS_STATE_PENDING。注意，在单CPU系统中，一次只能有一个线程处于运行状态。但是现在，一个正在运行的线程可以调用os_delay()函数，此时它会被阻塞，这意味着不准备运行。状态将转换为OS_STATE_BLOCKED。\n' +
                '\n' +
                '现在考虑一下延迟结束时线程从阻塞状态转换出来的情况，显然，这需要由RTOS集中管理，因为阻塞的线程无法执行任何操作，也就是它无法解除阻塞。这个中央RTOS服务需要定期通过SysTick中断激活，因此称为os_tick()，每次激活时，os_tick()都需要更新各个线程的延迟，并且需要解除延迟已经过去的线程的阻塞状态。\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos48.png#width-full)\n' +
                '\n' +
                '有趣的是，线程状态在Blocked-->Preempted<---->Running-->Blcoked之间转换，如上图。这也就是说如果线程在处于阻塞状态时未处于就绪状态，则它必须在“抢占状态”和“正在运行”状态下处于“就绪”状态。事实上，当处于OS_STATE_READY状态时，这意味着在Preempted或Running中，线程已准备好并愿意运行。除非有时需要进行抢占以与其他已准备好并愿意运行的线程共享CPU。这就有了另一个奇怪的结果。也就是说，当前阻塞线程的系统是不完整的，并且必然需要一个始终准备好运行且不能阻塞的特殊线程。\n' +
                '\n' +
                '要看到这一点，可以考虑具有两个线程的系统，例如os_task_01和os_task_02。只要它们都处于Ready超级状态，调度程序就可以运行其中一个。当其中一个线程进入阻塞状态时，调度程序仍然可以运行另一个线程。但是如果两个线程在某个时候都被阻塞怎么办? CPU仍然必须一次只运行一个线程，但现在没有一个线程现就绪。解决方案是添加另一个特殊线程，使得在当没有其他线程就绪时调度程序依然可以运行。系统中的这种情况称为“空闲”状态，因此特殊线程称为“空闲”线程。不允许此“空闲”线程阻塞，因此其生命周期不具有阻塞状态。\n' +
                '\n' +
                '回到实现，“空闲”线程osTaskIdle与os_task_01一样，osTaskIdle的线程里面是一个无限循环，它会调用一个回调函数task_idle_thread()，\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos49.png#width-full)\n' +
                '\n' +
                '这样的话应用程序级代码将能够在其中做一些处理。就像任何其他线程一样，需要启动空闲线程。最方便的地方是os_init()。现在，有趣的部分是如何为空闲线程提供堆栈。一种选择是在RTOS中预先分配它，但是在这个级别不知道os_onIdle()回调将使用多少堆栈。因此，最好简单地将空闲堆栈分配推迟到应用程序，就像在os_task_create()函数中完成一样。\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos50.png#width-full)\n' +
                '\n' +
                '### 再谈轮训线程调度\n' +
                '\n' +
                '对于线程状态state，在每一个线程中放置一个是合乎逻辑的事，但是对于代码的效率，它并不是最佳的。 相反，事实证明，在32位位掩码osReadySet中将准备运行的标志组合在一起更有效。此osReadySet位掩码将与os_task_t []数组osTasks一起使用，osReadySet位掩码中的每个位对应于os_task_t []数组osTasks中的一个线程，不包含空闲线程，因为它始终准备运行。\n' +
                '\n' +
                '空闲线程始终位于索引零处，因为它已从os_init()启动，这确保它是os_task_t []数组osTasks中的第一个线程。因此，跳过索引零意味着osReadySet中的位简单地相对于索引移位到os_task_t []数组osTasks。例如，索引1处的线程对应于位0，索引2处的线程对应于位1，索引n处的线程对应于位n-1，并且最后索引32处的弹性线程对应于osReadySet位掩码中的最后位数31。\n' +
                '\n' +
                'osReadySet位掩码的各种值对应于以下情况：位0，1和n-1设置，表示线程1，2和n准备好运行。只有位1集表示线程2准备运行。最后，零位表示系统的空闲状态。通过简单地在单个指令中将osReadySet与零进行比较，可以非常有效地在代码中检查这种情况。 首先，通过将osReadySet与零进行比较，快速检查空闲状态，在这种情况下，将osTaskIndex设置为空闲线程的索引，即零。否则，如果osReadySet不为零，则表示有一些可立即运行的线程。但是现在不能简单地选择下一个线程索引，因为线程可能还没准备好运行。相反，需要继续以循环方式进行，直到找到准备运行的非空闲线程。要检查线程N是否准备好运行，需要用一个仅设置了第N位的位掩码和osReadySet进行按位与运算。如果结果为零，则需要继续，因为这意味着该位未设置，因此相应的线程尚未准备好运行。此外，需要小心通过跳过索引0从循环调度中排除空闲线程。 所以，这是最终的算法。\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos51.png#width-full)\n' +
                '\n' +
                '以循环方式递增osTaskIndex，但是需要在它等于osTaskNum的时候重置为1而不是零来跳过空闲线程。 只要osReadySet指定线程未准备好运行，就会继续前进。如图：\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos52.png#width-full)\n' +
                '\n' +
                '在os_delay()中，需要禁用中断，并将delay时间存储在当前线程的超时计数器中。接下来，需要通过清除osReadySet位掩码中的相应位来使线程阻塞(即未准备好运行状态)。最后，需要调用调度程序立即将该上下文切换为其他线程。\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos53.png#width-full)\n' +
                '\n' +
                '正如在前面所写的，os_sched()被设计为在禁用中断的情况下调用，并且在重新启用中断后立即进行上下文切换。还需要注意的一点是os_delay()禁止从空闲线程调用它，因为它永远不会进入阻塞状态。所以需要通过添加一个断言来完成此操作，即当前线程不是索引0处的空闲线程。\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos54.png#width-full)\n' +
                '\n' +
                '再来看系统计时器如何更新各个线程的延迟。SysTick_Handler将调用os_tick()函数，该函数将减少所有非零超时计数器。当这些向下计数器中的任何一个达到零时，相应的线程将被解除阻塞并被调度。\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos55.png#width-full)\n' +
                '\n' +
                'os_tick()的实现需要循环遍历所有线程，除了空闲线程，减少所有非零超时计数器。对于刚刚变为零的计数器的线程需要解除阻塞。正如前面TCB所看到的，在每个线程中有一个单独的超时计数器timeout将用来延迟运行。并且每个线程中的timeout相互独立。因此，os_tick()的代码将包含一个遍历所有线程的for循环，从索引1开始跳过空闲线程。在循环中，首先需要检查相应线程的超时计数器，如果它不是零，需要递减它。如果计数器变为零，则需要通过设置osReadySet位掩码中的相应位来使线程准备好运行。注意，此实现假定将从单个中断服务程序调用os_tick()，例如SysTick_Handler()。在这种情况下，不需要在os_tick()中禁用中断，因为ISR不能被线程抢占，因此任何意外更改超时计数器(仅在os_delay()中可能发生)是不可能的。此外，没有必要从os_tick()调用os_sched()，因为始终在SysTick_Handler的末尾调用调度程序来安排了任何未阻塞的线程。既此时的SysTick_Handler:\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos56.png#width-full)\n' +
                '\n' +
                '### 优先级线程调度\n' +
                '\n' +
                '到目前为止，我们所实现的并不是真正的RTOS，因为循环调度并不是真正的“实时”，到目前的代码中，执行的任何计算都被认为是同样有效的，我们只关心计算是否正确，而没有关心他是否在给定的时间内执行。 实时的概念具体而言，执行的太晚被认为不太有效或者说有用，甚至会带来一些问题。在所谓的“硬实时系统”中，事件从触发事件到截止期限的计算是有用的。在截止期限之后，计算的有用性变为“负无穷大”，这意味着计算无用（因为它的有用性仅为零）。错过了截止期限表示系统故障。例如，部署安全气囊太晚不仅无用而且这是灾难性的。但也有“软实时系统”，其中及时性也很重要，但截止期限并不绝对不可超过。例如，预计文本消息会在20秒内及时传递。但超过20秒没收到它依旧是有效的，尽管其有用效性会随着时间的推移而减少。\n' +
                '\n' +
                '在下面的讨论中，我们将重点关注硬实时系统。从历史的角度来看，硬件实时系统在计算机中的主流使用始于20世纪60年代和70年代。例如，Apollo程序使用两台相同的实时计算机：一台在命令模块中，另一台在月球模块中。这里提到一个人玛格丽特·汉密尔顿（Margaret Hamilton），她领导了这次壮举的软件工程的大部分工作。向她致敬。 早在这些早期，人们就已经意识到大多数实时系统都是以周期性的方式运作，这意味着触发事件和截止日期会在一定时期内重复出现。例如，将航天器降落在月球表面需要对火箭推进器进行精细校正，而机载计算机必须每隔几毫秒执行一次。类似地，工业过程需要周期控制，范围从几毫秒到几十秒。内燃机的电子控制需要与发动机的转速同步的周期性控制，等等。\n' +
                '\n' +
                '调度程序的另一种主要方式是抢先式调度，这是最常见的RTOS调度程序类型。使用抢占式调度程序的话，正在运行的线程将一直持续到它完成，或者优先级较高的线程就绪(在这种情况下，优先级较高的线程抢占优先级较低的线程)，又或者线程在等待资源(例如任务调用sleep())时放弃处理器。TI-RTOS和FreeRTOS都具有抢占式调度程序。\n' +
                '\n' +
                '接下来我们在RTOS中实现基于优先级的调度，优先级编号是一个整数，在前面的TCB中表现为priority， 范围从0到支持的最大线程数，在该RTOS中为32，在RTOS实现中，还需要重新设计os_task_t[]数组osTasks的使用。os_task_t[]数组osTasks包含指向已启动的所有线程对象的指针。在循环调度程序中，数组从索引0连续填充，索引0是为空闲线程保留的，直到osTaskNum。对于基于优先级的调度程序，区别在于os_task_t[]数组osTasks中的索引将是线程PRIORITIES，并且这些优先级不需要是连续的，这意味着os_task_t[]数组osTasks中可能存在间隙。\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos57.png#width-full)\n' +
                '\n' +
                '此外，需要将用户指定的优先级保存到线程控制块中。即在初始化线程的时候设置TCB中的priority。\n' +
                '\n' +
                '现在，考虑一下使用osReadySet位掩码。对于基于优先级的调度，最有趣的是根据位掩码的当前值找到准备运行的最高优先级线程。此时，需要确定优先级编号方案。由于历史原因，可能遇到的许多RTOS（如NUCLEUS，ThreadX，MicroC / OS，embOS等）使用INVERSE优先级编号方案，其中优先级0对应于最高优先级线程，而较高优先级编号对应于LOWER优先级线程。不用说，反向优先级编号方案在讨论更高和更低线程优先级时导致不断混淆。但是当然可以使用简单的DIRECT优先级编号方案，其中优先级0对应于空闲线程，而较高优先级编号对应于较高优先级的线程。 我们使用这种简单的DIRECT优先级编号约定。找到准备运行的最高优先级线程的优先级编号的基本原则是将osReadySet位掩码中，从前面的0计数到第一个1位，并从总位数中32中减去它。比如对于 `osReadySet=0x4040810(0b00000100000001000000100000010000)`，表示优先级分别为5，12，19，27的线程准备好运行，那么根据我们的基本原则，前面有5个0，所以准备运行的最高优先级线程的优先级编号便是32-5 = 27;需要注意的是bit位等于priority减1，在优先级为N准备运行的线程的一般情况下，前导零的计数将为32减N，因此优先级数计算为32减去osReadySet位掩码中前导零的计数。\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos58.png#width-full)\n' +
                '\n' +
                '有意思的是在数学上，在数字x中找到最大的一位的公式32-CLZ（x）是以2为底数x的对数的整数近似。所以我们可以实现一个LOG2（）宏\n' +
                '\n' +
                '```\n' +
                'define LOG2(x)(32U-__clz(x))\n' +
                '```\n' +
                '\n' +
                '当然，该算法与Count-Leading-Zeros操作一样快，但事实证明，ARM Cortex-M4处理器在硬件中支持它作为CLZ指令。可以在TivaC微控制器的数据表中找到该指令。要利用CLZ指令，可以在编译器帮助中搜索CLZ。一般编译器通过内部函数__clz()支持它。通过非常高效的LOG2()操作，现在可以实现基于优先级的调度程序。现在当调度程序检测到系统的空闲状态时，需要选择空闲线程。不再使用osTaskindex变量， 只需将osTaskNext直接设置为osTasks[0]。如果某些线程已准备好运行，则使用带有osReadySet参数的LOG2()宏来查找准备运行的最高优先级线程。LOG2()宏保证产生0到32之间的数字（包括0和32），因此它可以直接用作os_task_t []数组osTasks的索引而无需检查索引的范围。最后的改变是重新设计os_tick()和os_delay()服务。因为两个实现当前都假设os_task_t []数组osTasks连续填充到osTasksNum。\n' +
                '\n' +
                '在os_tick()中，可以利用快速LOG2()操作，而不是迭代整个os_task_t []数组osTasks， 并且迭代可能存在大量未使用的优先级。具体来说，可以引入延迟线程的位掩码，类似于osReadySet，除了它保存延迟线程。在使用它时，需要删除不再需要的变量osTaskIndex和osTasksNum。使用osDelayedSet位掩码后，os_tick()函数将仅在位掩码中的1位上进行迭代，而不是扫描所有位。但是，因为需要从位掩码中删除已经处理的位，所以需要使用临时位掩码“workingSet”。只要workingSet设置了一些位就会循环，这意味着某些线程被延迟并需要在此时钟周期处理。\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos59.png#width-full)\n' +
                '\n' +
                '首先使用快速LOG2()宏快速获取workingSet中最高位1位的编号，然后使用它来索引os_task_t []数组osTasks。将获得的线程指针保存在临时变量t中。接下来，递减此线程的超时计数器，如果它变为零，则通过在osReadySet位掩码中设置相应的优先级位，使线程准备好运行。同时，从osDelayedSet位掩码中删除相同的位，因为该线程不再被延迟。最后，始终从workingSet中删除相同的优先级位，因为它现在已被处理。为了避免明显的代码重复，可以引入一个临时变量\'bit\'，如上。\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos60.png#width-full)\n' +
                '\n' +
                '在os_delay()函数中，需要将osTaskIndex变量替换为当前线程的优先级编号。除了从就绪集中删除优先级位之外，该函数还需要将相同的位添加到osDelayedSet，因为此线程现在被延迟。最后，为了避免代码重复，可以引入一个临时变量\'bit\'，就像上面的os_tick()一样。如图:\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos61.png#width-full)\n' +
                '\n' +
                '这样就实现了基于优先级的抢占式调度，实际上通常只有少数高优先级的线程具有硬实时期限，而其他线程只有软实时要求。在这种情况下，可以将高优先级用于硬实时线程，并将所有软实时线程的优先级降低。基于优先级的抢占式调度的优点在于，高优先级线程始终可以立即抢占所有优先级较低的线程，因此高优先级线程对执行时间或优先级较低的线程周期的变化不敏感。由于所有这些原因，抢占式，基于优先级的调度程序成为常态，并且在大多数实时操作系统中至今得到支持。\n' +
                '\n' +
                '## 写在最后\n' +
                '\n' +
                '需要注意的是，以上文章提到的代码部分涉及到代码的目录结构，项目架构，构建工具链等，可能无法简单的从文章中简单的了解，具体可见笔者GitHub:[https://github.com/CenoOS/CenoOS-IOT](https://github.com/CenoOS/CenoOS-IOT)。文章部分内容做了简化，比如线程状态转换，调度对列，并未在文中详细道出，对于状态转换，只是隐式的实现了简单的就绪态，运行态和阻塞态，对于调度而是用简化的32比特位来代替调度对列。\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos62.png#width-full)\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos63.png#width-full)\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos64.png#width-full)\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos65.png#width-full)\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos66.png#width-full)\n' +
                '\n' +
                '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/blogs/rtos67.png#width-full)\n' +
                '\n'
        },

    ]
};
