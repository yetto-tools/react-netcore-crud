import{l as P,u as _,r as t,b as M,c as z,j as e,e as D,L as V,g as A,h as E,i as F,k as R,M as O}from"./index-Bosq_kzd.js";import{A as i,a as o}from"./useFetchDataStore-296_UDCV.js";import{a as g}from"./TypesForm-DBD7_ASH.js";import{P as T}from"./ProductForm-CG2gLwA1.js";import{S as q}from"./SeachInput-TnfXKmwb.js";import"./useCategoriesStore-c8kQXFNy.js";const B=P(r=>({customers:[],setCustomers:l=>r({customers:l})})),Y=()=>{const{t:r}=_(),[l,c]=t.useState(g),[h,w]=t.useState(""),[u,G]=t.useState(1);t.useState(25);const[j,x]=t.useState(!1),{auth:n}=M(s=>({user:s.auth})),{isLoading:a,setIsLoading:m}=z(s=>({isLoading:s.isLoading,setIsLoading:s.setIsLoading})),{customers:H,setCustomers:d}=B(s=>({customers:s.customers,setProduct:s.setCustomers}));t.useEffect(()=>{var s;(s=n==null?void 0:n.authData)!=null&&s.id_usuario&&c(f=>({...f,uid_creacion:n.userData.id_usuario}))},[n]);const p=t.useCallback(()=>{i({setStore:d,url:`${o.customer.customers.url}?page_size=25&page_number=${u}`,method:o.customer.customers.method,setIsLoading:m})},[i,u]);t.useEffect(()=>{p()},[u,p]);const v=s=>{const{name:f,value:k,type:N,checked:I}=s.target,L=N==="checkbox"?I?1:0:k;c($=>({...$,[f]:L}))},y=s=>{s.preventDefault(),i({setStore:d,url:o.customer.save.url,method:o.customer.save.method,body:l,setIsLoading:m}),b()},S=()=>x(!0),b=()=>{c(g),x(!1)},C=()=>{h.trim().length>0?i({setStore:d,url:`${o.customer.search.url}?value=${h}`,method:o.customer.search.method,setIsLoading:m}):i({setStore:d,url:`${o.customer.customers.url}?page_size=25&page_number=${u}`,method:o.customer.customers.method,setIsLoading:m})};return e.jsx(D,{children:e.jsxs("div",{className:"flex-1 w-full",children:[e.jsxs("section",{className:"bg-white px-4 pt-4 inline-flex justify-between items-center w-full border-b mb-4 ",children:[e.jsxs("h1",{className:"text-2xl font-semibold mb-1 pr-4 inline-flex items-center gap-2",children:[e.jsxs(V,{to:"/",children:[" ",r("home.title")]}),e.jsx(A,{}),e.jsx("span",{children:r("customers.title")})]}),e.jsx("span",{children:e.jsx("button",{className:"bg-orange-400 text-white p-1 shadow hover:scale-95",value:"refresh",onClick:p,children:e.jsx(E,{})})})]}),e.jsx("section",{className:"w-full bg-white divide-y border-b pb-4 mb-2.5",children:e.jsxs("section",{className:"w-full px-5 mx-auto flex justify-between items-center",children:[e.jsx("div",{className:"w-44",children:e.jsxs("button",{className:`inline-flex gap-4 max-w-32 rounded-sm w-full min-w-20 outline-green-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden capitalize group ${a?"bg-green-600/50":"bg-green-600 active:scale-95 shadow"}`,onClick:S,type:"submit",disabled:a,children:[e.jsx(F,{}),r("customers.new"),e.jsx("div",{className:`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${a?"animate-shineInfinity":"group-hover:animate-shine"} `})]})}),e.jsxs("div",{className:"inline-flex",children:[e.jsx(q,{searchValue:h,setSearchValue:w}),e.jsxs("button",{className:`max-w-24 outline-sky-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden group ${a?"bg-sky-600/50":"bg-sky-600 active:scale-95 shadow"}`,onClick:C,type:"button",disabled:a,children:[e.jsx(R,{}),e.jsx("div",{className:`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${a?"animate-shineInfinity":"group-hover:animate-shine"} `})]})]})]})}),e.jsx(O,{isOpen:j,onClose:b,children:e.jsx(T,{isLoading:a,formValues:l,setFormValue:c,handleChange:v,handleSubmit:y})})]})})};export{Y as default};
//# sourceMappingURL=CustomersPage-BTRwKqrd.js.map
