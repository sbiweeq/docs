# ElasticSearch

::: tip
可选组件
用途：

* 日志管理
:::

## 安装

<!-- * [下载](https://www.elastic.co/downloads/elasticsearch) -->
* [下载v6.2](https://www.elastic.co/guide/en/elasticsearch/reference/6.2/zip-targz.html)

解压

```bash
unzip elasticsearch-6.2.4.zip
```

默认elasticsearch禁止root运行, 所有需要添加用户

```bash
groupadd elsearch
useradd elsearch -g elsearch -p elasticsearch
```

更改文件夹及内部文件的所属用户及组为elsearch:elsearch

```bash
chown -R elsearch:elsearch elasticsearch-6.2.4
```

如果默认目录为/root/elasticsearch-6.2.4/, 需要迁移到/home/elasticsearch-6.2.4/

```bash
cd /home
mv /root/elasticsearch-6.2.4/ .
cd elasticsearch-6.2.4/
```

修改 max file descriptors

```bash
su root
vi /etc/security/limits.conf
# 文件末尾添加
elsearch soft nofile 65536
elsearch hard nofile 65536
```

修改 max_map_count

```bash
vi /etc/sysctl.conf
# 添加下面配置：
vm.max_map_count=655360
# 并执行命令：
sysctl -p
```

开启远程访问

```bash
vi config/elasticsearch.yml
# 修改为
cluster.name: elasticsearch
network.host: 0.0.0.0
# node.name: node-1
# discovery.seed_hosts: ["127.0.0.1", "[::1]"]
# cluster.initial_master_nodes: ["node-1"]
# 开启跨域访问支持，默认为false（可选）
# http.cors.enabled: true
# 跨域访问允许的域名地址，(允许所有域名)以上使用正则（可选）
# http.cors.allow-origin: /.*/
```

用户授权

```bash
# 配置远程访问用户名/密码
```

切换到elsearch用户，并启动

```bash
su elsearch
# 前台启动：
./bin/elasticsearch
# 后台启动：
./bin/elasticsearch -d
# 退出
exit
```

浏览器中打开

```bash
# 其中：127.0.0.1替换为真实服务器ip
http://127.0.0.1:9200/
# 端口9200用于rest api接口，9300用于集群结点之间通信
```

## 配置

项目pom.xml中添加

```bash
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-elasticsearch</artifactId>
</dependency>
```

项目application.properties中添加

```bash
spring.data.elasticsearch.cluster-name=elasticsearch
spring.data.elasticsearch.repositories.enabled=true
spring.data.elasticsearch.cluster-nodes=127.0.0.1:9300
```

## 参考
