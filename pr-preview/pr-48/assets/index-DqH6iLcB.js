(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function LN(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var pg={exports:{}},tc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V1;function PN(){if(V1)return tc;V1=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(i,o,l){var u=null;if(l!==void 0&&(u=""+l),o.key!==void 0&&(u=""+o.key),"key"in o){l={};for(var f in o)f!=="key"&&(l[f]=o[f])}else l=o;return o=l.ref,{$$typeof:e,type:i,key:u,ref:o!==void 0?o:null,props:l}}return tc.Fragment=t,tc.jsx=n,tc.jsxs=n,tc}var G1;function jN(){return G1||(G1=1,pg.exports=PN()),pg.exports}var v=jN(),mg={exports:{}},je={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y1;function UN(){if(Y1)return je;Y1=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function _(N){return N===null||typeof N!="object"?null:(N=y&&N[y]||N["@@iterator"],typeof N=="function"?N:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,I={};function T(N,K,le){this.props=N,this.context=K,this.refs=I,this.updater=le||b}T.prototype.isReactComponent={},T.prototype.setState=function(N,K){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,K,"setState")},T.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function D(){}D.prototype=T.prototype;function M(N,K,le){this.props=N,this.context=K,this.refs=I,this.updater=le||b}var C=M.prototype=new D;C.constructor=M,w(C,T.prototype),C.isPureReactComponent=!0;var A=Array.isArray,k={H:null,A:null,T:null,S:null,V:null},R=Object.prototype.hasOwnProperty;function P(N,K,le,ie,de,me){return le=me.ref,{$$typeof:e,type:N,key:K,ref:le!==void 0?le:null,props:me}}function G(N,K){return P(N.type,K,void 0,void 0,void 0,N.props)}function F(N){return typeof N=="object"&&N!==null&&N.$$typeof===e}function H(N){var K={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(le){return K[le]})}var z=/\/+/g;function V(N,K){return typeof N=="object"&&N!==null&&N.key!=null?H(""+N.key):K.toString(36)}function B(){}function te(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(B,B):(N.status="pending",N.then(function(K){N.status==="pending"&&(N.status="fulfilled",N.value=K)},function(K){N.status==="pending"&&(N.status="rejected",N.reason=K)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function ue(N,K,le,ie,de){var me=typeof N;(me==="undefined"||me==="boolean")&&(N=null);var pe=!1;if(N===null)pe=!0;else switch(me){case"bigint":case"string":case"number":pe=!0;break;case"object":switch(N.$$typeof){case e:case t:pe=!0;break;case g:return pe=N._init,ue(pe(N._payload),K,le,ie,de)}}if(pe)return de=de(N),pe=ie===""?"."+V(N,0):ie,A(de)?(le="",pe!=null&&(le=pe.replace(z,"$&/")+"/"),ue(de,K,le,"",function(De){return De})):de!=null&&(F(de)&&(de=G(de,le+(de.key==null||N&&N.key===de.key?"":(""+de.key).replace(z,"$&/")+"/")+pe)),K.push(de)),1;pe=0;var Ae=ie===""?".":ie+":";if(A(N))for(var be=0;be<N.length;be++)ie=N[be],me=Ae+V(ie,be),pe+=ue(ie,K,le,me,de);else if(be=_(N),typeof be=="function")for(N=be.call(N),be=0;!(ie=N.next()).done;)ie=ie.value,me=Ae+V(ie,be++),pe+=ue(ie,K,le,me,de);else if(me==="object"){if(typeof N.then=="function")return ue(te(N),K,le,ie,de);throw K=String(N),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return pe}function U(N,K,le){if(N==null)return N;var ie=[],de=0;return ue(N,ie,"","",function(me){return K.call(le,me,de++)}),ie}function J(N){if(N._status===-1){var K=N._result;K=K(),K.then(function(le){(N._status===0||N._status===-1)&&(N._status=1,N._result=le)},function(le){(N._status===0||N._status===-1)&&(N._status=2,N._result=le)}),N._status===-1&&(N._status=0,N._result=K)}if(N._status===1)return N._result.default;throw N._result}var ne=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function ae(){}return je.Children={map:U,forEach:function(N,K,le){U(N,function(){K.apply(this,arguments)},le)},count:function(N){var K=0;return U(N,function(){K++}),K},toArray:function(N){return U(N,function(K){return K})||[]},only:function(N){if(!F(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},je.Component=T,je.Fragment=n,je.Profiler=o,je.PureComponent=M,je.StrictMode=i,je.Suspense=h,je.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,je.__COMPILER_RUNTIME={__proto__:null,c:function(N){return k.H.useMemoCache(N)}},je.cache=function(N){return function(){return N.apply(null,arguments)}},je.cloneElement=function(N,K,le){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var ie=w({},N.props),de=N.key,me=void 0;if(K!=null)for(pe in K.ref!==void 0&&(me=void 0),K.key!==void 0&&(de=""+K.key),K)!R.call(K,pe)||pe==="key"||pe==="__self"||pe==="__source"||pe==="ref"&&K.ref===void 0||(ie[pe]=K[pe]);var pe=arguments.length-2;if(pe===1)ie.children=le;else if(1<pe){for(var Ae=Array(pe),be=0;be<pe;be++)Ae[be]=arguments[be+2];ie.children=Ae}return P(N.type,de,void 0,void 0,me,ie)},je.createContext=function(N){return N={$$typeof:u,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:l,_context:N},N},je.createElement=function(N,K,le){var ie,de={},me=null;if(K!=null)for(ie in K.key!==void 0&&(me=""+K.key),K)R.call(K,ie)&&ie!=="key"&&ie!=="__self"&&ie!=="__source"&&(de[ie]=K[ie]);var pe=arguments.length-2;if(pe===1)de.children=le;else if(1<pe){for(var Ae=Array(pe),be=0;be<pe;be++)Ae[be]=arguments[be+2];de.children=Ae}if(N&&N.defaultProps)for(ie in pe=N.defaultProps,pe)de[ie]===void 0&&(de[ie]=pe[ie]);return P(N,me,void 0,void 0,null,de)},je.createRef=function(){return{current:null}},je.forwardRef=function(N){return{$$typeof:f,render:N}},je.isValidElement=F,je.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:J}},je.memo=function(N,K){return{$$typeof:p,type:N,compare:K===void 0?null:K}},je.startTransition=function(N){var K=k.T,le={};k.T=le;try{var ie=N(),de=k.S;de!==null&&de(le,ie),typeof ie=="object"&&ie!==null&&typeof ie.then=="function"&&ie.then(ae,ne)}catch(me){ne(me)}finally{k.T=K}},je.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},je.use=function(N){return k.H.use(N)},je.useActionState=function(N,K,le){return k.H.useActionState(N,K,le)},je.useCallback=function(N,K){return k.H.useCallback(N,K)},je.useContext=function(N){return k.H.useContext(N)},je.useDebugValue=function(){},je.useDeferredValue=function(N,K){return k.H.useDeferredValue(N,K)},je.useEffect=function(N,K,le){var ie=k.H;if(typeof le=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ie.useEffect(N,K)},je.useId=function(){return k.H.useId()},je.useImperativeHandle=function(N,K,le){return k.H.useImperativeHandle(N,K,le)},je.useInsertionEffect=function(N,K){return k.H.useInsertionEffect(N,K)},je.useLayoutEffect=function(N,K){return k.H.useLayoutEffect(N,K)},je.useMemo=function(N,K){return k.H.useMemo(N,K)},je.useOptimistic=function(N,K){return k.H.useOptimistic(N,K)},je.useReducer=function(N,K,le){return k.H.useReducer(N,K,le)},je.useRef=function(N){return k.H.useRef(N)},je.useState=function(N){return k.H.useState(N)},je.useSyncExternalStore=function(N,K,le){return k.H.useSyncExternalStore(N,K,le)},je.useTransition=function(){return k.H.useTransition()},je.version="19.1.1",je}var W1;function Eh(){return W1||(W1=1,mg.exports=UN()),mg.exports}var E=Eh();const cr=LN(E);var gg={exports:{}},nc={},yg={exports:{}},vg={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q1;function $N(){return Q1||(Q1=1,(function(e){function t(U,J){var ne=U.length;U.push(J);e:for(;0<ne;){var ae=ne-1>>>1,N=U[ae];if(0<o(N,J))U[ae]=J,U[ne]=N,ne=ae;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var J=U[0],ne=U.pop();if(ne!==J){U[0]=ne;e:for(var ae=0,N=U.length,K=N>>>1;ae<K;){var le=2*(ae+1)-1,ie=U[le],de=le+1,me=U[de];if(0>o(ie,ne))de<N&&0>o(me,ie)?(U[ae]=me,U[de]=ne,ae=de):(U[ae]=ie,U[le]=ne,ae=le);else if(de<N&&0>o(me,ne))U[ae]=me,U[de]=ne,ae=de;else break e}}return J}function o(U,J){var ne=U.sortIndex-J.sortIndex;return ne!==0?ne:U.id-J.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();e.unstable_now=function(){return u.now()-f}}var h=[],p=[],g=1,y=null,_=3,b=!1,w=!1,I=!1,T=!1,D=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function A(U){for(var J=n(p);J!==null;){if(J.callback===null)i(p);else if(J.startTime<=U)i(p),J.sortIndex=J.expirationTime,t(h,J);else break;J=n(p)}}function k(U){if(I=!1,A(U),!w)if(n(h)!==null)w=!0,R||(R=!0,V());else{var J=n(p);J!==null&&ue(k,J.startTime-U)}}var R=!1,P=-1,G=5,F=-1;function H(){return T?!0:!(e.unstable_now()-F<G)}function z(){if(T=!1,R){var U=e.unstable_now();F=U;var J=!0;try{e:{w=!1,I&&(I=!1,M(P),P=-1),b=!0;var ne=_;try{t:{for(A(U),y=n(h);y!==null&&!(y.expirationTime>U&&H());){var ae=y.callback;if(typeof ae=="function"){y.callback=null,_=y.priorityLevel;var N=ae(y.expirationTime<=U);if(U=e.unstable_now(),typeof N=="function"){y.callback=N,A(U),J=!0;break t}y===n(h)&&i(h),A(U)}else i(h);y=n(h)}if(y!==null)J=!0;else{var K=n(p);K!==null&&ue(k,K.startTime-U),J=!1}}break e}finally{y=null,_=ne,b=!1}J=void 0}}finally{J?V():R=!1}}}var V;if(typeof C=="function")V=function(){C(z)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,te=B.port2;B.port1.onmessage=z,V=function(){te.postMessage(null)}}else V=function(){D(z,0)};function ue(U,J){P=D(function(){U(e.unstable_now())},J)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(U){U.callback=null},e.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<U?Math.floor(1e3/U):5},e.unstable_getCurrentPriorityLevel=function(){return _},e.unstable_next=function(U){switch(_){case 1:case 2:case 3:var J=3;break;default:J=_}var ne=_;_=J;try{return U()}finally{_=ne}},e.unstable_requestPaint=function(){T=!0},e.unstable_runWithPriority=function(U,J){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var ne=_;_=U;try{return J()}finally{_=ne}},e.unstable_scheduleCallback=function(U,J,ne){var ae=e.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?ae+ne:ae):ne=ae,U){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=ne+N,U={id:g++,callback:J,priorityLevel:U,startTime:ne,expirationTime:N,sortIndex:-1},ne>ae?(U.sortIndex=ne,t(p,U),n(h)===null&&U===n(p)&&(I?(M(P),P=-1):I=!0,ue(k,ne-ae))):(U.sortIndex=N,t(h,U),w||b||(w=!0,R||(R=!0,V()))),U},e.unstable_shouldYield=H,e.unstable_wrapCallback=function(U){var J=_;return function(){var ne=_;_=J;try{return U.apply(this,arguments)}finally{_=ne}}}})(vg)),vg}var K1;function zN(){return K1||(K1=1,yg.exports=$N()),yg.exports}var _g={exports:{}},on={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X1;function BN(){if(X1)return on;X1=1;var e=Eh();function t(h){var p="https://react.dev/errors/"+h;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+h+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var i={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function l(h,p,g){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:y==null?null:""+y,children:h,containerInfo:p,implementation:g}}var u=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(h,p){if(h==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return on.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,on.createPortal=function(h,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return l(h,p,null,g)},on.flushSync=function(h){var p=u.T,g=i.p;try{if(u.T=null,i.p=2,h)return h()}finally{u.T=p,i.p=g,i.d.f()}},on.preconnect=function(h,p){typeof h=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,i.d.C(h,p))},on.prefetchDNS=function(h){typeof h=="string"&&i.d.D(h)},on.preinit=function(h,p){if(typeof h=="string"&&p&&typeof p.as=="string"){var g=p.as,y=f(g,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,b=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?i.d.S(h,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:y,integrity:_,fetchPriority:b}):g==="script"&&i.d.X(h,{crossOrigin:y,integrity:_,fetchPriority:b,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},on.preinitModule=function(h,p){if(typeof h=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=f(p.as,p.crossOrigin);i.d.M(h,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&i.d.M(h)},on.preload=function(h,p){if(typeof h=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,y=f(g,p.crossOrigin);i.d.L(h,g,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},on.preloadModule=function(h,p){if(typeof h=="string")if(p){var g=f(p.as,p.crossOrigin);i.d.m(h,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else i.d.m(h)},on.requestFormReset=function(h){i.d.r(h)},on.unstable_batchedUpdates=function(h,p){return h(p)},on.useFormState=function(h,p,g){return u.H.useFormState(h,p,g)},on.useFormStatus=function(){return u.H.useHostTransitionStatus()},on.version="19.1.1",on}var Z1;function UT(){if(Z1)return _g.exports;Z1=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),_g.exports=BN(),_g.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J1;function HN(){if(J1)return nc;J1=1;var e=zN(),t=Eh(),n=UT();function i(r){var s="https://react.dev/errors/"+r;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function l(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function u(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function f(r){if(l(r)!==r)throw Error(i(188))}function h(r){var s=r.alternate;if(!s){if(s=l(r),s===null)throw Error(i(188));return s!==r?null:r}for(var a=r,c=s;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return f(d),r;if(m===c)return f(d),s;m=m.sibling}throw Error(i(188))}if(a.return!==c.return)a=d,c=m;else{for(var S=!1,x=d.child;x;){if(x===a){S=!0,a=d,c=m;break}if(x===c){S=!0,c=d,a=m;break}x=x.sibling}if(!S){for(x=m.child;x;){if(x===a){S=!0,a=m,c=d;break}if(x===c){S=!0,c=m,a=d;break}x=x.sibling}if(!S)throw Error(i(189))}}if(a.alternate!==c)throw Error(i(190))}if(a.tag!==3)throw Error(i(188));return a.stateNode.current===a?r:s}function p(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r;for(r=r.child;r!==null;){if(s=p(r),s!==null)return s;r=r.sibling}return null}var g=Object.assign,y=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),M=Symbol.for("react.consumer"),C=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),R=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),F=Symbol.for("react.activity"),H=Symbol.for("react.memo_cache_sentinel"),z=Symbol.iterator;function V(r){return r===null||typeof r!="object"?null:(r=z&&r[z]||r["@@iterator"],typeof r=="function"?r:null)}var B=Symbol.for("react.client.reference");function te(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===B?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case w:return"Fragment";case T:return"Profiler";case I:return"StrictMode";case k:return"Suspense";case R:return"SuspenseList";case F:return"Activity"}if(typeof r=="object")switch(r.$$typeof){case b:return"Portal";case C:return(r.displayName||"Context")+".Provider";case M:return(r._context.displayName||"Context")+".Consumer";case A:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case P:return s=r.displayName||null,s!==null?s:te(r.type)||"Memo";case G:s=r._payload,r=r._init;try{return te(r(s))}catch{}}return null}var ue=Array.isArray,U=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},ae=[],N=-1;function K(r){return{current:r}}function le(r){0>N||(r.current=ae[N],ae[N]=null,N--)}function ie(r,s){N++,ae[N]=r.current,r.current=s}var de=K(null),me=K(null),pe=K(null),Ae=K(null);function be(r,s){switch(ie(pe,s),ie(me,r),ie(de,null),s.nodeType){case 9:case 11:r=(r=s.documentElement)&&(r=r.namespaceURI)?_1(r):0;break;default:if(r=s.tagName,s=s.namespaceURI)s=_1(s),r=b1(s,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}le(de),ie(de,r)}function De(){le(de),le(me),le(pe)}function $e(r){r.memoizedState!==null&&ie(Ae,r);var s=de.current,a=b1(s,r.type);s!==a&&(ie(me,r),ie(de,a))}function _t(r){me.current===r&&(le(de),le(me)),Ae.current===r&&(le(Ae),Kl._currentValue=ne)}var gt=Object.prototype.hasOwnProperty,Mn=e.unstable_scheduleCallback,xt=e.unstable_cancelCallback,Ln=e.unstable_shouldYield,Pr=e.unstable_requestPaint,Wt=e.unstable_now,sl=e.unstable_getCurrentPriorityLevel,Es=e.unstable_ImmediatePriority,Oo=e.unstable_UserBlockingPriority,No=e.unstable_NormalPriority,jr=e.unstable_LowPriority,Ei=e.unstable_IdlePriority,Iu=e.log,ol=e.unstable_setDisableYieldValue,hn=null,bt=null;function nr(r){if(typeof Iu=="function"&&ol(r),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(hn,r)}catch{}}var Qt=Math.clz32?Math.clz32:Du,up=Math.log,br=Math.LN2;function Du(r){return r>>>=0,r===0?32:31-(up(r)/br|0)|0}var Ts=256,Cs=4194304;function Ur(r){var s=r&42;if(s!==0)return s;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return r}}function Rs(r,s,a){var c=r.pendingLanes;if(c===0)return 0;var d=0,m=r.suspendedLanes,S=r.pingedLanes;r=r.warmLanes;var x=c&134217727;return x!==0?(c=x&~m,c!==0?d=Ur(c):(S&=x,S!==0?d=Ur(S):a||(a=x&~r,a!==0&&(d=Ur(a))))):(x=c&~m,x!==0?d=Ur(x):S!==0?d=Ur(S):a||(a=c&~r,a!==0&&(d=Ur(a)))),d===0?0:s!==0&&s!==d&&(s&m)===0&&(m=d&-d,a=s&-s,m>=a||m===32&&(a&4194048)!==0)?s:d}function Sr(r,s){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&s)===0}function Ou(r,s){switch(r){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ko(){var r=Ts;return Ts<<=1,(Ts&4194048)===0&&(Ts=256),r}function Nu(){var r=Cs;return Cs<<=1,(Cs&62914560)===0&&(Cs=4194304),r}function Mo(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function As(r,s){r.pendingLanes|=s,s!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function ku(r,s,a,c,d,m){var S=r.pendingLanes;r.pendingLanes=a,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=a,r.entangledLanes&=a,r.errorRecoveryDisabledLanes&=a,r.shellSuspendCounter=0;var x=r.entanglements,L=r.expirationTimes,Q=r.hiddenUpdates;for(a=S&~a;0<a;){var re=31-Qt(a),oe=1<<re;x[re]=0,L[re]=-1;var X=Q[re];if(X!==null)for(Q[re]=null,re=0;re<X.length;re++){var Z=X[re];Z!==null&&(Z.lane&=-536870913)}a&=~oe}c!==0&&Is(r,c,0),m!==0&&d===0&&r.tag!==0&&(r.suspendedLanes|=m&~(S&~s))}function Is(r,s,a){r.pendingLanes|=s,r.suspendedLanes&=~s;var c=31-Qt(s);r.entangledLanes|=s,r.entanglements[c]=r.entanglements[c]|1073741824|a&4194090}function Ds(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var c=31-Qt(a),d=1<<c;d&s|r[c]&s&&(r[c]|=s),a&=~d}}function al(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function ll(r){return r&=-r,2<r?8<r?(r&134217727)!==0?32:268435456:8:2}function j(){var r=J.p;return r!==0?r:(r=window.event,r===void 0?32:$1(r.type))}function Y(r,s){var a=J.p;try{return J.p=r,s()}finally{J.p=a}}var ee=Math.random().toString(36).slice(2),ce="__reactFiber$"+ee,fe="__reactProps$"+ee,ye="__reactContainer$"+ee,we="__reactEvents$"+ee,ve="__reactListeners$"+ee,Ee="__reactHandles$"+ee,Ce="__reactResources$"+ee,_e="__reactMarker$"+ee;function Se(r){delete r[ce],delete r[fe],delete r[we],delete r[ve],delete r[Ee]}function ze(r){var s=r[ce];if(s)return s;for(var a=r.parentNode;a;){if(s=a[ye]||a[ce]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=E1(r);r!==null;){if(a=r[ce])return a;r=E1(r)}return s}r=a,a=r.parentNode}return null}function Ze(r){if(r=r[ce]||r[ye]){var s=r.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return r}return null}function yt(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r.stateNode;throw Error(i(33))}function Et(r){var s=r[Ce];return s||(s=r[Ce]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function Le(r){r[_e]=!0}var it=new Set,wr={};function xn(r,s){ln(r,s),ln(r+"Capture",s)}function ln(r,s){for(wr[r]=s,r=0;r<s.length;r++)it.add(s[r])}var Pn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Lo={},Ti={};function $r(r){return gt.call(Ti,r)?!0:gt.call(Lo,r)?!1:Pn.test(r)?Ti[r]=!0:(Lo[r]=!0,!1)}function zr(r,s,a){if($r(s))if(a===null)r.removeAttribute(s);else{switch(typeof a){case"undefined":case"function":case"symbol":r.removeAttribute(s);return;case"boolean":var c=s.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){r.removeAttribute(s);return}}r.setAttribute(s,""+a)}}function Br(r,s,a){if(a===null)r.removeAttribute(s);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(s);return}r.setAttribute(s,""+a)}}function Pe(r,s,a,c){if(c===null)r.removeAttribute(a);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(a);return}r.setAttributeNS(s,a,""+c)}}var Nt,Hr;function pn(r){if(Nt===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);Nt=s&&s[1]||"",Hr=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Nt+r+Hr}var St=!1;function Ci(r,s){if(!r||St)return"";St=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(s){var oe=function(){throw Error()};if(Object.defineProperty(oe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(oe,[])}catch(Z){var X=Z}Reflect.construct(r,[],oe)}else{try{oe.call()}catch(Z){X=Z}r.call(oe.prototype)}}else{try{throw Error()}catch(Z){X=Z}(oe=r())&&typeof oe.catch=="function"&&oe.catch(function(){})}}catch(Z){if(Z&&X&&typeof Z.stack=="string")return[Z.stack,X.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=c.DetermineComponentFrameRoot(),S=m[0],x=m[1];if(S&&x){var L=S.split(`
`),Q=x.split(`
`);for(d=c=0;c<L.length&&!L[c].includes("DetermineComponentFrameRoot");)c++;for(;d<Q.length&&!Q[d].includes("DetermineComponentFrameRoot");)d++;if(c===L.length||d===Q.length)for(c=L.length-1,d=Q.length-1;1<=c&&0<=d&&L[c]!==Q[d];)d--;for(;1<=c&&0<=d;c--,d--)if(L[c]!==Q[d]){if(c!==1||d!==1)do if(c--,d--,0>d||L[c]!==Q[d]){var re=`
`+L[c].replace(" at new "," at ");return r.displayName&&re.includes("<anonymous>")&&(re=re.replace("<anonymous>",r.displayName)),re}while(1<=c&&0<=d);break}}}finally{St=!1,Error.prepareStackTrace=a}return(a=r?r.displayName||r.name:"")?pn(a):""}function Mu(r){switch(r.tag){case 26:case 27:case 5:return pn(r.type);case 16:return pn("Lazy");case 13:return pn("Suspense");case 19:return pn("SuspenseList");case 0:case 15:return Ci(r.type,!1);case 11:return Ci(r.type.render,!1);case 1:return Ci(r.type,!0);case 31:return pn("Activity");default:return""}}function Lu(r){try{var s="";do s+=Mu(r),r=r.return;while(r);return s}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function jn(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function pb(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function DD(r){var s=pb(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),c=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return d.call(this)},set:function(S){c=""+S,m.call(this,S)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(S){c=""+S},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function Pu(r){r._valueTracker||(r._valueTracker=DD(r))}function mb(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return r&&(c=pb(r)?r.checked?"true":"false":r.value),r=c,r!==a?(s.setValue(r),!0):!1}function ju(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}var OD=/[\n"\\]/g;function Un(r){return r.replace(OD,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function dp(r,s,a,c,d,m,S,x){r.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?r.type=S:r.removeAttribute("type"),s!=null?S==="number"?(s===0&&r.value===""||r.value!=s)&&(r.value=""+jn(s)):r.value!==""+jn(s)&&(r.value=""+jn(s)):S!=="submit"&&S!=="reset"||r.removeAttribute("value"),s!=null?fp(r,S,jn(s)):a!=null?fp(r,S,jn(a)):c!=null&&r.removeAttribute("value"),d==null&&m!=null&&(r.defaultChecked=!!m),d!=null&&(r.checked=d&&typeof d!="function"&&typeof d!="symbol"),x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?r.name=""+jn(x):r.removeAttribute("name")}function gb(r,s,a,c,d,m,S,x){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(r.type=m),s!=null||a!=null){if(!(m!=="submit"&&m!=="reset"||s!=null))return;a=a!=null?""+jn(a):"",s=s!=null?""+jn(s):a,x||s===r.value||(r.value=s),r.defaultValue=s}c=c??d,c=typeof c!="function"&&typeof c!="symbol"&&!!c,r.checked=x?r.checked:!!c,r.defaultChecked=!!c,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(r.name=S)}function fp(r,s,a){s==="number"&&ju(r.ownerDocument)===r||r.defaultValue===""+a||(r.defaultValue=""+a)}function Po(r,s,a,c){if(r=r.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<r.length;a++)d=s.hasOwnProperty("$"+r[a].value),r[a].selected!==d&&(r[a].selected=d),d&&c&&(r[a].defaultSelected=!0)}else{for(a=""+jn(a),s=null,d=0;d<r.length;d++){if(r[d].value===a){r[d].selected=!0,c&&(r[d].defaultSelected=!0);return}s!==null||r[d].disabled||(s=r[d])}s!==null&&(s.selected=!0)}}function yb(r,s,a){if(s!=null&&(s=""+jn(s),s!==r.value&&(r.value=s),a==null)){r.defaultValue!==s&&(r.defaultValue=s);return}r.defaultValue=a!=null?""+jn(a):""}function vb(r,s,a,c){if(s==null){if(c!=null){if(a!=null)throw Error(i(92));if(ue(c)){if(1<c.length)throw Error(i(93));c=c[0]}a=c}a==null&&(a=""),s=a}a=jn(s),r.defaultValue=a,c=r.textContent,c===a&&c!==""&&c!==null&&(r.value=c)}function jo(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var ND=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _b(r,s,a){var c=s.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?c?r.setProperty(s,""):s==="float"?r.cssFloat="":r[s]="":c?r.setProperty(s,a):typeof a!="number"||a===0||ND.has(s)?s==="float"?r.cssFloat=a:r[s]=(""+a).trim():r[s]=a+"px"}function bb(r,s,a){if(s!=null&&typeof s!="object")throw Error(i(62));if(r=r.style,a!=null){for(var c in a)!a.hasOwnProperty(c)||s!=null&&s.hasOwnProperty(c)||(c.indexOf("--")===0?r.setProperty(c,""):c==="float"?r.cssFloat="":r[c]="");for(var d in s)c=s[d],s.hasOwnProperty(d)&&a[d]!==c&&_b(r,d,c)}else for(var m in s)s.hasOwnProperty(m)&&_b(r,m,s[m])}function hp(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kD=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),MD=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Uu(r){return MD.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}var pp=null;function mp(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Uo=null,$o=null;function Sb(r){var s=Ze(r);if(s&&(r=s.stateNode)){var a=r[fe]||null;e:switch(r=s.stateNode,s.type){case"input":if(dp(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Un(""+s)+'"][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==r&&c.form===r.form){var d=c[fe]||null;if(!d)throw Error(i(90));dp(c,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(s=0;s<a.length;s++)c=a[s],c.form===r.form&&mb(c)}break e;case"textarea":yb(r,a.value,a.defaultValue);break e;case"select":s=a.value,s!=null&&Po(r,!!a.multiple,s,!1)}}}var gp=!1;function wb(r,s,a){if(gp)return r(s,a);gp=!0;try{var c=r(s);return c}finally{if(gp=!1,(Uo!==null||$o!==null)&&(xd(),Uo&&(s=Uo,r=$o,$o=Uo=null,Sb(s),r)))for(s=0;s<r.length;s++)Sb(r[s])}}function cl(r,s){var a=r.stateNode;if(a===null)return null;var c=a[fe]||null;if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(i(231,s,typeof a));return a}var Fr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yp=!1;if(Fr)try{var ul={};Object.defineProperty(ul,"passive",{get:function(){yp=!0}}),window.addEventListener("test",ul,ul),window.removeEventListener("test",ul,ul)}catch{yp=!1}var Ri=null,vp=null,$u=null;function xb(){if($u)return $u;var r,s=vp,a=s.length,c,d="value"in Ri?Ri.value:Ri.textContent,m=d.length;for(r=0;r<a&&s[r]===d[r];r++);var S=a-r;for(c=1;c<=S&&s[a-c]===d[m-c];c++);return $u=d.slice(r,1<c?1-c:void 0)}function zu(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Bu(){return!0}function Eb(){return!1}function mn(r){function s(a,c,d,m,S){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=S,this.currentTarget=null;for(var x in r)r.hasOwnProperty(x)&&(a=r[x],this[x]=a?a(m):m[x]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Bu:Eb,this.isPropagationStopped=Eb,this}return g(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Bu)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Bu)},persist:function(){},isPersistent:Bu}),s}var Os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hu=mn(Os),dl=g({},Os,{view:0,detail:0}),LD=mn(dl),_p,bp,fl,Fu=g({},dl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wp,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==fl&&(fl&&r.type==="mousemove"?(_p=r.screenX-fl.screenX,bp=r.screenY-fl.screenY):bp=_p=0,fl=r),_p)},movementY:function(r){return"movementY"in r?r.movementY:bp}}),Tb=mn(Fu),PD=g({},Fu,{dataTransfer:0}),jD=mn(PD),UD=g({},dl,{relatedTarget:0}),Sp=mn(UD),$D=g({},Os,{animationName:0,elapsedTime:0,pseudoElement:0}),zD=mn($D),BD=g({},Os,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),HD=mn(BD),FD=g({},Os,{data:0}),Cb=mn(FD),qD={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},VD={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},GD={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function YD(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=GD[r])?!!s[r]:!1}function wp(){return YD}var WD=g({},dl,{key:function(r){if(r.key){var s=qD[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=zu(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?VD[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wp,charCode:function(r){return r.type==="keypress"?zu(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?zu(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),QD=mn(WD),KD=g({},Fu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rb=mn(KD),XD=g({},dl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wp}),ZD=mn(XD),JD=g({},Os,{propertyName:0,elapsedTime:0,pseudoElement:0}),eO=mn(JD),tO=g({},Fu,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),nO=mn(tO),rO=g({},Os,{newState:0,oldState:0}),iO=mn(rO),sO=[9,13,27,32],xp=Fr&&"CompositionEvent"in window,hl=null;Fr&&"documentMode"in document&&(hl=document.documentMode);var oO=Fr&&"TextEvent"in window&&!hl,Ab=Fr&&(!xp||hl&&8<hl&&11>=hl),Ib=" ",Db=!1;function Ob(r,s){switch(r){case"keyup":return sO.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nb(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var zo=!1;function aO(r,s){switch(r){case"compositionend":return Nb(s);case"keypress":return s.which!==32?null:(Db=!0,Ib);case"textInput":return r=s.data,r===Ib&&Db?null:r;default:return null}}function lO(r,s){if(zo)return r==="compositionend"||!xp&&Ob(r,s)?(r=xb(),$u=vp=Ri=null,zo=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Ab&&s.locale!=="ko"?null:s.data;default:return null}}var cO={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kb(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!cO[r.type]:s==="textarea"}function Mb(r,s,a,c){Uo?$o?$o.push(c):$o=[c]:Uo=c,s=Id(s,"onChange"),0<s.length&&(a=new Hu("onChange","change",null,a,c),r.push({event:a,listeners:s}))}var pl=null,ml=null;function uO(r){p1(r,0)}function qu(r){var s=yt(r);if(mb(s))return r}function Lb(r,s){if(r==="change")return s}var Pb=!1;if(Fr){var Ep;if(Fr){var Tp="oninput"in document;if(!Tp){var jb=document.createElement("div");jb.setAttribute("oninput","return;"),Tp=typeof jb.oninput=="function"}Ep=Tp}else Ep=!1;Pb=Ep&&(!document.documentMode||9<document.documentMode)}function Ub(){pl&&(pl.detachEvent("onpropertychange",$b),ml=pl=null)}function $b(r){if(r.propertyName==="value"&&qu(ml)){var s=[];Mb(s,ml,r,mp(r)),wb(uO,s)}}function dO(r,s,a){r==="focusin"?(Ub(),pl=s,ml=a,pl.attachEvent("onpropertychange",$b)):r==="focusout"&&Ub()}function fO(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return qu(ml)}function hO(r,s){if(r==="click")return qu(s)}function pO(r,s){if(r==="input"||r==="change")return qu(s)}function mO(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var En=typeof Object.is=="function"?Object.is:mO;function gl(r,s){if(En(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!gt.call(s,d)||!En(r[d],s[d]))return!1}return!0}function zb(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Bb(r,s){var a=zb(r);r=0;for(var c;a;){if(a.nodeType===3){if(c=r+a.textContent.length,r<=s&&c>=s)return{node:a,offset:s-r};r=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=zb(a)}}function Hb(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?Hb(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Fb(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var s=ju(r.document);s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=ju(r.document)}return s}function Cp(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}var gO=Fr&&"documentMode"in document&&11>=document.documentMode,Bo=null,Rp=null,yl=null,Ap=!1;function qb(r,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ap||Bo==null||Bo!==ju(c)||(c=Bo,"selectionStart"in c&&Cp(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),yl&&gl(yl,c)||(yl=c,c=Id(Rp,"onSelect"),0<c.length&&(s=new Hu("onSelect","select",null,s,a),r.push({event:s,listeners:c}),s.target=Bo)))}function Ns(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var Ho={animationend:Ns("Animation","AnimationEnd"),animationiteration:Ns("Animation","AnimationIteration"),animationstart:Ns("Animation","AnimationStart"),transitionrun:Ns("Transition","TransitionRun"),transitionstart:Ns("Transition","TransitionStart"),transitioncancel:Ns("Transition","TransitionCancel"),transitionend:Ns("Transition","TransitionEnd")},Ip={},Vb={};Fr&&(Vb=document.createElement("div").style,"AnimationEvent"in window||(delete Ho.animationend.animation,delete Ho.animationiteration.animation,delete Ho.animationstart.animation),"TransitionEvent"in window||delete Ho.transitionend.transition);function ks(r){if(Ip[r])return Ip[r];if(!Ho[r])return r;var s=Ho[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in Vb)return Ip[r]=s[a];return r}var Gb=ks("animationend"),Yb=ks("animationiteration"),Wb=ks("animationstart"),yO=ks("transitionrun"),vO=ks("transitionstart"),_O=ks("transitioncancel"),Qb=ks("transitionend"),Kb=new Map,Dp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Dp.push("scrollEnd");function rr(r,s){Kb.set(r,s),xn(s,[r])}var Xb=new WeakMap;function $n(r,s){if(typeof r=="object"&&r!==null){var a=Xb.get(r);return a!==void 0?a:(s={value:r,source:s,stack:Lu(s)},Xb.set(r,s),s)}return{value:r,source:s,stack:Lu(s)}}var zn=[],Fo=0,Op=0;function Vu(){for(var r=Fo,s=Op=Fo=0;s<r;){var a=zn[s];zn[s++]=null;var c=zn[s];zn[s++]=null;var d=zn[s];zn[s++]=null;var m=zn[s];if(zn[s++]=null,c!==null&&d!==null){var S=c.pending;S===null?d.next=d:(d.next=S.next,S.next=d),c.pending=d}m!==0&&Zb(a,d,m)}}function Gu(r,s,a,c){zn[Fo++]=r,zn[Fo++]=s,zn[Fo++]=a,zn[Fo++]=c,Op|=c,r.lanes|=c,r=r.alternate,r!==null&&(r.lanes|=c)}function Np(r,s,a,c){return Gu(r,s,a,c),Yu(r)}function qo(r,s){return Gu(r,null,null,s),Yu(r)}function Zb(r,s,a){r.lanes|=a;var c=r.alternate;c!==null&&(c.lanes|=a);for(var d=!1,m=r.return;m!==null;)m.childLanes|=a,c=m.alternate,c!==null&&(c.childLanes|=a),m.tag===22&&(r=m.stateNode,r===null||r._visibility&1||(d=!0)),r=m,m=m.return;return r.tag===3?(m=r.stateNode,d&&s!==null&&(d=31-Qt(a),r=m.hiddenUpdates,c=r[d],c===null?r[d]=[s]:c.push(s),s.lane=a|536870912),m):null}function Yu(r){if(50<Hl)throw Hl=0,Um=null,Error(i(185));for(var s=r.return;s!==null;)r=s,s=r.return;return r.tag===3?r.stateNode:null}var Vo={};function bO(r,s,a,c){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(r,s,a,c){return new bO(r,s,a,c)}function kp(r){return r=r.prototype,!(!r||!r.isReactComponent)}function qr(r,s){var a=r.alternate;return a===null?(a=Tn(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&65011712,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a.refCleanup=r.refCleanup,a}function Jb(r,s){r.flags&=65011714;var a=r.alternate;return a===null?(r.childLanes=0,r.lanes=s,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=a.childLanes,r.lanes=a.lanes,r.child=a.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=a.memoizedProps,r.memoizedState=a.memoizedState,r.updateQueue=a.updateQueue,r.type=a.type,s=a.dependencies,r.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),r}function Wu(r,s,a,c,d,m){var S=0;if(c=r,typeof r=="function")kp(r)&&(S=1);else if(typeof r=="string")S=wN(r,a,de.current)?26:r==="html"||r==="head"||r==="body"?27:5;else e:switch(r){case F:return r=Tn(31,a,s,d),r.elementType=F,r.lanes=m,r;case w:return Ms(a.children,d,m,s);case I:S=8,d|=24;break;case T:return r=Tn(12,a,s,d|2),r.elementType=T,r.lanes=m,r;case k:return r=Tn(13,a,s,d),r.elementType=k,r.lanes=m,r;case R:return r=Tn(19,a,s,d),r.elementType=R,r.lanes=m,r;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case D:case C:S=10;break e;case M:S=9;break e;case A:S=11;break e;case P:S=14;break e;case G:S=16,c=null;break e}S=29,a=Error(i(130,r===null?"null":typeof r,"")),c=null}return s=Tn(S,a,s,d),s.elementType=r,s.type=c,s.lanes=m,s}function Ms(r,s,a,c){return r=Tn(7,r,c,s),r.lanes=a,r}function Mp(r,s,a){return r=Tn(6,r,null,s),r.lanes=a,r}function Lp(r,s,a){return s=Tn(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}var Go=[],Yo=0,Qu=null,Ku=0,Bn=[],Hn=0,Ls=null,Vr=1,Gr="";function Ps(r,s){Go[Yo++]=Ku,Go[Yo++]=Qu,Qu=r,Ku=s}function e0(r,s,a){Bn[Hn++]=Vr,Bn[Hn++]=Gr,Bn[Hn++]=Ls,Ls=r;var c=Vr;r=Gr;var d=32-Qt(c)-1;c&=~(1<<d),a+=1;var m=32-Qt(s)+d;if(30<m){var S=d-d%5;m=(c&(1<<S)-1).toString(32),c>>=S,d-=S,Vr=1<<32-Qt(s)+d|a<<d|c,Gr=m+r}else Vr=1<<m|a<<d|c,Gr=r}function Pp(r){r.return!==null&&(Ps(r,1),e0(r,1,0))}function jp(r){for(;r===Qu;)Qu=Go[--Yo],Go[Yo]=null,Ku=Go[--Yo],Go[Yo]=null;for(;r===Ls;)Ls=Bn[--Hn],Bn[Hn]=null,Gr=Bn[--Hn],Bn[Hn]=null,Vr=Bn[--Hn],Bn[Hn]=null}var cn=null,Tt=null,Je=!1,js=null,xr=!1,Up=Error(i(519));function Us(r){var s=Error(i(418,""));throw bl($n(s,r)),Up}function t0(r){var s=r.stateNode,a=r.type,c=r.memoizedProps;switch(s[ce]=r,s[fe]=c,a){case"dialog":Ye("cancel",s),Ye("close",s);break;case"iframe":case"object":case"embed":Ye("load",s);break;case"video":case"audio":for(a=0;a<ql.length;a++)Ye(ql[a],s);break;case"source":Ye("error",s);break;case"img":case"image":case"link":Ye("error",s),Ye("load",s);break;case"details":Ye("toggle",s);break;case"input":Ye("invalid",s),gb(s,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),Pu(s);break;case"select":Ye("invalid",s);break;case"textarea":Ye("invalid",s),vb(s,c.value,c.defaultValue,c.children),Pu(s)}a=c.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||s.textContent===""+a||c.suppressHydrationWarning===!0||v1(s.textContent,a)?(c.popover!=null&&(Ye("beforetoggle",s),Ye("toggle",s)),c.onScroll!=null&&Ye("scroll",s),c.onScrollEnd!=null&&Ye("scrollend",s),c.onClick!=null&&(s.onclick=Dd),s=!0):s=!1,s||Us(r)}function n0(r){for(cn=r.return;cn;)switch(cn.tag){case 5:case 13:xr=!1;return;case 27:case 3:xr=!0;return;default:cn=cn.return}}function vl(r){if(r!==cn)return!1;if(!Je)return n0(r),Je=!0,!1;var s=r.tag,a;if((a=s!==3&&s!==27)&&((a=s===5)&&(a=r.type,a=!(a!=="form"&&a!=="button")||eg(r.type,r.memoizedProps)),a=!a),a&&Tt&&Us(r),n0(r),s===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(i(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8)if(a=r.data,a==="/$"){if(s===0){Tt=sr(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++;r=r.nextSibling}Tt=null}}else s===27?(s=Tt,Fi(r.type)?(r=ig,ig=null,Tt=r):Tt=s):Tt=cn?sr(r.stateNode.nextSibling):null;return!0}function _l(){Tt=cn=null,Je=!1}function r0(){var r=js;return r!==null&&(vn===null?vn=r:vn.push.apply(vn,r),js=null),r}function bl(r){js===null?js=[r]:js.push(r)}var $p=K(null),$s=null,Yr=null;function Ai(r,s,a){ie($p,s._currentValue),s._currentValue=a}function Wr(r){r._currentValue=$p.current,le($p)}function zp(r,s,a){for(;r!==null;){var c=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),r===a)break;r=r.return}}function Bp(r,s,a,c){var d=r.child;for(d!==null&&(d.return=r);d!==null;){var m=d.dependencies;if(m!==null){var S=d.child;m=m.firstContext;e:for(;m!==null;){var x=m;m=d;for(var L=0;L<s.length;L++)if(x.context===s[L]){m.lanes|=a,x=m.alternate,x!==null&&(x.lanes|=a),zp(m.return,a,r),c||(S=null);break e}m=x.next}}else if(d.tag===18){if(S=d.return,S===null)throw Error(i(341));S.lanes|=a,m=S.alternate,m!==null&&(m.lanes|=a),zp(S,a,r),S=null}else S=d.child;if(S!==null)S.return=d;else for(S=d;S!==null;){if(S===r){S=null;break}if(d=S.sibling,d!==null){d.return=S.return,S=d;break}S=S.return}d=S}}function Sl(r,s,a,c){r=null;for(var d=s,m=!1;d!==null;){if(!m){if((d.flags&524288)!==0)m=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var S=d.alternate;if(S===null)throw Error(i(387));if(S=S.memoizedProps,S!==null){var x=d.type;En(d.pendingProps.value,S.value)||(r!==null?r.push(x):r=[x])}}else if(d===Ae.current){if(S=d.alternate,S===null)throw Error(i(387));S.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(r!==null?r.push(Kl):r=[Kl])}d=d.return}r!==null&&Bp(s,r,a,c),s.flags|=262144}function Xu(r){for(r=r.firstContext;r!==null;){if(!En(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function zs(r){$s=r,Yr=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function sn(r){return i0($s,r)}function Zu(r,s){return $s===null&&zs(r),i0(r,s)}function i0(r,s){var a=s._currentValue;if(s={context:s,memoizedValue:a,next:null},Yr===null){if(r===null)throw Error(i(308));Yr=s,r.dependencies={lanes:0,firstContext:s},r.flags|=524288}else Yr=Yr.next=s;return a}var SO=typeof AbortController<"u"?AbortController:function(){var r=[],s=this.signal={aborted:!1,addEventListener:function(a,c){r.push(c)}};this.abort=function(){s.aborted=!0,r.forEach(function(a){return a()})}},wO=e.unstable_scheduleCallback,xO=e.unstable_NormalPriority,Pt={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hp(){return{controller:new SO,data:new Map,refCount:0}}function wl(r){r.refCount--,r.refCount===0&&wO(xO,function(){r.controller.abort()})}var xl=null,Fp=0,Wo=0,Qo=null;function EO(r,s){if(xl===null){var a=xl=[];Fp=0,Wo=Vm(),Qo={status:"pending",value:void 0,then:function(c){a.push(c)}}}return Fp++,s.then(s0,s0),s}function s0(){if(--Fp===0&&xl!==null){Qo!==null&&(Qo.status="fulfilled");var r=xl;xl=null,Wo=0,Qo=null;for(var s=0;s<r.length;s++)(0,r[s])()}}function TO(r,s){var a=[],c={status:"pending",value:null,reason:null,then:function(d){a.push(d)}};return r.then(function(){c.status="fulfilled",c.value=s;for(var d=0;d<a.length;d++)(0,a[d])(s)},function(d){for(c.status="rejected",c.reason=d,d=0;d<a.length;d++)(0,a[d])(void 0)}),c}var o0=U.S;U.S=function(r,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&EO(r,s),o0!==null&&o0(r,s)};var Bs=K(null);function qp(){var r=Bs.current;return r!==null?r:ft.pooledCache}function Ju(r,s){s===null?ie(Bs,Bs.current):ie(Bs,s.pool)}function a0(){var r=qp();return r===null?null:{parent:Pt._currentValue,pool:r}}var El=Error(i(460)),l0=Error(i(474)),ed=Error(i(542)),Vp={then:function(){}};function c0(r){return r=r.status,r==="fulfilled"||r==="rejected"}function td(){}function u0(r,s,a){switch(a=r[a],a===void 0?r.push(s):a!==s&&(s.then(td,td),s=a),s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,f0(r),r;default:if(typeof s.status=="string")s.then(td,td);else{if(r=ft,r!==null&&100<r.shellSuspendCounter)throw Error(i(482));r=s,r.status="pending",r.then(function(c){if(s.status==="pending"){var d=s;d.status="fulfilled",d.value=c}},function(c){if(s.status==="pending"){var d=s;d.status="rejected",d.reason=c}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,f0(r),r}throw Tl=s,El}}var Tl=null;function d0(){if(Tl===null)throw Error(i(459));var r=Tl;return Tl=null,r}function f0(r){if(r===El||r===ed)throw Error(i(483))}var Ii=!1;function Gp(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yp(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function Di(r){return{lane:r,tag:0,payload:null,callback:null,next:null}}function Oi(r,s,a){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,(tt&2)!==0){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,s=Yu(r),Zb(r,null,a),s}return Gu(r,c,s,a),Yu(r)}function Cl(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194048)!==0)){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,Ds(r,a)}}function Wp(r,s){var a=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};m===null?d=m=S:m=m.next=S,a=a.next}while(a!==null);m===null?d=m=s:m=m.next=s}else d=m=s;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,callbacks:c.callbacks},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}var Qp=!1;function Rl(){if(Qp){var r=Qo;if(r!==null)throw r}}function Al(r,s,a,c){Qp=!1;var d=r.updateQueue;Ii=!1;var m=d.firstBaseUpdate,S=d.lastBaseUpdate,x=d.shared.pending;if(x!==null){d.shared.pending=null;var L=x,Q=L.next;L.next=null,S===null?m=Q:S.next=Q,S=L;var re=r.alternate;re!==null&&(re=re.updateQueue,x=re.lastBaseUpdate,x!==S&&(x===null?re.firstBaseUpdate=Q:x.next=Q,re.lastBaseUpdate=L))}if(m!==null){var oe=d.baseState;S=0,re=Q=L=null,x=m;do{var X=x.lane&-536870913,Z=X!==x.lane;if(Z?(Qe&X)===X:(c&X)===X){X!==0&&X===Wo&&(Qp=!0),re!==null&&(re=re.next={lane:0,tag:x.tag,payload:x.payload,callback:null,next:null});e:{var ke=r,Re=x;X=s;var at=a;switch(Re.tag){case 1:if(ke=Re.payload,typeof ke=="function"){oe=ke.call(at,oe,X);break e}oe=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=Re.payload,X=typeof ke=="function"?ke.call(at,oe,X):ke,X==null)break e;oe=g({},oe,X);break e;case 2:Ii=!0}}X=x.callback,X!==null&&(r.flags|=64,Z&&(r.flags|=8192),Z=d.callbacks,Z===null?d.callbacks=[X]:Z.push(X))}else Z={lane:X,tag:x.tag,payload:x.payload,callback:x.callback,next:null},re===null?(Q=re=Z,L=oe):re=re.next=Z,S|=X;if(x=x.next,x===null){if(x=d.shared.pending,x===null)break;Z=x,x=Z.next,Z.next=null,d.lastBaseUpdate=Z,d.shared.pending=null}}while(!0);re===null&&(L=oe),d.baseState=L,d.firstBaseUpdate=Q,d.lastBaseUpdate=re,m===null&&(d.shared.lanes=0),$i|=S,r.lanes=S,r.memoizedState=oe}}function h0(r,s){if(typeof r!="function")throw Error(i(191,r));r.call(s)}function p0(r,s){var a=r.callbacks;if(a!==null)for(r.callbacks=null,r=0;r<a.length;r++)h0(a[r],s)}var Ko=K(null),nd=K(0);function m0(r,s){r=ti,ie(nd,r),ie(Ko,s),ti=r|s.baseLanes}function Kp(){ie(nd,ti),ie(Ko,Ko.current)}function Xp(){ti=nd.current,le(Ko),le(nd)}var Ni=0,He=null,st=null,kt=null,rd=!1,Xo=!1,Hs=!1,id=0,Il=0,Zo=null,CO=0;function Dt(){throw Error(i(321))}function Zp(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!En(r[a],s[a]))return!1;return!0}function Jp(r,s,a,c,d,m){return Ni=m,He=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,U.H=r===null||r.memoizedState===null?Z0:J0,Hs=!1,m=a(c,d),Hs=!1,Xo&&(m=y0(s,a,c,d)),g0(r),m}function g0(r){U.H=ud;var s=st!==null&&st.next!==null;if(Ni=0,kt=st=He=null,rd=!1,Il=0,Zo=null,s)throw Error(i(300));r===null||zt||(r=r.dependencies,r!==null&&Xu(r)&&(zt=!0))}function y0(r,s,a,c){He=r;var d=0;do{if(Xo&&(Zo=null),Il=0,Xo=!1,25<=d)throw Error(i(301));if(d+=1,kt=st=null,r.updateQueue!=null){var m=r.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}U.H=kO,m=s(a,c)}while(Xo);return m}function RO(){var r=U.H,s=r.useState()[0];return s=typeof s.then=="function"?Dl(s):s,r=r.useState()[0],(st!==null?st.memoizedState:null)!==r&&(He.flags|=1024),s}function em(){var r=id!==0;return id=0,r}function tm(r,s,a){s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~a}function nm(r){if(rd){for(r=r.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}rd=!1}Ni=0,kt=st=He=null,Xo=!1,Il=id=0,Zo=null}function gn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?He.memoizedState=kt=r:kt=kt.next=r,kt}function Mt(){if(st===null){var r=He.alternate;r=r!==null?r.memoizedState:null}else r=st.next;var s=kt===null?He.memoizedState:kt.next;if(s!==null)kt=s,st=r;else{if(r===null)throw He.alternate===null?Error(i(467)):Error(i(310));st=r,r={memoizedState:st.memoizedState,baseState:st.baseState,baseQueue:st.baseQueue,queue:st.queue,next:null},kt===null?He.memoizedState=kt=r:kt=kt.next=r}return kt}function rm(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Dl(r){var s=Il;return Il+=1,Zo===null&&(Zo=[]),r=u0(Zo,r,s),s=He,(kt===null?s.memoizedState:kt.next)===null&&(s=s.alternate,U.H=s===null||s.memoizedState===null?Z0:J0),r}function sd(r){if(r!==null&&typeof r=="object"){if(typeof r.then=="function")return Dl(r);if(r.$$typeof===C)return sn(r)}throw Error(i(438,String(r)))}function im(r){var s=null,a=He.updateQueue;if(a!==null&&(s=a.memoCache),s==null){var c=He.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(s={data:c.data.map(function(d){return d.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),a===null&&(a=rm(),He.updateQueue=a),a.memoCache=s,a=s.data[s.index],a===void 0)for(a=s.data[s.index]=Array(r),c=0;c<r;c++)a[c]=H;return s.index++,a}function Qr(r,s){return typeof s=="function"?s(r):s}function od(r){var s=Mt();return sm(s,st,r)}function sm(r,s,a){var c=r.queue;if(c===null)throw Error(i(311));c.lastRenderedReducer=a;var d=r.baseQueue,m=c.pending;if(m!==null){if(d!==null){var S=d.next;d.next=m.next,m.next=S}s.baseQueue=d=m,c.pending=null}if(m=r.baseState,d===null)r.memoizedState=m;else{s=d.next;var x=S=null,L=null,Q=s,re=!1;do{var oe=Q.lane&-536870913;if(oe!==Q.lane?(Qe&oe)===oe:(Ni&oe)===oe){var X=Q.revertLane;if(X===0)L!==null&&(L=L.next={lane:0,revertLane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),oe===Wo&&(re=!0);else if((Ni&X)===X){Q=Q.next,X===Wo&&(re=!0);continue}else oe={lane:0,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},L===null?(x=L=oe,S=m):L=L.next=oe,He.lanes|=X,$i|=X;oe=Q.action,Hs&&a(m,oe),m=Q.hasEagerState?Q.eagerState:a(m,oe)}else X={lane:oe,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},L===null?(x=L=X,S=m):L=L.next=X,He.lanes|=oe,$i|=oe;Q=Q.next}while(Q!==null&&Q!==s);if(L===null?S=m:L.next=x,!En(m,r.memoizedState)&&(zt=!0,re&&(a=Qo,a!==null)))throw a;r.memoizedState=m,r.baseState=S,r.baseQueue=L,c.lastRenderedState=m}return d===null&&(c.lanes=0),[r.memoizedState,c.dispatch]}function om(r){var s=Mt(),a=s.queue;if(a===null)throw Error(i(311));a.lastRenderedReducer=r;var c=a.dispatch,d=a.pending,m=s.memoizedState;if(d!==null){a.pending=null;var S=d=d.next;do m=r(m,S.action),S=S.next;while(S!==d);En(m,s.memoizedState)||(zt=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),a.lastRenderedState=m}return[m,c]}function v0(r,s,a){var c=He,d=Mt(),m=Je;if(m){if(a===void 0)throw Error(i(407));a=a()}else a=s();var S=!En((st||d).memoizedState,a);S&&(d.memoizedState=a,zt=!0),d=d.queue;var x=S0.bind(null,c,d,r);if(Ol(2048,8,x,[r]),d.getSnapshot!==s||S||kt!==null&&kt.memoizedState.tag&1){if(c.flags|=2048,Jo(9,ad(),b0.bind(null,c,d,a,s),null),ft===null)throw Error(i(349));m||(Ni&124)!==0||_0(c,s,a)}return a}function _0(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=He.updateQueue,s===null?(s=rm(),He.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function b0(r,s,a,c){s.value=a,s.getSnapshot=c,w0(s)&&x0(r)}function S0(r,s,a){return a(function(){w0(s)&&x0(r)})}function w0(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!En(r,a)}catch{return!0}}function x0(r){var s=qo(r,2);s!==null&&Dn(s,r,2)}function am(r){var s=gn();if(typeof r=="function"){var a=r;if(r=a(),Hs){nr(!0);try{a()}finally{nr(!1)}}}return s.memoizedState=s.baseState=r,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qr,lastRenderedState:r},s}function E0(r,s,a,c){return r.baseState=a,sm(r,st,typeof c=="function"?c:Qr)}function AO(r,s,a,c,d){if(cd(r))throw Error(i(485));if(r=s.action,r!==null){var m={payload:d,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){m.listeners.push(S)}};U.T!==null?a(!0):m.isTransition=!1,c(m),a=s.pending,a===null?(m.next=s.pending=m,T0(s,m)):(m.next=a.next,s.pending=a.next=m)}}function T0(r,s){var a=s.action,c=s.payload,d=r.state;if(s.isTransition){var m=U.T,S={};U.T=S;try{var x=a(d,c),L=U.S;L!==null&&L(S,x),C0(r,s,x)}catch(Q){lm(r,s,Q)}finally{U.T=m}}else try{m=a(d,c),C0(r,s,m)}catch(Q){lm(r,s,Q)}}function C0(r,s,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(c){R0(r,s,c)},function(c){return lm(r,s,c)}):R0(r,s,a)}function R0(r,s,a){s.status="fulfilled",s.value=a,A0(s),r.state=a,s=r.pending,s!==null&&(a=s.next,a===s?r.pending=null:(a=a.next,s.next=a,T0(r,a)))}function lm(r,s,a){var c=r.pending;if(r.pending=null,c!==null){c=c.next;do s.status="rejected",s.reason=a,A0(s),s=s.next;while(s!==c)}r.action=null}function A0(r){r=r.listeners;for(var s=0;s<r.length;s++)(0,r[s])()}function I0(r,s){return s}function D0(r,s){if(Je){var a=ft.formState;if(a!==null){e:{var c=He;if(Je){if(Tt){t:{for(var d=Tt,m=xr;d.nodeType!==8;){if(!m){d=null;break t}if(d=sr(d.nextSibling),d===null){d=null;break t}}m=d.data,d=m==="F!"||m==="F"?d:null}if(d){Tt=sr(d.nextSibling),c=d.data==="F!";break e}}Us(c)}c=!1}c&&(s=a[0])}}return a=gn(),a.memoizedState=a.baseState=s,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:I0,lastRenderedState:s},a.queue=c,a=Q0.bind(null,He,c),c.dispatch=a,c=am(!1),m=hm.bind(null,He,!1,c.queue),c=gn(),d={state:s,dispatch:null,action:r,pending:null},c.queue=d,a=AO.bind(null,He,d,m,a),d.dispatch=a,c.memoizedState=r,[s,a,!1]}function O0(r){var s=Mt();return N0(s,st,r)}function N0(r,s,a){if(s=sm(r,s,I0)[0],r=od(Qr)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var c=Dl(s)}catch(S){throw S===El?ed:S}else c=s;s=Mt();var d=s.queue,m=d.dispatch;return a!==s.memoizedState&&(He.flags|=2048,Jo(9,ad(),IO.bind(null,d,a),null)),[c,m,r]}function IO(r,s){r.action=s}function k0(r){var s=Mt(),a=st;if(a!==null)return N0(s,a,r);Mt(),s=s.memoizedState,a=Mt();var c=a.queue.dispatch;return a.memoizedState=r,[s,c,!1]}function Jo(r,s,a,c){return r={tag:r,create:a,deps:c,inst:s,next:null},s=He.updateQueue,s===null&&(s=rm(),He.updateQueue=s),a=s.lastEffect,a===null?s.lastEffect=r.next=r:(c=a.next,a.next=r,r.next=c,s.lastEffect=r),r}function ad(){return{destroy:void 0,resource:void 0}}function M0(){return Mt().memoizedState}function ld(r,s,a,c){var d=gn();c=c===void 0?null:c,He.flags|=r,d.memoizedState=Jo(1|s,ad(),a,c)}function Ol(r,s,a,c){var d=Mt();c=c===void 0?null:c;var m=d.memoizedState.inst;st!==null&&c!==null&&Zp(c,st.memoizedState.deps)?d.memoizedState=Jo(s,m,a,c):(He.flags|=r,d.memoizedState=Jo(1|s,m,a,c))}function L0(r,s){ld(8390656,8,r,s)}function P0(r,s){Ol(2048,8,r,s)}function j0(r,s){return Ol(4,2,r,s)}function U0(r,s){return Ol(4,4,r,s)}function $0(r,s){if(typeof s=="function"){r=r();var a=s(r);return function(){typeof a=="function"?a():s(null)}}if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function z0(r,s,a){a=a!=null?a.concat([r]):null,Ol(4,4,$0.bind(null,s,r),a)}function cm(){}function B0(r,s){var a=Mt();s=s===void 0?null:s;var c=a.memoizedState;return s!==null&&Zp(s,c[1])?c[0]:(a.memoizedState=[r,s],r)}function H0(r,s){var a=Mt();s=s===void 0?null:s;var c=a.memoizedState;if(s!==null&&Zp(s,c[1]))return c[0];if(c=r(),Hs){nr(!0);try{r()}finally{nr(!1)}}return a.memoizedState=[c,s],c}function um(r,s,a){return a===void 0||(Ni&1073741824)!==0?r.memoizedState=s:(r.memoizedState=a,r=VS(),He.lanes|=r,$i|=r,a)}function F0(r,s,a,c){return En(a,s)?a:Ko.current!==null?(r=um(r,a,c),En(r,s)||(zt=!0),r):(Ni&42)===0?(zt=!0,r.memoizedState=a):(r=VS(),He.lanes|=r,$i|=r,s)}function q0(r,s,a,c,d){var m=J.p;J.p=m!==0&&8>m?m:8;var S=U.T,x={};U.T=x,hm(r,!1,s,a);try{var L=d(),Q=U.S;if(Q!==null&&Q(x,L),L!==null&&typeof L=="object"&&typeof L.then=="function"){var re=TO(L,c);Nl(r,s,re,In(r))}else Nl(r,s,c,In(r))}catch(oe){Nl(r,s,{then:function(){},status:"rejected",reason:oe},In())}finally{J.p=m,U.T=S}}function DO(){}function dm(r,s,a,c){if(r.tag!==5)throw Error(i(476));var d=V0(r).queue;q0(r,d,s,ne,a===null?DO:function(){return G0(r),a(c)})}function V0(r){var s=r.memoizedState;if(s!==null)return s;s={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qr,lastRenderedState:ne},next:null};var a={};return s.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qr,lastRenderedState:a},next:null},r.memoizedState=s,r=r.alternate,r!==null&&(r.memoizedState=s),s}function G0(r){var s=V0(r).next.queue;Nl(r,s,{},In())}function fm(){return sn(Kl)}function Y0(){return Mt().memoizedState}function W0(){return Mt().memoizedState}function OO(r){for(var s=r.return;s!==null;){switch(s.tag){case 24:case 3:var a=In();r=Di(a);var c=Oi(s,r,a);c!==null&&(Dn(c,s,a),Cl(c,s,a)),s={cache:Hp()},r.payload=s;return}s=s.return}}function NO(r,s,a){var c=In();a={lane:c,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},cd(r)?K0(s,a):(a=Np(r,s,a,c),a!==null&&(Dn(a,r,c),X0(a,s,c)))}function Q0(r,s,a){var c=In();Nl(r,s,a,c)}function Nl(r,s,a,c){var d={lane:c,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(cd(r))K0(s,d);else{var m=r.alternate;if(r.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var S=s.lastRenderedState,x=m(S,a);if(d.hasEagerState=!0,d.eagerState=x,En(x,S))return Gu(r,s,d,0),ft===null&&Vu(),!1}catch{}finally{}if(a=Np(r,s,d,c),a!==null)return Dn(a,r,c),X0(a,s,c),!0}return!1}function hm(r,s,a,c){if(c={lane:2,revertLane:Vm(),action:c,hasEagerState:!1,eagerState:null,next:null},cd(r)){if(s)throw Error(i(479))}else s=Np(r,a,c,2),s!==null&&Dn(s,r,2)}function cd(r){var s=r.alternate;return r===He||s!==null&&s===He}function K0(r,s){Xo=rd=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function X0(r,s,a){if((a&4194048)!==0){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,Ds(r,a)}}var ud={readContext:sn,use:sd,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useLayoutEffect:Dt,useInsertionEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useSyncExternalStore:Dt,useId:Dt,useHostTransitionStatus:Dt,useFormState:Dt,useActionState:Dt,useOptimistic:Dt,useMemoCache:Dt,useCacheRefresh:Dt},Z0={readContext:sn,use:sd,useCallback:function(r,s){return gn().memoizedState=[r,s===void 0?null:s],r},useContext:sn,useEffect:L0,useImperativeHandle:function(r,s,a){a=a!=null?a.concat([r]):null,ld(4194308,4,$0.bind(null,s,r),a)},useLayoutEffect:function(r,s){return ld(4194308,4,r,s)},useInsertionEffect:function(r,s){ld(4,2,r,s)},useMemo:function(r,s){var a=gn();s=s===void 0?null:s;var c=r();if(Hs){nr(!0);try{r()}finally{nr(!1)}}return a.memoizedState=[c,s],c},useReducer:function(r,s,a){var c=gn();if(a!==void 0){var d=a(s);if(Hs){nr(!0);try{a(s)}finally{nr(!1)}}}else d=s;return c.memoizedState=c.baseState=d,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:d},c.queue=r,r=r.dispatch=NO.bind(null,He,r),[c.memoizedState,r]},useRef:function(r){var s=gn();return r={current:r},s.memoizedState=r},useState:function(r){r=am(r);var s=r.queue,a=Q0.bind(null,He,s);return s.dispatch=a,[r.memoizedState,a]},useDebugValue:cm,useDeferredValue:function(r,s){var a=gn();return um(a,r,s)},useTransition:function(){var r=am(!1);return r=q0.bind(null,He,r.queue,!0,!1),gn().memoizedState=r,[!1,r]},useSyncExternalStore:function(r,s,a){var c=He,d=gn();if(Je){if(a===void 0)throw Error(i(407));a=a()}else{if(a=s(),ft===null)throw Error(i(349));(Qe&124)!==0||_0(c,s,a)}d.memoizedState=a;var m={value:a,getSnapshot:s};return d.queue=m,L0(S0.bind(null,c,m,r),[r]),c.flags|=2048,Jo(9,ad(),b0.bind(null,c,m,a,s),null),a},useId:function(){var r=gn(),s=ft.identifierPrefix;if(Je){var a=Gr,c=Vr;a=(c&~(1<<32-Qt(c)-1)).toString(32)+a,s="«"+s+"R"+a,a=id++,0<a&&(s+="H"+a.toString(32)),s+="»"}else a=CO++,s="«"+s+"r"+a.toString(32)+"»";return r.memoizedState=s},useHostTransitionStatus:fm,useFormState:D0,useActionState:D0,useOptimistic:function(r){var s=gn();s.memoizedState=s.baseState=r;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=a,s=hm.bind(null,He,!0,a),a.dispatch=s,[r,s]},useMemoCache:im,useCacheRefresh:function(){return gn().memoizedState=OO.bind(null,He)}},J0={readContext:sn,use:sd,useCallback:B0,useContext:sn,useEffect:P0,useImperativeHandle:z0,useInsertionEffect:j0,useLayoutEffect:U0,useMemo:H0,useReducer:od,useRef:M0,useState:function(){return od(Qr)},useDebugValue:cm,useDeferredValue:function(r,s){var a=Mt();return F0(a,st.memoizedState,r,s)},useTransition:function(){var r=od(Qr)[0],s=Mt().memoizedState;return[typeof r=="boolean"?r:Dl(r),s]},useSyncExternalStore:v0,useId:Y0,useHostTransitionStatus:fm,useFormState:O0,useActionState:O0,useOptimistic:function(r,s){var a=Mt();return E0(a,st,r,s)},useMemoCache:im,useCacheRefresh:W0},kO={readContext:sn,use:sd,useCallback:B0,useContext:sn,useEffect:P0,useImperativeHandle:z0,useInsertionEffect:j0,useLayoutEffect:U0,useMemo:H0,useReducer:om,useRef:M0,useState:function(){return om(Qr)},useDebugValue:cm,useDeferredValue:function(r,s){var a=Mt();return st===null?um(a,r,s):F0(a,st.memoizedState,r,s)},useTransition:function(){var r=om(Qr)[0],s=Mt().memoizedState;return[typeof r=="boolean"?r:Dl(r),s]},useSyncExternalStore:v0,useId:Y0,useHostTransitionStatus:fm,useFormState:k0,useActionState:k0,useOptimistic:function(r,s){var a=Mt();return st!==null?E0(a,st,r,s):(a.baseState=r,[r,a.queue.dispatch])},useMemoCache:im,useCacheRefresh:W0},ea=null,kl=0;function dd(r){var s=kl;return kl+=1,ea===null&&(ea=[]),u0(ea,r,s)}function Ml(r,s){s=s.props.ref,r.ref=s!==void 0?s:null}function fd(r,s){throw s.$$typeof===y?Error(i(525)):(r=Object.prototype.toString.call(s),Error(i(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r)))}function eS(r){var s=r._init;return s(r._payload)}function tS(r){function s(q,$){if(r){var W=q.deletions;W===null?(q.deletions=[$],q.flags|=16):W.push($)}}function a(q,$){if(!r)return null;for(;$!==null;)s(q,$),$=$.sibling;return null}function c(q){for(var $=new Map;q!==null;)q.key!==null?$.set(q.key,q):$.set(q.index,q),q=q.sibling;return $}function d(q,$){return q=qr(q,$),q.index=0,q.sibling=null,q}function m(q,$,W){return q.index=W,r?(W=q.alternate,W!==null?(W=W.index,W<$?(q.flags|=67108866,$):W):(q.flags|=67108866,$)):(q.flags|=1048576,$)}function S(q){return r&&q.alternate===null&&(q.flags|=67108866),q}function x(q,$,W,se){return $===null||$.tag!==6?($=Mp(W,q.mode,se),$.return=q,$):($=d($,W),$.return=q,$)}function L(q,$,W,se){var ge=W.type;return ge===w?re(q,$,W.props.children,se,W.key):$!==null&&($.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===G&&eS(ge)===$.type)?($=d($,W.props),Ml($,W),$.return=q,$):($=Wu(W.type,W.key,W.props,null,q.mode,se),Ml($,W),$.return=q,$)}function Q(q,$,W,se){return $===null||$.tag!==4||$.stateNode.containerInfo!==W.containerInfo||$.stateNode.implementation!==W.implementation?($=Lp(W,q.mode,se),$.return=q,$):($=d($,W.children||[]),$.return=q,$)}function re(q,$,W,se,ge){return $===null||$.tag!==7?($=Ms(W,q.mode,se,ge),$.return=q,$):($=d($,W),$.return=q,$)}function oe(q,$,W){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return $=Mp(""+$,q.mode,W),$.return=q,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case _:return W=Wu($.type,$.key,$.props,null,q.mode,W),Ml(W,$),W.return=q,W;case b:return $=Lp($,q.mode,W),$.return=q,$;case G:var se=$._init;return $=se($._payload),oe(q,$,W)}if(ue($)||V($))return $=Ms($,q.mode,W,null),$.return=q,$;if(typeof $.then=="function")return oe(q,dd($),W);if($.$$typeof===C)return oe(q,Zu(q,$),W);fd(q,$)}return null}function X(q,$,W,se){var ge=$!==null?$.key:null;if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return ge!==null?null:x(q,$,""+W,se);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case _:return W.key===ge?L(q,$,W,se):null;case b:return W.key===ge?Q(q,$,W,se):null;case G:return ge=W._init,W=ge(W._payload),X(q,$,W,se)}if(ue(W)||V(W))return ge!==null?null:re(q,$,W,se,null);if(typeof W.then=="function")return X(q,$,dd(W),se);if(W.$$typeof===C)return X(q,$,Zu(q,W),se);fd(q,W)}return null}function Z(q,$,W,se,ge){if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return q=q.get(W)||null,x($,q,""+se,ge);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case _:return q=q.get(se.key===null?W:se.key)||null,L($,q,se,ge);case b:return q=q.get(se.key===null?W:se.key)||null,Q($,q,se,ge);case G:var Fe=se._init;return se=Fe(se._payload),Z(q,$,W,se,ge)}if(ue(se)||V(se))return q=q.get(W)||null,re($,q,se,ge,null);if(typeof se.then=="function")return Z(q,$,W,dd(se),ge);if(se.$$typeof===C)return Z(q,$,W,Zu($,se),ge);fd($,se)}return null}function ke(q,$,W,se){for(var ge=null,Fe=null,xe=$,Ie=$=0,Ht=null;xe!==null&&Ie<W.length;Ie++){xe.index>Ie?(Ht=xe,xe=null):Ht=xe.sibling;var Ke=X(q,xe,W[Ie],se);if(Ke===null){xe===null&&(xe=Ht);break}r&&xe&&Ke.alternate===null&&s(q,xe),$=m(Ke,$,Ie),Fe===null?ge=Ke:Fe.sibling=Ke,Fe=Ke,xe=Ht}if(Ie===W.length)return a(q,xe),Je&&Ps(q,Ie),ge;if(xe===null){for(;Ie<W.length;Ie++)xe=oe(q,W[Ie],se),xe!==null&&($=m(xe,$,Ie),Fe===null?ge=xe:Fe.sibling=xe,Fe=xe);return Je&&Ps(q,Ie),ge}for(xe=c(xe);Ie<W.length;Ie++)Ht=Z(xe,q,Ie,W[Ie],se),Ht!==null&&(r&&Ht.alternate!==null&&xe.delete(Ht.key===null?Ie:Ht.key),$=m(Ht,$,Ie),Fe===null?ge=Ht:Fe.sibling=Ht,Fe=Ht);return r&&xe.forEach(function(Wi){return s(q,Wi)}),Je&&Ps(q,Ie),ge}function Re(q,$,W,se){if(W==null)throw Error(i(151));for(var ge=null,Fe=null,xe=$,Ie=$=0,Ht=null,Ke=W.next();xe!==null&&!Ke.done;Ie++,Ke=W.next()){xe.index>Ie?(Ht=xe,xe=null):Ht=xe.sibling;var Wi=X(q,xe,Ke.value,se);if(Wi===null){xe===null&&(xe=Ht);break}r&&xe&&Wi.alternate===null&&s(q,xe),$=m(Wi,$,Ie),Fe===null?ge=Wi:Fe.sibling=Wi,Fe=Wi,xe=Ht}if(Ke.done)return a(q,xe),Je&&Ps(q,Ie),ge;if(xe===null){for(;!Ke.done;Ie++,Ke=W.next())Ke=oe(q,Ke.value,se),Ke!==null&&($=m(Ke,$,Ie),Fe===null?ge=Ke:Fe.sibling=Ke,Fe=Ke);return Je&&Ps(q,Ie),ge}for(xe=c(xe);!Ke.done;Ie++,Ke=W.next())Ke=Z(xe,q,Ie,Ke.value,se),Ke!==null&&(r&&Ke.alternate!==null&&xe.delete(Ke.key===null?Ie:Ke.key),$=m(Ke,$,Ie),Fe===null?ge=Ke:Fe.sibling=Ke,Fe=Ke);return r&&xe.forEach(function(MN){return s(q,MN)}),Je&&Ps(q,Ie),ge}function at(q,$,W,se){if(typeof W=="object"&&W!==null&&W.type===w&&W.key===null&&(W=W.props.children),typeof W=="object"&&W!==null){switch(W.$$typeof){case _:e:{for(var ge=W.key;$!==null;){if($.key===ge){if(ge=W.type,ge===w){if($.tag===7){a(q,$.sibling),se=d($,W.props.children),se.return=q,q=se;break e}}else if($.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===G&&eS(ge)===$.type){a(q,$.sibling),se=d($,W.props),Ml(se,W),se.return=q,q=se;break e}a(q,$);break}else s(q,$);$=$.sibling}W.type===w?(se=Ms(W.props.children,q.mode,se,W.key),se.return=q,q=se):(se=Wu(W.type,W.key,W.props,null,q.mode,se),Ml(se,W),se.return=q,q=se)}return S(q);case b:e:{for(ge=W.key;$!==null;){if($.key===ge)if($.tag===4&&$.stateNode.containerInfo===W.containerInfo&&$.stateNode.implementation===W.implementation){a(q,$.sibling),se=d($,W.children||[]),se.return=q,q=se;break e}else{a(q,$);break}else s(q,$);$=$.sibling}se=Lp(W,q.mode,se),se.return=q,q=se}return S(q);case G:return ge=W._init,W=ge(W._payload),at(q,$,W,se)}if(ue(W))return ke(q,$,W,se);if(V(W)){if(ge=V(W),typeof ge!="function")throw Error(i(150));return W=ge.call(W),Re(q,$,W,se)}if(typeof W.then=="function")return at(q,$,dd(W),se);if(W.$$typeof===C)return at(q,$,Zu(q,W),se);fd(q,W)}return typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint"?(W=""+W,$!==null&&$.tag===6?(a(q,$.sibling),se=d($,W),se.return=q,q=se):(a(q,$),se=Mp(W,q.mode,se),se.return=q,q=se),S(q)):a(q,$)}return function(q,$,W,se){try{kl=0;var ge=at(q,$,W,se);return ea=null,ge}catch(xe){if(xe===El||xe===ed)throw xe;var Fe=Tn(29,xe,null,q.mode);return Fe.lanes=se,Fe.return=q,Fe}finally{}}}var ta=tS(!0),nS=tS(!1),Fn=K(null),Er=null;function ki(r){var s=r.alternate;ie(jt,jt.current&1),ie(Fn,r),Er===null&&(s===null||Ko.current!==null||s.memoizedState!==null)&&(Er=r)}function rS(r){if(r.tag===22){if(ie(jt,jt.current),ie(Fn,r),Er===null){var s=r.alternate;s!==null&&s.memoizedState!==null&&(Er=r)}}else Mi()}function Mi(){ie(jt,jt.current),ie(Fn,Fn.current)}function Kr(r){le(Fn),Er===r&&(Er=null),le(jt)}var jt=K(0);function hd(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||rg(a)))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}function pm(r,s,a,c){s=r.memoizedState,a=a(c,s),a=a==null?s:g({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var mm={enqueueSetState:function(r,s,a){r=r._reactInternals;var c=In(),d=Di(c);d.payload=s,a!=null&&(d.callback=a),s=Oi(r,d,c),s!==null&&(Dn(s,r,c),Cl(s,r,c))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var c=In(),d=Di(c);d.tag=1,d.payload=s,a!=null&&(d.callback=a),s=Oi(r,d,c),s!==null&&(Dn(s,r,c),Cl(s,r,c))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=In(),c=Di(a);c.tag=2,s!=null&&(c.callback=s),s=Oi(r,c,a),s!==null&&(Dn(s,r,a),Cl(s,r,a))}};function iS(r,s,a,c,d,m,S){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,m,S):s.prototype&&s.prototype.isPureReactComponent?!gl(a,c)||!gl(d,m):!0}function sS(r,s,a,c){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==r&&mm.enqueueReplaceState(s,s.state,null)}function Fs(r,s){var a=s;if("ref"in s){a={};for(var c in s)c!=="ref"&&(a[c]=s[c])}if(r=r.defaultProps){a===s&&(a=g({},a));for(var d in r)a[d]===void 0&&(a[d]=r[d])}return a}var pd=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function oS(r){pd(r)}function aS(r){console.error(r)}function lS(r){pd(r)}function md(r,s){try{var a=r.onUncaughtError;a(s.value,{componentStack:s.stack})}catch(c){setTimeout(function(){throw c})}}function cS(r,s,a){try{var c=r.onCaughtError;c(a.value,{componentStack:a.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function gm(r,s,a){return a=Di(a),a.tag=3,a.payload={element:null},a.callback=function(){md(r,s)},a}function uS(r){return r=Di(r),r.tag=3,r}function dS(r,s,a,c){var d=a.type.getDerivedStateFromError;if(typeof d=="function"){var m=c.value;r.payload=function(){return d(m)},r.callback=function(){cS(s,a,c)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(r.callback=function(){cS(s,a,c),typeof d!="function"&&(zi===null?zi=new Set([this]):zi.add(this));var x=c.stack;this.componentDidCatch(c.value,{componentStack:x!==null?x:""})})}function MO(r,s,a,c,d){if(a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(s=a.alternate,s!==null&&Sl(s,a,d,!0),a=Fn.current,a!==null){switch(a.tag){case 13:return Er===null?zm():a.alternate===null&&Ct===0&&(Ct=3),a.flags&=-257,a.flags|=65536,a.lanes=d,c===Vp?a.flags|=16384:(s=a.updateQueue,s===null?a.updateQueue=new Set([c]):s.add(c),Hm(r,c,d)),!1;case 22:return a.flags|=65536,c===Vp?a.flags|=16384:(s=a.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([c])},a.updateQueue=s):(a=s.retryQueue,a===null?s.retryQueue=new Set([c]):a.add(c)),Hm(r,c,d)),!1}throw Error(i(435,a.tag))}return Hm(r,c,d),zm(),!1}if(Je)return s=Fn.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=d,c!==Up&&(r=Error(i(422),{cause:c}),bl($n(r,a)))):(c!==Up&&(s=Error(i(423),{cause:c}),bl($n(s,a))),r=r.current.alternate,r.flags|=65536,d&=-d,r.lanes|=d,c=$n(c,a),d=gm(r.stateNode,c,d),Wp(r,d),Ct!==4&&(Ct=2)),!1;var m=Error(i(520),{cause:c});if(m=$n(m,a),Bl===null?Bl=[m]:Bl.push(m),Ct!==4&&(Ct=2),s===null)return!0;c=$n(c,a),a=s;do{switch(a.tag){case 3:return a.flags|=65536,r=d&-d,a.lanes|=r,r=gm(a.stateNode,c,r),Wp(a,r),!1;case 1:if(s=a.type,m=a.stateNode,(a.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(zi===null||!zi.has(m))))return a.flags|=65536,d&=-d,a.lanes|=d,d=uS(d),dS(d,r,a,c),Wp(a,d),!1}a=a.return}while(a!==null);return!1}var fS=Error(i(461)),zt=!1;function Kt(r,s,a,c){s.child=r===null?nS(s,null,a,c):ta(s,r.child,a,c)}function hS(r,s,a,c,d){a=a.render;var m=s.ref;if("ref"in c){var S={};for(var x in c)x!=="ref"&&(S[x]=c[x])}else S=c;return zs(s),c=Jp(r,s,a,S,m,d),x=em(),r!==null&&!zt?(tm(r,s,d),Xr(r,s,d)):(Je&&x&&Pp(s),s.flags|=1,Kt(r,s,c,d),s.child)}function pS(r,s,a,c,d){if(r===null){var m=a.type;return typeof m=="function"&&!kp(m)&&m.defaultProps===void 0&&a.compare===null?(s.tag=15,s.type=m,mS(r,s,m,c,d)):(r=Wu(a.type,null,c,s,s.mode,d),r.ref=s.ref,r.return=s,s.child=r)}if(m=r.child,!Em(r,d)){var S=m.memoizedProps;if(a=a.compare,a=a!==null?a:gl,a(S,c)&&r.ref===s.ref)return Xr(r,s,d)}return s.flags|=1,r=qr(m,c),r.ref=s.ref,r.return=s,s.child=r}function mS(r,s,a,c,d){if(r!==null){var m=r.memoizedProps;if(gl(m,c)&&r.ref===s.ref)if(zt=!1,s.pendingProps=c=m,Em(r,d))(r.flags&131072)!==0&&(zt=!0);else return s.lanes=r.lanes,Xr(r,s,d)}return ym(r,s,a,c,d)}function gS(r,s,a){var c=s.pendingProps,d=c.children,m=r!==null?r.memoizedState:null;if(c.mode==="hidden"){if((s.flags&128)!==0){if(c=m!==null?m.baseLanes|a:a,r!==null){for(d=s.child=r.child,m=0;d!==null;)m=m|d.lanes|d.childLanes,d=d.sibling;s.childLanes=m&~c}else s.childLanes=0,s.child=null;return yS(r,s,c,a)}if((a&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},r!==null&&Ju(s,m!==null?m.cachePool:null),m!==null?m0(s,m):Kp(),rS(s);else return s.lanes=s.childLanes=536870912,yS(r,s,m!==null?m.baseLanes|a:a,a)}else m!==null?(Ju(s,m.cachePool),m0(s,m),Mi(),s.memoizedState=null):(r!==null&&Ju(s,null),Kp(),Mi());return Kt(r,s,d,a),s.child}function yS(r,s,a,c){var d=qp();return d=d===null?null:{parent:Pt._currentValue,pool:d},s.memoizedState={baseLanes:a,cachePool:d},r!==null&&Ju(s,null),Kp(),rS(s),r!==null&&Sl(r,s,c,!0),null}function gd(r,s){var a=s.ref;if(a===null)r!==null&&r.ref!==null&&(s.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(i(284));(r===null||r.ref!==a)&&(s.flags|=4194816)}}function ym(r,s,a,c,d){return zs(s),a=Jp(r,s,a,c,void 0,d),c=em(),r!==null&&!zt?(tm(r,s,d),Xr(r,s,d)):(Je&&c&&Pp(s),s.flags|=1,Kt(r,s,a,d),s.child)}function vS(r,s,a,c,d,m){return zs(s),s.updateQueue=null,a=y0(s,c,a,d),g0(r),c=em(),r!==null&&!zt?(tm(r,s,m),Xr(r,s,m)):(Je&&c&&Pp(s),s.flags|=1,Kt(r,s,a,m),s.child)}function _S(r,s,a,c,d){if(zs(s),s.stateNode===null){var m=Vo,S=a.contextType;typeof S=="object"&&S!==null&&(m=sn(S)),m=new a(c,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=mm,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=c,m.state=s.memoizedState,m.refs={},Gp(s),S=a.contextType,m.context=typeof S=="object"&&S!==null?sn(S):Vo,m.state=s.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(pm(s,a,S,c),m.state=s.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(S=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),S!==m.state&&mm.enqueueReplaceState(m,m.state,null),Al(s,c,m,d),Rl(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),c=!0}else if(r===null){m=s.stateNode;var x=s.memoizedProps,L=Fs(a,x);m.props=L;var Q=m.context,re=a.contextType;S=Vo,typeof re=="object"&&re!==null&&(S=sn(re));var oe=a.getDerivedStateFromProps;re=typeof oe=="function"||typeof m.getSnapshotBeforeUpdate=="function",x=s.pendingProps!==x,re||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(x||Q!==S)&&sS(s,m,c,S),Ii=!1;var X=s.memoizedState;m.state=X,Al(s,c,m,d),Rl(),Q=s.memoizedState,x||X!==Q||Ii?(typeof oe=="function"&&(pm(s,a,oe,c),Q=s.memoizedState),(L=Ii||iS(s,a,L,c,X,Q,S))?(re||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=Q),m.props=c,m.state=Q,m.context=S,c=L):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{m=s.stateNode,Yp(r,s),S=s.memoizedProps,re=Fs(a,S),m.props=re,oe=s.pendingProps,X=m.context,Q=a.contextType,L=Vo,typeof Q=="object"&&Q!==null&&(L=sn(Q)),x=a.getDerivedStateFromProps,(Q=typeof x=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S!==oe||X!==L)&&sS(s,m,c,L),Ii=!1,X=s.memoizedState,m.state=X,Al(s,c,m,d),Rl();var Z=s.memoizedState;S!==oe||X!==Z||Ii||r!==null&&r.dependencies!==null&&Xu(r.dependencies)?(typeof x=="function"&&(pm(s,a,x,c),Z=s.memoizedState),(re=Ii||iS(s,a,re,c,X,Z,L)||r!==null&&r.dependencies!==null&&Xu(r.dependencies))?(Q||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(c,Z,L),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(c,Z,L)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||S===r.memoizedProps&&X===r.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&X===r.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=Z),m.props=c,m.state=Z,m.context=L,c=re):(typeof m.componentDidUpdate!="function"||S===r.memoizedProps&&X===r.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&X===r.memoizedState||(s.flags|=1024),c=!1)}return m=c,gd(r,s),c=(s.flags&128)!==0,m||c?(m=s.stateNode,a=c&&typeof a.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,r!==null&&c?(s.child=ta(s,r.child,null,d),s.child=ta(s,null,a,d)):Kt(r,s,a,d),s.memoizedState=m.state,r=s.child):r=Xr(r,s,d),r}function bS(r,s,a,c){return _l(),s.flags|=256,Kt(r,s,a,c),s.child}var vm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _m(r){return{baseLanes:r,cachePool:a0()}}function bm(r,s,a){return r=r!==null?r.childLanes&~a:0,s&&(r|=qn),r}function SS(r,s,a){var c=s.pendingProps,d=!1,m=(s.flags&128)!==0,S;if((S=m)||(S=r!==null&&r.memoizedState===null?!1:(jt.current&2)!==0),S&&(d=!0,s.flags&=-129),S=(s.flags&32)!==0,s.flags&=-33,r===null){if(Je){if(d?ki(s):Mi(),Je){var x=Tt,L;if(L=x){e:{for(L=x,x=xr;L.nodeType!==8;){if(!x){x=null;break e}if(L=sr(L.nextSibling),L===null){x=null;break e}}x=L}x!==null?(s.memoizedState={dehydrated:x,treeContext:Ls!==null?{id:Vr,overflow:Gr}:null,retryLane:536870912,hydrationErrors:null},L=Tn(18,null,null,0),L.stateNode=x,L.return=s,s.child=L,cn=s,Tt=null,L=!0):L=!1}L||Us(s)}if(x=s.memoizedState,x!==null&&(x=x.dehydrated,x!==null))return rg(x)?s.lanes=32:s.lanes=536870912,null;Kr(s)}return x=c.children,c=c.fallback,d?(Mi(),d=s.mode,x=yd({mode:"hidden",children:x},d),c=Ms(c,d,a,null),x.return=s,c.return=s,x.sibling=c,s.child=x,d=s.child,d.memoizedState=_m(a),d.childLanes=bm(r,S,a),s.memoizedState=vm,c):(ki(s),Sm(s,x))}if(L=r.memoizedState,L!==null&&(x=L.dehydrated,x!==null)){if(m)s.flags&256?(ki(s),s.flags&=-257,s=wm(r,s,a)):s.memoizedState!==null?(Mi(),s.child=r.child,s.flags|=128,s=null):(Mi(),d=c.fallback,x=s.mode,c=yd({mode:"visible",children:c.children},x),d=Ms(d,x,a,null),d.flags|=2,c.return=s,d.return=s,c.sibling=d,s.child=c,ta(s,r.child,null,a),c=s.child,c.memoizedState=_m(a),c.childLanes=bm(r,S,a),s.memoizedState=vm,s=d);else if(ki(s),rg(x)){if(S=x.nextSibling&&x.nextSibling.dataset,S)var Q=S.dgst;S=Q,c=Error(i(419)),c.stack="",c.digest=S,bl({value:c,source:null,stack:null}),s=wm(r,s,a)}else if(zt||Sl(r,s,a,!1),S=(a&r.childLanes)!==0,zt||S){if(S=ft,S!==null&&(c=a&-a,c=(c&42)!==0?1:al(c),c=(c&(S.suspendedLanes|a))!==0?0:c,c!==0&&c!==L.retryLane))throw L.retryLane=c,qo(r,c),Dn(S,r,c),fS;x.data==="$?"||zm(),s=wm(r,s,a)}else x.data==="$?"?(s.flags|=192,s.child=r.child,s=null):(r=L.treeContext,Tt=sr(x.nextSibling),cn=s,Je=!0,js=null,xr=!1,r!==null&&(Bn[Hn++]=Vr,Bn[Hn++]=Gr,Bn[Hn++]=Ls,Vr=r.id,Gr=r.overflow,Ls=s),s=Sm(s,c.children),s.flags|=4096);return s}return d?(Mi(),d=c.fallback,x=s.mode,L=r.child,Q=L.sibling,c=qr(L,{mode:"hidden",children:c.children}),c.subtreeFlags=L.subtreeFlags&65011712,Q!==null?d=qr(Q,d):(d=Ms(d,x,a,null),d.flags|=2),d.return=s,c.return=s,c.sibling=d,s.child=c,c=d,d=s.child,x=r.child.memoizedState,x===null?x=_m(a):(L=x.cachePool,L!==null?(Q=Pt._currentValue,L=L.parent!==Q?{parent:Q,pool:Q}:L):L=a0(),x={baseLanes:x.baseLanes|a,cachePool:L}),d.memoizedState=x,d.childLanes=bm(r,S,a),s.memoizedState=vm,c):(ki(s),a=r.child,r=a.sibling,a=qr(a,{mode:"visible",children:c.children}),a.return=s,a.sibling=null,r!==null&&(S=s.deletions,S===null?(s.deletions=[r],s.flags|=16):S.push(r)),s.child=a,s.memoizedState=null,a)}function Sm(r,s){return s=yd({mode:"visible",children:s},r.mode),s.return=r,r.child=s}function yd(r,s){return r=Tn(22,r,null,s),r.lanes=0,r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},r}function wm(r,s,a){return ta(s,r.child,null,a),r=Sm(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function wS(r,s,a){r.lanes|=s;var c=r.alternate;c!==null&&(c.lanes|=s),zp(r.return,s,a)}function xm(r,s,a,c,d){var m=r.memoizedState;m===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=s,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function xS(r,s,a){var c=s.pendingProps,d=c.revealOrder,m=c.tail;if(Kt(r,s,c.children,a),c=jt.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&wS(r,a,s);else if(r.tag===19)wS(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}switch(ie(jt,c),d){case"forwards":for(a=s.child,d=null;a!==null;)r=a.alternate,r!==null&&hd(r)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),xm(s,!1,d,a,m);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(r=d.alternate,r!==null&&hd(r)===null){s.child=d;break}r=d.sibling,d.sibling=a,a=d,d=r}xm(s,!0,a,null,m);break;case"together":xm(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Xr(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),$i|=s.lanes,(a&s.childLanes)===0)if(r!==null){if(Sl(r,s,a,!1),(a&s.childLanes)===0)return null}else return null;if(r!==null&&s.child!==r.child)throw Error(i(153));if(s.child!==null){for(r=s.child,a=qr(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=qr(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function Em(r,s){return(r.lanes&s)!==0?!0:(r=r.dependencies,!!(r!==null&&Xu(r)))}function LO(r,s,a){switch(s.tag){case 3:be(s,s.stateNode.containerInfo),Ai(s,Pt,r.memoizedState.cache),_l();break;case 27:case 5:$e(s);break;case 4:be(s,s.stateNode.containerInfo);break;case 10:Ai(s,s.type,s.memoizedProps.value);break;case 13:var c=s.memoizedState;if(c!==null)return c.dehydrated!==null?(ki(s),s.flags|=128,null):(a&s.child.childLanes)!==0?SS(r,s,a):(ki(s),r=Xr(r,s,a),r!==null?r.sibling:null);ki(s);break;case 19:var d=(r.flags&128)!==0;if(c=(a&s.childLanes)!==0,c||(Sl(r,s,a,!1),c=(a&s.childLanes)!==0),d){if(c)return xS(r,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),ie(jt,jt.current),c)break;return null;case 22:case 23:return s.lanes=0,gS(r,s,a);case 24:Ai(s,Pt,r.memoizedState.cache)}return Xr(r,s,a)}function ES(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps)zt=!0;else{if(!Em(r,a)&&(s.flags&128)===0)return zt=!1,LO(r,s,a);zt=(r.flags&131072)!==0}else zt=!1,Je&&(s.flags&1048576)!==0&&e0(s,Ku,s.index);switch(s.lanes=0,s.tag){case 16:e:{r=s.pendingProps;var c=s.elementType,d=c._init;if(c=d(c._payload),s.type=c,typeof c=="function")kp(c)?(r=Fs(c,r),s.tag=1,s=_S(null,s,c,r,a)):(s.tag=0,s=ym(null,s,c,r,a));else{if(c!=null){if(d=c.$$typeof,d===A){s.tag=11,s=hS(null,s,c,r,a);break e}else if(d===P){s.tag=14,s=pS(null,s,c,r,a);break e}}throw s=te(c)||c,Error(i(306,s,""))}}return s;case 0:return ym(r,s,s.type,s.pendingProps,a);case 1:return c=s.type,d=Fs(c,s.pendingProps),_S(r,s,c,d,a);case 3:e:{if(be(s,s.stateNode.containerInfo),r===null)throw Error(i(387));c=s.pendingProps;var m=s.memoizedState;d=m.element,Yp(r,s),Al(s,c,null,a);var S=s.memoizedState;if(c=S.cache,Ai(s,Pt,c),c!==m.cache&&Bp(s,[Pt],a,!0),Rl(),c=S.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:S.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=bS(r,s,c,a);break e}else if(c!==d){d=$n(Error(i(424)),s),bl(d),s=bS(r,s,c,a);break e}else{switch(r=s.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}for(Tt=sr(r.firstChild),cn=s,Je=!0,js=null,xr=!0,a=nS(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(_l(),c===d){s=Xr(r,s,a);break e}Kt(r,s,c,a)}s=s.child}return s;case 26:return gd(r,s),r===null?(a=A1(s.type,null,s.pendingProps,null))?s.memoizedState=a:Je||(a=s.type,r=s.pendingProps,c=Od(pe.current).createElement(a),c[ce]=s,c[fe]=r,Zt(c,a,r),Le(c),s.stateNode=c):s.memoizedState=A1(s.type,r.memoizedProps,s.pendingProps,r.memoizedState),null;case 27:return $e(s),r===null&&Je&&(c=s.stateNode=T1(s.type,s.pendingProps,pe.current),cn=s,xr=!0,d=Tt,Fi(s.type)?(ig=d,Tt=sr(c.firstChild)):Tt=d),Kt(r,s,s.pendingProps.children,a),gd(r,s),r===null&&(s.flags|=4194304),s.child;case 5:return r===null&&Je&&((d=c=Tt)&&(c=cN(c,s.type,s.pendingProps,xr),c!==null?(s.stateNode=c,cn=s,Tt=sr(c.firstChild),xr=!1,d=!0):d=!1),d||Us(s)),$e(s),d=s.type,m=s.pendingProps,S=r!==null?r.memoizedProps:null,c=m.children,eg(d,m)?c=null:S!==null&&eg(d,S)&&(s.flags|=32),s.memoizedState!==null&&(d=Jp(r,s,RO,null,null,a),Kl._currentValue=d),gd(r,s),Kt(r,s,c,a),s.child;case 6:return r===null&&Je&&((r=a=Tt)&&(a=uN(a,s.pendingProps,xr),a!==null?(s.stateNode=a,cn=s,Tt=null,r=!0):r=!1),r||Us(s)),null;case 13:return SS(r,s,a);case 4:return be(s,s.stateNode.containerInfo),c=s.pendingProps,r===null?s.child=ta(s,null,c,a):Kt(r,s,c,a),s.child;case 11:return hS(r,s,s.type,s.pendingProps,a);case 7:return Kt(r,s,s.pendingProps,a),s.child;case 8:return Kt(r,s,s.pendingProps.children,a),s.child;case 12:return Kt(r,s,s.pendingProps.children,a),s.child;case 10:return c=s.pendingProps,Ai(s,s.type,c.value),Kt(r,s,c.children,a),s.child;case 9:return d=s.type._context,c=s.pendingProps.children,zs(s),d=sn(d),c=c(d),s.flags|=1,Kt(r,s,c,a),s.child;case 14:return pS(r,s,s.type,s.pendingProps,a);case 15:return mS(r,s,s.type,s.pendingProps,a);case 19:return xS(r,s,a);case 31:return c=s.pendingProps,a=s.mode,c={mode:c.mode,children:c.children},r===null?(a=yd(c,a),a.ref=s.ref,s.child=a,a.return=s,s=a):(a=qr(r.child,c),a.ref=s.ref,s.child=a,a.return=s,s=a),s;case 22:return gS(r,s,a);case 24:return zs(s),c=sn(Pt),r===null?(d=qp(),d===null&&(d=ft,m=Hp(),d.pooledCache=m,m.refCount++,m!==null&&(d.pooledCacheLanes|=a),d=m),s.memoizedState={parent:c,cache:d},Gp(s),Ai(s,Pt,d)):((r.lanes&a)!==0&&(Yp(r,s),Al(s,null,null,a),Rl()),d=r.memoizedState,m=s.memoizedState,d.parent!==c?(d={parent:c,cache:c},s.memoizedState=d,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=d),Ai(s,Pt,c)):(c=m.cache,Ai(s,Pt,c),c!==d.cache&&Bp(s,[Pt],a,!0))),Kt(r,s,s.pendingProps.children,a),s.child;case 29:throw s.pendingProps}throw Error(i(156,s.tag))}function Zr(r){r.flags|=4}function TS(r,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)r.flags&=-16777217;else if(r.flags|=16777216,!k1(s)){if(s=Fn.current,s!==null&&((Qe&4194048)===Qe?Er!==null:(Qe&62914560)!==Qe&&(Qe&536870912)===0||s!==Er))throw Tl=Vp,l0;r.flags|=8192}}function vd(r,s){s!==null&&(r.flags|=4),r.flags&16384&&(s=r.tag!==22?Nu():536870912,r.lanes|=s,sa|=s)}function Ll(r,s){if(!Je)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function wt(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,c=0;if(s)for(var d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&65011712,c|=d.flags&65011712,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=c,r.childLanes=a,s}function PO(r,s,a){var c=s.pendingProps;switch(jp(s),s.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(s),null;case 1:return wt(s),null;case 3:return a=s.stateNode,c=null,r!==null&&(c=r.memoizedState.cache),s.memoizedState.cache!==c&&(s.flags|=2048),Wr(Pt),De(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(r===null||r.child===null)&&(vl(s)?Zr(s):r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,r0())),wt(s),null;case 26:return a=s.memoizedState,r===null?(Zr(s),a!==null?(wt(s),TS(s,a)):(wt(s),s.flags&=-16777217)):a?a!==r.memoizedState?(Zr(s),wt(s),TS(s,a)):(wt(s),s.flags&=-16777217):(r.memoizedProps!==c&&Zr(s),wt(s),s.flags&=-16777217),null;case 27:_t(s),a=pe.current;var d=s.type;if(r!==null&&s.stateNode!=null)r.memoizedProps!==c&&Zr(s);else{if(!c){if(s.stateNode===null)throw Error(i(166));return wt(s),null}r=de.current,vl(s)?t0(s):(r=T1(d,c,a),s.stateNode=r,Zr(s))}return wt(s),null;case 5:if(_t(s),a=s.type,r!==null&&s.stateNode!=null)r.memoizedProps!==c&&Zr(s);else{if(!c){if(s.stateNode===null)throw Error(i(166));return wt(s),null}if(r=de.current,vl(s))t0(s);else{switch(d=Od(pe.current),r){case 1:r=d.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:r=d.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":r=d.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":r=d.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":r=d.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof c.is=="string"?d.createElement("select",{is:c.is}):d.createElement("select"),c.multiple?r.multiple=!0:c.size&&(r.size=c.size);break;default:r=typeof c.is=="string"?d.createElement(a,{is:c.is}):d.createElement(a)}}r[ce]=s,r[fe]=c;e:for(d=s.child;d!==null;){if(d.tag===5||d.tag===6)r.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===s)break e;for(;d.sibling===null;){if(d.return===null||d.return===s)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}s.stateNode=r;e:switch(Zt(r,a,c),a){case"button":case"input":case"select":case"textarea":r=!!c.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Zr(s)}}return wt(s),s.flags&=-16777217,null;case 6:if(r&&s.stateNode!=null)r.memoizedProps!==c&&Zr(s);else{if(typeof c!="string"&&s.stateNode===null)throw Error(i(166));if(r=pe.current,vl(s)){if(r=s.stateNode,a=s.memoizedProps,c=null,d=cn,d!==null)switch(d.tag){case 27:case 5:c=d.memoizedProps}r[ce]=s,r=!!(r.nodeValue===a||c!==null&&c.suppressHydrationWarning===!0||v1(r.nodeValue,a)),r||Us(s)}else r=Od(r).createTextNode(c),r[ce]=s,s.stateNode=r}return wt(s),null;case 13:if(c=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(d=vl(s),c!==null&&c.dehydrated!==null){if(r===null){if(!d)throw Error(i(318));if(d=s.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(i(317));d[ce]=s}else _l(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;wt(s),d=!1}else d=r0(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=d),d=!0;if(!d)return s.flags&256?(Kr(s),s):(Kr(s),null)}if(Kr(s),(s.flags&128)!==0)return s.lanes=a,s;if(a=c!==null,r=r!==null&&r.memoizedState!==null,a){c=s.child,d=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(d=c.alternate.memoizedState.cachePool.pool);var m=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(m=c.memoizedState.cachePool.pool),m!==d&&(c.flags|=2048)}return a!==r&&a&&(s.child.flags|=8192),vd(s,s.updateQueue),wt(s),null;case 4:return De(),r===null&&Qm(s.stateNode.containerInfo),wt(s),null;case 10:return Wr(s.type),wt(s),null;case 19:if(le(jt),d=s.memoizedState,d===null)return wt(s),null;if(c=(s.flags&128)!==0,m=d.rendering,m===null)if(c)Ll(d,!1);else{if(Ct!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(m=hd(r),m!==null){for(s.flags|=128,Ll(d,!1),r=m.updateQueue,s.updateQueue=r,vd(s,r),s.subtreeFlags=0,r=a,a=s.child;a!==null;)Jb(a,r),a=a.sibling;return ie(jt,jt.current&1|2),s.child}r=r.sibling}d.tail!==null&&Wt()>Sd&&(s.flags|=128,c=!0,Ll(d,!1),s.lanes=4194304)}else{if(!c)if(r=hd(m),r!==null){if(s.flags|=128,c=!0,r=r.updateQueue,s.updateQueue=r,vd(s,r),Ll(d,!0),d.tail===null&&d.tailMode==="hidden"&&!m.alternate&&!Je)return wt(s),null}else 2*Wt()-d.renderingStartTime>Sd&&a!==536870912&&(s.flags|=128,c=!0,Ll(d,!1),s.lanes=4194304);d.isBackwards?(m.sibling=s.child,s.child=m):(r=d.last,r!==null?r.sibling=m:s.child=m,d.last=m)}return d.tail!==null?(s=d.tail,d.rendering=s,d.tail=s.sibling,d.renderingStartTime=Wt(),s.sibling=null,r=jt.current,ie(jt,c?r&1|2:r&1),s):(wt(s),null);case 22:case 23:return Kr(s),Xp(),c=s.memoizedState!==null,r!==null?r.memoizedState!==null!==c&&(s.flags|=8192):c&&(s.flags|=8192),c?(a&536870912)!==0&&(s.flags&128)===0&&(wt(s),s.subtreeFlags&6&&(s.flags|=8192)):wt(s),a=s.updateQueue,a!==null&&vd(s,a.retryQueue),a=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),c=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==a&&(s.flags|=2048),r!==null&&le(Bs),null;case 24:return a=null,r!==null&&(a=r.memoizedState.cache),s.memoizedState.cache!==a&&(s.flags|=2048),Wr(Pt),wt(s),null;case 25:return null;case 30:return null}throw Error(i(156,s.tag))}function jO(r,s){switch(jp(s),s.tag){case 1:return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return Wr(Pt),De(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 26:case 27:case 5:return _t(s),null;case 13:if(Kr(s),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(i(340));_l()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return le(jt),null;case 4:return De(),null;case 10:return Wr(s.type),null;case 22:case 23:return Kr(s),Xp(),r!==null&&le(Bs),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 24:return Wr(Pt),null;case 25:return null;default:return null}}function CS(r,s){switch(jp(s),s.tag){case 3:Wr(Pt),De();break;case 26:case 27:case 5:_t(s);break;case 4:De();break;case 13:Kr(s);break;case 19:le(jt);break;case 10:Wr(s.type);break;case 22:case 23:Kr(s),Xp(),r!==null&&le(Bs);break;case 24:Wr(Pt)}}function Pl(r,s){try{var a=s.updateQueue,c=a!==null?a.lastEffect:null;if(c!==null){var d=c.next;a=d;do{if((a.tag&r)===r){c=void 0;var m=a.create,S=a.inst;c=m(),S.destroy=c}a=a.next}while(a!==d)}}catch(x){dt(s,s.return,x)}}function Li(r,s,a){try{var c=s.updateQueue,d=c!==null?c.lastEffect:null;if(d!==null){var m=d.next;c=m;do{if((c.tag&r)===r){var S=c.inst,x=S.destroy;if(x!==void 0){S.destroy=void 0,d=s;var L=a,Q=x;try{Q()}catch(re){dt(d,L,re)}}}c=c.next}while(c!==m)}}catch(re){dt(s,s.return,re)}}function RS(r){var s=r.updateQueue;if(s!==null){var a=r.stateNode;try{p0(s,a)}catch(c){dt(r,r.return,c)}}}function AS(r,s,a){a.props=Fs(r.type,r.memoizedProps),a.state=r.memoizedState;try{a.componentWillUnmount()}catch(c){dt(r,s,c)}}function jl(r,s){try{var a=r.ref;if(a!==null){switch(r.tag){case 26:case 27:case 5:var c=r.stateNode;break;case 30:c=r.stateNode;break;default:c=r.stateNode}typeof a=="function"?r.refCleanup=a(c):a.current=c}}catch(d){dt(r,s,d)}}function Tr(r,s){var a=r.ref,c=r.refCleanup;if(a!==null)if(typeof c=="function")try{c()}catch(d){dt(r,s,d)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(d){dt(r,s,d)}else a.current=null}function IS(r){var s=r.type,a=r.memoizedProps,c=r.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":a.autoFocus&&c.focus();break e;case"img":a.src?c.src=a.src:a.srcSet&&(c.srcset=a.srcSet)}}catch(d){dt(r,r.return,d)}}function Tm(r,s,a){try{var c=r.stateNode;iN(c,r.type,a,s),c[fe]=s}catch(d){dt(r,r.return,d)}}function DS(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&Fi(r.type)||r.tag===4}function Cm(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||DS(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&Fi(r.type)||r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Rm(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(r,s):(s=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,s.appendChild(r),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=Dd));else if(c!==4&&(c===27&&Fi(r.type)&&(a=r.stateNode,s=null),r=r.child,r!==null))for(Rm(r,s,a),r=r.sibling;r!==null;)Rm(r,s,a),r=r.sibling}function _d(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(c!==4&&(c===27&&Fi(r.type)&&(a=r.stateNode),r=r.child,r!==null))for(_d(r,s,a),r=r.sibling;r!==null;)_d(r,s,a),r=r.sibling}function OS(r){var s=r.stateNode,a=r.memoizedProps;try{for(var c=r.type,d=s.attributes;d.length;)s.removeAttributeNode(d[0]);Zt(s,c,a),s[ce]=r,s[fe]=a}catch(m){dt(r,r.return,m)}}var Jr=!1,Ot=!1,Am=!1,NS=typeof WeakSet=="function"?WeakSet:Set,Bt=null;function UO(r,s){if(r=r.containerInfo,Zm=jd,r=Fb(r),Cp(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var S=0,x=-1,L=-1,Q=0,re=0,oe=r,X=null;t:for(;;){for(var Z;oe!==a||d!==0&&oe.nodeType!==3||(x=S+d),oe!==m||c!==0&&oe.nodeType!==3||(L=S+c),oe.nodeType===3&&(S+=oe.nodeValue.length),(Z=oe.firstChild)!==null;)X=oe,oe=Z;for(;;){if(oe===r)break t;if(X===a&&++Q===d&&(x=S),X===m&&++re===c&&(L=S),(Z=oe.nextSibling)!==null)break;oe=X,X=oe.parentNode}oe=Z}a=x===-1||L===-1?null:{start:x,end:L}}else a=null}a=a||{start:0,end:0}}else a=null;for(Jm={focusedElem:r,selectionRange:a},jd=!1,Bt=s;Bt!==null;)if(s=Bt,r=s.child,(s.subtreeFlags&1024)!==0&&r!==null)r.return=s,Bt=r;else for(;Bt!==null;){switch(s=Bt,m=s.alternate,r=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if((r&1024)!==0&&m!==null){r=void 0,a=s,d=m.memoizedProps,m=m.memoizedState,c=a.stateNode;try{var ke=Fs(a.type,d,a.elementType===a.type);r=c.getSnapshotBeforeUpdate(ke,m),c.__reactInternalSnapshotBeforeUpdate=r}catch(Re){dt(a,a.return,Re)}}break;case 3:if((r&1024)!==0){if(r=s.stateNode.containerInfo,a=r.nodeType,a===9)ng(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":ng(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((r&1024)!==0)throw Error(i(163))}if(r=s.sibling,r!==null){r.return=s.return,Bt=r;break}Bt=s.return}}function kS(r,s,a){var c=a.flags;switch(a.tag){case 0:case 11:case 15:Pi(r,a),c&4&&Pl(5,a);break;case 1:if(Pi(r,a),c&4)if(r=a.stateNode,s===null)try{r.componentDidMount()}catch(S){dt(a,a.return,S)}else{var d=Fs(a.type,s.memoizedProps);s=s.memoizedState;try{r.componentDidUpdate(d,s,r.__reactInternalSnapshotBeforeUpdate)}catch(S){dt(a,a.return,S)}}c&64&&RS(a),c&512&&jl(a,a.return);break;case 3:if(Pi(r,a),c&64&&(r=a.updateQueue,r!==null)){if(s=null,a.child!==null)switch(a.child.tag){case 27:case 5:s=a.child.stateNode;break;case 1:s=a.child.stateNode}try{p0(r,s)}catch(S){dt(a,a.return,S)}}break;case 27:s===null&&c&4&&OS(a);case 26:case 5:Pi(r,a),s===null&&c&4&&IS(a),c&512&&jl(a,a.return);break;case 12:Pi(r,a);break;case 13:Pi(r,a),c&4&&PS(r,a),c&64&&(r=a.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(a=YO.bind(null,a),dN(r,a))));break;case 22:if(c=a.memoizedState!==null||Jr,!c){s=s!==null&&s.memoizedState!==null||Ot,d=Jr;var m=Ot;Jr=c,(Ot=s)&&!m?ji(r,a,(a.subtreeFlags&8772)!==0):Pi(r,a),Jr=d,Ot=m}break;case 30:break;default:Pi(r,a)}}function MS(r){var s=r.alternate;s!==null&&(r.alternate=null,MS(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&Se(s)),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}var vt=null,yn=!1;function ei(r,s,a){for(a=a.child;a!==null;)LS(r,s,a),a=a.sibling}function LS(r,s,a){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(hn,a)}catch{}switch(a.tag){case 26:Ot||Tr(a,s),ei(r,s,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ot||Tr(a,s);var c=vt,d=yn;Fi(a.type)&&(vt=a.stateNode,yn=!1),ei(r,s,a),Gl(a.stateNode),vt=c,yn=d;break;case 5:Ot||Tr(a,s);case 6:if(c=vt,d=yn,vt=null,ei(r,s,a),vt=c,yn=d,vt!==null)if(yn)try{(vt.nodeType===9?vt.body:vt.nodeName==="HTML"?vt.ownerDocument.body:vt).removeChild(a.stateNode)}catch(m){dt(a,s,m)}else try{vt.removeChild(a.stateNode)}catch(m){dt(a,s,m)}break;case 18:vt!==null&&(yn?(r=vt,x1(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,a.stateNode),ec(r)):x1(vt,a.stateNode));break;case 4:c=vt,d=yn,vt=a.stateNode.containerInfo,yn=!0,ei(r,s,a),vt=c,yn=d;break;case 0:case 11:case 14:case 15:Ot||Li(2,a,s),Ot||Li(4,a,s),ei(r,s,a);break;case 1:Ot||(Tr(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"&&AS(a,s,c)),ei(r,s,a);break;case 21:ei(r,s,a);break;case 22:Ot=(c=Ot)||a.memoizedState!==null,ei(r,s,a),Ot=c;break;default:ei(r,s,a)}}function PS(r,s){if(s.memoizedState===null&&(r=s.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{ec(r)}catch(a){dt(s,s.return,a)}}function $O(r){switch(r.tag){case 13:case 19:var s=r.stateNode;return s===null&&(s=r.stateNode=new NS),s;case 22:return r=r.stateNode,s=r._retryCache,s===null&&(s=r._retryCache=new NS),s;default:throw Error(i(435,r.tag))}}function Im(r,s){var a=$O(r);s.forEach(function(c){var d=WO.bind(null,r,c);a.has(c)||(a.add(c),c.then(d,d))})}function Cn(r,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c],m=r,S=s,x=S;e:for(;x!==null;){switch(x.tag){case 27:if(Fi(x.type)){vt=x.stateNode,yn=!1;break e}break;case 5:vt=x.stateNode,yn=!1;break e;case 3:case 4:vt=x.stateNode.containerInfo,yn=!0;break e}x=x.return}if(vt===null)throw Error(i(160));LS(m,S,d),vt=null,yn=!1,m=d.alternate,m!==null&&(m.return=null),d.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)jS(s,r),s=s.sibling}var ir=null;function jS(r,s){var a=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:Cn(s,r),Rn(r),c&4&&(Li(3,r,r.return),Pl(3,r),Li(5,r,r.return));break;case 1:Cn(s,r),Rn(r),c&512&&(Ot||a===null||Tr(a,a.return)),c&64&&Jr&&(r=r.updateQueue,r!==null&&(c=r.callbacks,c!==null&&(a=r.shared.hiddenCallbacks,r.shared.hiddenCallbacks=a===null?c:a.concat(c))));break;case 26:var d=ir;if(Cn(s,r),Rn(r),c&512&&(Ot||a===null||Tr(a,a.return)),c&4){var m=a!==null?a.memoizedState:null;if(c=r.memoizedState,a===null)if(c===null)if(r.stateNode===null){e:{c=r.type,a=r.memoizedProps,d=d.ownerDocument||d;t:switch(c){case"title":m=d.getElementsByTagName("title")[0],(!m||m[_e]||m[ce]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=d.createElement(c),d.head.insertBefore(m,d.querySelector("head > title"))),Zt(m,c,a),m[ce]=r,Le(m),c=m;break e;case"link":var S=O1("link","href",d).get(c+(a.href||""));if(S){for(var x=0;x<S.length;x++)if(m=S[x],m.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&m.getAttribute("rel")===(a.rel==null?null:a.rel)&&m.getAttribute("title")===(a.title==null?null:a.title)&&m.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(x,1);break t}}m=d.createElement(c),Zt(m,c,a),d.head.appendChild(m);break;case"meta":if(S=O1("meta","content",d).get(c+(a.content||""))){for(x=0;x<S.length;x++)if(m=S[x],m.getAttribute("content")===(a.content==null?null:""+a.content)&&m.getAttribute("name")===(a.name==null?null:a.name)&&m.getAttribute("property")===(a.property==null?null:a.property)&&m.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&m.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(x,1);break t}}m=d.createElement(c),Zt(m,c,a),d.head.appendChild(m);break;default:throw Error(i(468,c))}m[ce]=r,Le(m),c=m}r.stateNode=c}else N1(d,r.type,r.stateNode);else r.stateNode=D1(d,c,r.memoizedProps);else m!==c?(m===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):m.count--,c===null?N1(d,r.type,r.stateNode):D1(d,c,r.memoizedProps)):c===null&&r.stateNode!==null&&Tm(r,r.memoizedProps,a.memoizedProps)}break;case 27:Cn(s,r),Rn(r),c&512&&(Ot||a===null||Tr(a,a.return)),a!==null&&c&4&&Tm(r,r.memoizedProps,a.memoizedProps);break;case 5:if(Cn(s,r),Rn(r),c&512&&(Ot||a===null||Tr(a,a.return)),r.flags&32){d=r.stateNode;try{jo(d,"")}catch(Z){dt(r,r.return,Z)}}c&4&&r.stateNode!=null&&(d=r.memoizedProps,Tm(r,d,a!==null?a.memoizedProps:d)),c&1024&&(Am=!0);break;case 6:if(Cn(s,r),Rn(r),c&4){if(r.stateNode===null)throw Error(i(162));c=r.memoizedProps,a=r.stateNode;try{a.nodeValue=c}catch(Z){dt(r,r.return,Z)}}break;case 3:if(Md=null,d=ir,ir=Nd(s.containerInfo),Cn(s,r),ir=d,Rn(r),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ec(s.containerInfo)}catch(Z){dt(r,r.return,Z)}Am&&(Am=!1,US(r));break;case 4:c=ir,ir=Nd(r.stateNode.containerInfo),Cn(s,r),Rn(r),ir=c;break;case 12:Cn(s,r),Rn(r);break;case 13:Cn(s,r),Rn(r),r.child.flags&8192&&r.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Lm=Wt()),c&4&&(c=r.updateQueue,c!==null&&(r.updateQueue=null,Im(r,c)));break;case 22:d=r.memoizedState!==null;var L=a!==null&&a.memoizedState!==null,Q=Jr,re=Ot;if(Jr=Q||d,Ot=re||L,Cn(s,r),Ot=re,Jr=Q,Rn(r),c&8192)e:for(s=r.stateNode,s._visibility=d?s._visibility&-2:s._visibility|1,d&&(a===null||L||Jr||Ot||qs(r)),a=null,s=r;;){if(s.tag===5||s.tag===26){if(a===null){L=a=s;try{if(m=L.stateNode,d)S=m.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{x=L.stateNode;var oe=L.memoizedProps.style,X=oe!=null&&oe.hasOwnProperty("display")?oe.display:null;x.style.display=X==null||typeof X=="boolean"?"":(""+X).trim()}}catch(Z){dt(L,L.return,Z)}}}else if(s.tag===6){if(a===null){L=s;try{L.stateNode.nodeValue=d?"":L.memoizedProps}catch(Z){dt(L,L.return,Z)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===r)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break e;for(;s.sibling===null;){if(s.return===null||s.return===r)break e;a===s&&(a=null),s=s.return}a===s&&(a=null),s.sibling.return=s.return,s=s.sibling}c&4&&(c=r.updateQueue,c!==null&&(a=c.retryQueue,a!==null&&(c.retryQueue=null,Im(r,a))));break;case 19:Cn(s,r),Rn(r),c&4&&(c=r.updateQueue,c!==null&&(r.updateQueue=null,Im(r,c)));break;case 30:break;case 21:break;default:Cn(s,r),Rn(r)}}function Rn(r){var s=r.flags;if(s&2){try{for(var a,c=r.return;c!==null;){if(DS(c)){a=c;break}c=c.return}if(a==null)throw Error(i(160));switch(a.tag){case 27:var d=a.stateNode,m=Cm(r);_d(r,m,d);break;case 5:var S=a.stateNode;a.flags&32&&(jo(S,""),a.flags&=-33);var x=Cm(r);_d(r,x,S);break;case 3:case 4:var L=a.stateNode.containerInfo,Q=Cm(r);Rm(r,Q,L);break;default:throw Error(i(161))}}catch(re){dt(r,r.return,re)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function US(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var s=r;US(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),r=r.sibling}}function Pi(r,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)kS(r,s.alternate,s),s=s.sibling}function qs(r){for(r=r.child;r!==null;){var s=r;switch(s.tag){case 0:case 11:case 14:case 15:Li(4,s,s.return),qs(s);break;case 1:Tr(s,s.return);var a=s.stateNode;typeof a.componentWillUnmount=="function"&&AS(s,s.return,a),qs(s);break;case 27:Gl(s.stateNode);case 26:case 5:Tr(s,s.return),qs(s);break;case 22:s.memoizedState===null&&qs(s);break;case 30:qs(s);break;default:qs(s)}r=r.sibling}}function ji(r,s,a){for(a=a&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var c=s.alternate,d=r,m=s,S=m.flags;switch(m.tag){case 0:case 11:case 15:ji(d,m,a),Pl(4,m);break;case 1:if(ji(d,m,a),c=m,d=c.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(Q){dt(c,c.return,Q)}if(c=m,d=c.updateQueue,d!==null){var x=c.stateNode;try{var L=d.shared.hiddenCallbacks;if(L!==null)for(d.shared.hiddenCallbacks=null,d=0;d<L.length;d++)h0(L[d],x)}catch(Q){dt(c,c.return,Q)}}a&&S&64&&RS(m),jl(m,m.return);break;case 27:OS(m);case 26:case 5:ji(d,m,a),a&&c===null&&S&4&&IS(m),jl(m,m.return);break;case 12:ji(d,m,a);break;case 13:ji(d,m,a),a&&S&4&&PS(d,m);break;case 22:m.memoizedState===null&&ji(d,m,a),jl(m,m.return);break;case 30:break;default:ji(d,m,a)}s=s.sibling}}function Dm(r,s){var a=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==a&&(r!=null&&r.refCount++,a!=null&&wl(a))}function Om(r,s){r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&wl(r))}function Cr(r,s,a,c){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)$S(r,s,a,c),s=s.sibling}function $S(r,s,a,c){var d=s.flags;switch(s.tag){case 0:case 11:case 15:Cr(r,s,a,c),d&2048&&Pl(9,s);break;case 1:Cr(r,s,a,c);break;case 3:Cr(r,s,a,c),d&2048&&(r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&wl(r)));break;case 12:if(d&2048){Cr(r,s,a,c),r=s.stateNode;try{var m=s.memoizedProps,S=m.id,x=m.onPostCommit;typeof x=="function"&&x(S,s.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(L){dt(s,s.return,L)}}else Cr(r,s,a,c);break;case 13:Cr(r,s,a,c);break;case 23:break;case 22:m=s.stateNode,S=s.alternate,s.memoizedState!==null?m._visibility&2?Cr(r,s,a,c):Ul(r,s):m._visibility&2?Cr(r,s,a,c):(m._visibility|=2,na(r,s,a,c,(s.subtreeFlags&10256)!==0)),d&2048&&Dm(S,s);break;case 24:Cr(r,s,a,c),d&2048&&Om(s.alternate,s);break;default:Cr(r,s,a,c)}}function na(r,s,a,c,d){for(d=d&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var m=r,S=s,x=a,L=c,Q=S.flags;switch(S.tag){case 0:case 11:case 15:na(m,S,x,L,d),Pl(8,S);break;case 23:break;case 22:var re=S.stateNode;S.memoizedState!==null?re._visibility&2?na(m,S,x,L,d):Ul(m,S):(re._visibility|=2,na(m,S,x,L,d)),d&&Q&2048&&Dm(S.alternate,S);break;case 24:na(m,S,x,L,d),d&&Q&2048&&Om(S.alternate,S);break;default:na(m,S,x,L,d)}s=s.sibling}}function Ul(r,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var a=r,c=s,d=c.flags;switch(c.tag){case 22:Ul(a,c),d&2048&&Dm(c.alternate,c);break;case 24:Ul(a,c),d&2048&&Om(c.alternate,c);break;default:Ul(a,c)}s=s.sibling}}var $l=8192;function ra(r){if(r.subtreeFlags&$l)for(r=r.child;r!==null;)zS(r),r=r.sibling}function zS(r){switch(r.tag){case 26:ra(r),r.flags&$l&&r.memoizedState!==null&&EN(ir,r.memoizedState,r.memoizedProps);break;case 5:ra(r);break;case 3:case 4:var s=ir;ir=Nd(r.stateNode.containerInfo),ra(r),ir=s;break;case 22:r.memoizedState===null&&(s=r.alternate,s!==null&&s.memoizedState!==null?(s=$l,$l=16777216,ra(r),$l=s):ra(r));break;default:ra(r)}}function BS(r){var s=r.alternate;if(s!==null&&(r=s.child,r!==null)){s.child=null;do s=r.sibling,r.sibling=null,r=s;while(r!==null)}}function zl(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var a=0;a<s.length;a++){var c=s[a];Bt=c,FS(c,r)}BS(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)HS(r),r=r.sibling}function HS(r){switch(r.tag){case 0:case 11:case 15:zl(r),r.flags&2048&&Li(9,r,r.return);break;case 3:zl(r);break;case 12:zl(r);break;case 22:var s=r.stateNode;r.memoizedState!==null&&s._visibility&2&&(r.return===null||r.return.tag!==13)?(s._visibility&=-3,bd(r)):zl(r);break;default:zl(r)}}function bd(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var a=0;a<s.length;a++){var c=s[a];Bt=c,FS(c,r)}BS(r)}for(r=r.child;r!==null;){switch(s=r,s.tag){case 0:case 11:case 15:Li(8,s,s.return),bd(s);break;case 22:a=s.stateNode,a._visibility&2&&(a._visibility&=-3,bd(s));break;default:bd(s)}r=r.sibling}}function FS(r,s){for(;Bt!==null;){var a=Bt;switch(a.tag){case 0:case 11:case 15:Li(8,a,s);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var c=a.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:wl(a.memoizedState.cache)}if(c=a.child,c!==null)c.return=a,Bt=c;else e:for(a=r;Bt!==null;){c=Bt;var d=c.sibling,m=c.return;if(MS(c),c===a){Bt=null;break e}if(d!==null){d.return=m,Bt=d;break e}Bt=m}}}var zO={getCacheForType:function(r){var s=sn(Pt),a=s.data.get(r);return a===void 0&&(a=r(),s.data.set(r,a)),a}},BO=typeof WeakMap=="function"?WeakMap:Map,tt=0,ft=null,Ge=null,Qe=0,nt=0,An=null,Ui=!1,ia=!1,Nm=!1,ti=0,Ct=0,$i=0,Vs=0,km=0,qn=0,sa=0,Bl=null,vn=null,Mm=!1,Lm=0,Sd=1/0,wd=null,zi=null,Xt=0,Bi=null,oa=null,aa=0,Pm=0,jm=null,qS=null,Hl=0,Um=null;function In(){if((tt&2)!==0&&Qe!==0)return Qe&-Qe;if(U.T!==null){var r=Wo;return r!==0?r:Vm()}return j()}function VS(){qn===0&&(qn=(Qe&536870912)===0||Je?ko():536870912);var r=Fn.current;return r!==null&&(r.flags|=32),qn}function Dn(r,s,a){(r===ft&&(nt===2||nt===9)||r.cancelPendingCommit!==null)&&(la(r,0),Hi(r,Qe,qn,!1)),As(r,a),((tt&2)===0||r!==ft)&&(r===ft&&((tt&2)===0&&(Vs|=a),Ct===4&&Hi(r,Qe,qn,!1)),Rr(r))}function GS(r,s,a){if((tt&6)!==0)throw Error(i(327));var c=!a&&(s&124)===0&&(s&r.expiredLanes)===0||Sr(r,s),d=c?qO(r,s):Bm(r,s,!0),m=c;do{if(d===0){ia&&!c&&Hi(r,s,0,!1);break}else{if(a=r.current.alternate,m&&!HO(a)){d=Bm(r,s,!1),m=!1;continue}if(d===2){if(m=s,r.errorRecoveryDisabledLanes&m)var S=0;else S=r.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){s=S;e:{var x=r;d=Bl;var L=x.current.memoizedState.isDehydrated;if(L&&(la(x,S).flags|=256),S=Bm(x,S,!1),S!==2){if(Nm&&!L){x.errorRecoveryDisabledLanes|=m,Vs|=m,d=4;break e}m=vn,vn=d,m!==null&&(vn===null?vn=m:vn.push.apply(vn,m))}d=S}if(m=!1,d!==2)continue}}if(d===1){la(r,0),Hi(r,s,0,!0);break}e:{switch(c=r,m=d,m){case 0:case 1:throw Error(i(345));case 4:if((s&4194048)!==s)break;case 6:Hi(c,s,qn,!Ui);break e;case 2:vn=null;break;case 3:case 5:break;default:throw Error(i(329))}if((s&62914560)===s&&(d=Lm+300-Wt(),10<d)){if(Hi(c,s,qn,!Ui),Rs(c,0,!0)!==0)break e;c.timeoutHandle=S1(YS.bind(null,c,a,vn,wd,Mm,s,qn,Vs,sa,Ui,m,2,-0,0),d);break e}YS(c,a,vn,wd,Mm,s,qn,Vs,sa,Ui,m,0,-0,0)}}break}while(!0);Rr(r)}function YS(r,s,a,c,d,m,S,x,L,Q,re,oe,X,Z){if(r.timeoutHandle=-1,oe=s.subtreeFlags,(oe&8192||(oe&16785408)===16785408)&&(Ql={stylesheets:null,count:0,unsuspend:xN},zS(s),oe=TN(),oe!==null)){r.cancelPendingCommit=oe(e1.bind(null,r,s,m,a,c,d,S,x,L,re,1,X,Z)),Hi(r,m,S,!Q);return}e1(r,s,m,a,c,d,S,x,L)}function HO(r){for(var s=r;;){var a=s.tag;if((a===0||a===11||a===15)&&s.flags&16384&&(a=s.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!En(m(),d))return!1}catch{return!1}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Hi(r,s,a,c){s&=~km,s&=~Vs,r.suspendedLanes|=s,r.pingedLanes&=~s,c&&(r.warmLanes|=s),c=r.expirationTimes;for(var d=s;0<d;){var m=31-Qt(d),S=1<<m;c[m]=-1,d&=~S}a!==0&&Is(r,a,s)}function xd(){return(tt&6)===0?(Fl(0),!1):!0}function $m(){if(Ge!==null){if(nt===0)var r=Ge.return;else r=Ge,Yr=$s=null,nm(r),ea=null,kl=0,r=Ge;for(;r!==null;)CS(r.alternate,r),r=r.return;Ge=null}}function la(r,s){var a=r.timeoutHandle;a!==-1&&(r.timeoutHandle=-1,oN(a)),a=r.cancelPendingCommit,a!==null&&(r.cancelPendingCommit=null,a()),$m(),ft=r,Ge=a=qr(r.current,null),Qe=s,nt=0,An=null,Ui=!1,ia=Sr(r,s),Nm=!1,sa=qn=km=Vs=$i=Ct=0,vn=Bl=null,Mm=!1,(s&8)!==0&&(s|=s&32);var c=r.entangledLanes;if(c!==0)for(r=r.entanglements,c&=s;0<c;){var d=31-Qt(c),m=1<<d;s|=r[d],c&=~m}return ti=s,Vu(),a}function WS(r,s){He=null,U.H=ud,s===El||s===ed?(s=d0(),nt=3):s===l0?(s=d0(),nt=4):nt=s===fS?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,An=s,Ge===null&&(Ct=1,md(r,$n(s,r.current)))}function QS(){var r=U.H;return U.H=ud,r===null?ud:r}function KS(){var r=U.A;return U.A=zO,r}function zm(){Ct=4,Ui||(Qe&4194048)!==Qe&&Fn.current!==null||(ia=!0),($i&134217727)===0&&(Vs&134217727)===0||ft===null||Hi(ft,Qe,qn,!1)}function Bm(r,s,a){var c=tt;tt|=2;var d=QS(),m=KS();(ft!==r||Qe!==s)&&(wd=null,la(r,s)),s=!1;var S=Ct;e:do try{if(nt!==0&&Ge!==null){var x=Ge,L=An;switch(nt){case 8:$m(),S=6;break e;case 3:case 2:case 9:case 6:Fn.current===null&&(s=!0);var Q=nt;if(nt=0,An=null,ca(r,x,L,Q),a&&ia){S=0;break e}break;default:Q=nt,nt=0,An=null,ca(r,x,L,Q)}}FO(),S=Ct;break}catch(re){WS(r,re)}while(!0);return s&&r.shellSuspendCounter++,Yr=$s=null,tt=c,U.H=d,U.A=m,Ge===null&&(ft=null,Qe=0,Vu()),S}function FO(){for(;Ge!==null;)XS(Ge)}function qO(r,s){var a=tt;tt|=2;var c=QS(),d=KS();ft!==r||Qe!==s?(wd=null,Sd=Wt()+500,la(r,s)):ia=Sr(r,s);e:do try{if(nt!==0&&Ge!==null){s=Ge;var m=An;t:switch(nt){case 1:nt=0,An=null,ca(r,s,m,1);break;case 2:case 9:if(c0(m)){nt=0,An=null,ZS(s);break}s=function(){nt!==2&&nt!==9||ft!==r||(nt=7),Rr(r)},m.then(s,s);break e;case 3:nt=7;break e;case 4:nt=5;break e;case 7:c0(m)?(nt=0,An=null,ZS(s)):(nt=0,An=null,ca(r,s,m,7));break;case 5:var S=null;switch(Ge.tag){case 26:S=Ge.memoizedState;case 5:case 27:var x=Ge;if(!S||k1(S)){nt=0,An=null;var L=x.sibling;if(L!==null)Ge=L;else{var Q=x.return;Q!==null?(Ge=Q,Ed(Q)):Ge=null}break t}}nt=0,An=null,ca(r,s,m,5);break;case 6:nt=0,An=null,ca(r,s,m,6);break;case 8:$m(),Ct=6;break e;default:throw Error(i(462))}}VO();break}catch(re){WS(r,re)}while(!0);return Yr=$s=null,U.H=c,U.A=d,tt=a,Ge!==null?0:(ft=null,Qe=0,Vu(),Ct)}function VO(){for(;Ge!==null&&!Ln();)XS(Ge)}function XS(r){var s=ES(r.alternate,r,ti);r.memoizedProps=r.pendingProps,s===null?Ed(r):Ge=s}function ZS(r){var s=r,a=s.alternate;switch(s.tag){case 15:case 0:s=vS(a,s,s.pendingProps,s.type,void 0,Qe);break;case 11:s=vS(a,s,s.pendingProps,s.type.render,s.ref,Qe);break;case 5:nm(s);default:CS(a,s),s=Ge=Jb(s,ti),s=ES(a,s,ti)}r.memoizedProps=r.pendingProps,s===null?Ed(r):Ge=s}function ca(r,s,a,c){Yr=$s=null,nm(s),ea=null,kl=0;var d=s.return;try{if(MO(r,d,s,a,Qe)){Ct=1,md(r,$n(a,r.current)),Ge=null;return}}catch(m){if(d!==null)throw Ge=d,m;Ct=1,md(r,$n(a,r.current)),Ge=null;return}s.flags&32768?(Je||c===1?r=!0:ia||(Qe&536870912)!==0?r=!1:(Ui=r=!0,(c===2||c===9||c===3||c===6)&&(c=Fn.current,c!==null&&c.tag===13&&(c.flags|=16384))),JS(s,r)):Ed(s)}function Ed(r){var s=r;do{if((s.flags&32768)!==0){JS(s,Ui);return}r=s.return;var a=PO(s.alternate,s,ti);if(a!==null){Ge=a;return}if(s=s.sibling,s!==null){Ge=s;return}Ge=s=r}while(s!==null);Ct===0&&(Ct=5)}function JS(r,s){do{var a=jO(r.alternate,r);if(a!==null){a.flags&=32767,Ge=a;return}if(a=r.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!s&&(r=r.sibling,r!==null)){Ge=r;return}Ge=r=a}while(r!==null);Ct=6,Ge=null}function e1(r,s,a,c,d,m,S,x,L){r.cancelPendingCommit=null;do Td();while(Xt!==0);if((tt&6)!==0)throw Error(i(327));if(s!==null){if(s===r.current)throw Error(i(177));if(m=s.lanes|s.childLanes,m|=Op,ku(r,a,m,S,x,L),r===ft&&(Ge=ft=null,Qe=0),oa=s,Bi=r,aa=a,Pm=m,jm=d,qS=c,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,QO(No,function(){return s1(),null})):(r.callbackNode=null,r.callbackPriority=0),c=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||c){c=U.T,U.T=null,d=J.p,J.p=2,S=tt,tt|=4;try{UO(r,s,a)}finally{tt=S,J.p=d,U.T=c}}Xt=1,t1(),n1(),r1()}}function t1(){if(Xt===1){Xt=0;var r=Bi,s=oa,a=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||a){a=U.T,U.T=null;var c=J.p;J.p=2;var d=tt;tt|=4;try{jS(s,r);var m=Jm,S=Fb(r.containerInfo),x=m.focusedElem,L=m.selectionRange;if(S!==x&&x&&x.ownerDocument&&Hb(x.ownerDocument.documentElement,x)){if(L!==null&&Cp(x)){var Q=L.start,re=L.end;if(re===void 0&&(re=Q),"selectionStart"in x)x.selectionStart=Q,x.selectionEnd=Math.min(re,x.value.length);else{var oe=x.ownerDocument||document,X=oe&&oe.defaultView||window;if(X.getSelection){var Z=X.getSelection(),ke=x.textContent.length,Re=Math.min(L.start,ke),at=L.end===void 0?Re:Math.min(L.end,ke);!Z.extend&&Re>at&&(S=at,at=Re,Re=S);var q=Bb(x,Re),$=Bb(x,at);if(q&&$&&(Z.rangeCount!==1||Z.anchorNode!==q.node||Z.anchorOffset!==q.offset||Z.focusNode!==$.node||Z.focusOffset!==$.offset)){var W=oe.createRange();W.setStart(q.node,q.offset),Z.removeAllRanges(),Re>at?(Z.addRange(W),Z.extend($.node,$.offset)):(W.setEnd($.node,$.offset),Z.addRange(W))}}}}for(oe=[],Z=x;Z=Z.parentNode;)Z.nodeType===1&&oe.push({element:Z,left:Z.scrollLeft,top:Z.scrollTop});for(typeof x.focus=="function"&&x.focus(),x=0;x<oe.length;x++){var se=oe[x];se.element.scrollLeft=se.left,se.element.scrollTop=se.top}}jd=!!Zm,Jm=Zm=null}finally{tt=d,J.p=c,U.T=a}}r.current=s,Xt=2}}function n1(){if(Xt===2){Xt=0;var r=Bi,s=oa,a=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||a){a=U.T,U.T=null;var c=J.p;J.p=2;var d=tt;tt|=4;try{kS(r,s.alternate,s)}finally{tt=d,J.p=c,U.T=a}}Xt=3}}function r1(){if(Xt===4||Xt===3){Xt=0,Pr();var r=Bi,s=oa,a=aa,c=qS;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?Xt=5:(Xt=0,oa=Bi=null,i1(r,r.pendingLanes));var d=r.pendingLanes;if(d===0&&(zi=null),ll(a),s=s.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(hn,s,void 0,(s.current.flags&128)===128)}catch{}if(c!==null){s=U.T,d=J.p,J.p=2,U.T=null;try{for(var m=r.onRecoverableError,S=0;S<c.length;S++){var x=c[S];m(x.value,{componentStack:x.stack})}}finally{U.T=s,J.p=d}}(aa&3)!==0&&Td(),Rr(r),d=r.pendingLanes,(a&4194090)!==0&&(d&42)!==0?r===Um?Hl++:(Hl=0,Um=r):Hl=0,Fl(0)}}function i1(r,s){(r.pooledCacheLanes&=s)===0&&(s=r.pooledCache,s!=null&&(r.pooledCache=null,wl(s)))}function Td(r){return t1(),n1(),r1(),s1()}function s1(){if(Xt!==5)return!1;var r=Bi,s=Pm;Pm=0;var a=ll(aa),c=U.T,d=J.p;try{J.p=32>a?32:a,U.T=null,a=jm,jm=null;var m=Bi,S=aa;if(Xt=0,oa=Bi=null,aa=0,(tt&6)!==0)throw Error(i(331));var x=tt;if(tt|=4,HS(m.current),$S(m,m.current,S,a),tt=x,Fl(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(hn,m)}catch{}return!0}finally{J.p=d,U.T=c,i1(r,s)}}function o1(r,s,a){s=$n(a,s),s=gm(r.stateNode,s,2),r=Oi(r,s,2),r!==null&&(As(r,2),Rr(r))}function dt(r,s,a){if(r.tag===3)o1(r,r,a);else for(;s!==null;){if(s.tag===3){o1(s,r,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(zi===null||!zi.has(c))){r=$n(a,r),a=uS(2),c=Oi(s,a,2),c!==null&&(dS(a,c,s,r),As(c,2),Rr(c));break}}s=s.return}}function Hm(r,s,a){var c=r.pingCache;if(c===null){c=r.pingCache=new BO;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(a)||(Nm=!0,d.add(a),r=GO.bind(null,r,s,a),s.then(r,r))}function GO(r,s,a){var c=r.pingCache;c!==null&&c.delete(s),r.pingedLanes|=r.suspendedLanes&a,r.warmLanes&=~a,ft===r&&(Qe&a)===a&&(Ct===4||Ct===3&&(Qe&62914560)===Qe&&300>Wt()-Lm?(tt&2)===0&&la(r,0):km|=a,sa===Qe&&(sa=0)),Rr(r)}function a1(r,s){s===0&&(s=Nu()),r=qo(r,s),r!==null&&(As(r,s),Rr(r))}function YO(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),a1(r,a)}function WO(r,s){var a=0;switch(r.tag){case 13:var c=r.stateNode,d=r.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=r.stateNode;break;case 22:c=r.stateNode._retryCache;break;default:throw Error(i(314))}c!==null&&c.delete(s),a1(r,a)}function QO(r,s){return Mn(r,s)}var Cd=null,ua=null,Fm=!1,Rd=!1,qm=!1,Gs=0;function Rr(r){r!==ua&&r.next===null&&(ua===null?Cd=ua=r:ua=ua.next=r),Rd=!0,Fm||(Fm=!0,XO())}function Fl(r,s){if(!qm&&Rd){qm=!0;do for(var a=!1,c=Cd;c!==null;){if(r!==0){var d=c.pendingLanes;if(d===0)var m=0;else{var S=c.suspendedLanes,x=c.pingedLanes;m=(1<<31-Qt(42|r)+1)-1,m&=d&~(S&~x),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(a=!0,d1(c,m))}else m=Qe,m=Rs(c,c===ft?m:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(m&3)===0||Sr(c,m)||(a=!0,d1(c,m));c=c.next}while(a);qm=!1}}function KO(){l1()}function l1(){Rd=Fm=!1;var r=0;Gs!==0&&(sN()&&(r=Gs),Gs=0);for(var s=Wt(),a=null,c=Cd;c!==null;){var d=c.next,m=c1(c,s);m===0?(c.next=null,a===null?Cd=d:a.next=d,d===null&&(ua=a)):(a=c,(r!==0||(m&3)!==0)&&(Rd=!0)),c=d}Fl(r)}function c1(r,s){for(var a=r.suspendedLanes,c=r.pingedLanes,d=r.expirationTimes,m=r.pendingLanes&-62914561;0<m;){var S=31-Qt(m),x=1<<S,L=d[S];L===-1?((x&a)===0||(x&c)!==0)&&(d[S]=Ou(x,s)):L<=s&&(r.expiredLanes|=x),m&=~x}if(s=ft,a=Qe,a=Rs(r,r===s?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),c=r.callbackNode,a===0||r===s&&(nt===2||nt===9)||r.cancelPendingCommit!==null)return c!==null&&c!==null&&xt(c),r.callbackNode=null,r.callbackPriority=0;if((a&3)===0||Sr(r,a)){if(s=a&-a,s===r.callbackPriority)return s;switch(c!==null&&xt(c),ll(a)){case 2:case 8:a=Oo;break;case 32:a=No;break;case 268435456:a=Ei;break;default:a=No}return c=u1.bind(null,r),a=Mn(a,c),r.callbackPriority=s,r.callbackNode=a,s}return c!==null&&c!==null&&xt(c),r.callbackPriority=2,r.callbackNode=null,2}function u1(r,s){if(Xt!==0&&Xt!==5)return r.callbackNode=null,r.callbackPriority=0,null;var a=r.callbackNode;if(Td()&&r.callbackNode!==a)return null;var c=Qe;return c=Rs(r,r===ft?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),c===0?null:(GS(r,c,s),c1(r,Wt()),r.callbackNode!=null&&r.callbackNode===a?u1.bind(null,r):null)}function d1(r,s){if(Td())return null;GS(r,s,!0)}function XO(){aN(function(){(tt&6)!==0?Mn(Es,KO):l1()})}function Vm(){return Gs===0&&(Gs=ko()),Gs}function f1(r){return r==null||typeof r=="symbol"||typeof r=="boolean"?null:typeof r=="function"?r:Uu(""+r)}function h1(r,s){var a=s.ownerDocument.createElement("input");return a.name=s.name,a.value=s.value,r.id&&a.setAttribute("form",r.id),s.parentNode.insertBefore(a,s),r=new FormData(r),a.parentNode.removeChild(a),r}function ZO(r,s,a,c,d){if(s==="submit"&&a&&a.stateNode===d){var m=f1((d[fe]||null).action),S=c.submitter;S&&(s=(s=S[fe]||null)?f1(s.formAction):S.getAttribute("formAction"),s!==null&&(m=s,S=null));var x=new Hu("action","action",null,c,d);r.push({event:x,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(Gs!==0){var L=S?h1(d,S):new FormData(d);dm(a,{pending:!0,data:L,method:d.method,action:m},null,L)}}else typeof m=="function"&&(x.preventDefault(),L=S?h1(d,S):new FormData(d),dm(a,{pending:!0,data:L,method:d.method,action:m},m,L))},currentTarget:d}]})}}for(var Gm=0;Gm<Dp.length;Gm++){var Ym=Dp[Gm],JO=Ym.toLowerCase(),eN=Ym[0].toUpperCase()+Ym.slice(1);rr(JO,"on"+eN)}rr(Gb,"onAnimationEnd"),rr(Yb,"onAnimationIteration"),rr(Wb,"onAnimationStart"),rr("dblclick","onDoubleClick"),rr("focusin","onFocus"),rr("focusout","onBlur"),rr(yO,"onTransitionRun"),rr(vO,"onTransitionStart"),rr(_O,"onTransitionCancel"),rr(Qb,"onTransitionEnd"),ln("onMouseEnter",["mouseout","mouseover"]),ln("onMouseLeave",["mouseout","mouseover"]),ln("onPointerEnter",["pointerout","pointerover"]),ln("onPointerLeave",["pointerout","pointerover"]),xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),xn("onBeforeInput",["compositionend","keypress","textInput","paste"]),xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ql="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tN=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ql));function p1(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var c=r[a],d=c.event;c=c.listeners;e:{var m=void 0;if(s)for(var S=c.length-1;0<=S;S--){var x=c[S],L=x.instance,Q=x.currentTarget;if(x=x.listener,L!==m&&d.isPropagationStopped())break e;m=x,d.currentTarget=Q;try{m(d)}catch(re){pd(re)}d.currentTarget=null,m=L}else for(S=0;S<c.length;S++){if(x=c[S],L=x.instance,Q=x.currentTarget,x=x.listener,L!==m&&d.isPropagationStopped())break e;m=x,d.currentTarget=Q;try{m(d)}catch(re){pd(re)}d.currentTarget=null,m=L}}}}function Ye(r,s){var a=s[we];a===void 0&&(a=s[we]=new Set);var c=r+"__bubble";a.has(c)||(m1(s,r,2,!1),a.add(c))}function Wm(r,s,a){var c=0;s&&(c|=4),m1(a,r,c,s)}var Ad="_reactListening"+Math.random().toString(36).slice(2);function Qm(r){if(!r[Ad]){r[Ad]=!0,it.forEach(function(a){a!=="selectionchange"&&(tN.has(a)||Wm(a,!1,r),Wm(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[Ad]||(s[Ad]=!0,Wm("selectionchange",!1,s))}}function m1(r,s,a,c){switch($1(s)){case 2:var d=AN;break;case 8:d=IN;break;default:d=cg}a=d.bind(null,s,a,r),d=void 0,!yp||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?r.addEventListener(s,a,{capture:!0,passive:d}):r.addEventListener(s,a,!0):d!==void 0?r.addEventListener(s,a,{passive:d}):r.addEventListener(s,a,!1)}function Km(r,s,a,c,d){var m=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var S=c.tag;if(S===3||S===4){var x=c.stateNode.containerInfo;if(x===d)break;if(S===4)for(S=c.return;S!==null;){var L=S.tag;if((L===3||L===4)&&S.stateNode.containerInfo===d)return;S=S.return}for(;x!==null;){if(S=ze(x),S===null)return;if(L=S.tag,L===5||L===6||L===26||L===27){c=m=S;continue e}x=x.parentNode}}c=c.return}wb(function(){var Q=m,re=mp(a),oe=[];e:{var X=Kb.get(r);if(X!==void 0){var Z=Hu,ke=r;switch(r){case"keypress":if(zu(a)===0)break e;case"keydown":case"keyup":Z=QD;break;case"focusin":ke="focus",Z=Sp;break;case"focusout":ke="blur",Z=Sp;break;case"beforeblur":case"afterblur":Z=Sp;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=Tb;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=jD;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=ZD;break;case Gb:case Yb:case Wb:Z=zD;break;case Qb:Z=eO;break;case"scroll":case"scrollend":Z=LD;break;case"wheel":Z=nO;break;case"copy":case"cut":case"paste":Z=HD;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=Rb;break;case"toggle":case"beforetoggle":Z=iO}var Re=(s&4)!==0,at=!Re&&(r==="scroll"||r==="scrollend"),q=Re?X!==null?X+"Capture":null:X;Re=[];for(var $=Q,W;$!==null;){var se=$;if(W=se.stateNode,se=se.tag,se!==5&&se!==26&&se!==27||W===null||q===null||(se=cl($,q),se!=null&&Re.push(Vl($,se,W))),at)break;$=$.return}0<Re.length&&(X=new Z(X,ke,null,a,re),oe.push({event:X,listeners:Re}))}}if((s&7)===0){e:{if(X=r==="mouseover"||r==="pointerover",Z=r==="mouseout"||r==="pointerout",X&&a!==pp&&(ke=a.relatedTarget||a.fromElement)&&(ze(ke)||ke[ye]))break e;if((Z||X)&&(X=re.window===re?re:(X=re.ownerDocument)?X.defaultView||X.parentWindow:window,Z?(ke=a.relatedTarget||a.toElement,Z=Q,ke=ke?ze(ke):null,ke!==null&&(at=l(ke),Re=ke.tag,ke!==at||Re!==5&&Re!==27&&Re!==6)&&(ke=null)):(Z=null,ke=Q),Z!==ke)){if(Re=Tb,se="onMouseLeave",q="onMouseEnter",$="mouse",(r==="pointerout"||r==="pointerover")&&(Re=Rb,se="onPointerLeave",q="onPointerEnter",$="pointer"),at=Z==null?X:yt(Z),W=ke==null?X:yt(ke),X=new Re(se,$+"leave",Z,a,re),X.target=at,X.relatedTarget=W,se=null,ze(re)===Q&&(Re=new Re(q,$+"enter",ke,a,re),Re.target=W,Re.relatedTarget=at,se=Re),at=se,Z&&ke)t:{for(Re=Z,q=ke,$=0,W=Re;W;W=da(W))$++;for(W=0,se=q;se;se=da(se))W++;for(;0<$-W;)Re=da(Re),$--;for(;0<W-$;)q=da(q),W--;for(;$--;){if(Re===q||q!==null&&Re===q.alternate)break t;Re=da(Re),q=da(q)}Re=null}else Re=null;Z!==null&&g1(oe,X,Z,Re,!1),ke!==null&&at!==null&&g1(oe,at,ke,Re,!0)}}e:{if(X=Q?yt(Q):window,Z=X.nodeName&&X.nodeName.toLowerCase(),Z==="select"||Z==="input"&&X.type==="file")var ge=Lb;else if(kb(X))if(Pb)ge=pO;else{ge=fO;var Fe=dO}else Z=X.nodeName,!Z||Z.toLowerCase()!=="input"||X.type!=="checkbox"&&X.type!=="radio"?Q&&hp(Q.elementType)&&(ge=Lb):ge=hO;if(ge&&(ge=ge(r,Q))){Mb(oe,ge,a,re);break e}Fe&&Fe(r,X,Q),r==="focusout"&&Q&&X.type==="number"&&Q.memoizedProps.value!=null&&fp(X,"number",X.value)}switch(Fe=Q?yt(Q):window,r){case"focusin":(kb(Fe)||Fe.contentEditable==="true")&&(Bo=Fe,Rp=Q,yl=null);break;case"focusout":yl=Rp=Bo=null;break;case"mousedown":Ap=!0;break;case"contextmenu":case"mouseup":case"dragend":Ap=!1,qb(oe,a,re);break;case"selectionchange":if(gO)break;case"keydown":case"keyup":qb(oe,a,re)}var xe;if(xp)e:{switch(r){case"compositionstart":var Ie="onCompositionStart";break e;case"compositionend":Ie="onCompositionEnd";break e;case"compositionupdate":Ie="onCompositionUpdate";break e}Ie=void 0}else zo?Ob(r,a)&&(Ie="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(Ie="onCompositionStart");Ie&&(Ab&&a.locale!=="ko"&&(zo||Ie!=="onCompositionStart"?Ie==="onCompositionEnd"&&zo&&(xe=xb()):(Ri=re,vp="value"in Ri?Ri.value:Ri.textContent,zo=!0)),Fe=Id(Q,Ie),0<Fe.length&&(Ie=new Cb(Ie,r,null,a,re),oe.push({event:Ie,listeners:Fe}),xe?Ie.data=xe:(xe=Nb(a),xe!==null&&(Ie.data=xe)))),(xe=oO?aO(r,a):lO(r,a))&&(Ie=Id(Q,"onBeforeInput"),0<Ie.length&&(Fe=new Cb("onBeforeInput","beforeinput",null,a,re),oe.push({event:Fe,listeners:Ie}),Fe.data=xe)),ZO(oe,r,Q,a,re)}p1(oe,s)})}function Vl(r,s,a){return{instance:r,listener:s,currentTarget:a}}function Id(r,s){for(var a=s+"Capture",c=[];r!==null;){var d=r,m=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||m===null||(d=cl(r,a),d!=null&&c.unshift(Vl(r,d,m)),d=cl(r,s),d!=null&&c.push(Vl(r,d,m))),r.tag===3)return c;r=r.return}return[]}function da(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r||null}function g1(r,s,a,c,d){for(var m=s._reactName,S=[];a!==null&&a!==c;){var x=a,L=x.alternate,Q=x.stateNode;if(x=x.tag,L!==null&&L===c)break;x!==5&&x!==26&&x!==27||Q===null||(L=Q,d?(Q=cl(a,m),Q!=null&&S.unshift(Vl(a,Q,L))):d||(Q=cl(a,m),Q!=null&&S.push(Vl(a,Q,L)))),a=a.return}S.length!==0&&r.push({event:s,listeners:S})}var nN=/\r\n?/g,rN=/\u0000|\uFFFD/g;function y1(r){return(typeof r=="string"?r:""+r).replace(nN,`
`).replace(rN,"")}function v1(r,s){return s=y1(s),y1(r)===s}function Dd(){}function ot(r,s,a,c,d,m){switch(a){case"children":typeof c=="string"?s==="body"||s==="textarea"&&c===""||jo(r,c):(typeof c=="number"||typeof c=="bigint")&&s!=="body"&&jo(r,""+c);break;case"className":Br(r,"class",c);break;case"tabIndex":Br(r,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":Br(r,a,c);break;case"style":bb(r,c,m);break;case"data":if(s!=="object"){Br(r,"data",c);break}case"src":case"href":if(c===""&&(s!=="a"||a!=="href")){r.removeAttribute(a);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){r.removeAttribute(a);break}c=Uu(""+c),r.setAttribute(a,c);break;case"action":case"formAction":if(typeof c=="function"){r.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(a==="formAction"?(s!=="input"&&ot(r,s,"name",d.name,d,null),ot(r,s,"formEncType",d.formEncType,d,null),ot(r,s,"formMethod",d.formMethod,d,null),ot(r,s,"formTarget",d.formTarget,d,null)):(ot(r,s,"encType",d.encType,d,null),ot(r,s,"method",d.method,d,null),ot(r,s,"target",d.target,d,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){r.removeAttribute(a);break}c=Uu(""+c),r.setAttribute(a,c);break;case"onClick":c!=null&&(r.onclick=Dd);break;case"onScroll":c!=null&&Ye("scroll",r);break;case"onScrollEnd":c!=null&&Ye("scrollend",r);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(a=c.__html,a!=null){if(d.children!=null)throw Error(i(60));r.innerHTML=a}}break;case"multiple":r.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":r.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){r.removeAttribute("xlink:href");break}a=Uu(""+c),r.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(a,""+c):r.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(a,""):r.removeAttribute(a);break;case"capture":case"download":c===!0?r.setAttribute(a,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(a,c):r.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?r.setAttribute(a,c):r.removeAttribute(a);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?r.removeAttribute(a):r.setAttribute(a,c);break;case"popover":Ye("beforetoggle",r),Ye("toggle",r),zr(r,"popover",c);break;case"xlinkActuate":Pe(r,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":Pe(r,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":Pe(r,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":Pe(r,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":Pe(r,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":Pe(r,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":Pe(r,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":Pe(r,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":Pe(r,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":zr(r,"is",c);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=kD.get(a)||a,zr(r,a,c))}}function Xm(r,s,a,c,d,m){switch(a){case"style":bb(r,c,m);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(a=c.__html,a!=null){if(d.children!=null)throw Error(i(60));r.innerHTML=a}}break;case"children":typeof c=="string"?jo(r,c):(typeof c=="number"||typeof c=="bigint")&&jo(r,""+c);break;case"onScroll":c!=null&&Ye("scroll",r);break;case"onScrollEnd":c!=null&&Ye("scrollend",r);break;case"onClick":c!=null&&(r.onclick=Dd);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!wr.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(d=a.endsWith("Capture"),s=a.slice(2,d?a.length-7:void 0),m=r[fe]||null,m=m!=null?m[a]:null,typeof m=="function"&&r.removeEventListener(s,m,d),typeof c=="function")){typeof m!="function"&&m!==null&&(a in r?r[a]=null:r.hasAttribute(a)&&r.removeAttribute(a)),r.addEventListener(s,c,d);break e}a in r?r[a]=c:c===!0?r.setAttribute(a,""):zr(r,a,c)}}}function Zt(r,s,a){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ye("error",r),Ye("load",r);var c=!1,d=!1,m;for(m in a)if(a.hasOwnProperty(m)){var S=a[m];if(S!=null)switch(m){case"src":c=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:ot(r,s,m,S,a,null)}}d&&ot(r,s,"srcSet",a.srcSet,a,null),c&&ot(r,s,"src",a.src,a,null);return;case"input":Ye("invalid",r);var x=m=S=d=null,L=null,Q=null;for(c in a)if(a.hasOwnProperty(c)){var re=a[c];if(re!=null)switch(c){case"name":d=re;break;case"type":S=re;break;case"checked":L=re;break;case"defaultChecked":Q=re;break;case"value":m=re;break;case"defaultValue":x=re;break;case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(i(137,s));break;default:ot(r,s,c,re,a,null)}}gb(r,m,x,L,Q,S,d,!1),Pu(r);return;case"select":Ye("invalid",r),c=S=m=null;for(d in a)if(a.hasOwnProperty(d)&&(x=a[d],x!=null))switch(d){case"value":m=x;break;case"defaultValue":S=x;break;case"multiple":c=x;default:ot(r,s,d,x,a,null)}s=m,a=S,r.multiple=!!c,s!=null?Po(r,!!c,s,!1):a!=null&&Po(r,!!c,a,!0);return;case"textarea":Ye("invalid",r),m=d=c=null;for(S in a)if(a.hasOwnProperty(S)&&(x=a[S],x!=null))switch(S){case"value":c=x;break;case"defaultValue":d=x;break;case"children":m=x;break;case"dangerouslySetInnerHTML":if(x!=null)throw Error(i(91));break;default:ot(r,s,S,x,a,null)}vb(r,c,d,m),Pu(r);return;case"option":for(L in a)if(a.hasOwnProperty(L)&&(c=a[L],c!=null))switch(L){case"selected":r.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:ot(r,s,L,c,a,null)}return;case"dialog":Ye("beforetoggle",r),Ye("toggle",r),Ye("cancel",r),Ye("close",r);break;case"iframe":case"object":Ye("load",r);break;case"video":case"audio":for(c=0;c<ql.length;c++)Ye(ql[c],r);break;case"image":Ye("error",r),Ye("load",r);break;case"details":Ye("toggle",r);break;case"embed":case"source":case"link":Ye("error",r),Ye("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(c=a[Q],c!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:ot(r,s,Q,c,a,null)}return;default:if(hp(s)){for(re in a)a.hasOwnProperty(re)&&(c=a[re],c!==void 0&&Xm(r,s,re,c,a,void 0));return}}for(x in a)a.hasOwnProperty(x)&&(c=a[x],c!=null&&ot(r,s,x,c,a,null))}function iN(r,s,a,c){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,m=null,S=null,x=null,L=null,Q=null,re=null;for(Z in a){var oe=a[Z];if(a.hasOwnProperty(Z)&&oe!=null)switch(Z){case"checked":break;case"value":break;case"defaultValue":L=oe;default:c.hasOwnProperty(Z)||ot(r,s,Z,null,c,oe)}}for(var X in c){var Z=c[X];if(oe=a[X],c.hasOwnProperty(X)&&(Z!=null||oe!=null))switch(X){case"type":m=Z;break;case"name":d=Z;break;case"checked":Q=Z;break;case"defaultChecked":re=Z;break;case"value":S=Z;break;case"defaultValue":x=Z;break;case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(i(137,s));break;default:Z!==oe&&ot(r,s,X,Z,c,oe)}}dp(r,S,x,L,Q,re,m,d);return;case"select":Z=S=x=X=null;for(m in a)if(L=a[m],a.hasOwnProperty(m)&&L!=null)switch(m){case"value":break;case"multiple":Z=L;default:c.hasOwnProperty(m)||ot(r,s,m,null,c,L)}for(d in c)if(m=c[d],L=a[d],c.hasOwnProperty(d)&&(m!=null||L!=null))switch(d){case"value":X=m;break;case"defaultValue":x=m;break;case"multiple":S=m;default:m!==L&&ot(r,s,d,m,c,L)}s=x,a=S,c=Z,X!=null?Po(r,!!a,X,!1):!!c!=!!a&&(s!=null?Po(r,!!a,s,!0):Po(r,!!a,a?[]:"",!1));return;case"textarea":Z=X=null;for(x in a)if(d=a[x],a.hasOwnProperty(x)&&d!=null&&!c.hasOwnProperty(x))switch(x){case"value":break;case"children":break;default:ot(r,s,x,null,c,d)}for(S in c)if(d=c[S],m=a[S],c.hasOwnProperty(S)&&(d!=null||m!=null))switch(S){case"value":X=d;break;case"defaultValue":Z=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(i(91));break;default:d!==m&&ot(r,s,S,d,c,m)}yb(r,X,Z);return;case"option":for(var ke in a)if(X=a[ke],a.hasOwnProperty(ke)&&X!=null&&!c.hasOwnProperty(ke))switch(ke){case"selected":r.selected=!1;break;default:ot(r,s,ke,null,c,X)}for(L in c)if(X=c[L],Z=a[L],c.hasOwnProperty(L)&&X!==Z&&(X!=null||Z!=null))switch(L){case"selected":r.selected=X&&typeof X!="function"&&typeof X!="symbol";break;default:ot(r,s,L,X,c,Z)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Re in a)X=a[Re],a.hasOwnProperty(Re)&&X!=null&&!c.hasOwnProperty(Re)&&ot(r,s,Re,null,c,X);for(Q in c)if(X=c[Q],Z=a[Q],c.hasOwnProperty(Q)&&X!==Z&&(X!=null||Z!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(i(137,s));break;default:ot(r,s,Q,X,c,Z)}return;default:if(hp(s)){for(var at in a)X=a[at],a.hasOwnProperty(at)&&X!==void 0&&!c.hasOwnProperty(at)&&Xm(r,s,at,void 0,c,X);for(re in c)X=c[re],Z=a[re],!c.hasOwnProperty(re)||X===Z||X===void 0&&Z===void 0||Xm(r,s,re,X,c,Z);return}}for(var q in a)X=a[q],a.hasOwnProperty(q)&&X!=null&&!c.hasOwnProperty(q)&&ot(r,s,q,null,c,X);for(oe in c)X=c[oe],Z=a[oe],!c.hasOwnProperty(oe)||X===Z||X==null&&Z==null||ot(r,s,oe,X,c,Z)}var Zm=null,Jm=null;function Od(r){return r.nodeType===9?r:r.ownerDocument}function _1(r){switch(r){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function b1(r,s){if(r===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return r===1&&s==="foreignObject"?0:r}function eg(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var tg=null;function sN(){var r=window.event;return r&&r.type==="popstate"?r===tg?!1:(tg=r,!0):(tg=null,!1)}var S1=typeof setTimeout=="function"?setTimeout:void 0,oN=typeof clearTimeout=="function"?clearTimeout:void 0,w1=typeof Promise=="function"?Promise:void 0,aN=typeof queueMicrotask=="function"?queueMicrotask:typeof w1<"u"?function(r){return w1.resolve(null).then(r).catch(lN)}:S1;function lN(r){setTimeout(function(){throw r})}function Fi(r){return r==="head"}function x1(r,s){var a=s,c=0,d=0;do{var m=a.nextSibling;if(r.removeChild(a),m&&m.nodeType===8)if(a=m.data,a==="/$"){if(0<c&&8>c){a=c;var S=r.ownerDocument;if(a&1&&Gl(S.documentElement),a&2&&Gl(S.body),a&4)for(a=S.head,Gl(a),S=a.firstChild;S;){var x=S.nextSibling,L=S.nodeName;S[_e]||L==="SCRIPT"||L==="STYLE"||L==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=x}}if(d===0){r.removeChild(m),ec(s);return}d--}else a==="$"||a==="$?"||a==="$!"?d++:c=a.charCodeAt(0)-48;else c=0;a=m}while(a);ec(s)}function ng(r){var s=r.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var a=s;switch(s=s.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ng(a),Se(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}r.removeChild(a)}}function cN(r,s,a,c){for(;r.nodeType===1;){var d=a;if(r.nodeName.toLowerCase()!==s.toLowerCase()){if(!c&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(c){if(!r[_e])switch(s){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(m=r.getAttribute("rel"),m==="stylesheet"&&r.hasAttribute("data-precedence"))break;if(m!==d.rel||r.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||r.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||r.getAttribute("title")!==(d.title==null?null:d.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(m=r.getAttribute("src"),(m!==(d.src==null?null:d.src)||r.getAttribute("type")!==(d.type==null?null:d.type)||r.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&m&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}}else if(s==="input"&&r.type==="hidden"){var m=d.name==null?null:""+d.name;if(d.type==="hidden"&&r.getAttribute("name")===m)return r}else return r;if(r=sr(r.nextSibling),r===null)break}return null}function uN(r,s,a){if(s==="")return null;for(;r.nodeType!==3;)if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!a||(r=sr(r.nextSibling),r===null))return null;return r}function rg(r){return r.data==="$!"||r.data==="$?"&&r.ownerDocument.readyState==="complete"}function dN(r,s){var a=r.ownerDocument;if(r.data!=="$?"||a.readyState==="complete")s();else{var c=function(){s(),a.removeEventListener("DOMContentLoaded",c)};a.addEventListener("DOMContentLoaded",c),r._reactRetry=c}}function sr(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return r}var ig=null;function E1(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}function T1(r,s,a){switch(s=Od(a),r){case"html":if(r=s.documentElement,!r)throw Error(i(452));return r;case"head":if(r=s.head,!r)throw Error(i(453));return r;case"body":if(r=s.body,!r)throw Error(i(454));return r;default:throw Error(i(451))}}function Gl(r){for(var s=r.attributes;s.length;)r.removeAttributeNode(s[0]);Se(r)}var Vn=new Map,C1=new Set;function Nd(r){return typeof r.getRootNode=="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}var ni=J.d;J.d={f:fN,r:hN,D:pN,C:mN,L:gN,m:yN,X:_N,S:vN,M:bN};function fN(){var r=ni.f(),s=xd();return r||s}function hN(r){var s=Ze(r);s!==null&&s.tag===5&&s.type==="form"?G0(s):ni.r(r)}var fa=typeof document>"u"?null:document;function R1(r,s,a){var c=fa;if(c&&typeof s=="string"&&s){var d=Un(s);d='link[rel="'+r+'"][href="'+d+'"]',typeof a=="string"&&(d+='[crossorigin="'+a+'"]'),C1.has(d)||(C1.add(d),r={rel:r,crossOrigin:a,href:s},c.querySelector(d)===null&&(s=c.createElement("link"),Zt(s,"link",r),Le(s),c.head.appendChild(s)))}}function pN(r){ni.D(r),R1("dns-prefetch",r,null)}function mN(r,s){ni.C(r,s),R1("preconnect",r,s)}function gN(r,s,a){ni.L(r,s,a);var c=fa;if(c&&r&&s){var d='link[rel="preload"][as="'+Un(s)+'"]';s==="image"&&a&&a.imageSrcSet?(d+='[imagesrcset="'+Un(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(d+='[imagesizes="'+Un(a.imageSizes)+'"]')):d+='[href="'+Un(r)+'"]';var m=d;switch(s){case"style":m=ha(r);break;case"script":m=pa(r)}Vn.has(m)||(r=g({rel:"preload",href:s==="image"&&a&&a.imageSrcSet?void 0:r,as:s},a),Vn.set(m,r),c.querySelector(d)!==null||s==="style"&&c.querySelector(Yl(m))||s==="script"&&c.querySelector(Wl(m))||(s=c.createElement("link"),Zt(s,"link",r),Le(s),c.head.appendChild(s)))}}function yN(r,s){ni.m(r,s);var a=fa;if(a&&r){var c=s&&typeof s.as=="string"?s.as:"script",d='link[rel="modulepreload"][as="'+Un(c)+'"][href="'+Un(r)+'"]',m=d;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=pa(r)}if(!Vn.has(m)&&(r=g({rel:"modulepreload",href:r},s),Vn.set(m,r),a.querySelector(d)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Wl(m)))return}c=a.createElement("link"),Zt(c,"link",r),Le(c),a.head.appendChild(c)}}}function vN(r,s,a){ni.S(r,s,a);var c=fa;if(c&&r){var d=Et(c).hoistableStyles,m=ha(r);s=s||"default";var S=d.get(m);if(!S){var x={loading:0,preload:null};if(S=c.querySelector(Yl(m)))x.loading=5;else{r=g({rel:"stylesheet",href:r,"data-precedence":s},a),(a=Vn.get(m))&&sg(r,a);var L=S=c.createElement("link");Le(L),Zt(L,"link",r),L._p=new Promise(function(Q,re){L.onload=Q,L.onerror=re}),L.addEventListener("load",function(){x.loading|=1}),L.addEventListener("error",function(){x.loading|=2}),x.loading|=4,kd(S,s,c)}S={type:"stylesheet",instance:S,count:1,state:x},d.set(m,S)}}}function _N(r,s){ni.X(r,s);var a=fa;if(a&&r){var c=Et(a).hoistableScripts,d=pa(r),m=c.get(d);m||(m=a.querySelector(Wl(d)),m||(r=g({src:r,async:!0},s),(s=Vn.get(d))&&og(r,s),m=a.createElement("script"),Le(m),Zt(m,"link",r),a.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(d,m))}}function bN(r,s){ni.M(r,s);var a=fa;if(a&&r){var c=Et(a).hoistableScripts,d=pa(r),m=c.get(d);m||(m=a.querySelector(Wl(d)),m||(r=g({src:r,async:!0,type:"module"},s),(s=Vn.get(d))&&og(r,s),m=a.createElement("script"),Le(m),Zt(m,"link",r),a.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(d,m))}}function A1(r,s,a,c){var d=(d=pe.current)?Nd(d):null;if(!d)throw Error(i(446));switch(r){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(s=ha(a.href),a=Et(d).hoistableStyles,c=a.get(s),c||(c={type:"style",instance:null,count:0,state:null},a.set(s,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){r=ha(a.href);var m=Et(d).hoistableStyles,S=m.get(r);if(S||(d=d.ownerDocument||d,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(r,S),(m=d.querySelector(Yl(r)))&&!m._p&&(S.instance=m,S.state.loading=5),Vn.has(r)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Vn.set(r,a),m||SN(d,r,a,S.state))),s&&c===null)throw Error(i(528,""));return S}if(s&&c!==null)throw Error(i(529,""));return null;case"script":return s=a.async,a=a.src,typeof a=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=pa(a),a=Et(d).hoistableScripts,c=a.get(s),c||(c={type:"script",instance:null,count:0,state:null},a.set(s,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,r))}}function ha(r){return'href="'+Un(r)+'"'}function Yl(r){return'link[rel="stylesheet"]['+r+"]"}function I1(r){return g({},r,{"data-precedence":r.precedence,precedence:null})}function SN(r,s,a,c){r.querySelector('link[rel="preload"][as="style"]['+s+"]")?c.loading=1:(s=r.createElement("link"),c.preload=s,s.addEventListener("load",function(){return c.loading|=1}),s.addEventListener("error",function(){return c.loading|=2}),Zt(s,"link",a),Le(s),r.head.appendChild(s))}function pa(r){return'[src="'+Un(r)+'"]'}function Wl(r){return"script[async]"+r}function D1(r,s,a){if(s.count++,s.instance===null)switch(s.type){case"style":var c=r.querySelector('style[data-href~="'+Un(a.href)+'"]');if(c)return s.instance=c,Le(c),c;var d=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return c=(r.ownerDocument||r).createElement("style"),Le(c),Zt(c,"style",d),kd(c,a.precedence,r),s.instance=c;case"stylesheet":d=ha(a.href);var m=r.querySelector(Yl(d));if(m)return s.state.loading|=4,s.instance=m,Le(m),m;c=I1(a),(d=Vn.get(d))&&sg(c,d),m=(r.ownerDocument||r).createElement("link"),Le(m);var S=m;return S._p=new Promise(function(x,L){S.onload=x,S.onerror=L}),Zt(m,"link",c),s.state.loading|=4,kd(m,a.precedence,r),s.instance=m;case"script":return m=pa(a.src),(d=r.querySelector(Wl(m)))?(s.instance=d,Le(d),d):(c=a,(d=Vn.get(m))&&(c=g({},a),og(c,d)),r=r.ownerDocument||r,d=r.createElement("script"),Le(d),Zt(d,"link",c),r.head.appendChild(d),s.instance=d);case"void":return null;default:throw Error(i(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(c=s.instance,s.state.loading|=4,kd(c,a.precedence,r));return s.instance}function kd(r,s,a){for(var c=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=c.length?c[c.length-1]:null,m=d,S=0;S<c.length;S++){var x=c[S];if(x.dataset.precedence===s)m=x;else if(m!==d)break}m?m.parentNode.insertBefore(r,m.nextSibling):(s=a.nodeType===9?a.head:a,s.insertBefore(r,s.firstChild))}function sg(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.title==null&&(r.title=s.title)}function og(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.integrity==null&&(r.integrity=s.integrity)}var Md=null;function O1(r,s,a){if(Md===null){var c=new Map,d=Md=new Map;d.set(a,c)}else d=Md,c=d.get(a),c||(c=new Map,d.set(a,c));if(c.has(r))return c;for(c.set(r,null),a=a.getElementsByTagName(r),d=0;d<a.length;d++){var m=a[d];if(!(m[_e]||m[ce]||r==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var S=m.getAttribute(s)||"";S=r+S;var x=c.get(S);x?x.push(m):c.set(S,[m])}}return c}function N1(r,s,a){r=r.ownerDocument||r,r.head.insertBefore(a,s==="title"?r.querySelector("head > title"):null)}function wN(r,s,a){if(a===1||s.itemProp!=null)return!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return r=s.disabled,typeof s.precedence=="string"&&r==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function k1(r){return!(r.type==="stylesheet"&&(r.state.loading&3)===0)}var Ql=null;function xN(){}function EN(r,s,a){if(Ql===null)throw Error(i(475));var c=Ql;if(s.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var d=ha(a.href),m=r.querySelector(Yl(d));if(m){r=m._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(c.count++,c=Ld.bind(c),r.then(c,c)),s.state.loading|=4,s.instance=m,Le(m);return}m=r.ownerDocument||r,a=I1(a),(d=Vn.get(d))&&sg(a,d),m=m.createElement("link"),Le(m);var S=m;S._p=new Promise(function(x,L){S.onload=x,S.onerror=L}),Zt(m,"link",a),s.instance=m}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(s,r),(r=s.state.preload)&&(s.state.loading&3)===0&&(c.count++,s=Ld.bind(c),r.addEventListener("load",s),r.addEventListener("error",s))}}function TN(){if(Ql===null)throw Error(i(475));var r=Ql;return r.stylesheets&&r.count===0&&ag(r,r.stylesheets),0<r.count?function(s){var a=setTimeout(function(){if(r.stylesheets&&ag(r,r.stylesheets),r.unsuspend){var c=r.unsuspend;r.unsuspend=null,c()}},6e4);return r.unsuspend=s,function(){r.unsuspend=null,clearTimeout(a)}}:null}function Ld(){if(this.count--,this.count===0){if(this.stylesheets)ag(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}var Pd=null;function ag(r,s){r.stylesheets=null,r.unsuspend!==null&&(r.count++,Pd=new Map,s.forEach(CN,r),Pd=null,Ld.call(r))}function CN(r,s){if(!(s.state.loading&4)){var a=Pd.get(r);if(a)var c=a.get(null);else{a=new Map,Pd.set(r,a);for(var d=r.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<d.length;m++){var S=d[m];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),c=S)}c&&a.set(null,c)}d=s.instance,S=d.getAttribute("data-precedence"),m=a.get(S)||c,m===c&&a.set(null,d),a.set(S,d),this.count++,c=Ld.bind(this),d.addEventListener("load",c),d.addEventListener("error",c),m?m.parentNode.insertBefore(d,m.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(d,r.firstChild)),s.state.loading|=4}}var Kl={$$typeof:C,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function RN(r,s,a,c,d,m,S,x){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Mo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mo(0),this.hiddenUpdates=Mo(null),this.identifierPrefix=c,this.onUncaughtError=d,this.onCaughtError=m,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.incompleteTransitions=new Map}function M1(r,s,a,c,d,m,S,x,L,Q,re,oe){return r=new RN(r,s,a,S,x,L,Q,oe),s=1,m===!0&&(s|=24),m=Tn(3,null,null,s),r.current=m,m.stateNode=r,s=Hp(),s.refCount++,r.pooledCache=s,s.refCount++,m.memoizedState={element:c,isDehydrated:a,cache:s},Gp(m),r}function L1(r){return r?(r=Vo,r):Vo}function P1(r,s,a,c,d,m){d=L1(d),c.context===null?c.context=d:c.pendingContext=d,c=Di(s),c.payload={element:a},m=m===void 0?null:m,m!==null&&(c.callback=m),a=Oi(r,c,s),a!==null&&(Dn(a,r,s),Cl(a,r,s))}function j1(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function lg(r,s){j1(r,s),(r=r.alternate)&&j1(r,s)}function U1(r){if(r.tag===13){var s=qo(r,67108864);s!==null&&Dn(s,r,67108864),lg(r,67108864)}}var jd=!0;function AN(r,s,a,c){var d=U.T;U.T=null;var m=J.p;try{J.p=2,cg(r,s,a,c)}finally{J.p=m,U.T=d}}function IN(r,s,a,c){var d=U.T;U.T=null;var m=J.p;try{J.p=8,cg(r,s,a,c)}finally{J.p=m,U.T=d}}function cg(r,s,a,c){if(jd){var d=ug(c);if(d===null)Km(r,s,c,Ud,a),z1(r,c);else if(ON(d,r,s,a,c))c.stopPropagation();else if(z1(r,c),s&4&&-1<DN.indexOf(r)){for(;d!==null;){var m=Ze(d);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var S=Ur(m.pendingLanes);if(S!==0){var x=m;for(x.pendingLanes|=2,x.entangledLanes|=2;S;){var L=1<<31-Qt(S);x.entanglements[1]|=L,S&=~L}Rr(m),(tt&6)===0&&(Sd=Wt()+500,Fl(0))}}break;case 13:x=qo(m,2),x!==null&&Dn(x,m,2),xd(),lg(m,2)}if(m=ug(c),m===null&&Km(r,s,c,Ud,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else Km(r,s,c,null,a)}}function ug(r){return r=mp(r),dg(r)}var Ud=null;function dg(r){if(Ud=null,r=ze(r),r!==null){var s=l(r);if(s===null)r=null;else{var a=s.tag;if(a===13){if(r=u(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null)}}return Ud=r,null}function $1(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(sl()){case Es:return 2;case Oo:return 8;case No:case jr:return 32;case Ei:return 268435456;default:return 32}default:return 32}}var fg=!1,qi=null,Vi=null,Gi=null,Xl=new Map,Zl=new Map,Yi=[],DN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function z1(r,s){switch(r){case"focusin":case"focusout":qi=null;break;case"dragenter":case"dragleave":Vi=null;break;case"mouseover":case"mouseout":Gi=null;break;case"pointerover":case"pointerout":Xl.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zl.delete(s.pointerId)}}function Jl(r,s,a,c,d,m){return r===null||r.nativeEvent!==m?(r={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},s!==null&&(s=Ze(s),s!==null&&U1(s)),r):(r.eventSystemFlags|=c,s=r.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),r)}function ON(r,s,a,c,d){switch(s){case"focusin":return qi=Jl(qi,r,s,a,c,d),!0;case"dragenter":return Vi=Jl(Vi,r,s,a,c,d),!0;case"mouseover":return Gi=Jl(Gi,r,s,a,c,d),!0;case"pointerover":var m=d.pointerId;return Xl.set(m,Jl(Xl.get(m)||null,r,s,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,Zl.set(m,Jl(Zl.get(m)||null,r,s,a,c,d)),!0}return!1}function B1(r){var s=ze(r.target);if(s!==null){var a=l(s);if(a!==null){if(s=a.tag,s===13){if(s=u(a),s!==null){r.blockedOn=s,Y(r.priority,function(){if(a.tag===13){var c=In();c=al(c);var d=qo(a,c);d!==null&&Dn(d,a,c),lg(a,c)}});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function $d(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=ug(r.nativeEvent);if(a===null){a=r.nativeEvent;var c=new a.constructor(a.type,a);pp=c,a.target.dispatchEvent(c),pp=null}else return s=Ze(a),s!==null&&U1(s),r.blockedOn=a,!1;s.shift()}return!0}function H1(r,s,a){$d(r)&&a.delete(s)}function NN(){fg=!1,qi!==null&&$d(qi)&&(qi=null),Vi!==null&&$d(Vi)&&(Vi=null),Gi!==null&&$d(Gi)&&(Gi=null),Xl.forEach(H1),Zl.forEach(H1)}function zd(r,s){r.blockedOn===s&&(r.blockedOn=null,fg||(fg=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,NN)))}var Bd=null;function F1(r){Bd!==r&&(Bd=r,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){Bd===r&&(Bd=null);for(var s=0;s<r.length;s+=3){var a=r[s],c=r[s+1],d=r[s+2];if(typeof c!="function"){if(dg(c||a)===null)continue;break}var m=Ze(a);m!==null&&(r.splice(s,3),s-=3,dm(m,{pending:!0,data:d,method:a.method,action:c},c,d))}}))}function ec(r){function s(L){return zd(L,r)}qi!==null&&zd(qi,r),Vi!==null&&zd(Vi,r),Gi!==null&&zd(Gi,r),Xl.forEach(s),Zl.forEach(s);for(var a=0;a<Yi.length;a++){var c=Yi[a];c.blockedOn===r&&(c.blockedOn=null)}for(;0<Yi.length&&(a=Yi[0],a.blockedOn===null);)B1(a),a.blockedOn===null&&Yi.shift();if(a=(r.ownerDocument||r).$$reactFormReplay,a!=null)for(c=0;c<a.length;c+=3){var d=a[c],m=a[c+1],S=d[fe]||null;if(typeof m=="function")S||F1(a);else if(S){var x=null;if(m&&m.hasAttribute("formAction")){if(d=m,S=m[fe]||null)x=S.formAction;else if(dg(d)!==null)continue}else x=S.action;typeof x=="function"?a[c+1]=x:(a.splice(c,3),c-=3),F1(a)}}}function hg(r){this._internalRoot=r}Hd.prototype.render=hg.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(i(409));var a=s.current,c=In();P1(a,c,r,s,null,null)},Hd.prototype.unmount=hg.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;P1(r.current,2,null,r,null,null),xd(),s[ye]=null}};function Hd(r){this._internalRoot=r}Hd.prototype.unstable_scheduleHydration=function(r){if(r){var s=j();r={blockedOn:null,target:r,priority:s};for(var a=0;a<Yi.length&&s!==0&&s<Yi[a].priority;a++);Yi.splice(a,0,r),a===0&&B1(r)}};var q1=t.version;if(q1!=="19.1.1")throw Error(i(527,q1,"19.1.1"));J.findDOMNode=function(r){var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(i(188)):(r=Object.keys(r).join(","),Error(i(268,r)));return r=h(s),r=r!==null?p(r):null,r=r===null?null:r.stateNode,r};var kN={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fd.isDisabled&&Fd.supportsFiber)try{hn=Fd.inject(kN),bt=Fd}catch{}}return nc.createRoot=function(r,s){if(!o(r))throw Error(i(299));var a=!1,c="",d=oS,m=aS,S=lS,x=null;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(S=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(x=s.unstable_transitionCallbacks)),s=M1(r,1,!1,null,null,a,c,d,m,S,x,null),r[ye]=s.current,Qm(r),new hg(s)},nc.hydrateRoot=function(r,s,a){if(!o(r))throw Error(i(299));var c=!1,d="",m=oS,S=aS,x=lS,L=null,Q=null;return a!=null&&(a.unstable_strictMode===!0&&(c=!0),a.identifierPrefix!==void 0&&(d=a.identifierPrefix),a.onUncaughtError!==void 0&&(m=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(x=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(L=a.unstable_transitionCallbacks),a.formState!==void 0&&(Q=a.formState)),s=M1(r,1,!0,s,a??null,c,d,m,S,x,L,Q),s.context=L1(null),a=s.current,c=In(),c=al(c),d=Di(c),d.callback=null,Oi(a,d,c),a=c,s.current.lanes=a,As(s,a),Rr(s),r[ye]=s.current,Qm(r),new Hd(s)},nc.version="19.1.1",nc}var ew;function FN(){if(ew)return gg.exports;ew=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),gg.exports=HN(),gg.exports}var qN=FN(),bg={exports:{}},Sg={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tw;function VN(){if(tw)return Sg;tw=1;var e=Eh();function t(h,p){return h===p&&(h!==0||1/h===1/p)||h!==h&&p!==p}var n=typeof Object.is=="function"?Object.is:t,i=e.useSyncExternalStore,o=e.useRef,l=e.useEffect,u=e.useMemo,f=e.useDebugValue;return Sg.useSyncExternalStoreWithSelector=function(h,p,g,y,_){var b=o(null);if(b.current===null){var w={hasValue:!1,value:null};b.current=w}else w=b.current;b=u(function(){function T(k){if(!D){if(D=!0,M=k,k=y(k),_!==void 0&&w.hasValue){var R=w.value;if(_(R,k))return C=R}return C=k}if(R=C,n(M,k))return R;var P=y(k);return _!==void 0&&_(R,P)?(M=k,R):(M=k,C=P)}var D=!1,M,C,A=g===void 0?null:g;return[function(){return T(p())},A===null?void 0:function(){return T(A())}]},[p,g,y,_]);var I=i(h,b[0],b[1]);return l(function(){w.hasValue=!0,w.value=I},[I]),f(I),I},Sg}var nw;function GN(){return nw||(nw=1,bg.exports=VN()),bg.exports}var YN=GN();function $T(e){e()}function WN(){let e=null,t=null;return{clear(){e=null,t=null},notify(){$T(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let i=e;for(;i;)n.push(i),i=i.next;return n},subscribe(n){let i=!0;const o=t={callback:n,next:null,prev:t};return o.prev?o.prev.next=o:e=o,function(){!i||e===null||(i=!1,o.next?o.next.prev=o.prev:t=o.prev,o.prev?o.prev.next=o.next:e=o.next)}}}}var rw={notify(){},get:()=>[]};function QN(e,t){let n,i=rw,o=0,l=!1;function u(I){g();const T=i.subscribe(I);let D=!1;return()=>{D||(D=!0,T(),y())}}function f(){i.notify()}function h(){w.onStateChange&&w.onStateChange()}function p(){return l}function g(){o++,n||(n=e.subscribe(h),i=WN())}function y(){o--,n&&o===0&&(n(),n=void 0,i.clear(),i=rw)}function _(){l||(l=!0,g())}function b(){l&&(l=!1,y())}const w={addNestedSub:u,notifyNestedSubs:f,handleChangeWrapper:h,isSubscribed:p,trySubscribe:_,tryUnsubscribe:b,getListeners:()=>i};return w}var KN=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",XN=KN(),ZN=()=>typeof navigator<"u"&&navigator.product==="ReactNative",JN=ZN(),ek=()=>XN||JN?E.useLayoutEffect:E.useEffect,tk=ek();function iw(e,t){return e===t?e!==0||t!==0||1/e===1/t:e!==e&&t!==t}function Ec(e,t){if(iw(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;const n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(let o=0;o<n.length;o++)if(!Object.prototype.hasOwnProperty.call(t,n[o])||!iw(e[n[o]],t[n[o]]))return!1;return!0}var nk=Symbol.for("react-redux-context"),rk=typeof globalThis<"u"?globalThis:{};function ik(){if(!E.createContext)return{};const e=rk[nk]??=new Map;let t=e.get(E.createContext);return t||(t=E.createContext(null),e.set(E.createContext,t)),t}var us=ik();function sk(e){const{children:t,context:n,serverState:i,store:o}=e,l=E.useMemo(()=>{const h=QN(o);return{store:o,subscription:h,getServerState:i?()=>i:void 0}},[o,i]),u=E.useMemo(()=>o.getState(),[o]);tk(()=>{const{subscription:h}=l;return h.onStateChange=h.notifyNestedSubs,h.trySubscribe(),u!==o.getState()&&h.notifyNestedSubs(),()=>{h.tryUnsubscribe(),h.onStateChange=void 0}},[l,u]);const f=n||us;return E.createElement(f.Provider,{value:l},t)}var ok=sk;function xv(e=us){return function(){return E.useContext(e)}}var zT=xv();function BT(e=us){const t=e===us?zT:xv(e),n=()=>{const{store:i}=t();return i};return Object.assign(n,{withTypes:()=>n}),n}var HT=BT();function ak(e=us){const t=e===us?HT:BT(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var FT=ak(),lk=(e,t)=>e===t;function ck(e=us){const t=e===us?zT:xv(e),n=(i,o={})=>{const{equalityFn:l=lk}=typeof o=="function"?{equalityFn:o}:o,u=t(),{store:f,subscription:h,getServerState:p}=u;E.useRef(!0);const g=E.useCallback({[i.name](_){return i(_)}}[i.name],[i]),y=YN.useSyncExternalStoreWithSelector(h.addNestedSub,f.getState,p||f.getState,g,l);return E.useDebugValue(y),y};return Object.assign(n,{withTypes:()=>n}),n}var qT=ck(),uk=$T;/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var VT=e=>{throw TypeError(e)},dk=(e,t,n)=>t.has(e)||VT("Cannot "+n),wg=(e,t,n)=>(dk(e,t,"read from private field"),n?n.call(e):t.get(e)),fk=(e,t,n)=>t.has(e)?VT("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),sw="popstate";function hk(e={}){function t(o,l){let{pathname:u="/",search:f="",hash:h=""}=vi(o.location.hash.substring(1));return!u.startsWith("/")&&!u.startsWith(".")&&(u="/"+u),Uc("",{pathname:u,search:f,hash:h},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(o,l){let u=o.document.querySelector("base"),f="";if(u&&u.getAttribute("href")){let h=o.location.href,p=h.indexOf("#");f=p===-1?h:h.slice(0,p)}return f+"#"+(typeof l=="string"?l:ds(l))}function i(o,l){It(o.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(l)})`)}return mk(t,n,i,e)}function Ue(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function It(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function pk(){return Math.random().toString(36).substring(2,10)}function ow(e,t){return{usr:e.state,key:e.key,idx:t}}function Uc(e,t,n=null,i){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?vi(t):t,state:n,key:t&&t.key||i||pk()}}function ds({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function vi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let i=e.indexOf("?");i>=0&&(t.search=e.substring(i),e=e.substring(0,i)),e&&(t.pathname=e)}return t}function mk(e,t,n,i={}){let{window:o=document.defaultView,v5Compat:l=!1}=i,u=o.history,f="POP",h=null,p=g();p==null&&(p=0,u.replaceState({...u.state,idx:p},""));function g(){return(u.state||{idx:null}).idx}function y(){f="POP";let T=g(),D=T==null?null:T-p;p=T,h&&h({action:f,location:I.location,delta:D})}function _(T,D){f="PUSH";let M=Uc(I.location,T,D);n&&n(M,T),p=g()+1;let C=ow(M,p),A=I.createHref(M);try{u.pushState(C,"",A)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;o.location.assign(A)}l&&h&&h({action:f,location:I.location,delta:1})}function b(T,D){f="REPLACE";let M=Uc(I.location,T,D);n&&n(M,T),p=g();let C=ow(M,p),A=I.createHref(M);u.replaceState(C,"",A),l&&h&&h({action:f,location:I.location,delta:0})}function w(T){return GT(T)}let I={get action(){return f},get location(){return e(o,u)},listen(T){if(h)throw new Error("A history only accepts one active listener");return o.addEventListener(sw,y),h=T,()=>{o.removeEventListener(sw,y),h=null}},createHref(T){return t(o,T)},createURL:w,encodeLocation(T){let D=w(T);return{pathname:D.pathname,search:D.search,hash:D.hash}},push:_,replace:b,go(T){return u.go(T)}};return I}function GT(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Ue(n,"No window.location.(origin|href) available to create URL");let i=typeof e=="string"?e:ds(e);return i=i.replace(/ $/,"%20"),!t&&i.startsWith("//")&&(i=n+i),new URL(i,n)}var _c,aw=class{constructor(e){if(fk(this,_c,new Map),e)for(let[t,n]of e)this.set(t,n)}get(e){if(wg(this,_c).has(e))return wg(this,_c).get(e);if(e.defaultValue!==void 0)return e.defaultValue;throw new Error("No value found for context")}set(e,t){wg(this,_c).set(e,t)}};_c=new WeakMap;var gk=new Set(["lazy","caseSensitive","path","id","index","children"]);function yk(e){return gk.has(e)}var vk=new Set(["lazy","caseSensitive","path","id","index","middleware","children"]);function _k(e){return vk.has(e)}function bk(e){return e.index===!0}function $c(e,t,n=[],i={},o=!1){return e.map((l,u)=>{let f=[...n,String(u)],h=typeof l.id=="string"?l.id:f.join("-");if(Ue(l.index!==!0||!l.children,"Cannot specify children on an index route"),Ue(o||!i[h],`Found a route id collision on id "${h}".  Route id's must be globally unique within Data Router usages`),bk(l)){let p={...l,...t(l),id:h};return i[h]=p,p}else{let p={...l,...t(l),id:h,children:void 0};return i[h]=p,l.children&&(p.children=$c(l.children,t,f,i,o)),p}})}function Ji(e,t,n="/"){return pf(e,t,n,!1)}function pf(e,t,n,i){let o=typeof t=="string"?vi(t):t,l=Kn(o.pathname||"/",n);if(l==null)return null;let u=YT(e);wk(u);let f=null;for(let h=0;f==null&&h<u.length;++h){let p=kk(l);f=Ok(u[h],p,i)}return f}function Sk(e,t){let{route:n,pathname:i,params:o}=e;return{id:n.id,pathname:i,params:o,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function YT(e,t=[],n=[],i="",o=!1){let l=(u,f,h=o,p)=>{let g={relativePath:p===void 0?u.path||"":p,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(i)&&h)return;Ue(g.relativePath.startsWith(i),`Absolute route path "${g.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(i.length)}let y=Dr([i,g.relativePath]),_=n.concat(g);u.children&&u.children.length>0&&(Ue(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),YT(u.children,t,_,y,h)),!(u.path==null&&!u.index)&&t.push({path:y,score:Ik(y,u.index),routesMeta:_})};return e.forEach((u,f)=>{if(u.path===""||!u.path?.includes("?"))l(u,f);else for(let h of WT(u.path))l(u,f,!0,h)}),t}function WT(e){let t=e.split("/");if(t.length===0)return[];let[n,...i]=t,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let u=WT(i.join("/")),f=[];return f.push(...u.map(h=>h===""?l:[l,h].join("/"))),o&&f.push(...u),f.map(h=>e.startsWith("/")&&h===""?"/":h)}function wk(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Dk(t.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var xk=/^:[\w-]+$/,Ek=3,Tk=2,Ck=1,Rk=10,Ak=-2,lw=e=>e==="*";function Ik(e,t){let n=e.split("/"),i=n.length;return n.some(lw)&&(i+=Ak),t&&(i+=Tk),n.filter(o=>!lw(o)).reduce((o,l)=>o+(xk.test(l)?Ek:l===""?Ck:Rk),i)}function Dk(e,t){return e.length===t.length&&e.slice(0,-1).every((i,o)=>i===t[o])?e[e.length-1]-t[t.length-1]:0}function Ok(e,t,n=!1){let{routesMeta:i}=e,o={},l="/",u=[];for(let f=0;f<i.length;++f){let h=i[f],p=f===i.length-1,g=l==="/"?t:t.slice(l.length)||"/",y=Nf({path:h.relativePath,caseSensitive:h.caseSensitive,end:p},g),_=h.route;if(!y&&p&&n&&!i[i.length-1].route.index&&(y=Nf({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},g)),!y)return null;Object.assign(o,y.params),u.push({params:o,pathname:Dr([l,y.pathname]),pathnameBase:jk(Dr([l,y.pathnameBase])),route:_}),y.pathnameBase!=="/"&&(l=Dr([l,y.pathnameBase]))}return u}function Nf(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,i]=Nk(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let l=o[0],u=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:i.reduce((p,{paramName:g,isOptional:y},_)=>{if(g==="*"){let w=f[_]||"";u=l.slice(0,l.length-w.length).replace(/(.)\/+$/,"$1")}const b=f[_];return y&&!b?p[g]=void 0:p[g]=(b||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:u,pattern:e}}function Nk(e,t=!1,n=!0){It(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let i=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,f,h)=>(i.push({paramName:f,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(i.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),i]}function kk(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return It(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Kn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,i=e.charAt(n);return i&&i!=="/"?null:e.slice(n)||"/"}function Mk({basename:e,pathname:t}){return t==="/"?e:Dr([e,t])}function Lk(e,t="/"){let{pathname:n,search:i="",hash:o=""}=typeof e=="string"?vi(e):e;return{pathname:n?n.startsWith("/")?n:Pk(n,t):t,search:Uk(i),hash:$k(o)}}function Pk(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function xg(e,t,n,i){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function QT(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Th(e){let t=QT(e);return t.map((n,i)=>i===t.length-1?n.pathname:n.pathnameBase)}function Ch(e,t,n,i=!1){let o;typeof e=="string"?o=vi(e):(o={...e},Ue(!o.pathname||!o.pathname.includes("?"),xg("?","pathname","search",o)),Ue(!o.pathname||!o.pathname.includes("#"),xg("#","pathname","hash",o)),Ue(!o.search||!o.search.includes("#"),xg("#","search","hash",o)));let l=e===""||o.pathname==="",u=l?"/":o.pathname,f;if(u==null)f=n;else{let y=t.length-1;if(!i&&u.startsWith("..")){let _=u.split("/");for(;_[0]==="..";)_.shift(),y-=1;o.pathname=_.join("/")}f=y>=0?t[y]:"/"}let h=Lk(o,f),p=u&&u!=="/"&&u.endsWith("/"),g=(l||u===".")&&n.endsWith("/");return!h.pathname.endsWith("/")&&(p||g)&&(h.pathname+="/"),h}var Dr=e=>e.join("/").replace(/\/\/+/g,"/"),jk=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Uk=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,$k=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,kf=class{constructor(e,t,n,i=!1){this.status=e,this.statusText=t||"",this.internal=i,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function zc(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var KT=["POST","PUT","PATCH","DELETE"],zk=new Set(KT),Bk=["GET",...KT],Hk=new Set(Bk),Fk=new Set([301,302,303,307,308]),qk=new Set([307,308]),Eg={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Vk={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},rc={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Gk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ev=e=>Gk.test(e),Yk=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),XT="remix-router-transitions",ZT=Symbol("ResetLoaderData");function Wk(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u";Ue(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let i=e.hydrationRouteProperties||[],o=e.mapRouteProperties||Yk,l={},u=$c(e.routes,o,void 0,l),f,h=e.basename||"/";h.startsWith("/")||(h=`/${h}`);let p=e.dataStrategy||Jk,g={...e.future},y=null,_=new Set,b=null,w=null,I=null,T=e.hydrationData!=null,D=Ji(u,e.history.location,h),M=!1,C=null,A;if(D==null&&!e.patchRoutesOnNavigation){let j=Yn(404,{pathname:e.history.location.pathname}),{matches:Y,route:ee}=qd(u);A=!0,D=Y,C={[ee.id]:j}}else if(D&&!e.hydrationData&&Is(D,u,e.history.location.pathname).active&&(D=null),D)if(D.some(j=>j.route.lazy))A=!1;else if(!D.some(j=>j.route.loader))A=!0;else{let j=e.hydrationData?e.hydrationData.loaderData:null,Y=e.hydrationData?e.hydrationData.errors:null;if(Y){let ee=D.findIndex(ce=>Y[ce.route.id]!==void 0);A=D.slice(0,ee+1).every(ce=>!wy(ce.route,j,Y))}else A=D.every(ee=>!wy(ee.route,j,Y))}else{A=!1,D=[];let j=Is(null,u,e.history.location.pathname);j.active&&j.matches&&(M=!0,D=j.matches)}let k,R={historyAction:e.history.action,location:e.history.location,matches:D,initialized:A,navigation:Eg,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||C,fetchers:new Map,blockers:new Map},P="POP",G=!1,F,H=!1,z=new Map,V=null,B=!1,te=!1,ue=new Set,U=new Map,J=0,ne=-1,ae=new Map,N=new Set,K=new Map,le=new Map,ie=new Set,de=new Map,me,pe=null;function Ae(){if(y=e.history.listen(({action:j,location:Y,delta:ee})=>{if(me){me(),me=void 0;return}It(de.size===0||ee!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ce=Ou({currentLocation:R.location,nextLocation:Y,historyAction:j});if(ce&&ee!=null){let fe=new Promise(ye=>{me=ye});e.history.go(ee*-1),Sr(ce,{state:"blocked",location:Y,proceed(){Sr(ce,{state:"proceeding",proceed:void 0,reset:void 0,location:Y}),fe.then(()=>e.history.go(ee))},reset(){let ye=new Map(R.blockers);ye.set(ce,rc),$e({blockers:ye})}});return}return xt(j,Y)}),n){pM(t,z);let j=()=>mM(t,z);t.addEventListener("pagehide",j),V=()=>t.removeEventListener("pagehide",j)}return R.initialized||xt("POP",R.location,{initialHydration:!0}),k}function be(){y&&y(),V&&V(),_.clear(),F&&F.abort(),R.fetchers.forEach((j,Y)=>Qt(Y)),R.blockers.forEach((j,Y)=>Rs(Y))}function De(j){return _.add(j),()=>_.delete(j)}function $e(j,Y={}){j.matches&&(j.matches=j.matches.map(fe=>{let ye=l[fe.route.id],we=fe.route;return we.element!==ye.element||we.errorElement!==ye.errorElement||we.hydrateFallbackElement!==ye.hydrateFallbackElement?{...fe,route:ye}:fe})),R={...R,...j};let ee=[],ce=[];R.fetchers.forEach((fe,ye)=>{fe.state==="idle"&&(ie.has(ye)?ee.push(ye):ce.push(ye))}),ie.forEach(fe=>{!R.fetchers.has(fe)&&!U.has(fe)&&ee.push(fe)}),[..._].forEach(fe=>fe(R,{deletedFetchers:ee,viewTransitionOpts:Y.viewTransitionOpts,flushSync:Y.flushSync===!0})),ee.forEach(fe=>Qt(fe)),ce.forEach(fe=>R.fetchers.delete(fe))}function _t(j,Y,{flushSync:ee}={}){let ce=R.actionData!=null&&R.navigation.formMethod!=null&&_n(R.navigation.formMethod)&&R.navigation.state==="loading"&&j.state?._isRedirect!==!0,fe;Y.actionData?Object.keys(Y.actionData).length>0?fe=Y.actionData:fe=null:ce?fe=R.actionData:fe=null;let ye=Y.loaderData?vw(R.loaderData,Y.loaderData,Y.matches||[],Y.errors):R.loaderData,we=R.blockers;we.size>0&&(we=new Map(we),we.forEach((_e,Se)=>we.set(Se,rc)));let ve=B?!1:ku(j,Y.matches||R.matches),Ee=G===!0||R.navigation.formMethod!=null&&_n(R.navigation.formMethod)&&j.state?._isRedirect!==!0;f&&(u=f,f=void 0),B||P==="POP"||(P==="PUSH"?e.history.push(j,j.state):P==="REPLACE"&&e.history.replace(j,j.state));let Ce;if(P==="POP"){let _e=z.get(R.location.pathname);_e&&_e.has(j.pathname)?Ce={currentLocation:R.location,nextLocation:j}:z.has(j.pathname)&&(Ce={currentLocation:j,nextLocation:R.location})}else if(H){let _e=z.get(R.location.pathname);_e?_e.add(j.pathname):(_e=new Set([j.pathname]),z.set(R.location.pathname,_e)),Ce={currentLocation:R.location,nextLocation:j}}$e({...Y,actionData:fe,loaderData:ye,historyAction:P,location:j,initialized:!0,navigation:Eg,revalidation:"idle",restoreScrollPosition:ve,preventScrollReset:Ee,blockers:we},{viewTransitionOpts:Ce,flushSync:ee===!0}),P="POP",G=!1,H=!1,B=!1,te=!1,pe?.resolve(),pe=null}async function gt(j,Y){if(typeof j=="number"){e.history.go(j);return}let ee=Sy(R.location,R.matches,h,j,Y?.fromRouteId,Y?.relative),{path:ce,submission:fe,error:ye}=cw(!1,ee,Y),we=R.location,ve=Uc(R.location,ce,Y&&Y.state);ve={...ve,...e.history.encodeLocation(ve)};let Ee=Y&&Y.replace!=null?Y.replace:void 0,Ce="PUSH";Ee===!0?Ce="REPLACE":Ee===!1||fe!=null&&_n(fe.formMethod)&&fe.formAction===R.location.pathname+R.location.search&&(Ce="REPLACE");let _e=Y&&"preventScrollReset"in Y?Y.preventScrollReset===!0:void 0,Se=(Y&&Y.flushSync)===!0,ze=Ou({currentLocation:we,nextLocation:ve,historyAction:Ce});if(ze){Sr(ze,{state:"blocked",location:ve,proceed(){Sr(ze,{state:"proceeding",proceed:void 0,reset:void 0,location:ve}),gt(j,Y)},reset(){let Ze=new Map(R.blockers);Ze.set(ze,rc),$e({blockers:Ze})}});return}await xt(Ce,ve,{submission:fe,pendingError:ye,preventScrollReset:_e,replace:Y&&Y.replace,enableViewTransition:Y&&Y.viewTransition,flushSync:Se})}function Mn(){pe||(pe=gM()),ol(),$e({revalidation:"loading"});let j=pe.promise;return R.navigation.state==="submitting"?j:R.navigation.state==="idle"?(xt(R.historyAction,R.location,{startUninterruptedRevalidation:!0}),j):(xt(P||R.historyAction,R.navigation.location,{overrideNavigation:R.navigation,enableViewTransition:H===!0}),j)}async function xt(j,Y,ee){F&&F.abort(),F=null,P=j,B=(ee&&ee.startUninterruptedRevalidation)===!0,As(R.location,R.matches),G=(ee&&ee.preventScrollReset)===!0,H=(ee&&ee.enableViewTransition)===!0;let ce=f||u,fe=ee&&ee.overrideNavigation,ye=ee?.initialHydration&&R.matches&&R.matches.length>0&&!M?R.matches:Ji(ce,Y,h),we=(ee&&ee.flushSync)===!0;if(ye&&R.initialized&&!te&&aM(R.location,Y)&&!(ee&&ee.submission&&_n(ee.submission.formMethod))){_t(Y,{matches:ye},{flushSync:we});return}let ve=Is(ye,ce,Y.pathname);if(ve.active&&ve.matches&&(ye=ve.matches),!ye){let{error:Et,notFoundMatches:Le,route:it}=ko(Y.pathname);_t(Y,{matches:Le,loaderData:{},errors:{[it.id]:Et}},{flushSync:we});return}F=new AbortController;let Ee=ba(e.history,Y,F.signal,ee&&ee.submission),Ce=e.getContext?await e.getContext():new aw,_e;if(ee&&ee.pendingError)_e=[es(ye).route.id,{type:"error",error:ee.pendingError}];else if(ee&&ee.submission&&_n(ee.submission.formMethod)){let Et=await Ln(Ee,Y,ee.submission,ye,Ce,ve.active,ee&&ee.initialHydration===!0,{replace:ee.replace,flushSync:we});if(Et.shortCircuited)return;if(Et.pendingActionResult){let[Le,it]=Et.pendingActionResult;if(Nn(it)&&zc(it.error)&&it.error.status===404){F=null,_t(Y,{matches:Et.matches,loaderData:{},errors:{[Le]:it.error}});return}}ye=Et.matches||ye,_e=Et.pendingActionResult,fe=Tg(Y,ee.submission),we=!1,ve.active=!1,Ee=ba(e.history,Ee.url,Ee.signal)}let{shortCircuited:Se,matches:ze,loaderData:Ze,errors:yt}=await Pr(Ee,Y,ye,Ce,ve.active,fe,ee&&ee.submission,ee&&ee.fetcherSubmission,ee&&ee.replace,ee&&ee.initialHydration===!0,we,_e);Se||(F=null,_t(Y,{matches:ze||ye,..._w(_e),loaderData:Ze,errors:yt}))}async function Ln(j,Y,ee,ce,fe,ye,we,ve={}){ol();let Ee=fM(Y,ee);if($e({navigation:Ee},{flushSync:ve.flushSync===!0}),ye){let Se=await Ds(ce,Y.pathname,j.signal);if(Se.type==="aborted")return{shortCircuited:!0};if(Se.type==="error"){if(Se.partialMatches.length===0){let{matches:Ze,route:yt}=qd(u);return{matches:Ze,pendingActionResult:[yt.id,{type:"error",error:Se.error}]}}let ze=es(Se.partialMatches).route.id;return{matches:Se.partialMatches,pendingActionResult:[ze,{type:"error",error:Se.error}]}}else if(Se.matches)ce=Se.matches;else{let{notFoundMatches:ze,error:Ze,route:yt}=ko(Y.pathname);return{matches:ze,pendingActionResult:[yt.id,{type:"error",error:Ze}]}}}let Ce,_e=mf(ce,Y);if(!_e.route.action&&!_e.route.lazy)Ce={type:"error",error:Yn(405,{method:j.method,pathname:Y.pathname,routeId:_e.route.id})};else{let Se=Ea(o,l,j,ce,_e,we?[]:i,fe),ze=await Ei(j,Se,fe,null);if(Ce=ze[_e.route.id],!Ce){for(let Ze of ce)if(ze[Ze.route.id]){Ce=ze[Ze.route.id];break}}if(j.signal.aborted)return{shortCircuited:!0}}if(io(Ce)){let Se;return ve&&ve.replace!=null?Se=ve.replace:Se=mw(Ce.response.headers.get("Location"),new URL(j.url),h)===R.location.pathname+R.location.search,await jr(j,Ce,!0,{submission:ee,replace:Se}),{shortCircuited:!0}}if(Nn(Ce)){let Se=es(ce,_e.route.id);return(ve&&ve.replace)!==!0&&(P="PUSH"),{matches:ce,pendingActionResult:[Se.route.id,Ce,_e.route.id]}}return{matches:ce,pendingActionResult:[_e.route.id,Ce]}}async function Pr(j,Y,ee,ce,fe,ye,we,ve,Ee,Ce,_e,Se){let ze=ye||Tg(Y,we),Ze=we||ve||Sw(ze),yt=!B&&!Ce;if(fe){if(yt){let Nt=Wt(Se);$e({navigation:ze,...Nt!==void 0?{actionData:Nt}:{}},{flushSync:_e})}let Pe=await Ds(ee,Y.pathname,j.signal);if(Pe.type==="aborted")return{shortCircuited:!0};if(Pe.type==="error"){if(Pe.partialMatches.length===0){let{matches:Hr,route:pn}=qd(u);return{matches:Hr,loaderData:{},errors:{[pn.id]:Pe.error}}}let Nt=es(Pe.partialMatches).route.id;return{matches:Pe.partialMatches,loaderData:{},errors:{[Nt]:Pe.error}}}else if(Pe.matches)ee=Pe.matches;else{let{error:Nt,notFoundMatches:Hr,route:pn}=ko(Y.pathname);return{matches:Hr,loaderData:{},errors:{[pn.id]:Nt}}}}let Et=f||u,{dsMatches:Le,revalidatingFetchers:it}=uw(j,ce,o,l,e.history,R,ee,Ze,Y,Ce?[]:i,Ce===!0,te,ue,ie,K,N,Et,h,e.patchRoutesOnNavigation!=null,Se);if(ne=++J,!e.dataStrategy&&!Le.some(Pe=>Pe.shouldLoad)&&!Le.some(Pe=>Pe.route.middleware)&&it.length===0){let Pe=Ts();return _t(Y,{matches:ee,loaderData:{},errors:Se&&Nn(Se[1])?{[Se[0]]:Se[1].error}:null,..._w(Se),...Pe?{fetchers:new Map(R.fetchers)}:{}},{flushSync:_e}),{shortCircuited:!0}}if(yt){let Pe={};if(!fe){Pe.navigation=ze;let Nt=Wt(Se);Nt!==void 0&&(Pe.actionData=Nt)}it.length>0&&(Pe.fetchers=sl(it)),$e(Pe,{flushSync:_e})}it.forEach(Pe=>{br(Pe.key),Pe.controller&&U.set(Pe.key,Pe.controller)});let wr=()=>it.forEach(Pe=>br(Pe.key));F&&F.signal.addEventListener("abort",wr);let{loaderResults:xn,fetcherResults:ln}=await Iu(Le,it,j,ce);if(j.signal.aborted)return{shortCircuited:!0};F&&F.signal.removeEventListener("abort",wr),it.forEach(Pe=>U.delete(Pe.key));let Pn=Vd(xn);if(Pn)return await jr(j,Pn.result,!0,{replace:Ee}),{shortCircuited:!0};if(Pn=Vd(ln),Pn)return N.add(Pn.key),await jr(j,Pn.result,!0,{replace:Ee}),{shortCircuited:!0};let{loaderData:Lo,errors:Ti}=yw(R,ee,xn,Se,it,ln);Ce&&R.errors&&(Ti={...R.errors,...Ti});let $r=Ts(),zr=Cs(ne),Br=$r||zr||it.length>0;return{matches:ee,loaderData:Lo,errors:Ti,...Br?{fetchers:new Map(R.fetchers)}:{}}}function Wt(j){if(j&&!Nn(j[1]))return{[j[0]]:j[1].data};if(R.actionData)return Object.keys(R.actionData).length===0?null:R.actionData}function sl(j){return j.forEach(Y=>{let ee=R.fetchers.get(Y.key),ce=ic(void 0,ee?ee.data:void 0);R.fetchers.set(Y.key,ce)}),new Map(R.fetchers)}async function Es(j,Y,ee,ce){br(j);let fe=(ce&&ce.flushSync)===!0,ye=f||u,we=Sy(R.location,R.matches,h,ee,Y,ce?.relative),ve=Ji(ye,we,h),Ee=Is(ve,ye,we);if(Ee.active&&Ee.matches&&(ve=Ee.matches),!ve){bt(j,Y,Yn(404,{pathname:we}),{flushSync:fe});return}let{path:Ce,submission:_e,error:Se}=cw(!0,we,ce);if(Se){bt(j,Y,Se,{flushSync:fe});return}let ze=e.getContext?await e.getContext():new aw,Ze=(ce&&ce.preventScrollReset)===!0;if(_e&&_n(_e.formMethod)){await Oo(j,Y,Ce,ve,ze,Ee.active,fe,Ze,_e);return}K.set(j,{routeId:Y,path:Ce}),await No(j,Y,Ce,ve,ze,Ee.active,fe,Ze,_e)}async function Oo(j,Y,ee,ce,fe,ye,we,ve,Ee){ol(),K.delete(j);let Ce=R.fetchers.get(j);hn(j,hM(Ee,Ce),{flushSync:we});let _e=new AbortController,Se=ba(e.history,ee,_e.signal,Ee);if(ye){let St=await Ds(ce,new URL(Se.url).pathname,Se.signal,j);if(St.type==="aborted")return;if(St.type==="error"){bt(j,Y,St.error,{flushSync:we});return}else if(St.matches)ce=St.matches;else{bt(j,Y,Yn(404,{pathname:ee}),{flushSync:we});return}}let ze=mf(ce,ee);if(!ze.route.action&&!ze.route.lazy){let St=Yn(405,{method:Ee.formMethod,pathname:ee,routeId:Y});bt(j,Y,St,{flushSync:we});return}U.set(j,_e);let Ze=J,yt=Ea(o,l,Se,ce,ze,i,fe),Le=(await Ei(Se,yt,fe,j))[ze.route.id];if(Se.signal.aborted){U.get(j)===_e&&U.delete(j);return}if(ie.has(j)){if(io(Le)||Nn(Le)){hn(j,Xi(void 0));return}}else{if(io(Le))if(U.delete(j),ne>Ze){hn(j,Xi(void 0));return}else return N.add(j),hn(j,ic(Ee)),jr(Se,Le,!1,{fetcherSubmission:Ee,preventScrollReset:ve});if(Nn(Le)){bt(j,Y,Le.error);return}}let it=R.navigation.location||R.location,wr=ba(e.history,it,_e.signal),xn=f||u,ln=R.navigation.state!=="idle"?Ji(xn,R.navigation.location,h):R.matches;Ue(ln,"Didn't find any matches after fetcher action");let Pn=++J;ae.set(j,Pn);let Lo=ic(Ee,Le.data);R.fetchers.set(j,Lo);let{dsMatches:Ti,revalidatingFetchers:$r}=uw(wr,fe,o,l,e.history,R,ln,Ee,it,i,!1,te,ue,ie,K,N,xn,h,e.patchRoutesOnNavigation!=null,[ze.route.id,Le]);$r.filter(St=>St.key!==j).forEach(St=>{let Ci=St.key,Mu=R.fetchers.get(Ci),Lu=ic(void 0,Mu?Mu.data:void 0);R.fetchers.set(Ci,Lu),br(Ci),St.controller&&U.set(Ci,St.controller)}),$e({fetchers:new Map(R.fetchers)});let zr=()=>$r.forEach(St=>br(St.key));_e.signal.addEventListener("abort",zr);let{loaderResults:Br,fetcherResults:Pe}=await Iu(Ti,$r,wr,fe);if(_e.signal.aborted)return;if(_e.signal.removeEventListener("abort",zr),ae.delete(j),U.delete(j),$r.forEach(St=>U.delete(St.key)),R.fetchers.has(j)){let St=Xi(Le.data);R.fetchers.set(j,St)}let Nt=Vd(Br);if(Nt)return jr(wr,Nt.result,!1,{preventScrollReset:ve});if(Nt=Vd(Pe),Nt)return N.add(Nt.key),jr(wr,Nt.result,!1,{preventScrollReset:ve});let{loaderData:Hr,errors:pn}=yw(R,ln,Br,void 0,$r,Pe);Cs(Pn),R.navigation.state==="loading"&&Pn>ne?(Ue(P,"Expected pending action"),F&&F.abort(),_t(R.navigation.location,{matches:ln,loaderData:Hr,errors:pn,fetchers:new Map(R.fetchers)})):($e({errors:pn,loaderData:vw(R.loaderData,Hr,ln,pn),fetchers:new Map(R.fetchers)}),te=!1)}async function No(j,Y,ee,ce,fe,ye,we,ve,Ee){let Ce=R.fetchers.get(j);hn(j,ic(Ee,Ce?Ce.data:void 0),{flushSync:we});let _e=new AbortController,Se=ba(e.history,ee,_e.signal);if(ye){let it=await Ds(ce,new URL(Se.url).pathname,Se.signal,j);if(it.type==="aborted")return;if(it.type==="error"){bt(j,Y,it.error,{flushSync:we});return}else if(it.matches)ce=it.matches;else{bt(j,Y,Yn(404,{pathname:ee}),{flushSync:we});return}}let ze=mf(ce,ee);U.set(j,_e);let Ze=J,yt=Ea(o,l,Se,ce,ze,i,fe),Le=(await Ei(Se,yt,fe,j))[ze.route.id];if(U.get(j)===_e&&U.delete(j),!Se.signal.aborted){if(ie.has(j)){hn(j,Xi(void 0));return}if(io(Le))if(ne>Ze){hn(j,Xi(void 0));return}else{N.add(j),await jr(Se,Le,!1,{preventScrollReset:ve});return}if(Nn(Le)){bt(j,Y,Le.error);return}hn(j,Xi(Le.data))}}async function jr(j,Y,ee,{submission:ce,fetcherSubmission:fe,preventScrollReset:ye,replace:we}={}){Y.response.headers.has("X-Remix-Revalidate")&&(te=!0);let ve=Y.response.headers.get("Location");Ue(ve,"Expected a Location header on the redirect Response"),ve=mw(ve,new URL(j.url),h);let Ee=Uc(R.location,ve,{_isRedirect:!0});if(n){let yt=!1;if(Y.response.headers.has("X-Remix-Reload-Document"))yt=!0;else if(Ev(ve)){const Et=GT(ve,!0);yt=Et.origin!==t.location.origin||Kn(Et.pathname,h)==null}if(yt){we?t.location.replace(ve):t.location.assign(ve);return}}F=null;let Ce=we===!0||Y.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:_e,formAction:Se,formEncType:ze}=R.navigation;!ce&&!fe&&_e&&Se&&ze&&(ce=Sw(R.navigation));let Ze=ce||fe;if(qk.has(Y.response.status)&&Ze&&_n(Ze.formMethod))await xt(Ce,Ee,{submission:{...Ze,formAction:ve},preventScrollReset:ye||G,enableViewTransition:ee?H:void 0});else{let yt=Tg(Ee,ce);await xt(Ce,Ee,{overrideNavigation:yt,fetcherSubmission:fe,preventScrollReset:ye||G,enableViewTransition:ee?H:void 0})}}async function Ei(j,Y,ee,ce){let fe,ye={};try{fe=await tM(p,j,Y,ce,ee,!1)}catch(we){return Y.filter(ve=>ve.shouldLoad).forEach(ve=>{ye[ve.route.id]={type:"error",error:we}}),ye}if(j.signal.aborted)return ye;for(let[we,ve]of Object.entries(fe))if(uM(ve)){let Ee=ve.result;ye[we]={type:"redirect",response:sM(Ee,j,we,Y,h)}}else ye[we]=await iM(ve);return ye}async function Iu(j,Y,ee,ce){let fe=Ei(ee,j,ce,null),ye=Promise.all(Y.map(async Ee=>{if(Ee.matches&&Ee.match&&Ee.request&&Ee.controller){let _e=(await Ei(Ee.request,Ee.matches,ce,Ee.key))[Ee.match.route.id];return{[Ee.key]:_e}}else return Promise.resolve({[Ee.key]:{type:"error",error:Yn(404,{pathname:Ee.path})}})})),we=await fe,ve=(await ye).reduce((Ee,Ce)=>Object.assign(Ee,Ce),{});return{loaderResults:we,fetcherResults:ve}}function ol(){te=!0,K.forEach((j,Y)=>{U.has(Y)&&ue.add(Y),br(Y)})}function hn(j,Y,ee={}){R.fetchers.set(j,Y),$e({fetchers:new Map(R.fetchers)},{flushSync:(ee&&ee.flushSync)===!0})}function bt(j,Y,ee,ce={}){let fe=es(R.matches,Y);Qt(j),$e({errors:{[fe.route.id]:ee},fetchers:new Map(R.fetchers)},{flushSync:(ce&&ce.flushSync)===!0})}function nr(j){return le.set(j,(le.get(j)||0)+1),ie.has(j)&&ie.delete(j),R.fetchers.get(j)||Vk}function Qt(j){let Y=R.fetchers.get(j);U.has(j)&&!(Y&&Y.state==="loading"&&ae.has(j))&&br(j),K.delete(j),ae.delete(j),N.delete(j),ie.delete(j),ue.delete(j),R.fetchers.delete(j)}function up(j){let Y=(le.get(j)||0)-1;Y<=0?(le.delete(j),ie.add(j)):le.set(j,Y),$e({fetchers:new Map(R.fetchers)})}function br(j){let Y=U.get(j);Y&&(Y.abort(),U.delete(j))}function Du(j){for(let Y of j){let ee=nr(Y),ce=Xi(ee.data);R.fetchers.set(Y,ce)}}function Ts(){let j=[],Y=!1;for(let ee of N){let ce=R.fetchers.get(ee);Ue(ce,`Expected fetcher: ${ee}`),ce.state==="loading"&&(N.delete(ee),j.push(ee),Y=!0)}return Du(j),Y}function Cs(j){let Y=[];for(let[ee,ce]of ae)if(ce<j){let fe=R.fetchers.get(ee);Ue(fe,`Expected fetcher: ${ee}`),fe.state==="loading"&&(br(ee),ae.delete(ee),Y.push(ee))}return Du(Y),Y.length>0}function Ur(j,Y){let ee=R.blockers.get(j)||rc;return de.get(j)!==Y&&de.set(j,Y),ee}function Rs(j){R.blockers.delete(j),de.delete(j)}function Sr(j,Y){let ee=R.blockers.get(j)||rc;Ue(ee.state==="unblocked"&&Y.state==="blocked"||ee.state==="blocked"&&Y.state==="blocked"||ee.state==="blocked"&&Y.state==="proceeding"||ee.state==="blocked"&&Y.state==="unblocked"||ee.state==="proceeding"&&Y.state==="unblocked",`Invalid blocker state transition: ${ee.state} -> ${Y.state}`);let ce=new Map(R.blockers);ce.set(j,Y),$e({blockers:ce})}function Ou({currentLocation:j,nextLocation:Y,historyAction:ee}){if(de.size===0)return;de.size>1&&It(!1,"A router only supports one blocker at a time");let ce=Array.from(de.entries()),[fe,ye]=ce[ce.length-1],we=R.blockers.get(fe);if(!(we&&we.state==="proceeding")&&ye({currentLocation:j,nextLocation:Y,historyAction:ee}))return fe}function ko(j){let Y=Yn(404,{pathname:j}),ee=f||u,{matches:ce,route:fe}=qd(ee);return{notFoundMatches:ce,route:fe,error:Y}}function Nu(j,Y,ee){if(b=j,I=Y,w=ee||null,!T&&R.navigation===Eg){T=!0;let ce=ku(R.location,R.matches);ce!=null&&$e({restoreScrollPosition:ce})}return()=>{b=null,I=null,w=null}}function Mo(j,Y){return w&&w(j,Y.map(ce=>Sk(ce,R.loaderData)))||j.key}function As(j,Y){if(b&&I){let ee=Mo(j,Y);b[ee]=I()}}function ku(j,Y){if(b){let ee=Mo(j,Y),ce=b[ee];if(typeof ce=="number")return ce}return null}function Is(j,Y,ee){if(e.patchRoutesOnNavigation)if(j){if(Object.keys(j[0].params).length>0)return{active:!0,matches:pf(Y,ee,h,!0)}}else return{active:!0,matches:pf(Y,ee,h,!0)||[]};return{active:!1,matches:null}}async function Ds(j,Y,ee,ce){if(!e.patchRoutesOnNavigation)return{type:"success",matches:j};let fe=j;for(;;){let ye=f==null,we=f||u,ve=l;try{await e.patchRoutesOnNavigation({signal:ee,path:Y,matches:fe,fetcherKey:ce,patch:(_e,Se)=>{ee.aborted||dw(_e,Se,we,ve,o,!1)}})}catch(_e){return{type:"error",error:_e,partialMatches:fe}}finally{ye&&!ee.aborted&&(u=[...u])}if(ee.aborted)return{type:"aborted"};let Ee=Ji(we,Y,h);if(Ee)return{type:"success",matches:Ee};let Ce=pf(we,Y,h,!0);if(!Ce||fe.length===Ce.length&&fe.every((_e,Se)=>_e.route.id===Ce[Se].route.id))return{type:"success",matches:null};fe=Ce}}function al(j){l={},f=$c(j,o,void 0,l)}function ll(j,Y,ee=!1){let ce=f==null;dw(j,Y,f||u,l,o,ee),ce&&(u=[...u],$e({}))}return k={get basename(){return h},get future(){return g},get state(){return R},get routes(){return u},get window(){return t},initialize:Ae,subscribe:De,enableScrollRestoration:Nu,navigate:gt,fetch:Es,revalidate:Mn,createHref:j=>e.history.createHref(j),encodeLocation:j=>e.history.encodeLocation(j),getFetcher:nr,deleteFetcher:up,dispose:be,getBlocker:Ur,deleteBlocker:Rs,patchRoutes:ll,_internalFetchControllers:U,_internalSetRoutes:al,_internalSetStateDoNotUseOrYouWillBreakYourApp(j){$e(j)}},k}function Qk(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Sy(e,t,n,i,o,l){let u,f;if(o){u=[];for(let p of t)if(u.push(p),p.route.id===o){f=p;break}}else u=t,f=t[t.length-1];let h=Ch(i||".",Th(u),Kn(e.pathname,n)||e.pathname,l==="path");if(i==null&&(h.search=e.search,h.hash=e.hash),(i==null||i===""||i===".")&&f){let p=Tv(h.search);if(f.route.index&&!p)h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index";else if(!f.route.index&&p){let g=new URLSearchParams(h.search),y=g.getAll("index");g.delete("index"),y.filter(b=>b).forEach(b=>g.append("index",b));let _=g.toString();h.search=_?`?${_}`:""}}return n!=="/"&&(h.pathname=Mk({basename:n,pathname:h.pathname})),ds(h)}function cw(e,t,n){if(!n||!Qk(n))return{path:t};if(n.formMethod&&!dM(n.formMethod))return{path:t,error:Yn(405,{method:n.formMethod})};let i=()=>({path:t,error:Yn(400,{type:"invalid-body"})}),l=(n.formMethod||"get").toUpperCase(),u=iC(t);if(n.body!==void 0){if(n.formEncType==="text/plain"){if(!_n(l))return i();let y=typeof n.body=="string"?n.body:n.body instanceof FormData||n.body instanceof URLSearchParams?Array.from(n.body.entries()).reduce((_,[b,w])=>`${_}${b}=${w}
`,""):String(n.body);return{path:t,submission:{formMethod:l,formAction:u,formEncType:n.formEncType,formData:void 0,json:void 0,text:y}}}else if(n.formEncType==="application/json"){if(!_n(l))return i();try{let y=typeof n.body=="string"?JSON.parse(n.body):n.body;return{path:t,submission:{formMethod:l,formAction:u,formEncType:n.formEncType,formData:void 0,json:y,text:void 0}}}catch{return i()}}}Ue(typeof FormData=="function","FormData is not available in this environment");let f,h;if(n.formData)f=Ey(n.formData),h=n.formData;else if(n.body instanceof FormData)f=Ey(n.body),h=n.body;else if(n.body instanceof URLSearchParams)f=n.body,h=gw(f);else if(n.body==null)f=new URLSearchParams,h=new FormData;else try{f=new URLSearchParams(n.body),h=gw(f)}catch{return i()}let p={formMethod:l,formAction:u,formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:h,json:void 0,text:void 0};if(_n(p.formMethod))return{path:t,submission:p};let g=vi(t);return e&&g.search&&Tv(g.search)&&f.append("index",""),g.search=`?${f}`,{path:ds(g),submission:p}}function uw(e,t,n,i,o,l,u,f,h,p,g,y,_,b,w,I,T,D,M,C){let A=C?Nn(C[1])?C[1].error:C[1].data:void 0,k=o.createURL(l.location),R=o.createURL(h),P;if(g&&l.errors){let B=Object.keys(l.errors)[0];P=u.findIndex(te=>te.route.id===B)}else if(C&&Nn(C[1])){let B=C[0];P=u.findIndex(te=>te.route.id===B)-1}let G=C?C[1].statusCode:void 0,F=G&&G>=400,H={currentUrl:k,currentParams:l.matches[0]?.params||{},nextUrl:R,nextParams:u[0].params,...f,actionResult:A,actionStatus:G},z=u.map((B,te)=>{let{route:ue}=B,U=null;if(P!=null&&te>P?U=!1:ue.lazy?U=!0:ue.loader==null?U=!1:g?U=wy(ue,l.loaderData,l.errors):Kk(l.loaderData,l.matches[te],B)&&(U=!0),U!==null)return xy(n,i,e,B,p,t,U);let J=F?!1:y||k.pathname+k.search===R.pathname+R.search||k.search!==R.search||Xk(l.matches[te],B),ne={...H,defaultShouldRevalidate:J},ae=Mf(B,ne);return xy(n,i,e,B,p,t,ae,ne)}),V=[];return w.forEach((B,te)=>{if(g||!u.some(le=>le.route.id===B.routeId)||b.has(te))return;let ue=l.fetchers.get(te),U=ue&&ue.state!=="idle"&&ue.data===void 0,J=Ji(T,B.path,D);if(!J){if(M&&U)return;V.push({key:te,routeId:B.routeId,path:B.path,matches:null,match:null,request:null,controller:null});return}if(I.has(te))return;let ne=mf(J,B.path),ae=new AbortController,N=ba(o,B.path,ae.signal),K=null;if(_.has(te))_.delete(te),K=Ea(n,i,N,J,ne,p,t);else if(U)y&&(K=Ea(n,i,N,J,ne,p,t));else{let le={...H,defaultShouldRevalidate:F?!1:y};Mf(ne,le)&&(K=Ea(n,i,N,J,ne,p,t,le))}K&&V.push({key:te,routeId:B.routeId,path:B.path,matches:K,match:ne,request:N,controller:ae})}),{dsMatches:z,revalidatingFetchers:V}}function wy(e,t,n){if(e.lazy)return!0;if(!e.loader)return!1;let i=t!=null&&e.id in t,o=n!=null&&n[e.id]!==void 0;return!i&&o?!1:typeof e.loader=="function"&&e.loader.hydrate===!0?!0:!i&&!o}function Kk(e,t,n){let i=!t||n.route.id!==t.route.id,o=!e.hasOwnProperty(n.route.id);return i||o}function Xk(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Mf(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}function dw(e,t,n,i,o,l){let u;if(e){let p=i[e];Ue(p,`No route found to patch children into: routeId = ${e}`),p.children||(p.children=[]),u=p.children}else u=n;let f=[],h=[];if(t.forEach(p=>{let g=u.find(y=>JT(p,y));g?h.push({existingRoute:g,newRoute:p}):f.push(p)}),f.length>0){let p=$c(f,o,[e||"_","patch",String(u?.length||"0")],i);u.push(...p)}if(l&&h.length>0)for(let p=0;p<h.length;p++){let{existingRoute:g,newRoute:y}=h[p],_=g,[b]=$c([y],o,[],{},!0);Object.assign(_,{element:b.element?b.element:_.element,errorElement:b.errorElement?b.errorElement:_.errorElement,hydrateFallbackElement:b.hydrateFallbackElement?b.hydrateFallbackElement:_.hydrateFallbackElement})}}function JT(e,t){return"id"in e&&"id"in t&&e.id===t.id?!0:e.index===t.index&&e.path===t.path&&e.caseSensitive===t.caseSensitive?(!e.children||e.children.length===0)&&(!t.children||t.children.length===0)?!0:e.children.every((n,i)=>t.children?.some(o=>JT(n,o))):!1}var fw=new WeakMap,eC=({key:e,route:t,manifest:n,mapRouteProperties:i})=>{let o=n[t.id];if(Ue(o,"No route found in manifest"),!o.lazy||typeof o.lazy!="object")return;let l=o.lazy[e];if(!l)return;let u=fw.get(o);u||(u={},fw.set(o,u));let f=u[e];if(f)return f;let h=(async()=>{let p=yk(e),y=o[e]!==void 0&&e!=="hasErrorBoundary";if(p)It(!p,"Route property "+e+" is not a supported lazy route property. This property will be ignored."),u[e]=Promise.resolve();else if(y)It(!1,`Route "${o.id}" has a static property "${e}" defined. The lazy property will be ignored.`);else{let _=await l();_!=null&&(Object.assign(o,{[e]:_}),Object.assign(o,i(o)))}typeof o.lazy=="object"&&(o.lazy[e]=void 0,Object.values(o.lazy).every(_=>_===void 0)&&(o.lazy=void 0))})();return u[e]=h,h},hw=new WeakMap;function Zk(e,t,n,i,o){let l=n[e.id];if(Ue(l,"No route found in manifest"),!e.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof e.lazy=="function"){let g=hw.get(l);if(g)return{lazyRoutePromise:g,lazyHandlerPromise:g};let y=(async()=>{Ue(typeof e.lazy=="function","No lazy route function found");let _=await e.lazy(),b={};for(let w in _){let I=_[w];if(I===void 0)continue;let T=_k(w),M=l[w]!==void 0&&w!=="hasErrorBoundary";T?It(!T,"Route property "+w+" is not a supported property to be returned from a lazy route function. This property will be ignored."):M?It(!M,`Route "${l.id}" has a static property "${w}" defined but its lazy function is also returning a value for this property. The lazy route property "${w}" will be ignored.`):b[w]=I}Object.assign(l,b),Object.assign(l,{...i(l),lazy:void 0})})();return hw.set(l,y),y.catch(()=>{}),{lazyRoutePromise:y,lazyHandlerPromise:y}}let u=Object.keys(e.lazy),f=[],h;for(let g of u){if(o&&o.includes(g))continue;let y=eC({key:g,route:e,manifest:n,mapRouteProperties:i});y&&(f.push(y),g===t&&(h=y))}let p=f.length>0?Promise.all(f).then(()=>{}):void 0;return p?.catch(()=>{}),h?.catch(()=>{}),{lazyRoutePromise:p,lazyHandlerPromise:h}}async function pw(e){let t=e.matches.filter(o=>o.shouldLoad),n={};return(await Promise.all(t.map(o=>o.resolve()))).forEach((o,l)=>{n[t[l].route.id]=o}),n}async function Jk(e){return e.matches.some(t=>t.route.middleware)?tC(e,()=>pw(e)):pw(e)}function tC(e,t){return eM(e,t,i=>i,lM,n);function n(i,o,l){if(l)return Promise.resolve(Object.assign(l.value,{[o]:{type:"error",result:i}}));{let{matches:u}=e,f=Math.min(u.findIndex(p=>p.route.id===o)||0,u.findIndex(p=>p.unstable_shouldCallHandler())||0),h=es(u,u[f].route.id).route.id;return Promise.resolve({[h]:{type:"error",result:i}})}}}async function eM(e,t,n,i,o){let{matches:l,request:u,params:f,context:h}=e,p=l.flatMap(y=>y.route.middleware?y.route.middleware.map(_=>[y.route.id,_]):[]);return await nC({request:u,params:f,context:h},p,t,n,i,o)}async function nC(e,t,n,i,o,l,u=0){let{request:f}=e;if(f.signal.aborted)throw f.signal.reason??new Error(`Request aborted: ${f.method} ${f.url}`);let h=t[u];if(!h)return await n();let[p,g]=h,y,_=async()=>{if(y)throw new Error("You may only call `next()` once per middleware");try{return y={value:await nC(e,t,n,i,o,l,u+1)},y.value}catch(b){return y={value:await l(b,p,y)},y.value}};try{let b=await g(e,_),w=b!=null?i(b):void 0;return o(w)?w:y?w??y.value:(y={value:await _()},y.value)}catch(b){return await l(b,p,y)}}function rC(e,t,n,i,o){let l=eC({key:"middleware",route:i.route,manifest:t,mapRouteProperties:e}),u=Zk(i.route,_n(n.method)?"action":"loader",t,e,o);return{middleware:l,route:u.lazyRoutePromise,handler:u.lazyHandlerPromise}}function xy(e,t,n,i,o,l,u,f=null){let h=!1,p=rC(e,t,n,i,o);return{...i,_lazyPromises:p,shouldLoad:u,unstable_shouldRevalidateArgs:f,unstable_shouldCallHandler(g){return h=!0,f?typeof g=="boolean"?Mf(i,{...f,defaultShouldRevalidate:g}):Mf(i,f):u},resolve(g){return h||u||g&&!_n(n.method)&&(i.route.lazy||i.route.loader)?nM({request:n,match:i,lazyHandlerPromise:p?.handler,lazyRoutePromise:p?.route,handlerOverride:g,scopedContext:l}):Promise.resolve({type:"data",result:void 0})}}}function Ea(e,t,n,i,o,l,u,f=null){return i.map(h=>h.route.id!==o.route.id?{...h,shouldLoad:!1,unstable_shouldRevalidateArgs:f,unstable_shouldCallHandler:()=>!1,_lazyPromises:rC(e,t,n,h,l),resolve:()=>Promise.resolve({type:"data",result:void 0})}:xy(e,t,n,h,l,u,!0,f))}async function tM(e,t,n,i,o,l){n.some(p=>p._lazyPromises?.middleware)&&await Promise.all(n.map(p=>p._lazyPromises?.middleware));let u={request:t,params:n[0].params,context:o,matches:n},h=await e({...u,fetcherKey:i,runClientMiddleware:p=>{let g=u;return tC(g,()=>p({...g,fetcherKey:i,runClientMiddleware:()=>{throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler")}}))}});try{await Promise.all(n.flatMap(p=>[p._lazyPromises?.handler,p._lazyPromises?.route]))}catch{}return h}async function nM({request:e,match:t,lazyHandlerPromise:n,lazyRoutePromise:i,handlerOverride:o,scopedContext:l}){let u,f,h=_n(e.method),p=h?"action":"loader",g=y=>{let _,b=new Promise((T,D)=>_=D);f=()=>_(),e.signal.addEventListener("abort",f);let w=T=>typeof y!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${p}" [routeId: ${t.route.id}]`)):y({request:e,params:t.params,context:l},...T!==void 0?[T]:[]),I=(async()=>{try{return{type:"data",result:await(o?o(D=>w(D)):w())}}catch(T){return{type:"error",result:T}}})();return Promise.race([I,b])};try{let y=h?t.route.action:t.route.loader;if(n||i)if(y){let _,[b]=await Promise.all([g(y).catch(w=>{_=w}),n,i]);if(_!==void 0)throw _;u=b}else{await n;let _=h?t.route.action:t.route.loader;if(_)[u]=await Promise.all([g(_),i]);else if(p==="action"){let b=new URL(e.url),w=b.pathname+b.search;throw Yn(405,{method:e.method,pathname:w,routeId:t.route.id})}else return{type:"data",result:void 0}}else if(y)u=await g(y);else{let _=new URL(e.url),b=_.pathname+_.search;throw Yn(404,{pathname:b})}}catch(y){return{type:"error",result:y}}finally{f&&e.signal.removeEventListener("abort",f)}return u}async function rM(e){let t=e.headers.get("Content-Type");return t&&/\bapplication\/json\b/.test(t)?e.body==null?null:e.json():e.text()}async function iM(e){let{result:t,type:n}=e;if(sC(t)){let i;try{i=await rM(t)}catch(o){return{type:"error",error:o}}return n==="error"?{type:"error",error:new kf(t.status,t.statusText,i),statusCode:t.status,headers:t.headers}:{type:"data",data:i,statusCode:t.status,headers:t.headers}}return n==="error"?bw(t)?t.data instanceof Error?{type:"error",error:t.data,statusCode:t.init?.status,headers:t.init?.headers?new Headers(t.init.headers):void 0}:{type:"error",error:new kf(t.init?.status||500,void 0,t.data),statusCode:zc(t)?t.status:void 0,headers:t.init?.headers?new Headers(t.init.headers):void 0}:{type:"error",error:t,statusCode:zc(t)?t.status:void 0}:bw(t)?{type:"data",data:t.data,statusCode:t.init?.status,headers:t.init?.headers?new Headers(t.init.headers):void 0}:{type:"data",data:t}}function sM(e,t,n,i,o){let l=e.headers.get("Location");if(Ue(l,"Redirects returned/thrown from loaders/actions must have a Location header"),!Ev(l)){let u=i.slice(0,i.findIndex(f=>f.route.id===n)+1);l=Sy(new URL(t.url),u,o,l),e.headers.set("Location",l)}return e}function mw(e,t,n){if(Ev(e)){let i=e,o=i.startsWith("//")?new URL(t.protocol+i):new URL(i),l=Kn(o.pathname,n)!=null;if(o.origin===t.origin&&l)return o.pathname+o.search+o.hash}return e}function ba(e,t,n,i){let o=e.createURL(iC(t)).toString(),l={signal:n};if(i&&_n(i.formMethod)){let{formMethod:u,formEncType:f}=i;l.method=u.toUpperCase(),f==="application/json"?(l.headers=new Headers({"Content-Type":f}),l.body=JSON.stringify(i.json)):f==="text/plain"?l.body=i.text:f==="application/x-www-form-urlencoded"&&i.formData?l.body=Ey(i.formData):l.body=i.formData}return new Request(o,l)}function Ey(e){let t=new URLSearchParams;for(let[n,i]of e.entries())t.append(n,typeof i=="string"?i:i.name);return t}function gw(e){let t=new FormData;for(let[n,i]of e.entries())t.append(n,i);return t}function oM(e,t,n,i=!1,o=!1){let l={},u=null,f,h=!1,p={},g=n&&Nn(n[1])?n[1].error:void 0;return e.forEach(y=>{if(!(y.route.id in t))return;let _=y.route.id,b=t[_];if(Ue(!io(b),"Cannot handle redirect results in processLoaderData"),Nn(b)){let w=b.error;if(g!==void 0&&(w=g,g=void 0),u=u||{},o)u[_]=w;else{let I=es(e,_);u[I.route.id]==null&&(u[I.route.id]=w)}i||(l[_]=ZT),h||(h=!0,f=zc(b.error)?b.error.status:500),b.headers&&(p[_]=b.headers)}else l[_]=b.data,b.statusCode&&b.statusCode!==200&&!h&&(f=b.statusCode),b.headers&&(p[_]=b.headers)}),g!==void 0&&n&&(u={[n[0]]:g},n[2]&&(l[n[2]]=void 0)),{loaderData:l,errors:u,statusCode:f||200,loaderHeaders:p}}function yw(e,t,n,i,o,l){let{loaderData:u,errors:f}=oM(t,n,i);return o.filter(h=>!h.matches||h.matches.some(p=>p.shouldLoad)).forEach(h=>{let{key:p,match:g,controller:y}=h;if(y&&y.signal.aborted)return;let _=l[p];if(Ue(_,"Did not find corresponding fetcher result"),Nn(_)){let b=es(e.matches,g?.route.id);f&&f[b.route.id]||(f={...f,[b.route.id]:_.error}),e.fetchers.delete(p)}else if(io(_))Ue(!1,"Unhandled fetcher revalidation redirect");else{let b=Xi(_.data);e.fetchers.set(p,b)}}),{loaderData:u,errors:f}}function vw(e,t,n,i){let o=Object.entries(t).filter(([,l])=>l!==ZT).reduce((l,[u,f])=>(l[u]=f,l),{});for(let l of n){let u=l.route.id;if(!t.hasOwnProperty(u)&&e.hasOwnProperty(u)&&l.route.loader&&(o[u]=e[u]),i&&i.hasOwnProperty(u))break}return o}function _w(e){return e?Nn(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function es(e,t){return(t?e.slice(0,e.findIndex(i=>i.route.id===t)+1):[...e]).reverse().find(i=>i.route.hasErrorBoundary===!0)||e[0]}function qd(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Yn(e,{pathname:t,routeId:n,method:i,type:o,message:l}={}){let u="Unknown Server Error",f="Unknown @remix-run/router error";return e===400?(u="Bad Request",i&&t&&n?f=`You made a ${i} request to "${t}" but did not provide a \`loader\` for route "${n}", so there is no way to handle the request.`:o==="invalid-body"&&(f="Unable to encode submission body")):e===403?(u="Forbidden",f=`Route "${n}" does not match URL "${t}"`):e===404?(u="Not Found",f=`No route matches URL "${t}"`):e===405&&(u="Method Not Allowed",i&&t&&n?f=`You made a ${i.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${n}", so there is no way to handle the request.`:i&&(f=`Invalid request method "${i.toUpperCase()}"`)),new kf(e||500,u,new Error(f),!0)}function Vd(e){let t=Object.entries(e);for(let n=t.length-1;n>=0;n--){let[i,o]=t[n];if(io(o))return{key:i,result:o}}}function iC(e){let t=typeof e=="string"?vi(e):e;return ds({...t,hash:""})}function aM(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function lM(e){return e!=null&&typeof e=="object"&&Object.entries(e).every(([t,n])=>typeof t=="string"&&cM(n))}function cM(e){return e!=null&&typeof e=="object"&&"type"in e&&"result"in e&&(e.type==="data"||e.type==="error")}function uM(e){return sC(e.result)&&Fk.has(e.result.status)}function Nn(e){return e.type==="error"}function io(e){return(e&&e.type)==="redirect"}function bw(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function sC(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function dM(e){return Hk.has(e.toUpperCase())}function _n(e){return zk.has(e.toUpperCase())}function Tv(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function mf(e,t){let n=typeof t=="string"?vi(t).search:t.search;if(e[e.length-1].route.index&&Tv(n||""))return e[e.length-1];let i=QT(e);return i[i.length-1]}function Sw(e){let{formMethod:t,formAction:n,formEncType:i,text:o,formData:l,json:u}=e;if(!(!t||!n||!i)){if(o!=null)return{formMethod:t,formAction:n,formEncType:i,formData:void 0,json:void 0,text:o};if(l!=null)return{formMethod:t,formAction:n,formEncType:i,formData:l,json:void 0,text:void 0};if(u!==void 0)return{formMethod:t,formAction:n,formEncType:i,formData:void 0,json:u,text:void 0}}}function Tg(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function fM(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function ic(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function hM(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function Xi(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function pM(e,t){try{let n=e.sessionStorage.getItem(XT);if(n){let i=JSON.parse(n);for(let[o,l]of Object.entries(i||{}))l&&Array.isArray(l)&&t.set(o,new Set(l||[]))}}catch{}}function mM(e,t){if(t.size>0){let n={};for(let[i,o]of t)n[i]=[...o];try{e.sessionStorage.setItem(XT,JSON.stringify(n))}catch(i){It(!1,`Failed to save applied view transitions in sessionStorage (${i}).`)}}}function gM(){let e,t,n=new Promise((i,o)=>{e=async l=>{i(l);try{await n}catch{}},t=async l=>{o(l);try{await n}catch{}}});return{promise:n,resolve:e,reject:t}}var To=E.createContext(null);To.displayName="DataRouter";var du=E.createContext(null);du.displayName="DataRouterState";E.createContext(!1);var Cv=E.createContext({isTransitioning:!1});Cv.displayName="ViewTransition";var oC=E.createContext(new Map);oC.displayName="Fetchers";var yM=E.createContext(null);yM.displayName="Await";var _r=E.createContext(null);_r.displayName="Navigation";var Rh=E.createContext(null);Rh.displayName="Location";var er=E.createContext({outlet:null,matches:[],isDataRoute:!1});er.displayName="Route";var Rv=E.createContext(null);Rv.displayName="RouteError";function vM(e,{relative:t}={}){Ue(Ga(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=E.useContext(_r),{hash:o,pathname:l,search:u}=fu(e,{relative:t}),f=l;return n!=="/"&&(f=l==="/"?n:Dr([n,l])),i.createHref({pathname:f,search:u,hash:o})}function Ga(){return E.useContext(Rh)!=null}function _i(){return Ue(Ga(),"useLocation() may be used only in the context of a <Router> component."),E.useContext(Rh).location}var aC="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function lC(e){E.useContext(_r).static||E.useLayoutEffect(e)}function Co(){let{isDataRoute:e}=E.useContext(er);return e?MM():_M()}function _M(){Ue(Ga(),"useNavigate() may be used only in the context of a <Router> component.");let e=E.useContext(To),{basename:t,navigator:n}=E.useContext(_r),{matches:i}=E.useContext(er),{pathname:o}=_i(),l=JSON.stringify(Th(i)),u=E.useRef(!1);return lC(()=>{u.current=!0}),E.useCallback((h,p={})=>{if(It(u.current,aC),!u.current)return;if(typeof h=="number"){n.go(h);return}let g=Ch(h,JSON.parse(l),o,p.relative==="path");e==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:Dr([t,g.pathname])),(p.replace?n.replace:n.push)(g,p.state,p)},[t,n,l,o,e])}var bM=E.createContext(null);function SM(e){let t=E.useContext(er).outlet;return t&&E.createElement(bM.Provider,{value:e},t)}function wM(){let{matches:e}=E.useContext(er),t=e[e.length-1];return t?t.params:{}}function fu(e,{relative:t}={}){let{matches:n}=E.useContext(er),{pathname:i}=_i(),o=JSON.stringify(Th(n));return E.useMemo(()=>Ch(e,JSON.parse(o),i,t==="path"),[e,o,i,t])}function xM(e,t,n,i,o){Ue(Ga(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=E.useContext(_r),{matches:u}=E.useContext(er),f=u[u.length-1],h=f?f.params:{},p=f?f.pathname:"/",g=f?f.pathnameBase:"/",y=f&&f.route;{let M=y&&y.path||"";cC(p,!y||M.endsWith("*")||M.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${M==="/"?"*":`${M}/*`}">.`)}let _=_i(),b;b=_;let w=b.pathname||"/",I=w;if(g!=="/"){let M=g.replace(/^\//,"").split("/");I="/"+w.replace(/^\//,"").split("/").slice(M.length).join("/")}let T=Ji(e,{pathname:I});return It(y||T!=null,`No routes matched location "${b.pathname}${b.search}${b.hash}" `),It(T==null||T[T.length-1].route.element!==void 0||T[T.length-1].route.Component!==void 0||T[T.length-1].route.lazy!==void 0,`Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),AM(T&&T.map(M=>Object.assign({},M,{params:Object.assign({},h,M.params),pathname:Dr([g,l.encodeLocation?l.encodeLocation(M.pathname).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?g:Dr([g,l.encodeLocation?l.encodeLocation(M.pathnameBase).pathname:M.pathnameBase])})),u,n,i,o)}function EM(){let e=kM(),t=zc(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},u=null;return console.error("Error handled by React Router default ErrorBoundary:",e),u=E.createElement(E.Fragment,null,E.createElement("p",null,"💿 Hey developer 👋"),E.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",E.createElement("code",{style:l},"ErrorBoundary")," or"," ",E.createElement("code",{style:l},"errorElement")," prop on your route.")),E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:o},n):null,u)}var TM=E.createElement(EM,null),CM=class extends E.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.unstable_onError?this.props.unstable_onError(e,t):console.error("React Router caught the following error during render",e)}render(){return this.state.error!==void 0?E.createElement(er.Provider,{value:this.props.routeContext},E.createElement(Rv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function RM({routeContext:e,match:t,children:n}){let i=E.useContext(To);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),E.createElement(er.Provider,{value:e},n)}function AM(e,t=[],n=null,i=null,o=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,u=n?.errors;if(u!=null){let p=l.findIndex(g=>g.route.id&&u?.[g.route.id]!==void 0);Ue(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,p+1))}let f=!1,h=-1;if(n)for(let p=0;p<l.length;p++){let g=l[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(h=p),g.route.id){let{loaderData:y,errors:_}=n,b=g.route.loader&&!y.hasOwnProperty(g.route.id)&&(!_||_[g.route.id]===void 0);if(g.route.lazy||b){f=!0,h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}return l.reduceRight((p,g,y)=>{let _,b=!1,w=null,I=null;n&&(_=u&&g.route.id?u[g.route.id]:void 0,w=g.route.errorElement||TM,f&&(h<0&&y===0?(cC("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,I=null):h===y&&(b=!0,I=g.route.hydrateFallbackElement||null)));let T=t.concat(l.slice(0,y+1)),D=()=>{let M;return _?M=w:b?M=I:g.route.Component?M=E.createElement(g.route.Component,null):g.route.element?M=g.route.element:M=p,E.createElement(RM,{match:g,routeContext:{outlet:p,matches:T,isDataRoute:n!=null},children:M})};return n&&(g.route.ErrorBoundary||g.route.errorElement||y===0)?E.createElement(CM,{location:n.location,revalidation:n.revalidation,component:w,error:_,children:D(),routeContext:{outlet:null,matches:T,isDataRoute:!0},unstable_onError:i}):D()},null)}function Av(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function IM(e){let t=E.useContext(To);return Ue(t,Av(e)),t}function DM(e){let t=E.useContext(du);return Ue(t,Av(e)),t}function OM(e){let t=E.useContext(er);return Ue(t,Av(e)),t}function Iv(e){let t=OM(e),n=t.matches[t.matches.length-1];return Ue(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function NM(){return Iv("useRouteId")}function kM(){let e=E.useContext(Rv),t=DM("useRouteError"),n=Iv("useRouteError");return e!==void 0?e:t.errors?.[n]}function MM(){let{router:e}=IM("useNavigate"),t=Iv("useNavigate"),n=E.useRef(!1);return lC(()=>{n.current=!0}),E.useCallback(async(o,l={})=>{It(n.current,aC),n.current&&(typeof o=="number"?e.navigate(o):await e.navigate(o,{fromRouteId:t,...l}))},[e,t])}var ww={};function cC(e,t,n){!t&&!ww[e]&&(ww[e]=!0,It(!1,n))}var xw={};function Ew(e,t){!e&&!xw[t]&&(xw[t]=!0,console.warn(t))}function LM(e){let t={hasErrorBoundary:e.hasErrorBoundary||e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&(e.element&&It(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(t,{element:E.createElement(e.Component),Component:void 0})),e.HydrateFallback&&(e.hydrateFallbackElement&&It(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(t,{hydrateFallbackElement:E.createElement(e.HydrateFallback),HydrateFallback:void 0})),e.ErrorBoundary&&(e.errorElement&&It(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(t,{errorElement:E.createElement(e.ErrorBoundary),ErrorBoundary:void 0})),t}var PM=["HydrateFallback","hydrateFallbackElement"],jM=class{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=i=>{this.status==="pending"&&(this.status="resolved",t(i))},this.reject=i=>{this.status==="pending"&&(this.status="rejected",n(i))}})}};function UM({router:e,flushSync:t,unstable_onError:n}){let[i,o]=E.useState(e.state),[l,u]=E.useState(),[f,h]=E.useState({isTransitioning:!1}),[p,g]=E.useState(),[y,_]=E.useState(),[b,w]=E.useState(),I=E.useRef(new Map),T=E.useCallback(k=>{o(R=>(k.errors&&n&&Object.entries(k.errors).forEach(([P,G])=>{R.errors?.[P]!==G&&n(G)}),k))},[n]),D=E.useCallback((k,{deletedFetchers:R,flushSync:P,viewTransitionOpts:G})=>{k.fetchers.forEach((H,z)=>{H.data!==void 0&&I.current.set(z,H.data)}),R.forEach(H=>I.current.delete(H)),Ew(P===!1||t!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let F=e.window!=null&&e.window.document!=null&&typeof e.window.document.startViewTransition=="function";if(Ew(G==null||F,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!G||!F){t&&P?t(()=>T(k)):E.startTransition(()=>T(k));return}if(t&&P){t(()=>{y&&(p&&p.resolve(),y.skipTransition()),h({isTransitioning:!0,flushSync:!0,currentLocation:G.currentLocation,nextLocation:G.nextLocation})});let H=e.window.document.startViewTransition(()=>{t(()=>T(k))});H.finished.finally(()=>{t(()=>{g(void 0),_(void 0),u(void 0),h({isTransitioning:!1})})}),t(()=>_(H));return}y?(p&&p.resolve(),y.skipTransition(),w({state:k,currentLocation:G.currentLocation,nextLocation:G.nextLocation})):(u(k),h({isTransitioning:!0,flushSync:!1,currentLocation:G.currentLocation,nextLocation:G.nextLocation}))},[e.window,t,y,p,T]);E.useLayoutEffect(()=>e.subscribe(D),[e,D]),E.useEffect(()=>{f.isTransitioning&&!f.flushSync&&g(new jM)},[f]),E.useEffect(()=>{if(p&&l&&e.window){let k=l,R=p.promise,P=e.window.document.startViewTransition(async()=>{E.startTransition(()=>T(k)),await R});P.finished.finally(()=>{g(void 0),_(void 0),u(void 0),h({isTransitioning:!1})}),_(P)}},[l,p,e.window,T]),E.useEffect(()=>{p&&l&&i.location.key===l.location.key&&p.resolve()},[p,y,i.location,l]),E.useEffect(()=>{!f.isTransitioning&&b&&(u(b.state),h({isTransitioning:!0,flushSync:!1,currentLocation:b.currentLocation,nextLocation:b.nextLocation}),w(void 0))},[f.isTransitioning,b]);let M=E.useMemo(()=>({createHref:e.createHref,encodeLocation:e.encodeLocation,go:k=>e.navigate(k),push:(k,R,P)=>e.navigate(k,{state:R,preventScrollReset:P?.preventScrollReset}),replace:(k,R,P)=>e.navigate(k,{replace:!0,state:R,preventScrollReset:P?.preventScrollReset})}),[e]),C=e.basename||"/",A=E.useMemo(()=>({router:e,navigator:M,static:!1,basename:C,unstable_onError:n}),[e,M,C,n]);return E.createElement(E.Fragment,null,E.createElement(To.Provider,{value:A},E.createElement(du.Provider,{value:i},E.createElement(oC.Provider,{value:I.current},E.createElement(Cv.Provider,{value:f},E.createElement(HM,{basename:C,location:i.location,navigationType:i.historyAction,navigator:M},E.createElement($M,{routes:e.routes,future:e.future,state:i,unstable_onError:n})))))),null)}var $M=E.memo(zM);function zM({routes:e,future:t,state:n,unstable_onError:i}){return xM(e,void 0,n,i,t)}function Dv({to:e,replace:t,state:n,relative:i}){Ue(Ga(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=E.useContext(_r);It(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=E.useContext(er),{pathname:u}=_i(),f=Co(),h=Ch(e,Th(l),u,i==="path"),p=JSON.stringify(h);return E.useEffect(()=>{f(JSON.parse(p),{replace:t,state:n,relative:i})},[f,p,i,t,n]),null}function BM(e){return SM(e.context)}function or(e){Ue(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function HM({basename:e="/",children:t=null,location:n,navigationType:i="POP",navigator:o,static:l=!1}){Ue(!Ga(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=e.replace(/^\/*/,"/"),f=E.useMemo(()=>({basename:u,navigator:o,static:l,future:{}}),[u,o,l]);typeof n=="string"&&(n=vi(n));let{pathname:h="/",search:p="",hash:g="",state:y=null,key:_="default"}=n,b=E.useMemo(()=>{let w=Kn(h,u);return w==null?null:{location:{pathname:w,search:p,hash:g,state:y,key:_},navigationType:i}},[u,h,p,g,y,_,i]);return It(b!=null,`<Router basename="${u}"> is not able to match the URL "${h}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:E.createElement(_r.Provider,{value:f},E.createElement(Rh.Provider,{children:t,value:b}))}function Ty(e,t=[]){let n=[];return E.Children.forEach(e,(i,o)=>{if(!E.isValidElement(i))return;let l=[...t,o];if(i.type===E.Fragment){n.push.apply(n,Ty(i.props.children,l));return}Ue(i.type===or,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ue(!i.props.index||!i.props.children,"An index route cannot have child routes.");let u={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(u.children=Ty(i.props.children,l)),n.push(u)}),n}var FM=Ty,gf="get",yf="application/x-www-form-urlencoded";function Ah(e){return e!=null&&typeof e.tagName=="string"}function qM(e){return Ah(e)&&e.tagName.toLowerCase()==="button"}function VM(e){return Ah(e)&&e.tagName.toLowerCase()==="form"}function GM(e){return Ah(e)&&e.tagName.toLowerCase()==="input"}function YM(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function WM(e,t){return e.button===0&&(!t||t==="_self")&&!YM(e)}var Gd=null;function QM(){if(Gd===null)try{new FormData(document.createElement("form"),0),Gd=!1}catch{Gd=!0}return Gd}var KM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Cg(e){return e!=null&&!KM.has(e)?(It(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${yf}"`),null):e}function XM(e,t){let n,i,o,l,u;if(VM(e)){let f=e.getAttribute("action");i=f?Kn(f,t):null,n=e.getAttribute("method")||gf,o=Cg(e.getAttribute("enctype"))||yf,l=new FormData(e)}else if(qM(e)||GM(e)&&(e.type==="submit"||e.type==="image")){let f=e.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=e.getAttribute("formaction")||f.getAttribute("action");if(i=h?Kn(h,t):null,n=e.getAttribute("formmethod")||f.getAttribute("method")||gf,o=Cg(e.getAttribute("formenctype"))||Cg(f.getAttribute("enctype"))||yf,l=new FormData(f,e),!QM()){let{name:p,type:g,value:y}=e;if(g==="image"){let _=p?`${p}.`:"";l.append(`${_}x`,"0"),l.append(`${_}y`,"0")}else p&&l.append(p,y)}}else{if(Ah(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=gf,i=null,o=yf,u=e}return l&&o==="text/plain"&&(u=l,l=void 0),{action:i,method:n.toLowerCase(),encType:o,formData:l,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ov(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ZM(e,t,n){let i=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return i.pathname==="/"?i.pathname=`_root.${n}`:t&&Kn(i.pathname,t)==="/"?i.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${n}`,i}async function JM(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function e2(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function t2(e,t,n){let i=await Promise.all(e.map(async o=>{let l=t.routes[o.route.id];if(l){let u=await JM(l,n);return u.links?u.links():[]}return[]}));return s2(i.flat(1).filter(e2).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Tw(e,t,n,i,o,l){let u=(h,p)=>n[p]?h.route.id!==n[p].route.id:!0,f=(h,p)=>n[p].pathname!==h.pathname||n[p].route.path?.endsWith("*")&&n[p].params["*"]!==h.params["*"];return l==="assets"?t.filter((h,p)=>u(h,p)||f(h,p)):l==="data"?t.filter((h,p)=>{let g=i.routes[h.route.id];if(!g||!g.hasLoader)return!1;if(u(h,p)||f(h,p))return!0;if(h.route.shouldRevalidate){let y=h.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function n2(e,t,{includeHydrateFallback:n}={}){return r2(e.map(i=>{let o=t.routes[i.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function r2(e){return[...new Set(e)]}function i2(e){let t={},n=Object.keys(e).sort();for(let i of n)t[i]=e[i];return t}function s2(e,t){let n=new Set;return new Set(t),e.reduce((i,o)=>{let l=JSON.stringify(i2(o));return n.has(l)||(n.add(l),i.push({key:l,link:o})),i},[])}function uC(){let e=E.useContext(To);return Ov(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function o2(){let e=E.useContext(du);return Ov(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Nv=E.createContext(void 0);Nv.displayName="FrameworkContext";function dC(){let e=E.useContext(Nv);return Ov(e,"You must render this element inside a <HydratedRouter> element"),e}function a2(e,t){let n=E.useContext(Nv),[i,o]=E.useState(!1),[l,u]=E.useState(!1),{onFocus:f,onBlur:h,onMouseEnter:p,onMouseLeave:g,onTouchStart:y}=t,_=E.useRef(null);E.useEffect(()=>{if(e==="render"&&u(!0),e==="viewport"){let I=D=>{D.forEach(M=>{u(M.isIntersecting)})},T=new IntersectionObserver(I,{threshold:.5});return _.current&&T.observe(_.current),()=>{T.disconnect()}}},[e]),E.useEffect(()=>{if(i){let I=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(I)}}},[i]);let b=()=>{o(!0)},w=()=>{o(!1),u(!1)};return n?e!=="intent"?[l,_,{}]:[l,_,{onFocus:sc(f,b),onBlur:sc(h,w),onMouseEnter:sc(p,b),onMouseLeave:sc(g,w),onTouchStart:sc(y,b)}]:[!1,_,{}]}function sc(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function l2({page:e,...t}){let{router:n}=uC(),i=E.useMemo(()=>Ji(n.routes,e,n.basename),[n.routes,e,n.basename]);return i?E.createElement(u2,{page:e,matches:i,...t}):null}function c2(e){let{manifest:t,routeModules:n}=dC(),[i,o]=E.useState([]);return E.useEffect(()=>{let l=!1;return t2(e,t,n).then(u=>{l||o(u)}),()=>{l=!0}},[e,t,n]),i}function u2({page:e,matches:t,...n}){let i=_i(),{manifest:o,routeModules:l}=dC(),{basename:u}=uC(),{loaderData:f,matches:h}=o2(),p=E.useMemo(()=>Tw(e,t,h,o,i,"data"),[e,t,h,o,i]),g=E.useMemo(()=>Tw(e,t,h,o,i,"assets"),[e,t,h,o,i]),y=E.useMemo(()=>{if(e===i.pathname+i.search+i.hash)return[];let w=new Set,I=!1;if(t.forEach(D=>{let M=o.routes[D.route.id];!M||!M.hasLoader||(!p.some(C=>C.route.id===D.route.id)&&D.route.id in f&&l[D.route.id]?.shouldRevalidate||M.hasClientLoader?I=!0:w.add(D.route.id))}),w.size===0)return[];let T=ZM(e,u,"data");return I&&w.size>0&&T.searchParams.set("_routes",t.filter(D=>w.has(D.route.id)).map(D=>D.route.id).join(",")),[T.pathname+T.search]},[u,f,i,o,p,t,e,l]),_=E.useMemo(()=>n2(g,o),[g,o]),b=c2(g);return E.createElement(E.Fragment,null,y.map(w=>E.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...n})),_.map(w=>E.createElement("link",{key:w,rel:"modulepreload",href:w,...n})),b.map(({key:w,link:I})=>E.createElement("link",{key:w,nonce:n.nonce,...I})))}function d2(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var fC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{fC&&(window.__reactRouterVersion="7.9.1")}catch{}function f2(e,t){return Wk({basename:t?.basename,getContext:t?.getContext,future:t?.future,history:hk({window:t?.window}),hydrationData:h2(),routes:e,mapRouteProperties:LM,hydrationRouteProperties:PM,dataStrategy:t?.dataStrategy,patchRoutesOnNavigation:t?.patchRoutesOnNavigation,window:t?.window}).initialize()}function h2(){let e=window?.__staticRouterHydrationData;return e&&e.errors&&(e={...e,errors:p2(e.errors)}),e}function p2(e){if(!e)return null;let t=Object.entries(e),n={};for(let[i,o]of t)if(o&&o.__type==="RouteErrorResponse")n[i]=new kf(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){if(o.__subType){let l=window[o.__subType];if(typeof l=="function")try{let u=new l(o.message);u.stack="",n[i]=u}catch{}}if(n[i]==null){let l=new Error(o.message);l.stack="",n[i]=l}}else n[i]=o;return n}var hC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_s=E.forwardRef(function({onClick:t,discover:n="render",prefetch:i="none",relative:o,reloadDocument:l,replace:u,state:f,target:h,to:p,preventScrollReset:g,viewTransition:y,..._},b){let{basename:w}=E.useContext(_r),I=typeof p=="string"&&hC.test(p),T,D=!1;if(typeof p=="string"&&I&&(T=p,fC))try{let F=new URL(window.location.href),H=p.startsWith("//")?new URL(F.protocol+p):new URL(p),z=Kn(H.pathname,w);H.origin===F.origin&&z!=null?p=z+H.search+H.hash:D=!0}catch{It(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let M=vM(p,{relative:o}),[C,A,k]=a2(i,_),R=y2(p,{replace:u,state:f,target:h,preventScrollReset:g,relative:o,viewTransition:y});function P(F){t&&t(F),F.defaultPrevented||R(F)}let G=E.createElement("a",{..._,...k,href:T||M,onClick:D||l?t:P,ref:d2(b,A),target:h,"data-discover":!I&&n==="render"?"true":void 0});return C&&!I?E.createElement(E.Fragment,null,G,E.createElement(l2,{page:M})):G});_s.displayName="Link";var kv=E.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:i="",end:o=!1,style:l,to:u,viewTransition:f,children:h,...p},g){let y=fu(u,{relative:p.relative}),_=_i(),b=E.useContext(du),{navigator:w,basename:I}=E.useContext(_r),T=b!=null&&w2(y)&&f===!0,D=w.encodeLocation?w.encodeLocation(y).pathname:y.pathname,M=_.pathname,C=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;n||(M=M.toLowerCase(),C=C?C.toLowerCase():null,D=D.toLowerCase()),C&&I&&(C=Kn(C,I)||C);const A=D!=="/"&&D.endsWith("/")?D.length-1:D.length;let k=M===D||!o&&M.startsWith(D)&&M.charAt(A)==="/",R=C!=null&&(C===D||!o&&C.startsWith(D)&&C.charAt(D.length)==="/"),P={isActive:k,isPending:R,isTransitioning:T},G=k?t:void 0,F;typeof i=="function"?F=i(P):F=[i,k?"active":null,R?"pending":null,T?"transitioning":null].filter(Boolean).join(" ");let H=typeof l=="function"?l(P):l;return E.createElement(_s,{...p,"aria-current":G,className:F,ref:g,style:H,to:u,viewTransition:f},typeof h=="function"?h(P):h)});kv.displayName="NavLink";var m2=E.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:i,replace:o,state:l,method:u=gf,action:f,onSubmit:h,relative:p,preventScrollReset:g,viewTransition:y,..._},b)=>{let w=b2(),I=S2(f,{relative:p}),T=u.toLowerCase()==="get"?"get":"post",D=typeof f=="string"&&hC.test(f),M=C=>{if(h&&h(C),C.defaultPrevented)return;C.preventDefault();let A=C.nativeEvent.submitter,k=A?.getAttribute("formmethod")||u;w(A||C.currentTarget,{fetcherKey:t,method:k,navigate:n,replace:o,state:l,relative:p,preventScrollReset:g,viewTransition:y})};return E.createElement("form",{ref:b,method:T,action:I,onSubmit:i?h:M,..._,"data-discover":!D&&e==="render"?"true":void 0})});m2.displayName="Form";function g2(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function pC(e){let t=E.useContext(To);return Ue(t,g2(e)),t}function y2(e,{target:t,replace:n,state:i,preventScrollReset:o,relative:l,viewTransition:u}={}){let f=Co(),h=_i(),p=fu(e,{relative:l});return E.useCallback(g=>{if(WM(g,t)){g.preventDefault();let y=n!==void 0?n:ds(h)===ds(p);f(e,{replace:y,state:i,preventScrollReset:o,relative:l,viewTransition:u})}},[h,f,p,n,i,t,e,o,l,u])}var v2=0,_2=()=>`__${String(++v2)}__`;function b2(){let{router:e}=pC("useSubmit"),{basename:t}=E.useContext(_r),n=NM();return E.useCallback(async(i,o={})=>{let{action:l,method:u,encType:f,formData:h,body:p}=XM(i,t);if(o.navigate===!1){let g=o.fetcherKey||_2();await e.fetch(g,n,o.action||l,{preventScrollReset:o.preventScrollReset,formData:h,body:p,formMethod:o.method||u,formEncType:o.encType||f,flushSync:o.flushSync})}else await e.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:h,body:p,formMethod:o.method||u,formEncType:o.encType||f,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[e,t,n])}function S2(e,{relative:t}={}){let{basename:n}=E.useContext(_r),i=E.useContext(er);Ue(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),l={...fu(e||".",{relative:t})},u=_i();if(e==null){l.search=u.search;let f=new URLSearchParams(l.search),h=f.getAll("index");if(h.some(g=>g==="")){f.delete("index"),h.filter(y=>y).forEach(y=>f.append("index",y));let g=f.toString();l.search=g?`?${g}`:""}}return(!e||e===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(l.pathname=l.pathname==="/"?n:Dr([n,l.pathname])),ds(l)}function w2(e,{relative:t}={}){let n=E.useContext(Cv);Ue(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=pC("useViewTransitionState"),o=fu(e,{relative:t});if(!n.isTransitioning)return!1;let l=Kn(n.currentLocation.pathname,i)||n.currentLocation.pathname,u=Kn(n.nextLocation.pathname,i)||n.nextLocation.pathname;return Nf(o.pathname,u)!=null||Nf(o.pathname,l)!=null}var x2=UT();function E2(e){return E.createElement(UM,{flushSync:x2.flushSync,...e})}var Gt=function(){return Gt=Object.assign||function(t){for(var n,i=1,o=arguments.length;i<o;i++){n=arguments[i];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},Gt.apply(this,arguments)};function Bc(e,t,n){if(n||arguments.length===2)for(var i=0,o=t.length,l;i<o;i++)(l||!(i in t))&&(l||(l=Array.prototype.slice.call(t,0,i)),l[i]=t[i]);return e.concat(l||Array.prototype.slice.call(t))}var mt="-ms-",Tc="-moz-",et="-webkit-",mC="comm",Ih="rule",Mv="decl",T2="@import",gC="@keyframes",C2="@layer",yC=Math.abs,Lv=String.fromCharCode,Cy=Object.assign;function R2(e,t){return qt(e,0)^45?(((t<<2^qt(e,0))<<2^qt(e,1))<<2^qt(e,2))<<2^qt(e,3):0}function vC(e){return e.trim()}function ii(e,t){return(e=t.exec(e))?e[0]:e}function Be(e,t,n){return e.replace(t,n)}function vf(e,t,n){return e.indexOf(t,n)}function qt(e,t){return e.charCodeAt(t)|0}function Oa(e,t,n){return e.slice(t,n)}function Ar(e){return e.length}function _C(e){return e.length}function bc(e,t){return t.push(e),e}function A2(e,t){return e.map(t).join("")}function Cw(e,t){return e.filter(function(n){return!ii(n,t)})}var Dh=1,Na=1,bC=0,Xn=0,Lt=0,Ya="";function Oh(e,t,n,i,o,l,u,f){return{value:e,root:t,parent:n,type:i,props:o,children:l,line:Dh,column:Na,length:u,return:"",siblings:f}}function Zi(e,t){return Cy(Oh("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ma(e){for(;e.root;)e=Zi(e.root,{children:[e]});bc(e,e.siblings)}function I2(){return Lt}function D2(){return Lt=Xn>0?qt(Ya,--Xn):0,Na--,Lt===10&&(Na=1,Dh--),Lt}function fr(){return Lt=Xn<bC?qt(Ya,Xn++):0,Na++,Lt===10&&(Na=1,Dh++),Lt}function co(){return qt(Ya,Xn)}function _f(){return Xn}function Nh(e,t){return Oa(Ya,e,t)}function Ry(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function O2(e){return Dh=Na=1,bC=Ar(Ya=e),Xn=0,[]}function N2(e){return Ya="",e}function Rg(e){return vC(Nh(Xn-1,Ay(e===91?e+2:e===40?e+1:e)))}function k2(e){for(;(Lt=co())&&Lt<33;)fr();return Ry(e)>2||Ry(Lt)>3?"":" "}function M2(e,t){for(;--t&&fr()&&!(Lt<48||Lt>102||Lt>57&&Lt<65||Lt>70&&Lt<97););return Nh(e,_f()+(t<6&&co()==32&&fr()==32))}function Ay(e){for(;fr();)switch(Lt){case e:return Xn;case 34:case 39:e!==34&&e!==39&&Ay(Lt);break;case 40:e===41&&Ay(e);break;case 92:fr();break}return Xn}function L2(e,t){for(;fr()&&e+Lt!==57;)if(e+Lt===84&&co()===47)break;return"/*"+Nh(t,Xn-1)+"*"+Lv(e===47?e:fr())}function P2(e){for(;!Ry(co());)fr();return Nh(e,Xn)}function j2(e){return N2(bf("",null,null,null,[""],e=O2(e),0,[0],e))}function bf(e,t,n,i,o,l,u,f,h){for(var p=0,g=0,y=u,_=0,b=0,w=0,I=1,T=1,D=1,M=0,C="",A=o,k=l,R=i,P=C;T;)switch(w=M,M=fr()){case 40:if(w!=108&&qt(P,y-1)==58){vf(P+=Be(Rg(M),"&","&\f"),"&\f",yC(p?f[p-1]:0))!=-1&&(D=-1);break}case 34:case 39:case 91:P+=Rg(M);break;case 9:case 10:case 13:case 32:P+=k2(w);break;case 92:P+=M2(_f()-1,7);continue;case 47:switch(co()){case 42:case 47:bc(U2(L2(fr(),_f()),t,n,h),h);break;default:P+="/"}break;case 123*I:f[p++]=Ar(P)*D;case 125*I:case 59:case 0:switch(M){case 0:case 125:T=0;case 59+g:D==-1&&(P=Be(P,/\f/g,"")),b>0&&Ar(P)-y&&bc(b>32?Aw(P+";",i,n,y-1,h):Aw(Be(P," ","")+";",i,n,y-2,h),h);break;case 59:P+=";";default:if(bc(R=Rw(P,t,n,p,g,o,f,C,A=[],k=[],y,l),l),M===123)if(g===0)bf(P,t,R,R,A,l,y,f,k);else switch(_===99&&qt(P,3)===110?100:_){case 100:case 108:case 109:case 115:bf(e,R,R,i&&bc(Rw(e,R,R,0,0,o,f,C,o,A=[],y,k),k),o,k,y,f,i?A:k);break;default:bf(P,R,R,R,[""],k,0,f,k)}}p=g=b=0,I=D=1,C=P="",y=u;break;case 58:y=1+Ar(P),b=w;default:if(I<1){if(M==123)--I;else if(M==125&&I++==0&&D2()==125)continue}switch(P+=Lv(M),M*I){case 38:D=g>0?1:(P+="\f",-1);break;case 44:f[p++]=(Ar(P)-1)*D,D=1;break;case 64:co()===45&&(P+=Rg(fr())),_=co(),g=y=Ar(C=P+=P2(_f())),M++;break;case 45:w===45&&Ar(P)==2&&(I=0)}}return l}function Rw(e,t,n,i,o,l,u,f,h,p,g,y){for(var _=o-1,b=o===0?l:[""],w=_C(b),I=0,T=0,D=0;I<i;++I)for(var M=0,C=Oa(e,_+1,_=yC(T=u[I])),A=e;M<w;++M)(A=vC(T>0?b[M]+" "+C:Be(C,/&\f/g,b[M])))&&(h[D++]=A);return Oh(e,t,n,o===0?Ih:f,h,p,g,y)}function U2(e,t,n,i){return Oh(e,t,n,mC,Lv(I2()),Oa(e,2,-2),0,i)}function Aw(e,t,n,i,o){return Oh(e,t,n,Mv,Oa(e,0,i),Oa(e,i+1,-1),i,o)}function SC(e,t,n){switch(R2(e,t)){case 5103:return et+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return et+e+e;case 4789:return Tc+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return et+e+Tc+e+mt+e+e;case 5936:switch(qt(e,t+11)){case 114:return et+e+mt+Be(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return et+e+mt+Be(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return et+e+mt+Be(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return et+e+mt+e+e;case 6165:return et+e+mt+"flex-"+e+e;case 5187:return et+e+Be(e,/(\w+).+(:[^]+)/,et+"box-$1$2"+mt+"flex-$1$2")+e;case 5443:return et+e+mt+"flex-item-"+Be(e,/flex-|-self/g,"")+(ii(e,/flex-|baseline/)?"":mt+"grid-row-"+Be(e,/flex-|-self/g,""))+e;case 4675:return et+e+mt+"flex-line-pack"+Be(e,/align-content|flex-|-self/g,"")+e;case 5548:return et+e+mt+Be(e,"shrink","negative")+e;case 5292:return et+e+mt+Be(e,"basis","preferred-size")+e;case 6060:return et+"box-"+Be(e,"-grow","")+et+e+mt+Be(e,"grow","positive")+e;case 4554:return et+Be(e,/([^-])(transform)/g,"$1"+et+"$2")+e;case 6187:return Be(Be(Be(e,/(zoom-|grab)/,et+"$1"),/(image-set)/,et+"$1"),e,"")+e;case 5495:case 3959:return Be(e,/(image-set\([^]*)/,et+"$1$`$1");case 4968:return Be(Be(e,/(.+:)(flex-)?(.*)/,et+"box-pack:$3"+mt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+et+e+e;case 4200:if(!ii(e,/flex-|baseline/))return mt+"grid-column-align"+Oa(e,t)+e;break;case 2592:case 3360:return mt+Be(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(i,o){return t=o,ii(i.props,/grid-\w+-end/)})?~vf(e+(n=n[t].value),"span",0)?e:mt+Be(e,"-start","")+e+mt+"grid-row-span:"+(~vf(n,"span",0)?ii(n,/\d+/):+ii(n,/\d+/)-+ii(e,/\d+/))+";":mt+Be(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(i){return ii(i.props,/grid-\w+-start/)})?e:mt+Be(Be(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Be(e,/(.+)-inline(.+)/,et+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ar(e)-1-t>6)switch(qt(e,t+1)){case 109:if(qt(e,t+4)!==45)break;case 102:return Be(e,/(.+:)(.+)-([^]+)/,"$1"+et+"$2-$3$1"+Tc+(qt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~vf(e,"stretch",0)?SC(Be(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Be(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,o,l,u,f,h,p){return mt+o+":"+l+p+(u?mt+o+"-span:"+(f?h:+h-+l)+p:"")+e});case 4949:if(qt(e,t+6)===121)return Be(e,":",":"+et)+e;break;case 6444:switch(qt(e,qt(e,14)===45?18:11)){case 120:return Be(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+et+(qt(e,14)===45?"inline-":"")+"box$3$1"+et+"$2$3$1"+mt+"$2box$3")+e;case 100:return Be(e,":",":"+mt)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Be(e,"scroll-","scroll-snap-")+e}return e}function Lf(e,t){for(var n="",i=0;i<e.length;i++)n+=t(e[i],i,e,t)||"";return n}function $2(e,t,n,i){switch(e.type){case C2:if(e.children.length)break;case T2:case Mv:return e.return=e.return||e.value;case mC:return"";case gC:return e.return=e.value+"{"+Lf(e.children,i)+"}";case Ih:if(!Ar(e.value=e.props.join(",")))return""}return Ar(n=Lf(e.children,i))?e.return=e.value+"{"+n+"}":""}function z2(e){var t=_C(e);return function(n,i,o,l){for(var u="",f=0;f<t;f++)u+=e[f](n,i,o,l)||"";return u}}function B2(e){return function(t){t.root||(t=t.return)&&e(t)}}function H2(e,t,n,i){if(e.length>-1&&!e.return)switch(e.type){case Mv:e.return=SC(e.value,e.length,n);return;case gC:return Lf([Zi(e,{value:Be(e.value,"@","@"+et)})],i);case Ih:if(e.length)return A2(n=e.props,function(o){switch(ii(o,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ma(Zi(e,{props:[Be(o,/:(read-\w+)/,":"+Tc+"$1")]})),ma(Zi(e,{props:[o]})),Cy(e,{props:Cw(n,i)});break;case"::placeholder":ma(Zi(e,{props:[Be(o,/:(plac\w+)/,":"+et+"input-$1")]})),ma(Zi(e,{props:[Be(o,/:(plac\w+)/,":"+Tc+"$1")]})),ma(Zi(e,{props:[Be(o,/:(plac\w+)/,mt+"input-$1")]})),ma(Zi(e,{props:[o]})),Cy(e,{props:Cw(n,i)});break}return""})}}var F2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},On={},ka=typeof process<"u"&&On!==void 0&&(On.REACT_APP_SC_ATTR||On.SC_ATTR)||"data-styled",wC="active",xC="data-styled-version",kh="6.1.19",Pv=`/*!sc*/
`,Pf=typeof window<"u"&&typeof document<"u",q2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&On!==void 0&&On.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&On.REACT_APP_SC_DISABLE_SPEEDY!==""?On.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&On.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&On!==void 0&&On.SC_DISABLE_SPEEDY!==void 0&&On.SC_DISABLE_SPEEDY!==""&&On.SC_DISABLE_SPEEDY!=="false"&&On.SC_DISABLE_SPEEDY),V2={},Mh=Object.freeze([]),Ma=Object.freeze({});function EC(e,t,n){return n===void 0&&(n=Ma),e.theme!==n.theme&&e.theme||t||n.theme}var TC=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),G2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Y2=/(^-|-$)/g;function Iw(e){return e.replace(G2,"-").replace(Y2,"")}var W2=/(a)(d)/gi,Yd=52,Dw=function(e){return String.fromCharCode(e+(e>25?39:97))};function Iy(e){var t,n="";for(t=Math.abs(e);t>Yd;t=t/Yd|0)n=Dw(t%Yd)+n;return(Dw(t%Yd)+n).replace(W2,"$1-$2")}var Ag,CC=5381,Sa=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},RC=function(e){return Sa(CC,e)};function AC(e){return Iy(RC(e)>>>0)}function Q2(e){return e.displayName||e.name||"Component"}function Ig(e){return typeof e=="string"&&!0}var IC=typeof Symbol=="function"&&Symbol.for,DC=IC?Symbol.for("react.memo"):60115,K2=IC?Symbol.for("react.forward_ref"):60112,X2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Z2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},OC={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},J2=((Ag={})[K2]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ag[DC]=OC,Ag);function Ow(e){return("type"in(t=e)&&t.type.$$typeof)===DC?OC:"$$typeof"in e?J2[e.$$typeof]:X2;var t}var eL=Object.defineProperty,tL=Object.getOwnPropertyNames,Nw=Object.getOwnPropertySymbols,nL=Object.getOwnPropertyDescriptor,rL=Object.getPrototypeOf,kw=Object.prototype;function NC(e,t,n){if(typeof t!="string"){if(kw){var i=rL(t);i&&i!==kw&&NC(e,i,n)}var o=tL(t);Nw&&(o=o.concat(Nw(t)));for(var l=Ow(e),u=Ow(t),f=0;f<o.length;++f){var h=o[f];if(!(h in Z2||n&&n[h]||u&&h in u||l&&h in l)){var p=nL(t,h);try{eL(e,h,p)}catch{}}}}return e}function fo(e){return typeof e=="function"}function jv(e){return typeof e=="object"&&"styledComponentId"in e}function so(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Dy(e,t){if(e.length===0)return"";for(var n=e[0],i=1;i<e.length;i++)n+=e[i];return n}function Hc(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Oy(e,t,n){if(n===void 0&&(n=!1),!n&&!Hc(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var i=0;i<t.length;i++)e[i]=Oy(e[i],t[i]);else if(Hc(t))for(var i in t)e[i]=Oy(e[i],t[i]);return e}function Uv(e,t){Object.defineProperty(e,"toString",{value:t})}function fs(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var iL=(function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,i=0;i<t;i++)n+=this.groupSizes[i];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,l=o;t>=l;)if((l<<=1)<0)throw fs(16,"".concat(t));this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var u=o;u<l;u++)this.groupSizes[u]=0}for(var f=this.indexOfGroup(t+1),h=(u=0,n.length);u<h;u++)this.tag.insertRule(f,n[u])&&(this.groupSizes[t]++,f++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],i=this.indexOfGroup(t),o=i+n;this.groupSizes[t]=0;for(var l=i;l<o;l++)this.tag.deleteRule(i)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var i=this.groupSizes[t],o=this.indexOfGroup(t),l=o+i,u=o;u<l;u++)n+="".concat(this.tag.getRule(u)).concat(Pv);return n},e})(),Sf=new Map,jf=new Map,wf=1,Wd=function(e){if(Sf.has(e))return Sf.get(e);for(;jf.has(wf);)wf++;var t=wf++;return Sf.set(e,t),jf.set(t,e),t},sL=function(e,t){wf=t+1,Sf.set(e,t),jf.set(t,e)},oL="style[".concat(ka,"][").concat(xC,'="').concat(kh,'"]'),aL=new RegExp("^".concat(ka,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),lL=function(e,t,n){for(var i,o=n.split(","),l=0,u=o.length;l<u;l++)(i=o[l])&&e.registerName(t,i)},cL=function(e,t){for(var n,i=((n=t.textContent)!==null&&n!==void 0?n:"").split(Pv),o=[],l=0,u=i.length;l<u;l++){var f=i[l].trim();if(f){var h=f.match(aL);if(h){var p=0|parseInt(h[1],10),g=h[2];p!==0&&(sL(g,p),lL(e,g,h[3]),e.getTag().insertRules(p,o)),o.length=0}else o.push(f)}}},Mw=function(e){for(var t=document.querySelectorAll(oL),n=0,i=t.length;n<i;n++){var o=t[n];o&&o.getAttribute(ka)!==wC&&(cL(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function uL(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var kC=function(e){var t=document.head,n=e||t,i=document.createElement("style"),o=(function(f){var h=Array.from(f.querySelectorAll("style[".concat(ka,"]")));return h[h.length-1]})(n),l=o!==void 0?o.nextSibling:null;i.setAttribute(ka,wC),i.setAttribute(xC,kh);var u=uL();return u&&i.setAttribute("nonce",u),n.insertBefore(i,l),i},dL=(function(){function e(t){this.element=kC(t),this.element.appendChild(document.createTextNode("")),this.sheet=(function(n){if(n.sheet)return n.sheet;for(var i=document.styleSheets,o=0,l=i.length;o<l;o++){var u=i[o];if(u.ownerNode===n)return u}throw fs(17)})(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e})(),fL=(function(){function e(t){this.element=kC(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var i=document.createTextNode(n);return this.element.insertBefore(i,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e})(),hL=(function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e})(),Lw=Pf,pL={isServer:!Pf,useCSSOMInjection:!q2},Uf=(function(){function e(t,n,i){t===void 0&&(t=Ma),n===void 0&&(n={});var o=this;this.options=Gt(Gt({},pL),t),this.gs=n,this.names=new Map(i),this.server=!!t.isServer,!this.server&&Pf&&Lw&&(Lw=!1,Mw(this)),Uv(this,function(){return(function(l){for(var u=l.getTag(),f=u.length,h="",p=function(y){var _=(function(D){return jf.get(D)})(y);if(_===void 0)return"continue";var b=l.names.get(_),w=u.getGroup(y);if(b===void 0||!b.size||w.length===0)return"continue";var I="".concat(ka,".g").concat(y,'[id="').concat(_,'"]'),T="";b!==void 0&&b.forEach(function(D){D.length>0&&(T+="".concat(D,","))}),h+="".concat(w).concat(I,'{content:"').concat(T,'"}').concat(Pv)},g=0;g<f;g++)p(g);return h})(o)})}return e.registerId=function(t){return Wd(t)},e.prototype.rehydrate=function(){!this.server&&Pf&&Mw(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Gt(Gt({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=(function(n){var i=n.useCSSOMInjection,o=n.target;return n.isServer?new hL(o):i?new dL(o):new fL(o)})(this.options),new iL(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Wd(t),this.names.has(t))this.names.get(t).add(n);else{var i=new Set;i.add(n),this.names.set(t,i)}},e.prototype.insertRules=function(t,n,i){this.registerName(t,n),this.getTag().insertRules(Wd(t),i)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Wd(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e})(),mL=/&/g,gL=/^\s*\/\/.*$/gm;function MC(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(i){return"".concat(t," ").concat(i)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=MC(n.children,t)),n})}function yL(e){var t,n,i,o=Ma,l=o.options,u=l===void 0?Ma:l,f=o.plugins,h=f===void 0?Mh:f,p=function(_,b,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):_},g=h.slice();g.push(function(_){_.type===Ih&&_.value.includes("&")&&(_.props[0]=_.props[0].replace(mL,n).replace(i,p))}),u.prefix&&g.push(H2),g.push($2);var y=function(_,b,w,I){b===void 0&&(b=""),w===void 0&&(w=""),I===void 0&&(I="&"),t=I,n=b,i=new RegExp("\\".concat(n,"\\b"),"g");var T=_.replace(gL,""),D=j2(w||b?"".concat(w," ").concat(b," { ").concat(T," }"):T);u.namespace&&(D=MC(D,u.namespace));var M=[];return Lf(D,z2(g.concat(B2(function(C){return M.push(C)})))),M};return y.hash=h.length?h.reduce(function(_,b){return b.name||fs(15),Sa(_,b.name)},CC).toString():"",y}var vL=new Uf,Ny=yL(),LC=cr.createContext({shouldForwardProp:void 0,styleSheet:vL,stylis:Ny});LC.Consumer;cr.createContext(void 0);function ky(){return E.useContext(LC)}var _L=(function(){function e(t,n){var i=this;this.inject=function(o,l){l===void 0&&(l=Ny);var u=i.name+l.hash;o.hasNameForId(i.id,u)||o.insertRules(i.id,u,l(i.rules,u,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Uv(this,function(){throw fs(12,String(i.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Ny),this.name+t.hash},e})(),bL=function(e){return e>="A"&&e<="Z"};function Pw(e){for(var t="",n=0;n<e.length;n++){var i=e[n];if(n===1&&i==="-"&&e[0]==="-")return e;bL(i)?t+="-"+i.toLowerCase():t+=i}return t.startsWith("ms-")?"-"+t:t}var PC=function(e){return e==null||e===!1||e===""},jC=function(e){var t,n,i=[];for(var o in e){var l=e[o];e.hasOwnProperty(o)&&!PC(l)&&(Array.isArray(l)&&l.isCss||fo(l)?i.push("".concat(Pw(o),":"),l,";"):Hc(l)?i.push.apply(i,Bc(Bc(["".concat(o," {")],jC(l),!1),["}"],!1)):i.push("".concat(Pw(o),": ").concat((t=o,(n=l)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in F2||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function os(e,t,n,i){if(PC(e))return[];if(jv(e))return[".".concat(e.styledComponentId)];if(fo(e)){if(!fo(l=e)||l.prototype&&l.prototype.isReactComponent||!t)return[e];var o=e(t);return os(o,t,n,i)}var l;return e instanceof _L?n?(e.inject(n,i),[e.getName(i)]):[e]:Hc(e)?jC(e):Array.isArray(e)?Array.prototype.concat.apply(Mh,e.map(function(u){return os(u,t,n,i)})):[e.toString()]}function UC(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(fo(n)&&!jv(n))return!1}return!0}var SL=RC(kh),wL=(function(){function e(t,n,i){this.rules=t,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&UC(t),this.componentId=n,this.baseHash=Sa(SL,n),this.baseStyle=i,Uf.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,i){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=so(o,this.staticRulesId);else{var l=Dy(os(this.rules,t,n,i)),u=Iy(Sa(this.baseHash,l)>>>0);if(!n.hasNameForId(this.componentId,u)){var f=i(l,".".concat(u),void 0,this.componentId);n.insertRules(this.componentId,u,f)}o=so(o,u),this.staticRulesId=u}else{for(var h=Sa(this.baseHash,i.hash),p="",g=0;g<this.rules.length;g++){var y=this.rules[g];if(typeof y=="string")p+=y;else if(y){var _=Dy(os(y,t,n,i));h=Sa(h,_+g),p+=_}}if(p){var b=Iy(h>>>0);n.hasNameForId(this.componentId,b)||n.insertRules(this.componentId,b,i(p,".".concat(b),void 0,this.componentId)),o=so(o,b)}}return o},e})(),La=cr.createContext(void 0);La.Consumer;function $v(){var e=E.useContext(La);if(!e)throw fs(18);return e}function xL(e){var t=cr.useContext(La),n=E.useMemo(function(){return(function(i,o){if(!i)throw fs(14);if(fo(i)){var l=i(o);return l}if(Array.isArray(i)||typeof i!="object")throw fs(8);return o?Gt(Gt({},o),i):i})(e.theme,t)},[e.theme,t]);return e.children?cr.createElement(La.Provider,{value:n},e.children):null}var Dg={};function EL(e,t,n){var i=jv(e),o=e,l=!Ig(e),u=t.attrs,f=u===void 0?Mh:u,h=t.componentId,p=h===void 0?(function(A,k){var R=typeof A!="string"?"sc":Iw(A);Dg[R]=(Dg[R]||0)+1;var P="".concat(R,"-").concat(AC(kh+R+Dg[R]));return k?"".concat(k,"-").concat(P):P})(t.displayName,t.parentComponentId):h,g=t.displayName,y=g===void 0?(function(A){return Ig(A)?"styled.".concat(A):"Styled(".concat(Q2(A),")")})(e):g,_=t.displayName&&t.componentId?"".concat(Iw(t.displayName),"-").concat(t.componentId):t.componentId||p,b=i&&o.attrs?o.attrs.concat(f).filter(Boolean):f,w=t.shouldForwardProp;if(i&&o.shouldForwardProp){var I=o.shouldForwardProp;if(t.shouldForwardProp){var T=t.shouldForwardProp;w=function(A,k){return I(A,k)&&T(A,k)}}else w=I}var D=new wL(n,_,i?o.componentStyle:void 0);function M(A,k){return(function(R,P,G){var F=R.attrs,H=R.componentStyle,z=R.defaultProps,V=R.foldedComponentIds,B=R.styledComponentId,te=R.target,ue=cr.useContext(La),U=ky(),J=R.shouldForwardProp||U.shouldForwardProp,ne=EC(P,ue,z)||Ma,ae=(function(me,pe,Ae){for(var be,De=Gt(Gt({},pe),{className:void 0,theme:Ae}),$e=0;$e<me.length;$e+=1){var _t=fo(be=me[$e])?be(De):be;for(var gt in _t)De[gt]=gt==="className"?so(De[gt],_t[gt]):gt==="style"?Gt(Gt({},De[gt]),_t[gt]):_t[gt]}return pe.className&&(De.className=so(De.className,pe.className)),De})(F,P,ne),N=ae.as||te,K={};for(var le in ae)ae[le]===void 0||le[0]==="$"||le==="as"||le==="theme"&&ae.theme===ne||(le==="forwardedAs"?K.as=ae.forwardedAs:J&&!J(le,N)||(K[le]=ae[le]));var ie=(function(me,pe){var Ae=ky(),be=me.generateAndInjectStyles(pe,Ae.styleSheet,Ae.stylis);return be})(H,ae),de=so(V,B);return ie&&(de+=" "+ie),ae.className&&(de+=" "+ae.className),K[Ig(N)&&!TC.has(N)?"class":"className"]=de,G&&(K.ref=G),E.createElement(N,K)})(C,A,k)}M.displayName=y;var C=cr.forwardRef(M);return C.attrs=b,C.componentStyle=D,C.displayName=y,C.shouldForwardProp=w,C.foldedComponentIds=i?so(o.foldedComponentIds,o.styledComponentId):"",C.styledComponentId=_,C.target=i?o.target:e,Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(A){this._foldedDefaultProps=i?(function(k){for(var R=[],P=1;P<arguments.length;P++)R[P-1]=arguments[P];for(var G=0,F=R;G<F.length;G++)Oy(k,F[G],!0);return k})({},o.defaultProps,A):A}}),Uv(C,function(){return".".concat(C.styledComponentId)}),l&&NC(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),C}function jw(e,t){for(var n=[e[0]],i=0,o=t.length;i<o;i+=1)n.push(t[i],e[i+1]);return n}var Uw=function(e){return Object.assign(e,{isCss:!0})};function nn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(fo(e)||Hc(e))return Uw(os(jw(Mh,Bc([e],t,!0))));var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?os(i):Uw(os(jw(i,t)))}function My(e,t,n){if(n===void 0&&(n=Ma),!t)throw fs(1,t);var i=function(o){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];return e(t,n,nn.apply(void 0,Bc([o],l,!1)))};return i.attrs=function(o){return My(e,t,Gt(Gt({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},i.withConfig=function(o){return My(e,t,Gt(Gt({},n),o))},i}var $C=function(e){return My(EL,e)},O=$C;TC.forEach(function(e){O[e]=$C(e)});var TL=(function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=UC(t),Uf.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,i,o){var l=o(Dy(os(this.rules,n,i,o)),""),u=this.componentId+t;i.insertRules(u,u,l)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,i,o){t>2&&Uf.registerId(this.componentId+t),this.removeStyles(t,i),this.createStyles(t,n,i,o)},e})();function CL(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var i=nn.apply(void 0,Bc([e],t,!1)),o="sc-global-".concat(AC(JSON.stringify(i))),l=new TL(i,o),u=function(h){var p=ky(),g=cr.useContext(La),y=cr.useRef(p.styleSheet.allocateGSInstance(o)).current;return p.styleSheet.server&&f(y,h,p.styleSheet,g,p.stylis),cr.useLayoutEffect(function(){if(!p.styleSheet.server)return f(y,h,p.styleSheet,g,p.stylis),function(){return l.removeStyles(y,p.styleSheet)}},[y,h,p.styleSheet,g,p.stylis]),null};function f(h,p,g,y,_){if(l.isStatic)l.renderStyles(h,V2,g,_);else{var b=Gt(Gt({},p),{theme:EC(p,y,u.defaultProps)});l.renderStyles(h,b,g,_)}}return cr.memo(u)}const Ta=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__,hs=globalThis,Cc="10.11.0";function zC(){return zv(hs),hs}function zv(e){const t=e.__SENTRY__=e.__SENTRY__||{};return t.version=t.version||Cc,t[Cc]=t[Cc]||{}}function Bv(e,t,n=hs){const i=n.__SENTRY__=n.__SENTRY__||{},o=i[Cc]=i[Cc]||{};return o[e]||(o[e]=t())}const RL="Sentry Logger ",$w={};function AL(e){if(!("console"in hs))return e();const t=hs.console,n={},i=Object.keys($w);i.forEach(o=>{const l=$w[o];n[o]=t[o],t[o]=l});try{return e()}finally{i.forEach(o=>{t[o]=n[o]})}}function IL(){Fv().enabled=!0}function DL(){Fv().enabled=!1}function BC(){return Fv().enabled}function OL(...e){Hv("log",...e)}function NL(...e){Hv("warn",...e)}function kL(...e){Hv("error",...e)}function Hv(e,...t){Ta&&BC()&&AL(()=>{hs.console[e](`${RL}[${e}]:`,...t)})}function Fv(){return Ta?Bv("loggerSettings",()=>({enabled:!1})):{enabled:!1}}const xf={enable:IL,disable:DL,isEnabled:BC,log:OL,warn:NL,error:kL},ML=Object.prototype.toString;function LL(e,t){return ML.call(e)===`[object ${t}]`}function PL(e){return LL(e,"Object")}function jL(e){return!!(e?.then&&typeof e.then=="function")}function UL(e,t=0){return typeof e!="string"||t===0||e.length<=t?e:`${e.slice(0,t)}...`}function $L(e,t,n){try{Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0})}catch{Ta&&xf.log(`Failed to add non-enumerable property "${t}" to object`,e)}}function zL(){const e=hs;return e.crypto||e.msCrypto}function Rc(e=zL()){let t=()=>Math.random()*16;try{if(e?.randomUUID)return e.randomUUID().replace(/-/g,"");e?.getRandomValues&&(t=()=>{const n=new Uint8Array(1);return e.getRandomValues(n),n[0]})}catch{}return("10000000100040008000"+1e11).replace(/[018]/g,n=>(n^(t()&15)>>n/4).toString(16))}const HC=1e3;function FC(){return Date.now()/HC}function BL(){const{performance:e}=hs;if(!e?.now||!e.timeOrigin)return FC;const t=e.timeOrigin;return()=>(t+e.now())/HC}let zw;function HL(){return(zw??(zw=BL()))()}function FL(e,t={}){if(t.user&&(!e.ipAddress&&t.user.ip_address&&(e.ipAddress=t.user.ip_address),!e.did&&!t.did&&(e.did=t.user.id||t.user.email||t.user.username)),e.timestamp=t.timestamp||HL(),t.abnormal_mechanism&&(e.abnormal_mechanism=t.abnormal_mechanism),t.ignoreDuration&&(e.ignoreDuration=t.ignoreDuration),t.sid&&(e.sid=t.sid.length===32?t.sid:Rc()),t.init!==void 0&&(e.init=t.init),!e.did&&t.did&&(e.did=`${t.did}`),typeof t.started=="number"&&(e.started=t.started),e.ignoreDuration)e.duration=void 0;else if(typeof t.duration=="number")e.duration=t.duration;else{const n=e.timestamp-e.started;e.duration=n>=0?n:0}t.release&&(e.release=t.release),t.environment&&(e.environment=t.environment),!e.ipAddress&&t.ipAddress&&(e.ipAddress=t.ipAddress),!e.userAgent&&t.userAgent&&(e.userAgent=t.userAgent),typeof t.errors=="number"&&(e.errors=t.errors),t.status&&(e.status=t.status)}function qC(e,t,n=2){if(!t||typeof t!="object"||n<=0)return t;if(e&&Object.keys(t).length===0)return e;const i={...e};for(const o in t)Object.prototype.hasOwnProperty.call(t,o)&&(i[o]=qC(i[o],t[o],n-1));return i}function Bw(){return Rc()}const Ly="_sentrySpan";function Hw(e,t){t?$L(e,Ly,t):delete e[Ly]}function Fw(e){return e[Ly]}const qL=100;class ho{constructor(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._attachments=[],this._user={},this._tags={},this._extra={},this._contexts={},this._sdkProcessingMetadata={},this._propagationContext={traceId:Bw(),sampleRand:Math.random()}}clone(){const t=new ho;return t._breadcrumbs=[...this._breadcrumbs],t._tags={...this._tags},t._extra={...this._extra},t._contexts={...this._contexts},this._contexts.flags&&(t._contexts.flags={values:[...this._contexts.flags.values]}),t._user=this._user,t._level=this._level,t._session=this._session,t._transactionName=this._transactionName,t._fingerprint=this._fingerprint,t._eventProcessors=[...this._eventProcessors],t._attachments=[...this._attachments],t._sdkProcessingMetadata={...this._sdkProcessingMetadata},t._propagationContext={...this._propagationContext},t._client=this._client,t._lastEventId=this._lastEventId,Hw(t,Fw(this)),t}setClient(t){this._client=t}setLastEventId(t){this._lastEventId=t}getClient(){return this._client}lastEventId(){return this._lastEventId}addScopeListener(t){this._scopeListeners.push(t)}addEventProcessor(t){return this._eventProcessors.push(t),this}setUser(t){return this._user=t||{email:void 0,id:void 0,ip_address:void 0,username:void 0},this._session&&FL(this._session,{user:t}),this._notifyScopeListeners(),this}getUser(){return this._user}setTags(t){return this._tags={...this._tags,...t},this._notifyScopeListeners(),this}setTag(t,n){return this._tags={...this._tags,[t]:n},this._notifyScopeListeners(),this}setExtras(t){return this._extra={...this._extra,...t},this._notifyScopeListeners(),this}setExtra(t,n){return this._extra={...this._extra,[t]:n},this._notifyScopeListeners(),this}setFingerprint(t){return this._fingerprint=t,this._notifyScopeListeners(),this}setLevel(t){return this._level=t,this._notifyScopeListeners(),this}setTransactionName(t){return this._transactionName=t,this._notifyScopeListeners(),this}setContext(t,n){return n===null?delete this._contexts[t]:this._contexts[t]=n,this._notifyScopeListeners(),this}setSession(t){return t?this._session=t:delete this._session,this._notifyScopeListeners(),this}getSession(){return this._session}update(t){if(!t)return this;const n=typeof t=="function"?t(this):t,i=n instanceof ho?n.getScopeData():PL(n)?t:void 0,{tags:o,extra:l,user:u,contexts:f,level:h,fingerprint:p=[],propagationContext:g}=i||{};return this._tags={...this._tags,...o},this._extra={...this._extra,...l},this._contexts={...this._contexts,...f},u&&Object.keys(u).length&&(this._user=u),h&&(this._level=h),p.length&&(this._fingerprint=p),g&&(this._propagationContext=g),this}clear(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._session=void 0,Hw(this,void 0),this._attachments=[],this.setPropagationContext({traceId:Bw(),sampleRand:Math.random()}),this._notifyScopeListeners(),this}addBreadcrumb(t,n){const i=typeof n=="number"?n:qL;if(i<=0)return this;const o={timestamp:FC(),...t,message:t.message?UL(t.message,2048):t.message};return this._breadcrumbs.push(o),this._breadcrumbs.length>i&&(this._breadcrumbs=this._breadcrumbs.slice(-i),this._client?.recordDroppedEvent("buffer_overflow","log_item")),this._notifyScopeListeners(),this}getLastBreadcrumb(){return this._breadcrumbs[this._breadcrumbs.length-1]}clearBreadcrumbs(){return this._breadcrumbs=[],this._notifyScopeListeners(),this}addAttachment(t){return this._attachments.push(t),this}clearAttachments(){return this._attachments=[],this}getScopeData(){return{breadcrumbs:this._breadcrumbs,attachments:this._attachments,contexts:this._contexts,tags:this._tags,extra:this._extra,user:this._user,level:this._level,fingerprint:this._fingerprint||[],eventProcessors:this._eventProcessors,propagationContext:this._propagationContext,sdkProcessingMetadata:this._sdkProcessingMetadata,transactionName:this._transactionName,span:Fw(this)}}setSDKProcessingMetadata(t){return this._sdkProcessingMetadata=qC(this._sdkProcessingMetadata,t,2),this}setPropagationContext(t){return this._propagationContext=t,this}getPropagationContext(){return this._propagationContext}captureException(t,n){const i=n?.event_id||Rc();if(!this._client)return Ta&&xf.warn("No client configured on scope - will not capture exception!"),i;const o=new Error("Sentry syntheticException");return this._client.captureException(t,{originalException:t,syntheticException:o,...n,event_id:i},this),i}captureMessage(t,n,i){const o=i?.event_id||Rc();if(!this._client)return Ta&&xf.warn("No client configured on scope - will not capture message!"),o;const l=new Error(t);return this._client.captureMessage(t,n,{originalException:t,syntheticException:l,...i,event_id:o},this),o}captureEvent(t,n){const i=n?.event_id||Rc();return this._client?(this._client.captureEvent(t,{...n,event_id:i},this),i):(Ta&&xf.warn("No client configured on scope - will not capture event!"),i)}_notifyScopeListeners(){this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach(t=>{t(this)}),this._notifyingListeners=!1)}}function VL(){return Bv("defaultCurrentScope",()=>new ho)}function GL(){return Bv("defaultIsolationScope",()=>new ho)}class YL{constructor(t,n){let i;t?i=t:i=new ho;let o;n?o=n:o=new ho,this._stack=[{scope:i}],this._isolationScope=o}withScope(t){const n=this._pushScope();let i;try{i=t(n)}catch(o){throw this._popScope(),o}return jL(i)?i.then(o=>(this._popScope(),o),o=>{throw this._popScope(),o}):(this._popScope(),i)}getClient(){return this.getStackTop().client}getScope(){return this.getStackTop().scope}getIsolationScope(){return this._isolationScope}getStackTop(){return this._stack[this._stack.length-1]}_pushScope(){const t=this.getScope().clone();return this._stack.push({client:this.getClient(),scope:t}),t}_popScope(){return this._stack.length<=1?!1:!!this._stack.pop()}}function Pa(){const e=zC(),t=zv(e);return t.stack=t.stack||new YL(VL(),GL())}function WL(e){return Pa().withScope(e)}function QL(e,t){const n=Pa();return n.withScope(()=>(n.getStackTop().scope=e,t(e)))}function qw(e){return Pa().withScope(()=>e(Pa().getIsolationScope()))}function KL(){return{withIsolationScope:qw,withScope:WL,withSetScope:QL,withSetIsolationScope:(e,t)=>qw(t),getCurrentScope:()=>Pa().getScope(),getIsolationScope:()=>Pa().getIsolationScope()}}function XL(e){const t=zv(e);return t.acs?t.acs:KL()}function VC(){const e=zC();return XL(e).getCurrentScope()}function Nr(e,t){return VC().captureException(e,void 0)}function qv(e,t){const n=typeof t=="string"?t:void 0,i=typeof t!="string"?{captureContext:t}:void 0;return VC().captureMessage(e,n,i)}const ZL=()=>{};var Vw={};/**
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
 */const GC={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const he=function(e,t){if(!e)throw Wa(t)},Wa=function(e){return new Error("Firebase Database ("+GC.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
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
 */const YC=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let o=e.charCodeAt(i);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(e.charCodeAt(++i)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},JL=function(e){const t=[];let n=0,i=0;for(;n<e.length;){const o=e[n++];if(o<128)t[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=e[n++];t[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=e[n++],u=e[n++],f=e[n++],h=((o&7)<<18|(l&63)<<12|(u&63)<<6|f&63)-65536;t[i++]=String.fromCharCode(55296+(h>>10)),t[i++]=String.fromCharCode(56320+(h&1023))}else{const l=e[n++],u=e[n++];t[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|u&63)}}return t.join("")},Vv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<e.length;o+=3){const l=e[o],u=o+1<e.length,f=u?e[o+1]:0,h=o+2<e.length,p=h?e[o+2]:0,g=l>>2,y=(l&3)<<4|f>>4;let _=(f&15)<<2|p>>6,b=p&63;h||(b=64,u||(_=64)),i.push(n[g],n[y],n[_],n[b])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(YC(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):JL(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<e.length;){const l=n[e.charAt(o++)],f=o<e.length?n[e.charAt(o)]:0;++o;const p=o<e.length?n[e.charAt(o)]:64;++o;const y=o<e.length?n[e.charAt(o)]:64;if(++o,l==null||f==null||p==null||y==null)throw new eP;const _=l<<2|f>>4;if(i.push(_),p!==64){const b=f<<4&240|p>>2;if(i.push(b),y!==64){const w=p<<6&192|y;i.push(w)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class eP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const WC=function(e){const t=YC(e);return Vv.encodeByteArray(t,!0)},$f=function(e){return WC(e).replace(/\./g,"")},zf=function(e){try{return Vv.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function tP(e){return QC(void 0,e)}function QC(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)!t.hasOwnProperty(n)||!nP(n)||(e[n]=QC(e[n],t[n]));return e}function nP(e){return e!=="__proto__"}/**
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
 */function rP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const iP=()=>rP().__FIREBASE_DEFAULTS__,sP=()=>{if(typeof process>"u"||typeof Vw>"u")return;const e=Vw.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},oP=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&zf(e[1]);return t&&JSON.parse(t)},Gv=()=>{try{return ZL()||iP()||sP()||oP()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},KC=e=>Gv()?.emulatorHosts?.[e],aP=e=>{const t=KC(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),i]:[t.substring(0,n),i]},XC=()=>Gv()?.config,ZC=e=>Gv()?.[`_${e}`];/**
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
 */function Qa(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function JC(e){return(await fetch(e,{credentials:"include"})).ok}/**
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
 */function lP(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",o=e.iat||0,l=e.sub||e.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u={iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...e};return[$f(JSON.stringify(n)),$f(JSON.stringify(u)),""].join(".")}const Ac={};function cP(){const e={prod:[],emulator:[]};for(const t of Object.keys(Ac))Ac[t]?e.emulator.push(t):e.prod.push(t);return e}function uP(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}let Gw=!1;function eR(e,t){if(typeof window>"u"||typeof document>"u"||!Qa(window.location.host)||Ac[e]===t||Ac[e]||Gw)return;Ac[e]=t;function n(_){return`__firebase__banner__${_}`}const i="__firebase__banner",l=cP().prod.length>0;function u(){const _=document.getElementById(i);_&&_.remove()}function f(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function h(_,b){_.setAttribute("width","24"),_.setAttribute("id",b),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function p(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{Gw=!0,u()},_}function g(_,b){_.setAttribute("id",b),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function y(){const _=uP(i),b=n("text"),w=document.getElementById(b)||document.createElement("span"),I=n("learnmore"),T=document.getElementById(I)||document.createElement("a"),D=n("preprendIcon"),M=document.getElementById(D)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const C=_.element;f(C),g(T,I);const A=p();h(M,D),C.append(M,w,T,A),document.body.appendChild(C)}l?(w.innerText="Preview backend disconnected.",M.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,w.innerText="Preview backend running in this workspace."),w.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}/**
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
 */function fn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fn())}function dP(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function fP(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function tR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hP(){const e=fn();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function pP(){return GC.NODE_ADMIN===!0}function nR(){try{return typeof indexedDB=="object"}catch{return!1}}function rR(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{t(o.error?.message||"")}}catch(n){t(n)}})}function mP(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const gP="FirebaseError";class bi extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name=gP,Object.setPrototypeOf(this,bi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ro.prototype.create)}}class Ro{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},o=`${this.service}/${t}`,l=this.errors[t],u=l?yP(l,i):"Error",f=`${this.serviceName}: ${u} (${o}).`;return new bi(o,f,i)}}function yP(e,t){return e.replace(vP,(n,i)=>{const o=t[i];return o!=null?String(o):`<${i}?>`})}const vP=/\{\$([^}]+)}/g;/**
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
 */function Fc(e){return JSON.parse(e)}function $t(e){return JSON.stringify(e)}/**
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
 */const iR=function(e){let t={},n={},i={},o="";try{const l=e.split(".");t=Fc(zf(l[0])||""),n=Fc(zf(l[1])||""),o=l[2],i=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:i,signature:o}},_P=function(e){const t=iR(e),n=t.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},bP=function(e){const t=iR(e).claims;return typeof t=="object"&&t.admin===!0};/**
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
 */function Lr(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ja(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function Py(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Bf(e,t,n){const i={};for(const o in e)Object.prototype.hasOwnProperty.call(e,o)&&(i[o]=t.call(n,e[o],o,e));return i}function po(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const o of n){if(!i.includes(o))return!1;const l=e[o],u=t[o];if(Yw(l)&&Yw(u)){if(!po(l,u))return!1}else if(l!==u)return!1}for(const o of i)if(!n.includes(o))return!1;return!0}function Yw(e){return e!==null&&typeof e=="object"}/**
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
 */function Ka(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(o=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function Sc(e){const t={};return e.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");t[decodeURIComponent(o)]=decodeURIComponent(l)}}),t}function wc(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}/**
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
 */class SP{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,n){n||(n=0);const i=this.W_;if(typeof t=="string")for(let y=0;y<16;y++)i[y]=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),n+=4;else for(let y=0;y<16;y++)i[y]=t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3],n+=4;for(let y=16;y<80;y++){const _=i[y-3]^i[y-8]^i[y-14]^i[y-16];i[y]=(_<<1|_>>>31)&4294967295}let o=this.chain_[0],l=this.chain_[1],u=this.chain_[2],f=this.chain_[3],h=this.chain_[4],p,g;for(let y=0;y<80;y++){y<40?y<20?(p=f^l&(u^f),g=1518500249):(p=l^u^f,g=1859775393):y<60?(p=l&u|f&(l|u),g=2400959708):(p=l^u^f,g=3395469782);const _=(o<<5|o>>>27)+p+h+g+i[y]&4294967295;h=f,f=u,u=(l<<30|l>>>2)&4294967295,l=o,o=_}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295}update(t,n){if(t==null)return;n===void 0&&(n=t.length);const i=n-this.blockSize;let o=0;const l=this.buf_;let u=this.inbuf_;for(;o<n;){if(u===0)for(;o<=i;)this.compress_(t,o),o+=this.blockSize;if(typeof t=="string"){for(;o<n;)if(l[u]=t.charCodeAt(o),++u,++o,u===this.blockSize){this.compress_(l),u=0;break}}else for(;o<n;)if(l[u]=t[o],++u,++o,u===this.blockSize){this.compress_(l),u=0;break}}this.inbuf_=u,this.total_+=n}digest(){const t=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let o=0;o<5;o++)for(let l=24;l>=0;l-=8)t[i]=this.chain_[o]>>l&255,++i;return t}}function wP(e,t){const n=new xP(e,t);return n.subscribe.bind(n)}class xP{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,i){let o;if(t===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");EP(t,["next","error","complete"])?o=t:o={next:t,error:n,complete:i},o.next===void 0&&(o.next=Og),o.error===void 0&&(o.error=Og),o.complete===void 0&&(o.complete=Og);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function EP(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Og(){}function Lh(e,t){return`${e} failed: ${t} argument `}/**
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
 */const TP=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let o=e.charCodeAt(i);if(o>=55296&&o<=56319){const l=o-55296;i++,he(i<e.length,"Surrogate pair missing trail surrogate.");const u=e.charCodeAt(i)-56320;o=65536+(l<<10)+u}o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):o<65536?(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},Ph=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};/**
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
 */function Yt(e){return e&&e._delegate?e._delegate:e}class yr{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class CP{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const i=new hu;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t?.identifier),i=t?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(AP(t))try{this.getOrInitializeService({instanceIdentifier:to})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(t=to){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=to){return this.instances.has(t)}getOptions(t=to){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[l,u]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&u.resolve(o)}return o}onInit(t,n){const i=this.normalizeInstanceIdentifier(n),o=this.onInitCallbacks.get(i)??new Set;o.add(t),this.onInitCallbacks.set(i,o);const l=this.instances.get(i);return l&&t(l,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const i=this.onInitCallbacks.get(n);if(i)for(const o of i)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:RP(t),options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=to){return this.component?this.component.multipleInstances?t:to:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RP(e){return e===to?void 0:e}function AP(e){return e.instantiationMode==="EAGER"}/**
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
 */class IP{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new CP(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var lt;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(lt||(lt={}));const DP={debug:lt.DEBUG,verbose:lt.VERBOSE,info:lt.INFO,warn:lt.WARN,error:lt.ERROR,silent:lt.SILENT},OP=lt.INFO,NP={[lt.DEBUG]:"log",[lt.VERBOSE]:"log",[lt.INFO]:"info",[lt.WARN]:"warn",[lt.ERROR]:"error"},kP=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),o=NP[t];if(o)console[o](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Wv{constructor(t){this.name=t,this._logLevel=OP,this._logHandler=kP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in lt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?DP[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,lt.DEBUG,...t),this._logHandler(this,lt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,lt.VERBOSE,...t),this._logHandler(this,lt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,lt.INFO,...t),this._logHandler(this,lt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,lt.WARN,...t),this._logHandler(this,lt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,lt.ERROR,...t),this._logHandler(this,lt.ERROR,...t)}}const MP=(e,t)=>t.some(n=>e instanceof n);let Ww,Qw;function LP(){return Ww||(Ww=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function PP(){return Qw||(Qw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sR=new WeakMap,jy=new WeakMap,oR=new WeakMap,Ng=new WeakMap,Qv=new WeakMap;function jP(e){const t=new Promise((n,i)=>{const o=()=>{e.removeEventListener("success",l),e.removeEventListener("error",u)},l=()=>{n(di(e.result)),o()},u=()=>{i(e.error),o()};e.addEventListener("success",l),e.addEventListener("error",u)});return t.then(n=>{n instanceof IDBCursor&&sR.set(n,e)}).catch(()=>{}),Qv.set(t,e),t}function UP(e){if(jy.has(e))return;const t=new Promise((n,i)=>{const o=()=>{e.removeEventListener("complete",l),e.removeEventListener("error",u),e.removeEventListener("abort",u)},l=()=>{n(),o()},u=()=>{i(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",l),e.addEventListener("error",u),e.addEventListener("abort",u)});jy.set(e,t)}let Uy={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return jy.get(e);if(t==="objectStoreNames")return e.objectStoreNames||oR.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return di(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function $P(e){Uy=e(Uy)}function zP(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const i=e.call(kg(this),t,...n);return oR.set(i,t.sort?t.sort():[t]),di(i)}:PP().includes(e)?function(...t){return e.apply(kg(this),t),di(sR.get(this))}:function(...t){return di(e.apply(kg(this),t))}}function BP(e){return typeof e=="function"?zP(e):(e instanceof IDBTransaction&&UP(e),MP(e,LP())?new Proxy(e,Uy):e)}function di(e){if(e instanceof IDBRequest)return jP(e);if(Ng.has(e))return Ng.get(e);const t=BP(e);return t!==e&&(Ng.set(e,t),Qv.set(t,e)),t}const kg=e=>Qv.get(e);function jh(e,t,{blocked:n,upgrade:i,blocking:o,terminated:l}={}){const u=indexedDB.open(e,t),f=di(u);return i&&u.addEventListener("upgradeneeded",h=>{i(di(u.result),h.oldVersion,h.newVersion,di(u.transaction),h)}),n&&u.addEventListener("blocked",h=>n(h.oldVersion,h.newVersion,h)),f.then(h=>{l&&h.addEventListener("close",()=>l()),o&&h.addEventListener("versionchange",p=>o(p.oldVersion,p.newVersion,p))}).catch(()=>{}),f}function Mg(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",i=>t(i.oldVersion,i)),di(n).then(()=>{})}const HP=["get","getKey","getAll","getAllKeys","count"],FP=["put","add","delete","clear"],Lg=new Map;function Kw(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Lg.get(t))return Lg.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,o=FP.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(o||HP.includes(n)))return;const l=async function(u,...f){const h=this.transaction(u,o?"readwrite":"readonly");let p=h.store;return i&&(p=p.index(f.shift())),(await Promise.all([p[n](...f),o&&h.done]))[0]};return Lg.set(t,l),l}$P(e=>({...e,get:(t,n,i)=>Kw(t,n)||e.get(t,n,i),has:(t,n)=>!!Kw(t,n)||e.has(t,n)}));/**
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
 */class qP{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(VP(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function VP(e){return e.getComponent()?.type==="VERSION"}const $y="@firebase/app",Xw="0.14.2";/**
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
 */const pi=new Wv("@firebase/app"),GP="@firebase/app-compat",YP="@firebase/analytics-compat",WP="@firebase/analytics",QP="@firebase/app-check-compat",KP="@firebase/app-check",XP="@firebase/auth",ZP="@firebase/auth-compat",JP="@firebase/database",e4="@firebase/data-connect",t4="@firebase/database-compat",n4="@firebase/functions",r4="@firebase/functions-compat",i4="@firebase/installations",s4="@firebase/installations-compat",o4="@firebase/messaging",a4="@firebase/messaging-compat",l4="@firebase/performance",c4="@firebase/performance-compat",u4="@firebase/remote-config",d4="@firebase/remote-config-compat",f4="@firebase/storage",h4="@firebase/storage-compat",p4="@firebase/firestore",m4="@firebase/ai",g4="@firebase/firestore-compat",y4="firebase",v4="12.2.0";/**
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
 */const zy="[DEFAULT]",_4={[$y]:"fire-core",[GP]:"fire-core-compat",[WP]:"fire-analytics",[YP]:"fire-analytics-compat",[KP]:"fire-app-check",[QP]:"fire-app-check-compat",[XP]:"fire-auth",[ZP]:"fire-auth-compat",[JP]:"fire-rtdb",[e4]:"fire-data-connect",[t4]:"fire-rtdb-compat",[n4]:"fire-fn",[r4]:"fire-fn-compat",[i4]:"fire-iid",[s4]:"fire-iid-compat",[o4]:"fire-fcm",[a4]:"fire-fcm-compat",[l4]:"fire-perf",[c4]:"fire-perf-compat",[u4]:"fire-rc",[d4]:"fire-rc-compat",[f4]:"fire-gcs",[h4]:"fire-gcs-compat",[p4]:"fire-fst",[g4]:"fire-fst-compat",[m4]:"fire-vertex","fire-js":"fire-js",[y4]:"fire-js-all"};/**
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
 */const Hf=new Map,b4=new Map,By=new Map;function Zw(e,t){try{e.container.addComponent(t)}catch(n){pi.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function kr(e){const t=e.name;if(By.has(t))return pi.debug(`There were multiple attempts to register component ${t}.`),!1;By.set(t,e);for(const n of Hf.values())Zw(n,e);for(const n of b4.values())Zw(n,e);return!0}function Xa(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function kn(e){return e==null?!1:e.settings!==void 0}/**
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
 */const S4={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},as=new Ro("app","Firebase",S4);/**
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
 */class w4{constructor(t,n,i){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new yr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw as.create("app-deleted",{appName:this._name})}}/**
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
 */const Za=v4;function aR(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const i={name:zy,automaticDataCollectionEnabled:!0,...t},o=i.name;if(typeof o!="string"||!o)throw as.create("bad-app-name",{appName:String(o)});if(n||(n=XC()),!n)throw as.create("no-options");const l=Hf.get(o);if(l){if(po(n,l.options)&&po(i,l.config))return l;throw as.create("duplicate-app",{appName:o})}const u=new IP(o);for(const h of By.values())u.addComponent(h);const f=new w4(n,i,u);return Hf.set(o,f),f}function Kv(e=zy){const t=Hf.get(e);if(!t&&e===zy&&XC())return aR();if(!t)throw as.create("no-app",{appName:e});return t}function Qn(e,t,n){let i=_4[e]??e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),l=t.match(/\s|\//);if(o||l){const u=[`Unable to register library "${i}" with version "${t}":`];o&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&l&&u.push("and"),l&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),pi.warn(u.join(" "));return}kr(new yr(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const x4="firebase-heartbeat-database",E4=1,qc="firebase-heartbeat-store";let Pg=null;function lR(){return Pg||(Pg=jh(x4,E4,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(qc)}catch(n){console.warn(n)}}}}).catch(e=>{throw as.create("idb-open",{originalErrorMessage:e.message})})),Pg}async function T4(e){try{const n=(await lR()).transaction(qc),i=await n.objectStore(qc).get(cR(e));return await n.done,i}catch(t){if(t instanceof bi)pi.warn(t.message);else{const n=as.create("idb-get",{originalErrorMessage:t?.message});pi.warn(n.message)}}}async function Jw(e,t){try{const i=(await lR()).transaction(qc,"readwrite");await i.objectStore(qc).put(t,cR(e)),await i.done}catch(n){if(n instanceof bi)pi.warn(n.message);else{const i=as.create("idb-set",{originalErrorMessage:n?.message});pi.warn(i.message)}}}function cR(e){return`${e.name}!${e.options.appId}`}/**
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
 */const C4=1024,R4=30;class A4{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new D4(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ex();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats.length>R4){const o=O4(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){pi.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ex(),{heartbeatsToSend:n,unsentEntries:i}=I4(this._heartbeatsCache.heartbeats),o=$f(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return pi.warn(t),""}}}function ex(){return new Date().toISOString().substring(0,10)}function I4(e,t=C4){const n=[];let i=e.slice();for(const o of e){const l=n.find(u=>u.agent===o.agent);if(l){if(l.dates.push(o.date),tx(n)>t){l.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),tx(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class D4{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nR()?rR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await T4(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const i=await this.read();return Jw(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const i=await this.read();return Jw(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function tx(e){return $f(JSON.stringify({version:2,heartbeats:e})).length}function O4(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let i=1;i<e.length;i++)e[i].date<n&&(n=e[i].date,t=i);return t}/**
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
 */function N4(e){kr(new yr("platform-logger",t=>new qP(t),"PRIVATE")),kr(new yr("heartbeat",t=>new A4(t),"PRIVATE")),Qn($y,Xw,e),Qn($y,Xw,"esm2020"),Qn("fire-js","")}N4("");const uR="@firebase/installations",Xv="0.6.19";/**
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
 */const dR=1e4,fR=`w:${Xv}`,hR="FIS_v2",k4="https://firebaseinstallations.googleapis.com/v1",M4=3600*1e3,L4="installations",P4="Installations";/**
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
 */const j4={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},mo=new Ro(L4,P4,j4);function pR(e){return e instanceof bi&&e.code.includes("request-failed")}/**
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
 */function mR({projectId:e}){return`${k4}/projects/${e}/installations`}function gR(e){return{token:e.token,requestStatus:2,expiresIn:$4(e.expiresIn),creationTime:Date.now()}}async function yR(e,t){const i=(await t.json()).error;return mo.create("request-failed",{requestName:e,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function vR({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function U4(e,{refreshToken:t}){const n=vR(e);return n.append("Authorization",z4(t)),n}async function _R(e){const t=await e();return t.status>=500&&t.status<600?e():t}function $4(e){return Number(e.replace("s","000"))}function z4(e){return`${hR} ${e}`}/**
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
 */async function B4({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const i=mR(e),o=vR(e),l=t.getImmediate({optional:!0});if(l){const p=await l.getHeartbeatsHeader();p&&o.append("x-firebase-client",p)}const u={fid:n,authVersion:hR,appId:e.appId,sdkVersion:fR},f={method:"POST",headers:o,body:JSON.stringify(u)},h=await _R(()=>fetch(i,f));if(h.ok){const p=await h.json();return{fid:p.fid||n,registrationStatus:2,refreshToken:p.refreshToken,authToken:gR(p.authToken)}}else throw await yR("Create Installation",h)}/**
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
 */function bR(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function H4(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const F4=/^[cdef][\w-]{21}$/,Hy="";function q4(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=V4(e);return F4.test(n)?n:Hy}catch{return Hy}}function V4(e){return H4(e).substr(0,22)}/**
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
 */function Uh(e){return`${e.appName}!${e.appId}`}/**
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
 */const SR=new Map;function wR(e,t){const n=Uh(e);xR(n,t),G4(n,t)}function xR(e,t){const n=SR.get(e);if(n)for(const i of n)i(t)}function G4(e,t){const n=Y4();n&&n.postMessage({key:e,fid:t}),W4()}let oo=null;function Y4(){return!oo&&"BroadcastChannel"in self&&(oo=new BroadcastChannel("[Firebase] FID Change"),oo.onmessage=e=>{xR(e.data.key,e.data.fid)}),oo}function W4(){SR.size===0&&oo&&(oo.close(),oo=null)}/**
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
 */const Q4="firebase-installations-database",K4=1,go="firebase-installations-store";let jg=null;function Zv(){return jg||(jg=jh(Q4,K4,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(go)}}})),jg}async function Ff(e,t){const n=Uh(e),o=(await Zv()).transaction(go,"readwrite"),l=o.objectStore(go),u=await l.get(n);return await l.put(t,n),await o.done,(!u||u.fid!==t.fid)&&wR(e,t.fid),t}async function ER(e){const t=Uh(e),i=(await Zv()).transaction(go,"readwrite");await i.objectStore(go).delete(t),await i.done}async function $h(e,t){const n=Uh(e),o=(await Zv()).transaction(go,"readwrite"),l=o.objectStore(go),u=await l.get(n),f=t(u);return f===void 0?await l.delete(n):await l.put(f,n),await o.done,f&&(!u||u.fid!==f.fid)&&wR(e,f.fid),f}/**
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
 */async function Jv(e){let t;const n=await $h(e.appConfig,i=>{const o=X4(i),l=Z4(e,o);return t=l.registrationPromise,l.installationEntry});return n.fid===Hy?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function X4(e){const t=e||{fid:q4(),registrationStatus:0};return TR(t)}function Z4(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(mo.create("app-offline"));return{installationEntry:t,registrationPromise:o}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=J4(e,n);return{installationEntry:n,registrationPromise:i}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:e6(e)}:{installationEntry:t}}async function J4(e,t){try{const n=await B4(e,t);return Ff(e.appConfig,n)}catch(n){throw pR(n)&&n.customData.serverCode===409?await ER(e.appConfig):await Ff(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function e6(e){let t=await nx(e.appConfig);for(;t.registrationStatus===1;)await bR(100),t=await nx(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await Jv(e);return i||n}return t}function nx(e){return $h(e,t=>{if(!t)throw mo.create("installation-not-found");return TR(t)})}function TR(e){return t6(e)?{fid:e.fid,registrationStatus:0}:e}function t6(e){return e.registrationStatus===1&&e.registrationTime+dR<Date.now()}/**
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
 */async function n6({appConfig:e,heartbeatServiceProvider:t},n){const i=r6(e,n),o=U4(e,n),l=t.getImmediate({optional:!0});if(l){const p=await l.getHeartbeatsHeader();p&&o.append("x-firebase-client",p)}const u={installation:{sdkVersion:fR,appId:e.appId}},f={method:"POST",headers:o,body:JSON.stringify(u)},h=await _R(()=>fetch(i,f));if(h.ok){const p=await h.json();return gR(p)}else throw await yR("Generate Auth Token",h)}function r6(e,{fid:t}){return`${mR(e)}/${t}/authTokens:generate`}/**
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
 */async function e_(e,t=!1){let n;const i=await $h(e.appConfig,l=>{if(!CR(l))throw mo.create("not-registered");const u=l.authToken;if(!t&&o6(u))return l;if(u.requestStatus===1)return n=i6(e,t),l;{if(!navigator.onLine)throw mo.create("app-offline");const f=l6(l);return n=s6(e,f),f}});return n?await n:i.authToken}async function i6(e,t){let n=await rx(e.appConfig);for(;n.authToken.requestStatus===1;)await bR(100),n=await rx(e.appConfig);const i=n.authToken;return i.requestStatus===0?e_(e,t):i}function rx(e){return $h(e,t=>{if(!CR(t))throw mo.create("not-registered");const n=t.authToken;return c6(n)?{...t,authToken:{requestStatus:0}}:t})}async function s6(e,t){try{const n=await n6(e,t),i={...t,authToken:n};return await Ff(e.appConfig,i),n}catch(n){if(pR(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ER(e.appConfig);else{const i={...t,authToken:{requestStatus:0}};await Ff(e.appConfig,i)}throw n}}function CR(e){return e!==void 0&&e.registrationStatus===2}function o6(e){return e.requestStatus===2&&!a6(e)}function a6(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+M4}function l6(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}function c6(e){return e.requestStatus===1&&e.requestTime+dR<Date.now()}/**
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
 */async function u6(e){const t=e,{installationEntry:n,registrationPromise:i}=await Jv(t);return i?i.catch(console.error):e_(t).catch(console.error),n.fid}/**
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
 */async function d6(e,t=!1){const n=e;return await f6(n),(await e_(n,t)).token}async function f6(e){const{registrationPromise:t}=await Jv(e);t&&await t}/**
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
 */function h6(e){if(!e||!e.options)throw Ug("App Configuration");if(!e.name)throw Ug("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Ug(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Ug(e){return mo.create("missing-app-config-values",{valueName:e})}/**
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
 */const RR="installations",p6="installations-internal",m6=e=>{const t=e.getProvider("app").getImmediate(),n=h6(t),i=Xa(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},g6=e=>{const t=e.getProvider("app").getImmediate(),n=Xa(t,RR).getImmediate();return{getId:()=>u6(n),getToken:o=>d6(n,o)}};function y6(){kr(new yr(RR,m6,"PUBLIC")),kr(new yr(p6,g6,"PRIVATE"))}y6();Qn(uR,Xv);Qn(uR,Xv,"esm2020");/**
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
 */const v6="/firebase-messaging-sw.js",_6="/firebase-cloud-messaging-push-scope",AR="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",b6="https://fcmregistrations.googleapis.com/v1",IR="google.c.a.c_id",S6="google.c.a.c_l",w6="google.c.a.ts",x6="google.c.a.e",ix=1e4;var sx;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(sx||(sx={}));/**
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
 */var Vc;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(Vc||(Vc={}));/**
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
 */function si(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function E6(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(n),o=new Uint8Array(i.length);for(let l=0;l<i.length;++l)o[l]=i.charCodeAt(l);return o}/**
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
 */const $g="fcm_token_details_db",T6=5,ox="fcm_token_object_Store";async function C6(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(l=>l.name).includes($g))return null;let t=null;return(await jh($g,T6,{upgrade:async(i,o,l,u)=>{if(o<2||!i.objectStoreNames.contains(ox))return;const f=u.objectStore(ox),h=await f.index("fcmSenderId").get(e);if(await f.clear(),!!h){if(o===2){const p=h;if(!p.auth||!p.p256dh||!p.endpoint)return;t={token:p.fcmToken,createTime:p.createTime??Date.now(),subscriptionOptions:{auth:p.auth,p256dh:p.p256dh,endpoint:p.endpoint,swScope:p.swScope,vapidKey:typeof p.vapidKey=="string"?p.vapidKey:si(p.vapidKey)}}}else if(o===3){const p=h;t={token:p.fcmToken,createTime:p.createTime,subscriptionOptions:{auth:si(p.auth),p256dh:si(p.p256dh),endpoint:p.endpoint,swScope:p.swScope,vapidKey:si(p.vapidKey)}}}else if(o===4){const p=h;t={token:p.fcmToken,createTime:p.createTime,subscriptionOptions:{auth:si(p.auth),p256dh:si(p.p256dh),endpoint:p.endpoint,swScope:p.swScope,vapidKey:si(p.vapidKey)}}}}}})).close(),await Mg($g),await Mg("fcm_vapid_details_db"),await Mg("undefined"),R6(t)?t:null}function R6(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
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
 */const A6="firebase-messaging-database",I6=1,Gc="firebase-messaging-store";let zg=null;function DR(){return zg||(zg=jh(A6,I6,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Gc)}}})),zg}async function D6(e){const t=OR(e),i=await(await DR()).transaction(Gc).objectStore(Gc).get(t);if(i)return i;{const o=await C6(e.appConfig.senderId);if(o)return await t_(e,o),o}}async function t_(e,t){const n=OR(e),o=(await DR()).transaction(Gc,"readwrite");return await o.objectStore(Gc).put(t,n),await o.done,t}function OR({appConfig:e}){return e.appId}/**
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
 */const O6={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},an=new Ro("messaging","Messaging",O6);/**
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
 */async function N6(e,t){const n=await r_(e),i=NR(t),o={method:"POST",headers:n,body:JSON.stringify(i)};let l;try{l=await(await fetch(n_(e.appConfig),o)).json()}catch(u){throw an.create("token-subscribe-failed",{errorInfo:u?.toString()})}if(l.error){const u=l.error.message;throw an.create("token-subscribe-failed",{errorInfo:u})}if(!l.token)throw an.create("token-subscribe-no-token");return l.token}async function k6(e,t){const n=await r_(e),i=NR(t.subscriptionOptions),o={method:"PATCH",headers:n,body:JSON.stringify(i)};let l;try{l=await(await fetch(`${n_(e.appConfig)}/${t.token}`,o)).json()}catch(u){throw an.create("token-update-failed",{errorInfo:u?.toString()})}if(l.error){const u=l.error.message;throw an.create("token-update-failed",{errorInfo:u})}if(!l.token)throw an.create("token-update-no-token");return l.token}async function M6(e,t){const i={method:"DELETE",headers:await r_(e)};try{const l=await(await fetch(`${n_(e.appConfig)}/${t}`,i)).json();if(l.error){const u=l.error.message;throw an.create("token-unsubscribe-failed",{errorInfo:u})}}catch(o){throw an.create("token-unsubscribe-failed",{errorInfo:o?.toString()})}}function n_({projectId:e}){return`${b6}/projects/${e}/registrations`}async function r_({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function NR({p256dh:e,auth:t,endpoint:n,vapidKey:i}){const o={web:{endpoint:n,auth:t,p256dh:e}};return i!==AR&&(o.web.applicationPubKey=i),o}/**
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
 */const L6=10080*60*1e3;async function P6(e){const t=await U6(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:si(t.getKey("auth")),p256dh:si(t.getKey("p256dh"))},i=await D6(e.firebaseDependencies);if(i){if($6(i.subscriptionOptions,n))return Date.now()>=i.createTime+L6?j6(e,{token:i.token,createTime:Date.now(),subscriptionOptions:n}):i.token;try{await M6(e.firebaseDependencies,i.token)}catch(o){console.warn(o)}return ax(e.firebaseDependencies,n)}else return ax(e.firebaseDependencies,n)}async function j6(e,t){try{const n=await k6(e.firebaseDependencies,t),i={...t,token:n,createTime:Date.now()};return await t_(e.firebaseDependencies,i),n}catch(n){throw n}}async function ax(e,t){const i={token:await N6(e,t),createTime:Date.now(),subscriptionOptions:t};return await t_(e,i),i.token}async function U6(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:E6(t)})}function $6(e,t){const n=t.vapidKey===e.vapidKey,i=t.endpoint===e.endpoint,o=t.auth===e.auth,l=t.p256dh===e.p256dh;return n&&i&&o&&l}/**
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
 */function lx(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return z6(t,e),B6(t,e),H6(t,e),t}function z6(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const i=t.notification.body;i&&(e.notification.body=i);const o=t.notification.image;o&&(e.notification.image=o);const l=t.notification.icon;l&&(e.notification.icon=l)}function B6(e,t){t.data&&(e.data=t.data)}function H6(e,t){if(!t.fcmOptions&&!t.notification?.click_action)return;e.fcmOptions={};const n=t.fcmOptions?.link??t.notification?.click_action;n&&(e.fcmOptions.link=n);const i=t.fcmOptions?.analytics_label;i&&(e.fcmOptions.analyticsLabel=i)}/**
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
 */function F6(e){return typeof e=="object"&&!!e&&IR in e}/**
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
 */function q6(e){if(!e||!e.options)throw Bg("App Configuration Object");if(!e.name)throw Bg("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const i of t)if(!n[i])throw Bg(i);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Bg(e){return an.create("missing-app-config-values",{valueName:e})}/**
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
 */class V6{constructor(t,n,i){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=q6(t);this.firebaseDependencies={app:t,appConfig:o,installations:n,analyticsProvider:i}}_delete(){return Promise.resolve()}}/**
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
 */async function G6(e){try{e.swRegistration=await navigator.serviceWorker.register(v6,{scope:_6}),e.swRegistration.update().catch(()=>{}),await Y6(e.swRegistration)}catch(t){throw an.create("failed-service-worker-registration",{browserErrorMessage:t?.message})}}async function Y6(e){return new Promise((t,n)=>{const i=setTimeout(()=>n(new Error(`Service worker not registered after ${ix} ms`)),ix),o=e.installing||e.waiting;e.active?(clearTimeout(i),t()):o?o.onstatechange=l=>{l.target?.state==="activated"&&(o.onstatechange=null,clearTimeout(i),t())}:(clearTimeout(i),n(new Error("No incoming service worker found.")))})}/**
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
 */async function W6(e,t){if(!t&&!e.swRegistration&&await G6(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw an.create("invalid-sw-registration");e.swRegistration=t}}/**
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
 */async function Q6(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=AR)}/**
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
 */async function kR(e,t){if(!navigator)throw an.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw an.create("permission-blocked");return await Q6(e,t?.vapidKey),await W6(e,t?.serviceWorkerRegistration),P6(e)}/**
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
 */async function K6(e,t,n){const i=X6(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(i,{message_id:n[IR],message_name:n[S6],message_time:n[w6],message_device_time:Math.floor(Date.now()/1e3)})}function X6(e){switch(e){case Vc.NOTIFICATION_CLICKED:return"notification_open";case Vc.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function Z6(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===Vc.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(lx(n)):e.onMessageHandler.next(lx(n)));const i=n.data;F6(i)&&i[x6]==="1"&&await K6(e,n.messageType,i)}const cx="@firebase/messaging",ux="0.12.23";/**
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
 */const J6=e=>{const t=new V6(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>Z6(t,n)),t},ej=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:i=>kR(t,i)}};function tj(){kr(new yr("messaging",J6,"PUBLIC")),kr(new yr("messaging-internal",ej,"PRIVATE")),Qn(cx,ux),Qn(cx,ux,"esm2020")}/**
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
 */async function nj(){try{await rR()}catch{return!1}return typeof window<"u"&&nR()&&mP()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function rj(e,t){if(!navigator)throw an.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}/**
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
 */function ij(e=Kv()){return nj().then(t=>{if(!t)throw an.create("unsupported-browser")},t=>{throw an.create("indexed-db-unsupported")}),Xa(Yt(e),"messaging").getImmediate()}async function sj(e,t){return e=Yt(e),kR(e,t)}function oj(e,t){return e=Yt(e),rj(e,t)}tj();const zh=e=>{try{return e()}catch(t){throw t}};var aj="firebase",lj="12.2.1";/**
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
 */Qn(aj,lj,"app");const cj={apiKey:"AIzaSyAMtG6b23AqO2WbJ2ad8SKMXD1X4tfALtc",authDomain:"peloton-alerts.firebaseapp.com",projectId:"peloton-alerts",storageBucket:"peloton-alerts.appspot.com",messagingSenderId:"331185140393",appId:"1:331185140393:web:5f49c5c60b8b162914efb8",measurementId:"G-R2QRE36WEQ",databaseURL:"https://peloton-alerts-default-rtdb.firebaseio.com/"},Ic=zh(()=>aR(cj)),wa=zh(()=>ij(Ic)),uj="serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window,MR=async()=>{if(!("serviceWorker"in navigator))throw new Error("Service workers are not supported");return navigator.serviceWorker.register("/peloton-reservations/pr-preview/pr-48/messaging-sw.js",{type:"classic"})};let Hg=MR();const dx=async()=>{if(!wa)throw new Error("Messaging is not set up");if(!uj)throw new Error("Browser environment does not allow messaging");let e;try{e=await Hg,console.log("Registered service worker successfully")}catch(t){console.error("Failed to register service worker. Trying again...",t),Hg=MR(),e=await Hg}return sj(wa,{vapidKey:"BO9hF0_u2BKehXtAWTxtm7RtvIUGIEA5GT_jGycvCfUEW0yZZkLvtRB1Y8R_5KKBEODsLufyDkcBXn9rx5dHY5g",serviceWorkerRegistration:e})};function Jt(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var dj=typeof Symbol=="function"&&Symbol.observable||"@@observable",fx=dj,Fg=()=>Math.random().toString(36).substring(7).split("").join("."),fj={INIT:`@@redux/INIT${Fg()}`,REPLACE:`@@redux/REPLACE${Fg()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Fg()}`},qf=fj;function ps(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function LR(e,t,n){if(typeof e!="function")throw new Error(Jt(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Jt(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Jt(1));return n(LR)(e,t)}let i=e,o=t,l=new Map,u=l,f=0,h=!1;function p(){u===l&&(u=new Map,l.forEach((T,D)=>{u.set(D,T)}))}function g(){if(h)throw new Error(Jt(3));return o}function y(T){if(typeof T!="function")throw new Error(Jt(4));if(h)throw new Error(Jt(5));let D=!0;p();const M=f++;return u.set(M,T),function(){if(D){if(h)throw new Error(Jt(6));D=!1,p(),u.delete(M),l=null}}}function _(T){if(!ps(T))throw new Error(Jt(7));if(typeof T.type>"u")throw new Error(Jt(8));if(typeof T.type!="string")throw new Error(Jt(17));if(h)throw new Error(Jt(9));try{h=!0,o=i(o,T)}finally{h=!1}return(l=u).forEach(M=>{M()}),T}function b(T){if(typeof T!="function")throw new Error(Jt(10));i=T,_({type:qf.REPLACE})}function w(){const T=y;return{subscribe(D){if(typeof D!="object"||D===null)throw new Error(Jt(11));function M(){const A=D;A.next&&A.next(g())}return M(),{unsubscribe:T(M)}},[fx](){return this}}}return _({type:qf.INIT}),{dispatch:_,subscribe:y,getState:g,replaceReducer:b,[fx]:w}}function hj(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:qf.INIT})>"u")throw new Error(Jt(12));if(typeof n(void 0,{type:qf.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Jt(13))})}function PR(e){const t=Object.keys(e),n={};for(let l=0;l<t.length;l++){const u=t[l];typeof e[u]=="function"&&(n[u]=e[u])}const i=Object.keys(n);let o;try{hj(n)}catch(l){o=l}return function(u={},f){if(o)throw o;let h=!1;const p={};for(let g=0;g<i.length;g++){const y=i[g],_=n[y],b=u[y],w=_(b,f);if(typeof w>"u")throw f&&f.type,new Error(Jt(14));p[y]=w,h=h||w!==b}return h=h||i.length!==Object.keys(u).length,h?p:u}}function Vf(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...i)=>t(n(...i)))}function pj(...e){return t=>(n,i)=>{const o=t(n,i);let l=()=>{throw new Error(Jt(15))};const u={getState:o.getState,dispatch:(h,...p)=>l(h,...p)},f=e.map(h=>h(u));return l=Vf(...f)(o.dispatch),{...o,dispatch:l}}}function jR(e){return ps(e)&&"type"in e&&typeof e.type=="string"}var i_=Symbol.for("immer-nothing"),Dc=Symbol.for("immer-draftable"),Sn=Symbol.for("immer-state");function tn(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Ua=Object.getPrototypeOf;function Mr(e){return!!e&&!!e[Sn]}function vr(e){return e?UR(e)||Array.isArray(e)||!!e[Dc]||!!e.constructor?.[Dc]||Ja(e)||pu(e):!1}var mj=Object.prototype.constructor.toString(),hx=new WeakMap;function UR(e){if(!e||typeof e!="object")return!1;const t=Object.getPrototypeOf(e);if(t===null||t===Object.prototype)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;if(n===Object)return!0;if(typeof n!="function")return!1;let i=hx.get(n);return i===void 0&&(i=Function.toString.call(n),hx.set(n,i)),i===mj}function gj(e){return Mr(e)||tn(15,e),e[Sn].base_}function Yc(e,t,n=!0){yo(e)===0?(n?Reflect.ownKeys(e):Object.keys(e)).forEach(o=>{t(o,e[o],e)}):e.forEach((i,o)=>t(o,i,e))}function yo(e){const t=e[Sn];return t?t.type_:Array.isArray(e)?1:Ja(e)?2:pu(e)?3:0}function Wc(e,t){return yo(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function qg(e,t){return yo(e)===2?e.get(t):e[t]}function $R(e,t,n){const i=yo(e);i===2?e.set(t,n):i===3?e.add(n):e[t]=n}function yj(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function Ja(e){return e instanceof Map}function pu(e){return e instanceof Set}function no(e){return e.copy_||e.base_}function Fy(e,t){if(Ja(e))return new Map(e);if(pu(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const n=UR(e);if(t===!0||t==="class_only"&&!n){const i=Object.getOwnPropertyDescriptors(e);delete i[Sn];let o=Reflect.ownKeys(i);for(let l=0;l<o.length;l++){const u=o[l],f=i[u];f.writable===!1&&(f.writable=!0,f.configurable=!0),(f.get||f.set)&&(i[u]={configurable:!0,writable:!0,enumerable:f.enumerable,value:e[u]})}return Object.create(Ua(e),i)}else{const i=Ua(e);if(i!==null&&n)return{...e};const o=Object.create(i);return Object.assign(o,e)}}function s_(e,t=!1){return Bh(e)||Mr(e)||!vr(e)||(yo(e)>1&&Object.defineProperties(e,{set:Qd,add:Qd,clear:Qd,delete:Qd}),Object.freeze(e),t&&Object.values(e).forEach(n=>s_(n,!0))),e}function vj(){tn(2)}var Qd={value:vj};function Bh(e){return e===null||typeof e!="object"?!0:Object.isFrozen(e)}var qy={};function vo(e){const t=qy[e];return t||tn(0,e),t}function _j(e,t){qy[e]||(qy[e]=t)}var Qc;function zR(){return Qc}function bj(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function px(e,t){t&&(vo("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Vy(e){Gy(e),e.drafts_.forEach(Sj),e.drafts_=null}function Gy(e){e===Qc&&(Qc=e.parent_)}function mx(e){return Qc=bj(Qc,e)}function Sj(e){const t=e[Sn];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function gx(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return e!==void 0&&e!==n?(n[Sn].modified_&&(Vy(t),tn(4)),vr(e)&&(e=Gf(t,e),t.parent_||Yf(t,e)),t.patches_&&vo("Patches").generateReplacementPatches_(n[Sn].base_,e,t.patches_,t.inversePatches_)):e=Gf(t,n,[]),Vy(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==i_?e:void 0}function Gf(e,t,n){if(Bh(t))return t;const i=e.immer_.shouldUseStrictIteration(),o=t[Sn];if(!o)return Yc(t,(l,u)=>yx(e,o,t,l,u,n),i),t;if(o.scope_!==e)return t;if(!o.modified_)return Yf(e,o.base_,!0),o.base_;if(!o.finalized_){o.finalized_=!0,o.scope_.unfinalizedDrafts_--;const l=o.copy_;let u=l,f=!1;o.type_===3&&(u=new Set(l),l.clear(),f=!0),Yc(u,(h,p)=>yx(e,o,l,h,p,n,f),i),Yf(e,l,!1),n&&e.patches_&&vo("Patches").generatePatches_(o,n,e.patches_,e.inversePatches_)}return o.copy_}function yx(e,t,n,i,o,l,u){if(o==null||typeof o!="object"&&!u)return;const f=Bh(o);if(!(f&&!u)){if(Mr(o)){const h=l&&t&&t.type_!==3&&!Wc(t.assigned_,i)?l.concat(i):void 0,p=Gf(e,o,h);if($R(n,i,p),Mr(p))e.canAutoFreeze_=!1;else return}else u&&n.add(o);if(vr(o)&&!f){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1||t&&t.base_&&t.base_[i]===o&&f)return;Gf(e,o),(!t||!t.scope_.parent_)&&typeof i!="symbol"&&(Ja(n)?n.has(i):Object.prototype.propertyIsEnumerable.call(n,i))&&Yf(e,o)}}}function Yf(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&s_(t,n)}function wj(e,t){const n=Array.isArray(e),i={type_:n?1:0,scope_:t?t.scope_:zR(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=i,l=o_;n&&(o=[i],l=Kc);const{revoke:u,proxy:f}=Proxy.revocable(o,l);return i.draft_=f,i.revoke_=u,f}var o_={get(e,t){if(t===Sn)return e;const n=no(e);if(!Wc(n,t))return xj(e,n,t);const i=n[t];return e.finalized_||!vr(i)?i:i===Vg(e.base_,t)?(Gg(e),e.copy_[t]=Wy(i,e)):i},has(e,t){return t in no(e)},ownKeys(e){return Reflect.ownKeys(no(e))},set(e,t,n){const i=BR(no(e),t);if(i?.set)return i.set.call(e.draft_,n),!0;if(!e.modified_){const o=Vg(no(e),t),l=o?.[Sn];if(l&&l.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(yj(n,o)&&(n!==void 0||Wc(e.base_,t)))return!0;Gg(e),Yy(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty(e,t){return Vg(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,Gg(e),Yy(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=no(e),i=Reflect.getOwnPropertyDescriptor(n,t);return i&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:i.enumerable,value:n[t]}},defineProperty(){tn(11)},getPrototypeOf(e){return Ua(e.base_)},setPrototypeOf(){tn(12)}},Kc={};Yc(o_,(e,t)=>{Kc[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});Kc.deleteProperty=function(e,t){return Kc.set.call(this,e,t,void 0)};Kc.set=function(e,t,n){return o_.set.call(this,e[0],t,n,e[0])};function Vg(e,t){const n=e[Sn];return(n?no(n):e)[t]}function xj(e,t,n){const i=BR(t,n);return i?"value"in i?i.value:i.get?.call(e.draft_):void 0}function BR(e,t){if(!(t in e))return;let n=Ua(e);for(;n;){const i=Object.getOwnPropertyDescriptor(n,t);if(i)return i;n=Ua(n)}}function Yy(e){e.modified_||(e.modified_=!0,e.parent_&&Yy(e.parent_))}function Gg(e){e.copy_||(e.copy_=Fy(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var Ej=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!0,this.produce=(t,n,i)=>{if(typeof t=="function"&&typeof n!="function"){const l=n;n=t;const u=this;return function(h=l,...p){return u.produce(h,g=>n.call(this,g,...p))}}typeof n!="function"&&tn(6),i!==void 0&&typeof i!="function"&&tn(7);let o;if(vr(t)){const l=mx(this),u=Wy(t,void 0);let f=!0;try{o=n(u),f=!1}finally{f?Vy(l):Gy(l)}return px(l,i),gx(o,l)}else if(!t||typeof t!="object"){if(o=n(t),o===void 0&&(o=t),o===i_&&(o=void 0),this.autoFreeze_&&s_(o,!0),i){const l=[],u=[];vo("Patches").generateReplacementPatches_(t,o,l,u),i(l,u)}return o}else tn(1,t)},this.produceWithPatches=(t,n)=>{if(typeof t=="function")return(u,...f)=>this.produceWithPatches(u,h=>t(h,...f));let i,o;return[this.produce(t,n,(u,f)=>{i=u,o=f}),i,o]},typeof e?.autoFreeze=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof e?.useStrictShallowCopy=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),typeof e?.useStrictIteration=="boolean"&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){vr(e)||tn(8),Mr(e)&&(e=Tj(e));const t=mx(this),n=Wy(e,void 0);return n[Sn].isManual_=!0,Gy(t),n}finishDraft(e,t){const n=e&&e[Sn];(!n||!n.isManual_)&&tn(9);const{scope_:i}=n;return px(i,t),gx(void 0,i)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const o=t[n];if(o.path.length===0&&o.op==="replace"){e=o.value;break}}n>-1&&(t=t.slice(n+1));const i=vo("Patches").applyPatches_;return Mr(e)?i(e,t):this.produce(e,o=>i(o,t))}};function Wy(e,t){const n=Ja(e)?vo("MapSet").proxyMap_(e,t):pu(e)?vo("MapSet").proxySet_(e,t):wj(e,t);return(t?t.scope_:zR()).drafts_.push(n),n}function Tj(e){return Mr(e)||tn(10,e),HR(e)}function HR(e){if(!vr(e)||Bh(e))return e;const t=e[Sn];let n,i=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=Fy(e,t.scope_.immer_.useStrictShallowCopy_),i=t.scope_.immer_.shouldUseStrictIteration()}else n=Fy(e,!0);return Yc(n,(o,l)=>{$R(n,o,HR(l))},i),t&&(t.finalized_=!1),n}function Cj(){const t="replace",i="remove";function o(_,b,w,I){switch(_.type_){case 0:case 2:return u(_,b,w,I);case 1:return l(_,b,w,I);case 3:return f(_,b,w,I)}}function l(_,b,w,I){let{base_:T,assigned_:D}=_,M=_.copy_;M.length<T.length&&([T,M]=[M,T],[w,I]=[I,w]);for(let C=0;C<T.length;C++)if(D[C]&&M[C]!==T[C]){const A=b.concat([C]);w.push({op:t,path:A,value:y(M[C])}),I.push({op:t,path:A,value:y(T[C])})}for(let C=T.length;C<M.length;C++){const A=b.concat([C]);w.push({op:"add",path:A,value:y(M[C])})}for(let C=M.length-1;T.length<=C;--C){const A=b.concat([C]);I.push({op:i,path:A})}}function u(_,b,w,I){const{base_:T,copy_:D}=_;Yc(_.assigned_,(M,C)=>{const A=qg(T,M),k=qg(D,M),R=C?Wc(T,M)?t:"add":i;if(A===k&&R===t)return;const P=b.concat(M);w.push(R===i?{op:R,path:P}:{op:R,path:P,value:k}),I.push(R==="add"?{op:i,path:P}:R===i?{op:"add",path:P,value:y(A)}:{op:t,path:P,value:y(A)})})}function f(_,b,w,I){let{base_:T,copy_:D}=_,M=0;T.forEach(C=>{if(!D.has(C)){const A=b.concat([M]);w.push({op:i,path:A,value:C}),I.unshift({op:"add",path:A,value:C})}M++}),M=0,D.forEach(C=>{if(!T.has(C)){const A=b.concat([M]);w.push({op:"add",path:A,value:C}),I.unshift({op:i,path:A,value:C})}M++})}function h(_,b,w,I){w.push({op:t,path:[],value:b===i_?void 0:b}),I.push({op:t,path:[],value:_})}function p(_,b){return b.forEach(w=>{const{path:I,op:T}=w;let D=_;for(let k=0;k<I.length-1;k++){const R=yo(D);let P=I[k];typeof P!="string"&&typeof P!="number"&&(P=""+P),(R===0||R===1)&&(P==="__proto__"||P==="constructor")&&tn(19),typeof D=="function"&&P==="prototype"&&tn(19),D=qg(D,P),typeof D!="object"&&tn(18,I.join("/"))}const M=yo(D),C=g(w.value),A=I[I.length-1];switch(T){case t:switch(M){case 2:return D.set(A,C);case 3:tn(16);default:return D[A]=C}case"add":switch(M){case 1:return A==="-"?D.push(C):D.splice(A,0,C);case 2:return D.set(A,C);case 3:return D.add(C);default:return D[A]=C}case i:switch(M){case 1:return D.splice(A,1);case 2:return D.delete(A);case 3:return D.delete(w.value);default:return delete D[A]}default:tn(17,T)}}),_}function g(_){if(!vr(_))return _;if(Array.isArray(_))return _.map(g);if(Ja(_))return new Map(Array.from(_.entries()).map(([w,I])=>[w,g(I)]));if(pu(_))return new Set(Array.from(_).map(g));const b=Object.create(Ua(_));for(const w in _)b[w]=g(_[w]);return Wc(_,Dc)&&(b[Dc]=_[Dc]),b}function y(_){return Mr(_)?g(_):_}_j("Patches",{applyPatches_:p,generatePatches_:o,generateReplacementPatches_:h})}var Xc=new Ej,mu=Xc.produce,FR=Xc.produceWithPatches.bind(Xc),vx=Xc.applyPatches.bind(Xc);function Rj(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(t)}function Aj(e,t=`expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(t)}function Ij(e,t="expected all items to be functions, instead received the following types: "){if(!e.every(n=>typeof n=="function")){const n=e.map(i=>typeof i=="function"?`function ${i.name||"unnamed"}()`:typeof i).join(", ");throw new TypeError(`${t}[${n}]`)}}var _x=e=>Array.isArray(e)?e:[e];function Dj(e){const t=Array.isArray(e[0])?e[0]:e;return Ij(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}function Oj(e,t){const n=[],{length:i}=e;for(let o=0;o<i;o++)n.push(e[o].apply(null,t));return n}var Nj=class{constructor(e){this.value=e}deref(){return this.value}},kj=typeof WeakRef<"u"?WeakRef:Nj,Mj=0,bx=1;function Kd(){return{s:Mj,v:void 0,o:null,p:null}}function Wf(e,t={}){let n=Kd();const{resultEqualityCheck:i}=t;let o,l=0;function u(){let f=n;const{length:h}=arguments;for(let y=0,_=h;y<_;y++){const b=arguments[y];if(typeof b=="function"||typeof b=="object"&&b!==null){let w=f.o;w===null&&(f.o=w=new WeakMap);const I=w.get(b);I===void 0?(f=Kd(),w.set(b,f)):f=I}else{let w=f.p;w===null&&(f.p=w=new Map);const I=w.get(b);I===void 0?(f=Kd(),w.set(b,f)):f=I}}const p=f;let g;if(f.s===bx)g=f.v;else if(g=e.apply(null,arguments),l++,i){const y=o?.deref?.()??o;y!=null&&i(y,g)&&(g=y,l!==0&&l--),o=typeof g=="object"&&g!==null||typeof g=="function"?new kj(g):g}return p.s=bx,p.v=g,g}return u.clearCache=()=>{n=Kd(),u.resetResultsCount()},u.resultsCount=()=>l,u.resetResultsCount=()=>{l=0},u}function Lj(e,...t){const n=typeof e=="function"?{memoize:e,memoizeOptions:t}:e,i=(...o)=>{let l=0,u=0,f,h={},p=o.pop();typeof p=="object"&&(h=p,p=o.pop()),Rj(p,`createSelector expects an output function after the inputs, but received: [${typeof p}]`);const g={...n,...h},{memoize:y,memoizeOptions:_=[],argsMemoize:b=Wf,argsMemoizeOptions:w=[]}=g,I=_x(_),T=_x(w),D=Dj(o),M=y(function(){return l++,p.apply(null,arguments)},...I),C=b(function(){u++;const k=Oj(D,arguments);return f=M.apply(null,k),f},...T);return Object.assign(C,{resultFunc:p,memoizedResultFunc:M,dependencies:D,dependencyRecomputations:()=>u,resetDependencyRecomputations:()=>{u=0},lastResult:()=>f,recomputations:()=>l,resetRecomputations:()=>{l=0},memoize:y,argsMemoize:b})};return Object.assign(i,{withTypes:()=>i}),i}var Si=Lj(Wf),Pj=Object.assign((e,t=Si)=>{Aj(e,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);const n=Object.keys(e),i=n.map(l=>e[l]);return t(i,(...l)=>l.reduce((u,f,h)=>(u[n[h]]=f,u),{}))},{withTypes:()=>Pj});function qR(e){return({dispatch:n,getState:i})=>o=>l=>typeof l=="function"?l(n,i,e):o(l)}var jj=qR(),Uj=qR,$j=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Vf:Vf.apply(null,arguments)},zj=e=>e&&typeof e.match=="function";function hr(e,t){function n(...i){if(t){let o=t(...i);if(!o)throw new Error(pr(0));return{type:e,payload:o.payload,..."meta"in o&&{meta:o.meta},..."error"in o&&{error:o.error}}}return{type:e,payload:i[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=i=>jR(i)&&i.type===e,n}var VR=class xc extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,xc.prototype)}static get[Symbol.species](){return xc}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new xc(...t[0].concat(this)):new xc(...t.concat(this))}};function Sx(e){return vr(e)?mu(e,()=>{}):e}function Xd(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function Bj(e){return typeof e=="boolean"}var Hj=()=>function(t){const{thunk:n=!0,immutableCheck:i=!0,serializableCheck:o=!0,actionCreatorCheck:l=!0}=t??{};let u=new VR;return n&&(Bj(n)?u.push(jj):u.push(Uj(n.extraArgument))),u},Hh="RTK_autoBatch",oc=()=>e=>({payload:e,meta:{[Hh]:!0}}),wx=e=>t=>{setTimeout(t,e)},Fj=(e={type:"raf"})=>t=>(...n)=>{const i=t(...n);let o=!0,l=!1,u=!1;const f=new Set,h=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:wx(10):e.type==="callback"?e.queueNotification:wx(e.timeout),p=()=>{u=!1,l&&(l=!1,f.forEach(g=>g()))};return Object.assign({},i,{subscribe(g){const y=()=>o&&g(),_=i.subscribe(y);return f.add(g),()=>{_(),f.delete(g)}},dispatch(g){try{return o=!g?.meta?.[Hh],l=!o,l&&(u||(u=!0,h(p))),i.dispatch(g)}finally{o=!0}}})},qj=e=>function(n){const{autoBatch:i=!0}=n??{};let o=new VR(e);return i&&o.push(Fj(typeof i=="object"?i:void 0)),o};function Vj(e){const t=Hj(),{reducer:n=void 0,middleware:i,devTools:o=!0,preloadedState:l=void 0,enhancers:u=void 0}=e||{};let f;if(typeof n=="function")f=n;else if(ps(n))f=PR(n);else throw new Error(pr(1));let h;typeof i=="function"?h=i(t):h=t();let p=Vf;o&&(p=$j({trace:!1,...typeof o=="object"&&o}));const g=pj(...h),y=qj(g);let _=typeof u=="function"?u(y):y();const b=p(..._);return LR(f,l,b)}function GR(e){const t={},n=[];let i;const o={addCase(l,u){const f=typeof l=="string"?l:l.type;if(!f)throw new Error(pr(28));if(f in t)throw new Error(pr(29));return t[f]=u,o},addAsyncThunk(l,u){return u.pending&&(t[l.pending.type]=u.pending),u.rejected&&(t[l.rejected.type]=u.rejected),u.fulfilled&&(t[l.fulfilled.type]=u.fulfilled),u.settled&&n.push({matcher:l.settled,reducer:u.settled}),o},addMatcher(l,u){return n.push({matcher:l,reducer:u}),o},addDefaultCase(l){return i=l,o}};return e(o),[t,n,i]}function Gj(e){return typeof e=="function"}function Yj(e,t){let[n,i,o]=GR(t),l;if(Gj(e))l=()=>Sx(e());else{const f=Sx(e);l=()=>f}function u(f=l(),h){let p=[n[h.type],...i.filter(({matcher:g})=>g(h)).map(({reducer:g})=>g)];return p.filter(g=>!!g).length===0&&(p=[o]),p.reduce((g,y)=>{if(y)if(Mr(g)){const b=y(g,h);return b===void 0?g:b}else{if(vr(g))return mu(g,_=>y(_,h));{const _=y(g,h);if(_===void 0){if(g===null)return g;throw Error("A case reducer on a non-draftable value must not return undefined")}return _}}return g},f)}return u.getInitialState=l,u}var YR=(e,t)=>zj(e)?e.match(t):e(t);function mi(...e){return t=>e.some(n=>YR(n,t))}function Oc(...e){return t=>e.every(n=>YR(n,t))}function Fh(e,t){if(!e||!e.meta)return!1;const n=typeof e.meta.requestId=="string",i=t.indexOf(e.meta.requestStatus)>-1;return n&&i}function gu(e){return typeof e[0]=="function"&&"pending"in e[0]&&"fulfilled"in e[0]&&"rejected"in e[0]}function a_(...e){return e.length===0?t=>Fh(t,["pending"]):gu(e)?mi(...e.map(t=>t.pending)):a_()(e[0])}function $a(...e){return e.length===0?t=>Fh(t,["rejected"]):gu(e)?mi(...e.map(t=>t.rejected)):$a()(e[0])}function qh(...e){const t=n=>n&&n.meta&&n.meta.rejectedWithValue;return e.length===0?Oc($a(...e),t):gu(e)?Oc($a(...e),t):qh()(e[0])}function ms(...e){return e.length===0?t=>Fh(t,["fulfilled"]):gu(e)?mi(...e.map(t=>t.fulfilled)):ms()(e[0])}function Qy(...e){return e.length===0?t=>Fh(t,["pending","fulfilled","rejected"]):gu(e)?mi(...e.flatMap(t=>[t.pending,t.rejected,t.fulfilled])):Qy()(e[0])}var Wj="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",l_=(e=21)=>{let t="",n=e;for(;n--;)t+=Wj[Math.random()*64|0];return t},Qj=["name","message","stack","code"],Yg=class{constructor(e,t){this.payload=e,this.meta=t}_type},xx=class{constructor(e,t){this.payload=e,this.meta=t}_type},Kj=e=>{if(typeof e=="object"&&e!==null){const t={};for(const n of Qj)typeof e[n]=="string"&&(t[n]=e[n]);return t}return{message:String(e)}},Ex="External signal was aborted",Tx=(()=>{function e(t,n,i){const o=hr(t+"/fulfilled",(h,p,g,y)=>({payload:h,meta:{...y||{},arg:g,requestId:p,requestStatus:"fulfilled"}})),l=hr(t+"/pending",(h,p,g)=>({payload:void 0,meta:{...g||{},arg:p,requestId:h,requestStatus:"pending"}})),u=hr(t+"/rejected",(h,p,g,y,_)=>({payload:y,error:(i&&i.serializeError||Kj)(h||"Rejected"),meta:{..._||{},arg:g,requestId:p,rejectedWithValue:!!y,requestStatus:"rejected",aborted:h?.name==="AbortError",condition:h?.name==="ConditionError"}}));function f(h,{signal:p}={}){return(g,y,_)=>{const b=i?.idGenerator?i.idGenerator(h):l_(),w=new AbortController;let I,T;function D(C){T=C,w.abort()}p&&(p.aborted?D(Ex):p.addEventListener("abort",()=>D(Ex),{once:!0}));const M=(async function(){let C;try{let k=i?.condition?.(h,{getState:y,extra:_});if(Zj(k)&&(k=await k),k===!1||w.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const R=new Promise((P,G)=>{I=()=>{G({name:"AbortError",message:T||"Aborted"})},w.signal.addEventListener("abort",I)});g(l(b,h,i?.getPendingMeta?.({requestId:b,arg:h},{getState:y,extra:_}))),C=await Promise.race([R,Promise.resolve(n(h,{dispatch:g,getState:y,extra:_,requestId:b,signal:w.signal,abort:D,rejectWithValue:(P,G)=>new Yg(P,G),fulfillWithValue:(P,G)=>new xx(P,G)})).then(P=>{if(P instanceof Yg)throw P;return P instanceof xx?o(P.payload,b,h,P.meta):o(P,b,h)})])}catch(k){C=k instanceof Yg?u(null,b,h,k.payload,k.meta):u(k,b,h)}finally{I&&w.signal.removeEventListener("abort",I)}return i&&!i.dispatchConditionRejection&&u.match(C)&&C.meta.condition||g(C),C})();return Object.assign(M,{abort:D,requestId:b,arg:h,unwrap(){return M.then(Xj)}})}}return Object.assign(f,{pending:l,rejected:u,fulfilled:o,settled:mi(u,o),typePrefix:t})}return e.withTypes=()=>e,e})();function Xj(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function Zj(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var Jj=Symbol.for("rtk-slice-createasyncthunk");function e3(e,t){return`${e}/${t}`}function t3({creators:e}={}){const t=e?.asyncThunk?.[Jj];return function(i){const{name:o,reducerPath:l=o}=i;if(!o)throw new Error(pr(11));const u=(typeof i.reducers=="function"?i.reducers(r3()):i.reducers)||{},f=Object.keys(u),h={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},p={addCase(C,A){const k=typeof C=="string"?C:C.type;if(!k)throw new Error(pr(12));if(k in h.sliceCaseReducersByType)throw new Error(pr(13));return h.sliceCaseReducersByType[k]=A,p},addMatcher(C,A){return h.sliceMatchers.push({matcher:C,reducer:A}),p},exposeAction(C,A){return h.actionCreators[C]=A,p},exposeCaseReducer(C,A){return h.sliceCaseReducersByName[C]=A,p}};f.forEach(C=>{const A=u[C],k={reducerName:C,type:e3(o,C),createNotation:typeof i.reducers=="function"};s3(A)?a3(k,A,p,t):i3(k,A,p)});function g(){const[C={},A=[],k=void 0]=typeof i.extraReducers=="function"?GR(i.extraReducers):[i.extraReducers],R={...C,...h.sliceCaseReducersByType};return Yj(i.initialState,P=>{for(let G in R)P.addCase(G,R[G]);for(let G of h.sliceMatchers)P.addMatcher(G.matcher,G.reducer);for(let G of A)P.addMatcher(G.matcher,G.reducer);k&&P.addDefaultCase(k)})}const y=C=>C,_=new Map,b=new WeakMap;let w;function I(C,A){return w||(w=g()),w(C,A)}function T(){return w||(w=g()),w.getInitialState()}function D(C,A=!1){function k(P){let G=P[C];return typeof G>"u"&&A&&(G=Xd(b,k,T)),G}function R(P=y){const G=Xd(_,A,()=>new WeakMap);return Xd(G,P,()=>{const F={};for(const[H,z]of Object.entries(i.selectors??{}))F[H]=n3(z,P,()=>Xd(b,P,T),A);return F})}return{reducerPath:C,getSelectors:R,get selectors(){return R(k)},selectSlice:k}}const M={name:o,reducer:I,actions:h.actionCreators,caseReducers:h.sliceCaseReducersByName,getInitialState:T,...D(l),injectInto(C,{reducerPath:A,...k}={}){const R=A??l;return C.inject({reducerPath:R,reducer:I},k),{...M,...D(R,!0)}}};return M}}function n3(e,t,n,i){function o(l,...u){let f=t(l);return typeof f>"u"&&i&&(f=n()),e(f,...u)}return o.unwrapped=e,o}var Ir=t3();function r3(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function i3({type:e,reducerName:t,createNotation:n},i,o){let l,u;if("reducer"in i){if(n&&!o3(i))throw new Error(pr(17));l=i.reducer,u=i.prepare}else l=i;o.addCase(e,l).exposeCaseReducer(t,l).exposeAction(t,u?hr(e,u):hr(e))}function s3(e){return e._reducerDefinitionType==="asyncThunk"}function o3(e){return e._reducerDefinitionType==="reducerWithPrepare"}function a3({type:e,reducerName:t},n,i,o){if(!o)throw new Error(pr(18));const{payloadCreator:l,fulfilled:u,pending:f,rejected:h,settled:p,options:g}=n,y=o(e,l,g);i.exposeAction(t,y),u&&i.addCase(y.fulfilled,u),f&&i.addCase(y.pending,f),h&&i.addCase(y.rejected,h),p&&i.addMatcher(y.settled,p),i.exposeCaseReducer(t,{fulfilled:u||Zd,pending:f||Zd,rejected:h||Zd,settled:p||Zd})}function Zd(){}function pr(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const el=e=>e.session,yu=Si([el],e=>{if(e.state==="fulfilled")return e.data?.id}),wi=FT,ct=qT,vu=E.createContext({refreshToken:()=>{},deleteToken:()=>Promise.reject("Not implemented")});var Cx={};const Rx="@firebase/database",Ax="1.1.0";/**
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
 */let WR="";function l3(e){WR=e}/**
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
 */class c3{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,n){n==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),$t(n))}get(t){const n=this.domStorage_.getItem(this.prefixedName_(t));return n==null?null:Fc(n)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
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
 */class u3{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,n){n==null?delete this.cache_[t]:this.cache_[t]=n}get(t){return Lr(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
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
 */const QR=function(e){try{if(typeof window<"u"&&typeof window[e]<"u"){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new c3(t)}}catch{}return new u3},ao=QR("localStorage"),d3=QR("sessionStorage");/**
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
 */const Ca=new Wv("@firebase/database"),f3=(function(){let e=1;return function(){return e++}})(),KR=function(e){const t=TP(e),n=new SP;n.update(t);const i=n.digest();return Vv.encodeByteArray(i)},_u=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?t+=_u.apply(null,i):typeof i=="object"?t+=$t(i):t+=i,t+=" "}return t};let Nc=null,Ix=!0;const h3=function(e,t){he(!0,"Can't turn on custom loggers persistently."),Ca.logLevel=lt.VERBOSE,Nc=Ca.log.bind(Ca)},en=function(...e){if(Ix===!0&&(Ix=!1,Nc===null&&d3.get("logging_enabled")===!0&&h3()),Nc){const t=_u.apply(null,e);Nc(t)}},bu=function(e){return function(...t){en(e,...t)}},Ky=function(...e){const t="FIREBASE INTERNAL ERROR: "+_u(...e);Ca.error(t)},gi=function(...e){const t=`FIREBASE FATAL ERROR: ${_u(...e)}`;throw Ca.error(t),new Error(t)},dn=function(...e){const t="FIREBASE WARNING: "+_u(...e);Ca.warn(t)},p3=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&dn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},c_=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},m3=function(e){if(document.readyState==="complete")e();else{let t=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},za="[MIN_NAME]",_o="[MAX_NAME]",Ao=function(e,t){if(e===t)return 0;if(e===za||t===_o)return-1;if(t===za||e===_o)return 1;{const n=Dx(e),i=Dx(t);return n!==null?i!==null?n-i===0?e.length-t.length:n-i:-1:i!==null?1:e<t?-1:1}},g3=function(e,t){return e===t?0:e<t?-1:1},ac=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+$t(t))},u_=function(e){if(typeof e!="object"||e===null)return $t(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)i!==0&&(n+=","),n+=$t(t[i]),n+=":",n+=u_(e[t[i]]);return n+="}",n},XR=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let o=0;o<n;o+=t)o+t>n?i.push(e.substring(o,n)):i.push(e.substring(o,o+t));return i};function rn(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const ZR=function(e){he(!c_(e),"Invalid JSON number");const t=11,n=52,i=(1<<t-1)-1;let o,l,u,f,h;e===0?(l=0,u=0,o=1/e===-1/0?1:0):(o=e<0,e=Math.abs(e),e>=Math.pow(2,1-i)?(f=Math.min(Math.floor(Math.log(e)/Math.LN2),i),l=f+i,u=Math.round(e*Math.pow(2,n-f)-Math.pow(2,n))):(l=0,u=Math.round(e/Math.pow(2,1-i-n))));const p=[];for(h=n;h;h-=1)p.push(u%2?1:0),u=Math.floor(u/2);for(h=t;h;h-=1)p.push(l%2?1:0),l=Math.floor(l/2);p.push(o?1:0),p.reverse();const g=p.join("");let y="";for(h=0;h<64;h+=8){let _=parseInt(g.substr(h,8),2).toString(16);_.length===1&&(_="0"+_),y=y+_}return y.toLowerCase()},y3=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},v3=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function _3(e,t){let n="Unknown Error";e==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":e==="permission_denied"?n="Client doesn't have permission to access the desired data.":e==="unavailable"&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}const b3=new RegExp("^-?(0*)\\d{1,10}$"),S3=-2147483648,w3=2147483647,Dx=function(e){if(b3.test(e)){const t=Number(e);if(t>=S3&&t<=w3)return t}return null},tl=function(e){try{e()}catch(t){setTimeout(()=>{const n=t.stack||"";throw dn("Exception was thrown by user callback.",n),t},Math.floor(0))}},x3=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},kc=function(e,t){const n=setTimeout(e,t);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class E3{constructor(t,n){this.appCheckProvider=n,this.appName=t.name,kn(t)&&t.settings.appCheckToken&&(this.serverAppAppCheckToken=t.settings.appCheckToken),this.appCheck=n?.getImmediate({optional:!0}),this.appCheck||n?.get().then(i=>this.appCheck=i)}getToken(t){if(this.serverAppAppCheckToken){if(t)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(t):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(n,i):n(null)},0)})}addTokenChangeListener(t){this.appCheckProvider?.get().then(n=>n.addTokenListener(t))}notifyForInvalidToken(){dn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class T3{constructor(t,n,i){this.appName_=t,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(o=>this.auth_=o)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(n=>n&&n.code==="auth/token-not-initialized"?(en("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(n,i):n(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(n=>n.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(n=>n.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',dn(t)}}class Ef{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}Ef.OWNER="owner";/**
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
 */const d_="5",JR="v",eA="s",tA="r",nA="f",rA=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,iA="ls",sA="p",Xy="ac",oA="websocket",aA="long_polling";/**
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
 */class lA{constructor(t,n,i,o,l=!1,u="",f=!1,h=!1,p=null){this.secure=n,this.namespace=i,this.webSocketOnly=o,this.nodeAdmin=l,this.persistenceKey=u,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=h,this.emulatorOptions=p,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ao.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&ao.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${n}`}}function C3(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function cA(e,t,n){he(typeof t=="string","typeof type must == string"),he(typeof n=="object","typeof params must == object");let i;if(t===oA)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===aA)i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);C3(e)&&(n.ns=e.namespace);const o=[];return rn(n,(l,u)=>{o.push(l+"="+u)}),i+o.join("&")}/**
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
 */class R3{constructor(){this.counters_={}}incrementCounter(t,n=1){Lr(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=n}get(){return tP(this.counters_)}}/**
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
 */const Wg={},Qg={};function f_(e){const t=e.toString();return Wg[t]||(Wg[t]=new R3),Wg[t]}function A3(e,t){const n=e.toString();return Qg[n]||(Qg[n]=t()),Qg[n]}/**
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
 */class I3{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,n){this.closeAfterResponse=t,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,n){for(this.pendingResponses[t]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<i.length;++o)i[o]&&tl(()=>{this.onMessage_(i[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Ox="start",D3="close",O3="pLPCommand",N3="pRTLPCB",uA="id",dA="pw",fA="ser",k3="cb",M3="seg",L3="ts",P3="d",j3="dframe",hA=1870,pA=30,U3=hA-pA,$3=25e3,z3=3e4;class xa{constructor(t,n,i,o,l,u,f){this.connId=t,this.repoInfo=n,this.applicationId=i,this.appCheckToken=o,this.authToken=l,this.transportSessionId=u,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=bu(t),this.stats_=f_(n),this.urlFn=h=>(this.appCheckToken&&(h[Xy]=this.appCheckToken),cA(n,aA,h))}open(t,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new I3(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(z3)),m3(()=>{if(this.isClosed_)return;this.scriptTagHolder=new h_((...l)=>{const[u,f,h,p,g]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===Ox)this.id=f,this.password=h;else if(u===D3)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...l)=>{const[u,f]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(u,f)},()=>{this.onClosed_()},this.urlFn);const i={};i[Ox]="t",i[fA]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[k3]=this.scriptTagHolder.uniqueCallbackIdentifier),i[JR]=d_,this.transportSessionId&&(i[eA]=this.transportSessionId),this.lastSessionId&&(i[iA]=this.lastSessionId),this.applicationId&&(i[sA]=this.applicationId),this.appCheckToken&&(i[Xy]=this.appCheckToken),typeof location<"u"&&location.hostname&&rA.test(location.hostname)&&(i[tA]=nA);const o=this.urlFn(i);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){xa.forceAllow_=!0}static forceDisallow(){xa.forceDisallow_=!0}static isAvailable(){return xa.forceAllow_?!0:!xa.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!y3()&&!v3()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const n=$t(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=WC(n),o=XR(i,U3);for(let l=0;l<o.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[l]),this.curSegmentNum++}addDisconnectPingFrame(t,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[j3]="t",i[uA]=t,i[dA]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const n=$t(t).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class h_{constructor(t,n,i,o){this.onDisconnect=i,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=f3(),window[O3+this.uniqueCallbackIdentifier]=t,window[N3+this.uniqueCallbackIdentifier]=n,this.myIFrame=h_.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(f){en("frame writing exception"),f.stack&&en(f.stack),en(f)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||en("No IE domain setting required")}catch{const i=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,n){for(this.myID=t,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[uA]=this.myID,t[dA]=this.myPW,t[fA]=this.currentSerial;let n=this.urlFn(t),i="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+pA+i.length<=hA;){const u=this.pendingSegs.shift();i=i+"&"+M3+o+"="+u.seg+"&"+L3+o+"="+u.ts+"&"+P3+o+"="+u.d,o++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(t,n,i){this.pendingSegs.push({seg:t,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(t,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},o=setTimeout(i,Math.floor($3)),l=()=>{clearTimeout(o),i()};this.addTag(t,l)}addTag(t,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=t,i.onload=i.onreadystatechange=function(){const o=i.readyState;(!o||o==="loaded"||o==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{en("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const B3=16384,H3=45e3;let Qf=null;typeof MozWebSocket<"u"?Qf=MozWebSocket:typeof WebSocket<"u"&&(Qf=WebSocket);class lr{constructor(t,n,i,o,l,u,f){this.connId=t,this.applicationId=i,this.appCheckToken=o,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=bu(this.connId),this.stats_=f_(n),this.connURL=lr.connectionURL_(n,u,f,o,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(t,n,i,o,l){const u={};return u[JR]=d_,typeof location<"u"&&location.hostname&&rA.test(location.hostname)&&(u[tA]=nA),n&&(u[eA]=n),i&&(u[iA]=i),o&&(u[Xy]=o),l&&(u[sA]=l),cA(t,oA,u)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ao.set("previous_websocket_failure",!0);try{let i;pP(),this.mySock=new Qf(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const o=i.message||i.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const o=i.message||i.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){lr.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(t=!0)}return!t&&Qf!==null&&!lr.forceDisallow_}static previouslyFailed(){return ao.isInMemoryStorage||ao.get("previous_websocket_failure")===!0}markConnectionHealthy(){ao.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Fc(n);this.onMessage(i)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(he(this.frames===null,"We already have a frame buffer"),t.length<=6){const n=Number(t);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const n=t.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(t){this.resetKeepAlive();const n=$t(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=XR(n,B3);i.length>1&&this.sendString_(String(i.length));for(let o=0;o<i.length;o++)this.sendString_(i[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(H3))}sendString_(t){try{this.mySock.send(t)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}lr.responsesRequiredToBeHealthy=2;lr.healthyTimeout=3e4;/**
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
 */class Zc{static get ALL_TRANSPORTS(){return[xa,lr]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(t){this.initTransports_(t)}initTransports_(t){const n=lr&&lr.isAvailable();let i=n&&!lr.previouslyFailed();if(t.webSocketOnly&&(n||dn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[lr];else{const o=this.transports_=[];for(const l of Zc.ALL_TRANSPORTS)l&&l.isAvailable()&&o.push(l);Zc.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Zc.globalTransportInitialized_=!1;/**
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
 */const F3=6e4,q3=5e3,V3=10*1024,G3=100*1024,Kg="t",Nx="d",Y3="s",kx="r",W3="e",Mx="o",Lx="a",Px="n",jx="p",Q3="h";class K3{constructor(t,n,i,o,l,u,f,h,p,g){this.id=t,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=o,this.authToken_=l,this.onMessage_=u,this.onReady_=f,this.onDisconnect_=h,this.onKill_=p,this.lastSessionId=g,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=bu("c:"+this.id+":"),this.transportManager_=new Zc(n),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const o=t.healthyTimeout||0;o>0&&(this.healthyTimeout_=kc(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>G3?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>V3?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return n=>{t===this.conn_?this.onConnectionLost_(n):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return n=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(n):t===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(t){const n={t:"d",d:t};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(Kg in t){const n=t[Kg];n===Lx?this.upgradeIfSecondaryHealthy_():n===kx?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Mx&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const n=ac("t",t),i=ac("d",t);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:jx,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Lx,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Px,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const n=ac("t",t),i=ac("d",t);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const n=ac(Kg,t);if(Nx in t){const i=t[Nx];if(n===Q3){const o={...i};this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(n===Px){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Y3?this.onConnectionShutdown_(i):n===kx?this.onReset_(i):n===W3?Ky("Server Error: "+i):n===Mx?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ky("Unknown control packet command: "+n)}}onHandshake_(t){const n=t.ts,i=t.v,o=t.h;this.sessionId=t.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),d_!==i&&dn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),kc(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(F3))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,n){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):kc(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(q3))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:jx,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ao.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class mA{put(t,n,i,o){}merge(t,n,i,o){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,n,i){}onDisconnectMerge(t,n,i){}onDisconnectCancel(t,n){}reportStats(t){}}/**
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
 */class gA{constructor(t){this.allowedEvents_=t,this.listeners_={},he(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...n){if(Array.isArray(this.listeners_[t])){const i=[...this.listeners_[t]];for(let o=0;o<i.length;o++)i[o].callback.apply(i[o].context,n)}}on(t,n,i){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:n,context:i});const o=this.getInitialEvent(t);o&&n.apply(i,o)}off(t,n,i){this.validateEventType_(t);const o=this.listeners_[t]||[];for(let l=0;l<o.length;l++)if(o[l].callback===n&&(!i||i===o[l].context)){o.splice(l,1);return}}validateEventType_(t){he(this.allowedEvents_.find(n=>n===t),"Unknown event: "+t)}}/**
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
 */class Kf extends gA{static getInstance(){return new Kf}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Yv()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(t){return he(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Ux=32,$x=768;class ut{constructor(t,n){if(n===void 0){this.pieces_=t.split("/");let i=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[i]=this.pieces_[o],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=n}toString(){let t="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(t+="/"+this.pieces_[n]);return t||"/"}}function Xe(){return new ut("")}function qe(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function gs(e){return e.pieces_.length-e.pieceNum_}function pt(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ut(e.pieces_,t)}function p_(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function X3(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)e.pieces_[n]!==""&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function Jc(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function yA(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ut(t,0)}function Rt(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof ut)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const i=t.split("/");for(let o=0;o<i.length;o++)i[o].length>0&&n.push(i[o])}return new ut(n,0)}function We(e){return e.pieceNum_>=e.pieces_.length}function un(e,t){const n=qe(e),i=qe(t);if(n===null)return t;if(n===i)return un(pt(e),pt(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Z3(e,t){const n=Jc(e,0),i=Jc(t,0);for(let o=0;o<n.length&&o<i.length;o++){const l=Ao(n[o],i[o]);if(l!==0)return l}return n.length===i.length?0:n.length<i.length?-1:1}function m_(e,t){if(gs(e)!==gs(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Wn(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(gs(e)>gs(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class J3{constructor(t,n){this.errorPrefix_=n,this.parts_=Jc(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Ph(this.parts_[i]);vA(this)}}function e5(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Ph(t),vA(e)}function t5(e){const t=e.parts_.pop();e.byteLength_-=Ph(t),e.parts_.length>0&&(e.byteLength_-=1)}function vA(e){if(e.byteLength_>$x)throw new Error(e.errorPrefix_+"has a key path longer than "+$x+" bytes ("+e.byteLength_+").");if(e.parts_.length>Ux)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ux+") or object contains a cycle "+ro(e))}function ro(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
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
 */class g_ extends gA{static getInstance(){return new g_}constructor(){super(["visible"]);let t,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[t];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(t){return he(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
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
 */const lc=1e3,n5=300*1e3,zx=30*1e3,r5=1.3,i5=3e4,s5="server_kill",Bx=3;class fi extends mA{constructor(t,n,i,o,l,u,f,h){if(super(),this.repoInfo_=t,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=o,this.onServerInfoUpdate_=l,this.authTokenProvider_=u,this.appCheckTokenProvider_=f,this.authOverride_=h,this.id=fi.nextPersistentConnectionId_++,this.log_=bu("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=lc,this.maxReconnectDelay_=n5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,h)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");g_.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&Kf.getInstance().on("online",this.onOnline_,this)}sendRequest(t,n,i){const o=++this.requestNumber_,l={r:o,a:t,b:n};this.log_($t(l)),he(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),i&&(this.requestCBHash_[o]=i)}get(t){this.initConnection_();const n=new hu,o={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:u=>{const f=u.d;u.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),n.promise}listen(t,n,i,o){this.initConnection_();const l=t._queryIdentifier,u=t._path.toString();this.log_("Listen called for "+u+" "+l),this.listens.has(u)||this.listens.set(u,new Map),he(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),he(!this.listens.get(u).has(l),"listen() called twice for same path/queryId.");const f={onComplete:o,hashFn:n,query:t,tag:i};this.listens.get(u).set(l,f),this.connected_&&this.sendListen_(f)}sendGet_(t){const n=this.outstandingGets_[t];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(t){const n=t.query,i=n._path.toString(),o=n._queryIdentifier;this.log_("Listen on "+i+" for "+o);const l={p:i},u="q";t.tag&&(l.q=n._queryObject,l.t=t.tag),l.h=t.hashFn(),this.sendRequest(u,l,f=>{const h=f.d,p=f.s;fi.warnOnListenWarnings_(h,n),(this.listens.get(i)&&this.listens.get(i).get(o))===t&&(this.log_("listen response",f),p!=="ok"&&this.removeListen_(i,o),t.onComplete&&t.onComplete(p,h))})}static warnOnListenWarnings_(t,n){if(t&&typeof t=="object"&&Lr(t,"w")){const i=ja(t,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const o='".indexOn": "'+n._queryParams.getIndex().toString()+'"',l=n._path.toString();dn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||bP(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=zx)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,n=_P(t)?"auth":"gauth",i={cred:t};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,o=>{const l=o.s,u=o.d||"error";this.authToken_===t&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const n=t.s,i=t.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(t,n){const i=t._path.toString(),o=t._queryIdentifier;this.log_("Unlisten called for "+i+" "+o),he(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,o)&&this.connected_&&this.sendUnlisten_(i,o,t._queryObject,n)}sendUnlisten_(t,n,i,o){this.log_("Unlisten on "+t+" for "+n);const l={p:t},u="n";o&&(l.q=i,l.t=o),this.sendRequest(u,l)}onDisconnectPut(t,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,n,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:n,onComplete:i})}onDisconnectMerge(t,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,n,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:n,onComplete:i})}onDisconnectCancel(t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(t,n,i,o){const l={p:n,d:i};this.log_("onDisconnect "+t,l),this.sendRequest(t,l,u=>{o&&setTimeout(()=>{o(u.s,u.d)},Math.floor(0))})}put(t,n,i,o){this.putInternal("p",t,n,i,o)}merge(t,n,i,o){this.putInternal("m",t,n,i,o)}putInternal(t,n,i,o,l){this.initConnection_();const u={p:n,d:i};l!==void 0&&(u.h=l),this.outstandingPuts_.push({action:t,request:u,onComplete:o}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(t){const n=this.outstandingPuts_[t].action,i=this.outstandingPuts_[t].request,o=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(n,i,l=>{this.log_(n+" response",l),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(l.s,l.d)})}reportStats(t){if(this.connected_){const n={c:t};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const l=i.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+$t(t));const n=t.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,n){this.log_("handleServerMessage",t,n),t==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):t==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):t==="c"?this.onListenRevoked_(n.p,n.q):t==="ac"?this.onAuthRevoked_(n.s,n.d):t==="apc"?this.onAppCheckRevoked_(n.s,n.d):t==="sd"?this.onSecurityDebugPacket_(n):Ky("Unrecognized action received from server: "+$t(t)+`
Are you using the latest client?`)}onReady_(t,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){he(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=lc,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=lc,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>i5&&(this.reconnectDelay_=lc),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-t);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*r5)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+fi.nextConnectionId_++,l=this.lastSessionId;let u=!1,f=null;const h=function(){f?f.close():(u=!0,i())},p=function(y){he(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(y)};this.realtime_={close:h,sendRequest:p};const g=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[y,_]=await Promise.all([this.authTokenProvider_.getToken(g),this.appCheckTokenProvider_.getToken(g)]);u?en("getToken() completed but was canceled"):(en("getToken() completed. Creating connection."),this.authToken_=y&&y.accessToken,this.appCheckToken_=_&&_.token,f=new K3(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,i,b=>{dn(b+" ("+this.repoInfo_.toString()+")"),this.interrupt(s5)},l))}catch(y){this.log_("Failed to get token: "+y),u||(this.repoInfo_.nodeAdmin&&dn(y),h())}}}interrupt(t){en("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){en("Resuming connection for reason: "+t),delete this.interruptReasons_[t],Py(this.interruptReasons_)&&(this.reconnectDelay_=lc,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const n=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const n=this.outstandingPuts_[t];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,n){let i;n?i=n.map(l=>u_(l)).join("$"):i="default";const o=this.removeListen_(t,i);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(t,n){const i=new ut(t).toString();let o;if(this.listens.has(i)){const l=this.listens.get(i);o=l.get(n),l.delete(n),l.size===0&&this.listens.delete(i)}else o=void 0;return o}onAuthRevoked_(t,n){en("Auth token revoked: "+t+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Bx&&(this.reconnectDelay_=zx,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,n){en("App check token revoked: "+t+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Bx&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const n of t.values())this.sendListen_(n);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let n="js";t["sdk."+n+"."+WR.replace(/\./g,"-")]=1,Yv()?t["framework.cordova"]=1:tR()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=Kf.getInstance().currentlyOnline();return Py(this.interruptReasons_)&&t}}fi.nextPersistentConnectionId_=0;fi.nextConnectionId_=0;/**
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
 */class Ve{constructor(t,n){this.name=t,this.node=n}static Wrap(t,n){return new Ve(t,n)}}/**
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
 */class Vh{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,n){const i=new Ve(za,t),o=new Ve(za,n);return this.compare(i,o)!==0}minPost(){return Ve.MIN}}/**
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
 */let Jd;class _A extends Vh{static get __EMPTY_NODE(){return Jd}static set __EMPTY_NODE(t){Jd=t}compare(t,n){return Ao(t.name,n.name)}isDefinedOn(t){throw Wa("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,n){return!1}minPost(){return Ve.MIN}maxPost(){return new Ve(_o,Jd)}makePost(t,n){return he(typeof t=="string","KeyIndex indexValue must always be a string."),new Ve(t,Jd)}toString(){return".key"}}const Ra=new _A;/**
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
 */class ef{constructor(t,n,i,o,l=null){this.isReverse_=o,this.resultGenerator_=l,this.nodeStack_=[];let u=1;for(;!t.isEmpty();)if(t=t,u=n?i(t.key,n):1,o&&(u*=-1),u<0)this.isReverse_?t=t.left:t=t.right;else if(u===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(t.key,t.value):n={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class Vt{constructor(t,n,i,o,l){this.key=t,this.value=n,this.color=i??Vt.RED,this.left=o??bn.EMPTY_NODE,this.right=l??bn.EMPTY_NODE}copy(t,n,i,o,l){return new Vt(t??this.key,n??this.value,i??this.color,o??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,i){let o=this;const l=i(t,o.key);return l<0?o=o.copy(null,null,null,o.left.insert(t,n,i),null):l===0?o=o.copy(null,n,null,null,null):o=o.copy(null,null,null,null,o.right.insert(t,n,i)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return bn.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,n){let i,o;if(i=this,n(t,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(t,i.key)===0){if(i.right.isEmpty())return bn.EMPTY_NODE;o=i.right.min_(),i=i.copy(o.key,o.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,Vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,Vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}Vt.RED=!0;Vt.BLACK=!1;class o5{copy(t,n,i,o,l){return this}insert(t,n,i){return new Vt(t,n,null)}remove(t,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class bn{constructor(t,n=bn.EMPTY_NODE){this.comparator_=t,this.root_=n}insert(t,n){return new bn(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,Vt.BLACK,null,null))}remove(t){return new bn(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,Vt.BLACK,null,null))}get(t){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(t,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(t){let n,i=this.root_,o=null;for(;!i.isEmpty();)if(n=this.comparator_(t,i.key),n===0){if(i.left.isEmpty())return o?o.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(o=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new ef(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,n){return new ef(this.root_,t,this.comparator_,!1,n)}getReverseIteratorFrom(t,n){return new ef(this.root_,t,this.comparator_,!0,n)}getReverseIterator(t){return new ef(this.root_,null,this.comparator_,!0,t)}}bn.EMPTY_NODE=new o5;/**
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
 */function a5(e,t){return Ao(e.name,t.name)}function y_(e,t){return Ao(e,t)}/**
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
 */let Zy;function l5(e){Zy=e}const bA=function(e){return typeof e=="number"?"number:"+ZR(e):"string:"+e},SA=function(e){if(e.isLeafNode()){const t=e.val();he(typeof t=="string"||typeof t=="number"||typeof t=="object"&&Lr(t,".sv"),"Priority must be a string or number.")}else he(e===Zy||e.isEmpty(),"priority of unexpected type.");he(e===Zy||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Hx;class Ft{static set __childrenNodeConstructor(t){Hx=t}static get __childrenNodeConstructor(){return Hx}constructor(t,n=Ft.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=n,this.lazyHash_=null,he(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),SA(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new Ft(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:Ft.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return We(t)?this:qe(t)===".priority"?this.priorityNode_:Ft.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,n){return null}updateImmediateChild(t,n){return t===".priority"?this.updatePriority(n):n.isEmpty()&&t!==".priority"?this:Ft.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}updateChild(t,n){const i=qe(t);return i===null?n:n.isEmpty()&&i!==".priority"?this:(he(i!==".priority"||gs(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Ft.__childrenNodeConstructor.EMPTY_NODE.updateChild(pt(t),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,n){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+bA(this.priorityNode_.val())+":");const n=typeof this.value_;t+=n+":",n==="number"?t+=ZR(this.value_):t+=this.value_,this.lazyHash_=KR(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===Ft.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof Ft.__childrenNodeConstructor?-1:(he(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const n=typeof t.value_,i=typeof this.value_,o=Ft.VALUE_TYPE_ORDER.indexOf(n),l=Ft.VALUE_TYPE_ORDER.indexOf(i);return he(o>=0,"Unknown leaf type: "+n),he(l>=0,"Unknown leaf type: "+i),o===l?i==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:l-o}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const n=t;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ft.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let wA,xA;function c5(e){wA=e}function u5(e){xA=e}class d5 extends Vh{compare(t,n){const i=t.node.getPriority(),o=n.node.getPriority(),l=i.compareTo(o);return l===0?Ao(t.name,n.name):l}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,n){return!t.getPriority().equals(n.getPriority())}minPost(){return Ve.MIN}maxPost(){return new Ve(_o,new Ft("[PRIORITY-POST]",xA))}makePost(t,n){const i=wA(t);return new Ve(n,new Ft("[PRIORITY-POST]",i))}toString(){return".priority"}}const At=new d5;/**
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
 */const f5=Math.log(2);class h5{constructor(t){const n=l=>parseInt(Math.log(l)/f5,10),i=l=>parseInt(Array(l+1).join("1"),2);this.count=n(t+1),this.current_=this.count-1;const o=i(this.count);this.bits_=t+1&o}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const Xf=function(e,t,n,i){e.sort(t);const o=function(h,p){const g=p-h;let y,_;if(g===0)return null;if(g===1)return y=e[h],_=n?n(y):y,new Vt(_,y.node,Vt.BLACK,null,null);{const b=parseInt(g/2,10)+h,w=o(h,b),I=o(b+1,p);return y=e[b],_=n?n(y):y,new Vt(_,y.node,Vt.BLACK,w,I)}},l=function(h){let p=null,g=null,y=e.length;const _=function(w,I){const T=y-w,D=y;y-=w;const M=o(T+1,D),C=e[T],A=n?n(C):C;b(new Vt(A,C.node,I,null,M))},b=function(w){p?(p.left=w,p=w):(g=w,p=w)};for(let w=0;w<h.count;++w){const I=h.nextBitIsOne(),T=Math.pow(2,h.count-(w+1));I?_(T,Vt.BLACK):(_(T,Vt.BLACK),_(T,Vt.RED))}return g},u=new h5(e.length),f=l(u);return new bn(i||t,f)};/**
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
 */let Xg;const ga={};class li{static get Default(){return he(ga&&At,"ChildrenNode.ts has not been loaded"),Xg=Xg||new li({".priority":ga},{".priority":At}),Xg}constructor(t,n){this.indexes_=t,this.indexSet_=n}get(t){const n=ja(this.indexes_,t);if(!n)throw new Error("No index defined for "+t);return n instanceof bn?n:null}hasIndex(t){return Lr(this.indexSet_,t.toString())}addIndex(t,n){he(t!==Ra,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let o=!1;const l=n.getIterator(Ve.Wrap);let u=l.getNext();for(;u;)o=o||t.isDefinedOn(u.node),i.push(u),u=l.getNext();let f;o?f=Xf(i,t.getCompare()):f=ga;const h=t.toString(),p={...this.indexSet_};p[h]=t;const g={...this.indexes_};return g[h]=f,new li(g,p)}addToIndexes(t,n){const i=Bf(this.indexes_,(o,l)=>{const u=ja(this.indexSet_,l);if(he(u,"Missing index implementation for "+l),o===ga)if(u.isDefinedOn(t.node)){const f=[],h=n.getIterator(Ve.Wrap);let p=h.getNext();for(;p;)p.name!==t.name&&f.push(p),p=h.getNext();return f.push(t),Xf(f,u.getCompare())}else return ga;else{const f=n.get(t.name);let h=o;return f&&(h=h.remove(new Ve(t.name,f))),h.insert(t,t.node)}});return new li(i,this.indexSet_)}removeFromIndexes(t,n){const i=Bf(this.indexes_,o=>{if(o===ga)return o;{const l=n.get(t.name);return l?o.remove(new Ve(t.name,l)):o}});return new li(i,this.indexSet_)}}/**
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
 */let cc;class Ne{static get EMPTY_NODE(){return cc||(cc=new Ne(new bn(y_),null,li.Default))}constructor(t,n,i){this.children_=t,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&SA(this.priorityNode_),this.children_.isEmpty()&&he(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||cc}updatePriority(t){return this.children_.isEmpty()?this:new Ne(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const n=this.children_.get(t);return n===null?cc:n}}getChild(t){const n=qe(t);return n===null?this:this.getImmediateChild(n).getChild(pt(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,n){if(he(n,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(n);{const i=new Ve(t,n);let o,l;n.isEmpty()?(o=this.children_.remove(t),l=this.indexMap_.removeFromIndexes(i,this.children_)):(o=this.children_.insert(t,n),l=this.indexMap_.addToIndexes(i,this.children_));const u=o.isEmpty()?cc:this.priorityNode_;return new Ne(o,u,l)}}updateChild(t,n){const i=qe(t);if(i===null)return n;{he(qe(t)!==".priority"||gs(t)===1,".priority must be the last token in a path");const o=this.getImmediateChild(i).updateChild(pt(t),n);return this.updateImmediateChild(i,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const n={};let i=0,o=0,l=!0;if(this.forEachChild(At,(u,f)=>{n[u]=f.val(t),i++,l&&Ne.INTEGER_REGEXP_.test(u)?o=Math.max(o,Number(u)):l=!1}),!t&&l&&o<2*i){const u=[];for(const f in n)u[f]=n[f];return u}else return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+bA(this.getPriority().val())+":"),this.forEachChild(At,(n,i)=>{const o=i.hash();o!==""&&(t+=":"+n+":"+o)}),this.lazyHash_=t===""?"":KR(t)}return this.lazyHash_}getPredecessorChildName(t,n,i){const o=this.resolveIndex_(i);if(o){const l=o.getPredecessorKey(new Ve(t,n));return l?l.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const n=this.resolveIndex_(t);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(t){const n=this.getFirstChildName(t);return n?new Ve(n,this.children_.get(n)):null}getLastChildName(t){const n=this.resolveIndex_(t);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(t){const n=this.getLastChildName(t);return n?new Ve(n,this.children_.get(n)):null}forEachChild(t,n){const i=this.resolveIndex_(t);return i?i.inorderTraversal(o=>n(o.name,o.node)):this.children_.inorderTraversal(n)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(t,o=>o);{const o=this.children_.getIteratorFrom(t.name,Ve.Wrap);let l=o.peek();for(;l!=null&&n.compare(l,t)<0;)o.getNext(),l=o.peek();return o}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(t,o=>o);{const o=this.children_.getReverseIteratorFrom(t.name,Ve.Wrap);let l=o.peek();for(;l!=null&&n.compare(l,t)>0;)o.getNext(),l=o.peek();return o}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===Su?-1:0}withIndex(t){if(t===Ra||this.indexMap_.hasIndex(t))return this;{const n=this.indexMap_.addIndex(t,this.children_);return new Ne(this.children_,this.priorityNode_,n)}}isIndexed(t){return t===Ra||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const n=t;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(At),o=n.getIterator(At);let l=i.getNext(),u=o.getNext();for(;l&&u;){if(l.name!==u.name||!l.node.equals(u.node))return!1;l=i.getNext(),u=o.getNext()}return l===null&&u===null}else return!1;else return!1}}resolveIndex_(t){return t===Ra?null:this.indexMap_.get(t.toString())}}Ne.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class p5 extends Ne{constructor(){super(new bn(y_),Ne.EMPTY_NODE,li.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return Ne.EMPTY_NODE}isEmpty(){return!1}}const Su=new p5;Object.defineProperties(Ve,{MIN:{value:new Ve(za,Ne.EMPTY_NODE)},MAX:{value:new Ve(_o,Su)}});_A.__EMPTY_NODE=Ne.EMPTY_NODE;Ft.__childrenNodeConstructor=Ne;l5(Su);u5(Su);/**
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
 */const m5=!0;function Ut(e,t=null){if(e===null)return Ne.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(t=e[".priority"]),he(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){const n=e;return new Ft(n,Ut(t))}if(!(e instanceof Array)&&m5){const n=[];let i=!1;if(rn(e,(u,f)=>{if(u.substring(0,1)!=="."){const h=Ut(f);h.isEmpty()||(i=i||!h.getPriority().isEmpty(),n.push(new Ve(u,h)))}}),n.length===0)return Ne.EMPTY_NODE;const l=Xf(n,a5,u=>u.name,y_);if(i){const u=Xf(n,At.getCompare());return new Ne(l,Ut(t),new li({".priority":u},{".priority":At}))}else return new Ne(l,Ut(t),li.Default)}else{let n=Ne.EMPTY_NODE;return rn(e,(i,o)=>{if(Lr(e,i)&&i.substring(0,1)!=="."){const l=Ut(o);(l.isLeafNode()||!l.isEmpty())&&(n=n.updateImmediateChild(i,l))}}),n.updatePriority(Ut(t))}}c5(Ut);/**
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
 */class g5 extends Vh{constructor(t){super(),this.indexPath_=t,he(!We(t)&&qe(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,n){const i=this.extractChild(t.node),o=this.extractChild(n.node),l=i.compareTo(o);return l===0?Ao(t.name,n.name):l}makePost(t,n){const i=Ut(t),o=Ne.EMPTY_NODE.updateChild(this.indexPath_,i);return new Ve(n,o)}maxPost(){const t=Ne.EMPTY_NODE.updateChild(this.indexPath_,Su);return new Ve(_o,t)}toString(){return Jc(this.indexPath_,0).join("/")}}/**
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
 */class y5 extends Vh{compare(t,n){const i=t.node.compareTo(n.node);return i===0?Ao(t.name,n.name):i}isDefinedOn(t){return!0}indexedValueChanged(t,n){return!t.equals(n)}minPost(){return Ve.MIN}maxPost(){return Ve.MAX}makePost(t,n){const i=Ut(t);return new Ve(n,i)}toString(){return".value"}}const v5=new y5;/**
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
 */function EA(e){return{type:"value",snapshotNode:e}}function Ba(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function eu(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function tu(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function _5(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}/**
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
 */class v_{constructor(t){this.index_=t}updateChild(t,n,i,o,l,u){he(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=t.getImmediateChild(n);return f.getChild(o).equals(i.getChild(o))&&f.isEmpty()===i.isEmpty()||(u!=null&&(i.isEmpty()?t.hasChild(n)?u.trackChildChange(eu(n,f)):he(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?u.trackChildChange(Ba(n,i)):u.trackChildChange(tu(n,i,f))),t.isLeafNode()&&i.isEmpty())?t:t.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(t,n,i){return i!=null&&(t.isLeafNode()||t.forEachChild(At,(o,l)=>{n.hasChild(o)||i.trackChildChange(eu(o,l))}),n.isLeafNode()||n.forEachChild(At,(o,l)=>{if(t.hasChild(o)){const u=t.getImmediateChild(o);u.equals(l)||i.trackChildChange(tu(o,l,u))}else i.trackChildChange(Ba(o,l))})),n.withIndex(this.index_)}updatePriority(t,n){return t.isEmpty()?Ne.EMPTY_NODE:t.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class nu{constructor(t){this.indexedFilter_=new v_(t.getIndex()),this.index_=t.getIndex(),this.startPost_=nu.getStartPost_(t),this.endPost_=nu.getEndPost_(t),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),t)<=0:this.index_.compare(this.getStartPost(),t)<0,i=this.endIsInclusive_?this.index_.compare(t,this.getEndPost())<=0:this.index_.compare(t,this.getEndPost())<0;return n&&i}updateChild(t,n,i,o,l,u){return this.matches(new Ve(n,i))||(i=Ne.EMPTY_NODE),this.indexedFilter_.updateChild(t,n,i,o,l,u)}updateFullNode(t,n,i){n.isLeafNode()&&(n=Ne.EMPTY_NODE);let o=n.withIndex(this.index_);o=o.updatePriority(Ne.EMPTY_NODE);const l=this;return n.forEachChild(At,(u,f)=>{l.matches(new Ve(u,f))||(o=o.updateImmediateChild(u,Ne.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,o,i)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const n=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),n)}else return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const n=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),n)}else return t.getIndex().maxPost()}}/**
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
 */class b5{constructor(t){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new nu(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft(),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}updateChild(t,n,i,o,l,u){return this.rangedFilter_.matches(new Ve(n,i))||(i=Ne.EMPTY_NODE),t.getImmediateChild(n).equals(i)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,n,i,o,l,u):this.fullLimitUpdateChild_(t,n,i,l,u)}updateFullNode(t,n,i){let o;if(n.isLeafNode()||n.isEmpty())o=Ne.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){o=Ne.EMPTY_NODE.withIndex(this.index_);let l;this.reverse_?l=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):l=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;l.hasNext()&&u<this.limit_;){const f=l.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))o=o.updateImmediateChild(f.name,f.node),u++;else break;else continue}}else{o=n.withIndex(this.index_),o=o.updatePriority(Ne.EMPTY_NODE);let l;this.reverse_?l=o.getReverseIterator(this.index_):l=o.getIterator(this.index_);let u=0;for(;l.hasNext();){const f=l.getNext();u<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?u++:o=o.updateImmediateChild(f.name,Ne.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,o,i)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,n,i,o,l){let u;if(this.reverse_){const y=this.index_.getCompare();u=(_,b)=>y(b,_)}else u=this.index_.getCompare();const f=t;he(f.numChildren()===this.limit_,"");const h=new Ve(n,i),p=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),g=this.rangedFilter_.matches(h);if(f.hasChild(n)){const y=f.getImmediateChild(n);let _=o.getChildAfterChild(this.index_,p,this.reverse_);for(;_!=null&&(_.name===n||f.hasChild(_.name));)_=o.getChildAfterChild(this.index_,_,this.reverse_);const b=_==null?1:u(_,h);if(g&&!i.isEmpty()&&b>=0)return l?.trackChildChange(tu(n,i,y)),f.updateImmediateChild(n,i);{l?.trackChildChange(eu(n,y));const I=f.updateImmediateChild(n,Ne.EMPTY_NODE);return _!=null&&this.rangedFilter_.matches(_)?(l?.trackChildChange(Ba(_.name,_.node)),I.updateImmediateChild(_.name,_.node)):I}}else return i.isEmpty()?t:g&&u(p,h)>=0?(l!=null&&(l.trackChildChange(eu(p.name,p.node)),l.trackChildChange(Ba(n,i))),f.updateImmediateChild(n,i).updateImmediateChild(p.name,Ne.EMPTY_NODE)):t}}/**
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
 */class __{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=At}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return he(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return he(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:za}hasEnd(){return this.endSet_}getIndexEndValue(){return he(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return he(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:_o}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return he(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===At}copy(){const t=new __;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function S5(e){return e.loadsAllData()?new v_(e.getIndex()):e.hasLimit()?new b5(e):new nu(e)}function Fx(e){const t={};if(e.isDefault())return t;let n;if(e.index_===At?n="$priority":e.index_===v5?n="$value":e.index_===Ra?n="$key":(he(e.index_ instanceof g5,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=$t(n),e.startSet_){const i=e.startAfterSet_?"startAfter":"startAt";t[i]=$t(e.indexStartValue_),e.startNameSet_&&(t[i]+=","+$t(e.indexStartName_))}if(e.endSet_){const i=e.endBeforeSet_?"endBefore":"endAt";t[i]=$t(e.indexEndValue_),e.endNameSet_&&(t[i]+=","+$t(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function qx(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;n===""&&(e.isViewFromLeft()?n="l":n="r"),t.vf=n}return e.index_!==At&&(t.i=e.index_.toString()),t}/**
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
 */class Zf extends mA{reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,n){return n!==void 0?"tag$"+n:(he(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}constructor(t,n,i,o){super(),this.repoInfo_=t,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=o,this.log_=bu("p:rest:"),this.listens_={}}listen(t,n,i,o){const l=t._path.toString();this.log_("Listen called for "+l+" "+t._queryIdentifier);const u=Zf.getListenId_(t,i),f={};this.listens_[u]=f;const h=Fx(t._queryParams);this.restRequest_(l+".json",h,(p,g)=>{let y=g;if(p===404&&(y=null,p=null),p===null&&this.onDataUpdate_(l,y,!1,i),ja(this.listens_,u)===f){let _;p?p===401?_="permission_denied":_="rest_error:"+p:_="ok",o(_,null)}})}unlisten(t,n){const i=Zf.getListenId_(t,n);delete this.listens_[i]}get(t){const n=Fx(t._queryParams),i=t._path.toString(),o=new hu;return this.restRequest_(i+".json",n,(l,u)=>{let f=u;l===404&&(f=null,l=null),l===null?(this.onDataUpdate_(i,f,!1,null),o.resolve(f)):o.reject(new Error(f))}),o.promise}refreshAuthToken(t){}restRequest_(t,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,l])=>{o&&o.accessToken&&(n.auth=o.accessToken),l&&l.token&&(n.ac=l.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+Ka(n);this.log_("Sending REST request for "+u);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(i&&f.readyState===4){this.log_("REST Response for "+u+" received. status:",f.status,"response:",f.responseText);let h=null;if(f.status>=200&&f.status<300){try{h=Fc(f.responseText)}catch{dn("Failed to parse JSON response for "+u+": "+f.responseText)}i(null,h)}else f.status!==401&&f.status!==404&&dn("Got unsuccessful REST response for "+u+" Status: "+f.status),i(f.status);i=null}},f.open("GET",u,!0),f.send()})}}/**
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
 */class w5{constructor(){this.rootNode_=Ne.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,n){this.rootNode_=this.rootNode_.updateChild(t,n)}}/**
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
 */function Jf(){return{value:null,children:new Map}}function TA(e,t,n){if(We(t))e.value=n,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(t,n);else{const i=qe(t);e.children.has(i)||e.children.set(i,Jf());const o=e.children.get(i);t=pt(t),TA(o,t,n)}}function Jy(e,t,n){e.value!==null?n(t,e.value):x5(e,(i,o)=>{const l=new ut(t.toString()+"/"+i);Jy(o,l,n)})}function x5(e,t){e.children.forEach((n,i)=>{t(i,n)})}/**
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
 */class E5{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),n={...t};return this.last_&&rn(this.last_,(i,o)=>{n[i]=n[i]-o}),this.last_=t,n}}/**
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
 */const Vx=10*1e3,T5=30*1e3,C5=300*1e3;class R5{constructor(t,n){this.server_=n,this.statsToReport_={},this.statsListener_=new E5(t);const i=Vx+(T5-Vx)*Math.random();kc(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const t=this.statsListener_.get(),n={};let i=!1;rn(t,(o,l)=>{l>0&&Lr(this.statsToReport_,o)&&(n[o]=l,i=!0)}),i&&this.server_.reportStats(n),kc(this.reportStats_.bind(this),Math.floor(Math.random()*2*C5))}}/**
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
 */var ur;(function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ur||(ur={}));function b_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function S_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function w_(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}/**
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
 */class eh{constructor(t,n,i){this.path=t,this.affectedTree=n,this.revert=i,this.type=ur.ACK_USER_WRITE,this.source=b_()}operationForChild(t){if(We(this.path)){if(this.affectedTree.value!=null)return he(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ut(t));return new eh(Xe(),n,this.revert)}}else return he(qe(this.path)===t,"operationForChild called for unrelated child."),new eh(pt(this.path),this.affectedTree,this.revert)}}/**
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
 */class ru{constructor(t,n){this.source=t,this.path=n,this.type=ur.LISTEN_COMPLETE}operationForChild(t){return We(this.path)?new ru(this.source,Xe()):new ru(this.source,pt(this.path))}}/**
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
 */class bo{constructor(t,n,i){this.source=t,this.path=n,this.snap=i,this.type=ur.OVERWRITE}operationForChild(t){return We(this.path)?new bo(this.source,Xe(),this.snap.getImmediateChild(t)):new bo(this.source,pt(this.path),this.snap)}}/**
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
 */class Ha{constructor(t,n,i){this.source=t,this.path=n,this.children=i,this.type=ur.MERGE}operationForChild(t){if(We(this.path)){const n=this.children.subtree(new ut(t));return n.isEmpty()?null:n.value?new bo(this.source,Xe(),n.value):new Ha(this.source,Xe(),n)}else return he(qe(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new Ha(this.source,pt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class ys{constructor(t,n,i){this.node_=t,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(We(t))return this.isFullyInitialized()&&!this.filtered_;const n=qe(t);return this.isCompleteForChild(n)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}/**
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
 */class A5{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function I5(e,t,n,i){const o=[],l=[];return t.forEach(u=>{u.type==="child_changed"&&e.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&l.push(_5(u.childName,u.snapshotNode))}),uc(e,o,"child_removed",t,i,n),uc(e,o,"child_added",t,i,n),uc(e,o,"child_moved",l,i,n),uc(e,o,"child_changed",t,i,n),uc(e,o,"value",t,i,n),o}function uc(e,t,n,i,o,l){const u=i.filter(f=>f.type===n);u.sort((f,h)=>O5(e,f,h)),u.forEach(f=>{const h=D5(e,f,l);o.forEach(p=>{p.respondsTo(f.type)&&t.push(p.createEvent(h,e.query_))})})}function D5(e,t,n){return t.type==="value"||t.type==="child_removed"||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function O5(e,t,n){if(t.childName==null||n.childName==null)throw Wa("Should only compare child_ events.");const i=new Ve(t.childName,t.snapshotNode),o=new Ve(n.childName,n.snapshotNode);return e.index_.compare(i,o)}/**
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
 */function Gh(e,t){return{eventCache:e,serverCache:t}}function Mc(e,t,n,i){return Gh(new ys(t,n,i),e.serverCache)}function CA(e,t,n,i){return Gh(e.eventCache,new ys(t,n,i))}function th(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function So(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
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
 */let Zg;const N5=()=>(Zg||(Zg=new bn(g3)),Zg);class ht{static fromObject(t){let n=new ht(null);return rn(t,(i,o)=>{n=n.set(new ut(i),o)}),n}constructor(t,n=N5()){this.value=t,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,n){if(this.value!=null&&n(this.value))return{path:Xe(),value:this.value};if(We(t))return null;{const i=qe(t),o=this.children.get(i);if(o!==null){const l=o.findRootMostMatchingPathAndValue(pt(t),n);return l!=null?{path:Rt(new ut(i),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(We(t))return this;{const n=qe(t),i=this.children.get(n);return i!==null?i.subtree(pt(t)):new ht(null)}}set(t,n){if(We(t))return new ht(n,this.children);{const i=qe(t),l=(this.children.get(i)||new ht(null)).set(pt(t),n),u=this.children.insert(i,l);return new ht(this.value,u)}}remove(t){if(We(t))return this.children.isEmpty()?new ht(null):new ht(null,this.children);{const n=qe(t),i=this.children.get(n);if(i){const o=i.remove(pt(t));let l;return o.isEmpty()?l=this.children.remove(n):l=this.children.insert(n,o),this.value===null&&l.isEmpty()?new ht(null):new ht(this.value,l)}else return this}}get(t){if(We(t))return this.value;{const n=qe(t),i=this.children.get(n);return i?i.get(pt(t)):null}}setTree(t,n){if(We(t))return n;{const i=qe(t),l=(this.children.get(i)||new ht(null)).setTree(pt(t),n);let u;return l.isEmpty()?u=this.children.remove(i):u=this.children.insert(i,l),new ht(this.value,u)}}fold(t){return this.fold_(Xe(),t)}fold_(t,n){const i={};return this.children.inorderTraversal((o,l)=>{i[o]=l.fold_(Rt(t,o),n)}),n(t,this.value,i)}findOnPath(t,n){return this.findOnPath_(t,Xe(),n)}findOnPath_(t,n,i){const o=this.value?i(n,this.value):!1;if(o)return o;if(We(t))return null;{const l=qe(t),u=this.children.get(l);return u?u.findOnPath_(pt(t),Rt(n,l),i):null}}foreachOnPath(t,n){return this.foreachOnPath_(t,Xe(),n)}foreachOnPath_(t,n,i){if(We(t))return this;{this.value&&i(n,this.value);const o=qe(t),l=this.children.get(o);return l?l.foreachOnPath_(pt(t),Rt(n,o),i):new ht(null)}}foreach(t){this.foreach_(Xe(),t)}foreach_(t,n){this.children.inorderTraversal((i,o)=>{o.foreach_(Rt(t,i),n)}),this.value&&n(t,this.value)}foreachChild(t){this.children.inorderTraversal((n,i)=>{i.value&&t(n,i.value)})}}/**
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
 */class mr{constructor(t){this.writeTree_=t}static empty(){return new mr(new ht(null))}}function Lc(e,t,n){if(We(t))return new mr(new ht(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(i!=null){const o=i.path;let l=i.value;const u=un(o,t);return l=l.updateChild(u,n),new mr(e.writeTree_.set(o,l))}else{const o=new ht(n),l=e.writeTree_.setTree(t,o);return new mr(l)}}}function ev(e,t,n){let i=e;return rn(n,(o,l)=>{i=Lc(i,Rt(t,o),l)}),i}function Gx(e,t){if(We(t))return mr.empty();{const n=e.writeTree_.setTree(t,new ht(null));return new mr(n)}}function tv(e,t){return Io(e,t)!=null}function Io(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return n!=null?e.writeTree_.get(n.path).getChild(un(n.path,t)):null}function Yx(e){const t=[],n=e.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(At,(i,o)=>{t.push(new Ve(i,o))}):e.writeTree_.children.inorderTraversal((i,o)=>{o.value!=null&&t.push(new Ve(i,o.value))}),t}function ls(e,t){if(We(t))return e;{const n=Io(e,t);return n!=null?new mr(new ht(n)):new mr(e.writeTree_.subtree(t))}}function nv(e){return e.writeTree_.isEmpty()}function Fa(e,t){return RA(Xe(),e.writeTree_,t)}function RA(e,t,n){if(t.value!=null)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal((o,l)=>{o===".priority"?(he(l.value!==null,"Priority writes must always be leaf nodes"),i=l.value):n=RA(Rt(e,o),l,n)}),!n.getChild(e).isEmpty()&&i!==null&&(n=n.updateChild(Rt(e,".priority"),i)),n}}/**
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
 */function Yh(e,t){return OA(t,e)}function k5(e,t,n,i,o){he(i>e.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:o}),o&&(e.visibleWrites=Lc(e.visibleWrites,t,n)),e.lastWriteId=i}function M5(e,t,n,i){he(i>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:i,visible:!0}),e.visibleWrites=ev(e.visibleWrites,t,n),e.lastWriteId=i}function L5(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}function P5(e,t){const n=e.allWrites.findIndex(f=>f.writeId===t);he(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let o=i.visible,l=!1,u=e.allWrites.length-1;for(;o&&u>=0;){const f=e.allWrites[u];f.visible&&(u>=n&&j5(f,i.path)?o=!1:Wn(i.path,f.path)&&(l=!0)),u--}if(o){if(l)return U5(e),!0;if(i.snap)e.visibleWrites=Gx(e.visibleWrites,i.path);else{const f=i.children;rn(f,h=>{e.visibleWrites=Gx(e.visibleWrites,Rt(i.path,h))})}return!0}else return!1}function j5(e,t){if(e.snap)return Wn(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Wn(Rt(e.path,n),t))return!0;return!1}function U5(e){e.visibleWrites=AA(e.allWrites,$5,Xe()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function $5(e){return e.visible}function AA(e,t,n){let i=mr.empty();for(let o=0;o<e.length;++o){const l=e[o];if(t(l)){const u=l.path;let f;if(l.snap)Wn(n,u)?(f=un(n,u),i=Lc(i,f,l.snap)):Wn(u,n)&&(f=un(u,n),i=Lc(i,Xe(),l.snap.getChild(f)));else if(l.children){if(Wn(n,u))f=un(n,u),i=ev(i,f,l.children);else if(Wn(u,n))if(f=un(u,n),We(f))i=ev(i,Xe(),l.children);else{const h=ja(l.children,qe(f));if(h){const p=h.getChild(pt(f));i=Lc(i,Xe(),p)}}}else throw Wa("WriteRecord should have .snap or .children")}}return i}function IA(e,t,n,i,o){if(!i&&!o){const l=Io(e.visibleWrites,t);if(l!=null)return l;{const u=ls(e.visibleWrites,t);if(nv(u))return n;if(n==null&&!tv(u,Xe()))return null;{const f=n||Ne.EMPTY_NODE;return Fa(u,f)}}}else{const l=ls(e.visibleWrites,t);if(!o&&nv(l))return n;if(!o&&n==null&&!tv(l,Xe()))return null;{const u=function(p){return(p.visible||o)&&(!i||!~i.indexOf(p.writeId))&&(Wn(p.path,t)||Wn(t,p.path))},f=AA(e.allWrites,u,t),h=n||Ne.EMPTY_NODE;return Fa(f,h)}}}function z5(e,t,n){let i=Ne.EMPTY_NODE;const o=Io(e.visibleWrites,t);if(o)return o.isLeafNode()||o.forEachChild(At,(l,u)=>{i=i.updateImmediateChild(l,u)}),i;if(n){const l=ls(e.visibleWrites,t);return n.forEachChild(At,(u,f)=>{const h=Fa(ls(l,new ut(u)),f);i=i.updateImmediateChild(u,h)}),Yx(l).forEach(u=>{i=i.updateImmediateChild(u.name,u.node)}),i}else{const l=ls(e.visibleWrites,t);return Yx(l).forEach(u=>{i=i.updateImmediateChild(u.name,u.node)}),i}}function B5(e,t,n,i,o){he(i||o,"Either existingEventSnap or existingServerSnap must exist");const l=Rt(t,n);if(tv(e.visibleWrites,l))return null;{const u=ls(e.visibleWrites,l);return nv(u)?o.getChild(n):Fa(u,o.getChild(n))}}function H5(e,t,n,i){const o=Rt(t,n),l=Io(e.visibleWrites,o);if(l!=null)return l;if(i.isCompleteForChild(n)){const u=ls(e.visibleWrites,o);return Fa(u,i.getNode().getImmediateChild(n))}else return null}function F5(e,t){return Io(e.visibleWrites,t)}function q5(e,t,n,i,o,l,u){let f;const h=ls(e.visibleWrites,t),p=Io(h,Xe());if(p!=null)f=p;else if(n!=null)f=Fa(h,n);else return[];if(f=f.withIndex(u),!f.isEmpty()&&!f.isLeafNode()){const g=[],y=u.getCompare(),_=l?f.getReverseIteratorFrom(i,u):f.getIteratorFrom(i,u);let b=_.getNext();for(;b&&g.length<o;)y(b,i)!==0&&g.push(b),b=_.getNext();return g}else return[]}function V5(){return{visibleWrites:mr.empty(),allWrites:[],lastWriteId:-1}}function nh(e,t,n,i){return IA(e.writeTree,e.treePath,t,n,i)}function x_(e,t){return z5(e.writeTree,e.treePath,t)}function Wx(e,t,n,i){return B5(e.writeTree,e.treePath,t,n,i)}function rh(e,t){return F5(e.writeTree,Rt(e.treePath,t))}function G5(e,t,n,i,o,l){return q5(e.writeTree,e.treePath,t,n,i,o,l)}function E_(e,t,n){return H5(e.writeTree,e.treePath,t,n)}function DA(e,t){return OA(Rt(e.treePath,t),e.writeTree)}function OA(e,t){return{treePath:e,writeTree:t}}/**
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
 */class Y5{constructor(){this.changeMap=new Map}trackChildChange(t){const n=t.type,i=t.childName;he(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),he(i!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(i);if(o){const l=o.type;if(n==="child_added"&&l==="child_removed")this.changeMap.set(i,tu(i,t.snapshotNode,o.snapshotNode));else if(n==="child_removed"&&l==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&l==="child_changed")this.changeMap.set(i,eu(i,o.oldSnap));else if(n==="child_changed"&&l==="child_added")this.changeMap.set(i,Ba(i,t.snapshotNode));else if(n==="child_changed"&&l==="child_changed")this.changeMap.set(i,tu(i,t.snapshotNode,o.oldSnap));else throw Wa("Illegal combination of changes: "+t+" occurred after "+o)}else this.changeMap.set(i,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class W5{getCompleteChild(t){return null}getChildAfterChild(t,n,i){return null}}const NA=new W5;class T_{constructor(t,n,i=null){this.writes_=t,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(t){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(t))return n.getNode().getImmediateChild(t);{const i=this.optCompleteServerCache_!=null?new ys(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return E_(this.writes_,t,i)}}getChildAfterChild(t,n,i){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:So(this.viewCache_),l=G5(this.writes_,o,n,1,i,t);return l.length===0?null:l[0]}}/**
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
 */function Q5(e){return{filter:e}}function K5(e,t){he(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),he(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function X5(e,t,n,i,o){const l=new Y5;let u,f;if(n.type===ur.OVERWRITE){const p=n;p.source.fromUser?u=rv(e,t,p.path,p.snap,i,o,l):(he(p.source.fromServer,"Unknown source."),f=p.source.tagged||t.serverCache.isFiltered()&&!We(p.path),u=ih(e,t,p.path,p.snap,i,o,f,l))}else if(n.type===ur.MERGE){const p=n;p.source.fromUser?u=J5(e,t,p.path,p.children,i,o,l):(he(p.source.fromServer,"Unknown source."),f=p.source.tagged||t.serverCache.isFiltered(),u=iv(e,t,p.path,p.children,i,o,f,l))}else if(n.type===ur.ACK_USER_WRITE){const p=n;p.revert?u=nU(e,t,p.path,i,o,l):u=eU(e,t,p.path,p.affectedTree,i,o,l)}else if(n.type===ur.LISTEN_COMPLETE)u=tU(e,t,n.path,i,l);else throw Wa("Unknown operation type: "+n.type);const h=l.getChanges();return Z5(t,u,h),{viewCache:u,changes:h}}function Z5(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const o=i.getNode().isLeafNode()||i.getNode().isEmpty(),l=th(e);(n.length>0||!e.eventCache.isFullyInitialized()||o&&!i.getNode().equals(l)||!i.getNode().getPriority().equals(l.getPriority()))&&n.push(EA(th(t)))}}function kA(e,t,n,i,o,l){const u=t.eventCache;if(rh(i,n)!=null)return t;{let f,h;if(We(n))if(he(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const p=So(t),g=p instanceof Ne?p:Ne.EMPTY_NODE,y=x_(i,g);f=e.filter.updateFullNode(t.eventCache.getNode(),y,l)}else{const p=nh(i,So(t));f=e.filter.updateFullNode(t.eventCache.getNode(),p,l)}else{const p=qe(n);if(p===".priority"){he(gs(n)===1,"Can't have a priority with additional path components");const g=u.getNode();h=t.serverCache.getNode();const y=Wx(i,n,g,h);y!=null?f=e.filter.updatePriority(g,y):f=u.getNode()}else{const g=pt(n);let y;if(u.isCompleteForChild(p)){h=t.serverCache.getNode();const _=Wx(i,n,u.getNode(),h);_!=null?y=u.getNode().getImmediateChild(p).updateChild(g,_):y=u.getNode().getImmediateChild(p)}else y=E_(i,p,t.serverCache);y!=null?f=e.filter.updateChild(u.getNode(),p,y,g,o,l):f=u.getNode()}}return Mc(t,f,u.isFullyInitialized()||We(n),e.filter.filtersNodes())}}function ih(e,t,n,i,o,l,u,f){const h=t.serverCache;let p;const g=u?e.filter:e.filter.getIndexedFilter();if(We(n))p=g.updateFullNode(h.getNode(),i,null);else if(g.filtersNodes()&&!h.isFiltered()){const b=h.getNode().updateChild(n,i);p=g.updateFullNode(h.getNode(),b,null)}else{const b=qe(n);if(!h.isCompleteForPath(n)&&gs(n)>1)return t;const w=pt(n),T=h.getNode().getImmediateChild(b).updateChild(w,i);b===".priority"?p=g.updatePriority(h.getNode(),T):p=g.updateChild(h.getNode(),b,T,w,NA,null)}const y=CA(t,p,h.isFullyInitialized()||We(n),g.filtersNodes()),_=new T_(o,y,l);return kA(e,y,n,o,_,f)}function rv(e,t,n,i,o,l,u){const f=t.eventCache;let h,p;const g=new T_(o,t,l);if(We(n))p=e.filter.updateFullNode(t.eventCache.getNode(),i,u),h=Mc(t,p,!0,e.filter.filtersNodes());else{const y=qe(n);if(y===".priority")p=e.filter.updatePriority(t.eventCache.getNode(),i),h=Mc(t,p,f.isFullyInitialized(),f.isFiltered());else{const _=pt(n),b=f.getNode().getImmediateChild(y);let w;if(We(_))w=i;else{const I=g.getCompleteChild(y);I!=null?p_(_)===".priority"&&I.getChild(yA(_)).isEmpty()?w=I:w=I.updateChild(_,i):w=Ne.EMPTY_NODE}if(b.equals(w))h=t;else{const I=e.filter.updateChild(f.getNode(),y,w,_,g,u);h=Mc(t,I,f.isFullyInitialized(),e.filter.filtersNodes())}}}return h}function Qx(e,t){return e.eventCache.isCompleteForChild(t)}function J5(e,t,n,i,o,l,u){let f=t;return i.foreach((h,p)=>{const g=Rt(n,h);Qx(t,qe(g))&&(f=rv(e,f,g,p,o,l,u))}),i.foreach((h,p)=>{const g=Rt(n,h);Qx(t,qe(g))||(f=rv(e,f,g,p,o,l,u))}),f}function Kx(e,t,n){return n.foreach((i,o)=>{t=t.updateChild(i,o)}),t}function iv(e,t,n,i,o,l,u,f){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let h=t,p;We(n)?p=i:p=new ht(null).setTree(n,i);const g=t.serverCache.getNode();return p.children.inorderTraversal((y,_)=>{if(g.hasChild(y)){const b=t.serverCache.getNode().getImmediateChild(y),w=Kx(e,b,_);h=ih(e,h,new ut(y),w,o,l,u,f)}}),p.children.inorderTraversal((y,_)=>{const b=!t.serverCache.isCompleteForChild(y)&&_.value===null;if(!g.hasChild(y)&&!b){const w=t.serverCache.getNode().getImmediateChild(y),I=Kx(e,w,_);h=ih(e,h,new ut(y),I,o,l,u,f)}}),h}function eU(e,t,n,i,o,l,u){if(rh(o,n)!=null)return t;const f=t.serverCache.isFiltered(),h=t.serverCache;if(i.value!=null){if(We(n)&&h.isFullyInitialized()||h.isCompleteForPath(n))return ih(e,t,n,h.getNode().getChild(n),o,l,f,u);if(We(n)){let p=new ht(null);return h.getNode().forEachChild(Ra,(g,y)=>{p=p.set(new ut(g),y)}),iv(e,t,n,p,o,l,f,u)}else return t}else{let p=new ht(null);return i.foreach((g,y)=>{const _=Rt(n,g);h.isCompleteForPath(_)&&(p=p.set(g,h.getNode().getChild(_)))}),iv(e,t,n,p,o,l,f,u)}}function tU(e,t,n,i,o){const l=t.serverCache,u=CA(t,l.getNode(),l.isFullyInitialized()||We(n),l.isFiltered());return kA(e,u,n,i,NA,o)}function nU(e,t,n,i,o,l){let u;if(rh(i,n)!=null)return t;{const f=new T_(i,t,o),h=t.eventCache.getNode();let p;if(We(n)||qe(n)===".priority"){let g;if(t.serverCache.isFullyInitialized())g=nh(i,So(t));else{const y=t.serverCache.getNode();he(y instanceof Ne,"serverChildren would be complete if leaf node"),g=x_(i,y)}g=g,p=e.filter.updateFullNode(h,g,l)}else{const g=qe(n);let y=E_(i,g,t.serverCache);y==null&&t.serverCache.isCompleteForChild(g)&&(y=h.getImmediateChild(g)),y!=null?p=e.filter.updateChild(h,g,y,pt(n),f,l):t.eventCache.getNode().hasChild(g)?p=e.filter.updateChild(h,g,Ne.EMPTY_NODE,pt(n),f,l):p=h,p.isEmpty()&&t.serverCache.isFullyInitialized()&&(u=nh(i,So(t)),u.isLeafNode()&&(p=e.filter.updateFullNode(p,u,l)))}return u=t.serverCache.isFullyInitialized()||rh(i,Xe())!=null,Mc(t,p,u,e.filter.filtersNodes())}}/**
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
 */class rU{constructor(t,n){this.query_=t,this.eventRegistrations_=[];const i=this.query_._queryParams,o=new v_(i.getIndex()),l=S5(i);this.processor_=Q5(l);const u=n.serverCache,f=n.eventCache,h=o.updateFullNode(Ne.EMPTY_NODE,u.getNode(),null),p=l.updateFullNode(Ne.EMPTY_NODE,f.getNode(),null),g=new ys(h,u.isFullyInitialized(),o.filtersNodes()),y=new ys(p,f.isFullyInitialized(),l.filtersNodes());this.viewCache_=Gh(y,g),this.eventGenerator_=new A5(this.query_)}get query(){return this.query_}}function iU(e){return e.viewCache_.serverCache.getNode()}function sU(e){return th(e.viewCache_)}function oU(e,t){const n=So(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!We(t)&&!n.getImmediateChild(qe(t)).isEmpty())?n.getChild(t):null}function Xx(e){return e.eventRegistrations_.length===0}function aU(e,t){e.eventRegistrations_.push(t)}function Zx(e,t,n){const i=[];if(n){he(t==null,"A cancel should cancel all event registrations.");const o=e.query._path;e.eventRegistrations_.forEach(l=>{const u=l.createCancelEvent(n,o);u&&i.push(u)})}if(t){let o=[];for(let l=0;l<e.eventRegistrations_.length;++l){const u=e.eventRegistrations_[l];if(!u.matches(t))o.push(u);else if(t.hasAnyCallback()){o=o.concat(e.eventRegistrations_.slice(l+1));break}}e.eventRegistrations_=o}else e.eventRegistrations_=[];return i}function Jx(e,t,n,i){t.type===ur.MERGE&&t.source.queryId!==null&&(he(So(e.viewCache_),"We should always have a full cache before handling merges"),he(th(e.viewCache_),"Missing event cache, even though we have a server cache"));const o=e.viewCache_,l=X5(e.processor_,o,t,n,i);return K5(e.processor_,l.viewCache),he(l.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=l.viewCache,MA(e,l.changes,l.viewCache.eventCache.getNode(),null)}function lU(e,t){const n=e.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(At,(l,u)=>{i.push(Ba(l,u))}),n.isFullyInitialized()&&i.push(EA(n.getNode())),MA(e,i,n.getNode(),t)}function MA(e,t,n,i){const o=i?[i]:e.eventRegistrations_;return I5(e.eventGenerator_,t,n,o)}/**
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
 */let sh;class LA{constructor(){this.views=new Map}}function cU(e){he(!sh,"__referenceConstructor has already been defined"),sh=e}function uU(){return he(sh,"Reference.ts has not been loaded"),sh}function dU(e){return e.views.size===0}function C_(e,t,n,i){const o=t.source.queryId;if(o!==null){const l=e.views.get(o);return he(l!=null,"SyncTree gave us an op for an invalid query."),Jx(l,t,n,i)}else{let l=[];for(const u of e.views.values())l=l.concat(Jx(u,t,n,i));return l}}function PA(e,t,n,i,o){const l=t._queryIdentifier,u=e.views.get(l);if(!u){let f=nh(n,o?i:null),h=!1;f?h=!0:i instanceof Ne?(f=x_(n,i),h=!1):(f=Ne.EMPTY_NODE,h=!1);const p=Gh(new ys(f,h,!1),new ys(i,o,!1));return new rU(t,p)}return u}function fU(e,t,n,i,o,l){const u=PA(e,t,i,o,l);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,u),aU(u,n),lU(u,n)}function hU(e,t,n,i){const o=t._queryIdentifier,l=[];let u=[];const f=vs(e);if(o==="default")for(const[h,p]of e.views.entries())u=u.concat(Zx(p,n,i)),Xx(p)&&(e.views.delete(h),p.query._queryParams.loadsAllData()||l.push(p.query));else{const h=e.views.get(o);h&&(u=u.concat(Zx(h,n,i)),Xx(h)&&(e.views.delete(o),h.query._queryParams.loadsAllData()||l.push(h.query)))}return f&&!vs(e)&&l.push(new(uU())(t._repo,t._path)),{removed:l,events:u}}function jA(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function cs(e,t){let n=null;for(const i of e.views.values())n=n||oU(i,t);return n}function UA(e,t){if(t._queryParams.loadsAllData())return Wh(e);{const i=t._queryIdentifier;return e.views.get(i)}}function $A(e,t){return UA(e,t)!=null}function vs(e){return Wh(e)!=null}function Wh(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}/**
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
 */let oh;function pU(e){he(!oh,"__referenceConstructor has already been defined"),oh=e}function mU(){return he(oh,"Reference.ts has not been loaded"),oh}let gU=1;class eE{constructor(t){this.listenProvider_=t,this.syncPointTree_=new ht(null),this.pendingWriteTree_=V5(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function zA(e,t,n,i,o){return k5(e.pendingWriteTree_,t,n,i,o),o?nl(e,new bo(b_(),t,n)):[]}function yU(e,t,n,i){M5(e.pendingWriteTree_,t,n,i);const o=ht.fromObject(n);return nl(e,new Ha(b_(),t,o))}function is(e,t,n=!1){const i=L5(e.pendingWriteTree_,t);if(P5(e.pendingWriteTree_,t)){let l=new ht(null);return i.snap!=null?l=l.set(Xe(),!0):rn(i.children,u=>{l=l.set(new ut(u),!0)}),nl(e,new eh(i.path,l,n))}else return[]}function wu(e,t,n){return nl(e,new bo(S_(),t,n))}function vU(e,t,n){const i=ht.fromObject(n);return nl(e,new Ha(S_(),t,i))}function _U(e,t){return nl(e,new ru(S_(),t))}function bU(e,t,n){const i=A_(e,n);if(i){const o=I_(i),l=o.path,u=o.queryId,f=un(l,t),h=new ru(w_(u),f);return D_(e,l,h)}else return[]}function ah(e,t,n,i,o=!1){const l=t._path,u=e.syncPointTree_.get(l);let f=[];if(u&&(t._queryIdentifier==="default"||$A(u,t))){const h=hU(u,t,n,i);dU(u)&&(e.syncPointTree_=e.syncPointTree_.remove(l));const p=h.removed;if(f=h.events,!o){const g=p.findIndex(_=>_._queryParams.loadsAllData())!==-1,y=e.syncPointTree_.findOnPath(l,(_,b)=>vs(b));if(g&&!y){const _=e.syncPointTree_.subtree(l);if(!_.isEmpty()){const b=xU(_);for(let w=0;w<b.length;++w){const I=b[w],T=I.query,D=qA(e,I);e.listenProvider_.startListening(Pc(T),iu(e,T),D.hashFn,D.onComplete)}}}!y&&p.length>0&&!i&&(g?e.listenProvider_.stopListening(Pc(t),null):p.forEach(_=>{const b=e.queryToTagMap.get(Qh(_));e.listenProvider_.stopListening(Pc(_),b)}))}EU(e,p)}return f}function BA(e,t,n,i){const o=A_(e,i);if(o!=null){const l=I_(o),u=l.path,f=l.queryId,h=un(u,t),p=new bo(w_(f),h,n);return D_(e,u,p)}else return[]}function SU(e,t,n,i){const o=A_(e,i);if(o){const l=I_(o),u=l.path,f=l.queryId,h=un(u,t),p=ht.fromObject(n),g=new Ha(w_(f),h,p);return D_(e,u,g)}else return[]}function sv(e,t,n,i=!1){const o=t._path;let l=null,u=!1;e.syncPointTree_.foreachOnPath(o,(_,b)=>{const w=un(_,o);l=l||cs(b,w),u=u||vs(b)});let f=e.syncPointTree_.get(o);f?(u=u||vs(f),l=l||cs(f,Xe())):(f=new LA,e.syncPointTree_=e.syncPointTree_.set(o,f));let h;l!=null?h=!0:(h=!1,l=Ne.EMPTY_NODE,e.syncPointTree_.subtree(o).foreachChild((b,w)=>{const I=cs(w,Xe());I&&(l=l.updateImmediateChild(b,I))}));const p=$A(f,t);if(!p&&!t._queryParams.loadsAllData()){const _=Qh(t);he(!e.queryToTagMap.has(_),"View does not exist, but we have a tag");const b=TU();e.queryToTagMap.set(_,b),e.tagToQueryMap.set(b,_)}const g=Yh(e.pendingWriteTree_,o);let y=fU(f,t,n,g,l,h);if(!p&&!u&&!i){const _=UA(f,t);y=y.concat(CU(e,t,_))}return y}function R_(e,t,n){const o=e.pendingWriteTree_,l=e.syncPointTree_.findOnPath(t,(u,f)=>{const h=un(u,t),p=cs(f,h);if(p)return p});return IA(o,t,l,n,!0)}function wU(e,t){const n=t._path;let i=null;e.syncPointTree_.foreachOnPath(n,(p,g)=>{const y=un(p,n);i=i||cs(g,y)});let o=e.syncPointTree_.get(n);o?i=i||cs(o,Xe()):(o=new LA,e.syncPointTree_=e.syncPointTree_.set(n,o));const l=i!=null,u=l?new ys(i,!0,!1):null,f=Yh(e.pendingWriteTree_,t._path),h=PA(o,t,f,l?u.getNode():Ne.EMPTY_NODE,l);return sU(h)}function nl(e,t){return HA(t,e.syncPointTree_,null,Yh(e.pendingWriteTree_,Xe()))}function HA(e,t,n,i){if(We(e.path))return FA(e,t,n,i);{const o=t.get(Xe());n==null&&o!=null&&(n=cs(o,Xe()));let l=[];const u=qe(e.path),f=e.operationForChild(u),h=t.children.get(u);if(h&&f){const p=n?n.getImmediateChild(u):null,g=DA(i,u);l=l.concat(HA(f,h,p,g))}return o&&(l=l.concat(C_(o,e,i,n))),l}}function FA(e,t,n,i){const o=t.get(Xe());n==null&&o!=null&&(n=cs(o,Xe()));let l=[];return t.children.inorderTraversal((u,f)=>{const h=n?n.getImmediateChild(u):null,p=DA(i,u),g=e.operationForChild(u);g&&(l=l.concat(FA(g,f,h,p)))}),o&&(l=l.concat(C_(o,e,i,n))),l}function qA(e,t){const n=t.query,i=iu(e,n);return{hashFn:()=>(iU(t)||Ne.EMPTY_NODE).hash(),onComplete:o=>{if(o==="ok")return i?bU(e,n._path,i):_U(e,n._path);{const l=_3(o,n);return ah(e,n,null,l)}}}}function iu(e,t){const n=Qh(t);return e.queryToTagMap.get(n)}function Qh(e){return e._path.toString()+"$"+e._queryIdentifier}function A_(e,t){return e.tagToQueryMap.get(t)}function I_(e){const t=e.indexOf("$");return he(t!==-1&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ut(e.substr(0,t))}}function D_(e,t,n){const i=e.syncPointTree_.get(t);he(i,"Missing sync point for query tag that we're tracking");const o=Yh(e.pendingWriteTree_,t);return C_(i,n,o,null)}function xU(e){return e.fold((t,n,i)=>{if(n&&vs(n))return[Wh(n)];{let o=[];return n&&(o=jA(n)),rn(i,(l,u)=>{o=o.concat(u)}),o}})}function Pc(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(mU())(e._repo,e._path):e}function EU(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const o=Qh(i),l=e.queryToTagMap.get(o);e.queryToTagMap.delete(o),e.tagToQueryMap.delete(l)}}}function TU(){return gU++}function CU(e,t,n){const i=t._path,o=iu(e,t),l=qA(e,n),u=e.listenProvider_.startListening(Pc(t),o,l.hashFn,l.onComplete),f=e.syncPointTree_.subtree(i);if(o)he(!vs(f.value),"If we're adding a query, it shouldn't be shadowed");else{const h=f.fold((p,g,y)=>{if(!We(p)&&g&&vs(g))return[Wh(g).query];{let _=[];return g&&(_=_.concat(jA(g).map(b=>b.query))),rn(y,(b,w)=>{_=_.concat(w)}),_}});for(let p=0;p<h.length;++p){const g=h[p];e.listenProvider_.stopListening(Pc(g),iu(e,g))}}return u}/**
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
 */class O_{constructor(t){this.node_=t}getImmediateChild(t){const n=this.node_.getImmediateChild(t);return new O_(n)}node(){return this.node_}}class N_{constructor(t,n){this.syncTree_=t,this.path_=n}getImmediateChild(t){const n=Rt(this.path_,t);return new N_(this.syncTree_,n)}node(){return R_(this.syncTree_,this.path_)}}const RU=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},tE=function(e,t,n){if(!e||typeof e!="object")return e;if(he(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return AU(e[".sv"],t,n);if(typeof e[".sv"]=="object")return IU(e[".sv"],t);he(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},AU=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:he(!1,"Unexpected server value: "+e)}},IU=function(e,t,n){e.hasOwnProperty("increment")||he(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;typeof i!="number"&&he(!1,"Unexpected increment value: "+i);const o=t.node();if(he(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return i;const u=o.getValue();return typeof u!="number"?i:u+i},VA=function(e,t,n,i){return k_(t,new N_(n,e),i)},GA=function(e,t,n){return k_(e,new O_(t),n)};function k_(e,t,n){const i=e.getPriority().val(),o=tE(i,t.getImmediateChild(".priority"),n);let l;if(e.isLeafNode()){const u=e,f=tE(u.getValue(),t,n);return f!==u.getValue()||o!==u.getPriority().val()?new Ft(f,Ut(o)):e}else{const u=e;return l=u,o!==u.getPriority().val()&&(l=l.updatePriority(new Ft(o))),u.forEachChild(At,(f,h)=>{const p=k_(h,t.getImmediateChild(f),n);p!==h&&(l=l.updateImmediateChild(f,p))}),l}}/**
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
 */class M_{constructor(t="",n=null,i={children:{},childCount:0}){this.name=t,this.parent=n,this.node=i}}function L_(e,t){let n=t instanceof ut?t:new ut(t),i=e,o=qe(n);for(;o!==null;){const l=ja(i.node.children,o)||{children:{},childCount:0};i=new M_(o,i,l),n=pt(n),o=qe(n)}return i}function rl(e){return e.node.value}function YA(e,t){e.node.value=t,ov(e)}function WA(e){return e.node.childCount>0}function DU(e){return rl(e)===void 0&&!WA(e)}function Kh(e,t){rn(e.node.children,(n,i)=>{t(new M_(n,e,i))})}function QA(e,t,n,i){n&&t(e),Kh(e,o=>{QA(o,t,!0)})}function OU(e,t,n){let i=e.parent;for(;i!==null;){if(t(i))return!0;i=i.parent}return!1}function xu(e){return new ut(e.parent===null?e.name:xu(e.parent)+"/"+e.name)}function ov(e){e.parent!==null&&NU(e.parent,e.name,e)}function NU(e,t,n){const i=DU(n),o=Lr(e.node.children,t);i&&o?(delete e.node.children[t],e.node.childCount--,ov(e)):!i&&!o&&(e.node.children[t]=n.node,e.node.childCount++,ov(e))}/**
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
 */const kU=/[\[\].#$\/\u0000-\u001F\u007F]/,MU=/[\[\].#$\u0000-\u001F\u007F]/,Jg=10*1024*1024,P_=function(e){return typeof e=="string"&&e.length!==0&&!kU.test(e)},KA=function(e){return typeof e=="string"&&e.length!==0&&!MU.test(e)},LU=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),KA(e)},PU=function(e){return e===null||typeof e=="string"||typeof e=="number"&&!c_(e)||e&&typeof e=="object"&&Lr(e,".sv")},XA=function(e,t,n,i){i&&t===void 0||Xh(Lh(e,"value"),t,n)},Xh=function(e,t,n){const i=n instanceof ut?new J3(n,e):n;if(t===void 0)throw new Error(e+"contains undefined "+ro(i));if(typeof t=="function")throw new Error(e+"contains a function "+ro(i)+" with contents = "+t.toString());if(c_(t))throw new Error(e+"contains "+t.toString()+" "+ro(i));if(typeof t=="string"&&t.length>Jg/3&&Ph(t)>Jg)throw new Error(e+"contains a string greater than "+Jg+" utf8 bytes "+ro(i)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let o=!1,l=!1;if(rn(t,(u,f)=>{if(u===".value")o=!0;else if(u!==".priority"&&u!==".sv"&&(l=!0,!P_(u)))throw new Error(e+" contains an invalid key ("+u+") "+ro(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);e5(i,u),Xh(e,f,i),t5(i)}),o&&l)throw new Error(e+' contains ".value" child '+ro(i)+" in addition to actual children.")}},jU=function(e,t){let n,i;for(n=0;n<t.length;n++){i=t[n];const l=Jc(i);for(let u=0;u<l.length;u++)if(!(l[u]===".priority"&&u===l.length-1)){if(!P_(l[u]))throw new Error(e+"contains an invalid key ("+l[u]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}t.sort(Z3);let o=null;for(n=0;n<t.length;n++){if(i=t[n],o!==null&&Wn(o,i))throw new Error(e+"contains a path "+o.toString()+" that is ancestor of another path "+i.toString());o=i}},UU=function(e,t,n,i){const o=Lh(e,"values");if(!(t&&typeof t=="object")||Array.isArray(t))throw new Error(o+" must be an object containing the children to replace.");const l=[];rn(t,(u,f)=>{const h=new ut(u);if(Xh(o,f,Rt(n,h)),p_(h)===".priority"&&!PU(f))throw new Error(o+"contains an invalid value for '"+h.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");l.push(h)}),jU(o,l)},ZA=function(e,t,n,i){if(!KA(n))throw new Error(Lh(e,t)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},$U=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ZA(e,t,n)},j_=function(e,t){if(qe(t)===".info")throw new Error(e+" failed = Can't modify data under /.info/")},zU=function(e,t){const n=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!P_(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!LU(n))throw new Error(Lh(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class BU{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Zh(e,t){let n=null;for(let i=0;i<t.length;i++){const o=t[i],l=o.getPath();n!==null&&!m_(l,n.path)&&(e.eventLists_.push(n),n=null),n===null&&(n={events:[],path:l}),n.events.push(o)}n&&e.eventLists_.push(n)}function JA(e,t,n){Zh(e,n),eI(e,i=>m_(i,t))}function Zn(e,t,n){Zh(e,n),eI(e,i=>Wn(i,t)||Wn(t,i))}function eI(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const o=e.eventLists_[i];if(o){const l=o.path;t(l)?(HU(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function HU(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(n!==null){e.events[t]=null;const i=n.getEventRunner();Nc&&en("event: "+n.toString()),tl(i)}}}/**
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
 */const FU="repo_interrupt",qU=25;class VU{constructor(t,n,i,o){this.repoInfo_=t,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new BU,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Jf(),this.transactionQueueTree_=new M_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function GU(e,t,n){if(e.stats_=f_(e.repoInfo_),e.forceRestClient_||x3())e.server_=new Zf(e.repoInfo_,(i,o,l,u)=>{nE(e,i,o,l,u)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>rE(e,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{$t(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new fi(e.repoInfo_,t,(i,o,l,u)=>{nE(e,i,o,l,u)},i=>{rE(e,i)},i=>{YU(e,i)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(i=>{e.server_.refreshAuthToken(i)}),e.appCheckProvider_.addTokenChangeListener(i=>{e.server_.refreshAppCheckToken(i.token)}),e.statsReporter_=A3(e.repoInfo_,()=>new R5(e.stats_,e.server_)),e.infoData_=new w5,e.infoSyncTree_=new eE({startListening:(i,o,l,u)=>{let f=[];const h=e.infoData_.getNode(i._path);return h.isEmpty()||(f=wu(e.infoSyncTree_,i._path,h),setTimeout(()=>{u("ok")},0)),f},stopListening:()=>{}}),U_(e,"connected",!1),e.serverSyncTree_=new eE({startListening:(i,o,l,u)=>(e.server_.listen(i,l,o,(f,h)=>{const p=u(f,h);Zn(e.eventQueue_,i._path,p)}),[]),stopListening:(i,o)=>{e.server_.unlisten(i,o)}})}function tI(e){const n=e.infoData_.getNode(new ut(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Jh(e){return RU({timestamp:tI(e)})}function nE(e,t,n,i,o){e.dataUpdateCount++;const l=new ut(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let u=[];if(o)if(i){const h=Bf(n,p=>Ut(p));u=SU(e.serverSyncTree_,l,h,o)}else{const h=Ut(n);u=BA(e.serverSyncTree_,l,h,o)}else if(i){const h=Bf(n,p=>Ut(p));u=vU(e.serverSyncTree_,l,h)}else{const h=Ut(n);u=wu(e.serverSyncTree_,l,h)}let f=l;u.length>0&&(f=qa(e,l)),Zn(e.eventQueue_,f,u)}function rE(e,t){U_(e,"connected",t),t===!1&&XU(e)}function YU(e,t){rn(t,(n,i)=>{U_(e,n,i)})}function U_(e,t,n){const i=new ut("/.info/"+t),o=Ut(n);e.infoData_.updateSnapshot(i,o);const l=wu(e.infoSyncTree_,i,o);Zn(e.eventQueue_,i,l)}function $_(e){return e.nextWriteId_++}function WU(e,t,n){const i=wU(e.serverSyncTree_,t);return i!=null?Promise.resolve(i):e.server_.get(t).then(o=>{const l=Ut(o).withIndex(t._queryParams.getIndex());sv(e.serverSyncTree_,t,n,!0);let u;if(t._queryParams.loadsAllData())u=wu(e.serverSyncTree_,t._path,l);else{const f=iu(e.serverSyncTree_,t);u=BA(e.serverSyncTree_,t._path,l,f)}return Zn(e.eventQueue_,t._path,u),ah(e.serverSyncTree_,t,n,null,!0),l},o=>(Eu(e,"get for query "+$t(t)+" failed: "+o),Promise.reject(new Error(o))))}function QU(e,t,n,i,o){Eu(e,"set",{path:t.toString(),value:n,priority:i});const l=Jh(e),u=Ut(n,i),f=R_(e.serverSyncTree_,t),h=GA(u,f,l),p=$_(e),g=zA(e.serverSyncTree_,t,h,p,!0);Zh(e.eventQueue_,g),e.server_.put(t.toString(),u.val(!0),(_,b)=>{const w=_==="ok";w||dn("set at "+t+" failed: "+_);const I=is(e.serverSyncTree_,p,!w);Zn(e.eventQueue_,t,I),av(e,o,_,b)});const y=B_(e,t);qa(e,y),Zn(e.eventQueue_,y,[])}function KU(e,t,n,i){Eu(e,"update",{path:t.toString(),value:n});let o=!0;const l=Jh(e),u={};if(rn(n,(f,h)=>{o=!1,u[f]=VA(Rt(t,f),Ut(h),e.serverSyncTree_,l)}),o)en("update() called with empty data.  Don't do anything."),av(e,i,"ok",void 0);else{const f=$_(e),h=yU(e.serverSyncTree_,t,u,f);Zh(e.eventQueue_,h),e.server_.merge(t.toString(),n,(p,g)=>{const y=p==="ok";y||dn("update at "+t+" failed: "+p);const _=is(e.serverSyncTree_,f,!y),b=_.length>0?qa(e,t):t;Zn(e.eventQueue_,b,_),av(e,i,p,g)}),rn(n,p=>{const g=B_(e,Rt(t,p));qa(e,g)}),Zn(e.eventQueue_,t,[])}}function XU(e){Eu(e,"onDisconnectEvents");const t=Jh(e),n=Jf();Jy(e.onDisconnect_,Xe(),(o,l)=>{const u=VA(o,l,e.serverSyncTree_,t);TA(n,o,u)});let i=[];Jy(n,Xe(),(o,l)=>{i=i.concat(wu(e.serverSyncTree_,o,l));const u=B_(e,o);qa(e,u)}),e.onDisconnect_=Jf(),Zn(e.eventQueue_,Xe(),i)}function ZU(e,t,n){let i;qe(t._path)===".info"?i=sv(e.infoSyncTree_,t,n):i=sv(e.serverSyncTree_,t,n),JA(e.eventQueue_,t._path,i)}function iE(e,t,n){let i;qe(t._path)===".info"?i=ah(e.infoSyncTree_,t,n):i=ah(e.serverSyncTree_,t,n),JA(e.eventQueue_,t._path,i)}function JU(e){e.persistentConnection_&&e.persistentConnection_.interrupt(FU)}function Eu(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),en(n,...t)}function av(e,t,n,i){t&&tl(()=>{if(n==="ok")t(null);else{const o=(n||"error").toUpperCase();let l=o;i&&(l+=": "+i);const u=new Error(l);u.code=o,t(u)}})}function nI(e,t,n){return R_(e.serverSyncTree_,t,n)||Ne.EMPTY_NODE}function z_(e,t=e.transactionQueueTree_){if(t||ep(e,t),rl(t)){const n=iI(e,t);he(n.length>0,"Sending zero length transaction queue"),n.every(o=>o.status===0)&&e$(e,xu(t),n)}else WA(t)&&Kh(t,n=>{z_(e,n)})}function e$(e,t,n){const i=n.map(p=>p.currentWriteId),o=nI(e,t,i);let l=o;const u=o.hash();for(let p=0;p<n.length;p++){const g=n[p];he(g.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),g.status=1,g.retryCount++;const y=un(t,g.path);l=l.updateChild(y,g.currentOutputSnapshotRaw)}const f=l.val(!0),h=t;e.server_.put(h.toString(),f,p=>{Eu(e,"transaction put response",{path:h.toString(),status:p});let g=[];if(p==="ok"){const y=[];for(let _=0;_<n.length;_++)n[_].status=2,g=g.concat(is(e.serverSyncTree_,n[_].currentWriteId)),n[_].onComplete&&y.push(()=>n[_].onComplete(null,!0,n[_].currentOutputSnapshotResolved)),n[_].unwatcher();ep(e,L_(e.transactionQueueTree_,t)),z_(e,e.transactionQueueTree_),Zn(e.eventQueue_,t,g);for(let _=0;_<y.length;_++)tl(y[_])}else{if(p==="datastale")for(let y=0;y<n.length;y++)n[y].status===3?n[y].status=4:n[y].status=0;else{dn("transaction at "+h.toString()+" failed: "+p);for(let y=0;y<n.length;y++)n[y].status=4,n[y].abortReason=p}qa(e,t)}},u)}function qa(e,t){const n=rI(e,t),i=xu(n),o=iI(e,n);return t$(e,o,i),i}function t$(e,t,n){if(t.length===0)return;const i=[];let o=[];const u=t.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<t.length;f++){const h=t[f],p=un(n,h.path);let g=!1,y;if(he(p!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),h.status===4)g=!0,y=h.abortReason,o=o.concat(is(e.serverSyncTree_,h.currentWriteId,!0));else if(h.status===0)if(h.retryCount>=qU)g=!0,y="maxretry",o=o.concat(is(e.serverSyncTree_,h.currentWriteId,!0));else{const _=nI(e,h.path,u);h.currentInputSnapshot=_;const b=t[f].update(_.val());if(b!==void 0){Xh("transaction failed: Data returned ",b,h.path);let w=Ut(b);typeof b=="object"&&b!=null&&Lr(b,".priority")||(w=w.updatePriority(_.getPriority()));const T=h.currentWriteId,D=Jh(e),M=GA(w,_,D);h.currentOutputSnapshotRaw=w,h.currentOutputSnapshotResolved=M,h.currentWriteId=$_(e),u.splice(u.indexOf(T),1),o=o.concat(zA(e.serverSyncTree_,h.path,M,h.currentWriteId,h.applyLocally)),o=o.concat(is(e.serverSyncTree_,T,!0))}else g=!0,y="nodata",o=o.concat(is(e.serverSyncTree_,h.currentWriteId,!0))}Zn(e.eventQueue_,n,o),o=[],g&&(t[f].status=2,(function(_){setTimeout(_,Math.floor(0))})(t[f].unwatcher),t[f].onComplete&&(y==="nodata"?i.push(()=>t[f].onComplete(null,!1,t[f].currentInputSnapshot)):i.push(()=>t[f].onComplete(new Error(y),!1,null))))}ep(e,e.transactionQueueTree_);for(let f=0;f<i.length;f++)tl(i[f]);z_(e,e.transactionQueueTree_)}function rI(e,t){let n,i=e.transactionQueueTree_;for(n=qe(t);n!==null&&rl(i)===void 0;)i=L_(i,n),t=pt(t),n=qe(t);return i}function iI(e,t){const n=[];return sI(e,t,n),n.sort((i,o)=>i.order-o.order),n}function sI(e,t,n){const i=rl(t);if(i)for(let o=0;o<i.length;o++)n.push(i[o]);Kh(t,o=>{sI(e,o,n)})}function ep(e,t){const n=rl(t);if(n){let i=0;for(let o=0;o<n.length;o++)n[o].status!==2&&(n[i]=n[o],i++);n.length=i,YA(t,n.length>0?n:void 0)}Kh(t,i=>{ep(e,i)})}function B_(e,t){const n=xu(rI(e,t)),i=L_(e.transactionQueueTree_,t);return OU(i,o=>{ey(e,o)}),ey(e,i),QA(i,o=>{ey(e,o)}),n}function ey(e,t){const n=rl(t);if(n){const i=[];let o=[],l=-1;for(let u=0;u<n.length;u++)n[u].status===3||(n[u].status===1?(he(l===u-1,"All SENT items should be at beginning of queue."),l=u,n[u].status=3,n[u].abortReason="set"):(he(n[u].status===0,"Unexpected transaction status in abort"),n[u].unwatcher(),o=o.concat(is(e.serverSyncTree_,n[u].currentWriteId,!0)),n[u].onComplete&&i.push(n[u].onComplete.bind(null,new Error("set"),!1,null))));l===-1?YA(t,void 0):n.length=l+1,Zn(e.eventQueue_,xu(t),o);for(let u=0;u<i.length;u++)tl(i[u])}}/**
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
 */function n$(e){let t="";const n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let o=n[i];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}t+="/"+o}return t}function r$(e){const t={};e.charAt(0)==="?"&&(e=e.substring(1));for(const n of e.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):dn(`Invalid query segment '${n}' in query '${e}'`)}return t}const sE=function(e,t){const n=i$(e),i=n.namespace;n.domain==="firebase.com"&&gi(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&gi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||p3();const o=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new lA(n.host,n.secure,i,o,t,"",i!==n.subdomain),path:new ut(n.pathString)}},i$=function(e){let t="",n="",i="",o="",l="",u=!0,f="https",h=443;if(typeof e=="string"){let p=e.indexOf("//");p>=0&&(f=e.substring(0,p-1),e=e.substring(p+2));let g=e.indexOf("/");g===-1&&(g=e.length);let y=e.indexOf("?");y===-1&&(y=e.length),t=e.substring(0,Math.min(g,y)),g<y&&(o=n$(e.substring(g,y)));const _=r$(e.substring(Math.min(e.length,y)));p=t.indexOf(":"),p>=0?(u=f==="https"||f==="wss",h=parseInt(t.substring(p+1),10)):p=t.length;const b=t.slice(0,p);if(b.toLowerCase()==="localhost")n="localhost";else if(b.split(".").length<=2)n=b;else{const w=t.indexOf(".");i=t.substring(0,w).toLowerCase(),n=t.substring(w+1),l=i}"ns"in _&&(l=_.ns)}return{host:t,port:h,domain:n,subdomain:i,secure:u,scheme:f,pathString:o,namespace:l}};/**
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
 */const oE="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",s$=(function(){let e=0;const t=[];return function(n){const i=n===e;e=n;let o;const l=new Array(8);for(o=7;o>=0;o--)l[o]=oE.charAt(n%64),n=Math.floor(n/64);he(n===0,"Cannot push at time == 0");let u=l.join("");if(i){for(o=11;o>=0&&t[o]===63;o--)t[o]=0;t[o]++}else for(o=0;o<12;o++)t[o]=Math.floor(Math.random()*64);for(o=0;o<12;o++)u+=oE.charAt(t[o]);return he(u.length===20,"nextPushId: Length should be 20."),u}})();/**
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
 */class o${constructor(t,n,i,o){this.eventType=t,this.eventRegistration=n,this.snapshot=i,this.prevName=o}getPath(){const t=this.snapshot.ref;return this.eventType==="value"?t._path:t.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+$t(this.snapshot.exportVal())}}class a${constructor(t,n,i){this.eventRegistration=t,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class oI{constructor(t,n){this.snapshotCallback=t,this.cancelCallback=n}onValue(t,n){this.snapshotCallback.call(null,t,n)}onCancel(t){return he(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)}get hasCancelCallback(){return!!this.cancelCallback}matches(t){return this.snapshotCallback===t.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}/**
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
 */class H_{constructor(t,n,i,o){this._repo=t,this._path=n,this._queryParams=i,this._orderByCalled=o}get key(){return We(this._path)?null:p_(this._path)}get ref(){return new xi(this._repo,this._path)}get _queryIdentifier(){const t=qx(this._queryParams),n=u_(t);return n==="{}"?"default":n}get _queryObject(){return qx(this._queryParams)}isEqual(t){if(t=Yt(t),!(t instanceof H_))return!1;const n=this._repo===t._repo,i=m_(this._path,t._path),o=this._queryIdentifier===t._queryIdentifier;return n&&i&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+X3(this._path)}}class xi extends H_{constructor(t,n){super(t,n,new __,!1)}get parent(){const t=yA(this._path);return t===null?null:new xi(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}class su{constructor(t,n,i){this._node=t,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const n=new ut(t),i=ou(this.ref,t);return new su(this._node.getChild(n),i,At)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,o)=>t(new su(o,ou(this.ref,i),At)))}hasChild(t){const n=new ut(t);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function tr(e,t){return e=Yt(e),e._checkNotDeleted("ref"),t!==void 0?ou(e._root,t):e._root}function ou(e,t){return e=Yt(e),qe(e._path)===null?$U("child","path",t):ZA("child","path",t),new xi(e._repo,Rt(e._path,t))}function l$(e,t){e=Yt(e),j_("push",e._path),XA("push",t,e._path,!0);const n=tI(e._repo),i=s$(n),o=ou(e,i),l=ou(e,i);let u;return t!=null?u=F_(l,t).then(()=>l):u=Promise.resolve(l),o.then=u.then.bind(u),o.catch=u.then.bind(u,void 0),o}function aI(e){return j_("remove",e._path),F_(e,null)}function F_(e,t){e=Yt(e),j_("set",e._path),XA("set",t,e._path,!1);const n=new hu;return QU(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}function lI(e,t){UU("update",t,e._path);const n=new hu;return KU(e._repo,e._path,t,n.wrapCallback(()=>{})),n.promise}function cI(e){e=Yt(e);const t=new oI(()=>{}),n=new tp(t);return WU(e._repo,e,n).then(i=>new su(i,new xi(e._repo,e._path),e._queryParams.getIndex()))}class tp{constructor(t){this.callbackContext=t}respondsTo(t){return t==="value"}createEvent(t,n){const i=n._queryParams.getIndex();return new o$("value",this,new su(t.snapshotNode,new xi(n._repo,n._path),i))}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,n){return this.callbackContext.hasCancelCallback?new a$(this,t,n):null}matches(t){return t instanceof tp?!t.callbackContext||!this.callbackContext?!0:t.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function c$(e,t,n,i,o){let l;if(typeof i=="object"&&(l=void 0,o=i),typeof i=="function"&&(l=i),o&&o.onlyOnce){const h=n,p=(g,y)=>{iE(e._repo,e,f),h(g,y)};p.userCallback=n.userCallback,p.context=n.context,n=p}const u=new oI(n,l||void 0),f=new tp(u);return ZU(e._repo,e,f),()=>iE(e._repo,e,f)}function np(e,t,n,i){return c$(e,"value",t,n,i)}cU(xi);pU(xi);/**
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
 */const u$="FIREBASE_DATABASE_EMULATOR_HOST",lv={};let d$=!1;function f$(e,t,n,i){const o=t.lastIndexOf(":"),l=t.substring(0,o),u=Qa(l);e.repoInfo_=new lA(t,u,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0,n),i&&(e.authTokenProvider_=i)}function h$(e,t,n,i,o){let l=i||e.options.databaseURL;l===void 0&&(e.options.projectId||gi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),en("Using default host for project ",e.options.projectId),l=`${e.options.projectId}-default-rtdb.firebaseio.com`);let u=sE(l,o),f=u.repoInfo,h;typeof process<"u"&&Cx&&(h=Cx[u$]),h?(l=`http://${h}?ns=${f.namespace}`,u=sE(l,o),f=u.repoInfo):u.repoInfo.secure;const p=new T3(e.name,e.options,t);zU("Invalid Firebase Database URL",u),We(u.path)||gi("Database URL must point to the root of a Firebase Database (not including a child path).");const g=m$(f,e,p,new E3(e,n));return new g$(g,e)}function p$(e,t){const n=lv[t];(!n||n[e.key]!==e)&&gi(`Database ${t}(${e.repoInfo_}) has already been deleted.`),JU(e),delete n[e.key]}function m$(e,t,n,i){let o=lv[t.name];o||(o={},lv[t.name]=o);let l=o[e.toURLString()];return l&&gi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new VU(e,d$,n,i),o[e.toURLString()]=l,l}class g${constructor(t,n){this._repoInternal=t,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(GU(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new xi(this._repo,Xe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(p$(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&gi("Cannot call "+t+" on a deleted database.")}}function y$(e=Kv(),t){const n=Xa(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const i=aP("database");i&&v$(n,...i)}return n}function v$(e,t,n,i={}){e=Yt(e),e._checkNotDeleted("useEmulator");const o=`${t}:${n}`,l=e._repoInternal;if(e._instanceStarted){if(o===e._repoInternal.repoInfo_.host&&po(i,l.repoInfo_.emulatorOptions))return;gi("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let u;if(l.repoInfo_.nodeAdmin)i.mockUserToken&&gi('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new Ef(Ef.OWNER);else if(i.mockUserToken){const f=typeof i.mockUserToken=="string"?i.mockUserToken:lP(i.mockUserToken,e.app.options.projectId);u=new Ef(f)}Qa(t)&&(JC(t),eR("Database",!0)),f$(l,o,i,u)}/**
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
 */function _$(e){l3(Za),kr(new yr("database",(t,{instanceIdentifier:n})=>{const i=t.getProvider("app").getImmediate(),o=t.getProvider("auth-internal"),l=t.getProvider("app-check-internal");return h$(i,o,l,n)},"PUBLIC").setMultipleInstances(!0)),Qn(Rx,Ax,e),Qn(Rx,Ax,"esm2020")}fi.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)};fi.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};_$();var Ys={},ty={},ny={},aE;function q_(){return aE||(aE=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.getBookableStatus=e.isWaitlistFull=e.isFree=e.WAITLIST_MAX=void 0,e.WAITLIST_MAX=10;const t=o=>o.occupancy<o.max_occupancy;e.isFree=t;const n=o=>o.waiting_count>=e.WAITLIST_MAX;e.isWaitlistFull=n;const i=o=>(0,e.isFree)(o)?"free":(0,e.isWaitlistFull)(o)?"full":"waitlist";e.getBookableStatus=i})(ny)),ny}var Ws={},lE;function V_(){return lE||(lE=1,Object.defineProperty(Ws,"__esModule",{value:!0}),Ws.DEFAULT_STUDIO_ID=Ws.STUDIOS=void 0,Ws.STUDIOS={7248695:{location:"New York",timezone:"America/New_York"},7248663:{location:"London",timezone:"Europe/London"}},Ws.DEFAULT_STUDIO_ID="7248695"),Ws}var cE;function b$(){return cE||(cE=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.getChangeType=e.classifyMatch=e.matchesAlert=void 0;const t=q_(),n=V_(),i=(g,y)=>!(y.maxStatus==="free"&&!(0,t.isFree)(g)||y.maxStatus==="waitlist"&&(0,t.isWaitlistFull)(g)),o=(g,y)=>{if(!y.disciplines)return!0;const _=String(g.offering_type.category.id);return y.disciplines.some(b=>String(b)===_)},l=(g,y)=>y.instructors?g.instructors.some(_=>y.instructors.indexOf(String(_.id))!==-1):!0,u=(g,y)=>{if(!y.timeRanges)return!0;const _=n.STUDIOS[y.studioId]?.timezone;if(!_)return!1;const b=new Date(g.starts_at),w=new Date(b.toLocaleString("en-US",{timeZone:"UTC"})),I=new Date(b.toLocaleString("en-US",{timeZone:_})),T=w.getTime()-I.getTime();b.setTime(b.getTime()-T);const D=y.timeRanges[b.getDay()];if(!D)return!1;const M=b.getHours()*60+b.getMinutes();return D.startMin<=M&&D.endMin>=M},f=(g,y)=>i(g,y)&&o(g,y)&&l(g,y)&&u(g,y);e.matchesAlert=f;const h=(g,y)=>{const _=[];return i(g,y)||_.push("status"),o(g,y)||_.push("discipline"),l(g,y)||_.push("instructor"),u(g,y)||_.push("time"),_.length===0?{type:"match"}:_.length===1?{type:"near-miss",reason:_[0]}:{type:"skipped"}};e.classifyMatch=h;const p=(g,y,_)=>(0,e.matchesAlert)(_,g)?g.maxStatus==="free"&&!(0,t.isFree)(y)&&(0,t.isFree)(_)?"became_free":g.maxStatus==="waitlist"&&(0,t.isWaitlistFull)(y)&&!(0,t.isWaitlistFull)(_)?"waitlist_opened":null:null;e.getChangeType=p})(ty)),ty}var Qs={},uE;function S$(){if(uE)return Qs;uE=1,Object.defineProperty(Qs,"__esModule",{value:!0}),Qs.classifySnapshotMatch=Qs.buildSnapshot=void 0;const e=q_(),t=V_(),n=(l,u=Date.now())=>({snapshotAt:u,starts_at:l.starts_at,instructors:l.instructors.map(({id:f,name:h})=>({id:String(f),name:h})),disciplineId:String(l.offering_type.category.id),occupancy:l.occupancy,maxOccupancy:l.max_occupancy,waitingCount:l.waiting_count,status:(0,e.getBookableStatus)(l),name:l.name});Qs.buildSnapshot=n;const i=(l,u)=>{if(!u.timeRanges)return!0;const f=t.STUDIOS[u.studioId]?.timezone;if(!f)return!1;const h=new Date(l.starts_at),p=new Date(h.toLocaleString("en-US",{timeZone:"UTC"})),g=new Date(h.toLocaleString("en-US",{timeZone:f})),y=p.getTime()-g.getTime();h.setTime(h.getTime()-y);const _=u.timeRanges[h.getDay()];if(!_)return!1;const b=h.getHours()*60+h.getMinutes();return _.startMin<=b&&_.endMin>=b},o=(l,u)=>{const f=[];return(u.maxStatus==="free"&&l.status!=="free"||u.maxStatus==="waitlist"&&l.status==="full")&&f.push("status"),u.disciplines&&u.disciplines.map(String).indexOf(l.disciplineId)===-1&&f.push("discipline"),u.instructors&&!l.instructors.some(p=>u.instructors.indexOf(p.id)!==-1)&&f.push("instructor"),i(l,u)||f.push("time"),f.length===0?{type:"match"}:f.length===1?{type:"near-miss",reason:f[0]}:{type:"skipped"}};return Qs.classifySnapshotMatch=o,Qs}var ry={},dE;function w$(){return dE||(dE=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.fetchAllPelotonPages=e.rebasePelotonUrl=e.buildEventsUrl=e.getPelotonHeaders=e.PELOTON_CORS_PROXY=e.PELOTON_API_BASE=void 0,e.PELOTON_API_BASE="https://schedule.studio.onepeloton.com/api/v2",e.PELOTON_CORS_PROXY="https://cors.abbondanzo.workers.dev";const t=l=>({"Teamup-Request-Mode":"customer","Teamup-Provider-ID":l});e.getPelotonHeaders=t;const n=l=>{const{localStartsAtGte:u=new Date,localStartsAtLte:f,fields:h,expand:p,corsProxy:g=!1}=l,y=g?`${e.PELOTON_CORS_PROXY}/${e.PELOTON_API_BASE}`:e.PELOTON_API_BASE,_=new URLSearchParams({local_starts_at_gte:u.toISOString().replace("Z",""),page_size:"500",sort:"start"});return h&&h.length>0&&_.set("fields",h.join(",")),p&&p.length>0&&_.set("expand",p.join(",")),f&&_.set("local_starts_at_lte",f.toISOString().replace("Z","")),`${y}/events?${_}`};e.buildEventsUrl=n;const i=(l,u=!1)=>{const{search:f}=new URL(l);return`${u?`${e.PELOTON_CORS_PROXY}/${e.PELOTON_API_BASE}`:e.PELOTON_API_BASE}/events${f}`};e.rebasePelotonUrl=i;const o=async(l,u,f=!1)=>{const h=await u(l);if(!h.next)return h.results;const p=[...h.results];let g=(0,e.rebasePelotonUrl)(h.next,f);for(;g;){const y=await u(g);p.push(...y.results),g=y.next?(0,e.rebasePelotonUrl)(y.next,f):null}return p};e.fetchAllPelotonPages=o})(ry)),ry}var iy={},fE;function x$(){return fE||(fE=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isBookableStatus=e.BOOKABLE_STATUS_KEYS=void 0,e.BOOKABLE_STATUS_KEYS=["free","waitlist","full"];const t=n=>e.BOOKABLE_STATUS_KEYS.indexOf(n)!==-1;e.isBookableStatus=t})(iy)),iy}var sy={},hE;function E$(){return hE||(hE=1,Object.defineProperty(sy,"__esModule",{value:!0})),sy}var dc={},pE;function T$(){return pE||(pE=1,Object.defineProperty(dc,"__esModule",{value:!0}),dc.PATHS=void 0,dc.PATHS={alerts:e=>`alerts/${e}`,alert:(e,t)=>`alerts/${e}/${t}`,alertPreferences:e=>`alertPreferences/${e}`,messagingTokens:e=>`messagingTokens/${e}`,messagingToken:(e,t)=>`messagingTokens/${e}/${t}`,classHistory:e=>`classHistory/${e}`,classSnapshot:(e,t)=>`classHistory/${e}/${t}`}),dc}var Ks={},mE;function C$(){if(mE)return Ks;mE=1,Object.defineProperty(Ks,"__esModule",{value:!0}),Ks.isNotEmpty=Ks.isEmpty=void 0;const e=n=>n==null;Ks.isEmpty=e;const t=n=>n!=null;return Ks.isNotEmpty=t,Ks}var oy={},gE;function R$(){return gE||(gE=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isAllDay=e.DEFAULT_TIME_RANGE=e.SPECIFIC_DEFAULT_TIME_RANGE=e.ALL_DAY_TIME_RANGE=void 0,e.ALL_DAY_TIME_RANGE={startMin:0,endMin:1440},e.SPECIFIC_DEFAULT_TIME_RANGE={startMin:420,endMin:1140},e.DEFAULT_TIME_RANGE=e.ALL_DAY_TIME_RANGE;const t=n=>n.startMin===e.ALL_DAY_TIME_RANGE.startMin&&n.endMin===e.ALL_DAY_TIME_RANGE.endMin;e.isAllDay=t})(oy)),oy}var yE;function A$(){return yE||(yE=1,(function(e){var t=Ys&&Ys.__createBinding||(Object.create?(function(i,o,l,u){u===void 0&&(u=l);var f=Object.getOwnPropertyDescriptor(o,l);(!f||("get"in f?!o.__esModule:f.writable||f.configurable))&&(f={enumerable:!0,get:function(){return o[l]}}),Object.defineProperty(i,u,f)}):(function(i,o,l,u){u===void 0&&(u=l),i[u]=o[l]})),n=Ys&&Ys.__exportStar||function(i,o){for(var l in i)l!=="default"&&!Object.prototype.hasOwnProperty.call(o,l)&&t(o,i,l)};Object.defineProperty(e,"__esModule",{value:!0}),n(b$(),e),n(S$(),e),n(w$(),e),n(x$(),e),n(E$(),e),n(q_(),e),n(T$(),e),n(C$(),e),n(V_(),e),n(R$(),e)})(Ys)),Ys}var Me=A$();const wn=zh(()=>y$(Ic)),uI=async(e,t)=>{const n=wn;if(!n)throw new Error("No Firebase database connection to use");const i=tr(n,Me.PATHS.messagingToken(e,t));await aI(i)},vE=async(e,t)=>{const n=wn;if(!n)throw new Error("No Firebase database connection to use");const i=tr(n,Me.PATHS.messagingToken(e,t)),o={timestamp:new Date().getTime(),userAgent:navigator.userAgent};await F_(i,o)},I$=({children:e})=>{const[t,n]=E.useState();E.useEffect(()=>{if(wa){const u=oj(wa,f=>{console.log("[MessagingProvider] Received message ",f);const h=f.notification?.title??f.data?.title,p=f.notification?.body??f.data?.body;h&&new Notification(h,{body:p})});return()=>{u()}}return()=>{}},[]);const i=ct(yu);E.useEffect(()=>{wa&&i&&dx().then(u=>(n(u),vE(i,u))).catch(u=>{Nr(u)})},[i]);const o=E.useCallback(()=>{wa&&i&&dx().then(u=>(n(u),vE(i,u))).catch(u=>{Nr(u)})},[i]);E.useEffect(()=>{const u=()=>{document.visibilityState==="visible"&&o()};return document.addEventListener("visibilitychange",u),()=>document.removeEventListener("visibilitychange",u)},[o]);const l=E.useCallback(async()=>{t&&i&&(await uI(i,t),n(void 0))},[t,i]);return v.jsx(vu.Provider,{value:{token:t,refreshToken:o,deleteToken:l},children:e})},G_=60,Y_=e=>e.session.state!=="fulfilled"?!1:e.session.data?.isAdmin===!0,rt={CLASS_LIST:"/class-list",ABOUT:"/about",SIGN_IN:"/sign-in",ALERTS:"/alerts",ALERTS_EDITOR:"/alerts/edit",ALERTS_SIMULATION:"/alerts/:alertId/test",STATS:"/stats"},D$=e=>`/alerts/${e}/test`,dI=({size:e=22})=>v.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[v.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M 7.556 3.681 C 8.185 3.199 8.927 2.837 9.796 2.612 C 9.786 2.524 9.781 2.435 9.781 2.345 C 9.781 1.089 10.8 0.072 12.055 0.072 C 13.311 0.072 14.328 1.089 14.328 2.345 C 14.328 2.435 14.323 2.524 14.313 2.612 C 15.181 2.837 15.925 3.199 16.553 3.681 C 17.662 4.533 18.304 5.677 18.683 6.817 C 19.062 7.948 19.198 9.126 19.264 10.119 C 19.29 10.523 19.308 10.91 19.321 11.252 L 19.331 11.482 C 19.349 11.893 19.368 12.199 19.398 12.425 C 19.62 14.086 19.895 15.252 20.289 16.183 C 20.673 17.094 21.187 17.828 21.952 18.592 C 22.277 18.917 22.374 19.406 22.198 19.831 C 22.023 20.256 21.609 20.532 21.148 20.532 L 14.025 20.532 C 14.218 20.867 14.328 21.255 14.328 21.668 C 14.328 22.925 13.311 23.943 12.055 23.943 C 10.8 23.943 9.781 22.925 9.781 21.668 C 9.781 21.255 9.892 20.867 10.086 20.532 L 2.961 20.532 C 2.502 20.532 2.087 20.256 1.911 19.831 C 1.735 19.406 1.832 18.917 2.157 18.592 C 2.923 17.826 3.437 17.098 3.819 16.19 C 4.213 15.262 4.488 14.099 4.711 12.425 C 4.742 12.199 4.76 11.893 4.777 11.482 L 4.787 11.252 C 4.802 10.91 4.818 10.523 4.844 10.119 C 4.911 9.126 5.048 7.948 5.424 6.817 C 5.805 5.677 6.447 4.533 7.556 3.681 Z M 5.312 18.259 C 5.537 17.889 5.736 17.497 5.914 17.075 C 6.421 15.879 6.73 14.485 6.965 12.727 C 7.011 12.384 7.032 11.98 7.049 11.581 L 7.06 11.337 C 7.074 10.996 7.089 10.644 7.113 10.272 C 7.175 9.347 7.296 8.394 7.582 7.536 C 7.865 6.686 8.292 5.982 8.941 5.484 C 9.582 4.992 10.546 4.618 12.055 4.618 C 13.564 4.618 14.527 4.992 15.167 5.484 C 15.816 5.982 16.245 6.686 16.528 7.536 C 16.814 8.394 16.934 9.347 16.997 10.272 C 17.021 10.644 17.036 10.996 17.05 11.337 L 17.061 11.581 C 17.077 11.98 17.098 12.384 17.144 12.727 C 17.377 14.475 17.688 15.867 18.194 17.066 C 18.373 17.491 18.573 17.884 18.799 18.259 L 5.312 18.259 Z",fill:"currentColor"}),v.jsx("path",{d:"M 15.285 7.952 L 16.425 5.973 C 16.754 5.392 16.56 4.649 15.98 4.318 C 15.402 3.986 14.657 4.18 14.326 4.761 L 13.179 6.741 C 10.743 5.973 8.016 6.97 6.686 9.274 C 5.838 10.74 5.736 12.426 6.25 13.905 L 8.359 10.243 C 8.359 10.243 8.359 10.243 8.359 10.243 C 8.841 9.403 9.63 8.802 10.568 8.551 C 11.506 8.296 12.482 8.427 13.323 8.917 C 15.056 9.918 15.655 12.146 14.652 13.877 C 13.648 15.611 11.428 16.21 9.689 15.206 L 10.9 13.109 C 11.479 13.44 12.222 13.247 12.555 12.666 C 12.886 12.087 12.69 11.345 12.111 11.013 C 11.532 10.68 10.788 10.877 10.457 11.454 L 6.602 18.144 C 6.269 18.725 6.464 19.466 7.044 19.8 C 7.624 20.13 8.367 19.935 8.699 19.355 L 9.846 17.377 C 12.281 18.144 15.009 17.149 16.338 14.842 C 17.666 12.543 17.165 9.685 15.285 7.952 Z",fill:"currentColor",style:{strokeWidth:"0.5px",stroke:"currentColor"}})]});function fI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hI=fI,pI=new Ro("auth","Firebase",fI());/**
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
 */const lh=new Wv("@firebase/auth");function O$(e,...t){lh.logLevel<=lt.WARN&&lh.warn(`Auth (${Za}): ${e}`,...t)}function Tf(e,...t){lh.logLevel<=lt.ERROR&&lh.error(`Auth (${Za}): ${e}`,...t)}/**
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
 */function Jn(e,...t){throw Q_(e,...t)}function gr(e,...t){return Q_(e,...t)}function W_(e,t,n){const i={...hI(),[t]:n};return new Ro("auth","Firebase",i).create(t,{appName:e.name})}function hi(e){return W_(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function N$(e,t,n){const i=n;if(!(t instanceof i))throw i.name!==t.constructor.name&&Jn(e,"argument-error"),W_(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Q_(e,...t){if(typeof e!="string"){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return pI.create(e,...t)}function Oe(e,t,...n){if(!e)throw Q_(t,...n)}function ci(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Tf(t),new Error(t)}function yi(e,t){e||ci(t)}/**
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
 */function cv(){return typeof self<"u"&&self.location?.href||""}function k$(){return _E()==="http:"||_E()==="https:"}function _E(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function M$(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(k$()||fP()||"connection"in navigator)?navigator.onLine:!0}function L$(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Tu{constructor(t,n){this.shortDelay=t,this.longDelay=n,yi(n>t,"Short delay should be less than long delay!"),this.isMobile=Yv()||tR()}get(){return M$()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function K_(e,t){yi(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class mI{static initialize(t,n,i){this.fetchImpl=t,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ci("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ci("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ci("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const P$={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const j$=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],U$=new Tu(3e4,6e4);function bs(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function Ss(e,t,n,i,o={}){return gI(e,o,async()=>{let l={},u={};i&&(t==="GET"?u=i:l={body:JSON.stringify(i)});const f=Ka({key:e.config.apiKey,...u}).slice(1),h=await e._getAdditionalHeaders();h["Content-Type"]="application/json",e.languageCode&&(h["X-Firebase-Locale"]=e.languageCode);const p={method:t,headers:h,...l};return dP()||(p.referrerPolicy="no-referrer"),e.emulatorConfig&&Qa(e.emulatorConfig.host)&&(p.credentials="include"),mI.fetch()(await yI(e,e.config.apiHost,n,f),p)})}async function gI(e,t,n){e._canInitEmulator=!1;const i={...P$,...t};try{const o=new z$(e),l=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const u=await l.json();if("needConfirmation"in u)throw tf(e,"account-exists-with-different-credential",u);if(l.ok&&!("errorMessage"in u))return u;{const f=l.ok?u.errorMessage:u.error.message,[h,p]=f.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw tf(e,"credential-already-in-use",u);if(h==="EMAIL_EXISTS")throw tf(e,"email-already-in-use",u);if(h==="USER_DISABLED")throw tf(e,"user-disabled",u);const g=i[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw W_(e,g,p);Jn(e,g)}}catch(o){if(o instanceof bi)throw o;Jn(e,"network-request-failed",{message:String(o)})}}async function Cu(e,t,n,i,o={}){const l=await Ss(e,t,n,i,o);return"mfaPendingCredential"in l&&Jn(e,"multi-factor-auth-required",{_serverResponse:l}),l}async function yI(e,t,n,i){const o=`${t}${n}?${i}`,l=e,u=l.config.emulator?K_(e.config,o):`${e.config.apiScheme}://${o}`;return j$.includes(n)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(u).toString():u}function $$(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class z${clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(gr(this.auth,"network-request-failed")),U$.get())})}}function tf(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const o=gr(e,t,i);return o.customData._tokenResponse=n,o}function bE(e){return e!==void 0&&e.enterprise!==void 0}class B${constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return $$(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function H$(e,t){return Ss(e,"GET","/v2/recaptchaConfig",bs(e,t))}/**
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
 */async function F$(e,t){return Ss(e,"POST","/v1/accounts:delete",t)}async function ch(e,t){return Ss(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function jc(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function q$(e,t=!1){const n=Yt(e),i=await n.getIdToken(t),o=X_(i);Oe(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,u=l?.sign_in_provider;return{claims:o,token:i,authTime:jc(ay(o.auth_time)),issuedAtTime:jc(ay(o.iat)),expirationTime:jc(ay(o.exp)),signInProvider:u||null,signInSecondFactor:l?.sign_in_second_factor||null}}function ay(e){return Number(e)*1e3}function X_(e){const[t,n,i]=e.split(".");if(t===void 0||n===void 0||i===void 0)return Tf("JWT malformed, contained fewer than 3 sections"),null;try{const o=zf(n);return o?JSON.parse(o):(Tf("Failed to decode base64 JWT payload"),null)}catch(o){return Tf("Caught error parsing JWT payload as JSON",o?.toString()),null}}function SE(e){const t=X_(e);return Oe(t,"internal-error"),Oe(typeof t.exp<"u","internal-error"),Oe(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function au(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof bi&&V$(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function V$({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class G${constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class uv{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=jc(this.lastLoginAt),this.creationTime=jc(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function uh(e){const t=e.auth,n=await e.getIdToken(),i=await au(e,ch(t,{idToken:n}));Oe(i?.users.length,t,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const l=o.providerUserInfo?.length?vI(o.providerUserInfo):[],u=W$(e.providerData,l),f=e.isAnonymous,h=!(e.email&&o.passwordHash)&&!u?.length,p=f?h:!1,g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new uv(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(e,g)}async function Y$(e){const t=Yt(e);await uh(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function W$(e,t){return[...e.filter(i=>!t.some(o=>o.providerId===i.providerId)),...t]}function vI(e){return e.map(({providerId:t,...n})=>({providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function Q$(e,t){const n=await gI(e,{},async()=>{const i=Ka({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:l}=e.config,u=await yI(e,o,"/v1/token",`key=${l}`),f=await e._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:f,body:i};return e.emulatorConfig&&Qa(e.emulatorConfig.host)&&(h.credentials="include"),mI.fetch()(u,h)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function K$(e,t){return Ss(e,"POST","/v2/accounts:revokeToken",bs(e,t))}/**
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
 */class Aa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Oe(t.idToken,"internal-error"),Oe(typeof t.idToken<"u","internal-error"),Oe(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):SE(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){Oe(t.length!==0,"internal-error");const n=SE(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Oe(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:i,refreshToken:o,expiresIn:l}=await Q$(t,n);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(t,n,i){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(t,n){const{refreshToken:i,accessToken:o,expirationTime:l}=n,u=new Aa;return i&&(Oe(typeof i=="string","internal-error",{appName:t}),u.refreshToken=i),o&&(Oe(typeof o=="string","internal-error",{appName:t}),u.accessToken=o),l&&(Oe(typeof l=="number","internal-error",{appName:t}),u.expirationTime=l),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Aa,this.toJSON())}_performRefresh(){return ci("not implemented")}}/**
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
 */function Qi(e,t){Oe(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class dr{constructor({uid:t,auth:n,stsTokenManager:i,...o}){this.providerId="firebase",this.proactiveRefresh=new G$(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new uv(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await au(this,this.stsTokenManager.getToken(this.auth,t));return Oe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return q$(this,t)}reload(){return Y$(this)}_assign(t){this!==t&&(Oe(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>({...n})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new dr({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(t){Oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),n&&await uh(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(kn(this.auth.app))return Promise.reject(hi(this.auth));const t=await this.getIdToken();return await au(this,F$(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){const i=n.displayName??void 0,o=n.email??void 0,l=n.phoneNumber??void 0,u=n.photoURL??void 0,f=n.tenantId??void 0,h=n._redirectEventId??void 0,p=n.createdAt??void 0,g=n.lastLoginAt??void 0,{uid:y,emailVerified:_,isAnonymous:b,providerData:w,stsTokenManager:I}=n;Oe(y&&I,t,"internal-error");const T=Aa.fromJSON(this.name,I);Oe(typeof y=="string",t,"internal-error"),Qi(i,t.name),Qi(o,t.name),Oe(typeof _=="boolean",t,"internal-error"),Oe(typeof b=="boolean",t,"internal-error"),Qi(l,t.name),Qi(u,t.name),Qi(f,t.name),Qi(h,t.name),Qi(p,t.name),Qi(g,t.name);const D=new dr({uid:y,auth:t,email:o,emailVerified:_,displayName:i,isAnonymous:b,photoURL:u,phoneNumber:l,tenantId:f,stsTokenManager:T,createdAt:p,lastLoginAt:g});return w&&Array.isArray(w)&&(D.providerData=w.map(M=>({...M}))),h&&(D._redirectEventId=h),D}static async _fromIdTokenResponse(t,n,i=!1){const o=new Aa;o.updateFromServerResponse(n);const l=new dr({uid:n.localId,auth:t,stsTokenManager:o,isAnonymous:i});return await uh(l),l}static async _fromGetAccountInfoResponse(t,n,i){const o=n.users[0];Oe(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?vI(o.providerUserInfo):[],u=!(o.email&&o.passwordHash)&&!l?.length,f=new Aa;f.updateFromIdToken(i);const h=new dr({uid:o.localId,auth:t,stsTokenManager:f,isAnonymous:u}),p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new uv(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!l?.length};return Object.assign(h,p),h}}/**
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
 */const wE=new Map;function ui(e){yi(e instanceof Function,"Expected a class definition");let t=wE.get(e);return t?(yi(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,wE.set(e,t),t)}/**
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
 */class _I{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}_I.type="NONE";const xE=_I;/**
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
 */function Cf(e,t,n){return`firebase:${e}:${t}:${n}`}class Ia{constructor(t,n,i){this.persistence=t,this.auth=n,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=Cf(this.userKey,o.apiKey,l),this.fullPersistenceKey=Cf("persistence",o.apiKey,l),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await ch(this.auth,{idToken:t}).catch(()=>{});return n?dr._fromGetAccountInfoResponse(this.auth,n,t):null}return dr._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,i="authUser"){if(!n.length)return new Ia(ui(xE),t,i);const o=(await Promise.all(n.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let l=o[0]||ui(xE);const u=Cf(i,t.config.apiKey,t.name);let f=null;for(const p of n)try{const g=await p._get(u);if(g){let y;if(typeof g=="string"){const _=await ch(t,{idToken:g}).catch(()=>{});if(!_)break;y=await dr._fromGetAccountInfoResponse(t,_,g)}else y=dr._fromJSON(t,g);p!==l&&(f=y),l=p;break}}catch{}const h=o.filter(p=>p._shouldAllowMigration);return!l._shouldAllowMigration||!h.length?new Ia(l,t,i):(l=h[0],f&&await l._set(u,f.toJSON()),await Promise.all(n.map(async p=>{if(p!==l)try{await p._remove(u)}catch{}})),new Ia(l,t,i))}}/**
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
 */function EE(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(xI(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(bI(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(TI(t))return"Blackberry";if(CI(t))return"Webos";if(SI(t))return"Safari";if((t.includes("chrome/")||wI(t))&&!t.includes("edge/"))return"Chrome";if(EI(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=e.match(n);if(i?.length===2)return i[1]}return"Other"}function bI(e=fn()){return/firefox\//i.test(e)}function SI(e=fn()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function wI(e=fn()){return/crios\//i.test(e)}function xI(e=fn()){return/iemobile/i.test(e)}function EI(e=fn()){return/android/i.test(e)}function TI(e=fn()){return/blackberry/i.test(e)}function CI(e=fn()){return/webos/i.test(e)}function Z_(e=fn()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function X$(e=fn()){return Z_(e)&&!!window.navigator?.standalone}function Z$(){return hP()&&document.documentMode===10}function RI(e=fn()){return Z_(e)||EI(e)||CI(e)||TI(e)||/windows phone/i.test(e)||xI(e)}/**
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
 */function AI(e,t=[]){let n;switch(e){case"Browser":n=EE(fn());break;case"Worker":n=`${EE(fn())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Za}/${i}`}/**
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
 */class J${constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const i=l=>new Promise((u,f)=>{try{const h=t(l);u(h)}catch(h){f(h)}});i.onAbort=n,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const i of this.queue)await i(t),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
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
 */async function ez(e,t={}){return Ss(e,"GET","/v2/passwordPolicy",bs(e,t))}/**
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
 */const tz=6;class nz{constructor(t){const n=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??tz,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=t.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,n),this.validatePasswordCharacterOptions(t,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(t,n){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=t.length>=i),o&&(n.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let o=0;o<t.length;o++)i=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(t,n,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=l))}}/**
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
 */class rz{constructor(t,n,i,o){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new TE(this),this.idTokenSubscription=new TE(this),this.beforeStateQueue=new J$(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=ui(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Ia.create(this,t),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await ch(this,{idToken:t}),i=await dr._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){if(kn(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(u,u))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=this.redirectUser?._redirectEventId,u=i?._redirectEventId,f=await this.tryRedirectSignIn(t);(!l||l===u)&&f?.user&&(i=f.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(l){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await uh(t)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=L$()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(kn(this.app))return Promise.reject(hi(this));const n=t?Yt(t):null;return n&&Oe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&Oe(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return kn(this.app)?Promise.reject(hi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return kn(this.app)?Promise.reject(hi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ui(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await ez(this),n=new nz(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Ro("auth","Firebase",t())}onAuthStateChanged(t,n,i){return this.registerStateListener(this.authStateSubscription,t,n,i)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,i){return this.registerStateListener(this.idTokenSubscription,t,n,i)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const i=this.onAuthStateChanged(()=>{i(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await K$(this,i)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(t,n){const i=await this.getOrInitRedirectPersistenceManager(n);return t===null?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&ui(t)||this._popupRedirectResolver;Oe(n,this,"argument-error"),this.redirectPersistenceManager=await Ia.create(this,[ui(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===t?this._currentUser:this.redirectUser?._redirectEventId===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=this.currentUser?.uid??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,i,o){if(this._deleted)return()=>{};const l=typeof n=="function"?n:n.next.bind(n);let u=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(Oe(f,this,"internal-error"),f.then(()=>{u||l(this.currentUser)}),typeof n=="function"){const h=t.addObserver(n,i,o);return()=>{u=!0,h()}}else{const h=t.addObserver(n);return()=>{u=!0,h()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=AI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){if(kn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return t?.error&&O$(`Error while retrieving App Check token: ${t.error}`),t?.token}}function ws(e){return Yt(e)}class TE{constructor(t){this.auth=t,this.observer=null,this.addObserver=wP(n=>this.observer=n)}get next(){return Oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let rp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function iz(e){rp=e}function II(e){return rp.loadJS(e)}function sz(){return rp.recaptchaEnterpriseScript}function oz(){return rp.gapiScript}function az(e){return`__${e}${Math.floor(Math.random()*1e6)}`}class lz{constructor(){this.enterprise=new cz}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class cz{ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const uz="recaptcha-enterprise",DI="NO_RECAPTCHA";class dz{constructor(t){this.type=uz,this.auth=ws(t)}async verify(t="verify",n=!1){async function i(l){if(!n){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(u,f)=>{H$(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const p=new B$(h);return l.tenantId==null?l._agentRecaptchaConfig=p:l._tenantRecaptchaConfigs[l.tenantId]=p,u(p.siteKey)}}).catch(h=>{f(h)})})}function o(l,u,f){const h=window.grecaptcha;bE(h)?h.enterprise.ready(()=>{h.enterprise.execute(l,{action:t}).then(p=>{u(p)}).catch(()=>{u(DI)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new lz().execute("siteKey",{action:"verify"}):new Promise((l,u)=>{i(this.auth).then(f=>{if(!n&&bE(window.grecaptcha))o(f,l,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let h=sz();h.length!==0&&(h+=f),II(h).then(()=>{o(f,l,u)}).catch(p=>{u(p)})}}).catch(f=>{u(f)})})}}async function CE(e,t,n,i=!1,o=!1){const l=new dz(e);let u;if(o)u=DI;else try{u=await l.verify(n)}catch{u=await l.verify(n,!0)}const f={...t};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const h=f.phoneEnrollmentInfo.phoneNumber,p=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:h,recaptchaToken:p,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const h=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:h,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return i?Object.assign(f,{captchaResp:u}):Object.assign(f,{captchaResponse:u}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function dv(e,t,n,i,o){if(e._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await CE(e,t,n,n==="getOobCode");return i(e,l)}else return i(e,t).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await CE(e,t,n,n==="getOobCode");return i(e,u)}else return Promise.reject(l)})}/**
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
 */function OI(e,t){const n=Xa(e,"auth");if(n.isInitialized()){const o=n.getImmediate(),l=n.getOptions();if(po(l,t??{}))return o;Jn(o,"already-initialized")}return n.initialize({options:t})}function fz(e,t){const n=t?.persistence||[],i=(Array.isArray(n)?n:[n]).map(ui);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,t?.popupRedirectResolver)}function hz(e,t,n){const i=ws(e);Oe(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const o=!1,l=NI(t),{host:u,port:f}=pz(t),h=f===null?"":`:${f}`,p={url:`${l}//${u}${h}/`},g=Object.freeze({host:u,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){Oe(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),Oe(po(p,i.config.emulator)&&po(g,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=p,i.emulatorConfig=g,i.settings.appVerificationDisabledForTesting=!0,Qa(u)?(JC(`${l}//${u}${h}`),eR("Auth",!0)):mz()}function NI(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function pz(e){const t=NI(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:RE(i.substr(l.length+1))}}else{const[l,u]=i.split(":");return{host:l,port:RE(u)}}}function RE(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function mz(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class J_{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return ci("not implemented")}_getIdTokenResponse(t){return ci("not implemented")}_linkToIdToken(t,n){return ci("not implemented")}_getReauthenticationResolver(t){return ci("not implemented")}}async function gz(e,t){return Ss(e,"POST","/v1/accounts:signUp",t)}/**
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
 */async function yz(e,t){return Cu(e,"POST","/v1/accounts:signInWithPassword",bs(e,t))}/**
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
 */async function vz(e,t){return Cu(e,"POST","/v1/accounts:signInWithEmailLink",bs(e,t))}async function _z(e,t){return Cu(e,"POST","/v1/accounts:signInWithEmailLink",bs(e,t))}/**
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
 */class lu extends J_{constructor(t,n,i,o=null){super("password",i),this._email=t,this._password=n,this._tenantId=o}static _fromEmailAndPassword(t,n){return new lu(t,n,"password")}static _fromEmailAndCode(t,n,i=null){return new lu(t,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return dv(t,n,"signInWithPassword",yz);case"emailLink":return vz(t,{email:this._email,oobCode:this._password});default:Jn(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return dv(t,i,"signUpPassword",gz);case"emailLink":return _z(t,{idToken:n,email:this._email,oobCode:this._password});default:Jn(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Da(e,t){return Cu(e,"POST","/v1/accounts:signInWithIdp",bs(e,t))}/**
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
 */const bz="http://localhost";class wo extends J_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new wo(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Jn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:i,signInMethod:o,...l}=n;if(!i||!o)return null;const u=new wo(i,o);return u.idToken=l.idToken||void 0,u.accessToken=l.accessToken||void 0,u.secret=l.secret,u.nonce=l.nonce,u.pendingToken=l.pendingToken||null,u}_getIdTokenResponse(t){const n=this.buildRequest();return Da(t,n)}_linkToIdToken(t,n){const i=this.buildRequest();return i.idToken=n,Da(t,i)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Da(t,n)}buildRequest(){const t={requestUri:bz,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Ka(n)}return t}}/**
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
 */function Sz(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function wz(e){const t=Sc(wc(e)).link,n=t?Sc(wc(t)).deep_link_id:null,i=Sc(wc(e)).deep_link_id;return(i?Sc(wc(i)).link:null)||i||n||t||e}class eb{constructor(t){const n=Sc(wc(t)),i=n.apiKey??null,o=n.oobCode??null,l=Sz(n.mode??null);Oe(i&&o&&l,"argument-error"),this.apiKey=i,this.operation=l,this.code=o,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(t){const n=wz(t);try{return new eb(n)}catch{return null}}}/**
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
 */class il{constructor(){this.providerId=il.PROVIDER_ID}static credential(t,n){return lu._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const i=eb.parseLink(n);return Oe(i,"argument-error"),lu._fromEmailAndCode(t,i.code,i.tenantId)}}il.PROVIDER_ID="password";il.EMAIL_PASSWORD_SIGN_IN_METHOD="password";il.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class tb{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ru extends tb{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class ts extends Ru{constructor(){super("facebook.com")}static credential(t){return wo._fromParams({providerId:ts.PROVIDER_ID,signInMethod:ts.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ts.credentialFromTaggedObject(t)}static credentialFromError(t){return ts.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ts.credential(t.oauthAccessToken)}catch{return null}}}ts.FACEBOOK_SIGN_IN_METHOD="facebook.com";ts.PROVIDER_ID="facebook.com";/**
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
 */class oi extends Ru{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return wo._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return oi.credentialFromTaggedObject(t)}static credentialFromError(t){return oi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:i}=t;if(!n&&!i)return null;try{return oi.credential(n,i)}catch{return null}}}oi.GOOGLE_SIGN_IN_METHOD="google.com";oi.PROVIDER_ID="google.com";/**
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
 */class ns extends Ru{constructor(){super("github.com")}static credential(t){return wo._fromParams({providerId:ns.PROVIDER_ID,signInMethod:ns.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ns.credentialFromTaggedObject(t)}static credentialFromError(t){return ns.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ns.credential(t.oauthAccessToken)}catch{return null}}}ns.GITHUB_SIGN_IN_METHOD="github.com";ns.PROVIDER_ID="github.com";/**
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
 */class rs extends Ru{constructor(){super("twitter.com")}static credential(t,n){return wo._fromParams({providerId:rs.PROVIDER_ID,signInMethod:rs.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return rs.credentialFromTaggedObject(t)}static credentialFromError(t){return rs.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=t;if(!n||!i)return null;try{return rs.credential(n,i)}catch{return null}}}rs.TWITTER_SIGN_IN_METHOD="twitter.com";rs.PROVIDER_ID="twitter.com";/**
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
 */async function xz(e,t){return Cu(e,"POST","/v1/accounts:signUp",bs(e,t))}/**
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
 */class xo{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,i,o=!1){const l=await dr._fromIdTokenResponse(t,i,o),u=AE(i);return new xo({user:l,providerId:u,_tokenResponse:i,operationType:n})}static async _forOperation(t,n,i){await t._updateTokensIfNecessary(i,!0);const o=AE(i);return new xo({user:t,providerId:o,_tokenResponse:i,operationType:n})}}function AE(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class dh extends bi{constructor(t,n,i,o){super(n.code,n.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,dh.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(t,n,i,o){return new dh(t,n,i,o)}}function kI(e,t,n,i){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?dh._fromErrorAndOperation(e,l,t,i):l})}async function Ez(e,t,n=!1){const i=await au(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return xo._forOperation(e,"link",i)}/**
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
 */async function Tz(e,t,n=!1){const{auth:i}=e;if(kn(i.app))return Promise.reject(hi(i));const o="reauthenticate";try{const l=await au(e,kI(i,o,t,e),n);Oe(l.idToken,i,"internal-error");const u=X_(l.idToken);Oe(u,i,"internal-error");const{sub:f}=u;return Oe(e.uid===f,i,"user-mismatch"),xo._forOperation(e,o,l)}catch(l){throw l?.code==="auth/user-not-found"&&Jn(i,"user-mismatch"),l}}/**
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
 */async function MI(e,t,n=!1){if(kn(e.app))return Promise.reject(hi(e));const i="signIn",o=await kI(e,i,t),l=await xo._fromIdTokenResponse(e,i,o);return n||await e._updateCurrentUser(l.user),l}async function Cz(e,t){return MI(ws(e),t)}/**
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
 */async function LI(e){const t=ws(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Rz(e,t,n){if(kn(e.app))return Promise.reject(hi(e));const i=ws(e),u=await dv(i,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",xz).catch(h=>{throw h.code==="auth/password-does-not-meet-requirements"&&LI(e),h}),f=await xo._fromIdTokenResponse(i,"signIn",u);return await i._updateCurrentUser(f.user),f}function Az(e,t,n){return kn(e.app)?Promise.reject(hi(e)):Cz(Yt(e),il.credential(t,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&LI(e),i})}function Iz(e,t,n,i){return Yt(e).onIdTokenChanged(t,n,i)}function Dz(e,t,n){return Yt(e).beforeAuthStateChanged(t,n)}function Oz(e,t,n,i){return Yt(e).onAuthStateChanged(t,n,i)}const fh="__sak";/**
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
 */class PI{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(fh,"1"),this.storage.removeItem(fh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Nz=1e3,kz=10;class jI extends PI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=RI(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),o=this.localCache[n];i!==o&&t(n,o,i)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((u,f,h)=>{this.notifyListeners(u,h)});return}const i=t.key;n?this.detachListener():this.stopPolling();const o=()=>{const u=this.storage.getItem(i);!n&&this.localCache[i]===u||this.notifyListeners(i,u)},l=this.storage.getItem(i);Z$()&&l!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,kz):o()}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const o of Array.from(i))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:i}),!0)})},Nz)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}jI.type="LOCAL";const Mz=jI;/**
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
 */class UI extends PI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}UI.type="SESSION";const $I=UI;/**
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
 */function Lz(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ip{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(o=>o.isListeningto(t));if(n)return n;const i=new ip(t);return this.receivers.push(i),i}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:i,eventType:o,data:l}=n.data,u=this.handlersMap[o];if(!u?.size)return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(u).map(async p=>p(n.origin,l)),h=await Lz(f);n.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:h})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ip.receivers=[];/**
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
 */function nb(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class Pz{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,u;return new Promise((f,h)=>{const p=nb("",20);o.port1.start();const g=setTimeout(()=>{h(new Error("unsupported_event"))},i);u={messageChannel:o,onMessage(y){const _=y;if(_.data.eventId===p)switch(_.data.status){case"ack":clearTimeout(g),l=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(_.data.response);break;default:clearTimeout(g),clearTimeout(l),h(new Error("invalid_response"));break}}},this.handlers.add(u),o.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:t,eventId:p,data:n},[o.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
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
 */function Or(){return window}function jz(e){Or().location.href=e}/**
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
 */function zI(){return typeof Or().WorkerGlobalScope<"u"&&typeof Or().importScripts=="function"}async function Uz(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $z(){return navigator?.serviceWorker?.controller||null}function zz(){return zI()?self:null}/**
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
 */const BI="firebaseLocalStorageDb",Bz=1,hh="firebaseLocalStorage",HI="fbase_key";class Au{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function sp(e,t){return e.transaction([hh],t?"readwrite":"readonly").objectStore(hh)}function Hz(){const e=indexedDB.deleteDatabase(BI);return new Au(e).toPromise()}function fv(){const e=indexedDB.open(BI,Bz);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const i=e.result;try{i.createObjectStore(hh,{keyPath:HI})}catch(o){n(o)}}),e.addEventListener("success",async()=>{const i=e.result;i.objectStoreNames.contains(hh)?t(i):(i.close(),await Hz(),t(await fv()))})})}async function IE(e,t,n){const i=sp(e,!0).put({[HI]:t,value:n});return new Au(i).toPromise()}async function Fz(e,t){const n=sp(e,!1).get(t),i=await new Au(n).toPromise();return i===void 0?null:i.value}function DE(e,t){const n=sp(e,!0).delete(t);return new Au(n).toPromise()}const qz=800,Vz=3;class FI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fv(),this.db)}async _withRetries(t){let n=0;for(;;)try{const i=await this._openDb();return await t(i)}catch(i){if(n++>Vz)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ip._getInstance(zz()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Uz(),!this.activeServiceWorker)return;this.sender=new Pz(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&t[0]?.fulfilled&&t[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||$z()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await fv();return await IE(t,fh,"1"),await DE(t,fh),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>IE(i,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(i=>Fz(i,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>DE(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const l=sp(o,!1).getAll();return new Au(l).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(t.length!==0)for(const{fbase_key:o,value:l}of t)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const o of Array.from(i))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qz)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}FI.type="LOCAL";const Gz=FI;new Tu(3e4,6e4);/**
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
 */function qI(e,t){return t?ui(t):(Oe(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class rb extends J_{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Da(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Da(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Da(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function Yz(e){return MI(e.auth,new rb(e),e.bypassAuthState)}function Wz(e){const{auth:t,user:n}=e;return Oe(n,t,"internal-error"),Tz(n,new rb(e),e.bypassAuthState)}async function Qz(e){const{auth:t,user:n}=e;return Oe(n,t,"internal-error"),Ez(n,new rb(e),e.bypassAuthState)}/**
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
 */class VI{constructor(t,n,i,o,l=!1){this.auth=t,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:i,postBody:o,tenantId:l,error:u,type:f}=t;if(u){this.reject(u);return}const h={auth:this.auth,requestUri:n,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(h))}catch(p){this.reject(p)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Yz;case"linkViaPopup":case"linkViaRedirect":return Qz;case"reauthViaPopup":case"reauthViaRedirect":return Wz;default:Jn(this.auth,"internal-error")}}resolve(t){yi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){yi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Kz=new Tu(2e3,1e4);async function Xz(e,t,n){if(kn(e.app))return Promise.reject(gr(e,"operation-not-supported-in-this-environment"));const i=ws(e);N$(e,t,tb);const o=qI(i,n);return new lo(i,"signInViaPopup",t,o).executeNotNull()}class lo extends VI{constructor(t,n,i,o,l){super(t,n,o,l),this.provider=i,this.authWindow=null,this.pollId=null,lo.currentPopupAction&&lo.currentPopupAction.cancel(),lo.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return Oe(t,this.auth,"internal-error"),t}async onExecution(){yi(this.filter.length===1,"Popup operations only handle one event");const t=nb();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(gr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(gr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,lo.currentPopupAction=null}pollUserCancellation(){const t=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Kz.get())};t()}}lo.currentPopupAction=null;/**
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
 */const Zz="pendingRedirect",Rf=new Map;class Jz extends VI{constructor(t,n,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let t=Rf.get(this.auth._key());if(!t){try{const i=await e8(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(i)}catch(n){t=()=>Promise.reject(n)}Rf.set(this.auth._key(),t)}return this.bypassAuthState||Rf.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function e8(e,t){const n=r8(t),i=n8(e);if(!await i._isAvailable())return!1;const o=await i._get(n)==="true";return await i._remove(n),o}function t8(e,t){Rf.set(e._key(),t)}function n8(e){return ui(e._redirectPersistence)}function r8(e){return Cf(Zz,e.config.apiKey,e.name)}async function i8(e,t,n=!1){if(kn(e.app))return Promise.reject(hi(e));const i=ws(e),o=qI(i,t),u=await new Jz(i,o,n).execute();return u&&!n&&(delete u.user._redirectEventId,await i._persistUserIfCurrent(u.user),await i._setRedirectUser(null,t)),u}/**
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
 */const s8=600*1e3;class o8{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(t,i)&&(n=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!a8(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){if(t.error&&!GI(t)){const i=t.error.code?.split("auth/")[1]||"internal-error";n.onError(gr(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const i=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=s8&&this.cachedEventUids.clear(),this.cachedEventUids.has(OE(t))}saveEventToCache(t){this.cachedEventUids.add(OE(t)),this.lastProcessedEventTime=Date.now()}}function OE(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function GI({type:e,error:t}){return e==="unknown"&&t?.code==="auth/no-auth-event"}function a8(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return GI(e);default:return!1}}/**
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
 */async function l8(e,t={}){return Ss(e,"GET","/v1/projects",t)}/**
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
 */const c8=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,u8=/^https?/;async function d8(e){if(e.config.emulator)return;const{authorizedDomains:t}=await l8(e);for(const n of t)try{if(f8(n))return}catch{}Jn(e,"unauthorized-domain")}function f8(e){const t=cv(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const u=new URL(e);return u.hostname===""&&i===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&u.hostname===i}if(!u8.test(n))return!1;if(c8.test(e))return i===e;const o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const h8=new Tu(3e4,6e4);function NE(){const e=Or().___jsl;if(e?.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function p8(e){return new Promise((t,n)=>{function i(){NE(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{NE(),n(gr(e,"network-request-failed"))},timeout:h8.get()})}if(Or().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(Or().gapi?.load)i();else{const o=az("iframefcb");return Or()[o]=()=>{gapi.load?i():n(gr(e,"network-request-failed"))},II(`${oz()}?onload=${o}`).catch(l=>n(l))}}).catch(t=>{throw Af=null,t})}let Af=null;function m8(e){return Af=Af||p8(e),Af}/**
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
 */const g8=new Tu(5e3,15e3),y8="__/auth/iframe",v8="emulator/auth/iframe",_8={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},b8=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function S8(e){const t=e.config;Oe(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?K_(t,v8):`https://${e.config.authDomain}/${y8}`,i={apiKey:t.apiKey,appName:e.name,v:Za},o=b8.get(e.config.apiHost);o&&(i.eid=o);const l=e._getFrameworks();return l.length&&(i.fw=l.join(",")),`${n}?${Ka(i).slice(1)}`}async function w8(e){const t=await m8(e),n=Or().gapi;return Oe(n,e,"internal-error"),t.open({where:document.body,url:S8(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_8,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const u=gr(e,"network-request-failed"),f=Or().setTimeout(()=>{l(u)},g8.get());function h(){Or().clearTimeout(f),o(i)}i.ping(h).then(h,()=>{l(u)})}))}/**
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
 */const x8={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},E8=500,T8=600,C8="_blank",R8="http://localhost";class kE{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function A8(e,t,n,i=E8,o=T8){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),u=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const h={...x8,width:i.toString(),height:o.toString(),top:l,left:u},p=fn().toLowerCase();n&&(f=wI(p)?C8:n),bI(p)&&(t=t||R8,h.scrollbars="yes");const g=Object.entries(h).reduce((_,[b,w])=>`${_}${b}=${w},`,"");if(X$(p)&&f!=="_self")return I8(t||"",f),new kE(null);const y=window.open(t||"",f,g);Oe(y,e,"popup-blocked");try{y.focus()}catch{}return new kE(y)}function I8(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const D8="__/auth/handler",O8="emulator/auth/handler",N8=encodeURIComponent("fac");async function ME(e,t,n,i,o,l){Oe(e.config.authDomain,e,"auth-domain-config-required"),Oe(e.config.apiKey,e,"invalid-api-key");const u={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:Za,eventId:o};if(t instanceof tb){t.setDefaultLanguage(e.languageCode),u.providerId=t.providerId||"",Py(t.getCustomParameters())||(u.customParameters=JSON.stringify(t.getCustomParameters()));for(const[g,y]of Object.entries({}))u[g]=y}if(t instanceof Ru){const g=t.getScopes().filter(y=>y!=="");g.length>0&&(u.scopes=g.join(","))}e.tenantId&&(u.tid=e.tenantId);const f=u;for(const g of Object.keys(f))f[g]===void 0&&delete f[g];const h=await e._getAppCheckToken(),p=h?`#${N8}=${encodeURIComponent(h)}`:"";return`${k8(e)}?${Ka(f).slice(1)}${p}`}function k8({config:e}){return e.emulator?K_(e,O8):`https://${e.authDomain}/${D8}`}/**
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
 */const ly="webStorageSupport";class M8{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$I,this._completeRedirectFn=i8,this._overrideRedirectResult=t8}async _openPopup(t,n,i,o){yi(this.eventManagers[t._key()]?.manager,"_initialize() not called before _openPopup()");const l=await ME(t,n,i,cv(),o);return A8(t,l,nb())}async _openRedirect(t,n,i,o){await this._originValidation(t);const l=await ME(t,n,i,cv(),o);return jz(l),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:o,promise:l}=this.eventManagers[n];return o?Promise.resolve(o):(yi(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(t);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(t){const n=await w8(t),i=new o8(t);return n.register("authEvent",o=>(Oe(o?.authEvent,t,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=n,i}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(ly,{type:ly},o=>{const l=o?.[0]?.[ly];l!==void 0&&n(!!l),Jn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=d8(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return RI()||SI()||Z_()}}const L8=M8;var LE="@firebase/auth",PE="1.11.0";/**
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
 */class P8{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(i=>{t(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function j8(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function U8(e){kr(new yr("auth",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),l=t.getProvider("app-check-internal"),{apiKey:u,authDomain:f}=i.options;Oe(u&&!u.includes(":"),"invalid-api-key",{appName:i.name});const h={apiKey:u,authDomain:f,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:AI(e)},p=new rz(i,o,l,h);return fz(p,n),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,i)=>{t.getProvider("auth-internal").initialize()})),kr(new yr("auth-internal",t=>{const n=ws(t.getProvider("auth").getImmediate());return(i=>new P8(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qn(LE,PE,j8(e)),Qn(LE,PE,"esm2020")}/**
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
 */const $8=300,z8=ZC("authIdTokenMaxAge")||$8;let jE=null;const B8=e=>async t=>{const n=t&&await t.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>z8)return;const o=n?.token;jE!==o&&(jE=o,await fetch(e,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function H8(e=Kv()){const t=Xa(e,"auth");if(t.isInitialized())return t.getImmediate();const n=OI(e,{popupRedirectResolver:L8,persistence:[Gz,Mz,$I]}),i=ZC("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const u=B8(l.toString());Dz(n,u,()=>u(n.currentUser)),Iz(n,f=>u(f))}}const o=KC("auth");return o&&hz(n,`http://${o}`),n}function F8(){return document.getElementsByTagName("head")?.[0]??document}iz({loadJS(e){return new Promise((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=o=>{const l=gr("internal-error");l.customData=o,n(l)},i.type="text/javascript",i.charset="UTF-8",F8().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});U8("Browser");const q8=hI,ai=zh(()=>{if(!Ic)throw new Error("Firebase app not initialized");try{return H8(Ic)}catch{return OI(Ic,{errorMap:q8})}}),YI=E.createContext({isDark:!1,toggle:()=>{}}),V8=O.button`
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
`,G8=O.span`
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
`,WI=()=>{const{isDark:e,toggle:t}=E.useContext(YI);return v.jsxs(V8,{type:"button",role:"switch","aria-checked":e,onClick:t,children:["Dark mode",v.jsx(G8,{$on:e,"aria-hidden":"true"})]})},Y8=O(_s)`
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
`,W8=O.div`
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
  margin-bottom: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Q8=O.button`
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
`,K8=()=>{const e=ct(el),{deleteToken:t}=E.useContext(vu),n=E.useCallback(async()=>{await t(),await ai?.signOut()},[t]);return e.state==="loading"?null:e.state!=="fulfilled"||!e.data?v.jsx(Y8,{to:rt.SIGN_IN,children:"Sign in"}):v.jsxs(v.Fragment,{children:[v.jsx(W8,{children:e.data.displayName}),v.jsx(WI,{}),v.jsx(Q8,{type:"button",onClick:n,children:"Sign out"})]})},X8="#181a2f",Z8=280,J8=O.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  transition: opacity 0.2s;
  opacity: ${e=>e.$open?1:0};
  pointer-events: ${e=>e.$open?"all":"none"};
  z-index: 10;
`,eB=O.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: ${Z8}px;
  max-width: 90vw;
  background-color: ${e=>e.theme.colors.mainSurface};
  z-index: 11;
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(${e=>e.$open?"0":"100%"});
  overflow: hidden;
`,tB=O.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: env(safe-area-inset-top, 0) 16px 0;
  height: calc(60px + env(safe-area-inset-top, 0px));
  background-color: ${X8};
  color: #fff;
  flex-shrink: 0;
`,nB=O(_s)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: inherit;
`,rB=O.span`
  font-size: 15px;
  font-weight: 600;
`,iB=O.button`
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
`,sB=O.nav`
  flex: 1;
  padding: 8px 0;
  overflow-y: auto;
`,nf=O(kv)`
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
`,oB=O.div`
  padding: 16px 20px;
  border-top: 1px solid ${e=>e.theme.borderColor};
  flex-shrink: 0;
`,aB=()=>v.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none","aria-hidden":"true",children:v.jsx("path",{d:"M4 4l10 10M14 4L4 14",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})}),lB=({open:e,onClose:t})=>{const n=ct(Y_);return v.jsxs(v.Fragment,{children:[v.jsx(J8,{$open:e,onClick:t}),v.jsxs(eB,{$open:e,onClick:i=>i.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":"Navigation menu",children:[v.jsxs(tB,{children:[v.jsxs(nB,{to:rt.CLASS_LIST,onClick:t,children:[v.jsx(dI,{size:20}),v.jsx(rB,{children:"Peloton Alerts"})]}),v.jsx(iB,{onClick:t,"aria-label":"Close menu",children:v.jsx(aB,{})})]}),v.jsxs(sB,{onClick:t,children:[v.jsx(nf,{to:rt.CLASS_LIST,end:!0,children:"Classes"}),v.jsx(nf,{to:rt.ALERTS,children:"Alerts"}),v.jsx(nf,{to:rt.ABOUT,end:!0,children:"FAQ"}),n&&v.jsx(nf,{to:rt.STATS,children:"Stats"})]}),v.jsx(oB,{children:v.jsx(K8,{})})]})]})},cB=O.div`
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
`,uB=({children:e,open:t,onClose:n})=>{const i=E.useRef(null),o=E.useCallback(l=>{l.key==="Escape"&&n()},[n]);return E.useEffect(()=>{if(t)return document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}},[t,o]),E.useEffect(()=>{if(!t)return;const l=f=>{const h=f.target;if(!(h instanceof Node)){n();return}const p=i.current;p&&p.contains(h)||n()},u=setTimeout(()=>{document.addEventListener("click",l,!0)},0);return()=>{clearTimeout(u),document.removeEventListener("click",l,!0)}},[t,n]),t?v.jsx(cB,{ref:i,role:"dialog","aria-modal":"true",children:e}):null},dB=O(_s)`
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
`,fB=O.button`
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
`,hB=O.div`
  position: relative;
`,pB=O.hr`
  margin: 4px 0;
  border: none;
  border-top: 1px solid ${e=>e.theme.borderColor};
`,mB=O.button`
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
`,gB=()=>{const e=ct(el),[t,n]=E.useState(!1),{deleteToken:i}=E.useContext(vu),o=E.useCallback(async()=>{await i(),await ai?.signOut()},[i]);if(e.state!=="fulfilled"||!e.data){const l=e.state==="loading";return v.jsx(dB,{to:rt.SIGN_IN,$disabled:l,"aria-disabled":l,tabIndex:l?-1:void 0,children:"Sign in"})}return v.jsxs(hB,{children:[v.jsx(fB,{type:"button",onClick:()=>n(!0),"aria-expanded":t,"aria-haspopup":"dialog",children:e.data.displayName}),v.jsxs(uB,{open:t,onClose:()=>n(!1),children:[v.jsx(WI,{}),v.jsx(pB,{}),v.jsx(mB,{type:"button",onClick:o,children:"Sign out"})]})]})},yB="#181a2f",op=680,vB=O.nav`
  height: inherit;
  background-color: ${yB};
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

  @media only screen and (min-width: ${op+1}px) {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
  }
`,_B=O(_s)`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  justify-self: start;
`,bB=O.span`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.01em;
  white-space: nowrap;
`,SB=O.div`
  display: flex;
  align-items: center;
  gap: 2px;

  @media only screen and (max-width: ${op}px) {
    display: none;
  }
`,rf=O(kv)`
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
`,wB=O.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  justify-self: end;

  @media only screen and (max-width: ${op}px) {
    display: none;
  }
`,xB=O.button`
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

  @media only screen and (max-width: ${op}px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,EB=()=>v.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:v.jsx("path",{d:"M3 5h14M3 10h14M3 15h14",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})}),TB=()=>{const[e,t]=E.useState(!1),n=ct(Y_);return v.jsxs(v.Fragment,{children:[v.jsxs(vB,{children:[v.jsxs(_B,{to:rt.CLASS_LIST,children:[v.jsx(dI,{}),v.jsx(bB,{children:"Peloton Alerts"})]}),v.jsxs(SB,{children:[v.jsx(rf,{to:rt.CLASS_LIST,end:!0,children:"Classes"}),v.jsx(rf,{to:rt.ALERTS,children:"Alerts"}),v.jsx(rf,{to:rt.ABOUT,end:!0,children:"FAQ"}),n&&v.jsx(rf,{to:rt.STATS,children:"Stats"})]}),v.jsx(wB,{children:v.jsx(gB,{})}),v.jsx(xB,{type:"button","aria-label":"Open menu",onClick:()=>t(!0),children:v.jsx(EB,{})})]}),v.jsx(lB,{open:e,onClose:()=>t(!1)})]})},CB=O.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`,RB=O.div`
  position: sticky;
  height: calc(${G_}px + env(safe-area-inset-top));
  top: 0;
  z-index: 2;
`,AB=O.div`
  flex: 1;
  background-color: ${e=>e.theme.colors.secondarySurface};
`,uo=({children:e})=>v.jsxs(CB,{children:[v.jsx(RB,{children:v.jsx(TB,{})}),v.jsx(AB,{children:e})]}),Te=(...e)=>nn`
  @media only screen and (max-width: ${t=>t.theme.widths.mobile}px) {
    ${nn(...e)}
  }
`,QI=(...e)=>nn`
  @media only screen and (max-width: ${t=>t.theme.widths.tablet}px) {
    ${nn(...e)}
  }
`,IB=O.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 24px 20px;

  ${Te`
    padding: 16px 12px;
  `}
`,DB=O.div`
  margin-bottom: 20px;
`,OB=O.h1`
  font-size: 22px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
  margin: 0;
`,fc=O.section`
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  overflow: hidden;
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
`,hc=O.div`
  padding: 14px 20px;
  border-bottom: 1px solid ${e=>e.theme.borderColor};
`,pc=O.h2`
  font-size: 15px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
  margin: 0;
`,mc=O.div`
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
`,NB=()=>v.jsx(uo,{children:v.jsxs(IB,{children:[v.jsx(DB,{children:v.jsx(OB,{children:"FAQ"})}),v.jsxs(fc,{children:[v.jsx(hc,{children:v.jsx(pc,{children:"What is this?"})}),v.jsx(mc,{children:v.jsxs("p",{children:["A quicker, smarter way to browse"," ",v.jsx("a",{href:"https://studio.onepeloton.com/",target:"_blank",rel:"noreferrer",children:"Peloton Studios"})," ","class reservations. Filter by status (free, waitlist, full), instructor, or discipline — things the official site doesn't support. Classes are fetched directly from Peloton each time you load the page."]})})]}),v.jsxs(fc,{children:[v.jsx(hc,{children:v.jsx(pc,{children:"How do I view classes?"})}),v.jsx(mc,{children:v.jsxs("p",{children:["Open the ",v.jsx(_s,{to:rt.CLASS_LIST,children:"Class List"})," and use the sidebar to set filters or switch between studio locations."]})})]}),v.jsxs(fc,{children:[v.jsx(hc,{children:v.jsx(pc,{children:"Is the class data live?"})}),v.jsx(mc,{children:v.jsx("p",{children:"Yes — data is fetched fresh from Peloton each time you load the page or switch studio. Filters persist across refreshes, unlike the official site."})})]}),v.jsxs(fc,{children:[v.jsx(hc,{children:v.jsx(pc,{children:"When do new classes become available?"})}),v.jsx(mc,{children:v.jsx("p",{children:"New classes typically open at 12:00 pm on Mondays and Thursdays in your studio's local timezone."})})]}),v.jsxs(fc,{children:[v.jsx(hc,{children:v.jsx(pc,{children:"Can I request a feature or report a bug?"})}),v.jsx(mc,{children:v.jsxs("p",{children:["Yes — this project is open source and lives on"," ",v.jsx("a",{href:"https://github.com/Abbondanzo/peloton-reservations",target:"_blank",rel:"noreferrer",children:"GitHub"}),". Open an issue to request a feature, report a bug, or just share feedback. Pull requests are welcome too."]})})]})]})}),xs=nn`
  border-color: ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  border-style: solid;
  border-width: 1px;
`,KI=nn`
  &:hover {
    background-color: ${e=>e.theme.colors.hoverSurface};
  }
`;nn`
  &:focus {
    background-color: ${e=>e.theme.colors.hoverSurface};
  }
`;const ib=E.createContext({state:"idle"}),kB=e=>{if(!e||typeof e!="object")return!1;const t=e;return typeof t.snapshotAt=="number"&&typeof t.starts_at=="string"&&Array.isArray(t.instructors)&&typeof t.disciplineId=="string"&&typeof t.occupancy=="number"&&typeof t.maxOccupancy=="number"&&typeof t.waitingCount=="number"&&typeof t.status=="string"},MB=e=>{const[t,n]=E.useState({state:"loading"});return E.useEffect(()=>{if(!e){n({state:"fulfilled",data:[]});return}n({state:"loading"});const i=wn;if(!i){n({state:"failed",error:new Error("No database connection")});return}const o=tr(i,Me.PATHS.classHistory(e)),l=np(o,u=>{const f=u.val();if(!f){n({state:"fulfilled",data:[]});return}const h=[];for(const[p,g]of Object.entries(f))if(!(!g||typeof g!="object"))for(const y of Object.values(g))kB(y)&&h.push({...y,classId:p});h.sort((p,g)=>g.snapshotAt-p.snapshotAt),n({state:"fulfilled",data:h})},u=>{n({state:"failed",error:u})});return()=>l()},[e]),t},Va=(e,t,n)=>{const i=new Date(e),o=new Intl.DateTimeFormat(void 0,{month:n?"long":"short",timeZone:t}).format(i),l=new Intl.DateTimeFormat(void 0,{day:"numeric",timeZone:t}).format(i);return n?`${new Intl.DateTimeFormat(void 0,{weekday:"long",timeZone:t}).format(i)}, ${o} ${l}`:`${o} ${l}`},LB=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],PB=(e,t)=>{const n=new Map;for(const i of e){const o=new Date(i.snapshotAt),l=Va(o.toISOString(),t,!0);if(!n.has(l)){const u=new Intl.DateTimeFormat("en-US",{weekday:"long",timeZone:t}).format(o);n.set(l,{dayIndex:LB.indexOf(u),snapshots:[]})}n.get(l).snapshots.push(i)}return Array.from(n.entries()).map(([i,{dayIndex:o,snapshots:l}])=>({label:i,dayIndex:o,snapshots:l}))},Eo=(e,t)=>new Intl.DateTimeFormat(void 0,{hour:"numeric",minute:"numeric",timeZone:t}).format(new Date(e)),jB=O.div`
  border: 1px solid ${e=>e.theme.colors.status.free.text}40;
  border-left: 4px solid ${e=>e.theme.colors.status.free.text};
  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.status.free.bg};
  padding: 12px 14px;
`,UB=O.div`
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${e=>e.theme.colors.status.free.text};
  margin-bottom: 6px;
`,$B=O.div`
  font-size: 13px;
  color: ${e=>e.theme.colors.main};
  font-weight: 500;
`,zB=O.div`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
  margin-top: 2px;
`,BB=O.div`
  font-size: 11px;
  color: ${e=>e.theme.colors.secondary};
  opacity: 0.6;
  margin-top: 2px;
`,HB=({snapshot:e,timezone:t})=>{const n=Va(e.starts_at,t,!1),i=Eo(e.starts_at,t),o=Eo(new Date(e.snapshotAt).toISOString(),t),l=e.instructors[0]?.name??"Unknown instructor",u=e.maxOccupancy-e.occupancy;return v.jsxs(jB,{children:[v.jsx(UB,{children:"● Would have triggered"}),v.jsxs($B,{children:[n," ",i,e.name?` · ${e.name}`:""," · ",l]}),v.jsx(zB,{children:e.status==="free"?`Free · ${u} spot${u===1?"":"s"} available`:e.status==="waitlist"?`Waitlist · ${e.waitingCount} waiting`:"Full"}),v.jsxs(BB,{children:["detected at ",o]})]})},FB=O.div`
  border: 1px solid ${e=>e.theme.colors.status.waitlist.text}40;
  border-left: 4px solid ${e=>e.theme.colors.status.waitlist.text};
  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.status.waitlist.bg};
  padding: 12px 14px;
`,qB=O.div`
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${e=>e.theme.colors.status.waitlist.text};
  margin-bottom: 6px;
`,VB=O.div`
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
`,GB=O.div`
  font-size: 11px;
  color: ${e=>e.theme.colors.secondary};
  opacity: 0.6;
  margin-top: 2px;
`,YB={instructor:"wrong instructor",time:"outside your time range",discipline:"wrong discipline",status:"class not bookable"},WB=({snapshot:e,reason:t,timezone:n})=>{const i=Va(e.starts_at,n,!1),o=Eo(e.starts_at,n),l=Eo(new Date(e.snapshotAt).toISOString(),n),u=e.instructors[0]?.name??"Unknown instructor";return v.jsxs(FB,{children:[v.jsxs(qB,{children:["◌ Near miss — ",YB[t]]}),v.jsxs(VB,{children:[i," ",o,e.name?` · ${e.name}`:""," · ",u]}),v.jsxs(GB,{children:["detected at ",l]})]})},QB=O.button`
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
`,KB=O.ul`
  margin: 6px 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,XB=O.li`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
  padding: 4px 8px;
  background-color: ${e=>e.theme.colors.secondarySurface};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,ZB=O.span`
  font-size: 11px;
  opacity: 0.6;
`,JB=({snapshots:e,timezone:t})=>{const[n,i]=E.useState(!1),o=e.length;return v.jsxs("div",{children:[v.jsxs(QB,{type:"button",onClick:()=>i(l=>!l),children:[v.jsx("span",{children:n?"▾":"▸"}),o," class",o===1?"":"es"," skipped"]}),n&&v.jsx(KB,{children:e.map((l,u)=>{const f=Va(l.starts_at,t,!1),h=Eo(l.starts_at,t),p=Eo(new Date(l.snapshotAt).toISOString(),t);return v.jsxs(XB,{children:[v.jsxs("span",{children:[f," ",h,l.name?` · ${l.name}`:"",l.instructors[0]?` · ${l.instructors[0].name}`:""]}),v.jsxs(ZB,{children:["detected at ",p]})]},u)})})]})},eH=O.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,tH=O.h3`
  position: sticky;
  top: calc(${G_}px + env(safe-area-inset-top, 0px));
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
`,nH=O.span`
  font-size: 11px;
  font-weight: 400;
  color: ${e=>e.theme.colors.secondary};
  opacity: 0.6;
`,rH=({label:e,dayIndex:t,snapshots:n,alert:i,timezone:o})=>{const l=!!i.timeRanges[t],u=[],f=[],h=[];for(const p of n){const g=Me.classifySnapshotMatch(p,i);g.type==="match"?u.push(p):g.type==="near-miss"?f.push({snapshot:p,reason:g.reason}):h.push(p)}return v.jsxs(eH,{children:[v.jsxs(tH,{children:[e,!l&&v.jsx(nH,{children:"not monitored"})]}),u.map((p,g)=>v.jsx(HB,{snapshot:p,timezone:o},g)),f.map(({snapshot:p,reason:g},y)=>v.jsx(WB,{snapshot:p,reason:g,timezone:o},y)),h.length>0&&v.jsx(JB,{snapshots:h,timezone:o})]})},iH=O.div`
  display: flex;
  gap: 16px;
  padding: 12px 0;
  border-bottom: 1px solid ${e=>e.theme.borderColor};
  flex-wrap: wrap;
`,UE=O.span`
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
`,$E=O.strong`
  color: ${e=>e.$color??e.theme.colors.main};
`,sH=({matchCount:e,nearMissCount:t})=>{const n=$v();return v.jsxs(iH,{children:[v.jsxs(UE,{children:[v.jsx($E,{$color:n.colors.status.free.text,children:e})," ",e===1?"class":"classes"," would have triggered"]}),v.jsxs(UE,{children:[v.jsx($E,{$color:n.colors.status.waitlist.text,children:t})," ","near ",t===1?"miss":"misses"]})]})},oH=O.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  ${xs}
  border-radius: ${e=>e.theme.borderRadius};
  overflow: hidden;
  background-color: ${e=>e.theme.colors.mainSurface};
`,aH=O.div`
  padding: 20px 24px;
  border-bottom: 1px solid ${e=>e.theme.borderColor};

  ${Te`
    padding: 16px;
  `}
`,lH=O.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`,cH=O.button`
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
`,uH=O.button`
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
`,dH=O.h1`
  margin: 0 0 4px;
  font-size: 18px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
`,fH=O.p`
  margin: 0;
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
`,hH=O.div`
  padding: 16px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${Te`
    padding: 12px 16px 16px;
  `}
`,sf=O.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
  padding: 32px 0;
`,pH=()=>{const{alertId:e}=wM(),t=Co(),n=E.useContext(ib),[i,o]=E.useState("idle"),l=E.useMemo(()=>n.state!=="fulfilled"?null:n.data.find(T=>T.id===e)??null,[n,e]),u=MB(l?.studioId??null),f=l?Me.STUDIOS[l.studioId]?.timezone??"UTC":"UTC",h=E.useMemo(()=>!l||u.state!=="fulfilled"?[]:PB(u.data,f),[l,u,f]),{matchCount:p,nearMissCount:g}=E.useMemo(()=>{if(!l||u.state!=="fulfilled")return{matchCount:0,nearMissCount:0};let T=0,D=0;for(const M of u.data){const C=Me.classifySnapshotMatch(M,l);C.type==="match"?T++:C.type==="near-miss"&&D++}return{matchCount:T,nearMissCount:D}},[l,u]),y=n.state==="loading"||n.state==="idle"||u.state==="loading",_="Notification"in window&&"serviceWorker"in navigator,b=E.useCallback(async()=>{if(_){o("sending");try{if(Notification.permission!=="granted"&&await Notification.requestPermission()!=="granted"){o("idle");return}const T=await navigator.serviceWorker.ready,D=l?Me.STUDIOS[l.studioId]:null,M="Spot opened up!",C=`${l?.name??"Test alert"} — ${D?.location??"Studio"} · test notification`;await T.showNotification(M,{body:C,icon:"/icons/icon-192x192.png",badge:"/icons/icon-96x96.png",data:{classUrl:"/p/7248695-peloton-studios-new-york/e/99586855-30-min-intervals-ride/"}}),o("sent"),setTimeout(()=>o("idle"),3e3)}catch{o("error"),setTimeout(()=>o("idle"),3e3)}}},[l,_]),w=l?.name??"Alert",I=i==="sending"?"Sending…":i==="sent"?"Sent!":i==="error"?"Error":"Send test notification";return v.jsxs(oH,{children:[v.jsxs(aH,{children:[v.jsx(uH,{type:"button",onClick:()=>t(-1),children:"← Alerts"}),v.jsxs(lH,{children:[v.jsx("div",{children:v.jsxs(dH,{children:[w," — Past 7 Days"]})}),_&&v.jsx(cH,{type:"button",$sent:i==="sent",disabled:i==="sending",onClick:b,title:"Fire a test push notification to verify delivery and the notification URL",children:I})]}),v.jsx(fH,{children:l?`${Me.STUDIOS[l.studioId]?.location??l.studioId}`:""})]}),v.jsxs(hH,{children:[y&&v.jsx(sf,{children:"Loading…"}),!y&&!l&&v.jsx(sf,{children:"Alert not found."}),!y&&l&&u.state==="fulfilled"&&v.jsxs(v.Fragment,{children:[v.jsx(sH,{matchCount:p,nearMissCount:g}),h.length===0&&v.jsx(sf,{children:"No class history yet. History builds up as the backend detects class changes."}),h.map(({label:T,dayIndex:D,snapshots:M})=>v.jsx(rH,{label:T,dayIndex:D,snapshots:M,alert:l,timezone:f},T))]}),!y&&u.state==="failed"&&v.jsx(sf,{children:"Failed to load class history."})]})]})},mH=e=>{try{return window.localStorage.getItem(e)}catch(t){return Nr(t),null}},gH="STUDIO_ID",XI=e=>{const t=mH(gH);return t===null?e:Object.keys(Me.STUDIOS).includes(t)?t:e},yH={studioId:XI(Me.DEFAULT_STUDIO_ID)},hv=Ir({name:"studioSelector",initialState:yH,reducers:{setStudioId(e,t){e.studioId=t.payload}}}),{setStudioId:ph}=hv.actions,vH=async(e,t)=>{const n=wn;if(!n)throw new Error("No Firebase database connection to use");const i=(await l$(tr(n,Me.PATHS.alerts(e)),t)).key;if(!i)throw new Error("Missing ID from insertion operation");return{...t,id:i}},_H=async(e,t)=>{const n=wn;if(!n)throw new Error("No Firebase database connection to use");await lI(tr(n,Me.PATHS.alert(e,t.id)),t)},bH=O.div`
  display: flex;
  flex-direction: column;
`,SH=O.label`
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,wH=O.input`
  ${xs}
  padding: 12px 8px;
  font-family: inherit;
  background-color: ${e=>e.theme.colors.mainSurface};
  color: ${e=>e.theme.colors.main};
`,xH=O.span`
  margin-top: 4px;
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,EH=({label:e,hint:t,placeholder:n,value:i,onChange:o})=>{const l=E.useId();return v.jsxs(bH,{children:[v.jsx(SH,{htmlFor:l,children:e}),v.jsx(wH,{id:l,placeholder:n,value:i,"aria-describedby":t?`${l}-hint`:void 0,onChange:({target:u})=>o(u.value)}),t&&v.jsx(xH,{id:`${l}-hint`,children:t})]})},TH=O.label`
  ${xs}
  ${KI}
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
`,CH=O.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,RH=O.span`
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
`,AH=O.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,IH=O.input`
  accent-color: ${e=>e.theme.colors.accent};
`,zE=({name:e,value:t,checked:n,onChange:i,label:o,hint:l,icon:u})=>{const f=E.useId();return v.jsxs(TH,{htmlFor:f,children:[v.jsx(IH,{type:"radio",id:f,name:e,value:t,checked:n,onChange:i}),u,v.jsxs(CH,{children:[v.jsx(RH,{children:o}),l&&v.jsx(AH,{children:l})]})]})},BE=O.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`,HE=O.legend`
  font-weight: 600;
  font-size: 18px;
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,FE=O.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  margin: 0 0 16px;
`,qE=O.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,VE=O.div`
  margin-top: 32px;

  ${Te`
    margin-top: 24px;
  `}
`,DH=Object.entries(Me.STUDIOS).map(([e,t])=>({id:e,label:t.location})),OH=[{status:"free",label:"Open spots only",hint:"Alert me when a class has available spots"},{status:"waitlist",label:"Open spots or waitlist",hint:"Alert me even if I'd join the waitlist"}],NH=({name:e,onNameChange:t,studioId:n,onStudioChange:i,maxStatus:o,onStatusChange:l})=>v.jsxs("div",{children:[v.jsx(EH,{label:"Alert name (optional)",hint:"Leave blank to auto-generate a name from your filters",placeholder:"e.g. Morning Cycling with Cody",value:e,onChange:t}),v.jsx(VE,{}),v.jsxs(BE,{children:[v.jsx(HE,{children:"Which studio?"}),v.jsx(FE,{children:"Pick the Peloton studio you want to monitor."}),v.jsx(qE,{children:DH.map(u=>v.jsx(zE,{name:"studio",value:u.id,checked:n===u.id,onChange:()=>i(u.id),label:u.label},u.id))})]}),v.jsx(VE,{}),v.jsxs(BE,{children:[v.jsx(HE,{children:"When should we alert you?"}),v.jsx(FE,{children:"Choose whether to include waitlisted classes."}),v.jsx(qE,{children:OH.map(u=>v.jsx(zE,{name:"status",value:u.status,checked:o===u.status,onChange:()=>l(u.status),label:u.label,hint:u.hint},u.status))})]})]}),GE={Cardio:"#d8ec43",Cycling:"#bbd4f4",Meditation:"#e6d4ff",Rowing:"#cbf293","Outdoor Run":"#a8e6cf","Outdoor Run/Walk":"#94f3d0",Running:"#fde987",Strength:"#ffc0d5",Tread:"#fdbe9f",Walking:"#ffa8a9",Yoga:"#ceffdc"},ZI=.2,mh=e=>Math.round(e*(1-ZI*2)),kH=e=>Math.round(e*ZI),MH=O.div`
  width: ${e=>mh(e.size)}px;
  height: ${e=>mh(e.size)}px;
  border-radius: ${e=>e.size}px;
  background-color: ${e=>e.color};
  padding: ${e=>kH(e.size)}px;
  flex-shrink: 0;
`,LH=O.img`
  width: ${e=>mh(e.size)}px;
  height: ${e=>mh(e.size)}px;
  display: block;
`,gh=({discipline:e,size:t=32})=>{const n=$v(),i=E.useMemo(()=>{const o=Object.keys(GE),l=e.name.toLowerCase(),u=o.find(f=>f.toLowerCase()===l)??o.find(f=>{const h=f.toLowerCase();return h.includes(l)||l.includes(h)});if(u)return GE[u];{const f=`Received unsupported discipline ${e.name}`;return console.log(f),qv(f),n.colors.secondarySurface}},[e.name,n.colors.secondarySurface]);return v.jsx(MH,{color:i,size:t,children:v.jsx(LH,{alt:e.name,src:e.iconUrl,size:t,color:i})})},PH=O.img`
  width: ${e=>e.size}px;
  min-width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  overflow: hidden;
  background-color: ${e=>e.theme.colors.secondarySurface};
  border-radius: 50%;
  color: ${e=>e.theme.colors.secondary};
`,sb=({instructor:e,size:t=32})=>v.jsx(PH,{src:e.imageUrl,alt:`Profile of ${e.name}`,size:t});var jH=class extends Error{issues;constructor(e){super(e[0].message),this.name="SchemaError",this.issues=e}},JI=(e=>(e.uninitialized="uninitialized",e.pending="pending",e.fulfilled="fulfilled",e.rejected="rejected",e))(JI||{});function YE(e){return{status:e,isUninitialized:e==="uninitialized",isLoading:e==="pending",isSuccess:e==="fulfilled",isError:e==="rejected"}}var WE=ps;function ob(e,t){if(e===t||!(WE(e)&&WE(t)||Array.isArray(e)&&Array.isArray(t)))return t;const n=Object.keys(t),i=Object.keys(e);let o=n.length===i.length;const l=Array.isArray(t)?[]:{};for(const u of n)l[u]=ob(e[u],t[u]),o&&(o=e[u]===l[u]);return o?e:l}function cy(e){let t=0;for(const n in e)t++;return t}var QE=e=>[].concat(...e);function UH(e){return new RegExp("(^|:)//").test(e)}function $H(){return typeof document>"u"?!0:document.visibilityState!=="hidden"}function yh(e){return e!=null}function zH(){return typeof navigator>"u"||navigator.onLine===void 0?!0:navigator.onLine}var BH=e=>e.replace(/\/$/,""),HH=e=>e.replace(/^\//,"");function FH(e,t){if(!e)return t;if(!t)return e;if(UH(t))return t;const n=e.endsWith("/")||!t.startsWith("?")?"/":"";return e=BH(e),t=HH(t),`${e}${n}${t}`}function qH(e,t,n){return e.has(t)?e.get(t):e.set(t,n).get(t)}function pv(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}var mv=()=>new Map,KE=(...e)=>fetch(...e),VH=e=>e.status>=200&&e.status<=299,GH=e=>/ion\/(vnd\.api\+)?json/.test(e.get("content-type")||"");function XE(e){if(!ps(e))return e;const t={...e};for(const[n,i]of Object.entries(t))i===void 0&&delete t[n];return t}function YH({baseUrl:e,prepareHeaders:t=y=>y,fetchFn:n=KE,paramsSerializer:i,isJsonContentType:o=GH,jsonContentType:l="application/json",jsonReplacer:u,timeout:f,responseHandler:h,validateStatus:p,...g}={}){return typeof fetch>"u"&&n===KE&&console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."),async(_,b,w)=>{const{getState:I,extra:T,endpoint:D,forced:M,type:C}=b;let A,{url:k,headers:R=new Headers(g.headers),params:P=void 0,responseHandler:G=h??"json",validateStatus:F=p??VH,timeout:H=f,...z}=typeof _=="string"?{url:_}:_,V,B=b.signal;H&&(V=new AbortController,b.signal.addEventListener("abort",V.abort),B=V.signal);let te={...g,signal:B,...z};R=new Headers(XE(R)),te.headers=await t(R,{getState:I,arg:_,extra:T,endpoint:D,forced:M,type:C,extraOptions:w})||R;const ue=de=>typeof de=="object"&&(ps(de)||Array.isArray(de)||typeof de.toJSON=="function");if(!te.headers.has("content-type")&&ue(te.body)&&te.headers.set("content-type",l),ue(te.body)&&o(te.headers)&&(te.body=JSON.stringify(te.body,u)),P){const de=~k.indexOf("?")?"&":"?",me=i?i(P):new URLSearchParams(XE(P));k+=de+me}k=FH(e,k);const U=new Request(k,te);A={request:new Request(k,te)};let ne,ae=!1,N=V&&setTimeout(()=>{ae=!0,V.abort()},H);try{ne=await n(U)}catch(de){return{error:{status:ae?"TIMEOUT_ERROR":"FETCH_ERROR",error:String(de)},meta:A}}finally{N&&clearTimeout(N),V?.signal.removeEventListener("abort",V.abort)}const K=ne.clone();A.response=K;let le,ie="";try{let de;if(await Promise.all([y(ne,G).then(me=>le=me,me=>de=me),K.text().then(me=>ie=me,()=>{})]),de)throw de}catch(de){return{error:{status:"PARSING_ERROR",originalStatus:ne.status,data:ie,error:String(de)},meta:A}}return F(ne,le)?{data:le,meta:A}:{error:{status:ne.status,data:le},meta:A}};async function y(_,b){if(typeof b=="function")return b(_);if(b==="content-type"&&(b=o(_.headers)?"json":"text"),b==="json"){const w=await _.text();return w.length?JSON.parse(w):null}return _.text()}}var ZE=class{constructor(e,t=void 0){this.value=e,this.meta=t}},ab=hr("__rtkq/focused"),eD=hr("__rtkq/unfocused"),lb=hr("__rtkq/online"),tD=hr("__rtkq/offline");function ap(e){return e.type==="query"}function WH(e){return e.type==="mutation"}function lp(e){return e.type==="infinitequery"}function vh(e){return ap(e)||lp(e)}function cb(e,t,n,i,o,l){return QH(e)?e(t,n,i,o).filter(yh).map(gv).map(l):Array.isArray(e)?e.map(gv).map(l):[]}function QH(e){return typeof e=="function"}function gv(e){return typeof e=="string"?{type:e}:e}function KH(e,t){return e.catch(t)}var cu=Symbol("forceQueryFn"),yv=e=>typeof e[cu]=="function";function XH({serializeQueryArgs:e,queryThunk:t,infiniteQueryThunk:n,mutationThunk:i,api:o,context:l,internalState:u}){const{runningQueries:f,runningMutations:h}=u,{unsubscribeQueryResult:p,removeMutationResult:g,updateSubscriptionOptions:y}=o.internalActions;return{buildInitiateQuery:D,buildInitiateInfiniteQuery:M,buildInitiateMutation:C,getRunningQueryThunk:_,getRunningMutationThunk:b,getRunningQueriesThunk:w,getRunningMutationsThunk:I};function _(A,k){return R=>{const P=l.endpointDefinitions[A],G=e({queryArgs:k,endpointDefinition:P,endpointName:A});return f.get(R)?.[G]}}function b(A,k){return R=>h.get(R)?.[k]}function w(){return A=>Object.values(f.get(A)||{}).filter(yh)}function I(){return A=>Object.values(h.get(A)||{}).filter(yh)}function T(A,k){const R=(P,{subscribe:G=!0,forceRefetch:F,subscriptionOptions:H,[cu]:z,...V}={})=>(B,te)=>{const ue=e({queryArgs:P,endpointDefinition:k,endpointName:A});let U;const J={...V,type:"query",subscribe:G,forceRefetch:F,subscriptionOptions:H,endpointName:A,originalArgs:P,queryCacheKey:ue,[cu]:z};if(ap(k))U=t(J);else{const{direction:Ae,initialPageParam:be}=V;U=n({...J,direction:Ae,initialPageParam:be})}const ne=o.endpoints[A].select(P),ae=B(U),N=ne(te()),{requestId:K,abort:le}=ae,ie=N.requestId!==K,de=f.get(B)?.[ue],me=()=>ne(te()),pe=Object.assign(z?ae.then(me):ie&&!de?Promise.resolve(N):Promise.all([de,ae]).then(me),{arg:P,requestId:K,subscriptionOptions:H,queryCacheKey:ue,abort:le,async unwrap(){const Ae=await pe;if(Ae.isError)throw Ae.error;return Ae.data},refetch:()=>B(R(P,{subscribe:!1,forceRefetch:!0})),unsubscribe(){G&&B(p({queryCacheKey:ue,requestId:K}))},updateSubscriptionOptions(Ae){pe.subscriptionOptions=Ae,B(y({endpointName:A,requestId:K,queryCacheKey:ue,options:Ae}))}});if(!de&&!ie&&!z){const Ae=qH(f,B,{});Ae[ue]=pe,pe.then(()=>{delete Ae[ue],cy(Ae)||f.delete(B)})}return pe};return R}function D(A,k){return T(A,k)}function M(A,k){return T(A,k)}function C(A){return(k,{track:R=!0,fixedCacheKey:P}={})=>(G,F)=>{const H=i({type:"mutation",endpointName:A,originalArgs:k,track:R,fixedCacheKey:P}),z=G(H),{requestId:V,abort:B,unwrap:te}=z,ue=KH(z.unwrap().then(ae=>({data:ae})),ae=>({error:ae})),U=()=>{G(g({requestId:V,fixedCacheKey:P}))},J=Object.assign(ue,{arg:z.arg,requestId:V,abort:B,unwrap:te,reset:U}),ne=h.get(G)||{};return h.set(G,ne),ne[V]=J,J.then(()=>{delete ne[V],cy(ne)||h.delete(G)}),P&&(ne[P]=J,J.then(()=>{ne[P]===J&&(delete ne[P],cy(ne)||h.delete(G))})),J}}}var nD=class extends jH{constructor(e,t,n,i){super(e),this.value=t,this.schemaName=n,this._bqMeta=i}},Xs=(e,t)=>Array.isArray(e)?e.includes(t):!!e;async function Zs(e,t,n,i){const o=await e["~standard"].validate(t);if(o.issues)throw new nD(o.issues,t,n,i);return o.value}function JE(e){return e}var gc=(e={})=>({...e,[Hh]:!0});function ZH({reducerPath:e,baseQuery:t,context:{endpointDefinitions:n},serializeQueryArgs:i,api:o,assertTagType:l,selectors:u,onSchemaFailure:f,catchSchemaFailure:h,skipSchemaValidation:p}){const g=(z,V,B,te)=>(ue,U)=>{const J=n[z],ne=i({queryArgs:V,endpointDefinition:J,endpointName:z});if(ue(o.internalActions.queryResultPatched({queryCacheKey:ne,patches:B})),!te)return;const ae=o.endpoints[z].select(V)(U()),N=cb(J.providesTags,ae.data,void 0,V,{},l);ue(o.internalActions.updateProvidedBy([{queryCacheKey:ne,providedTags:N}]))};function y(z,V,B=0){const te=[V,...z];return B&&te.length>B?te.slice(0,-1):te}function _(z,V,B=0){const te=[...z,V];return B&&te.length>B?te.slice(1):te}const b=(z,V,B,te=!0)=>(ue,U)=>{const ne=o.endpoints[z].select(V)(U()),ae={patches:[],inversePatches:[],undo:()=>ue(o.util.patchQueryData(z,V,ae.inversePatches,te))};if(ne.status==="uninitialized")return ae;let N;if("data"in ne)if(vr(ne.data)){const[K,le,ie]=FR(ne.data,B);ae.patches.push(...le),ae.inversePatches.push(...ie),N=K}else N=B(ne.data),ae.patches.push({op:"replace",path:[],value:N}),ae.inversePatches.push({op:"replace",path:[],value:ne.data});return ae.patches.length===0||ue(o.util.patchQueryData(z,V,ae.patches,te)),ae},w=(z,V,B)=>te=>te(o.endpoints[z].initiate(V,{subscribe:!1,forceRefetch:!0,[cu]:()=>({data:B})})),I=(z,V)=>z.query&&z[V]?z[V]:JE,T=async(z,{signal:V,abort:B,rejectWithValue:te,fulfillWithValue:ue,dispatch:U,getState:J,extra:ne})=>{const ae=n[z.endpointName],{metaSchema:N,skipSchemaValidation:K=p}=ae;try{let le=JE;const ie={signal:V,abort:B,dispatch:U,getState:J,extra:ne,endpoint:z.endpointName,type:z.type,forced:z.type==="query"?D(z,J()):void 0,queryCacheKey:z.type==="query"?z.queryCacheKey:void 0},de=z.type==="query"?z[cu]:void 0;let me;const pe=async(be,De,$e,_t)=>{if(De==null&&be.pages.length)return Promise.resolve({data:be});const gt={queryArg:z.originalArgs,pageParam:De},Mn=await Ae(gt),xt=_t?y:_;return{data:{pages:xt(be.pages,Mn.data,$e),pageParams:xt(be.pageParams,De,$e)},meta:Mn.meta}};async function Ae(be){let De;const{extraOptions:$e,argSchema:_t,rawResponseSchema:gt,responseSchema:Mn}=ae;if(_t&&!Xs(K,"arg")&&(be=await Zs(_t,be,"argSchema",{})),de?De=de():ae.query?(le=I(ae,"transformResponse"),De=await t(ae.query(be),ie,$e)):De=await ae.queryFn(be,ie,$e,Pr=>t(Pr,ie,$e)),typeof process<"u",De.error)throw new ZE(De.error,De.meta);let{data:xt}=De;gt&&!Xs(K,"rawResponse")&&(xt=await Zs(gt,De.data,"rawResponseSchema",De.meta));let Ln=await le(xt,De.meta,be);return Mn&&!Xs(K,"response")&&(Ln=await Zs(Mn,Ln,"responseSchema",De.meta)),{...De,data:Ln}}if(z.type==="query"&&"infiniteQueryOptions"in ae){const{infiniteQueryOptions:be}=ae,{maxPages:De=1/0}=be;let $e;const _t={pages:[],pageParams:[]},gt=u.selectQueryEntry(J(),z.queryCacheKey)?.data,xt=D(z,J())&&!z.direction||!gt?_t:gt;if("direction"in z&&z.direction&&xt.pages.length){const Ln=z.direction==="backward",Wt=(Ln?rD:vv)(be,xt,z.originalArgs);$e=await pe(xt,Wt,De,Ln)}else{const{initialPageParam:Ln=be.initialPageParam}=z,Pr=gt?.pageParams??[],Wt=Pr[0]??Ln,sl=Pr.length;$e=await pe(xt,Wt,De),de&&($e={data:$e.data.pages[0]});for(let Es=1;Es<sl;Es++){const Oo=vv(be,$e.data,z.originalArgs);$e=await pe($e.data,Oo,De)}}me=$e}else me=await Ae(z.originalArgs);return N&&!Xs(K,"meta")&&me.meta&&(me.meta=await Zs(N,me.meta,"metaSchema",me.meta)),ue(me.data,gc({fulfilledTimeStamp:Date.now(),baseQueryMeta:me.meta}))}catch(le){let ie=le;if(ie instanceof ZE){let de=I(ae,"transformErrorResponse");const{rawErrorResponseSchema:me,errorResponseSchema:pe}=ae;let{value:Ae,meta:be}=ie;try{me&&!Xs(K,"rawErrorResponse")&&(Ae=await Zs(me,Ae,"rawErrorResponseSchema",be)),N&&!Xs(K,"meta")&&(be=await Zs(N,be,"metaSchema",be));let De=await de(Ae,be,z.originalArgs);return pe&&!Xs(K,"errorResponse")&&(De=await Zs(pe,De,"errorResponseSchema",be)),te(De,gc({baseQueryMeta:be}))}catch(De){ie=De}}try{if(ie instanceof nD){const de={endpoint:z.endpointName,arg:z.originalArgs,type:z.type,queryCacheKey:z.type==="query"?z.queryCacheKey:void 0};ae.onSchemaFailure?.(ie,de),f?.(ie,de);const{catchSchemaFailure:me=h}=ae;if(me)return te(me(ie,de),gc({baseQueryMeta:ie._bqMeta}))}}catch(de){ie=de}throw console.error(ie),ie}};function D(z,V){const B=u.selectQueryEntry(V,z.queryCacheKey),te=u.selectConfig(V).refetchOnMountOrArgChange,ue=B?.fulfilledTimeStamp,U=z.forceRefetch??(z.subscribe&&te);return U?U===!0||(Number(new Date)-Number(ue))/1e3>=U:!1}const M=()=>Tx(`${e}/executeQuery`,T,{getPendingMeta({arg:V}){const B=n[V.endpointName];return gc({startedTimeStamp:Date.now(),...lp(B)?{direction:V.direction}:{}})},condition(V,{getState:B}){const te=B(),ue=u.selectQueryEntry(te,V.queryCacheKey),U=ue?.fulfilledTimeStamp,J=V.originalArgs,ne=ue?.originalArgs,ae=n[V.endpointName],N=V.direction;return yv(V)?!0:ue?.status==="pending"?!1:D(V,te)||ap(ae)&&ae?.forceRefetch?.({currentArg:J,previousArg:ne,endpointState:ue,state:te})?!0:!(U&&!N)},dispatchConditionRejection:!0}),C=M(),A=M(),k=Tx(`${e}/executeMutation`,T,{getPendingMeta(){return gc({startedTimeStamp:Date.now()})}}),R=z=>"force"in z,P=z=>"ifOlderThan"in z,G=(z,V,B)=>(te,ue)=>{const U=R(B)&&B.force,J=P(B)&&B.ifOlderThan,ne=(N=!0)=>{const K={forceRefetch:N,isPrefetch:!0};return o.endpoints[z].initiate(V,K)},ae=o.endpoints[z].select(V)(ue());if(U)te(ne());else if(J){const N=ae?.fulfilledTimeStamp;if(!N){te(ne());return}(Number(new Date)-Number(new Date(N)))/1e3>=J&&te(ne())}else te(ne(!1))};function F(z){return V=>V?.meta?.arg?.endpointName===z}function H(z,V){return{matchPending:Oc(a_(z),F(V)),matchFulfilled:Oc(ms(z),F(V)),matchRejected:Oc($a(z),F(V))}}return{queryThunk:C,mutationThunk:k,infiniteQueryThunk:A,prefetch:G,updateQueryData:b,upsertQueryData:w,patchQueryData:g,buildMatchThunkActions:H}}function vv(e,{pages:t,pageParams:n},i){const o=t.length-1;return e.getNextPageParam(t[o],t,n[o],n,i)}function rD(e,{pages:t,pageParams:n},i){return e.getPreviousPageParam?.(t[0],t,n[0],n,i)}function iD(e,t,n,i){return cb(n[e.meta.arg.endpointName][t],ms(e)?e.payload:void 0,qh(e)?e.payload:void 0,e.meta.arg.originalArgs,"baseQueryMeta"in e.meta?e.meta.baseQueryMeta:void 0,i)}function of(e,t,n){const i=e[t];i&&n(i)}function uu(e){return("arg"in e?e.arg.fixedCacheKey:e.fixedCacheKey)??e.requestId}function eT(e,t,n){const i=e[uu(t)];i&&n(i)}var af={};function JH({reducerPath:e,queryThunk:t,mutationThunk:n,serializeQueryArgs:i,context:{endpointDefinitions:o,apiUid:l,extractRehydrationInfo:u,hasRehydrationInfo:f},assertTagType:h,config:p}){const g=hr(`${e}/resetApiState`);function y(F,H,z,V){F[H.queryCacheKey]??={status:"uninitialized",endpointName:H.endpointName},of(F,H.queryCacheKey,B=>{B.status="pending",B.requestId=z&&B.requestId?B.requestId:V.requestId,H.originalArgs!==void 0&&(B.originalArgs=H.originalArgs),B.startedTimeStamp=V.startedTimeStamp;const te=o[V.arg.endpointName];lp(te)&&"direction"in H&&(B.direction=H.direction)})}function _(F,H,z,V){of(F,H.arg.queryCacheKey,B=>{if(B.requestId!==H.requestId&&!V)return;const{merge:te}=o[H.arg.endpointName];if(B.status="fulfilled",te)if(B.data!==void 0){const{fulfilledTimeStamp:ue,arg:U,baseQueryMeta:J,requestId:ne}=H;let ae=mu(B.data,N=>te(N,z,{arg:U.originalArgs,baseQueryMeta:J,fulfilledTimeStamp:ue,requestId:ne}));B.data=ae}else B.data=z;else B.data=o[H.arg.endpointName].structuralSharing??!0?ob(Mr(B.data)?gj(B.data):B.data,z):z;delete B.error,B.fulfilledTimeStamp=H.fulfilledTimeStamp})}const b=Ir({name:`${e}/queries`,initialState:af,reducers:{removeQueryResult:{reducer(F,{payload:{queryCacheKey:H}}){delete F[H]},prepare:oc()},cacheEntriesUpserted:{reducer(F,H){for(const z of H.payload){const{queryDescription:V,value:B}=z;y(F,V,!0,{arg:V,requestId:H.meta.requestId,startedTimeStamp:H.meta.timestamp}),_(F,{arg:V,requestId:H.meta.requestId,fulfilledTimeStamp:H.meta.timestamp,baseQueryMeta:{}},B,!0)}},prepare:F=>({payload:F.map(V=>{const{endpointName:B,arg:te,value:ue}=V,U=o[B];return{queryDescription:{type:"query",endpointName:B,originalArgs:V.arg,queryCacheKey:i({queryArgs:te,endpointDefinition:U,endpointName:B})},value:ue}}),meta:{[Hh]:!0,requestId:l_(),timestamp:Date.now()}})},queryResultPatched:{reducer(F,{payload:{queryCacheKey:H,patches:z}}){of(F,H,V=>{V.data=vx(V.data,z.concat())})},prepare:oc()}},extraReducers(F){F.addCase(t.pending,(H,{meta:z,meta:{arg:V}})=>{const B=yv(V);y(H,V,B,z)}).addCase(t.fulfilled,(H,{meta:z,payload:V})=>{const B=yv(z.arg);_(H,z,V,B)}).addCase(t.rejected,(H,{meta:{condition:z,arg:V,requestId:B},error:te,payload:ue})=>{of(H,V.queryCacheKey,U=>{if(!z){if(U.requestId!==B)return;U.status="rejected",U.error=ue??te}})}).addMatcher(f,(H,z)=>{const{queries:V}=u(z);for(const[B,te]of Object.entries(V))(te?.status==="fulfilled"||te?.status==="rejected")&&(H[B]=te)})}}),w=Ir({name:`${e}/mutations`,initialState:af,reducers:{removeMutationResult:{reducer(F,{payload:H}){const z=uu(H);z in F&&delete F[z]},prepare:oc()}},extraReducers(F){F.addCase(n.pending,(H,{meta:z,meta:{requestId:V,arg:B,startedTimeStamp:te}})=>{B.track&&(H[uu(z)]={requestId:V,status:"pending",endpointName:B.endpointName,startedTimeStamp:te})}).addCase(n.fulfilled,(H,{payload:z,meta:V})=>{V.arg.track&&eT(H,V,B=>{B.requestId===V.requestId&&(B.status="fulfilled",B.data=z,B.fulfilledTimeStamp=V.fulfilledTimeStamp)})}).addCase(n.rejected,(H,{payload:z,error:V,meta:B})=>{B.arg.track&&eT(H,B,te=>{te.requestId===B.requestId&&(te.status="rejected",te.error=z??V)})}).addMatcher(f,(H,z)=>{const{mutations:V}=u(z);for(const[B,te]of Object.entries(V))(te?.status==="fulfilled"||te?.status==="rejected")&&B!==te?.requestId&&(H[B]=te)})}}),I={tags:{},keys:{}},T=Ir({name:`${e}/invalidation`,initialState:I,reducers:{updateProvidedBy:{reducer(F,H){for(const{queryCacheKey:z,providedTags:V}of H.payload){D(F,z);for(const{type:B,id:te}of V){const ue=(F.tags[B]??={})[te||"__internal_without_id"]??=[];ue.includes(z)||ue.push(z)}F.keys[z]=V}},prepare:oc()}},extraReducers(F){F.addCase(b.actions.removeQueryResult,(H,{payload:{queryCacheKey:z}})=>{D(H,z)}).addMatcher(f,(H,z)=>{const{provided:V}=u(z);for(const[B,te]of Object.entries(V.tags??{}))for(const[ue,U]of Object.entries(te)){const J=(H.tags[B]??={})[ue||"__internal_without_id"]??=[];for(const ne of U)J.includes(ne)||J.push(ne),H.keys[ne]=V.keys[ne]}}).addMatcher(mi(ms(t),qh(t)),(H,z)=>{M(H,[z])}).addMatcher(b.actions.cacheEntriesUpserted.match,(H,z)=>{const V=z.payload.map(({queryDescription:B,value:te})=>({type:"UNKNOWN",payload:te,meta:{requestStatus:"fulfilled",requestId:"UNKNOWN",arg:B}}));M(H,V)})}});function D(F,H){const z=F.keys[H]??[];for(const V of z){const B=V.type,te=V.id??"__internal_without_id",ue=F.tags[B]?.[te];ue&&(F.tags[B][te]=ue.filter(U=>U!==H))}delete F.keys[H]}function M(F,H){const z=H.map(V=>{const B=iD(V,"providesTags",o,h),{queryCacheKey:te}=V.meta.arg;return{queryCacheKey:te,providedTags:B}});T.caseReducers.updateProvidedBy(F,T.actions.updateProvidedBy(z))}const C=Ir({name:`${e}/subscriptions`,initialState:af,reducers:{updateSubscriptionOptions(F,H){},unsubscribeQueryResult(F,H){},internal_getRTKQSubscriptions(){}}}),A=Ir({name:`${e}/internalSubscriptions`,initialState:af,reducers:{subscriptionsUpdated:{reducer(F,H){return vx(F,H.payload)},prepare:oc()}}}),k=Ir({name:`${e}/config`,initialState:{online:zH(),focused:$H(),middlewareRegistered:!1,...p},reducers:{middlewareRegistered(F,{payload:H}){F.middlewareRegistered=F.middlewareRegistered==="conflict"||l!==H?"conflict":!0}},extraReducers:F=>{F.addCase(lb,H=>{H.online=!0}).addCase(tD,H=>{H.online=!1}).addCase(ab,H=>{H.focused=!0}).addCase(eD,H=>{H.focused=!1}).addMatcher(f,H=>({...H}))}}),R=PR({queries:b.reducer,mutations:w.reducer,provided:T.reducer,subscriptions:A.reducer,config:k.reducer}),P=(F,H)=>R(g.match(H)?void 0:F,H),G={...k.actions,...b.actions,...C.actions,...A.actions,...w.actions,...T.actions,resetApiState:g};return{reducer:P,actions:G}}var ar=Symbol.for("RTKQ/skipToken"),sD={status:"uninitialized"},tT=mu(sD,()=>{}),nT=mu(sD,()=>{});function e9({serializeQueryArgs:e,reducerPath:t,createSelector:n}){const i=C=>tT,o=C=>nT;return{buildQuerySelector:_,buildInfiniteQuerySelector:b,buildMutationSelector:w,selectInvalidatedBy:I,selectCachedArgsForQuery:T,selectApiState:u,selectQueries:f,selectMutations:p,selectQueryEntry:h,selectConfig:g};function l(C){return{...C,...YE(C.status)}}function u(C){return C[t]}function f(C){return u(C)?.queries}function h(C,A){return f(C)?.[A]}function p(C){return u(C)?.mutations}function g(C){return u(C)?.config}function y(C,A,k){return R=>{if(R===ar)return n(i,k);const P=e({queryArgs:R,endpointDefinition:A,endpointName:C});return n(F=>h(F,P)??tT,k)}}function _(C,A){return y(C,A,l)}function b(C,A){const{infiniteQueryOptions:k}=A;function R(P){const G={...P,...YE(P.status)},{isLoading:F,isError:H,direction:z}=G,V=z==="forward",B=z==="backward";return{...G,hasNextPage:D(k,G.data,G.originalArgs),hasPreviousPage:M(k,G.data,G.originalArgs),isFetchingNextPage:F&&V,isFetchingPreviousPage:F&&B,isFetchNextPageError:H&&V,isFetchPreviousPageError:H&&B}}return y(C,A,R)}function w(){return C=>{let A;return typeof C=="object"?A=uu(C)??ar:A=C,n(A===ar?o:P=>u(P)?.mutations?.[A]??nT,l)}}function I(C,A){const k=C[t],R=new Set;for(const P of A.filter(yh).map(gv)){const G=k.provided.tags[P.type];if(!G)continue;let F=(P.id!==void 0?G[P.id]:QE(Object.values(G)))??[];for(const H of F)R.add(H)}return QE(Array.from(R.values()).map(P=>{const G=k.queries[P];return G?[{queryCacheKey:P,endpointName:G.endpointName,originalArgs:G.originalArgs}]:[]}))}function T(C,A){return Object.values(f(C)).filter(k=>k?.endpointName===A&&k.status!=="uninitialized").map(k=>k.originalArgs)}function D(C,A,k){return A?vv(C,A,k)!=null:!1}function M(C,A,k){return!A||!C.getPreviousPageParam?!1:rD(C,A,k)!=null}}var rT=WeakMap?new WeakMap:void 0,iT=({endpointName:e,queryArgs:t})=>{let n="";const i=rT?.get(t);if(typeof i=="string")n=i;else{const o=JSON.stringify(t,(l,u)=>(u=typeof u=="bigint"?{$bigint:u.toString()}:u,u=ps(u)?Object.keys(u).sort().reduce((f,h)=>(f[h]=u[h],f),{}):u,u));ps(t)&&rT?.set(t,o),n=o}return`${e}(${n})`};function oD(...e){return function(n){const i=Wf(p=>n.extractRehydrationInfo?.(p,{reducerPath:n.reducerPath??"api"})),o={reducerPath:"api",keepUnusedDataFor:60,refetchOnMountOrArgChange:!1,refetchOnFocus:!1,refetchOnReconnect:!1,invalidationBehavior:"delayed",...n,extractRehydrationInfo:i,serializeQueryArgs(p){let g=iT;if("serializeQueryArgs"in p.endpointDefinition){const y=p.endpointDefinition.serializeQueryArgs;g=_=>{const b=y(_);return typeof b=="string"?b:iT({..._,queryArgs:b})}}else n.serializeQueryArgs&&(g=n.serializeQueryArgs);return g(p)},tagTypes:[...n.tagTypes||[]]},l={endpointDefinitions:{},batch(p){p()},apiUid:l_(),extractRehydrationInfo:i,hasRehydrationInfo:Wf(p=>i(p)!=null)},u={injectEndpoints:h,enhanceEndpoints({addTagTypes:p,endpoints:g}){if(p)for(const y of p)o.tagTypes.includes(y)||o.tagTypes.push(y);if(g)for(const[y,_]of Object.entries(g))typeof _=="function"?_(l.endpointDefinitions[y]):Object.assign(l.endpointDefinitions[y]||{},_);return u}},f=e.map(p=>p.init(u,o,l));function h(p){const g=p.endpoints({query:y=>({...y,type:"query"}),mutation:y=>({...y,type:"mutation"}),infiniteQuery:y=>({...y,type:"infinitequery"})});for(const[y,_]of Object.entries(g)){if(p.overrideExisting!==!0&&y in l.endpointDefinitions){if(p.overrideExisting==="throw")throw new Error(pr(39));continue}l.endpointDefinitions[y]=_;for(const b of f)b.injectEndpoint(y,_)}return u}return u.injectEndpoints({endpoints:n.endpoints})}}function ri(e,...t){return Object.assign(e,...t)}var t9=({api:e,queryThunk:t,internalState:n,mwApi:i})=>{const o=`${e.reducerPath}/subscriptions`;let l=null,u=null;const{updateSubscriptionOptions:f,unsubscribeQueryResult:h}=e.internalActions,p=(I,T)=>{if(f.match(T)){const{queryCacheKey:M,requestId:C,options:A}=T.payload,k=I.get(M);return k?.has(C)&&k.set(C,A),!0}if(h.match(T)){const{queryCacheKey:M,requestId:C}=T.payload,A=I.get(M);return A&&A.delete(C),!0}if(e.internalActions.removeQueryResult.match(T))return I.delete(T.payload.queryCacheKey),!0;if(t.pending.match(T)){const{meta:{arg:M,requestId:C}}=T,A=pv(I,M.queryCacheKey,mv);return M.subscribe&&A.set(C,M.subscriptionOptions??A.get(C)??{}),!0}let D=!1;if(t.rejected.match(T)){const{meta:{condition:M,arg:C,requestId:A}}=T;if(M&&C.subscribe){const k=pv(I,C.queryCacheKey,mv);k.set(A,C.subscriptionOptions??k.get(A)??{}),D=!0}}return D},g=()=>n.currentSubscriptions,b={getSubscriptions:g,getSubscriptionCount:I=>g().get(I)?.size??0,isRequestSubscribed:(I,T)=>!!g()?.get(I)?.get(T)};function w(I){return JSON.parse(JSON.stringify(Object.fromEntries([...I].map(([T,D])=>[T,Object.fromEntries(D)]))))}return(I,T)=>{if(l||(l=w(n.currentSubscriptions)),e.util.resetApiState.match(I))return l={},n.currentSubscriptions.clear(),u=null,[!0,!1];if(e.internalActions.internal_getRTKQSubscriptions.match(I))return[!1,b];const D=p(n.currentSubscriptions,I);let M=!0;if(D){u||(u=setTimeout(()=>{const k=w(n.currentSubscriptions),[,R]=FR(l,()=>k);T.next(e.internalActions.subscriptionsUpdated(R)),l=k,u=null},500));const C=typeof I.type=="string"&&!!I.type.startsWith(o),A=t.rejected.match(I)&&I.meta.condition&&!!I.meta.arg.subscribe;M=!C&&!A}return[M,!1]}},n9=2147483647/1e3-1,r9=({reducerPath:e,api:t,queryThunk:n,context:i,internalState:o,selectors:{selectQueryEntry:l,selectConfig:u},getRunningQueryThunk:f,mwApi:h})=>{const{removeQueryResult:p,unsubscribeQueryResult:g,cacheEntriesUpserted:y}=t.internalActions,_=o.runningQueries.get(h.dispatch),b=mi(g.match,n.fulfilled,n.rejected,y.match);function w(C){const A=o.currentSubscriptions.get(C);if(!A)return!1;const k=A.size>0,R=_?.[C]!==void 0;return k||R}const I={},T=(C,A,k)=>{const R=A.getState(),P=u(R);if(b(C)){let G;if(y.match(C))G=C.payload.map(F=>F.queryDescription.queryCacheKey);else{const{queryCacheKey:F}=g.match(C)?C.payload:C.meta.arg;G=[F]}D(G,A,P)}if(t.util.resetApiState.match(C))for(const[G,F]of Object.entries(I))F&&clearTimeout(F),delete I[G];if(i.hasRehydrationInfo(C)){const{queries:G}=i.extractRehydrationInfo(C);D(Object.keys(G),A,P)}};function D(C,A,k){const R=A.getState();for(const P of C){const G=l(R,P);G?.endpointName&&M(P,G.endpointName,A,k)}}function M(C,A,k,R){const G=i.endpointDefinitions[A]?.keepUnusedDataFor??R.keepUnusedDataFor;if(G===1/0)return;const F=Math.max(0,Math.min(G,n9));if(!w(C)){const H=I[C];H&&clearTimeout(H),I[C]=setTimeout(()=>{if(!w(C)){const z=l(k.getState(),C);z?.endpointName&&k.dispatch(f(z.endpointName,z.originalArgs))?.abort(),k.dispatch(p({queryCacheKey:C}))}delete I[C]},F*1e3)}}return T},sT=new Error("Promise never resolved before cacheEntryRemoved."),i9=({api:e,reducerPath:t,context:n,queryThunk:i,mutationThunk:o,internalState:l,selectors:{selectQueryEntry:u,selectApiState:f}})=>{const h=Qy(i),p=Qy(o),g=ms(i,o),y={};function _(D,M,C){const A=y[D];A?.valueResolved&&(A.valueResolved({data:M,meta:C}),delete A.valueResolved)}function b(D){const M=y[D];M&&(delete y[D],M.cacheEntryRemoved())}const w=(D,M,C)=>{const A=I(D);function k(R,P,G,F){const H=u(C,P),z=u(M.getState(),P);!H&&z&&T(R,F,P,M,G)}if(i.pending.match(D))k(D.meta.arg.endpointName,A,D.meta.requestId,D.meta.arg.originalArgs);else if(e.internalActions.cacheEntriesUpserted.match(D))for(const{queryDescription:R,value:P}of D.payload){const{endpointName:G,originalArgs:F,queryCacheKey:H}=R;k(G,H,D.meta.requestId,F),_(H,P,{})}else if(o.pending.match(D))M.getState()[t].mutations[A]&&T(D.meta.arg.endpointName,D.meta.arg.originalArgs,A,M,D.meta.requestId);else if(g(D))_(A,D.payload,D.meta.baseQueryMeta);else if(e.internalActions.removeQueryResult.match(D)||e.internalActions.removeMutationResult.match(D))b(A);else if(e.util.resetApiState.match(D))for(const R of Object.keys(y))b(R)};function I(D){return h(D)?D.meta.arg.queryCacheKey:p(D)?D.meta.arg.fixedCacheKey??D.meta.requestId:e.internalActions.removeQueryResult.match(D)?D.payload.queryCacheKey:e.internalActions.removeMutationResult.match(D)?uu(D.payload):""}function T(D,M,C,A,k){const R=n.endpointDefinitions[D],P=R?.onCacheEntryAdded;if(!P)return;const G={},F=new Promise(ue=>{G.cacheEntryRemoved=ue}),H=Promise.race([new Promise(ue=>{G.valueResolved=ue}),F.then(()=>{throw sT})]);H.catch(()=>{}),y[C]=G;const z=e.endpoints[D].select(vh(R)?M:C),V=A.dispatch((ue,U,J)=>J),B={...A,getCacheEntry:()=>z(A.getState()),requestId:k,extra:V,updateCachedData:vh(R)?ue=>A.dispatch(e.util.updateQueryData(D,M,ue)):void 0,cacheDataLoaded:H,cacheEntryRemoved:F},te=P(M,B);Promise.resolve(te).catch(ue=>{if(ue!==sT)throw ue})}return w},s9=({api:e,context:{apiUid:t},reducerPath:n})=>(i,o)=>{e.util.resetApiState.match(i)&&o.dispatch(e.internalActions.middlewareRegistered(t))},o9=({reducerPath:e,context:t,context:{endpointDefinitions:n},mutationThunk:i,queryThunk:o,api:l,assertTagType:u,refetchQuery:f,internalState:h})=>{const{removeQueryResult:p}=l.internalActions,g=mi(ms(i),qh(i)),y=mi(ms(i,o),$a(i,o));let _=[];const b=(T,D)=>{g(T)?I(iD(T,"invalidatesTags",n,u),D):y(T)?I([],D):l.util.invalidateTags.match(T)&&I(cb(T.payload,void 0,void 0,void 0,void 0,u),D)};function w(T){const{queries:D,mutations:M}=T;for(const C of[D,M])for(const A in C)if(C[A]?.status==="pending")return!0;return!1}function I(T,D){const M=D.getState(),C=M[e];if(_.push(...T),C.config.invalidationBehavior==="delayed"&&w(C))return;const A=_;if(_=[],A.length===0)return;const k=l.util.selectInvalidatedBy(M,A);t.batch(()=>{const R=Array.from(k.values());for(const{queryCacheKey:P}of R){const G=C.queries[P],F=pv(h.currentSubscriptions,P,mv);G&&(F.size===0?D.dispatch(p({queryCacheKey:P})):G.status!=="uninitialized"&&D.dispatch(f(G)))}})}return b},a9=({reducerPath:e,queryThunk:t,api:n,refetchQuery:i,internalState:o})=>{const{currentPolls:l,currentSubscriptions:u}=o,f=new Set;let h=null;const p=(T,D)=>{(n.internalActions.updateSubscriptionOptions.match(T)||n.internalActions.unsubscribeQueryResult.match(T))&&g(T.payload.queryCacheKey,D),(t.pending.match(T)||t.rejected.match(T)&&T.meta.condition)&&g(T.meta.arg.queryCacheKey,D),(t.fulfilled.match(T)||t.rejected.match(T)&&!T.meta.condition)&&y(T.meta.arg,D),n.util.resetApiState.match(T)&&(w(),h&&(clearTimeout(h),h=null),f.clear())};function g(T,D){f.add(T),h||(h=setTimeout(()=>{for(const M of f)_({queryCacheKey:M},D);f.clear(),h=null},0))}function y({queryCacheKey:T},D){const M=D.getState()[e],C=M.queries[T],A=u.get(T);if(!C||C.status==="uninitialized")return;const{lowestPollingInterval:k,skipPollingIfUnfocused:R}=I(A);if(!Number.isFinite(k))return;const P=l.get(T);P?.timeout&&(clearTimeout(P.timeout),P.timeout=void 0);const G=Date.now()+k;l.set(T,{nextPollTimestamp:G,pollingInterval:k,timeout:setTimeout(()=>{(M.config.focused||!R)&&D.dispatch(i(C)),y({queryCacheKey:T},D)},k)})}function _({queryCacheKey:T},D){const C=D.getState()[e].queries[T],A=u.get(T);if(!C||C.status==="uninitialized")return;const{lowestPollingInterval:k}=I(A);if(!Number.isFinite(k)){b(T);return}const R=l.get(T),P=Date.now()+k;(!R||P<R.nextPollTimestamp)&&y({queryCacheKey:T},D)}function b(T){const D=l.get(T);D?.timeout&&clearTimeout(D.timeout),l.delete(T)}function w(){for(const T of l.keys())b(T)}function I(T=new Map){let D=!1,M=Number.POSITIVE_INFINITY;for(const C of T.values())C.pollingInterval&&(M=Math.min(C.pollingInterval,M),D=C.skipPollingIfUnfocused||D);return{lowestPollingInterval:M,skipPollingIfUnfocused:D}}return p},l9=({api:e,context:t,queryThunk:n,mutationThunk:i})=>{const o=a_(n,i),l=$a(n,i),u=ms(n,i),f={};return(p,g)=>{if(o(p)){const{requestId:y,arg:{endpointName:_,originalArgs:b}}=p.meta,w=t.endpointDefinitions[_],I=w?.onQueryStarted;if(I){const T={},D=new Promise((k,R)=>{T.resolve=k,T.reject=R});D.catch(()=>{}),f[y]=T;const M=e.endpoints[_].select(vh(w)?b:y),C=g.dispatch((k,R,P)=>P),A={...g,getCacheEntry:()=>M(g.getState()),requestId:y,extra:C,updateCachedData:vh(w)?k=>g.dispatch(e.util.updateQueryData(_,b,k)):void 0,queryFulfilled:D};I(b,A)}}else if(u(p)){const{requestId:y,baseQueryMeta:_}=p.meta;f[y]?.resolve({data:p.payload,meta:_}),delete f[y]}else if(l(p)){const{requestId:y,rejectedWithValue:_,baseQueryMeta:b}=p.meta;f[y]?.reject({error:p.payload??p.error,isUnhandledError:!_,meta:b}),delete f[y]}}},c9=({reducerPath:e,context:t,api:n,refetchQuery:i,internalState:o})=>{const{removeQueryResult:l}=n.internalActions,u=(h,p)=>{ab.match(h)&&f(p,"refetchOnFocus"),lb.match(h)&&f(p,"refetchOnReconnect")};function f(h,p){const g=h.getState()[e],y=g.queries,_=o.currentSubscriptions;t.batch(()=>{for(const b of _.keys()){const w=y[b],I=_.get(b);if(!I||!w)continue;const T=[...I.values()];(T.some(M=>M[p]===!0)||T.every(M=>M[p]===void 0)&&g.config[p])&&(I.size===0?h.dispatch(l({queryCacheKey:b})):w.status!=="uninitialized"&&h.dispatch(i(w)))}})}return u};function u9(e){const{reducerPath:t,queryThunk:n,api:i,context:o,internalState:l}=e,{apiUid:u}=o,f={invalidateTags:hr(`${t}/invalidateTags`)},h=_=>_.type.startsWith(`${t}/`),p=[s9,r9,o9,a9,i9,l9];return{middleware:_=>{let b=!1;const w={...e,internalState:l,refetchQuery:y,isThisApiSliceAction:h,mwApi:_},I=p.map(M=>M(w)),T=t9(w),D=c9(w);return M=>C=>{if(!jR(C))return M(C);b||(b=!0,_.dispatch(i.internalActions.middlewareRegistered(u)));const A={..._,next:M},k=_.getState(),[R,P]=T(C,A,k);let G;if(R?G=M(C):G=P,_.getState()[t]&&(D(C,A,k),h(C)||o.hasRehydrationInfo(C)))for(const F of I)F(C,A,k);return G}},actions:f};function y(_){return e.api.endpoints[_.endpointName].initiate(_.originalArgs,{subscribe:!1,forceRefetch:!0})}}var oT=Symbol(),aD=({createSelector:e=Si}={})=>({name:oT,init(t,{baseQuery:n,tagTypes:i,reducerPath:o,serializeQueryArgs:l,keepUnusedDataFor:u,refetchOnMountOrArgChange:f,refetchOnFocus:h,refetchOnReconnect:p,invalidationBehavior:g,onSchemaFailure:y,catchSchemaFailure:_,skipSchemaValidation:b},w){Cj();const I=pe=>pe;Object.assign(t,{reducerPath:o,endpoints:{},internalActions:{onOnline:lb,onOffline:tD,onFocus:ab,onFocusLost:eD},util:{}});const T=e9({serializeQueryArgs:l,reducerPath:o,createSelector:e}),{selectInvalidatedBy:D,selectCachedArgsForQuery:M,buildQuerySelector:C,buildInfiniteQuerySelector:A,buildMutationSelector:k}=T;ri(t.util,{selectInvalidatedBy:D,selectCachedArgsForQuery:M});const{queryThunk:R,infiniteQueryThunk:P,mutationThunk:G,patchQueryData:F,updateQueryData:H,upsertQueryData:z,prefetch:V,buildMatchThunkActions:B}=ZH({baseQuery:n,reducerPath:o,context:w,api:t,serializeQueryArgs:l,assertTagType:I,selectors:T,onSchemaFailure:y,catchSchemaFailure:_,skipSchemaValidation:b}),{reducer:te,actions:ue}=JH({context:w,queryThunk:R,mutationThunk:G,serializeQueryArgs:l,reducerPath:o,assertTagType:I,config:{refetchOnFocus:h,refetchOnReconnect:p,refetchOnMountOrArgChange:f,keepUnusedDataFor:u,reducerPath:o,invalidationBehavior:g}});ri(t.util,{patchQueryData:F,updateQueryData:H,upsertQueryData:z,prefetch:V,resetApiState:ue.resetApiState,upsertQueryEntries:ue.cacheEntriesUpserted}),ri(t.internalActions,ue);const U={currentSubscriptions:new Map,currentPolls:new Map,runningQueries:new Map,runningMutations:new Map},{buildInitiateQuery:J,buildInitiateInfiniteQuery:ne,buildInitiateMutation:ae,getRunningMutationThunk:N,getRunningMutationsThunk:K,getRunningQueriesThunk:le,getRunningQueryThunk:ie}=XH({queryThunk:R,mutationThunk:G,infiniteQueryThunk:P,api:t,serializeQueryArgs:l,context:w,internalState:U});ri(t.util,{getRunningMutationThunk:N,getRunningMutationsThunk:K,getRunningQueryThunk:ie,getRunningQueriesThunk:le});const{middleware:de,actions:me}=u9({reducerPath:o,context:w,queryThunk:R,mutationThunk:G,infiniteQueryThunk:P,api:t,assertTagType:I,selectors:T,getRunningQueryThunk:ie,internalState:U});return ri(t.util,me),ri(t,{reducer:te,middleware:de}),{name:oT,injectEndpoint(pe,Ae){const be=t,De=be.endpoints[pe]??={};ap(Ae)&&ri(De,{name:pe,select:C(pe,Ae),initiate:J(pe,Ae)},B(R,pe)),WH(Ae)&&ri(De,{name:pe,select:k(),initiate:ae(pe)},B(G,pe)),lp(Ae)&&ri(De,{name:pe,select:A(pe,Ae),initiate:ne(pe,Ae)},B(R,pe))}}}});aD();function lf(e){return e.replace(e[0],e[0].toUpperCase())}function d9(e){return e.type==="query"}function f9(e){return e.type==="mutation"}function lD(e){return e.type==="infinitequery"}function yc(e,...t){return Object.assign(e,...t)}var uy=Symbol();function dy(e){const t=E.useRef(e),n=E.useMemo(()=>ob(t.current,e),[e]);return E.useEffect(()=>{t.current!==n&&(t.current=n)},[n]),n}function cf(e){const t=E.useRef(e);return E.useEffect(()=>{Ec(t.current,e)||(t.current=e)},[e]),Ec(t.current,e)?t.current:e}var h9=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",p9=h9(),m9=()=>typeof navigator<"u"&&navigator.product==="ReactNative",g9=m9(),y9=()=>p9||g9?E.useLayoutEffect:E.useEffect,v9=y9(),aT=e=>e.isUninitialized?{...e,isUninitialized:!1,isFetching:!0,isLoading:e.data===void 0,status:JI.pending}:e;function fy(e,...t){const n={};return t.forEach(i=>{n[i]=e[i]}),n}var hy=["data","status","isLoading","isSuccess","isError","error"];function _9({api:e,moduleOptions:{batch:t,hooks:{useDispatch:n,useSelector:i,useStore:o},unstable__sideEffectsInRender:l,createSelector:u},serializeQueryArgs:f,context:h}){const p=l?A=>A():E.useEffect;return{buildQueryHooks:D,buildInfiniteQueryHooks:M,buildMutationHook:C,usePrefetch:_};function g(A,k,R){if(k?.endpointName&&A.isUninitialized){const{endpointName:V}=k,B=h.endpointDefinitions[V];R!==ar&&f({queryArgs:k.originalArgs,endpointDefinition:B,endpointName:V})===f({queryArgs:R,endpointDefinition:B,endpointName:V})&&(k=void 0)}let P=A.isSuccess?A.data:k?.data;P===void 0&&(P=A.data);const G=P!==void 0,F=A.isLoading,H=(!k||k.isLoading||k.isUninitialized)&&!G&&F,z=A.isSuccess||G&&(F&&!k?.isError||A.isUninitialized);return{...A,data:P,currentData:A.data,isFetching:F,isLoading:H,isSuccess:z}}function y(A,k,R){if(k?.endpointName&&A.isUninitialized){const{endpointName:V}=k,B=h.endpointDefinitions[V];R!==ar&&f({queryArgs:k.originalArgs,endpointDefinition:B,endpointName:V})===f({queryArgs:R,endpointDefinition:B,endpointName:V})&&(k=void 0)}let P=A.isSuccess?A.data:k?.data;P===void 0&&(P=A.data);const G=P!==void 0,F=A.isLoading,H=(!k||k.isLoading||k.isUninitialized)&&!G&&F,z=A.isSuccess||F&&G;return{...A,data:P,currentData:A.data,isFetching:F,isLoading:H,isSuccess:z}}function _(A,k){const R=n(),P=cf(k);return E.useCallback((G,F)=>R(e.util.prefetch(A,G,{...P,...F})),[A,R,P])}function b(A,k,{refetchOnReconnect:R,refetchOnFocus:P,refetchOnMountOrArgChange:G,skip:F=!1,pollingInterval:H=0,skipPollingIfUnfocused:z=!1,...V}={}){const{initiate:B}=e.endpoints[A],te=n(),ue=E.useRef(void 0);if(!ue.current){const me=te(e.internalActions.internal_getRTKQSubscriptions());ue.current=me}const U=dy(F?ar:k),J=cf({refetchOnReconnect:R,refetchOnFocus:P,pollingInterval:H,skipPollingIfUnfocused:z}),ne=V.initialPageParam,ae=cf(ne),N=E.useRef(void 0);let{queryCacheKey:K,requestId:le}=N.current||{},ie=!1;K&&le&&(ie=ue.current.isRequestSubscribed(K,le));const de=!ie&&N.current!==void 0;return p(()=>{de&&(N.current=void 0)},[de]),p(()=>{const me=N.current;if(U===ar){me?.unsubscribe(),N.current=void 0;return}const pe=N.current?.subscriptionOptions;if(!me||me.arg!==U){me?.unsubscribe();const Ae=te(B(U,{subscriptionOptions:J,forceRefetch:G,...lD(h.endpointDefinitions[A])?{initialPageParam:ae}:{}}));N.current=Ae}else J!==pe&&me.updateSubscriptionOptions(J)},[te,B,G,U,J,de,ae,A]),[N,te,B,J]}function w(A,k){return(P,{skip:G=!1,selectFromResult:F}={})=>{const{select:H}=e.endpoints[A],z=dy(G?ar:P),V=E.useRef(void 0),B=E.useMemo(()=>u([H(z),(ne,ae)=>ae,ne=>z],k,{memoizeOptions:{resultEqualityCheck:Ec}}),[H,z]),te=E.useMemo(()=>F?u([B],F,{devModeChecks:{identityFunctionCheck:"never"}}):B,[B,F]),ue=i(ne=>te(ne,V.current),Ec),U=o(),J=B(U.getState(),V.current);return v9(()=>{V.current=J},[J]),ue}}function I(A){E.useEffect(()=>()=>{A.current?.unsubscribe?.(),A.current=void 0},[A])}function T(A){if(!A.current)throw new Error(pr(38));return A.current.refetch()}function D(A){const k=(G,F={})=>{const[H]=b(A,G,F);return I(H),E.useMemo(()=>({refetch:()=>T(H)}),[H])},R=({refetchOnReconnect:G,refetchOnFocus:F,pollingInterval:H=0,skipPollingIfUnfocused:z=!1}={})=>{const{initiate:V}=e.endpoints[A],B=n(),[te,ue]=E.useState(uy),U=E.useRef(void 0),J=cf({refetchOnReconnect:G,refetchOnFocus:F,pollingInterval:H,skipPollingIfUnfocused:z});p(()=>{const K=U.current?.subscriptionOptions;J!==K&&U.current?.updateSubscriptionOptions(J)},[J]);const ne=E.useRef(J);p(()=>{ne.current=J},[J]);const ae=E.useCallback(function(K,le=!1){let ie;return t(()=>{U.current?.unsubscribe(),U.current=ie=B(V(K,{subscriptionOptions:ne.current,forceRefetch:!le})),ue(K)}),ie},[B,V]),N=E.useCallback(()=>{U.current?.queryCacheKey&&B(e.internalActions.removeQueryResult({queryCacheKey:U.current?.queryCacheKey}))},[B]);return E.useEffect(()=>()=>{U?.current?.unsubscribe()},[]),E.useEffect(()=>{te!==uy&&!U.current&&ae(te,!0)},[te,ae]),E.useMemo(()=>[ae,te,{reset:N}],[ae,te,N])},P=w(A,g);return{useQueryState:P,useQuerySubscription:k,useLazyQuerySubscription:R,useLazyQuery(G){const[F,H,{reset:z}]=R(G),V=P(H,{...G,skip:H===uy}),B=E.useMemo(()=>({lastArg:H}),[H]);return E.useMemo(()=>[F,{...V,reset:z},B],[F,V,z,B])},useQuery(G,F){const H=k(G,F),z=P(G,{selectFromResult:G===ar||F?.skip?void 0:aT,...F}),V=fy(z,...hy);return E.useDebugValue(V),E.useMemo(()=>({...z,...H}),[z,H])}}}function M(A){const k=(P,G={})=>{const[F,H,z,V]=b(A,P,G),B=E.useRef(V);p(()=>{B.current=V},[V]);const te=E.useCallback(function(J,ne){let ae;return t(()=>{F.current?.unsubscribe(),F.current=ae=H(z(J,{subscriptionOptions:B.current,direction:ne}))}),ae},[F,H,z]);I(F);const ue=dy(G.skip?ar:P),U=E.useCallback(()=>T(F),[F]);return E.useMemo(()=>({trigger:te,refetch:U,fetchNextPage:()=>te(ue,"forward"),fetchPreviousPage:()=>te(ue,"backward")}),[U,te,ue])},R=w(A,y);return{useInfiniteQueryState:R,useInfiniteQuerySubscription:k,useInfiniteQuery(P,G){const{refetch:F,fetchNextPage:H,fetchPreviousPage:z}=k(P,G),V=R(P,{selectFromResult:P===ar||G?.skip?void 0:aT,...G}),B=fy(V,...hy,"hasNextPage","hasPreviousPage");return E.useDebugValue(B),E.useMemo(()=>({...V,fetchNextPage:H,fetchPreviousPage:z,refetch:F}),[V,H,z,F])}}}function C(A){return({selectFromResult:k,fixedCacheKey:R}={})=>{const{select:P,initiate:G}=e.endpoints[A],F=n(),[H,z]=E.useState();E.useEffect(()=>()=>{H?.arg.fixedCacheKey||H?.reset()},[H]);const V=E.useCallback(function(K){const le=F(G(K,{fixedCacheKey:R}));return z(le),le},[F,G,R]),{requestId:B}=H||{},te=E.useMemo(()=>P({fixedCacheKey:R,requestId:H?.requestId}),[R,H,P]),ue=E.useMemo(()=>k?u([te],k):te,[k,te]),U=i(ue,Ec),J=R==null?H?.arg.originalArgs:void 0,ne=E.useCallback(()=>{t(()=>{H&&z(void 0),R&&F(e.internalActions.removeMutationResult({requestId:B,fixedCacheKey:R}))})},[F,R,H,B]),ae=fy(U,...hy,"endpointName");E.useDebugValue(ae);const N=E.useMemo(()=>({...U,originalArgs:J,reset:ne}),[U,J,ne]);return E.useMemo(()=>[V,N],[V,N])}}}var b9=Symbol(),S9=({batch:e=uk,hooks:t={useDispatch:FT,useSelector:qT,useStore:HT},createSelector:n=Si,unstable__sideEffectsInRender:i=!1,...o}={})=>({name:b9,init(l,{serializeQueryArgs:u},f){const h=l,{buildQueryHooks:p,buildInfiniteQueryHooks:g,buildMutationHook:y,usePrefetch:_}=_9({api:l,moduleOptions:{batch:e,hooks:t,unstable__sideEffectsInRender:i,createSelector:n},serializeQueryArgs:u,context:f});return yc(h,{usePrefetch:_}),yc(f,{batch:e}),{injectEndpoint(b,w){if(d9(w)){const{useQuery:I,useLazyQuery:T,useLazyQuerySubscription:D,useQueryState:M,useQuerySubscription:C}=p(b);yc(h.endpoints[b],{useQuery:I,useLazyQuery:T,useLazyQuerySubscription:D,useQueryState:M,useQuerySubscription:C}),l[`use${lf(b)}Query`]=I,l[`useLazy${lf(b)}Query`]=T}if(f9(w)){const I=y(b);yc(h.endpoints[b],{useMutation:I}),l[`use${lf(b)}Mutation`]=I}else if(lD(w)){const{useInfiniteQuery:I,useInfiniteQuerySubscription:T,useInfiniteQueryState:D}=g(b);yc(h.endpoints[b],{useInfiniteQuery:I,useInfiniteQuerySubscription:T,useInfiniteQueryState:D}),l[`use${lf(b)}InfiniteQuery`]=I}}}}}),w9=oD(aD(),S9());const cD=e=>({id:String(e.id),name:e.name,imageUrl:e.picture_url,display:!0}),x9=e=>e.results.map(cD).sort((n,i)=>n.name.localeCompare(i.name)),uD=e=>{const t=e.image.original_height||48,n=e.image.original_width||48;return{id:String(e.id),name:e.name,iconUrl:e.image.url.replace("{height}",t).replace("{width}",n)}},E9=e=>e.results.map(uD).sort((n,i)=>n.name.localeCompare(i.name)),T9=e=>{const t=e.instructors[0],n=t?cD(t):{id:"0",name:"Unknown Instructor",imageUrl:"",display:!1},i=Me.getBookableStatus(e),o=new Date(e.starts_at),u=(new Date(e.ends_at).getTime()-o.getTime())/1e3;return Number.isNaN(u)&&qv("Computed invalid duration",{extra:{rawClass:e}}),{...e,id:String(e.id),name:e.name,start:e.starts_at,end:e.ends_at,customerUrl:e.customer_url,duration:u,discipline:uD(e.offering_type.category),instructor:n,status:i}},C9=e=>e.results.map(T9),R9=["id","name","max_occupancy","occupancy","attending_count","starts_at","ends_at","waiting_count","active_registration_status","category.name","venue","customer_url","description"],A9=["instructors","active_registration_status","category","offering_type","offering_type.category","venue","suggested_booking_action"],If=w9({reducerPath:"pelotonApi",baseQuery:YH({baseUrl:`${Me.PELOTON_CORS_PROXY}/${Me.PELOTON_API_BASE}/`}),endpoints:e=>({getClasses:e.query({queryFn:async t=>{try{const n=Me.getPelotonHeaders(t),i=Me.buildEventsUrl({fields:R9,expand:A9,corsProxy:!0}),o=await Me.fetchAllPelotonPages(i,async l=>{const u=await fetch(l,{headers:n});if(!u.ok)throw new Error(`${u.status}: ${await u.text()}`);return u.json()},!0);return{data:C9({results:o})}}catch(n){return{error:{status:"FETCH_ERROR",error:String(n)}}}}}),getDisciplines:e.query({query:t=>({url:`offering_type_categories?${new URLSearchParams({sort:"name"})}`,method:"GET",headers:Me.getPelotonHeaders(t)}),transformResponse:t=>E9(t)}),getInstructors:e.query({query:t=>({url:`instructors?${new URLSearchParams({sort:"name"})}`,method:"GET",headers:Me.getPelotonHeaders(t)}),transformResponse:t=>x9(t)})})}),{useGetClassesQuery:dD,useGetDisciplinesQuery:ub,useGetInstructorsQuery:db}=If,I9=e=>{if("error"in e&&typeof e.error=="string")return e.error;if("message"in e&&typeof e.message=="string")return e.message},D9=O.label`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  cursor: pointer;
  user-select: none;
  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.$checked?`${e.theme.colors.accent}0a`:"transparent"};
  transition: background-color 0.15s;

  ${KI}
`,O9=O.span`
  color: ${e=>e.theme.colors.main};
  font-size: 14px;
`,N9=O.input`
  accent-color: ${e=>e.theme.colors.accent};
`,fD=({value:e,checked:t,onChange:n,label:i,icon:o})=>{const l=E.useId();return v.jsxs(D9,{$checked:t,htmlFor:l,children:[v.jsx(N9,{type:"checkbox",id:l,value:e,checked:t,onChange:n}),o,v.jsx(O9,{children:i})]})},lT=O.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`,cT=O.legend`
  font-weight: 600;
  font-size: 18px;
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,uT=O.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  margin: 0 0 12px;
`,dT=O.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
`,uf=O.button`
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
`,hD=O.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 4px;
  max-height: 320px;
  overflow-y: auto;
  padding: 4px;
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};

  ${Te`
    grid-template-columns: 1fr;
    max-height: 260px;
  `}
`,fT=O.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
  margin-left: auto;
`,_h=O.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  padding: 24px;
  text-align: center;
`,pD=O.p`
  color: ${e=>e.theme.colors.error};
  font-size: 14px;
  padding: 16px;
`,mD=O.button`
  border: none;
  background: none;
  color: ${e=>e.theme.colors.accent};
  cursor: pointer;
  font-family: inherit;
  font-size: 14px;
  text-decoration: underline;
  padding: 0;
`,k9=O.div`
  margin-top: 32px;

  ${Te`
    margin-top: 24px;
  `}
`,M9=({studioId:e,selectedInstructors:t,setSelectedInstructors:n,selectedDisciplines:i,setSelectedDisciplines:o})=>{const l=db(e),u=ub(e),f=E.useRef(t),h=E.useRef(i);E.useEffect(()=>{const b=f.current;if(!l.currentData||!Me.isNotEmpty(b))return;const w=new Set(l.currentData.map(T=>T.id)),I=b.filter(T=>w.has(T));I.length<b.length&&(n(I),f.current=I)},[l.currentData,n]),E.useEffect(()=>{const b=h.current;if(!u.currentData||!Me.isNotEmpty(b))return;const w=new Set(u.currentData.map(T=>String(T.id))),I=b.filter(T=>w.has(String(T)));I.length<b.length&&(o(I),h.current=I)},[u.currentData,o]);const p=E.useCallback(b=>{if(!Me.isNotEmpty(t))return;const w=t.includes(b);n(w?t.filter(I=>I!==b):[...t,b])},[t,n]),g=E.useCallback(b=>{if(!Me.isNotEmpty(i))return;const w=i.includes(b);o(w?i.filter(I=>I!==b):[...i,b])},[i,o]),y=Me.isNotEmpty(t),_=Me.isNotEmpty(i);return v.jsxs("div",{children:[v.jsxs(lT,{children:[v.jsx(cT,{children:"Instructors"}),v.jsx(uT,{children:"Filter by specific instructors or get alerts for all of them."}),v.jsxs(dT,{children:[v.jsx(uf,{type:"button",$active:!y,onClick:()=>n(null),children:"Any instructor"}),v.jsx(uf,{type:"button",$active:y,onClick:()=>{y||n([])},children:"Specific instructors"}),y&&t.length>0&&v.jsxs(fT,{children:[t.length," selected"]})]}),y&&v.jsx(L9,{query:l,selectedIds:t,onToggle:p})]}),v.jsx(k9,{}),v.jsxs(lT,{children:[v.jsx(cT,{children:"Disciplines"}),v.jsx(uT,{children:"Filter by class type or get alerts for everything."}),v.jsxs(dT,{children:[v.jsx(uf,{type:"button",$active:!_,onClick:()=>o(null),children:"Any discipline"}),v.jsx(uf,{type:"button",$active:_,onClick:()=>{_||o([])},children:"Specific disciplines"}),_&&i.length>0&&v.jsxs(fT,{children:[i.length," selected"]})]}),_&&v.jsx(P9,{query:u,selectedIds:i,onToggle:g})]})]})},L9=E.memo(({query:e,selectedIds:t,onToggle:n})=>e.isLoading?v.jsx(_h,{children:"Loading instructors…"}):e.error?v.jsxs(pD,{children:["Couldn't load instructors."," ",v.jsx(mD,{type:"button",onClick:e.refetch,children:"Try again"})]}):!e.currentData||e.currentData.length===0?v.jsx(_h,{children:"No instructors found for this studio."}):v.jsx(hD,{role:"group","aria-label":"Instructors",children:e.currentData.map(i=>v.jsx(fD,{value:i.id,checked:t.includes(i.id),onChange:()=>n(i.id),label:i.name,icon:v.jsx(sb,{instructor:i,size:28})},i.id))})),P9=E.memo(({query:e,selectedIds:t,onToggle:n})=>e.isLoading?v.jsx(_h,{children:"Loading disciplines…"}):e.error?v.jsxs(pD,{children:["Couldn't load disciplines."," ",v.jsx(mD,{type:"button",onClick:e.refetch,children:"Try again"})]}):!e.currentData||e.currentData.length===0?v.jsx(_h,{children:"No disciplines found for this studio."}):v.jsx(hD,{role:"group","aria-label":"Disciplines",children:e.currentData.map(i=>v.jsx(fD,{value:i.id,checked:t.includes(i.id),onChange:()=>n(i.id),label:i.name,icon:v.jsx(gh,{discipline:i,size:24})},i.id))})),j9=O.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 16px;
  margin-bottom: 24px;

  ${Te`
    padding: 0;
    margin-bottom: 12px;
  `}
`,U9=O.button`
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

  ${Te`
    width: 12px;
    height: 12px;
  `}
`,$9=O.div`
  flex: 1;
  height: 2px;
  background-color: ${e=>e.$filled?e.theme.colors.accent:e.theme.borderColor};
  transition: background-color 0.2s;
`,z9=O.span`
  position: absolute;
  top: 18px;
  font-size: 10px;
  white-space: nowrap;
  color: ${e=>e.$state==="active"?e.theme.colors.main:e.theme.colors.secondary};
  font-weight: ${e=>e.$state==="active"?600:400};

  ${Te`
    display: none;
  `}
`,B9=O.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`,H9=({steps:e,currentStep:t,onStepClick:n})=>v.jsx(j9,{role:"navigation","aria-label":"Editor steps",children:e.map((i,o)=>{const l=o<t?"completed":o===t?"active":"upcoming";return v.jsxs(B9,{style:{flex:o<e.length-1?1:0},children:[v.jsxs("div",{style:{display:"flex",alignItems:"center",width:"100%"},children:[v.jsx(U9,{$state:l,onClick:()=>{l!=="upcoming"&&n(o)},"aria-label":`Step ${o+1}: ${i}`,"aria-current":l==="active"?"step":void 0,type:"button"}),o<e.length-1&&v.jsx($9,{$filled:o<t})]}),v.jsx(z9,{$state:l,children:i})]},o)})}),ss=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],bh=new Array(48).fill(null).map((e,t)=>{const n=t*30,i=new Date;i.setHours(Math.floor(n/60)),i.setMinutes(n%60);const o=new Intl.DateTimeFormat(void 0,{hour:"numeric",minute:"numeric"});return{minutes:n,label:o.format(i)}}),F9=O.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`,q9=O.legend`
  font-weight: 600;
  font-size: 18px;
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,V9=O.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  margin: 0 0 20px;
`,G9=O.div`
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  overflow: hidden;
`,Js=O.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 12px 16px;
  gap: 8px;

  &:not(:last-child) {
    border-bottom: 1px solid ${e=>e.theme.borderColor};
  }

  ${Te`
    flex-direction: column;
    gap: 4px;
  `}
`,eo=O.span`
  font-size: 13px;
  font-weight: 500;
  color: ${e=>e.theme.colors.secondary};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  flex-shrink: 0;
`,Ki=O.span`
  font-size: 14px;
  color: ${e=>e.theme.colors.main};
  text-align: right;
  word-break: break-word;

  ${Te`
    text-align: left;
  `}
`,Y9=O.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  justify-content: flex-end;

  ${Te`
    justify-content: flex-start;
  `}
`,W9=O.span`
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  background-color: ${e=>e.theme.colors.secondarySurface};
  color: ${e=>e.theme.colors.main};
`,Q9=e=>{if(Me.isAllDay(e))return"All day";const t=bh.find(i=>i.minutes===e.startMin),n=bh.find(i=>i.minutes===e.endMin);return!t||!n?"All day":`${t.label} – ${n.label}`},K9=e=>{switch(e){case"free":return"Open spots only";case"waitlist":return"Open spots or waitlist";case"full":return"Any status"}},X9=({name:e,studioId:t,maxStatus:n,selectedInstructors:i,selectedDisciplines:o,timeRanges:l})=>{const u=Me.STUDIOS[t],f=ss.filter((g,y)=>l[y]),h=l.find(Boolean),p=l.filter(Boolean).every(g=>g&&h&&g.startMin===h.startMin&&g.endMin===h.endMin);return v.jsxs(F9,{children:[v.jsx(q9,{children:"Review your alert"}),v.jsx(V9,{children:"Double-check everything looks right, then hit Save."}),v.jsxs(G9,{children:[e.trim()&&v.jsxs(Js,{children:[v.jsx(eo,{children:"Name"}),v.jsx(Ki,{children:e.trim()})]}),v.jsxs(Js,{children:[v.jsx(eo,{children:"Studio"}),v.jsx(Ki,{children:u?.location||t})]}),v.jsxs(Js,{children:[v.jsx(eo,{children:"Alert on"}),v.jsx(Ki,{children:K9(n)})]}),v.jsxs(Js,{children:[v.jsx(eo,{children:"Instructors"}),v.jsx(Ki,{children:i===null?"Any instructor":i.length===0?"None selected":`${i.length} selected`})]}),v.jsxs(Js,{children:[v.jsx(eo,{children:"Disciplines"}),v.jsx(Ki,{children:o===null?"Any discipline":o.length===0?"None selected":`${o.length} selected`})]}),v.jsxs(Js,{children:[v.jsx(eo,{children:"Days"}),f.length===0?v.jsx(Ki,{children:"No days selected"}):f.length===7?v.jsx(Ki,{children:"Every day"}):v.jsx(Y9,{children:f.map(g=>v.jsx(W9,{children:g.slice(0,3)},g))})]}),h&&v.jsxs(Js,{children:[v.jsx(eo,{children:"Time window"}),v.jsx(Ki,{children:p?Q9(h):"Varies by day"})]})]})]})},Z9=O.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`,J9=O.legend`
  font-weight: 600;
  font-size: 18px;
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,e7=O.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  margin: 0 0 16px;
`,t7=O.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,n7=O.div`
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

  ${Te`
    flex-wrap: wrap;
    gap: 8px;
    min-height: 0;
  `}
`,r7=O.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
  font-weight: 500;
  min-width: 120px;
  color: ${e=>e.theme.colors.main};

  ${Te`
    min-width: 0;
    flex: 1;
  `}
`,i7=O.input`
  accent-color: ${e=>e.theme.colors.accent};
`,s7=O.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: auto;

  ${Te`
    margin-left: 28px;
    width: calc(100% - 28px);
  `}
`,o7=O.label`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
`,a7=O.input`
  accent-color: ${e=>e.theme.colors.accent};
`,hT=O.select`
  ${xs}
  font-family: inherit;
  font-size: 13px;
  padding: 6px 8px;
  background-color: ${e=>e.theme.colors.mainSurface};
  cursor: pointer;
  color: ${e=>e.theme.colors.main};

  ${Te`
    flex: 1;
    min-width: 0;
  `}
`,l7=O.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,c7=O.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  flex-wrap: wrap;
`,py=O.button`
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
`,u7=({timeRanges:e,setTimeRanges:t})=>{const n=e.filter(Boolean).length,i=E.useRef(ss.map(()=>{})),o=E.useCallback(g=>{const y=[...e];y[g]=y[g]?null:Me.DEFAULT_TIME_RANGE,t(y)},[e,t]),l=E.useCallback(g=>{const y=e[g];if(!y)return;const _=[...e];Me.isAllDay(y)?_[g]=i.current[g]??Me.SPECIFIC_DEFAULT_TIME_RANGE:(i.current[g]=y,_[g]=Me.ALL_DAY_TIME_RANGE),t(_)},[e,t]),u=E.useCallback((g,y,_)=>{const b=[...e],w=b[g];w&&(y==="startMin"?b[g]={startMin:_,endMin:w.endMin===0||w.endMin>=_?w.endMin:0}:b[g]={...w,endMin:_},t(b))},[e,t]),f=E.useCallback(()=>{t(ss.map(()=>Me.DEFAULT_TIME_RANGE))},[t]),h=E.useCallback(()=>{t(ss.map(()=>null))},[t]),p=E.useCallback(()=>{const g=e.find(Boolean);g&&t(e.map(y=>y?{...g}:null))},[e,t]);return v.jsxs(Z9,{children:[v.jsx(J9,{children:"Days & times"}),v.jsx(e7,{children:"Choose which days and time windows to monitor. Alerts fire when a matching class falls within these windows (in the studio's timezone)."}),v.jsxs(c7,{children:[v.jsx(py,{type:"button",onClick:f,children:"Select all days"}),n>0&&v.jsx(py,{type:"button",onClick:h,children:"Clear all"}),n>1&&v.jsx(py,{type:"button",onClick:p,children:"Copy time to all"})]}),v.jsx(t7,{children:ss.map((g,y)=>{const _=e[y],b=!!_&&Me.isAllDay(_);return v.jsxs(n7,{$enabled:!!_,children:[v.jsxs(r7,{htmlFor:`day-${y}`,children:[v.jsx(i7,{type:"checkbox",id:`day-${y}`,checked:!!_,onChange:()=>o(y)}),g]}),_&&v.jsxs(s7,{children:[v.jsxs(o7,{htmlFor:`allday-${y}`,children:[v.jsx(a7,{type:"checkbox",id:`allday-${y}`,checked:b,onChange:()=>l(y)}),"All day"]}),!b&&v.jsxs(v.Fragment,{children:[v.jsx(hT,{value:_.startMin,"aria-label":`${g} start time`,onChange:({target:w})=>{const I=parseInt(w.value);Number.isNaN(I)||u(y,"startMin",I)},children:bh.map(w=>v.jsx("option",{value:w.minutes,children:w.label},w.minutes))}),v.jsx(l7,{children:"to"}),v.jsx(hT,{value:_.endMin,"aria-label":`${g} end time`,onChange:({target:w})=>{const I=parseInt(w.value);Number.isNaN(I)||u(y,"endMin",I)},children:bh.map(w=>v.jsx("option",{value:w.minutes,disabled:w.minutes>0&&w.minutes<_.startMin,children:w.label},w.minutes))})]})]})]},g)})})]})},Do=Si([e=>e.studioSelector],e=>e.studioId),d7=e=>{const t=wi(),n=ct(Do);E.useEffect(()=>{e.studioId?t(ph(e.studioId)):t(ph(XI(Me.DEFAULT_STUDIO_ID)))},[e.studioId,t]);const[i,o]=E.useState(e.name||""),[l,u]=E.useState(e.instructors||null),[f,h]=E.useState(e.disciplines||null),[p,g]=E.useState(()=>e.timeRanges||ss.map(()=>Me.DEFAULT_TIME_RANGE)),[y,_]=E.useState(e.maxStatus||"free"),b=E.useRef(e.studioId);return E.useEffect(()=>{n&&b.current&&n!==b.current&&(u(w=>w&&[]),h(w=>w&&[])),b.current=n},[n]),{selectedStudioId:n,name:i,setName:o,selectedInstructors:l,setSelectedInstructors:u,selectedDisciplines:f,setSelectedDisciplines:h,timeRanges:p,setTimeRanges:g,maxStatus:y,setMaxStatus:_}},my=["Basics","Filters","Schedule","Review"],f7=O.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
`,h7=O.div`
  padding: 24px 24px 0;

  ${Te`
    padding: 16px 16px 0;
  `}
`,p7=O.h2`
  margin: 0 0 4px;
  font-size: 22px;
  color: ${e=>e.theme.colors.main};
`,m7=O.p`
  margin: 0 0 20px;
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
`,g7=O.div`
  padding: 8px 24px 24px;
  flex: 1;
  overflow-y: auto;

  ${Te`
    padding: 8px 16px 16px;
  `}
`,y7=O.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding: 16px 24px;
  border-top: 1px solid ${e=>e.theme.borderColor};
  background-color: ${e=>e.theme.colors.mainSurface};

  ${Te`
    padding: 12px 16px;
  `}
`,df=O.button`
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

  ${Te`
    padding: 10px 16px;
    font-size: 13px;
  `}
`,v7=O.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,_7=O.span`
  font-size: 13px;
  color: ${e=>e.$error?e.theme.colors.error:e.theme.colors.secondary};

  ${Te`
    font-size: 12px;
  `}
`,b7=({alertToEdit:e,onSave:t,onCancel:n})=>{const i=wi(),o=ct(yu),[l,u]=E.useState(0),[f,h]=E.useState(!1),[p,g]=E.useState(),{selectedStudioId:y,name:_,setName:b,selectedInstructors:w,setSelectedInstructors:I,selectedDisciplines:T,setSelectedDisciplines:D,timeRanges:M,setTimeRanges:C,maxStatus:A,setMaxStatus:k}=d7(e),R=l<my.length-1,P=l>0,G=l===my.length-1,F=E.useCallback(()=>{R&&u(B=>B+1)},[R]),H=E.useCallback(()=>{P&&u(B=>B-1)},[P]),z=E.useCallback(async()=>{if(!y||!o)return;h(!0),g(void 0);const B={id:e.id||null,created:e.created||new Date().getTime(),..._.trim()?{name:_.trim()}:{},studioId:y,instructors:w,disciplines:T,timeRanges:M,maxStatus:A};try{B.id?await _H(o,B):await vH(o,B),t()}catch(te){Nr(te),g("Something went wrong. Please try again."),h(!1)}},[e.id,e.created,_,y,o,w,T,M,A,t]),V=!!e.id;return v.jsxs(f7,{children:[v.jsxs(h7,{children:[v.jsx(p7,{children:V?"Edit alert":"New alert"}),v.jsx(m7,{children:V?"Update your alert settings below.":"Set up a new alert in a few quick steps."}),v.jsx(H9,{steps:my,currentStep:l,onStepClick:u})]}),v.jsxs(g7,{children:[l===0&&v.jsx(NH,{name:_,onNameChange:b,studioId:y,onStudioChange:B=>i(ph(B)),maxStatus:A,onStatusChange:k}),l===1&&v.jsx(M9,{studioId:y,selectedInstructors:w,setSelectedInstructors:I,selectedDisciplines:T,setSelectedDisciplines:D}),l===2&&v.jsx(u7,{timeRanges:M,setTimeRanges:C}),l===3&&v.jsx(X9,{name:_,studioId:y,maxStatus:A,selectedInstructors:w,selectedDisciplines:T,timeRanges:M})]}),v.jsxs(y7,{children:[v.jsx("div",{children:P?v.jsx(df,{type:"button",onClick:H,children:"Back"}):v.jsx(df,{type:"button",onClick:n,children:"Cancel"})}),v.jsxs(v7,{children:[p&&v.jsx(_7,{$error:!0,children:p}),G?v.jsx(df,{type:"button",$primary:!0,onClick:z,disabled:f,children:f?"Saving…":"Save alert"}):v.jsx(df,{type:"button",$primary:!0,onClick:F,children:"Continue"})]})]})]})},S7=()=>{const e=_i(),t=Co(),n=e.state||{};return v.jsx(b7,{alertToEdit:n,onSave:()=>{t(rt.ALERTS)},onCancel:()=>{t(rt.ALERTS)}})},gD=E.createContext({state:"idle"}),w7=({children:e,userId:t})=>{const[n,i]=E.useState({state:"idle"});return E.useEffect(()=>{i({state:"loading"});const o=wn;if(!o)return i({state:"failed",error:new Error("No database set up")}),()=>{};const l=tr(o,`messagingTokens/${t}`),u=np(l,f=>{const h=f.val();i({state:"fulfilled",data:h||{}})},f=>{i({state:"failed",error:f})});return()=>u()},[t]),v.jsx(gD.Provider,{value:n,children:e})},yD=E.createContext({state:"idle"}),x7=({children:e,userId:t})=>{const[n,i]=E.useState({state:"idle"});return E.useEffect(()=>{i({state:"loading"});const o=wn;if(!o)return i({state:"failed",error:new Error("No database set up")}),()=>{};const l=tr(o,Me.PATHS.alertPreferences(t)),u=np(l,f=>{const h=f.val();i({state:"fulfilled",data:h||{}})},f=>{i({state:"failed",error:f})});return()=>u()},[t]),v.jsx(yD.Provider,{value:n,children:e})},E7=({children:e,userId:t})=>{const[n,i]=E.useState({state:"idle"});return E.useEffect(()=>{i({state:"loading"});const o=wn;if(!o)return i({state:"failed",error:new Error("No database set up")}),()=>{};const l=tr(o,Me.PATHS.alerts(t)),u=np(l,f=>{const h=f.val();if(!h){i({state:"fulfilled",data:[]});return}const p=Object.entries(h).map(([g,y])=>({...y,timeRanges:new Array(ss.length).fill(null).map((_,b)=>y.timeRanges[b]||null),id:g}));i({state:"fulfilled",data:p})},f=>{i({state:"failed",error:f})});return()=>u()},[t]),v.jsx(ib.Provider,{value:n,children:e})},T7=O.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 16px;

  ${Te`
    padding: 8px;
  `}
`,C7=O.div`
  overflow: auto;
  height: 100%;
`,R7=O.div`
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 48px 32px;
  text-align: center;
  max-width: 440px;
  margin: 40px auto 0;

  ${Te`
    padding: 32px 20px;
    margin-top: 16px;
  `}
`,A7=O.div`
  font-size: 36px;
  margin-bottom: 16px;
  line-height: 1;
`,I7=O.h1`
  font-size: 20px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
  margin: 0 0 10px;
`,D7=O.p`
  font-size: 15px;
  color: ${e=>e.theme.colors.secondary};
  line-height: 1.55;
  margin: 0 0 24px;
`,O7=O(_s)`
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
`,N7=O.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
  padding: 32px 0;
  margin: 0;
`,k7=({children:e})=>{const t=ct(el);return t.state==="loading"?v.jsx(N7,{children:"Loading…"}):t.state!=="fulfilled"||!t.data?v.jsxs(R7,{children:[v.jsx(A7,{children:"🔔"}),v.jsx(I7,{children:"Sign in to use Alerts"}),v.jsx(D7,{children:"Track class availability and get push notifications when a spot opens up for the classes you care about."}),v.jsx(O7,{to:rt.SIGN_IN,children:"Sign in"})]}):e(t.data.id)},M7=e=>v.jsx(uo,{children:v.jsx(C7,{children:v.jsx(T7,{children:v.jsx(k7,{...e})})})}),L7=({userId:e})=>v.jsx(E7,{userId:e,children:v.jsx(x7,{userId:e,children:v.jsx(w7,{userId:e,children:v.jsx(BM,{})})})}),P7=()=>v.jsx(M7,{children:e=>v.jsx(L7,{userId:e})}),j7=async(e,t)=>{const n=wn;if(!n)throw new Error("No Firebase database connection to use");await lI(tr(n,Me.PATHS.alertPreferences(e)),t)},U7=O.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,$7=O.div`
  display: flex;
  align-items: center;
  gap: 12px;

  ${Te`
    flex-direction: column;
    align-items: stretch;
  `}
`,z7=O.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,B7=O.label`
  font-size: 13px;
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
`,H7=O.input`
  ${xs}
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

  ${Te`
    width: 100%;
  `}
`,F7=O.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,q7=O.button`
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

  ${Te`
    padding: 10px 20px;
  `}
`,V7=O.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
  padding: 16px;
`,G7=O.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.error};
  text-align: center;
  padding: 16px;
`,Y7=({alertPreferences:e})=>{const t=ct(yu),[n,i]=E.useState(e.notificationDelayMin||5),[o,l]=E.useState(!1),[u,f]=E.useState(!1),h=E.useCallback(async p=>{if(p.preventDefault(),!!t){l(!0),f(!1);try{await j7(t,{lastUpdated:new Date().getTime(),notificationDelayMin:n}),f(!0),setTimeout(()=>f(!1),2e3)}catch{}finally{l(!1)}}},[t,n]);return v.jsxs(U7,{onSubmit:h,children:[v.jsxs(z7,{children:[v.jsx(B7,{htmlFor:"delay-input",children:"Cooldown (minutes)"}),v.jsx(F7,{children:"Minimum delay between consecutive alert notifications"})]}),v.jsxs($7,{children:[v.jsx(H7,{id:"delay-input",type:"number",min:0,value:n,onChange:p=>{const g=parseInt(p.target.value,10);Number.isNaN(g)||i(g)}}),v.jsx(q7,{type:"submit",disabled:o,$saved:u,children:o?"Saving…":u?"Saved ✓":"Save"})]})]})},W7=()=>{const e=E.useContext(yD);return e.state==="idle"||e.state==="loading"?v.jsx(V7,{children:"Loading preferences…"}):e.state==="failed"?v.jsx(G7,{children:"Failed to load preferences."}):v.jsx(Y7,{alertPreferences:e.data},e.data.lastUpdated)},Q7=e=>{if(!e)return"Unknown device";const t=K7(e),n=X7(e);return t&&n?`${t} on ${n}`:t||n||"Unknown device"},K7=e=>{if(e.includes("Edg/"))return"Edge";if(e.includes("OPR/")||e.includes("Opera"))return"Opera";if(e.includes("CriOS"))return"Chrome";if(e.includes("FxiOS"))return"Firefox";if(e.includes("Chrome/")&&!e.includes("Chromium"))return"Chrome";if(e.includes("Firefox/"))return"Firefox";if(e.includes("Safari/")&&!e.includes("Chrome"))return"Safari"},X7=e=>{if(/iPhone/.test(e))return"iPhone";if(/iPad/.test(e))return"iPad";if(/iPod/.test(e))return"iPod";if(/Android/.test(e))return"Android";if(/CrOS/.test(e))return"ChromeOS";if(/Mac OS X|Macintosh/.test(e))return"macOS";if(/Windows/.test(e))return"Windows";if(/Linux/.test(e))return"Linux"},Z7=O.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,J7=O.li`
  ${xs}
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  transition: box-shadow 0.15s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 12px;
  }

  ${Te`
    flex-wrap: wrap;
    padding: 10px 12px;
    gap: 8px;
  `}
`,eF=O.span`
  font-size: 20px;
  flex-shrink: 0;
`,tF=O.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
`,nF=O.span`
  font-weight: 500;
  font-size: 14px;
  color: ${e=>e.theme.colors.main};
  display: flex;
  align-items: center;
  gap: 6px;
`,rF=O.span`
  padding: 1px 6px;
  border-radius: 10px;
  font-size: 10px;
  font-weight: 600;
  background-color: ${e=>e.theme.colors.accent}14;
  color: ${e=>e.theme.colors.accent};
`,iF=O.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,sF=O.button`
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

  ${Te`
    margin-left: auto;
  `}
`,oF=O.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
  padding: 16px;
`,aF=O.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
  padding: 16px;
`,lF=O.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.error};
  text-align: center;
  padding: 16px;
`,cF=e=>e?/iPhone|iPad|iPod/i.test(e)||/Android/i.test(e)?"📱":/Windows/i.test(e)||/Macintosh|Mac OS/i.test(e)?"💻":/Linux/i.test(e)?"🖥️":"💻":"💻",uF=E.memo(({deviceToken:e,device:t,isCurrentDevice:n,onDelete:i})=>{const o=E.useMemo(()=>{const f=new Date(t.timestamp).getFullYear()===new Date().getFullYear();return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"numeric",...f?{}:{year:"numeric"}}).format(t.timestamp)},[t.timestamp]),l=Q7(t.userAgent);return v.jsxs(J7,{children:[v.jsx(eF,{children:cF(t.userAgent)}),v.jsxs(tF,{children:[v.jsxs(nF,{children:[l,n&&v.jsx(rF,{children:"This device"})]}),v.jsxs(iF,{children:["Last active ",o]})]}),v.jsx(sF,{type:"button",onClick:()=>i(e),"aria-label":`Remove ${l}`,children:"Remove"})]})}),dF=({devices:e})=>{const n=E.useContext(vu).token,i=ct(yu),o=E.useCallback(l=>{i&&uI(i,l).catch(console.error)},[i]);return e.length===0?v.jsx(oF,{children:"No devices registered for push notifications yet."}):v.jsx(Z7,{children:e.map(([l,u])=>v.jsx(uF,{deviceToken:l,device:u,isCurrentDevice:n!==void 0?l===n:u.userAgent!==void 0&&u.userAgent===navigator.userAgent,onDelete:o},l))})},fF=()=>{const e=E.useContext(gD),t=E.useMemo(()=>e.state==="fulfilled"?Object.entries(e.data).sort(([,n],[,i])=>i.timestamp-n.timestamp):[],[e]);return e.state==="idle"||e.state==="loading"?v.jsx(aF,{children:"Loading devices…"}):e.state==="failed"?v.jsx(lF,{children:"Failed to load devices. Please try again."}):v.jsx(dF,{devices:t})},hF=async(e,t)=>{const n=wn;if(!n)throw new Error("No Firebase database connection to use");await aI(tr(n,Me.PATHS.alert(e,t)))},pT=(e,t,n)=>!e||e.length===0?t:e.length===1?e[0]:e.length===2?`${e[0]} or ${e[1]}`:`${e.length} ${n}`,pF=(e,t)=>{const n=pT(e,"Any Class","Disciplines"),i=pT(t,"Any Instructor","Instructors");return`${n} with ${i}`},mF=O.li`
  ${xs}
  padding: 16px;
  transition: box-shadow 0.15s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 12px;
  }

  ${Te`
    padding: 12px;
  `}
`,gF=O.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;

  ${Te`
    flex-direction: column;
    gap: 8px;
  `}
`,yF=O.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`,vF=O.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`,_F=O.span`
  font-weight: 600;
  font-size: 15px;
  color: ${e=>e.theme.colors.main};
`,bF=O.span`
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 500;
  background-color: ${e=>e.$status==="free"?e.theme.colors.status.free.bg:e.$status==="waitlist"?e.theme.colors.status.waitlist.bg:`${e.theme.colors.error}20`};
  color: ${e=>e.$status==="free"?e.theme.colors.status.free.text:e.$status==="waitlist"?e.theme.colors.status.waitlist.text:e.theme.colors.error};
`,SF=O.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
`,wF=O.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  margin-top: 2px;
`,xF=O.span`
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
`,EF=O.div`
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;

  ${Te`
    align-self: flex-end;
  `}
`,Df=O.button`
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

  &:hover {
    border-color: ${e=>e.theme.colors.accent};
    color: ${e=>e.theme.colors.accent};
  }

  ${Te`
    padding: 6px 10px;
    font-size: 11px;
  `}
`,TF=O(Df)`
  &:hover {
    border-color: ${e=>e.theme.colors.error};
    color: ${e=>e.theme.colors.error};
  }
`,CF=O.span`
  font-size: 11px;
  color: ${e=>e.theme.colors.secondary};
  margin-top: 4px;
`,RF={free:{label:"Open spots",title:"Only alerts when a class has open spots available to book"},waitlist:{label:"Waitlist",title:"Alerts when a class has open spots or waitlist availability"},full:{label:"Any",title:"Alerts regardless of availability status"}},AF=e=>RF[e]||{label:e,title:""},IF=E.memo(({alert:e,onDuplicate:t,onEdit:n})=>{const i=Co(),o=ct(yu),{data:l}=db(e.studioId),{data:u}=ub(e.studioId),f=E.useMemo(()=>{const w=new Date(e.created).getFullYear()===new Date().getFullYear();return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",...w?{}:{year:"numeric"}}).format(e.created)},[e.created]),h=E.useMemo(()=>new Map(l?.map(b=>[b.id,b.name])),[l]),p=E.useMemo(()=>new Map(u?.map(b=>[b.id,b.name])),[u]),g=E.useMemo(()=>{if(e.name)return e.name;const b=Me.isNotEmpty(e.instructors)&&l?e.instructors.map(I=>h.get(I)).filter(I=>!!I):null,w=Me.isNotEmpty(e.disciplines)&&u?e.disciplines.map(I=>p.get(I)).filter(I=>!!I):null;return pF(w,b)},[e.name,e.instructors,e.disciplines,l,u,h,p]),y=Me.STUDIOS[e.studioId]?.location||e.studioId||"No studio",_=AF(e.maxStatus);return v.jsx(mF,{children:v.jsxs(gF,{children:[v.jsxs(yF,{children:[v.jsxs(vF,{children:[v.jsx(_F,{children:g}),v.jsx(bF,{$status:e.maxStatus,title:_.title,children:_.label})]}),v.jsx(SF,{children:y}),v.jsx(wF,{children:ss.map((b,w)=>v.jsx(xF,{$active:!!e.timeRanges[w],title:e.timeRanges[w]?`${b}: monitoring enabled`:`${b}: not monitored`,children:b.charAt(0)},b))}),v.jsxs(CF,{children:["Created ",f]})]}),v.jsxs(EF,{children:[v.jsx(Df,{type:"button",onClick:()=>i(D$(e.id)),"aria-label":"Test alert",children:"Test"}),v.jsx(Df,{type:"button",onClick:()=>n(e),"aria-label":"Edit alert",children:"Edit"}),v.jsx(Df,{type:"button",onClick:()=>t(e),"aria-label":"Duplicate alert",children:"Duplicate"}),v.jsx(TF,{type:"button",onClick:()=>o&&hF(o,e.id),"aria-label":"Delete alert",children:"Delete"})]})]})})}),DF=O.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,OF=({alerts:e,onDuplicate:t,onEdit:n})=>v.jsx(DF,{children:e.map(i=>v.jsx(IF,{alert:i,onDuplicate:t,onEdit:n},i.id))}),NF=O.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px 0;

  ${Te`
    padding: 16px 16px 0;
  `}
`,kF=O.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,MF=O.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
`,LF=O.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
`,PF=O.button`
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

  ${Te`
    padding: 8px 14px;
    font-size: 13px;
  `}
`,jF=O.div`
  padding: 16px 24px 24px;

  ${Te`
    padding: 12px 16px 16px;
  `}
`,UF=O.p`
  margin: 0;
  padding: 24px;
  text-align: center;
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
`,$F=O.p`
  margin: 0;
  padding: 24px;
  text-align: center;
  color: ${e=>e.theme.colors.error};
  font-size: 14px;
`,zF=({onAdd:e,onEdit:t,onDuplicate:n})=>{const i=E.useContext(ib),o=i.state==="loading"||i.state==="idle",l=i.state==="failed",u=i.state==="fulfilled"?i.data:[];return v.jsxs(v.Fragment,{children:[v.jsxs(NF,{children:[v.jsxs(kF,{children:[v.jsx(MF,{children:"Alerts"}),v.jsx(LF,{children:o?"Loading your alerts…":l?"Something went wrong":u.length===0?"You haven't created any alerts yet":`${u.length} alert${u.length===1?"":"s"}`})]}),!o&&!l&&v.jsx(PF,{type:"button",onClick:e,children:"+ New alert"})]}),v.jsxs(jF,{children:[o&&v.jsx(UF,{children:"Loading…"}),l&&v.jsx($F,{children:"Failed to load your alerts. Please refresh and try again."}),!o&&!l&&u.length===0&&v.jsx(qF,{onAdd:e}),!o&&!l&&u.length>0&&v.jsx(OF,{alerts:u,onEdit:t,onDuplicate:n})]})]})},BF=O.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 32px 16px;
`,HF=O.p`
  margin: 0;
  font-size: 15px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
`,FF=O.button`
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
`,qF=({onAdd:e})=>v.jsxs(BF,{children:[v.jsx(HF,{children:"Create your first alert to get notified when classes become available."}),v.jsx(FF,{type:"button",onClick:e,children:"Create an alert"})]}),VF=O.button`
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
`;O.button`
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
`;const GF=O.div`
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 16px;
`,YF=()=>["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document||/iPad|iPhone|iPod/.test(navigator.userAgent),gy=O(GF)`
  margin-bottom: 1em;
`,WF=O(VF)`
  margin-top: 1em;
`,mT=O.h2`
  color: ${e=>e.theme.colors.accent};
`,QF=()=>{const[e,t]=E.useState(window.Notification?window.Notification.permission:void 0),{refreshToken:n}=E.useContext(vu),i=YF(),o=!!navigator.standalone||window.matchMedia("(display-mode: standalone)").matches,l=E.useCallback(()=>{window.Notification&&typeof window.Notification.requestPermission=="function"&&window.Notification.requestPermission().then(u=>{t(u),u==="granted"&&n()}).catch(u=>{console.error(u),Nr(u)})},[n]);return i&&!o?v.jsxs(gy,{children:[v.jsx(mT,{children:"Installation Required"}),v.jsx("p",{children:"To receive notifications on iOS, you must first add this app to your home screen. Tap the share button in Safari and select “Add to Home Screen”, then open the app from there."})]}):e===void 0||!("serviceWorker"in navigator)?v.jsxs(gy,{children:[v.jsx(mT,{children:"Unsupported Browser"}),v.jsx("p",{children:"This browser does not support sending you notifications in the background. Alerts for new classes will only display if you keep this tab open."})]}):e!=="granted"?v.jsxs(gy,{children:[v.jsx("h2",{children:"Grant notification permissions"}),v.jsx("p",{children:"In order to get notified when any of your alerts trigger, you need to grant permission to send notifications"}),v.jsx(WF,{type:"button",onClick:l,children:"Grant Permission"})]}):null},KF=O.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${Te`
    gap: 16px;
  `}
`,yy=O.section`
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  overflow: hidden;
`,gT=O.div`
  padding: 20px 24px 0;

  ${Te`
    padding: 16px 16px 0;
  `}
`,yT=O.h2`
  margin: 0 0 4px;
  font-size: 20px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
`,vT=O.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
`,_T=O.div`
  padding: 16px 24px 24px;

  ${Te`
    padding: 12px 16px 16px;
  `}
`,XF=()=>{const e=Co();return v.jsxs(KF,{children:[v.jsx(yy,{children:v.jsx(zF,{onAdd:()=>{e(rt.ALERTS_EDITOR,{state:{}})},onEdit:t=>{e(rt.ALERTS_EDITOR,{state:t})},onDuplicate:t=>{e(rt.ALERTS_EDITOR,{state:{...t,id:void 0,created:void 0}})}})}),v.jsxs(yy,{children:[v.jsxs(gT,{children:[v.jsx(yT,{children:"Preferences"}),v.jsx(vT,{children:"Control how often you receive alert notifications."})]}),v.jsx(_T,{children:v.jsx(W7,{})})]}),v.jsxs(yy,{children:[v.jsxs(gT,{children:[v.jsx(yT,{children:"Devices"}),v.jsx(vT,{children:"Devices registered to receive push notifications. Removed devices will re-register on their next visit."})]}),v.jsxs(_T,{children:[v.jsx(QF,{}),v.jsx(fF,{})]})]})]})},ZF=O.button.attrs({"aria-label":"Close",type:"button"})`
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
`,fb=e=>{try{return window.localStorage.getItem(e)}catch(t){return Nr(t),null}},hb=(e,t)=>{try{window.localStorage.setItem(e,t)}catch(n){Nr(n)}},vD=e=>{try{window.localStorage.removeItem(e)}catch(t){Nr(t)}},_D="BOOKABLE_STATUS_FILTERS",_v="DISCIPLINE_FILTERS",bv="INSTRUCTOR_FILTERS",JF=e=>{const t=fb(_D);return t===null?e:t.split(";").filter(Me.isBookableStatus)},eq=e=>{hb(_D,e.join(";"))},tq=e=>{const t=fb(_v);return t===null?e:t.split(";").filter(Boolean)},bT=e=>{e.length===0?vD(_v):hb(_v,e.join(";"))},nq=e=>{const t=fb(bv);return t===null?e:t.split(";").filter(Boolean)},ST=e=>{e.length===0?vD(bv):hb(bv,e.join(";"))},rq={selectedBookableStatuses:JF(["free","waitlist"]),selectedInstructors:nq([]),selectedDisciplines:tq([])},bD=Ir({name:"filters",initialState:rq,reducers:{toggleBookableStatus(e,t){e.selectedBookableStatuses.includes(t.payload)?e.selectedBookableStatuses=e.selectedBookableStatuses.filter(n=>n!==t.payload):e.selectedBookableStatuses=[...e.selectedBookableStatuses,t.payload],eq(e.selectedBookableStatuses)},toggleInstructor(e,t){e.selectedInstructors.includes(t.payload)?e.selectedInstructors=e.selectedInstructors.filter(n=>n!==t.payload):e.selectedInstructors=[...e.selectedInstructors,t.payload],ST(e.selectedInstructors)},resetInstructors(e){e.selectedInstructors=[],ST(e.selectedInstructors)},toggleDiscipline(e,t){e.selectedDisciplines.includes(t.payload)?e.selectedDisciplines=e.selectedDisciplines.filter(n=>n!==t.payload):e.selectedDisciplines=[...e.selectedDisciplines,t.payload],bT(e.selectedDisciplines)},resetDisciplines(e){e.selectedDisciplines=[],bT(e.selectedDisciplines)}}}),{toggleBookableStatus:iq,toggleInstructor:sq,resetInstructors:oq,toggleDiscipline:aq,resetDisciplines:lq}=bD.actions,cq=bD.reducer,uq=()=>{const e=ct(i=>i.filters.selectedBookableStatuses),t=wi(),n=E.useCallback(i=>{t(iq(i))},[t]);return{bookableStatuses:e,toggleBookableStatus:n}},dq=O.button`
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
`,fq=O.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px 8px;
`,hq=O.h3`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${e=>e.theme.colors.secondary};
  margin: 0;
`,cp=({label:e,onReset:t,children:n})=>v.jsxs(fq,{children:[v.jsx(hq,{children:e}),t&&v.jsx(dq,{type:"button",onClick:t,children:"Reset"}),n]}),pq=O.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 0 16px 16px;
`,mq=O.button`
  padding: 5px 14px;
  border-radius: 20px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: box-shadow 0.1s;

  ${e=>e.$active?nn`
          border: 1.5px solid ${e.$color};
          background-color: ${e.$color}14;
          color: ${e.$color};
        `:nn`
          border: 1px solid ${e.theme.borderColor};
          background-color: transparent;
          color: ${e.theme.colors.secondary};

          &:hover {
            background-color: ${e.theme.colors.hoverSurface};
          }
        `}
`,gq=()=>{const{bookableStatuses:e,toggleBookableStatus:t}=uq(),n=$v(),i=[{label:"Free",status:"free",color:n.colors.status.free.text},{label:"Waitlist",status:"waitlist",color:n.colors.status.waitlist.text},{label:"Full",status:"full",color:n.colors.status.full.text}];return v.jsxs("fieldset",{style:{border:"none",margin:0,padding:0},children:[v.jsx("legend",{style:{padding:0,width:"100%"},children:v.jsx(cp,{label:"Status"})}),v.jsx(pq,{children:i.map(o=>{const l=e.includes(o.status);return v.jsx(mq,{type:"button",$active:l,$color:o.color,onClick:()=>t(o.status),"aria-pressed":l,children:o.label},o.status)})})]})},yq=()=>{const e=ct(i=>i.filters.selectedDisciplines),t=wi(),n=E.useCallback(i=>{t(aq(i))},[t]);return{selectedDisciplines:e,toggleDiscipline:n}},SD=O.ul`
  list-style: none;
  margin: 0;
  padding: 0 0 8px;
`,wD=O.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.1s;

  ${e=>e.$checked?nn`
          background-color: ${e.theme.colors.accent}08;
        `:nn`
          &:hover {
            background-color: ${t=>t.theme.colors.hoverSurface};
          }
        `}
`,xD=O.span`
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
`,ED=O.span`
  font-size: 14px;
  color: ${e=>e.theme.colors.main};
`,Sh=O.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  padding: 8px 16px 16px;
  margin: 0;
`,vq=({discipline:e,checked:t,onClick:n})=>v.jsxs(wD,{$checked:t,onClick:n,role:"checkbox","aria-checked":t,children:[v.jsx(xD,{$checked:t}),v.jsx(gh,{discipline:e,size:24}),v.jsx(ED,{children:e.name})]}),_q=()=>{const e=ct(Do),{currentData:t,isLoading:n,error:i}=ub(e),{selectedDisciplines:o,toggleDiscipline:l}=yq();return i&&!n?v.jsx(Sh,{children:"Failed to load disciplines"}):!t||n?v.jsx(Sh,{children:"Loading…"}):v.jsx(SD,{children:t.map((u,f)=>v.jsx(vq,{discipline:u,checked:o.includes(u.id),onClick:()=>l(u.id)},f))})},bq=()=>{const e=ct(n=>n.filters.selectedDisciplines.length>0),t=wi();return v.jsxs("div",{children:[v.jsx(cp,{label:"Disciplines",onReset:e?()=>t(lq()):void 0}),v.jsx(_q,{})]})},Sq=()=>{const e=ct(i=>i.filters.selectedInstructors),t=wi(),n=E.useCallback(i=>{t(sq(i))},[t]);return{selectedInstructors:e,toggleInstructor:n}},wq=({instructor:e,checked:t,onClick:n})=>v.jsxs(wD,{$checked:t,onClick:n,role:"checkbox","aria-checked":t,children:[v.jsx(xD,{$checked:t}),v.jsx(sb,{instructor:e,size:28}),v.jsx(ED,{children:e.name})]}),xq=()=>{const e=ct(Do),{currentData:t,isLoading:n,error:i}=db(e),{selectedInstructors:o,toggleInstructor:l}=Sq();return i&&!n?v.jsx(Sh,{children:"Failed to load instructors"}):!t||n?v.jsx(Sh,{children:"Loading…"}):v.jsx(SD,{children:t.map((u,f)=>v.jsx(wq,{instructor:u,checked:o.includes(u.id),onClick:()=>l(u.id)},f))})},Eq=()=>{const e=ct(n=>n.filters.selectedInstructors.length>0),t=wi();return v.jsxs("div",{children:[v.jsx(cp,{label:"Instructors",onReset:e?()=>t(oq()):void 0}),v.jsx(xq,{})]})},Tq=Object.entries(Me.STUDIOS).map(([e,t])=>({id:e,label:t.location})),Cq=O.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 0 16px 16px;
`,Rq=O.label`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  ${xs}
  cursor: pointer;
  transition: box-shadow 0.1s;

  ${e=>e.$selected?nn`
          border-color: ${e.theme.colors.accent};
          background-color: ${e.theme.colors.accent}0a;
        `:nn`
          &:hover {
            background-color: ${t=>t.theme.colors.hoverSurface};
          }
        `}
`,Aq=O.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`,Iq=O.span`
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
`,Dq=O.span`
  font-size: 15px;
  color: ${e=>e.theme.colors.main};
`,Oq=()=>{const e=wi(),t=ct(Do);return v.jsxs("fieldset",{style:{border:"none",margin:0,padding:0},children:[v.jsx("legend",{style:{padding:0,width:"100%"},children:v.jsx(cp,{label:"Studio"})}),v.jsx(Cq,{children:Tq.map(n=>{const i=t===n.id;return v.jsxs(Rq,{$selected:i,htmlFor:`studio-${n.id}`,children:[v.jsx(Aq,{type:"radio",id:`studio-${n.id}`,name:"studio-selected",value:n.id,checked:i,onChange:()=>{i||e(ph(n.id))}}),v.jsx(Iq,{$selected:i}),v.jsx(Dq,{children:n.label})]},n.id)})})]})},Nq=O.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`,kq=O.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 16px 12px;
  border-bottom: 1px solid ${e=>e.theme.borderColor};
  position: sticky;
  top: 0;
  background-color: ${e=>e.theme.colors.secondarySurface};
  z-index: 1;

  ${QI`
    display: flex;
  `}
`,Mq=O.h2`
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${e=>e.theme.colors.main};
  margin: 0;
`,Lq=O(ZF)`
  display: none;

  ${QI`
    display: block;
  `}
`,Pq=O.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  overflow-y: auto;
  flex: 1;
`,ff=O.div`
  border-bottom: 1px solid ${e=>e.theme.borderColor};

  &:last-child {
    border-bottom: none;
  }
`,jq=({onClose:e})=>v.jsxs(Nq,{children:[v.jsxs(kq,{children:[v.jsx(Mq,{children:"Filters"}),v.jsx(Lq,{onClick:()=>e()})]}),v.jsxs(Pq,{children:[v.jsx(ff,{children:v.jsx(Oq,{})}),v.jsx(ff,{children:v.jsx(gq,{})}),v.jsx(ff,{children:v.jsx(bq,{})}),v.jsx(ff,{children:v.jsx(Eq,{})})]})]}),Uq=()=>{const e=ct(Do),{refetch:t}=dD(e);return{refresh:E.useCallback(async()=>{await t()},[t])}},wT=150,xT=60,$q=()=>document.documentElement.scrollTop||document.body.scrollTop,zq=({refresh:e})=>{const t=E.useRef(null),n=E.useRef(null),i=E.useRef(e);E.useLayoutEffect(()=>{i.current=e});const o=E.useMemo(()=>!!navigator.standalone||window.matchMedia("(display-mode: standalone)").matches||!1,[]);return E.useEffect(()=>{if(!o)return;let l=0,u=!1,f=!1,h=!1;const p=w=>{const I=n.current;I&&(I.style.transition=w?"transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease":"none",I.style.transform="",I.style.opacity="0")},g=w=>{l=w.touches[0].clientY,u=!1,f=!1},y=w=>{if(h||$q()>0)return;const I=w.touches[0].clientY-l;if(I<=0){u&&(u=!1,f=!1,p(!1));return}u=!0,f=I>=wT;const T=Math.min(I/wT,1),D=xT*(1-Math.pow(1-T,2)),M=Math.pow(T,.5),C=Math.floor(T*270),A=n.current;A&&(A.style.transition="none",A.style.transform=`translateY(${D}px) rotate(${C}deg)`,A.style.opacity=String(Math.min(M,1)))},_=()=>{if(u)if(u=!1,f&&!h){f=!1,h=!0;const w=n.current;w&&(w.classList.add("animate"),w.style.transition="none",w.style.transform=`translateY(${xT}px)`,w.style.opacity="1");let I=!1;const T=()=>{if(I)return;I=!0,h=!1;const M=n.current;M&&(M.classList.remove("animate"),p(!0))},D=setTimeout(T,1e4);i.current().finally(()=>{clearTimeout(D),T()})}else f=!1,p(!0)},b=()=>{u=!1,f=!1,p(!1)};return document.addEventListener("touchstart",g,{passive:!0}),document.addEventListener("touchmove",y,{passive:!0}),document.addEventListener("touchend",_,{passive:!0}),document.addEventListener("touchcancel",b,{passive:!0}),()=>{document.removeEventListener("touchstart",g),document.removeEventListener("touchmove",y),document.removeEventListener("touchend",_),document.removeEventListener("touchcancel",b)}},[o]),{swipeRef:t,spinnerRef:n}},Bq=e=>e.filters.selectedDisciplines.length>0||e.filters.selectedInstructors.length>0,Hq=e=>e.filters.selectedBookableStatuses,Fq=e=>e.filters.selectedDisciplines,qq=e=>e.filters.selectedInstructors,Vq=(e,t)=>t,Gq=Si([Hq,Fq,qq,Vq],(e,t,n,i)=>i.filter(o=>e.includes(o.status)).filter(o=>n.length>0?n.some(l=>l===o.instructor.id):!0).filter(o=>t.length>0?t.includes(o.discipline.id):!0)),TD=Si([Do],e=>{if(e)return Me.STUDIOS[e]}),Yq=Si([Gq,TD],(e,t)=>{if(e.length===0)return[];const n=t?.timezone||"",i=[];let o=1,l=Va(e[0].start,n,!0),u=[e[0]];for(;o<e.length;){const f=e[o],h=Va(f.start,n,!0);h===l?u.push(f):(i.push({formattedDate:l,classes:u}),l=h,u=[f]),o++}return u.length>0&&i.push({formattedDate:l,classes:u}),i}),ET={free:{label:"Book"},waitlist:{label:"Waitlist"},full:{label:"Full"}},Wq=O.a`
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

  ${e=>e.$interactive&&nn`
      cursor: pointer;
      &:hover {
        box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 12px;
      }
    `}

  ${e=>!e.$interactive&&nn`
      pointer-events: none;
    `}

  ${Te`
    padding: 10px 12px;
    gap: 10px;
  `}
`,Qq=O.div`
  flex-shrink: 0;
  width: 84px;
  ${Te`
    width: 70px;
  `}
`,Kq=O.div`
  font-weight: 600;
  font-size: 16px;
  color: ${e=>e.theme.colors.main};
  white-space: nowrap;
  ${Te`
    font-size: 13px;
  `}
`,Xq=O.div`
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
  margin-top: 2px;
  ${Te`
    font-size: 11px;
  `}
`,Zq=O.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  ${Te`
    display: none;
  `}
`,Jq=O.div`
  flex: 1;
  min-width: 0;
`,eV=O.div`
  font-size: 16px;
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${Te`
    font-size: 13px;
  `}
`,tV=O.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  margin-top: 3px;
  ${Te`
    font-size: 12px;
  `}
`,nV=O.span`
  color: ${e=>e.theme.borderColor};
`,rV=O.div`
  display: none;
  ${Te`
    display: flex;
    align-items: center;
  `}
`,iV=O.button`
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

  ${Te`
    font-size: 12px;
    padding: 5px 10px;
  `}
`,sV=E.memo(({clazz:e})=>{const t=ct(TD),n=e.status,i=n==="free"||n==="waitlist",o=E.useMemo(()=>e.customerUrl?new URL(e.customerUrl,"https://schedule.studio.onepeloton.com").href:(qv("Missing customer URL",{extra:{clazz:e}}),""),[e]),l=E.useMemo(()=>Eo(e.start,t?.timezone),[e.start,t?.timezone]),u=ET[n]??ET.full;return v.jsxs(Wq,{$status:n,$interactive:i,href:o,target:"_blank","aria-label":`${u.label} ${e.name} at ${l}`,children:[v.jsxs(Qq,{children:[v.jsx(Kq,{children:l}),v.jsxs(Xq,{children:[e.duration/60," min"]})]}),v.jsxs(Zq,{children:[v.jsx(sb,{instructor:e.instructor,size:44}),v.jsx(gh,{discipline:e.discipline,size:36})]}),v.jsxs(Jq,{children:[v.jsx(eV,{children:e.name}),v.jsxs(tV,{children:[e.instructor.name,v.jsx(nV,{children:"·"}),e.discipline.name,v.jsx(rV,{children:v.jsx(gh,{discipline:e.discipline,size:20})})]})]}),v.jsx(iV,{$status:n,disabled:!i,tabIndex:-1,children:u.label})]})}),oV=O.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,aV=O.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,lV=O.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 0 4px 6px;
  border-bottom: 1px solid ${e=>e.theme.borderColor};
  margin-bottom: 2px;
`,cV=O.h2`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${e=>e.theme.colors.main};
  margin: 0;
`,TT=O.span`
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
`,uV=O.div`
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 32px 24px;
  text-align: center;
  ${Te`
    padding: 24px 16px;
  `}
`,dV=O.p`
  font-size: 16px;
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
  margin: 0 0 8px;
`,CT=O.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  margin: 0;
  line-height: 1.5;
`,fV=({classes:e,fulfilledTimeStamp:t})=>{const n=ct(u=>Yq(u,e)),i=ct(Bq),o=ct(u=>u.filters.selectedBookableStatuses.includes("free")),l=E.useMemo(()=>t?new Intl.DateTimeFormat(void 0,{hour:"numeric",minute:"numeric"}).format(t):void 0,[t]);return n.length===0?v.jsxs(uV,{children:[v.jsx(dV,{children:"No classes found"}),i&&v.jsx(CT,{children:"Try resetting your filters or selecting more options in the sidebar."}),o&&!i&&v.jsx(CT,{children:"New classes usually open at 12:00 pm on Mondays and Thursdays in your studio's timezone."})]}):v.jsx(oV,{children:n.map((u,f)=>v.jsxs(aV,{children:[v.jsxs(lV,{children:[v.jsx(cV,{children:u.formattedDate}),f===0&&l&&v.jsxs(TT,{children:["Times in studio timezone · loaded ",l]}),f===0&&!l&&v.jsx(TT,{children:"All times in studio timezone"})]}),u.classes.map((h,p)=>v.jsx(sV,{clazz:h},p))]},f))})},RT=O.div`
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 32px 24px;
  text-align: center;
  ${Te`
    padding: 24px 16px;
  `}
`,hV=O.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  margin: 0;
`,pV=O.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.error};
  margin: 0 0 6px;
`,mV=O.code`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,gV=()=>{const e=ct(Do),{currentData:t,isLoading:n,error:i,fulfilledTimeStamp:o}=dD(e,{refetchOnMountOrArgChange:!0});return i&&!n?v.jsxs(RT,{children:[v.jsx(pV,{children:"Failed to load classes"}),v.jsx(mV,{children:I9(i)})]}):!t||n?v.jsx(RT,{children:v.jsx(hV,{children:"Loading classes…"})}):v.jsx(fV,{classes:t,fulfilledTimeStamp:o})},yV=O.div``,Sv=300,vV=O.aside`
  max-width: 100%;
  width: ${Sv}px;
  top: calc(${G_}px + env(safe-area-inset-top, 0px));
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
    left: ${e=>e.$toggleVisible?0:-Sv}px;
    z-index: 2;
    box-shadow: ${e=>e.$toggleVisible?"4px 0 16px rgba(0,0,0,0.08)":"none"};
  }
`,_V=O.div`
  flex: 1;
  background-color: ${e=>e.theme.colors.secondarySurface};
  padding: 20px;
  padding-bottom: calc(20px + env(safe-area-inset-bottom, 0px));
  position: relative;
  margin-left: ${Sv}px;

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
`,hf=40,bV=O.div`
  padding-top: 10px;
  position: absolute;
  left: 0;
  width: 100%;
  top: -50px;
  text-align: center;
`,SV=O.div`
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
`,wV=O.div`
  display: none;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;

  @media only screen and (max-width: ${e=>e.theme.widths.tablet}px) {
    display: flex;
  }
`,xV=O.button`
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
`,EV=()=>v.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:v.jsx("path",{d:"M1 3h12M3 7h8M5 11h4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),TV=()=>{const{refresh:e}=Uq(),{swipeRef:t,spinnerRef:n}=zq({refresh:e}),[i,o]=E.useState(!1);return v.jsx(uo,{children:v.jsxs(yV,{children:[v.jsx(vV,{$toggleVisible:i,children:v.jsx(jq,{onClose:()=>{o(!1)}})}),v.jsxs(_V,{$toggleVisible:i,onClick:()=>{o(!1)},ref:t,children:[v.jsx(bV,{children:v.jsxs(SV,{ref:n,children:[v.jsx("div",{}),v.jsx("div",{}),v.jsx("div",{})]})}),v.jsx(wV,{children:v.jsxs(xV,{type:"button",onClick:l=>{o(!0),l.stopPropagation()},children:[v.jsx(EV,{}),"Filters"]})}),v.jsx(gV,{})]})]})})},CV=({children:e})=>{const t=ct(el),n=ct(Y_);return t.state!=="fulfilled"?null:n?v.jsx(v.Fragment,{children:e}):v.jsx(Dv,{to:rt.CLASS_LIST,replace:!0})},AT=e=>{switch(e.code){case"auth/user-not-found":return"No account found with this email address. Please check your email or create a new account.";case"auth/wrong-password":return"Incorrect password. Please try again or reset your password.";case"auth/invalid-email":return"Please enter a valid email address.";case"auth/user-disabled":return"This account has been disabled. Please contact support for assistance.";case"auth/too-many-requests":return"Too many failed login attempts. Please try again later or reset your password.";case"auth/weak-password":return"Password should be at least 6 characters long.";case"auth/email-already-in-use":return"An account with this email already exists. Please sign in instead.";case"auth/invalid-credential":return"Invalid email or password. Please check your credentials and try again.";case"auth/operation-not-allowed":return"This sign-in method is not enabled. Please contact support.";case"auth/account-exists-with-different-credential":return"An account already exists with the same email but different sign-in credentials. Please sign in using the original method.";case"auth/credential-already-in-use":return"This credential is already associated with a different user account.";case"auth/popup-closed-by-user":return"Sign-in was cancelled. Please try again.";case"auth/popup-blocked":return"Pop-up was blocked by your browser. Please allow pop-ups for this site and try again.";case"auth/cancelled-popup-request":return"Sign-in was cancelled. Please try again.";case"auth/network-request-failed":return"Network error occurred. Please check your internet connection and try again.";case"auth/internal-error":return"An internal error occurred. Please try again later.";case"auth/invalid-api-key":return"Configuration error. Please contact support.";case"auth/app-deleted":return"Application error. Please refresh the page and try again.";case"auth/invalid-user-token":return"Your session has expired. Please sign in again.";case"auth/user-token-expired":return"Your session has expired. Please sign in again.";case"auth/null-user":return"No user is currently signed in.";case"auth/requires-recent-login":return"This operation requires recent authentication. Please sign in again.";default:return e.message||"An unexpected error occurred. Please try again."}},RV=O.h1`
  font-size: 26px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
  margin: 0 0 6px;
`,AV=O.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  margin: 0 0 16px;
  line-height: 1.5;
`,IV=O.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,IT=O.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,DT=O.label`
  font-size: 13px;
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
`,OT=O.input`
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
`,DV=O.button`
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
`,OV=O.button`
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
`,NV=O.div`
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
`,kV=O.p`
  margin: 0;
  font-size: 13px;
  color: ${e=>e.theme.colors.error};
`,MV=O.p`
  margin: 32px 0 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
`,LV=O.button`
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
`,PV=()=>{const e=Co(),[t,n]=E.useState(!1),[i,o]=E.useState(""),[l,u]=E.useState(!1),[f,h]=E.useState(""),[p,g]=E.useState(""),y=E.useCallback(async b=>{if(b.preventDefault(),!(!ai||!f||!p)){n(!0),o("");try{l?await Rz(ai,f,p):await Az(ai,f,p),e(rt.CLASS_LIST)}catch(w){console.error("Email auth error:",w);const I=w&&typeof w=="object"&&"code"in w?AT(w):"Authentication failed";o(I),Nr(w)}finally{n(!1)}}},[f,p,l,e]),_=E.useCallback(async()=>{if(ai){n(!0),o("");try{const b=new oi;await Xz(ai,b),e(rt.CLASS_LIST)}catch(b){console.error("Google sign-in error:",b);const w=b&&typeof b=="object"&&"code"in b?AT(b):"Google sign-in failed";o(w),Nr(b)}finally{n(!1)}}},[e]);return v.jsxs("div",{children:[v.jsx(RV,{children:l?"Create account":"Sign in"}),v.jsx(AV,{children:"Set alerts, persist filters across devices, and access beta features."}),v.jsxs(IV,{onSubmit:y,children:[v.jsxs(IT,{children:[v.jsx(DT,{htmlFor:"signin-email",children:"Email"}),v.jsx(OT,{id:"signin-email",type:"email",placeholder:"you@example.com",value:f,onChange:b=>h(b.target.value),required:!0,disabled:t})]}),v.jsxs(IT,{children:[v.jsx(DT,{htmlFor:"signin-password",children:"Password"}),v.jsx(OT,{id:"signin-password",type:"password",placeholder:"••••••••",value:p,onChange:b=>g(b.target.value),required:!0,disabled:t})]}),i&&v.jsx(kV,{role:"alert",children:i}),v.jsx(DV,{type:"submit",disabled:t,children:t?"Loading…":l?"Create account":"Sign in"})]}),v.jsx(NV,{style:{marginTop:20,marginBottom:16},children:"or"}),v.jsx(OV,{type:"button",onClick:_,disabled:t,children:"Continue with Google"}),v.jsxs(MV,{children:[l?"Already have an account?":"Don't have an account?"," ",v.jsx(LV,{type:"button",onClick:()=>{u(!l),o("")},disabled:t,children:l?"Sign in":"Create account"})]})]})},jV=Si([el],e=>e.state==="fulfilled"&&!!e.data),UV=O.div`
  padding: 32px 20px;
  display: flex;
  justify-content: center;

  ${Te`
    padding: 16px 12px;
  `}
`,$V=O.div`
  width: 100%;
  max-width: 400px;
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 32px;

  ${Te`
    padding: 24px 20px;
  `}
`,zV=()=>ct(jV)?v.jsx(Dv,{to:rt.CLASS_LIST}):v.jsx(uo,{children:v.jsx(UV,{children:v.jsx($V,{children:v.jsx(PV,{})})})});function BV(e){const t=[];for(let n=e-1;n>=0;n--){const i=new Date;i.setDate(i.getDate()-n),t.push(i.toISOString().slice(0,10))}return t}function HV(e=14){const[t,n]=E.useState({state:"idle"});return E.useEffect(()=>{if(!wn){n({state:"failed",error:new Error("No database")});return}n({state:"loading"}),cI(tr(wn,"metrics")).then(i=>{const o=i.val()??{},u=BV(e).map(f=>{const h=o[f]??{},p=h.diffs??{},g={};for(const[_,b]of Object.entries(p))g[_]={added:b.added??0,changed:b.changed??0,removed:b.removed??0};const y=h.notifications??{};return{date:f,diffs:g,notifications:{sent:y.sent??0,failed:y.failed??0,usersReached:y.usersReached??0}}});n({state:"fulfilled",data:u})}).catch(i=>{n({state:"failed",error:i})})},[e]),t}const vy=O.div`
  padding: 32px 24px;
  max-width: 900px;
  margin: 0 auto;

  ${Te`
    padding: 20px 16px;
  `}
`,_y=O.h1`
  font-size: 22px;
  font-weight: 700;
  color: ${e=>e.theme.colors.main};
  margin: 0 0 28px;
`,NT=O.section`
  margin-bottom: 40px;
`,kT=O.h2`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${e=>e.theme.colors.secondary};
  margin: 0 0 16px;
`,FV=O.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 40px;

  ${Te`
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  `}
`,ya=O.div`
  background: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 16px 20px;
`,va=O.div`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
  margin-bottom: 4px;
`,_a=O.div`
  font-size: 24px;
  font-weight: 700;
  color: ${e=>e.theme.colors.main};
`,MT=O.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
`,wh=1e3,Of=140,xh=12,CD=4,RD=Of-xh-CD;function vc(e,t){return t<=1?wh/2:e/(t-1)*wh}function by(e,t){return xh+RD*(1-e/t)}const qV=[.25,.5,.75],VV=O.div`
  background: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 16px 16px 12px;
`,GV=O.svg`
  display: block;
  width: 100%;
  height: 140px;
  /* currentColor is used by grid lines so they inherit the theme secondary color */
  color: ${e=>e.theme.colors.secondary};
`,YV=O.div`
  display: flex;
  margin-top: 6px;
`,WV=O.div`
  flex: 1;
  text-align: center;
  font-size: 10px;
  color: ${e=>e.theme.colors.secondary};
  overflow: hidden;
`,QV=O.div`
  display: flex;
  gap: 16px;
  margin-top: 12px;
  flex-wrap: wrap;
`,KV=O.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,XV=O.div`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  background-color: ${e=>e.$color};
  flex-shrink: 0;
`;function ZV(e){const[,t,n]=e.split("-");return`${parseInt(t)}/${parseInt(n)}`}function JV({days:e,legend:t}){return v.jsxs(v.Fragment,{children:[v.jsx(YV,{children:e.map(n=>v.jsx(WV,{children:ZV(n.date)},n.date))}),v.jsx(QV,{children:t.map(n=>v.jsxs(KV,{children:[v.jsx(XV,{$color:n.color}),n.label]},n.label))})]})}const eG=O.div`
  position: relative;
`,tG=O.div`
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
`,nG=O.div`
  font-size: 11px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,rG=O.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: ${e=>e.theme.colors.secondary};
  line-height: 1.6;
`,iG=O.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${e=>e.$color};
  flex-shrink: 0;
`,sG=O.span`
  margin-left: auto;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
`,oG=O.div`
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${e=>e.$color};
  border: 2px solid ${e=>e.theme.colors.mainSurface};
  transform: translate(-50%, -50%);
  pointer-events: none;
`;function LT({days:e,seriesForDay:t,legend:n}){const i=e.length,[o,l]=E.useState(null),u=e.map(t),f=Math.max(...u.flatMap(_=>_.map(b=>b.value)),1),h=u[0].length,p=by(0,f).toFixed(1);function g(_,b){const{left:w,width:I}=b.getBoundingClientRect(),T=(_-w)/I;return Math.max(0,Math.min(i-1,Math.round(T*(i-1))))}const y=o!==null?o/(i-1)*100:null;return v.jsxs(VV,{children:[v.jsxs(eG,{children:[o!==null&&y!==null&&v.jsxs(v.Fragment,{children:[v.jsxs(tG,{$pct:y,children:[v.jsx(nG,{children:e[o].date}),u[o].map(_=>v.jsxs(rG,{children:[v.jsx(iG,{$color:_.color}),_.label,v.jsx(sG,{children:_.value})]},_.label))]}),u[o].map((_,b)=>v.jsx(oG,{$color:_.color,style:{left:`${y}%`,top:`${by(_.value,f)/Of*100}%`}},b))]}),v.jsxs(GV,{viewBox:`0 0 ${wh} ${Of}`,preserveAspectRatio:"none","aria-hidden":"true",style:{cursor:"crosshair",display:"block"},onMouseMove:_=>l(g(_.clientX,_.currentTarget)),onMouseLeave:()=>l(null),onTouchStart:_=>l(g(_.touches[0].clientX,_.currentTarget)),onTouchMove:_=>l(g(_.touches[0].clientX,_.currentTarget)),onTouchEnd:()=>l(null),children:[qV.map(_=>{const b=(xh+RD*(1-_)).toFixed(1);return v.jsx("line",{x1:0,y1:b,x2:wh,y2:b,stroke:"currentColor",strokeOpacity:.1,strokeWidth:1,vectorEffect:"non-scaling-stroke"},_)}),o!==null&&v.jsx("line",{x1:vc(o,i).toFixed(1),y1:xh,x2:vc(o,i).toFixed(1),y2:Of-CD,stroke:"currentColor",strokeOpacity:.2,strokeWidth:1,vectorEffect:"non-scaling-stroke"}),Array.from({length:h},(_,b)=>{const w=u[0][b].color,T=u.map((M,C)=>({x:vc(C,i),y:by(M[b].value,f)})).map(({x:M,y:C},A)=>`${A===0?"M":"L"}${M.toFixed(1)},${C.toFixed(1)}`).join(" "),D=[T,`L${vc(i-1,i).toFixed(1)},${p}`,`L${vc(0,i).toFixed(1)},${p}`,"Z"].join(" ");return v.jsxs("g",{children:[v.jsx("path",{d:D,fill:w,fillOpacity:.12}),v.jsx("path",{d:T,fill:"none",stroke:w,strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})]},b)})]})]}),v.jsx(JV,{days:e,legend:n})]})}const Gn={added:"#4ade80",changed:"#facc15",removed:"#f87171",sent:"#60a5fa",failed:"#f87171",usersReached:"#a78bfa"},aG=()=>{const e=HV(14);if(e.state==="idle"||e.state==="loading")return v.jsx(uo,{children:v.jsxs(vy,{children:[v.jsx(_y,{children:"Stats"}),v.jsx(MT,{children:"Loading…"})]})});if(e.state==="failed")return v.jsx(uo,{children:v.jsxs(vy,{children:[v.jsx(_y,{children:"Stats"}),v.jsxs(MT,{children:["Failed to load metrics: ",e.error.message??"unknown error"]})]})});const t=e.data,n=t.reduce((o,l)=>{o.sent+=l.notifications.sent,o.failed+=l.notifications.failed,o.usersReached+=l.notifications.usersReached;for(const u of Object.values(l.diffs))o.added+=u.added,o.changed+=u.changed,o.removed+=u.removed;return o},{sent:0,failed:0,usersReached:0,added:0,changed:0,removed:0}),i=[...new Set(t.flatMap(o=>Object.keys(o.diffs)))];return v.jsx(uo,{children:v.jsxs(vy,{children:[v.jsx(_y,{children:"Stats"}),v.jsxs(FV,{children:[v.jsxs(ya,{children:[v.jsx(va,{children:"Notifications sent (14d)"}),v.jsx(_a,{children:n.sent.toLocaleString()})]}),v.jsxs(ya,{children:[v.jsx(va,{children:"Users reached (14d)"}),v.jsx(_a,{children:n.usersReached.toLocaleString()})]}),v.jsxs(ya,{children:[v.jsx(va,{children:"Delivery failures (14d)"}),v.jsx(_a,{children:n.failed.toLocaleString()})]}),v.jsxs(ya,{children:[v.jsx(va,{children:"Classes added (14d)"}),v.jsx(_a,{children:n.added.toLocaleString()})]}),v.jsxs(ya,{children:[v.jsx(va,{children:"Classes changed (14d)"}),v.jsx(_a,{children:n.changed.toLocaleString()})]}),v.jsxs(ya,{children:[v.jsx(va,{children:"Classes removed (14d)"}),v.jsx(_a,{children:n.removed.toLocaleString()})]})]}),v.jsxs(NT,{children:[v.jsx(kT,{children:"Push notifications (14 days)"}),v.jsx(LT,{days:t,seriesForDay:o=>[{value:o.notifications.sent,color:Gn.sent,label:"Sent"},{value:o.notifications.failed,color:Gn.failed,label:"Failed"},{value:o.notifications.usersReached,color:Gn.usersReached,label:"Users reached"}],legend:[{color:Gn.sent,label:"Sent"},{color:Gn.failed,label:"Failed"},{color:Gn.usersReached,label:"Users reached"}]})]}),i.map(o=>v.jsxs(NT,{children:[v.jsxs(kT,{children:["Schedule changes — ",Me.STUDIOS[o]?.location??o," (14 days)"]}),v.jsx(LT,{days:t,seriesForDay:l=>{const u=l.diffs[o]??{added:0,changed:0,removed:0};return[{value:u.added,color:Gn.added,label:"Added"},{value:u.changed,color:Gn.changed,label:"Changed"},{value:u.removed,color:Gn.removed,label:"Removed"}]},legend:[{color:Gn.added,label:"Added"},{color:Gn.changed,label:"Changed"},{color:Gn.removed,label:"Removed"}]})]},o))]})})},lG=f2(FM(v.jsxs(or,{children:[v.jsx(or,{path:rt.CLASS_LIST,element:v.jsx(TV,{})}),v.jsxs(or,{path:rt.ALERTS,element:v.jsx(P7,{}),children:[v.jsx(or,{index:!0,element:v.jsx(XF,{})}),v.jsx(or,{path:"edit",element:v.jsx(S7,{})}),v.jsx(or,{path:":alertId/test",element:v.jsx(pH,{})})]}),v.jsx(or,{path:rt.SIGN_IN,element:v.jsx(zV,{})}),v.jsx(or,{path:rt.ABOUT,element:v.jsx(NB,{})}),v.jsx(or,{path:rt.STATS,element:v.jsx(CV,{children:v.jsx(aG,{})})}),v.jsx(or,{path:"*",element:v.jsx(Dv,{to:rt.CLASS_LIST,replace:!0})})]}))),cG=(e,t)=>({id:e.uid,displayName:e.displayName||e.email||"",isAdmin:t}),uG={state:"idle"},AD=Ir({name:"session",initialState:uG,reducers:{setLoading(e){return{state:"loading"}},setSession(e,t){return{state:"fulfilled",data:t.payload}},removeSession(e){return{state:"fulfilled",data:null}}}}),{setLoading:PT,setSession:dG,removeSession:jT}=AD.actions,fG=AD.reducer,hG=({children:e})=>{const t=wi();return E.useEffect(()=>{if(t(PT()),!ai)return t(jT()),()=>{};const n=Oz(ai,async i=>{if(t(PT()),i){let o=!1;try{o=(wn?await cI(tr(wn,`admins/${i.uid}`)):null)?.val()===!0}catch{}t(dG(cG(i,o)))}else t(jT())});return()=>n()},[t]),v.jsx(v.Fragment,{children:e})},pG={alerts:[]},ID=Ir({name:"alerts",initialState:pG,reducers:{addAlert(e,t){e.alerts.push(t.payload)},setAlerts(e,t){e.alerts=t.payload},removeAlerts(e){e.alerts=[]}}}),{addAlert:EG,setAlerts:TG,removeAlerts:CG}=ID.actions,mG=ID.reducer,gG=Vj({reducer:{alerts:mG,filters:cq,session:fG,[If.reducerPath]:If.reducer,[hv.name]:hv.reducer},middleware:e=>e().concat(If.middleware)}),yG={mode:"light",borderRadius:"8px",borderColor:"#d1d1d1",colors:{main:"#494f59",secondary:"#514e60",mainSurface:"#fff",secondarySurface:"#ededed",accent:"#cb3449",error:"#d93025",hoverSurface:"rgba(0, 0, 0, 0.05)",status:{free:{bg:"#e8f5e9",text:"#2e7d32"},waitlist:{bg:"#fff3e0",text:"#e65100"},full:{text:"#9e9e9e"}}},widths:{tablet:1024,mobile:560}},vG={mode:"dark",borderRadius:"8px",borderColor:"#2e2f45",colors:{main:"#e2e4eb",secondary:"#9b98b0",mainSurface:"#1c1d2e",secondarySurface:"#13141f",accent:"#cb3449",error:"#ef5350",hoverSurface:"rgba(255, 255, 255, 0.08)",status:{free:{bg:"rgba(46, 125, 50, 0.15)",text:"#81c784"},waitlist:{bg:"rgba(230, 81, 0, 0.15)",text:"#ffb74d"},full:{text:"#757575"}}},widths:{tablet:1024,mobile:560}},_G=CL`
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
`,wv="theme-mode";function bG(){const e=localStorage.getItem(wv);return e!==null?e==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches}function SG(){const[e,t]=E.useState(bG),n=E.useCallback(()=>{t(i=>{const o=!i;return localStorage.setItem(wv,o?"dark":"light"),o})},[]);return E.useEffect(()=>{const i=window.matchMedia("(prefers-color-scheme: dark)"),o=l=>{localStorage.getItem(wv)===null&&t(l.matches)};return i.addEventListener("change",o),()=>i.removeEventListener("change",o)},[]),{isDark:e,toggle:n}}function wG(){const{isDark:e,toggle:t}=SG();return E.useEffect(()=>{const i=new URLSearchParams(window.location.search).get("classUrl");i&&(window.history.replaceState(null,"",window.location.pathname+window.location.hash),window.location.assign(new URL(i,"https://schedule.studio.onepeloton.com").href))},[]),v.jsx(YI.Provider,{value:{isDark:e,toggle:t},children:v.jsxs(xL,{theme:e?vG:yG,children:[v.jsx(_G,{}),v.jsx(ok,{store:gG,children:v.jsx(hG,{children:v.jsx(I$,{children:v.jsx(E2,{router:lG})})})})]})})}qN.createRoot(document.getElementById("root")).render(v.jsx(E.StrictMode,{children:v.jsx(wG,{})}));
//# sourceMappingURL=index-DqH6iLcB.js.map
