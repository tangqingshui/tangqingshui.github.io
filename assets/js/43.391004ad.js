(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{731:function(n,t,e){"use strict";e.r(t);var s=e(4),a=Object(s.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[n._v("相信大家使用Nginx部署自己的项目时，经常会发现一个问题，那就是中文文件无法访问的情况，这里我列出2中经常会出现的情况给大家讲解一下：")]),n._v(" "),e("h2",{attrs:{id:"一-nginx环境和服务器环境问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-nginx环境和服务器环境问题"}},[n._v("#")]),n._v(" 一.Nginx环境和服务器环境问题")]),n._v(" "),e("p",[n._v("1.确定你的Linux系统是UTF编码，Root登录SSH：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v(" env | grep LANG\n LANG = en_US . UTF - 8\n")])])]),e("p",[n._v("这里有问题 可以修改服务器 /etc/sysconfig/i18n")]),n._v(" "),e("blockquote",[e("p",[n._v('LANG="en_US.UTF-8"\nSYSFONT="latarcyrheb-sun16"')])]),n._v(" "),e("p",[n._v("把这个添加进去，然后保存重启。")]),n._v(" "),e("p",[n._v("这里木有问题的话（继续往下看）")]),n._v(" "),e("p",[n._v("在看看Nginx配置文件 nginx.conf文件\n找到对应的server")]),n._v(" "),e("blockquote",[e("p",[n._v("添加 “charset utf - 8 ; ”")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v(" server\n {\n listen 80 ;\n server_name xxxx . com ;\n index index . html index . htm index . php ;\n root html;\n charset utf - 8 ;   \n }\n")])])]),e("p",[n._v("到这里相信能解决大家百分之80左右的问题")]),n._v(" "),e("p",[n._v("下面给大家说一下第二种情况 。。。")]),n._v(" "),e("h2",{attrs:{id:"二-第二种情况大多数是上传的工具问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-第二种情况大多数是上传的工具问题"}},[n._v("#")]),n._v(" 二.第二种情况大多数是上传的工具问题")]),n._v(" "),e("p",[n._v("filezilla、ftp、winscp、xftp这类上传工具，上传文件名都不是默认的utf-8")]),n._v(" "),e("p",[n._v("所以这里我们就需要修改上传的配置选项，把utf-8的编码方式给勾上")]),n._v(" "),e("img",{attrs:{src:"https://www.zpzpup.com/assets/image/nginx/nginxerr01.png",alt:"nginx编码"}}),n._v(" "),e("p",[n._v("到这里就能解决百分百的问题了 嗯哼")])])}),[],!1,null,null,null);t.default=a.exports}}]);