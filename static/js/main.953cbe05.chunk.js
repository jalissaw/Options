(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){e.exports=n(20)},15:function(e,t,n){},16:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(6),l=n.n(r),c=(n(15),n(16),n(4)),s=n(1),i=n(21),u=Object(a.createContext)(),m=function(e){var t=Object(a.useState)(""),n=Object(s.a)(t,2),r=n[0],l=n[1],c=Object(a.useState)(0),m=Object(s.a)(c,2),f=m[0],p=m[1],d=Object(a.useState)(0),O=Object(s.a)(d,2),E=O[0],b=O[1],S=Object(a.useState)(0),h=Object(s.a)(S,2),g=h[0],j=h[1],k=Object(a.useState)([]),N=Object(s.a)(k,2),P=N[0],v=N[1],y=Object(a.useState)(Object(i.a)()),C=Object(s.a)(y,2),T=C[0],A=C[1],w=Object(a.useState)(0),x=Object(s.a)(w,2),F=x[0],L=x[1],z=Object(a.useState)(0),D=Object(s.a)(z,2),I=D[0],W=D[1],J=Object(a.useState)(0),M=Object(s.a)(J,2),$=M[0],R=M[1],Y=Object(a.useState)(0),q=Object(s.a)(Y,2),B=q[0],H=q[1],U=Object(a.useState)(P),G=Object(s.a)(U,2),K=G[0],Q=G[1],V=Object(a.useState)([]),X=Object(s.a)(V,2),Z=X[0],_=X[1],ee=Object(a.useState)([]),te=Object(s.a)(ee,2),ne=te[0],ae=te[1],oe=Object(a.useState)([]),re=Object(s.a)(oe,2),le=re[0],ce=re[1],se=Object(a.useState)([]),ie=Object(s.a)(se,2),ue=ie[0],me=ie[1],fe=Object(a.useState)(JSON.parse(localStorage.getItem("dark"))||!1),pe=Object(s.a)(fe,2),de={name:r,setName:l,price:f,setPrice:p,amountOfOptions:E,setAmountOfOptions:b,totalAmountSpent:g,setTotalAmountSpent:j,listOfOptions:P,setListOfOptions:v,id:T,setId:A,amountOfOptionsSold:F,setAmountOfOptionsSold:L,optionPriceSoldAt:I,setOptionPriceSoldAt:W,totalProfit:$,setTotalProfit:R,totalReturn:B,setTotalReturn:H,newTable:K,setNewTable:Q,winTrades:Z,setWinTrades:_,loseTrades:ne,setLoseTrades:ae,winPercents:le,setWinPercents:ce,losePercents:ue,setLosePercents:me,darkMode:pe[0],setDarkMode:pe[1]};return o.a.createElement(u.Provider,{value:de},e.children)};function f(e){var t=Object(a.useState)(!0),n=Object(s.a)(t,2),r=n[0],l=n[1],m=(new Date).toLocaleDateString(),f=Object(a.useContext)(u),p=f.name,d=f.setName,O=f.price,E=f.setPrice,b=f.amountOfOptions,S=f.id,h=f.setId,g=f.setAmountOfOptions,j=f.totalAmountSpent,k=f.setTotalAmountSpent,N=f.listOfOptions,P=f.setListOfOptions,v=f.amountOfOptionsSold,y=f.setAmountOfOptionsSold,C=f.optionPriceSoldAt,T=f.setOptionPriceSoldAt,A=f.totalProfit,w=f.setTotalProfit,x=f.darkMode,F=f.setDarkMode;!function(e){if(b<v)y(0)}();var L=function(e){return function(t){var n=t.target.value;return e(n)}},z=function(e){P([].concat(Object(c.a)(N),[e])),h(Object(i.a)())};Object(a.useEffect)((function(){var e=localStorage.getItem("options");if(!e)return null;P(JSON.parse(e))}),[]),Object(a.useEffect)((function(){localStorage.setItem("options",JSON.stringify(N))}),[N]),Object(a.useEffect)((function(){localStorage.setItem("dark",JSON.stringify(x))}),[x]),Object(a.useEffect)((function(){k(O*b*100),w(100*v*(C-O))}));var D=function(e){l(!r);var t=Object(c.a)(N);t.sort((function(t,n){return r?t[e]-n[e]:n[e]-t[e]})),P(t);var n=document.querySelectorAll(".fas");console.log(n),n.forEach((function(e){!0===r?e.classList.add("arrowup"):!1===r&&e.classList.remove("arrowup")}))};return o.a.createElement("div",{className:x?"dark-mode":null},o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),e.target.reset(),z({clock:m,name:p,price:O,amountOfOptions:b,totalAmountSpent:j,amountOfOptionsSold:v,optionPriceSoldAt:C,totalProfit:A,id:S})}},o.a.createElement("input",{type:"text",className:"input stockname",placeholder:"Enter Stock Symbol",onChange:L(d)}),o.a.createElement("input",{type:"text",className:"input stockprice",placeholder:"Enter Option Price",onChange:L(E)}),o.a.createElement("input",{type:"text",className:"input stockamount",placeholder:"Enter Number Of Option(s)",onChange:L(g)}),o.a.createElement("input",{type:"text",className:"input stockpricesold",placeholder:"Enter Option Price Sold",onChange:L(T)}),o.a.createElement("input",{type:"text",className:"input stockamountsold",placeholder:"Enter Number Of Option(s) Sold",onChange:L(y)}),o.a.createElement("button",{type:"submit",className:"btn"},"Submit")),o.a.createElement("div",{className:"toggle-darkMode"},o.a.createElement("span",{className:"toggle"},o.a.createElement("input",{type:"checkbox",checked:x,onChange:function(){return F((function(e){return!e}))},id:"checkbox",className:"checkbox"}),o.a.createElement("label",{htmlFor:"checkbox"})),o.a.createElement("i",{class:"fas fa-adjust"})),o.a.createElement("div",{className:"outputs"},o.a.createElement("table",null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null),o.a.createElement("th",{onClick:function(){return D("clock")}},"Date ",o.a.createElement("span",null,o.a.createElement("i",{onClick:function(){return D("clock")},className:"fas fa-sort-up"}))),o.a.createElement("th",{onClick:function(){return D("name")}},"Stock Name ",o.a.createElement("span",null,o.a.createElement("i",{onClick:function(){return D("name")},className:"fas fa-sort-up"}))),o.a.createElement("th",{onClick:function(){return D("price")}},"Price Of Option ",o.a.createElement("span",null,o.a.createElement("i",{onClick:function(){return D("price")},className:"fas fa-sort-up"}))),o.a.createElement("th",{onClick:function(){return D("amountOfOptions")}},"Number Of Options ",o.a.createElement("span",null,o.a.createElement("i",{onClick:function(){return D("amountOfOptions")},className:"fas fa-sort-up"}))),o.a.createElement("th",{onClick:function(){return D("totalAmountSpent")}},"Total Amount Spent ",o.a.createElement("span",null,o.a.createElement("i",{onClick:function(){return D("totalAmountSpent")},className:"fas fa-sort-up"}))),o.a.createElement("th",{onClick:function(){return D("optionPriceSoldAt")}},"Option Sold At ",o.a.createElement("span",null,o.a.createElement("i",{onClick:function(){return D("optionPriceSoldAt")},className:"fas fa-sort-up"}))),o.a.createElement("th",{onClick:function(){return D("amountOfOptionsSold")}},"Options Sold ",o.a.createElement("span",null,o.a.createElement("i",{onClick:function(){return D("amountOfOptionsSold")},className:"fas fa-sort-up"}))),o.a.createElement("th",{onClick:function(){return D("totalProfit")}},"Proft ",o.a.createElement("span",null,o.a.createElement("i",{onClick:function(){return D("totalProfit")},className:"fas fa-sort-up"}))))),N.map((function(e){return o.a.createElement("tbody",{key:Object(i.a)()},o.a.createElement("tr",null,o.a.createElement("td",{title:"delete",onClick:function(){return function(e){var t=N.filter((function(t){return t.id!==e}));P(t)}(e.id)}},o.a.createElement("span",{className:"delete"},"x")),o.a.createElement("td",null,e.clock),o.a.createElement("td",null,e.name.toUpperCase()),o.a.createElement("td",null,"$",e.price),o.a.createElement("td",null,e.amountOfOptions),o.a.createElement("td",null,"$",e.totalAmountSpent.toFixed(2)),o.a.createElement("td",null,"$",e.optionPriceSoldAt),o.a.createElement("td",null,e.amountOfOptionsSold),o.a.createElement("td",{style:{color:e.totalProfit>=0?"green":"red"}},"$",e.totalProfit.toFixed(2))))})))))}var p=function(){var e=Object(a.useContext)(u),t=e.listOfOptions,n=(e.setListOfOptions,e.totalReturn),r=e.setTotalReturn;e.newTable,e.setNewTable;Object(a.useEffect)((function(){r(function(){for(var e=[],n=0;n<t.length;n++)e.push(t[n].totalProfit);return e.reduce((function(e,t){return isNaN(e)||isNaN(t)?e:e+t}),0)}())}));return o.a.createElement("nav",{className:"navbar"},o.a.createElement("h1",{id:"gains"},"stock",o.a.createElement("span",null,"ER")),o.a.createElement("h2",{style:{color:n>=0?"green":"red"}},"$",n.toFixed(2)),o.a.createElement("ul",null,o.a.createElement("li",{onClick:function(){document.querySelector(".optionsummary").classList.toggle("transIn")},className:"tradingsummary"},"Trade Summary")))},d=n(7);function O(){var e=Object(a.useContext)(u),t=e.listOfOptions,n=e.winTrades,r=e.setWinTrades,l=e.loseTrades,c=e.setLoseTrades,s=e.winPercents,i=e.setWinPercents,m=e.losePercents,f=e.setLosePercents;return Object(a.useEffect)((function(){r(t.filter((function(e){return e.totalProfit>0}))),c(t.filter((function(e){return e.totalProfit<0})))}),[t]),Object(a.useEffect)((function(){i(n.length%t.length),f(l.length%t.length)})),o.a.createElement("div",{className:"optionsummary"},o.a.createElement(d.a,{width:"500px",height:"300px",chartType:"PieChart",loader:o.a.createElement("div",null,"Loading Chart"),data:[["Task","Hours per Day"],["Winning Trades",s],["Losing Trades",m]],options:{legend:{textStyle:{color:"white",fontSize:"12"}},titleTextStyle:{color:"white",fontSize:"20",fontName:"Fugaz One"},title:"Trade Summary",size:"2rem",backgroundColor:"transparent",colors:["rgb(52, 38, 175)","red"],fontFamily:"Fugaz One",is3D:!0},rootProps:{"data-testid":"1"}}),o.a.createElement("div",{className:"trades"},o.a.createElement("p",{className:"numtrades"},"You have made ",o.a.createElement("span",{style:{fontFamily:"Fugaz One",color:"rgb(52, 38, 175)"}},t.length)," trades"),o.a.createElement("p",{className:"numtrades"},"You have made ",o.a.createElement("span",{style:{color:"green",fontFamily:"Fugaz One"}}," ",n.length)," profitable trade(s)"),o.a.createElement("p",{className:"numtrades"},"You have made ",o.a.createElement("span",{style:{color:"red",fontFamily:"Fugaz One"}}," ",l.length)," losing trade(s)")))}var E=function(){return o.a.createElement(m,null,o.a.createElement("div",{className:"App"},o.a.createElement(p,null),o.a.createElement(f,null),o.a.createElement(O,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.953cbe05.chunk.js.map