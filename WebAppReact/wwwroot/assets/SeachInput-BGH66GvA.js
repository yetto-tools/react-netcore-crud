import{P as a,b as c,r,j as l}from"./index-d4Cp2SHp.js";const p=({searchValue:h,setSearchValue:s})=>{const{t:o}=c(),[t,n]=r.useState("");r.useEffect(()=>{const e=setTimeout(()=>{s(t.trim())},500);return()=>{clearTimeout(e)}},[t]);const u=e=>{e.preventDefault(),n(e.target.value)};return l.jsx("input",{type:"text",className:"border rounded-l pl-2 outline-none focus:border-sky-400",value:t,onChange:u,placeholder:o("categories.search")})};p.propTypes={searchValue:a.string,setSearchValue:a.func};export{p as S};
//# sourceMappingURL=SeachInput-BGH66GvA.js.map
