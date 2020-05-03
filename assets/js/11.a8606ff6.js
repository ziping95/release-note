(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{236:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"基础命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基础命令"}},[s._v("#")]),s._v(" 基础命令")]),s._v(" "),t("h2",{attrs:{id:"判断文件-文件夹是否存在"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#判断文件-文件夹是否存在"}},[s._v("#")]),s._v(" 判断文件/文件夹是否存在")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#文件夹不存在则创建")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" -d "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/data/"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /data\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"文件夹已经存在"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#文件存在则删除")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" -f "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/data/filename"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"文件不存在"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -f /data/filename\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#判断文件夹是否存在")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -d "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/data/"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"文件夹存在"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"文件夹不存在"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#判断文件是否存在")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -f "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/data/filename"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"文件存在"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"文件不存在"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])])]),t("p",[s._v("test")]),s._v(" "),t("h2",{attrs:{id:"后台运行jar包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#后台运行jar包"}},[s._v("#")]),s._v(" 后台运行jar包")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" java -jar studentService-1.0-SNAPSHOT.jar "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" temp.txt "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("&： 指在后台运行，nohup：是不挂断运行，即使退出终端依旧可以运行，但不是后台运行，所以退出当前进程后该进程就会被终止，所以需要添加 &")])]),s._v(" "),t("h2",{attrs:{id:"查看后台执行的作业"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看后台执行的作业"}},[s._v("#")]),s._v(" 查看后台执行的作业")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("jobs")]),s._v("\n")])])]),t("h2",{attrs:{id:"查看进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看进程"}},[s._v("#")]),s._v(" 查看进程")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -apn "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("                        查看某一端口上的进程\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -aux "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" PID                              查看某一进程详细信息\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" my_post "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -v grep`           查询某一进程\n")])])]),t("h2",{attrs:{id:"linux创建超链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux创建超链接"}},[s._v("#")]),s._v(" linux创建超链接")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ln -s /www/htdocs/webapps/zyjy_cbs webapp\n")])])]),t("h2",{attrs:{id:"更改用户组和权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更改用户组和权限"}},[s._v("#")]),s._v(" 更改用户组和权限")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chgrp")]),s._v(" 用户名  文件名  -R\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" 用户名  文件名  -R\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R whaty.whaty\n")])])]),t("h2",{attrs:{id:"在文件中检索内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在文件中检索内容"}},[s._v("#")]),s._v(" 在文件中检索内容")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -name "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\*.java"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" generateAndDownloadQrCode\n")])])]),t("h2",{attrs:{id:"查看磁盘大小"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看磁盘大小"}},[s._v("#")]),s._v(" 查看磁盘大小")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("df")]),s._v(" -H  系统路径大小\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("du")]),s._v(" -H  当前路径大小\n")])])]),t("h2",{attrs:{id:"打包-解包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打包-解包"}},[s._v("#")]),s._v(" 打包 / 解包")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zcvf 打包\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf 解包\n")])])]),t("h2",{attrs:{id:"查看linux版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看linux版本"}},[s._v("#")]),s._v(" 查看linux版本")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("lsb_release -a\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);