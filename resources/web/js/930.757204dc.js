"use strict";(self["webpackChunkleetx_web"]=self["webpackChunkleetx_web"]||[]).push([[930],{39496:function(t,e,s){s.d(e,{QO:function(){return o},Y6:function(){return u},cx:function(){return l},fm:function(){return d},j$:function(){return r},me:function(){return n},oN:function(){return a}});var i=s(11586);function a(){return(0,i.Z)({url:"dev/calibrate/sensor/kb",method:"get"})}function n(){return(0,i.Z)({url:"dev/calibrate/sensor/result",method:"get"})}function l(t){return(0,i.Z)({url:"dev/calibrate/sensor/set",method:"post",data:t})}function r(){return(0,i.Z)({url:"dev/calibrate/fac",method:"get"})}function u(){return(0,i.Z)({url:"dev/calibrate/pro",method:"get"})}function o(){return(0,i.Z)({url:"dev/calibrate/exit",method:"get"})}function d(){return(0,i.Z)({url:"dev/calibrate/enable",method:"get"})}},89555:function(t,e,s){s.d(e,{Z:function(){return g}});var i=s(66252),a=s(3577),n=s(49963);const l=["id"],r={class:"val-box"},u={class:"num"};function o(t,e,s,o,d,c){return(0,i.wg)(),(0,i.iD)("div",{class:(0,a.C_)({"counter-box":!0,"valid-text":!s.textValid}),id:d.cid},[(0,i._)("div",{class:"sub-box",onClick:e[0]||(e[0]=(...t)=>c.subNum&&c.subNum(...t))},[(0,i._)("span",{class:(0,a.C_)(["sub-btn",{forbit:d.num==d.min}])},"-",2)]),(0,i._)("div",r,[(0,i._)("span",u,(0,a.zw)(d.num),1)]),(0,i._)("div",{class:"add-box",onClick:e[1]||(e[1]=(...t)=>c.addNum&&c.addNum(...t))},[(0,i._)("span",{class:(0,a.C_)(["add-btn",{forbit:d.num==d.max}])},"+",2)]),(0,i.wy)((0,i._)("span",{class:"valid-reason"},(0,a.zw)(s.validReason),513),[[n.F8,!s.textValid]])],10,l)}const d={data(){return{num:0,cid:Math.random(),max:0,min:0}},props:{cnum:{type:Number,default:0},_width:{type:String,default:"7.5rem"},_bWidth:{type:String,default:"1.7625rem"},_height:{type:String,default:"3.1431rem"},_ftszie:{type:String,default:"1.5rem"},_min:{type:Number,default:-9999},_max:{type:Number,default:9999},_value:{type:Number,default:1},textValid:{type:Boolean,default:!0},validReason:{type:String,default:"数据不合法"}},methods:{subNum(){this.num=Math.floor(this.num>this._min?this.num-this._value:this._min),this.$emit("update",this.num)},addNum(){Math.floor(this.num=this.num<this._max?this.num+this._value:this._max),this.$emit("update",this.num)},initNum(){this.max=this._max,this.min=this._min,this.num=Math.floor(this.cnum>=this.min&&this.cnum<=this.max?this.cnum:this.min),this.$emit("update",this.num)}},watch:{cnum:{handler:function(){this.initNum()}},_max:{deep:!0,handler:function(){this.initNum()}},_min:{deep:!0,handler:function(){this.initNum()}}},created(){this.initNum()}},c=()=>{(0,n.sj)((t=>({"0c347b10":t._height,"29ed0e55":t._width,"1157763c":t._ftszie})))},h=d.setup;d.setup=h?(t,e)=>(c(),h(t,e)):c;var m=d,p=s(83744);const b=(0,p.Z)(m,[["render",o],["__scopeId","data-v-a7278d4e"]]);var g=b},3930:function(t,e,s){s.r(e),s.d(e,{default:function(){return A}});var i=s(66252),a=s(3577);const n=t=>((0,i.dD)("data-v-2848bc24"),t=t(),(0,i.Cn)(),t),l={class:"global-dmrct"},r={class:"select-program-line"},u={class:"select-program-text"},o={class:"serial-line"},d={class:"serial-text"},c={class:"device-text"},h={class:"device-input"},m={class:"demarcate-val"},p={class:"mask-box"},b=n((()=>(0,i._)("td",{class:"delBox"},null,-1))),g={class:"table-box"},f={class:"demarcate-table"},_={class:"delBox"},v={class:"cacl-line"},x={class:"calc-res"};function w(t,e,s,n,w,$){const C=(0,i.up)("NewSelect"),k=(0,i.up)("Counter"),y=(0,i.up)("InputVal"),F=(0,i.up)("LeetxButton");return(0,i.wg)(),(0,i.iD)("div",l,[(0,i._)("div",r,[(0,i._)("span",u,(0,a.zw)(t.$t("dbgdmrct.programselect")),1),(0,i.Wm)(C,{isScroll:!0,module:w.module,isAllowChng:!$.isBusy,width:38,height:2.4,realVal:$.defaultPset,options:w.pros,isReturnKey:!1,class:"select",onValChng:e[0]||(e[0]=t=>$.valChng(t))},null,8,["module","isAllowChng","height","realVal","options"])]),(0,i._)("div",o,[(0,i._)("span",d,(0,a.zw)(t.$t("dbgdmrct.serialnumber")),1),(0,i.Wm)(k,{cnum:w.nthGroup,_min:0,_max:$.maxGroup,_height:"2.5rem",onUpdate:e[1]||(e[1]=t=>w.nthGroup=t),class:"serial-counter"},null,8,["cnum","_max"]),(0,i._)("span",c,(0,a.zw)(t.$t("dbgdmrct.devicevalue")),1),(0,i._)("span",h,(0,a.zw)(w.devVal),1),(0,i._)("span",m,(0,a.zw)(t.$t("dbgdmrct.calibratevalue")),1),(0,i.Wm)(y,{module:w.module,sensorValue:w.calibrationVal,editable:w.editable,class:"demarcate-input",width:"12.5vw",height:"3.125vh",onUpdateData:e[2]||(e[2]=t=>$.updateData(t))},null,8,["module","sensorValue","editable"]),(0,i.Wm)(F,{module:w.module,class:"del-icon",bgcColor:"transparent",width:"2rem",height:"2rem",useIcon:!0,icon:"DeleteAll",iconSize:"2.5rem",onClick:$.delFromArrAll},null,8,["module","onClick"]),(0,i.Wm)(F,{module:w.module,class:"add",bgcColor:"transparent",width:"2rem",height:"2rem",borderRadius:"0",useIcon:!0,icon:"AddDmrct",iconSize:"2.5rem",onClick:$.addToArr},null,8,["module","onClick"])]),(0,i._)("div",p,[(0,i._)("tr",null,[(0,i._)("td",null,(0,a.zw)(t.$t("dbgdmrct.serialnumber")),1),(0,i._)("td",null,(0,a.zw)(t.$t("dbgdmrct.devicevalue")),1),(0,i._)("td",null,(0,a.zw)(t.$t("dbgdmrct.calibratevalue")),1),b]),(0,i._)("div",g,[(0,i._)("table",f,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(w.inputs.length,(t=>((0,i.wg)(),(0,i.iD)("tr",{key:t},[(0,i._)("td",null,(0,a.zw)(t),1),(0,i._)("td",null,(0,a.zw)(w.devs[t-1]),1),(0,i._)("td",null,(0,a.zw)(w.inputs[t-1]),1),(0,i._)("td",_,[(0,i.Wm)(F,{class:"delOne",module:w.module,bgcColor:"transparent",width:"2rem",height:"2rem",borderRadius:"0",useIcon:!0,icon:"DelDmrct",iconSize:"2rem",onClick:e=>$.delFromArr(t)},null,8,["module","onClick"])])])))),128))])])]),(0,i._)("div",v,[(0,i.Wm)(F,{module:w.module,class:"btn",textColor:"#fff",borderRadius:"4px",bgcColor:"#00c155",width:"17.25vw",height:"3.9063vh",fontSize:"1.625rem",fontFamily:"--SHSC-M",text:t.$t("dbgdmrct.calculate"),onClick:$.calculate},null,8,["module","text","onClick"]),(0,i._)("span",x,(0,a.zw)(t.$t("dbgdmrct.sensitivity"))+"："+(0,a.zw)(w.k),1)]),(0,i.Wm)(F,{module:w.module,class:"confirm-box",textColor:"#fff",borderRadius:"4px",bgcColor:"#00c155",width:"30.125rem",height:"3.75rem",fontSize:"2.25rem",fontFamily:"--SHSC-B",text:t.$t("dbgdmrct.save"),onClick:$.submitCalibrateData},null,8,["module","text","onClick"])])}var $=s(22213),C=s(39496),k=s(89555),y=s(96799),F=s(84965),V=s(74125),z=s(32015),N=s(10335),D={components:{NewSelect:y.Z,Counter:k.Z,InputVal:$.Z,LeetxButton:N.Z},data(){return{calibrateData:{},gain:0,offset:0,devs:[],inputs:[],files:[],pros:{},res:{ret_sensor:.001,ret_pos:.002},nthGroup:0,k:1,b:0,devVal:0,calibrationVal:0,editable:!1,busy:0,isRunOk:0,module:"CALIBRATION"}},methods:{enterFacPage(){(0,C.j$)().then((t=>{0!=t.status&&F.c.warning([this.$t("dbgdmrct.failInGloCalibration")])})).catch((()=>{F.c.warning([this.$t("dbgdmrct.failInGloCalibration")])}))},leaveFacPage(){(0,C.QO)().then((t=>{0!=t.status&&F.c.warning([this.$t("dbgdmrct.exitFail")])})).catch((()=>{F.c.warning([this.$t("dbgdmrct.exitFail")])}))},getPf(){(0,V.Lm)().then((t=>{if(0==t.status){this.files=t.data,this.pfList=this.files.sort(this.sortBy("pset"));for(let t=0;t<this.files.length;t++)this.pros[`${this.files[t].pset} [${this.files[t].name}]`]=this.files[t].pset}}))},valChng(t){if(1==this.$store.state.g_status.psetsrc)void 0!=t&&(0,V.TU)(t).then((()=>{F.c.success([this.$t("promsg.activate_suc")])})).catch((()=>{F.c.error([this.$t("promsg.activate_fail")])}));else{let t=this.$t("promsg.msgOne"),e=this.$t("promsg.msgTwo");F.c.warning([t,e])}},clbck(){F.c.warning([this.$t("promsg.run_status"),this.$t("promsg.nactivate_file")])},sortBy(t){return function(e,s){return e[t]-s[t]}},updateData(t){this.calibrationVal=t.sensorValue},addToArr(){let t=parseFloat(this.devVal.toFixed(3)),e=parseFloat(this.calibrationVal.toFixed(3));if("0"==t)return F.c.warning([this.$t("dbgdmrct.notBeZero")]);this.devs.splice(this.nthGroup,0,t),this.inputs.splice(this.nthGroup,0,e),this.nthGroup+=1},delFromArr(t){0!=this.nthGroup&&(this.devs.splice(t-1,1),this.inputs.splice(t-1,1),this.nthGroup=this.nthGroup>this.inputs.length-1?this.inputs.length:this.nthGroup)},delFromArrAll(){if(0==this.devs.length&&0==this.inputs.length)return;let t=this.$t("dbgdmrct.deleteConfigurate"),e=this.$t("dbgdmrct.yes"),s=this.$t("dbgdmrct.no"),i=this.$t("dbgdmrct.deleteAll");(0,z.Z)({title:t,confirmText:e,cancelText:s,msg:i}).then((()=>{this.devs=[],this.inputs=[],this.nthGroup=0}))},calculate(){(0,C.oN)().then((t=>{if(0==t.status){if(this.k=t.data.calib_k,this.b=t.data.calib_offset,this.devs.length!=this.inputs.length||0==this.devs.length)return;let e=0;for(let t=0;t<this.inputs.length;t++){let s=this.inputs[t]-this.b,i=this.devs[t]-this.b,a=s/i;e+=a/this.inputs.length}this.k=parseFloat(e).toFixed(5)}})).catch((()=>{F.c.error([this.$t("dbgdmrct.failRead")])}))},submitCalibrateData(){const t=this.k,e=this.b;(0,C.cx)({calib_k:t,calib_offset:e}).then((t=>{if(0==t.status){let t=this.$t("global.success");F.c.success([t])}else{let t=this.$t("global.err");F.c.error([t])}})).catch((()=>{let t=this.$t("global.err");F.c.error([t])}))},getDevVal(){(0,C.me)().then((t=>{this.devVal=parseFloat(t.data.inner_maxval.toFixed(3)),t.data.has_ext?this.calibrationVal=t.data.ext_maxval:this.editable=!0}))}},created(){this.getPf()},mounted(){this.enable&&this.enterFacPage(),this.getDevVal()},unmounted(){this.enable&&this.leaveFacPage()},computed:{isBusy(){return this.$store.state.g_status.busy},runOk(){return this.$store.state.g_status["rok"]},torque(){return parseFloat(this.res.ret_sensor.toFixed(3))},maxGroup(){return this.inputs.length},defaultPset(){return this.$store.state.g_status["pset"]},enable(){return this.module in this.$store.state.f_status.permissions&&4==this.$store.state.f_status.permissions[this.module]}},watch:{runOk:{handler(){this.runOk&&this.enable&&this.getDevVal()}}}},S=s(83744);const Z=(0,S.Z)(D,[["render",w],["__scopeId","data-v-2848bc24"]]);var A=Z}}]);
//# sourceMappingURL=930.757204dc.js.map