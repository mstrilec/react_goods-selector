(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(3),s=c.n(n),a=c(4),o=c(5),r=c(8),l=c(7),i=c(1),d=c.n(i),u=(c(13),c(14),c(6)),b=c.n(u),j=c(0),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],m=function(e){Object(r.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(a.a)(this,c);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={selectedGood:"Jam"},e.changeGood=function(t){e.setState({selectedGood:t})},e.clearGood=function(){e.setState({selectedGood:""})},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this.state.selectedGood,t=this.clearGood,c=this.changeGood;return Object(j.jsxs)("main",{className:"section container",children:[e?Object(j.jsxs)("h1",{className:"title is-flex is-align-items-center",children:["".concat(e," is selected"),Object(j.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:t})]}):Object(j.jsx)("h1",{className:"title",children:"No goods selected"}),Object(j.jsx)("table",{className:"table",children:Object(j.jsx)("tbody",{children:h.map((function(n){var s=n===e;return Object(j.jsxs)("tr",{"data-cy":"Good",className:b()({"has-background-success-light":s}),children:[Object(j.jsx)("td",{children:s?Object(j.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:t,children:"-"}):Object(j.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){return c(n)},children:"+"})}),Object(j.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:n})]},n)}))})})]})}}]),c}(d.a.PureComponent);s.a.render(Object(j.jsx)(m,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.003f9b8e.chunk.js.map