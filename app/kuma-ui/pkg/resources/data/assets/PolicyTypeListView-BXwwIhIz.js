import{d as T,e as t,o as l,m,w as o,a as i,b as u,k as f,c as _,H as y,J as w,n as X,t as C,E as $,q as b}from"./index-B_icS-nL.js";const q={class:"policy-list-content"},z={class:"policy-count"},F={class:"policy-list"},H=T({__name:"PolicyTypeListView",setup(J){return(j,c)=>{const D=t("RouteTitle"),R=t("XAction"),B=t("DataCollection"),P=t("DataLoader"),x=t("KCard"),L=t("RouterView"),v=t("DataSource"),A=t("AppView"),N=t("RouteView");return l(),m(N,{name:"policy-list-view",params:{mesh:"",policyPath:"",policy:""}},{default:o(({route:d,t:S})=>[i(D,{render:!1,title:S("policies.routes.types.title")},null,8,["title"]),c[2]||(c[2]=u()),i(A,null,{default:o(()=>[i(v,{src:`/mesh-insights/${d.params.mesh}`},{default:o(({data:e})=>[i(v,{src:"/policy-types"},{default:o(({data:s,error:E})=>[f("div",q,[i(x,{class:"policy-type-list","data-testid":"policy-type-list"},{default:o(()=>[i(P,{data:[s],errors:[E]},{default:o(()=>[(l(!0),_(y,null,w([typeof(e==null?void 0:e.policies)>"u"?s.policies:s.policies.filter(p=>{var n,a;return!p.isTargetRefBased&&(((a=(n=e.policies)==null?void 0:n[p.name])==null?void 0:a.total)??0)>0})],p=>(l(),m(B,{key:p,predicate:typeof(e==null?void 0:e.policies)>"u"?void 0:n=>p.length>0||n.isTargetRefBased,items:s.policies},{default:o(({items:n})=>[(l(!0),_(y,null,w([n.find(a=>a.path===d.params.policyPath)],a=>(l(),_(y,{key:a},[(l(!0),_(y,null,w(n,(r,K)=>{var k,V;return l(),_("div",{key:r.path,class:X(["policy-type-link-wrapper",{"policy-type-link-wrapper--is-active":a&&a.path===r.path}])},[i(R,{class:"policy-type-link",to:{name:"policy-list-view",params:{mesh:d.params.mesh,policyPath:r.path}},mount:d.params.policyPath.length===0&&K===0?d.replace:void 0,"data-testid":`policy-type-link-${r.name}`},{default:o(()=>[u(C(r.name),1)]),_:2},1032,["to","mount","data-testid"]),c[0]||(c[0]=u()),f("div",z,C(((V=(k=e==null?void 0:e.policies)==null?void 0:k[r.name])==null?void 0:V.total)??0),1)],2)}),128))],64))),128))]),_:2},1032,["predicate","items"]))),128))]),_:2},1032,["data","errors"])]),_:2},1024),c[1]||(c[1]=u()),f("div",F,[i(L,null,{default:o(({Component:p})=>[(l(),m($(p),{"policy-types":s==null?void 0:s.policies},null,8,["policy-types"]))]),_:2},1024)])])]),_:2},1024)]),_:2},1032,["src"])]),_:2},1024)]),_:1})}}}),M=b(H,[["__scopeId","data-v-f70c623c"]]);export{M as default};
