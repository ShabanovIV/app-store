"use strict";(self.webpackChunkapp_store=self.webpackChunkapp_store||[]).push([[49],{5049:(e,t,s)=>{s.r(t),s.d(t,{default:()=>h});var r=s(4848),n=s(6540),a=s(6552),i=s(2702),o=s(4716),c=s(4753),d=s(9473),u=s(294),l=s(5651),m=s(8863);const f=({footerItem:e})=>{const t=(0,c.Zp)(),s=(0,n.useCallback)(((e,t)=>(0,d.Wm)({pagination:e,sorting:{type:"ASC",field:"createdAt"}},{skip:t})),[]),f=(0,n.useCallback)((({category:t,onClick:s})=>({key:t.id,render:()=>(0,r.jsx)(d.rm,{category:t,onClick:s?()=>s(t.id):void 0,footer:e})})),[e]),h=(0,n.useCallback)((e=>f({category:e,onClick:()=>t(`${u.bw.products.basePath}${e.id}`)})),[f]),{hasMore:g,isFetching:p,items:C,handleLastItem:I}=(0,l.D)({fetchFunction:s,convertItem:h});return(0,r.jsxs)("div",{className:"CategoryList-module_container-JHTbf",children:[(0,r.jsx)(m.A,{items:C,onLastItem:I}),(!g||p)&&(0,r.jsx)(a.A,{}),!g&&(0,r.jsx)(i.A,{className:"CategoryList-module_end-M57dM",children:"Все категории загружены"}),p&&(0,r.jsx)(o.A,{})]})},h=()=>(0,r.jsx)("div",{className:"CategoryPage-module_page-FRD00",children:(0,r.jsx)(f,{})})},7231:(e,t,s)=>{s.d(t,{u:()=>i});var r=s(6540),n=s(3448),a=s(5515);const i=({form:e,error:t})=>{const{showError:s}=(0,n.J)();(0,r.useEffect)((()=>{if(t){(0,a.jS)(t),e&&e.setFields((0,a.z6)(t));const r=(0,a.bu)(t);r&&s(r)}}),[t,e,s])}},3448:(e,t,s)=>{s.d(t,{J:()=>a});var r=s(6540),n=s(582);const a=()=>{const e=(0,r.useContext)(n.N);if(!e)throw new Error("useMessage должен использоваться внутри <MessageProvider>");return e}},5651:(e,t,s)=>{s.d(t,{D:()=>a});var r=s(6540),n=s(7231);const a=({fetchFunction:e,convertItem:t})=>{const s=(0,r.useRef)([]),[a,i]=(0,r.useState)(1),[o,c]=(0,r.useState)(!0),[d,u]=(0,r.useState)([]),{data:l,isFetching:m,isLoading:f,error:h,refetch:g}=e({pageSize:10,pageNumber:a},0===a||s.current.includes(a));(0,n.u)({error:h});const p=(0,r.useCallback)((()=>{o&&!m&&i((e=>e+1))}),[o,m]);return(0,r.useEffect)((()=>{f&&m&&u([])}),[m,f]),(0,r.useEffect)((()=>{l&&l.data.length>0&&!s.current.includes(a)&&l.pagination.pageNumber===a?(s.current.push(a),u((e=>[...e,...l.data.map((e=>t(e)))]))):l&&l.data.length<10&&c(!1)}),[t,l,a]),{isFetching:m,hasMore:o,items:d,refetch:g,handleLastItem:p}}},4274:(e,t,s)=>{s.d(t,{p:()=>a});var r=s(4848),n=s(6540);const a=({isGrid:e,items:t,lastItemRef:s,onLastItemChanged:n})=>0===t.length?(0,r.jsx)("div",{className:"RenderList-module_empty-VeKxm",children:"No items to display"}):(0,r.jsx)("ul",{className:void 0===e||e?"RenderList-module_listGrid-VEEh9":"RenderList-module_list-BF_R0",children:t.map(((e,a)=>(0,r.jsx)(o,{item:e,ref:c({items:t,index:a,lastItemRef:s,onLastItemChanged:n})},e.key)))}),i=(0,n.forwardRef)((({item:e},t)=>(0,r.jsx)("li",{id:e.key,ref:t,className:"RenderList-module_listItem-d2Xxn",children:e.render()})));i.displayName="ItemRef";const o=(0,n.memo)(i),c=({items:e,index:t,lastItemRef:s,onLastItemChanged:r})=>n=>{t===e.length-1&&s&&(s.current=n,r&&r(e[e.length-1].key))}},8863:(e,t,s)=>{s.d(t,{A:()=>i});var r=s(4848),n=s(6540),a=s(4274);const i=({items:e,onLastItem:t})=>{const[s,i]=(0,n.useState)(""),o=(0,n.useRef)(""),c=(0,n.useRef)(null),d=(0,n.useRef)(!1),u=(0,n.useCallback)((e=>{const s=e[0];(null==s?void 0:s.isIntersecting)&&!d.current&&(d.current=!0,t())}),[t]);return(0,n.useEffect)((()=>{if(s===o.current)return;o.current=s;const e=new IntersectionObserver(u,{threshold:.5}),t=c.current;return t&&e.observe(t),()=>{t&&e.unobserve(t)}}),[u,s]),(0,n.useEffect)((()=>{d.current=!1}),[s]),(0,r.jsx)(a.p,{items:e,lastItemRef:c,onLastItemChanged:i})}}}]);
//# sourceMappingURL=49.845e9fc9174e2bdae5d1.js.map