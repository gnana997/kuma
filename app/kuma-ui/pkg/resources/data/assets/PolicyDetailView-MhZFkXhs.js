import{d as P,r as i,o as c,m as p,w as e,b as n,k as _,Z as b,e as s,t as m,p as d,l as R,ay as L,A as N,c as x,L as B,E as X}from"./index-1cBNe2z9.js";import{S}from"./SummaryView-Dw-o_HTE.js";const Z={class:"columns"},E=_("h3",null,`
          Affected Data Plane Proxies
        `,-1),$=P({__name:"PolicyDetailView",props:{data:{}},setup(w){const r=w;return(G,K)=>{const u=i("XAction"),h=i("KCard"),y=i("RouterLink"),g=i("XActionGroup"),k=i("RouterView"),C=i("DataCollection"),v=i("DataLoader"),V=i("AppView"),A=i("RouteView");return c(),p(A,{name:"policy-detail-view",params:{page:1,size:50,s:"",mesh:"",policy:"",policyPath:"",dataPlane:""}},{default:e(({route:a,t:z,uri:D,can:f,me:l})=>[n(V,null,{default:e(()=>[f("use zones")&&r.data.zone?(c(),p(h,{key:0},{default:e(()=>[_("div",Z,[n(b,null,{title:e(()=>[s(`
              Zone
            `)]),body:e(()=>[n(u,{to:{name:"zone-cp-detail-view",params:{zone:r.data.zone}}},{default:e(()=>[s(m(r.data.zone),1)]),_:1},8,["to"])]),_:1})])]),_:1})):d("",!0),s(),_("div",null,[E,s(),n(h,{class:"mt-4"},{default:e(()=>[n(v,{src:D(R(L),"/meshes/:mesh/policy-path/:path/policy/:name/dataplanes",{mesh:a.params.mesh,path:a.params.policyPath,name:a.params.policy},{page:a.params.page,size:a.params.size})},{loadable:e(({data:t})=>[n(C,{type:"data-planes",items:(t==null?void 0:t.items)??[void 0],page:a.params.page,"page-size":a.params.size,total:t==null?void 0:t.total,onChange:a.update},{default:e(()=>[n(N,{headers:[{...l.get("headers.name"),label:"Name",key:"name"},{...l.get("headers.namespace"),label:"Namespace",key:"namespace"},...f("use zones")?[{...l.get("headers.zone"),label:"Zone",key:"zone"}]:[],{...l.get("headers.actions"),label:"Actions",key:"actions",hideLabel:!0}],items:t==null?void 0:t.items,"is-selected-row":o=>o.id===a.params.dataPlane,onResize:l.set},{name:e(({row:o})=>[n(y,{"data-action":"",to:{name:"data-plane-detail-view",params:{dataPlane:o.id}}},{default:e(()=>[s(m(o.name),1)]),_:2},1032,["to"])]),namespace:e(({row:o})=>[s(m(o.namespace),1)]),zone:e(({row:o})=>[o.zone?(c(),p(y,{key:0,to:{name:"zone-cp-detail-view",params:{zone:o.zone}}},{default:e(()=>[s(m(o.zone),1)]),_:2},1032,["to"])):(c(),x(B,{key:1},[s(m(z("common.collection.none")),1)],64))]),actions:e(({row:o})=>[n(g,null,{default:e(()=>[n(u,{to:{name:"data-plane-detail-view",params:{dataPlane:o.id}}},{default:e(()=>[s(m(z("common.collection.actions.view")),1)]),_:2},1032,["to"])]),_:2},1024)]),_:2},1032,["headers","items","is-selected-row","onResize"]),s(),n(k,null,{default:e(({Component:o})=>[a.child()?(c(),p(S,{key:0,onClose:q=>a.replace({params:{mesh:a.params.mesh},query:{page:a.params.page,size:a.params.size,s:a.params.s}})},{default:e(()=>[typeof t<"u"?(c(),p(X(o),{key:0,items:t.items},null,8,["items"])):d("",!0)]),_:2},1032,["onClose"])):d("",!0)]),_:2},1024)]),_:2},1032,["items","page","page-size","total","onChange"])]),_:2},1032,["src"])]),_:2},1024)])]),_:2},1024)]),_:1})}}});export{$ as default};
