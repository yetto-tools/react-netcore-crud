import{c as U,b as _,r as t,u as z,j as s,d as A,M as L}from"./index-DNAOhUU0.js";import{u as V}from"./useFetchDataStore-Cln2Mnoz.js";import{A as h}from"./Endpoints-DaXX02vq.js";import{a as f}from"./TypesForm-DVNF-qTy.js";import{P as E}from"./ProductForm-DfGhb6EQ.js";import{S as F}from"./SeachInput-CKZumhQB.js";const I=U(r=>({users:[],setUsers:l=>r({users:l})})),K=()=>{const{t:r}=_(),[l,i]=t.useState(f),[x,g]=t.useState(""),[n,O]=t.useState(1),[u,T]=t.useState(25),[b,p]=t.useState(!1),{user:o}=z(e=>({user:e.user}));I(e=>({setProduct:e.setProduct}));const{callApi:w,data:H,getData:j,refreshData:m,loading:a,error:R}=V(e=>({callApi:e.callApi,data:e.data,getData:e.getData,refreshData:e.refreshData,loading:e.loading,error:e.error}));j(`${h.products.url}/list?page_size=${u}&page_number=${n}`),t.useEffect(()=>{var e;(e=o==null?void 0:o.userData)!=null&&e.id_usuario&&i(d=>({...d,uid_creacion:o.userData.id_usuario}))},[o]);const c=t.useCallback(()=>{m(`${h.products.url}/list?page_size=${u}&page_number=${n}`)},[m,n,u]);t.useEffect(()=>{c()},[n,c]);const v=e=>{const{name:d,value:D,type:N,checked:P}=e.target,$=N==="checkbox"?P?1:0:D;i(M=>({...M,[d]:$}))},C=e=>{e.preventDefault(),w(`${h.products.url}/save`,"PUT",l)},y=()=>p(!0),k=()=>{i(f),p(!1)},S=e=>{e.preventDefault(),c()};return s.jsx(A,{children:s.jsxs("div",{className:"flex-1 w-full",children:[s.jsxs("section",{className:"bg-white px-4 pt-4 inline-flex justify-between items-center w-full border-b mb-4 ",children:[s.jsx("h1",{className:"text-2xl font-semibold mb-1 pr-4",children:r("users.title")}),s.jsx("span",{children:s.jsx("button",{className:"bg-orange-400 text-white p-1",value:"refresh",onClick:c,children:s.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 24 24",height:"16px",width:"16px",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"})})})})]}),s.jsx("section",{className:"w-full bg-white divide-y border-b pb-4 mb-2.5",children:s.jsxs("section",{className:"w-full px-5 mx-auto flex justify-between items-center",children:[s.jsx("div",{children:s.jsxs("button",{className:`max-w-24 w-full min-w-20 outline-green-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden group ${a?"bg-green-600/50":"bg-green-600 active:scale-95 shadow"}`,onClick:y,type:"submit",disabled:a,children:[r("categories.new"),s.jsx("div",{className:`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${a?"animate-shineInfinity":"group-hover:animate-shine"} `})]})}),s.jsxs("div",{className:"inline-flex",children:[s.jsx(F,{searchValue:x,setSearchValue:g}),s.jsxs("button",{className:`max-w-24 w-full min-w-20 outline-sky-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden group ${a?"bg-sky-600/50":"bg-sky-600 active:scale-95 shadow"}`,onClick:S,type:"button",disabled:a,children:[r("categories.search"),s.jsx("div",{className:`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${a?"animate-shineInfinity":"group-hover:animate-shine"} `})]})]})]})}),s.jsx(L,{isOpen:b,onClose:k,children:s.jsx(E,{loading:a,formValues:l,setFormValue:i,handleChange:v,handleSubmit:C})})]})})};export{K as default};
//# sourceMappingURL=UsersPage-BUhdc64w.js.map
