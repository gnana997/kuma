import{d as i,e as o,o as l,m,w as t,a as r,l as u,a2 as g}from"./index-B_icS-nL.js";const C=i({__name:"SubscriptionSummaryConfigView",props:{data:{},routeName:{}},setup(c){const n=c;return(_,f)=>{const s=o("XCodeBlock"),d=o("AppView"),p=o("RouteView");return l(),m(p,{name:n.routeName,params:{codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:t(({route:e})=>[r(d,null,{default:t(()=>[r(s,{language:"yaml",code:u(g).stringify(n.data.$raw),"is-searchable":"",query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:a=>e.update({codeSearch:a}),onFilterModeChange:a=>e.update({codeFilter:a}),onRegExpModeChange:a=>e.update({codeRegExp:a})},null,8,["code","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1024)]),_:1},8,["name"])}}});export{C as default};
