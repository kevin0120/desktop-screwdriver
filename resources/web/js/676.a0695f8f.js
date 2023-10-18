"use strict";(self["webpackChunkleetx_web"]=self["webpackChunkleetx_web"]||[]).push([[676],{81676:function(t,e,s){s.r(e),s.d(e,{default:function(){return W}});var o=s(66252),a=s(3577);const n={class:"big-box"},i={class:"set-box"},l={class:"control-line"},r={class:"control"},c={class:"pset-src-line"},h={class:"pset-src"},u={class:"too-start-line"},d={class:"too-start"},p={class:"sn-line"},m={class:"too-start"},_={class:"backward-mode-line"},D={class:"lang"},w={class:"backward-speed-line"},b={class:"backward-speed"},S={class:"max-torque-line"},C={class:"backward-speed"},g={class:"job_pset_mode-line"},f={class:"job_pset_mode"},$={class:"job-src-line"},V={class:"job-src"};function x(t,e,s,x,O,v){const k=(0,o.up)("NewSelect"),y=(0,o.up)("LeetxButton"),N=(0,o.up)("InputVal");return(0,o.wg)(),(0,o.iD)("div",n,[(0,o._)("div",i,[(0,o._)("div",l,[(0,o._)("span",r,(0,a.zw)(t.$t("setcontrol.enablesrc")),1),(0,o.Wm)(k,{module:O.module,class:"name-input",realVal:O.controlData.power_enable,options:O.enableOptions,onValChng:e[0]||(e[0]=t=>v.modData("power_enable",t))},null,8,["module","realVal","options"])]),(0,o._)("div",c,[(0,o._)("span",h,(0,a.zw)(t.$t("setcontrol.psetsrc")),1),(0,o.Wm)(k,{module:O.module,class:"num-input",realVal:O.controlData.pset,options:O.psetOptions,onValChng:e[1]||(e[1]=t=>v.modData("pset",t))},null,8,["module","realVal","options"]),O.isShowBtn?((0,o.wg)(),(0,o.j4)(y,{key:0,class:"edit-pset",textColor:"#fff",borderRadius:"0.5rem",bgcColor:"#00c155",width:"10vw",height:"3.9063vh",fontSize:"1.5rem",fontFamily:"--SHSC-B",text:t.$t("setcontrol.editor"),onClick:v.edit},null,8,["text","onClick"])):(0,o.kq)("",!0)]),(0,o._)("div",u,[(0,o._)("span",d,(0,a.zw)(t.$t("setcontrol.toolstartsrc")),1),(0,o.Wm)(k,{module:O.module,class:"datetime-input",realVal:O.controlData.tool_run,options:O.toolOptions,onValChng:e[2]||(e[2]=t=>v.modData("tool_run",t))},null,8,["module","realVal","options"])]),(0,o._)("div",p,[(0,o._)("span",m,(0,a.zw)(t.$t("setcontrol.barCodeSource")),1),(0,o.Wm)(k,{module:O.module,class:"datetime-input",realVal:O.controlData.sn_src,options:t.snOptions,onValChng:e[3]||(e[3]=t=>v.modData("sn_src",t))},null,8,["module","realVal","options"])]),(0,o._)("div",_,[(0,o._)("span",D,(0,a.zw)(t.$t("setcontrol.reversemode")),1),(0,o.Wm)(k,{module:O.module,class:"lang-input",realVal:O.controlData.ccw_mode,options:O.bckwrdModes,onValChng:e[4]||(e[4]=t=>v.modData("ccw_mode",t))},null,8,["module","realVal","options"])]),(0,o._)("div",w,[(0,o._)("span",b,(0,a.zw)(t.$t("setcontrol.reversespeed")),1),(0,o.Wm)(N,{module:O.module,class:"torque-input",minNum:v.minInputSpeed,maxNum:v.maxInputSpeed,isDirty:O.isDirty,"onUpdate:isDirty":e[5]||(e[5]=t=>O.isDirty=t),sensorValue:O.controlData.ccw_speed,"onUpdate:sensorValue":e[6]||(e[6]=t=>O.controlData.ccw_speed=t),uname:"angle_speed"},null,8,["module","minNum","maxNum","isDirty","sensorValue"])]),(0,o._)("div",S,[(0,o._)("span",C,(0,a.zw)(t.$t("setcontrol.fwrdLimit")),1),(0,o.Wm)(N,{module:O.module,class:"torque-input",minNum:1,maxNum:v.maxInputTorque,isDirty:O.isDirty,"onUpdate:isDirty":e[7]||(e[7]=t=>O.isDirty=t),sensorValue:O.controlData.ccw_limit,onUpdateData:e[8]||(e[8]=t=>v.modData("ccw_limit",t)),uname:"torque"},null,8,["module","maxNum","isDirty","sensorValue"])]),(0,o._)("div",g,[(0,o._)("span",f,(0,a.zw)(t.$t("setcontrol.modeSelect")),1),(0,o.Wm)(k,{module:O.module,class:"job_pset_mode-input",realVal:O.controlData.job_pset_mode,options:{job:1,pset:0},onValChng:e[9]||(e[9]=t=>v.modData("job_pset_mode",t))},null,8,["module","realVal"])]),(0,o._)("div",$,[(0,o._)("span",V,(0,a.zw)(t.$t("setcontrol.jobSource")),1),(0,o.Wm)(k,{module:O.module,class:"job-num-input",realVal:O.controlData.job_src,options:O.jobOptions,onValChng:e[10]||(e[10]=t=>v.modData("job_src",t))},null,8,["module","realVal","options"])]),(0,o.Wm)(y,{enablerun:!1,module:O.module,class:"confirm-box",textColor:"#fff",bgcColor:"#00c155",width:"30.125rem",height:"3.75rem",fontSize:"2.25rem",fontFamily:"--SHSC-B",text:t.$t("confirm.confirm"),onClick:v.submitControlData},null,8,["module","text","onClick"])])])}var O=s(84965),v=s(70032),k=s(26971),y=s(16496),N=s(36345),j=s(265),M=s(92797),z={components:{NewSelect:y.Z,LeetxButton:j.Z,InputVal:v.Z},data(){return{module:"DEV_CONTROL",isDirty:!1,col:11,row:7,width:85.625,height:23.6719,matrix:void 0,prgrmNum:2,controlData:{power_enable:0,pset:1,tool_run:1,ccw_mode:0,ccw_speed:0,ccw_limit:0,press_run:0,result_reset:0,human_stop:0,job_src:1,job_pset_mode:0,job_enable:0,sn_src:3},enableOptions:{"默认使能":0,IO:2,"现场总线":3,"OP开放协议":4},psetOptions:{"触摸屏":1,IO:2,"现场总线":3,"OP开放协议":4},jobOptions:{"触摸屏":1,IO:2,"现场总线":3},toolOptions:{"触摸屏":1,IO:2,"现场总线":3,"OP开放协议":4,"扳机":16,"按压启动":17},bckwrdModes:{"禁用":0,"单次点击反转一次":1,"单次点击永远反转":2,"两次点击反转一次":3,"两次点击永远反转":4},global_control_data:"",isShowBtn:!1,need_check_edit:!1}},methods:{edit(){3==this.controlData.pset&&this.$router.push({path:"/setup/network/totalline"}),5==this.controlData.pset&&this.$router.push({path:"/setup/network/sn"})},tbval(t,e){return 0==t&&0!=e?e:0==e&&0!=t?30*(t-1)+1:""},initMatrixVal(){this.matrix=[];for(let t=0;t<this.row;t++){this.matrix.push([]);for(let e=0;e<this.col;e++)this.matrix[t].push(!1)}},chgColor(t,e){0!=t&&0!=e&&(this.matrix[t][e]=!this.matrix[t][e])},getUnit(t){return this.$store.state.sensors[t]},submitControlData(){(0,k.Re)(this.controlData).then((()=>{let t=M.Z.global.t("setbase.success");O.c.success([t]),this.isDirty=!1,this.getControlData()})).catch((()=>{let t=M.Z.global.t("setbase.err");O.c.error([t])})),this.need_check_edit=!1},modData(t,e){"ccw_speed"!=t&&"ccw_limit"!=t?(this.$bus.emit("updateControlSetting"),this.controlData[t]=e):this.controlData[t]=e.sensorValue},getControlData(){(0,k.KZ)().then((t=>{0==t.status&&(this.need_check_edit=!0,this.controlData=t.data,3==this.controlData.pset||5==this.controlData.pset?this.isShowBtn=!0:this.isShowBtn=!1,this.global_control_data=JSON.stringify(this.controlData),this.$store.state.f_status.power_enable=this.controlData.power_enable,this.$store.state.f_status.tool_run=this.controlData.tool_run)})).catch((()=>{}))},getSnData(){(0,k.Z4)().then((t=>{if(0==t.status&&(this.need_check_edit=!0,this.newSnData=t.data,this.global_sn_data=JSON.stringify(this.newSnData),"CharMap"in this.newSnData==0&&(this.newSnData.CharMap=[]),"Direction"in this.newSnData==0&&(this.newSnData.Direction=0),"VerifySize"in this.newSnData==0&&(this.newSnData.VerifySize=0),"CharVerify"in this.newSnData==0&&(this.newSnData.CharVerify=0)),9106==t.status){let t=this.$t("settable.failedToObtainSN");O.c.error([t])}}))},initOptions(){let t=this.$t("setcontrol.defaultEnable"),e=this.$t("setcontrol.touchscreen"),s=this.$t("setcontrol.totalline"),o=this.$t("setcontrol.dvlpmntAgrmnt"),a=this.$t("setcontrol.io"),n=this.$t("setcontrol.trigger"),i=this.$t("setcontrol.pushStart"),l=this.$t("setcontrol.nouse"),r=this.$t("setcontrol.oneOne"),c=this.$t("setcontrol.oneForever"),h=this.$t("setcontrol.twoOne"),u=this.$t("setcontrol.twoForever"),d=this.$t("setcontrol.ioReverse"),p=this.$t("setcontrol.filedBus"),m=this.$t("setcontrol.barcodeScanner"),_=this.$t("setcontrol.barCode"),D=this.$t("setcontrol.notEnabled");this.enableOptions={[t]:0,[a]:2,[s]:3,[o]:4},this.psetOptions={[e]:1,[a]:2,[s]:3,[o]:4,[_]:5,"Web Api":6},this.toolOptions={[e]:1,[a]:2,[s]:3,[n]:16,[i]:17},this.snOptions={[D]:0,[s]:3,[o]:4,[m]:5,"Web Api":6},this.bckwrdModes={[l]:0,[r]:1,[c]:2,[h]:3,[u]:4,[d]:5,[p]:6},this.jobOptions={[e]:1,[a]:2,[s]:3}},checkDataChange(){3==this.controlData.pset||5==this.controlData.pset?this.isShowBtn=!0:this.isShowBtn=!1},addSnData(){let t="AB",e=1;this.newSnData.CharMap.push({Char:t,Pset:e});let s=[];for(let o=0;o<this.newSnData.CharMap.length;o++)s.push(this.newSnData.CharMap[o].Char);this.countCharNum()},countCharNum(t){let e=0;return this.newSnData.CharMap.forEach((s=>{s["Char"]==t&&(e+=1)})),e},checkRepeatChar(){let t=!1;return this.newSnData.CharMap.forEach((e=>{t=this.countCharNum(e["Char"])>1})),t},delFromArr(t){0!=this.newSnData.CharMap.length&&this.newSnData.CharMap.splice(t-1,1)}},computed:{tdHeight(){return this.height/this.row+"vh"},tdWidth(){return this.width/this.col+"vw"},maxInputTorque(){let t=1.25*this.$store.state.g_status.sensor_max;return isNaN(t)?20:t},minInputSpeed(){return.005*this.$store.state.g_status.speed_max},maxInputSpeed(){return this.$store.state.g_status.speed_max},charLen(){return 180-this.newSnData.StartBit}},created(){this.initOptions(),this.initMatrixVal(),this.getControlData()},beforeRouteLeave(t,e,s){let o=""==this.global_control_data||this.global_control_data==JSON.stringify(this.controlData);if(o&&0==this.isDirty||this.$store.state.g_status.busy||0==this.need_check_edit)s();else{let t=this.$t("setcontrol.saveSet"),e=this.$t("setcontrol.yes"),o=this.$t("setcontrol.no"),a=this.$t("setcontrol.isSaveSet");(0,N.Z)({title:t,confirmText:e,cancelText:o,msg:a}).then((()=>{this.submitControlData(),s()})).catch((()=>{s()}))}},watch:{controlData:{deep:!0,handler:function(){this.checkDataChange()}}}},B=s(83744);const I=(0,B.Z)(z,[["render",x],["__scopeId","data-v-6ffabee0"]]);var W=I}}]);
//# sourceMappingURL=676.a0695f8f.js.map