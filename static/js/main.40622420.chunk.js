(this["webpackJsonpbpro-tokenomics"]=this["webpackJsonpbpro-tokenomics"]||[]).push([[0],{22:function(e,t,a){},25:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var r=a(1),s=a.n(r),c=a(14),n=a.n(c),i=(a(22),a(3)),o=a.n(i),d=a(7),l=a.n(d),b=a(17),m=function(e,t,a,r){for(var s=[],c=(r-t)/(a-e),n=e;n<=a;n++)s.push(t+c*(n-e));return s},j=function(e,t){var a=Object(b.a)(e);return t.forEach((function(e){var t=e[0],r=e[1];a=a.map((function(e,a){return a>=t?e-r:e}))})),a},h=function(e,t){return e.length>t?e.slice(0,t):e},x=function(e,t){return Array(t).fill(e)},u=function(e){var t=(e%12+3)%12,a=Math.floor((e+3)/12+2021);return["January","February","March","April","May","June","July","August","September","October","November","December"][t]+" "+a},O=function(e,t){for(var a=[],r=e;r<=t;r++)a.push(u(r));return a},p=a(0),f=o.a.merge({title:{text:void 0},colors:["#20ae5e","#24c168","#3ac777","#50cd86","#66d495","#7cdaa4","#92e0b4","#a7e6c3","#bdecd2","#d3f3e1","#e9f9f0"],credits:{enabled:!1},yAxis:{title:{text:void 0}}},{chart:{type:"pie"},tooltip:{formatter:function(){return this.key+": <b>"+o.a.numberFormat(this.y,0)+" BPRO</b> ("+this.percentage+"%)"}},series:[{data:[{name:"Reservoir (Treasury), distributed over 4 years",y:53e5},{name:"Developer fund, distributed over 4 years",y:33e5},{name:"Maker pre-genesis users, instant distribution",y:5e5},{name:"Compound pre-genesis users, instant distribution",y:5e5},{name:"Genesis liquidity mining, distributed over 3 months",y:25e4},{name:"Genesis backstop, distributed over 1 year",y:15e4}]}]}),y=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(l.a,{highcharts:o.a,options:f})})},g=a(34),v=o.a.merge({title:{text:void 0},colors:["#20ae5e","#24c168","#3ac777","#50cd86","#66d495","#7cdaa4","#92e0b4","#a7e6c3","#bdecd2","#d3f3e1","#e9f9f0"],credits:{enabled:!1},yAxis:{title:{text:void 0}}},{chart:{type:"area"},plotOptions:{area:{stacking:"Normal"},series:{marker:{enabled:!1,symbol:"circle"}}},yAxis:{max:1e7},tooltip:{shared:!0,formatter:function(){var e="",t=0;return this.points.forEach((function(a){e+=a.series.name+": <b>"+o.a.numberFormat(a.y,0)+" BPRO</b><br/>",t+=a.y})),e="<b>"+this.points[0].x+" <> "+this.points[0].point.x+" months (Total: "+o.a.numberFormat(t,0)+" BPRO)</b><br />"+e}},xAxis:{type:"category",categories:O(0,49),tickInterval:3},series:[{name:"Reservoir (Treasury)",data:m(0,0,48,53e5)},{name:"Developer fund",data:m(0,0,48,33e5)},{name:"Maker pre-genesis users",data:m(0,5e5,48,5e5)},{name:"Compound pre-genesis users",data:m(0,5e5,48,5e5)},{name:"Genesis backstop",data:[].concat(m(0,0,12,15e4)).concat(x(15e4,36))},{name:"Genesis liquidity mining",data:[].concat(m(0,0,3,25e4).slice(0,-1)).concat(m(3,25e4,48,25e4))}]}),B=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(l.a,{highcharts:o.a,options:v}),Object(p.jsxs)(g.a,{className:"mx-5",children:[Object(p.jsx)(g.a.Item,{className:"active",children:Object(p.jsx)("b",{children:"Notes"})}),Object(p.jsxs)(g.a.Item,{children:[Object(p.jsx)("b",{children:"Reservoir (Treasury):"})," Issuance is 1 325 000 BPRO per year, for 4 years"]}),Object(p.jsxs)(g.a.Item,{children:[Object(p.jsx)("b",{children:"Developer fund:"})," Issuance is 825 000 BPRO per year, for 4 years"]})]})]})},N=10,I=o.a.merge({title:{text:void 0},colors:["#20ae5e","#24c168","#3ac777","#50cd86","#66d495","#7cdaa4","#92e0b4","#a7e6c3","#bdecd2","#d3f3e1","#e9f9f0"],credits:{enabled:!1},yAxis:{title:{text:void 0}}},{chart:{type:"area"},plotOptions:{area:{stacking:"Normal"},series:{marker:{enabled:!1,symbol:"circle"}}},tooltip:{shared:!0,formatter:function(){var e="",t=0;return this.points.forEach((function(a){e+=a.series.name+": <b>"+o.a.numberFormat(a.y,0)+" BPRO</b><br/>",t+=a.y})),e="<b>"+this.points[0].x+" <> "+this.points[0].point.x+" months (Total: "+o.a.numberFormat(t,0)+" BPRO)</b><br />"+e}},xAxis:{type:"category",categories:O(0,N)},series:[{name:"Maker pre-genesis users",data:x(5e5,N)},{name:"Compound pre-genesis users",data:x(5e5,N)},{name:"Genesis backstop",data:h(m(0,0,12,15e4),N)},{name:"Genesis liquidity mining",data:[].concat(x(0,3)).concat(x(25e4,7))},{name:"Second liquidity mining (BIP-4)",data:[].concat(x(0,8)).concat(x(3e4,2))},{name:"Venture capital round",data:h(m(0,0,48,538840),N)}]}),P=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(l.a,{highcharts:o.a,options:I}),Object(p.jsxs)(g.a,{className:"mx-5",children:[Object(p.jsx)(g.a.Item,{className:"active",children:Object(p.jsx)("b",{children:"Notes"})}),Object(p.jsxs)(g.a.Item,{children:[Object(p.jsx)("b",{children:"April 2021 (0 months):"})," 1 000 000 BPRO - Genesis distribution to Maker and Compound pre-genesis users",Object(p.jsx)("br",{}),Object(p.jsx)("b",{children:"Source:"})," One time minting"]}),Object(p.jsxs)(g.a.Item,{children:[Object(p.jsx)("b",{children:"April 2021 (0 months):"}),": 150 000 BPRO - Started genesis backstop 1 year drip",Object(p.jsx)("br",{}),Object(p.jsx)("b",{children:"Source:"})," One time minting"]}),Object(p.jsxs)(g.a.Item,{children:[Object(p.jsx)("b",{children:"July 2021 (3 months):"}),": 250 000 BPRO - Genesis liquidity mining distributed",Object(p.jsx)("br",{}),Object(p.jsx)("b",{children:"Source:"})," One time minting"]}),Object(p.jsxs)(g.a.Item,{children:[Object(p.jsx)("b",{children:"December 2021 (8 months):"})," 30 000 BPRO - Second liquidity mining period KPI options (BIP-4)",Object(p.jsx)("br",{}),Object(p.jsx)("b",{children:"Source:"})," Reservoir (Treasury)"]}),Object(p.jsxs)(g.a.Item,{children:[Object(p.jsx)("b",{children:"December 2021:"})," 538 840 BPRO - Venture capital seed round, vested linearly over 4 years (unconfirmed amount, but equal to moved BPRO at time of entry)",Object(p.jsx)("br",{}),Object(p.jsx)("b",{children:"Source:"})," Developer fund"]})]}),Object(p.jsxs)(g.a,{className:"mx-5 mt-3",children:[Object(p.jsx)(g.a.Item,{className:"active",children:Object(p.jsx)("b",{children:"Excluded"})}),Object(p.jsxs)(g.a.Item,{children:[Object(p.jsx)("b",{children:"Growth squad:"})," 25 000 BPRO - Can be spent by growth squad multisig",Object(p.jsx)("br",{})]}),Object(p.jsxs)(g.a.Item,{children:[Object(p.jsx)("b",{children:"Developer fund:"})," 825 000 BPRO per year - Can be spent by developer multisig",Object(p.jsx)("br",{})]})]})]})},k=10,R=o.a.merge({title:{text:void 0},colors:["#20ae5e","#24c168","#3ac777","#50cd86","#66d495","#7cdaa4","#92e0b4","#a7e6c3","#bdecd2","#d3f3e1","#e9f9f0"],credits:{enabled:!1},yAxis:{title:{text:void 0}}},{chart:{type:"area"},plotOptions:{area:{stacking:"Normal"},series:{marker:{enabled:!1,symbol:"circle"}}},tooltip:{shared:!0,formatter:function(){var e="",t=0;return this.points.forEach((function(a){e+=a.series.name+": <b>"+o.a.numberFormat(a.y,0)+" BPRO</b><br/>",t+=a.y})),e="<b>"+this.points[0].x+" <> "+this.points[0].point.x+" months (Total: "+o.a.numberFormat(t,0)+" BPRO)</b><br />"+e}},xAxis:{type:"category",categories:O(0,k)},series:[{name:"Reservoir (Treasury)",data:h(j(m(0,0,48,53e5),[[5,2e5],[5,9e4],[5,25e3],[5,5e4]]),k)},{name:"v2 native integration rewards (BIP-3)",data:h([].concat(x(0,5)).concat(x(2e5,44)),k)},{name:"Second liquidity mining (BIP-4)",data:h([].concat(x(0,5)).concat(x(9e4,44)),k)},{name:"Growth squad (BIP-5)",data:h([].concat(x(0,5)).concat(x(25e3,44)),k)},{name:"Immunefi bug bounty (BIP-6) and Hats.finance (BIP-7)",data:h([].concat(x(0,5)).concat(x(5e4,44)),k)}]}),A=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(l.a,{highcharts:o.a,options:R}),Object(p.jsxs)(g.a,{className:"mx-5",children:[Object(p.jsx)(g.a.Item,{className:"active",children:Object(p.jsx)("b",{children:"Notes"})}),Object(p.jsxs)(g.a.Item,{children:[Object(p.jsx)("b",{children:"Smart contract:"})," Address is ",Object(p.jsx)("a",{href:"https://etherscan.io/address/0xcC09c04A9e3930343290184544F97669eFF18A8d",children:"0xcC09c04A9e3930343290184544F97669eFF18A8d"})]})]})]})},F=o.a.merge({title:{text:void 0},colors:["#20ae5e","#24c168","#3ac777","#50cd86","#66d495","#7cdaa4","#92e0b4","#a7e6c3","#bdecd2","#d3f3e1","#e9f9f0"],credits:{enabled:!1},yAxis:{title:{text:void 0}}},{chart:{type:"area"},plotOptions:{area:{stacking:"Normal"},series:{marker:{enabled:!1,symbol:"circle"}}},tooltip:{shared:!0,formatter:function(){var e="",t=0;return this.points.forEach((function(a){e+=a.series.name+": <b>"+o.a.numberFormat(a.y,0)+" BPRO</b><br/>",t+=a.y})),e="<b>"+this.points[0].x+" <> "+this.points[0].point.x+" months (Total: "+o.a.numberFormat(t,0)+" BPRO)</b><br />"+e}},xAxis:{type:"category",categories:O(0,10)},series:[{name:"Developer fund",data:h(j(m(0,0,48,33e5),[[8,538840]]),10)},{name:"Venture capital seed  round",data:h([].concat(x(0,8)).concat(x(538840,41)),10)}]}),S=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(l.a,{highcharts:o.a,options:F}),Object(p.jsxs)(g.a,{className:"mx-5",children:[Object(p.jsx)(g.a.Item,{className:"active",children:Object(p.jsx)("b",{children:"Notes"})}),Object(p.jsxs)(g.a.Item,{children:[Object(p.jsx)("b",{children:"Smart contract:"})," Address is ",Object(p.jsx)("a",{href:"https://etherscan.io/address/0x225f27022a50aF2735287262a47bdacA2315a43E",children:"0x225f27022a50aF2735287262a47bdacA2315a43E"})]}),Object(p.jsxs)(g.a.Item,{children:[Object(p.jsx)("b",{children:"Venture capital seed round:"})," Vested linearly over 4 years from April 2021 (unconfirmed amount, but equal to moved BPRO at time of entry)"]})]})]})},T=function(){return Object(p.jsxs)(g.a,{className:"mx-5",children:[Object(p.jsx)(g.a.Item,{children:Object(p.jsx)("a",{href:"https://forum.bprotocol.org/t/b-protocol-governance-token/48",children:"B.Protocol Governance Token"})}),Object(p.jsx)(g.a.Item,{children:Object(p.jsx)("a",{href:"https://forum.bprotocol.org/t/bip-3-allocating-bpro-to-reward-v2-native-integrations/166",children:"BIP #3 - Allocating BPRO to reward v2 native integrations"})}),Object(p.jsx)(g.a.Item,{children:Object(p.jsx)("a",{href:"https://forum.bprotocol.org/t/bip-4-use-umas-kpi-options-program-for-users-liquidity-mining/167",children:"BIP #4 - Use UMA's KPI Options Program for users' Liquidity Mining"})}),Object(p.jsx)(g.a.Item,{children:Object(p.jsx)("a",{href:"https://forum.bprotocol.org/t/bip-5-growth-squad-fund/168",children:"BIP #5 - Growth Squad Fund"})}),Object(p.jsx)(g.a.Item,{children:Object(p.jsx)("a",{href:"https://forum.bprotocol.org/t/bip-6-backing-b-protocol-immunefi-bug-bounty-program/169",children:"BIP #6 - Backing B.Protocol-Immunefi Bug Bounty Program"})}),Object(p.jsx)(g.a.Item,{children:Object(p.jsx)("a",{href:"https://forum.bprotocol.org/t/bip-7-b-protocol-white-hat-incentive-vault-funding-proposal/181",children:"BIP #7 - B.protocol white hat incentive vault funding proposal"})}),Object(p.jsx)(g.a.Item,{children:Object(p.jsx)("a",{href:"https://medium.com/b-protocol/b-protocol-secures-2-2m-5e275ca0d979",children:"B.Protocol Secures $2.2M in a Seed Round, Led by 1kx, To Make DeFi Liquidations Safer and More Efficient"})}),Object(p.jsx)(g.a.Item,{children:Object(p.jsx)("a",{href:"https://docs.bprotocol.org/technical-documentation/smart-contracts",children:"B.Protocol Smart Contracts"})})]})},q=(a(25),a(32)),w=a(33),D=a(35),M=a(30),C=a(31),G=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("a",{href:"https://github.com/Ondkloss/bpro-tokenomics",children:Object(p.jsx)(M.a,{size:32,className:"mx-2"})}),Object(p.jsx)("a",{href:"https://discord.gg/bJ4guuw",children:Object(p.jsx)(C.a,{size:32,className:"mx-2"})})]})},E=function(){return Object(p.jsxs)(q.a,{children:[Object(p.jsx)(w.a,{className:"mx-1 mt-2",children:Object(p.jsx)(D.a,{className:"my-2",children:Object(p.jsxs)(D.a.Body,{children:[Object(p.jsx)("h1",{className:"text-center",children:"Community made BPRO Tokenomics"}),Object(p.jsx)("p",{className:"text-muted text-center",children:"Highly unofficial, but based on best knowledge"})]})})}),Object(p.jsx)(w.a,{className:"mx-1",children:Object(p.jsx)(D.a,{className:"my-2",children:Object(p.jsxs)(D.a.Body,{children:[Object(p.jsx)(D.a.Title,{className:"text-center",children:"BPRO distribution total"}),Object(p.jsx)(D.a.Subtitle,{className:"mb-2 text-muted text-center",children:"Distribution total, after all distribution has ended (10 million)"}),Object(p.jsx)(y,{})]})})}),Object(p.jsx)(w.a,{className:"mx-1",children:Object(p.jsx)(D.a,{className:"my-2",children:Object(p.jsxs)(D.a.Body,{children:[Object(p.jsx)(D.a.Title,{className:"text-center",children:"BPRO distribution over time"}),Object(p.jsx)(D.a.Subtitle,{className:"mb-2 text-muted text-center",children:"Starting 26th of April, 2021 and ending 26th of April, 2025 (4 years)"}),Object(p.jsx)(B,{})]})})}),Object(p.jsx)(w.a,{className:"mx-1",children:Object(p.jsx)(D.a,{className:"my-2",children:Object(p.jsxs)(D.a.Body,{children:[Object(p.jsx)(D.a.Title,{className:"text-center",children:"Circulating supply"}),Object(p.jsx)(D.a.Subtitle,{className:"mb-2 text-muted text-center",children:"What has been distributed and is liquid (not well defined or complete, description in tooltip)"}),Object(p.jsx)(P,{})]})})}),Object(p.jsx)(w.a,{className:"mx-1",children:Object(p.jsx)(D.a,{className:"my-2",children:Object(p.jsxs)(D.a.Body,{children:[Object(p.jsx)(D.a.Title,{className:"text-center",children:"Reservoir (Treasury) movement"}),Object(p.jsx)(D.a.Subtitle,{className:"mb-2 text-muted text-center",children:"Movements from the DAO reservoir"}),Object(p.jsx)(A,{})]})})}),Object(p.jsx)(w.a,{className:"mx-1",children:Object(p.jsx)(D.a,{className:"my-2",children:Object(p.jsxs)(D.a.Body,{children:[Object(p.jsx)(D.a.Title,{className:"text-center",children:"Developer fund movement"}),Object(p.jsx)(D.a.Subtitle,{className:"mb-2 text-muted text-center",children:"Movements from the Developer fund"}),Object(p.jsx)(S,{})]})})}),Object(p.jsx)(w.a,{className:"mx-1 mb-3",children:Object(p.jsx)(D.a,{className:"my-2",children:Object(p.jsxs)(D.a.Body,{children:[Object(p.jsx)(D.a.Title,{className:"text-center",children:"Sources"}),Object(p.jsx)(T,{})]})})}),Object(p.jsx)(w.a,{className:"mx-1 mb-3 text-center",children:Object(p.jsx)(G,{})})]})},J=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,36)).then((function(t){var a=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,n=t.getTTFB;a(e),r(e),s(e),c(e),n(e)}))};n.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(E,{})}),document.getElementById("root")),J()}},[[28,1,2]]]);
//# sourceMappingURL=main.40622420.chunk.js.map