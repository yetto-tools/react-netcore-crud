import{c}from"./index-DG1w4pHT.js";const u=async(n,s="GET",a=null,r="application/json",e=null)=>{const t={method:s,headers:{"Content-Type":r},body:a?JSON.stringify(a):null};a instanceof FormData?t.body=a:(t.headers["Content-Type"]=r,t.body=a?JSON.stringify(a):null),e&&(t.headers.Authorization=`Bearer ${e}`);const o=await fetch(n,t);if(!o.ok)throw new Error(`HTTP error! status: ${o.status}`);return o.json()},d=c((n,s)=>({data:[],loading:!1,error:null,callApi:async(a,r="GET",e=null,t="application/json",o=null)=>{n({loading:!0,error:null});try{const l=await u(a,r,e,t,o);n(i=>({data:{...i.data,[a]:l},loading:!1}))}catch(l){n({loading:!1,error:l.message})}},getData:a=>s().data[a]||[],refreshData:async(a,r="GET",e=null)=>{await s().callApi(a,r,e)},searchData:(a,r)=>(s().data[a]||[]).filter(t=>JSON.stringify(t).toLowerCase().includes(r.toLowerCase()))}));export{d as u};
//# sourceMappingURL=useFetchDataStore-ChHTupvS.js.map
