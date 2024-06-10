import{d as X,i as o,o as a,a as d,w as e,j as i,g as u,k as y,b as _,H as m,J as w,l as $,t as V,r as b,e as j,_ as z}from"./index-BmgyLxlv.js";const E={class:"policy-list-content"},F={class:"policy-count"},H={class:"policy-list"},J=X({__name:"PolicyTypeListView",setup(q){return(G,M)=>{const C=o("RouteTitle"),D=o("XAction"),R=o("DataCollection"),B=o("DataLoader"),P=o("KCard"),x=o("RouterView"),f=o("DataSource"),L=o("AppView"),A=o("RouteView");return a(),d(f,{src:"/me"},{default:e(({data:N})=>[N?(a(),d(A,{key:0,name:"policy-list-view",params:{mesh:"",policyPath:"",policy:""}},{default:e(({route:r,t:S})=>[i(L,null,{title:e(()=>[u("h2",null,[i(C,{title:S("policies.routes.types.title")},null,8,["title"])])]),default:e(()=>[y(),i(f,{src:`/mesh-insights/${r.params.mesh}`},{default:e(({data:t})=>[i(f,{src:"/policy-types"},{default:e(({data:c,error:K})=>[u("div",E,[i(P,{class:"policy-type-list","data-testid":"policy-type-list"},{default:e(()=>[i(B,{data:[c],errors:[K]},{default:e(()=>[(a(!0),_(m,null,w([typeof(t==null?void 0:t.policies)>"u"?c.policies:c.policies.filter(s=>{var p,l;return!s.isTargetRefBased&&(((l=(p=t.policies)==null?void 0:p[s.name])==null?void 0:l.total)??0)>0})],s=>(a(),d(R,{key:s,predicate:typeof(t==null?void 0:t.policies)>"u"?void 0:p=>s.length>0||p.isTargetRefBased,items:c.policies},{default:e(({items:p})=>[(a(!0),_(m,null,w([p.find(l=>l.path===r.params.policyPath)],l=>(a(),_(m,{key:l},[(a(!0),_(m,null,w(p,(n,T)=>{var k,v;return a(),_("div",{key:n.path,class:$(["policy-type-link-wrapper",{"policy-type-link-wrapper--is-active":l&&l.path===n.path}])},[i(D,{class:"policy-type-link",to:{name:"policy-list-view",params:{mesh:r.params.mesh,policyPath:n.path}},mount:r.params.policyPath.length===0&&T===0?r.replace:void 0,"data-testid":`policy-type-link-${n.name}`},{default:e(()=>[y(V(n.name),1)]),_:2},1032,["to","mount","data-testid"]),y(),u("div",F,V(((v=(k=t==null?void 0:t.policies)==null?void 0:k[n.name])==null?void 0:v.total)??0),1)],2)}),128))],64))),128))]),_:2},1032,["predicate","items"]))),128))]),_:2},1032,["data","errors"])]),_:2},1024),y(),u("div",H,[i(x,null,{default:e(({Component:s})=>[(a(),d(b(s),{"policy-types":c==null?void 0:c.policies},null,8,["policy-types"]))]),_:2},1024)])])]),_:2},1024)]),_:2},1032,["src"])]),_:2},1024)]),_:1})):j("",!0)]),_:1})}}}),Q=z(J,[["__scopeId","data-v-42d2a862"]]);export{Q as default};
