import{P as o,u as z,b as T,r as m,j as e,I as U,f as B,c as G,e as H,L as J,g as K,h as Q,i as W,k as X,M as Y}from"./index-BmBmVWLl.js";import{u as Z}from"./useCategoriesStore-BATTBVIA.js";import{A as b,a as x}from"./useFetchDataStore-CP_6nYrg.js";import{T as P,s as ee}from"./TypesForm-D4Kl22kW.js";import{S as se}from"./SeachInput-f7G5azMX.js";import{P as te}from"./Pagination-BbYvctUn.js";const D=({loading:n,formValues:a,setFormValue:r,handleChange:l,handleSubmit:c})=>{const{t:s}=z(),{auth:j}=T(f=>({auth:f.auth}));return m.useEffect(()=>{var u;let f=(u=j==null?void 0:j.userData)==null?void 0:u.id_usuario;r(p=>({...p,uid_creacion:Number(f)}))},[]),e.jsx(e.Fragment,{children:e.jsx("section",{className:"md:w-10/12 min-h-96 flex flex-col justify-between items-center mx-auto my-10 border",children:e.jsxs("form",{className:"flex flex-wrap justify-between items-center gap-x-4 p-10",children:[e.jsxs("div",{className:"flex justify-between items-center gap-4 w-full",children:[e.jsx("section",{className:"w-10/12 mx-auto inline-flex justify-start",children:e.jsxs("button",{className:`inline-flex gap-4 max-w-32 rounded-sm w-full min-w-20 outline-green-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden capitalize group ${n?"bg-green-600/50":"bg-green-600 active:scale-95 shadow"}`,onClick:c,type:"submit",disabled:n,children:[e.jsx("span",{children:e.jsx(U,{})}),e.jsx("span",{children:a.id==0?s("categories.save"):s("categories.change")}),e.jsx("div",{className:`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${n?"animate-shineInfinity":"group-hover:animate-shine"} `})]})}),e.jsxs("label",{className:"inline-flex flex-1 flex-col cursor-pointer",children:[e.jsx("span",{className:"capitalize font-semibold text-sm py-1.5",children:s("categories.form.field.state")}),e.jsxs("div",{className:"flex items-center justify-center",children:[e.jsx("input",{type:"checkbox",name:"estado",className:"px-2 py-1.5 border outline-none focus:border-sky-500 w-5 h-10 bg-slate-50",placeholder:s("categories.form.field.state"),onChange:l,checked:a.estado===1,required:!0}),e.jsx("span",{className:"font-semibold text-sm px-2 py-1.5 w-16",children:a.estado===1?s("state.active"):s("state.inactive")})]})]})]}),e.jsxs("div",{className:"flex flex-wrap justify-start items-center gap-4",children:[e.jsxs("label",{className:"flex-1 flex-col hidden",children:[e.jsx("span",{className:"capitalize font-semibold text-sm py-1.5",children:s("categories.form.field.id")}),e.jsx("input",{type:"hidden",name:"id",className:"px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50",placeholder:s("categories.form.field.id"),onChange:l,value:a.id,disabled:!0})]}),e.jsxs("label",{className:"inline-flex flex-1 flex-col",children:[e.jsx("span",{className:"capitalize font-semibold text-sm py-1.5",children:s("categories.form.field.name")}),e.jsx("input",{type:"nombre",name:"nombre",className:"px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50",placeholder:s("categories.form.field.name"),onChange:l,value:a.nombre,required:!0})]}),e.jsxs("label",{className:"inline-flex flex-1 flex-col ",children:[e.jsx("span",{className:"capitalize font-semibold text-sm py-1.5",children:s("categories.form.field.description")}),e.jsx("input",{type:"text",name:"descripcion",className:"px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50",placeholder:s("categories.form.field.description"),onChange:l,value:a.descripcion,required:!0})]}),e.jsxs("label",{className:"inline-flex flex-1 flex-col hidden",children:[e.jsx("span",{className:"capitalize font-semibold text-sm py-1.5",children:s("categories.form.field.created")}),e.jsx("input",{type:"hidden",name:"uid_creacion",className:"px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50",placeholder:s("categories.form.field.created"),value:a.uid_creacion,onChange:l,required:!0,disabled:!0})]}),e.jsx("div",{className:"w-full",children:e.jsxs("label",{className:"inline-flex flex-1 flex-col w-full",children:[e.jsx("span",{className:"capitalize font-semibold text-sm py-1.5",children:s("categories.form.field.comment")}),e.jsx("textarea",{rows:"4",cols:"50",name:"comentario",className:"px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50",placeholder:s("categories.form.field.comment"),onChange:l,value:a.comentario})]})})]})]})})})};D.propTypes={loading:o.bool,formValues:o.object,setFormValue:o.func,handleChange:o.func,handleSubmit:o.func};const E=({children:n})=>{const{t:a}=z();return e.jsxs(e.Fragment,{children:[e.jsxs("article",{className:"w-full flex mx-auto border justify-between items-center gap-4 px-4 bg-gray-800 text-white",children:[e.jsxs("div",{className:"w-4/12 text-left",children:[e.jsx("span",{className:"capitalize font-semibold",children:a("categories.form.field.name")})," "]}),e.jsxs("div",{className:"w-4/12 text-center",children:[e.jsx("span",{className:"capitalize font-semibold",children:a("categories.form.field.description")})," "]}),e.jsxs("div",{className:"w-2/12 text-center",children:[e.jsx("span",{className:"capitalize font-semibold",children:a("categories.form.field.state")})," "]}),e.jsxs("div",{className:"w-2/12 text-center",children:[e.jsx("span",{className:"capitalize font-semibold",children:a("categories.change")})," "]})]}),e.jsx("article",{className:"overflow-y-scroll h-96 w-full",children:n})]})},M=({t:n,categories:a,handleUpdate:r,loading:l})=>e.jsx(e.Fragment,{children:a.map((c,s)=>e.jsxs("div",{className:`w-full flex mx-auto border justify-between items-center  gap-4 px-4 py-2.5 text-slate-800 ${s%2==0?"bg-slate-100":"bg-white"} `,children:[e.jsxs("div",{className:"w-4/12 text-left",children:[e.jsx("span",{className:"capitalize font-semibold",children:c.nombre})," "]}),e.jsxs("div",{className:"w-4/12 text-center",children:[e.jsx("span",{className:"capitalize font-semibold",children:c.descripcion||"-"})," "]}),e.jsx("div",{className:"w-2/12 text-center",children:e.jsx("span",{className:"capitalize text-center font-semibold inline-flex justify-center w-full items-center",children:c.estado==1?e.jsx("span",{className:"text-center border rounded-full px-2 text-xs text-sky-700 bg-sky-200 border-sky-700 font-semibold",children:n("state.active")}):e.jsx("span",{className:"text-center border rounded-full px-2 text-xs text-gray-700 bg-gray-200 border-gray-700 font-semibold",children:n("state.inactive")})})}),e.jsxs("div",{className:"w-2/12 text-center",children:[e.jsx("span",{className:"capitalize font-semibold",children:e.jsxs("button",{value:c.id_categoria,className:`max-w-24 rounded-sm text-xs outline-orange-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden capitalize group ${l?"bg-orange-600/50":"bg-orange-600 active:scale-95 shadow"}`,onClick:r,type:"button",disabled:l,children:[e.jsx("span",{children:e.jsx(B,{})}),e.jsx("div",{className:`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${l?"animate-shineInfinity":"group-hover:animate-shine"} `})]})})," "]})]},`${c.id_categoria}${s}`))});E.propTypes={children:o.node};M.propTypes={t:o.func,categories:o.any,handleUpdate:o.func,loading:o.bool,index:o.number};const ce=()=>{var $,_,L,F;const{t:n}=z(),[a,r]=m.useState(P),[l,c]=m.useState(""),[s,j]=m.useState(1);m.useState(25);const[f,u]=m.useState(!1),{auth:p}=T(i=>({auth:i.auth})),{isLoading:d,setIsLoading:y}=G(i=>({isLoading:i.isLoading,setIsLoading:i.setIsLoading})),{categories:t,setCategories:h}=Z(i=>({categories:i.categories,setCategories:i.setCategories}));m.useEffect(()=>{var i;(i=p==null?void 0:p.userData)!=null&&i.id_usuario&&r(g=>({...g,uid_creacion:p.userData.id_usuario}))},[p]);const N=m.useCallback(()=>{b({setStore:h,url:`${x.category.categories.url}?page_size=25&page_number=${s}`,method:x.category.categories.method,setIsLoading:y})},[b,s]);m.useEffect(()=>{N()},[s,N]);const q=i=>{const{name:g,value:v,type:k,checked:w}=i.target,C=k==="checkbox"?w?1:0:v;r(V=>({...V,[g]:C}))},A=i=>{i.preventDefault(),b({setStore:h,url:x.category.save.url,method:x.category.save.method,body:a,setIsLoading:y}),S()},I=()=>u(!0),S=()=>{r(P),u(!1)},R=()=>{l.trim().length>0?b({setStore:h,url:`${x.category.search.url}?value=${l}`,method:x.category.search.method,setIsLoading:y}):b({setStore:h,url:`${x.category.categories.url}?page_size=25&page_number=${s}`,method:x.category.categories.method,setIsLoading:y})},O=i=>{var w;const g=i.currentTarget.value,v=(w=t==null?void 0:t.data)==null?void 0:w.content.find(C=>C.id_categoria===Number(g)),k=ee(v);r(k),I()};return e.jsx(H,{children:e.jsxs("div",{className:"flex-1 w-full",children:[e.jsxs("section",{className:"bg-white px-4 pt-4 inline-flex justify-between items-center w-full border-b mb-4 ",children:[e.jsxs("h1",{className:"text-2xl font-semibold mb-1 pr-4 inline-flex items-center gap-2",children:[e.jsxs(J,{to:"/",children:[" ",n("home.title")]}),e.jsx(K,{}),e.jsx("span",{}),n("categories.title")]}),e.jsx("span",{children:e.jsx("button",{className:"bg-orange-400 text-white p-1 shadow hover:scale-95",value:"refresh",onClick:N,children:e.jsx(Q,{})})})]}),e.jsx("section",{className:"w-full bg-white divide-y border-b pb-4 mb-2.5",children:e.jsxs("section",{className:"w-full px-2.5 mx-auto flex justify-between items-center",children:[e.jsx("div",{className:"w-44",children:e.jsxs("button",{className:`inline-flex gap-4 max-w-32 rounded-sm w-full min-w-20 outline-green-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden capitalize group ${d?"bg-green-600/50":"bg-green-600 active:scale-95 shadow"}`,onClick:I,type:"submit",disabled:d,children:[e.jsx("span",{children:e.jsx(W,{})}),e.jsx("span",{children:n("categories.new")}),e.jsx("div",{className:`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${d?"animate-shineInfinity":"group-hover:animate-shine"} `})]})}),e.jsxs("div",{className:"inline-flex",children:[e.jsx(se,{searchValue:l,setSearchValue:c}),e.jsxs("button",{className:`max-w-24 rounded-r outline-sky-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden capitalize group ${d?"bg-sky-600/50":"bg-sky-600 active:scale-95 shadow"}`,onClick:R,type:"button",disabled:d,children:[e.jsx(X,{}),e.jsx("div",{className:`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${d?"animate-shineInfinity":"group-hover:animate-shine"} `})]})]})]})}),e.jsxs("section",{className:"md:w-11/12 lg:w-full min-h-96 flex flex-col justify-between items-center mx-auto ",children:[e.jsx("div",{className:"w-full flex h-5/6  min-h-96 justify-start items-center flex-col border mb-4 pb-2",children:e.jsx(E,{children:e.jsx(M,{t:n,categories:t&&((_=($=t==null?void 0:t.data)==null?void 0:$.content)==null?void 0:_.length)>0&&(t==null?void 0:t.data.content)!=null?t==null?void 0:t.data.content:[],handleUpdate:O,loading:d})})}),e.jsx(te,{page:s,totalPages:t!=null&&t.data&&((F=(L=t==null?void 0:t.data)==null?void 0:L.response)==null?void 0:F.length)>0?t==null?void 0:t.data.response[0].total_pages:0,setPage:h,loading:d})]}),e.jsx(Y,{isOpen:f,onClose:S,children:e.jsx(D,{loading:d,formValues:a,setFormValue:r,handleChange:q,handleSubmit:A})})]})})};export{ce as default};
//# sourceMappingURL=CategoriesPage-CJR2u33d.js.map
