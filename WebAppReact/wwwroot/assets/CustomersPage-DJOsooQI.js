import{l as B,P as r,u as C,j as e,f as G,b as F,r as m,I as H,c as J,e as K,L as Q,g as V,h as W,i as X,k as Y,M as Z}from"./index-Bq4X5HoL.js";import{A as g,a as x}from"./useFetchDataStore-BQRNsoTt.js";import{a as q,b as ee}from"./TypesForm-D4Kl22kW.js";import{S as se}from"./SeachInput-fJTCmRtf.js";import{P as te}from"./Pagination-CZsUC0BH.js";const ae=B(n=>({customers:[],setCustomers:t=>n({customers:t})})),T=({children:n})=>{const{t}=C();return e.jsxs(e.Fragment,{children:[e.jsxs("article",{className:"w-full flex mx-auto border justify-between items-center gap-4 px-4 bg-gray-800 text-white",children:[e.jsxs("div",{className:"w-4/12 text-left",children:[e.jsx("span",{className:"capitalize font-semibold tex.center",children:t("customers.form.field.tax_id")})," "]}),e.jsxs("div",{className:"w-4/12 text-left",children:[e.jsx("span",{className:"capitalize font-semibold",children:t("customers.form.field.name")})," "]}),e.jsxs("div",{className:"w-4/12 text-center",children:[e.jsx("span",{className:"capitalize font-semibold",children:t("customers.form.field.phone")})," "]}),e.jsxs("div",{className:"w-2/12 text-center",children:[e.jsx("span",{className:"capitalize font-semibold",children:t("customers.form.field.state")})," "]}),e.jsxs("div",{className:"w-2/12 text-center",children:[e.jsx("span",{className:"capitalize font-semibold",children:t("customers.actions")})," "]})]}),e.jsx("article",{className:"overflow-y-scroll h-96 w-full",children:n})]})},D=({t:n,customers:t,handleUpdate:c,loading:l})=>e.jsx(e.Fragment,{children:t.map((o,s)=>e.jsxs("div",{className:`w-full flex mx-auto border justify-between items-center  gap-4 px-4 py-2.5 text-slate-800 ${s%2==0?"bg-slate-100":"bg-white"} `,"data-id":o.id_cliente,children:[e.jsxs("div",{className:"w-4/12 text-left",children:[e.jsx("span",{className:"capitalize font-semibold",children:o.nit})," "]}),e.jsxs("div",{className:"w-4/12 text-left",children:[e.jsx("span",{className:"capitalize font-semibold",children:o.nombre})," "]}),e.jsxs("div",{className:"w-4/12 text-center",children:[e.jsx("span",{className:"capitalize font-semibold",children:o.telefono||"-"})," "]}),e.jsx("div",{className:"w-2/12 text-center",children:e.jsx("span",{className:"capitalize text-center font-semibold inline-flex justify-center w-full items-center",children:o.estado==1?e.jsx("span",{className:"text-center border rounded-full px-2 text-xs text-sky-700 bg-sky-200 border-sky-700 font-semibold",children:n("state.active")}):e.jsx("span",{className:"text-center border rounded-full px-2 text-xs text-gray-700 bg-gray-200 border-gray-700 font-semibold",children:n("state.inactive")})})}),e.jsxs("div",{className:"w-2/12 text-center",children:[e.jsx("span",{className:"capitalize font-semibold",children:e.jsxs("button",{value:o.id_cliente,className:`max-w-24 rounded-sm text-xs outline-orange-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden capitalize group ${l?"bg-orange-600/50":"bg-orange-600 active:scale-95 shadow"}`,onClick:c,type:"button",disabled:l,children:[e.jsx("span",{children:e.jsx(G,{})}),e.jsx("div",{className:`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${l?"animate-shineInfinity":"group-hover:animate-shine"} `})]})})," "]})]},`${o.id_cliente}${s}`))});T.propTypes={children:r.node};D.propTypes={t:r.func,customers:r.any,handleUpdate:r.func,loading:r.bool,index:r.number};const E=({loading:n,formValues:t,setFormValue:c,handleChange:l,handleSubmit:o})=>{const{t:s}=C(),{auth:w}=F(f=>({user:f.user}));return m.useEffect(()=>{var p;let f=(p=w==null?void 0:w.userData)==null?void 0:p.id_usuario;c(h=>({...h,uid_creacion:f}))},[]),e.jsx(e.Fragment,{children:e.jsx("section",{className:"md:w-10/12 min-h-96 flex flex-col justify-between items-center mx-auto my-10 border",children:e.jsxs("form",{className:"flex flex-wrap justify-between items-center gap-x-4 p-2 lg:p-10",children:[e.jsxs("div",{className:"flex justify-between items-center gap-4 w-full",children:[e.jsx("section",{className:"w-10/12 mx-auto inline-flex justify-start",children:e.jsxs("button",{className:`inline-flex gap-4 max-w-32 rounded-sm w-full min-w-20 outline-green-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden capitalize group ${n?"bg-green-600/50":"bg-green-600 active:scale-95 shadow"}`,onClick:o,type:"submit",disabled:n,children:[e.jsx("span",{children:e.jsx(H,{})}),e.jsx("span",{children:t.id==0?s("customers.save"):s("customers.change")}),e.jsx("div",{className:`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${n?"animate-shineInfinity":"group-hover:animate-shine"} `})]})}),e.jsxs("label",{className:"inline-flex flex-1 flex-col cursor-pointer",children:[e.jsx("span",{className:"capitalize font-semibold text-sm py-1.5",children:s("customers.form.field.state")}),e.jsxs("div",{className:"flex items-center justify-center",children:[e.jsx("input",{type:"checkbox",name:"estado",className:"px-2 py-1.5 border outline-none focus:border-sky-500 w-5 h-10 bg-slate-50",placeholder:s("customers.form.field.state"),onChange:l,checked:t.estado===1,required:!0}),e.jsx("span",{className:"font-semibold text-sm px-2 py-1.5 w-16",children:t.estado===1?s("state.active"):s("state.inactive")})]})]})]}),e.jsxs("div",{className:"flex flex-wrap justify-between items-center gap-4",children:[e.jsxs("label",{className:"flex-1 flex-col hidden",children:[e.jsx("span",{className:"capitalize font-semibold text-sm py-1.5",children:s("customers.form.field.id")}),e.jsx("input",{type:"hidden",name:"id_usuario",className:"w-full px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50",placeholder:s("customers.form.field.id"),onChange:l,value:t.id,disabled:!0})]}),e.jsxs("div",{className:"flex w-full gap-4",children:[e.jsx("div",{className:"w-4/12 px-1",children:e.jsxs("label",{className:"inline-flex flex-1 flex-col w-full",children:[e.jsx("span",{className:"required capitalize font-semibold text-sm py-1.5",children:s("customers.form.field.tax_id")}),e.jsx("input",{type:"text",name:"nit",maxLength:20,className:"px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50",placeholder:s("customers.form.field.tax_id"),onChange:l,value:t.nit,required:!0})]})}),e.jsx("div",{className:"w-8/12",children:e.jsxs("label",{className:"inline-flex flex-1 flex-col w-full",children:[e.jsx("span",{className:"required capitalize font-semibold text-sm py-1.5",children:s("customers.form.field.name")}),e.jsx("input",{type:"text",name:"nombre",maxLength:200,className:"w-full px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50",placeholder:s("customers.form.field.name"),onChange:l,value:t.nombre,required:!0})]})})]}),e.jsx("div",{className:"flex w-full gap-4",children:e.jsxs("label",{className:"inline-flex flex-1 flex-col",children:[e.jsx("span",{className:"required capitalize font-semibold text-sm py-1.5",children:s("customers.form.field.address")}),e.jsx("textarea",{cols:4,maxLength:350,type:"text",name:"direccion",className:"px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50",placeholder:s("customers.form.field.address"),onChange:l,value:t.direccion,required:!0})]})}),e.jsxs("div",{className:"flex w-full gap-4",children:[e.jsxs("label",{className:"inline-flex flex-1 flex-col",children:[e.jsx("span",{className:"capitalize font-semibold text-sm py-1.5",children:s("customers.form.field.email")}),e.jsx("input",{type:"email",name:"correo",maxLength:200,className:"px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50",placeholder:s("customers.form.field.email"),onChange:l,value:t.correo,required:!1})]}),e.jsxs("label",{className:"inline-flex flex-1 flex-col",children:[e.jsx("span",{className:"capitalize font-semibold text-sm py-1.5",children:s("customers.form.field.phone")}),e.jsx("input",{type:"tel",name:"telefono",pattern:"[0-9]{4}-[0-9]{4}",className:"px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50",placeholder:s("customers.form.field.phone"),onChange:l,value:t.telefono,required:!1})]})]}),e.jsxs("label",{className:"inline-flex flex-1 flex-col hidden",children:[e.jsx("span",{className:"capitalize font-semibold text-sm py-1.5",children:s("customers.form.field.created")}),e.jsx("input",{type:"hidden",name:"uid_creacion",className:"px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50",placeholder:s("customers.form.field.created"),value:t.uid_creacion,onChange:l,required:!0,disabled:!0})]}),e.jsxs("label",{className:"inline-flex flex-1 flex-col",children:[e.jsx("span",{className:"capitalize font-semibold text-sm py-1.5",children:s("customers.form.field.comment")}),e.jsx("textarea",{rows:"4",cols:"50",name:"comentario",className:"px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50",placeholder:s("customers.form.field.comment"),onChange:l,value:t.comentario})]})]})]})})})};E.propTypes={loading:r.bool,formValues:r.object,setFormValue:r.func,handleChange:r.func,handleSubmit:r.func};const ce=()=>{var _,$,L,P;const{t:n}=C(),[t,c]=m.useState(q),[l,o]=m.useState(""),[s,w]=m.useState(1);m.useState(25);const[f,p]=m.useState(!1),{auth:h}=F(i=>({user:i.auth})),{isLoading:d,setIsLoading:y}=J(i=>({isLoading:i.isLoading,setIsLoading:i.setIsLoading})),{customers:a,setCustomers:b}=ae(i=>({customers:i.customers,setProduct:i.setCustomers}));m.useEffect(()=>{var u;let i=(u=h==null?void 0:h.userData)==null?void 0:u.id_usuario;c(j=>({...j,uid_creacion:i})),N()},[]);const N=m.useCallback(()=>{g({setStore:b,url:`${x.customer.customers.url}?page_size=25&page_number=${s}`,method:x.customer.customers.method,setIsLoading:y})},[g,s]);m.useEffect(()=>{N()},[s,N]);const M=i=>{const{name:u,value:j,type:k,checked:v}=i.target,z=k==="checkbox"?v?1:0:j;c(U=>({...U,[u]:z}))},A=i=>{i.preventDefault(),g({setStore:b,url:x.customer.save.url,method:x.customer.save.method,body:t,setIsLoading:y}),S()},I=()=>p(!0),S=()=>{c(q),p(!1)},R=()=>{l.trim().length>0?g({setStore:b,url:`${x.customer.search.url}?value=${l}`,method:x.customer.search.method,setIsLoading:y}):g({setStore:b,url:`${x.customer.customers.url}?page_size=25&page_number=${s}`,method:x.customer.customers.method,setIsLoading:y})},O=i=>{var v;const u=i.currentTarget.value,j=(v=a==null?void 0:a.data)==null?void 0:v.content.find(z=>z.id_cliente===Number(u)),k=ee(j);c(k),I()};return e.jsx(K,{children:e.jsxs("div",{className:"flex-1 w-full",children:[e.jsxs("section",{className:"bg-white px-4 pt-4 inline-flex justify-between items-center w-full border-b mb-4 ",children:[e.jsxs("h1",{className:"text-2xl font-semibold mb-1 pr-4 inline-flex items-center gap-2",children:[e.jsxs(Q,{to:"/",children:[" ",n("home.title")]}),e.jsx(V,{}),e.jsx("span",{children:n("customers.title")})]}),e.jsx("span",{children:e.jsx("button",{className:"bg-orange-400 text-white p-1 shadow hover:scale-95",value:"refresh",onClick:N,children:e.jsx(W,{})})})]}),e.jsx("section",{className:"w-full bg-white divide-y border-b pb-4 mb-2.5",children:e.jsxs("section",{className:"w-full px-5 mx-auto flex justify-between items-center",children:[e.jsx("div",{className:"w-44",children:e.jsxs("button",{className:`inline-flex gap-4 max-w-32 rounded-sm w-full min-w-20 outline-green-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden capitalize group ${d?"bg-green-600/50":"bg-green-600 active:scale-95 shadow"}`,onClick:I,type:"submit",disabled:d,children:[e.jsx(X,{}),n("customers.new"),e.jsx("div",{className:`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${d?"animate-shineInfinity":"group-hover:animate-shine"} `})]})}),e.jsxs("div",{className:"inline-flex",children:[e.jsx(se,{searchValue:l,setSearchValue:o}),e.jsxs("button",{className:`max-w-24 outline-sky-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden group ${d?"bg-sky-600/50":"bg-sky-600 active:scale-95 shadow"}`,onClick:R,type:"button",disabled:d,children:[e.jsx(Y,{}),e.jsx("div",{className:`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${d?"animate-shineInfinity":"group-hover:animate-shine"} `})]})]})]})}),e.jsxs("section",{className:"md:w-11/12 lg:w-full min-h-96 flex flex-col justify-between items-center mx-auto ",children:[e.jsx("div",{className:"w-full flex h-5/6  min-h-96 justify-start items-center flex-col border mb-4 pb-2",children:e.jsx(T,{children:e.jsx(D,{t:n,customers:a&&(($=(_=a==null?void 0:a.data)==null?void 0:_.content)==null?void 0:$.length)>0&&(a==null?void 0:a.data.content)!=null?a==null?void 0:a.data.content:[],handleUpdate:O,loading:d})})}),e.jsx(te,{page:s,totalPages:a!=null&&a.data&&((P=(L=a==null?void 0:a.data)==null?void 0:L.response)==null?void 0:P.length)>0?a==null?void 0:a.data.response[0].total_pages:0,setPage:b,loading:d})]}),e.jsx(Z,{isOpen:f,onClose:S,children:e.jsx(E,{isLoading:d,formValues:t,setFormValue:c,handleChange:M,handleSubmit:A})})]})})};export{ce as default};
//# sourceMappingURL=CustomersPage-DJOsooQI.js.map