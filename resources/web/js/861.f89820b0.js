"use strict";(self["webpackChunkleetx_web"]=self["webpackChunkleetx_web"]||[]).push([[861],{15861:function(e,t,i){i.d(t,{Z:function(){return W}});var s=i(49963),n=i(92797),o=i(66252),a=i(3577);const r=e=>((0,o.dD)("data-v-757bf52e"),e=e(),(0,o.Cn)(),e),l={key:0,class:"mask"},c={class:"program-box"},m={class:"program-title-line"},h={class:"program-title-msg"},d={class:"program-copy-line"},p={class:"program-copy-text"},u={class:"program-mode-line"},f={class:"program-copy-text"},w={class:"program-name-line"},g={class:"program-copy-text"},x={class:"program-pset-line"},b=r((()=>(0,o._)("div",{class:"program-copy-text"},"Pset",-1))),P={class:"program-pset-input"},_={class:"program-operate-line"};function v(e,t,i,s,n,r){const v=(0,o.up)("svgloader"),y=(0,o.up)("LeetxSwitch"),N=(0,o.up)("NewSelect"),C=(0,o.up)("InputText"),k=(0,o.up)("Counter");return n.isShow?((0,o.wg)(),(0,o.iD)("div",l,[(0,o._)("div",c,[(0,o._)("div",m,[(0,o._)("span",h,(0,a.zw)(e.$t("newpro.newpro")),1),(0,o._)("span",{class:"program-box-close",onClick:t[0]||(t[0]=(...e)=>r.cancel&&r.cancel(...e))},[(0,o.Wm)(v,{class:"icon-close",icon:"Close",size:"1.2rem"})])]),(0,o._)("div",d,[(0,o._)("div",p,(0,a.zw)(e.$t("newpro.cpexistpro")),1),(0,o.Wm)(y,{class:"program-copy-btn",height:2.5,modelValue:n.isCopyFile,"onUpdate:modelValue":t[1]||(t[1]=e=>n.isCopyFile=e),alive:r.allowCopyFile,clbck:r.promptUser},null,8,["height","modelValue","alive","clbck"])]),(0,o._)("div",u,[(0,o._)("div",f,(0,a.zw)(r.modename),1),n.isCopyFile?((0,o.wg)(),(0,o.j4)(N,{key:1,isScroll:!0,width:18.4769,class:"program-select-mode",realVal:n.sourcePset,options:n.profilePsets,onValChng:t[3]||(t[3]=e=>r.chngPf(e))},null,8,["width","realVal","options"])):((0,o.wg)(),(0,o.j4)(N,{key:0,width:18.4769,class:"program-select-mode",realVal:n.curMode,"onUpdate:realVal":t[2]||(t[2]=e=>n.curMode=e),options:i.modes},null,8,["width","realVal","options"]))]),(0,o._)("div",w,[(0,o._)("div",g,(0,a.zw)(e.$t("newpro.proname")),1),(0,o.Wm)(C,{text:n.newName.text,placeholder:e.$t("newpro.name"),class:"program-name-input",modelValue:n.newName,"onUpdate:modelValue":t[4]||(t[4]=e=>n.newName=e),textValid:r.checkName(),validReason:r.nameError},null,8,["text","placeholder","modelValue","textValid","validReason"])]),(0,o._)("div",x,[b,(0,o._)("div",P,[(0,o.Wm)(k,{_width:"100%",cnum:n.newPset.text,_min:1,_max:999999999,onUpdate:t[5]||(t[5]=e=>r.updateNewPset(e)),_ftszie:"2rem",textValid:r.checkPset(),validReason:e.$t("newpro.psetOver")},null,8,["cnum","textValid","validReason"])])]),(0,o._)("div",_,[(0,o._)("div",{class:"program-cancel-btn",onClick:t[6]||(t[6]=(...e)=>r.cancel&&r.cancel(...e))},(0,a.zw)(e.$t("newpro.cancel")),1),(0,o._)("div",{class:"program-cnfrm-btn",onClick:t[7]||(t[7]=(...e)=>r.sbmtNewPrgrmData&&r.sbmtNewPrgrmData(...e))},(0,a.zw)(e.$t("newpro.confirm")),1)])])])):(0,o.kq)("",!0)}var y=i(30703),N=i(73496),C=i(83067),k=i(16496),$=i(89555),V=i(74125),L=i(59317),S=i(84965),F=i(22805),z={components:{svgloader:N.Z,LeetxSwitch:C.Z,InputText:y.Z,Counter:$.Z,NewSelect:k.Z},data(){return{isShow:!0,curMode:2,isCopyFile:0,Profile:void 0,sourcePset:-1,box:void 0,profilePsets:{},newName:{text:"",valid:!1},newPset:{text:1,valid:!1}}},props:{modes:{type:Object,default:()=>{let e=n.Z.global.t("dlgprogram.expertsMode"),t=n.Z.global.t("dlgprogram.fastMode");return{[t]:1,[e]:2}}},pfList:{type:Array,default:function(){return[]}}},methods:{sbmtNewPrgrmData(){if(!this.checkName()||!this.checkPset())return;this.isShow=!1;let e=this.newPset.text,t=this.newName.text;if(this.Profile=(0,F.re)(this.curMode),0!=this.isCopyFile){let i=i=>{this.Profile=(0,L.p$)(i),this.Profile.Name=t,this.Profile.Pset=e,this.onConfirm&&this.onConfirm({Profile:{Profile:this.Profile},pset:e})},s=()=>{let e=this.$t("dlgprogram.copyFail");this.onCancel&&this.onCancel(e)};this.getFileContentByPsetApi(this.sourcePset,i,s)}else this.Profile.Name=t,this.Profile.Pset=e,this.Profile.Mode=this.curMode,this.onConfirm&&this.onConfirm({Profile:{Profile:this.Profile},pset:e})},cancel(){this.isShow=!1;let e=this.$t("dlgprogram.userCancel");this.onCancel&&this.onCancel(e)},chngPf(e){this.sourcePset=e,this.setPset(),this.setName()},closeboard(e){let t=e.clientX,i=e.clientY,s=this,n=s.box.offsetLeft-s.box.offsetWidth/2,o=s.box.offsetLeft+s.box.offsetWidth-s.box.offsetWidth/2,a=s.box.offsetTop,r=s.box.offsetTop+s.box.offsetHeight;t*i!=0&&(t<=n||t>=o||i>=r||i<=a)&&(window.removeEventListener("click",this.closeboard),s.isShow=!1)},getBox(){this.box=document.getElementsByClassName("program-box")[0]},getFileContentByPsetApi(e,t,i){(0,V.Y3)(e).then((e=>{0==e.status?t&&t(e.data.Profile):i&&i()})).catch((e=>{i&&i(e)}))},updateNewPset(e){this.newPset.text=e},promptUser(){this.allowCopyFile||S.c.warning(["没有工艺可复制"])},initDefaultProfile(){this.setPset(),this.setName()},setName(){0!=this.checkName()&&(this.newName.text=`pset${this.newPset.text}`)},setPset(){if(!this.checkPset()){this.newPset.text=1;for(let e in this.pfList){if(this.pfList[e].pset!==this.newPset.text)break;this.newPset.text=this.newPset.text+1}}},checkName(){for(let e of this.pfList)if(e.name===this.newName.text)return!1;return!0},checkPset(){for(let e of this.pfList)if(e.pset===this.newPset.text||""===this.newPset.text||this.newPset.text>255)return!1;return!0},initNameWithPset(){for(let e in this.pfList){let t=this.pfList[e],i=t.pset,s=t.name;this.profilePsets[`${i}[${s}]`]=t.pset}}},computed:{modename(){return this.isCopyFile?this.$t("newpro.src"):this.$t("newpro.mode")},allowCopyFile(){return this.pfList.length>0},nameError(){return""==this.newName.text?this.$t("dlgprogram.nameNotEmpty"):this.$t("dlgprogram.nameRepeat")}},watch:{pfList:{immediate:!0,deep:!0,handler:function(){this.initDefaultProfile(),this.initNameWithPset()}},isCopyFile(){this.isCopyFile&&this.pfList.length>0&&this.chngPf(this.pfList[0].pset)}},mounted(){setTimeout((()=>{this.getBox(),window.addEventListener("click",this.closeboard)}),50)}},M=i(83744);const Z=(0,M.Z)(z,[["render",v],["__scopeId","data-v-757bf52e"]]);var j=Z;const O=e=>new Promise(((t,i)=>{let o=(0,s.ri)(j,e).use(n.Z).mount(document.createElement("div"));document.body.appendChild(o.$el),o.onConfirm=e=>{t(e)},o.onCancel=function(e){i(e)}}));var W=O},59317:function(e,t,i){function s(e){let t;if(e instanceof Array){t=[];for(let i=0;i<e.length;i++)t[i]=s(e[i])}else if(e instanceof Object){t={};for(let i of Object.keys(e))t[i]=s(e[i])}else t=e;return t}function n(e,t,i=!1){let s=!0;if(e instanceof Array&&t instanceof Array&&t.length==e.length){for(let o=0;o<e.length;o++)if(s=s&&n(e[o],t[o],i),!s)break}else if(!(e instanceof Object&&t instanceof Object)||e instanceof Array||t instanceof Array)e instanceof Object||t instanceof Object?s=!1:(s=!0,i&&(s=e===t));else for(let o in e){if(!(o in t)){s=!1;break}if(s=s&&n(e[o],t[o],i),!s)break}return s}function o(e,t,i=!1){return i?JSON.stringify(e)===JSON.stringify(t):n(e,t)}i.d(t,{IK:function(){return o},p$:function(){return s}})},89555:function(e,t,i){i.d(t,{Z:function(){return w}});var s=i(66252),n=i(3577),o=i(49963);const a=["id"],r={class:"val-box"},l={class:"num"};function c(e,t,i,c,m,h){return(0,s.wg)(),(0,s.iD)("div",{class:(0,n.C_)({"counter-box":!0,"valid-text":!i.textValid}),id:m.cid},[(0,s._)("div",{class:"sub-box",onClick:t[0]||(t[0]=(...e)=>h.subNum&&h.subNum(...e))},[(0,s._)("span",{class:(0,n.C_)(["sub-btn",{forbit:m.num==m.min}])},"-",2)]),(0,s._)("div",r,[(0,s._)("span",l,(0,n.zw)(m.num),1)]),(0,s._)("div",{class:"add-box",onClick:t[1]||(t[1]=(...e)=>h.addNum&&h.addNum(...e))},[(0,s._)("span",{class:(0,n.C_)(["add-btn",{forbit:m.num==m.max}])},"+",2)]),(0,s.wy)((0,s._)("span",{class:"valid-reason"},(0,n.zw)(i.validReason),513),[[o.F8,!i.textValid]])],10,a)}const m={data(){return{num:0,cid:Math.random(),max:0,min:0}},props:{cnum:{type:Number,default:0},_width:{type:String,default:"7.5rem"},_bWidth:{type:String,default:"1.7625rem"},_height:{type:String,default:"3.1431rem"},_ftszie:{type:String,default:"1.5rem"},_min:{type:Number,default:-9999},_max:{type:Number,default:9999},_value:{type:Number,default:1},textValid:{type:Boolean,default:!0},validReason:{type:String,default:"数据不合法"}},methods:{subNum(){this.num=Math.floor(this.num>this._min?this.num-this._value:this._min),this.$emit("update",this.num)},addNum(){Math.floor(this.num=this.num<this._max?this.num+this._value:this._max),this.$emit("update",this.num)},initNum(){this.max=this._max,this.min=this._min,this.num=Math.floor(this.cnum>=this.min&&this.cnum<=this.max?this.cnum:this.min),this.$emit("update",this.num)}},watch:{cnum:{handler:function(){this.initNum()}},_max:{deep:!0,handler:function(){this.initNum()}},_min:{deep:!0,handler:function(){this.initNum()}}},created(){this.initNum()}},h=()=>{(0,o.sj)((e=>({"0c347b10":e._height,"29ed0e55":e._width,"1157763c":e._ftszie})))},d=m.setup;m.setup=d?(e,t)=>(h(),d(e,t)):h;var p=m,u=i(83744);const f=(0,u.Z)(p,[["render",c],["__scopeId","data-v-a7278d4e"]]);var w=f}}]);
//# sourceMappingURL=861.f89820b0.js.map