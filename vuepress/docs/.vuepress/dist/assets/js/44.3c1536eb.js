(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{330:function(s,a,t){"use strict";t.r(a);var e=t(6),r=Object(e.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务器","aria-hidden":"true"}},[s._v("#")]),s._v(" 服务器")]),s._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("ul",[t("li",[s._v("编程语言：Java")]),s._v(" "),t("li",[s._v("版本：JDK 8")]),s._v(" "),t("li",[s._v("框架：Spring Boot 2.1.3.RELEASE, Spring Cloud Greenwich.RELEASE")]),s._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/xiaper/server",target:"_blank",rel:"noopener noreferrer"}},[s._v("Github"),t("OutboundLink")],1)])])]),s._v(" "),t("h2",{attrs:{id:"准备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备","aria-hidden":"true"}},[s._v("#")]),s._v(" 准备")]),s._v(" "),t("ul",[t("li",[s._v("Linux")]),s._v(" "),t("li",[t("router-link",{attrs:{to:"/component/nginx.html"}},[s._v("Nginx")])],1),s._v(" "),t("li",[t("router-link",{attrs:{to:"/component/mysql.html"}},[s._v("MySQL")])],1),s._v(" "),t("li",[t("router-link",{attrs:{to:"/component/oracle.html"}},[s._v("Oracle")])],1),s._v(" "),t("li",[t("router-link",{attrs:{to:"/component/redis.html"}},[s._v("Redis")])],1),s._v(" "),t("li",[t("router-link",{attrs:{to:"/component/mongo.html"}},[s._v("Mongo")])],1),s._v(" "),t("li",[t("router-link",{attrs:{to:"/component/rabbitmq.html"}},[s._v("RabbitMQ")])],1),s._v(" "),t("li",[t("router-link",{attrs:{to:"/component/activemq.html"}},[s._v("ActiveMQ")])],1),s._v(" "),t("li",[t("router-link",{attrs:{to:"/component/aliyunoss.html"}},[s._v("AliyunOSS")])],1),s._v(" "),t("li",[t("router-link",{attrs:{to:"/other/elk.html"}},[s._v("ELK")])],1)]),s._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("ul",[t("li",[s._v("Linux无特殊系统版本要求，Ubuntu或者CentOS均可。建议配置 16核，64G。")]),s._v(" "),t("li",[s._v("MySQL/Oracle二选其一，无特殊版本要求，建议最新稳定版，默认支持MySQL")]),s._v(" "),t("li",[s._v("Redis无特殊版本要求，建议最新稳定版。")]),s._v(" "),t("li",[s._v("RabbitMQ/ActiveMQ二选其一，无特殊版本要求，建议最新稳定版，默认支持RabbitMQ")]),s._v(" "),t("li",[s._v("Zookeeper，无特殊版本要求，建议最新稳定版")])])]),s._v(" "),t("h2",{attrs:{id:"架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#架构","aria-hidden":"true"}},[s._v("#")]),s._v(" 架构")]),s._v(" "),t("p",[s._v("支持多种架构，可任选其一\n")]),s._v(" "),t("h3",{attrs:{id:"单体架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单体架构","aria-hidden":"true"}},[s._v("#")]),s._v(" 单体架构")]),s._v(" "),t("p",[t("img",{attrs:{src:"/xiaper.io/architechture-sole.png",alt:"单体架构"}})]),s._v(" "),t("h3",{attrs:{id:"分布式架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分布式架构","aria-hidden":"true"}},[s._v("#")]),s._v(" 分布式架构")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("中小企业\n"),t("img",{attrs:{src:"/xiaper.io/architechture-cluster.png",alt:"分布式架构"}})])]),s._v(" "),t("li",[t("p",[s._v("大型企业\n"),t("img",{attrs:{src:"/xiaper.io/architechture-cluster2.png",alt:"分布式架构2"}})])])]),s._v(" "),t("h3",{attrs:{id:"微服务架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#微服务架构","aria-hidden":"true"}},[s._v("#")]),s._v(" 微服务架构")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("中小企业\n"),t("img",{attrs:{src:"/xiaper.io/architechture-service.png",alt:"微服务架构"}})])]),s._v(" "),t("li",[t("p",[s._v("大型企业\n"),t("img",{attrs:{src:"/xiaper.io/architechture-service2.png",alt:"微服务架构2"}})])])]),s._v(" "),t("p",[s._v("单体架构不推荐，分布式架构和微服务架构整体类似，我们下文主要以讲解分布式架构为主。")]),s._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("支持多种部署方式，可任选其一")]),s._v(" "),t("ul",[t("li",[s._v("Jar：支持直接运行jar")]),s._v(" "),t("li",[s._v("War：支持war包放到Tomcat/WebLogic等容器中")]),s._v(" "),t("li",[s._v("Maven：支持将虾婆通过maven或gradle方式集成到现有项目中, "),t("a",{attrs:{href:"https://mvnrepository.com/artifact/io.xiaper",target:"_blank",rel:"noopener noreferrer"}},[s._v("maven"),t("OutboundLink")],1)]),s._v(" "),t("li",[s._v("Docker：支持docker部署 TODO")])])]),s._v(" "),t("h4",{attrs:{id:"安装jdk8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装jdk8","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装"),t("a",{attrs:{href:"https://github.com/Bytedesk/bytedesk-server/wiki/java",target:"_blank",rel:"noopener noreferrer"}},[s._v("jdk8"),t("OutboundLink")],1)]),s._v(" "),t("h4",{attrs:{id:"下载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载","aria-hidden":"true"}},[s._v("#")]),s._v(" "),t("a",{attrs:{href:"https://github.com/Bytedesk/bytedesk-server/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("下载"),t("OutboundLink")],1)]),s._v(" "),t("h4",{attrs:{id:"解压"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解压","aria-hidden":"true"}},[s._v("#")]),s._v(" 解压")]),s._v(" "),t("p",[s._v("目录结构")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v("\n├─ README.md\n├─ config\n│  └─ application.properties\n├─ start.sh\n└─ xiaper-spring-boot-sample-webmvc-2.1.5-SNAPSHOT.jar\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h4",{attrs:{id:"修改配置config-application-properties，将以下值均修改为自定义服务器配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改配置config-application-properties，将以下值均修改为自定义服务器配置","aria-hidden":"true"}},[s._v("#")]),s._v(" 修改配置config/application.properties，将以下值均修改为自定义服务器配置")]),s._v(" "),t("ul",[t("li",[s._v("MySQL")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mysql 5.7")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#spring.datasource.driver-class-name=com.mysql.jdbc.Driver")]),s._v("\nspring.datasource.url"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("jdbc:mysql://localhost:3306/数据库名?autoReconnect"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("characterEncoding"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("useSSL"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("serverTimezone"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("GMT%2B8\nspring.datasource.username"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root\nspring.datasource.password"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("ul",[t("li",[s._v("Redis")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redis缓存")]),s._v("\nspring.cache.type"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Redis\nspring.redis.database"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("0\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Redis服务器地址")]),s._v("\nspring.redis.host"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Redis服务器连接端口")]),s._v("\nspring.redis.port"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("6379\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Redis服务器连接密码（默认为空）")]),s._v("\nspring.redis.password"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("ul",[t("li",[s._v("上传文件")])]),s._v(" "),t("p",[s._v("支持服务器本地存储、阿里云OSS、腾讯云对象存储三种存储方式，其中本地存储不支持集群，下面说明以腾讯云为例")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 腾讯云cos")]),s._v("\nupload.type"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("tencent\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建bucket并需要在此bucket下创建文件夹：apns/development(二级文件夹), apns/production(二级文件夹), avatars, images, voices, files")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 存储桶所属地域")]),s._v("\ntencent.bucket.location"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 存储桶名称")]),s._v("\ntencent.bucket.name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 访问域名")]),s._v("\ntencent.bucket.domain"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#API密钥管理获取")]),s._v("\ntencent.appid"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\ntencent.secretid"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\ntencent.secretkey"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("ul",[t("li",[s._v("RabbitMQ")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("spring.rabbitmq.host"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("127.0.0.1\nspring.rabbitmq.port"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("5672\nspring.rabbitmq.username"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("用户名\nspring.rabbitmq.password"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("密码\nspring.rabbitmq.stomp.port"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("61613\nspring.rabbitmq.stomp.login"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("stomp_web\nspring.rabbitmq.stomp.passcode"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("stomp_web\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("ul",[t("li",[s._v("ZooKeeper")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("zk.url"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("127.0.0.1:2181\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("上传到服务器")]),s._v(" "),t("li",[s._v("修改start.sh权限为可执行权限，如：")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" 777 start.sh\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("启动：")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("./start.sh\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("查看是否启动成功")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("方法1：\n  等待5分钟后，执行 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -ntlp, 查看8000端口号是否启动，如有，则启动成功\n\n方法2：\n  浏览器中输入 http://ip:8000/hello 查看是否有返回，如有，则启动成功\n\n其中：ip为此台服务器地址\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h4",{attrs:{id:"修改nginx负载均衡配置，指向此服务器地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改nginx负载均衡配置，指向此服务器地址","aria-hidden":"true"}},[s._v("#")]),s._v(" 修改nginx负载均衡配置，指向此服务器地址")]),s._v(" "),t("p",[s._v("客户端均通过nginx访问rest接口，nginx需要支持https和websocket, 具体可参考"),t("router-link",{attrs:{to:"/component/nginx.html"}},[s._v("Nginx")])],1),s._v(" "),t("h4",{attrs:{id:"如需配置集群，可在多台机器上重复上述步骤即可"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如需配置集群，可在多台机器上重复上述步骤即可","aria-hidden":"true"}},[s._v("#")]),s._v(" 如需配置集群，可在多台机器上重复上述步骤即可")]),s._v(" "),t("h4",{attrs:{id:"集群扩容，可在新增机器上重复上述步骤即可"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集群扩容，可在新增机器上重复上述步骤即可","aria-hidden":"true"}},[s._v("#")]),s._v(" 集群扩容，可在新增机器上重复上述步骤即可")]),s._v(" "),t("h4",{attrs:{id:"后续新版升级步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#后续新版升级步骤","aria-hidden":"true"}},[s._v("#")]),s._v(" 后续新版升级步骤")]),s._v(" "),t("p",[s._v("注意：为了不影响集群整体可用性，建议一台一台升级，也即只有第一台升级成功之后，再按照下述步骤升级第二台")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("查看进程：netstat -ntlp，找到8000对应进程号\n杀掉进程：kill -9 进程号\n上传新版：jar文件\n启动：./start.sh\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"安卓端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安卓端","aria-hidden":"true"}},[s._v("#")]),s._v(" 安卓端")]),s._v(" "),t("ul",[t("li",[s._v("参考demo中：自定义服务器")]),s._v(" "),t("li",[s._v("REST服务器为nginx地址")]),s._v(" "),t("li",[s._v("其中消息服务器地址为RabbitMQ服务器地址, 如搭建有haproxy则填写haproxy地址")])]),s._v(" "),t("h3",{attrs:{id:"ios端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ios端","aria-hidden":"true"}},[s._v("#")]),s._v(" iOS端")]),s._v(" "),t("ul",[t("li",[s._v("参考demo中：自定义服务器")]),s._v(" "),t("li",[s._v("REST服务器为nginx地址")]),s._v(" "),t("li",[s._v("其中消息服务器地址为RabbitMQ服务器地址, 如搭建有haproxy则填写haproxy地址")])]),s._v(" "),t("h3",{attrs:{id:"web端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#web端","aria-hidden":"true"}},[s._v("#")]),s._v(" web端")]),s._v(" "),t("ul",[t("li",[s._v("修改js/data.js中默认HOST地址为nginx地址")])])])},[],!1,null,null,null);a.default=r.exports}}]);