"use strict";(self["webpackChunkleetx_web"]=self["webpackChunkleetx_web"]||[]).push([[271],{59317:function(e,s,t){function r(e){let s;if(e instanceof Array){s=[];for(let t=0;t<e.length;t++)s[t]=r(e[t])}else if(e instanceof Object){s={};for(let t of Object.keys(e))s[t]=r(e[t])}else s=e;return s}function a(e,s,t=!1){let r=!0;if(e instanceof Array&&s instanceof Array&&s.length==e.length){for(let i=0;i<e.length;i++)if(r=r&&a(e[i],s[i],t),!r)break}else if(!(e instanceof Object&&s instanceof Object)||e instanceof Array||s instanceof Array)e instanceof Object||s instanceof Object?r=!1:(r=!0,t&&(r=e===s));else for(let i in e){if(!(i in s)){r=!1;break}if(r=r&&a(e[i],s[i],t),!r)break}return r}function i(e,s,t=!1){return t?JSON.stringify(e)===JSON.stringify(s):a(e,s)}t.d(s,{IK:function(){return i},p$:function(){return r}})},77271:function(e,s,t){t.r(s),t.d(s,{default:function(){return ke}});var r=t(66252),a=t(3577),i=t(49963);const n=e=>((0,r.dD)("data-v-78451750"),e=e(),(0,r.Cn)(),e),d={class:"users-nav"},u={class:"id-span"},l={class:"name-span"},o=n((()=>(0,r._)("span",{class:"edit-span"},null,-1))),c={class:"mask-box"},p={class:"table-box"},h=["onClick"],m={class:"id-span"},y={class:"name-span"},v={class:"role-span"},g={key:0,class:"edit-span"},w={class:(0,a.C_)({"users-item":!0,"add-line":!0})},f={key:0,class:"id-span"},_=n((()=>(0,r._)("span",{class:"name-span"},null,-1))),k=n((()=>(0,r._)("span",{class:"role-span"},null,-1))),x=n((()=>(0,r._)("span",{class:"edit-span"},null,-1)));function T(e,s,t,n,T,U){const b=(0,r.up)("svg-loader"),N=(0,r.up)("LeetxButton");return(0,r.wg)(),(0,r.iD)("div",{class:"users-mng-box",onClick:s[0]||(s[0]=(...s)=>e.isClickOpearteBox&&e.isClickOpearteBox(...s))},[(0,r._)("div",d,[(0,r._)("span",u,(0,a.zw)(e.$t("setuser.username")),1),(0,r._)("span",l,(0,a.zw)(e.$t("setuser.roleedit")),1),(0,r._)("span",{class:"role-span",ref:"editUsr"},(0,a.zw)(e.$t("setuser.liveTime")),513),o]),(0,r._)("div",c,[(0,r._)("div",p,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(T.users,((s,t)=>((0,r.wg)(),(0,r.iD)("div",{key:t,class:(0,a.C_)({"users-item":!0,"active-user":T.actvUsr==t}),onClick:e=>U.operateUsr(t)},[(0,r._)("span",m,(0,a.zw)(s.user_name),1),(0,r._)("span",y,(0,a.zw)(s.group_name),1),(0,r._)("span",v,(0,a.zw)(e.$t("setuser.noLimit")),1),4==U.permision_level?((0,r.wg)(),(0,r.iD)("span",g,[(0,r.wy)((0,r.Wm)(b,{onClick:U.editUserDialog,class:"edit-btn",icon:"ActiveEditUser",size:"2.5rem"},null,8,["onClick"]),[[i.F8,T.actvUsr==t]]),(0,r.wy)((0,r.Wm)(b,{onClick:U.delUser,class:"trash-btn",icon:"DelDmrct",size:"2.5rem"},null,8,["onClick"]),[[i.F8,T.actvUsr==t&&this.$store.state.f_status.user!=s.user_name]])])):(0,r.kq)("",!0)],10,h)))),128)),(0,r._)("div",w,[4==U.permision_level?((0,r.wg)(),(0,r.iD)("span",f,[(0,r.Wm)(N,{module:T.module,onClick:U.addUserDialog,class:"add-btn","use-icon":!0,icon:"StaticCircleAdd",bgcColor:"transparent",height:"2.5rem",width:"2.5rem",iconSize:"2.5rem"},null,8,["module","onClick"])])):(0,r.kq)("",!0),_,k,x])])])])}var U=t(69947);const b=e=>((0,r.dD)("data-v-d297a0ee"),e=e(),(0,r.Cn)(),e),N={key:0,class:"eidtuser-box"},C={class:"eidtuser-title-line"},$={class:"eidtuser-title-msg"},D={class:"eidtuser-name-line"},V={class:"eidtuser-name-text"},I={class:"eidtuser-role-line"},W={class:"eidtuser-role-text"},R={class:"eidtuser-key-line"},S=b((()=>(0,r._)("div",{class:"eidtuser-key-text"}," 登录码 ",-1))),O=b((()=>(0,r._)("br",null,null,-1))),P={class:"edituser-operate-line"};function z(e,s,t,n,d,u){const l=(0,r.up)("svgloader"),o=(0,r.up)("InputText"),c=(0,r.up)("NewSelect");return d.isShow?((0,r.wg)(),(0,r.iD)("div",N,[(0,r._)("div",C,[(0,r._)("span",$,(0,a.zw)(e.$t("dlgedituser.editUser")),1),(0,r._)("span",{class:"edituser-box-close",onClick:s[0]||(s[0]=(...e)=>u.cancel&&u.cancel(...e))},[(0,r.Wm)(l,{class:"icon-close",icon:"Close",size:"1.2rem"})])]),(0,r._)("div",D,[(0,r._)("div",V,(0,a.zw)(e.$t("dlgedituser.name")),1),(0,r.Wm)(o,{text:t.olduser.user_name,imprprChrctr:["space"],textValid:-1==d.validNameType,validReason:u.nameReason,class:"eidtuser-name-input",modelValue:d.user.user_name,"onUpdate:modelValue":s[1]||(s[1]=e=>d.user.user_name=e)},null,8,["text","textValid","validReason","modelValue"])]),(0,r._)("div",I,[(0,r._)("div",W,(0,a.zw)(e.$t("dlgedituser.newRole")),1),(0,r.Wm)(c,{class:"eidtuser-name-input",width:18.4768,realVal:d.user.group_id.text,onValChng:s[2]||(s[2]=e=>d.user.group_id.text=e),options:d.groupInfo},null,8,["width","realVal","options"])]),(0,r._)("div",R,[S,(0,r.Wm)(o,{isShowKeyBoard:!1,placeholder:"请刷卡注册",class:"eidtuser-key-input",textValid:-1==d.validWorkerNumType,validReason:u.userKeyNameReason,text:d.user.user_key.text,"onUpdate:text":s[3]||(s[3]=e=>d.user.user_key.text=e)},null,8,["textValid","validReason","text"])]),O,(0,r._)("div",P,[(0,r._)("div",{class:"edituser-cancel-btn",onClick:s[4]||(s[4]=(...e)=>u.cancel&&u.cancel(...e))},(0,a.zw)(e.$t("dlgedituser.cancel")),1),0!=t.groups.length&&u.allowAddUser?(0,r.wy)(((0,r.wg)(),(0,r.iD)("div",{key:0,class:"edituser-cnfrm-btn",onClick:s[5]||(s[5]=(...e)=>u.sbmtUserInfo&&u.sbmtUserInfo(...e))},(0,a.zw)(e.$t("dlgedituser.confirm")),513)),[[i.F8,0!=t.groups.length]]):(0,r.kq)("",!0)])])):(0,r.kq)("",!0)}var A=t(23263),K=t(73496),j=t(96799),Z=t(65884),L={components:{InputText:A.Z,svgloader:K.Z,NewSelect:j.Z},data(){return{user:{user_id:{text:"",valid:!1},user_name:{text:"",valid:!1},email:{text:"",valid:!1},group_id:{text:"",valid:!1},user_key:{text:"",valid:!1},others:{text:"",valid:!1}},groupInfo:{},isShow:!0,validNameType:-1,validWorkerNumType:-1,maskId:0,inputValue:"",lastKeyPressTime:0,scanDelay:50}},mounted(){this.initStatus(),this.$bus.on("scannerInput",this.handleScannerInput)},beforeUnmount(){this.$bus.off("scannerInput",this.handleScannerInput)},methods:{handleScannerInput(e){console.log("收到用于注册的code:",e),this.user.user_key.text=e},sbmtUserInfo(){this.isShow=!1;let e=this.user,s=this.olduser;this.onConfirm&&this.onConfirm({user:e,olduser:s}),Z.g.descend(this.maskId)},cancel(){this.isShow=!1,this.onCancel&&this.onCancel(),Z.g.descend(this.maskId)},initGroupInfo(){for(let e=0;e<this.groups.length;e++)this.groupInfo[this.groups[e].group_name]=this.groups[e].group_id},initStatus(){this.maskId=Z.g.rise(15,this.cancel)},updateUserValidType(){""==this.user.user_name.text?this.validNameType=1:this.olduser.user_name!=this.user.user_name.text&&-1!=this.names.indexOf(this.user.user_name.text)?this.validNameType=2:this.user.user_name.text.length>10?this.validNameType=3:this.validNameType=-1},updateWorkNumValidType(){const e=this.keys.reduce(((e,s)=>(s===this.user.user_key.text&&e++,e)),0);""!=this.user.user_key.text&&e>1||""!=this.user.user_key.text&&this.olduser.user_key!=this.user.user_key.text&&-1!=this.keys.indexOf(this.user.user_key.text)?this.validWorkerNumType=2:this.validWorkerNumType=-1}},props:{groups:{type:Object,default:function(){return{}}},olduser:{type:Object,default:function(){return{}}},names:{type:Array,default:function(){return[]}},keys:{type:Array,default:function(){return[]}}},watch:{olduser:{immediate:!0,deep:!0,handler:function(){for(let e in this.user)this.user[e].text=this.olduser[e]}},groups:{immediate:!0,deep:!0,handler:function(){this.initGroupInfo()}},"user.user_name":{deep:!0,immediate:!0,handler:function(){this.updateUserValidType()}},"user.user_key":{deep:!0,immediate:!0,handler:function(){this.updateWorkNumValidType()}},keys:{deep:!0,immediate:!0,handler:function(){this.updateWorkNumValidType()}}},computed:{nameReason(){return-1==this.validNameType?"":1==this.validNameType?this.$t("dlgadduser.nameReasonOne"):2==this.validNameType?this.$t("dlgadduser.nameReasonTwo"):3==this.validNameType?this.$t("dlgadduser.nameReasonThree"):""},userKeyNameReason(){return-1==this.validWorkerNumType?"":2==this.validWorkerNumType?this.$t("dlgadduser.userKeyReason"):""},allowAddUser(){let e=!0;return e=e&&-1==this.validNameType,e=e&&-1==this.validWorkerNumType,e}}},G=t(83744);const E=(0,G.Z)(L,[["render",z],["__scopeId","data-v-d297a0ee"]]);var q=E,B=t(92797);const F=(e={})=>{if("object"!=typeof e)throw new Error("props must be a object");return new Promise(((s,t)=>{let r=(0,i.ri)(q,e).use(B.Z);r.config.globalProperties.$bus=e.bus;let a=r.mount(document.createElement("div"));document.body.appendChild(a.$el),a.onConfirm=function(e){s(e)},a.onCancel=function(e){t(e)}}))};var H=F;const J=e=>((0,r.dD)("data-v-69b6a2b9"),e=e(),(0,r.Cn)(),e),M={key:0,class:"adduser-box"},X={class:"adduser-title-line"},Y={class:"adduser-title-msg"},Q={class:"adduser-name-line"},ee={class:"adduser-name-text"},se={class:"adduser-pswrd-line"},te={class:"adduser-name-text"},re={class:"adduser-worknum-line"},ae=J((()=>(0,r._)("div",{class:"adduser-worknum-text"}," 登录码 ",-1))),ie={class:"adduser-role-line"},ne={class:"adduser-role-text"},de={class:"adduser-operate-line"};function ue(e,s,t,n,d,u){const l=(0,r.up)("svgloader"),o=(0,r.up)("InputText"),c=(0,r.up)("NewSelect");return d.isShow?((0,r.wg)(),(0,r.iD)("div",M,[(0,r._)("div",X,[(0,r._)("span",Y,(0,a.zw)(e.$t("newuser.newuser")),1),(0,r._)("span",{class:"adduser-box-close",onClick:s[0]||(s[0]=(...e)=>u.cancel&&u.cancel(...e))},[(0,r.Wm)(l,{class:"icon-close",icon:"Close",size:"1.2rem"})])]),(0,r._)("div",Q,[(0,r._)("div",ee,(0,a.zw)(e.$t("newuser.username")),1),(0,r.Wm)(o,{imprprChrctr:d.illegalWords,textValid:-1==d.validNameType,validReason:u.nameReason,text:"",placeholder:e.$t("newuser.usernamemsg"),class:"adduser-name-input",modelValue:d.userData.user,"onUpdate:modelValue":s[1]||(s[1]=e=>d.userData.user=e)},null,8,["imprprChrctr","textValid","validReason","placeholder","modelValue"])]),(0,r._)("div",se,[(0,r._)("div",te,(0,a.zw)(e.$t("newuser.initialPswrd")),1),(0,r.Wm)(o,{imprprChrctr:["space"],textValid:-1==d.validPswrdType,validReason:u.pwdReason,placeholder:e.$t("newuser.pswrdmsg"),class:"adduser-pswrd-input",type:u.pswdOrtext,modelValue:d.userData.pwd,"onUpdate:modelValue":s[2]||(s[2]=e=>d.userData.pwd=e)},null,8,["textValid","validReason","placeholder","type","modelValue"]),(0,r.wy)((0,r.Wm)(l,{icon:u.eyeType,class:"user-pswd-eye",size:"1.5rem",onClick:u.showPswrd},null,8,["icon","onClick"]),[[i.F8,u.haseye]])]),(0,r._)("div",re,[ae,(0,r.Wm)(o,{isShowKeyBoard:!1,placeholder:"请刷卡注册",class:"adduser-worknum-input",textValid:-1==d.validWorkerNumType,validReason:u.userKeyNameReason,text:d.userData.user_key.text,"onUpdate:text":s[3]||(s[3]=e=>d.userData.user_key.text=e)},null,8,["textValid","validReason","text"])]),(0,r._)("div",ie,[(0,r._)("div",ne,(0,a.zw)(e.$t("newuser.prmsnrole")),1),(0,r.Wm)(c,{class:"adduser-name-input",width:17.625,realVal:d.userData.group_id.text,options:u.getGroups(),onValChng:s[4]||(s[4]=e=>d.userData.group_id.text=e)},null,8,["width","realVal","options"])]),(0,r._)("div",de,[(0,r._)("div",{class:"adduser-cancel-btn",onClick:s[5]||(s[5]=(...e)=>u.cancel&&u.cancel(...e))},(0,a.zw)(e.$t("dlgadduser.cancel")),1),0!=t.groups.length&&u.allowAddUser?(0,r.wy)(((0,r.wg)(),(0,r.iD)("div",{key:0,class:"adduser-cnfrm-btn",onClick:s[6]||(s[6]=(...e)=>u.sbmtUserInfo&&u.sbmtUserInfo(...e))},(0,a.zw)(e.$t("dlgadduser.sure")),513)),[[i.F8,0!=t.groups.length]]):(0,r.kq)("",!0)])])):(0,r.kq)("",!0)}var le={components:{InputText:A.Z,svgloader:K.Z,NewSelect:j.Z},data(){return{userData:{user:{text:"",valid:!1},pwd:{text:"",valid:!1},user_key:{text:"",valid:!1},group_id:{text:this.groups[0].group_id,valid:!0}},isShow:!0,isShowPswrd:!1,illegalWords:[",",".",":",";","'",'"',"?","!","-","+","/","=","(",")","space"],validNameType:1,validWorkerNumType:1,validPswrdType:1,maskId:0,inputValue:"",lastKeyPressTime:0,scanDelay:50}},methods:{handleScannerInput(e){console.log("收到用于注册的code:",e),this.userData.user_key.text=e},showPswrd(){this.isShowPswrd=!this.isShowPswrd},sbmtUserInfo(){this.isShow=!1,this.onConfirm&&this.onConfirm(this.userData),Z.g.descend(this.maskId)},cancel(){this.isShow=!1,this.onCancel&&this.onCancel(),Z.g.descend(this.maskId)},getGroups(){let e={};for(let s in this.groups)e[this.groups[s].group_name]=this.groups[s].group_id;return e},initStatus(){this.maskId=Z.g.rise(15,this.cancel)},updateWorkNumValidType(){""!=this.userData.user_key.text&&-1!=this.keys.indexOf(this.userData.user_key.text)?this.validWorkerNumType=2:this.validWorkerNumType=-1},updateUserValidType(){""==this.userData.user.text?this.validNameType=1:-1!=this.names.indexOf(this.userData.user.text)?this.validNameType=2:this.validNameType=-1},updatePswrdValidType(){""==this.userData.pwd.text?this.validPswrdType=1:this.validPswrdType=-1}},props:{groups:{type:Object,default:function(){return{}}},names:{type:Array,default:function(){return[]}},keys:{type:Array,default:function(){return[]}}},watch:{groups:{deep:!0,handler:function(){this.groups}},"userData.user":{deep:!0,immediate:!0,handler:function(){this.updateUserValidType()}},"userData.pwd":{deep:!0,immediate:!0,handler:function(){this.updatePswrdValidType()}},"userData.user_key":{deep:!0,immediate:!0,handler:function(){this.updateWorkNumValidType()}},names:{deep:!0,handler:function(){this.updateUserValidType()}},keys:{deep:!0,immediate:!0,handler:function(){this.updateWorkNumValidType()}}},computed:{pswdOrtext(){return this.isShowPswrd?"text":"password"},haseye(){return this.userData.pwd.text.length>0},eyeType(){return this.isShowPswrd?"OpenEye":"CloseEye"},nameReason(){return-1==this.validNameType?"":1==this.validNameType?this.$t("dlgadduser.nameReasonOne"):2==this.validNameType?this.$t("dlgadduser.nameReasonTwo"):3==this.validNameType?this.$t("dlgadduser.nameReasonThree"):""},userKeyNameReason(){return-1==this.validWorkerNumType?"":1==this.validWorkerNumType?this.$t("dlgadduser.nameReasonOne"):2==this.validWorkerNumType?this.$t("dlgadduser.userKeyReason"):""},pwdReason(){return-1==this.validPswrdType?"":1==this.validPswrdType?this.$t("dlgadduser.pwdReasonOne"):2==this.validPswrdType?this.$t("dlgadduser.pwdReasonTwo"):""},allowAddUser(){let e=!0;return e=e&&-1==this.validNameType,e=e&&-1==this.validPswrdType,e=e&&-1==this.validWorkerNumType,e}},mounted(){this.initStatus(),this.$bus.on("scannerInput",this.handleScannerInput)},beforeUnmount(){this.$bus.off("scannerInput",this.handleScannerInput)}};const oe=(0,G.Z)(le,[["render",ue],["__scopeId","data-v-69b6a2b9"]]);var ce=oe;const pe=(e={})=>{if("object"!=typeof e)throw new Error("props must be a object");return new Promise(((s,t)=>{let r=(0,i.ri)(ce,e).use(B.Z);r.config.globalProperties.$bus=e.bus;let a=r.mount(document.createElement("div"));document.body.appendChild(a.$el),a.onConfirm=function(e){s(e)},a.onCancel=function(e){t(e)}}))};var he=pe,me=t(32015),ye=t(59317),ve=t(12346),ge=t(84965),we=t(10335),fe={components:{LeetxButton:we.Z},data(){return{module:"AUTH_GROUP",actvUsr:-1,users:[],groups:[],newUser:{user:"",pwd:"",user_key:"",group_id:""},oldUser:{user_id:"",user_name:"",user_key:"",email:"",group_id:"",others:""},isLogin:0,userNames:[],userKeys:[]}},methods:{operateUsr(e){this.actvUsr=this.actvUsr==e?-1:e},editUserDialog(){H({groups:this.groups,olduser:this.users[this.actvUsr],names:this.userNames,bus:this.$bus,keys:this.userKeys}).then((async e=>{for(let s in this.oldUser)this.oldUser[s]=e.user[s].text;(0,ye.IK)(this.oldUser,e.oldUser,!0)||(await this.editUser(this.oldUser),setTimeout((()=>{if(e.olduser.user_name==this.$store.state.f_status.user){(0,ve.Z)();let e=this.$t("logout.success"),s=this.$t("logout.loginAgain");ge.c.success([e,s])}}),500))}))},addUserDialog(){this.groups.length<=0||he({groups:this.groups,names:this.userNames,bus:this.$bus,keys:this.userKeys}).then((e=>{for(let s in this.newUser)this.newUser[s]=e[s].text;this.addUser(this.newUser)}))},async addUser(e){e=e||{user:"user"+1e4*Math.random().toFixed(3),pwd:123456,group_id:1,user_key:123456},await(0,U.XW)(e).then((e=>{0!=e.status?ge.c.error(["添加用户失败"]):this.getUserList()})).catch((()=>{})),this.getUserList()},delUser(){let e=this.users[this.actvUsr].user_id,s=this.$t("setuser.deluser"),t=this.$t("setuser.yes"),r=this.$t("setuser.no"),a=this.$t("setuser.isDelGroup");(0,me.Z)({title:s,confirmText:t,cancelText:r,msg:a}).then((()=>{(0,U.wC)(e).then((e=>{0!=e.status&&ge.c.error(["删除用户失败"])})).catch((()=>{})),this.getUserList(),this.restActiveUser()}))},getGroupList(){(0,U.vb)().then((e=>{0==e.status?(this.groups=e.data,this.initUserNames()):this.groups=[]}))},getUserList(){(0,U.uj)().then((e=>{0==e.status?(this.users=e.data,this.initUserNames()):this.users=[]}))},async editUser(e){await(0,U.Ki)(e),this.getUserList()},restActiveUser(){this.actvUsr=-1},resetData(){this.actvUsr=-1,this.users=[],this.groups=[]},initUserNames(){this.userNames=[],this.userKeys=[];for(let e of this.users)this.userNames.push(e.user_name),this.userKeys.push(e.user_key)}},created(){this.permision_level>=1&&(this.getUserList(),this.getGroupList())},computed:{permision_level(){return this.module in this.$store.state.f_status.permissions?this.$store.state.f_status.permissions[this.module]:0}}};const _e=(0,G.Z)(fe,[["render",T],["__scopeId","data-v-78451750"]]);var ke=_e}}]);
//# sourceMappingURL=271.ac19430b.js.map