webpackJsonp([2],{124:function(t,e,n){n(159);var i=n(60)(n(144),n(167),null,null);t.exports=i.exports},127:function(t,e,n){t.exports={default:n(129),__esModule:!0}},128:function(t,e,n){"use strict";e.__esModule=!0;var i=n(127),a=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default=a.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}},129:function(t,e,n){n(131),t.exports=n(2).Object.assign},130:function(t,e,n){"use strict";var i=n(15),a=n(35),r=n(22),o=n(36),s=n(63),c=Object.assign;t.exports=!c||n(11)(function(){var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=i})?function(t,e){for(var n=o(t),c=arguments.length,u=1,l=a.f,d=r.f;c>u;)for(var m,f=s(arguments[u++]),p=l?i(f).concat(l(f)):i(f),h=p.length,g=0;h>g;)d.call(f,m=p[g++])&&(n[m]=f[m]);return n}:c},131:function(t,e,n){var i=n(9);i(i.S+i.F,"Object",{assign:n(130)})},132:function(t,e,n){"use strict";n.d(e,"n",function(){return c}),n.d(e,"o",function(){return u}),n.d(e,"m",function(){return l}),n.d(e,"l",function(){return d}),n.d(e,"k",function(){return m}),n.d(e,"g",function(){return f}),n.d(e,"j",function(){return p}),n.d(e,"h",function(){return h}),n.d(e,"i",function(){return g}),n.d(e,"c",function(){return b}),n.d(e,"e",function(){return v}),n.d(e,"f",function(){return x}),n.d(e,"d",function(){return w}),n.d(e,"a",function(){return y}),n.d(e,"b",function(){return _});var i=n(37),a=n.n(i),r=n(66),o=n(38),s=function(t){return new a.a(function(e,n){999==t.code?o.a.push("/"):e(t)})},c=function(t){return n.i(r.a)("/waibao/entity/cixi_list",t,"POST").then(s)},u=function(t){return n.i(r.a)("/waibao/entity/cixi_edit",t,"POST").then(s)},l=function(t){return n.i(r.a)("/waibao/entity/categories",t,"POST").then(s)},d=function(t){return n.i(r.a)("//yixsu.com/public/index.php/ADMINAPIManagerrecommend/managerrecommend/tmp_add",t,"POST")},m=function(t){return n.i(r.a)("//yixsu.com/public/index.php/ADMINAPI/managerrecommend/cache_data",t,"POST")},f=function(t){return n.i(r.a)("/managerrecommend/template/index",t,"POST").then(s)},p=function(t){return n.i(r.a)("/managerrecommend/template/info",t,"POST").then(s)},h=function(t){return n.i(r.a)("/managerrecommend/template/verify",t,"POST").then(s)},g=function(t){return n.i(r.a)("/managerrecommend/template/del",t,"POST").then(s)},b=function(t){return n.i(r.a)("/managerrecommend/user/index",t,"POST").then(s)},v=function(t){return n.i(r.a)("/managerrecommend/user/verify",t,"POST").then(s)},x=function(t){return n.i(r.a)("/managerrecommend/user/del",t,"POST").then(s)},w=function(t){return n.i(r.a)("/managerrecommend/user/vip_extend",t,"POST").then(s)},y=function(t){return n.i(r.a)("/managerrecommend/account/index",t,"POST").then(s)},_=function(t){return n.i(r.a)("/managerrecommend/account/cash_out",t,"POST").then(s)}},133:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(34),a=n.n(i),r=n(33),o=n.n(r),s=n(128),c=n.n(s),u=(n(61),n(65)),l=n(64),d=n(62),m=n(136),f=n.n(m);e.default={data:function(){return{baseImgPath:u.b,avatar:f.a}},created:function(){this.adminInfo.id},computed:c()({},n.i(l.b)(["adminInfo"])),methods:c()({},n.i(l.c)(["getAdminData"]),{handleCommand:function(t){var e=this;return o()(a.a.mark(function i(){return a.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:"home"==t?e.$router.push("/manage"):"singout"==t&&(n.i(d.b)("token"),e.$message({type:"success",message:"退出成功"}),e.$router.push("/"));case 1:case"end":return i.stop()}},i,e)}))()}})}},134:function(t,e,n){e=t.exports=n(117)(!1),e.push([t.i,".allcover{position:absolute;top:0;right:0}.ctt{left:50%;transform:translate(-50%,-50%)}.ctt,.tb{position:absolute;top:50%}.tb{transform:translateY(-50%)}.lr{position:absolute;left:50%;transform:translateX(-50%)}.header_container{background-color:#eff2f7;height:60px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;padding-left:20px}.avator{width:36px;height:36px;border-radius:50%;margin-right:37px}.el-dropdown-menu__item{text-align:center}",""])},135:function(t,e,n){var i=n(134);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(118)("4235c525",i,!0)},136:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEvElEQVRYR+2WbVBUVRjH/+feZZddWFgWWDbCoFBeR94MccZ0GCmnGsKwwB0JB3UaXhqSMm2GRmWUmkwLiimxwpBmbIMmAXXKMcvJQHwhBXnZhnDQVQQEXGRZdmHvnuZuwqDswvJFv/B8u3Of8z+/+T/Pc84heMxBHvP+mAd4FA4oWKnnQa+o52Oki2KFsmcT1Jdyot+ZKP2jAPg6anf1Kq9liYGmji50HStCYObuwjPJnjt4iBkBqEoZAIaVkSO3rthqVt0beTEWhpXIKz79y14zuwSEqaMLT6yzcOMQuntDd/5PGA23/9F8nhViE4D2RLgQZfMI/5NmyGTWpHKdztYGwym53maWdfFQF3fZA3By86p4rqwj/d7NFgjFHtBrroBIxeeb97y2bBoA7VgogkkYCZYRkNCWehuiUQB4qCEAbQBMEzm0PSSAhGomQWjFewqyYX8fAJXPitcz/VXb4scG+9D9y2FLZEHVklOridXVaSWg7SFBkDjdIf5X704BWOckQIFcxorCFzkbFiuFMku/RVLXZeRkIpwLYE1pZbWhCSS4vdrqXNl233EG24QbP5lothBpYMxmz+gXpObU/Pybqe6DjjYhC+CHiGCR7x/fPx0hkwqkk1A6DpZ6E4416FFy6d7Y1li3pMTKvpNzPdgmHQiuoVJ21LK+TcUevC/CAFDvyVN45mcqVtkUphS4Zsa1X/VY//MdfPmifOPSQz3lc4F4oAThlTSsNZXwteUjOz5WvPx0RWCaXUEeYJyCVo3iwi0jPmsYslStlQWQD7u1jkLYHUMnAZqHGsOVIiHxnk2M1owAwxRvnxyAKkJSvfJQb/Jsa6b1AFUt8CVqbff9H9FxkZKP69XPrHZIaIyC/jSC+hsmnNWOmvNX6kSkAJaH19LWcFcwXDAJ1TTaAFAGEHXPxBip3s3wTNz3/hP27X9IndYaMNBrRv7vd/Hty3Jf8tH129aJ2PFUODQ3NKQKHNUE+4I6xZDQluOzTcGbe7Z4x+Vn+Wy2ilCKrF3d2LddCTdXfjCmBz1ugHGAw6bafvy4Vr6QFGo7HXHPXg8kvxIvXV59wH+rVcQIlB4dQFqSDFKX/wH+vW7CuSsGpK/xsH7TqhFc7zOj5OIQilaIXcn+XutpOls8AEArc1xJ6ld6AL5iZ6ZYfzksBaDAVQZYTDFqtEDszE8n0NJhRM1v9/BBtgLQcaAnjChvGoaAoCOjtj+IzwlVc1sYhjk1ZbKm8cx0GZ1tPBrYHxUifnVi1c6iHlSqdSgtWYD4pS7ATQB+AG0wAZ1mvHSkB98lyTf6Fd+yngXhlVTemkomTz1bbswEkMAw+GKoMcxL4swo+MUcR1H3twFxkWKIhIwVgArMwGkTyi4Pg6OWtuylg4ttTYC9Usz2Hsh1l7IbtGeCPFwkbOC0sdKOA3UmlF4YxoCJ69wZK19C9l7jLyqHYzYAXmgTAXalr5FpC/MU/k8qhX58zceaxtB00YC9DUMmpYQ5fOCiPtPhXackOgLAp/sDyAEQ7ewENx83gUw/yumHjbRyzIJvAEy9OefE4SjAnETnkjwPMNWBtwCkAMgFwHd83lystJHL3ysFAPgzIQNA8f3nXPzU3PkSzDvwH1iQrTBfEt9eAAAAAElFTkSuQmCC"},137:function(t,e,n){n(135);var i=n(60)(n(133),n(138),null,null);t.exports=i.exports},138:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header_container"},[n("el-breadcrumb",{attrs:{separator:"/"}},[n("el-breadcrumb-item",{attrs:{to:{path:"/manage"}}},[t._v("首页")]),t._v(" "),t._l(t.$route.meta,function(e,i){return n("el-breadcrumb-item",{key:e},[t._v(t._s(e))])})],2),t._v(" "),n("el-dropdown",{attrs:{"menu-align":"start"},on:{command:t.handleCommand}},[n("img",{staticClass:"avator",attrs:{src:t.avatar}}),t._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"singout"}},[t._v("退出")])],1)],1)],1)},staticRenderFns:[]}},144:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(137),a=n.n(i),r=n(132);e.default={data:function(){return{loadingBtn:-1,tableData:[],limit:10,count:0,currentPage:1,remark:"",choose_categories:[],categories:[{id:1,name:"限时抢购"},{id:2,name:"砍价"},{id:3,name:"集赞"},{id:4,name:"投票"},{id:5,name:"图文"}],title:""}},components:{headTop:a.a},created:function(){this.list()},mounted:function(){},beforeRouteEnter:function(t,e,n){n(function(t){t.list()})},methods:{list:function(){n.i(r.g)({page:this.currentPage,page_size:this.limit,cate_ids:this.choose_categories,title:this.title}).then(function(t){t.code==this.$store.state.constant.status_success&&(this.tableData=t.data.list,this.count=parseInt(t.data.count))}.bind(this))},handleCurrentChange:function(t){this.currentPage=t,this.list()},goto_edit:function(t){this.$router.push({path:"managerrecommend_template",query:{id:t}})},search:function(){this.currentPage=1,this.list()},verify:function(t,e){this.$confirm("确认此操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var i=t.row;this.loadingBtn=t.$index,n.i(r.h)({id:i.id,status:e}).then(function(t){t.code==this.$store.state.constant.status_success?(i.status=e,this.$message({type:"success",message:"操作成功"})):this.$message({type:"warning",message:t.msg})}.bind(this)).finally(function(){console.log(1),this.loadingBtn=-1}.bind(this))}.bind(this))},del:function(t,e){this.$confirm("此操作将永久删除该条模板数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){n.i(r.i)({id:t.id}).then(function(t){t.code==this.$store.state.constant.status_success?(this.tableData.splice(e,1),this.$message({type:"success",message:"操作成功"})):this.$message({type:"warning",message:t.msg})}.bind(this))}.bind(this))}}}},151:function(t,e,n){e=t.exports=n(117)(!1),e.push([t.i,".allcover{position:absolute;top:0;right:0}.ctt{left:50%;transform:translate(-50%,-50%)}.ctt,.tb{position:absolute;top:50%}.tb{transform:translateY(-50%)}.lr{position:absolute;left:50%;transform:translateX(-50%)}.table_container{padding:20px}.demo-table-expand{font-size:0}.demo-table-expand label{width:90px;color:#99a9bf}.demo-table-expand .el-form-item{margin-right:0;margin-bottom:0;width:50%}",""])},159:function(t,e,n){var i=n(151);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(118)("4774be9c",i,!0)},167:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fillcontain"},[n("head-top"),t._v(" "),n("div",{staticClass:"table_container",staticStyle:{"padding-bottom":"0"}},[n("el-select",{attrs:{multiple:"",placeholder:"请选择分类"},model:{value:t.choose_categories,callback:function(e){t.choose_categories=e},expression:"choose_categories"}},t._l(t.categories,function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),t._v(" "),n("el-input",{staticStyle:{display:"inline-block",width:"250px"},attrs:{placeholder:"标题",clearable:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),n("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.search}},[t._v("搜索")])],1),t._v(" "),n("div",{staticClass:"table_container"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[n("el-table-column",{attrs:{label:"标题",prop:"title"}}),t._v(" "),n("el-table-column",{attrs:{label:"封面"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("img",{attrs:{src:t.row.img,width:"40",height:"40"}})]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini"},on:{click:function(n){t.goto_edit(e.row.id)}}},[t._v("编辑")]),t._v(" "),1==e.row.status?n("el-button",{attrs:{size:"mini",loading:t.loadingBtn==e.$index},on:{click:function(n){t.verify(e,0)}}},[t._v("下架")]):t._e(),t._v(" "),0==e.row.status?n("el-button",{attrs:{size:"mini",loading:t.loadingBtn==e.$index},on:{click:function(n){t.verify(e,1)}}},[t._v("上架")]):t._e(),t._v(" "),n("el-button",{attrs:{size:"mini"},on:{click:function(n){t.del(e.row,e.$index)}}},[t._v("删除")]),t._v(" "),n("el-popover",{attrs:{placement:"bottom",title:"",width:"200",trigger:"click"}},[n("img",{attrs:{src:"http://api.yixsu.com/index.php/waibao/common/qrcode?text=https://api.yixsu.com/wechat_qrcode_linkrelation/tmp_make?id="+e.row.id}}),t._v(" "),n("el-button",{attrs:{slot:"reference",size:"mini",type:"warning"},slot:"reference"},[t._v("获取二维码")])],1)]}}])})],1),t._v(" "),n("div",{staticClass:"Pagination",staticStyle:{"text-align":"left","margin-top":"10px"}},[n("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":t.limit,layout:"total, prev, pager, next",total:t.count,background:""},on:{"current-change":t.handleCurrentChange}})],1)],1)],1)},staticRenderFns:[]}}});