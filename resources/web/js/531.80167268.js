"use strict";(self["webpackChunkleetx_web"]=self["webpackChunkleetx_web"]||[]).push([[531],{86375:function(t,e){e.L=void 0,function(t){t["Aqua"]="#00ffff",t["BackgroundColor"]="#1c1c1e",t["Blue"]="#368BC1",t["DarkGreen"]="#03925e",t["DarkRed"]="#be0000",t["DarkGrey"]="#7e8486",t["DefaultGridBandsColor"]="#202123",t["DefaultTextColor"]="#c8c7c3",t["DodgerBlue"]="#1E90FF",t["Green"]="#228B22",t["LightGrey"]="#eeeeee",t["LightSteelBlue"]="#b0c4de",t["LimeGreen"]="#32CD32",t["Orange"]="#ff6600",t["OrangeRed"]="#FF4500",t["Purple"]="#B200FF",t["Red"]="#ff0000",t["White"]="#ffffff",t["Yellow"]="#FFFF00"}(e.L||(e.L={}))},55055:function(t,e,a){function n(){return{Type:"SN",VerifySize:1,SnSize:120,CharVerify:1,VerifyBit:0,VerifyChar:"122222",StartBit:2,Direction:0,Len:2,CharMap:[{Char:"AA",Pset:2}]}}a.d(e,{Z:function(){return n}})},30836:function(t,e,a){a.d(e,{Z:function(){return w}});var n=a(66252),i=a(3577);const r=t=>((0,n.dD)("data-v-21657f6e"),t=t(),(0,n.Cn)(),t),s={class:"doughnut"},l={class:"fractions"},u={class:"percent"},o=r((()=>(0,n._)("div",{class:"solid-line"},null,-1))),d=r((()=>(0,n._)("div",{class:"dotted-line"},null,-1))),c=["id"];function h(t,e,a,r,h,f){return(0,n.wg)(),(0,n.iD)("div",s,[(0,n._)("div",null,[(0,n._)("span",{class:(0,i.C_)(["pset-id",1==a.active?"active-span":""])},(0,i.zw)(a.pset),3),(0,n._)("div",l,(0,i.zw)(this.status.length)+"/"+(0,i.zw)(a.total),1),(0,n._)("div",u,(0,i.zw)(f.percent),1),o,d]),(0,n._)("div",{id:a.prefix+"-"+a.pset,style:{width:"13.25rem",height:"13.25rem"}},null,8,c)])}var f=a(5284),p=a(98442),m=a(86375),g=a(20306),v={name:"pieChartTwo",data(){return{chart:void 0,domId:"",color:"#EEEEEE",radiusSize:[1],pieSegment:{}}},props:{pset:{type:String,default:"001"},status:{type:Array,default:function(){return[]}},total:{type:Number,default:7},prefix:{type:String,default:"A"},active:{type:Number,default:1}},watch:{status:{handler(t,e){void 0!==e&&this.updatePieSegments()},immediate:!0}},activated(){this.domId=this.prefix+"-"+this.pset,this.initSciChart()},computed:{okCount(){return this.status.filter((t=>1===t)).length},percent(){return Math.round(this.okCount/this.total*100)+"%"}},methods:{async initSciChart(){let t=new g.SciChartJSLightTheme;t.sciChartBackground="transparent";const e=await p.SciChartPieSurface.create(this.domId,{theme:t,pieType:p.EPieType.Donut,holeRadius:.8,holeRadiusSizingMode:p.ESizingMode.Relative,seriesSpacing:5});e.labelRadiusAdjustment=0,e.labelStyle={fontSize:0,color:m.L.White},e.legend.showLegend=!1,e.animate=!1;const a=(t,e,a)=>new f.PieSegment({value:t,radiusAdjustment:e,showLabel:t>2,color:a});let n=[];for(let i=0;i<this.total;i++){let t=a(1,this.radiusSize[0],"#EEEEEE");n.push(t)}for(let i=0;i<this.status.length;i++)0==this.status[i]?n[i].color="#AC0000":n[i].color="#00C155";e.pieSegments.add(...n),this.chart=e},updatePieSegments(){const t=[];for(let e=0;e<this.total;e++){const a=new f.PieSegment({value:1,radiusAdjustment:this.radiusSize[0],showLabel:!1,color:e>=this.status.length?"#EEEEEE":0==this.status[e]?"#AC0000":"#00C155"});t.push(a)}this.chart&&(this.chart.pieSegments.clear(),this.chart.pieSegments.add(...t),this.chart.invalidateElement())}}},S=a(83744);const C=(0,S.Z)(v,[["render",h],["__scopeId","data-v-21657f6e"]]);var w=C},90531:function(t,e,a){a.r(e),a.d(e,{default:function(){return g}});var n=a(66252);const i=t=>((0,n.dD)("data-v-2f44a275"),t=t(),(0,n.Cn)(),t),r={id:"test-box"},s=i((()=>(0,n._)("p",null,null,-1))),l=i((()=>(0,n._)("p",null,null,-1))),u=i((()=>(0,n._)("p",null,null,-1)));function o(t,e,a,i,o,d){const c=(0,n.up)("doughnutPie");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",r,[(0,n.Wm)(c,{pset:o.psetId,total:o.total,cnt:o.cnt},null,8,["pset","total","cnt"])]),s,l,u],64)}var d=a(30836);function c(t,e){if(t>e)throw new Error("min must be  smaller than max");return t+Math.floor(Math.random()*(e-t))}var h=a(55055),f={components:{doughnutPie:d.Z},data(){return{psetId:"002",cnt:4,total:6,res:2,fruit:2,id:0,unit:{sname:"default",gain:2,offset:0,max:99999999,min:-99999999,name:"***"},status:1,newSnData:(0,h.Z)(),msg:"abcdefg",abc:4,active:1}},methods:{},computed(){},created(){setInterval((()=>{this.status=c(1,6)}),1e3)}},p=a(83744);const m=(0,p.Z)(f,[["render",o],["__scopeId","data-v-2f44a275"]]);var g=m}}]);
//# sourceMappingURL=531.80167268.js.map