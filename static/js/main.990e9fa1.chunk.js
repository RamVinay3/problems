(this.webpackJsonpproblem=this.webpackJsonpproblem||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var c,i=n(1),a=n.n(i),o=n(3),s=n.n(o),r=(n(13),n.p,n(14),n(4)),d=n(5),l=n(8),h=n(7),j=n(6),u=(n(15),n(0)),b=[],m=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var i;return Object(r.a)(this,n),(i=e.call(this,t)).func=function(){i.meancalc(),i.mediancalc(),i.modecalc(),i.deviationcalc()},i.meancalc=function(){var t=0;console.log("mean",t);for(var e=0;e<b.length;e++)t+=b[e];i.state.mean=t/b.length,i.setState({mean:(t/b.length).toFixed(6)})},i.mediancalc=function(){b.sort((function(t,e){return t-e}));for(var t=0;t<b.length;t++)console.log(b[t]);b.length%2!=0?i.setState({median:b[Math.floor(b.length/2)].toFixed(6)}):i.setState({median:((b[b.length/2]+b[b.length/2-1])/2).toFixed(6)})},i.push=function(){b.push(parseInt(c.value)),c.value=""},i.modecalc=function(){for(var t,e=0,n=0,c=b[0],a=0;a<b.length;a++)c==b[a]?n++:(e<n&&(t=c,e=n),n=1,c=b[a]);i.setState({mode:t.toFixed(6)})},i.deviationcalc=function(){var t=0,e=i.state.mean;console.log();for(var n=0;n<b.length;n++)t+=(b[n]-e)*(b[n]-e);i.setState({deviation:Math.sqrt(t/b.length).toFixed(6)})},i.print=function(){console.log(b[2]);for(var t=0;t<b.length;t++)console.log(b[t])},i.getData=function(){j.data.map((function(t){b.push(t)}))},i.state={mean:0,median:0,mode:0,deviation:0,data:[]},i}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.getData(),c=document.getElementById("number")}},{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{onClick:this.func,children:"load"}),Object(u.jsx)("table",{children:Object(u.jsxs)("thead",{children:[Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"tile"}),Object(u.jsx)("th",{children:"value"})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"mean"}),Object(u.jsx)("td",{children:this.state.mean})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"median"}),Object(u.jsx)("td",{children:this.state.median})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"mode"}),Object(u.jsx)("td",{children:this.state.mode})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"deviation"}),Object(u.jsx)("td",{children:this.state.deviation})]})]})}),Object(u.jsx)("input",{id:"number"}),Object(u.jsx)("button",{id:"butt",onClick:this.push,children:" push it"})]})}}]),n}(i.Component);var f=function(){return Object(u.jsx)(m,{})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),c(t),i(t),a(t),o(t)}))};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),x()},6:function(t){t.exports=JSON.parse('{"data":[123,124,125,987,123]}')}},[[20,1,2]]]);
//# sourceMappingURL=main.990e9fa1.chunk.js.map