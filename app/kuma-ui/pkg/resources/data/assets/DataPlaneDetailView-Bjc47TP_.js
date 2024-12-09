import{d as K,I as W,G as X,o as s,p as b,w as i,c,H as dt,F as at,_ as A,e as I,l as o,r as M,b as n,k as pt,q as D,a as p,t as r,m,J as _,K as q,n as ct,E as mt,Y as ft,R as Q,Q as V,S as yt,W as gt,L as tt,V as vt,Z as _t,A as bt}from"./index-D8KcXOkO.js";import{q as kt}from"./kong-icons.es678-B-3d6QMe.js";import{S as xt}from"./SummaryView-D_bgd6KD.js";import{T as lt}from"./TagList-CJ9Lwxv3.js";const wt=["aria-hidden"],it='<path d="M15 18L21 12L15 6L13.6 7.4L17.2 11H3V13H17.2L13.6 16.6L15 18Z" fill="currentColor"/>',$t=K({__name:"ForwardIcon",props:{title:{type:String,required:!1,default:""},color:{type:String,required:!1,default:"currentColor"},display:{type:String,required:!1,default:"block"},decorative:{type:Boolean,required:!1,default:!1},size:{type:[Number,String],required:!1,default:W,validator:d=>{if(typeof d=="number"&&d>0)return!0;if(typeof d=="string"){const a=String(d).replace(/px/gi,""),e=Number(a);if(e&&!isNaN(e)&&Number.isInteger(e)&&e>0)return!0}return!1}},as:{type:String,required:!1,default:"span"},staticIds:{type:Boolean,default:!1}},setup(d){const a=d,e=X(()=>{if(typeof a.size=="number"&&a.size>0)return`${a.size}px`;if(typeof a.size=="string"){const v=String(a.size).replace(/px/gi,""),f=Number(v);if(f&&!isNaN(f)&&Number.isInteger(f)&&f>0)return`${f}px`}return W}),w=X(()=>({boxSizing:"border-box",color:a.color,display:a.display,flexShrink:"0",height:e.value,lineHeight:"0",width:e.value,pointerEvents:a.decorative?"none":void 0})),B=v=>{const f={},x=Math.random().toString(36).substring(2,12);return v.replace(/id="([^"]+)"/g,(T,$)=>{const L=`${x}-${$}`;return f[$]=L,`id="${L}"`}).replace(/#([^\s^")]+)/g,(T,$)=>f[$]?`#${f[$]}`:T)},t=v=>{const f={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;","`":"&#039;"};return v.replace(/[<>"'`]/g,x=>f[x])},k=`${a.title?`<title data-testid="kui-icon-svg-title">${t(a.title)}</title>`:""}${a.staticIds?it:B(it)}`;return(v,f)=>(s(),b(at(d.as),{"aria-hidden":d.decorative?"true":void 0,class:"kui-icon forward-icon","data-testid":"kui-icon-wrapper-forward-icon",style:dt(w.value),tabindex:d.decorative?"-1":void 0},{default:i(()=>[(s(),c("svg",{"aria-hidden":d.decorative?"true":void 0,"data-testid":"kui-icon-svg-forward-icon",fill:"none",height:"100%",role:"img",viewBox:"0 0 24 24",width:"100%",xmlns:"http://www.w3.org/2000/svg",innerHTML:k},null,8,wt))]),_:1},8,["aria-hidden","style","tabindex"]))}}),St=["aria-hidden"],st='<path d="M12 21V19H19V5H12V3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H12ZM10 17L8.625 15.55L11.175 13H3V11H11.175L8.625 8.45L10 7L15 12L10 17Z" fill="currentColor"/>',Ct=K({__name:"GatewayIcon",props:{title:{type:String,required:!1,default:""},color:{type:String,required:!1,default:"currentColor"},display:{type:String,required:!1,default:"block"},decorative:{type:Boolean,required:!1,default:!1},size:{type:[Number,String],required:!1,default:W,validator:d=>{if(typeof d=="number"&&d>0)return!0;if(typeof d=="string"){const a=String(d).replace(/px/gi,""),e=Number(a);if(e&&!isNaN(e)&&Number.isInteger(e)&&e>0)return!0}return!1}},as:{type:String,required:!1,default:"span"},staticIds:{type:Boolean,default:!1}},setup(d){const a=d,e=X(()=>{if(typeof a.size=="number"&&a.size>0)return`${a.size}px`;if(typeof a.size=="string"){const v=String(a.size).replace(/px/gi,""),f=Number(v);if(f&&!isNaN(f)&&Number.isInteger(f)&&f>0)return`${f}px`}return W}),w=X(()=>({boxSizing:"border-box",color:a.color,display:a.display,flexShrink:"0",height:e.value,lineHeight:"0",width:e.value,pointerEvents:a.decorative?"none":void 0})),B=v=>{const f={},x=Math.random().toString(36).substring(2,12);return v.replace(/id="([^"]+)"/g,(T,$)=>{const L=`${x}-${$}`;return f[$]=L,`id="${L}"`}).replace(/#([^\s^")]+)/g,(T,$)=>f[$]?`#${f[$]}`:T)},t=v=>{const f={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;","`":"&#039;"};return v.replace(/[<>"'`]/g,x=>f[x])},k=`${a.title?`<title data-testid="kui-icon-svg-title">${t(a.title)}</title>`:""}${a.staticIds?st:B(st)}`;return(v,f)=>(s(),b(at(d.as),{"aria-hidden":d.decorative?"true":void 0,class:"kui-icon gateway-icon","data-testid":"kui-icon-wrapper-gateway-icon",style:dt(w.value),tabindex:d.decorative?"-1":void 0},{default:i(()=>[(s(),c("svg",{"aria-hidden":d.decorative?"true":void 0,"data-testid":"kui-icon-svg-gateway-icon",fill:"none",height:"100%",role:"img",viewBox:"0 0 24 24",width:"100%",xmlns:"http://www.w3.org/2000/svg",innerHTML:k},null,8,St))]),_:1},8,["aria-hidden","style","tabindex"]))}}),It=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],Bt=["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],Tt=["b","kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],Nt=["b","kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],ot=(d,a,e)=>{let w=d;return typeof a=="string"||Array.isArray(a)?w=d.toLocaleString(a,e):(a===!0||e!==void 0)&&(w=d.toLocaleString(void 0,e)),w};function j(d,a){if(!Number.isFinite(d))throw new TypeError(`Expected a finite number, got ${typeof d}: ${d}`);a={bits:!1,binary:!1,space:!0,...a};const e=a.bits?a.binary?Nt:Tt:a.binary?Bt:It,w=a.space?" ":"";if(a.signed&&d===0)return` 0${w}${e[0]}`;const B=d<0,t=B?"-":a.signed?"+":"";B&&(d=-d);let k;if(a.minimumFractionDigits!==void 0&&(k={minimumFractionDigits:a.minimumFractionDigits}),a.maximumFractionDigits!==void 0&&(k={maximumFractionDigits:a.maximumFractionDigits,...k}),d<1){const T=ot(d,a.locale,k);return t+T+w+e[0]}const v=Math.min(Math.floor(a.binary?Math.log(d)/Math.log(1024):Math.log10(d)/3),e.length-1);d/=(a.binary?1024:1e3)**v,k||(d=d.toPrecision(3));const f=ot(Number(d),a.locale,k),x=e[v];return t+f+w+x}const qt={},zt={class:"card"},Dt={class:"title"},Lt={class:"body"};function Vt(d,a){const e=I("KCard");return s(),b(e,{class:"data-card"},{default:i(()=>[o("dl",null,[o("div",zt,[o("dt",Dt,[M(d.$slots,"title",{},void 0,!0)]),a[0]||(a[0]=n()),o("dd",Lt,[M(d.$slots,"default",{},void 0,!0)])])])]),_:3})}const ut=A(qt,[["render",Vt],["__scopeId","data-v-3f9a3cf3"]]),ht={class:"title"},Et={key:0},Mt={"data-testid":"grpc-success"},Ht={"data-testid":"grpc-failure"},Rt={"data-testid":"rq-2xx"},Kt={"data-testid":"rq-4xx"},Xt={"data-testid":"rq-5xx"},At={"data-testid":"connections-total"},Pt={key:0,"data-testid":"bytes-received"},Ut={key:1,"data-testid":"bytes-sent"},Ft=K({__name:"ConnectionCard",props:{protocol:{},service:{default:""},traffic:{default:void 0},direction:{default:"downstream"}},setup(d){const{t:a}=pt(),e=d,w=B=>{const t=B.target;if(B.isTrusted&&t.nodeName.toLowerCase()!=="a"){const k=t.closest(".service-traffic-card, a");if(k){const v=k.nodeName.toLowerCase()==="a"?k:k.querySelector("[data-action]");v!==null&&"click"in v&&typeof v.click=="function"&&v.click()}}};return(B,t)=>{const k=I("XBadge"),v=I("KSkeletonBox");return s(),b(ut,{class:"service-traffic-card",onClick:w},{title:i(()=>[e.service.length>0?(s(),b(lt,{key:0,tags:[{label:"kuma.io/service",value:e.service}]},null,8,["tags"])):D("",!0),t[1]||(t[1]=n()),o("div",ht,[p(k,{class:"protocol",appearance:e.protocol==="passthrough"?"success":"info"},{default:i(()=>[n(r(m(a)(`data-planes.components.service_traffic_card.protocol.${e.protocol}`,{},{defaultMessage:m(a)(`http.api.value.${e.protocol}`)})),1)]),_:1},8,["appearance"]),t[0]||(t[0]=n()),M(B.$slots,"default",{},void 0,!0)])]),default:i(()=>{var f,x,T,$,L,P,U,F,Z,G,O,S;return[t[22]||(t[22]=n()),e.traffic?(s(),c("dl",Et,[e.protocol==="passthrough"?(s(!0),c(_,{key:0},q([["http","tcp"].reduce((u,H)=>{var Y;const h=e.direction;return Object.entries(((Y=e.traffic)==null?void 0:Y[H])||{}).reduce((C,[E,J])=>[`${h}_cx_tx_bytes_total`,`${h}_cx_rx_bytes_total`].includes(E)?{...C,[E]:J+(C[E]??0)}:C,u)},{})],(u,H)=>(s(),c(_,{key:H},[o("div",null,[o("dt",null,r(m(a)("data-planes.components.service_traffic_card.tx")),1),t[2]||(t[2]=n()),o("dd",null,r(m(j)(u.downstream_cx_rx_bytes_total??0)),1)]),t[4]||(t[4]=n()),o("div",null,[o("dt",null,r(m(a)("data-planes.components.service_traffic_card.rx")),1),t[3]||(t[3]=n()),o("dd",null,r(m(j)(u.downstream_cx_tx_bytes_total??0)),1)])],64))),128)):e.protocol==="grpc"?(s(),c(_,{key:1},[o("div",Mt,[o("dt",null,r(m(a)("data-planes.components.service_traffic_card.grpc_success")),1),t[5]||(t[5]=n()),o("dd",null,r(m(a)("common.formats.integer",{value:(f=e.traffic.grpc)==null?void 0:f.success})),1)]),t[7]||(t[7]=n()),o("div",Ht,[o("dt",null,r(m(a)("data-planes.components.service_traffic_card.grpc_failure")),1),t[6]||(t[6]=n()),o("dd",null,r(m(a)("common.formats.integer",{value:(x=e.traffic.grpc)==null?void 0:x.failure})),1)])],64)):e.protocol.startsWith("http")?(s(),c(_,{key:2},[(s(!0),c(_,null,q([((T=e.traffic.http)==null?void 0:T[`${e.direction}_rq_1xx`])??0].filter(u=>u!==0),u=>(s(),c("div",{key:u,"data-testid":"rq-1xx"},[o("dt",null,r(m(a)("data-planes.components.service_traffic_card.1xx")),1),t[8]||(t[8]=n()),o("dd",null,r(m(a)("common.formats.integer",{value:u})),1)]))),128)),t[13]||(t[13]=n()),o("div",Rt,[o("dt",null,r(m(a)("data-planes.components.service_traffic_card.2xx")),1),t[9]||(t[9]=n()),o("dd",null,r(m(a)("common.formats.integer",{value:($=e.traffic.http)==null?void 0:$[`${e.direction}_rq_2xx`]})),1)]),t[14]||(t[14]=n()),(s(!0),c(_,null,q([((L=e.traffic.http)==null?void 0:L[`${e.direction}_rq_3xx`])??0].filter(u=>u!==0),u=>(s(),c("div",{key:u,"data-testid":"rq-3xx"},[o("dt",null,r(m(a)("data-planes.components.service_traffic_card.3xx")),1),t[10]||(t[10]=n()),o("dd",null,r(m(a)("common.formats.integer",{value:u})),1)]))),128)),t[15]||(t[15]=n()),o("div",Kt,[o("dt",null,r(m(a)("data-planes.components.service_traffic_card.4xx")),1),t[11]||(t[11]=n()),o("dd",null,r(m(a)("common.formats.integer",{value:(P=e.traffic.http)==null?void 0:P[`${e.direction}_rq_4xx`]})),1)]),t[16]||(t[16]=n()),o("div",Xt,[o("dt",null,r(m(a)("data-planes.components.service_traffic_card.5xx")),1),t[12]||(t[12]=n()),o("dd",null,r(m(a)("common.formats.integer",{value:(U=e.traffic.http)==null?void 0:U[`${e.direction}_rq_5xx`]})),1)])],64)):(s(),c(_,{key:3},[o("div",At,[o("dt",null,r(m(a)("data-planes.components.service_traffic_card.cx")),1),t[17]||(t[17]=n()),o("dd",null,r(m(a)("common.formats.integer",{value:(F=e.traffic.tcp)==null?void 0:F[`${e.direction}_cx_total`]})),1)]),t[20]||(t[20]=n()),typeof((Z=e.traffic.tcp)==null?void 0:Z[`${e.direction}_cx_tx_bytes_total`])<"u"?(s(),c("div",Pt,[o("dt",null,r(m(a)("data-planes.components.service_traffic_card.rx")),1),t[18]||(t[18]=n()),o("dd",null,r(m(j)((G=e.traffic.tcp)==null?void 0:G[`${e.direction}_cx_tx_bytes_total`])),1)])):D("",!0),t[21]||(t[21]=n()),typeof((O=e.traffic.tcp)==null?void 0:O[`${e.direction}_cx_rx_bytes_total`])<"u"?(s(),c("div",Ut,[o("dt",null,r(m(a)("data-planes.components.service_traffic_card.tx")),1),t[19]||(t[19]=n()),o("dd",null,r(m(j)((S=e.traffic.tcp)==null?void 0:S[`${e.direction}_cx_rx_bytes_total`])),1)])):D("",!0)],64))])):(s(),b(v,{key:1,width:"10"}))]}),_:3})}}}),et=A(Ft,[["__scopeId","data-v-82875ef3"]]),Zt={class:"body"},Gt=K({__name:"ConnectionGroup",props:{type:{}},setup(d){const a=d;return(e,w)=>{const B=I("KCard");return s(),b(B,{class:ct(["service-traffic-group",`type-${a.type}`])},{default:i(()=>[o("div",Zt,[M(e.$slots,"default",{},void 0,!0)])]),_:3},8,["class"])}}}),nt=A(Gt,[["__scopeId","data-v-a119a970"]]),Ot={class:"service-traffic"},Yt={class:"actions"},jt=K({__name:"ConnectionTraffic",setup(d){return(a,e)=>(s(),c("div",Ot,[o("div",Yt,[M(a.$slots,"actions",{},void 0,!0)]),e[0]||(e[0]=n()),p(ut,{class:"header"},{title:i(()=>[M(a.$slots,"title",{},void 0,!0)]),_:3}),e[1]||(e[1]=n()),M(a.$slots,"default",{},void 0,!0)]))}}),rt=A(jt,[["__scopeId","data-v-e6bd176c"]]),Wt={"data-testid":"dataplane-warnings"},Jt=["data-testid","innerHTML"],Qt={key:0,"data-testid":"warning-stats-loading"},te={class:"stack","data-testid":"dataplane-details"},ee={class:"stack"},ne={class:"columns"},ae={class:"status-with-reason"},ie={key:0,class:"columns"},se={class:"columns"},oe={"data-testid":"dataplane-mtls"},re={class:"columns"},de=["innerHTML"],le={key:0,"data-testid":"dataplane-subscriptions"},ue=K({__name:"DataPlaneDetailView",props:{data:{},mesh:{}},setup(d){const a=mt(),e=d,w=X(()=>e.data.warnings.concat(...e.data.isCertExpired?[{kind:"CERT_EXPIRED"}]:[]));return(B,t)=>{const k=I("XTimespan"),v=I("KTooltip"),f=I("DataCollection"),x=I("XAction"),T=I("KCard"),$=I("XEmptyState"),L=I("XLayout"),P=I("XInputSwitch"),U=I("RouterView"),F=I("XAlert"),Z=I("AppView"),G=I("DataSource"),O=I("RouteView");return s(),b(O,{params:{mesh:"",dataPlane:"",subscription:"",inactive:!1},name:"data-plane-detail-view"},{default:i(({route:S,t:u,can:H,me:h,uri:Y})=>[p(G,{src:Y(m(ft),"/meshes/:mesh/dataplanes/:name/stats/:address",{mesh:S.params.mesh,name:S.params.dataPlane,address:e.data.dataplane.networking.inboundAddress})},{default:i(({data:C,error:E,refresh:J})=>[p(Z,null,Q({default:i(()=>[t[52]||(t[52]=n()),o("div",te,[p(T,null,{default:i(()=>[o("div",ee,[p(k,{start:u("common.formats.datetime",{value:Date.parse(e.data.creationTime)}),end:u("common.formats.datetime",{value:Date.parse(e.data.modificationTime)})},null,8,["start","end"]),t[18]||(t[18]=n()),o("div",ne,[p(V,null,{title:i(()=>[n(r(u("http.api.property.status")),1)]),body:i(()=>[o("div",ae,[p(yt,{status:e.data.status},null,8,["status"]),t[4]||(t[4]=n()),e.data.dataplaneType==="standard"?(s(),b(f,{key:0,items:e.data.dataplane.networking.inbounds,predicate:l=>l.state!=="Ready",empty:!1},{default:i(({items:l})=>[p(v,{class:"reason-tooltip"},{content:i(()=>[o("ul",null,[(s(!0),c(_,null,q(l,y=>(s(),c("li",{key:`${y.service}:${y.port}`},r(u("data-planes.routes.item.unhealthy_inbound",{service:y.service,port:y.port})),1))),128))])]),default:i(()=>[p(m(kt),{color:m(gt),size:m(tt)},null,8,["color","size"]),t[3]||(t[3]=n())]),_:2},1024)]),_:2},1032,["items","predicate"])):D("",!0)])]),_:2},1024),t[12]||(t[12]=n()),H("use zones")&&e.data.zone?(s(),b(V,{key:0},{title:i(()=>t[6]||(t[6]=[n(`
                    Zone
                  `)])),body:i(()=>[p(x,{to:{name:"zone-cp-detail-view",params:{zone:e.data.zone}}},{default:i(()=>[n(r(e.data.zone),1)]),_:1},8,["to"])]),_:1})):D("",!0),t[13]||(t[13]=n()),p(V,null,{title:i(()=>t[8]||(t[8]=[n(`
                    Type
                  `)])),body:i(()=>[n(r(u(`data-planes.type.${e.data.dataplaneType}`)),1)]),_:2},1024),t[14]||(t[14]=n()),e.data.namespace.length>0?(s(),b(V,{key:1},{title:i(()=>t[10]||(t[10]=[n(`
                    Namespace
                  `)])),body:i(()=>[n(r(e.data.namespace),1)]),_:1})):D("",!0)]),t[19]||(t[19]=n()),e.data.dataplane.networking.gateway?(s(),c("div",ie,[p(V,null,{title:i(()=>[n(r(u("http.api.property.tags")),1)]),body:i(()=>[p(lt,{tags:e.data.dataplane.networking.gateway.tags},null,8,["tags"])]),_:2},1024),t[17]||(t[17]=n()),p(V,null,{title:i(()=>[n(r(u("http.api.property.address")),1)]),body:i(()=>[p(vt,{text:`${e.data.dataplane.networking.address}`},null,8,["text"])]),_:2},1024)])):D("",!0)])]),_:2},1024),t[48]||(t[48]=n()),p(T,{class:"traffic","data-testid":"dataplane-traffic"},{default:i(()=>[o("div",se,[p(rt,null,{title:i(()=>[p(m($t),{display:"inline-block",decorative:"",size:m(tt)},null,8,["size"]),t[20]||(t[20]=n(`
                  Inbounds
                `))]),default:i(()=>[t[22]||(t[22]=n()),p(nt,{type:"inbound","data-testid":"dataplane-inbounds"},{default:i(()=>[(s(!0),c(_,null,q([e.data.dataplane.networking.type==="gateway"?Object.entries((C==null?void 0:C.inbounds)??{}).reduce((l,[y,g])=>{var z;const N=y.split("_").at(-1);return N===(((z=e.data.dataplane.networking.admin)==null?void 0:z.port)??"9901")?l:l.concat([{...e.data.dataplane.networking.inbounds[0],name:y,port:Number(N),protocol:["http","tcp"].find(R=>typeof g[R]<"u")??"tcp",addressPort:`${e.data.dataplane.networking.inbounds[0].address}:${N}`}])},[]):e.data.dataplane.networking.inbounds],l=>(s(),b(f,{key:l,items:l,predicate:y=>y.port!==49151},Q({default:i(({items:y})=>[p(L,{type:"stack",size:"small"},{default:i(()=>[(s(!0),c(_,null,q(y,g=>(s(),c(_,{key:`${g.name}`},[(s(!0),c(_,null,q([C==null?void 0:C.inbounds[g.name]],N=>(s(),b(et,{key:N,"data-testid":"dataplane-inbound",protocol:g.protocol,service:H("use service-insights",e.mesh)?g.tags["kuma.io/service"]:"",traffic:typeof E>"u"?N:{name:"",protocol:g.protocol,port:`${g.port}`}},{default:i(()=>[p(x,{"data-action":"",to:{name:(z=>z.includes("bound")?z.replace("-outbound-","-inbound-"):"connection-inbound-summary-overview-view")(String(m(a).name)),params:{connection:g.name},query:{inactive:S.params.inactive}}},{default:i(()=>[n(r(g.name.replace("localhost","").replace("_",":")),1)]),_:2},1032,["to"])]),_:2},1032,["protocol","service","traffic"]))),128))],64))),128))]),_:2},1024)]),_:2},[e.data.dataplaneType==="delegated"?{name:"empty",fn:i(()=>[p($,null,{default:i(()=>[o("p",null,`
                            This proxy is a delegated gateway therefore `+r(u("common.product.name"))+` does not have any visibility into inbounds for this gateway.
                          `,1)]),_:2},1024)]),key:"0"}:void 0]),1032,["items","predicate"]))),128))]),_:2},1024)]),_:2},1024),t[32]||(t[32]=n()),p(rt,null,Q({title:i(()=>[p(m(Ct),{display:"inline-block",decorative:"",size:m(tt)},null,8,["size"]),t[26]||(t[26]=n()),t[27]||(t[27]=o("span",null,"Outbounds",-1))]),default:i(()=>[t[30]||(t[30]=n()),t[31]||(t[31]=n()),typeof E>"u"?(s(),c(_,{key:0},[typeof C>"u"?(s(),b(_t,{key:0})):(s(),c(_,{key:1},q(["upstream"],l=>(s(),c(_,{key:l},[p(nt,{type:"passthrough"},{default:i(()=>[p(et,{protocol:"passthrough",traffic:C.passthrough},{default:i(()=>t[28]||(t[28]=[n(`
                          Non mesh traffic
                        `)])),_:2},1032,["traffic"])]),_:2},1024),t[29]||(t[29]=n()),p(f,{predicate:S.params.inactive?void 0:([y,g])=>{var N,z;return((typeof g.tcp<"u"?(N=g.tcp)==null?void 0:N[`${l}_cx_rx_bytes_total`]:(z=g.http)==null?void 0:z[`${l}_rq_total`])??0)>0},items:Object.entries(C.outbounds)},{default:i(({items:y})=>[y.length>0?(s(),b(nt,{key:0,type:"outbound","data-testid":"dataplane-outbounds"},{default:i(()=>[(s(),c(_,null,q([/-([a-f0-9]){16}$/],g=>p(L,{key:g,type:"stack",size:"small"},{default:i(()=>[(s(!0),c(_,null,q(y,([N,z])=>(s(),b(et,{key:`${N}`,"data-testid":"dataplane-outbound",protocol:["grpc","http","tcp"].find(R=>typeof z[R]<"u")??"tcp",traffic:z,service:z.$resourceMeta.type===""?N.replace(g,""):void 0,direction:l},{default:i(()=>[p(x,{"data-action":"",to:{name:(R=>R.includes("bound")?R.replace("-inbound-","-outbound-"):"connection-outbound-summary-overview-view")(String(m(a).name)),params:{connection:N},query:{inactive:S.params.inactive}}},{default:i(()=>[n(r(N),1)]),_:2},1032,["to"])]),_:2},1032,["protocol","traffic","service","direction"]))),128))]),_:2},1024)),64))]),_:2},1024)):D("",!0)]),_:2},1032,["predicate","items"])],64))),64))],64)):(s(),b($,{key:1}))]),_:2},[C?{name:"actions",fn:i(()=>[p(P,{modelValue:S.params.inactive,"onUpdate:modelValue":l=>S.params.inactive=l,"data-testid":"dataplane-outbounds-inactive-toggle"},{label:i(()=>t[23]||(t[23]=[n(`
                      Show inactive
                    `)])),_:2},1032,["modelValue","onUpdate:modelValue"]),t[25]||(t[25]=n()),p(x,{action:"refresh",appearance:"primary",onClick:J},{default:i(()=>t[24]||(t[24]=[n(`
                    Refresh
                  `)])),_:2},1032,["onClick"])]),key:"0"}:void 0]),1024)])]),_:2},1024),t[49]||(t[49]=n()),p(U,null,{default:i(l=>[l.route.name!==S.name?(s(),b(xt,{key:0,width:"670px",onClose:function(){S.replace({name:"data-plane-detail-view",params:{mesh:S.params.mesh,dataPlane:S.params.dataPlane},query:{inactive:S.params.inactive?null:void 0}})}},{default:i(()=>[(s(),b(at(l.Component),{data:S.params.subscription.length>0?e.data.dataplaneInsight.subscriptions:l.route.name.includes("-inbound-")?e.data.dataplane.networking.inbounds:(C==null?void 0:C.outbounds)||{},"dataplane-overview":e.data},null,8,["data","dataplane-overview"]))]),_:2},1032,["onClose"])):D("",!0)]),_:2},1024),t[50]||(t[50]=n()),o("div",oe,[o("h2",null,r(u("data-planes.routes.item.mtls.title")),1),t[42]||(t[42]=n()),e.data.dataplaneInsight.mTLS?(s(!0),c(_,{key:0},q([e.data.dataplaneInsight.mTLS],l=>(s(),b(T,{key:l,class:"mt-4"},{default:i(()=>[o("div",re,[p(V,null,{title:i(()=>[n(r(u("data-planes.routes.item.mtls.expiration_time.title")),1)]),body:i(()=>[n(r(u("common.formats.datetime",{value:Date.parse(l.certificateExpirationTime)})),1)]),_:2},1024),t[38]||(t[38]=n()),p(V,null,{title:i(()=>[n(r(u("data-planes.routes.item.mtls.generation_time.title")),1)]),body:i(()=>[n(r(u("common.formats.datetime",{value:Date.parse(l.lastCertificateRegeneration)})),1)]),_:2},1024),t[39]||(t[39]=n()),p(V,null,{title:i(()=>[n(r(u("data-planes.routes.item.mtls.regenerations.title")),1)]),body:i(()=>[n(r(u("common.formats.integer",{value:l.certificateRegenerations})),1)]),_:2},1024),t[40]||(t[40]=n()),p(V,null,{title:i(()=>[n(r(u("data-planes.routes.item.mtls.issued_backend.title")),1)]),body:i(()=>[n(r(l.issuedBackend),1)]),_:2},1024),t[41]||(t[41]=n()),p(V,null,{title:i(()=>[n(r(u("data-planes.routes.item.mtls.supported_backends.title")),1)]),body:i(()=>[o("ul",null,[(s(!0),c(_,null,q(l.supportedBackends,y=>(s(),c("li",{key:y},r(y),1))),128))])]),_:2},1024)])]),_:2},1024))),128)):(s(),b(F,{key:1,class:"mt-4",appearance:"warning"},{default:i(()=>[o("div",{innerHTML:u("data-planes.routes.item.mtls.disabled")},null,8,de)]),_:2},1024))]),t[51]||(t[51]=n()),e.data.dataplaneInsight.subscriptions.length>0?(s(),c("div",le,[o("h2",null,r(u("data-planes.routes.item.subscriptions.title")),1),t[47]||(t[47]=n()),p(bt,{headers:[{...h.get("headers.instanceId"),label:u("http.api.property.instanceId"),key:"instanceId"},{...h.get("headers.version"),label:u("http.api.property.version"),key:"version"},{...h.get("headers.connected"),label:u("http.api.property.connected"),key:"connected"},{...h.get("headers.disconnected"),label:u("http.api.property.disconnected"),key:"disconnected"},{...h.get("headers.responses"),label:u("http.api.property.responses"),key:"responses"}],"is-selected-row":l=>l.id===S.params.subscription,items:e.data.dataplaneInsight.subscriptions.map((l,y,g)=>g[g.length-(y+1)]),onResize:h.set},{instanceId:i(({row:l})=>[p(x,{"data-action":"",to:{name:"data-plane-subscription-summary-view",params:{subscription:l.id}}},{default:i(()=>[n(r(l.controlPlaneInstanceId),1)]),_:2},1032,["to"])]),version:i(({row:l})=>{var y,g;return[n(r(((g=(y=l.version)==null?void 0:y.kumaDp)==null?void 0:g.version)??"-"),1)]}),connected:i(({row:l})=>[n(r(u("common.formats.datetime",{value:Date.parse(l.connectTime??"")})),1)]),disconnected:i(({row:l})=>[l.disconnectTime?(s(),c(_,{key:0},[n(r(u("common.formats.datetime",{value:Date.parse(l.disconnectTime)})),1)],64)):D("",!0)]),responses:i(({row:l})=>{var y;return[(s(!0),c(_,null,q([((y=l.status)==null?void 0:y.total)??{}],g=>(s(),c(_,null,[n(r(g.responsesSent)+"/"+r(g.responsesAcknowledged),1)],64))),256))]}),_:2},1032,["headers","is-selected-row","items","onResize"])])):D("",!0)])]),_:2},[w.value.length>0||E?{name:"notifications",fn:i(()=>[o("ul",Wt,[(s(!0),c(_,null,q(w.value,l=>(s(),c("li",{key:l.kind,"data-testid":`warning-${l.kind}`,innerHTML:u(`common.warnings.${l.kind}`,l.payload)},null,8,Jt))),128)),t[2]||(t[2]=n()),E?(s(),c("li",Qt,[t[0]||(t[0]=n(`
              The below view is not enhanced with runtime stats (Error loading stats: `)),o("strong",null,r(E.toString()),1),t[1]||(t[1]=n(`)
            `))])):D("",!0)])]),key:"0"}:void 0]),1024)]),_:2},1032,["src"])]),_:1})}}}),ye=A(ue,[["__scopeId","data-v-d20bb760"]]);export{ye as default};
