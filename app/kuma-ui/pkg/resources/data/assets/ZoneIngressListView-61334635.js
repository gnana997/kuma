import{d as A,u as E,r as o,v as S,A as x,D as Z,j as f,b,e as V,i as B,g as k,h as L,f as M,G as w,o as i}from"./index-e1c5e7d3.js";import{_ as O}from"./MultizoneInfo.vue_vue_type_script_setup_true_lang-9e04df89.js";import{_ as P}from"./ZoneIngressDetails.vue_vue_type_script_setup_true_lang-83298e86.js";import{D as q}from"./DataOverview-09d1adc1.js";import{u as C}from"./store-8a8250b5.js";import{u as F}from"./index-6b720421.js";import{Q as p}from"./QueryParameter-70743f73.js";import"./kongponents.es-76ff1c1d.js";import"./AccordionList-449025a7.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-3f44b51c.js";import"./EnvoyData-0f281f76.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-891380a6.js";import"./StatusInfo.vue_vue_type_script_setup_true_lang-46e64e03.js";import"./ErrorBlock-5df33d9f.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-edd83955.js";import"./SubscriptionHeader.vue_vue_type_script_setup_true_lang-f9d0774c.js";import"./TabsWidget-55e326a5.js";import"./datadogLogEvents-302eea7b.js";import"./TagList-c89678af.js";import"./StatusBadge-5e245606.js";const G={class:"zoneingresses"},Q={key:1,class:"kcard-stack"},R={class:"kcard-border"},U={key:0,class:"kcard-border"},fe=A({__name:"ZoneIngressListView",props:{selectedZoneIngressName:{type:[String,null],required:!1,default:null},offset:{type:Number,required:!1,default:0}},setup(z){const l=z,v=F(),D={title:"No Data",message:"There are no Zone Ingresses present."},g=E(),_=C(),u=o(!0),c=o(null),r=o({headers:[{label:"Status",key:"status"},{label:"Name",key:"entity"}],data:[]}),n=o(null),y=o(null),h=o(l.offset);S(()=>g.params.mesh,function(){g.name==="zone-ingress-list-view"&&m(0)}),x(function(){N(l.offset)});function N(e){_.getters["config/getMulticlusterStatus"]&&m(e)}async function m(e){var a;h.value=e,p.set("offset",e>0?e:null),u.value=!0,c.value=null;const t=w;try{const{items:s,next:d}=await v.getAllZoneIngressOverviews({size:t,offset:e});y.value=d,r.value.data=T(s??[]),await I({name:l.selectedZoneIngressName??((a=r.value.data[0])==null?void 0:a.entity.name)})}catch(s){r.value.data=[],n.value=null,s instanceof Error?c.value=s:console.error(s)}finally{u.value=!1}}function T(e){return e.map(t=>{const{name:a}=t,s={name:"zone-ingress-detail-view",params:{zoneIngress:a}},d=Z(t.zoneIngressInsight??{});return{entity:t,detailViewRoute:s,status:d}})}async function I({name:e}){if(e===void 0){n.value=null,p.set("zoneIngress",null);return}try{n.value=await v.getZoneIngressOverview({name:e}),p.set("zoneIngress",e)}catch(t){console.error(t)}}return(e,t)=>{var a;return i(),f("div",G,[b(_).getters["config/getMulticlusterStatus"]===!1?(i(),V(O,{key:0})):(i(),f("div",Q,[B("div",R,[k(q,{"selected-entity-name":(a=n.value)==null?void 0:a.name,"page-size":b(w),"is-loading":u.value,error:c.value,"empty-state":D,"table-data":r.value,"table-data-is-empty":r.value.data.length===0,next:y.value,"page-offset":h.value,onTableAction:I,onLoadData:m},null,8,["selected-entity-name","page-size","is-loading","error","table-data","table-data-is-empty","next","page-offset"])]),L(),n.value!==null?(i(),f("div",U,[k(P,{"zone-ingress-overview":n.value},null,8,["zone-ingress-overview"])])):M("",!0)]))])}}});export{fe as default};
