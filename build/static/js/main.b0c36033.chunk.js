(this.webpackJsonpmaterialui=this.webpackJsonpmaterialui||[]).push([[0],{110:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),c=a.n(r),l=(a(86),a(87),a(23)),i=a(145),m=a(148),u=a(153),s=a(150),d=a(115),p=a(151),g=a(50),b=a(159),E=a(51),f=a.n(E);f.a.initializeApp({apiKey:"AIzaSyBc5Lk2SC08FoMgbR0fNg3xxCY1qRX_i9Q",authDomain:"moodlog-9c083.firebaseapp.com",databaseURL:"https://moodlog-9c083.firebaseio.com",projectId:"moodlog-9c083",storageBucket:"moodlog-9c083.appspot.com",messagingSenderId:"87404538407",appId:"1:87404538407:web:bb1ef0b23621ce2dbefc02"});var h=f.a,y=h.firestore(),v=Object(i.a)({root:{minWidth:400,minHeight:350},title:{fontSize:14,color:"black"},buttongroup:{margin:12},submit:{display:"flex",justifyContent:"center"}});function w(){var e=v(),t=Object(n.useState)(-1),a=Object(l.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(""),E=Object(l.a)(i,2),f=E[0],h=E[1],w=function(e){c(e),console.log(e)};return o.a.createElement(m.a,{className:e.root},o.a.createElement(s.a,null,o.a.createElement(g.a,{className:e.title,color:"textSecondary",gutterBottom:!0},"Today's Mood"),o.a.createElement(p.a,{variant:"contained",color:"primary","aria-label":"contained primary button group",className:e.buttongroup},o.a.createElement(d.a,{color:0===r?"secondary":"primary",onClick:function(){return w(0)}},"Good"),o.a.createElement(d.a,{color:1===r?"secondary":"primary",onClick:function(){return w(1)}},"Soso"),o.a.createElement(d.a,{color:2===r?"secondary":"primary",onClick:function(){return w(2)}},"Angry")),o.a.createElement(g.a,{className:e.title,color:"textSecondary",gutterBottom:!0},"Description"),o.a.createElement(b.a,{id:"outlined-multiline-static",label:"Text",multiline:!0,rows:4,placeholder:"Write Here",variant:"outlined",value:f,onChange:function(e){return h(e.target.value)}})),o.a.createElement(u.a,{className:e.submit},o.a.createElement(d.a,{variant:"contained",color:"primary",onClick:function(){-1===r?alert("Select mood!"):y.collection("mood").add({mood:r,description:f,timestamp:Date.now()}).then((function(e){console.log("Document written with ID: ",e.id),alert("added to database")})).catch((function(e){console.error("Error adding document: ",e)}))}},"Submit")))}a(107);var S=a(154),k=a(156),j=a(65),x=a(155),O=a(160),C=a(61),D=a.n(C),N=a(60),B=a.n(N),W=a(62),I=a.n(W),z=h.firestore(),L=[],A=Object(i.a)((function(e){return{root:{width:"100%",height:400,minwidth:400,maxWidth:300,marginLeft:0,backgroundColor:e.palette.background.paper}}}));function R(e){e.data;var t=e.index,a=e.style;return t<L.length?0==L[t].mood?o.a.createElement(S.a,{button:!0,style:a,key:t},o.a.createElement(x.a,null,o.a.createElement(O.a,null,o.a.createElement(B.a,null))),o.a.createElement(k.a,{primary:L[t].description,secondary:new Date(L[t].timestamp).toDateString()})):1==L[t].mood?o.a.createElement(S.a,{button:!0,style:a,key:t},o.a.createElement(x.a,null,o.a.createElement(O.a,null,o.a.createElement(D.a,null))),o.a.createElement(k.a,{primary:L[t].description,secondary:new Date(L[t].timestamp).toDateString()})):o.a.createElement(S.a,{button:!0,style:a,key:t},o.a.createElement(x.a,null,o.a.createElement(O.a,null,o.a.createElement(I.a,null))),o.a.createElement(k.a,{primary:L[t].description,secondary:new Date(L[t].timestamp).toDateString()})):o.a.createElement(o.a.Fragment,null)}function H(){var e=Object(n.useState)(),t=Object(l.a)(e,2),a=(t[0],t[1]),r=A();return Object(n.useEffect)((function(){z.collection("mood").orderBy("timestamp","desc").limit(30).get().then((function(e){e.forEach((function(e){console.log(e.id," // ",e.data());var t={id:e.id,timestamp:e.data().timestamp,mood:e.data().mood,description:e.data().description};L.push(t)})),a(1)}))}),[]),0===L.length?o.a.createElement("h5",null,"Returning data..."):o.a.createElement("div",{className:r.root},o.a.createElement(j.a,{height:400,width:300,itemSize:80,itemCount:L.length},R))}a(152),a(63),a(40),a(64),Object(i.a)((function(e){return{root:{maxheight:400,width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper}}}));var M=Object(i.a)({root:{minWidth:400,minHeight:280},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14,color:"black"},pos:{marginBottom:12},buttongroup:{margin:12},submit:{display:"flex",justifyContent:"center"},content:{display:"flex",justifyContent:"center"}});function T(){var e=Object(n.useState)(new Date),t=Object(l.a)(e,2),a=(t[0],t[1],M());return o.a.createElement(m.a,{className:a.root},o.a.createElement(s.a,{className:a.content},o.a.createElement(H,null)))}var F=a(157),J=a(158),q=a(39),G=Object(i.a)({root:{width:400,marginTop:10}});function K(){var e=G(),t=o.a.useState(0),a=Object(l.a)(t,2),n=a[0],r=a[1];return o.a.createElement(F.a,{value:n,onChange:function(e,t){r(t)},showLabels:!0,className:e.root},o.a.createElement(J.a,{component:q.b,to:"/",label:"Log"}),o.a.createElement(J.a,{component:q.b,to:"/stat",label:"Stats"}))}var Q=a(12);var U=(new Date).toDateString();var X=function(){return o.a.createElement(q.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("h3",null,U),o.a.createElement(Q.c,null,o.a.createElement(Q.a,{path:"/",exact:!0,component:w}),o.a.createElement(Q.a,{path:"/stat",exact:!0,component:T})),o.a.createElement(K,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},81:function(e,t,a){e.exports=a(110)},86:function(e,t,a){},87:function(e,t,a){}},[[81,1,2]]]);
//# sourceMappingURL=main.b0c36033.chunk.js.map