import{ae as y,af as k,a6 as C,ag as x,ah as S,ai as L,aj as O,d as g,ak as I,G as T,al as b,i as v,o as V,a as N,w as _,j as P,A as $,k as j,h as B,ac as R,_ as W}from"./index-BmgyLxlv.js";function h(n){var r;const s=S(n);return(r=s==null?void 0:s.$el)!=null?r:s}const A=L?window:void 0;function w(...n){let r,s,t,d;if(typeof n[0]=="string"||Array.isArray(n[0])?([s,t,d]=n,r=A):[r,s,t,d]=n,!r)return y;Array.isArray(s)||(s=[s]),Array.isArray(t)||(t=[t]);const u=[],c=()=>{u.forEach(l=>l()),u.length=0},a=(l,f,e,o)=>(l.addEventListener(f,e,o),()=>l.removeEventListener(f,e,o)),m=C(()=>[h(r),S(d)],([l,f])=>{if(c(),!l)return;const e=x(f)?{...f}:f;u.push(...s.flatMap(o=>t.map(i=>a(l,o,i,e))))},{immediate:!0,flush:"post"}),p=()=>{m(),c()};return O(p),p}let E=!1;function q(n,r,s={}){const{window:t=A,ignore:d=[],capture:u=!0,detectIframe:c=!1}=s;if(!t)return y;k&&!E&&(E=!0,Array.from(t.document.body.children).forEach(e=>e.addEventListener("click",y)),t.document.documentElement.addEventListener("click",y));let a=!0;const m=e=>d.some(o=>{if(typeof o=="string")return Array.from(t.document.querySelectorAll(o)).some(i=>i===e.target||e.composedPath().includes(i));{const i=h(o);return i&&(e.target===i||e.composedPath().includes(i))}}),l=[w(t,"click",e=>{const o=h(n);if(!(!o||o===e.target||e.composedPath().includes(o))){if(e.detail===0&&(a=!m(e)),!a){a=!0;return}r(e)}},{passive:!0,capture:u}),w(t,"pointerdown",e=>{const o=h(n);a=!m(e)&&!!(o&&!e.composedPath().includes(o))},{passive:!0}),c&&w(t,"blur",e=>{setTimeout(()=>{var o;const i=h(n);((o=t.document.activeElement)==null?void 0:o.tagName)==="IFRAME"&&!(i!=null&&i.contains(t.document.activeElement))&&r(e)},0)})].filter(Boolean);return()=>l.forEach(e=>e())}const F=g({__name:"SummaryView",props:{width:{default:"560px"}},emits:["close"],setup(n,{emit:r}){const s=R("summary-view-title");I("app-summary-view",s);const t=T(null);q(t,b(c=>{const a=c.target;c.isTrusted&&a.nodeName.toLowerCase()!=="a"&&u("close")},1,!0,!1));const d=n,u=r;return(c,a)=>{const m=v("XTeleportSlot"),p=v("KSlideout");return V(),N(p,{ref_key:"slideOutRef",ref:t,class:"summary-slideout","close-on-blur":!1,"has-overlay":!1,visible:"","max-width":d.width,"offset-top":"var(--app-slideout-offset-top, 0)","data-testid":"summary",onClose:a[0]||(a[0]=l=>u("close"))},{title:_(()=>[P(m,{name:$(s)},null,8,["name"])]),default:_(()=>[j(),B(c.$slots,"default",{},void 0,!0)]),_:3},8,["max-width"])}}}),M=W(F,[["__scopeId","data-v-1aaecf49"]]);export{M as S};
