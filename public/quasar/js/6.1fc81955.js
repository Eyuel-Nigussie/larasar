(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"2ff9":function(a,e,t){"use strict";t.r(e);var s=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("q-page",{staticClass:"q-pa-md flex-center"},[t("q-uploader",{staticStyle:{"max-width":"300px"},attrs:{url:"http://localhost:8080/upload"}}),t("q-form",{staticClass:"q-gutter-md"},[t("q-input",{attrs:{filled:"",label:a.$t("name"),hint:a.name_data,"lazy-rules":"",rules:[function(e){return e&&e.length>0||a.name_data}]},model:{value:a.name,callback:function(e){a.name=e},expression:"name"}}),t("q-input",{attrs:{filled:"",label:a.$t("email"),type:"email",hint:a.email_data,"lazy-rules":"",rules:[function(e){return e&&e.length>0||a.email_data}]},model:{value:a.email,callback:function(e){a.email=e},expression:"email"}}),t("q-input",{attrs:{filled:"",label:a.$t("password"),type:"password",hint:a.password_data,"lazy-rules":"",rules:[function(e){return e&&e.length>0||a.password_data}]},model:{value:a.password,callback:function(e){a.password=e},expression:"password"}}),t("q-input",{attrs:{filled:"",type:a.isPwd?"password":"text",label:a.$t("confirm_password")},scopedSlots:a._u([{key:"append",fn:function(){return[t("q-icon",{staticClass:"cursor-pointer",attrs:{name:a.isPwd?"visibility_off":"visibility"},on:{click:function(e){a.isPwd=!a.isPwd}}})]},proxy:!0}]),model:{value:a.password_confirmation,callback:function(e){a.password_confirmation=e},expression:"password_confirmation"}}),t("div",[t("q-btn",{attrs:{color:"primary",label:a.$t("update")},on:{click:function(e){return e.preventDefault(),a.update(e)}}})],1)],1)],1)},n=[],l=(t("7f7f"),{name:"updatePage",meta:function(){return{name:null,name_data:null,email:null,email_data:null,password:null,password_data:null,password_confirmation:null,isPwd:!0}},methods:{update:function(){var a=this;this.$store.dispatch("users/updateAction",{name:this.name,email:this.email,password:this.password,password_confirmation:this.password_confirmation,role:"User",user:"update",scope:""}).catch((function(e){a.name_data=[e.response.data.errors.name][0]||e.response.data.message,a.email_data=[e.response.data.errors.email][0]||e.response.data.message,a.password_data=[e.response.data.errors.password][0]||e.response.data.message}))}}}),r=l,o=t("2877"),i=t("eebe"),d=t.n(i),p=t("9989"),u=t("ee89"),c=t("0378"),m=t("27f9"),f=t("0016"),w=t("9c40"),_=Object(o["a"])(r,s,n,!1,null,null,null);e["default"]=_.exports;d()(_,"components",{QPage:p["a"],QUploader:u["a"],QForm:c["a"],QInput:m["a"],QIcon:f["a"],QBtn:w["a"]})}}]);