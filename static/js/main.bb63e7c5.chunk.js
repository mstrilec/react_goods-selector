(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var a=c(3),n=c.n(a),o=c(4),s=c(5),l=c(8),r=c(7),d=c(1),i=c.n(d),b=(c(13),c(14),c(6)),u=c.n(b),j=c(0),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],m=function(e){Object(l.a)(c,e);var t=Object(r.a)(c);function c(){var e;Object(o.a)(this,c);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={selectedGood:"Jam"},e.changeGood=function(t){e.setState({selectedGood:t})},e.clearGood=function(){e.setState({selectedGood:""})},e}return Object(s.a)(c,[{key:"render",value:function(){var e=this.state.selectedGood,t=this.clearGood,c=this.changeGood;return Object(j.jsxs)("main",{className:"section container",children:[e?Object(j.jsxs)("h1",{className:"title is-flex is-align-items-center",children:["".concat(e," is selected"),Object(j.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:t,"aria-label":"Clear button"})]}):Object(j.jsx)("h1",{className:"title",children:"No goods selected"}),Object(j.jsx)("table",{className:"table",children:Object(j.jsx)("tbody",{children:h.map((function(a){var n=a===e;return Object(j.jsxs)("tr",{"data-cy":"Good",className:u()({"has-background-success-light":n}),children:[Object(j.jsx)("td",{children:n?Object(j.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:t,"aria-label":"Remove good button",children:"-"}):Object(j.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){return c(a)},"aria-label":"Add good button",children:"+"})}),Object(j.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:a})]},a)}))})})]})}}]),c}(i.a.PureComponent);n.a.render(Object(j.jsx)(m,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.bb63e7c5.chunk.js.map