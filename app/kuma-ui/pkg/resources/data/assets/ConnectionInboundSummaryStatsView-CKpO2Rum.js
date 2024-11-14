import{d as w,e as t,o as x,m as R,w as o,a as s,b as c}from"./index-B_icS-nL.js";const y=w({__name:"ConnectionInboundSummaryStatsView",props:{data:{},dataplaneOverview:{}},setup(i){const e=i;return($,r)=>{const p=t("RouteTitle"),l=t("XAction"),m=t("XCodeBlock"),_=t("DataCollection"),u=t("DataLoader"),g=t("AppView"),h=t("RouteView");return x(),R(h,{params:{codeSearch:"",codeFilter:!1,codeRegExp:!1,mesh:"",dataPlane:"",connection:""},name:"connection-inbound-summary-stats-view"},{default:o(({route:a})=>[s(p,{render:!1,title:"Stats"}),r[1]||(r[1]=c()),s(g,null,{default:o(()=>[s(u,{src:`/meshes/${a.params.mesh}/dataplanes/${a.params.dataPlane}/stats/${e.dataplaneOverview.dataplane.networking.inboundAddress}`},{default:o(({data:f,refresh:C})=>[s(_,{items:f.raw.split(`
`),predicate:d=>[`listener.${e.data.listenerAddress.length>0?e.data.listenerAddress:a.params.connection}`,`cluster.${e.data.name}.`,`http.${e.data.name}.`,`tcp.${e.data.name}.`].some(n=>d.startsWith(n))&&(!d.includes(".rds.")||d.includes(`_${e.data.port}`))},{default:o(({items:d})=>[s(m,{language:"json",code:d.map(n=>n.replace(`${e.data.listenerAddress.length>0?e.data.listenerAddress:a.params.connection}.`,"").replace(`${e.data.name}.`,"")).join(`
`),"is-searchable":"",query:a.params.codeSearch,"is-filter-mode":a.params.codeFilter,"is-reg-exp-mode":a.params.codeRegExp,onQueryChange:n=>a.update({codeSearch:n}),onFilterModeChange:n=>a.update({codeFilter:n}),onRegExpModeChange:n=>a.update({codeRegExp:n})},{"primary-actions":o(()=>[s(l,{action:"refresh",appearance:"primary",onClick:C},{default:o(()=>r[0]||(r[0]=[c(`
                Refresh
              `)])),_:2},1032,["onClick"])]),_:2},1032,["code","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1032,["items","predicate"])]),_:2},1032,["src"])]),_:2},1024)]),_:1})}}});export{y as default};
