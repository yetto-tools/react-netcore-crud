import{l as V,P as i,u as C,b as U,r as u,j as e,I as W,f as B,c as H,e as R,L as Z,i as G,M as J}from"./index-DAMwrz_R.js";import{A as j,a as m}from"./useFetchDataStore-nJBCbooK.js";import{e as I,f as K}from"./TypesForm-D4Kl22kW.js";import{S as Q}from"./SeachInput-Dr05qpVN.js";import{P as X}from"./Pagination-BdG9U5wy.js";const Y=V(l=>({users:[],setUsers:t=>l({users:t})})),F=({loading:l,formValues:t,setFormValue:o,handleChange:n,handleSubmit:c})=>{const{t:s}=C(),{auth:g}=U(p=>({user:p.user}));return u.useEffect(()=>{var f;let p=(f=g==null?void 0:g.userData)==null?void 0:f.id_usuario;o(x=>({...x,uid_creacion:p}))},[]),e.jsx(e.Fragment,{children:e.jsx("section",{className:"md:w-10/12 min-h-96 flex flex-col justify-between items-center mx-auto my-10 border",children:e.jsxs("form",{className:"flex flex-wrap justify-between items-center gap-x-4 p-10",children:[e.jsxs("div",{className:"flex justify-between items-center gap-4 w-full",children:[e.jsx("section",{className:"w-10/12 mx-auto inline-flex justify-start",children:e.jsxs("button",{className:`inline-flex gap-4 max-w-32 rounded-sm w-full min-w-20 outline-green-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden capitalize group ${l?"bg-green-600/50":"bg-green-600 active:scale-95 shadow"}`,onClick:c,type:"submit",disabled:l,children:[e.jsx("span",{children:e.jsx(W,{})}),e.jsx("span",{children:t.id_usuario==0?s("users.save"):s("users.change")}),e.jsx("div",{className:`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${l?"animate-shineInfinity":"group-hover:animate-shine"} `})]})}),e.jsxs("label",{className:"inline-flex flex-1 flex-col",children:[e.jsx("span",{className:"capitalize font-semibold text-sm py-1.5",children:s("users.form.field.state")}),e.jsx("input",{type:"checkbox",name:"estado",className:"px-2 py-1.5 border outline-none focus:border-sky-500 w-5 h-10 bg-slate-50",placeholder:s("users.form.field.state"),onChange:n,checked:t.estado===1,required:!0})]})]}),e.jsxs("div",{className:"flex flex-wrap justify-between items-center gap-4",children:[e.jsxs("label",{className:"flex-1 flex-col hidden",children:[e.jsx("span",{className:"capitalize font-semibold text-sm py-1.5",children:s("users.form.field.id")}),e.jsx("input",{type:"hidden",name:"id_usuario",className:"px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50",placeholder:s("users.form.field.id"),onChange:n,value:t.id,disabled:!0})]}),e.jsxs("label",{className:"inline-flex flex-1 flex-col",children:[e.jsx("span",{className:"capitalize font-semibold text-sm py-1.5",children:s("users.form.field.username")}),e.jsx("input",{type:"text",name:"usuario",className:"px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50",placeholder:s("users.form.field.username"),onChange:n,value:t.usuario,required:!0})]}),e.jsxs("label",{className:"inline-flex flex-1 flex-col",children:[e.jsx("span",{className:"capitalize font-semibold text-sm py-1.5",children:s("users.form.field.email")}),e.jsx("input",{type:"text",name:"correo",className:"px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50",placeholder:s("users.form.field.email"),onChange:n,value:t.correo,required:!0})]}),e.jsxs("label",{className:"inline-flex flex-1 flex-col",children:[e.jsx("span",{className:"capitalize font-semibold text-sm py-1.5",children:s("users.form.field.password")}),e.jsx("input",{type:"password",name:"password",className:"px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50",placeholder:s("users.form.field.password"),onChange:n,value:t.password,required:!0})]}),e.jsxs("label",{className:"inline-flex flex-1 flex-col hidden",children:[e.jsx("span",{className:"capitalize font-semibold text-sm py-1.5",children:s("users.form.field.created")}),e.jsx("input",{type:"hidden",name:"uid_creacion",className:"px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50",placeholder:s("users.form.field.created"),value:t.uid_creacion,onChange:n,required:!0,disabled:!0})]}),e.jsxs("label",{className:"inline-flex flex-1 flex-col",children:[e.jsx("span",{className:"capitalize font-semibold text-sm py-1.5",children:s("users.form.field.comment")}),e.jsx("textarea",{rows:"4",cols:"50",name:"comentario",className:"px-2 py-1.5 border outline-none focus:border-sky-500 bg-slate-50",placeholder:s("users.form.field.comment"),onChange:n,value:t.comentario})]})]})]})})})};F.propTypes={loading:i.bool,formValues:i.object,setFormValue:i.func,handleChange:i.func,handleSubmit:i.func};const P=({children:l})=>{const{t}=C();return e.jsxs(e.Fragment,{children:[e.jsxs("article",{className:"w-full flex mx-auto border justify-between items-center gap-4 px-4 bg-gray-800 text-white",children:[e.jsxs("div",{className:"w-4/12 text-left",children:[e.jsx("span",{className:"capitalize font-semibold",children:t("users.form.field.username")})," "]}),e.jsxs("div",{className:"w-4/12 text-center",children:[e.jsx("span",{className:"capitalize font-semibold",children:t("users.form.field.email")})," "]}),e.jsxs("div",{className:"w-2/12 text-center",children:[e.jsx("span",{className:"capitalize font-semibold",children:t("users.form.field.state")})," "]}),e.jsxs("div",{className:"w-2/12 text-center",children:[e.jsx("span",{className:"capitalize font-semibold",children:t("users.change")})," "]})]}),e.jsx("article",{className:"overflow-y-scroll h-96 w-full",children:l})]})},T=({t:l,users:t,handleUpdate:o,loading:n})=>e.jsx(e.Fragment,{children:t.map((c,s)=>e.jsxs("div",{className:`w-full flex mx-auto border justify-between items-center  gap-4 px-4 py-2.5 text-slate-800 ${s%2==0?"bg-slate-100":"bg-white"} `,children:[e.jsxs("div",{className:"w-4/12 text-left",children:[e.jsx("span",{className:" font-semibold",children:c.nombre})," "]}),e.jsxs("div",{className:"w-4/12 text-center",children:[e.jsx("span",{className:" font-semibold",children:c.correo||"-"})," "]}),e.jsx("div",{className:"w-2/12 text-center",children:e.jsx("span",{className:"capitalize text-center font-semibold inline-flex justify-center w-full items-center",children:c.estado==1?e.jsx("span",{className:"text-center border rounded-full px-2 text-xs text-sky-700 bg-sky-200 border-sky-700 font-semibold",children:l("state.active")}):e.jsx("span",{className:"text-center border rounded-full px-2 text-xs text-gray-700 bg-gray-200 border-gray-700 font-semibold",children:l("state.inactive")})})}),e.jsxs("div",{className:"w-2/12 text-center",children:[e.jsx("span",{className:"capitalize font-semibold",children:e.jsxs("button",{value:c.id_usuario,className:`max-w-24 rounded-sm text-xs outline-orange-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden capitalize group ${n?"bg-orange-600/50":"bg-orange-600 active:scale-95 shadow"}`,onClick:o,type:"button",disabled:n,children:[e.jsx("span",{children:e.jsx(B,{})}),e.jsx("div",{className:`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${n?"animate-shineInfinity":"group-hover:animate-shine"} `})]})})," "]})]},`${c.id_usuario}${s}`))});P.propTypes={children:i.node};T.propTypes={t:i.func,users:i.any,handleUpdate:i.func,loading:i.bool,index:i.number};const re=()=>{var L,_,$;const{t:l}=C(),[t,o]=u.useState(I),[n,c]=u.useState(""),[s,g]=u.useState(1);u.useState(25);const[p,f]=u.useState(!1),{auth:x}=U(a=>({auth:a.auth})),{isLoading:d,setIsLoading:w}=H(a=>({isLoading:a.isLoading,setIsLoading:a.setIsLoading})),{users:r,setUsers:h}=Y(a=>({users:a.user,setUsers:a.setUsers}));u.useEffect(()=>{var a;(a=x==null?void 0:x.userData)!=null&&a.id_usuario&&o(b=>({...b,uid_creacion:x.userData.id_usuario}))},[x]);const N=u.useCallback(async()=>{await j({setStore:h,url:`${m.user.users.url}?page_size=25&page_number=${s}`,method:m.user.users.method,setIsLoading:w})},[j,s]);u.useEffect(()=>{N()},[s,N]);const M=a=>{const{name:b,value:y,type:v,checked:k}=a.target,A=v==="checkbox"?k?1:0:y;o(O=>({...O,[b]:A}))},D=a=>{a.preventDefault(),j({setStore:h,url:m.user.save.url,method:m.user.save.method,body:t,setIsLoading:w}),S()},z=()=>f(!0),S=()=>{o(I),f(!1)},E=async()=>{n.trim().length>0?await j({setStore:h,url:`${m.user.search.url}?value=${n}`,method:m.user.search.method,setIsLoading:w}):await j({setStore:h,url:`${m.user.users.url}?page_size=25&page_number=${s}`,method:m.user.users.method,setIsLoading:w})},q=a=>{const b=a.currentTarget.value;console.log(a.currentTarget);const y=r.content.find(k=>k.id_usuario===Number(b));console.log(y);const v=K(y);o(v),z()};return e.jsx(R,{children:e.jsxs("div",{className:"flex-1 w-full",children:[e.jsxs("section",{className:"bg-white px-4 pt-4 inline-flex justify-between items-center w-full border-b mb-4 ",children:[e.jsxs("h1",{className:"text-2xl font-semibold mb-1 pr-4 inline-flex items-center gap-2",children:[e.jsxs(Z,{to:"/",children:[" ",l("home.title")]}),e.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 512 512",height:"24px",width:"24px",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48",d:"m184 112 144 144-144 144"})}),e.jsx("span",{children:l("users.title")})]}),e.jsx("span",{children:e.jsx("button",{className:"bg-orange-400 text-white p-1 shadow hover:scale-95",value:"refresh",onClick:N,children:e.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 24 24",height:"16px",width:"16px",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"})})})})]}),e.jsx("section",{className:"w-full bg-white divide-y border-b pb-4 mb-2.5",children:e.jsxs("section",{className:"w-full px-5 mx-auto flex justify-between items-center",children:[e.jsx("div",{className:"w-44",children:e.jsxs("button",{className:`inline-flex gap-4 max-w-32 rounded-sm w-full min-w-20 outline-green-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden capitalize group ${d?"bg-green-600/50":"bg-green-600 active:scale-95 shadow"}`,onClick:z,type:"submit",disabled:d,children:[e.jsx("span",{children:e.jsx(G,{})}),e.jsx("span",{children:l("users.new")}),e.jsx("div",{className:`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${d?"animate-shineInfinity":"group-hover:animate-shine"} `})]})}),e.jsxs("div",{className:"inline-flex",children:[e.jsx(Q,{searchValue:n,setSearchValue:c}),e.jsxs("button",{className:`max-w-24 w-full min-w-20 outline-sky-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden group ${d?"bg-sky-600/50":"bg-sky-600 active:scale-95 shadow"}`,onClick:E,type:"button",disabled:d,children:[l("users.search"),e.jsx("div",{className:`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${d?"animate-shineInfinity":"group-hover:animate-shine"} `})]})]})]})}),e.jsxs("section",{className:"md:w-11/12 lg:w-full min-h-96 flex flex-col justify-between items-center mx-auto ",children:[e.jsx("div",{className:"w-full flex h-5/6  min-h-96 justify-start items-center flex-col border mb-4 pb-2",children:e.jsx(P,{children:e.jsx(T,{t:l,users:r&&((_=(L=r==null?void 0:r.data)==null?void 0:L.content)==null?void 0:_.length)>0&&(r==null?void 0:r.data.content)!=null?r==null?void 0:r.data.content:[],handleUpdate:q,isLoading:d})})}),e.jsx(X,{page:s,totalPages:r&&(($=r==null?void 0:r.response)==null?void 0:$.length)>0?r.response[0].total_pages:0,setPage:h,isLoading:d})]}),e.jsx(J,{isOpen:p,onClose:S,children:e.jsx(F,{isLoading:d,formValues:t,setFormValue:o,handleChange:M,handleSubmit:D})})]})})};export{re as default};
//# sourceMappingURL=UsersPage-C9rct8L3.js.map
