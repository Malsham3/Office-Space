(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{107:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(28),c=t.n(l),o=t(8),u=t(11),i=(t(18),t(110)),s=t(46);var m=function(e){var a=e.title,t=e.tag;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{className:"header-Jumbotron",style:{backgroundColor:" rgb(3, 73, 94)",display:"flex",justifyContent:"space-between",alignItems:"center",height:"100px",marginBottom:"0px",padding:"0"}},r.a.createElement("div",{className:"header-head"},r.a.createElement("h1",{style:{fontWeight:"bold"}},a),r.a.createElement("p",{style:{fontSize:"17px"}},t,"."),r.a.createElement("img",{src:"%PUBLIC_URL%/images/redstapler.JPG"})),r.a.createElement("div",{className:"signout-anchor mr-3 "},r.a.createElement(s.a,{className:"signout-button",style:{backgroundColor:"#4C4646",color:"white"},href:"/signout",variant:"light"},"Sign Out"))))},d=t(34),E=t(66),p=t(14);var f=function(e){var a=e.name,t=e.jobTitle;return e.userPic,r.a.createElement(d.a,{className:"user-profile-card"},r.a.createElement(d.a.Img,{style:{margin:"20px auto",width:"90%",borderRadius:"5px"},className:"image-styles",variant:"top",src:"https://i.pinimg.com/564x/98/6d/39/986d39470fae3b16f0ae38b551267367.jpg"}),r.a.createElement(d.a.Body,null,r.a.createElement(d.a.Title,null,a),r.a.createElement(d.a.Text,null,t)),r.a.createElement(E.a,{className:"button-group",vertical:!0},r.a.createElement(s.a,{style:{backgroundColor:"rgb(3, 73, 94)"},className:"user-button",name:"task"},r.a.createElement(p.b,{className:"user-links",to:"/taskscomponents"},"Tasks")),r.a.createElement(s.a,{style:{backgroundColor:"rgb(3, 73, 94)"},className:"user-button",name:"leads"},r.a.createElement(p.b,{className:"user-links",to:"/leadcomponents"},"Leads")),r.a.createElement(s.a,{style:{backgroundColor:"rgb(3, 73, 94)"},className:"user-button",name:"calendar"},r.a.createElement(p.b,{className:"user-links",to:"/calendarcomponents"},"Calendar"))))};var b=function(){return r.a.createElement("footer",{className:"row footer-div py-2"},r.a.createElement("div",{className:"col-10"},r.a.createElement("span",{className:"text-muted"},"Made with",r.a.createElement("span",{role:"img","aria-label":"Heart Emoji"},"\u2665\ufe0f")," ","by Rick Smart, Danielle Cutler, Mostafa Alshammary.",r.a.createElement("br",null),"\xa9 ",(new Date).getFullYear())),r.a.createElement("div",{className:"col-2"},r.a.createElement("a",{href:"https://github.com/Malsham3/Office-Space",target:"_blank",className:"fa fa-github fa-2x mr-1",rel:"noopener noreferrer"})))},v=t(115),y=t(113),h=t(114),O=t(72),g=t(39),j=t(9),C=Object(n.createContext)(),_=C.Provider,A=function(e,a){switch(a.type){case"LOAD_TASKS":return Object(j.a)(Object(j.a)({},e),{},{notes:a.payload});case"UPDATE_NOTES":return Object(j.a)(Object(j.a)({},e),{},{notes:e.notes.map((function(e){return e._id!==a.payload._id}))});case"ADD_NOTE":return Object(j.a)(Object(j.a)({},e),{},{notes:[a.payload].concat(Object(g.a)(e.notes))});case"REMOVE_NOTE":return Object(j.a)(Object(j.a)({},e),{},{notes:e.notes.filter((function(e){return e._id!==a.payload._id}))});case"LOAD_LEADS":return Object(j.a)(Object(j.a)({},e),{},{leads:a.payload});case"ADD_LEAD":return Object(j.a)(Object(j.a)({},e),{},{leads:[a.payload].concat(Object(g.a)(e.leads))});case"UPDATE_LEAD":return Object(j.a)(Object(j.a)({},e),{},{leads:Object(g.a)(e.leads)});case"REMOVE_LEAD":return Object(j.a)(Object(j.a)({},e),{},{leads:e.leads.filter((function(e){return e._id!==a.payload._id}))});case"LOAD_DATES":return Object(j.a)(Object(j.a)({},e),{},{dates:a.payload});case"ADD_DATE":return Object(j.a)(Object(j.a)({},e),{},{dates:[a.payload].concat(Object(g.a)(e.dates))});case"UPDATE_DATE":return Object(j.a)(Object(j.a)({},e),{},{dates:e.dates.map((function(e){return e._id!==a.payload._id}))});case"REMOVE_DATE":return Object(j.a)(Object(j.a)({},e),{},{dates:e.dates.filter((function(e){return e._id!==a.payload._id}))});case"SELECTED_DATE":return Object(j.a)(Object(j.a)({},e),{},{selectedDate:a.payload});case"SET_USER":return console.log(e),Object(j.a)(Object(j.a)({},e),{},{user:a.payload});default:return e}},D=function(e){e.value;var a=Object(O.a)(e,["value"]),t=Object(n.useReducer)(A,{notes:[],leads:[],dates:[],selectedDate:"",user:""}),l=Object(o.a)(t,2),c=l[0],u=l[1];return r.a.createElement(_,Object.assign({value:[c,u]},a))},N=function(){return Object(n.useContext)(C)},S=t(17),w=t.n(S),k=function(){return w.a.get("/api/note")},T=function(e){return w.a.delete("/api/note/"+e)},x=function(e){return w.a.post("/api/note",e)},R=function(e,a){return w.a.put("/api/note/"+e,a)},I=function(){return w.a.get("/api/leads")},P=function(e){return w.a.delete("/api/leads/"+e)},G=function(e){return w.a.post("/api/leads",e)},L=function(e,a){return w.a.put("/api/leads/"+e,a)},F=function(){return w.a.get("/api/dates")},B=function(e){return w.a.delete("/api/dates/"+e)},H=function(e){return w.a.post("/api/dates",e)},U=function(e,a){return w.a.put("/api/dates/"+e,a)};var M=function(){var e=N(),a=Object(o.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(!1),u=Object(o.a)(c,2),i=u[0],m=u[1],d=Object(n.useRef)(""),E=Object(n.useRef)(""),p=function(){return m(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{style:{fontWeight:"bold"},className:"new-task-button",variant:"info",onClick:function(){return m(!0)}},"New Task"),r.a.createElement(y.a,{className:"task-modal",show:i,onHide:p},r.a.createElement(y.a.Header,{style:{fontWeight:"bold",color:"rgb(3, 73, 94)"},closeButton:!0},"Add a Task"),r.a.createElement(h.a,{className:"task-form"},r.a.createElement(h.a.Group,{controlId:"formGroupEmail"},r.a.createElement(h.a.Control,{type:"text",placeholder:"Title",ref:d,required:!0})),r.a.createElement(h.a.Group,{className:"task-body",controlId:"exampleForm.ControlTextarea1"},r.a.createElement(h.a.Control,{as:"textarea",rows:2,placeholder:"Body",ref:E,required:!0}))),r.a.createElement(y.a.Footer,null,r.a.createElement(s.a,{onClick:function(e){!function(e){e.preventDefault(),console.log(t),x({title:d.current.value,body:E.current.value,completed:!1}).then((function(e){l({type:"ADD_NOTE",payload:e.data})})).catch((function(e){return console.log(e)})),d.current.value="",E.current.value="",p()}(e)},variant:"info"},"Save"))))},W=t(33),q=t.n(W);var K=function(e){var a=e.tasks,t=N(),n=Object(o.a)(t,2),l=(n[0],n[1]),c={color:"black",fontSize:"20px",textDecoration:"red wavy line-through"};return r.a.createElement(r.a.Fragment,null,a.map((function(e){return r.a.createElement(v.a,{key:e._id},r.a.createElement(d.a,{id:e._id},r.a.createElement(d.a.Header,null,r.a.createElement(v.a.Toggle,{style:e.completed?c:{color:"black",fontSize:"20px"},className:"task-header",as:s.a,variant:"link",eventKey:"0"},e.title),r.a.createElement(s.a,{id:"complete-task",variant:"info",onClick:function(a){var t,n;t=e._id,(n=e).completed=!n.completed,R(t,n).then((function(e){var a=e.data;return l({type:"UPDATE_NOTES",payload:a})}))}},"Complete \u2713"),r.a.createElement(s.a,{id:"delete-task",variant:"danger",onClick:function(){!function(e){var a=document.getElementById(e).parentElement;console.log(a),a.classList.add("fall"),a.addEventListener("transitionend",(function(){T(e).then((function(e){var a=e.data;return l({type:"REMOVE_NOTE",payload:a})}))}))}(e._id)}},"X")),r.a.createElement(v.a.Collapse,{style:{fontSize:"17px",color:"rgb(36, 35, 35)"},eventKey:"0"},r.a.createElement(d.a.Body,null,r.a.createElement(d.a.Subtitle,{className:"text-muted mb-3"},"Date Created:"," ",r.a.createElement(q.a,{format:"ddd MM/DD/YY"},e.date)," at"," ",r.a.createElement(q.a,{format:"hh:mm a"},e.date)),e.body))))})))};var z=function(){var e=N(),a=Object(o.a)(e,2),t=a[0],l=a[1],c=t.notes;return Object(n.useEffect)((function(){k().then((function(e){var a=e.data;return l({type:"LOAD_TASKS",payload:a},[])})).catch((function(e){return console.log(e)}))})),r.a.createElement("div",{className:"componentHolder ml-2"},r.a.createElement("div",{style:{width:"100%"}},r.a.createElement(M,null),r.a.createElement(v.a,null,r.a.createElement(K,{tasks:c}))))};var V=function(){var e=N(),a=Object(o.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(!1),u=Object(o.a)(c,2),i=u[0],m=u[1],d=function(){return m(!1)},E=Object(n.useRef)(),p=Object(n.useRef)(),f=Object(n.useRef)(),b=Object(n.useRef)(),v=Object(n.useRef)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{style:{fontWeight:"bold"},className:"new-task-button",variant:"info",onClick:function(){return m(!0)}},"New Lead"),r.a.createElement(y.a,{className:"lead-modal",show:i,onHide:d},r.a.createElement(y.a.Header,{style:{fontWeight:"bold",color:"rgb(3, 73, 94)",fontFamily:"Courier New, Courier, monospace"},closeButton:!0},"Add a Lead"),r.a.createElement(h.a,{className:"lead-form"},r.a.createElement(h.a.Group,{controlId:"formGroupEmail"},r.a.createElement(h.a.Control,{type:"text",placeholder:"First Name",ref:E,required:!0})),r.a.createElement(h.a.Group,{controlId:"formGroupEmail"},r.a.createElement(h.a.Control,{type:"text",placeholder:"Last Name",ref:p,required:!0})),r.a.createElement(h.a.Group,{controlId:"formGroupEmail"},r.a.createElement(h.a.Control,{type:"email",placeholder:"Email address",ref:f,required:!0})),r.a.createElement(h.a.Group,{controlId:"formGroupEmail"},r.a.createElement(h.a.Control,{type:"text",placeholder:"Phone number",ref:b,required:!0})),r.a.createElement(h.a.Group,{controlId:"formGroupEmail"},r.a.createElement(h.a.Control,{type:"text",placeholder:"Image URL",ref:v,required:!0}))),r.a.createElement(y.a.Footer,null,r.a.createElement(s.a,{onClick:function(e){!function(e){e.preventDefault(),G({user:t.user,first:E.current.value,last:p.current.value,email:f.current.value,phone:b.current.value,image:v.current.value}).then((function(e){l({type:"ADD_LEAD",payload:e.data})})).catch((function(e){return console.log(e)})),E.current.value="",p.current.value="",f.current.value="",b.current.value="",v.current.value="",d()}(e)},variant:"info"},"Save"))))},Y=t(111);var J=function(e){var a=e.client,t=N(),l=Object(o.a)(t,2),c=l[0],u=l[1],i=Object(n.useState)(!1),m=Object(o.a)(i,2),d=m[0],E=m[1],f=Object(n.useRef)(),b=Object(n.useRef)(),v=Object(n.useRef)(),O=Object(n.useRef)(),g=Object(n.useRef)(),j=function(){return E(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.b,{onClick:function(){return E(!0)},style:{color:"navy",fontFamily:"Courier"}},"Edit Info"),r.a.createElement(y.a,{className:"lead-modal",show:d,onHide:j},r.a.createElement(y.a.Header,{style:{fontWeight:"bold",color:"rgb(3, 73, 94)",fontFamily:"Courier New, Courier, monospace"},closeButton:!0},"Edit ",a.first,"'s Information"),r.a.createElement(h.a,{className:"lead-form"},r.a.createElement(h.a.Group,{controlId:"formGroupEmail"},r.a.createElement(h.a.Control,{type:"text",placeholder:a.first,ref:f,required:!0})),r.a.createElement(h.a.Group,{controlId:"formGroupEmail"},r.a.createElement(h.a.Control,{type:"text",placeholder:a.last,ref:b,required:!0})),r.a.createElement(h.a.Group,{controlId:"formGroupEmail"},r.a.createElement(h.a.Control,{type:"email",placeholder:a.email,ref:v,required:!0})),r.a.createElement(h.a.Group,{controlId:"formGroupEmail"},r.a.createElement(h.a.Control,{type:"text",placeholder:a.phone,ref:O,required:!0})),r.a.createElement(h.a.Group,{controlId:"formGroupEmail"},r.a.createElement(h.a.Control,{type:"text",placeholder:"Enter new image URL",ref:g,required:!0}))),r.a.createElement(y.a.Footer,null,r.a.createElement(s.a,{onClick:function(e){var t,n;t=a._id,(n=a).first=f.current.value,n.last=b.current.value,n.email=v.current.value,n.phone=O.current.value,n.image=g.current.value,L(t,n).then((function(e){var a=e.data;return u({type:"UPDATE_LEAD",payload:a})})),console.log(c.leads),j()},variant:"info"},"Save"))))};var Q=function(e){var a=e.client,t=N(),l=Object(o.a)(t,2),c=(l[0],l[1]);return Object(n.useEffect)((function(){I().then((function(e){var a=e.data;return c({type:"LOAD_LEADS",payload:a})})).catch((function(e){return console.log(e)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("ul",{className:"col-10",style:{maxHeight:"50%",listStyle:"none"}},r.a.createElement("li",null,"Full name: ",a.first," ",a.last),r.a.createElement("br",null),r.a.createElement("li",null,"Email: ",r.a.createElement("a",{href:"mailto:"+a.email},a.email)),r.a.createElement("br",null),r.a.createElement("li",null,"Phone Number: ",a.phone)),r.a.createElement("div",{className:"col-2",style:{maxHeight:"50%"}},r.a.createElement(Y.a,{className:"profile-pic",src:a.image?a.image:null,thumbnail:!0}))),r.a.createElement(p.b,{onClick:function(){var e;e=a._id,P(e).then((function(e){var a=e.data;return c({type:"REMOVE_LEAD",payload:a})}))},style:{color:"red",fontFamily:"Courier"}},"Remove Client")," "," | "," ",r.a.createElement(J,{client:a}))};var X=function(e){var a=e.clients;return r.a.createElement(r.a.Fragment,null,a.map((function(e){return r.a.createElement(v.a,{key:e._id},r.a.createElement(d.a,null,r.a.createElement(d.a.Header,null,r.a.createElement(v.a.Toggle,{style:{color:"black",fontSize:"20px"},className:"client-header",id:e._id,as:s.a,variant:"link",eventKey:"0"},e.first," ",e.last)),r.a.createElement(v.a.Collapse,{style:{fontSize:"17px",color:" rgb(3, 73, 94)"},eventKey:"0"},r.a.createElement(d.a.Body,null,r.a.createElement(Q,{client:e})))))})))};var Z=function(){var e=N(),a=Object(o.a)(e,2),t=a[0],l=a[1],c=t.leads;return Object(n.useEffect)((function(){I().then((function(e){var a=e.data;return l({type:"LOAD_LEADS",payload:a})})).catch((function(e){return console.log(e)}))}),[]),r.a.createElement("div",{className:"componentHolder ml-2"},r.a.createElement("div",{style:{width:"100%"}},r.a.createElement(V,null),r.a.createElement(v.a,null,r.a.createElement(X,{clients:c}))))};var $=function(){var e=N(),a=Object(o.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(!1),u=Object(o.a)(c,2),i=u[0],m=u[1],d=function(){return m(!1)},E=Object(n.useRef)(),p=Object(n.useRef)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{style:{fontWeight:"bold"},className:"new-task-button",variant:"info",onClick:function(){return m(!0)}},"New Activity"),r.a.createElement(y.a,{className:"activity-modal",show:i,onHide:d},r.a.createElement(y.a.Header,{style:{fontWeight:"bold",color:"rgb(3, 73, 94)",fontFamily:"Courier New, Courier, monospace"},closeButton:!0},"Add an Activity"),r.a.createElement(h.a,{className:"activity-form"},r.a.createElement(h.a.Group,{controlId:"formGroupTitle"},r.a.createElement(h.a.Control,{type:"text-box",placeholder:"Title",ref:p,required:!0})),r.a.createElement(h.a.Group,{controlId:"ControlTextarea1",className:"activity-body"},r.a.createElement(h.a.Label,null,"Activity"),r.a.createElement(h.a.Control,{as:"textarea",rows:3,ref:E,required:!0}))),r.a.createElement(y.a.Footer,null,r.a.createElement(s.a,{onClick:function(e){!function(e){e.preventDefault(),H({user:t.user,date:t.selectedDate,title:p.current.value,activity:E.current.value,dateCreated:Date.now()}).then((function(e){l({type:"ADD_DATE",payload:e.data})})).catch((function(e){return console.log(e)})),E.current.value="",d()}(e)},variant:"info"},"Save"))))};var ee=function(e){var a=e.date,t=N(),l=Object(o.a)(t,2),c=l[0],u=l[1],i=Object(n.useState)(!1),m=Object(o.a)(i,2),d=m[0],E=m[1],f=Object(n.useRef)(),b=Object(n.useRef)(),v=function(){return E(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.b,{onClick:function(){return E(!0)},style:{color:"navy",fontFamily:"Courier"}},"Edit"),r.a.createElement(y.a,{className:"lead-modal",show:d,onHide:v},r.a.createElement(y.a.Header,{style:{fontWeight:"bold",color:"rgb(3, 73, 94)",fontFamily:"Courier New, Courier, monospace"},closeButton:!0},"Edit Activity"),r.a.createElement(h.a,{className:"lead-form"},r.a.createElement(h.a.Group,{controlId:"formGroupEmail"},r.a.createElement(h.a.Control,{type:"text",placeholder:a.title,ref:f,required:!0})),r.a.createElement(h.a.Group,{controlId:"formGroupEmail"},r.a.createElement(h.a.Control,{as:"textarea",rows:3,ref:b,required:!0}))),r.a.createElement(y.a.Footer,null,r.a.createElement(s.a,{onClick:function(e){var t,n;t=a._id,(n=a).title=f.current.value,n.activity=b.current.value,U(t,n).then((function(e){var a=e.data;return u({type:"UPDATE_DATE",payload:a})})),console.log(c.dates),v()},variant:"info"},"Save"))))};var ae=function(e){var a=e.dates,t=N(),n=Object(o.a)(t,2),l=(n[0],n[1]);return r.a.createElement(r.a.Fragment,null,a.map((function(e){return r.a.createElement(v.a,{key:e._id},r.a.createElement(d.a,null,r.a.createElement(d.a.Header,null,r.a.createElement(v.a.Toggle,{style:{color:"black",fontSize:"20px"},className:"date-header",id:e._id,as:s.a,variant:"link",eventKey:"0"},e.title)),r.a.createElement(v.a.Collapse,{style:{fontSize:"17px",color:"rgb(3, 73, 94)"},eventKey:"0"},r.a.createElement(d.a.Body,null,r.a.createElement(d.a.Subtitle,{className:"text-muted mb-4"},"Date Created:"," ",r.a.createElement(q.a,{format:"ddd MM/DD/YY"},e.dateCreated)," at"," ",r.a.createElement(q.a,{format:"hh:mm a"},e.dateCreated)),r.a.createElement(d.a.Text,null,e.activity),r.a.createElement(p.b,{onClick:function(){var a;a=e._id,B(a).then((function(e){var a=e.data;return l({type:"REMOVE_DATE",payload:a})}))},style:{color:"red"}},"Delete")," "," | "," ",r.a.createElement(ee,{date:e})))))})))},te=t(71);t(102);var ne=function(){var e=N(),a=Object(o.a)(e,2),t=(a[0],a[1]),l=Object(n.useState)(new Date),c=Object(o.a)(l,2),u=c[0],i=c[1];return Object(n.useEffect)((function(){t({type:"SELECTED_DATE",payload:u.toDateString()})}),[u]),r.a.createElement("div",{className:"componentHolder ml-2"},r.a.createElement("div",{style:{width:"100%"}},r.a.createElement(te.a,{onChange:function(e){i(e)},value:u})))};var re=function(){var e=N(),a=Object(o.a)(e,2),t=a[0],l=a[1],c=t.dates;return Object(n.useEffect)((function(){F().then((function(e){var a=e.data;return l({type:"LOAD_DATES",payload:a},[])})).catch((function(e){return console.log(e)}))})),r.a.createElement("div",{className:"componentHolder ml-2"},r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("div",{style:{width:"39vw"}},r.a.createElement($,null),r.a.createElement(v.a,null,r.a.createElement(ae,{dates:c}))),r.a.createElement("div",{style:{float:"right"}},r.a.createElement(ne,null))))};var le=function(){return r.a.createElement(p.a,null,r.a.createElement("div",{id:"wrapper"},r.a.createElement(m,{title:"Office Space",tag:"I'll burn the building down"}),r.a.createElement("div",{className:"main-display-row"},r.a.createElement(f,null),r.a.createElement(u.b,{path:"/taskscomponents",component:z}),r.a.createElement(u.b,{path:"/leadcomponents",component:Z}),r.a.createElement(u.b,{path:"/calendarcomponents",component:re})),r.a.createElement(b,null)))},ce=t(70),oe=(t(108),t(103),{apiKey:"AIzaSyBuEaQc-VFFdNlVWeBhNFDr8evyef2chmY",authDomain:"office-space-crm.firebaseapp.com",databaseURL:"https://office-space-crm-default-rtdb.firebaseio.com",projectId:"office-space-crm",storageBucket:"office-space-crm.appspot.com",messagingSenderId:"238325863839",appId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_KEY:"AIzaSyBuEaQc-VFFdNlVWeBhNFDr8evyef2chmY",REACT_APP_APP_ID:"1:238325863839:web:3527c22b85b7f450c059aa",REACT_APP_AUTH_DOMAIN:"office-space-crm.firebaseapp.com",REACT_APP_DATABASE_URL:"https://office-space-crm-default-rtdb.firebaseio.com",REACT_APP_MEASUREMENT_ID:"G-F70GJBLHL4",REACT_APP_MESSAGING_SENDER_ID:"238325863839",REACT_APP_PROJECT_ID:"office-space-crm",REACT_APP_STORAGE_BUCKET:"office-space-crm.appspot.com"}).REACT_APP__APP_ID,measurementId:"G-F70GJBLHL4"}),ue=ce.a.initializeApp(oe);function ie(){return ue.auth()}ue.firestore();var se=function(){var e=N(),a=Object(o.a)(e,2),t=(a[0],a[1]),l=Object(n.useState)(!1),c=Object(o.a)(l,2),i=c[0],s=c[1];return Object(n.useEffect)((function(){t({type:"SET_USER",payload:""})}),[i]),Object(n.useEffect)((function(){ie().signOut().then((function(){s(!0)}))}),[]),i?r.a.createElement(u.a,{to:"/"}):r.a.createElement("h1",null,'"Signing you out.."')},me=t(38),de=t.n(me),Ee=t(42),pe=t(54),fe=t(112),be=t(69);var ve=function(){var e=N(),a=Object(o.a)(e,2),t=(a[0],a[1],Object(n.useState)({email:"",password:""})),l=Object(o.a)(t,2),c=l[0],u=l[1],i=Object(n.useState)(!1),m=Object(o.a)(i,2),E=m[0],p=m[1],f=Object(n.useState)(!1),b=Object(o.a)(f,2),v=(b[0],b[1],Object(n.useState)("")),y=Object(o.a)(v,2),O=y[0],g=y[1];function C(){return(C=Object(pe.a)(de.a.mark((function e(a){var t;return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,ie().signInWithEmailAndPassword(c.email,c.password);case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),t=e.t0.message,g(t);case 10:case"end":return e.stop()}}),e,null,[[1,6]])})))).apply(this,arguments)}function _(e){return A.apply(this,arguments)}function A(){return(A=Object(pe.a)(de.a.mark((function e(a){var t;return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,ie().createUserWithEmailAndPassword(c.email,c.password);case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),t=e.t0.message,g(t);case 10:case"end":return e.stop()}}),e,null,[[1,6]])})))).apply(this,arguments)}function D(e){var a=e.target,t=a.name,n=a.value;u(Object(j.a)(Object(j.a)({},c),{},Object(Ee.a)({},t,n)))}return E?r.a.createElement(fe.a,{className:"signup-container"},r.a.createElement(d.a,{style:{borderRadius:"15px",boxShadow:"0 0 10px whitesmoke",background:"whitesmoke"},className:"signup-card"},r.a.createElement(h.a,{onSubmit:_,className:"signup-form"},r.a.createElement(h.a.Row,null,r.a.createElement(h.a.Group,{as:be.a,controlId:"formGridEmail"},r.a.createElement(h.a.Label,null,"Enter your Email"),r.a.createElement(h.a.Control,{type:"email",name:"email",placeholder:"Email",value:c.email,onChange:D}))),r.a.createElement(h.a.Row,null,r.a.createElement(h.a.Group,{as:be.a,controlId:"formGridPassword"},r.a.createElement(h.a.Label,null,"Choose a Password"),r.a.createElement(h.a.Control,{name:"password",type:"password",placeholder:"Password",value:c.password,onChange:D}))),r.a.createElement(h.a.Row,null,r.a.createElement(s.a,{className:"create-button",style:{backgroundColor:"rgb(3, 73, 94)"},type:"submit",onClick:_},"Create account")),r.a.createElement(h.a.Row,null,r.a.createElement(s.a,{className:"signup-buttons",style:{float:"right",backgroundColor:"rgb(3, 73, 94)"},type:"submit",onClick:function(){p(!1)}},"Already Have an Account?"))))):r.a.createElement(fe.a,{className:"login-container"},r.a.createElement(d.a,{style:{borderRadius:"15px",boxShadow:"0 0 10px whitesmoke",background:"whitesmoke"},className:"login-card"},O,r.a.createElement(h.a,{className:"login-form"},r.a.createElement(h.a.Group,{controlId:"formBasicEmail"},r.a.createElement(h.a.Label,null,"Email address"),r.a.createElement(h.a.Control,{type:"email",name:"email",placeholder:"Enter your email",value:c.email,onChange:D}),r.a.createElement(h.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),r.a.createElement(h.a.Group,{controlId:"formBasicPassword"},r.a.createElement(h.a.Label,null,"Password"),r.a.createElement(h.a.Control,{type:"password",name:"password",placeholder:"Enter your password",value:c.password,onChange:D})),r.a.createElement(s.a,{style:{backgroundColor:"rgb(3, 73, 94)"},type:"submit",onClick:function(e){return C.apply(this,arguments)}},"Log In"),r.a.createElement(s.a,{style:{float:"right",backgroundColor:"rgb(3, 73, 94)"},type:"submit",onClick:function(){p(!0)}},"Sign Up"))))};var ye=function(){return r.a.createElement("div",{style:{position:"relative",height:"100%"}},r.a.createElement(m,{title:"Office Space",tag:"I'll burn the building down"}),r.a.createElement(ve,null),r.a.createElement("div",{style:{position:"fixed",bottom:"0"}},r.a.createElement(b,null)))};var he=function(){var e=N(),a=Object(o.a)(e,2),t=(a[0],a[1]),l=Object(n.useState)(),c=Object(o.a)(l,2),i=c[0],s=c[1];return ie().onAuthStateChanged((function(e){s(e?e.email:"")})),Object(n.useEffect)((function(){t({type:"SET_USER",payload:i})}),[i]),i?r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/",component:le}),r.a.createElement(u.b,{exact:!0,path:"/signout",component:se})):r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/",component:ye}),r.a.createElement(u.b,{exact:!0,path:"/signout",component:se}))};t(106);c.a.render(r.a.createElement(p.a,null,r.a.createElement(D,null,r.a.createElement(he,null))),document.getElementById("root"))},18:function(e,a,t){},73:function(e,a,t){e.exports=t(107)}},[[73,1,2]]]);
//# sourceMappingURL=main.51b24828.chunk.js.map