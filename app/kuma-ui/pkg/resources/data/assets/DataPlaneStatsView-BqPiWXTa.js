import{d as C,i as o,o as w,a as x,w as a,j as t,g as R,k as s,A as d,K as V}from"./index-BmgyLxlv.js";import{m as k}from"./kong-icons.es350-DGOBbbJK.js";import{C as y}from"./CodeBlock-DA0aerL2.js";const v=C({__name:"DataPlaneStatsView",props:{data:{}},setup(r){const p=r;return(B,E)=>{const c=o("RouteTitle"),l=o("KButton"),i=o("DataLoader"),m=o("KCard"),_=o("AppView"),u=o("RouteView");return w(),x(u,{name:"data-plane-stats-view",params:{mesh:"",dataPlane:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:a(({route:e,t:g})=>[t(_,null,{title:a(()=>[R("h2",null,[t(c,{title:g("data-planes.routes.item.navigation.data-plane-stats-view")},null,8,["title"])])]),default:a(()=>[s(),t(m,null,{default:a(()=>[t(i,{src:`/meshes/${e.params.mesh}/dataplanes/${e.params.dataPlane}/stats/${p.data.dataplane.networking.inboundAddress}`},{default:a(({data:f,refresh:h})=>[t(y,{language:"json",code:f.raw,"is-searchable":"",query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:n=>e.update({codeSearch:n}),onFilterModeChange:n=>e.update({codeFilter:n}),onRegExpModeChange:n=>e.update({codeRegExp:n})},{"primary-actions":a(()=>[t(l,{appearance:"primary",onClick:h},{default:a(()=>[t(d(k),{size:d(V)},null,8,["size"]),s(`
                Refresh
              `)]),_:2},1032,["onClick"])]),_:2},1032,["code","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1032,["src"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{v as default};
