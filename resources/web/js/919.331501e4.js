"use strict";(self["webpackChunkleetx_web"]=self["webpackChunkleetx_web"]||[]).push([[919],{86375:function(t,e){e.L=void 0,function(t){t["Aqua"]="#00ffff",t["BackgroundColor"]="#1c1c1e",t["Blue"]="#368BC1",t["DarkGreen"]="#03925e",t["DarkRed"]="#be0000",t["DarkGrey"]="#7e8486",t["DefaultGridBandsColor"]="#202123",t["DefaultTextColor"]="#c8c7c3",t["DodgerBlue"]="#1E90FF",t["Green"]="#228B22",t["LightGrey"]="#eeeeee",t["LightSteelBlue"]="#b0c4de",t["LimeGreen"]="#32CD32",t["Orange"]="#ff6600",t["OrangeRed"]="#FF4500",t["Purple"]="#B200FF",t["Red"]="#ff0000",t["White"]="#ffffff",t["Yellow"]="#FFFF00"}(e.L||(e.L={}))},30836:function(t,e,s){s.d(e,{Z:function(){return w}});var a=s(66252),i=s(3577);const r=t=>((0,a.dD)("data-v-21657f6e"),t=t(),(0,a.Cn)(),t),o={class:"doughnut"},n={class:"fractions"},c={class:"percent"},l=r((()=>(0,a._)("div",{class:"solid-line"},null,-1))),h=r((()=>(0,a._)("div",{class:"dotted-line"},null,-1))),u=["id"];function d(t,e,s,r,d,_){return(0,a.wg)(),(0,a.iD)("div",o,[(0,a._)("div",null,[(0,a._)("span",{class:(0,i.C_)(["pset-id",1==s.active?"active-span":""])},(0,i.zw)(s.pset),3),(0,a._)("div",n,(0,i.zw)(this.status.length)+"/"+(0,i.zw)(s.total),1),(0,a._)("div",c,(0,i.zw)(_.percent),1),l,h]),(0,a._)("div",{id:s.prefix+"-"+s.pset,style:{width:"13.25rem",height:"13.25rem"}},null,8,u)])}var _=s(5284),g=s(98442),m=s(86375),p=s(20306),v={name:"pieChartTwo",data(){return{chart:void 0,domId:"",color:"#EEEEEE",radiusSize:[1],pieSegment:{}}},props:{pset:{type:String,default:"001"},status:{type:Array,default:function(){return[]}},total:{type:Number,default:7},prefix:{type:String,default:"A"},active:{type:Number,default:1}},watch:{status:{handler(t,e){void 0!==e&&this.updatePieSegments()},immediate:!0}},activated(){this.domId=this.prefix+"-"+this.pset,this.initSciChart()},computed:{okCount(){return this.status.filter((t=>1===t)).length},percent(){return Math.round(this.okCount/this.total*100)+"%"}},methods:{async initSciChart(){let t=new p.SciChartJSLightTheme;t.sciChartBackground="transparent";const e=await g.SciChartPieSurface.create(this.domId,{theme:t,pieType:g.EPieType.Donut,holeRadius:.8,holeRadiusSizingMode:g.ESizingMode.Relative,seriesSpacing:5});e.labelRadiusAdjustment=0,e.labelStyle={fontSize:0,color:m.L.White},e.legend.showLegend=!1,e.animate=!1;const s=(t,e,s)=>new _.PieSegment({value:t,radiusAdjustment:e,showLabel:t>2,color:s});let a=[];for(let i=0;i<this.total;i++){let t=s(1,this.radiusSize[0],"#EEEEEE");a.push(t)}for(let i=0;i<this.status.length;i++)0==this.status[i]?a[i].color="#AC0000":a[i].color="#00C155";e.pieSegments.add(...a),this.chart=e},updatePieSegments(){const t=[];for(let e=0;e<this.total;e++){const s=new _.PieSegment({value:1,radiusAdjustment:this.radiusSize[0],showLabel:!1,color:e>=this.status.length?"#EEEEEE":0==this.status[e]?"#AC0000":"#00C155"});t.push(s)}this.chart&&(this.chart.pieSegments.clear(),this.chart.pieSegments.add(...t),this.chart.invalidateElement())}}},f=s(83744);const C=(0,f.Z)(v,[["render",d],["__scopeId","data-v-21657f6e"]]);var w=C},31919:function(t,e,s){s.r(e),s.d(e,{default:function(){return Ae}});var a=s(66252),i=s(49963),r=s(3577);const o={class:"monitor-box"},n={class:"monitor-values"},c={class:"chart-box item2"},l={class:"chart-box item3"},h={class:"chart-box item4"};function u(t,e,s,u,d,_){const g=(0,a.up)("Right"),m=(0,a.up)("Runing"),p=(0,a.up)("Ready"),v=(0,a.up)("DevcieAlarm"),f=(0,a.up)("IDLine"),C=(0,a.up)("NewSensor"),w=(0,a.up)("chartPosSensor"),b=(0,a.up)("chartRealPosSensor"),x=(0,a.up)("chartRealSpeed"),$=(0,a.up)("chartDot");return(0,a.wg)(),(0,a.iD)("div",o,[2==_.stateBgc?((0,a.wg)(),(0,a.j4)(g,{key:0,class:"alarm-box"})):(0,a.kq)("",!0),3==_.stateBgc?((0,a.wg)(),(0,a.j4)(m,{key:1,class:"alarm-box"})):(0,a.kq)("",!0),4==_.stateBgc?((0,a.wg)(),(0,a.j4)(p,{key:2,class:"alarm-box"})):(0,a.kq)("",!0),5==_.stateBgc?((0,a.wg)(),(0,a.j4)(v,{key:3,class:"alarm-box"})):(0,a.kq)("",!0),(0,a._)("div",n,[(0,a.wy)(((0,a.wg)(),(0,a.j4)(f,{tid:this.$store.state.g_status.tid,is:d.componentName,key:d.componentKey,sn:`${this.$store.state.g_status.ret_sn??"--"}`,batchesinfo:`${this.$store.state.g_status.ret_cnt}/${this.$store.state.g_status.ret_batches}`},null,8,["tid","is","sn","batchesinfo"])),[[i.F8,3!=_.stateBgc]]),(0,a.wy)((0,a.Wm)(C,{sensorName:t.$t("monitor.target_angle"),min:this.$store.state.g_status.ret_pos_min,max:this.$store.state.g_status.ret_pos_max,sname:"angle",sensorValue:this.$store.state.g_status.ret_pos,sensorUnit:_.updateUnit("angle")},null,8,["sensorName","min","max","sensorValue","sensorUnit"]),[[i.F8,3!=_.stateBgc]]),(0,a.wy)((0,a.Wm)(C,{sensorName:t.$t("monitor.target_torque"),min:this.$store.state.g_status.ret_sensor_min,fixed:3,max:this.$store.state.g_status.ret_sensor_max,sname:"torque",sensorValue:this.$store.state.g_status.ret_sensor,sensorUnit:_.updateUnit("torque"),isShowLine:!1},null,8,["sensorName","min","max","sensorValue","sensorUnit"]),[[i.F8,3!=_.stateBgc]]),(0,a.wy)((0,a.Wm)(C,{sensorName:t.$t("monitor.angle"),sname:"angle",min:"--",max:"--",sensorValue:this.$store.state.g_status.pos,sensorUnit:_.updateUnit("angle")},null,8,["sensorName","sensorValue","sensorUnit"]),[[i.F8,3==_.stateBgc]]),(0,a.wy)((0,a.Wm)(C,{sensorName:t.$t("monitor.torque"),sname:"torque",sensorValue:this.$store.state.g_status.sensor,fixed:3,sensorUnit:_.updateUnit("torque"),min:"--",max:"--"},null,8,["sensorName","sensorValue","sensorUnit"]),[[i.F8,3==_.stateBgc]]),(0,a.wy)((0,a.Wm)(C,{sensorName:t.$t("monitor.speed"),sname:"angle_speed",isShowLine:!1,displayLimit:!1,sensorValue:this.$store.state.g_status.speed,sensorUnit:_.updateUnit("angle_speed")},null,8,["sensorName","sensorValue","sensorUnit"]),[[i.F8,3==_.stateBgc]])]),(0,a._)("div",{class:(0,r.C_)([{"chart-long-box":!d.showFooter,"chart-box":d.showFooter},"item1"])},[(0,a.Wm)(w,{onOnShowChartChange:_.onShowChartChange},null,8,["onOnShowChartChange"])],2),(0,a._)("div",c,[(0,a.Wm)(b,{onOnShowChartChange:_.onShowChartChange},null,8,["onOnShowChartChange"])]),(0,a._)("div",l,[(0,a.Wm)(x,{onOnShowChartChange:_.onShowChartChange},null,8,["onOnShowChartChange"])]),(0,a._)("div",h,[((0,a.wg)(),(0,a.j4)($,{onOnShowChartChange:_.onShowChartChange,is:d.componentJobName,key:d.componentJobKey},null,8,["onOnShowChartChange","is"]))])])}var d=s(48593);const _=t=>((0,a.dD)("data-v-141d5a22"),t=t(),(0,a.Cn)(),t),g={class:"chart-main"},m=_((()=>(0,a._)("div",{id:"txy",class:"chart-box"},null,-1))),p={class:"chart-options",contenteditable:!1},v=_((()=>(0,a._)("div",{class:"x-label"},"time",-1)));function f(t,e,s,o,n,c){const l=(0,a.up)("svg-loader");return(0,a.wg)(),(0,a.iD)("div",g,[m,(0,a._)("div",{class:"operate-chart-box",contenteditable:"true",onBlur:e[7]||(e[7]=t=>n.select_item_indx=-1)},[(0,a._)("div",{class:(0,r.C_)({"select-chart":!0,"bgc-white":0==n.select_item_indx}),onClick:e[0]||(e[0]=t=>n.select_item_indx=0==n.select_item_indx?-1:0)},[(0,a.Wm)(l,{class:"chart-icon",size:"2.5rem",icon:"Chart"})],2),(0,a._)("div",{class:"select-chart",onClick:e[1]||(e[1]=(...t)=>c.auto_range&&c.auto_range(...t))},[(0,a.Wm)(l,{class:"chart-icon",size:"2.5rem",icon:n.isAutoFit?"ActiveAuto":"StaticAuto"},null,8,["icon"])]),n.isAutoFit?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",{key:0,class:(0,r.C_)({"select-chart":!0,"bgc-white":3==n.select_item_indx}),onClick:e[2]||(e[2]=(...t)=>c.fit&&c.fit(...t))},[(0,a.Wm)(l,{class:"chart-icon",size:"2.5rem",icon:"AutoChart"})],2)),(0,a.wy)((0,a._)("div",p,[(0,a._)("div",{class:(0,r.C_)({"active-chart":1==t.$global_var.ui_config.chart_tab}),onClick:e[3]||(e[3]=t=>c.switchChart(1))},(0,r.zw)(t.$t("curve.torqueAngleCurve")),3),(0,a._)("div",{class:(0,r.C_)({"active-chart":2==t.$global_var.ui_config.chart_tab}),onClick:e[4]||(e[4]=t=>c.switchChart(2))},(0,r.zw)(t.$t("curve.timeAngleTorqueCurve")),3),(0,a._)("div",{class:(0,r.C_)({"active-chart":3==t.$global_var.ui_config.chart_tab}),onClick:e[5]||(e[5]=t=>c.switchChart(3))},(0,r.zw)(t.$t("curve.speedCurve")),3),(0,a._)("div",{class:(0,r.C_)({"active-chart":4==t.$global_var.ui_config.chart_tab}),onClick:e[6]||(e[6]=t=>c.switchChart(4))},(0,r.zw)(t.$t("curve.jobChart")),3)],512),[[i.F8,0==n.select_item_indx]])],32),v])}var C=s(7050),w=s(38373),b=s(27126),x=s(45718);const $=["null","xy","txy","ts"];class S{constructor(){this.ws=null,this.IsRunning=!1,this.sensor_max=0,this.process_cache={len:0,pdata:{times:[],pos:[],sensor_val:[],speeds:[]}},this.resetting=!1}close(){this.ws&&this.ws.close(),this.ws=null,this.seriesDataHandlers={},this.clearDataHandlers=null,this.IsRunning=!1}createWs(){w.vP.msghandler=t=>{try{this.resolvePdata(t),0==this.sensor_max&&(this.sensor_max=b.G.state.g_status.sensor_max*b.G.state.sensors.torque.gain+b.G.state.sensors.torque.offset)}catch(e){console.log(e)}},w.vP.openhandler=()=>{this.IsRunning=!0},w.vP.closehandler=()=>{this.IsRunning=!1,this.sensor_max=0},w.vP.open()}clearCache(){this.process_cache.len=0,this.process_cache.pdata.times.length=0,this.process_cache.pdata.sensor_val.length=0,this.process_cache.pdata.pos.length=0,this.process_cache.pdata.speeds.length=0}resolvePdata(t){let e=JSON.parse(t);if("DATA_NEW"==e.Result)this.clearCache(),this.clearSeriesData();else{e.sensor_val=e.sensor_val.map((t=>t*b.G.state.sensors.torque.gain+b.G.state.sensors.torque.offset)),e.pos=e.pos.map((t=>t*b.G.state.sensors.angle.gain+b.G.state.sensors.angle.offset)),e.speeds=e.speeds.map((t=>t*b.G.state.sensors.angle_speed.gain+b.G.state.sensors.angle_speed.offset));let t=this.process_cache.pdata.times.push(...e.times);this.process_cache.pdata.sensor_val.push(...e.sensor_val),this.process_cache.pdata.pos.push(...e.pos),this.process_cache.pdata.speeds.push(...e.speeds),e.pos.length>1&&e.pos.length==e.speeds.length&&this.raiseSeriesData(e),this.process_cache.len=t}e=null}raiseSeriesData(t){switch(this.chartName){case"xy":x.JH.addSeriesData(t.pos,t.sensor_val),x.JH.auto_fit&&x.JH.fitWithEORange(0,this.sensor_max);break;case"txy":C.K.addSeriesData(t.times,t.pos,t.sensor_val),C.K.auto_fit&&C.K.fitWithEORange(0,this.sensor_max);break;case"ts":x.eD.addSeriesData(t.times,t.speeds),x.eD.auto_fit&&x.eD.fit();break;default:break}}clearSeriesData(){switch(this.chartName){case"xy":x.JH.clearSeriesData();break;case"txy":C.K.clearSeriesData();break;case"ts":x.eD.clearSeriesData();break;default:break}}chartChanged(t){this.chartName=$[t],this.clearSeriesData(),this.process_cache.len>1&&this.raiseSeriesData(this.process_cache.pdata)}}const y=new S;function k(){C.K.createChart("txy")}var D={data(){return{popvisible:!1,is_activated:!1,showCursor:!1,isAutoFit:!0,select_item_indx:-1}},props:{msg:String},activated(){},deactivated(){},mounted(){k()},unmounted(){C.K.destory()},computed:{rangeColor(){return this.isAutoFit?"lime":"#f4f7f4"},activeChartType(){return this.$global_var.ui_config.chart_tab},max_torque(){return this.$store.state.g_status.sensor_max*this.$store.state.sensors["torque"].gain+this.$store.state.sensors["torque"].offset}},methods:{clearSeriesData(){C.K.is_init&&C.K.clearSeriesData()},show_cursor_method(){this.select_item_indx=1,this.showCursor=!this.showCursor,C.K.showCursor(this.showCursor)},fit(){C.K.fitWithEORange(0,this.max_torque)},auto_range(){this.select_item_indx=2,this.isAutoFit=!this.isAutoFit,C.K.auto_fit=this.isAutoFit},change_page(t){this.$emit("onShowChartChange",t),y.chartChanged(t)},switchChart(t){this.select_item_indx=-1,this.popvisible1=!1,this.$global_var.ui_config.chart_tab=t,this.change_page(this.$global_var.ui_config.chart_tab)}}},z=s(83744);const A=(0,z.Z)(D,[["render",f],["__scopeId","data-v-141d5a22"]]);var q=A;const F=t=>((0,a.dD)("data-v-4d075560"),t=t(),(0,a.Cn)(),t),E={class:"chart-main"},R=F((()=>(0,a._)("div",{id:"scichartxy",class:"chart-box"},null,-1))),N={class:"chart-options",contenteditable:!1},W=F((()=>(0,a._)("div",{class:"x-label"},"angle",-1)));function I(t,e,s,o,n,c){const l=(0,a.up)("svg-loader");return(0,a.wg)(),(0,a.iD)("div",E,[R,(0,a._)("div",{class:"operate-chart-box",contenteditable:"true",onBlur:e[7]||(e[7]=t=>n.select_item_indx=-1)},[(0,a._)("div",{class:(0,r.C_)({"select-chart":!0,"bgc-white":0==n.select_item_indx}),onClick:e[0]||(e[0]=t=>n.select_item_indx=0==n.select_item_indx?-1:0)},[(0,a.Wm)(l,{class:"chart-icon",size:"2.5rem",icon:"Chart"})],2),(0,a._)("div",{class:"select-chart",onClick:e[1]||(e[1]=(...t)=>c.auto_range&&c.auto_range(...t))},[(0,a.Wm)(l,{class:"chart-icon",size:"2.5rem",icon:n.isAutoFit?"ActiveAuto":"StaticAuto"},null,8,["icon"])]),n.isAutoFit?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",{key:0,class:(0,r.C_)({"select-chart":!0,"bgc-white":3==n.select_item_indx}),onClick:e[2]||(e[2]=(...t)=>c.fit&&c.fit(...t))},[(0,a.Wm)(l,{class:"chart-icon",size:"2.5rem",icon:"AutoChart"})],2)),(0,a.wy)((0,a._)("div",N,[(0,a._)("div",{class:(0,r.C_)({"active-chart":1==t.$global_var.ui_config.chart_tab}),onClick:e[3]||(e[3]=t=>c.switchChart(1))},(0,r.zw)(t.$t("curve.torqueAngleCurve")),3),(0,a._)("div",{class:(0,r.C_)({"active-chart":2==t.$global_var.ui_config.chart_tab}),onClick:e[4]||(e[4]=t=>c.switchChart(2))},(0,r.zw)(t.$t("curve.timeAngleTorqueCurve")),3),(0,a._)("div",{class:(0,r.C_)({"active-chart":3==t.$global_var.ui_config.chart_tab}),onClick:e[5]||(e[5]=t=>c.switchChart(3))},(0,r.zw)(t.$t("curve.speedCurve")),3),(0,a._)("div",{class:(0,r.C_)({"active-chart":4==t.$global_var.ui_config.chart_tab}),onClick:e[6]||(e[6]=t=>c.switchChart(4))},(0,r.zw)(t.$t("curve.jobChart")),3)],512),[[i.F8,0==n.select_item_indx]])],32),W])}function j(){x.JH.hasEO=!0,x.JH.createChart("scichartxy")}var B={data(){return{popvisible1:!1,is_activated:!1,is_init:!1,showCursor:!1,select_item_indx:-1,isAutoFit:!0}},props:{msg:String},activated(){},deactivated(){},mounted(){j()},unmounted(){x.JH.destory()},computed:{max_torque(){return this.$store.state.g_status.sensor_max*this.$store.state.sensors["torque"].gain+this.$store.state.sensors["torque"].offset}},methods:{clearSeriesData(){x.JH.is_init&&x.JH.clearSeriesData()},show_cursor_method(){this.select_item_indx=-1,this.showCursor=!this.showCursor,x.JH.showCursor(this.showCursor)},fit(){x.JH.fitWithEORange(0,this.max_torque)},change_page(t){this.$emit("onShowChartChange",t),y.chartChanged(t)},auto_range(){this.isAutoFit=!this.isAutoFit,x.JH.auto_fit=this.isAutoFit},switchChart(t){this.select_item_indx=-1,this.popvisible1=!1,this.$global_var.ui_config.chart_tab=t,this.change_page(this.$global_var.ui_config.chart_tab)}}};const J=(0,z.Z)(B,[["render",I],["__scopeId","data-v-4d075560"]]);var H=J;const L=t=>((0,a.dD)("data-v-19694de4"),t=t(),(0,a.Cn)(),t),O={class:"chart-main"},M=L((()=>(0,a._)("div",{id:"scichart_ts",class:"chart-box"},null,-1))),P={class:"chart-options",contenteditable:!1},V=L((()=>(0,a._)("div",{class:"x-label"},"time",-1)));function G(t,e,s,o,n,c){const l=(0,a.up)("svg-loader");return(0,a.wg)(),(0,a.iD)("div",O,[M,(0,a._)("div",{class:"operate-chart-box",contenteditable:"true",onBlur:e[7]||(e[7]=t=>n.select_item_indx=-1)},[(0,a._)("div",{class:(0,r.C_)({"select-chart":!0,"bgc-white":0==n.select_item_indx}),onClick:e[0]||(e[0]=t=>n.select_item_indx=0==n.select_item_indx?-1:0)},[(0,a.Wm)(l,{class:"chart-icon",size:"2.5rem",icon:"Chart"})],2),(0,a._)("div",{class:"select-chart",onClick:e[1]||(e[1]=(...t)=>c.auto_range&&c.auto_range(...t))},[(0,a.Wm)(l,{class:"chart-icon",size:"2.5rem",icon:n.isAutoFit?"ActiveAuto":"StaticAuto"},null,8,["icon"])]),n.isAutoFit?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",{key:0,class:(0,r.C_)({"select-chart":!0,"bgc-white":3==n.select_item_indx}),onClick:e[2]||(e[2]=(...t)=>c.fit&&c.fit(...t))},[(0,a.Wm)(l,{class:"chart-icon",size:"2.5rem",icon:"AutoChart"})],2)),(0,a.wy)((0,a._)("div",P,[(0,a._)("div",{class:(0,r.C_)({"active-chart":1==t.$global_var.ui_config.chart_tab}),onClick:e[3]||(e[3]=t=>c.switchChart(1))},(0,r.zw)(t.$t("curve.torqueAngleCurve")),3),(0,a._)("div",{class:(0,r.C_)({"active-chart":2==t.$global_var.ui_config.chart_tab}),onClick:e[4]||(e[4]=t=>c.switchChart(2))},(0,r.zw)(t.$t("curve.timeAngleTorqueCurve")),3),(0,a._)("div",{class:(0,r.C_)({"active-chart":3==t.$global_var.ui_config.chart_tab}),onClick:e[5]||(e[5]=t=>c.switchChart(3))},(0,r.zw)(t.$t("curve.speedCurve")),3),(0,a._)("div",{class:(0,r.C_)({"active-chart":4==t.$global_var.ui_config.chart_tab}),onClick:e[6]||(e[6]=t=>c.switchChart(4))},(0,r.zw)(t.$t("curve.jobChart")),3)],512),[[i.F8,0==n.select_item_indx]])],32),V])}function K(){x.eD.createChart("scichart_ts")}var T={data(){return{popvisible:!1,is_activated:!1,showCursor:!1,select_item_indx:-1,isAutoFit:!0}},props:{msg:String},activated(){},deactivated(){},mounted(){K()},unmounted(){x.eD.destory()},methods:{clearSeriesData(){x.eD.is_init&&x.eD.clearSeriesData()},show_cursor_method(){this.select_item_indx=2,this.showCursor=!this.showCursor,x.eD.showCursor(this.showCursor)},auto_range(){this.isAutoFit=!this.isAutoFit,x.eD.auto_fit=this.isAutoFit},fit(){x.eD.fit()},change_page(t){this.$emit("onShowChartChange",t),y.chartChanged(t)},clickOperateBox(t){this.select_item_indx=t==this.select_item_indx?-1:t,1==t?this.show_cursor_method():2==t&&(this.isAutoFit=!this.isAutoFit,this.fit())},switchChart(t){this.popvisible1=!1,this.$global_var.ui_config.chart_tab=t,this.change_page(this.$global_var.ui_config.chart_tab),this.clickOperateBox(-1)}}};const U=(0,z.Z)(T,[["render",G],["__scopeId","data-v-19694de4"]]);var Z=U;const Y=t=>((0,a.dD)("data-v-2f1a9552"),t=t(),(0,a.Cn)(),t),Q={class:"job-options-box"},X={class:"chart-box1",contenteditable:!1},tt={key:0,class:"job-options-box_line1"},et=Y((()=>(0,a._)("div",{class:"job-options-box_f"},"&",-1))),st=Y((()=>(0,a._)("div",{class:"job-options-box_line2"},null,-1)));function at(t,e,s,o,n,c){const l=(0,a.up)("svg-loader"),h=(0,a.up)("doughnutPie");return(0,a.wg)(),(0,a.iD)("div",Q,[(0,a._)("div",{class:"operate-chart-box1",contenteditable:"true",onBlur:e[5]||(e[5]=t=>n.select_item_indx=-1)},[(0,a._)("div",{class:(0,r.C_)({"select-chart":!0,"bgc-white":0==n.select_item_indx}),onClick:e[0]||(e[0]=t=>n.select_item_indx=0==n.select_item_indx?-1:0)},[(0,a.Wm)(l,{class:"chart-icon",size:"2.5rem",icon:"Chart"})],2),(0,a.wy)((0,a._)("div",X,[(0,a._)("div",{class:(0,r.C_)({"active-chart":1==t.$global_var.ui_config.chart_tab}),onClick:e[1]||(e[1]=t=>c.switchChart(1))},(0,r.zw)(t.$t("curve.torqueAngleCurve")),3),(0,a._)("div",{class:(0,r.C_)({"active-chart":2==t.$global_var.ui_config.chart_tab}),onClick:e[2]||(e[2]=t=>c.switchChart(2))},(0,r.zw)(t.$t("curve.timeAngleTorqueCurve")),3),(0,a._)("div",{class:(0,r.C_)({"active-chart":3==t.$global_var.ui_config.chart_tab}),onClick:e[3]||(e[3]=t=>c.switchChart(3))},(0,r.zw)(t.$t("curve.speedCurve")),3),(0,a._)("div",{class:(0,r.C_)({"active-chart":4==t.$global_var.ui_config.chart_tab}),onClick:e[4]||(e[4]=t=>c.switchChart(4))},(0,r.zw)(t.$t("curve.jobChart")),3)],512),[[i.F8,0==n.select_item_indx]])],32),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(c.jobChartData(),((t,e)=>((0,a.wg)(),(0,a.iD)("div",{key:e,class:"job-options-box_1"},[e?((0,a.wg)(),(0,a.iD)("div",tt)):(0,a.kq)("",!0),et,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t,((t,e)=>((0,a.wg)(),(0,a.iD)("div",{key:e,class:"job-options-box_2"},[(0,a._)("div",{class:(0,r.C_)(["job-options-box_3",1==t.Active?"active-box":""])},[st,(0,a.Wm)(h,{class:"doughtPie-box",prefix:t.Prefix,pset:t.Pset,total:t.Total,active:t.Active,status:t.Status},null,8,["prefix","pset","total","active","status"])],2)])))),128))])))),128))])}var it=s(30836),rt={components:{doughnutPie:it.Z},props:{},data(){return{jobChartItems:[[{Pset:"001",Total:7,Status:[],Prefix:"A",Active:1}]],select_item_indx:-1}},computed:{},watch:{},created(){},mounted(){},methods:{change_page(t){this.$emit("onShowChartChange",t)},switchChart(t){this.select_item_indx=-1,this.popvisible1=!1,this.$global_var.ui_config.chart_tab=t,this.change_page(this.$global_var.ui_config.chart_tab)},jobChartData(){return"undefined"===typeof this.$store.state.g_status.jobChartItems||0===this.$store.state.g_status.jobChartItems.length?this.jobChartItems:this.$store.state.g_status.jobChartItems}}};const ot=(0,z.Z)(rt,[["render",at],["__scopeId","data-v-2f1a9552"]]);var nt=ot,ct=s(74125);const lt={key:0,class:"right-msg"},ht={key:1,class:"err-line"},ut={class:"err-state"},dt={key:2,class:"err-msg"},_t={class:"err-code-text"},gt={class:"err-desc-text"};function mt(t,e,s,i,o,n){const c=(0,a.up)("svg-loader");return(0,a.wg)(),(0,a.iD)("div",{class:(0,r.C_)({"right-box":!0,nok:0==n.isok})},[n.isok?((0,a.wg)(),(0,a.iD)("div",lt,(0,r.zw)(n.isOkText),1)):(0,a.kq)("",!0),0==n.isok?((0,a.wg)(),(0,a.iD)("div",ht,[(0,a.Wm)(c,{class:"alarm-icon",icon:"StaticWhiteAlarm",size:"3rem"}),(0,a._)("div",ut,(0,r.zw)(t.$t("monitor.qualified_nok")),1)])):(0,a.kq)("",!0),0==n.isok?((0,a.wg)(),(0,a.iD)("div",dt,[(0,a._)("span",_t,(0,r.zw)(t.$t("monitor.unqualifiedcode"))+"："+(0,r.zw)(o.errcode),1),(0,a._)("span",gt,(0,r.zw)(t.$t("monitor.reason"))+"："+(0,r.zw)(o.msg),1)])):(0,a.kq)("",!0)],2)}var pt=s(69120),vt={components:{},data(){return{isShow:!0,msg:"--",errcode:""}},props:{desc:{type:String,default:"--"}},methods:{cancel(){this.isShow=!1},getErrorMessage(){if(this.$store.state.g_status.fail_code){if(this.errcode=this.$store.state.g_status.fail_code.toString(16).toUpperCase().padStart(4,"0"),"0000"==this.code)return;(0,pt.$0)(this.errcode).then((t=>{0==t.status&&t.data&&(this.msg=t.data)}))}}},computed:{isOkText(){return this.isok?this.$t("monitor.qualified_ok"):this.$t("monitor.qualified_nok")},isok(){return 0==this.$store.state.g_status.fail_code&&this.$store.state.g_status.isok}},created(){this.getErrorMessage()},watch:{isok:{handler(t){0==t&&this.getErrorMessage()},immediate:!0},"$store.state.g_status.fail_code":{handler(){this.getErrorMessage()},immediate:!0}}};const ft=(0,z.Z)(vt,[["render",mt],["__scopeId","data-v-7c8fb400"]]);var Ct=ft;const wt=t=>((0,a.dD)("data-v-f10507bc"),t=t(),(0,a.Cn)(),t),bt={key:0,class:"running-box"},xt={class:"running-msg"},$t=wt((()=>(0,a._)("div",{class:"running-bgc"},null,-1)));function St(t,e,s,i,o,n){return o.isShow?((0,a.wg)(),(0,a.iD)("div",bt,[(0,a._)("div",xt,(0,r.zw)(t.$t("monitor.running")),1),$t])):(0,a.kq)("",!0)}var yt={data(){return{isShow:!0}},methods:{cancel(){this.isShow=!1}}};const kt=(0,z.Z)(yt,[["render",St],["__scopeId","data-v-f10507bc"]]);var Dt=kt;const zt=t=>((0,a.dD)("data-v-46d475fe"),t=t(),(0,a.Cn)(),t),At={class:"pf-param-line"},qt={class:"block1"},Ft={class:"block2"},Et={class:"block3"},Rt={class:"top-box"},Nt={class:"limit-val"},Wt={class:"btm-box"},It={class:"limit-val"},jt=zt((()=>(0,a._)("span",null,null,-1))),Bt=zt((()=>(0,a._)("span",{class:"line"},null,-1)));function Jt(t,e,s,i,o,n){const c=(0,a.up)("svg-loader");return(0,a.wg)(),(0,a.iD)("div",At,[(0,a._)("div",qt,(0,r.zw)(s.sensorName)+":",1),(0,a._)("div",Ft,(0,r.zw)(n.display_value)+(0,r.zw)(s.sensorUnit),1),(0,a._)("div",Et,[(0,a._)("div",Rt,[(0,a.Wm)(c,{class:"arrow-icon",icon:"StaticMax",size:"1.2rem"}),(0,a._)("span",Nt,(0,r.zw)(n.maxDisplayVal),1)]),(0,a._)("div",Wt,[(0,a.Wm)(c,{class:"arrow-icon",icon:"StaticMin",size:"1.2rem"}),(0,a._)("span",It,(0,r.zw)(n.minDisplayVal),1)]),jt]),Bt])}const Ht={name:"NewSensor",data(){return{count:1,notNum:"--"}},props:{sensorName:{type:String,default:"Sensor"},sname:{type:String,default:"force"},sensorValue:{type:null,default:10},max:{type:null,default:"--"},min:{type:null,default:"--"},sensorUnit:{type:String,default:"KN"},fixed:{type:Number,default:2},height:{type:String,default:"2rem"},nameFontsize:{type:String,default:"1.8vh"},valueFontsize:{type:String,default:"3vh"},unitFontsize:{type:String,default:"1.8vh"},width:{type:String,default:""},isShowLine:{type:Boolean,default:!0},displayLimit:{type:Boolean,default:!0}},methods:{},mounted(){},unmounted(){},computed:{limitColor(){return this.sensorValue>this.max?"#f80606":this.sensorValue<this.min?"#2edbe7":"#121312"},display_value(){var t=this.$store.state.sensors[this.sname];return null==t&&(t={gain:1,offset:0}),"--"==this.sensorValue?this.sensorValue:(parseFloat(this.sensorValue)*t.gain+t.offset).toFixed(this.fixed)},isDisplayLine(){return this.isShowLine?"block":"none"},isDisplayLimit(){return this.displayLimit?"visible":"collapse"},maxDisplayVal(){var t=this.$store.state.sensors[this.sname];null==t&&(t={gain:1,offset:0});let e=(parseFloat(this.max)*t.gain+t.offset).toFixed(1);return isNaN(e)?this.notNum:e},minDisplayVal(){var t=this.$store.state.sensors[this.sname];null==t&&(t={gain:1,offset:0});let e=(parseFloat(this.min)*t.gain+t.offset).toFixed(1);return isNaN(e)?this.notNum:e}}},Lt=()=>{(0,i.sj)((t=>({"87d9edf2":t.isDisplayLine,"7363d5f0":t.isDisplayLimit})))},Ot=Ht.setup;Ht.setup=Ot?(t,e)=>(Lt(),Ot(t,e)):Lt;var Mt=Ht;const Pt=(0,z.Z)(Mt,[["render",Jt],["__scopeId","data-v-46d475fe"]]);var Vt=Pt;const Gt={key:0,class:"err-box"},Kt={class:"alarm-text"},Tt={class:"specific-alarm-msg"},Ut={class:"alarm-err-text"},Zt={class:"alarm-code"},Yt={class:"err-reason-text"},Qt={class:"err-reason"},Xt={class:"more-err-reason"};function te(t,e,s,i,o,n){const c=(0,a.up)("svg-loader");return o.isShow?((0,a.wg)(),(0,a.iD)("div",Gt,[(0,a._)("div",{class:"white-box",onClick:e[0]||(e[0]=(...t)=>n.clearDeviceErr&&n.clearDeviceErr(...t))},[(0,a.Wm)(c,{class:"alarm-icon",icon:"ActiveRedAlarm",size:"4.5rem",color:"red"}),(0,a._)("div",Kt,(0,r.zw)(t.$t("alarm.errRest")),1)]),(0,a._)("div",Tt,[(0,a._)("span",Ut,(0,r.zw)(t.$t("alarm.errCode")),1),(0,a._)("span",Zt,(0,r.zw)(n.errCode),1),(0,a._)("span",Yt,(0,r.zw)(t.$t("alarm.errReason")),1),(0,a._)("span",Qt,(0,r.zw)(n.headText),1),(0,a._)("div",Xt,(0,r.zw)(n.endText),1)])])):(0,a.kq)("",!0)}var ee=s(26971),se=s(84965),ae={data(){return{isShow:!0,desc:"未知原因",isHasGetMsg:!1,module:"ALARM"}},props:{state:{type:String,default:"nok"},code:{type:String,default:"4334"}},methods:{cancel(){this.isShow=!1},initData(){},clearDeviceErr(){this.module in this.$store.state.f_status.permissions&&4==this.$store.state.f_status.permissions[this.module]?(0,ee.QS)().then((t=>{if(0==t.status){let t=this.$t("alarm.clsSuc");se.c.success([t])}else se.c.error(["清错失败"])})):se.c.warning(["清除告警失败，权限被拒绝!!!"])},getErrorMsg(){(0,pt.Bl)(this.errCode).then((t=>{t.data&&t.data.alarm_desc&&(this.desc=t.data.alarm_desc),this.isHasGetMsg=!0})).catch((()=>{this.isHasGetMsg=!0}))}},computed:{headText(){let t=this.desc;return t.substring(0,11)},endText(){let t=this.desc;return t.substring(11,this.desc.length)},errCode(){let t=this.$store.state.g_status.alarm_code,e=`${parseInt(t).toString(16)}`;while(e.length<4)e=`0${e}`;return e},alarmHisLevel(){return 4}},watch:{errCode(){this.isHasGetMsg||this.getErrorMsg()}},created(){this.getErrorMsg()}};const ie=(0,z.Z)(ae,[["render",te],["__scopeId","data-v-39772e47"]]);var re=ie;const oe={class:"pf-param-line"},ne={class:"block1"},ce={class:"id-left-msg"},le={class:"block2"},he={class:"block3"},ue={class:"id-right-msg"};function de(t,e,s,i,o,n){return(0,a.wg)(),(0,a.iD)("div",oe,[(0,a._)("div",ne,[(0,a._)("span",ce," ID:"+(0,r.zw)(s.tid),1)]),(0,a._)("div",le,[(0,a._)("span",{class:(0,r.C_)(["time-msg",{scroll:o.isOverflow}]),ref:"content"},(0,r.zw)(s.sn),3)]),(0,a._)("div",he,[(0,a._)("span",ue,(0,r.zw)(s.batchesinfo),1)]),(0,a._)("span",{class:(0,r.C_)(n.lineClass)},null,2)])}var _e={name:"NewSensor",data(){return{count:1,isOverflow:!1}},props:{tid:{type:Number,default:3213},sn:{type:String,default:"1234567890"},batchesinfo:{type:String,default:"3/8"},isShowLine:{type:Boolean,default:!0}},mounted(){const t=this.$refs.content.parentNode.offsetWidth,e=this.$refs.content.offsetWidth;this.isOverflow=e+.35*t>t},methods:{},computed:{limitColor(){return this.sensorValue>this.max?"#f80606":this.sensorValue<this.min?"#2edbe7":"#121312"},display_value(){var t=this.$store.state.sensors[this.sname];return null==t&&(t={gain:1,offset:0}),(parseFloat(this.sensorValue)*t.gain+t.offset).toFixed(this.fixed)},lineClass(){return this.isShowLine?"line":""}}};const ge=(0,z.Z)(_e,[["render",de],["__scopeId","data-v-5d8989b6"]]);var me=ge;const pe=t=>((0,a.dD)("data-v-87560aca"),t=t(),(0,a.Cn)(),t),ve={key:0,class:"offline-box"},fe={class:"offline-msg"},Ce=pe((()=>(0,a._)("div",{class:"offline-bgc"},null,-1)));function we(t,e,s,i,o,n){return o.isShow?((0,a.wg)(),(0,a.iD)("div",ve,[(0,a._)("div",fe,(0,r.zw)(t.$t("monitor.readyCode")),1),Ce])):(0,a.kq)("",!0)}var be={data(){return{isShow:!0}},methods:{cancel(){this.isShow=!1}}};const xe=(0,z.Z)(be,[["render",we],["__scopeId","data-v-87560aca"]]);var $e=xe;const Se={components:{chartRealPosSensor:q,chartPosSensor:H,chartRealSpeed:Z,chartDot:nt,Right:Ct,Runing:Dt,NewSensor:Vt,IDLine:me,Ready:$e,DevcieAlarm:re},data(){return{pdata_cnt:0,select_chart_index:1,eoRange:{pos:{Min:0,Max:5},sensor:{Min:2,Max:12}},eoRangeInit:!1,componentName:"ChildComponent",componentKey:1,componentJobName:"ChildJobComponent",componentJobKey:1,showFooter:!0}},methods:{onShowChartChange(t){this.select_chart_index=t,(0,d.xK)(this.$global_var,{chart_tab:t})},updateUnit(t){return this.$store.state.sensors[t].name},getResult(){this.res.torque=this.$store.state.g_status.ret_sensor.toFixed(3),this.res.angle=this.$store.state.g_status.ret_pos.toFixed(3)},sensorUnit(t){return this.$store.state.sensors[t].name},changeVal(t){var e=this.$store.state.g_status[t];this.$store.state.g_status[t]=1==e?0:1},setEoRange(t){(0,ct.R4)(this.$store.state.g_status.pset).then((e=>{e.data&&e.data.pos&&e.data.sensor&&(e.data.pos.Min+=t,e.data.pos.Max+=t,this.eoRange=e.data,x.JH.setEoRange(e.data.pos.Min*this.$store.state.sensors["angle"].gain+this.$store.state.sensors["angle"].offset,e.data.pos.Max*this.$store.state.sensors["angle"].gain+this.$store.state.sensors["angle"].offset,e.data.sensor.Min*this.$store.state.sensors["torque"].gain+this.$store.state.sensors["torque"].offset,e.data.sensor.Max*this.$store.state.sensors["torque"].gain+this.$store.state.sensors["torque"].offset),x.JH.is_init&&x.JH.auto_fit&&x.JH.fitWithEO())}))}},computed:{anglelangProp(){return this.$i18n.t("param.angle")},torquelangProp(){return this.$i18n.t("param.torque")},speedlangProp(){return this.$i18n.t("param.speed")},stateBgc(){var t=4;return t=this.$store.state.g_status.alarmed?5:this.$store.state.g_status.rok&&!this.$store.state.g_status.busy?2:this.$store.state.g_status.busy?3:4,t},runOk(){return!this.$store.state.g_status["busy"]&&this.$store.state.g_status["rok"]},tab1_opacity(){return 1==this.select_chart_index?"visible":"hidden"},tab2_opacity(){return 2==this.select_chart_index?"visible":"hidden"},tab3_opacity(){return 3==this.select_chart_index?"visible":"hidden"},tab4_opacity(){return 4==this.select_chart_index?"visible":"hidden"}},mounted(){this.select_chart_index=this.$global_var.ui_config.chart_tab,y.chartChanged(this.$global_var.ui_config.chart_tab),this.$watch((()=>this.$store.state.g_status.G_Inflexion_Angle),(t=>{x.JH.setRectEO(t*this.$store.state.sensors["angle"].gain+this.$store.state.sensors["angle"].offset,this.$store.state.g_status.G_Inflexion_Force*this.$store.state.sensors["torque"].gain+this.$store.state.sensors["torque"].offset)}))},created(){this.$watch((()=>this.$store.state.g_status.rok),(t=>{this.setEoRange(this.$store.state.g_status.eopos),x.JH.setEoResult(t,this.$store.state.g_status.isok)})),this.$watch((()=>this.$store.state.g_status.segment.length),(t=>{0===t?x.JH.clearStepsRectEO():x.JH.addStepsRectEO(this.$store.state.g_status.segment.slice(0,t-1).map((t=>({angle:t.angle*this.$store.state.sensors["angle"].gain+this.$store.state.sensors["angle"].offset,torque:t.torque*this.$store.state.sensors["torque"].gain+this.$store.state.sensors["torque"].offset}))))})),setTimeout((()=>{y.createWs()}),1e3)},watch:{"$store.state.g_status.ret_sn":{handler(){this.componentName="ChildComponent",this.componentKey++},immediate:!0},"$store.state.g_status.job":{handler(){this.componentJobName="ChildJobComponent",this.componentJobKey++},immediate:!0}}},ye=()=>{(0,i.sj)((t=>({"1e2e4e80":t.tab1_opacity,"9b1a84fe":t.tab2_opacity,"46b72c82":t.tab3_opacity,"4a08c8fa":t.tab4_opacity})))},ke=Se.setup;Se.setup=ke?(t,e)=>(ye(),ke(t,e)):ye;var De=Se;const ze=(0,z.Z)(De,[["render",u],["__scopeId","data-v-331d75a2"]]);var Ae=ze}}]);
//# sourceMappingURL=919.331501e4.js.map