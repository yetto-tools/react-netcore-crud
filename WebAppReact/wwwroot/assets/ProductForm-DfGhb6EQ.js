import{P as t,b as x,u,r as d,j as e}from"./index-DNAOhUU0.js";import"./SeachInput-CKZumhQB.js";import{u as b}from"./useFetchDataStore-Cln2Mnoz.js";const h=({loading:o,formValues:a,setFormValue:m,handleChange:l,handleSubmit:f})=>{const{t:s}=x(),{callApi:n,data:g}=b(i=>({callApi:i.callApi,data:i.data})),{user:r}=u(i=>({user:i.user}));return d.useEffect(()=>{var c;let i=(c=r==null?void 0:r.userData)==null?void 0:c.id_usuario;m(p=>({...p,uid_creacion:i}))},[]),d.useEffect(()=>{n("/api/categories")},[n]),e.jsx(e.Fragment,{children:e.jsx("section",{className:"md:w-10/12 min-h-96 flex flex-col justify-between items-center mx-auto my-10 border",children:e.jsxs("form",{className:"flex flex-wrap justify-between items-center gap-x-4 p-10",children:[e.jsxs("div",{className:"flex justify-between items-center gap-4 w-full",children:[e.jsx("section",{className:"w-10/12 mx-auto inline-flex justify-start",children:e.jsxs("button",{className:`max-w-24 w-full min-w-20 outline-green-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden group ${o?"bg-green-600/50":"bg-green-600 active:scale-95 shadow"}`,onClick:f,type:"submit",disabled:o,children:[s("categories.save"),e.jsx("div",{className:`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${o?"animate-shineInfinity":"group-hover:animate-shine"} `})]})}),e.jsxs("label",{className:"inline-flex flex-1 flex-col",children:[e.jsx("span",{className:"capitalize font-semibold text-sm py-1.5",children:s("categories.form.field.state")}),e.jsx("input",{type:"checkbox",name:"estado",className:"px-2 py-1.5 border outline-none focus:border-sky-500 w-5 h-10 bg-slate-50",placeholder:s("categories.form.field.state"),onChange:l,checked:a.estado===1,required:!0})]})]}),e.jsxs("div",{className:"flex flex-wrap justify-between items-center gap-4",children:[e.jsxs("label",{className:"flex-1 flex-col hidden",children:[e.jsx("span",{className:"capitalize font-semibold text-sm py-1.5",children:s("categories.form.field.id")}),e.jsx("input",{type:"hidden",name:"id",className:"px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50",placeholder:s("categories.form.field.id"),onChange:l,value:a.id,disabled:!0})]}),e.jsxs("label",{className:"inline-flex flex-1 flex-col",children:[e.jsx("span",{className:"capitalize font-semibold text-sm py-1.5",children:s("categories.form.field.name")}),e.jsx("input",{type:"nombre",name:"nombre",className:"px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50",placeholder:s("categories.form.field.name"),onChange:l,value:a.nombre,required:!0})]}),e.jsxs("label",{className:"inline-flex flex-1 flex-col",children:[e.jsx("span",{className:"capitalize font-semibold text-sm py-1.5",children:s("categories.form.field.description")}),e.jsx("input",{type:"text",name:"descripcion",className:"px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50",placeholder:s("categories.form.field.description"),onChange:l,value:a.descripcion,required:!0})]}),e.jsxs("label",{className:"inline-flex flex-1 flex-col hidden",children:[e.jsx("span",{className:"capitalize font-semibold text-sm py-1.5",children:s("categories.form.field.created")}),e.jsx("input",{type:"hidden",name:"uid_creacion",className:"px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50",placeholder:s("categories.form.field.created"),value:a.uid_creacion,onChange:l,required:!0,disabled:!0})]}),e.jsxs("label",{className:"inline-flex flex-1 flex-col",children:[e.jsx("span",{className:"capitalize font-semibold text-sm py-1.5",children:s("categories.form.field.comment")}),e.jsx("textarea",{rows:"4",cols:"50",name:"comentario",className:"px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50",placeholder:s("categories.form.field.comment"),onChange:l,value:a.comentario})]})]})]})})})};h.propTypes={loading:t.bool,formValues:t.object,setFormValue:t.func,handleChange:t.func,handleSubmit:t.func};export{h as P};
//# sourceMappingURL=ProductForm-DfGhb6EQ.js.map
