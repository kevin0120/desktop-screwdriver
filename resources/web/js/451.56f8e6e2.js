"use strict";(self["webpackChunkleetx_web"]=self["webpackChunkleetx_web"]||[]).push([[451],{59317:function(e,t,a){function n(e){let t;if(e instanceof Array){t=[];for(let a=0;a<e.length;a++)t[a]=n(e[a])}else if(e instanceof Object){t={};for(let a of Object.keys(e))t[a]=n(e[a])}else t=e;return t}function l(e,t,a=!1){let n=!0;if(e instanceof Array&&t instanceof Array&&t.length==e.length){for(let s=0;s<e.length;s++)if(n=n&&l(e[s],t[s],a),!n)break}else if(!(e instanceof Object&&t instanceof Object)||e instanceof Array||t instanceof Array)e instanceof Object||t instanceof Object?n=!1:(n=!0,a&&(n=e===t));else for(let s in e){if(!(s in t)){n=!1;break}if(n=n&&l(e[s],t[s],a),!n)break}return n}function s(e,t,a=!1){return a?JSON.stringify(e)===JSON.stringify(t):l(e,t)}a.d(t,{IK:function(){return s},p$:function(){return n}})},47451:function(e,t,a){a.r(t),a.d(t,{default:function(){return me}});var n=a(66252),l=a(3577);const s=e=>((0,n.dD)("data-v-6f5ef9f9"),e=e(),(0,n.Cn)(),e),i={class:"data-box"},o={class:"tech-basemsg-line"},r={class:"tech-num"},m={key:0,class:"tech-select"},d={class:"tech-name"},u={class:"form-box"},c={class:"inner-box"},h={class:"form-item torque-unit"},g={class:"form-item angle-unit"},f={class:"form-item speed-unit"},p=s((()=>(0,n._)("div",{class:"form-item zero"},[(0,n._)("span",null,"0.0")],-1))),b=s((()=>(0,n._)("span",{class:"v-text"},"V1",-1))),S=s((()=>(0,n._)("span",{class:"v-text"},"V2",-1))),w={class:"btn-box"};function P(e,t,a,s,P,_){const x=(0,n.up)("InputText"),V=(0,n.up)("svg-loader"),N=(0,n.up)("InputVal"),A=(0,n.up)("FormItem"),v=(0,n.up)("FormItemTwo"),D=(0,n.up)("LeetxButton");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("div",o,[(0,n._)("span",r,(0,l.zw)(e.$t("tchnlgy.prcsid"))+":",1),-1!=P.curPsetId?((0,n.wg)(),(0,n.iD)("div",m,(0,l.zw)(P.curPsetId.toString().padStart(3,"0")),1)):(0,n.kq)("",!0),(0,n._)("span",d,(0,l.zw)(e.$t("tchnlgy.prcsname")),1),-1!=P.curPsetId?((0,n.wg)(),(0,n.j4)(x,{key:1,module:P.module,class:"tech-input",disabled:!0,text:P.file.Name,"onUpdate:modelValue":t[0]||(t[0]=e=>P.file.Name=e.text),width:"24vw",textValid:""==_.nameReason,validReason:_.nameReason},null,8,["module","text","textValid","validReason"])):(0,n.kq)("",!0),-1!=P.curPsetId?((0,n.wg)(),(0,n.j4)(V,{key:2,onClick:_.showGlobalConfig,class:"tech-setting",icon:"StaticSetting",size:"2.5rem"},null,8,["onClick"])):(0,n.kq)("",!0)]),(0,n._)("div",u,[(0,n.Wm)(A,{class:"pro-text",label:e.$t("tchnlgy.timeOut")},{default:(0,n.w5)((()=>[(0,n.Wm)(N,{module:P.module,minNum:2e3,uname:"time",sensorValue:P.NewStandardModeData.ActionPara.Timeout_mS,"onUpdate:sensorValue":t[1]||(t[1]=e=>P.NewStandardModeData.ActionPara.Timeout_mS=e)},null,8,["module","sensorValue"])])),_:1},8,["label"])]),(0,n._)("div",c,[(0,n.Wm)(V,{class:"standard-mode-icon",icon:"StandardMode",size:"30rem"}),(0,n._)("div",h,(0,l.zw)(e.$t("monitor.torque"))+"/"+(0,l.zw)(_.sensorUnit("torque")),1),(0,n._)("div",g,(0,l.zw)(e.$t("monitor.angle"))+"/"+(0,l.zw)(_.sensorUnit("angle")),1),(0,n._)("div",f,(0,l.zw)(e.$t("monitor.speed"))+"/"+(0,l.zw)(_.sensorUnit("angle_speed")),1),p,(0,n.Wm)(A,{labelSize:"1.25rem",leftDis:"0",labelWidth:"5rem",class:"form-item max-angle-text",label:e.$t("selftapping.maxtorque")},{default:(0,n.w5)((()=>[(0,n.Wm)(N,{module:P.module,height:"2.4rem",fontSize:"1.25rem",width:"6.4rem",uname:"torque",showUnitName:!1,"min-num":P.NewStandardModeData.ActionPara.Target,maxNum:1.2*this.$store.state.g_status.sensor_max,sensorValue:P.NewStandardModeData.ActionPara.ResultTorque.Max,"onUpdate:sensorValue":t[2]||(t[2]=e=>P.NewStandardModeData.ActionPara.ResultTorque.Max=e)},null,8,["module","min-num","maxNum","sensorValue"])])),_:1},8,["label"]),(0,n.Wm)(A,{labelSize:"1.25rem",leftDis:"0",labelWidth:"5rem",class:"form-item target-angle-text",label:e.$t("strategy.targetTorque")},{default:(0,n.w5)((()=>[(0,n.Wm)(N,{module:P.module,height:"2.4rem",fontSize:"1.25rem",width:"6.4rem",uname:"torque",showUnitName:!1,"min-num":P.NewStandardModeData.ActionPara.ResultTorque.Min,"max-num":P.NewStandardModeData.ActionPara.ResultTorque.Max,sensorValue:P.NewStandardModeData.ActionPara.Target,"onUpdate:sensorValue":t[3]||(t[3]=e=>P.NewStandardModeData.ActionPara.Target=e)},null,8,["module","min-num","max-num","sensorValue"])])),_:1},8,["label"]),(0,n.Wm)(A,{labelSize:"1.25rem",leftDis:"0",labelWidth:"5rem",class:"form-item min-angle-text",label:e.$t("selftapping.mintorque")},{default:(0,n.w5)((()=>[(0,n.Wm)(N,{module:P.module,height:"2.4rem",fontSize:"1.25rem",width:"6.4rem",uname:"torque",showUnitName:!1,"max-num":P.NewStandardModeData.ActionPara.Target,sensorValue:P.NewStandardModeData.ActionPara.ResultTorque.Min,"onUpdate:sensorValue":t[4]||(t[4]=e=>P.NewStandardModeData.ActionPara.ResultTorque.Min=e)},null,8,["module","max-num","sensorValue"])])),_:1},8,["label"]),(0,n.Wm)(A,{labelSize:"1.25rem",leftDis:"0",labelWidth:"5rem",class:"form-item torque-threshold-text",label:e.$t("release.torqueThreshold")},{default:(0,n.w5)((()=>[(0,n.Wm)(N,{module:P.module,height:"2.4rem",fontSize:"1.25rem",width:"6.4rem",uname:"torque",showUnitName:!1,sensorValue:P.NewStandardModeData.ActionPara.ThresholdValue,"onUpdate:sensorValue":t[5]||(t[5]=e=>P.NewStandardModeData.ActionPara.ThresholdValue=e)},null,8,["module","sensorValue"])])),_:1},8,["label"]),(0,n.Wm)(A,{labelSize:"1.25rem",leftDis:"0",labelWidth:"5rem",class:"form-item min-angle",label:e.$t("tighten.miniAngle")},{default:(0,n.w5)((()=>[(0,n.Wm)(N,{module:P.module,height:"2.4rem",fontSize:"1.25rem",width:"6.4rem",uname:"angle",showUnitName:!1,"max-num":P.NewStandardModeData.ActionPara.ResultAngle.Max,sensorValue:P.NewStandardModeData.ActionPara.ResultAngle.Min,"onUpdate:sensorValue":t[6]||(t[6]=e=>P.NewStandardModeData.ActionPara.ResultAngle.Min=e)},null,8,["module","max-num","sensorValue"])])),_:1},8,["label"]),(0,n.Wm)(A,{labelSize:"1.25rem",leftDis:"0",labelWidth:"5rem",class:"form-item max-angle",label:e.$t("tighten.maxAngle")},{default:(0,n.w5)((()=>[(0,n.Wm)(N,{module:P.module,height:"2.4rem",fontSize:"1.25rem",width:"6.4rem",uname:"angle",showUnitName:!1,"min-num":P.NewStandardModeData.ActionPara.ResultAngle.Min,sensorValue:P.NewStandardModeData.ActionPara.ResultAngle.Max,"onUpdate:sensorValue":t[7]||(t[7]=e=>P.NewStandardModeData.ActionPara.ResultAngle.Max=e)},null,8,["module","min-num","sensorValue"])])),_:1},8,["label"]),(0,n.Wm)(v,{flexDir:"row",class:"vOne"},{default:(0,n.w5)((()=>[(0,n.Wm)(N,{module:P.module,fontSize:"1.25rem",height:"2.4rem",width:"6.4rem",uname:"angle_speed","show-unit-name":!1,sensorValue:P.NewStandardModeData.ActionPara.Velocity,"onUpdate:sensorValue":t[8]||(t[8]=e=>P.NewStandardModeData.ActionPara.Velocity=e)},null,8,["module","sensorValue"]),b])),_:1}),(0,n.Wm)(v,{flexDir:"row",class:"vTwo"},{default:(0,n.w5)((()=>[(0,n.Wm)(N,{module:P.module,fontSize:"1.25rem",height:"2.4rem",width:"6.4rem",uname:"angle_speed","show-unit-name":!1,sensorValue:P.NewStandardModeData.ActionPara.TightenVelocity,"onUpdate:sensorValue":t[9]||(t[9]=e=>P.NewStandardModeData.ActionPara.TightenVelocity=e)},null,8,["module","sensorValue"]),S])),_:1})]),(0,n._)("div",w,[(0,n.Wm)(D,{enablerun:!1,module:P.module,class:"confirm-box",textColor:"#fff",borderRadius:"4px",bgcColor:"#00c155",fontSize:"2.25rem",fontFamily:"--SHSC-B",text:e.$t("dbgdmrct.save"),onClick:_.submitStandardData},null,8,["module","text","onClick"])])])}var _=a(70032),x=a(59317),V=a(265),N=a(46613),A=a(30703),v=a(74125),D=a(84965),M=a(69314);const y=M.s;function q(){return{Name:"...",Pset:1,Ver:"1.0.0",Sequence:{GlobalParams:{AutoPowerOn:!0,AutoPowerOff:!1,Direction:"CW",SampleFrequency:y.hightSetting.DefaultSampleFrequency,SamplingNumber:y.hightSetting.DefaultSampleNum,CalibrationeOn:!0,GlobalAngleMonitoring:!0,ThresholdValue:y.hightSetting.DefaultStartTorque,AngleLimit:{Min:y.hightSetting.MinAngle,Max:y.hightSetting.MaxAngle}},Branchs:[{Name:"MainBranch",Axis:{Name:"MainSpindle",StartMode:"csv",Direction:"CW"},Start:0,End:1,SeqItems:[]}]}}}var $=a(22805),T=a(57414),W=a(49963),C=a(92797);const z={key:0,class:"set-tech-box"},I={class:"head-text-line"},k={class:"time-line"},R={class:"tech-num"},O={class:"sampling-line"},U={class:"sampling-rate"},L={class:"max-line"},j={class:"max-samples"},E={class:"dir-line"},G={class:"default-dir"},Z={class:"ergonomic-line"},F={class:"ergonomic-text"},B={class:"discharge-time-line"};function J(e,t,a,s,i,o){const r=(0,n.up)("svgloader"),m=(0,n.up)("InputVal"),d=(0,n.up)("NewSelect"),u=(0,n.up)("LeetxSwitch"),c=(0,n.up)("LeetxButton");return i.isShow?((0,n.wg)(),(0,n.iD)("div",z,[(0,n._)("div",I,[(0,n._)("span",null,(0,l.zw)(e.$t("hightsetting.advancedSettings")),1),(0,n._)("span",{class:"cancel-box",onClick:t[0]||(t[0]=(...e)=>o.cancel&&o.cancel(...e))},[(0,n.Wm)(r,{class:"tech-setting",icon:"Close",size:"1.2rem"})])]),(0,n._)("div",k,[(0,n._)("span",R,(0,l.zw)(e.$t("hightsetting.startingTorque")),1),(0,n.Wm)(m,{module:i.module,sensorValue:i.globalParams.ThresholdValue,"onUpdate:sensorValue":t[1]||(t[1]=e=>i.globalParams.ThresholdValue=e),class:"tech-input",width:"18rem",uname:"torque"},null,8,["module","sensorValue"])]),(0,n._)("div",O,[(0,n._)("span",U,(0,l.zw)(e.$t("hightsetting.samplingRate")),1),(0,n.Wm)(d,{module:i.module,options:i.frequencys,realVal:i.globalParams.SampleFrequency,"onUpdate:realVal":t[2]||(t[2]=e=>i.globalParams.SampleFrequency=e),class:"sampling-select"},null,8,["module","options","realVal"])]),(0,n._)("div",L,[(0,n._)("span",j,(0,l.zw)(e.$t("hightsetting.maxSamples")),1),(0,n.Wm)(d,{module:i.module,options:i.samplingDots,realVal:i.globalParams.SamplingNumber,"onUpdate:realVal":t[3]||(t[3]=e=>i.globalParams.SamplingNumber=e),class:"max-samples-select"},null,8,["module","options","realVal"])]),(0,n._)("div",E,[(0,n._)("span",G,(0,l.zw)(e.$t("hightsetting.defRotationDirection")),1),(0,n.Wm)(d,{module:i.module,options:i.dirs,realVal:i.globalParams.Direction,"onUpdate:realVal":t[4]||(t[4]=e=>i.globalParams.Direction=e),class:"default-dir-btn"},null,8,["module","options","realVal"])]),(0,n._)("div",Z,[(0,n._)("span",F,(0,l.zw)(e.$t("hightsetting.ergonomicStop")),1),(0,n.Wm)(u,{module:i.module,class:"ergonomic-switch",activeVal:!0,staticVal:!1,value:i.globalParams.EnableSoftStop,onSentVal:t[5]||(t[5]=e=>i.globalParams.EnableSoftStop=e),height:2.5},null,8,["module","value","height"])]),(0,n._)("div",B,[(0,n._)("span",{class:(0,l.C_)(["discharge-time-text",{"forbit-color":!i.globalParams.EnableSoftStop}])},(0,l.zw)(e.$t("hightsetting.dischargeTime")),3),(0,n.Wm)(m,{module:i.module,class:"discharge-time-input",isAllowUse:i.globalParams.EnableSoftStop,sensorValue:i.globalParams.SoftStopTime,"onUpdate:sensorValue":t[6]||(t[6]=e=>i.globalParams.SoftStopTime=e),width:"18rem",uname:"discharge_time"},null,8,["module","isAllowUse","sensorValue"])]),(0,n.Wm)(c,{bgcColor:"#00c155",textColor:"#fff",width:"30.3125rem",fontSize:"2.25rem",class:"confirm-box",text:e.$t("confirm.validity"),onClick:o.confirmInner},null,8,["text","onClick"])])):(0,n.kq)("",!0)}var H=a(73496),K=a(16496),X=a(65884),Y=a(83067);const Q={components:{InputVal:_.Z,svgloader:H.Z,LeetxButton:V.Z,NewSelect:K.Z,LeetxSwitch:Y.Z},data(){return{module:"PROFILE",frequencys:{"100sps":100,"250sps":250,"500sps":500,"1000sps":1e3},dirs:{[this.$t("hightsetting.foreward")]:"CW",[this.$t("hightsetting.reverse")]:"CCW"},samplingDots:{1e3:1e3,2e3:2e3,5e3:5e3,1e4:1e4},isShow:!0,maskId:0,globalParams:void 0,angleRangeValid:!0}},methods:{cancel(){this.isShow=!1,X.g.descend(this.maskId)},confirmInner(){if(!this.angleRangeValid){let e=this.$t("hightsetting.globalMonitpers"),t=this.$t("hightsetting.wrongRange");return D.c.warning([e,t])}this.isShow=!1,this.onConfirm&&this.onConfirm(this.globalParams),X.g.descend(this.maskId)},modData(e,t){const a=["ThresholdValue","AngleMin","AngleMax"];-1!==a.indexOf(e)?"ThresholdValue"===e?this.globalParams[e]=t.sensorValue:"AngleMin"===e?this.globalParams.AngleLimit.Min=t.sensorValue:this.globalParams.AngleLimit.Max=t.sensorValue:this.globalParams[e]=t},initStatus(){this.maskId=X.g.rise(15)},initGlobalParams(){this.globalParams=(0,x.p$)(this.GlobalParams)}},created(){this.initGlobalParams()},mounted(){this.initStatus()},props:{GlobalParams:{AutoPowerOn:!0,AutoPowerOff:!1,Direction:"CW",SampleFrequency:1e3,SamplingNumber:1e4,CalibrationeOn:!0,GlobalAngleMonitoring:!1,ThresholdValue:0,AngleLimit:{Min:-50,Max:50},ReverseSpeedValue:10,ReverseAngleValue:0,EnableSoftStop:!0,SoftStopTime:100}},computed:{},watch:{globalParams:{deep:!0,handler:function(){this.angleRangeValid=this.globalParams.AngleLimit.Min<this.globalParams.AngleLimit.Max}}}},ee=()=>{(0,W.sj)((e=>({"56df70be":e.pointerEvent,"0109f10a":e.opacity})))},te=Q.setup;Q.setup=te?(e,t)=>(ee(),te(e,t)):ee;var ae=Q,ne=a(83744);const le=(0,ne.Z)(ae,[["render",J],["__scopeId","data-v-d0e328e0"]]);var se=le;const ie=e=>new Promise(((t,a)=>{let n=(0,W.ri)(se,e).use(C.Z).mount(document.createElement("div"));document.body.appendChild(n.$el),n.onConfirm=e=>{t(e)},n.onCancel=function(e){a(e)}}));var oe={components:{InputVal:_.Z,LeetxButton:V.Z,InputText:A.Z},data(){return{module:"PROFILE",NewStandardModeData:(0,N.Z)(),curPsetId:-1,file:q(),profileNameLst:[],need_check_edit:!1,global_name_json:"",global_paras_json:"",global_advanced_paras_json:""}},methods:{showGlobalConfig(){let e=this.file.Sequence.GlobalParams;ie({GlobalParams:e}).then((e=>{this.file.Sequence.GlobalParams=e,this.need_check_edit=!0})).catch((e=>{e&&console.log(e)}))},getPfList(e){(0,v.Lm)().then((t=>{9127!=t.status&&0==t.status&&(this.NameLst=[],this.profileNameLst=[],t.data.forEach((e=>{e.pset!=this.curPsetId&&this.profileNameLst.push(e.name)})),e&&e())})).catch((()=>{}))},sensorUnit(e){return this.$store.state.sensors[e].name},excuteDefaultAction(){this.getPfList(),this.curPsetId=this.$route.query.pset,void 0!==this.curPsetId&&(0,v.Y3)(this.curPsetId).then((e=>{this.need_check_edit=!0,this.file=e.data.Profile,this.global_name_json=JSON.stringify(e.data.Profile.Name),this.global_advanced_paras_json=JSON.stringify(this.file.Sequence.GlobalParams),e.data.Profile.Sequence.Branchs[0].SeqItems.forEach((e=>{"Standard"==e.Action&&(this.NewStandardModeData=(0,x.p$)(e),this.global_paras_json=JSON.stringify(this.NewStandardModeData))}))})).catch((e=>{console.log("getFileContent  error ",e)}))},async submitStandardData(){if(""==this.nameReason||-1==this.curPsetId){if(!this.enabledEdit)return D.c.warning(["该文件处于运行状态","不允许修改"]);this.file.Sequence.Branchs[0].SeqItems=(0,$.t2)([this.NewStandardModeData]),this.need_check_edit=!1;try{await(0,v.FX)({Profile:this.file}),this.need_check_edit=!1,D.c.success([this.$t("setop.saveSuc")]),this.excuteDefaultAction()}catch(e){console.log("pfModApi  error ",e),D.c.error(["工艺文件保存失败"])}}else D.c.warning([this.$t("job.invalidName")])},isChanged(){let e=this.global_paras_json==JSON.stringify(this.NewStandardModeData),t=this.global_name_json==JSON.stringify(this.file.Name),a=this.global_advanced_paras_json==JSON.stringify(this.file.Sequence.GlobalParams);return!(e&&t&&a||0==this.need_check_edit)},openDialog(){let e=this.$t("tchnlgy.savePset"),t=this.$t("tchnlgy.yes"),a=this.$t("tchnlgy.no"),n=this.$t("tchnlgy.isSavePset");(0,T.Z)({title:e,confirmText:t,cancelText:a,msg:n}).then((()=>{this.submitStandardData(),this.excuteDefaultAction()})).catch((()=>{this.excuteDefaultAction()}))}},props:{stepData:{type:Object,default:function(){return{startAngle:0,endAngle:0,maxTorque:0,minTorque:0,leftTorque:0,rightTorque:0,triggerTorque:0,getValWay:0,prefabTorqueMode:0,angleClear:0,torqueClear:0}}}},beforeRouteLeave(e,t,a){if(""!=this.nameReason&&-1!=this.curPsetId)return D.c.warning([this.$t("job.invalidName")]),void a(!1);if(this.isChanged()){let e=this.$t("tchnlgy.savePset"),t=this.$t("tchnlgy.yes"),n=this.$t("tchnlgy.no"),l=this.$t("tchnlgy.isSavePset");(0,T.Z)({title:e,confirmText:t,cancelText:n,msg:l}).then((async()=>{await this.submitStandardData(),a()})).catch((()=>{a()}))}else a()},watch:{"$route.query.pset":{immediate:!0,handler:function(e){void 0!=e&&(this.isChanged()?this.openDialog():this.excuteDefaultAction())}}},created(){this.getPfList()},computed:{nameReason(){return-1==this.curPsetId?-1:0==this.file.Name.length?this.$t("dlgprogram.nameNotEmpty"):this.file.Name&&this.profileNameLst.length>0&&-1!=this.profileNameLst.indexOf(this.file.Name)?this.$t("dlgprogram.nameRepeat"):""},enabledEdit(){return 0==(this.curPsetId==this.$store.state.g_status.pset&&this.$store.state.g_status.busy)}}};const re=(0,ne.Z)(oe,[["render",P],["__scopeId","data-v-6f5ef9f9"]]);var me=re}}]);
//# sourceMappingURL=451.56f8e6e2.js.map