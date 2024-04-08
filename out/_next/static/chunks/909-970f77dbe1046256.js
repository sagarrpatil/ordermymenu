"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[909],{3795:function(e,t,n){n.d(t,{Z:function(){return A}});var r=n(3366),o=n(7462),i=n(7294),a=n(3961),s=n(8510),f=n(8216),c=n(948),u=n(1657),l=n(9632),p=n(1705),d=n(5861),m=n(1977),h=n(5463);function v(e){return(0,h.ZP)("MuiLink",e)}var y=(0,m.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),g=n(4844),b=n(2101);const x={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var w=({theme:e,ownerState:t})=>{const n=(e=>x[e]||e)(t.color),r=(0,g.DW)(e,`palette.${n}`,!1)||t.color,o=(0,g.DW)(e,`palette.${n}Channel`);return"vars"in e&&o?`rgba(${o} / 0.4)`:(0,b.Fq)(r,.4)},O=n(5893);const j=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],D=(0,c.ZP)(d.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`underline${(0,f.Z)(n.underline)}`],"button"===n.component&&t.button]}})((({theme:e,ownerState:t})=>(0,o.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&(0,o.Z)({textDecoration:"underline"},"inherit"!==t.color&&{textDecorationColor:w({theme:e,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===t.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${y.focusVisible}`]:{outline:"auto"}})));var A=i.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiLink"}),{className:c,color:d="primary",component:m="a",onBlur:h,onFocus:y,TypographyClasses:g,underline:b="always",variant:w="inherit",sx:A}=n,E=(0,r.Z)(n,j),{isFocusVisibleRef:k,onBlur:L,onFocus:M,ref:W}=(0,l.Z)(),[P,B]=i.useState(!1),S=(0,p.Z)(t,W),R=(0,o.Z)({},n,{color:d,component:m,focusVisible:P,underline:b,variant:w}),C=(e=>{const{classes:t,component:n,focusVisible:r,underline:o}=e,i={root:["root",`underline${(0,f.Z)(o)}`,"button"===n&&"button",r&&"focusVisible"]};return(0,s.Z)(i,v,t)})(R);return(0,O.jsx)(D,(0,o.Z)({color:d,className:(0,a.Z)(C.root,c),classes:g,component:m,onBlur:e=>{L(e),!1===k.current&&B(!1),h&&h(e)},onFocus:e=>{M(e),!0===k.current&&B(!0),y&&y(e)},ref:S,ownerState:R,variant:w,sx:[...Object.keys(x).includes(d)?[]:[{color:d}],...Array.isArray(A)?A:[A]]},E))}))},5551:function(e,t,n){function r(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function o(e){return e instanceof r(e).Element||e instanceof Element}function i(e){return e instanceof r(e).HTMLElement||e instanceof HTMLElement}function a(e){return"undefined"!==typeof ShadowRoot&&(e instanceof r(e).ShadowRoot||e instanceof ShadowRoot)}n.d(t,{fi:function(){return pe}});var s=Math.max,f=Math.min,c=Math.round;function u(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function l(){return!/^((?!chrome|android).)*safari/i.test(u())}function p(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var a=e.getBoundingClientRect(),s=1,f=1;t&&i(e)&&(s=e.offsetWidth>0&&c(a.width)/e.offsetWidth||1,f=e.offsetHeight>0&&c(a.height)/e.offsetHeight||1);var u=(o(e)?r(e):window).visualViewport,p=!l()&&n,d=(a.left+(p&&u?u.offsetLeft:0))/s,m=(a.top+(p&&u?u.offsetTop:0))/f,h=a.width/s,v=a.height/f;return{width:h,height:v,top:m,right:d+h,bottom:m+v,left:d,x:d,y:m}}function d(e){var t=r(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function m(e){return e?(e.nodeName||"").toLowerCase():null}function h(e){return((o(e)?e.ownerDocument:e.document)||window.document).documentElement}function v(e){return p(h(e)).left+d(e).scrollLeft}function y(e){return r(e).getComputedStyle(e)}function g(e){var t=y(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function b(e,t,n){void 0===n&&(n=!1);var o=i(t),a=i(t)&&function(e){var t=e.getBoundingClientRect(),n=c(t.width)/e.offsetWidth||1,r=c(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),s=h(t),f=p(e,a,n),u={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(o||!o&&!n)&&(("body"!==m(t)||g(s))&&(u=function(e){return e!==r(e)&&i(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:d(e);var t}(t)),i(t)?((l=p(t,!0)).x+=t.clientLeft,l.y+=t.clientTop):s&&(l.x=v(s))),{x:f.left+u.scrollLeft-l.x,y:f.top+u.scrollTop-l.y,width:f.width,height:f.height}}function x(e){var t=p(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function w(e){return"html"===m(e)?e:e.assignedSlot||e.parentNode||(a(e)?e.host:null)||h(e)}function O(e){return["html","body","#document"].indexOf(m(e))>=0?e.ownerDocument.body:i(e)&&g(e)?e:O(w(e))}function j(e,t){var n;void 0===t&&(t=[]);var o=O(e),i=o===(null==(n=e.ownerDocument)?void 0:n.body),a=r(o),s=i?[a].concat(a.visualViewport||[],g(o)?o:[]):o,f=t.concat(s);return i?f:f.concat(j(w(s)))}function D(e){return["table","td","th"].indexOf(m(e))>=0}function A(e){return i(e)&&"fixed"!==y(e).position?e.offsetParent:null}function E(e){for(var t=r(e),n=A(e);n&&D(n)&&"static"===y(n).position;)n=A(n);return n&&("html"===m(n)||"body"===m(n)&&"static"===y(n).position)?t:n||function(e){var t=/firefox/i.test(u());if(/Trident/i.test(u())&&i(e)&&"fixed"===y(e).position)return null;var n=w(e);for(a(n)&&(n=n.host);i(n)&&["html","body"].indexOf(m(n))<0;){var r=y(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}var k="top",L="bottom",M="right",W="left",P="auto",B=[k,L,M,W],S="start",R="end",C="viewport",H="popper",T=B.reduce((function(e,t){return e.concat([t+"-"+S,t+"-"+R])}),[]),V=[].concat(B,[P]).reduce((function(e,t){return e.concat([t,t+"-"+S,t+"-"+R])}),[]),Z=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function N(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function q(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var F={placement:"bottom",modifiers:[],strategy:"absolute"};function _(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function $(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,i=t.defaultOptions,a=void 0===i?F:i;return function(e,t,n){void 0===n&&(n=a);var i={placement:"bottom",orderedModifiers:[],options:Object.assign({},F,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},s=[],f=!1,c={state:i,setOptions:function(n){var f="function"===typeof n?n(i.options):n;u(),i.options=Object.assign({},a,i.options,f),i.scrollParents={reference:o(e)?j(e):e.contextElement?j(e.contextElement):[],popper:j(t)};var l=function(e){var t=N(e);return Z.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,i.options.modifiers)));return i.orderedModifiers=l.filter((function(e){return e.enabled})),i.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"===typeof o){var a=o({state:i,name:t,instance:c,options:r}),f=function(){};s.push(a||f)}})),c.update()},forceUpdate:function(){if(!f){var e=i.elements,t=e.reference,n=e.popper;if(_(t,n)){i.rects={reference:b(t,E(n),"fixed"===i.options.strategy),popper:x(n)},i.reset=!1,i.placement=i.options.placement,i.orderedModifiers.forEach((function(e){return i.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<i.orderedModifiers.length;r++)if(!0!==i.reset){var o=i.orderedModifiers[r],a=o.fn,s=o.options,u=void 0===s?{}:s,l=o.name;"function"===typeof a&&(i=a({state:i,options:u,name:l,instance:c})||i)}else i.reset=!1,r=-1}}},update:q((function(){return new Promise((function(e){c.forceUpdate(),e(i)}))})),destroy:function(){u(),f=!0}};if(!_(e,t))return c;function u(){s.forEach((function(e){return e()})),s=[]}return c.setOptions(n).then((function(e){!f&&n.onFirstUpdate&&n.onFirstUpdate(e)})),c}}var z={passive:!0};function I(e){return e.split("-")[0]}function U(e){return e.split("-")[1]}function X(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Y(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?I(o):null,a=o?U(o):null,s=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2;switch(i){case k:t={x:s,y:n.y-r.height};break;case L:t={x:s,y:n.y+n.height};break;case M:t={x:n.x+n.width,y:f};break;case W:t={x:n.x-r.width,y:f};break;default:t={x:n.x,y:n.y}}var c=i?X(i):null;if(null!=c){var u="y"===c?"height":"width";switch(a){case S:t[c]=t[c]-(n[u]/2-r[u]/2);break;case R:t[c]=t[c]+(n[u]/2-r[u]/2)}}return t}var G={top:"auto",right:"auto",bottom:"auto",left:"auto"};function J(e){var t,n=e.popper,o=e.popperRect,i=e.placement,a=e.variation,s=e.offsets,f=e.position,u=e.gpuAcceleration,l=e.adaptive,p=e.roundOffsets,d=e.isFixed,m=s.x,v=void 0===m?0:m,g=s.y,b=void 0===g?0:g,x="function"===typeof p?p({x:v,y:b}):{x:v,y:b};v=x.x,b=x.y;var w=s.hasOwnProperty("x"),O=s.hasOwnProperty("y"),j=W,D=k,A=window;if(l){var P=E(n),B="clientHeight",S="clientWidth";if(P===r(n)&&"static"!==y(P=h(n)).position&&"absolute"===f&&(B="scrollHeight",S="scrollWidth"),P=P,i===k||(i===W||i===M)&&a===R)D=L,b-=(d&&P===A&&A.visualViewport?A.visualViewport.height:P[B])-o.height,b*=u?1:-1;if(i===W||(i===k||i===L)&&a===R)j=M,v-=(d&&P===A&&A.visualViewport?A.visualViewport.width:P[S])-o.width,v*=u?1:-1}var C,H=Object.assign({position:f},l&&G),T=!0===p?function(e,t){var n=e.x,r=e.y,o=t.devicePixelRatio||1;return{x:c(n*o)/o||0,y:c(r*o)/o||0}}({x:v,y:b},r(n)):{x:v,y:b};return v=T.x,b=T.y,u?Object.assign({},H,((C={})[D]=O?"0":"",C[j]=w?"0":"",C.transform=(A.devicePixelRatio||1)<=1?"translate("+v+"px, "+b+"px)":"translate3d("+v+"px, "+b+"px, 0)",C)):Object.assign({},H,((t={})[D]=O?b+"px":"",t[j]=w?v+"px":"",t.transform="",t))}var K={left:"right",right:"left",bottom:"top",top:"bottom"};function Q(e){return e.replace(/left|right|bottom|top/g,(function(e){return K[e]}))}var ee={start:"end",end:"start"};function te(e){return e.replace(/start|end/g,(function(e){return ee[e]}))}function ne(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&a(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function re(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function oe(e,t,n){return t===C?re(function(e,t){var n=r(e),o=h(e),i=n.visualViewport,a=o.clientWidth,s=o.clientHeight,f=0,c=0;if(i){a=i.width,s=i.height;var u=l();(u||!u&&"fixed"===t)&&(f=i.offsetLeft,c=i.offsetTop)}return{width:a,height:s,x:f+v(e),y:c}}(e,n)):o(t)?function(e,t){var n=p(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):re(function(e){var t,n=h(e),r=d(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=s(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=s(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),f=-r.scrollLeft+v(e),c=-r.scrollTop;return"rtl"===y(o||n).direction&&(f+=s(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:f,y:c}}(h(e)))}function ie(e,t,n,r){var a="clippingParents"===t?function(e){var t=j(w(e)),n=["absolute","fixed"].indexOf(y(e).position)>=0&&i(e)?E(e):e;return o(n)?t.filter((function(e){return o(e)&&ne(e,n)&&"body"!==m(e)})):[]}(e):[].concat(t),c=[].concat(a,[n]),u=c[0],l=c.reduce((function(t,n){var o=oe(e,n,r);return t.top=s(o.top,t.top),t.right=f(o.right,t.right),t.bottom=f(o.bottom,t.bottom),t.left=s(o.left,t.left),t}),oe(e,u,r));return l.width=l.right-l.left,l.height=l.bottom-l.top,l.x=l.left,l.y=l.top,l}function ae(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function se(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function fe(e,t){void 0===t&&(t={});var n=t,r=n.placement,i=void 0===r?e.placement:r,a=n.strategy,s=void 0===a?e.strategy:a,f=n.boundary,c=void 0===f?"clippingParents":f,u=n.rootBoundary,l=void 0===u?C:u,d=n.elementContext,m=void 0===d?H:d,v=n.altBoundary,y=void 0!==v&&v,g=n.padding,b=void 0===g?0:g,x=ae("number"!==typeof b?b:se(b,B)),w=m===H?"reference":H,O=e.rects.popper,j=e.elements[y?w:m],D=ie(o(j)?j:j.contextElement||h(e.elements.popper),c,l,s),A=p(e.elements.reference),E=Y({reference:A,element:O,strategy:"absolute",placement:i}),W=re(Object.assign({},O,E)),P=m===H?W:A,S={top:D.top-P.top+x.top,bottom:P.bottom-D.bottom+x.bottom,left:D.left-P.left+x.left,right:P.right-D.right+x.right},R=e.modifiersData.offset;if(m===H&&R){var T=R[i];Object.keys(S).forEach((function(e){var t=[M,L].indexOf(e)>=0?1:-1,n=[k,L].indexOf(e)>=0?"y":"x";S[e]+=T[n]*t}))}return S}function ce(e,t,n){return s(e,f(t,n))}function ue(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function le(e){return[k,M,L,W].some((function(t){return e[t]>=0}))}var pe=$({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,o=e.options,i=o.scroll,a=void 0===i||i,s=o.resize,f=void 0===s||s,c=r(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&u.forEach((function(e){e.addEventListener("scroll",n.update,z)})),f&&c.addEventListener("resize",n.update,z),function(){a&&u.forEach((function(e){e.removeEventListener("scroll",n.update,z)})),f&&c.removeEventListener("resize",n.update,z)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=Y({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,c={placement:I(t.placement),variation:U(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,J(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,J(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];i(o)&&m(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});i(r)&&m(r)&&(Object.assign(r.style,a),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=V.reduce((function(e,n){return e[n]=function(e,t,n){var r=I(e),o=[W,k].indexOf(r)>=0?-1:1,i="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[W,M].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],f=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,c=n.padding,u=n.boundary,l=n.rootBoundary,p=n.altBoundary,d=n.flipVariations,m=void 0===d||d,h=n.allowedAutoPlacements,v=t.options.placement,y=I(v),g=f||(y===v||!m?[Q(v)]:function(e){if(I(e)===P)return[];var t=Q(e);return[te(e),t,te(t)]}(v)),b=[v].concat(g).reduce((function(e,n){return e.concat(I(n)===P?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,c=void 0===f?V:f,u=U(r),l=u?s?T:T.filter((function(e){return U(e)===u})):B,p=l.filter((function(e){return c.indexOf(e)>=0}));0===p.length&&(p=l);var d=p.reduce((function(t,n){return t[n]=fe(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[I(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:u,rootBoundary:l,padding:c,flipVariations:m,allowedAutoPlacements:h}):n)}),[]),x=t.rects.reference,w=t.rects.popper,O=new Map,j=!0,D=b[0],A=0;A<b.length;A++){var E=b[A],R=I(E),C=U(E)===S,H=[k,L].indexOf(R)>=0,Z=H?"width":"height",N=fe(t,{placement:E,boundary:u,rootBoundary:l,altBoundary:p,padding:c}),q=H?C?M:W:C?L:k;x[Z]>w[Z]&&(q=Q(q));var F=Q(q),_=[];if(i&&_.push(N[R]<=0),s&&_.push(N[q]<=0,N[F]<=0),_.every((function(e){return e}))){D=E,j=!1;break}O.set(E,_)}if(j)for(var $=function(e){var t=b.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return D=t,"break"},z=m?3:1;z>0;z--){if("break"===$(z))break}t.placement!==D&&(t.modifiersData[r]._skip=!0,t.placement=D,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,c=void 0!==a&&a,u=n.boundary,l=n.rootBoundary,p=n.altBoundary,d=n.padding,m=n.tether,h=void 0===m||m,v=n.tetherOffset,y=void 0===v?0:v,g=fe(t,{boundary:u,rootBoundary:l,padding:d,altBoundary:p}),b=I(t.placement),w=U(t.placement),O=!w,j=X(b),D="x"===j?"y":"x",A=t.modifiersData.popperOffsets,P=t.rects.reference,B=t.rects.popper,R="function"===typeof y?y(Object.assign({},t.rects,{placement:t.placement})):y,C="number"===typeof R?{mainAxis:R,altAxis:R}:Object.assign({mainAxis:0,altAxis:0},R),H=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,T={x:0,y:0};if(A){if(i){var V,Z="y"===j?k:W,N="y"===j?L:M,q="y"===j?"height":"width",F=A[j],_=F+g[Z],$=F-g[N],z=h?-B[q]/2:0,Y=w===S?P[q]:B[q],G=w===S?-B[q]:-P[q],J=t.elements.arrow,K=h&&J?x(J):{width:0,height:0},Q=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},ee=Q[Z],te=Q[N],ne=ce(0,P[q],K[q]),re=O?P[q]/2-z-ne-ee-C.mainAxis:Y-ne-ee-C.mainAxis,oe=O?-P[q]/2+z+ne+te+C.mainAxis:G+ne+te+C.mainAxis,ie=t.elements.arrow&&E(t.elements.arrow),ae=ie?"y"===j?ie.clientTop||0:ie.clientLeft||0:0,se=null!=(V=null==H?void 0:H[j])?V:0,ue=F+oe-se,le=ce(h?f(_,F+re-se-ae):_,F,h?s($,ue):$);A[j]=le,T[j]=le-F}if(c){var pe,de="x"===j?k:W,me="x"===j?L:M,he=A[D],ve="y"===D?"height":"width",ye=he+g[de],ge=he-g[me],be=-1!==[k,W].indexOf(b),xe=null!=(pe=null==H?void 0:H[D])?pe:0,we=be?ye:he-P[ve]-B[ve]-xe+C.altAxis,Oe=be?he+P[ve]+B[ve]-xe-C.altAxis:ge,je=h&&be?function(e,t,n){var r=ce(e,t,n);return r>n?n:r}(we,he,Oe):ce(h?we:ye,he,h?Oe:ge);A[D]=je,T[D]=je-he}t.modifiersData[r]=T}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=I(n.placement),f=X(s),c=[W,M].indexOf(s)>=0?"height":"width";if(i&&a){var u=function(e,t){return ae("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:se(e,B))}(o.padding,n),l=x(i),p="y"===f?k:W,d="y"===f?L:M,m=n.rects.reference[c]+n.rects.reference[f]-a[f]-n.rects.popper[c],h=a[f]-n.rects.reference[f],v=E(i),y=v?"y"===f?v.clientHeight||0:v.clientWidth||0:0,g=m/2-h/2,b=u[p],w=y-l[c]-u[d],O=y/2-l[c]/2+g,j=ce(b,O,w),D=f;n.modifiersData[r]=((t={})[D]=j,t.centerOffset=j-O,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r)))&&ne(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=fe(t,{elementContext:"reference"}),s=fe(t,{altBoundary:!0}),f=ue(a,r),c=ue(s,o,i),u=le(f),l=le(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":l})}}]})}}]);