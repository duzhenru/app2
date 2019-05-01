webpackJsonp([31,73],{53:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(154),s=n(o);e.default={data:function(){return{datas:[]}},mounted:function(){this.datas=s.default}}},154:function(t,e){t.exports=[{title:"注册时支持哪些证件类型？",detail:"征信平台支持以下证件类型：身份证、户口簿、护照、军官证、士兵证、港澳居民来往内地通行证、台湾同胞来往内地通行证、临时身份证、外国人居留证、警官证香港身份证、澳门身份证、台湾身份证和其他证件。",show:!1},{title:"为什么我注册用户时被拒绝？",detail:"用户注册时被拒绝可能有以下几种情况：<br>（1）目前个人征信系统尚未收录您的任何信息，无法进行注册。<br>（2）您已使用您的身份信息（姓名、证件类型和证件号码）注册过其他用户，并且那个用户已通过身份验证。",show:!1},{title:"为什么我提交查询申请后，没有收到身份验证码？",detail:"正常情况下，会在您提交查询申请的24个小时后，将身份验证码反馈给您。若您在申请查询24个小时后仍未收到反馈结果，可能是由于以下原因：一是您注册时填写的手机号码不正确；二是您的手机对短信进行了拦截，或短信接收出现异常；三是您在提交查询申请时，使用问题验证方式，经审核您未通过身份验证。您可以用注册时填写的登录名和密码登录央行征信平台，平台会显示您的信用信息产品处理状态。",show:!0},{title:"忘记登录名怎么办？",detail:'点击央行征信平台登录页面"忘记登录名"链接，输入相关信息，系统会以短信方式将登录名发送到您预留的手机号码上。<br>注意：对于安全等级为低、未注册或已销户的用户，无法使用此功能找回登录名，可使用"用户注册"功能重新注册。',show:!1},{title:"忘记密码怎么办？",detail:"点击央行征信平台登录页面的“忘记密码”链接，输入登录名，设置新密码并通过手机动态码确认后，再进行身份验证，通过验证的用户密码重置成功。",show:!1},{title:"如何查询个人信用信息？",detail:"用户注册后登录平台，根据需要选择信用信息产品，并进行身份验证，通过验证的用户成功提交查询申请。信用信息产品加工完毕后（一般在成功提交查询申请后的第2天），平台会向用户发送含有身份验证码的短信。用户可在收到身份验证码的7天内，登录平台使用身份验证码查看查询结果。",show:!1},{title:"成功查得的个人信用信息会在网上保留多长时间，能否多次查看？",detail:"查询申请通过后，在身份验证码有效期内（7日），注册用户可以多次查看申请成功的信用信息产品。身份验证码过期需要重新申请。",show:!1},{title:"使用个人信用信息服务平台的查询服务需要付费吗？",detail:"目前查询服务是免费的。若未来需要收费，将根据法律法规中的相关规定执行。",show:!1},{title:"在个人信用信息服务平台查询信用信息会增加个人信用报告中的查询记录吗？",detail:'查询"信用信息提示"和"信用概要信息"不会增加查询记录，查询"个人信用报告"会增加查询记录。',show:!1}]},199:function(t,e,i){var n=i(1)(i(53),i(308),null,null);t.exports=n.exports},308:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("topComponent",{attrs:{title:"疑问解答"}}),t._v(" "),i("div",{staticClass:"reportProblem"},t._l(t.datas,function(e){return i("dl",{class:{open:e.show},on:{click:function(t){e.show=!e.show}}},[i("dt",[t._v(t._s(e.title))]),t._v(" "),i("dd",{domProps:{innerHTML:t._s(e.detail)}})])}),0)],1)},staticRenderFns:[]}}});