(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d210449"],{b6ba:function(e,s,t){"use strict";t.r(s);var r=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("van-dialog",{staticClass:"dialog-usermsg",attrs:{"show-confirm-button":!1,title:e.$t("MyMessage")},model:{value:e.modal,callback:function(s){e.modal=s},expression:"modal"}},[t("van-icon",{staticClass:"icon-close",attrs:{name:"cross",size:"20",color:"#fff"},on:{click:e.msgDialogClose}}),t("ul",{staticClass:"msg-wrap"},e._l(e.msgList,(function(s){return t("li",{staticClass:"msg-body"},[s.title?t("h3",{staticClass:"msg-title",class:{active:e.msgShow==s.id},on:{click:function(t){return e.showMsg(s)}}},[e._v(e._s(s.title.substr(0,50)))]):e._e(),t("div",{directives:[{name:"show",rawName:"v-show",value:e.msgShow==s.id,expression:"msgShow == item.id"}],staticClass:"msg-content",domProps:{innerHTML:e._s(s.content)}})])})),0),t("label",{staticClass:"remember"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.remember,expression:"remember"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.remember)?e._i(e.remember,null)>-1:e.remember},on:{change:function(s){var t=e.remember,r=s.target,n=!!r.checked;if(Array.isArray(t)){var a=null,i=e._i(t,a);r.checked?i<0&&(e.remember=t.concat([a])):i>-1&&(e.remember=t.slice(0,i).concat(t.slice(i+1)))}else e.remember=n}}}),e._v(e._s(e.$t("Nevershowagain")))])],1)},n=[],a=(t("4de4"),t("fb6a"),t("96cf"),t("1da1")),i=t("5530"),c=t("365c"),o=t("2f62"),l={name:"UserMessage",data:function(){return{modal:!1,msgList:[],msgIndex:0,remember:!1,msgShow:!1,isLoaded:!1}},computed:Object(i["a"])({},Object(o["c"])(["userInfo"])),methods:{fetchUserMsg:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function s(){var t,r,n,a,i,o;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,t={page:1,rows:8},s.next=4,Object(c["fetchUserMsg"])(t);case 4:if(r=s.sent,n=r.code,r.msg,a=r.data,i=a.list,0==n&&null!=i&&0!=i.length){s.next=11;break}return s.abrupt("return");case 11:e.msgList=i.slice(0,11),o=i.filter((function(e){return 0==e.isRead})),o.length&&(1==i.length&&(e.msgShow=i[0].id),e.modal=!0),s.next=18;break;case 16:s.prev=16,s.t0=s["catch"](0);case 18:case"end":return s.stop()}}),s,null,[[0,16]])})))()},showMsg:function(e){this.msgShow=e.id},chosenThisMsg:function(e){return this.msgShow==e.id?"chosenMsg":""},msgDialogClose:function(){this.remember&&Object(c["readUserMsg"])(),this.modal=!1}},watch:{userInfo:{handler:function(e){null==e||this.isLoaded||(this.isLoaded=!0,this.fetchUserMsg())},immediate:!0}}},m=l,u=t("0c7c"),d=Object(u["a"])(m,r,n,!1,null,null,null);s["default"]=d.exports}}]);