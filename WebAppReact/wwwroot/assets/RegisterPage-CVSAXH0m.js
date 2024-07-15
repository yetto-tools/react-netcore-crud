import{P as i,b as c,j as e,r as j,d as w,f as N}from"./index-DutmC7PB.js";import{b as v}from"./TypesForm-DVNF-qTy.js";import{L as k}from"./LayoutBasic-DoaxAL2H.js";import{A as _}from"./Endpoints-DNNrLCYu.js";const d=({loading:r,formValues:l,setFormValue:n,handleChange:a,handleSubmit:o})=>{const{t:s}=c();return e.jsxs("section",{className:"bg-white md:w-2/5 w-10/12 min-h-96 flex flex-col justify-between items-center mx-auto my-10 border shadow",children:[e.jsx("h4",{className:"my-2 pt-4 text-xl font-semibold",children:s("register.form_register")}),e.jsxs("form",{className:"w-full flex flex-wrap justify-between items-center gap-4 p-10 mx-auto",children:[e.jsx("div",{className:"hidden",hidden:!0,children:e.jsxs("label",{className:"flex flex-col flex-wrap justify-between items-start",children:[e.jsx("span",{className:"font-semibold py-1 px-0.5 capitalize",children:s("register.field.id")}),e.jsx("input",{type:"number",name:"id",className:"border outline-none font-semibold text-gray-800 bg-gray-100 px-2 py-1.5 focus:border-sky-500 w-full",value:l.id_usuario,onChange:a,placeholder:s("register.field.id")})]})}),e.jsx("div",{className:"w-full",children:e.jsxs("label",{className:"flex flex-col flex-wrap justify-between items-start",children:[e.jsx("span",{className:"font-semibold py-1 px-0.5 capitalize",children:s("register.field.user")}),e.jsx("input",{type:"text",name:"usuario",className:"border outline-none font-semibold text-gray-800 bg-gray-100 px-2 py-1.5 focus:border-sky-500 w-full",value:l.usuario,onChange:a,placeholder:s("register.field.user")})]})}),e.jsx("div",{className:"w-full",children:e.jsxs("label",{className:"flex flex-col flex-wrap justify-between items-start",children:[e.jsx("span",{className:"font-semibold py-1 px-0.5 capitalize",children:s("register.field.email")}),e.jsx("input",{type:"text",name:"correo",className:"border outline-none font-semibold text-gray-800 bg-gray-100 px-2 py-1.5 focus:border-sky-500 w-full",value:l.correo,onChange:a,placeholder:s("register.field.email")})]})}),e.jsx("div",{className:"w-full",children:e.jsxs("label",{className:"flex flex-col flex-wrap justify-between items-start",children:[e.jsx("span",{className:"font-semibold py-1 px-0.5 capitalize",children:s("register.field.password")}),e.jsx("input",{type:"text",name:"password",className:"border outline-none font-semibold text-gray-800 bg-gray-100 px-2 py-1.5 focus:border-sky-500 w-full",value:l.password,onChange:a,placeholder:s("register.field.password")})]})}),e.jsx("div",{className:"w-full",children:e.jsxs("label",{className:"flex flex-col flex-wrap justify-between items-start",children:[e.jsx("span",{className:"font-semibold py-1 px-0.5 capitalize",children:s("register.field.confirm_password")}),e.jsx("input",{type:"text",name:"confirm_password",className:"border outline-none font-semibold text-gray-800 bg-gray-100 px-2 py-1.5 focus:border-sky-500 w-full",value:l.confirm_password,onChange:a,placeholder:s("register.field.confirm_password")})]})}),e.jsx("div",{className:"hidden",hidden:!0,children:e.jsxs("label",{className:"flex flex-col flex-wrap justify-between items-start",children:[e.jsx("span",{className:"font-semibold py-1 px-0.5 capitalize",children:s("register.field.state")}),e.jsx("input",{type:"hidden",name:"estado",className:"border outline-none font-semibold text-gray-800 bg-gray-100 px-2 py-1.5 focus:border-sky-500 w-full",value:l.estado,onChange:a})]})}),e.jsx("div",{className:"hidden",hidden:!0,children:e.jsxs("label",{className:"flex flex-col flex-wrap justify-between items-start",children:[e.jsx("span",{className:"font-semibold py-1 px-0.5 capitalize",children:s("register.field.uid_create")}),e.jsx("input",{type:"hidden",name:"uid_creacion",className:"border outline-none font-semibold text-gray-800 bg-gray-100 px-2 py-1.5 focus:border-sky-500 w-full",value:l.uid_creacion,onChange:a})]})}),e.jsx("div",{className:"hidden",hidden:!0,children:e.jsxs("label",{className:"flex flex-col flex-wrap justify-between items-start",children:[e.jsx("span",{className:"font-semibold py-1 px-0.5 capitalize",children:s("register.field.comment")}),e.jsx("textarea",{rows:4,cols:50,name:"comentario",className:"border outline-none font-semibold text-gray-800 bg-gray-100 px-2 py-1.5 focus:border-sky-500 w-full",value:l.comentario,onChange:a})]})}),e.jsx("div",{className:"w-full inline-flex justify-center items-center gap-4",children:e.jsx("div",{className:"flex flex-col flex-now justify-center items-center w-7/12 mx-auto mt-4",children:e.jsxs("button",{className:`max-w-72 w-full min-w-20 outline-sky-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden group ${r?"bg-sky-600/50":"bg-sky-600 active:scale-95"}`,onClick:o,type:"submit",disabled:r,children:[s("register.field.btn_register"),e.jsx("div",{className:`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${r?"animate-shineInfinity":"group-hover:animate-shine"} `})]})})})]})]})};d.propTypes={loading:i.bool,formValues:i.object,setFormValue:i.func,handleChange:i.func,handleSubmit:i.func};function S(){const[r,l]=j.useState(v),{t:n}=c(),{callApi:a,data:o,getData:s,loading:x,error:z}=w(t=>({callApi:t.callApi,data:t.data,getData:t.getData,loading:t.loading,error:t.error})),m=t=>{const{name:p,value:u,type:b,checked:y}=t.target,g=b==="checkbox"?y?1:0:u;l(h=>({...h,[p]:g}))},f=t=>{t.preventDefault(),a(`${_.categories.url}/save`,"PUT",r)};return e.jsx(k,{children:e.jsxs("div",{className:"w-10/12 mx-auto",children:[e.jsxs("div",{className:"bg-white px-2 py-2 flex justify-between items-center gap-x-4",children:[e.jsx("span",{className:"text-2xl font-semibold",children:n("register.title")}),e.jsx(N,{})]}),e.jsx(d,{loading:x,formValues:r,setFormValue:l,handleChange:m,handleSubmit:f})]})})}export{S as default};
//# sourceMappingURL=RegisterPage-CVSAXH0m.js.map
