"use strict";(self.webpackChunkapp_store=self.webpackChunkapp_store||[]).push([[209],{6209:(e,t,s)=>{s.r(t),s.d(t,{default:()=>g});var r=s(4848),a=s(6540),n=s(6552),o=s(4716),c=s(4753),i=s(4556),d=s(1319);const l=({category:e,onClick:t})=>(0,r.jsxs)("div",{className:"CategoryCard-module_card-tskRF",children:[(0,r.jsx)("div",{className:"CategoryCard-module_cardTop-zwy1m",children:(0,r.jsx)("a",{href:"#",onClick:e=>e.preventDefault(),className:"CategoryCard-module_cardImage-pBC6p",children:(0,r.jsx)("img",{src:e.photo?e.photo:d,alt:e.name})})}),(0,r.jsx)("div",{className:"CategoryCard-module_cardBottom-iovfo",children:(0,r.jsx)("a",{href:"#",onClick:e=>{e.preventDefault(),e.stopPropagation(),t&&t()},className:"CategoryCard-module_cardTitle-C0cLW",children:e.name})})]});var u=s(294),m=s(5651),h=s(3358);const f=()=>{const e=(0,c.Zp)(),t=(0,a.useCallback)(((e,t)=>(0,i.Wm)({pagination:e,sorting:{type:"ASC",field:"createdAt"}},{skip:t})),[]),s=(0,a.useCallback)((t=>(({category:e,onClick:t})=>({key:e.id,render:()=>(0,r.jsx)(l,{category:e,onClick:t?()=>t(e.id):void 0})}))({category:t,onClick:()=>e(`${u.bw.products.basePath}${t.id}`)})),[]),{hasMore:d,isFetching:f,items:g,handleLastItem:p}=(0,m.D)({fetchFunction:t,convertItem:s});return(0,r.jsxs)("div",{className:"CategoryList-module_container-JHTbf",children:[(0,r.jsx)(h.A,{items:g,onLastItem:p}),!d&&(0,r.jsx)("p",{className:"CategoryList-module_end-M57dM",children:"Все категории загружены"}),f&&(0,r.jsx)(n.A,{}),f&&(0,r.jsx)(o.A,{})]})},g=()=>(0,r.jsx)("div",{className:"CategoryPage-module_page-FRD00",children:(0,r.jsx)(f,{})})},7231:(e,t,s)=>{s.d(t,{u:()=>o});var r=s(6540),a=s(3448),n=s(5515);const o=({form:e,error:t})=>{const{showError:s}=(0,a.J)();(0,r.useEffect)((()=>{if(t){(0,n.jS)(t),e&&e.setFields((0,n.z6)(t));const r=(0,n.bu)(t);r&&s(r)}}),[t,e,s])}},3448:(e,t,s)=>{s.d(t,{J:()=>n});var r=s(6540),a=s(582);const n=()=>{const e=(0,r.useContext)(a.N);if(!e)throw new Error("useMessage должен использоваться внутри <MessageProvider>");return e}},5651:(e,t,s)=>{s.d(t,{D:()=>n});var r=s(6540),a=s(7231);const n=({fetchFunction:e,convertItem:t})=>{const s=(0,r.useRef)([]),[n,o]=(0,r.useState)(1),[c,i]=(0,r.useState)(!0),[d,l]=(0,r.useState)([]),{data:u,isFetching:m,isLoading:h,error:f,refetch:g}=e({pageSize:10,pageNumber:n},0===n||s.current.includes(n));(0,a.u)({error:f});const p=(0,r.useCallback)((()=>{c&&!m&&o((e=>e+1))}),[c,m]);return(0,r.useEffect)((()=>{h&&m&&l([])}),[m,h]),(0,r.useEffect)((()=>{u&&u.data.length>0&&!s.current.includes(n)&&u.pagination.pageNumber===n?(s.current.push(n),l((e=>[...e,...u.data.map((e=>t(e)))]))):u&&u.data.length<10&&i(!1)}),[t,u,n]),{isFetching:m,hasMore:c,items:d,refetch:g,handleLastItem:p}}},3358:(e,t,s)=>{s.d(t,{A:()=>l});var r=s(4848),a=s(6540);const n={listGrid:"RenderList-module_listGrid-VEEh9",listItem:"RenderList-module_listItem-d2Xxn"},o=({items:e,lastItemRef:t,onLastItemChanged:s})=>0===e.length?(0,r.jsx)("div",{className:n.empty,children:"No items to display"}):(0,r.jsx)("ul",{className:n.listGrid,children:e.map(((a,n)=>(0,r.jsx)(i,{item:a,ref:d({items:e,index:n,lastItemRef:t,onLastItemChanged:s})},a.key)))}),c=(0,a.forwardRef)((({item:e},t)=>(0,r.jsx)("li",{id:e.key,ref:t,className:n.listItem,children:e.render()})));c.displayName="ItemRef";const i=(0,a.memo)(c),d=({items:e,index:t,lastItemRef:s,onLastItemChanged:r})=>a=>{t===e.length-1&&s&&(s.current=a,r(e[e.length-1].key))},l=({items:e,onLastItem:t})=>{const[s,n]=(0,a.useState)(""),c=(0,a.useRef)(""),i=(0,a.useRef)(null),d=(0,a.useRef)(!1),l=(0,a.useCallback)((e=>{const s=e[0];(null==s?void 0:s.isIntersecting)&&!d.current&&(d.current=!0,t())}),[t]);return(0,a.useEffect)((()=>{if(s===c.current)return;c.current=s;const e=new IntersectionObserver(l,{threshold:.5}),t=i.current;return t&&e.observe(t),()=>{t&&e.unobserve(t)}}),[l,s]),(0,a.useEffect)((()=>{d.current=!1}),[s]),(0,r.jsx)(o,{items:e,lastItemRef:i,onLastItemChanged:n})}}}]);
//# sourceMappingURL=209.9a90466f692f03236e78.js.map