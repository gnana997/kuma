import{d as x,e as o,o as l,p as i,w as n,a as t,b as p,m as k,Y as w,c as V,J as E,K as F}from"./index-D8KcXOkO.js";const D=x({__name:"ConnectionOutboundSummaryClustersView",setup(B){return(b,s)=>{const d=o("RouteTitle"),m=o("XAction"),u=o("XCodeBlock"),_=o("DataCollection"),C=o("DataLoader"),f=o("AppView"),g=o("RouteView");return l(),i(g,{params:{codeSearch:"",codeFilter:!1,codeRegExp:!1,mesh:"",dataPlane:"",connection:""},name:"connection-outbound-summary-clusters-view"},{default:n(({route:e,uri:h})=>[t(d,{render:!1,title:"Clusters"}),s[1]||(s[1]=p()),t(f,null,{default:n(()=>[t(C,{src:h(k(w),"/meshes/:mesh/dataplanes/:name/clusters",{mesh:e.params.mesh,name:e.params.dataPlane})},{default:n(({data:y,refresh:R})=>[(l(!0),V(E,null,F([e.params.connection],c=>(l(),i(_,{key:typeof c,items:y.split(`
`),predicate:r=>r.startsWith(`${c}::`)},{default:n(({items:r})=>[t(u,{language:"json",code:r.map(a=>a.replace(`${c}::`,"")).join(`
`),"is-searchable":"",query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:a=>e.update({codeSearch:a}),onFilterModeChange:a=>e.update({codeFilter:a}),onRegExpModeChange:a=>e.update({codeRegExp:a})},{"primary-actions":n(()=>[t(m,{action:"refresh",appearance:"primary",onClick:R},{default:n(()=>s[0]||(s[0]=[p(`
                  Refresh
                `)])),_:2},1032,["onClick"])]),_:2},1032,["code","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1032,["items","predicate"]))),128))]),_:2},1032,["src"])]),_:2},1024)]),_:1})}}});export{D as default};
