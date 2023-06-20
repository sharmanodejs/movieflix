import{r as d,j as a,c as y,u as S,F as E,a as $,b as P,d as I,W as M}from"./index-ec0b574e.js";import{P as D}from"./Pagination-0a3dfc15.js";import{u as C,t as A,a as L,S as B,C as G}from"./SkeletonCard-fd9db1ef.js";import{B as F}from"./index.esm-754ad1b9.js";import O from"./Error404Page-a34c6b38.js";import{E as R}from"./Error500Page-e2b28c5a.js";const j=({buttonIcon:t,title:r,renderItems:o,grid:u,dropContentClassName:e,selected:i="All"})=>{const[c,h]=d.useState(!1),f=d.useRef(null),x=d.useRef(null),l=()=>{h(s=>!s)};return d.useEffect(()=>{const s=_=>{f.current&&f.current.contains(_.target)||x.current&&x.current.contains(_.target)||h(!1)};return document.addEventListener("click",s),()=>{document.removeEventListener("click",s)}},[f,x]),a.jsxs("div",{className:"relative w-[48%] xs:w-auto",children:[a.jsxs("button",{ref:f,className:y(`flex items-center gap-1 whitespace-nowrap rounded bg-[#212529] px-4 py-2 text-xs 
                leading-normal text-[#4b5156] transition duration-150 ease-in-out 
                focus:outline-none focus:ring-0 active:bg-primary-700 
                capitalize
                font-normal hover:bg-[#2c3237]
                w-full
                justify-center
                xs:justify-start
                motion-reduce:transition-none`),type:"button",onClick:l,id:"dropdownMenuButton1","data-te-dropdown-toggle-ref":!0,"aria-expanded":"false","data-te-ripple-init":!0,"data-te-ripple-color":"light",children:[t,a.jsx("span",{children:r}),a.jsx("span",{className:"text-white/70",children:i})]}),a.jsx("div",{ref:x,"data-te-dropdown-show":!0,className:y(`absolute z-20 float-left m-0 hidden 
                list-none overflow-hidden rounded-[6px] border-none
                mt-1 bg-[#212529] p-3  
                 gap-x-1 dropdown-content
                 ${!u&&"h-80 overflow-y-auto scroll-bar"}
                 flex-wrap ${u?"w-[200%] sm:w-[400px] md:w-[600px] [&.active]:flex":"w-max [&.active]:block"}`,{active:c},e),"aria-labelledby":"dropdownMenuButton1","data-te-dropdown-menu-ref":!0,children:o()})]})},v=({id:t,name:r,value:o,check:u,onChangeEvent:e})=>{const i=c=>{e&&e(c.target.checked,o)};return a.jsxs("div",{className:"flex items-center w-[48%] sm:w-[32%] md:w-[24%]",children:[a.jsx("input",{type:"checkbox",id:`${t}`,onChange:i,className:"checkbox peer hidden",checked:u,value:o}),a.jsxs("label",{htmlFor:`${t}`,className:`flex h-8 gap-2 peer-checked:px-0 peer-checked:gap-0 px-2 w-full items-center text-white/60 text-xs hover:bg-[#16181b] 
                            py-[2px] transition duration-300 rounded cursor-pointer
                            before:content-[""] before:w-3 before:h-3 before:bg-[#434b53]`,children:[a.jsx(F,{className:"text-dark-teal text-[28px] hidden icons"}),r]})]})},N=({id:t,name:r,value:o,check:u,fieldName:e,onChangeEvent:i})=>{const c=h=>{console.log(`checked::${h.target.checked}`),i&&i(h.target.checked,o)};return a.jsxs("div",{className:"flex items-center w-full xs:w-max",children:[a.jsx("input",{type:"radio",id:`${t}`,onChange:c,name:e||"check-radio",className:"checkbox peer hidden",checked:u,value:o}),a.jsxs("label",{htmlFor:`${t}`,className:`flex h-8 gap-2 peer-checked:px-2 peer-checked:gap-0 px-4 w-full items-center text-white/60 text-xs hover:bg-[#16181b] 
                            py-[2px] transition duration-300 rounded cursor-pointer
                            before:content-[""] before:w-3 before:h-3 before:rounded-full before:bg-[#434b53]`,children:[a.jsx(F,{className:"text-dark-teal text-[28px] hidden icons"}),r]})]})},k=[{iso_639_1:"cn",english_name:"Chinese",name:"广州话 / 廣州話"},{iso_639_1:"en",english_name:"English",name:"English"},{iso_639_1:"fi",english_name:"Finnish",name:"suomi"},{iso_639_1:"de",english_name:"German",name:"Deutsch"},{iso_639_1:"hi",english_name:"Hindi",name:"हिन्दी"},{iso_639_1:"hu",english_name:"Hungarian",name:"Magyar"},{iso_639_1:"id",english_name:"Indonesian",name:"Bahasa indonesia"},{iso_639_1:"it",english_name:"Italian",name:"Italiano"},{iso_639_1:"ja",english_name:"Japanese",name:"日本語"},{iso_639_1:"ko",english_name:"Korean",name:"한국어/조선말"},{iso_639_1:"lo",english_name:"Lao",name:""},{iso_639_1:"la",english_name:"Latin",name:"Latin"},{iso_639_1:"ms",english_name:"Malay",name:"Bahasa melayu"},{iso_639_1:"zh",english_name:"Mandarin",name:"普通话"},{iso_639_1:"no",english_name:"Norwegian",name:"Norsk"},{iso_639_1:"pt",english_name:"Portuguese",name:"Português"},{iso_639_1:"ru",english_name:"Russian",name:"Pусский"},{iso_639_1:"ca",english_name:"Spanish",name:"Català"},{iso_639_1:"sv",english_name:"Swedish",name:"svenska"},{iso_639_1:"th",english_name:"Thai",name:"ภาษาไทย"},{iso_639_1:"tr",english_name:"Turkish",name:"Türkçe"},{iso_639_1:"uk",english_name:"Ukrainian",name:"Український"},{iso_639_1:"vi",english_name:"Vietnamese",name:"Tiếng Việt"}],T=({media_type:t,onFilter:r})=>{const[o,u]=S(),[e,i]=d.useState({genres:[],languages:[],year:""}),c=C({queryKey:[`genres_${t}`],queryFn:()=>A.getGenres(`${t}`)});let h=d.useMemo(()=>{var n,p;return e.genres.length===0?"All":e.genres.length>1?`${e.genres.length} selected`:((p=(n=c.data)==null?void 0:n.data.genres.find(m=>m.id===+e.genres[0]))==null?void 0:p.name)||"All"},[e.genres,c]),f=d.useMemo(()=>{var n;return e.languages.length===0?"All":e.languages.length>1?`${e.languages.length} selected`:((n=k.find(p=>p.iso_639_1===e.languages[0]))==null?void 0:n.english_name)||"All"},[e]),x=d.useMemo(()=>e.year!==""?e.year:"All",[e.year]);d.useEffect(()=>{let n={genres:[],languages:[],year:""};n.genres=o.getAll("genres"),n.languages=o.getAll("languages"),n.year=o.get("year")||"",i(n)},[o]);const l=(n,p)=>{let m=e;n&&(m.year=p),i({...m})},s=n=>(p,m)=>{let g={...e};p?(g[n].push(m),i({...e})):(g[n].splice(g[n].indexOf(m),1),i({...e}))},_=()=>{if(c.data)return c.data.data.genres.map(n=>a.jsx(v,{name:n.name,value:n.id.toString(),check:e.genres.includes(n.id+""),onChangeEvent:s("genres"),id:`check-${n.name}`},n.id.toString()))},w=()=>{if(k)return k.map(n=>a.jsx(v,{name:n.english_name,value:n.iso_639_1,check:e.languages.includes(n.iso_639_1),id:`check-${n.english_name}`,onChangeEvent:s("languages")},n.english_name))},b=()=>{let n=[a.jsx(N,{name:"All",check:e.year==="",value:"",id:"check-all",onChangeEvent:l},"all")],m=new Date().getFullYear();for(let g=m;g>=m-12;g--)n.push(a.jsx(N,{name:g+"",check:e.year===g+"",value:g+"",id:`check-${g.toString()}`,onChangeEvent:l},g.toString()));return n};return a.jsxs("div",{className:"mt-6 flex items-center flex-wrap xs:flex-nowrap gap-2",children:[a.jsx(j,{grid:!0,selected:h,buttonIcon:a.jsx(E,{className:"text-sm"}),title:"Genre",renderItems:_},1),a.jsx(j,{grid:!0,selected:f,dropContentClassName:"languages-drop",buttonIcon:a.jsx($,{className:"text-sm"}),title:"Languages",renderItems:w},2),a.jsx(j,{selected:x,buttonIcon:a.jsx(P,{className:"text-sm"}),title:"Years",renderItems:b},3),a.jsxs("button",{onClick:()=>r&&r(e),className:" w-[48%] xs:w-auto px-2 py-1.5 hover:opacity-75 cursor-pointer transition-opacity duration-300 h-full font-light text-sm gap-x-1 flex justify-center items-center bg-dark-teal rounded",children:[a.jsx(I,{className:"text-base"}),"Filter"]})]})},V=({media_type:t})=>{var x;const[r,o]=S(),u=d.useMemo(()=>{let l=parseInt(r.get("page")||"1"),s=r.getAll("genres").join("|"),_=r.getAll("languages").join("|"),w=r.get("year"),b={page:l};return _&&(b.with_original_language=_),s&&(b.with_genres=s),w&&t==="movie"&&(b.primary_release_year=w),w&&t==="tv"&&(b.first_air_date_year=w),b},[r]),{data:e,error:i,isError:c,isLoading:h}=C({queryKey:[`latest_${t}`,u],queryFn:()=>A.getDiscoverList(t,u),keepPreviousData:!0,retry:2});d.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[e]);const f=l=>{let s={};l.year!==""&&(s.year=l.year),s.genres=l.genres,s.languages=l.languages,o({...r,...s})};return c&&i?L.isAxiosError(i&&((x=i.response)==null?void 0:x.status)===404)?a.jsx(O,{}):a.jsx(R,{}):a.jsx("div",{className:"pt-20 pb-12 bg-black-2",children:a.jsx("section",{className:"top-rated py-6 bg-black-2",children:a.jsxs(M,{children:[a.jsx("h2",{className:'text-light-gray capitalize py-1 text-2xl relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-[1px] after:bg-white/40',children:t==="movie"?"movie":"tv-series"}),a.jsx(T,{media_type:t,onFilter:f}),a.jsxs("div",{className:"grid gap-y-8 gap-x-4 md:grid-cols-5 sm:grid-cols-4 xs:grid-cols-3 grid-cols-2 lg:grid-cols-6 mt-8",children:[h&&new Array(14).fill(0).map((l,s)=>a.jsx(B,{},s.toString()+"all")),e&&e.data.results.map((l,s)=>a.jsx(G,{data:l,mediaType:t},l.id+`${Math.random().toString()}`))]}),e&&a.jsx(D,{total:e&&e.data.total_pages>500?1e4:Math.floor((e==null?void 0:e.data.total_results)/20),pageSize:20,defaultCurrent:1,className:"mt-6 w-fully"})]})})})};export{V as default};