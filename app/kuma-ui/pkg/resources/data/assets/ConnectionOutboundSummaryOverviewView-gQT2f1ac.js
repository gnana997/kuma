import{d as J,r as m,o as e,m as u,w as t,b as c,c as o,L as d,M as h,Z as g,e as a,t as _,p as k,l as P,aC as X,k as i,a7 as z,H as Z,J as q,q as Y}from"./index-C4A671Or.js";import{a as G,A as Q}from"./AccordionList-BHioDE15.js";import{C as A}from"./CodeBlock-DPfixpTM.js";import{P as L}from"./PolicyTypeTag-DFPcrsKv.js";import{R as U}from"./RuleMatchers-AVeox_xp.js";const D=M=>(Z("data-v-0469c87f"),M=M(),q(),M),W={key:1,class:"rules"},ee=D(()=>i("h3",null,"Rules",-1)),te={class:"stack-with-borders mt-4"},ae={class:"stack-with-borders mt-4"},oe={class:"mt-4"},ne={class:"stack-with-borders"},se=D(()=>i("dt",null,`
                                          Config
                                        `,-1)),re={class:"mt-2"},ce=J({__name:"ConnectionOutboundSummaryOverviewView",props:{data:{},dataplaneOverview:{}},setup(M){const f=M,$=(b,w)=>b.$resourceMeta.name===w.name&&b.$resourceMeta.namespace===w.namespace&&b.$resourceMeta.zone===w.zone&&(w.resourceSectionName===""||b.$resourceMeta.port===w.port);return(b,w)=>{const B=m("XAction"),V=m("KBadge"),S=m("DataCollection"),N=m("RouterLink"),I=m("KCard"),j=m("DataLoader"),K=m("DataSource"),F=m("AppView"),T=m("RouteView");return e(),u(T,{params:{mesh:"",dataPlane:"",connection:""},name:"connection-outbound-summary-overview-view"},{default:t(({t:E,route:O,uri:H})=>[c(F,null,{default:t(()=>[(e(!0),o(d,null,h([O.params.connection.replace(/-([a-f0-9]){16}$/,"")],R=>(e(),o("div",{key:R,class:"stack-with-borders"},[f.data.$resourceMeta.type!==""?(e(),u(g,{key:0,layout:"horizontal"},{title:t(()=>[a(`
                Resource
              `)]),body:t(()=>[c(V,{appearance:"info","max-width":"auto"},{default:t(()=>[(e(!0),o(d,null,h([f.data.$resourceMeta],n=>(e(),u(B,{key:typeof n,to:{MeshService:{name:"mesh-service-detail-view",params:{mesh:n.mesh,service:n.name}},MeshExternalService:{name:"mesh-external-service-detail-view",params:{mesh:n.mesh,service:n.name}},MeshMultiZoneService:{name:"mesh-multizone-service-detail-view",params:{mesh:n.mesh,service:n.name}}}[n.type]},{default:t(()=>[a(_(n.type)+": "+_(n.name),1)]),_:2},1032,["to"]))),128))]),_:1})]),_:1})):k("",!0),a(),c(g,{layout:"horizontal"},{title:t(()=>[a(`
              Protocol
            `)]),body:t(()=>[c(V,{appearance:"info"},{default:t(()=>[a(_(E(`http.api.value.${["grpc","http","tcp"].find(n=>typeof f.data[n]<"u")}`)),1)]),_:2},1024)]),_:2},1024),a(),f.data?(e(),o("div",W,[ee,a(),c(K,{src:"/policy-types"},{default:t(({data:n})=>[(e(!0),o(d,null,h([Object.groupBy((n==null?void 0:n.policies)??[],v=>v.name)],v=>(e(),u(j,{key:typeof v,src:H(P(X),"/meshes/:mesh/rules/for/:dataplane",{mesh:O.params.mesh,dataplane:O.params.dataPlane})},{default:t(({data:x})=>[f.data.$resourceMeta.type!==""?(e(),u(S,{key:0,predicate:p=>p.resourceMeta.type==="Mesh"||$(f.data,p),items:x.toResourceRules},{default:t(({items:p})=>[i("div",te,[(e(!0),o(d,null,h(Object.groupBy(p,s=>s.type),(s,y)=>(e(),o("div",{key:y},[c(L,{"policy-type":y},{default:t(()=>[a(_(y),1)]),_:2},1032,["policy-type"]),a(),i("div",ae,[(e(!0),o(d,null,h(s.length>1?s.filter(r=>$(f.data,r)):s,r=>(e(),o("div",{key:r},[r.origins.length>0?(e(),u(g,{key:0,layout:"horizontal"},{title:t(()=>[a(`
                                      Origin Policies
                                    `)]),body:t(()=>[c(S,{predicate:l=>typeof l.resourceMeta<"u",items:r.origins,empty:!1},{default:t(({items:l})=>[i("ul",null,[(e(!0),o(d,null,h(l,C=>(e(),o("li",{key:JSON.stringify(C)},[Object.keys(v).length>0?(e(),u(B,{key:0,to:{name:"policy-detail-view",params:{policyPath:v[y][0].path,mesh:C.resourceMeta.mesh,policy:C.resourceMeta.name}}},{default:t(()=>[a(_(C.resourceMeta.name),1)]),_:2},1032,["to"])):k("",!0)]))),128))])]),_:2},1032,["predicate","items"])]),_:2},1024)):k("",!0),a(),c(A,{class:"mt-2",code:P(z).stringify(r.raw),language:"yaml","show-copy-button":!1},null,8,["code"])]))),128))])]))),128))])]),_:2},1032,["predicate","items"])):(e(),u(S,{key:1,predicate:p=>p.ruleType==="to"&&!["MeshHTTPRoute","MeshTCPRoute"].includes(p.type)&&p.matchers.every(s=>s.key==="kuma.io/service"&&(s.not?s.value!==R:s.value===R)),items:x.rules},{default:t(({items:p})=>[i("div",oe,[c(G,{"initially-open":0,"multiple-open":"",class:"stack"},{default:t(()=>[(e(!0),o(d,null,h(Object.groupBy(p,s=>s.type),(s,y)=>(e(),u(I,{key:y},{default:t(()=>[c(Q,null,{"accordion-header":t(()=>[c(L,{"policy-type":y},{default:t(()=>[a(_(y)+" ("+_(s.length)+`)
                                  `,1)]),_:2},1032,["policy-type"])]),"accordion-content":t(()=>[i("div",ne,[(e(!0),o(d,null,h(s,r=>(e(),o(d,{key:r},[r.matchers.length>0?(e(),u(g,{key:0,layout:"horizontal"},{title:t(()=>[a(`
                                          From
                                        `)]),body:t(()=>[i("p",null,[c(U,{items:r.matchers},null,8,["items"])])]),_:2},1024)):k("",!0),a(),r.origins.length>0?(e(),u(g,{key:1,layout:"horizontal"},{title:t(()=>[a(`
                                          Origin Policies
                                        `)]),body:t(()=>[i("ul",null,[(e(!0),o(d,null,h(r.origins,l=>(e(),o("li",{key:`${l.mesh}-${l.name}`},[v[l.type]?(e(),u(N,{key:0,to:{name:"policy-detail-view",params:{mesh:l.mesh,policyPath:v[l.type][0].path,policy:l.name}}},{default:t(()=>[a(_(l.name),1)]),_:2},1032,["to"])):(e(),o(d,{key:1},[a(_(l.name),1)],64))]))),128))])]),_:2},1024)):k("",!0),a(),i("div",null,[se,a(),i("dd",re,[i("div",null,[c(A,{code:P(z).stringify(r.raw),language:"yaml","show-copy-button":!1},null,8,["code"])])])])],64))),128))])]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)])]),_:2},1032,["predicate","items"]))]),_:2},1032,["src"]))),128))]),_:2},1024)])):k("",!0)]))),128))]),_:2},1024)]),_:1})}}}),me=Y(ce,[["__scopeId","data-v-0469c87f"]]);export{me as default};
