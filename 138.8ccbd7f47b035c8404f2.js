"use strict";(self.webpackChunkapp_store=self.webpackChunkapp_store||[]).push([[138],{2138:(e,t,s)=>{s.r(t),s.d(t,{default:()=>g});var r=s(4848),n=s(515),i=s(4716),o=s(2702),a=s(6552),d=s(4753),l=s(2390),c=s(294),m=s(4274);var u=s(429),h=s(8931),p=s(7231),x=s(2565);const f=()=>{const{items:e,isFetching:t}=(()=>{var e;const t=(0,x.G)((e=>(0,h.cm)(e))),s=(0,x.G)((e=>(0,h.Fs)(e))),{data:r,isFetching:n,error:i}=(0,u.Kc)({ids:t},{refetchOnMountOrArgChange:!0});return(0,p.u)({error:i}),{items:0===t.length?[]:null!==(e=null==r?void 0:r.data.map((e=>({product:e,amount:s[e.id]}))))&&void 0!==e?e:[],isFetching:n}})(),s=(0,d.Zp)(),f=e.map((e=>({key:e.product.id,render:()=>(0,r.jsx)(l.m,{product:e.product,amount:e.amount})})));return(0,r.jsxs)("div",{className:"CartList-module_listWrapper-UM6Qt",children:[t&&(0,r.jsxs)(n.Ay.Group,{children:[(0,r.jsx)(i.A,{}),(0,r.jsx)(o.A,{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:"Cart loading..."})]}),(0,r.jsx)(m.p,{isGrid:!1,items:f}),(0,r.jsx)(a.A,{}),e.length>0&&(0,r.jsxs)(n.Ay.Group,{children:[(0,r.jsx)(n.Ay,{onClick:()=>s(c.bw.category.path),children:"Back to catalog"}),(0,r.jsx)(n.Ay,{onClick:()=>s(c.bw.checkout.path),children:"Proceed to Checkout"})]})]})},g=()=>(0,r.jsx)(f,{})},7231:(e,t,s)=>{s.d(t,{u:()=>o});var r=s(6540),n=s(3448),i=s(5515);const o=({form:e,error:t})=>{const{showError:s}=(0,n.J)();(0,r.useEffect)((()=>{if(t){(0,i.jS)(t),e&&e.setFields((0,i.z6)(t));const r=(0,i.bu)(t);r&&s(r)}}),[t,e,s])}},3448:(e,t,s)=>{s.d(t,{J:()=>i});var r=s(6540),n=s(582);const i=()=>{const e=(0,r.useContext)(n.N);if(!e)throw new Error("useMessage должен использоваться внутри <MessageProvider>");return e}},4274:(e,t,s)=>{s.d(t,{p:()=>i});var r=s(4848),n=s(6540);const i=({isGrid:e,items:t,lastItemRef:s,onLastItemChanged:n})=>0===t.length?(0,r.jsx)("div",{className:"RenderList-module_empty-VeKxm",children:"No items to display"}):(0,r.jsx)("ul",{className:void 0===e||e?"RenderList-module_listGrid-VEEh9":"RenderList-module_list-BF_R0",children:t.map(((e,i)=>(0,r.jsx)(a,{item:e,ref:d({items:t,index:i,lastItemRef:s,onLastItemChanged:n})},e.key)))}),o=(0,n.forwardRef)((({item:e},t)=>(0,r.jsx)("li",{id:e.key,ref:t,className:"RenderList-module_listItem-d2Xxn",children:e.render()})));o.displayName="ItemRef";const a=(0,n.memo)(o),d=({items:e,index:t,lastItemRef:s,onLastItemChanged:r})=>n=>{t===e.length-1&&s&&(s.current=n,r&&r(e[e.length-1].key))}}}]);
//# sourceMappingURL=138.8ccbd7f47b035c8404f2.js.map