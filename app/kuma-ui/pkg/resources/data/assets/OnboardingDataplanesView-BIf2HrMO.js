import{L as y}from"./LoadingBox-xzDGa66s.js";import{O as V,a as D,b as N}from"./OnboardingPage-BjFVU4-F.js";import{d as O,e as a,o as r,m as d,w as t,a as s,b as i,c as p,H as g,J as _,t as m,k as u,S,p as B,q as L}from"./index-B_icS-nL.js";const T={class:"status-loading-box mb-4"},C={key:0},R=O({__name:"OnboardingDataplanesView",setup(P){return($,o)=>{const b=a("RouteTitle"),w=a("KTable"),v=a("DataLoader"),f=a("DataSource"),h=a("AppView"),k=a("RouteView");return r(),d(k,{name:"onboarding-dataplanes-view"},{default:t(({t:c})=>[s(b,{title:c("onboarding.routes.dataplanes-overview.title"),render:!1},null,8,["title"]),o[5]||(o[5]=i()),s(h,null,{default:t(()=>[s(f,{src:"/dataplanes/poll?page=1&size=10"},{default:t(({data:e,error:x})=>[(r(!0),p(g,null,_([(e==null?void 0:e.items.length)===0||(e==null?void 0:e.items.some(l=>l.status!=="online"))],l=>(r(),d(V,{key:l},{header:t(()=>[(r(!0),p(g,null,_([l?"waiting":"success"],n=>(r(),d(D,{key:n,"data-testid":`state-${n}`},{title:t(()=>[i(m(c(`onboarding.routes.dataplanes-overview.header.${n}.title`)),1)]),description:t(()=>[u("p",null,m(c(`onboarding.routes.dataplanes-overview.header.${n}.description`)),1)]),_:2},1032,["data-testid"]))),128))]),content:t(()=>[s(v,{data:[e],errors:[x]},{connecting:t(()=>[u("div",T,[s(y)])]),default:t(()=>[o[2]||(o[2]=i()),e?(r(),p("div",C,[u("p",null,[u("strong",null,`
                      Found `+m(e.items.length)+` DPPs:
                    `,1)]),o[1]||(o[1]=i()),s(w,{class:"mb-4","data-testid":"dataplanes-table","fetcher-cache-key":JSON.stringify(e),fetcher:(n=>()=>({data:n.items,total:n.items.length}))(e),headers:[{label:"Mesh",key:"mesh"},{label:"Name",key:"name"},{label:"Status",key:"status"}],"disable-pagination":""},{status:t(({row:n})=>[s(S,{status:n.status},null,8,["status"])]),_:2},1032,["fetcher-cache-key","fetcher"])])):B("",!0)]),_:2},1032,["data","errors"])]),navigation:t(()=>[s(N,{"next-step":"onboarding-completed-view","previous-step":"onboarding-add-new-services-code-view","should-allow-next":((e==null?void 0:e.items)??[]).length>0},null,8,["should-allow-next"])]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)]),_:1})}}}),J=L(R,[["__scopeId","data-v-0fcb3c79"]]);export{J as default};
