(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(3),a=n.n(c),s=n(4),i=n(5),b=n(8),o=n(7),r=n(1),l=n.n(r),d=(n(13),n(14),n(0)),u=function(t){var e=t.tabs,n=t.selectedTabId,c=t.onTabSelected;return Object(d.jsx)("nav",{children:e.map((function(t){return Object(d.jsx)("button",{disabled:t.id===n,className:t.id===n?"tab--selected":"tab",type:"button",onClick:function(){return c(t)},children:t.title})}))})},j=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],h=function(t){Object(b.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={selectedTab:j[0]},t.onTabSelected=function(e){t.setState({selectedTab:e})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state.selectedTab;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{className:"App__title",children:"Selected tab is: ".concat(t.title)}),Object(d.jsxs)("section",{className:"container",children:[Object(d.jsx)(u,{tabs:j,selectedTabId:t.id,onTabSelected:this.onTabSelected}),Object(d.jsx)("p",{className:"content",children:t.content})]})]})}}]),n}(l.a.Component),p=h;a.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.73f0b99f.chunk.js.map