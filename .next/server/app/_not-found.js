(()=>{var e={};e.id=165,e.ids=[165],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},7525:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>d,routeModule:()=>p,tree:()=>c});var s=r(482),n=r(9108),a=r(2563),o=r.n(a),i=r(8300),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,8613)),"C:\\Users\\lesliec\\Downloads\\tommyshome-personal-portfolio-react-template-2024-04-14-18-46-30-utc\\tommyshome\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"]}],d=[],u="/_not-found",m={require:r,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/_not-found",pathname:"/_not-found",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},7211:(e,t,r)=>{Promise.resolve().then(r.bind(r,9052)),Promise.resolve().then(r.bind(r,9536)),Promise.resolve().then(r.bind(r,3789))},9422:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,6840,23)),Promise.resolve().then(r.t.bind(r,8771,23)),Promise.resolve().then(r.t.bind(r,3225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,3982,23))},9052:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var s=r(5344),n=r(5358),a=r(3729);let o=()=>((0,a.useEffect)(()=>{n.D.preloader()},[]),(0,s.jsxs)(a.Fragment,{children:[s.jsx("div",{className:"trm-preloader",children:s.jsx("div",{className:"trm-holder",children:(0,s.jsxs)("div",{className:"preloader",children:[s.jsx("div",{}),s.jsx("div",{}),s.jsx("div",{}),s.jsx("div",{}),s.jsx("div",{}),s.jsx("div",{}),s.jsx("div",{}),s.jsx("div",{}),s.jsx("div",{}),s.jsx("div",{})]})})}),s.jsx("div",{className:"trm-mode-swich-animation-frame",children:(0,s.jsxs)("div",{className:"trm-mode-swich-animation",children:[s.jsx("i",{className:"far fa-sun"}),s.jsx("div",{className:"trm-horizon"}),s.jsx("i",{className:"far fa-moon"})]})})]}))},9536:(e,t,r)=>{"use strict";r.r(t),r.d(t,{context:()=>c,default:()=>u});var s=r(5344),n=r(3729);let{MODE:a,BANNER_TYPE:o,PAGE_INFO:i,BANNER_IMAGE:l}={MODE:"MODE",BANNER_TYPE:"BANNER_TYPE",BANNER_IMAGE:"BANNER_IMAGE",PAGE_INFO:"PAGE_INFO"},c=(0,n.createContext)(),d=(e,t)=>{let{type:r,payload:s}=t;switch(r){case a:return{...e,mode:s};case o:return{...e,banner_type:s};case l:return{...e,banner_image:s};case i:return{...e,page_info:s};default:return e}},u=e=>{let[t,r]=(0,n.useReducer)(d,{mode:!1,banner_image:"/img/banner.jpg",banner_type:"",page_info:{pageTitle:"",subTitle:"",pageName:"",scroll_down:!0}}),u=(0,n.useCallback)(e=>{r({type:a,payload:e})},[]),m=(0,n.useCallback)(e=>{r({type:o,payload:e})},[]),p=(0,n.useCallback)(e=>{r({type:l,payload:e})},[]),x=(0,n.useCallback)((e,t,s,n)=>{r({type:i,payload:{pageTitle:e,subTitle:t,pageName:s,scroll_down:!1!==n||n}})},[]),{mode:h,banner_type:v,banner_image:j,page_info:f}=t;return s.jsx(c.Provider,{value:{mode:h,modeChange:u,banner_type:v,banner_type_function:m,banner_image:j,banner_image_function:p,page_info:f,page_info_function:x},children:e.children})}},3789:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var s=r(5344),n=r(9536),a=r(3729);let o=()=>{let{mode:e}=(0,a.useContext)(n.context);return s.jsx("head",{children:s.jsx("link",{rel:"stylesheet",href:`css/style-${e?"dark":"light"}.css`})})}},5358:(e,t,r)=>{"use strict";r.d(t,{D:()=>s});let s={preloader(){document.documentElement.classList.add("is-animating");var e=document.querySelector(".trm-scroll-container");e.style.opacity="0",e.style.transition="opacity 0.6s",setTimeout(function(){document.documentElement.classList.remove("is-animating"),e.style.opacity="1"},1e3)},scrollAnimation(){r.e(419).then(r.bind(r,6120)).then(e=>{scroll=new e.default({el:document.querySelector("#trm-scroll-container"),smooth:!0,lerp:.1})})}}},8613:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>f,metadata:()=>j});var s=r(5036),n=r(6843);let a=(0,n.createProxy)(String.raw`C:\Users\lesliec\Downloads\tommyshome-personal-portfolio-react-template-2024-04-14-18-46-30-utc\tommyshome\components\Preloader.js`),{__esModule:o,$$typeof:i}=a,l=a.default,c=(0,n.createProxy)(String.raw`C:\Users\lesliec\Downloads\tommyshome-personal-portfolio-react-template-2024-04-14-18-46-30-utc\tommyshome\layout\tommyshomeModeCss.js`),{__esModule:d,$$typeof:u}=c,m=c.default;r(8929),r(6782),r(3246),r(266),r(7866),r(7386),r(7272);let p=(0,n.createProxy)(String.raw`C:\Users\lesliec\Downloads\tommyshome-personal-portfolio-react-template-2024-04-14-18-46-30-utc\tommyshome\context\context.js`),{__esModule:x,$$typeof:h}=p,v=p.default;(0,n.createProxy)(String.raw`C:\Users\lesliec\Downloads\tommyshome-personal-portfolio-react-template-2024-04-14-18-46-30-utc\tommyshome\context\context.js#context`);let j={title:"tommyshome",description:"Generated by create next app"};function f({children:e}){return s.jsx("html",{lang:"en",children:(0,s.jsxs)(v,{children:[s.jsx(m,{}),s.jsx("body",{children:(0,s.jsxs)("div",{className:"trm-app-frame",children:[s.jsx(l,{}),s.jsx("div",{id:"trm-dynamic-content",className:"trm-swup-animation",children:s.jsx("div",{id:"trm-scroll-container",className:"trm-scroll-container",style:{opacity:0},children:e})})]})})]})})}},7272:()=>{},8929:()=>{},6782:()=>{},3246:()=>{},266:()=>{},7866:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,636],()=>r(7525));module.exports=s})();