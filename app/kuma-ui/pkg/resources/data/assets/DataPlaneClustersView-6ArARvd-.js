import{_ as d}from"./EnvoyData.vue_vue_type_script_setup_true_lang-BeDaZHdG.js";import{d as i,i as t,o as m,a as u,w as o,j as n,g as _,k as h}from"./index-BmgyLxlv.js";import"./kong-icons.es350-DGOBbbJK.js";import"./CodeBlock-DA0aerL2.js";const y=i({__name:"DataPlaneClustersView",setup(g){return(f,x)=>{const s=t("RouteTitle"),r=t("KCard"),l=t("AppView"),p=t("RouteView");return m(),u(p,{name:"data-plane-clusters-view",params:{mesh:"",dataPlane:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:o(({route:e,t:c})=>[n(l,null,{title:o(()=>[_("h2",null,[n(s,{title:c("data-planes.routes.item.navigation.data-plane-clusters-view")},null,8,["title"])])]),default:o(()=>[h(),n(r,null,{default:o(()=>[n(d,{resource:"Data Plane Proxy",src:`/meshes/${e.params.mesh}/dataplanes/${e.params.dataPlane}/data-path/clusters`,query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:a=>e.update({codeSearch:a}),onFilterModeChange:a=>e.update({codeFilter:a}),onRegExpModeChange:a=>e.update({codeRegExp:a})},null,8,["src","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{y as default};
