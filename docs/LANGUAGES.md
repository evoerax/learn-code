# 编程语言大全

> 所有主流及重要编程语言速查表，每种语言一句话介绍。
> 本文档作为语言介绍页面的编写依据。

---

## 目录

- [历史先驱](#历史先驱)
- [系统编程](#系统编程)
- [面向对象](#面向对象)
- [函数式](#函数式)
- [Web 开发](#web-开发)
- [脚本与自动化](#脚本与自动化)
- [数据科学与 AI](#数据科学与-ai)
- [移动与跨平台](#移动与跨平台)
- [云原生与并发](#云原生与并发)
- [数据库查询](#数据库查询)
- [硬件与嵌入式](#硬件与嵌入式)
- [区块链与智能合约](#区块链与智能合约)
- [学术与研究](#学术与研究)
- [配置与基础设施](#配置与基础设施)
- [教育与艺术](#教育与艺术)
- [新兴语言](#新兴语言)
- [奇特与实验性](#奇特与实验性)

---

## 历史先驱

## Plankalkül
最早的高级编程语言概念（1943），从未实现，奠定了高级语言的理论基础。

## ENIAC Short Code
第一个运行于计算机的非机器码语言（1946），用解释器执行简单数学表达式。

## FORTRAN
IBM 于 1957 年发布的第一门成功的高级语言，科学计算至今仍在使用。

## LISP
1958 年诞生的第一门函数式语言，括号语法，AI 研究的奠基语言。

## COBOL
1959 年为商业数据处理而生，英文式语法，全球银行和政府系统的核心。

## ALGOL
1958 年的国际算法语言标准，现代结构化编程语言（C、Pascal）的共同祖先。

## PL/I
IBM 1964 年推出的多范式语言，试图统一科学与商业计算，影响有限但超前。

## RPG
IBM 1964 年为报表生成设计的语言，至今仍运行于 IBM i（AS/400）系统。

---

## 系统编程

## Assembly（汇编）
直接对应 CPU 指令的低级语言，性能最高、可移植性最差，用于驱动和固件开发。

## C
1972 年诞生于贝尔实验室，UNIX 的实现语言，50 年来系统编程的绝对基础。

## C++
1983 年在 C 上加入面向对象，多范式语言，游戏引擎、浏览器、数据库的首选。

## Rust
2010 年 Mozilla 开发，用所有权系统在编译期保证内存安全，C++ 的现代挑战者。

## Ada
1980 年美国国防部委托开发，强类型高可靠性，用于航空航天和军事关键系统。

## D
2001 年，C++ 的现代化替代方案，垃圾回收可选、编译速度快、元编程强大。

## Zig
2016 年，比 C 更简单、更安全的系统语言，与 C 完全互操作，无隐式控制流。

## Odin
2016 年，系统编程语言，比 C 更现代的语法，专注于简洁和可读性。

## Carbon
2022 年 Google 推出，设计为 C++ 的现代继承者，与 C++ 双向互操作。

## Nim
2008 年，编译为 C 的高级语言，Python 般的语法配合接近 C 的运行性能。

## Crystal
2014 年，Ruby 语法 + 静态类型 + 编译执行，兼顾开发效率和运行速度。

---

## 面向对象

## Simula
1967 年，世界第一门面向对象语言，类和对象概念的发源地。

## Smalltalk
1972 年 Xerox PARC 发明，纯面向对象，消息传递机制，GUI 编程的先驱。

## Objective-C
1983 年，C + Smalltalk 消息机制，苹果生态主力语言直到 Swift 出现。

## Java
1995 年 Sun 推出，JVM 跨平台，Write Once Run Anywhere，企业级应用支柱。

## C#
2000 年微软推出，.NET 生态核心，现代语言特性丰富，Unity 游戏引擎首选。

## Kotlin
2011 年 JetBrains 开发，简洁空安全，与 Java 完全互操作，Android 官方首选。

## Swift
2014 年 Apple 推出，安全现代，替代 Objective-C，iOS/macOS 开发首选。

## Eiffel
1985 年，面向对象设计的理论典范，发明了"契约式设计"（Design by Contract）。

## Groovy
2003 年，JVM 上的动态语言，Gradle 构建脚本和 Jenkins 的专用语言。

---

## 函数式

## LISP
见历史先驱。函数式编程的起点，影响了所有后续函数式语言。

## Scheme
1975 年的 LISP 方言，极简设计，Lambda 演算最纯粹的实现，MIT 经典教材语言。

## ML
1973 年，第一门带类型推断的函数式语言，OCaml 和 F# 的直接祖先。

## Haskell
1990 年，纯函数式、惰性求值、强大的类型系统，学术界函数式编程的标准语言。

## OCaml
1996 年，ML 的面向对象方言，强类型推断，Jane Street 等金融公司的生产语言。

## F#
2005 年微软出品，.NET 平台的函数式语言，数据科学和金融建模的实用选择。

## Erlang
1986 年爱立信为电信系统开发，天生并发、容错、热更新，WhatsApp 的技术基础。

## Elixir
2011 年，在 Erlang VM 上运行的现代函数式语言，Phoenix 框架支撑百万并发。

## Clojure
2007 年，JVM 上的现代 Lisp，不可变数据结构，函数式并发编程。

## PureScript
2013 年，强类型函数式语言，编译为 JavaScript，Haskell 风格的前端开发。

## Elm
2012 年，纯函数式前端语言，零运行时错误，The Elm Architecture 影响了 Redux。

## Gleam
2021 年，Erlang VM 上的强类型函数式语言，语法简洁，适合高并发 Web 服务。

## Idris
2011 年，支持依值类型（Dependent Types）的函数式语言，类型即证明。

## Agda
2007 年，基于依值类型理论的证明辅助工具和函数式编程语言。

## Lean
2013 年微软研究院发布，定理证明器兼函数式语言，数学形式化验证工具。

## Coq
1989 年，交互式定理证明助手，用于形式化数学证明和软件验证。

---

## Web 开发

## JavaScript
1995 年 Brendan Eich 仅用 10 天设计，浏览器唯一原生语言，全栈生态最广。

## TypeScript
2012 年微软推出，JavaScript 的静态类型超集，大型前端项目的工程标准。

## PHP
1995 年，服务端脚本语言，驱动全球 43% 的网站，WordPress 的运行基础。

## CoffeeScript
2009 年，编译为 JavaScript 的语法糖语言，TypeScript 出现前的主流替代方案。

## Dart
2011 年 Google 推出，Flutter 框架的专用语言，编译为原生或 JavaScript。

## Hack
2014 年 Facebook 为 PHP 添加静态类型，HHVM 虚拟机上运行。

## ReScript
2020 年，OCaml 的 JavaScript 编译目标，强类型、快速编译的前端语言。

## HaxE
2005 年，强类型语言，可编译为 JavaScript、Python、C++、Java 等多个目标。

---

## 脚本与自动化

## Python
1991 年，简洁优雅、多范式，从 Web 到 AI 无处不在，当今最流行的语言之一。

## Ruby
1995 年，注重开发者幸福感的纯面向对象脚本语言，Rails 框架改变了 Web 开发范式。

## Perl
1987 年，强大的正则表达式和文本处理，"有不止一种方法做到"，运维脚本经典。

## Bash / Shell
Unix Shell 脚本语言，系统管理、CI/CD 流水线、自动化任务的第一语言。

## PowerShell
2006 年微软推出，基于 .NET 的 Shell 脚本语言，Windows 系统管理和 DevOps 工具。

## AWK
1977 年，专为文本处理和数据提取设计的模式匹配语言，Unix 工具链核心成员。

## Tcl
1988 年，Tool Command Language，嵌入式脚本和 GUI 工具（Tk）的经典组合。

## Lua
1993 年巴西发明，极轻量嵌入式脚本语言，World of Warcraft、Roblox 的脚本引擎。

## Groovy
见面向对象。也是 Gradle 构建脚本和 Jenkins Pipeline 的专用脚本语言。

## Fish
2005 年，友好交互式 Shell，自动补全和语法高亮开箱即用，替代 Bash 的现代选择。

---

## 数据科学与 AI

## Python
见脚本与自动化。TensorFlow、PyTorch、NumPy、Pandas 的宿主语言，AI 第一语言。

## R
1993 年，统计计算和数据可视化的专用语言，ggplot2 是数据可视化的行业标准。

## Julia
2012 年，为科学计算设计的高性能动态语言，JIT 编译，速度接近 C。

## MATLAB
1984 年 MathWorks 推出，矩阵运算和数值分析的商业语言，工程和科研标配。

## Octave
MATLAB 的开源替代品，语法高度兼容，免费可用。

## Wolfram Language（Mathematica）
1988 年，符号计算和知识引擎语言，Wolfram Alpha 的运行基础。

## SAS
1976 年，统计分析系统，制药、金融、政府数据分析的商业标准语言。

## Mojo
2023 年 Modular 推出，Python 超集，专为 AI 硬件加速设计，声称比 Python 快万倍。

## S
1976 年贝尔实验室统计语言，R 语言的直接前身。

---

## 移动与跨平台

## Swift
见面向对象。Apple 2014 年推出，iOS/macOS/watchOS 开发的官方语言。

## Kotlin
见面向对象。JetBrains 开发，Android 官方首选，也支持多平台（KMP）。

## Dart
见 Web 开发。Flutter 框架使跨平台（iOS、Android、Web、桌面）成为可能。

## Objective-C
见面向对象。苹果生态历史语言，大量遗留 iOS/macOS 代码库仍在使用。

## Kotlin Multiplatform（KMP）
Kotlin 的多平台扩展，共享业务逻辑代码，各端保留原生 UI。

---

## 云原生与并发

## Go
2009 年 Google 三位传奇工程师设计，极简语法、goroutine 并发，Docker/K8s 的语言。

## Erlang
见函数式。Actor 模型并发，九九电信级可靠性，热更新不停机。

## Elixir
见函数式。现代化 Erlang 生态，Phoenix LiveView 实现实时 Web。

## Rust
见系统编程。零成本并发抽象，无数据竞争，Web Assembly 的强力支持者。

## Pony
2015 年，基于 Actor 模型的并发语言，用能力系统（Capabilities）消除数据竞争。

## Crystal
见系统编程。并发基于 Fiber，语法像 Ruby，性能接近 Go。

---

## 数据库查询

## SQL
1974 年 IBM 基于关系代数设计，结构化查询语言，所有关系型数据库的通用接口。

## PL/SQL
Oracle 的 SQL 过程扩展，存储过程、触发器、游标的企业数据库语言。

## T-SQL
微软和 Sybase 的 SQL 扩展，SQL Server 的专用过程语言。

## GraphQL
2015 年 Facebook 发布，API 查询语言，替代 REST，客户端精确指定所需数据。

## SPARQL
W3C 标准，用于查询 RDF 格式的语义网和知识图谱数据。

## CQL（Cassandra Query Language）
Apache Cassandra 的查询语言，类 SQL 语法但面向分布式宽列存储。

## MQL（MongoDB Query Language）
MongoDB 的文档查询语言，JSON 风格，灵活的文档数据库操作接口。

## Cypher
Neo4j 的图数据库查询语言，直观表达节点和关系的模式匹配。

---

## 硬件与嵌入式

## VHDL
1983 年美国国防部发起，硬件描述语言，用于 FPGA 和 ASIC 数字电路设计。

## Verilog
1984 年，另一种主流硬件描述语言，语法类 C，广泛用于芯片验证和设计。

## SystemVerilog
Verilog 的扩展，加入面向对象特性，工业界芯片验证的标准语言。

## CUDA
2007 年 NVIDIA 推出，C 扩展语言，GPU 并行计算编程，深度学习训练的底层基础。

## OpenCL
开放标准的异构并行计算语言，支持 CPU、GPU、FPGA 等多种计算设备。

## C（嵌入式）
见系统编程。裸机固件、RTOS 驱动、单片机编程的第一语言。

## MicroPython
Python 3 的精简实现，运行于微控制器（ESP32、Raspberry Pi Pico 等）。

## Arduino（Wiring）
基于 C/C++ 的嵌入式开发框架，降低了硬件编程门槛，创客社区标准。

---

## 区块链与智能合约

## Solidity
2014 年以太坊开发，智能合约主流语言，语法类 JavaScript，DeFi 生态基础。

## Vyper
以太坊官方推荐的 Python 风格智能合约语言，比 Solidity 更简洁安全。

## Move
2019 年 Facebook（Diem）设计，资源导向语言，用于 Aptos 和 Sui 区块链。

## Cairo
StarkNet 的智能合约语言，支持零知识证明可验证计算。

## Ink!
Substrate/Polkadot 生态的 Rust 智能合约语言，编译为 WebAssembly。

## Clarity
Stacks 区块链的智能合约语言，可决定性语言，无法出现意外行为。

---

## 学术与研究

## Prolog
1972 年，逻辑编程语言，声明式，用规则和事实表达知识，AI 专家系统的基础。

## Mercury
1995 年，逻辑函数式混合语言，比 Prolog 更强的类型系统，高性能逻辑编程。

## Oz / Mozart
1991 年，多范式教学语言，支持约束编程、并发、分布式，《计算机程序的概念》配套语言。

## Standard ML（SML）
1983 年，ML 的标准化方言，函数式编程和类型理论研究的参考实现。

## Racket
Scheme 的方言，同时是语言研究平台，用于设计和实现新编程语言。

## J
APL 的现代继承者，Kenneth Iverson 设计，极简符号语言，数组编程极致表达。

## K / Q（KDB+）
Arthur Whitney 设计的数组语言，金融时序数据库 KDB+ 的查询语言，华尔街重度使用。

## Forth
1968 年，栈式语言，逆波兰表示法，嵌入式和航天控制系统，Open Firmware 标准。

## APL
1966 年，用特殊数学符号表达数组操作，代码极度简洁，一行能表达复杂矩阵变换。

---

## 配置与基础设施

## HCL（HashiCorp Configuration Language）
Terraform 的配置语言，声明式描述云基础设施，IaC 领域的主流语言。

## Nix
Nix 包管理器的纯函数式配置语言，声明式、可复现的系统配置。

## Dhall
强类型配置语言，图灵不完备确保配置求值终止，YAML/JSON 的类型安全替代。

## CUE
2019 年 Google 开发，数据验证和配置语言，约束系统确保配置正确性。

## Jsonnet
Google 开发，JSON 的模板扩展语言，Kubernetes 配置和 CI 系统的常用工具。

## Starlark（Skylark）
Python 方言，Bazel 构建系统的配置语言，确定性执行，无副作用。

## YAML
2001 年，数据序列化语言，Kubernetes/Docker Compose/GitHub Actions 的配置标准。

## TOML
2013 年，Tom 的极简配置语言，Rust（Cargo.toml）和 Python（pyproject.toml）的标准配置格式。

---

## 教育与艺术

## BASIC
1964 年 Dartmouth 设计，降低编程门槛的教学语言，微软发家的第一个产品。

## Logo
1968 年，通过海龟绘图教孩子编程，编程教育启蒙语言。

## Scratch
2003 年 MIT 设计，可视化积木编程，全球最广泛使用的青少年编程入门工具。

## Processing
2001 年 MIT 媒体实验室，Java 方言，为艺术家和设计师提供的可视化编程环境。

## p5.js
Processing 的 JavaScript 版本，浏览器中的创意编程和数据可视化工具。

## Max/MSP
1980 年代，音频和多媒体创作的可视化编程语言，专业电子音乐制作标准。

## Pure Data（Pd）
Max/MSP 的开源替代，数据流式编程，音频合成和实时音乐表演工具。

## SuperCollider
1996 年，实时音频合成和算法作曲的专用语言，学院派电子音乐标准。

---

## 新兴语言

## V（Vlang）
2019 年，简洁的系统编程语言，编译速度极快，无 GC，语法类 Go。

## Janet
2019 年，Lisp 方言，嵌入式脚本语言，适合用 C 扩展的小型语言引擎。

## Fennel
Lua 上的 Lisp 方言，在 Lua 生态中使用函数式风格编程。

## Roc
函数式语言，专注于极快的编译速度和友好的错误信息，Elm 的精神继承者。

## Unison
内容寻址的函数式语言，代码以哈希存储，重构不破坏历史，分布式计算友好。

## Vale
实验性系统语言，用"泛化引用"（Generational References）实现内存安全，无 GC。

## Hare
2022 年，极简系统语言，C 的精神继承者，专注于稳定和简洁。

## Lobster
游戏开发专用语言，内置所有权系统，脚本语言级开发体验配合原生性能。

---

## 奇特与实验性

## Brainfuck
1993 年，极简图灵完备语言，只有 8 个命令，是编程极简主义的极端实验。

## Whitespace
2003 年，只用空格、制表符和换行符编写的语言，所有可见字符都是注释。

## Malbolge
1998 年，为"尽可能难以编程"而设计，第一个 Hello World 程序花了两年才被写出。

## INTERCAL
1972 年，恶意讽刺编程语言设计的语言，充满反直觉的关键字（如 PLEASE）。

## Shakespeare
2001 年，用莎士比亚剧本风格写程序的语言，变量名必须是莎翁剧中的人物名。

## Chef
2002 年，用烹饪食谱格式编写的语言，程序看起来像一道菜的制作步骤。

## Piet
以抽象画家 Piet Mondrian 命名，用彩色像素图案编写程序的语言。

## LOLCODE
2007 年，用 LOLcat 网络语言写程序（HAI、CAN HAS、KTHXBYE 等关键字）。

---

*最后更新：2026 年 4 月*
