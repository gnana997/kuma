import{d as R,e as a,o as s,m as i,w as o,a as n,k as u,P as f,b as l,c as g,H as h,J as C,t as v,p as B,q as D}from"./index-B_icS-nL.js";import{_ as F}from"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-BVH5s-Sl.js";const K={class:"stack"},P={class:"columns"},$=R({__name:"MeshMultiZoneServiceDetailView",props:{data:{}},setup(x){const d=x;return(S,t)=>{const V=a("KumaPort"),m=a("KTruncate"),w=a("XBadge"),b=a("KCard"),k=a("DataSource"),y=a("AppView"),E=a("RouteView");return s(),i(E,{name:"mesh-multi-zone-service-detail-view",params:{mesh:"",service:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:o(({route:r})=>[n(y,null,{default:o(()=>[u("div",K,[n(b,null,{default:o(()=>[u("div",P,[n(f,null,{title:o(()=>t[0]||(t[0]=[l(`
                Ports
              `)])),body:o(()=>[n(m,null,{default:o(()=>[(s(!0),g(h,null,C(d.data.spec.ports,e=>(s(),i(V,{key:e.port,port:{...e,targetPort:void 0}},null,8,["port"]))),128))]),_:1})]),_:1}),t[4]||(t[4]=l()),n(f,null,{title:o(()=>t[2]||(t[2]=[l(`
                Selector
              `)])),body:o(()=>[n(m,null,{default:o(()=>[(s(!0),g(h,null,C(S.data.spec.selector.meshService.matchLabels,(e,c)=>(s(),i(w,{key:`${c}:${e}`,appearance:"info"},{default:o(()=>[l(v(c)+":"+v(e),1)]),_:2},1024))),128))]),_:1})]),_:1})])]),_:1}),t[5]||(t[5]=l()),u("div",null,[n(F,{resource:d.data.config,"is-searchable":"",query:r.params.codeSearch,"is-filter-mode":r.params.codeFilter,"is-reg-exp-mode":r.params.codeRegExp,onQueryChange:e=>r.update({codeSearch:e}),onFilterModeChange:e=>r.update({codeFilter:e}),onRegExpModeChange:e=>r.update({codeRegExp:e})},{default:o(({copy:e,copying:c})=>[c?(s(),i(k,{key:0,src:`/meshes/${d.data.mesh}/mesh-multi-zone-service/${d.data.id}/as/kubernetes?no-store`,onChange:p=>{e(_=>_(p))},onError:p=>{e((_,M)=>M(p))}},null,8,["src","onChange","onError"])):B("",!0)]),_:2},1032,["resource","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])])])]),_:2},1024)]),_:1})}}}),T=D($,[["__scopeId","data-v-b51f7db2"]]);export{T as default};
