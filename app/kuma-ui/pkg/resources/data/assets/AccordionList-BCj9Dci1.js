import{d as p,ae as y,v as o,F as A,o as l,c,k as h,r,b as O,a as b,w as x,p as I,af as $,n as k,q as f,ac as B}from"./index-B_icS-nL.js";const C=["aria-expanded"],E={key:0,class:"accordion-item-content","data-testid":"accordion-item-content"},L=p({__name:"AccordionItem",setup(s){const e=y("parentAccordion"),t=o(null),n=A(()=>e===void 0?!1:e.multipleOpen&&Array.isArray(e.active.value)&&t.value!==null?e.active.value.includes(t.value):t.value===e.active.value);e!==void 0&&(t.value=e.count.value++);function i(){n.value?u():m()}function u(){e!==void 0&&(e.multipleOpen&&Array.isArray(e.active.value)&&t.value!==null?e.active.value.splice(e.active.value.indexOf(t.value),1):e.active.value=null)}function m(){e!==void 0&&(e.multipleOpen&&Array.isArray(e.active.value)&&t.value!==null?e.active.value.push(t.value):e.active.value=t.value)}function d(a){a instanceof HTMLElement&&(a.style.height=`${a.scrollHeight}px`)}function _(a){a instanceof HTMLElement&&(a.style.height="auto")}return(a,v)=>(l(),c("li",{class:k(["accordion-item",{active:n.value}])},[h("button",{class:"accordion-item-header",type:"button","aria-expanded":n.value?"true":"false","data-testid":"accordion-item-button",onClick:i},[r(a.$slots,"accordion-header",{},void 0,!0)],8,C),v[0]||(v[0]=O()),b($,{name:"accordion",onEnter:d,onAfterEnter:_,onBeforeLeave:d},{default:x(()=>[n.value?(l(),c("div",E,[r(a.$slots,"accordion-content",{},void 0,!0)])):I("",!0)]),_:3})],2))}}),g=f(L,[["__scopeId","data-v-53a0b6ce"]]),N={class:"accordion-list"},T=p({__name:"AccordionList",props:{initiallyOpen:{type:[Number,Array],required:!1,default:null},multipleOpen:{type:Boolean,required:!1,default:!1}},setup(s){const e=s,t=o(0),n=o(e.initiallyOpen!==null?e.initiallyOpen:e.multipleOpen?[]:null);return B("parentAccordion",{multipleOpen:e.multipleOpen,active:n,count:t}),(i,u)=>(l(),c("ul",N,[r(i.$slots,"default",{},void 0,!0)]))}}),q=f(T,[["__scopeId","data-v-bdbadd5e"]]);export{g as A,q as a};
