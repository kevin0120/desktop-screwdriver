"use strict";(self["webpackChunkleetx_web"]=self["webpackChunkleetx_web"]||[]).push([[156],{19995:function(t,e,n){n.d(e,{CG:function(){return a},E7:function(){return d},IY:function(){return r},KJ:function(){return i},aE:function(){return c},jy:function(){return u},mY:function(){return l},yq:function(){return o}});var s=n(11586);function o(){return(0,s.Z)({url:"bus/io/cfg/upload",method:"get"})}function a(){return(0,s.Z)({url:"bus/fieldbus/cfg/upload",method:"get"})}function l(t){return(0,s.Z)({url:"bus/io/modify",method:"post",data:t})}function i(t){return(0,s.Z)({url:"bus/filedbus/modify",method:"post",data:t})}function u(t){return(0,s.Z)({url:"bus/io/cfg/download",method:"post",data:t})}function r(t){return(0,s.Z)({url:"bus/filedbus/cfg/download",method:"post",data:t})}function d(){return(0,s.Z)({url:"bus/io/debug/in",method:"put"})}function c(){return(0,s.Z)({url:"bus/io/debug/out",method:"put"})}},46157:function(t,e,n){n.d(e,{Z:function(){return U}});var s=n(49963),o=n(66252),a=n(3577);const l=t=>((0,o.dD)("data-v-ec5d5082"),t=t(),(0,o.Cn)(),t),i={key:0,class:"required-box"},u={class:"required-title-line"},r={class:"required-title-msg"},d={class:"required-system-line"},c={class:"required-system-text"},p={class:"required-stytem-signal"},m=l((()=>(0,o._)("span",{class:"system-signal-required-text"},"true",-1))),y={class:"required-delay-line"},g={class:"required-delay-text"},f=l((()=>(0,o._)("span",{class:"required-delay-unit"},"ms",-1))),x={class:"required-operate-line"};function _(t,e,n,l,_,b){const h=(0,o.up)("svgloader"),v=(0,o.up)("Checkbox");return _.isShow?((0,o.wg)(),(0,o.iD)("div",i,[(0,o._)("div",u,[(0,o._)("span",r,(0,a.zw)(_.setSignal.signal)+(0,a.zw)(t.$t("dlgdebug.mandatory")),1),(0,o._)("span",{class:"required-box-close",onClick:e[0]||(e[0]=(...t)=>b.cancel&&b.cancel(...t))},[(0,o.Wm)(h,{icon:"Close",size:"0.796rem"})])]),(0,o._)("div",d,[(0,o._)("div",c,(0,a.zw)(t.$t("dlgdebug.mandatorVal")),1),(0,o._)("div",p,[(0,o.Wm)(v,{class:"system-signal-required",modelValue:_.setSignal.val,"onUpdate:modelValue":e[1]||(e[1]=t=>_.setSignal.val=t)},null,8,["modelValue"]),m])]),(0,o._)("div",y,[(0,o.Wm)(v,{class:"required-is-delay",modelValue:_.setSignal.isDelay,"onUpdate:modelValue":e[2]||(e[2]=t=>_.setSignal.isDelay=t)},null,8,["modelValue"]),(0,o._)("div",g,(0,a.zw)(t.$t("dlgdebug.signalPulseWidth")),1),(0,o.wy)((0,o._)("input",{class:"system-signal-delaytime",type:"text","onUpdate:modelValue":e[3]||(e[3]=t=>_.setSignal.delayTime=t)},null,512),[[s.nr,_.setSignal.delayTime]]),f]),(0,o._)("div",x,[(0,o._)("div",{class:"required-cancel-btn",onClick:e[4]||(e[4]=(...t)=>b.cancel&&b.cancel(...t))},(0,a.zw)(t.$t("dlgdebug.cancel")),1),(0,o._)("div",{class:"required-cnfrm-btn",onClick:e[5]||(e[5]=(...t)=>b.sbmtIoMndtryData&&b.sbmtIoMndtryData(...t))},(0,a.zw)(t.$t("dlgdebug.ioEnforcement")),1)])])):(0,o.kq)("",!0)}const b={class:"text"};function h(t,e,n,s,l,i){return(0,o.wg)(),(0,o.iD)("div",{class:(0,a.C_)(i.boxClass),onClick:e[0]||(e[0]=(...t)=>i.updateData&&i.updateData(...t))},[(0,o._)("span",b,(0,a.zw)(i.text),1)],2)}var v={data(){return{status:!1}},methods:{updateData(){this.status=!this.status,this.$emit("update:modelValue",this.status?this.activeValue:this.staticValue)},initData(){this.status=this.modelValue==this.activeValue}},props:{activeValue:{type:null,default:1},staticValue:{type:null,default:0},modelValue:{type:null,default:0},size:{type:String,default:"2rem"}},computed:{boxClass(){return this.status?"active-box":"static-box"},text(){return this.status?"✔":""}},created(){this.initData()},watch:{modelValue(){this.initData()}}},q=n(83744);const w=(0,q.Z)(v,[["render",h],["__scopeId","data-v-1c7b1b74"]]);var S=w,k=n(73496),C={components:{svgloader:k.Z,Checkbox:S},data(){return{isShow:!0,setSignal:{val:1,isDelay:1,delayTime:"",signal:""}}},props:{signal:{type:String,deafault:"标题"}},methods:{sbmtIoMndtryData(){this.isShow=!1,this.onConfirm&&this.onConfirm(this.setSignal)},cancel(){this.isShow=!1,this.onCancel&&this.onCancel()},initData(){this.setSignal.signal=this.signal}},created(){this.initData()}};const B=(0,q.Z)(C,[["render",_],["__scopeId","data-v-ec5d5082"]]);var V=B;const D=t=>new Promise(((e,n)=>{let o=(0,s.ri)(V,t).mount(document.createElement("div"));document.body.appendChild(o.$el),o.onConfirm=t=>{e(t)},o.onCancel=function(t){n(t)}}));var U=D},96754:function(t,e,n){n.d(e,{GZ:function(){return u},lG:function(){return a}});var s=n(59317);const o={Bool:1,I8:2,U8:3,I16:4,U16:5,I32:6,U32:7,I64:8,U64:9,F32:10,F64:11,String:12,StringUnicode:13,ByteArray:14,RemapArray:15};function a(t){return o[t]}const l={ver:"V1.0.0",moudles:["sys_status"],items:{"0x300101":{name:"pset_start",sdo:"0x300101",group:"sys_status",type:"Bool",len:1,optional:!0},"0x300102":{name:"tool_reverse",sdo:"0x300102",group:"sys_status",type:"Bool",len:1,optional:!0},"0x300401":{name:"fault_reset",sdo:"0x300401",group:"sys_status",type:"Bool",len:1,optional:!0},"0x30010A":{name:"request_Profile_index",sdo:"0x30010A",group:"sys_status",type:"U8",len:8,optional:!0},"0x300125":{name:"tool_enable",sdo:"0x300125",group:"sys_status",type:"Bool",len:1,optional:!0},"0x300403":{name:"result_ack",sdo:"0x300403",group:"sys_status",type:"Bool",len:1,optional:!0},"0x300409":{name:"sync_signal",sdo:"0x300409",group:"sys_status",type:"Bool",len:1,optional:!0},"0x300161":{name:"request_Job_index",sdo:"0x300161",group:"sys_status",type:"U8",len:8,optional:!0},"0x300831":{name:"product_sn",sdo:"0x300831",group:"sys_status",type:"String",len:144,optional:!0}}},i={ver:"V1.0.0",moudles:["status"],items:{"0x300102":{name:"tool_reverse",sdo:"0x300102",group:"status",type:"Bool",len:1,optional:!0},"0x300204":{name:"system_ready",sdo:"0x300204",type:"Bool",len:1,group:"status",optional:!0},"0x300205":{name:"pset_running",sdo:"0x300205",type:"Bool",len:1,group:"status",optional:!0},"0x300209":{name:"system_fault",sdo:"0x300209",type:"Bool",len:1,group:"status",optional:!0},"0x300207":{name:"result_ok",sdo:"0x300207",type:"Bool",len:1,group:"status",optional:!0},"0x300208":{name:"result_nok",sdo:"0x300208",type:"Bool",len:1,group:"status",optional:!0},"0x30020B":{name:"system_fault_code",sdo:"0x30020B",type:"U16",len:16,group:"status",optional:!0},"0x30020A":{name:"active_profile_index",sdo:"0x30020A",type:"U8",len:8,group:"status",optional:!0},"0x300806":{name:"result_torque",sdo:"0x300806",type:"F32",len:32,group:"status",optional:!0},"0x30081E":{name:"result_angle",sdo:"0x30081E",type:"F32",len:32,group:"status",optional:!0},"0x300409":{name:"sync_signal",sdo:"0x300409",type:"Bool",len:1,group:"status",optional:!0},"0x300814":{name:"result_torque_ok",sdo:"0x300814",type:"Bool",len:1,group:"status",optional:!0},"0x300811":{name:"result_angle_ok",sdo:"0x300811",type:"Bool",len:1,group:"status",optional:!0},"0x300262":{name:"active_job_index",sdo:"0x300262",type:"U16",len:16,group:"status",optional:!0},"0x300831":{name:"product_sn",sdo:"0x300831",type:"String",len:144,group:"status",optional:!0}}};function u(t){let e={};return"in"==t&&(e=(0,s.p$)(l)),"out"==t&&(e=(0,s.p$)(i)),e.items}},59317:function(t,e,n){function s(t){let e;if(t instanceof Array){e=[];for(let n=0;n<t.length;n++)e[n]=s(t[n])}else if(t instanceof Object){e={};for(let n of Object.keys(t))e[n]=s(t[n])}else e=t;return e}function o(t,e,n=!1){let s=!0;if(t instanceof Array&&e instanceof Array&&e.length==t.length){for(let a=0;a<t.length;a++)if(s=s&&o(t[a],e[a],n),!s)break}else if(!(t instanceof Object&&e instanceof Object)||t instanceof Array||e instanceof Array)t instanceof Object||e instanceof Object?s=!1:(s=!0,n&&(s=t===e));else for(let a in t){if(!(a in e)){s=!1;break}if(s=s&&o(t[a],e[a],n),!s)break}return s}function a(t,e,n=!1){return n?JSON.stringify(t)===JSON.stringify(e):o(t,e)}n.d(e,{IK:function(){return a},p$:function(){return s}})}}]);
//# sourceMappingURL=156.f77d7c2a.js.map