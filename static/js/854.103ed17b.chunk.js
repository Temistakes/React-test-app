"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[854],{854:(s,e,a)=>{a.r(e),a.d(e,{default:()=>p});var i=a(762),l=a(986);a(43);const g={dialogs:"Dialogs_dialogs__kwshW",dialogs__items:"Dialogs_dialogs__items__OpXDj",dialogs__list:"Dialogs_dialogs__list__3DgNN","dialogs__list-item":"Dialogs_dialogs__list-item__l4p+M","dialogs__list-item-img":"Dialogs_dialogs__list-item-img__ss62e",dialog:"Dialogs_dialog__ts3qe",dialog__messages:"Dialogs_dialog__messages__lh2wI",message:"Dialogs_message__zglyt",message_me:"Dialogs_message_me__7wJc+",message__text:"Dialogs_message__text__T8L+g",dialog__form:"Dialogs_dialog__form__kwego",dialog__input:"Dialogs_dialog__input__TyDHN","dialog__send-btn":"Dialogs_dialog__send-btn__LLxoz"};var _=a(250),t=a(579);const d=function(s){let{url:e,id:a,name:i}=s;return(0,t.jsxs)("li",{className:g["dialogs__list-item"],children:[(0,t.jsx)("img",{src:e,class:g["dialogs__list-item-img"],alt:""}),(0,t.jsx)(_.k2,{to:"/dialogs/".concat(a,"/"),children:i})]})};const o=function(s){return(0,t.jsx)("div",{className:"".concat(g.message," ").concat(s.isMe?g.message_me:""),children:(0,t.jsx)("p",{className:g.message__text,children:s.text})})};var m=a(892),n=a(899);const c=["addMessage"],r=["dialogs","messages","addMessage"];function u(s){let{addMessage:e}=s,a=((0,l.A)(s,c),n.Ik().shape({message:n.Yj().required("\u0414\u0430\u043d\u043d\u043e\u0435 \u043f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e")}));return(0,t.jsx)(m.l1,{initialValues:{message:""},onSubmit:s=>{e(s.message)},validationSchema:a,children:s=>{let{errors:e,touched:a,values:i}=s;return(0,t.jsxs)(m.lV,{className:g.dialog__form,children:[(0,t.jsx)(m.D0,{type:"text",className:g.dialog__input,placeholder:"Message",value:i.message,name:"message"}),e.message&&a.message?(0,t.jsx)("p",{className:g.error,children:e.message}):"",(0,t.jsx)("button",{type:"submit",className:g["dialog__send-btn"],children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})}})}const x=function(s){let{dialogs:e,messages:a,addMessage:i}=s,_=((0,l.A)(s,r),e.map((s=>(0,t.jsx)(d,{id:s.id,name:s.name,url:s.url},s.id)))),m=a.map((s=>(0,t.jsx)(o,{text:s.text,isMe:s.isMe},s.id)));return(0,t.jsxs)("section",{className:g.dialogs,children:[(0,t.jsx)("div",{className:g.dialogs__items,children:(0,t.jsx)("ul",{className:g.dialogs__list,children:_})}),(0,t.jsxs)("div",{className:g.dialog,children:[(0,t.jsx)("div",{className:g.dialog__messages,children:m}),(0,t.jsx)(u,{addMessage:i})]})]})};var h=a(3),j=a(789);const p=(0,a(923).Zz)((0,h.Ng)((s=>({dialogs:s.dialogsPage.dialogs,messages:s.dialogsPage.messages,input:s.dialogsPage.input})),{addMessage:i.t}),j.A)(x)},789:(s,e,a)=>{a.d(e,{A:()=>d});var i=a(379),l=(a(43),a(3)),g=a(250),_=a(579);let t=s=>({isAuth:s.auth.isAuth});const d=s=>(0,l.Ng)(t)((e=>e.isAuth?(0,_.jsx)(s,(0,i.A)({},e)):(0,_.jsx)(g.C5,{to:"/login/"})))}}]);
//# sourceMappingURL=854.103ed17b.chunk.js.map