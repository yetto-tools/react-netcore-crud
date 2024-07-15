import{c as B,P as b,b as N,u as I,r as m,j as e,B as h,L as H,M as R}from"./index-CDbkD6ze.js";import{u as U}from"./useFetchDataStore-jaeyKsaR.js";import{A as w}from"./Endpoints-DaXX02vq.js";const Z=B(t=>({categories:[],setCategories:l=>t({categories:l})})),S={id:0,nombre:"",descripcion:"",estado:1,uid_creacion:"",comentario:""},W=t=>({id:Number(t.id_categoria),nombre:t.nombre,descripcion:t.descripcion,estado:Number(t.estado),uid_creacion:Number(t.uid_creacion),comentario:t.comentario||""}),T=({loading:t,formValues:l,setFormValue:d,handleChange:o,handleSubmit:g})=>{const{t:i}=N(),{user:c}=I(p=>({user:p.user}));return m.useEffect(()=>{var f;let p=(f=c==null?void 0:c.userData)==null?void 0:f.id_usuario;d(k=>({...k,uid_creacion:p}))},[]),e.jsx(e.Fragment,{children:e.jsx("section",{className:"md:w-10/12 min-h-96 flex flex-col justify-between items-center mx-auto my-10 border",children:e.jsxs("form",{className:"flex flex-wrap justify-between items-center gap-x-4 p-10",children:[e.jsxs("div",{className:"flex justify-between items-center gap-4 w-full",children:[e.jsx("section",{className:"w-10/12 mx-auto inline-flex justify-start",children:e.jsxs("button",{className:`max-w-24 w-full min-w-20 outline-green-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden group ${t?"bg-green-600/50":"bg-green-600 active:scale-95 shadow"}`,onClick:g,type:"submit",disabled:t,children:[i("categories.save"),e.jsx("div",{className:`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${t?"animate-shineInfinity":"group-hover:animate-shine"} `})]})}),e.jsxs("label",{className:"inline-flex flex-1 flex-col",children:[e.jsx("span",{className:"capitalize font-semibold text-sm py-1.5",children:i("categories.form.field.state")}),e.jsx("input",{type:"checkbox",name:"estado",className:"px-2 py-1.5 border outline-none focus:border-sky-500 w-5 h-10 bg-slate-50",placeholder:i("categories.form.field.state"),onChange:o,value:l.estado,checked:!0,required:!0})]})]}),e.jsxs("div",{className:"flex flex-wrap justify-between items-center gap-4",children:[e.jsxs("label",{className:"flex-1 flex-col hidden",children:[e.jsx("span",{className:"capitalize font-semibold text-sm py-1.5",children:i("categories.form.field.id")}),e.jsx("input",{type:"hidden",name:"id",className:"px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50",placeholder:i("categories.form.field.id"),onChange:o,value:l.id,disabled:!0})]}),e.jsxs("label",{className:"inline-flex flex-1 flex-col",children:[e.jsx("span",{className:"capitalize font-semibold text-sm py-1.5",children:i("categories.form.field.name")}),e.jsx("input",{type:"nombre",name:"nombre",className:"px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50",placeholder:i("categories.form.field.name"),onChange:o,value:l.nombre,required:!0})]}),e.jsxs("label",{className:"inline-flex flex-1 flex-col",children:[e.jsx("span",{className:"capitalize font-semibold text-sm py-1.5",children:i("categories.form.field.description")}),e.jsx("input",{type:"text",name:"descripcion",className:"px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50",placeholder:i("categories.form.field.description"),onChange:o,value:l.descripcion,required:!0})]}),e.jsxs("label",{className:"inline-flex flex-1 flex-col hidden",children:[e.jsx("span",{className:"capitalize font-semibold text-sm py-1.5",children:i("categories.form.field.created")}),e.jsx("input",{type:"hidden",name:"uid_creacion",className:"px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50",placeholder:i("categories.form.field.created"),value:l.uid_creacion,onChange:o,required:!0,disabled:!0})]}),e.jsxs("label",{className:"inline-flex flex-1 flex-col",children:[e.jsx("span",{className:"capitalize font-semibold text-sm py-1.5",children:i("categories.form.field.comment")}),e.jsx("textarea",{rows:"4",cols:"50",name:"comentario",className:"px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50",placeholder:i("categories.form.field.comment"),onChange:o,value:l.comentario})]})]})]})})})};T.propTypes={loading:b.bool,formValues:b.object,handleChange:b.func,handleSubmit:b.func};const M=({searchValue:t,setSearchValue:l})=>{const{t:d}=N(),[o,g]=m.useState("");m.useEffect(()=>{const c=setTimeout(()=>{l(o.trim())},500);return()=>{clearTimeout(c)}},[o]);const i=c=>{c.preventDefault(),g(c.target.value)};return e.jsx("input",{type:"text",className:"border pl-2 outline-none focus:border-sky-400",value:o,onChange:i,placeholder:d("categories.search")})};M.propTypes={searchValue:b.string,setSearchValue:b.func};const X=()=>{var _;const{t}=N(),[l,d]=m.useState(S),[o,g]=m.useState(""),[i,c]=m.useState(1),{user:p}=I(s=>({user:s.user}));Z(s=>({setCategory:s.setCategory}));const{callApi:f,data:k,getData:C,refreshData:V,loading:a,error:G}=U(s=>({callApi:s.callApi,data:s.data,getData:s.getData,refreshData:s.refreshData,loading:s.loading,error:s.error})),u=C(`${w.categories.url}/list?page_size=250&page_number=${i}`);m.useEffect(()=>{var n;const s=((n=p==null?void 0:p.userData)==null?void 0:n.id_usuario)||0;d(x=>({...x,uid_creacion:s}))},[f]);const j=s=>{s!=null&&s.target.value=="refresh"&&h.info(t("action.refreshData")),V(`${w.categories.url}/list?page_size=250&page_number=${i}`)},A=s=>{s.preventDefault();const{name:n,value:x,type:y,checked:v}=s.target,q=y==="checkbox"?v?1:0:x;d(O=>({...O,[n]:q}))},E=s=>{s.preventDefault(),console.log(l);const n=l;console.log(n),f(`${w.categories.url}/save`,"PUT",n)},r=C(`${w.categories.url}/save`);m.useEffect(()=>{if(!a){if(r&&r.response&&r.response.length>0&&r.response[0].message)switch(r.response[0].result){case-1:h.error(`${r.response[0].message}`);break;case 0:f(w.products),h.warn(`${r.response[0].message}`);break;case 1:r.response[0].message=="insert"||r.response[0].message=="update"?h.success(t(`action.${r.response[0].message}`)):h.success(`${r.response[0].message}`),j(),D();break;default:h.info(`${r.response[0].message}`)}u.length==0&&j()}},[r]);const[F,$]=m.useState(!1),z=()=>$(!0),D=()=>{d(S),$(!1)},L=s=>{s.preventDefault(),console.log(o),j()},P=s=>{let n=s.currentTarget.value;const x=u.content.find(v=>v.id_categoria===Number(n));console.log(x);const y=W(x);d(y),z()};return e.jsx(H,{children:e.jsxs("div",{className:"flex-1 w-full",children:[e.jsxs("section",{className:"bg-white px-4 pt-4 inline-flex justify-between items-center w-full border-b mb-4 ",children:[e.jsx("h1",{className:"text-2xl font-semibold mb-1 pr-4",children:t("categories.title")}),e.jsx("span",{children:e.jsx("button",{className:"bg-orange-400 text-white p-1",value:"refresh",onClick:j,children:e.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 24 24",height:"16px",width:"16px",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"})})})})]}),e.jsx("section",{className:"w-full bg-white divide-y border-b pb-4 mb-2.5",children:e.jsxs("section",{className:"w-full px-5 mx-auto flex justify-between items-center",children:[e.jsx("div",{children:e.jsxs("button",{className:`max-w-24 w-full min-w-20 outline-green-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden group ${a?"bg-green-600/50":"bg-green-600 active:scale-95 shadow"}`,onClick:z,type:"submit",disabled:a,children:[t("categories.new"),e.jsx("div",{className:`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${a?"animate-shineInfinity":"group-hover:animate-shine"} `})]})}),e.jsxs("div",{className:"inline-flex",children:[e.jsx(M,{searchValue:o,setSearchValue:g}),e.jsxs("button",{className:`max-w-24 w-full min-w-20 outline-sky-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden group ${a?"bg-sky-600/50":"bg-sky-600 active:scale-95 shadow"}`,onClick:L,type:"button",disabled:a,children:[t("categories.search"),e.jsx("div",{className:`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${a?"animate-shineInfinity":"group-hover:animate-shine"} `})]})]})]})}),e.jsxs("section",{className:"md:w-11/12 lg:w-full min-h-96 flex flex-col justify-between items-center mx-auto ",children:[e.jsxs("div",{className:"w-full h-96 flex justify-start items-center flex-col border mb-4 pb-2",children:[e.jsxs("article",{className:"w-full flex mx-auto border justify-between items-center gap-4 px-4 bg-gray-800 text-white",children:[e.jsxs("div",{className:"w-4/12 text-left",children:[e.jsx("span",{className:"capitalize font-semibold",children:t("categories.form.field.name")})," "]}),e.jsxs("div",{className:"w-4/12 text-center",children:[e.jsx("span",{className:"capitalize font-semibold",children:t("categories.form.field.description")})," "]}),e.jsxs("div",{className:"w-2/12 text-center",children:[e.jsx("span",{className:"capitalize font-semibold",children:t("categories.form.field.state")})," "]}),e.jsxs("div",{className:"w-2/12 text-center",children:[e.jsx("span",{className:"capitalize font-semibold",children:t("categories.change")})," "]})]}),u&&((_=u==null?void 0:u.content)==null?void 0:_.length)>0&&u.content.map((s,n)=>e.jsxs("article",{className:`w-full flex mx-auto border justify-between items-center  gap-4 px-4 py-2.5 text-slate-800 ${n%2==0?"bg-slate-100":"bg-white"} `,children:[e.jsxs("div",{className:"w-4/12 text-left",children:[e.jsx("span",{className:"capitalize font-semibold",children:s.nombre})," "]}),e.jsxs("div",{className:"w-4/12 text-center",children:[e.jsx("span",{className:"capitalize font-semibold",children:s.descripcion||"-"})," "]}),e.jsxs("div",{className:"w-2/12 text-center",children:[e.jsx("span",{className:"capitalize font-semibold",children:s.estado})," "]}),e.jsxs("div",{className:"w-2/12 text-center",children:[e.jsx("span",{className:"capitalize font-semibold",children:e.jsxs("button",{value:s.id_categoria,className:`max-w-24 w-full min-w-20 outline-orange-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden group ${a?"bg-orange-600/50":"bg-orange-600 active:scale-95 shadow"}`,onClick:P,type:"button",disabled:a,children:[t("categories.change"),e.jsx("div",{className:`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${a?"animate-shineInfinity":"group-hover:animate-shine"} `})]})})," "]})]},`${s.id_categoria}${n}`))]}),e.jsx("footer",{className:"relative bottom-0  w-full lg:w-5/12 mx-auto flex justify-between items-center mt-4",children:e.jsxs("div",{className:"w-8/12 mx-auto flex justify-between items-center",children:[e.jsx("div",{className:"",children:e.jsxs("button",{className:`border text-white shadow font-semibold px-2 py-1.5 w-10 h-10 relative overflow-hidden group ${a?"bg-sky-600/50":"bg-sky-600 active:scale-95 shadow"}`,type:"button",disabled:a,children:["<",e.jsx("div",{className:`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${a?"animate-shineInfinity":"group-hover:animate-shine"} `})]})}),e.jsx("div",{className:"",children:e.jsxs("button",{className:`border text-white shadow font-semibold px-2 py-1.5 w-10 h-10 relative overflow-hidden group ${a?"bg-sky-600/50":"bg-sky-600 active:scale-95 shadow"}`,type:"button",disabled:a,children:["<<",e.jsx("div",{className:`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${a?"animate-shineInfinity":"group-hover:animate-shine"} `})]})}),e.jsxs("div",{className:"border text-center",children:[e.jsx("select",{className:"w-16 h-10 px-2.5 py-1.5 text-sm font-semibold border-none focus:border-sky-400 text-center",children:e.jsx("option",{value:i,onChange:s=>c(s.currentTarget.value),children:"1"})}),e.jsx("span",{className:"w-16 h-10 px-2.5 py-1.5 text-sm ",children:"/"}),e.jsx("input",{className:"w-16 h-10 px-2.5 py-1.5 text-sm outline-none text-center",value:u.length,readOnly:!0,disabled:!0})]}),e.jsx("div",{className:"",children:e.jsxs("button",{className:`border text-white shadow font-semibold px-2 py-1.5 w-10 h-10 relative overflow-hidden group ${a?"bg-sky-600/50":"bg-sky-600 active:scale-95 shadow"}`,type:"button",disabled:a,children:[">>",e.jsx("div",{className:`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${a?"animate-shineInfinity":"group-hover:animate-shine"} `})]})}),e.jsx("div",{className:"",children:e.jsxs("button",{className:`border text-white shadow font-semibold px-2 py-1.5 w-10 h-10 relative overflow-hidden group ${a?"bg-sky-600/50":"bg-sky-600 active:scale-95 shadow"}`,type:"button",disabled:a,children:[">",e.jsx("div",{className:`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${a?"animate-shineInfinity":"group-hover:animate-shine"} `})]})})]})})]}),e.jsxs(R,{isOpen:F,onClose:D,children:[e.jsx("div",{className:"w-10/12 flex justify-between items-center border-b mx-auto",children:e.jsx("h3",{className:"text-2xl font-semibold",children:l.id>0?t("action.change"):t("action.new")})}),e.jsx(T,{loading:a,formValues:l,setFormValue:d,handleChange:A,handleSubmit:E})]})]})})};export{X as default};
//# sourceMappingURL=CategoriesPage-Dvpll3cu.js.map
