import{_ as E}from"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-Cg1GFjdr.js";import{d as w,i,o,a as n,w as e,j as r,W as V,a4 as R,b as S,g as p,a1 as h,k as c,t as m,Y as $,e as f}from"./index-BmgyLxlv.js";import{T as b}from"./TagList-Bqo6ZJVE.js";import"./CodeBlock-DA0aerL2.js";import"./toYaml-DB9FPXFY.js";const B={key:2,class:"stack"},D={class:"columns"},j=w({__name:"ExternalServiceDetailView",setup(F){return(M,N)=>{const x=i("KCard"),_=i("DataSource"),v=i("AppView"),C=i("RouteView");return o(),n(C,{name:"external-service-detail-view",params:{mesh:"",service:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:e(({route:s,t:l})=>[r(v,null,{default:e(()=>[r(_,{src:`/meshes/${s.params.mesh}/external-services/${s.params.service}`},{default:e(({data:t,error:g})=>[g?(o(),n(V,{key:0,error:g},null,8,["error"])):t===void 0?(o(),n(R,{key:1})):(o(),S("div",B,[r(x,{"data-testid":"external-service-details"},{default:e(()=>[p("div",D,[r(h,null,{title:e(()=>[c(m(l("http.api.property.address")),1)]),body:e(()=>[r($,{text:t.networking.address},null,8,["text"])]),_:2},1024),c(),t.tags?(o(),n(h,{key:0},{title:e(()=>[c(m(l("http.api.property.tags")),1)]),body:e(()=>[r(b,{tags:t.tags},null,8,["tags"])]),_:2},1024)):f("",!0)])]),_:2},1024),c(),p("div",null,[p("h3",null,m(l("external-services.detail.config")),1),c(),r(E,{class:"mt-4","data-testid":"external-service-config",resource:t.config,"is-searchable":"",query:s.params.codeSearch,"is-filter-mode":s.params.codeFilter,"is-reg-exp-mode":s.params.codeRegExp,onQueryChange:a=>s.update({codeSearch:a}),onFilterModeChange:a=>s.update({codeFilter:a}),onRegExpModeChange:a=>s.update({codeRegExp:a})},{default:e(({copy:a,copying:k})=>[k?(o(),n(_,{key:0,src:`/meshes/${t.mesh}/external-services/${t.name}/as/kubernetes?no-store`,onChange:d=>{a(u=>u(d))},onError:d=>{a((u,y)=>y(d))}},null,8,["src","onChange","onError"])):f("",!0)]),_:2},1032,["resource","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])])]))]),_:2},1032,["src"])]),_:2},1024)]),_:1})}}});export{j as default};
