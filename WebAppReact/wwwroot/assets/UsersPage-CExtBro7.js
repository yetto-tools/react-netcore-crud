import{c as H,P as i,b as v,u as I,r as u,j as e,I as R,f as Z,d as G,e as J,L as K,i as Q,M as X}from"./index-D-iGpgUV.js";import{A as x}from"./Endpoints-BUMKxLBI.js";import{c as D,d as Y}from"./TypesForm-D81Up11P.js";import{S as ee}from"./SeachInput-BVmvwdQ6.js";import{P as se}from"./Pagination-ZwTX7YcA.js";const te=H(l=>({users:[],setUsers:a=>l({users:a})})),P=({loading:l,formValues:a,setFormValue:o,handleChange:r,handleSubmit:c})=>{const{t:s}=v(),{user:h}=I(m=>({user:m.user}));return u.useEffect(()=>{var j;let m=(j=h==null?void 0:h.userData)==null?void 0:j.id_usuario;o(w=>({...w,uid_creacion:m}))},[]),e.jsx(e.Fragment,{children:e.jsx("section",{className:"md:w-10/12 min-h-96 flex flex-col justify-between items-center mx-auto my-10 border",children:e.jsxs("form",{className:"flex flex-wrap justify-between items-center gap-x-4 p-10",children:[e.jsxs("div",{className:"flex justify-between items-center gap-4 w-full",children:[e.jsx("section",{className:"w-10/12 mx-auto inline-flex justify-start",children:e.jsxs("button",{className:`inline-flex gap-4 max-w-32 rounded-sm w-full min-w-20 outline-green-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden capitalize group ${l?"bg-green-600/50":"bg-green-600 active:scale-95 shadow"}`,onClick:c,type:"submit",disabled:l,children:[e.jsx("span",{children:e.jsx(R,{})}),e.jsx("span",{children:a.id_usuario==0?s("users.save"):s("users.change")}),e.jsx("div",{className:`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${l?"animate-shineInfinity":"group-hover:animate-shine"} `})]})}),e.jsxs("label",{className:"inline-flex flex-1 flex-col",children:[e.jsx("span",{className:"capitalize font-semibold text-sm py-1.5",children:s("users.form.field.state")}),e.jsx("input",{type:"checkbox",name:"estado",className:"px-2 py-1.5 border outline-none focus:border-sky-500 w-5 h-10 bg-slate-50",placeholder:s("users.form.field.state"),onChange:r,checked:a.estado===1,required:!0})]})]}),e.jsxs("div",{className:"flex flex-wrap justify-between items-center gap-4",children:[e.jsxs("label",{className:"flex-1 flex-col hidden",children:[e.jsx("span",{className:"capitalize font-semibold text-sm py-1.5",children:s("users.form.field.id")}),e.jsx("input",{type:"hidden",name:"id_usuario",className:"px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50",placeholder:s("users.form.field.id"),onChange:r,value:a.id,disabled:!0})]}),e.jsxs("label",{className:"inline-flex flex-1 flex-col",children:[e.jsx("span",{className:"capitalize font-semibold text-sm py-1.5",children:s("users.form.field.username")}),e.jsx("input",{type:"text",name:"usuario",className:"px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50",placeholder:s("users.form.field.username"),onChange:r,value:a.usuario,required:!0})]}),e.jsxs("label",{className:"inline-flex flex-1 flex-col",children:[e.jsx("span",{className:"capitalize font-semibold text-sm py-1.5",children:s("users.form.field.email")}),e.jsx("input",{type:"text",name:"correo",className:"px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50",placeholder:s("users.form.field.email"),onChange:r,value:a.correo,required:!0})]}),e.jsxs("label",{className:"inline-flex flex-1 flex-col",children:[e.jsx("span",{className:"capitalize font-semibold text-sm py-1.5",children:s("users.form.field.password")}),e.jsx("input",{type:"password",name:"password",className:"px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50",placeholder:s("users.form.field.password"),onChange:r,value:a.password,required:!0})]}),e.jsxs("label",{className:"inline-flex flex-1 flex-col hidden",children:[e.jsx("span",{className:"capitalize font-semibold text-sm py-1.5",children:s("users.form.field.created")}),e.jsx("input",{type:"hidden",name:"uid_creacion",className:"px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50",placeholder:s("users.form.field.created"),value:a.uid_creacion,onChange:r,required:!0,disabled:!0})]}),e.jsxs("label",{className:"inline-flex flex-1 flex-col",children:[e.jsx("span",{className:"capitalize font-semibold text-sm py-1.5",children:s("users.form.field.comment")}),e.jsx("textarea",{rows:"4",cols:"50",name:"comentario",className:"px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50",placeholder:s("users.form.field.comment"),onChange:r,value:a.comentario})]})]})]})})})};P.propTypes={loading:i.bool,formValues:i.object,setFormValue:i.func,handleChange:i.func,handleSubmit:i.func};const F=({children:l})=>{const{t:a}=v();return e.jsxs(e.Fragment,{children:[e.jsxs("article",{className:"w-full flex mx-auto border justify-between items-center gap-4 px-4 bg-gray-800 text-white",children:[e.jsxs("div",{className:"w-4/12 text-left",children:[e.jsx("span",{className:"capitalize font-semibold",children:a("users.form.field.username")})," "]}),e.jsxs("div",{className:"w-4/12 text-center",children:[e.jsx("span",{className:"capitalize font-semibold",children:a("users.form.field.email")})," "]}),e.jsxs("div",{className:"w-2/12 text-center",children:[e.jsx("span",{className:"capitalize font-semibold",children:a("users.form.field.state")})," "]}),e.jsxs("div",{className:"w-2/12 text-center",children:[e.jsx("span",{className:"capitalize font-semibold",children:a("users.change")})," "]})]}),e.jsx("article",{className:"overflow-y-scroll h-96 w-full",children:l})]})},L=({t:l,users:a,handleUpdate:o,loading:r})=>e.jsx(e.Fragment,{children:a.map((c,s)=>e.jsxs("div",{className:`w-full flex mx-auto border justify-between items-center  gap-4 px-4 py-2.5 text-slate-800 ${s%2==0?"bg-slate-100":"bg-white"} `,children:[e.jsxs("div",{className:"w-4/12 text-left",children:[e.jsx("span",{className:" font-semibold",children:c.nombre})," "]}),e.jsxs("div",{className:"w-4/12 text-center",children:[e.jsx("span",{className:" font-semibold",children:c.correo||"-"})," "]}),e.jsx("div",{className:"w-2/12 text-center",children:e.jsx("span",{className:"capitalize text-center font-semibold inline-flex justify-center w-full items-center",children:c.estado==1?e.jsx("span",{className:"text-center border rounded-full px-2 text-xs text-sky-700 bg-sky-200 border-sky-700 font-semibold",children:l("state.active")}):e.jsx("span",{className:"text-center border rounded-full px-2 text-xs text-gray-700 bg-gray-200 border-gray-700 font-semibold",children:l("state.inactive")})})}),e.jsxs("div",{className:"w-2/12 text-center",children:[e.jsx("span",{className:"capitalize font-semibold",children:e.jsxs("button",{value:c.id_usuario,className:`max-w-24 rounded-sm text-xs outline-orange-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden capitalize group ${r?"bg-orange-600/50":"bg-orange-600 active:scale-95 shadow"}`,onClick:o,type:"button",disabled:r,children:[e.jsx("span",{children:e.jsx(Z,{})}),e.jsx("div",{className:`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${r?"animate-shineInfinity":"group-hover:animate-shine"} `})]})})," "]})]},`${c.id_usuario}${s}`))});F.propTypes={children:i.node};L.propTypes={t:i.func,users:i.any,handleUpdate:i.func,loading:i.bool,index:i.number};const de=()=>{var _,U;const{t:l}=v(),[a,o]=u.useState(D),[r,c]=u.useState(""),[s,h]=u.useState(1),[m,j]=u.useState(25),[w,k]=u.useState(!1),{user:p}=I(t=>({user:t.user})),{setUsers:T}=te(t=>({setProduct:t.setUsers})),{callApi:C,data:ae,getData:z,getStatusCode:M,refreshData:$,loading:d,error:le}=G(t=>({callApi:t.callApi,data:t.data,getData:t.getData,getStatusCode:t.getStatusCode,refreshData:t.refreshData,loading:t.loading,error:t.error})),n=z(`${x.users.url}/list?page_size=${m}&page_number=${s}`);u.useEffect(()=>{var t;(t=p==null?void 0:p.userData)!=null&&t.id_usuario&&o(f=>({...f,uid_creacion:p.userData.id_usuario}))},[p]);const b=u.useCallback(()=>{$(`${x.users.url}/list?page_size=${m}&page_number=${s}`)},[$,s,m]);u.useEffect(()=>{b()},[s,b]);const A=t=>{const{name:f,value:g,type:y,checked:N}=t.target,W=y==="checkbox"?N?1:0:g;o(B=>({...B,[f]:W}))},E=t=>{t.preventDefault(),C(`${x.users.url}/save`,x.users.method,a),console(z(`${x.users.url}/save`)),console.log(M(`${x.users.url}/save`))},S=()=>k(!0),q=()=>{o(D),k(!1)},O=t=>{t.preventDefault(),C(`${x.users_search.url}`,x.users.method,a),b()},V=t=>{const f=t.currentTarget.value;console.log(t.currentTarget);const g=n.content.find(N=>N.id_usuario===Number(f));console.log(g);const y=Y(g);o(y),S()};return e.jsx(J,{children:e.jsxs("div",{className:"flex-1 w-full",children:[e.jsxs("section",{className:"bg-white px-4 pt-4 inline-flex justify-between items-center w-full border-b mb-4 ",children:[e.jsxs("h1",{className:"text-2xl font-semibold mb-1 pr-4 inline-flex items-center gap-2",children:[e.jsxs(K,{to:"/",children:[" ",l("home.title")]}),e.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 512 512",height:"24px",width:"24px",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"m184 112 144 144-144 144"})}),e.jsx("span",{children:l("users.title")})]}),e.jsx("span",{children:e.jsx("button",{className:"bg-orange-400 text-white p-1 shadow hover:scale-95",value:"refresh",onClick:b,children:e.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 24 24",height:"16px",width:"16px",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"})})})})]}),e.jsx("section",{className:"w-full bg-white divide-y border-b pb-4 mb-2.5",children:e.jsxs("section",{className:"w-full px-5 mx-auto flex justify-between items-center",children:[e.jsx("div",{className:"w-44",children:e.jsxs("button",{className:`inline-flex gap-4 max-w-32 rounded-sm w-full min-w-20 outline-green-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden capitalize group ${d?"bg-green-600/50":"bg-green-600 active:scale-95 shadow"}`,onClick:S,type:"submit",disabled:d,children:[e.jsx("span",{children:e.jsx(Q,{})}),e.jsx("span",{children:l("categories.new")}),e.jsx("div",{className:`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${d?"animate-shineInfinity":"group-hover:animate-shine"} `})]})}),e.jsxs("div",{className:"inline-flex",children:[e.jsx(ee,{searchValue:r,setSearchValue:c}),e.jsxs("button",{className:`max-w-24 w-full min-w-20 outline-sky-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden group ${d?"bg-sky-600/50":"bg-sky-600 active:scale-95 shadow"}`,onClick:O,type:"button",disabled:d,children:[l("categories.search"),e.jsx("div",{className:`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${d?"animate-shineInfinity":"group-hover:animate-shine"} `})]})]})]})}),e.jsxs("section",{className:"md:w-11/12 lg:w-full min-h-96 flex flex-col justify-between items-center mx-auto ",children:[e.jsx("div",{className:"w-full flex h-5/6  min-h-96 justify-start items-center flex-col border mb-4 pb-2",children:e.jsx(F,{children:e.jsx(L,{t:l,users:n&&((_=n==null?void 0:n.content)==null?void 0:_.length)>0&&n.content!=null?n.content:[],handleUpdate:V,loading:d})})}),e.jsx(se,{page:s,totalPages:n&&((U=n==null?void 0:n.response)==null?void 0:U.length)>0?n.response[0].total_pages:0,setPage:T,loading:d})]}),e.jsx(X,{isOpen:w,onClose:q,children:e.jsx(P,{loading:d,formValues:a,setFormValue:o,handleChange:A,handleSubmit:E})})]})})};export{de as default};
//# sourceMappingURL=UsersPage-CExtBro7.js.map
