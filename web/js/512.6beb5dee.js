"use strict";(self["webpackChunkleetx_web"]=self["webpackChunkleetx_web"]||[]).push([[512],{55055:function(t,e,a){function n(){return{Type:"SN",VerifySize:1,SnSize:120,CharVerify:1,VerifyBit:0,VerifyChar:"122222",StartBit:2,Direction:0,Len:2,CharMap:[{Char:"AA",Pset:2}]}}a.d(e,{Z:function(){return n}})},76736:function(t,e,a){a.d(e,{Z:function(){return m}});var n=a(66252),i=a(3577);function s(t,e,a,s,r,l){return(0,n.wg)(),(0,n.iD)("div",{class:(0,i.C_)(l.boxClass),onClick:e[0]||(e[0]=(...t)=>l.updateData&&l.updateData(...t))},null,2)}var r=a(49963);const l={data(){return{status:!1}},methods:{updateData(){this.allowClick&&(this.status=!this.status,this.$emit("update:modelValue",this.status?this.activeValue:this.staticValue))},initData(){this.status=this.modelValue==this.activeValue}},props:{activeValue:{type:null,default:1},staticValue:{type:null,default:0},modelValue:{type:null,default:0},size:{type:String,default:"2rem"},width:{type:String,default:"1.5rem"},color:{type:String,default:"#c7c7c7"},allowClick:{type:Boolean,default:!0}},computed:{boxClass(){return this.status?"active-box":"static-box"}},created(){this.initData()},watch:{modelValue(){this.initData()}}},c=()=>{(0,r.sj)((t=>({"7ea655dc":t.width,"80d452a2":t.color})))},o=l.setup;l.setup=o?(t,e)=>(c(),o(t,e)):c;var h=l,u=a(83744);const d=(0,u.Z)(h,[["render",s],["__scopeId","data-v-dd5b2ddc"]]);var m=d},72512:function(t,e,a){a.r(e),a.d(e,{default:function(){return I}});var n=a(66252),i=a(3577);const s=t=>((0,n.dD)("data-v-131951c9"),t=t(),(0,n.Cn)(),t),r={class:"edit-box"},l={class:"length-check"},c={class:"limit-len"},o=s((()=>(0,n._)("div",{class:"horizontal-line"},null,-1))),h={class:"check-bit"},u={class:"limit-len"},d={class:"check-character"},m=s((()=>(0,n._)("div",{class:"horizontal-line-two"},null,-1))),p={class:"check-start"},D={class:"limit-len"},S={class:"character-length-text"},w={class:"bit-dir"},C={class:"bit-dir-text"},f={class:"start-right-text"},y={class:"program-map-table"},V={class:"table-head"},_=s((()=>(0,n._)("td",{class:"delBox"},null,-1))),b={class:"tr-box"},g={class:"delBox"},x={class:"add-line totalline-tr"},v=s((()=>(0,n._)("td",null,null,-1))),z=s((()=>(0,n._)("td",null,null,-1))),N=s((()=>(0,n._)("td",{class:"last-td"},null,-1)));function k(t,e,a,s,k,B){const U=(0,n.up)("LeetxSwitch"),$=(0,n.up)("InputVal"),M=(0,n.up)("InputText"),L=(0,n.up)("CheckCircle"),A=(0,n.up)("inputText"),W=(0,n.up)("LeetxButton"),T=(0,n.up)("svg-loader");return(0,n.wg)(),(0,n.iD)("div",r,[(0,n._)("div",l,[(0,n._)("span",c,(0,i.zw)(t.$t("settable.lnthlmt")),1),(0,n.Wm)(U,{value:k.newSnData.VerifySize,modelValue:k.newSnData.VerifySize,"onUpdate:modelValue":e[0]||(e[0]=t=>k.newSnData.VerifySize=t),class:"limit-len-btn",height:2},null,8,["value","modelValue"]),(0,n._)("span",{class:(0,i.C_)([{"forbit-color":0==k.newSnData.VerifySize},"SN-text"])},(0,i.zw)(t.$t("settable.snLength")),3),(0,n.Wm)($,{imprprChrctr:k.limitNumBtn,isAllowUse:0==!k.newSnData.VerifySize,minNum:1,maxNum:128,isDirty:k.isDirty,"onUpdate:isDirty":e[1]||(e[1]=t=>k.isDirty=t),class:"limit-len-input",sensorValue:k.newSnData.SnSize,"onUpdate:sensorValue":e[2]||(e[2]=t=>k.newSnData.SnSize=t)},null,8,["imprprChrctr","isAllowUse","isDirty","sensorValue"])]),o,(0,n._)("div",h,[(0,n._)("span",u,(0,i.zw)(t.$t("settable.characterCheck")),1),(0,n.Wm)(U,{value:k.newSnData.CharVerify,modelValue:k.newSnData.CharVerify,"onUpdate:modelValue":e[3]||(e[3]=t=>k.newSnData.CharVerify=t),class:"limit-len-btn",height:2},null,8,["value","modelValue"]),(0,n._)("span",{class:(0,i.C_)([{"forbit-color":0==k.newSnData.CharVerify},"SN-text"])},(0,i.zw)(t.$t("settable.checkStartBit")),3),(0,n.Wm)($,{imprprChrctr:k.limitNumBtn,isAllowUse:0==!k.newSnData.CharVerify,minNum:1,maxNum:180,isDirty:k.isDirty,"onUpdate:isDirty":e[4]||(e[4]=t=>k.isDirty=t),class:"limit-len-input",sensorValue:k.newSnData.VerifyBit,"onUpdate:sensorValue":e[5]||(e[5]=t=>k.newSnData.VerifyBit=t)},null,8,["imprprChrctr","isAllowUse","isDirty","sensorValue"])]),(0,n._)("div",d,[(0,n._)("span",{class:(0,i.C_)([{"forbit-color":0==k.newSnData.CharVerify},"limit-len"])},(0,i.zw)(t.$t("settable.characterValidation")),3),(0,n.Wm)(M,{imprprChrctr:k.limitBtn,isAllowUse:0==!k.newSnData.CharVerify,width:"53.5vw",class:"limit-len-input",text:k.newSnData.VerifyChar,"onUpdate:modelValue":e[6]||(e[6]=t=>k.newSnData.VerifyChar=t.text)},null,8,["imprprChrctr","isAllowUse","text"])]),m,(0,n._)("div",p,[(0,n._)("span",D,(0,i.zw)(t.$t("settable.snStartBit")),1),(0,n.Wm)($,{imprprChrctr:k.limitNumBtn,minNum:1,maxNum:180,sensorValue:k.newSnData.StartBit,"onUpdate:sensorValue":e[7]||(e[7]=t=>k.newSnData.StartBit=t),isDirty:k.isDirty,"onUpdate:isDirty":e[8]||(e[8]=t=>k.isDirty=t),width:"17.5vw",class:"snstart-input"},null,8,["imprprChrctr","sensorValue","isDirty"]),(0,n._)("span",S,(0,i.zw)(t.$t("settable.bitLength")),1),(0,n.Wm)($,{imprprChrctr:k.limitNumBtn,minNum:1,maxNum:B.charLen,sensorValue:k.newSnData.Len,"onUpdate:sensorValue":e[9]||(e[9]=t=>k.newSnData.Len=t),isDirty:k.isDirty,"onUpdate:isDirty":e[10]||(e[10]=t=>k.isDirty=t),width:"17.5vw",class:"character-length-input"},null,8,["imprprChrctr","maxNum","sensorValue","isDirty"])]),(0,n._)("div",w,[(0,n._)("span",C,(0,i.zw)(t.$t("settable.bitDir")),1),(0,n._)("span",f,(0,i.zw)(t.$t("settable.startRight")),1),(0,n.Wm)(L,{modelValue:k.newSnData.Direction,"onUpdate:modelValue":e[11]||(e[11]=t=>k.newSnData.Direction=t),width:"2rem",class:"is-use-right"},null,8,["modelValue"])]),(0,n._)("table",y,[(0,n._)("tr",V,[(0,n._)("td",null,(0,i.zw)(t.$t("settable.char")),1),(0,n._)("td",null,(0,i.zw)(t.$t("settable.program"))+"(Pset)",1),_]),(0,n._)("div",b,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(k.newSnData.CharMap.length,(t=>((0,n.wg)(),(0,n.iD)("tr",{key:t},[(0,n._)("td",null,[(0,n.Wm)(A,{imprprChrctr:k.limitBtn,textValid:B.countCharNum(k.newSnData.CharMap[t-1].Char)<=1,validReason:"",maxLength:k.newSnData.Len,text:k.newSnData.CharMap[t-1].Char,"onUpdate:modelValue":e=>k.newSnData.CharMap[t-1].Char=e.text,class:"input-text-border"},null,8,["imprprChrctr","textValid","maxLength","text","onUpdate:modelValue"])]),(0,n._)("td",null,[(0,n.Wm)($,{imprprChrctr:k.limitNumBtn,minNum:1,maxNum:255,isDirty:k.isDirty,"onUpdate:isDirty":e[12]||(e[12]=t=>k.isDirty=t),sensorValue:k.newSnData.CharMap[t-1].Pset,"onUpdate:sensorValue":e=>k.newSnData.CharMap[t-1].Pset=e,class:"inputVal-border"},null,8,["imprprChrctr","isDirty","sensorValue","onUpdate:sensorValue"])]),(0,n._)("td",g,[(0,n.Wm)(W,{class:"delOne",bgcColor:"transparent",width:"2rem",height:"2rem",borderRadius:"0",useIcon:!0,icon:"DelDmrct",iconSize:"2rem",onClick:e=>B.delFromArr(t)},null,8,["onClick"])])])))),128))]),(0,n._)("tr",x,[(0,n._)("td",null,[(0,n.Wm)(T,{onClick:e[13]||(e[13]=t=>B.addSnData()),class:"add-btn",icon:"StaticCircleAdd",size:"2.5rem"})]),v,z,N])]),(0,n.Wm)(W,{enablerun:!1,class:"confirm-box",textColor:"#fff",bgcColor:"#00c155",width:"30.125rem",height:"3.75rem",fontSize:"2.25rem",fontFamily:"--SHSC-B",text:t.$t("confirm.confirm"),onClick:B.submitSnData},null,8,["text","onClick"])])}var B=a(55055),U=a(76736),$=a(77671),M=a(26971),L=a(84965),A=a(32015),W={components:{CheckCircle:U.Z,InputText:$.Z},props:{},data(){return{isDirty:!1,newSnData:(0,B.Z)(),global_sn_data:{},isAllowUse:!1,limitBtn:["-",".","space","`","#+=",","],limitNumBtn:["-","."],need_check_edit:!1}},created(){this.getSnData(),this.isAllowUse=!1},methods:{getSnData(){(0,M.Z4)().then((t=>{if(0==t.status&&(this.need_check_edit=!0,this.newSnData=t.data,"CharMap"in this.newSnData==0&&(this.newSnData.CharMap=[]),"Direction"in this.newSnData==0&&(this.newSnData.Direction=0),"VerifySize"in this.newSnData==0&&(this.newSnData.VerifySize=0),"CharVerify"in this.newSnData==0&&(this.newSnData.CharVerify=0)),9106==t.status){let t=this.$t("settable.failedToObtainSN");L.c.error([t])}this.global_sn_data=JSON.stringify(this.newSnData)}))},scrollToBottom(){const t=document.querySelector(".tr-box");t.scrollTop=t.scrollHeight},addSnData(){let t="AB",e=1;this.newSnData.CharMap.push({Char:t,Pset:e});let a=[];for(let n=0;n<this.newSnData.CharMap.length;n++)a.push(this.newSnData.CharMap[n].Char);this.$nextTick((()=>{this.scrollToBottom()})),this.countCharNum()},countCharNum(t){let e=0;return this.newSnData.CharMap.forEach((a=>{a["Char"]==t&&(e+=1)})),e},checkRepeatChar(){let t=!1;return this.newSnData.CharMap.forEach((e=>{t=this.countCharNum(e["Char"])>1})),t},delFromArr(t){0!=this.newSnData.CharMap.length&&this.newSnData.CharMap.splice(t-1,1)},submitSnData(){if(1==this.checkRepeatChar())return void L.c.warning(["字符重复"]);let t=!0;this.newSnData.CharMap.forEach((e=>{e.Char.length===this.newSnData.Len||(t=!1)})),this.newSnData.VerifyBit+this.newSnData.VerifyChar.length>this.newSnData.SnSize+1?L.c.warning(["校验的字符错误"]):t?this.newSnData.StartBit+this.newSnData.Len>this.newSnData.SnSize+1?L.c.warning(["SN字符长度错误"]):(0,M.$L)(this.newSnData).then((t=>{if(0==t.status&&L.c.success(["保存成功"]),9107==t.status){let t=this.$t("settable.failedToSN");L.c.error([t])}this.need_check_edit=!1})):L.c.warning(["Pset字符长度错误"])}},beforeRouteLeave(t,e,a){let n=this.global_sn_data=={}||this.global_sn_data==JSON.stringify(this.newSnData);if(0==this.isDirty&&n||this.$store.state.g_status.busy||0==this.need_check_edit)a(),console.log("Enter");else{let t=this.$t("setcontrol.saveSet"),e=this.$t("setcontrol.yes"),n=this.$t("setcontrol.no"),i=this.$t("setcontrol.isSaveSet");(0,A.Z)({title:t,confirmText:e,cancelText:n,msg:i}).then((()=>{this.submitSnData(),a()})).catch((()=>{a()}))}},computed:{charLen(){return 180-this.newSnData.StartBit}}},T=a(83744);const Z=(0,T.Z)(W,[["render",k],["__scopeId","data-v-131951c9"]]);var I=Z}}]);
//# sourceMappingURL=512.6beb5dee.js.map