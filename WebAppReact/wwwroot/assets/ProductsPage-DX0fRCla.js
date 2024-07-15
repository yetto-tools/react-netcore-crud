import{c as R,P as d,b as $,j as e,f as O,r as o,u as U,d as q,e as B,L as G,g as H,h as J,i as K,k as Q,M as W}from"./index-Bp4mt10G.js";import{A as j}from"./Endpoints-CAZkxTYj.js";import{a as z,b as X}from"./TypesForm-D81Up11P.js";import{P as Y}from"./ProductForm-DmHCRGOw.js";import{S as Z}from"./SeachInput-aTzG8heU.js";import{P as ee}from"./Pagination-Dk320SBs.js";const se=R(a=>({productos:[],setProducts:n=>a({productos:n})})),S=({children:a})=>{const{t:n}=$();return e.jsxs(e.Fragment,{children:[e.jsxs("article",{className:"w-full flex mx-auto border justify-between items-center gap-4 px-4 bg-gray-800 text-white",children:[e.jsxs("div",{className:"w-4/12 text-left",children:[e.jsx("span",{className:"capitalize font-semibold",children:n("products.form.field.name")})," "]}),e.jsxs("div",{className:"w-4/12 text-center",children:[e.jsx("span",{className:"capitalize font-semibold",children:n("products.form.field.description")})," "]}),e.jsxs("div",{className:"w-2/12 text-center",children:[e.jsx("span",{className:"capitalize font-semibold",children:n("products.form.field.state")})," "]}),e.jsxs("div",{className:"w-2/12 text-center",children:[e.jsx("span",{className:"capitalize font-semibold",children:n("products.change")})," "]})]}),e.jsx("article",{className:"overflow-y-scroll h-96 w-full",children:a})]})},_=({t:a,products:n,handleUpdate:i,loading:u})=>e.jsx(e.Fragment,{children:n.map((c,r)=>e.jsxs("div",{className:`w-full flex mx-auto border justify-between items-center  gap-4 px-4 py-2.5 text-slate-800 ${r%2==0?"bg-slate-100":"bg-white"} `,children:[e.jsxs("div",{className:"w-4/12 text-left",children:[e.jsx("span",{className:"capitalize font-semibold",children:c.nombre})," "]}),e.jsxs("div",{className:"w-4/12 text-center",children:[e.jsx("span",{className:"capitalize font-semibold",children:c.descripcion||"-"})," "]}),e.jsx("div",{className:"w-2/12 text-center",children:e.jsx("span",{className:"capitalize text-center font-semibold inline-flex justify-center w-full items-center",children:c.estado==1?e.jsx("span",{className:"text-center border rounded-full px-2 text-xs text-sky-700 bg-sky-200 border-sky-700 font-semibold",children:a("state.active")}):e.jsx("span",{className:"text-center border rounded-full px-2 text-xs text-gray-700 bg-gray-200 border-gray-700 font-semibold",children:a("state.inactive")})})}),e.jsxs("div",{className:"w-2/12 text-center",children:[e.jsx("span",{className:"capitalize font-semibold",children:e.jsxs("button",{value:c.id_categoria,className:`max-w-24 rounded-sm text-xs outline-orange-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden capitalize group ${u?"bg-orange-600/50":"bg-orange-600 active:scale-95 shadow"}`,onClick:i,type:"button",disabled:u,children:[e.jsx("span",{children:e.jsx(O,{})}),e.jsx("div",{className:`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${u?"animate-shineInfinity":"group-hover:animate-shine"} `})]})})," "]})]},`${c.id_categoria}${r}`))});S.propTypes={children:d.node};_.propTypes={t:d.func,products:d.any,handleUpdate:d.func,loading:d.bool,index:d.number};const me=()=>{var P,k;const{t:a}=$(),[n,i]=o.useState(z),[u,c]=o.useState(""),[r,te]=o.useState(1),[h,ae]=o.useState(25),[w,v]=o.useState(!1),{user:m}=U(s=>({user:s.user})),{setProduct:D}=se(s=>({setProduct:s.setProduct})),{callApi:I,data:ne,getData:C,refreshData:y,loading:l,error:le}=q(s=>({callApi:s.callApi,data:s.data,getData:s.getData,refreshData:s.refreshData,loading:s.loading,error:s.error})),t=C(`${j.products_list.url}?page_size=${h}&page_number=${r}`);o.useEffect(()=>{var s;(s=m==null?void 0:m.userData)!=null&&s.id_usuario&&i(x=>({...x,uid_creacion:m.userData.id_usuario}))},[m]);const p=o.useCallback(()=>{y(`${j.products_list.url}?page_size=${h}&page_number=${r}`)},[y,r,h]);o.useEffect(()=>{p()},[r,p]);const F=s=>{const{name:x,value:f,type:b,checked:g}=s.target,E=b==="checkbox"?g?1:0:f;i(L=>({...L,[x]:E}))},T=s=>{s.preventDefault(),I(`${j.products.url}/save`,"PUT",n)},N=()=>v(!0),V=()=>{i(z),v(!1)},A=s=>{s.preventDefault(),p()},M=s=>{const x=s.currentTarget.value,f=t.content.find(g=>g.id_producto===Number(x)),b=X(f);i(b),N()};return e.jsx(B,{children:e.jsxs("div",{className:"flex-1 w-full",children:[e.jsxs("section",{className:"bg-white px-4 pt-4 inline-flex justify-between items-center w-full border-b mb-4 ",children:[e.jsxs("h1",{className:"text-2xl font-semibold mb-1 pr-4 inline-flex items-center gap-2",children:[e.jsxs(G,{to:"/",children:[" ",a("home.title")]}),e.jsx(H,{}),e.jsx("span",{children:a("products.title")})]}),e.jsx("span",{children:e.jsx("button",{className:"bg-orange-400 text-white p-1 shadow hover:scale-95",value:"refresh",onClick:p,children:e.jsx(J,{})})})]}),e.jsx("section",{className:"w-full bg-white divide-y border-b pb-4 mb-2.5",children:e.jsxs("section",{className:"w-full px-5 mx-auto flex justify-between items-center",children:[e.jsx("div",{className:"w-44",children:e.jsxs("button",{className:`inline-flex gap-4 max-w-32 rounded-sm w-full min-w-20 outline-green-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden capitalize group ${l?"bg-green-600/50":"bg-green-600 active:scale-95 shadow"}`,onClick:N,type:"submit",disabled:l,children:[e.jsx(K,{}),a("categories.new"),e.jsx("div",{className:`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${l?"animate-shineInfinity":"group-hover:animate-shine"} `})]})}),e.jsxs("div",{className:"inline-flex",children:[e.jsx(Z,{searchValue:u,setSearchValue:c}),e.jsxs("button",{className:`max-w-24 outline-sky-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden group ${l?"bg-sky-600/50":"bg-sky-600 active:scale-95 shadow"}`,onClick:A,type:"button",disabled:l,children:[e.jsx(Q,{}),e.jsx("div",{className:`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${l?"animate-shineInfinity":"group-hover:animate-shine"} `})]})]})]})}),e.jsxs("section",{className:"md:w-11/12 lg:w-full min-h-96 flex flex-col justify-between items-center mx-auto ",children:[e.jsx("div",{className:"w-full flex h-5/6  min-h-96 justify-start items-center flex-col border mb-4 pb-2",children:e.jsx(S,{children:e.jsx(_,{t:a,products:t&&((P=t==null?void 0:t.content)==null?void 0:P.length)>0&&t.content!=null?t.content:[],handleUpdate:M,loading:l})})}),e.jsx(ee,{page:r,totalPages:t&&((k=t==null?void 0:t.response)==null?void 0:k.length)>0?t.response[0].total_pages:0,setPage:D,loading:l})]}),e.jsx(W,{isOpen:w,onClose:V,children:e.jsx(Y,{loading:l,formValues:n,setFormValue:i,handleChange:F,handleSubmit:T,isModalOpen:w})})]})})};export{me as default};
//# sourceMappingURL=ProductsPage-DX0fRCla.js.map