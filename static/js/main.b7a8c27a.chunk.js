(this.webpackJsonpproblem=this.webpackJsonpproblem||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},2:function(t,e,n){t.exports={number:"single1_number__1d9jb",load:"single1_load__3C6S8"}},21:function(t,e,n){"use strict";n.r(e);var c,a=n(1),i=n.n(a),o=n(4),s=n.n(o),l=(n(14),n.p,n(15),n(5)),r=n(6),d=n(9),h=n(8),u=n(7),j=(n(16),n(2)),b=n.n(j),m=n(0),f=[],x=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).func=function(){a.meancalc(),a.mediancalc(),a.modecalc(),a.deviationcalc()},a.meancalc=function(){var t=0;console.log("mean",t);for(var e=0;e<f.length;e++)t+=f[e];a.state.mean=t/f.length,a.setState({mean:(t/f.length).toFixed(6)})},a.mediancalc=function(){f.sort((function(t,e){return t-e}));for(var t=0;t<f.length;t++)console.log(f[t]);f.length%2!=0?a.setState({median:f[Math.floor(f.length/2)].toFixed(6)}):a.setState({median:((f[f.length/2]+f[f.length/2-1])/2).toFixed(6)})},a.push=function(){""!=c.value&&f.push(parseInt(c.value)),c.value=""},a.modecalc=function(){for(var t,e=0,n=0,c=f[0],i=0;i<f.length;i++)c==f[i]?n++:(e<n&&(t=c,e=n),n=1,c=f[i]);a.setState({mode:t.toFixed(6)})},a.deviationcalc=function(){var t=0,e=a.state.mean;console.log();for(var n=0;n<f.length;n++)t+=(f[n]-e)*(f[n]-e);a.setState({deviation:Math.sqrt(t/f.length).toFixed(6)})},a.print=function(){console.log(f[2]);for(var t=0;t<f.length;t++)console.log(f[t])},a.getData=function(){u.data.map((function(t){f.push(t)}))},a.state={mean:0,median:0,mode:0,deviation:0,data:[]},a}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.getData(),c=document.getElementById("number")}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{onClick:this.func,className:b.a.load,children:"load"}),Object(m.jsx)("table",{children:Object(m.jsxs)("thead",{children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"tile"}),Object(m.jsx)("th",{children:"value"})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"mean"}),Object(m.jsx)("td",{children:this.state.mean})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"median"}),Object(m.jsx)("td",{children:this.state.median})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"mode"}),Object(m.jsx)("td",{children:this.state.mode})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"deviation"}),Object(m.jsx)("td",{children:this.state.deviation})]})]})}),Object(m.jsx)("input",{id:"number",className:b.a.number}),Object(m.jsx)("button",{id:"butt",className:b.a.number,onClick:this.push,children:" push it"})]})}}]),n}(a.Component);var O=function(){return Object(m.jsx)(x,{})},g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),c(t),a(t),i(t),o(t)}))};s.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(O,{})}),document.getElementById("root")),g()},7:function(t){t.exports=JSON.parse('{"data":[123,124,125,987,123]}')}},[[21,1,2]]]);
//# sourceMappingURL=main.b7a8c27a.chunk.js.map