import{q as C,e as o,o as x,m as h,w as n,a,b as r}from"./index-B_icS-nL.js";const R={};function w(V,s){const c=o("RouteTitle"),i=o("XAction"),d=o("XCodeBlock"),p=o("DataLoader"),l=o("KCard"),m=o("AppView"),_=o("RouteView");return x(),h(_,{name:"zone-ingress-stats-view",params:{zoneIngress:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:n(({route:e,t:g})=>[a(c,{render:!1,title:g("zone-ingresses.routes.item.navigation.zone-ingress-stats-view")},null,8,["title"]),s[1]||(s[1]=r()),a(m,null,{default:n(()=>[a(l,null,{default:n(()=>[a(p,{src:`/zone-ingresses/${e.params.zoneIngress}/data-path/stats`},{default:n(({data:f,refresh:u})=>[a(d,{language:"json",code:f,"is-searchable":"",query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:t=>e.update({codeSearch:t}),onFilterModeChange:t=>e.update({codeFilter:t}),onRegExpModeChange:t=>e.update({codeRegExp:t})},{"primary-actions":n(()=>[a(i,{action:"refresh",appearance:"primary",onClick:u},{default:n(()=>s[0]||(s[0]=[r(`
                Refresh
              `)])),_:2},1032,["onClick"])]),_:2},1032,["code","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1032,["src"])]),_:2},1024)]),_:2},1024)]),_:1})}const y=C(R,[["render",w]]);export{y as default};
