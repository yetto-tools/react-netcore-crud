import{l as z,u as A,r as t,b as C,j as e,e as _,L as M,g as V,h as E,i as F,k as R,M as L}from"./index-CnFjH1Bv.js";import{A as O,a as o}from"./useFetchDataStore-DL3UPdYz.js";import{c as x}from"./TypesForm-D4Kl22kW.js";import{P as T}from"./ProductForm-B6up1O7q.js";import{S as q}from"./SeachInput-_y_4iKYZ.js";import"./useCategoriesStore-DvQeDxcW.js";const B=z(r=>({invoices:[],setInvoices:i=>r({invoices:i})})),ee=()=>{const{t:r}=A(),[i,n]=t.useState(x),[g,b]=t.useState(""),[l,G]=t.useState(1),[d,H]=t.useState(25),[v,h]=t.useState(!1);C(s=>({auth:s.auth})),B(s=>({setProduct:s.setProduct}));const{callApi:p,data:J,getData:m,refreshData:f,loading:a,error:K}=O(s=>({callApi:s.callApi,data:s.data,getData:s.getData,refreshData:s.refreshData,loading:s.loading,error:s.error}));m(`${o.product.products.url}/?page_size=${d}&page_number=${l}`),t.useEffect(()=>{var s;(s=user==null?void 0:user.userData)!=null&&s.id_usuario&&n(u=>({...u,uid_creacion:user.userData.id_usuario}))},[user]);const c=t.useCallback(()=>{f(`${o.product.products.url}/list?page_size=${d}&page_number=${l}`)},[f,l,d]);t.useEffect(()=>{c()},[l,c]);const w=s=>{const{name:u,value:S,type:N,checked:P}=s.target,D=N==="checkbox"?P?1:0:S;n($=>({...$,[u]:D}))},j=s=>{s.preventDefault(),p(o.product.save.url,o.product.save.method,i)},y=()=>h(!0),k=()=>{n(x),h(!1)},I=s=>{p(o.product.search.url,o.product.search.method,s.trim()),m()==[]&&c()};return e.jsx(_,{children:e.jsxs("div",{className:"flex-1 w-full",children:[e.jsxs("section",{className:"bg-white px-4 pt-4 inline-flex justify-between items-center w-full border-b mb-4 ",children:[e.jsxs("h1",{className:"text-2xl font-semibold mb-1 pr-4 inline-flex items-center gap-2",children:[e.jsxs(M,{to:"/",children:[" ",r("home.title")]}),e.jsx(V,{}),e.jsx("span",{children:r("invoices.title")})]}),e.jsx("span",{children:e.jsx("button",{className:"bg-orange-400 text-white p-1 shadow hover:scale-95",value:"refresh",onClick:c,children:e.jsx(E,{})})})]}),e.jsx("section",{className:"w-full bg-white divide-y border-b pb-4 mb-2.5",children:e.jsxs("section",{className:"w-full px-5 mx-auto flex justify-between items-center",children:[e.jsx("div",{className:"w-44",children:e.jsxs("button",{className:`inline-flex gap-4 max-w-32 rounded-sm w-full min-w-20 outline-green-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden capitalize group ${a?"bg-green-600/50":"bg-green-600 active:scale-95 shadow"}`,onClick:y,type:"submit",disabled:a,children:[e.jsx(F,{}),r("categories.new"),e.jsx("div",{className:`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${a?"animate-shineInfinity":"group-hover:animate-shine"} `})]})}),e.jsxs("div",{className:"inline-flex",children:[e.jsx(q,{searchValue:g,setSearchValue:b}),e.jsxs("button",{className:`max-w-24 outline-sky-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden group ${a?"bg-sky-600/50":"bg-sky-600 active:scale-95 shadow"}`,onClick:I,type:"button",disabled:a,children:[e.jsx(R,{}),e.jsx("div",{className:`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${a?"animate-shineInfinity":"group-hover:animate-shine"} `})]})]})]})}),e.jsx(L,{isOpen:v,onClose:k,children:e.jsx(T,{loading:a,formValues:i,setFormValue:n,handleChange:w,handleSubmit:j})})]})})};export{ee as default};
//# sourceMappingURL=InvoicesPage-pn4j5nND.js.map
