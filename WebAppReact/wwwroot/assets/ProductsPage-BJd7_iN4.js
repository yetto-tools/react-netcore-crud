import{c as _,b as z,r as s,u as A,j as t,d as L,M as V}from"./index-DG1w4pHT.js";import{u as E}from"./useFetchDataStore-ChHTupvS.js";import{A as p}from"./Endpoints-DaXX02vq.js";import{a as f}from"./TypesForm-DVNF-qTy.js";import{P as F}from"./ProductForm-CG9PUczB.js";import{S as I}from"./SeachInput-CRffsJyU.js";const O=_(r=>({productos:[],setProducts:l=>r({productos:l})})),K=()=>{const{t:r}=z(),[l,i]=s.useState(f),[x,g]=s.useState(""),[n,T]=s.useState(1),[u,H]=s.useState(25),[b,h]=s.useState(!1),{user:o}=A(e=>({user:e.user}));O(e=>({setProduct:e.setProduct}));const{callApi:w,data:R,getData:j,refreshData:m,loading:a,error:Z}=E(e=>({callApi:e.callApi,data:e.data,getData:e.getData,refreshData:e.refreshData,loading:e.loading,error:e.error}));j(`${p.products.url}/list?page_size=${u}&page_number=${n}`),s.useEffect(()=>{var e;(e=o==null?void 0:o.userData)!=null&&e.id_usuario&&i(d=>({...d,uid_creacion:o.userData.id_usuario}))},[o]);const c=s.useCallback(()=>{m(`${p.products.url}/list?page_size=${u}&page_number=${n}`)},[m,n,u]);s.useEffect(()=>{c()},[n,c]);const v=e=>{const{name:d,value:S,type:D,checked:N}=e.target,$=D==="checkbox"?N?1:0:S;i(M=>({...M,[d]:$}))},C=e=>{e.preventDefault(),w(`${p.products.url}/save`,"PUT",l)},y=()=>h(!0),P=()=>{i(f),h(!1)},k=e=>{e.preventDefault(),c()};return t.jsx(L,{children:t.jsxs("div",{className:"flex-1 w-full",children:[t.jsxs("section",{className:"bg-white px-4 pt-4 inline-flex justify-between items-center w-full border-b mb-4 ",children:[t.jsx("h1",{className:"text-2xl font-semibold mb-1 pr-4",children:r("products.title")}),t.jsx("span",{children:t.jsx("button",{className:"bg-orange-400 text-white p-1",value:"refresh",onClick:c,children:t.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 24 24",height:"16px",width:"16px",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"})})})})]}),t.jsx("section",{className:"w-full bg-white divide-y border-b pb-4 mb-2.5",children:t.jsxs("section",{className:"w-full px-5 mx-auto flex justify-between items-center",children:[t.jsx("div",{children:t.jsxs("button",{className:`max-w-24 w-full min-w-20 outline-green-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden group ${a?"bg-green-600/50":"bg-green-600 active:scale-95 shadow"}`,onClick:y,type:"submit",disabled:a,children:[r("categories.new"),t.jsx("div",{className:`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${a?"animate-shineInfinity":"group-hover:animate-shine"} `})]})}),t.jsxs("div",{className:"inline-flex",children:[t.jsx(I,{searchValue:x,setSearchValue:g}),t.jsxs("button",{className:`max-w-24 w-full min-w-20 outline-sky-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden group ${a?"bg-sky-600/50":"bg-sky-600 active:scale-95 shadow"}`,onClick:k,type:"button",disabled:a,children:[r("categories.search"),t.jsx("div",{className:`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${a?"animate-shineInfinity":"group-hover:animate-shine"} `})]})]})]})}),t.jsx(V,{isOpen:b,onClose:P,children:t.jsx(F,{loading:a,formValues:l,setFormValue:i,handleChange:v,handleSubmit:C})})]})})};export{K as default};
//# sourceMappingURL=ProductsPage-BJd7_iN4.js.map
