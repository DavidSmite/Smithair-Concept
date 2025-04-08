exports.id=926,exports.ids=[926],exports.modules={222:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});let s=(0,r(2907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/davidsmite/Desktop/Smithair-Concept/frontend/components/shared/Footer.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/davidsmite/Desktop/Smithair-Concept/frontend/components/shared/Footer.tsx","default")},1192:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6346,23)),Promise.resolve().then(r.t.bind(r,7924,23)),Promise.resolve().then(r.t.bind(r,5656,23)),Promise.resolve().then(r.t.bind(r,99,23)),Promise.resolve().then(r.t.bind(r,8243,23)),Promise.resolve().then(r.t.bind(r,8827,23)),Promise.resolve().then(r.t.bind(r,2763,23)),Promise.resolve().then(r.t.bind(r,7173,23))},1423:(e,t,r)=>{"use strict";r.d(t,{CartProvider:()=>a,_:()=>n});var s=r(687),i=r(3210);let o=(0,i.createContext)(void 0);function a({children:e}){let[t,r]=(0,i.useState)([]);return(0,s.jsx)(o.Provider,{value:{cart:t,addToCart:e=>{r(t=>t.find(t=>t.name===e.name)?t.map(t=>t.name===e.name?{...t,quantity:t.quantity+e.quantity}:t):[...t,e])},removeItem:e=>{r(t=>t.filter(t=>t.name!==e))},clearCart:()=>r([])},children:e})}function n(){let e=(0,i.useContext)(o);if(!e)throw Error("useCart must be used within CartProvider");return e}},2501:(e,t,r)=>{Promise.resolve().then(r.bind(r,2812))},2636:(e,t,r)=>{"use strict";r.d(t,{default:()=>d});var s=r(687),i=r(3210);let o=(0,i.createContext)(void 0);function a({children:e}){let[t,r]=(0,i.useState)(!0);return(0,s.jsx)(o.Provider,{value:{enabled:t,toggle:()=>{let e=!t;r(e),localStorage.setItem("adminTips",e?"on":"off")}},children:e})}function n(){let[e,t]=(0,i.useState)(!1);return e?(0,s.jsx)("div",{className:"fixed inset-0 bg-black/50 z-50 flex items-center justify-center",children:(0,s.jsxs)("div",{className:"bg-white dark:bg-gray-900 p-6 rounded-xl max-w-md shadow-xl text-sm text-gray-800 dark:text-white",children:[(0,s.jsx)("h2",{className:"text-lg font-bold mb-2",children:"\uD83C\uDF93 Guide Admin – Smithair"}),(0,s.jsxs)("ul",{className:"list-disc pl-5 space-y-1 mb-4",children:[(0,s.jsx)("li",{children:"➕ Ajouter une perruque depuis l’onglet “Produits”"}),(0,s.jsx)("li",{children:"\uD83D\uDCC8 Voir les ventes dans “Statistiques”"}),(0,s.jsx)("li",{children:"\uD83D\uDCE4 Exporter CSV pour analyser les donn\xe9es"}),(0,s.jsx)("li",{children:"\uD83E\uDDE0 G\xe9rer les stocks et la nouveaut\xe9 par ligne produit"})]}),(0,s.jsx)("button",{onClick:()=>{localStorage.setItem("seen-smithair-admin","true"),t(!1)},className:"mt-2 px-4 py-2 bg-primary text-white rounded hover:bg-primary/80",children:"✅ C’est bon pour moi"})]})}):null}function l(){let[e,t]=(0,i.useState)(!1),{enabled:r,toggle:a}=function(){let e=(0,i.useContext)(o);if(!e)throw Error("useTooltips must be used within TooltipProvider");return e}();return(0,s.jsx)("div",{className:"fixed bottom-6 right-6 z-50",children:(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("div",{className:"absolute bottom-0 right-0 transform translate-y-2",children:(0,s.jsx)("div",{className:`transition-all duration-300 ease-in-out ${e?"opacity-100 scale-100":"opacity-0 scale-0"}`,children:(0,s.jsxs)("div",{className:"flex flex-col items-end gap-2",children:[(0,s.jsx)("button",{onClick:()=>window.location.href="/admin/help",className:"px-3 py-2 bg-indigo-600 text-white text-xs rounded shadow hover:bg-indigo-700",children:"\uD83D\uDCD6 Aide"}),(0,s.jsx)("button",{onClick:a,className:`px-3 py-2 text-xs rounded shadow ${r?"bg-yellow-600 hover:bg-yellow-700 text-white":"bg-gray-600 hover:bg-gray-700 text-white"}`,children:r?"\uD83D\uDE48 Aide OFF":"❔ Aide ON"}),(0,s.jsx)("button",{onClick:()=>{localStorage.removeItem("seen-smithair-admin"),window.location.reload()},className:"px-3 py-2 bg-green-600 text-white text-xs rounded shadow hover:bg-green-700",children:"\uD83D\uDD01 Tutoriel"})]})})}),(0,s.jsx)("button",{onClick:()=>t(!e),className:"w-14 h-14 rounded-full bg-primary text-white text-2xl flex items-center justify-center shadow-xl hover:bg-primary/80 transition-all",title:"Aide",children:e?"✖":"❓"})]})})}function d({children:e}){return(0,s.jsx)(a,{children:(0,s.jsxs)("div",{className:"min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100",children:[(0,s.jsxs)("header",{className:"flex items-center justify-between px-6 py-4 border-b dark:border-gray-700",children:[(0,s.jsx)("h1",{className:"text-xl font-bold",children:"\uD83D\uDEE0️ Backoffice Smithair \uD83D\uDC51"}),(0,s.jsxs)("div",{className:"flex gap-3",children:[(0,s.jsx)("button",{onClick:()=>{document.documentElement.classList.toggle("dark"),localStorage.setItem("theme",document.documentElement.classList.contains("dark")?"dark":"light")},className:"px-3 py-1 text-sm rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600",children:"\uD83C\uDF19 Sombre"}),(0,s.jsx)("a",{href:"/api/logout",className:"px-3 py-1 text-sm rounded bg-red-600 text-white hover:bg-red-700",children:"\uD83D\uDD13 D\xe9connexion"})]})]}),(0,s.jsx)(n,{}),(0,s.jsx)("main",{className:"p-6",children:e}),(0,s.jsx)(l,{})]})})}},2704:()=>{},2812:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var s=r(687),i=r(474);function o(){return(0,s.jsxs)("div",{className:"min-h-screen flex flex-col justify-center items-center bg-white dark:bg-black animate-fade-in",children:[(0,s.jsx)(i.default,{src:"/logo-smithair.png",alt:"Logo Smithair",width:120,height:120,className:"animate-bounce"}),(0,s.jsx)("p",{className:"mt-4 text-sm text-gray-500 dark:text-gray-300 animate-fade-in",children:"Chargement du royaume..."})]})}},4237:(e,t,r)=>{"use strict";r.d(t,{CartProvider:()=>i});var s=r(2907);let i=(0,s.registerClientReference)(function(){throw Error("Attempted to call CartProvider() from the server but CartProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/davidsmite/Desktop/Smithair-Concept/frontend/context/CartContext.tsx","CartProvider");(0,s.registerClientReference)(function(){throw Error("Attempted to call useCart() from the server but useCart is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/davidsmite/Desktop/Smithair-Concept/frontend/context/CartContext.tsx","useCart")},4344:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6444,23)),Promise.resolve().then(r.t.bind(r,6042,23)),Promise.resolve().then(r.t.bind(r,8170,23)),Promise.resolve().then(r.t.bind(r,9477,23)),Promise.resolve().then(r.t.bind(r,9345,23)),Promise.resolve().then(r.t.bind(r,2089,23)),Promise.resolve().then(r.t.bind(r,6577,23)),Promise.resolve().then(r.t.bind(r,1307,23))},7562:(e,t,r)=>{Promise.resolve().then(r.bind(r,222)),Promise.resolve().then(r.bind(r,4237))},7590:(e,t,r)=>{"use strict";r.d(t,{l$:()=>ed,Ay:()=>ec,oR:()=>O});var s,i=r(3210);let o={data:""},a=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||o,n=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,l=/\/\*[^]*?\*\/|  +/g,d=/\n+/g,c=(e,t)=>{let r="",s="",i="";for(let o in e){let a=e[o];"@"==o[0]?"i"==o[1]?r=o+" "+a+";":s+="f"==o[1]?c(a,o):o+"{"+c(a,"k"==o[1]?"":t)+"}":"object"==typeof a?s+=c(a,t?t.replace(/([^,])+/g,e=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):o):null!=a&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=c.p?c.p(o,a):o+":"+a+";")}return r+(t&&i?t+"{"+i+"}":i)+s},u={},m=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+m(e[r]);return t}return e},p=(e,t,r,s,i)=>{let o=m(e),a=u[o]||(u[o]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(o));if(!u[a]){let t=o!==e?e:(e=>{let t,r,s=[{}];for(;t=n.exec(e.replace(l,""));)t[4]?s.shift():t[3]?(r=t[3].replace(d," ").trim(),s.unshift(s[0][r]=s[0][r]||{})):s[0][t[1]]=t[2].replace(d," ").trim();return s[0]})(e);u[a]=c(i?{["@keyframes "+a]:t}:t,r?"":"."+a)}let p=r&&u.g?u.g:null;return r&&(u.g=u[a]),((e,t,r,s)=>{s?t.data=t.data.replace(s,e):-1===t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e)})(u[a],t,s,p),a},h=(e,t,r)=>e.reduce((e,s,i)=>{let o=t[i];if(o&&o.call){let e=o(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":c(e,""):!1===e?"":e}return e+s+(null==o?"":o)},"");function f(e){let t=this||{},r=e.call?e(t.p):e;return p(r.unshift?r.raw?h(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,a(t.target),t.g,t.o,t.k)}f.bind({g:1});let x,g,b,v=f.bind({k:1});function y(e,t){let r=this||{};return function(){let s=arguments;function i(o,a){let n=Object.assign({},o),l=n.className||i.className;r.p=Object.assign({theme:g&&g()},n),r.o=/ *go\d+/.test(l),n.className=f.apply(r,s)+(l?" "+l:""),t&&(n.ref=a);let d=e;return e[0]&&(d=n.as||e,delete n.as),b&&d[0]&&b(n),x(d,n)}return t?t(i):i}}var w=e=>"function"==typeof e,C=(e,t)=>w(e)?e(t):e,j=(()=>{let e=0;return()=>(++e).toString()})(),D=(()=>{let e;return()=>e})(),k=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return k(e,{type:+!!e.toasts.find(e=>e.id===r.id),toast:r});case 3:let{toastId:s}=t;return{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},N=[],P={toasts:[],pausedAt:void 0},E=e=>{P=k(P,e),N.forEach(e=>{e(P)})},S={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},$=(e={})=>{let[t,r]=(0,i.useState)(P),s=(0,i.useRef)(P);(0,i.useEffect)(()=>(s.current!==P&&r(P),N.push(r),()=>{let e=N.indexOf(r);e>-1&&N.splice(e,1)}),[]);let o=t.toasts.map(t=>{var r,s,i;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(r=e[t.type])?void 0:r.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(s=e[t.type])?void 0:s.duration)||(null==e?void 0:e.duration)||S[t.type],style:{...e.style,...null==(i=e[t.type])?void 0:i.style,...t.style}}});return{...t,toasts:o}},A=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||j()}),I=e=>(t,r)=>{let s=A(t,e,r);return E({type:2,toast:s}),s.id},O=(e,t)=>I("blank")(e,t);O.error=I("error"),O.success=I("success"),O.loading=I("loading"),O.custom=I("custom"),O.dismiss=e=>{E({type:3,toastId:e})},O.remove=e=>E({type:4,toastId:e}),O.promise=(e,t,r)=>{let s=O.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let i=t.success?C(t.success,e):void 0;return i?O.success(i,{id:s,...r,...null==r?void 0:r.success}):O.dismiss(s),e}).catch(e=>{let i=t.error?C(t.error,e):void 0;i?O.error(i,{id:s,...r,...null==r?void 0:r.error}):O.dismiss(s)}),e};var z=(e,t)=>{E({type:1,toast:{id:e,height:t}})},F=()=>{E({type:5,time:Date.now()})},T=new Map,q=1e3,U=(e,t=q)=>{if(T.has(e))return;let r=setTimeout(()=>{T.delete(e),E({type:4,toastId:e})},t);T.set(e,r)},L=e=>{let{toasts:t,pausedAt:r}=$(e);(0,i.useEffect)(()=>{if(r)return;let e=Date.now(),s=t.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(r<0){t.visible&&O.dismiss(t.id);return}return setTimeout(()=>O.dismiss(t.id),r)});return()=>{s.forEach(e=>e&&clearTimeout(e))}},[t,r]);let s=(0,i.useCallback)(()=>{r&&E({type:6,time:Date.now()})},[r]),o=(0,i.useCallback)((e,r)=>{let{reverseOrder:s=!1,gutter:i=8,defaultPosition:o}=r||{},a=t.filter(t=>(t.position||o)===(e.position||o)&&t.height),n=a.findIndex(t=>t.id===e.id),l=a.filter((e,t)=>t<n&&e.visible).length;return a.filter(e=>e.visible).slice(...s?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+i,0)},[t]);return(0,i.useEffect)(()=>{t.forEach(e=>{if(e.dismissed)U(e.id,e.removeDelay);else{let t=T.get(e.id);t&&(clearTimeout(t),T.delete(e.id))}})},[t]),{toasts:t,handlers:{updateHeight:z,startPause:F,endPause:s,calculateOffset:o}}},R=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,M=v`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,_=v`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,H=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${R} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${M} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${_} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,B=v`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,G=y("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${B} 1s linear infinite;
`,V=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Y=v`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Z=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${V} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Y} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,J=y("div")`
  position: absolute;
`,K=y("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Q=v`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,W=y("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Q} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,X=({toast:e})=>{let{icon:t,type:r,iconTheme:s}=e;return void 0!==t?"string"==typeof t?i.createElement(W,null,t):t:"blank"===r?null:i.createElement(K,null,i.createElement(G,{...s}),"loading"!==r&&i.createElement(J,null,"error"===r?i.createElement(H,{...s}):i.createElement(Z,{...s})))},ee=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,et=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,er=y("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,es=y("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ei=(e,t)=>{let r=e.includes("top")?1:-1,[s,i]=D()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ee(r),et(r)];return{animation:t?`${v(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${v(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},eo=i.memo(({toast:e,position:t,style:r,children:s})=>{let o=e.height?ei(e.position||t||"top-center",e.visible):{opacity:0},a=i.createElement(X,{toast:e}),n=i.createElement(es,{...e.ariaProps},C(e.message,e));return i.createElement(er,{className:e.className,style:{...o,...r,...e.style}},"function"==typeof s?s({icon:a,message:n}):i.createElement(i.Fragment,null,a,n))});s=i.createElement,c.p=void 0,x=s,g=void 0,b=void 0;var ea=({id:e,className:t,style:r,onHeightUpdate:s,children:o})=>{let a=i.useCallback(t=>{if(t){let r=()=>{s(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return i.createElement("div",{ref:a,className:t,style:r},o)},en=(e,t)=>{let r=e.includes("top"),s=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:D()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...s}},el=f`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ed=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:s,children:o,containerStyle:a,containerClassName:n})=>{let{toasts:l,handlers:d}=L(r);return i.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...a},className:n,onMouseEnter:d.startPause,onMouseLeave:d.endPause},l.map(r=>{let a=r.position||t,n=en(a,d.calculateOffset(r,{reverseOrder:e,gutter:s,defaultPosition:t}));return i.createElement(ea,{id:r.id,key:r.id,onHeightUpdate:d.updateHeight,className:r.visible?el:"",style:n},"custom"===r.type?C(r.message,r):o?o(r):i.createElement(eo,{toast:r,position:a}))}))},ec=O},7730:(e,t,r)=>{Promise.resolve().then(r.bind(r,8808)),Promise.resolve().then(r.bind(r,1423))},8014:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(7413);r(2704);var i=r(4237),o=r(222);function a({children:e}){return(0,s.jsx)("html",{lang:"fr",children:(0,s.jsx)("body",{children:(0,s.jsxs)(i.CartProvider,{children:[e,(0,s.jsx)(o.default,{})]})})})}},8808:(e,t,r)=>{"use strict";r.d(t,{default:()=>i});var s=r(687);function i(){let e=new Date().getFullYear();return(0,s.jsx)("footer",{className:"w-full mt-12 py-8 border-t bg-gray-50 dark:bg-gray-900 text-sm text-gray-600 dark:text-gray-300",children:(0,s.jsxs)("div",{className:"max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4",children:[(0,s.jsxs)("p",{className:"text-center md:text-left",children:["\xa9 ",e," Smithair Concept. Tous droits r\xe9serv\xe9s."]}),(0,s.jsxs)("nav",{className:"flex flex-wrap gap-4 text-sm justify-center",children:[(0,s.jsx)("a",{href:"/politique-de-confidentialite",className:"hover:underline",children:"Politique de confidentialit\xe9"}),(0,s.jsx)("a",{href:"/mentions-legales",className:"hover:underline",children:"Mentions l\xe9gales"}),(0,s.jsx)("a",{href:"/contact",className:"hover:underline",children:"Contact"})]})]})})}},8933:(e,t,r)=>{Promise.resolve().then(r.bind(r,9766))},9766:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(2907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/davidsmite/Desktop/Smithair-Concept/frontend/app/loading.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/davidsmite/Desktop/Smithair-Concept/frontend/app/loading.tsx","default")}};