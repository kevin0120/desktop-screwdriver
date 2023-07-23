"use strict";(self["webpackChunkleetx_web"]=self["webpackChunkleetx_web"]||[]).push([[51],{59317:function(e,t,a){function s(e){let t;if(e instanceof Array){t=[];for(let a=0;a<e.length;a++)t[a]=s(e[a])}else if(e instanceof Object){t={};for(let a of Object.keys(e))t[a]=s(e[a])}else t=e;return t}function l(e,t,a=!1){let s=!0;if(e instanceof Array&&t instanceof Array&&t.length==e.length){for(let o=0;o<e.length;o++)if(s=s&&l(e[o],t[o],a),!s)break}else if(!(e instanceof Object&&t instanceof Object)||e instanceof Array||t instanceof Array)e instanceof Object||t instanceof Object?s=!1:(s=!0,a&&(s=e===t));else for(let o in e){if(!(o in t)){s=!1;break}if(s=s&&l(e[o],t[o],a),!s)break}return s}function o(e,t,a=!1){return a?JSON.stringify(e)===JSON.stringify(t):l(e,t)}a.d(t,{IK:function(){return o},p$:function(){return s}})},47051:function(e,t,a){a.r(t),a.d(t,{default:function(){return A}});var s=a(66252),l=a(3577),o=a(49963);const i=e=>((0,s.dD)("data-v-9d39ab12"),e=e(),(0,s.Cn)(),e),n={class:"op-box"},r={class:"op-prtcl-line"},p={class:"op-prtcl"},u={class:"op-input"},c={class:"ip-addresss-line"},d={class:"ip-addresss"},m={class:"port-line"},h={class:"port"},v={class:"server-prtcl-line"},f=i((()=>(0,s._)("span",{class:"op-prtcl"},"结果上传",-1))),D={class:"op-input"},x={class:"server-addresss-line"},_=i((()=>(0,s._)("span",{class:"ip-addresss"},"服务器IP",-1)));function b(e,t,a,i,b,g){const w=(0,s.up)("LeetxSwitch"),V=(0,s.up)("InputText"),O=(0,s.up)("InputVal"),S=(0,s.up)("LeetxButton");return(0,s.wg)(),(0,s.iD)("div",n,[(0,s._)("div",r,[(0,s._)("span",p,(0,l.zw)(e.$t("setop.opprotocol")),1),(0,s._)("div",u,[(0,s.Wm)(w,{module:b.module,height:2,value:b.oldOpData.use_op,activeVal:!0,staticVal:!1,modelValue:b.opData.use_op.text,"onUpdate:modelValue":t[0]||(t[0]=e=>b.opData.use_op.text=e)},null,8,["module","value","modelValue"])])]),(0,s._)("div",c,[(0,s._)("span",d,(0,l.zw)(e.$t("setop.ipaddress")),1),(0,s.Wm)(V,{maxLength:20,module:b.module,class:"ip-input",text:b.oldOpData.ip,modelValue:b.opData.ip,"onUpdate:modelValue":t[1]||(t[1]=e=>b.opData.ip=e)},null,8,["module","text","modelValue"])]),(0,s._)("div",m,[(0,s._)("span",h,(0,l.zw)(e.$t("setop.portnumber")),1),(0,s.Wm)(O,{imprprChrctr:b.limitNumBtn,module:b.module,class:"string-input",sensorValue:b.opData.port.text,"onUpdate:sensorValue":t[2]||(t[2]=e=>b.opData.port.text=e),minNum:1,maxNum:65535},null,8,["imprprChrctr","module","sensorValue"])]),(0,s.wy)((0,s._)("div",null,[(0,s._)("div",v,[f,(0,s._)("div",D,[(0,s.Wm)(w,{module:b.module,height:2,value:b.oldOpData.server_enable,activeVal:!0,staticVal:!1,modelValue:b.opData.server_enable.text,"onUpdate:modelValue":t[3]||(t[3]=e=>b.opData.server_enable.text=e)},null,8,["module","value","modelValue"])])]),(0,s._)("div",x,[_,(0,s.Wm)(V,{maxLength:20,module:b.module,class:"ip-input",text:b.oldOpData.server_ip,modelValue:b.opData.server_ip,"onUpdate:modelValue":t[4]||(t[4]=e=>b.opData.server_ip=e)},null,8,["module","text","modelValue"])])],512),[[o.F8,"lx"==this.$store.state.f_status.user]]),(0,s.Wm)(S,{enablerun:!1,module:b.module,class:"confirm-box",textColor:"#fff",bgcColor:"#00c155",width:"60.625vw",height:"3.75rem",fontSize:"2.25rem",fontFamily:"--SHSC-B",text:e.$t("confirm.confirm"),onClick:g.submitOpData},null,8,["module","text","onClick"])])}var g=a(10335),w=a(77671),V=a(22213),O=a(27253),S=a(26971),k=a(32015),C=a(59317),y=a(84965),$={components:{InputText:w.Z,LeetxButton:g.Z,LeetxSwitch:O.Z,InputVal:V.Z},data(){return{module:"DEV_BUS",oldOpData:{ip:"127.0.0.1",port:8877,use_op:!0,server_ip:"127.0.0.1",server_enable:!1},opData:{ip:{text:"127.0.0.1",valid:!0},port:{text:8877,valid:!0},use_op:{text:!1,valid:!0},server_ip:{text:"127.0.0.1",valid:!0},server_enable:{text:!1,valid:!0}},isFirstChange:!0,isAllowLeave:!0,limitNumBtn:["-","."]}},methods:{submitOpData(){this.isAllowLeave=!0;let e=this.getToServerData();(0,S.DK)(e).then((t=>{if(console.log("data",e),0==t.status)y.c.success(["保存成功"]);else switch(t.status){case 9164:y.c.warning(["不能此网段的ip已被其他网络占用"]);break;case 9161:y.c.warning(["端口已占用"]);break;case 9163:y.c.warning(["OP重启动失败"]);break;case 9160:y.c.warning(["修改设备ip失败"]);break;case 9162:y.c.warning(["输入IP地址无效"]);break;default:y.c.warning(["格式错误"])}})).catch((()=>{y.c.warning(["保存失败"])}))},initData(){(0,S.xD)().then((e=>{0==e.status&&this.handleServerData(e.data)})).catch((()=>{this.handleServerData(this.oldOpData)}))},getToServerData(){let e={};for(let t in this.opData)e[t]=this.opData[t].text;return e},handleServerData(e){this.opData.ip.text=e.ip,this.opData.port.text=e.port,this.opData.use_op.text=e.use_op,this.opData.server_ip.text=e.server_ip,this.opData.server_enable.text=e.server_enable,this.oldOpData=(0,C.p$)(this.getToServerData()),setTimeout((()=>{this.isFirstChange=!1}),100)}},created(){this.initData()},beforeRouteLeave(e,t,a){if(this.isAllowLeave||this.$store.state.g_status.busy)return void a();let s=this.$t("setcontrol.saveSet"),l=this.$t("setcontrol.yes"),o=this.$t("setcontrol.no"),i=this.$t("setcontrol.isSaveSet");(0,k.Z)({title:s,confirmText:l,cancelText:o,msg:i}).then((()=>{this.submitOpData(),setTimeout((()=>{a()}),100)})).catch((()=>{a()}))},watch:{opData:{deep:!0,handler:function(){this.isFirstChange||(this.isAllowLeave=(0,C.IK)(this.oldOpData,this.getToServerData(),!0))}}}},L=a(83744);const T=(0,L.Z)($,[["render",b],["__scopeId","data-v-9d39ab12"]]);var A=T}}]);
//# sourceMappingURL=51.3da40eef.js.map