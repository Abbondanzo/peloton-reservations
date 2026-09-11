
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="82aedc68-7815-5671-804f-486ab5f687c4")}catch(e){}}();
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function ZN(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var vg={exports:{}},Jl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jx;function JN(){if(Jx)return Jl;Jx=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(i,o,l){var u=null;if(l!==void 0&&(u=""+l),o.key!==void 0&&(u=""+o.key),"key"in o){l={};for(var f in o)f!=="key"&&(l[f]=o[f])}else l=o;return o=l.ref,{$$typeof:e,type:i,key:u,ref:o!==void 0?o:null,props:l}}return Jl.Fragment=t,Jl.jsx=n,Jl.jsxs=n,Jl}var e1;function eO(){return e1||(e1=1,vg.exports=JN()),vg.exports}var g=eO(),_g={exports:{}},je={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t1;function tO(){if(t1)return je;t1=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),_=Symbol.iterator;function v(N){return N===null||typeof N!="object"?null:(N=_&&N[_]||N["@@iterator"],typeof N=="function"?N:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,I={};function T(N,K,le){this.props=N,this.context=K,this.refs=I,this.updater=le||b}T.prototype.isReactComponent={},T.prototype.setState=function(N,K){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,K,"setState")},T.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function k(){}k.prototype=T.prototype;function M(N,K,le){this.props=N,this.context=K,this.refs=I,this.updater=le||b}var R=M.prototype=new k;R.constructor=M,x(R,T.prototype),R.isPureReactComponent=!0;var D=Array.isArray,O={H:null,A:null,T:null,S:null,V:null},A=Object.prototype.hasOwnProperty;function j(N,K,le,ie,de,me){return le=me.ref,{$$typeof:e,type:N,key:K,ref:le!==void 0?le:null,props:me}}function U(N,K){return j(N.type,K,void 0,void 0,void 0,N.props)}function F(N){return typeof N=="object"&&N!==null&&N.$$typeof===e}function H(N){var K={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(le){return K[le]})}var z=/\/+/g;function G(N,K){return typeof N=="object"&&N!==null&&N.key!=null?H(""+N.key):K.toString(36)}function V(){}function te(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(V,V):(N.status="pending",N.then(function(K){N.status==="pending"&&(N.status="fulfilled",N.value=K)},function(K){N.status==="pending"&&(N.status="rejected",N.reason=K)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function ue(N,K,le,ie,de){var me=typeof N;(me==="undefined"||me==="boolean")&&(N=null);var pe=!1;if(N===null)pe=!0;else switch(me){case"bigint":case"string":case"number":pe=!0;break;case"object":switch(N.$$typeof){case e:case t:pe=!0;break;case y:return pe=N._init,ue(pe(N._payload),K,le,ie,de)}}if(pe)return de=de(N),pe=ie===""?"."+G(N,0):ie,D(de)?(le="",pe!=null&&(le=pe.replace(z,"$&/")+"/"),ue(de,K,le,"",function(De){return De})):de!=null&&(F(de)&&(de=U(de,le+(de.key==null||N&&N.key===de.key?"":(""+de.key).replace(z,"$&/")+"/")+pe)),K.push(de)),1;pe=0;var Ae=ie===""?".":ie+":";if(D(N))for(var be=0;be<N.length;be++)ie=N[be],me=Ae+G(ie,be),pe+=ue(ie,K,le,me,de);else if(be=v(N),typeof be=="function")for(N=be.call(N),be=0;!(ie=N.next()).done;)ie=ie.value,me=Ae+G(ie,be++),pe+=ue(ie,K,le,me,de);else if(me==="object"){if(typeof N.then=="function")return ue(te(N),K,le,ie,de);throw K=String(N),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return pe}function P(N,K,le){if(N==null)return N;var ie=[],de=0;return ue(N,ie,"","",function(me){return K.call(le,me,de++)}),ie}function X(N){if(N._status===-1){var K=N._result;K=K(),K.then(function(le){(N._status===0||N._status===-1)&&(N._status=1,N._result=le)},function(le){(N._status===0||N._status===-1)&&(N._status=2,N._result=le)}),N._status===-1&&(N._status=0,N._result=K)}if(N._status===1)return N._result.default;throw N._result}var ne=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function ae(){}return je.Children={map:P,forEach:function(N,K,le){P(N,function(){K.apply(this,arguments)},le)},count:function(N){var K=0;return P(N,function(){K++}),K},toArray:function(N){return P(N,function(K){return K})||[]},only:function(N){if(!F(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},je.Component=T,je.Fragment=n,je.Profiler=o,je.PureComponent=M,je.StrictMode=i,je.Suspense=p,je.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,je.__COMPILER_RUNTIME={__proto__:null,c:function(N){return O.H.useMemoCache(N)}},je.cache=function(N){return function(){return N.apply(null,arguments)}},je.cloneElement=function(N,K,le){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var ie=x({},N.props),de=N.key,me=void 0;if(K!=null)for(pe in K.ref!==void 0&&(me=void 0),K.key!==void 0&&(de=""+K.key),K)!A.call(K,pe)||pe==="key"||pe==="__self"||pe==="__source"||pe==="ref"&&K.ref===void 0||(ie[pe]=K[pe]);var pe=arguments.length-2;if(pe===1)ie.children=le;else if(1<pe){for(var Ae=Array(pe),be=0;be<pe;be++)Ae[be]=arguments[be+2];ie.children=Ae}return j(N.type,de,void 0,void 0,me,ie)},je.createContext=function(N){return N={$$typeof:u,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:l,_context:N},N},je.createElement=function(N,K,le){var ie,de={},me=null;if(K!=null)for(ie in K.key!==void 0&&(me=""+K.key),K)A.call(K,ie)&&ie!=="key"&&ie!=="__self"&&ie!=="__source"&&(de[ie]=K[ie]);var pe=arguments.length-2;if(pe===1)de.children=le;else if(1<pe){for(var Ae=Array(pe),be=0;be<pe;be++)Ae[be]=arguments[be+2];de.children=Ae}if(N&&N.defaultProps)for(ie in pe=N.defaultProps,pe)de[ie]===void 0&&(de[ie]=pe[ie]);return j(N,me,void 0,void 0,null,de)},je.createRef=function(){return{current:null}},je.forwardRef=function(N){return{$$typeof:f,render:N}},je.isValidElement=F,je.lazy=function(N){return{$$typeof:y,_payload:{_status:-1,_result:N},_init:X}},je.memo=function(N,K){return{$$typeof:h,type:N,compare:K===void 0?null:K}},je.startTransition=function(N){var K=O.T,le={};O.T=le;try{var ie=N(),de=O.S;de!==null&&de(le,ie),typeof ie=="object"&&ie!==null&&typeof ie.then=="function"&&ie.then(ae,ne)}catch(me){ne(me)}finally{O.T=K}},je.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},je.use=function(N){return O.H.use(N)},je.useActionState=function(N,K,le){return O.H.useActionState(N,K,le)},je.useCallback=function(N,K){return O.H.useCallback(N,K)},je.useContext=function(N){return O.H.useContext(N)},je.useDebugValue=function(){},je.useDeferredValue=function(N,K){return O.H.useDeferredValue(N,K)},je.useEffect=function(N,K,le){var ie=O.H;if(typeof le=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ie.useEffect(N,K)},je.useId=function(){return O.H.useId()},je.useImperativeHandle=function(N,K,le){return O.H.useImperativeHandle(N,K,le)},je.useInsertionEffect=function(N,K){return O.H.useInsertionEffect(N,K)},je.useLayoutEffect=function(N,K){return O.H.useLayoutEffect(N,K)},je.useMemo=function(N,K){return O.H.useMemo(N,K)},je.useOptimistic=function(N,K){return O.H.useOptimistic(N,K)},je.useReducer=function(N,K,le){return O.H.useReducer(N,K,le)},je.useRef=function(N){return O.H.useRef(N)},je.useState=function(N){return O.H.useState(N)},je.useSyncExternalStore=function(N,K,le){return O.H.useSyncExternalStore(N,K,le)},je.useTransition=function(){return O.H.useTransition()},je.version="19.1.1",je}var n1;function Ah(){return n1||(n1=1,_g.exports=tO()),_g.exports}var C=Ah();const dr=ZN(C);var bg={exports:{}},ec={},Sg={exports:{}},xg={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r1;function nO(){return r1||(r1=1,(function(e){function t(P,X){var ne=P.length;P.push(X);e:for(;0<ne;){var ae=ne-1>>>1,N=P[ae];if(0<o(N,X))P[ae]=X,P[ne]=N,ne=ae;else break e}}function n(P){return P.length===0?null:P[0]}function i(P){if(P.length===0)return null;var X=P[0],ne=P.pop();if(ne!==X){P[0]=ne;e:for(var ae=0,N=P.length,K=N>>>1;ae<K;){var le=2*(ae+1)-1,ie=P[le],de=le+1,me=P[de];if(0>o(ie,ne))de<N&&0>o(me,ie)?(P[ae]=me,P[de]=ne,ae=de):(P[ae]=ie,P[le]=ne,ae=le);else if(de<N&&0>o(me,ne))P[ae]=me,P[de]=ne,ae=de;else break e}}return X}function o(P,X){var ne=P.sortIndex-X.sortIndex;return ne!==0?ne:P.id-X.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();e.unstable_now=function(){return u.now()-f}}var p=[],h=[],y=1,_=null,v=3,b=!1,x=!1,I=!1,T=!1,k=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function D(P){for(var X=n(h);X!==null;){if(X.callback===null)i(h);else if(X.startTime<=P)i(h),X.sortIndex=X.expirationTime,t(p,X);else break;X=n(h)}}function O(P){if(I=!1,D(P),!x)if(n(p)!==null)x=!0,A||(A=!0,G());else{var X=n(h);X!==null&&ue(O,X.startTime-P)}}var A=!1,j=-1,U=5,F=-1;function H(){return T?!0:!(e.unstable_now()-F<U)}function z(){if(T=!1,A){var P=e.unstable_now();F=P;var X=!0;try{e:{x=!1,I&&(I=!1,M(j),j=-1),b=!0;var ne=v;try{t:{for(D(P),_=n(p);_!==null&&!(_.expirationTime>P&&H());){var ae=_.callback;if(typeof ae=="function"){_.callback=null,v=_.priorityLevel;var N=ae(_.expirationTime<=P);if(P=e.unstable_now(),typeof N=="function"){_.callback=N,D(P),X=!0;break t}_===n(p)&&i(p),D(P)}else i(p);_=n(p)}if(_!==null)X=!0;else{var K=n(h);K!==null&&ue(O,K.startTime-P),X=!1}}break e}finally{_=null,v=ne,b=!1}X=void 0}}finally{X?G():A=!1}}}var G;if(typeof R=="function")G=function(){R(z)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,te=V.port2;V.port1.onmessage=z,G=function(){te.postMessage(null)}}else G=function(){k(z,0)};function ue(P,X){j=k(function(){P(e.unstable_now())},X)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_next=function(P){switch(v){case 1:case 2:case 3:var X=3;break;default:X=v}var ne=v;v=X;try{return P()}finally{v=ne}},e.unstable_requestPaint=function(){T=!0},e.unstable_runWithPriority=function(P,X){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var ne=v;v=P;try{return X()}finally{v=ne}},e.unstable_scheduleCallback=function(P,X,ne){var ae=e.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?ae+ne:ae):ne=ae,P){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=ne+N,P={id:y++,callback:X,priorityLevel:P,startTime:ne,expirationTime:N,sortIndex:-1},ne>ae?(P.sortIndex=ne,t(h,P),n(p)===null&&P===n(h)&&(I?(M(j),j=-1):I=!0,ue(O,ne-ae))):(P.sortIndex=N,t(p,P),x||b||(x=!0,A||(A=!0,G()))),P},e.unstable_shouldYield=H,e.unstable_wrapCallback=function(P){var X=v;return function(){var ne=v;v=X;try{return P.apply(this,arguments)}finally{v=ne}}}})(xg)),xg}var i1;function rO(){return i1||(i1=1,Sg.exports=nO()),Sg.exports}var wg={exports:{}},sn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s1;function iO(){if(s1)return sn;s1=1;var e=Ah();function t(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)h+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var i={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function l(p,h,y){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:p,containerInfo:h,implementation:y}}var u=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return sn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,sn.createPortal=function(p,h){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return l(p,h,null,y)},sn.flushSync=function(p){var h=u.T,y=i.p;try{if(u.T=null,i.p=2,p)return p()}finally{u.T=h,i.p=y,i.d.f()}},sn.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,i.d.C(p,h))},sn.prefetchDNS=function(p){typeof p=="string"&&i.d.D(p)},sn.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var y=h.as,_=f(y,h.crossOrigin),v=typeof h.integrity=="string"?h.integrity:void 0,b=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;y==="style"?i.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:b}):y==="script"&&i.d.X(p,{crossOrigin:_,integrity:v,fetchPriority:b,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},sn.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var y=f(h.as,h.crossOrigin);i.d.M(p,{crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&i.d.M(p)},sn.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var y=h.as,_=f(y,h.crossOrigin);i.d.L(p,y,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},sn.preloadModule=function(p,h){if(typeof p=="string")if(h){var y=f(h.as,h.crossOrigin);i.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else i.d.m(p)},sn.requestFormReset=function(p){i.d.r(p)},sn.unstable_batchedUpdates=function(p,h){return p(h)},sn.useFormState=function(p,h,y){return u.H.useFormState(p,h,y)},sn.useFormStatus=function(){return u.H.useHostTransitionStatus()},sn.version="19.1.1",sn}var o1;function WC(){if(o1)return wg.exports;o1=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),wg.exports=iO(),wg.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a1;function sO(){if(a1)return ec;a1=1;var e=rO(),t=Ah(),n=WC();function i(r){var s="https://react.dev/errors/"+r;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function l(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function u(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function f(r){if(l(r)!==r)throw Error(i(188))}function p(r){var s=r.alternate;if(!s){if(s=l(r),s===null)throw Error(i(188));return s!==r?null:r}for(var a=r,c=s;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return f(d),r;if(m===c)return f(d),s;m=m.sibling}throw Error(i(188))}if(a.return!==c.return)a=d,c=m;else{for(var S=!1,w=d.child;w;){if(w===a){S=!0,a=d,c=m;break}if(w===c){S=!0,c=d,a=m;break}w=w.sibling}if(!S){for(w=m.child;w;){if(w===a){S=!0,a=m,c=d;break}if(w===c){S=!0,c=m,a=d;break}w=w.sibling}if(!S)throw Error(i(189))}}if(a.alternate!==c)throw Error(i(190))}if(a.tag!==3)throw Error(i(188));return a.stateNode.current===a?r:s}function h(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r;for(r=r.child;r!==null;){if(s=h(r),s!==null)return s;r=r.sibling}return null}var y=Object.assign,_=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),M=Symbol.for("react.consumer"),R=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),A=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),F=Symbol.for("react.activity"),H=Symbol.for("react.memo_cache_sentinel"),z=Symbol.iterator;function G(r){return r===null||typeof r!="object"?null:(r=z&&r[z]||r["@@iterator"],typeof r=="function"?r:null)}var V=Symbol.for("react.client.reference");function te(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===V?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case x:return"Fragment";case T:return"Profiler";case I:return"StrictMode";case O:return"Suspense";case A:return"SuspenseList";case F:return"Activity"}if(typeof r=="object")switch(r.$$typeof){case b:return"Portal";case R:return(r.displayName||"Context")+".Provider";case M:return(r._context.displayName||"Context")+".Consumer";case D:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case j:return s=r.displayName||null,s!==null?s:te(r.type)||"Memo";case U:s=r._payload,r=r._init;try{return te(r(s))}catch{}}return null}var ue=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},ae=[],N=-1;function K(r){return{current:r}}function le(r){0>N||(r.current=ae[N],ae[N]=null,N--)}function ie(r,s){N++,ae[N]=r.current,r.current=s}var de=K(null),me=K(null),pe=K(null),Ae=K(null);function be(r,s){switch(ie(pe,s),ie(me,r),ie(de,null),s.nodeType){case 9:case 11:r=(r=s.documentElement)&&(r=r.namespaceURI)?Rx(r):0;break;default:if(r=s.tagName,s=s.namespaceURI)s=Rx(s),r=Ax(s,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}le(de),ie(de,r)}function De(){le(de),le(me),le(pe)}function $e(r){r.memoizedState!==null&&ie(Ae,r);var s=de.current,a=Ax(s,r.type);s!==a&&(ie(me,r),ie(de,a))}function vt(r){me.current===r&&(le(de),le(me)),Ae.current===r&&(le(Ae),Yl._currentValue=ne)}var mt=Object.prototype.hasOwnProperty,Ln=e.unstable_scheduleCallback,wt=e.unstable_cancelCallback,jn=e.unstable_shouldYield,Ur=e.unstable_requestPaint,Wt=e.unstable_now,rl=e.unstable_getCurrentPriorityLevel,Ds=e.unstable_ImmediatePriority,Io=e.unstable_UserBlockingPriority,Do=e.unstable_NormalPriority,zr=e.unstable_LowPriority,Ri=e.unstable_IdlePriority,Nu=e.log,il=e.unstable_setDisableYieldValue,pn=null,_t=null;function sr(r){if(typeof Nu=="function"&&il(r),_t&&typeof _t.setStrictMode=="function")try{_t.setStrictMode(pn,r)}catch{}}var Yt=Math.clz32?Math.clz32:Ou,pp=Math.log,xr=Math.LN2;function Ou(r){return r>>>=0,r===0?32:31-(pp(r)/xr|0)|0}var ks=256,Ns=4194304;function Br(r){var s=r&42;if(s!==0)return s;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return r}}function Os(r,s,a){var c=r.pendingLanes;if(c===0)return 0;var d=0,m=r.suspendedLanes,S=r.pingedLanes;r=r.warmLanes;var w=c&134217727;return w!==0?(c=w&~m,c!==0?d=Br(c):(S&=w,S!==0?d=Br(S):a||(a=w&~r,a!==0&&(d=Br(a))))):(w=c&~m,w!==0?d=Br(w):S!==0?d=Br(S):a||(a=c&~r,a!==0&&(d=Br(a)))),d===0?0:s!==0&&s!==d&&(s&m)===0&&(m=d&-d,a=s&-s,m>=a||m===32&&(a&4194048)!==0)?s:d}function wr(r,s){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&s)===0}function Mu(r,s){switch(r){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ko(){var r=ks;return ks<<=1,(ks&4194048)===0&&(ks=256),r}function Lu(){var r=Ns;return Ns<<=1,(Ns&62914560)===0&&(Ns=4194304),r}function No(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function Ms(r,s){r.pendingLanes|=s,s!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function ju(r,s,a,c,d,m){var S=r.pendingLanes;r.pendingLanes=a,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=a,r.entangledLanes&=a,r.errorRecoveryDisabledLanes&=a,r.shellSuspendCounter=0;var w=r.entanglements,L=r.expirationTimes,Q=r.hiddenUpdates;for(a=S&~a;0<a;){var re=31-Yt(a),oe=1<<re;w[re]=0,L[re]=-1;var Z=Q[re];if(Z!==null)for(Q[re]=null,re=0;re<Z.length;re++){var J=Z[re];J!==null&&(J.lane&=-536870913)}a&=~oe}c!==0&&Ls(r,c,0),m!==0&&d===0&&r.tag!==0&&(r.suspendedLanes|=m&~(S&~s))}function Ls(r,s,a){r.pendingLanes|=s,r.suspendedLanes&=~s;var c=31-Yt(s);r.entangledLanes|=s,r.entanglements[c]=r.entanglements[c]|1073741824|a&4194090}function js(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var c=31-Yt(a),d=1<<c;d&s|r[c]&s&&(r[c]|=s),a&=~d}}function sl(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function ol(r){return r&=-r,2<r?8<r?(r&134217727)!==0?32:268435456:8:2}function $(){var r=X.p;return r!==0?r:(r=window.event,r===void 0?32:Wx(r.type))}function W(r,s){var a=X.p;try{return X.p=r,s()}finally{X.p=a}}var ee=Math.random().toString(36).slice(2),ce="__reactFiber$"+ee,fe="__reactProps$"+ee,ye="__reactContainer$"+ee,xe="__reactEvents$"+ee,ve="__reactListeners$"+ee,Ee="__reactHandles$"+ee,Te="__reactResources$"+ee,_e="__reactMarker$"+ee;function Se(r){delete r[ce],delete r[fe],delete r[xe],delete r[ve],delete r[Ee]}function Ue(r){var s=r[ce];if(s)return s;for(var a=r.parentNode;a;){if(s=a[ye]||a[ce]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=Nx(r);r!==null;){if(a=r[ce])return a;r=Nx(r)}return s}r=a,a=r.parentNode}return null}function Xe(r){if(r=r[ce]||r[ye]){var s=r.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return r}return null}function gt(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r.stateNode;throw Error(i(33))}function Et(r){var s=r[Te];return s||(s=r[Te]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function Me(r){r[_e]=!0}var it=new Set,Er={};function wn(r,s){ln(r,s),ln(r+"Capture",s)}function ln(r,s){for(Er[r]=s,r=0;r<s.length;r++)it.add(s[r])}var Pn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Oo={},Ai={};function Hr(r){return mt.call(Ai,r)?!0:mt.call(Oo,r)?!1:Pn.test(r)?Ai[r]=!0:(Oo[r]=!0,!1)}function Fr(r,s,a){if(Hr(s))if(a===null)r.removeAttribute(s);else{switch(typeof a){case"undefined":case"function":case"symbol":r.removeAttribute(s);return;case"boolean":var c=s.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){r.removeAttribute(s);return}}r.setAttribute(s,""+a)}}function qr(r,s,a){if(a===null)r.removeAttribute(s);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(s);return}r.setAttribute(s,""+a)}}function Le(r,s,a,c){if(c===null)r.removeAttribute(a);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(a);return}r.setAttributeNS(s,a,""+c)}}var kt,Vr;function mn(r){if(kt===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);kt=s&&s[1]||"",Vr=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+kt+r+Vr}var bt=!1;function Ii(r,s){if(!r||bt)return"";bt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(s){var oe=function(){throw Error()};if(Object.defineProperty(oe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(oe,[])}catch(J){var Z=J}Reflect.construct(r,[],oe)}else{try{oe.call()}catch(J){Z=J}r.call(oe.prototype)}}else{try{throw Error()}catch(J){Z=J}(oe=r())&&typeof oe.catch=="function"&&oe.catch(function(){})}}catch(J){if(J&&Z&&typeof J.stack=="string")return[J.stack,Z.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=c.DetermineComponentFrameRoot(),S=m[0],w=m[1];if(S&&w){var L=S.split(`
`),Q=w.split(`
`);for(d=c=0;c<L.length&&!L[c].includes("DetermineComponentFrameRoot");)c++;for(;d<Q.length&&!Q[d].includes("DetermineComponentFrameRoot");)d++;if(c===L.length||d===Q.length)for(c=L.length-1,d=Q.length-1;1<=c&&0<=d&&L[c]!==Q[d];)d--;for(;1<=c&&0<=d;c--,d--)if(L[c]!==Q[d]){if(c!==1||d!==1)do if(c--,d--,0>d||L[c]!==Q[d]){var re=`
`+L[c].replace(" at new "," at ");return r.displayName&&re.includes("<anonymous>")&&(re=re.replace("<anonymous>",r.displayName)),re}while(1<=c&&0<=d);break}}}finally{bt=!1,Error.prepareStackTrace=a}return(a=r?r.displayName||r.name:"")?mn(a):""}function Pu(r){switch(r.tag){case 26:case 27:case 5:return mn(r.type);case 16:return mn("Lazy");case 13:return mn("Suspense");case 19:return mn("SuspenseList");case 0:case 15:return Ii(r.type,!1);case 11:return Ii(r.type.render,!1);case 1:return Ii(r.type,!0);case 31:return mn("Activity");default:return""}}function $u(r){try{var s="";do s+=Pu(r),r=r.return;while(r);return s}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function $n(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function xb(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function WD(r){var s=xb(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),c=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return d.call(this)},set:function(S){c=""+S,m.call(this,S)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(S){c=""+S},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function Uu(r){r._valueTracker||(r._valueTracker=WD(r))}function wb(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return r&&(c=xb(r)?r.checked?"true":"false":r.value),r=c,r!==a?(s.setValue(r),!0):!1}function zu(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}var YD=/[\n"\\]/g;function Un(r){return r.replace(YD,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function mp(r,s,a,c,d,m,S,w){r.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?r.type=S:r.removeAttribute("type"),s!=null?S==="number"?(s===0&&r.value===""||r.value!=s)&&(r.value=""+$n(s)):r.value!==""+$n(s)&&(r.value=""+$n(s)):S!=="submit"&&S!=="reset"||r.removeAttribute("value"),s!=null?gp(r,S,$n(s)):a!=null?gp(r,S,$n(a)):c!=null&&r.removeAttribute("value"),d==null&&m!=null&&(r.defaultChecked=!!m),d!=null&&(r.checked=d&&typeof d!="function"&&typeof d!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?r.name=""+$n(w):r.removeAttribute("name")}function Eb(r,s,a,c,d,m,S,w){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(r.type=m),s!=null||a!=null){if(!(m!=="submit"&&m!=="reset"||s!=null))return;a=a!=null?""+$n(a):"",s=s!=null?""+$n(s):a,w||s===r.value||(r.value=s),r.defaultValue=s}c=c??d,c=typeof c!="function"&&typeof c!="symbol"&&!!c,r.checked=w?r.checked:!!c,r.defaultChecked=!!c,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(r.name=S)}function gp(r,s,a){s==="number"&&zu(r.ownerDocument)===r||r.defaultValue===""+a||(r.defaultValue=""+a)}function Mo(r,s,a,c){if(r=r.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<r.length;a++)d=s.hasOwnProperty("$"+r[a].value),r[a].selected!==d&&(r[a].selected=d),d&&c&&(r[a].defaultSelected=!0)}else{for(a=""+$n(a),s=null,d=0;d<r.length;d++){if(r[d].value===a){r[d].selected=!0,c&&(r[d].defaultSelected=!0);return}s!==null||r[d].disabled||(s=r[d])}s!==null&&(s.selected=!0)}}function Cb(r,s,a){if(s!=null&&(s=""+$n(s),s!==r.value&&(r.value=s),a==null)){r.defaultValue!==s&&(r.defaultValue=s);return}r.defaultValue=a!=null?""+$n(a):""}function Tb(r,s,a,c){if(s==null){if(c!=null){if(a!=null)throw Error(i(92));if(ue(c)){if(1<c.length)throw Error(i(93));c=c[0]}a=c}a==null&&(a=""),s=a}a=$n(s),r.defaultValue=a,c=r.textContent,c===a&&c!==""&&c!==null&&(r.value=c)}function Lo(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var QD=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rb(r,s,a){var c=s.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?c?r.setProperty(s,""):s==="float"?r.cssFloat="":r[s]="":c?r.setProperty(s,a):typeof a!="number"||a===0||QD.has(s)?s==="float"?r.cssFloat=a:r[s]=(""+a).trim():r[s]=a+"px"}function Ab(r,s,a){if(s!=null&&typeof s!="object")throw Error(i(62));if(r=r.style,a!=null){for(var c in a)!a.hasOwnProperty(c)||s!=null&&s.hasOwnProperty(c)||(c.indexOf("--")===0?r.setProperty(c,""):c==="float"?r.cssFloat="":r[c]="");for(var d in s)c=s[d],s.hasOwnProperty(d)&&a[d]!==c&&Rb(r,d,c)}else for(var m in s)s.hasOwnProperty(m)&&Rb(r,m,s[m])}function yp(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var KD=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),XD=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Bu(r){return XD.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}var vp=null;function _p(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var jo=null,Po=null;function Ib(r){var s=Xe(r);if(s&&(r=s.stateNode)){var a=r[fe]||null;e:switch(r=s.stateNode,s.type){case"input":if(mp(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Un(""+s)+'"][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==r&&c.form===r.form){var d=c[fe]||null;if(!d)throw Error(i(90));mp(c,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(s=0;s<a.length;s++)c=a[s],c.form===r.form&&wb(c)}break e;case"textarea":Cb(r,a.value,a.defaultValue);break e;case"select":s=a.value,s!=null&&Mo(r,!!a.multiple,s,!1)}}}var bp=!1;function Db(r,s,a){if(bp)return r(s,a);bp=!0;try{var c=r(s);return c}finally{if(bp=!1,(jo!==null||Po!==null)&&(Td(),jo&&(s=jo,r=Po,Po=jo=null,Ib(s),r)))for(s=0;s<r.length;s++)Ib(r[s])}}function al(r,s){var a=r.stateNode;if(a===null)return null;var c=a[fe]||null;if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(i(231,s,typeof a));return a}var Gr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sp=!1;if(Gr)try{var ll={};Object.defineProperty(ll,"passive",{get:function(){Sp=!0}}),window.addEventListener("test",ll,ll),window.removeEventListener("test",ll,ll)}catch{Sp=!1}var Di=null,xp=null,Hu=null;function kb(){if(Hu)return Hu;var r,s=xp,a=s.length,c,d="value"in Di?Di.value:Di.textContent,m=d.length;for(r=0;r<a&&s[r]===d[r];r++);var S=a-r;for(c=1;c<=S&&s[a-c]===d[m-c];c++);return Hu=d.slice(r,1<c?1-c:void 0)}function Fu(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function qu(){return!0}function Nb(){return!1}function gn(r){function s(a,c,d,m,S){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=S,this.currentTarget=null;for(var w in r)r.hasOwnProperty(w)&&(a=r[w],this[w]=a?a(m):m[w]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?qu:Nb,this.isPropagationStopped=Nb,this}return y(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=qu)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=qu)},persist:function(){},isPersistent:qu}),s}var Ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vu=gn(Ps),cl=y({},Ps,{view:0,detail:0}),ZD=gn(cl),wp,Ep,ul,Gu=y({},cl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tp,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ul&&(ul&&r.type==="mousemove"?(wp=r.screenX-ul.screenX,Ep=r.screenY-ul.screenY):Ep=wp=0,ul=r),wp)},movementY:function(r){return"movementY"in r?r.movementY:Ep}}),Ob=gn(Gu),JD=y({},Gu,{dataTransfer:0}),ek=gn(JD),tk=y({},cl,{relatedTarget:0}),Cp=gn(tk),nk=y({},Ps,{animationName:0,elapsedTime:0,pseudoElement:0}),rk=gn(nk),ik=y({},Ps,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),sk=gn(ik),ok=y({},Ps,{data:0}),Mb=gn(ok),ak={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ck={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uk(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=ck[r])?!!s[r]:!1}function Tp(){return uk}var dk=y({},cl,{key:function(r){if(r.key){var s=ak[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Fu(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?lk[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tp,charCode:function(r){return r.type==="keypress"?Fu(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Fu(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),fk=gn(dk),hk=y({},Gu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lb=gn(hk),pk=y({},cl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tp}),mk=gn(pk),gk=y({},Ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),yk=gn(gk),vk=y({},Gu,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),_k=gn(vk),bk=y({},Ps,{newState:0,oldState:0}),Sk=gn(bk),xk=[9,13,27,32],Rp=Gr&&"CompositionEvent"in window,dl=null;Gr&&"documentMode"in document&&(dl=document.documentMode);var wk=Gr&&"TextEvent"in window&&!dl,jb=Gr&&(!Rp||dl&&8<dl&&11>=dl),Pb=" ",$b=!1;function Ub(r,s){switch(r){case"keyup":return xk.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zb(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var $o=!1;function Ek(r,s){switch(r){case"compositionend":return zb(s);case"keypress":return s.which!==32?null:($b=!0,Pb);case"textInput":return r=s.data,r===Pb&&$b?null:r;default:return null}}function Ck(r,s){if($o)return r==="compositionend"||!Rp&&Ub(r,s)?(r=kb(),Hu=xp=Di=null,$o=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return jb&&s.locale!=="ko"?null:s.data;default:return null}}var Tk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bb(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!Tk[r.type]:s==="textarea"}function Hb(r,s,a,c){jo?Po?Po.push(c):Po=[c]:jo=c,s=Nd(s,"onChange"),0<s.length&&(a=new Vu("onChange","change",null,a,c),r.push({event:a,listeners:s}))}var fl=null,hl=null;function Rk(r){xx(r,0)}function Wu(r){var s=gt(r);if(wb(s))return r}function Fb(r,s){if(r==="change")return s}var qb=!1;if(Gr){var Ap;if(Gr){var Ip="oninput"in document;if(!Ip){var Vb=document.createElement("div");Vb.setAttribute("oninput","return;"),Ip=typeof Vb.oninput=="function"}Ap=Ip}else Ap=!1;qb=Ap&&(!document.documentMode||9<document.documentMode)}function Gb(){fl&&(fl.detachEvent("onpropertychange",Wb),hl=fl=null)}function Wb(r){if(r.propertyName==="value"&&Wu(hl)){var s=[];Hb(s,hl,r,_p(r)),Db(Rk,s)}}function Ak(r,s,a){r==="focusin"?(Gb(),fl=s,hl=a,fl.attachEvent("onpropertychange",Wb)):r==="focusout"&&Gb()}function Ik(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Wu(hl)}function Dk(r,s){if(r==="click")return Wu(s)}function kk(r,s){if(r==="input"||r==="change")return Wu(s)}function Nk(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var En=typeof Object.is=="function"?Object.is:Nk;function pl(r,s){if(En(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!mt.call(s,d)||!En(r[d],s[d]))return!1}return!0}function Yb(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Qb(r,s){var a=Yb(r);r=0;for(var c;a;){if(a.nodeType===3){if(c=r+a.textContent.length,r<=s&&c>=s)return{node:a,offset:s-r};r=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Yb(a)}}function Kb(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?Kb(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Xb(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var s=zu(r.document);s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=zu(r.document)}return s}function Dp(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}var Ok=Gr&&"documentMode"in document&&11>=document.documentMode,Uo=null,kp=null,ml=null,Np=!1;function Zb(r,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Np||Uo==null||Uo!==zu(c)||(c=Uo,"selectionStart"in c&&Dp(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ml&&pl(ml,c)||(ml=c,c=Nd(kp,"onSelect"),0<c.length&&(s=new Vu("onSelect","select",null,s,a),r.push({event:s,listeners:c}),s.target=Uo)))}function $s(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var zo={animationend:$s("Animation","AnimationEnd"),animationiteration:$s("Animation","AnimationIteration"),animationstart:$s("Animation","AnimationStart"),transitionrun:$s("Transition","TransitionRun"),transitionstart:$s("Transition","TransitionStart"),transitioncancel:$s("Transition","TransitionCancel"),transitionend:$s("Transition","TransitionEnd")},Op={},Jb={};Gr&&(Jb=document.createElement("div").style,"AnimationEvent"in window||(delete zo.animationend.animation,delete zo.animationiteration.animation,delete zo.animationstart.animation),"TransitionEvent"in window||delete zo.transitionend.transition);function Us(r){if(Op[r])return Op[r];if(!zo[r])return r;var s=zo[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in Jb)return Op[r]=s[a];return r}var e0=Us("animationend"),t0=Us("animationiteration"),n0=Us("animationstart"),Mk=Us("transitionrun"),Lk=Us("transitionstart"),jk=Us("transitioncancel"),r0=Us("transitionend"),i0=new Map,Mp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Mp.push("scrollEnd");function or(r,s){i0.set(r,s),wn(s,[r])}var s0=new WeakMap;function zn(r,s){if(typeof r=="object"&&r!==null){var a=s0.get(r);return a!==void 0?a:(s={value:r,source:s,stack:$u(s)},s0.set(r,s),s)}return{value:r,source:s,stack:$u(s)}}var Bn=[],Bo=0,Lp=0;function Yu(){for(var r=Bo,s=Lp=Bo=0;s<r;){var a=Bn[s];Bn[s++]=null;var c=Bn[s];Bn[s++]=null;var d=Bn[s];Bn[s++]=null;var m=Bn[s];if(Bn[s++]=null,c!==null&&d!==null){var S=c.pending;S===null?d.next=d:(d.next=S.next,S.next=d),c.pending=d}m!==0&&o0(a,d,m)}}function Qu(r,s,a,c){Bn[Bo++]=r,Bn[Bo++]=s,Bn[Bo++]=a,Bn[Bo++]=c,Lp|=c,r.lanes|=c,r=r.alternate,r!==null&&(r.lanes|=c)}function jp(r,s,a,c){return Qu(r,s,a,c),Ku(r)}function Ho(r,s){return Qu(r,null,null,s),Ku(r)}function o0(r,s,a){r.lanes|=a;var c=r.alternate;c!==null&&(c.lanes|=a);for(var d=!1,m=r.return;m!==null;)m.childLanes|=a,c=m.alternate,c!==null&&(c.childLanes|=a),m.tag===22&&(r=m.stateNode,r===null||r._visibility&1||(d=!0)),r=m,m=m.return;return r.tag===3?(m=r.stateNode,d&&s!==null&&(d=31-Yt(a),r=m.hiddenUpdates,c=r[d],c===null?r[d]=[s]:c.push(s),s.lane=a|536870912),m):null}function Ku(r){if(50<zl)throw zl=0,Hm=null,Error(i(185));for(var s=r.return;s!==null;)r=s,s=r.return;return r.tag===3?r.stateNode:null}var Fo={};function Pk(r,s,a,c){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cn(r,s,a,c){return new Pk(r,s,a,c)}function Pp(r){return r=r.prototype,!(!r||!r.isReactComponent)}function Wr(r,s){var a=r.alternate;return a===null?(a=Cn(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&65011712,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a.refCleanup=r.refCleanup,a}function a0(r,s){r.flags&=65011714;var a=r.alternate;return a===null?(r.childLanes=0,r.lanes=s,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=a.childLanes,r.lanes=a.lanes,r.child=a.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=a.memoizedProps,r.memoizedState=a.memoizedState,r.updateQueue=a.updateQueue,r.type=a.type,s=a.dependencies,r.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),r}function Xu(r,s,a,c,d,m){var S=0;if(c=r,typeof r=="function")Pp(r)&&(S=1);else if(typeof r=="string")S=UN(r,a,de.current)?26:r==="html"||r==="head"||r==="body"?27:5;else e:switch(r){case F:return r=Cn(31,a,s,d),r.elementType=F,r.lanes=m,r;case x:return zs(a.children,d,m,s);case I:S=8,d|=24;break;case T:return r=Cn(12,a,s,d|2),r.elementType=T,r.lanes=m,r;case O:return r=Cn(13,a,s,d),r.elementType=O,r.lanes=m,r;case A:return r=Cn(19,a,s,d),r.elementType=A,r.lanes=m,r;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case k:case R:S=10;break e;case M:S=9;break e;case D:S=11;break e;case j:S=14;break e;case U:S=16,c=null;break e}S=29,a=Error(i(130,r===null?"null":typeof r,"")),c=null}return s=Cn(S,a,s,d),s.elementType=r,s.type=c,s.lanes=m,s}function zs(r,s,a,c){return r=Cn(7,r,c,s),r.lanes=a,r}function $p(r,s,a){return r=Cn(6,r,null,s),r.lanes=a,r}function Up(r,s,a){return s=Cn(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}var qo=[],Vo=0,Zu=null,Ju=0,Hn=[],Fn=0,Bs=null,Yr=1,Qr="";function Hs(r,s){qo[Vo++]=Ju,qo[Vo++]=Zu,Zu=r,Ju=s}function l0(r,s,a){Hn[Fn++]=Yr,Hn[Fn++]=Qr,Hn[Fn++]=Bs,Bs=r;var c=Yr;r=Qr;var d=32-Yt(c)-1;c&=~(1<<d),a+=1;var m=32-Yt(s)+d;if(30<m){var S=d-d%5;m=(c&(1<<S)-1).toString(32),c>>=S,d-=S,Yr=1<<32-Yt(s)+d|a<<d|c,Qr=m+r}else Yr=1<<m|a<<d|c,Qr=r}function zp(r){r.return!==null&&(Hs(r,1),l0(r,1,0))}function Bp(r){for(;r===Zu;)Zu=qo[--Vo],qo[Vo]=null,Ju=qo[--Vo],qo[Vo]=null;for(;r===Bs;)Bs=Hn[--Fn],Hn[Fn]=null,Qr=Hn[--Fn],Hn[Fn]=null,Yr=Hn[--Fn],Hn[Fn]=null}var cn=null,Ct=null,Ze=!1,Fs=null,Cr=!1,Hp=Error(i(519));function qs(r){var s=Error(i(418,""));throw vl(zn(s,r)),Hp}function c0(r){var s=r.stateNode,a=r.type,c=r.memoizedProps;switch(s[ce]=r,s[fe]=c,a){case"dialog":Ge("cancel",s),Ge("close",s);break;case"iframe":case"object":case"embed":Ge("load",s);break;case"video":case"audio":for(a=0;a<Hl.length;a++)Ge(Hl[a],s);break;case"source":Ge("error",s);break;case"img":case"image":case"link":Ge("error",s),Ge("load",s);break;case"details":Ge("toggle",s);break;case"input":Ge("invalid",s),Eb(s,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),Uu(s);break;case"select":Ge("invalid",s);break;case"textarea":Ge("invalid",s),Tb(s,c.value,c.defaultValue,c.children),Uu(s)}a=c.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||s.textContent===""+a||c.suppressHydrationWarning===!0||Tx(s.textContent,a)?(c.popover!=null&&(Ge("beforetoggle",s),Ge("toggle",s)),c.onScroll!=null&&Ge("scroll",s),c.onScrollEnd!=null&&Ge("scrollend",s),c.onClick!=null&&(s.onclick=Od),s=!0):s=!1,s||qs(r)}function u0(r){for(cn=r.return;cn;)switch(cn.tag){case 5:case 13:Cr=!1;return;case 27:case 3:Cr=!0;return;default:cn=cn.return}}function gl(r){if(r!==cn)return!1;if(!Ze)return u0(r),Ze=!0,!1;var s=r.tag,a;if((a=s!==3&&s!==27)&&((a=s===5)&&(a=r.type,a=!(a!=="form"&&a!=="button")||ig(r.type,r.memoizedProps)),a=!a),a&&Ct&&qs(r),u0(r),s===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(i(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8)if(a=r.data,a==="/$"){if(s===0){Ct=lr(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++;r=r.nextSibling}Ct=null}}else s===27?(s=Ct,Gi(r.type)?(r=lg,lg=null,Ct=r):Ct=s):Ct=cn?lr(r.stateNode.nextSibling):null;return!0}function yl(){Ct=cn=null,Ze=!1}function d0(){var r=Fs;return r!==null&&(_n===null?_n=r:_n.push.apply(_n,r),Fs=null),r}function vl(r){Fs===null?Fs=[r]:Fs.push(r)}var Fp=K(null),Vs=null,Kr=null;function ki(r,s,a){ie(Fp,s._currentValue),s._currentValue=a}function Xr(r){r._currentValue=Fp.current,le(Fp)}function qp(r,s,a){for(;r!==null;){var c=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),r===a)break;r=r.return}}function Vp(r,s,a,c){var d=r.child;for(d!==null&&(d.return=r);d!==null;){var m=d.dependencies;if(m!==null){var S=d.child;m=m.firstContext;e:for(;m!==null;){var w=m;m=d;for(var L=0;L<s.length;L++)if(w.context===s[L]){m.lanes|=a,w=m.alternate,w!==null&&(w.lanes|=a),qp(m.return,a,r),c||(S=null);break e}m=w.next}}else if(d.tag===18){if(S=d.return,S===null)throw Error(i(341));S.lanes|=a,m=S.alternate,m!==null&&(m.lanes|=a),qp(S,a,r),S=null}else S=d.child;if(S!==null)S.return=d;else for(S=d;S!==null;){if(S===r){S=null;break}if(d=S.sibling,d!==null){d.return=S.return,S=d;break}S=S.return}d=S}}function _l(r,s,a,c){r=null;for(var d=s,m=!1;d!==null;){if(!m){if((d.flags&524288)!==0)m=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var S=d.alternate;if(S===null)throw Error(i(387));if(S=S.memoizedProps,S!==null){var w=d.type;En(d.pendingProps.value,S.value)||(r!==null?r.push(w):r=[w])}}else if(d===Ae.current){if(S=d.alternate,S===null)throw Error(i(387));S.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(r!==null?r.push(Yl):r=[Yl])}d=d.return}r!==null&&Vp(s,r,a,c),s.flags|=262144}function ed(r){for(r=r.firstContext;r!==null;){if(!En(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function Gs(r){Vs=r,Kr=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function rn(r){return f0(Vs,r)}function td(r,s){return Vs===null&&Gs(r),f0(r,s)}function f0(r,s){var a=s._currentValue;if(s={context:s,memoizedValue:a,next:null},Kr===null){if(r===null)throw Error(i(308));Kr=s,r.dependencies={lanes:0,firstContext:s},r.flags|=524288}else Kr=Kr.next=s;return a}var $k=typeof AbortController<"u"?AbortController:function(){var r=[],s=this.signal={aborted:!1,addEventListener:function(a,c){r.push(c)}};this.abort=function(){s.aborted=!0,r.forEach(function(a){return a()})}},Uk=e.unstable_scheduleCallback,zk=e.unstable_NormalPriority,Lt={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Gp(){return{controller:new $k,data:new Map,refCount:0}}function bl(r){r.refCount--,r.refCount===0&&Uk(zk,function(){r.controller.abort()})}var Sl=null,Wp=0,Go=0,Wo=null;function Bk(r,s){if(Sl===null){var a=Sl=[];Wp=0,Go=Qm(),Wo={status:"pending",value:void 0,then:function(c){a.push(c)}}}return Wp++,s.then(h0,h0),s}function h0(){if(--Wp===0&&Sl!==null){Wo!==null&&(Wo.status="fulfilled");var r=Sl;Sl=null,Go=0,Wo=null;for(var s=0;s<r.length;s++)(0,r[s])()}}function Hk(r,s){var a=[],c={status:"pending",value:null,reason:null,then:function(d){a.push(d)}};return r.then(function(){c.status="fulfilled",c.value=s;for(var d=0;d<a.length;d++)(0,a[d])(s)},function(d){for(c.status="rejected",c.reason=d,d=0;d<a.length;d++)(0,a[d])(void 0)}),c}var p0=P.S;P.S=function(r,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&Bk(r,s),p0!==null&&p0(r,s)};var Ws=K(null);function Yp(){var r=Ws.current;return r!==null?r:dt.pooledCache}function nd(r,s){s===null?ie(Ws,Ws.current):ie(Ws,s.pool)}function m0(){var r=Yp();return r===null?null:{parent:Lt._currentValue,pool:r}}var xl=Error(i(460)),g0=Error(i(474)),rd=Error(i(542)),Qp={then:function(){}};function y0(r){return r=r.status,r==="fulfilled"||r==="rejected"}function id(){}function v0(r,s,a){switch(a=r[a],a===void 0?r.push(s):a!==s&&(s.then(id,id),s=a),s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,b0(r),r;default:if(typeof s.status=="string")s.then(id,id);else{if(r=dt,r!==null&&100<r.shellSuspendCounter)throw Error(i(482));r=s,r.status="pending",r.then(function(c){if(s.status==="pending"){var d=s;d.status="fulfilled",d.value=c}},function(c){if(s.status==="pending"){var d=s;d.status="rejected",d.reason=c}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,b0(r),r}throw wl=s,xl}}var wl=null;function _0(){if(wl===null)throw Error(i(459));var r=wl;return wl=null,r}function b0(r){if(r===xl||r===rd)throw Error(i(483))}var Ni=!1;function Kp(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Xp(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function Oi(r){return{lane:r,tag:0,payload:null,callback:null,next:null}}function Mi(r,s,a){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,(nt&2)!==0){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,s=Ku(r),o0(r,null,a),s}return Qu(r,c,s,a),Ku(r)}function El(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194048)!==0)){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,js(r,a)}}function Zp(r,s){var a=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};m===null?d=m=S:m=m.next=S,a=a.next}while(a!==null);m===null?d=m=s:m=m.next=s}else d=m=s;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,callbacks:c.callbacks},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}var Jp=!1;function Cl(){if(Jp){var r=Wo;if(r!==null)throw r}}function Tl(r,s,a,c){Jp=!1;var d=r.updateQueue;Ni=!1;var m=d.firstBaseUpdate,S=d.lastBaseUpdate,w=d.shared.pending;if(w!==null){d.shared.pending=null;var L=w,Q=L.next;L.next=null,S===null?m=Q:S.next=Q,S=L;var re=r.alternate;re!==null&&(re=re.updateQueue,w=re.lastBaseUpdate,w!==S&&(w===null?re.firstBaseUpdate=Q:w.next=Q,re.lastBaseUpdate=L))}if(m!==null){var oe=d.baseState;S=0,re=Q=L=null,w=m;do{var Z=w.lane&-536870913,J=Z!==w.lane;if(J?(Ye&Z)===Z:(c&Z)===Z){Z!==0&&Z===Go&&(Jp=!0),re!==null&&(re=re.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var Oe=r,Re=w;Z=s;var at=a;switch(Re.tag){case 1:if(Oe=Re.payload,typeof Oe=="function"){oe=Oe.call(at,oe,Z);break e}oe=Oe;break e;case 3:Oe.flags=Oe.flags&-65537|128;case 0:if(Oe=Re.payload,Z=typeof Oe=="function"?Oe.call(at,oe,Z):Oe,Z==null)break e;oe=y({},oe,Z);break e;case 2:Ni=!0}}Z=w.callback,Z!==null&&(r.flags|=64,J&&(r.flags|=8192),J=d.callbacks,J===null?d.callbacks=[Z]:J.push(Z))}else J={lane:Z,tag:w.tag,payload:w.payload,callback:w.callback,next:null},re===null?(Q=re=J,L=oe):re=re.next=J,S|=Z;if(w=w.next,w===null){if(w=d.shared.pending,w===null)break;J=w,w=J.next,J.next=null,d.lastBaseUpdate=J,d.shared.pending=null}}while(!0);re===null&&(L=oe),d.baseState=L,d.firstBaseUpdate=Q,d.lastBaseUpdate=re,m===null&&(d.shared.lanes=0),Hi|=S,r.lanes=S,r.memoizedState=oe}}function S0(r,s){if(typeof r!="function")throw Error(i(191,r));r.call(s)}function x0(r,s){var a=r.callbacks;if(a!==null)for(r.callbacks=null,r=0;r<a.length;r++)S0(a[r],s)}var Yo=K(null),sd=K(0);function w0(r,s){r=ii,ie(sd,r),ie(Yo,s),ii=r|s.baseLanes}function em(){ie(sd,ii),ie(Yo,Yo.current)}function tm(){ii=sd.current,le(Yo),le(sd)}var Li=0,Be=null,st=null,Nt=null,od=!1,Qo=!1,Ys=!1,ad=0,Rl=0,Ko=null,Fk=0;function It(){throw Error(i(321))}function nm(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!En(r[a],s[a]))return!1;return!0}function rm(r,s,a,c,d,m){return Li=m,Be=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,P.H=r===null||r.memoizedState===null?oS:aS,Ys=!1,m=a(c,d),Ys=!1,Qo&&(m=C0(s,a,c,d)),E0(r),m}function E0(r){P.H=hd;var s=st!==null&&st.next!==null;if(Li=0,Nt=st=Be=null,od=!1,Rl=0,Ko=null,s)throw Error(i(300));r===null||Ut||(r=r.dependencies,r!==null&&ed(r)&&(Ut=!0))}function C0(r,s,a,c){Be=r;var d=0;do{if(Qo&&(Ko=null),Rl=0,Qo=!1,25<=d)throw Error(i(301));if(d+=1,Nt=st=null,r.updateQueue!=null){var m=r.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}P.H=Kk,m=s(a,c)}while(Qo);return m}function qk(){var r=P.H,s=r.useState()[0];return s=typeof s.then=="function"?Al(s):s,r=r.useState()[0],(st!==null?st.memoizedState:null)!==r&&(Be.flags|=1024),s}function im(){var r=ad!==0;return ad=0,r}function sm(r,s,a){s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~a}function om(r){if(od){for(r=r.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}od=!1}Li=0,Nt=st=Be=null,Qo=!1,Rl=ad=0,Ko=null}function yn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?Be.memoizedState=Nt=r:Nt=Nt.next=r,Nt}function Ot(){if(st===null){var r=Be.alternate;r=r!==null?r.memoizedState:null}else r=st.next;var s=Nt===null?Be.memoizedState:Nt.next;if(s!==null)Nt=s,st=r;else{if(r===null)throw Be.alternate===null?Error(i(467)):Error(i(310));st=r,r={memoizedState:st.memoizedState,baseState:st.baseState,baseQueue:st.baseQueue,queue:st.queue,next:null},Nt===null?Be.memoizedState=Nt=r:Nt=Nt.next=r}return Nt}function am(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Al(r){var s=Rl;return Rl+=1,Ko===null&&(Ko=[]),r=v0(Ko,r,s),s=Be,(Nt===null?s.memoizedState:Nt.next)===null&&(s=s.alternate,P.H=s===null||s.memoizedState===null?oS:aS),r}function ld(r){if(r!==null&&typeof r=="object"){if(typeof r.then=="function")return Al(r);if(r.$$typeof===R)return rn(r)}throw Error(i(438,String(r)))}function lm(r){var s=null,a=Be.updateQueue;if(a!==null&&(s=a.memoCache),s==null){var c=Be.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(s={data:c.data.map(function(d){return d.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),a===null&&(a=am(),Be.updateQueue=a),a.memoCache=s,a=s.data[s.index],a===void 0)for(a=s.data[s.index]=Array(r),c=0;c<r;c++)a[c]=H;return s.index++,a}function Zr(r,s){return typeof s=="function"?s(r):s}function cd(r){var s=Ot();return cm(s,st,r)}function cm(r,s,a){var c=r.queue;if(c===null)throw Error(i(311));c.lastRenderedReducer=a;var d=r.baseQueue,m=c.pending;if(m!==null){if(d!==null){var S=d.next;d.next=m.next,m.next=S}s.baseQueue=d=m,c.pending=null}if(m=r.baseState,d===null)r.memoizedState=m;else{s=d.next;var w=S=null,L=null,Q=s,re=!1;do{var oe=Q.lane&-536870913;if(oe!==Q.lane?(Ye&oe)===oe:(Li&oe)===oe){var Z=Q.revertLane;if(Z===0)L!==null&&(L=L.next={lane:0,revertLane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),oe===Go&&(re=!0);else if((Li&Z)===Z){Q=Q.next,Z===Go&&(re=!0);continue}else oe={lane:0,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},L===null?(w=L=oe,S=m):L=L.next=oe,Be.lanes|=Z,Hi|=Z;oe=Q.action,Ys&&a(m,oe),m=Q.hasEagerState?Q.eagerState:a(m,oe)}else Z={lane:oe,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},L===null?(w=L=Z,S=m):L=L.next=Z,Be.lanes|=oe,Hi|=oe;Q=Q.next}while(Q!==null&&Q!==s);if(L===null?S=m:L.next=w,!En(m,r.memoizedState)&&(Ut=!0,re&&(a=Wo,a!==null)))throw a;r.memoizedState=m,r.baseState=S,r.baseQueue=L,c.lastRenderedState=m}return d===null&&(c.lanes=0),[r.memoizedState,c.dispatch]}function um(r){var s=Ot(),a=s.queue;if(a===null)throw Error(i(311));a.lastRenderedReducer=r;var c=a.dispatch,d=a.pending,m=s.memoizedState;if(d!==null){a.pending=null;var S=d=d.next;do m=r(m,S.action),S=S.next;while(S!==d);En(m,s.memoizedState)||(Ut=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),a.lastRenderedState=m}return[m,c]}function T0(r,s,a){var c=Be,d=Ot(),m=Ze;if(m){if(a===void 0)throw Error(i(407));a=a()}else a=s();var S=!En((st||d).memoizedState,a);S&&(d.memoizedState=a,Ut=!0),d=d.queue;var w=I0.bind(null,c,d,r);if(Il(2048,8,w,[r]),d.getSnapshot!==s||S||Nt!==null&&Nt.memoizedState.tag&1){if(c.flags|=2048,Xo(9,ud(),A0.bind(null,c,d,a,s),null),dt===null)throw Error(i(349));m||(Li&124)!==0||R0(c,s,a)}return a}function R0(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=Be.updateQueue,s===null?(s=am(),Be.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function A0(r,s,a,c){s.value=a,s.getSnapshot=c,D0(s)&&k0(r)}function I0(r,s,a){return a(function(){D0(s)&&k0(r)})}function D0(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!En(r,a)}catch{return!0}}function k0(r){var s=Ho(r,2);s!==null&&Dn(s,r,2)}function dm(r){var s=yn();if(typeof r=="function"){var a=r;if(r=a(),Ys){sr(!0);try{a()}finally{sr(!1)}}}return s.memoizedState=s.baseState=r,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zr,lastRenderedState:r},s}function N0(r,s,a,c){return r.baseState=a,cm(r,st,typeof c=="function"?c:Zr)}function Vk(r,s,a,c,d){if(fd(r))throw Error(i(485));if(r=s.action,r!==null){var m={payload:d,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){m.listeners.push(S)}};P.T!==null?a(!0):m.isTransition=!1,c(m),a=s.pending,a===null?(m.next=s.pending=m,O0(s,m)):(m.next=a.next,s.pending=a.next=m)}}function O0(r,s){var a=s.action,c=s.payload,d=r.state;if(s.isTransition){var m=P.T,S={};P.T=S;try{var w=a(d,c),L=P.S;L!==null&&L(S,w),M0(r,s,w)}catch(Q){fm(r,s,Q)}finally{P.T=m}}else try{m=a(d,c),M0(r,s,m)}catch(Q){fm(r,s,Q)}}function M0(r,s,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(c){L0(r,s,c)},function(c){return fm(r,s,c)}):L0(r,s,a)}function L0(r,s,a){s.status="fulfilled",s.value=a,j0(s),r.state=a,s=r.pending,s!==null&&(a=s.next,a===s?r.pending=null:(a=a.next,s.next=a,O0(r,a)))}function fm(r,s,a){var c=r.pending;if(r.pending=null,c!==null){c=c.next;do s.status="rejected",s.reason=a,j0(s),s=s.next;while(s!==c)}r.action=null}function j0(r){r=r.listeners;for(var s=0;s<r.length;s++)(0,r[s])()}function P0(r,s){return s}function $0(r,s){if(Ze){var a=dt.formState;if(a!==null){e:{var c=Be;if(Ze){if(Ct){t:{for(var d=Ct,m=Cr;d.nodeType!==8;){if(!m){d=null;break t}if(d=lr(d.nextSibling),d===null){d=null;break t}}m=d.data,d=m==="F!"||m==="F"?d:null}if(d){Ct=lr(d.nextSibling),c=d.data==="F!";break e}}qs(c)}c=!1}c&&(s=a[0])}}return a=yn(),a.memoizedState=a.baseState=s,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:P0,lastRenderedState:s},a.queue=c,a=rS.bind(null,Be,c),c.dispatch=a,c=dm(!1),m=ym.bind(null,Be,!1,c.queue),c=yn(),d={state:s,dispatch:null,action:r,pending:null},c.queue=d,a=Vk.bind(null,Be,d,m,a),d.dispatch=a,c.memoizedState=r,[s,a,!1]}function U0(r){var s=Ot();return z0(s,st,r)}function z0(r,s,a){if(s=cm(r,s,P0)[0],r=cd(Zr)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var c=Al(s)}catch(S){throw S===xl?rd:S}else c=s;s=Ot();var d=s.queue,m=d.dispatch;return a!==s.memoizedState&&(Be.flags|=2048,Xo(9,ud(),Gk.bind(null,d,a),null)),[c,m,r]}function Gk(r,s){r.action=s}function B0(r){var s=Ot(),a=st;if(a!==null)return z0(s,a,r);Ot(),s=s.memoizedState,a=Ot();var c=a.queue.dispatch;return a.memoizedState=r,[s,c,!1]}function Xo(r,s,a,c){return r={tag:r,create:a,deps:c,inst:s,next:null},s=Be.updateQueue,s===null&&(s=am(),Be.updateQueue=s),a=s.lastEffect,a===null?s.lastEffect=r.next=r:(c=a.next,a.next=r,r.next=c,s.lastEffect=r),r}function ud(){return{destroy:void 0,resource:void 0}}function H0(){return Ot().memoizedState}function dd(r,s,a,c){var d=yn();c=c===void 0?null:c,Be.flags|=r,d.memoizedState=Xo(1|s,ud(),a,c)}function Il(r,s,a,c){var d=Ot();c=c===void 0?null:c;var m=d.memoizedState.inst;st!==null&&c!==null&&nm(c,st.memoizedState.deps)?d.memoizedState=Xo(s,m,a,c):(Be.flags|=r,d.memoizedState=Xo(1|s,m,a,c))}function F0(r,s){dd(8390656,8,r,s)}function q0(r,s){Il(2048,8,r,s)}function V0(r,s){return Il(4,2,r,s)}function G0(r,s){return Il(4,4,r,s)}function W0(r,s){if(typeof s=="function"){r=r();var a=s(r);return function(){typeof a=="function"?a():s(null)}}if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function Y0(r,s,a){a=a!=null?a.concat([r]):null,Il(4,4,W0.bind(null,s,r),a)}function hm(){}function Q0(r,s){var a=Ot();s=s===void 0?null:s;var c=a.memoizedState;return s!==null&&nm(s,c[1])?c[0]:(a.memoizedState=[r,s],r)}function K0(r,s){var a=Ot();s=s===void 0?null:s;var c=a.memoizedState;if(s!==null&&nm(s,c[1]))return c[0];if(c=r(),Ys){sr(!0);try{r()}finally{sr(!1)}}return a.memoizedState=[c,s],c}function pm(r,s,a){return a===void 0||(Li&1073741824)!==0?r.memoizedState=s:(r.memoizedState=a,r=JS(),Be.lanes|=r,Hi|=r,a)}function X0(r,s,a,c){return En(a,s)?a:Yo.current!==null?(r=pm(r,a,c),En(r,s)||(Ut=!0),r):(Li&42)===0?(Ut=!0,r.memoizedState=a):(r=JS(),Be.lanes|=r,Hi|=r,s)}function Z0(r,s,a,c,d){var m=X.p;X.p=m!==0&&8>m?m:8;var S=P.T,w={};P.T=w,ym(r,!1,s,a);try{var L=d(),Q=P.S;if(Q!==null&&Q(w,L),L!==null&&typeof L=="object"&&typeof L.then=="function"){var re=Hk(L,c);Dl(r,s,re,In(r))}else Dl(r,s,c,In(r))}catch(oe){Dl(r,s,{then:function(){},status:"rejected",reason:oe},In())}finally{X.p=m,P.T=S}}function Wk(){}function mm(r,s,a,c){if(r.tag!==5)throw Error(i(476));var d=J0(r).queue;Z0(r,d,s,ne,a===null?Wk:function(){return eS(r),a(c)})}function J0(r){var s=r.memoizedState;if(s!==null)return s;s={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zr,lastRenderedState:ne},next:null};var a={};return s.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zr,lastRenderedState:a},next:null},r.memoizedState=s,r=r.alternate,r!==null&&(r.memoizedState=s),s}function eS(r){var s=J0(r).next.queue;Dl(r,s,{},In())}function gm(){return rn(Yl)}function tS(){return Ot().memoizedState}function nS(){return Ot().memoizedState}function Yk(r){for(var s=r.return;s!==null;){switch(s.tag){case 24:case 3:var a=In();r=Oi(a);var c=Mi(s,r,a);c!==null&&(Dn(c,s,a),El(c,s,a)),s={cache:Gp()},r.payload=s;return}s=s.return}}function Qk(r,s,a){var c=In();a={lane:c,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},fd(r)?iS(s,a):(a=jp(r,s,a,c),a!==null&&(Dn(a,r,c),sS(a,s,c)))}function rS(r,s,a){var c=In();Dl(r,s,a,c)}function Dl(r,s,a,c){var d={lane:c,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(fd(r))iS(s,d);else{var m=r.alternate;if(r.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var S=s.lastRenderedState,w=m(S,a);if(d.hasEagerState=!0,d.eagerState=w,En(w,S))return Qu(r,s,d,0),dt===null&&Yu(),!1}catch{}finally{}if(a=jp(r,s,d,c),a!==null)return Dn(a,r,c),sS(a,s,c),!0}return!1}function ym(r,s,a,c){if(c={lane:2,revertLane:Qm(),action:c,hasEagerState:!1,eagerState:null,next:null},fd(r)){if(s)throw Error(i(479))}else s=jp(r,a,c,2),s!==null&&Dn(s,r,2)}function fd(r){var s=r.alternate;return r===Be||s!==null&&s===Be}function iS(r,s){Qo=od=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function sS(r,s,a){if((a&4194048)!==0){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,js(r,a)}}var hd={readContext:rn,use:ld,useCallback:It,useContext:It,useEffect:It,useImperativeHandle:It,useLayoutEffect:It,useInsertionEffect:It,useMemo:It,useReducer:It,useRef:It,useState:It,useDebugValue:It,useDeferredValue:It,useTransition:It,useSyncExternalStore:It,useId:It,useHostTransitionStatus:It,useFormState:It,useActionState:It,useOptimistic:It,useMemoCache:It,useCacheRefresh:It},oS={readContext:rn,use:ld,useCallback:function(r,s){return yn().memoizedState=[r,s===void 0?null:s],r},useContext:rn,useEffect:F0,useImperativeHandle:function(r,s,a){a=a!=null?a.concat([r]):null,dd(4194308,4,W0.bind(null,s,r),a)},useLayoutEffect:function(r,s){return dd(4194308,4,r,s)},useInsertionEffect:function(r,s){dd(4,2,r,s)},useMemo:function(r,s){var a=yn();s=s===void 0?null:s;var c=r();if(Ys){sr(!0);try{r()}finally{sr(!1)}}return a.memoizedState=[c,s],c},useReducer:function(r,s,a){var c=yn();if(a!==void 0){var d=a(s);if(Ys){sr(!0);try{a(s)}finally{sr(!1)}}}else d=s;return c.memoizedState=c.baseState=d,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:d},c.queue=r,r=r.dispatch=Qk.bind(null,Be,r),[c.memoizedState,r]},useRef:function(r){var s=yn();return r={current:r},s.memoizedState=r},useState:function(r){r=dm(r);var s=r.queue,a=rS.bind(null,Be,s);return s.dispatch=a,[r.memoizedState,a]},useDebugValue:hm,useDeferredValue:function(r,s){var a=yn();return pm(a,r,s)},useTransition:function(){var r=dm(!1);return r=Z0.bind(null,Be,r.queue,!0,!1),yn().memoizedState=r,[!1,r]},useSyncExternalStore:function(r,s,a){var c=Be,d=yn();if(Ze){if(a===void 0)throw Error(i(407));a=a()}else{if(a=s(),dt===null)throw Error(i(349));(Ye&124)!==0||R0(c,s,a)}d.memoizedState=a;var m={value:a,getSnapshot:s};return d.queue=m,F0(I0.bind(null,c,m,r),[r]),c.flags|=2048,Xo(9,ud(),A0.bind(null,c,m,a,s),null),a},useId:function(){var r=yn(),s=dt.identifierPrefix;if(Ze){var a=Qr,c=Yr;a=(c&~(1<<32-Yt(c)-1)).toString(32)+a,s="«"+s+"R"+a,a=ad++,0<a&&(s+="H"+a.toString(32)),s+="»"}else a=Fk++,s="«"+s+"r"+a.toString(32)+"»";return r.memoizedState=s},useHostTransitionStatus:gm,useFormState:$0,useActionState:$0,useOptimistic:function(r){var s=yn();s.memoizedState=s.baseState=r;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=a,s=ym.bind(null,Be,!0,a),a.dispatch=s,[r,s]},useMemoCache:lm,useCacheRefresh:function(){return yn().memoizedState=Yk.bind(null,Be)}},aS={readContext:rn,use:ld,useCallback:Q0,useContext:rn,useEffect:q0,useImperativeHandle:Y0,useInsertionEffect:V0,useLayoutEffect:G0,useMemo:K0,useReducer:cd,useRef:H0,useState:function(){return cd(Zr)},useDebugValue:hm,useDeferredValue:function(r,s){var a=Ot();return X0(a,st.memoizedState,r,s)},useTransition:function(){var r=cd(Zr)[0],s=Ot().memoizedState;return[typeof r=="boolean"?r:Al(r),s]},useSyncExternalStore:T0,useId:tS,useHostTransitionStatus:gm,useFormState:U0,useActionState:U0,useOptimistic:function(r,s){var a=Ot();return N0(a,st,r,s)},useMemoCache:lm,useCacheRefresh:nS},Kk={readContext:rn,use:ld,useCallback:Q0,useContext:rn,useEffect:q0,useImperativeHandle:Y0,useInsertionEffect:V0,useLayoutEffect:G0,useMemo:K0,useReducer:um,useRef:H0,useState:function(){return um(Zr)},useDebugValue:hm,useDeferredValue:function(r,s){var a=Ot();return st===null?pm(a,r,s):X0(a,st.memoizedState,r,s)},useTransition:function(){var r=um(Zr)[0],s=Ot().memoizedState;return[typeof r=="boolean"?r:Al(r),s]},useSyncExternalStore:T0,useId:tS,useHostTransitionStatus:gm,useFormState:B0,useActionState:B0,useOptimistic:function(r,s){var a=Ot();return st!==null?N0(a,st,r,s):(a.baseState=r,[r,a.queue.dispatch])},useMemoCache:lm,useCacheRefresh:nS},Zo=null,kl=0;function pd(r){var s=kl;return kl+=1,Zo===null&&(Zo=[]),v0(Zo,r,s)}function Nl(r,s){s=s.props.ref,r.ref=s!==void 0?s:null}function md(r,s){throw s.$$typeof===_?Error(i(525)):(r=Object.prototype.toString.call(s),Error(i(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r)))}function lS(r){var s=r._init;return s(r._payload)}function cS(r){function s(q,B){if(r){var Y=q.deletions;Y===null?(q.deletions=[B],q.flags|=16):Y.push(B)}}function a(q,B){if(!r)return null;for(;B!==null;)s(q,B),B=B.sibling;return null}function c(q){for(var B=new Map;q!==null;)q.key!==null?B.set(q.key,q):B.set(q.index,q),q=q.sibling;return B}function d(q,B){return q=Wr(q,B),q.index=0,q.sibling=null,q}function m(q,B,Y){return q.index=Y,r?(Y=q.alternate,Y!==null?(Y=Y.index,Y<B?(q.flags|=67108866,B):Y):(q.flags|=67108866,B)):(q.flags|=1048576,B)}function S(q){return r&&q.alternate===null&&(q.flags|=67108866),q}function w(q,B,Y,se){return B===null||B.tag!==6?(B=$p(Y,q.mode,se),B.return=q,B):(B=d(B,Y),B.return=q,B)}function L(q,B,Y,se){var ge=Y.type;return ge===x?re(q,B,Y.props.children,se,Y.key):B!==null&&(B.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===U&&lS(ge)===B.type)?(B=d(B,Y.props),Nl(B,Y),B.return=q,B):(B=Xu(Y.type,Y.key,Y.props,null,q.mode,se),Nl(B,Y),B.return=q,B)}function Q(q,B,Y,se){return B===null||B.tag!==4||B.stateNode.containerInfo!==Y.containerInfo||B.stateNode.implementation!==Y.implementation?(B=Up(Y,q.mode,se),B.return=q,B):(B=d(B,Y.children||[]),B.return=q,B)}function re(q,B,Y,se,ge){return B===null||B.tag!==7?(B=zs(Y,q.mode,se,ge),B.return=q,B):(B=d(B,Y),B.return=q,B)}function oe(q,B,Y){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return B=$p(""+B,q.mode,Y),B.return=q,B;if(typeof B=="object"&&B!==null){switch(B.$$typeof){case v:return Y=Xu(B.type,B.key,B.props,null,q.mode,Y),Nl(Y,B),Y.return=q,Y;case b:return B=Up(B,q.mode,Y),B.return=q,B;case U:var se=B._init;return B=se(B._payload),oe(q,B,Y)}if(ue(B)||G(B))return B=zs(B,q.mode,Y,null),B.return=q,B;if(typeof B.then=="function")return oe(q,pd(B),Y);if(B.$$typeof===R)return oe(q,td(q,B),Y);md(q,B)}return null}function Z(q,B,Y,se){var ge=B!==null?B.key:null;if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return ge!==null?null:w(q,B,""+Y,se);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case v:return Y.key===ge?L(q,B,Y,se):null;case b:return Y.key===ge?Q(q,B,Y,se):null;case U:return ge=Y._init,Y=ge(Y._payload),Z(q,B,Y,se)}if(ue(Y)||G(Y))return ge!==null?null:re(q,B,Y,se,null);if(typeof Y.then=="function")return Z(q,B,pd(Y),se);if(Y.$$typeof===R)return Z(q,B,td(q,Y),se);md(q,Y)}return null}function J(q,B,Y,se,ge){if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return q=q.get(Y)||null,w(B,q,""+se,ge);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case v:return q=q.get(se.key===null?Y:se.key)||null,L(B,q,se,ge);case b:return q=q.get(se.key===null?Y:se.key)||null,Q(B,q,se,ge);case U:var He=se._init;return se=He(se._payload),J(q,B,Y,se,ge)}if(ue(se)||G(se))return q=q.get(Y)||null,re(B,q,se,ge,null);if(typeof se.then=="function")return J(q,B,Y,pd(se),ge);if(se.$$typeof===R)return J(q,B,Y,td(B,se),ge);md(B,se)}return null}function Oe(q,B,Y,se){for(var ge=null,He=null,we=B,Ie=B=0,Bt=null;we!==null&&Ie<Y.length;Ie++){we.index>Ie?(Bt=we,we=null):Bt=we.sibling;var Qe=Z(q,we,Y[Ie],se);if(Qe===null){we===null&&(we=Bt);break}r&&we&&Qe.alternate===null&&s(q,we),B=m(Qe,B,Ie),He===null?ge=Qe:He.sibling=Qe,He=Qe,we=Bt}if(Ie===Y.length)return a(q,we),Ze&&Hs(q,Ie),ge;if(we===null){for(;Ie<Y.length;Ie++)we=oe(q,Y[Ie],se),we!==null&&(B=m(we,B,Ie),He===null?ge=we:He.sibling=we,He=we);return Ze&&Hs(q,Ie),ge}for(we=c(we);Ie<Y.length;Ie++)Bt=J(we,q,Ie,Y[Ie],se),Bt!==null&&(r&&Bt.alternate!==null&&we.delete(Bt.key===null?Ie:Bt.key),B=m(Bt,B,Ie),He===null?ge=Bt:He.sibling=Bt,He=Bt);return r&&we.forEach(function(Xi){return s(q,Xi)}),Ze&&Hs(q,Ie),ge}function Re(q,B,Y,se){if(Y==null)throw Error(i(151));for(var ge=null,He=null,we=B,Ie=B=0,Bt=null,Qe=Y.next();we!==null&&!Qe.done;Ie++,Qe=Y.next()){we.index>Ie?(Bt=we,we=null):Bt=we.sibling;var Xi=Z(q,we,Qe.value,se);if(Xi===null){we===null&&(we=Bt);break}r&&we&&Xi.alternate===null&&s(q,we),B=m(Xi,B,Ie),He===null?ge=Xi:He.sibling=Xi,He=Xi,we=Bt}if(Qe.done)return a(q,we),Ze&&Hs(q,Ie),ge;if(we===null){for(;!Qe.done;Ie++,Qe=Y.next())Qe=oe(q,Qe.value,se),Qe!==null&&(B=m(Qe,B,Ie),He===null?ge=Qe:He.sibling=Qe,He=Qe);return Ze&&Hs(q,Ie),ge}for(we=c(we);!Qe.done;Ie++,Qe=Y.next())Qe=J(we,q,Ie,Qe.value,se),Qe!==null&&(r&&Qe.alternate!==null&&we.delete(Qe.key===null?Ie:Qe.key),B=m(Qe,B,Ie),He===null?ge=Qe:He.sibling=Qe,He=Qe);return r&&we.forEach(function(XN){return s(q,XN)}),Ze&&Hs(q,Ie),ge}function at(q,B,Y,se){if(typeof Y=="object"&&Y!==null&&Y.type===x&&Y.key===null&&(Y=Y.props.children),typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case v:e:{for(var ge=Y.key;B!==null;){if(B.key===ge){if(ge=Y.type,ge===x){if(B.tag===7){a(q,B.sibling),se=d(B,Y.props.children),se.return=q,q=se;break e}}else if(B.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===U&&lS(ge)===B.type){a(q,B.sibling),se=d(B,Y.props),Nl(se,Y),se.return=q,q=se;break e}a(q,B);break}else s(q,B);B=B.sibling}Y.type===x?(se=zs(Y.props.children,q.mode,se,Y.key),se.return=q,q=se):(se=Xu(Y.type,Y.key,Y.props,null,q.mode,se),Nl(se,Y),se.return=q,q=se)}return S(q);case b:e:{for(ge=Y.key;B!==null;){if(B.key===ge)if(B.tag===4&&B.stateNode.containerInfo===Y.containerInfo&&B.stateNode.implementation===Y.implementation){a(q,B.sibling),se=d(B,Y.children||[]),se.return=q,q=se;break e}else{a(q,B);break}else s(q,B);B=B.sibling}se=Up(Y,q.mode,se),se.return=q,q=se}return S(q);case U:return ge=Y._init,Y=ge(Y._payload),at(q,B,Y,se)}if(ue(Y))return Oe(q,B,Y,se);if(G(Y)){if(ge=G(Y),typeof ge!="function")throw Error(i(150));return Y=ge.call(Y),Re(q,B,Y,se)}if(typeof Y.then=="function")return at(q,B,pd(Y),se);if(Y.$$typeof===R)return at(q,B,td(q,Y),se);md(q,Y)}return typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint"?(Y=""+Y,B!==null&&B.tag===6?(a(q,B.sibling),se=d(B,Y),se.return=q,q=se):(a(q,B),se=$p(Y,q.mode,se),se.return=q,q=se),S(q)):a(q,B)}return function(q,B,Y,se){try{kl=0;var ge=at(q,B,Y,se);return Zo=null,ge}catch(we){if(we===xl||we===rd)throw we;var He=Cn(29,we,null,q.mode);return He.lanes=se,He.return=q,He}finally{}}}var Jo=cS(!0),uS=cS(!1),qn=K(null),Tr=null;function ji(r){var s=r.alternate;ie(jt,jt.current&1),ie(qn,r),Tr===null&&(s===null||Yo.current!==null||s.memoizedState!==null)&&(Tr=r)}function dS(r){if(r.tag===22){if(ie(jt,jt.current),ie(qn,r),Tr===null){var s=r.alternate;s!==null&&s.memoizedState!==null&&(Tr=r)}}else Pi()}function Pi(){ie(jt,jt.current),ie(qn,qn.current)}function Jr(r){le(qn),Tr===r&&(Tr=null),le(jt)}var jt=K(0);function gd(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||ag(a)))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}function vm(r,s,a,c){s=r.memoizedState,a=a(c,s),a=a==null?s:y({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var _m={enqueueSetState:function(r,s,a){r=r._reactInternals;var c=In(),d=Oi(c);d.payload=s,a!=null&&(d.callback=a),s=Mi(r,d,c),s!==null&&(Dn(s,r,c),El(s,r,c))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var c=In(),d=Oi(c);d.tag=1,d.payload=s,a!=null&&(d.callback=a),s=Mi(r,d,c),s!==null&&(Dn(s,r,c),El(s,r,c))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=In(),c=Oi(a);c.tag=2,s!=null&&(c.callback=s),s=Mi(r,c,a),s!==null&&(Dn(s,r,a),El(s,r,a))}};function fS(r,s,a,c,d,m,S){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,m,S):s.prototype&&s.prototype.isPureReactComponent?!pl(a,c)||!pl(d,m):!0}function hS(r,s,a,c){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==r&&_m.enqueueReplaceState(s,s.state,null)}function Qs(r,s){var a=s;if("ref"in s){a={};for(var c in s)c!=="ref"&&(a[c]=s[c])}if(r=r.defaultProps){a===s&&(a=y({},a));for(var d in r)a[d]===void 0&&(a[d]=r[d])}return a}var yd=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function pS(r){yd(r)}function mS(r){console.error(r)}function gS(r){yd(r)}function vd(r,s){try{var a=r.onUncaughtError;a(s.value,{componentStack:s.stack})}catch(c){setTimeout(function(){throw c})}}function yS(r,s,a){try{var c=r.onCaughtError;c(a.value,{componentStack:a.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function bm(r,s,a){return a=Oi(a),a.tag=3,a.payload={element:null},a.callback=function(){vd(r,s)},a}function vS(r){return r=Oi(r),r.tag=3,r}function _S(r,s,a,c){var d=a.type.getDerivedStateFromError;if(typeof d=="function"){var m=c.value;r.payload=function(){return d(m)},r.callback=function(){yS(s,a,c)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(r.callback=function(){yS(s,a,c),typeof d!="function"&&(Fi===null?Fi=new Set([this]):Fi.add(this));var w=c.stack;this.componentDidCatch(c.value,{componentStack:w!==null?w:""})})}function Xk(r,s,a,c,d){if(a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(s=a.alternate,s!==null&&_l(s,a,d,!0),a=qn.current,a!==null){switch(a.tag){case 13:return Tr===null?qm():a.alternate===null&&Tt===0&&(Tt=3),a.flags&=-257,a.flags|=65536,a.lanes=d,c===Qp?a.flags|=16384:(s=a.updateQueue,s===null?a.updateQueue=new Set([c]):s.add(c),Gm(r,c,d)),!1;case 22:return a.flags|=65536,c===Qp?a.flags|=16384:(s=a.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([c])},a.updateQueue=s):(a=s.retryQueue,a===null?s.retryQueue=new Set([c]):a.add(c)),Gm(r,c,d)),!1}throw Error(i(435,a.tag))}return Gm(r,c,d),qm(),!1}if(Ze)return s=qn.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=d,c!==Hp&&(r=Error(i(422),{cause:c}),vl(zn(r,a)))):(c!==Hp&&(s=Error(i(423),{cause:c}),vl(zn(s,a))),r=r.current.alternate,r.flags|=65536,d&=-d,r.lanes|=d,c=zn(c,a),d=bm(r.stateNode,c,d),Zp(r,d),Tt!==4&&(Tt=2)),!1;var m=Error(i(520),{cause:c});if(m=zn(m,a),Ul===null?Ul=[m]:Ul.push(m),Tt!==4&&(Tt=2),s===null)return!0;c=zn(c,a),a=s;do{switch(a.tag){case 3:return a.flags|=65536,r=d&-d,a.lanes|=r,r=bm(a.stateNode,c,r),Zp(a,r),!1;case 1:if(s=a.type,m=a.stateNode,(a.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Fi===null||!Fi.has(m))))return a.flags|=65536,d&=-d,a.lanes|=d,d=vS(d),_S(d,r,a,c),Zp(a,d),!1}a=a.return}while(a!==null);return!1}var bS=Error(i(461)),Ut=!1;function Qt(r,s,a,c){s.child=r===null?uS(s,null,a,c):Jo(s,r.child,a,c)}function SS(r,s,a,c,d){a=a.render;var m=s.ref;if("ref"in c){var S={};for(var w in c)w!=="ref"&&(S[w]=c[w])}else S=c;return Gs(s),c=rm(r,s,a,S,m,d),w=im(),r!==null&&!Ut?(sm(r,s,d),ei(r,s,d)):(Ze&&w&&zp(s),s.flags|=1,Qt(r,s,c,d),s.child)}function xS(r,s,a,c,d){if(r===null){var m=a.type;return typeof m=="function"&&!Pp(m)&&m.defaultProps===void 0&&a.compare===null?(s.tag=15,s.type=m,wS(r,s,m,c,d)):(r=Xu(a.type,null,c,s,s.mode,d),r.ref=s.ref,r.return=s,s.child=r)}if(m=r.child,!Am(r,d)){var S=m.memoizedProps;if(a=a.compare,a=a!==null?a:pl,a(S,c)&&r.ref===s.ref)return ei(r,s,d)}return s.flags|=1,r=Wr(m,c),r.ref=s.ref,r.return=s,s.child=r}function wS(r,s,a,c,d){if(r!==null){var m=r.memoizedProps;if(pl(m,c)&&r.ref===s.ref)if(Ut=!1,s.pendingProps=c=m,Am(r,d))(r.flags&131072)!==0&&(Ut=!0);else return s.lanes=r.lanes,ei(r,s,d)}return Sm(r,s,a,c,d)}function ES(r,s,a){var c=s.pendingProps,d=c.children,m=r!==null?r.memoizedState:null;if(c.mode==="hidden"){if((s.flags&128)!==0){if(c=m!==null?m.baseLanes|a:a,r!==null){for(d=s.child=r.child,m=0;d!==null;)m=m|d.lanes|d.childLanes,d=d.sibling;s.childLanes=m&~c}else s.childLanes=0,s.child=null;return CS(r,s,c,a)}if((a&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},r!==null&&nd(s,m!==null?m.cachePool:null),m!==null?w0(s,m):em(),dS(s);else return s.lanes=s.childLanes=536870912,CS(r,s,m!==null?m.baseLanes|a:a,a)}else m!==null?(nd(s,m.cachePool),w0(s,m),Pi(),s.memoizedState=null):(r!==null&&nd(s,null),em(),Pi());return Qt(r,s,d,a),s.child}function CS(r,s,a,c){var d=Yp();return d=d===null?null:{parent:Lt._currentValue,pool:d},s.memoizedState={baseLanes:a,cachePool:d},r!==null&&nd(s,null),em(),dS(s),r!==null&&_l(r,s,c,!0),null}function _d(r,s){var a=s.ref;if(a===null)r!==null&&r.ref!==null&&(s.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(i(284));(r===null||r.ref!==a)&&(s.flags|=4194816)}}function Sm(r,s,a,c,d){return Gs(s),a=rm(r,s,a,c,void 0,d),c=im(),r!==null&&!Ut?(sm(r,s,d),ei(r,s,d)):(Ze&&c&&zp(s),s.flags|=1,Qt(r,s,a,d),s.child)}function TS(r,s,a,c,d,m){return Gs(s),s.updateQueue=null,a=C0(s,c,a,d),E0(r),c=im(),r!==null&&!Ut?(sm(r,s,m),ei(r,s,m)):(Ze&&c&&zp(s),s.flags|=1,Qt(r,s,a,m),s.child)}function RS(r,s,a,c,d){if(Gs(s),s.stateNode===null){var m=Fo,S=a.contextType;typeof S=="object"&&S!==null&&(m=rn(S)),m=new a(c,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=_m,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=c,m.state=s.memoizedState,m.refs={},Kp(s),S=a.contextType,m.context=typeof S=="object"&&S!==null?rn(S):Fo,m.state=s.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(vm(s,a,S,c),m.state=s.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(S=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),S!==m.state&&_m.enqueueReplaceState(m,m.state,null),Tl(s,c,m,d),Cl(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),c=!0}else if(r===null){m=s.stateNode;var w=s.memoizedProps,L=Qs(a,w);m.props=L;var Q=m.context,re=a.contextType;S=Fo,typeof re=="object"&&re!==null&&(S=rn(re));var oe=a.getDerivedStateFromProps;re=typeof oe=="function"||typeof m.getSnapshotBeforeUpdate=="function",w=s.pendingProps!==w,re||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w||Q!==S)&&hS(s,m,c,S),Ni=!1;var Z=s.memoizedState;m.state=Z,Tl(s,c,m,d),Cl(),Q=s.memoizedState,w||Z!==Q||Ni?(typeof oe=="function"&&(vm(s,a,oe,c),Q=s.memoizedState),(L=Ni||fS(s,a,L,c,Z,Q,S))?(re||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=Q),m.props=c,m.state=Q,m.context=S,c=L):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{m=s.stateNode,Xp(r,s),S=s.memoizedProps,re=Qs(a,S),m.props=re,oe=s.pendingProps,Z=m.context,Q=a.contextType,L=Fo,typeof Q=="object"&&Q!==null&&(L=rn(Q)),w=a.getDerivedStateFromProps,(Q=typeof w=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S!==oe||Z!==L)&&hS(s,m,c,L),Ni=!1,Z=s.memoizedState,m.state=Z,Tl(s,c,m,d),Cl();var J=s.memoizedState;S!==oe||Z!==J||Ni||r!==null&&r.dependencies!==null&&ed(r.dependencies)?(typeof w=="function"&&(vm(s,a,w,c),J=s.memoizedState),(re=Ni||fS(s,a,re,c,Z,J,L)||r!==null&&r.dependencies!==null&&ed(r.dependencies))?(Q||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(c,J,L),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(c,J,L)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||S===r.memoizedProps&&Z===r.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&Z===r.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=J),m.props=c,m.state=J,m.context=L,c=re):(typeof m.componentDidUpdate!="function"||S===r.memoizedProps&&Z===r.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&Z===r.memoizedState||(s.flags|=1024),c=!1)}return m=c,_d(r,s),c=(s.flags&128)!==0,m||c?(m=s.stateNode,a=c&&typeof a.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,r!==null&&c?(s.child=Jo(s,r.child,null,d),s.child=Jo(s,null,a,d)):Qt(r,s,a,d),s.memoizedState=m.state,r=s.child):r=ei(r,s,d),r}function AS(r,s,a,c){return yl(),s.flags|=256,Qt(r,s,a,c),s.child}var xm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wm(r){return{baseLanes:r,cachePool:m0()}}function Em(r,s,a){return r=r!==null?r.childLanes&~a:0,s&&(r|=Vn),r}function IS(r,s,a){var c=s.pendingProps,d=!1,m=(s.flags&128)!==0,S;if((S=m)||(S=r!==null&&r.memoizedState===null?!1:(jt.current&2)!==0),S&&(d=!0,s.flags&=-129),S=(s.flags&32)!==0,s.flags&=-33,r===null){if(Ze){if(d?ji(s):Pi(),Ze){var w=Ct,L;if(L=w){e:{for(L=w,w=Cr;L.nodeType!==8;){if(!w){w=null;break e}if(L=lr(L.nextSibling),L===null){w=null;break e}}w=L}w!==null?(s.memoizedState={dehydrated:w,treeContext:Bs!==null?{id:Yr,overflow:Qr}:null,retryLane:536870912,hydrationErrors:null},L=Cn(18,null,null,0),L.stateNode=w,L.return=s,s.child=L,cn=s,Ct=null,L=!0):L=!1}L||qs(s)}if(w=s.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return ag(w)?s.lanes=32:s.lanes=536870912,null;Jr(s)}return w=c.children,c=c.fallback,d?(Pi(),d=s.mode,w=bd({mode:"hidden",children:w},d),c=zs(c,d,a,null),w.return=s,c.return=s,w.sibling=c,s.child=w,d=s.child,d.memoizedState=wm(a),d.childLanes=Em(r,S,a),s.memoizedState=xm,c):(ji(s),Cm(s,w))}if(L=r.memoizedState,L!==null&&(w=L.dehydrated,w!==null)){if(m)s.flags&256?(ji(s),s.flags&=-257,s=Tm(r,s,a)):s.memoizedState!==null?(Pi(),s.child=r.child,s.flags|=128,s=null):(Pi(),d=c.fallback,w=s.mode,c=bd({mode:"visible",children:c.children},w),d=zs(d,w,a,null),d.flags|=2,c.return=s,d.return=s,c.sibling=d,s.child=c,Jo(s,r.child,null,a),c=s.child,c.memoizedState=wm(a),c.childLanes=Em(r,S,a),s.memoizedState=xm,s=d);else if(ji(s),ag(w)){if(S=w.nextSibling&&w.nextSibling.dataset,S)var Q=S.dgst;S=Q,c=Error(i(419)),c.stack="",c.digest=S,vl({value:c,source:null,stack:null}),s=Tm(r,s,a)}else if(Ut||_l(r,s,a,!1),S=(a&r.childLanes)!==0,Ut||S){if(S=dt,S!==null&&(c=a&-a,c=(c&42)!==0?1:sl(c),c=(c&(S.suspendedLanes|a))!==0?0:c,c!==0&&c!==L.retryLane))throw L.retryLane=c,Ho(r,c),Dn(S,r,c),bS;w.data==="$?"||qm(),s=Tm(r,s,a)}else w.data==="$?"?(s.flags|=192,s.child=r.child,s=null):(r=L.treeContext,Ct=lr(w.nextSibling),cn=s,Ze=!0,Fs=null,Cr=!1,r!==null&&(Hn[Fn++]=Yr,Hn[Fn++]=Qr,Hn[Fn++]=Bs,Yr=r.id,Qr=r.overflow,Bs=s),s=Cm(s,c.children),s.flags|=4096);return s}return d?(Pi(),d=c.fallback,w=s.mode,L=r.child,Q=L.sibling,c=Wr(L,{mode:"hidden",children:c.children}),c.subtreeFlags=L.subtreeFlags&65011712,Q!==null?d=Wr(Q,d):(d=zs(d,w,a,null),d.flags|=2),d.return=s,c.return=s,c.sibling=d,s.child=c,c=d,d=s.child,w=r.child.memoizedState,w===null?w=wm(a):(L=w.cachePool,L!==null?(Q=Lt._currentValue,L=L.parent!==Q?{parent:Q,pool:Q}:L):L=m0(),w={baseLanes:w.baseLanes|a,cachePool:L}),d.memoizedState=w,d.childLanes=Em(r,S,a),s.memoizedState=xm,c):(ji(s),a=r.child,r=a.sibling,a=Wr(a,{mode:"visible",children:c.children}),a.return=s,a.sibling=null,r!==null&&(S=s.deletions,S===null?(s.deletions=[r],s.flags|=16):S.push(r)),s.child=a,s.memoizedState=null,a)}function Cm(r,s){return s=bd({mode:"visible",children:s},r.mode),s.return=r,r.child=s}function bd(r,s){return r=Cn(22,r,null,s),r.lanes=0,r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},r}function Tm(r,s,a){return Jo(s,r.child,null,a),r=Cm(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function DS(r,s,a){r.lanes|=s;var c=r.alternate;c!==null&&(c.lanes|=s),qp(r.return,s,a)}function Rm(r,s,a,c,d){var m=r.memoizedState;m===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=s,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function kS(r,s,a){var c=s.pendingProps,d=c.revealOrder,m=c.tail;if(Qt(r,s,c.children,a),c=jt.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&DS(r,a,s);else if(r.tag===19)DS(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}switch(ie(jt,c),d){case"forwards":for(a=s.child,d=null;a!==null;)r=a.alternate,r!==null&&gd(r)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),Rm(s,!1,d,a,m);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(r=d.alternate,r!==null&&gd(r)===null){s.child=d;break}r=d.sibling,d.sibling=a,a=d,d=r}Rm(s,!0,a,null,m);break;case"together":Rm(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function ei(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),Hi|=s.lanes,(a&s.childLanes)===0)if(r!==null){if(_l(r,s,a,!1),(a&s.childLanes)===0)return null}else return null;if(r!==null&&s.child!==r.child)throw Error(i(153));if(s.child!==null){for(r=s.child,a=Wr(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=Wr(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function Am(r,s){return(r.lanes&s)!==0?!0:(r=r.dependencies,!!(r!==null&&ed(r)))}function Zk(r,s,a){switch(s.tag){case 3:be(s,s.stateNode.containerInfo),ki(s,Lt,r.memoizedState.cache),yl();break;case 27:case 5:$e(s);break;case 4:be(s,s.stateNode.containerInfo);break;case 10:ki(s,s.type,s.memoizedProps.value);break;case 13:var c=s.memoizedState;if(c!==null)return c.dehydrated!==null?(ji(s),s.flags|=128,null):(a&s.child.childLanes)!==0?IS(r,s,a):(ji(s),r=ei(r,s,a),r!==null?r.sibling:null);ji(s);break;case 19:var d=(r.flags&128)!==0;if(c=(a&s.childLanes)!==0,c||(_l(r,s,a,!1),c=(a&s.childLanes)!==0),d){if(c)return kS(r,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),ie(jt,jt.current),c)break;return null;case 22:case 23:return s.lanes=0,ES(r,s,a);case 24:ki(s,Lt,r.memoizedState.cache)}return ei(r,s,a)}function NS(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps)Ut=!0;else{if(!Am(r,a)&&(s.flags&128)===0)return Ut=!1,Zk(r,s,a);Ut=(r.flags&131072)!==0}else Ut=!1,Ze&&(s.flags&1048576)!==0&&l0(s,Ju,s.index);switch(s.lanes=0,s.tag){case 16:e:{r=s.pendingProps;var c=s.elementType,d=c._init;if(c=d(c._payload),s.type=c,typeof c=="function")Pp(c)?(r=Qs(c,r),s.tag=1,s=RS(null,s,c,r,a)):(s.tag=0,s=Sm(null,s,c,r,a));else{if(c!=null){if(d=c.$$typeof,d===D){s.tag=11,s=SS(null,s,c,r,a);break e}else if(d===j){s.tag=14,s=xS(null,s,c,r,a);break e}}throw s=te(c)||c,Error(i(306,s,""))}}return s;case 0:return Sm(r,s,s.type,s.pendingProps,a);case 1:return c=s.type,d=Qs(c,s.pendingProps),RS(r,s,c,d,a);case 3:e:{if(be(s,s.stateNode.containerInfo),r===null)throw Error(i(387));c=s.pendingProps;var m=s.memoizedState;d=m.element,Xp(r,s),Tl(s,c,null,a);var S=s.memoizedState;if(c=S.cache,ki(s,Lt,c),c!==m.cache&&Vp(s,[Lt],a,!0),Cl(),c=S.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:S.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=AS(r,s,c,a);break e}else if(c!==d){d=zn(Error(i(424)),s),vl(d),s=AS(r,s,c,a);break e}else{switch(r=s.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}for(Ct=lr(r.firstChild),cn=s,Ze=!0,Fs=null,Cr=!0,a=uS(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(yl(),c===d){s=ei(r,s,a);break e}Qt(r,s,c,a)}s=s.child}return s;case 26:return _d(r,s),r===null?(a=jx(s.type,null,s.pendingProps,null))?s.memoizedState=a:Ze||(a=s.type,r=s.pendingProps,c=Md(pe.current).createElement(a),c[ce]=s,c[fe]=r,Xt(c,a,r),Me(c),s.stateNode=c):s.memoizedState=jx(s.type,r.memoizedProps,s.pendingProps,r.memoizedState),null;case 27:return $e(s),r===null&&Ze&&(c=s.stateNode=Ox(s.type,s.pendingProps,pe.current),cn=s,Cr=!0,d=Ct,Gi(s.type)?(lg=d,Ct=lr(c.firstChild)):Ct=d),Qt(r,s,s.pendingProps.children,a),_d(r,s),r===null&&(s.flags|=4194304),s.child;case 5:return r===null&&Ze&&((d=c=Ct)&&(c=TN(c,s.type,s.pendingProps,Cr),c!==null?(s.stateNode=c,cn=s,Ct=lr(c.firstChild),Cr=!1,d=!0):d=!1),d||qs(s)),$e(s),d=s.type,m=s.pendingProps,S=r!==null?r.memoizedProps:null,c=m.children,ig(d,m)?c=null:S!==null&&ig(d,S)&&(s.flags|=32),s.memoizedState!==null&&(d=rm(r,s,qk,null,null,a),Yl._currentValue=d),_d(r,s),Qt(r,s,c,a),s.child;case 6:return r===null&&Ze&&((r=a=Ct)&&(a=RN(a,s.pendingProps,Cr),a!==null?(s.stateNode=a,cn=s,Ct=null,r=!0):r=!1),r||qs(s)),null;case 13:return IS(r,s,a);case 4:return be(s,s.stateNode.containerInfo),c=s.pendingProps,r===null?s.child=Jo(s,null,c,a):Qt(r,s,c,a),s.child;case 11:return SS(r,s,s.type,s.pendingProps,a);case 7:return Qt(r,s,s.pendingProps,a),s.child;case 8:return Qt(r,s,s.pendingProps.children,a),s.child;case 12:return Qt(r,s,s.pendingProps.children,a),s.child;case 10:return c=s.pendingProps,ki(s,s.type,c.value),Qt(r,s,c.children,a),s.child;case 9:return d=s.type._context,c=s.pendingProps.children,Gs(s),d=rn(d),c=c(d),s.flags|=1,Qt(r,s,c,a),s.child;case 14:return xS(r,s,s.type,s.pendingProps,a);case 15:return wS(r,s,s.type,s.pendingProps,a);case 19:return kS(r,s,a);case 31:return c=s.pendingProps,a=s.mode,c={mode:c.mode,children:c.children},r===null?(a=bd(c,a),a.ref=s.ref,s.child=a,a.return=s,s=a):(a=Wr(r.child,c),a.ref=s.ref,s.child=a,a.return=s,s=a),s;case 22:return ES(r,s,a);case 24:return Gs(s),c=rn(Lt),r===null?(d=Yp(),d===null&&(d=dt,m=Gp(),d.pooledCache=m,m.refCount++,m!==null&&(d.pooledCacheLanes|=a),d=m),s.memoizedState={parent:c,cache:d},Kp(s),ki(s,Lt,d)):((r.lanes&a)!==0&&(Xp(r,s),Tl(s,null,null,a),Cl()),d=r.memoizedState,m=s.memoizedState,d.parent!==c?(d={parent:c,cache:c},s.memoizedState=d,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=d),ki(s,Lt,c)):(c=m.cache,ki(s,Lt,c),c!==d.cache&&Vp(s,[Lt],a,!0))),Qt(r,s,s.pendingProps.children,a),s.child;case 29:throw s.pendingProps}throw Error(i(156,s.tag))}function ti(r){r.flags|=4}function OS(r,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)r.flags&=-16777217;else if(r.flags|=16777216,!Bx(s)){if(s=qn.current,s!==null&&((Ye&4194048)===Ye?Tr!==null:(Ye&62914560)!==Ye&&(Ye&536870912)===0||s!==Tr))throw wl=Qp,g0;r.flags|=8192}}function Sd(r,s){s!==null&&(r.flags|=4),r.flags&16384&&(s=r.tag!==22?Lu():536870912,r.lanes|=s,ra|=s)}function Ol(r,s){if(!Ze)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function St(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,c=0;if(s)for(var d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&65011712,c|=d.flags&65011712,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=c,r.childLanes=a,s}function Jk(r,s,a){var c=s.pendingProps;switch(Bp(s),s.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return St(s),null;case 1:return St(s),null;case 3:return a=s.stateNode,c=null,r!==null&&(c=r.memoizedState.cache),s.memoizedState.cache!==c&&(s.flags|=2048),Xr(Lt),De(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(r===null||r.child===null)&&(gl(s)?ti(s):r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,d0())),St(s),null;case 26:return a=s.memoizedState,r===null?(ti(s),a!==null?(St(s),OS(s,a)):(St(s),s.flags&=-16777217)):a?a!==r.memoizedState?(ti(s),St(s),OS(s,a)):(St(s),s.flags&=-16777217):(r.memoizedProps!==c&&ti(s),St(s),s.flags&=-16777217),null;case 27:vt(s),a=pe.current;var d=s.type;if(r!==null&&s.stateNode!=null)r.memoizedProps!==c&&ti(s);else{if(!c){if(s.stateNode===null)throw Error(i(166));return St(s),null}r=de.current,gl(s)?c0(s):(r=Ox(d,c,a),s.stateNode=r,ti(s))}return St(s),null;case 5:if(vt(s),a=s.type,r!==null&&s.stateNode!=null)r.memoizedProps!==c&&ti(s);else{if(!c){if(s.stateNode===null)throw Error(i(166));return St(s),null}if(r=de.current,gl(s))c0(s);else{switch(d=Md(pe.current),r){case 1:r=d.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:r=d.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":r=d.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":r=d.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":r=d.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof c.is=="string"?d.createElement("select",{is:c.is}):d.createElement("select"),c.multiple?r.multiple=!0:c.size&&(r.size=c.size);break;default:r=typeof c.is=="string"?d.createElement(a,{is:c.is}):d.createElement(a)}}r[ce]=s,r[fe]=c;e:for(d=s.child;d!==null;){if(d.tag===5||d.tag===6)r.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===s)break e;for(;d.sibling===null;){if(d.return===null||d.return===s)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}s.stateNode=r;e:switch(Xt(r,a,c),a){case"button":case"input":case"select":case"textarea":r=!!c.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&ti(s)}}return St(s),s.flags&=-16777217,null;case 6:if(r&&s.stateNode!=null)r.memoizedProps!==c&&ti(s);else{if(typeof c!="string"&&s.stateNode===null)throw Error(i(166));if(r=pe.current,gl(s)){if(r=s.stateNode,a=s.memoizedProps,c=null,d=cn,d!==null)switch(d.tag){case 27:case 5:c=d.memoizedProps}r[ce]=s,r=!!(r.nodeValue===a||c!==null&&c.suppressHydrationWarning===!0||Tx(r.nodeValue,a)),r||qs(s)}else r=Md(r).createTextNode(c),r[ce]=s,s.stateNode=r}return St(s),null;case 13:if(c=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(d=gl(s),c!==null&&c.dehydrated!==null){if(r===null){if(!d)throw Error(i(318));if(d=s.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(i(317));d[ce]=s}else yl(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;St(s),d=!1}else d=d0(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=d),d=!0;if(!d)return s.flags&256?(Jr(s),s):(Jr(s),null)}if(Jr(s),(s.flags&128)!==0)return s.lanes=a,s;if(a=c!==null,r=r!==null&&r.memoizedState!==null,a){c=s.child,d=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(d=c.alternate.memoizedState.cachePool.pool);var m=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(m=c.memoizedState.cachePool.pool),m!==d&&(c.flags|=2048)}return a!==r&&a&&(s.child.flags|=8192),Sd(s,s.updateQueue),St(s),null;case 4:return De(),r===null&&Jm(s.stateNode.containerInfo),St(s),null;case 10:return Xr(s.type),St(s),null;case 19:if(le(jt),d=s.memoizedState,d===null)return St(s),null;if(c=(s.flags&128)!==0,m=d.rendering,m===null)if(c)Ol(d,!1);else{if(Tt!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(m=gd(r),m!==null){for(s.flags|=128,Ol(d,!1),r=m.updateQueue,s.updateQueue=r,Sd(s,r),s.subtreeFlags=0,r=a,a=s.child;a!==null;)a0(a,r),a=a.sibling;return ie(jt,jt.current&1|2),s.child}r=r.sibling}d.tail!==null&&Wt()>Ed&&(s.flags|=128,c=!0,Ol(d,!1),s.lanes=4194304)}else{if(!c)if(r=gd(m),r!==null){if(s.flags|=128,c=!0,r=r.updateQueue,s.updateQueue=r,Sd(s,r),Ol(d,!0),d.tail===null&&d.tailMode==="hidden"&&!m.alternate&&!Ze)return St(s),null}else 2*Wt()-d.renderingStartTime>Ed&&a!==536870912&&(s.flags|=128,c=!0,Ol(d,!1),s.lanes=4194304);d.isBackwards?(m.sibling=s.child,s.child=m):(r=d.last,r!==null?r.sibling=m:s.child=m,d.last=m)}return d.tail!==null?(s=d.tail,d.rendering=s,d.tail=s.sibling,d.renderingStartTime=Wt(),s.sibling=null,r=jt.current,ie(jt,c?r&1|2:r&1),s):(St(s),null);case 22:case 23:return Jr(s),tm(),c=s.memoizedState!==null,r!==null?r.memoizedState!==null!==c&&(s.flags|=8192):c&&(s.flags|=8192),c?(a&536870912)!==0&&(s.flags&128)===0&&(St(s),s.subtreeFlags&6&&(s.flags|=8192)):St(s),a=s.updateQueue,a!==null&&Sd(s,a.retryQueue),a=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),c=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==a&&(s.flags|=2048),r!==null&&le(Ws),null;case 24:return a=null,r!==null&&(a=r.memoizedState.cache),s.memoizedState.cache!==a&&(s.flags|=2048),Xr(Lt),St(s),null;case 25:return null;case 30:return null}throw Error(i(156,s.tag))}function eN(r,s){switch(Bp(s),s.tag){case 1:return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return Xr(Lt),De(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 26:case 27:case 5:return vt(s),null;case 13:if(Jr(s),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(i(340));yl()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return le(jt),null;case 4:return De(),null;case 10:return Xr(s.type),null;case 22:case 23:return Jr(s),tm(),r!==null&&le(Ws),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 24:return Xr(Lt),null;case 25:return null;default:return null}}function MS(r,s){switch(Bp(s),s.tag){case 3:Xr(Lt),De();break;case 26:case 27:case 5:vt(s);break;case 4:De();break;case 13:Jr(s);break;case 19:le(jt);break;case 10:Xr(s.type);break;case 22:case 23:Jr(s),tm(),r!==null&&le(Ws);break;case 24:Xr(Lt)}}function Ml(r,s){try{var a=s.updateQueue,c=a!==null?a.lastEffect:null;if(c!==null){var d=c.next;a=d;do{if((a.tag&r)===r){c=void 0;var m=a.create,S=a.inst;c=m(),S.destroy=c}a=a.next}while(a!==d)}}catch(w){ut(s,s.return,w)}}function $i(r,s,a){try{var c=s.updateQueue,d=c!==null?c.lastEffect:null;if(d!==null){var m=d.next;c=m;do{if((c.tag&r)===r){var S=c.inst,w=S.destroy;if(w!==void 0){S.destroy=void 0,d=s;var L=a,Q=w;try{Q()}catch(re){ut(d,L,re)}}}c=c.next}while(c!==m)}}catch(re){ut(s,s.return,re)}}function LS(r){var s=r.updateQueue;if(s!==null){var a=r.stateNode;try{x0(s,a)}catch(c){ut(r,r.return,c)}}}function jS(r,s,a){a.props=Qs(r.type,r.memoizedProps),a.state=r.memoizedState;try{a.componentWillUnmount()}catch(c){ut(r,s,c)}}function Ll(r,s){try{var a=r.ref;if(a!==null){switch(r.tag){case 26:case 27:case 5:var c=r.stateNode;break;case 30:c=r.stateNode;break;default:c=r.stateNode}typeof a=="function"?r.refCleanup=a(c):a.current=c}}catch(d){ut(r,s,d)}}function Rr(r,s){var a=r.ref,c=r.refCleanup;if(a!==null)if(typeof c=="function")try{c()}catch(d){ut(r,s,d)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(d){ut(r,s,d)}else a.current=null}function PS(r){var s=r.type,a=r.memoizedProps,c=r.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":a.autoFocus&&c.focus();break e;case"img":a.src?c.src=a.src:a.srcSet&&(c.srcset=a.srcSet)}}catch(d){ut(r,r.return,d)}}function Im(r,s,a){try{var c=r.stateNode;SN(c,r.type,a,s),c[fe]=s}catch(d){ut(r,r.return,d)}}function $S(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&Gi(r.type)||r.tag===4}function Dm(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||$S(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&Gi(r.type)||r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function km(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(r,s):(s=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,s.appendChild(r),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=Od));else if(c!==4&&(c===27&&Gi(r.type)&&(a=r.stateNode,s=null),r=r.child,r!==null))for(km(r,s,a),r=r.sibling;r!==null;)km(r,s,a),r=r.sibling}function xd(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(c!==4&&(c===27&&Gi(r.type)&&(a=r.stateNode),r=r.child,r!==null))for(xd(r,s,a),r=r.sibling;r!==null;)xd(r,s,a),r=r.sibling}function US(r){var s=r.stateNode,a=r.memoizedProps;try{for(var c=r.type,d=s.attributes;d.length;)s.removeAttributeNode(d[0]);Xt(s,c,a),s[ce]=r,s[fe]=a}catch(m){ut(r,r.return,m)}}var ni=!1,Dt=!1,Nm=!1,zS=typeof WeakSet=="function"?WeakSet:Set,zt=null;function tN(r,s){if(r=r.containerInfo,ng=zd,r=Xb(r),Dp(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var S=0,w=-1,L=-1,Q=0,re=0,oe=r,Z=null;t:for(;;){for(var J;oe!==a||d!==0&&oe.nodeType!==3||(w=S+d),oe!==m||c!==0&&oe.nodeType!==3||(L=S+c),oe.nodeType===3&&(S+=oe.nodeValue.length),(J=oe.firstChild)!==null;)Z=oe,oe=J;for(;;){if(oe===r)break t;if(Z===a&&++Q===d&&(w=S),Z===m&&++re===c&&(L=S),(J=oe.nextSibling)!==null)break;oe=Z,Z=oe.parentNode}oe=J}a=w===-1||L===-1?null:{start:w,end:L}}else a=null}a=a||{start:0,end:0}}else a=null;for(rg={focusedElem:r,selectionRange:a},zd=!1,zt=s;zt!==null;)if(s=zt,r=s.child,(s.subtreeFlags&1024)!==0&&r!==null)r.return=s,zt=r;else for(;zt!==null;){switch(s=zt,m=s.alternate,r=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if((r&1024)!==0&&m!==null){r=void 0,a=s,d=m.memoizedProps,m=m.memoizedState,c=a.stateNode;try{var Oe=Qs(a.type,d,a.elementType===a.type);r=c.getSnapshotBeforeUpdate(Oe,m),c.__reactInternalSnapshotBeforeUpdate=r}catch(Re){ut(a,a.return,Re)}}break;case 3:if((r&1024)!==0){if(r=s.stateNode.containerInfo,a=r.nodeType,a===9)og(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":og(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((r&1024)!==0)throw Error(i(163))}if(r=s.sibling,r!==null){r.return=s.return,zt=r;break}zt=s.return}}function BS(r,s,a){var c=a.flags;switch(a.tag){case 0:case 11:case 15:Ui(r,a),c&4&&Ml(5,a);break;case 1:if(Ui(r,a),c&4)if(r=a.stateNode,s===null)try{r.componentDidMount()}catch(S){ut(a,a.return,S)}else{var d=Qs(a.type,s.memoizedProps);s=s.memoizedState;try{r.componentDidUpdate(d,s,r.__reactInternalSnapshotBeforeUpdate)}catch(S){ut(a,a.return,S)}}c&64&&LS(a),c&512&&Ll(a,a.return);break;case 3:if(Ui(r,a),c&64&&(r=a.updateQueue,r!==null)){if(s=null,a.child!==null)switch(a.child.tag){case 27:case 5:s=a.child.stateNode;break;case 1:s=a.child.stateNode}try{x0(r,s)}catch(S){ut(a,a.return,S)}}break;case 27:s===null&&c&4&&US(a);case 26:case 5:Ui(r,a),s===null&&c&4&&PS(a),c&512&&Ll(a,a.return);break;case 12:Ui(r,a);break;case 13:Ui(r,a),c&4&&qS(r,a),c&64&&(r=a.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(a=uN.bind(null,a),AN(r,a))));break;case 22:if(c=a.memoizedState!==null||ni,!c){s=s!==null&&s.memoizedState!==null||Dt,d=ni;var m=Dt;ni=c,(Dt=s)&&!m?zi(r,a,(a.subtreeFlags&8772)!==0):Ui(r,a),ni=d,Dt=m}break;case 30:break;default:Ui(r,a)}}function HS(r){var s=r.alternate;s!==null&&(r.alternate=null,HS(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&Se(s)),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}var yt=null,vn=!1;function ri(r,s,a){for(a=a.child;a!==null;)FS(r,s,a),a=a.sibling}function FS(r,s,a){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(pn,a)}catch{}switch(a.tag){case 26:Dt||Rr(a,s),ri(r,s,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Dt||Rr(a,s);var c=yt,d=vn;Gi(a.type)&&(yt=a.stateNode,vn=!1),ri(r,s,a),ql(a.stateNode),yt=c,vn=d;break;case 5:Dt||Rr(a,s);case 6:if(c=yt,d=vn,yt=null,ri(r,s,a),yt=c,vn=d,yt!==null)if(vn)try{(yt.nodeType===9?yt.body:yt.nodeName==="HTML"?yt.ownerDocument.body:yt).removeChild(a.stateNode)}catch(m){ut(a,s,m)}else try{yt.removeChild(a.stateNode)}catch(m){ut(a,s,m)}break;case 18:yt!==null&&(vn?(r=yt,kx(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,a.stateNode),Zl(r)):kx(yt,a.stateNode));break;case 4:c=yt,d=vn,yt=a.stateNode.containerInfo,vn=!0,ri(r,s,a),yt=c,vn=d;break;case 0:case 11:case 14:case 15:Dt||$i(2,a,s),Dt||$i(4,a,s),ri(r,s,a);break;case 1:Dt||(Rr(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"&&jS(a,s,c)),ri(r,s,a);break;case 21:ri(r,s,a);break;case 22:Dt=(c=Dt)||a.memoizedState!==null,ri(r,s,a),Dt=c;break;default:ri(r,s,a)}}function qS(r,s){if(s.memoizedState===null&&(r=s.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{Zl(r)}catch(a){ut(s,s.return,a)}}function nN(r){switch(r.tag){case 13:case 19:var s=r.stateNode;return s===null&&(s=r.stateNode=new zS),s;case 22:return r=r.stateNode,s=r._retryCache,s===null&&(s=r._retryCache=new zS),s;default:throw Error(i(435,r.tag))}}function Om(r,s){var a=nN(r);s.forEach(function(c){var d=dN.bind(null,r,c);a.has(c)||(a.add(c),c.then(d,d))})}function Tn(r,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c],m=r,S=s,w=S;e:for(;w!==null;){switch(w.tag){case 27:if(Gi(w.type)){yt=w.stateNode,vn=!1;break e}break;case 5:yt=w.stateNode,vn=!1;break e;case 3:case 4:yt=w.stateNode.containerInfo,vn=!0;break e}w=w.return}if(yt===null)throw Error(i(160));FS(m,S,d),yt=null,vn=!1,m=d.alternate,m!==null&&(m.return=null),d.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)VS(s,r),s=s.sibling}var ar=null;function VS(r,s){var a=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:Tn(s,r),Rn(r),c&4&&($i(3,r,r.return),Ml(3,r),$i(5,r,r.return));break;case 1:Tn(s,r),Rn(r),c&512&&(Dt||a===null||Rr(a,a.return)),c&64&&ni&&(r=r.updateQueue,r!==null&&(c=r.callbacks,c!==null&&(a=r.shared.hiddenCallbacks,r.shared.hiddenCallbacks=a===null?c:a.concat(c))));break;case 26:var d=ar;if(Tn(s,r),Rn(r),c&512&&(Dt||a===null||Rr(a,a.return)),c&4){var m=a!==null?a.memoizedState:null;if(c=r.memoizedState,a===null)if(c===null)if(r.stateNode===null){e:{c=r.type,a=r.memoizedProps,d=d.ownerDocument||d;t:switch(c){case"title":m=d.getElementsByTagName("title")[0],(!m||m[_e]||m[ce]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=d.createElement(c),d.head.insertBefore(m,d.querySelector("head > title"))),Xt(m,c,a),m[ce]=r,Me(m),c=m;break e;case"link":var S=Ux("link","href",d).get(c+(a.href||""));if(S){for(var w=0;w<S.length;w++)if(m=S[w],m.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&m.getAttribute("rel")===(a.rel==null?null:a.rel)&&m.getAttribute("title")===(a.title==null?null:a.title)&&m.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(w,1);break t}}m=d.createElement(c),Xt(m,c,a),d.head.appendChild(m);break;case"meta":if(S=Ux("meta","content",d).get(c+(a.content||""))){for(w=0;w<S.length;w++)if(m=S[w],m.getAttribute("content")===(a.content==null?null:""+a.content)&&m.getAttribute("name")===(a.name==null?null:a.name)&&m.getAttribute("property")===(a.property==null?null:a.property)&&m.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&m.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(w,1);break t}}m=d.createElement(c),Xt(m,c,a),d.head.appendChild(m);break;default:throw Error(i(468,c))}m[ce]=r,Me(m),c=m}r.stateNode=c}else zx(d,r.type,r.stateNode);else r.stateNode=$x(d,c,r.memoizedProps);else m!==c?(m===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):m.count--,c===null?zx(d,r.type,r.stateNode):$x(d,c,r.memoizedProps)):c===null&&r.stateNode!==null&&Im(r,r.memoizedProps,a.memoizedProps)}break;case 27:Tn(s,r),Rn(r),c&512&&(Dt||a===null||Rr(a,a.return)),a!==null&&c&4&&Im(r,r.memoizedProps,a.memoizedProps);break;case 5:if(Tn(s,r),Rn(r),c&512&&(Dt||a===null||Rr(a,a.return)),r.flags&32){d=r.stateNode;try{Lo(d,"")}catch(J){ut(r,r.return,J)}}c&4&&r.stateNode!=null&&(d=r.memoizedProps,Im(r,d,a!==null?a.memoizedProps:d)),c&1024&&(Nm=!0);break;case 6:if(Tn(s,r),Rn(r),c&4){if(r.stateNode===null)throw Error(i(162));c=r.memoizedProps,a=r.stateNode;try{a.nodeValue=c}catch(J){ut(r,r.return,J)}}break;case 3:if(Pd=null,d=ar,ar=Ld(s.containerInfo),Tn(s,r),ar=d,Rn(r),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Zl(s.containerInfo)}catch(J){ut(r,r.return,J)}Nm&&(Nm=!1,GS(r));break;case 4:c=ar,ar=Ld(r.stateNode.containerInfo),Tn(s,r),Rn(r),ar=c;break;case 12:Tn(s,r),Rn(r);break;case 13:Tn(s,r),Rn(r),r.child.flags&8192&&r.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Um=Wt()),c&4&&(c=r.updateQueue,c!==null&&(r.updateQueue=null,Om(r,c)));break;case 22:d=r.memoizedState!==null;var L=a!==null&&a.memoizedState!==null,Q=ni,re=Dt;if(ni=Q||d,Dt=re||L,Tn(s,r),Dt=re,ni=Q,Rn(r),c&8192)e:for(s=r.stateNode,s._visibility=d?s._visibility&-2:s._visibility|1,d&&(a===null||L||ni||Dt||Ks(r)),a=null,s=r;;){if(s.tag===5||s.tag===26){if(a===null){L=a=s;try{if(m=L.stateNode,d)S=m.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{w=L.stateNode;var oe=L.memoizedProps.style,Z=oe!=null&&oe.hasOwnProperty("display")?oe.display:null;w.style.display=Z==null||typeof Z=="boolean"?"":(""+Z).trim()}}catch(J){ut(L,L.return,J)}}}else if(s.tag===6){if(a===null){L=s;try{L.stateNode.nodeValue=d?"":L.memoizedProps}catch(J){ut(L,L.return,J)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===r)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break e;for(;s.sibling===null;){if(s.return===null||s.return===r)break e;a===s&&(a=null),s=s.return}a===s&&(a=null),s.sibling.return=s.return,s=s.sibling}c&4&&(c=r.updateQueue,c!==null&&(a=c.retryQueue,a!==null&&(c.retryQueue=null,Om(r,a))));break;case 19:Tn(s,r),Rn(r),c&4&&(c=r.updateQueue,c!==null&&(r.updateQueue=null,Om(r,c)));break;case 30:break;case 21:break;default:Tn(s,r),Rn(r)}}function Rn(r){var s=r.flags;if(s&2){try{for(var a,c=r.return;c!==null;){if($S(c)){a=c;break}c=c.return}if(a==null)throw Error(i(160));switch(a.tag){case 27:var d=a.stateNode,m=Dm(r);xd(r,m,d);break;case 5:var S=a.stateNode;a.flags&32&&(Lo(S,""),a.flags&=-33);var w=Dm(r);xd(r,w,S);break;case 3:case 4:var L=a.stateNode.containerInfo,Q=Dm(r);km(r,Q,L);break;default:throw Error(i(161))}}catch(re){ut(r,r.return,re)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function GS(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var s=r;GS(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),r=r.sibling}}function Ui(r,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)BS(r,s.alternate,s),s=s.sibling}function Ks(r){for(r=r.child;r!==null;){var s=r;switch(s.tag){case 0:case 11:case 14:case 15:$i(4,s,s.return),Ks(s);break;case 1:Rr(s,s.return);var a=s.stateNode;typeof a.componentWillUnmount=="function"&&jS(s,s.return,a),Ks(s);break;case 27:ql(s.stateNode);case 26:case 5:Rr(s,s.return),Ks(s);break;case 22:s.memoizedState===null&&Ks(s);break;case 30:Ks(s);break;default:Ks(s)}r=r.sibling}}function zi(r,s,a){for(a=a&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var c=s.alternate,d=r,m=s,S=m.flags;switch(m.tag){case 0:case 11:case 15:zi(d,m,a),Ml(4,m);break;case 1:if(zi(d,m,a),c=m,d=c.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(Q){ut(c,c.return,Q)}if(c=m,d=c.updateQueue,d!==null){var w=c.stateNode;try{var L=d.shared.hiddenCallbacks;if(L!==null)for(d.shared.hiddenCallbacks=null,d=0;d<L.length;d++)S0(L[d],w)}catch(Q){ut(c,c.return,Q)}}a&&S&64&&LS(m),Ll(m,m.return);break;case 27:US(m);case 26:case 5:zi(d,m,a),a&&c===null&&S&4&&PS(m),Ll(m,m.return);break;case 12:zi(d,m,a);break;case 13:zi(d,m,a),a&&S&4&&qS(d,m);break;case 22:m.memoizedState===null&&zi(d,m,a),Ll(m,m.return);break;case 30:break;default:zi(d,m,a)}s=s.sibling}}function Mm(r,s){var a=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==a&&(r!=null&&r.refCount++,a!=null&&bl(a))}function Lm(r,s){r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&bl(r))}function Ar(r,s,a,c){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)WS(r,s,a,c),s=s.sibling}function WS(r,s,a,c){var d=s.flags;switch(s.tag){case 0:case 11:case 15:Ar(r,s,a,c),d&2048&&Ml(9,s);break;case 1:Ar(r,s,a,c);break;case 3:Ar(r,s,a,c),d&2048&&(r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&bl(r)));break;case 12:if(d&2048){Ar(r,s,a,c),r=s.stateNode;try{var m=s.memoizedProps,S=m.id,w=m.onPostCommit;typeof w=="function"&&w(S,s.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(L){ut(s,s.return,L)}}else Ar(r,s,a,c);break;case 13:Ar(r,s,a,c);break;case 23:break;case 22:m=s.stateNode,S=s.alternate,s.memoizedState!==null?m._visibility&2?Ar(r,s,a,c):jl(r,s):m._visibility&2?Ar(r,s,a,c):(m._visibility|=2,ea(r,s,a,c,(s.subtreeFlags&10256)!==0)),d&2048&&Mm(S,s);break;case 24:Ar(r,s,a,c),d&2048&&Lm(s.alternate,s);break;default:Ar(r,s,a,c)}}function ea(r,s,a,c,d){for(d=d&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var m=r,S=s,w=a,L=c,Q=S.flags;switch(S.tag){case 0:case 11:case 15:ea(m,S,w,L,d),Ml(8,S);break;case 23:break;case 22:var re=S.stateNode;S.memoizedState!==null?re._visibility&2?ea(m,S,w,L,d):jl(m,S):(re._visibility|=2,ea(m,S,w,L,d)),d&&Q&2048&&Mm(S.alternate,S);break;case 24:ea(m,S,w,L,d),d&&Q&2048&&Lm(S.alternate,S);break;default:ea(m,S,w,L,d)}s=s.sibling}}function jl(r,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var a=r,c=s,d=c.flags;switch(c.tag){case 22:jl(a,c),d&2048&&Mm(c.alternate,c);break;case 24:jl(a,c),d&2048&&Lm(c.alternate,c);break;default:jl(a,c)}s=s.sibling}}var Pl=8192;function ta(r){if(r.subtreeFlags&Pl)for(r=r.child;r!==null;)YS(r),r=r.sibling}function YS(r){switch(r.tag){case 26:ta(r),r.flags&Pl&&r.memoizedState!==null&&BN(ar,r.memoizedState,r.memoizedProps);break;case 5:ta(r);break;case 3:case 4:var s=ar;ar=Ld(r.stateNode.containerInfo),ta(r),ar=s;break;case 22:r.memoizedState===null&&(s=r.alternate,s!==null&&s.memoizedState!==null?(s=Pl,Pl=16777216,ta(r),Pl=s):ta(r));break;default:ta(r)}}function QS(r){var s=r.alternate;if(s!==null&&(r=s.child,r!==null)){s.child=null;do s=r.sibling,r.sibling=null,r=s;while(r!==null)}}function $l(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var a=0;a<s.length;a++){var c=s[a];zt=c,XS(c,r)}QS(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)KS(r),r=r.sibling}function KS(r){switch(r.tag){case 0:case 11:case 15:$l(r),r.flags&2048&&$i(9,r,r.return);break;case 3:$l(r);break;case 12:$l(r);break;case 22:var s=r.stateNode;r.memoizedState!==null&&s._visibility&2&&(r.return===null||r.return.tag!==13)?(s._visibility&=-3,wd(r)):$l(r);break;default:$l(r)}}function wd(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var a=0;a<s.length;a++){var c=s[a];zt=c,XS(c,r)}QS(r)}for(r=r.child;r!==null;){switch(s=r,s.tag){case 0:case 11:case 15:$i(8,s,s.return),wd(s);break;case 22:a=s.stateNode,a._visibility&2&&(a._visibility&=-3,wd(s));break;default:wd(s)}r=r.sibling}}function XS(r,s){for(;zt!==null;){var a=zt;switch(a.tag){case 0:case 11:case 15:$i(8,a,s);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var c=a.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:bl(a.memoizedState.cache)}if(c=a.child,c!==null)c.return=a,zt=c;else e:for(a=r;zt!==null;){c=zt;var d=c.sibling,m=c.return;if(HS(c),c===a){zt=null;break e}if(d!==null){d.return=m,zt=d;break e}zt=m}}}var rN={getCacheForType:function(r){var s=rn(Lt),a=s.data.get(r);return a===void 0&&(a=r(),s.data.set(r,a)),a}},iN=typeof WeakMap=="function"?WeakMap:Map,nt=0,dt=null,Ve=null,Ye=0,rt=0,An=null,Bi=!1,na=!1,jm=!1,ii=0,Tt=0,Hi=0,Xs=0,Pm=0,Vn=0,ra=0,Ul=null,_n=null,$m=!1,Um=0,Ed=1/0,Cd=null,Fi=null,Kt=0,qi=null,ia=null,sa=0,zm=0,Bm=null,ZS=null,zl=0,Hm=null;function In(){if((nt&2)!==0&&Ye!==0)return Ye&-Ye;if(P.T!==null){var r=Go;return r!==0?r:Qm()}return $()}function JS(){Vn===0&&(Vn=(Ye&536870912)===0||Ze?ko():536870912);var r=qn.current;return r!==null&&(r.flags|=32),Vn}function Dn(r,s,a){(r===dt&&(rt===2||rt===9)||r.cancelPendingCommit!==null)&&(oa(r,0),Vi(r,Ye,Vn,!1)),Ms(r,a),((nt&2)===0||r!==dt)&&(r===dt&&((nt&2)===0&&(Xs|=a),Tt===4&&Vi(r,Ye,Vn,!1)),Ir(r))}function ex(r,s,a){if((nt&6)!==0)throw Error(i(327));var c=!a&&(s&124)===0&&(s&r.expiredLanes)===0||wr(r,s),d=c?aN(r,s):Vm(r,s,!0),m=c;do{if(d===0){na&&!c&&Vi(r,s,0,!1);break}else{if(a=r.current.alternate,m&&!sN(a)){d=Vm(r,s,!1),m=!1;continue}if(d===2){if(m=s,r.errorRecoveryDisabledLanes&m)var S=0;else S=r.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){s=S;e:{var w=r;d=Ul;var L=w.current.memoizedState.isDehydrated;if(L&&(oa(w,S).flags|=256),S=Vm(w,S,!1),S!==2){if(jm&&!L){w.errorRecoveryDisabledLanes|=m,Xs|=m,d=4;break e}m=_n,_n=d,m!==null&&(_n===null?_n=m:_n.push.apply(_n,m))}d=S}if(m=!1,d!==2)continue}}if(d===1){oa(r,0),Vi(r,s,0,!0);break}e:{switch(c=r,m=d,m){case 0:case 1:throw Error(i(345));case 4:if((s&4194048)!==s)break;case 6:Vi(c,s,Vn,!Bi);break e;case 2:_n=null;break;case 3:case 5:break;default:throw Error(i(329))}if((s&62914560)===s&&(d=Um+300-Wt(),10<d)){if(Vi(c,s,Vn,!Bi),Os(c,0,!0)!==0)break e;c.timeoutHandle=Ix(tx.bind(null,c,a,_n,Cd,$m,s,Vn,Xs,ra,Bi,m,2,-0,0),d);break e}tx(c,a,_n,Cd,$m,s,Vn,Xs,ra,Bi,m,0,-0,0)}}break}while(!0);Ir(r)}function tx(r,s,a,c,d,m,S,w,L,Q,re,oe,Z,J){if(r.timeoutHandle=-1,oe=s.subtreeFlags,(oe&8192||(oe&16785408)===16785408)&&(Wl={stylesheets:null,count:0,unsuspend:zN},YS(s),oe=HN(),oe!==null)){r.cancelPendingCommit=oe(lx.bind(null,r,s,m,a,c,d,S,w,L,re,1,Z,J)),Vi(r,m,S,!Q);return}lx(r,s,m,a,c,d,S,w,L)}function sN(r){for(var s=r;;){var a=s.tag;if((a===0||a===11||a===15)&&s.flags&16384&&(a=s.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!En(m(),d))return!1}catch{return!1}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Vi(r,s,a,c){s&=~Pm,s&=~Xs,r.suspendedLanes|=s,r.pingedLanes&=~s,c&&(r.warmLanes|=s),c=r.expirationTimes;for(var d=s;0<d;){var m=31-Yt(d),S=1<<m;c[m]=-1,d&=~S}a!==0&&Ls(r,a,s)}function Td(){return(nt&6)===0?(Bl(0),!1):!0}function Fm(){if(Ve!==null){if(rt===0)var r=Ve.return;else r=Ve,Kr=Vs=null,om(r),Zo=null,kl=0,r=Ve;for(;r!==null;)MS(r.alternate,r),r=r.return;Ve=null}}function oa(r,s){var a=r.timeoutHandle;a!==-1&&(r.timeoutHandle=-1,wN(a)),a=r.cancelPendingCommit,a!==null&&(r.cancelPendingCommit=null,a()),Fm(),dt=r,Ve=a=Wr(r.current,null),Ye=s,rt=0,An=null,Bi=!1,na=wr(r,s),jm=!1,ra=Vn=Pm=Xs=Hi=Tt=0,_n=Ul=null,$m=!1,(s&8)!==0&&(s|=s&32);var c=r.entangledLanes;if(c!==0)for(r=r.entanglements,c&=s;0<c;){var d=31-Yt(c),m=1<<d;s|=r[d],c&=~m}return ii=s,Yu(),a}function nx(r,s){Be=null,P.H=hd,s===xl||s===rd?(s=_0(),rt=3):s===g0?(s=_0(),rt=4):rt=s===bS?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,An=s,Ve===null&&(Tt=1,vd(r,zn(s,r.current)))}function rx(){var r=P.H;return P.H=hd,r===null?hd:r}function ix(){var r=P.A;return P.A=rN,r}function qm(){Tt=4,Bi||(Ye&4194048)!==Ye&&qn.current!==null||(na=!0),(Hi&134217727)===0&&(Xs&134217727)===0||dt===null||Vi(dt,Ye,Vn,!1)}function Vm(r,s,a){var c=nt;nt|=2;var d=rx(),m=ix();(dt!==r||Ye!==s)&&(Cd=null,oa(r,s)),s=!1;var S=Tt;e:do try{if(rt!==0&&Ve!==null){var w=Ve,L=An;switch(rt){case 8:Fm(),S=6;break e;case 3:case 2:case 9:case 6:qn.current===null&&(s=!0);var Q=rt;if(rt=0,An=null,aa(r,w,L,Q),a&&na){S=0;break e}break;default:Q=rt,rt=0,An=null,aa(r,w,L,Q)}}oN(),S=Tt;break}catch(re){nx(r,re)}while(!0);return s&&r.shellSuspendCounter++,Kr=Vs=null,nt=c,P.H=d,P.A=m,Ve===null&&(dt=null,Ye=0,Yu()),S}function oN(){for(;Ve!==null;)sx(Ve)}function aN(r,s){var a=nt;nt|=2;var c=rx(),d=ix();dt!==r||Ye!==s?(Cd=null,Ed=Wt()+500,oa(r,s)):na=wr(r,s);e:do try{if(rt!==0&&Ve!==null){s=Ve;var m=An;t:switch(rt){case 1:rt=0,An=null,aa(r,s,m,1);break;case 2:case 9:if(y0(m)){rt=0,An=null,ox(s);break}s=function(){rt!==2&&rt!==9||dt!==r||(rt=7),Ir(r)},m.then(s,s);break e;case 3:rt=7;break e;case 4:rt=5;break e;case 7:y0(m)?(rt=0,An=null,ox(s)):(rt=0,An=null,aa(r,s,m,7));break;case 5:var S=null;switch(Ve.tag){case 26:S=Ve.memoizedState;case 5:case 27:var w=Ve;if(!S||Bx(S)){rt=0,An=null;var L=w.sibling;if(L!==null)Ve=L;else{var Q=w.return;Q!==null?(Ve=Q,Rd(Q)):Ve=null}break t}}rt=0,An=null,aa(r,s,m,5);break;case 6:rt=0,An=null,aa(r,s,m,6);break;case 8:Fm(),Tt=6;break e;default:throw Error(i(462))}}lN();break}catch(re){nx(r,re)}while(!0);return Kr=Vs=null,P.H=c,P.A=d,nt=a,Ve!==null?0:(dt=null,Ye=0,Yu(),Tt)}function lN(){for(;Ve!==null&&!jn();)sx(Ve)}function sx(r){var s=NS(r.alternate,r,ii);r.memoizedProps=r.pendingProps,s===null?Rd(r):Ve=s}function ox(r){var s=r,a=s.alternate;switch(s.tag){case 15:case 0:s=TS(a,s,s.pendingProps,s.type,void 0,Ye);break;case 11:s=TS(a,s,s.pendingProps,s.type.render,s.ref,Ye);break;case 5:om(s);default:MS(a,s),s=Ve=a0(s,ii),s=NS(a,s,ii)}r.memoizedProps=r.pendingProps,s===null?Rd(r):Ve=s}function aa(r,s,a,c){Kr=Vs=null,om(s),Zo=null,kl=0;var d=s.return;try{if(Xk(r,d,s,a,Ye)){Tt=1,vd(r,zn(a,r.current)),Ve=null;return}}catch(m){if(d!==null)throw Ve=d,m;Tt=1,vd(r,zn(a,r.current)),Ve=null;return}s.flags&32768?(Ze||c===1?r=!0:na||(Ye&536870912)!==0?r=!1:(Bi=r=!0,(c===2||c===9||c===3||c===6)&&(c=qn.current,c!==null&&c.tag===13&&(c.flags|=16384))),ax(s,r)):Rd(s)}function Rd(r){var s=r;do{if((s.flags&32768)!==0){ax(s,Bi);return}r=s.return;var a=Jk(s.alternate,s,ii);if(a!==null){Ve=a;return}if(s=s.sibling,s!==null){Ve=s;return}Ve=s=r}while(s!==null);Tt===0&&(Tt=5)}function ax(r,s){do{var a=eN(r.alternate,r);if(a!==null){a.flags&=32767,Ve=a;return}if(a=r.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!s&&(r=r.sibling,r!==null)){Ve=r;return}Ve=r=a}while(r!==null);Tt=6,Ve=null}function lx(r,s,a,c,d,m,S,w,L){r.cancelPendingCommit=null;do Ad();while(Kt!==0);if((nt&6)!==0)throw Error(i(327));if(s!==null){if(s===r.current)throw Error(i(177));if(m=s.lanes|s.childLanes,m|=Lp,ju(r,a,m,S,w,L),r===dt&&(Ve=dt=null,Ye=0),ia=s,qi=r,sa=a,zm=m,Bm=d,ZS=c,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,fN(Do,function(){return hx(),null})):(r.callbackNode=null,r.callbackPriority=0),c=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||c){c=P.T,P.T=null,d=X.p,X.p=2,S=nt,nt|=4;try{tN(r,s,a)}finally{nt=S,X.p=d,P.T=c}}Kt=1,cx(),ux(),dx()}}function cx(){if(Kt===1){Kt=0;var r=qi,s=ia,a=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var c=X.p;X.p=2;var d=nt;nt|=4;try{VS(s,r);var m=rg,S=Xb(r.containerInfo),w=m.focusedElem,L=m.selectionRange;if(S!==w&&w&&w.ownerDocument&&Kb(w.ownerDocument.documentElement,w)){if(L!==null&&Dp(w)){var Q=L.start,re=L.end;if(re===void 0&&(re=Q),"selectionStart"in w)w.selectionStart=Q,w.selectionEnd=Math.min(re,w.value.length);else{var oe=w.ownerDocument||document,Z=oe&&oe.defaultView||window;if(Z.getSelection){var J=Z.getSelection(),Oe=w.textContent.length,Re=Math.min(L.start,Oe),at=L.end===void 0?Re:Math.min(L.end,Oe);!J.extend&&Re>at&&(S=at,at=Re,Re=S);var q=Qb(w,Re),B=Qb(w,at);if(q&&B&&(J.rangeCount!==1||J.anchorNode!==q.node||J.anchorOffset!==q.offset||J.focusNode!==B.node||J.focusOffset!==B.offset)){var Y=oe.createRange();Y.setStart(q.node,q.offset),J.removeAllRanges(),Re>at?(J.addRange(Y),J.extend(B.node,B.offset)):(Y.setEnd(B.node,B.offset),J.addRange(Y))}}}}for(oe=[],J=w;J=J.parentNode;)J.nodeType===1&&oe.push({element:J,left:J.scrollLeft,top:J.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<oe.length;w++){var se=oe[w];se.element.scrollLeft=se.left,se.element.scrollTop=se.top}}zd=!!ng,rg=ng=null}finally{nt=d,X.p=c,P.T=a}}r.current=s,Kt=2}}function ux(){if(Kt===2){Kt=0;var r=qi,s=ia,a=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var c=X.p;X.p=2;var d=nt;nt|=4;try{BS(r,s.alternate,s)}finally{nt=d,X.p=c,P.T=a}}Kt=3}}function dx(){if(Kt===4||Kt===3){Kt=0,Ur();var r=qi,s=ia,a=sa,c=ZS;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?Kt=5:(Kt=0,ia=qi=null,fx(r,r.pendingLanes));var d=r.pendingLanes;if(d===0&&(Fi=null),ol(a),s=s.stateNode,_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(pn,s,void 0,(s.current.flags&128)===128)}catch{}if(c!==null){s=P.T,d=X.p,X.p=2,P.T=null;try{for(var m=r.onRecoverableError,S=0;S<c.length;S++){var w=c[S];m(w.value,{componentStack:w.stack})}}finally{P.T=s,X.p=d}}(sa&3)!==0&&Ad(),Ir(r),d=r.pendingLanes,(a&4194090)!==0&&(d&42)!==0?r===Hm?zl++:(zl=0,Hm=r):zl=0,Bl(0)}}function fx(r,s){(r.pooledCacheLanes&=s)===0&&(s=r.pooledCache,s!=null&&(r.pooledCache=null,bl(s)))}function Ad(r){return cx(),ux(),dx(),hx()}function hx(){if(Kt!==5)return!1;var r=qi,s=zm;zm=0;var a=ol(sa),c=P.T,d=X.p;try{X.p=32>a?32:a,P.T=null,a=Bm,Bm=null;var m=qi,S=sa;if(Kt=0,ia=qi=null,sa=0,(nt&6)!==0)throw Error(i(331));var w=nt;if(nt|=4,KS(m.current),WS(m,m.current,S,a),nt=w,Bl(0,!1),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(pn,m)}catch{}return!0}finally{X.p=d,P.T=c,fx(r,s)}}function px(r,s,a){s=zn(a,s),s=bm(r.stateNode,s,2),r=Mi(r,s,2),r!==null&&(Ms(r,2),Ir(r))}function ut(r,s,a){if(r.tag===3)px(r,r,a);else for(;s!==null;){if(s.tag===3){px(s,r,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Fi===null||!Fi.has(c))){r=zn(a,r),a=vS(2),c=Mi(s,a,2),c!==null&&(_S(a,c,s,r),Ms(c,2),Ir(c));break}}s=s.return}}function Gm(r,s,a){var c=r.pingCache;if(c===null){c=r.pingCache=new iN;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(a)||(jm=!0,d.add(a),r=cN.bind(null,r,s,a),s.then(r,r))}function cN(r,s,a){var c=r.pingCache;c!==null&&c.delete(s),r.pingedLanes|=r.suspendedLanes&a,r.warmLanes&=~a,dt===r&&(Ye&a)===a&&(Tt===4||Tt===3&&(Ye&62914560)===Ye&&300>Wt()-Um?(nt&2)===0&&oa(r,0):Pm|=a,ra===Ye&&(ra=0)),Ir(r)}function mx(r,s){s===0&&(s=Lu()),r=Ho(r,s),r!==null&&(Ms(r,s),Ir(r))}function uN(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),mx(r,a)}function dN(r,s){var a=0;switch(r.tag){case 13:var c=r.stateNode,d=r.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=r.stateNode;break;case 22:c=r.stateNode._retryCache;break;default:throw Error(i(314))}c!==null&&c.delete(s),mx(r,a)}function fN(r,s){return Ln(r,s)}var Id=null,la=null,Wm=!1,Dd=!1,Ym=!1,Zs=0;function Ir(r){r!==la&&r.next===null&&(la===null?Id=la=r:la=la.next=r),Dd=!0,Wm||(Wm=!0,pN())}function Bl(r,s){if(!Ym&&Dd){Ym=!0;do for(var a=!1,c=Id;c!==null;){if(r!==0){var d=c.pendingLanes;if(d===0)var m=0;else{var S=c.suspendedLanes,w=c.pingedLanes;m=(1<<31-Yt(42|r)+1)-1,m&=d&~(S&~w),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(a=!0,_x(c,m))}else m=Ye,m=Os(c,c===dt?m:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(m&3)===0||wr(c,m)||(a=!0,_x(c,m));c=c.next}while(a);Ym=!1}}function hN(){gx()}function gx(){Dd=Wm=!1;var r=0;Zs!==0&&(xN()&&(r=Zs),Zs=0);for(var s=Wt(),a=null,c=Id;c!==null;){var d=c.next,m=yx(c,s);m===0?(c.next=null,a===null?Id=d:a.next=d,d===null&&(la=a)):(a=c,(r!==0||(m&3)!==0)&&(Dd=!0)),c=d}Bl(r)}function yx(r,s){for(var a=r.suspendedLanes,c=r.pingedLanes,d=r.expirationTimes,m=r.pendingLanes&-62914561;0<m;){var S=31-Yt(m),w=1<<S,L=d[S];L===-1?((w&a)===0||(w&c)!==0)&&(d[S]=Mu(w,s)):L<=s&&(r.expiredLanes|=w),m&=~w}if(s=dt,a=Ye,a=Os(r,r===s?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),c=r.callbackNode,a===0||r===s&&(rt===2||rt===9)||r.cancelPendingCommit!==null)return c!==null&&c!==null&&wt(c),r.callbackNode=null,r.callbackPriority=0;if((a&3)===0||wr(r,a)){if(s=a&-a,s===r.callbackPriority)return s;switch(c!==null&&wt(c),ol(a)){case 2:case 8:a=Io;break;case 32:a=Do;break;case 268435456:a=Ri;break;default:a=Do}return c=vx.bind(null,r),a=Ln(a,c),r.callbackPriority=s,r.callbackNode=a,s}return c!==null&&c!==null&&wt(c),r.callbackPriority=2,r.callbackNode=null,2}function vx(r,s){if(Kt!==0&&Kt!==5)return r.callbackNode=null,r.callbackPriority=0,null;var a=r.callbackNode;if(Ad()&&r.callbackNode!==a)return null;var c=Ye;return c=Os(r,r===dt?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),c===0?null:(ex(r,c,s),yx(r,Wt()),r.callbackNode!=null&&r.callbackNode===a?vx.bind(null,r):null)}function _x(r,s){if(Ad())return null;ex(r,s,!0)}function pN(){EN(function(){(nt&6)!==0?Ln(Ds,hN):gx()})}function Qm(){return Zs===0&&(Zs=ko()),Zs}function bx(r){return r==null||typeof r=="symbol"||typeof r=="boolean"?null:typeof r=="function"?r:Bu(""+r)}function Sx(r,s){var a=s.ownerDocument.createElement("input");return a.name=s.name,a.value=s.value,r.id&&a.setAttribute("form",r.id),s.parentNode.insertBefore(a,s),r=new FormData(r),a.parentNode.removeChild(a),r}function mN(r,s,a,c,d){if(s==="submit"&&a&&a.stateNode===d){var m=bx((d[fe]||null).action),S=c.submitter;S&&(s=(s=S[fe]||null)?bx(s.formAction):S.getAttribute("formAction"),s!==null&&(m=s,S=null));var w=new Vu("action","action",null,c,d);r.push({event:w,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(Zs!==0){var L=S?Sx(d,S):new FormData(d);mm(a,{pending:!0,data:L,method:d.method,action:m},null,L)}}else typeof m=="function"&&(w.preventDefault(),L=S?Sx(d,S):new FormData(d),mm(a,{pending:!0,data:L,method:d.method,action:m},m,L))},currentTarget:d}]})}}for(var Km=0;Km<Mp.length;Km++){var Xm=Mp[Km],gN=Xm.toLowerCase(),yN=Xm[0].toUpperCase()+Xm.slice(1);or(gN,"on"+yN)}or(e0,"onAnimationEnd"),or(t0,"onAnimationIteration"),or(n0,"onAnimationStart"),or("dblclick","onDoubleClick"),or("focusin","onFocus"),or("focusout","onBlur"),or(Mk,"onTransitionRun"),or(Lk,"onTransitionStart"),or(jk,"onTransitionCancel"),or(r0,"onTransitionEnd"),ln("onMouseEnter",["mouseout","mouseover"]),ln("onMouseLeave",["mouseout","mouseover"]),ln("onPointerEnter",["pointerout","pointerover"]),ln("onPointerLeave",["pointerout","pointerover"]),wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),wn("onBeforeInput",["compositionend","keypress","textInput","paste"]),wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vN=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Hl));function xx(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var c=r[a],d=c.event;c=c.listeners;e:{var m=void 0;if(s)for(var S=c.length-1;0<=S;S--){var w=c[S],L=w.instance,Q=w.currentTarget;if(w=w.listener,L!==m&&d.isPropagationStopped())break e;m=w,d.currentTarget=Q;try{m(d)}catch(re){yd(re)}d.currentTarget=null,m=L}else for(S=0;S<c.length;S++){if(w=c[S],L=w.instance,Q=w.currentTarget,w=w.listener,L!==m&&d.isPropagationStopped())break e;m=w,d.currentTarget=Q;try{m(d)}catch(re){yd(re)}d.currentTarget=null,m=L}}}}function Ge(r,s){var a=s[xe];a===void 0&&(a=s[xe]=new Set);var c=r+"__bubble";a.has(c)||(wx(s,r,2,!1),a.add(c))}function Zm(r,s,a){var c=0;s&&(c|=4),wx(a,r,c,s)}var kd="_reactListening"+Math.random().toString(36).slice(2);function Jm(r){if(!r[kd]){r[kd]=!0,it.forEach(function(a){a!=="selectionchange"&&(vN.has(a)||Zm(a,!1,r),Zm(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[kd]||(s[kd]=!0,Zm("selectionchange",!1,s))}}function wx(r,s,a,c){switch(Wx(s)){case 2:var d=VN;break;case 8:d=GN;break;default:d=hg}a=d.bind(null,s,a,r),d=void 0,!Sp||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?r.addEventListener(s,a,{capture:!0,passive:d}):r.addEventListener(s,a,!0):d!==void 0?r.addEventListener(s,a,{passive:d}):r.addEventListener(s,a,!1)}function eg(r,s,a,c,d){var m=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var S=c.tag;if(S===3||S===4){var w=c.stateNode.containerInfo;if(w===d)break;if(S===4)for(S=c.return;S!==null;){var L=S.tag;if((L===3||L===4)&&S.stateNode.containerInfo===d)return;S=S.return}for(;w!==null;){if(S=Ue(w),S===null)return;if(L=S.tag,L===5||L===6||L===26||L===27){c=m=S;continue e}w=w.parentNode}}c=c.return}Db(function(){var Q=m,re=_p(a),oe=[];e:{var Z=i0.get(r);if(Z!==void 0){var J=Vu,Oe=r;switch(r){case"keypress":if(Fu(a)===0)break e;case"keydown":case"keyup":J=fk;break;case"focusin":Oe="focus",J=Cp;break;case"focusout":Oe="blur",J=Cp;break;case"beforeblur":case"afterblur":J=Cp;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":J=Ob;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":J=ek;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":J=mk;break;case e0:case t0:case n0:J=rk;break;case r0:J=yk;break;case"scroll":case"scrollend":J=ZD;break;case"wheel":J=_k;break;case"copy":case"cut":case"paste":J=sk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":J=Lb;break;case"toggle":case"beforetoggle":J=Sk}var Re=(s&4)!==0,at=!Re&&(r==="scroll"||r==="scrollend"),q=Re?Z!==null?Z+"Capture":null:Z;Re=[];for(var B=Q,Y;B!==null;){var se=B;if(Y=se.stateNode,se=se.tag,se!==5&&se!==26&&se!==27||Y===null||q===null||(se=al(B,q),se!=null&&Re.push(Fl(B,se,Y))),at)break;B=B.return}0<Re.length&&(Z=new J(Z,Oe,null,a,re),oe.push({event:Z,listeners:Re}))}}if((s&7)===0){e:{if(Z=r==="mouseover"||r==="pointerover",J=r==="mouseout"||r==="pointerout",Z&&a!==vp&&(Oe=a.relatedTarget||a.fromElement)&&(Ue(Oe)||Oe[ye]))break e;if((J||Z)&&(Z=re.window===re?re:(Z=re.ownerDocument)?Z.defaultView||Z.parentWindow:window,J?(Oe=a.relatedTarget||a.toElement,J=Q,Oe=Oe?Ue(Oe):null,Oe!==null&&(at=l(Oe),Re=Oe.tag,Oe!==at||Re!==5&&Re!==27&&Re!==6)&&(Oe=null)):(J=null,Oe=Q),J!==Oe)){if(Re=Ob,se="onMouseLeave",q="onMouseEnter",B="mouse",(r==="pointerout"||r==="pointerover")&&(Re=Lb,se="onPointerLeave",q="onPointerEnter",B="pointer"),at=J==null?Z:gt(J),Y=Oe==null?Z:gt(Oe),Z=new Re(se,B+"leave",J,a,re),Z.target=at,Z.relatedTarget=Y,se=null,Ue(re)===Q&&(Re=new Re(q,B+"enter",Oe,a,re),Re.target=Y,Re.relatedTarget=at,se=Re),at=se,J&&Oe)t:{for(Re=J,q=Oe,B=0,Y=Re;Y;Y=ca(Y))B++;for(Y=0,se=q;se;se=ca(se))Y++;for(;0<B-Y;)Re=ca(Re),B--;for(;0<Y-B;)q=ca(q),Y--;for(;B--;){if(Re===q||q!==null&&Re===q.alternate)break t;Re=ca(Re),q=ca(q)}Re=null}else Re=null;J!==null&&Ex(oe,Z,J,Re,!1),Oe!==null&&at!==null&&Ex(oe,at,Oe,Re,!0)}}e:{if(Z=Q?gt(Q):window,J=Z.nodeName&&Z.nodeName.toLowerCase(),J==="select"||J==="input"&&Z.type==="file")var ge=Fb;else if(Bb(Z))if(qb)ge=kk;else{ge=Ik;var He=Ak}else J=Z.nodeName,!J||J.toLowerCase()!=="input"||Z.type!=="checkbox"&&Z.type!=="radio"?Q&&yp(Q.elementType)&&(ge=Fb):ge=Dk;if(ge&&(ge=ge(r,Q))){Hb(oe,ge,a,re);break e}He&&He(r,Z,Q),r==="focusout"&&Q&&Z.type==="number"&&Q.memoizedProps.value!=null&&gp(Z,"number",Z.value)}switch(He=Q?gt(Q):window,r){case"focusin":(Bb(He)||He.contentEditable==="true")&&(Uo=He,kp=Q,ml=null);break;case"focusout":ml=kp=Uo=null;break;case"mousedown":Np=!0;break;case"contextmenu":case"mouseup":case"dragend":Np=!1,Zb(oe,a,re);break;case"selectionchange":if(Ok)break;case"keydown":case"keyup":Zb(oe,a,re)}var we;if(Rp)e:{switch(r){case"compositionstart":var Ie="onCompositionStart";break e;case"compositionend":Ie="onCompositionEnd";break e;case"compositionupdate":Ie="onCompositionUpdate";break e}Ie=void 0}else $o?Ub(r,a)&&(Ie="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(Ie="onCompositionStart");Ie&&(jb&&a.locale!=="ko"&&($o||Ie!=="onCompositionStart"?Ie==="onCompositionEnd"&&$o&&(we=kb()):(Di=re,xp="value"in Di?Di.value:Di.textContent,$o=!0)),He=Nd(Q,Ie),0<He.length&&(Ie=new Mb(Ie,r,null,a,re),oe.push({event:Ie,listeners:He}),we?Ie.data=we:(we=zb(a),we!==null&&(Ie.data=we)))),(we=wk?Ek(r,a):Ck(r,a))&&(Ie=Nd(Q,"onBeforeInput"),0<Ie.length&&(He=new Mb("onBeforeInput","beforeinput",null,a,re),oe.push({event:He,listeners:Ie}),He.data=we)),mN(oe,r,Q,a,re)}xx(oe,s)})}function Fl(r,s,a){return{instance:r,listener:s,currentTarget:a}}function Nd(r,s){for(var a=s+"Capture",c=[];r!==null;){var d=r,m=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||m===null||(d=al(r,a),d!=null&&c.unshift(Fl(r,d,m)),d=al(r,s),d!=null&&c.push(Fl(r,d,m))),r.tag===3)return c;r=r.return}return[]}function ca(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r||null}function Ex(r,s,a,c,d){for(var m=s._reactName,S=[];a!==null&&a!==c;){var w=a,L=w.alternate,Q=w.stateNode;if(w=w.tag,L!==null&&L===c)break;w!==5&&w!==26&&w!==27||Q===null||(L=Q,d?(Q=al(a,m),Q!=null&&S.unshift(Fl(a,Q,L))):d||(Q=al(a,m),Q!=null&&S.push(Fl(a,Q,L)))),a=a.return}S.length!==0&&r.push({event:s,listeners:S})}var _N=/\r\n?/g,bN=/\u0000|\uFFFD/g;function Cx(r){return(typeof r=="string"?r:""+r).replace(_N,`
`).replace(bN,"")}function Tx(r,s){return s=Cx(s),Cx(r)===s}function Od(){}function ot(r,s,a,c,d,m){switch(a){case"children":typeof c=="string"?s==="body"||s==="textarea"&&c===""||Lo(r,c):(typeof c=="number"||typeof c=="bigint")&&s!=="body"&&Lo(r,""+c);break;case"className":qr(r,"class",c);break;case"tabIndex":qr(r,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":qr(r,a,c);break;case"style":Ab(r,c,m);break;case"data":if(s!=="object"){qr(r,"data",c);break}case"src":case"href":if(c===""&&(s!=="a"||a!=="href")){r.removeAttribute(a);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){r.removeAttribute(a);break}c=Bu(""+c),r.setAttribute(a,c);break;case"action":case"formAction":if(typeof c=="function"){r.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(a==="formAction"?(s!=="input"&&ot(r,s,"name",d.name,d,null),ot(r,s,"formEncType",d.formEncType,d,null),ot(r,s,"formMethod",d.formMethod,d,null),ot(r,s,"formTarget",d.formTarget,d,null)):(ot(r,s,"encType",d.encType,d,null),ot(r,s,"method",d.method,d,null),ot(r,s,"target",d.target,d,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){r.removeAttribute(a);break}c=Bu(""+c),r.setAttribute(a,c);break;case"onClick":c!=null&&(r.onclick=Od);break;case"onScroll":c!=null&&Ge("scroll",r);break;case"onScrollEnd":c!=null&&Ge("scrollend",r);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(a=c.__html,a!=null){if(d.children!=null)throw Error(i(60));r.innerHTML=a}}break;case"multiple":r.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":r.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){r.removeAttribute("xlink:href");break}a=Bu(""+c),r.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(a,""+c):r.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(a,""):r.removeAttribute(a);break;case"capture":case"download":c===!0?r.setAttribute(a,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(a,c):r.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?r.setAttribute(a,c):r.removeAttribute(a);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?r.removeAttribute(a):r.setAttribute(a,c);break;case"popover":Ge("beforetoggle",r),Ge("toggle",r),Fr(r,"popover",c);break;case"xlinkActuate":Le(r,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":Le(r,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":Le(r,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":Le(r,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":Le(r,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":Le(r,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":Le(r,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":Le(r,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":Le(r,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":Fr(r,"is",c);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=KD.get(a)||a,Fr(r,a,c))}}function tg(r,s,a,c,d,m){switch(a){case"style":Ab(r,c,m);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(a=c.__html,a!=null){if(d.children!=null)throw Error(i(60));r.innerHTML=a}}break;case"children":typeof c=="string"?Lo(r,c):(typeof c=="number"||typeof c=="bigint")&&Lo(r,""+c);break;case"onScroll":c!=null&&Ge("scroll",r);break;case"onScrollEnd":c!=null&&Ge("scrollend",r);break;case"onClick":c!=null&&(r.onclick=Od);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Er.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(d=a.endsWith("Capture"),s=a.slice(2,d?a.length-7:void 0),m=r[fe]||null,m=m!=null?m[a]:null,typeof m=="function"&&r.removeEventListener(s,m,d),typeof c=="function")){typeof m!="function"&&m!==null&&(a in r?r[a]=null:r.hasAttribute(a)&&r.removeAttribute(a)),r.addEventListener(s,c,d);break e}a in r?r[a]=c:c===!0?r.setAttribute(a,""):Fr(r,a,c)}}}function Xt(r,s,a){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ge("error",r),Ge("load",r);var c=!1,d=!1,m;for(m in a)if(a.hasOwnProperty(m)){var S=a[m];if(S!=null)switch(m){case"src":c=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:ot(r,s,m,S,a,null)}}d&&ot(r,s,"srcSet",a.srcSet,a,null),c&&ot(r,s,"src",a.src,a,null);return;case"input":Ge("invalid",r);var w=m=S=d=null,L=null,Q=null;for(c in a)if(a.hasOwnProperty(c)){var re=a[c];if(re!=null)switch(c){case"name":d=re;break;case"type":S=re;break;case"checked":L=re;break;case"defaultChecked":Q=re;break;case"value":m=re;break;case"defaultValue":w=re;break;case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(i(137,s));break;default:ot(r,s,c,re,a,null)}}Eb(r,m,w,L,Q,S,d,!1),Uu(r);return;case"select":Ge("invalid",r),c=S=m=null;for(d in a)if(a.hasOwnProperty(d)&&(w=a[d],w!=null))switch(d){case"value":m=w;break;case"defaultValue":S=w;break;case"multiple":c=w;default:ot(r,s,d,w,a,null)}s=m,a=S,r.multiple=!!c,s!=null?Mo(r,!!c,s,!1):a!=null&&Mo(r,!!c,a,!0);return;case"textarea":Ge("invalid",r),m=d=c=null;for(S in a)if(a.hasOwnProperty(S)&&(w=a[S],w!=null))switch(S){case"value":c=w;break;case"defaultValue":d=w;break;case"children":m=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(i(91));break;default:ot(r,s,S,w,a,null)}Tb(r,c,d,m),Uu(r);return;case"option":for(L in a)if(a.hasOwnProperty(L)&&(c=a[L],c!=null))switch(L){case"selected":r.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:ot(r,s,L,c,a,null)}return;case"dialog":Ge("beforetoggle",r),Ge("toggle",r),Ge("cancel",r),Ge("close",r);break;case"iframe":case"object":Ge("load",r);break;case"video":case"audio":for(c=0;c<Hl.length;c++)Ge(Hl[c],r);break;case"image":Ge("error",r),Ge("load",r);break;case"details":Ge("toggle",r);break;case"embed":case"source":case"link":Ge("error",r),Ge("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(c=a[Q],c!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:ot(r,s,Q,c,a,null)}return;default:if(yp(s)){for(re in a)a.hasOwnProperty(re)&&(c=a[re],c!==void 0&&tg(r,s,re,c,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(c=a[w],c!=null&&ot(r,s,w,c,a,null))}function SN(r,s,a,c){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,m=null,S=null,w=null,L=null,Q=null,re=null;for(J in a){var oe=a[J];if(a.hasOwnProperty(J)&&oe!=null)switch(J){case"checked":break;case"value":break;case"defaultValue":L=oe;default:c.hasOwnProperty(J)||ot(r,s,J,null,c,oe)}}for(var Z in c){var J=c[Z];if(oe=a[Z],c.hasOwnProperty(Z)&&(J!=null||oe!=null))switch(Z){case"type":m=J;break;case"name":d=J;break;case"checked":Q=J;break;case"defaultChecked":re=J;break;case"value":S=J;break;case"defaultValue":w=J;break;case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(i(137,s));break;default:J!==oe&&ot(r,s,Z,J,c,oe)}}mp(r,S,w,L,Q,re,m,d);return;case"select":J=S=w=Z=null;for(m in a)if(L=a[m],a.hasOwnProperty(m)&&L!=null)switch(m){case"value":break;case"multiple":J=L;default:c.hasOwnProperty(m)||ot(r,s,m,null,c,L)}for(d in c)if(m=c[d],L=a[d],c.hasOwnProperty(d)&&(m!=null||L!=null))switch(d){case"value":Z=m;break;case"defaultValue":w=m;break;case"multiple":S=m;default:m!==L&&ot(r,s,d,m,c,L)}s=w,a=S,c=J,Z!=null?Mo(r,!!a,Z,!1):!!c!=!!a&&(s!=null?Mo(r,!!a,s,!0):Mo(r,!!a,a?[]:"",!1));return;case"textarea":J=Z=null;for(w in a)if(d=a[w],a.hasOwnProperty(w)&&d!=null&&!c.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:ot(r,s,w,null,c,d)}for(S in c)if(d=c[S],m=a[S],c.hasOwnProperty(S)&&(d!=null||m!=null))switch(S){case"value":Z=d;break;case"defaultValue":J=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(i(91));break;default:d!==m&&ot(r,s,S,d,c,m)}Cb(r,Z,J);return;case"option":for(var Oe in a)if(Z=a[Oe],a.hasOwnProperty(Oe)&&Z!=null&&!c.hasOwnProperty(Oe))switch(Oe){case"selected":r.selected=!1;break;default:ot(r,s,Oe,null,c,Z)}for(L in c)if(Z=c[L],J=a[L],c.hasOwnProperty(L)&&Z!==J&&(Z!=null||J!=null))switch(L){case"selected":r.selected=Z&&typeof Z!="function"&&typeof Z!="symbol";break;default:ot(r,s,L,Z,c,J)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Re in a)Z=a[Re],a.hasOwnProperty(Re)&&Z!=null&&!c.hasOwnProperty(Re)&&ot(r,s,Re,null,c,Z);for(Q in c)if(Z=c[Q],J=a[Q],c.hasOwnProperty(Q)&&Z!==J&&(Z!=null||J!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(i(137,s));break;default:ot(r,s,Q,Z,c,J)}return;default:if(yp(s)){for(var at in a)Z=a[at],a.hasOwnProperty(at)&&Z!==void 0&&!c.hasOwnProperty(at)&&tg(r,s,at,void 0,c,Z);for(re in c)Z=c[re],J=a[re],!c.hasOwnProperty(re)||Z===J||Z===void 0&&J===void 0||tg(r,s,re,Z,c,J);return}}for(var q in a)Z=a[q],a.hasOwnProperty(q)&&Z!=null&&!c.hasOwnProperty(q)&&ot(r,s,q,null,c,Z);for(oe in c)Z=c[oe],J=a[oe],!c.hasOwnProperty(oe)||Z===J||Z==null&&J==null||ot(r,s,oe,Z,c,J)}var ng=null,rg=null;function Md(r){return r.nodeType===9?r:r.ownerDocument}function Rx(r){switch(r){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ax(r,s){if(r===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return r===1&&s==="foreignObject"?0:r}function ig(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var sg=null;function xN(){var r=window.event;return r&&r.type==="popstate"?r===sg?!1:(sg=r,!0):(sg=null,!1)}var Ix=typeof setTimeout=="function"?setTimeout:void 0,wN=typeof clearTimeout=="function"?clearTimeout:void 0,Dx=typeof Promise=="function"?Promise:void 0,EN=typeof queueMicrotask=="function"?queueMicrotask:typeof Dx<"u"?function(r){return Dx.resolve(null).then(r).catch(CN)}:Ix;function CN(r){setTimeout(function(){throw r})}function Gi(r){return r==="head"}function kx(r,s){var a=s,c=0,d=0;do{var m=a.nextSibling;if(r.removeChild(a),m&&m.nodeType===8)if(a=m.data,a==="/$"){if(0<c&&8>c){a=c;var S=r.ownerDocument;if(a&1&&ql(S.documentElement),a&2&&ql(S.body),a&4)for(a=S.head,ql(a),S=a.firstChild;S;){var w=S.nextSibling,L=S.nodeName;S[_e]||L==="SCRIPT"||L==="STYLE"||L==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=w}}if(d===0){r.removeChild(m),Zl(s);return}d--}else a==="$"||a==="$?"||a==="$!"?d++:c=a.charCodeAt(0)-48;else c=0;a=m}while(a);Zl(s)}function og(r){var s=r.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var a=s;switch(s=s.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":og(a),Se(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}r.removeChild(a)}}function TN(r,s,a,c){for(;r.nodeType===1;){var d=a;if(r.nodeName.toLowerCase()!==s.toLowerCase()){if(!c&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(c){if(!r[_e])switch(s){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(m=r.getAttribute("rel"),m==="stylesheet"&&r.hasAttribute("data-precedence"))break;if(m!==d.rel||r.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||r.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||r.getAttribute("title")!==(d.title==null?null:d.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(m=r.getAttribute("src"),(m!==(d.src==null?null:d.src)||r.getAttribute("type")!==(d.type==null?null:d.type)||r.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&m&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}}else if(s==="input"&&r.type==="hidden"){var m=d.name==null?null:""+d.name;if(d.type==="hidden"&&r.getAttribute("name")===m)return r}else return r;if(r=lr(r.nextSibling),r===null)break}return null}function RN(r,s,a){if(s==="")return null;for(;r.nodeType!==3;)if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!a||(r=lr(r.nextSibling),r===null))return null;return r}function ag(r){return r.data==="$!"||r.data==="$?"&&r.ownerDocument.readyState==="complete"}function AN(r,s){var a=r.ownerDocument;if(r.data!=="$?"||a.readyState==="complete")s();else{var c=function(){s(),a.removeEventListener("DOMContentLoaded",c)};a.addEventListener("DOMContentLoaded",c),r._reactRetry=c}}function lr(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return r}var lg=null;function Nx(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}function Ox(r,s,a){switch(s=Md(a),r){case"html":if(r=s.documentElement,!r)throw Error(i(452));return r;case"head":if(r=s.head,!r)throw Error(i(453));return r;case"body":if(r=s.body,!r)throw Error(i(454));return r;default:throw Error(i(451))}}function ql(r){for(var s=r.attributes;s.length;)r.removeAttributeNode(s[0]);Se(r)}var Gn=new Map,Mx=new Set;function Ld(r){return typeof r.getRootNode=="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}var si=X.d;X.d={f:IN,r:DN,D:kN,C:NN,L:ON,m:MN,X:jN,S:LN,M:PN};function IN(){var r=si.f(),s=Td();return r||s}function DN(r){var s=Xe(r);s!==null&&s.tag===5&&s.type==="form"?eS(s):si.r(r)}var ua=typeof document>"u"?null:document;function Lx(r,s,a){var c=ua;if(c&&typeof s=="string"&&s){var d=Un(s);d='link[rel="'+r+'"][href="'+d+'"]',typeof a=="string"&&(d+='[crossorigin="'+a+'"]'),Mx.has(d)||(Mx.add(d),r={rel:r,crossOrigin:a,href:s},c.querySelector(d)===null&&(s=c.createElement("link"),Xt(s,"link",r),Me(s),c.head.appendChild(s)))}}function kN(r){si.D(r),Lx("dns-prefetch",r,null)}function NN(r,s){si.C(r,s),Lx("preconnect",r,s)}function ON(r,s,a){si.L(r,s,a);var c=ua;if(c&&r&&s){var d='link[rel="preload"][as="'+Un(s)+'"]';s==="image"&&a&&a.imageSrcSet?(d+='[imagesrcset="'+Un(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(d+='[imagesizes="'+Un(a.imageSizes)+'"]')):d+='[href="'+Un(r)+'"]';var m=d;switch(s){case"style":m=da(r);break;case"script":m=fa(r)}Gn.has(m)||(r=y({rel:"preload",href:s==="image"&&a&&a.imageSrcSet?void 0:r,as:s},a),Gn.set(m,r),c.querySelector(d)!==null||s==="style"&&c.querySelector(Vl(m))||s==="script"&&c.querySelector(Gl(m))||(s=c.createElement("link"),Xt(s,"link",r),Me(s),c.head.appendChild(s)))}}function MN(r,s){si.m(r,s);var a=ua;if(a&&r){var c=s&&typeof s.as=="string"?s.as:"script",d='link[rel="modulepreload"][as="'+Un(c)+'"][href="'+Un(r)+'"]',m=d;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=fa(r)}if(!Gn.has(m)&&(r=y({rel:"modulepreload",href:r},s),Gn.set(m,r),a.querySelector(d)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Gl(m)))return}c=a.createElement("link"),Xt(c,"link",r),Me(c),a.head.appendChild(c)}}}function LN(r,s,a){si.S(r,s,a);var c=ua;if(c&&r){var d=Et(c).hoistableStyles,m=da(r);s=s||"default";var S=d.get(m);if(!S){var w={loading:0,preload:null};if(S=c.querySelector(Vl(m)))w.loading=5;else{r=y({rel:"stylesheet",href:r,"data-precedence":s},a),(a=Gn.get(m))&&cg(r,a);var L=S=c.createElement("link");Me(L),Xt(L,"link",r),L._p=new Promise(function(Q,re){L.onload=Q,L.onerror=re}),L.addEventListener("load",function(){w.loading|=1}),L.addEventListener("error",function(){w.loading|=2}),w.loading|=4,jd(S,s,c)}S={type:"stylesheet",instance:S,count:1,state:w},d.set(m,S)}}}function jN(r,s){si.X(r,s);var a=ua;if(a&&r){var c=Et(a).hoistableScripts,d=fa(r),m=c.get(d);m||(m=a.querySelector(Gl(d)),m||(r=y({src:r,async:!0},s),(s=Gn.get(d))&&ug(r,s),m=a.createElement("script"),Me(m),Xt(m,"link",r),a.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(d,m))}}function PN(r,s){si.M(r,s);var a=ua;if(a&&r){var c=Et(a).hoistableScripts,d=fa(r),m=c.get(d);m||(m=a.querySelector(Gl(d)),m||(r=y({src:r,async:!0,type:"module"},s),(s=Gn.get(d))&&ug(r,s),m=a.createElement("script"),Me(m),Xt(m,"link",r),a.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(d,m))}}function jx(r,s,a,c){var d=(d=pe.current)?Ld(d):null;if(!d)throw Error(i(446));switch(r){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(s=da(a.href),a=Et(d).hoistableStyles,c=a.get(s),c||(c={type:"style",instance:null,count:0,state:null},a.set(s,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){r=da(a.href);var m=Et(d).hoistableStyles,S=m.get(r);if(S||(d=d.ownerDocument||d,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(r,S),(m=d.querySelector(Vl(r)))&&!m._p&&(S.instance=m,S.state.loading=5),Gn.has(r)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Gn.set(r,a),m||$N(d,r,a,S.state))),s&&c===null)throw Error(i(528,""));return S}if(s&&c!==null)throw Error(i(529,""));return null;case"script":return s=a.async,a=a.src,typeof a=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=fa(a),a=Et(d).hoistableScripts,c=a.get(s),c||(c={type:"script",instance:null,count:0,state:null},a.set(s,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,r))}}function da(r){return'href="'+Un(r)+'"'}function Vl(r){return'link[rel="stylesheet"]['+r+"]"}function Px(r){return y({},r,{"data-precedence":r.precedence,precedence:null})}function $N(r,s,a,c){r.querySelector('link[rel="preload"][as="style"]['+s+"]")?c.loading=1:(s=r.createElement("link"),c.preload=s,s.addEventListener("load",function(){return c.loading|=1}),s.addEventListener("error",function(){return c.loading|=2}),Xt(s,"link",a),Me(s),r.head.appendChild(s))}function fa(r){return'[src="'+Un(r)+'"]'}function Gl(r){return"script[async]"+r}function $x(r,s,a){if(s.count++,s.instance===null)switch(s.type){case"style":var c=r.querySelector('style[data-href~="'+Un(a.href)+'"]');if(c)return s.instance=c,Me(c),c;var d=y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return c=(r.ownerDocument||r).createElement("style"),Me(c),Xt(c,"style",d),jd(c,a.precedence,r),s.instance=c;case"stylesheet":d=da(a.href);var m=r.querySelector(Vl(d));if(m)return s.state.loading|=4,s.instance=m,Me(m),m;c=Px(a),(d=Gn.get(d))&&cg(c,d),m=(r.ownerDocument||r).createElement("link"),Me(m);var S=m;return S._p=new Promise(function(w,L){S.onload=w,S.onerror=L}),Xt(m,"link",c),s.state.loading|=4,jd(m,a.precedence,r),s.instance=m;case"script":return m=fa(a.src),(d=r.querySelector(Gl(m)))?(s.instance=d,Me(d),d):(c=a,(d=Gn.get(m))&&(c=y({},a),ug(c,d)),r=r.ownerDocument||r,d=r.createElement("script"),Me(d),Xt(d,"link",c),r.head.appendChild(d),s.instance=d);case"void":return null;default:throw Error(i(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(c=s.instance,s.state.loading|=4,jd(c,a.precedence,r));return s.instance}function jd(r,s,a){for(var c=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=c.length?c[c.length-1]:null,m=d,S=0;S<c.length;S++){var w=c[S];if(w.dataset.precedence===s)m=w;else if(m!==d)break}m?m.parentNode.insertBefore(r,m.nextSibling):(s=a.nodeType===9?a.head:a,s.insertBefore(r,s.firstChild))}function cg(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.title==null&&(r.title=s.title)}function ug(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.integrity==null&&(r.integrity=s.integrity)}var Pd=null;function Ux(r,s,a){if(Pd===null){var c=new Map,d=Pd=new Map;d.set(a,c)}else d=Pd,c=d.get(a),c||(c=new Map,d.set(a,c));if(c.has(r))return c;for(c.set(r,null),a=a.getElementsByTagName(r),d=0;d<a.length;d++){var m=a[d];if(!(m[_e]||m[ce]||r==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var S=m.getAttribute(s)||"";S=r+S;var w=c.get(S);w?w.push(m):c.set(S,[m])}}return c}function zx(r,s,a){r=r.ownerDocument||r,r.head.insertBefore(a,s==="title"?r.querySelector("head > title"):null)}function UN(r,s,a){if(a===1||s.itemProp!=null)return!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return r=s.disabled,typeof s.precedence=="string"&&r==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function Bx(r){return!(r.type==="stylesheet"&&(r.state.loading&3)===0)}var Wl=null;function zN(){}function BN(r,s,a){if(Wl===null)throw Error(i(475));var c=Wl;if(s.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var d=da(a.href),m=r.querySelector(Vl(d));if(m){r=m._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(c.count++,c=$d.bind(c),r.then(c,c)),s.state.loading|=4,s.instance=m,Me(m);return}m=r.ownerDocument||r,a=Px(a),(d=Gn.get(d))&&cg(a,d),m=m.createElement("link"),Me(m);var S=m;S._p=new Promise(function(w,L){S.onload=w,S.onerror=L}),Xt(m,"link",a),s.instance=m}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(s,r),(r=s.state.preload)&&(s.state.loading&3)===0&&(c.count++,s=$d.bind(c),r.addEventListener("load",s),r.addEventListener("error",s))}}function HN(){if(Wl===null)throw Error(i(475));var r=Wl;return r.stylesheets&&r.count===0&&dg(r,r.stylesheets),0<r.count?function(s){var a=setTimeout(function(){if(r.stylesheets&&dg(r,r.stylesheets),r.unsuspend){var c=r.unsuspend;r.unsuspend=null,c()}},6e4);return r.unsuspend=s,function(){r.unsuspend=null,clearTimeout(a)}}:null}function $d(){if(this.count--,this.count===0){if(this.stylesheets)dg(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}var Ud=null;function dg(r,s){r.stylesheets=null,r.unsuspend!==null&&(r.count++,Ud=new Map,s.forEach(FN,r),Ud=null,$d.call(r))}function FN(r,s){if(!(s.state.loading&4)){var a=Ud.get(r);if(a)var c=a.get(null);else{a=new Map,Ud.set(r,a);for(var d=r.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<d.length;m++){var S=d[m];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),c=S)}c&&a.set(null,c)}d=s.instance,S=d.getAttribute("data-precedence"),m=a.get(S)||c,m===c&&a.set(null,d),a.set(S,d),this.count++,c=$d.bind(this),d.addEventListener("load",c),d.addEventListener("error",c),m?m.parentNode.insertBefore(d,m.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(d,r.firstChild)),s.state.loading|=4}}var Yl={$$typeof:R,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function qN(r,s,a,c,d,m,S,w){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=No(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=No(0),this.hiddenUpdates=No(null),this.identifierPrefix=c,this.onUncaughtError=d,this.onCaughtError=m,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function Hx(r,s,a,c,d,m,S,w,L,Q,re,oe){return r=new qN(r,s,a,S,w,L,Q,oe),s=1,m===!0&&(s|=24),m=Cn(3,null,null,s),r.current=m,m.stateNode=r,s=Gp(),s.refCount++,r.pooledCache=s,s.refCount++,m.memoizedState={element:c,isDehydrated:a,cache:s},Kp(m),r}function Fx(r){return r?(r=Fo,r):Fo}function qx(r,s,a,c,d,m){d=Fx(d),c.context===null?c.context=d:c.pendingContext=d,c=Oi(s),c.payload={element:a},m=m===void 0?null:m,m!==null&&(c.callback=m),a=Mi(r,c,s),a!==null&&(Dn(a,r,s),El(a,r,s))}function Vx(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function fg(r,s){Vx(r,s),(r=r.alternate)&&Vx(r,s)}function Gx(r){if(r.tag===13){var s=Ho(r,67108864);s!==null&&Dn(s,r,67108864),fg(r,67108864)}}var zd=!0;function VN(r,s,a,c){var d=P.T;P.T=null;var m=X.p;try{X.p=2,hg(r,s,a,c)}finally{X.p=m,P.T=d}}function GN(r,s,a,c){var d=P.T;P.T=null;var m=X.p;try{X.p=8,hg(r,s,a,c)}finally{X.p=m,P.T=d}}function hg(r,s,a,c){if(zd){var d=pg(c);if(d===null)eg(r,s,c,Bd,a),Yx(r,c);else if(YN(d,r,s,a,c))c.stopPropagation();else if(Yx(r,c),s&4&&-1<WN.indexOf(r)){for(;d!==null;){var m=Xe(d);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var S=Br(m.pendingLanes);if(S!==0){var w=m;for(w.pendingLanes|=2,w.entangledLanes|=2;S;){var L=1<<31-Yt(S);w.entanglements[1]|=L,S&=~L}Ir(m),(nt&6)===0&&(Ed=Wt()+500,Bl(0))}}break;case 13:w=Ho(m,2),w!==null&&Dn(w,m,2),Td(),fg(m,2)}if(m=pg(c),m===null&&eg(r,s,c,Bd,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else eg(r,s,c,null,a)}}function pg(r){return r=_p(r),mg(r)}var Bd=null;function mg(r){if(Bd=null,r=Ue(r),r!==null){var s=l(r);if(s===null)r=null;else{var a=s.tag;if(a===13){if(r=u(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null)}}return Bd=r,null}function Wx(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(rl()){case Ds:return 2;case Io:return 8;case Do:case zr:return 32;case Ri:return 268435456;default:return 32}default:return 32}}var gg=!1,Wi=null,Yi=null,Qi=null,Ql=new Map,Kl=new Map,Ki=[],WN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Yx(r,s){switch(r){case"focusin":case"focusout":Wi=null;break;case"dragenter":case"dragleave":Yi=null;break;case"mouseover":case"mouseout":Qi=null;break;case"pointerover":case"pointerout":Ql.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kl.delete(s.pointerId)}}function Xl(r,s,a,c,d,m){return r===null||r.nativeEvent!==m?(r={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},s!==null&&(s=Xe(s),s!==null&&Gx(s)),r):(r.eventSystemFlags|=c,s=r.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),r)}function YN(r,s,a,c,d){switch(s){case"focusin":return Wi=Xl(Wi,r,s,a,c,d),!0;case"dragenter":return Yi=Xl(Yi,r,s,a,c,d),!0;case"mouseover":return Qi=Xl(Qi,r,s,a,c,d),!0;case"pointerover":var m=d.pointerId;return Ql.set(m,Xl(Ql.get(m)||null,r,s,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,Kl.set(m,Xl(Kl.get(m)||null,r,s,a,c,d)),!0}return!1}function Qx(r){var s=Ue(r.target);if(s!==null){var a=l(s);if(a!==null){if(s=a.tag,s===13){if(s=u(a),s!==null){r.blockedOn=s,W(r.priority,function(){if(a.tag===13){var c=In();c=sl(c);var d=Ho(a,c);d!==null&&Dn(d,a,c),fg(a,c)}});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Hd(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=pg(r.nativeEvent);if(a===null){a=r.nativeEvent;var c=new a.constructor(a.type,a);vp=c,a.target.dispatchEvent(c),vp=null}else return s=Xe(a),s!==null&&Gx(s),r.blockedOn=a,!1;s.shift()}return!0}function Kx(r,s,a){Hd(r)&&a.delete(s)}function QN(){gg=!1,Wi!==null&&Hd(Wi)&&(Wi=null),Yi!==null&&Hd(Yi)&&(Yi=null),Qi!==null&&Hd(Qi)&&(Qi=null),Ql.forEach(Kx),Kl.forEach(Kx)}function Fd(r,s){r.blockedOn===s&&(r.blockedOn=null,gg||(gg=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,QN)))}var qd=null;function Xx(r){qd!==r&&(qd=r,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){qd===r&&(qd=null);for(var s=0;s<r.length;s+=3){var a=r[s],c=r[s+1],d=r[s+2];if(typeof c!="function"){if(mg(c||a)===null)continue;break}var m=Xe(a);m!==null&&(r.splice(s,3),s-=3,mm(m,{pending:!0,data:d,method:a.method,action:c},c,d))}}))}function Zl(r){function s(L){return Fd(L,r)}Wi!==null&&Fd(Wi,r),Yi!==null&&Fd(Yi,r),Qi!==null&&Fd(Qi,r),Ql.forEach(s),Kl.forEach(s);for(var a=0;a<Ki.length;a++){var c=Ki[a];c.blockedOn===r&&(c.blockedOn=null)}for(;0<Ki.length&&(a=Ki[0],a.blockedOn===null);)Qx(a),a.blockedOn===null&&Ki.shift();if(a=(r.ownerDocument||r).$$reactFormReplay,a!=null)for(c=0;c<a.length;c+=3){var d=a[c],m=a[c+1],S=d[fe]||null;if(typeof m=="function")S||Xx(a);else if(S){var w=null;if(m&&m.hasAttribute("formAction")){if(d=m,S=m[fe]||null)w=S.formAction;else if(mg(d)!==null)continue}else w=S.action;typeof w=="function"?a[c+1]=w:(a.splice(c,3),c-=3),Xx(a)}}}function yg(r){this._internalRoot=r}Vd.prototype.render=yg.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(i(409));var a=s.current,c=In();qx(a,c,r,s,null,null)},Vd.prototype.unmount=yg.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;qx(r.current,2,null,r,null,null),Td(),s[ye]=null}};function Vd(r){this._internalRoot=r}Vd.prototype.unstable_scheduleHydration=function(r){if(r){var s=$();r={blockedOn:null,target:r,priority:s};for(var a=0;a<Ki.length&&s!==0&&s<Ki[a].priority;a++);Ki.splice(a,0,r),a===0&&Qx(r)}};var Zx=t.version;if(Zx!=="19.1.1")throw Error(i(527,Zx,"19.1.1"));X.findDOMNode=function(r){var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(i(188)):(r=Object.keys(r).join(","),Error(i(268,r)));return r=p(s),r=r!==null?h(r):null,r=r===null?null:r.stateNode,r};var KN={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gd.isDisabled&&Gd.supportsFiber)try{pn=Gd.inject(KN),_t=Gd}catch{}}return ec.createRoot=function(r,s){if(!o(r))throw Error(i(299));var a=!1,c="",d=pS,m=mS,S=gS,w=null;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(S=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(w=s.unstable_transitionCallbacks)),s=Hx(r,1,!1,null,null,a,c,d,m,S,w,null),r[ye]=s.current,Jm(r),new yg(s)},ec.hydrateRoot=function(r,s,a){if(!o(r))throw Error(i(299));var c=!1,d="",m=pS,S=mS,w=gS,L=null,Q=null;return a!=null&&(a.unstable_strictMode===!0&&(c=!0),a.identifierPrefix!==void 0&&(d=a.identifierPrefix),a.onUncaughtError!==void 0&&(m=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(L=a.unstable_transitionCallbacks),a.formState!==void 0&&(Q=a.formState)),s=Hx(r,1,!0,s,a??null,c,d,m,S,w,L,Q),s.context=Fx(null),a=s.current,c=In(),c=sl(c),d=Oi(c),d.callback=null,Mi(a,d,c),a=c,s.current.lanes=a,Ms(s,a),Ir(s),r[ye]=s.current,Jm(r),new Vd(s)},ec.version="19.1.1",ec}var l1;function oO(){if(l1)return bg.exports;l1=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),bg.exports=sO(),bg.exports}var aO=oO(),Eg={exports:{}},Cg={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c1;function lO(){if(c1)return Cg;c1=1;var e=Ah();function t(p,h){return p===h&&(p!==0||1/p===1/h)||p!==p&&h!==h}var n=typeof Object.is=="function"?Object.is:t,i=e.useSyncExternalStore,o=e.useRef,l=e.useEffect,u=e.useMemo,f=e.useDebugValue;return Cg.useSyncExternalStoreWithSelector=function(p,h,y,_,v){var b=o(null);if(b.current===null){var x={hasValue:!1,value:null};b.current=x}else x=b.current;b=u(function(){function T(O){if(!k){if(k=!0,M=O,O=_(O),v!==void 0&&x.hasValue){var A=x.value;if(v(A,O))return R=A}return R=O}if(A=R,n(M,O))return A;var j=_(O);return v!==void 0&&v(A,j)?(M=O,A):(M=O,R=j)}var k=!1,M,R,D=y===void 0?null:y;return[function(){return T(h())},D===null?void 0:function(){return T(D())}]},[h,y,_,v]);var I=i(p,b[0],b[1]);return l(function(){x.hasValue=!0,x.value=I},[I]),f(I),I},Cg}var u1;function cO(){return u1||(u1=1,Eg.exports=lO()),Eg.exports}var uO=cO();function YC(e){e()}function dO(){let e=null,t=null;return{clear(){e=null,t=null},notify(){YC(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let i=e;for(;i;)n.push(i),i=i.next;return n},subscribe(n){let i=!0;const o=t={callback:n,next:null,prev:t};return o.prev?o.prev.next=o:e=o,function(){!i||e===null||(i=!1,o.next?o.next.prev=o.prev:t=o.prev,o.prev?o.prev.next=o.next:e=o.next)}}}}var d1={notify(){},get:()=>[]};function fO(e,t){let n,i=d1,o=0,l=!1;function u(I){y();const T=i.subscribe(I);let k=!1;return()=>{k||(k=!0,T(),_())}}function f(){i.notify()}function p(){x.onStateChange&&x.onStateChange()}function h(){return l}function y(){o++,n||(n=e.subscribe(p),i=dO())}function _(){o--,n&&o===0&&(n(),n=void 0,i.clear(),i=d1)}function v(){l||(l=!0,y())}function b(){l&&(l=!1,_())}const x={addNestedSub:u,notifyNestedSubs:f,handleChangeWrapper:p,isSubscribed:h,trySubscribe:v,tryUnsubscribe:b,getListeners:()=>i};return x}var hO=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",pO=hO(),mO=()=>typeof navigator<"u"&&navigator.product==="ReactNative",gO=mO(),yO=()=>pO||gO?C.useLayoutEffect:C.useEffect,vO=yO();function f1(e,t){return e===t?e!==0||t!==0||1/e===1/t:e!==e&&t!==t}function wc(e,t){if(f1(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;const n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(let o=0;o<n.length;o++)if(!Object.prototype.hasOwnProperty.call(t,n[o])||!f1(e[n[o]],t[n[o]]))return!1;return!0}var _O=Symbol.for("react-redux-context"),bO=typeof globalThis<"u"?globalThis:{};function SO(){if(!C.createContext)return{};const e=bO[_O]??=new Map;let t=e.get(C.createContext);return t||(t=C.createContext(null),e.set(C.createContext,t)),t}var gs=SO();function xO(e){const{children:t,context:n,serverState:i,store:o}=e,l=C.useMemo(()=>{const p=fO(o);return{store:o,subscription:p,getServerState:i?()=>i:void 0}},[o,i]),u=C.useMemo(()=>o.getState(),[o]);vO(()=>{const{subscription:p}=l;return p.onStateChange=p.notifyNestedSubs,p.trySubscribe(),u!==o.getState()&&p.notifyNestedSubs(),()=>{p.tryUnsubscribe(),p.onStateChange=void 0}},[l,u]);const f=n||gs;return C.createElement(f.Provider,{value:l},t)}var wO=xO;function Nv(e=gs){return function(){return C.useContext(e)}}var QC=Nv();function KC(e=gs){const t=e===gs?QC:Nv(e),n=()=>{const{store:i}=t();return i};return Object.assign(n,{withTypes:()=>n}),n}var XC=KC();function EO(e=gs){const t=e===gs?XC:KC(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var ZC=EO(),CO=(e,t)=>e===t;function TO(e=gs){const t=e===gs?QC:Nv(e),n=(i,o={})=>{const{equalityFn:l=CO}=typeof o=="function"?{equalityFn:o}:o,u=t(),{store:f,subscription:p,getServerState:h}=u;C.useRef(!0);const y=C.useCallback({[i.name](v){return i(v)}}[i.name],[i]),_=uO.useSyncExternalStoreWithSelector(p.addNestedSub,f.getState,h||f.getState,y,l);return C.useDebugValue(_),_};return Object.assign(n,{withTypes:()=>n}),n}var JC=TO(),RO=YC;/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var eT=e=>{throw TypeError(e)},AO=(e,t,n)=>t.has(e)||eT("Cannot "+n),Tg=(e,t,n)=>(AO(e,t,"read from private field"),n?n.call(e):t.get(e)),IO=(e,t,n)=>t.has(e)?eT("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),h1="popstate";function DO(e={}){function t(o,l){let{pathname:u="/",search:f="",hash:p=""}=xi(o.location.hash.substring(1));return!u.startsWith("/")&&!u.startsWith(".")&&(u="/"+u),Pc("",{pathname:u,search:f,hash:p},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(o,l){let u=o.document.querySelector("base"),f="";if(u&&u.getAttribute("href")){let p=o.location.href,h=p.indexOf("#");f=h===-1?p:p.slice(0,h)}return f+"#"+(typeof l=="string"?l:ys(l))}function i(o,l){xt(o.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(l)})`)}return NO(t,n,i,e)}function Pe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function xt(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function kO(){return Math.random().toString(36).substring(2,10)}function p1(e,t){return{usr:e.state,key:e.key,idx:t}}function Pc(e,t,n=null,i){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?xi(t):t,state:n,key:t&&t.key||i||kO()}}function ys({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function xi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let i=e.indexOf("?");i>=0&&(t.search=e.substring(i),e=e.substring(0,i)),e&&(t.pathname=e)}return t}function NO(e,t,n,i={}){let{window:o=document.defaultView,v5Compat:l=!1}=i,u=o.history,f="POP",p=null,h=y();h==null&&(h=0,u.replaceState({...u.state,idx:h},""));function y(){return(u.state||{idx:null}).idx}function _(){f="POP";let T=y(),k=T==null?null:T-h;h=T,p&&p({action:f,location:I.location,delta:k})}function v(T,k){f="PUSH";let M=Pc(I.location,T,k);n&&n(M,T),h=y()+1;let R=p1(M,h),D=I.createHref(M);try{u.pushState(R,"",D)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;o.location.assign(D)}l&&p&&p({action:f,location:I.location,delta:1})}function b(T,k){f="REPLACE";let M=Pc(I.location,T,k);n&&n(M,T),h=y();let R=p1(M,h),D=I.createHref(M);u.replaceState(R,"",D),l&&p&&p({action:f,location:I.location,delta:0})}function x(T){return tT(T)}let I={get action(){return f},get location(){return e(o,u)},listen(T){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(h1,_),p=T,()=>{o.removeEventListener(h1,_),p=null}},createHref(T){return t(o,T)},createURL:x,encodeLocation(T){let k=x(T);return{pathname:k.pathname,search:k.search,hash:k.hash}},push:v,replace:b,go(T){return u.go(T)}};return I}function tT(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Pe(n,"No window.location.(origin|href) available to create URL");let i=typeof e=="string"?e:ys(e);return i=i.replace(/ $/,"%20"),!t&&i.startsWith("//")&&(i=n+i),new URL(i,n)}var yc,m1=class{constructor(e){if(IO(this,yc,new Map),e)for(let[t,n]of e)this.set(t,n)}get(e){if(Tg(this,yc).has(e))return Tg(this,yc).get(e);if(e.defaultValue!==void 0)return e.defaultValue;throw new Error("No value found for context")}set(e,t){Tg(this,yc).set(e,t)}};yc=new WeakMap;var OO=new Set(["lazy","caseSensitive","path","id","index","children"]);function MO(e){return OO.has(e)}var LO=new Set(["lazy","caseSensitive","path","id","index","middleware","children"]);function jO(e){return LO.has(e)}function PO(e){return e.index===!0}function $c(e,t,n=[],i={},o=!1){return e.map((l,u)=>{let f=[...n,String(u)],p=typeof l.id=="string"?l.id:f.join("-");if(Pe(l.index!==!0||!l.children,"Cannot specify children on an index route"),Pe(o||!i[p],`Found a route id collision on id "${p}".  Route id's must be globally unique within Data Router usages`),PO(l)){let h={...l,...t(l),id:p};return i[p]=h,h}else{let h={...l,...t(l),id:p,children:void 0};return i[p]=h,l.children&&(h.children=$c(l.children,t,f,i,o)),h}})}function is(e,t,n="/"){return gf(e,t,n,!1)}function gf(e,t,n,i){let o=typeof t=="string"?xi(t):t,l=Jn(o.pathname||"/",n);if(l==null)return null;let u=nT(e);UO(u);let f=null;for(let p=0;f==null&&p<u.length;++p){let h=KO(l);f=YO(u[p],h,i)}return f}function $O(e,t){let{route:n,pathname:i,params:o}=e;return{id:n.id,pathname:i,params:o,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function nT(e,t=[],n=[],i="",o=!1){let l=(u,f,p=o,h)=>{let y={relativePath:h===void 0?u.path||"":h,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(i)&&p)return;Pe(y.relativePath.startsWith(i),`Absolute route path "${y.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(i.length)}let _=kr([i,y.relativePath]),v=n.concat(y);u.children&&u.children.length>0&&(Pe(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),nT(u.children,t,v,_,p)),!(u.path==null&&!u.index)&&t.push({path:_,score:GO(_,u.index),routesMeta:v})};return e.forEach((u,f)=>{if(u.path===""||!u.path?.includes("?"))l(u,f);else for(let p of rT(u.path))l(u,f,!0,p)}),t}function rT(e){let t=e.split("/");if(t.length===0)return[];let[n,...i]=t,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let u=rT(i.join("/")),f=[];return f.push(...u.map(p=>p===""?l:[l,p].join("/"))),o&&f.push(...u),f.map(p=>e.startsWith("/")&&p===""?"/":p)}function UO(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:WO(t.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var zO=/^:[\w-]+$/,BO=3,HO=2,FO=1,qO=10,VO=-2,g1=e=>e==="*";function GO(e,t){let n=e.split("/"),i=n.length;return n.some(g1)&&(i+=VO),t&&(i+=HO),n.filter(o=>!g1(o)).reduce((o,l)=>o+(zO.test(l)?BO:l===""?FO:qO),i)}function WO(e,t){return e.length===t.length&&e.slice(0,-1).every((i,o)=>i===t[o])?e[e.length-1]-t[t.length-1]:0}function YO(e,t,n=!1){let{routesMeta:i}=e,o={},l="/",u=[];for(let f=0;f<i.length;++f){let p=i[f],h=f===i.length-1,y=l==="/"?t:t.slice(l.length)||"/",_=Lf({path:p.relativePath,caseSensitive:p.caseSensitive,end:h},y),v=p.route;if(!_&&h&&n&&!i[i.length-1].route.index&&(_=Lf({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},y)),!_)return null;Object.assign(o,_.params),u.push({params:o,pathname:kr([l,_.pathname]),pathnameBase:eM(kr([l,_.pathnameBase])),route:v}),_.pathnameBase!=="/"&&(l=kr([l,_.pathnameBase]))}return u}function Lf(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,i]=QO(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let l=o[0],u=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:i.reduce((h,{paramName:y,isOptional:_},v)=>{if(y==="*"){let x=f[v]||"";u=l.slice(0,l.length-x.length).replace(/(.)\/+$/,"$1")}const b=f[v];return _&&!b?h[y]=void 0:h[y]=(b||"").replace(/%2F/g,"/"),h},{}),pathname:l,pathnameBase:u,pattern:e}}function QO(e,t=!1,n=!0){xt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let i=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,f,p)=>(i.push({paramName:f,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(i.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),i]}function KO(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return xt(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Jn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,i=e.charAt(n);return i&&i!=="/"?null:e.slice(n)||"/"}function XO({basename:e,pathname:t}){return t==="/"?e:kr([e,t])}function ZO(e,t="/"){let{pathname:n,search:i="",hash:o=""}=typeof e=="string"?xi(e):e;return{pathname:n?n.startsWith("/")?n:JO(n,t):t,search:tM(i),hash:nM(o)}}function JO(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Rg(e,t,n,i){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function iT(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ih(e){let t=iT(e);return t.map((n,i)=>i===t.length-1?n.pathname:n.pathnameBase)}function Dh(e,t,n,i=!1){let o;typeof e=="string"?o=xi(e):(o={...e},Pe(!o.pathname||!o.pathname.includes("?"),Rg("?","pathname","search",o)),Pe(!o.pathname||!o.pathname.includes("#"),Rg("#","pathname","hash",o)),Pe(!o.search||!o.search.includes("#"),Rg("#","search","hash",o)));let l=e===""||o.pathname==="",u=l?"/":o.pathname,f;if(u==null)f=n;else{let _=t.length-1;if(!i&&u.startsWith("..")){let v=u.split("/");for(;v[0]==="..";)v.shift(),_-=1;o.pathname=v.join("/")}f=_>=0?t[_]:"/"}let p=ZO(o,f),h=u&&u!=="/"&&u.endsWith("/"),y=(l||u===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(h||y)&&(p.pathname+="/"),p}var kr=e=>e.join("/").replace(/\/\/+/g,"/"),eM=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),tM=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,nM=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,jf=class{constructor(e,t,n,i=!1){this.status=e,this.statusText=t||"",this.internal=i,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Uc(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var sT=["POST","PUT","PATCH","DELETE"],rM=new Set(sT),iM=["GET",...sT],sM=new Set(iM),oM=new Set([301,302,303,307,308]),aM=new Set([307,308]),Ag={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},lM={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},tc={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},cM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ov=e=>cM.test(e),uM=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),oT="remix-router-transitions",aT=Symbol("ResetLoaderData");function dM(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u";Pe(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let i=e.hydrationRouteProperties||[],o=e.mapRouteProperties||uM,l={},u=$c(e.routes,o,void 0,l),f,p=e.basename||"/";p.startsWith("/")||(p=`/${p}`);let h=e.dataStrategy||gM,y={...e.future},_=null,v=new Set,b=null,x=null,I=null,T=e.hydrationData!=null,k=is(u,e.history.location,p),M=!1,R=null,D;if(k==null&&!e.patchRoutesOnNavigation){let $=Qn(404,{pathname:e.history.location.pathname}),{matches:W,route:ee}=Wd(u);D=!0,k=W,R={[ee.id]:$}}else if(k&&!e.hydrationData&&Ls(k,u,e.history.location.pathname).active&&(k=null),k)if(k.some($=>$.route.lazy))D=!1;else if(!k.some($=>$.route.loader))D=!0;else{let $=e.hydrationData?e.hydrationData.loaderData:null,W=e.hydrationData?e.hydrationData.errors:null;if(W){let ee=k.findIndex(ce=>W[ce.route.id]!==void 0);D=k.slice(0,ee+1).every(ce=>!Ay(ce.route,$,W))}else D=k.every(ee=>!Ay(ee.route,$,W))}else{D=!1,k=[];let $=Ls(null,u,e.history.location.pathname);$.active&&$.matches&&(M=!0,k=$.matches)}let O,A={historyAction:e.history.action,location:e.history.location,matches:k,initialized:D,navigation:Ag,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||R,fetchers:new Map,blockers:new Map},j="POP",U=!1,F,H=!1,z=new Map,G=null,V=!1,te=!1,ue=new Set,P=new Map,X=0,ne=-1,ae=new Map,N=new Set,K=new Map,le=new Map,ie=new Set,de=new Map,me,pe=null;function Ae(){if(_=e.history.listen(({action:$,location:W,delta:ee})=>{if(me){me(),me=void 0;return}xt(de.size===0||ee!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ce=Mu({currentLocation:A.location,nextLocation:W,historyAction:$});if(ce&&ee!=null){let fe=new Promise(ye=>{me=ye});e.history.go(ee*-1),wr(ce,{state:"blocked",location:W,proceed(){wr(ce,{state:"proceeding",proceed:void 0,reset:void 0,location:W}),fe.then(()=>e.history.go(ee))},reset(){let ye=new Map(A.blockers);ye.set(ce,tc),$e({blockers:ye})}});return}return wt($,W)}),n){kM(t,z);let $=()=>NM(t,z);t.addEventListener("pagehide",$),G=()=>t.removeEventListener("pagehide",$)}return A.initialized||wt("POP",A.location,{initialHydration:!0}),O}function be(){_&&_(),G&&G(),v.clear(),F&&F.abort(),A.fetchers.forEach(($,W)=>Yt(W)),A.blockers.forEach(($,W)=>Os(W))}function De($){return v.add($),()=>v.delete($)}function $e($,W={}){$.matches&&($.matches=$.matches.map(fe=>{let ye=l[fe.route.id],xe=fe.route;return xe.element!==ye.element||xe.errorElement!==ye.errorElement||xe.hydrateFallbackElement!==ye.hydrateFallbackElement?{...fe,route:ye}:fe})),A={...A,...$};let ee=[],ce=[];A.fetchers.forEach((fe,ye)=>{fe.state==="idle"&&(ie.has(ye)?ee.push(ye):ce.push(ye))}),ie.forEach(fe=>{!A.fetchers.has(fe)&&!P.has(fe)&&ee.push(fe)}),[...v].forEach(fe=>fe(A,{deletedFetchers:ee,viewTransitionOpts:W.viewTransitionOpts,flushSync:W.flushSync===!0})),ee.forEach(fe=>Yt(fe)),ce.forEach(fe=>A.fetchers.delete(fe))}function vt($,W,{flushSync:ee}={}){let ce=A.actionData!=null&&A.navigation.formMethod!=null&&bn(A.navigation.formMethod)&&A.navigation.state==="loading"&&$.state?._isRedirect!==!0,fe;W.actionData?Object.keys(W.actionData).length>0?fe=W.actionData:fe=null:ce?fe=A.actionData:fe=null;let ye=W.loaderData?T1(A.loaderData,W.loaderData,W.matches||[],W.errors):A.loaderData,xe=A.blockers;xe.size>0&&(xe=new Map(xe),xe.forEach((_e,Se)=>xe.set(Se,tc)));let ve=V?!1:ju($,W.matches||A.matches),Ee=U===!0||A.navigation.formMethod!=null&&bn(A.navigation.formMethod)&&$.state?._isRedirect!==!0;f&&(u=f,f=void 0),V||j==="POP"||(j==="PUSH"?e.history.push($,$.state):j==="REPLACE"&&e.history.replace($,$.state));let Te;if(j==="POP"){let _e=z.get(A.location.pathname);_e&&_e.has($.pathname)?Te={currentLocation:A.location,nextLocation:$}:z.has($.pathname)&&(Te={currentLocation:$,nextLocation:A.location})}else if(H){let _e=z.get(A.location.pathname);_e?_e.add($.pathname):(_e=new Set([$.pathname]),z.set(A.location.pathname,_e)),Te={currentLocation:A.location,nextLocation:$}}$e({...W,actionData:fe,loaderData:ye,historyAction:j,location:$,initialized:!0,navigation:Ag,revalidation:"idle",restoreScrollPosition:ve,preventScrollReset:Ee,blockers:xe},{viewTransitionOpts:Te,flushSync:ee===!0}),j="POP",U=!1,H=!1,V=!1,te=!1,pe?.resolve(),pe=null}async function mt($,W){if(typeof $=="number"){e.history.go($);return}let ee=Ry(A.location,A.matches,p,$,W?.fromRouteId,W?.relative),{path:ce,submission:fe,error:ye}=y1(!1,ee,W),xe=A.location,ve=Pc(A.location,ce,W&&W.state);ve={...ve,...e.history.encodeLocation(ve)};let Ee=W&&W.replace!=null?W.replace:void 0,Te="PUSH";Ee===!0?Te="REPLACE":Ee===!1||fe!=null&&bn(fe.formMethod)&&fe.formAction===A.location.pathname+A.location.search&&(Te="REPLACE");let _e=W&&"preventScrollReset"in W?W.preventScrollReset===!0:void 0,Se=(W&&W.flushSync)===!0,Ue=Mu({currentLocation:xe,nextLocation:ve,historyAction:Te});if(Ue){wr(Ue,{state:"blocked",location:ve,proceed(){wr(Ue,{state:"proceeding",proceed:void 0,reset:void 0,location:ve}),mt($,W)},reset(){let Xe=new Map(A.blockers);Xe.set(Ue,tc),$e({blockers:Xe})}});return}await wt(Te,ve,{submission:fe,pendingError:ye,preventScrollReset:_e,replace:W&&W.replace,enableViewTransition:W&&W.viewTransition,flushSync:Se})}function Ln(){pe||(pe=OM()),il(),$e({revalidation:"loading"});let $=pe.promise;return A.navigation.state==="submitting"?$:A.navigation.state==="idle"?(wt(A.historyAction,A.location,{startUninterruptedRevalidation:!0}),$):(wt(j||A.historyAction,A.navigation.location,{overrideNavigation:A.navigation,enableViewTransition:H===!0}),$)}async function wt($,W,ee){F&&F.abort(),F=null,j=$,V=(ee&&ee.startUninterruptedRevalidation)===!0,Ms(A.location,A.matches),U=(ee&&ee.preventScrollReset)===!0,H=(ee&&ee.enableViewTransition)===!0;let ce=f||u,fe=ee&&ee.overrideNavigation,ye=ee?.initialHydration&&A.matches&&A.matches.length>0&&!M?A.matches:is(ce,W,p),xe=(ee&&ee.flushSync)===!0;if(ye&&A.initialized&&!te&&EM(A.location,W)&&!(ee&&ee.submission&&bn(ee.submission.formMethod))){vt(W,{matches:ye},{flushSync:xe});return}let ve=Ls(ye,ce,W.pathname);if(ve.active&&ve.matches&&(ye=ve.matches),!ye){let{error:Et,notFoundMatches:Me,route:it}=ko(W.pathname);vt(W,{matches:Me,loaderData:{},errors:{[it.id]:Et}},{flushSync:xe});return}F=new AbortController;let Ee=va(e.history,W,F.signal,ee&&ee.submission),Te=e.getContext?await e.getContext():new m1,_e;if(ee&&ee.pendingError)_e=[ss(ye).route.id,{type:"error",error:ee.pendingError}];else if(ee&&ee.submission&&bn(ee.submission.formMethod)){let Et=await jn(Ee,W,ee.submission,ye,Te,ve.active,ee&&ee.initialHydration===!0,{replace:ee.replace,flushSync:xe});if(Et.shortCircuited)return;if(Et.pendingActionResult){let[Me,it]=Et.pendingActionResult;if(Nn(it)&&Uc(it.error)&&it.error.status===404){F=null,vt(W,{matches:Et.matches,loaderData:{},errors:{[Me]:it.error}});return}}ye=Et.matches||ye,_e=Et.pendingActionResult,fe=Ig(W,ee.submission),xe=!1,ve.active=!1,Ee=va(e.history,Ee.url,Ee.signal)}let{shortCircuited:Se,matches:Ue,loaderData:Xe,errors:gt}=await Ur(Ee,W,ye,Te,ve.active,fe,ee&&ee.submission,ee&&ee.fetcherSubmission,ee&&ee.replace,ee&&ee.initialHydration===!0,xe,_e);Se||(F=null,vt(W,{matches:Ue||ye,...R1(_e),loaderData:Xe,errors:gt}))}async function jn($,W,ee,ce,fe,ye,xe,ve={}){il();let Ee=IM(W,ee);if($e({navigation:Ee},{flushSync:ve.flushSync===!0}),ye){let Se=await js(ce,W.pathname,$.signal);if(Se.type==="aborted")return{shortCircuited:!0};if(Se.type==="error"){if(Se.partialMatches.length===0){let{matches:Xe,route:gt}=Wd(u);return{matches:Xe,pendingActionResult:[gt.id,{type:"error",error:Se.error}]}}let Ue=ss(Se.partialMatches).route.id;return{matches:Se.partialMatches,pendingActionResult:[Ue,{type:"error",error:Se.error}]}}else if(Se.matches)ce=Se.matches;else{let{notFoundMatches:Ue,error:Xe,route:gt}=ko(W.pathname);return{matches:Ue,pendingActionResult:[gt.id,{type:"error",error:Xe}]}}}let Te,_e=yf(ce,W);if(!_e.route.action&&!_e.route.lazy)Te={type:"error",error:Qn(405,{method:$.method,pathname:W.pathname,routeId:_e.route.id})};else{let Se=xa(o,l,$,ce,_e,xe?[]:i,fe),Ue=await Ri($,Se,fe,null);if(Te=Ue[_e.route.id],!Te){for(let Xe of ce)if(Ue[Xe.route.id]){Te=Ue[Xe.route.id];break}}if($.signal.aborted)return{shortCircuited:!0}}if(io(Te)){let Se;return ve&&ve.replace!=null?Se=ve.replace:Se=w1(Te.response.headers.get("Location"),new URL($.url),p)===A.location.pathname+A.location.search,await zr($,Te,!0,{submission:ee,replace:Se}),{shortCircuited:!0}}if(Nn(Te)){let Se=ss(ce,_e.route.id);return(ve&&ve.replace)!==!0&&(j="PUSH"),{matches:ce,pendingActionResult:[Se.route.id,Te,_e.route.id]}}return{matches:ce,pendingActionResult:[_e.route.id,Te]}}async function Ur($,W,ee,ce,fe,ye,xe,ve,Ee,Te,_e,Se){let Ue=ye||Ig(W,xe),Xe=xe||ve||I1(Ue),gt=!V&&!Te;if(fe){if(gt){let kt=Wt(Se);$e({navigation:Ue,...kt!==void 0?{actionData:kt}:{}},{flushSync:_e})}let Le=await js(ee,W.pathname,$.signal);if(Le.type==="aborted")return{shortCircuited:!0};if(Le.type==="error"){if(Le.partialMatches.length===0){let{matches:Vr,route:mn}=Wd(u);return{matches:Vr,loaderData:{},errors:{[mn.id]:Le.error}}}let kt=ss(Le.partialMatches).route.id;return{matches:Le.partialMatches,loaderData:{},errors:{[kt]:Le.error}}}else if(Le.matches)ee=Le.matches;else{let{error:kt,notFoundMatches:Vr,route:mn}=ko(W.pathname);return{matches:Vr,loaderData:{},errors:{[mn.id]:kt}}}}let Et=f||u,{dsMatches:Me,revalidatingFetchers:it}=v1($,ce,o,l,e.history,A,ee,Xe,W,Te?[]:i,Te===!0,te,ue,ie,K,N,Et,p,e.patchRoutesOnNavigation!=null,Se);if(ne=++X,!e.dataStrategy&&!Me.some(Le=>Le.shouldLoad)&&!Me.some(Le=>Le.route.middleware)&&it.length===0){let Le=ks();return vt(W,{matches:ee,loaderData:{},errors:Se&&Nn(Se[1])?{[Se[0]]:Se[1].error}:null,...R1(Se),...Le?{fetchers:new Map(A.fetchers)}:{}},{flushSync:_e}),{shortCircuited:!0}}if(gt){let Le={};if(!fe){Le.navigation=Ue;let kt=Wt(Se);kt!==void 0&&(Le.actionData=kt)}it.length>0&&(Le.fetchers=rl(it)),$e(Le,{flushSync:_e})}it.forEach(Le=>{xr(Le.key),Le.controller&&P.set(Le.key,Le.controller)});let Er=()=>it.forEach(Le=>xr(Le.key));F&&F.signal.addEventListener("abort",Er);let{loaderResults:wn,fetcherResults:ln}=await Nu(Me,it,$,ce);if($.signal.aborted)return{shortCircuited:!0};F&&F.signal.removeEventListener("abort",Er),it.forEach(Le=>P.delete(Le.key));let Pn=Yd(wn);if(Pn)return await zr($,Pn.result,!0,{replace:Ee}),{shortCircuited:!0};if(Pn=Yd(ln),Pn)return N.add(Pn.key),await zr($,Pn.result,!0,{replace:Ee}),{shortCircuited:!0};let{loaderData:Oo,errors:Ai}=C1(A,ee,wn,Se,it,ln);Te&&A.errors&&(Ai={...A.errors,...Ai});let Hr=ks(),Fr=Ns(ne),qr=Hr||Fr||it.length>0;return{matches:ee,loaderData:Oo,errors:Ai,...qr?{fetchers:new Map(A.fetchers)}:{}}}function Wt($){if($&&!Nn($[1]))return{[$[0]]:$[1].data};if(A.actionData)return Object.keys(A.actionData).length===0?null:A.actionData}function rl($){return $.forEach(W=>{let ee=A.fetchers.get(W.key),ce=nc(void 0,ee?ee.data:void 0);A.fetchers.set(W.key,ce)}),new Map(A.fetchers)}async function Ds($,W,ee,ce){xr($);let fe=(ce&&ce.flushSync)===!0,ye=f||u,xe=Ry(A.location,A.matches,p,ee,W,ce?.relative),ve=is(ye,xe,p),Ee=Ls(ve,ye,xe);if(Ee.active&&Ee.matches&&(ve=Ee.matches),!ve){_t($,W,Qn(404,{pathname:xe}),{flushSync:fe});return}let{path:Te,submission:_e,error:Se}=y1(!0,xe,ce);if(Se){_t($,W,Se,{flushSync:fe});return}let Ue=e.getContext?await e.getContext():new m1,Xe=(ce&&ce.preventScrollReset)===!0;if(_e&&bn(_e.formMethod)){await Io($,W,Te,ve,Ue,Ee.active,fe,Xe,_e);return}K.set($,{routeId:W,path:Te}),await Do($,W,Te,ve,Ue,Ee.active,fe,Xe,_e)}async function Io($,W,ee,ce,fe,ye,xe,ve,Ee){il(),K.delete($);let Te=A.fetchers.get($);pn($,DM(Ee,Te),{flushSync:xe});let _e=new AbortController,Se=va(e.history,ee,_e.signal,Ee);if(ye){let bt=await js(ce,new URL(Se.url).pathname,Se.signal,$);if(bt.type==="aborted")return;if(bt.type==="error"){_t($,W,bt.error,{flushSync:xe});return}else if(bt.matches)ce=bt.matches;else{_t($,W,Qn(404,{pathname:ee}),{flushSync:xe});return}}let Ue=yf(ce,ee);if(!Ue.route.action&&!Ue.route.lazy){let bt=Qn(405,{method:Ee.formMethod,pathname:ee,routeId:W});_t($,W,bt,{flushSync:xe});return}P.set($,_e);let Xe=X,gt=xa(o,l,Se,ce,Ue,i,fe),Me=(await Ri(Se,gt,fe,$))[Ue.route.id];if(Se.signal.aborted){P.get($)===_e&&P.delete($);return}if(ie.has($)){if(io(Me)||Nn(Me)){pn($,ts(void 0));return}}else{if(io(Me))if(P.delete($),ne>Xe){pn($,ts(void 0));return}else return N.add($),pn($,nc(Ee)),zr(Se,Me,!1,{fetcherSubmission:Ee,preventScrollReset:ve});if(Nn(Me)){_t($,W,Me.error);return}}let it=A.navigation.location||A.location,Er=va(e.history,it,_e.signal),wn=f||u,ln=A.navigation.state!=="idle"?is(wn,A.navigation.location,p):A.matches;Pe(ln,"Didn't find any matches after fetcher action");let Pn=++X;ae.set($,Pn);let Oo=nc(Ee,Me.data);A.fetchers.set($,Oo);let{dsMatches:Ai,revalidatingFetchers:Hr}=v1(Er,fe,o,l,e.history,A,ln,Ee,it,i,!1,te,ue,ie,K,N,wn,p,e.patchRoutesOnNavigation!=null,[Ue.route.id,Me]);Hr.filter(bt=>bt.key!==$).forEach(bt=>{let Ii=bt.key,Pu=A.fetchers.get(Ii),$u=nc(void 0,Pu?Pu.data:void 0);A.fetchers.set(Ii,$u),xr(Ii),bt.controller&&P.set(Ii,bt.controller)}),$e({fetchers:new Map(A.fetchers)});let Fr=()=>Hr.forEach(bt=>xr(bt.key));_e.signal.addEventListener("abort",Fr);let{loaderResults:qr,fetcherResults:Le}=await Nu(Ai,Hr,Er,fe);if(_e.signal.aborted)return;if(_e.signal.removeEventListener("abort",Fr),ae.delete($),P.delete($),Hr.forEach(bt=>P.delete(bt.key)),A.fetchers.has($)){let bt=ts(Me.data);A.fetchers.set($,bt)}let kt=Yd(qr);if(kt)return zr(Er,kt.result,!1,{preventScrollReset:ve});if(kt=Yd(Le),kt)return N.add(kt.key),zr(Er,kt.result,!1,{preventScrollReset:ve});let{loaderData:Vr,errors:mn}=C1(A,ln,qr,void 0,Hr,Le);Ns(Pn),A.navigation.state==="loading"&&Pn>ne?(Pe(j,"Expected pending action"),F&&F.abort(),vt(A.navigation.location,{matches:ln,loaderData:Vr,errors:mn,fetchers:new Map(A.fetchers)})):($e({errors:mn,loaderData:T1(A.loaderData,Vr,ln,mn),fetchers:new Map(A.fetchers)}),te=!1)}async function Do($,W,ee,ce,fe,ye,xe,ve,Ee){let Te=A.fetchers.get($);pn($,nc(Ee,Te?Te.data:void 0),{flushSync:xe});let _e=new AbortController,Se=va(e.history,ee,_e.signal);if(ye){let it=await js(ce,new URL(Se.url).pathname,Se.signal,$);if(it.type==="aborted")return;if(it.type==="error"){_t($,W,it.error,{flushSync:xe});return}else if(it.matches)ce=it.matches;else{_t($,W,Qn(404,{pathname:ee}),{flushSync:xe});return}}let Ue=yf(ce,ee);P.set($,_e);let Xe=X,gt=xa(o,l,Se,ce,Ue,i,fe),Me=(await Ri(Se,gt,fe,$))[Ue.route.id];if(P.get($)===_e&&P.delete($),!Se.signal.aborted){if(ie.has($)){pn($,ts(void 0));return}if(io(Me))if(ne>Xe){pn($,ts(void 0));return}else{N.add($),await zr(Se,Me,!1,{preventScrollReset:ve});return}if(Nn(Me)){_t($,W,Me.error);return}pn($,ts(Me.data))}}async function zr($,W,ee,{submission:ce,fetcherSubmission:fe,preventScrollReset:ye,replace:xe}={}){W.response.headers.has("X-Remix-Revalidate")&&(te=!0);let ve=W.response.headers.get("Location");Pe(ve,"Expected a Location header on the redirect Response"),ve=w1(ve,new URL($.url),p);let Ee=Pc(A.location,ve,{_isRedirect:!0});if(n){let gt=!1;if(W.response.headers.has("X-Remix-Reload-Document"))gt=!0;else if(Ov(ve)){const Et=tT(ve,!0);gt=Et.origin!==t.location.origin||Jn(Et.pathname,p)==null}if(gt){xe?t.location.replace(ve):t.location.assign(ve);return}}F=null;let Te=xe===!0||W.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:_e,formAction:Se,formEncType:Ue}=A.navigation;!ce&&!fe&&_e&&Se&&Ue&&(ce=I1(A.navigation));let Xe=ce||fe;if(aM.has(W.response.status)&&Xe&&bn(Xe.formMethod))await wt(Te,Ee,{submission:{...Xe,formAction:ve},preventScrollReset:ye||U,enableViewTransition:ee?H:void 0});else{let gt=Ig(Ee,ce);await wt(Te,Ee,{overrideNavigation:gt,fetcherSubmission:fe,preventScrollReset:ye||U,enableViewTransition:ee?H:void 0})}}async function Ri($,W,ee,ce){let fe,ye={};try{fe=await vM(h,$,W,ce,ee,!1)}catch(xe){return W.filter(ve=>ve.shouldLoad).forEach(ve=>{ye[ve.route.id]={type:"error",error:xe}}),ye}if($.signal.aborted)return ye;for(let[xe,ve]of Object.entries(fe))if(RM(ve)){let Ee=ve.result;ye[xe]={type:"redirect",response:xM(Ee,$,xe,W,p)}}else ye[xe]=await SM(ve);return ye}async function Nu($,W,ee,ce){let fe=Ri(ee,$,ce,null),ye=Promise.all(W.map(async Ee=>{if(Ee.matches&&Ee.match&&Ee.request&&Ee.controller){let _e=(await Ri(Ee.request,Ee.matches,ce,Ee.key))[Ee.match.route.id];return{[Ee.key]:_e}}else return Promise.resolve({[Ee.key]:{type:"error",error:Qn(404,{pathname:Ee.path})}})})),xe=await fe,ve=(await ye).reduce((Ee,Te)=>Object.assign(Ee,Te),{});return{loaderResults:xe,fetcherResults:ve}}function il(){te=!0,K.forEach(($,W)=>{P.has(W)&&ue.add(W),xr(W)})}function pn($,W,ee={}){A.fetchers.set($,W),$e({fetchers:new Map(A.fetchers)},{flushSync:(ee&&ee.flushSync)===!0})}function _t($,W,ee,ce={}){let fe=ss(A.matches,W);Yt($),$e({errors:{[fe.route.id]:ee},fetchers:new Map(A.fetchers)},{flushSync:(ce&&ce.flushSync)===!0})}function sr($){return le.set($,(le.get($)||0)+1),ie.has($)&&ie.delete($),A.fetchers.get($)||lM}function Yt($){let W=A.fetchers.get($);P.has($)&&!(W&&W.state==="loading"&&ae.has($))&&xr($),K.delete($),ae.delete($),N.delete($),ie.delete($),ue.delete($),A.fetchers.delete($)}function pp($){let W=(le.get($)||0)-1;W<=0?(le.delete($),ie.add($)):le.set($,W),$e({fetchers:new Map(A.fetchers)})}function xr($){let W=P.get($);W&&(W.abort(),P.delete($))}function Ou($){for(let W of $){let ee=sr(W),ce=ts(ee.data);A.fetchers.set(W,ce)}}function ks(){let $=[],W=!1;for(let ee of N){let ce=A.fetchers.get(ee);Pe(ce,`Expected fetcher: ${ee}`),ce.state==="loading"&&(N.delete(ee),$.push(ee),W=!0)}return Ou($),W}function Ns($){let W=[];for(let[ee,ce]of ae)if(ce<$){let fe=A.fetchers.get(ee);Pe(fe,`Expected fetcher: ${ee}`),fe.state==="loading"&&(xr(ee),ae.delete(ee),W.push(ee))}return Ou(W),W.length>0}function Br($,W){let ee=A.blockers.get($)||tc;return de.get($)!==W&&de.set($,W),ee}function Os($){A.blockers.delete($),de.delete($)}function wr($,W){let ee=A.blockers.get($)||tc;Pe(ee.state==="unblocked"&&W.state==="blocked"||ee.state==="blocked"&&W.state==="blocked"||ee.state==="blocked"&&W.state==="proceeding"||ee.state==="blocked"&&W.state==="unblocked"||ee.state==="proceeding"&&W.state==="unblocked",`Invalid blocker state transition: ${ee.state} -> ${W.state}`);let ce=new Map(A.blockers);ce.set($,W),$e({blockers:ce})}function Mu({currentLocation:$,nextLocation:W,historyAction:ee}){if(de.size===0)return;de.size>1&&xt(!1,"A router only supports one blocker at a time");let ce=Array.from(de.entries()),[fe,ye]=ce[ce.length-1],xe=A.blockers.get(fe);if(!(xe&&xe.state==="proceeding")&&ye({currentLocation:$,nextLocation:W,historyAction:ee}))return fe}function ko($){let W=Qn(404,{pathname:$}),ee=f||u,{matches:ce,route:fe}=Wd(ee);return{notFoundMatches:ce,route:fe,error:W}}function Lu($,W,ee){if(b=$,I=W,x=ee||null,!T&&A.navigation===Ag){T=!0;let ce=ju(A.location,A.matches);ce!=null&&$e({restoreScrollPosition:ce})}return()=>{b=null,I=null,x=null}}function No($,W){return x&&x($,W.map(ce=>$O(ce,A.loaderData)))||$.key}function Ms($,W){if(b&&I){let ee=No($,W);b[ee]=I()}}function ju($,W){if(b){let ee=No($,W),ce=b[ee];if(typeof ce=="number")return ce}return null}function Ls($,W,ee){if(e.patchRoutesOnNavigation)if($){if(Object.keys($[0].params).length>0)return{active:!0,matches:gf(W,ee,p,!0)}}else return{active:!0,matches:gf(W,ee,p,!0)||[]};return{active:!1,matches:null}}async function js($,W,ee,ce){if(!e.patchRoutesOnNavigation)return{type:"success",matches:$};let fe=$;for(;;){let ye=f==null,xe=f||u,ve=l;try{await e.patchRoutesOnNavigation({signal:ee,path:W,matches:fe,fetcherKey:ce,patch:(_e,Se)=>{ee.aborted||_1(_e,Se,xe,ve,o,!1)}})}catch(_e){return{type:"error",error:_e,partialMatches:fe}}finally{ye&&!ee.aborted&&(u=[...u])}if(ee.aborted)return{type:"aborted"};let Ee=is(xe,W,p);if(Ee)return{type:"success",matches:Ee};let Te=gf(xe,W,p,!0);if(!Te||fe.length===Te.length&&fe.every((_e,Se)=>_e.route.id===Te[Se].route.id))return{type:"success",matches:null};fe=Te}}function sl($){l={},f=$c($,o,void 0,l)}function ol($,W,ee=!1){let ce=f==null;_1($,W,f||u,l,o,ee),ce&&(u=[...u],$e({}))}return O={get basename(){return p},get future(){return y},get state(){return A},get routes(){return u},get window(){return t},initialize:Ae,subscribe:De,enableScrollRestoration:Lu,navigate:mt,fetch:Ds,revalidate:Ln,createHref:$=>e.history.createHref($),encodeLocation:$=>e.history.encodeLocation($),getFetcher:sr,deleteFetcher:pp,dispose:be,getBlocker:Br,deleteBlocker:Os,patchRoutes:ol,_internalFetchControllers:P,_internalSetRoutes:sl,_internalSetStateDoNotUseOrYouWillBreakYourApp($){$e($)}},O}function fM(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Ry(e,t,n,i,o,l){let u,f;if(o){u=[];for(let h of t)if(u.push(h),h.route.id===o){f=h;break}}else u=t,f=t[t.length-1];let p=Dh(i||".",Ih(u),Jn(e.pathname,n)||e.pathname,l==="path");if(i==null&&(p.search=e.search,p.hash=e.hash),(i==null||i===""||i===".")&&f){let h=Mv(p.search);if(f.route.index&&!h)p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index";else if(!f.route.index&&h){let y=new URLSearchParams(p.search),_=y.getAll("index");y.delete("index"),_.filter(b=>b).forEach(b=>y.append("index",b));let v=y.toString();p.search=v?`?${v}`:""}}return n!=="/"&&(p.pathname=XO({basename:n,pathname:p.pathname})),ys(p)}function y1(e,t,n){if(!n||!fM(n))return{path:t};if(n.formMethod&&!AM(n.formMethod))return{path:t,error:Qn(405,{method:n.formMethod})};let i=()=>({path:t,error:Qn(400,{type:"invalid-body"})}),l=(n.formMethod||"get").toUpperCase(),u=hT(t);if(n.body!==void 0){if(n.formEncType==="text/plain"){if(!bn(l))return i();let _=typeof n.body=="string"?n.body:n.body instanceof FormData||n.body instanceof URLSearchParams?Array.from(n.body.entries()).reduce((v,[b,x])=>`${v}${b}=${x}
`,""):String(n.body);return{path:t,submission:{formMethod:l,formAction:u,formEncType:n.formEncType,formData:void 0,json:void 0,text:_}}}else if(n.formEncType==="application/json"){if(!bn(l))return i();try{let _=typeof n.body=="string"?JSON.parse(n.body):n.body;return{path:t,submission:{formMethod:l,formAction:u,formEncType:n.formEncType,formData:void 0,json:_,text:void 0}}}catch{return i()}}}Pe(typeof FormData=="function","FormData is not available in this environment");let f,p;if(n.formData)f=Dy(n.formData),p=n.formData;else if(n.body instanceof FormData)f=Dy(n.body),p=n.body;else if(n.body instanceof URLSearchParams)f=n.body,p=E1(f);else if(n.body==null)f=new URLSearchParams,p=new FormData;else try{f=new URLSearchParams(n.body),p=E1(f)}catch{return i()}let h={formMethod:l,formAction:u,formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:p,json:void 0,text:void 0};if(bn(h.formMethod))return{path:t,submission:h};let y=xi(t);return e&&y.search&&Mv(y.search)&&f.append("index",""),y.search=`?${f}`,{path:ys(y),submission:h}}function v1(e,t,n,i,o,l,u,f,p,h,y,_,v,b,x,I,T,k,M,R){let D=R?Nn(R[1])?R[1].error:R[1].data:void 0,O=o.createURL(l.location),A=o.createURL(p),j;if(y&&l.errors){let V=Object.keys(l.errors)[0];j=u.findIndex(te=>te.route.id===V)}else if(R&&Nn(R[1])){let V=R[0];j=u.findIndex(te=>te.route.id===V)-1}let U=R?R[1].statusCode:void 0,F=U&&U>=400,H={currentUrl:O,currentParams:l.matches[0]?.params||{},nextUrl:A,nextParams:u[0].params,...f,actionResult:D,actionStatus:U},z=u.map((V,te)=>{let{route:ue}=V,P=null;if(j!=null&&te>j?P=!1:ue.lazy?P=!0:ue.loader==null?P=!1:y?P=Ay(ue,l.loaderData,l.errors):hM(l.loaderData,l.matches[te],V)&&(P=!0),P!==null)return Iy(n,i,e,V,h,t,P);let X=F?!1:_||O.pathname+O.search===A.pathname+A.search||O.search!==A.search||pM(l.matches[te],V),ne={...H,defaultShouldRevalidate:X},ae=Pf(V,ne);return Iy(n,i,e,V,h,t,ae,ne)}),G=[];return x.forEach((V,te)=>{if(y||!u.some(le=>le.route.id===V.routeId)||b.has(te))return;let ue=l.fetchers.get(te),P=ue&&ue.state!=="idle"&&ue.data===void 0,X=is(T,V.path,k);if(!X){if(M&&P)return;G.push({key:te,routeId:V.routeId,path:V.path,matches:null,match:null,request:null,controller:null});return}if(I.has(te))return;let ne=yf(X,V.path),ae=new AbortController,N=va(o,V.path,ae.signal),K=null;if(v.has(te))v.delete(te),K=xa(n,i,N,X,ne,h,t);else if(P)_&&(K=xa(n,i,N,X,ne,h,t));else{let le={...H,defaultShouldRevalidate:F?!1:_};Pf(ne,le)&&(K=xa(n,i,N,X,ne,h,t,le))}K&&G.push({key:te,routeId:V.routeId,path:V.path,matches:K,match:ne,request:N,controller:ae})}),{dsMatches:z,revalidatingFetchers:G}}function Ay(e,t,n){if(e.lazy)return!0;if(!e.loader)return!1;let i=t!=null&&e.id in t,o=n!=null&&n[e.id]!==void 0;return!i&&o?!1:typeof e.loader=="function"&&e.loader.hydrate===!0?!0:!i&&!o}function hM(e,t,n){let i=!t||n.route.id!==t.route.id,o=!e.hasOwnProperty(n.route.id);return i||o}function pM(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Pf(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}function _1(e,t,n,i,o,l){let u;if(e){let h=i[e];Pe(h,`No route found to patch children into: routeId = ${e}`),h.children||(h.children=[]),u=h.children}else u=n;let f=[],p=[];if(t.forEach(h=>{let y=u.find(_=>lT(h,_));y?p.push({existingRoute:y,newRoute:h}):f.push(h)}),f.length>0){let h=$c(f,o,[e||"_","patch",String(u?.length||"0")],i);u.push(...h)}if(l&&p.length>0)for(let h=0;h<p.length;h++){let{existingRoute:y,newRoute:_}=p[h],v=y,[b]=$c([_],o,[],{},!0);Object.assign(v,{element:b.element?b.element:v.element,errorElement:b.errorElement?b.errorElement:v.errorElement,hydrateFallbackElement:b.hydrateFallbackElement?b.hydrateFallbackElement:v.hydrateFallbackElement})}}function lT(e,t){return"id"in e&&"id"in t&&e.id===t.id?!0:e.index===t.index&&e.path===t.path&&e.caseSensitive===t.caseSensitive?(!e.children||e.children.length===0)&&(!t.children||t.children.length===0)?!0:e.children.every((n,i)=>t.children?.some(o=>lT(n,o))):!1}var b1=new WeakMap,cT=({key:e,route:t,manifest:n,mapRouteProperties:i})=>{let o=n[t.id];if(Pe(o,"No route found in manifest"),!o.lazy||typeof o.lazy!="object")return;let l=o.lazy[e];if(!l)return;let u=b1.get(o);u||(u={},b1.set(o,u));let f=u[e];if(f)return f;let p=(async()=>{let h=MO(e),_=o[e]!==void 0&&e!=="hasErrorBoundary";if(h)xt(!h,"Route property "+e+" is not a supported lazy route property. This property will be ignored."),u[e]=Promise.resolve();else if(_)xt(!1,`Route "${o.id}" has a static property "${e}" defined. The lazy property will be ignored.`);else{let v=await l();v!=null&&(Object.assign(o,{[e]:v}),Object.assign(o,i(o)))}typeof o.lazy=="object"&&(o.lazy[e]=void 0,Object.values(o.lazy).every(v=>v===void 0)&&(o.lazy=void 0))})();return u[e]=p,p},S1=new WeakMap;function mM(e,t,n,i,o){let l=n[e.id];if(Pe(l,"No route found in manifest"),!e.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof e.lazy=="function"){let y=S1.get(l);if(y)return{lazyRoutePromise:y,lazyHandlerPromise:y};let _=(async()=>{Pe(typeof e.lazy=="function","No lazy route function found");let v=await e.lazy(),b={};for(let x in v){let I=v[x];if(I===void 0)continue;let T=jO(x),M=l[x]!==void 0&&x!=="hasErrorBoundary";T?xt(!T,"Route property "+x+" is not a supported property to be returned from a lazy route function. This property will be ignored."):M?xt(!M,`Route "${l.id}" has a static property "${x}" defined but its lazy function is also returning a value for this property. The lazy route property "${x}" will be ignored.`):b[x]=I}Object.assign(l,b),Object.assign(l,{...i(l),lazy:void 0})})();return S1.set(l,_),_.catch(()=>{}),{lazyRoutePromise:_,lazyHandlerPromise:_}}let u=Object.keys(e.lazy),f=[],p;for(let y of u){if(o&&o.includes(y))continue;let _=cT({key:y,route:e,manifest:n,mapRouteProperties:i});_&&(f.push(_),y===t&&(p=_))}let h=f.length>0?Promise.all(f).then(()=>{}):void 0;return h?.catch(()=>{}),p?.catch(()=>{}),{lazyRoutePromise:h,lazyHandlerPromise:p}}async function x1(e){let t=e.matches.filter(o=>o.shouldLoad),n={};return(await Promise.all(t.map(o=>o.resolve()))).forEach((o,l)=>{n[t[l].route.id]=o}),n}async function gM(e){return e.matches.some(t=>t.route.middleware)?uT(e,()=>x1(e)):x1(e)}function uT(e,t){return yM(e,t,i=>i,CM,n);function n(i,o,l){if(l)return Promise.resolve(Object.assign(l.value,{[o]:{type:"error",result:i}}));{let{matches:u}=e,f=Math.min(u.findIndex(h=>h.route.id===o)||0,u.findIndex(h=>h.unstable_shouldCallHandler())||0),p=ss(u,u[f].route.id).route.id;return Promise.resolve({[p]:{type:"error",result:i}})}}}async function yM(e,t,n,i,o){let{matches:l,request:u,params:f,context:p}=e,h=l.flatMap(_=>_.route.middleware?_.route.middleware.map(v=>[_.route.id,v]):[]);return await dT({request:u,params:f,context:p},h,t,n,i,o)}async function dT(e,t,n,i,o,l,u=0){let{request:f}=e;if(f.signal.aborted)throw f.signal.reason??new Error(`Request aborted: ${f.method} ${f.url}`);let p=t[u];if(!p)return await n();let[h,y]=p,_,v=async()=>{if(_)throw new Error("You may only call `next()` once per middleware");try{return _={value:await dT(e,t,n,i,o,l,u+1)},_.value}catch(b){return _={value:await l(b,h,_)},_.value}};try{let b=await y(e,v),x=b!=null?i(b):void 0;return o(x)?x:_?x??_.value:(_={value:await v()},_.value)}catch(b){return await l(b,h,_)}}function fT(e,t,n,i,o){let l=cT({key:"middleware",route:i.route,manifest:t,mapRouteProperties:e}),u=mM(i.route,bn(n.method)?"action":"loader",t,e,o);return{middleware:l,route:u.lazyRoutePromise,handler:u.lazyHandlerPromise}}function Iy(e,t,n,i,o,l,u,f=null){let p=!1,h=fT(e,t,n,i,o);return{...i,_lazyPromises:h,shouldLoad:u,unstable_shouldRevalidateArgs:f,unstable_shouldCallHandler(y){return p=!0,f?typeof y=="boolean"?Pf(i,{...f,defaultShouldRevalidate:y}):Pf(i,f):u},resolve(y){return p||u||y&&!bn(n.method)&&(i.route.lazy||i.route.loader)?_M({request:n,match:i,lazyHandlerPromise:h?.handler,lazyRoutePromise:h?.route,handlerOverride:y,scopedContext:l}):Promise.resolve({type:"data",result:void 0})}}}function xa(e,t,n,i,o,l,u,f=null){return i.map(p=>p.route.id!==o.route.id?{...p,shouldLoad:!1,unstable_shouldRevalidateArgs:f,unstable_shouldCallHandler:()=>!1,_lazyPromises:fT(e,t,n,p,l),resolve:()=>Promise.resolve({type:"data",result:void 0})}:Iy(e,t,n,p,l,u,!0,f))}async function vM(e,t,n,i,o,l){n.some(h=>h._lazyPromises?.middleware)&&await Promise.all(n.map(h=>h._lazyPromises?.middleware));let u={request:t,params:n[0].params,context:o,matches:n},p=await e({...u,fetcherKey:i,runClientMiddleware:h=>{let y=u;return uT(y,()=>h({...y,fetcherKey:i,runClientMiddleware:()=>{throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler")}}))}});try{await Promise.all(n.flatMap(h=>[h._lazyPromises?.handler,h._lazyPromises?.route]))}catch{}return p}async function _M({request:e,match:t,lazyHandlerPromise:n,lazyRoutePromise:i,handlerOverride:o,scopedContext:l}){let u,f,p=bn(e.method),h=p?"action":"loader",y=_=>{let v,b=new Promise((T,k)=>v=k);f=()=>v(),e.signal.addEventListener("abort",f);let x=T=>typeof _!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${h}" [routeId: ${t.route.id}]`)):_({request:e,params:t.params,context:l},...T!==void 0?[T]:[]),I=(async()=>{try{return{type:"data",result:await(o?o(k=>x(k)):x())}}catch(T){return{type:"error",result:T}}})();return Promise.race([I,b])};try{let _=p?t.route.action:t.route.loader;if(n||i)if(_){let v,[b]=await Promise.all([y(_).catch(x=>{v=x}),n,i]);if(v!==void 0)throw v;u=b}else{await n;let v=p?t.route.action:t.route.loader;if(v)[u]=await Promise.all([y(v),i]);else if(h==="action"){let b=new URL(e.url),x=b.pathname+b.search;throw Qn(405,{method:e.method,pathname:x,routeId:t.route.id})}else return{type:"data",result:void 0}}else if(_)u=await y(_);else{let v=new URL(e.url),b=v.pathname+v.search;throw Qn(404,{pathname:b})}}catch(_){return{type:"error",result:_}}finally{f&&e.signal.removeEventListener("abort",f)}return u}async function bM(e){let t=e.headers.get("Content-Type");return t&&/\bapplication\/json\b/.test(t)?e.body==null?null:e.json():e.text()}async function SM(e){let{result:t,type:n}=e;if(pT(t)){let i;try{i=await bM(t)}catch(o){return{type:"error",error:o}}return n==="error"?{type:"error",error:new jf(t.status,t.statusText,i),statusCode:t.status,headers:t.headers}:{type:"data",data:i,statusCode:t.status,headers:t.headers}}return n==="error"?A1(t)?t.data instanceof Error?{type:"error",error:t.data,statusCode:t.init?.status,headers:t.init?.headers?new Headers(t.init.headers):void 0}:{type:"error",error:new jf(t.init?.status||500,void 0,t.data),statusCode:Uc(t)?t.status:void 0,headers:t.init?.headers?new Headers(t.init.headers):void 0}:{type:"error",error:t,statusCode:Uc(t)?t.status:void 0}:A1(t)?{type:"data",data:t.data,statusCode:t.init?.status,headers:t.init?.headers?new Headers(t.init.headers):void 0}:{type:"data",data:t}}function xM(e,t,n,i,o){let l=e.headers.get("Location");if(Pe(l,"Redirects returned/thrown from loaders/actions must have a Location header"),!Ov(l)){let u=i.slice(0,i.findIndex(f=>f.route.id===n)+1);l=Ry(new URL(t.url),u,o,l),e.headers.set("Location",l)}return e}function w1(e,t,n){if(Ov(e)){let i=e,o=i.startsWith("//")?new URL(t.protocol+i):new URL(i),l=Jn(o.pathname,n)!=null;if(o.origin===t.origin&&l)return o.pathname+o.search+o.hash}return e}function va(e,t,n,i){let o=e.createURL(hT(t)).toString(),l={signal:n};if(i&&bn(i.formMethod)){let{formMethod:u,formEncType:f}=i;l.method=u.toUpperCase(),f==="application/json"?(l.headers=new Headers({"Content-Type":f}),l.body=JSON.stringify(i.json)):f==="text/plain"?l.body=i.text:f==="application/x-www-form-urlencoded"&&i.formData?l.body=Dy(i.formData):l.body=i.formData}return new Request(o,l)}function Dy(e){let t=new URLSearchParams;for(let[n,i]of e.entries())t.append(n,typeof i=="string"?i:i.name);return t}function E1(e){let t=new FormData;for(let[n,i]of e.entries())t.append(n,i);return t}function wM(e,t,n,i=!1,o=!1){let l={},u=null,f,p=!1,h={},y=n&&Nn(n[1])?n[1].error:void 0;return e.forEach(_=>{if(!(_.route.id in t))return;let v=_.route.id,b=t[v];if(Pe(!io(b),"Cannot handle redirect results in processLoaderData"),Nn(b)){let x=b.error;if(y!==void 0&&(x=y,y=void 0),u=u||{},o)u[v]=x;else{let I=ss(e,v);u[I.route.id]==null&&(u[I.route.id]=x)}i||(l[v]=aT),p||(p=!0,f=Uc(b.error)?b.error.status:500),b.headers&&(h[v]=b.headers)}else l[v]=b.data,b.statusCode&&b.statusCode!==200&&!p&&(f=b.statusCode),b.headers&&(h[v]=b.headers)}),y!==void 0&&n&&(u={[n[0]]:y},n[2]&&(l[n[2]]=void 0)),{loaderData:l,errors:u,statusCode:f||200,loaderHeaders:h}}function C1(e,t,n,i,o,l){let{loaderData:u,errors:f}=wM(t,n,i);return o.filter(p=>!p.matches||p.matches.some(h=>h.shouldLoad)).forEach(p=>{let{key:h,match:y,controller:_}=p;if(_&&_.signal.aborted)return;let v=l[h];if(Pe(v,"Did not find corresponding fetcher result"),Nn(v)){let b=ss(e.matches,y?.route.id);f&&f[b.route.id]||(f={...f,[b.route.id]:v.error}),e.fetchers.delete(h)}else if(io(v))Pe(!1,"Unhandled fetcher revalidation redirect");else{let b=ts(v.data);e.fetchers.set(h,b)}}),{loaderData:u,errors:f}}function T1(e,t,n,i){let o=Object.entries(t).filter(([,l])=>l!==aT).reduce((l,[u,f])=>(l[u]=f,l),{});for(let l of n){let u=l.route.id;if(!t.hasOwnProperty(u)&&e.hasOwnProperty(u)&&l.route.loader&&(o[u]=e[u]),i&&i.hasOwnProperty(u))break}return o}function R1(e){return e?Nn(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function ss(e,t){return(t?e.slice(0,e.findIndex(i=>i.route.id===t)+1):[...e]).reverse().find(i=>i.route.hasErrorBoundary===!0)||e[0]}function Wd(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Qn(e,{pathname:t,routeId:n,method:i,type:o,message:l}={}){let u="Unknown Server Error",f="Unknown @remix-run/router error";return e===400?(u="Bad Request",i&&t&&n?f=`You made a ${i} request to "${t}" but did not provide a \`loader\` for route "${n}", so there is no way to handle the request.`:o==="invalid-body"&&(f="Unable to encode submission body")):e===403?(u="Forbidden",f=`Route "${n}" does not match URL "${t}"`):e===404?(u="Not Found",f=`No route matches URL "${t}"`):e===405&&(u="Method Not Allowed",i&&t&&n?f=`You made a ${i.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${n}", so there is no way to handle the request.`:i&&(f=`Invalid request method "${i.toUpperCase()}"`)),new jf(e||500,u,new Error(f),!0)}function Yd(e){let t=Object.entries(e);for(let n=t.length-1;n>=0;n--){let[i,o]=t[n];if(io(o))return{key:i,result:o}}}function hT(e){let t=typeof e=="string"?xi(e):e;return ys({...t,hash:""})}function EM(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function CM(e){return e!=null&&typeof e=="object"&&Object.entries(e).every(([t,n])=>typeof t=="string"&&TM(n))}function TM(e){return e!=null&&typeof e=="object"&&"type"in e&&"result"in e&&(e.type==="data"||e.type==="error")}function RM(e){return pT(e.result)&&oM.has(e.result.status)}function Nn(e){return e.type==="error"}function io(e){return(e&&e.type)==="redirect"}function A1(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function pT(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function AM(e){return sM.has(e.toUpperCase())}function bn(e){return rM.has(e.toUpperCase())}function Mv(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function yf(e,t){let n=typeof t=="string"?xi(t).search:t.search;if(e[e.length-1].route.index&&Mv(n||""))return e[e.length-1];let i=iT(e);return i[i.length-1]}function I1(e){let{formMethod:t,formAction:n,formEncType:i,text:o,formData:l,json:u}=e;if(!(!t||!n||!i)){if(o!=null)return{formMethod:t,formAction:n,formEncType:i,formData:void 0,json:void 0,text:o};if(l!=null)return{formMethod:t,formAction:n,formEncType:i,formData:l,json:void 0,text:void 0};if(u!==void 0)return{formMethod:t,formAction:n,formEncType:i,formData:void 0,json:u,text:void 0}}}function Ig(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function IM(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function nc(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function DM(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function ts(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function kM(e,t){try{let n=e.sessionStorage.getItem(oT);if(n){let i=JSON.parse(n);for(let[o,l]of Object.entries(i||{}))l&&Array.isArray(l)&&t.set(o,new Set(l||[]))}}catch{}}function NM(e,t){if(t.size>0){let n={};for(let[i,o]of t)n[i]=[...o];try{e.sessionStorage.setItem(oT,JSON.stringify(n))}catch(i){xt(!1,`Failed to save applied view transitions in sessionStorage (${i}).`)}}}function OM(){let e,t,n=new Promise((i,o)=>{e=async l=>{i(l);try{await n}catch{}},t=async l=>{o(l);try{await n}catch{}}});return{promise:n,resolve:e,reject:t}}var Eo=C.createContext(null);Eo.displayName="DataRouter";var du=C.createContext(null);du.displayName="DataRouterState";C.createContext(!1);var Lv=C.createContext({isTransitioning:!1});Lv.displayName="ViewTransition";var mT=C.createContext(new Map);mT.displayName="Fetchers";var MM=C.createContext(null);MM.displayName="Await";var Sr=C.createContext(null);Sr.displayName="Navigation";var kh=C.createContext(null);kh.displayName="Location";var rr=C.createContext({outlet:null,matches:[],isDataRoute:!1});rr.displayName="Route";var jv=C.createContext(null);jv.displayName="RouteError";function LM(e,{relative:t}={}){Pe(qa(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=C.useContext(Sr),{hash:o,pathname:l,search:u}=fu(e,{relative:t}),f=l;return n!=="/"&&(f=l==="/"?n:kr([n,l])),i.createHref({pathname:f,search:u,hash:o})}function qa(){return C.useContext(kh)!=null}function jr(){return Pe(qa(),"useLocation() may be used only in the context of a <Router> component."),C.useContext(kh).location}var gT="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function yT(e){C.useContext(Sr).static||C.useLayoutEffect(e)}function Cs(){let{isDataRoute:e}=C.useContext(rr);return e?XM():jM()}function jM(){Pe(qa(),"useNavigate() may be used only in the context of a <Router> component.");let e=C.useContext(Eo),{basename:t,navigator:n}=C.useContext(Sr),{matches:i}=C.useContext(rr),{pathname:o}=jr(),l=JSON.stringify(Ih(i)),u=C.useRef(!1);return yT(()=>{u.current=!0}),C.useCallback((p,h={})=>{if(xt(u.current,gT),!u.current)return;if(typeof p=="number"){n.go(p);return}let y=Dh(p,JSON.parse(l),o,h.relative==="path");e==null&&t!=="/"&&(y.pathname=y.pathname==="/"?t:kr([t,y.pathname])),(h.replace?n.replace:n.push)(y,h.state,h)},[t,n,l,o,e])}var PM=C.createContext(null);function $M(e){let t=C.useContext(rr).outlet;return t&&C.createElement(PM.Provider,{value:e},t)}function UM(){let{matches:e}=C.useContext(rr),t=e[e.length-1];return t?t.params:{}}function fu(e,{relative:t}={}){let{matches:n}=C.useContext(rr),{pathname:i}=jr(),o=JSON.stringify(Ih(n));return C.useMemo(()=>Dh(e,JSON.parse(o),i,t==="path"),[e,o,i,t])}function zM(e,t,n,i,o){Pe(qa(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=C.useContext(Sr),{matches:u}=C.useContext(rr),f=u[u.length-1],p=f?f.params:{},h=f?f.pathname:"/",y=f?f.pathnameBase:"/",_=f&&f.route;{let M=_&&_.path||"";vT(h,!_||M.endsWith("*")||M.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${M==="/"?"*":`${M}/*`}">.`)}let v=jr(),b;b=v;let x=b.pathname||"/",I=x;if(y!=="/"){let M=y.replace(/^\//,"").split("/");I="/"+x.replace(/^\//,"").split("/").slice(M.length).join("/")}let T=is(e,{pathname:I});return xt(_||T!=null,`No routes matched location "${b.pathname}${b.search}${b.hash}" `),xt(T==null||T[T.length-1].route.element!==void 0||T[T.length-1].route.Component!==void 0||T[T.length-1].route.lazy!==void 0,`Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),VM(T&&T.map(M=>Object.assign({},M,{params:Object.assign({},p,M.params),pathname:kr([y,l.encodeLocation?l.encodeLocation(M.pathname).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?y:kr([y,l.encodeLocation?l.encodeLocation(M.pathnameBase).pathname:M.pathnameBase])})),u,n,i,o)}function BM(){let e=KM(),t=Uc(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},u=null;return console.error("Error handled by React Router default ErrorBoundary:",e),u=C.createElement(C.Fragment,null,C.createElement("p",null,"💿 Hey developer 👋"),C.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",C.createElement("code",{style:l},"ErrorBoundary")," or"," ",C.createElement("code",{style:l},"errorElement")," prop on your route.")),C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:o},n):null,u)}var HM=C.createElement(BM,null),FM=class extends C.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.unstable_onError?this.props.unstable_onError(e,t):console.error("React Router caught the following error during render",e)}render(){return this.state.error!==void 0?C.createElement(rr.Provider,{value:this.props.routeContext},C.createElement(jv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function qM({routeContext:e,match:t,children:n}){let i=C.useContext(Eo);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),C.createElement(rr.Provider,{value:e},n)}function VM(e,t=[],n=null,i=null,o=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,u=n?.errors;if(u!=null){let h=l.findIndex(y=>y.route.id&&u?.[y.route.id]!==void 0);Pe(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,h+1))}let f=!1,p=-1;if(n)for(let h=0;h<l.length;h++){let y=l[h];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(p=h),y.route.id){let{loaderData:_,errors:v}=n,b=y.route.loader&&!_.hasOwnProperty(y.route.id)&&(!v||v[y.route.id]===void 0);if(y.route.lazy||b){f=!0,p>=0?l=l.slice(0,p+1):l=[l[0]];break}}}return l.reduceRight((h,y,_)=>{let v,b=!1,x=null,I=null;n&&(v=u&&y.route.id?u[y.route.id]:void 0,x=y.route.errorElement||HM,f&&(p<0&&_===0?(vT("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,I=null):p===_&&(b=!0,I=y.route.hydrateFallbackElement||null)));let T=t.concat(l.slice(0,_+1)),k=()=>{let M;return v?M=x:b?M=I:y.route.Component?M=C.createElement(y.route.Component,null):y.route.element?M=y.route.element:M=h,C.createElement(qM,{match:y,routeContext:{outlet:h,matches:T,isDataRoute:n!=null},children:M})};return n&&(y.route.ErrorBoundary||y.route.errorElement||_===0)?C.createElement(FM,{location:n.location,revalidation:n.revalidation,component:x,error:v,children:k(),routeContext:{outlet:null,matches:T,isDataRoute:!0},unstable_onError:i}):k()},null)}function Pv(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function GM(e){let t=C.useContext(Eo);return Pe(t,Pv(e)),t}function WM(e){let t=C.useContext(du);return Pe(t,Pv(e)),t}function YM(e){let t=C.useContext(rr);return Pe(t,Pv(e)),t}function $v(e){let t=YM(e),n=t.matches[t.matches.length-1];return Pe(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function QM(){return $v("useRouteId")}function KM(){let e=C.useContext(jv),t=WM("useRouteError"),n=$v("useRouteError");return e!==void 0?e:t.errors?.[n]}function XM(){let{router:e}=GM("useNavigate"),t=$v("useNavigate"),n=C.useRef(!1);return yT(()=>{n.current=!0}),C.useCallback(async(o,l={})=>{xt(n.current,gT),n.current&&(typeof o=="number"?e.navigate(o):await e.navigate(o,{fromRouteId:t,...l}))},[e,t])}var D1={};function vT(e,t,n){!t&&!D1[e]&&(D1[e]=!0,xt(!1,n))}var k1={};function N1(e,t){!e&&!k1[t]&&(k1[t]=!0,console.warn(t))}function ZM(e){let t={hasErrorBoundary:e.hasErrorBoundary||e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&(e.element&&xt(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(t,{element:C.createElement(e.Component),Component:void 0})),e.HydrateFallback&&(e.hydrateFallbackElement&&xt(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(t,{hydrateFallbackElement:C.createElement(e.HydrateFallback),HydrateFallback:void 0})),e.ErrorBoundary&&(e.errorElement&&xt(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(t,{errorElement:C.createElement(e.ErrorBoundary),ErrorBoundary:void 0})),t}var JM=["HydrateFallback","hydrateFallbackElement"],e2=class{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=i=>{this.status==="pending"&&(this.status="resolved",t(i))},this.reject=i=>{this.status==="pending"&&(this.status="rejected",n(i))}})}};function t2({router:e,flushSync:t,unstable_onError:n}){let[i,o]=C.useState(e.state),[l,u]=C.useState(),[f,p]=C.useState({isTransitioning:!1}),[h,y]=C.useState(),[_,v]=C.useState(),[b,x]=C.useState(),I=C.useRef(new Map),T=C.useCallback(O=>{o(A=>(O.errors&&n&&Object.entries(O.errors).forEach(([j,U])=>{A.errors?.[j]!==U&&n(U)}),O))},[n]),k=C.useCallback((O,{deletedFetchers:A,flushSync:j,viewTransitionOpts:U})=>{O.fetchers.forEach((H,z)=>{H.data!==void 0&&I.current.set(z,H.data)}),A.forEach(H=>I.current.delete(H)),N1(j===!1||t!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let F=e.window!=null&&e.window.document!=null&&typeof e.window.document.startViewTransition=="function";if(N1(U==null||F,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!U||!F){t&&j?t(()=>T(O)):C.startTransition(()=>T(O));return}if(t&&j){t(()=>{_&&(h&&h.resolve(),_.skipTransition()),p({isTransitioning:!0,flushSync:!0,currentLocation:U.currentLocation,nextLocation:U.nextLocation})});let H=e.window.document.startViewTransition(()=>{t(()=>T(O))});H.finished.finally(()=>{t(()=>{y(void 0),v(void 0),u(void 0),p({isTransitioning:!1})})}),t(()=>v(H));return}_?(h&&h.resolve(),_.skipTransition(),x({state:O,currentLocation:U.currentLocation,nextLocation:U.nextLocation})):(u(O),p({isTransitioning:!0,flushSync:!1,currentLocation:U.currentLocation,nextLocation:U.nextLocation}))},[e.window,t,_,h,T]);C.useLayoutEffect(()=>e.subscribe(k),[e,k]),C.useEffect(()=>{f.isTransitioning&&!f.flushSync&&y(new e2)},[f]),C.useEffect(()=>{if(h&&l&&e.window){let O=l,A=h.promise,j=e.window.document.startViewTransition(async()=>{C.startTransition(()=>T(O)),await A});j.finished.finally(()=>{y(void 0),v(void 0),u(void 0),p({isTransitioning:!1})}),v(j)}},[l,h,e.window,T]),C.useEffect(()=>{h&&l&&i.location.key===l.location.key&&h.resolve()},[h,_,i.location,l]),C.useEffect(()=>{!f.isTransitioning&&b&&(u(b.state),p({isTransitioning:!0,flushSync:!1,currentLocation:b.currentLocation,nextLocation:b.nextLocation}),x(void 0))},[f.isTransitioning,b]);let M=C.useMemo(()=>({createHref:e.createHref,encodeLocation:e.encodeLocation,go:O=>e.navigate(O),push:(O,A,j)=>e.navigate(O,{state:A,preventScrollReset:j?.preventScrollReset}),replace:(O,A,j)=>e.navigate(O,{replace:!0,state:A,preventScrollReset:j?.preventScrollReset})}),[e]),R=e.basename||"/",D=C.useMemo(()=>({router:e,navigator:M,static:!1,basename:R,unstable_onError:n}),[e,M,R,n]);return C.createElement(C.Fragment,null,C.createElement(Eo.Provider,{value:D},C.createElement(du.Provider,{value:i},C.createElement(mT.Provider,{value:I.current},C.createElement(Lv.Provider,{value:f},C.createElement(s2,{basename:R,location:i.location,navigationType:i.historyAction,navigator:M},C.createElement(n2,{routes:e.routes,future:e.future,state:i,unstable_onError:n})))))),null)}var n2=C.memo(r2);function r2({routes:e,future:t,state:n,unstable_onError:i}){return zM(e,void 0,n,i,t)}function Uv({to:e,replace:t,state:n,relative:i}){Pe(qa(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=C.useContext(Sr);xt(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=C.useContext(rr),{pathname:u}=jr(),f=Cs(),p=Dh(e,Ih(l),u,i==="path"),h=JSON.stringify(p);return C.useEffect(()=>{f(JSON.parse(h),{replace:t,state:n,relative:i})},[f,h,i,t,n]),null}function i2(e){return $M(e.context)}function Yn(e){Pe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function s2({basename:e="/",children:t=null,location:n,navigationType:i="POP",navigator:o,static:l=!1}){Pe(!qa(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=e.replace(/^\/*/,"/"),f=C.useMemo(()=>({basename:u,navigator:o,static:l,future:{}}),[u,o,l]);typeof n=="string"&&(n=xi(n));let{pathname:p="/",search:h="",hash:y="",state:_=null,key:v="default"}=n,b=C.useMemo(()=>{let x=Jn(p,u);return x==null?null:{location:{pathname:x,search:h,hash:y,state:_,key:v},navigationType:i}},[u,p,h,y,_,v,i]);return xt(b!=null,`<Router basename="${u}"> is not able to match the URL "${p}${h}${y}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:C.createElement(Sr.Provider,{value:f},C.createElement(kh.Provider,{children:t,value:b}))}function ky(e,t=[]){let n=[];return C.Children.forEach(e,(i,o)=>{if(!C.isValidElement(i))return;let l=[...t,o];if(i.type===C.Fragment){n.push.apply(n,ky(i.props.children,l));return}Pe(i.type===Yn,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Pe(!i.props.index||!i.props.children,"An index route cannot have child routes.");let u={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(u.children=ky(i.props.children,l)),n.push(u)}),n}var o2=ky,vf="get",_f="application/x-www-form-urlencoded";function Nh(e){return e!=null&&typeof e.tagName=="string"}function a2(e){return Nh(e)&&e.tagName.toLowerCase()==="button"}function l2(e){return Nh(e)&&e.tagName.toLowerCase()==="form"}function c2(e){return Nh(e)&&e.tagName.toLowerCase()==="input"}function u2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function d2(e,t){return e.button===0&&(!t||t==="_self")&&!u2(e)}function Ny(e=""){return new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let i=e[n];return t.concat(Array.isArray(i)?i.map(o=>[n,o]):[[n,i]])},[]))}function f2(e,t){let n=Ny(e);return t&&t.forEach((i,o)=>{n.has(o)||t.getAll(o).forEach(l=>{n.append(o,l)})}),n}var Qd=null;function h2(){if(Qd===null)try{new FormData(document.createElement("form"),0),Qd=!1}catch{Qd=!0}return Qd}var p2=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Dg(e){return e!=null&&!p2.has(e)?(xt(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${_f}"`),null):e}function m2(e,t){let n,i,o,l,u;if(l2(e)){let f=e.getAttribute("action");i=f?Jn(f,t):null,n=e.getAttribute("method")||vf,o=Dg(e.getAttribute("enctype"))||_f,l=new FormData(e)}else if(a2(e)||c2(e)&&(e.type==="submit"||e.type==="image")){let f=e.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=e.getAttribute("formaction")||f.getAttribute("action");if(i=p?Jn(p,t):null,n=e.getAttribute("formmethod")||f.getAttribute("method")||vf,o=Dg(e.getAttribute("formenctype"))||Dg(f.getAttribute("enctype"))||_f,l=new FormData(f,e),!h2()){let{name:h,type:y,value:_}=e;if(y==="image"){let v=h?`${h}.`:"";l.append(`${v}x`,"0"),l.append(`${v}y`,"0")}else h&&l.append(h,_)}}else{if(Nh(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=vf,i=null,o=_f,u=e}return l&&o==="text/plain"&&(u=l,l=void 0),{action:i,method:n.toLowerCase(),encType:o,formData:l,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function zv(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function g2(e,t,n){let i=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return i.pathname==="/"?i.pathname=`_root.${n}`:t&&Jn(i.pathname,t)==="/"?i.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${n}`,i}async function y2(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function v2(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function _2(e,t,n){let i=await Promise.all(e.map(async o=>{let l=t.routes[o.route.id];if(l){let u=await y2(l,n);return u.links?u.links():[]}return[]}));return w2(i.flat(1).filter(v2).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function O1(e,t,n,i,o,l){let u=(p,h)=>n[h]?p.route.id!==n[h].route.id:!0,f=(p,h)=>n[h].pathname!==p.pathname||n[h].route.path?.endsWith("*")&&n[h].params["*"]!==p.params["*"];return l==="assets"?t.filter((p,h)=>u(p,h)||f(p,h)):l==="data"?t.filter((p,h)=>{let y=i.routes[p.route.id];if(!y||!y.hasLoader)return!1;if(u(p,h)||f(p,h))return!0;if(p.route.shouldRevalidate){let _=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function b2(e,t,{includeHydrateFallback:n}={}){return S2(e.map(i=>{let o=t.routes[i.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function S2(e){return[...new Set(e)]}function x2(e){let t={},n=Object.keys(e).sort();for(let i of n)t[i]=e[i];return t}function w2(e,t){let n=new Set;return new Set(t),e.reduce((i,o)=>{let l=JSON.stringify(x2(o));return n.has(l)||(n.add(l),i.push({key:l,link:o})),i},[])}function _T(){let e=C.useContext(Eo);return zv(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function E2(){let e=C.useContext(du);return zv(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Bv=C.createContext(void 0);Bv.displayName="FrameworkContext";function bT(){let e=C.useContext(Bv);return zv(e,"You must render this element inside a <HydratedRouter> element"),e}function C2(e,t){let n=C.useContext(Bv),[i,o]=C.useState(!1),[l,u]=C.useState(!1),{onFocus:f,onBlur:p,onMouseEnter:h,onMouseLeave:y,onTouchStart:_}=t,v=C.useRef(null);C.useEffect(()=>{if(e==="render"&&u(!0),e==="viewport"){let I=k=>{k.forEach(M=>{u(M.isIntersecting)})},T=new IntersectionObserver(I,{threshold:.5});return v.current&&T.observe(v.current),()=>{T.disconnect()}}},[e]),C.useEffect(()=>{if(i){let I=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(I)}}},[i]);let b=()=>{o(!0)},x=()=>{o(!1),u(!1)};return n?e!=="intent"?[l,v,{}]:[l,v,{onFocus:rc(f,b),onBlur:rc(p,x),onMouseEnter:rc(h,b),onMouseLeave:rc(y,x),onTouchStart:rc(_,b)}]:[!1,v,{}]}function rc(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function T2({page:e,...t}){let{router:n}=_T(),i=C.useMemo(()=>is(n.routes,e,n.basename),[n.routes,e,n.basename]);return i?C.createElement(A2,{page:e,matches:i,...t}):null}function R2(e){let{manifest:t,routeModules:n}=bT(),[i,o]=C.useState([]);return C.useEffect(()=>{let l=!1;return _2(e,t,n).then(u=>{l||o(u)}),()=>{l=!0}},[e,t,n]),i}function A2({page:e,matches:t,...n}){let i=jr(),{manifest:o,routeModules:l}=bT(),{basename:u}=_T(),{loaderData:f,matches:p}=E2(),h=C.useMemo(()=>O1(e,t,p,o,i,"data"),[e,t,p,o,i]),y=C.useMemo(()=>O1(e,t,p,o,i,"assets"),[e,t,p,o,i]),_=C.useMemo(()=>{if(e===i.pathname+i.search+i.hash)return[];let x=new Set,I=!1;if(t.forEach(k=>{let M=o.routes[k.route.id];!M||!M.hasLoader||(!h.some(R=>R.route.id===k.route.id)&&k.route.id in f&&l[k.route.id]?.shouldRevalidate||M.hasClientLoader?I=!0:x.add(k.route.id))}),x.size===0)return[];let T=g2(e,u,"data");return I&&x.size>0&&T.searchParams.set("_routes",t.filter(k=>x.has(k.route.id)).map(k=>k.route.id).join(",")),[T.pathname+T.search]},[u,f,i,o,h,t,e,l]),v=C.useMemo(()=>b2(y,o),[y,o]),b=R2(y);return C.createElement(C.Fragment,null,_.map(x=>C.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...n})),v.map(x=>C.createElement("link",{key:x,rel:"modulepreload",href:x,...n})),b.map(({key:x,link:I})=>C.createElement("link",{key:x,nonce:n.nonce,...I})))}function I2(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var ST=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{ST&&(window.__reactRouterVersion="7.9.1")}catch{}function D2(e,t){return dM({basename:t?.basename,getContext:t?.getContext,future:t?.future,history:DO({window:t?.window}),hydrationData:k2(),routes:e,mapRouteProperties:ZM,hydrationRouteProperties:JM,dataStrategy:t?.dataStrategy,patchRoutesOnNavigation:t?.patchRoutesOnNavigation,window:t?.window}).initialize()}function k2(){let e=window?.__staticRouterHydrationData;return e&&e.errors&&(e={...e,errors:N2(e.errors)}),e}function N2(e){if(!e)return null;let t=Object.entries(e),n={};for(let[i,o]of t)if(o&&o.__type==="RouteErrorResponse")n[i]=new jf(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){if(o.__subType){let l=window[o.__subType];if(typeof l=="function")try{let u=new l(o.message);u.stack="",n[i]=u}catch{}}if(n[i]==null){let l=new Error(o.message);l.stack="",n[i]=l}}else n[i]=o;return n}var xT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ts=C.forwardRef(function({onClick:t,discover:n="render",prefetch:i="none",relative:o,reloadDocument:l,replace:u,state:f,target:p,to:h,preventScrollReset:y,viewTransition:_,...v},b){let{basename:x}=C.useContext(Sr),I=typeof h=="string"&&xT.test(h),T,k=!1;if(typeof h=="string"&&I&&(T=h,ST))try{let F=new URL(window.location.href),H=h.startsWith("//")?new URL(F.protocol+h):new URL(h),z=Jn(H.pathname,x);H.origin===F.origin&&z!=null?h=z+H.search+H.hash:k=!0}catch{xt(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let M=LM(h,{relative:o}),[R,D,O]=C2(i,v),A=L2(h,{replace:u,state:f,target:p,preventScrollReset:y,relative:o,viewTransition:_});function j(F){t&&t(F),F.defaultPrevented||A(F)}let U=C.createElement("a",{...v,...O,href:T||M,onClick:k||l?t:j,ref:I2(b,D),target:p,"data-discover":!I&&n==="render"?"true":void 0});return R&&!I?C.createElement(C.Fragment,null,U,C.createElement(T2,{page:M})):U});Ts.displayName="Link";var Hv=C.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:i="",end:o=!1,style:l,to:u,viewTransition:f,children:p,...h},y){let _=fu(u,{relative:h.relative}),v=jr(),b=C.useContext(du),{navigator:x,basename:I}=C.useContext(Sr),T=b!=null&&B2(_)&&f===!0,k=x.encodeLocation?x.encodeLocation(_).pathname:_.pathname,M=v.pathname,R=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;n||(M=M.toLowerCase(),R=R?R.toLowerCase():null,k=k.toLowerCase()),R&&I&&(R=Jn(R,I)||R);const D=k!=="/"&&k.endsWith("/")?k.length-1:k.length;let O=M===k||!o&&M.startsWith(k)&&M.charAt(D)==="/",A=R!=null&&(R===k||!o&&R.startsWith(k)&&R.charAt(k.length)==="/"),j={isActive:O,isPending:A,isTransitioning:T},U=O?t:void 0,F;typeof i=="function"?F=i(j):F=[i,O?"active":null,A?"pending":null,T?"transitioning":null].filter(Boolean).join(" ");let H=typeof l=="function"?l(j):l;return C.createElement(Ts,{...h,"aria-current":U,className:F,ref:y,style:H,to:u,viewTransition:f},typeof p=="function"?p(j):p)});Hv.displayName="NavLink";var O2=C.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:i,replace:o,state:l,method:u=vf,action:f,onSubmit:p,relative:h,preventScrollReset:y,viewTransition:_,...v},b)=>{let x=U2(),I=z2(f,{relative:h}),T=u.toLowerCase()==="get"?"get":"post",k=typeof f=="string"&&xT.test(f),M=R=>{if(p&&p(R),R.defaultPrevented)return;R.preventDefault();let D=R.nativeEvent.submitter,O=D?.getAttribute("formmethod")||u;x(D||R.currentTarget,{fetcherKey:t,method:O,navigate:n,replace:o,state:l,relative:h,preventScrollReset:y,viewTransition:_})};return C.createElement("form",{ref:b,method:T,action:I,onSubmit:i?p:M,...v,"data-discover":!k&&e==="render"?"true":void 0})});O2.displayName="Form";function M2(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function wT(e){let t=C.useContext(Eo);return Pe(t,M2(e)),t}function L2(e,{target:t,replace:n,state:i,preventScrollReset:o,relative:l,viewTransition:u}={}){let f=Cs(),p=jr(),h=fu(e,{relative:l});return C.useCallback(y=>{if(d2(y,t)){y.preventDefault();let _=n!==void 0?n:ys(p)===ys(h);f(e,{replace:_,state:i,preventScrollReset:o,relative:l,viewTransition:u})}},[p,f,h,n,i,t,e,o,l,u])}function j2(e){xt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=C.useRef(Ny(e)),n=C.useRef(!1),i=jr(),o=C.useMemo(()=>f2(i.search,n.current?null:t.current),[i.search]),l=Cs(),u=C.useCallback((f,p)=>{const h=Ny(typeof f=="function"?f(new URLSearchParams(o)):f);n.current=!0,l("?"+h,p)},[l,o]);return[o,u]}var P2=0,$2=()=>`__${String(++P2)}__`;function U2(){let{router:e}=wT("useSubmit"),{basename:t}=C.useContext(Sr),n=QM();return C.useCallback(async(i,o={})=>{let{action:l,method:u,encType:f,formData:p,body:h}=m2(i,t);if(o.navigate===!1){let y=o.fetcherKey||$2();await e.fetch(y,n,o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:h,formMethod:o.method||u,formEncType:o.encType||f,flushSync:o.flushSync})}else await e.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:h,formMethod:o.method||u,formEncType:o.encType||f,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[e,t,n])}function z2(e,{relative:t}={}){let{basename:n}=C.useContext(Sr),i=C.useContext(rr);Pe(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),l={...fu(e||".",{relative:t})},u=jr();if(e==null){l.search=u.search;let f=new URLSearchParams(l.search),p=f.getAll("index");if(p.some(y=>y==="")){f.delete("index"),p.filter(_=>_).forEach(_=>f.append("index",_));let y=f.toString();l.search=y?`?${y}`:""}}return(!e||e===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(l.pathname=l.pathname==="/"?n:kr([n,l.pathname])),ys(l)}function B2(e,{relative:t}={}){let n=C.useContext(Lv);Pe(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=wT("useViewTransitionState"),o=fu(e,{relative:t});if(!n.isTransitioning)return!1;let l=Jn(n.currentLocation.pathname,i)||n.currentLocation.pathname,u=Jn(n.nextLocation.pathname,i)||n.nextLocation.pathname;return Lf(o.pathname,u)!=null||Lf(o.pathname,l)!=null}var ET=WC();function H2(e){return C.createElement(t2,{flushSync:ET.flushSync,...e})}var Vt=function(){return Vt=Object.assign||function(t){for(var n,i=1,o=arguments.length;i<o;i++){n=arguments[i];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},Vt.apply(this,arguments)};function zc(e,t,n){if(n||arguments.length===2)for(var i=0,o=t.length,l;i<o;i++)(l||!(i in t))&&(l||(l=Array.prototype.slice.call(t,0,i)),l[i]=t[i]);return e.concat(l||Array.prototype.slice.call(t))}var pt="-ms-",Ec="-moz-",et="-webkit-",CT="comm",Oh="rule",Fv="decl",F2="@import",TT="@keyframes",q2="@layer",RT=Math.abs,qv=String.fromCharCode,Oy=Object.assign;function V2(e,t){return Ft(e,0)^45?(((t<<2^Ft(e,0))<<2^Ft(e,1))<<2^Ft(e,2))<<2^Ft(e,3):0}function AT(e){return e.trim()}function li(e,t){return(e=t.exec(e))?e[0]:e}function ze(e,t,n){return e.replace(t,n)}function bf(e,t,n){return e.indexOf(t,n)}function Ft(e,t){return e.charCodeAt(t)|0}function Ia(e,t,n){return e.slice(t,n)}function Dr(e){return e.length}function IT(e){return e.length}function vc(e,t){return t.push(e),e}function G2(e,t){return e.map(t).join("")}function M1(e,t){return e.filter(function(n){return!li(n,t)})}var Mh=1,Da=1,DT=0,er=0,Mt=0,Va="";function Lh(e,t,n,i,o,l,u,f){return{value:e,root:t,parent:n,type:i,props:o,children:l,line:Mh,column:Da,length:u,return:"",siblings:f}}function ns(e,t){return Oy(Lh("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ha(e){for(;e.root;)e=ns(e.root,{children:[e]});vc(e,e.siblings)}function W2(){return Mt}function Y2(){return Mt=er>0?Ft(Va,--er):0,Da--,Mt===10&&(Da=1,Mh--),Mt}function pr(){return Mt=er<DT?Ft(Va,er++):0,Da++,Mt===10&&(Da=1,Mh++),Mt}function co(){return Ft(Va,er)}function Sf(){return er}function jh(e,t){return Ia(Va,e,t)}function My(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Q2(e){return Mh=Da=1,DT=Dr(Va=e),er=0,[]}function K2(e){return Va="",e}function kg(e){return AT(jh(er-1,Ly(e===91?e+2:e===40?e+1:e)))}function X2(e){for(;(Mt=co())&&Mt<33;)pr();return My(e)>2||My(Mt)>3?"":" "}function Z2(e,t){for(;--t&&pr()&&!(Mt<48||Mt>102||Mt>57&&Mt<65||Mt>70&&Mt<97););return jh(e,Sf()+(t<6&&co()==32&&pr()==32))}function Ly(e){for(;pr();)switch(Mt){case e:return er;case 34:case 39:e!==34&&e!==39&&Ly(Mt);break;case 40:e===41&&Ly(e);break;case 92:pr();break}return er}function J2(e,t){for(;pr()&&e+Mt!==57;)if(e+Mt===84&&co()===47)break;return"/*"+jh(t,er-1)+"*"+qv(e===47?e:pr())}function eL(e){for(;!My(co());)pr();return jh(e,er)}function tL(e){return K2(xf("",null,null,null,[""],e=Q2(e),0,[0],e))}function xf(e,t,n,i,o,l,u,f,p){for(var h=0,y=0,_=u,v=0,b=0,x=0,I=1,T=1,k=1,M=0,R="",D=o,O=l,A=i,j=R;T;)switch(x=M,M=pr()){case 40:if(x!=108&&Ft(j,_-1)==58){bf(j+=ze(kg(M),"&","&\f"),"&\f",RT(h?f[h-1]:0))!=-1&&(k=-1);break}case 34:case 39:case 91:j+=kg(M);break;case 9:case 10:case 13:case 32:j+=X2(x);break;case 92:j+=Z2(Sf()-1,7);continue;case 47:switch(co()){case 42:case 47:vc(nL(J2(pr(),Sf()),t,n,p),p);break;default:j+="/"}break;case 123*I:f[h++]=Dr(j)*k;case 125*I:case 59:case 0:switch(M){case 0:case 125:T=0;case 59+y:k==-1&&(j=ze(j,/\f/g,"")),b>0&&Dr(j)-_&&vc(b>32?j1(j+";",i,n,_-1,p):j1(ze(j," ","")+";",i,n,_-2,p),p);break;case 59:j+=";";default:if(vc(A=L1(j,t,n,h,y,o,f,R,D=[],O=[],_,l),l),M===123)if(y===0)xf(j,t,A,A,D,l,_,f,O);else switch(v===99&&Ft(j,3)===110?100:v){case 100:case 108:case 109:case 115:xf(e,A,A,i&&vc(L1(e,A,A,0,0,o,f,R,o,D=[],_,O),O),o,O,_,f,i?D:O);break;default:xf(j,A,A,A,[""],O,0,f,O)}}h=y=b=0,I=k=1,R=j="",_=u;break;case 58:_=1+Dr(j),b=x;default:if(I<1){if(M==123)--I;else if(M==125&&I++==0&&Y2()==125)continue}switch(j+=qv(M),M*I){case 38:k=y>0?1:(j+="\f",-1);break;case 44:f[h++]=(Dr(j)-1)*k,k=1;break;case 64:co()===45&&(j+=kg(pr())),v=co(),y=_=Dr(R=j+=eL(Sf())),M++;break;case 45:x===45&&Dr(j)==2&&(I=0)}}return l}function L1(e,t,n,i,o,l,u,f,p,h,y,_){for(var v=o-1,b=o===0?l:[""],x=IT(b),I=0,T=0,k=0;I<i;++I)for(var M=0,R=Ia(e,v+1,v=RT(T=u[I])),D=e;M<x;++M)(D=AT(T>0?b[M]+" "+R:ze(R,/&\f/g,b[M])))&&(p[k++]=D);return Lh(e,t,n,o===0?Oh:f,p,h,y,_)}function nL(e,t,n,i){return Lh(e,t,n,CT,qv(W2()),Ia(e,2,-2),0,i)}function j1(e,t,n,i,o){return Lh(e,t,n,Fv,Ia(e,0,i),Ia(e,i+1,-1),i,o)}function kT(e,t,n){switch(V2(e,t)){case 5103:return et+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return et+e+e;case 4789:return Ec+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return et+e+Ec+e+pt+e+e;case 5936:switch(Ft(e,t+11)){case 114:return et+e+pt+ze(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return et+e+pt+ze(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return et+e+pt+ze(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return et+e+pt+e+e;case 6165:return et+e+pt+"flex-"+e+e;case 5187:return et+e+ze(e,/(\w+).+(:[^]+)/,et+"box-$1$2"+pt+"flex-$1$2")+e;case 5443:return et+e+pt+"flex-item-"+ze(e,/flex-|-self/g,"")+(li(e,/flex-|baseline/)?"":pt+"grid-row-"+ze(e,/flex-|-self/g,""))+e;case 4675:return et+e+pt+"flex-line-pack"+ze(e,/align-content|flex-|-self/g,"")+e;case 5548:return et+e+pt+ze(e,"shrink","negative")+e;case 5292:return et+e+pt+ze(e,"basis","preferred-size")+e;case 6060:return et+"box-"+ze(e,"-grow","")+et+e+pt+ze(e,"grow","positive")+e;case 4554:return et+ze(e,/([^-])(transform)/g,"$1"+et+"$2")+e;case 6187:return ze(ze(ze(e,/(zoom-|grab)/,et+"$1"),/(image-set)/,et+"$1"),e,"")+e;case 5495:case 3959:return ze(e,/(image-set\([^]*)/,et+"$1$`$1");case 4968:return ze(ze(e,/(.+:)(flex-)?(.*)/,et+"box-pack:$3"+pt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+et+e+e;case 4200:if(!li(e,/flex-|baseline/))return pt+"grid-column-align"+Ia(e,t)+e;break;case 2592:case 3360:return pt+ze(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(i,o){return t=o,li(i.props,/grid-\w+-end/)})?~bf(e+(n=n[t].value),"span",0)?e:pt+ze(e,"-start","")+e+pt+"grid-row-span:"+(~bf(n,"span",0)?li(n,/\d+/):+li(n,/\d+/)-+li(e,/\d+/))+";":pt+ze(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(i){return li(i.props,/grid-\w+-start/)})?e:pt+ze(ze(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ze(e,/(.+)-inline(.+)/,et+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Dr(e)-1-t>6)switch(Ft(e,t+1)){case 109:if(Ft(e,t+4)!==45)break;case 102:return ze(e,/(.+:)(.+)-([^]+)/,"$1"+et+"$2-$3$1"+Ec+(Ft(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~bf(e,"stretch",0)?kT(ze(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ze(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,o,l,u,f,p,h){return pt+o+":"+l+h+(u?pt+o+"-span:"+(f?p:+p-+l)+h:"")+e});case 4949:if(Ft(e,t+6)===121)return ze(e,":",":"+et)+e;break;case 6444:switch(Ft(e,Ft(e,14)===45?18:11)){case 120:return ze(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+et+(Ft(e,14)===45?"inline-":"")+"box$3$1"+et+"$2$3$1"+pt+"$2box$3")+e;case 100:return ze(e,":",":"+pt)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ze(e,"scroll-","scroll-snap-")+e}return e}function $f(e,t){for(var n="",i=0;i<e.length;i++)n+=t(e[i],i,e,t)||"";return n}function rL(e,t,n,i){switch(e.type){case q2:if(e.children.length)break;case F2:case Fv:return e.return=e.return||e.value;case CT:return"";case TT:return e.return=e.value+"{"+$f(e.children,i)+"}";case Oh:if(!Dr(e.value=e.props.join(",")))return""}return Dr(n=$f(e.children,i))?e.return=e.value+"{"+n+"}":""}function iL(e){var t=IT(e);return function(n,i,o,l){for(var u="",f=0;f<t;f++)u+=e[f](n,i,o,l)||"";return u}}function sL(e){return function(t){t.root||(t=t.return)&&e(t)}}function oL(e,t,n,i){if(e.length>-1&&!e.return)switch(e.type){case Fv:e.return=kT(e.value,e.length,n);return;case TT:return $f([ns(e,{value:ze(e.value,"@","@"+et)})],i);case Oh:if(e.length)return G2(n=e.props,function(o){switch(li(o,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ha(ns(e,{props:[ze(o,/:(read-\w+)/,":"+Ec+"$1")]})),ha(ns(e,{props:[o]})),Oy(e,{props:M1(n,i)});break;case"::placeholder":ha(ns(e,{props:[ze(o,/:(plac\w+)/,":"+et+"input-$1")]})),ha(ns(e,{props:[ze(o,/:(plac\w+)/,":"+Ec+"$1")]})),ha(ns(e,{props:[ze(o,/:(plac\w+)/,pt+"input-$1")]})),ha(ns(e,{props:[o]})),Oy(e,{props:M1(n,i)});break}return""})}}var aL={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},kn={},ka=typeof process<"u"&&kn!==void 0&&(kn.REACT_APP_SC_ATTR||kn.SC_ATTR)||"data-styled",NT="active",OT="data-styled-version",Ph="6.1.19",Vv=`/*!sc*/
`,Uf=typeof window<"u"&&typeof document<"u",lL=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&kn!==void 0&&kn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&kn.REACT_APP_SC_DISABLE_SPEEDY!==""?kn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&kn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&kn!==void 0&&kn.SC_DISABLE_SPEEDY!==void 0&&kn.SC_DISABLE_SPEEDY!==""&&kn.SC_DISABLE_SPEEDY!=="false"&&kn.SC_DISABLE_SPEEDY),cL={},$h=Object.freeze([]),Na=Object.freeze({});function MT(e,t,n){return n===void 0&&(n=Na),e.theme!==n.theme&&e.theme||t||n.theme}var LT=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),uL=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,dL=/(^-|-$)/g;function P1(e){return e.replace(uL,"-").replace(dL,"")}var fL=/(a)(d)/gi,Kd=52,$1=function(e){return String.fromCharCode(e+(e>25?39:97))};function jy(e){var t,n="";for(t=Math.abs(e);t>Kd;t=t/Kd|0)n=$1(t%Kd)+n;return($1(t%Kd)+n).replace(fL,"$1-$2")}var Ng,jT=5381,_a=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},PT=function(e){return _a(jT,e)};function $T(e){return jy(PT(e)>>>0)}function hL(e){return e.displayName||e.name||"Component"}function Og(e){return typeof e=="string"&&!0}var UT=typeof Symbol=="function"&&Symbol.for,zT=UT?Symbol.for("react.memo"):60115,pL=UT?Symbol.for("react.forward_ref"):60112,mL={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},gL={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},BT={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},yL=((Ng={})[pL]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ng[zT]=BT,Ng);function U1(e){return("type"in(t=e)&&t.type.$$typeof)===zT?BT:"$$typeof"in e?yL[e.$$typeof]:mL;var t}var vL=Object.defineProperty,_L=Object.getOwnPropertyNames,z1=Object.getOwnPropertySymbols,bL=Object.getOwnPropertyDescriptor,SL=Object.getPrototypeOf,B1=Object.prototype;function HT(e,t,n){if(typeof t!="string"){if(B1){var i=SL(t);i&&i!==B1&&HT(e,i,n)}var o=_L(t);z1&&(o=o.concat(z1(t)));for(var l=U1(e),u=U1(t),f=0;f<o.length;++f){var p=o[f];if(!(p in gL||n&&n[p]||u&&p in u||l&&p in l)){var h=bL(t,p);try{vL(e,p,h)}catch{}}}}return e}function uo(e){return typeof e=="function"}function Gv(e){return typeof e=="object"&&"styledComponentId"in e}function so(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Py(e,t){if(e.length===0)return"";for(var n=e[0],i=1;i<e.length;i++)n+=e[i];return n}function Bc(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function $y(e,t,n){if(n===void 0&&(n=!1),!n&&!Bc(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var i=0;i<t.length;i++)e[i]=$y(e[i],t[i]);else if(Bc(t))for(var i in t)e[i]=$y(e[i],t[i]);return e}function Wv(e,t){Object.defineProperty(e,"toString",{value:t})}function vs(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var xL=(function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,i=0;i<t;i++)n+=this.groupSizes[i];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,l=o;t>=l;)if((l<<=1)<0)throw vs(16,"".concat(t));this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var u=o;u<l;u++)this.groupSizes[u]=0}for(var f=this.indexOfGroup(t+1),p=(u=0,n.length);u<p;u++)this.tag.insertRule(f,n[u])&&(this.groupSizes[t]++,f++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],i=this.indexOfGroup(t),o=i+n;this.groupSizes[t]=0;for(var l=i;l<o;l++)this.tag.deleteRule(i)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var i=this.groupSizes[t],o=this.indexOfGroup(t),l=o+i,u=o;u<l;u++)n+="".concat(this.tag.getRule(u)).concat(Vv);return n},e})(),wf=new Map,zf=new Map,Ef=1,Xd=function(e){if(wf.has(e))return wf.get(e);for(;zf.has(Ef);)Ef++;var t=Ef++;return wf.set(e,t),zf.set(t,e),t},wL=function(e,t){Ef=t+1,wf.set(e,t),zf.set(t,e)},EL="style[".concat(ka,"][").concat(OT,'="').concat(Ph,'"]'),CL=new RegExp("^".concat(ka,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),TL=function(e,t,n){for(var i,o=n.split(","),l=0,u=o.length;l<u;l++)(i=o[l])&&e.registerName(t,i)},RL=function(e,t){for(var n,i=((n=t.textContent)!==null&&n!==void 0?n:"").split(Vv),o=[],l=0,u=i.length;l<u;l++){var f=i[l].trim();if(f){var p=f.match(CL);if(p){var h=0|parseInt(p[1],10),y=p[2];h!==0&&(wL(y,h),TL(e,y,p[3]),e.getTag().insertRules(h,o)),o.length=0}else o.push(f)}}},H1=function(e){for(var t=document.querySelectorAll(EL),n=0,i=t.length;n<i;n++){var o=t[n];o&&o.getAttribute(ka)!==NT&&(RL(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function AL(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var FT=function(e){var t=document.head,n=e||t,i=document.createElement("style"),o=(function(f){var p=Array.from(f.querySelectorAll("style[".concat(ka,"]")));return p[p.length-1]})(n),l=o!==void 0?o.nextSibling:null;i.setAttribute(ka,NT),i.setAttribute(OT,Ph);var u=AL();return u&&i.setAttribute("nonce",u),n.insertBefore(i,l),i},IL=(function(){function e(t){this.element=FT(t),this.element.appendChild(document.createTextNode("")),this.sheet=(function(n){if(n.sheet)return n.sheet;for(var i=document.styleSheets,o=0,l=i.length;o<l;o++){var u=i[o];if(u.ownerNode===n)return u}throw vs(17)})(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e})(),DL=(function(){function e(t){this.element=FT(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var i=document.createTextNode(n);return this.element.insertBefore(i,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e})(),kL=(function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e})(),F1=Uf,NL={isServer:!Uf,useCSSOMInjection:!lL},Bf=(function(){function e(t,n,i){t===void 0&&(t=Na),n===void 0&&(n={});var o=this;this.options=Vt(Vt({},NL),t),this.gs=n,this.names=new Map(i),this.server=!!t.isServer,!this.server&&Uf&&F1&&(F1=!1,H1(this)),Wv(this,function(){return(function(l){for(var u=l.getTag(),f=u.length,p="",h=function(_){var v=(function(k){return zf.get(k)})(_);if(v===void 0)return"continue";var b=l.names.get(v),x=u.getGroup(_);if(b===void 0||!b.size||x.length===0)return"continue";var I="".concat(ka,".g").concat(_,'[id="').concat(v,'"]'),T="";b!==void 0&&b.forEach(function(k){k.length>0&&(T+="".concat(k,","))}),p+="".concat(x).concat(I,'{content:"').concat(T,'"}').concat(Vv)},y=0;y<f;y++)h(y);return p})(o)})}return e.registerId=function(t){return Xd(t)},e.prototype.rehydrate=function(){!this.server&&Uf&&H1(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Vt(Vt({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=(function(n){var i=n.useCSSOMInjection,o=n.target;return n.isServer?new kL(o):i?new IL(o):new DL(o)})(this.options),new xL(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Xd(t),this.names.has(t))this.names.get(t).add(n);else{var i=new Set;i.add(n),this.names.set(t,i)}},e.prototype.insertRules=function(t,n,i){this.registerName(t,n),this.getTag().insertRules(Xd(t),i)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Xd(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e})(),OL=/&/g,ML=/^\s*\/\/.*$/gm;function qT(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(i){return"".concat(t," ").concat(i)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=qT(n.children,t)),n})}function LL(e){var t,n,i,o=Na,l=o.options,u=l===void 0?Na:l,f=o.plugins,p=f===void 0?$h:f,h=function(v,b,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):v},y=p.slice();y.push(function(v){v.type===Oh&&v.value.includes("&")&&(v.props[0]=v.props[0].replace(OL,n).replace(i,h))}),u.prefix&&y.push(oL),y.push(rL);var _=function(v,b,x,I){b===void 0&&(b=""),x===void 0&&(x=""),I===void 0&&(I="&"),t=I,n=b,i=new RegExp("\\".concat(n,"\\b"),"g");var T=v.replace(ML,""),k=tL(x||b?"".concat(x," ").concat(b," { ").concat(T," }"):T);u.namespace&&(k=qT(k,u.namespace));var M=[];return $f(k,iL(y.concat(sL(function(R){return M.push(R)})))),M};return _.hash=p.length?p.reduce(function(v,b){return b.name||vs(15),_a(v,b.name)},jT).toString():"",_}var jL=new Bf,Uy=LL(),VT=dr.createContext({shouldForwardProp:void 0,styleSheet:jL,stylis:Uy});VT.Consumer;dr.createContext(void 0);function zy(){return C.useContext(VT)}var PL=(function(){function e(t,n){var i=this;this.inject=function(o,l){l===void 0&&(l=Uy);var u=i.name+l.hash;o.hasNameForId(i.id,u)||o.insertRules(i.id,u,l(i.rules,u,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Wv(this,function(){throw vs(12,String(i.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Uy),this.name+t.hash},e})(),$L=function(e){return e>="A"&&e<="Z"};function q1(e){for(var t="",n=0;n<e.length;n++){var i=e[n];if(n===1&&i==="-"&&e[0]==="-")return e;$L(i)?t+="-"+i.toLowerCase():t+=i}return t.startsWith("ms-")?"-"+t:t}var GT=function(e){return e==null||e===!1||e===""},WT=function(e){var t,n,i=[];for(var o in e){var l=e[o];e.hasOwnProperty(o)&&!GT(l)&&(Array.isArray(l)&&l.isCss||uo(l)?i.push("".concat(q1(o),":"),l,";"):Bc(l)?i.push.apply(i,zc(zc(["".concat(o," {")],WT(l),!1),["}"],!1)):i.push("".concat(q1(o),": ").concat((t=o,(n=l)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in aL||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function ds(e,t,n,i){if(GT(e))return[];if(Gv(e))return[".".concat(e.styledComponentId)];if(uo(e)){if(!uo(l=e)||l.prototype&&l.prototype.isReactComponent||!t)return[e];var o=e(t);return ds(o,t,n,i)}var l;return e instanceof PL?n?(e.inject(n,i),[e.getName(i)]):[e]:Bc(e)?WT(e):Array.isArray(e)?Array.prototype.concat.apply($h,e.map(function(u){return ds(u,t,n,i)})):[e.toString()]}function YT(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(uo(n)&&!Gv(n))return!1}return!0}var UL=PT(Ph),zL=(function(){function e(t,n,i){this.rules=t,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&YT(t),this.componentId=n,this.baseHash=_a(UL,n),this.baseStyle=i,Bf.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,i){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=so(o,this.staticRulesId);else{var l=Py(ds(this.rules,t,n,i)),u=jy(_a(this.baseHash,l)>>>0);if(!n.hasNameForId(this.componentId,u)){var f=i(l,".".concat(u),void 0,this.componentId);n.insertRules(this.componentId,u,f)}o=so(o,u),this.staticRulesId=u}else{for(var p=_a(this.baseHash,i.hash),h="",y=0;y<this.rules.length;y++){var _=this.rules[y];if(typeof _=="string")h+=_;else if(_){var v=Py(ds(_,t,n,i));p=_a(p,v+y),h+=v}}if(h){var b=jy(p>>>0);n.hasNameForId(this.componentId,b)||n.insertRules(this.componentId,b,i(h,".".concat(b),void 0,this.componentId)),o=so(o,b)}}return o},e})(),Oa=dr.createContext(void 0);Oa.Consumer;function Yv(){var e=C.useContext(Oa);if(!e)throw vs(18);return e}function BL(e){var t=dr.useContext(Oa),n=C.useMemo(function(){return(function(i,o){if(!i)throw vs(14);if(uo(i)){var l=i(o);return l}if(Array.isArray(i)||typeof i!="object")throw vs(8);return o?Vt(Vt({},o),i):i})(e.theme,t)},[e.theme,t]);return e.children?dr.createElement(Oa.Provider,{value:n},e.children):null}var Mg={};function HL(e,t,n){var i=Gv(e),o=e,l=!Og(e),u=t.attrs,f=u===void 0?$h:u,p=t.componentId,h=p===void 0?(function(D,O){var A=typeof D!="string"?"sc":P1(D);Mg[A]=(Mg[A]||0)+1;var j="".concat(A,"-").concat($T(Ph+A+Mg[A]));return O?"".concat(O,"-").concat(j):j})(t.displayName,t.parentComponentId):p,y=t.displayName,_=y===void 0?(function(D){return Og(D)?"styled.".concat(D):"Styled(".concat(hL(D),")")})(e):y,v=t.displayName&&t.componentId?"".concat(P1(t.displayName),"-").concat(t.componentId):t.componentId||h,b=i&&o.attrs?o.attrs.concat(f).filter(Boolean):f,x=t.shouldForwardProp;if(i&&o.shouldForwardProp){var I=o.shouldForwardProp;if(t.shouldForwardProp){var T=t.shouldForwardProp;x=function(D,O){return I(D,O)&&T(D,O)}}else x=I}var k=new zL(n,v,i?o.componentStyle:void 0);function M(D,O){return(function(A,j,U){var F=A.attrs,H=A.componentStyle,z=A.defaultProps,G=A.foldedComponentIds,V=A.styledComponentId,te=A.target,ue=dr.useContext(Oa),P=zy(),X=A.shouldForwardProp||P.shouldForwardProp,ne=MT(j,ue,z)||Na,ae=(function(me,pe,Ae){for(var be,De=Vt(Vt({},pe),{className:void 0,theme:Ae}),$e=0;$e<me.length;$e+=1){var vt=uo(be=me[$e])?be(De):be;for(var mt in vt)De[mt]=mt==="className"?so(De[mt],vt[mt]):mt==="style"?Vt(Vt({},De[mt]),vt[mt]):vt[mt]}return pe.className&&(De.className=so(De.className,pe.className)),De})(F,j,ne),N=ae.as||te,K={};for(var le in ae)ae[le]===void 0||le[0]==="$"||le==="as"||le==="theme"&&ae.theme===ne||(le==="forwardedAs"?K.as=ae.forwardedAs:X&&!X(le,N)||(K[le]=ae[le]));var ie=(function(me,pe){var Ae=zy(),be=me.generateAndInjectStyles(pe,Ae.styleSheet,Ae.stylis);return be})(H,ae),de=so(G,V);return ie&&(de+=" "+ie),ae.className&&(de+=" "+ae.className),K[Og(N)&&!LT.has(N)?"class":"className"]=de,U&&(K.ref=U),C.createElement(N,K)})(R,D,O)}M.displayName=_;var R=dr.forwardRef(M);return R.attrs=b,R.componentStyle=k,R.displayName=_,R.shouldForwardProp=x,R.foldedComponentIds=i?so(o.foldedComponentIds,o.styledComponentId):"",R.styledComponentId=v,R.target=i?o.target:e,Object.defineProperty(R,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(D){this._foldedDefaultProps=i?(function(O){for(var A=[],j=1;j<arguments.length;j++)A[j-1]=arguments[j];for(var U=0,F=A;U<F.length;U++)$y(O,F[U],!0);return O})({},o.defaultProps,D):D}}),Wv(R,function(){return".".concat(R.styledComponentId)}),l&&HT(R,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),R}function V1(e,t){for(var n=[e[0]],i=0,o=t.length;i<o;i+=1)n.push(t[i],e[i+1]);return n}var G1=function(e){return Object.assign(e,{isCss:!0})};function tn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(uo(e)||Bc(e))return G1(ds(V1($h,zc([e],t,!0))));var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?ds(i):G1(ds(V1(i,t)))}function By(e,t,n){if(n===void 0&&(n=Na),!t)throw vs(1,t);var i=function(o){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];return e(t,n,tn.apply(void 0,zc([o],l,!1)))};return i.attrs=function(o){return By(e,t,Vt(Vt({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},i.withConfig=function(o){return By(e,t,Vt(Vt({},n),o))},i}var QT=function(e){return By(HL,e)},E=QT;LT.forEach(function(e){E[e]=QT(e)});var FL=(function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=YT(t),Bf.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,i,o){var l=o(Py(ds(this.rules,n,i,o)),""),u=this.componentId+t;i.insertRules(u,u,l)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,i,o){t>2&&Bf.registerId(this.componentId+t),this.removeStyles(t,i),this.createStyles(t,n,i,o)},e})();function qL(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var i=tn.apply(void 0,zc([e],t,!1)),o="sc-global-".concat($T(JSON.stringify(i))),l=new FL(i,o),u=function(p){var h=zy(),y=dr.useContext(Oa),_=dr.useRef(h.styleSheet.allocateGSInstance(o)).current;return h.styleSheet.server&&f(_,p,h.styleSheet,y,h.stylis),dr.useLayoutEffect(function(){if(!h.styleSheet.server)return f(_,p,h.styleSheet,y,h.stylis),function(){return l.removeStyles(_,h.styleSheet)}},[_,p,h.styleSheet,y,h.stylis]),null};function f(p,h,y,_,v){if(l.isStatic)l.renderStyles(p,cL,y,v);else{var b=Vt(Vt({},h),{theme:MT(h,_,u.defaultProps)});l.renderStyles(p,b,y,v)}}return dr.memo(u)}const wa=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__,_s=globalThis,Cc="10.11.0";function KT(){return Qv(_s),_s}function Qv(e){const t=e.__SENTRY__=e.__SENTRY__||{};return t.version=t.version||Cc,t[Cc]=t[Cc]||{}}function Kv(e,t,n=_s){const i=n.__SENTRY__=n.__SENTRY__||{},o=i[Cc]=i[Cc]||{};return o[e]||(o[e]=t())}const VL="Sentry Logger ",W1={};function GL(e){if(!("console"in _s))return e();const t=_s.console,n={},i=Object.keys(W1);i.forEach(o=>{const l=W1[o];n[o]=t[o],t[o]=l});try{return e()}finally{i.forEach(o=>{t[o]=n[o]})}}function WL(){Zv().enabled=!0}function YL(){Zv().enabled=!1}function XT(){return Zv().enabled}function QL(...e){Xv("log",...e)}function KL(...e){Xv("warn",...e)}function XL(...e){Xv("error",...e)}function Xv(e,...t){wa&&XT()&&GL(()=>{_s.console[e](`${VL}[${e}]:`,...t)})}function Zv(){return wa?Kv("loggerSettings",()=>({enabled:!1})):{enabled:!1}}const Cf={enable:WL,disable:YL,isEnabled:XT,log:QL,warn:KL,error:XL},ZL=Object.prototype.toString;function JL(e,t){return ZL.call(e)===`[object ${t}]`}function ej(e){return JL(e,"Object")}function tj(e){return!!(e?.then&&typeof e.then=="function")}function nj(e,t=0){return typeof e!="string"||t===0||e.length<=t?e:`${e.slice(0,t)}...`}function rj(e,t,n){try{Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0})}catch{wa&&Cf.log(`Failed to add non-enumerable property "${t}" to object`,e)}}function ij(){const e=_s;return e.crypto||e.msCrypto}function Tc(e=ij()){let t=()=>Math.random()*16;try{if(e?.randomUUID)return e.randomUUID().replace(/-/g,"");e?.getRandomValues&&(t=()=>{const n=new Uint8Array(1);return e.getRandomValues(n),n[0]})}catch{}return("10000000100040008000"+1e11).replace(/[018]/g,n=>(n^(t()&15)>>n/4).toString(16))}const ZT=1e3;function JT(){return Date.now()/ZT}function sj(){const{performance:e}=_s;if(!e?.now||!e.timeOrigin)return JT;const t=e.timeOrigin;return()=>(t+e.now())/ZT}let Y1;function oj(){return(Y1??(Y1=sj()))()}function aj(e,t={}){if(t.user&&(!e.ipAddress&&t.user.ip_address&&(e.ipAddress=t.user.ip_address),!e.did&&!t.did&&(e.did=t.user.id||t.user.email||t.user.username)),e.timestamp=t.timestamp||oj(),t.abnormal_mechanism&&(e.abnormal_mechanism=t.abnormal_mechanism),t.ignoreDuration&&(e.ignoreDuration=t.ignoreDuration),t.sid&&(e.sid=t.sid.length===32?t.sid:Tc()),t.init!==void 0&&(e.init=t.init),!e.did&&t.did&&(e.did=`${t.did}`),typeof t.started=="number"&&(e.started=t.started),e.ignoreDuration)e.duration=void 0;else if(typeof t.duration=="number")e.duration=t.duration;else{const n=e.timestamp-e.started;e.duration=n>=0?n:0}t.release&&(e.release=t.release),t.environment&&(e.environment=t.environment),!e.ipAddress&&t.ipAddress&&(e.ipAddress=t.ipAddress),!e.userAgent&&t.userAgent&&(e.userAgent=t.userAgent),typeof t.errors=="number"&&(e.errors=t.errors),t.status&&(e.status=t.status)}function eR(e,t,n=2){if(!t||typeof t!="object"||n<=0)return t;if(e&&Object.keys(t).length===0)return e;const i={...e};for(const o in t)Object.prototype.hasOwnProperty.call(t,o)&&(i[o]=eR(i[o],t[o],n-1));return i}function Q1(){return Tc()}const Hy="_sentrySpan";function K1(e,t){t?rj(e,Hy,t):delete e[Hy]}function X1(e){return e[Hy]}const lj=100;class fo{constructor(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._attachments=[],this._user={},this._tags={},this._extra={},this._contexts={},this._sdkProcessingMetadata={},this._propagationContext={traceId:Q1(),sampleRand:Math.random()}}clone(){const t=new fo;return t._breadcrumbs=[...this._breadcrumbs],t._tags={...this._tags},t._extra={...this._extra},t._contexts={...this._contexts},this._contexts.flags&&(t._contexts.flags={values:[...this._contexts.flags.values]}),t._user=this._user,t._level=this._level,t._session=this._session,t._transactionName=this._transactionName,t._fingerprint=this._fingerprint,t._eventProcessors=[...this._eventProcessors],t._attachments=[...this._attachments],t._sdkProcessingMetadata={...this._sdkProcessingMetadata},t._propagationContext={...this._propagationContext},t._client=this._client,t._lastEventId=this._lastEventId,K1(t,X1(this)),t}setClient(t){this._client=t}setLastEventId(t){this._lastEventId=t}getClient(){return this._client}lastEventId(){return this._lastEventId}addScopeListener(t){this._scopeListeners.push(t)}addEventProcessor(t){return this._eventProcessors.push(t),this}setUser(t){return this._user=t||{email:void 0,id:void 0,ip_address:void 0,username:void 0},this._session&&aj(this._session,{user:t}),this._notifyScopeListeners(),this}getUser(){return this._user}setTags(t){return this._tags={...this._tags,...t},this._notifyScopeListeners(),this}setTag(t,n){return this._tags={...this._tags,[t]:n},this._notifyScopeListeners(),this}setExtras(t){return this._extra={...this._extra,...t},this._notifyScopeListeners(),this}setExtra(t,n){return this._extra={...this._extra,[t]:n},this._notifyScopeListeners(),this}setFingerprint(t){return this._fingerprint=t,this._notifyScopeListeners(),this}setLevel(t){return this._level=t,this._notifyScopeListeners(),this}setTransactionName(t){return this._transactionName=t,this._notifyScopeListeners(),this}setContext(t,n){return n===null?delete this._contexts[t]:this._contexts[t]=n,this._notifyScopeListeners(),this}setSession(t){return t?this._session=t:delete this._session,this._notifyScopeListeners(),this}getSession(){return this._session}update(t){if(!t)return this;const n=typeof t=="function"?t(this):t,i=n instanceof fo?n.getScopeData():ej(n)?t:void 0,{tags:o,extra:l,user:u,contexts:f,level:p,fingerprint:h=[],propagationContext:y}=i||{};return this._tags={...this._tags,...o},this._extra={...this._extra,...l},this._contexts={...this._contexts,...f},u&&Object.keys(u).length&&(this._user=u),p&&(this._level=p),h.length&&(this._fingerprint=h),y&&(this._propagationContext=y),this}clear(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._session=void 0,K1(this,void 0),this._attachments=[],this.setPropagationContext({traceId:Q1(),sampleRand:Math.random()}),this._notifyScopeListeners(),this}addBreadcrumb(t,n){const i=typeof n=="number"?n:lj;if(i<=0)return this;const o={timestamp:JT(),...t,message:t.message?nj(t.message,2048):t.message};return this._breadcrumbs.push(o),this._breadcrumbs.length>i&&(this._breadcrumbs=this._breadcrumbs.slice(-i),this._client?.recordDroppedEvent("buffer_overflow","log_item")),this._notifyScopeListeners(),this}getLastBreadcrumb(){return this._breadcrumbs[this._breadcrumbs.length-1]}clearBreadcrumbs(){return this._breadcrumbs=[],this._notifyScopeListeners(),this}addAttachment(t){return this._attachments.push(t),this}clearAttachments(){return this._attachments=[],this}getScopeData(){return{breadcrumbs:this._breadcrumbs,attachments:this._attachments,contexts:this._contexts,tags:this._tags,extra:this._extra,user:this._user,level:this._level,fingerprint:this._fingerprint||[],eventProcessors:this._eventProcessors,propagationContext:this._propagationContext,sdkProcessingMetadata:this._sdkProcessingMetadata,transactionName:this._transactionName,span:X1(this)}}setSDKProcessingMetadata(t){return this._sdkProcessingMetadata=eR(this._sdkProcessingMetadata,t,2),this}setPropagationContext(t){return this._propagationContext=t,this}getPropagationContext(){return this._propagationContext}captureException(t,n){const i=n?.event_id||Tc();if(!this._client)return wa&&Cf.warn("No client configured on scope - will not capture exception!"),i;const o=new Error("Sentry syntheticException");return this._client.captureException(t,{originalException:t,syntheticException:o,...n,event_id:i},this),i}captureMessage(t,n,i){const o=i?.event_id||Tc();if(!this._client)return wa&&Cf.warn("No client configured on scope - will not capture message!"),o;const l=new Error(t);return this._client.captureMessage(t,n,{originalException:t,syntheticException:l,...i,event_id:o},this),o}captureEvent(t,n){const i=n?.event_id||Tc();return this._client?(this._client.captureEvent(t,{...n,event_id:i},this),i):(wa&&Cf.warn("No client configured on scope - will not capture event!"),i)}_notifyScopeListeners(){this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach(t=>{t(this)}),this._notifyingListeners=!1)}}function cj(){return Kv("defaultCurrentScope",()=>new fo)}function uj(){return Kv("defaultIsolationScope",()=>new fo)}class dj{constructor(t,n){let i;t?i=t:i=new fo;let o;n?o=n:o=new fo,this._stack=[{scope:i}],this._isolationScope=o}withScope(t){const n=this._pushScope();let i;try{i=t(n)}catch(o){throw this._popScope(),o}return tj(i)?i.then(o=>(this._popScope(),o),o=>{throw this._popScope(),o}):(this._popScope(),i)}getClient(){return this.getStackTop().client}getScope(){return this.getStackTop().scope}getIsolationScope(){return this._isolationScope}getStackTop(){return this._stack[this._stack.length-1]}_pushScope(){const t=this.getScope().clone();return this._stack.push({client:this.getClient(),scope:t}),t}_popScope(){return this._stack.length<=1?!1:!!this._stack.pop()}}function Ma(){const e=KT(),t=Qv(e);return t.stack=t.stack||new dj(cj(),uj())}function fj(e){return Ma().withScope(e)}function hj(e,t){const n=Ma();return n.withScope(()=>(n.getStackTop().scope=e,t(e)))}function Z1(e){return Ma().withScope(()=>e(Ma().getIsolationScope()))}function pj(){return{withIsolationScope:Z1,withScope:fj,withSetScope:hj,withSetIsolationScope:(e,t)=>Z1(t),getCurrentScope:()=>Ma().getScope(),getIsolationScope:()=>Ma().getIsolationScope()}}function mj(e){const t=Qv(e);return t.acs?t.acs:pj()}function tR(){const e=KT();return mj(e).getCurrentScope()}function Or(e,t){return tR().captureException(e,void 0)}function Jv(e,t){const n=typeof t=="string"?t:void 0,i=typeof t!="string"?{captureContext:t}:void 0;return tR().captureMessage(e,n,i)}const gj=()=>{};var J1={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nR={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he=function(e,t){if(!e)throw Ga(t)},Ga=function(e){return new Error("Firebase Database ("+nR.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let o=e.charCodeAt(i);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(e.charCodeAt(++i)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},yj=function(e){const t=[];let n=0,i=0;for(;n<e.length;){const o=e[n++];if(o<128)t[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=e[n++];t[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=e[n++],u=e[n++],f=e[n++],p=((o&7)<<18|(l&63)<<12|(u&63)<<6|f&63)-65536;t[i++]=String.fromCharCode(55296+(p>>10)),t[i++]=String.fromCharCode(56320+(p&1023))}else{const l=e[n++],u=e[n++];t[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|u&63)}}return t.join("")},e_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<e.length;o+=3){const l=e[o],u=o+1<e.length,f=u?e[o+1]:0,p=o+2<e.length,h=p?e[o+2]:0,y=l>>2,_=(l&3)<<4|f>>4;let v=(f&15)<<2|h>>6,b=h&63;p||(b=64,u||(v=64)),i.push(n[y],n[_],n[v],n[b])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(rR(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):yj(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<e.length;){const l=n[e.charAt(o++)],f=o<e.length?n[e.charAt(o)]:0;++o;const h=o<e.length?n[e.charAt(o)]:64;++o;const _=o<e.length?n[e.charAt(o)]:64;if(++o,l==null||f==null||h==null||_==null)throw new vj;const v=l<<2|f>>4;if(i.push(v),h!==64){const b=f<<4&240|h>>2;if(i.push(b),_!==64){const x=h<<6&192|_;i.push(x)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class vj extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const iR=function(e){const t=rR(e);return e_.encodeByteArray(t,!0)},Hf=function(e){return iR(e).replace(/\./g,"")},Ff=function(e){try{return e_.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _j(e){return sR(void 0,e)}function sR(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)!t.hasOwnProperty(n)||!bj(n)||(e[n]=sR(e[n],t[n]));return e}function bj(e){return e!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sj(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xj=()=>Sj().__FIREBASE_DEFAULTS__,wj=()=>{if(typeof process>"u"||typeof J1>"u")return;const e=J1.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Ej=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Ff(e[1]);return t&&JSON.parse(t)},t_=()=>{try{return gj()||xj()||wj()||Ej()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},oR=e=>t_()?.emulatorHosts?.[e],Cj=e=>{const t=oR(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),i]:[t.substring(0,n),i]},aR=()=>t_()?.config,lR=e=>t_()?.[`_${e}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function cR(e){return(await fetch(e,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tj(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",o=e.iat||0,l=e.sub||e.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u={iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...e};return[Hf(JSON.stringify(n)),Hf(JSON.stringify(u)),""].join(".")}const Rc={};function Rj(){const e={prod:[],emulator:[]};for(const t of Object.keys(Rc))Rc[t]?e.emulator.push(t):e.prod.push(t);return e}function Aj(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}let ew=!1;function uR(e,t){if(typeof window>"u"||typeof document>"u"||!Wa(window.location.host)||Rc[e]===t||Rc[e]||ew)return;Rc[e]=t;function n(v){return`__firebase__banner__${v}`}const i="__firebase__banner",l=Rj().prod.length>0;function u(){const v=document.getElementById(i);v&&v.remove()}function f(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function p(v,b){v.setAttribute("width","24"),v.setAttribute("id",b),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function h(){const v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{ew=!0,u()},v}function y(v,b){v.setAttribute("id",b),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function _(){const v=Aj(i),b=n("text"),x=document.getElementById(b)||document.createElement("span"),I=n("learnmore"),T=document.getElementById(I)||document.createElement("a"),k=n("preprendIcon"),M=document.getElementById(k)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){const R=v.element;f(R),y(T,I);const D=h();p(M,k),R.append(M,x,T,D),document.body.appendChild(R)}l?(x.innerText="Preview backend disconnected.",M.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(M.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",_):_()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function n_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(hn())}function Ij(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Dj(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function dR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kj(){const e=hn();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Nj(){return nR.NODE_ADMIN===!0}function fR(){try{return typeof indexedDB=="object"}catch{return!1}}function hR(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{t(o.error?.message||"")}}catch(n){t(n)}})}function Oj(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mj="FirebaseError";class wi extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name=Mj,Object.setPrototypeOf(this,wi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Co.prototype.create)}}class Co{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},o=`${this.service}/${t}`,l=this.errors[t],u=l?Lj(l,i):"Error",f=`${this.serviceName}: ${u} (${o}).`;return new wi(o,f,i)}}function Lj(e,t){return e.replace(jj,(n,i)=>{const o=t[i];return o!=null?String(o):`<${i}?>`})}const jj=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hc(e){return JSON.parse(e)}function $t(e){return JSON.stringify(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR=function(e){let t={},n={},i={},o="";try{const l=e.split(".");t=Hc(Ff(l[0])||""),n=Hc(Ff(l[1])||""),o=l[2],i=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:i,signature:o}},Pj=function(e){const t=pR(e),n=t.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},$j=function(e){const t=pR(e).claims;return typeof t=="object"&&t.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function La(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function Fy(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function qf(e,t,n){const i={};for(const o in e)Object.prototype.hasOwnProperty.call(e,o)&&(i[o]=t.call(n,e[o],o,e));return i}function ho(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const o of n){if(!i.includes(o))return!1;const l=e[o],u=t[o];if(tw(l)&&tw(u)){if(!ho(l,u))return!1}else if(l!==u)return!1}for(const o of i)if(!n.includes(o))return!1;return!0}function tw(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(o=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function _c(e){const t={};return e.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");t[decodeURIComponent(o)]=decodeURIComponent(l)}}),t}function bc(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uj{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,n){n||(n=0);const i=this.W_;if(typeof t=="string")for(let _=0;_<16;_++)i[_]=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),n+=4;else for(let _=0;_<16;_++)i[_]=t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3],n+=4;for(let _=16;_<80;_++){const v=i[_-3]^i[_-8]^i[_-14]^i[_-16];i[_]=(v<<1|v>>>31)&4294967295}let o=this.chain_[0],l=this.chain_[1],u=this.chain_[2],f=this.chain_[3],p=this.chain_[4],h,y;for(let _=0;_<80;_++){_<40?_<20?(h=f^l&(u^f),y=1518500249):(h=l^u^f,y=1859775393):_<60?(h=l&u|f&(l|u),y=2400959708):(h=l^u^f,y=3395469782);const v=(o<<5|o>>>27)+h+p+y+i[_]&4294967295;p=f,f=u,u=(l<<30|l>>>2)&4294967295,l=o,o=v}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(t,n){if(t==null)return;n===void 0&&(n=t.length);const i=n-this.blockSize;let o=0;const l=this.buf_;let u=this.inbuf_;for(;o<n;){if(u===0)for(;o<=i;)this.compress_(t,o),o+=this.blockSize;if(typeof t=="string"){for(;o<n;)if(l[u]=t.charCodeAt(o),++u,++o,u===this.blockSize){this.compress_(l),u=0;break}}else for(;o<n;)if(l[u]=t[o],++u,++o,u===this.blockSize){this.compress_(l),u=0;break}}this.inbuf_=u,this.total_+=n}digest(){const t=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let o=0;o<5;o++)for(let l=24;l>=0;l-=8)t[i]=this.chain_[o]>>l&255,++i;return t}}function zj(e,t){const n=new Bj(e,t);return n.subscribe.bind(n)}class Bj{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,i){let o;if(t===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Hj(t,["next","error","complete"])?o=t:o={next:t,error:n,complete:i},o.next===void 0&&(o.next=Lg),o.error===void 0&&(o.error=Lg),o.complete===void 0&&(o.complete=Lg);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Hj(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Lg(){}function Uh(e,t){return`${e} failed: ${t} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fj=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let o=e.charCodeAt(i);if(o>=55296&&o<=56319){const l=o-55296;i++,he(i<e.length,"Surrogate pair missing trail surrogate.");const u=e.charCodeAt(i)-56320;o=65536+(l<<10)+u}o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):o<65536?(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},zh=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(e){return e&&e._delegate?e._delegate:e}class _r{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qj{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const i=new hu;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t?.identifier),i=t?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Gj(t))try{this.getOrInitializeService({instanceIdentifier:to})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(t=to){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=to){return this.instances.has(t)}getOptions(t=to){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[l,u]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&u.resolve(o)}return o}onInit(t,n){const i=this.normalizeInstanceIdentifier(n),o=this.onInitCallbacks.get(i)??new Set;o.add(t),this.onInitCallbacks.set(i,o);const l=this.instances.get(i);return l&&t(l,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const i=this.onInitCallbacks.get(n);if(i)for(const o of i)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Vj(t),options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=to){return this.component?this.component.multipleInstances?t:to:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vj(e){return e===to?void 0:e}function Gj(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wj{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new qj(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lt;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(lt||(lt={}));const Yj={debug:lt.DEBUG,verbose:lt.VERBOSE,info:lt.INFO,warn:lt.WARN,error:lt.ERROR,silent:lt.SILENT},Qj=lt.INFO,Kj={[lt.DEBUG]:"log",[lt.VERBOSE]:"log",[lt.INFO]:"info",[lt.WARN]:"warn",[lt.ERROR]:"error"},Xj=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),o=Kj[t];if(o)console[o](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class r_{constructor(t){this.name=t,this._logLevel=Qj,this._logHandler=Xj,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in lt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Yj[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,lt.DEBUG,...t),this._logHandler(this,lt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,lt.VERBOSE,...t),this._logHandler(this,lt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,lt.INFO,...t),this._logHandler(this,lt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,lt.WARN,...t),this._logHandler(this,lt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,lt.ERROR,...t),this._logHandler(this,lt.ERROR,...t)}}const Zj=(e,t)=>t.some(n=>e instanceof n);let nw,rw;function Jj(){return nw||(nw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function e4(){return rw||(rw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mR=new WeakMap,qy=new WeakMap,gR=new WeakMap,jg=new WeakMap,i_=new WeakMap;function t4(e){const t=new Promise((n,i)=>{const o=()=>{e.removeEventListener("success",l),e.removeEventListener("error",u)},l=()=>{n(mi(e.result)),o()},u=()=>{i(e.error),o()};e.addEventListener("success",l),e.addEventListener("error",u)});return t.then(n=>{n instanceof IDBCursor&&mR.set(n,e)}).catch(()=>{}),i_.set(t,e),t}function n4(e){if(qy.has(e))return;const t=new Promise((n,i)=>{const o=()=>{e.removeEventListener("complete",l),e.removeEventListener("error",u),e.removeEventListener("abort",u)},l=()=>{n(),o()},u=()=>{i(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",l),e.addEventListener("error",u),e.addEventListener("abort",u)});qy.set(e,t)}let Vy={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return qy.get(e);if(t==="objectStoreNames")return e.objectStoreNames||gR.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mi(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function r4(e){Vy=e(Vy)}function i4(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const i=e.call(Pg(this),t,...n);return gR.set(i,t.sort?t.sort():[t]),mi(i)}:e4().includes(e)?function(...t){return e.apply(Pg(this),t),mi(mR.get(this))}:function(...t){return mi(e.apply(Pg(this),t))}}function s4(e){return typeof e=="function"?i4(e):(e instanceof IDBTransaction&&n4(e),Zj(e,Jj())?new Proxy(e,Vy):e)}function mi(e){if(e instanceof IDBRequest)return t4(e);if(jg.has(e))return jg.get(e);const t=s4(e);return t!==e&&(jg.set(e,t),i_.set(t,e)),t}const Pg=e=>i_.get(e);function Bh(e,t,{blocked:n,upgrade:i,blocking:o,terminated:l}={}){const u=indexedDB.open(e,t),f=mi(u);return i&&u.addEventListener("upgradeneeded",p=>{i(mi(u.result),p.oldVersion,p.newVersion,mi(u.transaction),p)}),n&&u.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),f.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",h=>o(h.oldVersion,h.newVersion,h))}).catch(()=>{}),f}function $g(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",i=>t(i.oldVersion,i)),mi(n).then(()=>{})}const o4=["get","getKey","getAll","getAllKeys","count"],a4=["put","add","delete","clear"],Ug=new Map;function iw(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ug.get(t))return Ug.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,o=a4.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(o||o4.includes(n)))return;const l=async function(u,...f){const p=this.transaction(u,o?"readwrite":"readonly");let h=p.store;return i&&(h=h.index(f.shift())),(await Promise.all([h[n](...f),o&&p.done]))[0]};return Ug.set(t,l),l}r4(e=>({...e,get:(t,n,i)=>iw(t,n)||e.get(t,n,i),has:(t,n)=>!!iw(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l4{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(c4(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function c4(e){return e.getComponent()?.type==="VERSION"}const Gy="@firebase/app",sw="0.14.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi=new r_("@firebase/app"),u4="@firebase/app-compat",d4="@firebase/analytics-compat",f4="@firebase/analytics",h4="@firebase/app-check-compat",p4="@firebase/app-check",m4="@firebase/auth",g4="@firebase/auth-compat",y4="@firebase/database",v4="@firebase/data-connect",_4="@firebase/database-compat",b4="@firebase/functions",S4="@firebase/functions-compat",x4="@firebase/installations",w4="@firebase/installations-compat",E4="@firebase/messaging",C4="@firebase/messaging-compat",T4="@firebase/performance",R4="@firebase/performance-compat",A4="@firebase/remote-config",I4="@firebase/remote-config-compat",D4="@firebase/storage",k4="@firebase/storage-compat",N4="@firebase/firestore",O4="@firebase/ai",M4="@firebase/firestore-compat",L4="firebase",j4="12.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy="[DEFAULT]",P4={[Gy]:"fire-core",[u4]:"fire-core-compat",[f4]:"fire-analytics",[d4]:"fire-analytics-compat",[p4]:"fire-app-check",[h4]:"fire-app-check-compat",[m4]:"fire-auth",[g4]:"fire-auth-compat",[y4]:"fire-rtdb",[v4]:"fire-data-connect",[_4]:"fire-rtdb-compat",[b4]:"fire-fn",[S4]:"fire-fn-compat",[x4]:"fire-iid",[w4]:"fire-iid-compat",[E4]:"fire-fcm",[C4]:"fire-fcm-compat",[T4]:"fire-perf",[R4]:"fire-perf-compat",[A4]:"fire-rc",[I4]:"fire-rc-compat",[D4]:"fire-gcs",[k4]:"fire-gcs-compat",[N4]:"fire-fst",[M4]:"fire-fst-compat",[O4]:"fire-vertex","fire-js":"fire-js",[L4]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf=new Map,$4=new Map,Yy=new Map;function ow(e,t){try{e.container.addComponent(t)}catch(n){vi.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Mr(e){const t=e.name;if(Yy.has(t))return vi.debug(`There were multiple attempts to register component ${t}.`),!1;Yy.set(t,e);for(const n of Vf.values())ow(n,e);for(const n of $4.values())ow(n,e);return!0}function Qa(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function On(e){return e==null?!1:e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U4={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fs=new Co("app","Firebase",U4);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z4{constructor(t,n,i){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new _r("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw fs.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka=j4;function yR(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const i={name:Wy,automaticDataCollectionEnabled:!0,...t},o=i.name;if(typeof o!="string"||!o)throw fs.create("bad-app-name",{appName:String(o)});if(n||(n=aR()),!n)throw fs.create("no-options");const l=Vf.get(o);if(l){if(ho(n,l.options)&&ho(i,l.config))return l;throw fs.create("duplicate-app",{appName:o})}const u=new Wj(o);for(const p of Yy.values())u.addComponent(p);const f=new z4(n,i,u);return Vf.set(o,f),f}function s_(e=Wy){const t=Vf.get(e);if(!t&&e===Wy&&aR())return yR();if(!t)throw fs.create("no-app",{appName:e});return t}function Zn(e,t,n){let i=P4[e]??e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),l=t.match(/\s|\//);if(o||l){const u=[`Unable to register library "${i}" with version "${t}":`];o&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&l&&u.push("and"),l&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),vi.warn(u.join(" "));return}Mr(new _r(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B4="firebase-heartbeat-database",H4=1,Fc="firebase-heartbeat-store";let zg=null;function vR(){return zg||(zg=Bh(B4,H4,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Fc)}catch(n){console.warn(n)}}}}).catch(e=>{throw fs.create("idb-open",{originalErrorMessage:e.message})})),zg}async function F4(e){try{const n=(await vR()).transaction(Fc),i=await n.objectStore(Fc).get(_R(e));return await n.done,i}catch(t){if(t instanceof wi)vi.warn(t.message);else{const n=fs.create("idb-get",{originalErrorMessage:t?.message});vi.warn(n.message)}}}async function aw(e,t){try{const i=(await vR()).transaction(Fc,"readwrite");await i.objectStore(Fc).put(t,_R(e)),await i.done}catch(n){if(n instanceof wi)vi.warn(n.message);else{const i=fs.create("idb-set",{originalErrorMessage:n?.message});vi.warn(i.message)}}}function _R(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q4=1024,V4=30;class G4{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Y4(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=lw();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats.length>V4){const o=Q4(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){vi.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=lw(),{heartbeatsToSend:n,unsentEntries:i}=W4(this._heartbeatsCache.heartbeats),o=Hf(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return vi.warn(t),""}}}function lw(){return new Date().toISOString().substring(0,10)}function W4(e,t=q4){const n=[];let i=e.slice();for(const o of e){const l=n.find(u=>u.agent===o.agent);if(l){if(l.dates.push(o.date),cw(n)>t){l.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),cw(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Y4{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fR()?hR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await F4(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const i=await this.read();return aw(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const i=await this.read();return aw(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function cw(e){return Hf(JSON.stringify({version:2,heartbeats:e})).length}function Q4(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let i=1;i<e.length;i++)e[i].date<n&&(n=e[i].date,t=i);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K4(e){Mr(new _r("platform-logger",t=>new l4(t),"PRIVATE")),Mr(new _r("heartbeat",t=>new G4(t),"PRIVATE")),Zn(Gy,sw,e),Zn(Gy,sw,"esm2020"),Zn("fire-js","")}K4("");const bR="@firebase/installations",o_="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SR=1e4,xR=`w:${o_}`,wR="FIS_v2",X4="https://firebaseinstallations.googleapis.com/v1",Z4=3600*1e3,J4="installations",eP="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tP={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},po=new Co(J4,eP,tP);function ER(e){return e instanceof wi&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CR({projectId:e}){return`${X4}/projects/${e}/installations`}function TR(e){return{token:e.token,requestStatus:2,expiresIn:rP(e.expiresIn),creationTime:Date.now()}}async function RR(e,t){const i=(await t.json()).error;return po.create("request-failed",{requestName:e,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function AR({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function nP(e,{refreshToken:t}){const n=AR(e);return n.append("Authorization",iP(t)),n}async function IR(e){const t=await e();return t.status>=500&&t.status<600?e():t}function rP(e){return Number(e.replace("s","000"))}function iP(e){return`${wR} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sP({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const i=CR(e),o=AR(e),l=t.getImmediate({optional:!0});if(l){const h=await l.getHeartbeatsHeader();h&&o.append("x-firebase-client",h)}const u={fid:n,authVersion:wR,appId:e.appId,sdkVersion:xR},f={method:"POST",headers:o,body:JSON.stringify(u)},p=await IR(()=>fetch(i,f));if(p.ok){const h=await p.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:TR(h.authToken)}}else throw await RR("Create Installation",p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DR(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oP(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP=/^[cdef][\w-]{21}$/,Qy="";function lP(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=cP(e);return aP.test(n)?n:Qy}catch{return Qy}}function cP(e){return oP(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hh(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kR=new Map;function NR(e,t){const n=Hh(e);OR(n,t),uP(n,t)}function OR(e,t){const n=kR.get(e);if(n)for(const i of n)i(t)}function uP(e,t){const n=dP();n&&n.postMessage({key:e,fid:t}),fP()}let oo=null;function dP(){return!oo&&"BroadcastChannel"in self&&(oo=new BroadcastChannel("[Firebase] FID Change"),oo.onmessage=e=>{OR(e.data.key,e.data.fid)}),oo}function fP(){kR.size===0&&oo&&(oo.close(),oo=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hP="firebase-installations-database",pP=1,mo="firebase-installations-store";let Bg=null;function a_(){return Bg||(Bg=Bh(hP,pP,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(mo)}}})),Bg}async function Gf(e,t){const n=Hh(e),o=(await a_()).transaction(mo,"readwrite"),l=o.objectStore(mo),u=await l.get(n);return await l.put(t,n),await o.done,(!u||u.fid!==t.fid)&&NR(e,t.fid),t}async function MR(e){const t=Hh(e),i=(await a_()).transaction(mo,"readwrite");await i.objectStore(mo).delete(t),await i.done}async function Fh(e,t){const n=Hh(e),o=(await a_()).transaction(mo,"readwrite"),l=o.objectStore(mo),u=await l.get(n),f=t(u);return f===void 0?await l.delete(n):await l.put(f,n),await o.done,f&&(!u||u.fid!==f.fid)&&NR(e,f.fid),f}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l_(e){let t;const n=await Fh(e.appConfig,i=>{const o=mP(i),l=gP(e,o);return t=l.registrationPromise,l.installationEntry});return n.fid===Qy?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function mP(e){const t=e||{fid:lP(),registrationStatus:0};return LR(t)}function gP(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(po.create("app-offline"));return{installationEntry:t,registrationPromise:o}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=yP(e,n);return{installationEntry:n,registrationPromise:i}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:vP(e)}:{installationEntry:t}}async function yP(e,t){try{const n=await sP(e,t);return Gf(e.appConfig,n)}catch(n){throw ER(n)&&n.customData.serverCode===409?await MR(e.appConfig):await Gf(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function vP(e){let t=await uw(e.appConfig);for(;t.registrationStatus===1;)await DR(100),t=await uw(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await l_(e);return i||n}return t}function uw(e){return Fh(e,t=>{if(!t)throw po.create("installation-not-found");return LR(t)})}function LR(e){return _P(e)?{fid:e.fid,registrationStatus:0}:e}function _P(e){return e.registrationStatus===1&&e.registrationTime+SR<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bP({appConfig:e,heartbeatServiceProvider:t},n){const i=SP(e,n),o=nP(e,n),l=t.getImmediate({optional:!0});if(l){const h=await l.getHeartbeatsHeader();h&&o.append("x-firebase-client",h)}const u={installation:{sdkVersion:xR,appId:e.appId}},f={method:"POST",headers:o,body:JSON.stringify(u)},p=await IR(()=>fetch(i,f));if(p.ok){const h=await p.json();return TR(h)}else throw await RR("Generate Auth Token",p)}function SP(e,{fid:t}){return`${CR(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c_(e,t=!1){let n;const i=await Fh(e.appConfig,l=>{if(!jR(l))throw po.create("not-registered");const u=l.authToken;if(!t&&EP(u))return l;if(u.requestStatus===1)return n=xP(e,t),l;{if(!navigator.onLine)throw po.create("app-offline");const f=TP(l);return n=wP(e,f),f}});return n?await n:i.authToken}async function xP(e,t){let n=await dw(e.appConfig);for(;n.authToken.requestStatus===1;)await DR(100),n=await dw(e.appConfig);const i=n.authToken;return i.requestStatus===0?c_(e,t):i}function dw(e){return Fh(e,t=>{if(!jR(t))throw po.create("not-registered");const n=t.authToken;return RP(n)?{...t,authToken:{requestStatus:0}}:t})}async function wP(e,t){try{const n=await bP(e,t),i={...t,authToken:n};return await Gf(e.appConfig,i),n}catch(n){if(ER(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await MR(e.appConfig);else{const i={...t,authToken:{requestStatus:0}};await Gf(e.appConfig,i)}throw n}}function jR(e){return e!==void 0&&e.registrationStatus===2}function EP(e){return e.requestStatus===2&&!CP(e)}function CP(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Z4}function TP(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}function RP(e){return e.requestStatus===1&&e.requestTime+SR<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AP(e){const t=e,{installationEntry:n,registrationPromise:i}=await l_(t);return i?i.catch(console.error):c_(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IP(e,t=!1){const n=e;return await DP(n),(await c_(n,t)).token}async function DP(e){const{registrationPromise:t}=await l_(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kP(e){if(!e||!e.options)throw Hg("App Configuration");if(!e.name)throw Hg("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Hg(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Hg(e){return po.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR="installations",NP="installations-internal",OP=e=>{const t=e.getProvider("app").getImmediate(),n=kP(t),i=Qa(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},MP=e=>{const t=e.getProvider("app").getImmediate(),n=Qa(t,PR).getImmediate();return{getId:()=>AP(n),getToken:o=>IP(n,o)}};function LP(){Mr(new _r(PR,OP,"PUBLIC")),Mr(new _r(NP,MP,"PRIVATE"))}LP();Zn(bR,o_);Zn(bR,o_,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jP="/firebase-messaging-sw.js",PP="/firebase-cloud-messaging-push-scope",$R="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",$P="https://fcmregistrations.googleapis.com/v1",UR="google.c.a.c_id",UP="google.c.a.c_l",zP="google.c.a.ts",BP="google.c.a.e",fw=1e4;var hw;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(hw||(hw={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var qc;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(qc||(qc={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function HP(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(n),o=new Uint8Array(i.length);for(let l=0;l<i.length;++l)o[l]=i.charCodeAt(l);return o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg="fcm_token_details_db",FP=5,pw="fcm_token_object_Store";async function qP(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(l=>l.name).includes(Fg))return null;let t=null;return(await Bh(Fg,FP,{upgrade:async(i,o,l,u)=>{if(o<2||!i.objectStoreNames.contains(pw))return;const f=u.objectStore(pw),p=await f.index("fcmSenderId").get(e);if(await f.clear(),!!p){if(o===2){const h=p;if(!h.auth||!h.p256dh||!h.endpoint)return;t={token:h.fcmToken,createTime:h.createTime??Date.now(),subscriptionOptions:{auth:h.auth,p256dh:h.p256dh,endpoint:h.endpoint,swScope:h.swScope,vapidKey:typeof h.vapidKey=="string"?h.vapidKey:ci(h.vapidKey)}}}else if(o===3){const h=p;t={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:ci(h.auth),p256dh:ci(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:ci(h.vapidKey)}}}else if(o===4){const h=p;t={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:ci(h.auth),p256dh:ci(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:ci(h.vapidKey)}}}}}})).close(),await $g(Fg),await $g("fcm_vapid_details_db"),await $g("undefined"),VP(t)?t:null}function VP(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GP="firebase-messaging-database",WP=1,Vc="firebase-messaging-store";let qg=null;function zR(){return qg||(qg=Bh(GP,WP,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Vc)}}})),qg}async function YP(e){const t=BR(e),i=await(await zR()).transaction(Vc).objectStore(Vc).get(t);if(i)return i;{const o=await qP(e.appConfig.senderId);if(o)return await u_(e,o),o}}async function u_(e,t){const n=BR(e),o=(await zR()).transaction(Vc,"readwrite");return await o.objectStore(Vc).put(t,n),await o.done,t}function BR({appConfig:e}){return e.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QP={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},on=new Co("messaging","Messaging",QP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KP(e,t){const n=await f_(e),i=HR(t),o={method:"POST",headers:n,body:JSON.stringify(i)};let l;try{l=await(await fetch(d_(e.appConfig),o)).json()}catch(u){throw on.create("token-subscribe-failed",{errorInfo:u?.toString()})}if(l.error){const u=l.error.message;throw on.create("token-subscribe-failed",{errorInfo:u})}if(!l.token)throw on.create("token-subscribe-no-token");return l.token}async function XP(e,t){const n=await f_(e),i=HR(t.subscriptionOptions),o={method:"PATCH",headers:n,body:JSON.stringify(i)};let l;try{l=await(await fetch(`${d_(e.appConfig)}/${t.token}`,o)).json()}catch(u){throw on.create("token-update-failed",{errorInfo:u?.toString()})}if(l.error){const u=l.error.message;throw on.create("token-update-failed",{errorInfo:u})}if(!l.token)throw on.create("token-update-no-token");return l.token}async function ZP(e,t){const i={method:"DELETE",headers:await f_(e)};try{const l=await(await fetch(`${d_(e.appConfig)}/${t}`,i)).json();if(l.error){const u=l.error.message;throw on.create("token-unsubscribe-failed",{errorInfo:u})}}catch(o){throw on.create("token-unsubscribe-failed",{errorInfo:o?.toString()})}}function d_({projectId:e}){return`${$P}/projects/${e}/registrations`}async function f_({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function HR({p256dh:e,auth:t,endpoint:n,vapidKey:i}){const o={web:{endpoint:n,auth:t,p256dh:e}};return i!==$R&&(o.web.applicationPubKey=i),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JP=10080*60*1e3;async function e$(e){const t=await n$(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:ci(t.getKey("auth")),p256dh:ci(t.getKey("p256dh"))},i=await YP(e.firebaseDependencies);if(i){if(r$(i.subscriptionOptions,n))return Date.now()>=i.createTime+JP?t$(e,{token:i.token,createTime:Date.now(),subscriptionOptions:n}):i.token;try{await ZP(e.firebaseDependencies,i.token)}catch(o){console.warn(o)}return mw(e.firebaseDependencies,n)}else return mw(e.firebaseDependencies,n)}async function t$(e,t){try{const n=await XP(e.firebaseDependencies,t),i={...t,token:n,createTime:Date.now()};return await u_(e.firebaseDependencies,i),n}catch(n){throw n}}async function mw(e,t){const i={token:await KP(e,t),createTime:Date.now(),subscriptionOptions:t};return await u_(e,i),i.token}async function n$(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:HP(t)})}function r$(e,t){const n=t.vapidKey===e.vapidKey,i=t.endpoint===e.endpoint,o=t.auth===e.auth,l=t.p256dh===e.p256dh;return n&&i&&o&&l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gw(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return i$(t,e),s$(t,e),o$(t,e),t}function i$(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const i=t.notification.body;i&&(e.notification.body=i);const o=t.notification.image;o&&(e.notification.image=o);const l=t.notification.icon;l&&(e.notification.icon=l)}function s$(e,t){t.data&&(e.data=t.data)}function o$(e,t){if(!t.fcmOptions&&!t.notification?.click_action)return;e.fcmOptions={};const n=t.fcmOptions?.link??t.notification?.click_action;n&&(e.fcmOptions.link=n);const i=t.fcmOptions?.analytics_label;i&&(e.fcmOptions.analyticsLabel=i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a$(e){return typeof e=="object"&&!!e&&UR in e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l$(e){if(!e||!e.options)throw Vg("App Configuration Object");if(!e.name)throw Vg("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const i of t)if(!n[i])throw Vg(i);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Vg(e){return on.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c${constructor(t,n,i){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=l$(t);this.firebaseDependencies={app:t,appConfig:o,installations:n,analyticsProvider:i}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u$(e){try{e.swRegistration=await navigator.serviceWorker.register(jP,{scope:PP}),e.swRegistration.update().catch(()=>{}),await d$(e.swRegistration)}catch(t){throw on.create("failed-service-worker-registration",{browserErrorMessage:t?.message})}}async function d$(e){return new Promise((t,n)=>{const i=setTimeout(()=>n(new Error(`Service worker not registered after ${fw} ms`)),fw),o=e.installing||e.waiting;e.active?(clearTimeout(i),t()):o?o.onstatechange=l=>{l.target?.state==="activated"&&(o.onstatechange=null,clearTimeout(i),t())}:(clearTimeout(i),n(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f$(e,t){if(!t&&!e.swRegistration&&await u$(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw on.create("invalid-sw-registration");e.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h$(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=$R)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FR(e,t){if(!navigator)throw on.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw on.create("permission-blocked");return await h$(e,t?.vapidKey),await f$(e,t?.serviceWorkerRegistration),e$(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p$(e,t,n){const i=m$(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(i,{message_id:n[UR],message_name:n[UP],message_time:n[zP],message_device_time:Math.floor(Date.now()/1e3)})}function m$(e){switch(e){case qc.NOTIFICATION_CLICKED:return"notification_open";case qc.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g$(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===qc.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(gw(n)):e.onMessageHandler.next(gw(n)));const i=n.data;a$(i)&&i[BP]==="1"&&await p$(e,n.messageType,i)}const yw="@firebase/messaging",vw="0.12.23";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y$=e=>{const t=new c$(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>g$(t,n)),t},v$=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:i=>FR(t,i)}};function _$(){Mr(new _r("messaging",y$,"PUBLIC")),Mr(new _r("messaging-internal",v$,"PRIVATE")),Zn(yw,vw),Zn(yw,vw,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b$(){try{await hR()}catch{return!1}return typeof window<"u"&&fR()&&Oj()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S$(e,t){if(!navigator)throw on.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x$(e=s_()){return b$().then(t=>{if(!t)throw on.create("unsupported-browser")},t=>{throw on.create("indexed-db-unsupported")}),Qa(Gt(e),"messaging").getImmediate()}async function w$(e,t){return e=Gt(e),FR(e,t)}function E$(e,t){return e=Gt(e),S$(e,t)}_$();const qh=e=>{try{return e()}catch(t){throw t}};var C$="firebase",T$="12.2.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zn(C$,T$,"app");const R$={apiKey:"AIzaSyAMtG6b23AqO2WbJ2ad8SKMXD1X4tfALtc",authDomain:"peloton-alerts.firebaseapp.com",projectId:"peloton-alerts",storageBucket:"peloton-alerts.appspot.com",messagingSenderId:"331185140393",appId:"1:331185140393:web:5f49c5c60b8b162914efb8",measurementId:"G-R2QRE36WEQ",databaseURL:"https://peloton-alerts-default-rtdb.firebaseio.com/"},Ac=qh(()=>yR(R$)),ba=qh(()=>x$(Ac)),A$="serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window,qR=async()=>{if(!("serviceWorker"in navigator))throw new Error("Service workers are not supported");return navigator.serviceWorker.register("/peloton-reservations/messaging-sw.js",{type:"classic"})};let Gg=qR();const _w=async()=>{if(!ba)throw new Error("Messaging is not set up");if(!A$)throw new Error("Browser environment does not allow messaging");let e;try{e=await Gg,console.log("Registered service worker successfully")}catch(t){console.error("Failed to register service worker. Trying again...",t),Gg=qR(),e=await Gg}return w$(ba,{vapidKey:"BO9hF0_u2BKehXtAWTxtm7RtvIUGIEA5GT_jGycvCfUEW0yZZkLvtRB1Y8R_5KKBEODsLufyDkcBXn9rx5dHY5g",serviceWorkerRegistration:e})};function Zt(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var I$=typeof Symbol=="function"&&Symbol.observable||"@@observable",bw=I$,Wg=()=>Math.random().toString(36).substring(7).split("").join("."),D$={INIT:`@@redux/INIT${Wg()}`,REPLACE:`@@redux/REPLACE${Wg()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Wg()}`},Wf=D$;function bs(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function VR(e,t,n){if(typeof e!="function")throw new Error(Zt(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Zt(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Zt(1));return n(VR)(e,t)}let i=e,o=t,l=new Map,u=l,f=0,p=!1;function h(){u===l&&(u=new Map,l.forEach((T,k)=>{u.set(k,T)}))}function y(){if(p)throw new Error(Zt(3));return o}function _(T){if(typeof T!="function")throw new Error(Zt(4));if(p)throw new Error(Zt(5));let k=!0;h();const M=f++;return u.set(M,T),function(){if(k){if(p)throw new Error(Zt(6));k=!1,h(),u.delete(M),l=null}}}function v(T){if(!bs(T))throw new Error(Zt(7));if(typeof T.type>"u")throw new Error(Zt(8));if(typeof T.type!="string")throw new Error(Zt(17));if(p)throw new Error(Zt(9));try{p=!0,o=i(o,T)}finally{p=!1}return(l=u).forEach(M=>{M()}),T}function b(T){if(typeof T!="function")throw new Error(Zt(10));i=T,v({type:Wf.REPLACE})}function x(){const T=_;return{subscribe(k){if(typeof k!="object"||k===null)throw new Error(Zt(11));function M(){const D=k;D.next&&D.next(y())}return M(),{unsubscribe:T(M)}},[bw](){return this}}}return v({type:Wf.INIT}),{dispatch:v,subscribe:_,getState:y,replaceReducer:b,[bw]:x}}function k$(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:Wf.INIT})>"u")throw new Error(Zt(12));if(typeof n(void 0,{type:Wf.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Zt(13))})}function GR(e){const t=Object.keys(e),n={};for(let l=0;l<t.length;l++){const u=t[l];typeof e[u]=="function"&&(n[u]=e[u])}const i=Object.keys(n);let o;try{k$(n)}catch(l){o=l}return function(u={},f){if(o)throw o;let p=!1;const h={};for(let y=0;y<i.length;y++){const _=i[y],v=n[_],b=u[_],x=v(b,f);if(typeof x>"u")throw f&&f.type,new Error(Zt(14));h[_]=x,p=p||x!==b}return p=p||i.length!==Object.keys(u).length,p?h:u}}function Yf(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...i)=>t(n(...i)))}function N$(...e){return t=>(n,i)=>{const o=t(n,i);let l=()=>{throw new Error(Zt(15))};const u={getState:o.getState,dispatch:(p,...h)=>l(p,...h)},f=e.map(p=>p(u));return l=Yf(...f)(o.dispatch),{...o,dispatch:l}}}function WR(e){return bs(e)&&"type"in e&&typeof e.type=="string"}var h_=Symbol.for("immer-nothing"),Ic=Symbol.for("immer-draftable"),xn=Symbol.for("immer-state");function en(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var ja=Object.getPrototypeOf;function Lr(e){return!!e&&!!e[xn]}function br(e){return e?YR(e)||Array.isArray(e)||!!e[Ic]||!!e.constructor?.[Ic]||Xa(e)||pu(e):!1}var O$=Object.prototype.constructor.toString(),Sw=new WeakMap;function YR(e){if(!e||typeof e!="object")return!1;const t=Object.getPrototypeOf(e);if(t===null||t===Object.prototype)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;if(n===Object)return!0;if(typeof n!="function")return!1;let i=Sw.get(n);return i===void 0&&(i=Function.toString.call(n),Sw.set(n,i)),i===O$}function M$(e){return Lr(e)||en(15,e),e[xn].base_}function Gc(e,t,n=!0){go(e)===0?(n?Reflect.ownKeys(e):Object.keys(e)).forEach(o=>{t(o,e[o],e)}):e.forEach((i,o)=>t(o,i,e))}function go(e){const t=e[xn];return t?t.type_:Array.isArray(e)?1:Xa(e)?2:pu(e)?3:0}function Wc(e,t){return go(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Yg(e,t){return go(e)===2?e.get(t):e[t]}function QR(e,t,n){const i=go(e);i===2?e.set(t,n):i===3?e.add(n):e[t]=n}function L$(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function Xa(e){return e instanceof Map}function pu(e){return e instanceof Set}function no(e){return e.copy_||e.base_}function Ky(e,t){if(Xa(e))return new Map(e);if(pu(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const n=YR(e);if(t===!0||t==="class_only"&&!n){const i=Object.getOwnPropertyDescriptors(e);delete i[xn];let o=Reflect.ownKeys(i);for(let l=0;l<o.length;l++){const u=o[l],f=i[u];f.writable===!1&&(f.writable=!0,f.configurable=!0),(f.get||f.set)&&(i[u]={configurable:!0,writable:!0,enumerable:f.enumerable,value:e[u]})}return Object.create(ja(e),i)}else{const i=ja(e);if(i!==null&&n)return{...e};const o=Object.create(i);return Object.assign(o,e)}}function p_(e,t=!1){return Vh(e)||Lr(e)||!br(e)||(go(e)>1&&Object.defineProperties(e,{set:Zd,add:Zd,clear:Zd,delete:Zd}),Object.freeze(e),t&&Object.values(e).forEach(n=>p_(n,!0))),e}function j$(){en(2)}var Zd={value:j$};function Vh(e){return e===null||typeof e!="object"?!0:Object.isFrozen(e)}var Xy={};function yo(e){const t=Xy[e];return t||en(0,e),t}function P$(e,t){Xy[e]||(Xy[e]=t)}var Yc;function KR(){return Yc}function $$(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function xw(e,t){t&&(yo("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Zy(e){Jy(e),e.drafts_.forEach(U$),e.drafts_=null}function Jy(e){e===Yc&&(Yc=e.parent_)}function ww(e){return Yc=$$(Yc,e)}function U$(e){const t=e[xn];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function Ew(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return e!==void 0&&e!==n?(n[xn].modified_&&(Zy(t),en(4)),br(e)&&(e=Qf(t,e),t.parent_||Kf(t,e)),t.patches_&&yo("Patches").generateReplacementPatches_(n[xn].base_,e,t.patches_,t.inversePatches_)):e=Qf(t,n,[]),Zy(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==h_?e:void 0}function Qf(e,t,n){if(Vh(t))return t;const i=e.immer_.shouldUseStrictIteration(),o=t[xn];if(!o)return Gc(t,(l,u)=>Cw(e,o,t,l,u,n),i),t;if(o.scope_!==e)return t;if(!o.modified_)return Kf(e,o.base_,!0),o.base_;if(!o.finalized_){o.finalized_=!0,o.scope_.unfinalizedDrafts_--;const l=o.copy_;let u=l,f=!1;o.type_===3&&(u=new Set(l),l.clear(),f=!0),Gc(u,(p,h)=>Cw(e,o,l,p,h,n,f),i),Kf(e,l,!1),n&&e.patches_&&yo("Patches").generatePatches_(o,n,e.patches_,e.inversePatches_)}return o.copy_}function Cw(e,t,n,i,o,l,u){if(o==null||typeof o!="object"&&!u)return;const f=Vh(o);if(!(f&&!u)){if(Lr(o)){const p=l&&t&&t.type_!==3&&!Wc(t.assigned_,i)?l.concat(i):void 0,h=Qf(e,o,p);if(QR(n,i,h),Lr(h))e.canAutoFreeze_=!1;else return}else u&&n.add(o);if(br(o)&&!f){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1||t&&t.base_&&t.base_[i]===o&&f)return;Qf(e,o),(!t||!t.scope_.parent_)&&typeof i!="symbol"&&(Xa(n)?n.has(i):Object.prototype.propertyIsEnumerable.call(n,i))&&Kf(e,o)}}}function Kf(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&p_(t,n)}function z$(e,t){const n=Array.isArray(e),i={type_:n?1:0,scope_:t?t.scope_:KR(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=i,l=m_;n&&(o=[i],l=Qc);const{revoke:u,proxy:f}=Proxy.revocable(o,l);return i.draft_=f,i.revoke_=u,f}var m_={get(e,t){if(t===xn)return e;const n=no(e);if(!Wc(n,t))return B$(e,n,t);const i=n[t];return e.finalized_||!br(i)?i:i===Qg(e.base_,t)?(Kg(e),e.copy_[t]=tv(i,e)):i},has(e,t){return t in no(e)},ownKeys(e){return Reflect.ownKeys(no(e))},set(e,t,n){const i=XR(no(e),t);if(i?.set)return i.set.call(e.draft_,n),!0;if(!e.modified_){const o=Qg(no(e),t),l=o?.[xn];if(l&&l.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(L$(n,o)&&(n!==void 0||Wc(e.base_,t)))return!0;Kg(e),ev(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty(e,t){return Qg(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,Kg(e),ev(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=no(e),i=Reflect.getOwnPropertyDescriptor(n,t);return i&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:i.enumerable,value:n[t]}},defineProperty(){en(11)},getPrototypeOf(e){return ja(e.base_)},setPrototypeOf(){en(12)}},Qc={};Gc(m_,(e,t)=>{Qc[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});Qc.deleteProperty=function(e,t){return Qc.set.call(this,e,t,void 0)};Qc.set=function(e,t,n){return m_.set.call(this,e[0],t,n,e[0])};function Qg(e,t){const n=e[xn];return(n?no(n):e)[t]}function B$(e,t,n){const i=XR(t,n);return i?"value"in i?i.value:i.get?.call(e.draft_):void 0}function XR(e,t){if(!(t in e))return;let n=ja(e);for(;n;){const i=Object.getOwnPropertyDescriptor(n,t);if(i)return i;n=ja(n)}}function ev(e){e.modified_||(e.modified_=!0,e.parent_&&ev(e.parent_))}function Kg(e){e.copy_||(e.copy_=Ky(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var H$=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!0,this.produce=(t,n,i)=>{if(typeof t=="function"&&typeof n!="function"){const l=n;n=t;const u=this;return function(p=l,...h){return u.produce(p,y=>n.call(this,y,...h))}}typeof n!="function"&&en(6),i!==void 0&&typeof i!="function"&&en(7);let o;if(br(t)){const l=ww(this),u=tv(t,void 0);let f=!0;try{o=n(u),f=!1}finally{f?Zy(l):Jy(l)}return xw(l,i),Ew(o,l)}else if(!t||typeof t!="object"){if(o=n(t),o===void 0&&(o=t),o===h_&&(o=void 0),this.autoFreeze_&&p_(o,!0),i){const l=[],u=[];yo("Patches").generateReplacementPatches_(t,o,l,u),i(l,u)}return o}else en(1,t)},this.produceWithPatches=(t,n)=>{if(typeof t=="function")return(u,...f)=>this.produceWithPatches(u,p=>t(p,...f));let i,o;return[this.produce(t,n,(u,f)=>{i=u,o=f}),i,o]},typeof e?.autoFreeze=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof e?.useStrictShallowCopy=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),typeof e?.useStrictIteration=="boolean"&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){br(e)||en(8),Lr(e)&&(e=F$(e));const t=ww(this),n=tv(e,void 0);return n[xn].isManual_=!0,Jy(t),n}finishDraft(e,t){const n=e&&e[xn];(!n||!n.isManual_)&&en(9);const{scope_:i}=n;return xw(i,t),Ew(void 0,i)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const o=t[n];if(o.path.length===0&&o.op==="replace"){e=o.value;break}}n>-1&&(t=t.slice(n+1));const i=yo("Patches").applyPatches_;return Lr(e)?i(e,t):this.produce(e,o=>i(o,t))}};function tv(e,t){const n=Xa(e)?yo("MapSet").proxyMap_(e,t):pu(e)?yo("MapSet").proxySet_(e,t):z$(e,t);return(t?t.scope_:KR()).drafts_.push(n),n}function F$(e){return Lr(e)||en(10,e),ZR(e)}function ZR(e){if(!br(e)||Vh(e))return e;const t=e[xn];let n,i=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=Ky(e,t.scope_.immer_.useStrictShallowCopy_),i=t.scope_.immer_.shouldUseStrictIteration()}else n=Ky(e,!0);return Gc(n,(o,l)=>{QR(n,o,ZR(l))},i),t&&(t.finalized_=!1),n}function q$(){const t="replace",i="remove";function o(v,b,x,I){switch(v.type_){case 0:case 2:return u(v,b,x,I);case 1:return l(v,b,x,I);case 3:return f(v,b,x,I)}}function l(v,b,x,I){let{base_:T,assigned_:k}=v,M=v.copy_;M.length<T.length&&([T,M]=[M,T],[x,I]=[I,x]);for(let R=0;R<T.length;R++)if(k[R]&&M[R]!==T[R]){const D=b.concat([R]);x.push({op:t,path:D,value:_(M[R])}),I.push({op:t,path:D,value:_(T[R])})}for(let R=T.length;R<M.length;R++){const D=b.concat([R]);x.push({op:"add",path:D,value:_(M[R])})}for(let R=M.length-1;T.length<=R;--R){const D=b.concat([R]);I.push({op:i,path:D})}}function u(v,b,x,I){const{base_:T,copy_:k}=v;Gc(v.assigned_,(M,R)=>{const D=Yg(T,M),O=Yg(k,M),A=R?Wc(T,M)?t:"add":i;if(D===O&&A===t)return;const j=b.concat(M);x.push(A===i?{op:A,path:j}:{op:A,path:j,value:O}),I.push(A==="add"?{op:i,path:j}:A===i?{op:"add",path:j,value:_(D)}:{op:t,path:j,value:_(D)})})}function f(v,b,x,I){let{base_:T,copy_:k}=v,M=0;T.forEach(R=>{if(!k.has(R)){const D=b.concat([M]);x.push({op:i,path:D,value:R}),I.unshift({op:"add",path:D,value:R})}M++}),M=0,k.forEach(R=>{if(!T.has(R)){const D=b.concat([M]);x.push({op:"add",path:D,value:R}),I.unshift({op:i,path:D,value:R})}M++})}function p(v,b,x,I){x.push({op:t,path:[],value:b===h_?void 0:b}),I.push({op:t,path:[],value:v})}function h(v,b){return b.forEach(x=>{const{path:I,op:T}=x;let k=v;for(let O=0;O<I.length-1;O++){const A=go(k);let j=I[O];typeof j!="string"&&typeof j!="number"&&(j=""+j),(A===0||A===1)&&(j==="__proto__"||j==="constructor")&&en(19),typeof k=="function"&&j==="prototype"&&en(19),k=Yg(k,j),typeof k!="object"&&en(18,I.join("/"))}const M=go(k),R=y(x.value),D=I[I.length-1];switch(T){case t:switch(M){case 2:return k.set(D,R);case 3:en(16);default:return k[D]=R}case"add":switch(M){case 1:return D==="-"?k.push(R):k.splice(D,0,R);case 2:return k.set(D,R);case 3:return k.add(R);default:return k[D]=R}case i:switch(M){case 1:return k.splice(D,1);case 2:return k.delete(D);case 3:return k.delete(x.value);default:return delete k[D]}default:en(17,T)}}),v}function y(v){if(!br(v))return v;if(Array.isArray(v))return v.map(y);if(Xa(v))return new Map(Array.from(v.entries()).map(([x,I])=>[x,y(I)]));if(pu(v))return new Set(Array.from(v).map(y));const b=Object.create(ja(v));for(const x in v)b[x]=y(v[x]);return Wc(v,Ic)&&(b[Ic]=v[Ic]),b}function _(v){return Lr(v)?y(v):v}P$("Patches",{applyPatches_:h,generatePatches_:o,generateReplacementPatches_:p})}var Kc=new H$,mu=Kc.produce,JR=Kc.produceWithPatches.bind(Kc),Tw=Kc.applyPatches.bind(Kc);function V$(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(t)}function G$(e,t=`expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(t)}function W$(e,t="expected all items to be functions, instead received the following types: "){if(!e.every(n=>typeof n=="function")){const n=e.map(i=>typeof i=="function"?`function ${i.name||"unnamed"}()`:typeof i).join(", ");throw new TypeError(`${t}[${n}]`)}}var Rw=e=>Array.isArray(e)?e:[e];function Y$(e){const t=Array.isArray(e[0])?e[0]:e;return W$(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}function Q$(e,t){const n=[],{length:i}=e;for(let o=0;o<i;o++)n.push(e[o].apply(null,t));return n}var K$=class{constructor(e){this.value=e}deref(){return this.value}},X$=typeof WeakRef<"u"?WeakRef:K$,Z$=0,Aw=1;function Jd(){return{s:Z$,v:void 0,o:null,p:null}}function Xf(e,t={}){let n=Jd();const{resultEqualityCheck:i}=t;let o,l=0;function u(){let f=n;const{length:p}=arguments;for(let _=0,v=p;_<v;_++){const b=arguments[_];if(typeof b=="function"||typeof b=="object"&&b!==null){let x=f.o;x===null&&(f.o=x=new WeakMap);const I=x.get(b);I===void 0?(f=Jd(),x.set(b,f)):f=I}else{let x=f.p;x===null&&(f.p=x=new Map);const I=x.get(b);I===void 0?(f=Jd(),x.set(b,f)):f=I}}const h=f;let y;if(f.s===Aw)y=f.v;else if(y=e.apply(null,arguments),l++,i){const _=o?.deref?.()??o;_!=null&&i(_,y)&&(y=_,l!==0&&l--),o=typeof y=="object"&&y!==null||typeof y=="function"?new X$(y):y}return h.s=Aw,h.v=y,y}return u.clearCache=()=>{n=Jd(),u.resetResultsCount()},u.resultsCount=()=>l,u.resetResultsCount=()=>{l=0},u}function J$(e,...t){const n=typeof e=="function"?{memoize:e,memoizeOptions:t}:e,i=(...o)=>{let l=0,u=0,f,p={},h=o.pop();typeof h=="object"&&(p=h,h=o.pop()),V$(h,`createSelector expects an output function after the inputs, but received: [${typeof h}]`);const y={...n,...p},{memoize:_,memoizeOptions:v=[],argsMemoize:b=Xf,argsMemoizeOptions:x=[]}=y,I=Rw(v),T=Rw(x),k=Y$(o),M=_(function(){return l++,h.apply(null,arguments)},...I),R=b(function(){u++;const O=Q$(k,arguments);return f=M.apply(null,O),f},...T);return Object.assign(R,{resultFunc:h,memoizedResultFunc:M,dependencies:k,dependencyRecomputations:()=>u,resetDependencyRecomputations:()=>{u=0},lastResult:()=>f,recomputations:()=>l,resetRecomputations:()=>{l=0},memoize:_,argsMemoize:b})};return Object.assign(i,{withTypes:()=>i}),i}var Ei=J$(Xf),e6=Object.assign((e,t=Ei)=>{G$(e,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);const n=Object.keys(e),i=n.map(l=>e[l]);return t(i,(...l)=>l.reduce((u,f,p)=>(u[n[p]]=f,u),{}))},{withTypes:()=>e6});function eA(e){return({dispatch:n,getState:i})=>o=>l=>typeof l=="function"?l(n,i,e):o(l)}var t6=eA(),n6=eA,r6=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Yf:Yf.apply(null,arguments)},i6=e=>e&&typeof e.match=="function";function mr(e,t){function n(...i){if(t){let o=t(...i);if(!o)throw new Error(gr(0));return{type:e,payload:o.payload,..."meta"in o&&{meta:o.meta},..."error"in o&&{error:o.error}}}return{type:e,payload:i[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=i=>WR(i)&&i.type===e,n}var tA=class Sc extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,Sc.prototype)}static get[Symbol.species](){return Sc}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new Sc(...t[0].concat(this)):new Sc(...t.concat(this))}};function Iw(e){return br(e)?mu(e,()=>{}):e}function ef(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function s6(e){return typeof e=="boolean"}var o6=()=>function(t){const{thunk:n=!0,immutableCheck:i=!0,serializableCheck:o=!0,actionCreatorCheck:l=!0}=t??{};let u=new tA;return n&&(s6(n)?u.push(t6):u.push(n6(n.extraArgument))),u},Gh="RTK_autoBatch",ic=()=>e=>({payload:e,meta:{[Gh]:!0}}),Dw=e=>t=>{setTimeout(t,e)},a6=(e={type:"raf"})=>t=>(...n)=>{const i=t(...n);let o=!0,l=!1,u=!1;const f=new Set,p=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Dw(10):e.type==="callback"?e.queueNotification:Dw(e.timeout),h=()=>{u=!1,l&&(l=!1,f.forEach(y=>y()))};return Object.assign({},i,{subscribe(y){const _=()=>o&&y(),v=i.subscribe(_);return f.add(y),()=>{v(),f.delete(y)}},dispatch(y){try{return o=!y?.meta?.[Gh],l=!o,l&&(u||(u=!0,p(h))),i.dispatch(y)}finally{o=!0}}})},l6=e=>function(n){const{autoBatch:i=!0}=n??{};let o=new tA(e);return i&&o.push(a6(typeof i=="object"?i:void 0)),o};function c6(e){const t=o6(),{reducer:n=void 0,middleware:i,devTools:o=!0,preloadedState:l=void 0,enhancers:u=void 0}=e||{};let f;if(typeof n=="function")f=n;else if(bs(n))f=GR(n);else throw new Error(gr(1));let p;typeof i=="function"?p=i(t):p=t();let h=Yf;o&&(h=r6({trace:!1,...typeof o=="object"&&o}));const y=N$(...p),_=l6(y);let v=typeof u=="function"?u(_):_();const b=h(...v);return VR(f,l,b)}function nA(e){const t={},n=[];let i;const o={addCase(l,u){const f=typeof l=="string"?l:l.type;if(!f)throw new Error(gr(28));if(f in t)throw new Error(gr(29));return t[f]=u,o},addAsyncThunk(l,u){return u.pending&&(t[l.pending.type]=u.pending),u.rejected&&(t[l.rejected.type]=u.rejected),u.fulfilled&&(t[l.fulfilled.type]=u.fulfilled),u.settled&&n.push({matcher:l.settled,reducer:u.settled}),o},addMatcher(l,u){return n.push({matcher:l,reducer:u}),o},addDefaultCase(l){return i=l,o}};return e(o),[t,n,i]}function u6(e){return typeof e=="function"}function d6(e,t){let[n,i,o]=nA(t),l;if(u6(e))l=()=>Iw(e());else{const f=Iw(e);l=()=>f}function u(f=l(),p){let h=[n[p.type],...i.filter(({matcher:y})=>y(p)).map(({reducer:y})=>y)];return h.filter(y=>!!y).length===0&&(h=[o]),h.reduce((y,_)=>{if(_)if(Lr(y)){const b=_(y,p);return b===void 0?y:b}else{if(br(y))return mu(y,v=>_(v,p));{const v=_(y,p);if(v===void 0){if(y===null)return y;throw Error("A case reducer on a non-draftable value must not return undefined")}return v}}return y},f)}return u.getInitialState=l,u}var rA=(e,t)=>i6(e)?e.match(t):e(t);function _i(...e){return t=>e.some(n=>rA(n,t))}function Dc(...e){return t=>e.every(n=>rA(n,t))}function Wh(e,t){if(!e||!e.meta)return!1;const n=typeof e.meta.requestId=="string",i=t.indexOf(e.meta.requestStatus)>-1;return n&&i}function gu(e){return typeof e[0]=="function"&&"pending"in e[0]&&"fulfilled"in e[0]&&"rejected"in e[0]}function g_(...e){return e.length===0?t=>Wh(t,["pending"]):gu(e)?_i(...e.map(t=>t.pending)):g_()(e[0])}function Pa(...e){return e.length===0?t=>Wh(t,["rejected"]):gu(e)?_i(...e.map(t=>t.rejected)):Pa()(e[0])}function Yh(...e){const t=n=>n&&n.meta&&n.meta.rejectedWithValue;return e.length===0?Dc(Pa(...e),t):gu(e)?Dc(Pa(...e),t):Yh()(e[0])}function Ss(...e){return e.length===0?t=>Wh(t,["fulfilled"]):gu(e)?_i(...e.map(t=>t.fulfilled)):Ss()(e[0])}function nv(...e){return e.length===0?t=>Wh(t,["pending","fulfilled","rejected"]):gu(e)?_i(...e.flatMap(t=>[t.pending,t.rejected,t.fulfilled])):nv()(e[0])}var f6="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",y_=(e=21)=>{let t="",n=e;for(;n--;)t+=f6[Math.random()*64|0];return t},h6=["name","message","stack","code"],Xg=class{constructor(e,t){this.payload=e,this.meta=t}_type},kw=class{constructor(e,t){this.payload=e,this.meta=t}_type},p6=e=>{if(typeof e=="object"&&e!==null){const t={};for(const n of h6)typeof e[n]=="string"&&(t[n]=e[n]);return t}return{message:String(e)}},Nw="External signal was aborted",Ow=(()=>{function e(t,n,i){const o=mr(t+"/fulfilled",(p,h,y,_)=>({payload:p,meta:{..._||{},arg:y,requestId:h,requestStatus:"fulfilled"}})),l=mr(t+"/pending",(p,h,y)=>({payload:void 0,meta:{...y||{},arg:h,requestId:p,requestStatus:"pending"}})),u=mr(t+"/rejected",(p,h,y,_,v)=>({payload:_,error:(i&&i.serializeError||p6)(p||"Rejected"),meta:{...v||{},arg:y,requestId:h,rejectedWithValue:!!_,requestStatus:"rejected",aborted:p?.name==="AbortError",condition:p?.name==="ConditionError"}}));function f(p,{signal:h}={}){return(y,_,v)=>{const b=i?.idGenerator?i.idGenerator(p):y_(),x=new AbortController;let I,T;function k(R){T=R,x.abort()}h&&(h.aborted?k(Nw):h.addEventListener("abort",()=>k(Nw),{once:!0}));const M=(async function(){let R;try{let O=i?.condition?.(p,{getState:_,extra:v});if(g6(O)&&(O=await O),O===!1||x.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const A=new Promise((j,U)=>{I=()=>{U({name:"AbortError",message:T||"Aborted"})},x.signal.addEventListener("abort",I)});y(l(b,p,i?.getPendingMeta?.({requestId:b,arg:p},{getState:_,extra:v}))),R=await Promise.race([A,Promise.resolve(n(p,{dispatch:y,getState:_,extra:v,requestId:b,signal:x.signal,abort:k,rejectWithValue:(j,U)=>new Xg(j,U),fulfillWithValue:(j,U)=>new kw(j,U)})).then(j=>{if(j instanceof Xg)throw j;return j instanceof kw?o(j.payload,b,p,j.meta):o(j,b,p)})])}catch(O){R=O instanceof Xg?u(null,b,p,O.payload,O.meta):u(O,b,p)}finally{I&&x.signal.removeEventListener("abort",I)}return i&&!i.dispatchConditionRejection&&u.match(R)&&R.meta.condition||y(R),R})();return Object.assign(M,{abort:k,requestId:b,arg:p,unwrap(){return M.then(m6)}})}}return Object.assign(f,{pending:l,rejected:u,fulfilled:o,settled:_i(u,o),typePrefix:t})}return e.withTypes=()=>e,e})();function m6(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function g6(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var y6=Symbol.for("rtk-slice-createasyncthunk");function v6(e,t){return`${e}/${t}`}function _6({creators:e}={}){const t=e?.asyncThunk?.[y6];return function(i){const{name:o,reducerPath:l=o}=i;if(!o)throw new Error(gr(11));const u=(typeof i.reducers=="function"?i.reducers(S6()):i.reducers)||{},f=Object.keys(u),p={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},h={addCase(R,D){const O=typeof R=="string"?R:R.type;if(!O)throw new Error(gr(12));if(O in p.sliceCaseReducersByType)throw new Error(gr(13));return p.sliceCaseReducersByType[O]=D,h},addMatcher(R,D){return p.sliceMatchers.push({matcher:R,reducer:D}),h},exposeAction(R,D){return p.actionCreators[R]=D,h},exposeCaseReducer(R,D){return p.sliceCaseReducersByName[R]=D,h}};f.forEach(R=>{const D=u[R],O={reducerName:R,type:v6(o,R),createNotation:typeof i.reducers=="function"};w6(D)?C6(O,D,h,t):x6(O,D,h)});function y(){const[R={},D=[],O=void 0]=typeof i.extraReducers=="function"?nA(i.extraReducers):[i.extraReducers],A={...R,...p.sliceCaseReducersByType};return d6(i.initialState,j=>{for(let U in A)j.addCase(U,A[U]);for(let U of p.sliceMatchers)j.addMatcher(U.matcher,U.reducer);for(let U of D)j.addMatcher(U.matcher,U.reducer);O&&j.addDefaultCase(O)})}const _=R=>R,v=new Map,b=new WeakMap;let x;function I(R,D){return x||(x=y()),x(R,D)}function T(){return x||(x=y()),x.getInitialState()}function k(R,D=!1){function O(j){let U=j[R];return typeof U>"u"&&D&&(U=ef(b,O,T)),U}function A(j=_){const U=ef(v,D,()=>new WeakMap);return ef(U,j,()=>{const F={};for(const[H,z]of Object.entries(i.selectors??{}))F[H]=b6(z,j,()=>ef(b,j,T),D);return F})}return{reducerPath:R,getSelectors:A,get selectors(){return A(O)},selectSlice:O}}const M={name:o,reducer:I,actions:p.actionCreators,caseReducers:p.sliceCaseReducersByName,getInitialState:T,...k(l),injectInto(R,{reducerPath:D,...O}={}){const A=D??l;return R.inject({reducerPath:A,reducer:I},O),{...M,...k(A,!0)}}};return M}}function b6(e,t,n,i){function o(l,...u){let f=t(l);return typeof f>"u"&&i&&(f=n()),e(f,...u)}return o.unwrapped=e,o}var Kn=_6();function S6(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function x6({type:e,reducerName:t,createNotation:n},i,o){let l,u;if("reducer"in i){if(n&&!E6(i))throw new Error(gr(17));l=i.reducer,u=i.prepare}else l=i;o.addCase(e,l).exposeCaseReducer(t,l).exposeAction(t,u?mr(e,u):mr(e))}function w6(e){return e._reducerDefinitionType==="asyncThunk"}function E6(e){return e._reducerDefinitionType==="reducerWithPrepare"}function C6({type:e,reducerName:t},n,i,o){if(!o)throw new Error(gr(18));const{payloadCreator:l,fulfilled:u,pending:f,rejected:p,settled:h,options:y}=n,_=o(e,l,y);i.exposeAction(t,_),u&&i.addCase(_.fulfilled,u),f&&i.addCase(_.pending,f),p&&i.addCase(_.rejected,p),h&&i.addMatcher(_.settled,h),i.exposeCaseReducer(t,{fulfilled:u||tf,pending:f||tf,rejected:p||tf,settled:h||tf})}function tf(){}function gr(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const Za=e=>e.session,yu=Ei([Za],e=>{if(e.state==="fulfilled")return e.data?.id}),ir=ZC,Je=JC,vu=C.createContext({refreshToken:()=>{},deleteToken:()=>Promise.reject("Not implemented")});var Mw={};const Lw="@firebase/database",jw="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iA="";function T6(e){iA=e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R6{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,n){n==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),$t(n))}get(t){const n=this.domStorage_.getItem(this.prefixedName_(t));return n==null?null:Hc(n)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A6{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,n){n==null?delete this.cache_[t]:this.cache_[t]=n}get(t){return Pr(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA=function(e){try{if(typeof window<"u"&&typeof window[e]<"u"){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new R6(t)}}catch{}return new A6},ao=sA("localStorage"),I6=sA("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea=new r_("@firebase/database"),D6=(function(){let e=1;return function(){return e++}})(),oA=function(e){const t=Fj(e),n=new Uj;n.update(t);const i=n.digest();return e_.encodeByteArray(i)},_u=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?t+=_u.apply(null,i):typeof i=="object"?t+=$t(i):t+=i,t+=" "}return t};let kc=null,Pw=!0;const k6=function(e,t){he(!0,"Can't turn on custom loggers persistently."),Ea.logLevel=lt.VERBOSE,kc=Ea.log.bind(Ea)},Jt=function(...e){if(Pw===!0&&(Pw=!1,kc===null&&I6.get("logging_enabled")===!0&&k6()),kc){const t=_u.apply(null,e);kc(t)}},bu=function(e){return function(...t){Jt(e,...t)}},rv=function(...e){const t="FIREBASE INTERNAL ERROR: "+_u(...e);Ea.error(t)},bi=function(...e){const t=`FIREBASE FATAL ERROR: ${_u(...e)}`;throw Ea.error(t),new Error(t)},dn=function(...e){const t="FIREBASE WARNING: "+_u(...e);Ea.warn(t)},N6=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&dn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},v_=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},O6=function(e){if(document.readyState==="complete")e();else{let t=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},$a="[MIN_NAME]",vo="[MAX_NAME]",To=function(e,t){if(e===t)return 0;if(e===$a||t===vo)return-1;if(t===$a||e===vo)return 1;{const n=$w(e),i=$w(t);return n!==null?i!==null?n-i===0?e.length-t.length:n-i:-1:i!==null?1:e<t?-1:1}},M6=function(e,t){return e===t?0:e<t?-1:1},sc=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+$t(t))},__=function(e){if(typeof e!="object"||e===null)return $t(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)i!==0&&(n+=","),n+=$t(t[i]),n+=":",n+=__(e[t[i]]);return n+="}",n},aA=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let o=0;o<n;o+=t)o+t>n?i.push(e.substring(o,n)):i.push(e.substring(o,o+t));return i};function nn(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const lA=function(e){he(!v_(e),"Invalid JSON number");const t=11,n=52,i=(1<<t-1)-1;let o,l,u,f,p;e===0?(l=0,u=0,o=1/e===-1/0?1:0):(o=e<0,e=Math.abs(e),e>=Math.pow(2,1-i)?(f=Math.min(Math.floor(Math.log(e)/Math.LN2),i),l=f+i,u=Math.round(e*Math.pow(2,n-f)-Math.pow(2,n))):(l=0,u=Math.round(e/Math.pow(2,1-i-n))));const h=[];for(p=n;p;p-=1)h.push(u%2?1:0),u=Math.floor(u/2);for(p=t;p;p-=1)h.push(l%2?1:0),l=Math.floor(l/2);h.push(o?1:0),h.reverse();const y=h.join("");let _="";for(p=0;p<64;p+=8){let v=parseInt(y.substr(p,8),2).toString(16);v.length===1&&(v="0"+v),_=_+v}return _.toLowerCase()},L6=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},j6=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function P6(e,t){let n="Unknown Error";e==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":e==="permission_denied"?n="Client doesn't have permission to access the desired data.":e==="unavailable"&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}const $6=new RegExp("^-?(0*)\\d{1,10}$"),U6=-2147483648,z6=2147483647,$w=function(e){if($6.test(e)){const t=Number(e);if(t>=U6&&t<=z6)return t}return null},Ja=function(e){try{e()}catch(t){setTimeout(()=>{const n=t.stack||"";throw dn("Exception was thrown by user callback.",n),t},Math.floor(0))}},B6=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Nc=function(e,t){const n=setTimeout(e,t);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H6{constructor(t,n){this.appCheckProvider=n,this.appName=t.name,On(t)&&t.settings.appCheckToken&&(this.serverAppAppCheckToken=t.settings.appCheckToken),this.appCheck=n?.getImmediate({optional:!0}),this.appCheck||n?.get().then(i=>this.appCheck=i)}getToken(t){if(this.serverAppAppCheckToken){if(t)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(t):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(n,i):n(null)},0)})}addTokenChangeListener(t){this.appCheckProvider?.get().then(n=>n.addTokenListener(t))}notifyForInvalidToken(){dn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F6{constructor(t,n,i){this.appName_=t,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(o=>this.auth_=o)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(n=>n&&n.code==="auth/token-not-initialized"?(Jt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(n,i):n(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(n=>n.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(n=>n.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',dn(t)}}class Tf{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}Tf.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_="5",cA="v",uA="s",dA="r",fA="f",hA=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,pA="ls",mA="p",iv="ac",gA="websocket",yA="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(t,n,i,o,l=!1,u="",f=!1,p=!1,h=null){this.secure=n,this.namespace=i,this.webSocketOnly=o,this.nodeAdmin=l,this.persistenceKey=u,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=p,this.emulatorOptions=h,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ao.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&ao.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${n}`}}function q6(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function _A(e,t,n){he(typeof t=="string","typeof type must == string"),he(typeof n=="object","typeof params must == object");let i;if(t===gA)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===yA)i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);q6(e)&&(n.ns=e.namespace);const o=[];return nn(n,(l,u)=>{o.push(l+"="+u)}),i+o.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V6{constructor(){this.counters_={}}incrementCounter(t,n=1){Pr(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=n}get(){return _j(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg={},Jg={};function S_(e){const t=e.toString();return Zg[t]||(Zg[t]=new V6),Zg[t]}function G6(e,t){const n=e.toString();return Jg[n]||(Jg[n]=t()),Jg[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W6{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,n){this.closeAfterResponse=t,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,n){for(this.pendingResponses[t]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<i.length;++o)i[o]&&Ja(()=>{this.onMessage_(i[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw="start",Y6="close",Q6="pLPCommand",K6="pRTLPCB",bA="id",SA="pw",xA="ser",X6="cb",Z6="seg",J6="ts",e3="d",t3="dframe",wA=1870,EA=30,n3=wA-EA,r3=25e3,i3=3e4;class Sa{constructor(t,n,i,o,l,u,f){this.connId=t,this.repoInfo=n,this.applicationId=i,this.appCheckToken=o,this.authToken=l,this.transportSessionId=u,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=bu(t),this.stats_=S_(n),this.urlFn=p=>(this.appCheckToken&&(p[iv]=this.appCheckToken),_A(n,yA,p))}open(t,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new W6(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(i3)),O6(()=>{if(this.isClosed_)return;this.scriptTagHolder=new x_((...l)=>{const[u,f,p,h,y]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===Uw)this.id=f,this.password=p;else if(u===Y6)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...l)=>{const[u,f]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(u,f)},()=>{this.onClosed_()},this.urlFn);const i={};i[Uw]="t",i[xA]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[X6]=this.scriptTagHolder.uniqueCallbackIdentifier),i[cA]=b_,this.transportSessionId&&(i[uA]=this.transportSessionId),this.lastSessionId&&(i[pA]=this.lastSessionId),this.applicationId&&(i[mA]=this.applicationId),this.appCheckToken&&(i[iv]=this.appCheckToken),typeof location<"u"&&location.hostname&&hA.test(location.hostname)&&(i[dA]=fA);const o=this.urlFn(i);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Sa.forceAllow_=!0}static forceDisallow(){Sa.forceDisallow_=!0}static isAvailable(){return Sa.forceAllow_?!0:!Sa.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!L6()&&!j6()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const n=$t(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=iR(n),o=aA(i,n3);for(let l=0;l<o.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[l]),this.curSegmentNum++}addDisconnectPingFrame(t,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[t3]="t",i[bA]=t,i[SA]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const n=$t(t).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class x_{constructor(t,n,i,o){this.onDisconnect=i,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=D6(),window[Q6+this.uniqueCallbackIdentifier]=t,window[K6+this.uniqueCallbackIdentifier]=n,this.myIFrame=x_.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(f){Jt("frame writing exception"),f.stack&&Jt(f.stack),Jt(f)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||Jt("No IE domain setting required")}catch{const i=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,n){for(this.myID=t,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[bA]=this.myID,t[SA]=this.myPW,t[xA]=this.currentSerial;let n=this.urlFn(t),i="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+EA+i.length<=wA;){const u=this.pendingSegs.shift();i=i+"&"+Z6+o+"="+u.seg+"&"+J6+o+"="+u.ts+"&"+e3+o+"="+u.d,o++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(t,n,i){this.pendingSegs.push({seg:t,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(t,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},o=setTimeout(i,Math.floor(r3)),l=()=>{clearTimeout(o),i()};this.addTag(t,l)}addTag(t,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=t,i.onload=i.onreadystatechange=function(){const o=i.readyState;(!o||o==="loaded"||o==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Jt("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s3=16384,o3=45e3;let Zf=null;typeof MozWebSocket<"u"?Zf=MozWebSocket:typeof WebSocket<"u"&&(Zf=WebSocket);class ur{constructor(t,n,i,o,l,u,f){this.connId=t,this.applicationId=i,this.appCheckToken=o,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=bu(this.connId),this.stats_=S_(n),this.connURL=ur.connectionURL_(n,u,f,o,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(t,n,i,o,l){const u={};return u[cA]=b_,typeof location<"u"&&location.hostname&&hA.test(location.hostname)&&(u[dA]=fA),n&&(u[uA]=n),i&&(u[pA]=i),o&&(u[iv]=o),l&&(u[mA]=l),_A(t,gA,u)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ao.set("previous_websocket_failure",!0);try{let i;Nj(),this.mySock=new Zf(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const o=i.message||i.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const o=i.message||i.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){ur.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(t=!0)}return!t&&Zf!==null&&!ur.forceDisallow_}static previouslyFailed(){return ao.isInMemoryStorage||ao.get("previous_websocket_failure")===!0}markConnectionHealthy(){ao.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Hc(n);this.onMessage(i)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(he(this.frames===null,"We already have a frame buffer"),t.length<=6){const n=Number(t);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const n=t.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(t){this.resetKeepAlive();const n=$t(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=aA(n,s3);i.length>1&&this.sendString_(String(i.length));for(let o=0;o<i.length;o++)this.sendString_(i[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(o3))}sendString_(t){try{this.mySock.send(t)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ur.responsesRequiredToBeHealthy=2;ur.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{static get ALL_TRANSPORTS(){return[Sa,ur]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(t){this.initTransports_(t)}initTransports_(t){const n=ur&&ur.isAvailable();let i=n&&!ur.previouslyFailed();if(t.webSocketOnly&&(n||dn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[ur];else{const o=this.transports_=[];for(const l of Xc.ALL_TRANSPORTS)l&&l.isAvailable()&&o.push(l);Xc.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Xc.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a3=6e4,l3=5e3,c3=10*1024,u3=100*1024,ey="t",zw="d",d3="s",Bw="r",f3="e",Hw="o",Fw="a",qw="n",Vw="p",h3="h";class p3{constructor(t,n,i,o,l,u,f,p,h,y){this.id=t,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=o,this.authToken_=l,this.onMessage_=u,this.onReady_=f,this.onDisconnect_=p,this.onKill_=h,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=bu("c:"+this.id+":"),this.transportManager_=new Xc(n),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const o=t.healthyTimeout||0;o>0&&(this.healthyTimeout_=Nc(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>u3?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>c3?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return n=>{t===this.conn_?this.onConnectionLost_(n):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return n=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(n):t===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(t){const n={t:"d",d:t};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(ey in t){const n=t[ey];n===Fw?this.upgradeIfSecondaryHealthy_():n===Bw?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Hw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const n=sc("t",t),i=sc("d",t);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Vw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Fw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:qw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const n=sc("t",t),i=sc("d",t);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const n=sc(ey,t);if(zw in t){const i=t[zw];if(n===h3){const o={...i};this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(n===qw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===d3?this.onConnectionShutdown_(i):n===Bw?this.onReset_(i):n===f3?rv("Server Error: "+i):n===Hw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):rv("Unknown control packet command: "+n)}}onHandshake_(t){const n=t.ts,i=t.v,o=t.h;this.sessionId=t.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),b_!==i&&dn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Nc(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(a3))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,n){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Nc(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(l3))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Vw,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ao.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{put(t,n,i,o){}merge(t,n,i,o){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,n,i){}onDisconnectMerge(t,n,i){}onDisconnectCancel(t,n){}reportStats(t){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(t){this.allowedEvents_=t,this.listeners_={},he(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...n){if(Array.isArray(this.listeners_[t])){const i=[...this.listeners_[t]];for(let o=0;o<i.length;o++)i[o].callback.apply(i[o].context,n)}}on(t,n,i){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:n,context:i});const o=this.getInitialEvent(t);o&&n.apply(i,o)}off(t,n,i){this.validateEventType_(t);const o=this.listeners_[t]||[];for(let l=0;l<o.length;l++)if(o[l].callback===n&&(!i||i===o[l].context)){o.splice(l,1);return}}validateEventType_(t){he(this.allowedEvents_.find(n=>n===t),"Unknown event: "+t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf extends TA{static getInstance(){return new Jf}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!n_()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(t){return he(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw=32,Ww=768;class ct{constructor(t,n){if(n===void 0){this.pieces_=t.split("/");let i=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[i]=this.pieces_[o],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=n}toString(){let t="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(t+="/"+this.pieces_[n]);return t||"/"}}function Ke(){return new ct("")}function Fe(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function xs(e){return e.pieces_.length-e.pieceNum_}function ht(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ct(e.pieces_,t)}function w_(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function m3(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)e.pieces_[n]!==""&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function Zc(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function RA(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ct(t,0)}function Rt(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof ct)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const i=t.split("/");for(let o=0;o<i.length;o++)i[o].length>0&&n.push(i[o])}return new ct(n,0)}function We(e){return e.pieceNum_>=e.pieces_.length}function un(e,t){const n=Fe(e),i=Fe(t);if(n===null)return t;if(n===i)return un(ht(e),ht(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function g3(e,t){const n=Zc(e,0),i=Zc(t,0);for(let o=0;o<n.length&&o<i.length;o++){const l=To(n[o],i[o]);if(l!==0)return l}return n.length===i.length?0:n.length<i.length?-1:1}function E_(e,t){if(xs(e)!==xs(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Xn(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(xs(e)>xs(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class y3{constructor(t,n){this.errorPrefix_=n,this.parts_=Zc(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=zh(this.parts_[i]);AA(this)}}function v3(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=zh(t),AA(e)}function _3(e){const t=e.parts_.pop();e.byteLength_-=zh(t),e.parts_.length>0&&(e.byteLength_-=1)}function AA(e){if(e.byteLength_>Ww)throw new Error(e.errorPrefix_+"has a key path longer than "+Ww+" bytes ("+e.byteLength_+").");if(e.parts_.length>Gw)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Gw+") or object contains a cycle "+ro(e))}function ro(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_ extends TA{static getInstance(){return new C_}constructor(){super(["visible"]);let t,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[t];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(t){return he(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc=1e3,b3=300*1e3,Yw=30*1e3,S3=1.3,x3=3e4,w3="server_kill",Qw=3;class gi extends CA{constructor(t,n,i,o,l,u,f,p){if(super(),this.repoInfo_=t,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=o,this.onServerInfoUpdate_=l,this.authTokenProvider_=u,this.appCheckTokenProvider_=f,this.authOverride_=p,this.id=gi.nextPersistentConnectionId_++,this.log_=bu("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=oc,this.maxReconnectDelay_=b3,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");C_.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&Jf.getInstance().on("online",this.onOnline_,this)}sendRequest(t,n,i){const o=++this.requestNumber_,l={r:o,a:t,b:n};this.log_($t(l)),he(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),i&&(this.requestCBHash_[o]=i)}get(t){this.initConnection_();const n=new hu,o={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:u=>{const f=u.d;u.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),n.promise}listen(t,n,i,o){this.initConnection_();const l=t._queryIdentifier,u=t._path.toString();this.log_("Listen called for "+u+" "+l),this.listens.has(u)||this.listens.set(u,new Map),he(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),he(!this.listens.get(u).has(l),"listen() called twice for same path/queryId.");const f={onComplete:o,hashFn:n,query:t,tag:i};this.listens.get(u).set(l,f),this.connected_&&this.sendListen_(f)}sendGet_(t){const n=this.outstandingGets_[t];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(t){const n=t.query,i=n._path.toString(),o=n._queryIdentifier;this.log_("Listen on "+i+" for "+o);const l={p:i},u="q";t.tag&&(l.q=n._queryObject,l.t=t.tag),l.h=t.hashFn(),this.sendRequest(u,l,f=>{const p=f.d,h=f.s;gi.warnOnListenWarnings_(p,n),(this.listens.get(i)&&this.listens.get(i).get(o))===t&&(this.log_("listen response",f),h!=="ok"&&this.removeListen_(i,o),t.onComplete&&t.onComplete(h,p))})}static warnOnListenWarnings_(t,n){if(t&&typeof t=="object"&&Pr(t,"w")){const i=La(t,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const o='".indexOn": "'+n._queryParams.getIndex().toString()+'"',l=n._path.toString();dn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||$j(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Yw)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,n=Pj(t)?"auth":"gauth",i={cred:t};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,o=>{const l=o.s,u=o.d||"error";this.authToken_===t&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const n=t.s,i=t.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(t,n){const i=t._path.toString(),o=t._queryIdentifier;this.log_("Unlisten called for "+i+" "+o),he(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,o)&&this.connected_&&this.sendUnlisten_(i,o,t._queryObject,n)}sendUnlisten_(t,n,i,o){this.log_("Unlisten on "+t+" for "+n);const l={p:t},u="n";o&&(l.q=i,l.t=o),this.sendRequest(u,l)}onDisconnectPut(t,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,n,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:n,onComplete:i})}onDisconnectMerge(t,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,n,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:n,onComplete:i})}onDisconnectCancel(t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(t,n,i,o){const l={p:n,d:i};this.log_("onDisconnect "+t,l),this.sendRequest(t,l,u=>{o&&setTimeout(()=>{o(u.s,u.d)},Math.floor(0))})}put(t,n,i,o){this.putInternal("p",t,n,i,o)}merge(t,n,i,o){this.putInternal("m",t,n,i,o)}putInternal(t,n,i,o,l){this.initConnection_();const u={p:n,d:i};l!==void 0&&(u.h=l),this.outstandingPuts_.push({action:t,request:u,onComplete:o}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(t){const n=this.outstandingPuts_[t].action,i=this.outstandingPuts_[t].request,o=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(n,i,l=>{this.log_(n+" response",l),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(l.s,l.d)})}reportStats(t){if(this.connected_){const n={c:t};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const l=i.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+$t(t));const n=t.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,n){this.log_("handleServerMessage",t,n),t==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):t==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):t==="c"?this.onListenRevoked_(n.p,n.q):t==="ac"?this.onAuthRevoked_(n.s,n.d):t==="apc"?this.onAppCheckRevoked_(n.s,n.d):t==="sd"?this.onSecurityDebugPacket_(n):rv("Unrecognized action received from server: "+$t(t)+`
Are you using the latest client?`)}onReady_(t,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){he(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=oc,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=oc,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>x3&&(this.reconnectDelay_=oc),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-t);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*S3)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+gi.nextConnectionId_++,l=this.lastSessionId;let u=!1,f=null;const p=function(){f?f.close():(u=!0,i())},h=function(_){he(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(_)};this.realtime_={close:p,sendRequest:h};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[_,v]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);u?Jt("getToken() completed but was canceled"):(Jt("getToken() completed. Creating connection."),this.authToken_=_&&_.accessToken,this.appCheckToken_=v&&v.token,f=new p3(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,i,b=>{dn(b+" ("+this.repoInfo_.toString()+")"),this.interrupt(w3)},l))}catch(_){this.log_("Failed to get token: "+_),u||(this.repoInfo_.nodeAdmin&&dn(_),p())}}}interrupt(t){Jt("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){Jt("Resuming connection for reason: "+t),delete this.interruptReasons_[t],Fy(this.interruptReasons_)&&(this.reconnectDelay_=oc,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const n=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const n=this.outstandingPuts_[t];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,n){let i;n?i=n.map(l=>__(l)).join("$"):i="default";const o=this.removeListen_(t,i);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(t,n){const i=new ct(t).toString();let o;if(this.listens.has(i)){const l=this.listens.get(i);o=l.get(n),l.delete(n),l.size===0&&this.listens.delete(i)}else o=void 0;return o}onAuthRevoked_(t,n){Jt("Auth token revoked: "+t+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Qw&&(this.reconnectDelay_=Yw,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,n){Jt("App check token revoked: "+t+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Qw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const n of t.values())this.sendListen_(n);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let n="js";t["sdk."+n+"."+iA.replace(/\./g,"-")]=1,n_()?t["framework.cordova"]=1:dR()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=Jf.getInstance().currentlyOnline();return Fy(this.interruptReasons_)&&t}}gi.nextPersistentConnectionId_=0;gi.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(t,n){this.name=t,this.node=n}static Wrap(t,n){return new qe(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,n){const i=new qe($a,t),o=new qe($a,n);return this.compare(i,o)!==0}minPost(){return qe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nf;class IA extends Qh{static get __EMPTY_NODE(){return nf}static set __EMPTY_NODE(t){nf=t}compare(t,n){return To(t.name,n.name)}isDefinedOn(t){throw Ga("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,n){return!1}minPost(){return qe.MIN}maxPost(){return new qe(vo,nf)}makePost(t,n){return he(typeof t=="string","KeyIndex indexValue must always be a string."),new qe(t,nf)}toString(){return".key"}}const Ca=new IA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(t,n,i,o,l=null){this.isReverse_=o,this.resultGenerator_=l,this.nodeStack_=[];let u=1;for(;!t.isEmpty();)if(t=t,u=n?i(t.key,n):1,o&&(u*=-1),u<0)this.isReverse_?t=t.left:t=t.right;else if(u===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(t.key,t.value):n={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class qt{constructor(t,n,i,o,l){this.key=t,this.value=n,this.color=i??qt.RED,this.left=o??Sn.EMPTY_NODE,this.right=l??Sn.EMPTY_NODE}copy(t,n,i,o,l){return new qt(t??this.key,n??this.value,i??this.color,o??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,i){let o=this;const l=i(t,o.key);return l<0?o=o.copy(null,null,null,o.left.insert(t,n,i),null):l===0?o=o.copy(null,n,null,null,null):o=o.copy(null,null,null,null,o.right.insert(t,n,i)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return Sn.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,n){let i,o;if(i=this,n(t,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(t,i.key)===0){if(i.right.isEmpty())return Sn.EMPTY_NODE;o=i.right.min_(),i=i.copy(o.key,o.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,qt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,qt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}qt.RED=!0;qt.BLACK=!1;class E3{copy(t,n,i,o,l){return this}insert(t,n,i){return new qt(t,n,null)}remove(t,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Sn{constructor(t,n=Sn.EMPTY_NODE){this.comparator_=t,this.root_=n}insert(t,n){return new Sn(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,qt.BLACK,null,null))}remove(t){return new Sn(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,qt.BLACK,null,null))}get(t){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(t,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(t){let n,i=this.root_,o=null;for(;!i.isEmpty();)if(n=this.comparator_(t,i.key),n===0){if(i.left.isEmpty())return o?o.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(o=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new rf(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,n){return new rf(this.root_,t,this.comparator_,!1,n)}getReverseIteratorFrom(t,n){return new rf(this.root_,t,this.comparator_,!0,n)}getReverseIterator(t){return new rf(this.root_,null,this.comparator_,!0,t)}}Sn.EMPTY_NODE=new E3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C3(e,t){return To(e.name,t.name)}function T_(e,t){return To(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sv;function T3(e){sv=e}const DA=function(e){return typeof e=="number"?"number:"+lA(e):"string:"+e},kA=function(e){if(e.isLeafNode()){const t=e.val();he(typeof t=="string"||typeof t=="number"||typeof t=="object"&&Pr(t,".sv"),"Priority must be a string or number.")}else he(e===sv||e.isEmpty(),"priority of unexpected type.");he(e===sv||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kw;class Ht{static set __childrenNodeConstructor(t){Kw=t}static get __childrenNodeConstructor(){return Kw}constructor(t,n=Ht.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=n,this.lazyHash_=null,he(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),kA(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new Ht(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:Ht.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return We(t)?this:Fe(t)===".priority"?this.priorityNode_:Ht.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,n){return null}updateImmediateChild(t,n){return t===".priority"?this.updatePriority(n):n.isEmpty()&&t!==".priority"?this:Ht.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}updateChild(t,n){const i=Fe(t);return i===null?n:n.isEmpty()&&i!==".priority"?this:(he(i!==".priority"||xs(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Ht.__childrenNodeConstructor.EMPTY_NODE.updateChild(ht(t),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,n){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+DA(this.priorityNode_.val())+":");const n=typeof this.value_;t+=n+":",n==="number"?t+=lA(this.value_):t+=this.value_,this.lazyHash_=oA(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===Ht.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof Ht.__childrenNodeConstructor?-1:(he(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const n=typeof t.value_,i=typeof this.value_,o=Ht.VALUE_TYPE_ORDER.indexOf(n),l=Ht.VALUE_TYPE_ORDER.indexOf(i);return he(o>=0,"Unknown leaf type: "+n),he(l>=0,"Unknown leaf type: "+i),o===l?i==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:l-o}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const n=t;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ht.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let NA,OA;function R3(e){NA=e}function A3(e){OA=e}class I3 extends Qh{compare(t,n){const i=t.node.getPriority(),o=n.node.getPriority(),l=i.compareTo(o);return l===0?To(t.name,n.name):l}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,n){return!t.getPriority().equals(n.getPriority())}minPost(){return qe.MIN}maxPost(){return new qe(vo,new Ht("[PRIORITY-POST]",OA))}makePost(t,n){const i=NA(t);return new qe(n,new Ht("[PRIORITY-POST]",i))}toString(){return".priority"}}const At=new I3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D3=Math.log(2);class k3{constructor(t){const n=l=>parseInt(Math.log(l)/D3,10),i=l=>parseInt(Array(l+1).join("1"),2);this.count=n(t+1),this.current_=this.count-1;const o=i(this.count);this.bits_=t+1&o}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const eh=function(e,t,n,i){e.sort(t);const o=function(p,h){const y=h-p;let _,v;if(y===0)return null;if(y===1)return _=e[p],v=n?n(_):_,new qt(v,_.node,qt.BLACK,null,null);{const b=parseInt(y/2,10)+p,x=o(p,b),I=o(b+1,h);return _=e[b],v=n?n(_):_,new qt(v,_.node,qt.BLACK,x,I)}},l=function(p){let h=null,y=null,_=e.length;const v=function(x,I){const T=_-x,k=_;_-=x;const M=o(T+1,k),R=e[T],D=n?n(R):R;b(new qt(D,R.node,I,null,M))},b=function(x){h?(h.left=x,h=x):(y=x,h=x)};for(let x=0;x<p.count;++x){const I=p.nextBitIsOne(),T=Math.pow(2,p.count-(x+1));I?v(T,qt.BLACK):(v(T,qt.BLACK),v(T,qt.RED))}return y},u=new k3(e.length),f=l(u);return new Sn(i||t,f)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ty;const pa={};class fi{static get Default(){return he(pa&&At,"ChildrenNode.ts has not been loaded"),ty=ty||new fi({".priority":pa},{".priority":At}),ty}constructor(t,n){this.indexes_=t,this.indexSet_=n}get(t){const n=La(this.indexes_,t);if(!n)throw new Error("No index defined for "+t);return n instanceof Sn?n:null}hasIndex(t){return Pr(this.indexSet_,t.toString())}addIndex(t,n){he(t!==Ca,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let o=!1;const l=n.getIterator(qe.Wrap);let u=l.getNext();for(;u;)o=o||t.isDefinedOn(u.node),i.push(u),u=l.getNext();let f;o?f=eh(i,t.getCompare()):f=pa;const p=t.toString(),h={...this.indexSet_};h[p]=t;const y={...this.indexes_};return y[p]=f,new fi(y,h)}addToIndexes(t,n){const i=qf(this.indexes_,(o,l)=>{const u=La(this.indexSet_,l);if(he(u,"Missing index implementation for "+l),o===pa)if(u.isDefinedOn(t.node)){const f=[],p=n.getIterator(qe.Wrap);let h=p.getNext();for(;h;)h.name!==t.name&&f.push(h),h=p.getNext();return f.push(t),eh(f,u.getCompare())}else return pa;else{const f=n.get(t.name);let p=o;return f&&(p=p.remove(new qe(t.name,f))),p.insert(t,t.node)}});return new fi(i,this.indexSet_)}removeFromIndexes(t,n){const i=qf(this.indexes_,o=>{if(o===pa)return o;{const l=n.get(t.name);return l?o.remove(new qe(t.name,l)):o}});return new fi(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ac;class Ne{static get EMPTY_NODE(){return ac||(ac=new Ne(new Sn(T_),null,fi.Default))}constructor(t,n,i){this.children_=t,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&kA(this.priorityNode_),this.children_.isEmpty()&&he(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ac}updatePriority(t){return this.children_.isEmpty()?this:new Ne(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const n=this.children_.get(t);return n===null?ac:n}}getChild(t){const n=Fe(t);return n===null?this:this.getImmediateChild(n).getChild(ht(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,n){if(he(n,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(n);{const i=new qe(t,n);let o,l;n.isEmpty()?(o=this.children_.remove(t),l=this.indexMap_.removeFromIndexes(i,this.children_)):(o=this.children_.insert(t,n),l=this.indexMap_.addToIndexes(i,this.children_));const u=o.isEmpty()?ac:this.priorityNode_;return new Ne(o,u,l)}}updateChild(t,n){const i=Fe(t);if(i===null)return n;{he(Fe(t)!==".priority"||xs(t)===1,".priority must be the last token in a path");const o=this.getImmediateChild(i).updateChild(ht(t),n);return this.updateImmediateChild(i,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const n={};let i=0,o=0,l=!0;if(this.forEachChild(At,(u,f)=>{n[u]=f.val(t),i++,l&&Ne.INTEGER_REGEXP_.test(u)?o=Math.max(o,Number(u)):l=!1}),!t&&l&&o<2*i){const u=[];for(const f in n)u[f]=n[f];return u}else return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+DA(this.getPriority().val())+":"),this.forEachChild(At,(n,i)=>{const o=i.hash();o!==""&&(t+=":"+n+":"+o)}),this.lazyHash_=t===""?"":oA(t)}return this.lazyHash_}getPredecessorChildName(t,n,i){const o=this.resolveIndex_(i);if(o){const l=o.getPredecessorKey(new qe(t,n));return l?l.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const n=this.resolveIndex_(t);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(t){const n=this.getFirstChildName(t);return n?new qe(n,this.children_.get(n)):null}getLastChildName(t){const n=this.resolveIndex_(t);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(t){const n=this.getLastChildName(t);return n?new qe(n,this.children_.get(n)):null}forEachChild(t,n){const i=this.resolveIndex_(t);return i?i.inorderTraversal(o=>n(o.name,o.node)):this.children_.inorderTraversal(n)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(t,o=>o);{const o=this.children_.getIteratorFrom(t.name,qe.Wrap);let l=o.peek();for(;l!=null&&n.compare(l,t)<0;)o.getNext(),l=o.peek();return o}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(t,o=>o);{const o=this.children_.getReverseIteratorFrom(t.name,qe.Wrap);let l=o.peek();for(;l!=null&&n.compare(l,t)>0;)o.getNext(),l=o.peek();return o}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===Su?-1:0}withIndex(t){if(t===Ca||this.indexMap_.hasIndex(t))return this;{const n=this.indexMap_.addIndex(t,this.children_);return new Ne(this.children_,this.priorityNode_,n)}}isIndexed(t){return t===Ca||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const n=t;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(At),o=n.getIterator(At);let l=i.getNext(),u=o.getNext();for(;l&&u;){if(l.name!==u.name||!l.node.equals(u.node))return!1;l=i.getNext(),u=o.getNext()}return l===null&&u===null}else return!1;else return!1}}resolveIndex_(t){return t===Ca?null:this.indexMap_.get(t.toString())}}Ne.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class N3 extends Ne{constructor(){super(new Sn(T_),Ne.EMPTY_NODE,fi.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return Ne.EMPTY_NODE}isEmpty(){return!1}}const Su=new N3;Object.defineProperties(qe,{MIN:{value:new qe($a,Ne.EMPTY_NODE)},MAX:{value:new qe(vo,Su)}});IA.__EMPTY_NODE=Ne.EMPTY_NODE;Ht.__childrenNodeConstructor=Ne;T3(Su);A3(Su);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O3=!0;function Pt(e,t=null){if(e===null)return Ne.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(t=e[".priority"]),he(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){const n=e;return new Ht(n,Pt(t))}if(!(e instanceof Array)&&O3){const n=[];let i=!1;if(nn(e,(u,f)=>{if(u.substring(0,1)!=="."){const p=Pt(f);p.isEmpty()||(i=i||!p.getPriority().isEmpty(),n.push(new qe(u,p)))}}),n.length===0)return Ne.EMPTY_NODE;const l=eh(n,C3,u=>u.name,T_);if(i){const u=eh(n,At.getCompare());return new Ne(l,Pt(t),new fi({".priority":u},{".priority":At}))}else return new Ne(l,Pt(t),fi.Default)}else{let n=Ne.EMPTY_NODE;return nn(e,(i,o)=>{if(Pr(e,i)&&i.substring(0,1)!=="."){const l=Pt(o);(l.isLeafNode()||!l.isEmpty())&&(n=n.updateImmediateChild(i,l))}}),n.updatePriority(Pt(t))}}R3(Pt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M3 extends Qh{constructor(t){super(),this.indexPath_=t,he(!We(t)&&Fe(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,n){const i=this.extractChild(t.node),o=this.extractChild(n.node),l=i.compareTo(o);return l===0?To(t.name,n.name):l}makePost(t,n){const i=Pt(t),o=Ne.EMPTY_NODE.updateChild(this.indexPath_,i);return new qe(n,o)}maxPost(){const t=Ne.EMPTY_NODE.updateChild(this.indexPath_,Su);return new qe(vo,t)}toString(){return Zc(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L3 extends Qh{compare(t,n){const i=t.node.compareTo(n.node);return i===0?To(t.name,n.name):i}isDefinedOn(t){return!0}indexedValueChanged(t,n){return!t.equals(n)}minPost(){return qe.MIN}maxPost(){return qe.MAX}makePost(t,n){const i=Pt(t);return new qe(n,i)}toString(){return".value"}}const j3=new L3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MA(e){return{type:"value",snapshotNode:e}}function Ua(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Jc(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function eu(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function P3(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(t){this.index_=t}updateChild(t,n,i,o,l,u){he(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=t.getImmediateChild(n);return f.getChild(o).equals(i.getChild(o))&&f.isEmpty()===i.isEmpty()||(u!=null&&(i.isEmpty()?t.hasChild(n)?u.trackChildChange(Jc(n,f)):he(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?u.trackChildChange(Ua(n,i)):u.trackChildChange(eu(n,i,f))),t.isLeafNode()&&i.isEmpty())?t:t.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(t,n,i){return i!=null&&(t.isLeafNode()||t.forEachChild(At,(o,l)=>{n.hasChild(o)||i.trackChildChange(Jc(o,l))}),n.isLeafNode()||n.forEachChild(At,(o,l)=>{if(t.hasChild(o)){const u=t.getImmediateChild(o);u.equals(l)||i.trackChildChange(eu(o,l,u))}else i.trackChildChange(Ua(o,l))})),n.withIndex(this.index_)}updatePriority(t,n){return t.isEmpty()?Ne.EMPTY_NODE:t.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(t){this.indexedFilter_=new R_(t.getIndex()),this.index_=t.getIndex(),this.startPost_=tu.getStartPost_(t),this.endPost_=tu.getEndPost_(t),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),t)<=0:this.index_.compare(this.getStartPost(),t)<0,i=this.endIsInclusive_?this.index_.compare(t,this.getEndPost())<=0:this.index_.compare(t,this.getEndPost())<0;return n&&i}updateChild(t,n,i,o,l,u){return this.matches(new qe(n,i))||(i=Ne.EMPTY_NODE),this.indexedFilter_.updateChild(t,n,i,o,l,u)}updateFullNode(t,n,i){n.isLeafNode()&&(n=Ne.EMPTY_NODE);let o=n.withIndex(this.index_);o=o.updatePriority(Ne.EMPTY_NODE);const l=this;return n.forEachChild(At,(u,f)=>{l.matches(new qe(u,f))||(o=o.updateImmediateChild(u,Ne.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,o,i)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const n=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),n)}else return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const n=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),n)}else return t.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $3{constructor(t){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new tu(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft(),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}updateChild(t,n,i,o,l,u){return this.rangedFilter_.matches(new qe(n,i))||(i=Ne.EMPTY_NODE),t.getImmediateChild(n).equals(i)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,n,i,o,l,u):this.fullLimitUpdateChild_(t,n,i,l,u)}updateFullNode(t,n,i){let o;if(n.isLeafNode()||n.isEmpty())o=Ne.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){o=Ne.EMPTY_NODE.withIndex(this.index_);let l;this.reverse_?l=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):l=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;l.hasNext()&&u<this.limit_;){const f=l.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))o=o.updateImmediateChild(f.name,f.node),u++;else break;else continue}}else{o=n.withIndex(this.index_),o=o.updatePriority(Ne.EMPTY_NODE);let l;this.reverse_?l=o.getReverseIterator(this.index_):l=o.getIterator(this.index_);let u=0;for(;l.hasNext();){const f=l.getNext();u<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?u++:o=o.updateImmediateChild(f.name,Ne.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,o,i)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,n,i,o,l){let u;if(this.reverse_){const _=this.index_.getCompare();u=(v,b)=>_(b,v)}else u=this.index_.getCompare();const f=t;he(f.numChildren()===this.limit_,"");const p=new qe(n,i),h=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),y=this.rangedFilter_.matches(p);if(f.hasChild(n)){const _=f.getImmediateChild(n);let v=o.getChildAfterChild(this.index_,h,this.reverse_);for(;v!=null&&(v.name===n||f.hasChild(v.name));)v=o.getChildAfterChild(this.index_,v,this.reverse_);const b=v==null?1:u(v,p);if(y&&!i.isEmpty()&&b>=0)return l?.trackChildChange(eu(n,i,_)),f.updateImmediateChild(n,i);{l?.trackChildChange(Jc(n,_));const I=f.updateImmediateChild(n,Ne.EMPTY_NODE);return v!=null&&this.rangedFilter_.matches(v)?(l?.trackChildChange(Ua(v.name,v.node)),I.updateImmediateChild(v.name,v.node)):I}}else return i.isEmpty()?t:y&&u(h,p)>=0?(l!=null&&(l.trackChildChange(Jc(h.name,h.node)),l.trackChildChange(Ua(n,i))),f.updateImmediateChild(n,i).updateImmediateChild(h.name,Ne.EMPTY_NODE)):t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=At}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return he(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return he(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:$a}hasEnd(){return this.endSet_}getIndexEndValue(){return he(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return he(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:vo}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return he(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===At}copy(){const t=new A_;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function U3(e){return e.loadsAllData()?new R_(e.getIndex()):e.hasLimit()?new $3(e):new tu(e)}function Xw(e){const t={};if(e.isDefault())return t;let n;if(e.index_===At?n="$priority":e.index_===j3?n="$value":e.index_===Ca?n="$key":(he(e.index_ instanceof M3,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=$t(n),e.startSet_){const i=e.startAfterSet_?"startAfter":"startAt";t[i]=$t(e.indexStartValue_),e.startNameSet_&&(t[i]+=","+$t(e.indexStartName_))}if(e.endSet_){const i=e.endBeforeSet_?"endBefore":"endAt";t[i]=$t(e.indexEndValue_),e.endNameSet_&&(t[i]+=","+$t(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Zw(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;n===""&&(e.isViewFromLeft()?n="l":n="r"),t.vf=n}return e.index_!==At&&(t.i=e.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th extends CA{reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,n){return n!==void 0?"tag$"+n:(he(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}constructor(t,n,i,o){super(),this.repoInfo_=t,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=o,this.log_=bu("p:rest:"),this.listens_={}}listen(t,n,i,o){const l=t._path.toString();this.log_("Listen called for "+l+" "+t._queryIdentifier);const u=th.getListenId_(t,i),f={};this.listens_[u]=f;const p=Xw(t._queryParams);this.restRequest_(l+".json",p,(h,y)=>{let _=y;if(h===404&&(_=null,h=null),h===null&&this.onDataUpdate_(l,_,!1,i),La(this.listens_,u)===f){let v;h?h===401?v="permission_denied":v="rest_error:"+h:v="ok",o(v,null)}})}unlisten(t,n){const i=th.getListenId_(t,n);delete this.listens_[i]}get(t){const n=Xw(t._queryParams),i=t._path.toString(),o=new hu;return this.restRequest_(i+".json",n,(l,u)=>{let f=u;l===404&&(f=null,l=null),l===null?(this.onDataUpdate_(i,f,!1,null),o.resolve(f)):o.reject(new Error(f))}),o.promise}refreshAuthToken(t){}restRequest_(t,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,l])=>{o&&o.accessToken&&(n.auth=o.accessToken),l&&l.token&&(n.ac=l.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+Ya(n);this.log_("Sending REST request for "+u);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(i&&f.readyState===4){this.log_("REST Response for "+u+" received. status:",f.status,"response:",f.responseText);let p=null;if(f.status>=200&&f.status<300){try{p=Hc(f.responseText)}catch{dn("Failed to parse JSON response for "+u+": "+f.responseText)}i(null,p)}else f.status!==401&&f.status!==404&&dn("Got unsuccessful REST response for "+u+" Status: "+f.status),i(f.status);i=null}},f.open("GET",u,!0),f.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z3{constructor(){this.rootNode_=Ne.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,n){this.rootNode_=this.rootNode_.updateChild(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(){return{value:null,children:new Map}}function LA(e,t,n){if(We(t))e.value=n,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(t,n);else{const i=Fe(t);e.children.has(i)||e.children.set(i,nh());const o=e.children.get(i);t=ht(t),LA(o,t,n)}}function ov(e,t,n){e.value!==null?n(t,e.value):B3(e,(i,o)=>{const l=new ct(t.toString()+"/"+i);ov(o,l,n)})}function B3(e,t){e.children.forEach((n,i)=>{t(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H3{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),n={...t};return this.last_&&nn(this.last_,(i,o)=>{n[i]=n[i]-o}),this.last_=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw=10*1e3,F3=30*1e3,q3=300*1e3;class V3{constructor(t,n){this.server_=n,this.statsToReport_={},this.statsListener_=new H3(t);const i=Jw+(F3-Jw)*Math.random();Nc(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const t=this.statsListener_.get(),n={};let i=!1;nn(t,(o,l)=>{l>0&&Pr(this.statsToReport_,o)&&(n[o]=l,i=!0)}),i&&this.server_.reportStats(n),Nc(this.reportStats_.bind(this),Math.floor(Math.random()*2*q3))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fr;(function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(fr||(fr={}));function I_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function D_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function k_(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(t,n,i){this.path=t,this.affectedTree=n,this.revert=i,this.type=fr.ACK_USER_WRITE,this.source=I_()}operationForChild(t){if(We(this.path)){if(this.affectedTree.value!=null)return he(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ct(t));return new rh(Ke(),n,this.revert)}}else return he(Fe(this.path)===t,"operationForChild called for unrelated child."),new rh(ht(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(t,n){this.source=t,this.path=n,this.type=fr.LISTEN_COMPLETE}operationForChild(t){return We(this.path)?new nu(this.source,Ke()):new nu(this.source,ht(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(t,n,i){this.source=t,this.path=n,this.snap=i,this.type=fr.OVERWRITE}operationForChild(t){return We(this.path)?new _o(this.source,Ke(),this.snap.getImmediateChild(t)):new _o(this.source,ht(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(t,n,i){this.source=t,this.path=n,this.children=i,this.type=fr.MERGE}operationForChild(t){if(We(this.path)){const n=this.children.subtree(new ct(t));return n.isEmpty()?null:n.value?new _o(this.source,Ke(),n.value):new za(this.source,Ke(),n)}else return he(Fe(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new za(this.source,ht(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(t,n,i){this.node_=t,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(We(t))return this.isFullyInitialized()&&!this.filtered_;const n=Fe(t);return this.isCompleteForChild(n)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G3{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function W3(e,t,n,i){const o=[],l=[];return t.forEach(u=>{u.type==="child_changed"&&e.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&l.push(P3(u.childName,u.snapshotNode))}),lc(e,o,"child_removed",t,i,n),lc(e,o,"child_added",t,i,n),lc(e,o,"child_moved",l,i,n),lc(e,o,"child_changed",t,i,n),lc(e,o,"value",t,i,n),o}function lc(e,t,n,i,o,l){const u=i.filter(f=>f.type===n);u.sort((f,p)=>Q3(e,f,p)),u.forEach(f=>{const p=Y3(e,f,l);o.forEach(h=>{h.respondsTo(f.type)&&t.push(h.createEvent(p,e.query_))})})}function Y3(e,t,n){return t.type==="value"||t.type==="child_removed"||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function Q3(e,t,n){if(t.childName==null||n.childName==null)throw Ga("Should only compare child_ events.");const i=new qe(t.childName,t.snapshotNode),o=new qe(n.childName,n.snapshotNode);return e.index_.compare(i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(e,t){return{eventCache:e,serverCache:t}}function Oc(e,t,n,i){return Kh(new ws(t,n,i),e.serverCache)}function jA(e,t,n,i){return Kh(e.eventCache,new ws(t,n,i))}function ih(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function bo(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ny;const K3=()=>(ny||(ny=new Sn(M6)),ny);class ft{static fromObject(t){let n=new ft(null);return nn(t,(i,o)=>{n=n.set(new ct(i),o)}),n}constructor(t,n=K3()){this.value=t,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,n){if(this.value!=null&&n(this.value))return{path:Ke(),value:this.value};if(We(t))return null;{const i=Fe(t),o=this.children.get(i);if(o!==null){const l=o.findRootMostMatchingPathAndValue(ht(t),n);return l!=null?{path:Rt(new ct(i),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(We(t))return this;{const n=Fe(t),i=this.children.get(n);return i!==null?i.subtree(ht(t)):new ft(null)}}set(t,n){if(We(t))return new ft(n,this.children);{const i=Fe(t),l=(this.children.get(i)||new ft(null)).set(ht(t),n),u=this.children.insert(i,l);return new ft(this.value,u)}}remove(t){if(We(t))return this.children.isEmpty()?new ft(null):new ft(null,this.children);{const n=Fe(t),i=this.children.get(n);if(i){const o=i.remove(ht(t));let l;return o.isEmpty()?l=this.children.remove(n):l=this.children.insert(n,o),this.value===null&&l.isEmpty()?new ft(null):new ft(this.value,l)}else return this}}get(t){if(We(t))return this.value;{const n=Fe(t),i=this.children.get(n);return i?i.get(ht(t)):null}}setTree(t,n){if(We(t))return n;{const i=Fe(t),l=(this.children.get(i)||new ft(null)).setTree(ht(t),n);let u;return l.isEmpty()?u=this.children.remove(i):u=this.children.insert(i,l),new ft(this.value,u)}}fold(t){return this.fold_(Ke(),t)}fold_(t,n){const i={};return this.children.inorderTraversal((o,l)=>{i[o]=l.fold_(Rt(t,o),n)}),n(t,this.value,i)}findOnPath(t,n){return this.findOnPath_(t,Ke(),n)}findOnPath_(t,n,i){const o=this.value?i(n,this.value):!1;if(o)return o;if(We(t))return null;{const l=Fe(t),u=this.children.get(l);return u?u.findOnPath_(ht(t),Rt(n,l),i):null}}foreachOnPath(t,n){return this.foreachOnPath_(t,Ke(),n)}foreachOnPath_(t,n,i){if(We(t))return this;{this.value&&i(n,this.value);const o=Fe(t),l=this.children.get(o);return l?l.foreachOnPath_(ht(t),Rt(n,o),i):new ft(null)}}foreach(t){this.foreach_(Ke(),t)}foreach_(t,n){this.children.inorderTraversal((i,o)=>{o.foreach_(Rt(t,i),n)}),this.value&&n(t,this.value)}foreachChild(t){this.children.inorderTraversal((n,i)=>{i.value&&t(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(t){this.writeTree_=t}static empty(){return new yr(new ft(null))}}function Mc(e,t,n){if(We(t))return new yr(new ft(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(i!=null){const o=i.path;let l=i.value;const u=un(o,t);return l=l.updateChild(u,n),new yr(e.writeTree_.set(o,l))}else{const o=new ft(n),l=e.writeTree_.setTree(t,o);return new yr(l)}}}function av(e,t,n){let i=e;return nn(n,(o,l)=>{i=Mc(i,Rt(t,o),l)}),i}function eE(e,t){if(We(t))return yr.empty();{const n=e.writeTree_.setTree(t,new ft(null));return new yr(n)}}function lv(e,t){return Ro(e,t)!=null}function Ro(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return n!=null?e.writeTree_.get(n.path).getChild(un(n.path,t)):null}function tE(e){const t=[],n=e.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(At,(i,o)=>{t.push(new qe(i,o))}):e.writeTree_.children.inorderTraversal((i,o)=>{o.value!=null&&t.push(new qe(i,o.value))}),t}function hs(e,t){if(We(t))return e;{const n=Ro(e,t);return n!=null?new yr(new ft(n)):new yr(e.writeTree_.subtree(t))}}function cv(e){return e.writeTree_.isEmpty()}function Ba(e,t){return PA(Ke(),e.writeTree_,t)}function PA(e,t,n){if(t.value!=null)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal((o,l)=>{o===".priority"?(he(l.value!==null,"Priority writes must always be leaf nodes"),i=l.value):n=PA(Rt(e,o),l,n)}),!n.getChild(e).isEmpty()&&i!==null&&(n=n.updateChild(Rt(e,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(e,t){return BA(t,e)}function X3(e,t,n,i,o){he(i>e.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:o}),o&&(e.visibleWrites=Mc(e.visibleWrites,t,n)),e.lastWriteId=i}function Z3(e,t,n,i){he(i>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:i,visible:!0}),e.visibleWrites=av(e.visibleWrites,t,n),e.lastWriteId=i}function J3(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}function e5(e,t){const n=e.allWrites.findIndex(f=>f.writeId===t);he(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let o=i.visible,l=!1,u=e.allWrites.length-1;for(;o&&u>=0;){const f=e.allWrites[u];f.visible&&(u>=n&&t5(f,i.path)?o=!1:Xn(i.path,f.path)&&(l=!0)),u--}if(o){if(l)return n5(e),!0;if(i.snap)e.visibleWrites=eE(e.visibleWrites,i.path);else{const f=i.children;nn(f,p=>{e.visibleWrites=eE(e.visibleWrites,Rt(i.path,p))})}return!0}else return!1}function t5(e,t){if(e.snap)return Xn(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Xn(Rt(e.path,n),t))return!0;return!1}function n5(e){e.visibleWrites=$A(e.allWrites,r5,Ke()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function r5(e){return e.visible}function $A(e,t,n){let i=yr.empty();for(let o=0;o<e.length;++o){const l=e[o];if(t(l)){const u=l.path;let f;if(l.snap)Xn(n,u)?(f=un(n,u),i=Mc(i,f,l.snap)):Xn(u,n)&&(f=un(u,n),i=Mc(i,Ke(),l.snap.getChild(f)));else if(l.children){if(Xn(n,u))f=un(n,u),i=av(i,f,l.children);else if(Xn(u,n))if(f=un(u,n),We(f))i=av(i,Ke(),l.children);else{const p=La(l.children,Fe(f));if(p){const h=p.getChild(ht(f));i=Mc(i,Ke(),h)}}}else throw Ga("WriteRecord should have .snap or .children")}}return i}function UA(e,t,n,i,o){if(!i&&!o){const l=Ro(e.visibleWrites,t);if(l!=null)return l;{const u=hs(e.visibleWrites,t);if(cv(u))return n;if(n==null&&!lv(u,Ke()))return null;{const f=n||Ne.EMPTY_NODE;return Ba(u,f)}}}else{const l=hs(e.visibleWrites,t);if(!o&&cv(l))return n;if(!o&&n==null&&!lv(l,Ke()))return null;{const u=function(h){return(h.visible||o)&&(!i||!~i.indexOf(h.writeId))&&(Xn(h.path,t)||Xn(t,h.path))},f=$A(e.allWrites,u,t),p=n||Ne.EMPTY_NODE;return Ba(f,p)}}}function i5(e,t,n){let i=Ne.EMPTY_NODE;const o=Ro(e.visibleWrites,t);if(o)return o.isLeafNode()||o.forEachChild(At,(l,u)=>{i=i.updateImmediateChild(l,u)}),i;if(n){const l=hs(e.visibleWrites,t);return n.forEachChild(At,(u,f)=>{const p=Ba(hs(l,new ct(u)),f);i=i.updateImmediateChild(u,p)}),tE(l).forEach(u=>{i=i.updateImmediateChild(u.name,u.node)}),i}else{const l=hs(e.visibleWrites,t);return tE(l).forEach(u=>{i=i.updateImmediateChild(u.name,u.node)}),i}}function s5(e,t,n,i,o){he(i||o,"Either existingEventSnap or existingServerSnap must exist");const l=Rt(t,n);if(lv(e.visibleWrites,l))return null;{const u=hs(e.visibleWrites,l);return cv(u)?o.getChild(n):Ba(u,o.getChild(n))}}function o5(e,t,n,i){const o=Rt(t,n),l=Ro(e.visibleWrites,o);if(l!=null)return l;if(i.isCompleteForChild(n)){const u=hs(e.visibleWrites,o);return Ba(u,i.getNode().getImmediateChild(n))}else return null}function a5(e,t){return Ro(e.visibleWrites,t)}function l5(e,t,n,i,o,l,u){let f;const p=hs(e.visibleWrites,t),h=Ro(p,Ke());if(h!=null)f=h;else if(n!=null)f=Ba(p,n);else return[];if(f=f.withIndex(u),!f.isEmpty()&&!f.isLeafNode()){const y=[],_=u.getCompare(),v=l?f.getReverseIteratorFrom(i,u):f.getIteratorFrom(i,u);let b=v.getNext();for(;b&&y.length<o;)_(b,i)!==0&&y.push(b),b=v.getNext();return y}else return[]}function c5(){return{visibleWrites:yr.empty(),allWrites:[],lastWriteId:-1}}function sh(e,t,n,i){return UA(e.writeTree,e.treePath,t,n,i)}function N_(e,t){return i5(e.writeTree,e.treePath,t)}function nE(e,t,n,i){return s5(e.writeTree,e.treePath,t,n,i)}function oh(e,t){return a5(e.writeTree,Rt(e.treePath,t))}function u5(e,t,n,i,o,l){return l5(e.writeTree,e.treePath,t,n,i,o,l)}function O_(e,t,n){return o5(e.writeTree,e.treePath,t,n)}function zA(e,t){return BA(Rt(e.treePath,t),e.writeTree)}function BA(e,t){return{treePath:e,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d5{constructor(){this.changeMap=new Map}trackChildChange(t){const n=t.type,i=t.childName;he(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),he(i!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(i);if(o){const l=o.type;if(n==="child_added"&&l==="child_removed")this.changeMap.set(i,eu(i,t.snapshotNode,o.snapshotNode));else if(n==="child_removed"&&l==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&l==="child_changed")this.changeMap.set(i,Jc(i,o.oldSnap));else if(n==="child_changed"&&l==="child_added")this.changeMap.set(i,Ua(i,t.snapshotNode));else if(n==="child_changed"&&l==="child_changed")this.changeMap.set(i,eu(i,t.snapshotNode,o.oldSnap));else throw Ga("Illegal combination of changes: "+t+" occurred after "+o)}else this.changeMap.set(i,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f5{getCompleteChild(t){return null}getChildAfterChild(t,n,i){return null}}const HA=new f5;class M_{constructor(t,n,i=null){this.writes_=t,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(t){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(t))return n.getNode().getImmediateChild(t);{const i=this.optCompleteServerCache_!=null?new ws(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return O_(this.writes_,t,i)}}getChildAfterChild(t,n,i){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:bo(this.viewCache_),l=u5(this.writes_,o,n,1,i,t);return l.length===0?null:l[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h5(e){return{filter:e}}function p5(e,t){he(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),he(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function m5(e,t,n,i,o){const l=new d5;let u,f;if(n.type===fr.OVERWRITE){const h=n;h.source.fromUser?u=uv(e,t,h.path,h.snap,i,o,l):(he(h.source.fromServer,"Unknown source."),f=h.source.tagged||t.serverCache.isFiltered()&&!We(h.path),u=ah(e,t,h.path,h.snap,i,o,f,l))}else if(n.type===fr.MERGE){const h=n;h.source.fromUser?u=y5(e,t,h.path,h.children,i,o,l):(he(h.source.fromServer,"Unknown source."),f=h.source.tagged||t.serverCache.isFiltered(),u=dv(e,t,h.path,h.children,i,o,f,l))}else if(n.type===fr.ACK_USER_WRITE){const h=n;h.revert?u=b5(e,t,h.path,i,o,l):u=v5(e,t,h.path,h.affectedTree,i,o,l)}else if(n.type===fr.LISTEN_COMPLETE)u=_5(e,t,n.path,i,l);else throw Ga("Unknown operation type: "+n.type);const p=l.getChanges();return g5(t,u,p),{viewCache:u,changes:p}}function g5(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const o=i.getNode().isLeafNode()||i.getNode().isEmpty(),l=ih(e);(n.length>0||!e.eventCache.isFullyInitialized()||o&&!i.getNode().equals(l)||!i.getNode().getPriority().equals(l.getPriority()))&&n.push(MA(ih(t)))}}function FA(e,t,n,i,o,l){const u=t.eventCache;if(oh(i,n)!=null)return t;{let f,p;if(We(n))if(he(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const h=bo(t),y=h instanceof Ne?h:Ne.EMPTY_NODE,_=N_(i,y);f=e.filter.updateFullNode(t.eventCache.getNode(),_,l)}else{const h=sh(i,bo(t));f=e.filter.updateFullNode(t.eventCache.getNode(),h,l)}else{const h=Fe(n);if(h===".priority"){he(xs(n)===1,"Can't have a priority with additional path components");const y=u.getNode();p=t.serverCache.getNode();const _=nE(i,n,y,p);_!=null?f=e.filter.updatePriority(y,_):f=u.getNode()}else{const y=ht(n);let _;if(u.isCompleteForChild(h)){p=t.serverCache.getNode();const v=nE(i,n,u.getNode(),p);v!=null?_=u.getNode().getImmediateChild(h).updateChild(y,v):_=u.getNode().getImmediateChild(h)}else _=O_(i,h,t.serverCache);_!=null?f=e.filter.updateChild(u.getNode(),h,_,y,o,l):f=u.getNode()}}return Oc(t,f,u.isFullyInitialized()||We(n),e.filter.filtersNodes())}}function ah(e,t,n,i,o,l,u,f){const p=t.serverCache;let h;const y=u?e.filter:e.filter.getIndexedFilter();if(We(n))h=y.updateFullNode(p.getNode(),i,null);else if(y.filtersNodes()&&!p.isFiltered()){const b=p.getNode().updateChild(n,i);h=y.updateFullNode(p.getNode(),b,null)}else{const b=Fe(n);if(!p.isCompleteForPath(n)&&xs(n)>1)return t;const x=ht(n),T=p.getNode().getImmediateChild(b).updateChild(x,i);b===".priority"?h=y.updatePriority(p.getNode(),T):h=y.updateChild(p.getNode(),b,T,x,HA,null)}const _=jA(t,h,p.isFullyInitialized()||We(n),y.filtersNodes()),v=new M_(o,_,l);return FA(e,_,n,o,v,f)}function uv(e,t,n,i,o,l,u){const f=t.eventCache;let p,h;const y=new M_(o,t,l);if(We(n))h=e.filter.updateFullNode(t.eventCache.getNode(),i,u),p=Oc(t,h,!0,e.filter.filtersNodes());else{const _=Fe(n);if(_===".priority")h=e.filter.updatePriority(t.eventCache.getNode(),i),p=Oc(t,h,f.isFullyInitialized(),f.isFiltered());else{const v=ht(n),b=f.getNode().getImmediateChild(_);let x;if(We(v))x=i;else{const I=y.getCompleteChild(_);I!=null?w_(v)===".priority"&&I.getChild(RA(v)).isEmpty()?x=I:x=I.updateChild(v,i):x=Ne.EMPTY_NODE}if(b.equals(x))p=t;else{const I=e.filter.updateChild(f.getNode(),_,x,v,y,u);p=Oc(t,I,f.isFullyInitialized(),e.filter.filtersNodes())}}}return p}function rE(e,t){return e.eventCache.isCompleteForChild(t)}function y5(e,t,n,i,o,l,u){let f=t;return i.foreach((p,h)=>{const y=Rt(n,p);rE(t,Fe(y))&&(f=uv(e,f,y,h,o,l,u))}),i.foreach((p,h)=>{const y=Rt(n,p);rE(t,Fe(y))||(f=uv(e,f,y,h,o,l,u))}),f}function iE(e,t,n){return n.foreach((i,o)=>{t=t.updateChild(i,o)}),t}function dv(e,t,n,i,o,l,u,f){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let p=t,h;We(n)?h=i:h=new ft(null).setTree(n,i);const y=t.serverCache.getNode();return h.children.inorderTraversal((_,v)=>{if(y.hasChild(_)){const b=t.serverCache.getNode().getImmediateChild(_),x=iE(e,b,v);p=ah(e,p,new ct(_),x,o,l,u,f)}}),h.children.inorderTraversal((_,v)=>{const b=!t.serverCache.isCompleteForChild(_)&&v.value===null;if(!y.hasChild(_)&&!b){const x=t.serverCache.getNode().getImmediateChild(_),I=iE(e,x,v);p=ah(e,p,new ct(_),I,o,l,u,f)}}),p}function v5(e,t,n,i,o,l,u){if(oh(o,n)!=null)return t;const f=t.serverCache.isFiltered(),p=t.serverCache;if(i.value!=null){if(We(n)&&p.isFullyInitialized()||p.isCompleteForPath(n))return ah(e,t,n,p.getNode().getChild(n),o,l,f,u);if(We(n)){let h=new ft(null);return p.getNode().forEachChild(Ca,(y,_)=>{h=h.set(new ct(y),_)}),dv(e,t,n,h,o,l,f,u)}else return t}else{let h=new ft(null);return i.foreach((y,_)=>{const v=Rt(n,y);p.isCompleteForPath(v)&&(h=h.set(y,p.getNode().getChild(v)))}),dv(e,t,n,h,o,l,f,u)}}function _5(e,t,n,i,o){const l=t.serverCache,u=jA(t,l.getNode(),l.isFullyInitialized()||We(n),l.isFiltered());return FA(e,u,n,i,HA,o)}function b5(e,t,n,i,o,l){let u;if(oh(i,n)!=null)return t;{const f=new M_(i,t,o),p=t.eventCache.getNode();let h;if(We(n)||Fe(n)===".priority"){let y;if(t.serverCache.isFullyInitialized())y=sh(i,bo(t));else{const _=t.serverCache.getNode();he(_ instanceof Ne,"serverChildren would be complete if leaf node"),y=N_(i,_)}y=y,h=e.filter.updateFullNode(p,y,l)}else{const y=Fe(n);let _=O_(i,y,t.serverCache);_==null&&t.serverCache.isCompleteForChild(y)&&(_=p.getImmediateChild(y)),_!=null?h=e.filter.updateChild(p,y,_,ht(n),f,l):t.eventCache.getNode().hasChild(y)?h=e.filter.updateChild(p,y,Ne.EMPTY_NODE,ht(n),f,l):h=p,h.isEmpty()&&t.serverCache.isFullyInitialized()&&(u=sh(i,bo(t)),u.isLeafNode()&&(h=e.filter.updateFullNode(h,u,l)))}return u=t.serverCache.isFullyInitialized()||oh(i,Ke())!=null,Oc(t,h,u,e.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S5{constructor(t,n){this.query_=t,this.eventRegistrations_=[];const i=this.query_._queryParams,o=new R_(i.getIndex()),l=U3(i);this.processor_=h5(l);const u=n.serverCache,f=n.eventCache,p=o.updateFullNode(Ne.EMPTY_NODE,u.getNode(),null),h=l.updateFullNode(Ne.EMPTY_NODE,f.getNode(),null),y=new ws(p,u.isFullyInitialized(),o.filtersNodes()),_=new ws(h,f.isFullyInitialized(),l.filtersNodes());this.viewCache_=Kh(_,y),this.eventGenerator_=new G3(this.query_)}get query(){return this.query_}}function x5(e){return e.viewCache_.serverCache.getNode()}function w5(e){return ih(e.viewCache_)}function E5(e,t){const n=bo(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!We(t)&&!n.getImmediateChild(Fe(t)).isEmpty())?n.getChild(t):null}function sE(e){return e.eventRegistrations_.length===0}function C5(e,t){e.eventRegistrations_.push(t)}function oE(e,t,n){const i=[];if(n){he(t==null,"A cancel should cancel all event registrations.");const o=e.query._path;e.eventRegistrations_.forEach(l=>{const u=l.createCancelEvent(n,o);u&&i.push(u)})}if(t){let o=[];for(let l=0;l<e.eventRegistrations_.length;++l){const u=e.eventRegistrations_[l];if(!u.matches(t))o.push(u);else if(t.hasAnyCallback()){o=o.concat(e.eventRegistrations_.slice(l+1));break}}e.eventRegistrations_=o}else e.eventRegistrations_=[];return i}function aE(e,t,n,i){t.type===fr.MERGE&&t.source.queryId!==null&&(he(bo(e.viewCache_),"We should always have a full cache before handling merges"),he(ih(e.viewCache_),"Missing event cache, even though we have a server cache"));const o=e.viewCache_,l=m5(e.processor_,o,t,n,i);return p5(e.processor_,l.viewCache),he(l.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=l.viewCache,qA(e,l.changes,l.viewCache.eventCache.getNode(),null)}function T5(e,t){const n=e.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(At,(l,u)=>{i.push(Ua(l,u))}),n.isFullyInitialized()&&i.push(MA(n.getNode())),qA(e,i,n.getNode(),t)}function qA(e,t,n,i){const o=i?[i]:e.eventRegistrations_;return W3(e.eventGenerator_,t,n,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lh;class VA{constructor(){this.views=new Map}}function R5(e){he(!lh,"__referenceConstructor has already been defined"),lh=e}function A5(){return he(lh,"Reference.ts has not been loaded"),lh}function I5(e){return e.views.size===0}function L_(e,t,n,i){const o=t.source.queryId;if(o!==null){const l=e.views.get(o);return he(l!=null,"SyncTree gave us an op for an invalid query."),aE(l,t,n,i)}else{let l=[];for(const u of e.views.values())l=l.concat(aE(u,t,n,i));return l}}function GA(e,t,n,i,o){const l=t._queryIdentifier,u=e.views.get(l);if(!u){let f=sh(n,o?i:null),p=!1;f?p=!0:i instanceof Ne?(f=N_(n,i),p=!1):(f=Ne.EMPTY_NODE,p=!1);const h=Kh(new ws(f,p,!1),new ws(i,o,!1));return new S5(t,h)}return u}function D5(e,t,n,i,o,l){const u=GA(e,t,i,o,l);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,u),C5(u,n),T5(u,n)}function k5(e,t,n,i){const o=t._queryIdentifier,l=[];let u=[];const f=Es(e);if(o==="default")for(const[p,h]of e.views.entries())u=u.concat(oE(h,n,i)),sE(h)&&(e.views.delete(p),h.query._queryParams.loadsAllData()||l.push(h.query));else{const p=e.views.get(o);p&&(u=u.concat(oE(p,n,i)),sE(p)&&(e.views.delete(o),p.query._queryParams.loadsAllData()||l.push(p.query)))}return f&&!Es(e)&&l.push(new(A5())(t._repo,t._path)),{removed:l,events:u}}function WA(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function ps(e,t){let n=null;for(const i of e.views.values())n=n||E5(i,t);return n}function YA(e,t){if(t._queryParams.loadsAllData())return Zh(e);{const i=t._queryIdentifier;return e.views.get(i)}}function QA(e,t){return YA(e,t)!=null}function Es(e){return Zh(e)!=null}function Zh(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ch;function N5(e){he(!ch,"__referenceConstructor has already been defined"),ch=e}function O5(){return he(ch,"Reference.ts has not been loaded"),ch}let M5=1;class lE{constructor(t){this.listenProvider_=t,this.syncPointTree_=new ft(null),this.pendingWriteTree_=c5(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function KA(e,t,n,i,o){return X3(e.pendingWriteTree_,t,n,i,o),o?el(e,new _o(I_(),t,n)):[]}function L5(e,t,n,i){Z3(e.pendingWriteTree_,t,n,i);const o=ft.fromObject(n);return el(e,new za(I_(),t,o))}function cs(e,t,n=!1){const i=J3(e.pendingWriteTree_,t);if(e5(e.pendingWriteTree_,t)){let l=new ft(null);return i.snap!=null?l=l.set(Ke(),!0):nn(i.children,u=>{l=l.set(new ct(u),!0)}),el(e,new rh(i.path,l,n))}else return[]}function xu(e,t,n){return el(e,new _o(D_(),t,n))}function j5(e,t,n){const i=ft.fromObject(n);return el(e,new za(D_(),t,i))}function P5(e,t){return el(e,new nu(D_(),t))}function $5(e,t,n){const i=P_(e,n);if(i){const o=$_(i),l=o.path,u=o.queryId,f=un(l,t),p=new nu(k_(u),f);return U_(e,l,p)}else return[]}function uh(e,t,n,i,o=!1){const l=t._path,u=e.syncPointTree_.get(l);let f=[];if(u&&(t._queryIdentifier==="default"||QA(u,t))){const p=k5(u,t,n,i);I5(u)&&(e.syncPointTree_=e.syncPointTree_.remove(l));const h=p.removed;if(f=p.events,!o){const y=h.findIndex(v=>v._queryParams.loadsAllData())!==-1,_=e.syncPointTree_.findOnPath(l,(v,b)=>Es(b));if(y&&!_){const v=e.syncPointTree_.subtree(l);if(!v.isEmpty()){const b=B5(v);for(let x=0;x<b.length;++x){const I=b[x],T=I.query,k=eI(e,I);e.listenProvider_.startListening(Lc(T),ru(e,T),k.hashFn,k.onComplete)}}}!_&&h.length>0&&!i&&(y?e.listenProvider_.stopListening(Lc(t),null):h.forEach(v=>{const b=e.queryToTagMap.get(Jh(v));e.listenProvider_.stopListening(Lc(v),b)}))}H5(e,h)}return f}function XA(e,t,n,i){const o=P_(e,i);if(o!=null){const l=$_(o),u=l.path,f=l.queryId,p=un(u,t),h=new _o(k_(f),p,n);return U_(e,u,h)}else return[]}function U5(e,t,n,i){const o=P_(e,i);if(o){const l=$_(o),u=l.path,f=l.queryId,p=un(u,t),h=ft.fromObject(n),y=new za(k_(f),p,h);return U_(e,u,y)}else return[]}function fv(e,t,n,i=!1){const o=t._path;let l=null,u=!1;e.syncPointTree_.foreachOnPath(o,(v,b)=>{const x=un(v,o);l=l||ps(b,x),u=u||Es(b)});let f=e.syncPointTree_.get(o);f?(u=u||Es(f),l=l||ps(f,Ke())):(f=new VA,e.syncPointTree_=e.syncPointTree_.set(o,f));let p;l!=null?p=!0:(p=!1,l=Ne.EMPTY_NODE,e.syncPointTree_.subtree(o).foreachChild((b,x)=>{const I=ps(x,Ke());I&&(l=l.updateImmediateChild(b,I))}));const h=QA(f,t);if(!h&&!t._queryParams.loadsAllData()){const v=Jh(t);he(!e.queryToTagMap.has(v),"View does not exist, but we have a tag");const b=F5();e.queryToTagMap.set(v,b),e.tagToQueryMap.set(b,v)}const y=Xh(e.pendingWriteTree_,o);let _=D5(f,t,n,y,l,p);if(!h&&!u&&!i){const v=YA(f,t);_=_.concat(q5(e,t,v))}return _}function j_(e,t,n){const o=e.pendingWriteTree_,l=e.syncPointTree_.findOnPath(t,(u,f)=>{const p=un(u,t),h=ps(f,p);if(h)return h});return UA(o,t,l,n,!0)}function z5(e,t){const n=t._path;let i=null;e.syncPointTree_.foreachOnPath(n,(h,y)=>{const _=un(h,n);i=i||ps(y,_)});let o=e.syncPointTree_.get(n);o?i=i||ps(o,Ke()):(o=new VA,e.syncPointTree_=e.syncPointTree_.set(n,o));const l=i!=null,u=l?new ws(i,!0,!1):null,f=Xh(e.pendingWriteTree_,t._path),p=GA(o,t,f,l?u.getNode():Ne.EMPTY_NODE,l);return w5(p)}function el(e,t){return ZA(t,e.syncPointTree_,null,Xh(e.pendingWriteTree_,Ke()))}function ZA(e,t,n,i){if(We(e.path))return JA(e,t,n,i);{const o=t.get(Ke());n==null&&o!=null&&(n=ps(o,Ke()));let l=[];const u=Fe(e.path),f=e.operationForChild(u),p=t.children.get(u);if(p&&f){const h=n?n.getImmediateChild(u):null,y=zA(i,u);l=l.concat(ZA(f,p,h,y))}return o&&(l=l.concat(L_(o,e,i,n))),l}}function JA(e,t,n,i){const o=t.get(Ke());n==null&&o!=null&&(n=ps(o,Ke()));let l=[];return t.children.inorderTraversal((u,f)=>{const p=n?n.getImmediateChild(u):null,h=zA(i,u),y=e.operationForChild(u);y&&(l=l.concat(JA(y,f,p,h)))}),o&&(l=l.concat(L_(o,e,i,n))),l}function eI(e,t){const n=t.query,i=ru(e,n);return{hashFn:()=>(x5(t)||Ne.EMPTY_NODE).hash(),onComplete:o=>{if(o==="ok")return i?$5(e,n._path,i):P5(e,n._path);{const l=P6(o,n);return uh(e,n,null,l)}}}}function ru(e,t){const n=Jh(t);return e.queryToTagMap.get(n)}function Jh(e){return e._path.toString()+"$"+e._queryIdentifier}function P_(e,t){return e.tagToQueryMap.get(t)}function $_(e){const t=e.indexOf("$");return he(t!==-1&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ct(e.substr(0,t))}}function U_(e,t,n){const i=e.syncPointTree_.get(t);he(i,"Missing sync point for query tag that we're tracking");const o=Xh(e.pendingWriteTree_,t);return L_(i,n,o,null)}function B5(e){return e.fold((t,n,i)=>{if(n&&Es(n))return[Zh(n)];{let o=[];return n&&(o=WA(n)),nn(i,(l,u)=>{o=o.concat(u)}),o}})}function Lc(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(O5())(e._repo,e._path):e}function H5(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const o=Jh(i),l=e.queryToTagMap.get(o);e.queryToTagMap.delete(o),e.tagToQueryMap.delete(l)}}}function F5(){return M5++}function q5(e,t,n){const i=t._path,o=ru(e,t),l=eI(e,n),u=e.listenProvider_.startListening(Lc(t),o,l.hashFn,l.onComplete),f=e.syncPointTree_.subtree(i);if(o)he(!Es(f.value),"If we're adding a query, it shouldn't be shadowed");else{const p=f.fold((h,y,_)=>{if(!We(h)&&y&&Es(y))return[Zh(y).query];{let v=[];return y&&(v=v.concat(WA(y).map(b=>b.query))),nn(_,(b,x)=>{v=v.concat(x)}),v}});for(let h=0;h<p.length;++h){const y=p[h];e.listenProvider_.stopListening(Lc(y),ru(e,y))}}return u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(t){this.node_=t}getImmediateChild(t){const n=this.node_.getImmediateChild(t);return new z_(n)}node(){return this.node_}}class B_{constructor(t,n){this.syncTree_=t,this.path_=n}getImmediateChild(t){const n=Rt(this.path_,t);return new B_(this.syncTree_,n)}node(){return j_(this.syncTree_,this.path_)}}const V5=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},cE=function(e,t,n){if(!e||typeof e!="object")return e;if(he(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return G5(e[".sv"],t,n);if(typeof e[".sv"]=="object")return W5(e[".sv"],t);he(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},G5=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:he(!1,"Unexpected server value: "+e)}},W5=function(e,t,n){e.hasOwnProperty("increment")||he(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;typeof i!="number"&&he(!1,"Unexpected increment value: "+i);const o=t.node();if(he(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return i;const u=o.getValue();return typeof u!="number"?i:u+i},tI=function(e,t,n,i){return H_(t,new B_(n,e),i)},nI=function(e,t,n){return H_(e,new z_(t),n)};function H_(e,t,n){const i=e.getPriority().val(),o=cE(i,t.getImmediateChild(".priority"),n);let l;if(e.isLeafNode()){const u=e,f=cE(u.getValue(),t,n);return f!==u.getValue()||o!==u.getPriority().val()?new Ht(f,Pt(o)):e}else{const u=e;return l=u,o!==u.getPriority().val()&&(l=l.updatePriority(new Ht(o))),u.forEachChild(At,(f,p)=>{const h=H_(p,t.getImmediateChild(f),n);h!==p&&(l=l.updateImmediateChild(f,h))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(t="",n=null,i={children:{},childCount:0}){this.name=t,this.parent=n,this.node=i}}function q_(e,t){let n=t instanceof ct?t:new ct(t),i=e,o=Fe(n);for(;o!==null;){const l=La(i.node.children,o)||{children:{},childCount:0};i=new F_(o,i,l),n=ht(n),o=Fe(n)}return i}function tl(e){return e.node.value}function rI(e,t){e.node.value=t,hv(e)}function iI(e){return e.node.childCount>0}function Y5(e){return tl(e)===void 0&&!iI(e)}function ep(e,t){nn(e.node.children,(n,i)=>{t(new F_(n,e,i))})}function sI(e,t,n,i){n&&t(e),ep(e,o=>{sI(o,t,!0)})}function Q5(e,t,n){let i=e.parent;for(;i!==null;){if(t(i))return!0;i=i.parent}return!1}function wu(e){return new ct(e.parent===null?e.name:wu(e.parent)+"/"+e.name)}function hv(e){e.parent!==null&&K5(e.parent,e.name,e)}function K5(e,t,n){const i=Y5(n),o=Pr(e.node.children,t);i&&o?(delete e.node.children[t],e.node.childCount--,hv(e)):!i&&!o&&(e.node.children[t]=n.node,e.node.childCount++,hv(e))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X5=/[\[\].#$\/\u0000-\u001F\u007F]/,Z5=/[\[\].#$\u0000-\u001F\u007F]/,ry=10*1024*1024,V_=function(e){return typeof e=="string"&&e.length!==0&&!X5.test(e)},oI=function(e){return typeof e=="string"&&e.length!==0&&!Z5.test(e)},J5=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),oI(e)},eU=function(e){return e===null||typeof e=="string"||typeof e=="number"&&!v_(e)||e&&typeof e=="object"&&Pr(e,".sv")},aI=function(e,t,n,i){i&&t===void 0||tp(Uh(e,"value"),t,n)},tp=function(e,t,n){const i=n instanceof ct?new y3(n,e):n;if(t===void 0)throw new Error(e+"contains undefined "+ro(i));if(typeof t=="function")throw new Error(e+"contains a function "+ro(i)+" with contents = "+t.toString());if(v_(t))throw new Error(e+"contains "+t.toString()+" "+ro(i));if(typeof t=="string"&&t.length>ry/3&&zh(t)>ry)throw new Error(e+"contains a string greater than "+ry+" utf8 bytes "+ro(i)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let o=!1,l=!1;if(nn(t,(u,f)=>{if(u===".value")o=!0;else if(u!==".priority"&&u!==".sv"&&(l=!0,!V_(u)))throw new Error(e+" contains an invalid key ("+u+") "+ro(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);v3(i,u),tp(e,f,i),_3(i)}),o&&l)throw new Error(e+' contains ".value" child '+ro(i)+" in addition to actual children.")}},tU=function(e,t){let n,i;for(n=0;n<t.length;n++){i=t[n];const l=Zc(i);for(let u=0;u<l.length;u++)if(!(l[u]===".priority"&&u===l.length-1)){if(!V_(l[u]))throw new Error(e+"contains an invalid key ("+l[u]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}t.sort(g3);let o=null;for(n=0;n<t.length;n++){if(i=t[n],o!==null&&Xn(o,i))throw new Error(e+"contains a path "+o.toString()+" that is ancestor of another path "+i.toString());o=i}},nU=function(e,t,n,i){const o=Uh(e,"values");if(!(t&&typeof t=="object")||Array.isArray(t))throw new Error(o+" must be an object containing the children to replace.");const l=[];nn(t,(u,f)=>{const p=new ct(u);if(tp(o,f,Rt(n,p)),w_(p)===".priority"&&!eU(f))throw new Error(o+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");l.push(p)}),tU(o,l)},lI=function(e,t,n,i){if(!oI(n))throw new Error(Uh(e,t)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},rU=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),lI(e,t,n)},G_=function(e,t){if(Fe(t)===".info")throw new Error(e+" failed = Can't modify data under /.info/")},iU=function(e,t){const n=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!V_(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!J5(n))throw new Error(Uh(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sU{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function np(e,t){let n=null;for(let i=0;i<t.length;i++){const o=t[i],l=o.getPath();n!==null&&!E_(l,n.path)&&(e.eventLists_.push(n),n=null),n===null&&(n={events:[],path:l}),n.events.push(o)}n&&e.eventLists_.push(n)}function cI(e,t,n){np(e,n),uI(e,i=>E_(i,t))}function tr(e,t,n){np(e,n),uI(e,i=>Xn(i,t)||Xn(t,i))}function uI(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const o=e.eventLists_[i];if(o){const l=o.path;t(l)?(oU(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function oU(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(n!==null){e.events[t]=null;const i=n.getEventRunner();kc&&Jt("event: "+n.toString()),Ja(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aU="repo_interrupt",lU=25;class cU{constructor(t,n,i,o){this.repoInfo_=t,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new sU,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=nh(),this.transactionQueueTree_=new F_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function uU(e,t,n){if(e.stats_=S_(e.repoInfo_),e.forceRestClient_||B6())e.server_=new th(e.repoInfo_,(i,o,l,u)=>{uE(e,i,o,l,u)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>dE(e,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{$t(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new gi(e.repoInfo_,t,(i,o,l,u)=>{uE(e,i,o,l,u)},i=>{dE(e,i)},i=>{dU(e,i)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(i=>{e.server_.refreshAuthToken(i)}),e.appCheckProvider_.addTokenChangeListener(i=>{e.server_.refreshAppCheckToken(i.token)}),e.statsReporter_=G6(e.repoInfo_,()=>new V3(e.stats_,e.server_)),e.infoData_=new z3,e.infoSyncTree_=new lE({startListening:(i,o,l,u)=>{let f=[];const p=e.infoData_.getNode(i._path);return p.isEmpty()||(f=xu(e.infoSyncTree_,i._path,p),setTimeout(()=>{u("ok")},0)),f},stopListening:()=>{}}),W_(e,"connected",!1),e.serverSyncTree_=new lE({startListening:(i,o,l,u)=>(e.server_.listen(i,l,o,(f,p)=>{const h=u(f,p);tr(e.eventQueue_,i._path,h)}),[]),stopListening:(i,o)=>{e.server_.unlisten(i,o)}})}function dI(e){const n=e.infoData_.getNode(new ct(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function rp(e){return V5({timestamp:dI(e)})}function uE(e,t,n,i,o){e.dataUpdateCount++;const l=new ct(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let u=[];if(o)if(i){const p=qf(n,h=>Pt(h));u=U5(e.serverSyncTree_,l,p,o)}else{const p=Pt(n);u=XA(e.serverSyncTree_,l,p,o)}else if(i){const p=qf(n,h=>Pt(h));u=j5(e.serverSyncTree_,l,p)}else{const p=Pt(n);u=xu(e.serverSyncTree_,l,p)}let f=l;u.length>0&&(f=Ha(e,l)),tr(e.eventQueue_,f,u)}function dE(e,t){W_(e,"connected",t),t===!1&&mU(e)}function dU(e,t){nn(t,(n,i)=>{W_(e,n,i)})}function W_(e,t,n){const i=new ct("/.info/"+t),o=Pt(n);e.infoData_.updateSnapshot(i,o);const l=xu(e.infoSyncTree_,i,o);tr(e.eventQueue_,i,l)}function Y_(e){return e.nextWriteId_++}function fU(e,t,n){const i=z5(e.serverSyncTree_,t);return i!=null?Promise.resolve(i):e.server_.get(t).then(o=>{const l=Pt(o).withIndex(t._queryParams.getIndex());fv(e.serverSyncTree_,t,n,!0);let u;if(t._queryParams.loadsAllData())u=xu(e.serverSyncTree_,t._path,l);else{const f=ru(e.serverSyncTree_,t);u=XA(e.serverSyncTree_,t._path,l,f)}return tr(e.eventQueue_,t._path,u),uh(e.serverSyncTree_,t,n,null,!0),l},o=>(Eu(e,"get for query "+$t(t)+" failed: "+o),Promise.reject(new Error(o))))}function hU(e,t,n,i,o){Eu(e,"set",{path:t.toString(),value:n,priority:i});const l=rp(e),u=Pt(n,i),f=j_(e.serverSyncTree_,t),p=nI(u,f,l),h=Y_(e),y=KA(e.serverSyncTree_,t,p,h,!0);np(e.eventQueue_,y),e.server_.put(t.toString(),u.val(!0),(v,b)=>{const x=v==="ok";x||dn("set at "+t+" failed: "+v);const I=cs(e.serverSyncTree_,h,!x);tr(e.eventQueue_,t,I),pv(e,o,v,b)});const _=K_(e,t);Ha(e,_),tr(e.eventQueue_,_,[])}function pU(e,t,n,i){Eu(e,"update",{path:t.toString(),value:n});let o=!0;const l=rp(e),u={};if(nn(n,(f,p)=>{o=!1,u[f]=tI(Rt(t,f),Pt(p),e.serverSyncTree_,l)}),o)Jt("update() called with empty data.  Don't do anything."),pv(e,i,"ok",void 0);else{const f=Y_(e),p=L5(e.serverSyncTree_,t,u,f);np(e.eventQueue_,p),e.server_.merge(t.toString(),n,(h,y)=>{const _=h==="ok";_||dn("update at "+t+" failed: "+h);const v=cs(e.serverSyncTree_,f,!_),b=v.length>0?Ha(e,t):t;tr(e.eventQueue_,b,v),pv(e,i,h,y)}),nn(n,h=>{const y=K_(e,Rt(t,h));Ha(e,y)}),tr(e.eventQueue_,t,[])}}function mU(e){Eu(e,"onDisconnectEvents");const t=rp(e),n=nh();ov(e.onDisconnect_,Ke(),(o,l)=>{const u=tI(o,l,e.serverSyncTree_,t);LA(n,o,u)});let i=[];ov(n,Ke(),(o,l)=>{i=i.concat(xu(e.serverSyncTree_,o,l));const u=K_(e,o);Ha(e,u)}),e.onDisconnect_=nh(),tr(e.eventQueue_,Ke(),i)}function gU(e,t,n){let i;Fe(t._path)===".info"?i=fv(e.infoSyncTree_,t,n):i=fv(e.serverSyncTree_,t,n),cI(e.eventQueue_,t._path,i)}function fE(e,t,n){let i;Fe(t._path)===".info"?i=uh(e.infoSyncTree_,t,n):i=uh(e.serverSyncTree_,t,n),cI(e.eventQueue_,t._path,i)}function yU(e){e.persistentConnection_&&e.persistentConnection_.interrupt(aU)}function Eu(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Jt(n,...t)}function pv(e,t,n,i){t&&Ja(()=>{if(n==="ok")t(null);else{const o=(n||"error").toUpperCase();let l=o;i&&(l+=": "+i);const u=new Error(l);u.code=o,t(u)}})}function fI(e,t,n){return j_(e.serverSyncTree_,t,n)||Ne.EMPTY_NODE}function Q_(e,t=e.transactionQueueTree_){if(t||ip(e,t),tl(t)){const n=pI(e,t);he(n.length>0,"Sending zero length transaction queue"),n.every(o=>o.status===0)&&vU(e,wu(t),n)}else iI(t)&&ep(t,n=>{Q_(e,n)})}function vU(e,t,n){const i=n.map(h=>h.currentWriteId),o=fI(e,t,i);let l=o;const u=o.hash();for(let h=0;h<n.length;h++){const y=n[h];he(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const _=un(t,y.path);l=l.updateChild(_,y.currentOutputSnapshotRaw)}const f=l.val(!0),p=t;e.server_.put(p.toString(),f,h=>{Eu(e,"transaction put response",{path:p.toString(),status:h});let y=[];if(h==="ok"){const _=[];for(let v=0;v<n.length;v++)n[v].status=2,y=y.concat(cs(e.serverSyncTree_,n[v].currentWriteId)),n[v].onComplete&&_.push(()=>n[v].onComplete(null,!0,n[v].currentOutputSnapshotResolved)),n[v].unwatcher();ip(e,q_(e.transactionQueueTree_,t)),Q_(e,e.transactionQueueTree_),tr(e.eventQueue_,t,y);for(let v=0;v<_.length;v++)Ja(_[v])}else{if(h==="datastale")for(let _=0;_<n.length;_++)n[_].status===3?n[_].status=4:n[_].status=0;else{dn("transaction at "+p.toString()+" failed: "+h);for(let _=0;_<n.length;_++)n[_].status=4,n[_].abortReason=h}Ha(e,t)}},u)}function Ha(e,t){const n=hI(e,t),i=wu(n),o=pI(e,n);return _U(e,o,i),i}function _U(e,t,n){if(t.length===0)return;const i=[];let o=[];const u=t.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<t.length;f++){const p=t[f],h=un(n,p.path);let y=!1,_;if(he(h!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)y=!0,_=p.abortReason,o=o.concat(cs(e.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=lU)y=!0,_="maxretry",o=o.concat(cs(e.serverSyncTree_,p.currentWriteId,!0));else{const v=fI(e,p.path,u);p.currentInputSnapshot=v;const b=t[f].update(v.val());if(b!==void 0){tp("transaction failed: Data returned ",b,p.path);let x=Pt(b);typeof b=="object"&&b!=null&&Pr(b,".priority")||(x=x.updatePriority(v.getPriority()));const T=p.currentWriteId,k=rp(e),M=nI(x,v,k);p.currentOutputSnapshotRaw=x,p.currentOutputSnapshotResolved=M,p.currentWriteId=Y_(e),u.splice(u.indexOf(T),1),o=o.concat(KA(e.serverSyncTree_,p.path,M,p.currentWriteId,p.applyLocally)),o=o.concat(cs(e.serverSyncTree_,T,!0))}else y=!0,_="nodata",o=o.concat(cs(e.serverSyncTree_,p.currentWriteId,!0))}tr(e.eventQueue_,n,o),o=[],y&&(t[f].status=2,(function(v){setTimeout(v,Math.floor(0))})(t[f].unwatcher),t[f].onComplete&&(_==="nodata"?i.push(()=>t[f].onComplete(null,!1,t[f].currentInputSnapshot)):i.push(()=>t[f].onComplete(new Error(_),!1,null))))}ip(e,e.transactionQueueTree_);for(let f=0;f<i.length;f++)Ja(i[f]);Q_(e,e.transactionQueueTree_)}function hI(e,t){let n,i=e.transactionQueueTree_;for(n=Fe(t);n!==null&&tl(i)===void 0;)i=q_(i,n),t=ht(t),n=Fe(t);return i}function pI(e,t){const n=[];return mI(e,t,n),n.sort((i,o)=>i.order-o.order),n}function mI(e,t,n){const i=tl(t);if(i)for(let o=0;o<i.length;o++)n.push(i[o]);ep(t,o=>{mI(e,o,n)})}function ip(e,t){const n=tl(t);if(n){let i=0;for(let o=0;o<n.length;o++)n[o].status!==2&&(n[i]=n[o],i++);n.length=i,rI(t,n.length>0?n:void 0)}ep(t,i=>{ip(e,i)})}function K_(e,t){const n=wu(hI(e,t)),i=q_(e.transactionQueueTree_,t);return Q5(i,o=>{iy(e,o)}),iy(e,i),sI(i,o=>{iy(e,o)}),n}function iy(e,t){const n=tl(t);if(n){const i=[];let o=[],l=-1;for(let u=0;u<n.length;u++)n[u].status===3||(n[u].status===1?(he(l===u-1,"All SENT items should be at beginning of queue."),l=u,n[u].status=3,n[u].abortReason="set"):(he(n[u].status===0,"Unexpected transaction status in abort"),n[u].unwatcher(),o=o.concat(cs(e.serverSyncTree_,n[u].currentWriteId,!0)),n[u].onComplete&&i.push(n[u].onComplete.bind(null,new Error("set"),!1,null))));l===-1?rI(t,void 0):n.length=l+1,tr(e.eventQueue_,wu(t),o);for(let u=0;u<i.length;u++)Ja(i[u])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bU(e){let t="";const n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let o=n[i];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}t+="/"+o}return t}function SU(e){const t={};e.charAt(0)==="?"&&(e=e.substring(1));for(const n of e.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):dn(`Invalid query segment '${n}' in query '${e}'`)}return t}const hE=function(e,t){const n=xU(e),i=n.namespace;n.domain==="firebase.com"&&bi(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&bi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||N6();const o=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new vA(n.host,n.secure,i,o,t,"",i!==n.subdomain),path:new ct(n.pathString)}},xU=function(e){let t="",n="",i="",o="",l="",u=!0,f="https",p=443;if(typeof e=="string"){let h=e.indexOf("//");h>=0&&(f=e.substring(0,h-1),e=e.substring(h+2));let y=e.indexOf("/");y===-1&&(y=e.length);let _=e.indexOf("?");_===-1&&(_=e.length),t=e.substring(0,Math.min(y,_)),y<_&&(o=bU(e.substring(y,_)));const v=SU(e.substring(Math.min(e.length,_)));h=t.indexOf(":"),h>=0?(u=f==="https"||f==="wss",p=parseInt(t.substring(h+1),10)):h=t.length;const b=t.slice(0,h);if(b.toLowerCase()==="localhost")n="localhost";else if(b.split(".").length<=2)n=b;else{const x=t.indexOf(".");i=t.substring(0,x).toLowerCase(),n=t.substring(x+1),l=i}"ns"in v&&(l=v.ns)}return{host:t,port:p,domain:n,subdomain:i,secure:u,scheme:f,pathString:o,namespace:l}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pE="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",wU=(function(){let e=0;const t=[];return function(n){const i=n===e;e=n;let o;const l=new Array(8);for(o=7;o>=0;o--)l[o]=pE.charAt(n%64),n=Math.floor(n/64);he(n===0,"Cannot push at time == 0");let u=l.join("");if(i){for(o=11;o>=0&&t[o]===63;o--)t[o]=0;t[o]++}else for(o=0;o<12;o++)t[o]=Math.floor(Math.random()*64);for(o=0;o<12;o++)u+=pE.charAt(t[o]);return he(u.length===20,"nextPushId: Length should be 20."),u}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EU{constructor(t,n,i,o){this.eventType=t,this.eventRegistration=n,this.snapshot=i,this.prevName=o}getPath(){const t=this.snapshot.ref;return this.eventType==="value"?t._path:t.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+$t(this.snapshot.exportVal())}}class CU{constructor(t,n,i){this.eventRegistration=t,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(t,n){this.snapshotCallback=t,this.cancelCallback=n}onValue(t,n){this.snapshotCallback.call(null,t,n)}onCancel(t){return he(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)}get hasCancelCallback(){return!!this.cancelCallback}matches(t){return this.snapshotCallback===t.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(t,n,i,o){this._repo=t,this._path=n,this._queryParams=i,this._orderByCalled=o}get key(){return We(this._path)?null:w_(this._path)}get ref(){return new Ci(this._repo,this._path)}get _queryIdentifier(){const t=Zw(this._queryParams),n=__(t);return n==="{}"?"default":n}get _queryObject(){return Zw(this._queryParams)}isEqual(t){if(t=Gt(t),!(t instanceof X_))return!1;const n=this._repo===t._repo,i=E_(this._path,t._path),o=this._queryIdentifier===t._queryIdentifier;return n&&i&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+m3(this._path)}}class Ci extends X_{constructor(t,n){super(t,n,new A_,!1)}get parent(){const t=RA(this._path);return t===null?null:new Ci(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}class iu{constructor(t,n,i){this._node=t,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const n=new ct(t),i=su(this.ref,t);return new iu(this._node.getChild(n),i,At)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,o)=>t(new iu(o,su(this.ref,i),At)))}hasChild(t){const n=new ct(t);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Mn(e,t){return e=Gt(e),e._checkNotDeleted("ref"),t!==void 0?su(e._root,t):e._root}function su(e,t){return e=Gt(e),Fe(e._path)===null?rU("child","path",t):lI("child","path",t),new Ci(e._repo,Rt(e._path,t))}function TU(e,t){e=Gt(e),G_("push",e._path),aI("push",t,e._path,!0);const n=dI(e._repo),i=wU(n),o=su(e,i),l=su(e,i);let u;return t!=null?u=Z_(l,t).then(()=>l):u=Promise.resolve(l),o.then=u.then.bind(u),o.catch=u.then.bind(u,void 0),o}function yI(e){return G_("remove",e._path),Z_(e,null)}function Z_(e,t){e=Gt(e),G_("set",e._path),aI("set",t,e._path,!1);const n=new hu;return hU(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}function vI(e,t){nU("update",t,e._path);const n=new hu;return pU(e._repo,e._path,t,n.wrapCallback(()=>{})),n.promise}function _I(e){e=Gt(e);const t=new gI(()=>{}),n=new sp(t);return fU(e._repo,e,n).then(i=>new iu(i,new Ci(e._repo,e._path),e._queryParams.getIndex()))}class sp{constructor(t){this.callbackContext=t}respondsTo(t){return t==="value"}createEvent(t,n){const i=n._queryParams.getIndex();return new EU("value",this,new iu(t.snapshotNode,new Ci(n._repo,n._path),i))}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,n){return this.callbackContext.hasCancelCallback?new CU(this,t,n):null}matches(t){return t instanceof sp?!t.callbackContext||!this.callbackContext?!0:t.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function RU(e,t,n,i,o){let l;if(typeof i=="object"&&(l=void 0,o=i),typeof i=="function"&&(l=i),o&&o.onlyOnce){const p=n,h=(y,_)=>{fE(e._repo,e,f),p(y,_)};h.userCallback=n.userCallback,h.context=n.context,n=h}const u=new gI(n,l||void 0),f=new sp(u);return gU(e._repo,e,f),()=>fE(e._repo,e,f)}function Cu(e,t,n,i){return RU(e,"value",t,n,i)}R5(Ci);N5(Ci);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AU="FIREBASE_DATABASE_EMULATOR_HOST",mv={};let IU=!1;function DU(e,t,n,i){const o=t.lastIndexOf(":"),l=t.substring(0,o),u=Wa(l);e.repoInfo_=new vA(t,u,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0,n),i&&(e.authTokenProvider_=i)}function kU(e,t,n,i,o){let l=i||e.options.databaseURL;l===void 0&&(e.options.projectId||bi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Jt("Using default host for project ",e.options.projectId),l=`${e.options.projectId}-default-rtdb.firebaseio.com`);let u=hE(l,o),f=u.repoInfo,p;typeof process<"u"&&Mw&&(p=Mw[AU]),p?(l=`http://${p}?ns=${f.namespace}`,u=hE(l,o),f=u.repoInfo):u.repoInfo.secure;const h=new F6(e.name,e.options,t);iU("Invalid Firebase Database URL",u),We(u.path)||bi("Database URL must point to the root of a Firebase Database (not including a child path).");const y=OU(f,e,h,new H6(e,n));return new MU(y,e)}function NU(e,t){const n=mv[t];(!n||n[e.key]!==e)&&bi(`Database ${t}(${e.repoInfo_}) has already been deleted.`),yU(e),delete n[e.key]}function OU(e,t,n,i){let o=mv[t.name];o||(o={},mv[t.name]=o);let l=o[e.toURLString()];return l&&bi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new cU(e,IU,n,i),o[e.toURLString()]=l,l}class MU{constructor(t,n){this._repoInternal=t,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(uU(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ci(this._repo,Ke())),this._rootInternal}_delete(){return this._rootInternal!==null&&(NU(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&bi("Cannot call "+t+" on a deleted database.")}}function LU(e=s_(),t){const n=Qa(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const i=Cj("database");i&&jU(n,...i)}return n}function jU(e,t,n,i={}){e=Gt(e),e._checkNotDeleted("useEmulator");const o=`${t}:${n}`,l=e._repoInternal;if(e._instanceStarted){if(o===e._repoInternal.repoInfo_.host&&ho(i,l.repoInfo_.emulatorOptions))return;bi("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let u;if(l.repoInfo_.nodeAdmin)i.mockUserToken&&bi('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new Tf(Tf.OWNER);else if(i.mockUserToken){const f=typeof i.mockUserToken=="string"?i.mockUserToken:Tj(i.mockUserToken,e.app.options.projectId);u=new Tf(f)}Wa(t)&&(cR(t),uR("Database",!0)),DU(l,o,i,u)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PU(e){T6(Ka),Mr(new _r("database",(t,{instanceIdentifier:n})=>{const i=t.getProvider("app").getImmediate(),o=t.getProvider("auth-internal"),l=t.getProvider("app-check-internal");return kU(i,o,l,n)},"PUBLIC").setMultipleInstances(!0)),Zn(Lw,jw,e),Zn(Lw,jw,"esm2020")}gi.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)};gi.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};PU();const $U=10,UU=e=>{const t=e.waitlist_max_override;if(typeof t=="number"&&t>0)return t;const n=e.offering_type?.waitlist_max;return typeof n=="number"&&n>0?n:$U},zU=e=>e.occupancy<e.max_occupancy,BU=e=>e.waiting_count>=UU(e),HU=e=>zU(e)?"free":BU(e)?"full":"waitlist",fn={7248695:{location:"New York",timezone:"America/New_York"},7248663:{location:"London",timezone:"Europe/London"}},bI="7248695",FU=10080*60*1e3,qU=(e,t)=>{if(!t.timeRanges)return!0;const n=fn[t.studioId]?.timezone;if(!n)return!1;const i=new Date(e.starts_at),o=new Date(i.toLocaleString("en-US",{timeZone:"UTC"})),l=new Date(i.toLocaleString("en-US",{timeZone:n})),u=o.getTime()-l.getTime();i.setTime(i.getTime()-u);const f=t.timeRanges[i.getDay()];if(!f)return!1;const p=i.getHours()*60+i.getMinutes();return f.startMin<=p&&f.endMin>=p},SI=(e,t)=>{const n=[];return(t.maxStatus==="free"&&e.status!=="free"||t.maxStatus==="waitlist"&&e.status==="full")&&n.push("status"),t.disciplines&&t.disciplines.map(String).indexOf(e.disciplineId)===-1&&n.push("discipline"),t.instructors&&!e.instructors.some(o=>t.instructors.indexOf(o.id)!==-1)&&n.push("instructor"),qU(e,t)||n.push("time"),n.length===0?{type:"match"}:n.length===1?{type:"near-miss",reason:n[0]}:{type:"skipped"}},ou="https://schedule.studio.onepeloton.com/api/v2",J_="https://cors.abbondanzo.workers.dev",sy=e=>({"Teamup-Request-Mode":"customer","Teamup-Provider-ID":e}),VU=e=>{const{localStartsAtGte:t=new Date,localStartsAtLte:n,fields:i,expand:o,corsProxy:l=!1}=e,u=l?`${J_}/${ou}`:ou,f=new URLSearchParams({local_starts_at_gte:t.toISOString().replace("Z",""),page_size:"500",sort:"start"});return i&&i.length>0&&f.set("fields",i.join(",")),o&&o.length>0&&f.set("expand",o.join(",")),n&&f.set("local_starts_at_lte",n.toISOString().replace("Z","")),`${u}/events?${f}`},mE=(e,t=!1)=>{const{search:n}=new URL(e);return`${t?`${J_}/${ou}`:ou}/events${n}`},GU=async(e,t,n=!1)=>{const i=await t(e);if(!i.next)return i.results;const o=[...i.results];let l=mE(i.next,n);for(;l;){const u=await t(l);o.push(...u.results),l=u.next?mE(u.next,n):null}return o},WU=["free","waitlist","full"],YU=e=>WU.indexOf(e)!==-1,Ti={alerts:e=>`alerts/${e}`,alert:(e,t)=>`alerts/${e}/${t}`,alertPreferences:e=>`alertPreferences/${e}`,messagingTokens:e=>`messagingTokens/${e}`,messagingToken:(e,t)=>`messagingTokens/${e}/${t}`,classHistory:e=>`classHistory/${e}`,classSnapshot:(e,t)=>`classHistory/${e}/${t}`,selloutStats:e=>`selloutStats/${e}`,selloutRecord:(e,t)=>`selloutStats/${e}/${t}`},rs=e=>e!=null,dh={startMin:0,endMin:1440},QU={startMin:420,endMin:1140},gv=dh,yv=e=>e.startMin===dh.startMin&&e.endMin===dh.endMin,an=qh(()=>LU(Ac)),xI=async(e,t)=>{const n=an;if(!n)throw new Error("No Firebase database connection to use");const i=Mn(n,Ti.messagingToken(e,t));await yI(i)},gE=async(e,t)=>{const n=an;if(!n)throw new Error("No Firebase database connection to use");const i=Mn(n,Ti.messagingToken(e,t)),o={timestamp:new Date().getTime(),userAgent:navigator.userAgent};await Z_(i,o)},KU=({children:e})=>{const[t,n]=C.useState();C.useEffect(()=>{if(ba){const u=E$(ba,f=>{console.log("[MessagingProvider] Received message ",f);const p=f.notification?.title??f.data?.title,h=f.notification?.body??f.data?.body;p&&new Notification(p,{body:h})});return()=>{u()}}return()=>{}},[]);const i=Je(yu);C.useEffect(()=>{ba&&i&&_w().then(u=>(n(u),gE(i,u))).catch(u=>{Or(u)})},[i]);const o=C.useCallback(()=>{ba&&i&&_w().then(u=>(n(u),gE(i,u))).catch(u=>{Or(u)})},[i]);C.useEffect(()=>{const u=()=>{document.visibilityState==="visible"&&o()};return document.addEventListener("visibilitychange",u),()=>document.removeEventListener("visibilitychange",u)},[o]);const l=C.useCallback(async()=>{t&&i&&(await xI(i,t),n(void 0))},[t,i]);return g.jsx(vu.Provider,{value:{token:t,refreshToken:o,deleteToken:l},children:e})},Tu=60,eb=e=>e.session.state!=="fulfilled"?!1:e.session.data?.isAdmin===!0,tt={CLASS_LIST:"/class-list",ABOUT:"/about",SIGN_IN:"/sign-in",ALERTS:"/alerts",ALERTS_EDITOR:"/alerts/edit",ALERTS_SIMULATION:"/alerts/:alertId/test",STATS:"/stats",WAITLIST_ALERT:"/waitlist-alert"},XU=e=>`/alerts/${e}/test`,wI=({size:e=22})=>g.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[g.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M 7.556 3.681 C 8.185 3.199 8.927 2.837 9.796 2.612 C 9.786 2.524 9.781 2.435 9.781 2.345 C 9.781 1.089 10.8 0.072 12.055 0.072 C 13.311 0.072 14.328 1.089 14.328 2.345 C 14.328 2.435 14.323 2.524 14.313 2.612 C 15.181 2.837 15.925 3.199 16.553 3.681 C 17.662 4.533 18.304 5.677 18.683 6.817 C 19.062 7.948 19.198 9.126 19.264 10.119 C 19.29 10.523 19.308 10.91 19.321 11.252 L 19.331 11.482 C 19.349 11.893 19.368 12.199 19.398 12.425 C 19.62 14.086 19.895 15.252 20.289 16.183 C 20.673 17.094 21.187 17.828 21.952 18.592 C 22.277 18.917 22.374 19.406 22.198 19.831 C 22.023 20.256 21.609 20.532 21.148 20.532 L 14.025 20.532 C 14.218 20.867 14.328 21.255 14.328 21.668 C 14.328 22.925 13.311 23.943 12.055 23.943 C 10.8 23.943 9.781 22.925 9.781 21.668 C 9.781 21.255 9.892 20.867 10.086 20.532 L 2.961 20.532 C 2.502 20.532 2.087 20.256 1.911 19.831 C 1.735 19.406 1.832 18.917 2.157 18.592 C 2.923 17.826 3.437 17.098 3.819 16.19 C 4.213 15.262 4.488 14.099 4.711 12.425 C 4.742 12.199 4.76 11.893 4.777 11.482 L 4.787 11.252 C 4.802 10.91 4.818 10.523 4.844 10.119 C 4.911 9.126 5.048 7.948 5.424 6.817 C 5.805 5.677 6.447 4.533 7.556 3.681 Z M 5.312 18.259 C 5.537 17.889 5.736 17.497 5.914 17.075 C 6.421 15.879 6.73 14.485 6.965 12.727 C 7.011 12.384 7.032 11.98 7.049 11.581 L 7.06 11.337 C 7.074 10.996 7.089 10.644 7.113 10.272 C 7.175 9.347 7.296 8.394 7.582 7.536 C 7.865 6.686 8.292 5.982 8.941 5.484 C 9.582 4.992 10.546 4.618 12.055 4.618 C 13.564 4.618 14.527 4.992 15.167 5.484 C 15.816 5.982 16.245 6.686 16.528 7.536 C 16.814 8.394 16.934 9.347 16.997 10.272 C 17.021 10.644 17.036 10.996 17.05 11.337 L 17.061 11.581 C 17.077 11.98 17.098 12.384 17.144 12.727 C 17.377 14.475 17.688 15.867 18.194 17.066 C 18.373 17.491 18.573 17.884 18.799 18.259 L 5.312 18.259 Z",fill:"currentColor"}),g.jsx("path",{d:"M 15.285 7.952 L 16.425 5.973 C 16.754 5.392 16.56 4.649 15.98 4.318 C 15.402 3.986 14.657 4.18 14.326 4.761 L 13.179 6.741 C 10.743 5.973 8.016 6.97 6.686 9.274 C 5.838 10.74 5.736 12.426 6.25 13.905 L 8.359 10.243 C 8.359 10.243 8.359 10.243 8.359 10.243 C 8.841 9.403 9.63 8.802 10.568 8.551 C 11.506 8.296 12.482 8.427 13.323 8.917 C 15.056 9.918 15.655 12.146 14.652 13.877 C 13.648 15.611 11.428 16.21 9.689 15.206 L 10.9 13.109 C 11.479 13.44 12.222 13.247 12.555 12.666 C 12.886 12.087 12.69 11.345 12.111 11.013 C 11.532 10.68 10.788 10.877 10.457 11.454 L 6.602 18.144 C 6.269 18.725 6.464 19.466 7.044 19.8 C 7.624 20.13 8.367 19.935 8.699 19.355 L 9.846 17.377 C 12.281 18.144 15.009 17.149 16.338 14.842 C 17.666 12.543 17.165 9.685 15.285 7.952 Z",fill:"currentColor",style:{strokeWidth:"0.5px",stroke:"currentColor"}})]});function EI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const CI=EI,TI=new Co("auth","Firebase",EI());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh=new r_("@firebase/auth");function ZU(e,...t){fh.logLevel<=lt.WARN&&fh.warn(`Auth (${Ka}): ${e}`,...t)}function Rf(e,...t){fh.logLevel<=lt.ERROR&&fh.error(`Auth (${Ka}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(e,...t){throw nb(e,...t)}function vr(e,...t){return nb(e,...t)}function tb(e,t,n){const i={...CI(),[t]:n};return new Co("auth","Firebase",i).create(t,{appName:e.name})}function yi(e){return tb(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function JU(e,t,n){const i=n;if(!(t instanceof i))throw i.name!==t.constructor.name&&nr(e,"argument-error"),tb(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function nb(e,...t){if(typeof e!="string"){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return TI.create(e,...t)}function ke(e,t,...n){if(!e)throw nb(t,...n)}function hi(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Rf(t),new Error(t)}function Si(e,t){e||hi(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vv(){return typeof self<"u"&&self.location?.href||""}function ez(){return yE()==="http:"||yE()==="https:"}function yE(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tz(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ez()||Dj()||"connection"in navigator)?navigator.onLine:!0}function nz(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(t,n){this.shortDelay=t,this.longDelay=n,Si(n>t,"Short delay should be less than long delay!"),this.isMobile=n_()||dR()}get(){return tz()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rb(e,t){Si(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{static initialize(t,n,i){this.fetchImpl=t,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;hi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;hi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;hi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rz={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iz=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],sz=new Ru(3e4,6e4);function Rs(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function As(e,t,n,i,o={}){return AI(e,o,async()=>{let l={},u={};i&&(t==="GET"?u=i:l={body:JSON.stringify(i)});const f=Ya({key:e.config.apiKey,...u}).slice(1),p=await e._getAdditionalHeaders();p["Content-Type"]="application/json",e.languageCode&&(p["X-Firebase-Locale"]=e.languageCode);const h={method:t,headers:p,...l};return Ij()||(h.referrerPolicy="no-referrer"),e.emulatorConfig&&Wa(e.emulatorConfig.host)&&(h.credentials="include"),RI.fetch()(await II(e,e.config.apiHost,n,f),h)})}async function AI(e,t,n){e._canInitEmulator=!1;const i={...rz,...t};try{const o=new az(e),l=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const u=await l.json();if("needConfirmation"in u)throw sf(e,"account-exists-with-different-credential",u);if(l.ok&&!("errorMessage"in u))return u;{const f=l.ok?u.errorMessage:u.error.message,[p,h]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw sf(e,"credential-already-in-use",u);if(p==="EMAIL_EXISTS")throw sf(e,"email-already-in-use",u);if(p==="USER_DISABLED")throw sf(e,"user-disabled",u);const y=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw tb(e,y,h);nr(e,y)}}catch(o){if(o instanceof wi)throw o;nr(e,"network-request-failed",{message:String(o)})}}async function Au(e,t,n,i,o={}){const l=await As(e,t,n,i,o);return"mfaPendingCredential"in l&&nr(e,"multi-factor-auth-required",{_serverResponse:l}),l}async function II(e,t,n,i){const o=`${t}${n}?${i}`,l=e,u=l.config.emulator?rb(e.config,o):`${e.config.apiScheme}://${o}`;return iz.includes(n)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(u).toString():u}function oz(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class az{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(vr(this.auth,"network-request-failed")),sz.get())})}}function sf(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const o=vr(e,t,i);return o.customData._tokenResponse=n,o}function vE(e){return e!==void 0&&e.enterprise!==void 0}class lz{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return oz(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function cz(e,t){return As(e,"GET","/v2/recaptchaConfig",Rs(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uz(e,t){return As(e,"POST","/v1/accounts:delete",t)}async function hh(e,t){return As(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function dz(e,t=!1){const n=Gt(e),i=await n.getIdToken(t),o=ib(i);ke(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,u=l?.sign_in_provider;return{claims:o,token:i,authTime:jc(oy(o.auth_time)),issuedAtTime:jc(oy(o.iat)),expirationTime:jc(oy(o.exp)),signInProvider:u||null,signInSecondFactor:l?.sign_in_second_factor||null}}function oy(e){return Number(e)*1e3}function ib(e){const[t,n,i]=e.split(".");if(t===void 0||n===void 0||i===void 0)return Rf("JWT malformed, contained fewer than 3 sections"),null;try{const o=Ff(n);return o?JSON.parse(o):(Rf("Failed to decode base64 JWT payload"),null)}catch(o){return Rf("Caught error parsing JWT payload as JSON",o?.toString()),null}}function _E(e){const t=ib(e);return ke(t,"internal-error"),ke(typeof t.exp<"u","internal-error"),ke(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function au(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof wi&&fz(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function fz({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hz{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=jc(this.lastLoginAt),this.creationTime=jc(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ph(e){const t=e.auth,n=await e.getIdToken(),i=await au(e,hh(t,{idToken:n}));ke(i?.users.length,t,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const l=o.providerUserInfo?.length?DI(o.providerUserInfo):[],u=mz(e.providerData,l),f=e.isAnonymous,p=!(e.email&&o.passwordHash)&&!u?.length,h=f?p:!1,y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new _v(o.createdAt,o.lastLoginAt),isAnonymous:h};Object.assign(e,y)}async function pz(e){const t=Gt(e);await ph(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function mz(e,t){return[...e.filter(i=>!t.some(o=>o.providerId===i.providerId)),...t]}function DI(e){return e.map(({providerId:t,...n})=>({providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gz(e,t){const n=await AI(e,{},async()=>{const i=Ya({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:l}=e.config,u=await II(e,o,"/v1/token",`key=${l}`),f=await e._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:f,body:i};return e.emulatorConfig&&Wa(e.emulatorConfig.host)&&(p.credentials="include"),RI.fetch()(u,p)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function yz(e,t){return As(e,"POST","/v2/accounts:revokeToken",Rs(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){ke(t.idToken,"internal-error"),ke(typeof t.idToken<"u","internal-error"),ke(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):_E(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){ke(t.length!==0,"internal-error");const n=_E(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ke(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:i,refreshToken:o,expiresIn:l}=await gz(t,n);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(t,n,i){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(t,n){const{refreshToken:i,accessToken:o,expirationTime:l}=n,u=new Ta;return i&&(ke(typeof i=="string","internal-error",{appName:t}),u.refreshToken=i),o&&(ke(typeof o=="string","internal-error",{appName:t}),u.accessToken=o),l&&(ke(typeof l=="number","internal-error",{appName:t}),u.expirationTime=l),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ta,this.toJSON())}_performRefresh(){return hi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(e,t){ke(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class hr{constructor({uid:t,auth:n,stsTokenManager:i,...o}){this.providerId="firebase",this.proactiveRefresh=new hz(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new _v(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await au(this,this.stsTokenManager.getToken(this.auth,t));return ke(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return dz(this,t)}reload(){return pz(this)}_assign(t){this!==t&&(ke(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>({...n})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new hr({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(t){ke(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),n&&await ph(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(On(this.auth.app))return Promise.reject(yi(this.auth));const t=await this.getIdToken();return await au(this,uz(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){const i=n.displayName??void 0,o=n.email??void 0,l=n.phoneNumber??void 0,u=n.photoURL??void 0,f=n.tenantId??void 0,p=n._redirectEventId??void 0,h=n.createdAt??void 0,y=n.lastLoginAt??void 0,{uid:_,emailVerified:v,isAnonymous:b,providerData:x,stsTokenManager:I}=n;ke(_&&I,t,"internal-error");const T=Ta.fromJSON(this.name,I);ke(typeof _=="string",t,"internal-error"),Zi(i,t.name),Zi(o,t.name),ke(typeof v=="boolean",t,"internal-error"),ke(typeof b=="boolean",t,"internal-error"),Zi(l,t.name),Zi(u,t.name),Zi(f,t.name),Zi(p,t.name),Zi(h,t.name),Zi(y,t.name);const k=new hr({uid:_,auth:t,email:o,emailVerified:v,displayName:i,isAnonymous:b,photoURL:u,phoneNumber:l,tenantId:f,stsTokenManager:T,createdAt:h,lastLoginAt:y});return x&&Array.isArray(x)&&(k.providerData=x.map(M=>({...M}))),p&&(k._redirectEventId=p),k}static async _fromIdTokenResponse(t,n,i=!1){const o=new Ta;o.updateFromServerResponse(n);const l=new hr({uid:n.localId,auth:t,stsTokenManager:o,isAnonymous:i});return await ph(l),l}static async _fromGetAccountInfoResponse(t,n,i){const o=n.users[0];ke(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?DI(o.providerUserInfo):[],u=!(o.email&&o.passwordHash)&&!l?.length,f=new Ta;f.updateFromIdToken(i);const p=new hr({uid:o.localId,auth:t,stsTokenManager:f,isAnonymous:u}),h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new _v(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!l?.length};return Object.assign(p,h),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE=new Map;function pi(e){Si(e instanceof Function,"Expected a class definition");let t=bE.get(e);return t?(Si(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,bE.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}kI.type="NONE";const SE=kI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Af(e,t,n){return`firebase:${e}:${t}:${n}`}class Ra{constructor(t,n,i){this.persistence=t,this.auth=n,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=Af(this.userKey,o.apiKey,l),this.fullPersistenceKey=Af("persistence",o.apiKey,l),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await hh(this.auth,{idToken:t}).catch(()=>{});return n?hr._fromGetAccountInfoResponse(this.auth,n,t):null}return hr._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,i="authUser"){if(!n.length)return new Ra(pi(SE),t,i);const o=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let l=o[0]||pi(SE);const u=Af(i,t.config.apiKey,t.name);let f=null;for(const h of n)try{const y=await h._get(u);if(y){let _;if(typeof y=="string"){const v=await hh(t,{idToken:y}).catch(()=>{});if(!v)break;_=await hr._fromGetAccountInfoResponse(t,v,y)}else _=hr._fromJSON(t,y);h!==l&&(f=_),l=h;break}}catch{}const p=o.filter(h=>h._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Ra(l,t,i):(l=p[0],f&&await l._set(u,f.toJSON()),await Promise.all(n.map(async h=>{if(h!==l)try{await h._remove(u)}catch{}})),new Ra(l,t,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xE(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(LI(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(NI(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(PI(t))return"Blackberry";if($I(t))return"Webos";if(OI(t))return"Safari";if((t.includes("chrome/")||MI(t))&&!t.includes("edge/"))return"Chrome";if(jI(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=e.match(n);if(i?.length===2)return i[1]}return"Other"}function NI(e=hn()){return/firefox\//i.test(e)}function OI(e=hn()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function MI(e=hn()){return/crios\//i.test(e)}function LI(e=hn()){return/iemobile/i.test(e)}function jI(e=hn()){return/android/i.test(e)}function PI(e=hn()){return/blackberry/i.test(e)}function $I(e=hn()){return/webos/i.test(e)}function sb(e=hn()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function vz(e=hn()){return sb(e)&&!!window.navigator?.standalone}function _z(){return kj()&&document.documentMode===10}function UI(e=hn()){return sb(e)||jI(e)||$I(e)||PI(e)||/windows phone/i.test(e)||LI(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zI(e,t=[]){let n;switch(e){case"Browser":n=xE(hn());break;case"Worker":n=`${xE(hn())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ka}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bz{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const i=l=>new Promise((u,f)=>{try{const p=t(l);u(p)}catch(p){f(p)}});i.onAbort=n,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const i of this.queue)await i(t),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sz(e,t={}){return As(e,"GET","/v2/passwordPolicy",Rs(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xz=6;class wz{constructor(t){const n=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??xz,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=t.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,n),this.validatePasswordCharacterOptions(t,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(t,n){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=t.length>=i),o&&(n.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let o=0;o<t.length;o++)i=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(t,n,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ez{constructor(t,n,i,o){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wE(this),this.idTokenSubscription=new wE(this),this.beforeStateQueue=new bz(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=TI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=pi(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Ra.create(this,t),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await hh(this,{idToken:t}),i=await hr._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){if(On(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(u,u))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=this.redirectUser?._redirectEventId,u=i?._redirectEventId,f=await this.tryRedirectSignIn(t);(!l||l===u)&&f?.user&&(i=f.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(l){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ke(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await ph(t)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=nz()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(On(this.app))return Promise.reject(yi(this));const n=t?Gt(t):null;return n&&ke(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&ke(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return On(this.app)?Promise.reject(yi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return On(this.app)?Promise.reject(yi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pi(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Sz(this),n=new wz(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Co("auth","Firebase",t())}onAuthStateChanged(t,n,i){return this.registerStateListener(this.authStateSubscription,t,n,i)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,i){return this.registerStateListener(this.idTokenSubscription,t,n,i)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const i=this.onAuthStateChanged(()=>{i(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await yz(this,i)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(t,n){const i=await this.getOrInitRedirectPersistenceManager(n);return t===null?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&pi(t)||this._popupRedirectResolver;ke(n,this,"argument-error"),this.redirectPersistenceManager=await Ra.create(this,[pi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===t?this._currentUser:this.redirectUser?._redirectEventId===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=this.currentUser?.uid??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,i,o){if(this._deleted)return()=>{};const l=typeof n=="function"?n:n.next.bind(n);let u=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(ke(f,this,"internal-error"),f.then(()=>{u||l(this.currentUser)}),typeof n=="function"){const p=t.addObserver(n,i,o);return()=>{u=!0,p()}}else{const p=t.addObserver(n);return()=>{u=!0,p()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return ke(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=zI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){if(On(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return t?.error&&ZU(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Is(e){return Gt(e)}class wE{constructor(t){this.auth=t,this.observer=null,this.addObserver=zj(n=>this.observer=n)}get next(){return ke(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let op={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Cz(e){op=e}function BI(e){return op.loadJS(e)}function Tz(){return op.recaptchaEnterpriseScript}function Rz(){return op.gapiScript}function Az(e){return`__${e}${Math.floor(Math.random()*1e6)}`}class Iz{constructor(){this.enterprise=new Dz}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class Dz{ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const kz="recaptcha-enterprise",HI="NO_RECAPTCHA";class Nz{constructor(t){this.type=kz,this.auth=Is(t)}async verify(t="verify",n=!1){async function i(l){if(!n){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(u,f)=>{cz(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const h=new lz(p);return l.tenantId==null?l._agentRecaptchaConfig=h:l._tenantRecaptchaConfigs[l.tenantId]=h,u(h.siteKey)}}).catch(p=>{f(p)})})}function o(l,u,f){const p=window.grecaptcha;vE(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:t}).then(h=>{u(h)}).catch(()=>{u(HI)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Iz().execute("siteKey",{action:"verify"}):new Promise((l,u)=>{i(this.auth).then(f=>{if(!n&&vE(window.grecaptcha))o(f,l,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let p=Tz();p.length!==0&&(p+=f),BI(p).then(()=>{o(f,l,u)}).catch(h=>{u(h)})}}).catch(f=>{u(f)})})}}async function EE(e,t,n,i=!1,o=!1){const l=new Nz(e);let u;if(o)u=HI;else try{u=await l.verify(n)}catch{u=await l.verify(n,!0)}const f={...t};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const p=f.phoneEnrollmentInfo.phoneNumber,h=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:h,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const p=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return i?Object.assign(f,{captchaResp:u}):Object.assign(f,{captchaResponse:u}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function bv(e,t,n,i,o){if(e._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await EE(e,t,n,n==="getOobCode");return i(e,l)}else return i(e,t).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await EE(e,t,n,n==="getOobCode");return i(e,u)}else return Promise.reject(l)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FI(e,t){const n=Qa(e,"auth");if(n.isInitialized()){const o=n.getImmediate(),l=n.getOptions();if(ho(l,t??{}))return o;nr(o,"already-initialized")}return n.initialize({options:t})}function Oz(e,t){const n=t?.persistence||[],i=(Array.isArray(n)?n:[n]).map(pi);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,t?.popupRedirectResolver)}function Mz(e,t,n){const i=Is(e);ke(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const o=!1,l=qI(t),{host:u,port:f}=Lz(t),p=f===null?"":`:${f}`,h={url:`${l}//${u}${p}/`},y=Object.freeze({host:u,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){ke(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),ke(ho(h,i.config.emulator)&&ho(y,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=h,i.emulatorConfig=y,i.settings.appVerificationDisabledForTesting=!0,Wa(u)?(cR(`${l}//${u}${p}`),uR("Auth",!0)):jz()}function qI(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Lz(e){const t=qI(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:CE(i.substr(l.length+1))}}else{const[l,u]=i.split(":");return{host:l,port:CE(u)}}}function CE(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function jz(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return hi("not implemented")}_getIdTokenResponse(t){return hi("not implemented")}_linkToIdToken(t,n){return hi("not implemented")}_getReauthenticationResolver(t){return hi("not implemented")}}async function Pz(e,t){return As(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $z(e,t){return Au(e,"POST","/v1/accounts:signInWithPassword",Rs(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uz(e,t){return Au(e,"POST","/v1/accounts:signInWithEmailLink",Rs(e,t))}async function zz(e,t){return Au(e,"POST","/v1/accounts:signInWithEmailLink",Rs(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu extends ob{constructor(t,n,i,o=null){super("password",i),this._email=t,this._password=n,this._tenantId=o}static _fromEmailAndPassword(t,n){return new lu(t,n,"password")}static _fromEmailAndCode(t,n,i=null){return new lu(t,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bv(t,n,"signInWithPassword",$z);case"emailLink":return Uz(t,{email:this._email,oobCode:this._password});default:nr(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bv(t,i,"signUpPassword",Pz);case"emailLink":return zz(t,{idToken:n,email:this._email,oobCode:this._password});default:nr(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Aa(e,t){return Au(e,"POST","/v1/accounts:signInWithIdp",Rs(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bz="http://localhost";class So extends ob{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new So(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):nr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:i,signInMethod:o,...l}=n;if(!i||!o)return null;const u=new So(i,o);return u.idToken=l.idToken||void 0,u.accessToken=l.accessToken||void 0,u.secret=l.secret,u.nonce=l.nonce,u.pendingToken=l.pendingToken||null,u}_getIdTokenResponse(t){const n=this.buildRequest();return Aa(t,n)}_linkToIdToken(t,n){const i=this.buildRequest();return i.idToken=n,Aa(t,i)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Aa(t,n)}buildRequest(){const t={requestUri:Bz,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Ya(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hz(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Fz(e){const t=_c(bc(e)).link,n=t?_c(bc(t)).deep_link_id:null,i=_c(bc(e)).deep_link_id;return(i?_c(bc(i)).link:null)||i||n||t||e}class ab{constructor(t){const n=_c(bc(t)),i=n.apiKey??null,o=n.oobCode??null,l=Hz(n.mode??null);ke(i&&o&&l,"argument-error"),this.apiKey=i,this.operation=l,this.code=o,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(t){const n=Fz(t);try{return new ab(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(){this.providerId=nl.PROVIDER_ID}static credential(t,n){return lu._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const i=ab.parseLink(n);return ke(i,"argument-error"),lu._fromEmailAndCode(t,i.code,i.tenantId)}}nl.PROVIDER_ID="password";nl.EMAIL_PASSWORD_SIGN_IN_METHOD="password";nl.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu extends lb{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os extends Iu{constructor(){super("facebook.com")}static credential(t){return So._fromParams({providerId:os.PROVIDER_ID,signInMethod:os.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return os.credentialFromTaggedObject(t)}static credentialFromError(t){return os.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return os.credential(t.oauthAccessToken)}catch{return null}}}os.FACEBOOK_SIGN_IN_METHOD="facebook.com";os.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui extends Iu{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return So._fromParams({providerId:ui.PROVIDER_ID,signInMethod:ui.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return ui.credentialFromTaggedObject(t)}static credentialFromError(t){return ui.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:i}=t;if(!n&&!i)return null;try{return ui.credential(n,i)}catch{return null}}}ui.GOOGLE_SIGN_IN_METHOD="google.com";ui.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as extends Iu{constructor(){super("github.com")}static credential(t){return So._fromParams({providerId:as.PROVIDER_ID,signInMethod:as.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return as.credentialFromTaggedObject(t)}static credentialFromError(t){return as.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return as.credential(t.oauthAccessToken)}catch{return null}}}as.GITHUB_SIGN_IN_METHOD="github.com";as.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls extends Iu{constructor(){super("twitter.com")}static credential(t,n){return So._fromParams({providerId:ls.PROVIDER_ID,signInMethod:ls.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return ls.credentialFromTaggedObject(t)}static credentialFromError(t){return ls.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=t;if(!n||!i)return null;try{return ls.credential(n,i)}catch{return null}}}ls.TWITTER_SIGN_IN_METHOD="twitter.com";ls.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qz(e,t){return Au(e,"POST","/v1/accounts:signUp",Rs(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,i,o=!1){const l=await hr._fromIdTokenResponse(t,i,o),u=TE(i);return new xo({user:l,providerId:u,_tokenResponse:i,operationType:n})}static async _forOperation(t,n,i){await t._updateTokensIfNecessary(i,!0);const o=TE(i);return new xo({user:t,providerId:o,_tokenResponse:i,operationType:n})}}function TE(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh extends wi{constructor(t,n,i,o){super(n.code,n.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,mh.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(t,n,i,o){return new mh(t,n,i,o)}}function VI(e,t,n,i){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?mh._fromErrorAndOperation(e,l,t,i):l})}async function Vz(e,t,n=!1){const i=await au(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return xo._forOperation(e,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gz(e,t,n=!1){const{auth:i}=e;if(On(i.app))return Promise.reject(yi(i));const o="reauthenticate";try{const l=await au(e,VI(i,o,t,e),n);ke(l.idToken,i,"internal-error");const u=ib(l.idToken);ke(u,i,"internal-error");const{sub:f}=u;return ke(e.uid===f,i,"user-mismatch"),xo._forOperation(e,o,l)}catch(l){throw l?.code==="auth/user-not-found"&&nr(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GI(e,t,n=!1){if(On(e.app))return Promise.reject(yi(e));const i="signIn",o=await VI(e,i,t),l=await xo._fromIdTokenResponse(e,i,o);return n||await e._updateCurrentUser(l.user),l}async function Wz(e,t){return GI(Is(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WI(e){const t=Is(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Yz(e,t,n){if(On(e.app))return Promise.reject(yi(e));const i=Is(e),u=await bv(i,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",qz).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&WI(e),p}),f=await xo._fromIdTokenResponse(i,"signIn",u);return await i._updateCurrentUser(f.user),f}function Qz(e,t,n){return On(e.app)?Promise.reject(yi(e)):Wz(Gt(e),nl.credential(t,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&WI(e),i})}function Kz(e,t,n,i){return Gt(e).onIdTokenChanged(t,n,i)}function Xz(e,t,n){return Gt(e).beforeAuthStateChanged(t,n)}function Zz(e,t,n,i){return Gt(e).onAuthStateChanged(t,n,i)}const gh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(gh,"1"),this.storage.removeItem(gh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jz=1e3,e8=10;class QI extends YI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=UI(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),o=this.localCache[n];i!==o&&t(n,o,i)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((u,f,p)=>{this.notifyListeners(u,p)});return}const i=t.key;n?this.detachListener():this.stopPolling();const o=()=>{const u=this.storage.getItem(i);!n&&this.localCache[i]===u||this.notifyListeners(i,u)},l=this.storage.getItem(i);_z()&&l!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,e8):o()}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const o of Array.from(i))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:i}),!0)})},Jz)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}QI.type="LOCAL";const t8=QI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI extends YI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}KI.type="SESSION";const XI=KI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n8(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(o=>o.isListeningto(t));if(n)return n;const i=new ap(t);return this.receivers.push(i),i}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:i,eventType:o,data:l}=n.data,u=this.handlersMap[o];if(!u?.size)return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(u).map(async h=>h(n.origin,l)),p=await n8(f);n.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ap.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cb(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r8{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,u;return new Promise((f,p)=>{const h=cb("",20);o.port1.start();const y=setTimeout(()=>{p(new Error("unsupported_event"))},i);u={messageChannel:o,onMessage(_){const v=_;if(v.data.eventId===h)switch(v.data.status){case"ack":clearTimeout(y),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(v.data.response);break;default:clearTimeout(y),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(u),o.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:t,eventId:h,data:n},[o.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(){return window}function i8(e){Nr().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI(){return typeof Nr().WorkerGlobalScope<"u"&&typeof Nr().importScripts=="function"}async function s8(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function o8(){return navigator?.serviceWorker?.controller||null}function a8(){return ZI()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI="firebaseLocalStorageDb",l8=1,yh="firebaseLocalStorage",eD="fbase_key";class Du{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function lp(e,t){return e.transaction([yh],t?"readwrite":"readonly").objectStore(yh)}function c8(){const e=indexedDB.deleteDatabase(JI);return new Du(e).toPromise()}function Sv(){const e=indexedDB.open(JI,l8);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const i=e.result;try{i.createObjectStore(yh,{keyPath:eD})}catch(o){n(o)}}),e.addEventListener("success",async()=>{const i=e.result;i.objectStoreNames.contains(yh)?t(i):(i.close(),await c8(),t(await Sv()))})})}async function RE(e,t,n){const i=lp(e,!0).put({[eD]:t,value:n});return new Du(i).toPromise()}async function u8(e,t){const n=lp(e,!1).get(t),i=await new Du(n).toPromise();return i===void 0?null:i.value}function AE(e,t){const n=lp(e,!0).delete(t);return new Du(n).toPromise()}const d8=800,f8=3;class tD{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Sv(),this.db)}async _withRetries(t){let n=0;for(;;)try{const i=await this._openDb();return await t(i)}catch(i){if(n++>f8)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ZI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ap._getInstance(a8()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await s8(),!this.activeServiceWorker)return;this.sender=new r8(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&t[0]?.fulfilled&&t[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||o8()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Sv();return await RE(t,gh,"1"),await AE(t,gh),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>RE(i,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(i=>u8(i,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>AE(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const l=lp(o,!1).getAll();return new Du(l).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(t.length!==0)for(const{fbase_key:o,value:l}of t)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const o of Array.from(i))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),d8)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}tD.type="LOCAL";const h8=tD;new Ru(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nD(e,t){return t?pi(t):(ke(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub extends ob{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Aa(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Aa(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Aa(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function p8(e){return GI(e.auth,new ub(e),e.bypassAuthState)}function m8(e){const{auth:t,user:n}=e;return ke(n,t,"internal-error"),Gz(n,new ub(e),e.bypassAuthState)}async function g8(e){const{auth:t,user:n}=e;return ke(n,t,"internal-error"),Vz(n,new ub(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(t,n,i,o,l=!1){this.auth=t,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:i,postBody:o,tenantId:l,error:u,type:f}=t;if(u){this.reject(u);return}const p={auth:this.auth,requestUri:n,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(h){this.reject(h)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return p8;case"linkViaPopup":case"linkViaRedirect":return g8;case"reauthViaPopup":case"reauthViaRedirect":return m8;default:nr(this.auth,"internal-error")}}resolve(t){Si(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Si(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y8=new Ru(2e3,1e4);async function v8(e,t,n){if(On(e.app))return Promise.reject(vr(e,"operation-not-supported-in-this-environment"));const i=Is(e);JU(e,t,lb);const o=nD(i,n);return new lo(i,"signInViaPopup",t,o).executeNotNull()}class lo extends rD{constructor(t,n,i,o,l){super(t,n,o,l),this.provider=i,this.authWindow=null,this.pollId=null,lo.currentPopupAction&&lo.currentPopupAction.cancel(),lo.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return ke(t,this.auth,"internal-error"),t}async onExecution(){Si(this.filter.length===1,"Popup operations only handle one event");const t=cb();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(vr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,lo.currentPopupAction=null}pollUserCancellation(){const t=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,y8.get())};t()}}lo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _8="pendingRedirect",If=new Map;class b8 extends rD{constructor(t,n,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let t=If.get(this.auth._key());if(!t){try{const i=await S8(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(i)}catch(n){t=()=>Promise.reject(n)}If.set(this.auth._key(),t)}return this.bypassAuthState||If.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function S8(e,t){const n=E8(t),i=w8(e);if(!await i._isAvailable())return!1;const o=await i._get(n)==="true";return await i._remove(n),o}function x8(e,t){If.set(e._key(),t)}function w8(e){return pi(e._redirectPersistence)}function E8(e){return Af(_8,e.config.apiKey,e.name)}async function C8(e,t,n=!1){if(On(e.app))return Promise.reject(yi(e));const i=Is(e),o=nD(i,t),u=await new b8(i,o,n).execute();return u&&!n&&(delete u.user._redirectEventId,await i._persistUserIfCurrent(u.user),await i._setRedirectUser(null,t)),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T8=600*1e3;class R8{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(t,i)&&(n=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!A8(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){if(t.error&&!iD(t)){const i=t.error.code?.split("auth/")[1]||"internal-error";n.onError(vr(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const i=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=T8&&this.cachedEventUids.clear(),this.cachedEventUids.has(IE(t))}saveEventToCache(t){this.cachedEventUids.add(IE(t)),this.lastProcessedEventTime=Date.now()}}function IE(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function iD({type:e,error:t}){return e==="unknown"&&t?.code==="auth/no-auth-event"}function A8(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return iD(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I8(e,t={}){return As(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D8=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,k8=/^https?/;async function N8(e){if(e.config.emulator)return;const{authorizedDomains:t}=await I8(e);for(const n of t)try{if(O8(n))return}catch{}nr(e,"unauthorized-domain")}function O8(e){const t=vv(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const u=new URL(e);return u.hostname===""&&i===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&u.hostname===i}if(!k8.test(n))return!1;if(D8.test(e))return i===e;const o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M8=new Ru(3e4,6e4);function DE(){const e=Nr().___jsl;if(e?.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function L8(e){return new Promise((t,n)=>{function i(){DE(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{DE(),n(vr(e,"network-request-failed"))},timeout:M8.get()})}if(Nr().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(Nr().gapi?.load)i();else{const o=Az("iframefcb");return Nr()[o]=()=>{gapi.load?i():n(vr(e,"network-request-failed"))},BI(`${Rz()}?onload=${o}`).catch(l=>n(l))}}).catch(t=>{throw Df=null,t})}let Df=null;function j8(e){return Df=Df||L8(e),Df}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P8=new Ru(5e3,15e3),$8="__/auth/iframe",U8="emulator/auth/iframe",z8={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},B8=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function H8(e){const t=e.config;ke(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?rb(t,U8):`https://${e.config.authDomain}/${$8}`,i={apiKey:t.apiKey,appName:e.name,v:Ka},o=B8.get(e.config.apiHost);o&&(i.eid=o);const l=e._getFrameworks();return l.length&&(i.fw=l.join(",")),`${n}?${Ya(i).slice(1)}`}async function F8(e){const t=await j8(e),n=Nr().gapi;return ke(n,e,"internal-error"),t.open({where:document.body,url:H8(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:z8,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const u=vr(e,"network-request-failed"),f=Nr().setTimeout(()=>{l(u)},P8.get());function p(){Nr().clearTimeout(f),o(i)}i.ping(p).then(p,()=>{l(u)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q8={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},V8=500,G8=600,W8="_blank",Y8="http://localhost";class kE{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Q8(e,t,n,i=V8,o=G8){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),u=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const p={...q8,width:i.toString(),height:o.toString(),top:l,left:u},h=hn().toLowerCase();n&&(f=MI(h)?W8:n),NI(h)&&(t=t||Y8,p.scrollbars="yes");const y=Object.entries(p).reduce((v,[b,x])=>`${v}${b}=${x},`,"");if(vz(h)&&f!=="_self")return K8(t||"",f),new kE(null);const _=window.open(t||"",f,y);ke(_,e,"popup-blocked");try{_.focus()}catch{}return new kE(_)}function K8(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X8="__/auth/handler",Z8="emulator/auth/handler",J8=encodeURIComponent("fac");async function NE(e,t,n,i,o,l){ke(e.config.authDomain,e,"auth-domain-config-required"),ke(e.config.apiKey,e,"invalid-api-key");const u={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:Ka,eventId:o};if(t instanceof lb){t.setDefaultLanguage(e.languageCode),u.providerId=t.providerId||"",Fy(t.getCustomParameters())||(u.customParameters=JSON.stringify(t.getCustomParameters()));for(const[y,_]of Object.entries({}))u[y]=_}if(t instanceof Iu){const y=t.getScopes().filter(_=>_!=="");y.length>0&&(u.scopes=y.join(","))}e.tenantId&&(u.tid=e.tenantId);const f=u;for(const y of Object.keys(f))f[y]===void 0&&delete f[y];const p=await e._getAppCheckToken(),h=p?`#${J8}=${encodeURIComponent(p)}`:"";return`${eB(e)}?${Ya(f).slice(1)}${h}`}function eB({config:e}){return e.emulator?rb(e,Z8):`https://${e.authDomain}/${X8}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay="webStorageSupport";class tB{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=XI,this._completeRedirectFn=C8,this._overrideRedirectResult=x8}async _openPopup(t,n,i,o){Si(this.eventManagers[t._key()]?.manager,"_initialize() not called before _openPopup()");const l=await NE(t,n,i,vv(),o);return Q8(t,l,cb())}async _openRedirect(t,n,i,o){await this._originValidation(t);const l=await NE(t,n,i,vv(),o);return i8(l),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:o,promise:l}=this.eventManagers[n];return o?Promise.resolve(o):(Si(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(t);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(t){const n=await F8(t),i=new R8(t);return n.register("authEvent",o=>(ke(o?.authEvent,t,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=n,i}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(ay,{type:ay},o=>{const l=o?.[0]?.[ay];l!==void 0&&n(!!l),nr(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=N8(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return UI()||OI()||sb()}}const nB=tB;var OE="@firebase/auth",ME="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rB{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(i=>{t(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ke(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iB(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function sB(e){Mr(new _r("auth",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),l=t.getProvider("app-check-internal"),{apiKey:u,authDomain:f}=i.options;ke(u&&!u.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:u,authDomain:f,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zI(e)},h=new Ez(i,o,l,p);return Oz(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,i)=>{t.getProvider("auth-internal").initialize()})),Mr(new _r("auth-internal",t=>{const n=Is(t.getProvider("auth").getImmediate());return(i=>new rB(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zn(OE,ME,iB(e)),Zn(OE,ME,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oB=300,aB=lR("authIdTokenMaxAge")||oB;let LE=null;const lB=e=>async t=>{const n=t&&await t.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>aB)return;const o=n?.token;LE!==o&&(LE=o,await fetch(e,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function cB(e=s_()){const t=Qa(e,"auth");if(t.isInitialized())return t.getImmediate();const n=FI(e,{popupRedirectResolver:nB,persistence:[h8,t8,XI]}),i=lR("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const u=lB(l.toString());Xz(n,u,()=>u(n.currentUser)),Kz(n,f=>u(f))}}const o=oR("auth");return o&&Mz(n,`http://${o}`),n}function uB(){return document.getElementsByTagName("head")?.[0]??document}Cz({loadJS(e){return new Promise((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=o=>{const l=vr("internal-error");l.customData=o,n(l)},i.type="text/javascript",i.charset="UTF-8",uB().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});sB("Browser");const dB=CI,di=qh(()=>{if(!Ac)throw new Error("Firebase app not initialized");try{return cB(Ac)}catch{return FI(Ac,{errorMap:dB})}}),sD=C.createContext({isDark:!1,toggle:()=>{}}),fB=E.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px 16px;
  font-family: inherit;
  font-size: 14px;
  color: ${e=>e.theme.colors.main};
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    background-color: ${e=>e.theme.colors.secondarySurface};
  }
`,hB=E.span`
  width: 32px;
  height: 18px;
  border-radius: 9px;
  background: ${e=>e.$on?e.theme.colors.accent:e.theme.borderColor};
  position: relative;
  flex-shrink: 0;
  transition: background-color 0.2s;

  &::after {
    content: "";
    position: absolute;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #fff;
    top: 2px;
    left: ${e=>e.$on?"16px":"2px"};
    transition: left 0.15s;
  }
`,oD=()=>{const{isDark:e,toggle:t}=C.useContext(sD);return g.jsxs(fB,{type:"button",role:"switch","aria-checked":e,onClick:t,children:["Dark mode",g.jsx(hB,{$on:e,"aria-hidden":"true"})]})},pB=E(Ts)`
  display: block;
  width: 100%;
  padding: 10px 0;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  color: ${e=>e.theme.colors.accent};
  border: 1px solid ${e=>e.theme.colors.accent}40;
  border-radius: ${e=>e.theme.borderRadius};
  transition: background-color 0.15s;

  &:hover {
    background-color: ${e=>e.theme.colors.accent}0a;
  }
`,mB=E.div`
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
  margin-bottom: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,gB=E.button`
  display: block;
  width: 100%;
  padding: 10px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: ${e=>e.theme.colors.secondary};
  background: none;
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  cursor: pointer;
  transition:
    background-color 0.15s,
    color 0.15s;

  &:hover {
    background-color: ${e=>e.theme.colors.secondarySurface};
    color: ${e=>e.theme.colors.main};
  }
`,yB=()=>{const e=Je(Za),{deleteToken:t}=C.useContext(vu),n=C.useCallback(async()=>{await t(),await di?.signOut()},[t]);return e.state==="loading"?null:e.state!=="fulfilled"||!e.data?g.jsx(pB,{to:tt.SIGN_IN,children:"Sign in"}):g.jsxs(g.Fragment,{children:[g.jsx(mB,{children:e.data.displayName}),g.jsx(oD,{}),g.jsx(gB,{type:"button",onClick:n,children:"Sign out"})]})},vB="#181a2f",_B=280,bB=E.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  transition: opacity 0.2s;
  opacity: ${e=>e.$open?1:0};
  pointer-events: ${e=>e.$open?"all":"none"};
  z-index: 10;
`,SB=E.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: ${_B}px;
  max-width: 90vw;
  background-color: ${e=>e.theme.colors.mainSurface};
  z-index: 11;
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(${e=>e.$open?"0":"100%"});
  overflow: hidden;
`,xB=E.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: env(safe-area-inset-top, 0) 16px 0;
  height: calc(60px + env(safe-area-inset-top, 0px));
  background-color: ${vB};
  color: #fff;
  flex-shrink: 0;
`,wB=E(Ts)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: inherit;
`,EB=E.span`
  font-size: 15px;
  font-weight: 600;
`,CB=E.button`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  padding: 6px;
  border-radius: 6px;
  display: flex;
  align-items: center;

  &:hover {
    color: #fff;
    background-color: rgba(255, 255, 255, 0.08);
  }
`,TB=E.nav`
  flex: 1;
  padding: 8px 0;
  overflow-y: auto;
`,of=E(Hv)`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  font-size: 15px;
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
  text-decoration: none;
  transition: background-color 0.1s;

  &:hover {
    background-color: ${e=>e.theme.colors.hoverSurface};
  }

  &.active {
    color: ${e=>e.theme.colors.accent};
    background-color: ${e=>e.theme.colors.accent}0a;
  }
`,RB=E.div`
  padding: 16px 20px;
  border-top: 1px solid ${e=>e.theme.borderColor};
  flex-shrink: 0;
`,AB=()=>g.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none","aria-hidden":"true",children:g.jsx("path",{d:"M4 4l10 10M14 4L4 14",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})}),IB=({open:e,onClose:t})=>{const n=Je(eb);return g.jsxs(g.Fragment,{children:[g.jsx(bB,{$open:e,onClick:t}),g.jsxs(SB,{$open:e,onClick:i=>i.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":"Navigation menu",children:[g.jsxs(xB,{children:[g.jsxs(wB,{to:tt.CLASS_LIST,onClick:t,children:[g.jsx(wI,{size:20}),g.jsx(EB,{children:"Peloton Alerts"})]}),g.jsx(CB,{onClick:t,"aria-label":"Close menu",children:g.jsx(AB,{})})]}),g.jsxs(TB,{onClick:t,children:[g.jsx(of,{to:tt.CLASS_LIST,end:!0,children:"Classes"}),g.jsx(of,{to:tt.ALERTS,children:"Alerts"}),g.jsx(of,{to:tt.ABOUT,end:!0,children:"FAQ"}),n&&g.jsx(of,{to:tt.STATS,children:"Stats"})]}),g.jsx(RB,{children:g.jsx(yB,{})})]})]})},DB=E.div`
  position: absolute;
  background: ${e=>e.theme.colors.mainSurface};
  color: ${e=>e.theme.colors.main};
  border-color: ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  border-style: solid;
  border-width: 1px;
  padding: 0.75em;
  right: 0;
  left: 0;
  top: 100%;
`,kB=({children:e,open:t,onClose:n})=>{const i=C.useRef(null),o=C.useCallback(l=>{l.key==="Escape"&&n()},[n]);return C.useEffect(()=>{if(t)return document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}},[t,o]),C.useEffect(()=>{if(!t)return;const l=f=>{const p=f.target;if(!(p instanceof Node)){n();return}const h=i.current;h&&h.contains(p)||n()},u=setTimeout(()=>{document.addEventListener("click",l,!0)},0);return()=>{clearTimeout(u),document.removeEventListener("click",l,!0)}},[t,n]),t?g.jsx(DB,{ref:i,role:"dialog","aria-modal":"true",children:e}):null},NB=E(Ts)`
  font-size: 15px;
  font-weight: 500;
  padding: 7px 16px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  transition:
    color 0.15s,
    border-color 0.15s,
    background-color 0.15s;

  &:hover {
    color: #fff;
    border-color: rgba(255, 255, 255, 0.6);
    background-color: rgba(255, 255, 255, 0.08);
  }

  ${e=>e.$disabled&&`
    opacity: 0.5;
    pointer-events: none;
  `}
`,OB=E.button`
  font-size: 15px;
  font-weight: 500;
  padding: 7px 16px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: rgba(255, 255, 255, 0.85);
  background: none;
  cursor: pointer;
  font-family: inherit;
  transition:
    color 0.15s,
    border-color 0.15s,
    background-color 0.15s;
  white-space: nowrap;
  max-width: 240px;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    color: #fff;
    border-color: rgba(255, 255, 255, 0.6);
    background-color: rgba(255, 255, 255, 0.08);
  }
`,MB=E.div`
  position: relative;
`,LB=E.hr`
  margin: 4px 0;
  border: none;
  border-top: 1px solid ${e=>e.theme.borderColor};
`,jB=E.button`
  display: block;
  width: 100%;
  padding: 8px 16px;
  font-family: inherit;
  font-size: 14px;
  color: ${e=>e.theme.colors.main};
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;

  &:hover {
    background-color: ${e=>e.theme.colors.secondarySurface};
  }
`,PB=()=>{const e=Je(Za),[t,n]=C.useState(!1),{deleteToken:i}=C.useContext(vu),o=C.useCallback(async()=>{await i(),await di?.signOut()},[i]);if(e.state!=="fulfilled"||!e.data){const l=e.state==="loading";return g.jsx(NB,{to:tt.SIGN_IN,$disabled:l,"aria-disabled":l,tabIndex:l?-1:void 0,children:"Sign in"})}return g.jsxs(MB,{children:[g.jsx(OB,{type:"button",onClick:()=>n(!0),"aria-expanded":t,"aria-haspopup":"dialog",children:e.data.displayName}),g.jsxs(kB,{open:t,onClose:()=>n(!1),children:[g.jsx(oD,{}),g.jsx(LB,{}),g.jsx(jB,{type:"button",onClick:o,children:"Sign out"})]})]})},$B="#181a2f",cp=680,UB=E.nav`
  height: inherit;
  background-color: ${$B};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: env(safe-area-inset-top, 0) 20px 0;
  gap: 16px;
  box-sizing: border-box;

  a {
    text-decoration: none;
    color: inherit;
  }

  @media only screen and (min-width: ${cp+1}px) {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
  }
`,zB=E(Ts)`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  justify-self: start;
`,BB=E.span`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.01em;
  white-space: nowrap;
`,HB=E.div`
  display: flex;
  align-items: center;
  gap: 2px;

  @media only screen and (max-width: ${cp}px) {
    display: none;
  }
`,af=E(Hv)`
  font-size: 15px;
  font-weight: 500;
  padding: 7px 14px;
  border-radius: 6px;
  color: rgba(255, 255, 255, 0.6);
  transition:
    color 0.15s,
    background-color 0.15s;
  white-space: nowrap;

  &:hover {
    color: #fff;
    background-color: rgba(255, 255, 255, 0.08);
  }

  &.active {
    color: #fff;
    background-color: rgba(255, 255, 255, 0.12);
  }
`,FB=E.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  justify-self: end;

  @media only screen and (max-width: ${cp}px) {
    display: none;
  }
`,qB=E.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 6px;
  border-radius: 6px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }

  @media only screen and (max-width: ${cp}px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,VB=()=>g.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:g.jsx("path",{d:"M3 5h14M3 10h14M3 15h14",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})}),GB=()=>{const[e,t]=C.useState(!1),n=Je(eb);return g.jsxs(g.Fragment,{children:[g.jsxs(UB,{children:[g.jsxs(zB,{to:tt.CLASS_LIST,children:[g.jsx(wI,{}),g.jsx(BB,{children:"Peloton Alerts"})]}),g.jsxs(HB,{children:[g.jsx(af,{to:tt.CLASS_LIST,end:!0,children:"Classes"}),g.jsx(af,{to:tt.ALERTS,children:"Alerts"}),g.jsx(af,{to:tt.ABOUT,end:!0,children:"FAQ"}),n&&g.jsx(af,{to:tt.STATS,children:"Stats"})]}),g.jsx(FB,{children:g.jsx(PB,{})}),g.jsx(qB,{type:"button","aria-label":"Open menu",onClick:()=>t(!0),children:g.jsx(VB,{})})]}),g.jsx(IB,{open:e,onClose:()=>t(!1)})]})},WB=E.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`,YB=E.div`
  position: sticky;
  height: calc(${Tu}px + env(safe-area-inset-top));
  top: 0;
  z-index: 2;
`,QB=E.div`
  flex: 1;
  background-color: ${e=>e.theme.colors.secondarySurface};
`,ms=({children:e})=>g.jsxs(WB,{children:[g.jsx(YB,{children:g.jsx(GB,{})}),g.jsx(QB,{children:e})]}),Ce=(...e)=>tn`
  @media only screen and (max-width: ${t=>t.theme.widths.mobile}px) {
    ${tn(...e)}
  }
`,aD=(...e)=>tn`
  @media only screen and (max-width: ${t=>t.theme.widths.tablet}px) {
    ${tn(...e)}
  }
`,KB=E.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 24px 20px;

  ${Ce`
    padding: 16px 12px;
  `}
`,XB=E.div`
  margin-bottom: 20px;
`,ZB=E.h1`
  font-size: 22px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
  margin: 0;
`,cc=E.section`
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  overflow: hidden;
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
`,uc=E.div`
  padding: 14px 20px;
  border-bottom: 1px solid ${e=>e.theme.borderColor};
`,dc=E.h2`
  font-size: 15px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
  margin: 0;
`,fc=E.div`
  padding: 16px 20px;
  line-height: 1.65;
  font-size: 15px;
  color: ${e=>e.theme.colors.secondary};

  a {
    color: ${e=>e.theme.colors.accent};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    margin: 0;
  }
`,JB=()=>g.jsx(ms,{children:g.jsxs(KB,{children:[g.jsx(XB,{children:g.jsx(ZB,{children:"FAQ"})}),g.jsxs(cc,{children:[g.jsx(uc,{children:g.jsx(dc,{children:"What is this?"})}),g.jsx(fc,{children:g.jsxs("p",{children:["A quicker, smarter way to browse"," ",g.jsx("a",{href:"https://studio.onepeloton.com/",target:"_blank",rel:"noreferrer",children:"Peloton Studios"})," ","class reservations. Filter by status (free, waitlist, full), instructor, or discipline — things the official site doesn't support. Classes are fetched directly from Peloton each time you load the page."]})})]}),g.jsxs(cc,{children:[g.jsx(uc,{children:g.jsx(dc,{children:"How do I view classes?"})}),g.jsx(fc,{children:g.jsxs("p",{children:["Open the ",g.jsx(Ts,{to:tt.CLASS_LIST,children:"Class List"})," and use the sidebar to set filters or switch between studio locations."]})})]}),g.jsxs(cc,{children:[g.jsx(uc,{children:g.jsx(dc,{children:"Is the class data live?"})}),g.jsx(fc,{children:g.jsx("p",{children:"Yes — data is fetched fresh from Peloton each time you load the page or switch studio. Filters persist across refreshes, unlike the official site."})})]}),g.jsxs(cc,{children:[g.jsx(uc,{children:g.jsx(dc,{children:"When do new classes become available?"})}),g.jsx(fc,{children:g.jsx("p",{children:"New classes typically open at 12:00 pm on Mondays and Thursdays in your studio's local timezone."})})]}),g.jsxs(cc,{children:[g.jsx(uc,{children:g.jsx(dc,{children:"Can I request a feature or report a bug?"})}),g.jsx(fc,{children:g.jsxs("p",{children:["Yes — this project is open source and lives on"," ",g.jsx("a",{href:"https://github.com/Abbondanzo/peloton-reservations",target:"_blank",rel:"noreferrer",children:"GitHub"}),". Open an issue to request a feature, report a bug, or just share feedback. Pull requests are welcome too."]})})]})]})}),$r=tn`
  border-color: ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  border-style: solid;
  border-width: 1px;
`,ku=tn`
  &:hover {
    background-color: ${e=>e.theme.colors.hoverSurface};
  }
`,lD=tn`
  &:focus {
    background-color: ${e=>e.theme.colors.hoverSurface};
  }
`,db=C.createContext({state:"idle"}),e9=e=>{if(!e||typeof e!="object")return!1;const t=e;return typeof t.snapshotAt=="number"&&typeof t.starts_at=="string"&&Array.isArray(t.instructors)&&typeof t.disciplineId=="string"&&typeof t.occupancy=="number"&&typeof t.maxOccupancy=="number"&&typeof t.waitingCount=="number"&&typeof t.status=="string"},t9=e=>{const[t,n]=C.useState({state:"loading"});return C.useEffect(()=>{if(!e){n({state:"fulfilled",data:[]});return}n({state:"loading"});const i=an;if(!i){n({state:"failed",error:new Error("No database connection")});return}const o=Mn(i,Ti.classHistory(e)),l=Cu(o,u=>{const f=u.val();if(!f){n({state:"fulfilled",data:[]});return}const p=Date.now()-FU,h=[];for(const[y,_]of Object.entries(f))if(!(!_||typeof _!="object"))for(const v of Object.values(_))e9(v)&&v.snapshotAt>=p&&h.push({...v,classId:y});h.sort((y,_)=>_.snapshotAt-y.snapshotAt),n({state:"fulfilled",data:h})},u=>{n({state:"failed",error:u})});return()=>l()},[e]),t},Fa=(e,t,n)=>{const i=new Date(e),o=new Intl.DateTimeFormat(void 0,{month:n?"long":"short",timeZone:t}).format(i),l=new Intl.DateTimeFormat(void 0,{day:"numeric",timeZone:t}).format(i);return n?`${new Intl.DateTimeFormat(void 0,{weekday:"long",timeZone:t}).format(i)}, ${o} ${l}`:`${o} ${l}`},n9=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],r9=(e,t)=>{const n=new Map;for(const i of e){const o=new Date(i.snapshotAt),l=Fa(o.toISOString(),t,!0);if(!n.has(l)){const u=new Intl.DateTimeFormat("en-US",{weekday:"long",timeZone:t}).format(o);n.set(l,{dayIndex:n9.indexOf(u),snapshots:[]})}n.get(l).snapshots.push(i)}return Array.from(n.entries()).map(([i,{dayIndex:o,snapshots:l}])=>({label:i,dayIndex:o,snapshots:l}))},wo=(e,t)=>new Intl.DateTimeFormat(void 0,{hour:"numeric",minute:"numeric",timeZone:t}).format(new Date(e)),i9=E.div`
  border: 1px solid ${e=>e.theme.colors.status.free.text}40;
  border-left: 4px solid ${e=>e.theme.colors.status.free.text};
  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.status.free.bg};
  padding: 12px 14px;
`,s9=E.div`
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${e=>e.theme.colors.status.free.text};
  margin-bottom: 6px;
`,o9=E.div`
  font-size: 13px;
  color: ${e=>e.theme.colors.main};
  font-weight: 500;
`,a9=E.div`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
  margin-top: 2px;
`,l9=E.div`
  font-size: 11px;
  color: ${e=>e.theme.colors.secondary};
  opacity: 0.6;
  margin-top: 2px;
`,c9=({snapshot:e,timezone:t})=>{const n=Fa(e.starts_at,t,!1),i=wo(e.starts_at,t),o=wo(new Date(e.snapshotAt).toISOString(),t),l=e.instructors[0]?.name??"Unknown instructor",u=e.maxOccupancy-e.occupancy;return g.jsxs(i9,{children:[g.jsx(s9,{children:"● Would have triggered"}),g.jsxs(o9,{children:[n," ",i,e.name?` · ${e.name}`:""," · ",l]}),g.jsx(a9,{children:e.status==="free"?`Free · ${u} spot${u===1?"":"s"} available`:e.status==="waitlist"?`Waitlist · ${e.waitingCount} waiting`:"Full"}),g.jsxs(l9,{children:["detected at ",o]})]})},u9=E.div`
  border: 1px solid ${e=>e.theme.colors.status.waitlist.text}40;
  border-left: 4px solid ${e=>e.theme.colors.status.waitlist.text};
  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.status.waitlist.bg};
  padding: 12px 14px;
`,d9=E.div`
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${e=>e.theme.colors.status.waitlist.text};
  margin-bottom: 6px;
`,f9=E.div`
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
`,h9=E.div`
  font-size: 11px;
  color: ${e=>e.theme.colors.secondary};
  opacity: 0.6;
  margin-top: 2px;
`,p9={instructor:"wrong instructor",time:"outside your time range",discipline:"wrong discipline",status:"class not bookable"},m9=({snapshot:e,reason:t,timezone:n})=>{const i=Fa(e.starts_at,n,!1),o=wo(e.starts_at,n),l=wo(new Date(e.snapshotAt).toISOString(),n),u=e.instructors[0]?.name??"Unknown instructor";return g.jsxs(u9,{children:[g.jsxs(d9,{children:["◌ Near miss — ",p9[t]]}),g.jsxs(f9,{children:[i," ",o,e.name?` · ${e.name}`:""," · ",u]}),g.jsxs(h9,{children:["detected at ",l]})]})},g9=E.button`
  background: none;
  border: none;
  padding: 4px 0;
  font-family: inherit;
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    color: ${e=>e.theme.colors.main};
  }
`,y9=E.ul`
  margin: 6px 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,v9=E.li`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
  padding: 4px 8px;
  background-color: ${e=>e.theme.colors.secondarySurface};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,_9=E.span`
  font-size: 11px;
  opacity: 0.6;
`,b9=({snapshots:e,timezone:t})=>{const[n,i]=C.useState(!1),o=e.length;return g.jsxs("div",{children:[g.jsxs(g9,{type:"button",onClick:()=>i(l=>!l),children:[g.jsx("span",{children:n?"▾":"▸"}),o," class",o===1?"":"es"," skipped"]}),n&&g.jsx(y9,{children:e.map((l,u)=>{const f=Fa(l.starts_at,t,!1),p=wo(l.starts_at,t),h=wo(new Date(l.snapshotAt).toISOString(),t);return g.jsxs(v9,{children:[g.jsxs("span",{children:[f," ",p,l.name?` · ${l.name}`:"",l.instructors[0]?` · ${l.instructors[0].name}`:""]}),g.jsxs(_9,{children:["detected at ",h]})]},u)})})]})},S9=E.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,x9=E.h3`
  position: sticky;
  top: calc(${Tu}px + env(safe-area-inset-top, 0px));
  margin: 0;
  padding: 8px 0;
  font-size: 13px;
  font-weight: 600;
  color: ${e=>e.theme.colors.secondary};
  background-color: ${e=>e.theme.colors.mainSurface};
  border-bottom: 1px solid ${e=>e.theme.borderColor};
  z-index: 1;
  display: flex;
  align-items: baseline;
  gap: 8px;
`,w9=E.span`
  font-size: 11px;
  font-weight: 400;
  color: ${e=>e.theme.colors.secondary};
  opacity: 0.6;
`,E9=({label:e,dayIndex:t,snapshots:n,alert:i,timezone:o})=>{const l=!!i.timeRanges[t],u=[],f=[],p=[];for(const h of n){const y=SI(h,i);y.type==="match"?u.push(h):y.type==="near-miss"?f.push({snapshot:h,reason:y.reason}):p.push(h)}return g.jsxs(S9,{children:[g.jsxs(x9,{children:[e,!l&&g.jsx(w9,{children:"not monitored"})]}),u.map((h,y)=>g.jsx(c9,{snapshot:h,timezone:o},y)),f.map(({snapshot:h,reason:y},_)=>g.jsx(m9,{snapshot:h,reason:y,timezone:o},_)),p.length>0&&g.jsx(b9,{snapshots:p,timezone:o})]})},C9=E.div`
  display: flex;
  gap: 16px;
  padding: 12px 0;
  border-bottom: 1px solid ${e=>e.theme.borderColor};
  flex-wrap: wrap;
`,jE=E.span`
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
`,PE=E.strong`
  color: ${e=>e.$color??e.theme.colors.main};
`,T9=({matchCount:e,nearMissCount:t})=>{const n=Yv();return g.jsxs(C9,{children:[g.jsxs(jE,{children:[g.jsx(PE,{$color:n.colors.status.free.text,children:e})," ",e===1?"class":"classes"," would have triggered"]}),g.jsxs(jE,{children:[g.jsx(PE,{$color:n.colors.status.waitlist.text,children:t})," ","near ",t===1?"miss":"misses"]})]})},R9=E.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  ${$r}
  border-radius: ${e=>e.theme.borderRadius};
  overflow: hidden;
  background-color: ${e=>e.theme.colors.mainSurface};
`,A9=E.div`
  padding: 20px 24px;
  border-bottom: 1px solid ${e=>e.theme.borderColor};

  ${Ce`
    padding: 16px;
  `}
`,I9=E.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`,D9=E.button`
  flex-shrink: 0;
  padding: 6px 12px;
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  background: none;
  font-family: inherit;
  font-size: 12px;
  color: ${e=>e.$sent?e.theme.colors.status.free.text:e.theme.colors.secondary};
  cursor: ${e=>e.disabled?"default":"pointer"};
  transition: all 0.15s;
  white-space: nowrap;

  &:hover:not(:disabled) {
    border-color: ${e=>e.theme.colors.accent};
    color: ${e=>e.theme.colors.accent};
  }
`,k9=E.button`
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;
  font-size: 13px;
  color: ${e=>e.theme.colors.accent};
  cursor: pointer;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    text-decoration: underline;
  }
`,N9=E.h1`
  margin: 0 0 4px;
  font-size: 18px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
`,O9=E.p`
  margin: 0;
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
`,M9=E.div`
  padding: 16px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${Ce`
    padding: 12px 16px 16px;
  `}
`,lf=E.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
  padding: 32px 0;
`,L9=()=>{const{alertId:e}=UM(),t=Cs(),n=C.useContext(db),[i,o]=C.useState("idle"),l=C.useMemo(()=>n.state!=="fulfilled"?null:n.data.find(T=>T.id===e)??null,[n,e]),u=t9(l?.studioId??null),f=l?fn[l.studioId]?.timezone??"UTC":"UTC",p=C.useMemo(()=>!l||u.state!=="fulfilled"?[]:r9(u.data,f),[l,u,f]),{matchCount:h,nearMissCount:y}=C.useMemo(()=>{if(!l||u.state!=="fulfilled")return{matchCount:0,nearMissCount:0};let T=0,k=0;for(const M of u.data){const R=SI(M,l);R.type==="match"?T++:R.type==="near-miss"&&k++}return{matchCount:T,nearMissCount:k}},[l,u]),_=n.state==="loading"||n.state==="idle"||u.state==="loading",v="Notification"in window&&"serviceWorker"in navigator,b=C.useCallback(async()=>{if(v){o("sending");try{if(Notification.permission!=="granted"&&await Notification.requestPermission()!=="granted"){o("idle");return}const T=await navigator.serviceWorker.ready,k=l?fn[l.studioId]:null,M="Spot opened up!",R=`${l?.name??"Test alert"} — ${k?.location??"Studio"} · test notification`;await T.showNotification(M,{body:R,icon:"/icons/icon-192x192.png",badge:"/icons/icon-96x96.png",data:{classUrl:"/p/7248695-peloton-studios-new-york/e/99586855-30-min-intervals-ride/"}}),o("sent"),setTimeout(()=>o("idle"),3e3)}catch{o("error"),setTimeout(()=>o("idle"),3e3)}}},[l,v]),x=l?.name??"Alert",I=i==="sending"?"Sending…":i==="sent"?"Sent!":i==="error"?"Error":"Send test notification";return g.jsxs(R9,{children:[g.jsxs(A9,{children:[g.jsx(k9,{type:"button",onClick:()=>t(-1),children:"← Alerts"}),g.jsxs(I9,{children:[g.jsx("div",{children:g.jsxs(N9,{children:[x," — Past 7 Days"]})}),v&&g.jsx(D9,{type:"button",$sent:i==="sent",disabled:i==="sending",onClick:b,title:"Fire a test push notification to verify delivery and the notification URL",children:I})]}),g.jsx(O9,{children:l?`${fn[l.studioId]?.location??l.studioId}`:""})]}),g.jsxs(M9,{children:[_&&g.jsx(lf,{children:"Loading…"}),!_&&!l&&g.jsx(lf,{children:"Alert not found."}),!_&&l&&u.state==="fulfilled"&&g.jsxs(g.Fragment,{children:[g.jsx(T9,{matchCount:h,nearMissCount:y}),p.length===0&&g.jsx(lf,{children:"No class history yet. History builds up as the backend detects class changes."}),p.map(({label:T,dayIndex:k,snapshots:M})=>g.jsx(E9,{label:T,dayIndex:k,snapshots:M,alert:l,timezone:f},T))]}),!_&&u.state==="failed"&&g.jsx(lf,{children:"Failed to load class history."})]})]})},j9=async(e,t)=>{const n=an;if(!n)throw new Error("No Firebase database connection to use");const i=(await TU(Mn(n,Ti.alerts(e)),t)).key;if(!i)throw new Error("Missing ID from insertion operation");return{...t,id:i}},cD=async(e,t)=>{const n=an;if(!n)throw new Error("No Firebase database connection to use");const i={...t,name:t.name??null,watchedClassIds:t.watchedClassIds??null,disabled:t.disabled??null};await vI(Mn(n,Ti.alert(e,t.id)),i)},P9=E.div`
  display: flex;
  flex-direction: column;
`,$9=E.label`
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,U9=E.input`
  ${$r}
  padding: 12px 8px;
  font-family: inherit;
  background-color: ${e=>e.theme.colors.mainSurface};
  color: ${e=>e.theme.colors.main};
`,z9=E.span`
  margin-top: 4px;
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,B9=({label:e,hint:t,placeholder:n,value:i,onChange:o})=>{const l=C.useId();return g.jsxs(P9,{children:[g.jsx($9,{htmlFor:l,children:e}),g.jsx(U9,{id:l,placeholder:n,value:i,"aria-describedby":t?`${l}-hint`:void 0,onChange:({target:u})=>o(u.value)}),t&&g.jsx(z9,{id:`${l}-hint`,children:t})]})},H9=E.label`
  ${$r}
  ${ku}
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  cursor: pointer;
  user-select: none;
  transition:
    border-color 0.15s,
    background-color 0.15s;

  &:has(input:checked) {
    border-color: ${e=>e.theme.colors.accent};
    background-color: ${e=>e.theme.colors.accent}0a;
  }
`,F9=E.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,q9=E.span`
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
`,V9=E.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,G9=E.input`
  accent-color: ${e=>e.theme.colors.accent};
`,vh=({name:e,value:t,checked:n,onChange:i,label:o,hint:l,icon:u})=>{const f=C.useId();return g.jsxs(H9,{htmlFor:f,children:[g.jsx(G9,{type:"radio",id:f,name:e,value:t,checked:n,onChange:i}),u,g.jsxs(F9,{children:[g.jsx(q9,{children:o}),l&&g.jsx(V9,{children:l})]})]})},$E=E.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`,UE=E.legend`
  font-weight: 600;
  font-size: 18px;
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,zE=E.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  margin: 0 0 16px;
`,BE=E.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,HE=E.div`
  margin-top: 32px;

  ${Ce`
    margin-top: 24px;
  `}
`,W9=Object.entries(fn).map(([e,t])=>({id:e,label:t.location})),Y9=[{status:"free",label:"Open spots only",hint:"Alert me when a class has available spots"},{status:"waitlist",label:"Open spots or waitlist",hint:"Alert me even if I'd join the waitlist"}],Q9=({name:e,onNameChange:t,studioId:n,onStudioChange:i,maxStatus:o,onStatusChange:l})=>g.jsxs("div",{children:[g.jsx(B9,{label:"Alert name (optional)",hint:"Leave blank to auto-generate a name from your filters",placeholder:"e.g. Morning Cycling with Cody",value:e,onChange:t}),g.jsx(HE,{}),g.jsxs($E,{children:[g.jsx(UE,{children:"Which studio?"}),g.jsx(zE,{children:"Pick the Peloton studio you want to monitor."}),g.jsx(BE,{children:W9.map(u=>g.jsx(vh,{name:"studio",value:u.id,checked:n===u.id,onChange:()=>i(u.id),label:u.label},u.id))})]}),g.jsx(HE,{}),g.jsxs($E,{children:[g.jsx(UE,{children:"When should we alert you?"}),g.jsx(zE,{children:"Choose whether to include waitlisted classes."}),g.jsx(BE,{children:Y9.map(u=>g.jsx(vh,{name:"status",value:u.status,checked:o===u.status,onChange:()=>l(u.status),label:u.label,hint:u.hint},u.status))})]})]}),FE={Cardio:"#d8ec43",Cycling:"#bbd4f4",Meditation:"#e6d4ff",Rowing:"#cbf293","Outdoor Run":"#a8e6cf","Outdoor Run/Walk":"#94f3d0",Running:"#fde987",Strength:"#ffc0d5",Tread:"#fdbe9f",Walking:"#ffa8a9",Yoga:"#ceffdc"},uD=.2,_h=e=>Math.round(e*(1-uD*2)),K9=e=>Math.round(e*uD),X9=E.div`
  width: ${e=>_h(e.size)}px;
  height: ${e=>_h(e.size)}px;
  border-radius: ${e=>e.size}px;
  background-color: ${e=>e.color};
  padding: ${e=>K9(e.size)}px;
  flex-shrink: 0;
`,Z9=E.img`
  width: ${e=>_h(e.size)}px;
  height: ${e=>_h(e.size)}px;
  display: block;
`,bh=({discipline:e,size:t=32})=>{const n=Yv(),i=C.useMemo(()=>{const o=Object.keys(FE),l=e.name.toLowerCase(),u=o.find(f=>f.toLowerCase()===l)??o.find(f=>{const p=f.toLowerCase();return p.includes(l)||l.includes(p)});if(u)return FE[u];{const f=`Received unsupported discipline ${e.name}`;return console.log(f),Jv(f),n.colors.secondarySurface}},[e.name,n.colors.secondarySurface]);return g.jsx(X9,{color:i,size:t,children:g.jsx(Z9,{alt:e.name,src:e.iconUrl,size:t,color:i})})},J9=E.img`
  width: ${e=>e.size}px;
  min-width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  overflow: hidden;
  background-color: ${e=>e.theme.colors.secondarySurface};
  border-radius: 50%;
  color: ${e=>e.theme.colors.secondary};
`,fb=({instructor:e,size:t=32})=>g.jsx(J9,{src:e.imageUrl,alt:`Profile of ${e.name}`,size:t});var eH=class extends Error{issues;constructor(e){super(e[0].message),this.name="SchemaError",this.issues=e}},dD=(e=>(e.uninitialized="uninitialized",e.pending="pending",e.fulfilled="fulfilled",e.rejected="rejected",e))(dD||{});function qE(e){return{status:e,isUninitialized:e==="uninitialized",isLoading:e==="pending",isSuccess:e==="fulfilled",isError:e==="rejected"}}var VE=bs;function hb(e,t){if(e===t||!(VE(e)&&VE(t)||Array.isArray(e)&&Array.isArray(t)))return t;const n=Object.keys(t),i=Object.keys(e);let o=n.length===i.length;const l=Array.isArray(t)?[]:{};for(const u of n)l[u]=hb(e[u],t[u]),o&&(o=e[u]===l[u]);return o?e:l}function ly(e){let t=0;for(const n in e)t++;return t}var GE=e=>[].concat(...e);function tH(e){return new RegExp("(^|:)//").test(e)}function nH(){return typeof document>"u"?!0:document.visibilityState!=="hidden"}function Sh(e){return e!=null}function rH(){return typeof navigator>"u"||navigator.onLine===void 0?!0:navigator.onLine}var iH=e=>e.replace(/\/$/,""),sH=e=>e.replace(/^\//,"");function oH(e,t){if(!e)return t;if(!t)return e;if(tH(t))return t;const n=e.endsWith("/")||!t.startsWith("?")?"/":"";return e=iH(e),t=sH(t),`${e}${n}${t}`}function aH(e,t,n){return e.has(t)?e.get(t):e.set(t,n).get(t)}function xv(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}var wv=()=>new Map,WE=(...e)=>fetch(...e),lH=e=>e.status>=200&&e.status<=299,cH=e=>/ion\/(vnd\.api\+)?json/.test(e.get("content-type")||"");function YE(e){if(!bs(e))return e;const t={...e};for(const[n,i]of Object.entries(t))i===void 0&&delete t[n];return t}function uH({baseUrl:e,prepareHeaders:t=_=>_,fetchFn:n=WE,paramsSerializer:i,isJsonContentType:o=cH,jsonContentType:l="application/json",jsonReplacer:u,timeout:f,responseHandler:p,validateStatus:h,...y}={}){return typeof fetch>"u"&&n===WE&&console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."),async(v,b,x)=>{const{getState:I,extra:T,endpoint:k,forced:M,type:R}=b;let D,{url:O,headers:A=new Headers(y.headers),params:j=void 0,responseHandler:U=p??"json",validateStatus:F=h??lH,timeout:H=f,...z}=typeof v=="string"?{url:v}:v,G,V=b.signal;H&&(G=new AbortController,b.signal.addEventListener("abort",G.abort),V=G.signal);let te={...y,signal:V,...z};A=new Headers(YE(A)),te.headers=await t(A,{getState:I,arg:v,extra:T,endpoint:k,forced:M,type:R,extraOptions:x})||A;const ue=de=>typeof de=="object"&&(bs(de)||Array.isArray(de)||typeof de.toJSON=="function");if(!te.headers.has("content-type")&&ue(te.body)&&te.headers.set("content-type",l),ue(te.body)&&o(te.headers)&&(te.body=JSON.stringify(te.body,u)),j){const de=~O.indexOf("?")?"&":"?",me=i?i(j):new URLSearchParams(YE(j));O+=de+me}O=oH(e,O);const P=new Request(O,te);D={request:new Request(O,te)};let ne,ae=!1,N=G&&setTimeout(()=>{ae=!0,G.abort()},H);try{ne=await n(P)}catch(de){return{error:{status:ae?"TIMEOUT_ERROR":"FETCH_ERROR",error:String(de)},meta:D}}finally{N&&clearTimeout(N),G?.signal.removeEventListener("abort",G.abort)}const K=ne.clone();D.response=K;let le,ie="";try{let de;if(await Promise.all([_(ne,U).then(me=>le=me,me=>de=me),K.text().then(me=>ie=me,()=>{})]),de)throw de}catch(de){return{error:{status:"PARSING_ERROR",originalStatus:ne.status,data:ie,error:String(de)},meta:D}}return F(ne,le)?{data:le,meta:D}:{error:{status:ne.status,data:le},meta:D}};async function _(v,b){if(typeof b=="function")return b(v);if(b==="content-type"&&(b=o(v.headers)?"json":"text"),b==="json"){const x=await v.text();return x.length?JSON.parse(x):null}return v.text()}}var QE=class{constructor(e,t=void 0){this.value=e,this.meta=t}},pb=mr("__rtkq/focused"),fD=mr("__rtkq/unfocused"),mb=mr("__rtkq/online"),hD=mr("__rtkq/offline");function up(e){return e.type==="query"}function dH(e){return e.type==="mutation"}function dp(e){return e.type==="infinitequery"}function xh(e){return up(e)||dp(e)}function gb(e,t,n,i,o,l){return fH(e)?e(t,n,i,o).filter(Sh).map(Ev).map(l):Array.isArray(e)?e.map(Ev).map(l):[]}function fH(e){return typeof e=="function"}function Ev(e){return typeof e=="string"?{type:e}:e}function hH(e,t){return e.catch(t)}var cu=Symbol("forceQueryFn"),Cv=e=>typeof e[cu]=="function";function pH({serializeQueryArgs:e,queryThunk:t,infiniteQueryThunk:n,mutationThunk:i,api:o,context:l,internalState:u}){const{runningQueries:f,runningMutations:p}=u,{unsubscribeQueryResult:h,removeMutationResult:y,updateSubscriptionOptions:_}=o.internalActions;return{buildInitiateQuery:k,buildInitiateInfiniteQuery:M,buildInitiateMutation:R,getRunningQueryThunk:v,getRunningMutationThunk:b,getRunningQueriesThunk:x,getRunningMutationsThunk:I};function v(D,O){return A=>{const j=l.endpointDefinitions[D],U=e({queryArgs:O,endpointDefinition:j,endpointName:D});return f.get(A)?.[U]}}function b(D,O){return A=>p.get(A)?.[O]}function x(){return D=>Object.values(f.get(D)||{}).filter(Sh)}function I(){return D=>Object.values(p.get(D)||{}).filter(Sh)}function T(D,O){const A=(j,{subscribe:U=!0,forceRefetch:F,subscriptionOptions:H,[cu]:z,...G}={})=>(V,te)=>{const ue=e({queryArgs:j,endpointDefinition:O,endpointName:D});let P;const X={...G,type:"query",subscribe:U,forceRefetch:F,subscriptionOptions:H,endpointName:D,originalArgs:j,queryCacheKey:ue,[cu]:z};if(up(O))P=t(X);else{const{direction:Ae,initialPageParam:be}=G;P=n({...X,direction:Ae,initialPageParam:be})}const ne=o.endpoints[D].select(j),ae=V(P),N=ne(te()),{requestId:K,abort:le}=ae,ie=N.requestId!==K,de=f.get(V)?.[ue],me=()=>ne(te()),pe=Object.assign(z?ae.then(me):ie&&!de?Promise.resolve(N):Promise.all([de,ae]).then(me),{arg:j,requestId:K,subscriptionOptions:H,queryCacheKey:ue,abort:le,async unwrap(){const Ae=await pe;if(Ae.isError)throw Ae.error;return Ae.data},refetch:()=>V(A(j,{subscribe:!1,forceRefetch:!0})),unsubscribe(){U&&V(h({queryCacheKey:ue,requestId:K}))},updateSubscriptionOptions(Ae){pe.subscriptionOptions=Ae,V(_({endpointName:D,requestId:K,queryCacheKey:ue,options:Ae}))}});if(!de&&!ie&&!z){const Ae=aH(f,V,{});Ae[ue]=pe,pe.then(()=>{delete Ae[ue],ly(Ae)||f.delete(V)})}return pe};return A}function k(D,O){return T(D,O)}function M(D,O){return T(D,O)}function R(D){return(O,{track:A=!0,fixedCacheKey:j}={})=>(U,F)=>{const H=i({type:"mutation",endpointName:D,originalArgs:O,track:A,fixedCacheKey:j}),z=U(H),{requestId:G,abort:V,unwrap:te}=z,ue=hH(z.unwrap().then(ae=>({data:ae})),ae=>({error:ae})),P=()=>{U(y({requestId:G,fixedCacheKey:j}))},X=Object.assign(ue,{arg:z.arg,requestId:G,abort:V,unwrap:te,reset:P}),ne=p.get(U)||{};return p.set(U,ne),ne[G]=X,X.then(()=>{delete ne[G],ly(ne)||p.delete(U)}),j&&(ne[j]=X,X.then(()=>{ne[j]===X&&(delete ne[j],ly(ne)||p.delete(U))})),X}}}var pD=class extends eH{constructor(e,t,n,i){super(e),this.value=t,this.schemaName=n,this._bqMeta=i}},Js=(e,t)=>Array.isArray(e)?e.includes(t):!!e;async function eo(e,t,n,i){const o=await e["~standard"].validate(t);if(o.issues)throw new pD(o.issues,t,n,i);return o.value}function KE(e){return e}var hc=(e={})=>({...e,[Gh]:!0});function mH({reducerPath:e,baseQuery:t,context:{endpointDefinitions:n},serializeQueryArgs:i,api:o,assertTagType:l,selectors:u,onSchemaFailure:f,catchSchemaFailure:p,skipSchemaValidation:h}){const y=(z,G,V,te)=>(ue,P)=>{const X=n[z],ne=i({queryArgs:G,endpointDefinition:X,endpointName:z});if(ue(o.internalActions.queryResultPatched({queryCacheKey:ne,patches:V})),!te)return;const ae=o.endpoints[z].select(G)(P()),N=gb(X.providesTags,ae.data,void 0,G,{},l);ue(o.internalActions.updateProvidedBy([{queryCacheKey:ne,providedTags:N}]))};function _(z,G,V=0){const te=[G,...z];return V&&te.length>V?te.slice(0,-1):te}function v(z,G,V=0){const te=[...z,G];return V&&te.length>V?te.slice(1):te}const b=(z,G,V,te=!0)=>(ue,P)=>{const ne=o.endpoints[z].select(G)(P()),ae={patches:[],inversePatches:[],undo:()=>ue(o.util.patchQueryData(z,G,ae.inversePatches,te))};if(ne.status==="uninitialized")return ae;let N;if("data"in ne)if(br(ne.data)){const[K,le,ie]=JR(ne.data,V);ae.patches.push(...le),ae.inversePatches.push(...ie),N=K}else N=V(ne.data),ae.patches.push({op:"replace",path:[],value:N}),ae.inversePatches.push({op:"replace",path:[],value:ne.data});return ae.patches.length===0||ue(o.util.patchQueryData(z,G,ae.patches,te)),ae},x=(z,G,V)=>te=>te(o.endpoints[z].initiate(G,{subscribe:!1,forceRefetch:!0,[cu]:()=>({data:V})})),I=(z,G)=>z.query&&z[G]?z[G]:KE,T=async(z,{signal:G,abort:V,rejectWithValue:te,fulfillWithValue:ue,dispatch:P,getState:X,extra:ne})=>{const ae=n[z.endpointName],{metaSchema:N,skipSchemaValidation:K=h}=ae;try{let le=KE;const ie={signal:G,abort:V,dispatch:P,getState:X,extra:ne,endpoint:z.endpointName,type:z.type,forced:z.type==="query"?k(z,X()):void 0,queryCacheKey:z.type==="query"?z.queryCacheKey:void 0},de=z.type==="query"?z[cu]:void 0;let me;const pe=async(be,De,$e,vt)=>{if(De==null&&be.pages.length)return Promise.resolve({data:be});const mt={queryArg:z.originalArgs,pageParam:De},Ln=await Ae(mt),wt=vt?_:v;return{data:{pages:wt(be.pages,Ln.data,$e),pageParams:wt(be.pageParams,De,$e)},meta:Ln.meta}};async function Ae(be){let De;const{extraOptions:$e,argSchema:vt,rawResponseSchema:mt,responseSchema:Ln}=ae;if(vt&&!Js(K,"arg")&&(be=await eo(vt,be,"argSchema",{})),de?De=de():ae.query?(le=I(ae,"transformResponse"),De=await t(ae.query(be),ie,$e)):De=await ae.queryFn(be,ie,$e,Ur=>t(Ur,ie,$e)),typeof process<"u",De.error)throw new QE(De.error,De.meta);let{data:wt}=De;mt&&!Js(K,"rawResponse")&&(wt=await eo(mt,De.data,"rawResponseSchema",De.meta));let jn=await le(wt,De.meta,be);return Ln&&!Js(K,"response")&&(jn=await eo(Ln,jn,"responseSchema",De.meta)),{...De,data:jn}}if(z.type==="query"&&"infiniteQueryOptions"in ae){const{infiniteQueryOptions:be}=ae,{maxPages:De=1/0}=be;let $e;const vt={pages:[],pageParams:[]},mt=u.selectQueryEntry(X(),z.queryCacheKey)?.data,wt=k(z,X())&&!z.direction||!mt?vt:mt;if("direction"in z&&z.direction&&wt.pages.length){const jn=z.direction==="backward",Wt=(jn?mD:Tv)(be,wt,z.originalArgs);$e=await pe(wt,Wt,De,jn)}else{const{initialPageParam:jn=be.initialPageParam}=z,Ur=mt?.pageParams??[],Wt=Ur[0]??jn,rl=Ur.length;$e=await pe(wt,Wt,De),de&&($e={data:$e.data.pages[0]});for(let Ds=1;Ds<rl;Ds++){const Io=Tv(be,$e.data,z.originalArgs);$e=await pe($e.data,Io,De)}}me=$e}else me=await Ae(z.originalArgs);return N&&!Js(K,"meta")&&me.meta&&(me.meta=await eo(N,me.meta,"metaSchema",me.meta)),ue(me.data,hc({fulfilledTimeStamp:Date.now(),baseQueryMeta:me.meta}))}catch(le){let ie=le;if(ie instanceof QE){let de=I(ae,"transformErrorResponse");const{rawErrorResponseSchema:me,errorResponseSchema:pe}=ae;let{value:Ae,meta:be}=ie;try{me&&!Js(K,"rawErrorResponse")&&(Ae=await eo(me,Ae,"rawErrorResponseSchema",be)),N&&!Js(K,"meta")&&(be=await eo(N,be,"metaSchema",be));let De=await de(Ae,be,z.originalArgs);return pe&&!Js(K,"errorResponse")&&(De=await eo(pe,De,"errorResponseSchema",be)),te(De,hc({baseQueryMeta:be}))}catch(De){ie=De}}try{if(ie instanceof pD){const de={endpoint:z.endpointName,arg:z.originalArgs,type:z.type,queryCacheKey:z.type==="query"?z.queryCacheKey:void 0};ae.onSchemaFailure?.(ie,de),f?.(ie,de);const{catchSchemaFailure:me=p}=ae;if(me)return te(me(ie,de),hc({baseQueryMeta:ie._bqMeta}))}}catch(de){ie=de}throw console.error(ie),ie}};function k(z,G){const V=u.selectQueryEntry(G,z.queryCacheKey),te=u.selectConfig(G).refetchOnMountOrArgChange,ue=V?.fulfilledTimeStamp,P=z.forceRefetch??(z.subscribe&&te);return P?P===!0||(Number(new Date)-Number(ue))/1e3>=P:!1}const M=()=>Ow(`${e}/executeQuery`,T,{getPendingMeta({arg:G}){const V=n[G.endpointName];return hc({startedTimeStamp:Date.now(),...dp(V)?{direction:G.direction}:{}})},condition(G,{getState:V}){const te=V(),ue=u.selectQueryEntry(te,G.queryCacheKey),P=ue?.fulfilledTimeStamp,X=G.originalArgs,ne=ue?.originalArgs,ae=n[G.endpointName],N=G.direction;return Cv(G)?!0:ue?.status==="pending"?!1:k(G,te)||up(ae)&&ae?.forceRefetch?.({currentArg:X,previousArg:ne,endpointState:ue,state:te})?!0:!(P&&!N)},dispatchConditionRejection:!0}),R=M(),D=M(),O=Ow(`${e}/executeMutation`,T,{getPendingMeta(){return hc({startedTimeStamp:Date.now()})}}),A=z=>"force"in z,j=z=>"ifOlderThan"in z,U=(z,G,V)=>(te,ue)=>{const P=A(V)&&V.force,X=j(V)&&V.ifOlderThan,ne=(N=!0)=>{const K={forceRefetch:N,isPrefetch:!0};return o.endpoints[z].initiate(G,K)},ae=o.endpoints[z].select(G)(ue());if(P)te(ne());else if(X){const N=ae?.fulfilledTimeStamp;if(!N){te(ne());return}(Number(new Date)-Number(new Date(N)))/1e3>=X&&te(ne())}else te(ne(!1))};function F(z){return G=>G?.meta?.arg?.endpointName===z}function H(z,G){return{matchPending:Dc(g_(z),F(G)),matchFulfilled:Dc(Ss(z),F(G)),matchRejected:Dc(Pa(z),F(G))}}return{queryThunk:R,mutationThunk:O,infiniteQueryThunk:D,prefetch:U,updateQueryData:b,upsertQueryData:x,patchQueryData:y,buildMatchThunkActions:H}}function Tv(e,{pages:t,pageParams:n},i){const o=t.length-1;return e.getNextPageParam(t[o],t,n[o],n,i)}function mD(e,{pages:t,pageParams:n},i){return e.getPreviousPageParam?.(t[0],t,n[0],n,i)}function gD(e,t,n,i){return gb(n[e.meta.arg.endpointName][t],Ss(e)?e.payload:void 0,Yh(e)?e.payload:void 0,e.meta.arg.originalArgs,"baseQueryMeta"in e.meta?e.meta.baseQueryMeta:void 0,i)}function cf(e,t,n){const i=e[t];i&&n(i)}function uu(e){return("arg"in e?e.arg.fixedCacheKey:e.fixedCacheKey)??e.requestId}function XE(e,t,n){const i=e[uu(t)];i&&n(i)}var uf={};function gH({reducerPath:e,queryThunk:t,mutationThunk:n,serializeQueryArgs:i,context:{endpointDefinitions:o,apiUid:l,extractRehydrationInfo:u,hasRehydrationInfo:f},assertTagType:p,config:h}){const y=mr(`${e}/resetApiState`);function _(F,H,z,G){F[H.queryCacheKey]??={status:"uninitialized",endpointName:H.endpointName},cf(F,H.queryCacheKey,V=>{V.status="pending",V.requestId=z&&V.requestId?V.requestId:G.requestId,H.originalArgs!==void 0&&(V.originalArgs=H.originalArgs),V.startedTimeStamp=G.startedTimeStamp;const te=o[G.arg.endpointName];dp(te)&&"direction"in H&&(V.direction=H.direction)})}function v(F,H,z,G){cf(F,H.arg.queryCacheKey,V=>{if(V.requestId!==H.requestId&&!G)return;const{merge:te}=o[H.arg.endpointName];if(V.status="fulfilled",te)if(V.data!==void 0){const{fulfilledTimeStamp:ue,arg:P,baseQueryMeta:X,requestId:ne}=H;let ae=mu(V.data,N=>te(N,z,{arg:P.originalArgs,baseQueryMeta:X,fulfilledTimeStamp:ue,requestId:ne}));V.data=ae}else V.data=z;else V.data=o[H.arg.endpointName].structuralSharing??!0?hb(Lr(V.data)?M$(V.data):V.data,z):z;delete V.error,V.fulfilledTimeStamp=H.fulfilledTimeStamp})}const b=Kn({name:`${e}/queries`,initialState:uf,reducers:{removeQueryResult:{reducer(F,{payload:{queryCacheKey:H}}){delete F[H]},prepare:ic()},cacheEntriesUpserted:{reducer(F,H){for(const z of H.payload){const{queryDescription:G,value:V}=z;_(F,G,!0,{arg:G,requestId:H.meta.requestId,startedTimeStamp:H.meta.timestamp}),v(F,{arg:G,requestId:H.meta.requestId,fulfilledTimeStamp:H.meta.timestamp,baseQueryMeta:{}},V,!0)}},prepare:F=>({payload:F.map(G=>{const{endpointName:V,arg:te,value:ue}=G,P=o[V];return{queryDescription:{type:"query",endpointName:V,originalArgs:G.arg,queryCacheKey:i({queryArgs:te,endpointDefinition:P,endpointName:V})},value:ue}}),meta:{[Gh]:!0,requestId:y_(),timestamp:Date.now()}})},queryResultPatched:{reducer(F,{payload:{queryCacheKey:H,patches:z}}){cf(F,H,G=>{G.data=Tw(G.data,z.concat())})},prepare:ic()}},extraReducers(F){F.addCase(t.pending,(H,{meta:z,meta:{arg:G}})=>{const V=Cv(G);_(H,G,V,z)}).addCase(t.fulfilled,(H,{meta:z,payload:G})=>{const V=Cv(z.arg);v(H,z,G,V)}).addCase(t.rejected,(H,{meta:{condition:z,arg:G,requestId:V},error:te,payload:ue})=>{cf(H,G.queryCacheKey,P=>{if(!z){if(P.requestId!==V)return;P.status="rejected",P.error=ue??te}})}).addMatcher(f,(H,z)=>{const{queries:G}=u(z);for(const[V,te]of Object.entries(G))(te?.status==="fulfilled"||te?.status==="rejected")&&(H[V]=te)})}}),x=Kn({name:`${e}/mutations`,initialState:uf,reducers:{removeMutationResult:{reducer(F,{payload:H}){const z=uu(H);z in F&&delete F[z]},prepare:ic()}},extraReducers(F){F.addCase(n.pending,(H,{meta:z,meta:{requestId:G,arg:V,startedTimeStamp:te}})=>{V.track&&(H[uu(z)]={requestId:G,status:"pending",endpointName:V.endpointName,startedTimeStamp:te})}).addCase(n.fulfilled,(H,{payload:z,meta:G})=>{G.arg.track&&XE(H,G,V=>{V.requestId===G.requestId&&(V.status="fulfilled",V.data=z,V.fulfilledTimeStamp=G.fulfilledTimeStamp)})}).addCase(n.rejected,(H,{payload:z,error:G,meta:V})=>{V.arg.track&&XE(H,V,te=>{te.requestId===V.requestId&&(te.status="rejected",te.error=z??G)})}).addMatcher(f,(H,z)=>{const{mutations:G}=u(z);for(const[V,te]of Object.entries(G))(te?.status==="fulfilled"||te?.status==="rejected")&&V!==te?.requestId&&(H[V]=te)})}}),I={tags:{},keys:{}},T=Kn({name:`${e}/invalidation`,initialState:I,reducers:{updateProvidedBy:{reducer(F,H){for(const{queryCacheKey:z,providedTags:G}of H.payload){k(F,z);for(const{type:V,id:te}of G){const ue=(F.tags[V]??={})[te||"__internal_without_id"]??=[];ue.includes(z)||ue.push(z)}F.keys[z]=G}},prepare:ic()}},extraReducers(F){F.addCase(b.actions.removeQueryResult,(H,{payload:{queryCacheKey:z}})=>{k(H,z)}).addMatcher(f,(H,z)=>{const{provided:G}=u(z);for(const[V,te]of Object.entries(G.tags??{}))for(const[ue,P]of Object.entries(te)){const X=(H.tags[V]??={})[ue||"__internal_without_id"]??=[];for(const ne of P)X.includes(ne)||X.push(ne),H.keys[ne]=G.keys[ne]}}).addMatcher(_i(Ss(t),Yh(t)),(H,z)=>{M(H,[z])}).addMatcher(b.actions.cacheEntriesUpserted.match,(H,z)=>{const G=z.payload.map(({queryDescription:V,value:te})=>({type:"UNKNOWN",payload:te,meta:{requestStatus:"fulfilled",requestId:"UNKNOWN",arg:V}}));M(H,G)})}});function k(F,H){const z=F.keys[H]??[];for(const G of z){const V=G.type,te=G.id??"__internal_without_id",ue=F.tags[V]?.[te];ue&&(F.tags[V][te]=ue.filter(P=>P!==H))}delete F.keys[H]}function M(F,H){const z=H.map(G=>{const V=gD(G,"providesTags",o,p),{queryCacheKey:te}=G.meta.arg;return{queryCacheKey:te,providedTags:V}});T.caseReducers.updateProvidedBy(F,T.actions.updateProvidedBy(z))}const R=Kn({name:`${e}/subscriptions`,initialState:uf,reducers:{updateSubscriptionOptions(F,H){},unsubscribeQueryResult(F,H){},internal_getRTKQSubscriptions(){}}}),D=Kn({name:`${e}/internalSubscriptions`,initialState:uf,reducers:{subscriptionsUpdated:{reducer(F,H){return Tw(F,H.payload)},prepare:ic()}}}),O=Kn({name:`${e}/config`,initialState:{online:rH(),focused:nH(),middlewareRegistered:!1,...h},reducers:{middlewareRegistered(F,{payload:H}){F.middlewareRegistered=F.middlewareRegistered==="conflict"||l!==H?"conflict":!0}},extraReducers:F=>{F.addCase(mb,H=>{H.online=!0}).addCase(hD,H=>{H.online=!1}).addCase(pb,H=>{H.focused=!0}).addCase(fD,H=>{H.focused=!1}).addMatcher(f,H=>({...H}))}}),A=GR({queries:b.reducer,mutations:x.reducer,provided:T.reducer,subscriptions:D.reducer,config:O.reducer}),j=(F,H)=>A(y.match(H)?void 0:F,H),U={...O.actions,...b.actions,...R.actions,...D.actions,...x.actions,...T.actions,resetApiState:y};return{reducer:j,actions:U}}var cr=Symbol.for("RTKQ/skipToken"),yD={status:"uninitialized"},ZE=mu(yD,()=>{}),JE=mu(yD,()=>{});function yH({serializeQueryArgs:e,reducerPath:t,createSelector:n}){const i=R=>ZE,o=R=>JE;return{buildQuerySelector:v,buildInfiniteQuerySelector:b,buildMutationSelector:x,selectInvalidatedBy:I,selectCachedArgsForQuery:T,selectApiState:u,selectQueries:f,selectMutations:h,selectQueryEntry:p,selectConfig:y};function l(R){return{...R,...qE(R.status)}}function u(R){return R[t]}function f(R){return u(R)?.queries}function p(R,D){return f(R)?.[D]}function h(R){return u(R)?.mutations}function y(R){return u(R)?.config}function _(R,D,O){return A=>{if(A===cr)return n(i,O);const j=e({queryArgs:A,endpointDefinition:D,endpointName:R});return n(F=>p(F,j)??ZE,O)}}function v(R,D){return _(R,D,l)}function b(R,D){const{infiniteQueryOptions:O}=D;function A(j){const U={...j,...qE(j.status)},{isLoading:F,isError:H,direction:z}=U,G=z==="forward",V=z==="backward";return{...U,hasNextPage:k(O,U.data,U.originalArgs),hasPreviousPage:M(O,U.data,U.originalArgs),isFetchingNextPage:F&&G,isFetchingPreviousPage:F&&V,isFetchNextPageError:H&&G,isFetchPreviousPageError:H&&V}}return _(R,D,A)}function x(){return R=>{let D;return typeof R=="object"?D=uu(R)??cr:D=R,n(D===cr?o:j=>u(j)?.mutations?.[D]??JE,l)}}function I(R,D){const O=R[t],A=new Set;for(const j of D.filter(Sh).map(Ev)){const U=O.provided.tags[j.type];if(!U)continue;let F=(j.id!==void 0?U[j.id]:GE(Object.values(U)))??[];for(const H of F)A.add(H)}return GE(Array.from(A.values()).map(j=>{const U=O.queries[j];return U?[{queryCacheKey:j,endpointName:U.endpointName,originalArgs:U.originalArgs}]:[]}))}function T(R,D){return Object.values(f(R)).filter(O=>O?.endpointName===D&&O.status!=="uninitialized").map(O=>O.originalArgs)}function k(R,D,O){return D?Tv(R,D,O)!=null:!1}function M(R,D,O){return!D||!R.getPreviousPageParam?!1:mD(R,D,O)!=null}}var eC=WeakMap?new WeakMap:void 0,tC=({endpointName:e,queryArgs:t})=>{let n="";const i=eC?.get(t);if(typeof i=="string")n=i;else{const o=JSON.stringify(t,(l,u)=>(u=typeof u=="bigint"?{$bigint:u.toString()}:u,u=bs(u)?Object.keys(u).sort().reduce((f,p)=>(f[p]=u[p],f),{}):u,u));bs(t)&&eC?.set(t,o),n=o}return`${e}(${n})`};function vD(...e){return function(n){const i=Xf(h=>n.extractRehydrationInfo?.(h,{reducerPath:n.reducerPath??"api"})),o={reducerPath:"api",keepUnusedDataFor:60,refetchOnMountOrArgChange:!1,refetchOnFocus:!1,refetchOnReconnect:!1,invalidationBehavior:"delayed",...n,extractRehydrationInfo:i,serializeQueryArgs(h){let y=tC;if("serializeQueryArgs"in h.endpointDefinition){const _=h.endpointDefinition.serializeQueryArgs;y=v=>{const b=_(v);return typeof b=="string"?b:tC({...v,queryArgs:b})}}else n.serializeQueryArgs&&(y=n.serializeQueryArgs);return y(h)},tagTypes:[...n.tagTypes||[]]},l={endpointDefinitions:{},batch(h){h()},apiUid:y_(),extractRehydrationInfo:i,hasRehydrationInfo:Xf(h=>i(h)!=null)},u={injectEndpoints:p,enhanceEndpoints({addTagTypes:h,endpoints:y}){if(h)for(const _ of h)o.tagTypes.includes(_)||o.tagTypes.push(_);if(y)for(const[_,v]of Object.entries(y))typeof v=="function"?v(l.endpointDefinitions[_]):Object.assign(l.endpointDefinitions[_]||{},v);return u}},f=e.map(h=>h.init(u,o,l));function p(h){const y=h.endpoints({query:_=>({..._,type:"query"}),mutation:_=>({..._,type:"mutation"}),infiniteQuery:_=>({..._,type:"infinitequery"})});for(const[_,v]of Object.entries(y)){if(h.overrideExisting!==!0&&_ in l.endpointDefinitions){if(h.overrideExisting==="throw")throw new Error(gr(39));continue}l.endpointDefinitions[_]=v;for(const b of f)b.injectEndpoint(_,v)}return u}return u.injectEndpoints({endpoints:n.endpoints})}}function oi(e,...t){return Object.assign(e,...t)}var vH=({api:e,queryThunk:t,internalState:n,mwApi:i})=>{const o=`${e.reducerPath}/subscriptions`;let l=null,u=null;const{updateSubscriptionOptions:f,unsubscribeQueryResult:p}=e.internalActions,h=(I,T)=>{if(f.match(T)){const{queryCacheKey:M,requestId:R,options:D}=T.payload,O=I.get(M);return O?.has(R)&&O.set(R,D),!0}if(p.match(T)){const{queryCacheKey:M,requestId:R}=T.payload,D=I.get(M);return D&&D.delete(R),!0}if(e.internalActions.removeQueryResult.match(T))return I.delete(T.payload.queryCacheKey),!0;if(t.pending.match(T)){const{meta:{arg:M,requestId:R}}=T,D=xv(I,M.queryCacheKey,wv);return M.subscribe&&D.set(R,M.subscriptionOptions??D.get(R)??{}),!0}let k=!1;if(t.rejected.match(T)){const{meta:{condition:M,arg:R,requestId:D}}=T;if(M&&R.subscribe){const O=xv(I,R.queryCacheKey,wv);O.set(D,R.subscriptionOptions??O.get(D)??{}),k=!0}}return k},y=()=>n.currentSubscriptions,b={getSubscriptions:y,getSubscriptionCount:I=>y().get(I)?.size??0,isRequestSubscribed:(I,T)=>!!y()?.get(I)?.get(T)};function x(I){return JSON.parse(JSON.stringify(Object.fromEntries([...I].map(([T,k])=>[T,Object.fromEntries(k)]))))}return(I,T)=>{if(l||(l=x(n.currentSubscriptions)),e.util.resetApiState.match(I))return l={},n.currentSubscriptions.clear(),u=null,[!0,!1];if(e.internalActions.internal_getRTKQSubscriptions.match(I))return[!1,b];const k=h(n.currentSubscriptions,I);let M=!0;if(k){u||(u=setTimeout(()=>{const O=x(n.currentSubscriptions),[,A]=JR(l,()=>O);T.next(e.internalActions.subscriptionsUpdated(A)),l=O,u=null},500));const R=typeof I.type=="string"&&!!I.type.startsWith(o),D=t.rejected.match(I)&&I.meta.condition&&!!I.meta.arg.subscribe;M=!R&&!D}return[M,!1]}},_H=2147483647/1e3-1,bH=({reducerPath:e,api:t,queryThunk:n,context:i,internalState:o,selectors:{selectQueryEntry:l,selectConfig:u},getRunningQueryThunk:f,mwApi:p})=>{const{removeQueryResult:h,unsubscribeQueryResult:y,cacheEntriesUpserted:_}=t.internalActions,v=o.runningQueries.get(p.dispatch),b=_i(y.match,n.fulfilled,n.rejected,_.match);function x(R){const D=o.currentSubscriptions.get(R);if(!D)return!1;const O=D.size>0,A=v?.[R]!==void 0;return O||A}const I={},T=(R,D,O)=>{const A=D.getState(),j=u(A);if(b(R)){let U;if(_.match(R))U=R.payload.map(F=>F.queryDescription.queryCacheKey);else{const{queryCacheKey:F}=y.match(R)?R.payload:R.meta.arg;U=[F]}k(U,D,j)}if(t.util.resetApiState.match(R))for(const[U,F]of Object.entries(I))F&&clearTimeout(F),delete I[U];if(i.hasRehydrationInfo(R)){const{queries:U}=i.extractRehydrationInfo(R);k(Object.keys(U),D,j)}};function k(R,D,O){const A=D.getState();for(const j of R){const U=l(A,j);U?.endpointName&&M(j,U.endpointName,D,O)}}function M(R,D,O,A){const U=i.endpointDefinitions[D]?.keepUnusedDataFor??A.keepUnusedDataFor;if(U===1/0)return;const F=Math.max(0,Math.min(U,_H));if(!x(R)){const H=I[R];H&&clearTimeout(H),I[R]=setTimeout(()=>{if(!x(R)){const z=l(O.getState(),R);z?.endpointName&&O.dispatch(f(z.endpointName,z.originalArgs))?.abort(),O.dispatch(h({queryCacheKey:R}))}delete I[R]},F*1e3)}}return T},nC=new Error("Promise never resolved before cacheEntryRemoved."),SH=({api:e,reducerPath:t,context:n,queryThunk:i,mutationThunk:o,internalState:l,selectors:{selectQueryEntry:u,selectApiState:f}})=>{const p=nv(i),h=nv(o),y=Ss(i,o),_={};function v(k,M,R){const D=_[k];D?.valueResolved&&(D.valueResolved({data:M,meta:R}),delete D.valueResolved)}function b(k){const M=_[k];M&&(delete _[k],M.cacheEntryRemoved())}const x=(k,M,R)=>{const D=I(k);function O(A,j,U,F){const H=u(R,j),z=u(M.getState(),j);!H&&z&&T(A,F,j,M,U)}if(i.pending.match(k))O(k.meta.arg.endpointName,D,k.meta.requestId,k.meta.arg.originalArgs);else if(e.internalActions.cacheEntriesUpserted.match(k))for(const{queryDescription:A,value:j}of k.payload){const{endpointName:U,originalArgs:F,queryCacheKey:H}=A;O(U,H,k.meta.requestId,F),v(H,j,{})}else if(o.pending.match(k))M.getState()[t].mutations[D]&&T(k.meta.arg.endpointName,k.meta.arg.originalArgs,D,M,k.meta.requestId);else if(y(k))v(D,k.payload,k.meta.baseQueryMeta);else if(e.internalActions.removeQueryResult.match(k)||e.internalActions.removeMutationResult.match(k))b(D);else if(e.util.resetApiState.match(k))for(const A of Object.keys(_))b(A)};function I(k){return p(k)?k.meta.arg.queryCacheKey:h(k)?k.meta.arg.fixedCacheKey??k.meta.requestId:e.internalActions.removeQueryResult.match(k)?k.payload.queryCacheKey:e.internalActions.removeMutationResult.match(k)?uu(k.payload):""}function T(k,M,R,D,O){const A=n.endpointDefinitions[k],j=A?.onCacheEntryAdded;if(!j)return;const U={},F=new Promise(ue=>{U.cacheEntryRemoved=ue}),H=Promise.race([new Promise(ue=>{U.valueResolved=ue}),F.then(()=>{throw nC})]);H.catch(()=>{}),_[R]=U;const z=e.endpoints[k].select(xh(A)?M:R),G=D.dispatch((ue,P,X)=>X),V={...D,getCacheEntry:()=>z(D.getState()),requestId:O,extra:G,updateCachedData:xh(A)?ue=>D.dispatch(e.util.updateQueryData(k,M,ue)):void 0,cacheDataLoaded:H,cacheEntryRemoved:F},te=j(M,V);Promise.resolve(te).catch(ue=>{if(ue!==nC)throw ue})}return x},xH=({api:e,context:{apiUid:t},reducerPath:n})=>(i,o)=>{e.util.resetApiState.match(i)&&o.dispatch(e.internalActions.middlewareRegistered(t))},wH=({reducerPath:e,context:t,context:{endpointDefinitions:n},mutationThunk:i,queryThunk:o,api:l,assertTagType:u,refetchQuery:f,internalState:p})=>{const{removeQueryResult:h}=l.internalActions,y=_i(Ss(i),Yh(i)),_=_i(Ss(i,o),Pa(i,o));let v=[];const b=(T,k)=>{y(T)?I(gD(T,"invalidatesTags",n,u),k):_(T)?I([],k):l.util.invalidateTags.match(T)&&I(gb(T.payload,void 0,void 0,void 0,void 0,u),k)};function x(T){const{queries:k,mutations:M}=T;for(const R of[k,M])for(const D in R)if(R[D]?.status==="pending")return!0;return!1}function I(T,k){const M=k.getState(),R=M[e];if(v.push(...T),R.config.invalidationBehavior==="delayed"&&x(R))return;const D=v;if(v=[],D.length===0)return;const O=l.util.selectInvalidatedBy(M,D);t.batch(()=>{const A=Array.from(O.values());for(const{queryCacheKey:j}of A){const U=R.queries[j],F=xv(p.currentSubscriptions,j,wv);U&&(F.size===0?k.dispatch(h({queryCacheKey:j})):U.status!=="uninitialized"&&k.dispatch(f(U)))}})}return b},EH=({reducerPath:e,queryThunk:t,api:n,refetchQuery:i,internalState:o})=>{const{currentPolls:l,currentSubscriptions:u}=o,f=new Set;let p=null;const h=(T,k)=>{(n.internalActions.updateSubscriptionOptions.match(T)||n.internalActions.unsubscribeQueryResult.match(T))&&y(T.payload.queryCacheKey,k),(t.pending.match(T)||t.rejected.match(T)&&T.meta.condition)&&y(T.meta.arg.queryCacheKey,k),(t.fulfilled.match(T)||t.rejected.match(T)&&!T.meta.condition)&&_(T.meta.arg,k),n.util.resetApiState.match(T)&&(x(),p&&(clearTimeout(p),p=null),f.clear())};function y(T,k){f.add(T),p||(p=setTimeout(()=>{for(const M of f)v({queryCacheKey:M},k);f.clear(),p=null},0))}function _({queryCacheKey:T},k){const M=k.getState()[e],R=M.queries[T],D=u.get(T);if(!R||R.status==="uninitialized")return;const{lowestPollingInterval:O,skipPollingIfUnfocused:A}=I(D);if(!Number.isFinite(O))return;const j=l.get(T);j?.timeout&&(clearTimeout(j.timeout),j.timeout=void 0);const U=Date.now()+O;l.set(T,{nextPollTimestamp:U,pollingInterval:O,timeout:setTimeout(()=>{(M.config.focused||!A)&&k.dispatch(i(R)),_({queryCacheKey:T},k)},O)})}function v({queryCacheKey:T},k){const R=k.getState()[e].queries[T],D=u.get(T);if(!R||R.status==="uninitialized")return;const{lowestPollingInterval:O}=I(D);if(!Number.isFinite(O)){b(T);return}const A=l.get(T),j=Date.now()+O;(!A||j<A.nextPollTimestamp)&&_({queryCacheKey:T},k)}function b(T){const k=l.get(T);k?.timeout&&clearTimeout(k.timeout),l.delete(T)}function x(){for(const T of l.keys())b(T)}function I(T=new Map){let k=!1,M=Number.POSITIVE_INFINITY;for(const R of T.values())R.pollingInterval&&(M=Math.min(R.pollingInterval,M),k=R.skipPollingIfUnfocused||k);return{lowestPollingInterval:M,skipPollingIfUnfocused:k}}return h},CH=({api:e,context:t,queryThunk:n,mutationThunk:i})=>{const o=g_(n,i),l=Pa(n,i),u=Ss(n,i),f={};return(h,y)=>{if(o(h)){const{requestId:_,arg:{endpointName:v,originalArgs:b}}=h.meta,x=t.endpointDefinitions[v],I=x?.onQueryStarted;if(I){const T={},k=new Promise((O,A)=>{T.resolve=O,T.reject=A});k.catch(()=>{}),f[_]=T;const M=e.endpoints[v].select(xh(x)?b:_),R=y.dispatch((O,A,j)=>j),D={...y,getCacheEntry:()=>M(y.getState()),requestId:_,extra:R,updateCachedData:xh(x)?O=>y.dispatch(e.util.updateQueryData(v,b,O)):void 0,queryFulfilled:k};I(b,D)}}else if(u(h)){const{requestId:_,baseQueryMeta:v}=h.meta;f[_]?.resolve({data:h.payload,meta:v}),delete f[_]}else if(l(h)){const{requestId:_,rejectedWithValue:v,baseQueryMeta:b}=h.meta;f[_]?.reject({error:h.payload??h.error,isUnhandledError:!v,meta:b}),delete f[_]}}},TH=({reducerPath:e,context:t,api:n,refetchQuery:i,internalState:o})=>{const{removeQueryResult:l}=n.internalActions,u=(p,h)=>{pb.match(p)&&f(h,"refetchOnFocus"),mb.match(p)&&f(h,"refetchOnReconnect")};function f(p,h){const y=p.getState()[e],_=y.queries,v=o.currentSubscriptions;t.batch(()=>{for(const b of v.keys()){const x=_[b],I=v.get(b);if(!I||!x)continue;const T=[...I.values()];(T.some(M=>M[h]===!0)||T.every(M=>M[h]===void 0)&&y.config[h])&&(I.size===0?p.dispatch(l({queryCacheKey:b})):x.status!=="uninitialized"&&p.dispatch(i(x)))}})}return u};function RH(e){const{reducerPath:t,queryThunk:n,api:i,context:o,internalState:l}=e,{apiUid:u}=o,f={invalidateTags:mr(`${t}/invalidateTags`)},p=v=>v.type.startsWith(`${t}/`),h=[xH,bH,wH,EH,SH,CH];return{middleware:v=>{let b=!1;const x={...e,internalState:l,refetchQuery:_,isThisApiSliceAction:p,mwApi:v},I=h.map(M=>M(x)),T=vH(x),k=TH(x);return M=>R=>{if(!WR(R))return M(R);b||(b=!0,v.dispatch(i.internalActions.middlewareRegistered(u)));const D={...v,next:M},O=v.getState(),[A,j]=T(R,D,O);let U;if(A?U=M(R):U=j,v.getState()[t]&&(k(R,D,O),p(R)||o.hasRehydrationInfo(R)))for(const F of I)F(R,D,O);return U}},actions:f};function _(v){return e.api.endpoints[v.endpointName].initiate(v.originalArgs,{subscribe:!1,forceRefetch:!0})}}var rC=Symbol(),_D=({createSelector:e=Ei}={})=>({name:rC,init(t,{baseQuery:n,tagTypes:i,reducerPath:o,serializeQueryArgs:l,keepUnusedDataFor:u,refetchOnMountOrArgChange:f,refetchOnFocus:p,refetchOnReconnect:h,invalidationBehavior:y,onSchemaFailure:_,catchSchemaFailure:v,skipSchemaValidation:b},x){q$();const I=pe=>pe;Object.assign(t,{reducerPath:o,endpoints:{},internalActions:{onOnline:mb,onOffline:hD,onFocus:pb,onFocusLost:fD},util:{}});const T=yH({serializeQueryArgs:l,reducerPath:o,createSelector:e}),{selectInvalidatedBy:k,selectCachedArgsForQuery:M,buildQuerySelector:R,buildInfiniteQuerySelector:D,buildMutationSelector:O}=T;oi(t.util,{selectInvalidatedBy:k,selectCachedArgsForQuery:M});const{queryThunk:A,infiniteQueryThunk:j,mutationThunk:U,patchQueryData:F,updateQueryData:H,upsertQueryData:z,prefetch:G,buildMatchThunkActions:V}=mH({baseQuery:n,reducerPath:o,context:x,api:t,serializeQueryArgs:l,assertTagType:I,selectors:T,onSchemaFailure:_,catchSchemaFailure:v,skipSchemaValidation:b}),{reducer:te,actions:ue}=gH({context:x,queryThunk:A,mutationThunk:U,serializeQueryArgs:l,reducerPath:o,assertTagType:I,config:{refetchOnFocus:p,refetchOnReconnect:h,refetchOnMountOrArgChange:f,keepUnusedDataFor:u,reducerPath:o,invalidationBehavior:y}});oi(t.util,{patchQueryData:F,updateQueryData:H,upsertQueryData:z,prefetch:G,resetApiState:ue.resetApiState,upsertQueryEntries:ue.cacheEntriesUpserted}),oi(t.internalActions,ue);const P={currentSubscriptions:new Map,currentPolls:new Map,runningQueries:new Map,runningMutations:new Map},{buildInitiateQuery:X,buildInitiateInfiniteQuery:ne,buildInitiateMutation:ae,getRunningMutationThunk:N,getRunningMutationsThunk:K,getRunningQueriesThunk:le,getRunningQueryThunk:ie}=pH({queryThunk:A,mutationThunk:U,infiniteQueryThunk:j,api:t,serializeQueryArgs:l,context:x,internalState:P});oi(t.util,{getRunningMutationThunk:N,getRunningMutationsThunk:K,getRunningQueryThunk:ie,getRunningQueriesThunk:le});const{middleware:de,actions:me}=RH({reducerPath:o,context:x,queryThunk:A,mutationThunk:U,infiniteQueryThunk:j,api:t,assertTagType:I,selectors:T,getRunningQueryThunk:ie,internalState:P});return oi(t.util,me),oi(t,{reducer:te,middleware:de}),{name:rC,injectEndpoint(pe,Ae){const be=t,De=be.endpoints[pe]??={};up(Ae)&&oi(De,{name:pe,select:R(pe,Ae),initiate:X(pe,Ae)},V(A,pe)),dH(Ae)&&oi(De,{name:pe,select:O(),initiate:ae(pe)},V(U,pe)),dp(Ae)&&oi(De,{name:pe,select:D(pe,Ae),initiate:ne(pe,Ae)},V(A,pe))}}}});_D();function df(e){return e.replace(e[0],e[0].toUpperCase())}function AH(e){return e.type==="query"}function IH(e){return e.type==="mutation"}function bD(e){return e.type==="infinitequery"}function pc(e,...t){return Object.assign(e,...t)}var cy=Symbol();function uy(e){const t=C.useRef(e),n=C.useMemo(()=>hb(t.current,e),[e]);return C.useEffect(()=>{t.current!==n&&(t.current=n)},[n]),n}function ff(e){const t=C.useRef(e);return C.useEffect(()=>{wc(t.current,e)||(t.current=e)},[e]),wc(t.current,e)?t.current:e}var DH=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",kH=DH(),NH=()=>typeof navigator<"u"&&navigator.product==="ReactNative",OH=NH(),MH=()=>kH||OH?C.useLayoutEffect:C.useEffect,LH=MH(),iC=e=>e.isUninitialized?{...e,isUninitialized:!1,isFetching:!0,isLoading:e.data===void 0,status:dD.pending}:e;function dy(e,...t){const n={};return t.forEach(i=>{n[i]=e[i]}),n}var fy=["data","status","isLoading","isSuccess","isError","error"];function jH({api:e,moduleOptions:{batch:t,hooks:{useDispatch:n,useSelector:i,useStore:o},unstable__sideEffectsInRender:l,createSelector:u},serializeQueryArgs:f,context:p}){const h=l?D=>D():C.useEffect;return{buildQueryHooks:k,buildInfiniteQueryHooks:M,buildMutationHook:R,usePrefetch:v};function y(D,O,A){if(O?.endpointName&&D.isUninitialized){const{endpointName:G}=O,V=p.endpointDefinitions[G];A!==cr&&f({queryArgs:O.originalArgs,endpointDefinition:V,endpointName:G})===f({queryArgs:A,endpointDefinition:V,endpointName:G})&&(O=void 0)}let j=D.isSuccess?D.data:O?.data;j===void 0&&(j=D.data);const U=j!==void 0,F=D.isLoading,H=(!O||O.isLoading||O.isUninitialized)&&!U&&F,z=D.isSuccess||U&&(F&&!O?.isError||D.isUninitialized);return{...D,data:j,currentData:D.data,isFetching:F,isLoading:H,isSuccess:z}}function _(D,O,A){if(O?.endpointName&&D.isUninitialized){const{endpointName:G}=O,V=p.endpointDefinitions[G];A!==cr&&f({queryArgs:O.originalArgs,endpointDefinition:V,endpointName:G})===f({queryArgs:A,endpointDefinition:V,endpointName:G})&&(O=void 0)}let j=D.isSuccess?D.data:O?.data;j===void 0&&(j=D.data);const U=j!==void 0,F=D.isLoading,H=(!O||O.isLoading||O.isUninitialized)&&!U&&F,z=D.isSuccess||F&&U;return{...D,data:j,currentData:D.data,isFetching:F,isLoading:H,isSuccess:z}}function v(D,O){const A=n(),j=ff(O);return C.useCallback((U,F)=>A(e.util.prefetch(D,U,{...j,...F})),[D,A,j])}function b(D,O,{refetchOnReconnect:A,refetchOnFocus:j,refetchOnMountOrArgChange:U,skip:F=!1,pollingInterval:H=0,skipPollingIfUnfocused:z=!1,...G}={}){const{initiate:V}=e.endpoints[D],te=n(),ue=C.useRef(void 0);if(!ue.current){const me=te(e.internalActions.internal_getRTKQSubscriptions());ue.current=me}const P=uy(F?cr:O),X=ff({refetchOnReconnect:A,refetchOnFocus:j,pollingInterval:H,skipPollingIfUnfocused:z}),ne=G.initialPageParam,ae=ff(ne),N=C.useRef(void 0);let{queryCacheKey:K,requestId:le}=N.current||{},ie=!1;K&&le&&(ie=ue.current.isRequestSubscribed(K,le));const de=!ie&&N.current!==void 0;return h(()=>{de&&(N.current=void 0)},[de]),h(()=>{const me=N.current;if(P===cr){me?.unsubscribe(),N.current=void 0;return}const pe=N.current?.subscriptionOptions;if(!me||me.arg!==P){me?.unsubscribe();const Ae=te(V(P,{subscriptionOptions:X,forceRefetch:U,...bD(p.endpointDefinitions[D])?{initialPageParam:ae}:{}}));N.current=Ae}else X!==pe&&me.updateSubscriptionOptions(X)},[te,V,U,P,X,de,ae,D]),[N,te,V,X]}function x(D,O){return(j,{skip:U=!1,selectFromResult:F}={})=>{const{select:H}=e.endpoints[D],z=uy(U?cr:j),G=C.useRef(void 0),V=C.useMemo(()=>u([H(z),(ne,ae)=>ae,ne=>z],O,{memoizeOptions:{resultEqualityCheck:wc}}),[H,z]),te=C.useMemo(()=>F?u([V],F,{devModeChecks:{identityFunctionCheck:"never"}}):V,[V,F]),ue=i(ne=>te(ne,G.current),wc),P=o(),X=V(P.getState(),G.current);return LH(()=>{G.current=X},[X]),ue}}function I(D){C.useEffect(()=>()=>{D.current?.unsubscribe?.(),D.current=void 0},[D])}function T(D){if(!D.current)throw new Error(gr(38));return D.current.refetch()}function k(D){const O=(U,F={})=>{const[H]=b(D,U,F);return I(H),C.useMemo(()=>({refetch:()=>T(H)}),[H])},A=({refetchOnReconnect:U,refetchOnFocus:F,pollingInterval:H=0,skipPollingIfUnfocused:z=!1}={})=>{const{initiate:G}=e.endpoints[D],V=n(),[te,ue]=C.useState(cy),P=C.useRef(void 0),X=ff({refetchOnReconnect:U,refetchOnFocus:F,pollingInterval:H,skipPollingIfUnfocused:z});h(()=>{const K=P.current?.subscriptionOptions;X!==K&&P.current?.updateSubscriptionOptions(X)},[X]);const ne=C.useRef(X);h(()=>{ne.current=X},[X]);const ae=C.useCallback(function(K,le=!1){let ie;return t(()=>{P.current?.unsubscribe(),P.current=ie=V(G(K,{subscriptionOptions:ne.current,forceRefetch:!le})),ue(K)}),ie},[V,G]),N=C.useCallback(()=>{P.current?.queryCacheKey&&V(e.internalActions.removeQueryResult({queryCacheKey:P.current?.queryCacheKey}))},[V]);return C.useEffect(()=>()=>{P?.current?.unsubscribe()},[]),C.useEffect(()=>{te!==cy&&!P.current&&ae(te,!0)},[te,ae]),C.useMemo(()=>[ae,te,{reset:N}],[ae,te,N])},j=x(D,y);return{useQueryState:j,useQuerySubscription:O,useLazyQuerySubscription:A,useLazyQuery(U){const[F,H,{reset:z}]=A(U),G=j(H,{...U,skip:H===cy}),V=C.useMemo(()=>({lastArg:H}),[H]);return C.useMemo(()=>[F,{...G,reset:z},V],[F,G,z,V])},useQuery(U,F){const H=O(U,F),z=j(U,{selectFromResult:U===cr||F?.skip?void 0:iC,...F}),G=dy(z,...fy);return C.useDebugValue(G),C.useMemo(()=>({...z,...H}),[z,H])}}}function M(D){const O=(j,U={})=>{const[F,H,z,G]=b(D,j,U),V=C.useRef(G);h(()=>{V.current=G},[G]);const te=C.useCallback(function(X,ne){let ae;return t(()=>{F.current?.unsubscribe(),F.current=ae=H(z(X,{subscriptionOptions:V.current,direction:ne}))}),ae},[F,H,z]);I(F);const ue=uy(U.skip?cr:j),P=C.useCallback(()=>T(F),[F]);return C.useMemo(()=>({trigger:te,refetch:P,fetchNextPage:()=>te(ue,"forward"),fetchPreviousPage:()=>te(ue,"backward")}),[P,te,ue])},A=x(D,_);return{useInfiniteQueryState:A,useInfiniteQuerySubscription:O,useInfiniteQuery(j,U){const{refetch:F,fetchNextPage:H,fetchPreviousPage:z}=O(j,U),G=A(j,{selectFromResult:j===cr||U?.skip?void 0:iC,...U}),V=dy(G,...fy,"hasNextPage","hasPreviousPage");return C.useDebugValue(V),C.useMemo(()=>({...G,fetchNextPage:H,fetchPreviousPage:z,refetch:F}),[G,H,z,F])}}}function R(D){return({selectFromResult:O,fixedCacheKey:A}={})=>{const{select:j,initiate:U}=e.endpoints[D],F=n(),[H,z]=C.useState();C.useEffect(()=>()=>{H?.arg.fixedCacheKey||H?.reset()},[H]);const G=C.useCallback(function(K){const le=F(U(K,{fixedCacheKey:A}));return z(le),le},[F,U,A]),{requestId:V}=H||{},te=C.useMemo(()=>j({fixedCacheKey:A,requestId:H?.requestId}),[A,H,j]),ue=C.useMemo(()=>O?u([te],O):te,[O,te]),P=i(ue,wc),X=A==null?H?.arg.originalArgs:void 0,ne=C.useCallback(()=>{t(()=>{H&&z(void 0),A&&F(e.internalActions.removeMutationResult({requestId:V,fixedCacheKey:A}))})},[F,A,H,V]),ae=dy(P,...fy,"endpointName");C.useDebugValue(ae);const N=C.useMemo(()=>({...P,originalArgs:X,reset:ne}),[P,X,ne]);return C.useMemo(()=>[G,N],[G,N])}}}var PH=Symbol(),$H=({batch:e=RO,hooks:t={useDispatch:ZC,useSelector:JC,useStore:XC},createSelector:n=Ei,unstable__sideEffectsInRender:i=!1,...o}={})=>({name:PH,init(l,{serializeQueryArgs:u},f){const p=l,{buildQueryHooks:h,buildInfiniteQueryHooks:y,buildMutationHook:_,usePrefetch:v}=jH({api:l,moduleOptions:{batch:e,hooks:t,unstable__sideEffectsInRender:i,createSelector:n},serializeQueryArgs:u,context:f});return pc(p,{usePrefetch:v}),pc(f,{batch:e}),{injectEndpoint(b,x){if(AH(x)){const{useQuery:I,useLazyQuery:T,useLazyQuerySubscription:k,useQueryState:M,useQuerySubscription:R}=h(b);pc(p.endpoints[b],{useQuery:I,useLazyQuery:T,useLazyQuerySubscription:k,useQueryState:M,useQuerySubscription:R}),l[`use${df(b)}Query`]=I,l[`useLazy${df(b)}Query`]=T}if(IH(x)){const I=_(b);pc(p.endpoints[b],{useMutation:I}),l[`use${df(b)}Mutation`]=I}else if(bD(x)){const{useInfiniteQuery:I,useInfiniteQuerySubscription:T,useInfiniteQueryState:k}=y(b);pc(p.endpoints[b],{useInfiniteQuery:I,useInfiniteQuerySubscription:T,useInfiniteQueryState:k}),l[`use${df(b)}InfiniteQuery`]=I}}}}}),UH=vD(_D(),$H());const SD=e=>({id:String(e.id),name:e.name,imageUrl:e.picture_url,display:!0}),zH=e=>e.results.map(SD).sort((n,i)=>n.name.localeCompare(i.name)),xD=e=>{const t=e.image.original_height||48,n=e.image.original_width||48;return{id:String(e.id),name:e.name,iconUrl:e.image.url.replace("{height}",t).replace("{width}",n)}},BH=e=>e.results.map(xD).sort((n,i)=>n.name.localeCompare(i.name)),HH=e=>{const t=e.instructors[0],n=t?SD(t):{id:"0",name:"Unknown Instructor",imageUrl:"",display:!1},i=HU(e),o=new Date(e.starts_at),u=(new Date(e.ends_at).getTime()-o.getTime())/1e3;return Number.isNaN(u)&&Jv("Computed invalid duration",{extra:{rawClass:e}}),{...e,id:String(e.id),name:e.name,start:e.starts_at,end:e.ends_at,customerUrl:e.customer_url,duration:u,discipline:xD(e.offering_type.category),instructor:n,status:i}},FH=e=>e.results.map(HH),qH=["id","name","max_occupancy","occupancy","attending_count","starts_at","ends_at","waiting_count","active_registration_status","category.name","venue","customer_url","description"],VH=["instructors","active_registration_status","category","offering_type","offering_type.category","venue","suggested_booking_action"];class sC extends Error{status;body;constructor(t,n){super(`${t}: ${n}`),this.name="PelotonResponseError",this.status=t,this.body=n}}const kf=UH({reducerPath:"pelotonApi",baseQuery:uH({baseUrl:`${J_}/${ou}/`}),endpoints:e=>({getClasses:e.query({queryFn:async t=>{try{const n=sy(t),i=VU({fields:qH,expand:VH,corsProxy:!0}),o=await GU(i,async l=>{const u=await fetch(l,{headers:n});if(!u.ok)throw new sC(u.status,await u.text());return u.json()},!0);return{data:FH({results:o})}}catch(n){return n instanceof sC?{error:{status:n.status,data:n.body}}:{error:{status:"FETCH_ERROR",error:String(n)}}}}}),getDisciplines:e.query({query:t=>({url:`offering_type_categories?${new URLSearchParams({sort:"name"})}`,method:"GET",headers:sy(t)}),transformResponse:t=>BH(t)}),getInstructors:e.query({query:t=>({url:`instructors?${new URLSearchParams({sort:"name"})}`,method:"GET",headers:sy(t)}),transformResponse:t=>zH(t)})})}),{useGetClassesQuery:yb,useGetDisciplinesQuery:vb,useGetInstructorsQuery:_b}=kf,oC=429,wD="Peloton is receiving too many requests right now. Please wait a moment and try again.",ED=e=>"status"in e?e.status===oC?!0:e.status==="PARSING_ERROR"&&e.originalStatus===oC:!1,GH=e=>{if(ED(e))return wD;if("error"in e&&typeof e.error=="string")return e.error;if("message"in e&&typeof e.message=="string")return e.message},WH=E.label`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  cursor: pointer;
  user-select: none;
  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.$checked?`${e.theme.colors.accent}0a`:"transparent"};
  transition: background-color 0.15s;

  ${ku}
`,YH=E.span`
  color: ${e=>e.theme.colors.main};
  font-size: 14px;
`,QH=E.input`
  accent-color: ${e=>e.theme.colors.accent};
`,CD=({value:e,checked:t,onChange:n,label:i,icon:o})=>{const l=C.useId();return g.jsxs(WH,{$checked:t,htmlFor:l,children:[g.jsx(QH,{type:"checkbox",id:l,value:e,checked:t,onChange:n}),o,g.jsx(YH,{children:i})]})},aC=E.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`,lC=E.legend`
  font-weight: 600;
  font-size: 18px;
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,cC=E.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  margin: 0 0 12px;
`,uC=E.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
`,hf=E.button`
  padding: 6px 16px;
  border: 1px solid
    ${e=>e.$active?e.theme.colors.accent:e.theme.borderColor};
  border-radius: 20px;
  background-color: ${e=>e.$active?`${e.theme.colors.accent}0f`:"transparent"};
  color: ${e=>e.$active?e.theme.colors.accent:e.theme.colors.secondary};
  font-family: inherit;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;

  &:hover {
    border-color: ${e=>e.theme.colors.accent};
  }
`,TD=E.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 4px;
  max-height: 320px;
  overflow-y: auto;
  padding: 4px;
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};

  ${Ce`
    grid-template-columns: 1fr;
    max-height: 260px;
  `}
`,dC=E.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
  margin-left: auto;
`,wh=E.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  padding: 24px;
  text-align: center;
`,RD=E.p`
  color: ${e=>e.theme.colors.error};
  font-size: 14px;
  padding: 16px;
`,AD=E.button`
  border: none;
  background: none;
  color: ${e=>e.theme.colors.accent};
  cursor: pointer;
  font-family: inherit;
  font-size: 14px;
  text-decoration: underline;
  padding: 0;
`,KH=E.div`
  margin-top: 32px;

  ${Ce`
    margin-top: 24px;
  `}
`,XH=({studioId:e,selectedInstructors:t,setSelectedInstructors:n,selectedDisciplines:i,setSelectedDisciplines:o})=>{const l=_b(e),u=vb(e),f=C.useRef(t),p=C.useRef(i);C.useEffect(()=>{const b=f.current;if(!l.currentData||!rs(b))return;const x=new Set(l.currentData.map(T=>T.id)),I=b.filter(T=>x.has(T));I.length<b.length&&(n(I),f.current=I)},[l.currentData,n]),C.useEffect(()=>{const b=p.current;if(!u.currentData||!rs(b))return;const x=new Set(u.currentData.map(T=>String(T.id))),I=b.filter(T=>x.has(String(T))).map(String);I.length<b.length&&(o(I),p.current=I)},[u.currentData,o]);const h=C.useCallback(b=>{if(!rs(t))return;const x=t.includes(b);n(x?t.filter(I=>I!==b):[...t,b])},[t,n]),y=C.useCallback(b=>{if(!rs(i))return;const x=i.includes(b);o(x?i.filter(I=>I!==b):[...i,b])},[i,o]),_=rs(t),v=rs(i);return g.jsxs("div",{children:[g.jsxs(aC,{children:[g.jsx(lC,{children:"Instructors"}),g.jsx(cC,{children:"Filter by specific instructors or get alerts for all of them."}),g.jsxs(uC,{children:[g.jsx(hf,{type:"button",$active:!_,onClick:()=>n(null),children:"Any instructor"}),g.jsx(hf,{type:"button",$active:_,onClick:()=>{_||n([])},children:"Specific instructors"}),_&&t.length>0&&g.jsxs(dC,{children:[t.length," selected"]})]}),_&&g.jsx(ZH,{query:l,selectedIds:t,onToggle:h})]}),g.jsx(KH,{}),g.jsxs(aC,{children:[g.jsx(lC,{children:"Disciplines"}),g.jsx(cC,{children:"Filter by class type or get alerts for everything."}),g.jsxs(uC,{children:[g.jsx(hf,{type:"button",$active:!v,onClick:()=>o(null),children:"Any discipline"}),g.jsx(hf,{type:"button",$active:v,onClick:()=>{v||o([])},children:"Specific disciplines"}),v&&i.length>0&&g.jsxs(dC,{children:[i.length," selected"]})]}),v&&g.jsx(JH,{query:u,selectedIds:i,onToggle:y})]})]})},ZH=C.memo(({query:e,selectedIds:t,onToggle:n})=>e.isLoading?g.jsx(wh,{children:"Loading instructors…"}):e.error?g.jsxs(RD,{children:["Couldn't load instructors."," ",g.jsx(AD,{type:"button",onClick:e.refetch,children:"Try again"})]}):!e.currentData||e.currentData.length===0?g.jsx(wh,{children:"No instructors found for this studio."}):g.jsx(TD,{role:"group","aria-label":"Instructors",children:e.currentData.map(i=>g.jsx(CD,{value:i.id,checked:t.includes(i.id),onChange:()=>n(i.id),label:i.name,icon:g.jsx(fb,{instructor:i,size:28})},i.id))})),JH=C.memo(({query:e,selectedIds:t,onToggle:n})=>e.isLoading?g.jsx(wh,{children:"Loading disciplines…"}):e.error?g.jsxs(RD,{children:["Couldn't load disciplines."," ",g.jsx(AD,{type:"button",onClick:e.refetch,children:"Try again"})]}):!e.currentData||e.currentData.length===0?g.jsx(wh,{children:"No disciplines found for this studio."}):g.jsx(TD,{role:"group","aria-label":"Disciplines",children:e.currentData.map(i=>g.jsx(CD,{value:i.id,checked:t.includes(i.id),onChange:()=>n(i.id),label:i.name,icon:g.jsx(bh,{discipline:i,size:24})},i.id))})),e7=E.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 16px;
  margin-bottom: 24px;

  ${Ce`
    padding: 0;
    margin-bottom: 12px;
  `}
`,t7=E.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid
    ${e=>e.$state==="upcoming"?e.theme.borderColor:e.theme.colors.accent};
  background-color: ${e=>e.$state==="completed"?e.theme.colors.accent:"transparent"};
  padding: 0;
  cursor: ${e=>e.$state==="upcoming"?"default":"pointer"};
  transition:
    background-color 0.2s,
    border-color 0.2s;

  ${Ce`
    width: 12px;
    height: 12px;
  `}
`,n7=E.div`
  flex: 1;
  height: 2px;
  background-color: ${e=>e.$filled?e.theme.colors.accent:e.theme.borderColor};
  transition: background-color 0.2s;
`,r7=E.span`
  position: absolute;
  top: 18px;
  font-size: 10px;
  white-space: nowrap;
  color: ${e=>e.$state==="active"?e.theme.colors.main:e.theme.colors.secondary};
  font-weight: ${e=>e.$state==="active"?600:400};

  ${Ce`
    display: none;
  `}
`,i7=E.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`,s7=({steps:e,currentStep:t,onStepClick:n})=>g.jsx(e7,{role:"navigation","aria-label":"Editor steps",children:e.map((i,o)=>{const l=o<t?"completed":o===t?"active":"upcoming";return g.jsxs(i7,{style:{flex:o<e.length-1?1:0},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",width:"100%"},children:[g.jsx(t7,{$state:l,onClick:()=>{l!=="upcoming"&&n(o)},"aria-label":`Step ${o+1}: ${i}`,"aria-current":l==="active"?"step":void 0,type:"button"}),o<e.length-1&&g.jsx(n7,{$filled:o<t})]}),g.jsx(r7,{$state:l,children:i})]},o)})}),us=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Eh=new Array(48).fill(null).map((e,t)=>{const n=t*30,i=new Date;i.setHours(Math.floor(n/60)),i.setMinutes(n%60);const o=new Intl.DateTimeFormat(void 0,{hour:"numeric",minute:"numeric"});return{minutes:n,label:o.format(i)}}),o7=E.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`,a7=E.legend`
  font-weight: 600;
  font-size: 18px;
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,l7=E.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  margin: 0 0 20px;
`,c7=E.div`
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  overflow: hidden;
`,Ji=E.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 12px 16px;
  gap: 8px;

  &:not(:last-child) {
    border-bottom: 1px solid ${e=>e.theme.borderColor};
  }

  ${Ce`
    flex-direction: column;
    gap: 4px;
  `}
`,es=E.span`
  font-size: 13px;
  font-weight: 500;
  color: ${e=>e.theme.colors.secondary};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  flex-shrink: 0;
`,ai=E.span`
  font-size: 14px;
  color: ${e=>e.theme.colors.main};
  text-align: right;
  word-break: break-word;

  ${Ce`
    text-align: left;
  `}
`,u7=E.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  justify-content: flex-end;

  ${Ce`
    justify-content: flex-start;
  `}
`,d7=E.span`
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  background-color: ${e=>e.theme.colors.secondarySurface};
  color: ${e=>e.theme.colors.main};
`,f7=e=>{if(yv(e))return"All day";const t=Eh.find(i=>i.minutes===e.startMin),n=Eh.find(i=>i.minutes===e.endMin);return!t||!n?"All day":`${t.label} – ${n.label}`},h7=e=>{switch(e){case"free":return"Open spots only";case"waitlist":return"Open spots or waitlist";case"full":return"Any status"}},p7=({name:e,studioId:t,maxStatus:n,selectedInstructors:i,selectedDisciplines:o,timeRanges:l,waitlistAlerts:u,watchedClassIds:f})=>{const p=fn[t],h=us.filter((v,b)=>l[b]),y=l.find(Boolean),_=l.filter(Boolean).every(v=>v&&y&&v.startMin===y.startMin&&v.endMin===y.endMin);return g.jsxs(o7,{children:[g.jsx(a7,{children:"Review your alert"}),g.jsx(l7,{children:"Double-check everything looks right, then hit Save."}),g.jsxs(c7,{children:[e.trim()&&g.jsxs(Ji,{children:[g.jsx(es,{children:"Name"}),g.jsx(ai,{children:e.trim()})]}),g.jsxs(Ji,{children:[g.jsx(es,{children:"Studio"}),g.jsx(ai,{children:p?.location||t})]}),g.jsxs(Ji,{children:[g.jsx(es,{children:"Alert on"}),g.jsx(ai,{children:h7(n)})]}),g.jsxs(Ji,{children:[g.jsx(es,{children:"Instructors"}),g.jsx(ai,{children:i===null?"Any instructor":i.length===0?"None selected":`${i.length} selected`})]}),g.jsxs(Ji,{children:[g.jsx(es,{children:"Disciplines"}),g.jsx(ai,{children:o===null?"Any discipline":o.length===0?"None selected":`${o.length} selected`})]}),g.jsxs(Ji,{children:[g.jsx(es,{children:"Days"}),h.length===0?g.jsx(ai,{children:"No days selected"}):h.length===7?g.jsx(ai,{children:"Every day"}):g.jsx(u7,{children:h.map(v=>g.jsx(d7,{children:v.slice(0,3)},v))})]}),y&&g.jsxs(Ji,{children:[g.jsx(es,{children:"Time window"}),g.jsx(ai,{children:_?f7(y):"Varies by day"})]}),g.jsxs(Ji,{children:[g.jsx(es,{children:"Waitlist alerts"}),g.jsx(ai,{children:u?f===null?"On — any matching class":f.length===0?"On — no classes selected":`On — ${f.length} ${f.length===1?"class":"classes"} selected`:"Off"})]})]})]})},m7=E.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`,g7=E.legend`
  font-weight: 600;
  font-size: 18px;
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,y7=E.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  margin: 0 0 16px;
`,v7=E.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,_7=E.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  min-height: 52px;
  box-sizing: border-box;
  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.$enabled?`${e.theme.colors.accent}06`:"transparent"};
  border: 1px solid
    ${e=>e.$enabled?e.theme.colors.accent:e.theme.borderColor};
  transition: all 0.15s;

  ${Ce`
    flex-wrap: wrap;
    gap: 8px;
    min-height: 0;
  `}
`,b7=E.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
  font-weight: 500;
  min-width: 120px;
  color: ${e=>e.theme.colors.main};

  ${Ce`
    min-width: 0;
    flex: 1;
  `}
`,S7=E.input`
  accent-color: ${e=>e.theme.colors.accent};
`,x7=E.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: auto;

  ${Ce`
    margin-left: 28px;
    width: calc(100% - 28px);
  `}
`,w7=E.label`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
`,E7=E.input`
  accent-color: ${e=>e.theme.colors.accent};
`,fC=E.select`
  ${$r}
  font-family: inherit;
  font-size: 13px;
  padding: 6px 8px;
  background-color: ${e=>e.theme.colors.mainSurface};
  cursor: pointer;
  color: ${e=>e.theme.colors.main};

  ${Ce`
    flex: 1;
    min-width: 0;
  `}
`,C7=E.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,T7=E.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  flex-wrap: wrap;
`,hy=E.button`
  padding: 4px 12px;
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: 20px;
  background: none;
  font-family: inherit;
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
  cursor: pointer;

  &:hover {
    border-color: ${e=>e.theme.colors.accent};
    color: ${e=>e.theme.colors.accent};
  }
`,R7=({timeRanges:e,setTimeRanges:t})=>{const n=e.filter(Boolean).length,i=C.useRef(us.map(()=>{})),o=C.useCallback(y=>{const _=[...e];_[y]=_[y]?null:gv,t(_)},[e,t]),l=C.useCallback(y=>{const _=e[y];if(!_)return;const v=[...e];yv(_)?v[y]=i.current[y]??QU:(i.current[y]=_,v[y]=dh),t(v)},[e,t]),u=C.useCallback((y,_,v)=>{const b=[...e],x=b[y];x&&(_==="startMin"?b[y]={startMin:v,endMin:x.endMin===0||x.endMin>=v?x.endMin:0}:b[y]={...x,endMin:v},t(b))},[e,t]),f=C.useCallback(()=>{t(us.map(()=>gv))},[t]),p=C.useCallback(()=>{t(us.map(()=>null))},[t]),h=C.useCallback(()=>{const y=e.find(Boolean);y&&t(e.map(_=>_?{...y}:null))},[e,t]);return g.jsxs(m7,{children:[g.jsx(g7,{children:"Days & times"}),g.jsx(y7,{children:"Choose which days and time windows to monitor. Alerts fire when a matching class falls within these windows (in the studio's timezone)."}),g.jsxs(T7,{children:[g.jsx(hy,{type:"button",onClick:f,children:"Select all days"}),n>0&&g.jsx(hy,{type:"button",onClick:p,children:"Clear all"}),n>1&&g.jsx(hy,{type:"button",onClick:h,children:"Copy time to all"})]}),g.jsx(v7,{children:us.map((y,_)=>{const v=e[_],b=!!v&&yv(v);return g.jsxs(_7,{$enabled:!!v,children:[g.jsxs(b7,{htmlFor:`day-${_}`,children:[g.jsx(S7,{type:"checkbox",id:`day-${_}`,checked:!!v,onChange:()=>o(_)}),y]}),v&&g.jsxs(x7,{children:[g.jsxs(w7,{htmlFor:`allday-${_}`,children:[g.jsx(E7,{type:"checkbox",id:`allday-${_}`,checked:b,onChange:()=>l(_)}),"All day"]}),!b&&g.jsxs(g.Fragment,{children:[g.jsx(fC,{value:v.startMin,"aria-label":`${y} start time`,onChange:({target:x})=>{const I=parseInt(x.value);Number.isNaN(I)||u(_,"startMin",I)},children:Eh.map(x=>g.jsx("option",{value:x.minutes,children:x.label},x.minutes))}),g.jsx(C7,{children:"to"}),g.jsx(fC,{value:v.endMin,"aria-label":`${y} end time`,onChange:({target:x})=>{const I=parseInt(x.value);Number.isNaN(I)||u(_,"endMin",I)},children:Eh.map(x=>g.jsx("option",{value:x.minutes,disabled:x.minutes>0&&x.minutes<v.startMin,children:x.label},x.minutes))})]})]})]},y)})})]})},hC=E.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`,pC=E.legend`
  font-weight: 600;
  font-size: 18px;
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,mC=E.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  margin: 0 0 16px;
`,A7=E.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,I7=E.div`
  margin-top: 32px;

  ${Ce`
    margin-top: 24px;
  `}
`,D7=E.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
`,gC=E.button`
  padding: 6px 16px;
  border: 1px solid
    ${e=>e.$active?e.theme.colors.accent:e.theme.borderColor};
  border-radius: 20px;
  background-color: ${e=>e.$active?`${e.theme.colors.accent}0f`:"transparent"};
  color: ${e=>e.$active?e.theme.colors.accent:e.theme.colors.secondary};
  font-family: inherit;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;

  &:hover {
    border-color: ${e=>e.theme.colors.accent};
  }
`,k7=E.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  max-height: 360px;
  overflow-y: auto;
  padding: 4px;
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};

  ${Ce`
    max-height: 280px;
  `}
`,N7=E.label`
  ${$r}
  ${ku}
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 10px 12px;
  cursor: pointer;
  user-select: none;
  transition:
    border-color 0.15s,
    background-color 0.15s;
  border-color: ${e=>e.$checked?e.theme.colors.accent:e.theme.borderColor};
  background-color: ${e=>e.$checked?`${e.theme.colors.accent}0a`:"transparent"};
`,O7=E.input`
  accent-color: ${e=>e.theme.colors.accent};
  margin-top: 2px;
  flex-shrink: 0;
`,M7=E.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,L7=E.span`
  font-size: 13px;
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
`,j7=E.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,P7=E.span`
  font-size: 11px;
  font-weight: 500;
  padding: 1px 6px;
  border-radius: 4px;
  margin-left: auto;
  flex-shrink: 0;
  align-self: flex-start;
  background-color: ${e=>e.$status==="free"?`${e.theme.colors.accent}18`:e.$status==="waitlist"?"#f59e0b18":`${e.theme.colors.secondarySurface}`};
  color: ${e=>e.$status==="free"?e.theme.colors.accent:e.$status==="waitlist"?"#b45309":e.theme.colors.secondary};
`,py=E.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  padding: 20px;
  text-align: center;
  margin: 0;
`,$7=E.button`
  border: none;
  background: none;
  color: ${e=>e.theme.colors.accent};
  cursor: pointer;
  font-family: inherit;
  font-size: 14px;
  text-decoration: underline;
  padding: 0;
`,U7=E.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
  margin-left: auto;
`;function z7(e,t){try{const n=new Date(e),i=new Date(n.toLocaleString("en-US",{timeZone:"UTC"})),o=new Date(n.toLocaleString("en-US",{timeZone:t})),l=i.getTime()-o.getTime();return n.setTime(n.getTime()-l),{day:n.getDay(),minute:n.getHours()*60+n.getMinutes()}}catch{return null}}function B7(e,t){try{return new Date(e).toLocaleString("en-US",{timeZone:t,weekday:"short",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}catch{return e}}function H7(e,t,n,i,o){const l=fn[o]?.timezone,u=Date.now();return e.filter(f=>{if(new Date(f.start).getTime()<=u||t!==null&&!t.includes(f.instructor.id)||n!==null&&!n.includes(f.discipline.id))return!1;if(i&&l){const p=z7(f.start,l);if(!p)return!1;const h=i[p.day];if(!h||p.minute<h.startMin||p.minute>h.endMin)return!1}return!0})}const F7=C.memo(({studioId:e,instructors:t,disciplines:n,timeRanges:i,selectedIds:o,onToggle:l})=>{const u=yb(e),f=fn[e]?.timezone??"UTC";if(u.isLoading)return g.jsx(py,{children:"Loading classes…"});if(u.error)return g.jsxs(py,{children:["Couldn't load classes."," ",g.jsx($7,{type:"button",onClick:u.refetch,children:"Try again"})]});const p=H7(u.currentData??[],t,n,i,e);return p.length===0?g.jsx(py,{children:"No upcoming classes match your filters."}):g.jsx(k7,{role:"group","aria-label":"Classes",children:p.map(h=>{const y=o.includes(h.id),_=B7(h.start,f),v=[h.instructor.name,h.discipline.name].filter(Boolean).join(" · "),b=h.status==="free"?"Open":h.status==="waitlist"?"Waitlist":"Full";return g.jsxs(N7,{$checked:y,htmlFor:`cls-${h.id}`,children:[g.jsx(O7,{type:"checkbox",id:`cls-${h.id}`,checked:y,onChange:()=>l(h.id)}),g.jsxs(M7,{children:[g.jsx(L7,{children:_}),v&&g.jsx(j7,{children:v})]}),g.jsx(P7,{$status:h.status,children:b})]},h.id)})})}),q7=({studioId:e,waitlistAlerts:t,onWaitlistAlertsChange:n,watchedClassIds:i,onWatchedClassIdsChange:o,selectedInstructors:l,selectedDisciplines:u,timeRanges:f})=>{const p=_=>{const v=i??[];o(v.includes(_)?v.filter(b=>b!==_):[...v,_])},h=i!==null,y=i?.length??0;return g.jsxs("div",{children:[g.jsxs(hC,{children:[g.jsx(pC,{children:"Waitlist position alerts"}),g.jsx(mC,{children:"Get a push notification whenever the waitlist count changes for a matching class. Tap the notification to open a prompt reminding you to check your email for the 2-hour acceptance window."}),g.jsxs(A7,{children:[g.jsx(vh,{name:"waitlistAlerts",value:"off",checked:!t,onChange:()=>n(!1),label:"Disabled",hint:"No waitlist count notifications"}),g.jsx(vh,{name:"waitlistAlerts",value:"on",checked:t,onChange:()=>n(!0),label:"Enabled",hint:"Notify me when the waitlist count changes"})]})]}),t&&g.jsxs(g.Fragment,{children:[g.jsx(I7,{}),g.jsxs(hC,{children:[g.jsx(pC,{children:"Which classes?"}),g.jsx(mC,{children:"Notify for any class matching your filters, or pick specific ones you've already joined the waitlist for."}),g.jsxs(D7,{children:[g.jsx(gC,{type:"button",$active:!h,onClick:()=>o(null),children:"Any matching class"}),g.jsx(gC,{type:"button",$active:h,onClick:()=>{h||o([])},children:"Specific classes"}),h&&y>0&&g.jsxs(U7,{children:[y," selected"]})]}),h&&g.jsx(F7,{studioId:e,instructors:l,disciplines:u,timeRanges:f,selectedIds:i,onToggle:p})]})]})]})},V7=e=>{try{return window.localStorage.getItem(e)}catch(t){return Or(t),null}},G7="STUDIO_ID",ID=e=>{const t=V7(G7);return t===null?e:Object.keys(fn).includes(t)?t:e},Ao=Ei([e=>e.studioSelector],e=>e.studioId),W7={studioId:ID(bI)},Rv=Kn({name:"studioSelector",initialState:W7,reducers:{setStudioId(e,t){e.studioId=t.payload}}}),{setStudioId:Nf}=Rv.actions,Y7=e=>{const t=ir(),n=Je(Ao);C.useEffect(()=>{e.studioId?t(Nf(e.studioId)):t(Nf(ID(bI)))},[e.studioId,t]);const[i,o]=C.useState(e.name||""),[l,u]=C.useState(e.instructors||null),[f,p]=C.useState(e.disciplines||null),[h,y]=C.useState(()=>e.timeRanges||us.map(()=>gv)),[_,v]=C.useState(e.maxStatus||"free"),[b,x]=C.useState(e.waitlistAlerts??!1),[I,T]=C.useState(e.watchedClassIds??null),k=C.useCallback(M=>{M!==n&&(t(Nf(M)),u(R=>R&&[]),p(R=>R&&[]))},[t,n]);return{selectedStudioId:n,setSelectedStudioId:k,name:i,setName:o,selectedInstructors:l,setSelectedInstructors:u,selectedDisciplines:f,setSelectedDisciplines:p,timeRanges:h,setTimeRanges:y,maxStatus:_,setMaxStatus:v,waitlistAlerts:b,setWaitlistAlerts:x,watchedClassIds:I,setWatchedClassIds:T}},my=["Basics","Filters","Schedule","Waitlist","Review"],Q7=E.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
`,K7=E.div`
  padding: 24px 24px 0;

  ${Ce`
    padding: 16px 16px 0;
  `}
`,X7=E.h2`
  margin: 0 0 4px;
  font-size: 22px;
  color: ${e=>e.theme.colors.main};
`,Z7=E.p`
  margin: 0 0 20px;
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
`,J7=E.div`
  padding: 8px 24px 24px;
  flex: 1;
  overflow-y: auto;

  ${Ce`
    padding: 8px 16px 16px;
  `}
`,eF=E.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding: 16px 24px;
  border-top: 1px solid ${e=>e.theme.borderColor};
  background-color: ${e=>e.theme.colors.mainSurface};

  ${Ce`
    padding: 12px 16px;
  `}
`,mc=E.button`
  padding: 10px 24px;
  border-radius: ${e=>e.theme.borderRadius};
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
  border: 1px solid
    ${e=>e.$primary?"transparent":e.theme.borderColor};
  background-color: ${e=>e.$primary?e.theme.colors.accent:"transparent"};
  color: ${e=>e.$primary?"#fff":e.theme.colors.main};

  &:hover:not(:disabled) {
    filter: brightness(96%);
    box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 8px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${Ce`
    padding: 10px 16px;
    font-size: 13px;
  `}
`,tF=E.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,nF=E.span`
  font-size: 13px;
  color: ${e=>e.$error?e.theme.colors.error:e.theme.colors.secondary};

  ${Ce`
    font-size: 12px;
  `}
`,rF=({alertToEdit:e,onSave:t,onCancel:n})=>{const i=Je(yu),[o,l]=C.useState(0),[u,f]=C.useState(!1),[p,h]=C.useState(),{selectedStudioId:y,setSelectedStudioId:_,name:v,setName:b,selectedInstructors:x,setSelectedInstructors:I,selectedDisciplines:T,setSelectedDisciplines:k,timeRanges:M,setTimeRanges:R,maxStatus:D,setMaxStatus:O,waitlistAlerts:A,setWaitlistAlerts:j,watchedClassIds:U,setWatchedClassIds:F}=Y7(e),H=o<my.length-1,z=o>0,G=o===my.length-1,V=C.useCallback(()=>{H&&l(X=>X+1)},[H]),te=C.useCallback(()=>{z&&l(X=>X-1)},[z]),ue=C.useCallback(async()=>{if(!y||!i)return;f(!0),h(void 0);const X={id:e.id||null,created:e.created||new Date().getTime(),...v.trim()?{name:v.trim()}:{},studioId:y,instructors:x,disciplines:T,timeRanges:M,maxStatus:D,waitlistAlerts:A,...A&&U!==null?{watchedClassIds:U}:{}};try{X.id?await cD(i,X):await j9(i,X),t()}catch(ne){Or(ne),h("Something went wrong. Please try again."),f(!1)}},[e.id,e.created,v,y,i,x,T,M,D,A,U,t]),P=!!e.id;return g.jsxs(Q7,{children:[g.jsxs(K7,{children:[g.jsx(X7,{children:P?"Edit alert":"New alert"}),g.jsx(Z7,{children:P?"Update your alert settings below.":"Set up a new alert in a few quick steps."}),g.jsx(s7,{steps:my,currentStep:o,onStepClick:l})]}),g.jsxs(J7,{children:[o===0&&g.jsx(Q9,{name:v,onNameChange:b,studioId:y,onStudioChange:_,maxStatus:D,onStatusChange:O}),o===1&&g.jsx(XH,{studioId:y,selectedInstructors:x,setSelectedInstructors:I,selectedDisciplines:T,setSelectedDisciplines:k}),o===2&&g.jsx(R7,{timeRanges:M,setTimeRanges:R}),o===3&&g.jsx(q7,{studioId:y,waitlistAlerts:A,onWaitlistAlertsChange:j,watchedClassIds:U,onWatchedClassIdsChange:F,selectedInstructors:x,selectedDisciplines:T,timeRanges:M}),o===4&&g.jsx(p7,{name:v,studioId:y,maxStatus:D,selectedInstructors:x,selectedDisciplines:T,timeRanges:M,waitlistAlerts:A,watchedClassIds:U})]}),g.jsxs(eF,{children:[g.jsx("div",{children:z?g.jsx(mc,{type:"button",onClick:te,children:"Back"}):g.jsx(mc,{type:"button",onClick:n,children:"Cancel"})}),g.jsxs(tF,{children:[p&&g.jsx(nF,{$error:!0,children:p}),G?g.jsx(mc,{type:"button",$primary:!0,onClick:ue,disabled:u,children:u?"Saving…":"Save alert"}):g.jsxs(g.Fragment,{children:[P&&g.jsx(mc,{type:"button",onClick:ue,disabled:u,children:u?"Saving…":"Save"}),g.jsx(mc,{type:"button",$primary:!0,onClick:V,children:"Continue"})]})]})]})]})},iF=()=>{const e=jr(),t=Cs(),n=e.state||{};return g.jsx(rF,{alertToEdit:n,onSave:()=>{t(tt.ALERTS)},onCancel:()=>{t(tt.ALERTS)}})},sF={userId:null,data:{state:"idle"}},DD=Kn({name:"alerts",initialState:sF,reducers:{setAlertsLoading(e,t){return{userId:t.payload,data:{state:"loading"}}},setAlertsData(e,t){return{userId:t.payload.userId,data:{state:"fulfilled",data:t.payload.data}}},setAlertsFailed(e,t){return{userId:t.payload.userId,data:{state:"failed",error:t.payload.error}}}}}),{setAlertsLoading:oF,setAlertsData:yC,setAlertsFailed:vC}=DD.actions,aF=DD.reducer,lF={userId:null,data:{state:"idle"}},kD=Kn({name:"alertPreferences",initialState:lF,reducers:{setAlertPreferencesLoading(e,t){return{userId:t.payload,data:{state:"loading"}}},setAlertPreferencesData(e,t){return{userId:t.payload.userId,data:{state:"fulfilled",data:t.payload.data}}},setAlertPreferencesFailed(e,t){return{userId:t.payload.userId,data:{state:"failed",error:t.payload.error}}}}}),{setAlertPreferencesLoading:cF,setAlertPreferencesData:uF,setAlertPreferencesFailed:_C}=kD.actions,dF=kD.reducer,bb=e=>{try{return window.localStorage.getItem(e)}catch(t){return Or(t),null}},Sb=(e,t)=>{try{window.localStorage.setItem(e,t)}catch(n){Or(n)}},ND=e=>{try{window.localStorage.removeItem(e)}catch(t){Or(t)}},OD="BOOKABLE_STATUS_FILTERS",Av="DISCIPLINE_FILTERS",Iv="INSTRUCTOR_FILTERS",fF=e=>{const t=bb(OD);return t===null?e:t.split(";").filter(YU)},hF=e=>{Sb(OD,e.join(";"))},pF=e=>{const t=bb(Av);return t===null?e:t.split(";").filter(Boolean)},gy=e=>{e.length===0?ND(Av):Sb(Av,e.join(";"))},mF=e=>{const t=bb(Iv);return t===null?e:t.split(";").filter(Boolean)},bC=e=>{e.length===0?ND(Iv):Sb(Iv,e.join(";"))},gF={selectedBookableStatuses:fF(["free","waitlist"]),selectedInstructors:mF([]),selectedDisciplines:pF([])},MD=Kn({name:"filters",initialState:gF,reducers:{toggleBookableStatus(e,t){e.selectedBookableStatuses.includes(t.payload)?e.selectedBookableStatuses=e.selectedBookableStatuses.filter(n=>n!==t.payload):e.selectedBookableStatuses=[...e.selectedBookableStatuses,t.payload],hF(e.selectedBookableStatuses)},toggleInstructor(e,t){e.selectedInstructors.includes(t.payload)?e.selectedInstructors=e.selectedInstructors.filter(n=>n!==t.payload):e.selectedInstructors=[...e.selectedInstructors,t.payload],bC(e.selectedInstructors)},resetInstructors(e){e.selectedInstructors=[],bC(e.selectedInstructors)},toggleDiscipline(e,t){e.selectedDisciplines.includes(t.payload)?e.selectedDisciplines=e.selectedDisciplines.filter(n=>n!==t.payload):e.selectedDisciplines=[...e.selectedDisciplines,t.payload],gy(e.selectedDisciplines)},setDisciplines(e,t){e.selectedDisciplines=t.payload,gy(e.selectedDisciplines)},resetDisciplines(e){e.selectedDisciplines=[],gy(e.selectedDisciplines)}}}),{toggleBookableStatus:yF,toggleInstructor:vF,resetInstructors:_F,toggleDiscipline:bF,setDisciplines:SF,resetDisciplines:xF}=MD.actions,wF=MD.reducer,EF={userId:null,data:{state:"idle"}},LD=Kn({name:"registeredDevices",initialState:EF,reducers:{setRegisteredDevicesLoading(e,t){return{userId:t.payload,data:{state:"loading"}}},setRegisteredDevicesData(e,t){return{userId:t.payload.userId,data:{state:"fulfilled",data:t.payload.data}}},setRegisteredDevicesFailed(e,t){return{userId:t.payload.userId,data:{state:"failed",error:t.payload.error}}}}}),{setRegisteredDevicesLoading:CF,setRegisteredDevicesData:TF,setRegisteredDevicesFailed:SC}=LD.actions,RF=LD.reducer,AF={state:"idle"},jD=Kn({name:"session",initialState:AF,reducers:{setLoading(e){return{state:"loading"}},setSession(e,t){return{state:"fulfilled",data:t.payload}},removeSession(e){return{state:"fulfilled",data:null}}}}),{setLoading:xC,setSession:IF,removeSession:wC}=jD.actions,DF=jD.reducer,fp=c6({reducer:{alerts:aF,alertPreferences:dF,filters:wF,registeredDevices:RF,session:DF,[kf.reducerPath]:kf.reducer,[Rv.name]:Rv.reducer},middleware:e=>e().concat(kf.middleware)}),PD=C.createContext({state:"idle"}),kF=({children:e,userId:t})=>{const n=ir(),i=Je(l=>l.registeredDevices);C.useEffect(()=>{const l=an;if(!l)return n(SC({userId:t,error:{message:"No database set up"}})),()=>{};const u=fp.getState().registeredDevices;(u.userId!==t||u.data.state!=="fulfilled")&&n(CF(t));const f=Mn(l,`messagingTokens/${t}`),p=Cu(f,h=>{const y=h.val();n(TF({userId:t,data:y||{}}))},h=>{n(SC({userId:t,error:{message:h.message}}))});return()=>p()},[t,n]);const o=i.userId===t?i.data:{state:"loading"};return g.jsx(PD.Provider,{value:o,children:e})},$D=C.createContext({state:"idle"}),NF=({children:e,userId:t})=>{const n=ir(),i=Je(l=>l.alertPreferences);C.useEffect(()=>{const l=an;if(!l)return n(_C({userId:t,error:{message:"No database set up"}})),()=>{};const u=fp.getState().alertPreferences;(u.userId!==t||u.data.state!=="fulfilled")&&n(cF(t));const f=Mn(l,Ti.alertPreferences(t)),p=Cu(f,h=>{const y=h.val();n(uF({userId:t,data:y||{}}))},h=>{n(_C({userId:t,error:{message:h.message}}))});return()=>p()},[t,n]);const o=i.userId===t?i.data:{state:"loading"};return g.jsx($D.Provider,{value:o,children:e})},OF=({children:e,userId:t})=>{const n=ir(),i=Je(l=>l.alerts);C.useEffect(()=>{const l=an;if(!l)return n(vC({userId:t,error:{message:"No database set up"}})),()=>{};const u=fp.getState().alerts;(u.userId!==t||u.data.state!=="fulfilled")&&n(oF(t));const f=Mn(l,Ti.alerts(t)),p=Cu(f,h=>{const y=h.val();if(!y){n(yC({userId:t,data:[]}));return}const _=Object.entries(y).map(([v,b])=>({...b,timeRanges:new Array(us.length).fill(null).map((x,I)=>b.timeRanges[I]||null),id:v}));n(yC({userId:t,data:_}))},h=>{n(vC({userId:t,error:{message:h.message}}))});return()=>p()},[t,n]);const o=i.userId===t?i.data:{state:"loading"};return g.jsx(db.Provider,{value:o,children:e})},MF=E.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 16px;

  ${Ce`
    padding: 8px;
  `}
`,LF=E.div`
  overflow: auto;
  height: 100%;
`,jF=E.div`
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 48px 32px;
  text-align: center;
  max-width: 440px;
  margin: 40px auto 0;

  ${Ce`
    padding: 32px 20px;
    margin-top: 16px;
  `}
`,PF=E.div`
  font-size: 36px;
  margin-bottom: 16px;
  line-height: 1;
`,$F=E.h1`
  font-size: 20px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
  margin: 0 0 10px;
`,UF=E.p`
  font-size: 15px;
  color: ${e=>e.theme.colors.secondary};
  line-height: 1.55;
  margin: 0 0 24px;
`,zF=E(Ts)`
  display: inline-block;
  padding: 10px 28px;
  background-color: ${e=>e.theme.colors.accent};
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  border-radius: ${e=>e.theme.borderRadius};
  text-decoration: none;
  transition: filter 0.15s;

  &:hover {
    filter: brightness(94%);
  }
`,BF=E.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
  padding: 32px 0;
  margin: 0;
`,HF=({children:e})=>{const t=Je(Za);return t.state==="loading"?g.jsx(BF,{children:"Loading…"}):t.state!=="fulfilled"||!t.data?g.jsxs(jF,{children:[g.jsx(PF,{children:"🔔"}),g.jsx($F,{children:"Sign in to use Alerts"}),g.jsx(UF,{children:"Track class availability and get push notifications when a spot opens up for the classes you care about."}),g.jsx(zF,{to:tt.SIGN_IN,children:"Sign in"})]}):e(t.data.id)},FF=e=>g.jsx(ms,{children:g.jsx(LF,{children:g.jsx(MF,{children:g.jsx(HF,{...e})})})}),qF=({userId:e})=>g.jsx(OF,{userId:e,children:g.jsx(NF,{userId:e,children:g.jsx(kF,{userId:e,children:g.jsx(i2,{})})})}),VF=()=>g.jsx(FF,{children:e=>g.jsx(qF,{userId:e})}),EC=async(e,t)=>{const n=an;if(!n)throw new Error("No Firebase database connection to use");await vI(Mn(n,Ti.alertPreferences(e)),t)},GF=E.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`,WF=E.div`
  width: 40px;
  height: 22px;
  border-radius: 11px;
  background-color: ${e=>e.$checked?e.theme.colors.accent:e.theme.colors.secondarySurface};
  border: 1px solid
    ${e=>e.$checked?e.theme.colors.accent:e.theme.borderColor};
  transition:
    background-color 0.2s,
    border-color 0.2s;
  position: relative;
  flex-shrink: 0;
`,YF=E.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: 2px;
  left: ${e=>e.$checked?"20px":"2px"};
  transition: left 0.2s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
`,QF=E.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  position: relative;
`,UD=({id:e,checked:t,onChange:n,label:i,"aria-label":o})=>g.jsxs(QF,{htmlFor:e,children:[g.jsx(GF,{id:e,type:"checkbox",checked:t,"aria-label":o??i,onChange:l=>n(l.target.checked)}),g.jsx(WF,{$checked:t,children:g.jsx(YF,{$checked:t})}),i&&g.jsx("span",{children:i})]}),KF=E.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,XF=E.div`
  display: flex;
  align-items: center;
  gap: 12px;

  ${Ce`
    flex-direction: column;
    align-items: stretch;
  `}
`,ZF=E.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,JF=E.label`
  font-size: 13px;
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
`,eq=E.input`
  ${$r}
  padding: 8px 12px;
  font-family: inherit;
  font-size: 14px;
  color: ${e=>e.theme.colors.main};
  background-color: ${e=>e.theme.colors.mainSurface};
  width: 80px;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.accent};
  }

  ${Ce`
    width: 100%;
  `}
`,tq=E.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,nq=E.button`
  padding: 8px 20px;
  border: 1px solid
    ${e=>e.$saved?e.theme.colors.status.free.text:e.theme.colors.accent};
  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.$saved?e.theme.colors.status.free.bg:e.theme.colors.accent};
  color: ${e=>e.$saved?e.theme.colors.status.free.text:"#fff"};
  font-family: inherit;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.15s;
  flex-shrink: 0;

  &:hover:not(:disabled) {
    filter: brightness(92%);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${Ce`
    padding: 10px 20px;
  `}
`,rq=E.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
  padding: 16px;
`,iq=E.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.error};
  text-align: center;
  padding: 16px;
`,sq=E.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${e=>e.theme.borderColor};
  margin-bottom: 4px;
`,oq=E.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,aq=E.span`
  font-size: 13px;
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
`,lq=E.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,cq=({alertPreferences:e})=>{const t=Je(yu),[n,i]=C.useState(e.notificationDelayMin||5),[o,l]=C.useState(!1),[u,f]=C.useState(!1),p=!!e.pauseAll,h=C.useCallback(async _=>{if(_.preventDefault(),!!t){l(!0),f(!1);try{await EC(t,{lastUpdated:new Date().getTime(),notificationDelayMin:n}),f(!0),setTimeout(()=>f(!1),2e3)}catch{}finally{l(!1)}}},[t,n]),y=C.useCallback(async _=>{t&&await EC(t,{pauseAll:!_})},[t]);return g.jsxs(g.Fragment,{children:[g.jsxs(sq,{children:[g.jsxs(oq,{children:[g.jsx(aq,{children:"Enable all notifications"}),g.jsx(lq,{children:"Globally pause or resume notifications for all alerts"})]}),g.jsx(UD,{id:"pause-all-toggle",checked:!p,onChange:y,"aria-label":p?"Resume all notifications":"Pause all notifications"})]}),g.jsxs(KF,{onSubmit:h,children:[g.jsxs(ZF,{children:[g.jsx(JF,{htmlFor:"delay-input",children:"Cooldown (minutes)"}),g.jsx(tq,{children:"Minimum delay between consecutive alert notifications"})]}),g.jsxs(XF,{children:[g.jsx(eq,{id:"delay-input",type:"number",min:0,value:n,onChange:_=>{const v=parseInt(_.target.value,10);Number.isNaN(v)||i(v)}}),g.jsx(nq,{type:"submit",disabled:o,$saved:u,children:o?"Saving…":u?"Saved ✓":"Save"})]})]})]})},uq=()=>{const e=C.useContext($D);return e.state==="idle"||e.state==="loading"?g.jsx(rq,{children:"Loading preferences…"}):e.state==="failed"?g.jsx(iq,{children:"Failed to load preferences."}):g.jsx(cq,{alertPreferences:e.data},e.data.lastUpdated)},dq=e=>{if(!e)return"Unknown device";const t=fq(e),n=hq(e);return t&&n?`${t} on ${n}`:t||n||"Unknown device"},fq=e=>{if(e.includes("Edg/"))return"Edge";if(e.includes("OPR/")||e.includes("Opera"))return"Opera";if(e.includes("CriOS"))return"Chrome";if(e.includes("FxiOS"))return"Firefox";if(e.includes("Chrome/")&&!e.includes("Chromium"))return"Chrome";if(e.includes("Firefox/"))return"Firefox";if(e.includes("Safari/")&&!e.includes("Chrome"))return"Safari"},hq=e=>{if(/iPhone/.test(e))return"iPhone";if(/iPad/.test(e))return"iPad";if(/iPod/.test(e))return"iPod";if(/Android/.test(e))return"Android";if(/CrOS/.test(e))return"ChromeOS";if(/Mac OS X|Macintosh/.test(e))return"macOS";if(/Windows/.test(e))return"Windows";if(/Linux/.test(e))return"Linux"},pq=E.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,mq=E.li`
  ${$r}
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  transition: box-shadow 0.15s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 12px;
  }

  ${Ce`
    flex-wrap: wrap;
    padding: 10px 12px;
    gap: 8px;
  `}
`,gq=E.span`
  font-size: 20px;
  flex-shrink: 0;
`,yq=E.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
`,vq=E.span`
  font-weight: 500;
  font-size: 14px;
  color: ${e=>e.theme.colors.main};
  display: flex;
  align-items: center;
  gap: 6px;
`,_q=E.span`
  padding: 1px 6px;
  border-radius: 10px;
  font-size: 10px;
  font-weight: 600;
  background-color: ${e=>e.theme.colors.accent}14;
  color: ${e=>e.theme.colors.accent};
`,bq=E.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,Sq=E.button`
  padding: 6px 12px;
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  background: none;
  font-family: inherit;
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    border-color: ${e=>e.theme.colors.error};
    color: ${e=>e.theme.colors.error};
  }

  ${Ce`
    margin-left: auto;
  `}
`,xq=E.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
  padding: 16px;
`,wq=E.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
  padding: 16px;
`,Eq=E.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.error};
  text-align: center;
  padding: 16px;
`,Cq=e=>e?/iPhone|iPad|iPod/i.test(e)||/Android/i.test(e)?"📱":/Windows/i.test(e)||/Macintosh|Mac OS/i.test(e)?"💻":/Linux/i.test(e)?"🖥️":"💻":"💻",Tq=C.memo(({deviceToken:e,device:t,isCurrentDevice:n,onDelete:i})=>{const o=C.useMemo(()=>{const f=new Date(t.timestamp).getFullYear()===new Date().getFullYear();return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"numeric",...f?{}:{year:"numeric"}}).format(t.timestamp)},[t.timestamp]),l=dq(t.userAgent);return g.jsxs(mq,{children:[g.jsx(gq,{children:Cq(t.userAgent)}),g.jsxs(yq,{children:[g.jsxs(vq,{children:[l,n&&g.jsx(_q,{children:"This device"})]}),g.jsxs(bq,{children:["Last active ",o]})]}),g.jsx(Sq,{type:"button",onClick:()=>i(e),"aria-label":`Remove ${l}`,children:"Remove"})]})}),Rq=({devices:e})=>{const n=C.useContext(vu).token,i=Je(yu),o=C.useCallback(l=>{i&&xI(i,l).catch(console.error)},[i]);return e.length===0?g.jsx(xq,{children:"No devices registered for push notifications yet."}):g.jsx(pq,{children:e.map(([l,u])=>g.jsx(Tq,{deviceToken:l,device:u,isCurrentDevice:n!==void 0?l===n:u.userAgent!==void 0&&u.userAgent===navigator.userAgent,onDelete:o},l))})},Aq=()=>{const e=C.useContext(PD),t=C.useMemo(()=>e.state==="fulfilled"?Object.entries(e.data).sort(([,n],[,i])=>i.timestamp-n.timestamp):[],[e]);return e.state==="idle"||e.state==="loading"?g.jsx(wq,{children:"Loading devices…"}):e.state==="failed"?g.jsx(Eq,{children:"Failed to load devices. Please try again."}):g.jsx(Rq,{devices:t})},Iq=async(e,t)=>{const n=an;if(!n)throw new Error("No Firebase database connection to use");await yI(Mn(n,Ti.alert(e,t)))},CC=(e,t,n)=>!e||e.length===0?t:e.length===1?e[0]:e.length===2?`${e[0]} or ${e[1]}`:`${e.length} ${n}`,Dq=(e,t)=>{const n=CC(e,"Any Class","Disciplines"),i=CC(t,"Any Instructor","Instructors");return`${n} with ${i}`},kq=E.li`
  ${$r}
  padding: 16px;
  transition: box-shadow 0.15s;
  opacity: ${e=>e.$disabled?.55:1};

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 12px;
  }

  ${Ce`
    padding: 12px;
  `}
`,Nq=E.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;

  ${Ce`
    flex-direction: column;
    gap: 8px;
  `}
`,Oq=E.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`,Mq=E.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`,Lq=E.span`
  font-weight: 600;
  font-size: 15px;
  color: ${e=>e.theme.colors.main};
`,jq=E.span`
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 500;
  background-color: ${e=>e.$status==="free"?e.theme.colors.status.free.bg:e.$status==="waitlist"?e.theme.colors.status.waitlist.bg:`${e.theme.colors.error}20`};
  color: ${e=>e.$status==="free"?e.theme.colors.status.free.text:e.$status==="waitlist"?e.theme.colors.status.waitlist.text:e.theme.colors.error};
`,Pq=E.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
`,$q=E.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  margin-top: 2px;
`,Uq=E.span`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 500;
  background-color: ${e=>e.$active?`${e.theme.colors.accent}12`:e.theme.colors.secondarySurface};
  color: ${e=>e.$active?e.theme.colors.accent:e.theme.colors.secondary};
  border: 1px solid
    ${e=>e.$active?`${e.theme.colors.accent}40`:"transparent"};
`,zq=E.div`
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;

  ${Ce`
    align-self: flex-end;
  `}
`,Bq=E.div`
  position: relative;
  flex-shrink: 0;
`,Hq=E.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  background: none;
  cursor: pointer;
  color: ${e=>e.theme.colors.secondary};
  transition: all 0.15s;
  padding: 0;

  &:hover {
    border-color: ${e=>e.theme.colors.accent};
    color: ${e=>e.theme.colors.accent};
  }
`,Fq=E.ul`
  position: fixed;
  top: ${e=>e.$top}px;
  right: ${e=>e.$right}px;
  background: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 4px 0;
  margin: 0;
  list-style: none;
  min-width: 130px;
  z-index: 1000;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
`,Of=E.button`
  display: block;
  width: 100%;
  padding: 8px 14px;
  background: none;
  border: none;
  font-family: inherit;
  font-size: 13px;
  text-align: left;
  color: ${e=>e.theme.colors.main};
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.1s;

  &:hover {
    background: ${e=>e.theme.colors.secondarySurface};
  }
`,qq=E(Of)`
  color: ${e=>e.theme.colors.error};
`,Vq=E.li`
  height: 1px;
  background: ${e=>e.theme.borderColor};
  margin: 4px 0;
`,Gq=E.div`
  padding: 10px 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Wq=E.p`
  margin: 0;
  font-size: 13px;
  color: ${e=>e.theme.colors.main};
  white-space: nowrap;
`,Yq=E.div`
  display: flex;
  gap: 6px;
`,Qq=E.button`
  flex: 1;
  padding: 5px 10px;
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  background: none;
  font-family: inherit;
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
  cursor: pointer;
  transition: all 0.1s;

  &:hover {
    border-color: ${e=>e.theme.colors.main};
    color: ${e=>e.theme.colors.main};
  }
`,Kq=E.button`
  flex: 1;
  padding: 5px 10px;
  border: 1px solid ${e=>e.theme.colors.error};
  border-radius: ${e=>e.theme.borderRadius};
  background: ${e=>e.theme.colors.error};
  font-family: inherit;
  font-size: 12px;
  color: #fff;
  cursor: pointer;
  transition: opacity 0.1s;

  &:hover {
    opacity: 0.85;
  }
`,Xq=E.span`
  font-size: 11px;
  color: ${e=>e.theme.colors.secondary};
  margin-top: 4px;
`,Zq={free:{label:"Open spots",title:"Only alerts when a class has open spots available to book"},waitlist:{label:"Waitlist",title:"Alerts when a class has open spots or waitlist availability"},full:{label:"Any",title:"Alerts regardless of availability status"}},Jq=e=>Zq[e]||{label:e,title:""},eV=C.memo(({alert:e,onDuplicate:t,onEdit:n})=>{const i=Cs(),o=Je(yu),l=!!e.disabled,[u,f]=C.useState(!1),[p,h]=C.useState(!1),[y,_]=C.useState({top:0,right:0}),v=C.useRef(null),b=C.useRef(null),x=C.useCallback(()=>{o&&cD(o,{...e,disabled:!l})},[o,e,l]),I=C.useCallback(()=>{f(!1),h(!1)},[]);C.useLayoutEffect(()=>{if(!u||!v.current)return;const U=v.current.getBoundingClientRect();_({top:U.bottom+4,right:window.innerWidth-U.right})},[u]),C.useEffect(()=>{if(!u)return;const U=z=>{z.key==="Escape"&&I()},F=z=>{if(!(z.target instanceof Node))return I();!v.current?.contains(z.target)&&!b.current?.contains(z.target)&&I()},H=setTimeout(()=>{document.addEventListener("keydown",U),document.addEventListener("click",F,!0)},0);return()=>{clearTimeout(H),document.removeEventListener("keydown",U),document.removeEventListener("click",F,!0)}},[u,I]);const{data:T}=_b(e.studioId),{data:k}=vb(e.studioId),M=C.useMemo(()=>{const F=new Date(e.created).getFullYear()===new Date().getFullYear();return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",...F?{}:{year:"numeric"}}).format(e.created)},[e.created]),R=C.useMemo(()=>new Map(T?.map(U=>[U.id,U.name])),[T]),D=C.useMemo(()=>new Map(k?.map(U=>[U.id,U.name])),[k]),O=C.useMemo(()=>{if(e.name)return e.name;const U=rs(e.instructors)&&T?e.instructors.map(H=>R.get(H)).filter(H=>!!H):null,F=rs(e.disciplines)&&k?e.disciplines.map(H=>D.get(H)).filter(H=>!!H):null;return Dq(F,U)},[e.name,e.instructors,e.disciplines,T,k,R,D]),A=fn[e.studioId]?.location||e.studioId||"No studio",j=Jq(e.maxStatus);return g.jsx(kq,{$disabled:l,children:g.jsxs(Nq,{children:[g.jsxs(Oq,{children:[g.jsxs(Mq,{children:[g.jsx(Lq,{children:O}),g.jsx(jq,{$status:e.maxStatus,title:j.title,children:j.label})]}),g.jsx(Pq,{children:A}),g.jsx($q,{children:us.map((U,F)=>g.jsx(Uq,{$active:!!e.timeRanges[F],title:e.timeRanges[F]?`${U}: monitoring enabled`:`${U}: not monitored`,children:U.charAt(0)},U))}),g.jsxs(Xq,{children:["Created ",M]})]}),g.jsxs(zq,{children:[g.jsx(UD,{id:`toggle-${e.id}`,checked:!l,onChange:x,"aria-label":l?"Enable alert":"Disable alert"}),g.jsxs(Bq,{children:[g.jsx(Hq,{ref:v,type:"button","aria-label":"More options","aria-expanded":u,"aria-haspopup":"menu",onClick:()=>f(U=>!U),children:g.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:[g.jsx("circle",{cx:"8",cy:"3",r:"1.5"}),g.jsx("circle",{cx:"8",cy:"8",r:"1.5"}),g.jsx("circle",{cx:"8",cy:"13",r:"1.5"})]})}),u&&ET.createPortal(g.jsxs(Fq,{ref:b,role:"menu",$top:y.top,$right:y.right,children:[g.jsx("li",{children:g.jsx(Of,{type:"button",role:"menuitem",onClick:()=>{I(),i(XU(e.id))},children:"Test"})}),g.jsx("li",{children:g.jsx(Of,{type:"button",role:"menuitem",onClick:()=>{I(),n(e)},children:"Edit"})}),g.jsx("li",{children:g.jsx(Of,{type:"button",role:"menuitem",onClick:()=>{I(),t(e)},children:"Duplicate"})}),g.jsx(Vq,{}),p?g.jsx("li",{children:g.jsxs(Gq,{children:[g.jsx(Wq,{children:"Delete this alert?"}),g.jsxs(Yq,{children:[g.jsx(Qq,{type:"button",onClick:()=>h(!1),children:"Cancel"}),g.jsx(Kq,{type:"button",onClick:()=>{I(),o&&Iq(o,e.id)},children:"Delete"})]})]})}):g.jsx("li",{children:g.jsx(qq,{type:"button",role:"menuitem",onClick:()=>h(!0),children:"Delete"})})]}),document.body)]})]})]})})}),tV=E.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,nV=({alerts:e,onDuplicate:t,onEdit:n})=>g.jsx(tV,{children:e.map(i=>g.jsx(eV,{alert:i,onDuplicate:t,onEdit:n},i.id))}),rV=E.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px 0;

  ${Ce`
    padding: 16px 16px 0;
  `}
`,iV=E.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,sV=E.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
`,oV=E.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
`,aV=E.button`
  padding: 8px 20px;
  border: none;
  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.accent};
  color: #fff;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  transition: filter 0.15s;

  &:hover {
    filter: brightness(92%);
  }

  ${Ce`
    padding: 8px 14px;
    font-size: 13px;
  `}
`,lV=E.div`
  padding: 16px 24px 24px;

  ${Ce`
    padding: 12px 16px 16px;
  `}
`,cV=E.p`
  margin: 0;
  padding: 24px;
  text-align: center;
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
`,uV=E.p`
  margin: 0;
  padding: 24px;
  text-align: center;
  color: ${e=>e.theme.colors.error};
  font-size: 14px;
`,dV=({onAdd:e,onEdit:t,onDuplicate:n})=>{const i=C.useContext(db),o=i.state==="loading"||i.state==="idle",l=i.state==="failed",u=i.state==="fulfilled"?i.data:[];return g.jsxs(g.Fragment,{children:[g.jsxs(rV,{children:[g.jsxs(iV,{children:[g.jsx(sV,{children:"Alerts"}),g.jsx(oV,{children:o?"Loading your alerts…":l?"Something went wrong":u.length===0?"You haven't created any alerts yet":`${u.length} alert${u.length===1?"":"s"}`})]}),!o&&!l&&g.jsx(aV,{type:"button",onClick:e,children:"+ New alert"})]}),g.jsxs(lV,{children:[o&&g.jsx(cV,{children:"Loading…"}),l&&g.jsx(uV,{children:"Failed to load your alerts. Please refresh and try again."}),!o&&!l&&u.length===0&&g.jsx(mV,{onAdd:e}),!o&&!l&&u.length>0&&g.jsx(nV,{alerts:u,onEdit:t,onDuplicate:n})]})]})},fV=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 32px 16px;
`,hV=E.p`
  margin: 0;
  font-size: 15px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
`,pV=E.button`
  padding: 10px 24px;
  border: 1px solid ${e=>e.theme.colors.accent};
  border-radius: ${e=>e.theme.borderRadius};
  background: none;
  color: ${e=>e.theme.colors.accent};
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    background-color: ${e=>e.theme.colors.accent}0a;
  }
`,mV=({onAdd:e})=>g.jsxs(fV,{children:[g.jsx(hV,{children:"Create your first alert to get notified when classes become available."}),g.jsx(pV,{type:"button",onClick:e,children:"Create an alert"})]}),gV=E.button`
  padding: 1.5em;
  max-width: 300px;
  width: 100%;
  line-height: 0;
  border: 0;
  font-family: inherit;
  background-color: ${e=>e.theme.colors.accent};
  border-radius: ${e=>e.theme.borderRadius};
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;
  &:hover {
    filter: brightness(96%);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 8px 0px;
  }
`;E.button`
  padding: 1.5em;
  max-width: 300px;
  width: 100%;
  line-height: 0;
  font-family: inherit;
  border-color: ${e=>e.theme.colors.accent};
  border-style: solid;
  border-width: 1px;
  background-color: transparent;
  border-radius: ${e=>e.theme.borderRadius};
  text-transform: uppercase;
  color: ${e=>e.theme.colors.accent};
  cursor: pointer;
  &:hover {
    filter: brightness(96%);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 8px 0px;
  }
`;const yV=E.div`
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 16px;
`,vV=()=>["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document||/iPad|iPhone|iPod/.test(navigator.userAgent),yy=E(yV)`
  margin-bottom: 1em;
`,_V=E(gV)`
  margin-top: 1em;
`,TC=E.h2`
  color: ${e=>e.theme.colors.accent};
`,bV=()=>{const[e,t]=C.useState(window.Notification?window.Notification.permission:void 0),{refreshToken:n}=C.useContext(vu),i=vV(),o=!!navigator.standalone||window.matchMedia("(display-mode: standalone)").matches,l=C.useCallback(()=>{window.Notification&&typeof window.Notification.requestPermission=="function"&&window.Notification.requestPermission().then(u=>{t(u),u==="granted"&&n()}).catch(u=>{console.error(u),Or(u)})},[n]);return i&&!o?g.jsxs(yy,{children:[g.jsx(TC,{children:"Installation Required"}),g.jsx("p",{children:"To receive notifications on iOS, you must first add this app to your home screen. Tap the share button in Safari and select “Add to Home Screen”, then open the app from there."})]}):e===void 0||!("serviceWorker"in navigator)?g.jsxs(yy,{children:[g.jsx(TC,{children:"Unsupported Browser"}),g.jsx("p",{children:"This browser does not support sending you notifications in the background. Alerts for new classes will only display if you keep this tab open."})]}):e!=="granted"?g.jsxs(yy,{children:[g.jsx("h2",{children:"Grant notification permissions"}),g.jsx("p",{children:"In order to get notified when any of your alerts trigger, you need to grant permission to send notifications"}),g.jsx(_V,{type:"button",onClick:l,children:"Grant Permission"})]}):null},SV=E.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${Ce`
    gap: 16px;
  `}
`,vy=E.section`
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  overflow: hidden;
`,RC=E.div`
  padding: 20px 24px 0;

  ${Ce`
    padding: 16px 16px 0;
  `}
`,AC=E.h2`
  margin: 0 0 4px;
  font-size: 20px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
`,IC=E.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
`,DC=E.div`
  padding: 16px 24px 24px;

  ${Ce`
    padding: 12px 16px 16px;
  `}
`,xV=()=>{const e=Cs();return g.jsxs(SV,{children:[g.jsx(vy,{children:g.jsx(dV,{onAdd:()=>{e(tt.ALERTS_EDITOR,{state:{}})},onEdit:t=>{e(tt.ALERTS_EDITOR,{state:t})},onDuplicate:t=>{e(tt.ALERTS_EDITOR,{state:{...t,id:void 0,created:void 0}})}})}),g.jsxs(vy,{children:[g.jsxs(RC,{children:[g.jsx(AC,{children:"Preferences"}),g.jsx(IC,{children:"Control how often you receive alert notifications."})]}),g.jsx(DC,{children:g.jsx(uq,{})})]}),g.jsxs(vy,{children:[g.jsxs(RC,{children:[g.jsx(AC,{children:"Devices"}),g.jsx(IC,{children:"Devices registered to receive push notifications. Removed devices will re-register on their next visit."})]}),g.jsxs(DC,{children:[g.jsx(bV,{}),g.jsx(Aq,{})]})]})]})},wV=E.button.attrs({"aria-label":"Close",type:"button"})`
  position: relative;
  width: 50px;
  height: 50px;
  font-size: 0;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;

  &:before,
  &:after {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2px;
    height: 20px;
    background-color: ${e=>e.theme.colors.main};
    transform-origin: top left;
    content: "";
  }

  &:before {
    transform: rotate(45deg) translate(-50%, -50%);
  }

  &:after {
    transform: rotate(-45deg) translate(-50%, -50%);
  }
`,EV=()=>{const e=Je(i=>i.filters.selectedBookableStatuses),t=ir(),n=C.useCallback(i=>{t(yF(i))},[t]);return{bookableStatuses:e,toggleBookableStatus:n}},CV=E.button`
  cursor: pointer;
  color: ${e=>e.theme.colors.accent};
  font-size: 12px;
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;

  &:hover {
    text-decoration: underline;
  }
`,TV=E.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px 8px;
`,RV=E.h3`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${e=>e.theme.colors.secondary};
  margin: 0;
`,hp=({label:e,onReset:t,children:n})=>g.jsxs(TV,{children:[g.jsx(RV,{children:e}),t&&g.jsx(CV,{type:"button",onClick:t,children:"Reset"}),n]}),AV=E.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 0 16px 16px;
`,IV=E.button`
  padding: 5px 14px;
  border-radius: 20px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: box-shadow 0.1s;

  ${e=>e.$active?tn`
          border: 1.5px solid ${e.$color};
          background-color: ${e.$color}14;
          color: ${e.$color};
        `:tn`
          border: 1px solid ${e.theme.borderColor};
          background-color: transparent;
          color: ${e.theme.colors.secondary};

          &:hover {
            background-color: ${e.theme.colors.hoverSurface};
          }
        `}
`,DV=()=>{const{bookableStatuses:e,toggleBookableStatus:t}=EV(),n=Yv(),i=[{label:"Free",status:"free",color:n.colors.status.free.text},{label:"Waitlist",status:"waitlist",color:n.colors.status.waitlist.text},{label:"Full",status:"full",color:n.colors.status.full.text}];return g.jsxs("fieldset",{style:{border:"none",margin:0,padding:0},children:[g.jsx("legend",{style:{padding:0,width:"100%"},children:g.jsx(hp,{label:"Status"})}),g.jsx(AV,{children:i.map(o=>{const l=e.includes(o.status);return g.jsx(IV,{type:"button",$active:l,$color:o.color,onClick:()=>t(o.status),"aria-pressed":l,children:o.label},o.status)})})]})},kV=()=>{const e=Je(i=>i.filters.selectedDisciplines),t=ir(),n=C.useCallback(i=>{t(bF(i))},[t]);return{selectedDisciplines:e,toggleDiscipline:n}},zD=E.ul`
  list-style: none;
  margin: 0;
  padding: 0 0 8px;
`,BD=E.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.1s;

  ${e=>e.$checked?tn`
          background-color: ${e.theme.colors.accent}08;
        `:tn`
          &:hover {
            background-color: ${t=>t.theme.colors.hoverSurface};
          }
        `}
`,HD=E.span`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border: 2px solid
    ${e=>e.$checked?e.theme.colors.accent:e.theme.borderColor};
  background-color: ${e=>e.$checked?e.theme.colors.accent:"transparent"};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    border-color 0.1s,
    background-color 0.1s;

  &::after {
    content: "";
    width: 8px;
    height: 5px;
    border-left: 2px solid #fff;
    border-bottom: 2px solid #fff;
    transform: rotate(-45deg) translateY(-1px);
    opacity: ${e=>e.$checked?1:0};
    transition: opacity 0.1s;
  }
`,FD=E.span`
  font-size: 14px;
  color: ${e=>e.theme.colors.main};
`,Ch=E.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  padding: 8px 16px 16px;
  margin: 0;
`,NV=({discipline:e,checked:t,onClick:n})=>g.jsxs(BD,{$checked:t,onClick:n,role:"checkbox","aria-checked":t,children:[g.jsx(HD,{$checked:t}),g.jsx(bh,{discipline:e,size:24}),g.jsx(FD,{children:e.name})]}),OV=()=>{const e=Je(Ao),{currentData:t,isLoading:n,error:i}=vb(e),{selectedDisciplines:o,toggleDiscipline:l}=kV(),u=ir(),f=C.useRef(o);return C.useEffect(()=>{const p=f.current;if(!t||p.length===0)return;const h=new Set(t.map(_=>_.id)),y=p.filter(_=>h.has(_));y.length<p.length&&u(SF(y))},[t,u]),i&&!n?g.jsx(Ch,{children:"Failed to load disciplines"}):!t||n?g.jsx(Ch,{children:"Loading…"}):g.jsx(zD,{children:t.map((p,h)=>g.jsx(NV,{discipline:p,checked:o.includes(p.id),onClick:()=>l(p.id)},h))})},MV=()=>{const e=Je(n=>n.filters.selectedDisciplines.length>0),t=ir();return g.jsxs("div",{children:[g.jsx(hp,{label:"Disciplines",onReset:e?()=>t(xF()):void 0}),g.jsx(OV,{})]})},LV=()=>{const e=Je(i=>i.filters.selectedInstructors),t=ir(),n=C.useCallback(i=>{t(vF(i))},[t]);return{selectedInstructors:e,toggleInstructor:n}},jV=({instructor:e,checked:t,onClick:n})=>g.jsxs(BD,{$checked:t,onClick:n,role:"checkbox","aria-checked":t,children:[g.jsx(HD,{$checked:t}),g.jsx(fb,{instructor:e,size:28}),g.jsx(FD,{children:e.name})]}),PV=()=>{const e=Je(Ao),{currentData:t,isLoading:n,error:i}=_b(e),{selectedInstructors:o,toggleInstructor:l}=LV();return i&&!n?g.jsx(Ch,{children:"Failed to load instructors"}):!t||n?g.jsx(Ch,{children:"Loading…"}):g.jsx(zD,{children:t.map((u,f)=>g.jsx(jV,{instructor:u,checked:o.includes(u.id),onClick:()=>l(u.id)},f))})},$V=()=>{const e=Je(n=>n.filters.selectedInstructors.length>0),t=ir();return g.jsxs("div",{children:[g.jsx(hp,{label:"Instructors",onReset:e?()=>t(_F()):void 0}),g.jsx(PV,{})]})},UV=Object.entries(fn).map(([e,t])=>({id:e,label:t.location})),zV=E.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 0 16px 16px;
`,BV=E.label`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  ${$r}
  cursor: pointer;
  transition: box-shadow 0.1s;

  ${e=>e.$selected?tn`
          border-color: ${e.theme.colors.accent};
          background-color: ${e.theme.colors.accent}0a;
        `:tn`
          &:hover {
            background-color: ${t=>t.theme.colors.hoverSurface};
          }
        `}
`,HV=E.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`,FV=E.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid
    ${e=>e.$selected?e.theme.colors.accent:e.theme.borderColor};
  background-color: ${e=>e.$selected?e.theme.colors.accent:"transparent"};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    border-color 0.1s,
    background-color 0.1s;

  &::after {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #fff;
    opacity: ${e=>e.$selected?1:0};
    transition: opacity 0.1s;
  }
`,qV=E.span`
  font-size: 15px;
  color: ${e=>e.theme.colors.main};
`,VV=()=>{const e=ir(),t=Je(Ao);return g.jsxs("fieldset",{style:{border:"none",margin:0,padding:0},children:[g.jsx("legend",{style:{padding:0,width:"100%"},children:g.jsx(hp,{label:"Studio"})}),g.jsx(zV,{children:UV.map(n=>{const i=t===n.id;return g.jsxs(BV,{$selected:i,htmlFor:`studio-${n.id}`,children:[g.jsx(HV,{type:"radio",id:`studio-${n.id}`,name:"studio-selected",value:n.id,checked:i,onChange:()=>{i||e(Nf(n.id))}}),g.jsx(FV,{$selected:i}),g.jsx(qV,{children:n.label})]},n.id)})})]})},GV=E.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`,WV=E.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 16px 12px;
  border-bottom: 1px solid ${e=>e.theme.borderColor};
  position: sticky;
  top: 0;
  background-color: ${e=>e.theme.colors.secondarySurface};
  z-index: 1;

  ${aD`
    display: flex;
  `}
`,YV=E.h2`
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${e=>e.theme.colors.main};
  margin: 0;
`,QV=E(wV)`
  display: none;

  ${aD`
    display: block;
  `}
`,KV=E.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  overflow-y: auto;
  flex: 1;
`,pf=E.div`
  border-bottom: 1px solid ${e=>e.theme.borderColor};

  &:last-child {
    border-bottom: none;
  }
`,XV=({onClose:e})=>g.jsxs(GV,{children:[g.jsxs(WV,{children:[g.jsx(YV,{children:"Filters"}),g.jsx(QV,{onClick:()=>e()})]}),g.jsxs(KV,{children:[g.jsx(pf,{children:g.jsx(VV,{})}),g.jsx(pf,{children:g.jsx(DV,{})}),g.jsx(pf,{children:g.jsx(MV,{})}),g.jsx(pf,{children:g.jsx($V,{})})]})]}),ZV=()=>{const e=Je(Ao),{refetch:t}=yb(e);return{refresh:C.useCallback(async()=>{await t()},[t])}},kC=150,NC=60,JV=()=>document.documentElement.scrollTop||document.body.scrollTop,eG=({refresh:e})=>{const t=C.useRef(null),n=C.useRef(null),i=C.useRef(e);C.useLayoutEffect(()=>{i.current=e});const o=C.useMemo(()=>!!navigator.standalone||window.matchMedia("(display-mode: standalone)").matches||!1,[]);return C.useEffect(()=>{if(!o)return;let l=0,u=!1,f=!1,p=!1;const h=x=>{const I=n.current;I&&(I.style.transition=x?"transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease":"none",I.style.transform="",I.style.opacity="0")},y=x=>{l=x.touches[0].clientY,u=!1,f=!1},_=x=>{if(p||JV()>0)return;const I=x.touches[0].clientY-l;if(I<=0){u&&(u=!1,f=!1,h(!1));return}u=!0,f=I>=kC;const T=Math.min(I/kC,1),k=NC*(1-Math.pow(1-T,2)),M=Math.pow(T,.5),R=Math.floor(T*270),D=n.current;D&&(D.style.transition="none",D.style.transform=`translateY(${k}px) rotate(${R}deg)`,D.style.opacity=String(Math.min(M,1)))},v=()=>{if(u)if(u=!1,f&&!p){f=!1,p=!0;const x=n.current;x&&(x.classList.add("animate"),x.style.transition="none",x.style.transform=`translateY(${NC}px)`,x.style.opacity="1");let I=!1;const T=()=>{if(I)return;I=!0,p=!1;const M=n.current;M&&(M.classList.remove("animate"),h(!0))},k=setTimeout(T,1e4);i.current().finally(()=>{clearTimeout(k),T()})}else f=!1,h(!0)},b=()=>{u=!1,f=!1,h(!1)};return document.addEventListener("touchstart",y,{passive:!0}),document.addEventListener("touchmove",_,{passive:!0}),document.addEventListener("touchend",v,{passive:!0}),document.addEventListener("touchcancel",b,{passive:!0}),()=>{document.removeEventListener("touchstart",y),document.removeEventListener("touchmove",_),document.removeEventListener("touchend",v),document.removeEventListener("touchcancel",b)}},[o]),{swipeRef:t,spinnerRef:n}},tG=e=>e.filters.selectedDisciplines.length>0||e.filters.selectedInstructors.length>0,nG=e=>e.filters.selectedBookableStatuses,rG=e=>e.filters.selectedDisciplines,iG=e=>e.filters.selectedInstructors,sG=(e,t)=>t,oG=Ei([nG,rG,iG,sG],(e,t,n,i)=>i.filter(o=>e.includes(o.status)).filter(o=>n.length>0?n.some(l=>l===o.instructor.id):!0).filter(o=>t.length>0?t.includes(o.discipline.id):!0)),qD=Ei([Ao],e=>{if(e)return fn[e]}),aG=Ei([oG,qD],(e,t)=>{if(e.length===0)return[];const n=t?.timezone||"",i=[];let o=1,l=Fa(e[0].start,n,!0),u=[e[0]];for(;o<e.length;){const f=e[o],p=Fa(f.start,n,!0);p===l?u.push(f):(i.push({formattedDate:l,classes:u}),l=p,u=[f]),o++}return u.length>0&&i.push({formattedDate:l,classes:u}),i}),OC={free:{label:"Book"},waitlist:{label:"Waitlist"},full:{label:"Full"}},lG=E.a`
  display: flex;
  align-items: center;
  gap: 14px;
  text-decoration: none;
  color: inherit;
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-left: 4px solid
    ${e=>e.$status==="free"?e.theme.colors.status.free.text:e.$status==="waitlist"?e.theme.colors.status.waitlist.text:e.theme.colors.status.full.text};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 14px 18px;
  transition: box-shadow 0.15s;
  opacity: ${e=>e.$interactive?1:.55};

  ${e=>e.$interactive&&tn`
      cursor: pointer;
      &:hover {
        box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 12px;
      }
    `}

  ${e=>!e.$interactive&&tn`
      pointer-events: none;
    `}

  ${Ce`
    padding: 10px 12px;
    gap: 10px;
  `}
`,cG=E.div`
  flex-shrink: 0;
  width: 84px;
  ${Ce`
    width: 70px;
  `}
`,uG=E.div`
  font-weight: 600;
  font-size: 16px;
  color: ${e=>e.theme.colors.main};
  white-space: nowrap;
  ${Ce`
    font-size: 13px;
  `}
`,dG=E.div`
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
  margin-top: 2px;
  ${Ce`
    font-size: 11px;
  `}
`,fG=E.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  ${Ce`
    display: none;
  `}
`,hG=E.div`
  flex: 1;
  min-width: 0;
`,pG=E.div`
  font-size: 16px;
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${Ce`
    font-size: 13px;
  `}
`,mG=E.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  margin-top: 3px;
  ${Ce`
    font-size: 12px;
  `}
`,gG=E.span`
  color: ${e=>e.theme.borderColor};
`,yG=E.div`
  display: none;
  ${Ce`
    display: flex;
    align-items: center;
  `}
`,vG=E.button`
  flex-shrink: 0;
  border: 1px solid
    ${e=>e.$status==="free"?e.theme.colors.accent:e.$status==="waitlist"?e.theme.colors.status.waitlist.text:e.theme.colors.status.full.text};
  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.$status==="free"?e.theme.colors.accent:"transparent"};
  color: ${e=>e.$status==="free"?"#fff":e.$status==="waitlist"?e.theme.colors.status.waitlist.text:e.theme.colors.status.full.text};
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  padding: 7px 18px;
  cursor: ${e=>e.$status==="full"?"default":"pointer"};
  white-space: nowrap;
  transition: filter 0.1s;

  &:hover:not(:disabled) {
    filter: ${e=>e.$status==="free"?"brightness(94%)":"none"};
  }

  ${Ce`
    font-size: 12px;
    padding: 5px 10px;
  `}
`,_G=C.memo(({clazz:e})=>{const t=Je(qD),n=e.status,i=n==="free"||n==="waitlist",o=C.useMemo(()=>e.customerUrl?new URL(e.customerUrl,"https://schedule.studio.onepeloton.com").href:(Jv("Missing customer URL",{extra:{clazz:e}}),""),[e]),l=C.useCallback(p=>{o&&(p.preventDefault(),window.open(o,"_blank","noopener,noreferrer"))},[o]),u=C.useMemo(()=>wo(e.start,t?.timezone),[e.start,t?.timezone]),f=OC[n]??OC.full;return g.jsxs(lG,{$status:n,$interactive:i,href:o,target:"_blank",rel:"noopener noreferrer",onClick:l,"aria-label":`${f.label} ${e.name} at ${u}`,children:[g.jsxs(cG,{children:[g.jsx(uG,{children:u}),g.jsxs(dG,{children:[e.duration/60," min"]})]}),g.jsxs(fG,{children:[g.jsx(fb,{instructor:e.instructor,size:44}),g.jsx(bh,{discipline:e.discipline,size:36})]}),g.jsxs(hG,{children:[g.jsx(pG,{children:e.name}),g.jsxs(mG,{children:[e.instructor.name,g.jsx(gG,{children:"·"}),e.discipline.name,g.jsx(yG,{children:g.jsx(bh,{discipline:e.discipline,size:20})})]})]}),g.jsx(vG,{$status:n,disabled:!i,tabIndex:-1,children:f.label})]})}),bG=E.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,SG=E.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,xG=E.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 0 4px 6px;
  border-bottom: 1px solid ${e=>e.theme.borderColor};
  margin-bottom: 2px;
`,wG=E.h2`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${e=>e.theme.colors.main};
  margin: 0;
`,MC=E.span`
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
`,EG=E.div`
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 32px 24px;
  text-align: center;
  ${Ce`
    padding: 24px 16px;
  `}
`,CG=E.p`
  font-size: 16px;
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
  margin: 0 0 8px;
`,LC=E.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  margin: 0;
  line-height: 1.5;
`,TG=({classes:e,fulfilledTimeStamp:t})=>{const n=Je(u=>aG(u,e)),i=Je(tG),o=Je(u=>u.filters.selectedBookableStatuses.includes("free")),l=C.useMemo(()=>t?new Intl.DateTimeFormat(void 0,{hour:"numeric",minute:"numeric"}).format(t):void 0,[t]);return n.length===0?g.jsxs(EG,{children:[g.jsx(CG,{children:"No classes found"}),i&&g.jsx(LC,{children:"Try resetting your filters or selecting more options in the sidebar."}),o&&!i&&g.jsx(LC,{children:"New classes usually open at 12:00 pm on Mondays and Thursdays in your studio's timezone."})]}):g.jsx(bG,{children:n.map((u,f)=>g.jsxs(SG,{children:[g.jsxs(xG,{children:[g.jsx(wG,{children:u.formattedDate}),f===0&&l&&g.jsxs(MC,{children:["Times in studio timezone · loaded ",l]}),f===0&&!l&&g.jsx(MC,{children:"All times in studio timezone"})]}),u.classes.map((p,h)=>g.jsx(_G,{clazz:p},h))]},f))})},_y=E.div`
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 32px 24px;
  text-align: center;
  ${Ce`
    padding: 24px 16px;
  `}
`,jC=E.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  margin: 0;
`,PC=E.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.error};
  margin: 0 0 6px;
`,RG=E.code`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,AG=E.button`
  border: none;
  background: none;
  color: ${e=>e.theme.colors.accent};
  cursor: pointer;
  font-family: inherit;
  font-size: 14px;
  text-decoration: underline;
  padding: 0;
  margin-top: 8px;
`,IG=()=>{const e=Je(Ao),{currentData:t,isLoading:n,error:i,fulfilledTimeStamp:o,refetch:l}=yb(e,{refetchOnMountOrArgChange:!0});return i&&!n?ED(i)?g.jsxs(_y,{children:[g.jsx(PC,{children:"Too many requests"}),g.jsx(jC,{children:wD}),g.jsx(AG,{type:"button",onClick:l,children:"Try again"})]}):g.jsxs(_y,{children:[g.jsx(PC,{children:"Failed to load classes"}),g.jsx(RG,{children:GH(i)})]}):!t||n?g.jsx(_y,{children:g.jsx(jC,{children:"Loading classes…"})}):g.jsx(TG,{classes:t,fulfilledTimeStamp:o})},DG=E.div``,Dv=300,kG=E.aside`
  max-width: 100%;
  width: ${Dv}px;
  top: calc(${Tu}px + env(safe-area-inset-top, 0px));
  bottom: 0;
  padding-bottom: env(safe-area-inset-bottom, 0px);
  overflow-y: auto;
  background-color: ${e=>e.theme.colors.secondarySurface};
  border-right: 1px solid ${e=>e.theme.borderColor};
  z-index: 1;
  position: fixed;

  @media only screen and (max-width: ${e=>e.theme.widths.tablet}px) {
    border-right: none;
    transition: left 0.25s;
    left: ${e=>e.$toggleVisible?0:-Dv}px;
    z-index: 2;
    box-shadow: ${e=>e.$toggleVisible?"4px 0 16px rgba(0,0,0,0.08)":"none"};
  }
`,NG=E.div`
  flex: 1;
  background-color: ${e=>e.theme.colors.secondarySurface};
  padding: 20px;
  padding-bottom: calc(20px + env(safe-area-inset-bottom, 0px));
  position: relative;
  margin-left: ${Dv}px;

  @media only screen and (max-width: ${e=>e.theme.widths.tablet}px) {
    margin-left: 0;

    &:before {
      content: "";
      position: fixed;
      background-color: rgba(0, 0, 0, 0.25);
      transition: opacity 0.25s;
      opacity: ${e=>e.$toggleVisible?1:0};
      top: 0;
      left: 0;
      height: 100vh;
      width: 100vw;
      pointer-events: ${e=>e.$toggleVisible?"all":"none"};
      z-index: 1;
    }
  }

  @media only screen and (max-width: ${e=>e.theme.widths.mobile}px) {
    padding: 12px;
    padding-bottom: calc(12px + env(safe-area-inset-bottom, 0px));
  }
`,mf=40,OG=E.div`
  padding-top: 10px;
  position: absolute;
  left: 0;
  width: 100%;
  top: -50px;
  text-align: center;
`,MG=E.div`
  display: inline-block;
  position: relative;
  width: ${mf}px;
  height: ${mf}px;
  transform-origin: center;
  transition: transform 0.1s;

  --sp-color: ${e=>e.theme.colors.accent};

  &.animate div {
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: var(--sp-color) transparent transparent transparent;
  }

  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${mf}px;
    height: ${mf}px;
    border: 6px solid var(--sp-color);
    border-radius: 50%;
    border-color: var(--sp-color) var(--sp-color) var(--sp-color) transparent;

    &:nth-child(1) {
      animation-delay: -0.45s;
    }
    &:nth-child(2) {
      animation-delay: -0.3s;
    }
    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,LG=E.div`
  display: none;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;

  @media only screen and (max-width: ${e=>e.theme.widths.tablet}px) {
    display: flex;
  }
`,jG=E.button`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 36px;
  padding: 0 14px;
  font-family: inherit;
  font-size: 13px;
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  cursor: pointer;
  transition: box-shadow 0.15s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 8px;
  }

  svg {
    flex-shrink: 0;
  }
`,PG=()=>g.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:g.jsx("path",{d:"M1 3h12M3 7h8M5 11h4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),$G=()=>{const{refresh:e}=ZV(),{swipeRef:t,spinnerRef:n}=eG({refresh:e}),[i,o]=C.useState(!1);return g.jsx(ms,{children:g.jsxs(DG,{children:[g.jsx(kG,{$toggleVisible:i,children:g.jsx(XV,{onClose:()=>{o(!1)}})}),g.jsxs(NG,{$toggleVisible:i,onClick:()=>{o(!1)},ref:t,children:[g.jsx(OG,{children:g.jsxs(MG,{ref:n,children:[g.jsx("div",{}),g.jsx("div",{}),g.jsx("div",{})]})}),g.jsx(LG,{children:g.jsxs(jG,{type:"button",onClick:l=>{o(!0),l.stopPropagation()},children:[g.jsx(PG,{}),"Filters"]})}),g.jsx(IG,{})]})]})})},UG=({children:e})=>{const t=Je(Za),n=Je(eb);return t.state!=="fulfilled"?null:n?g.jsx(g.Fragment,{children:e}):g.jsx(Uv,{to:tt.CLASS_LIST,replace:!0})},$C=e=>{switch(e.code){case"auth/user-not-found":return"No account found with this email address. Please check your email or create a new account.";case"auth/wrong-password":return"Incorrect password. Please try again or reset your password.";case"auth/invalid-email":return"Please enter a valid email address.";case"auth/user-disabled":return"This account has been disabled. Please contact support for assistance.";case"auth/too-many-requests":return"Too many failed login attempts. Please try again later or reset your password.";case"auth/weak-password":return"Password should be at least 6 characters long.";case"auth/email-already-in-use":return"An account with this email already exists. Please sign in instead.";case"auth/invalid-credential":return"Invalid email or password. Please check your credentials and try again.";case"auth/operation-not-allowed":return"This sign-in method is not enabled. Please contact support.";case"auth/account-exists-with-different-credential":return"An account already exists with the same email but different sign-in credentials. Please sign in using the original method.";case"auth/credential-already-in-use":return"This credential is already associated with a different user account.";case"auth/popup-closed-by-user":return"Sign-in was cancelled. Please try again.";case"auth/popup-blocked":return"Pop-up was blocked by your browser. Please allow pop-ups for this site and try again.";case"auth/cancelled-popup-request":return"Sign-in was cancelled. Please try again.";case"auth/network-request-failed":return"Network error occurred. Please check your internet connection and try again.";case"auth/internal-error":return"An internal error occurred. Please try again later.";case"auth/invalid-api-key":return"Configuration error. Please contact support.";case"auth/app-deleted":return"Application error. Please refresh the page and try again.";case"auth/invalid-user-token":return"Your session has expired. Please sign in again.";case"auth/user-token-expired":return"Your session has expired. Please sign in again.";case"auth/null-user":return"No user is currently signed in.";case"auth/requires-recent-login":return"This operation requires recent authentication. Please sign in again.";default:return e.message||"An unexpected error occurred. Please try again."}},zG=E.h1`
  font-size: 26px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
  margin: 0 0 6px;
`,BG=E.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  margin: 0 0 16px;
  line-height: 1.5;
`,HG=E.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,UC=E.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,zC=E.label`
  font-size: 13px;
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
`,BC=E.input`
  padding: 10px 14px;
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  font-size: 15px;
  font-family: inherit;
  color: ${e=>e.theme.colors.main};
  background-color: ${e=>e.theme.colors.mainSurface};
  transition:
    border-color 0.15s,
    box-shadow 0.15s;

  &::placeholder {
    color: ${e=>e.theme.colors.secondary};
    opacity: 0.6;
  }

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.accent};
    box-shadow: 0 0 0 3px ${e=>e.theme.colors.accent}22;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,FG=E.button`
  width: 100%;
  padding: 11px 16px;
  border: none;
  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.accent};
  color: #fff;
  font-family: inherit;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: filter 0.15s;

  &:hover:not(:disabled) {
    filter: brightness(94%);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,qG=E.button`
  width: 100%;
  padding: 11px 16px;
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  background-color: transparent;
  color: ${e=>e.theme.colors.main};
  font-family: inherit;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.15s;

  &:hover:not(:disabled) {
    background-color: ${e=>e.theme.colors.hoverSurface};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,VG=E.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 4px 0;
  color: ${e=>e.theme.colors.secondary};
  font-size: 13px;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background-color: ${e=>e.theme.borderColor};
  }
`,GG=E.p`
  margin: 0;
  font-size: 13px;
  color: ${e=>e.theme.colors.error};
`,WG=E.p`
  margin: 32px 0 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
`,YG=E.button`
  font-family: inherit;
  font-size: inherit;
  color: ${e=>e.theme.colors.accent};
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  text-decoration: underline;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,QG=()=>{const e=Cs(),[t,n]=C.useState(!1),[i,o]=C.useState(""),[l,u]=C.useState(!1),[f,p]=C.useState(""),[h,y]=C.useState(""),_=C.useCallback(async b=>{if(b.preventDefault(),!(!di||!f||!h)){n(!0),o("");try{l?await Yz(di,f,h):await Qz(di,f,h),e(tt.CLASS_LIST)}catch(x){console.error("Email auth error:",x);const I=x&&typeof x=="object"&&"code"in x?$C(x):"Authentication failed";o(I),Or(x)}finally{n(!1)}}},[f,h,l,e]),v=C.useCallback(async()=>{if(di){n(!0),o("");try{const b=new ui;await v8(di,b),e(tt.CLASS_LIST)}catch(b){console.error("Google sign-in error:",b);const x=b&&typeof b=="object"&&"code"in b?$C(b):"Google sign-in failed";o(x),Or(b)}finally{n(!1)}}},[e]);return g.jsxs("div",{children:[g.jsx(zG,{children:l?"Create account":"Sign in"}),g.jsx(BG,{children:"Set alerts, persist filters across devices, and access beta features."}),g.jsxs(HG,{onSubmit:_,children:[g.jsxs(UC,{children:[g.jsx(zC,{htmlFor:"signin-email",children:"Email"}),g.jsx(BC,{id:"signin-email",type:"email",placeholder:"you@example.com",value:f,onChange:b=>p(b.target.value),required:!0,disabled:t})]}),g.jsxs(UC,{children:[g.jsx(zC,{htmlFor:"signin-password",children:"Password"}),g.jsx(BC,{id:"signin-password",type:"password",placeholder:"••••••••",value:h,onChange:b=>y(b.target.value),required:!0,disabled:t})]}),i&&g.jsx(GG,{role:"alert",children:i}),g.jsx(FG,{type:"submit",disabled:t,children:t?"Loading…":l?"Create account":"Sign in"})]}),g.jsx(VG,{style:{marginTop:20,marginBottom:16},children:"or"}),g.jsx(qG,{type:"button",onClick:v,disabled:t,children:"Continue with Google"}),g.jsxs(WG,{children:[l?"Already have an account?":"Don't have an account?"," ",g.jsx(YG,{type:"button",onClick:()=>{u(!l),o("")},disabled:t,children:l?"Sign in":"Create account"})]})]})},KG=Ei([Za],e=>e.state==="fulfilled"&&!!e.data),XG=E.div`
  padding: 32px 20px;
  display: flex;
  justify-content: center;

  ${Ce`
    padding: 16px 12px;
  `}
`,ZG=E.div`
  width: 100%;
  max-width: 400px;
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 32px;

  ${Ce`
    padding: 24px 20px;
  `}
`,JG=()=>Je(KG)?g.jsx(Uv,{to:tt.CLASS_LIST}):g.jsx(ms,{children:g.jsx(XG,{children:g.jsx(ZG,{children:g.jsx(QG,{})})})});function eW(e){const t=[];for(let n=e-1;n>=0;n--){const i=new Date;i.setDate(i.getDate()-n),t.push(i.toISOString().slice(0,10))}return t}function tW(e=14){const[t,n]=C.useState({state:"idle"});return C.useEffect(()=>{if(!an){n({state:"failed",error:new Error("No database")});return}n({state:"loading"}),_I(Mn(an,"metrics")).then(i=>{const o=i.val()??{},u=eW(e).map(f=>{const p=o[f]??{},h=p.diffs??{},y={};for(const[v,b]of Object.entries(h))y[v]={added:b.added??0,changed:b.changed??0,removed:b.removed??0};const _=p.notifications??{};return{date:f,diffs:y,notifications:{sent:_.sent??0,failed:_.failed??0,usersReached:_.usersReached??0}}});n({state:"fulfilled",data:u})}).catch(i=>{n({state:"failed",error:i})})},[e]),t}function nW(e){if(e.length===0)return null;const t=[...e].sort((i,o)=>i-o),n=Math.floor(t.length/2);return t.length%2===0?(t[n-1]+t[n])/2:t[n]}const rW=e=>{if(!e||typeof e!="object")return!1;const t=e;return typeof t.classId=="string"&&typeof t.instructorName=="string"&&typeof t.addedAt=="number"&&typeof t.timeToFullMs=="number"&&Number.isFinite(t.timeToFullMs)&&t.timeToFullMs>0};function iW(){const[e,t]=C.useState({state:"idle"});return C.useEffect(()=>{if(!an){t({state:"failed",error:new Error("No database")});return}t({state:"loading"});const n=Mn(an,"selloutStats"),i=Cu(n,o=>{const l=o.val()??{},u=[];for(const[f,p]of Object.entries(l)){if(!p||typeof p!="object")continue;const h=Object.values(p).filter(rW);if(h.length===0)continue;const y=h.map(v=>v.timeToFullMs),_=nW(y);_!==null&&u.push({instructorId:f,instructorName:h[0].instructorName,classCount:h.length,medianTimeToFullMs:_})}t({state:"fulfilled",data:u})},o=>{t({state:"failed",error:o})});return()=>i()},[]),e}function sW(e){if(e<6e4)return`${Math.round(e/1e3)}s`;const t=Math.round(e/6e4),n=Math.floor(t/1440),i=Math.floor(t%1440/60),o=t%60;return n>0?`${n}d ${i}h`:i>0?`${i}h ${o}m`:`${o}m`}const by=E.div`
  padding: 32px 24px;
  max-width: 900px;
  margin: 0 auto;

  ${Ce`
    padding: 20px 16px;
  `}
`,Sy=E.h1`
  font-size: 22px;
  font-weight: 700;
  color: ${e=>e.theme.colors.main};
  margin: 0 0 28px;
`,xy=E.section`
  margin-bottom: 40px;
`,wy=E.h2`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${e=>e.theme.colors.secondary};
  margin: 0 0 16px;
`,oW=E.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 40px;

  ${Ce`
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  `}
`,ma=E.div`
  background: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 16px 20px;
`,ga=E.div`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
  margin-bottom: 4px;
`,ya=E.div`
  font-size: 24px;
  font-weight: 700;
  color: ${e=>e.theme.colors.main};
`,aW=E.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 12px;
  margin: -8px 0 16px;
`,xc=E.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
`,Th=1e3,Mf=140,Rh=12,VD=4,GD=Mf-Rh-VD;function gc(e,t){return t<=1?Th/2:e/(t-1)*Th}function Ey(e,t){return Rh+GD*(1-e/t)}const lW=[.25,.5,.75],cW=E.div`
  background: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 16px 16px 12px;
`,uW=E.svg`
  display: block;
  width: 100%;
  height: 140px;
  /* currentColor is used by grid lines so they inherit the theme secondary color */
  color: ${e=>e.theme.colors.secondary};
`,dW=E.div`
  display: flex;
  margin-top: 6px;
`,fW=E.div`
  flex: 1;
  text-align: center;
  font-size: 10px;
  color: ${e=>e.theme.colors.secondary};
  overflow: hidden;
`,hW=E.div`
  display: flex;
  gap: 16px;
  margin-top: 12px;
  flex-wrap: wrap;
`,pW=E.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,mW=E.div`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  background-color: ${e=>e.$color};
  flex-shrink: 0;
`;function gW(e){const[,t,n]=e.split("-");return`${parseInt(t)}/${parseInt(n)}`}function yW({days:e,legend:t}){return g.jsxs(g.Fragment,{children:[g.jsx(dW,{children:e.map(n=>g.jsx(fW,{children:gW(n.date)},n.date))}),g.jsx(hW,{children:t.map(n=>g.jsxs(pW,{children:[g.jsx(mW,{$color:n.color}),n.label]},n.label))})]})}const vW=E.div`
  position: relative;
`,_W=E.div`
  position: absolute;
  top: 6px;
  /* clamp keeps the box within the chart edges */
  left: clamp(0px, calc(${e=>e.$pct}% - 54px), calc(100% - 108px));
  background: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 6px 10px;
  pointer-events: none;
  z-index: 10;
  min-width: 108px;
`,bW=E.div`
  font-size: 11px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,SW=E.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: ${e=>e.theme.colors.secondary};
  line-height: 1.6;
`,xW=E.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${e=>e.$color};
  flex-shrink: 0;
`,wW=E.span`
  margin-left: auto;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
`,EW=E.div`
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${e=>e.$color};
  border: 2px solid ${e=>e.theme.colors.mainSurface};
  transform: translate(-50%, -50%);
  pointer-events: none;
`;function HC({days:e,seriesForDay:t,legend:n}){const i=e.length,[o,l]=C.useState(null),u=e.map(t),f=Math.max(...u.flatMap(v=>v.map(b=>b.value)),1),p=u[0].length,h=Ey(0,f).toFixed(1);function y(v,b){const{left:x,width:I}=b.getBoundingClientRect(),T=(v-x)/I;return Math.max(0,Math.min(i-1,Math.round(T*(i-1))))}const _=o!==null?o/(i-1)*100:null;return g.jsxs(cW,{children:[g.jsxs(vW,{children:[o!==null&&_!==null&&g.jsxs(g.Fragment,{children:[g.jsxs(_W,{$pct:_,children:[g.jsx(bW,{children:e[o].date}),u[o].map(v=>g.jsxs(SW,{children:[g.jsx(xW,{$color:v.color}),v.label,g.jsx(wW,{children:v.value})]},v.label))]}),u[o].map((v,b)=>g.jsx(EW,{$color:v.color,style:{left:`${_}%`,top:`${Ey(v.value,f)/Mf*100}%`}},b))]}),g.jsxs(uW,{viewBox:`0 0 ${Th} ${Mf}`,preserveAspectRatio:"none","aria-hidden":"true",style:{cursor:"crosshair",display:"block"},onMouseMove:v=>l(y(v.clientX,v.currentTarget)),onMouseLeave:()=>l(null),onTouchStart:v=>l(y(v.touches[0].clientX,v.currentTarget)),onTouchMove:v=>l(y(v.touches[0].clientX,v.currentTarget)),onTouchEnd:()=>l(null),children:[lW.map(v=>{const b=(Rh+GD*(1-v)).toFixed(1);return g.jsx("line",{x1:0,y1:b,x2:Th,y2:b,stroke:"currentColor",strokeOpacity:.1,strokeWidth:1,vectorEffect:"non-scaling-stroke"},v)}),o!==null&&g.jsx("line",{x1:gc(o,i).toFixed(1),y1:Rh,x2:gc(o,i).toFixed(1),y2:Mf-VD,stroke:"currentColor",strokeOpacity:.2,strokeWidth:1,vectorEffect:"non-scaling-stroke"}),Array.from({length:p},(v,b)=>{const x=u[0][b].color,T=u.map((M,R)=>({x:gc(R,i),y:Ey(M[b].value,f)})).map(({x:M,y:R},D)=>`${D===0?"M":"L"}${M.toFixed(1)},${R.toFixed(1)}`).join(" "),k=[T,`L${gc(i-1,i).toFixed(1)},${h}`,`L${gc(0,i).toFixed(1)},${h}`,"Z"].join(" ");return g.jsxs("g",{children:[g.jsx("path",{d:k,fill:x,fillOpacity:.12}),g.jsx("path",{d:T,fill:"none",stroke:x,strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})]},b)})]})]}),g.jsx(yW,{days:e,legend:n})]})}const Cy=10,FC=1,CW=E.div`
  ${$r}
  /* Clips the fade and the toggle button to the rounded corners. */
  overflow: hidden;
  /* Keeps the table clear of the sticky navbar when collapsing scrolls it back. */
  scroll-margin-top: ${Tu+16}px;
`,TW=E.div`
  position: relative;
`,RW=E.div`
  overflow-x: auto;
`,AW=E.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  /* Tall enough to swallow the peek row while clearing the one above it. */
  height: 56px;
  pointer-events: none;
  background: linear-gradient(
    to bottom,
    transparent,
    ${e=>e.theme.colors.mainSurface} 75%
  );
`,IW=E.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 100%;
  padding: 10px 16px;
  font: inherit;
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
  background: ${e=>e.theme.colors.mainSurface};
  border: none;
  border-top: 1px solid ${e=>e.theme.borderColor};
  cursor: pointer;

  ${ku}
  ${lD}
`,DW=E.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 480px;
  background: ${e=>e.theme.colors.mainSurface};
`,kW=E.th`
  text-align: left;
  padding: 0;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${e=>e.theme.colors.secondary};
  background: ${e=>e.theme.colors.mainSurface};
  border-bottom: 1px solid ${e=>e.theme.borderColor};
  white-space: nowrap;
`,NW=E.button`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;
  padding: 10px 16px;
  font: inherit;
  text-transform: inherit;
  letter-spacing: inherit;
  color: inherit;
  background: none;
  border: none;
  cursor: pointer;

  ${ku}
  ${lD}
`,OW=E.span`
  font-size: 10px;
  visibility: ${e=>e.$visible?"visible":"hidden"};
`,qC=E.tr`
  &:not(:last-child) td {
    border-bottom: 1px solid ${e=>e.theme.borderColor};
  }
`,Ty=E.td`
  padding: 10px 16px;
  font-size: 13px;
  color: ${e=>e.theme.colors.main};
  white-space: nowrap;
`,MW=[{key:"instructor",label:"Instructor"},{key:"classCount",label:"Classes measured"},{key:"fill",label:"Median time to fill waitlist"}];function LW(e,t,n){if(!n)return e.instructorName.localeCompare(t.instructorName);switch(n.key){case"instructor":return n.direction==="asc"?e.instructorName.localeCompare(t.instructorName):t.instructorName.localeCompare(e.instructorName);case"classCount":return n.direction==="asc"?e.classCount-t.classCount:t.classCount-e.classCount;case"fill":return n.direction==="asc"?e.medianTimeToFullMs-t.medianTimeToFullMs:t.medianTimeToFullMs-e.medianTimeToFullMs}}function jW({stats:e}){const[t,n]=C.useState(null),[i,o]=C.useState(!1),l=C.useRef(null);if(e.length===0)return g.jsx(xc,{children:"No waitlist fill times recorded yet."});function u(b){n(x=>!x||x.key!==b?{key:b,direction:"asc"}:x.direction==="asc"?{key:b,direction:"desc"}:null)}function f(){const b=l.current;i&&b&&b.getBoundingClientRect().top<Tu&&b.scrollIntoView({block:"start"}),o(!i)}const p=[...e].sort((b,x)=>LW(b,x,t)),h=p.length>Cy+FC,y=h&&!i,_=y?p.slice(0,Cy+FC):p,v=p.length-Cy;return g.jsxs(CW,{ref:l,children:[g.jsxs(TW,{children:[g.jsx(RW,{children:g.jsxs(DW,{children:[g.jsx("thead",{children:g.jsx(qC,{children:MW.map(({key:b,label:x})=>{const I=t?.key===b;return g.jsx(kW,{"aria-sort":I?t.direction==="asc"?"ascending":"descending":"none",children:g.jsxs(NW,{type:"button",onClick:()=>u(b),children:[x,g.jsx(OW,{$visible:I,children:I&&t.direction==="desc"?"▼":"▲"})]})},b)})})}),g.jsx("tbody",{children:_.map(b=>g.jsxs(qC,{children:[g.jsx(Ty,{children:b.instructorName}),g.jsx(Ty,{children:b.classCount}),g.jsx(Ty,{children:sW(b.medianTimeToFullMs)})]},b.instructorId))})]})}),y&&g.jsx(AW,{})]}),h&&g.jsxs(IW,{type:"button",onClick:f,"aria-expanded":i,children:[g.jsx("span",{"aria-hidden":"true",children:i?"▴":"▾"}),i?"Show fewer instructors":`Show ${v} more instructor${v===1?"":"s"}`]})]})}const Wn={added:"#4ade80",changed:"#facc15",removed:"#f87171",sent:"#60a5fa",failed:"#f87171",usersReached:"#a78bfa"},PW=()=>{const e=tW(14),t=iW();if(e.state==="idle"||e.state==="loading")return g.jsx(ms,{children:g.jsxs(by,{children:[g.jsx(Sy,{children:"Stats"}),g.jsx(xc,{children:"Loading…"})]})});if(e.state==="failed")return g.jsx(ms,{children:g.jsxs(by,{children:[g.jsx(Sy,{children:"Stats"}),g.jsxs(xc,{children:["Failed to load metrics: ",e.error.message??"unknown error"]})]})});const n=e.data,i=n.reduce((l,u)=>{l.sent+=u.notifications.sent,l.failed+=u.notifications.failed,l.usersReached+=u.notifications.usersReached;for(const f of Object.values(u.diffs))l.added+=f.added,l.changed+=f.changed,l.removed+=f.removed;return l},{sent:0,failed:0,usersReached:0,added:0,changed:0,removed:0}),o=[...new Set(n.flatMap(l=>Object.keys(l.diffs)))];return g.jsx(ms,{children:g.jsxs(by,{children:[g.jsx(Sy,{children:"Stats"}),g.jsxs(oW,{children:[g.jsxs(ma,{children:[g.jsx(ga,{children:"Notifications sent (14d)"}),g.jsx(ya,{children:i.sent.toLocaleString()})]}),g.jsxs(ma,{children:[g.jsx(ga,{children:"Users reached (14d)"}),g.jsx(ya,{children:i.usersReached.toLocaleString()})]}),g.jsxs(ma,{children:[g.jsx(ga,{children:"Delivery failures (14d)"}),g.jsx(ya,{children:i.failed.toLocaleString()})]}),g.jsxs(ma,{children:[g.jsx(ga,{children:"Classes added (14d)"}),g.jsx(ya,{children:i.added.toLocaleString()})]}),g.jsxs(ma,{children:[g.jsx(ga,{children:"Classes changed (14d)"}),g.jsx(ya,{children:i.changed.toLocaleString()})]}),g.jsxs(ma,{children:[g.jsx(ga,{children:"Classes removed (14d)"}),g.jsx(ya,{children:i.removed.toLocaleString()})]})]}),g.jsxs(xy,{children:[g.jsx(wy,{children:"Push notifications (14 days)"}),g.jsx(HC,{days:n,seriesForDay:l=>[{value:l.notifications.sent,color:Wn.sent,label:"Sent"},{value:l.notifications.failed,color:Wn.failed,label:"Failed"},{value:l.notifications.usersReached,color:Wn.usersReached,label:"Users reached"}],legend:[{color:Wn.sent,label:"Sent"},{color:Wn.failed,label:"Failed"},{color:Wn.usersReached,label:"Users reached"}]})]}),g.jsxs(xy,{children:[g.jsx(wy,{children:"Waitlist fill speed by instructor"}),g.jsx(aW,{children:"Studio classes reach the schedule with their seats already gone, so only the waitlist can be timed. Counts classes first seen with an empty waitlist, measured until that waitlist filled."}),t.state==="idle"||t.state==="loading"?g.jsx(xc,{children:"Loading…"}):t.state==="failed"?g.jsxs(xc,{children:["Failed to load waitlist stats:"," ",t.error.message??"unknown error"]}):g.jsx(jW,{stats:t.data})]}),o.map(l=>g.jsxs(xy,{children:[g.jsxs(wy,{children:["Schedule changes — ",fn[l]?.location??l," (14 days)"]}),g.jsx(HC,{days:n,seriesForDay:u=>{const f=u.diffs[l]??{added:0,changed:0,removed:0};return[{value:f.added,color:Wn.added,label:"Added"},{value:f.changed,color:Wn.changed,label:"Changed"},{value:f.removed,color:Wn.removed,label:"Removed"}]},legend:[{color:Wn.added,label:"Added"},{color:Wn.changed,label:"Changed"},{color:Wn.removed,label:"Removed"}]})]},l))]})})},$W=E.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  ${Ce`
    padding: 24px 16px;
  `}
`,UW=E.div`
  font-size: 48px;
  margin-bottom: 20px;
`,zW=E.h1`
  font-size: 22px;
  font-weight: 700;
  color: ${e=>e.theme.colors.main};
  margin: 0 0 12px;
`,BW=E.p`
  font-size: 15px;
  line-height: 1.6;
  color: ${e=>e.theme.colors.secondary};
  margin: 0 0 28px;
`,HW=E.div`
  width: 100%;
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 14px 16px;
  margin-bottom: 28px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,VC=E.span`
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: ${e=>e.theme.colors.secondary};
`,GC=E.span`
  font-size: 15px;
  color: ${e=>e.theme.colors.main};
`,FW=E.a`
  display: inline-block;
  padding: 12px 32px;
  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.accent};
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition: filter 0.15s;

  &:hover {
    filter: brightness(92%);
  }
`,qW=E.p`
  margin: 16px 0 0;
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
`;function VW(e,t){if(!e)return null;try{const n=fn[t]?.timezone;return new Date(e).toLocaleString("en-US",{timeZone:n??"UTC",weekday:"short",month:"short",day:"numeric",hour:"numeric",minute:"2-digit",timeZoneName:"short"})}catch{return null}}const GW=()=>{const[e]=j2(),t=e.get("studioId")??"",n=e.get("startsAt")??"",i=e.get("waitingCount"),o=fn[t],l=VW(n,t),u=i!==null?parseInt(i,10):null;return g.jsx(ms,{children:g.jsxs($W,{children:[g.jsx(UW,{children:"📬"}),g.jsx(zW,{children:"Waitlist count changed"}),g.jsxs(BW,{children:["The number of people on the waitlist just changed",u!==null?` — there ${u===1?"is now 1 person":`are now ${u} people`} ahead`:"",". If you joined this waitlist, check your email — Peloton sends a message when it's your turn, and you'll have a 2-hour window to accept."]}),(l||o)&&g.jsxs(HW,{children:[o&&g.jsxs(g.Fragment,{children:[g.jsx(VC,{children:"Studio"}),g.jsx(GC,{children:o.location})]}),l&&g.jsxs(g.Fragment,{children:[g.jsx(VC,{style:{marginTop:o?8:0},children:"Class time"}),g.jsx(GC,{children:l})]})]}),g.jsx(FW,{href:"mailto:",children:"Open Mail App"}),g.jsx(qW,{children:"Opens your device's default mail app."})]})})},WW=D2(o2(g.jsxs(Yn,{children:[g.jsx(Yn,{path:tt.CLASS_LIST,element:g.jsx($G,{})}),g.jsxs(Yn,{path:tt.ALERTS,element:g.jsx(VF,{}),children:[g.jsx(Yn,{index:!0,element:g.jsx(xV,{})}),g.jsx(Yn,{path:"edit",element:g.jsx(iF,{})}),g.jsx(Yn,{path:":alertId/test",element:g.jsx(L9,{})})]}),g.jsx(Yn,{path:tt.WAITLIST_ALERT,element:g.jsx(GW,{})}),g.jsx(Yn,{path:tt.SIGN_IN,element:g.jsx(JG,{})}),g.jsx(Yn,{path:tt.ABOUT,element:g.jsx(JB,{})}),g.jsx(Yn,{path:tt.STATS,element:g.jsx(UG,{children:g.jsx(PW,{})})}),g.jsx(Yn,{path:"*",element:g.jsx(Uv,{to:tt.CLASS_LIST,replace:!0})})]}))),YW=(e,t)=>({id:e.uid,displayName:e.displayName||e.email||"",isAdmin:t}),QW=({children:e})=>{const t=ir();return C.useEffect(()=>{if(t(xC()),!di)return t(wC()),()=>{};const n=Zz(di,async i=>{if(t(xC()),i){let o=!1;try{o=(an?await _I(Mn(an,`admins/${i.uid}`)):null)?.val()===!0}catch{}t(IF(YW(i,o)))}else t(wC())});return()=>n()},[t]),g.jsx(g.Fragment,{children:e})},KW={mode:"light",borderRadius:"8px",borderColor:"#d1d1d1",colors:{main:"#494f59",secondary:"#514e60",mainSurface:"#fff",secondarySurface:"#ededed",accent:"#cb3449",error:"#d93025",hoverSurface:"rgba(0, 0, 0, 0.05)",status:{free:{bg:"#e8f5e9",text:"#2e7d32"},waitlist:{bg:"#fff3e0",text:"#e65100"},full:{text:"#9e9e9e"}}},widths:{tablet:1024,mobile:560}},XW={mode:"dark",borderRadius:"8px",borderColor:"#2e2f45",colors:{main:"#e2e4eb",secondary:"#9b98b0",mainSurface:"#1c1d2e",secondarySurface:"#13141f",accent:"#cb3449",error:"#ef5350",hoverSurface:"rgba(255, 255, 255, 0.08)",status:{free:{bg:"rgba(46, 125, 50, 0.15)",text:"#81c784"},waitlist:{bg:"rgba(230, 81, 0, 0.15)",text:"#ffb74d"},full:{text:"#757575"}}},widths:{tablet:1024,mobile:560}},ZW=qL`
  html {
    color-scheme: ${e=>e.theme.mode};
    background: linear-gradient(
        to bottom,
        #181a2f 0,
        #181a2f calc(60px + env(safe-area-inset-top, 0px)),
        ${e=>e.theme.colors.secondarySurface} calc(60px + env(safe-area-inset-top, 0px))
      )
      fixed;
  }

  body {
    background-color: ${e=>e.theme.colors.secondarySurface};
    color: ${e=>e.theme.colors.main};
  }

  input, select, textarea {
    accent-color: ${e=>e.theme.colors.accent};
  }
`,kv="theme-mode";function JW(){const e=localStorage.getItem(kv);return e!==null?e==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches}function eY(){const[e,t]=C.useState(JW),n=C.useCallback(()=>{t(i=>{const o=!i;return localStorage.setItem(kv,o?"dark":"light"),o})},[]);return C.useEffect(()=>{const i=window.matchMedia("(prefers-color-scheme: dark)"),o=l=>{localStorage.getItem(kv)===null&&t(l.matches)};return i.addEventListener("change",o),()=>i.removeEventListener("change",o)},[]),{isDark:e,toggle:n}}function tY(){const{isDark:e,toggle:t}=eY();return C.useEffect(()=>{const i=new URLSearchParams(window.location.search).get("classUrl");i&&(window.history.replaceState(null,"",window.location.pathname+window.location.hash),window.location.assign(new URL(i,"https://schedule.studio.onepeloton.com").href))},[]),g.jsx(sD.Provider,{value:{isDark:e,toggle:t},children:g.jsxs(BL,{theme:e?XW:KW,children:[g.jsx(ZW,{}),g.jsx(wO,{store:fp,children:g.jsx(QW,{children:g.jsx(KU,{children:g.jsx(H2,{router:WW})})})})]})})}aO.createRoot(document.getElementById("root")).render(g.jsx(C.StrictMode,{children:g.jsx(tY,{})}));
//# sourceMappingURL=index-B9v85fu8.js.map

//# debugId=82aedc68-7815-5671-804f-486ab5f687c4
