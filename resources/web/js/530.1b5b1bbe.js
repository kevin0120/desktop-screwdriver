"use strict";(self["webpackChunkleetx_web"]=self["webpackChunkleetx_web"]||[]).push([[530],{38530:function(t,e,o){o.r(e),o.d(e,{default:function(){return q}});var s=o(66252),a=o(3577);const n={class:"big-box"},l={class:"set-box"},i={class:"control-line"},r={class:"control"},c={class:"pset-src-line"},h={class:"pset-src"},u={class:"too-start-line"},d={class:"too-start"},p={class:"sn-line"},m={class:"too-start"},_={class:"backward-mode-line"},D={class:"lang"},w={class:"backward-speed-line"},b={class:"backward-speed"},S={class:"max-torque-line"},g={class:"backward-speed"},C={class:"person-device-line"},$={class:"person-device"},f={class:"job_pset_mode-line"},V={class:"job_pset_mode"},v={class:"job_enable-line"},x={class:"job-src"};function O(t,e,o,O,k,y){const N=(0,s.up)("NewSelect"),j=(0,s.up)("LeetxButton"),z=(0,s.up)("InputVal"),M=(0,s.up)("LeetxSwitch");return(0,s.wg)(),(0,s.iD)("div",n,[(0,s._)("div",l,[(0,s._)("div",i,[(0,s._)("span",r,(0,a.zw)(t.$t("setcontrol.enablesrc")),1),(0,s.Wm)(N,{module:k.module,class:"name-input",realVal:k.controlData.power_enable,options:k.enableOptions,onValChng:e[0]||(e[0]=t=>y.modData("power_enable",t))},null,8,["module","realVal","options"])]),(0,s._)("div",c,[(0,s._)("span",h,(0,a.zw)(t.$t("setcontrol.psetsrc")),1),(0,s.Wm)(N,{module:k.module,class:"num-input",realVal:k.controlData.pset,options:k.psetOptions,onValChng:e[1]||(e[1]=t=>y.modData("pset",t))},null,8,["module","realVal","options"]),k.isShowBtn?((0,s.wg)(),(0,s.j4)(j,{key:0,class:"edit-pset",textColor:"#fff",borderRadius:"0.5rem",bgcColor:"#00c155",width:"10vw",height:"3.9063vh",fontSize:"1.5rem",fontFamily:"--SHSC-B",text:t.$t("setcontrol.editor"),onClick:y.edit},null,8,["text","onClick"])):(0,s.kq)("",!0)]),(0,s._)("div",u,[(0,s._)("span",d,(0,a.zw)(t.$t("setcontrol.toolstartsrc")),1),(0,s.Wm)(N,{module:k.module,class:"datetime-input",realVal:k.controlData.tool_run,options:k.toolOptions,onValChng:e[2]||(e[2]=t=>y.modData("tool_run",t))},null,8,["module","realVal","options"])]),(0,s._)("div",p,[(0,s._)("span",m,(0,a.zw)(t.$t("setcontrol.barCodeSource")),1),(0,s.Wm)(N,{module:k.module,class:"datetime-input",realVal:k.controlData.sn_src,options:t.snOptions,onValChng:e[3]||(e[3]=t=>y.modData("sn_src",t))},null,8,["module","realVal","options"])]),(0,s._)("div",_,[(0,s._)("span",D,(0,a.zw)(t.$t("setcontrol.reversemode")),1),(0,s.Wm)(N,{module:k.module,class:"lang-input",realVal:k.controlData.ccw_mode,options:k.bckwrdModes,onValChng:e[4]||(e[4]=t=>y.modData("ccw_mode",t))},null,8,["module","realVal","options"])]),(0,s._)("div",w,[(0,s._)("span",b,(0,a.zw)(t.$t("setcontrol.reversespeed")),1),(0,s.Wm)(z,{module:k.module,class:"torque-input",minNum:y.minInputSpeed,maxNum:y.maxInputSpeed,isDirty:k.isDirty,"onUpdate:isDirty":e[5]||(e[5]=t=>k.isDirty=t),sensorValue:k.controlData.ccw_speed,"onUpdate:sensorValue":e[6]||(e[6]=t=>k.controlData.ccw_speed=t),uname:"angle_speed"},null,8,["module","minNum","maxNum","isDirty","sensorValue"])]),(0,s._)("div",S,[(0,s._)("span",g,(0,a.zw)(t.$t("setcontrol.fwrdLimit")),1),(0,s.Wm)(z,{module:k.module,class:"torque-input",minNum:1,maxNum:y.maxInputTorque,isDirty:k.isDirty,"onUpdate:isDirty":e[7]||(e[7]=t=>k.isDirty=t),sensorValue:k.controlData.ccw_limit,onUpdateData:e[8]||(e[8]=t=>y.modData("ccw_limit",t)),uname:"torque"},null,8,["module","maxNum","isDirty","sensorValue"])]),(0,s._)("div",C,[(0,s._)("span",$,(0,a.zw)(t.$t("setcontrol.ergonomicstop")),1),(0,s.Wm)(M,{module:k.module,class:"person-device-input",value:k.controlData.human_stop,modelValue:k.controlData.human_stop,"onUpdate:modelValue":e[9]||(e[9]=t=>k.controlData.human_stop=t),activeVal:1,staticVal:0,height:2},null,8,["module","value","modelValue"])]),(0,s._)("div",f,[(0,s._)("span",V,(0,a.zw)(t.$t("setcontrol.modeSelect")),1),(0,s.Wm)(N,{module:k.module,class:"job_pset_mode-input",realVal:k.controlData.job_pset_mode,options:{job:1,pset:0},onValChng:e[10]||(e[10]=t=>y.modData("job_pset_mode",t))},null,8,["module","realVal"])]),(0,s._)("div",v,[(0,s._)("span",x,(0,a.zw)(t.$t("setcontrol.jobSource")),1),(0,s.Wm)(N,{module:k.module,class:"job-num-input",realVal:k.controlData.job_src,options:k.jobOptions,onValChng:e[11]||(e[11]=t=>y.modData("job_src",t))},null,8,["module","realVal","options"])]),(0,s.Wm)(j,{enablerun:!1,module:k.module,class:"confirm-box",textColor:"#fff",bgcColor:"#00c155",width:"30.125rem",height:"3.75rem",fontSize:"2.25rem",fontFamily:"--SHSC-B",text:t.$t("confirm.confirm"),onClick:y.submitControlData},null,8,["module","text","onClick"])])])}var k=o(84965),y=o(22213),N=o(27253),j=o(26971),z=o(96799),M=o(32015),W=o(10335),B=o(92797),I={components:{NewSelect:z.Z,LeetxButton:W.Z,InputVal:y.Z,LeetxSwitch:N.Z},data(){return{module:"DEV_CONTROL",isDirty:!1,col:11,row:7,width:85.625,height:23.6719,matrix:void 0,prgrmNum:2,controlData:{power_enable:0,pset:1,tool_run:1,ccw_mode:0,ccw_speed:0,ccw_limit:0,press_run:0,result_reset:0,human_stop:0,job_src:1,job_pset_mode:0,job_enable:0,sn_src:3},enableOptions:{"默认使能":0,IO:2,"现场总线":3,"OP开放协议":4},psetOptions:{"触摸屏":1,IO:2,"现场总线":3,"OP开放协议":4},jobOptions:{"触摸屏":1,IO:2,"现场总线":3,"OP开放协议":4},toolOptions:{"触摸屏":1,IO:2,"现场总线":3,"OP开放协议":4,"扳机":16,"按压启动":17},bckwrdModes:{"禁用":0,"单次点击反转一次":1,"单次点击永远反转":2,"两次点击反转一次":3,"两次点击永远反转":4},global_control_data:"",isShowBtn:!1,need_check_edit:!1}},methods:{edit(){3==this.controlData.pset&&this.$router.push({path:"/setup/network/totalline"}),5==this.controlData.pset&&this.$router.push({path:"/setup/network/sn"})},tbval(t,e){return 0==t&&0!=e?e:0==e&&0!=t?30*(t-1)+1:""},initMatrixVal(){this.matrix=[];for(let t=0;t<this.row;t++){this.matrix.push([]);for(let e=0;e<this.col;e++)this.matrix[t].push(!1)}},chgColor(t,e){0!=t&&0!=e&&(this.matrix[t][e]=!this.matrix[t][e])},getUnit(t){return this.$store.state.sensors[t]},submitControlData(){(0,j.Re)(this.controlData).then((()=>{let t=B.Z.global.t("setbase.success");k.c.success([t]),this.isDirty=!1,this.getControlData()})).catch((()=>{let t=B.Z.global.t("setbase.err");k.c.error([t])})),this.need_check_edit=!1},modData(t,e){"ccw_speed"!=t&&"ccw_limit"!=t?(this.$bus.emit("updateControlSetting"),this.controlData[t]=e):this.controlData[t]=e.sensorValue},getControlData(){(0,j.KZ)().then((t=>{0==t.status&&(this.need_check_edit=!0,this.controlData=t.data,3==this.controlData.pset||5==this.controlData.pset?this.isShowBtn=!0:this.isShowBtn=!1,this.global_control_data=JSON.stringify(this.controlData),this.$store.state.f_status.power_enable=this.controlData.power_enable,this.$store.state.f_status.tool_run=this.controlData.tool_run)})).catch((()=>{}))},getSnData(){(0,j.Z4)().then((t=>{if(0==t.status&&(this.need_check_edit=!0,this.newSnData=t.data,this.global_sn_data=JSON.stringify(this.newSnData),"CharMap"in this.newSnData==0&&(this.newSnData.CharMap=[]),"Direction"in this.newSnData==0&&(this.newSnData.Direction=0),"VerifySize"in this.newSnData==0&&(this.newSnData.VerifySize=0),"CharVerify"in this.newSnData==0&&(this.newSnData.CharVerify=0)),9106==t.status){let t=this.$t("settable.failedToObtainSN");k.c.error([t])}}))},initOptions(){let t=this.$t("setcontrol.defaultEnable"),e=this.$t("setcontrol.touchscreen"),o=this.$t("setcontrol.totalline"),s=this.$t("setcontrol.dvlpmntAgrmnt"),a=this.$t("setcontrol.io"),n=this.$t("setcontrol.trigger"),l=this.$t("setcontrol.pushStart"),i=this.$t("setcontrol.nouse"),r=this.$t("setcontrol.oneOne"),c=this.$t("setcontrol.oneForever"),h=this.$t("setcontrol.twoOne"),u=this.$t("setcontrol.twoForever"),d=this.$t("setcontrol.ioReverse"),p=this.$t("setcontrol.filedBus"),m=this.$t("setcontrol.barcodeScanner"),_=this.$t("setcontrol.barCode"),D=this.$t("setcontrol.notEnabled");this.enableOptions={[t]:0,[a]:2,[o]:3,[s]:4},this.psetOptions={[e]:1,[a]:2,[o]:3,[s]:4,[_]:5,"Web Api":6},this.toolOptions={[e]:1,[a]:2,[o]:3,[n]:16,[l]:17},this.snOptions={[D]:0,[o]:3,[s]:4,[m]:5,"Web Api":6},this.bckwrdModes={[i]:0,[r]:1,[c]:2,[h]:3,[u]:4,[d]:5,[p]:6}},checkDataChange(){3==this.controlData.pset||5==this.controlData.pset?this.isShowBtn=!0:this.isShowBtn=!1},addSnData(){let t="AB",e=1;this.newSnData.CharMap.push({Char:t,Pset:e});let o=[];for(let s=0;s<this.newSnData.CharMap.length;s++)o.push(this.newSnData.CharMap[s].Char);this.countCharNum()},countCharNum(t){let e=0;return this.newSnData.CharMap.forEach((o=>{o["Char"]==t&&(e+=1)})),e},checkRepeatChar(){let t=!1;return this.newSnData.CharMap.forEach((e=>{t=this.countCharNum(e["Char"])>1})),t},delFromArr(t){0!=this.newSnData.CharMap.length&&this.newSnData.CharMap.splice(t-1,1)}},computed:{tdHeight(){return this.height/this.row+"vh"},tdWidth(){return this.width/this.col+"vw"},maxInputTorque(){let t=1.25*this.$store.state.g_status.sensor_max;return isNaN(t)?20:t},minInputSpeed(){return.005*this.$store.state.g_status.speed_max},maxInputSpeed(){return this.$store.state.g_status.speed_max},charLen(){return 180-this.newSnData.StartBit}},created(){this.initOptions(),this.initMatrixVal(),this.getControlData()},beforeRouteLeave(t,e,o){let s=""==this.global_control_data||this.global_control_data==JSON.stringify(this.controlData);if(s&&0==this.isDirty||this.$store.state.g_status.busy||0==this.need_check_edit)o();else{let t=this.$t("setcontrol.saveSet"),e=this.$t("setcontrol.yes"),s=this.$t("setcontrol.no"),a=this.$t("setcontrol.isSaveSet");(0,M.Z)({title:t,confirmText:e,cancelText:s,msg:a}).then((()=>{this.submitControlData(),o()})).catch((()=>{o()}))}},watch:{controlData:{deep:!0,handler:function(){this.checkDataChange()}}}},Z=o(83744);const L=(0,Z.Z)(I,[["render",O],["__scopeId","data-v-79728dbc"]]);var q=L}}]);
//# sourceMappingURL=530.1b5b1bbe.js.map