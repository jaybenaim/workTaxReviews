(this.webpackJsonpworktaxreviews=this.webpackJsonpworktaxreviews||[]).push([[0],{41:function(e,t,a){e.exports={skipLink:"navbar_skipLink__3TdC_"}},56:function(e,t,a){e.exports=a(72)},61:function(e,t,a){},68:function(e,t,a){},70:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),o=a.n(l),c=a(17),i=(a(61),a(11)),s=a(41),d=a.n(s);var m=()=>r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:d.a.skipLink},r.a.createElement("a",{href:"#mainContent"},"Skip to Main Content")),r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-light border-bottom justify-content-between"},r.a.createElement(i.b,{className:"navbar-brand",to:"/"},"CERB TAX REVIEW HELPER"),r.a.createElement("div",{className:"navbar-nav"},r.a.createElement(i.b,{className:"nav-item nav-link active",to:"/"},"Home")))),u=a(20),E=a.n(u);const v=[{start:new Date(2020,2,15),end:new Date(2020,3,11),title:"Period 1",allDay:!1},{start:new Date(2020,3,12),end:new Date(2020,4,9),title:"Period 2",allDay:!1},{start:new Date(2020,4,10),end:new Date(2020,5,6),title:"Period 3",allDay:!1},{start:new Date(2020,5,7),end:new Date(2020,6,4),title:"Period 4",allDay:!1},{start:new Date(2020,6,5),end:new Date(2020,7,1),title:"Period 5",allDay:!1},{start:new Date(2020,7,2),end:new Date(2020,7,29),title:"Period 6",allDay:!1},{start:new Date(2020,7,30),end:new Date(2020,8,26),title:"Period 7",allDay:!1}];var h=a(38);a(67),a(68);const w=Object(h.b)(E.a);var p=()=>r.a.createElement("div",{className:"container",style:{height:"100%",width:"100%"}},r.a.createElement(h.a,{localizer:w,events:v.map((e,t)=>(e.end.setDate(e.end.getDate()+1),e)),startAccessor:"start",endAccessor:"end",style:{height:500},onSelectEvent:e=>{console.log(e)}})),g=a(23),f=a(74);var b=({date:e,dateSetBack:t,dateSelected:a})=>r.a.createElement("div",{className:"",style:{marginTop:"10px"}},a&&r.a.createElement(r.a.Fragment,null,r.a.createElement("strong",null,"If the client said they made less than $1000 since"," ",E()(t).format("MMMM Do YYYY")),r.a.createElement("div",null,"The client can claim the following periods: ",r.a.createElement("br",null)," ",v.map((a,n)=>{let r=[];return new Date(e)>=a.start||t>=a.start?!a.title.match(/[12]/)&&r.push(a.title):t<=v[0].start&&r.push("We do not cover that period at this time"),r}).map((e,t)=>e&&r.a.createElement("div",{className:"",key:t},r.a.createElement("strong",null,e))))));var D=e=>{const t=Object(n.useState)(new Date),a=Object(g.a)(t,2),l=a[0],o=a[1],c=Object(n.useState)(),i=Object(g.a)(c,2),s=i[0],d=i[1],m=Object(n.useState)(!1),u=Object(g.a)(m,2),v=u[0],h=u[1],w=Object(n.useState)(!1),p=Object(g.a)(w,2),D=p[0],k=p[1],y=Object(n.useState)(!0),j=Object(g.a)(y,2),O=(j[0],j[1]);Object(n.useEffect)(()=>{let e=new Date(l.setDate(l.getDate()-26));d(e)},[]);const C=e=>{o(e),h(!0),N(e),O(!0)},N=(e,t)=>{let a=new Date(e),n=t?14:28,r=a.setDate(a.getDate()-(n-2));d(new Date(r))},S=e=>{k(!D),N(l,!D)};return r.a.createElement("div",{className:"find-date-section",style:{padding:"4%"}},r.a.createElement("div",null,"Enter the date the client last worked"),r.a.createElement(f.a,null,r.a.createElement(f.a.Group,{controlId:"formBasicEmail"},r.a.createElement(f.a.Control,{label:"Date client last worked",type:"date",onChange:e=>C(e.target.value)})),r.a.createElement(f.a.Group,null,r.a.createElement(f.a.Check,{type:"radio",label:"First time applying",name:"radio",onChange:e=>S(e.target)}),r.a.createElement(f.a.Check,{type:"radio",label:"Client has previously applied for CERB",name:"radio",defaultChecked:!0,onChange:e=>S(e.target)}))),r.a.createElement("br",null),s&&r.a.createElement("div",null,"Ask client: Have you made less than $1000 since"," ",E()(s).format("MMMM Do YYYY")),l&&r.a.createElement(b,{date:l,dateSelected:v,dateSetBack:s}))};var k=()=>r.a.createElement("main",{id:"mainContent"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center mt-5 p-0"},r.a.createElement(p,null),r.a.createElement(D,null))));var y=()=>r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null),r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:k}),r.a.createElement(c.a,{exact:!0,path:"/calendar",component:p})));const j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=()=>{const t=e.installing;t.onstatechange=()=>{"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(e=>{console.error("Error during service worker registration:",e)})}a(70);var C=()=>r.a.createElement("div",{id:"notfound"},r.a.createElement("div",{className:"notfound"},r.a.createElement("div",{className:"notfound-404"},r.a.createElement("h1",null,"404")),r.a.createElement("h2",null,"Oops, The Page you are looking for can't be found!"),r.a.createElement(i.b,{to:"/"},r.a.createElement("span",{className:"arrow"}),"Return To Homepage")));class N extends r.a.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,t){}render(){return this.state.hasError?r.a.createElement(C,null):this.props.children}}var S=Object(c.f)(N),x=a(53),R=a(16),M=a(51);const P={};var T=Object(R.c)({errors:function(e=P,t){switch(t.type){case"GET_ERRORS":return t.payload;default:return e}}}),Y=a(52);const B=Object(Y.createLogger)(),L=[M.a,B];var W=Object(R.e)(T,{},Object(R.d)(Object(R.a)(...L)));a(71);o.a.render(r.a.createElement(x.a,{store:W},r.a.createElement(i.a,null,r.a.createElement(S,null,r.a.createElement(y,null)))),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/workTaxReviews",window.location).origin!==window.location.origin)return;window.addEventListener("load",()=>{const e="".concat("/workTaxReviews","/service-worker.js");j?function(e){fetch(e).then(t=>{404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):O(e)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(e):O(e)})}}()}},[[56,1,2]]]);
//# sourceMappingURL=main.d483bc55.chunk.js.map