(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{306:function(a,s,r){"use strict";r.r(s);var t=r(6),e=Object(t.a)({},function(){var a=this,s=a.$createElement,r=a._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"oracle"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#oracle","aria-hidden":"true"}},[a._v("#")]),a._v(" Oracle")]),a._v(" "),r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),r("p",[a._v("MySQL 和 Oracle 二选其一")])]),a._v(" "),r("h2",{attrs:{id:"spring-boot-配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot-配置","aria-hidden":"true"}},[a._v("#")]),a._v(" Spring Boot 配置")]),a._v(" "),r("p",[a._v("pom.xml添加配置:")]),a._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("dependency"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n  "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("groupId"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("com.oracle"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/groupId"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n  "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("artifactId"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("ojdbc7"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/artifactId"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n  "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("version"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("12.1.0.2"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/version"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("/dependency"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br")])]),r("p",[a._v("ojdbc7.jar存放在项目根目录，根目录执行下面命令:")]),a._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[a._v("mvn install:install-file -DgroupId"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("com.oracle -DartifactId"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("ojdbc7 -Dversion"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("12.1.0.2 -Dpackaging"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("jar -Dfile"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("ojdbc7.jar\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br")])]),r("p",[a._v("application.properties中配置数据源:")]),a._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[a._v("spring.datasource.url"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("jdbc:oracle:thin:@127.0.0.1:1521:xe\nspring.datasource.username"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("\nspring.datasource.password"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("\nspring.datasource.driver-class-name"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("oracle.jdbc.OracleDriver\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br")])]),r("h2",{attrs:{id:"支持jndi数据源"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#支持jndi数据源","aria-hidden":"true"}},[a._v("#")]),a._v(" 支持JNDI数据源")]),a._v(" "),r("p",[a._v("如果想使用Tomcat或者WebLogic的数据源，则不需要配置"),r("code",[a._v("spring.datasource.url")]),a._v("等参数，只需要配置"),r("code",[a._v("spring.datasource.jndi-name")]),a._v("为JNDI的name即可，如：")]),a._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[a._v("spring.datasource.jndi-name"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("java:jdbc/oracle\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br")])]),r("h2",{attrs:{id:"参考"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-sql.html#boot-features-connecting-to-a-jndi-datasource",target:"_blank",rel:"noopener noreferrer"}},[a._v("Connection to a JNDI DataSource"),r("OutboundLink")],1)])])])},[],!1,null,null,null);s.default=e.exports}}]);