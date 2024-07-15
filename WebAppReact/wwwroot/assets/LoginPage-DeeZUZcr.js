import{B as c,u as w,a as b,b as y,r as f,c as j,d as k,j as e,L as N}from"./index-DvwukcQr.js";import{A as L,a as u}from"./useFetchDataStore-Q1Ss8ImU.js";import{L as v}from"./LayoutBasic-Aev4J5xY.js";function d({type:t,message:a,options:o}){switch(t){case"error":c.error(a,{...o,toastId:a});break;case"info":c.info(a,{...o,toastId:a});break;case"success":c.success(a,{...o,toastId:a});break;case"warn":c.warn(a,{...o,toastId:a});break;default:c(a,{...o,toastId:a});break}}const I=()=>{const{t}=w(),a=b(),{login:o}=y(),m=f.useRef(null),{isLoading:r,setIsLoading:x}=j(n=>({isLoading:n.isLoading,setIsLoading:n.setIsLoading})),{usuario:s,setUsuario:p}=k(n=>({usuario:n.usuario,setUsuario:n.setUsuario})),g=n=>{n.preventDefault();const l=new FormData(m.current),i=l.get("username"),h=l.get("password");if(i.length==0){d({type:"warn",message:`${t("login.required_credentials")}`});return}L({setStore:p,url:u.login.url,method:u.login.method,body:{username:i,password:h},setIsLoading:x}),console.log(s)};return f.useEffect(()=>{var n,l,i;if(!r&&s&&(n=s==null?void 0:s.data)!=null&&n.response&&((l=s==null?void 0:s.data)==null?void 0:l.response.length)>0&&(i=s==null?void 0:s.data)!=null&&i.response[0].message)switch(s.data.response[0].result){case-1:d({type:"error",message:`${s.data.response[0].message}`});break;case 0:d({type:"warn",message:`${s.data.response[0].message}`});break;case 1:o({name:s.data.content[0].nombre,userData:s.data.content[0],token:s.data.token[0]}),a("/"),d({type:"success",message:`${s.data.response[0].message}: ${s.data.content[0].nombre}`,options:{autoClose:2e3}});break;default:d({type:"info",message:`${s.data.response[0].message}`})}},[s,r]),r&&!s?e.jsx(e.Fragment,{children:e.jsx("p",{className:"font-semibold text-dsPrimaryLight px-2 py-2 bg-slate-50 border",children:"Enviando..."})}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"bg-white w-2/5 max-w-md min-w-80 h-96 border shadow-md flex justify-center items-center",children:e.jsx("form",{ref:m,className:"w-full",children:e.jsxs("div",{className:"w-full flex flex-col justify-between items-center gap-y-2.5",children:[e.jsx("div",{children:e.jsx("span",{className:"font-semibold text-2xl",children:t("login.welcome")})}),e.jsxs("label",{className:"flex flex-col flex-now w-7/12",children:[e.jsx("span",{className:"w-full px-1 py-1.5 font-semibold capitalize",children:t("login.form.field.username")}),e.jsx("input",{type:"text",name:"username",placeholder:t("login.form.field.username"),className:"border px-2 py-1.5 outline-none focus:outline-sky-600 focus:bg-sky-50"})]}),e.jsxs("label",{className:"flex flex-col flex-now w-7/12",children:[e.jsx("span",{className:"w-full px-1 py-1.5 font-semibold capitalize",children:t("login.form.field.password")}),e.jsx("input",{type:"password",name:"password",placeholder:t("login.form.field.password"),className:"border px-2 py-1.5 outline-none focus:outline-sky-600 focus:bg-sky-50"})]}),e.jsx("div",{className:"w-8/12 mx-auto text-right px-4",children:e.jsx(N,{to:"/register",className:"font-medium text-sm text-sky-700 capitalize cursor-pointer",children:t("register.title")})}),e.jsx("div",{className:"flex flex-col flex-now justify-center items-center w-7/12 mx-auto mt-4",children:e.jsxs("button",{className:`max-w-72  rounded-sm w-full min-w-20 outline-sky-400 px-2.5 py-1.5 text-white font-semibold relative overflow-hidden group ${r?"bg-sky-600/50":"bg-sky-600 active:scale-95"}`,onClick:g,type:"submit",disabled:r,children:[t("login.form.send"),e.jsx("div",{className:`absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ${r?"animate-shineInfinity":"group-hover:animate-shine"} `})]})})]})})})})};function z(){return e.jsx(v,{className:"flex justify-center items-center w-screen mx-auto h-[720px]",children:e.jsx(I,{})})}export{z as default};
//# sourceMappingURL=LoginPage-DeeZUZcr.js.map