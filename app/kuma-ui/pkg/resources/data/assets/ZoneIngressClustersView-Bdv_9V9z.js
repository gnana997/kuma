import{q as C,e as o,o as x,m as h,w as n,a,b as r}from"./index-B_icS-nL.js";const R={};function w(V,t){const c=o("RouteTitle"),i=o("XAction"),d=o("XCodeBlock"),l=o("DataLoader"),p=o("KCard"),m=o("AppView"),_=o("RouteView");return x(),h(_,{name:"zone-ingress-clusters-view",params:{zoneIngress:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:n(({route:e,t:g})=>[a(c,{render:!1,title:g("zone-ingresses.routes.item.navigation.zone-ingress-clusters-view")},null,8,["title"]),t[1]||(t[1]=r()),a(m,null,{default:n(()=>[a(p,null,{default:n(()=>[a(l,{src:`/zone-ingresses/${e.params.zoneIngress}/data-path/clusters`},{default:n(({data:u,refresh:f})=>[a(d,{language:"json",code:u,"is-searchable":"",query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:s=>e.update({codeSearch:s}),onFilterModeChange:s=>e.update({codeFilter:s}),onRegExpModeChange:s=>e.update({codeRegExp:s})},{"primary-actions":n(()=>[a(i,{action:"refresh",appearance:"primary",onClick:f},{default:n(()=>t[0]||(t[0]=[r(`
                Refresh
              `)])),_:2},1032,["onClick"])]),_:2},1032,["code","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1032,["src"])]),_:2},1024)]),_:2},1024)]),_:1})}const y=C(R,[["render",w]]);export{y as default};
