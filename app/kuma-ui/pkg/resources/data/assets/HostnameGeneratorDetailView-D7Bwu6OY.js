import{$ as E}from"./app-layout.es-DMKPXdDK.js";import{d as N,e as n,o as s,m as l,w as e,a,b as c,l as p,O as y,k as _,c as d,H as f,J as C,P as R,t as D,p as V,q as $}from"./index-B_icS-nL.js";import{_ as H}from"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-BVH5s-Sl.js";const A={class:"stack"},G={class:"columns"},O=N({__name:"HostnameGeneratorDetailView",setup(j){return(q,o)=>{const g=n("RouteTitle"),k=n("XCopyButton"),x=n("XBadge"),B=n("XLayout"),L=n("DataSource"),b=n("AppView"),S=n("DataLoader"),T=n("RouteView");return s(),l(T,{name:"hostname-generator-detail-view",params:{name:""}},{default:e(({route:h,t:r,uri:v})=>[a(g,{title:r("hostname-generators.routes.items.title"),render:!1},null,8,["title"]),o[4]||(o[4]=c()),a(S,{src:v(p(y),"/hostname-generators/:name",{name:h.params.name})},{default:e(({data:t})=>[a(b,{docs:r("hostname-generators.href.docs")},{title:e(()=>[_("h1",null,[a(k,{text:t.name},{default:e(()=>[a(g,{title:r("hostname-generators.routes.item.title",{name:t.name})},null,8,["title"])]),_:2},1032,["text"])])]),default:e(()=>[o[3]||(o[3]=c()),_("div",A,[a(p(E),{title:r("hostname-generators.routes.item.subtitle",{name:t.name}),created:r("common.formats.datetime",{value:Date.parse(t.creationTime)}),modified:r("common.formats.datetime",{value:Date.parse(t.modificationTime)})},{default:e(()=>[_("div",G,[(s(!0),d(f,null,C([{...t.spec.selector.meshService.matchLabels,...t.spec.selector.meshExternalService.matchLabels,...t.spec.selector.meshMultiZoneService.matchLabels}],m=>(s(),d(f,{key:typeof m},[Object.keys(m).length?(s(),l(R,{key:0},{title:e(()=>o[0]||(o[0]=[c(`
                    Tags
                  `)])),body:e(()=>[a(B,{type:"separated"},{default:e(()=>[(s(!0),d(f,null,C(m,(u,i)=>(s(),l(x,{key:i},{default:e(()=>[c(D(i)+":"+D(u),1)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)):V("",!0)],64))),128))])]),_:2},1032,["title","created","modified"]),o[2]||(o[2]=c()),a(H,{resource:t.$raw},{default:e(({copy:m,copying:u})=>[u?(s(),l(L,{key:0,src:v(p(y),"/hostname-generators/:name/as/kubernetes",{name:h.params.name},{cacheControl:"no-store"}),onChange:i=>{m(w=>w(i))},onError:i=>{m((w,X)=>X(i))}},null,8,["src","onChange","onError"])):V("",!0)]),_:2},1032,["resource"])])]),_:2},1032,["docs"])]),_:2},1032,["src"])]),_:1})}}}),M=$(O,[["__scopeId","data-v-48c95b36"]]);export{M as default};
