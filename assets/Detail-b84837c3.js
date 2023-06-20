import{G as E,j as e,W as p,r as m,h as P,i as z,k as L}from"./index-ec0b574e.js";import{b as A}from"./index.esm-754ad1b9.js";import{b as t,u as d,t as n,a as D,o as h,c as R}from"./SkeletonCard-fd9db1ef.js";import{L as w,V as I}from"./VideoModal-96d578bc.js";import b from"./Error404Page-a34c6b38.js";import{E as K}from"./Error500Page-e2b28c5a.js";function V(l){return E({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M271.653 1023.192c-8.685 0-17.573-3.432-24.238-10.097-13.33-13.33-13.33-35.144 0-48.474L703.67 508.163 254.08 58.573c-13.33-13.331-13.33-35.145 0-48.475 13.33-13.33 35.143-13.33 48.473 0L776.38 483.925c13.33 13.33 13.33 35.143 0 48.473l-480.492 480.694c-6.665 6.665-15.551 10.099-24.236 10.099z"}}]})(l)}const M=l=>e.jsx("div",{className:"detail",children:e.jsxs(p,{className:"relative z-[1] flex flex-col md:flex-row gap-8 md:gap-16 py-5",children:[e.jsx(t,{baseColor:"#202020",highlightColor:"#444",className:"detail-card self-center rounded-2xl w-60 h-[360px]"}),e.jsxs("div",{className:"detail-content text-white md:flex-1",children:[e.jsx(t,{baseColor:"#202020",highlightColor:"#444",count:2,className:"name"}),e.jsxs("div",{className:"flex items-center gap-6 flex-wrap mt-4",children:[e.jsx(t,{baseColor:"#202020",highlightColor:"#444",className:"name w-10 h-3"}),e.jsx(t,{baseColor:"#202020",highlightColor:"#444",className:"name w-10 h-3"}),e.jsx(t,{baseColor:"#202020",highlightColor:"#444",className:"name w-10 h-3"})]}),e.jsxs("div",{className:"flex items-center mt-5 gap-x-8 gap-y-4 flex-wrap",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{baseColor:"#202020",highlightColor:"#444",className:"w-10 h-10",circle:!0}),e.jsx(t,{baseColor:"#202020",highlightColor:"#444"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{baseColor:"#202020",highlightColor:"#444",className:"w-10 h-10",circle:!0}),e.jsx(t,{baseColor:"#202020",highlightColor:"#444"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{baseColor:"#202020",highlightColor:"#444",className:"w-10 h-10",circle:!0}),e.jsx(t,{baseColor:"#202020",highlightColor:"#444"})]})]}),e.jsx(t,{baseColor:"#202020",highlightColor:"#444",className:"name mt-6 h-20"})]})]})}),Y=({mediaType:l})=>{var f,N,v;const[s,g]=m.useState(),[C,u]=m.useState(!1),{id:r}=P(),y=z();if(!r||!Number(r))return e.jsx(b,{});const{data:a,status:B,error:c,isFetching:k,isFetched:q}=d({queryKey:["detail",l,r],queryFn:()=>n.getDetail(l,+r),enabled:r!==void 0}),j=d({queryKey:["cast",l,r],queryFn:()=>n.getCast(l,+r),enabled:r!==void 0}),o=d({queryKey:["recommends",l,r],queryFn:()=>n.getRecommendations(l,+r),enabled:r!==void 0}),F=d({queryKey:["video",s],queryFn:()=>n.getVideo(s==null?void 0:s.mediaType,s==null?void 0:s.id),enabled:(s==null?void 0:s.mediaType)!==void 0&&s.id!==void 0,keepPreviousData:!1}),_=()=>{g(void 0),u(!1)},S=(i,x)=>{g({mediaType:i,id:x}),u(!0)};return!a&&q||c?D.isAxiosError(c)&&((f=c.response)==null?void 0:f.status)===404?e.jsx(b,{}):e.jsx(K,{}):(m.useEffect(()=>{window.scrollTo(0,0)},[y]),e.jsxs("div",{className:"detail-page",children:[a&&e.jsx("div",{className:"detail",style:{backgroundImage:`url(${h(a.data.backdrop_path)})`},children:e.jsxs(p,{className:"relative z-[1] flex flex-col md:flex-row gap-8 md:gap-16 py-5",children:[e.jsx("div",{className:"detail-card overflow-hidden self-center rounded-2xl w-60",children:e.jsx(R.LazyLoadImage,{src:h(a.data.poster_path),loading:"lazy",alt:a.data.title||a.data.name||""})}),e.jsxs("div",{className:"detail-content text-white md:flex-1",children:[e.jsx("div",{className:"name text-white text-4xl tracking-widest font-extrabold",children:a.data.title||a.data.name||""}),e.jsxs("div",{className:"info flex items-center gap-2 md:gap-4 text-sm mt-4",children:[e.jsx("span",{className:"tracking-widest",children:new Date(a.data.release_date||a.data.first_air_date).getFullYear()||"N/A"}),e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx(A,{className:"text-xl"}),a.data.runtime||a.data.episode_run_time[0]||"N/A"]}),e.jsxs("span",{className:"flex items-center text-sm",children:[e.jsx(L,{className:"text-xl mr-1"})," ",a.data.vote_average.toFixed(2),e.jsx("span",{className:"text-xs font-sans italic opacity-70",children:"/10"})]}),e.jsxs("button",{onClick:()=>S(l,a.data.id),className:"flex items-center gap-4 uppercase tracking-[4px] group",children:["Trailer ",e.jsx(V,{className:"text-xl group-hover:translate-x-1 transition-transform duration-300"})]})]}),e.jsx("div",{className:"flex items-center gap-6 flex-wrap mt-6",children:a.data.genres.map((i,x)=>e.jsx("span",{className:"genre-items text-sm border border-white rounded-3xl py-1 px-2",children:i.name},i.id.toString()))}),e.jsx("div",{className:"flex items-center mt-5 gap-x-8 gap-y-4 flex-wrap",children:j.data&&((N=j.data)==null?void 0:N.data.cast.slice(0,4).map((i,x)=>{if(i.profile_path)return e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("img",{className:"w-10 h-10 rounded-full object-cover",src:h(i.profile_path),alt:i.name}),e.jsx("span",{className:"text-sm opacity-70 text-white",children:i.name})]},i.id.toString())}))}),e.jsx("div",{className:"mt-6 text-white text-xs lg:w-[80%]",children:a.data.overview})]})]})}),k&&e.jsx(M,{}),e.jsx("div",{className:"bg-black-2 py-5",children:e.jsxs(p,{children:[o.data&&o.data.data.results.length>0&&e.jsx("h2",{className:"text-light-gray text-2xl relative",children:"Recommends"}),o.data&&o.data.data.results.length>0&&e.jsx("div",{className:"list-movie-horizontal",children:e.jsx(w,{className:"pb-8 pt-6",data:o.data.data.results||o.data.data.results||[],mediaType:l})}),o.isFetching&&e.jsx(w,{skeleton:!0,data:[],mediaType:"all"})]})}),e.jsx(I,{requestClosePopup:_,show:C,embed:s?`https://www.youtube.com/embed/${((v=F.data)==null?void 0:v.data.results[0].key)||""}`:"#"})]}))};export{Y as default};
