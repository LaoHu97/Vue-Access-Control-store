webpackJsonp([20],{1739:function(n,e,t){var o=t("9uk0");"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);t("rjj0")("7b1e38b9",o,!0,{})},"9uk0":function(n,e,t){e=n.exports=t("FZ+f")(!1),e.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},"So/2":function(n,e,t){"use strict";function o(n){t("1739")}Object.defineProperty(e,"__esModule",{value:!0});var i=(t("yt7g"),t("Av7u")),a=t.n(i),r=t("S49b"),l={data:function(){var n=function(n,e,t){""===e?t():/^1(3|4|5|7|8)\d{9,10}$/.test(e)?t():t(new Error("请输入正确的联系人手机号"))};return{filters:{username:"",account:""},value:"",options:[],users:[],total:1,page:1,listLoading:!1,stateFormVisible:!1,stateLoading:!1,editFormVisible:!1,editLoading:!1,editFormCode:!1,editCode:{code:""},editFormVipCode:!1,editVipCode:{vipCode:""},showVipCode:!0,editForm:{},addFormVisible:!1,addLoading:!1,addFormRules:{username:[{required:!0,message:"请输入款台名称",trigger:"blur"},{max:20,message:"请输入正确的款台名称",trigger:"blur"}],phone:[{validator:n,trigger:"blur"}],email:[{message:"请输入邮箱",trigger:"blur"},{type:"email",message:"请输入正确的邮箱",trigger:"blur"}],value:[{required:!0,type:"number",message:"请选择款台",trigger:"change"}]},modFormVisible:!1,modLoading:!1,modFormRules:{username:[{required:!0,message:"请输入款台名称",trigger:"blur"},{max:20,message:"请输入正确的款台名称",trigger:"blur"}],phone:[{validator:n,trigger:"blur"}],email:[{message:"请输入邮箱",trigger:"blur"},{type:"email",message:"请输入正确的邮箱",trigger:"blur"}],value:[{required:!0,message:"请选择款台"}]},stateForm:{},modForm:{eid:"",username:"",phone:"",email:"",terminal_id:"",ali_operation_id:"",wsy_num:"",value:"",ndl_num:""},loading:!1,addForm:{value:"",username:"",ali_operation_id:"",phone:"",email:"",terminal_id:"",wsy_num:"",ndl_num:""}}},methods:{clickShop:function(){var n=this;Object(r._54)().then(function(e){var t=(e.status,e.data);n.options=t.storeList})},remoteShop:function(n){var e=this;""!==n?(this.loading=!0,setTimeout(function(){e.loading=!1,Object(r._54)({sname:n}).then(function(n){var t=(n.status,n.data);e.options=t.storeList})},200)):this.options=[]},empStatusChange:function(n,e){var t=this;this.$confirm("此操作将修改款台状态, 确定修改?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",closeOnClickModal:!1,type:"warning"}).then(function(){var n={eid:e.eid,status:1==e.status?1:0==e.status?0:"未知"};Object(r._66)(n).then(function(n){200==n.status?t.$message({type:"success",message:"修改成功!"}):t.$notify.error({title:"错误",message:message})})}).catch(function(){t.getUsers(),t.$message({type:"info",message:"取消输入"})})},handleCode:function(n,e){this.editFormCode=!0;var t={mid:e.mid,eid:e.eid,storeId:e.storeId};this.editCode.code=r.J+"?mid="+t.mid+"&eid="+t.eid+"&storeId="+t.storeId},code:function(){window.location.href=this.editCode.code},handleVipCode:function(n,e){this.editFormVipCode=!0;var t={mid:e.mid,eid:e.eid,storeId:e.storeId};this.editVipCode.vipCode=r.I+"?mid="+t.mid+"&eid="+t.eid+"&storeId="+t.storeId},vipCode:function(){window.location.href=this.editVipCode.vipCode},handleCurrentChange:function(n){this.page=n,this.getList()},getUsers:function(){this.page=1,this.getList()},getList:function(){var n=this,e={pageNum:this.page,username:this.filters.username,account:this.filters.account};this.listLoading=!0,Object(r._23)(e).then(function(e){var t=e.status;e.message;if(200==t){n.total=e.data.totalCount,n.users=e.data.employeeList;for(var o,i=0;i<n.users.length;i++)o=n.users[i],1==o.status?o.status=!0:o.status=!1}n.listLoading=!1})},handleReset:function(n,e){var t=this;this.$prompt("请输入新密码","提示",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/\S/,inputErrorMessage:"密码格式不正确",inputValue:"123456"}).then(function(n){var o=n.value,i={password:a.a.MD5(o+e.account).toString(a.a.enc.Hex),eid:e.eid};Object(r._65)(i).then(function(n){var e=n.status,o=n.message;200==e&&t.$notify({title:"成功",message:o,type:"success"})})}).catch(function(){t.$message({type:"info",message:"取消输入"})})},handleModify:function(n,e){var t=this;this.clickShop(),this.modFormVisible=!0;var o={eid:e.eid};Object(r._22)(o).then(function(n){var e=n.status;n.message;200===e&&(t.modForm.username=n.data.employee.username,t.modForm.phone=n.data.employee.phone,t.modForm.email=n.data.employee.email,t.modForm.terminal_id=n.data.employee.terminal_id,t.modForm.ali_operation_id=n.data.employee.ali_operation_id,t.modForm.wsy_num=n.data.employee.device_num,t.modForm.value=n.data.employee.storeId,t.modForm.ndl_num=n.data.ndl_num,t.modForm.eid=n.data.employee.eid)})},handleDetail:function(n,e){var t=this;this.editFormVisible=!0;var o={eid:e.eid};Object(r._22)(o).then(function(n){var e=n.status;n.message;200==e&&(t.editForm=n.data.employee,t.editForm.storeName=n.data.storeName)})},handleAdd:function(){this.addFormVisible=!0,this.addForm={value:"",storeId:"",username:"",ali_operation_id:"",phone:"",email:"",terminal_id:"",options:"",ndl_num:""}},editSubmit:function(){var n=this;this.$refs.editForm.validate(function(e){e&&n.$confirm("确认提交吗？","提示",{}).then(function(){n.editLoading=!0;var e={eid:n.modForm.eid,username:n.modForm.username,phone:n.modForm.phone,email:n.modForm.email,terminal_id:n.modForm.terminal_id,storeId:n.modForm.value,ali_operation_id:n.modForm.ali_operation_id,wsy_num:n.modForm.wsy_num,ndl_num:n.modForm.ndl_num};Object(r._64)(e).then(function(e){n.editLoading=!1;var t=e.status,o=e.message;200==t&&n.$message({message:o,type:"success"}),n.modFormVisible=!1,n.getUsers()})})})},addSubmit:function(){var n=this;this.$refs.addForm.validate(function(e){e&&n.$confirm("确认提交吗？","提示",{}).then(function(){n.addLoading=!0;var e={storeId:n.addForm.value,username:n.addForm.username,ali_operation_id:n.addForm.ali_operation_id,phone:n.addForm.phone,email:n.addForm.email,terminal_id:n.addForm.terminal_id,wsy_num:n.addForm.wsy_num,ndl_num:n.addForm.ndl_num};Object(r.b)(e).then(function(e){var t=e.message,o=e.status;n.addLoading=!1,200==o&&n.$notify({title:"成功",message:t,type:"success"}),n.$refs.addForm.resetFields(),n.addFormVisible=!1,n.getUsers()})})})}},mounted:function(){this.getUsers();var n=JSON.parse(sessionStorage.getItem("isMember"));"Y"==n?this.showVipCode=!0:"N"==n&&(this.showVipCode=!1)}},s=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",[t("el-row",[t("el-form",{attrs:{inline:!0,model:n.filters}},[t("el-form-item",{attrs:{label:"款台名称"}},[t("el-input",{staticClass:"fixed_search_input",attrs:{placeholder:"款台名称"},model:{value:n.filters.username,callback:function(e){n.$set(n.filters,"username",e)},expression:"filters.username"}})],1),n._v(" "),t("el-form-item",{attrs:{label:"款台帐号"}},[t("el-input",{staticClass:"fixed_search_input",attrs:{placeholder:"款台帐号"},model:{value:n.filters.account,callback:function(e){n.$set(n.filters,"account",e)},expression:"filters.account"}})],1),n._v(" "),t("el-form-item",{staticStyle:{float:"right"}},[t("el-button",{attrs:{type:"primary",round:""},on:{click:n.getUsers}},[n._v("查询")])],1)],1)],1),n._v(" "),t("div",{directives:[{name:"loading",rawName:"v-loading",value:n.listLoading,expression:"listLoading"}]},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:n.users,border:"","highlight-current-row":""}},[t("el-table-column",{attrs:{prop:"username",label:"款台名称","min-width":"120"}}),n._v(" "),t("el-table-column",{attrs:{prop:"account",label:"登录帐号","min-width":"120"}}),n._v(" "),t("el-table-column",{attrs:{label:"款台状态"},scopedSlots:n._u([{key:"default",fn:function(e){return[t("el-switch",{attrs:{name:"value"},on:{change:function(t){n.empStatusChange(e.$index,e.row)}},model:{value:e.row.status,callback:function(t){n.$set(e.row,"status",t)},expression:"scope.row.status"}})]}}])}),n._v(" "),t("el-table-column",{attrs:{label:"二维码",width:"100"},scopedSlots:n._u([{key:"default",fn:function(e){return[t("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(t){n.handleCode(e.$index,e.row)}}},[n._v("二维码")])]}}])}),n._v(" "),n.showVipCode?t("el-table-column",{attrs:{label:"会员支付二维码",width:"140"},scopedSlots:n._u([{key:"default",fn:function(e){return[t("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(t){n.handleVipCode(e.$index,e.row)}}},[n._v("会员支付二维码")])]}}])}):n._e(),n._v(" "),t("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:n._u([{key:"default",fn:function(e){return[t("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(t){n.handleReset(e.$index,e.row)}}},[n._v("密码重置")]),n._v(" "),t("el-button",{attrs:{type:"info",size:"mini"},on:{click:function(t){n.handleDetail(e.$index,e.row)}}},[n._v("详情")])]}}])})],1)],1),n._v(" "),t("el-row",[t("el-pagination",{staticStyle:{"text-align":"center",background:"#fff",padding:"15px"},attrs:{layout:"prev, pager, next","current-page":n.page,"page-size":20,total:n.total,background:""},on:{"current-change":n.handleCurrentChange}})],1),n._v(" "),t("el-dialog",{attrs:{title:"修改信息",visible:n.modFormVisible,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(e){n.modFormVisible=e}}},[t("el-form",{ref:"editForm",attrs:{model:n.modForm,rules:n.modFormRules}},[t("el-form-item",{attrs:{label:"款台名称",prop:"username"}},[t("el-input",{attrs:{"auto-complete":"off"},model:{value:n.modForm.username,callback:function(e){n.$set(n.modForm,"username",e)},expression:"modForm.username"}})],1),n._v(" "),t("el-form-item",{attrs:{label:"电话",prop:"phone"}},[t("el-input",{attrs:{"auto-complete":"off"},model:{value:n.modForm.phone,callback:function(e){n.$set(n.modForm,"phone",e)},expression:"modForm.phone"}})],1),n._v(" "),t("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[t("el-input",{model:{value:n.modForm.email,callback:function(e){n.$set(n.modForm,"email",e)},expression:"modForm.email"}})],1),n._v(" "),t("el-form-item",{attrs:{label:"富友终端ID",prop:"terminal_id"}},[t("el-input",{model:{value:n.modForm.terminal_id,callback:function(e){n.$set(n.modForm,"terminal_id",e)},expression:"modForm.terminal_id"}})],1),n._v(" "),t("el-form-item",{attrs:{label:"微收银设备号",prop:"wsy_num"}},[t("el-input",{model:{value:n.modForm.wsy_num,callback:function(e){n.$set(n.modForm,"wsy_num",e)},expression:"modForm.wsy_num"}})],1),n._v(" "),t("el-form-item",{attrs:{label:"新大陆设备号",prop:"ndl_num"}},[t("el-input",{model:{value:n.modForm.ndl_num,callback:function(e){n.$set(n.modForm,"ndl_num",e)},expression:"modForm.ndl_num"}})],1),n._v(" "),t("el-form-item",{attrs:{label:"选择门店"}},[[t("el-select",{attrs:{placeholder:"请选择门店名称",multiple:!1,filterable:"",remote:"","remote-method":n.remoteShop,loading:n.loading,clearable:""},on:{"visible-change":n.clickShop},model:{value:n.modForm.value,callback:function(e){n.$set(n.modForm,"value",e)},expression:"modForm.value"}},n._l(n.options,function(n){return t("el-option",{key:n.id,attrs:{value:n.id,label:n.value}})}))]],2)],1),n._v(" "),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{nativeOn:{click:function(e){n.modFormVisible=!1}}},[n._v("取消")]),n._v(" "),t("el-button",{attrs:{type:"primary",loading:n.modLoading},nativeOn:{click:function(e){return n.editSubmit(e)}}},[n._v("提交")])],1)],1),n._v(" "),t("el-dialog",{attrs:{visible:n.editFormCode,"close-on-click-modal":!0,width:"600px"},on:{"update:visible":function(e){n.editFormCode=e}}},[t("el-form",{ref:"editCode",staticStyle:{width:"auto"},attrs:{model:n.editCode,"label-width":""}},[t("img",{attrs:{src:n.editCode.code,alt:"二维码",width:"100%"}}),n._v(" "),t("el-button",{staticStyle:{position:"absolute",left:"50%","margin-left":"-44px","margin-top":"-20px"},attrs:{type:"primary"},on:{click:n.code}},[n._v("点击下载")])],1)],1),n._v(" "),t("el-dialog",{attrs:{visible:n.editFormVipCode,"close-on-click-modal":!0,width:"600px"},on:{"update:visible":function(e){n.editFormVipCode=e}}},[t("el-form",{ref:"editVipCode",staticStyle:{width:"auto"},attrs:{model:n.editVipCode,"label-width":""}},[t("img",{attrs:{src:n.editVipCode.vipCode,alt:"二维码",width:"100%"}}),n._v(" "),t("el-button",{staticStyle:{position:"absolute",left:"50%","margin-left":"-44px","margin-top":"-20px"},attrs:{type:"primary"},on:{click:n.vipCode}},[n._v("点击下载")])],1)],1),n._v(" "),t("el-dialog",{attrs:{title:"交易详情",visible:n.editFormVisible,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(e){n.editFormVisible=e}}},[t("el-form",{ref:"editForm",attrs:{model:n.editForm,"label-width":"140px","label-position":"left"}},[t("el-form-item",{attrs:{label:"款台名称："}},[t("span",[n._v(n._s(n.editForm.username))])]),n._v(" "),t("el-form-item",{attrs:{label:"款台帐号："}},[t("span",[n._v(n._s(n.editForm.account))])]),n._v(" "),t("el-form-item",{attrs:{label:"手机号："}},[t("span",[n._v(n._s(n.editForm.phone))])]),n._v(" "),t("el-form-item",{attrs:{label:"邮箱："}},[t("span",[n._v(n._s(n.editForm.email))])]),n._v(" "),t("el-form-item",{attrs:{label:"终端号："}},[t("span",[n._v(n._s(n.editForm.terminal_id))])]),n._v(" "),t("el-form-item",{attrs:{label:"所属门店："}},[t("span",[n._v(n._s(n.editForm.storeName))])]),n._v(" "),t("el-form-item",{attrs:{label:"万鼎终端："}},[t("span",[n._v(n._s(n.editForm.reverse1))])]),n._v(" "),t("el-form-item",{attrs:{label:"万鼎Token："}},[t("span",[n._v(n._s(n.editForm.etoken))])])],1)],1),n._v(" "),t("el-dialog",{attrs:{title:"新增款台",visible:n.addFormVisible,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(e){n.addFormVisible=e}}},[t("el-form",{ref:"addForm",attrs:{model:n.addForm,rules:n.addFormRules}},[t("el-form-item",{attrs:{label:"款台名称",prop:"username"}},[t("el-input",{attrs:{"auto-complete":"off"},model:{value:n.addForm.username,callback:function(e){n.$set(n.addForm,"username",e)},expression:"addForm.username"}})],1),n._v(" "),t("el-form-item",{attrs:{label:"电话",prop:"phone"}},[t("el-input",{attrs:{"auto-complete":"off"},model:{value:n.addForm.phone,callback:function(e){n.$set(n.addForm,"phone",e)},expression:"addForm.phone"}})],1),n._v(" "),t("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[t("el-input",{attrs:{"auto-complete":"off",value:"number"},model:{value:n.addForm.email,callback:function(e){n.$set(n.addForm,"email",e)},expression:"addForm.email"}})],1),n._v(" "),t("el-form-item",{attrs:{label:"富有终端ID",prop:"terminal_id"}},[t("el-input",{attrs:{"auto-complete":"off",value:"number"},model:{value:n.addForm.terminal_id,callback:function(e){n.$set(n.addForm,"terminal_id",e)},expression:"addForm.terminal_id"}})],1),n._v(" "),t("el-form-item",{attrs:{label:"微收银设备号",prop:"wsy_num"}},[t("el-input",{model:{value:n.addForm.wsy_num,callback:function(e){n.$set(n.addForm,"wsy_num",e)},expression:"addForm.wsy_num"}})],1),n._v(" "),t("el-form-item",{attrs:{label:"新大陆设备号",prop:"ndl_num"}},[t("el-input",{model:{value:n.addForm.ndl_num,callback:function(e){n.$set(n.addForm,"ndl_num",e)},expression:"addForm.ndl_num"}})],1),n._v(" "),t("el-form-item",{attrs:{label:"选择门店",prop:"value"}},[[t("el-select",{attrs:{placeholder:"请选择门店名称",multiple:!1,filterable:"",remote:"","remote-method":n.remoteShop,loading:n.loading,clearable:""},on:{"visible-change":n.clickShop},model:{value:n.addForm.value,callback:function(e){n.$set(n.addForm,"value",e)},expression:"addForm.value"}},n._l(n.options,function(n){return t("el-option",{key:n.id,attrs:{value:n.id,label:n.value}})}))]],2)],1),n._v(" "),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{nativeOn:{click:function(e){n.addFormVisible=!1}}},[n._v("取消")]),n._v(" "),t("el-button",{attrs:{type:"primary",loading:n.addLoading},nativeOn:{click:function(e){return n.addSubmit(e)}}},[n._v("提交")])],1)],1)],1)},d=[],m={render:s,staticRenderFns:d},u=m,c=t("VU/8"),p=o,f=c(l,u,!1,p,"data-v-9769e382",null);e.default=f.exports}});