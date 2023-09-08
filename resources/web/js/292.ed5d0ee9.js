"use strict";(self["webpackChunkleetx_web"]=self["webpackChunkleetx_web"]||[]).push([[292],{44290:function(t,e,s){s.r(e),s.d(e,{default:function(){return T}});var i=s(66252),a=s(3577);const r=t=>((0,i.dD)("data-v-7c892a20"),t=t(),(0,i.Cn)(),t),o={class:"files-box"},n={class:"operate-line"},c=r((()=>(0,i._)("br",null,null,-1))),l=r((()=>(0,i._)("div",null,[(0,i._)("span",{class:"line"})],-1))),p=r((()=>(0,i._)("br",null,null,-1))),u=r((()=>(0,i._)("div",null,[(0,i._)("span",{class:"line"})],-1))),h=r((()=>(0,i._)("br",null,null,-1))),f=r((()=>(0,i._)("div",null,[(0,i._)("span",{class:"line"})],-1))),d=r((()=>(0,i._)("br",null,null,-1))),m={class:"items-box"},_=["onClick"],v={class:"file-name"},g={class:"profile-item add-box"};function $(t,e,s,r,$,w){const b=(0,i.up)("svg-loader"),P=(0,i.up)("LeetxButton");return(0,i.wg)(),(0,i.iD)("div",o,[(0,i._)("div",n,[(0,i._)("div",{class:"operate-box",onClick:e[0]||(e[0]=(...t)=>w.addPf&&w.addPf(...t))},[(0,i.Wm)(b,{class:"pfIcon",icon:"AddTwo",size:"2.5rem"}),c,(0,i._)("span",null,(0,a.zw)(t.$t("profile.add")),1)]),l,(0,i._)("div",{class:(0,a.C_)([w.notAllowActivate?"not-allow-activate":"operate-box"]),onClick:e[1]||(e[1]=(...t)=>w.activatePf&&w.activatePf(...t))},[(0,i.Wm)(b,{class:"pfIcon",icon:"RightOne",size:"2.5rem"}),p,(0,i._)("span",null,(0,a.zw)(t.$t("profile.activate")),1)],2),u,(0,i._)("div",{class:"operate-box",onClick:e[2]||(e[2]=(...t)=>w.editPf&&w.editPf(...t))},[(0,i.Wm)(b,{class:"pfIcon",icon:"EditTwo",size:"2.5rem"}),h,(0,i._)("span",null,(0,a.zw)(t.$t("profile.editor")),1)]),f,(0,i._)("div",{class:"operate-box delete-box",onClick:e[3]||(e[3]=(...t)=>w.delPf&&w.delPf(...t))},[(0,i.Wm)(b,{class:"pfIcon",icon:"TrashOne",size:"2.5rem"}),d,(0,i._)("span",null,(0,a.zw)(t.$t("profile.delete")),1)])]),(0,i._)("div",m,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)($.pfList.length,(t=>((0,i.wg)(),(0,i.iD)("div",{key:t,class:"profile-item",onClick:e=>w.selectFile(t-1)},[(0,i.Wm)(b,{class:(0,a.C_)({"file-static-icon":!0,"file-active-icon":$.active_item==t-1}),icon:$.active_item==t-1?"ActivePf":"StaticPf"},null,8,["class","icon"]),(0,i._)("span",{class:(0,a.C_)({"pf-static-num":!0,"pf-active-num":$.active_item==t-1})},(0,a.zw)(w.getPfNum(t)),3),(0,i._)("span",v,(0,a.zw)($.pfList[t-1]["name"]),1)],8,_)))),128)),(0,i._)("div",g,[(0,i.Wm)(P,{module:$.module,onClick:w.addPf,class:"file-static-icon",borderRadius:"0","use-icon":!0,icon:"AddTwo",bgcColor:"transparent",iconSize:"2.5rem"},null,8,["module","onClick"])])])])}var w=s(74125),b=s(84965),P=s(32015),y=s(33506),L=s(10335),x=s(49963);const C={components:{LeetxButton:L.Z},data(){return{module:"PROFILE",pfList:[],active_item:-1}},methods:{getPfNum(t){let e=this.pfList[t-1].pset;return e<10||e<10?`0${e}`:`${e}`},delPf(){if("guest"==this.$store.state.f_status.user)return b.c.warning(["guest用户无权限操作"]);if(-1==this.active_item)return;let t=this.pfList[this.active_item].pset;if(t==this.activatePset){let t=this.$t("promsg.no_delete");return void b.c.warning([t])}let e=`${this.$t("promsg.is_del")}${this.pfList[this.active_item].pset}`;console.log("this.$route.path",this.$route.path),console.log("this.$route.query",this.$route.query),this.$route.path.startsWith("/profile")&&this.$route.query&&this.$route.query.pset==t&&(e=this.$t("promsg.deleteFileEditing")),(0,P.Z)({title:this.$t("promsg.del"),confirmText:this.$t("promsg.yes"),cancelText:this.$t("promsg.no"),msg:e}).then((()=>{(0,w.rz)({pset:this.pfList[this.active_item].pset}).then((e=>{9130!=e.status?9125!=e.status?0==e.status?(this.$route.path.startsWith("/profile")&&this.$route.query&&this.$route.query.pset==t&&this.$router.push({path:"/profile",query:{pset:-1}}),this.$emit("operate",{action:"sub"}),b.c.success([this.$t("promsg.del_suc")])):b.c.warning([this.$t("promsg.nexit"),this.$t("promsg.has_del")]):b.c.warning(["文件不存在或已经删除"]):b.c.error(["删除失败"])})).catch((()=>{b.c.error(["删除失败"]),this.$emit("operate",{action:"sub"})})),this.active_item=-1}))},addPf(){(0,y.Z)({pfList:this.pfList}).then((t=>{let e=t.pset;(0,w.cy)(t.Profile).then((t=>{9121!=t.status?9123!=t.status?(0==t.status||b.c.error([this.$t("promsg.add_fail")]),this.$router.push({path:"/profile",query:{pset:e}}),this.$emit("operate",{action:"add"})):b.c.warning(["文件写入数据库失败"]):b.c.warning(["Pset或文件名重复"])})).catch((()=>{b.c.error([this.$t("promsg.add_fail")]),this.$emit("operate",{action:"add"})}))}))},sortBy(t){return function(e,s){return e[t]-s[t]}},editPf(){if(-1==this.active_item)return;let t=this.pfList[this.active_item].pset;this.$router.push({path:"/profile",query:{pset:t}}),console.log({path:"/profile",query:{pset:t}}),this.$emit("operate",{action:"edit"})},activatePf(){if(1!=this.$store.state.g_status.psetsrc){let t=this.$t("promsg.msgOne"),e=this.$t("promsg.msgTwo");return void b.c.warning([t,e])}if(-1==this.active_item)return void b.c.error([this.$t("promsg.nselect_file")]);if(this.pfList[this.active_item].pset==this.$store.state.g_status.pset)return void b.c.warning([this.$t("promsg.file_locate")]);if(this.$store.state.g_status.busy)return void b.c.warning([this.$t("promsg.run_status"),this.$t("promsg.nactivate_file")]);let t=this.pfList[this.active_item].pset;(0,w.TU)(t).then((t=>{9126!=t.status&&9129!=t.status?(0==t.status?b.c.success([this.$t("promsg.activate_suc")]):b.c.error("激活失败!"),this.$emit("operate",{action:"activate"})):b.c.warning(["下位机切换文件失败"])})).catch((()=>{b.c.error([this.$t("promsg.activate_fail")]),this.$emit("operate",{action:"activate"})}))},selectFile(t){this.active_item=t==this.active_item?-1:t},updateActiveItem(){this.$bus.on("highlightActiveFile",(t=>{let e=-1;if(0==t.pset)e=-1;else for(let s=0;s<this.pfList.length;s++)if(this.pfList[s].pset==t.pset){e=s;break}this.active_item=e}))},closeUpdateActiveItem(){this.$bus.off("highlightActiveFile")}},props:{fileItems:{type:Array,default:function(){return[]}}},watch:{fileItems:{immediate:!0,deep:!0,handler:function(){this.pfList=this.fileItems,this.pfList.sort(this.sortBy("pset"))}}},created(){this.updateActiveItem()},unmounted(){},computed:{notAllowActivate(){return 1!=this.$store.state.g_status.psetsrc},activatePset(){return this.$store.state.g_status.pset},enabled(){return this.module in this.$store.state.f_status.permissions&&4==this.$store.state.f_status.permissions[this.module]},pointerEvent(){return this.enabled?"auto":"none"},opacity(){return this.enabled?1:.3}}},k=()=>{(0,x.sj)((t=>({"53a989cd":t.pointerEvent,"0bea2a9b":t.opacity})))},A=C.setup;C.setup=A?(t,e)=>(k(),A(t,e)):k;var z=C,I=s(83744);const q=(0,I.Z)(z,[["render",$],["__scopeId","data-v-7c892a20"]]);var T=q}}]);
//# sourceMappingURL=292.ed5d0ee9.js.map