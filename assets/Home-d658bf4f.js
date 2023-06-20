import{G as w,j as t,r as L,W as T,L as P,e as $,M as A,f as ae,S as se,c as V,A as Q,g as B,s as G}from"./index-ec0b574e.js";import{G as W}from"./GridContainer-dbbd3c68.js";import{b as le,o as ne,u as g,t as v,C as J,S as U}from"./SkeletonCard-fd9db1ef.js";import{g as I,S as re,a as ie,P as oe,b as Y,L as k,V as de}from"./VideoModal-96d578bc.js";import{a as ue}from"./index.esm-754ad1b9.js";function ce({swiper:e,extendParams:i,on:o,emit:l,params:d}){e.autoplay={running:!1,paused:!1,timeLeft:0},i({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let s,c,b=d&&d.autoplay?d.autoplay.delay:3e3,m=d&&d.autoplay?d.autoplay.delay:3e3,n,x=new Date().getTime,j,N,y,M,q,f;function E(a){!e||e.destroyed||!e.wrapperEl||a.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",E),S())}const C=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?j=!0:j&&(m=n,j=!1);const a=e.autoplay.paused?n:x+m-new Date().getTime();e.autoplay.timeLeft=a,l("autoplayTimeLeft",a,a/b),c=requestAnimationFrame(()=>{C()})},_=()=>{let a;return e.virtual&&e.params.virtual.enabled?a=e.slides.filter(u=>u.classList.contains("swiper-slide-active"))[0]:a=e.slides[e.activeIndex],a?parseInt(a.getAttribute("data-swiper-autoplay"),10):void 0},r=a=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(c),C();let h=typeof a>"u"?e.params.autoplay.delay:a;b=e.params.autoplay.delay,m=e.params.autoplay.delay;const u=_();!Number.isNaN(u)&&u>0&&typeof a>"u"&&(h=u,b=u,m=u),n=h;const D=e.params.speed,K=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(D,!0,!0),l("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,D,!0,!0),l("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(D,!0,!0),l("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,D,!0,!0),l("autoplay")),e.params.cssMode&&(x=new Date().getTime(),requestAnimationFrame(()=>{r()})))};return h>0?(clearTimeout(s),s=setTimeout(()=>{K()},h)):requestAnimationFrame(()=>{K()}),h},p=()=>{e.autoplay.running=!0,r(),l("autoplayStart")},z=()=>{e.autoplay.running=!1,clearTimeout(s),cancelAnimationFrame(c),l("autoplayStop")},F=(a,h)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(s),a||(f=!0);const u=()=>{l("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",E):S()};if(e.autoplay.paused=!0,h){q&&(n=e.params.autoplay.delay),q=!1,u();return}n=(n||e.params.autoplay.delay)-(new Date().getTime()-x),!(e.isEnd&&n<0&&!e.params.loop)&&(n<0&&(n=0),u())},S=()=>{e.isEnd&&n<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(x=new Date().getTime(),f?(f=!1,r(n)):r(),e.autoplay.paused=!1,l("autoplayResume"))},O=()=>{if(e.destroyed||!e.autoplay.running)return;const a=I();a.visibilityState==="hidden"&&(f=!0,F(!0)),a.visibilityState==="visible"&&S()},H=a=>{a.pointerType==="mouse"&&(f=!0,F(!0))},R=a=>{a.pointerType==="mouse"&&e.autoplay.paused&&S()},X=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",H),e.el.addEventListener("pointerleave",R))},Z=()=>{e.el.removeEventListener("pointerenter",H),e.el.removeEventListener("pointerleave",R)},ee=()=>{I().addEventListener("visibilitychange",O)},te=()=>{I().removeEventListener("visibilitychange",O)};o("init",()=>{e.params.autoplay.enabled&&(X(),ee(),x=new Date().getTime(),p())}),o("destroy",()=>{Z(),te(),e.autoplay.running&&z()}),o("beforeTransitionStart",(a,h,u)=>{e.destroyed||!e.autoplay.running||(u||!e.params.autoplay.disableOnInteraction?F(!0,!0):z())}),o("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){z();return}N=!0,y=!1,f=!1,M=setTimeout(()=>{f=!0,y=!0,F(!0)},200)}}),o("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!N)){if(clearTimeout(M),clearTimeout(s),e.params.autoplay.disableOnInteraction){y=!1,N=!1;return}y&&e.params.cssMode&&S(),y=!1,N=!1}}),o("slideChange",()=>{e.destroyed||!e.autoplay.running||(q=!0)}),Object.assign(e.autoplay,{start:p,stop:z,pause:F,resume:S})}function me(e){return w({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm.001 6c-.001 0-.001 0 0 0h-.465l-2.667-4H20l.001 4zM9.536 9 6.869 5h2.596l2.667 4H9.536zm5 0-2.667-4h2.596l2.667 4h-2.596zM4 5h.465l2.667 4H4V5zm0 14v-8h16l.002 8H4z"}},{tag:"path",attr:{d:"m10 18 5.5-3-5.5-3z"}}]})(e)}function xe(e){return w({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M18.001 20H20v2h-8C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.985 9.985 0 0 1-3.999 8zM12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-4 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-4 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}}]}]})(e)}const pe=e=>t.jsx(le,{baseColor:"#202020",highlightColor:"#444",className:"hero-slide w-full h-full skeleton"});re.use([ce]);const ye=({onClickTrailer:e})=>{var d;const i=g({queryKey:["trending"],queryFn:()=>v.getTrendingMovies()}),o=g({queryKey:["genres_movie"],queryFn:()=>v.getGenres("movie")}),l=g({queryKey:["genres_tv"],queryFn:()=>v.getGenres("tv")});return t.jsx("div",{className:"hero-box",children:t.jsxs(ie,{slidesPerView:1,modules:[oe],pagination:!0,autoplay:{delay:5e3,disableOnInteraction:!1},children:[i.isLoading&&t.jsx(Y,{children:t.jsx(pe,{})}),(d=i.data)==null?void 0:d.data.results.slice(0,5).map(s=>{var b,m;let c=[];return s.media_type==="movie"?c=(b=o.data)==null?void 0:b.data.genres.filter(n=>s.genre_ids.includes(n.id)):c=(m=l.data)==null?void 0:m.data.genres.filter(n=>s.genre_ids.includes(n.id)),t.jsx(Y,{children:t.jsx(fe,{movie:s,genres:c,onClickTrailer:e})},`${s.id}-${s.original_name}`)})]})})},fe=L.memo(({movie:e,genres:i,onClickTrailer:o})=>t.jsx("div",{className:"hero-slide",style:{backgroundImage:`url(${ne(e.backdrop_path)})`},children:t.jsx(T,{className:"h-full relative z-10",children:t.jsxs("div",{className:"slide-content w-full md:w-[65%] pr-6 ",children:[t.jsx(P,{to:`${$[e.media_type]}/${encodeURIComponent((e.name||e.title).toLowerCase()).replace(/%20/g,"-")||"na"}/${e.id}`,className:"movie-name duration-300 transition-colors hover:text-dark-teal text-3xl md:text-4xl  text-white font-bold  drop-shadow-lg pr-6",children:e.name||e.title}),t.jsxs("div",{className:"movie-info flex items-center gap-2 sm:gap-4 md:gap-6 mt-2",children:[t.jsx(P,{to:`${$[e.media_type]}`,className:"quality px-3 py-0.5 flex items-center rounded bg-dark-teal font-medium text-white text-xl",children:e.media_type==="movie"?t.jsx(xe,{}):t.jsx(A,{})}),t.jsxs("span",{className:"rating flex  gap-1 text-white text-sm",children:[t.jsx(ae,{size:16}),e.vote_average.toFixed(1)]}),t.jsx("div",{className:"cate",children:i==null?void 0:i.map(l=>t.jsx("a",{href:"#",className:"cates inline-block mr-3 text-xs text-white/60 hover:text-white transition-colors duration-300 ease-out",children:l.name},l.id.toString()))})]}),t.jsx("div",{className:"movie-desc hidden  sm:block mt-4 text-white/50 font-thin text-sm",children:e.overview}),t.jsxs("div",{className:"buttons mt-8 flex gap-6",children:[t.jsxs(P,{to:`${$[e.media_type]}/${encodeURIComponent((e.name||e.title).toLowerCase()).replace(/%20/g,"-")||"na"}/${e.id}`,className:"watch-btn banner-btn  border-dark-teal text-dark-teal  hover:bg-dark-teal hover:text-white ",children:[t.jsx(ue,{size:20})," Watch now"]}),t.jsxs("button",{onClick:()=>o&&o(e.media_type,e.id),className:"add-btn banner-btn  border-white/50 text-white/50 hover:bg-white hover:text-black",children:[t.jsx(me,{size:16})," Trailer"]})]})]})})})),Ne=e=>{var E,C,_;const[i,o]=L.useState("movie"),[l,d]=L.useState("movie"),[s,c]=L.useState(),[b,m]=L.useState(!1),n=g({queryKey:["trending"],queryFn:()=>v.getTrendingMovies()}),x=g({queryKey:["top_rated",i],queryFn:()=>v.getList(i,"top_rated"),keepPreviousData:!0}),j=g({queryKey:["popular",l],queryFn:()=>v.getList(l,"popular"),keepPreviousData:!0}),N=g({queryKey:["latest_movie",{page:1}],queryFn:()=>v.getDiscoverList("movie")}),y=g({queryKey:["latest_tv",{page:1}],queryFn:()=>v.getDiscoverList("tv")}),M=g({queryKey:["video",s],queryFn:()=>v.getVideo(s==null?void 0:s.mediaType,s==null?void 0:s.id),enabled:(s==null?void 0:s.mediaType)!==void 0&&s.id!==void 0,keepPreviousData:!1}),q=()=>{c(void 0),m(!1)},f=L.useCallback((r,p)=>{c({mediaType:r,id:p}),m(!0)},[n.data]);return t.jsxs("div",{className:"home",children:[t.jsx(ye,{onClickTrailer:f}),t.jsxs("div",{className:"main-content bg-black-2",children:[t.jsx("section",{className:"about py-3",children:t.jsxs(T,{children:[t.jsx("h2",{className:"text-light-gray text-xl",children:"Watch Movies Online Free"}),t.jsxs("p",{className:"text-light-gray text-xs sm:text-sm mt-2",children:[t.jsxs("span",{className:"text-white text-sm",children:["Movie",t.jsx("span",{className:"text-dark-teal",children:"Flix"})]})," - Just a better place to watch movies online for free. It allows you to watch movies online in high quality for free. No registration is required. The content is updated daily with fast streaming servers, multi-language subtitles supported. Just open fmovies.to and watch your favorite movies, tv-shows. We have almost any movie, tv-shows you want to watch!"]}),t.jsx("p",{className:"text-light-gray mt-2 text-xs sm:text-sm",children:"Please help us by sharing this site with your friends. Thanks!"}),t.jsx(se,{className:"mt-2"})]})}),t.jsx("section",{children:t.jsxs(T,{children:[t.jsx("h2",{className:'text-light-gray py-1 text-2xl relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-[1px] after:bg-white/40',children:"Top Trending "}),n.data&&t.jsx(k,{mediaType:"all",className:"pb-8 pt-6",data:(E=n.data)==null?void 0:E.data.results.slice(5)}),n.isLoading&&t.jsx(k,{mediaType:"all",className:"pb-8 pt-6",data:[],skeleton:!0})]})}),t.jsx("section",{children:t.jsxs(T,{children:[t.jsxs("h2",{className:"text-light-gray flex-col xs:flex-row gap-x-6 gap-y-4 flex  py-1 text-2xl relative  ",children:[t.jsx("span",{className:'after:content-[""] relative after:absolute after:bottom-0 pb-1 after:left-0 after:w-16 after:h-[1px] after:bg-white/40',children:"Top Rating"}),t.jsxs("div",{className:"flex",children:[t.jsxs("button",{onClick:()=>o("movie"),className:V("flex  items-center justify-center text-xs gap-1 font-medium bg-blue-gray hover:bg-blue-gray-2 transition duration-300  p-2 rounded [&.active]:bg-dark-teal [&.active]:text-white ",{active:i==="movie"}),children:[t.jsx(Q,{className:"text-xl"})," Movies"]}),t.jsxs("button",{onClick:()=>o("tv"),className:V("flex ml-2 items-center justify-center text-xs gap-1 font-medium bg-blue-gray hover:bg-blue-gray-2 transition duration-300  p-2 rounded [&.active]:bg-dark-teal [&.active]:text-white ",{active:i==="tv"}),children:[t.jsx(A,{className:"text-xl"})," ",t.jsx("span",{className:"mt-0.5",children:"TV-Series"})]})]})]}),x.data&&t.jsx(k,{mediaType:i,className:"pb-8 pt-6",data:x.data.data.results||x.data.data.results||[]}),x.isLoading&&t.jsx(k,{mediaType:"all",className:"pb-8 pt-6",data:[],skeleton:!0})]})}),t.jsx("section",{children:t.jsxs(T,{children:[t.jsxs("h2",{className:"text-light-gray flex-col xs:flex-row gap-x-6 gap-y-4 flex-wrap flex py-1 text-2xl",children:[t.jsx("span",{className:'after:content-[""] relative after:absolute after:bottom-0 pb-1 after:left-0 after:w-16 after:h-[1px] after:bg-white/40',children:"Popular"}),t.jsxs("div",{className:"flex",children:[t.jsxs("button",{onClick:()=>d("movie"),className:V("flex items-center justify-center text-xs gap-1 font-medium bg-blue-gray hover:bg-blue-gray-2 transition duration-300  p-2 rounded [&.active]:bg-dark-teal [&.active]:text-white ",{active:l==="movie"}),children:[t.jsx(Q,{className:"text-xl"})," Movies"]}),t.jsxs("button",{onClick:()=>d("tv"),className:V("flex ml-2 items-center justify-center text-xs gap-1 font-medium bg-blue-gray hover:bg-blue-gray-2 transition duration-300  p-2 rounded [&.active]:bg-dark-teal [&.active]:text-white ",{active:l==="tv"}),children:[t.jsx(A,{className:"text-xl"})," ",t.jsx("span",{className:"mt-0.5",children:"TV-Series"})]})]})]}),j.data&&t.jsx(k,{mediaType:l,className:"pb-8 pt-6",data:j.data.data.results||j.data.data.results||[]}),j.isLoading&&t.jsx(k,{mediaType:"all",className:"pb-8 pt-6",data:[],skeleton:!0})]})}),t.jsx("section",{className:"top-rated py-6 bg-black-2",children:t.jsxs(T,{children:[t.jsxs("h2",{className:'text-light-gray flex py-1 text-2xl relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-[1px] after:bg-white/40',children:[t.jsx("span",{children:"Movies"}),t.jsxs(P,{to:"/movies",className:"flex ml-auto items-center text-sm text-dark-teal transition-opacity duration-300 hover:opacity-75",children:["View all ",t.jsx("span",{className:"text-base bg-dark-teal rounded-full text-black ml-2",children:t.jsx(B,{})})]})]}),t.jsxs(W,{className:"lg:gap-x-3 gap-y-6 gap-x-2",children:[N.data&&N.data.data.results.map((r,p)=>t.jsx(J,{mediaType:"movie",data:r},r.id+`-${Math.random().toString()}`)),N.isLoading&&new Array(14).fill(0).map((r,p)=>t.jsx(U,{},p.toString()+"movies"))]})]})}),t.jsx("section",{className:"top-rated py-6 bg-black-2",children:t.jsxs(T,{children:[t.jsxs("h2",{className:'text-light-gray flex py-1 text-2xl relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-[1px] after:bg-white/40',children:[t.jsx("span",{children:"TV-Series"}),t.jsxs(P,{to:"/tv-series",className:"flex ml-auto items-center text-sm text-dark-teal transition-opacity duration-300 hover:opacity-75",children:["View all ",t.jsx("span",{className:"text-base bg-dark-teal rounded-full text-black ml-2",children:t.jsx(B,{})})]})]}),t.jsxs(W,{className:"lg:gap-x-3 gap-y-6 gap-x-2",children:[y.data&&y.data.data.results.map((r,p)=>{if(r.poster_path)return t.jsx(J,{mediaType:"tv",data:r},r.id+`-${Math.random().toString()}`)}),y.isLoading&&new Array(14).fill(0).map((r,p)=>t.jsx(U,{},p.toString()+"tv-series"))]})]})})]}),t.jsx(de,{requestClosePopup:q,show:b,embed:s?`${((C=M.data)==null?void 0:C.data.results[0].site)==="YouTube"?G.YouTube:G.Vimeo}${((_=M.data)==null?void 0:_.data.results[0].key)||""}`:"#"})]})};export{Ne as default};
