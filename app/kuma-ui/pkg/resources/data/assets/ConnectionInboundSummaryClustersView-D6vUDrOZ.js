import{d as x,e as n,o as l,p as i,w as o,a as t,b as p,m as k,Y as w,c as V,J as E,K as F}from"./index-D8KcXOkO.js";const D=x({__name:"ConnectionInboundSummaryClustersView",setup(B){return(b,s)=>{const d=n("RouteTitle"),m=n("XAction"),u=n("XCodeBlock"),_=n("DataCollection"),C=n("DataLoader"),f=n("AppView"),g=n("RouteView");return l(),i(g,{params:{codeSearch:"",codeFilter:!1,codeRegExp:!1,mesh:"",dataPlane:"",connection:""},name:"connection-inbound-summary-clusters-view"},{default:o(({route:e,uri:h})=>[t(d,{render:!1,title:"Clusters"}),s[1]||(s[1]=p()),t(f,null,{default:o(()=>[t(C,{src:h(k(w),"/meshes/:mesh/dataplanes/:name/clusters",{mesh:e.params.mesh,name:e.params.dataPlane})},{default:o(({data:y,refresh:R})=>[(l(!0),V(E,null,F([e.params.connection.replace("_",":")],c=>(l(),i(_,{key:typeof c,items:y.split(`
`),predicate:r=>r.startsWith(`${c}::`)},{default:o(({items:r})=>[t(u,{language:"json",code:r.map(a=>a.replace(`${c}::`,"")).join(`
`),"is-searchable":"",query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:a=>e.update({codeSearch:a}),onFilterModeChange:a=>e.update({codeFilter:a}),onRegExpModeChange:a=>e.update({codeRegExp:a})},{"primary-actions":o(()=>[t(m,{action:"refresh",appearance:"primary",onClick:R},{default:o(()=>s[0]||(s[0]=[p(`
                  Refresh
                `)])),_:2},1032,["onClick"])]),_:2},1032,["code","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1032,["items","predicate"]))),128))]),_:2},1032,["src"])]),_:2},1024)]),_:1})}}});export{D as default};
