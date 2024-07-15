import{c as F,P as u,b as v,u as N,r,j as e,d as E,e as T,L as q,M as O}from"./index-CBYe1poJ.js";import{A as g}from"./Endpoints-DNNrLCYu.js";import{a as y}from"./TypesForm-DVNF-qTy.js";import"./ProductForm-BmHzc2QB.js";import{c as W,S as B}from"./SeachInput-mVfd0do3.js";const H=F(l=>({users:[],setUsers:a=>l({users:a})})),k=({loading:l,formValues:a,setFormValue:c,handleChange:i,handleSubmit:x})=>{const{t:s}=v(),{user:m}=N(o=>({user:o.user}));return r.useEffect(()=>{var f;let o=(f=m==null?void 0:m.userData)==null?void 0:f.id_usuario;c(h=>({...h,uid_creacion:o}))},[]),e.jsx(e.Fragment,{children:e.jsx("section",{className:"md:w-10/12 min-h-96 flex flex-col justify-between items-center mx-auto my-10 border",children:e.jsxs("form",{className:"flex flex-wrap justify-between items-center gap-x-4 p-10",children:[e.jsxs("div",{className:"flex justify-between items-center gap-4 w-full",children:[e.jsx("section",{className:"w-10/12 mx-auto inline-flex justify-start",children:e.jsxs("button",{className:`max-w-24 w-full min-w-20 outline-green-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden capitalize group ${l?"bg-green-600/50":"bg-green-600 active:scale-95 shadow"}`,onClick:x,type:"submit",disabled:l,children:[a.id_usuario==0?s("users.form.save"):s("users.form.change"),e.jsx("div",{className:`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${l?"animate-shineInfinity":"group-hover:animate-shine"} `})]})}),e.jsxs("label",{className:"inline-flex flex-1 flex-col",children:[e.jsx("span",{className:"capitalize font-semibold text-sm py-1.5",children:s("users.form.field.state")}),e.jsx("input",{type:"checkbox",name:"estado",className:"px-2 py-1.5 border outline-none focus:border-sky-500 w-5 h-10 bg-slate-50",placeholder:s("users.form.field.state"),onChange:i,checked:a.estado===1,required:!0})]})]}),e.jsxs("div",{className:"flex flex-wrap justify-between items-center gap-4",children:[e.jsxs("label",{className:"flex-1 flex-col hidden",children:[e.jsx("span",{className:"capitalize font-semibold text-sm py-1.5",children:s("users.form.field.id")}),e.jsx("input",{type:"hidden",name:"id_usuario",className:"px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50",placeholder:s("users.form.field.id"),onChange:i,value:a.id,disabled:!0})]}),e.jsxs("label",{className:"inline-flex flex-1 flex-col",children:[e.jsx("span",{className:"capitalize font-semibold text-sm py-1.5",children:s("users.form.field.username")}),e.jsx("input",{type:"text",name:"usuario",className:"px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50",placeholder:s("users.form.field.username"),onChange:i,value:a.usuario,required:!0})]}),e.jsxs("label",{className:"inline-flex flex-1 flex-col",children:[e.jsx("span",{className:"capitalize font-semibold text-sm py-1.5",children:s("users.form.field.email")}),e.jsx("input",{type:"text",name:"correo",className:"px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50",placeholder:s("users.form.field.email"),onChange:i,value:a.correo,required:!0})]}),e.jsxs("label",{className:"inline-flex flex-1 flex-col hidden",children:[e.jsx("span",{className:"capitalize font-semibold text-sm py-1.5",children:s("users.form.field.created")}),e.jsx("input",{type:"hidden",name:"uid_creacion",className:"px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50",placeholder:s("users.form.field.created"),value:a.uid_creacion,onChange:i,required:!0,disabled:!0})]}),e.jsxs("label",{className:"inline-flex flex-1 flex-col",children:[e.jsx("span",{className:"capitalize font-semibold text-sm py-1.5",children:s("users.form.field.comment")}),e.jsx("textarea",{rows:"4",cols:"50",name:"comentario",className:"px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50",placeholder:s("users.form.field.comment"),onChange:i,value:a.comentario})]})]})]})})})};k.propTypes={loading:u.bool,formValues:u.object,setFormValue:u.func,handleChange:u.func,handleSubmit:u.func};const X=()=>{const{t:l}=v(),[a,c]=r.useState(y),[i,x]=r.useState(""),[s,m]=r.useState(1),[o,f]=r.useState(25),[h,j]=r.useState(!1),{user:d}=N(t=>({user:t.user}));H(t=>({setProduct:t.setProduct}));const{callApi:C,data:R,getData:z,refreshData:w,loading:n,error:Z}=E(t=>({callApi:t.callApi,data:t.data,getData:t.getData,refreshData:t.refreshData,loading:t.loading,error:t.error}));z(`${g.products.url}/list?page_size=${o}&page_number=${s}`),r.useEffect(()=>{var t;(t=d==null?void 0:d.userData)!=null&&t.id_usuario&&c(b=>({...b,uid_creacion:d.userData.id_usuario}))},[d]);const p=r.useCallback(()=>{w(`${g.products.url}/list?page_size=${o}&page_number=${s}`)},[w,s,o]);r.useEffect(()=>{p()},[s,p]);const S=t=>{const{name:b,value:L,type:M,checked:U}=t.target,I=M==="checkbox"?U?1:0:L;c(A=>({...A,[b]:I}))},D=t=>{t.preventDefault(),C(`${g.products.url}/save`,"PUT",a)},_=()=>j(!0),$=()=>{c(y),j(!1)},P=t=>{t.preventDefault(),p()};return e.jsx(T,{children:e.jsxs("div",{className:"flex-1 w-full",children:[e.jsxs("section",{className:"bg-white px-4 pt-4 inline-flex justify-between items-center w-full border-b mb-4 ",children:[e.jsxs("h1",{className:"text-2xl font-semibold mb-1 pr-4 inline-flex items-center gap-2",children:[e.jsxs(q,{to:"/",children:[" ",l("home.title")]}),e.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 512 512",height:"24px",width:"24px",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"m184 112 144 144-144 144"})}),e.jsx("span",{children:l("users.title")})]}),e.jsx("span",{children:e.jsx("button",{className:"bg-orange-400 text-white p-1 shadow hover:scale-95",value:"refresh",onClick:p,children:e.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 24 24",height:"16px",width:"16px",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"})})})})]}),e.jsx("section",{className:"w-full bg-white divide-y border-b pb-4 mb-2.5",children:e.jsxs("section",{className:"w-full px-5 mx-auto flex justify-between items-center",children:[e.jsx("div",{className:"w-44",children:e.jsxs("button",{className:`inline-flex gap-4 max-w-32 rounded-sm w-full min-w-20 outline-green-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden capitalize group ${n?"bg-green-600/50":"bg-green-600 active:scale-95 shadow"}`,onClick:_,type:"submit",disabled:n,children:[e.jsx("span",{children:e.jsx(W,{})}),e.jsx("span",{children:l("categories.new")}),e.jsx("div",{className:`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${n?"animate-shineInfinity":"group-hover:animate-shine"} `})]})}),e.jsxs("div",{className:"inline-flex",children:[e.jsx(B,{searchValue:i,setSearchValue:x}),e.jsxs("button",{className:`max-w-24 w-full min-w-20 outline-sky-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden group ${n?"bg-sky-600/50":"bg-sky-600 active:scale-95 shadow"}`,onClick:P,type:"button",disabled:n,children:[l("categories.search"),e.jsx("div",{className:`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${n?"animate-shineInfinity":"group-hover:animate-shine"} `})]})]})]})}),e.jsx(O,{isOpen:h,onClose:$,children:e.jsx(k,{loading:n,formValues:a,setFormValue:c,handleChange:S,handleSubmit:D})})]})})};export{X as default};
//# sourceMappingURL=UsersPage-D-KgLvsR.js.map