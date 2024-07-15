import{c as C,b as _,r as t,u as A,d as M,j as e,e as V,L as E,M as F}from"./index-CBYe1poJ.js";import{A as h}from"./Endpoints-DNNrLCYu.js";import{a as f}from"./TypesForm-DVNF-qTy.js";import{P as R}from"./ProductForm-BmHzc2QB.js";import{a as L,b as O,c as T,S as U,d as q}from"./SeachInput-mVfd0do3.js";const B=C(o=>({invoices:[],setInvoices:i=>o({invoices:i})})),ee=()=>{const{t:o}=_(),[i,r]=t.useState(f),[x,b]=t.useState(""),[l,G]=t.useState(1),[u,H]=t.useState(25),[g,p]=t.useState(!1),{user:n}=A(s=>({user:s.user}));B(s=>({setProduct:s.setProduct}));const{callApi:v,data:J,getData:w,refreshData:m,loading:a,error:K}=M(s=>({callApi:s.callApi,data:s.data,getData:s.getData,refreshData:s.refreshData,loading:s.loading,error:s.error}));w(`${h.products.url}/list?page_size=${u}&page_number=${l}`),t.useEffect(()=>{var s;(s=n==null?void 0:n.userData)!=null&&s.id_usuario&&r(d=>({...d,uid_creacion:n.userData.id_usuario}))},[n]);const c=t.useCallback(()=>{m(`${h.products.url}/list?page_size=${u}&page_number=${l}`)},[m,l,u]);t.useEffect(()=>{c()},[l,c]);const j=s=>{const{name:d,value:N,type:D,checked:P}=s.target,$=D==="checkbox"?P?1:0:N;r(z=>({...z,[d]:$}))},y=s=>{s.preventDefault(),v(`${h.products.url}/save`,"PUT",i)},S=()=>p(!0),k=()=>{r(f),p(!1)},I=s=>{s.preventDefault(),c()};return e.jsx(V,{children:e.jsxs("div",{className:"flex-1 w-full",children:[e.jsxs("section",{className:"bg-white px-4 pt-4 inline-flex justify-between items-center w-full border-b mb-4 ",children:[e.jsxs("h1",{className:"text-2xl font-semibold mb-1 pr-4 inline-flex items-center gap-2",children:[e.jsxs(E,{to:"/",children:[" ",o("home.title")]}),e.jsx(L,{}),e.jsx("span",{children:o("invoices.title")})]}),e.jsx("span",{children:e.jsx("button",{className:"bg-orange-400 text-white p-1 shadow hover:scale-95",value:"refresh",onClick:c,children:e.jsx(O,{})})})]}),e.jsx("section",{className:"w-full bg-white divide-y border-b pb-4 mb-2.5",children:e.jsxs("section",{className:"w-full px-5 mx-auto flex justify-between items-center",children:[e.jsx("div",{className:"w-44",children:e.jsxs("button",{className:`inline-flex gap-4 max-w-32 rounded-sm w-full min-w-20 outline-green-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden capitalize group ${a?"bg-green-600/50":"bg-green-600 active:scale-95 shadow"}`,onClick:S,type:"submit",disabled:a,children:[e.jsx(T,{}),o("categories.new"),e.jsx("div",{className:`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${a?"animate-shineInfinity":"group-hover:animate-shine"} `})]})}),e.jsxs("div",{className:"inline-flex",children:[e.jsx(U,{searchValue:x,setSearchValue:b}),e.jsxs("button",{className:`max-w-24 outline-sky-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden group ${a?"bg-sky-600/50":"bg-sky-600 active:scale-95 shadow"}`,onClick:I,type:"button",disabled:a,children:[e.jsx(q,{}),e.jsx("div",{className:`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${a?"animate-shineInfinity":"group-hover:animate-shine"} `})]})]})]})}),e.jsx(F,{isOpen:g,onClose:k,children:e.jsx(R,{loading:a,formValues:i,setFormValue:r,handleChange:j,handleSubmit:y})})]})})};export{ee as default};
//# sourceMappingURL=InvoicesPage-DcL16Wd6.js.map
