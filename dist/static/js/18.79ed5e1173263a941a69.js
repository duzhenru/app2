webpackJsonp([18,73],{94:function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=s(155),i=a(r);e.default={data:function(){return{data:{},items:[{cls:"icon-jiekuan",push:"/user/borrowList",tit:"我的借款"},{cls:"icon-huankuan",push:"/user/repayList",tit:"我的还款"},{cls:"icon-jiangli",push:"/user/rewardList",tit:"我的奖励"},{cls:"icon-help",push:"/user/helpList",tit:"帮助中心"},{cls:"icon-yijian",push:"/user/feedback",tit:"意见反馈"},{cls:"icon-about",push:"/user/aboutUs",tit:"关于我们"}]}},methods:{loginOut:function(){this.$router.push("/login")}},mounted:function(){this.data=i.default.data.userInfo}}},155:function(t,e){t.exports={data:{userInfo:{address:"1111",authMobile:1,authOcrIdCard:1,authOcrIdCardTime:"2016-11-07 16:51:35",authRongMobile:2,authRongTime:"2016-07-30 10:19:27",authTaobao:1,createTime:"2016-03-18 16:58:19",education:"",idCardIssuingAuthority:"",idCardVisa:"",identityStatus:1,levelId:1,levelName:"学徒",levelScore:50,levelTitle:"白手起家",levelValue:1,liveTime:"2014-01-01",marriage:1,orderAmountTotal:0,orderApply:1,orderBreachRepay:0,orderEnd:0,orderHasRepay:0,orderLeftTotal:0,orderNum:1,orderRepay:0,personCard:"340711199111112312",sex:1,shortUrl:"bcAJkJn",sort:0,userId:191800180277,userMobile:"15012345678",userRealName:"张明月"}},success:!0}},246:function(t,e,s){var a=s(1)(s(94),s(258),null,null);t.exports=a.exports},258:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("topComponent",{attrs:{title:t.appName,showLeft:!1}}),t._v(" "),s("dl",{staticClass:"userInfo"},[s("dt",[s("p",{staticClass:"user-logo"}),t._v(" "),s("p",{staticClass:"user-tel"},[t._v("您好"),s("span",[t._v(t._s(t._f("filterPhone")(t.data.userMobile)))])]),t._v(" "),s("p",{staticClass:"user-tag"},[s("span",{staticClass:"mLevel"},[t._v(t._s(t.data.levelName))]),t._v(" "),s("span",{staticClass:"mName"},[t._v(t._s(t.data.levelTitle))])])]),t._v(" "),s("dd",[t._v("申请借款"),s("span",[t._v(t._s(t.data.orderApply)+"笔")])]),t._v(" "),s("dd",[t._v("待还借款"),s("span",[t._v(t._s(t.data.orderRepay)+"笔")])])]),t._v(" "),s("ul",{staticClass:"listCom list-arrow list-icon mt20"},t._l(t.items,function(e){return s("listComponent",{class:e.cls,attrs:{title:e.tit},on:{click:function(s){return t.$router.push(e.push)}}})}),1),t._v(" "),s("p",{staticClass:"signOut mt20",on:{click:t.loginOut}},[t._v("退出登陆")]),t._v(" "),s("footComponent",{attrs:{idx:2}})],1)},staticRenderFns:[]}}});