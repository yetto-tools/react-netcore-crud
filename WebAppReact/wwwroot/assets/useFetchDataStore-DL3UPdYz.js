import"./index-CnFjH1Bv.js";const e="http://localhost:5193/api",$={category:{url:`${e}/Category`,method:"GET",categories:{url:`${e}/Category/categories`,method:"GET"},search:{url:`${e}/Category/search`,method:"GET"},save:{url:`${e}/Category/save`,method:"PUT"}},product:{url:`${e}/Product`,method:"GET",products:{url:`${e}/Product/products`,method:"GET"},search:{url:`${e}/Product/search`,method:"POST"},save:{url:`${e}/Product/save`,method:"PUT"}},invoice:{url:`${e}/Invoice`,method:"GET",invoices:{url:`${e}/Invoice/invoices`,method:"POST"},search:{url:`${e}/Invoice/search`,method:"POST"},save:{url:`${e}/Invoice/save`,method:"PUT"}},customer:{url:`${e}/Customer`,method:"GET",customers:{url:`${e}/Customer/customers`,method:"GET"},search:{url:`${e}/Customer/search`,method:"GET"},save:{url:`${e}/Customer/save`,method:"PUT"}},user:{url:`${e}/User`,method:"GET",users:{url:`${e}/User/users`,method:"POST"},search:{url:`${e}/User/search`,method:"POST"},save:{url:`${e}/User/save`,method:"PUT"}},sale:{url:`${e}/Sale`,method:"GET",sales:{url:`${e}/Sale/sales`,method:"POST"},search:{url:`${e}/Sale/search`,method:"POST"},save:{url:`${e}/Sale/save`,method:"PUT"}},register:{url:`${e}/User/save`,method:"PUT"},login:{url:`${e}/Auth/login`,method:"POST"}},m=async(c=()=>{},h=null,d="GET",r=null,l="application/json",u=null,o)=>{const a={method:d,headers:{"Content-Type":l},body:r?JSON.stringify(r):null};r instanceof FormData?a.body=r:(a.headers["Content-Type"]=l,a.body=r?JSON.stringify(r):null),u&&(a.headers.Authorization=`Bearer ${u}`);let s={data:{},loading:!0,error:null,message:null};try{o(!0);const t=await fetch(h,a),n=t.headers.get("Content-Type");if(t.status=="500")throw new Error(`HTTP error! status: ${t.status}`);t.status=="401"&&s.message=="Unauthenticated",t.status=="405"&&s.message=="Method Not Allowed",n.includes("application/json")?s.data=await t.json():n.includes("text/plain")?s.data=await t.text():s.data=await t.blob()}catch(t){s.error=t.message,o(!1)}finally{s.loading=!1,o(!1),c(s)}},P=async c=>{const{setStore:h,url:d,method:r,body:l,contentType:u,token:o,setIsLoading:a}=c,{data:s,loading:t,error:n,message:i}=m(h,d,r,l,u,o,a);return{data:s,loading:t,error:n,message:i}};export{P as A,$ as a};
//# sourceMappingURL=useFetchDataStore-DL3UPdYz.js.map
