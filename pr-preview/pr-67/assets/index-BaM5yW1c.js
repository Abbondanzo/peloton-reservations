(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function WN(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var vg={exports:{}},Jl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xx;function YN(){if(Xx)return Jl;Xx=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(i,o,l){var u=null;if(l!==void 0&&(u=""+l),o.key!==void 0&&(u=""+o.key),"key"in o){l={};for(var f in o)f!=="key"&&(l[f]=o[f])}else l=o;return o=l.ref,{$$typeof:e,type:i,key:u,ref:o!==void 0?o:null,props:l}}return Jl.Fragment=t,Jl.jsx=n,Jl.jsxs=n,Jl}var Zx;function QN(){return Zx||(Zx=1,vg.exports=YN()),vg.exports}var g=QN(),_g={exports:{}},je={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jx;function KN(){if(Jx)return je;Jx=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),_=Symbol.iterator;function v(N){return N===null||typeof N!="object"?null:(N=_&&N[_]||N["@@iterator"],typeof N=="function"?N:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,D={};function T(N,K,le){this.props=N,this.context=K,this.refs=D,this.updater=le||S}T.prototype.isReactComponent={},T.prototype.setState=function(N,K){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,K,"setState")},T.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function k(){}k.prototype=T.prototype;function M(N,K,le){this.props=N,this.context=K,this.refs=D,this.updater=le||S}var R=M.prototype=new k;R.constructor=M,x(R,T.prototype),R.isPureReactComponent=!0;var I=Array.isArray,O={H:null,A:null,T:null,S:null,V:null},A=Object.prototype.hasOwnProperty;function j(N,K,le,ie,de,me){return le=me.ref,{$$typeof:e,type:N,key:K,ref:le!==void 0?le:null,props:me}}function U(N,K){return j(N.type,K,void 0,void 0,void 0,N.props)}function F(N){return typeof N=="object"&&N!==null&&N.$$typeof===e}function H(N){var K={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(le){return K[le]})}var z=/\/+/g;function G(N,K){return typeof N=="object"&&N!==null&&N.key!=null?H(""+N.key):K.toString(36)}function V(){}function te(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(V,V):(N.status="pending",N.then(function(K){N.status==="pending"&&(N.status="fulfilled",N.value=K)},function(K){N.status==="pending"&&(N.status="rejected",N.reason=K)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function ue(N,K,le,ie,de){var me=typeof N;(me==="undefined"||me==="boolean")&&(N=null);var pe=!1;if(N===null)pe=!0;else switch(me){case"bigint":case"string":case"number":pe=!0;break;case"object":switch(N.$$typeof){case e:case t:pe=!0;break;case y:return pe=N._init,ue(pe(N._payload),K,le,ie,de)}}if(pe)return de=de(N),pe=ie===""?"."+G(N,0):ie,I(de)?(le="",pe!=null&&(le=pe.replace(z,"$&/")+"/"),ue(de,K,le,"",function(De){return De})):de!=null&&(F(de)&&(de=U(de,le+(de.key==null||N&&N.key===de.key?"":(""+de.key).replace(z,"$&/")+"/")+pe)),K.push(de)),1;pe=0;var Ae=ie===""?".":ie+":";if(I(N))for(var be=0;be<N.length;be++)ie=N[be],me=Ae+G(ie,be),pe+=ue(ie,K,le,me,de);else if(be=v(N),typeof be=="function")for(N=be.call(N),be=0;!(ie=N.next()).done;)ie=ie.value,me=Ae+G(ie,be++),pe+=ue(ie,K,le,me,de);else if(me==="object"){if(typeof N.then=="function")return ue(te(N),K,le,ie,de);throw K=String(N),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return pe}function P(N,K,le){if(N==null)return N;var ie=[],de=0;return ue(N,ie,"","",function(me){return K.call(le,me,de++)}),ie}function X(N){if(N._status===-1){var K=N._result;K=K(),K.then(function(le){(N._status===0||N._status===-1)&&(N._status=1,N._result=le)},function(le){(N._status===0||N._status===-1)&&(N._status=2,N._result=le)}),N._status===-1&&(N._status=0,N._result=K)}if(N._status===1)return N._result.default;throw N._result}var ne=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function ae(){}return je.Children={map:P,forEach:function(N,K,le){P(N,function(){K.apply(this,arguments)},le)},count:function(N){var K=0;return P(N,function(){K++}),K},toArray:function(N){return P(N,function(K){return K})||[]},only:function(N){if(!F(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},je.Component=T,je.Fragment=n,je.Profiler=o,je.PureComponent=M,je.StrictMode=i,je.Suspense=p,je.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,je.__COMPILER_RUNTIME={__proto__:null,c:function(N){return O.H.useMemoCache(N)}},je.cache=function(N){return function(){return N.apply(null,arguments)}},je.cloneElement=function(N,K,le){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var ie=x({},N.props),de=N.key,me=void 0;if(K!=null)for(pe in K.ref!==void 0&&(me=void 0),K.key!==void 0&&(de=""+K.key),K)!A.call(K,pe)||pe==="key"||pe==="__self"||pe==="__source"||pe==="ref"&&K.ref===void 0||(ie[pe]=K[pe]);var pe=arguments.length-2;if(pe===1)ie.children=le;else if(1<pe){for(var Ae=Array(pe),be=0;be<pe;be++)Ae[be]=arguments[be+2];ie.children=Ae}return j(N.type,de,void 0,void 0,me,ie)},je.createContext=function(N){return N={$$typeof:u,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:l,_context:N},N},je.createElement=function(N,K,le){var ie,de={},me=null;if(K!=null)for(ie in K.key!==void 0&&(me=""+K.key),K)A.call(K,ie)&&ie!=="key"&&ie!=="__self"&&ie!=="__source"&&(de[ie]=K[ie]);var pe=arguments.length-2;if(pe===1)de.children=le;else if(1<pe){for(var Ae=Array(pe),be=0;be<pe;be++)Ae[be]=arguments[be+2];de.children=Ae}if(N&&N.defaultProps)for(ie in pe=N.defaultProps,pe)de[ie]===void 0&&(de[ie]=pe[ie]);return j(N,me,void 0,void 0,null,de)},je.createRef=function(){return{current:null}},je.forwardRef=function(N){return{$$typeof:f,render:N}},je.isValidElement=F,je.lazy=function(N){return{$$typeof:y,_payload:{_status:-1,_result:N},_init:X}},je.memo=function(N,K){return{$$typeof:h,type:N,compare:K===void 0?null:K}},je.startTransition=function(N){var K=O.T,le={};O.T=le;try{var ie=N(),de=O.S;de!==null&&de(le,ie),typeof ie=="object"&&ie!==null&&typeof ie.then=="function"&&ie.then(ae,ne)}catch(me){ne(me)}finally{O.T=K}},je.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},je.use=function(N){return O.H.use(N)},je.useActionState=function(N,K,le){return O.H.useActionState(N,K,le)},je.useCallback=function(N,K){return O.H.useCallback(N,K)},je.useContext=function(N){return O.H.useContext(N)},je.useDebugValue=function(){},je.useDeferredValue=function(N,K){return O.H.useDeferredValue(N,K)},je.useEffect=function(N,K,le){var ie=O.H;if(typeof le=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ie.useEffect(N,K)},je.useId=function(){return O.H.useId()},je.useImperativeHandle=function(N,K,le){return O.H.useImperativeHandle(N,K,le)},je.useInsertionEffect=function(N,K){return O.H.useInsertionEffect(N,K)},je.useLayoutEffect=function(N,K){return O.H.useLayoutEffect(N,K)},je.useMemo=function(N,K){return O.H.useMemo(N,K)},je.useOptimistic=function(N,K){return O.H.useOptimistic(N,K)},je.useReducer=function(N,K,le){return O.H.useReducer(N,K,le)},je.useRef=function(N){return O.H.useRef(N)},je.useState=function(N){return O.H.useState(N)},je.useSyncExternalStore=function(N,K,le){return O.H.useSyncExternalStore(N,K,le)},je.useTransition=function(){return O.H.useTransition()},je.version="19.1.1",je}var e1;function Rh(){return e1||(e1=1,_g.exports=KN()),_g.exports}var E=Rh();const dr=WN(E);var bg={exports:{}},ec={},Sg={exports:{}},xg={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t1;function XN(){return t1||(t1=1,(function(e){function t(P,X){var ne=P.length;P.push(X);e:for(;0<ne;){var ae=ne-1>>>1,N=P[ae];if(0<o(N,X))P[ae]=X,P[ne]=N,ne=ae;else break e}}function n(P){return P.length===0?null:P[0]}function i(P){if(P.length===0)return null;var X=P[0],ne=P.pop();if(ne!==X){P[0]=ne;e:for(var ae=0,N=P.length,K=N>>>1;ae<K;){var le=2*(ae+1)-1,ie=P[le],de=le+1,me=P[de];if(0>o(ie,ne))de<N&&0>o(me,ie)?(P[ae]=me,P[de]=ne,ae=de):(P[ae]=ie,P[le]=ne,ae=le);else if(de<N&&0>o(me,ne))P[ae]=me,P[de]=ne,ae=de;else break e}}return X}function o(P,X){var ne=P.sortIndex-X.sortIndex;return ne!==0?ne:P.id-X.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();e.unstable_now=function(){return u.now()-f}}var p=[],h=[],y=1,_=null,v=3,S=!1,x=!1,D=!1,T=!1,k=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function I(P){for(var X=n(h);X!==null;){if(X.callback===null)i(h);else if(X.startTime<=P)i(h),X.sortIndex=X.expirationTime,t(p,X);else break;X=n(h)}}function O(P){if(D=!1,I(P),!x)if(n(p)!==null)x=!0,A||(A=!0,G());else{var X=n(h);X!==null&&ue(O,X.startTime-P)}}var A=!1,j=-1,U=5,F=-1;function H(){return T?!0:!(e.unstable_now()-F<U)}function z(){if(T=!1,A){var P=e.unstable_now();F=P;var X=!0;try{e:{x=!1,D&&(D=!1,M(j),j=-1),S=!0;var ne=v;try{t:{for(I(P),_=n(p);_!==null&&!(_.expirationTime>P&&H());){var ae=_.callback;if(typeof ae=="function"){_.callback=null,v=_.priorityLevel;var N=ae(_.expirationTime<=P);if(P=e.unstable_now(),typeof N=="function"){_.callback=N,I(P),X=!0;break t}_===n(p)&&i(p),I(P)}else i(p);_=n(p)}if(_!==null)X=!0;else{var K=n(h);K!==null&&ue(O,K.startTime-P),X=!1}}break e}finally{_=null,v=ne,S=!1}X=void 0}}finally{X?G():A=!1}}}var G;if(typeof R=="function")G=function(){R(z)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,te=V.port2;V.port1.onmessage=z,G=function(){te.postMessage(null)}}else G=function(){k(z,0)};function ue(P,X){j=k(function(){P(e.unstable_now())},X)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_next=function(P){switch(v){case 1:case 2:case 3:var X=3;break;default:X=v}var ne=v;v=X;try{return P()}finally{v=ne}},e.unstable_requestPaint=function(){T=!0},e.unstable_runWithPriority=function(P,X){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var ne=v;v=P;try{return X()}finally{v=ne}},e.unstable_scheduleCallback=function(P,X,ne){var ae=e.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?ae+ne:ae):ne=ae,P){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=ne+N,P={id:y++,callback:X,priorityLevel:P,startTime:ne,expirationTime:N,sortIndex:-1},ne>ae?(P.sortIndex=ne,t(h,P),n(p)===null&&P===n(h)&&(D?(M(j),j=-1):D=!0,ue(O,ne-ae))):(P.sortIndex=N,t(p,P),x||S||(x=!0,A||(A=!0,G()))),P},e.unstable_shouldYield=H,e.unstable_wrapCallback=function(P){var X=v;return function(){var ne=v;v=X;try{return P.apply(this,arguments)}finally{v=ne}}}})(xg)),xg}var n1;function ZN(){return n1||(n1=1,Sg.exports=XN()),Sg.exports}var wg={exports:{}},sn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r1;function JN(){if(r1)return sn;r1=1;var e=Rh();function t(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)h+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var i={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function l(p,h,y){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:p,containerInfo:h,implementation:y}}var u=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return sn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,sn.createPortal=function(p,h){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return l(p,h,null,y)},sn.flushSync=function(p){var h=u.T,y=i.p;try{if(u.T=null,i.p=2,p)return p()}finally{u.T=h,i.p=y,i.d.f()}},sn.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,i.d.C(p,h))},sn.prefetchDNS=function(p){typeof p=="string"&&i.d.D(p)},sn.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var y=h.as,_=f(y,h.crossOrigin),v=typeof h.integrity=="string"?h.integrity:void 0,S=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;y==="style"?i.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:S}):y==="script"&&i.d.X(p,{crossOrigin:_,integrity:v,fetchPriority:S,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},sn.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var y=f(h.as,h.crossOrigin);i.d.M(p,{crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&i.d.M(p)},sn.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var y=h.as,_=f(y,h.crossOrigin);i.d.L(p,y,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},sn.preloadModule=function(p,h){if(typeof p=="string")if(h){var y=f(h.as,h.crossOrigin);i.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else i.d.m(p)},sn.requestFormReset=function(p){i.d.r(p)},sn.unstable_batchedUpdates=function(p,h){return p(h)},sn.useFormState=function(p,h,y){return u.H.useFormState(p,h,y)},sn.useFormStatus=function(){return u.H.useHostTransitionStatus()},sn.version="19.1.1",sn}var i1;function VC(){if(i1)return wg.exports;i1=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),wg.exports=JN(),wg.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s1;function eO(){if(s1)return ec;s1=1;var e=ZN(),t=Rh(),n=VC();function i(r){var s="https://react.dev/errors/"+r;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function l(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function u(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function f(r){if(l(r)!==r)throw Error(i(188))}function p(r){var s=r.alternate;if(!s){if(s=l(r),s===null)throw Error(i(188));return s!==r?null:r}for(var a=r,c=s;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return f(d),r;if(m===c)return f(d),s;m=m.sibling}throw Error(i(188))}if(a.return!==c.return)a=d,c=m;else{for(var b=!1,w=d.child;w;){if(w===a){b=!0,a=d,c=m;break}if(w===c){b=!0,c=d,a=m;break}w=w.sibling}if(!b){for(w=m.child;w;){if(w===a){b=!0,a=m,c=d;break}if(w===c){b=!0,c=m,a=d;break}w=w.sibling}if(!b)throw Error(i(189))}}if(a.alternate!==c)throw Error(i(190))}if(a.tag!==3)throw Error(i(188));return a.stateNode.current===a?r:s}function h(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r;for(r=r.child;r!==null;){if(s=h(r),s!==null)return s;r=r.sibling}return null}var y=Object.assign,_=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),M=Symbol.for("react.consumer"),R=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),A=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),F=Symbol.for("react.activity"),H=Symbol.for("react.memo_cache_sentinel"),z=Symbol.iterator;function G(r){return r===null||typeof r!="object"?null:(r=z&&r[z]||r["@@iterator"],typeof r=="function"?r:null)}var V=Symbol.for("react.client.reference");function te(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===V?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case x:return"Fragment";case T:return"Profiler";case D:return"StrictMode";case O:return"Suspense";case A:return"SuspenseList";case F:return"Activity"}if(typeof r=="object")switch(r.$$typeof){case S:return"Portal";case R:return(r.displayName||"Context")+".Provider";case M:return(r._context.displayName||"Context")+".Consumer";case I:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case j:return s=r.displayName||null,s!==null?s:te(r.type)||"Memo";case U:s=r._payload,r=r._init;try{return te(r(s))}catch{}}return null}var ue=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},ae=[],N=-1;function K(r){return{current:r}}function le(r){0>N||(r.current=ae[N],ae[N]=null,N--)}function ie(r,s){N++,ae[N]=r.current,r.current=s}var de=K(null),me=K(null),pe=K(null),Ae=K(null);function be(r,s){switch(ie(pe,s),ie(me,r),ie(de,null),s.nodeType){case 9:case 11:r=(r=s.documentElement)&&(r=r.namespaceURI)?Cx(r):0;break;default:if(r=s.tagName,s=s.namespaceURI)s=Cx(s),r=Tx(s,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}le(de),ie(de,r)}function De(){le(de),le(me),le(pe)}function $e(r){r.memoizedState!==null&&ie(Ae,r);var s=de.current,a=Tx(s,r.type);s!==a&&(ie(me,r),ie(de,a))}function vt(r){me.current===r&&(le(de),le(me)),Ae.current===r&&(le(Ae),Yl._currentValue=ne)}var mt=Object.prototype.hasOwnProperty,Ln=e.unstable_scheduleCallback,wt=e.unstable_cancelCallback,jn=e.unstable_shouldYield,Ur=e.unstable_requestPaint,Wt=e.unstable_now,rl=e.unstable_getCurrentPriorityLevel,Ds=e.unstable_ImmediatePriority,Io=e.unstable_UserBlockingPriority,Do=e.unstable_NormalPriority,zr=e.unstable_LowPriority,Ri=e.unstable_IdlePriority,Du=e.log,il=e.unstable_setDisableYieldValue,pn=null,_t=null;function sr(r){if(typeof Du=="function"&&il(r),_t&&typeof _t.setStrictMode=="function")try{_t.setStrictMode(pn,r)}catch{}}var Yt=Math.clz32?Math.clz32:ku,pp=Math.log,xr=Math.LN2;function ku(r){return r>>>=0,r===0?32:31-(pp(r)/xr|0)|0}var ks=256,Ns=4194304;function Br(r){var s=r&42;if(s!==0)return s;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return r}}function Os(r,s,a){var c=r.pendingLanes;if(c===0)return 0;var d=0,m=r.suspendedLanes,b=r.pingedLanes;r=r.warmLanes;var w=c&134217727;return w!==0?(c=w&~m,c!==0?d=Br(c):(b&=w,b!==0?d=Br(b):a||(a=w&~r,a!==0&&(d=Br(a))))):(w=c&~m,w!==0?d=Br(w):b!==0?d=Br(b):a||(a=c&~r,a!==0&&(d=Br(a)))),d===0?0:s!==0&&s!==d&&(s&m)===0&&(m=d&-d,a=s&-s,m>=a||m===32&&(a&4194048)!==0)?s:d}function wr(r,s){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&s)===0}function Nu(r,s){switch(r){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ko(){var r=ks;return ks<<=1,(ks&4194048)===0&&(ks=256),r}function Ou(){var r=Ns;return Ns<<=1,(Ns&62914560)===0&&(Ns=4194304),r}function No(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function Ms(r,s){r.pendingLanes|=s,s!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function Mu(r,s,a,c,d,m){var b=r.pendingLanes;r.pendingLanes=a,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=a,r.entangledLanes&=a,r.errorRecoveryDisabledLanes&=a,r.shellSuspendCounter=0;var w=r.entanglements,L=r.expirationTimes,Q=r.hiddenUpdates;for(a=b&~a;0<a;){var re=31-Yt(a),oe=1<<re;w[re]=0,L[re]=-1;var Z=Q[re];if(Z!==null)for(Q[re]=null,re=0;re<Z.length;re++){var J=Z[re];J!==null&&(J.lane&=-536870913)}a&=~oe}c!==0&&Ls(r,c,0),m!==0&&d===0&&r.tag!==0&&(r.suspendedLanes|=m&~(b&~s))}function Ls(r,s,a){r.pendingLanes|=s,r.suspendedLanes&=~s;var c=31-Yt(s);r.entangledLanes|=s,r.entanglements[c]=r.entanglements[c]|1073741824|a&4194090}function js(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var c=31-Yt(a),d=1<<c;d&s|r[c]&s&&(r[c]|=s),a&=~d}}function sl(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function ol(r){return r&=-r,2<r?8<r?(r&134217727)!==0?32:268435456:8:2}function $(){var r=X.p;return r!==0?r:(r=window.event,r===void 0?32:Vx(r.type))}function W(r,s){var a=X.p;try{return X.p=r,s()}finally{X.p=a}}var ee=Math.random().toString(36).slice(2),ce="__reactFiber$"+ee,fe="__reactProps$"+ee,ye="__reactContainer$"+ee,xe="__reactEvents$"+ee,ve="__reactListeners$"+ee,Ee="__reactHandles$"+ee,Te="__reactResources$"+ee,_e="__reactMarker$"+ee;function Se(r){delete r[ce],delete r[fe],delete r[xe],delete r[ve],delete r[Ee]}function Ue(r){var s=r[ce];if(s)return s;for(var a=r.parentNode;a;){if(s=a[ye]||a[ce]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=Dx(r);r!==null;){if(a=r[ce])return a;r=Dx(r)}return s}r=a,a=r.parentNode}return null}function Xe(r){if(r=r[ce]||r[ye]){var s=r.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return r}return null}function gt(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r.stateNode;throw Error(i(33))}function Et(r){var s=r[Te];return s||(s=r[Te]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function Me(r){r[_e]=!0}var it=new Set,Er={};function wn(r,s){ln(r,s),ln(r+"Capture",s)}function ln(r,s){for(Er[r]=s,r=0;r<s.length;r++)it.add(s[r])}var Pn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Oo={},Ai={};function Hr(r){return mt.call(Ai,r)?!0:mt.call(Oo,r)?!1:Pn.test(r)?Ai[r]=!0:(Oo[r]=!0,!1)}function Fr(r,s,a){if(Hr(s))if(a===null)r.removeAttribute(s);else{switch(typeof a){case"undefined":case"function":case"symbol":r.removeAttribute(s);return;case"boolean":var c=s.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){r.removeAttribute(s);return}}r.setAttribute(s,""+a)}}function qr(r,s,a){if(a===null)r.removeAttribute(s);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(s);return}r.setAttribute(s,""+a)}}function Le(r,s,a,c){if(c===null)r.removeAttribute(a);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(a);return}r.setAttributeNS(s,a,""+c)}}var kt,Vr;function mn(r){if(kt===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);kt=s&&s[1]||"",Vr=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+kt+r+Vr}var bt=!1;function Ii(r,s){if(!r||bt)return"";bt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(s){var oe=function(){throw Error()};if(Object.defineProperty(oe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(oe,[])}catch(J){var Z=J}Reflect.construct(r,[],oe)}else{try{oe.call()}catch(J){Z=J}r.call(oe.prototype)}}else{try{throw Error()}catch(J){Z=J}(oe=r())&&typeof oe.catch=="function"&&oe.catch(function(){})}}catch(J){if(J&&Z&&typeof J.stack=="string")return[J.stack,Z.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=c.DetermineComponentFrameRoot(),b=m[0],w=m[1];if(b&&w){var L=b.split(`
`),Q=w.split(`
`);for(d=c=0;c<L.length&&!L[c].includes("DetermineComponentFrameRoot");)c++;for(;d<Q.length&&!Q[d].includes("DetermineComponentFrameRoot");)d++;if(c===L.length||d===Q.length)for(c=L.length-1,d=Q.length-1;1<=c&&0<=d&&L[c]!==Q[d];)d--;for(;1<=c&&0<=d;c--,d--)if(L[c]!==Q[d]){if(c!==1||d!==1)do if(c--,d--,0>d||L[c]!==Q[d]){var re=`
`+L[c].replace(" at new "," at ");return r.displayName&&re.includes("<anonymous>")&&(re=re.replace("<anonymous>",r.displayName)),re}while(1<=c&&0<=d);break}}}finally{bt=!1,Error.prepareStackTrace=a}return(a=r?r.displayName||r.name:"")?mn(a):""}function Lu(r){switch(r.tag){case 26:case 27:case 5:return mn(r.type);case 16:return mn("Lazy");case 13:return mn("Suspense");case 19:return mn("SuspenseList");case 0:case 15:return Ii(r.type,!1);case 11:return Ii(r.type.render,!1);case 1:return Ii(r.type,!0);case 31:return mn("Activity");default:return""}}function ju(r){try{var s="";do s+=Lu(r),r=r.return;while(r);return s}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function $n(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function bb(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function HD(r){var s=bb(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),c=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return d.call(this)},set:function(b){c=""+b,m.call(this,b)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(b){c=""+b},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function Pu(r){r._valueTracker||(r._valueTracker=HD(r))}function Sb(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return r&&(c=bb(r)?r.checked?"true":"false":r.value),r=c,r!==a?(s.setValue(r),!0):!1}function $u(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}var FD=/[\n"\\]/g;function Un(r){return r.replace(FD,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function mp(r,s,a,c,d,m,b,w){r.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?r.type=b:r.removeAttribute("type"),s!=null?b==="number"?(s===0&&r.value===""||r.value!=s)&&(r.value=""+$n(s)):r.value!==""+$n(s)&&(r.value=""+$n(s)):b!=="submit"&&b!=="reset"||r.removeAttribute("value"),s!=null?gp(r,b,$n(s)):a!=null?gp(r,b,$n(a)):c!=null&&r.removeAttribute("value"),d==null&&m!=null&&(r.defaultChecked=!!m),d!=null&&(r.checked=d&&typeof d!="function"&&typeof d!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?r.name=""+$n(w):r.removeAttribute("name")}function xb(r,s,a,c,d,m,b,w){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(r.type=m),s!=null||a!=null){if(!(m!=="submit"&&m!=="reset"||s!=null))return;a=a!=null?""+$n(a):"",s=s!=null?""+$n(s):a,w||s===r.value||(r.value=s),r.defaultValue=s}c=c??d,c=typeof c!="function"&&typeof c!="symbol"&&!!c,r.checked=w?r.checked:!!c,r.defaultChecked=!!c,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(r.name=b)}function gp(r,s,a){s==="number"&&$u(r.ownerDocument)===r||r.defaultValue===""+a||(r.defaultValue=""+a)}function Mo(r,s,a,c){if(r=r.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<r.length;a++)d=s.hasOwnProperty("$"+r[a].value),r[a].selected!==d&&(r[a].selected=d),d&&c&&(r[a].defaultSelected=!0)}else{for(a=""+$n(a),s=null,d=0;d<r.length;d++){if(r[d].value===a){r[d].selected=!0,c&&(r[d].defaultSelected=!0);return}s!==null||r[d].disabled||(s=r[d])}s!==null&&(s.selected=!0)}}function wb(r,s,a){if(s!=null&&(s=""+$n(s),s!==r.value&&(r.value=s),a==null)){r.defaultValue!==s&&(r.defaultValue=s);return}r.defaultValue=a!=null?""+$n(a):""}function Eb(r,s,a,c){if(s==null){if(c!=null){if(a!=null)throw Error(i(92));if(ue(c)){if(1<c.length)throw Error(i(93));c=c[0]}a=c}a==null&&(a=""),s=a}a=$n(s),r.defaultValue=a,c=r.textContent,c===a&&c!==""&&c!==null&&(r.value=c)}function Lo(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var qD=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Cb(r,s,a){var c=s.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?c?r.setProperty(s,""):s==="float"?r.cssFloat="":r[s]="":c?r.setProperty(s,a):typeof a!="number"||a===0||qD.has(s)?s==="float"?r.cssFloat=a:r[s]=(""+a).trim():r[s]=a+"px"}function Tb(r,s,a){if(s!=null&&typeof s!="object")throw Error(i(62));if(r=r.style,a!=null){for(var c in a)!a.hasOwnProperty(c)||s!=null&&s.hasOwnProperty(c)||(c.indexOf("--")===0?r.setProperty(c,""):c==="float"?r.cssFloat="":r[c]="");for(var d in s)c=s[d],s.hasOwnProperty(d)&&a[d]!==c&&Cb(r,d,c)}else for(var m in s)s.hasOwnProperty(m)&&Cb(r,m,s[m])}function yp(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var VD=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),GD=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Uu(r){return GD.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}var vp=null;function _p(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var jo=null,Po=null;function Rb(r){var s=Xe(r);if(s&&(r=s.stateNode)){var a=r[fe]||null;e:switch(r=s.stateNode,s.type){case"input":if(mp(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Un(""+s)+'"][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==r&&c.form===r.form){var d=c[fe]||null;if(!d)throw Error(i(90));mp(c,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(s=0;s<a.length;s++)c=a[s],c.form===r.form&&Sb(c)}break e;case"textarea":wb(r,a.value,a.defaultValue);break e;case"select":s=a.value,s!=null&&Mo(r,!!a.multiple,s,!1)}}}var bp=!1;function Ab(r,s,a){if(bp)return r(s,a);bp=!0;try{var c=r(s);return c}finally{if(bp=!1,(jo!==null||Po!==null)&&(Ed(),jo&&(s=jo,r=Po,Po=jo=null,Rb(s),r)))for(s=0;s<r.length;s++)Rb(r[s])}}function al(r,s){var a=r.stateNode;if(a===null)return null;var c=a[fe]||null;if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(i(231,s,typeof a));return a}var Gr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sp=!1;if(Gr)try{var ll={};Object.defineProperty(ll,"passive",{get:function(){Sp=!0}}),window.addEventListener("test",ll,ll),window.removeEventListener("test",ll,ll)}catch{Sp=!1}var Di=null,xp=null,zu=null;function Ib(){if(zu)return zu;var r,s=xp,a=s.length,c,d="value"in Di?Di.value:Di.textContent,m=d.length;for(r=0;r<a&&s[r]===d[r];r++);var b=a-r;for(c=1;c<=b&&s[a-c]===d[m-c];c++);return zu=d.slice(r,1<c?1-c:void 0)}function Bu(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Hu(){return!0}function Db(){return!1}function gn(r){function s(a,c,d,m,b){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var w in r)r.hasOwnProperty(w)&&(a=r[w],this[w]=a?a(m):m[w]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Hu:Db,this.isPropagationStopped=Db,this}return y(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Hu)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Hu)},persist:function(){},isPersistent:Hu}),s}var Ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fu=gn(Ps),cl=y({},Ps,{view:0,detail:0}),WD=gn(cl),wp,Ep,ul,qu=y({},cl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tp,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ul&&(ul&&r.type==="mousemove"?(wp=r.screenX-ul.screenX,Ep=r.screenY-ul.screenY):Ep=wp=0,ul=r),wp)},movementY:function(r){return"movementY"in r?r.movementY:Ep}}),kb=gn(qu),YD=y({},qu,{dataTransfer:0}),QD=gn(YD),KD=y({},cl,{relatedTarget:0}),Cp=gn(KD),XD=y({},Ps,{animationName:0,elapsedTime:0,pseudoElement:0}),ZD=gn(XD),JD=y({},Ps,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),ek=gn(JD),tk=y({},Ps,{data:0}),Nb=gn(tk),nk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ik={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sk(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=ik[r])?!!s[r]:!1}function Tp(){return sk}var ok=y({},cl,{key:function(r){if(r.key){var s=nk[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Bu(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?rk[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tp,charCode:function(r){return r.type==="keypress"?Bu(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Bu(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),ak=gn(ok),lk=y({},qu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ob=gn(lk),ck=y({},cl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tp}),uk=gn(ck),dk=y({},Ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),fk=gn(dk),hk=y({},qu,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),pk=gn(hk),mk=y({},Ps,{newState:0,oldState:0}),gk=gn(mk),yk=[9,13,27,32],Rp=Gr&&"CompositionEvent"in window,dl=null;Gr&&"documentMode"in document&&(dl=document.documentMode);var vk=Gr&&"TextEvent"in window&&!dl,Mb=Gr&&(!Rp||dl&&8<dl&&11>=dl),Lb=" ",jb=!1;function Pb(r,s){switch(r){case"keyup":return yk.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $b(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var $o=!1;function _k(r,s){switch(r){case"compositionend":return $b(s);case"keypress":return s.which!==32?null:(jb=!0,Lb);case"textInput":return r=s.data,r===Lb&&jb?null:r;default:return null}}function bk(r,s){if($o)return r==="compositionend"||!Rp&&Pb(r,s)?(r=Ib(),zu=xp=Di=null,$o=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Mb&&s.locale!=="ko"?null:s.data;default:return null}}var Sk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ub(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!Sk[r.type]:s==="textarea"}function zb(r,s,a,c){jo?Po?Po.push(c):Po=[c]:jo=c,s=Dd(s,"onChange"),0<s.length&&(a=new Fu("onChange","change",null,a,c),r.push({event:a,listeners:s}))}var fl=null,hl=null;function xk(r){bx(r,0)}function Vu(r){var s=gt(r);if(Sb(s))return r}function Bb(r,s){if(r==="change")return s}var Hb=!1;if(Gr){var Ap;if(Gr){var Ip="oninput"in document;if(!Ip){var Fb=document.createElement("div");Fb.setAttribute("oninput","return;"),Ip=typeof Fb.oninput=="function"}Ap=Ip}else Ap=!1;Hb=Ap&&(!document.documentMode||9<document.documentMode)}function qb(){fl&&(fl.detachEvent("onpropertychange",Vb),hl=fl=null)}function Vb(r){if(r.propertyName==="value"&&Vu(hl)){var s=[];zb(s,hl,r,_p(r)),Ab(xk,s)}}function wk(r,s,a){r==="focusin"?(qb(),fl=s,hl=a,fl.attachEvent("onpropertychange",Vb)):r==="focusout"&&qb()}function Ek(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Vu(hl)}function Ck(r,s){if(r==="click")return Vu(s)}function Tk(r,s){if(r==="input"||r==="change")return Vu(s)}function Rk(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var En=typeof Object.is=="function"?Object.is:Rk;function pl(r,s){if(En(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!mt.call(s,d)||!En(r[d],s[d]))return!1}return!0}function Gb(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Wb(r,s){var a=Gb(r);r=0;for(var c;a;){if(a.nodeType===3){if(c=r+a.textContent.length,r<=s&&c>=s)return{node:a,offset:s-r};r=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Gb(a)}}function Yb(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?Yb(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Qb(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var s=$u(r.document);s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=$u(r.document)}return s}function Dp(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}var Ak=Gr&&"documentMode"in document&&11>=document.documentMode,Uo=null,kp=null,ml=null,Np=!1;function Kb(r,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Np||Uo==null||Uo!==$u(c)||(c=Uo,"selectionStart"in c&&Dp(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ml&&pl(ml,c)||(ml=c,c=Dd(kp,"onSelect"),0<c.length&&(s=new Fu("onSelect","select",null,s,a),r.push({event:s,listeners:c}),s.target=Uo)))}function $s(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var zo={animationend:$s("Animation","AnimationEnd"),animationiteration:$s("Animation","AnimationIteration"),animationstart:$s("Animation","AnimationStart"),transitionrun:$s("Transition","TransitionRun"),transitionstart:$s("Transition","TransitionStart"),transitioncancel:$s("Transition","TransitionCancel"),transitionend:$s("Transition","TransitionEnd")},Op={},Xb={};Gr&&(Xb=document.createElement("div").style,"AnimationEvent"in window||(delete zo.animationend.animation,delete zo.animationiteration.animation,delete zo.animationstart.animation),"TransitionEvent"in window||delete zo.transitionend.transition);function Us(r){if(Op[r])return Op[r];if(!zo[r])return r;var s=zo[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in Xb)return Op[r]=s[a];return r}var Zb=Us("animationend"),Jb=Us("animationiteration"),e0=Us("animationstart"),Ik=Us("transitionrun"),Dk=Us("transitionstart"),kk=Us("transitioncancel"),t0=Us("transitionend"),n0=new Map,Mp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Mp.push("scrollEnd");function or(r,s){n0.set(r,s),wn(s,[r])}var r0=new WeakMap;function zn(r,s){if(typeof r=="object"&&r!==null){var a=r0.get(r);return a!==void 0?a:(s={value:r,source:s,stack:ju(s)},r0.set(r,s),s)}return{value:r,source:s,stack:ju(s)}}var Bn=[],Bo=0,Lp=0;function Gu(){for(var r=Bo,s=Lp=Bo=0;s<r;){var a=Bn[s];Bn[s++]=null;var c=Bn[s];Bn[s++]=null;var d=Bn[s];Bn[s++]=null;var m=Bn[s];if(Bn[s++]=null,c!==null&&d!==null){var b=c.pending;b===null?d.next=d:(d.next=b.next,b.next=d),c.pending=d}m!==0&&i0(a,d,m)}}function Wu(r,s,a,c){Bn[Bo++]=r,Bn[Bo++]=s,Bn[Bo++]=a,Bn[Bo++]=c,Lp|=c,r.lanes|=c,r=r.alternate,r!==null&&(r.lanes|=c)}function jp(r,s,a,c){return Wu(r,s,a,c),Yu(r)}function Ho(r,s){return Wu(r,null,null,s),Yu(r)}function i0(r,s,a){r.lanes|=a;var c=r.alternate;c!==null&&(c.lanes|=a);for(var d=!1,m=r.return;m!==null;)m.childLanes|=a,c=m.alternate,c!==null&&(c.childLanes|=a),m.tag===22&&(r=m.stateNode,r===null||r._visibility&1||(d=!0)),r=m,m=m.return;return r.tag===3?(m=r.stateNode,d&&s!==null&&(d=31-Yt(a),r=m.hiddenUpdates,c=r[d],c===null?r[d]=[s]:c.push(s),s.lane=a|536870912),m):null}function Yu(r){if(50<zl)throw zl=0,Hm=null,Error(i(185));for(var s=r.return;s!==null;)r=s,s=r.return;return r.tag===3?r.stateNode:null}var Fo={};function Nk(r,s,a,c){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cn(r,s,a,c){return new Nk(r,s,a,c)}function Pp(r){return r=r.prototype,!(!r||!r.isReactComponent)}function Wr(r,s){var a=r.alternate;return a===null?(a=Cn(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&65011712,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a.refCleanup=r.refCleanup,a}function s0(r,s){r.flags&=65011714;var a=r.alternate;return a===null?(r.childLanes=0,r.lanes=s,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=a.childLanes,r.lanes=a.lanes,r.child=a.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=a.memoizedProps,r.memoizedState=a.memoizedState,r.updateQueue=a.updateQueue,r.type=a.type,s=a.dependencies,r.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),r}function Qu(r,s,a,c,d,m){var b=0;if(c=r,typeof r=="function")Pp(r)&&(b=1);else if(typeof r=="string")b=MN(r,a,de.current)?26:r==="html"||r==="head"||r==="body"?27:5;else e:switch(r){case F:return r=Cn(31,a,s,d),r.elementType=F,r.lanes=m,r;case x:return zs(a.children,d,m,s);case D:b=8,d|=24;break;case T:return r=Cn(12,a,s,d|2),r.elementType=T,r.lanes=m,r;case O:return r=Cn(13,a,s,d),r.elementType=O,r.lanes=m,r;case A:return r=Cn(19,a,s,d),r.elementType=A,r.lanes=m,r;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case k:case R:b=10;break e;case M:b=9;break e;case I:b=11;break e;case j:b=14;break e;case U:b=16,c=null;break e}b=29,a=Error(i(130,r===null?"null":typeof r,"")),c=null}return s=Cn(b,a,s,d),s.elementType=r,s.type=c,s.lanes=m,s}function zs(r,s,a,c){return r=Cn(7,r,c,s),r.lanes=a,r}function $p(r,s,a){return r=Cn(6,r,null,s),r.lanes=a,r}function Up(r,s,a){return s=Cn(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}var qo=[],Vo=0,Ku=null,Xu=0,Hn=[],Fn=0,Bs=null,Yr=1,Qr="";function Hs(r,s){qo[Vo++]=Xu,qo[Vo++]=Ku,Ku=r,Xu=s}function o0(r,s,a){Hn[Fn++]=Yr,Hn[Fn++]=Qr,Hn[Fn++]=Bs,Bs=r;var c=Yr;r=Qr;var d=32-Yt(c)-1;c&=~(1<<d),a+=1;var m=32-Yt(s)+d;if(30<m){var b=d-d%5;m=(c&(1<<b)-1).toString(32),c>>=b,d-=b,Yr=1<<32-Yt(s)+d|a<<d|c,Qr=m+r}else Yr=1<<m|a<<d|c,Qr=r}function zp(r){r.return!==null&&(Hs(r,1),o0(r,1,0))}function Bp(r){for(;r===Ku;)Ku=qo[--Vo],qo[Vo]=null,Xu=qo[--Vo],qo[Vo]=null;for(;r===Bs;)Bs=Hn[--Fn],Hn[Fn]=null,Qr=Hn[--Fn],Hn[Fn]=null,Yr=Hn[--Fn],Hn[Fn]=null}var cn=null,Ct=null,Ze=!1,Fs=null,Cr=!1,Hp=Error(i(519));function qs(r){var s=Error(i(418,""));throw vl(zn(s,r)),Hp}function a0(r){var s=r.stateNode,a=r.type,c=r.memoizedProps;switch(s[ce]=r,s[fe]=c,a){case"dialog":Ge("cancel",s),Ge("close",s);break;case"iframe":case"object":case"embed":Ge("load",s);break;case"video":case"audio":for(a=0;a<Hl.length;a++)Ge(Hl[a],s);break;case"source":Ge("error",s);break;case"img":case"image":case"link":Ge("error",s),Ge("load",s);break;case"details":Ge("toggle",s);break;case"input":Ge("invalid",s),xb(s,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),Pu(s);break;case"select":Ge("invalid",s);break;case"textarea":Ge("invalid",s),Eb(s,c.value,c.defaultValue,c.children),Pu(s)}a=c.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||s.textContent===""+a||c.suppressHydrationWarning===!0||Ex(s.textContent,a)?(c.popover!=null&&(Ge("beforetoggle",s),Ge("toggle",s)),c.onScroll!=null&&Ge("scroll",s),c.onScrollEnd!=null&&Ge("scrollend",s),c.onClick!=null&&(s.onclick=kd),s=!0):s=!1,s||qs(r)}function l0(r){for(cn=r.return;cn;)switch(cn.tag){case 5:case 13:Cr=!1;return;case 27:case 3:Cr=!0;return;default:cn=cn.return}}function gl(r){if(r!==cn)return!1;if(!Ze)return l0(r),Ze=!0,!1;var s=r.tag,a;if((a=s!==3&&s!==27)&&((a=s===5)&&(a=r.type,a=!(a!=="form"&&a!=="button")||ig(r.type,r.memoizedProps)),a=!a),a&&Ct&&qs(r),l0(r),s===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(i(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8)if(a=r.data,a==="/$"){if(s===0){Ct=lr(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++;r=r.nextSibling}Ct=null}}else s===27?(s=Ct,Gi(r.type)?(r=lg,lg=null,Ct=r):Ct=s):Ct=cn?lr(r.stateNode.nextSibling):null;return!0}function yl(){Ct=cn=null,Ze=!1}function c0(){var r=Fs;return r!==null&&(_n===null?_n=r:_n.push.apply(_n,r),Fs=null),r}function vl(r){Fs===null?Fs=[r]:Fs.push(r)}var Fp=K(null),Vs=null,Kr=null;function ki(r,s,a){ie(Fp,s._currentValue),s._currentValue=a}function Xr(r){r._currentValue=Fp.current,le(Fp)}function qp(r,s,a){for(;r!==null;){var c=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),r===a)break;r=r.return}}function Vp(r,s,a,c){var d=r.child;for(d!==null&&(d.return=r);d!==null;){var m=d.dependencies;if(m!==null){var b=d.child;m=m.firstContext;e:for(;m!==null;){var w=m;m=d;for(var L=0;L<s.length;L++)if(w.context===s[L]){m.lanes|=a,w=m.alternate,w!==null&&(w.lanes|=a),qp(m.return,a,r),c||(b=null);break e}m=w.next}}else if(d.tag===18){if(b=d.return,b===null)throw Error(i(341));b.lanes|=a,m=b.alternate,m!==null&&(m.lanes|=a),qp(b,a,r),b=null}else b=d.child;if(b!==null)b.return=d;else for(b=d;b!==null;){if(b===r){b=null;break}if(d=b.sibling,d!==null){d.return=b.return,b=d;break}b=b.return}d=b}}function _l(r,s,a,c){r=null;for(var d=s,m=!1;d!==null;){if(!m){if((d.flags&524288)!==0)m=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var b=d.alternate;if(b===null)throw Error(i(387));if(b=b.memoizedProps,b!==null){var w=d.type;En(d.pendingProps.value,b.value)||(r!==null?r.push(w):r=[w])}}else if(d===Ae.current){if(b=d.alternate,b===null)throw Error(i(387));b.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(r!==null?r.push(Yl):r=[Yl])}d=d.return}r!==null&&Vp(s,r,a,c),s.flags|=262144}function Zu(r){for(r=r.firstContext;r!==null;){if(!En(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function Gs(r){Vs=r,Kr=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function rn(r){return u0(Vs,r)}function Ju(r,s){return Vs===null&&Gs(r),u0(r,s)}function u0(r,s){var a=s._currentValue;if(s={context:s,memoizedValue:a,next:null},Kr===null){if(r===null)throw Error(i(308));Kr=s,r.dependencies={lanes:0,firstContext:s},r.flags|=524288}else Kr=Kr.next=s;return a}var Ok=typeof AbortController<"u"?AbortController:function(){var r=[],s=this.signal={aborted:!1,addEventListener:function(a,c){r.push(c)}};this.abort=function(){s.aborted=!0,r.forEach(function(a){return a()})}},Mk=e.unstable_scheduleCallback,Lk=e.unstable_NormalPriority,Lt={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Gp(){return{controller:new Ok,data:new Map,refCount:0}}function bl(r){r.refCount--,r.refCount===0&&Mk(Lk,function(){r.controller.abort()})}var Sl=null,Wp=0,Go=0,Wo=null;function jk(r,s){if(Sl===null){var a=Sl=[];Wp=0,Go=Qm(),Wo={status:"pending",value:void 0,then:function(c){a.push(c)}}}return Wp++,s.then(d0,d0),s}function d0(){if(--Wp===0&&Sl!==null){Wo!==null&&(Wo.status="fulfilled");var r=Sl;Sl=null,Go=0,Wo=null;for(var s=0;s<r.length;s++)(0,r[s])()}}function Pk(r,s){var a=[],c={status:"pending",value:null,reason:null,then:function(d){a.push(d)}};return r.then(function(){c.status="fulfilled",c.value=s;for(var d=0;d<a.length;d++)(0,a[d])(s)},function(d){for(c.status="rejected",c.reason=d,d=0;d<a.length;d++)(0,a[d])(void 0)}),c}var f0=P.S;P.S=function(r,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&jk(r,s),f0!==null&&f0(r,s)};var Ws=K(null);function Yp(){var r=Ws.current;return r!==null?r:dt.pooledCache}function ed(r,s){s===null?ie(Ws,Ws.current):ie(Ws,s.pool)}function h0(){var r=Yp();return r===null?null:{parent:Lt._currentValue,pool:r}}var xl=Error(i(460)),p0=Error(i(474)),td=Error(i(542)),Qp={then:function(){}};function m0(r){return r=r.status,r==="fulfilled"||r==="rejected"}function nd(){}function g0(r,s,a){switch(a=r[a],a===void 0?r.push(s):a!==s&&(s.then(nd,nd),s=a),s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,v0(r),r;default:if(typeof s.status=="string")s.then(nd,nd);else{if(r=dt,r!==null&&100<r.shellSuspendCounter)throw Error(i(482));r=s,r.status="pending",r.then(function(c){if(s.status==="pending"){var d=s;d.status="fulfilled",d.value=c}},function(c){if(s.status==="pending"){var d=s;d.status="rejected",d.reason=c}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,v0(r),r}throw wl=s,xl}}var wl=null;function y0(){if(wl===null)throw Error(i(459));var r=wl;return wl=null,r}function v0(r){if(r===xl||r===td)throw Error(i(483))}var Ni=!1;function Kp(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Xp(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function Oi(r){return{lane:r,tag:0,payload:null,callback:null,next:null}}function Mi(r,s,a){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,(nt&2)!==0){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,s=Yu(r),i0(r,null,a),s}return Wu(r,c,s,a),Yu(r)}function El(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194048)!==0)){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,js(r,a)}}function Zp(r,s){var a=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var b={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};m===null?d=m=b:m=m.next=b,a=a.next}while(a!==null);m===null?d=m=s:m=m.next=s}else d=m=s;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,callbacks:c.callbacks},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}var Jp=!1;function Cl(){if(Jp){var r=Wo;if(r!==null)throw r}}function Tl(r,s,a,c){Jp=!1;var d=r.updateQueue;Ni=!1;var m=d.firstBaseUpdate,b=d.lastBaseUpdate,w=d.shared.pending;if(w!==null){d.shared.pending=null;var L=w,Q=L.next;L.next=null,b===null?m=Q:b.next=Q,b=L;var re=r.alternate;re!==null&&(re=re.updateQueue,w=re.lastBaseUpdate,w!==b&&(w===null?re.firstBaseUpdate=Q:w.next=Q,re.lastBaseUpdate=L))}if(m!==null){var oe=d.baseState;b=0,re=Q=L=null,w=m;do{var Z=w.lane&-536870913,J=Z!==w.lane;if(J?(Ye&Z)===Z:(c&Z)===Z){Z!==0&&Z===Go&&(Jp=!0),re!==null&&(re=re.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var Oe=r,Re=w;Z=s;var at=a;switch(Re.tag){case 1:if(Oe=Re.payload,typeof Oe=="function"){oe=Oe.call(at,oe,Z);break e}oe=Oe;break e;case 3:Oe.flags=Oe.flags&-65537|128;case 0:if(Oe=Re.payload,Z=typeof Oe=="function"?Oe.call(at,oe,Z):Oe,Z==null)break e;oe=y({},oe,Z);break e;case 2:Ni=!0}}Z=w.callback,Z!==null&&(r.flags|=64,J&&(r.flags|=8192),J=d.callbacks,J===null?d.callbacks=[Z]:J.push(Z))}else J={lane:Z,tag:w.tag,payload:w.payload,callback:w.callback,next:null},re===null?(Q=re=J,L=oe):re=re.next=J,b|=Z;if(w=w.next,w===null){if(w=d.shared.pending,w===null)break;J=w,w=J.next,J.next=null,d.lastBaseUpdate=J,d.shared.pending=null}}while(!0);re===null&&(L=oe),d.baseState=L,d.firstBaseUpdate=Q,d.lastBaseUpdate=re,m===null&&(d.shared.lanes=0),Hi|=b,r.lanes=b,r.memoizedState=oe}}function _0(r,s){if(typeof r!="function")throw Error(i(191,r));r.call(s)}function b0(r,s){var a=r.callbacks;if(a!==null)for(r.callbacks=null,r=0;r<a.length;r++)_0(a[r],s)}var Yo=K(null),rd=K(0);function S0(r,s){r=ii,ie(rd,r),ie(Yo,s),ii=r|s.baseLanes}function em(){ie(rd,ii),ie(Yo,Yo.current)}function tm(){ii=rd.current,le(Yo),le(rd)}var Li=0,Be=null,st=null,Nt=null,id=!1,Qo=!1,Ys=!1,sd=0,Rl=0,Ko=null,$k=0;function It(){throw Error(i(321))}function nm(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!En(r[a],s[a]))return!1;return!0}function rm(r,s,a,c,d,m){return Li=m,Be=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,P.H=r===null||r.memoizedState===null?iS:sS,Ys=!1,m=a(c,d),Ys=!1,Qo&&(m=w0(s,a,c,d)),x0(r),m}function x0(r){P.H=dd;var s=st!==null&&st.next!==null;if(Li=0,Nt=st=Be=null,id=!1,Rl=0,Ko=null,s)throw Error(i(300));r===null||Ut||(r=r.dependencies,r!==null&&Zu(r)&&(Ut=!0))}function w0(r,s,a,c){Be=r;var d=0;do{if(Qo&&(Ko=null),Rl=0,Qo=!1,25<=d)throw Error(i(301));if(d+=1,Nt=st=null,r.updateQueue!=null){var m=r.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}P.H=Vk,m=s(a,c)}while(Qo);return m}function Uk(){var r=P.H,s=r.useState()[0];return s=typeof s.then=="function"?Al(s):s,r=r.useState()[0],(st!==null?st.memoizedState:null)!==r&&(Be.flags|=1024),s}function im(){var r=sd!==0;return sd=0,r}function sm(r,s,a){s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~a}function om(r){if(id){for(r=r.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}id=!1}Li=0,Nt=st=Be=null,Qo=!1,Rl=sd=0,Ko=null}function yn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?Be.memoizedState=Nt=r:Nt=Nt.next=r,Nt}function Ot(){if(st===null){var r=Be.alternate;r=r!==null?r.memoizedState:null}else r=st.next;var s=Nt===null?Be.memoizedState:Nt.next;if(s!==null)Nt=s,st=r;else{if(r===null)throw Be.alternate===null?Error(i(467)):Error(i(310));st=r,r={memoizedState:st.memoizedState,baseState:st.baseState,baseQueue:st.baseQueue,queue:st.queue,next:null},Nt===null?Be.memoizedState=Nt=r:Nt=Nt.next=r}return Nt}function am(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Al(r){var s=Rl;return Rl+=1,Ko===null&&(Ko=[]),r=g0(Ko,r,s),s=Be,(Nt===null?s.memoizedState:Nt.next)===null&&(s=s.alternate,P.H=s===null||s.memoizedState===null?iS:sS),r}function od(r){if(r!==null&&typeof r=="object"){if(typeof r.then=="function")return Al(r);if(r.$$typeof===R)return rn(r)}throw Error(i(438,String(r)))}function lm(r){var s=null,a=Be.updateQueue;if(a!==null&&(s=a.memoCache),s==null){var c=Be.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(s={data:c.data.map(function(d){return d.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),a===null&&(a=am(),Be.updateQueue=a),a.memoCache=s,a=s.data[s.index],a===void 0)for(a=s.data[s.index]=Array(r),c=0;c<r;c++)a[c]=H;return s.index++,a}function Zr(r,s){return typeof s=="function"?s(r):s}function ad(r){var s=Ot();return cm(s,st,r)}function cm(r,s,a){var c=r.queue;if(c===null)throw Error(i(311));c.lastRenderedReducer=a;var d=r.baseQueue,m=c.pending;if(m!==null){if(d!==null){var b=d.next;d.next=m.next,m.next=b}s.baseQueue=d=m,c.pending=null}if(m=r.baseState,d===null)r.memoizedState=m;else{s=d.next;var w=b=null,L=null,Q=s,re=!1;do{var oe=Q.lane&-536870913;if(oe!==Q.lane?(Ye&oe)===oe:(Li&oe)===oe){var Z=Q.revertLane;if(Z===0)L!==null&&(L=L.next={lane:0,revertLane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),oe===Go&&(re=!0);else if((Li&Z)===Z){Q=Q.next,Z===Go&&(re=!0);continue}else oe={lane:0,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},L===null?(w=L=oe,b=m):L=L.next=oe,Be.lanes|=Z,Hi|=Z;oe=Q.action,Ys&&a(m,oe),m=Q.hasEagerState?Q.eagerState:a(m,oe)}else Z={lane:oe,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},L===null?(w=L=Z,b=m):L=L.next=Z,Be.lanes|=oe,Hi|=oe;Q=Q.next}while(Q!==null&&Q!==s);if(L===null?b=m:L.next=w,!En(m,r.memoizedState)&&(Ut=!0,re&&(a=Wo,a!==null)))throw a;r.memoizedState=m,r.baseState=b,r.baseQueue=L,c.lastRenderedState=m}return d===null&&(c.lanes=0),[r.memoizedState,c.dispatch]}function um(r){var s=Ot(),a=s.queue;if(a===null)throw Error(i(311));a.lastRenderedReducer=r;var c=a.dispatch,d=a.pending,m=s.memoizedState;if(d!==null){a.pending=null;var b=d=d.next;do m=r(m,b.action),b=b.next;while(b!==d);En(m,s.memoizedState)||(Ut=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),a.lastRenderedState=m}return[m,c]}function E0(r,s,a){var c=Be,d=Ot(),m=Ze;if(m){if(a===void 0)throw Error(i(407));a=a()}else a=s();var b=!En((st||d).memoizedState,a);b&&(d.memoizedState=a,Ut=!0),d=d.queue;var w=R0.bind(null,c,d,r);if(Il(2048,8,w,[r]),d.getSnapshot!==s||b||Nt!==null&&Nt.memoizedState.tag&1){if(c.flags|=2048,Xo(9,ld(),T0.bind(null,c,d,a,s),null),dt===null)throw Error(i(349));m||(Li&124)!==0||C0(c,s,a)}return a}function C0(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=Be.updateQueue,s===null?(s=am(),Be.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function T0(r,s,a,c){s.value=a,s.getSnapshot=c,A0(s)&&I0(r)}function R0(r,s,a){return a(function(){A0(s)&&I0(r)})}function A0(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!En(r,a)}catch{return!0}}function I0(r){var s=Ho(r,2);s!==null&&Dn(s,r,2)}function dm(r){var s=yn();if(typeof r=="function"){var a=r;if(r=a(),Ys){sr(!0);try{a()}finally{sr(!1)}}}return s.memoizedState=s.baseState=r,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zr,lastRenderedState:r},s}function D0(r,s,a,c){return r.baseState=a,cm(r,st,typeof c=="function"?c:Zr)}function zk(r,s,a,c,d){if(ud(r))throw Error(i(485));if(r=s.action,r!==null){var m={payload:d,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){m.listeners.push(b)}};P.T!==null?a(!0):m.isTransition=!1,c(m),a=s.pending,a===null?(m.next=s.pending=m,k0(s,m)):(m.next=a.next,s.pending=a.next=m)}}function k0(r,s){var a=s.action,c=s.payload,d=r.state;if(s.isTransition){var m=P.T,b={};P.T=b;try{var w=a(d,c),L=P.S;L!==null&&L(b,w),N0(r,s,w)}catch(Q){fm(r,s,Q)}finally{P.T=m}}else try{m=a(d,c),N0(r,s,m)}catch(Q){fm(r,s,Q)}}function N0(r,s,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(c){O0(r,s,c)},function(c){return fm(r,s,c)}):O0(r,s,a)}function O0(r,s,a){s.status="fulfilled",s.value=a,M0(s),r.state=a,s=r.pending,s!==null&&(a=s.next,a===s?r.pending=null:(a=a.next,s.next=a,k0(r,a)))}function fm(r,s,a){var c=r.pending;if(r.pending=null,c!==null){c=c.next;do s.status="rejected",s.reason=a,M0(s),s=s.next;while(s!==c)}r.action=null}function M0(r){r=r.listeners;for(var s=0;s<r.length;s++)(0,r[s])()}function L0(r,s){return s}function j0(r,s){if(Ze){var a=dt.formState;if(a!==null){e:{var c=Be;if(Ze){if(Ct){t:{for(var d=Ct,m=Cr;d.nodeType!==8;){if(!m){d=null;break t}if(d=lr(d.nextSibling),d===null){d=null;break t}}m=d.data,d=m==="F!"||m==="F"?d:null}if(d){Ct=lr(d.nextSibling),c=d.data==="F!";break e}}qs(c)}c=!1}c&&(s=a[0])}}return a=yn(),a.memoizedState=a.baseState=s,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:L0,lastRenderedState:s},a.queue=c,a=tS.bind(null,Be,c),c.dispatch=a,c=dm(!1),m=ym.bind(null,Be,!1,c.queue),c=yn(),d={state:s,dispatch:null,action:r,pending:null},c.queue=d,a=zk.bind(null,Be,d,m,a),d.dispatch=a,c.memoizedState=r,[s,a,!1]}function P0(r){var s=Ot();return $0(s,st,r)}function $0(r,s,a){if(s=cm(r,s,L0)[0],r=ad(Zr)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var c=Al(s)}catch(b){throw b===xl?td:b}else c=s;s=Ot();var d=s.queue,m=d.dispatch;return a!==s.memoizedState&&(Be.flags|=2048,Xo(9,ld(),Bk.bind(null,d,a),null)),[c,m,r]}function Bk(r,s){r.action=s}function U0(r){var s=Ot(),a=st;if(a!==null)return $0(s,a,r);Ot(),s=s.memoizedState,a=Ot();var c=a.queue.dispatch;return a.memoizedState=r,[s,c,!1]}function Xo(r,s,a,c){return r={tag:r,create:a,deps:c,inst:s,next:null},s=Be.updateQueue,s===null&&(s=am(),Be.updateQueue=s),a=s.lastEffect,a===null?s.lastEffect=r.next=r:(c=a.next,a.next=r,r.next=c,s.lastEffect=r),r}function ld(){return{destroy:void 0,resource:void 0}}function z0(){return Ot().memoizedState}function cd(r,s,a,c){var d=yn();c=c===void 0?null:c,Be.flags|=r,d.memoizedState=Xo(1|s,ld(),a,c)}function Il(r,s,a,c){var d=Ot();c=c===void 0?null:c;var m=d.memoizedState.inst;st!==null&&c!==null&&nm(c,st.memoizedState.deps)?d.memoizedState=Xo(s,m,a,c):(Be.flags|=r,d.memoizedState=Xo(1|s,m,a,c))}function B0(r,s){cd(8390656,8,r,s)}function H0(r,s){Il(2048,8,r,s)}function F0(r,s){return Il(4,2,r,s)}function q0(r,s){return Il(4,4,r,s)}function V0(r,s){if(typeof s=="function"){r=r();var a=s(r);return function(){typeof a=="function"?a():s(null)}}if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function G0(r,s,a){a=a!=null?a.concat([r]):null,Il(4,4,V0.bind(null,s,r),a)}function hm(){}function W0(r,s){var a=Ot();s=s===void 0?null:s;var c=a.memoizedState;return s!==null&&nm(s,c[1])?c[0]:(a.memoizedState=[r,s],r)}function Y0(r,s){var a=Ot();s=s===void 0?null:s;var c=a.memoizedState;if(s!==null&&nm(s,c[1]))return c[0];if(c=r(),Ys){sr(!0);try{r()}finally{sr(!1)}}return a.memoizedState=[c,s],c}function pm(r,s,a){return a===void 0||(Li&1073741824)!==0?r.memoizedState=s:(r.memoizedState=a,r=XS(),Be.lanes|=r,Hi|=r,a)}function Q0(r,s,a,c){return En(a,s)?a:Yo.current!==null?(r=pm(r,a,c),En(r,s)||(Ut=!0),r):(Li&42)===0?(Ut=!0,r.memoizedState=a):(r=XS(),Be.lanes|=r,Hi|=r,s)}function K0(r,s,a,c,d){var m=X.p;X.p=m!==0&&8>m?m:8;var b=P.T,w={};P.T=w,ym(r,!1,s,a);try{var L=d(),Q=P.S;if(Q!==null&&Q(w,L),L!==null&&typeof L=="object"&&typeof L.then=="function"){var re=Pk(L,c);Dl(r,s,re,In(r))}else Dl(r,s,c,In(r))}catch(oe){Dl(r,s,{then:function(){},status:"rejected",reason:oe},In())}finally{X.p=m,P.T=b}}function Hk(){}function mm(r,s,a,c){if(r.tag!==5)throw Error(i(476));var d=X0(r).queue;K0(r,d,s,ne,a===null?Hk:function(){return Z0(r),a(c)})}function X0(r){var s=r.memoizedState;if(s!==null)return s;s={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zr,lastRenderedState:ne},next:null};var a={};return s.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zr,lastRenderedState:a},next:null},r.memoizedState=s,r=r.alternate,r!==null&&(r.memoizedState=s),s}function Z0(r){var s=X0(r).next.queue;Dl(r,s,{},In())}function gm(){return rn(Yl)}function J0(){return Ot().memoizedState}function eS(){return Ot().memoizedState}function Fk(r){for(var s=r.return;s!==null;){switch(s.tag){case 24:case 3:var a=In();r=Oi(a);var c=Mi(s,r,a);c!==null&&(Dn(c,s,a),El(c,s,a)),s={cache:Gp()},r.payload=s;return}s=s.return}}function qk(r,s,a){var c=In();a={lane:c,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},ud(r)?nS(s,a):(a=jp(r,s,a,c),a!==null&&(Dn(a,r,c),rS(a,s,c)))}function tS(r,s,a){var c=In();Dl(r,s,a,c)}function Dl(r,s,a,c){var d={lane:c,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(ud(r))nS(s,d);else{var m=r.alternate;if(r.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var b=s.lastRenderedState,w=m(b,a);if(d.hasEagerState=!0,d.eagerState=w,En(w,b))return Wu(r,s,d,0),dt===null&&Gu(),!1}catch{}finally{}if(a=jp(r,s,d,c),a!==null)return Dn(a,r,c),rS(a,s,c),!0}return!1}function ym(r,s,a,c){if(c={lane:2,revertLane:Qm(),action:c,hasEagerState:!1,eagerState:null,next:null},ud(r)){if(s)throw Error(i(479))}else s=jp(r,a,c,2),s!==null&&Dn(s,r,2)}function ud(r){var s=r.alternate;return r===Be||s!==null&&s===Be}function nS(r,s){Qo=id=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function rS(r,s,a){if((a&4194048)!==0){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,js(r,a)}}var dd={readContext:rn,use:od,useCallback:It,useContext:It,useEffect:It,useImperativeHandle:It,useLayoutEffect:It,useInsertionEffect:It,useMemo:It,useReducer:It,useRef:It,useState:It,useDebugValue:It,useDeferredValue:It,useTransition:It,useSyncExternalStore:It,useId:It,useHostTransitionStatus:It,useFormState:It,useActionState:It,useOptimistic:It,useMemoCache:It,useCacheRefresh:It},iS={readContext:rn,use:od,useCallback:function(r,s){return yn().memoizedState=[r,s===void 0?null:s],r},useContext:rn,useEffect:B0,useImperativeHandle:function(r,s,a){a=a!=null?a.concat([r]):null,cd(4194308,4,V0.bind(null,s,r),a)},useLayoutEffect:function(r,s){return cd(4194308,4,r,s)},useInsertionEffect:function(r,s){cd(4,2,r,s)},useMemo:function(r,s){var a=yn();s=s===void 0?null:s;var c=r();if(Ys){sr(!0);try{r()}finally{sr(!1)}}return a.memoizedState=[c,s],c},useReducer:function(r,s,a){var c=yn();if(a!==void 0){var d=a(s);if(Ys){sr(!0);try{a(s)}finally{sr(!1)}}}else d=s;return c.memoizedState=c.baseState=d,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:d},c.queue=r,r=r.dispatch=qk.bind(null,Be,r),[c.memoizedState,r]},useRef:function(r){var s=yn();return r={current:r},s.memoizedState=r},useState:function(r){r=dm(r);var s=r.queue,a=tS.bind(null,Be,s);return s.dispatch=a,[r.memoizedState,a]},useDebugValue:hm,useDeferredValue:function(r,s){var a=yn();return pm(a,r,s)},useTransition:function(){var r=dm(!1);return r=K0.bind(null,Be,r.queue,!0,!1),yn().memoizedState=r,[!1,r]},useSyncExternalStore:function(r,s,a){var c=Be,d=yn();if(Ze){if(a===void 0)throw Error(i(407));a=a()}else{if(a=s(),dt===null)throw Error(i(349));(Ye&124)!==0||C0(c,s,a)}d.memoizedState=a;var m={value:a,getSnapshot:s};return d.queue=m,B0(R0.bind(null,c,m,r),[r]),c.flags|=2048,Xo(9,ld(),T0.bind(null,c,m,a,s),null),a},useId:function(){var r=yn(),s=dt.identifierPrefix;if(Ze){var a=Qr,c=Yr;a=(c&~(1<<32-Yt(c)-1)).toString(32)+a,s="«"+s+"R"+a,a=sd++,0<a&&(s+="H"+a.toString(32)),s+="»"}else a=$k++,s="«"+s+"r"+a.toString(32)+"»";return r.memoizedState=s},useHostTransitionStatus:gm,useFormState:j0,useActionState:j0,useOptimistic:function(r){var s=yn();s.memoizedState=s.baseState=r;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=a,s=ym.bind(null,Be,!0,a),a.dispatch=s,[r,s]},useMemoCache:lm,useCacheRefresh:function(){return yn().memoizedState=Fk.bind(null,Be)}},sS={readContext:rn,use:od,useCallback:W0,useContext:rn,useEffect:H0,useImperativeHandle:G0,useInsertionEffect:F0,useLayoutEffect:q0,useMemo:Y0,useReducer:ad,useRef:z0,useState:function(){return ad(Zr)},useDebugValue:hm,useDeferredValue:function(r,s){var a=Ot();return Q0(a,st.memoizedState,r,s)},useTransition:function(){var r=ad(Zr)[0],s=Ot().memoizedState;return[typeof r=="boolean"?r:Al(r),s]},useSyncExternalStore:E0,useId:J0,useHostTransitionStatus:gm,useFormState:P0,useActionState:P0,useOptimistic:function(r,s){var a=Ot();return D0(a,st,r,s)},useMemoCache:lm,useCacheRefresh:eS},Vk={readContext:rn,use:od,useCallback:W0,useContext:rn,useEffect:H0,useImperativeHandle:G0,useInsertionEffect:F0,useLayoutEffect:q0,useMemo:Y0,useReducer:um,useRef:z0,useState:function(){return um(Zr)},useDebugValue:hm,useDeferredValue:function(r,s){var a=Ot();return st===null?pm(a,r,s):Q0(a,st.memoizedState,r,s)},useTransition:function(){var r=um(Zr)[0],s=Ot().memoizedState;return[typeof r=="boolean"?r:Al(r),s]},useSyncExternalStore:E0,useId:J0,useHostTransitionStatus:gm,useFormState:U0,useActionState:U0,useOptimistic:function(r,s){var a=Ot();return st!==null?D0(a,st,r,s):(a.baseState=r,[r,a.queue.dispatch])},useMemoCache:lm,useCacheRefresh:eS},Zo=null,kl=0;function fd(r){var s=kl;return kl+=1,Zo===null&&(Zo=[]),g0(Zo,r,s)}function Nl(r,s){s=s.props.ref,r.ref=s!==void 0?s:null}function hd(r,s){throw s.$$typeof===_?Error(i(525)):(r=Object.prototype.toString.call(s),Error(i(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r)))}function oS(r){var s=r._init;return s(r._payload)}function aS(r){function s(q,B){if(r){var Y=q.deletions;Y===null?(q.deletions=[B],q.flags|=16):Y.push(B)}}function a(q,B){if(!r)return null;for(;B!==null;)s(q,B),B=B.sibling;return null}function c(q){for(var B=new Map;q!==null;)q.key!==null?B.set(q.key,q):B.set(q.index,q),q=q.sibling;return B}function d(q,B){return q=Wr(q,B),q.index=0,q.sibling=null,q}function m(q,B,Y){return q.index=Y,r?(Y=q.alternate,Y!==null?(Y=Y.index,Y<B?(q.flags|=67108866,B):Y):(q.flags|=67108866,B)):(q.flags|=1048576,B)}function b(q){return r&&q.alternate===null&&(q.flags|=67108866),q}function w(q,B,Y,se){return B===null||B.tag!==6?(B=$p(Y,q.mode,se),B.return=q,B):(B=d(B,Y),B.return=q,B)}function L(q,B,Y,se){var ge=Y.type;return ge===x?re(q,B,Y.props.children,se,Y.key):B!==null&&(B.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===U&&oS(ge)===B.type)?(B=d(B,Y.props),Nl(B,Y),B.return=q,B):(B=Qu(Y.type,Y.key,Y.props,null,q.mode,se),Nl(B,Y),B.return=q,B)}function Q(q,B,Y,se){return B===null||B.tag!==4||B.stateNode.containerInfo!==Y.containerInfo||B.stateNode.implementation!==Y.implementation?(B=Up(Y,q.mode,se),B.return=q,B):(B=d(B,Y.children||[]),B.return=q,B)}function re(q,B,Y,se,ge){return B===null||B.tag!==7?(B=zs(Y,q.mode,se,ge),B.return=q,B):(B=d(B,Y),B.return=q,B)}function oe(q,B,Y){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return B=$p(""+B,q.mode,Y),B.return=q,B;if(typeof B=="object"&&B!==null){switch(B.$$typeof){case v:return Y=Qu(B.type,B.key,B.props,null,q.mode,Y),Nl(Y,B),Y.return=q,Y;case S:return B=Up(B,q.mode,Y),B.return=q,B;case U:var se=B._init;return B=se(B._payload),oe(q,B,Y)}if(ue(B)||G(B))return B=zs(B,q.mode,Y,null),B.return=q,B;if(typeof B.then=="function")return oe(q,fd(B),Y);if(B.$$typeof===R)return oe(q,Ju(q,B),Y);hd(q,B)}return null}function Z(q,B,Y,se){var ge=B!==null?B.key:null;if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return ge!==null?null:w(q,B,""+Y,se);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case v:return Y.key===ge?L(q,B,Y,se):null;case S:return Y.key===ge?Q(q,B,Y,se):null;case U:return ge=Y._init,Y=ge(Y._payload),Z(q,B,Y,se)}if(ue(Y)||G(Y))return ge!==null?null:re(q,B,Y,se,null);if(typeof Y.then=="function")return Z(q,B,fd(Y),se);if(Y.$$typeof===R)return Z(q,B,Ju(q,Y),se);hd(q,Y)}return null}function J(q,B,Y,se,ge){if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return q=q.get(Y)||null,w(B,q,""+se,ge);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case v:return q=q.get(se.key===null?Y:se.key)||null,L(B,q,se,ge);case S:return q=q.get(se.key===null?Y:se.key)||null,Q(B,q,se,ge);case U:var He=se._init;return se=He(se._payload),J(q,B,Y,se,ge)}if(ue(se)||G(se))return q=q.get(Y)||null,re(B,q,se,ge,null);if(typeof se.then=="function")return J(q,B,Y,fd(se),ge);if(se.$$typeof===R)return J(q,B,Y,Ju(B,se),ge);hd(B,se)}return null}function Oe(q,B,Y,se){for(var ge=null,He=null,we=B,Ie=B=0,Bt=null;we!==null&&Ie<Y.length;Ie++){we.index>Ie?(Bt=we,we=null):Bt=we.sibling;var Qe=Z(q,we,Y[Ie],se);if(Qe===null){we===null&&(we=Bt);break}r&&we&&Qe.alternate===null&&s(q,we),B=m(Qe,B,Ie),He===null?ge=Qe:He.sibling=Qe,He=Qe,we=Bt}if(Ie===Y.length)return a(q,we),Ze&&Hs(q,Ie),ge;if(we===null){for(;Ie<Y.length;Ie++)we=oe(q,Y[Ie],se),we!==null&&(B=m(we,B,Ie),He===null?ge=we:He.sibling=we,He=we);return Ze&&Hs(q,Ie),ge}for(we=c(we);Ie<Y.length;Ie++)Bt=J(we,q,Ie,Y[Ie],se),Bt!==null&&(r&&Bt.alternate!==null&&we.delete(Bt.key===null?Ie:Bt.key),B=m(Bt,B,Ie),He===null?ge=Bt:He.sibling=Bt,He=Bt);return r&&we.forEach(function(Xi){return s(q,Xi)}),Ze&&Hs(q,Ie),ge}function Re(q,B,Y,se){if(Y==null)throw Error(i(151));for(var ge=null,He=null,we=B,Ie=B=0,Bt=null,Qe=Y.next();we!==null&&!Qe.done;Ie++,Qe=Y.next()){we.index>Ie?(Bt=we,we=null):Bt=we.sibling;var Xi=Z(q,we,Qe.value,se);if(Xi===null){we===null&&(we=Bt);break}r&&we&&Xi.alternate===null&&s(q,we),B=m(Xi,B,Ie),He===null?ge=Xi:He.sibling=Xi,He=Xi,we=Bt}if(Qe.done)return a(q,we),Ze&&Hs(q,Ie),ge;if(we===null){for(;!Qe.done;Ie++,Qe=Y.next())Qe=oe(q,Qe.value,se),Qe!==null&&(B=m(Qe,B,Ie),He===null?ge=Qe:He.sibling=Qe,He=Qe);return Ze&&Hs(q,Ie),ge}for(we=c(we);!Qe.done;Ie++,Qe=Y.next())Qe=J(we,q,Ie,Qe.value,se),Qe!==null&&(r&&Qe.alternate!==null&&we.delete(Qe.key===null?Ie:Qe.key),B=m(Qe,B,Ie),He===null?ge=Qe:He.sibling=Qe,He=Qe);return r&&we.forEach(function(GN){return s(q,GN)}),Ze&&Hs(q,Ie),ge}function at(q,B,Y,se){if(typeof Y=="object"&&Y!==null&&Y.type===x&&Y.key===null&&(Y=Y.props.children),typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case v:e:{for(var ge=Y.key;B!==null;){if(B.key===ge){if(ge=Y.type,ge===x){if(B.tag===7){a(q,B.sibling),se=d(B,Y.props.children),se.return=q,q=se;break e}}else if(B.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===U&&oS(ge)===B.type){a(q,B.sibling),se=d(B,Y.props),Nl(se,Y),se.return=q,q=se;break e}a(q,B);break}else s(q,B);B=B.sibling}Y.type===x?(se=zs(Y.props.children,q.mode,se,Y.key),se.return=q,q=se):(se=Qu(Y.type,Y.key,Y.props,null,q.mode,se),Nl(se,Y),se.return=q,q=se)}return b(q);case S:e:{for(ge=Y.key;B!==null;){if(B.key===ge)if(B.tag===4&&B.stateNode.containerInfo===Y.containerInfo&&B.stateNode.implementation===Y.implementation){a(q,B.sibling),se=d(B,Y.children||[]),se.return=q,q=se;break e}else{a(q,B);break}else s(q,B);B=B.sibling}se=Up(Y,q.mode,se),se.return=q,q=se}return b(q);case U:return ge=Y._init,Y=ge(Y._payload),at(q,B,Y,se)}if(ue(Y))return Oe(q,B,Y,se);if(G(Y)){if(ge=G(Y),typeof ge!="function")throw Error(i(150));return Y=ge.call(Y),Re(q,B,Y,se)}if(typeof Y.then=="function")return at(q,B,fd(Y),se);if(Y.$$typeof===R)return at(q,B,Ju(q,Y),se);hd(q,Y)}return typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint"?(Y=""+Y,B!==null&&B.tag===6?(a(q,B.sibling),se=d(B,Y),se.return=q,q=se):(a(q,B),se=$p(Y,q.mode,se),se.return=q,q=se),b(q)):a(q,B)}return function(q,B,Y,se){try{kl=0;var ge=at(q,B,Y,se);return Zo=null,ge}catch(we){if(we===xl||we===td)throw we;var He=Cn(29,we,null,q.mode);return He.lanes=se,He.return=q,He}finally{}}}var Jo=aS(!0),lS=aS(!1),qn=K(null),Tr=null;function ji(r){var s=r.alternate;ie(jt,jt.current&1),ie(qn,r),Tr===null&&(s===null||Yo.current!==null||s.memoizedState!==null)&&(Tr=r)}function cS(r){if(r.tag===22){if(ie(jt,jt.current),ie(qn,r),Tr===null){var s=r.alternate;s!==null&&s.memoizedState!==null&&(Tr=r)}}else Pi()}function Pi(){ie(jt,jt.current),ie(qn,qn.current)}function Jr(r){le(qn),Tr===r&&(Tr=null),le(jt)}var jt=K(0);function pd(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||ag(a)))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}function vm(r,s,a,c){s=r.memoizedState,a=a(c,s),a=a==null?s:y({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var _m={enqueueSetState:function(r,s,a){r=r._reactInternals;var c=In(),d=Oi(c);d.payload=s,a!=null&&(d.callback=a),s=Mi(r,d,c),s!==null&&(Dn(s,r,c),El(s,r,c))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var c=In(),d=Oi(c);d.tag=1,d.payload=s,a!=null&&(d.callback=a),s=Mi(r,d,c),s!==null&&(Dn(s,r,c),El(s,r,c))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=In(),c=Oi(a);c.tag=2,s!=null&&(c.callback=s),s=Mi(r,c,a),s!==null&&(Dn(s,r,a),El(s,r,a))}};function uS(r,s,a,c,d,m,b){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,m,b):s.prototype&&s.prototype.isPureReactComponent?!pl(a,c)||!pl(d,m):!0}function dS(r,s,a,c){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==r&&_m.enqueueReplaceState(s,s.state,null)}function Qs(r,s){var a=s;if("ref"in s){a={};for(var c in s)c!=="ref"&&(a[c]=s[c])}if(r=r.defaultProps){a===s&&(a=y({},a));for(var d in r)a[d]===void 0&&(a[d]=r[d])}return a}var md=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function fS(r){md(r)}function hS(r){console.error(r)}function pS(r){md(r)}function gd(r,s){try{var a=r.onUncaughtError;a(s.value,{componentStack:s.stack})}catch(c){setTimeout(function(){throw c})}}function mS(r,s,a){try{var c=r.onCaughtError;c(a.value,{componentStack:a.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function bm(r,s,a){return a=Oi(a),a.tag=3,a.payload={element:null},a.callback=function(){gd(r,s)},a}function gS(r){return r=Oi(r),r.tag=3,r}function yS(r,s,a,c){var d=a.type.getDerivedStateFromError;if(typeof d=="function"){var m=c.value;r.payload=function(){return d(m)},r.callback=function(){mS(s,a,c)}}var b=a.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(r.callback=function(){mS(s,a,c),typeof d!="function"&&(Fi===null?Fi=new Set([this]):Fi.add(this));var w=c.stack;this.componentDidCatch(c.value,{componentStack:w!==null?w:""})})}function Gk(r,s,a,c,d){if(a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(s=a.alternate,s!==null&&_l(s,a,d,!0),a=qn.current,a!==null){switch(a.tag){case 13:return Tr===null?qm():a.alternate===null&&Tt===0&&(Tt=3),a.flags&=-257,a.flags|=65536,a.lanes=d,c===Qp?a.flags|=16384:(s=a.updateQueue,s===null?a.updateQueue=new Set([c]):s.add(c),Gm(r,c,d)),!1;case 22:return a.flags|=65536,c===Qp?a.flags|=16384:(s=a.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([c])},a.updateQueue=s):(a=s.retryQueue,a===null?s.retryQueue=new Set([c]):a.add(c)),Gm(r,c,d)),!1}throw Error(i(435,a.tag))}return Gm(r,c,d),qm(),!1}if(Ze)return s=qn.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=d,c!==Hp&&(r=Error(i(422),{cause:c}),vl(zn(r,a)))):(c!==Hp&&(s=Error(i(423),{cause:c}),vl(zn(s,a))),r=r.current.alternate,r.flags|=65536,d&=-d,r.lanes|=d,c=zn(c,a),d=bm(r.stateNode,c,d),Zp(r,d),Tt!==4&&(Tt=2)),!1;var m=Error(i(520),{cause:c});if(m=zn(m,a),Ul===null?Ul=[m]:Ul.push(m),Tt!==4&&(Tt=2),s===null)return!0;c=zn(c,a),a=s;do{switch(a.tag){case 3:return a.flags|=65536,r=d&-d,a.lanes|=r,r=bm(a.stateNode,c,r),Zp(a,r),!1;case 1:if(s=a.type,m=a.stateNode,(a.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Fi===null||!Fi.has(m))))return a.flags|=65536,d&=-d,a.lanes|=d,d=gS(d),yS(d,r,a,c),Zp(a,d),!1}a=a.return}while(a!==null);return!1}var vS=Error(i(461)),Ut=!1;function Qt(r,s,a,c){s.child=r===null?lS(s,null,a,c):Jo(s,r.child,a,c)}function _S(r,s,a,c,d){a=a.render;var m=s.ref;if("ref"in c){var b={};for(var w in c)w!=="ref"&&(b[w]=c[w])}else b=c;return Gs(s),c=rm(r,s,a,b,m,d),w=im(),r!==null&&!Ut?(sm(r,s,d),ei(r,s,d)):(Ze&&w&&zp(s),s.flags|=1,Qt(r,s,c,d),s.child)}function bS(r,s,a,c,d){if(r===null){var m=a.type;return typeof m=="function"&&!Pp(m)&&m.defaultProps===void 0&&a.compare===null?(s.tag=15,s.type=m,SS(r,s,m,c,d)):(r=Qu(a.type,null,c,s,s.mode,d),r.ref=s.ref,r.return=s,s.child=r)}if(m=r.child,!Am(r,d)){var b=m.memoizedProps;if(a=a.compare,a=a!==null?a:pl,a(b,c)&&r.ref===s.ref)return ei(r,s,d)}return s.flags|=1,r=Wr(m,c),r.ref=s.ref,r.return=s,s.child=r}function SS(r,s,a,c,d){if(r!==null){var m=r.memoizedProps;if(pl(m,c)&&r.ref===s.ref)if(Ut=!1,s.pendingProps=c=m,Am(r,d))(r.flags&131072)!==0&&(Ut=!0);else return s.lanes=r.lanes,ei(r,s,d)}return Sm(r,s,a,c,d)}function xS(r,s,a){var c=s.pendingProps,d=c.children,m=r!==null?r.memoizedState:null;if(c.mode==="hidden"){if((s.flags&128)!==0){if(c=m!==null?m.baseLanes|a:a,r!==null){for(d=s.child=r.child,m=0;d!==null;)m=m|d.lanes|d.childLanes,d=d.sibling;s.childLanes=m&~c}else s.childLanes=0,s.child=null;return wS(r,s,c,a)}if((a&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},r!==null&&ed(s,m!==null?m.cachePool:null),m!==null?S0(s,m):em(),cS(s);else return s.lanes=s.childLanes=536870912,wS(r,s,m!==null?m.baseLanes|a:a,a)}else m!==null?(ed(s,m.cachePool),S0(s,m),Pi(),s.memoizedState=null):(r!==null&&ed(s,null),em(),Pi());return Qt(r,s,d,a),s.child}function wS(r,s,a,c){var d=Yp();return d=d===null?null:{parent:Lt._currentValue,pool:d},s.memoizedState={baseLanes:a,cachePool:d},r!==null&&ed(s,null),em(),cS(s),r!==null&&_l(r,s,c,!0),null}function yd(r,s){var a=s.ref;if(a===null)r!==null&&r.ref!==null&&(s.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(i(284));(r===null||r.ref!==a)&&(s.flags|=4194816)}}function Sm(r,s,a,c,d){return Gs(s),a=rm(r,s,a,c,void 0,d),c=im(),r!==null&&!Ut?(sm(r,s,d),ei(r,s,d)):(Ze&&c&&zp(s),s.flags|=1,Qt(r,s,a,d),s.child)}function ES(r,s,a,c,d,m){return Gs(s),s.updateQueue=null,a=w0(s,c,a,d),x0(r),c=im(),r!==null&&!Ut?(sm(r,s,m),ei(r,s,m)):(Ze&&c&&zp(s),s.flags|=1,Qt(r,s,a,m),s.child)}function CS(r,s,a,c,d){if(Gs(s),s.stateNode===null){var m=Fo,b=a.contextType;typeof b=="object"&&b!==null&&(m=rn(b)),m=new a(c,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=_m,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=c,m.state=s.memoizedState,m.refs={},Kp(s),b=a.contextType,m.context=typeof b=="object"&&b!==null?rn(b):Fo,m.state=s.memoizedState,b=a.getDerivedStateFromProps,typeof b=="function"&&(vm(s,a,b,c),m.state=s.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(b=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),b!==m.state&&_m.enqueueReplaceState(m,m.state,null),Tl(s,c,m,d),Cl(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),c=!0}else if(r===null){m=s.stateNode;var w=s.memoizedProps,L=Qs(a,w);m.props=L;var Q=m.context,re=a.contextType;b=Fo,typeof re=="object"&&re!==null&&(b=rn(re));var oe=a.getDerivedStateFromProps;re=typeof oe=="function"||typeof m.getSnapshotBeforeUpdate=="function",w=s.pendingProps!==w,re||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w||Q!==b)&&dS(s,m,c,b),Ni=!1;var Z=s.memoizedState;m.state=Z,Tl(s,c,m,d),Cl(),Q=s.memoizedState,w||Z!==Q||Ni?(typeof oe=="function"&&(vm(s,a,oe,c),Q=s.memoizedState),(L=Ni||uS(s,a,L,c,Z,Q,b))?(re||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=Q),m.props=c,m.state=Q,m.context=b,c=L):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{m=s.stateNode,Xp(r,s),b=s.memoizedProps,re=Qs(a,b),m.props=re,oe=s.pendingProps,Z=m.context,Q=a.contextType,L=Fo,typeof Q=="object"&&Q!==null&&(L=rn(Q)),w=a.getDerivedStateFromProps,(Q=typeof w=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(b!==oe||Z!==L)&&dS(s,m,c,L),Ni=!1,Z=s.memoizedState,m.state=Z,Tl(s,c,m,d),Cl();var J=s.memoizedState;b!==oe||Z!==J||Ni||r!==null&&r.dependencies!==null&&Zu(r.dependencies)?(typeof w=="function"&&(vm(s,a,w,c),J=s.memoizedState),(re=Ni||uS(s,a,re,c,Z,J,L)||r!==null&&r.dependencies!==null&&Zu(r.dependencies))?(Q||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(c,J,L),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(c,J,L)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||b===r.memoizedProps&&Z===r.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===r.memoizedProps&&Z===r.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=J),m.props=c,m.state=J,m.context=L,c=re):(typeof m.componentDidUpdate!="function"||b===r.memoizedProps&&Z===r.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===r.memoizedProps&&Z===r.memoizedState||(s.flags|=1024),c=!1)}return m=c,yd(r,s),c=(s.flags&128)!==0,m||c?(m=s.stateNode,a=c&&typeof a.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,r!==null&&c?(s.child=Jo(s,r.child,null,d),s.child=Jo(s,null,a,d)):Qt(r,s,a,d),s.memoizedState=m.state,r=s.child):r=ei(r,s,d),r}function TS(r,s,a,c){return yl(),s.flags|=256,Qt(r,s,a,c),s.child}var xm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wm(r){return{baseLanes:r,cachePool:h0()}}function Em(r,s,a){return r=r!==null?r.childLanes&~a:0,s&&(r|=Vn),r}function RS(r,s,a){var c=s.pendingProps,d=!1,m=(s.flags&128)!==0,b;if((b=m)||(b=r!==null&&r.memoizedState===null?!1:(jt.current&2)!==0),b&&(d=!0,s.flags&=-129),b=(s.flags&32)!==0,s.flags&=-33,r===null){if(Ze){if(d?ji(s):Pi(),Ze){var w=Ct,L;if(L=w){e:{for(L=w,w=Cr;L.nodeType!==8;){if(!w){w=null;break e}if(L=lr(L.nextSibling),L===null){w=null;break e}}w=L}w!==null?(s.memoizedState={dehydrated:w,treeContext:Bs!==null?{id:Yr,overflow:Qr}:null,retryLane:536870912,hydrationErrors:null},L=Cn(18,null,null,0),L.stateNode=w,L.return=s,s.child=L,cn=s,Ct=null,L=!0):L=!1}L||qs(s)}if(w=s.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return ag(w)?s.lanes=32:s.lanes=536870912,null;Jr(s)}return w=c.children,c=c.fallback,d?(Pi(),d=s.mode,w=vd({mode:"hidden",children:w},d),c=zs(c,d,a,null),w.return=s,c.return=s,w.sibling=c,s.child=w,d=s.child,d.memoizedState=wm(a),d.childLanes=Em(r,b,a),s.memoizedState=xm,c):(ji(s),Cm(s,w))}if(L=r.memoizedState,L!==null&&(w=L.dehydrated,w!==null)){if(m)s.flags&256?(ji(s),s.flags&=-257,s=Tm(r,s,a)):s.memoizedState!==null?(Pi(),s.child=r.child,s.flags|=128,s=null):(Pi(),d=c.fallback,w=s.mode,c=vd({mode:"visible",children:c.children},w),d=zs(d,w,a,null),d.flags|=2,c.return=s,d.return=s,c.sibling=d,s.child=c,Jo(s,r.child,null,a),c=s.child,c.memoizedState=wm(a),c.childLanes=Em(r,b,a),s.memoizedState=xm,s=d);else if(ji(s),ag(w)){if(b=w.nextSibling&&w.nextSibling.dataset,b)var Q=b.dgst;b=Q,c=Error(i(419)),c.stack="",c.digest=b,vl({value:c,source:null,stack:null}),s=Tm(r,s,a)}else if(Ut||_l(r,s,a,!1),b=(a&r.childLanes)!==0,Ut||b){if(b=dt,b!==null&&(c=a&-a,c=(c&42)!==0?1:sl(c),c=(c&(b.suspendedLanes|a))!==0?0:c,c!==0&&c!==L.retryLane))throw L.retryLane=c,Ho(r,c),Dn(b,r,c),vS;w.data==="$?"||qm(),s=Tm(r,s,a)}else w.data==="$?"?(s.flags|=192,s.child=r.child,s=null):(r=L.treeContext,Ct=lr(w.nextSibling),cn=s,Ze=!0,Fs=null,Cr=!1,r!==null&&(Hn[Fn++]=Yr,Hn[Fn++]=Qr,Hn[Fn++]=Bs,Yr=r.id,Qr=r.overflow,Bs=s),s=Cm(s,c.children),s.flags|=4096);return s}return d?(Pi(),d=c.fallback,w=s.mode,L=r.child,Q=L.sibling,c=Wr(L,{mode:"hidden",children:c.children}),c.subtreeFlags=L.subtreeFlags&65011712,Q!==null?d=Wr(Q,d):(d=zs(d,w,a,null),d.flags|=2),d.return=s,c.return=s,c.sibling=d,s.child=c,c=d,d=s.child,w=r.child.memoizedState,w===null?w=wm(a):(L=w.cachePool,L!==null?(Q=Lt._currentValue,L=L.parent!==Q?{parent:Q,pool:Q}:L):L=h0(),w={baseLanes:w.baseLanes|a,cachePool:L}),d.memoizedState=w,d.childLanes=Em(r,b,a),s.memoizedState=xm,c):(ji(s),a=r.child,r=a.sibling,a=Wr(a,{mode:"visible",children:c.children}),a.return=s,a.sibling=null,r!==null&&(b=s.deletions,b===null?(s.deletions=[r],s.flags|=16):b.push(r)),s.child=a,s.memoizedState=null,a)}function Cm(r,s){return s=vd({mode:"visible",children:s},r.mode),s.return=r,r.child=s}function vd(r,s){return r=Cn(22,r,null,s),r.lanes=0,r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},r}function Tm(r,s,a){return Jo(s,r.child,null,a),r=Cm(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function AS(r,s,a){r.lanes|=s;var c=r.alternate;c!==null&&(c.lanes|=s),qp(r.return,s,a)}function Rm(r,s,a,c,d){var m=r.memoizedState;m===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=s,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function IS(r,s,a){var c=s.pendingProps,d=c.revealOrder,m=c.tail;if(Qt(r,s,c.children,a),c=jt.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&AS(r,a,s);else if(r.tag===19)AS(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}switch(ie(jt,c),d){case"forwards":for(a=s.child,d=null;a!==null;)r=a.alternate,r!==null&&pd(r)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),Rm(s,!1,d,a,m);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(r=d.alternate,r!==null&&pd(r)===null){s.child=d;break}r=d.sibling,d.sibling=a,a=d,d=r}Rm(s,!0,a,null,m);break;case"together":Rm(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function ei(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),Hi|=s.lanes,(a&s.childLanes)===0)if(r!==null){if(_l(r,s,a,!1),(a&s.childLanes)===0)return null}else return null;if(r!==null&&s.child!==r.child)throw Error(i(153));if(s.child!==null){for(r=s.child,a=Wr(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=Wr(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function Am(r,s){return(r.lanes&s)!==0?!0:(r=r.dependencies,!!(r!==null&&Zu(r)))}function Wk(r,s,a){switch(s.tag){case 3:be(s,s.stateNode.containerInfo),ki(s,Lt,r.memoizedState.cache),yl();break;case 27:case 5:$e(s);break;case 4:be(s,s.stateNode.containerInfo);break;case 10:ki(s,s.type,s.memoizedProps.value);break;case 13:var c=s.memoizedState;if(c!==null)return c.dehydrated!==null?(ji(s),s.flags|=128,null):(a&s.child.childLanes)!==0?RS(r,s,a):(ji(s),r=ei(r,s,a),r!==null?r.sibling:null);ji(s);break;case 19:var d=(r.flags&128)!==0;if(c=(a&s.childLanes)!==0,c||(_l(r,s,a,!1),c=(a&s.childLanes)!==0),d){if(c)return IS(r,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),ie(jt,jt.current),c)break;return null;case 22:case 23:return s.lanes=0,xS(r,s,a);case 24:ki(s,Lt,r.memoizedState.cache)}return ei(r,s,a)}function DS(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps)Ut=!0;else{if(!Am(r,a)&&(s.flags&128)===0)return Ut=!1,Wk(r,s,a);Ut=(r.flags&131072)!==0}else Ut=!1,Ze&&(s.flags&1048576)!==0&&o0(s,Xu,s.index);switch(s.lanes=0,s.tag){case 16:e:{r=s.pendingProps;var c=s.elementType,d=c._init;if(c=d(c._payload),s.type=c,typeof c=="function")Pp(c)?(r=Qs(c,r),s.tag=1,s=CS(null,s,c,r,a)):(s.tag=0,s=Sm(null,s,c,r,a));else{if(c!=null){if(d=c.$$typeof,d===I){s.tag=11,s=_S(null,s,c,r,a);break e}else if(d===j){s.tag=14,s=bS(null,s,c,r,a);break e}}throw s=te(c)||c,Error(i(306,s,""))}}return s;case 0:return Sm(r,s,s.type,s.pendingProps,a);case 1:return c=s.type,d=Qs(c,s.pendingProps),CS(r,s,c,d,a);case 3:e:{if(be(s,s.stateNode.containerInfo),r===null)throw Error(i(387));c=s.pendingProps;var m=s.memoizedState;d=m.element,Xp(r,s),Tl(s,c,null,a);var b=s.memoizedState;if(c=b.cache,ki(s,Lt,c),c!==m.cache&&Vp(s,[Lt],a,!0),Cl(),c=b.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:b.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=TS(r,s,c,a);break e}else if(c!==d){d=zn(Error(i(424)),s),vl(d),s=TS(r,s,c,a);break e}else{switch(r=s.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}for(Ct=lr(r.firstChild),cn=s,Ze=!0,Fs=null,Cr=!0,a=lS(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(yl(),c===d){s=ei(r,s,a);break e}Qt(r,s,c,a)}s=s.child}return s;case 26:return yd(r,s),r===null?(a=Mx(s.type,null,s.pendingProps,null))?s.memoizedState=a:Ze||(a=s.type,r=s.pendingProps,c=Nd(pe.current).createElement(a),c[ce]=s,c[fe]=r,Xt(c,a,r),Me(c),s.stateNode=c):s.memoizedState=Mx(s.type,r.memoizedProps,s.pendingProps,r.memoizedState),null;case 27:return $e(s),r===null&&Ze&&(c=s.stateNode=kx(s.type,s.pendingProps,pe.current),cn=s,Cr=!0,d=Ct,Gi(s.type)?(lg=d,Ct=lr(c.firstChild)):Ct=d),Qt(r,s,s.pendingProps.children,a),yd(r,s),r===null&&(s.flags|=4194304),s.child;case 5:return r===null&&Ze&&((d=c=Ct)&&(c=SN(c,s.type,s.pendingProps,Cr),c!==null?(s.stateNode=c,cn=s,Ct=lr(c.firstChild),Cr=!1,d=!0):d=!1),d||qs(s)),$e(s),d=s.type,m=s.pendingProps,b=r!==null?r.memoizedProps:null,c=m.children,ig(d,m)?c=null:b!==null&&ig(d,b)&&(s.flags|=32),s.memoizedState!==null&&(d=rm(r,s,Uk,null,null,a),Yl._currentValue=d),yd(r,s),Qt(r,s,c,a),s.child;case 6:return r===null&&Ze&&((r=a=Ct)&&(a=xN(a,s.pendingProps,Cr),a!==null?(s.stateNode=a,cn=s,Ct=null,r=!0):r=!1),r||qs(s)),null;case 13:return RS(r,s,a);case 4:return be(s,s.stateNode.containerInfo),c=s.pendingProps,r===null?s.child=Jo(s,null,c,a):Qt(r,s,c,a),s.child;case 11:return _S(r,s,s.type,s.pendingProps,a);case 7:return Qt(r,s,s.pendingProps,a),s.child;case 8:return Qt(r,s,s.pendingProps.children,a),s.child;case 12:return Qt(r,s,s.pendingProps.children,a),s.child;case 10:return c=s.pendingProps,ki(s,s.type,c.value),Qt(r,s,c.children,a),s.child;case 9:return d=s.type._context,c=s.pendingProps.children,Gs(s),d=rn(d),c=c(d),s.flags|=1,Qt(r,s,c,a),s.child;case 14:return bS(r,s,s.type,s.pendingProps,a);case 15:return SS(r,s,s.type,s.pendingProps,a);case 19:return IS(r,s,a);case 31:return c=s.pendingProps,a=s.mode,c={mode:c.mode,children:c.children},r===null?(a=vd(c,a),a.ref=s.ref,s.child=a,a.return=s,s=a):(a=Wr(r.child,c),a.ref=s.ref,s.child=a,a.return=s,s=a),s;case 22:return xS(r,s,a);case 24:return Gs(s),c=rn(Lt),r===null?(d=Yp(),d===null&&(d=dt,m=Gp(),d.pooledCache=m,m.refCount++,m!==null&&(d.pooledCacheLanes|=a),d=m),s.memoizedState={parent:c,cache:d},Kp(s),ki(s,Lt,d)):((r.lanes&a)!==0&&(Xp(r,s),Tl(s,null,null,a),Cl()),d=r.memoizedState,m=s.memoizedState,d.parent!==c?(d={parent:c,cache:c},s.memoizedState=d,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=d),ki(s,Lt,c)):(c=m.cache,ki(s,Lt,c),c!==d.cache&&Vp(s,[Lt],a,!0))),Qt(r,s,s.pendingProps.children,a),s.child;case 29:throw s.pendingProps}throw Error(i(156,s.tag))}function ti(r){r.flags|=4}function kS(r,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)r.flags&=-16777217;else if(r.flags|=16777216,!Ux(s)){if(s=qn.current,s!==null&&((Ye&4194048)===Ye?Tr!==null:(Ye&62914560)!==Ye&&(Ye&536870912)===0||s!==Tr))throw wl=Qp,p0;r.flags|=8192}}function _d(r,s){s!==null&&(r.flags|=4),r.flags&16384&&(s=r.tag!==22?Ou():536870912,r.lanes|=s,ra|=s)}function Ol(r,s){if(!Ze)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function St(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,c=0;if(s)for(var d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&65011712,c|=d.flags&65011712,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=c,r.childLanes=a,s}function Yk(r,s,a){var c=s.pendingProps;switch(Bp(s),s.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return St(s),null;case 1:return St(s),null;case 3:return a=s.stateNode,c=null,r!==null&&(c=r.memoizedState.cache),s.memoizedState.cache!==c&&(s.flags|=2048),Xr(Lt),De(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(r===null||r.child===null)&&(gl(s)?ti(s):r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,c0())),St(s),null;case 26:return a=s.memoizedState,r===null?(ti(s),a!==null?(St(s),kS(s,a)):(St(s),s.flags&=-16777217)):a?a!==r.memoizedState?(ti(s),St(s),kS(s,a)):(St(s),s.flags&=-16777217):(r.memoizedProps!==c&&ti(s),St(s),s.flags&=-16777217),null;case 27:vt(s),a=pe.current;var d=s.type;if(r!==null&&s.stateNode!=null)r.memoizedProps!==c&&ti(s);else{if(!c){if(s.stateNode===null)throw Error(i(166));return St(s),null}r=de.current,gl(s)?a0(s):(r=kx(d,c,a),s.stateNode=r,ti(s))}return St(s),null;case 5:if(vt(s),a=s.type,r!==null&&s.stateNode!=null)r.memoizedProps!==c&&ti(s);else{if(!c){if(s.stateNode===null)throw Error(i(166));return St(s),null}if(r=de.current,gl(s))a0(s);else{switch(d=Nd(pe.current),r){case 1:r=d.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:r=d.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":r=d.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":r=d.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":r=d.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof c.is=="string"?d.createElement("select",{is:c.is}):d.createElement("select"),c.multiple?r.multiple=!0:c.size&&(r.size=c.size);break;default:r=typeof c.is=="string"?d.createElement(a,{is:c.is}):d.createElement(a)}}r[ce]=s,r[fe]=c;e:for(d=s.child;d!==null;){if(d.tag===5||d.tag===6)r.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===s)break e;for(;d.sibling===null;){if(d.return===null||d.return===s)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}s.stateNode=r;e:switch(Xt(r,a,c),a){case"button":case"input":case"select":case"textarea":r=!!c.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&ti(s)}}return St(s),s.flags&=-16777217,null;case 6:if(r&&s.stateNode!=null)r.memoizedProps!==c&&ti(s);else{if(typeof c!="string"&&s.stateNode===null)throw Error(i(166));if(r=pe.current,gl(s)){if(r=s.stateNode,a=s.memoizedProps,c=null,d=cn,d!==null)switch(d.tag){case 27:case 5:c=d.memoizedProps}r[ce]=s,r=!!(r.nodeValue===a||c!==null&&c.suppressHydrationWarning===!0||Ex(r.nodeValue,a)),r||qs(s)}else r=Nd(r).createTextNode(c),r[ce]=s,s.stateNode=r}return St(s),null;case 13:if(c=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(d=gl(s),c!==null&&c.dehydrated!==null){if(r===null){if(!d)throw Error(i(318));if(d=s.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(i(317));d[ce]=s}else yl(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;St(s),d=!1}else d=c0(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=d),d=!0;if(!d)return s.flags&256?(Jr(s),s):(Jr(s),null)}if(Jr(s),(s.flags&128)!==0)return s.lanes=a,s;if(a=c!==null,r=r!==null&&r.memoizedState!==null,a){c=s.child,d=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(d=c.alternate.memoizedState.cachePool.pool);var m=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(m=c.memoizedState.cachePool.pool),m!==d&&(c.flags|=2048)}return a!==r&&a&&(s.child.flags|=8192),_d(s,s.updateQueue),St(s),null;case 4:return De(),r===null&&Jm(s.stateNode.containerInfo),St(s),null;case 10:return Xr(s.type),St(s),null;case 19:if(le(jt),d=s.memoizedState,d===null)return St(s),null;if(c=(s.flags&128)!==0,m=d.rendering,m===null)if(c)Ol(d,!1);else{if(Tt!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(m=pd(r),m!==null){for(s.flags|=128,Ol(d,!1),r=m.updateQueue,s.updateQueue=r,_d(s,r),s.subtreeFlags=0,r=a,a=s.child;a!==null;)s0(a,r),a=a.sibling;return ie(jt,jt.current&1|2),s.child}r=r.sibling}d.tail!==null&&Wt()>xd&&(s.flags|=128,c=!0,Ol(d,!1),s.lanes=4194304)}else{if(!c)if(r=pd(m),r!==null){if(s.flags|=128,c=!0,r=r.updateQueue,s.updateQueue=r,_d(s,r),Ol(d,!0),d.tail===null&&d.tailMode==="hidden"&&!m.alternate&&!Ze)return St(s),null}else 2*Wt()-d.renderingStartTime>xd&&a!==536870912&&(s.flags|=128,c=!0,Ol(d,!1),s.lanes=4194304);d.isBackwards?(m.sibling=s.child,s.child=m):(r=d.last,r!==null?r.sibling=m:s.child=m,d.last=m)}return d.tail!==null?(s=d.tail,d.rendering=s,d.tail=s.sibling,d.renderingStartTime=Wt(),s.sibling=null,r=jt.current,ie(jt,c?r&1|2:r&1),s):(St(s),null);case 22:case 23:return Jr(s),tm(),c=s.memoizedState!==null,r!==null?r.memoizedState!==null!==c&&(s.flags|=8192):c&&(s.flags|=8192),c?(a&536870912)!==0&&(s.flags&128)===0&&(St(s),s.subtreeFlags&6&&(s.flags|=8192)):St(s),a=s.updateQueue,a!==null&&_d(s,a.retryQueue),a=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),c=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==a&&(s.flags|=2048),r!==null&&le(Ws),null;case 24:return a=null,r!==null&&(a=r.memoizedState.cache),s.memoizedState.cache!==a&&(s.flags|=2048),Xr(Lt),St(s),null;case 25:return null;case 30:return null}throw Error(i(156,s.tag))}function Qk(r,s){switch(Bp(s),s.tag){case 1:return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return Xr(Lt),De(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 26:case 27:case 5:return vt(s),null;case 13:if(Jr(s),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(i(340));yl()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return le(jt),null;case 4:return De(),null;case 10:return Xr(s.type),null;case 22:case 23:return Jr(s),tm(),r!==null&&le(Ws),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 24:return Xr(Lt),null;case 25:return null;default:return null}}function NS(r,s){switch(Bp(s),s.tag){case 3:Xr(Lt),De();break;case 26:case 27:case 5:vt(s);break;case 4:De();break;case 13:Jr(s);break;case 19:le(jt);break;case 10:Xr(s.type);break;case 22:case 23:Jr(s),tm(),r!==null&&le(Ws);break;case 24:Xr(Lt)}}function Ml(r,s){try{var a=s.updateQueue,c=a!==null?a.lastEffect:null;if(c!==null){var d=c.next;a=d;do{if((a.tag&r)===r){c=void 0;var m=a.create,b=a.inst;c=m(),b.destroy=c}a=a.next}while(a!==d)}}catch(w){ut(s,s.return,w)}}function $i(r,s,a){try{var c=s.updateQueue,d=c!==null?c.lastEffect:null;if(d!==null){var m=d.next;c=m;do{if((c.tag&r)===r){var b=c.inst,w=b.destroy;if(w!==void 0){b.destroy=void 0,d=s;var L=a,Q=w;try{Q()}catch(re){ut(d,L,re)}}}c=c.next}while(c!==m)}}catch(re){ut(s,s.return,re)}}function OS(r){var s=r.updateQueue;if(s!==null){var a=r.stateNode;try{b0(s,a)}catch(c){ut(r,r.return,c)}}}function MS(r,s,a){a.props=Qs(r.type,r.memoizedProps),a.state=r.memoizedState;try{a.componentWillUnmount()}catch(c){ut(r,s,c)}}function Ll(r,s){try{var a=r.ref;if(a!==null){switch(r.tag){case 26:case 27:case 5:var c=r.stateNode;break;case 30:c=r.stateNode;break;default:c=r.stateNode}typeof a=="function"?r.refCleanup=a(c):a.current=c}}catch(d){ut(r,s,d)}}function Rr(r,s){var a=r.ref,c=r.refCleanup;if(a!==null)if(typeof c=="function")try{c()}catch(d){ut(r,s,d)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(d){ut(r,s,d)}else a.current=null}function LS(r){var s=r.type,a=r.memoizedProps,c=r.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":a.autoFocus&&c.focus();break e;case"img":a.src?c.src=a.src:a.srcSet&&(c.srcset=a.srcSet)}}catch(d){ut(r,r.return,d)}}function Im(r,s,a){try{var c=r.stateNode;gN(c,r.type,a,s),c[fe]=s}catch(d){ut(r,r.return,d)}}function jS(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&Gi(r.type)||r.tag===4}function Dm(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||jS(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&Gi(r.type)||r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function km(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(r,s):(s=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,s.appendChild(r),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=kd));else if(c!==4&&(c===27&&Gi(r.type)&&(a=r.stateNode,s=null),r=r.child,r!==null))for(km(r,s,a),r=r.sibling;r!==null;)km(r,s,a),r=r.sibling}function bd(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(c!==4&&(c===27&&Gi(r.type)&&(a=r.stateNode),r=r.child,r!==null))for(bd(r,s,a),r=r.sibling;r!==null;)bd(r,s,a),r=r.sibling}function PS(r){var s=r.stateNode,a=r.memoizedProps;try{for(var c=r.type,d=s.attributes;d.length;)s.removeAttributeNode(d[0]);Xt(s,c,a),s[ce]=r,s[fe]=a}catch(m){ut(r,r.return,m)}}var ni=!1,Dt=!1,Nm=!1,$S=typeof WeakSet=="function"?WeakSet:Set,zt=null;function Kk(r,s){if(r=r.containerInfo,ng=$d,r=Qb(r),Dp(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var b=0,w=-1,L=-1,Q=0,re=0,oe=r,Z=null;t:for(;;){for(var J;oe!==a||d!==0&&oe.nodeType!==3||(w=b+d),oe!==m||c!==0&&oe.nodeType!==3||(L=b+c),oe.nodeType===3&&(b+=oe.nodeValue.length),(J=oe.firstChild)!==null;)Z=oe,oe=J;for(;;){if(oe===r)break t;if(Z===a&&++Q===d&&(w=b),Z===m&&++re===c&&(L=b),(J=oe.nextSibling)!==null)break;oe=Z,Z=oe.parentNode}oe=J}a=w===-1||L===-1?null:{start:w,end:L}}else a=null}a=a||{start:0,end:0}}else a=null;for(rg={focusedElem:r,selectionRange:a},$d=!1,zt=s;zt!==null;)if(s=zt,r=s.child,(s.subtreeFlags&1024)!==0&&r!==null)r.return=s,zt=r;else for(;zt!==null;){switch(s=zt,m=s.alternate,r=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if((r&1024)!==0&&m!==null){r=void 0,a=s,d=m.memoizedProps,m=m.memoizedState,c=a.stateNode;try{var Oe=Qs(a.type,d,a.elementType===a.type);r=c.getSnapshotBeforeUpdate(Oe,m),c.__reactInternalSnapshotBeforeUpdate=r}catch(Re){ut(a,a.return,Re)}}break;case 3:if((r&1024)!==0){if(r=s.stateNode.containerInfo,a=r.nodeType,a===9)og(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":og(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((r&1024)!==0)throw Error(i(163))}if(r=s.sibling,r!==null){r.return=s.return,zt=r;break}zt=s.return}}function US(r,s,a){var c=a.flags;switch(a.tag){case 0:case 11:case 15:Ui(r,a),c&4&&Ml(5,a);break;case 1:if(Ui(r,a),c&4)if(r=a.stateNode,s===null)try{r.componentDidMount()}catch(b){ut(a,a.return,b)}else{var d=Qs(a.type,s.memoizedProps);s=s.memoizedState;try{r.componentDidUpdate(d,s,r.__reactInternalSnapshotBeforeUpdate)}catch(b){ut(a,a.return,b)}}c&64&&OS(a),c&512&&Ll(a,a.return);break;case 3:if(Ui(r,a),c&64&&(r=a.updateQueue,r!==null)){if(s=null,a.child!==null)switch(a.child.tag){case 27:case 5:s=a.child.stateNode;break;case 1:s=a.child.stateNode}try{b0(r,s)}catch(b){ut(a,a.return,b)}}break;case 27:s===null&&c&4&&PS(a);case 26:case 5:Ui(r,a),s===null&&c&4&&LS(a),c&512&&Ll(a,a.return);break;case 12:Ui(r,a);break;case 13:Ui(r,a),c&4&&HS(r,a),c&64&&(r=a.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(a=sN.bind(null,a),wN(r,a))));break;case 22:if(c=a.memoizedState!==null||ni,!c){s=s!==null&&s.memoizedState!==null||Dt,d=ni;var m=Dt;ni=c,(Dt=s)&&!m?zi(r,a,(a.subtreeFlags&8772)!==0):Ui(r,a),ni=d,Dt=m}break;case 30:break;default:Ui(r,a)}}function zS(r){var s=r.alternate;s!==null&&(r.alternate=null,zS(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&Se(s)),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}var yt=null,vn=!1;function ri(r,s,a){for(a=a.child;a!==null;)BS(r,s,a),a=a.sibling}function BS(r,s,a){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(pn,a)}catch{}switch(a.tag){case 26:Dt||Rr(a,s),ri(r,s,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Dt||Rr(a,s);var c=yt,d=vn;Gi(a.type)&&(yt=a.stateNode,vn=!1),ri(r,s,a),ql(a.stateNode),yt=c,vn=d;break;case 5:Dt||Rr(a,s);case 6:if(c=yt,d=vn,yt=null,ri(r,s,a),yt=c,vn=d,yt!==null)if(vn)try{(yt.nodeType===9?yt.body:yt.nodeName==="HTML"?yt.ownerDocument.body:yt).removeChild(a.stateNode)}catch(m){ut(a,s,m)}else try{yt.removeChild(a.stateNode)}catch(m){ut(a,s,m)}break;case 18:yt!==null&&(vn?(r=yt,Ix(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,a.stateNode),Zl(r)):Ix(yt,a.stateNode));break;case 4:c=yt,d=vn,yt=a.stateNode.containerInfo,vn=!0,ri(r,s,a),yt=c,vn=d;break;case 0:case 11:case 14:case 15:Dt||$i(2,a,s),Dt||$i(4,a,s),ri(r,s,a);break;case 1:Dt||(Rr(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"&&MS(a,s,c)),ri(r,s,a);break;case 21:ri(r,s,a);break;case 22:Dt=(c=Dt)||a.memoizedState!==null,ri(r,s,a),Dt=c;break;default:ri(r,s,a)}}function HS(r,s){if(s.memoizedState===null&&(r=s.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{Zl(r)}catch(a){ut(s,s.return,a)}}function Xk(r){switch(r.tag){case 13:case 19:var s=r.stateNode;return s===null&&(s=r.stateNode=new $S),s;case 22:return r=r.stateNode,s=r._retryCache,s===null&&(s=r._retryCache=new $S),s;default:throw Error(i(435,r.tag))}}function Om(r,s){var a=Xk(r);s.forEach(function(c){var d=oN.bind(null,r,c);a.has(c)||(a.add(c),c.then(d,d))})}function Tn(r,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c],m=r,b=s,w=b;e:for(;w!==null;){switch(w.tag){case 27:if(Gi(w.type)){yt=w.stateNode,vn=!1;break e}break;case 5:yt=w.stateNode,vn=!1;break e;case 3:case 4:yt=w.stateNode.containerInfo,vn=!0;break e}w=w.return}if(yt===null)throw Error(i(160));BS(m,b,d),yt=null,vn=!1,m=d.alternate,m!==null&&(m.return=null),d.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)FS(s,r),s=s.sibling}var ar=null;function FS(r,s){var a=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:Tn(s,r),Rn(r),c&4&&($i(3,r,r.return),Ml(3,r),$i(5,r,r.return));break;case 1:Tn(s,r),Rn(r),c&512&&(Dt||a===null||Rr(a,a.return)),c&64&&ni&&(r=r.updateQueue,r!==null&&(c=r.callbacks,c!==null&&(a=r.shared.hiddenCallbacks,r.shared.hiddenCallbacks=a===null?c:a.concat(c))));break;case 26:var d=ar;if(Tn(s,r),Rn(r),c&512&&(Dt||a===null||Rr(a,a.return)),c&4){var m=a!==null?a.memoizedState:null;if(c=r.memoizedState,a===null)if(c===null)if(r.stateNode===null){e:{c=r.type,a=r.memoizedProps,d=d.ownerDocument||d;t:switch(c){case"title":m=d.getElementsByTagName("title")[0],(!m||m[_e]||m[ce]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=d.createElement(c),d.head.insertBefore(m,d.querySelector("head > title"))),Xt(m,c,a),m[ce]=r,Me(m),c=m;break e;case"link":var b=Px("link","href",d).get(c+(a.href||""));if(b){for(var w=0;w<b.length;w++)if(m=b[w],m.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&m.getAttribute("rel")===(a.rel==null?null:a.rel)&&m.getAttribute("title")===(a.title==null?null:a.title)&&m.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){b.splice(w,1);break t}}m=d.createElement(c),Xt(m,c,a),d.head.appendChild(m);break;case"meta":if(b=Px("meta","content",d).get(c+(a.content||""))){for(w=0;w<b.length;w++)if(m=b[w],m.getAttribute("content")===(a.content==null?null:""+a.content)&&m.getAttribute("name")===(a.name==null?null:a.name)&&m.getAttribute("property")===(a.property==null?null:a.property)&&m.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&m.getAttribute("charset")===(a.charSet==null?null:a.charSet)){b.splice(w,1);break t}}m=d.createElement(c),Xt(m,c,a),d.head.appendChild(m);break;default:throw Error(i(468,c))}m[ce]=r,Me(m),c=m}r.stateNode=c}else $x(d,r.type,r.stateNode);else r.stateNode=jx(d,c,r.memoizedProps);else m!==c?(m===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):m.count--,c===null?$x(d,r.type,r.stateNode):jx(d,c,r.memoizedProps)):c===null&&r.stateNode!==null&&Im(r,r.memoizedProps,a.memoizedProps)}break;case 27:Tn(s,r),Rn(r),c&512&&(Dt||a===null||Rr(a,a.return)),a!==null&&c&4&&Im(r,r.memoizedProps,a.memoizedProps);break;case 5:if(Tn(s,r),Rn(r),c&512&&(Dt||a===null||Rr(a,a.return)),r.flags&32){d=r.stateNode;try{Lo(d,"")}catch(J){ut(r,r.return,J)}}c&4&&r.stateNode!=null&&(d=r.memoizedProps,Im(r,d,a!==null?a.memoizedProps:d)),c&1024&&(Nm=!0);break;case 6:if(Tn(s,r),Rn(r),c&4){if(r.stateNode===null)throw Error(i(162));c=r.memoizedProps,a=r.stateNode;try{a.nodeValue=c}catch(J){ut(r,r.return,J)}}break;case 3:if(Ld=null,d=ar,ar=Od(s.containerInfo),Tn(s,r),ar=d,Rn(r),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Zl(s.containerInfo)}catch(J){ut(r,r.return,J)}Nm&&(Nm=!1,qS(r));break;case 4:c=ar,ar=Od(r.stateNode.containerInfo),Tn(s,r),Rn(r),ar=c;break;case 12:Tn(s,r),Rn(r);break;case 13:Tn(s,r),Rn(r),r.child.flags&8192&&r.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Um=Wt()),c&4&&(c=r.updateQueue,c!==null&&(r.updateQueue=null,Om(r,c)));break;case 22:d=r.memoizedState!==null;var L=a!==null&&a.memoizedState!==null,Q=ni,re=Dt;if(ni=Q||d,Dt=re||L,Tn(s,r),Dt=re,ni=Q,Rn(r),c&8192)e:for(s=r.stateNode,s._visibility=d?s._visibility&-2:s._visibility|1,d&&(a===null||L||ni||Dt||Ks(r)),a=null,s=r;;){if(s.tag===5||s.tag===26){if(a===null){L=a=s;try{if(m=L.stateNode,d)b=m.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{w=L.stateNode;var oe=L.memoizedProps.style,Z=oe!=null&&oe.hasOwnProperty("display")?oe.display:null;w.style.display=Z==null||typeof Z=="boolean"?"":(""+Z).trim()}}catch(J){ut(L,L.return,J)}}}else if(s.tag===6){if(a===null){L=s;try{L.stateNode.nodeValue=d?"":L.memoizedProps}catch(J){ut(L,L.return,J)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===r)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break e;for(;s.sibling===null;){if(s.return===null||s.return===r)break e;a===s&&(a=null),s=s.return}a===s&&(a=null),s.sibling.return=s.return,s=s.sibling}c&4&&(c=r.updateQueue,c!==null&&(a=c.retryQueue,a!==null&&(c.retryQueue=null,Om(r,a))));break;case 19:Tn(s,r),Rn(r),c&4&&(c=r.updateQueue,c!==null&&(r.updateQueue=null,Om(r,c)));break;case 30:break;case 21:break;default:Tn(s,r),Rn(r)}}function Rn(r){var s=r.flags;if(s&2){try{for(var a,c=r.return;c!==null;){if(jS(c)){a=c;break}c=c.return}if(a==null)throw Error(i(160));switch(a.tag){case 27:var d=a.stateNode,m=Dm(r);bd(r,m,d);break;case 5:var b=a.stateNode;a.flags&32&&(Lo(b,""),a.flags&=-33);var w=Dm(r);bd(r,w,b);break;case 3:case 4:var L=a.stateNode.containerInfo,Q=Dm(r);km(r,Q,L);break;default:throw Error(i(161))}}catch(re){ut(r,r.return,re)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function qS(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var s=r;qS(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),r=r.sibling}}function Ui(r,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)US(r,s.alternate,s),s=s.sibling}function Ks(r){for(r=r.child;r!==null;){var s=r;switch(s.tag){case 0:case 11:case 14:case 15:$i(4,s,s.return),Ks(s);break;case 1:Rr(s,s.return);var a=s.stateNode;typeof a.componentWillUnmount=="function"&&MS(s,s.return,a),Ks(s);break;case 27:ql(s.stateNode);case 26:case 5:Rr(s,s.return),Ks(s);break;case 22:s.memoizedState===null&&Ks(s);break;case 30:Ks(s);break;default:Ks(s)}r=r.sibling}}function zi(r,s,a){for(a=a&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var c=s.alternate,d=r,m=s,b=m.flags;switch(m.tag){case 0:case 11:case 15:zi(d,m,a),Ml(4,m);break;case 1:if(zi(d,m,a),c=m,d=c.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(Q){ut(c,c.return,Q)}if(c=m,d=c.updateQueue,d!==null){var w=c.stateNode;try{var L=d.shared.hiddenCallbacks;if(L!==null)for(d.shared.hiddenCallbacks=null,d=0;d<L.length;d++)_0(L[d],w)}catch(Q){ut(c,c.return,Q)}}a&&b&64&&OS(m),Ll(m,m.return);break;case 27:PS(m);case 26:case 5:zi(d,m,a),a&&c===null&&b&4&&LS(m),Ll(m,m.return);break;case 12:zi(d,m,a);break;case 13:zi(d,m,a),a&&b&4&&HS(d,m);break;case 22:m.memoizedState===null&&zi(d,m,a),Ll(m,m.return);break;case 30:break;default:zi(d,m,a)}s=s.sibling}}function Mm(r,s){var a=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==a&&(r!=null&&r.refCount++,a!=null&&bl(a))}function Lm(r,s){r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&bl(r))}function Ar(r,s,a,c){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)VS(r,s,a,c),s=s.sibling}function VS(r,s,a,c){var d=s.flags;switch(s.tag){case 0:case 11:case 15:Ar(r,s,a,c),d&2048&&Ml(9,s);break;case 1:Ar(r,s,a,c);break;case 3:Ar(r,s,a,c),d&2048&&(r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&bl(r)));break;case 12:if(d&2048){Ar(r,s,a,c),r=s.stateNode;try{var m=s.memoizedProps,b=m.id,w=m.onPostCommit;typeof w=="function"&&w(b,s.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(L){ut(s,s.return,L)}}else Ar(r,s,a,c);break;case 13:Ar(r,s,a,c);break;case 23:break;case 22:m=s.stateNode,b=s.alternate,s.memoizedState!==null?m._visibility&2?Ar(r,s,a,c):jl(r,s):m._visibility&2?Ar(r,s,a,c):(m._visibility|=2,ea(r,s,a,c,(s.subtreeFlags&10256)!==0)),d&2048&&Mm(b,s);break;case 24:Ar(r,s,a,c),d&2048&&Lm(s.alternate,s);break;default:Ar(r,s,a,c)}}function ea(r,s,a,c,d){for(d=d&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var m=r,b=s,w=a,L=c,Q=b.flags;switch(b.tag){case 0:case 11:case 15:ea(m,b,w,L,d),Ml(8,b);break;case 23:break;case 22:var re=b.stateNode;b.memoizedState!==null?re._visibility&2?ea(m,b,w,L,d):jl(m,b):(re._visibility|=2,ea(m,b,w,L,d)),d&&Q&2048&&Mm(b.alternate,b);break;case 24:ea(m,b,w,L,d),d&&Q&2048&&Lm(b.alternate,b);break;default:ea(m,b,w,L,d)}s=s.sibling}}function jl(r,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var a=r,c=s,d=c.flags;switch(c.tag){case 22:jl(a,c),d&2048&&Mm(c.alternate,c);break;case 24:jl(a,c),d&2048&&Lm(c.alternate,c);break;default:jl(a,c)}s=s.sibling}}var Pl=8192;function ta(r){if(r.subtreeFlags&Pl)for(r=r.child;r!==null;)GS(r),r=r.sibling}function GS(r){switch(r.tag){case 26:ta(r),r.flags&Pl&&r.memoizedState!==null&&jN(ar,r.memoizedState,r.memoizedProps);break;case 5:ta(r);break;case 3:case 4:var s=ar;ar=Od(r.stateNode.containerInfo),ta(r),ar=s;break;case 22:r.memoizedState===null&&(s=r.alternate,s!==null&&s.memoizedState!==null?(s=Pl,Pl=16777216,ta(r),Pl=s):ta(r));break;default:ta(r)}}function WS(r){var s=r.alternate;if(s!==null&&(r=s.child,r!==null)){s.child=null;do s=r.sibling,r.sibling=null,r=s;while(r!==null)}}function $l(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var a=0;a<s.length;a++){var c=s[a];zt=c,QS(c,r)}WS(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)YS(r),r=r.sibling}function YS(r){switch(r.tag){case 0:case 11:case 15:$l(r),r.flags&2048&&$i(9,r,r.return);break;case 3:$l(r);break;case 12:$l(r);break;case 22:var s=r.stateNode;r.memoizedState!==null&&s._visibility&2&&(r.return===null||r.return.tag!==13)?(s._visibility&=-3,Sd(r)):$l(r);break;default:$l(r)}}function Sd(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var a=0;a<s.length;a++){var c=s[a];zt=c,QS(c,r)}WS(r)}for(r=r.child;r!==null;){switch(s=r,s.tag){case 0:case 11:case 15:$i(8,s,s.return),Sd(s);break;case 22:a=s.stateNode,a._visibility&2&&(a._visibility&=-3,Sd(s));break;default:Sd(s)}r=r.sibling}}function QS(r,s){for(;zt!==null;){var a=zt;switch(a.tag){case 0:case 11:case 15:$i(8,a,s);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var c=a.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:bl(a.memoizedState.cache)}if(c=a.child,c!==null)c.return=a,zt=c;else e:for(a=r;zt!==null;){c=zt;var d=c.sibling,m=c.return;if(zS(c),c===a){zt=null;break e}if(d!==null){d.return=m,zt=d;break e}zt=m}}}var Zk={getCacheForType:function(r){var s=rn(Lt),a=s.data.get(r);return a===void 0&&(a=r(),s.data.set(r,a)),a}},Jk=typeof WeakMap=="function"?WeakMap:Map,nt=0,dt=null,Ve=null,Ye=0,rt=0,An=null,Bi=!1,na=!1,jm=!1,ii=0,Tt=0,Hi=0,Xs=0,Pm=0,Vn=0,ra=0,Ul=null,_n=null,$m=!1,Um=0,xd=1/0,wd=null,Fi=null,Kt=0,qi=null,ia=null,sa=0,zm=0,Bm=null,KS=null,zl=0,Hm=null;function In(){if((nt&2)!==0&&Ye!==0)return Ye&-Ye;if(P.T!==null){var r=Go;return r!==0?r:Qm()}return $()}function XS(){Vn===0&&(Vn=(Ye&536870912)===0||Ze?ko():536870912);var r=qn.current;return r!==null&&(r.flags|=32),Vn}function Dn(r,s,a){(r===dt&&(rt===2||rt===9)||r.cancelPendingCommit!==null)&&(oa(r,0),Vi(r,Ye,Vn,!1)),Ms(r,a),((nt&2)===0||r!==dt)&&(r===dt&&((nt&2)===0&&(Xs|=a),Tt===4&&Vi(r,Ye,Vn,!1)),Ir(r))}function ZS(r,s,a){if((nt&6)!==0)throw Error(i(327));var c=!a&&(s&124)===0&&(s&r.expiredLanes)===0||wr(r,s),d=c?nN(r,s):Vm(r,s,!0),m=c;do{if(d===0){na&&!c&&Vi(r,s,0,!1);break}else{if(a=r.current.alternate,m&&!eN(a)){d=Vm(r,s,!1),m=!1;continue}if(d===2){if(m=s,r.errorRecoveryDisabledLanes&m)var b=0;else b=r.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){s=b;e:{var w=r;d=Ul;var L=w.current.memoizedState.isDehydrated;if(L&&(oa(w,b).flags|=256),b=Vm(w,b,!1),b!==2){if(jm&&!L){w.errorRecoveryDisabledLanes|=m,Xs|=m,d=4;break e}m=_n,_n=d,m!==null&&(_n===null?_n=m:_n.push.apply(_n,m))}d=b}if(m=!1,d!==2)continue}}if(d===1){oa(r,0),Vi(r,s,0,!0);break}e:{switch(c=r,m=d,m){case 0:case 1:throw Error(i(345));case 4:if((s&4194048)!==s)break;case 6:Vi(c,s,Vn,!Bi);break e;case 2:_n=null;break;case 3:case 5:break;default:throw Error(i(329))}if((s&62914560)===s&&(d=Um+300-Wt(),10<d)){if(Vi(c,s,Vn,!Bi),Os(c,0,!0)!==0)break e;c.timeoutHandle=Rx(JS.bind(null,c,a,_n,wd,$m,s,Vn,Xs,ra,Bi,m,2,-0,0),d);break e}JS(c,a,_n,wd,$m,s,Vn,Xs,ra,Bi,m,0,-0,0)}}break}while(!0);Ir(r)}function JS(r,s,a,c,d,m,b,w,L,Q,re,oe,Z,J){if(r.timeoutHandle=-1,oe=s.subtreeFlags,(oe&8192||(oe&16785408)===16785408)&&(Wl={stylesheets:null,count:0,unsuspend:LN},GS(s),oe=PN(),oe!==null)){r.cancelPendingCommit=oe(ox.bind(null,r,s,m,a,c,d,b,w,L,re,1,Z,J)),Vi(r,m,b,!Q);return}ox(r,s,m,a,c,d,b,w,L)}function eN(r){for(var s=r;;){var a=s.tag;if((a===0||a===11||a===15)&&s.flags&16384&&(a=s.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!En(m(),d))return!1}catch{return!1}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Vi(r,s,a,c){s&=~Pm,s&=~Xs,r.suspendedLanes|=s,r.pingedLanes&=~s,c&&(r.warmLanes|=s),c=r.expirationTimes;for(var d=s;0<d;){var m=31-Yt(d),b=1<<m;c[m]=-1,d&=~b}a!==0&&Ls(r,a,s)}function Ed(){return(nt&6)===0?(Bl(0),!1):!0}function Fm(){if(Ve!==null){if(rt===0)var r=Ve.return;else r=Ve,Kr=Vs=null,om(r),Zo=null,kl=0,r=Ve;for(;r!==null;)NS(r.alternate,r),r=r.return;Ve=null}}function oa(r,s){var a=r.timeoutHandle;a!==-1&&(r.timeoutHandle=-1,vN(a)),a=r.cancelPendingCommit,a!==null&&(r.cancelPendingCommit=null,a()),Fm(),dt=r,Ve=a=Wr(r.current,null),Ye=s,rt=0,An=null,Bi=!1,na=wr(r,s),jm=!1,ra=Vn=Pm=Xs=Hi=Tt=0,_n=Ul=null,$m=!1,(s&8)!==0&&(s|=s&32);var c=r.entangledLanes;if(c!==0)for(r=r.entanglements,c&=s;0<c;){var d=31-Yt(c),m=1<<d;s|=r[d],c&=~m}return ii=s,Gu(),a}function ex(r,s){Be=null,P.H=dd,s===xl||s===td?(s=y0(),rt=3):s===p0?(s=y0(),rt=4):rt=s===vS?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,An=s,Ve===null&&(Tt=1,gd(r,zn(s,r.current)))}function tx(){var r=P.H;return P.H=dd,r===null?dd:r}function nx(){var r=P.A;return P.A=Zk,r}function qm(){Tt=4,Bi||(Ye&4194048)!==Ye&&qn.current!==null||(na=!0),(Hi&134217727)===0&&(Xs&134217727)===0||dt===null||Vi(dt,Ye,Vn,!1)}function Vm(r,s,a){var c=nt;nt|=2;var d=tx(),m=nx();(dt!==r||Ye!==s)&&(wd=null,oa(r,s)),s=!1;var b=Tt;e:do try{if(rt!==0&&Ve!==null){var w=Ve,L=An;switch(rt){case 8:Fm(),b=6;break e;case 3:case 2:case 9:case 6:qn.current===null&&(s=!0);var Q=rt;if(rt=0,An=null,aa(r,w,L,Q),a&&na){b=0;break e}break;default:Q=rt,rt=0,An=null,aa(r,w,L,Q)}}tN(),b=Tt;break}catch(re){ex(r,re)}while(!0);return s&&r.shellSuspendCounter++,Kr=Vs=null,nt=c,P.H=d,P.A=m,Ve===null&&(dt=null,Ye=0,Gu()),b}function tN(){for(;Ve!==null;)rx(Ve)}function nN(r,s){var a=nt;nt|=2;var c=tx(),d=nx();dt!==r||Ye!==s?(wd=null,xd=Wt()+500,oa(r,s)):na=wr(r,s);e:do try{if(rt!==0&&Ve!==null){s=Ve;var m=An;t:switch(rt){case 1:rt=0,An=null,aa(r,s,m,1);break;case 2:case 9:if(m0(m)){rt=0,An=null,ix(s);break}s=function(){rt!==2&&rt!==9||dt!==r||(rt=7),Ir(r)},m.then(s,s);break e;case 3:rt=7;break e;case 4:rt=5;break e;case 7:m0(m)?(rt=0,An=null,ix(s)):(rt=0,An=null,aa(r,s,m,7));break;case 5:var b=null;switch(Ve.tag){case 26:b=Ve.memoizedState;case 5:case 27:var w=Ve;if(!b||Ux(b)){rt=0,An=null;var L=w.sibling;if(L!==null)Ve=L;else{var Q=w.return;Q!==null?(Ve=Q,Cd(Q)):Ve=null}break t}}rt=0,An=null,aa(r,s,m,5);break;case 6:rt=0,An=null,aa(r,s,m,6);break;case 8:Fm(),Tt=6;break e;default:throw Error(i(462))}}rN();break}catch(re){ex(r,re)}while(!0);return Kr=Vs=null,P.H=c,P.A=d,nt=a,Ve!==null?0:(dt=null,Ye=0,Gu(),Tt)}function rN(){for(;Ve!==null&&!jn();)rx(Ve)}function rx(r){var s=DS(r.alternate,r,ii);r.memoizedProps=r.pendingProps,s===null?Cd(r):Ve=s}function ix(r){var s=r,a=s.alternate;switch(s.tag){case 15:case 0:s=ES(a,s,s.pendingProps,s.type,void 0,Ye);break;case 11:s=ES(a,s,s.pendingProps,s.type.render,s.ref,Ye);break;case 5:om(s);default:NS(a,s),s=Ve=s0(s,ii),s=DS(a,s,ii)}r.memoizedProps=r.pendingProps,s===null?Cd(r):Ve=s}function aa(r,s,a,c){Kr=Vs=null,om(s),Zo=null,kl=0;var d=s.return;try{if(Gk(r,d,s,a,Ye)){Tt=1,gd(r,zn(a,r.current)),Ve=null;return}}catch(m){if(d!==null)throw Ve=d,m;Tt=1,gd(r,zn(a,r.current)),Ve=null;return}s.flags&32768?(Ze||c===1?r=!0:na||(Ye&536870912)!==0?r=!1:(Bi=r=!0,(c===2||c===9||c===3||c===6)&&(c=qn.current,c!==null&&c.tag===13&&(c.flags|=16384))),sx(s,r)):Cd(s)}function Cd(r){var s=r;do{if((s.flags&32768)!==0){sx(s,Bi);return}r=s.return;var a=Yk(s.alternate,s,ii);if(a!==null){Ve=a;return}if(s=s.sibling,s!==null){Ve=s;return}Ve=s=r}while(s!==null);Tt===0&&(Tt=5)}function sx(r,s){do{var a=Qk(r.alternate,r);if(a!==null){a.flags&=32767,Ve=a;return}if(a=r.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!s&&(r=r.sibling,r!==null)){Ve=r;return}Ve=r=a}while(r!==null);Tt=6,Ve=null}function ox(r,s,a,c,d,m,b,w,L){r.cancelPendingCommit=null;do Td();while(Kt!==0);if((nt&6)!==0)throw Error(i(327));if(s!==null){if(s===r.current)throw Error(i(177));if(m=s.lanes|s.childLanes,m|=Lp,Mu(r,a,m,b,w,L),r===dt&&(Ve=dt=null,Ye=0),ia=s,qi=r,sa=a,zm=m,Bm=d,KS=c,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,aN(Do,function(){return dx(),null})):(r.callbackNode=null,r.callbackPriority=0),c=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||c){c=P.T,P.T=null,d=X.p,X.p=2,b=nt,nt|=4;try{Kk(r,s,a)}finally{nt=b,X.p=d,P.T=c}}Kt=1,ax(),lx(),cx()}}function ax(){if(Kt===1){Kt=0;var r=qi,s=ia,a=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var c=X.p;X.p=2;var d=nt;nt|=4;try{FS(s,r);var m=rg,b=Qb(r.containerInfo),w=m.focusedElem,L=m.selectionRange;if(b!==w&&w&&w.ownerDocument&&Yb(w.ownerDocument.documentElement,w)){if(L!==null&&Dp(w)){var Q=L.start,re=L.end;if(re===void 0&&(re=Q),"selectionStart"in w)w.selectionStart=Q,w.selectionEnd=Math.min(re,w.value.length);else{var oe=w.ownerDocument||document,Z=oe&&oe.defaultView||window;if(Z.getSelection){var J=Z.getSelection(),Oe=w.textContent.length,Re=Math.min(L.start,Oe),at=L.end===void 0?Re:Math.min(L.end,Oe);!J.extend&&Re>at&&(b=at,at=Re,Re=b);var q=Wb(w,Re),B=Wb(w,at);if(q&&B&&(J.rangeCount!==1||J.anchorNode!==q.node||J.anchorOffset!==q.offset||J.focusNode!==B.node||J.focusOffset!==B.offset)){var Y=oe.createRange();Y.setStart(q.node,q.offset),J.removeAllRanges(),Re>at?(J.addRange(Y),J.extend(B.node,B.offset)):(Y.setEnd(B.node,B.offset),J.addRange(Y))}}}}for(oe=[],J=w;J=J.parentNode;)J.nodeType===1&&oe.push({element:J,left:J.scrollLeft,top:J.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<oe.length;w++){var se=oe[w];se.element.scrollLeft=se.left,se.element.scrollTop=se.top}}$d=!!ng,rg=ng=null}finally{nt=d,X.p=c,P.T=a}}r.current=s,Kt=2}}function lx(){if(Kt===2){Kt=0;var r=qi,s=ia,a=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var c=X.p;X.p=2;var d=nt;nt|=4;try{US(r,s.alternate,s)}finally{nt=d,X.p=c,P.T=a}}Kt=3}}function cx(){if(Kt===4||Kt===3){Kt=0,Ur();var r=qi,s=ia,a=sa,c=KS;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?Kt=5:(Kt=0,ia=qi=null,ux(r,r.pendingLanes));var d=r.pendingLanes;if(d===0&&(Fi=null),ol(a),s=s.stateNode,_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(pn,s,void 0,(s.current.flags&128)===128)}catch{}if(c!==null){s=P.T,d=X.p,X.p=2,P.T=null;try{for(var m=r.onRecoverableError,b=0;b<c.length;b++){var w=c[b];m(w.value,{componentStack:w.stack})}}finally{P.T=s,X.p=d}}(sa&3)!==0&&Td(),Ir(r),d=r.pendingLanes,(a&4194090)!==0&&(d&42)!==0?r===Hm?zl++:(zl=0,Hm=r):zl=0,Bl(0)}}function ux(r,s){(r.pooledCacheLanes&=s)===0&&(s=r.pooledCache,s!=null&&(r.pooledCache=null,bl(s)))}function Td(r){return ax(),lx(),cx(),dx()}function dx(){if(Kt!==5)return!1;var r=qi,s=zm;zm=0;var a=ol(sa),c=P.T,d=X.p;try{X.p=32>a?32:a,P.T=null,a=Bm,Bm=null;var m=qi,b=sa;if(Kt=0,ia=qi=null,sa=0,(nt&6)!==0)throw Error(i(331));var w=nt;if(nt|=4,YS(m.current),VS(m,m.current,b,a),nt=w,Bl(0,!1),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(pn,m)}catch{}return!0}finally{X.p=d,P.T=c,ux(r,s)}}function fx(r,s,a){s=zn(a,s),s=bm(r.stateNode,s,2),r=Mi(r,s,2),r!==null&&(Ms(r,2),Ir(r))}function ut(r,s,a){if(r.tag===3)fx(r,r,a);else for(;s!==null;){if(s.tag===3){fx(s,r,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Fi===null||!Fi.has(c))){r=zn(a,r),a=gS(2),c=Mi(s,a,2),c!==null&&(yS(a,c,s,r),Ms(c,2),Ir(c));break}}s=s.return}}function Gm(r,s,a){var c=r.pingCache;if(c===null){c=r.pingCache=new Jk;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(a)||(jm=!0,d.add(a),r=iN.bind(null,r,s,a),s.then(r,r))}function iN(r,s,a){var c=r.pingCache;c!==null&&c.delete(s),r.pingedLanes|=r.suspendedLanes&a,r.warmLanes&=~a,dt===r&&(Ye&a)===a&&(Tt===4||Tt===3&&(Ye&62914560)===Ye&&300>Wt()-Um?(nt&2)===0&&oa(r,0):Pm|=a,ra===Ye&&(ra=0)),Ir(r)}function hx(r,s){s===0&&(s=Ou()),r=Ho(r,s),r!==null&&(Ms(r,s),Ir(r))}function sN(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),hx(r,a)}function oN(r,s){var a=0;switch(r.tag){case 13:var c=r.stateNode,d=r.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=r.stateNode;break;case 22:c=r.stateNode._retryCache;break;default:throw Error(i(314))}c!==null&&c.delete(s),hx(r,a)}function aN(r,s){return Ln(r,s)}var Rd=null,la=null,Wm=!1,Ad=!1,Ym=!1,Zs=0;function Ir(r){r!==la&&r.next===null&&(la===null?Rd=la=r:la=la.next=r),Ad=!0,Wm||(Wm=!0,cN())}function Bl(r,s){if(!Ym&&Ad){Ym=!0;do for(var a=!1,c=Rd;c!==null;){if(r!==0){var d=c.pendingLanes;if(d===0)var m=0;else{var b=c.suspendedLanes,w=c.pingedLanes;m=(1<<31-Yt(42|r)+1)-1,m&=d&~(b&~w),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(a=!0,yx(c,m))}else m=Ye,m=Os(c,c===dt?m:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(m&3)===0||wr(c,m)||(a=!0,yx(c,m));c=c.next}while(a);Ym=!1}}function lN(){px()}function px(){Ad=Wm=!1;var r=0;Zs!==0&&(yN()&&(r=Zs),Zs=0);for(var s=Wt(),a=null,c=Rd;c!==null;){var d=c.next,m=mx(c,s);m===0?(c.next=null,a===null?Rd=d:a.next=d,d===null&&(la=a)):(a=c,(r!==0||(m&3)!==0)&&(Ad=!0)),c=d}Bl(r)}function mx(r,s){for(var a=r.suspendedLanes,c=r.pingedLanes,d=r.expirationTimes,m=r.pendingLanes&-62914561;0<m;){var b=31-Yt(m),w=1<<b,L=d[b];L===-1?((w&a)===0||(w&c)!==0)&&(d[b]=Nu(w,s)):L<=s&&(r.expiredLanes|=w),m&=~w}if(s=dt,a=Ye,a=Os(r,r===s?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),c=r.callbackNode,a===0||r===s&&(rt===2||rt===9)||r.cancelPendingCommit!==null)return c!==null&&c!==null&&wt(c),r.callbackNode=null,r.callbackPriority=0;if((a&3)===0||wr(r,a)){if(s=a&-a,s===r.callbackPriority)return s;switch(c!==null&&wt(c),ol(a)){case 2:case 8:a=Io;break;case 32:a=Do;break;case 268435456:a=Ri;break;default:a=Do}return c=gx.bind(null,r),a=Ln(a,c),r.callbackPriority=s,r.callbackNode=a,s}return c!==null&&c!==null&&wt(c),r.callbackPriority=2,r.callbackNode=null,2}function gx(r,s){if(Kt!==0&&Kt!==5)return r.callbackNode=null,r.callbackPriority=0,null;var a=r.callbackNode;if(Td()&&r.callbackNode!==a)return null;var c=Ye;return c=Os(r,r===dt?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),c===0?null:(ZS(r,c,s),mx(r,Wt()),r.callbackNode!=null&&r.callbackNode===a?gx.bind(null,r):null)}function yx(r,s){if(Td())return null;ZS(r,s,!0)}function cN(){_N(function(){(nt&6)!==0?Ln(Ds,lN):px()})}function Qm(){return Zs===0&&(Zs=ko()),Zs}function vx(r){return r==null||typeof r=="symbol"||typeof r=="boolean"?null:typeof r=="function"?r:Uu(""+r)}function _x(r,s){var a=s.ownerDocument.createElement("input");return a.name=s.name,a.value=s.value,r.id&&a.setAttribute("form",r.id),s.parentNode.insertBefore(a,s),r=new FormData(r),a.parentNode.removeChild(a),r}function uN(r,s,a,c,d){if(s==="submit"&&a&&a.stateNode===d){var m=vx((d[fe]||null).action),b=c.submitter;b&&(s=(s=b[fe]||null)?vx(s.formAction):b.getAttribute("formAction"),s!==null&&(m=s,b=null));var w=new Fu("action","action",null,c,d);r.push({event:w,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(Zs!==0){var L=b?_x(d,b):new FormData(d);mm(a,{pending:!0,data:L,method:d.method,action:m},null,L)}}else typeof m=="function"&&(w.preventDefault(),L=b?_x(d,b):new FormData(d),mm(a,{pending:!0,data:L,method:d.method,action:m},m,L))},currentTarget:d}]})}}for(var Km=0;Km<Mp.length;Km++){var Xm=Mp[Km],dN=Xm.toLowerCase(),fN=Xm[0].toUpperCase()+Xm.slice(1);or(dN,"on"+fN)}or(Zb,"onAnimationEnd"),or(Jb,"onAnimationIteration"),or(e0,"onAnimationStart"),or("dblclick","onDoubleClick"),or("focusin","onFocus"),or("focusout","onBlur"),or(Ik,"onTransitionRun"),or(Dk,"onTransitionStart"),or(kk,"onTransitionCancel"),or(t0,"onTransitionEnd"),ln("onMouseEnter",["mouseout","mouseover"]),ln("onMouseLeave",["mouseout","mouseover"]),ln("onPointerEnter",["pointerout","pointerover"]),ln("onPointerLeave",["pointerout","pointerover"]),wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),wn("onBeforeInput",["compositionend","keypress","textInput","paste"]),wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hN=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Hl));function bx(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var c=r[a],d=c.event;c=c.listeners;e:{var m=void 0;if(s)for(var b=c.length-1;0<=b;b--){var w=c[b],L=w.instance,Q=w.currentTarget;if(w=w.listener,L!==m&&d.isPropagationStopped())break e;m=w,d.currentTarget=Q;try{m(d)}catch(re){md(re)}d.currentTarget=null,m=L}else for(b=0;b<c.length;b++){if(w=c[b],L=w.instance,Q=w.currentTarget,w=w.listener,L!==m&&d.isPropagationStopped())break e;m=w,d.currentTarget=Q;try{m(d)}catch(re){md(re)}d.currentTarget=null,m=L}}}}function Ge(r,s){var a=s[xe];a===void 0&&(a=s[xe]=new Set);var c=r+"__bubble";a.has(c)||(Sx(s,r,2,!1),a.add(c))}function Zm(r,s,a){var c=0;s&&(c|=4),Sx(a,r,c,s)}var Id="_reactListening"+Math.random().toString(36).slice(2);function Jm(r){if(!r[Id]){r[Id]=!0,it.forEach(function(a){a!=="selectionchange"&&(hN.has(a)||Zm(a,!1,r),Zm(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[Id]||(s[Id]=!0,Zm("selectionchange",!1,s))}}function Sx(r,s,a,c){switch(Vx(s)){case 2:var d=zN;break;case 8:d=BN;break;default:d=hg}a=d.bind(null,s,a,r),d=void 0,!Sp||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?r.addEventListener(s,a,{capture:!0,passive:d}):r.addEventListener(s,a,!0):d!==void 0?r.addEventListener(s,a,{passive:d}):r.addEventListener(s,a,!1)}function eg(r,s,a,c,d){var m=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var b=c.tag;if(b===3||b===4){var w=c.stateNode.containerInfo;if(w===d)break;if(b===4)for(b=c.return;b!==null;){var L=b.tag;if((L===3||L===4)&&b.stateNode.containerInfo===d)return;b=b.return}for(;w!==null;){if(b=Ue(w),b===null)return;if(L=b.tag,L===5||L===6||L===26||L===27){c=m=b;continue e}w=w.parentNode}}c=c.return}Ab(function(){var Q=m,re=_p(a),oe=[];e:{var Z=n0.get(r);if(Z!==void 0){var J=Fu,Oe=r;switch(r){case"keypress":if(Bu(a)===0)break e;case"keydown":case"keyup":J=ak;break;case"focusin":Oe="focus",J=Cp;break;case"focusout":Oe="blur",J=Cp;break;case"beforeblur":case"afterblur":J=Cp;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":J=kb;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":J=QD;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":J=uk;break;case Zb:case Jb:case e0:J=ZD;break;case t0:J=fk;break;case"scroll":case"scrollend":J=WD;break;case"wheel":J=pk;break;case"copy":case"cut":case"paste":J=ek;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":J=Ob;break;case"toggle":case"beforetoggle":J=gk}var Re=(s&4)!==0,at=!Re&&(r==="scroll"||r==="scrollend"),q=Re?Z!==null?Z+"Capture":null:Z;Re=[];for(var B=Q,Y;B!==null;){var se=B;if(Y=se.stateNode,se=se.tag,se!==5&&se!==26&&se!==27||Y===null||q===null||(se=al(B,q),se!=null&&Re.push(Fl(B,se,Y))),at)break;B=B.return}0<Re.length&&(Z=new J(Z,Oe,null,a,re),oe.push({event:Z,listeners:Re}))}}if((s&7)===0){e:{if(Z=r==="mouseover"||r==="pointerover",J=r==="mouseout"||r==="pointerout",Z&&a!==vp&&(Oe=a.relatedTarget||a.fromElement)&&(Ue(Oe)||Oe[ye]))break e;if((J||Z)&&(Z=re.window===re?re:(Z=re.ownerDocument)?Z.defaultView||Z.parentWindow:window,J?(Oe=a.relatedTarget||a.toElement,J=Q,Oe=Oe?Ue(Oe):null,Oe!==null&&(at=l(Oe),Re=Oe.tag,Oe!==at||Re!==5&&Re!==27&&Re!==6)&&(Oe=null)):(J=null,Oe=Q),J!==Oe)){if(Re=kb,se="onMouseLeave",q="onMouseEnter",B="mouse",(r==="pointerout"||r==="pointerover")&&(Re=Ob,se="onPointerLeave",q="onPointerEnter",B="pointer"),at=J==null?Z:gt(J),Y=Oe==null?Z:gt(Oe),Z=new Re(se,B+"leave",J,a,re),Z.target=at,Z.relatedTarget=Y,se=null,Ue(re)===Q&&(Re=new Re(q,B+"enter",Oe,a,re),Re.target=Y,Re.relatedTarget=at,se=Re),at=se,J&&Oe)t:{for(Re=J,q=Oe,B=0,Y=Re;Y;Y=ca(Y))B++;for(Y=0,se=q;se;se=ca(se))Y++;for(;0<B-Y;)Re=ca(Re),B--;for(;0<Y-B;)q=ca(q),Y--;for(;B--;){if(Re===q||q!==null&&Re===q.alternate)break t;Re=ca(Re),q=ca(q)}Re=null}else Re=null;J!==null&&xx(oe,Z,J,Re,!1),Oe!==null&&at!==null&&xx(oe,at,Oe,Re,!0)}}e:{if(Z=Q?gt(Q):window,J=Z.nodeName&&Z.nodeName.toLowerCase(),J==="select"||J==="input"&&Z.type==="file")var ge=Bb;else if(Ub(Z))if(Hb)ge=Tk;else{ge=Ek;var He=wk}else J=Z.nodeName,!J||J.toLowerCase()!=="input"||Z.type!=="checkbox"&&Z.type!=="radio"?Q&&yp(Q.elementType)&&(ge=Bb):ge=Ck;if(ge&&(ge=ge(r,Q))){zb(oe,ge,a,re);break e}He&&He(r,Z,Q),r==="focusout"&&Q&&Z.type==="number"&&Q.memoizedProps.value!=null&&gp(Z,"number",Z.value)}switch(He=Q?gt(Q):window,r){case"focusin":(Ub(He)||He.contentEditable==="true")&&(Uo=He,kp=Q,ml=null);break;case"focusout":ml=kp=Uo=null;break;case"mousedown":Np=!0;break;case"contextmenu":case"mouseup":case"dragend":Np=!1,Kb(oe,a,re);break;case"selectionchange":if(Ak)break;case"keydown":case"keyup":Kb(oe,a,re)}var we;if(Rp)e:{switch(r){case"compositionstart":var Ie="onCompositionStart";break e;case"compositionend":Ie="onCompositionEnd";break e;case"compositionupdate":Ie="onCompositionUpdate";break e}Ie=void 0}else $o?Pb(r,a)&&(Ie="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(Ie="onCompositionStart");Ie&&(Mb&&a.locale!=="ko"&&($o||Ie!=="onCompositionStart"?Ie==="onCompositionEnd"&&$o&&(we=Ib()):(Di=re,xp="value"in Di?Di.value:Di.textContent,$o=!0)),He=Dd(Q,Ie),0<He.length&&(Ie=new Nb(Ie,r,null,a,re),oe.push({event:Ie,listeners:He}),we?Ie.data=we:(we=$b(a),we!==null&&(Ie.data=we)))),(we=vk?_k(r,a):bk(r,a))&&(Ie=Dd(Q,"onBeforeInput"),0<Ie.length&&(He=new Nb("onBeforeInput","beforeinput",null,a,re),oe.push({event:He,listeners:Ie}),He.data=we)),uN(oe,r,Q,a,re)}bx(oe,s)})}function Fl(r,s,a){return{instance:r,listener:s,currentTarget:a}}function Dd(r,s){for(var a=s+"Capture",c=[];r!==null;){var d=r,m=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||m===null||(d=al(r,a),d!=null&&c.unshift(Fl(r,d,m)),d=al(r,s),d!=null&&c.push(Fl(r,d,m))),r.tag===3)return c;r=r.return}return[]}function ca(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r||null}function xx(r,s,a,c,d){for(var m=s._reactName,b=[];a!==null&&a!==c;){var w=a,L=w.alternate,Q=w.stateNode;if(w=w.tag,L!==null&&L===c)break;w!==5&&w!==26&&w!==27||Q===null||(L=Q,d?(Q=al(a,m),Q!=null&&b.unshift(Fl(a,Q,L))):d||(Q=al(a,m),Q!=null&&b.push(Fl(a,Q,L)))),a=a.return}b.length!==0&&r.push({event:s,listeners:b})}var pN=/\r\n?/g,mN=/\u0000|\uFFFD/g;function wx(r){return(typeof r=="string"?r:""+r).replace(pN,`
`).replace(mN,"")}function Ex(r,s){return s=wx(s),wx(r)===s}function kd(){}function ot(r,s,a,c,d,m){switch(a){case"children":typeof c=="string"?s==="body"||s==="textarea"&&c===""||Lo(r,c):(typeof c=="number"||typeof c=="bigint")&&s!=="body"&&Lo(r,""+c);break;case"className":qr(r,"class",c);break;case"tabIndex":qr(r,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":qr(r,a,c);break;case"style":Tb(r,c,m);break;case"data":if(s!=="object"){qr(r,"data",c);break}case"src":case"href":if(c===""&&(s!=="a"||a!=="href")){r.removeAttribute(a);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){r.removeAttribute(a);break}c=Uu(""+c),r.setAttribute(a,c);break;case"action":case"formAction":if(typeof c=="function"){r.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(a==="formAction"?(s!=="input"&&ot(r,s,"name",d.name,d,null),ot(r,s,"formEncType",d.formEncType,d,null),ot(r,s,"formMethod",d.formMethod,d,null),ot(r,s,"formTarget",d.formTarget,d,null)):(ot(r,s,"encType",d.encType,d,null),ot(r,s,"method",d.method,d,null),ot(r,s,"target",d.target,d,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){r.removeAttribute(a);break}c=Uu(""+c),r.setAttribute(a,c);break;case"onClick":c!=null&&(r.onclick=kd);break;case"onScroll":c!=null&&Ge("scroll",r);break;case"onScrollEnd":c!=null&&Ge("scrollend",r);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(a=c.__html,a!=null){if(d.children!=null)throw Error(i(60));r.innerHTML=a}}break;case"multiple":r.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":r.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){r.removeAttribute("xlink:href");break}a=Uu(""+c),r.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(a,""+c):r.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(a,""):r.removeAttribute(a);break;case"capture":case"download":c===!0?r.setAttribute(a,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(a,c):r.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?r.setAttribute(a,c):r.removeAttribute(a);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?r.removeAttribute(a):r.setAttribute(a,c);break;case"popover":Ge("beforetoggle",r),Ge("toggle",r),Fr(r,"popover",c);break;case"xlinkActuate":Le(r,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":Le(r,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":Le(r,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":Le(r,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":Le(r,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":Le(r,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":Le(r,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":Le(r,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":Le(r,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":Fr(r,"is",c);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=VD.get(a)||a,Fr(r,a,c))}}function tg(r,s,a,c,d,m){switch(a){case"style":Tb(r,c,m);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(a=c.__html,a!=null){if(d.children!=null)throw Error(i(60));r.innerHTML=a}}break;case"children":typeof c=="string"?Lo(r,c):(typeof c=="number"||typeof c=="bigint")&&Lo(r,""+c);break;case"onScroll":c!=null&&Ge("scroll",r);break;case"onScrollEnd":c!=null&&Ge("scrollend",r);break;case"onClick":c!=null&&(r.onclick=kd);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Er.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(d=a.endsWith("Capture"),s=a.slice(2,d?a.length-7:void 0),m=r[fe]||null,m=m!=null?m[a]:null,typeof m=="function"&&r.removeEventListener(s,m,d),typeof c=="function")){typeof m!="function"&&m!==null&&(a in r?r[a]=null:r.hasAttribute(a)&&r.removeAttribute(a)),r.addEventListener(s,c,d);break e}a in r?r[a]=c:c===!0?r.setAttribute(a,""):Fr(r,a,c)}}}function Xt(r,s,a){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ge("error",r),Ge("load",r);var c=!1,d=!1,m;for(m in a)if(a.hasOwnProperty(m)){var b=a[m];if(b!=null)switch(m){case"src":c=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:ot(r,s,m,b,a,null)}}d&&ot(r,s,"srcSet",a.srcSet,a,null),c&&ot(r,s,"src",a.src,a,null);return;case"input":Ge("invalid",r);var w=m=b=d=null,L=null,Q=null;for(c in a)if(a.hasOwnProperty(c)){var re=a[c];if(re!=null)switch(c){case"name":d=re;break;case"type":b=re;break;case"checked":L=re;break;case"defaultChecked":Q=re;break;case"value":m=re;break;case"defaultValue":w=re;break;case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(i(137,s));break;default:ot(r,s,c,re,a,null)}}xb(r,m,w,L,Q,b,d,!1),Pu(r);return;case"select":Ge("invalid",r),c=b=m=null;for(d in a)if(a.hasOwnProperty(d)&&(w=a[d],w!=null))switch(d){case"value":m=w;break;case"defaultValue":b=w;break;case"multiple":c=w;default:ot(r,s,d,w,a,null)}s=m,a=b,r.multiple=!!c,s!=null?Mo(r,!!c,s,!1):a!=null&&Mo(r,!!c,a,!0);return;case"textarea":Ge("invalid",r),m=d=c=null;for(b in a)if(a.hasOwnProperty(b)&&(w=a[b],w!=null))switch(b){case"value":c=w;break;case"defaultValue":d=w;break;case"children":m=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(i(91));break;default:ot(r,s,b,w,a,null)}Eb(r,c,d,m),Pu(r);return;case"option":for(L in a)if(a.hasOwnProperty(L)&&(c=a[L],c!=null))switch(L){case"selected":r.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:ot(r,s,L,c,a,null)}return;case"dialog":Ge("beforetoggle",r),Ge("toggle",r),Ge("cancel",r),Ge("close",r);break;case"iframe":case"object":Ge("load",r);break;case"video":case"audio":for(c=0;c<Hl.length;c++)Ge(Hl[c],r);break;case"image":Ge("error",r),Ge("load",r);break;case"details":Ge("toggle",r);break;case"embed":case"source":case"link":Ge("error",r),Ge("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(c=a[Q],c!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:ot(r,s,Q,c,a,null)}return;default:if(yp(s)){for(re in a)a.hasOwnProperty(re)&&(c=a[re],c!==void 0&&tg(r,s,re,c,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(c=a[w],c!=null&&ot(r,s,w,c,a,null))}function gN(r,s,a,c){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,m=null,b=null,w=null,L=null,Q=null,re=null;for(J in a){var oe=a[J];if(a.hasOwnProperty(J)&&oe!=null)switch(J){case"checked":break;case"value":break;case"defaultValue":L=oe;default:c.hasOwnProperty(J)||ot(r,s,J,null,c,oe)}}for(var Z in c){var J=c[Z];if(oe=a[Z],c.hasOwnProperty(Z)&&(J!=null||oe!=null))switch(Z){case"type":m=J;break;case"name":d=J;break;case"checked":Q=J;break;case"defaultChecked":re=J;break;case"value":b=J;break;case"defaultValue":w=J;break;case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(i(137,s));break;default:J!==oe&&ot(r,s,Z,J,c,oe)}}mp(r,b,w,L,Q,re,m,d);return;case"select":J=b=w=Z=null;for(m in a)if(L=a[m],a.hasOwnProperty(m)&&L!=null)switch(m){case"value":break;case"multiple":J=L;default:c.hasOwnProperty(m)||ot(r,s,m,null,c,L)}for(d in c)if(m=c[d],L=a[d],c.hasOwnProperty(d)&&(m!=null||L!=null))switch(d){case"value":Z=m;break;case"defaultValue":w=m;break;case"multiple":b=m;default:m!==L&&ot(r,s,d,m,c,L)}s=w,a=b,c=J,Z!=null?Mo(r,!!a,Z,!1):!!c!=!!a&&(s!=null?Mo(r,!!a,s,!0):Mo(r,!!a,a?[]:"",!1));return;case"textarea":J=Z=null;for(w in a)if(d=a[w],a.hasOwnProperty(w)&&d!=null&&!c.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:ot(r,s,w,null,c,d)}for(b in c)if(d=c[b],m=a[b],c.hasOwnProperty(b)&&(d!=null||m!=null))switch(b){case"value":Z=d;break;case"defaultValue":J=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(i(91));break;default:d!==m&&ot(r,s,b,d,c,m)}wb(r,Z,J);return;case"option":for(var Oe in a)if(Z=a[Oe],a.hasOwnProperty(Oe)&&Z!=null&&!c.hasOwnProperty(Oe))switch(Oe){case"selected":r.selected=!1;break;default:ot(r,s,Oe,null,c,Z)}for(L in c)if(Z=c[L],J=a[L],c.hasOwnProperty(L)&&Z!==J&&(Z!=null||J!=null))switch(L){case"selected":r.selected=Z&&typeof Z!="function"&&typeof Z!="symbol";break;default:ot(r,s,L,Z,c,J)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Re in a)Z=a[Re],a.hasOwnProperty(Re)&&Z!=null&&!c.hasOwnProperty(Re)&&ot(r,s,Re,null,c,Z);for(Q in c)if(Z=c[Q],J=a[Q],c.hasOwnProperty(Q)&&Z!==J&&(Z!=null||J!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(i(137,s));break;default:ot(r,s,Q,Z,c,J)}return;default:if(yp(s)){for(var at in a)Z=a[at],a.hasOwnProperty(at)&&Z!==void 0&&!c.hasOwnProperty(at)&&tg(r,s,at,void 0,c,Z);for(re in c)Z=c[re],J=a[re],!c.hasOwnProperty(re)||Z===J||Z===void 0&&J===void 0||tg(r,s,re,Z,c,J);return}}for(var q in a)Z=a[q],a.hasOwnProperty(q)&&Z!=null&&!c.hasOwnProperty(q)&&ot(r,s,q,null,c,Z);for(oe in c)Z=c[oe],J=a[oe],!c.hasOwnProperty(oe)||Z===J||Z==null&&J==null||ot(r,s,oe,Z,c,J)}var ng=null,rg=null;function Nd(r){return r.nodeType===9?r:r.ownerDocument}function Cx(r){switch(r){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Tx(r,s){if(r===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return r===1&&s==="foreignObject"?0:r}function ig(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var sg=null;function yN(){var r=window.event;return r&&r.type==="popstate"?r===sg?!1:(sg=r,!0):(sg=null,!1)}var Rx=typeof setTimeout=="function"?setTimeout:void 0,vN=typeof clearTimeout=="function"?clearTimeout:void 0,Ax=typeof Promise=="function"?Promise:void 0,_N=typeof queueMicrotask=="function"?queueMicrotask:typeof Ax<"u"?function(r){return Ax.resolve(null).then(r).catch(bN)}:Rx;function bN(r){setTimeout(function(){throw r})}function Gi(r){return r==="head"}function Ix(r,s){var a=s,c=0,d=0;do{var m=a.nextSibling;if(r.removeChild(a),m&&m.nodeType===8)if(a=m.data,a==="/$"){if(0<c&&8>c){a=c;var b=r.ownerDocument;if(a&1&&ql(b.documentElement),a&2&&ql(b.body),a&4)for(a=b.head,ql(a),b=a.firstChild;b;){var w=b.nextSibling,L=b.nodeName;b[_e]||L==="SCRIPT"||L==="STYLE"||L==="LINK"&&b.rel.toLowerCase()==="stylesheet"||a.removeChild(b),b=w}}if(d===0){r.removeChild(m),Zl(s);return}d--}else a==="$"||a==="$?"||a==="$!"?d++:c=a.charCodeAt(0)-48;else c=0;a=m}while(a);Zl(s)}function og(r){var s=r.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var a=s;switch(s=s.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":og(a),Se(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}r.removeChild(a)}}function SN(r,s,a,c){for(;r.nodeType===1;){var d=a;if(r.nodeName.toLowerCase()!==s.toLowerCase()){if(!c&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(c){if(!r[_e])switch(s){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(m=r.getAttribute("rel"),m==="stylesheet"&&r.hasAttribute("data-precedence"))break;if(m!==d.rel||r.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||r.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||r.getAttribute("title")!==(d.title==null?null:d.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(m=r.getAttribute("src"),(m!==(d.src==null?null:d.src)||r.getAttribute("type")!==(d.type==null?null:d.type)||r.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&m&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}}else if(s==="input"&&r.type==="hidden"){var m=d.name==null?null:""+d.name;if(d.type==="hidden"&&r.getAttribute("name")===m)return r}else return r;if(r=lr(r.nextSibling),r===null)break}return null}function xN(r,s,a){if(s==="")return null;for(;r.nodeType!==3;)if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!a||(r=lr(r.nextSibling),r===null))return null;return r}function ag(r){return r.data==="$!"||r.data==="$?"&&r.ownerDocument.readyState==="complete"}function wN(r,s){var a=r.ownerDocument;if(r.data!=="$?"||a.readyState==="complete")s();else{var c=function(){s(),a.removeEventListener("DOMContentLoaded",c)};a.addEventListener("DOMContentLoaded",c),r._reactRetry=c}}function lr(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return r}var lg=null;function Dx(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}function kx(r,s,a){switch(s=Nd(a),r){case"html":if(r=s.documentElement,!r)throw Error(i(452));return r;case"head":if(r=s.head,!r)throw Error(i(453));return r;case"body":if(r=s.body,!r)throw Error(i(454));return r;default:throw Error(i(451))}}function ql(r){for(var s=r.attributes;s.length;)r.removeAttributeNode(s[0]);Se(r)}var Gn=new Map,Nx=new Set;function Od(r){return typeof r.getRootNode=="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}var si=X.d;X.d={f:EN,r:CN,D:TN,C:RN,L:AN,m:IN,X:kN,S:DN,M:NN};function EN(){var r=si.f(),s=Ed();return r||s}function CN(r){var s=Xe(r);s!==null&&s.tag===5&&s.type==="form"?Z0(s):si.r(r)}var ua=typeof document>"u"?null:document;function Ox(r,s,a){var c=ua;if(c&&typeof s=="string"&&s){var d=Un(s);d='link[rel="'+r+'"][href="'+d+'"]',typeof a=="string"&&(d+='[crossorigin="'+a+'"]'),Nx.has(d)||(Nx.add(d),r={rel:r,crossOrigin:a,href:s},c.querySelector(d)===null&&(s=c.createElement("link"),Xt(s,"link",r),Me(s),c.head.appendChild(s)))}}function TN(r){si.D(r),Ox("dns-prefetch",r,null)}function RN(r,s){si.C(r,s),Ox("preconnect",r,s)}function AN(r,s,a){si.L(r,s,a);var c=ua;if(c&&r&&s){var d='link[rel="preload"][as="'+Un(s)+'"]';s==="image"&&a&&a.imageSrcSet?(d+='[imagesrcset="'+Un(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(d+='[imagesizes="'+Un(a.imageSizes)+'"]')):d+='[href="'+Un(r)+'"]';var m=d;switch(s){case"style":m=da(r);break;case"script":m=fa(r)}Gn.has(m)||(r=y({rel:"preload",href:s==="image"&&a&&a.imageSrcSet?void 0:r,as:s},a),Gn.set(m,r),c.querySelector(d)!==null||s==="style"&&c.querySelector(Vl(m))||s==="script"&&c.querySelector(Gl(m))||(s=c.createElement("link"),Xt(s,"link",r),Me(s),c.head.appendChild(s)))}}function IN(r,s){si.m(r,s);var a=ua;if(a&&r){var c=s&&typeof s.as=="string"?s.as:"script",d='link[rel="modulepreload"][as="'+Un(c)+'"][href="'+Un(r)+'"]',m=d;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=fa(r)}if(!Gn.has(m)&&(r=y({rel:"modulepreload",href:r},s),Gn.set(m,r),a.querySelector(d)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Gl(m)))return}c=a.createElement("link"),Xt(c,"link",r),Me(c),a.head.appendChild(c)}}}function DN(r,s,a){si.S(r,s,a);var c=ua;if(c&&r){var d=Et(c).hoistableStyles,m=da(r);s=s||"default";var b=d.get(m);if(!b){var w={loading:0,preload:null};if(b=c.querySelector(Vl(m)))w.loading=5;else{r=y({rel:"stylesheet",href:r,"data-precedence":s},a),(a=Gn.get(m))&&cg(r,a);var L=b=c.createElement("link");Me(L),Xt(L,"link",r),L._p=new Promise(function(Q,re){L.onload=Q,L.onerror=re}),L.addEventListener("load",function(){w.loading|=1}),L.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Md(b,s,c)}b={type:"stylesheet",instance:b,count:1,state:w},d.set(m,b)}}}function kN(r,s){si.X(r,s);var a=ua;if(a&&r){var c=Et(a).hoistableScripts,d=fa(r),m=c.get(d);m||(m=a.querySelector(Gl(d)),m||(r=y({src:r,async:!0},s),(s=Gn.get(d))&&ug(r,s),m=a.createElement("script"),Me(m),Xt(m,"link",r),a.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(d,m))}}function NN(r,s){si.M(r,s);var a=ua;if(a&&r){var c=Et(a).hoistableScripts,d=fa(r),m=c.get(d);m||(m=a.querySelector(Gl(d)),m||(r=y({src:r,async:!0,type:"module"},s),(s=Gn.get(d))&&ug(r,s),m=a.createElement("script"),Me(m),Xt(m,"link",r),a.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(d,m))}}function Mx(r,s,a,c){var d=(d=pe.current)?Od(d):null;if(!d)throw Error(i(446));switch(r){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(s=da(a.href),a=Et(d).hoistableStyles,c=a.get(s),c||(c={type:"style",instance:null,count:0,state:null},a.set(s,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){r=da(a.href);var m=Et(d).hoistableStyles,b=m.get(r);if(b||(d=d.ownerDocument||d,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(r,b),(m=d.querySelector(Vl(r)))&&!m._p&&(b.instance=m,b.state.loading=5),Gn.has(r)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Gn.set(r,a),m||ON(d,r,a,b.state))),s&&c===null)throw Error(i(528,""));return b}if(s&&c!==null)throw Error(i(529,""));return null;case"script":return s=a.async,a=a.src,typeof a=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=fa(a),a=Et(d).hoistableScripts,c=a.get(s),c||(c={type:"script",instance:null,count:0,state:null},a.set(s,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,r))}}function da(r){return'href="'+Un(r)+'"'}function Vl(r){return'link[rel="stylesheet"]['+r+"]"}function Lx(r){return y({},r,{"data-precedence":r.precedence,precedence:null})}function ON(r,s,a,c){r.querySelector('link[rel="preload"][as="style"]['+s+"]")?c.loading=1:(s=r.createElement("link"),c.preload=s,s.addEventListener("load",function(){return c.loading|=1}),s.addEventListener("error",function(){return c.loading|=2}),Xt(s,"link",a),Me(s),r.head.appendChild(s))}function fa(r){return'[src="'+Un(r)+'"]'}function Gl(r){return"script[async]"+r}function jx(r,s,a){if(s.count++,s.instance===null)switch(s.type){case"style":var c=r.querySelector('style[data-href~="'+Un(a.href)+'"]');if(c)return s.instance=c,Me(c),c;var d=y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return c=(r.ownerDocument||r).createElement("style"),Me(c),Xt(c,"style",d),Md(c,a.precedence,r),s.instance=c;case"stylesheet":d=da(a.href);var m=r.querySelector(Vl(d));if(m)return s.state.loading|=4,s.instance=m,Me(m),m;c=Lx(a),(d=Gn.get(d))&&cg(c,d),m=(r.ownerDocument||r).createElement("link"),Me(m);var b=m;return b._p=new Promise(function(w,L){b.onload=w,b.onerror=L}),Xt(m,"link",c),s.state.loading|=4,Md(m,a.precedence,r),s.instance=m;case"script":return m=fa(a.src),(d=r.querySelector(Gl(m)))?(s.instance=d,Me(d),d):(c=a,(d=Gn.get(m))&&(c=y({},a),ug(c,d)),r=r.ownerDocument||r,d=r.createElement("script"),Me(d),Xt(d,"link",c),r.head.appendChild(d),s.instance=d);case"void":return null;default:throw Error(i(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(c=s.instance,s.state.loading|=4,Md(c,a.precedence,r));return s.instance}function Md(r,s,a){for(var c=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=c.length?c[c.length-1]:null,m=d,b=0;b<c.length;b++){var w=c[b];if(w.dataset.precedence===s)m=w;else if(m!==d)break}m?m.parentNode.insertBefore(r,m.nextSibling):(s=a.nodeType===9?a.head:a,s.insertBefore(r,s.firstChild))}function cg(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.title==null&&(r.title=s.title)}function ug(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.integrity==null&&(r.integrity=s.integrity)}var Ld=null;function Px(r,s,a){if(Ld===null){var c=new Map,d=Ld=new Map;d.set(a,c)}else d=Ld,c=d.get(a),c||(c=new Map,d.set(a,c));if(c.has(r))return c;for(c.set(r,null),a=a.getElementsByTagName(r),d=0;d<a.length;d++){var m=a[d];if(!(m[_e]||m[ce]||r==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var b=m.getAttribute(s)||"";b=r+b;var w=c.get(b);w?w.push(m):c.set(b,[m])}}return c}function $x(r,s,a){r=r.ownerDocument||r,r.head.insertBefore(a,s==="title"?r.querySelector("head > title"):null)}function MN(r,s,a){if(a===1||s.itemProp!=null)return!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return r=s.disabled,typeof s.precedence=="string"&&r==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function Ux(r){return!(r.type==="stylesheet"&&(r.state.loading&3)===0)}var Wl=null;function LN(){}function jN(r,s,a){if(Wl===null)throw Error(i(475));var c=Wl;if(s.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var d=da(a.href),m=r.querySelector(Vl(d));if(m){r=m._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(c.count++,c=jd.bind(c),r.then(c,c)),s.state.loading|=4,s.instance=m,Me(m);return}m=r.ownerDocument||r,a=Lx(a),(d=Gn.get(d))&&cg(a,d),m=m.createElement("link"),Me(m);var b=m;b._p=new Promise(function(w,L){b.onload=w,b.onerror=L}),Xt(m,"link",a),s.instance=m}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(s,r),(r=s.state.preload)&&(s.state.loading&3)===0&&(c.count++,s=jd.bind(c),r.addEventListener("load",s),r.addEventListener("error",s))}}function PN(){if(Wl===null)throw Error(i(475));var r=Wl;return r.stylesheets&&r.count===0&&dg(r,r.stylesheets),0<r.count?function(s){var a=setTimeout(function(){if(r.stylesheets&&dg(r,r.stylesheets),r.unsuspend){var c=r.unsuspend;r.unsuspend=null,c()}},6e4);return r.unsuspend=s,function(){r.unsuspend=null,clearTimeout(a)}}:null}function jd(){if(this.count--,this.count===0){if(this.stylesheets)dg(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}var Pd=null;function dg(r,s){r.stylesheets=null,r.unsuspend!==null&&(r.count++,Pd=new Map,s.forEach($N,r),Pd=null,jd.call(r))}function $N(r,s){if(!(s.state.loading&4)){var a=Pd.get(r);if(a)var c=a.get(null);else{a=new Map,Pd.set(r,a);for(var d=r.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<d.length;m++){var b=d[m];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(a.set(b.dataset.precedence,b),c=b)}c&&a.set(null,c)}d=s.instance,b=d.getAttribute("data-precedence"),m=a.get(b)||c,m===c&&a.set(null,d),a.set(b,d),this.count++,c=jd.bind(this),d.addEventListener("load",c),d.addEventListener("error",c),m?m.parentNode.insertBefore(d,m.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(d,r.firstChild)),s.state.loading|=4}}var Yl={$$typeof:R,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function UN(r,s,a,c,d,m,b,w){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=No(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=No(0),this.hiddenUpdates=No(null),this.identifierPrefix=c,this.onUncaughtError=d,this.onCaughtError=m,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function zx(r,s,a,c,d,m,b,w,L,Q,re,oe){return r=new UN(r,s,a,b,w,L,Q,oe),s=1,m===!0&&(s|=24),m=Cn(3,null,null,s),r.current=m,m.stateNode=r,s=Gp(),s.refCount++,r.pooledCache=s,s.refCount++,m.memoizedState={element:c,isDehydrated:a,cache:s},Kp(m),r}function Bx(r){return r?(r=Fo,r):Fo}function Hx(r,s,a,c,d,m){d=Bx(d),c.context===null?c.context=d:c.pendingContext=d,c=Oi(s),c.payload={element:a},m=m===void 0?null:m,m!==null&&(c.callback=m),a=Mi(r,c,s),a!==null&&(Dn(a,r,s),El(a,r,s))}function Fx(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function fg(r,s){Fx(r,s),(r=r.alternate)&&Fx(r,s)}function qx(r){if(r.tag===13){var s=Ho(r,67108864);s!==null&&Dn(s,r,67108864),fg(r,67108864)}}var $d=!0;function zN(r,s,a,c){var d=P.T;P.T=null;var m=X.p;try{X.p=2,hg(r,s,a,c)}finally{X.p=m,P.T=d}}function BN(r,s,a,c){var d=P.T;P.T=null;var m=X.p;try{X.p=8,hg(r,s,a,c)}finally{X.p=m,P.T=d}}function hg(r,s,a,c){if($d){var d=pg(c);if(d===null)eg(r,s,c,Ud,a),Gx(r,c);else if(FN(d,r,s,a,c))c.stopPropagation();else if(Gx(r,c),s&4&&-1<HN.indexOf(r)){for(;d!==null;){var m=Xe(d);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var b=Br(m.pendingLanes);if(b!==0){var w=m;for(w.pendingLanes|=2,w.entangledLanes|=2;b;){var L=1<<31-Yt(b);w.entanglements[1]|=L,b&=~L}Ir(m),(nt&6)===0&&(xd=Wt()+500,Bl(0))}}break;case 13:w=Ho(m,2),w!==null&&Dn(w,m,2),Ed(),fg(m,2)}if(m=pg(c),m===null&&eg(r,s,c,Ud,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else eg(r,s,c,null,a)}}function pg(r){return r=_p(r),mg(r)}var Ud=null;function mg(r){if(Ud=null,r=Ue(r),r!==null){var s=l(r);if(s===null)r=null;else{var a=s.tag;if(a===13){if(r=u(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null)}}return Ud=r,null}function Vx(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(rl()){case Ds:return 2;case Io:return 8;case Do:case zr:return 32;case Ri:return 268435456;default:return 32}default:return 32}}var gg=!1,Wi=null,Yi=null,Qi=null,Ql=new Map,Kl=new Map,Ki=[],HN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Gx(r,s){switch(r){case"focusin":case"focusout":Wi=null;break;case"dragenter":case"dragleave":Yi=null;break;case"mouseover":case"mouseout":Qi=null;break;case"pointerover":case"pointerout":Ql.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kl.delete(s.pointerId)}}function Xl(r,s,a,c,d,m){return r===null||r.nativeEvent!==m?(r={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},s!==null&&(s=Xe(s),s!==null&&qx(s)),r):(r.eventSystemFlags|=c,s=r.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),r)}function FN(r,s,a,c,d){switch(s){case"focusin":return Wi=Xl(Wi,r,s,a,c,d),!0;case"dragenter":return Yi=Xl(Yi,r,s,a,c,d),!0;case"mouseover":return Qi=Xl(Qi,r,s,a,c,d),!0;case"pointerover":var m=d.pointerId;return Ql.set(m,Xl(Ql.get(m)||null,r,s,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,Kl.set(m,Xl(Kl.get(m)||null,r,s,a,c,d)),!0}return!1}function Wx(r){var s=Ue(r.target);if(s!==null){var a=l(s);if(a!==null){if(s=a.tag,s===13){if(s=u(a),s!==null){r.blockedOn=s,W(r.priority,function(){if(a.tag===13){var c=In();c=sl(c);var d=Ho(a,c);d!==null&&Dn(d,a,c),fg(a,c)}});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function zd(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=pg(r.nativeEvent);if(a===null){a=r.nativeEvent;var c=new a.constructor(a.type,a);vp=c,a.target.dispatchEvent(c),vp=null}else return s=Xe(a),s!==null&&qx(s),r.blockedOn=a,!1;s.shift()}return!0}function Yx(r,s,a){zd(r)&&a.delete(s)}function qN(){gg=!1,Wi!==null&&zd(Wi)&&(Wi=null),Yi!==null&&zd(Yi)&&(Yi=null),Qi!==null&&zd(Qi)&&(Qi=null),Ql.forEach(Yx),Kl.forEach(Yx)}function Bd(r,s){r.blockedOn===s&&(r.blockedOn=null,gg||(gg=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,qN)))}var Hd=null;function Qx(r){Hd!==r&&(Hd=r,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){Hd===r&&(Hd=null);for(var s=0;s<r.length;s+=3){var a=r[s],c=r[s+1],d=r[s+2];if(typeof c!="function"){if(mg(c||a)===null)continue;break}var m=Xe(a);m!==null&&(r.splice(s,3),s-=3,mm(m,{pending:!0,data:d,method:a.method,action:c},c,d))}}))}function Zl(r){function s(L){return Bd(L,r)}Wi!==null&&Bd(Wi,r),Yi!==null&&Bd(Yi,r),Qi!==null&&Bd(Qi,r),Ql.forEach(s),Kl.forEach(s);for(var a=0;a<Ki.length;a++){var c=Ki[a];c.blockedOn===r&&(c.blockedOn=null)}for(;0<Ki.length&&(a=Ki[0],a.blockedOn===null);)Wx(a),a.blockedOn===null&&Ki.shift();if(a=(r.ownerDocument||r).$$reactFormReplay,a!=null)for(c=0;c<a.length;c+=3){var d=a[c],m=a[c+1],b=d[fe]||null;if(typeof m=="function")b||Qx(a);else if(b){var w=null;if(m&&m.hasAttribute("formAction")){if(d=m,b=m[fe]||null)w=b.formAction;else if(mg(d)!==null)continue}else w=b.action;typeof w=="function"?a[c+1]=w:(a.splice(c,3),c-=3),Qx(a)}}}function yg(r){this._internalRoot=r}Fd.prototype.render=yg.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(i(409));var a=s.current,c=In();Hx(a,c,r,s,null,null)},Fd.prototype.unmount=yg.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;Hx(r.current,2,null,r,null,null),Ed(),s[ye]=null}};function Fd(r){this._internalRoot=r}Fd.prototype.unstable_scheduleHydration=function(r){if(r){var s=$();r={blockedOn:null,target:r,priority:s};for(var a=0;a<Ki.length&&s!==0&&s<Ki[a].priority;a++);Ki.splice(a,0,r),a===0&&Wx(r)}};var Kx=t.version;if(Kx!=="19.1.1")throw Error(i(527,Kx,"19.1.1"));X.findDOMNode=function(r){var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(i(188)):(r=Object.keys(r).join(","),Error(i(268,r)));return r=p(s),r=r!==null?h(r):null,r=r===null?null:r.stateNode,r};var VN={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qd.isDisabled&&qd.supportsFiber)try{pn=qd.inject(VN),_t=qd}catch{}}return ec.createRoot=function(r,s){if(!o(r))throw Error(i(299));var a=!1,c="",d=fS,m=hS,b=pS,w=null;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(b=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(w=s.unstable_transitionCallbacks)),s=zx(r,1,!1,null,null,a,c,d,m,b,w,null),r[ye]=s.current,Jm(r),new yg(s)},ec.hydrateRoot=function(r,s,a){if(!o(r))throw Error(i(299));var c=!1,d="",m=fS,b=hS,w=pS,L=null,Q=null;return a!=null&&(a.unstable_strictMode===!0&&(c=!0),a.identifierPrefix!==void 0&&(d=a.identifierPrefix),a.onUncaughtError!==void 0&&(m=a.onUncaughtError),a.onCaughtError!==void 0&&(b=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(L=a.unstable_transitionCallbacks),a.formState!==void 0&&(Q=a.formState)),s=zx(r,1,!0,s,a??null,c,d,m,b,w,L,Q),s.context=Bx(null),a=s.current,c=In(),c=sl(c),d=Oi(c),d.callback=null,Mi(a,d,c),a=c,s.current.lanes=a,Ms(s,a),Ir(s),r[ye]=s.current,Jm(r),new Fd(s)},ec.version="19.1.1",ec}var o1;function tO(){if(o1)return bg.exports;o1=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),bg.exports=eO(),bg.exports}var nO=tO(),Eg={exports:{}},Cg={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a1;function rO(){if(a1)return Cg;a1=1;var e=Rh();function t(p,h){return p===h&&(p!==0||1/p===1/h)||p!==p&&h!==h}var n=typeof Object.is=="function"?Object.is:t,i=e.useSyncExternalStore,o=e.useRef,l=e.useEffect,u=e.useMemo,f=e.useDebugValue;return Cg.useSyncExternalStoreWithSelector=function(p,h,y,_,v){var S=o(null);if(S.current===null){var x={hasValue:!1,value:null};S.current=x}else x=S.current;S=u(function(){function T(O){if(!k){if(k=!0,M=O,O=_(O),v!==void 0&&x.hasValue){var A=x.value;if(v(A,O))return R=A}return R=O}if(A=R,n(M,O))return A;var j=_(O);return v!==void 0&&v(A,j)?(M=O,A):(M=O,R=j)}var k=!1,M,R,I=y===void 0?null:y;return[function(){return T(h())},I===null?void 0:function(){return T(I())}]},[h,y,_,v]);var D=i(p,S[0],S[1]);return l(function(){x.hasValue=!0,x.value=D},[D]),f(D),D},Cg}var l1;function iO(){return l1||(l1=1,Eg.exports=rO()),Eg.exports}var sO=iO();function GC(e){e()}function oO(){let e=null,t=null;return{clear(){e=null,t=null},notify(){GC(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let i=e;for(;i;)n.push(i),i=i.next;return n},subscribe(n){let i=!0;const o=t={callback:n,next:null,prev:t};return o.prev?o.prev.next=o:e=o,function(){!i||e===null||(i=!1,o.next?o.next.prev=o.prev:t=o.prev,o.prev?o.prev.next=o.next:e=o.next)}}}}var c1={notify(){},get:()=>[]};function aO(e,t){let n,i=c1,o=0,l=!1;function u(D){y();const T=i.subscribe(D);let k=!1;return()=>{k||(k=!0,T(),_())}}function f(){i.notify()}function p(){x.onStateChange&&x.onStateChange()}function h(){return l}function y(){o++,n||(n=e.subscribe(p),i=oO())}function _(){o--,n&&o===0&&(n(),n=void 0,i.clear(),i=c1)}function v(){l||(l=!0,y())}function S(){l&&(l=!1,_())}const x={addNestedSub:u,notifyNestedSubs:f,handleChangeWrapper:p,isSubscribed:h,trySubscribe:v,tryUnsubscribe:S,getListeners:()=>i};return x}var lO=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",cO=lO(),uO=()=>typeof navigator<"u"&&navigator.product==="ReactNative",dO=uO(),fO=()=>cO||dO?E.useLayoutEffect:E.useEffect,hO=fO();function u1(e,t){return e===t?e!==0||t!==0||1/e===1/t:e!==e&&t!==t}function wc(e,t){if(u1(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;const n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(let o=0;o<n.length;o++)if(!Object.prototype.hasOwnProperty.call(t,n[o])||!u1(e[n[o]],t[n[o]]))return!1;return!0}var pO=Symbol.for("react-redux-context"),mO=typeof globalThis<"u"?globalThis:{};function gO(){if(!E.createContext)return{};const e=mO[pO]??=new Map;let t=e.get(E.createContext);return t||(t=E.createContext(null),e.set(E.createContext,t)),t}var gs=gO();function yO(e){const{children:t,context:n,serverState:i,store:o}=e,l=E.useMemo(()=>{const p=aO(o);return{store:o,subscription:p,getServerState:i?()=>i:void 0}},[o,i]),u=E.useMemo(()=>o.getState(),[o]);hO(()=>{const{subscription:p}=l;return p.onStateChange=p.notifyNestedSubs,p.trySubscribe(),u!==o.getState()&&p.notifyNestedSubs(),()=>{p.tryUnsubscribe(),p.onStateChange=void 0}},[l,u]);const f=n||gs;return E.createElement(f.Provider,{value:l},t)}var vO=yO;function Iv(e=gs){return function(){return E.useContext(e)}}var WC=Iv();function YC(e=gs){const t=e===gs?WC:Iv(e),n=()=>{const{store:i}=t();return i};return Object.assign(n,{withTypes:()=>n}),n}var QC=YC();function _O(e=gs){const t=e===gs?QC:YC(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var KC=_O(),bO=(e,t)=>e===t;function SO(e=gs){const t=e===gs?WC:Iv(e),n=(i,o={})=>{const{equalityFn:l=bO}=typeof o=="function"?{equalityFn:o}:o,u=t(),{store:f,subscription:p,getServerState:h}=u;E.useRef(!0);const y=E.useCallback({[i.name](v){return i(v)}}[i.name],[i]),_=sO.useSyncExternalStoreWithSelector(p.addNestedSub,f.getState,h||f.getState,y,l);return E.useDebugValue(_),_};return Object.assign(n,{withTypes:()=>n}),n}var XC=SO(),xO=GC;/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var ZC=e=>{throw TypeError(e)},wO=(e,t,n)=>t.has(e)||ZC("Cannot "+n),Tg=(e,t,n)=>(wO(e,t,"read from private field"),n?n.call(e):t.get(e)),EO=(e,t,n)=>t.has(e)?ZC("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),d1="popstate";function CO(e={}){function t(o,l){let{pathname:u="/",search:f="",hash:p=""}=xi(o.location.hash.substring(1));return!u.startsWith("/")&&!u.startsWith(".")&&(u="/"+u),Pc("",{pathname:u,search:f,hash:p},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(o,l){let u=o.document.querySelector("base"),f="";if(u&&u.getAttribute("href")){let p=o.location.href,h=p.indexOf("#");f=h===-1?p:p.slice(0,h)}return f+"#"+(typeof l=="string"?l:ys(l))}function i(o,l){xt(o.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(l)})`)}return RO(t,n,i,e)}function Pe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function xt(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function TO(){return Math.random().toString(36).substring(2,10)}function f1(e,t){return{usr:e.state,key:e.key,idx:t}}function Pc(e,t,n=null,i){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?xi(t):t,state:n,key:t&&t.key||i||TO()}}function ys({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function xi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let i=e.indexOf("?");i>=0&&(t.search=e.substring(i),e=e.substring(0,i)),e&&(t.pathname=e)}return t}function RO(e,t,n,i={}){let{window:o=document.defaultView,v5Compat:l=!1}=i,u=o.history,f="POP",p=null,h=y();h==null&&(h=0,u.replaceState({...u.state,idx:h},""));function y(){return(u.state||{idx:null}).idx}function _(){f="POP";let T=y(),k=T==null?null:T-h;h=T,p&&p({action:f,location:D.location,delta:k})}function v(T,k){f="PUSH";let M=Pc(D.location,T,k);n&&n(M,T),h=y()+1;let R=f1(M,h),I=D.createHref(M);try{u.pushState(R,"",I)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;o.location.assign(I)}l&&p&&p({action:f,location:D.location,delta:1})}function S(T,k){f="REPLACE";let M=Pc(D.location,T,k);n&&n(M,T),h=y();let R=f1(M,h),I=D.createHref(M);u.replaceState(R,"",I),l&&p&&p({action:f,location:D.location,delta:0})}function x(T){return JC(T)}let D={get action(){return f},get location(){return e(o,u)},listen(T){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(d1,_),p=T,()=>{o.removeEventListener(d1,_),p=null}},createHref(T){return t(o,T)},createURL:x,encodeLocation(T){let k=x(T);return{pathname:k.pathname,search:k.search,hash:k.hash}},push:v,replace:S,go(T){return u.go(T)}};return D}function JC(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Pe(n,"No window.location.(origin|href) available to create URL");let i=typeof e=="string"?e:ys(e);return i=i.replace(/ $/,"%20"),!t&&i.startsWith("//")&&(i=n+i),new URL(i,n)}var yc,h1=class{constructor(e){if(EO(this,yc,new Map),e)for(let[t,n]of e)this.set(t,n)}get(e){if(Tg(this,yc).has(e))return Tg(this,yc).get(e);if(e.defaultValue!==void 0)return e.defaultValue;throw new Error("No value found for context")}set(e,t){Tg(this,yc).set(e,t)}};yc=new WeakMap;var AO=new Set(["lazy","caseSensitive","path","id","index","children"]);function IO(e){return AO.has(e)}var DO=new Set(["lazy","caseSensitive","path","id","index","middleware","children"]);function kO(e){return DO.has(e)}function NO(e){return e.index===!0}function $c(e,t,n=[],i={},o=!1){return e.map((l,u)=>{let f=[...n,String(u)],p=typeof l.id=="string"?l.id:f.join("-");if(Pe(l.index!==!0||!l.children,"Cannot specify children on an index route"),Pe(o||!i[p],`Found a route id collision on id "${p}".  Route id's must be globally unique within Data Router usages`),NO(l)){let h={...l,...t(l),id:p};return i[p]=h,h}else{let h={...l,...t(l),id:p,children:void 0};return i[p]=h,l.children&&(h.children=$c(l.children,t,f,i,o)),h}})}function is(e,t,n="/"){return mf(e,t,n,!1)}function mf(e,t,n,i){let o=typeof t=="string"?xi(t):t,l=Jn(o.pathname||"/",n);if(l==null)return null;let u=eT(e);MO(u);let f=null;for(let p=0;f==null&&p<u.length;++p){let h=VO(l);f=FO(u[p],h,i)}return f}function OO(e,t){let{route:n,pathname:i,params:o}=e;return{id:n.id,pathname:i,params:o,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function eT(e,t=[],n=[],i="",o=!1){let l=(u,f,p=o,h)=>{let y={relativePath:h===void 0?u.path||"":h,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(i)&&p)return;Pe(y.relativePath.startsWith(i),`Absolute route path "${y.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(i.length)}let _=kr([i,y.relativePath]),v=n.concat(y);u.children&&u.children.length>0&&(Pe(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),eT(u.children,t,v,_,p)),!(u.path==null&&!u.index)&&t.push({path:_,score:BO(_,u.index),routesMeta:v})};return e.forEach((u,f)=>{if(u.path===""||!u.path?.includes("?"))l(u,f);else for(let p of tT(u.path))l(u,f,!0,p)}),t}function tT(e){let t=e.split("/");if(t.length===0)return[];let[n,...i]=t,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let u=tT(i.join("/")),f=[];return f.push(...u.map(p=>p===""?l:[l,p].join("/"))),o&&f.push(...u),f.map(p=>e.startsWith("/")&&p===""?"/":p)}function MO(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:HO(t.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var LO=/^:[\w-]+$/,jO=3,PO=2,$O=1,UO=10,zO=-2,p1=e=>e==="*";function BO(e,t){let n=e.split("/"),i=n.length;return n.some(p1)&&(i+=zO),t&&(i+=PO),n.filter(o=>!p1(o)).reduce((o,l)=>o+(LO.test(l)?jO:l===""?$O:UO),i)}function HO(e,t){return e.length===t.length&&e.slice(0,-1).every((i,o)=>i===t[o])?e[e.length-1]-t[t.length-1]:0}function FO(e,t,n=!1){let{routesMeta:i}=e,o={},l="/",u=[];for(let f=0;f<i.length;++f){let p=i[f],h=f===i.length-1,y=l==="/"?t:t.slice(l.length)||"/",_=Mf({path:p.relativePath,caseSensitive:p.caseSensitive,end:h},y),v=p.route;if(!_&&h&&n&&!i[i.length-1].route.index&&(_=Mf({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},y)),!_)return null;Object.assign(o,_.params),u.push({params:o,pathname:kr([l,_.pathname]),pathnameBase:QO(kr([l,_.pathnameBase])),route:v}),_.pathnameBase!=="/"&&(l=kr([l,_.pathnameBase]))}return u}function Mf(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,i]=qO(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let l=o[0],u=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:i.reduce((h,{paramName:y,isOptional:_},v)=>{if(y==="*"){let x=f[v]||"";u=l.slice(0,l.length-x.length).replace(/(.)\/+$/,"$1")}const S=f[v];return _&&!S?h[y]=void 0:h[y]=(S||"").replace(/%2F/g,"/"),h},{}),pathname:l,pathnameBase:u,pattern:e}}function qO(e,t=!1,n=!0){xt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let i=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,f,p)=>(i.push({paramName:f,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(i.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),i]}function VO(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return xt(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Jn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,i=e.charAt(n);return i&&i!=="/"?null:e.slice(n)||"/"}function GO({basename:e,pathname:t}){return t==="/"?e:kr([e,t])}function WO(e,t="/"){let{pathname:n,search:i="",hash:o=""}=typeof e=="string"?xi(e):e;return{pathname:n?n.startsWith("/")?n:YO(n,t):t,search:KO(i),hash:XO(o)}}function YO(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Rg(e,t,n,i){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function nT(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ah(e){let t=nT(e);return t.map((n,i)=>i===t.length-1?n.pathname:n.pathnameBase)}function Ih(e,t,n,i=!1){let o;typeof e=="string"?o=xi(e):(o={...e},Pe(!o.pathname||!o.pathname.includes("?"),Rg("?","pathname","search",o)),Pe(!o.pathname||!o.pathname.includes("#"),Rg("#","pathname","hash",o)),Pe(!o.search||!o.search.includes("#"),Rg("#","search","hash",o)));let l=e===""||o.pathname==="",u=l?"/":o.pathname,f;if(u==null)f=n;else{let _=t.length-1;if(!i&&u.startsWith("..")){let v=u.split("/");for(;v[0]==="..";)v.shift(),_-=1;o.pathname=v.join("/")}f=_>=0?t[_]:"/"}let p=WO(o,f),h=u&&u!=="/"&&u.endsWith("/"),y=(l||u===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(h||y)&&(p.pathname+="/"),p}var kr=e=>e.join("/").replace(/\/\/+/g,"/"),QO=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),KO=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,XO=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Lf=class{constructor(e,t,n,i=!1){this.status=e,this.statusText=t||"",this.internal=i,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Uc(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var rT=["POST","PUT","PATCH","DELETE"],ZO=new Set(rT),JO=["GET",...rT],eM=new Set(JO),tM=new Set([301,302,303,307,308]),nM=new Set([307,308]),Ag={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},rM={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},tc={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},iM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Dv=e=>iM.test(e),sM=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),iT="remix-router-transitions",sT=Symbol("ResetLoaderData");function oM(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u";Pe(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let i=e.hydrationRouteProperties||[],o=e.mapRouteProperties||sM,l={},u=$c(e.routes,o,void 0,l),f,p=e.basename||"/";p.startsWith("/")||(p=`/${p}`);let h=e.dataStrategy||dM,y={...e.future},_=null,v=new Set,S=null,x=null,D=null,T=e.hydrationData!=null,k=is(u,e.history.location,p),M=!1,R=null,I;if(k==null&&!e.patchRoutesOnNavigation){let $=Qn(404,{pathname:e.history.location.pathname}),{matches:W,route:ee}=Vd(u);I=!0,k=W,R={[ee.id]:$}}else if(k&&!e.hydrationData&&Ls(k,u,e.history.location.pathname).active&&(k=null),k)if(k.some($=>$.route.lazy))I=!1;else if(!k.some($=>$.route.loader))I=!0;else{let $=e.hydrationData?e.hydrationData.loaderData:null,W=e.hydrationData?e.hydrationData.errors:null;if(W){let ee=k.findIndex(ce=>W[ce.route.id]!==void 0);I=k.slice(0,ee+1).every(ce=>!Cy(ce.route,$,W))}else I=k.every(ee=>!Cy(ee.route,$,W))}else{I=!1,k=[];let $=Ls(null,u,e.history.location.pathname);$.active&&$.matches&&(M=!0,k=$.matches)}let O,A={historyAction:e.history.action,location:e.history.location,matches:k,initialized:I,navigation:Ag,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||R,fetchers:new Map,blockers:new Map},j="POP",U=!1,F,H=!1,z=new Map,G=null,V=!1,te=!1,ue=new Set,P=new Map,X=0,ne=-1,ae=new Map,N=new Set,K=new Map,le=new Map,ie=new Set,de=new Map,me,pe=null;function Ae(){if(_=e.history.listen(({action:$,location:W,delta:ee})=>{if(me){me(),me=void 0;return}xt(de.size===0||ee!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ce=Nu({currentLocation:A.location,nextLocation:W,historyAction:$});if(ce&&ee!=null){let fe=new Promise(ye=>{me=ye});e.history.go(ee*-1),wr(ce,{state:"blocked",location:W,proceed(){wr(ce,{state:"proceeding",proceed:void 0,reset:void 0,location:W}),fe.then(()=>e.history.go(ee))},reset(){let ye=new Map(A.blockers);ye.set(ce,tc),$e({blockers:ye})}});return}return wt($,W)}),n){TM(t,z);let $=()=>RM(t,z);t.addEventListener("pagehide",$),G=()=>t.removeEventListener("pagehide",$)}return A.initialized||wt("POP",A.location,{initialHydration:!0}),O}function be(){_&&_(),G&&G(),v.clear(),F&&F.abort(),A.fetchers.forEach(($,W)=>Yt(W)),A.blockers.forEach(($,W)=>Os(W))}function De($){return v.add($),()=>v.delete($)}function $e($,W={}){$.matches&&($.matches=$.matches.map(fe=>{let ye=l[fe.route.id],xe=fe.route;return xe.element!==ye.element||xe.errorElement!==ye.errorElement||xe.hydrateFallbackElement!==ye.hydrateFallbackElement?{...fe,route:ye}:fe})),A={...A,...$};let ee=[],ce=[];A.fetchers.forEach((fe,ye)=>{fe.state==="idle"&&(ie.has(ye)?ee.push(ye):ce.push(ye))}),ie.forEach(fe=>{!A.fetchers.has(fe)&&!P.has(fe)&&ee.push(fe)}),[...v].forEach(fe=>fe(A,{deletedFetchers:ee,viewTransitionOpts:W.viewTransitionOpts,flushSync:W.flushSync===!0})),ee.forEach(fe=>Yt(fe)),ce.forEach(fe=>A.fetchers.delete(fe))}function vt($,W,{flushSync:ee}={}){let ce=A.actionData!=null&&A.navigation.formMethod!=null&&bn(A.navigation.formMethod)&&A.navigation.state==="loading"&&$.state?._isRedirect!==!0,fe;W.actionData?Object.keys(W.actionData).length>0?fe=W.actionData:fe=null:ce?fe=A.actionData:fe=null;let ye=W.loaderData?E1(A.loaderData,W.loaderData,W.matches||[],W.errors):A.loaderData,xe=A.blockers;xe.size>0&&(xe=new Map(xe),xe.forEach((_e,Se)=>xe.set(Se,tc)));let ve=V?!1:Mu($,W.matches||A.matches),Ee=U===!0||A.navigation.formMethod!=null&&bn(A.navigation.formMethod)&&$.state?._isRedirect!==!0;f&&(u=f,f=void 0),V||j==="POP"||(j==="PUSH"?e.history.push($,$.state):j==="REPLACE"&&e.history.replace($,$.state));let Te;if(j==="POP"){let _e=z.get(A.location.pathname);_e&&_e.has($.pathname)?Te={currentLocation:A.location,nextLocation:$}:z.has($.pathname)&&(Te={currentLocation:$,nextLocation:A.location})}else if(H){let _e=z.get(A.location.pathname);_e?_e.add($.pathname):(_e=new Set([$.pathname]),z.set(A.location.pathname,_e)),Te={currentLocation:A.location,nextLocation:$}}$e({...W,actionData:fe,loaderData:ye,historyAction:j,location:$,initialized:!0,navigation:Ag,revalidation:"idle",restoreScrollPosition:ve,preventScrollReset:Ee,blockers:xe},{viewTransitionOpts:Te,flushSync:ee===!0}),j="POP",U=!1,H=!1,V=!1,te=!1,pe?.resolve(),pe=null}async function mt($,W){if(typeof $=="number"){e.history.go($);return}let ee=Ey(A.location,A.matches,p,$,W?.fromRouteId,W?.relative),{path:ce,submission:fe,error:ye}=m1(!1,ee,W),xe=A.location,ve=Pc(A.location,ce,W&&W.state);ve={...ve,...e.history.encodeLocation(ve)};let Ee=W&&W.replace!=null?W.replace:void 0,Te="PUSH";Ee===!0?Te="REPLACE":Ee===!1||fe!=null&&bn(fe.formMethod)&&fe.formAction===A.location.pathname+A.location.search&&(Te="REPLACE");let _e=W&&"preventScrollReset"in W?W.preventScrollReset===!0:void 0,Se=(W&&W.flushSync)===!0,Ue=Nu({currentLocation:xe,nextLocation:ve,historyAction:Te});if(Ue){wr(Ue,{state:"blocked",location:ve,proceed(){wr(Ue,{state:"proceeding",proceed:void 0,reset:void 0,location:ve}),mt($,W)},reset(){let Xe=new Map(A.blockers);Xe.set(Ue,tc),$e({blockers:Xe})}});return}await wt(Te,ve,{submission:fe,pendingError:ye,preventScrollReset:_e,replace:W&&W.replace,enableViewTransition:W&&W.viewTransition,flushSync:Se})}function Ln(){pe||(pe=AM()),il(),$e({revalidation:"loading"});let $=pe.promise;return A.navigation.state==="submitting"?$:A.navigation.state==="idle"?(wt(A.historyAction,A.location,{startUninterruptedRevalidation:!0}),$):(wt(j||A.historyAction,A.navigation.location,{overrideNavigation:A.navigation,enableViewTransition:H===!0}),$)}async function wt($,W,ee){F&&F.abort(),F=null,j=$,V=(ee&&ee.startUninterruptedRevalidation)===!0,Ms(A.location,A.matches),U=(ee&&ee.preventScrollReset)===!0,H=(ee&&ee.enableViewTransition)===!0;let ce=f||u,fe=ee&&ee.overrideNavigation,ye=ee?.initialHydration&&A.matches&&A.matches.length>0&&!M?A.matches:is(ce,W,p),xe=(ee&&ee.flushSync)===!0;if(ye&&A.initialized&&!te&&_M(A.location,W)&&!(ee&&ee.submission&&bn(ee.submission.formMethod))){vt(W,{matches:ye},{flushSync:xe});return}let ve=Ls(ye,ce,W.pathname);if(ve.active&&ve.matches&&(ye=ve.matches),!ye){let{error:Et,notFoundMatches:Me,route:it}=ko(W.pathname);vt(W,{matches:Me,loaderData:{},errors:{[it.id]:Et}},{flushSync:xe});return}F=new AbortController;let Ee=va(e.history,W,F.signal,ee&&ee.submission),Te=e.getContext?await e.getContext():new h1,_e;if(ee&&ee.pendingError)_e=[ss(ye).route.id,{type:"error",error:ee.pendingError}];else if(ee&&ee.submission&&bn(ee.submission.formMethod)){let Et=await jn(Ee,W,ee.submission,ye,Te,ve.active,ee&&ee.initialHydration===!0,{replace:ee.replace,flushSync:xe});if(Et.shortCircuited)return;if(Et.pendingActionResult){let[Me,it]=Et.pendingActionResult;if(Nn(it)&&Uc(it.error)&&it.error.status===404){F=null,vt(W,{matches:Et.matches,loaderData:{},errors:{[Me]:it.error}});return}}ye=Et.matches||ye,_e=Et.pendingActionResult,fe=Ig(W,ee.submission),xe=!1,ve.active=!1,Ee=va(e.history,Ee.url,Ee.signal)}let{shortCircuited:Se,matches:Ue,loaderData:Xe,errors:gt}=await Ur(Ee,W,ye,Te,ve.active,fe,ee&&ee.submission,ee&&ee.fetcherSubmission,ee&&ee.replace,ee&&ee.initialHydration===!0,xe,_e);Se||(F=null,vt(W,{matches:Ue||ye,...C1(_e),loaderData:Xe,errors:gt}))}async function jn($,W,ee,ce,fe,ye,xe,ve={}){il();let Ee=EM(W,ee);if($e({navigation:Ee},{flushSync:ve.flushSync===!0}),ye){let Se=await js(ce,W.pathname,$.signal);if(Se.type==="aborted")return{shortCircuited:!0};if(Se.type==="error"){if(Se.partialMatches.length===0){let{matches:Xe,route:gt}=Vd(u);return{matches:Xe,pendingActionResult:[gt.id,{type:"error",error:Se.error}]}}let Ue=ss(Se.partialMatches).route.id;return{matches:Se.partialMatches,pendingActionResult:[Ue,{type:"error",error:Se.error}]}}else if(Se.matches)ce=Se.matches;else{let{notFoundMatches:Ue,error:Xe,route:gt}=ko(W.pathname);return{matches:Ue,pendingActionResult:[gt.id,{type:"error",error:Xe}]}}}let Te,_e=gf(ce,W);if(!_e.route.action&&!_e.route.lazy)Te={type:"error",error:Qn(405,{method:$.method,pathname:W.pathname,routeId:_e.route.id})};else{let Se=xa(o,l,$,ce,_e,xe?[]:i,fe),Ue=await Ri($,Se,fe,null);if(Te=Ue[_e.route.id],!Te){for(let Xe of ce)if(Ue[Xe.route.id]){Te=Ue[Xe.route.id];break}}if($.signal.aborted)return{shortCircuited:!0}}if(io(Te)){let Se;return ve&&ve.replace!=null?Se=ve.replace:Se=S1(Te.response.headers.get("Location"),new URL($.url),p)===A.location.pathname+A.location.search,await zr($,Te,!0,{submission:ee,replace:Se}),{shortCircuited:!0}}if(Nn(Te)){let Se=ss(ce,_e.route.id);return(ve&&ve.replace)!==!0&&(j="PUSH"),{matches:ce,pendingActionResult:[Se.route.id,Te,_e.route.id]}}return{matches:ce,pendingActionResult:[_e.route.id,Te]}}async function Ur($,W,ee,ce,fe,ye,xe,ve,Ee,Te,_e,Se){let Ue=ye||Ig(W,xe),Xe=xe||ve||R1(Ue),gt=!V&&!Te;if(fe){if(gt){let kt=Wt(Se);$e({navigation:Ue,...kt!==void 0?{actionData:kt}:{}},{flushSync:_e})}let Le=await js(ee,W.pathname,$.signal);if(Le.type==="aborted")return{shortCircuited:!0};if(Le.type==="error"){if(Le.partialMatches.length===0){let{matches:Vr,route:mn}=Vd(u);return{matches:Vr,loaderData:{},errors:{[mn.id]:Le.error}}}let kt=ss(Le.partialMatches).route.id;return{matches:Le.partialMatches,loaderData:{},errors:{[kt]:Le.error}}}else if(Le.matches)ee=Le.matches;else{let{error:kt,notFoundMatches:Vr,route:mn}=ko(W.pathname);return{matches:Vr,loaderData:{},errors:{[mn.id]:kt}}}}let Et=f||u,{dsMatches:Me,revalidatingFetchers:it}=g1($,ce,o,l,e.history,A,ee,Xe,W,Te?[]:i,Te===!0,te,ue,ie,K,N,Et,p,e.patchRoutesOnNavigation!=null,Se);if(ne=++X,!e.dataStrategy&&!Me.some(Le=>Le.shouldLoad)&&!Me.some(Le=>Le.route.middleware)&&it.length===0){let Le=ks();return vt(W,{matches:ee,loaderData:{},errors:Se&&Nn(Se[1])?{[Se[0]]:Se[1].error}:null,...C1(Se),...Le?{fetchers:new Map(A.fetchers)}:{}},{flushSync:_e}),{shortCircuited:!0}}if(gt){let Le={};if(!fe){Le.navigation=Ue;let kt=Wt(Se);kt!==void 0&&(Le.actionData=kt)}it.length>0&&(Le.fetchers=rl(it)),$e(Le,{flushSync:_e})}it.forEach(Le=>{xr(Le.key),Le.controller&&P.set(Le.key,Le.controller)});let Er=()=>it.forEach(Le=>xr(Le.key));F&&F.signal.addEventListener("abort",Er);let{loaderResults:wn,fetcherResults:ln}=await Du(Me,it,$,ce);if($.signal.aborted)return{shortCircuited:!0};F&&F.signal.removeEventListener("abort",Er),it.forEach(Le=>P.delete(Le.key));let Pn=Gd(wn);if(Pn)return await zr($,Pn.result,!0,{replace:Ee}),{shortCircuited:!0};if(Pn=Gd(ln),Pn)return N.add(Pn.key),await zr($,Pn.result,!0,{replace:Ee}),{shortCircuited:!0};let{loaderData:Oo,errors:Ai}=w1(A,ee,wn,Se,it,ln);Te&&A.errors&&(Ai={...A.errors,...Ai});let Hr=ks(),Fr=Ns(ne),qr=Hr||Fr||it.length>0;return{matches:ee,loaderData:Oo,errors:Ai,...qr?{fetchers:new Map(A.fetchers)}:{}}}function Wt($){if($&&!Nn($[1]))return{[$[0]]:$[1].data};if(A.actionData)return Object.keys(A.actionData).length===0?null:A.actionData}function rl($){return $.forEach(W=>{let ee=A.fetchers.get(W.key),ce=nc(void 0,ee?ee.data:void 0);A.fetchers.set(W.key,ce)}),new Map(A.fetchers)}async function Ds($,W,ee,ce){xr($);let fe=(ce&&ce.flushSync)===!0,ye=f||u,xe=Ey(A.location,A.matches,p,ee,W,ce?.relative),ve=is(ye,xe,p),Ee=Ls(ve,ye,xe);if(Ee.active&&Ee.matches&&(ve=Ee.matches),!ve){_t($,W,Qn(404,{pathname:xe}),{flushSync:fe});return}let{path:Te,submission:_e,error:Se}=m1(!0,xe,ce);if(Se){_t($,W,Se,{flushSync:fe});return}let Ue=e.getContext?await e.getContext():new h1,Xe=(ce&&ce.preventScrollReset)===!0;if(_e&&bn(_e.formMethod)){await Io($,W,Te,ve,Ue,Ee.active,fe,Xe,_e);return}K.set($,{routeId:W,path:Te}),await Do($,W,Te,ve,Ue,Ee.active,fe,Xe,_e)}async function Io($,W,ee,ce,fe,ye,xe,ve,Ee){il(),K.delete($);let Te=A.fetchers.get($);pn($,CM(Ee,Te),{flushSync:xe});let _e=new AbortController,Se=va(e.history,ee,_e.signal,Ee);if(ye){let bt=await js(ce,new URL(Se.url).pathname,Se.signal,$);if(bt.type==="aborted")return;if(bt.type==="error"){_t($,W,bt.error,{flushSync:xe});return}else if(bt.matches)ce=bt.matches;else{_t($,W,Qn(404,{pathname:ee}),{flushSync:xe});return}}let Ue=gf(ce,ee);if(!Ue.route.action&&!Ue.route.lazy){let bt=Qn(405,{method:Ee.formMethod,pathname:ee,routeId:W});_t($,W,bt,{flushSync:xe});return}P.set($,_e);let Xe=X,gt=xa(o,l,Se,ce,Ue,i,fe),Me=(await Ri(Se,gt,fe,$))[Ue.route.id];if(Se.signal.aborted){P.get($)===_e&&P.delete($);return}if(ie.has($)){if(io(Me)||Nn(Me)){pn($,ts(void 0));return}}else{if(io(Me))if(P.delete($),ne>Xe){pn($,ts(void 0));return}else return N.add($),pn($,nc(Ee)),zr(Se,Me,!1,{fetcherSubmission:Ee,preventScrollReset:ve});if(Nn(Me)){_t($,W,Me.error);return}}let it=A.navigation.location||A.location,Er=va(e.history,it,_e.signal),wn=f||u,ln=A.navigation.state!=="idle"?is(wn,A.navigation.location,p):A.matches;Pe(ln,"Didn't find any matches after fetcher action");let Pn=++X;ae.set($,Pn);let Oo=nc(Ee,Me.data);A.fetchers.set($,Oo);let{dsMatches:Ai,revalidatingFetchers:Hr}=g1(Er,fe,o,l,e.history,A,ln,Ee,it,i,!1,te,ue,ie,K,N,wn,p,e.patchRoutesOnNavigation!=null,[Ue.route.id,Me]);Hr.filter(bt=>bt.key!==$).forEach(bt=>{let Ii=bt.key,Lu=A.fetchers.get(Ii),ju=nc(void 0,Lu?Lu.data:void 0);A.fetchers.set(Ii,ju),xr(Ii),bt.controller&&P.set(Ii,bt.controller)}),$e({fetchers:new Map(A.fetchers)});let Fr=()=>Hr.forEach(bt=>xr(bt.key));_e.signal.addEventListener("abort",Fr);let{loaderResults:qr,fetcherResults:Le}=await Du(Ai,Hr,Er,fe);if(_e.signal.aborted)return;if(_e.signal.removeEventListener("abort",Fr),ae.delete($),P.delete($),Hr.forEach(bt=>P.delete(bt.key)),A.fetchers.has($)){let bt=ts(Me.data);A.fetchers.set($,bt)}let kt=Gd(qr);if(kt)return zr(Er,kt.result,!1,{preventScrollReset:ve});if(kt=Gd(Le),kt)return N.add(kt.key),zr(Er,kt.result,!1,{preventScrollReset:ve});let{loaderData:Vr,errors:mn}=w1(A,ln,qr,void 0,Hr,Le);Ns(Pn),A.navigation.state==="loading"&&Pn>ne?(Pe(j,"Expected pending action"),F&&F.abort(),vt(A.navigation.location,{matches:ln,loaderData:Vr,errors:mn,fetchers:new Map(A.fetchers)})):($e({errors:mn,loaderData:E1(A.loaderData,Vr,ln,mn),fetchers:new Map(A.fetchers)}),te=!1)}async function Do($,W,ee,ce,fe,ye,xe,ve,Ee){let Te=A.fetchers.get($);pn($,nc(Ee,Te?Te.data:void 0),{flushSync:xe});let _e=new AbortController,Se=va(e.history,ee,_e.signal);if(ye){let it=await js(ce,new URL(Se.url).pathname,Se.signal,$);if(it.type==="aborted")return;if(it.type==="error"){_t($,W,it.error,{flushSync:xe});return}else if(it.matches)ce=it.matches;else{_t($,W,Qn(404,{pathname:ee}),{flushSync:xe});return}}let Ue=gf(ce,ee);P.set($,_e);let Xe=X,gt=xa(o,l,Se,ce,Ue,i,fe),Me=(await Ri(Se,gt,fe,$))[Ue.route.id];if(P.get($)===_e&&P.delete($),!Se.signal.aborted){if(ie.has($)){pn($,ts(void 0));return}if(io(Me))if(ne>Xe){pn($,ts(void 0));return}else{N.add($),await zr(Se,Me,!1,{preventScrollReset:ve});return}if(Nn(Me)){_t($,W,Me.error);return}pn($,ts(Me.data))}}async function zr($,W,ee,{submission:ce,fetcherSubmission:fe,preventScrollReset:ye,replace:xe}={}){W.response.headers.has("X-Remix-Revalidate")&&(te=!0);let ve=W.response.headers.get("Location");Pe(ve,"Expected a Location header on the redirect Response"),ve=S1(ve,new URL($.url),p);let Ee=Pc(A.location,ve,{_isRedirect:!0});if(n){let gt=!1;if(W.response.headers.has("X-Remix-Reload-Document"))gt=!0;else if(Dv(ve)){const Et=JC(ve,!0);gt=Et.origin!==t.location.origin||Jn(Et.pathname,p)==null}if(gt){xe?t.location.replace(ve):t.location.assign(ve);return}}F=null;let Te=xe===!0||W.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:_e,formAction:Se,formEncType:Ue}=A.navigation;!ce&&!fe&&_e&&Se&&Ue&&(ce=R1(A.navigation));let Xe=ce||fe;if(nM.has(W.response.status)&&Xe&&bn(Xe.formMethod))await wt(Te,Ee,{submission:{...Xe,formAction:ve},preventScrollReset:ye||U,enableViewTransition:ee?H:void 0});else{let gt=Ig(Ee,ce);await wt(Te,Ee,{overrideNavigation:gt,fetcherSubmission:fe,preventScrollReset:ye||U,enableViewTransition:ee?H:void 0})}}async function Ri($,W,ee,ce){let fe,ye={};try{fe=await hM(h,$,W,ce,ee,!1)}catch(xe){return W.filter(ve=>ve.shouldLoad).forEach(ve=>{ye[ve.route.id]={type:"error",error:xe}}),ye}if($.signal.aborted)return ye;for(let[xe,ve]of Object.entries(fe))if(xM(ve)){let Ee=ve.result;ye[xe]={type:"redirect",response:yM(Ee,$,xe,W,p)}}else ye[xe]=await gM(ve);return ye}async function Du($,W,ee,ce){let fe=Ri(ee,$,ce,null),ye=Promise.all(W.map(async Ee=>{if(Ee.matches&&Ee.match&&Ee.request&&Ee.controller){let _e=(await Ri(Ee.request,Ee.matches,ce,Ee.key))[Ee.match.route.id];return{[Ee.key]:_e}}else return Promise.resolve({[Ee.key]:{type:"error",error:Qn(404,{pathname:Ee.path})}})})),xe=await fe,ve=(await ye).reduce((Ee,Te)=>Object.assign(Ee,Te),{});return{loaderResults:xe,fetcherResults:ve}}function il(){te=!0,K.forEach(($,W)=>{P.has(W)&&ue.add(W),xr(W)})}function pn($,W,ee={}){A.fetchers.set($,W),$e({fetchers:new Map(A.fetchers)},{flushSync:(ee&&ee.flushSync)===!0})}function _t($,W,ee,ce={}){let fe=ss(A.matches,W);Yt($),$e({errors:{[fe.route.id]:ee},fetchers:new Map(A.fetchers)},{flushSync:(ce&&ce.flushSync)===!0})}function sr($){return le.set($,(le.get($)||0)+1),ie.has($)&&ie.delete($),A.fetchers.get($)||rM}function Yt($){let W=A.fetchers.get($);P.has($)&&!(W&&W.state==="loading"&&ae.has($))&&xr($),K.delete($),ae.delete($),N.delete($),ie.delete($),ue.delete($),A.fetchers.delete($)}function pp($){let W=(le.get($)||0)-1;W<=0?(le.delete($),ie.add($)):le.set($,W),$e({fetchers:new Map(A.fetchers)})}function xr($){let W=P.get($);W&&(W.abort(),P.delete($))}function ku($){for(let W of $){let ee=sr(W),ce=ts(ee.data);A.fetchers.set(W,ce)}}function ks(){let $=[],W=!1;for(let ee of N){let ce=A.fetchers.get(ee);Pe(ce,`Expected fetcher: ${ee}`),ce.state==="loading"&&(N.delete(ee),$.push(ee),W=!0)}return ku($),W}function Ns($){let W=[];for(let[ee,ce]of ae)if(ce<$){let fe=A.fetchers.get(ee);Pe(fe,`Expected fetcher: ${ee}`),fe.state==="loading"&&(xr(ee),ae.delete(ee),W.push(ee))}return ku(W),W.length>0}function Br($,W){let ee=A.blockers.get($)||tc;return de.get($)!==W&&de.set($,W),ee}function Os($){A.blockers.delete($),de.delete($)}function wr($,W){let ee=A.blockers.get($)||tc;Pe(ee.state==="unblocked"&&W.state==="blocked"||ee.state==="blocked"&&W.state==="blocked"||ee.state==="blocked"&&W.state==="proceeding"||ee.state==="blocked"&&W.state==="unblocked"||ee.state==="proceeding"&&W.state==="unblocked",`Invalid blocker state transition: ${ee.state} -> ${W.state}`);let ce=new Map(A.blockers);ce.set($,W),$e({blockers:ce})}function Nu({currentLocation:$,nextLocation:W,historyAction:ee}){if(de.size===0)return;de.size>1&&xt(!1,"A router only supports one blocker at a time");let ce=Array.from(de.entries()),[fe,ye]=ce[ce.length-1],xe=A.blockers.get(fe);if(!(xe&&xe.state==="proceeding")&&ye({currentLocation:$,nextLocation:W,historyAction:ee}))return fe}function ko($){let W=Qn(404,{pathname:$}),ee=f||u,{matches:ce,route:fe}=Vd(ee);return{notFoundMatches:ce,route:fe,error:W}}function Ou($,W,ee){if(S=$,D=W,x=ee||null,!T&&A.navigation===Ag){T=!0;let ce=Mu(A.location,A.matches);ce!=null&&$e({restoreScrollPosition:ce})}return()=>{S=null,D=null,x=null}}function No($,W){return x&&x($,W.map(ce=>OO(ce,A.loaderData)))||$.key}function Ms($,W){if(S&&D){let ee=No($,W);S[ee]=D()}}function Mu($,W){if(S){let ee=No($,W),ce=S[ee];if(typeof ce=="number")return ce}return null}function Ls($,W,ee){if(e.patchRoutesOnNavigation)if($){if(Object.keys($[0].params).length>0)return{active:!0,matches:mf(W,ee,p,!0)}}else return{active:!0,matches:mf(W,ee,p,!0)||[]};return{active:!1,matches:null}}async function js($,W,ee,ce){if(!e.patchRoutesOnNavigation)return{type:"success",matches:$};let fe=$;for(;;){let ye=f==null,xe=f||u,ve=l;try{await e.patchRoutesOnNavigation({signal:ee,path:W,matches:fe,fetcherKey:ce,patch:(_e,Se)=>{ee.aborted||y1(_e,Se,xe,ve,o,!1)}})}catch(_e){return{type:"error",error:_e,partialMatches:fe}}finally{ye&&!ee.aborted&&(u=[...u])}if(ee.aborted)return{type:"aborted"};let Ee=is(xe,W,p);if(Ee)return{type:"success",matches:Ee};let Te=mf(xe,W,p,!0);if(!Te||fe.length===Te.length&&fe.every((_e,Se)=>_e.route.id===Te[Se].route.id))return{type:"success",matches:null};fe=Te}}function sl($){l={},f=$c($,o,void 0,l)}function ol($,W,ee=!1){let ce=f==null;y1($,W,f||u,l,o,ee),ce&&(u=[...u],$e({}))}return O={get basename(){return p},get future(){return y},get state(){return A},get routes(){return u},get window(){return t},initialize:Ae,subscribe:De,enableScrollRestoration:Ou,navigate:mt,fetch:Ds,revalidate:Ln,createHref:$=>e.history.createHref($),encodeLocation:$=>e.history.encodeLocation($),getFetcher:sr,deleteFetcher:pp,dispose:be,getBlocker:Br,deleteBlocker:Os,patchRoutes:ol,_internalFetchControllers:P,_internalSetRoutes:sl,_internalSetStateDoNotUseOrYouWillBreakYourApp($){$e($)}},O}function aM(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Ey(e,t,n,i,o,l){let u,f;if(o){u=[];for(let h of t)if(u.push(h),h.route.id===o){f=h;break}}else u=t,f=t[t.length-1];let p=Ih(i||".",Ah(u),Jn(e.pathname,n)||e.pathname,l==="path");if(i==null&&(p.search=e.search,p.hash=e.hash),(i==null||i===""||i===".")&&f){let h=kv(p.search);if(f.route.index&&!h)p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index";else if(!f.route.index&&h){let y=new URLSearchParams(p.search),_=y.getAll("index");y.delete("index"),_.filter(S=>S).forEach(S=>y.append("index",S));let v=y.toString();p.search=v?`?${v}`:""}}return n!=="/"&&(p.pathname=GO({basename:n,pathname:p.pathname})),ys(p)}function m1(e,t,n){if(!n||!aM(n))return{path:t};if(n.formMethod&&!wM(n.formMethod))return{path:t,error:Qn(405,{method:n.formMethod})};let i=()=>({path:t,error:Qn(400,{type:"invalid-body"})}),l=(n.formMethod||"get").toUpperCase(),u=dT(t);if(n.body!==void 0){if(n.formEncType==="text/plain"){if(!bn(l))return i();let _=typeof n.body=="string"?n.body:n.body instanceof FormData||n.body instanceof URLSearchParams?Array.from(n.body.entries()).reduce((v,[S,x])=>`${v}${S}=${x}
`,""):String(n.body);return{path:t,submission:{formMethod:l,formAction:u,formEncType:n.formEncType,formData:void 0,json:void 0,text:_}}}else if(n.formEncType==="application/json"){if(!bn(l))return i();try{let _=typeof n.body=="string"?JSON.parse(n.body):n.body;return{path:t,submission:{formMethod:l,formAction:u,formEncType:n.formEncType,formData:void 0,json:_,text:void 0}}}catch{return i()}}}Pe(typeof FormData=="function","FormData is not available in this environment");let f,p;if(n.formData)f=Ry(n.formData),p=n.formData;else if(n.body instanceof FormData)f=Ry(n.body),p=n.body;else if(n.body instanceof URLSearchParams)f=n.body,p=x1(f);else if(n.body==null)f=new URLSearchParams,p=new FormData;else try{f=new URLSearchParams(n.body),p=x1(f)}catch{return i()}let h={formMethod:l,formAction:u,formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:p,json:void 0,text:void 0};if(bn(h.formMethod))return{path:t,submission:h};let y=xi(t);return e&&y.search&&kv(y.search)&&f.append("index",""),y.search=`?${f}`,{path:ys(y),submission:h}}function g1(e,t,n,i,o,l,u,f,p,h,y,_,v,S,x,D,T,k,M,R){let I=R?Nn(R[1])?R[1].error:R[1].data:void 0,O=o.createURL(l.location),A=o.createURL(p),j;if(y&&l.errors){let V=Object.keys(l.errors)[0];j=u.findIndex(te=>te.route.id===V)}else if(R&&Nn(R[1])){let V=R[0];j=u.findIndex(te=>te.route.id===V)-1}let U=R?R[1].statusCode:void 0,F=U&&U>=400,H={currentUrl:O,currentParams:l.matches[0]?.params||{},nextUrl:A,nextParams:u[0].params,...f,actionResult:I,actionStatus:U},z=u.map((V,te)=>{let{route:ue}=V,P=null;if(j!=null&&te>j?P=!1:ue.lazy?P=!0:ue.loader==null?P=!1:y?P=Cy(ue,l.loaderData,l.errors):lM(l.loaderData,l.matches[te],V)&&(P=!0),P!==null)return Ty(n,i,e,V,h,t,P);let X=F?!1:_||O.pathname+O.search===A.pathname+A.search||O.search!==A.search||cM(l.matches[te],V),ne={...H,defaultShouldRevalidate:X},ae=jf(V,ne);return Ty(n,i,e,V,h,t,ae,ne)}),G=[];return x.forEach((V,te)=>{if(y||!u.some(le=>le.route.id===V.routeId)||S.has(te))return;let ue=l.fetchers.get(te),P=ue&&ue.state!=="idle"&&ue.data===void 0,X=is(T,V.path,k);if(!X){if(M&&P)return;G.push({key:te,routeId:V.routeId,path:V.path,matches:null,match:null,request:null,controller:null});return}if(D.has(te))return;let ne=gf(X,V.path),ae=new AbortController,N=va(o,V.path,ae.signal),K=null;if(v.has(te))v.delete(te),K=xa(n,i,N,X,ne,h,t);else if(P)_&&(K=xa(n,i,N,X,ne,h,t));else{let le={...H,defaultShouldRevalidate:F?!1:_};jf(ne,le)&&(K=xa(n,i,N,X,ne,h,t,le))}K&&G.push({key:te,routeId:V.routeId,path:V.path,matches:K,match:ne,request:N,controller:ae})}),{dsMatches:z,revalidatingFetchers:G}}function Cy(e,t,n){if(e.lazy)return!0;if(!e.loader)return!1;let i=t!=null&&e.id in t,o=n!=null&&n[e.id]!==void 0;return!i&&o?!1:typeof e.loader=="function"&&e.loader.hydrate===!0?!0:!i&&!o}function lM(e,t,n){let i=!t||n.route.id!==t.route.id,o=!e.hasOwnProperty(n.route.id);return i||o}function cM(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function jf(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}function y1(e,t,n,i,o,l){let u;if(e){let h=i[e];Pe(h,`No route found to patch children into: routeId = ${e}`),h.children||(h.children=[]),u=h.children}else u=n;let f=[],p=[];if(t.forEach(h=>{let y=u.find(_=>oT(h,_));y?p.push({existingRoute:y,newRoute:h}):f.push(h)}),f.length>0){let h=$c(f,o,[e||"_","patch",String(u?.length||"0")],i);u.push(...h)}if(l&&p.length>0)for(let h=0;h<p.length;h++){let{existingRoute:y,newRoute:_}=p[h],v=y,[S]=$c([_],o,[],{},!0);Object.assign(v,{element:S.element?S.element:v.element,errorElement:S.errorElement?S.errorElement:v.errorElement,hydrateFallbackElement:S.hydrateFallbackElement?S.hydrateFallbackElement:v.hydrateFallbackElement})}}function oT(e,t){return"id"in e&&"id"in t&&e.id===t.id?!0:e.index===t.index&&e.path===t.path&&e.caseSensitive===t.caseSensitive?(!e.children||e.children.length===0)&&(!t.children||t.children.length===0)?!0:e.children.every((n,i)=>t.children?.some(o=>oT(n,o))):!1}var v1=new WeakMap,aT=({key:e,route:t,manifest:n,mapRouteProperties:i})=>{let o=n[t.id];if(Pe(o,"No route found in manifest"),!o.lazy||typeof o.lazy!="object")return;let l=o.lazy[e];if(!l)return;let u=v1.get(o);u||(u={},v1.set(o,u));let f=u[e];if(f)return f;let p=(async()=>{let h=IO(e),_=o[e]!==void 0&&e!=="hasErrorBoundary";if(h)xt(!h,"Route property "+e+" is not a supported lazy route property. This property will be ignored."),u[e]=Promise.resolve();else if(_)xt(!1,`Route "${o.id}" has a static property "${e}" defined. The lazy property will be ignored.`);else{let v=await l();v!=null&&(Object.assign(o,{[e]:v}),Object.assign(o,i(o)))}typeof o.lazy=="object"&&(o.lazy[e]=void 0,Object.values(o.lazy).every(v=>v===void 0)&&(o.lazy=void 0))})();return u[e]=p,p},_1=new WeakMap;function uM(e,t,n,i,o){let l=n[e.id];if(Pe(l,"No route found in manifest"),!e.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof e.lazy=="function"){let y=_1.get(l);if(y)return{lazyRoutePromise:y,lazyHandlerPromise:y};let _=(async()=>{Pe(typeof e.lazy=="function","No lazy route function found");let v=await e.lazy(),S={};for(let x in v){let D=v[x];if(D===void 0)continue;let T=kO(x),M=l[x]!==void 0&&x!=="hasErrorBoundary";T?xt(!T,"Route property "+x+" is not a supported property to be returned from a lazy route function. This property will be ignored."):M?xt(!M,`Route "${l.id}" has a static property "${x}" defined but its lazy function is also returning a value for this property. The lazy route property "${x}" will be ignored.`):S[x]=D}Object.assign(l,S),Object.assign(l,{...i(l),lazy:void 0})})();return _1.set(l,_),_.catch(()=>{}),{lazyRoutePromise:_,lazyHandlerPromise:_}}let u=Object.keys(e.lazy),f=[],p;for(let y of u){if(o&&o.includes(y))continue;let _=aT({key:y,route:e,manifest:n,mapRouteProperties:i});_&&(f.push(_),y===t&&(p=_))}let h=f.length>0?Promise.all(f).then(()=>{}):void 0;return h?.catch(()=>{}),p?.catch(()=>{}),{lazyRoutePromise:h,lazyHandlerPromise:p}}async function b1(e){let t=e.matches.filter(o=>o.shouldLoad),n={};return(await Promise.all(t.map(o=>o.resolve()))).forEach((o,l)=>{n[t[l].route.id]=o}),n}async function dM(e){return e.matches.some(t=>t.route.middleware)?lT(e,()=>b1(e)):b1(e)}function lT(e,t){return fM(e,t,i=>i,bM,n);function n(i,o,l){if(l)return Promise.resolve(Object.assign(l.value,{[o]:{type:"error",result:i}}));{let{matches:u}=e,f=Math.min(u.findIndex(h=>h.route.id===o)||0,u.findIndex(h=>h.unstable_shouldCallHandler())||0),p=ss(u,u[f].route.id).route.id;return Promise.resolve({[p]:{type:"error",result:i}})}}}async function fM(e,t,n,i,o){let{matches:l,request:u,params:f,context:p}=e,h=l.flatMap(_=>_.route.middleware?_.route.middleware.map(v=>[_.route.id,v]):[]);return await cT({request:u,params:f,context:p},h,t,n,i,o)}async function cT(e,t,n,i,o,l,u=0){let{request:f}=e;if(f.signal.aborted)throw f.signal.reason??new Error(`Request aborted: ${f.method} ${f.url}`);let p=t[u];if(!p)return await n();let[h,y]=p,_,v=async()=>{if(_)throw new Error("You may only call `next()` once per middleware");try{return _={value:await cT(e,t,n,i,o,l,u+1)},_.value}catch(S){return _={value:await l(S,h,_)},_.value}};try{let S=await y(e,v),x=S!=null?i(S):void 0;return o(x)?x:_?x??_.value:(_={value:await v()},_.value)}catch(S){return await l(S,h,_)}}function uT(e,t,n,i,o){let l=aT({key:"middleware",route:i.route,manifest:t,mapRouteProperties:e}),u=uM(i.route,bn(n.method)?"action":"loader",t,e,o);return{middleware:l,route:u.lazyRoutePromise,handler:u.lazyHandlerPromise}}function Ty(e,t,n,i,o,l,u,f=null){let p=!1,h=uT(e,t,n,i,o);return{...i,_lazyPromises:h,shouldLoad:u,unstable_shouldRevalidateArgs:f,unstable_shouldCallHandler(y){return p=!0,f?typeof y=="boolean"?jf(i,{...f,defaultShouldRevalidate:y}):jf(i,f):u},resolve(y){return p||u||y&&!bn(n.method)&&(i.route.lazy||i.route.loader)?pM({request:n,match:i,lazyHandlerPromise:h?.handler,lazyRoutePromise:h?.route,handlerOverride:y,scopedContext:l}):Promise.resolve({type:"data",result:void 0})}}}function xa(e,t,n,i,o,l,u,f=null){return i.map(p=>p.route.id!==o.route.id?{...p,shouldLoad:!1,unstable_shouldRevalidateArgs:f,unstable_shouldCallHandler:()=>!1,_lazyPromises:uT(e,t,n,p,l),resolve:()=>Promise.resolve({type:"data",result:void 0})}:Ty(e,t,n,p,l,u,!0,f))}async function hM(e,t,n,i,o,l){n.some(h=>h._lazyPromises?.middleware)&&await Promise.all(n.map(h=>h._lazyPromises?.middleware));let u={request:t,params:n[0].params,context:o,matches:n},p=await e({...u,fetcherKey:i,runClientMiddleware:h=>{let y=u;return lT(y,()=>h({...y,fetcherKey:i,runClientMiddleware:()=>{throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler")}}))}});try{await Promise.all(n.flatMap(h=>[h._lazyPromises?.handler,h._lazyPromises?.route]))}catch{}return p}async function pM({request:e,match:t,lazyHandlerPromise:n,lazyRoutePromise:i,handlerOverride:o,scopedContext:l}){let u,f,p=bn(e.method),h=p?"action":"loader",y=_=>{let v,S=new Promise((T,k)=>v=k);f=()=>v(),e.signal.addEventListener("abort",f);let x=T=>typeof _!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${h}" [routeId: ${t.route.id}]`)):_({request:e,params:t.params,context:l},...T!==void 0?[T]:[]),D=(async()=>{try{return{type:"data",result:await(o?o(k=>x(k)):x())}}catch(T){return{type:"error",result:T}}})();return Promise.race([D,S])};try{let _=p?t.route.action:t.route.loader;if(n||i)if(_){let v,[S]=await Promise.all([y(_).catch(x=>{v=x}),n,i]);if(v!==void 0)throw v;u=S}else{await n;let v=p?t.route.action:t.route.loader;if(v)[u]=await Promise.all([y(v),i]);else if(h==="action"){let S=new URL(e.url),x=S.pathname+S.search;throw Qn(405,{method:e.method,pathname:x,routeId:t.route.id})}else return{type:"data",result:void 0}}else if(_)u=await y(_);else{let v=new URL(e.url),S=v.pathname+v.search;throw Qn(404,{pathname:S})}}catch(_){return{type:"error",result:_}}finally{f&&e.signal.removeEventListener("abort",f)}return u}async function mM(e){let t=e.headers.get("Content-Type");return t&&/\bapplication\/json\b/.test(t)?e.body==null?null:e.json():e.text()}async function gM(e){let{result:t,type:n}=e;if(fT(t)){let i;try{i=await mM(t)}catch(o){return{type:"error",error:o}}return n==="error"?{type:"error",error:new Lf(t.status,t.statusText,i),statusCode:t.status,headers:t.headers}:{type:"data",data:i,statusCode:t.status,headers:t.headers}}return n==="error"?T1(t)?t.data instanceof Error?{type:"error",error:t.data,statusCode:t.init?.status,headers:t.init?.headers?new Headers(t.init.headers):void 0}:{type:"error",error:new Lf(t.init?.status||500,void 0,t.data),statusCode:Uc(t)?t.status:void 0,headers:t.init?.headers?new Headers(t.init.headers):void 0}:{type:"error",error:t,statusCode:Uc(t)?t.status:void 0}:T1(t)?{type:"data",data:t.data,statusCode:t.init?.status,headers:t.init?.headers?new Headers(t.init.headers):void 0}:{type:"data",data:t}}function yM(e,t,n,i,o){let l=e.headers.get("Location");if(Pe(l,"Redirects returned/thrown from loaders/actions must have a Location header"),!Dv(l)){let u=i.slice(0,i.findIndex(f=>f.route.id===n)+1);l=Ey(new URL(t.url),u,o,l),e.headers.set("Location",l)}return e}function S1(e,t,n){if(Dv(e)){let i=e,o=i.startsWith("//")?new URL(t.protocol+i):new URL(i),l=Jn(o.pathname,n)!=null;if(o.origin===t.origin&&l)return o.pathname+o.search+o.hash}return e}function va(e,t,n,i){let o=e.createURL(dT(t)).toString(),l={signal:n};if(i&&bn(i.formMethod)){let{formMethod:u,formEncType:f}=i;l.method=u.toUpperCase(),f==="application/json"?(l.headers=new Headers({"Content-Type":f}),l.body=JSON.stringify(i.json)):f==="text/plain"?l.body=i.text:f==="application/x-www-form-urlencoded"&&i.formData?l.body=Ry(i.formData):l.body=i.formData}return new Request(o,l)}function Ry(e){let t=new URLSearchParams;for(let[n,i]of e.entries())t.append(n,typeof i=="string"?i:i.name);return t}function x1(e){let t=new FormData;for(let[n,i]of e.entries())t.append(n,i);return t}function vM(e,t,n,i=!1,o=!1){let l={},u=null,f,p=!1,h={},y=n&&Nn(n[1])?n[1].error:void 0;return e.forEach(_=>{if(!(_.route.id in t))return;let v=_.route.id,S=t[v];if(Pe(!io(S),"Cannot handle redirect results in processLoaderData"),Nn(S)){let x=S.error;if(y!==void 0&&(x=y,y=void 0),u=u||{},o)u[v]=x;else{let D=ss(e,v);u[D.route.id]==null&&(u[D.route.id]=x)}i||(l[v]=sT),p||(p=!0,f=Uc(S.error)?S.error.status:500),S.headers&&(h[v]=S.headers)}else l[v]=S.data,S.statusCode&&S.statusCode!==200&&!p&&(f=S.statusCode),S.headers&&(h[v]=S.headers)}),y!==void 0&&n&&(u={[n[0]]:y},n[2]&&(l[n[2]]=void 0)),{loaderData:l,errors:u,statusCode:f||200,loaderHeaders:h}}function w1(e,t,n,i,o,l){let{loaderData:u,errors:f}=vM(t,n,i);return o.filter(p=>!p.matches||p.matches.some(h=>h.shouldLoad)).forEach(p=>{let{key:h,match:y,controller:_}=p;if(_&&_.signal.aborted)return;let v=l[h];if(Pe(v,"Did not find corresponding fetcher result"),Nn(v)){let S=ss(e.matches,y?.route.id);f&&f[S.route.id]||(f={...f,[S.route.id]:v.error}),e.fetchers.delete(h)}else if(io(v))Pe(!1,"Unhandled fetcher revalidation redirect");else{let S=ts(v.data);e.fetchers.set(h,S)}}),{loaderData:u,errors:f}}function E1(e,t,n,i){let o=Object.entries(t).filter(([,l])=>l!==sT).reduce((l,[u,f])=>(l[u]=f,l),{});for(let l of n){let u=l.route.id;if(!t.hasOwnProperty(u)&&e.hasOwnProperty(u)&&l.route.loader&&(o[u]=e[u]),i&&i.hasOwnProperty(u))break}return o}function C1(e){return e?Nn(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function ss(e,t){return(t?e.slice(0,e.findIndex(i=>i.route.id===t)+1):[...e]).reverse().find(i=>i.route.hasErrorBoundary===!0)||e[0]}function Vd(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Qn(e,{pathname:t,routeId:n,method:i,type:o,message:l}={}){let u="Unknown Server Error",f="Unknown @remix-run/router error";return e===400?(u="Bad Request",i&&t&&n?f=`You made a ${i} request to "${t}" but did not provide a \`loader\` for route "${n}", so there is no way to handle the request.`:o==="invalid-body"&&(f="Unable to encode submission body")):e===403?(u="Forbidden",f=`Route "${n}" does not match URL "${t}"`):e===404?(u="Not Found",f=`No route matches URL "${t}"`):e===405&&(u="Method Not Allowed",i&&t&&n?f=`You made a ${i.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${n}", so there is no way to handle the request.`:i&&(f=`Invalid request method "${i.toUpperCase()}"`)),new Lf(e||500,u,new Error(f),!0)}function Gd(e){let t=Object.entries(e);for(let n=t.length-1;n>=0;n--){let[i,o]=t[n];if(io(o))return{key:i,result:o}}}function dT(e){let t=typeof e=="string"?xi(e):e;return ys({...t,hash:""})}function _M(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function bM(e){return e!=null&&typeof e=="object"&&Object.entries(e).every(([t,n])=>typeof t=="string"&&SM(n))}function SM(e){return e!=null&&typeof e=="object"&&"type"in e&&"result"in e&&(e.type==="data"||e.type==="error")}function xM(e){return fT(e.result)&&tM.has(e.result.status)}function Nn(e){return e.type==="error"}function io(e){return(e&&e.type)==="redirect"}function T1(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function fT(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function wM(e){return eM.has(e.toUpperCase())}function bn(e){return ZO.has(e.toUpperCase())}function kv(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function gf(e,t){let n=typeof t=="string"?xi(t).search:t.search;if(e[e.length-1].route.index&&kv(n||""))return e[e.length-1];let i=nT(e);return i[i.length-1]}function R1(e){let{formMethod:t,formAction:n,formEncType:i,text:o,formData:l,json:u}=e;if(!(!t||!n||!i)){if(o!=null)return{formMethod:t,formAction:n,formEncType:i,formData:void 0,json:void 0,text:o};if(l!=null)return{formMethod:t,formAction:n,formEncType:i,formData:l,json:void 0,text:void 0};if(u!==void 0)return{formMethod:t,formAction:n,formEncType:i,formData:void 0,json:u,text:void 0}}}function Ig(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function EM(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function nc(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function CM(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function ts(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function TM(e,t){try{let n=e.sessionStorage.getItem(iT);if(n){let i=JSON.parse(n);for(let[o,l]of Object.entries(i||{}))l&&Array.isArray(l)&&t.set(o,new Set(l||[]))}}catch{}}function RM(e,t){if(t.size>0){let n={};for(let[i,o]of t)n[i]=[...o];try{e.sessionStorage.setItem(iT,JSON.stringify(n))}catch(i){xt(!1,`Failed to save applied view transitions in sessionStorage (${i}).`)}}}function AM(){let e,t,n=new Promise((i,o)=>{e=async l=>{i(l);try{await n}catch{}},t=async l=>{o(l);try{await n}catch{}}});return{promise:n,resolve:e,reject:t}}var Eo=E.createContext(null);Eo.displayName="DataRouter";var du=E.createContext(null);du.displayName="DataRouterState";E.createContext(!1);var Nv=E.createContext({isTransitioning:!1});Nv.displayName="ViewTransition";var hT=E.createContext(new Map);hT.displayName="Fetchers";var IM=E.createContext(null);IM.displayName="Await";var Sr=E.createContext(null);Sr.displayName="Navigation";var Dh=E.createContext(null);Dh.displayName="Location";var rr=E.createContext({outlet:null,matches:[],isDataRoute:!1});rr.displayName="Route";var Ov=E.createContext(null);Ov.displayName="RouteError";function DM(e,{relative:t}={}){Pe(qa(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=E.useContext(Sr),{hash:o,pathname:l,search:u}=fu(e,{relative:t}),f=l;return n!=="/"&&(f=l==="/"?n:kr([n,l])),i.createHref({pathname:f,search:u,hash:o})}function qa(){return E.useContext(Dh)!=null}function jr(){return Pe(qa(),"useLocation() may be used only in the context of a <Router> component."),E.useContext(Dh).location}var pT="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function mT(e){E.useContext(Sr).static||E.useLayoutEffect(e)}function Cs(){let{isDataRoute:e}=E.useContext(rr);return e?GM():kM()}function kM(){Pe(qa(),"useNavigate() may be used only in the context of a <Router> component.");let e=E.useContext(Eo),{basename:t,navigator:n}=E.useContext(Sr),{matches:i}=E.useContext(rr),{pathname:o}=jr(),l=JSON.stringify(Ah(i)),u=E.useRef(!1);return mT(()=>{u.current=!0}),E.useCallback((p,h={})=>{if(xt(u.current,pT),!u.current)return;if(typeof p=="number"){n.go(p);return}let y=Ih(p,JSON.parse(l),o,h.relative==="path");e==null&&t!=="/"&&(y.pathname=y.pathname==="/"?t:kr([t,y.pathname])),(h.replace?n.replace:n.push)(y,h.state,h)},[t,n,l,o,e])}var NM=E.createContext(null);function OM(e){let t=E.useContext(rr).outlet;return t&&E.createElement(NM.Provider,{value:e},t)}function MM(){let{matches:e}=E.useContext(rr),t=e[e.length-1];return t?t.params:{}}function fu(e,{relative:t}={}){let{matches:n}=E.useContext(rr),{pathname:i}=jr(),o=JSON.stringify(Ah(n));return E.useMemo(()=>Ih(e,JSON.parse(o),i,t==="path"),[e,o,i,t])}function LM(e,t,n,i,o){Pe(qa(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=E.useContext(Sr),{matches:u}=E.useContext(rr),f=u[u.length-1],p=f?f.params:{},h=f?f.pathname:"/",y=f?f.pathnameBase:"/",_=f&&f.route;{let M=_&&_.path||"";gT(h,!_||M.endsWith("*")||M.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${M==="/"?"*":`${M}/*`}">.`)}let v=jr(),S;S=v;let x=S.pathname||"/",D=x;if(y!=="/"){let M=y.replace(/^\//,"").split("/");D="/"+x.replace(/^\//,"").split("/").slice(M.length).join("/")}let T=is(e,{pathname:D});return xt(_||T!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),xt(T==null||T[T.length-1].route.element!==void 0||T[T.length-1].route.Component!==void 0||T[T.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),zM(T&&T.map(M=>Object.assign({},M,{params:Object.assign({},p,M.params),pathname:kr([y,l.encodeLocation?l.encodeLocation(M.pathname).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?y:kr([y,l.encodeLocation?l.encodeLocation(M.pathnameBase).pathname:M.pathnameBase])})),u,n,i,o)}function jM(){let e=VM(),t=Uc(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},u=null;return console.error("Error handled by React Router default ErrorBoundary:",e),u=E.createElement(E.Fragment,null,E.createElement("p",null,"💿 Hey developer 👋"),E.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",E.createElement("code",{style:l},"ErrorBoundary")," or"," ",E.createElement("code",{style:l},"errorElement")," prop on your route.")),E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:o},n):null,u)}var PM=E.createElement(jM,null),$M=class extends E.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.unstable_onError?this.props.unstable_onError(e,t):console.error("React Router caught the following error during render",e)}render(){return this.state.error!==void 0?E.createElement(rr.Provider,{value:this.props.routeContext},E.createElement(Ov.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function UM({routeContext:e,match:t,children:n}){let i=E.useContext(Eo);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),E.createElement(rr.Provider,{value:e},n)}function zM(e,t=[],n=null,i=null,o=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,u=n?.errors;if(u!=null){let h=l.findIndex(y=>y.route.id&&u?.[y.route.id]!==void 0);Pe(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,h+1))}let f=!1,p=-1;if(n)for(let h=0;h<l.length;h++){let y=l[h];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(p=h),y.route.id){let{loaderData:_,errors:v}=n,S=y.route.loader&&!_.hasOwnProperty(y.route.id)&&(!v||v[y.route.id]===void 0);if(y.route.lazy||S){f=!0,p>=0?l=l.slice(0,p+1):l=[l[0]];break}}}return l.reduceRight((h,y,_)=>{let v,S=!1,x=null,D=null;n&&(v=u&&y.route.id?u[y.route.id]:void 0,x=y.route.errorElement||PM,f&&(p<0&&_===0?(gT("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,D=null):p===_&&(S=!0,D=y.route.hydrateFallbackElement||null)));let T=t.concat(l.slice(0,_+1)),k=()=>{let M;return v?M=x:S?M=D:y.route.Component?M=E.createElement(y.route.Component,null):y.route.element?M=y.route.element:M=h,E.createElement(UM,{match:y,routeContext:{outlet:h,matches:T,isDataRoute:n!=null},children:M})};return n&&(y.route.ErrorBoundary||y.route.errorElement||_===0)?E.createElement($M,{location:n.location,revalidation:n.revalidation,component:x,error:v,children:k(),routeContext:{outlet:null,matches:T,isDataRoute:!0},unstable_onError:i}):k()},null)}function Mv(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function BM(e){let t=E.useContext(Eo);return Pe(t,Mv(e)),t}function HM(e){let t=E.useContext(du);return Pe(t,Mv(e)),t}function FM(e){let t=E.useContext(rr);return Pe(t,Mv(e)),t}function Lv(e){let t=FM(e),n=t.matches[t.matches.length-1];return Pe(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function qM(){return Lv("useRouteId")}function VM(){let e=E.useContext(Ov),t=HM("useRouteError"),n=Lv("useRouteError");return e!==void 0?e:t.errors?.[n]}function GM(){let{router:e}=BM("useNavigate"),t=Lv("useNavigate"),n=E.useRef(!1);return mT(()=>{n.current=!0}),E.useCallback(async(o,l={})=>{xt(n.current,pT),n.current&&(typeof o=="number"?e.navigate(o):await e.navigate(o,{fromRouteId:t,...l}))},[e,t])}var A1={};function gT(e,t,n){!t&&!A1[e]&&(A1[e]=!0,xt(!1,n))}var I1={};function D1(e,t){!e&&!I1[t]&&(I1[t]=!0,console.warn(t))}function WM(e){let t={hasErrorBoundary:e.hasErrorBoundary||e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&(e.element&&xt(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(t,{element:E.createElement(e.Component),Component:void 0})),e.HydrateFallback&&(e.hydrateFallbackElement&&xt(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(t,{hydrateFallbackElement:E.createElement(e.HydrateFallback),HydrateFallback:void 0})),e.ErrorBoundary&&(e.errorElement&&xt(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(t,{errorElement:E.createElement(e.ErrorBoundary),ErrorBoundary:void 0})),t}var YM=["HydrateFallback","hydrateFallbackElement"],QM=class{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=i=>{this.status==="pending"&&(this.status="resolved",t(i))},this.reject=i=>{this.status==="pending"&&(this.status="rejected",n(i))}})}};function KM({router:e,flushSync:t,unstable_onError:n}){let[i,o]=E.useState(e.state),[l,u]=E.useState(),[f,p]=E.useState({isTransitioning:!1}),[h,y]=E.useState(),[_,v]=E.useState(),[S,x]=E.useState(),D=E.useRef(new Map),T=E.useCallback(O=>{o(A=>(O.errors&&n&&Object.entries(O.errors).forEach(([j,U])=>{A.errors?.[j]!==U&&n(U)}),O))},[n]),k=E.useCallback((O,{deletedFetchers:A,flushSync:j,viewTransitionOpts:U})=>{O.fetchers.forEach((H,z)=>{H.data!==void 0&&D.current.set(z,H.data)}),A.forEach(H=>D.current.delete(H)),D1(j===!1||t!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let F=e.window!=null&&e.window.document!=null&&typeof e.window.document.startViewTransition=="function";if(D1(U==null||F,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!U||!F){t&&j?t(()=>T(O)):E.startTransition(()=>T(O));return}if(t&&j){t(()=>{_&&(h&&h.resolve(),_.skipTransition()),p({isTransitioning:!0,flushSync:!0,currentLocation:U.currentLocation,nextLocation:U.nextLocation})});let H=e.window.document.startViewTransition(()=>{t(()=>T(O))});H.finished.finally(()=>{t(()=>{y(void 0),v(void 0),u(void 0),p({isTransitioning:!1})})}),t(()=>v(H));return}_?(h&&h.resolve(),_.skipTransition(),x({state:O,currentLocation:U.currentLocation,nextLocation:U.nextLocation})):(u(O),p({isTransitioning:!0,flushSync:!1,currentLocation:U.currentLocation,nextLocation:U.nextLocation}))},[e.window,t,_,h,T]);E.useLayoutEffect(()=>e.subscribe(k),[e,k]),E.useEffect(()=>{f.isTransitioning&&!f.flushSync&&y(new QM)},[f]),E.useEffect(()=>{if(h&&l&&e.window){let O=l,A=h.promise,j=e.window.document.startViewTransition(async()=>{E.startTransition(()=>T(O)),await A});j.finished.finally(()=>{y(void 0),v(void 0),u(void 0),p({isTransitioning:!1})}),v(j)}},[l,h,e.window,T]),E.useEffect(()=>{h&&l&&i.location.key===l.location.key&&h.resolve()},[h,_,i.location,l]),E.useEffect(()=>{!f.isTransitioning&&S&&(u(S.state),p({isTransitioning:!0,flushSync:!1,currentLocation:S.currentLocation,nextLocation:S.nextLocation}),x(void 0))},[f.isTransitioning,S]);let M=E.useMemo(()=>({createHref:e.createHref,encodeLocation:e.encodeLocation,go:O=>e.navigate(O),push:(O,A,j)=>e.navigate(O,{state:A,preventScrollReset:j?.preventScrollReset}),replace:(O,A,j)=>e.navigate(O,{replace:!0,state:A,preventScrollReset:j?.preventScrollReset})}),[e]),R=e.basename||"/",I=E.useMemo(()=>({router:e,navigator:M,static:!1,basename:R,unstable_onError:n}),[e,M,R,n]);return E.createElement(E.Fragment,null,E.createElement(Eo.Provider,{value:I},E.createElement(du.Provider,{value:i},E.createElement(hT.Provider,{value:D.current},E.createElement(Nv.Provider,{value:f},E.createElement(e2,{basename:R,location:i.location,navigationType:i.historyAction,navigator:M},E.createElement(XM,{routes:e.routes,future:e.future,state:i,unstable_onError:n})))))),null)}var XM=E.memo(ZM);function ZM({routes:e,future:t,state:n,unstable_onError:i}){return LM(e,void 0,n,i,t)}function jv({to:e,replace:t,state:n,relative:i}){Pe(qa(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=E.useContext(Sr);xt(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=E.useContext(rr),{pathname:u}=jr(),f=Cs(),p=Ih(e,Ah(l),u,i==="path"),h=JSON.stringify(p);return E.useEffect(()=>{f(JSON.parse(h),{replace:t,state:n,relative:i})},[f,h,i,t,n]),null}function JM(e){return OM(e.context)}function Yn(e){Pe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function e2({basename:e="/",children:t=null,location:n,navigationType:i="POP",navigator:o,static:l=!1}){Pe(!qa(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=e.replace(/^\/*/,"/"),f=E.useMemo(()=>({basename:u,navigator:o,static:l,future:{}}),[u,o,l]);typeof n=="string"&&(n=xi(n));let{pathname:p="/",search:h="",hash:y="",state:_=null,key:v="default"}=n,S=E.useMemo(()=>{let x=Jn(p,u);return x==null?null:{location:{pathname:x,search:h,hash:y,state:_,key:v},navigationType:i}},[u,p,h,y,_,v,i]);return xt(S!=null,`<Router basename="${u}"> is not able to match the URL "${p}${h}${y}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:E.createElement(Sr.Provider,{value:f},E.createElement(Dh.Provider,{children:t,value:S}))}function Ay(e,t=[]){let n=[];return E.Children.forEach(e,(i,o)=>{if(!E.isValidElement(i))return;let l=[...t,o];if(i.type===E.Fragment){n.push.apply(n,Ay(i.props.children,l));return}Pe(i.type===Yn,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Pe(!i.props.index||!i.props.children,"An index route cannot have child routes.");let u={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(u.children=Ay(i.props.children,l)),n.push(u)}),n}var t2=Ay,yf="get",vf="application/x-www-form-urlencoded";function kh(e){return e!=null&&typeof e.tagName=="string"}function n2(e){return kh(e)&&e.tagName.toLowerCase()==="button"}function r2(e){return kh(e)&&e.tagName.toLowerCase()==="form"}function i2(e){return kh(e)&&e.tagName.toLowerCase()==="input"}function s2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function o2(e,t){return e.button===0&&(!t||t==="_self")&&!s2(e)}function Iy(e=""){return new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let i=e[n];return t.concat(Array.isArray(i)?i.map(o=>[n,o]):[[n,i]])},[]))}function a2(e,t){let n=Iy(e);return t&&t.forEach((i,o)=>{n.has(o)||t.getAll(o).forEach(l=>{n.append(o,l)})}),n}var Wd=null;function l2(){if(Wd===null)try{new FormData(document.createElement("form"),0),Wd=!1}catch{Wd=!0}return Wd}var c2=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Dg(e){return e!=null&&!c2.has(e)?(xt(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${vf}"`),null):e}function u2(e,t){let n,i,o,l,u;if(r2(e)){let f=e.getAttribute("action");i=f?Jn(f,t):null,n=e.getAttribute("method")||yf,o=Dg(e.getAttribute("enctype"))||vf,l=new FormData(e)}else if(n2(e)||i2(e)&&(e.type==="submit"||e.type==="image")){let f=e.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=e.getAttribute("formaction")||f.getAttribute("action");if(i=p?Jn(p,t):null,n=e.getAttribute("formmethod")||f.getAttribute("method")||yf,o=Dg(e.getAttribute("formenctype"))||Dg(f.getAttribute("enctype"))||vf,l=new FormData(f,e),!l2()){let{name:h,type:y,value:_}=e;if(y==="image"){let v=h?`${h}.`:"";l.append(`${v}x`,"0"),l.append(`${v}y`,"0")}else h&&l.append(h,_)}}else{if(kh(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=yf,i=null,o=vf,u=e}return l&&o==="text/plain"&&(u=l,l=void 0),{action:i,method:n.toLowerCase(),encType:o,formData:l,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Pv(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function d2(e,t,n){let i=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return i.pathname==="/"?i.pathname=`_root.${n}`:t&&Jn(i.pathname,t)==="/"?i.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${n}`,i}async function f2(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function h2(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function p2(e,t,n){let i=await Promise.all(e.map(async o=>{let l=t.routes[o.route.id];if(l){let u=await f2(l,n);return u.links?u.links():[]}return[]}));return v2(i.flat(1).filter(h2).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function k1(e,t,n,i,o,l){let u=(p,h)=>n[h]?p.route.id!==n[h].route.id:!0,f=(p,h)=>n[h].pathname!==p.pathname||n[h].route.path?.endsWith("*")&&n[h].params["*"]!==p.params["*"];return l==="assets"?t.filter((p,h)=>u(p,h)||f(p,h)):l==="data"?t.filter((p,h)=>{let y=i.routes[p.route.id];if(!y||!y.hasLoader)return!1;if(u(p,h)||f(p,h))return!0;if(p.route.shouldRevalidate){let _=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function m2(e,t,{includeHydrateFallback:n}={}){return g2(e.map(i=>{let o=t.routes[i.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function g2(e){return[...new Set(e)]}function y2(e){let t={},n=Object.keys(e).sort();for(let i of n)t[i]=e[i];return t}function v2(e,t){let n=new Set;return new Set(t),e.reduce((i,o)=>{let l=JSON.stringify(y2(o));return n.has(l)||(n.add(l),i.push({key:l,link:o})),i},[])}function yT(){let e=E.useContext(Eo);return Pv(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function _2(){let e=E.useContext(du);return Pv(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var $v=E.createContext(void 0);$v.displayName="FrameworkContext";function vT(){let e=E.useContext($v);return Pv(e,"You must render this element inside a <HydratedRouter> element"),e}function b2(e,t){let n=E.useContext($v),[i,o]=E.useState(!1),[l,u]=E.useState(!1),{onFocus:f,onBlur:p,onMouseEnter:h,onMouseLeave:y,onTouchStart:_}=t,v=E.useRef(null);E.useEffect(()=>{if(e==="render"&&u(!0),e==="viewport"){let D=k=>{k.forEach(M=>{u(M.isIntersecting)})},T=new IntersectionObserver(D,{threshold:.5});return v.current&&T.observe(v.current),()=>{T.disconnect()}}},[e]),E.useEffect(()=>{if(i){let D=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(D)}}},[i]);let S=()=>{o(!0)},x=()=>{o(!1),u(!1)};return n?e!=="intent"?[l,v,{}]:[l,v,{onFocus:rc(f,S),onBlur:rc(p,x),onMouseEnter:rc(h,S),onMouseLeave:rc(y,x),onTouchStart:rc(_,S)}]:[!1,v,{}]}function rc(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function S2({page:e,...t}){let{router:n}=yT(),i=E.useMemo(()=>is(n.routes,e,n.basename),[n.routes,e,n.basename]);return i?E.createElement(w2,{page:e,matches:i,...t}):null}function x2(e){let{manifest:t,routeModules:n}=vT(),[i,o]=E.useState([]);return E.useEffect(()=>{let l=!1;return p2(e,t,n).then(u=>{l||o(u)}),()=>{l=!0}},[e,t,n]),i}function w2({page:e,matches:t,...n}){let i=jr(),{manifest:o,routeModules:l}=vT(),{basename:u}=yT(),{loaderData:f,matches:p}=_2(),h=E.useMemo(()=>k1(e,t,p,o,i,"data"),[e,t,p,o,i]),y=E.useMemo(()=>k1(e,t,p,o,i,"assets"),[e,t,p,o,i]),_=E.useMemo(()=>{if(e===i.pathname+i.search+i.hash)return[];let x=new Set,D=!1;if(t.forEach(k=>{let M=o.routes[k.route.id];!M||!M.hasLoader||(!h.some(R=>R.route.id===k.route.id)&&k.route.id in f&&l[k.route.id]?.shouldRevalidate||M.hasClientLoader?D=!0:x.add(k.route.id))}),x.size===0)return[];let T=d2(e,u,"data");return D&&x.size>0&&T.searchParams.set("_routes",t.filter(k=>x.has(k.route.id)).map(k=>k.route.id).join(",")),[T.pathname+T.search]},[u,f,i,o,h,t,e,l]),v=E.useMemo(()=>m2(y,o),[y,o]),S=x2(y);return E.createElement(E.Fragment,null,_.map(x=>E.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...n})),v.map(x=>E.createElement("link",{key:x,rel:"modulepreload",href:x,...n})),S.map(({key:x,link:D})=>E.createElement("link",{key:x,nonce:n.nonce,...D})))}function E2(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var _T=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{_T&&(window.__reactRouterVersion="7.9.1")}catch{}function C2(e,t){return oM({basename:t?.basename,getContext:t?.getContext,future:t?.future,history:CO({window:t?.window}),hydrationData:T2(),routes:e,mapRouteProperties:WM,hydrationRouteProperties:YM,dataStrategy:t?.dataStrategy,patchRoutesOnNavigation:t?.patchRoutesOnNavigation,window:t?.window}).initialize()}function T2(){let e=window?.__staticRouterHydrationData;return e&&e.errors&&(e={...e,errors:R2(e.errors)}),e}function R2(e){if(!e)return null;let t=Object.entries(e),n={};for(let[i,o]of t)if(o&&o.__type==="RouteErrorResponse")n[i]=new Lf(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){if(o.__subType){let l=window[o.__subType];if(typeof l=="function")try{let u=new l(o.message);u.stack="",n[i]=u}catch{}}if(n[i]==null){let l=new Error(o.message);l.stack="",n[i]=l}}else n[i]=o;return n}var bT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ts=E.forwardRef(function({onClick:t,discover:n="render",prefetch:i="none",relative:o,reloadDocument:l,replace:u,state:f,target:p,to:h,preventScrollReset:y,viewTransition:_,...v},S){let{basename:x}=E.useContext(Sr),D=typeof h=="string"&&bT.test(h),T,k=!1;if(typeof h=="string"&&D&&(T=h,_T))try{let F=new URL(window.location.href),H=h.startsWith("//")?new URL(F.protocol+h):new URL(h),z=Jn(H.pathname,x);H.origin===F.origin&&z!=null?h=z+H.search+H.hash:k=!0}catch{xt(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let M=DM(h,{relative:o}),[R,I,O]=b2(i,v),A=D2(h,{replace:u,state:f,target:p,preventScrollReset:y,relative:o,viewTransition:_});function j(F){t&&t(F),F.defaultPrevented||A(F)}let U=E.createElement("a",{...v,...O,href:T||M,onClick:k||l?t:j,ref:E2(S,I),target:p,"data-discover":!D&&n==="render"?"true":void 0});return R&&!D?E.createElement(E.Fragment,null,U,E.createElement(S2,{page:M})):U});Ts.displayName="Link";var Uv=E.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:i="",end:o=!1,style:l,to:u,viewTransition:f,children:p,...h},y){let _=fu(u,{relative:h.relative}),v=jr(),S=E.useContext(du),{navigator:x,basename:D}=E.useContext(Sr),T=S!=null&&j2(_)&&f===!0,k=x.encodeLocation?x.encodeLocation(_).pathname:_.pathname,M=v.pathname,R=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;n||(M=M.toLowerCase(),R=R?R.toLowerCase():null,k=k.toLowerCase()),R&&D&&(R=Jn(R,D)||R);const I=k!=="/"&&k.endsWith("/")?k.length-1:k.length;let O=M===k||!o&&M.startsWith(k)&&M.charAt(I)==="/",A=R!=null&&(R===k||!o&&R.startsWith(k)&&R.charAt(k.length)==="/"),j={isActive:O,isPending:A,isTransitioning:T},U=O?t:void 0,F;typeof i=="function"?F=i(j):F=[i,O?"active":null,A?"pending":null,T?"transitioning":null].filter(Boolean).join(" ");let H=typeof l=="function"?l(j):l;return E.createElement(Ts,{...h,"aria-current":U,className:F,ref:y,style:H,to:u,viewTransition:f},typeof p=="function"?p(j):p)});Uv.displayName="NavLink";var A2=E.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:i,replace:o,state:l,method:u=yf,action:f,onSubmit:p,relative:h,preventScrollReset:y,viewTransition:_,...v},S)=>{let x=M2(),D=L2(f,{relative:h}),T=u.toLowerCase()==="get"?"get":"post",k=typeof f=="string"&&bT.test(f),M=R=>{if(p&&p(R),R.defaultPrevented)return;R.preventDefault();let I=R.nativeEvent.submitter,O=I?.getAttribute("formmethod")||u;x(I||R.currentTarget,{fetcherKey:t,method:O,navigate:n,replace:o,state:l,relative:h,preventScrollReset:y,viewTransition:_})};return E.createElement("form",{ref:S,method:T,action:D,onSubmit:i?p:M,...v,"data-discover":!k&&e==="render"?"true":void 0})});A2.displayName="Form";function I2(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ST(e){let t=E.useContext(Eo);return Pe(t,I2(e)),t}function D2(e,{target:t,replace:n,state:i,preventScrollReset:o,relative:l,viewTransition:u}={}){let f=Cs(),p=jr(),h=fu(e,{relative:l});return E.useCallback(y=>{if(o2(y,t)){y.preventDefault();let _=n!==void 0?n:ys(p)===ys(h);f(e,{replace:_,state:i,preventScrollReset:o,relative:l,viewTransition:u})}},[p,f,h,n,i,t,e,o,l,u])}function k2(e){xt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=E.useRef(Iy(e)),n=E.useRef(!1),i=jr(),o=E.useMemo(()=>a2(i.search,n.current?null:t.current),[i.search]),l=Cs(),u=E.useCallback((f,p)=>{const h=Iy(typeof f=="function"?f(new URLSearchParams(o)):f);n.current=!0,l("?"+h,p)},[l,o]);return[o,u]}var N2=0,O2=()=>`__${String(++N2)}__`;function M2(){let{router:e}=ST("useSubmit"),{basename:t}=E.useContext(Sr),n=qM();return E.useCallback(async(i,o={})=>{let{action:l,method:u,encType:f,formData:p,body:h}=u2(i,t);if(o.navigate===!1){let y=o.fetcherKey||O2();await e.fetch(y,n,o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:h,formMethod:o.method||u,formEncType:o.encType||f,flushSync:o.flushSync})}else await e.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:h,formMethod:o.method||u,formEncType:o.encType||f,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[e,t,n])}function L2(e,{relative:t}={}){let{basename:n}=E.useContext(Sr),i=E.useContext(rr);Pe(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),l={...fu(e||".",{relative:t})},u=jr();if(e==null){l.search=u.search;let f=new URLSearchParams(l.search),p=f.getAll("index");if(p.some(y=>y==="")){f.delete("index"),p.filter(_=>_).forEach(_=>f.append("index",_));let y=f.toString();l.search=y?`?${y}`:""}}return(!e||e===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(l.pathname=l.pathname==="/"?n:kr([n,l.pathname])),ys(l)}function j2(e,{relative:t}={}){let n=E.useContext(Nv);Pe(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=ST("useViewTransitionState"),o=fu(e,{relative:t});if(!n.isTransitioning)return!1;let l=Jn(n.currentLocation.pathname,i)||n.currentLocation.pathname,u=Jn(n.nextLocation.pathname,i)||n.nextLocation.pathname;return Mf(o.pathname,u)!=null||Mf(o.pathname,l)!=null}var xT=VC();function P2(e){return E.createElement(KM,{flushSync:xT.flushSync,...e})}var Vt=function(){return Vt=Object.assign||function(t){for(var n,i=1,o=arguments.length;i<o;i++){n=arguments[i];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},Vt.apply(this,arguments)};function zc(e,t,n){if(n||arguments.length===2)for(var i=0,o=t.length,l;i<o;i++)(l||!(i in t))&&(l||(l=Array.prototype.slice.call(t,0,i)),l[i]=t[i]);return e.concat(l||Array.prototype.slice.call(t))}var pt="-ms-",Ec="-moz-",et="-webkit-",wT="comm",Nh="rule",zv="decl",$2="@import",ET="@keyframes",U2="@layer",CT=Math.abs,Bv=String.fromCharCode,Dy=Object.assign;function z2(e,t){return Ft(e,0)^45?(((t<<2^Ft(e,0))<<2^Ft(e,1))<<2^Ft(e,2))<<2^Ft(e,3):0}function TT(e){return e.trim()}function li(e,t){return(e=t.exec(e))?e[0]:e}function ze(e,t,n){return e.replace(t,n)}function _f(e,t,n){return e.indexOf(t,n)}function Ft(e,t){return e.charCodeAt(t)|0}function Ia(e,t,n){return e.slice(t,n)}function Dr(e){return e.length}function RT(e){return e.length}function vc(e,t){return t.push(e),e}function B2(e,t){return e.map(t).join("")}function N1(e,t){return e.filter(function(n){return!li(n,t)})}var Oh=1,Da=1,AT=0,er=0,Mt=0,Va="";function Mh(e,t,n,i,o,l,u,f){return{value:e,root:t,parent:n,type:i,props:o,children:l,line:Oh,column:Da,length:u,return:"",siblings:f}}function ns(e,t){return Dy(Mh("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ha(e){for(;e.root;)e=ns(e.root,{children:[e]});vc(e,e.siblings)}function H2(){return Mt}function F2(){return Mt=er>0?Ft(Va,--er):0,Da--,Mt===10&&(Da=1,Oh--),Mt}function pr(){return Mt=er<AT?Ft(Va,er++):0,Da++,Mt===10&&(Da=1,Oh++),Mt}function co(){return Ft(Va,er)}function bf(){return er}function Lh(e,t){return Ia(Va,e,t)}function ky(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function q2(e){return Oh=Da=1,AT=Dr(Va=e),er=0,[]}function V2(e){return Va="",e}function kg(e){return TT(Lh(er-1,Ny(e===91?e+2:e===40?e+1:e)))}function G2(e){for(;(Mt=co())&&Mt<33;)pr();return ky(e)>2||ky(Mt)>3?"":" "}function W2(e,t){for(;--t&&pr()&&!(Mt<48||Mt>102||Mt>57&&Mt<65||Mt>70&&Mt<97););return Lh(e,bf()+(t<6&&co()==32&&pr()==32))}function Ny(e){for(;pr();)switch(Mt){case e:return er;case 34:case 39:e!==34&&e!==39&&Ny(Mt);break;case 40:e===41&&Ny(e);break;case 92:pr();break}return er}function Y2(e,t){for(;pr()&&e+Mt!==57;)if(e+Mt===84&&co()===47)break;return"/*"+Lh(t,er-1)+"*"+Bv(e===47?e:pr())}function Q2(e){for(;!ky(co());)pr();return Lh(e,er)}function K2(e){return V2(Sf("",null,null,null,[""],e=q2(e),0,[0],e))}function Sf(e,t,n,i,o,l,u,f,p){for(var h=0,y=0,_=u,v=0,S=0,x=0,D=1,T=1,k=1,M=0,R="",I=o,O=l,A=i,j=R;T;)switch(x=M,M=pr()){case 40:if(x!=108&&Ft(j,_-1)==58){_f(j+=ze(kg(M),"&","&\f"),"&\f",CT(h?f[h-1]:0))!=-1&&(k=-1);break}case 34:case 39:case 91:j+=kg(M);break;case 9:case 10:case 13:case 32:j+=G2(x);break;case 92:j+=W2(bf()-1,7);continue;case 47:switch(co()){case 42:case 47:vc(X2(Y2(pr(),bf()),t,n,p),p);break;default:j+="/"}break;case 123*D:f[h++]=Dr(j)*k;case 125*D:case 59:case 0:switch(M){case 0:case 125:T=0;case 59+y:k==-1&&(j=ze(j,/\f/g,"")),S>0&&Dr(j)-_&&vc(S>32?M1(j+";",i,n,_-1,p):M1(ze(j," ","")+";",i,n,_-2,p),p);break;case 59:j+=";";default:if(vc(A=O1(j,t,n,h,y,o,f,R,I=[],O=[],_,l),l),M===123)if(y===0)Sf(j,t,A,A,I,l,_,f,O);else switch(v===99&&Ft(j,3)===110?100:v){case 100:case 108:case 109:case 115:Sf(e,A,A,i&&vc(O1(e,A,A,0,0,o,f,R,o,I=[],_,O),O),o,O,_,f,i?I:O);break;default:Sf(j,A,A,A,[""],O,0,f,O)}}h=y=S=0,D=k=1,R=j="",_=u;break;case 58:_=1+Dr(j),S=x;default:if(D<1){if(M==123)--D;else if(M==125&&D++==0&&F2()==125)continue}switch(j+=Bv(M),M*D){case 38:k=y>0?1:(j+="\f",-1);break;case 44:f[h++]=(Dr(j)-1)*k,k=1;break;case 64:co()===45&&(j+=kg(pr())),v=co(),y=_=Dr(R=j+=Q2(bf())),M++;break;case 45:x===45&&Dr(j)==2&&(D=0)}}return l}function O1(e,t,n,i,o,l,u,f,p,h,y,_){for(var v=o-1,S=o===0?l:[""],x=RT(S),D=0,T=0,k=0;D<i;++D)for(var M=0,R=Ia(e,v+1,v=CT(T=u[D])),I=e;M<x;++M)(I=TT(T>0?S[M]+" "+R:ze(R,/&\f/g,S[M])))&&(p[k++]=I);return Mh(e,t,n,o===0?Nh:f,p,h,y,_)}function X2(e,t,n,i){return Mh(e,t,n,wT,Bv(H2()),Ia(e,2,-2),0,i)}function M1(e,t,n,i,o){return Mh(e,t,n,zv,Ia(e,0,i),Ia(e,i+1,-1),i,o)}function IT(e,t,n){switch(z2(e,t)){case 5103:return et+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return et+e+e;case 4789:return Ec+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return et+e+Ec+e+pt+e+e;case 5936:switch(Ft(e,t+11)){case 114:return et+e+pt+ze(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return et+e+pt+ze(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return et+e+pt+ze(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return et+e+pt+e+e;case 6165:return et+e+pt+"flex-"+e+e;case 5187:return et+e+ze(e,/(\w+).+(:[^]+)/,et+"box-$1$2"+pt+"flex-$1$2")+e;case 5443:return et+e+pt+"flex-item-"+ze(e,/flex-|-self/g,"")+(li(e,/flex-|baseline/)?"":pt+"grid-row-"+ze(e,/flex-|-self/g,""))+e;case 4675:return et+e+pt+"flex-line-pack"+ze(e,/align-content|flex-|-self/g,"")+e;case 5548:return et+e+pt+ze(e,"shrink","negative")+e;case 5292:return et+e+pt+ze(e,"basis","preferred-size")+e;case 6060:return et+"box-"+ze(e,"-grow","")+et+e+pt+ze(e,"grow","positive")+e;case 4554:return et+ze(e,/([^-])(transform)/g,"$1"+et+"$2")+e;case 6187:return ze(ze(ze(e,/(zoom-|grab)/,et+"$1"),/(image-set)/,et+"$1"),e,"")+e;case 5495:case 3959:return ze(e,/(image-set\([^]*)/,et+"$1$`$1");case 4968:return ze(ze(e,/(.+:)(flex-)?(.*)/,et+"box-pack:$3"+pt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+et+e+e;case 4200:if(!li(e,/flex-|baseline/))return pt+"grid-column-align"+Ia(e,t)+e;break;case 2592:case 3360:return pt+ze(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(i,o){return t=o,li(i.props,/grid-\w+-end/)})?~_f(e+(n=n[t].value),"span",0)?e:pt+ze(e,"-start","")+e+pt+"grid-row-span:"+(~_f(n,"span",0)?li(n,/\d+/):+li(n,/\d+/)-+li(e,/\d+/))+";":pt+ze(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(i){return li(i.props,/grid-\w+-start/)})?e:pt+ze(ze(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ze(e,/(.+)-inline(.+)/,et+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Dr(e)-1-t>6)switch(Ft(e,t+1)){case 109:if(Ft(e,t+4)!==45)break;case 102:return ze(e,/(.+:)(.+)-([^]+)/,"$1"+et+"$2-$3$1"+Ec+(Ft(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~_f(e,"stretch",0)?IT(ze(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ze(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,o,l,u,f,p,h){return pt+o+":"+l+h+(u?pt+o+"-span:"+(f?p:+p-+l)+h:"")+e});case 4949:if(Ft(e,t+6)===121)return ze(e,":",":"+et)+e;break;case 6444:switch(Ft(e,Ft(e,14)===45?18:11)){case 120:return ze(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+et+(Ft(e,14)===45?"inline-":"")+"box$3$1"+et+"$2$3$1"+pt+"$2box$3")+e;case 100:return ze(e,":",":"+pt)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ze(e,"scroll-","scroll-snap-")+e}return e}function Pf(e,t){for(var n="",i=0;i<e.length;i++)n+=t(e[i],i,e,t)||"";return n}function Z2(e,t,n,i){switch(e.type){case U2:if(e.children.length)break;case $2:case zv:return e.return=e.return||e.value;case wT:return"";case ET:return e.return=e.value+"{"+Pf(e.children,i)+"}";case Nh:if(!Dr(e.value=e.props.join(",")))return""}return Dr(n=Pf(e.children,i))?e.return=e.value+"{"+n+"}":""}function J2(e){var t=RT(e);return function(n,i,o,l){for(var u="",f=0;f<t;f++)u+=e[f](n,i,o,l)||"";return u}}function eL(e){return function(t){t.root||(t=t.return)&&e(t)}}function tL(e,t,n,i){if(e.length>-1&&!e.return)switch(e.type){case zv:e.return=IT(e.value,e.length,n);return;case ET:return Pf([ns(e,{value:ze(e.value,"@","@"+et)})],i);case Nh:if(e.length)return B2(n=e.props,function(o){switch(li(o,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ha(ns(e,{props:[ze(o,/:(read-\w+)/,":"+Ec+"$1")]})),ha(ns(e,{props:[o]})),Dy(e,{props:N1(n,i)});break;case"::placeholder":ha(ns(e,{props:[ze(o,/:(plac\w+)/,":"+et+"input-$1")]})),ha(ns(e,{props:[ze(o,/:(plac\w+)/,":"+Ec+"$1")]})),ha(ns(e,{props:[ze(o,/:(plac\w+)/,pt+"input-$1")]})),ha(ns(e,{props:[o]})),Dy(e,{props:N1(n,i)});break}return""})}}var nL={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},kn={},ka=typeof process<"u"&&kn!==void 0&&(kn.REACT_APP_SC_ATTR||kn.SC_ATTR)||"data-styled",DT="active",kT="data-styled-version",jh="6.1.19",Hv=`/*!sc*/
`,$f=typeof window<"u"&&typeof document<"u",rL=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&kn!==void 0&&kn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&kn.REACT_APP_SC_DISABLE_SPEEDY!==""?kn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&kn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&kn!==void 0&&kn.SC_DISABLE_SPEEDY!==void 0&&kn.SC_DISABLE_SPEEDY!==""&&kn.SC_DISABLE_SPEEDY!=="false"&&kn.SC_DISABLE_SPEEDY),iL={},Ph=Object.freeze([]),Na=Object.freeze({});function NT(e,t,n){return n===void 0&&(n=Na),e.theme!==n.theme&&e.theme||t||n.theme}var OT=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),sL=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,oL=/(^-|-$)/g;function L1(e){return e.replace(sL,"-").replace(oL,"")}var aL=/(a)(d)/gi,Yd=52,j1=function(e){return String.fromCharCode(e+(e>25?39:97))};function Oy(e){var t,n="";for(t=Math.abs(e);t>Yd;t=t/Yd|0)n=j1(t%Yd)+n;return(j1(t%Yd)+n).replace(aL,"$1-$2")}var Ng,MT=5381,_a=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},LT=function(e){return _a(MT,e)};function jT(e){return Oy(LT(e)>>>0)}function lL(e){return e.displayName||e.name||"Component"}function Og(e){return typeof e=="string"&&!0}var PT=typeof Symbol=="function"&&Symbol.for,$T=PT?Symbol.for("react.memo"):60115,cL=PT?Symbol.for("react.forward_ref"):60112,uL={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},dL={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},UT={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},fL=((Ng={})[cL]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ng[$T]=UT,Ng);function P1(e){return("type"in(t=e)&&t.type.$$typeof)===$T?UT:"$$typeof"in e?fL[e.$$typeof]:uL;var t}var hL=Object.defineProperty,pL=Object.getOwnPropertyNames,$1=Object.getOwnPropertySymbols,mL=Object.getOwnPropertyDescriptor,gL=Object.getPrototypeOf,U1=Object.prototype;function zT(e,t,n){if(typeof t!="string"){if(U1){var i=gL(t);i&&i!==U1&&zT(e,i,n)}var o=pL(t);$1&&(o=o.concat($1(t)));for(var l=P1(e),u=P1(t),f=0;f<o.length;++f){var p=o[f];if(!(p in dL||n&&n[p]||u&&p in u||l&&p in l)){var h=mL(t,p);try{hL(e,p,h)}catch{}}}}return e}function uo(e){return typeof e=="function"}function Fv(e){return typeof e=="object"&&"styledComponentId"in e}function so(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function My(e,t){if(e.length===0)return"";for(var n=e[0],i=1;i<e.length;i++)n+=e[i];return n}function Bc(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ly(e,t,n){if(n===void 0&&(n=!1),!n&&!Bc(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var i=0;i<t.length;i++)e[i]=Ly(e[i],t[i]);else if(Bc(t))for(var i in t)e[i]=Ly(e[i],t[i]);return e}function qv(e,t){Object.defineProperty(e,"toString",{value:t})}function vs(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var yL=(function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,i=0;i<t;i++)n+=this.groupSizes[i];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,l=o;t>=l;)if((l<<=1)<0)throw vs(16,"".concat(t));this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var u=o;u<l;u++)this.groupSizes[u]=0}for(var f=this.indexOfGroup(t+1),p=(u=0,n.length);u<p;u++)this.tag.insertRule(f,n[u])&&(this.groupSizes[t]++,f++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],i=this.indexOfGroup(t),o=i+n;this.groupSizes[t]=0;for(var l=i;l<o;l++)this.tag.deleteRule(i)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var i=this.groupSizes[t],o=this.indexOfGroup(t),l=o+i,u=o;u<l;u++)n+="".concat(this.tag.getRule(u)).concat(Hv);return n},e})(),xf=new Map,Uf=new Map,wf=1,Qd=function(e){if(xf.has(e))return xf.get(e);for(;Uf.has(wf);)wf++;var t=wf++;return xf.set(e,t),Uf.set(t,e),t},vL=function(e,t){wf=t+1,xf.set(e,t),Uf.set(t,e)},_L="style[".concat(ka,"][").concat(kT,'="').concat(jh,'"]'),bL=new RegExp("^".concat(ka,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),SL=function(e,t,n){for(var i,o=n.split(","),l=0,u=o.length;l<u;l++)(i=o[l])&&e.registerName(t,i)},xL=function(e,t){for(var n,i=((n=t.textContent)!==null&&n!==void 0?n:"").split(Hv),o=[],l=0,u=i.length;l<u;l++){var f=i[l].trim();if(f){var p=f.match(bL);if(p){var h=0|parseInt(p[1],10),y=p[2];h!==0&&(vL(y,h),SL(e,y,p[3]),e.getTag().insertRules(h,o)),o.length=0}else o.push(f)}}},z1=function(e){for(var t=document.querySelectorAll(_L),n=0,i=t.length;n<i;n++){var o=t[n];o&&o.getAttribute(ka)!==DT&&(xL(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function wL(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var BT=function(e){var t=document.head,n=e||t,i=document.createElement("style"),o=(function(f){var p=Array.from(f.querySelectorAll("style[".concat(ka,"]")));return p[p.length-1]})(n),l=o!==void 0?o.nextSibling:null;i.setAttribute(ka,DT),i.setAttribute(kT,jh);var u=wL();return u&&i.setAttribute("nonce",u),n.insertBefore(i,l),i},EL=(function(){function e(t){this.element=BT(t),this.element.appendChild(document.createTextNode("")),this.sheet=(function(n){if(n.sheet)return n.sheet;for(var i=document.styleSheets,o=0,l=i.length;o<l;o++){var u=i[o];if(u.ownerNode===n)return u}throw vs(17)})(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e})(),CL=(function(){function e(t){this.element=BT(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var i=document.createTextNode(n);return this.element.insertBefore(i,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e})(),TL=(function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e})(),B1=$f,RL={isServer:!$f,useCSSOMInjection:!rL},zf=(function(){function e(t,n,i){t===void 0&&(t=Na),n===void 0&&(n={});var o=this;this.options=Vt(Vt({},RL),t),this.gs=n,this.names=new Map(i),this.server=!!t.isServer,!this.server&&$f&&B1&&(B1=!1,z1(this)),qv(this,function(){return(function(l){for(var u=l.getTag(),f=u.length,p="",h=function(_){var v=(function(k){return Uf.get(k)})(_);if(v===void 0)return"continue";var S=l.names.get(v),x=u.getGroup(_);if(S===void 0||!S.size||x.length===0)return"continue";var D="".concat(ka,".g").concat(_,'[id="').concat(v,'"]'),T="";S!==void 0&&S.forEach(function(k){k.length>0&&(T+="".concat(k,","))}),p+="".concat(x).concat(D,'{content:"').concat(T,'"}').concat(Hv)},y=0;y<f;y++)h(y);return p})(o)})}return e.registerId=function(t){return Qd(t)},e.prototype.rehydrate=function(){!this.server&&$f&&z1(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Vt(Vt({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=(function(n){var i=n.useCSSOMInjection,o=n.target;return n.isServer?new TL(o):i?new EL(o):new CL(o)})(this.options),new yL(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Qd(t),this.names.has(t))this.names.get(t).add(n);else{var i=new Set;i.add(n),this.names.set(t,i)}},e.prototype.insertRules=function(t,n,i){this.registerName(t,n),this.getTag().insertRules(Qd(t),i)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Qd(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e})(),AL=/&/g,IL=/^\s*\/\/.*$/gm;function HT(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(i){return"".concat(t," ").concat(i)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=HT(n.children,t)),n})}function DL(e){var t,n,i,o=Na,l=o.options,u=l===void 0?Na:l,f=o.plugins,p=f===void 0?Ph:f,h=function(v,S,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):v},y=p.slice();y.push(function(v){v.type===Nh&&v.value.includes("&")&&(v.props[0]=v.props[0].replace(AL,n).replace(i,h))}),u.prefix&&y.push(tL),y.push(Z2);var _=function(v,S,x,D){S===void 0&&(S=""),x===void 0&&(x=""),D===void 0&&(D="&"),t=D,n=S,i=new RegExp("\\".concat(n,"\\b"),"g");var T=v.replace(IL,""),k=K2(x||S?"".concat(x," ").concat(S," { ").concat(T," }"):T);u.namespace&&(k=HT(k,u.namespace));var M=[];return Pf(k,J2(y.concat(eL(function(R){return M.push(R)})))),M};return _.hash=p.length?p.reduce(function(v,S){return S.name||vs(15),_a(v,S.name)},MT).toString():"",_}var kL=new zf,jy=DL(),FT=dr.createContext({shouldForwardProp:void 0,styleSheet:kL,stylis:jy});FT.Consumer;dr.createContext(void 0);function Py(){return E.useContext(FT)}var NL=(function(){function e(t,n){var i=this;this.inject=function(o,l){l===void 0&&(l=jy);var u=i.name+l.hash;o.hasNameForId(i.id,u)||o.insertRules(i.id,u,l(i.rules,u,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,qv(this,function(){throw vs(12,String(i.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=jy),this.name+t.hash},e})(),OL=function(e){return e>="A"&&e<="Z"};function H1(e){for(var t="",n=0;n<e.length;n++){var i=e[n];if(n===1&&i==="-"&&e[0]==="-")return e;OL(i)?t+="-"+i.toLowerCase():t+=i}return t.startsWith("ms-")?"-"+t:t}var qT=function(e){return e==null||e===!1||e===""},VT=function(e){var t,n,i=[];for(var o in e){var l=e[o];e.hasOwnProperty(o)&&!qT(l)&&(Array.isArray(l)&&l.isCss||uo(l)?i.push("".concat(H1(o),":"),l,";"):Bc(l)?i.push.apply(i,zc(zc(["".concat(o," {")],VT(l),!1),["}"],!1)):i.push("".concat(H1(o),": ").concat((t=o,(n=l)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in nL||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function ds(e,t,n,i){if(qT(e))return[];if(Fv(e))return[".".concat(e.styledComponentId)];if(uo(e)){if(!uo(l=e)||l.prototype&&l.prototype.isReactComponent||!t)return[e];var o=e(t);return ds(o,t,n,i)}var l;return e instanceof NL?n?(e.inject(n,i),[e.getName(i)]):[e]:Bc(e)?VT(e):Array.isArray(e)?Array.prototype.concat.apply(Ph,e.map(function(u){return ds(u,t,n,i)})):[e.toString()]}function GT(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(uo(n)&&!Fv(n))return!1}return!0}var ML=LT(jh),LL=(function(){function e(t,n,i){this.rules=t,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&GT(t),this.componentId=n,this.baseHash=_a(ML,n),this.baseStyle=i,zf.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,i){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=so(o,this.staticRulesId);else{var l=My(ds(this.rules,t,n,i)),u=Oy(_a(this.baseHash,l)>>>0);if(!n.hasNameForId(this.componentId,u)){var f=i(l,".".concat(u),void 0,this.componentId);n.insertRules(this.componentId,u,f)}o=so(o,u),this.staticRulesId=u}else{for(var p=_a(this.baseHash,i.hash),h="",y=0;y<this.rules.length;y++){var _=this.rules[y];if(typeof _=="string")h+=_;else if(_){var v=My(ds(_,t,n,i));p=_a(p,v+y),h+=v}}if(h){var S=Oy(p>>>0);n.hasNameForId(this.componentId,S)||n.insertRules(this.componentId,S,i(h,".".concat(S),void 0,this.componentId)),o=so(o,S)}}return o},e})(),Oa=dr.createContext(void 0);Oa.Consumer;function Vv(){var e=E.useContext(Oa);if(!e)throw vs(18);return e}function jL(e){var t=dr.useContext(Oa),n=E.useMemo(function(){return(function(i,o){if(!i)throw vs(14);if(uo(i)){var l=i(o);return l}if(Array.isArray(i)||typeof i!="object")throw vs(8);return o?Vt(Vt({},o),i):i})(e.theme,t)},[e.theme,t]);return e.children?dr.createElement(Oa.Provider,{value:n},e.children):null}var Mg={};function PL(e,t,n){var i=Fv(e),o=e,l=!Og(e),u=t.attrs,f=u===void 0?Ph:u,p=t.componentId,h=p===void 0?(function(I,O){var A=typeof I!="string"?"sc":L1(I);Mg[A]=(Mg[A]||0)+1;var j="".concat(A,"-").concat(jT(jh+A+Mg[A]));return O?"".concat(O,"-").concat(j):j})(t.displayName,t.parentComponentId):p,y=t.displayName,_=y===void 0?(function(I){return Og(I)?"styled.".concat(I):"Styled(".concat(lL(I),")")})(e):y,v=t.displayName&&t.componentId?"".concat(L1(t.displayName),"-").concat(t.componentId):t.componentId||h,S=i&&o.attrs?o.attrs.concat(f).filter(Boolean):f,x=t.shouldForwardProp;if(i&&o.shouldForwardProp){var D=o.shouldForwardProp;if(t.shouldForwardProp){var T=t.shouldForwardProp;x=function(I,O){return D(I,O)&&T(I,O)}}else x=D}var k=new LL(n,v,i?o.componentStyle:void 0);function M(I,O){return(function(A,j,U){var F=A.attrs,H=A.componentStyle,z=A.defaultProps,G=A.foldedComponentIds,V=A.styledComponentId,te=A.target,ue=dr.useContext(Oa),P=Py(),X=A.shouldForwardProp||P.shouldForwardProp,ne=NT(j,ue,z)||Na,ae=(function(me,pe,Ae){for(var be,De=Vt(Vt({},pe),{className:void 0,theme:Ae}),$e=0;$e<me.length;$e+=1){var vt=uo(be=me[$e])?be(De):be;for(var mt in vt)De[mt]=mt==="className"?so(De[mt],vt[mt]):mt==="style"?Vt(Vt({},De[mt]),vt[mt]):vt[mt]}return pe.className&&(De.className=so(De.className,pe.className)),De})(F,j,ne),N=ae.as||te,K={};for(var le in ae)ae[le]===void 0||le[0]==="$"||le==="as"||le==="theme"&&ae.theme===ne||(le==="forwardedAs"?K.as=ae.forwardedAs:X&&!X(le,N)||(K[le]=ae[le]));var ie=(function(me,pe){var Ae=Py(),be=me.generateAndInjectStyles(pe,Ae.styleSheet,Ae.stylis);return be})(H,ae),de=so(G,V);return ie&&(de+=" "+ie),ae.className&&(de+=" "+ae.className),K[Og(N)&&!OT.has(N)?"class":"className"]=de,U&&(K.ref=U),E.createElement(N,K)})(R,I,O)}M.displayName=_;var R=dr.forwardRef(M);return R.attrs=S,R.componentStyle=k,R.displayName=_,R.shouldForwardProp=x,R.foldedComponentIds=i?so(o.foldedComponentIds,o.styledComponentId):"",R.styledComponentId=v,R.target=i?o.target:e,Object.defineProperty(R,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(I){this._foldedDefaultProps=i?(function(O){for(var A=[],j=1;j<arguments.length;j++)A[j-1]=arguments[j];for(var U=0,F=A;U<F.length;U++)Ly(O,F[U],!0);return O})({},o.defaultProps,I):I}}),qv(R,function(){return".".concat(R.styledComponentId)}),l&&zT(R,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),R}function F1(e,t){for(var n=[e[0]],i=0,o=t.length;i<o;i+=1)n.push(t[i],e[i+1]);return n}var q1=function(e){return Object.assign(e,{isCss:!0})};function tn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(uo(e)||Bc(e))return q1(ds(F1(Ph,zc([e],t,!0))));var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?ds(i):q1(ds(F1(i,t)))}function $y(e,t,n){if(n===void 0&&(n=Na),!t)throw vs(1,t);var i=function(o){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];return e(t,n,tn.apply(void 0,zc([o],l,!1)))};return i.attrs=function(o){return $y(e,t,Vt(Vt({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},i.withConfig=function(o){return $y(e,t,Vt(Vt({},n),o))},i}var WT=function(e){return $y(PL,e)},C=WT;OT.forEach(function(e){C[e]=WT(e)});var $L=(function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=GT(t),zf.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,i,o){var l=o(My(ds(this.rules,n,i,o)),""),u=this.componentId+t;i.insertRules(u,u,l)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,i,o){t>2&&zf.registerId(this.componentId+t),this.removeStyles(t,i),this.createStyles(t,n,i,o)},e})();function UL(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var i=tn.apply(void 0,zc([e],t,!1)),o="sc-global-".concat(jT(JSON.stringify(i))),l=new $L(i,o),u=function(p){var h=Py(),y=dr.useContext(Oa),_=dr.useRef(h.styleSheet.allocateGSInstance(o)).current;return h.styleSheet.server&&f(_,p,h.styleSheet,y,h.stylis),dr.useLayoutEffect(function(){if(!h.styleSheet.server)return f(_,p,h.styleSheet,y,h.stylis),function(){return l.removeStyles(_,h.styleSheet)}},[_,p,h.styleSheet,y,h.stylis]),null};function f(p,h,y,_,v){if(l.isStatic)l.renderStyles(p,iL,y,v);else{var S=Vt(Vt({},h),{theme:NT(h,_,u.defaultProps)});l.renderStyles(p,S,y,v)}}return dr.memo(u)}const wa=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__,_s=globalThis,Cc="10.11.0";function YT(){return Gv(_s),_s}function Gv(e){const t=e.__SENTRY__=e.__SENTRY__||{};return t.version=t.version||Cc,t[Cc]=t[Cc]||{}}function Wv(e,t,n=_s){const i=n.__SENTRY__=n.__SENTRY__||{},o=i[Cc]=i[Cc]||{};return o[e]||(o[e]=t())}const zL="Sentry Logger ",V1={};function BL(e){if(!("console"in _s))return e();const t=_s.console,n={},i=Object.keys(V1);i.forEach(o=>{const l=V1[o];n[o]=t[o],t[o]=l});try{return e()}finally{i.forEach(o=>{t[o]=n[o]})}}function HL(){Qv().enabled=!0}function FL(){Qv().enabled=!1}function QT(){return Qv().enabled}function qL(...e){Yv("log",...e)}function VL(...e){Yv("warn",...e)}function GL(...e){Yv("error",...e)}function Yv(e,...t){wa&&QT()&&BL(()=>{_s.console[e](`${zL}[${e}]:`,...t)})}function Qv(){return wa?Wv("loggerSettings",()=>({enabled:!1})):{enabled:!1}}const Ef={enable:HL,disable:FL,isEnabled:QT,log:qL,warn:VL,error:GL},WL=Object.prototype.toString;function YL(e,t){return WL.call(e)===`[object ${t}]`}function QL(e){return YL(e,"Object")}function KL(e){return!!(e?.then&&typeof e.then=="function")}function XL(e,t=0){return typeof e!="string"||t===0||e.length<=t?e:`${e.slice(0,t)}...`}function ZL(e,t,n){try{Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0})}catch{wa&&Ef.log(`Failed to add non-enumerable property "${t}" to object`,e)}}function JL(){const e=_s;return e.crypto||e.msCrypto}function Tc(e=JL()){let t=()=>Math.random()*16;try{if(e?.randomUUID)return e.randomUUID().replace(/-/g,"");e?.getRandomValues&&(t=()=>{const n=new Uint8Array(1);return e.getRandomValues(n),n[0]})}catch{}return("10000000100040008000"+1e11).replace(/[018]/g,n=>(n^(t()&15)>>n/4).toString(16))}const KT=1e3;function XT(){return Date.now()/KT}function ej(){const{performance:e}=_s;if(!e?.now||!e.timeOrigin)return XT;const t=e.timeOrigin;return()=>(t+e.now())/KT}let G1;function tj(){return(G1??(G1=ej()))()}function nj(e,t={}){if(t.user&&(!e.ipAddress&&t.user.ip_address&&(e.ipAddress=t.user.ip_address),!e.did&&!t.did&&(e.did=t.user.id||t.user.email||t.user.username)),e.timestamp=t.timestamp||tj(),t.abnormal_mechanism&&(e.abnormal_mechanism=t.abnormal_mechanism),t.ignoreDuration&&(e.ignoreDuration=t.ignoreDuration),t.sid&&(e.sid=t.sid.length===32?t.sid:Tc()),t.init!==void 0&&(e.init=t.init),!e.did&&t.did&&(e.did=`${t.did}`),typeof t.started=="number"&&(e.started=t.started),e.ignoreDuration)e.duration=void 0;else if(typeof t.duration=="number")e.duration=t.duration;else{const n=e.timestamp-e.started;e.duration=n>=0?n:0}t.release&&(e.release=t.release),t.environment&&(e.environment=t.environment),!e.ipAddress&&t.ipAddress&&(e.ipAddress=t.ipAddress),!e.userAgent&&t.userAgent&&(e.userAgent=t.userAgent),typeof t.errors=="number"&&(e.errors=t.errors),t.status&&(e.status=t.status)}function ZT(e,t,n=2){if(!t||typeof t!="object"||n<=0)return t;if(e&&Object.keys(t).length===0)return e;const i={...e};for(const o in t)Object.prototype.hasOwnProperty.call(t,o)&&(i[o]=ZT(i[o],t[o],n-1));return i}function W1(){return Tc()}const Uy="_sentrySpan";function Y1(e,t){t?ZL(e,Uy,t):delete e[Uy]}function Q1(e){return e[Uy]}const rj=100;class fo{constructor(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._attachments=[],this._user={},this._tags={},this._extra={},this._contexts={},this._sdkProcessingMetadata={},this._propagationContext={traceId:W1(),sampleRand:Math.random()}}clone(){const t=new fo;return t._breadcrumbs=[...this._breadcrumbs],t._tags={...this._tags},t._extra={...this._extra},t._contexts={...this._contexts},this._contexts.flags&&(t._contexts.flags={values:[...this._contexts.flags.values]}),t._user=this._user,t._level=this._level,t._session=this._session,t._transactionName=this._transactionName,t._fingerprint=this._fingerprint,t._eventProcessors=[...this._eventProcessors],t._attachments=[...this._attachments],t._sdkProcessingMetadata={...this._sdkProcessingMetadata},t._propagationContext={...this._propagationContext},t._client=this._client,t._lastEventId=this._lastEventId,Y1(t,Q1(this)),t}setClient(t){this._client=t}setLastEventId(t){this._lastEventId=t}getClient(){return this._client}lastEventId(){return this._lastEventId}addScopeListener(t){this._scopeListeners.push(t)}addEventProcessor(t){return this._eventProcessors.push(t),this}setUser(t){return this._user=t||{email:void 0,id:void 0,ip_address:void 0,username:void 0},this._session&&nj(this._session,{user:t}),this._notifyScopeListeners(),this}getUser(){return this._user}setTags(t){return this._tags={...this._tags,...t},this._notifyScopeListeners(),this}setTag(t,n){return this._tags={...this._tags,[t]:n},this._notifyScopeListeners(),this}setExtras(t){return this._extra={...this._extra,...t},this._notifyScopeListeners(),this}setExtra(t,n){return this._extra={...this._extra,[t]:n},this._notifyScopeListeners(),this}setFingerprint(t){return this._fingerprint=t,this._notifyScopeListeners(),this}setLevel(t){return this._level=t,this._notifyScopeListeners(),this}setTransactionName(t){return this._transactionName=t,this._notifyScopeListeners(),this}setContext(t,n){return n===null?delete this._contexts[t]:this._contexts[t]=n,this._notifyScopeListeners(),this}setSession(t){return t?this._session=t:delete this._session,this._notifyScopeListeners(),this}getSession(){return this._session}update(t){if(!t)return this;const n=typeof t=="function"?t(this):t,i=n instanceof fo?n.getScopeData():QL(n)?t:void 0,{tags:o,extra:l,user:u,contexts:f,level:p,fingerprint:h=[],propagationContext:y}=i||{};return this._tags={...this._tags,...o},this._extra={...this._extra,...l},this._contexts={...this._contexts,...f},u&&Object.keys(u).length&&(this._user=u),p&&(this._level=p),h.length&&(this._fingerprint=h),y&&(this._propagationContext=y),this}clear(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._session=void 0,Y1(this,void 0),this._attachments=[],this.setPropagationContext({traceId:W1(),sampleRand:Math.random()}),this._notifyScopeListeners(),this}addBreadcrumb(t,n){const i=typeof n=="number"?n:rj;if(i<=0)return this;const o={timestamp:XT(),...t,message:t.message?XL(t.message,2048):t.message};return this._breadcrumbs.push(o),this._breadcrumbs.length>i&&(this._breadcrumbs=this._breadcrumbs.slice(-i),this._client?.recordDroppedEvent("buffer_overflow","log_item")),this._notifyScopeListeners(),this}getLastBreadcrumb(){return this._breadcrumbs[this._breadcrumbs.length-1]}clearBreadcrumbs(){return this._breadcrumbs=[],this._notifyScopeListeners(),this}addAttachment(t){return this._attachments.push(t),this}clearAttachments(){return this._attachments=[],this}getScopeData(){return{breadcrumbs:this._breadcrumbs,attachments:this._attachments,contexts:this._contexts,tags:this._tags,extra:this._extra,user:this._user,level:this._level,fingerprint:this._fingerprint||[],eventProcessors:this._eventProcessors,propagationContext:this._propagationContext,sdkProcessingMetadata:this._sdkProcessingMetadata,transactionName:this._transactionName,span:Q1(this)}}setSDKProcessingMetadata(t){return this._sdkProcessingMetadata=ZT(this._sdkProcessingMetadata,t,2),this}setPropagationContext(t){return this._propagationContext=t,this}getPropagationContext(){return this._propagationContext}captureException(t,n){const i=n?.event_id||Tc();if(!this._client)return wa&&Ef.warn("No client configured on scope - will not capture exception!"),i;const o=new Error("Sentry syntheticException");return this._client.captureException(t,{originalException:t,syntheticException:o,...n,event_id:i},this),i}captureMessage(t,n,i){const o=i?.event_id||Tc();if(!this._client)return wa&&Ef.warn("No client configured on scope - will not capture message!"),o;const l=new Error(t);return this._client.captureMessage(t,n,{originalException:t,syntheticException:l,...i,event_id:o},this),o}captureEvent(t,n){const i=n?.event_id||Tc();return this._client?(this._client.captureEvent(t,{...n,event_id:i},this),i):(wa&&Ef.warn("No client configured on scope - will not capture event!"),i)}_notifyScopeListeners(){this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach(t=>{t(this)}),this._notifyingListeners=!1)}}function ij(){return Wv("defaultCurrentScope",()=>new fo)}function sj(){return Wv("defaultIsolationScope",()=>new fo)}class oj{constructor(t,n){let i;t?i=t:i=new fo;let o;n?o=n:o=new fo,this._stack=[{scope:i}],this._isolationScope=o}withScope(t){const n=this._pushScope();let i;try{i=t(n)}catch(o){throw this._popScope(),o}return KL(i)?i.then(o=>(this._popScope(),o),o=>{throw this._popScope(),o}):(this._popScope(),i)}getClient(){return this.getStackTop().client}getScope(){return this.getStackTop().scope}getIsolationScope(){return this._isolationScope}getStackTop(){return this._stack[this._stack.length-1]}_pushScope(){const t=this.getScope().clone();return this._stack.push({client:this.getClient(),scope:t}),t}_popScope(){return this._stack.length<=1?!1:!!this._stack.pop()}}function Ma(){const e=YT(),t=Gv(e);return t.stack=t.stack||new oj(ij(),sj())}function aj(e){return Ma().withScope(e)}function lj(e,t){const n=Ma();return n.withScope(()=>(n.getStackTop().scope=e,t(e)))}function K1(e){return Ma().withScope(()=>e(Ma().getIsolationScope()))}function cj(){return{withIsolationScope:K1,withScope:aj,withSetScope:lj,withSetIsolationScope:(e,t)=>K1(t),getCurrentScope:()=>Ma().getScope(),getIsolationScope:()=>Ma().getIsolationScope()}}function uj(e){const t=Gv(e);return t.acs?t.acs:cj()}function JT(){const e=YT();return uj(e).getCurrentScope()}function Or(e,t){return JT().captureException(e,void 0)}function Kv(e,t){const n=typeof t=="string"?t:void 0,i=typeof t!="string"?{captureContext:t}:void 0;return JT().captureMessage(e,n,i)}const dj=()=>{};var X1={};/**
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
 */const eR={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const he=function(e,t){if(!e)throw Ga(t)},Ga=function(e){return new Error("Firebase Database ("+eR.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
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
 */const tR=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let o=e.charCodeAt(i);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(e.charCodeAt(++i)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},fj=function(e){const t=[];let n=0,i=0;for(;n<e.length;){const o=e[n++];if(o<128)t[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=e[n++];t[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=e[n++],u=e[n++],f=e[n++],p=((o&7)<<18|(l&63)<<12|(u&63)<<6|f&63)-65536;t[i++]=String.fromCharCode(55296+(p>>10)),t[i++]=String.fromCharCode(56320+(p&1023))}else{const l=e[n++],u=e[n++];t[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|u&63)}}return t.join("")},Xv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<e.length;o+=3){const l=e[o],u=o+1<e.length,f=u?e[o+1]:0,p=o+2<e.length,h=p?e[o+2]:0,y=l>>2,_=(l&3)<<4|f>>4;let v=(f&15)<<2|h>>6,S=h&63;p||(S=64,u||(v=64)),i.push(n[y],n[_],n[v],n[S])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(tR(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):fj(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<e.length;){const l=n[e.charAt(o++)],f=o<e.length?n[e.charAt(o)]:0;++o;const h=o<e.length?n[e.charAt(o)]:64;++o;const _=o<e.length?n[e.charAt(o)]:64;if(++o,l==null||f==null||h==null||_==null)throw new hj;const v=l<<2|f>>4;if(i.push(v),h!==64){const S=f<<4&240|h>>2;if(i.push(S),_!==64){const x=h<<6&192|_;i.push(x)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class hj extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nR=function(e){const t=tR(e);return Xv.encodeByteArray(t,!0)},Bf=function(e){return nR(e).replace(/\./g,"")},Hf=function(e){try{return Xv.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function pj(e){return rR(void 0,e)}function rR(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)!t.hasOwnProperty(n)||!mj(n)||(e[n]=rR(e[n],t[n]));return e}function mj(e){return e!=="__proto__"}/**
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
 */function gj(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const yj=()=>gj().__FIREBASE_DEFAULTS__,vj=()=>{if(typeof process>"u"||typeof X1>"u")return;const e=X1.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},_j=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Hf(e[1]);return t&&JSON.parse(t)},Zv=()=>{try{return dj()||yj()||vj()||_j()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},iR=e=>Zv()?.emulatorHosts?.[e],bj=e=>{const t=iR(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),i]:[t.substring(0,n),i]},sR=()=>Zv()?.config,oR=e=>Zv()?.[`_${e}`];/**
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
 */function Wa(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function aR(e){return(await fetch(e,{credentials:"include"})).ok}/**
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
 */function Sj(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",o=e.iat||0,l=e.sub||e.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u={iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...e};return[Bf(JSON.stringify(n)),Bf(JSON.stringify(u)),""].join(".")}const Rc={};function xj(){const e={prod:[],emulator:[]};for(const t of Object.keys(Rc))Rc[t]?e.emulator.push(t):e.prod.push(t);return e}function wj(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}let Z1=!1;function lR(e,t){if(typeof window>"u"||typeof document>"u"||!Wa(window.location.host)||Rc[e]===t||Rc[e]||Z1)return;Rc[e]=t;function n(v){return`__firebase__banner__${v}`}const i="__firebase__banner",l=xj().prod.length>0;function u(){const v=document.getElementById(i);v&&v.remove()}function f(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function p(v,S){v.setAttribute("width","24"),v.setAttribute("id",S),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function h(){const v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{Z1=!0,u()},v}function y(v,S){v.setAttribute("id",S),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function _(){const v=wj(i),S=n("text"),x=document.getElementById(S)||document.createElement("span"),D=n("learnmore"),T=document.getElementById(D)||document.createElement("a"),k=n("preprendIcon"),M=document.getElementById(k)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){const R=v.element;f(R),y(T,D);const I=h();p(M,k),R.append(M,x,T,I),document.body.appendChild(R)}l?(x.innerText="Preview backend disconnected.",M.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",_):_()}/**
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
 */function hn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Jv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(hn())}function Ej(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Cj(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function cR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Tj(){const e=hn();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Rj(){return eR.NODE_ADMIN===!0}function uR(){try{return typeof indexedDB=="object"}catch{return!1}}function dR(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{t(o.error?.message||"")}}catch(n){t(n)}})}function Aj(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Ij="FirebaseError";class wi extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name=Ij,Object.setPrototypeOf(this,wi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Co.prototype.create)}}class Co{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},o=`${this.service}/${t}`,l=this.errors[t],u=l?Dj(l,i):"Error",f=`${this.serviceName}: ${u} (${o}).`;return new wi(o,f,i)}}function Dj(e,t){return e.replace(kj,(n,i)=>{const o=t[i];return o!=null?String(o):`<${i}?>`})}const kj=/\{\$([^}]+)}/g;/**
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
 */const fR=function(e){let t={},n={},i={},o="";try{const l=e.split(".");t=Hc(Hf(l[0])||""),n=Hc(Hf(l[1])||""),o=l[2],i=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:i,signature:o}},Nj=function(e){const t=fR(e),n=t.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Oj=function(e){const t=fR(e).claims;return typeof t=="object"&&t.admin===!0};/**
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
 */function Pr(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function La(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function zy(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Ff(e,t,n){const i={};for(const o in e)Object.prototype.hasOwnProperty.call(e,o)&&(i[o]=t.call(n,e[o],o,e));return i}function ho(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const o of n){if(!i.includes(o))return!1;const l=e[o],u=t[o];if(J1(l)&&J1(u)){if(!ho(l,u))return!1}else if(l!==u)return!1}for(const o of i)if(!n.includes(o))return!1;return!0}function J1(e){return e!==null&&typeof e=="object"}/**
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
 */class Mj{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,n){n||(n=0);const i=this.W_;if(typeof t=="string")for(let _=0;_<16;_++)i[_]=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),n+=4;else for(let _=0;_<16;_++)i[_]=t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3],n+=4;for(let _=16;_<80;_++){const v=i[_-3]^i[_-8]^i[_-14]^i[_-16];i[_]=(v<<1|v>>>31)&4294967295}let o=this.chain_[0],l=this.chain_[1],u=this.chain_[2],f=this.chain_[3],p=this.chain_[4],h,y;for(let _=0;_<80;_++){_<40?_<20?(h=f^l&(u^f),y=1518500249):(h=l^u^f,y=1859775393):_<60?(h=l&u|f&(l|u),y=2400959708):(h=l^u^f,y=3395469782);const v=(o<<5|o>>>27)+h+p+y+i[_]&4294967295;p=f,f=u,u=(l<<30|l>>>2)&4294967295,l=o,o=v}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(t,n){if(t==null)return;n===void 0&&(n=t.length);const i=n-this.blockSize;let o=0;const l=this.buf_;let u=this.inbuf_;for(;o<n;){if(u===0)for(;o<=i;)this.compress_(t,o),o+=this.blockSize;if(typeof t=="string"){for(;o<n;)if(l[u]=t.charCodeAt(o),++u,++o,u===this.blockSize){this.compress_(l),u=0;break}}else for(;o<n;)if(l[u]=t[o],++u,++o,u===this.blockSize){this.compress_(l),u=0;break}}this.inbuf_=u,this.total_+=n}digest(){const t=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let o=0;o<5;o++)for(let l=24;l>=0;l-=8)t[i]=this.chain_[o]>>l&255,++i;return t}}function Lj(e,t){const n=new jj(e,t);return n.subscribe.bind(n)}class jj{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,i){let o;if(t===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Pj(t,["next","error","complete"])?o=t:o={next:t,error:n,complete:i},o.next===void 0&&(o.next=Lg),o.error===void 0&&(o.error=Lg),o.complete===void 0&&(o.complete=Lg);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Pj(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Lg(){}function $h(e,t){return`${e} failed: ${t} argument `}/**
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
 */const $j=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let o=e.charCodeAt(i);if(o>=55296&&o<=56319){const l=o-55296;i++,he(i<e.length,"Surrogate pair missing trail surrogate.");const u=e.charCodeAt(i)-56320;o=65536+(l<<10)+u}o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):o<65536?(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},Uh=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};/**
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
 */class Uj{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const i=new hu;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t?.identifier),i=t?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Bj(t))try{this.getOrInitializeService({instanceIdentifier:to})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(t=to){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=to){return this.instances.has(t)}getOptions(t=to){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[l,u]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&u.resolve(o)}return o}onInit(t,n){const i=this.normalizeInstanceIdentifier(n),o=this.onInitCallbacks.get(i)??new Set;o.add(t),this.onInitCallbacks.set(i,o);const l=this.instances.get(i);return l&&t(l,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const i=this.onInitCallbacks.get(n);if(i)for(const o of i)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:zj(t),options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=to){return this.component?this.component.multipleInstances?t:to:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zj(e){return e===to?void 0:e}function Bj(e){return e.instantiationMode==="EAGER"}/**
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
 */class Hj{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Uj(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var lt;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(lt||(lt={}));const Fj={debug:lt.DEBUG,verbose:lt.VERBOSE,info:lt.INFO,warn:lt.WARN,error:lt.ERROR,silent:lt.SILENT},qj=lt.INFO,Vj={[lt.DEBUG]:"log",[lt.VERBOSE]:"log",[lt.INFO]:"info",[lt.WARN]:"warn",[lt.ERROR]:"error"},Gj=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),o=Vj[t];if(o)console[o](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class e_{constructor(t){this.name=t,this._logLevel=qj,this._logHandler=Gj,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in lt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Fj[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,lt.DEBUG,...t),this._logHandler(this,lt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,lt.VERBOSE,...t),this._logHandler(this,lt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,lt.INFO,...t),this._logHandler(this,lt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,lt.WARN,...t),this._logHandler(this,lt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,lt.ERROR,...t),this._logHandler(this,lt.ERROR,...t)}}const Wj=(e,t)=>t.some(n=>e instanceof n);let ew,tw;function Yj(){return ew||(ew=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qj(){return tw||(tw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hR=new WeakMap,By=new WeakMap,pR=new WeakMap,jg=new WeakMap,t_=new WeakMap;function Kj(e){const t=new Promise((n,i)=>{const o=()=>{e.removeEventListener("success",l),e.removeEventListener("error",u)},l=()=>{n(mi(e.result)),o()},u=()=>{i(e.error),o()};e.addEventListener("success",l),e.addEventListener("error",u)});return t.then(n=>{n instanceof IDBCursor&&hR.set(n,e)}).catch(()=>{}),t_.set(t,e),t}function Xj(e){if(By.has(e))return;const t=new Promise((n,i)=>{const o=()=>{e.removeEventListener("complete",l),e.removeEventListener("error",u),e.removeEventListener("abort",u)},l=()=>{n(),o()},u=()=>{i(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",l),e.addEventListener("error",u),e.addEventListener("abort",u)});By.set(e,t)}let Hy={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return By.get(e);if(t==="objectStoreNames")return e.objectStoreNames||pR.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mi(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Zj(e){Hy=e(Hy)}function Jj(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const i=e.call(Pg(this),t,...n);return pR.set(i,t.sort?t.sort():[t]),mi(i)}:Qj().includes(e)?function(...t){return e.apply(Pg(this),t),mi(hR.get(this))}:function(...t){return mi(e.apply(Pg(this),t))}}function e4(e){return typeof e=="function"?Jj(e):(e instanceof IDBTransaction&&Xj(e),Wj(e,Yj())?new Proxy(e,Hy):e)}function mi(e){if(e instanceof IDBRequest)return Kj(e);if(jg.has(e))return jg.get(e);const t=e4(e);return t!==e&&(jg.set(e,t),t_.set(t,e)),t}const Pg=e=>t_.get(e);function zh(e,t,{blocked:n,upgrade:i,blocking:o,terminated:l}={}){const u=indexedDB.open(e,t),f=mi(u);return i&&u.addEventListener("upgradeneeded",p=>{i(mi(u.result),p.oldVersion,p.newVersion,mi(u.transaction),p)}),n&&u.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),f.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",h=>o(h.oldVersion,h.newVersion,h))}).catch(()=>{}),f}function $g(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",i=>t(i.oldVersion,i)),mi(n).then(()=>{})}const t4=["get","getKey","getAll","getAllKeys","count"],n4=["put","add","delete","clear"],Ug=new Map;function nw(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ug.get(t))return Ug.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,o=n4.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(o||t4.includes(n)))return;const l=async function(u,...f){const p=this.transaction(u,o?"readwrite":"readonly");let h=p.store;return i&&(h=h.index(f.shift())),(await Promise.all([h[n](...f),o&&p.done]))[0]};return Ug.set(t,l),l}Zj(e=>({...e,get:(t,n,i)=>nw(t,n)||e.get(t,n,i),has:(t,n)=>!!nw(t,n)||e.has(t,n)}));/**
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
 */class r4{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(i4(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function i4(e){return e.getComponent()?.type==="VERSION"}const Fy="@firebase/app",rw="0.14.2";/**
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
 */const vi=new e_("@firebase/app"),s4="@firebase/app-compat",o4="@firebase/analytics-compat",a4="@firebase/analytics",l4="@firebase/app-check-compat",c4="@firebase/app-check",u4="@firebase/auth",d4="@firebase/auth-compat",f4="@firebase/database",h4="@firebase/data-connect",p4="@firebase/database-compat",m4="@firebase/functions",g4="@firebase/functions-compat",y4="@firebase/installations",v4="@firebase/installations-compat",_4="@firebase/messaging",b4="@firebase/messaging-compat",S4="@firebase/performance",x4="@firebase/performance-compat",w4="@firebase/remote-config",E4="@firebase/remote-config-compat",C4="@firebase/storage",T4="@firebase/storage-compat",R4="@firebase/firestore",A4="@firebase/ai",I4="@firebase/firestore-compat",D4="firebase",k4="12.2.0";/**
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
 */const qy="[DEFAULT]",N4={[Fy]:"fire-core",[s4]:"fire-core-compat",[a4]:"fire-analytics",[o4]:"fire-analytics-compat",[c4]:"fire-app-check",[l4]:"fire-app-check-compat",[u4]:"fire-auth",[d4]:"fire-auth-compat",[f4]:"fire-rtdb",[h4]:"fire-data-connect",[p4]:"fire-rtdb-compat",[m4]:"fire-fn",[g4]:"fire-fn-compat",[y4]:"fire-iid",[v4]:"fire-iid-compat",[_4]:"fire-fcm",[b4]:"fire-fcm-compat",[S4]:"fire-perf",[x4]:"fire-perf-compat",[w4]:"fire-rc",[E4]:"fire-rc-compat",[C4]:"fire-gcs",[T4]:"fire-gcs-compat",[R4]:"fire-fst",[I4]:"fire-fst-compat",[A4]:"fire-vertex","fire-js":"fire-js",[D4]:"fire-js-all"};/**
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
 */const qf=new Map,O4=new Map,Vy=new Map;function iw(e,t){try{e.container.addComponent(t)}catch(n){vi.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Mr(e){const t=e.name;if(Vy.has(t))return vi.debug(`There were multiple attempts to register component ${t}.`),!1;Vy.set(t,e);for(const n of qf.values())iw(n,e);for(const n of O4.values())iw(n,e);return!0}function Qa(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function On(e){return e==null?!1:e.settings!==void 0}/**
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
 */const M4={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fs=new Co("app","Firebase",M4);/**
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
 */class L4{constructor(t,n,i){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new _r("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw fs.create("app-deleted",{appName:this._name})}}/**
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
 */const Ka=k4;function mR(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const i={name:qy,automaticDataCollectionEnabled:!0,...t},o=i.name;if(typeof o!="string"||!o)throw fs.create("bad-app-name",{appName:String(o)});if(n||(n=sR()),!n)throw fs.create("no-options");const l=qf.get(o);if(l){if(ho(n,l.options)&&ho(i,l.config))return l;throw fs.create("duplicate-app",{appName:o})}const u=new Hj(o);for(const p of Vy.values())u.addComponent(p);const f=new L4(n,i,u);return qf.set(o,f),f}function n_(e=qy){const t=qf.get(e);if(!t&&e===qy&&sR())return mR();if(!t)throw fs.create("no-app",{appName:e});return t}function Zn(e,t,n){let i=N4[e]??e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),l=t.match(/\s|\//);if(o||l){const u=[`Unable to register library "${i}" with version "${t}":`];o&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&l&&u.push("and"),l&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),vi.warn(u.join(" "));return}Mr(new _r(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const j4="firebase-heartbeat-database",P4=1,Fc="firebase-heartbeat-store";let zg=null;function gR(){return zg||(zg=zh(j4,P4,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Fc)}catch(n){console.warn(n)}}}}).catch(e=>{throw fs.create("idb-open",{originalErrorMessage:e.message})})),zg}async function $4(e){try{const n=(await gR()).transaction(Fc),i=await n.objectStore(Fc).get(yR(e));return await n.done,i}catch(t){if(t instanceof wi)vi.warn(t.message);else{const n=fs.create("idb-get",{originalErrorMessage:t?.message});vi.warn(n.message)}}}async function sw(e,t){try{const i=(await gR()).transaction(Fc,"readwrite");await i.objectStore(Fc).put(t,yR(e)),await i.done}catch(n){if(n instanceof wi)vi.warn(n.message);else{const i=fs.create("idb-set",{originalErrorMessage:n?.message});vi.warn(i.message)}}}function yR(e){return`${e.name}!${e.options.appId}`}/**
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
 */const U4=1024,z4=30;class B4{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new F4(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ow();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats.length>z4){const o=q4(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){vi.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ow(),{heartbeatsToSend:n,unsentEntries:i}=H4(this._heartbeatsCache.heartbeats),o=Bf(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return vi.warn(t),""}}}function ow(){return new Date().toISOString().substring(0,10)}function H4(e,t=U4){const n=[];let i=e.slice();for(const o of e){const l=n.find(u=>u.agent===o.agent);if(l){if(l.dates.push(o.date),aw(n)>t){l.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),aw(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class F4{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return uR()?dR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await $4(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const i=await this.read();return sw(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const i=await this.read();return sw(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function aw(e){return Bf(JSON.stringify({version:2,heartbeats:e})).length}function q4(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let i=1;i<e.length;i++)e[i].date<n&&(n=e[i].date,t=i);return t}/**
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
 */function V4(e){Mr(new _r("platform-logger",t=>new r4(t),"PRIVATE")),Mr(new _r("heartbeat",t=>new B4(t),"PRIVATE")),Zn(Fy,rw,e),Zn(Fy,rw,"esm2020"),Zn("fire-js","")}V4("");const vR="@firebase/installations",r_="0.6.19";/**
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
 */const _R=1e4,bR=`w:${r_}`,SR="FIS_v2",G4="https://firebaseinstallations.googleapis.com/v1",W4=3600*1e3,Y4="installations",Q4="Installations";/**
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
 */const K4={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},po=new Co(Y4,Q4,K4);function xR(e){return e instanceof wi&&e.code.includes("request-failed")}/**
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
 */function wR({projectId:e}){return`${G4}/projects/${e}/installations`}function ER(e){return{token:e.token,requestStatus:2,expiresIn:Z4(e.expiresIn),creationTime:Date.now()}}async function CR(e,t){const i=(await t.json()).error;return po.create("request-failed",{requestName:e,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function TR({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function X4(e,{refreshToken:t}){const n=TR(e);return n.append("Authorization",J4(t)),n}async function RR(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Z4(e){return Number(e.replace("s","000"))}function J4(e){return`${SR} ${e}`}/**
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
 */async function eP({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const i=wR(e),o=TR(e),l=t.getImmediate({optional:!0});if(l){const h=await l.getHeartbeatsHeader();h&&o.append("x-firebase-client",h)}const u={fid:n,authVersion:SR,appId:e.appId,sdkVersion:bR},f={method:"POST",headers:o,body:JSON.stringify(u)},p=await RR(()=>fetch(i,f));if(p.ok){const h=await p.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:ER(h.authToken)}}else throw await CR("Create Installation",p)}/**
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
 */function AR(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function tP(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const nP=/^[cdef][\w-]{21}$/,Gy="";function rP(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=iP(e);return nP.test(n)?n:Gy}catch{return Gy}}function iP(e){return tP(e).substr(0,22)}/**
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
 */function Bh(e){return`${e.appName}!${e.appId}`}/**
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
 */const IR=new Map;function DR(e,t){const n=Bh(e);kR(n,t),sP(n,t)}function kR(e,t){const n=IR.get(e);if(n)for(const i of n)i(t)}function sP(e,t){const n=oP();n&&n.postMessage({key:e,fid:t}),aP()}let oo=null;function oP(){return!oo&&"BroadcastChannel"in self&&(oo=new BroadcastChannel("[Firebase] FID Change"),oo.onmessage=e=>{kR(e.data.key,e.data.fid)}),oo}function aP(){IR.size===0&&oo&&(oo.close(),oo=null)}/**
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
 */const lP="firebase-installations-database",cP=1,mo="firebase-installations-store";let Bg=null;function i_(){return Bg||(Bg=zh(lP,cP,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(mo)}}})),Bg}async function Vf(e,t){const n=Bh(e),o=(await i_()).transaction(mo,"readwrite"),l=o.objectStore(mo),u=await l.get(n);return await l.put(t,n),await o.done,(!u||u.fid!==t.fid)&&DR(e,t.fid),t}async function NR(e){const t=Bh(e),i=(await i_()).transaction(mo,"readwrite");await i.objectStore(mo).delete(t),await i.done}async function Hh(e,t){const n=Bh(e),o=(await i_()).transaction(mo,"readwrite"),l=o.objectStore(mo),u=await l.get(n),f=t(u);return f===void 0?await l.delete(n):await l.put(f,n),await o.done,f&&(!u||u.fid!==f.fid)&&DR(e,f.fid),f}/**
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
 */async function s_(e){let t;const n=await Hh(e.appConfig,i=>{const o=uP(i),l=dP(e,o);return t=l.registrationPromise,l.installationEntry});return n.fid===Gy?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function uP(e){const t=e||{fid:rP(),registrationStatus:0};return OR(t)}function dP(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(po.create("app-offline"));return{installationEntry:t,registrationPromise:o}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=fP(e,n);return{installationEntry:n,registrationPromise:i}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:hP(e)}:{installationEntry:t}}async function fP(e,t){try{const n=await eP(e,t);return Vf(e.appConfig,n)}catch(n){throw xR(n)&&n.customData.serverCode===409?await NR(e.appConfig):await Vf(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function hP(e){let t=await lw(e.appConfig);for(;t.registrationStatus===1;)await AR(100),t=await lw(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await s_(e);return i||n}return t}function lw(e){return Hh(e,t=>{if(!t)throw po.create("installation-not-found");return OR(t)})}function OR(e){return pP(e)?{fid:e.fid,registrationStatus:0}:e}function pP(e){return e.registrationStatus===1&&e.registrationTime+_R<Date.now()}/**
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
 */async function mP({appConfig:e,heartbeatServiceProvider:t},n){const i=gP(e,n),o=X4(e,n),l=t.getImmediate({optional:!0});if(l){const h=await l.getHeartbeatsHeader();h&&o.append("x-firebase-client",h)}const u={installation:{sdkVersion:bR,appId:e.appId}},f={method:"POST",headers:o,body:JSON.stringify(u)},p=await RR(()=>fetch(i,f));if(p.ok){const h=await p.json();return ER(h)}else throw await CR("Generate Auth Token",p)}function gP(e,{fid:t}){return`${wR(e)}/${t}/authTokens:generate`}/**
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
 */async function o_(e,t=!1){let n;const i=await Hh(e.appConfig,l=>{if(!MR(l))throw po.create("not-registered");const u=l.authToken;if(!t&&_P(u))return l;if(u.requestStatus===1)return n=yP(e,t),l;{if(!navigator.onLine)throw po.create("app-offline");const f=SP(l);return n=vP(e,f),f}});return n?await n:i.authToken}async function yP(e,t){let n=await cw(e.appConfig);for(;n.authToken.requestStatus===1;)await AR(100),n=await cw(e.appConfig);const i=n.authToken;return i.requestStatus===0?o_(e,t):i}function cw(e){return Hh(e,t=>{if(!MR(t))throw po.create("not-registered");const n=t.authToken;return xP(n)?{...t,authToken:{requestStatus:0}}:t})}async function vP(e,t){try{const n=await mP(e,t),i={...t,authToken:n};return await Vf(e.appConfig,i),n}catch(n){if(xR(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await NR(e.appConfig);else{const i={...t,authToken:{requestStatus:0}};await Vf(e.appConfig,i)}throw n}}function MR(e){return e!==void 0&&e.registrationStatus===2}function _P(e){return e.requestStatus===2&&!bP(e)}function bP(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+W4}function SP(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}function xP(e){return e.requestStatus===1&&e.requestTime+_R<Date.now()}/**
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
 */async function wP(e){const t=e,{installationEntry:n,registrationPromise:i}=await s_(t);return i?i.catch(console.error):o_(t).catch(console.error),n.fid}/**
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
 */async function EP(e,t=!1){const n=e;return await CP(n),(await o_(n,t)).token}async function CP(e){const{registrationPromise:t}=await s_(e);t&&await t}/**
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
 */function TP(e){if(!e||!e.options)throw Hg("App Configuration");if(!e.name)throw Hg("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Hg(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Hg(e){return po.create("missing-app-config-values",{valueName:e})}/**
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
 */const LR="installations",RP="installations-internal",AP=e=>{const t=e.getProvider("app").getImmediate(),n=TP(t),i=Qa(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},IP=e=>{const t=e.getProvider("app").getImmediate(),n=Qa(t,LR).getImmediate();return{getId:()=>wP(n),getToken:o=>EP(n,o)}};function DP(){Mr(new _r(LR,AP,"PUBLIC")),Mr(new _r(RP,IP,"PRIVATE"))}DP();Zn(vR,r_);Zn(vR,r_,"esm2020");/**
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
 */const kP="/firebase-messaging-sw.js",NP="/firebase-cloud-messaging-push-scope",jR="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",OP="https://fcmregistrations.googleapis.com/v1",PR="google.c.a.c_id",MP="google.c.a.c_l",LP="google.c.a.ts",jP="google.c.a.e",uw=1e4;var dw;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(dw||(dw={}));/**
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
 */function ci(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function PP(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(n),o=new Uint8Array(i.length);for(let l=0;l<i.length;++l)o[l]=i.charCodeAt(l);return o}/**
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
 */const Fg="fcm_token_details_db",$P=5,fw="fcm_token_object_Store";async function UP(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(l=>l.name).includes(Fg))return null;let t=null;return(await zh(Fg,$P,{upgrade:async(i,o,l,u)=>{if(o<2||!i.objectStoreNames.contains(fw))return;const f=u.objectStore(fw),p=await f.index("fcmSenderId").get(e);if(await f.clear(),!!p){if(o===2){const h=p;if(!h.auth||!h.p256dh||!h.endpoint)return;t={token:h.fcmToken,createTime:h.createTime??Date.now(),subscriptionOptions:{auth:h.auth,p256dh:h.p256dh,endpoint:h.endpoint,swScope:h.swScope,vapidKey:typeof h.vapidKey=="string"?h.vapidKey:ci(h.vapidKey)}}}else if(o===3){const h=p;t={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:ci(h.auth),p256dh:ci(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:ci(h.vapidKey)}}}else if(o===4){const h=p;t={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:ci(h.auth),p256dh:ci(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:ci(h.vapidKey)}}}}}})).close(),await $g(Fg),await $g("fcm_vapid_details_db"),await $g("undefined"),zP(t)?t:null}function zP(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
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
 */const BP="firebase-messaging-database",HP=1,Vc="firebase-messaging-store";let qg=null;function $R(){return qg||(qg=zh(BP,HP,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Vc)}}})),qg}async function FP(e){const t=UR(e),i=await(await $R()).transaction(Vc).objectStore(Vc).get(t);if(i)return i;{const o=await UP(e.appConfig.senderId);if(o)return await a_(e,o),o}}async function a_(e,t){const n=UR(e),o=(await $R()).transaction(Vc,"readwrite");return await o.objectStore(Vc).put(t,n),await o.done,t}function UR({appConfig:e}){return e.appId}/**
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
 */const qP={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},on=new Co("messaging","Messaging",qP);/**
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
 */async function VP(e,t){const n=await c_(e),i=zR(t),o={method:"POST",headers:n,body:JSON.stringify(i)};let l;try{l=await(await fetch(l_(e.appConfig),o)).json()}catch(u){throw on.create("token-subscribe-failed",{errorInfo:u?.toString()})}if(l.error){const u=l.error.message;throw on.create("token-subscribe-failed",{errorInfo:u})}if(!l.token)throw on.create("token-subscribe-no-token");return l.token}async function GP(e,t){const n=await c_(e),i=zR(t.subscriptionOptions),o={method:"PATCH",headers:n,body:JSON.stringify(i)};let l;try{l=await(await fetch(`${l_(e.appConfig)}/${t.token}`,o)).json()}catch(u){throw on.create("token-update-failed",{errorInfo:u?.toString()})}if(l.error){const u=l.error.message;throw on.create("token-update-failed",{errorInfo:u})}if(!l.token)throw on.create("token-update-no-token");return l.token}async function WP(e,t){const i={method:"DELETE",headers:await c_(e)};try{const l=await(await fetch(`${l_(e.appConfig)}/${t}`,i)).json();if(l.error){const u=l.error.message;throw on.create("token-unsubscribe-failed",{errorInfo:u})}}catch(o){throw on.create("token-unsubscribe-failed",{errorInfo:o?.toString()})}}function l_({projectId:e}){return`${OP}/projects/${e}/registrations`}async function c_({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function zR({p256dh:e,auth:t,endpoint:n,vapidKey:i}){const o={web:{endpoint:n,auth:t,p256dh:e}};return i!==jR&&(o.web.applicationPubKey=i),o}/**
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
 */const YP=10080*60*1e3;async function QP(e){const t=await XP(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:ci(t.getKey("auth")),p256dh:ci(t.getKey("p256dh"))},i=await FP(e.firebaseDependencies);if(i){if(ZP(i.subscriptionOptions,n))return Date.now()>=i.createTime+YP?KP(e,{token:i.token,createTime:Date.now(),subscriptionOptions:n}):i.token;try{await WP(e.firebaseDependencies,i.token)}catch(o){console.warn(o)}return hw(e.firebaseDependencies,n)}else return hw(e.firebaseDependencies,n)}async function KP(e,t){try{const n=await GP(e.firebaseDependencies,t),i={...t,token:n,createTime:Date.now()};return await a_(e.firebaseDependencies,i),n}catch(n){throw n}}async function hw(e,t){const i={token:await VP(e,t),createTime:Date.now(),subscriptionOptions:t};return await a_(e,i),i.token}async function XP(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:PP(t)})}function ZP(e,t){const n=t.vapidKey===e.vapidKey,i=t.endpoint===e.endpoint,o=t.auth===e.auth,l=t.p256dh===e.p256dh;return n&&i&&o&&l}/**
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
 */function pw(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return JP(t,e),e6(t,e),t6(t,e),t}function JP(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const i=t.notification.body;i&&(e.notification.body=i);const o=t.notification.image;o&&(e.notification.image=o);const l=t.notification.icon;l&&(e.notification.icon=l)}function e6(e,t){t.data&&(e.data=t.data)}function t6(e,t){if(!t.fcmOptions&&!t.notification?.click_action)return;e.fcmOptions={};const n=t.fcmOptions?.link??t.notification?.click_action;n&&(e.fcmOptions.link=n);const i=t.fcmOptions?.analytics_label;i&&(e.fcmOptions.analyticsLabel=i)}/**
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
 */function n6(e){return typeof e=="object"&&!!e&&PR in e}/**
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
 */function r6(e){if(!e||!e.options)throw Vg("App Configuration Object");if(!e.name)throw Vg("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const i of t)if(!n[i])throw Vg(i);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Vg(e){return on.create("missing-app-config-values",{valueName:e})}/**
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
 */class i6{constructor(t,n,i){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=r6(t);this.firebaseDependencies={app:t,appConfig:o,installations:n,analyticsProvider:i}}_delete(){return Promise.resolve()}}/**
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
 */async function s6(e){try{e.swRegistration=await navigator.serviceWorker.register(kP,{scope:NP}),e.swRegistration.update().catch(()=>{}),await o6(e.swRegistration)}catch(t){throw on.create("failed-service-worker-registration",{browserErrorMessage:t?.message})}}async function o6(e){return new Promise((t,n)=>{const i=setTimeout(()=>n(new Error(`Service worker not registered after ${uw} ms`)),uw),o=e.installing||e.waiting;e.active?(clearTimeout(i),t()):o?o.onstatechange=l=>{l.target?.state==="activated"&&(o.onstatechange=null,clearTimeout(i),t())}:(clearTimeout(i),n(new Error("No incoming service worker found.")))})}/**
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
 */async function a6(e,t){if(!t&&!e.swRegistration&&await s6(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw on.create("invalid-sw-registration");e.swRegistration=t}}/**
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
 */async function l6(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=jR)}/**
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
 */async function BR(e,t){if(!navigator)throw on.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw on.create("permission-blocked");return await l6(e,t?.vapidKey),await a6(e,t?.serviceWorkerRegistration),QP(e)}/**
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
 */async function c6(e,t,n){const i=u6(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(i,{message_id:n[PR],message_name:n[MP],message_time:n[LP],message_device_time:Math.floor(Date.now()/1e3)})}function u6(e){switch(e){case qc.NOTIFICATION_CLICKED:return"notification_open";case qc.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function d6(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===qc.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(pw(n)):e.onMessageHandler.next(pw(n)));const i=n.data;n6(i)&&i[jP]==="1"&&await c6(e,n.messageType,i)}const mw="@firebase/messaging",gw="0.12.23";/**
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
 */const f6=e=>{const t=new i6(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>d6(t,n)),t},h6=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:i=>BR(t,i)}};function p6(){Mr(new _r("messaging",f6,"PUBLIC")),Mr(new _r("messaging-internal",h6,"PRIVATE")),Zn(mw,gw),Zn(mw,gw,"esm2020")}/**
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
 */async function m6(){try{await dR()}catch{return!1}return typeof window<"u"&&uR()&&Aj()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function g6(e,t){if(!navigator)throw on.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}/**
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
 */function y6(e=n_()){return m6().then(t=>{if(!t)throw on.create("unsupported-browser")},t=>{throw on.create("indexed-db-unsupported")}),Qa(Gt(e),"messaging").getImmediate()}async function v6(e,t){return e=Gt(e),BR(e,t)}function _6(e,t){return e=Gt(e),g6(e,t)}p6();const Fh=e=>{try{return e()}catch(t){throw t}};var b6="firebase",S6="12.2.1";/**
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
 */Zn(b6,S6,"app");const x6={apiKey:"AIzaSyAMtG6b23AqO2WbJ2ad8SKMXD1X4tfALtc",authDomain:"peloton-alerts.firebaseapp.com",projectId:"peloton-alerts",storageBucket:"peloton-alerts.appspot.com",messagingSenderId:"331185140393",appId:"1:331185140393:web:5f49c5c60b8b162914efb8",measurementId:"G-R2QRE36WEQ",databaseURL:"https://peloton-alerts-default-rtdb.firebaseio.com/"},Ac=Fh(()=>mR(x6)),ba=Fh(()=>y6(Ac)),w6="serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window,HR=async()=>{if(!("serviceWorker"in navigator))throw new Error("Service workers are not supported");return navigator.serviceWorker.register("/peloton-reservations/pr-preview/pr-67/messaging-sw.js",{type:"classic"})};let Gg=HR();const yw=async()=>{if(!ba)throw new Error("Messaging is not set up");if(!w6)throw new Error("Browser environment does not allow messaging");let e;try{e=await Gg,console.log("Registered service worker successfully")}catch(t){console.error("Failed to register service worker. Trying again...",t),Gg=HR(),e=await Gg}return v6(ba,{vapidKey:"BO9hF0_u2BKehXtAWTxtm7RtvIUGIEA5GT_jGycvCfUEW0yZZkLvtRB1Y8R_5KKBEODsLufyDkcBXn9rx5dHY5g",serviceWorkerRegistration:e})};function Zt(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var E6=typeof Symbol=="function"&&Symbol.observable||"@@observable",vw=E6,Wg=()=>Math.random().toString(36).substring(7).split("").join("."),C6={INIT:`@@redux/INIT${Wg()}`,REPLACE:`@@redux/REPLACE${Wg()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Wg()}`},Gf=C6;function bs(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function FR(e,t,n){if(typeof e!="function")throw new Error(Zt(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Zt(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Zt(1));return n(FR)(e,t)}let i=e,o=t,l=new Map,u=l,f=0,p=!1;function h(){u===l&&(u=new Map,l.forEach((T,k)=>{u.set(k,T)}))}function y(){if(p)throw new Error(Zt(3));return o}function _(T){if(typeof T!="function")throw new Error(Zt(4));if(p)throw new Error(Zt(5));let k=!0;h();const M=f++;return u.set(M,T),function(){if(k){if(p)throw new Error(Zt(6));k=!1,h(),u.delete(M),l=null}}}function v(T){if(!bs(T))throw new Error(Zt(7));if(typeof T.type>"u")throw new Error(Zt(8));if(typeof T.type!="string")throw new Error(Zt(17));if(p)throw new Error(Zt(9));try{p=!0,o=i(o,T)}finally{p=!1}return(l=u).forEach(M=>{M()}),T}function S(T){if(typeof T!="function")throw new Error(Zt(10));i=T,v({type:Gf.REPLACE})}function x(){const T=_;return{subscribe(k){if(typeof k!="object"||k===null)throw new Error(Zt(11));function M(){const I=k;I.next&&I.next(y())}return M(),{unsubscribe:T(M)}},[vw](){return this}}}return v({type:Gf.INIT}),{dispatch:v,subscribe:_,getState:y,replaceReducer:S,[vw]:x}}function T6(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:Gf.INIT})>"u")throw new Error(Zt(12));if(typeof n(void 0,{type:Gf.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Zt(13))})}function qR(e){const t=Object.keys(e),n={};for(let l=0;l<t.length;l++){const u=t[l];typeof e[u]=="function"&&(n[u]=e[u])}const i=Object.keys(n);let o;try{T6(n)}catch(l){o=l}return function(u={},f){if(o)throw o;let p=!1;const h={};for(let y=0;y<i.length;y++){const _=i[y],v=n[_],S=u[_],x=v(S,f);if(typeof x>"u")throw f&&f.type,new Error(Zt(14));h[_]=x,p=p||x!==S}return p=p||i.length!==Object.keys(u).length,p?h:u}}function Wf(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...i)=>t(n(...i)))}function R6(...e){return t=>(n,i)=>{const o=t(n,i);let l=()=>{throw new Error(Zt(15))};const u={getState:o.getState,dispatch:(p,...h)=>l(p,...h)},f=e.map(p=>p(u));return l=Wf(...f)(o.dispatch),{...o,dispatch:l}}}function VR(e){return bs(e)&&"type"in e&&typeof e.type=="string"}var u_=Symbol.for("immer-nothing"),Ic=Symbol.for("immer-draftable"),xn=Symbol.for("immer-state");function en(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var ja=Object.getPrototypeOf;function Lr(e){return!!e&&!!e[xn]}function br(e){return e?GR(e)||Array.isArray(e)||!!e[Ic]||!!e.constructor?.[Ic]||Xa(e)||pu(e):!1}var A6=Object.prototype.constructor.toString(),_w=new WeakMap;function GR(e){if(!e||typeof e!="object")return!1;const t=Object.getPrototypeOf(e);if(t===null||t===Object.prototype)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;if(n===Object)return!0;if(typeof n!="function")return!1;let i=_w.get(n);return i===void 0&&(i=Function.toString.call(n),_w.set(n,i)),i===A6}function I6(e){return Lr(e)||en(15,e),e[xn].base_}function Gc(e,t,n=!0){go(e)===0?(n?Reflect.ownKeys(e):Object.keys(e)).forEach(o=>{t(o,e[o],e)}):e.forEach((i,o)=>t(o,i,e))}function go(e){const t=e[xn];return t?t.type_:Array.isArray(e)?1:Xa(e)?2:pu(e)?3:0}function Wc(e,t){return go(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Yg(e,t){return go(e)===2?e.get(t):e[t]}function WR(e,t,n){const i=go(e);i===2?e.set(t,n):i===3?e.add(n):e[t]=n}function D6(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function Xa(e){return e instanceof Map}function pu(e){return e instanceof Set}function no(e){return e.copy_||e.base_}function Wy(e,t){if(Xa(e))return new Map(e);if(pu(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const n=GR(e);if(t===!0||t==="class_only"&&!n){const i=Object.getOwnPropertyDescriptors(e);delete i[xn];let o=Reflect.ownKeys(i);for(let l=0;l<o.length;l++){const u=o[l],f=i[u];f.writable===!1&&(f.writable=!0,f.configurable=!0),(f.get||f.set)&&(i[u]={configurable:!0,writable:!0,enumerable:f.enumerable,value:e[u]})}return Object.create(ja(e),i)}else{const i=ja(e);if(i!==null&&n)return{...e};const o=Object.create(i);return Object.assign(o,e)}}function d_(e,t=!1){return qh(e)||Lr(e)||!br(e)||(go(e)>1&&Object.defineProperties(e,{set:Kd,add:Kd,clear:Kd,delete:Kd}),Object.freeze(e),t&&Object.values(e).forEach(n=>d_(n,!0))),e}function k6(){en(2)}var Kd={value:k6};function qh(e){return e===null||typeof e!="object"?!0:Object.isFrozen(e)}var Yy={};function yo(e){const t=Yy[e];return t||en(0,e),t}function N6(e,t){Yy[e]||(Yy[e]=t)}var Yc;function YR(){return Yc}function O6(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function bw(e,t){t&&(yo("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Qy(e){Ky(e),e.drafts_.forEach(M6),e.drafts_=null}function Ky(e){e===Yc&&(Yc=e.parent_)}function Sw(e){return Yc=O6(Yc,e)}function M6(e){const t=e[xn];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function xw(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return e!==void 0&&e!==n?(n[xn].modified_&&(Qy(t),en(4)),br(e)&&(e=Yf(t,e),t.parent_||Qf(t,e)),t.patches_&&yo("Patches").generateReplacementPatches_(n[xn].base_,e,t.patches_,t.inversePatches_)):e=Yf(t,n,[]),Qy(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==u_?e:void 0}function Yf(e,t,n){if(qh(t))return t;const i=e.immer_.shouldUseStrictIteration(),o=t[xn];if(!o)return Gc(t,(l,u)=>ww(e,o,t,l,u,n),i),t;if(o.scope_!==e)return t;if(!o.modified_)return Qf(e,o.base_,!0),o.base_;if(!o.finalized_){o.finalized_=!0,o.scope_.unfinalizedDrafts_--;const l=o.copy_;let u=l,f=!1;o.type_===3&&(u=new Set(l),l.clear(),f=!0),Gc(u,(p,h)=>ww(e,o,l,p,h,n,f),i),Qf(e,l,!1),n&&e.patches_&&yo("Patches").generatePatches_(o,n,e.patches_,e.inversePatches_)}return o.copy_}function ww(e,t,n,i,o,l,u){if(o==null||typeof o!="object"&&!u)return;const f=qh(o);if(!(f&&!u)){if(Lr(o)){const p=l&&t&&t.type_!==3&&!Wc(t.assigned_,i)?l.concat(i):void 0,h=Yf(e,o,p);if(WR(n,i,h),Lr(h))e.canAutoFreeze_=!1;else return}else u&&n.add(o);if(br(o)&&!f){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1||t&&t.base_&&t.base_[i]===o&&f)return;Yf(e,o),(!t||!t.scope_.parent_)&&typeof i!="symbol"&&(Xa(n)?n.has(i):Object.prototype.propertyIsEnumerable.call(n,i))&&Qf(e,o)}}}function Qf(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&d_(t,n)}function L6(e,t){const n=Array.isArray(e),i={type_:n?1:0,scope_:t?t.scope_:YR(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=i,l=f_;n&&(o=[i],l=Qc);const{revoke:u,proxy:f}=Proxy.revocable(o,l);return i.draft_=f,i.revoke_=u,f}var f_={get(e,t){if(t===xn)return e;const n=no(e);if(!Wc(n,t))return j6(e,n,t);const i=n[t];return e.finalized_||!br(i)?i:i===Qg(e.base_,t)?(Kg(e),e.copy_[t]=Zy(i,e)):i},has(e,t){return t in no(e)},ownKeys(e){return Reflect.ownKeys(no(e))},set(e,t,n){const i=QR(no(e),t);if(i?.set)return i.set.call(e.draft_,n),!0;if(!e.modified_){const o=Qg(no(e),t),l=o?.[xn];if(l&&l.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(D6(n,o)&&(n!==void 0||Wc(e.base_,t)))return!0;Kg(e),Xy(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty(e,t){return Qg(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,Kg(e),Xy(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=no(e),i=Reflect.getOwnPropertyDescriptor(n,t);return i&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:i.enumerable,value:n[t]}},defineProperty(){en(11)},getPrototypeOf(e){return ja(e.base_)},setPrototypeOf(){en(12)}},Qc={};Gc(f_,(e,t)=>{Qc[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});Qc.deleteProperty=function(e,t){return Qc.set.call(this,e,t,void 0)};Qc.set=function(e,t,n){return f_.set.call(this,e[0],t,n,e[0])};function Qg(e,t){const n=e[xn];return(n?no(n):e)[t]}function j6(e,t,n){const i=QR(t,n);return i?"value"in i?i.value:i.get?.call(e.draft_):void 0}function QR(e,t){if(!(t in e))return;let n=ja(e);for(;n;){const i=Object.getOwnPropertyDescriptor(n,t);if(i)return i;n=ja(n)}}function Xy(e){e.modified_||(e.modified_=!0,e.parent_&&Xy(e.parent_))}function Kg(e){e.copy_||(e.copy_=Wy(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var P6=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!0,this.produce=(t,n,i)=>{if(typeof t=="function"&&typeof n!="function"){const l=n;n=t;const u=this;return function(p=l,...h){return u.produce(p,y=>n.call(this,y,...h))}}typeof n!="function"&&en(6),i!==void 0&&typeof i!="function"&&en(7);let o;if(br(t)){const l=Sw(this),u=Zy(t,void 0);let f=!0;try{o=n(u),f=!1}finally{f?Qy(l):Ky(l)}return bw(l,i),xw(o,l)}else if(!t||typeof t!="object"){if(o=n(t),o===void 0&&(o=t),o===u_&&(o=void 0),this.autoFreeze_&&d_(o,!0),i){const l=[],u=[];yo("Patches").generateReplacementPatches_(t,o,l,u),i(l,u)}return o}else en(1,t)},this.produceWithPatches=(t,n)=>{if(typeof t=="function")return(u,...f)=>this.produceWithPatches(u,p=>t(p,...f));let i,o;return[this.produce(t,n,(u,f)=>{i=u,o=f}),i,o]},typeof e?.autoFreeze=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof e?.useStrictShallowCopy=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),typeof e?.useStrictIteration=="boolean"&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){br(e)||en(8),Lr(e)&&(e=$6(e));const t=Sw(this),n=Zy(e,void 0);return n[xn].isManual_=!0,Ky(t),n}finishDraft(e,t){const n=e&&e[xn];(!n||!n.isManual_)&&en(9);const{scope_:i}=n;return bw(i,t),xw(void 0,i)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const o=t[n];if(o.path.length===0&&o.op==="replace"){e=o.value;break}}n>-1&&(t=t.slice(n+1));const i=yo("Patches").applyPatches_;return Lr(e)?i(e,t):this.produce(e,o=>i(o,t))}};function Zy(e,t){const n=Xa(e)?yo("MapSet").proxyMap_(e,t):pu(e)?yo("MapSet").proxySet_(e,t):L6(e,t);return(t?t.scope_:YR()).drafts_.push(n),n}function $6(e){return Lr(e)||en(10,e),KR(e)}function KR(e){if(!br(e)||qh(e))return e;const t=e[xn];let n,i=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=Wy(e,t.scope_.immer_.useStrictShallowCopy_),i=t.scope_.immer_.shouldUseStrictIteration()}else n=Wy(e,!0);return Gc(n,(o,l)=>{WR(n,o,KR(l))},i),t&&(t.finalized_=!1),n}function U6(){const t="replace",i="remove";function o(v,S,x,D){switch(v.type_){case 0:case 2:return u(v,S,x,D);case 1:return l(v,S,x,D);case 3:return f(v,S,x,D)}}function l(v,S,x,D){let{base_:T,assigned_:k}=v,M=v.copy_;M.length<T.length&&([T,M]=[M,T],[x,D]=[D,x]);for(let R=0;R<T.length;R++)if(k[R]&&M[R]!==T[R]){const I=S.concat([R]);x.push({op:t,path:I,value:_(M[R])}),D.push({op:t,path:I,value:_(T[R])})}for(let R=T.length;R<M.length;R++){const I=S.concat([R]);x.push({op:"add",path:I,value:_(M[R])})}for(let R=M.length-1;T.length<=R;--R){const I=S.concat([R]);D.push({op:i,path:I})}}function u(v,S,x,D){const{base_:T,copy_:k}=v;Gc(v.assigned_,(M,R)=>{const I=Yg(T,M),O=Yg(k,M),A=R?Wc(T,M)?t:"add":i;if(I===O&&A===t)return;const j=S.concat(M);x.push(A===i?{op:A,path:j}:{op:A,path:j,value:O}),D.push(A==="add"?{op:i,path:j}:A===i?{op:"add",path:j,value:_(I)}:{op:t,path:j,value:_(I)})})}function f(v,S,x,D){let{base_:T,copy_:k}=v,M=0;T.forEach(R=>{if(!k.has(R)){const I=S.concat([M]);x.push({op:i,path:I,value:R}),D.unshift({op:"add",path:I,value:R})}M++}),M=0,k.forEach(R=>{if(!T.has(R)){const I=S.concat([M]);x.push({op:"add",path:I,value:R}),D.unshift({op:i,path:I,value:R})}M++})}function p(v,S,x,D){x.push({op:t,path:[],value:S===u_?void 0:S}),D.push({op:t,path:[],value:v})}function h(v,S){return S.forEach(x=>{const{path:D,op:T}=x;let k=v;for(let O=0;O<D.length-1;O++){const A=go(k);let j=D[O];typeof j!="string"&&typeof j!="number"&&(j=""+j),(A===0||A===1)&&(j==="__proto__"||j==="constructor")&&en(19),typeof k=="function"&&j==="prototype"&&en(19),k=Yg(k,j),typeof k!="object"&&en(18,D.join("/"))}const M=go(k),R=y(x.value),I=D[D.length-1];switch(T){case t:switch(M){case 2:return k.set(I,R);case 3:en(16);default:return k[I]=R}case"add":switch(M){case 1:return I==="-"?k.push(R):k.splice(I,0,R);case 2:return k.set(I,R);case 3:return k.add(R);default:return k[I]=R}case i:switch(M){case 1:return k.splice(I,1);case 2:return k.delete(I);case 3:return k.delete(x.value);default:return delete k[I]}default:en(17,T)}}),v}function y(v){if(!br(v))return v;if(Array.isArray(v))return v.map(y);if(Xa(v))return new Map(Array.from(v.entries()).map(([x,D])=>[x,y(D)]));if(pu(v))return new Set(Array.from(v).map(y));const S=Object.create(ja(v));for(const x in v)S[x]=y(v[x]);return Wc(v,Ic)&&(S[Ic]=v[Ic]),S}function _(v){return Lr(v)?y(v):v}N6("Patches",{applyPatches_:h,generatePatches_:o,generateReplacementPatches_:p})}var Kc=new P6,mu=Kc.produce,XR=Kc.produceWithPatches.bind(Kc),Ew=Kc.applyPatches.bind(Kc);function z6(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(t)}function B6(e,t=`expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(t)}function H6(e,t="expected all items to be functions, instead received the following types: "){if(!e.every(n=>typeof n=="function")){const n=e.map(i=>typeof i=="function"?`function ${i.name||"unnamed"}()`:typeof i).join(", ");throw new TypeError(`${t}[${n}]`)}}var Cw=e=>Array.isArray(e)?e:[e];function F6(e){const t=Array.isArray(e[0])?e[0]:e;return H6(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}function q6(e,t){const n=[],{length:i}=e;for(let o=0;o<i;o++)n.push(e[o].apply(null,t));return n}var V6=class{constructor(e){this.value=e}deref(){return this.value}},G6=typeof WeakRef<"u"?WeakRef:V6,W6=0,Tw=1;function Xd(){return{s:W6,v:void 0,o:null,p:null}}function Kf(e,t={}){let n=Xd();const{resultEqualityCheck:i}=t;let o,l=0;function u(){let f=n;const{length:p}=arguments;for(let _=0,v=p;_<v;_++){const S=arguments[_];if(typeof S=="function"||typeof S=="object"&&S!==null){let x=f.o;x===null&&(f.o=x=new WeakMap);const D=x.get(S);D===void 0?(f=Xd(),x.set(S,f)):f=D}else{let x=f.p;x===null&&(f.p=x=new Map);const D=x.get(S);D===void 0?(f=Xd(),x.set(S,f)):f=D}}const h=f;let y;if(f.s===Tw)y=f.v;else if(y=e.apply(null,arguments),l++,i){const _=o?.deref?.()??o;_!=null&&i(_,y)&&(y=_,l!==0&&l--),o=typeof y=="object"&&y!==null||typeof y=="function"?new G6(y):y}return h.s=Tw,h.v=y,y}return u.clearCache=()=>{n=Xd(),u.resetResultsCount()},u.resultsCount=()=>l,u.resetResultsCount=()=>{l=0},u}function Y6(e,...t){const n=typeof e=="function"?{memoize:e,memoizeOptions:t}:e,i=(...o)=>{let l=0,u=0,f,p={},h=o.pop();typeof h=="object"&&(p=h,h=o.pop()),z6(h,`createSelector expects an output function after the inputs, but received: [${typeof h}]`);const y={...n,...p},{memoize:_,memoizeOptions:v=[],argsMemoize:S=Kf,argsMemoizeOptions:x=[]}=y,D=Cw(v),T=Cw(x),k=F6(o),M=_(function(){return l++,h.apply(null,arguments)},...D),R=S(function(){u++;const O=q6(k,arguments);return f=M.apply(null,O),f},...T);return Object.assign(R,{resultFunc:h,memoizedResultFunc:M,dependencies:k,dependencyRecomputations:()=>u,resetDependencyRecomputations:()=>{u=0},lastResult:()=>f,recomputations:()=>l,resetRecomputations:()=>{l=0},memoize:_,argsMemoize:S})};return Object.assign(i,{withTypes:()=>i}),i}var Ei=Y6(Kf),Q6=Object.assign((e,t=Ei)=>{B6(e,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);const n=Object.keys(e),i=n.map(l=>e[l]);return t(i,(...l)=>l.reduce((u,f,p)=>(u[n[p]]=f,u),{}))},{withTypes:()=>Q6});function ZR(e){return({dispatch:n,getState:i})=>o=>l=>typeof l=="function"?l(n,i,e):o(l)}var K6=ZR(),X6=ZR,Z6=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Wf:Wf.apply(null,arguments)},J6=e=>e&&typeof e.match=="function";function mr(e,t){function n(...i){if(t){let o=t(...i);if(!o)throw new Error(gr(0));return{type:e,payload:o.payload,..."meta"in o&&{meta:o.meta},..."error"in o&&{error:o.error}}}return{type:e,payload:i[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=i=>VR(i)&&i.type===e,n}var JR=class Sc extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,Sc.prototype)}static get[Symbol.species](){return Sc}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new Sc(...t[0].concat(this)):new Sc(...t.concat(this))}};function Rw(e){return br(e)?mu(e,()=>{}):e}function Zd(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function e$(e){return typeof e=="boolean"}var t$=()=>function(t){const{thunk:n=!0,immutableCheck:i=!0,serializableCheck:o=!0,actionCreatorCheck:l=!0}=t??{};let u=new JR;return n&&(e$(n)?u.push(K6):u.push(X6(n.extraArgument))),u},Vh="RTK_autoBatch",ic=()=>e=>({payload:e,meta:{[Vh]:!0}}),Aw=e=>t=>{setTimeout(t,e)},n$=(e={type:"raf"})=>t=>(...n)=>{const i=t(...n);let o=!0,l=!1,u=!1;const f=new Set,p=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Aw(10):e.type==="callback"?e.queueNotification:Aw(e.timeout),h=()=>{u=!1,l&&(l=!1,f.forEach(y=>y()))};return Object.assign({},i,{subscribe(y){const _=()=>o&&y(),v=i.subscribe(_);return f.add(y),()=>{v(),f.delete(y)}},dispatch(y){try{return o=!y?.meta?.[Vh],l=!o,l&&(u||(u=!0,p(h))),i.dispatch(y)}finally{o=!0}}})},r$=e=>function(n){const{autoBatch:i=!0}=n??{};let o=new JR(e);return i&&o.push(n$(typeof i=="object"?i:void 0)),o};function i$(e){const t=t$(),{reducer:n=void 0,middleware:i,devTools:o=!0,preloadedState:l=void 0,enhancers:u=void 0}=e||{};let f;if(typeof n=="function")f=n;else if(bs(n))f=qR(n);else throw new Error(gr(1));let p;typeof i=="function"?p=i(t):p=t();let h=Wf;o&&(h=Z6({trace:!1,...typeof o=="object"&&o}));const y=R6(...p),_=r$(y);let v=typeof u=="function"?u(_):_();const S=h(...v);return FR(f,l,S)}function eA(e){const t={},n=[];let i;const o={addCase(l,u){const f=typeof l=="string"?l:l.type;if(!f)throw new Error(gr(28));if(f in t)throw new Error(gr(29));return t[f]=u,o},addAsyncThunk(l,u){return u.pending&&(t[l.pending.type]=u.pending),u.rejected&&(t[l.rejected.type]=u.rejected),u.fulfilled&&(t[l.fulfilled.type]=u.fulfilled),u.settled&&n.push({matcher:l.settled,reducer:u.settled}),o},addMatcher(l,u){return n.push({matcher:l,reducer:u}),o},addDefaultCase(l){return i=l,o}};return e(o),[t,n,i]}function s$(e){return typeof e=="function"}function o$(e,t){let[n,i,o]=eA(t),l;if(s$(e))l=()=>Rw(e());else{const f=Rw(e);l=()=>f}function u(f=l(),p){let h=[n[p.type],...i.filter(({matcher:y})=>y(p)).map(({reducer:y})=>y)];return h.filter(y=>!!y).length===0&&(h=[o]),h.reduce((y,_)=>{if(_)if(Lr(y)){const S=_(y,p);return S===void 0?y:S}else{if(br(y))return mu(y,v=>_(v,p));{const v=_(y,p);if(v===void 0){if(y===null)return y;throw Error("A case reducer on a non-draftable value must not return undefined")}return v}}return y},f)}return u.getInitialState=l,u}var tA=(e,t)=>J6(e)?e.match(t):e(t);function _i(...e){return t=>e.some(n=>tA(n,t))}function Dc(...e){return t=>e.every(n=>tA(n,t))}function Gh(e,t){if(!e||!e.meta)return!1;const n=typeof e.meta.requestId=="string",i=t.indexOf(e.meta.requestStatus)>-1;return n&&i}function gu(e){return typeof e[0]=="function"&&"pending"in e[0]&&"fulfilled"in e[0]&&"rejected"in e[0]}function h_(...e){return e.length===0?t=>Gh(t,["pending"]):gu(e)?_i(...e.map(t=>t.pending)):h_()(e[0])}function Pa(...e){return e.length===0?t=>Gh(t,["rejected"]):gu(e)?_i(...e.map(t=>t.rejected)):Pa()(e[0])}function Wh(...e){const t=n=>n&&n.meta&&n.meta.rejectedWithValue;return e.length===0?Dc(Pa(...e),t):gu(e)?Dc(Pa(...e),t):Wh()(e[0])}function Ss(...e){return e.length===0?t=>Gh(t,["fulfilled"]):gu(e)?_i(...e.map(t=>t.fulfilled)):Ss()(e[0])}function Jy(...e){return e.length===0?t=>Gh(t,["pending","fulfilled","rejected"]):gu(e)?_i(...e.flatMap(t=>[t.pending,t.rejected,t.fulfilled])):Jy()(e[0])}var a$="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",p_=(e=21)=>{let t="",n=e;for(;n--;)t+=a$[Math.random()*64|0];return t},l$=["name","message","stack","code"],Xg=class{constructor(e,t){this.payload=e,this.meta=t}_type},Iw=class{constructor(e,t){this.payload=e,this.meta=t}_type},c$=e=>{if(typeof e=="object"&&e!==null){const t={};for(const n of l$)typeof e[n]=="string"&&(t[n]=e[n]);return t}return{message:String(e)}},Dw="External signal was aborted",kw=(()=>{function e(t,n,i){const o=mr(t+"/fulfilled",(p,h,y,_)=>({payload:p,meta:{..._||{},arg:y,requestId:h,requestStatus:"fulfilled"}})),l=mr(t+"/pending",(p,h,y)=>({payload:void 0,meta:{...y||{},arg:h,requestId:p,requestStatus:"pending"}})),u=mr(t+"/rejected",(p,h,y,_,v)=>({payload:_,error:(i&&i.serializeError||c$)(p||"Rejected"),meta:{...v||{},arg:y,requestId:h,rejectedWithValue:!!_,requestStatus:"rejected",aborted:p?.name==="AbortError",condition:p?.name==="ConditionError"}}));function f(p,{signal:h}={}){return(y,_,v)=>{const S=i?.idGenerator?i.idGenerator(p):p_(),x=new AbortController;let D,T;function k(R){T=R,x.abort()}h&&(h.aborted?k(Dw):h.addEventListener("abort",()=>k(Dw),{once:!0}));const M=(async function(){let R;try{let O=i?.condition?.(p,{getState:_,extra:v});if(d$(O)&&(O=await O),O===!1||x.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const A=new Promise((j,U)=>{D=()=>{U({name:"AbortError",message:T||"Aborted"})},x.signal.addEventListener("abort",D)});y(l(S,p,i?.getPendingMeta?.({requestId:S,arg:p},{getState:_,extra:v}))),R=await Promise.race([A,Promise.resolve(n(p,{dispatch:y,getState:_,extra:v,requestId:S,signal:x.signal,abort:k,rejectWithValue:(j,U)=>new Xg(j,U),fulfillWithValue:(j,U)=>new Iw(j,U)})).then(j=>{if(j instanceof Xg)throw j;return j instanceof Iw?o(j.payload,S,p,j.meta):o(j,S,p)})])}catch(O){R=O instanceof Xg?u(null,S,p,O.payload,O.meta):u(O,S,p)}finally{D&&x.signal.removeEventListener("abort",D)}return i&&!i.dispatchConditionRejection&&u.match(R)&&R.meta.condition||y(R),R})();return Object.assign(M,{abort:k,requestId:S,arg:p,unwrap(){return M.then(u$)}})}}return Object.assign(f,{pending:l,rejected:u,fulfilled:o,settled:_i(u,o),typePrefix:t})}return e.withTypes=()=>e,e})();function u$(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function d$(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var f$=Symbol.for("rtk-slice-createasyncthunk");function h$(e,t){return`${e}/${t}`}function p$({creators:e}={}){const t=e?.asyncThunk?.[f$];return function(i){const{name:o,reducerPath:l=o}=i;if(!o)throw new Error(gr(11));const u=(typeof i.reducers=="function"?i.reducers(g$()):i.reducers)||{},f=Object.keys(u),p={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},h={addCase(R,I){const O=typeof R=="string"?R:R.type;if(!O)throw new Error(gr(12));if(O in p.sliceCaseReducersByType)throw new Error(gr(13));return p.sliceCaseReducersByType[O]=I,h},addMatcher(R,I){return p.sliceMatchers.push({matcher:R,reducer:I}),h},exposeAction(R,I){return p.actionCreators[R]=I,h},exposeCaseReducer(R,I){return p.sliceCaseReducersByName[R]=I,h}};f.forEach(R=>{const I=u[R],O={reducerName:R,type:h$(o,R),createNotation:typeof i.reducers=="function"};v$(I)?b$(O,I,h,t):y$(O,I,h)});function y(){const[R={},I=[],O=void 0]=typeof i.extraReducers=="function"?eA(i.extraReducers):[i.extraReducers],A={...R,...p.sliceCaseReducersByType};return o$(i.initialState,j=>{for(let U in A)j.addCase(U,A[U]);for(let U of p.sliceMatchers)j.addMatcher(U.matcher,U.reducer);for(let U of I)j.addMatcher(U.matcher,U.reducer);O&&j.addDefaultCase(O)})}const _=R=>R,v=new Map,S=new WeakMap;let x;function D(R,I){return x||(x=y()),x(R,I)}function T(){return x||(x=y()),x.getInitialState()}function k(R,I=!1){function O(j){let U=j[R];return typeof U>"u"&&I&&(U=Zd(S,O,T)),U}function A(j=_){const U=Zd(v,I,()=>new WeakMap);return Zd(U,j,()=>{const F={};for(const[H,z]of Object.entries(i.selectors??{}))F[H]=m$(z,j,()=>Zd(S,j,T),I);return F})}return{reducerPath:R,getSelectors:A,get selectors(){return A(O)},selectSlice:O}}const M={name:o,reducer:D,actions:p.actionCreators,caseReducers:p.sliceCaseReducersByName,getInitialState:T,...k(l),injectInto(R,{reducerPath:I,...O}={}){const A=I??l;return R.inject({reducerPath:A,reducer:D},O),{...M,...k(A,!0)}}};return M}}function m$(e,t,n,i){function o(l,...u){let f=t(l);return typeof f>"u"&&i&&(f=n()),e(f,...u)}return o.unwrapped=e,o}var Kn=p$();function g$(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function y$({type:e,reducerName:t,createNotation:n},i,o){let l,u;if("reducer"in i){if(n&&!_$(i))throw new Error(gr(17));l=i.reducer,u=i.prepare}else l=i;o.addCase(e,l).exposeCaseReducer(t,l).exposeAction(t,u?mr(e,u):mr(e))}function v$(e){return e._reducerDefinitionType==="asyncThunk"}function _$(e){return e._reducerDefinitionType==="reducerWithPrepare"}function b$({type:e,reducerName:t},n,i,o){if(!o)throw new Error(gr(18));const{payloadCreator:l,fulfilled:u,pending:f,rejected:p,settled:h,options:y}=n,_=o(e,l,y);i.exposeAction(t,_),u&&i.addCase(_.fulfilled,u),f&&i.addCase(_.pending,f),p&&i.addCase(_.rejected,p),h&&i.addMatcher(_.settled,h),i.exposeCaseReducer(t,{fulfilled:u||Jd,pending:f||Jd,rejected:p||Jd,settled:h||Jd})}function Jd(){}function gr(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const Za=e=>e.session,yu=Ei([Za],e=>{if(e.state==="fulfilled")return e.data?.id}),ir=KC,Je=XC,vu=E.createContext({refreshToken:()=>{},deleteToken:()=>Promise.reject("Not implemented")});var Nw={};const Ow="@firebase/database",Mw="1.1.0";/**
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
 */let nA="";function S$(e){nA=e}/**
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
 */class x${constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,n){n==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),$t(n))}get(t){const n=this.domStorage_.getItem(this.prefixedName_(t));return n==null?null:Hc(n)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
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
 */class w${constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,n){n==null?delete this.cache_[t]:this.cache_[t]=n}get(t){return Pr(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
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
 */const rA=function(e){try{if(typeof window<"u"&&typeof window[e]<"u"){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new x$(t)}}catch{}return new w$},ao=rA("localStorage"),E$=rA("sessionStorage");/**
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
 */const Ea=new e_("@firebase/database"),C$=(function(){let e=1;return function(){return e++}})(),iA=function(e){const t=$j(e),n=new Mj;n.update(t);const i=n.digest();return Xv.encodeByteArray(i)},_u=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?t+=_u.apply(null,i):typeof i=="object"?t+=$t(i):t+=i,t+=" "}return t};let kc=null,Lw=!0;const T$=function(e,t){he(!0,"Can't turn on custom loggers persistently."),Ea.logLevel=lt.VERBOSE,kc=Ea.log.bind(Ea)},Jt=function(...e){if(Lw===!0&&(Lw=!1,kc===null&&E$.get("logging_enabled")===!0&&T$()),kc){const t=_u.apply(null,e);kc(t)}},bu=function(e){return function(...t){Jt(e,...t)}},ev=function(...e){const t="FIREBASE INTERNAL ERROR: "+_u(...e);Ea.error(t)},bi=function(...e){const t=`FIREBASE FATAL ERROR: ${_u(...e)}`;throw Ea.error(t),new Error(t)},dn=function(...e){const t="FIREBASE WARNING: "+_u(...e);Ea.warn(t)},R$=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&dn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},m_=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},A$=function(e){if(document.readyState==="complete")e();else{let t=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},$a="[MIN_NAME]",vo="[MAX_NAME]",To=function(e,t){if(e===t)return 0;if(e===$a||t===vo)return-1;if(t===$a||e===vo)return 1;{const n=jw(e),i=jw(t);return n!==null?i!==null?n-i===0?e.length-t.length:n-i:-1:i!==null?1:e<t?-1:1}},I$=function(e,t){return e===t?0:e<t?-1:1},sc=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+$t(t))},g_=function(e){if(typeof e!="object"||e===null)return $t(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)i!==0&&(n+=","),n+=$t(t[i]),n+=":",n+=g_(e[t[i]]);return n+="}",n},sA=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let o=0;o<n;o+=t)o+t>n?i.push(e.substring(o,n)):i.push(e.substring(o,o+t));return i};function nn(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const oA=function(e){he(!m_(e),"Invalid JSON number");const t=11,n=52,i=(1<<t-1)-1;let o,l,u,f,p;e===0?(l=0,u=0,o=1/e===-1/0?1:0):(o=e<0,e=Math.abs(e),e>=Math.pow(2,1-i)?(f=Math.min(Math.floor(Math.log(e)/Math.LN2),i),l=f+i,u=Math.round(e*Math.pow(2,n-f)-Math.pow(2,n))):(l=0,u=Math.round(e/Math.pow(2,1-i-n))));const h=[];for(p=n;p;p-=1)h.push(u%2?1:0),u=Math.floor(u/2);for(p=t;p;p-=1)h.push(l%2?1:0),l=Math.floor(l/2);h.push(o?1:0),h.reverse();const y=h.join("");let _="";for(p=0;p<64;p+=8){let v=parseInt(y.substr(p,8),2).toString(16);v.length===1&&(v="0"+v),_=_+v}return _.toLowerCase()},D$=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},k$=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function N$(e,t){let n="Unknown Error";e==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":e==="permission_denied"?n="Client doesn't have permission to access the desired data.":e==="unavailable"&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}const O$=new RegExp("^-?(0*)\\d{1,10}$"),M$=-2147483648,L$=2147483647,jw=function(e){if(O$.test(e)){const t=Number(e);if(t>=M$&&t<=L$)return t}return null},Ja=function(e){try{e()}catch(t){setTimeout(()=>{const n=t.stack||"";throw dn("Exception was thrown by user callback.",n),t},Math.floor(0))}},j$=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Nc=function(e,t){const n=setTimeout(e,t);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class P${constructor(t,n){this.appCheckProvider=n,this.appName=t.name,On(t)&&t.settings.appCheckToken&&(this.serverAppAppCheckToken=t.settings.appCheckToken),this.appCheck=n?.getImmediate({optional:!0}),this.appCheck||n?.get().then(i=>this.appCheck=i)}getToken(t){if(this.serverAppAppCheckToken){if(t)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(t):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(n,i):n(null)},0)})}addTokenChangeListener(t){this.appCheckProvider?.get().then(n=>n.addTokenListener(t))}notifyForInvalidToken(){dn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class $${constructor(t,n,i){this.appName_=t,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(o=>this.auth_=o)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(n=>n&&n.code==="auth/token-not-initialized"?(Jt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(n,i):n(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(n=>n.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(n=>n.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',dn(t)}}class Cf{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}Cf.OWNER="owner";/**
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
 */const y_="5",aA="v",lA="s",cA="r",uA="f",dA=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,fA="ls",hA="p",tv="ac",pA="websocket",mA="long_polling";/**
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
 */class gA{constructor(t,n,i,o,l=!1,u="",f=!1,p=!1,h=null){this.secure=n,this.namespace=i,this.webSocketOnly=o,this.nodeAdmin=l,this.persistenceKey=u,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=p,this.emulatorOptions=h,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ao.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&ao.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${n}`}}function U$(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function yA(e,t,n){he(typeof t=="string","typeof type must == string"),he(typeof n=="object","typeof params must == object");let i;if(t===pA)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===mA)i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);U$(e)&&(n.ns=e.namespace);const o=[];return nn(n,(l,u)=>{o.push(l+"="+u)}),i+o.join("&")}/**
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
 */class z${constructor(){this.counters_={}}incrementCounter(t,n=1){Pr(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=n}get(){return pj(this.counters_)}}/**
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
 */const Zg={},Jg={};function v_(e){const t=e.toString();return Zg[t]||(Zg[t]=new z$),Zg[t]}function B$(e,t){const n=e.toString();return Jg[n]||(Jg[n]=t()),Jg[n]}/**
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
 */class H${constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,n){this.closeAfterResponse=t,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,n){for(this.pendingResponses[t]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<i.length;++o)i[o]&&Ja(()=>{this.onMessage_(i[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Pw="start",F$="close",q$="pLPCommand",V$="pRTLPCB",vA="id",_A="pw",bA="ser",G$="cb",W$="seg",Y$="ts",Q$="d",K$="dframe",SA=1870,xA=30,X$=SA-xA,Z$=25e3,J$=3e4;class Sa{constructor(t,n,i,o,l,u,f){this.connId=t,this.repoInfo=n,this.applicationId=i,this.appCheckToken=o,this.authToken=l,this.transportSessionId=u,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=bu(t),this.stats_=v_(n),this.urlFn=p=>(this.appCheckToken&&(p[tv]=this.appCheckToken),yA(n,mA,p))}open(t,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new H$(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(J$)),A$(()=>{if(this.isClosed_)return;this.scriptTagHolder=new __((...l)=>{const[u,f,p,h,y]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===Pw)this.id=f,this.password=p;else if(u===F$)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...l)=>{const[u,f]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(u,f)},()=>{this.onClosed_()},this.urlFn);const i={};i[Pw]="t",i[bA]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[G$]=this.scriptTagHolder.uniqueCallbackIdentifier),i[aA]=y_,this.transportSessionId&&(i[lA]=this.transportSessionId),this.lastSessionId&&(i[fA]=this.lastSessionId),this.applicationId&&(i[hA]=this.applicationId),this.appCheckToken&&(i[tv]=this.appCheckToken),typeof location<"u"&&location.hostname&&dA.test(location.hostname)&&(i[cA]=uA);const o=this.urlFn(i);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Sa.forceAllow_=!0}static forceDisallow(){Sa.forceDisallow_=!0}static isAvailable(){return Sa.forceAllow_?!0:!Sa.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!D$()&&!k$()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const n=$t(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=nR(n),o=sA(i,X$);for(let l=0;l<o.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[l]),this.curSegmentNum++}addDisconnectPingFrame(t,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[K$]="t",i[vA]=t,i[_A]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const n=$t(t).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class __{constructor(t,n,i,o){this.onDisconnect=i,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=C$(),window[q$+this.uniqueCallbackIdentifier]=t,window[V$+this.uniqueCallbackIdentifier]=n,this.myIFrame=__.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(f){Jt("frame writing exception"),f.stack&&Jt(f.stack),Jt(f)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||Jt("No IE domain setting required")}catch{const i=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,n){for(this.myID=t,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[vA]=this.myID,t[_A]=this.myPW,t[bA]=this.currentSerial;let n=this.urlFn(t),i="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+xA+i.length<=SA;){const u=this.pendingSegs.shift();i=i+"&"+W$+o+"="+u.seg+"&"+Y$+o+"="+u.ts+"&"+Q$+o+"="+u.d,o++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(t,n,i){this.pendingSegs.push({seg:t,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(t,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},o=setTimeout(i,Math.floor(Z$)),l=()=>{clearTimeout(o),i()};this.addTag(t,l)}addTag(t,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=t,i.onload=i.onreadystatechange=function(){const o=i.readyState;(!o||o==="loaded"||o==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Jt("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const e3=16384,t3=45e3;let Xf=null;typeof MozWebSocket<"u"?Xf=MozWebSocket:typeof WebSocket<"u"&&(Xf=WebSocket);class ur{constructor(t,n,i,o,l,u,f){this.connId=t,this.applicationId=i,this.appCheckToken=o,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=bu(this.connId),this.stats_=v_(n),this.connURL=ur.connectionURL_(n,u,f,o,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(t,n,i,o,l){const u={};return u[aA]=y_,typeof location<"u"&&location.hostname&&dA.test(location.hostname)&&(u[cA]=uA),n&&(u[lA]=n),i&&(u[fA]=i),o&&(u[tv]=o),l&&(u[hA]=l),yA(t,pA,u)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ao.set("previous_websocket_failure",!0);try{let i;Rj(),this.mySock=new Xf(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const o=i.message||i.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const o=i.message||i.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){ur.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(t=!0)}return!t&&Xf!==null&&!ur.forceDisallow_}static previouslyFailed(){return ao.isInMemoryStorage||ao.get("previous_websocket_failure")===!0}markConnectionHealthy(){ao.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Hc(n);this.onMessage(i)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(he(this.frames===null,"We already have a frame buffer"),t.length<=6){const n=Number(t);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const n=t.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(t){this.resetKeepAlive();const n=$t(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=sA(n,e3);i.length>1&&this.sendString_(String(i.length));for(let o=0;o<i.length;o++)this.sendString_(i[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(t3))}sendString_(t){try{this.mySock.send(t)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ur.responsesRequiredToBeHealthy=2;ur.healthyTimeout=3e4;/**
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
 */const n3=6e4,r3=5e3,i3=10*1024,s3=100*1024,ey="t",$w="d",o3="s",Uw="r",a3="e",zw="o",Bw="a",Hw="n",Fw="p",l3="h";class c3{constructor(t,n,i,o,l,u,f,p,h,y){this.id=t,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=o,this.authToken_=l,this.onMessage_=u,this.onReady_=f,this.onDisconnect_=p,this.onKill_=h,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=bu("c:"+this.id+":"),this.transportManager_=new Xc(n),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const o=t.healthyTimeout||0;o>0&&(this.healthyTimeout_=Nc(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>s3?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>i3?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return n=>{t===this.conn_?this.onConnectionLost_(n):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return n=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(n):t===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(t){const n={t:"d",d:t};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(ey in t){const n=t[ey];n===Bw?this.upgradeIfSecondaryHealthy_():n===Uw?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===zw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const n=sc("t",t),i=sc("d",t);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Fw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Bw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Hw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const n=sc("t",t),i=sc("d",t);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const n=sc(ey,t);if($w in t){const i=t[$w];if(n===l3){const o={...i};this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(n===Hw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===o3?this.onConnectionShutdown_(i):n===Uw?this.onReset_(i):n===a3?ev("Server Error: "+i):n===zw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ev("Unknown control packet command: "+n)}}onHandshake_(t){const n=t.ts,i=t.v,o=t.h;this.sessionId=t.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),y_!==i&&dn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Nc(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(n3))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,n){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Nc(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(r3))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Fw,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ao.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class wA{put(t,n,i,o){}merge(t,n,i,o){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,n,i){}onDisconnectMerge(t,n,i){}onDisconnectCancel(t,n){}reportStats(t){}}/**
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
 */class EA{constructor(t){this.allowedEvents_=t,this.listeners_={},he(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...n){if(Array.isArray(this.listeners_[t])){const i=[...this.listeners_[t]];for(let o=0;o<i.length;o++)i[o].callback.apply(i[o].context,n)}}on(t,n,i){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:n,context:i});const o=this.getInitialEvent(t);o&&n.apply(i,o)}off(t,n,i){this.validateEventType_(t);const o=this.listeners_[t]||[];for(let l=0;l<o.length;l++)if(o[l].callback===n&&(!i||i===o[l].context)){o.splice(l,1);return}}validateEventType_(t){he(this.allowedEvents_.find(n=>n===t),"Unknown event: "+t)}}/**
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
 */class Zf extends EA{static getInstance(){return new Zf}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Jv()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(t){return he(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const qw=32,Vw=768;class ct{constructor(t,n){if(n===void 0){this.pieces_=t.split("/");let i=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[i]=this.pieces_[o],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=n}toString(){let t="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(t+="/"+this.pieces_[n]);return t||"/"}}function Ke(){return new ct("")}function Fe(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function xs(e){return e.pieces_.length-e.pieceNum_}function ht(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ct(e.pieces_,t)}function b_(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function u3(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)e.pieces_[n]!==""&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function Zc(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function CA(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ct(t,0)}function Rt(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof ct)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const i=t.split("/");for(let o=0;o<i.length;o++)i[o].length>0&&n.push(i[o])}return new ct(n,0)}function We(e){return e.pieceNum_>=e.pieces_.length}function un(e,t){const n=Fe(e),i=Fe(t);if(n===null)return t;if(n===i)return un(ht(e),ht(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function d3(e,t){const n=Zc(e,0),i=Zc(t,0);for(let o=0;o<n.length&&o<i.length;o++){const l=To(n[o],i[o]);if(l!==0)return l}return n.length===i.length?0:n.length<i.length?-1:1}function S_(e,t){if(xs(e)!==xs(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Xn(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(xs(e)>xs(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class f3{constructor(t,n){this.errorPrefix_=n,this.parts_=Zc(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Uh(this.parts_[i]);TA(this)}}function h3(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Uh(t),TA(e)}function p3(e){const t=e.parts_.pop();e.byteLength_-=Uh(t),e.parts_.length>0&&(e.byteLength_-=1)}function TA(e){if(e.byteLength_>Vw)throw new Error(e.errorPrefix_+"has a key path longer than "+Vw+" bytes ("+e.byteLength_+").");if(e.parts_.length>qw)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+qw+") or object contains a cycle "+ro(e))}function ro(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
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
 */class x_ extends EA{static getInstance(){return new x_}constructor(){super(["visible"]);let t,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[t];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(t){return he(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
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
 */const oc=1e3,m3=300*1e3,Gw=30*1e3,g3=1.3,y3=3e4,v3="server_kill",Ww=3;class gi extends wA{constructor(t,n,i,o,l,u,f,p){if(super(),this.repoInfo_=t,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=o,this.onServerInfoUpdate_=l,this.authTokenProvider_=u,this.appCheckTokenProvider_=f,this.authOverride_=p,this.id=gi.nextPersistentConnectionId_++,this.log_=bu("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=oc,this.maxReconnectDelay_=m3,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");x_.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&Zf.getInstance().on("online",this.onOnline_,this)}sendRequest(t,n,i){const o=++this.requestNumber_,l={r:o,a:t,b:n};this.log_($t(l)),he(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),i&&(this.requestCBHash_[o]=i)}get(t){this.initConnection_();const n=new hu,o={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:u=>{const f=u.d;u.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),n.promise}listen(t,n,i,o){this.initConnection_();const l=t._queryIdentifier,u=t._path.toString();this.log_("Listen called for "+u+" "+l),this.listens.has(u)||this.listens.set(u,new Map),he(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),he(!this.listens.get(u).has(l),"listen() called twice for same path/queryId.");const f={onComplete:o,hashFn:n,query:t,tag:i};this.listens.get(u).set(l,f),this.connected_&&this.sendListen_(f)}sendGet_(t){const n=this.outstandingGets_[t];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(t){const n=t.query,i=n._path.toString(),o=n._queryIdentifier;this.log_("Listen on "+i+" for "+o);const l={p:i},u="q";t.tag&&(l.q=n._queryObject,l.t=t.tag),l.h=t.hashFn(),this.sendRequest(u,l,f=>{const p=f.d,h=f.s;gi.warnOnListenWarnings_(p,n),(this.listens.get(i)&&this.listens.get(i).get(o))===t&&(this.log_("listen response",f),h!=="ok"&&this.removeListen_(i,o),t.onComplete&&t.onComplete(h,p))})}static warnOnListenWarnings_(t,n){if(t&&typeof t=="object"&&Pr(t,"w")){const i=La(t,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const o='".indexOn": "'+n._queryParams.getIndex().toString()+'"',l=n._path.toString();dn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||Oj(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Gw)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,n=Nj(t)?"auth":"gauth",i={cred:t};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,o=>{const l=o.s,u=o.d||"error";this.authToken_===t&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const n=t.s,i=t.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(t,n){const i=t._path.toString(),o=t._queryIdentifier;this.log_("Unlisten called for "+i+" "+o),he(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,o)&&this.connected_&&this.sendUnlisten_(i,o,t._queryObject,n)}sendUnlisten_(t,n,i,o){this.log_("Unlisten on "+t+" for "+n);const l={p:t},u="n";o&&(l.q=i,l.t=o),this.sendRequest(u,l)}onDisconnectPut(t,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,n,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:n,onComplete:i})}onDisconnectMerge(t,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,n,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:n,onComplete:i})}onDisconnectCancel(t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(t,n,i,o){const l={p:n,d:i};this.log_("onDisconnect "+t,l),this.sendRequest(t,l,u=>{o&&setTimeout(()=>{o(u.s,u.d)},Math.floor(0))})}put(t,n,i,o){this.putInternal("p",t,n,i,o)}merge(t,n,i,o){this.putInternal("m",t,n,i,o)}putInternal(t,n,i,o,l){this.initConnection_();const u={p:n,d:i};l!==void 0&&(u.h=l),this.outstandingPuts_.push({action:t,request:u,onComplete:o}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(t){const n=this.outstandingPuts_[t].action,i=this.outstandingPuts_[t].request,o=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(n,i,l=>{this.log_(n+" response",l),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(l.s,l.d)})}reportStats(t){if(this.connected_){const n={c:t};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const l=i.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+$t(t));const n=t.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,n){this.log_("handleServerMessage",t,n),t==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):t==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):t==="c"?this.onListenRevoked_(n.p,n.q):t==="ac"?this.onAuthRevoked_(n.s,n.d):t==="apc"?this.onAppCheckRevoked_(n.s,n.d):t==="sd"?this.onSecurityDebugPacket_(n):ev("Unrecognized action received from server: "+$t(t)+`
Are you using the latest client?`)}onReady_(t,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){he(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=oc,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=oc,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>y3&&(this.reconnectDelay_=oc),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-t);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*g3)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+gi.nextConnectionId_++,l=this.lastSessionId;let u=!1,f=null;const p=function(){f?f.close():(u=!0,i())},h=function(_){he(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(_)};this.realtime_={close:p,sendRequest:h};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[_,v]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);u?Jt("getToken() completed but was canceled"):(Jt("getToken() completed. Creating connection."),this.authToken_=_&&_.accessToken,this.appCheckToken_=v&&v.token,f=new c3(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,i,S=>{dn(S+" ("+this.repoInfo_.toString()+")"),this.interrupt(v3)},l))}catch(_){this.log_("Failed to get token: "+_),u||(this.repoInfo_.nodeAdmin&&dn(_),p())}}}interrupt(t){Jt("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){Jt("Resuming connection for reason: "+t),delete this.interruptReasons_[t],zy(this.interruptReasons_)&&(this.reconnectDelay_=oc,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const n=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const n=this.outstandingPuts_[t];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,n){let i;n?i=n.map(l=>g_(l)).join("$"):i="default";const o=this.removeListen_(t,i);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(t,n){const i=new ct(t).toString();let o;if(this.listens.has(i)){const l=this.listens.get(i);o=l.get(n),l.delete(n),l.size===0&&this.listens.delete(i)}else o=void 0;return o}onAuthRevoked_(t,n){Jt("Auth token revoked: "+t+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ww&&(this.reconnectDelay_=Gw,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,n){Jt("App check token revoked: "+t+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ww&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const n of t.values())this.sendListen_(n);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let n="js";t["sdk."+n+"."+nA.replace(/\./g,"-")]=1,Jv()?t["framework.cordova"]=1:cR()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=Zf.getInstance().currentlyOnline();return zy(this.interruptReasons_)&&t}}gi.nextPersistentConnectionId_=0;gi.nextConnectionId_=0;/**
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
 */class Yh{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,n){const i=new qe($a,t),o=new qe($a,n);return this.compare(i,o)!==0}minPost(){return qe.MIN}}/**
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
 */let ef;class RA extends Yh{static get __EMPTY_NODE(){return ef}static set __EMPTY_NODE(t){ef=t}compare(t,n){return To(t.name,n.name)}isDefinedOn(t){throw Ga("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,n){return!1}minPost(){return qe.MIN}maxPost(){return new qe(vo,ef)}makePost(t,n){return he(typeof t=="string","KeyIndex indexValue must always be a string."),new qe(t,ef)}toString(){return".key"}}const Ca=new RA;/**
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
 */class tf{constructor(t,n,i,o,l=null){this.isReverse_=o,this.resultGenerator_=l,this.nodeStack_=[];let u=1;for(;!t.isEmpty();)if(t=t,u=n?i(t.key,n):1,o&&(u*=-1),u<0)this.isReverse_?t=t.left:t=t.right;else if(u===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(t.key,t.value):n={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class qt{constructor(t,n,i,o,l){this.key=t,this.value=n,this.color=i??qt.RED,this.left=o??Sn.EMPTY_NODE,this.right=l??Sn.EMPTY_NODE}copy(t,n,i,o,l){return new qt(t??this.key,n??this.value,i??this.color,o??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,i){let o=this;const l=i(t,o.key);return l<0?o=o.copy(null,null,null,o.left.insert(t,n,i),null):l===0?o=o.copy(null,n,null,null,null):o=o.copy(null,null,null,null,o.right.insert(t,n,i)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return Sn.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,n){let i,o;if(i=this,n(t,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(t,i.key)===0){if(i.right.isEmpty())return Sn.EMPTY_NODE;o=i.right.min_(),i=i.copy(o.key,o.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,qt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,qt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}qt.RED=!0;qt.BLACK=!1;class _3{copy(t,n,i,o,l){return this}insert(t,n,i){return new qt(t,n,null)}remove(t,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Sn{constructor(t,n=Sn.EMPTY_NODE){this.comparator_=t,this.root_=n}insert(t,n){return new Sn(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,qt.BLACK,null,null))}remove(t){return new Sn(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,qt.BLACK,null,null))}get(t){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(t,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(t){let n,i=this.root_,o=null;for(;!i.isEmpty();)if(n=this.comparator_(t,i.key),n===0){if(i.left.isEmpty())return o?o.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(o=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new tf(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,n){return new tf(this.root_,t,this.comparator_,!1,n)}getReverseIteratorFrom(t,n){return new tf(this.root_,t,this.comparator_,!0,n)}getReverseIterator(t){return new tf(this.root_,null,this.comparator_,!0,t)}}Sn.EMPTY_NODE=new _3;/**
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
 */function b3(e,t){return To(e.name,t.name)}function w_(e,t){return To(e,t)}/**
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
 */let nv;function S3(e){nv=e}const AA=function(e){return typeof e=="number"?"number:"+oA(e):"string:"+e},IA=function(e){if(e.isLeafNode()){const t=e.val();he(typeof t=="string"||typeof t=="number"||typeof t=="object"&&Pr(t,".sv"),"Priority must be a string or number.")}else he(e===nv||e.isEmpty(),"priority of unexpected type.");he(e===nv||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Yw;class Ht{static set __childrenNodeConstructor(t){Yw=t}static get __childrenNodeConstructor(){return Yw}constructor(t,n=Ht.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=n,this.lazyHash_=null,he(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),IA(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new Ht(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:Ht.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return We(t)?this:Fe(t)===".priority"?this.priorityNode_:Ht.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,n){return null}updateImmediateChild(t,n){return t===".priority"?this.updatePriority(n):n.isEmpty()&&t!==".priority"?this:Ht.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}updateChild(t,n){const i=Fe(t);return i===null?n:n.isEmpty()&&i!==".priority"?this:(he(i!==".priority"||xs(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Ht.__childrenNodeConstructor.EMPTY_NODE.updateChild(ht(t),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,n){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+AA(this.priorityNode_.val())+":");const n=typeof this.value_;t+=n+":",n==="number"?t+=oA(this.value_):t+=this.value_,this.lazyHash_=iA(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===Ht.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof Ht.__childrenNodeConstructor?-1:(he(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const n=typeof t.value_,i=typeof this.value_,o=Ht.VALUE_TYPE_ORDER.indexOf(n),l=Ht.VALUE_TYPE_ORDER.indexOf(i);return he(o>=0,"Unknown leaf type: "+n),he(l>=0,"Unknown leaf type: "+i),o===l?i==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:l-o}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const n=t;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ht.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let DA,kA;function x3(e){DA=e}function w3(e){kA=e}class E3 extends Yh{compare(t,n){const i=t.node.getPriority(),o=n.node.getPriority(),l=i.compareTo(o);return l===0?To(t.name,n.name):l}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,n){return!t.getPriority().equals(n.getPriority())}minPost(){return qe.MIN}maxPost(){return new qe(vo,new Ht("[PRIORITY-POST]",kA))}makePost(t,n){const i=DA(t);return new qe(n,new Ht("[PRIORITY-POST]",i))}toString(){return".priority"}}const At=new E3;/**
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
 */const C3=Math.log(2);class T3{constructor(t){const n=l=>parseInt(Math.log(l)/C3,10),i=l=>parseInt(Array(l+1).join("1"),2);this.count=n(t+1),this.current_=this.count-1;const o=i(this.count);this.bits_=t+1&o}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const Jf=function(e,t,n,i){e.sort(t);const o=function(p,h){const y=h-p;let _,v;if(y===0)return null;if(y===1)return _=e[p],v=n?n(_):_,new qt(v,_.node,qt.BLACK,null,null);{const S=parseInt(y/2,10)+p,x=o(p,S),D=o(S+1,h);return _=e[S],v=n?n(_):_,new qt(v,_.node,qt.BLACK,x,D)}},l=function(p){let h=null,y=null,_=e.length;const v=function(x,D){const T=_-x,k=_;_-=x;const M=o(T+1,k),R=e[T],I=n?n(R):R;S(new qt(I,R.node,D,null,M))},S=function(x){h?(h.left=x,h=x):(y=x,h=x)};for(let x=0;x<p.count;++x){const D=p.nextBitIsOne(),T=Math.pow(2,p.count-(x+1));D?v(T,qt.BLACK):(v(T,qt.BLACK),v(T,qt.RED))}return y},u=new T3(e.length),f=l(u);return new Sn(i||t,f)};/**
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
 */let ty;const pa={};class fi{static get Default(){return he(pa&&At,"ChildrenNode.ts has not been loaded"),ty=ty||new fi({".priority":pa},{".priority":At}),ty}constructor(t,n){this.indexes_=t,this.indexSet_=n}get(t){const n=La(this.indexes_,t);if(!n)throw new Error("No index defined for "+t);return n instanceof Sn?n:null}hasIndex(t){return Pr(this.indexSet_,t.toString())}addIndex(t,n){he(t!==Ca,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let o=!1;const l=n.getIterator(qe.Wrap);let u=l.getNext();for(;u;)o=o||t.isDefinedOn(u.node),i.push(u),u=l.getNext();let f;o?f=Jf(i,t.getCompare()):f=pa;const p=t.toString(),h={...this.indexSet_};h[p]=t;const y={...this.indexes_};return y[p]=f,new fi(y,h)}addToIndexes(t,n){const i=Ff(this.indexes_,(o,l)=>{const u=La(this.indexSet_,l);if(he(u,"Missing index implementation for "+l),o===pa)if(u.isDefinedOn(t.node)){const f=[],p=n.getIterator(qe.Wrap);let h=p.getNext();for(;h;)h.name!==t.name&&f.push(h),h=p.getNext();return f.push(t),Jf(f,u.getCompare())}else return pa;else{const f=n.get(t.name);let p=o;return f&&(p=p.remove(new qe(t.name,f))),p.insert(t,t.node)}});return new fi(i,this.indexSet_)}removeFromIndexes(t,n){const i=Ff(this.indexes_,o=>{if(o===pa)return o;{const l=n.get(t.name);return l?o.remove(new qe(t.name,l)):o}});return new fi(i,this.indexSet_)}}/**
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
 */let ac;class Ne{static get EMPTY_NODE(){return ac||(ac=new Ne(new Sn(w_),null,fi.Default))}constructor(t,n,i){this.children_=t,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&IA(this.priorityNode_),this.children_.isEmpty()&&he(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ac}updatePriority(t){return this.children_.isEmpty()?this:new Ne(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const n=this.children_.get(t);return n===null?ac:n}}getChild(t){const n=Fe(t);return n===null?this:this.getImmediateChild(n).getChild(ht(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,n){if(he(n,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(n);{const i=new qe(t,n);let o,l;n.isEmpty()?(o=this.children_.remove(t),l=this.indexMap_.removeFromIndexes(i,this.children_)):(o=this.children_.insert(t,n),l=this.indexMap_.addToIndexes(i,this.children_));const u=o.isEmpty()?ac:this.priorityNode_;return new Ne(o,u,l)}}updateChild(t,n){const i=Fe(t);if(i===null)return n;{he(Fe(t)!==".priority"||xs(t)===1,".priority must be the last token in a path");const o=this.getImmediateChild(i).updateChild(ht(t),n);return this.updateImmediateChild(i,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const n={};let i=0,o=0,l=!0;if(this.forEachChild(At,(u,f)=>{n[u]=f.val(t),i++,l&&Ne.INTEGER_REGEXP_.test(u)?o=Math.max(o,Number(u)):l=!1}),!t&&l&&o<2*i){const u=[];for(const f in n)u[f]=n[f];return u}else return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+AA(this.getPriority().val())+":"),this.forEachChild(At,(n,i)=>{const o=i.hash();o!==""&&(t+=":"+n+":"+o)}),this.lazyHash_=t===""?"":iA(t)}return this.lazyHash_}getPredecessorChildName(t,n,i){const o=this.resolveIndex_(i);if(o){const l=o.getPredecessorKey(new qe(t,n));return l?l.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const n=this.resolveIndex_(t);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(t){const n=this.getFirstChildName(t);return n?new qe(n,this.children_.get(n)):null}getLastChildName(t){const n=this.resolveIndex_(t);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(t){const n=this.getLastChildName(t);return n?new qe(n,this.children_.get(n)):null}forEachChild(t,n){const i=this.resolveIndex_(t);return i?i.inorderTraversal(o=>n(o.name,o.node)):this.children_.inorderTraversal(n)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(t,o=>o);{const o=this.children_.getIteratorFrom(t.name,qe.Wrap);let l=o.peek();for(;l!=null&&n.compare(l,t)<0;)o.getNext(),l=o.peek();return o}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(t,o=>o);{const o=this.children_.getReverseIteratorFrom(t.name,qe.Wrap);let l=o.peek();for(;l!=null&&n.compare(l,t)>0;)o.getNext(),l=o.peek();return o}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===Su?-1:0}withIndex(t){if(t===Ca||this.indexMap_.hasIndex(t))return this;{const n=this.indexMap_.addIndex(t,this.children_);return new Ne(this.children_,this.priorityNode_,n)}}isIndexed(t){return t===Ca||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const n=t;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(At),o=n.getIterator(At);let l=i.getNext(),u=o.getNext();for(;l&&u;){if(l.name!==u.name||!l.node.equals(u.node))return!1;l=i.getNext(),u=o.getNext()}return l===null&&u===null}else return!1;else return!1}}resolveIndex_(t){return t===Ca?null:this.indexMap_.get(t.toString())}}Ne.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class R3 extends Ne{constructor(){super(new Sn(w_),Ne.EMPTY_NODE,fi.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return Ne.EMPTY_NODE}isEmpty(){return!1}}const Su=new R3;Object.defineProperties(qe,{MIN:{value:new qe($a,Ne.EMPTY_NODE)},MAX:{value:new qe(vo,Su)}});RA.__EMPTY_NODE=Ne.EMPTY_NODE;Ht.__childrenNodeConstructor=Ne;S3(Su);w3(Su);/**
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
 */const A3=!0;function Pt(e,t=null){if(e===null)return Ne.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(t=e[".priority"]),he(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){const n=e;return new Ht(n,Pt(t))}if(!(e instanceof Array)&&A3){const n=[];let i=!1;if(nn(e,(u,f)=>{if(u.substring(0,1)!=="."){const p=Pt(f);p.isEmpty()||(i=i||!p.getPriority().isEmpty(),n.push(new qe(u,p)))}}),n.length===0)return Ne.EMPTY_NODE;const l=Jf(n,b3,u=>u.name,w_);if(i){const u=Jf(n,At.getCompare());return new Ne(l,Pt(t),new fi({".priority":u},{".priority":At}))}else return new Ne(l,Pt(t),fi.Default)}else{let n=Ne.EMPTY_NODE;return nn(e,(i,o)=>{if(Pr(e,i)&&i.substring(0,1)!=="."){const l=Pt(o);(l.isLeafNode()||!l.isEmpty())&&(n=n.updateImmediateChild(i,l))}}),n.updatePriority(Pt(t))}}x3(Pt);/**
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
 */class I3 extends Yh{constructor(t){super(),this.indexPath_=t,he(!We(t)&&Fe(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,n){const i=this.extractChild(t.node),o=this.extractChild(n.node),l=i.compareTo(o);return l===0?To(t.name,n.name):l}makePost(t,n){const i=Pt(t),o=Ne.EMPTY_NODE.updateChild(this.indexPath_,i);return new qe(n,o)}maxPost(){const t=Ne.EMPTY_NODE.updateChild(this.indexPath_,Su);return new qe(vo,t)}toString(){return Zc(this.indexPath_,0).join("/")}}/**
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
 */class D3 extends Yh{compare(t,n){const i=t.node.compareTo(n.node);return i===0?To(t.name,n.name):i}isDefinedOn(t){return!0}indexedValueChanged(t,n){return!t.equals(n)}minPost(){return qe.MIN}maxPost(){return qe.MAX}makePost(t,n){const i=Pt(t);return new qe(n,i)}toString(){return".value"}}const k3=new D3;/**
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
 */function NA(e){return{type:"value",snapshotNode:e}}function Ua(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Jc(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function eu(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function N3(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}/**
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
 */class E_{constructor(t){this.index_=t}updateChild(t,n,i,o,l,u){he(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=t.getImmediateChild(n);return f.getChild(o).equals(i.getChild(o))&&f.isEmpty()===i.isEmpty()||(u!=null&&(i.isEmpty()?t.hasChild(n)?u.trackChildChange(Jc(n,f)):he(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?u.trackChildChange(Ua(n,i)):u.trackChildChange(eu(n,i,f))),t.isLeafNode()&&i.isEmpty())?t:t.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(t,n,i){return i!=null&&(t.isLeafNode()||t.forEachChild(At,(o,l)=>{n.hasChild(o)||i.trackChildChange(Jc(o,l))}),n.isLeafNode()||n.forEachChild(At,(o,l)=>{if(t.hasChild(o)){const u=t.getImmediateChild(o);u.equals(l)||i.trackChildChange(eu(o,l,u))}else i.trackChildChange(Ua(o,l))})),n.withIndex(this.index_)}updatePriority(t,n){return t.isEmpty()?Ne.EMPTY_NODE:t.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class tu{constructor(t){this.indexedFilter_=new E_(t.getIndex()),this.index_=t.getIndex(),this.startPost_=tu.getStartPost_(t),this.endPost_=tu.getEndPost_(t),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),t)<=0:this.index_.compare(this.getStartPost(),t)<0,i=this.endIsInclusive_?this.index_.compare(t,this.getEndPost())<=0:this.index_.compare(t,this.getEndPost())<0;return n&&i}updateChild(t,n,i,o,l,u){return this.matches(new qe(n,i))||(i=Ne.EMPTY_NODE),this.indexedFilter_.updateChild(t,n,i,o,l,u)}updateFullNode(t,n,i){n.isLeafNode()&&(n=Ne.EMPTY_NODE);let o=n.withIndex(this.index_);o=o.updatePriority(Ne.EMPTY_NODE);const l=this;return n.forEachChild(At,(u,f)=>{l.matches(new qe(u,f))||(o=o.updateImmediateChild(u,Ne.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,o,i)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const n=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),n)}else return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const n=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),n)}else return t.getIndex().maxPost()}}/**
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
 */class O3{constructor(t){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new tu(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft(),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}updateChild(t,n,i,o,l,u){return this.rangedFilter_.matches(new qe(n,i))||(i=Ne.EMPTY_NODE),t.getImmediateChild(n).equals(i)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,n,i,o,l,u):this.fullLimitUpdateChild_(t,n,i,l,u)}updateFullNode(t,n,i){let o;if(n.isLeafNode()||n.isEmpty())o=Ne.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){o=Ne.EMPTY_NODE.withIndex(this.index_);let l;this.reverse_?l=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):l=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;l.hasNext()&&u<this.limit_;){const f=l.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))o=o.updateImmediateChild(f.name,f.node),u++;else break;else continue}}else{o=n.withIndex(this.index_),o=o.updatePriority(Ne.EMPTY_NODE);let l;this.reverse_?l=o.getReverseIterator(this.index_):l=o.getIterator(this.index_);let u=0;for(;l.hasNext();){const f=l.getNext();u<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?u++:o=o.updateImmediateChild(f.name,Ne.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,o,i)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,n,i,o,l){let u;if(this.reverse_){const _=this.index_.getCompare();u=(v,S)=>_(S,v)}else u=this.index_.getCompare();const f=t;he(f.numChildren()===this.limit_,"");const p=new qe(n,i),h=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),y=this.rangedFilter_.matches(p);if(f.hasChild(n)){const _=f.getImmediateChild(n);let v=o.getChildAfterChild(this.index_,h,this.reverse_);for(;v!=null&&(v.name===n||f.hasChild(v.name));)v=o.getChildAfterChild(this.index_,v,this.reverse_);const S=v==null?1:u(v,p);if(y&&!i.isEmpty()&&S>=0)return l?.trackChildChange(eu(n,i,_)),f.updateImmediateChild(n,i);{l?.trackChildChange(Jc(n,_));const D=f.updateImmediateChild(n,Ne.EMPTY_NODE);return v!=null&&this.rangedFilter_.matches(v)?(l?.trackChildChange(Ua(v.name,v.node)),D.updateImmediateChild(v.name,v.node)):D}}else return i.isEmpty()?t:y&&u(h,p)>=0?(l!=null&&(l.trackChildChange(Jc(h.name,h.node)),l.trackChildChange(Ua(n,i))),f.updateImmediateChild(n,i).updateImmediateChild(h.name,Ne.EMPTY_NODE)):t}}/**
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
 */class C_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=At}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return he(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return he(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:$a}hasEnd(){return this.endSet_}getIndexEndValue(){return he(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return he(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:vo}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return he(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===At}copy(){const t=new C_;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function M3(e){return e.loadsAllData()?new E_(e.getIndex()):e.hasLimit()?new O3(e):new tu(e)}function Qw(e){const t={};if(e.isDefault())return t;let n;if(e.index_===At?n="$priority":e.index_===k3?n="$value":e.index_===Ca?n="$key":(he(e.index_ instanceof I3,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=$t(n),e.startSet_){const i=e.startAfterSet_?"startAfter":"startAt";t[i]=$t(e.indexStartValue_),e.startNameSet_&&(t[i]+=","+$t(e.indexStartName_))}if(e.endSet_){const i=e.endBeforeSet_?"endBefore":"endAt";t[i]=$t(e.indexEndValue_),e.endNameSet_&&(t[i]+=","+$t(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Kw(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;n===""&&(e.isViewFromLeft()?n="l":n="r"),t.vf=n}return e.index_!==At&&(t.i=e.index_.toString()),t}/**
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
 */class eh extends wA{reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,n){return n!==void 0?"tag$"+n:(he(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}constructor(t,n,i,o){super(),this.repoInfo_=t,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=o,this.log_=bu("p:rest:"),this.listens_={}}listen(t,n,i,o){const l=t._path.toString();this.log_("Listen called for "+l+" "+t._queryIdentifier);const u=eh.getListenId_(t,i),f={};this.listens_[u]=f;const p=Qw(t._queryParams);this.restRequest_(l+".json",p,(h,y)=>{let _=y;if(h===404&&(_=null,h=null),h===null&&this.onDataUpdate_(l,_,!1,i),La(this.listens_,u)===f){let v;h?h===401?v="permission_denied":v="rest_error:"+h:v="ok",o(v,null)}})}unlisten(t,n){const i=eh.getListenId_(t,n);delete this.listens_[i]}get(t){const n=Qw(t._queryParams),i=t._path.toString(),o=new hu;return this.restRequest_(i+".json",n,(l,u)=>{let f=u;l===404&&(f=null,l=null),l===null?(this.onDataUpdate_(i,f,!1,null),o.resolve(f)):o.reject(new Error(f))}),o.promise}refreshAuthToken(t){}restRequest_(t,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,l])=>{o&&o.accessToken&&(n.auth=o.accessToken),l&&l.token&&(n.ac=l.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+Ya(n);this.log_("Sending REST request for "+u);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(i&&f.readyState===4){this.log_("REST Response for "+u+" received. status:",f.status,"response:",f.responseText);let p=null;if(f.status>=200&&f.status<300){try{p=Hc(f.responseText)}catch{dn("Failed to parse JSON response for "+u+": "+f.responseText)}i(null,p)}else f.status!==401&&f.status!==404&&dn("Got unsuccessful REST response for "+u+" Status: "+f.status),i(f.status);i=null}},f.open("GET",u,!0),f.send()})}}/**
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
 */class L3{constructor(){this.rootNode_=Ne.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,n){this.rootNode_=this.rootNode_.updateChild(t,n)}}/**
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
 */function th(){return{value:null,children:new Map}}function OA(e,t,n){if(We(t))e.value=n,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(t,n);else{const i=Fe(t);e.children.has(i)||e.children.set(i,th());const o=e.children.get(i);t=ht(t),OA(o,t,n)}}function rv(e,t,n){e.value!==null?n(t,e.value):j3(e,(i,o)=>{const l=new ct(t.toString()+"/"+i);rv(o,l,n)})}function j3(e,t){e.children.forEach((n,i)=>{t(i,n)})}/**
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
 */class P3{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),n={...t};return this.last_&&nn(this.last_,(i,o)=>{n[i]=n[i]-o}),this.last_=t,n}}/**
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
 */const Xw=10*1e3,$3=30*1e3,U3=300*1e3;class z3{constructor(t,n){this.server_=n,this.statsToReport_={},this.statsListener_=new P3(t);const i=Xw+($3-Xw)*Math.random();Nc(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const t=this.statsListener_.get(),n={};let i=!1;nn(t,(o,l)=>{l>0&&Pr(this.statsToReport_,o)&&(n[o]=l,i=!0)}),i&&this.server_.reportStats(n),Nc(this.reportStats_.bind(this),Math.floor(Math.random()*2*U3))}}/**
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
 */var fr;(function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(fr||(fr={}));function T_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function R_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function A_(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}/**
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
 */class nh{constructor(t,n,i){this.path=t,this.affectedTree=n,this.revert=i,this.type=fr.ACK_USER_WRITE,this.source=T_()}operationForChild(t){if(We(this.path)){if(this.affectedTree.value!=null)return he(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ct(t));return new nh(Ke(),n,this.revert)}}else return he(Fe(this.path)===t,"operationForChild called for unrelated child."),new nh(ht(this.path),this.affectedTree,this.revert)}}/**
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
 */class B3{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function H3(e,t,n,i){const o=[],l=[];return t.forEach(u=>{u.type==="child_changed"&&e.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&l.push(N3(u.childName,u.snapshotNode))}),lc(e,o,"child_removed",t,i,n),lc(e,o,"child_added",t,i,n),lc(e,o,"child_moved",l,i,n),lc(e,o,"child_changed",t,i,n),lc(e,o,"value",t,i,n),o}function lc(e,t,n,i,o,l){const u=i.filter(f=>f.type===n);u.sort((f,p)=>q3(e,f,p)),u.forEach(f=>{const p=F3(e,f,l);o.forEach(h=>{h.respondsTo(f.type)&&t.push(h.createEvent(p,e.query_))})})}function F3(e,t,n){return t.type==="value"||t.type==="child_removed"||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function q3(e,t,n){if(t.childName==null||n.childName==null)throw Ga("Should only compare child_ events.");const i=new qe(t.childName,t.snapshotNode),o=new qe(n.childName,n.snapshotNode);return e.index_.compare(i,o)}/**
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
 */function Qh(e,t){return{eventCache:e,serverCache:t}}function Oc(e,t,n,i){return Qh(new ws(t,n,i),e.serverCache)}function MA(e,t,n,i){return Qh(e.eventCache,new ws(t,n,i))}function rh(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function bo(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
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
 */let ny;const V3=()=>(ny||(ny=new Sn(I$)),ny);class ft{static fromObject(t){let n=new ft(null);return nn(t,(i,o)=>{n=n.set(new ct(i),o)}),n}constructor(t,n=V3()){this.value=t,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,n){if(this.value!=null&&n(this.value))return{path:Ke(),value:this.value};if(We(t))return null;{const i=Fe(t),o=this.children.get(i);if(o!==null){const l=o.findRootMostMatchingPathAndValue(ht(t),n);return l!=null?{path:Rt(new ct(i),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(We(t))return this;{const n=Fe(t),i=this.children.get(n);return i!==null?i.subtree(ht(t)):new ft(null)}}set(t,n){if(We(t))return new ft(n,this.children);{const i=Fe(t),l=(this.children.get(i)||new ft(null)).set(ht(t),n),u=this.children.insert(i,l);return new ft(this.value,u)}}remove(t){if(We(t))return this.children.isEmpty()?new ft(null):new ft(null,this.children);{const n=Fe(t),i=this.children.get(n);if(i){const o=i.remove(ht(t));let l;return o.isEmpty()?l=this.children.remove(n):l=this.children.insert(n,o),this.value===null&&l.isEmpty()?new ft(null):new ft(this.value,l)}else return this}}get(t){if(We(t))return this.value;{const n=Fe(t),i=this.children.get(n);return i?i.get(ht(t)):null}}setTree(t,n){if(We(t))return n;{const i=Fe(t),l=(this.children.get(i)||new ft(null)).setTree(ht(t),n);let u;return l.isEmpty()?u=this.children.remove(i):u=this.children.insert(i,l),new ft(this.value,u)}}fold(t){return this.fold_(Ke(),t)}fold_(t,n){const i={};return this.children.inorderTraversal((o,l)=>{i[o]=l.fold_(Rt(t,o),n)}),n(t,this.value,i)}findOnPath(t,n){return this.findOnPath_(t,Ke(),n)}findOnPath_(t,n,i){const o=this.value?i(n,this.value):!1;if(o)return o;if(We(t))return null;{const l=Fe(t),u=this.children.get(l);return u?u.findOnPath_(ht(t),Rt(n,l),i):null}}foreachOnPath(t,n){return this.foreachOnPath_(t,Ke(),n)}foreachOnPath_(t,n,i){if(We(t))return this;{this.value&&i(n,this.value);const o=Fe(t),l=this.children.get(o);return l?l.foreachOnPath_(ht(t),Rt(n,o),i):new ft(null)}}foreach(t){this.foreach_(Ke(),t)}foreach_(t,n){this.children.inorderTraversal((i,o)=>{o.foreach_(Rt(t,i),n)}),this.value&&n(t,this.value)}foreachChild(t){this.children.inorderTraversal((n,i)=>{i.value&&t(n,i.value)})}}/**
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
 */class yr{constructor(t){this.writeTree_=t}static empty(){return new yr(new ft(null))}}function Mc(e,t,n){if(We(t))return new yr(new ft(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(i!=null){const o=i.path;let l=i.value;const u=un(o,t);return l=l.updateChild(u,n),new yr(e.writeTree_.set(o,l))}else{const o=new ft(n),l=e.writeTree_.setTree(t,o);return new yr(l)}}}function iv(e,t,n){let i=e;return nn(n,(o,l)=>{i=Mc(i,Rt(t,o),l)}),i}function Zw(e,t){if(We(t))return yr.empty();{const n=e.writeTree_.setTree(t,new ft(null));return new yr(n)}}function sv(e,t){return Ro(e,t)!=null}function Ro(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return n!=null?e.writeTree_.get(n.path).getChild(un(n.path,t)):null}function Jw(e){const t=[],n=e.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(At,(i,o)=>{t.push(new qe(i,o))}):e.writeTree_.children.inorderTraversal((i,o)=>{o.value!=null&&t.push(new qe(i,o.value))}),t}function hs(e,t){if(We(t))return e;{const n=Ro(e,t);return n!=null?new yr(new ft(n)):new yr(e.writeTree_.subtree(t))}}function ov(e){return e.writeTree_.isEmpty()}function Ba(e,t){return LA(Ke(),e.writeTree_,t)}function LA(e,t,n){if(t.value!=null)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal((o,l)=>{o===".priority"?(he(l.value!==null,"Priority writes must always be leaf nodes"),i=l.value):n=LA(Rt(e,o),l,n)}),!n.getChild(e).isEmpty()&&i!==null&&(n=n.updateChild(Rt(e,".priority"),i)),n}}/**
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
 */function Kh(e,t){return UA(t,e)}function G3(e,t,n,i,o){he(i>e.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:o}),o&&(e.visibleWrites=Mc(e.visibleWrites,t,n)),e.lastWriteId=i}function W3(e,t,n,i){he(i>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:i,visible:!0}),e.visibleWrites=iv(e.visibleWrites,t,n),e.lastWriteId=i}function Y3(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}function Q3(e,t){const n=e.allWrites.findIndex(f=>f.writeId===t);he(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let o=i.visible,l=!1,u=e.allWrites.length-1;for(;o&&u>=0;){const f=e.allWrites[u];f.visible&&(u>=n&&K3(f,i.path)?o=!1:Xn(i.path,f.path)&&(l=!0)),u--}if(o){if(l)return X3(e),!0;if(i.snap)e.visibleWrites=Zw(e.visibleWrites,i.path);else{const f=i.children;nn(f,p=>{e.visibleWrites=Zw(e.visibleWrites,Rt(i.path,p))})}return!0}else return!1}function K3(e,t){if(e.snap)return Xn(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Xn(Rt(e.path,n),t))return!0;return!1}function X3(e){e.visibleWrites=jA(e.allWrites,Z3,Ke()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Z3(e){return e.visible}function jA(e,t,n){let i=yr.empty();for(let o=0;o<e.length;++o){const l=e[o];if(t(l)){const u=l.path;let f;if(l.snap)Xn(n,u)?(f=un(n,u),i=Mc(i,f,l.snap)):Xn(u,n)&&(f=un(u,n),i=Mc(i,Ke(),l.snap.getChild(f)));else if(l.children){if(Xn(n,u))f=un(n,u),i=iv(i,f,l.children);else if(Xn(u,n))if(f=un(u,n),We(f))i=iv(i,Ke(),l.children);else{const p=La(l.children,Fe(f));if(p){const h=p.getChild(ht(f));i=Mc(i,Ke(),h)}}}else throw Ga("WriteRecord should have .snap or .children")}}return i}function PA(e,t,n,i,o){if(!i&&!o){const l=Ro(e.visibleWrites,t);if(l!=null)return l;{const u=hs(e.visibleWrites,t);if(ov(u))return n;if(n==null&&!sv(u,Ke()))return null;{const f=n||Ne.EMPTY_NODE;return Ba(u,f)}}}else{const l=hs(e.visibleWrites,t);if(!o&&ov(l))return n;if(!o&&n==null&&!sv(l,Ke()))return null;{const u=function(h){return(h.visible||o)&&(!i||!~i.indexOf(h.writeId))&&(Xn(h.path,t)||Xn(t,h.path))},f=jA(e.allWrites,u,t),p=n||Ne.EMPTY_NODE;return Ba(f,p)}}}function J3(e,t,n){let i=Ne.EMPTY_NODE;const o=Ro(e.visibleWrites,t);if(o)return o.isLeafNode()||o.forEachChild(At,(l,u)=>{i=i.updateImmediateChild(l,u)}),i;if(n){const l=hs(e.visibleWrites,t);return n.forEachChild(At,(u,f)=>{const p=Ba(hs(l,new ct(u)),f);i=i.updateImmediateChild(u,p)}),Jw(l).forEach(u=>{i=i.updateImmediateChild(u.name,u.node)}),i}else{const l=hs(e.visibleWrites,t);return Jw(l).forEach(u=>{i=i.updateImmediateChild(u.name,u.node)}),i}}function e5(e,t,n,i,o){he(i||o,"Either existingEventSnap or existingServerSnap must exist");const l=Rt(t,n);if(sv(e.visibleWrites,l))return null;{const u=hs(e.visibleWrites,l);return ov(u)?o.getChild(n):Ba(u,o.getChild(n))}}function t5(e,t,n,i){const o=Rt(t,n),l=Ro(e.visibleWrites,o);if(l!=null)return l;if(i.isCompleteForChild(n)){const u=hs(e.visibleWrites,o);return Ba(u,i.getNode().getImmediateChild(n))}else return null}function n5(e,t){return Ro(e.visibleWrites,t)}function r5(e,t,n,i,o,l,u){let f;const p=hs(e.visibleWrites,t),h=Ro(p,Ke());if(h!=null)f=h;else if(n!=null)f=Ba(p,n);else return[];if(f=f.withIndex(u),!f.isEmpty()&&!f.isLeafNode()){const y=[],_=u.getCompare(),v=l?f.getReverseIteratorFrom(i,u):f.getIteratorFrom(i,u);let S=v.getNext();for(;S&&y.length<o;)_(S,i)!==0&&y.push(S),S=v.getNext();return y}else return[]}function i5(){return{visibleWrites:yr.empty(),allWrites:[],lastWriteId:-1}}function ih(e,t,n,i){return PA(e.writeTree,e.treePath,t,n,i)}function I_(e,t){return J3(e.writeTree,e.treePath,t)}function eE(e,t,n,i){return e5(e.writeTree,e.treePath,t,n,i)}function sh(e,t){return n5(e.writeTree,Rt(e.treePath,t))}function s5(e,t,n,i,o,l){return r5(e.writeTree,e.treePath,t,n,i,o,l)}function D_(e,t,n){return t5(e.writeTree,e.treePath,t,n)}function $A(e,t){return UA(Rt(e.treePath,t),e.writeTree)}function UA(e,t){return{treePath:e,writeTree:t}}/**
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
 */class o5{constructor(){this.changeMap=new Map}trackChildChange(t){const n=t.type,i=t.childName;he(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),he(i!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(i);if(o){const l=o.type;if(n==="child_added"&&l==="child_removed")this.changeMap.set(i,eu(i,t.snapshotNode,o.snapshotNode));else if(n==="child_removed"&&l==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&l==="child_changed")this.changeMap.set(i,Jc(i,o.oldSnap));else if(n==="child_changed"&&l==="child_added")this.changeMap.set(i,Ua(i,t.snapshotNode));else if(n==="child_changed"&&l==="child_changed")this.changeMap.set(i,eu(i,t.snapshotNode,o.oldSnap));else throw Ga("Illegal combination of changes: "+t+" occurred after "+o)}else this.changeMap.set(i,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class a5{getCompleteChild(t){return null}getChildAfterChild(t,n,i){return null}}const zA=new a5;class k_{constructor(t,n,i=null){this.writes_=t,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(t){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(t))return n.getNode().getImmediateChild(t);{const i=this.optCompleteServerCache_!=null?new ws(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return D_(this.writes_,t,i)}}getChildAfterChild(t,n,i){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:bo(this.viewCache_),l=s5(this.writes_,o,n,1,i,t);return l.length===0?null:l[0]}}/**
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
 */function l5(e){return{filter:e}}function c5(e,t){he(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),he(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function u5(e,t,n,i,o){const l=new o5;let u,f;if(n.type===fr.OVERWRITE){const h=n;h.source.fromUser?u=av(e,t,h.path,h.snap,i,o,l):(he(h.source.fromServer,"Unknown source."),f=h.source.tagged||t.serverCache.isFiltered()&&!We(h.path),u=oh(e,t,h.path,h.snap,i,o,f,l))}else if(n.type===fr.MERGE){const h=n;h.source.fromUser?u=f5(e,t,h.path,h.children,i,o,l):(he(h.source.fromServer,"Unknown source."),f=h.source.tagged||t.serverCache.isFiltered(),u=lv(e,t,h.path,h.children,i,o,f,l))}else if(n.type===fr.ACK_USER_WRITE){const h=n;h.revert?u=m5(e,t,h.path,i,o,l):u=h5(e,t,h.path,h.affectedTree,i,o,l)}else if(n.type===fr.LISTEN_COMPLETE)u=p5(e,t,n.path,i,l);else throw Ga("Unknown operation type: "+n.type);const p=l.getChanges();return d5(t,u,p),{viewCache:u,changes:p}}function d5(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const o=i.getNode().isLeafNode()||i.getNode().isEmpty(),l=rh(e);(n.length>0||!e.eventCache.isFullyInitialized()||o&&!i.getNode().equals(l)||!i.getNode().getPriority().equals(l.getPriority()))&&n.push(NA(rh(t)))}}function BA(e,t,n,i,o,l){const u=t.eventCache;if(sh(i,n)!=null)return t;{let f,p;if(We(n))if(he(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const h=bo(t),y=h instanceof Ne?h:Ne.EMPTY_NODE,_=I_(i,y);f=e.filter.updateFullNode(t.eventCache.getNode(),_,l)}else{const h=ih(i,bo(t));f=e.filter.updateFullNode(t.eventCache.getNode(),h,l)}else{const h=Fe(n);if(h===".priority"){he(xs(n)===1,"Can't have a priority with additional path components");const y=u.getNode();p=t.serverCache.getNode();const _=eE(i,n,y,p);_!=null?f=e.filter.updatePriority(y,_):f=u.getNode()}else{const y=ht(n);let _;if(u.isCompleteForChild(h)){p=t.serverCache.getNode();const v=eE(i,n,u.getNode(),p);v!=null?_=u.getNode().getImmediateChild(h).updateChild(y,v):_=u.getNode().getImmediateChild(h)}else _=D_(i,h,t.serverCache);_!=null?f=e.filter.updateChild(u.getNode(),h,_,y,o,l):f=u.getNode()}}return Oc(t,f,u.isFullyInitialized()||We(n),e.filter.filtersNodes())}}function oh(e,t,n,i,o,l,u,f){const p=t.serverCache;let h;const y=u?e.filter:e.filter.getIndexedFilter();if(We(n))h=y.updateFullNode(p.getNode(),i,null);else if(y.filtersNodes()&&!p.isFiltered()){const S=p.getNode().updateChild(n,i);h=y.updateFullNode(p.getNode(),S,null)}else{const S=Fe(n);if(!p.isCompleteForPath(n)&&xs(n)>1)return t;const x=ht(n),T=p.getNode().getImmediateChild(S).updateChild(x,i);S===".priority"?h=y.updatePriority(p.getNode(),T):h=y.updateChild(p.getNode(),S,T,x,zA,null)}const _=MA(t,h,p.isFullyInitialized()||We(n),y.filtersNodes()),v=new k_(o,_,l);return BA(e,_,n,o,v,f)}function av(e,t,n,i,o,l,u){const f=t.eventCache;let p,h;const y=new k_(o,t,l);if(We(n))h=e.filter.updateFullNode(t.eventCache.getNode(),i,u),p=Oc(t,h,!0,e.filter.filtersNodes());else{const _=Fe(n);if(_===".priority")h=e.filter.updatePriority(t.eventCache.getNode(),i),p=Oc(t,h,f.isFullyInitialized(),f.isFiltered());else{const v=ht(n),S=f.getNode().getImmediateChild(_);let x;if(We(v))x=i;else{const D=y.getCompleteChild(_);D!=null?b_(v)===".priority"&&D.getChild(CA(v)).isEmpty()?x=D:x=D.updateChild(v,i):x=Ne.EMPTY_NODE}if(S.equals(x))p=t;else{const D=e.filter.updateChild(f.getNode(),_,x,v,y,u);p=Oc(t,D,f.isFullyInitialized(),e.filter.filtersNodes())}}}return p}function tE(e,t){return e.eventCache.isCompleteForChild(t)}function f5(e,t,n,i,o,l,u){let f=t;return i.foreach((p,h)=>{const y=Rt(n,p);tE(t,Fe(y))&&(f=av(e,f,y,h,o,l,u))}),i.foreach((p,h)=>{const y=Rt(n,p);tE(t,Fe(y))||(f=av(e,f,y,h,o,l,u))}),f}function nE(e,t,n){return n.foreach((i,o)=>{t=t.updateChild(i,o)}),t}function lv(e,t,n,i,o,l,u,f){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let p=t,h;We(n)?h=i:h=new ft(null).setTree(n,i);const y=t.serverCache.getNode();return h.children.inorderTraversal((_,v)=>{if(y.hasChild(_)){const S=t.serverCache.getNode().getImmediateChild(_),x=nE(e,S,v);p=oh(e,p,new ct(_),x,o,l,u,f)}}),h.children.inorderTraversal((_,v)=>{const S=!t.serverCache.isCompleteForChild(_)&&v.value===null;if(!y.hasChild(_)&&!S){const x=t.serverCache.getNode().getImmediateChild(_),D=nE(e,x,v);p=oh(e,p,new ct(_),D,o,l,u,f)}}),p}function h5(e,t,n,i,o,l,u){if(sh(o,n)!=null)return t;const f=t.serverCache.isFiltered(),p=t.serverCache;if(i.value!=null){if(We(n)&&p.isFullyInitialized()||p.isCompleteForPath(n))return oh(e,t,n,p.getNode().getChild(n),o,l,f,u);if(We(n)){let h=new ft(null);return p.getNode().forEachChild(Ca,(y,_)=>{h=h.set(new ct(y),_)}),lv(e,t,n,h,o,l,f,u)}else return t}else{let h=new ft(null);return i.foreach((y,_)=>{const v=Rt(n,y);p.isCompleteForPath(v)&&(h=h.set(y,p.getNode().getChild(v)))}),lv(e,t,n,h,o,l,f,u)}}function p5(e,t,n,i,o){const l=t.serverCache,u=MA(t,l.getNode(),l.isFullyInitialized()||We(n),l.isFiltered());return BA(e,u,n,i,zA,o)}function m5(e,t,n,i,o,l){let u;if(sh(i,n)!=null)return t;{const f=new k_(i,t,o),p=t.eventCache.getNode();let h;if(We(n)||Fe(n)===".priority"){let y;if(t.serverCache.isFullyInitialized())y=ih(i,bo(t));else{const _=t.serverCache.getNode();he(_ instanceof Ne,"serverChildren would be complete if leaf node"),y=I_(i,_)}y=y,h=e.filter.updateFullNode(p,y,l)}else{const y=Fe(n);let _=D_(i,y,t.serverCache);_==null&&t.serverCache.isCompleteForChild(y)&&(_=p.getImmediateChild(y)),_!=null?h=e.filter.updateChild(p,y,_,ht(n),f,l):t.eventCache.getNode().hasChild(y)?h=e.filter.updateChild(p,y,Ne.EMPTY_NODE,ht(n),f,l):h=p,h.isEmpty()&&t.serverCache.isFullyInitialized()&&(u=ih(i,bo(t)),u.isLeafNode()&&(h=e.filter.updateFullNode(h,u,l)))}return u=t.serverCache.isFullyInitialized()||sh(i,Ke())!=null,Oc(t,h,u,e.filter.filtersNodes())}}/**
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
 */class g5{constructor(t,n){this.query_=t,this.eventRegistrations_=[];const i=this.query_._queryParams,o=new E_(i.getIndex()),l=M3(i);this.processor_=l5(l);const u=n.serverCache,f=n.eventCache,p=o.updateFullNode(Ne.EMPTY_NODE,u.getNode(),null),h=l.updateFullNode(Ne.EMPTY_NODE,f.getNode(),null),y=new ws(p,u.isFullyInitialized(),o.filtersNodes()),_=new ws(h,f.isFullyInitialized(),l.filtersNodes());this.viewCache_=Qh(_,y),this.eventGenerator_=new B3(this.query_)}get query(){return this.query_}}function y5(e){return e.viewCache_.serverCache.getNode()}function v5(e){return rh(e.viewCache_)}function _5(e,t){const n=bo(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!We(t)&&!n.getImmediateChild(Fe(t)).isEmpty())?n.getChild(t):null}function rE(e){return e.eventRegistrations_.length===0}function b5(e,t){e.eventRegistrations_.push(t)}function iE(e,t,n){const i=[];if(n){he(t==null,"A cancel should cancel all event registrations.");const o=e.query._path;e.eventRegistrations_.forEach(l=>{const u=l.createCancelEvent(n,o);u&&i.push(u)})}if(t){let o=[];for(let l=0;l<e.eventRegistrations_.length;++l){const u=e.eventRegistrations_[l];if(!u.matches(t))o.push(u);else if(t.hasAnyCallback()){o=o.concat(e.eventRegistrations_.slice(l+1));break}}e.eventRegistrations_=o}else e.eventRegistrations_=[];return i}function sE(e,t,n,i){t.type===fr.MERGE&&t.source.queryId!==null&&(he(bo(e.viewCache_),"We should always have a full cache before handling merges"),he(rh(e.viewCache_),"Missing event cache, even though we have a server cache"));const o=e.viewCache_,l=u5(e.processor_,o,t,n,i);return c5(e.processor_,l.viewCache),he(l.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=l.viewCache,HA(e,l.changes,l.viewCache.eventCache.getNode(),null)}function S5(e,t){const n=e.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(At,(l,u)=>{i.push(Ua(l,u))}),n.isFullyInitialized()&&i.push(NA(n.getNode())),HA(e,i,n.getNode(),t)}function HA(e,t,n,i){const o=i?[i]:e.eventRegistrations_;return H3(e.eventGenerator_,t,n,o)}/**
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
 */let ah;class FA{constructor(){this.views=new Map}}function x5(e){he(!ah,"__referenceConstructor has already been defined"),ah=e}function w5(){return he(ah,"Reference.ts has not been loaded"),ah}function E5(e){return e.views.size===0}function N_(e,t,n,i){const o=t.source.queryId;if(o!==null){const l=e.views.get(o);return he(l!=null,"SyncTree gave us an op for an invalid query."),sE(l,t,n,i)}else{let l=[];for(const u of e.views.values())l=l.concat(sE(u,t,n,i));return l}}function qA(e,t,n,i,o){const l=t._queryIdentifier,u=e.views.get(l);if(!u){let f=ih(n,o?i:null),p=!1;f?p=!0:i instanceof Ne?(f=I_(n,i),p=!1):(f=Ne.EMPTY_NODE,p=!1);const h=Qh(new ws(f,p,!1),new ws(i,o,!1));return new g5(t,h)}return u}function C5(e,t,n,i,o,l){const u=qA(e,t,i,o,l);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,u),b5(u,n),S5(u,n)}function T5(e,t,n,i){const o=t._queryIdentifier,l=[];let u=[];const f=Es(e);if(o==="default")for(const[p,h]of e.views.entries())u=u.concat(iE(h,n,i)),rE(h)&&(e.views.delete(p),h.query._queryParams.loadsAllData()||l.push(h.query));else{const p=e.views.get(o);p&&(u=u.concat(iE(p,n,i)),rE(p)&&(e.views.delete(o),p.query._queryParams.loadsAllData()||l.push(p.query)))}return f&&!Es(e)&&l.push(new(w5())(t._repo,t._path)),{removed:l,events:u}}function VA(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function ps(e,t){let n=null;for(const i of e.views.values())n=n||_5(i,t);return n}function GA(e,t){if(t._queryParams.loadsAllData())return Xh(e);{const i=t._queryIdentifier;return e.views.get(i)}}function WA(e,t){return GA(e,t)!=null}function Es(e){return Xh(e)!=null}function Xh(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}/**
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
 */let lh;function R5(e){he(!lh,"__referenceConstructor has already been defined"),lh=e}function A5(){return he(lh,"Reference.ts has not been loaded"),lh}let I5=1;class oE{constructor(t){this.listenProvider_=t,this.syncPointTree_=new ft(null),this.pendingWriteTree_=i5(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function YA(e,t,n,i,o){return G3(e.pendingWriteTree_,t,n,i,o),o?el(e,new _o(T_(),t,n)):[]}function D5(e,t,n,i){W3(e.pendingWriteTree_,t,n,i);const o=ft.fromObject(n);return el(e,new za(T_(),t,o))}function cs(e,t,n=!1){const i=Y3(e.pendingWriteTree_,t);if(Q3(e.pendingWriteTree_,t)){let l=new ft(null);return i.snap!=null?l=l.set(Ke(),!0):nn(i.children,u=>{l=l.set(new ct(u),!0)}),el(e,new nh(i.path,l,n))}else return[]}function xu(e,t,n){return el(e,new _o(R_(),t,n))}function k5(e,t,n){const i=ft.fromObject(n);return el(e,new za(R_(),t,i))}function N5(e,t){return el(e,new nu(R_(),t))}function O5(e,t,n){const i=M_(e,n);if(i){const o=L_(i),l=o.path,u=o.queryId,f=un(l,t),p=new nu(A_(u),f);return j_(e,l,p)}else return[]}function ch(e,t,n,i,o=!1){const l=t._path,u=e.syncPointTree_.get(l);let f=[];if(u&&(t._queryIdentifier==="default"||WA(u,t))){const p=T5(u,t,n,i);E5(u)&&(e.syncPointTree_=e.syncPointTree_.remove(l));const h=p.removed;if(f=p.events,!o){const y=h.findIndex(v=>v._queryParams.loadsAllData())!==-1,_=e.syncPointTree_.findOnPath(l,(v,S)=>Es(S));if(y&&!_){const v=e.syncPointTree_.subtree(l);if(!v.isEmpty()){const S=j5(v);for(let x=0;x<S.length;++x){const D=S[x],T=D.query,k=ZA(e,D);e.listenProvider_.startListening(Lc(T),ru(e,T),k.hashFn,k.onComplete)}}}!_&&h.length>0&&!i&&(y?e.listenProvider_.stopListening(Lc(t),null):h.forEach(v=>{const S=e.queryToTagMap.get(Zh(v));e.listenProvider_.stopListening(Lc(v),S)}))}P5(e,h)}return f}function QA(e,t,n,i){const o=M_(e,i);if(o!=null){const l=L_(o),u=l.path,f=l.queryId,p=un(u,t),h=new _o(A_(f),p,n);return j_(e,u,h)}else return[]}function M5(e,t,n,i){const o=M_(e,i);if(o){const l=L_(o),u=l.path,f=l.queryId,p=un(u,t),h=ft.fromObject(n),y=new za(A_(f),p,h);return j_(e,u,y)}else return[]}function cv(e,t,n,i=!1){const o=t._path;let l=null,u=!1;e.syncPointTree_.foreachOnPath(o,(v,S)=>{const x=un(v,o);l=l||ps(S,x),u=u||Es(S)});let f=e.syncPointTree_.get(o);f?(u=u||Es(f),l=l||ps(f,Ke())):(f=new FA,e.syncPointTree_=e.syncPointTree_.set(o,f));let p;l!=null?p=!0:(p=!1,l=Ne.EMPTY_NODE,e.syncPointTree_.subtree(o).foreachChild((S,x)=>{const D=ps(x,Ke());D&&(l=l.updateImmediateChild(S,D))}));const h=WA(f,t);if(!h&&!t._queryParams.loadsAllData()){const v=Zh(t);he(!e.queryToTagMap.has(v),"View does not exist, but we have a tag");const S=$5();e.queryToTagMap.set(v,S),e.tagToQueryMap.set(S,v)}const y=Kh(e.pendingWriteTree_,o);let _=C5(f,t,n,y,l,p);if(!h&&!u&&!i){const v=GA(f,t);_=_.concat(U5(e,t,v))}return _}function O_(e,t,n){const o=e.pendingWriteTree_,l=e.syncPointTree_.findOnPath(t,(u,f)=>{const p=un(u,t),h=ps(f,p);if(h)return h});return PA(o,t,l,n,!0)}function L5(e,t){const n=t._path;let i=null;e.syncPointTree_.foreachOnPath(n,(h,y)=>{const _=un(h,n);i=i||ps(y,_)});let o=e.syncPointTree_.get(n);o?i=i||ps(o,Ke()):(o=new FA,e.syncPointTree_=e.syncPointTree_.set(n,o));const l=i!=null,u=l?new ws(i,!0,!1):null,f=Kh(e.pendingWriteTree_,t._path),p=qA(o,t,f,l?u.getNode():Ne.EMPTY_NODE,l);return v5(p)}function el(e,t){return KA(t,e.syncPointTree_,null,Kh(e.pendingWriteTree_,Ke()))}function KA(e,t,n,i){if(We(e.path))return XA(e,t,n,i);{const o=t.get(Ke());n==null&&o!=null&&(n=ps(o,Ke()));let l=[];const u=Fe(e.path),f=e.operationForChild(u),p=t.children.get(u);if(p&&f){const h=n?n.getImmediateChild(u):null,y=$A(i,u);l=l.concat(KA(f,p,h,y))}return o&&(l=l.concat(N_(o,e,i,n))),l}}function XA(e,t,n,i){const o=t.get(Ke());n==null&&o!=null&&(n=ps(o,Ke()));let l=[];return t.children.inorderTraversal((u,f)=>{const p=n?n.getImmediateChild(u):null,h=$A(i,u),y=e.operationForChild(u);y&&(l=l.concat(XA(y,f,p,h)))}),o&&(l=l.concat(N_(o,e,i,n))),l}function ZA(e,t){const n=t.query,i=ru(e,n);return{hashFn:()=>(y5(t)||Ne.EMPTY_NODE).hash(),onComplete:o=>{if(o==="ok")return i?O5(e,n._path,i):N5(e,n._path);{const l=N$(o,n);return ch(e,n,null,l)}}}}function ru(e,t){const n=Zh(t);return e.queryToTagMap.get(n)}function Zh(e){return e._path.toString()+"$"+e._queryIdentifier}function M_(e,t){return e.tagToQueryMap.get(t)}function L_(e){const t=e.indexOf("$");return he(t!==-1&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ct(e.substr(0,t))}}function j_(e,t,n){const i=e.syncPointTree_.get(t);he(i,"Missing sync point for query tag that we're tracking");const o=Kh(e.pendingWriteTree_,t);return N_(i,n,o,null)}function j5(e){return e.fold((t,n,i)=>{if(n&&Es(n))return[Xh(n)];{let o=[];return n&&(o=VA(n)),nn(i,(l,u)=>{o=o.concat(u)}),o}})}function Lc(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(A5())(e._repo,e._path):e}function P5(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const o=Zh(i),l=e.queryToTagMap.get(o);e.queryToTagMap.delete(o),e.tagToQueryMap.delete(l)}}}function $5(){return I5++}function U5(e,t,n){const i=t._path,o=ru(e,t),l=ZA(e,n),u=e.listenProvider_.startListening(Lc(t),o,l.hashFn,l.onComplete),f=e.syncPointTree_.subtree(i);if(o)he(!Es(f.value),"If we're adding a query, it shouldn't be shadowed");else{const p=f.fold((h,y,_)=>{if(!We(h)&&y&&Es(y))return[Xh(y).query];{let v=[];return y&&(v=v.concat(VA(y).map(S=>S.query))),nn(_,(S,x)=>{v=v.concat(x)}),v}});for(let h=0;h<p.length;++h){const y=p[h];e.listenProvider_.stopListening(Lc(y),ru(e,y))}}return u}/**
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
 */class P_{constructor(t){this.node_=t}getImmediateChild(t){const n=this.node_.getImmediateChild(t);return new P_(n)}node(){return this.node_}}class $_{constructor(t,n){this.syncTree_=t,this.path_=n}getImmediateChild(t){const n=Rt(this.path_,t);return new $_(this.syncTree_,n)}node(){return O_(this.syncTree_,this.path_)}}const z5=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},aE=function(e,t,n){if(!e||typeof e!="object")return e;if(he(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return B5(e[".sv"],t,n);if(typeof e[".sv"]=="object")return H5(e[".sv"],t);he(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},B5=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:he(!1,"Unexpected server value: "+e)}},H5=function(e,t,n){e.hasOwnProperty("increment")||he(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;typeof i!="number"&&he(!1,"Unexpected increment value: "+i);const o=t.node();if(he(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return i;const u=o.getValue();return typeof u!="number"?i:u+i},JA=function(e,t,n,i){return U_(t,new $_(n,e),i)},eI=function(e,t,n){return U_(e,new P_(t),n)};function U_(e,t,n){const i=e.getPriority().val(),o=aE(i,t.getImmediateChild(".priority"),n);let l;if(e.isLeafNode()){const u=e,f=aE(u.getValue(),t,n);return f!==u.getValue()||o!==u.getPriority().val()?new Ht(f,Pt(o)):e}else{const u=e;return l=u,o!==u.getPriority().val()&&(l=l.updatePriority(new Ht(o))),u.forEachChild(At,(f,p)=>{const h=U_(p,t.getImmediateChild(f),n);h!==p&&(l=l.updateImmediateChild(f,h))}),l}}/**
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
 */class z_{constructor(t="",n=null,i={children:{},childCount:0}){this.name=t,this.parent=n,this.node=i}}function B_(e,t){let n=t instanceof ct?t:new ct(t),i=e,o=Fe(n);for(;o!==null;){const l=La(i.node.children,o)||{children:{},childCount:0};i=new z_(o,i,l),n=ht(n),o=Fe(n)}return i}function tl(e){return e.node.value}function tI(e,t){e.node.value=t,uv(e)}function nI(e){return e.node.childCount>0}function F5(e){return tl(e)===void 0&&!nI(e)}function Jh(e,t){nn(e.node.children,(n,i)=>{t(new z_(n,e,i))})}function rI(e,t,n,i){n&&t(e),Jh(e,o=>{rI(o,t,!0)})}function q5(e,t,n){let i=e.parent;for(;i!==null;){if(t(i))return!0;i=i.parent}return!1}function wu(e){return new ct(e.parent===null?e.name:wu(e.parent)+"/"+e.name)}function uv(e){e.parent!==null&&V5(e.parent,e.name,e)}function V5(e,t,n){const i=F5(n),o=Pr(e.node.children,t);i&&o?(delete e.node.children[t],e.node.childCount--,uv(e)):!i&&!o&&(e.node.children[t]=n.node,e.node.childCount++,uv(e))}/**
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
 */const G5=/[\[\].#$\/\u0000-\u001F\u007F]/,W5=/[\[\].#$\u0000-\u001F\u007F]/,ry=10*1024*1024,H_=function(e){return typeof e=="string"&&e.length!==0&&!G5.test(e)},iI=function(e){return typeof e=="string"&&e.length!==0&&!W5.test(e)},Y5=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),iI(e)},Q5=function(e){return e===null||typeof e=="string"||typeof e=="number"&&!m_(e)||e&&typeof e=="object"&&Pr(e,".sv")},sI=function(e,t,n,i){i&&t===void 0||ep($h(e,"value"),t,n)},ep=function(e,t,n){const i=n instanceof ct?new f3(n,e):n;if(t===void 0)throw new Error(e+"contains undefined "+ro(i));if(typeof t=="function")throw new Error(e+"contains a function "+ro(i)+" with contents = "+t.toString());if(m_(t))throw new Error(e+"contains "+t.toString()+" "+ro(i));if(typeof t=="string"&&t.length>ry/3&&Uh(t)>ry)throw new Error(e+"contains a string greater than "+ry+" utf8 bytes "+ro(i)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let o=!1,l=!1;if(nn(t,(u,f)=>{if(u===".value")o=!0;else if(u!==".priority"&&u!==".sv"&&(l=!0,!H_(u)))throw new Error(e+" contains an invalid key ("+u+") "+ro(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);h3(i,u),ep(e,f,i),p3(i)}),o&&l)throw new Error(e+' contains ".value" child '+ro(i)+" in addition to actual children.")}},K5=function(e,t){let n,i;for(n=0;n<t.length;n++){i=t[n];const l=Zc(i);for(let u=0;u<l.length;u++)if(!(l[u]===".priority"&&u===l.length-1)){if(!H_(l[u]))throw new Error(e+"contains an invalid key ("+l[u]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}t.sort(d3);let o=null;for(n=0;n<t.length;n++){if(i=t[n],o!==null&&Xn(o,i))throw new Error(e+"contains a path "+o.toString()+" that is ancestor of another path "+i.toString());o=i}},X5=function(e,t,n,i){const o=$h(e,"values");if(!(t&&typeof t=="object")||Array.isArray(t))throw new Error(o+" must be an object containing the children to replace.");const l=[];nn(t,(u,f)=>{const p=new ct(u);if(ep(o,f,Rt(n,p)),b_(p)===".priority"&&!Q5(f))throw new Error(o+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");l.push(p)}),K5(o,l)},oI=function(e,t,n,i){if(!iI(n))throw new Error($h(e,t)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Z5=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),oI(e,t,n)},F_=function(e,t){if(Fe(t)===".info")throw new Error(e+" failed = Can't modify data under /.info/")},J5=function(e,t){const n=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!H_(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Y5(n))throw new Error($h(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class eU{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function tp(e,t){let n=null;for(let i=0;i<t.length;i++){const o=t[i],l=o.getPath();n!==null&&!S_(l,n.path)&&(e.eventLists_.push(n),n=null),n===null&&(n={events:[],path:l}),n.events.push(o)}n&&e.eventLists_.push(n)}function aI(e,t,n){tp(e,n),lI(e,i=>S_(i,t))}function tr(e,t,n){tp(e,n),lI(e,i=>Xn(i,t)||Xn(t,i))}function lI(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const o=e.eventLists_[i];if(o){const l=o.path;t(l)?(tU(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function tU(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(n!==null){e.events[t]=null;const i=n.getEventRunner();kc&&Jt("event: "+n.toString()),Ja(i)}}}/**
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
 */const nU="repo_interrupt",rU=25;class iU{constructor(t,n,i,o){this.repoInfo_=t,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new eU,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=th(),this.transactionQueueTree_=new z_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function sU(e,t,n){if(e.stats_=v_(e.repoInfo_),e.forceRestClient_||j$())e.server_=new eh(e.repoInfo_,(i,o,l,u)=>{lE(e,i,o,l,u)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>cE(e,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{$t(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new gi(e.repoInfo_,t,(i,o,l,u)=>{lE(e,i,o,l,u)},i=>{cE(e,i)},i=>{oU(e,i)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(i=>{e.server_.refreshAuthToken(i)}),e.appCheckProvider_.addTokenChangeListener(i=>{e.server_.refreshAppCheckToken(i.token)}),e.statsReporter_=B$(e.repoInfo_,()=>new z3(e.stats_,e.server_)),e.infoData_=new L3,e.infoSyncTree_=new oE({startListening:(i,o,l,u)=>{let f=[];const p=e.infoData_.getNode(i._path);return p.isEmpty()||(f=xu(e.infoSyncTree_,i._path,p),setTimeout(()=>{u("ok")},0)),f},stopListening:()=>{}}),q_(e,"connected",!1),e.serverSyncTree_=new oE({startListening:(i,o,l,u)=>(e.server_.listen(i,l,o,(f,p)=>{const h=u(f,p);tr(e.eventQueue_,i._path,h)}),[]),stopListening:(i,o)=>{e.server_.unlisten(i,o)}})}function cI(e){const n=e.infoData_.getNode(new ct(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function np(e){return z5({timestamp:cI(e)})}function lE(e,t,n,i,o){e.dataUpdateCount++;const l=new ct(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let u=[];if(o)if(i){const p=Ff(n,h=>Pt(h));u=M5(e.serverSyncTree_,l,p,o)}else{const p=Pt(n);u=QA(e.serverSyncTree_,l,p,o)}else if(i){const p=Ff(n,h=>Pt(h));u=k5(e.serverSyncTree_,l,p)}else{const p=Pt(n);u=xu(e.serverSyncTree_,l,p)}let f=l;u.length>0&&(f=Ha(e,l)),tr(e.eventQueue_,f,u)}function cE(e,t){q_(e,"connected",t),t===!1&&uU(e)}function oU(e,t){nn(t,(n,i)=>{q_(e,n,i)})}function q_(e,t,n){const i=new ct("/.info/"+t),o=Pt(n);e.infoData_.updateSnapshot(i,o);const l=xu(e.infoSyncTree_,i,o);tr(e.eventQueue_,i,l)}function V_(e){return e.nextWriteId_++}function aU(e,t,n){const i=L5(e.serverSyncTree_,t);return i!=null?Promise.resolve(i):e.server_.get(t).then(o=>{const l=Pt(o).withIndex(t._queryParams.getIndex());cv(e.serverSyncTree_,t,n,!0);let u;if(t._queryParams.loadsAllData())u=xu(e.serverSyncTree_,t._path,l);else{const f=ru(e.serverSyncTree_,t);u=QA(e.serverSyncTree_,t._path,l,f)}return tr(e.eventQueue_,t._path,u),ch(e.serverSyncTree_,t,n,null,!0),l},o=>(Eu(e,"get for query "+$t(t)+" failed: "+o),Promise.reject(new Error(o))))}function lU(e,t,n,i,o){Eu(e,"set",{path:t.toString(),value:n,priority:i});const l=np(e),u=Pt(n,i),f=O_(e.serverSyncTree_,t),p=eI(u,f,l),h=V_(e),y=YA(e.serverSyncTree_,t,p,h,!0);tp(e.eventQueue_,y),e.server_.put(t.toString(),u.val(!0),(v,S)=>{const x=v==="ok";x||dn("set at "+t+" failed: "+v);const D=cs(e.serverSyncTree_,h,!x);tr(e.eventQueue_,t,D),dv(e,o,v,S)});const _=W_(e,t);Ha(e,_),tr(e.eventQueue_,_,[])}function cU(e,t,n,i){Eu(e,"update",{path:t.toString(),value:n});let o=!0;const l=np(e),u={};if(nn(n,(f,p)=>{o=!1,u[f]=JA(Rt(t,f),Pt(p),e.serverSyncTree_,l)}),o)Jt("update() called with empty data.  Don't do anything."),dv(e,i,"ok",void 0);else{const f=V_(e),p=D5(e.serverSyncTree_,t,u,f);tp(e.eventQueue_,p),e.server_.merge(t.toString(),n,(h,y)=>{const _=h==="ok";_||dn("update at "+t+" failed: "+h);const v=cs(e.serverSyncTree_,f,!_),S=v.length>0?Ha(e,t):t;tr(e.eventQueue_,S,v),dv(e,i,h,y)}),nn(n,h=>{const y=W_(e,Rt(t,h));Ha(e,y)}),tr(e.eventQueue_,t,[])}}function uU(e){Eu(e,"onDisconnectEvents");const t=np(e),n=th();rv(e.onDisconnect_,Ke(),(o,l)=>{const u=JA(o,l,e.serverSyncTree_,t);OA(n,o,u)});let i=[];rv(n,Ke(),(o,l)=>{i=i.concat(xu(e.serverSyncTree_,o,l));const u=W_(e,o);Ha(e,u)}),e.onDisconnect_=th(),tr(e.eventQueue_,Ke(),i)}function dU(e,t,n){let i;Fe(t._path)===".info"?i=cv(e.infoSyncTree_,t,n):i=cv(e.serverSyncTree_,t,n),aI(e.eventQueue_,t._path,i)}function uE(e,t,n){let i;Fe(t._path)===".info"?i=ch(e.infoSyncTree_,t,n):i=ch(e.serverSyncTree_,t,n),aI(e.eventQueue_,t._path,i)}function fU(e){e.persistentConnection_&&e.persistentConnection_.interrupt(nU)}function Eu(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Jt(n,...t)}function dv(e,t,n,i){t&&Ja(()=>{if(n==="ok")t(null);else{const o=(n||"error").toUpperCase();let l=o;i&&(l+=": "+i);const u=new Error(l);u.code=o,t(u)}})}function uI(e,t,n){return O_(e.serverSyncTree_,t,n)||Ne.EMPTY_NODE}function G_(e,t=e.transactionQueueTree_){if(t||rp(e,t),tl(t)){const n=fI(e,t);he(n.length>0,"Sending zero length transaction queue"),n.every(o=>o.status===0)&&hU(e,wu(t),n)}else nI(t)&&Jh(t,n=>{G_(e,n)})}function hU(e,t,n){const i=n.map(h=>h.currentWriteId),o=uI(e,t,i);let l=o;const u=o.hash();for(let h=0;h<n.length;h++){const y=n[h];he(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const _=un(t,y.path);l=l.updateChild(_,y.currentOutputSnapshotRaw)}const f=l.val(!0),p=t;e.server_.put(p.toString(),f,h=>{Eu(e,"transaction put response",{path:p.toString(),status:h});let y=[];if(h==="ok"){const _=[];for(let v=0;v<n.length;v++)n[v].status=2,y=y.concat(cs(e.serverSyncTree_,n[v].currentWriteId)),n[v].onComplete&&_.push(()=>n[v].onComplete(null,!0,n[v].currentOutputSnapshotResolved)),n[v].unwatcher();rp(e,B_(e.transactionQueueTree_,t)),G_(e,e.transactionQueueTree_),tr(e.eventQueue_,t,y);for(let v=0;v<_.length;v++)Ja(_[v])}else{if(h==="datastale")for(let _=0;_<n.length;_++)n[_].status===3?n[_].status=4:n[_].status=0;else{dn("transaction at "+p.toString()+" failed: "+h);for(let _=0;_<n.length;_++)n[_].status=4,n[_].abortReason=h}Ha(e,t)}},u)}function Ha(e,t){const n=dI(e,t),i=wu(n),o=fI(e,n);return pU(e,o,i),i}function pU(e,t,n){if(t.length===0)return;const i=[];let o=[];const u=t.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<t.length;f++){const p=t[f],h=un(n,p.path);let y=!1,_;if(he(h!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)y=!0,_=p.abortReason,o=o.concat(cs(e.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=rU)y=!0,_="maxretry",o=o.concat(cs(e.serverSyncTree_,p.currentWriteId,!0));else{const v=uI(e,p.path,u);p.currentInputSnapshot=v;const S=t[f].update(v.val());if(S!==void 0){ep("transaction failed: Data returned ",S,p.path);let x=Pt(S);typeof S=="object"&&S!=null&&Pr(S,".priority")||(x=x.updatePriority(v.getPriority()));const T=p.currentWriteId,k=np(e),M=eI(x,v,k);p.currentOutputSnapshotRaw=x,p.currentOutputSnapshotResolved=M,p.currentWriteId=V_(e),u.splice(u.indexOf(T),1),o=o.concat(YA(e.serverSyncTree_,p.path,M,p.currentWriteId,p.applyLocally)),o=o.concat(cs(e.serverSyncTree_,T,!0))}else y=!0,_="nodata",o=o.concat(cs(e.serverSyncTree_,p.currentWriteId,!0))}tr(e.eventQueue_,n,o),o=[],y&&(t[f].status=2,(function(v){setTimeout(v,Math.floor(0))})(t[f].unwatcher),t[f].onComplete&&(_==="nodata"?i.push(()=>t[f].onComplete(null,!1,t[f].currentInputSnapshot)):i.push(()=>t[f].onComplete(new Error(_),!1,null))))}rp(e,e.transactionQueueTree_);for(let f=0;f<i.length;f++)Ja(i[f]);G_(e,e.transactionQueueTree_)}function dI(e,t){let n,i=e.transactionQueueTree_;for(n=Fe(t);n!==null&&tl(i)===void 0;)i=B_(i,n),t=ht(t),n=Fe(t);return i}function fI(e,t){const n=[];return hI(e,t,n),n.sort((i,o)=>i.order-o.order),n}function hI(e,t,n){const i=tl(t);if(i)for(let o=0;o<i.length;o++)n.push(i[o]);Jh(t,o=>{hI(e,o,n)})}function rp(e,t){const n=tl(t);if(n){let i=0;for(let o=0;o<n.length;o++)n[o].status!==2&&(n[i]=n[o],i++);n.length=i,tI(t,n.length>0?n:void 0)}Jh(t,i=>{rp(e,i)})}function W_(e,t){const n=wu(dI(e,t)),i=B_(e.transactionQueueTree_,t);return q5(i,o=>{iy(e,o)}),iy(e,i),rI(i,o=>{iy(e,o)}),n}function iy(e,t){const n=tl(t);if(n){const i=[];let o=[],l=-1;for(let u=0;u<n.length;u++)n[u].status===3||(n[u].status===1?(he(l===u-1,"All SENT items should be at beginning of queue."),l=u,n[u].status=3,n[u].abortReason="set"):(he(n[u].status===0,"Unexpected transaction status in abort"),n[u].unwatcher(),o=o.concat(cs(e.serverSyncTree_,n[u].currentWriteId,!0)),n[u].onComplete&&i.push(n[u].onComplete.bind(null,new Error("set"),!1,null))));l===-1?tI(t,void 0):n.length=l+1,tr(e.eventQueue_,wu(t),o);for(let u=0;u<i.length;u++)Ja(i[u])}}/**
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
 */function mU(e){let t="";const n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let o=n[i];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}t+="/"+o}return t}function gU(e){const t={};e.charAt(0)==="?"&&(e=e.substring(1));for(const n of e.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):dn(`Invalid query segment '${n}' in query '${e}'`)}return t}const dE=function(e,t){const n=yU(e),i=n.namespace;n.domain==="firebase.com"&&bi(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&bi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||R$();const o=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new gA(n.host,n.secure,i,o,t,"",i!==n.subdomain),path:new ct(n.pathString)}},yU=function(e){let t="",n="",i="",o="",l="",u=!0,f="https",p=443;if(typeof e=="string"){let h=e.indexOf("//");h>=0&&(f=e.substring(0,h-1),e=e.substring(h+2));let y=e.indexOf("/");y===-1&&(y=e.length);let _=e.indexOf("?");_===-1&&(_=e.length),t=e.substring(0,Math.min(y,_)),y<_&&(o=mU(e.substring(y,_)));const v=gU(e.substring(Math.min(e.length,_)));h=t.indexOf(":"),h>=0?(u=f==="https"||f==="wss",p=parseInt(t.substring(h+1),10)):h=t.length;const S=t.slice(0,h);if(S.toLowerCase()==="localhost")n="localhost";else if(S.split(".").length<=2)n=S;else{const x=t.indexOf(".");i=t.substring(0,x).toLowerCase(),n=t.substring(x+1),l=i}"ns"in v&&(l=v.ns)}return{host:t,port:p,domain:n,subdomain:i,secure:u,scheme:f,pathString:o,namespace:l}};/**
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
 */const fE="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",vU=(function(){let e=0;const t=[];return function(n){const i=n===e;e=n;let o;const l=new Array(8);for(o=7;o>=0;o--)l[o]=fE.charAt(n%64),n=Math.floor(n/64);he(n===0,"Cannot push at time == 0");let u=l.join("");if(i){for(o=11;o>=0&&t[o]===63;o--)t[o]=0;t[o]++}else for(o=0;o<12;o++)t[o]=Math.floor(Math.random()*64);for(o=0;o<12;o++)u+=fE.charAt(t[o]);return he(u.length===20,"nextPushId: Length should be 20."),u}})();/**
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
 */class _U{constructor(t,n,i,o){this.eventType=t,this.eventRegistration=n,this.snapshot=i,this.prevName=o}getPath(){const t=this.snapshot.ref;return this.eventType==="value"?t._path:t.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+$t(this.snapshot.exportVal())}}class bU{constructor(t,n,i){this.eventRegistration=t,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class pI{constructor(t,n){this.snapshotCallback=t,this.cancelCallback=n}onValue(t,n){this.snapshotCallback.call(null,t,n)}onCancel(t){return he(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)}get hasCancelCallback(){return!!this.cancelCallback}matches(t){return this.snapshotCallback===t.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}/**
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
 */class Y_{constructor(t,n,i,o){this._repo=t,this._path=n,this._queryParams=i,this._orderByCalled=o}get key(){return We(this._path)?null:b_(this._path)}get ref(){return new Ci(this._repo,this._path)}get _queryIdentifier(){const t=Kw(this._queryParams),n=g_(t);return n==="{}"?"default":n}get _queryObject(){return Kw(this._queryParams)}isEqual(t){if(t=Gt(t),!(t instanceof Y_))return!1;const n=this._repo===t._repo,i=S_(this._path,t._path),o=this._queryIdentifier===t._queryIdentifier;return n&&i&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+u3(this._path)}}class Ci extends Y_{constructor(t,n){super(t,n,new C_,!1)}get parent(){const t=CA(this._path);return t===null?null:new Ci(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}class iu{constructor(t,n,i){this._node=t,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const n=new ct(t),i=su(this.ref,t);return new iu(this._node.getChild(n),i,At)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,o)=>t(new iu(o,su(this.ref,i),At)))}hasChild(t){const n=new ct(t);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Mn(e,t){return e=Gt(e),e._checkNotDeleted("ref"),t!==void 0?su(e._root,t):e._root}function su(e,t){return e=Gt(e),Fe(e._path)===null?Z5("child","path",t):oI("child","path",t),new Ci(e._repo,Rt(e._path,t))}function SU(e,t){e=Gt(e),F_("push",e._path),sI("push",t,e._path,!0);const n=cI(e._repo),i=vU(n),o=su(e,i),l=su(e,i);let u;return t!=null?u=Q_(l,t).then(()=>l):u=Promise.resolve(l),o.then=u.then.bind(u),o.catch=u.then.bind(u,void 0),o}function mI(e){return F_("remove",e._path),Q_(e,null)}function Q_(e,t){e=Gt(e),F_("set",e._path),sI("set",t,e._path,!1);const n=new hu;return lU(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}function gI(e,t){X5("update",t,e._path);const n=new hu;return cU(e._repo,e._path,t,n.wrapCallback(()=>{})),n.promise}function yI(e){e=Gt(e);const t=new pI(()=>{}),n=new ip(t);return aU(e._repo,e,n).then(i=>new iu(i,new Ci(e._repo,e._path),e._queryParams.getIndex()))}class ip{constructor(t){this.callbackContext=t}respondsTo(t){return t==="value"}createEvent(t,n){const i=n._queryParams.getIndex();return new _U("value",this,new iu(t.snapshotNode,new Ci(n._repo,n._path),i))}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,n){return this.callbackContext.hasCancelCallback?new bU(this,t,n):null}matches(t){return t instanceof ip?!t.callbackContext||!this.callbackContext?!0:t.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function xU(e,t,n,i,o){let l;if(typeof i=="object"&&(l=void 0,o=i),typeof i=="function"&&(l=i),o&&o.onlyOnce){const p=n,h=(y,_)=>{uE(e._repo,e,f),p(y,_)};h.userCallback=n.userCallback,h.context=n.context,n=h}const u=new pI(n,l||void 0),f=new ip(u);return dU(e._repo,e,f),()=>uE(e._repo,e,f)}function Cu(e,t,n,i){return xU(e,"value",t,n,i)}x5(Ci);R5(Ci);/**
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
 */const wU="FIREBASE_DATABASE_EMULATOR_HOST",fv={};let EU=!1;function CU(e,t,n,i){const o=t.lastIndexOf(":"),l=t.substring(0,o),u=Wa(l);e.repoInfo_=new gA(t,u,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0,n),i&&(e.authTokenProvider_=i)}function TU(e,t,n,i,o){let l=i||e.options.databaseURL;l===void 0&&(e.options.projectId||bi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Jt("Using default host for project ",e.options.projectId),l=`${e.options.projectId}-default-rtdb.firebaseio.com`);let u=dE(l,o),f=u.repoInfo,p;typeof process<"u"&&Nw&&(p=Nw[wU]),p?(l=`http://${p}?ns=${f.namespace}`,u=dE(l,o),f=u.repoInfo):u.repoInfo.secure;const h=new $$(e.name,e.options,t);J5("Invalid Firebase Database URL",u),We(u.path)||bi("Database URL must point to the root of a Firebase Database (not including a child path).");const y=AU(f,e,h,new P$(e,n));return new IU(y,e)}function RU(e,t){const n=fv[t];(!n||n[e.key]!==e)&&bi(`Database ${t}(${e.repoInfo_}) has already been deleted.`),fU(e),delete n[e.key]}function AU(e,t,n,i){let o=fv[t.name];o||(o={},fv[t.name]=o);let l=o[e.toURLString()];return l&&bi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new iU(e,EU,n,i),o[e.toURLString()]=l,l}class IU{constructor(t,n){this._repoInternal=t,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(sU(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ci(this._repo,Ke())),this._rootInternal}_delete(){return this._rootInternal!==null&&(RU(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&bi("Cannot call "+t+" on a deleted database.")}}function DU(e=n_(),t){const n=Qa(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const i=bj("database");i&&kU(n,...i)}return n}function kU(e,t,n,i={}){e=Gt(e),e._checkNotDeleted("useEmulator");const o=`${t}:${n}`,l=e._repoInternal;if(e._instanceStarted){if(o===e._repoInternal.repoInfo_.host&&ho(i,l.repoInfo_.emulatorOptions))return;bi("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let u;if(l.repoInfo_.nodeAdmin)i.mockUserToken&&bi('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new Cf(Cf.OWNER);else if(i.mockUserToken){const f=typeof i.mockUserToken=="string"?i.mockUserToken:Sj(i.mockUserToken,e.app.options.projectId);u=new Cf(f)}Wa(t)&&(aR(t),lR("Database",!0)),CU(l,o,i,u)}/**
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
 */function NU(e){S$(Ka),Mr(new _r("database",(t,{instanceIdentifier:n})=>{const i=t.getProvider("app").getImmediate(),o=t.getProvider("auth-internal"),l=t.getProvider("app-check-internal");return TU(i,o,l,n)},"PUBLIC").setMultipleInstances(!0)),Zn(Ow,Mw,e),Zn(Ow,Mw,"esm2020")}gi.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)};gi.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};NU();const OU=10,MU=e=>e.occupancy<e.max_occupancy,LU=e=>e.waiting_count>=OU,jU=e=>MU(e)?"free":LU(e)?"full":"waitlist",fn={7248695:{location:"New York",timezone:"America/New_York"},7248663:{location:"London",timezone:"Europe/London"}},vI="7248695",PU=(e,t)=>{if(!t.timeRanges)return!0;const n=fn[t.studioId]?.timezone;if(!n)return!1;const i=new Date(e.starts_at),o=new Date(i.toLocaleString("en-US",{timeZone:"UTC"})),l=new Date(i.toLocaleString("en-US",{timeZone:n})),u=o.getTime()-l.getTime();i.setTime(i.getTime()-u);const f=t.timeRanges[i.getDay()];if(!f)return!1;const p=i.getHours()*60+i.getMinutes();return f.startMin<=p&&f.endMin>=p},_I=(e,t)=>{const n=[];return(t.maxStatus==="free"&&e.status!=="free"||t.maxStatus==="waitlist"&&e.status==="full")&&n.push("status"),t.disciplines&&t.disciplines.map(String).indexOf(e.disciplineId)===-1&&n.push("discipline"),t.instructors&&!e.instructors.some(o=>t.instructors.indexOf(o.id)!==-1)&&n.push("instructor"),PU(e,t)||n.push("time"),n.length===0?{type:"match"}:n.length===1?{type:"near-miss",reason:n[0]}:{type:"skipped"}},ou="https://schedule.studio.onepeloton.com/api/v2",K_="https://cors.abbondanzo.workers.dev",sy=e=>({"Teamup-Request-Mode":"customer","Teamup-Provider-ID":e}),$U=e=>{const{localStartsAtGte:t=new Date,localStartsAtLte:n,fields:i,expand:o,corsProxy:l=!1}=e,u=l?`${K_}/${ou}`:ou,f=new URLSearchParams({local_starts_at_gte:t.toISOString().replace("Z",""),page_size:"500",sort:"start"});return i&&i.length>0&&f.set("fields",i.join(",")),o&&o.length>0&&f.set("expand",o.join(",")),n&&f.set("local_starts_at_lte",n.toISOString().replace("Z","")),`${u}/events?${f}`},hE=(e,t=!1)=>{const{search:n}=new URL(e);return`${t?`${K_}/${ou}`:ou}/events${n}`},UU=async(e,t,n=!1)=>{const i=await t(e);if(!i.next)return i.results;const o=[...i.results];let l=hE(i.next,n);for(;l;){const u=await t(l);o.push(...u.results),l=u.next?hE(u.next,n):null}return o},zU=["free","waitlist","full"],BU=e=>zU.indexOf(e)!==-1,Ti={alerts:e=>`alerts/${e}`,alert:(e,t)=>`alerts/${e}/${t}`,alertPreferences:e=>`alertPreferences/${e}`,messagingTokens:e=>`messagingTokens/${e}`,messagingToken:(e,t)=>`messagingTokens/${e}/${t}`,classHistory:e=>`classHistory/${e}`,classSnapshot:(e,t)=>`classHistory/${e}/${t}`,selloutStats:e=>`selloutStats/${e}`,selloutRecord:(e,t)=>`selloutStats/${e}/${t}`},rs=e=>e!=null,uh={startMin:0,endMin:1440},HU={startMin:420,endMin:1140},hv=uh,pv=e=>e.startMin===uh.startMin&&e.endMin===uh.endMin,an=Fh(()=>DU(Ac)),bI=async(e,t)=>{const n=an;if(!n)throw new Error("No Firebase database connection to use");const i=Mn(n,Ti.messagingToken(e,t));await mI(i)},pE=async(e,t)=>{const n=an;if(!n)throw new Error("No Firebase database connection to use");const i=Mn(n,Ti.messagingToken(e,t)),o={timestamp:new Date().getTime(),userAgent:navigator.userAgent};await Q_(i,o)},FU=({children:e})=>{const[t,n]=E.useState();E.useEffect(()=>{if(ba){const u=_6(ba,f=>{console.log("[MessagingProvider] Received message ",f);const p=f.notification?.title??f.data?.title,h=f.notification?.body??f.data?.body;p&&new Notification(p,{body:h})});return()=>{u()}}return()=>{}},[]);const i=Je(yu);E.useEffect(()=>{ba&&i&&yw().then(u=>(n(u),pE(i,u))).catch(u=>{Or(u)})},[i]);const o=E.useCallback(()=>{ba&&i&&yw().then(u=>(n(u),pE(i,u))).catch(u=>{Or(u)})},[i]);E.useEffect(()=>{const u=()=>{document.visibilityState==="visible"&&o()};return document.addEventListener("visibilitychange",u),()=>document.removeEventListener("visibilitychange",u)},[o]);const l=E.useCallback(async()=>{t&&i&&(await bI(i,t),n(void 0))},[t,i]);return g.jsx(vu.Provider,{value:{token:t,refreshToken:o,deleteToken:l},children:e})},X_=60,Z_=e=>e.session.state!=="fulfilled"?!1:e.session.data?.isAdmin===!0,tt={CLASS_LIST:"/class-list",ABOUT:"/about",SIGN_IN:"/sign-in",ALERTS:"/alerts",ALERTS_EDITOR:"/alerts/edit",ALERTS_SIMULATION:"/alerts/:alertId/test",STATS:"/stats",WAITLIST_ALERT:"/waitlist-alert"},qU=e=>`/alerts/${e}/test`,SI=({size:e=22})=>g.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[g.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M 7.556 3.681 C 8.185 3.199 8.927 2.837 9.796 2.612 C 9.786 2.524 9.781 2.435 9.781 2.345 C 9.781 1.089 10.8 0.072 12.055 0.072 C 13.311 0.072 14.328 1.089 14.328 2.345 C 14.328 2.435 14.323 2.524 14.313 2.612 C 15.181 2.837 15.925 3.199 16.553 3.681 C 17.662 4.533 18.304 5.677 18.683 6.817 C 19.062 7.948 19.198 9.126 19.264 10.119 C 19.29 10.523 19.308 10.91 19.321 11.252 L 19.331 11.482 C 19.349 11.893 19.368 12.199 19.398 12.425 C 19.62 14.086 19.895 15.252 20.289 16.183 C 20.673 17.094 21.187 17.828 21.952 18.592 C 22.277 18.917 22.374 19.406 22.198 19.831 C 22.023 20.256 21.609 20.532 21.148 20.532 L 14.025 20.532 C 14.218 20.867 14.328 21.255 14.328 21.668 C 14.328 22.925 13.311 23.943 12.055 23.943 C 10.8 23.943 9.781 22.925 9.781 21.668 C 9.781 21.255 9.892 20.867 10.086 20.532 L 2.961 20.532 C 2.502 20.532 2.087 20.256 1.911 19.831 C 1.735 19.406 1.832 18.917 2.157 18.592 C 2.923 17.826 3.437 17.098 3.819 16.19 C 4.213 15.262 4.488 14.099 4.711 12.425 C 4.742 12.199 4.76 11.893 4.777 11.482 L 4.787 11.252 C 4.802 10.91 4.818 10.523 4.844 10.119 C 4.911 9.126 5.048 7.948 5.424 6.817 C 5.805 5.677 6.447 4.533 7.556 3.681 Z M 5.312 18.259 C 5.537 17.889 5.736 17.497 5.914 17.075 C 6.421 15.879 6.73 14.485 6.965 12.727 C 7.011 12.384 7.032 11.98 7.049 11.581 L 7.06 11.337 C 7.074 10.996 7.089 10.644 7.113 10.272 C 7.175 9.347 7.296 8.394 7.582 7.536 C 7.865 6.686 8.292 5.982 8.941 5.484 C 9.582 4.992 10.546 4.618 12.055 4.618 C 13.564 4.618 14.527 4.992 15.167 5.484 C 15.816 5.982 16.245 6.686 16.528 7.536 C 16.814 8.394 16.934 9.347 16.997 10.272 C 17.021 10.644 17.036 10.996 17.05 11.337 L 17.061 11.581 C 17.077 11.98 17.098 12.384 17.144 12.727 C 17.377 14.475 17.688 15.867 18.194 17.066 C 18.373 17.491 18.573 17.884 18.799 18.259 L 5.312 18.259 Z",fill:"currentColor"}),g.jsx("path",{d:"M 15.285 7.952 L 16.425 5.973 C 16.754 5.392 16.56 4.649 15.98 4.318 C 15.402 3.986 14.657 4.18 14.326 4.761 L 13.179 6.741 C 10.743 5.973 8.016 6.97 6.686 9.274 C 5.838 10.74 5.736 12.426 6.25 13.905 L 8.359 10.243 C 8.359 10.243 8.359 10.243 8.359 10.243 C 8.841 9.403 9.63 8.802 10.568 8.551 C 11.506 8.296 12.482 8.427 13.323 8.917 C 15.056 9.918 15.655 12.146 14.652 13.877 C 13.648 15.611 11.428 16.21 9.689 15.206 L 10.9 13.109 C 11.479 13.44 12.222 13.247 12.555 12.666 C 12.886 12.087 12.69 11.345 12.111 11.013 C 11.532 10.68 10.788 10.877 10.457 11.454 L 6.602 18.144 C 6.269 18.725 6.464 19.466 7.044 19.8 C 7.624 20.13 8.367 19.935 8.699 19.355 L 9.846 17.377 C 12.281 18.144 15.009 17.149 16.338 14.842 C 17.666 12.543 17.165 9.685 15.285 7.952 Z",fill:"currentColor",style:{strokeWidth:"0.5px",stroke:"currentColor"}})]});function xI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wI=xI,EI=new Co("auth","Firebase",xI());/**
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
 */const dh=new e_("@firebase/auth");function VU(e,...t){dh.logLevel<=lt.WARN&&dh.warn(`Auth (${Ka}): ${e}`,...t)}function Tf(e,...t){dh.logLevel<=lt.ERROR&&dh.error(`Auth (${Ka}): ${e}`,...t)}/**
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
 */function nr(e,...t){throw eb(e,...t)}function vr(e,...t){return eb(e,...t)}function J_(e,t,n){const i={...wI(),[t]:n};return new Co("auth","Firebase",i).create(t,{appName:e.name})}function yi(e){return J_(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function GU(e,t,n){const i=n;if(!(t instanceof i))throw i.name!==t.constructor.name&&nr(e,"argument-error"),J_(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function eb(e,...t){if(typeof e!="string"){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return EI.create(e,...t)}function ke(e,t,...n){if(!e)throw eb(t,...n)}function hi(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Tf(t),new Error(t)}function Si(e,t){e||hi(t)}/**
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
 */function mv(){return typeof self<"u"&&self.location?.href||""}function WU(){return mE()==="http:"||mE()==="https:"}function mE(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function YU(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(WU()||Cj()||"connection"in navigator)?navigator.onLine:!0}function QU(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Tu{constructor(t,n){this.shortDelay=t,this.longDelay=n,Si(n>t,"Short delay should be less than long delay!"),this.isMobile=Jv()||cR()}get(){return YU()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function tb(e,t){Si(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class CI{static initialize(t,n,i){this.fetchImpl=t,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;hi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;hi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;hi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const KU={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const XU=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ZU=new Tu(3e4,6e4);function Rs(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function As(e,t,n,i,o={}){return TI(e,o,async()=>{let l={},u={};i&&(t==="GET"?u=i:l={body:JSON.stringify(i)});const f=Ya({key:e.config.apiKey,...u}).slice(1),p=await e._getAdditionalHeaders();p["Content-Type"]="application/json",e.languageCode&&(p["X-Firebase-Locale"]=e.languageCode);const h={method:t,headers:p,...l};return Ej()||(h.referrerPolicy="no-referrer"),e.emulatorConfig&&Wa(e.emulatorConfig.host)&&(h.credentials="include"),CI.fetch()(await RI(e,e.config.apiHost,n,f),h)})}async function TI(e,t,n){e._canInitEmulator=!1;const i={...KU,...t};try{const o=new ez(e),l=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const u=await l.json();if("needConfirmation"in u)throw nf(e,"account-exists-with-different-credential",u);if(l.ok&&!("errorMessage"in u))return u;{const f=l.ok?u.errorMessage:u.error.message,[p,h]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw nf(e,"credential-already-in-use",u);if(p==="EMAIL_EXISTS")throw nf(e,"email-already-in-use",u);if(p==="USER_DISABLED")throw nf(e,"user-disabled",u);const y=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw J_(e,y,h);nr(e,y)}}catch(o){if(o instanceof wi)throw o;nr(e,"network-request-failed",{message:String(o)})}}async function Ru(e,t,n,i,o={}){const l=await As(e,t,n,i,o);return"mfaPendingCredential"in l&&nr(e,"multi-factor-auth-required",{_serverResponse:l}),l}async function RI(e,t,n,i){const o=`${t}${n}?${i}`,l=e,u=l.config.emulator?tb(e.config,o):`${e.config.apiScheme}://${o}`;return XU.includes(n)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(u).toString():u}function JU(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ez{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(vr(this.auth,"network-request-failed")),ZU.get())})}}function nf(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const o=vr(e,t,i);return o.customData._tokenResponse=n,o}function gE(e){return e!==void 0&&e.enterprise!==void 0}class tz{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return JU(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function nz(e,t){return As(e,"GET","/v2/recaptchaConfig",Rs(e,t))}/**
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
 */async function rz(e,t){return As(e,"POST","/v1/accounts:delete",t)}async function fh(e,t){return As(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function jc(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function iz(e,t=!1){const n=Gt(e),i=await n.getIdToken(t),o=nb(i);ke(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,u=l?.sign_in_provider;return{claims:o,token:i,authTime:jc(oy(o.auth_time)),issuedAtTime:jc(oy(o.iat)),expirationTime:jc(oy(o.exp)),signInProvider:u||null,signInSecondFactor:l?.sign_in_second_factor||null}}function oy(e){return Number(e)*1e3}function nb(e){const[t,n,i]=e.split(".");if(t===void 0||n===void 0||i===void 0)return Tf("JWT malformed, contained fewer than 3 sections"),null;try{const o=Hf(n);return o?JSON.parse(o):(Tf("Failed to decode base64 JWT payload"),null)}catch(o){return Tf("Caught error parsing JWT payload as JSON",o?.toString()),null}}function yE(e){const t=nb(e);return ke(t,"internal-error"),ke(typeof t.exp<"u","internal-error"),ke(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function au(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof wi&&sz(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function sz({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class oz{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class gv{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=jc(this.lastLoginAt),this.creationTime=jc(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function hh(e){const t=e.auth,n=await e.getIdToken(),i=await au(e,fh(t,{idToken:n}));ke(i?.users.length,t,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const l=o.providerUserInfo?.length?AI(o.providerUserInfo):[],u=lz(e.providerData,l),f=e.isAnonymous,p=!(e.email&&o.passwordHash)&&!u?.length,h=f?p:!1,y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new gv(o.createdAt,o.lastLoginAt),isAnonymous:h};Object.assign(e,y)}async function az(e){const t=Gt(e);await hh(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function lz(e,t){return[...e.filter(i=>!t.some(o=>o.providerId===i.providerId)),...t]}function AI(e){return e.map(({providerId:t,...n})=>({providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function cz(e,t){const n=await TI(e,{},async()=>{const i=Ya({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:l}=e.config,u=await RI(e,o,"/v1/token",`key=${l}`),f=await e._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:f,body:i};return e.emulatorConfig&&Wa(e.emulatorConfig.host)&&(p.credentials="include"),CI.fetch()(u,p)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function uz(e,t){return As(e,"POST","/v2/accounts:revokeToken",Rs(e,t))}/**
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
 */class Ta{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){ke(t.idToken,"internal-error"),ke(typeof t.idToken<"u","internal-error"),ke(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):yE(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){ke(t.length!==0,"internal-error");const n=yE(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ke(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:i,refreshToken:o,expiresIn:l}=await cz(t,n);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(t,n,i){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(t,n){const{refreshToken:i,accessToken:o,expirationTime:l}=n,u=new Ta;return i&&(ke(typeof i=="string","internal-error",{appName:t}),u.refreshToken=i),o&&(ke(typeof o=="string","internal-error",{appName:t}),u.accessToken=o),l&&(ke(typeof l=="number","internal-error",{appName:t}),u.expirationTime=l),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ta,this.toJSON())}_performRefresh(){return hi("not implemented")}}/**
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
 */function Zi(e,t){ke(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class hr{constructor({uid:t,auth:n,stsTokenManager:i,...o}){this.providerId="firebase",this.proactiveRefresh=new oz(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new gv(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await au(this,this.stsTokenManager.getToken(this.auth,t));return ke(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return iz(this,t)}reload(){return az(this)}_assign(t){this!==t&&(ke(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>({...n})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new hr({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(t){ke(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),n&&await hh(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(On(this.auth.app))return Promise.reject(yi(this.auth));const t=await this.getIdToken();return await au(this,rz(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){const i=n.displayName??void 0,o=n.email??void 0,l=n.phoneNumber??void 0,u=n.photoURL??void 0,f=n.tenantId??void 0,p=n._redirectEventId??void 0,h=n.createdAt??void 0,y=n.lastLoginAt??void 0,{uid:_,emailVerified:v,isAnonymous:S,providerData:x,stsTokenManager:D}=n;ke(_&&D,t,"internal-error");const T=Ta.fromJSON(this.name,D);ke(typeof _=="string",t,"internal-error"),Zi(i,t.name),Zi(o,t.name),ke(typeof v=="boolean",t,"internal-error"),ke(typeof S=="boolean",t,"internal-error"),Zi(l,t.name),Zi(u,t.name),Zi(f,t.name),Zi(p,t.name),Zi(h,t.name),Zi(y,t.name);const k=new hr({uid:_,auth:t,email:o,emailVerified:v,displayName:i,isAnonymous:S,photoURL:u,phoneNumber:l,tenantId:f,stsTokenManager:T,createdAt:h,lastLoginAt:y});return x&&Array.isArray(x)&&(k.providerData=x.map(M=>({...M}))),p&&(k._redirectEventId=p),k}static async _fromIdTokenResponse(t,n,i=!1){const o=new Ta;o.updateFromServerResponse(n);const l=new hr({uid:n.localId,auth:t,stsTokenManager:o,isAnonymous:i});return await hh(l),l}static async _fromGetAccountInfoResponse(t,n,i){const o=n.users[0];ke(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?AI(o.providerUserInfo):[],u=!(o.email&&o.passwordHash)&&!l?.length,f=new Ta;f.updateFromIdToken(i);const p=new hr({uid:o.localId,auth:t,stsTokenManager:f,isAnonymous:u}),h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new gv(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!l?.length};return Object.assign(p,h),p}}/**
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
 */const vE=new Map;function pi(e){Si(e instanceof Function,"Expected a class definition");let t=vE.get(e);return t?(Si(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,vE.set(e,t),t)}/**
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
 */class II{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}II.type="NONE";const _E=II;/**
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
 */function Rf(e,t,n){return`firebase:${e}:${t}:${n}`}class Ra{constructor(t,n,i){this.persistence=t,this.auth=n,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=Rf(this.userKey,o.apiKey,l),this.fullPersistenceKey=Rf("persistence",o.apiKey,l),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await fh(this.auth,{idToken:t}).catch(()=>{});return n?hr._fromGetAccountInfoResponse(this.auth,n,t):null}return hr._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,i="authUser"){if(!n.length)return new Ra(pi(_E),t,i);const o=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let l=o[0]||pi(_E);const u=Rf(i,t.config.apiKey,t.name);let f=null;for(const h of n)try{const y=await h._get(u);if(y){let _;if(typeof y=="string"){const v=await fh(t,{idToken:y}).catch(()=>{});if(!v)break;_=await hr._fromGetAccountInfoResponse(t,v,y)}else _=hr._fromJSON(t,y);h!==l&&(f=_),l=h;break}}catch{}const p=o.filter(h=>h._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Ra(l,t,i):(l=p[0],f&&await l._set(u,f.toJSON()),await Promise.all(n.map(async h=>{if(h!==l)try{await h._remove(u)}catch{}})),new Ra(l,t,i))}}/**
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
 */function bE(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(OI(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(DI(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(LI(t))return"Blackberry";if(jI(t))return"Webos";if(kI(t))return"Safari";if((t.includes("chrome/")||NI(t))&&!t.includes("edge/"))return"Chrome";if(MI(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=e.match(n);if(i?.length===2)return i[1]}return"Other"}function DI(e=hn()){return/firefox\//i.test(e)}function kI(e=hn()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function NI(e=hn()){return/crios\//i.test(e)}function OI(e=hn()){return/iemobile/i.test(e)}function MI(e=hn()){return/android/i.test(e)}function LI(e=hn()){return/blackberry/i.test(e)}function jI(e=hn()){return/webos/i.test(e)}function rb(e=hn()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function dz(e=hn()){return rb(e)&&!!window.navigator?.standalone}function fz(){return Tj()&&document.documentMode===10}function PI(e=hn()){return rb(e)||MI(e)||jI(e)||LI(e)||/windows phone/i.test(e)||OI(e)}/**
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
 */function $I(e,t=[]){let n;switch(e){case"Browser":n=bE(hn());break;case"Worker":n=`${bE(hn())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ka}/${i}`}/**
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
 */class hz{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const i=l=>new Promise((u,f)=>{try{const p=t(l);u(p)}catch(p){f(p)}});i.onAbort=n,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const i of this.queue)await i(t),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
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
 */async function pz(e,t={}){return As(e,"GET","/v2/passwordPolicy",Rs(e,t))}/**
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
 */const mz=6;class gz{constructor(t){const n=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??mz,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=t.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,n),this.validatePasswordCharacterOptions(t,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(t,n){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=t.length>=i),o&&(n.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let o=0;o<t.length;o++)i=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(t,n,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=l))}}/**
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
 */class yz{constructor(t,n,i,o){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new SE(this),this.idTokenSubscription=new SE(this),this.beforeStateQueue=new hz(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=EI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=pi(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Ra.create(this,t),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await fh(this,{idToken:t}),i=await hr._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){if(On(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(u,u))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=this.redirectUser?._redirectEventId,u=i?._redirectEventId,f=await this.tryRedirectSignIn(t);(!l||l===u)&&f?.user&&(i=f.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(l){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ke(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await hh(t)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=QU()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(On(this.app))return Promise.reject(yi(this));const n=t?Gt(t):null;return n&&ke(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&ke(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return On(this.app)?Promise.reject(yi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return On(this.app)?Promise.reject(yi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pi(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await pz(this),n=new gz(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Co("auth","Firebase",t())}onAuthStateChanged(t,n,i){return this.registerStateListener(this.authStateSubscription,t,n,i)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,i){return this.registerStateListener(this.idTokenSubscription,t,n,i)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const i=this.onAuthStateChanged(()=>{i(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await uz(this,i)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(t,n){const i=await this.getOrInitRedirectPersistenceManager(n);return t===null?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&pi(t)||this._popupRedirectResolver;ke(n,this,"argument-error"),this.redirectPersistenceManager=await Ra.create(this,[pi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===t?this._currentUser:this.redirectUser?._redirectEventId===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=this.currentUser?.uid??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,i,o){if(this._deleted)return()=>{};const l=typeof n=="function"?n:n.next.bind(n);let u=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(ke(f,this,"internal-error"),f.then(()=>{u||l(this.currentUser)}),typeof n=="function"){const p=t.addObserver(n,i,o);return()=>{u=!0,p()}}else{const p=t.addObserver(n);return()=>{u=!0,p()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return ke(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=$I(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){if(On(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return t?.error&&VU(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Is(e){return Gt(e)}class SE{constructor(t){this.auth=t,this.observer=null,this.addObserver=Lj(n=>this.observer=n)}get next(){return ke(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let sp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function vz(e){sp=e}function UI(e){return sp.loadJS(e)}function _z(){return sp.recaptchaEnterpriseScript}function bz(){return sp.gapiScript}function Sz(e){return`__${e}${Math.floor(Math.random()*1e6)}`}class xz{constructor(){this.enterprise=new wz}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class wz{ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const Ez="recaptcha-enterprise",zI="NO_RECAPTCHA";class Cz{constructor(t){this.type=Ez,this.auth=Is(t)}async verify(t="verify",n=!1){async function i(l){if(!n){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(u,f)=>{nz(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const h=new tz(p);return l.tenantId==null?l._agentRecaptchaConfig=h:l._tenantRecaptchaConfigs[l.tenantId]=h,u(h.siteKey)}}).catch(p=>{f(p)})})}function o(l,u,f){const p=window.grecaptcha;gE(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:t}).then(h=>{u(h)}).catch(()=>{u(zI)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new xz().execute("siteKey",{action:"verify"}):new Promise((l,u)=>{i(this.auth).then(f=>{if(!n&&gE(window.grecaptcha))o(f,l,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let p=_z();p.length!==0&&(p+=f),UI(p).then(()=>{o(f,l,u)}).catch(h=>{u(h)})}}).catch(f=>{u(f)})})}}async function xE(e,t,n,i=!1,o=!1){const l=new Cz(e);let u;if(o)u=zI;else try{u=await l.verify(n)}catch{u=await l.verify(n,!0)}const f={...t};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const p=f.phoneEnrollmentInfo.phoneNumber,h=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:h,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const p=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return i?Object.assign(f,{captchaResp:u}):Object.assign(f,{captchaResponse:u}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function yv(e,t,n,i,o){if(e._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await xE(e,t,n,n==="getOobCode");return i(e,l)}else return i(e,t).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await xE(e,t,n,n==="getOobCode");return i(e,u)}else return Promise.reject(l)})}/**
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
 */function BI(e,t){const n=Qa(e,"auth");if(n.isInitialized()){const o=n.getImmediate(),l=n.getOptions();if(ho(l,t??{}))return o;nr(o,"already-initialized")}return n.initialize({options:t})}function Tz(e,t){const n=t?.persistence||[],i=(Array.isArray(n)?n:[n]).map(pi);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,t?.popupRedirectResolver)}function Rz(e,t,n){const i=Is(e);ke(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const o=!1,l=HI(t),{host:u,port:f}=Az(t),p=f===null?"":`:${f}`,h={url:`${l}//${u}${p}/`},y=Object.freeze({host:u,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){ke(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),ke(ho(h,i.config.emulator)&&ho(y,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=h,i.emulatorConfig=y,i.settings.appVerificationDisabledForTesting=!0,Wa(u)?(aR(`${l}//${u}${p}`),lR("Auth",!0)):Iz()}function HI(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Az(e){const t=HI(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:wE(i.substr(l.length+1))}}else{const[l,u]=i.split(":");return{host:l,port:wE(u)}}}function wE(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Iz(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class ib{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return hi("not implemented")}_getIdTokenResponse(t){return hi("not implemented")}_linkToIdToken(t,n){return hi("not implemented")}_getReauthenticationResolver(t){return hi("not implemented")}}async function Dz(e,t){return As(e,"POST","/v1/accounts:signUp",t)}/**
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
 */async function kz(e,t){return Ru(e,"POST","/v1/accounts:signInWithPassword",Rs(e,t))}/**
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
 */async function Nz(e,t){return Ru(e,"POST","/v1/accounts:signInWithEmailLink",Rs(e,t))}async function Oz(e,t){return Ru(e,"POST","/v1/accounts:signInWithEmailLink",Rs(e,t))}/**
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
 */class lu extends ib{constructor(t,n,i,o=null){super("password",i),this._email=t,this._password=n,this._tenantId=o}static _fromEmailAndPassword(t,n){return new lu(t,n,"password")}static _fromEmailAndCode(t,n,i=null){return new lu(t,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yv(t,n,"signInWithPassword",kz);case"emailLink":return Nz(t,{email:this._email,oobCode:this._password});default:nr(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return yv(t,i,"signUpPassword",Dz);case"emailLink":return Oz(t,{idToken:n,email:this._email,oobCode:this._password});default:nr(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Aa(e,t){return Ru(e,"POST","/v1/accounts:signInWithIdp",Rs(e,t))}/**
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
 */const Mz="http://localhost";class So extends ib{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new So(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):nr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:i,signInMethod:o,...l}=n;if(!i||!o)return null;const u=new So(i,o);return u.idToken=l.idToken||void 0,u.accessToken=l.accessToken||void 0,u.secret=l.secret,u.nonce=l.nonce,u.pendingToken=l.pendingToken||null,u}_getIdTokenResponse(t){const n=this.buildRequest();return Aa(t,n)}_linkToIdToken(t,n){const i=this.buildRequest();return i.idToken=n,Aa(t,i)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Aa(t,n)}buildRequest(){const t={requestUri:Mz,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Ya(n)}return t}}/**
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
 */function Lz(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function jz(e){const t=_c(bc(e)).link,n=t?_c(bc(t)).deep_link_id:null,i=_c(bc(e)).deep_link_id;return(i?_c(bc(i)).link:null)||i||n||t||e}class sb{constructor(t){const n=_c(bc(t)),i=n.apiKey??null,o=n.oobCode??null,l=Lz(n.mode??null);ke(i&&o&&l,"argument-error"),this.apiKey=i,this.operation=l,this.code=o,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(t){const n=jz(t);try{return new sb(n)}catch{return null}}}/**
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
 */class nl{constructor(){this.providerId=nl.PROVIDER_ID}static credential(t,n){return lu._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const i=sb.parseLink(n);return ke(i,"argument-error"),lu._fromEmailAndCode(t,i.code,i.tenantId)}}nl.PROVIDER_ID="password";nl.EMAIL_PASSWORD_SIGN_IN_METHOD="password";nl.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ob{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Au extends ob{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class os extends Au{constructor(){super("facebook.com")}static credential(t){return So._fromParams({providerId:os.PROVIDER_ID,signInMethod:os.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return os.credentialFromTaggedObject(t)}static credentialFromError(t){return os.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return os.credential(t.oauthAccessToken)}catch{return null}}}os.FACEBOOK_SIGN_IN_METHOD="facebook.com";os.PROVIDER_ID="facebook.com";/**
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
 */class ui extends Au{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return So._fromParams({providerId:ui.PROVIDER_ID,signInMethod:ui.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return ui.credentialFromTaggedObject(t)}static credentialFromError(t){return ui.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:i}=t;if(!n&&!i)return null;try{return ui.credential(n,i)}catch{return null}}}ui.GOOGLE_SIGN_IN_METHOD="google.com";ui.PROVIDER_ID="google.com";/**
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
 */class as extends Au{constructor(){super("github.com")}static credential(t){return So._fromParams({providerId:as.PROVIDER_ID,signInMethod:as.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return as.credentialFromTaggedObject(t)}static credentialFromError(t){return as.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return as.credential(t.oauthAccessToken)}catch{return null}}}as.GITHUB_SIGN_IN_METHOD="github.com";as.PROVIDER_ID="github.com";/**
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
 */class ls extends Au{constructor(){super("twitter.com")}static credential(t,n){return So._fromParams({providerId:ls.PROVIDER_ID,signInMethod:ls.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return ls.credentialFromTaggedObject(t)}static credentialFromError(t){return ls.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=t;if(!n||!i)return null;try{return ls.credential(n,i)}catch{return null}}}ls.TWITTER_SIGN_IN_METHOD="twitter.com";ls.PROVIDER_ID="twitter.com";/**
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
 */async function Pz(e,t){return Ru(e,"POST","/v1/accounts:signUp",Rs(e,t))}/**
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
 */class xo{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,i,o=!1){const l=await hr._fromIdTokenResponse(t,i,o),u=EE(i);return new xo({user:l,providerId:u,_tokenResponse:i,operationType:n})}static async _forOperation(t,n,i){await t._updateTokensIfNecessary(i,!0);const o=EE(i);return new xo({user:t,providerId:o,_tokenResponse:i,operationType:n})}}function EE(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class ph extends wi{constructor(t,n,i,o){super(n.code,n.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,ph.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(t,n,i,o){return new ph(t,n,i,o)}}function FI(e,t,n,i){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?ph._fromErrorAndOperation(e,l,t,i):l})}async function $z(e,t,n=!1){const i=await au(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return xo._forOperation(e,"link",i)}/**
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
 */async function Uz(e,t,n=!1){const{auth:i}=e;if(On(i.app))return Promise.reject(yi(i));const o="reauthenticate";try{const l=await au(e,FI(i,o,t,e),n);ke(l.idToken,i,"internal-error");const u=nb(l.idToken);ke(u,i,"internal-error");const{sub:f}=u;return ke(e.uid===f,i,"user-mismatch"),xo._forOperation(e,o,l)}catch(l){throw l?.code==="auth/user-not-found"&&nr(i,"user-mismatch"),l}}/**
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
 */async function qI(e,t,n=!1){if(On(e.app))return Promise.reject(yi(e));const i="signIn",o=await FI(e,i,t),l=await xo._fromIdTokenResponse(e,i,o);return n||await e._updateCurrentUser(l.user),l}async function zz(e,t){return qI(Is(e),t)}/**
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
 */async function VI(e){const t=Is(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Bz(e,t,n){if(On(e.app))return Promise.reject(yi(e));const i=Is(e),u=await yv(i,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Pz).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&VI(e),p}),f=await xo._fromIdTokenResponse(i,"signIn",u);return await i._updateCurrentUser(f.user),f}function Hz(e,t,n){return On(e.app)?Promise.reject(yi(e)):zz(Gt(e),nl.credential(t,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&VI(e),i})}function Fz(e,t,n,i){return Gt(e).onIdTokenChanged(t,n,i)}function qz(e,t,n){return Gt(e).beforeAuthStateChanged(t,n)}function Vz(e,t,n,i){return Gt(e).onAuthStateChanged(t,n,i)}const mh="__sak";/**
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
 */class GI{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(mh,"1"),this.storage.removeItem(mh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Gz=1e3,Wz=10;class WI extends GI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=PI(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),o=this.localCache[n];i!==o&&t(n,o,i)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((u,f,p)=>{this.notifyListeners(u,p)});return}const i=t.key;n?this.detachListener():this.stopPolling();const o=()=>{const u=this.storage.getItem(i);!n&&this.localCache[i]===u||this.notifyListeners(i,u)},l=this.storage.getItem(i);fz()&&l!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,Wz):o()}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const o of Array.from(i))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:i}),!0)})},Gz)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}WI.type="LOCAL";const Yz=WI;/**
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
 */class YI extends GI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}YI.type="SESSION";const QI=YI;/**
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
 */function Qz(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class op{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(o=>o.isListeningto(t));if(n)return n;const i=new op(t);return this.receivers.push(i),i}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:i,eventType:o,data:l}=n.data,u=this.handlersMap[o];if(!u?.size)return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(u).map(async h=>h(n.origin,l)),p=await Qz(f);n.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}op.receivers=[];/**
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
 */function ab(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class Kz{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,u;return new Promise((f,p)=>{const h=ab("",20);o.port1.start();const y=setTimeout(()=>{p(new Error("unsupported_event"))},i);u={messageChannel:o,onMessage(_){const v=_;if(v.data.eventId===h)switch(v.data.status){case"ack":clearTimeout(y),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(v.data.response);break;default:clearTimeout(y),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(u),o.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:t,eventId:h,data:n},[o.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
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
 */function Nr(){return window}function Xz(e){Nr().location.href=e}/**
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
 */function KI(){return typeof Nr().WorkerGlobalScope<"u"&&typeof Nr().importScripts=="function"}async function Zz(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Jz(){return navigator?.serviceWorker?.controller||null}function e8(){return KI()?self:null}/**
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
 */const XI="firebaseLocalStorageDb",t8=1,gh="firebaseLocalStorage",ZI="fbase_key";class Iu{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ap(e,t){return e.transaction([gh],t?"readwrite":"readonly").objectStore(gh)}function n8(){const e=indexedDB.deleteDatabase(XI);return new Iu(e).toPromise()}function vv(){const e=indexedDB.open(XI,t8);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const i=e.result;try{i.createObjectStore(gh,{keyPath:ZI})}catch(o){n(o)}}),e.addEventListener("success",async()=>{const i=e.result;i.objectStoreNames.contains(gh)?t(i):(i.close(),await n8(),t(await vv()))})})}async function CE(e,t,n){const i=ap(e,!0).put({[ZI]:t,value:n});return new Iu(i).toPromise()}async function r8(e,t){const n=ap(e,!1).get(t),i=await new Iu(n).toPromise();return i===void 0?null:i.value}function TE(e,t){const n=ap(e,!0).delete(t);return new Iu(n).toPromise()}const i8=800,s8=3;class JI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vv(),this.db)}async _withRetries(t){let n=0;for(;;)try{const i=await this._openDb();return await t(i)}catch(i){if(n++>s8)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return KI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=op._getInstance(e8()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Zz(),!this.activeServiceWorker)return;this.sender=new Kz(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&t[0]?.fulfilled&&t[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Jz()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await vv();return await CE(t,mh,"1"),await TE(t,mh),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>CE(i,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(i=>r8(i,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>TE(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const l=ap(o,!1).getAll();return new Iu(l).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(t.length!==0)for(const{fbase_key:o,value:l}of t)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const o of Array.from(i))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),i8)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}JI.type="LOCAL";const o8=JI;new Tu(3e4,6e4);/**
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
 */function eD(e,t){return t?pi(t):(ke(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class lb extends ib{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Aa(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Aa(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Aa(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function a8(e){return qI(e.auth,new lb(e),e.bypassAuthState)}function l8(e){const{auth:t,user:n}=e;return ke(n,t,"internal-error"),Uz(n,new lb(e),e.bypassAuthState)}async function c8(e){const{auth:t,user:n}=e;return ke(n,t,"internal-error"),$z(n,new lb(e),e.bypassAuthState)}/**
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
 */class tD{constructor(t,n,i,o,l=!1){this.auth=t,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:i,postBody:o,tenantId:l,error:u,type:f}=t;if(u){this.reject(u);return}const p={auth:this.auth,requestUri:n,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(h){this.reject(h)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return a8;case"linkViaPopup":case"linkViaRedirect":return c8;case"reauthViaPopup":case"reauthViaRedirect":return l8;default:nr(this.auth,"internal-error")}}resolve(t){Si(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Si(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const u8=new Tu(2e3,1e4);async function d8(e,t,n){if(On(e.app))return Promise.reject(vr(e,"operation-not-supported-in-this-environment"));const i=Is(e);GU(e,t,ob);const o=eD(i,n);return new lo(i,"signInViaPopup",t,o).executeNotNull()}class lo extends tD{constructor(t,n,i,o,l){super(t,n,o,l),this.provider=i,this.authWindow=null,this.pollId=null,lo.currentPopupAction&&lo.currentPopupAction.cancel(),lo.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return ke(t,this.auth,"internal-error"),t}async onExecution(){Si(this.filter.length===1,"Popup operations only handle one event");const t=ab();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(vr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,lo.currentPopupAction=null}pollUserCancellation(){const t=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,u8.get())};t()}}lo.currentPopupAction=null;/**
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
 */const f8="pendingRedirect",Af=new Map;class h8 extends tD{constructor(t,n,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let t=Af.get(this.auth._key());if(!t){try{const i=await p8(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(i)}catch(n){t=()=>Promise.reject(n)}Af.set(this.auth._key(),t)}return this.bypassAuthState||Af.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function p8(e,t){const n=y8(t),i=g8(e);if(!await i._isAvailable())return!1;const o=await i._get(n)==="true";return await i._remove(n),o}function m8(e,t){Af.set(e._key(),t)}function g8(e){return pi(e._redirectPersistence)}function y8(e){return Rf(f8,e.config.apiKey,e.name)}async function v8(e,t,n=!1){if(On(e.app))return Promise.reject(yi(e));const i=Is(e),o=eD(i,t),u=await new h8(i,o,n).execute();return u&&!n&&(delete u.user._redirectEventId,await i._persistUserIfCurrent(u.user),await i._setRedirectUser(null,t)),u}/**
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
 */const _8=600*1e3;class b8{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(t,i)&&(n=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!S8(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){if(t.error&&!nD(t)){const i=t.error.code?.split("auth/")[1]||"internal-error";n.onError(vr(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const i=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=_8&&this.cachedEventUids.clear(),this.cachedEventUids.has(RE(t))}saveEventToCache(t){this.cachedEventUids.add(RE(t)),this.lastProcessedEventTime=Date.now()}}function RE(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function nD({type:e,error:t}){return e==="unknown"&&t?.code==="auth/no-auth-event"}function S8(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nD(e);default:return!1}}/**
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
 */async function x8(e,t={}){return As(e,"GET","/v1/projects",t)}/**
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
 */const w8=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,E8=/^https?/;async function C8(e){if(e.config.emulator)return;const{authorizedDomains:t}=await x8(e);for(const n of t)try{if(T8(n))return}catch{}nr(e,"unauthorized-domain")}function T8(e){const t=mv(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const u=new URL(e);return u.hostname===""&&i===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&u.hostname===i}if(!E8.test(n))return!1;if(w8.test(e))return i===e;const o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const R8=new Tu(3e4,6e4);function AE(){const e=Nr().___jsl;if(e?.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function A8(e){return new Promise((t,n)=>{function i(){AE(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{AE(),n(vr(e,"network-request-failed"))},timeout:R8.get()})}if(Nr().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(Nr().gapi?.load)i();else{const o=Sz("iframefcb");return Nr()[o]=()=>{gapi.load?i():n(vr(e,"network-request-failed"))},UI(`${bz()}?onload=${o}`).catch(l=>n(l))}}).catch(t=>{throw If=null,t})}let If=null;function I8(e){return If=If||A8(e),If}/**
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
 */const D8=new Tu(5e3,15e3),k8="__/auth/iframe",N8="emulator/auth/iframe",O8={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},M8=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function L8(e){const t=e.config;ke(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?tb(t,N8):`https://${e.config.authDomain}/${k8}`,i={apiKey:t.apiKey,appName:e.name,v:Ka},o=M8.get(e.config.apiHost);o&&(i.eid=o);const l=e._getFrameworks();return l.length&&(i.fw=l.join(",")),`${n}?${Ya(i).slice(1)}`}async function j8(e){const t=await I8(e),n=Nr().gapi;return ke(n,e,"internal-error"),t.open({where:document.body,url:L8(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:O8,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const u=vr(e,"network-request-failed"),f=Nr().setTimeout(()=>{l(u)},D8.get());function p(){Nr().clearTimeout(f),o(i)}i.ping(p).then(p,()=>{l(u)})}))}/**
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
 */const P8={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$8=500,U8=600,z8="_blank",B8="http://localhost";class IE{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function H8(e,t,n,i=$8,o=U8){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),u=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const p={...P8,width:i.toString(),height:o.toString(),top:l,left:u},h=hn().toLowerCase();n&&(f=NI(h)?z8:n),DI(h)&&(t=t||B8,p.scrollbars="yes");const y=Object.entries(p).reduce((v,[S,x])=>`${v}${S}=${x},`,"");if(dz(h)&&f!=="_self")return F8(t||"",f),new IE(null);const _=window.open(t||"",f,y);ke(_,e,"popup-blocked");try{_.focus()}catch{}return new IE(_)}function F8(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const q8="__/auth/handler",V8="emulator/auth/handler",G8=encodeURIComponent("fac");async function DE(e,t,n,i,o,l){ke(e.config.authDomain,e,"auth-domain-config-required"),ke(e.config.apiKey,e,"invalid-api-key");const u={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:Ka,eventId:o};if(t instanceof ob){t.setDefaultLanguage(e.languageCode),u.providerId=t.providerId||"",zy(t.getCustomParameters())||(u.customParameters=JSON.stringify(t.getCustomParameters()));for(const[y,_]of Object.entries({}))u[y]=_}if(t instanceof Au){const y=t.getScopes().filter(_=>_!=="");y.length>0&&(u.scopes=y.join(","))}e.tenantId&&(u.tid=e.tenantId);const f=u;for(const y of Object.keys(f))f[y]===void 0&&delete f[y];const p=await e._getAppCheckToken(),h=p?`#${G8}=${encodeURIComponent(p)}`:"";return`${W8(e)}?${Ya(f).slice(1)}${h}`}function W8({config:e}){return e.emulator?tb(e,V8):`https://${e.authDomain}/${q8}`}/**
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
 */const ay="webStorageSupport";class Y8{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=QI,this._completeRedirectFn=v8,this._overrideRedirectResult=m8}async _openPopup(t,n,i,o){Si(this.eventManagers[t._key()]?.manager,"_initialize() not called before _openPopup()");const l=await DE(t,n,i,mv(),o);return H8(t,l,ab())}async _openRedirect(t,n,i,o){await this._originValidation(t);const l=await DE(t,n,i,mv(),o);return Xz(l),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:o,promise:l}=this.eventManagers[n];return o?Promise.resolve(o):(Si(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(t);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(t){const n=await j8(t),i=new b8(t);return n.register("authEvent",o=>(ke(o?.authEvent,t,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=n,i}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(ay,{type:ay},o=>{const l=o?.[0]?.[ay];l!==void 0&&n(!!l),nr(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=C8(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return PI()||kI()||rb()}}const Q8=Y8;var kE="@firebase/auth",NE="1.11.0";/**
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
 */class K8{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(i=>{t(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ke(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function X8(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Z8(e){Mr(new _r("auth",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),l=t.getProvider("app-check-internal"),{apiKey:u,authDomain:f}=i.options;ke(u&&!u.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:u,authDomain:f,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$I(e)},h=new yz(i,o,l,p);return Tz(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,i)=>{t.getProvider("auth-internal").initialize()})),Mr(new _r("auth-internal",t=>{const n=Is(t.getProvider("auth").getImmediate());return(i=>new K8(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zn(kE,NE,X8(e)),Zn(kE,NE,"esm2020")}/**
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
 */const J8=300,eB=oR("authIdTokenMaxAge")||J8;let OE=null;const tB=e=>async t=>{const n=t&&await t.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>eB)return;const o=n?.token;OE!==o&&(OE=o,await fetch(e,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function nB(e=n_()){const t=Qa(e,"auth");if(t.isInitialized())return t.getImmediate();const n=BI(e,{popupRedirectResolver:Q8,persistence:[o8,Yz,QI]}),i=oR("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const u=tB(l.toString());qz(n,u,()=>u(n.currentUser)),Fz(n,f=>u(f))}}const o=iR("auth");return o&&Rz(n,`http://${o}`),n}function rB(){return document.getElementsByTagName("head")?.[0]??document}vz({loadJS(e){return new Promise((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=o=>{const l=vr("internal-error");l.customData=o,n(l)},i.type="text/javascript",i.charset="UTF-8",rB().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Z8("Browser");const iB=wI,di=Fh(()=>{if(!Ac)throw new Error("Firebase app not initialized");try{return nB(Ac)}catch{return BI(Ac,{errorMap:iB})}}),rD=E.createContext({isDark:!1,toggle:()=>{}}),sB=C.button`
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
`,oB=C.span`
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
`,iD=()=>{const{isDark:e,toggle:t}=E.useContext(rD);return g.jsxs(sB,{type:"button",role:"switch","aria-checked":e,onClick:t,children:["Dark mode",g.jsx(oB,{$on:e,"aria-hidden":"true"})]})},aB=C(Ts)`
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
`,lB=C.div`
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
  margin-bottom: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,cB=C.button`
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
`,uB=()=>{const e=Je(Za),{deleteToken:t}=E.useContext(vu),n=E.useCallback(async()=>{await t(),await di?.signOut()},[t]);return e.state==="loading"?null:e.state!=="fulfilled"||!e.data?g.jsx(aB,{to:tt.SIGN_IN,children:"Sign in"}):g.jsxs(g.Fragment,{children:[g.jsx(lB,{children:e.data.displayName}),g.jsx(iD,{}),g.jsx(cB,{type:"button",onClick:n,children:"Sign out"})]})},dB="#181a2f",fB=280,hB=C.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  transition: opacity 0.2s;
  opacity: ${e=>e.$open?1:0};
  pointer-events: ${e=>e.$open?"all":"none"};
  z-index: 10;
`,pB=C.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: ${fB}px;
  max-width: 90vw;
  background-color: ${e=>e.theme.colors.mainSurface};
  z-index: 11;
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(${e=>e.$open?"0":"100%"});
  overflow: hidden;
`,mB=C.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: env(safe-area-inset-top, 0) 16px 0;
  height: calc(60px + env(safe-area-inset-top, 0px));
  background-color: ${dB};
  color: #fff;
  flex-shrink: 0;
`,gB=C(Ts)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: inherit;
`,yB=C.span`
  font-size: 15px;
  font-weight: 600;
`,vB=C.button`
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
`,_B=C.nav`
  flex: 1;
  padding: 8px 0;
  overflow-y: auto;
`,rf=C(Uv)`
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
`,bB=C.div`
  padding: 16px 20px;
  border-top: 1px solid ${e=>e.theme.borderColor};
  flex-shrink: 0;
`,SB=()=>g.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none","aria-hidden":"true",children:g.jsx("path",{d:"M4 4l10 10M14 4L4 14",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})}),xB=({open:e,onClose:t})=>{const n=Je(Z_);return g.jsxs(g.Fragment,{children:[g.jsx(hB,{$open:e,onClick:t}),g.jsxs(pB,{$open:e,onClick:i=>i.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":"Navigation menu",children:[g.jsxs(mB,{children:[g.jsxs(gB,{to:tt.CLASS_LIST,onClick:t,children:[g.jsx(SI,{size:20}),g.jsx(yB,{children:"Peloton Alerts"})]}),g.jsx(vB,{onClick:t,"aria-label":"Close menu",children:g.jsx(SB,{})})]}),g.jsxs(_B,{onClick:t,children:[g.jsx(rf,{to:tt.CLASS_LIST,end:!0,children:"Classes"}),g.jsx(rf,{to:tt.ALERTS,children:"Alerts"}),g.jsx(rf,{to:tt.ABOUT,end:!0,children:"FAQ"}),n&&g.jsx(rf,{to:tt.STATS,children:"Stats"})]}),g.jsx(bB,{children:g.jsx(uB,{})})]})]})},wB=C.div`
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
`,EB=({children:e,open:t,onClose:n})=>{const i=E.useRef(null),o=E.useCallback(l=>{l.key==="Escape"&&n()},[n]);return E.useEffect(()=>{if(t)return document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}},[t,o]),E.useEffect(()=>{if(!t)return;const l=f=>{const p=f.target;if(!(p instanceof Node)){n();return}const h=i.current;h&&h.contains(p)||n()},u=setTimeout(()=>{document.addEventListener("click",l,!0)},0);return()=>{clearTimeout(u),document.removeEventListener("click",l,!0)}},[t,n]),t?g.jsx(wB,{ref:i,role:"dialog","aria-modal":"true",children:e}):null},CB=C(Ts)`
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
`,TB=C.button`
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
`,RB=C.div`
  position: relative;
`,AB=C.hr`
  margin: 4px 0;
  border: none;
  border-top: 1px solid ${e=>e.theme.borderColor};
`,IB=C.button`
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
`,DB=()=>{const e=Je(Za),[t,n]=E.useState(!1),{deleteToken:i}=E.useContext(vu),o=E.useCallback(async()=>{await i(),await di?.signOut()},[i]);if(e.state!=="fulfilled"||!e.data){const l=e.state==="loading";return g.jsx(CB,{to:tt.SIGN_IN,$disabled:l,"aria-disabled":l,tabIndex:l?-1:void 0,children:"Sign in"})}return g.jsxs(RB,{children:[g.jsx(TB,{type:"button",onClick:()=>n(!0),"aria-expanded":t,"aria-haspopup":"dialog",children:e.data.displayName}),g.jsxs(EB,{open:t,onClose:()=>n(!1),children:[g.jsx(iD,{}),g.jsx(AB,{}),g.jsx(IB,{type:"button",onClick:o,children:"Sign out"})]})]})},kB="#181a2f",lp=680,NB=C.nav`
  height: inherit;
  background-color: ${kB};
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

  @media only screen and (min-width: ${lp+1}px) {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
  }
`,OB=C(Ts)`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  justify-self: start;
`,MB=C.span`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.01em;
  white-space: nowrap;
`,LB=C.div`
  display: flex;
  align-items: center;
  gap: 2px;

  @media only screen and (max-width: ${lp}px) {
    display: none;
  }
`,sf=C(Uv)`
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
`,jB=C.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  justify-self: end;

  @media only screen and (max-width: ${lp}px) {
    display: none;
  }
`,PB=C.button`
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

  @media only screen and (max-width: ${lp}px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,$B=()=>g.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:g.jsx("path",{d:"M3 5h14M3 10h14M3 15h14",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})}),UB=()=>{const[e,t]=E.useState(!1),n=Je(Z_);return g.jsxs(g.Fragment,{children:[g.jsxs(NB,{children:[g.jsxs(OB,{to:tt.CLASS_LIST,children:[g.jsx(SI,{}),g.jsx(MB,{children:"Peloton Alerts"})]}),g.jsxs(LB,{children:[g.jsx(sf,{to:tt.CLASS_LIST,end:!0,children:"Classes"}),g.jsx(sf,{to:tt.ALERTS,children:"Alerts"}),g.jsx(sf,{to:tt.ABOUT,end:!0,children:"FAQ"}),n&&g.jsx(sf,{to:tt.STATS,children:"Stats"})]}),g.jsx(jB,{children:g.jsx(DB,{})}),g.jsx(PB,{type:"button","aria-label":"Open menu",onClick:()=>t(!0),children:g.jsx($B,{})})]}),g.jsx(xB,{open:e,onClose:()=>t(!1)})]})},zB=C.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`,BB=C.div`
  position: sticky;
  height: calc(${X_}px + env(safe-area-inset-top));
  top: 0;
  z-index: 2;
`,HB=C.div`
  flex: 1;
  background-color: ${e=>e.theme.colors.secondarySurface};
`,ms=({children:e})=>g.jsxs(zB,{children:[g.jsx(BB,{children:g.jsx(UB,{})}),g.jsx(HB,{children:e})]}),Ce=(...e)=>tn`
  @media only screen and (max-width: ${t=>t.theme.widths.mobile}px) {
    ${tn(...e)}
  }
`,sD=(...e)=>tn`
  @media only screen and (max-width: ${t=>t.theme.widths.tablet}px) {
    ${tn(...e)}
  }
`,FB=C.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 24px 20px;

  ${Ce`
    padding: 16px 12px;
  `}
`,qB=C.div`
  margin-bottom: 20px;
`,VB=C.h1`
  font-size: 22px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
  margin: 0;
`,cc=C.section`
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  overflow: hidden;
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
`,uc=C.div`
  padding: 14px 20px;
  border-bottom: 1px solid ${e=>e.theme.borderColor};
`,dc=C.h2`
  font-size: 15px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
  margin: 0;
`,fc=C.div`
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
`,GB=()=>g.jsx(ms,{children:g.jsxs(FB,{children:[g.jsx(qB,{children:g.jsx(VB,{children:"FAQ"})}),g.jsxs(cc,{children:[g.jsx(uc,{children:g.jsx(dc,{children:"What is this?"})}),g.jsx(fc,{children:g.jsxs("p",{children:["A quicker, smarter way to browse"," ",g.jsx("a",{href:"https://studio.onepeloton.com/",target:"_blank",rel:"noreferrer",children:"Peloton Studios"})," ","class reservations. Filter by status (free, waitlist, full), instructor, or discipline — things the official site doesn't support. Classes are fetched directly from Peloton each time you load the page."]})})]}),g.jsxs(cc,{children:[g.jsx(uc,{children:g.jsx(dc,{children:"How do I view classes?"})}),g.jsx(fc,{children:g.jsxs("p",{children:["Open the ",g.jsx(Ts,{to:tt.CLASS_LIST,children:"Class List"})," and use the sidebar to set filters or switch between studio locations."]})})]}),g.jsxs(cc,{children:[g.jsx(uc,{children:g.jsx(dc,{children:"Is the class data live?"})}),g.jsx(fc,{children:g.jsx("p",{children:"Yes — data is fetched fresh from Peloton each time you load the page or switch studio. Filters persist across refreshes, unlike the official site."})})]}),g.jsxs(cc,{children:[g.jsx(uc,{children:g.jsx(dc,{children:"When do new classes become available?"})}),g.jsx(fc,{children:g.jsx("p",{children:"New classes typically open at 12:00 pm on Mondays and Thursdays in your studio's local timezone."})})]}),g.jsxs(cc,{children:[g.jsx(uc,{children:g.jsx(dc,{children:"Can I request a feature or report a bug?"})}),g.jsx(fc,{children:g.jsxs("p",{children:["Yes — this project is open source and lives on"," ",g.jsx("a",{href:"https://github.com/Abbondanzo/peloton-reservations",target:"_blank",rel:"noreferrer",children:"GitHub"}),". Open an issue to request a feature, report a bug, or just share feedback. Pull requests are welcome too."]})})]})]})}),$r=tn`
  border-color: ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  border-style: solid;
  border-width: 1px;
`,cp=tn`
  &:hover {
    background-color: ${e=>e.theme.colors.hoverSurface};
  }
`,WB=tn`
  &:focus {
    background-color: ${e=>e.theme.colors.hoverSurface};
  }
`,cb=E.createContext({state:"idle"}),YB=e=>{if(!e||typeof e!="object")return!1;const t=e;return typeof t.snapshotAt=="number"&&typeof t.starts_at=="string"&&Array.isArray(t.instructors)&&typeof t.disciplineId=="string"&&typeof t.occupancy=="number"&&typeof t.maxOccupancy=="number"&&typeof t.waitingCount=="number"&&typeof t.status=="string"},QB=e=>{const[t,n]=E.useState({state:"loading"});return E.useEffect(()=>{if(!e){n({state:"fulfilled",data:[]});return}n({state:"loading"});const i=an;if(!i){n({state:"failed",error:new Error("No database connection")});return}const o=Mn(i,Ti.classHistory(e)),l=Cu(o,u=>{const f=u.val();if(!f){n({state:"fulfilled",data:[]});return}const p=[];for(const[h,y]of Object.entries(f))if(!(!y||typeof y!="object"))for(const _ of Object.values(y))YB(_)&&p.push({..._,classId:h});p.sort((h,y)=>y.snapshotAt-h.snapshotAt),n({state:"fulfilled",data:p})},u=>{n({state:"failed",error:u})});return()=>l()},[e]),t},Fa=(e,t,n)=>{const i=new Date(e),o=new Intl.DateTimeFormat(void 0,{month:n?"long":"short",timeZone:t}).format(i),l=new Intl.DateTimeFormat(void 0,{day:"numeric",timeZone:t}).format(i);return n?`${new Intl.DateTimeFormat(void 0,{weekday:"long",timeZone:t}).format(i)}, ${o} ${l}`:`${o} ${l}`},KB=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],XB=(e,t)=>{const n=new Map;for(const i of e){const o=new Date(i.snapshotAt),l=Fa(o.toISOString(),t,!0);if(!n.has(l)){const u=new Intl.DateTimeFormat("en-US",{weekday:"long",timeZone:t}).format(o);n.set(l,{dayIndex:KB.indexOf(u),snapshots:[]})}n.get(l).snapshots.push(i)}return Array.from(n.entries()).map(([i,{dayIndex:o,snapshots:l}])=>({label:i,dayIndex:o,snapshots:l}))},wo=(e,t)=>new Intl.DateTimeFormat(void 0,{hour:"numeric",minute:"numeric",timeZone:t}).format(new Date(e)),ZB=C.div`
  border: 1px solid ${e=>e.theme.colors.status.free.text}40;
  border-left: 4px solid ${e=>e.theme.colors.status.free.text};
  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.status.free.bg};
  padding: 12px 14px;
`,JB=C.div`
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${e=>e.theme.colors.status.free.text};
  margin-bottom: 6px;
`,e9=C.div`
  font-size: 13px;
  color: ${e=>e.theme.colors.main};
  font-weight: 500;
`,t9=C.div`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
  margin-top: 2px;
`,n9=C.div`
  font-size: 11px;
  color: ${e=>e.theme.colors.secondary};
  opacity: 0.6;
  margin-top: 2px;
`,r9=({snapshot:e,timezone:t})=>{const n=Fa(e.starts_at,t,!1),i=wo(e.starts_at,t),o=wo(new Date(e.snapshotAt).toISOString(),t),l=e.instructors[0]?.name??"Unknown instructor",u=e.maxOccupancy-e.occupancy;return g.jsxs(ZB,{children:[g.jsx(JB,{children:"● Would have triggered"}),g.jsxs(e9,{children:[n," ",i,e.name?` · ${e.name}`:""," · ",l]}),g.jsx(t9,{children:e.status==="free"?`Free · ${u} spot${u===1?"":"s"} available`:e.status==="waitlist"?`Waitlist · ${e.waitingCount} waiting`:"Full"}),g.jsxs(n9,{children:["detected at ",o]})]})},i9=C.div`
  border: 1px solid ${e=>e.theme.colors.status.waitlist.text}40;
  border-left: 4px solid ${e=>e.theme.colors.status.waitlist.text};
  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.status.waitlist.bg};
  padding: 12px 14px;
`,s9=C.div`
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${e=>e.theme.colors.status.waitlist.text};
  margin-bottom: 6px;
`,o9=C.div`
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
`,a9=C.div`
  font-size: 11px;
  color: ${e=>e.theme.colors.secondary};
  opacity: 0.6;
  margin-top: 2px;
`,l9={instructor:"wrong instructor",time:"outside your time range",discipline:"wrong discipline",status:"class not bookable"},c9=({snapshot:e,reason:t,timezone:n})=>{const i=Fa(e.starts_at,n,!1),o=wo(e.starts_at,n),l=wo(new Date(e.snapshotAt).toISOString(),n),u=e.instructors[0]?.name??"Unknown instructor";return g.jsxs(i9,{children:[g.jsxs(s9,{children:["◌ Near miss — ",l9[t]]}),g.jsxs(o9,{children:[i," ",o,e.name?` · ${e.name}`:""," · ",u]}),g.jsxs(a9,{children:["detected at ",l]})]})},u9=C.button`
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
`,d9=C.ul`
  margin: 6px 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,f9=C.li`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
  padding: 4px 8px;
  background-color: ${e=>e.theme.colors.secondarySurface};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,h9=C.span`
  font-size: 11px;
  opacity: 0.6;
`,p9=({snapshots:e,timezone:t})=>{const[n,i]=E.useState(!1),o=e.length;return g.jsxs("div",{children:[g.jsxs(u9,{type:"button",onClick:()=>i(l=>!l),children:[g.jsx("span",{children:n?"▾":"▸"}),o," class",o===1?"":"es"," skipped"]}),n&&g.jsx(d9,{children:e.map((l,u)=>{const f=Fa(l.starts_at,t,!1),p=wo(l.starts_at,t),h=wo(new Date(l.snapshotAt).toISOString(),t);return g.jsxs(f9,{children:[g.jsxs("span",{children:[f," ",p,l.name?` · ${l.name}`:"",l.instructors[0]?` · ${l.instructors[0].name}`:""]}),g.jsxs(h9,{children:["detected at ",h]})]},u)})})]})},m9=C.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,g9=C.h3`
  position: sticky;
  top: calc(${X_}px + env(safe-area-inset-top, 0px));
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
`,y9=C.span`
  font-size: 11px;
  font-weight: 400;
  color: ${e=>e.theme.colors.secondary};
  opacity: 0.6;
`,v9=({label:e,dayIndex:t,snapshots:n,alert:i,timezone:o})=>{const l=!!i.timeRanges[t],u=[],f=[],p=[];for(const h of n){const y=_I(h,i);y.type==="match"?u.push(h):y.type==="near-miss"?f.push({snapshot:h,reason:y.reason}):p.push(h)}return g.jsxs(m9,{children:[g.jsxs(g9,{children:[e,!l&&g.jsx(y9,{children:"not monitored"})]}),u.map((h,y)=>g.jsx(r9,{snapshot:h,timezone:o},y)),f.map(({snapshot:h,reason:y},_)=>g.jsx(c9,{snapshot:h,reason:y,timezone:o},_)),p.length>0&&g.jsx(p9,{snapshots:p,timezone:o})]})},_9=C.div`
  display: flex;
  gap: 16px;
  padding: 12px 0;
  border-bottom: 1px solid ${e=>e.theme.borderColor};
  flex-wrap: wrap;
`,ME=C.span`
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
`,LE=C.strong`
  color: ${e=>e.$color??e.theme.colors.main};
`,b9=({matchCount:e,nearMissCount:t})=>{const n=Vv();return g.jsxs(_9,{children:[g.jsxs(ME,{children:[g.jsx(LE,{$color:n.colors.status.free.text,children:e})," ",e===1?"class":"classes"," would have triggered"]}),g.jsxs(ME,{children:[g.jsx(LE,{$color:n.colors.status.waitlist.text,children:t})," ","near ",t===1?"miss":"misses"]})]})},S9=C.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  ${$r}
  border-radius: ${e=>e.theme.borderRadius};
  overflow: hidden;
  background-color: ${e=>e.theme.colors.mainSurface};
`,x9=C.div`
  padding: 20px 24px;
  border-bottom: 1px solid ${e=>e.theme.borderColor};

  ${Ce`
    padding: 16px;
  `}
`,w9=C.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`,E9=C.button`
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
`,C9=C.button`
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
`,T9=C.h1`
  margin: 0 0 4px;
  font-size: 18px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
`,R9=C.p`
  margin: 0;
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
`,A9=C.div`
  padding: 16px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${Ce`
    padding: 12px 16px 16px;
  `}
`,of=C.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
  padding: 32px 0;
`,I9=()=>{const{alertId:e}=MM(),t=Cs(),n=E.useContext(cb),[i,o]=E.useState("idle"),l=E.useMemo(()=>n.state!=="fulfilled"?null:n.data.find(T=>T.id===e)??null,[n,e]),u=QB(l?.studioId??null),f=l?fn[l.studioId]?.timezone??"UTC":"UTC",p=E.useMemo(()=>!l||u.state!=="fulfilled"?[]:XB(u.data,f),[l,u,f]),{matchCount:h,nearMissCount:y}=E.useMemo(()=>{if(!l||u.state!=="fulfilled")return{matchCount:0,nearMissCount:0};let T=0,k=0;for(const M of u.data){const R=_I(M,l);R.type==="match"?T++:R.type==="near-miss"&&k++}return{matchCount:T,nearMissCount:k}},[l,u]),_=n.state==="loading"||n.state==="idle"||u.state==="loading",v="Notification"in window&&"serviceWorker"in navigator,S=E.useCallback(async()=>{if(v){o("sending");try{if(Notification.permission!=="granted"&&await Notification.requestPermission()!=="granted"){o("idle");return}const T=await navigator.serviceWorker.ready,k=l?fn[l.studioId]:null,M="Spot opened up!",R=`${l?.name??"Test alert"} — ${k?.location??"Studio"} · test notification`;await T.showNotification(M,{body:R,icon:"/icons/icon-192x192.png",badge:"/icons/icon-96x96.png",data:{classUrl:"/p/7248695-peloton-studios-new-york/e/99586855-30-min-intervals-ride/"}}),o("sent"),setTimeout(()=>o("idle"),3e3)}catch{o("error"),setTimeout(()=>o("idle"),3e3)}}},[l,v]),x=l?.name??"Alert",D=i==="sending"?"Sending…":i==="sent"?"Sent!":i==="error"?"Error":"Send test notification";return g.jsxs(S9,{children:[g.jsxs(x9,{children:[g.jsx(C9,{type:"button",onClick:()=>t(-1),children:"← Alerts"}),g.jsxs(w9,{children:[g.jsx("div",{children:g.jsxs(T9,{children:[x," — Past 7 Days"]})}),v&&g.jsx(E9,{type:"button",$sent:i==="sent",disabled:i==="sending",onClick:S,title:"Fire a test push notification to verify delivery and the notification URL",children:D})]}),g.jsx(R9,{children:l?`${fn[l.studioId]?.location??l.studioId}`:""})]}),g.jsxs(A9,{children:[_&&g.jsx(of,{children:"Loading…"}),!_&&!l&&g.jsx(of,{children:"Alert not found."}),!_&&l&&u.state==="fulfilled"&&g.jsxs(g.Fragment,{children:[g.jsx(b9,{matchCount:h,nearMissCount:y}),p.length===0&&g.jsx(of,{children:"No class history yet. History builds up as the backend detects class changes."}),p.map(({label:T,dayIndex:k,snapshots:M})=>g.jsx(v9,{label:T,dayIndex:k,snapshots:M,alert:l,timezone:f},T))]}),!_&&u.state==="failed"&&g.jsx(of,{children:"Failed to load class history."})]})]})},D9=async(e,t)=>{const n=an;if(!n)throw new Error("No Firebase database connection to use");const i=(await SU(Mn(n,Ti.alerts(e)),t)).key;if(!i)throw new Error("Missing ID from insertion operation");return{...t,id:i}},oD=async(e,t)=>{const n=an;if(!n)throw new Error("No Firebase database connection to use");const i={...t,name:t.name??null,watchedClassIds:t.watchedClassIds??null,disabled:t.disabled??null};await gI(Mn(n,Ti.alert(e,t.id)),i)},k9=C.div`
  display: flex;
  flex-direction: column;
`,N9=C.label`
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,O9=C.input`
  ${$r}
  padding: 12px 8px;
  font-family: inherit;
  background-color: ${e=>e.theme.colors.mainSurface};
  color: ${e=>e.theme.colors.main};
`,M9=C.span`
  margin-top: 4px;
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,L9=({label:e,hint:t,placeholder:n,value:i,onChange:o})=>{const l=E.useId();return g.jsxs(k9,{children:[g.jsx(N9,{htmlFor:l,children:e}),g.jsx(O9,{id:l,placeholder:n,value:i,"aria-describedby":t?`${l}-hint`:void 0,onChange:({target:u})=>o(u.value)}),t&&g.jsx(M9,{id:`${l}-hint`,children:t})]})},j9=C.label`
  ${$r}
  ${cp}
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
`,P9=C.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,$9=C.span`
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
`,U9=C.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,z9=C.input`
  accent-color: ${e=>e.theme.colors.accent};
`,yh=({name:e,value:t,checked:n,onChange:i,label:o,hint:l,icon:u})=>{const f=E.useId();return g.jsxs(j9,{htmlFor:f,children:[g.jsx(z9,{type:"radio",id:f,name:e,value:t,checked:n,onChange:i}),u,g.jsxs(P9,{children:[g.jsx($9,{children:o}),l&&g.jsx(U9,{children:l})]})]})},jE=C.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`,PE=C.legend`
  font-weight: 600;
  font-size: 18px;
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,$E=C.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  margin: 0 0 16px;
`,UE=C.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,zE=C.div`
  margin-top: 32px;

  ${Ce`
    margin-top: 24px;
  `}
`,B9=Object.entries(fn).map(([e,t])=>({id:e,label:t.location})),H9=[{status:"free",label:"Open spots only",hint:"Alert me when a class has available spots"},{status:"waitlist",label:"Open spots or waitlist",hint:"Alert me even if I'd join the waitlist"}],F9=({name:e,onNameChange:t,studioId:n,onStudioChange:i,maxStatus:o,onStatusChange:l})=>g.jsxs("div",{children:[g.jsx(L9,{label:"Alert name (optional)",hint:"Leave blank to auto-generate a name from your filters",placeholder:"e.g. Morning Cycling with Cody",value:e,onChange:t}),g.jsx(zE,{}),g.jsxs(jE,{children:[g.jsx(PE,{children:"Which studio?"}),g.jsx($E,{children:"Pick the Peloton studio you want to monitor."}),g.jsx(UE,{children:B9.map(u=>g.jsx(yh,{name:"studio",value:u.id,checked:n===u.id,onChange:()=>i(u.id),label:u.label},u.id))})]}),g.jsx(zE,{}),g.jsxs(jE,{children:[g.jsx(PE,{children:"When should we alert you?"}),g.jsx($E,{children:"Choose whether to include waitlisted classes."}),g.jsx(UE,{children:H9.map(u=>g.jsx(yh,{name:"status",value:u.status,checked:o===u.status,onChange:()=>l(u.status),label:u.label,hint:u.hint},u.status))})]})]}),BE={Cardio:"#d8ec43",Cycling:"#bbd4f4",Meditation:"#e6d4ff",Rowing:"#cbf293","Outdoor Run":"#a8e6cf","Outdoor Run/Walk":"#94f3d0",Running:"#fde987",Strength:"#ffc0d5",Tread:"#fdbe9f",Walking:"#ffa8a9",Yoga:"#ceffdc"},aD=.2,vh=e=>Math.round(e*(1-aD*2)),q9=e=>Math.round(e*aD),V9=C.div`
  width: ${e=>vh(e.size)}px;
  height: ${e=>vh(e.size)}px;
  border-radius: ${e=>e.size}px;
  background-color: ${e=>e.color};
  padding: ${e=>q9(e.size)}px;
  flex-shrink: 0;
`,G9=C.img`
  width: ${e=>vh(e.size)}px;
  height: ${e=>vh(e.size)}px;
  display: block;
`,_h=({discipline:e,size:t=32})=>{const n=Vv(),i=E.useMemo(()=>{const o=Object.keys(BE),l=e.name.toLowerCase(),u=o.find(f=>f.toLowerCase()===l)??o.find(f=>{const p=f.toLowerCase();return p.includes(l)||l.includes(p)});if(u)return BE[u];{const f=`Received unsupported discipline ${e.name}`;return console.log(f),Kv(f),n.colors.secondarySurface}},[e.name,n.colors.secondarySurface]);return g.jsx(V9,{color:i,size:t,children:g.jsx(G9,{alt:e.name,src:e.iconUrl,size:t,color:i})})},W9=C.img`
  width: ${e=>e.size}px;
  min-width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  overflow: hidden;
  background-color: ${e=>e.theme.colors.secondarySurface};
  border-radius: 50%;
  color: ${e=>e.theme.colors.secondary};
`,ub=({instructor:e,size:t=32})=>g.jsx(W9,{src:e.imageUrl,alt:`Profile of ${e.name}`,size:t});var Y9=class extends Error{issues;constructor(e){super(e[0].message),this.name="SchemaError",this.issues=e}},lD=(e=>(e.uninitialized="uninitialized",e.pending="pending",e.fulfilled="fulfilled",e.rejected="rejected",e))(lD||{});function HE(e){return{status:e,isUninitialized:e==="uninitialized",isLoading:e==="pending",isSuccess:e==="fulfilled",isError:e==="rejected"}}var FE=bs;function db(e,t){if(e===t||!(FE(e)&&FE(t)||Array.isArray(e)&&Array.isArray(t)))return t;const n=Object.keys(t),i=Object.keys(e);let o=n.length===i.length;const l=Array.isArray(t)?[]:{};for(const u of n)l[u]=db(e[u],t[u]),o&&(o=e[u]===l[u]);return o?e:l}function ly(e){let t=0;for(const n in e)t++;return t}var qE=e=>[].concat(...e);function Q9(e){return new RegExp("(^|:)//").test(e)}function K9(){return typeof document>"u"?!0:document.visibilityState!=="hidden"}function bh(e){return e!=null}function X9(){return typeof navigator>"u"||navigator.onLine===void 0?!0:navigator.onLine}var Z9=e=>e.replace(/\/$/,""),J9=e=>e.replace(/^\//,"");function eH(e,t){if(!e)return t;if(!t)return e;if(Q9(t))return t;const n=e.endsWith("/")||!t.startsWith("?")?"/":"";return e=Z9(e),t=J9(t),`${e}${n}${t}`}function tH(e,t,n){return e.has(t)?e.get(t):e.set(t,n).get(t)}function _v(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}var bv=()=>new Map,VE=(...e)=>fetch(...e),nH=e=>e.status>=200&&e.status<=299,rH=e=>/ion\/(vnd\.api\+)?json/.test(e.get("content-type")||"");function GE(e){if(!bs(e))return e;const t={...e};for(const[n,i]of Object.entries(t))i===void 0&&delete t[n];return t}function iH({baseUrl:e,prepareHeaders:t=_=>_,fetchFn:n=VE,paramsSerializer:i,isJsonContentType:o=rH,jsonContentType:l="application/json",jsonReplacer:u,timeout:f,responseHandler:p,validateStatus:h,...y}={}){return typeof fetch>"u"&&n===VE&&console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."),async(v,S,x)=>{const{getState:D,extra:T,endpoint:k,forced:M,type:R}=S;let I,{url:O,headers:A=new Headers(y.headers),params:j=void 0,responseHandler:U=p??"json",validateStatus:F=h??nH,timeout:H=f,...z}=typeof v=="string"?{url:v}:v,G,V=S.signal;H&&(G=new AbortController,S.signal.addEventListener("abort",G.abort),V=G.signal);let te={...y,signal:V,...z};A=new Headers(GE(A)),te.headers=await t(A,{getState:D,arg:v,extra:T,endpoint:k,forced:M,type:R,extraOptions:x})||A;const ue=de=>typeof de=="object"&&(bs(de)||Array.isArray(de)||typeof de.toJSON=="function");if(!te.headers.has("content-type")&&ue(te.body)&&te.headers.set("content-type",l),ue(te.body)&&o(te.headers)&&(te.body=JSON.stringify(te.body,u)),j){const de=~O.indexOf("?")?"&":"?",me=i?i(j):new URLSearchParams(GE(j));O+=de+me}O=eH(e,O);const P=new Request(O,te);I={request:new Request(O,te)};let ne,ae=!1,N=G&&setTimeout(()=>{ae=!0,G.abort()},H);try{ne=await n(P)}catch(de){return{error:{status:ae?"TIMEOUT_ERROR":"FETCH_ERROR",error:String(de)},meta:I}}finally{N&&clearTimeout(N),G?.signal.removeEventListener("abort",G.abort)}const K=ne.clone();I.response=K;let le,ie="";try{let de;if(await Promise.all([_(ne,U).then(me=>le=me,me=>de=me),K.text().then(me=>ie=me,()=>{})]),de)throw de}catch(de){return{error:{status:"PARSING_ERROR",originalStatus:ne.status,data:ie,error:String(de)},meta:I}}return F(ne,le)?{data:le,meta:I}:{error:{status:ne.status,data:le},meta:I}};async function _(v,S){if(typeof S=="function")return S(v);if(S==="content-type"&&(S=o(v.headers)?"json":"text"),S==="json"){const x=await v.text();return x.length?JSON.parse(x):null}return v.text()}}var WE=class{constructor(e,t=void 0){this.value=e,this.meta=t}},fb=mr("__rtkq/focused"),cD=mr("__rtkq/unfocused"),hb=mr("__rtkq/online"),uD=mr("__rtkq/offline");function up(e){return e.type==="query"}function sH(e){return e.type==="mutation"}function dp(e){return e.type==="infinitequery"}function Sh(e){return up(e)||dp(e)}function pb(e,t,n,i,o,l){return oH(e)?e(t,n,i,o).filter(bh).map(Sv).map(l):Array.isArray(e)?e.map(Sv).map(l):[]}function oH(e){return typeof e=="function"}function Sv(e){return typeof e=="string"?{type:e}:e}function aH(e,t){return e.catch(t)}var cu=Symbol("forceQueryFn"),xv=e=>typeof e[cu]=="function";function lH({serializeQueryArgs:e,queryThunk:t,infiniteQueryThunk:n,mutationThunk:i,api:o,context:l,internalState:u}){const{runningQueries:f,runningMutations:p}=u,{unsubscribeQueryResult:h,removeMutationResult:y,updateSubscriptionOptions:_}=o.internalActions;return{buildInitiateQuery:k,buildInitiateInfiniteQuery:M,buildInitiateMutation:R,getRunningQueryThunk:v,getRunningMutationThunk:S,getRunningQueriesThunk:x,getRunningMutationsThunk:D};function v(I,O){return A=>{const j=l.endpointDefinitions[I],U=e({queryArgs:O,endpointDefinition:j,endpointName:I});return f.get(A)?.[U]}}function S(I,O){return A=>p.get(A)?.[O]}function x(){return I=>Object.values(f.get(I)||{}).filter(bh)}function D(){return I=>Object.values(p.get(I)||{}).filter(bh)}function T(I,O){const A=(j,{subscribe:U=!0,forceRefetch:F,subscriptionOptions:H,[cu]:z,...G}={})=>(V,te)=>{const ue=e({queryArgs:j,endpointDefinition:O,endpointName:I});let P;const X={...G,type:"query",subscribe:U,forceRefetch:F,subscriptionOptions:H,endpointName:I,originalArgs:j,queryCacheKey:ue,[cu]:z};if(up(O))P=t(X);else{const{direction:Ae,initialPageParam:be}=G;P=n({...X,direction:Ae,initialPageParam:be})}const ne=o.endpoints[I].select(j),ae=V(P),N=ne(te()),{requestId:K,abort:le}=ae,ie=N.requestId!==K,de=f.get(V)?.[ue],me=()=>ne(te()),pe=Object.assign(z?ae.then(me):ie&&!de?Promise.resolve(N):Promise.all([de,ae]).then(me),{arg:j,requestId:K,subscriptionOptions:H,queryCacheKey:ue,abort:le,async unwrap(){const Ae=await pe;if(Ae.isError)throw Ae.error;return Ae.data},refetch:()=>V(A(j,{subscribe:!1,forceRefetch:!0})),unsubscribe(){U&&V(h({queryCacheKey:ue,requestId:K}))},updateSubscriptionOptions(Ae){pe.subscriptionOptions=Ae,V(_({endpointName:I,requestId:K,queryCacheKey:ue,options:Ae}))}});if(!de&&!ie&&!z){const Ae=tH(f,V,{});Ae[ue]=pe,pe.then(()=>{delete Ae[ue],ly(Ae)||f.delete(V)})}return pe};return A}function k(I,O){return T(I,O)}function M(I,O){return T(I,O)}function R(I){return(O,{track:A=!0,fixedCacheKey:j}={})=>(U,F)=>{const H=i({type:"mutation",endpointName:I,originalArgs:O,track:A,fixedCacheKey:j}),z=U(H),{requestId:G,abort:V,unwrap:te}=z,ue=aH(z.unwrap().then(ae=>({data:ae})),ae=>({error:ae})),P=()=>{U(y({requestId:G,fixedCacheKey:j}))},X=Object.assign(ue,{arg:z.arg,requestId:G,abort:V,unwrap:te,reset:P}),ne=p.get(U)||{};return p.set(U,ne),ne[G]=X,X.then(()=>{delete ne[G],ly(ne)||p.delete(U)}),j&&(ne[j]=X,X.then(()=>{ne[j]===X&&(delete ne[j],ly(ne)||p.delete(U))})),X}}}var dD=class extends Y9{constructor(e,t,n,i){super(e),this.value=t,this.schemaName=n,this._bqMeta=i}},Js=(e,t)=>Array.isArray(e)?e.includes(t):!!e;async function eo(e,t,n,i){const o=await e["~standard"].validate(t);if(o.issues)throw new dD(o.issues,t,n,i);return o.value}function YE(e){return e}var hc=(e={})=>({...e,[Vh]:!0});function cH({reducerPath:e,baseQuery:t,context:{endpointDefinitions:n},serializeQueryArgs:i,api:o,assertTagType:l,selectors:u,onSchemaFailure:f,catchSchemaFailure:p,skipSchemaValidation:h}){const y=(z,G,V,te)=>(ue,P)=>{const X=n[z],ne=i({queryArgs:G,endpointDefinition:X,endpointName:z});if(ue(o.internalActions.queryResultPatched({queryCacheKey:ne,patches:V})),!te)return;const ae=o.endpoints[z].select(G)(P()),N=pb(X.providesTags,ae.data,void 0,G,{},l);ue(o.internalActions.updateProvidedBy([{queryCacheKey:ne,providedTags:N}]))};function _(z,G,V=0){const te=[G,...z];return V&&te.length>V?te.slice(0,-1):te}function v(z,G,V=0){const te=[...z,G];return V&&te.length>V?te.slice(1):te}const S=(z,G,V,te=!0)=>(ue,P)=>{const ne=o.endpoints[z].select(G)(P()),ae={patches:[],inversePatches:[],undo:()=>ue(o.util.patchQueryData(z,G,ae.inversePatches,te))};if(ne.status==="uninitialized")return ae;let N;if("data"in ne)if(br(ne.data)){const[K,le,ie]=XR(ne.data,V);ae.patches.push(...le),ae.inversePatches.push(...ie),N=K}else N=V(ne.data),ae.patches.push({op:"replace",path:[],value:N}),ae.inversePatches.push({op:"replace",path:[],value:ne.data});return ae.patches.length===0||ue(o.util.patchQueryData(z,G,ae.patches,te)),ae},x=(z,G,V)=>te=>te(o.endpoints[z].initiate(G,{subscribe:!1,forceRefetch:!0,[cu]:()=>({data:V})})),D=(z,G)=>z.query&&z[G]?z[G]:YE,T=async(z,{signal:G,abort:V,rejectWithValue:te,fulfillWithValue:ue,dispatch:P,getState:X,extra:ne})=>{const ae=n[z.endpointName],{metaSchema:N,skipSchemaValidation:K=h}=ae;try{let le=YE;const ie={signal:G,abort:V,dispatch:P,getState:X,extra:ne,endpoint:z.endpointName,type:z.type,forced:z.type==="query"?k(z,X()):void 0,queryCacheKey:z.type==="query"?z.queryCacheKey:void 0},de=z.type==="query"?z[cu]:void 0;let me;const pe=async(be,De,$e,vt)=>{if(De==null&&be.pages.length)return Promise.resolve({data:be});const mt={queryArg:z.originalArgs,pageParam:De},Ln=await Ae(mt),wt=vt?_:v;return{data:{pages:wt(be.pages,Ln.data,$e),pageParams:wt(be.pageParams,De,$e)},meta:Ln.meta}};async function Ae(be){let De;const{extraOptions:$e,argSchema:vt,rawResponseSchema:mt,responseSchema:Ln}=ae;if(vt&&!Js(K,"arg")&&(be=await eo(vt,be,"argSchema",{})),de?De=de():ae.query?(le=D(ae,"transformResponse"),De=await t(ae.query(be),ie,$e)):De=await ae.queryFn(be,ie,$e,Ur=>t(Ur,ie,$e)),typeof process<"u",De.error)throw new WE(De.error,De.meta);let{data:wt}=De;mt&&!Js(K,"rawResponse")&&(wt=await eo(mt,De.data,"rawResponseSchema",De.meta));let jn=await le(wt,De.meta,be);return Ln&&!Js(K,"response")&&(jn=await eo(Ln,jn,"responseSchema",De.meta)),{...De,data:jn}}if(z.type==="query"&&"infiniteQueryOptions"in ae){const{infiniteQueryOptions:be}=ae,{maxPages:De=1/0}=be;let $e;const vt={pages:[],pageParams:[]},mt=u.selectQueryEntry(X(),z.queryCacheKey)?.data,wt=k(z,X())&&!z.direction||!mt?vt:mt;if("direction"in z&&z.direction&&wt.pages.length){const jn=z.direction==="backward",Wt=(jn?fD:wv)(be,wt,z.originalArgs);$e=await pe(wt,Wt,De,jn)}else{const{initialPageParam:jn=be.initialPageParam}=z,Ur=mt?.pageParams??[],Wt=Ur[0]??jn,rl=Ur.length;$e=await pe(wt,Wt,De),de&&($e={data:$e.data.pages[0]});for(let Ds=1;Ds<rl;Ds++){const Io=wv(be,$e.data,z.originalArgs);$e=await pe($e.data,Io,De)}}me=$e}else me=await Ae(z.originalArgs);return N&&!Js(K,"meta")&&me.meta&&(me.meta=await eo(N,me.meta,"metaSchema",me.meta)),ue(me.data,hc({fulfilledTimeStamp:Date.now(),baseQueryMeta:me.meta}))}catch(le){let ie=le;if(ie instanceof WE){let de=D(ae,"transformErrorResponse");const{rawErrorResponseSchema:me,errorResponseSchema:pe}=ae;let{value:Ae,meta:be}=ie;try{me&&!Js(K,"rawErrorResponse")&&(Ae=await eo(me,Ae,"rawErrorResponseSchema",be)),N&&!Js(K,"meta")&&(be=await eo(N,be,"metaSchema",be));let De=await de(Ae,be,z.originalArgs);return pe&&!Js(K,"errorResponse")&&(De=await eo(pe,De,"errorResponseSchema",be)),te(De,hc({baseQueryMeta:be}))}catch(De){ie=De}}try{if(ie instanceof dD){const de={endpoint:z.endpointName,arg:z.originalArgs,type:z.type,queryCacheKey:z.type==="query"?z.queryCacheKey:void 0};ae.onSchemaFailure?.(ie,de),f?.(ie,de);const{catchSchemaFailure:me=p}=ae;if(me)return te(me(ie,de),hc({baseQueryMeta:ie._bqMeta}))}}catch(de){ie=de}throw console.error(ie),ie}};function k(z,G){const V=u.selectQueryEntry(G,z.queryCacheKey),te=u.selectConfig(G).refetchOnMountOrArgChange,ue=V?.fulfilledTimeStamp,P=z.forceRefetch??(z.subscribe&&te);return P?P===!0||(Number(new Date)-Number(ue))/1e3>=P:!1}const M=()=>kw(`${e}/executeQuery`,T,{getPendingMeta({arg:G}){const V=n[G.endpointName];return hc({startedTimeStamp:Date.now(),...dp(V)?{direction:G.direction}:{}})},condition(G,{getState:V}){const te=V(),ue=u.selectQueryEntry(te,G.queryCacheKey),P=ue?.fulfilledTimeStamp,X=G.originalArgs,ne=ue?.originalArgs,ae=n[G.endpointName],N=G.direction;return xv(G)?!0:ue?.status==="pending"?!1:k(G,te)||up(ae)&&ae?.forceRefetch?.({currentArg:X,previousArg:ne,endpointState:ue,state:te})?!0:!(P&&!N)},dispatchConditionRejection:!0}),R=M(),I=M(),O=kw(`${e}/executeMutation`,T,{getPendingMeta(){return hc({startedTimeStamp:Date.now()})}}),A=z=>"force"in z,j=z=>"ifOlderThan"in z,U=(z,G,V)=>(te,ue)=>{const P=A(V)&&V.force,X=j(V)&&V.ifOlderThan,ne=(N=!0)=>{const K={forceRefetch:N,isPrefetch:!0};return o.endpoints[z].initiate(G,K)},ae=o.endpoints[z].select(G)(ue());if(P)te(ne());else if(X){const N=ae?.fulfilledTimeStamp;if(!N){te(ne());return}(Number(new Date)-Number(new Date(N)))/1e3>=X&&te(ne())}else te(ne(!1))};function F(z){return G=>G?.meta?.arg?.endpointName===z}function H(z,G){return{matchPending:Dc(h_(z),F(G)),matchFulfilled:Dc(Ss(z),F(G)),matchRejected:Dc(Pa(z),F(G))}}return{queryThunk:R,mutationThunk:O,infiniteQueryThunk:I,prefetch:U,updateQueryData:S,upsertQueryData:x,patchQueryData:y,buildMatchThunkActions:H}}function wv(e,{pages:t,pageParams:n},i){const o=t.length-1;return e.getNextPageParam(t[o],t,n[o],n,i)}function fD(e,{pages:t,pageParams:n},i){return e.getPreviousPageParam?.(t[0],t,n[0],n,i)}function hD(e,t,n,i){return pb(n[e.meta.arg.endpointName][t],Ss(e)?e.payload:void 0,Wh(e)?e.payload:void 0,e.meta.arg.originalArgs,"baseQueryMeta"in e.meta?e.meta.baseQueryMeta:void 0,i)}function af(e,t,n){const i=e[t];i&&n(i)}function uu(e){return("arg"in e?e.arg.fixedCacheKey:e.fixedCacheKey)??e.requestId}function QE(e,t,n){const i=e[uu(t)];i&&n(i)}var lf={};function uH({reducerPath:e,queryThunk:t,mutationThunk:n,serializeQueryArgs:i,context:{endpointDefinitions:o,apiUid:l,extractRehydrationInfo:u,hasRehydrationInfo:f},assertTagType:p,config:h}){const y=mr(`${e}/resetApiState`);function _(F,H,z,G){F[H.queryCacheKey]??={status:"uninitialized",endpointName:H.endpointName},af(F,H.queryCacheKey,V=>{V.status="pending",V.requestId=z&&V.requestId?V.requestId:G.requestId,H.originalArgs!==void 0&&(V.originalArgs=H.originalArgs),V.startedTimeStamp=G.startedTimeStamp;const te=o[G.arg.endpointName];dp(te)&&"direction"in H&&(V.direction=H.direction)})}function v(F,H,z,G){af(F,H.arg.queryCacheKey,V=>{if(V.requestId!==H.requestId&&!G)return;const{merge:te}=o[H.arg.endpointName];if(V.status="fulfilled",te)if(V.data!==void 0){const{fulfilledTimeStamp:ue,arg:P,baseQueryMeta:X,requestId:ne}=H;let ae=mu(V.data,N=>te(N,z,{arg:P.originalArgs,baseQueryMeta:X,fulfilledTimeStamp:ue,requestId:ne}));V.data=ae}else V.data=z;else V.data=o[H.arg.endpointName].structuralSharing??!0?db(Lr(V.data)?I6(V.data):V.data,z):z;delete V.error,V.fulfilledTimeStamp=H.fulfilledTimeStamp})}const S=Kn({name:`${e}/queries`,initialState:lf,reducers:{removeQueryResult:{reducer(F,{payload:{queryCacheKey:H}}){delete F[H]},prepare:ic()},cacheEntriesUpserted:{reducer(F,H){for(const z of H.payload){const{queryDescription:G,value:V}=z;_(F,G,!0,{arg:G,requestId:H.meta.requestId,startedTimeStamp:H.meta.timestamp}),v(F,{arg:G,requestId:H.meta.requestId,fulfilledTimeStamp:H.meta.timestamp,baseQueryMeta:{}},V,!0)}},prepare:F=>({payload:F.map(G=>{const{endpointName:V,arg:te,value:ue}=G,P=o[V];return{queryDescription:{type:"query",endpointName:V,originalArgs:G.arg,queryCacheKey:i({queryArgs:te,endpointDefinition:P,endpointName:V})},value:ue}}),meta:{[Vh]:!0,requestId:p_(),timestamp:Date.now()}})},queryResultPatched:{reducer(F,{payload:{queryCacheKey:H,patches:z}}){af(F,H,G=>{G.data=Ew(G.data,z.concat())})},prepare:ic()}},extraReducers(F){F.addCase(t.pending,(H,{meta:z,meta:{arg:G}})=>{const V=xv(G);_(H,G,V,z)}).addCase(t.fulfilled,(H,{meta:z,payload:G})=>{const V=xv(z.arg);v(H,z,G,V)}).addCase(t.rejected,(H,{meta:{condition:z,arg:G,requestId:V},error:te,payload:ue})=>{af(H,G.queryCacheKey,P=>{if(!z){if(P.requestId!==V)return;P.status="rejected",P.error=ue??te}})}).addMatcher(f,(H,z)=>{const{queries:G}=u(z);for(const[V,te]of Object.entries(G))(te?.status==="fulfilled"||te?.status==="rejected")&&(H[V]=te)})}}),x=Kn({name:`${e}/mutations`,initialState:lf,reducers:{removeMutationResult:{reducer(F,{payload:H}){const z=uu(H);z in F&&delete F[z]},prepare:ic()}},extraReducers(F){F.addCase(n.pending,(H,{meta:z,meta:{requestId:G,arg:V,startedTimeStamp:te}})=>{V.track&&(H[uu(z)]={requestId:G,status:"pending",endpointName:V.endpointName,startedTimeStamp:te})}).addCase(n.fulfilled,(H,{payload:z,meta:G})=>{G.arg.track&&QE(H,G,V=>{V.requestId===G.requestId&&(V.status="fulfilled",V.data=z,V.fulfilledTimeStamp=G.fulfilledTimeStamp)})}).addCase(n.rejected,(H,{payload:z,error:G,meta:V})=>{V.arg.track&&QE(H,V,te=>{te.requestId===V.requestId&&(te.status="rejected",te.error=z??G)})}).addMatcher(f,(H,z)=>{const{mutations:G}=u(z);for(const[V,te]of Object.entries(G))(te?.status==="fulfilled"||te?.status==="rejected")&&V!==te?.requestId&&(H[V]=te)})}}),D={tags:{},keys:{}},T=Kn({name:`${e}/invalidation`,initialState:D,reducers:{updateProvidedBy:{reducer(F,H){for(const{queryCacheKey:z,providedTags:G}of H.payload){k(F,z);for(const{type:V,id:te}of G){const ue=(F.tags[V]??={})[te||"__internal_without_id"]??=[];ue.includes(z)||ue.push(z)}F.keys[z]=G}},prepare:ic()}},extraReducers(F){F.addCase(S.actions.removeQueryResult,(H,{payload:{queryCacheKey:z}})=>{k(H,z)}).addMatcher(f,(H,z)=>{const{provided:G}=u(z);for(const[V,te]of Object.entries(G.tags??{}))for(const[ue,P]of Object.entries(te)){const X=(H.tags[V]??={})[ue||"__internal_without_id"]??=[];for(const ne of P)X.includes(ne)||X.push(ne),H.keys[ne]=G.keys[ne]}}).addMatcher(_i(Ss(t),Wh(t)),(H,z)=>{M(H,[z])}).addMatcher(S.actions.cacheEntriesUpserted.match,(H,z)=>{const G=z.payload.map(({queryDescription:V,value:te})=>({type:"UNKNOWN",payload:te,meta:{requestStatus:"fulfilled",requestId:"UNKNOWN",arg:V}}));M(H,G)})}});function k(F,H){const z=F.keys[H]??[];for(const G of z){const V=G.type,te=G.id??"__internal_without_id",ue=F.tags[V]?.[te];ue&&(F.tags[V][te]=ue.filter(P=>P!==H))}delete F.keys[H]}function M(F,H){const z=H.map(G=>{const V=hD(G,"providesTags",o,p),{queryCacheKey:te}=G.meta.arg;return{queryCacheKey:te,providedTags:V}});T.caseReducers.updateProvidedBy(F,T.actions.updateProvidedBy(z))}const R=Kn({name:`${e}/subscriptions`,initialState:lf,reducers:{updateSubscriptionOptions(F,H){},unsubscribeQueryResult(F,H){},internal_getRTKQSubscriptions(){}}}),I=Kn({name:`${e}/internalSubscriptions`,initialState:lf,reducers:{subscriptionsUpdated:{reducer(F,H){return Ew(F,H.payload)},prepare:ic()}}}),O=Kn({name:`${e}/config`,initialState:{online:X9(),focused:K9(),middlewareRegistered:!1,...h},reducers:{middlewareRegistered(F,{payload:H}){F.middlewareRegistered=F.middlewareRegistered==="conflict"||l!==H?"conflict":!0}},extraReducers:F=>{F.addCase(hb,H=>{H.online=!0}).addCase(uD,H=>{H.online=!1}).addCase(fb,H=>{H.focused=!0}).addCase(cD,H=>{H.focused=!1}).addMatcher(f,H=>({...H}))}}),A=qR({queries:S.reducer,mutations:x.reducer,provided:T.reducer,subscriptions:I.reducer,config:O.reducer}),j=(F,H)=>A(y.match(H)?void 0:F,H),U={...O.actions,...S.actions,...R.actions,...I.actions,...x.actions,...T.actions,resetApiState:y};return{reducer:j,actions:U}}var cr=Symbol.for("RTKQ/skipToken"),pD={status:"uninitialized"},KE=mu(pD,()=>{}),XE=mu(pD,()=>{});function dH({serializeQueryArgs:e,reducerPath:t,createSelector:n}){const i=R=>KE,o=R=>XE;return{buildQuerySelector:v,buildInfiniteQuerySelector:S,buildMutationSelector:x,selectInvalidatedBy:D,selectCachedArgsForQuery:T,selectApiState:u,selectQueries:f,selectMutations:h,selectQueryEntry:p,selectConfig:y};function l(R){return{...R,...HE(R.status)}}function u(R){return R[t]}function f(R){return u(R)?.queries}function p(R,I){return f(R)?.[I]}function h(R){return u(R)?.mutations}function y(R){return u(R)?.config}function _(R,I,O){return A=>{if(A===cr)return n(i,O);const j=e({queryArgs:A,endpointDefinition:I,endpointName:R});return n(F=>p(F,j)??KE,O)}}function v(R,I){return _(R,I,l)}function S(R,I){const{infiniteQueryOptions:O}=I;function A(j){const U={...j,...HE(j.status)},{isLoading:F,isError:H,direction:z}=U,G=z==="forward",V=z==="backward";return{...U,hasNextPage:k(O,U.data,U.originalArgs),hasPreviousPage:M(O,U.data,U.originalArgs),isFetchingNextPage:F&&G,isFetchingPreviousPage:F&&V,isFetchNextPageError:H&&G,isFetchPreviousPageError:H&&V}}return _(R,I,A)}function x(){return R=>{let I;return typeof R=="object"?I=uu(R)??cr:I=R,n(I===cr?o:j=>u(j)?.mutations?.[I]??XE,l)}}function D(R,I){const O=R[t],A=new Set;for(const j of I.filter(bh).map(Sv)){const U=O.provided.tags[j.type];if(!U)continue;let F=(j.id!==void 0?U[j.id]:qE(Object.values(U)))??[];for(const H of F)A.add(H)}return qE(Array.from(A.values()).map(j=>{const U=O.queries[j];return U?[{queryCacheKey:j,endpointName:U.endpointName,originalArgs:U.originalArgs}]:[]}))}function T(R,I){return Object.values(f(R)).filter(O=>O?.endpointName===I&&O.status!=="uninitialized").map(O=>O.originalArgs)}function k(R,I,O){return I?wv(R,I,O)!=null:!1}function M(R,I,O){return!I||!R.getPreviousPageParam?!1:fD(R,I,O)!=null}}var ZE=WeakMap?new WeakMap:void 0,JE=({endpointName:e,queryArgs:t})=>{let n="";const i=ZE?.get(t);if(typeof i=="string")n=i;else{const o=JSON.stringify(t,(l,u)=>(u=typeof u=="bigint"?{$bigint:u.toString()}:u,u=bs(u)?Object.keys(u).sort().reduce((f,p)=>(f[p]=u[p],f),{}):u,u));bs(t)&&ZE?.set(t,o),n=o}return`${e}(${n})`};function mD(...e){return function(n){const i=Kf(h=>n.extractRehydrationInfo?.(h,{reducerPath:n.reducerPath??"api"})),o={reducerPath:"api",keepUnusedDataFor:60,refetchOnMountOrArgChange:!1,refetchOnFocus:!1,refetchOnReconnect:!1,invalidationBehavior:"delayed",...n,extractRehydrationInfo:i,serializeQueryArgs(h){let y=JE;if("serializeQueryArgs"in h.endpointDefinition){const _=h.endpointDefinition.serializeQueryArgs;y=v=>{const S=_(v);return typeof S=="string"?S:JE({...v,queryArgs:S})}}else n.serializeQueryArgs&&(y=n.serializeQueryArgs);return y(h)},tagTypes:[...n.tagTypes||[]]},l={endpointDefinitions:{},batch(h){h()},apiUid:p_(),extractRehydrationInfo:i,hasRehydrationInfo:Kf(h=>i(h)!=null)},u={injectEndpoints:p,enhanceEndpoints({addTagTypes:h,endpoints:y}){if(h)for(const _ of h)o.tagTypes.includes(_)||o.tagTypes.push(_);if(y)for(const[_,v]of Object.entries(y))typeof v=="function"?v(l.endpointDefinitions[_]):Object.assign(l.endpointDefinitions[_]||{},v);return u}},f=e.map(h=>h.init(u,o,l));function p(h){const y=h.endpoints({query:_=>({..._,type:"query"}),mutation:_=>({..._,type:"mutation"}),infiniteQuery:_=>({..._,type:"infinitequery"})});for(const[_,v]of Object.entries(y)){if(h.overrideExisting!==!0&&_ in l.endpointDefinitions){if(h.overrideExisting==="throw")throw new Error(gr(39));continue}l.endpointDefinitions[_]=v;for(const S of f)S.injectEndpoint(_,v)}return u}return u.injectEndpoints({endpoints:n.endpoints})}}function oi(e,...t){return Object.assign(e,...t)}var fH=({api:e,queryThunk:t,internalState:n,mwApi:i})=>{const o=`${e.reducerPath}/subscriptions`;let l=null,u=null;const{updateSubscriptionOptions:f,unsubscribeQueryResult:p}=e.internalActions,h=(D,T)=>{if(f.match(T)){const{queryCacheKey:M,requestId:R,options:I}=T.payload,O=D.get(M);return O?.has(R)&&O.set(R,I),!0}if(p.match(T)){const{queryCacheKey:M,requestId:R}=T.payload,I=D.get(M);return I&&I.delete(R),!0}if(e.internalActions.removeQueryResult.match(T))return D.delete(T.payload.queryCacheKey),!0;if(t.pending.match(T)){const{meta:{arg:M,requestId:R}}=T,I=_v(D,M.queryCacheKey,bv);return M.subscribe&&I.set(R,M.subscriptionOptions??I.get(R)??{}),!0}let k=!1;if(t.rejected.match(T)){const{meta:{condition:M,arg:R,requestId:I}}=T;if(M&&R.subscribe){const O=_v(D,R.queryCacheKey,bv);O.set(I,R.subscriptionOptions??O.get(I)??{}),k=!0}}return k},y=()=>n.currentSubscriptions,S={getSubscriptions:y,getSubscriptionCount:D=>y().get(D)?.size??0,isRequestSubscribed:(D,T)=>!!y()?.get(D)?.get(T)};function x(D){return JSON.parse(JSON.stringify(Object.fromEntries([...D].map(([T,k])=>[T,Object.fromEntries(k)]))))}return(D,T)=>{if(l||(l=x(n.currentSubscriptions)),e.util.resetApiState.match(D))return l={},n.currentSubscriptions.clear(),u=null,[!0,!1];if(e.internalActions.internal_getRTKQSubscriptions.match(D))return[!1,S];const k=h(n.currentSubscriptions,D);let M=!0;if(k){u||(u=setTimeout(()=>{const O=x(n.currentSubscriptions),[,A]=XR(l,()=>O);T.next(e.internalActions.subscriptionsUpdated(A)),l=O,u=null},500));const R=typeof D.type=="string"&&!!D.type.startsWith(o),I=t.rejected.match(D)&&D.meta.condition&&!!D.meta.arg.subscribe;M=!R&&!I}return[M,!1]}},hH=2147483647/1e3-1,pH=({reducerPath:e,api:t,queryThunk:n,context:i,internalState:o,selectors:{selectQueryEntry:l,selectConfig:u},getRunningQueryThunk:f,mwApi:p})=>{const{removeQueryResult:h,unsubscribeQueryResult:y,cacheEntriesUpserted:_}=t.internalActions,v=o.runningQueries.get(p.dispatch),S=_i(y.match,n.fulfilled,n.rejected,_.match);function x(R){const I=o.currentSubscriptions.get(R);if(!I)return!1;const O=I.size>0,A=v?.[R]!==void 0;return O||A}const D={},T=(R,I,O)=>{const A=I.getState(),j=u(A);if(S(R)){let U;if(_.match(R))U=R.payload.map(F=>F.queryDescription.queryCacheKey);else{const{queryCacheKey:F}=y.match(R)?R.payload:R.meta.arg;U=[F]}k(U,I,j)}if(t.util.resetApiState.match(R))for(const[U,F]of Object.entries(D))F&&clearTimeout(F),delete D[U];if(i.hasRehydrationInfo(R)){const{queries:U}=i.extractRehydrationInfo(R);k(Object.keys(U),I,j)}};function k(R,I,O){const A=I.getState();for(const j of R){const U=l(A,j);U?.endpointName&&M(j,U.endpointName,I,O)}}function M(R,I,O,A){const U=i.endpointDefinitions[I]?.keepUnusedDataFor??A.keepUnusedDataFor;if(U===1/0)return;const F=Math.max(0,Math.min(U,hH));if(!x(R)){const H=D[R];H&&clearTimeout(H),D[R]=setTimeout(()=>{if(!x(R)){const z=l(O.getState(),R);z?.endpointName&&O.dispatch(f(z.endpointName,z.originalArgs))?.abort(),O.dispatch(h({queryCacheKey:R}))}delete D[R]},F*1e3)}}return T},eC=new Error("Promise never resolved before cacheEntryRemoved."),mH=({api:e,reducerPath:t,context:n,queryThunk:i,mutationThunk:o,internalState:l,selectors:{selectQueryEntry:u,selectApiState:f}})=>{const p=Jy(i),h=Jy(o),y=Ss(i,o),_={};function v(k,M,R){const I=_[k];I?.valueResolved&&(I.valueResolved({data:M,meta:R}),delete I.valueResolved)}function S(k){const M=_[k];M&&(delete _[k],M.cacheEntryRemoved())}const x=(k,M,R)=>{const I=D(k);function O(A,j,U,F){const H=u(R,j),z=u(M.getState(),j);!H&&z&&T(A,F,j,M,U)}if(i.pending.match(k))O(k.meta.arg.endpointName,I,k.meta.requestId,k.meta.arg.originalArgs);else if(e.internalActions.cacheEntriesUpserted.match(k))for(const{queryDescription:A,value:j}of k.payload){const{endpointName:U,originalArgs:F,queryCacheKey:H}=A;O(U,H,k.meta.requestId,F),v(H,j,{})}else if(o.pending.match(k))M.getState()[t].mutations[I]&&T(k.meta.arg.endpointName,k.meta.arg.originalArgs,I,M,k.meta.requestId);else if(y(k))v(I,k.payload,k.meta.baseQueryMeta);else if(e.internalActions.removeQueryResult.match(k)||e.internalActions.removeMutationResult.match(k))S(I);else if(e.util.resetApiState.match(k))for(const A of Object.keys(_))S(A)};function D(k){return p(k)?k.meta.arg.queryCacheKey:h(k)?k.meta.arg.fixedCacheKey??k.meta.requestId:e.internalActions.removeQueryResult.match(k)?k.payload.queryCacheKey:e.internalActions.removeMutationResult.match(k)?uu(k.payload):""}function T(k,M,R,I,O){const A=n.endpointDefinitions[k],j=A?.onCacheEntryAdded;if(!j)return;const U={},F=new Promise(ue=>{U.cacheEntryRemoved=ue}),H=Promise.race([new Promise(ue=>{U.valueResolved=ue}),F.then(()=>{throw eC})]);H.catch(()=>{}),_[R]=U;const z=e.endpoints[k].select(Sh(A)?M:R),G=I.dispatch((ue,P,X)=>X),V={...I,getCacheEntry:()=>z(I.getState()),requestId:O,extra:G,updateCachedData:Sh(A)?ue=>I.dispatch(e.util.updateQueryData(k,M,ue)):void 0,cacheDataLoaded:H,cacheEntryRemoved:F},te=j(M,V);Promise.resolve(te).catch(ue=>{if(ue!==eC)throw ue})}return x},gH=({api:e,context:{apiUid:t},reducerPath:n})=>(i,o)=>{e.util.resetApiState.match(i)&&o.dispatch(e.internalActions.middlewareRegistered(t))},yH=({reducerPath:e,context:t,context:{endpointDefinitions:n},mutationThunk:i,queryThunk:o,api:l,assertTagType:u,refetchQuery:f,internalState:p})=>{const{removeQueryResult:h}=l.internalActions,y=_i(Ss(i),Wh(i)),_=_i(Ss(i,o),Pa(i,o));let v=[];const S=(T,k)=>{y(T)?D(hD(T,"invalidatesTags",n,u),k):_(T)?D([],k):l.util.invalidateTags.match(T)&&D(pb(T.payload,void 0,void 0,void 0,void 0,u),k)};function x(T){const{queries:k,mutations:M}=T;for(const R of[k,M])for(const I in R)if(R[I]?.status==="pending")return!0;return!1}function D(T,k){const M=k.getState(),R=M[e];if(v.push(...T),R.config.invalidationBehavior==="delayed"&&x(R))return;const I=v;if(v=[],I.length===0)return;const O=l.util.selectInvalidatedBy(M,I);t.batch(()=>{const A=Array.from(O.values());for(const{queryCacheKey:j}of A){const U=R.queries[j],F=_v(p.currentSubscriptions,j,bv);U&&(F.size===0?k.dispatch(h({queryCacheKey:j})):U.status!=="uninitialized"&&k.dispatch(f(U)))}})}return S},vH=({reducerPath:e,queryThunk:t,api:n,refetchQuery:i,internalState:o})=>{const{currentPolls:l,currentSubscriptions:u}=o,f=new Set;let p=null;const h=(T,k)=>{(n.internalActions.updateSubscriptionOptions.match(T)||n.internalActions.unsubscribeQueryResult.match(T))&&y(T.payload.queryCacheKey,k),(t.pending.match(T)||t.rejected.match(T)&&T.meta.condition)&&y(T.meta.arg.queryCacheKey,k),(t.fulfilled.match(T)||t.rejected.match(T)&&!T.meta.condition)&&_(T.meta.arg,k),n.util.resetApiState.match(T)&&(x(),p&&(clearTimeout(p),p=null),f.clear())};function y(T,k){f.add(T),p||(p=setTimeout(()=>{for(const M of f)v({queryCacheKey:M},k);f.clear(),p=null},0))}function _({queryCacheKey:T},k){const M=k.getState()[e],R=M.queries[T],I=u.get(T);if(!R||R.status==="uninitialized")return;const{lowestPollingInterval:O,skipPollingIfUnfocused:A}=D(I);if(!Number.isFinite(O))return;const j=l.get(T);j?.timeout&&(clearTimeout(j.timeout),j.timeout=void 0);const U=Date.now()+O;l.set(T,{nextPollTimestamp:U,pollingInterval:O,timeout:setTimeout(()=>{(M.config.focused||!A)&&k.dispatch(i(R)),_({queryCacheKey:T},k)},O)})}function v({queryCacheKey:T},k){const R=k.getState()[e].queries[T],I=u.get(T);if(!R||R.status==="uninitialized")return;const{lowestPollingInterval:O}=D(I);if(!Number.isFinite(O)){S(T);return}const A=l.get(T),j=Date.now()+O;(!A||j<A.nextPollTimestamp)&&_({queryCacheKey:T},k)}function S(T){const k=l.get(T);k?.timeout&&clearTimeout(k.timeout),l.delete(T)}function x(){for(const T of l.keys())S(T)}function D(T=new Map){let k=!1,M=Number.POSITIVE_INFINITY;for(const R of T.values())R.pollingInterval&&(M=Math.min(R.pollingInterval,M),k=R.skipPollingIfUnfocused||k);return{lowestPollingInterval:M,skipPollingIfUnfocused:k}}return h},_H=({api:e,context:t,queryThunk:n,mutationThunk:i})=>{const o=h_(n,i),l=Pa(n,i),u=Ss(n,i),f={};return(h,y)=>{if(o(h)){const{requestId:_,arg:{endpointName:v,originalArgs:S}}=h.meta,x=t.endpointDefinitions[v],D=x?.onQueryStarted;if(D){const T={},k=new Promise((O,A)=>{T.resolve=O,T.reject=A});k.catch(()=>{}),f[_]=T;const M=e.endpoints[v].select(Sh(x)?S:_),R=y.dispatch((O,A,j)=>j),I={...y,getCacheEntry:()=>M(y.getState()),requestId:_,extra:R,updateCachedData:Sh(x)?O=>y.dispatch(e.util.updateQueryData(v,S,O)):void 0,queryFulfilled:k};D(S,I)}}else if(u(h)){const{requestId:_,baseQueryMeta:v}=h.meta;f[_]?.resolve({data:h.payload,meta:v}),delete f[_]}else if(l(h)){const{requestId:_,rejectedWithValue:v,baseQueryMeta:S}=h.meta;f[_]?.reject({error:h.payload??h.error,isUnhandledError:!v,meta:S}),delete f[_]}}},bH=({reducerPath:e,context:t,api:n,refetchQuery:i,internalState:o})=>{const{removeQueryResult:l}=n.internalActions,u=(p,h)=>{fb.match(p)&&f(h,"refetchOnFocus"),hb.match(p)&&f(h,"refetchOnReconnect")};function f(p,h){const y=p.getState()[e],_=y.queries,v=o.currentSubscriptions;t.batch(()=>{for(const S of v.keys()){const x=_[S],D=v.get(S);if(!D||!x)continue;const T=[...D.values()];(T.some(M=>M[h]===!0)||T.every(M=>M[h]===void 0)&&y.config[h])&&(D.size===0?p.dispatch(l({queryCacheKey:S})):x.status!=="uninitialized"&&p.dispatch(i(x)))}})}return u};function SH(e){const{reducerPath:t,queryThunk:n,api:i,context:o,internalState:l}=e,{apiUid:u}=o,f={invalidateTags:mr(`${t}/invalidateTags`)},p=v=>v.type.startsWith(`${t}/`),h=[gH,pH,yH,vH,mH,_H];return{middleware:v=>{let S=!1;const x={...e,internalState:l,refetchQuery:_,isThisApiSliceAction:p,mwApi:v},D=h.map(M=>M(x)),T=fH(x),k=bH(x);return M=>R=>{if(!VR(R))return M(R);S||(S=!0,v.dispatch(i.internalActions.middlewareRegistered(u)));const I={...v,next:M},O=v.getState(),[A,j]=T(R,I,O);let U;if(A?U=M(R):U=j,v.getState()[t]&&(k(R,I,O),p(R)||o.hasRehydrationInfo(R)))for(const F of D)F(R,I,O);return U}},actions:f};function _(v){return e.api.endpoints[v.endpointName].initiate(v.originalArgs,{subscribe:!1,forceRefetch:!0})}}var tC=Symbol(),gD=({createSelector:e=Ei}={})=>({name:tC,init(t,{baseQuery:n,tagTypes:i,reducerPath:o,serializeQueryArgs:l,keepUnusedDataFor:u,refetchOnMountOrArgChange:f,refetchOnFocus:p,refetchOnReconnect:h,invalidationBehavior:y,onSchemaFailure:_,catchSchemaFailure:v,skipSchemaValidation:S},x){U6();const D=pe=>pe;Object.assign(t,{reducerPath:o,endpoints:{},internalActions:{onOnline:hb,onOffline:uD,onFocus:fb,onFocusLost:cD},util:{}});const T=dH({serializeQueryArgs:l,reducerPath:o,createSelector:e}),{selectInvalidatedBy:k,selectCachedArgsForQuery:M,buildQuerySelector:R,buildInfiniteQuerySelector:I,buildMutationSelector:O}=T;oi(t.util,{selectInvalidatedBy:k,selectCachedArgsForQuery:M});const{queryThunk:A,infiniteQueryThunk:j,mutationThunk:U,patchQueryData:F,updateQueryData:H,upsertQueryData:z,prefetch:G,buildMatchThunkActions:V}=cH({baseQuery:n,reducerPath:o,context:x,api:t,serializeQueryArgs:l,assertTagType:D,selectors:T,onSchemaFailure:_,catchSchemaFailure:v,skipSchemaValidation:S}),{reducer:te,actions:ue}=uH({context:x,queryThunk:A,mutationThunk:U,serializeQueryArgs:l,reducerPath:o,assertTagType:D,config:{refetchOnFocus:p,refetchOnReconnect:h,refetchOnMountOrArgChange:f,keepUnusedDataFor:u,reducerPath:o,invalidationBehavior:y}});oi(t.util,{patchQueryData:F,updateQueryData:H,upsertQueryData:z,prefetch:G,resetApiState:ue.resetApiState,upsertQueryEntries:ue.cacheEntriesUpserted}),oi(t.internalActions,ue);const P={currentSubscriptions:new Map,currentPolls:new Map,runningQueries:new Map,runningMutations:new Map},{buildInitiateQuery:X,buildInitiateInfiniteQuery:ne,buildInitiateMutation:ae,getRunningMutationThunk:N,getRunningMutationsThunk:K,getRunningQueriesThunk:le,getRunningQueryThunk:ie}=lH({queryThunk:A,mutationThunk:U,infiniteQueryThunk:j,api:t,serializeQueryArgs:l,context:x,internalState:P});oi(t.util,{getRunningMutationThunk:N,getRunningMutationsThunk:K,getRunningQueryThunk:ie,getRunningQueriesThunk:le});const{middleware:de,actions:me}=SH({reducerPath:o,context:x,queryThunk:A,mutationThunk:U,infiniteQueryThunk:j,api:t,assertTagType:D,selectors:T,getRunningQueryThunk:ie,internalState:P});return oi(t.util,me),oi(t,{reducer:te,middleware:de}),{name:tC,injectEndpoint(pe,Ae){const be=t,De=be.endpoints[pe]??={};up(Ae)&&oi(De,{name:pe,select:R(pe,Ae),initiate:X(pe,Ae)},V(A,pe)),sH(Ae)&&oi(De,{name:pe,select:O(),initiate:ae(pe)},V(U,pe)),dp(Ae)&&oi(De,{name:pe,select:I(pe,Ae),initiate:ne(pe,Ae)},V(A,pe))}}}});gD();function cf(e){return e.replace(e[0],e[0].toUpperCase())}function xH(e){return e.type==="query"}function wH(e){return e.type==="mutation"}function yD(e){return e.type==="infinitequery"}function pc(e,...t){return Object.assign(e,...t)}var cy=Symbol();function uy(e){const t=E.useRef(e),n=E.useMemo(()=>db(t.current,e),[e]);return E.useEffect(()=>{t.current!==n&&(t.current=n)},[n]),n}function uf(e){const t=E.useRef(e);return E.useEffect(()=>{wc(t.current,e)||(t.current=e)},[e]),wc(t.current,e)?t.current:e}var EH=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",CH=EH(),TH=()=>typeof navigator<"u"&&navigator.product==="ReactNative",RH=TH(),AH=()=>CH||RH?E.useLayoutEffect:E.useEffect,IH=AH(),nC=e=>e.isUninitialized?{...e,isUninitialized:!1,isFetching:!0,isLoading:e.data===void 0,status:lD.pending}:e;function dy(e,...t){const n={};return t.forEach(i=>{n[i]=e[i]}),n}var fy=["data","status","isLoading","isSuccess","isError","error"];function DH({api:e,moduleOptions:{batch:t,hooks:{useDispatch:n,useSelector:i,useStore:o},unstable__sideEffectsInRender:l,createSelector:u},serializeQueryArgs:f,context:p}){const h=l?I=>I():E.useEffect;return{buildQueryHooks:k,buildInfiniteQueryHooks:M,buildMutationHook:R,usePrefetch:v};function y(I,O,A){if(O?.endpointName&&I.isUninitialized){const{endpointName:G}=O,V=p.endpointDefinitions[G];A!==cr&&f({queryArgs:O.originalArgs,endpointDefinition:V,endpointName:G})===f({queryArgs:A,endpointDefinition:V,endpointName:G})&&(O=void 0)}let j=I.isSuccess?I.data:O?.data;j===void 0&&(j=I.data);const U=j!==void 0,F=I.isLoading,H=(!O||O.isLoading||O.isUninitialized)&&!U&&F,z=I.isSuccess||U&&(F&&!O?.isError||I.isUninitialized);return{...I,data:j,currentData:I.data,isFetching:F,isLoading:H,isSuccess:z}}function _(I,O,A){if(O?.endpointName&&I.isUninitialized){const{endpointName:G}=O,V=p.endpointDefinitions[G];A!==cr&&f({queryArgs:O.originalArgs,endpointDefinition:V,endpointName:G})===f({queryArgs:A,endpointDefinition:V,endpointName:G})&&(O=void 0)}let j=I.isSuccess?I.data:O?.data;j===void 0&&(j=I.data);const U=j!==void 0,F=I.isLoading,H=(!O||O.isLoading||O.isUninitialized)&&!U&&F,z=I.isSuccess||F&&U;return{...I,data:j,currentData:I.data,isFetching:F,isLoading:H,isSuccess:z}}function v(I,O){const A=n(),j=uf(O);return E.useCallback((U,F)=>A(e.util.prefetch(I,U,{...j,...F})),[I,A,j])}function S(I,O,{refetchOnReconnect:A,refetchOnFocus:j,refetchOnMountOrArgChange:U,skip:F=!1,pollingInterval:H=0,skipPollingIfUnfocused:z=!1,...G}={}){const{initiate:V}=e.endpoints[I],te=n(),ue=E.useRef(void 0);if(!ue.current){const me=te(e.internalActions.internal_getRTKQSubscriptions());ue.current=me}const P=uy(F?cr:O),X=uf({refetchOnReconnect:A,refetchOnFocus:j,pollingInterval:H,skipPollingIfUnfocused:z}),ne=G.initialPageParam,ae=uf(ne),N=E.useRef(void 0);let{queryCacheKey:K,requestId:le}=N.current||{},ie=!1;K&&le&&(ie=ue.current.isRequestSubscribed(K,le));const de=!ie&&N.current!==void 0;return h(()=>{de&&(N.current=void 0)},[de]),h(()=>{const me=N.current;if(P===cr){me?.unsubscribe(),N.current=void 0;return}const pe=N.current?.subscriptionOptions;if(!me||me.arg!==P){me?.unsubscribe();const Ae=te(V(P,{subscriptionOptions:X,forceRefetch:U,...yD(p.endpointDefinitions[I])?{initialPageParam:ae}:{}}));N.current=Ae}else X!==pe&&me.updateSubscriptionOptions(X)},[te,V,U,P,X,de,ae,I]),[N,te,V,X]}function x(I,O){return(j,{skip:U=!1,selectFromResult:F}={})=>{const{select:H}=e.endpoints[I],z=uy(U?cr:j),G=E.useRef(void 0),V=E.useMemo(()=>u([H(z),(ne,ae)=>ae,ne=>z],O,{memoizeOptions:{resultEqualityCheck:wc}}),[H,z]),te=E.useMemo(()=>F?u([V],F,{devModeChecks:{identityFunctionCheck:"never"}}):V,[V,F]),ue=i(ne=>te(ne,G.current),wc),P=o(),X=V(P.getState(),G.current);return IH(()=>{G.current=X},[X]),ue}}function D(I){E.useEffect(()=>()=>{I.current?.unsubscribe?.(),I.current=void 0},[I])}function T(I){if(!I.current)throw new Error(gr(38));return I.current.refetch()}function k(I){const O=(U,F={})=>{const[H]=S(I,U,F);return D(H),E.useMemo(()=>({refetch:()=>T(H)}),[H])},A=({refetchOnReconnect:U,refetchOnFocus:F,pollingInterval:H=0,skipPollingIfUnfocused:z=!1}={})=>{const{initiate:G}=e.endpoints[I],V=n(),[te,ue]=E.useState(cy),P=E.useRef(void 0),X=uf({refetchOnReconnect:U,refetchOnFocus:F,pollingInterval:H,skipPollingIfUnfocused:z});h(()=>{const K=P.current?.subscriptionOptions;X!==K&&P.current?.updateSubscriptionOptions(X)},[X]);const ne=E.useRef(X);h(()=>{ne.current=X},[X]);const ae=E.useCallback(function(K,le=!1){let ie;return t(()=>{P.current?.unsubscribe(),P.current=ie=V(G(K,{subscriptionOptions:ne.current,forceRefetch:!le})),ue(K)}),ie},[V,G]),N=E.useCallback(()=>{P.current?.queryCacheKey&&V(e.internalActions.removeQueryResult({queryCacheKey:P.current?.queryCacheKey}))},[V]);return E.useEffect(()=>()=>{P?.current?.unsubscribe()},[]),E.useEffect(()=>{te!==cy&&!P.current&&ae(te,!0)},[te,ae]),E.useMemo(()=>[ae,te,{reset:N}],[ae,te,N])},j=x(I,y);return{useQueryState:j,useQuerySubscription:O,useLazyQuerySubscription:A,useLazyQuery(U){const[F,H,{reset:z}]=A(U),G=j(H,{...U,skip:H===cy}),V=E.useMemo(()=>({lastArg:H}),[H]);return E.useMemo(()=>[F,{...G,reset:z},V],[F,G,z,V])},useQuery(U,F){const H=O(U,F),z=j(U,{selectFromResult:U===cr||F?.skip?void 0:nC,...F}),G=dy(z,...fy);return E.useDebugValue(G),E.useMemo(()=>({...z,...H}),[z,H])}}}function M(I){const O=(j,U={})=>{const[F,H,z,G]=S(I,j,U),V=E.useRef(G);h(()=>{V.current=G},[G]);const te=E.useCallback(function(X,ne){let ae;return t(()=>{F.current?.unsubscribe(),F.current=ae=H(z(X,{subscriptionOptions:V.current,direction:ne}))}),ae},[F,H,z]);D(F);const ue=uy(U.skip?cr:j),P=E.useCallback(()=>T(F),[F]);return E.useMemo(()=>({trigger:te,refetch:P,fetchNextPage:()=>te(ue,"forward"),fetchPreviousPage:()=>te(ue,"backward")}),[P,te,ue])},A=x(I,_);return{useInfiniteQueryState:A,useInfiniteQuerySubscription:O,useInfiniteQuery(j,U){const{refetch:F,fetchNextPage:H,fetchPreviousPage:z}=O(j,U),G=A(j,{selectFromResult:j===cr||U?.skip?void 0:nC,...U}),V=dy(G,...fy,"hasNextPage","hasPreviousPage");return E.useDebugValue(V),E.useMemo(()=>({...G,fetchNextPage:H,fetchPreviousPage:z,refetch:F}),[G,H,z,F])}}}function R(I){return({selectFromResult:O,fixedCacheKey:A}={})=>{const{select:j,initiate:U}=e.endpoints[I],F=n(),[H,z]=E.useState();E.useEffect(()=>()=>{H?.arg.fixedCacheKey||H?.reset()},[H]);const G=E.useCallback(function(K){const le=F(U(K,{fixedCacheKey:A}));return z(le),le},[F,U,A]),{requestId:V}=H||{},te=E.useMemo(()=>j({fixedCacheKey:A,requestId:H?.requestId}),[A,H,j]),ue=E.useMemo(()=>O?u([te],O):te,[O,te]),P=i(ue,wc),X=A==null?H?.arg.originalArgs:void 0,ne=E.useCallback(()=>{t(()=>{H&&z(void 0),A&&F(e.internalActions.removeMutationResult({requestId:V,fixedCacheKey:A}))})},[F,A,H,V]),ae=dy(P,...fy,"endpointName");E.useDebugValue(ae);const N=E.useMemo(()=>({...P,originalArgs:X,reset:ne}),[P,X,ne]);return E.useMemo(()=>[G,N],[G,N])}}}var kH=Symbol(),NH=({batch:e=xO,hooks:t={useDispatch:KC,useSelector:XC,useStore:QC},createSelector:n=Ei,unstable__sideEffectsInRender:i=!1,...o}={})=>({name:kH,init(l,{serializeQueryArgs:u},f){const p=l,{buildQueryHooks:h,buildInfiniteQueryHooks:y,buildMutationHook:_,usePrefetch:v}=DH({api:l,moduleOptions:{batch:e,hooks:t,unstable__sideEffectsInRender:i,createSelector:n},serializeQueryArgs:u,context:f});return pc(p,{usePrefetch:v}),pc(f,{batch:e}),{injectEndpoint(S,x){if(xH(x)){const{useQuery:D,useLazyQuery:T,useLazyQuerySubscription:k,useQueryState:M,useQuerySubscription:R}=h(S);pc(p.endpoints[S],{useQuery:D,useLazyQuery:T,useLazyQuerySubscription:k,useQueryState:M,useQuerySubscription:R}),l[`use${cf(S)}Query`]=D,l[`useLazy${cf(S)}Query`]=T}if(wH(x)){const D=_(S);pc(p.endpoints[S],{useMutation:D}),l[`use${cf(S)}Mutation`]=D}else if(yD(x)){const{useInfiniteQuery:D,useInfiniteQuerySubscription:T,useInfiniteQueryState:k}=y(S);pc(p.endpoints[S],{useInfiniteQuery:D,useInfiniteQuerySubscription:T,useInfiniteQueryState:k}),l[`use${cf(S)}InfiniteQuery`]=D}}}}}),OH=mD(gD(),NH());const vD=e=>({id:String(e.id),name:e.name,imageUrl:e.picture_url,display:!0}),MH=e=>e.results.map(vD).sort((n,i)=>n.name.localeCompare(i.name)),_D=e=>{const t=e.image.original_height||48,n=e.image.original_width||48;return{id:String(e.id),name:e.name,iconUrl:e.image.url.replace("{height}",t).replace("{width}",n)}},LH=e=>e.results.map(_D).sort((n,i)=>n.name.localeCompare(i.name)),jH=e=>{const t=e.instructors[0],n=t?vD(t):{id:"0",name:"Unknown Instructor",imageUrl:"",display:!1},i=jU(e),o=new Date(e.starts_at),u=(new Date(e.ends_at).getTime()-o.getTime())/1e3;return Number.isNaN(u)&&Kv("Computed invalid duration",{extra:{rawClass:e}}),{...e,id:String(e.id),name:e.name,start:e.starts_at,end:e.ends_at,customerUrl:e.customer_url,duration:u,discipline:_D(e.offering_type.category),instructor:n,status:i}},PH=e=>e.results.map(jH),$H=["id","name","max_occupancy","occupancy","attending_count","starts_at","ends_at","waiting_count","active_registration_status","category.name","venue","customer_url","description"],UH=["instructors","active_registration_status","category","offering_type","offering_type.category","venue","suggested_booking_action"],Df=OH({reducerPath:"pelotonApi",baseQuery:iH({baseUrl:`${K_}/${ou}/`}),endpoints:e=>({getClasses:e.query({queryFn:async t=>{try{const n=sy(t),i=$U({fields:$H,expand:UH,corsProxy:!0}),o=await UU(i,async l=>{const u=await fetch(l,{headers:n});if(!u.ok)throw new Error(`${u.status}: ${await u.text()}`);return u.json()},!0);return{data:PH({results:o})}}catch(n){return{error:{status:"FETCH_ERROR",error:String(n)}}}}}),getDisciplines:e.query({query:t=>({url:`offering_type_categories?${new URLSearchParams({sort:"name"})}`,method:"GET",headers:sy(t)}),transformResponse:t=>LH(t)}),getInstructors:e.query({query:t=>({url:`instructors?${new URLSearchParams({sort:"name"})}`,method:"GET",headers:sy(t)}),transformResponse:t=>MH(t)})})}),{useGetClassesQuery:mb,useGetDisciplinesQuery:gb,useGetInstructorsQuery:yb}=Df,zH=e=>{if("error"in e&&typeof e.error=="string")return e.error;if("message"in e&&typeof e.message=="string")return e.message},BH=C.label`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  cursor: pointer;
  user-select: none;
  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.$checked?`${e.theme.colors.accent}0a`:"transparent"};
  transition: background-color 0.15s;

  ${cp}
`,HH=C.span`
  color: ${e=>e.theme.colors.main};
  font-size: 14px;
`,FH=C.input`
  accent-color: ${e=>e.theme.colors.accent};
`,bD=({value:e,checked:t,onChange:n,label:i,icon:o})=>{const l=E.useId();return g.jsxs(BH,{$checked:t,htmlFor:l,children:[g.jsx(FH,{type:"checkbox",id:l,value:e,checked:t,onChange:n}),o,g.jsx(HH,{children:i})]})},rC=C.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`,iC=C.legend`
  font-weight: 600;
  font-size: 18px;
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,sC=C.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  margin: 0 0 12px;
`,oC=C.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
`,df=C.button`
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
`,SD=C.div`
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
`,aC=C.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
  margin-left: auto;
`,xh=C.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  padding: 24px;
  text-align: center;
`,xD=C.p`
  color: ${e=>e.theme.colors.error};
  font-size: 14px;
  padding: 16px;
`,wD=C.button`
  border: none;
  background: none;
  color: ${e=>e.theme.colors.accent};
  cursor: pointer;
  font-family: inherit;
  font-size: 14px;
  text-decoration: underline;
  padding: 0;
`,qH=C.div`
  margin-top: 32px;

  ${Ce`
    margin-top: 24px;
  `}
`,VH=({studioId:e,selectedInstructors:t,setSelectedInstructors:n,selectedDisciplines:i,setSelectedDisciplines:o})=>{const l=yb(e),u=gb(e),f=E.useRef(t),p=E.useRef(i);E.useEffect(()=>{const S=f.current;if(!l.currentData||!rs(S))return;const x=new Set(l.currentData.map(T=>T.id)),D=S.filter(T=>x.has(T));D.length<S.length&&(n(D),f.current=D)},[l.currentData,n]),E.useEffect(()=>{const S=p.current;if(!u.currentData||!rs(S))return;const x=new Set(u.currentData.map(T=>String(T.id))),D=S.filter(T=>x.has(String(T))).map(String);D.length<S.length&&(o(D),p.current=D)},[u.currentData,o]);const h=E.useCallback(S=>{if(!rs(t))return;const x=t.includes(S);n(x?t.filter(D=>D!==S):[...t,S])},[t,n]),y=E.useCallback(S=>{if(!rs(i))return;const x=i.includes(S);o(x?i.filter(D=>D!==S):[...i,S])},[i,o]),_=rs(t),v=rs(i);return g.jsxs("div",{children:[g.jsxs(rC,{children:[g.jsx(iC,{children:"Instructors"}),g.jsx(sC,{children:"Filter by specific instructors or get alerts for all of them."}),g.jsxs(oC,{children:[g.jsx(df,{type:"button",$active:!_,onClick:()=>n(null),children:"Any instructor"}),g.jsx(df,{type:"button",$active:_,onClick:()=>{_||n([])},children:"Specific instructors"}),_&&t.length>0&&g.jsxs(aC,{children:[t.length," selected"]})]}),_&&g.jsx(GH,{query:l,selectedIds:t,onToggle:h})]}),g.jsx(qH,{}),g.jsxs(rC,{children:[g.jsx(iC,{children:"Disciplines"}),g.jsx(sC,{children:"Filter by class type or get alerts for everything."}),g.jsxs(oC,{children:[g.jsx(df,{type:"button",$active:!v,onClick:()=>o(null),children:"Any discipline"}),g.jsx(df,{type:"button",$active:v,onClick:()=>{v||o([])},children:"Specific disciplines"}),v&&i.length>0&&g.jsxs(aC,{children:[i.length," selected"]})]}),v&&g.jsx(WH,{query:u,selectedIds:i,onToggle:y})]})]})},GH=E.memo(({query:e,selectedIds:t,onToggle:n})=>e.isLoading?g.jsx(xh,{children:"Loading instructors…"}):e.error?g.jsxs(xD,{children:["Couldn't load instructors."," ",g.jsx(wD,{type:"button",onClick:e.refetch,children:"Try again"})]}):!e.currentData||e.currentData.length===0?g.jsx(xh,{children:"No instructors found for this studio."}):g.jsx(SD,{role:"group","aria-label":"Instructors",children:e.currentData.map(i=>g.jsx(bD,{value:i.id,checked:t.includes(i.id),onChange:()=>n(i.id),label:i.name,icon:g.jsx(ub,{instructor:i,size:28})},i.id))})),WH=E.memo(({query:e,selectedIds:t,onToggle:n})=>e.isLoading?g.jsx(xh,{children:"Loading disciplines…"}):e.error?g.jsxs(xD,{children:["Couldn't load disciplines."," ",g.jsx(wD,{type:"button",onClick:e.refetch,children:"Try again"})]}):!e.currentData||e.currentData.length===0?g.jsx(xh,{children:"No disciplines found for this studio."}):g.jsx(SD,{role:"group","aria-label":"Disciplines",children:e.currentData.map(i=>g.jsx(bD,{value:i.id,checked:t.includes(i.id),onChange:()=>n(i.id),label:i.name,icon:g.jsx(_h,{discipline:i,size:24})},i.id))})),YH=C.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 16px;
  margin-bottom: 24px;

  ${Ce`
    padding: 0;
    margin-bottom: 12px;
  `}
`,QH=C.button`
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
`,KH=C.div`
  flex: 1;
  height: 2px;
  background-color: ${e=>e.$filled?e.theme.colors.accent:e.theme.borderColor};
  transition: background-color 0.2s;
`,XH=C.span`
  position: absolute;
  top: 18px;
  font-size: 10px;
  white-space: nowrap;
  color: ${e=>e.$state==="active"?e.theme.colors.main:e.theme.colors.secondary};
  font-weight: ${e=>e.$state==="active"?600:400};

  ${Ce`
    display: none;
  `}
`,ZH=C.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`,JH=({steps:e,currentStep:t,onStepClick:n})=>g.jsx(YH,{role:"navigation","aria-label":"Editor steps",children:e.map((i,o)=>{const l=o<t?"completed":o===t?"active":"upcoming";return g.jsxs(ZH,{style:{flex:o<e.length-1?1:0},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",width:"100%"},children:[g.jsx(QH,{$state:l,onClick:()=>{l!=="upcoming"&&n(o)},"aria-label":`Step ${o+1}: ${i}`,"aria-current":l==="active"?"step":void 0,type:"button"}),o<e.length-1&&g.jsx(KH,{$filled:o<t})]}),g.jsx(XH,{$state:l,children:i})]},o)})}),us=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],wh=new Array(48).fill(null).map((e,t)=>{const n=t*30,i=new Date;i.setHours(Math.floor(n/60)),i.setMinutes(n%60);const o=new Intl.DateTimeFormat(void 0,{hour:"numeric",minute:"numeric"});return{minutes:n,label:o.format(i)}}),e7=C.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`,t7=C.legend`
  font-weight: 600;
  font-size: 18px;
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,n7=C.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  margin: 0 0 20px;
`,r7=C.div`
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  overflow: hidden;
`,Ji=C.div`
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
`,es=C.span`
  font-size: 13px;
  font-weight: 500;
  color: ${e=>e.theme.colors.secondary};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  flex-shrink: 0;
`,ai=C.span`
  font-size: 14px;
  color: ${e=>e.theme.colors.main};
  text-align: right;
  word-break: break-word;

  ${Ce`
    text-align: left;
  `}
`,i7=C.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  justify-content: flex-end;

  ${Ce`
    justify-content: flex-start;
  `}
`,s7=C.span`
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  background-color: ${e=>e.theme.colors.secondarySurface};
  color: ${e=>e.theme.colors.main};
`,o7=e=>{if(pv(e))return"All day";const t=wh.find(i=>i.minutes===e.startMin),n=wh.find(i=>i.minutes===e.endMin);return!t||!n?"All day":`${t.label} – ${n.label}`},a7=e=>{switch(e){case"free":return"Open spots only";case"waitlist":return"Open spots or waitlist";case"full":return"Any status"}},l7=({name:e,studioId:t,maxStatus:n,selectedInstructors:i,selectedDisciplines:o,timeRanges:l,waitlistAlerts:u,watchedClassIds:f})=>{const p=fn[t],h=us.filter((v,S)=>l[S]),y=l.find(Boolean),_=l.filter(Boolean).every(v=>v&&y&&v.startMin===y.startMin&&v.endMin===y.endMin);return g.jsxs(e7,{children:[g.jsx(t7,{children:"Review your alert"}),g.jsx(n7,{children:"Double-check everything looks right, then hit Save."}),g.jsxs(r7,{children:[e.trim()&&g.jsxs(Ji,{children:[g.jsx(es,{children:"Name"}),g.jsx(ai,{children:e.trim()})]}),g.jsxs(Ji,{children:[g.jsx(es,{children:"Studio"}),g.jsx(ai,{children:p?.location||t})]}),g.jsxs(Ji,{children:[g.jsx(es,{children:"Alert on"}),g.jsx(ai,{children:a7(n)})]}),g.jsxs(Ji,{children:[g.jsx(es,{children:"Instructors"}),g.jsx(ai,{children:i===null?"Any instructor":i.length===0?"None selected":`${i.length} selected`})]}),g.jsxs(Ji,{children:[g.jsx(es,{children:"Disciplines"}),g.jsx(ai,{children:o===null?"Any discipline":o.length===0?"None selected":`${o.length} selected`})]}),g.jsxs(Ji,{children:[g.jsx(es,{children:"Days"}),h.length===0?g.jsx(ai,{children:"No days selected"}):h.length===7?g.jsx(ai,{children:"Every day"}):g.jsx(i7,{children:h.map(v=>g.jsx(s7,{children:v.slice(0,3)},v))})]}),y&&g.jsxs(Ji,{children:[g.jsx(es,{children:"Time window"}),g.jsx(ai,{children:_?o7(y):"Varies by day"})]}),g.jsxs(Ji,{children:[g.jsx(es,{children:"Waitlist alerts"}),g.jsx(ai,{children:u?f===null?"On — any matching class":f.length===0?"On — no classes selected":`On — ${f.length} ${f.length===1?"class":"classes"} selected`:"Off"})]})]})]})},c7=C.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`,u7=C.legend`
  font-weight: 600;
  font-size: 18px;
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,d7=C.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  margin: 0 0 16px;
`,f7=C.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,h7=C.div`
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
`,p7=C.label`
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
`,m7=C.input`
  accent-color: ${e=>e.theme.colors.accent};
`,g7=C.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: auto;

  ${Ce`
    margin-left: 28px;
    width: calc(100% - 28px);
  `}
`,y7=C.label`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
`,v7=C.input`
  accent-color: ${e=>e.theme.colors.accent};
`,lC=C.select`
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
`,_7=C.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,b7=C.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  flex-wrap: wrap;
`,hy=C.button`
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
`,S7=({timeRanges:e,setTimeRanges:t})=>{const n=e.filter(Boolean).length,i=E.useRef(us.map(()=>{})),o=E.useCallback(y=>{const _=[...e];_[y]=_[y]?null:hv,t(_)},[e,t]),l=E.useCallback(y=>{const _=e[y];if(!_)return;const v=[...e];pv(_)?v[y]=i.current[y]??HU:(i.current[y]=_,v[y]=uh),t(v)},[e,t]),u=E.useCallback((y,_,v)=>{const S=[...e],x=S[y];x&&(_==="startMin"?S[y]={startMin:v,endMin:x.endMin===0||x.endMin>=v?x.endMin:0}:S[y]={...x,endMin:v},t(S))},[e,t]),f=E.useCallback(()=>{t(us.map(()=>hv))},[t]),p=E.useCallback(()=>{t(us.map(()=>null))},[t]),h=E.useCallback(()=>{const y=e.find(Boolean);y&&t(e.map(_=>_?{...y}:null))},[e,t]);return g.jsxs(c7,{children:[g.jsx(u7,{children:"Days & times"}),g.jsx(d7,{children:"Choose which days and time windows to monitor. Alerts fire when a matching class falls within these windows (in the studio's timezone)."}),g.jsxs(b7,{children:[g.jsx(hy,{type:"button",onClick:f,children:"Select all days"}),n>0&&g.jsx(hy,{type:"button",onClick:p,children:"Clear all"}),n>1&&g.jsx(hy,{type:"button",onClick:h,children:"Copy time to all"})]}),g.jsx(f7,{children:us.map((y,_)=>{const v=e[_],S=!!v&&pv(v);return g.jsxs(h7,{$enabled:!!v,children:[g.jsxs(p7,{htmlFor:`day-${_}`,children:[g.jsx(m7,{type:"checkbox",id:`day-${_}`,checked:!!v,onChange:()=>o(_)}),y]}),v&&g.jsxs(g7,{children:[g.jsxs(y7,{htmlFor:`allday-${_}`,children:[g.jsx(v7,{type:"checkbox",id:`allday-${_}`,checked:S,onChange:()=>l(_)}),"All day"]}),!S&&g.jsxs(g.Fragment,{children:[g.jsx(lC,{value:v.startMin,"aria-label":`${y} start time`,onChange:({target:x})=>{const D=parseInt(x.value);Number.isNaN(D)||u(_,"startMin",D)},children:wh.map(x=>g.jsx("option",{value:x.minutes,children:x.label},x.minutes))}),g.jsx(_7,{children:"to"}),g.jsx(lC,{value:v.endMin,"aria-label":`${y} end time`,onChange:({target:x})=>{const D=parseInt(x.value);Number.isNaN(D)||u(_,"endMin",D)},children:wh.map(x=>g.jsx("option",{value:x.minutes,disabled:x.minutes>0&&x.minutes<v.startMin,children:x.label},x.minutes))})]})]})]},y)})})]})},cC=C.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`,uC=C.legend`
  font-weight: 600;
  font-size: 18px;
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,dC=C.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  margin: 0 0 16px;
`,x7=C.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,w7=C.div`
  margin-top: 32px;

  ${Ce`
    margin-top: 24px;
  `}
`,E7=C.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
`,fC=C.button`
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
`,C7=C.div`
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
`,T7=C.label`
  ${$r}
  ${cp}
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
`,R7=C.input`
  accent-color: ${e=>e.theme.colors.accent};
  margin-top: 2px;
  flex-shrink: 0;
`,A7=C.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,I7=C.span`
  font-size: 13px;
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
`,D7=C.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,k7=C.span`
  font-size: 11px;
  font-weight: 500;
  padding: 1px 6px;
  border-radius: 4px;
  margin-left: auto;
  flex-shrink: 0;
  align-self: flex-start;
  background-color: ${e=>e.$status==="free"?`${e.theme.colors.accent}18`:e.$status==="waitlist"?"#f59e0b18":`${e.theme.colors.secondarySurface}`};
  color: ${e=>e.$status==="free"?e.theme.colors.accent:e.$status==="waitlist"?"#b45309":e.theme.colors.secondary};
`,py=C.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  padding: 20px;
  text-align: center;
  margin: 0;
`,N7=C.button`
  border: none;
  background: none;
  color: ${e=>e.theme.colors.accent};
  cursor: pointer;
  font-family: inherit;
  font-size: 14px;
  text-decoration: underline;
  padding: 0;
`,O7=C.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
  margin-left: auto;
`;function M7(e,t){try{const n=new Date(e),i=new Date(n.toLocaleString("en-US",{timeZone:"UTC"})),o=new Date(n.toLocaleString("en-US",{timeZone:t})),l=i.getTime()-o.getTime();return n.setTime(n.getTime()-l),{day:n.getDay(),minute:n.getHours()*60+n.getMinutes()}}catch{return null}}function L7(e,t){try{return new Date(e).toLocaleString("en-US",{timeZone:t,weekday:"short",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}catch{return e}}function j7(e,t,n,i,o){const l=fn[o]?.timezone,u=Date.now();return e.filter(f=>{if(new Date(f.start).getTime()<=u||t!==null&&!t.includes(f.instructor.id)||n!==null&&!n.includes(f.discipline.id))return!1;if(i&&l){const p=M7(f.start,l);if(!p)return!1;const h=i[p.day];if(!h||p.minute<h.startMin||p.minute>h.endMin)return!1}return!0})}const P7=E.memo(({studioId:e,instructors:t,disciplines:n,timeRanges:i,selectedIds:o,onToggle:l})=>{const u=mb(e),f=fn[e]?.timezone??"UTC";if(u.isLoading)return g.jsx(py,{children:"Loading classes…"});if(u.error)return g.jsxs(py,{children:["Couldn't load classes."," ",g.jsx(N7,{type:"button",onClick:u.refetch,children:"Try again"})]});const p=j7(u.currentData??[],t,n,i,e);return p.length===0?g.jsx(py,{children:"No upcoming classes match your filters."}):g.jsx(C7,{role:"group","aria-label":"Classes",children:p.map(h=>{const y=o.includes(h.id),_=L7(h.start,f),v=[h.instructor.name,h.discipline.name].filter(Boolean).join(" · "),S=h.status==="free"?"Open":h.status==="waitlist"?"Waitlist":"Full";return g.jsxs(T7,{$checked:y,htmlFor:`cls-${h.id}`,children:[g.jsx(R7,{type:"checkbox",id:`cls-${h.id}`,checked:y,onChange:()=>l(h.id)}),g.jsxs(A7,{children:[g.jsx(I7,{children:_}),v&&g.jsx(D7,{children:v})]}),g.jsx(k7,{$status:h.status,children:S})]},h.id)})})}),$7=({studioId:e,waitlistAlerts:t,onWaitlistAlertsChange:n,watchedClassIds:i,onWatchedClassIdsChange:o,selectedInstructors:l,selectedDisciplines:u,timeRanges:f})=>{const p=_=>{const v=i??[];o(v.includes(_)?v.filter(S=>S!==_):[...v,_])},h=i!==null,y=i?.length??0;return g.jsxs("div",{children:[g.jsxs(cC,{children:[g.jsx(uC,{children:"Waitlist position alerts"}),g.jsx(dC,{children:"Get a push notification whenever the waitlist count changes for a matching class. Tap the notification to open a prompt reminding you to check your email for the 2-hour acceptance window."}),g.jsxs(x7,{children:[g.jsx(yh,{name:"waitlistAlerts",value:"off",checked:!t,onChange:()=>n(!1),label:"Disabled",hint:"No waitlist count notifications"}),g.jsx(yh,{name:"waitlistAlerts",value:"on",checked:t,onChange:()=>n(!0),label:"Enabled",hint:"Notify me when the waitlist count changes"})]})]}),t&&g.jsxs(g.Fragment,{children:[g.jsx(w7,{}),g.jsxs(cC,{children:[g.jsx(uC,{children:"Which classes?"}),g.jsx(dC,{children:"Notify for any class matching your filters, or pick specific ones you've already joined the waitlist for."}),g.jsxs(E7,{children:[g.jsx(fC,{type:"button",$active:!h,onClick:()=>o(null),children:"Any matching class"}),g.jsx(fC,{type:"button",$active:h,onClick:()=>{h||o([])},children:"Specific classes"}),h&&y>0&&g.jsxs(O7,{children:[y," selected"]})]}),h&&g.jsx(P7,{studioId:e,instructors:l,disciplines:u,timeRanges:f,selectedIds:i,onToggle:p})]})]})]})},U7=e=>{try{return window.localStorage.getItem(e)}catch(t){return Or(t),null}},z7="STUDIO_ID",ED=e=>{const t=U7(z7);return t===null?e:Object.keys(fn).includes(t)?t:e},Ao=Ei([e=>e.studioSelector],e=>e.studioId),B7={studioId:ED(vI)},Ev=Kn({name:"studioSelector",initialState:B7,reducers:{setStudioId(e,t){e.studioId=t.payload}}}),{setStudioId:kf}=Ev.actions,H7=e=>{const t=ir(),n=Je(Ao);E.useEffect(()=>{e.studioId?t(kf(e.studioId)):t(kf(ED(vI)))},[e.studioId,t]);const[i,o]=E.useState(e.name||""),[l,u]=E.useState(e.instructors||null),[f,p]=E.useState(e.disciplines||null),[h,y]=E.useState(()=>e.timeRanges||us.map(()=>hv)),[_,v]=E.useState(e.maxStatus||"free"),[S,x]=E.useState(e.waitlistAlerts??!1),[D,T]=E.useState(e.watchedClassIds??null),k=E.useCallback(M=>{M!==n&&(t(kf(M)),u(R=>R&&[]),p(R=>R&&[]))},[t,n]);return{selectedStudioId:n,setSelectedStudioId:k,name:i,setName:o,selectedInstructors:l,setSelectedInstructors:u,selectedDisciplines:f,setSelectedDisciplines:p,timeRanges:h,setTimeRanges:y,maxStatus:_,setMaxStatus:v,waitlistAlerts:S,setWaitlistAlerts:x,watchedClassIds:D,setWatchedClassIds:T}},my=["Basics","Filters","Schedule","Waitlist","Review"],F7=C.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
`,q7=C.div`
  padding: 24px 24px 0;

  ${Ce`
    padding: 16px 16px 0;
  `}
`,V7=C.h2`
  margin: 0 0 4px;
  font-size: 22px;
  color: ${e=>e.theme.colors.main};
`,G7=C.p`
  margin: 0 0 20px;
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
`,W7=C.div`
  padding: 8px 24px 24px;
  flex: 1;
  overflow-y: auto;

  ${Ce`
    padding: 8px 16px 16px;
  `}
`,Y7=C.div`
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
`,mc=C.button`
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
`,Q7=C.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,K7=C.span`
  font-size: 13px;
  color: ${e=>e.$error?e.theme.colors.error:e.theme.colors.secondary};

  ${Ce`
    font-size: 12px;
  `}
`,X7=({alertToEdit:e,onSave:t,onCancel:n})=>{const i=Je(yu),[o,l]=E.useState(0),[u,f]=E.useState(!1),[p,h]=E.useState(),{selectedStudioId:y,setSelectedStudioId:_,name:v,setName:S,selectedInstructors:x,setSelectedInstructors:D,selectedDisciplines:T,setSelectedDisciplines:k,timeRanges:M,setTimeRanges:R,maxStatus:I,setMaxStatus:O,waitlistAlerts:A,setWaitlistAlerts:j,watchedClassIds:U,setWatchedClassIds:F}=H7(e),H=o<my.length-1,z=o>0,G=o===my.length-1,V=E.useCallback(()=>{H&&l(X=>X+1)},[H]),te=E.useCallback(()=>{z&&l(X=>X-1)},[z]),ue=E.useCallback(async()=>{if(!y||!i)return;f(!0),h(void 0);const X={id:e.id||null,created:e.created||new Date().getTime(),...v.trim()?{name:v.trim()}:{},studioId:y,instructors:x,disciplines:T,timeRanges:M,maxStatus:I,waitlistAlerts:A,...A&&U!==null?{watchedClassIds:U}:{}};try{X.id?await oD(i,X):await D9(i,X),t()}catch(ne){Or(ne),h("Something went wrong. Please try again."),f(!1)}},[e.id,e.created,v,y,i,x,T,M,I,A,U,t]),P=!!e.id;return g.jsxs(F7,{children:[g.jsxs(q7,{children:[g.jsx(V7,{children:P?"Edit alert":"New alert"}),g.jsx(G7,{children:P?"Update your alert settings below.":"Set up a new alert in a few quick steps."}),g.jsx(JH,{steps:my,currentStep:o,onStepClick:l})]}),g.jsxs(W7,{children:[o===0&&g.jsx(F9,{name:v,onNameChange:S,studioId:y,onStudioChange:_,maxStatus:I,onStatusChange:O}),o===1&&g.jsx(VH,{studioId:y,selectedInstructors:x,setSelectedInstructors:D,selectedDisciplines:T,setSelectedDisciplines:k}),o===2&&g.jsx(S7,{timeRanges:M,setTimeRanges:R}),o===3&&g.jsx($7,{studioId:y,waitlistAlerts:A,onWaitlistAlertsChange:j,watchedClassIds:U,onWatchedClassIdsChange:F,selectedInstructors:x,selectedDisciplines:T,timeRanges:M}),o===4&&g.jsx(l7,{name:v,studioId:y,maxStatus:I,selectedInstructors:x,selectedDisciplines:T,timeRanges:M,waitlistAlerts:A,watchedClassIds:U})]}),g.jsxs(Y7,{children:[g.jsx("div",{children:z?g.jsx(mc,{type:"button",onClick:te,children:"Back"}):g.jsx(mc,{type:"button",onClick:n,children:"Cancel"})}),g.jsxs(Q7,{children:[p&&g.jsx(K7,{$error:!0,children:p}),G?g.jsx(mc,{type:"button",$primary:!0,onClick:ue,disabled:u,children:u?"Saving…":"Save alert"}):g.jsxs(g.Fragment,{children:[P&&g.jsx(mc,{type:"button",onClick:ue,disabled:u,children:u?"Saving…":"Save"}),g.jsx(mc,{type:"button",$primary:!0,onClick:V,children:"Continue"})]})]})]})]})},Z7=()=>{const e=jr(),t=Cs(),n=e.state||{};return g.jsx(X7,{alertToEdit:n,onSave:()=>{t(tt.ALERTS)},onCancel:()=>{t(tt.ALERTS)}})},J7={userId:null,data:{state:"idle"}},CD=Kn({name:"alerts",initialState:J7,reducers:{setAlertsLoading(e,t){return{userId:t.payload,data:{state:"loading"}}},setAlertsData(e,t){return{userId:t.payload.userId,data:{state:"fulfilled",data:t.payload.data}}},setAlertsFailed(e,t){return{userId:t.payload.userId,data:{state:"failed",error:t.payload.error}}}}}),{setAlertsLoading:eF,setAlertsData:hC,setAlertsFailed:pC}=CD.actions,tF=CD.reducer,nF={userId:null,data:{state:"idle"}},TD=Kn({name:"alertPreferences",initialState:nF,reducers:{setAlertPreferencesLoading(e,t){return{userId:t.payload,data:{state:"loading"}}},setAlertPreferencesData(e,t){return{userId:t.payload.userId,data:{state:"fulfilled",data:t.payload.data}}},setAlertPreferencesFailed(e,t){return{userId:t.payload.userId,data:{state:"failed",error:t.payload.error}}}}}),{setAlertPreferencesLoading:rF,setAlertPreferencesData:iF,setAlertPreferencesFailed:mC}=TD.actions,sF=TD.reducer,vb=e=>{try{return window.localStorage.getItem(e)}catch(t){return Or(t),null}},_b=(e,t)=>{try{window.localStorage.setItem(e,t)}catch(n){Or(n)}},RD=e=>{try{window.localStorage.removeItem(e)}catch(t){Or(t)}},AD="BOOKABLE_STATUS_FILTERS",Cv="DISCIPLINE_FILTERS",Tv="INSTRUCTOR_FILTERS",oF=e=>{const t=vb(AD);return t===null?e:t.split(";").filter(BU)},aF=e=>{_b(AD,e.join(";"))},lF=e=>{const t=vb(Cv);return t===null?e:t.split(";").filter(Boolean)},gy=e=>{e.length===0?RD(Cv):_b(Cv,e.join(";"))},cF=e=>{const t=vb(Tv);return t===null?e:t.split(";").filter(Boolean)},gC=e=>{e.length===0?RD(Tv):_b(Tv,e.join(";"))},uF={selectedBookableStatuses:oF(["free","waitlist"]),selectedInstructors:cF([]),selectedDisciplines:lF([])},ID=Kn({name:"filters",initialState:uF,reducers:{toggleBookableStatus(e,t){e.selectedBookableStatuses.includes(t.payload)?e.selectedBookableStatuses=e.selectedBookableStatuses.filter(n=>n!==t.payload):e.selectedBookableStatuses=[...e.selectedBookableStatuses,t.payload],aF(e.selectedBookableStatuses)},toggleInstructor(e,t){e.selectedInstructors.includes(t.payload)?e.selectedInstructors=e.selectedInstructors.filter(n=>n!==t.payload):e.selectedInstructors=[...e.selectedInstructors,t.payload],gC(e.selectedInstructors)},resetInstructors(e){e.selectedInstructors=[],gC(e.selectedInstructors)},toggleDiscipline(e,t){e.selectedDisciplines.includes(t.payload)?e.selectedDisciplines=e.selectedDisciplines.filter(n=>n!==t.payload):e.selectedDisciplines=[...e.selectedDisciplines,t.payload],gy(e.selectedDisciplines)},setDisciplines(e,t){e.selectedDisciplines=t.payload,gy(e.selectedDisciplines)},resetDisciplines(e){e.selectedDisciplines=[],gy(e.selectedDisciplines)}}}),{toggleBookableStatus:dF,toggleInstructor:fF,resetInstructors:hF,toggleDiscipline:pF,setDisciplines:mF,resetDisciplines:gF}=ID.actions,yF=ID.reducer,vF={userId:null,data:{state:"idle"}},DD=Kn({name:"registeredDevices",initialState:vF,reducers:{setRegisteredDevicesLoading(e,t){return{userId:t.payload,data:{state:"loading"}}},setRegisteredDevicesData(e,t){return{userId:t.payload.userId,data:{state:"fulfilled",data:t.payload.data}}},setRegisteredDevicesFailed(e,t){return{userId:t.payload.userId,data:{state:"failed",error:t.payload.error}}}}}),{setRegisteredDevicesLoading:_F,setRegisteredDevicesData:bF,setRegisteredDevicesFailed:yC}=DD.actions,SF=DD.reducer,xF={state:"idle"},kD=Kn({name:"session",initialState:xF,reducers:{setLoading(e){return{state:"loading"}},setSession(e,t){return{state:"fulfilled",data:t.payload}},removeSession(e){return{state:"fulfilled",data:null}}}}),{setLoading:vC,setSession:wF,removeSession:_C}=kD.actions,EF=kD.reducer,fp=i$({reducer:{alerts:tF,alertPreferences:sF,filters:yF,registeredDevices:SF,session:EF,[Df.reducerPath]:Df.reducer,[Ev.name]:Ev.reducer},middleware:e=>e().concat(Df.middleware)}),ND=E.createContext({state:"idle"}),CF=({children:e,userId:t})=>{const n=ir(),i=Je(l=>l.registeredDevices);E.useEffect(()=>{const l=an;if(!l)return n(yC({userId:t,error:{message:"No database set up"}})),()=>{};const u=fp.getState().registeredDevices;(u.userId!==t||u.data.state!=="fulfilled")&&n(_F(t));const f=Mn(l,`messagingTokens/${t}`),p=Cu(f,h=>{const y=h.val();n(bF({userId:t,data:y||{}}))},h=>{n(yC({userId:t,error:{message:h.message}}))});return()=>p()},[t,n]);const o=i.userId===t?i.data:{state:"loading"};return g.jsx(ND.Provider,{value:o,children:e})},OD=E.createContext({state:"idle"}),TF=({children:e,userId:t})=>{const n=ir(),i=Je(l=>l.alertPreferences);E.useEffect(()=>{const l=an;if(!l)return n(mC({userId:t,error:{message:"No database set up"}})),()=>{};const u=fp.getState().alertPreferences;(u.userId!==t||u.data.state!=="fulfilled")&&n(rF(t));const f=Mn(l,Ti.alertPreferences(t)),p=Cu(f,h=>{const y=h.val();n(iF({userId:t,data:y||{}}))},h=>{n(mC({userId:t,error:{message:h.message}}))});return()=>p()},[t,n]);const o=i.userId===t?i.data:{state:"loading"};return g.jsx(OD.Provider,{value:o,children:e})},RF=({children:e,userId:t})=>{const n=ir(),i=Je(l=>l.alerts);E.useEffect(()=>{const l=an;if(!l)return n(pC({userId:t,error:{message:"No database set up"}})),()=>{};const u=fp.getState().alerts;(u.userId!==t||u.data.state!=="fulfilled")&&n(eF(t));const f=Mn(l,Ti.alerts(t)),p=Cu(f,h=>{const y=h.val();if(!y){n(hC({userId:t,data:[]}));return}const _=Object.entries(y).map(([v,S])=>({...S,timeRanges:new Array(us.length).fill(null).map((x,D)=>S.timeRanges[D]||null),id:v}));n(hC({userId:t,data:_}))},h=>{n(pC({userId:t,error:{message:h.message}}))});return()=>p()},[t,n]);const o=i.userId===t?i.data:{state:"loading"};return g.jsx(cb.Provider,{value:o,children:e})},AF=C.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 16px;

  ${Ce`
    padding: 8px;
  `}
`,IF=C.div`
  overflow: auto;
  height: 100%;
`,DF=C.div`
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
`,kF=C.div`
  font-size: 36px;
  margin-bottom: 16px;
  line-height: 1;
`,NF=C.h1`
  font-size: 20px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
  margin: 0 0 10px;
`,OF=C.p`
  font-size: 15px;
  color: ${e=>e.theme.colors.secondary};
  line-height: 1.55;
  margin: 0 0 24px;
`,MF=C(Ts)`
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
`,LF=C.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
  padding: 32px 0;
  margin: 0;
`,jF=({children:e})=>{const t=Je(Za);return t.state==="loading"?g.jsx(LF,{children:"Loading…"}):t.state!=="fulfilled"||!t.data?g.jsxs(DF,{children:[g.jsx(kF,{children:"🔔"}),g.jsx(NF,{children:"Sign in to use Alerts"}),g.jsx(OF,{children:"Track class availability and get push notifications when a spot opens up for the classes you care about."}),g.jsx(MF,{to:tt.SIGN_IN,children:"Sign in"})]}):e(t.data.id)},PF=e=>g.jsx(ms,{children:g.jsx(IF,{children:g.jsx(AF,{children:g.jsx(jF,{...e})})})}),$F=({userId:e})=>g.jsx(RF,{userId:e,children:g.jsx(TF,{userId:e,children:g.jsx(CF,{userId:e,children:g.jsx(JM,{})})})}),UF=()=>g.jsx(PF,{children:e=>g.jsx($F,{userId:e})}),bC=async(e,t)=>{const n=an;if(!n)throw new Error("No Firebase database connection to use");await gI(Mn(n,Ti.alertPreferences(e)),t)},zF=C.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`,BF=C.div`
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
`,HF=C.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: 2px;
  left: ${e=>e.$checked?"20px":"2px"};
  transition: left 0.2s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
`,FF=C.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  position: relative;
`,MD=({id:e,checked:t,onChange:n,label:i,"aria-label":o})=>g.jsxs(FF,{htmlFor:e,children:[g.jsx(zF,{id:e,type:"checkbox",checked:t,"aria-label":o??i,onChange:l=>n(l.target.checked)}),g.jsx(BF,{$checked:t,children:g.jsx(HF,{$checked:t})}),i&&g.jsx("span",{children:i})]}),qF=C.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,VF=C.div`
  display: flex;
  align-items: center;
  gap: 12px;

  ${Ce`
    flex-direction: column;
    align-items: stretch;
  `}
`,GF=C.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,WF=C.label`
  font-size: 13px;
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
`,YF=C.input`
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
`,QF=C.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,KF=C.button`
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
`,XF=C.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
  padding: 16px;
`,ZF=C.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.error};
  text-align: center;
  padding: 16px;
`,JF=C.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${e=>e.theme.borderColor};
  margin-bottom: 4px;
`,eq=C.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,tq=C.span`
  font-size: 13px;
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
`,nq=C.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,rq=({alertPreferences:e})=>{const t=Je(yu),[n,i]=E.useState(e.notificationDelayMin||5),[o,l]=E.useState(!1),[u,f]=E.useState(!1),p=!!e.pauseAll,h=E.useCallback(async _=>{if(_.preventDefault(),!!t){l(!0),f(!1);try{await bC(t,{lastUpdated:new Date().getTime(),notificationDelayMin:n}),f(!0),setTimeout(()=>f(!1),2e3)}catch{}finally{l(!1)}}},[t,n]),y=E.useCallback(async _=>{t&&await bC(t,{pauseAll:!_})},[t]);return g.jsxs(g.Fragment,{children:[g.jsxs(JF,{children:[g.jsxs(eq,{children:[g.jsx(tq,{children:"Enable all notifications"}),g.jsx(nq,{children:"Globally pause or resume notifications for all alerts"})]}),g.jsx(MD,{id:"pause-all-toggle",checked:!p,onChange:y,"aria-label":p?"Resume all notifications":"Pause all notifications"})]}),g.jsxs(qF,{onSubmit:h,children:[g.jsxs(GF,{children:[g.jsx(WF,{htmlFor:"delay-input",children:"Cooldown (minutes)"}),g.jsx(QF,{children:"Minimum delay between consecutive alert notifications"})]}),g.jsxs(VF,{children:[g.jsx(YF,{id:"delay-input",type:"number",min:0,value:n,onChange:_=>{const v=parseInt(_.target.value,10);Number.isNaN(v)||i(v)}}),g.jsx(KF,{type:"submit",disabled:o,$saved:u,children:o?"Saving…":u?"Saved ✓":"Save"})]})]})]})},iq=()=>{const e=E.useContext(OD);return e.state==="idle"||e.state==="loading"?g.jsx(XF,{children:"Loading preferences…"}):e.state==="failed"?g.jsx(ZF,{children:"Failed to load preferences."}):g.jsx(rq,{alertPreferences:e.data},e.data.lastUpdated)},sq=e=>{if(!e)return"Unknown device";const t=oq(e),n=aq(e);return t&&n?`${t} on ${n}`:t||n||"Unknown device"},oq=e=>{if(e.includes("Edg/"))return"Edge";if(e.includes("OPR/")||e.includes("Opera"))return"Opera";if(e.includes("CriOS"))return"Chrome";if(e.includes("FxiOS"))return"Firefox";if(e.includes("Chrome/")&&!e.includes("Chromium"))return"Chrome";if(e.includes("Firefox/"))return"Firefox";if(e.includes("Safari/")&&!e.includes("Chrome"))return"Safari"},aq=e=>{if(/iPhone/.test(e))return"iPhone";if(/iPad/.test(e))return"iPad";if(/iPod/.test(e))return"iPod";if(/Android/.test(e))return"Android";if(/CrOS/.test(e))return"ChromeOS";if(/Mac OS X|Macintosh/.test(e))return"macOS";if(/Windows/.test(e))return"Windows";if(/Linux/.test(e))return"Linux"},lq=C.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,cq=C.li`
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
`,uq=C.span`
  font-size: 20px;
  flex-shrink: 0;
`,dq=C.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
`,fq=C.span`
  font-weight: 500;
  font-size: 14px;
  color: ${e=>e.theme.colors.main};
  display: flex;
  align-items: center;
  gap: 6px;
`,hq=C.span`
  padding: 1px 6px;
  border-radius: 10px;
  font-size: 10px;
  font-weight: 600;
  background-color: ${e=>e.theme.colors.accent}14;
  color: ${e=>e.theme.colors.accent};
`,pq=C.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,mq=C.button`
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
`,gq=C.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
  padding: 16px;
`,yq=C.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
  padding: 16px;
`,vq=C.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.error};
  text-align: center;
  padding: 16px;
`,_q=e=>e?/iPhone|iPad|iPod/i.test(e)||/Android/i.test(e)?"📱":/Windows/i.test(e)||/Macintosh|Mac OS/i.test(e)?"💻":/Linux/i.test(e)?"🖥️":"💻":"💻",bq=E.memo(({deviceToken:e,device:t,isCurrentDevice:n,onDelete:i})=>{const o=E.useMemo(()=>{const f=new Date(t.timestamp).getFullYear()===new Date().getFullYear();return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"numeric",...f?{}:{year:"numeric"}}).format(t.timestamp)},[t.timestamp]),l=sq(t.userAgent);return g.jsxs(cq,{children:[g.jsx(uq,{children:_q(t.userAgent)}),g.jsxs(dq,{children:[g.jsxs(fq,{children:[l,n&&g.jsx(hq,{children:"This device"})]}),g.jsxs(pq,{children:["Last active ",o]})]}),g.jsx(mq,{type:"button",onClick:()=>i(e),"aria-label":`Remove ${l}`,children:"Remove"})]})}),Sq=({devices:e})=>{const n=E.useContext(vu).token,i=Je(yu),o=E.useCallback(l=>{i&&bI(i,l).catch(console.error)},[i]);return e.length===0?g.jsx(gq,{children:"No devices registered for push notifications yet."}):g.jsx(lq,{children:e.map(([l,u])=>g.jsx(bq,{deviceToken:l,device:u,isCurrentDevice:n!==void 0?l===n:u.userAgent!==void 0&&u.userAgent===navigator.userAgent,onDelete:o},l))})},xq=()=>{const e=E.useContext(ND),t=E.useMemo(()=>e.state==="fulfilled"?Object.entries(e.data).sort(([,n],[,i])=>i.timestamp-n.timestamp):[],[e]);return e.state==="idle"||e.state==="loading"?g.jsx(yq,{children:"Loading devices…"}):e.state==="failed"?g.jsx(vq,{children:"Failed to load devices. Please try again."}):g.jsx(Sq,{devices:t})},wq=async(e,t)=>{const n=an;if(!n)throw new Error("No Firebase database connection to use");await mI(Mn(n,Ti.alert(e,t)))},SC=(e,t,n)=>!e||e.length===0?t:e.length===1?e[0]:e.length===2?`${e[0]} or ${e[1]}`:`${e.length} ${n}`,Eq=(e,t)=>{const n=SC(e,"Any Class","Disciplines"),i=SC(t,"Any Instructor","Instructors");return`${n} with ${i}`},Cq=C.li`
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
`,Tq=C.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;

  ${Ce`
    flex-direction: column;
    gap: 8px;
  `}
`,Rq=C.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`,Aq=C.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`,Iq=C.span`
  font-weight: 600;
  font-size: 15px;
  color: ${e=>e.theme.colors.main};
`,Dq=C.span`
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 500;
  background-color: ${e=>e.$status==="free"?e.theme.colors.status.free.bg:e.$status==="waitlist"?e.theme.colors.status.waitlist.bg:`${e.theme.colors.error}20`};
  color: ${e=>e.$status==="free"?e.theme.colors.status.free.text:e.$status==="waitlist"?e.theme.colors.status.waitlist.text:e.theme.colors.error};
`,kq=C.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
`,Nq=C.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  margin-top: 2px;
`,Oq=C.span`
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
`,Mq=C.div`
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;

  ${Ce`
    align-self: flex-end;
  `}
`,Lq=C.div`
  position: relative;
  flex-shrink: 0;
`,jq=C.button`
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
`,Pq=C.ul`
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
`,Nf=C.button`
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
`,$q=C(Nf)`
  color: ${e=>e.theme.colors.error};
`,Uq=C.li`
  height: 1px;
  background: ${e=>e.theme.borderColor};
  margin: 4px 0;
`,zq=C.div`
  padding: 10px 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Bq=C.p`
  margin: 0;
  font-size: 13px;
  color: ${e=>e.theme.colors.main};
  white-space: nowrap;
`,Hq=C.div`
  display: flex;
  gap: 6px;
`,Fq=C.button`
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
`,qq=C.button`
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
`,Vq=C.span`
  font-size: 11px;
  color: ${e=>e.theme.colors.secondary};
  margin-top: 4px;
`,Gq={free:{label:"Open spots",title:"Only alerts when a class has open spots available to book"},waitlist:{label:"Waitlist",title:"Alerts when a class has open spots or waitlist availability"},full:{label:"Any",title:"Alerts regardless of availability status"}},Wq=e=>Gq[e]||{label:e,title:""},Yq=E.memo(({alert:e,onDuplicate:t,onEdit:n})=>{const i=Cs(),o=Je(yu),l=!!e.disabled,[u,f]=E.useState(!1),[p,h]=E.useState(!1),[y,_]=E.useState({top:0,right:0}),v=E.useRef(null),S=E.useRef(null),x=E.useCallback(()=>{o&&oD(o,{...e,disabled:!l})},[o,e,l]),D=E.useCallback(()=>{f(!1),h(!1)},[]);E.useLayoutEffect(()=>{if(!u||!v.current)return;const U=v.current.getBoundingClientRect();_({top:U.bottom+4,right:window.innerWidth-U.right})},[u]),E.useEffect(()=>{if(!u)return;const U=z=>{z.key==="Escape"&&D()},F=z=>{if(!(z.target instanceof Node))return D();!v.current?.contains(z.target)&&!S.current?.contains(z.target)&&D()},H=setTimeout(()=>{document.addEventListener("keydown",U),document.addEventListener("click",F,!0)},0);return()=>{clearTimeout(H),document.removeEventListener("keydown",U),document.removeEventListener("click",F,!0)}},[u,D]);const{data:T}=yb(e.studioId),{data:k}=gb(e.studioId),M=E.useMemo(()=>{const F=new Date(e.created).getFullYear()===new Date().getFullYear();return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",...F?{}:{year:"numeric"}}).format(e.created)},[e.created]),R=E.useMemo(()=>new Map(T?.map(U=>[U.id,U.name])),[T]),I=E.useMemo(()=>new Map(k?.map(U=>[U.id,U.name])),[k]),O=E.useMemo(()=>{if(e.name)return e.name;const U=rs(e.instructors)&&T?e.instructors.map(H=>R.get(H)).filter(H=>!!H):null,F=rs(e.disciplines)&&k?e.disciplines.map(H=>I.get(H)).filter(H=>!!H):null;return Eq(F,U)},[e.name,e.instructors,e.disciplines,T,k,R,I]),A=fn[e.studioId]?.location||e.studioId||"No studio",j=Wq(e.maxStatus);return g.jsx(Cq,{$disabled:l,children:g.jsxs(Tq,{children:[g.jsxs(Rq,{children:[g.jsxs(Aq,{children:[g.jsx(Iq,{children:O}),g.jsx(Dq,{$status:e.maxStatus,title:j.title,children:j.label})]}),g.jsx(kq,{children:A}),g.jsx(Nq,{children:us.map((U,F)=>g.jsx(Oq,{$active:!!e.timeRanges[F],title:e.timeRanges[F]?`${U}: monitoring enabled`:`${U}: not monitored`,children:U.charAt(0)},U))}),g.jsxs(Vq,{children:["Created ",M]})]}),g.jsxs(Mq,{children:[g.jsx(MD,{id:`toggle-${e.id}`,checked:!l,onChange:x,"aria-label":l?"Enable alert":"Disable alert"}),g.jsxs(Lq,{children:[g.jsx(jq,{ref:v,type:"button","aria-label":"More options","aria-expanded":u,"aria-haspopup":"menu",onClick:()=>f(U=>!U),children:g.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:[g.jsx("circle",{cx:"8",cy:"3",r:"1.5"}),g.jsx("circle",{cx:"8",cy:"8",r:"1.5"}),g.jsx("circle",{cx:"8",cy:"13",r:"1.5"})]})}),u&&xT.createPortal(g.jsxs(Pq,{ref:S,role:"menu",$top:y.top,$right:y.right,children:[g.jsx("li",{children:g.jsx(Nf,{type:"button",role:"menuitem",onClick:()=>{D(),i(qU(e.id))},children:"Test"})}),g.jsx("li",{children:g.jsx(Nf,{type:"button",role:"menuitem",onClick:()=>{D(),n(e)},children:"Edit"})}),g.jsx("li",{children:g.jsx(Nf,{type:"button",role:"menuitem",onClick:()=>{D(),t(e)},children:"Duplicate"})}),g.jsx(Uq,{}),p?g.jsx("li",{children:g.jsxs(zq,{children:[g.jsx(Bq,{children:"Delete this alert?"}),g.jsxs(Hq,{children:[g.jsx(Fq,{type:"button",onClick:()=>h(!1),children:"Cancel"}),g.jsx(qq,{type:"button",onClick:()=>{D(),o&&wq(o,e.id)},children:"Delete"})]})]})}):g.jsx("li",{children:g.jsx($q,{type:"button",role:"menuitem",onClick:()=>h(!0),children:"Delete"})})]}),document.body)]})]})]})})}),Qq=C.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Kq=({alerts:e,onDuplicate:t,onEdit:n})=>g.jsx(Qq,{children:e.map(i=>g.jsx(Yq,{alert:i,onDuplicate:t,onEdit:n},i.id))}),Xq=C.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px 0;

  ${Ce`
    padding: 16px 16px 0;
  `}
`,Zq=C.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,Jq=C.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
`,eV=C.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
`,tV=C.button`
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
`,nV=C.div`
  padding: 16px 24px 24px;

  ${Ce`
    padding: 12px 16px 16px;
  `}
`,rV=C.p`
  margin: 0;
  padding: 24px;
  text-align: center;
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
`,iV=C.p`
  margin: 0;
  padding: 24px;
  text-align: center;
  color: ${e=>e.theme.colors.error};
  font-size: 14px;
`,sV=({onAdd:e,onEdit:t,onDuplicate:n})=>{const i=E.useContext(cb),o=i.state==="loading"||i.state==="idle",l=i.state==="failed",u=i.state==="fulfilled"?i.data:[];return g.jsxs(g.Fragment,{children:[g.jsxs(Xq,{children:[g.jsxs(Zq,{children:[g.jsx(Jq,{children:"Alerts"}),g.jsx(eV,{children:o?"Loading your alerts…":l?"Something went wrong":u.length===0?"You haven't created any alerts yet":`${u.length} alert${u.length===1?"":"s"}`})]}),!o&&!l&&g.jsx(tV,{type:"button",onClick:e,children:"+ New alert"})]}),g.jsxs(nV,{children:[o&&g.jsx(rV,{children:"Loading…"}),l&&g.jsx(iV,{children:"Failed to load your alerts. Please refresh and try again."}),!o&&!l&&u.length===0&&g.jsx(cV,{onAdd:e}),!o&&!l&&u.length>0&&g.jsx(Kq,{alerts:u,onEdit:t,onDuplicate:n})]})]})},oV=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 32px 16px;
`,aV=C.p`
  margin: 0;
  font-size: 15px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
`,lV=C.button`
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
`,cV=({onAdd:e})=>g.jsxs(oV,{children:[g.jsx(aV,{children:"Create your first alert to get notified when classes become available."}),g.jsx(lV,{type:"button",onClick:e,children:"Create an alert"})]}),uV=C.button`
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
`;C.button`
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
`;const dV=C.div`
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 16px;
`,fV=()=>["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document||/iPad|iPhone|iPod/.test(navigator.userAgent),yy=C(dV)`
  margin-bottom: 1em;
`,hV=C(uV)`
  margin-top: 1em;
`,xC=C.h2`
  color: ${e=>e.theme.colors.accent};
`,pV=()=>{const[e,t]=E.useState(window.Notification?window.Notification.permission:void 0),{refreshToken:n}=E.useContext(vu),i=fV(),o=!!navigator.standalone||window.matchMedia("(display-mode: standalone)").matches,l=E.useCallback(()=>{window.Notification&&typeof window.Notification.requestPermission=="function"&&window.Notification.requestPermission().then(u=>{t(u),u==="granted"&&n()}).catch(u=>{console.error(u),Or(u)})},[n]);return i&&!o?g.jsxs(yy,{children:[g.jsx(xC,{children:"Installation Required"}),g.jsx("p",{children:"To receive notifications on iOS, you must first add this app to your home screen. Tap the share button in Safari and select “Add to Home Screen”, then open the app from there."})]}):e===void 0||!("serviceWorker"in navigator)?g.jsxs(yy,{children:[g.jsx(xC,{children:"Unsupported Browser"}),g.jsx("p",{children:"This browser does not support sending you notifications in the background. Alerts for new classes will only display if you keep this tab open."})]}):e!=="granted"?g.jsxs(yy,{children:[g.jsx("h2",{children:"Grant notification permissions"}),g.jsx("p",{children:"In order to get notified when any of your alerts trigger, you need to grant permission to send notifications"}),g.jsx(hV,{type:"button",onClick:l,children:"Grant Permission"})]}):null},mV=C.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${Ce`
    gap: 16px;
  `}
`,vy=C.section`
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  overflow: hidden;
`,wC=C.div`
  padding: 20px 24px 0;

  ${Ce`
    padding: 16px 16px 0;
  `}
`,EC=C.h2`
  margin: 0 0 4px;
  font-size: 20px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
`,CC=C.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
`,TC=C.div`
  padding: 16px 24px 24px;

  ${Ce`
    padding: 12px 16px 16px;
  `}
`,gV=()=>{const e=Cs();return g.jsxs(mV,{children:[g.jsx(vy,{children:g.jsx(sV,{onAdd:()=>{e(tt.ALERTS_EDITOR,{state:{}})},onEdit:t=>{e(tt.ALERTS_EDITOR,{state:t})},onDuplicate:t=>{e(tt.ALERTS_EDITOR,{state:{...t,id:void 0,created:void 0}})}})}),g.jsxs(vy,{children:[g.jsxs(wC,{children:[g.jsx(EC,{children:"Preferences"}),g.jsx(CC,{children:"Control how often you receive alert notifications."})]}),g.jsx(TC,{children:g.jsx(iq,{})})]}),g.jsxs(vy,{children:[g.jsxs(wC,{children:[g.jsx(EC,{children:"Devices"}),g.jsx(CC,{children:"Devices registered to receive push notifications. Removed devices will re-register on their next visit."})]}),g.jsxs(TC,{children:[g.jsx(pV,{}),g.jsx(xq,{})]})]})]})},yV=C.button.attrs({"aria-label":"Close",type:"button"})`
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
`,vV=()=>{const e=Je(i=>i.filters.selectedBookableStatuses),t=ir(),n=E.useCallback(i=>{t(dF(i))},[t]);return{bookableStatuses:e,toggleBookableStatus:n}},_V=C.button`
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
`,bV=C.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px 8px;
`,SV=C.h3`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${e=>e.theme.colors.secondary};
  margin: 0;
`,hp=({label:e,onReset:t,children:n})=>g.jsxs(bV,{children:[g.jsx(SV,{children:e}),t&&g.jsx(_V,{type:"button",onClick:t,children:"Reset"}),n]}),xV=C.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 0 16px 16px;
`,wV=C.button`
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
`,EV=()=>{const{bookableStatuses:e,toggleBookableStatus:t}=vV(),n=Vv(),i=[{label:"Free",status:"free",color:n.colors.status.free.text},{label:"Waitlist",status:"waitlist",color:n.colors.status.waitlist.text},{label:"Full",status:"full",color:n.colors.status.full.text}];return g.jsxs("fieldset",{style:{border:"none",margin:0,padding:0},children:[g.jsx("legend",{style:{padding:0,width:"100%"},children:g.jsx(hp,{label:"Status"})}),g.jsx(xV,{children:i.map(o=>{const l=e.includes(o.status);return g.jsx(wV,{type:"button",$active:l,$color:o.color,onClick:()=>t(o.status),"aria-pressed":l,children:o.label},o.status)})})]})},CV=()=>{const e=Je(i=>i.filters.selectedDisciplines),t=ir(),n=E.useCallback(i=>{t(pF(i))},[t]);return{selectedDisciplines:e,toggleDiscipline:n}},LD=C.ul`
  list-style: none;
  margin: 0;
  padding: 0 0 8px;
`,jD=C.li`
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
`,PD=C.span`
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
`,$D=C.span`
  font-size: 14px;
  color: ${e=>e.theme.colors.main};
`,Eh=C.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  padding: 8px 16px 16px;
  margin: 0;
`,TV=({discipline:e,checked:t,onClick:n})=>g.jsxs(jD,{$checked:t,onClick:n,role:"checkbox","aria-checked":t,children:[g.jsx(PD,{$checked:t}),g.jsx(_h,{discipline:e,size:24}),g.jsx($D,{children:e.name})]}),RV=()=>{const e=Je(Ao),{currentData:t,isLoading:n,error:i}=gb(e),{selectedDisciplines:o,toggleDiscipline:l}=CV(),u=ir(),f=E.useRef(o);return E.useEffect(()=>{const p=f.current;if(!t||p.length===0)return;const h=new Set(t.map(_=>_.id)),y=p.filter(_=>h.has(_));y.length<p.length&&u(mF(y))},[t,u]),i&&!n?g.jsx(Eh,{children:"Failed to load disciplines"}):!t||n?g.jsx(Eh,{children:"Loading…"}):g.jsx(LD,{children:t.map((p,h)=>g.jsx(TV,{discipline:p,checked:o.includes(p.id),onClick:()=>l(p.id)},h))})},AV=()=>{const e=Je(n=>n.filters.selectedDisciplines.length>0),t=ir();return g.jsxs("div",{children:[g.jsx(hp,{label:"Disciplines",onReset:e?()=>t(gF()):void 0}),g.jsx(RV,{})]})},IV=()=>{const e=Je(i=>i.filters.selectedInstructors),t=ir(),n=E.useCallback(i=>{t(fF(i))},[t]);return{selectedInstructors:e,toggleInstructor:n}},DV=({instructor:e,checked:t,onClick:n})=>g.jsxs(jD,{$checked:t,onClick:n,role:"checkbox","aria-checked":t,children:[g.jsx(PD,{$checked:t}),g.jsx(ub,{instructor:e,size:28}),g.jsx($D,{children:e.name})]}),kV=()=>{const e=Je(Ao),{currentData:t,isLoading:n,error:i}=yb(e),{selectedInstructors:o,toggleInstructor:l}=IV();return i&&!n?g.jsx(Eh,{children:"Failed to load instructors"}):!t||n?g.jsx(Eh,{children:"Loading…"}):g.jsx(LD,{children:t.map((u,f)=>g.jsx(DV,{instructor:u,checked:o.includes(u.id),onClick:()=>l(u.id)},f))})},NV=()=>{const e=Je(n=>n.filters.selectedInstructors.length>0),t=ir();return g.jsxs("div",{children:[g.jsx(hp,{label:"Instructors",onReset:e?()=>t(hF()):void 0}),g.jsx(kV,{})]})},OV=Object.entries(fn).map(([e,t])=>({id:e,label:t.location})),MV=C.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 0 16px 16px;
`,LV=C.label`
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
`,jV=C.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`,PV=C.span`
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
`,$V=C.span`
  font-size: 15px;
  color: ${e=>e.theme.colors.main};
`,UV=()=>{const e=ir(),t=Je(Ao);return g.jsxs("fieldset",{style:{border:"none",margin:0,padding:0},children:[g.jsx("legend",{style:{padding:0,width:"100%"},children:g.jsx(hp,{label:"Studio"})}),g.jsx(MV,{children:OV.map(n=>{const i=t===n.id;return g.jsxs(LV,{$selected:i,htmlFor:`studio-${n.id}`,children:[g.jsx(jV,{type:"radio",id:`studio-${n.id}`,name:"studio-selected",value:n.id,checked:i,onChange:()=>{i||e(kf(n.id))}}),g.jsx(PV,{$selected:i}),g.jsx($V,{children:n.label})]},n.id)})})]})},zV=C.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`,BV=C.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 16px 12px;
  border-bottom: 1px solid ${e=>e.theme.borderColor};
  position: sticky;
  top: 0;
  background-color: ${e=>e.theme.colors.secondarySurface};
  z-index: 1;

  ${sD`
    display: flex;
  `}
`,HV=C.h2`
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${e=>e.theme.colors.main};
  margin: 0;
`,FV=C(yV)`
  display: none;

  ${sD`
    display: block;
  `}
`,qV=C.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  overflow-y: auto;
  flex: 1;
`,ff=C.div`
  border-bottom: 1px solid ${e=>e.theme.borderColor};

  &:last-child {
    border-bottom: none;
  }
`,VV=({onClose:e})=>g.jsxs(zV,{children:[g.jsxs(BV,{children:[g.jsx(HV,{children:"Filters"}),g.jsx(FV,{onClick:()=>e()})]}),g.jsxs(qV,{children:[g.jsx(ff,{children:g.jsx(UV,{})}),g.jsx(ff,{children:g.jsx(EV,{})}),g.jsx(ff,{children:g.jsx(AV,{})}),g.jsx(ff,{children:g.jsx(NV,{})})]})]}),GV=()=>{const e=Je(Ao),{refetch:t}=mb(e);return{refresh:E.useCallback(async()=>{await t()},[t])}},RC=150,AC=60,WV=()=>document.documentElement.scrollTop||document.body.scrollTop,YV=({refresh:e})=>{const t=E.useRef(null),n=E.useRef(null),i=E.useRef(e);E.useLayoutEffect(()=>{i.current=e});const o=E.useMemo(()=>!!navigator.standalone||window.matchMedia("(display-mode: standalone)").matches||!1,[]);return E.useEffect(()=>{if(!o)return;let l=0,u=!1,f=!1,p=!1;const h=x=>{const D=n.current;D&&(D.style.transition=x?"transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease":"none",D.style.transform="",D.style.opacity="0")},y=x=>{l=x.touches[0].clientY,u=!1,f=!1},_=x=>{if(p||WV()>0)return;const D=x.touches[0].clientY-l;if(D<=0){u&&(u=!1,f=!1,h(!1));return}u=!0,f=D>=RC;const T=Math.min(D/RC,1),k=AC*(1-Math.pow(1-T,2)),M=Math.pow(T,.5),R=Math.floor(T*270),I=n.current;I&&(I.style.transition="none",I.style.transform=`translateY(${k}px) rotate(${R}deg)`,I.style.opacity=String(Math.min(M,1)))},v=()=>{if(u)if(u=!1,f&&!p){f=!1,p=!0;const x=n.current;x&&(x.classList.add("animate"),x.style.transition="none",x.style.transform=`translateY(${AC}px)`,x.style.opacity="1");let D=!1;const T=()=>{if(D)return;D=!0,p=!1;const M=n.current;M&&(M.classList.remove("animate"),h(!0))},k=setTimeout(T,1e4);i.current().finally(()=>{clearTimeout(k),T()})}else f=!1,h(!0)},S=()=>{u=!1,f=!1,h(!1)};return document.addEventListener("touchstart",y,{passive:!0}),document.addEventListener("touchmove",_,{passive:!0}),document.addEventListener("touchend",v,{passive:!0}),document.addEventListener("touchcancel",S,{passive:!0}),()=>{document.removeEventListener("touchstart",y),document.removeEventListener("touchmove",_),document.removeEventListener("touchend",v),document.removeEventListener("touchcancel",S)}},[o]),{swipeRef:t,spinnerRef:n}},QV=e=>e.filters.selectedDisciplines.length>0||e.filters.selectedInstructors.length>0,KV=e=>e.filters.selectedBookableStatuses,XV=e=>e.filters.selectedDisciplines,ZV=e=>e.filters.selectedInstructors,JV=(e,t)=>t,eG=Ei([KV,XV,ZV,JV],(e,t,n,i)=>i.filter(o=>e.includes(o.status)).filter(o=>n.length>0?n.some(l=>l===o.instructor.id):!0).filter(o=>t.length>0?t.includes(o.discipline.id):!0)),UD=Ei([Ao],e=>{if(e)return fn[e]}),tG=Ei([eG,UD],(e,t)=>{if(e.length===0)return[];const n=t?.timezone||"",i=[];let o=1,l=Fa(e[0].start,n,!0),u=[e[0]];for(;o<e.length;){const f=e[o],p=Fa(f.start,n,!0);p===l?u.push(f):(i.push({formattedDate:l,classes:u}),l=p,u=[f]),o++}return u.length>0&&i.push({formattedDate:l,classes:u}),i}),IC={free:{label:"Book"},waitlist:{label:"Waitlist"},full:{label:"Full"}},nG=C.a`
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
`,rG=C.div`
  flex-shrink: 0;
  width: 84px;
  ${Ce`
    width: 70px;
  `}
`,iG=C.div`
  font-weight: 600;
  font-size: 16px;
  color: ${e=>e.theme.colors.main};
  white-space: nowrap;
  ${Ce`
    font-size: 13px;
  `}
`,sG=C.div`
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
  margin-top: 2px;
  ${Ce`
    font-size: 11px;
  `}
`,oG=C.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  ${Ce`
    display: none;
  `}
`,aG=C.div`
  flex: 1;
  min-width: 0;
`,lG=C.div`
  font-size: 16px;
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${Ce`
    font-size: 13px;
  `}
`,cG=C.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  margin-top: 3px;
  ${Ce`
    font-size: 12px;
  `}
`,uG=C.span`
  color: ${e=>e.theme.borderColor};
`,dG=C.div`
  display: none;
  ${Ce`
    display: flex;
    align-items: center;
  `}
`,fG=C.button`
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
`,hG=E.memo(({clazz:e})=>{const t=Je(UD),n=e.status,i=n==="free"||n==="waitlist",o=E.useMemo(()=>e.customerUrl?new URL(e.customerUrl,"https://schedule.studio.onepeloton.com").href:(Kv("Missing customer URL",{extra:{clazz:e}}),""),[e]),l=E.useCallback(p=>{o&&(p.preventDefault(),window.open(o,"_blank","noopener,noreferrer"))},[o]),u=E.useMemo(()=>wo(e.start,t?.timezone),[e.start,t?.timezone]),f=IC[n]??IC.full;return g.jsxs(nG,{$status:n,$interactive:i,href:o,target:"_blank",rel:"noopener noreferrer",onClick:l,"aria-label":`${f.label} ${e.name} at ${u}`,children:[g.jsxs(rG,{children:[g.jsx(iG,{children:u}),g.jsxs(sG,{children:[e.duration/60," min"]})]}),g.jsxs(oG,{children:[g.jsx(ub,{instructor:e.instructor,size:44}),g.jsx(_h,{discipline:e.discipline,size:36})]}),g.jsxs(aG,{children:[g.jsx(lG,{children:e.name}),g.jsxs(cG,{children:[e.instructor.name,g.jsx(uG,{children:"·"}),e.discipline.name,g.jsx(dG,{children:g.jsx(_h,{discipline:e.discipline,size:20})})]})]}),g.jsx(fG,{$status:n,disabled:!i,tabIndex:-1,children:f.label})]})}),pG=C.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,mG=C.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,gG=C.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 0 4px 6px;
  border-bottom: 1px solid ${e=>e.theme.borderColor};
  margin-bottom: 2px;
`,yG=C.h2`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${e=>e.theme.colors.main};
  margin: 0;
`,DC=C.span`
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
`,vG=C.div`
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 32px 24px;
  text-align: center;
  ${Ce`
    padding: 24px 16px;
  `}
`,_G=C.p`
  font-size: 16px;
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
  margin: 0 0 8px;
`,kC=C.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  margin: 0;
  line-height: 1.5;
`,bG=({classes:e,fulfilledTimeStamp:t})=>{const n=Je(u=>tG(u,e)),i=Je(QV),o=Je(u=>u.filters.selectedBookableStatuses.includes("free")),l=E.useMemo(()=>t?new Intl.DateTimeFormat(void 0,{hour:"numeric",minute:"numeric"}).format(t):void 0,[t]);return n.length===0?g.jsxs(vG,{children:[g.jsx(_G,{children:"No classes found"}),i&&g.jsx(kC,{children:"Try resetting your filters or selecting more options in the sidebar."}),o&&!i&&g.jsx(kC,{children:"New classes usually open at 12:00 pm on Mondays and Thursdays in your studio's timezone."})]}):g.jsx(pG,{children:n.map((u,f)=>g.jsxs(mG,{children:[g.jsxs(gG,{children:[g.jsx(yG,{children:u.formattedDate}),f===0&&l&&g.jsxs(DC,{children:["Times in studio timezone · loaded ",l]}),f===0&&!l&&g.jsx(DC,{children:"All times in studio timezone"})]}),u.classes.map((p,h)=>g.jsx(hG,{clazz:p},h))]},f))})},NC=C.div`
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 32px 24px;
  text-align: center;
  ${Ce`
    padding: 24px 16px;
  `}
`,SG=C.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  margin: 0;
`,xG=C.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.error};
  margin: 0 0 6px;
`,wG=C.code`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,EG=()=>{const e=Je(Ao),{currentData:t,isLoading:n,error:i,fulfilledTimeStamp:o}=mb(e,{refetchOnMountOrArgChange:!0});return i&&!n?g.jsxs(NC,{children:[g.jsx(xG,{children:"Failed to load classes"}),g.jsx(wG,{children:zH(i)})]}):!t||n?g.jsx(NC,{children:g.jsx(SG,{children:"Loading classes…"})}):g.jsx(bG,{classes:t,fulfilledTimeStamp:o})},CG=C.div``,Rv=300,TG=C.aside`
  max-width: 100%;
  width: ${Rv}px;
  top: calc(${X_}px + env(safe-area-inset-top, 0px));
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
    left: ${e=>e.$toggleVisible?0:-Rv}px;
    z-index: 2;
    box-shadow: ${e=>e.$toggleVisible?"4px 0 16px rgba(0,0,0,0.08)":"none"};
  }
`,RG=C.div`
  flex: 1;
  background-color: ${e=>e.theme.colors.secondarySurface};
  padding: 20px;
  padding-bottom: calc(20px + env(safe-area-inset-bottom, 0px));
  position: relative;
  margin-left: ${Rv}px;

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
`,hf=40,AG=C.div`
  padding-top: 10px;
  position: absolute;
  left: 0;
  width: 100%;
  top: -50px;
  text-align: center;
`,IG=C.div`
  display: inline-block;
  position: relative;
  width: ${hf}px;
  height: ${hf}px;
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
    width: ${hf}px;
    height: ${hf}px;
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
`,DG=C.div`
  display: none;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;

  @media only screen and (max-width: ${e=>e.theme.widths.tablet}px) {
    display: flex;
  }
`,kG=C.button`
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
`,NG=()=>g.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:g.jsx("path",{d:"M1 3h12M3 7h8M5 11h4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),OG=()=>{const{refresh:e}=GV(),{swipeRef:t,spinnerRef:n}=YV({refresh:e}),[i,o]=E.useState(!1);return g.jsx(ms,{children:g.jsxs(CG,{children:[g.jsx(TG,{$toggleVisible:i,children:g.jsx(VV,{onClose:()=>{o(!1)}})}),g.jsxs(RG,{$toggleVisible:i,onClick:()=>{o(!1)},ref:t,children:[g.jsx(AG,{children:g.jsxs(IG,{ref:n,children:[g.jsx("div",{}),g.jsx("div",{}),g.jsx("div",{})]})}),g.jsx(DG,{children:g.jsxs(kG,{type:"button",onClick:l=>{o(!0),l.stopPropagation()},children:[g.jsx(NG,{}),"Filters"]})}),g.jsx(EG,{})]})]})})},MG=({children:e})=>{const t=Je(Za),n=Je(Z_);return t.state!=="fulfilled"?null:n?g.jsx(g.Fragment,{children:e}):g.jsx(jv,{to:tt.CLASS_LIST,replace:!0})},OC=e=>{switch(e.code){case"auth/user-not-found":return"No account found with this email address. Please check your email or create a new account.";case"auth/wrong-password":return"Incorrect password. Please try again or reset your password.";case"auth/invalid-email":return"Please enter a valid email address.";case"auth/user-disabled":return"This account has been disabled. Please contact support for assistance.";case"auth/too-many-requests":return"Too many failed login attempts. Please try again later or reset your password.";case"auth/weak-password":return"Password should be at least 6 characters long.";case"auth/email-already-in-use":return"An account with this email already exists. Please sign in instead.";case"auth/invalid-credential":return"Invalid email or password. Please check your credentials and try again.";case"auth/operation-not-allowed":return"This sign-in method is not enabled. Please contact support.";case"auth/account-exists-with-different-credential":return"An account already exists with the same email but different sign-in credentials. Please sign in using the original method.";case"auth/credential-already-in-use":return"This credential is already associated with a different user account.";case"auth/popup-closed-by-user":return"Sign-in was cancelled. Please try again.";case"auth/popup-blocked":return"Pop-up was blocked by your browser. Please allow pop-ups for this site and try again.";case"auth/cancelled-popup-request":return"Sign-in was cancelled. Please try again.";case"auth/network-request-failed":return"Network error occurred. Please check your internet connection and try again.";case"auth/internal-error":return"An internal error occurred. Please try again later.";case"auth/invalid-api-key":return"Configuration error. Please contact support.";case"auth/app-deleted":return"Application error. Please refresh the page and try again.";case"auth/invalid-user-token":return"Your session has expired. Please sign in again.";case"auth/user-token-expired":return"Your session has expired. Please sign in again.";case"auth/null-user":return"No user is currently signed in.";case"auth/requires-recent-login":return"This operation requires recent authentication. Please sign in again.";default:return e.message||"An unexpected error occurred. Please try again."}},LG=C.h1`
  font-size: 26px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
  margin: 0 0 6px;
`,jG=C.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  margin: 0 0 16px;
  line-height: 1.5;
`,PG=C.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,MC=C.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,LC=C.label`
  font-size: 13px;
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
`,jC=C.input`
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
`,$G=C.button`
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
`,UG=C.button`
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
`,zG=C.div`
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
`,BG=C.p`
  margin: 0;
  font-size: 13px;
  color: ${e=>e.theme.colors.error};
`,HG=C.p`
  margin: 32px 0 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
`,FG=C.button`
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
`,qG=()=>{const e=Cs(),[t,n]=E.useState(!1),[i,o]=E.useState(""),[l,u]=E.useState(!1),[f,p]=E.useState(""),[h,y]=E.useState(""),_=E.useCallback(async S=>{if(S.preventDefault(),!(!di||!f||!h)){n(!0),o("");try{l?await Bz(di,f,h):await Hz(di,f,h),e(tt.CLASS_LIST)}catch(x){console.error("Email auth error:",x);const D=x&&typeof x=="object"&&"code"in x?OC(x):"Authentication failed";o(D),Or(x)}finally{n(!1)}}},[f,h,l,e]),v=E.useCallback(async()=>{if(di){n(!0),o("");try{const S=new ui;await d8(di,S),e(tt.CLASS_LIST)}catch(S){console.error("Google sign-in error:",S);const x=S&&typeof S=="object"&&"code"in S?OC(S):"Google sign-in failed";o(x),Or(S)}finally{n(!1)}}},[e]);return g.jsxs("div",{children:[g.jsx(LG,{children:l?"Create account":"Sign in"}),g.jsx(jG,{children:"Set alerts, persist filters across devices, and access beta features."}),g.jsxs(PG,{onSubmit:_,children:[g.jsxs(MC,{children:[g.jsx(LC,{htmlFor:"signin-email",children:"Email"}),g.jsx(jC,{id:"signin-email",type:"email",placeholder:"you@example.com",value:f,onChange:S=>p(S.target.value),required:!0,disabled:t})]}),g.jsxs(MC,{children:[g.jsx(LC,{htmlFor:"signin-password",children:"Password"}),g.jsx(jC,{id:"signin-password",type:"password",placeholder:"••••••••",value:h,onChange:S=>y(S.target.value),required:!0,disabled:t})]}),i&&g.jsx(BG,{role:"alert",children:i}),g.jsx($G,{type:"submit",disabled:t,children:t?"Loading…":l?"Create account":"Sign in"})]}),g.jsx(zG,{style:{marginTop:20,marginBottom:16},children:"or"}),g.jsx(UG,{type:"button",onClick:v,disabled:t,children:"Continue with Google"}),g.jsxs(HG,{children:[l?"Already have an account?":"Don't have an account?"," ",g.jsx(FG,{type:"button",onClick:()=>{u(!l),o("")},disabled:t,children:l?"Sign in":"Create account"})]})]})},VG=Ei([Za],e=>e.state==="fulfilled"&&!!e.data),GG=C.div`
  padding: 32px 20px;
  display: flex;
  justify-content: center;

  ${Ce`
    padding: 16px 12px;
  `}
`,WG=C.div`
  width: 100%;
  max-width: 400px;
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 32px;

  ${Ce`
    padding: 24px 20px;
  `}
`,YG=()=>Je(VG)?g.jsx(jv,{to:tt.CLASS_LIST}):g.jsx(ms,{children:g.jsx(GG,{children:g.jsx(WG,{children:g.jsx(qG,{})})})});function QG(e){const t=[];for(let n=e-1;n>=0;n--){const i=new Date;i.setDate(i.getDate()-n),t.push(i.toISOString().slice(0,10))}return t}function KG(e=14){const[t,n]=E.useState({state:"idle"});return E.useEffect(()=>{if(!an){n({state:"failed",error:new Error("No database")});return}n({state:"loading"}),yI(Mn(an,"metrics")).then(i=>{const o=i.val()??{},u=QG(e).map(f=>{const p=o[f]??{},h=p.diffs??{},y={};for(const[v,S]of Object.entries(h))y[v]={added:S.added??0,changed:S.changed??0,removed:S.removed??0};const _=p.notifications??{};return{date:f,diffs:y,notifications:{sent:_.sent??0,failed:_.failed??0,usersReached:_.usersReached??0}}});n({state:"fulfilled",data:u})}).catch(i=>{n({state:"failed",error:i})})},[e]),t}function PC(e){if(e.length===0)return null;const t=[...e].sort((i,o)=>i-o),n=Math.floor(t.length/2);return t.length%2===0?(t[n-1]+t[n])/2:t[n]}const XG=e=>{if(!e||typeof e!="object")return!1;const t=e;return typeof t.classId=="string"&&typeof t.instructorName=="string"&&typeof t.addedAt=="number"};function ZG(){const[e,t]=E.useState({state:"idle"});return E.useEffect(()=>{if(!an){t({state:"failed",error:new Error("No database")});return}t({state:"loading"});const n=Mn(an,"selloutStats"),i=Cu(n,o=>{const l=o.val()??{},u=[];for(const[f,p]of Object.entries(l)){if(!p||typeof p!="object")continue;const h=Object.values(p).filter(XG);if(h.length===0)continue;const y=h.map(v=>v.timeToWaitlistMs).filter(v=>v!=null),_=h.map(v=>v.timeToFullMs).filter(v=>v!=null);u.push({instructorId:f,instructorName:h[0].instructorName,classCount:h.length,medianTimeToWaitlistMs:PC(y),waitlistSampleSize:y.length,medianTimeToFullMs:PC(_),fullSampleSize:_.length})}t({state:"fulfilled",data:u})},o=>{t({state:"failed",error:o})});return()=>i()},[]),e}function JG(e){const t=Math.round(e/6e4),n=Math.floor(t/1440),i=Math.floor(t%1440/60),o=t%60;return n>0?`${n}d ${i}h`:i>0?`${i}h ${o}m`:`${o}m`}const _y=C.div`
  padding: 32px 24px;
  max-width: 900px;
  margin: 0 auto;

  ${Ce`
    padding: 20px 16px;
  `}
`,by=C.h1`
  font-size: 22px;
  font-weight: 700;
  color: ${e=>e.theme.colors.main};
  margin: 0 0 28px;
`,Sy=C.section`
  margin-bottom: 40px;
`,xy=C.h2`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${e=>e.theme.colors.secondary};
  margin: 0 0 16px;
`,eW=C.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 40px;

  ${Ce`
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  `}
`,ma=C.div`
  background: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 16px 20px;
`,ga=C.div`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
  margin-bottom: 4px;
`,ya=C.div`
  font-size: 24px;
  font-weight: 700;
  color: ${e=>e.theme.colors.main};
`,xc=C.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
`,Ch=1e3,Of=140,Th=12,zD=4,BD=Of-Th-zD;function gc(e,t){return t<=1?Ch/2:e/(t-1)*Ch}function wy(e,t){return Th+BD*(1-e/t)}const tW=[.25,.5,.75],nW=C.div`
  background: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 16px 16px 12px;
`,rW=C.svg`
  display: block;
  width: 100%;
  height: 140px;
  /* currentColor is used by grid lines so they inherit the theme secondary color */
  color: ${e=>e.theme.colors.secondary};
`,iW=C.div`
  display: flex;
  margin-top: 6px;
`,sW=C.div`
  flex: 1;
  text-align: center;
  font-size: 10px;
  color: ${e=>e.theme.colors.secondary};
  overflow: hidden;
`,oW=C.div`
  display: flex;
  gap: 16px;
  margin-top: 12px;
  flex-wrap: wrap;
`,aW=C.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,lW=C.div`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  background-color: ${e=>e.$color};
  flex-shrink: 0;
`;function cW(e){const[,t,n]=e.split("-");return`${parseInt(t)}/${parseInt(n)}`}function uW({days:e,legend:t}){return g.jsxs(g.Fragment,{children:[g.jsx(iW,{children:e.map(n=>g.jsx(sW,{children:cW(n.date)},n.date))}),g.jsx(oW,{children:t.map(n=>g.jsxs(aW,{children:[g.jsx(lW,{$color:n.color}),n.label]},n.label))})]})}const dW=C.div`
  position: relative;
`,fW=C.div`
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
`,hW=C.div`
  font-size: 11px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,pW=C.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: ${e=>e.theme.colors.secondary};
  line-height: 1.6;
`,mW=C.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${e=>e.$color};
  flex-shrink: 0;
`,gW=C.span`
  margin-left: auto;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
`,yW=C.div`
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${e=>e.$color};
  border: 2px solid ${e=>e.theme.colors.mainSurface};
  transform: translate(-50%, -50%);
  pointer-events: none;
`;function $C({days:e,seriesForDay:t,legend:n}){const i=e.length,[o,l]=E.useState(null),u=e.map(t),f=Math.max(...u.flatMap(v=>v.map(S=>S.value)),1),p=u[0].length,h=wy(0,f).toFixed(1);function y(v,S){const{left:x,width:D}=S.getBoundingClientRect(),T=(v-x)/D;return Math.max(0,Math.min(i-1,Math.round(T*(i-1))))}const _=o!==null?o/(i-1)*100:null;return g.jsxs(nW,{children:[g.jsxs(dW,{children:[o!==null&&_!==null&&g.jsxs(g.Fragment,{children:[g.jsxs(fW,{$pct:_,children:[g.jsx(hW,{children:e[o].date}),u[o].map(v=>g.jsxs(pW,{children:[g.jsx(mW,{$color:v.color}),v.label,g.jsx(gW,{children:v.value})]},v.label))]}),u[o].map((v,S)=>g.jsx(yW,{$color:v.color,style:{left:`${_}%`,top:`${wy(v.value,f)/Of*100}%`}},S))]}),g.jsxs(rW,{viewBox:`0 0 ${Ch} ${Of}`,preserveAspectRatio:"none","aria-hidden":"true",style:{cursor:"crosshair",display:"block"},onMouseMove:v=>l(y(v.clientX,v.currentTarget)),onMouseLeave:()=>l(null),onTouchStart:v=>l(y(v.touches[0].clientX,v.currentTarget)),onTouchMove:v=>l(y(v.touches[0].clientX,v.currentTarget)),onTouchEnd:()=>l(null),children:[tW.map(v=>{const S=(Th+BD*(1-v)).toFixed(1);return g.jsx("line",{x1:0,y1:S,x2:Ch,y2:S,stroke:"currentColor",strokeOpacity:.1,strokeWidth:1,vectorEffect:"non-scaling-stroke"},v)}),o!==null&&g.jsx("line",{x1:gc(o,i).toFixed(1),y1:Th,x2:gc(o,i).toFixed(1),y2:Of-zD,stroke:"currentColor",strokeOpacity:.2,strokeWidth:1,vectorEffect:"non-scaling-stroke"}),Array.from({length:p},(v,S)=>{const x=u[0][S].color,T=u.map((M,R)=>({x:gc(R,i),y:wy(M[S].value,f)})).map(({x:M,y:R},I)=>`${I===0?"M":"L"}${M.toFixed(1)},${R.toFixed(1)}`).join(" "),k=[T,`L${gc(i-1,i).toFixed(1)},${h}`,`L${gc(0,i).toFixed(1)},${h}`,"Z"].join(" ");return g.jsxs("g",{children:[g.jsx("path",{d:k,fill:x,fillOpacity:.12}),g.jsx("path",{d:T,fill:"none",stroke:x,strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})]},S)})]})]}),g.jsx(uW,{days:e,legend:n})]})}const vW=C.div`
  overflow-x: auto;
  ${$r}
`,_W=C.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 480px;
  background: ${e=>e.theme.colors.mainSurface};
`,bW=C.th`
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
`,SW=C.button`
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

  ${cp}
  ${WB}
`,xW=C.span`
  font-size: 10px;
  visibility: ${e=>e.$visible?"visible":"hidden"};
`,UC=C.tr`
  &:not(:last-child) td {
    border-bottom: 1px solid ${e=>e.theme.borderColor};
  }
`,pf=C.td`
  padding: 10px 16px;
  font-size: 13px;
  color: ${e=>e.theme.colors.main};
  white-space: nowrap;
`,zC=C.span`
  color: ${e=>e.theme.colors.secondary};
  font-size: 11px;
  margin-left: 4px;
`;function BC(e,t){return e===null?g.jsx(zC,{children:"—"}):g.jsxs(g.Fragment,{children:[JG(e),g.jsxs(zC,{children:["(n=",t,")"]})]})}const wW=[{key:"instructor",label:"Instructor"},{key:"classCount",label:"Classes tracked"},{key:"waitlist",label:"Median time to waitlist"},{key:"full",label:"Median time to waitlist full"}];function HC(e,t,n){return e===null&&t===null?0:e===null?1:t===null?-1:n==="asc"?e-t:t-e}function EW(e,t,n){if(!n)return e.instructorName.localeCompare(t.instructorName);switch(n.key){case"instructor":return n.direction==="asc"?e.instructorName.localeCompare(t.instructorName):t.instructorName.localeCompare(e.instructorName);case"classCount":return n.direction==="asc"?e.classCount-t.classCount:t.classCount-e.classCount;case"waitlist":return HC(e.medianTimeToWaitlistMs,t.medianTimeToWaitlistMs,n.direction);case"full":return HC(e.medianTimeToFullMs,t.medianTimeToFullMs,n.direction)}}function CW({stats:e}){const[t,n]=E.useState(null);if(e.length===0)return g.jsx(xc,{children:"No sellout data recorded yet."});function i(l){n(u=>!u||u.key!==l?{key:l,direction:"asc"}:u.direction==="asc"?{key:l,direction:"desc"}:null)}const o=[...e].sort((l,u)=>EW(l,u,t));return g.jsx(vW,{children:g.jsxs(_W,{children:[g.jsx("thead",{children:g.jsx(UC,{children:wW.map(({key:l,label:u})=>{const f=t?.key===l;return g.jsx(bW,{"aria-sort":f?t.direction==="asc"?"ascending":"descending":"none",children:g.jsxs(SW,{type:"button",onClick:()=>i(l),children:[u,g.jsx(xW,{$visible:f,children:f&&t.direction==="desc"?"▼":"▲"})]})},l)})})}),g.jsx("tbody",{children:o.map(l=>g.jsxs(UC,{children:[g.jsx(pf,{children:l.instructorName}),g.jsx(pf,{children:l.classCount}),g.jsx(pf,{children:BC(l.medianTimeToWaitlistMs,l.waitlistSampleSize)}),g.jsx(pf,{children:BC(l.medianTimeToFullMs,l.fullSampleSize)})]},l.instructorId))})]})})}const Wn={added:"#4ade80",changed:"#facc15",removed:"#f87171",sent:"#60a5fa",failed:"#f87171",usersReached:"#a78bfa"},TW=()=>{const e=KG(14),t=ZG();if(e.state==="idle"||e.state==="loading")return g.jsx(ms,{children:g.jsxs(_y,{children:[g.jsx(by,{children:"Stats"}),g.jsx(xc,{children:"Loading…"})]})});if(e.state==="failed")return g.jsx(ms,{children:g.jsxs(_y,{children:[g.jsx(by,{children:"Stats"}),g.jsxs(xc,{children:["Failed to load metrics: ",e.error.message??"unknown error"]})]})});const n=e.data,i=n.reduce((l,u)=>{l.sent+=u.notifications.sent,l.failed+=u.notifications.failed,l.usersReached+=u.notifications.usersReached;for(const f of Object.values(u.diffs))l.added+=f.added,l.changed+=f.changed,l.removed+=f.removed;return l},{sent:0,failed:0,usersReached:0,added:0,changed:0,removed:0}),o=[...new Set(n.flatMap(l=>Object.keys(l.diffs)))];return g.jsx(ms,{children:g.jsxs(_y,{children:[g.jsx(by,{children:"Stats"}),g.jsxs(eW,{children:[g.jsxs(ma,{children:[g.jsx(ga,{children:"Notifications sent (14d)"}),g.jsx(ya,{children:i.sent.toLocaleString()})]}),g.jsxs(ma,{children:[g.jsx(ga,{children:"Users reached (14d)"}),g.jsx(ya,{children:i.usersReached.toLocaleString()})]}),g.jsxs(ma,{children:[g.jsx(ga,{children:"Delivery failures (14d)"}),g.jsx(ya,{children:i.failed.toLocaleString()})]}),g.jsxs(ma,{children:[g.jsx(ga,{children:"Classes added (14d)"}),g.jsx(ya,{children:i.added.toLocaleString()})]}),g.jsxs(ma,{children:[g.jsx(ga,{children:"Classes changed (14d)"}),g.jsx(ya,{children:i.changed.toLocaleString()})]}),g.jsxs(ma,{children:[g.jsx(ga,{children:"Classes removed (14d)"}),g.jsx(ya,{children:i.removed.toLocaleString()})]})]}),g.jsxs(Sy,{children:[g.jsx(xy,{children:"Push notifications (14 days)"}),g.jsx($C,{days:n,seriesForDay:l=>[{value:l.notifications.sent,color:Wn.sent,label:"Sent"},{value:l.notifications.failed,color:Wn.failed,label:"Failed"},{value:l.notifications.usersReached,color:Wn.usersReached,label:"Users reached"}],legend:[{color:Wn.sent,label:"Sent"},{color:Wn.failed,label:"Failed"},{color:Wn.usersReached,label:"Users reached"}]})]}),g.jsxs(Sy,{children:[g.jsx(xy,{children:"Class sellout speed by instructor"}),t.state==="idle"||t.state==="loading"?g.jsx(xc,{children:"Loading…"}):t.state==="failed"?g.jsxs(xc,{children:["Failed to load sellout stats:"," ",t.error.message??"unknown error"]}):g.jsx(CW,{stats:t.data})]}),o.map(l=>g.jsxs(Sy,{children:[g.jsxs(xy,{children:["Schedule changes — ",fn[l]?.location??l," (14 days)"]}),g.jsx($C,{days:n,seriesForDay:u=>{const f=u.diffs[l]??{added:0,changed:0,removed:0};return[{value:f.added,color:Wn.added,label:"Added"},{value:f.changed,color:Wn.changed,label:"Changed"},{value:f.removed,color:Wn.removed,label:"Removed"}]},legend:[{color:Wn.added,label:"Added"},{color:Wn.changed,label:"Changed"},{color:Wn.removed,label:"Removed"}]})]},l))]})})},RW=C.div`
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
`,AW=C.div`
  font-size: 48px;
  margin-bottom: 20px;
`,IW=C.h1`
  font-size: 22px;
  font-weight: 700;
  color: ${e=>e.theme.colors.main};
  margin: 0 0 12px;
`,DW=C.p`
  font-size: 15px;
  line-height: 1.6;
  color: ${e=>e.theme.colors.secondary};
  margin: 0 0 28px;
`,kW=C.div`
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
`,FC=C.span`
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: ${e=>e.theme.colors.secondary};
`,qC=C.span`
  font-size: 15px;
  color: ${e=>e.theme.colors.main};
`,NW=C.a`
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
`,OW=C.p`
  margin: 16px 0 0;
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
`;function MW(e,t){if(!e)return null;try{const n=fn[t]?.timezone;return new Date(e).toLocaleString("en-US",{timeZone:n??"UTC",weekday:"short",month:"short",day:"numeric",hour:"numeric",minute:"2-digit",timeZoneName:"short"})}catch{return null}}const LW=()=>{const[e]=k2(),t=e.get("studioId")??"",n=e.get("startsAt")??"",i=e.get("waitingCount"),o=fn[t],l=MW(n,t),u=i!==null?parseInt(i,10):null;return g.jsx(ms,{children:g.jsxs(RW,{children:[g.jsx(AW,{children:"📬"}),g.jsx(IW,{children:"Waitlist count changed"}),g.jsxs(DW,{children:["The number of people on the waitlist just changed",u!==null?` — there ${u===1?"is now 1 person":`are now ${u} people`} ahead`:"",". If you joined this waitlist, check your email — Peloton sends a message when it's your turn, and you'll have a 2-hour window to accept."]}),(l||o)&&g.jsxs(kW,{children:[o&&g.jsxs(g.Fragment,{children:[g.jsx(FC,{children:"Studio"}),g.jsx(qC,{children:o.location})]}),l&&g.jsxs(g.Fragment,{children:[g.jsx(FC,{style:{marginTop:o?8:0},children:"Class time"}),g.jsx(qC,{children:l})]})]}),g.jsx(NW,{href:"mailto:",children:"Open Mail App"}),g.jsx(OW,{children:"Opens your device's default mail app."})]})})},jW=C2(t2(g.jsxs(Yn,{children:[g.jsx(Yn,{path:tt.CLASS_LIST,element:g.jsx(OG,{})}),g.jsxs(Yn,{path:tt.ALERTS,element:g.jsx(UF,{}),children:[g.jsx(Yn,{index:!0,element:g.jsx(gV,{})}),g.jsx(Yn,{path:"edit",element:g.jsx(Z7,{})}),g.jsx(Yn,{path:":alertId/test",element:g.jsx(I9,{})})]}),g.jsx(Yn,{path:tt.WAITLIST_ALERT,element:g.jsx(LW,{})}),g.jsx(Yn,{path:tt.SIGN_IN,element:g.jsx(YG,{})}),g.jsx(Yn,{path:tt.ABOUT,element:g.jsx(GB,{})}),g.jsx(Yn,{path:tt.STATS,element:g.jsx(MG,{children:g.jsx(TW,{})})}),g.jsx(Yn,{path:"*",element:g.jsx(jv,{to:tt.CLASS_LIST,replace:!0})})]}))),PW=(e,t)=>({id:e.uid,displayName:e.displayName||e.email||"",isAdmin:t}),$W=({children:e})=>{const t=ir();return E.useEffect(()=>{if(t(vC()),!di)return t(_C()),()=>{};const n=Vz(di,async i=>{if(t(vC()),i){let o=!1;try{o=(an?await yI(Mn(an,`admins/${i.uid}`)):null)?.val()===!0}catch{}t(wF(PW(i,o)))}else t(_C())});return()=>n()},[t]),g.jsx(g.Fragment,{children:e})},UW={mode:"light",borderRadius:"8px",borderColor:"#d1d1d1",colors:{main:"#494f59",secondary:"#514e60",mainSurface:"#fff",secondarySurface:"#ededed",accent:"#cb3449",error:"#d93025",hoverSurface:"rgba(0, 0, 0, 0.05)",status:{free:{bg:"#e8f5e9",text:"#2e7d32"},waitlist:{bg:"#fff3e0",text:"#e65100"},full:{text:"#9e9e9e"}}},widths:{tablet:1024,mobile:560}},zW={mode:"dark",borderRadius:"8px",borderColor:"#2e2f45",colors:{main:"#e2e4eb",secondary:"#9b98b0",mainSurface:"#1c1d2e",secondarySurface:"#13141f",accent:"#cb3449",error:"#ef5350",hoverSurface:"rgba(255, 255, 255, 0.08)",status:{free:{bg:"rgba(46, 125, 50, 0.15)",text:"#81c784"},waitlist:{bg:"rgba(230, 81, 0, 0.15)",text:"#ffb74d"},full:{text:"#757575"}}},widths:{tablet:1024,mobile:560}},BW=UL`
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
`,Av="theme-mode";function HW(){const e=localStorage.getItem(Av);return e!==null?e==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches}function FW(){const[e,t]=E.useState(HW),n=E.useCallback(()=>{t(i=>{const o=!i;return localStorage.setItem(Av,o?"dark":"light"),o})},[]);return E.useEffect(()=>{const i=window.matchMedia("(prefers-color-scheme: dark)"),o=l=>{localStorage.getItem(Av)===null&&t(l.matches)};return i.addEventListener("change",o),()=>i.removeEventListener("change",o)},[]),{isDark:e,toggle:n}}function qW(){const{isDark:e,toggle:t}=FW();return E.useEffect(()=>{const i=new URLSearchParams(window.location.search).get("classUrl");i&&(window.history.replaceState(null,"",window.location.pathname+window.location.hash),window.location.assign(new URL(i,"https://schedule.studio.onepeloton.com").href))},[]),g.jsx(rD.Provider,{value:{isDark:e,toggle:t},children:g.jsxs(jL,{theme:e?zW:UW,children:[g.jsx(BW,{}),g.jsx(vO,{store:fp,children:g.jsx($W,{children:g.jsx(FU,{children:g.jsx(P2,{router:jW})})})})]})})}nO.createRoot(document.getElementById("root")).render(g.jsx(E.StrictMode,{children:g.jsx(qW,{})}));
//# sourceMappingURL=index-BaM5yW1c.js.map
