webpackJsonp([36,73],{83:function(e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={data:function(){return{phone:"",imgCode:"",smsCode:"",pwdOne:"",pwdTwo:"",checked:!0,showPwdOne:!0,showPwdTwo:!0,canvas:{}}},methods:{goReg:function(){var e=/^[1][3578][0-9]{9}$/,o=/^[\d\D]{6,12}$/,t=/^[0-9]{4,8}$/;this.checked===!1?this.$dialog("请阅读并同意协议"):e.test(this.phone)===!1?this.$dialog("手机格式不正确"):this.imgCode.toUpperCase()!==this.canvasCode.codeNums.toUpperCase()?this.$dialog("图片验证码不正确"):t.test(this.smsCode)===!1?this.$dialog("短信验证码不正确"):o.test(this.pwdOne)===!1?this.$dialog("密码格式不正确"):this.pwdTwo!==this.pwdOne?this.$dialog("确认密码不正确"):this.$router.push("/login")},smsAjax:function(){console.log("在此发送短信ajax--组件中已$emit该函数")},sendCode:function(e){this.imgCode=e}}}},231:function(e,o,t){var n=t(1)(t(83),t(256),null,null);e.exports=n.exports},256:function(e,o){e.exports={render:function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"container bgF"},[t("topComponent",{attrs:{title:"注册",back:"登录"}}),e._v(" "),t("h2",{staticClass:"logoIcon"},[e._v(e._s(e.appName))]),e._v(" "),t("ul",{staticClass:"formCom form-login"},[t("li",[t("label",[t("span",[e._v("手机号")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model.number",value:e.phone,expression:"phone",modifiers:{number:!0}}],attrs:{type:"number",placeholder:"请输入手机号"},domProps:{value:e.phone},on:{input:function(o){o.target.composing||(e.phone=e._n(o.target.value))},blur:function(o){return e.$forceUpdate()}}})])]),e._v(" "),t("li",[t("canvasCode",{attrs:{name:"图片验证码"},on:{codeHasChange:e.sendCode}})],1),e._v(" "),t("li",[t("label",[t("span",[e._v("短信验证码")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model.number",value:e.smsCode,expression:"smsCode",modifiers:{number:!0}}],attrs:{type:"number",placeholder:"请输入短信验证码"},domProps:{value:e.smsCode},on:{input:function(o){o.target.composing||(e.smsCode=e._n(o.target.value))},blur:function(o){return e.$forceUpdate()}}})]),e._v(" "),t("sendSMS",{on:{sentAjax:e.smsAjax}})],1),e._v(" "),t("li",{class:e.showPwdOne?"icon-eye1":"icon-eye2"},[t("label",[t("span",[e._v("登录密码")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.pwdOne,expression:"pwdOne",modifiers:{trim:!0}}],attrs:{type:e.showPwdOne?"password":"text",placeholder:"请输入6-12位密码"},domProps:{value:e.pwdOne},on:{input:function(o){o.target.composing||(e.pwdOne=o.target.value.trim())},blur:function(o){return e.$forceUpdate()}}}),e._v(" "),t("i",{on:{click:function(o){e.showPwdOne=!e.showPwdOne}}})])]),e._v(" "),t("li",{class:e.showPwdTwo?"icon-eye1":"icon-eye2"},[t("label",[t("span",[e._v("确认密码")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.pwdTwo,expression:"pwdTwo",modifiers:{trim:!0}}],attrs:{type:e.showPwdTwo?"password":"text",placeholder:"请输入6-12位确认密码"},domProps:{value:e.pwdTwo},on:{input:function(o){o.target.composing||(e.pwdTwo=o.target.value.trim())},blur:function(o){return e.$forceUpdate()}}}),e._v(" "),t("i",{on:{click:function(o){e.showPwdTwo=!e.showPwdTwo}}})])])]),e._v(" "),t("div",{staticClass:"btnWarp"},[t("span",{staticClass:"subBtn",class:{grayBg:!e.checked},on:{click:e.goReg}},[e._v("立即注册")])]),e._v(" "),t("div",{staticClass:"agreeMent mt20",class:{no:!e.checked},on:{click:function(o){e.checked=!e.checked}}},[e._v("\n    我已阅读并同意"),t("span",{staticClass:"blue",on:{click:function(o){return o.stopPropagation(),e.goAgreem("/agreement")}}},[e._v("《草根信贷用户协议》")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,null)>-1:e.checked},on:{change:function(o){var t=e.checked,n=o.target,s=!!n.checked;if(Array.isArray(t)){var a=null,i=e._i(t,a);n.checked?i<0&&(e.checked=t.concat([a])):i>-1&&(e.checked=t.slice(0,i).concat(t.slice(i+1)))}else e.checked=s}}})])],1)},staticRenderFns:[]}}});