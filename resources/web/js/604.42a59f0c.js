"use strict";(self["webpackChunkleetx_web"]=self["webpackChunkleetx_web"]||[]).push([[604],{81700:function(t,e,a){a.r(e),a.d(e,{default:function(){return b}});var s=a(66252),o=a(3577);const d={class:"input-box"},r={class:"input-table"},l={class:"row1"},n={class:"row2"},i={class:"row3"},h={class:"row4"},u={class:"row1"},c={class:"row2"},g={class:"row3"},m={class:"row4"};function S(t,e,a,S,L,I){return(0,s.wg)(),(0,s.iD)("div",d,[(0,s._)("table",r,[(0,s._)("tr",null,[(0,s._)("td",l,(0,o.zw)(t.$t("dbgtln.address")),1),(0,s._)("td",n,(0,o.zw)(t.$t("dbgtln.function")),1),(0,s._)("td",i,(0,o.zw)(t.$t("dbgtln.type")),1),(0,s._)("td",h,(0,o.zw)(t.$t("dbgtln.monitorvalue")),1)]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(L.totalLineData.ToolOut.Member,((t,e)=>((0,s.wg)(),(0,s.iD)("tr",{key:e},[(0,s._)("td",u,(0,o.zw)(t.StartByte.toFixed(1)),1),(0,s._)("td",c,(0,o.zw)(I.getOutSdoItem(t.LinkSdo,"name")),1),(0,s._)("td",g,(0,o.zw)(I.getOutSdoItem(t.LinkSdo,"type")),1),(0,s._)("td",m,(0,o.zw)(I.formatval(t.LinkSdo)),1)])))),128))])])}var L=a(19995),I=a(38373),w=a(46157),D=a(65884),p=a(96754),O={data(){return{totalLineData:{Type:"FieldBus",NumeralByteOrder:"DCBA",StringByteOrder:"ABCD",NodeName:"",ToolIn:{ByteLength:20,Member:[]},ToolOut:{ByteLength:20,Member:[]}},res:!1,sdoItems:{},realVals:{},FIELDBUSTimer:void 0}},methods:{formatval(t){if("0x30020B"==t)return parseInt(this.realVals[t]).toString("16").padStart(4,"0");let e=this.getOutSdoItem(t,"type");return"F32"==e||"F64"==e?parseFloat(this.realVals[t]).toFixed(3):this.realVals[t]},setSignal(){const t=D.g.rise(15);(0,w.Z)().then((()=>{D.g.descend(t)})).catch((()=>{D.g.descend(t)}))},operateTotalline(t){(0,L.KJ)({addr:this.totalLineData.ToolOut.Member[t].StartByte,val:!0})},getTotalLineData(){(0,L.CG)().then((t=>{if(void 0==t.data["Type"]){let e=t.data.ToolOut;e||(e={ByteLength:20,Member:[]}),this.totalLineData.ToolOut=e,this.createWs()}else this.totalLineData=t.data,this.createWs()})).catch((()=>{}))},getAddress(t){},getOutSdoItem(t,e){return t&&t in this.sdoItems["ToolOut"]&&e in this.sdoItems["ToolOut"][t]?this.sdoItems["ToolOut"][t][e]:"--"},initSdoItems(){this.sdoItems["ToolOut"]=(0,p.GZ)("out")},createWs(){I.U3.msghandler=t=>{this.realVals=JSON.parse(t).data},I.U3.openhandler=()=>{this.sendsdoLst()},this.sendsdoLst()},sendsdoLst(){let t=this.getSdoList();t.length>=0&&I.U3.send(JSON.stringify({id:"0",mode:"FIELDBUS",sdos:t}))},getSdoList(){let t=[],e=this.totalLineData.ToolOut.Member;for(let a=0;a<e.length;a++)t.push(e[a].LinkSdo);return t},getFIELDBUSData(){this.FIELDBUSTimer=setInterval((()=>{this.dataId=Math.random(),I.U3.send(JSON.stringify({id:this.dataId,mode:"FIELDBUS"}))}),200)}},created(){this.getFIELDBUSData(),this.getTotalLineData(),this.initSdoItems()},unmounted(){clearInterval(this.FIELDBUSTimer),I.U3.openhandler=null}},T=a(83744);const B=(0,T.Z)(O,[["render",S],["__scopeId","data-v-1a2ccd0e"]]);var b=B}}]);
//# sourceMappingURL=604.42a59f0c.js.map