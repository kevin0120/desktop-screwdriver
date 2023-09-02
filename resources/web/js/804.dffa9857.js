"use strict";(self["webpackChunkleetx_web"]=self["webpackChunkleetx_web"]||[]).push([[804],{44804:function(e,t,i){i.r(t),i.d(t,{default:function(){return T}});var c=i(66252),n=i(3577),s=i(49963);const l=e=>((0,c.dD)("data-v-84a6c6ba"),e=e(),(0,c.Cn)(),e),a={class:"controllers-box"},o={class:"operate-line"},r=l((()=>(0,c._)("br",null,null,-1))),d=l((()=>(0,c._)("div",null,[(0,c._)("span",{class:"line"})],-1))),v=l((()=>(0,c._)("br",null,null,-1))),h=l((()=>(0,c._)("span",null,"复制",-1))),D=l((()=>(0,c._)("div",null,[(0,c._)("span",{class:"line"})],-1))),u=l((()=>(0,c._)("br",null,null,-1))),p=l((()=>(0,c._)("span",null,"扫描",-1))),m=l((()=>(0,c._)("div",null,[(0,c._)("span",{class:"line"})],-1))),_=l((()=>(0,c._)("br",null,null,-1))),I=l((()=>(0,c._)("div",{class:"device-manage"},[(0,c._)("span",{class:"manage-text"},"设备管理"),(0,c._)("div",{class:"transverse-line"}),(0,c._)("div",{class:"vertical-line"})],-1))),w={class:"items-box"},f=["onClick"],g=l((()=>(0,c._)("div",{class:"device-manage-bottom-line"},[(0,c._)("div",{class:"rev-transverse-line"}),(0,c._)("div",{class:"rev-vertical-line"})],-1))),k={class:"cur-data"},C={class:"ip-line"},A=l((()=>(0,c._)("span",{class:"text-line"},"IP地址：",-1))),x={class:"id-data"},B=l((()=>(0,c._)("span",{class:"text-line"},"设备号：",-1))),b={class:"controller-data"},P=l((()=>(0,c._)("span",{class:"text-line"},"设备名称：",-1))),y={class:"scan-box"},L=l((()=>(0,c._)("div",{class:"scanList-head-line"},[(0,c._)("span",null,"IP地址"),(0,c._)("span",null,"设备号"),(0,c._)("span",null,"设备名称"),(0,c._)("span")],-1)));function N(e,t,i,l,N,z){const S=(0,c.up)("svg-loader"),W=(0,c.up)("InputText"),$=(0,c.up)("InputVal"),F=(0,c.up)("LeetxButton");return(0,c.wg)(),(0,c.iD)("div",a,[(0,c._)("div",o,[(0,c._)("div",{class:"operate-box",onClick:t[0]||(t[0]=(...e)=>z.addDevice&&z.addDevice(...e))},[(0,c.Wm)(S,{class:"pfIcon",icon:"AddTwo",size:"2.5rem"}),r,(0,c._)("span",null,(0,n.zw)(e.$t("profile.add")),1)]),d,(0,c._)("div",{class:"operate-box",onClick:t[1]||(t[1]=(...e)=>z.copyDevice&&z.copyDevice(...e))},[(0,c.Wm)(S,{class:"pfIcon",icon:"CopyOne",size:"2.5rem"}),v,h]),D,(0,c._)("div",{class:"operate-box",onClick:t[2]||(t[2]=(...e)=>z.scanDevice&&z.scanDevice(...e))},[(0,c.Wm)(S,{class:"pfIcon",icon:"Scan",size:"2.5rem"}),u,p]),m,(0,c._)("div",{class:"operate-box",onClick:t[3]||(t[3]=(...e)=>z.delDevice&&z.delDevice(...e))},[(0,c.Wm)(S,{class:"pfIcon",icon:"TrashOne",size:"2.5rem"}),_,(0,c._)("span",null,(0,n.zw)(e.$t("profile.delete")),1)])]),I,(0,c._)("div",w,[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(N.controllerData,((e,t)=>((0,c.wg)(),(0,c.iD)("div",{class:"profile-item",key:e.ID,onClick:e=>z.selectFile(t)},[(0,c.Wm)(S,{class:(0,n.C_)({"file-static-icon":!0,"file-active-icon":N.active_item==t}),icon:N.active_item==t?"ActiveController":"StaticController",size:"10.5rem"},null,8,["class","icon"]),(0,c._)("span",{class:(0,n.C_)({"pf-static-num":!0,"pf-active-num":N.active_item==t})},(0,n.zw)(e.deviceId),3),(0,c._)("span",{class:(0,n.C_)([{"pf-static-num":!0,"pf-active-num":N.active_item==t},"controller-ip"])},(0,n.zw)(e.ipAddress),3)],8,f)))),128))]),g,(0,c._)("div",k,[(0,c._)("div",C,[A,(0,c.Uk)((0,n.zw)(z.currentDevice.ID)+" ",1),(0,c.Wm)(W,{class:"tech-input-top",maxLength:20,text:z.currentDevice.ipAddress,"onUpdate:text":t[4]||(t[4]=e=>z.currentDevice.ipAddress=e)},null,8,["text"])]),(0,c._)("div",x,[B,(0,c.Wm)($,{class:"tech-input-top",minNum:0,maxNum:9999,sensorValue:z.currentDevice.deviceId,"onUpdate:sensorValue":t[5]||(t[5]=e=>z.currentDevice.deviceId=e)},null,8,["sensorValue"])]),(0,c._)("div",b,[P,(0,c.Wm)(W,{class:"tech-input-top",maxLength:20,text:z.currentDevice.controllerName,"onUpdate:text":t[6]||(t[6]=e=>z.currentDevice.controllerName=e)},null,8,["text"])]),(0,c.Wm)(F,{class:"setController-box",width:"25.3125rem",height:"3.75rem",onClick:z.confirm,textColor:"#fff",text:"设备编辑",fontFamily:"'SourceHanSansCN-Bold'",fontSize:"2.25rem",bgcColor:"#00c155"},null,8,["onClick"])]),(0,c.wy)((0,c._)("div",y,[L,((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(N.getScanDeviceResults,((e,t)=>((0,c.wg)(),(0,c.iD)("div",{key:t,class:(0,n.C_)([{"active-line":e==N.actDevice},"scanList-data-line"])},[(0,c._)("span",null,(0,n.zw)(e.ipAddress),1),(0,c._)("span",null,(0,n.zw)(e.deviceId),1),(0,c._)("span",null,(0,n.zw)(e.controllerName),1),(0,c._)("span",null,[(0,c.Wm)(S,{class:"pfIcon",icon:"Add",onClick:e=>z.addCurDevice(t)},null,8,["onClick"])])],2)))),128))],512),[[s.F8,N.scanList]])])}var z=i(23263),S=i(84965),W=i(65884),$={components:{InputText:z.Z},data(){return{defaults:{ipAddress:"192.168.20.145",deviceId:1,controllerName:"Line0-0.0",ID:-1},controllerData:[{ipAddress:"192.168.20.141",deviceId:1,controllerName:"Line1-0.1",ID:1},{ipAddress:"192.168.20.142",deviceId:2,controllerName:"Line1-0.2",ID:2}],active_item:-1,scanList:!1,maskId:0,getScanDeviceResults:[{ipAddress:"192.168.20.143",deviceId:3,controllerName:"Line1-0.3",ID:0},{ipAddress:"192.168.20.144",deviceId:4,controllerName:"Line1-0.4",ID:0}],actDevice:-1}},props:{msg:String},methods:{selectFile(e){this.active_item=e==this.active_item?-1:e,console.log("clcik",this.active_item)},scanDevice(){this.maskId=W.g.rise(15,this.cancel),window.electronAPI&&(this.getScanDeviceResults=window.electronAPI.scanDeviceBackend()),this.scanList=!0},cancel(){this.scanList=!1,this.onCancel&&this.onCancel("用户取消了"),W.g.descend(this.maskId)},getIdNum(e){let t=this.controllerData[e-1].deviceId;return t},newId(){const e=this.controllerData[this.controllerData.length-1],t=e?e.ID+1:1;return t},addDevice(){const e={ipAddress:this.defaults.ipAddress,deviceId:this.defaults.deviceId,controllerName:this.defaults.controllerName,ID:this.newId()};this.controllerData.push(e),this.active_item=this.controllerData.length-1,this.addDeviceBackend(e),console.log("-----add-----",this.controllerData)},copyDevice(){if(-1!=this.active_item){if(this.active_item>=0&&this.active_item<this.controllerData.length){const e=this.controllerData[this.active_item],t={...e};t.ID=this.newId(),this.controllerData.push(t),this.active_item=this.controllerData.length-1,this.copyDeviceBackend(t,e.ID),console.log("-----copy-----",this.controllerData)}}else S.c.error([this.$t("promsg.nselect_file")])},delDevice(){if(-1!=this.active_item){if(this.active_item>=0&&this.active_item<this.controllerData.length){const e=this.controllerData[this.active_item].ID;this.controllerData.splice(this.active_item,1),this.active_item>0?this.active_item--:this.active_item=-1,this.delDeviceBackend(e),console.log("-----del-----",this.controllerData)}}else S.c.error([this.$t("promsg.nselect_file")])},addCurDevice(e){this.actDevice=this.actDevice==e?-1:e;const t=this.getScanDeviceResults[e],i={...t};i.ID=this.newId(),this.controllerData.push(i),this.addDeviceBackend(i),console.log("copiedDevice",i.ID),this.scanList=!1,this.onCancel&&this.onCancel("用户取消了"),W.g.descend(this.maskId),this.active_item=this.controllerData.length-1},addDeviceBackend(e){window.electronAPI&&window.electronAPI.addDeviceBackend(e)},copyDeviceBackend(e,t){window.electronAPI&&window.electronAPI.copyDeviceBackend(e,t)},delDeviceBackend(e){window.electronAPI&&window.electronAPI.delDeviceBackend(e)},syncDevicesBackend(e){window.electronAPI&&window.electronAPI.syncDevicesBackend(JSON.stringify(e))},getDevicesBackend(){let e=[];return window.electronAPI&&(e=window.electronAPI.getDevicesBackend()),e},editDeviceBackend(e){window.electronAPI&&window.electronAPI.editDeviceBackend(e)},confirm(){if(-1==this.active_item)return void S.c.error([this.$t("promsg.nselect_file")]);const e=this.controllerData[this.active_item],t={...e};this.editDeviceBackend(t),console.log("Confirm")}},computed:{currentDevice(){return-1==this.active_item?this.defaults:this.controllerData[this.active_item]}},mounted(){},created(){window.electronAPI&&(this.controllerData=this.getDevicesBackend())},watch:{controllerData:{deep:!0,handler:function(){console.log("同步设备列表"),this.syncDevicesBackend(this.controllerData)}}}},F=i(83744);const R=(0,F.Z)($,[["render",N],["__scopeId","data-v-84a6c6ba"]]);var T=R}}]);
//# sourceMappingURL=804.dffa9857.js.map