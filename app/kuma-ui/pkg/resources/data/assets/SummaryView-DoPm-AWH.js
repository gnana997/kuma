import{a5 as v,a6 as b,U as k,a7 as g,a8 as _,a9 as x,aa as L,d as O,ab as T,ac as I,v as P,ad as V,e as E,o as N,m as $,w as S,a as q,l as B,b as R,r as W,q as F}from"./index-B_icS-nL.js";const C=x?window:void 0;function y(r){var a;const s=_(r);return(a=s==null?void 0:s.$el)!=null?a:s}function h(...r){let a,s,t,m;if(typeof r[0]=="string"||Array.isArray(r[0])?([s,t,m]=r,a=C):[a,s,t,m]=r,!a)return v;Array.isArray(s)||(s=[s]),Array.isArray(t)||(t=[t]);const d=[],l=()=>{d.forEach(i=>i()),d.length=0},n=(i,f,w,e)=>(i.addEventListener(f,w,e),()=>i.removeEventListener(f,w,e)),u=k(()=>[y(a),_(m)],([i,f])=>{if(l(),!i)return;const w=g(f)?{...f}:f;d.push(...s.flatMap(e=>t.map(o=>n(i,e,o,w))))},{immediate:!0,flush:"post"}),p=()=>{u(),l()};return L(p),p}let A=!1;function K(r,a,s={}){const{window:t=C,ignore:m=[],capture:d=!0,detectIframe:l=!1}=s;if(!t)return v;b&&!A&&(A=!0,Array.from(t.document.body.children).forEach(e=>e.addEventListener("click",v)),t.document.documentElement.addEventListener("click",v));let n=!0;const u=e=>_(m).some(o=>{if(typeof o=="string")return Array.from(t.document.querySelectorAll(o)).some(c=>c===e.target||e.composedPath().includes(c));{const c=y(o);return c&&(e.target===c||e.composedPath().includes(c))}}),p=e=>{const o=y(r);if(!(!o||o===e.target||e.composedPath().includes(o))){if(e.detail===0&&(n=!u(e)),!n){n=!0;return}a(e)}};let i=!1;const f=[h(t,"click",e=>{i||(i=!0,setTimeout(()=>{i=!1},0),p(e))},{passive:!0,capture:d}),h(t,"pointerdown",e=>{const o=y(r);n=!u(e)&&!!(o&&!e.composedPath().includes(o))},{passive:!0}),l&&h(t,"blur",e=>{setTimeout(()=>{var o;const c=y(r);((o=t.document.activeElement)==null?void 0:o.tagName)==="IFRAME"&&!(c!=null&&c.contains(t.document.activeElement))&&a(e)},0)})].filter(Boolean);return()=>f.forEach(e=>e())}const M=O({__name:"SummaryView",props:{width:{default:"560px"}},emits:["close"],setup(r,{emit:a}){const s=T("summary-view-title");I("app-summary-view",s);const t=P(null);K(t,V(l=>{var u;const n=l.target;(((u=window.getSelection())==null?void 0:u.isCollapsed)??!0)&&!l.defaultPrevented&&l.isTrusted&&n.nodeName.toLowerCase()!=="a"&&d("close")},1,!0,!1));const m=r,d=a;return(l,n)=>{const u=E("XTeleportSlot"),p=E("KSlideout");return N(),$(p,{ref_key:"slideOutRef",ref:t,class:"summary-slideout","close-on-blur":!1,"has-overlay":!1,visible:"","max-width":m.width,"offset-top":"var(--app-slideout-offset-top, 0)","data-testid":"summary",onClose:n[0]||(n[0]=i=>d("close"))},{title:S(()=>[q(u,{name:B(s)},null,8,["name"])]),default:S(()=>[n[1]||(n[1]=R()),W(l.$slots,"default",{},void 0,!0)]),_:3},8,["max-width"])}}}),j=F(M,[["__scopeId","data-v-0b1b5d96"]]);export{j as S};
