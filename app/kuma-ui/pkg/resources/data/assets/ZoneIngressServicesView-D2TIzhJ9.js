import{d as g,e as s,o as h,m as f,w as o,a as t,b as a,A as b,t as n}from"./index-B_icS-nL.js";const C=g({__name:"ZoneIngressServicesView",props:{data:{}},setup(m){const i=m;return(k,r)=>{const p=s("RouteTitle"),l=s("XAction"),u=s("XActionGroup"),d=s("DataCollection"),v=s("KCard"),_=s("AppView"),w=s("RouteView");return h(),f(w,{name:"zone-ingress-services-view"},{default:o(({t:c})=>[t(p,{render:!1,title:c("zone-ingresses.routes.item.navigation.zone-ingress-services-view")},null,8,["title"]),r[4]||(r[4]=a()),t(_,null,{default:o(()=>[t(v,null,{default:o(()=>[t(d,{type:"services",items:i.data.zoneIngress.availableServices,total:i.data.zoneIngress.availableServices.length},{default:o(()=>[t(b,{"data-testid":"available-services-collection",headers:[{label:"Name",key:"name"},{label:"Mesh",key:"mesh"},{label:"Protocol",key:"protocol"},{label:"No. Instances",key:"instances"},{label:"Actions",key:"actions",hideLabel:!0}],items:i.data.zoneIngress.availableServices},{name:o(({row:e})=>[t(l,{to:{name:"service-detail-view",params:{mesh:e.mesh,service:e.tags["kuma.io/service"]}}},{default:o(()=>[a(n(e.tags["kuma.io/service"]),1)]),_:2},1032,["to"])]),mesh:o(({row:e})=>[t(l,{to:{name:"mesh-detail-view",params:{mesh:e.mesh}}},{default:o(()=>[a(n(e.mesh),1)]),_:2},1032,["to"])]),protocol:o(({row:e})=>[a(n(e.tags["kuma.io/protocol"]??c("common.collection.none")),1)]),instances:o(({row:e})=>[a(n(e.instances),1)]),actions:o(({row:e})=>[t(u,null,{default:o(()=>[t(l,{to:{name:"service-detail-view",params:{mesh:e.mesh,service:e.tags["kuma.io/service"]}}},{default:o(()=>[a(n(c("common.collection.actions.view")),1)]),_:2},1032,["to"])]),_:2},1024)]),_:2},1032,["items"])]),_:2},1032,["items","total"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{C as default};
