"use strict";(self["webpackChunkleetx_web"]=self["webpackChunkleetx_web"]||[]).push([[422],{59317:function(e,s,t){function a(e){let s;if(e instanceof Array){s=[];for(let t=0;t<e.length;t++)s[t]=a(e[t])}else if(e instanceof Object){s={};for(let t of Object.keys(e))s[t]=a(e[t])}else s=e;return s}function i(e,s,t=!1){let a=!0;if(e instanceof Array&&s instanceof Array&&s.length==e.length){for(let r=0;r<e.length;r++)if(a=a&&i(e[r],s[r],t),!a)break}else if(!(e instanceof Object&&s instanceof Object)||e instanceof Array||s instanceof Array)e instanceof Object||s instanceof Object?a=!1:(a=!0,t&&(a=e===s));else for(let r in e){if(!(r in s)){a=!1;break}if(a=a&&i(e[r],s[r],t),!a)break}return a}function r(e,s,t=!1){return t?JSON.stringify(e)===JSON.stringify(s):i(e,s)}t.d(s,{IK:function(){return r},p$:function(){return a}})},3422:function(e,s,t){t.r(s),t.d(s,{default:function(){return ke}});var a=t(66252),i=t(3577),r=t(49963);const n=e=>((0,a.dD)("data-v-070d076d"),e=e(),(0,a.Cn)(),e),d={class:"users-nav"},l={class:"id-span"},u={class:"name-span"},o=n((()=>(0,a._)("span",{class:"edit-span"},null,-1))),c={class:"mask-box"},p={class:"table-box"},h=["onClick"],m={class:"id-span"},w={class:"name-span"},v={class:"role-span"},g={key:0,class:"edit-span"},f={class:(0,i.C_)({"users-item":!0,"add-line":!0})},y={key:0,class:"id-span"},_=n((()=>(0,a._)("span",{class:"name-span"},null,-1))),k=n((()=>(0,a._)("span",{class:"role-span"},null,-1))),x=n((()=>(0,a._)("span",{class:"edit-span"},null,-1)));function U(e,s,t,n,U,T){const C=(0,a.up)("svg-loader"),b=(0,a.up)("LeetxButton");return(0,a.wg)(),(0,a.iD)("div",{class:"users-mng-box",onClick:s[0]||(s[0]=(...s)=>e.isClickOpearteBox&&e.isClickOpearteBox(...s))},[(0,a._)("div",d,[(0,a._)("span",l,(0,i.zw)(e.$t("setuser.username")),1),(0,a._)("span",u,(0,i.zw)(e.$t("setuser.roleedit")),1),(0,a._)("span",{class:"role-span",ref:"editUsr"},(0,i.zw)(e.$t("setuser.liveTime")),513),o]),(0,a._)("div",c,[(0,a._)("div",p,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(U.users,((s,t)=>((0,a.wg)(),(0,a.iD)("div",{key:t,class:(0,i.C_)({"users-item":!0,"active-user":U.actvUsr==t}),onClick:e=>T.operateUsr(t)},[(0,a._)("span",m,(0,i.zw)(s.user_name),1),(0,a._)("span",w,(0,i.zw)(s.group_name),1),(0,a._)("span",v,(0,i.zw)(e.$t("setuser.noLimit")),1),4==T.permision_level?((0,a.wg)(),(0,a.iD)("span",g,[(0,a.wy)((0,a.Wm)(C,{onClick:T.editUserDialog,class:"edit-btn",icon:"ActiveEditUser",size:"2.5rem"},null,8,["onClick"]),[[r.F8,U.actvUsr==t]]),(0,a.wy)((0,a.Wm)(C,{onClick:T.delUser,class:"trash-btn",icon:"DelDmrct",size:"2.5rem"},null,8,["onClick"]),[[r.F8,U.actvUsr==t&&this.$store.state.f_status.user!=s.user_name]])])):(0,a.kq)("",!0)],10,h)))),128)),(0,a._)("div",f,[4==T.permision_level?((0,a.wg)(),(0,a.iD)("span",y,[(0,a.Wm)(b,{module:U.module,onClick:T.addUserDialog,class:"add-btn","use-icon":!0,icon:"StaticCircleAdd",bgcColor:"transparent",height:"2.5rem",width:"2.5rem",iconSize:"2.5rem"},null,8,["module","onClick"])])):(0,a.kq)("",!0),_,k,x])])])])}var T=t(69947);const C=e=>((0,a.dD)("data-v-08e6f8aa"),e=e(),(0,a.Cn)(),e),b={key:0,class:"eidtuser-box"},N={class:"eidtuser-title-line"},$={class:"eidtuser-title-msg"},D={class:"eidtuser-name-line"},V={class:"eidtuser-name-text"},I={class:"eidtuser-role-line"},S={class:"eidtuser-role-text"},R={class:"eidtuser-key-line"},W=C((()=>(0,a._)("div",{class:"eidtuser-key-text"}," 登录码 ",-1))),z=C((()=>(0,a._)("br",null,null,-1))),O={class:"edituser-operate-line"};function P(e,s,t,n,d,l){const u=(0,a.up)("svgloader"),o=(0,a.up)("InputText"),c=(0,a.up)("NewSelect");return d.isShow?((0,a.wg)(),(0,a.iD)("div",b,[(0,a._)("div",N,[(0,a._)("span",$,(0,i.zw)(e.$t("dlgedituser.editUser")),1),(0,a._)("span",{class:"edituser-box-close",onClick:s[0]||(s[0]=(...e)=>l.cancel&&l.cancel(...e))},[(0,a.Wm)(u,{class:"icon-close",icon:"Close",size:"1.2rem"})])]),(0,a._)("div",D,[(0,a._)("div",V,(0,i.zw)(e.$t("dlgedituser.name")),1),(0,a.Wm)(o,{text:t.olduser.user_name,imprprChrctr:["space"],textValid:-1==d.validNameType,validReason:l.nameReason,class:"eidtuser-name-input",modelValue:d.user.user_name,"onUpdate:modelValue":s[1]||(s[1]=e=>d.user.user_name=e)},null,8,["text","textValid","validReason","modelValue"])]),(0,a._)("div",I,[(0,a._)("div",S,(0,i.zw)(e.$t("dlgedituser.newRole")),1),(0,a.Wm)(c,{class:"eidtuser-name-input",width:18.4768,realVal:d.user.group_id.text,onValChng:s[2]||(s[2]=e=>d.user.group_id.text=e),options:d.groupInfo},null,8,["width","realVal","options"])]),(0,a._)("div",R,[W,(0,a.Wm)(o,{text:"",fntFmly:"--R-M",isShowKeyBoard:!1,placeholder:"请刷卡注册",class:"eidtuser-key-input",modelValue:d.user.user_key,"onUpdate:modelValue":s[3]||(s[3]=e=>d.user.user_key=e)},null,8,["modelValue"])]),z,(0,a._)("div",O,[(0,a._)("div",{class:"edituser-cancel-btn",onClick:s[4]||(s[4]=(...e)=>l.cancel&&l.cancel(...e))},(0,i.zw)(e.$t("dlgedituser.cancel")),1),(0,a.wy)((0,a._)("div",{class:"edituser-cnfrm-btn",onClick:s[5]||(s[5]=(...e)=>l.sbmtUserInfo&&l.sbmtUserInfo(...e))},(0,i.zw)(e.$t("dlgedituser.confirm")),513),[[r.F8,0!=t.groups.length&&-1==d.validNameType]])])])):(0,a.kq)("",!0)}var A=t(23263),j=t(73496),Z=t(96799),L=t(65884),F={components:{InputText:A.Z,svgloader:j.Z,NewSelect:Z.Z},data(){return{user:{user_id:{text:"",valid:!1},user_name:{text:"",valid:!1},email:{text:"",valid:!1},group_id:{text:"",valid:!1},user_key:{text:"",valid:!1},others:{text:"",valid:!1}},groupInfo:{},isShow:!0,validNameType:-1,maskId:0}},methods:{sbmtUserInfo(){this.isShow=!1;let e=this.user,s=this.olduser;this.onConfirm&&this.onConfirm({user:e,olduser:s}),L.g.descend(this.maskId)},cancel(){this.isShow=!1,this.onCancel&&this.onCancel(),L.g.descend(this.maskId)},initGroupInfo(){for(let e=0;e<this.groups.length;e++)this.groupInfo[this.groups[e].group_name]=this.groups[e].group_id},initStatus(){this.maskId=L.g.rise(15,this.cancel)},updateUserValidType(){""==this.user.user_name.text?this.validNameType=1:this.olduser.user_name!=this.user.user_name.text&&-1!=this.names.indexOf(this.user.user_name.text)?this.validNameType=2:this.user.user_name.text.length>10?this.validNameType=3:this.validNameType=-1}},props:{groups:{type:Object,default:function(){return{}}},olduser:{type:Object,default:function(){return{}}},names:{type:Array,default:function(){return[]}}},watch:{olduser:{immediate:!0,deep:!0,handler:function(){for(let e in this.user)this.user[e].text=this.olduser[e]}},groups:{immediate:!0,deep:!0,handler:function(){this.initGroupInfo()}},"user.user_name":{deep:!0,immediate:!0,handler:function(){this.updateUserValidType()}}},computed:{nameReason(){return-1==this.validNameType?"":1==this.validNameType?this.$t("dlgadduser.nameReasonOne"):2==this.validNameType?this.$t("dlgadduser.nameReasonTwo"):3==this.validNameType?this.$t("dlgadduser.nameReasonThree"):""}},mounted(){this.initStatus()}},G=t(83744);const E=(0,G.Z)(F,[["render",P],["__scopeId","data-v-08e6f8aa"]]);var B=E,K=t(92797);const q=(e={})=>{if("object"!=typeof e)throw new Error("props must be a object");return new Promise(((s,t)=>{let a=(0,r.ri)(B,e).use(K.Z).mount(document.createElement("div"));document.body.appendChild(a.$el),a.onConfirm=function(e){s(e)},a.onCancel=function(e){t(e)}}))};var M=q;const H=e=>((0,a.dD)("data-v-89cb0272"),e=e(),(0,a.Cn)(),e),J={key:0,class:"adduser-box"},X={class:"adduser-title-line"},Y={class:"adduser-title-msg"},Q={class:"adduser-name-line"},ee={class:"adduser-name-text"},se={class:"adduser-pswrd-line"},te={class:"adduser-name-text"},ae={class:"adduser-worknum-line"},ie=H((()=>(0,a._)("div",{class:"adduser-worknum-text"}," 登录码 ",-1))),re={class:"adduser-role-line"},ne={class:"adduser-role-text"},de={class:"adduser-operate-line"};function le(e,s,t,n,d,l){const u=(0,a.up)("svgloader"),o=(0,a.up)("InputText"),c=(0,a.up)("NewSelect");return d.isShow?((0,a.wg)(),(0,a.iD)("div",J,[(0,a._)("div",X,[(0,a._)("span",Y,(0,i.zw)(e.$t("newuser.newuser")),1),(0,a._)("span",{class:"adduser-box-close",onClick:s[0]||(s[0]=(...e)=>l.cancel&&l.cancel(...e))},[(0,a.Wm)(u,{class:"icon-close",icon:"Close",size:"1.2rem"})])]),(0,a._)("div",Q,[(0,a._)("div",ee,(0,i.zw)(e.$t("newuser.username")),1),(0,a.Wm)(o,{imprprChrctr:d.illegalWords,textValid:-1==d.validNameType,validReason:l.nameReason,text:"",placeholder:e.$t("newuser.usernamemsg"),class:"adduser-name-input",modelValue:d.userData.user,"onUpdate:modelValue":s[1]||(s[1]=e=>d.userData.user=e)},null,8,["imprprChrctr","textValid","validReason","placeholder","modelValue"])]),(0,a._)("div",se,[(0,a._)("div",te,(0,i.zw)(e.$t("newuser.initialPswrd")),1),(0,a.Wm)(o,{imprprChrctr:["space"],textValid:-1==d.validPswrdType,validReason:l.pwdReason,placeholder:e.$t("newuser.pswrdmsg"),class:"adduser-pswrd-input",type:l.pswdOrtext,modelValue:d.userData.pwd,"onUpdate:modelValue":s[2]||(s[2]=e=>d.userData.pwd=e)},null,8,["textValid","validReason","placeholder","type","modelValue"]),(0,a.wy)((0,a.Wm)(u,{icon:l.eyeType,class:"user-pswd-eye",size:"1.5rem",onClick:l.showPswrd},null,8,["icon","onClick"]),[[r.F8,l.haseye]])]),(0,a._)("div",ae,[ie,(0,a.Wm)(o,{text:"",fntFmly:"--R-M",isShowKeyBoard:!1,placeholder:"请刷卡注册",class:"adduser-worknum-input",modelValue:d.userData.workNum,"onUpdate:modelValue":s[3]||(s[3]=e=>d.userData.workNum=e)},null,8,["modelValue"])]),(0,a._)("div",re,[(0,a._)("div",ne,(0,i.zw)(e.$t("newuser.prmsnrole")),1),(0,a.Wm)(c,{class:"adduser-name-input",width:17.625,realVal:d.userData.group_id.text,options:l.getGroups(),onValChng:s[4]||(s[4]=e=>d.userData.group_id.text=e)},null,8,["width","realVal","options"])]),(0,a._)("div",de,[(0,a._)("div",{class:"adduser-cancel-btn",onClick:s[5]||(s[5]=(...e)=>l.cancel&&l.cancel(...e))},(0,i.zw)(e.$t("dlgadduser.cancel")),1),0!=t.groups.length&&l.allowAddUser?(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",{key:0,class:"adduser-cnfrm-btn",onClick:s[6]||(s[6]=(...e)=>l.sbmtUserInfo&&l.sbmtUserInfo(...e))},(0,i.zw)(e.$t("dlgadduser.sure")),513)),[[r.F8,0!=t.groups.length]]):(0,a.kq)("",!0)])])):(0,a.kq)("",!0)}var ue={components:{InputText:A.Z,svgloader:j.Z,NewSelect:Z.Z},data(){return{userData:{user:{text:"",valid:!1},pwd:{text:"",valid:!1},workNum:{text:0,valid:!1},user_key:{text:"",valid:!1},group_id:{text:this.groups[0].group_id,valid:!0}},isShow:!0,isShowPswrd:!1,illegalWords:[",",".",":",";","'",'"',"?","!","-","+","/","=","(",")","space"],validNameType:1,validWorkerNumType:1,validPswrdType:1,maskId:0}},methods:{showPswrd(){this.isShowPswrd=!this.isShowPswrd},sbmtUserInfo(){this.isShow=!1,this.onConfirm&&this.onConfirm(this.userData),L.g.descend(this.maskId)},cancel(){this.isShow=!1,this.onCancel&&this.onCancel(),L.g.descend(this.maskId)},getGroups(){let e={};for(let s in this.groups)e[this.groups[s].group_name]=this.groups[s].group_id;return e},initStatus(){this.maskId=L.g.rise(15,this.cancel)},updateWorkNumValidType(){""==this.userData.workNum?this.validWorkerNumType=1:this.validWorkerNumType=-1},updateUserValidType(){""==this.userData.user.text?this.validNameType=1:-1!=this.names.indexOf(this.userData.user.text)?this.validNameType=2:this.validNameType=-1},updatePswrdValidType(){""==this.userData.pwd.text?this.validPswrdType=1:this.validPswrdType=-1}},props:{groups:{type:Object,default:function(){return{}}},names:{type:Array,default:function(){return[]}}},watch:{groups:{deep:!0,handler:function(){this.groups}},"userData.user":{deep:!0,immediate:!0,handler:function(){this.updateUserValidType()}},"userData.pwd":{deep:!0,immediate:!0,handler:function(){this.updatePswrdValidType()}},"userData.workNum":{deep:!0,immediate:!0,handler:function(){this.updateWorkNumValidType()}},names:{deep:!0,handler:function(){this.updateUserValidType()}}},computed:{pswdOrtext(){return this.isShowPswrd?"text":"password"},haseye(){return this.userData.pwd.text.length>0},eyeType(){return this.isShowPswrd?"OpenEye":"CloseEye"},nameReason(){return-1==this.validNameType?"":1==this.validNameType?this.$t("dlgadduser.nameReasonOne"):2==this.validNameType?this.$t("dlgadduser.nameReasonTwo"):3==this.validNameType?this.$t("dlgadduser.nameReasonThree"):""},pwdReason(){return-1==this.validPswrdType?"":1==this.validPswrdType?this.$t("dlgadduser.pwdReasonOne"):2==this.validPswrdType?this.$t("dlgadduser.pwdReasonTwo"):""},numReason(){return 1==this.validWorkerNumType?"":1==this.validWorkerNumType?this.$t("dlgadduser.numReasonOne"):""},allowAddUser(){let e=!0;return e=e&&-1==this.validNameType,e=e&&-1==this.validPswrdType,e=e&&-1==this.validWorkerNumType,e}},mounted(){this.initStatus()}};const oe=(0,G.Z)(ue,[["render",le],["__scopeId","data-v-89cb0272"]]);var ce=oe;const pe=(e={})=>{if("object"!=typeof e)throw new Error("props must be a object");return new Promise(((s,t)=>{let a=(0,r.ri)(ce,e).use(K.Z).mount(document.createElement("div"));document.body.appendChild(a.$el),a.onConfirm=function(e){s(e)},a.onCancel=function(e){t(e)}}))};var he=pe,me=t(32015),we=t(59317),ve=t(12346),ge=t(84965),fe=t(10335),ye={components:{LeetxButton:fe.Z},data(){return{module:"AUTH_GROUP",actvUsr:-1,users:[],groups:[],newUser:{user:"",pwd:"",user_key:"",workNum:"",group_id:""},oldUser:{user_id:"",user_name:"",user_key:"",email:"",group_id:"",others:""},isLogin:0,userNames:[]}},methods:{operateUsr(e){this.actvUsr=this.actvUsr==e?-1:e},editUserDialog(){M({groups:this.groups,olduser:this.users[this.actvUsr],names:this.userNames}).then((async e=>{for(let s in this.oldUser)this.oldUser[s]=e.user[s].text;(0,we.IK)(this.oldUser,e.oldUser,!0)||(await this.editUser(this.oldUser),setTimeout((()=>{if(e.olduser.user_name==this.$store.state.f_status.user){(0,ve.Z)();let e=this.$t("logout.success"),s=this.$t("logout.loginAgain");ge.c.success([e,s])}}),500))}))},addUserDialog(){this.groups.length<=0||he({groups:this.groups,names:this.userNames}).then((e=>{for(let s in this.newUser)this.newUser[s]=e[s].text;this.addUser(this.newUser)}))},async addUser(e){e=e||{user:"user"+1e4*Math.random().toFixed(3),pwd:123456,group_id:1},await(0,T.XW)(e).then((e=>{0!=e.status?ge.c.error(["添加用户失败"]):this.getUserList()})).catch((()=>{})),this.getUserList()},delUser(){let e=this.users[this.actvUsr].user_id,s=this.$t("setuser.deluser"),t=this.$t("setuser.yes"),a=this.$t("setuser.no"),i=this.$t("setuser.isDelGroup");(0,me.Z)({title:s,confirmText:t,cancelText:a,msg:i}).then((()=>{(0,T.wC)(e).then((e=>{0!=e.status&&ge.c.error(["删除用户失败"])})).catch((()=>{})),this.getUserList(),this.restActiveUser()}))},getGroupList(){(0,T.vb)().then((e=>{0==e.status?(this.groups=e.data,this.initUserNames()):this.groups=[]}))},getUserList(){(0,T.uj)().then((e=>{0==e.status?(this.users=e.data,this.initUserNames()):this.users=[]}))},async editUser(e){await(0,T.Ki)(e),this.getUserList()},restActiveUser(){this.actvUsr=-1},resetData(){this.actvUsr=-1,this.users=[],this.groups=[]},initUserNames(){this.userNames=[];for(let e of this.users)this.userNames.push(e.user_name)}},created(){this.permision_level>=1&&(this.getUserList(),this.getGroupList())},computed:{permision_level(){return this.module in this.$store.state.f_status.permissions?this.$store.state.f_status.permissions[this.module]:0}}};const _e=(0,G.Z)(ye,[["render",U],["__scopeId","data-v-070d076d"]]);var ke=_e}}]);
//# sourceMappingURL=422.b0e9bd85.js.map