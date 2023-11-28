"use strict";(self["webpackChunkleetx_web"]=self["webpackChunkleetx_web"]||[]).push([[30],{55055:function(t,e,a){function n(){return{Type:"SN",VerifySize:1,SnSize:120,CharVerify:1,VerifyBit:0,VerifyChar:"122222",StartBit:2,Direction:0,Len:2,CharMap:[{Char:"AA",Pset:2}]}}a.d(e,{Z:function(){return n}})},35084:function(t,e,a){a.d(e,{Z:function(){return S}});var n=a(66252),i=a(3577);function s(t,e,a,s,r,l){return(0,n.wg)(),(0,n.iD)("div",{class:(0,i.C_)(l.boxClass),onClick:e[0]||(e[0]=(...t)=>l.updateData&&l.updateData(...t))},null,2)}var r=a(48024),l=a(49963);const h={data(){return{status:!1}},methods:{updateData(){this.allowClick&&(this.status=!this.status,this.$emit("update:modelValue",this.status?this.activeValue:this.staticValue))},initData(){this.status=this.modelValue==this.activeValue}},props:{activeValue:{type:null,default:1},staticValue:{type:null,default:0},modelValue:{type:null,default:0},size:{type:String,default:"2rem"},width:{type:String,default:"1.5rem"},color:{type:String,default:"#c7c7c7"},allowClick:{type:Boolean,default:!0},isAllowUse:{type:Boolean,default:!0},module:{type:String,default:"NULL"}},computed:{boxClass(){return this.status?"active-box":"static-box"},enabled(){return!!this.isAllowUse&&("NULL"==this.module||this.module in r.G.state.f_status.permissions&&4==r.G.state.f_status.permissions[this.module])},pointerEvent(){return this.enabled?"auto":"none"},opacity(){return this.enabled?1:.5}},created(){this.initData()},watch:{modelValue(){this.initData()}}},u=()=>{(0,l.sj)((t=>({"58132bc8":t.width,"5a41288e":t.color,c8780d72:t.pointerEvent,"149276e1":t.opacity})))},o=h.setup;h.setup=o?(t,e)=>(u(),o(t,e)):u;var c=h,m=a(83744);const d=(0,m.Z)(c,[["render",s],["__scopeId","data-v-b341f6b8"]]);var S=d},66030:function(t,e,a){a.r(e),a.d(e,{default:function(){return P}});var n=a(66252),i=a(3577);const s=t=>((0,n.dD)("data-v-04f9f7ae"),t=t(),(0,n.Cn)(),t),r={class:"edit-box"},l={class:"length-check"},h={class:"limit-len"},u=s((()=>(0,n._)("div",{class:"horizontal-line"},null,-1))),o={class:"check-bit"},c={class:"limit-len"},m={class:"check-character"},d=s((()=>(0,n._)("div",{class:"horizontal-line-two"},null,-1))),S={class:"check-start"},p={class:"limit-len"},D={class:"character-length-text"},w={class:"bit-dir"},C={class:"bit-dir-text"},f={class:"start-right-text"},V={class:"program-map-table"},y={class:"table-head"},x=s((()=>(0,n._)("td",{class:"delBox"},null,-1))),b={class:"tr-box"},_={class:"delBox"},g={class:"add-line totalline-tr"},N=s((()=>(0,n._)("td",null,null,-1))),v=s((()=>(0,n._)("td",null,null,-1))),k=s((()=>(0,n._)("td",{class:"last-td"},null,-1)));function z(t,e,a,s,z,B){const U=(0,n.up)("LeetxSwitch"),L=(0,n.up)("InputVal"),$=(0,n.up)("InputText"),M=(0,n.up)("CheckCircle"),A=(0,n.up)("inputText"),W=(0,n.up)("LeetxButton"),T=(0,n.up)("svg-loader");return(0,n.wg)(),(0,n.iD)("div",r,[(0,n._)("div",l,[(0,n._)("span",h,(0,i.zw)(t.$t("settable.lnthlmt")),1),(0,n.Wm)(U,{module:z.module,value:z.newSnData.VerifySize,modelValue:z.newSnData.VerifySize,"onUpdate:modelValue":e[0]||(e[0]=t=>z.newSnData.VerifySize=t),class:"limit-len-btn",height:2},null,8,["module","value","modelValue"]),(0,n._)("span",{class:(0,i.C_)([{"forbit-color":0==z.newSnData.VerifySize},"SN-text"])},(0,i.zw)(t.$t("settable.snLength")),3),(0,n.Wm)(L,{module:z.module,imprprChrctr:z.limitNumBtn,isAllowUse:0==!z.newSnData.VerifySize,minNum:1,maxNum:128,isDirty:z.isDirty,"onUpdate:isDirty":e[1]||(e[1]=t=>z.isDirty=t),class:"limit-len-input",sensorValue:z.newSnData.SnSize,"onUpdate:sensorValue":e[2]||(e[2]=t=>z.newSnData.SnSize=t)},null,8,["module","imprprChrctr","isAllowUse","isDirty","sensorValue"])]),u,(0,n._)("div",o,[(0,n._)("span",c,(0,i.zw)(t.$t("settable.characterCheck")),1),(0,n.Wm)(U,{module:z.module,value:z.newSnData.CharVerify,modelValue:z.newSnData.CharVerify,"onUpdate:modelValue":e[3]||(e[3]=t=>z.newSnData.CharVerify=t),class:"limit-len-btn",height:2},null,8,["module","value","modelValue"]),(0,n._)("span",{class:(0,i.C_)([{"forbit-color":0==z.newSnData.CharVerify},"SN-text"])},(0,i.zw)(t.$t("settable.checkStartBit")),3),(0,n.Wm)(L,{module:z.module,imprprChrctr:z.limitNumBtn,isAllowUse:0==!z.newSnData.CharVerify,minNum:1,maxNum:z.maxNum,isDirty:z.isDirty,"onUpdate:isDirty":e[4]||(e[4]=t=>z.isDirty=t),class:"limit-len-input",textValid:B.checkStartChar(),sensorValue:z.newSnData.VerifyBit,"onUpdate:sensorValue":e[5]||(e[5]=t=>z.newSnData.VerifyBit=t)},null,8,["module","imprprChrctr","isAllowUse","maxNum","isDirty","textValid","sensorValue"])]),(0,n._)("div",m,[(0,n._)("span",{class:(0,i.C_)([{"forbit-color":0==z.newSnData.CharVerify},"limit-len"])},(0,i.zw)(t.$t("settable.characterValidation")),3),(0,n.Wm)($,{module:z.module,imprprChrctr:z.limitBtn,isAllowUse:0==!z.newSnData.CharVerify,width:"53.5vw",class:"limit-len-input",text:z.newSnData.VerifyChar,maxLength:B.maxChar(),textValid:B.checkChar(),validReason:"","onUpdate:modelValue":e[6]||(e[6]=t=>z.newSnData.VerifyChar=t.text)},null,8,["module","imprprChrctr","isAllowUse","text","maxLength","textValid"])]),d,(0,n._)("div",S,[(0,n._)("span",p,(0,i.zw)(t.$t("settable.snStartBit")),1),(0,n.Wm)(L,{module:z.module,imprprChrctr:z.limitNumBtn,minNum:1,maxNum:B.startMaxNum,textValid:B.checkStartLen(),sensorValue:z.newSnData.StartBit,"onUpdate:sensorValue":e[7]||(e[7]=t=>z.newSnData.StartBit=t),isDirty:z.isDirty,"onUpdate:isDirty":e[8]||(e[8]=t=>z.isDirty=t),width:"17.5vw",class:"snstart-input"},null,8,["module","imprprChrctr","maxNum","textValid","sensorValue","isDirty"]),(0,n._)("span",D,(0,i.zw)(t.$t("settable.bitLength")),1),(0,n.Wm)(L,{module:z.module,imprprChrctr:z.limitNumBtn,minNum:1,maxNum:B.charLen,sensorValue:z.newSnData.Len,"onUpdate:sensorValue":e[9]||(e[9]=t=>z.newSnData.Len=t),isDirty:z.isDirty,"onUpdate:isDirty":e[10]||(e[10]=t=>z.isDirty=t),textValid:z.newSnData.Len>=1&&z.newSnData.Len<=B.charLen,width:"17.5vw",class:"character-length-input"},null,8,["module","imprprChrctr","maxNum","sensorValue","isDirty","textValid"])]),(0,n._)("div",w,[(0,n._)("span",C,(0,i.zw)(t.$t("settable.bitDir")),1),(0,n._)("span",f,(0,i.zw)(t.$t("settable.startRight")),1),(0,n.Wm)(M,{module:z.module,modelValue:z.newSnData.Direction,"onUpdate:modelValue":e[11]||(e[11]=t=>z.newSnData.Direction=t),width:"2rem",class:"is-use-right"},null,8,["module","modelValue"])]),(0,n._)("table",V,[(0,n._)("tr",y,[(0,n._)("td",null,(0,i.zw)(t.$t("settable.char")),1),(0,n._)("td",null,(0,i.zw)(t.$t("settable.program"))+"(Pset)",1),x]),(0,n._)("div",b,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(z.newSnData.CharMap.length,(t=>((0,n.wg)(),(0,n.iD)("tr",{key:t},[(0,n._)("td",null,[(0,n.Wm)(A,{module:z.module,imprprChrctr:z.limitBtn,textValid:B.countCharNum(z.newSnData.CharMap[t-1].Char)<=1&&z.newSnData.CharMap[t-1].Char.length===z.newSnData.Len,validReason:"",maxLength:z.newSnData.Len,text:z.newSnData.CharMap[t-1].Char,"onUpdate:modelValue":e=>z.newSnData.CharMap[t-1].Char=e.text,class:"input-text-border"},null,8,["module","imprprChrctr","textValid","maxLength","text","onUpdate:modelValue"])]),(0,n._)("td",null,[(0,n.Wm)(L,{module:z.module,imprprChrctr:z.limitNumBtn,minNum:1,maxNum:255,isDirty:z.isDirty,"onUpdate:isDirty":e[12]||(e[12]=t=>z.isDirty=t),sensorValue:z.newSnData.CharMap[t-1].Pset,"onUpdate:sensorValue":e=>z.newSnData.CharMap[t-1].Pset=e,class:"inputVal-border"},null,8,["module","imprprChrctr","isDirty","sensorValue","onUpdate:sensorValue"])]),(0,n._)("td",_,[(0,n.Wm)(W,{module:z.module,class:"delOne",bgcColor:"transparent",width:"2rem",height:"2rem",borderRadius:"0",useIcon:!0,icon:"DelDmrct",iconSize:"2rem",onClick:e=>B.delFromArr(t)},null,8,["module","onClick"])])])))),128))]),(0,n._)("tr",g,[(0,n._)("td",null,[(0,n.Wm)(T,{module:z.module,onClick:e[13]||(e[13]=t=>B.addSnData()),class:"add-btn",icon:"StaticCircleAdd",size:"2.5rem"},null,8,["module"])]),N,v,k])]),(0,n.Wm)(W,{module:z.module,enablerun:!1,class:"confirm-box",textColor:"#fff",bgcColor:"#00c155",width:"30.125rem",height:"3.75rem",fontSize:"2.25rem",fontFamily:"--SHSC-B",text:t.$t("confirm.confirm"),onClick:B.submitSnData},null,8,["module","text","onClick"])])}var B=a(55055),U=a(35084),L=a(30703),$=a(26971),M=a(84965),A=a(57414),W=a(49963);const T={components:{CheckCircle:U.Z,InputText:L.Z},props:{},data(){return{module:"DEV_BUS",isDirty:!1,newSnData:(0,B.Z)(),global_sn_data:{},isAllowUse:!1,limitBtn:["-",".","space","`","#+=",","],limitNumBtn:["-","."],need_check_edit:!1,maxNum:128}},created(){this.getSnData(),this.isAllowUse=!1},methods:{maxChar(){return 1==this.newSnData.VerifySize?this.newSnData.SnSize-this.newSnData.VerifyBit+1:128-this.newSnData.VerifyBit+1},checkStartLen(){let t=this.maxNum-this.newSnData.Len;return this.newSnData.StartBit<=t+1},checkStartChar(){return!this.newSnData.CharVerify||this.newSnData.VerifyBit>=1&&this.newSnData.VerifyBit<=this.maxNum},checkChar(){if(0===this.newSnData.VerifyChar.length)return!1;if(this.newSnData.CharVerify){let t=this.newSnData.VerifyChar.length+this.newSnData.VerifyBit-1;return t>=1&&t<=this.maxNum}return!0},getSnData(){(0,$.Z4)().then((t=>{if(0==t.status&&(this.need_check_edit=!0,this.newSnData=0!==Object.keys(t.data).length?t.data:this.newSnData,1==this.newSnData.VerifySize?this.maxNum=t.data.SnSize:this.maxNum=128,"CharMap"in this.newSnData==0&&(this.newSnData.CharMap=[]),"Direction"in this.newSnData==0&&(this.newSnData.Direction=0),"VerifySize"in this.newSnData==0&&(this.newSnData.VerifySize=0),"CharVerify"in this.newSnData==0&&(this.newSnData.CharVerify=0)),9106==t.status){let t=this.$t("settable.failedToObtainSN");M.c.error([t])}this.global_sn_data=JSON.stringify(this.newSnData)}))},scrollToBottom(){const t=document.querySelector(".tr-box");t.scrollTop=t.scrollHeight},addSnData(){let t="AB",e=1;this.newSnData.CharMap.push({Char:t,Pset:e});let a=[];for(let n=0;n<this.newSnData.CharMap.length;n++)a.push(this.newSnData.CharMap[n].Char);this.$nextTick((()=>{this.scrollToBottom()})),this.countCharNum()},countCharNum(t){let e=0;return this.newSnData.CharMap.forEach((a=>{a["Char"]==t&&(e+=1)})),e},checkRepeatChar(){let t=!1;return this.newSnData.CharMap.forEach((e=>{t=this.countCharNum(e["Char"])>1})),t},delFromArr(t){0!=this.newSnData.CharMap.length&&this.newSnData.CharMap.splice(t-1,1)},submitSnData(){if(1==this.checkRepeatChar())return void M.c.warning(["字符重复"]);if(0==this.newSnData.VerifyChar.length)return void M.c.warning(["校验字符为空"]);let t=!0;this.newSnData.CharMap.forEach((e=>{e.Char.length===this.newSnData.Len||(t=!1)}));let e=128;1==this.newSnData.VerifySize&&(e=this.newSnData.SnSize),1==this.newSnData.CharVerify&&this.newSnData.VerifyBit+this.newSnData.VerifyChar.length>e+1?M.c.warning(["校验的字符错误"]):t?this.newSnData.StartBit+this.newSnData.Len>e+1?M.c.warning(["SN字符长度错误"]):(0,$.$L)(this.newSnData).then((t=>{if(0==t.status&&M.c.success([this.$t("setop.saveSuc")]),9107==t.status){let t=this.$t("settable.failedToSN");M.c.error([t])}this.need_check_edit=!1})):M.c.warning(["程序字符长度错误"])},calMaxNum(){1==this.newSnData.VerifySize?this.maxNum=this.newSnData.SnSize:this.maxNum=128}},beforeRouteLeave(t,e,a){let n=this.global_sn_data=={}||this.global_sn_data==JSON.stringify(this.newSnData);if(0==this.isDirty&&n||this.$store.state.g_status.busy||0==this.need_check_edit)a();else{let t=this.$t("setcontrol.saveSet"),e=this.$t("setcontrol.yes"),n=this.$t("setcontrol.no"),i=this.$t("setcontrol.isSaveSet");(0,A.Z)({title:t,confirmText:e,cancelText:n,msg:i}).then((()=>{this.submitSnData(),a()})).catch((()=>{a()}))}},computed:{charLen(){return this.maxNum-this.newSnData.StartBit+1<=0?1:this.maxNum-this.newSnData.StartBit+1},enabled(){return this.module in this.$store.state.f_status.permissions&&4==this.$store.state.f_status.permissions[this.module]},pointerEvent(){return this.enabled?"auto":"none"},opacity(){return this.enabled?1:.5},startMaxNum(){return 1==this.newSnData.VerifySize?this.maxNum:128}},watch:{"newSnData.VerifySize":function(){this.calMaxNum(),this.checkStartChar(),this.checkChar()},"newSnData.SnSize":function(){this.calMaxNum(),this.checkStartChar(),this.checkChar()},"newSnData.VerifyChar":function(){this.maxChar()}}},Z=()=>{(0,W.sj)((t=>({"7aa55bdf":t.pointerEvent,"4158556e":t.opacity})))},E=T.setup;T.setup=E?(t,e)=>(Z(),E(t,e)):Z;var R=T,I=a(83744);const O=(0,I.Z)(R,[["render",z],["__scopeId","data-v-04f9f7ae"]]);var P=O}}]);
//# sourceMappingURL=30.c459a956.js.map