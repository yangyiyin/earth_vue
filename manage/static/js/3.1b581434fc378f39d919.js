webpackJsonp([3],{123:function(t,e,a){a(162);var i=a(60)(a(143),a(170),null,null);t.exports=i.exports},127:function(t,e,a){t.exports={default:a(129),__esModule:!0}},128:function(t,e,a){"use strict";e.__esModule=!0;var i=a(127),s=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default=s.default||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t}},129:function(t,e,a){a(131),t.exports=a(2).Object.assign},130:function(t,e,a){"use strict";var i=a(15),s=a(35),n=a(22),r=a(36),c=a(63),l=Object.assign;t.exports=!l||a(11)(function(){var t={},e={},a=Symbol(),i="abcdefghijklmnopqrst";return t[a]=7,i.split("").forEach(function(t){e[t]=t}),7!=l({},t)[a]||Object.keys(l({},e)).join("")!=i})?function(t,e){for(var a=r(t),l=arguments.length,o=1,p=s.f,d=n.f;l>o;)for(var u,m=c(arguments[o++]),_=p?i(m).concat(p(m)):i(m),h=_.length,v=0;h>v;)d.call(m,u=_[v++])&&(a[u]=m[u]);return a}:l},131:function(t,e,a){var i=a(9);i(i.S+i.F,"Object",{assign:a(130)})},132:function(t,e,a){"use strict";a.d(e,"n",function(){return l}),a.d(e,"o",function(){return o}),a.d(e,"m",function(){return p}),a.d(e,"l",function(){return d}),a.d(e,"k",function(){return u}),a.d(e,"g",function(){return m}),a.d(e,"j",function(){return _}),a.d(e,"h",function(){return h}),a.d(e,"i",function(){return v}),a.d(e,"c",function(){return f}),a.d(e,"e",function(){return x}),a.d(e,"f",function(){return g}),a.d(e,"d",function(){return b}),a.d(e,"a",function(){return y}),a.d(e,"b",function(){return k});var i=a(37),s=a.n(i),n=a(66),r=a(38),c=function(t){return new s.a(function(e,a){999==t.code?r.a.push("/"):e(t)})},l=function(t){return a.i(n.a)("/waibao/entity/cixi_list",t,"POST").then(c)},o=function(t){return a.i(n.a)("/waibao/entity/cixi_edit",t,"POST").then(c)},p=function(t){return a.i(n.a)("/waibao/entity/categories",t,"POST").then(c)},d=function(t){return a.i(n.a)("//yixsu.com/public/index.php/ADMINAPIManagerrecommend/managerrecommend/tmp_add",t,"POST")},u=function(t){return a.i(n.a)("//yixsu.com/public/index.php/ADMINAPI/managerrecommend/cache_data",t,"POST")},m=function(t){return a.i(n.a)("/managerrecommend/template/index",t,"POST").then(c)},_=function(t){return a.i(n.a)("/managerrecommend/template/info",t,"POST").then(c)},h=function(t){return a.i(n.a)("/managerrecommend/template/verify",t,"POST").then(c)},v=function(t){return a.i(n.a)("/managerrecommend/template/del",t,"POST").then(c)},f=function(t){return a.i(n.a)("/managerrecommend/user/index",t,"POST").then(c)},x=function(t){return a.i(n.a)("/managerrecommend/user/verify",t,"POST").then(c)},g=function(t){return a.i(n.a)("/managerrecommend/user/del",t,"POST").then(c)},b=function(t){return a.i(n.a)("/managerrecommend/user/vip_extend",t,"POST").then(c)},y=function(t){return a.i(n.a)("/managerrecommend/account/index",t,"POST").then(c)},k=function(t){return a.i(n.a)("/managerrecommend/account/cash_out",t,"POST").then(c)}},133:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(34),s=a.n(i),n=a(33),r=a.n(n),c=a(128),l=a.n(c),o=(a(61),a(65)),p=a(64),d=a(62),u=a(136),m=a.n(u);e.default={data:function(){return{baseImgPath:o.b,avatar:m.a}},created:function(){this.adminInfo.id},computed:l()({},a.i(p.b)(["adminInfo"])),methods:l()({},a.i(p.c)(["getAdminData"]),{handleCommand:function(t){var e=this;return r()(s.a.mark(function i(){return s.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:"home"==t?e.$router.push("/manage"):"singout"==t&&(a.i(d.b)("token"),e.$message({type:"success",message:"退出成功"}),e.$router.push("/"));case 1:case"end":return i.stop()}},i,e)}))()}})}},134:function(t,e,a){e=t.exports=a(117)(!1),e.push([t.i,".allcover{position:absolute;top:0;right:0}.ctt{left:50%;transform:translate(-50%,-50%)}.ctt,.tb{position:absolute;top:50%}.tb{transform:translateY(-50%)}.lr{position:absolute;left:50%;transform:translateX(-50%)}.header_container{background-color:#eff2f7;height:60px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;padding-left:20px}.avator{width:36px;height:36px;border-radius:50%;margin-right:37px}.el-dropdown-menu__item{text-align:center}",""])},135:function(t,e,a){var i=a(134);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(118)("4235c525",i,!0)},136:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEvElEQVRYR+2WbVBUVRjH/+feZZddWFgWWDbCoFBeR94MccZ0GCmnGsKwwB0JB3UaXhqSMm2GRmWUmkwLiimxwpBmbIMmAXXKMcvJQHwhBXnZhnDQVQQEXGRZdmHvnuZuwqDswvJFv/B8u3Of8z+/+T/Pc84heMxBHvP+mAd4FA4oWKnnQa+o52Oki2KFsmcT1Jdyot+ZKP2jAPg6anf1Kq9liYGmji50HStCYObuwjPJnjt4iBkBqEoZAIaVkSO3rthqVt0beTEWhpXIKz79y14zuwSEqaMLT6yzcOMQuntDd/5PGA23/9F8nhViE4D2RLgQZfMI/5NmyGTWpHKdztYGwym53maWdfFQF3fZA3By86p4rqwj/d7NFgjFHtBrroBIxeeb97y2bBoA7VgogkkYCZYRkNCWehuiUQB4qCEAbQBMEzm0PSSAhGomQWjFewqyYX8fAJXPitcz/VXb4scG+9D9y2FLZEHVklOridXVaSWg7SFBkDjdIf5X704BWOckQIFcxorCFzkbFiuFMku/RVLXZeRkIpwLYE1pZbWhCSS4vdrqXNl233EG24QbP5lothBpYMxmz+gXpObU/Pybqe6DjjYhC+CHiGCR7x/fPx0hkwqkk1A6DpZ6E4416FFy6d7Y1li3pMTKvpNzPdgmHQiuoVJ21LK+TcUevC/CAFDvyVN45mcqVtkUphS4Zsa1X/VY//MdfPmifOPSQz3lc4F4oAThlTSsNZXwteUjOz5WvPx0RWCaXUEeYJyCVo3iwi0jPmsYslStlQWQD7u1jkLYHUMnAZqHGsOVIiHxnk2M1owAwxRvnxyAKkJSvfJQb/Jsa6b1AFUt8CVqbff9H9FxkZKP69XPrHZIaIyC/jSC+hsmnNWOmvNX6kSkAJaH19LWcFcwXDAJ1TTaAFAGEHXPxBip3s3wTNz3/hP27X9IndYaMNBrRv7vd/Hty3Jf8tH129aJ2PFUODQ3NKQKHNUE+4I6xZDQluOzTcGbe7Z4x+Vn+Wy2ilCKrF3d2LddCTdXfjCmBz1ugHGAw6bafvy4Vr6QFGo7HXHPXg8kvxIvXV59wH+rVcQIlB4dQFqSDFKX/wH+vW7CuSsGpK/xsH7TqhFc7zOj5OIQilaIXcn+XutpOls8AEArc1xJ6ld6AL5iZ6ZYfzksBaDAVQZYTDFqtEDszE8n0NJhRM1v9/BBtgLQcaAnjChvGoaAoCOjtj+IzwlVc1sYhjk1ZbKm8cx0GZ1tPBrYHxUifnVi1c6iHlSqdSgtWYD4pS7ATQB+AG0wAZ1mvHSkB98lyTf6Fd+yngXhlVTemkomTz1bbswEkMAw+GKoMcxL4swo+MUcR1H3twFxkWKIhIwVgArMwGkTyi4Pg6OWtuylg4ttTYC9Usz2Hsh1l7IbtGeCPFwkbOC0sdKOA3UmlF4YxoCJ69wZK19C9l7jLyqHYzYAXmgTAXalr5FpC/MU/k8qhX58zceaxtB00YC9DUMmpYQ5fOCiPtPhXackOgLAp/sDyAEQ7ewENx83gUw/yumHjbRyzIJvAEy9OefE4SjAnETnkjwPMNWBtwCkAMgFwHd83lystJHL3ysFAPgzIQNA8f3nXPzU3PkSzDvwH1iQrTBfEt9eAAAAAElFTkSuQmCC"},137:function(t,e,a){a(135);var i=a(60)(a(133),a(138),null,null);t.exports=i.exports},138:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header_container"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/manage"}}},[t._v("首页")]),t._v(" "),t._l(t.$route.meta,function(e,i){return a("el-breadcrumb-item",{key:e},[t._v(t._s(e))])})],2),t._v(" "),a("el-dropdown",{attrs:{"menu-align":"start"},on:{command:t.handleCommand}},[a("img",{staticClass:"avator",attrs:{src:t.avatar}}),t._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"singout"}},[t._v("退出")])],1)],1)],1)},staticRenderFns:[]}},143:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(137),s=a.n(i),n=a(132);e.default={data:function(){return{loading:!1,id:0,activeName:"first",blocks:[{id:2,name:"砍价"},{id:7,name:"预约报名"},{id:3,name:"集赞"},{id:4,name:"投票"},{id:5,name:"图文"}],type:1,title:"",img:"",tmp_data:{height:"1000rpx",desc:"",bg:{src:""},music:{},time_limit_left:0,add_extra_img_max:2,add_extra_text_max:2,has_stock:!0,can_add_extra_img:!1,can_add_extra_text:!1,page:[{type:"text",text:"",src:"",is_available:!0,can_del_block:!1,style:""}]},types:["text","img","sign","timelimit","cutprice_btn","cutprice_price","praise","vote","fight_group"]}},components:{headTop:s.a},created:function(){},mounted:function(){},beforeRouteEnter:function(t,e,a){a(function(e){e.id=t.query.id?t.query.id:0,e.id?e.get_tmp_info():e.init()})},methods:{init:function(){this.activeName="first",this.type=1,this.title="",this.img="",this.tmp_data={height:"1000rpx",desc:"",bg:{src:""},music:{},time_limit_left:0,has_stock:!0,add_extra_img_max:2,add_extra_text_max:2,can_add_extra_img:!1,can_add_extra_text:!1,page:[{type:"text",text:"",src:"",is_available:!0,can_del_block:!1,style:""}]}},get_tmp_info:function(){a.i(n.j)({id:this.id}).then(function(t){t.code==this.$store.state.constant.status_success&&(this.activeName="first",this.type=parseInt(t.data.type),this.title=t.data.title,this.img=t.data.img,this.tmp_data=t.data.tmp_data)}.bind(this))},handleAvatarSuccess:function(t,e){this.img=t.data},beforeAvatarUpload:function(t){var e="image/jpeg"===t.type||"image/png"===t.type,a=t.size/1024/1024<2;return e||this.$message.error("图片格式只支持jpg和png!"),a||this.$message.error("图片大小不能超过 2MB!"),e&&a},handleAvatarSuccess2:function(t,e){this.tmp_data.bg.src=t.data},handleAvatarSuccess3:function(t,e,a){this.tmp_data.page[a].src=t.data},add_page_item:function(){var t={type:"text",text:"",src:"",is_available:!0,can_del_block:!1,style:""};this.tmp_data.page.push(t)},del_page_item:function(t){this.tmp_data.page.splice(t,1)},get_data:function(){a.i(n.k)({tmp_data:this.tmp_data}).then(function(t){t.success?this.$refs.iframe.src="http://yixsu.com/public/index.php/HomeManagerRecommend/Pages/index?is_preview=1":alert("上传失败!")}.bind(this),function(t){})},submit:function(){this.$confirm("此操作将保存模板数据到商店, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){if(!this.title)var t="请填写标题";if(!this.img)var t="请上传封面";if(t)return void this.$message({type:"warning",message:t});this.loading=!0,a.i(n.l)({id:this.id,type:this.type,title:this.title,img:this.img,tmp_data:this.tmp_data}).then(function(t){t.success?(this.$message({message:t.message,type:"success"}),this.$router.push({path:"managerrecommend_template_list",query:{}})):this.$message({message:t.message,type:"warning"})}.bind(this),function(t){})}.bind(this)).catch(function(){}).finally(function(){this.loading=!1}.bind(this))}}}},154:function(t,e,a){e=t.exports=a(117)(!1),e.push([t.i,".allcover{position:absolute;top:0;right:0}.ctt{left:50%;transform:translate(-50%,-50%)}.ctt,.tb{position:absolute;top:50%}.tb{transform:translateY(-50%)}.lr{position:absolute;left:50%;transform:translateX(-50%)}.search_item{margin-top:10px}.avatar-uploader .el-upload{border:1px dashed #d9d9d9;border-radius:6px;cursor:pointer;position:relative;overflow:hidden}.avatar-uploader .el-upload:hover{border-color:#409eff}.avatar-uploader-icon{font-size:28px;color:#8c939d;width:100px;height:100px;line-height:100px;text-align:center}.avatar{width:100px;height:100px;display:block}",""])},162:function(t,e,a){var i=a(154);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(118)("48d3d4e5",i,!0)},170:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fillcontain"},[a("head-top"),t._v(" "),[a("el-tabs",{staticStyle:{"margin-top":"10px"},attrs:{tabPosition:"left"},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"基本配置",name:"first"}},[[a("el-select",{attrs:{placeholder:"类型"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},t._l(t.blocks,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],t._v(" "),a("div",{staticClass:"search_item"},[a("el-input",{staticStyle:{width:"250px"},attrs:{clearable:"",placeholder:"请输入标题"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}},[a("template",{slot:"prepend"},[t._v("标题")])],2)],1),t._v(" "),a("div",{staticClass:"search_item"},[a("el-input",{staticStyle:{width:"250px"},attrs:{placeholder:"请输入描述",type:"textarea",rows:2},model:{value:t.tmp_data.desc,callback:function(e){t.$set(t.tmp_data,"desc",e)},expression:"tmp_data.desc"}},[a("template",{slot:"prepend"},[t._v("描述")])],2)],1),t._v(" "),a("div",{staticClass:"search_item"},[a("el-input",{staticStyle:{width:"250px"},attrs:{clearable:"",placeholder:"页面总高度"},model:{value:t.tmp_data.height,callback:function(e){t.$set(t.tmp_data,"height",e)},expression:"tmp_data.height"}},[a("template",{slot:"prepend"},[t._v("页面总高度")])],2)],1),t._v(" "),a("div",{staticClass:"search_item"},[a("el-input",{staticStyle:{width:"250px"},attrs:{clearable:"",placeholder:"活动限时秒数"},model:{value:t.tmp_data.time_limit_left,callback:function(e){t.$set(t.tmp_data,"time_limit_left",e)},expression:"tmp_data.time_limit_left"}},[a("template",{slot:"prepend"},[t._v("活动限时秒数")])],2)],1),t._v(" "),a("p",{staticClass:"search_item",staticStyle:{"font-size":"12px"}},[t._v("上传模板封面:")]),t._v(" "),a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"http://yixsu.com/public/index.php/ADMINAPI/img/upload","show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload}},[t.img?a("img",{staticClass:"avatar",attrs:{src:t.img}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),t._v(" "),a("p",{staticClass:"search_item",staticStyle:{"font-size":"12px"}},[t._v("上传背景图:")]),t._v(" "),a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"http://yixsu.com/public/index.php/ADMINAPI/img/upload","show-file-list":!1,"on-success":t.handleAvatarSuccess2,"before-upload":t.beforeAvatarUpload}},[t.tmp_data.bg.src?a("img",{staticClass:"avatar",attrs:{src:t.tmp_data.bg.src}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),t._v(" "),a("div",{staticClass:"search_item"},[[a("el-checkbox",{model:{value:t.tmp_data.has_stock,callback:function(e){t.$set(t.tmp_data,"has_stock",e)},expression:"tmp_data.has_stock"}},[t._v("是否有库存")])]],2),t._v(" "),a("div",{staticClass:"search_item"},[[a("el-checkbox",{model:{value:t.tmp_data.can_add_extra_img,callback:function(e){t.$set(t.tmp_data,"can_add_extra_img",e)},expression:"tmp_data.can_add_extra_img"}},[t._v("是否可增加图片")])]],2),t._v(" "),t.tmp_data.can_add_extra_img?a("div",{staticClass:"search_item"},[a("el-input",{staticStyle:{width:"250px"},attrs:{clearable:"",placeholder:"最多可增加图片数"},model:{value:t.tmp_data.add_extra_img_max,callback:function(e){t.$set(t.tmp_data,"add_extra_img_max",e)},expression:"tmp_data.add_extra_img_max"}},[a("template",{slot:"prepend"},[t._v("最多可增加图片数")])],2)],1):t._e(),t._v(" "),a("div",{staticClass:"search_item"},[[a("el-checkbox",{model:{value:t.tmp_data.can_add_extra_text,callback:function(e){t.$set(t.tmp_data,"can_add_extra_text",e)},expression:"tmp_data.can_add_extra_text"}},[t._v("是否可增加文本")])]],2),t._v(" "),t.tmp_data.can_add_extra_text?a("div",{staticClass:"search_item"},[a("el-input",{staticStyle:{width:"250px"},attrs:{clearable:"",placeholder:"最多可增加文本数"},model:{value:t.tmp_data.add_extra_text_max,callback:function(e){t.$set(t.tmp_data,"add_extra_text_max",e)},expression:"tmp_data.add_extra_text_max"}},[a("template",{slot:"prepend"},[t._v("最多可增加文本数")])],2)],1):t._e(),t._v(" "),a("el-button",{staticStyle:{width:"500px","margin-top":"10px","margin-bottom":"10px"},attrs:{type:"success"},on:{click:function(e){t.activeName="second"}}},[t._v("下一步")])],2),t._v(" "),a("el-tab-pane",{attrs:{label:"元素配置",name:"second"}},[t._l(t.tmp_data.page,function(e,i){return a("div",{staticStyle:{border:"1px dashed #c0a16b",width:"480px",padding:"10px",position:"relative","margin-top":"5px"}},[a("el-button",{staticStyle:{position:"absolute",right:"0",top:"0"},attrs:{type:"info",icon:"el-icon-close",circle:"",size:"mini"},on:{click:function(e){t.del_page_item(i)}}}),t._v(" "),[a("el-select",{attrs:{placeholder:"类型"},model:{value:e.type,callback:function(a){t.$set(e,"type",a)},expression:"item.type"}},t._l(t.types,function(t){return a("el-option",{key:t,attrs:{label:t,value:t}})}))],t._v(" "),"text"==e.type||"sign"==e.type?a("div",{staticClass:"search_item"},[a("el-input",{attrs:{placeholder:"文本内容",type:"textarea",rows:2},model:{value:e.text,callback:function(a){t.$set(e,"text",a)},expression:"item.text"}})],1):t._e(),t._v(" "),a("div",{staticClass:"search_item"},[a("el-input",{attrs:{placeholder:"样式style",type:"textarea",rows:2},model:{value:e.style,callback:function(a){t.$set(e,"style",a)},expression:"item.style"}})],1),t._v(" "),"vote"==e.type?a("div",{staticClass:"search_item"},[a("el-select",{attrs:{placeholder:"默认样式"},model:{value:e.style_type,callback:function(a){t.$set(e,"style_type",a)},expression:"item.style_type"}},t._l([{key:0,value:"默认样式"},{key:1,value:"样式1"}],function(t){return a("el-option",{key:t.key,attrs:{label:t.value,value:t.key}})}))],1):t._e(),t._v(" "),"vote"==e.type?a("div",{staticClass:"search_item"},[a("el-input",{staticStyle:{width:"250px"},attrs:{clearable:"",placeholder:"数量"},model:{value:e.vote_num,callback:function(a){t.$set(e,"vote_num",a)},expression:"item.vote_num"}},[a("template",{slot:"prepend"},[t._v("数量")])],2)],1):t._e(),t._v(" "),"fight_group"==e.type?a("div",{staticClass:"search_item"},[a("el-input",{staticStyle:{width:"250px"},attrs:{clearable:"",placeholder:"价格(元)"},model:{value:e.fight_group_price,callback:function(a){t.$set(e,"fight_group_price",a)},expression:"item.fight_group_price"}},[a("template",{slot:"prepend"},[t._v("价格(元)")])],2)],1):t._e(),t._v(" "),"quick_buy"==e.type?a("div",{staticClass:"search_item"},[a("el-input",{staticStyle:{width:"250px"},attrs:{clearable:"",placeholder:"价格(元)"},model:{value:e.quick_buy_price,callback:function(a){t.$set(e,"quick_buy_price",a)},expression:"item.quick_buy_price"}},[a("template",{slot:"prepend"},[t._v("价格(元)")])],2)],1):t._e(),t._v(" "),"fight_group"==e.type?a("div",{staticClass:"search_item"},[a("el-input",{staticStyle:{width:"250px"},attrs:{clearable:"",placeholder:"成团人数"},model:{value:e.fight_group_number,callback:function(a){t.$set(e,"fight_group_number",a)},expression:"item.fight_group_number"}},[a("template",{slot:"prepend"},[t._v("成团人数")])],2)],1):t._e(),t._v(" "),"cutprice_price"==e.type?a("div",{staticClass:"search_item"},[a("el-input",{staticStyle:{width:"250px"},attrs:{clearable:"",placeholder:"原价(元)"},model:{value:e.cutprice_price,callback:function(a){t.$set(e,"cutprice_price",a)},expression:"item.cutprice_price"}},[a("template",{slot:"prepend"},[t._v("原价(元)")])],2)],1):t._e(),t._v(" "),"cutprice_price"==e.type?a("div",{staticClass:"search_item"},[a("el-input",{staticStyle:{width:"250px"},attrs:{clearable:"",placeholder:"最大优惠金额(元)"},model:{value:e.cutprice_max_minus_price,callback:function(a){t.$set(e,"cutprice_max_minus_price",a)},expression:"item.cutprice_max_minus_price"}},[a("template",{slot:"prepend"},[t._v("最大优惠金额(元)")])],2)],1):t._e(),t._v(" "),"cutprice_price"==e.type?a("div",{staticClass:"search_item"},[a("el-input",{staticStyle:{width:"250px"},attrs:{clearable:"",placeholder:"平均每次可砍价(元)"},model:{value:e.cutprice_average_price,callback:function(a){t.$set(e,"cutprice_average_price",a)},expression:"item.cutprice_average_price"}},[a("template",{slot:"prepend"},[t._v("平均每次可砍价(元)")])],2)],1):t._e(),t._v(" "),"img"==e.type?a("div",{staticClass:"search_item"},[a("p",{staticStyle:{"font-size":"12px"}},[t._v("上传图片:")]),t._v(" "),a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"http://yixsu.com/public/index.php/ADMINAPI/img/upload","show-file-list":!1,"on-success":function(e,a){return t.handleAvatarSuccess3(e,a,i)},"before-upload":t.beforeAvatarUpload}},[e.src?a("img",{staticClass:"avatar",attrs:{src:e.src}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1):t._e(),t._v(" "),"img"==e.type?a("div",{staticClass:"search_item"},[a("el-input",{staticStyle:{width:"250px"},attrs:{clearable:"",placeholder:"宽度"},model:{value:e.width,callback:function(a){t.$set(e,"width",a)},expression:"item.width"}},[a("template",{slot:"prepend"},[t._v("宽度")])],2)],1):t._e(),t._v(" "),"img"==e.type?a("div",{staticClass:"search_item"},[a("el-input",{staticStyle:{width:"250px"},attrs:{clearable:"",placeholder:"高度"},model:{value:e.height,callback:function(a){t.$set(e,"height",a)},expression:"item.height"}},[a("template",{slot:"prepend"},[t._v("高度")])],2)],1):t._e(),t._v(" "),a("div",{staticClass:"search_item"},[[a("el-checkbox",{model:{value:e.is_available,callback:function(a){t.$set(e,"is_available",a)},expression:"item.is_available"}},[t._v("是否可用")])]],2),t._v(" "),a("div",{staticClass:"search_item"},[[a("el-checkbox",{model:{value:e.can_del_block,callback:function(a){t.$set(e,"can_del_block",a)},expression:"item.can_del_block"}},[t._v("能否删除")])]],2)],2)}),t._v(" "),a("el-button",{staticStyle:{width:"500px","margin-top":"10px","margin-bottom":"10px"},on:{click:t.add_page_item}},[t._v("+")]),t._v(" "),a("br"),t._v(" "),a("el-button",{staticStyle:{width:"500px","margin-bottom":"10px"},attrs:{type:"success",loading:t.loading},on:{click:t.submit}},[t._v("保存")])],2)],1)],t._v(" "),a("div",{staticStyle:{position:"fixed",top:"150px",right:"75px"}},[a("img",{staticStyle:{position:"absolute",width:"555px",right:"-120px",top:"-74px","z-index":"-1"},attrs:{src:"http://paz3jxo1v.bkt.clouddn.com/phone.png"}}),t._v(" "),a("iframe",{ref:"iframe",staticClass:"embed-responsive-item",staticStyle:{width:"298px",height:"524px"},attrs:{src:""}}),t._v(" "),a("br"),t._v(" "),a("el-button",{staticStyle:{color:"#fff","text-align":"center",width:"300px","margin-top":"80px"},attrs:{type:"warning"},on:{click:t.get_data}},[t._v("刷新预览")])],1)],2)},staticRenderFns:[]}}});