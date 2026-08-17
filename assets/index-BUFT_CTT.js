
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="4d7c21ce-3987-57af-92e6-476409bdb85f")}catch(e){}}();
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function lN(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var _g={exports:{}},tc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r1;function cN(){if(r1)return tc;r1=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(i,o,l){var u=null;if(l!==void 0&&(u=""+l),o.key!==void 0&&(u=""+o.key),"key"in o){l={};for(var f in o)f!=="key"&&(l[f]=o[f])}else l=o;return o=l.ref,{$$typeof:e,type:i,key:u,ref:o!==void 0?o:null,props:l}}return tc.Fragment=t,tc.jsx=n,tc.jsxs=n,tc}var i1;function uN(){return i1||(i1=1,_g.exports=cN()),_g.exports}var g=uN(),bg={exports:{}},je={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s1;function dN(){if(s1)return je;s1=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),_=Symbol.iterator;function v(k){return k===null||typeof k!="object"?null:(k=_&&k[_]||k["@@iterator"],typeof k=="function"?k:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,O={};function C(k,X,le){this.props=k,this.context=X,this.refs=O,this.updater=le||b}C.prototype.isReactComponent={},C.prototype.setState=function(k,X){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,X,"setState")},C.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function I(){}I.prototype=C.prototype;function M(k,X,le){this.props=k,this.context=X,this.refs=O,this.updater=le||b}var R=M.prototype=new I;R.constructor=M,x(R,C.prototype),R.isPureReactComponent=!0;var D=Array.isArray,N={H:null,A:null,T:null,S:null,V:null},A=Object.prototype.hasOwnProperty;function P(k,X,le,ie,de,me){return le=me.ref,{$$typeof:e,type:k,key:X,ref:le!==void 0?le:null,props:me}}function U(k,X){return P(k.type,X,void 0,void 0,void 0,k.props)}function F(k){return typeof k=="object"&&k!==null&&k.$$typeof===e}function H(k){var X={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(le){return X[le]})}var z=/\/+/g;function G(k,X){return typeof k=="object"&&k!==null&&k.key!=null?H(""+k.key):X.toString(36)}function V(){}function te(k){switch(k.status){case"fulfilled":return k.value;case"rejected":throw k.reason;default:switch(typeof k.status=="string"?k.then(V,V):(k.status="pending",k.then(function(X){k.status==="pending"&&(k.status="fulfilled",k.value=X)},function(X){k.status==="pending"&&(k.status="rejected",k.reason=X)})),k.status){case"fulfilled":return k.value;case"rejected":throw k.reason}}throw k}function ue(k,X,le,ie,de){var me=typeof k;(me==="undefined"||me==="boolean")&&(k=null);var pe=!1;if(k===null)pe=!0;else switch(me){case"bigint":case"string":case"number":pe=!0;break;case"object":switch(k.$$typeof){case e:case t:pe=!0;break;case y:return pe=k._init,ue(pe(k._payload),X,le,ie,de)}}if(pe)return de=de(k),pe=ie===""?"."+G(k,0):ie,D(de)?(le="",pe!=null&&(le=pe.replace(z,"$&/")+"/"),ue(de,X,le,"",function(Oe){return Oe})):de!=null&&(F(de)&&(de=U(de,le+(de.key==null||k&&k.key===de.key?"":(""+de.key).replace(z,"$&/")+"/")+pe)),X.push(de)),1;pe=0;var Ie=ie===""?".":ie+":";if(D(k))for(var be=0;be<k.length;be++)ie=k[be],me=Ie+G(ie,be),pe+=ue(ie,X,le,me,de);else if(be=v(k),typeof be=="function")for(k=be.call(k),be=0;!(ie=k.next()).done;)ie=ie.value,me=Ie+G(ie,be++),pe+=ue(ie,X,le,me,de);else if(me==="object"){if(typeof k.then=="function")return ue(te(k),X,le,ie,de);throw X=String(k),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return pe}function j(k,X,le){if(k==null)return k;var ie=[],de=0;return ue(k,ie,"","",function(me){return X.call(le,me,de++)}),ie}function K(k){if(k._status===-1){var X=k._result;X=X(),X.then(function(le){(k._status===0||k._status===-1)&&(k._status=1,k._result=le)},function(le){(k._status===0||k._status===-1)&&(k._status=2,k._result=le)}),k._status===-1&&(k._status=0,k._result=X)}if(k._status===1)return k._result.default;throw k._result}var ne=typeof reportError=="function"?reportError:function(k){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof k=="object"&&k!==null&&typeof k.message=="string"?String(k.message):String(k),error:k});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",k);return}console.error(k)};function ae(){}return je.Children={map:j,forEach:function(k,X,le){j(k,function(){X.apply(this,arguments)},le)},count:function(k){var X=0;return j(k,function(){X++}),X},toArray:function(k){return j(k,function(X){return X})||[]},only:function(k){if(!F(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},je.Component=C,je.Fragment=n,je.Profiler=o,je.PureComponent=M,je.StrictMode=i,je.Suspense=p,je.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,je.__COMPILER_RUNTIME={__proto__:null,c:function(k){return N.H.useMemoCache(k)}},je.cache=function(k){return function(){return k.apply(null,arguments)}},je.cloneElement=function(k,X,le){if(k==null)throw Error("The argument must be a React element, but you passed "+k+".");var ie=x({},k.props),de=k.key,me=void 0;if(X!=null)for(pe in X.ref!==void 0&&(me=void 0),X.key!==void 0&&(de=""+X.key),X)!A.call(X,pe)||pe==="key"||pe==="__self"||pe==="__source"||pe==="ref"&&X.ref===void 0||(ie[pe]=X[pe]);var pe=arguments.length-2;if(pe===1)ie.children=le;else if(1<pe){for(var Ie=Array(pe),be=0;be<pe;be++)Ie[be]=arguments[be+2];ie.children=Ie}return P(k.type,de,void 0,void 0,me,ie)},je.createContext=function(k){return k={$$typeof:u,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null},k.Provider=k,k.Consumer={$$typeof:l,_context:k},k},je.createElement=function(k,X,le){var ie,de={},me=null;if(X!=null)for(ie in X.key!==void 0&&(me=""+X.key),X)A.call(X,ie)&&ie!=="key"&&ie!=="__self"&&ie!=="__source"&&(de[ie]=X[ie]);var pe=arguments.length-2;if(pe===1)de.children=le;else if(1<pe){for(var Ie=Array(pe),be=0;be<pe;be++)Ie[be]=arguments[be+2];de.children=Ie}if(k&&k.defaultProps)for(ie in pe=k.defaultProps,pe)de[ie]===void 0&&(de[ie]=pe[ie]);return P(k,me,void 0,void 0,null,de)},je.createRef=function(){return{current:null}},je.forwardRef=function(k){return{$$typeof:f,render:k}},je.isValidElement=F,je.lazy=function(k){return{$$typeof:y,_payload:{_status:-1,_result:k},_init:K}},je.memo=function(k,X){return{$$typeof:h,type:k,compare:X===void 0?null:X}},je.startTransition=function(k){var X=N.T,le={};N.T=le;try{var ie=k(),de=N.S;de!==null&&de(le,ie),typeof ie=="object"&&ie!==null&&typeof ie.then=="function"&&ie.then(ae,ne)}catch(me){ne(me)}finally{N.T=X}},je.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},je.use=function(k){return N.H.use(k)},je.useActionState=function(k,X,le){return N.H.useActionState(k,X,le)},je.useCallback=function(k,X){return N.H.useCallback(k,X)},je.useContext=function(k){return N.H.useContext(k)},je.useDebugValue=function(){},je.useDeferredValue=function(k,X){return N.H.useDeferredValue(k,X)},je.useEffect=function(k,X,le){var ie=N.H;if(typeof le=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ie.useEffect(k,X)},je.useId=function(){return N.H.useId()},je.useImperativeHandle=function(k,X,le){return N.H.useImperativeHandle(k,X,le)},je.useInsertionEffect=function(k,X){return N.H.useInsertionEffect(k,X)},je.useLayoutEffect=function(k,X){return N.H.useLayoutEffect(k,X)},je.useMemo=function(k,X){return N.H.useMemo(k,X)},je.useOptimistic=function(k,X){return N.H.useOptimistic(k,X)},je.useReducer=function(k,X,le){return N.H.useReducer(k,X,le)},je.useRef=function(k){return N.H.useRef(k)},je.useState=function(k){return N.H.useState(k)},je.useSyncExternalStore=function(k,X,le){return N.H.useSyncExternalStore(k,X,le)},je.useTransition=function(){return N.H.useTransition()},je.version="19.1.1",je}var o1;function Ah(){return o1||(o1=1,bg.exports=dN()),bg.exports}var E=Ah();const dr=lN(E);var Sg={exports:{}},nc={},xg={exports:{}},wg={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a1;function fN(){return a1||(a1=1,(function(e){function t(j,K){var ne=j.length;j.push(K);e:for(;0<ne;){var ae=ne-1>>>1,k=j[ae];if(0<o(k,K))j[ae]=K,j[ne]=k,ne=ae;else break e}}function n(j){return j.length===0?null:j[0]}function i(j){if(j.length===0)return null;var K=j[0],ne=j.pop();if(ne!==K){j[0]=ne;e:for(var ae=0,k=j.length,X=k>>>1;ae<X;){var le=2*(ae+1)-1,ie=j[le],de=le+1,me=j[de];if(0>o(ie,ne))de<k&&0>o(me,ie)?(j[ae]=me,j[de]=ne,ae=de):(j[ae]=ie,j[le]=ne,ae=le);else if(de<k&&0>o(me,ne))j[ae]=me,j[de]=ne,ae=de;else break e}}return K}function o(j,K){var ne=j.sortIndex-K.sortIndex;return ne!==0?ne:j.id-K.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();e.unstable_now=function(){return u.now()-f}}var p=[],h=[],y=1,_=null,v=3,b=!1,x=!1,O=!1,C=!1,I=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function D(j){for(var K=n(h);K!==null;){if(K.callback===null)i(h);else if(K.startTime<=j)i(h),K.sortIndex=K.expirationTime,t(p,K);else break;K=n(h)}}function N(j){if(O=!1,D(j),!x)if(n(p)!==null)x=!0,A||(A=!0,G());else{var K=n(h);K!==null&&ue(N,K.startTime-j)}}var A=!1,P=-1,U=5,F=-1;function H(){return C?!0:!(e.unstable_now()-F<U)}function z(){if(C=!1,A){var j=e.unstable_now();F=j;var K=!0;try{e:{x=!1,O&&(O=!1,M(P),P=-1),b=!0;var ne=v;try{t:{for(D(j),_=n(p);_!==null&&!(_.expirationTime>j&&H());){var ae=_.callback;if(typeof ae=="function"){_.callback=null,v=_.priorityLevel;var k=ae(_.expirationTime<=j);if(j=e.unstable_now(),typeof k=="function"){_.callback=k,D(j),K=!0;break t}_===n(p)&&i(p),D(j)}else i(p);_=n(p)}if(_!==null)K=!0;else{var X=n(h);X!==null&&ue(N,X.startTime-j),K=!1}}break e}finally{_=null,v=ne,b=!1}K=void 0}}finally{K?G():A=!1}}}var G;if(typeof R=="function")G=function(){R(z)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,te=V.port2;V.port1.onmessage=z,G=function(){te.postMessage(null)}}else G=function(){I(z,0)};function ue(j,K){P=I(function(){j(e.unstable_now())},K)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_next=function(j){switch(v){case 1:case 2:case 3:var K=3;break;default:K=v}var ne=v;v=K;try{return j()}finally{v=ne}},e.unstable_requestPaint=function(){C=!0},e.unstable_runWithPriority=function(j,K){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var ne=v;v=j;try{return K()}finally{v=ne}},e.unstable_scheduleCallback=function(j,K,ne){var ae=e.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?ae+ne:ae):ne=ae,j){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=ne+k,j={id:y++,callback:K,priorityLevel:j,startTime:ne,expirationTime:k,sortIndex:-1},ne>ae?(j.sortIndex=ne,t(h,j),n(p)===null&&j===n(h)&&(O?(M(P),P=-1):O=!0,ue(N,ne-ae))):(j.sortIndex=k,t(p,j),x||b||(x=!0,A||(A=!0,G()))),j},e.unstable_shouldYield=H,e.unstable_wrapCallback=function(j){var K=v;return function(){var ne=v;v=K;try{return j.apply(this,arguments)}finally{v=ne}}}})(wg)),wg}var l1;function hN(){return l1||(l1=1,xg.exports=fN()),xg.exports}var Eg={exports:{}},on={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c1;function pN(){if(c1)return on;c1=1;var e=Ah();function t(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)h+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var i={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function l(p,h,y){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:p,containerInfo:h,implementation:y}}var u=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return on.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,on.createPortal=function(p,h){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return l(p,h,null,y)},on.flushSync=function(p){var h=u.T,y=i.p;try{if(u.T=null,i.p=2,p)return p()}finally{u.T=h,i.p=y,i.d.f()}},on.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,i.d.C(p,h))},on.prefetchDNS=function(p){typeof p=="string"&&i.d.D(p)},on.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var y=h.as,_=f(y,h.crossOrigin),v=typeof h.integrity=="string"?h.integrity:void 0,b=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;y==="style"?i.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:b}):y==="script"&&i.d.X(p,{crossOrigin:_,integrity:v,fetchPriority:b,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},on.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var y=f(h.as,h.crossOrigin);i.d.M(p,{crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&i.d.M(p)},on.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var y=h.as,_=f(y,h.crossOrigin);i.d.L(p,y,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},on.preloadModule=function(p,h){if(typeof p=="string")if(h){var y=f(h.as,h.crossOrigin);i.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else i.d.m(p)},on.requestFormReset=function(p){i.d.r(p)},on.unstable_batchedUpdates=function(p,h){return p(h)},on.useFormState=function(p,h,y){return u.H.useFormState(p,h,y)},on.useFormStatus=function(){return u.H.useHostTransitionStatus()},on.version="19.1.1",on}var u1;function lC(){if(u1)return Eg.exports;u1=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),Eg.exports=pN(),Eg.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d1;function mN(){if(d1)return nc;d1=1;var e=hN(),t=Ah(),n=lC();function i(r){var s="https://react.dev/errors/"+r;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function l(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function u(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function f(r){if(l(r)!==r)throw Error(i(188))}function p(r){var s=r.alternate;if(!s){if(s=l(r),s===null)throw Error(i(188));return s!==r?null:r}for(var a=r,c=s;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return f(d),r;if(m===c)return f(d),s;m=m.sibling}throw Error(i(188))}if(a.return!==c.return)a=d,c=m;else{for(var S=!1,w=d.child;w;){if(w===a){S=!0,a=d,c=m;break}if(w===c){S=!0,c=d,a=m;break}w=w.sibling}if(!S){for(w=m.child;w;){if(w===a){S=!0,a=m,c=d;break}if(w===c){S=!0,c=m,a=d;break}w=w.sibling}if(!S)throw Error(i(189))}}if(a.alternate!==c)throw Error(i(190))}if(a.tag!==3)throw Error(i(188));return a.stateNode.current===a?r:s}function h(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r;for(r=r.child;r!==null;){if(s=h(r),s!==null)return s;r=r.sibling}return null}var y=Object.assign,_=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),I=Symbol.for("react.provider"),M=Symbol.for("react.consumer"),R=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),A=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),F=Symbol.for("react.activity"),H=Symbol.for("react.memo_cache_sentinel"),z=Symbol.iterator;function G(r){return r===null||typeof r!="object"?null:(r=z&&r[z]||r["@@iterator"],typeof r=="function"?r:null)}var V=Symbol.for("react.client.reference");function te(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===V?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case x:return"Fragment";case C:return"Profiler";case O:return"StrictMode";case N:return"Suspense";case A:return"SuspenseList";case F:return"Activity"}if(typeof r=="object")switch(r.$$typeof){case b:return"Portal";case R:return(r.displayName||"Context")+".Provider";case M:return(r._context.displayName||"Context")+".Consumer";case D:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case P:return s=r.displayName||null,s!==null?s:te(r.type)||"Memo";case U:s=r._payload,r=r._init;try{return te(r(s))}catch{}}return null}var ue=Array.isArray,j=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},ae=[],k=-1;function X(r){return{current:r}}function le(r){0>k||(r.current=ae[k],ae[k]=null,k--)}function ie(r,s){k++,ae[k]=r.current,r.current=s}var de=X(null),me=X(null),pe=X(null),Ie=X(null);function be(r,s){switch(ie(pe,s),ie(me,r),ie(de,null),s.nodeType){case 9:case 11:r=(r=s.documentElement)&&(r=r.namespaceURI)?Ox(r):0;break;default:if(r=s.tagName,s=s.namespaceURI)s=Ox(s),r=kx(s,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}le(de),ie(de,r)}function Oe(){le(de),le(me),le(pe)}function Ue(r){r.memoizedState!==null&&ie(Ie,r);var s=de.current,a=kx(s,r.type);s!==a&&(ie(me,r),ie(de,a))}function _t(r){me.current===r&&(le(de),le(me)),Ie.current===r&&(le(Ie),Kl._currentValue=ne)}var gt=Object.prototype.hasOwnProperty,Pn=e.unstable_scheduleCallback,Et=e.unstable_cancelCallback,jn=e.unstable_shouldYield,Ur=e.unstable_requestPaint,Yt=e.unstable_now,sl=e.unstable_getCurrentPriorityLevel,As=e.unstable_ImmediatePriority,Oo=e.unstable_UserBlockingPriority,ko=e.unstable_NormalPriority,zr=e.unstable_LowPriority,Ci=e.unstable_IdlePriority,ku=e.log,ol=e.unstable_setDisableYieldValue,pn=null,bt=null;function sr(r){if(typeof ku=="function"&&ol(r),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(pn,r)}catch{}}var Qt=Math.clz32?Math.clz32:Nu,mp=Math.log,xr=Math.LN2;function Nu(r){return r>>>=0,r===0?32:31-(mp(r)/xr|0)|0}var Is=256,Ds=4194304;function Br(r){var s=r&42;if(s!==0)return s;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return r}}function Os(r,s,a){var c=r.pendingLanes;if(c===0)return 0;var d=0,m=r.suspendedLanes,S=r.pingedLanes;r=r.warmLanes;var w=c&134217727;return w!==0?(c=w&~m,c!==0?d=Br(c):(S&=w,S!==0?d=Br(S):a||(a=w&~r,a!==0&&(d=Br(a))))):(w=c&~m,w!==0?d=Br(w):S!==0?d=Br(S):a||(a=c&~r,a!==0&&(d=Br(a)))),d===0?0:s!==0&&s!==d&&(s&m)===0&&(m=d&-d,a=s&-s,m>=a||m===32&&(a&4194048)!==0)?s:d}function wr(r,s){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&s)===0}function Mu(r,s){switch(r){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function No(){var r=Is;return Is<<=1,(Is&4194048)===0&&(Is=256),r}function Lu(){var r=Ds;return Ds<<=1,(Ds&62914560)===0&&(Ds=4194304),r}function Mo(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function ks(r,s){r.pendingLanes|=s,s!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function Pu(r,s,a,c,d,m){var S=r.pendingLanes;r.pendingLanes=a,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=a,r.entangledLanes&=a,r.errorRecoveryDisabledLanes&=a,r.shellSuspendCounter=0;var w=r.entanglements,L=r.expirationTimes,Q=r.hiddenUpdates;for(a=S&~a;0<a;){var re=31-Qt(a),oe=1<<re;w[re]=0,L[re]=-1;var Z=Q[re];if(Z!==null)for(Q[re]=null,re=0;re<Z.length;re++){var J=Z[re];J!==null&&(J.lane&=-536870913)}a&=~oe}c!==0&&Ns(r,c,0),m!==0&&d===0&&r.tag!==0&&(r.suspendedLanes|=m&~(S&~s))}function Ns(r,s,a){r.pendingLanes|=s,r.suspendedLanes&=~s;var c=31-Qt(s);r.entangledLanes|=s,r.entanglements[c]=r.entanglements[c]|1073741824|a&4194090}function Ms(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var c=31-Qt(a),d=1<<c;d&s|r[c]&s&&(r[c]|=s),a&=~d}}function al(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function ll(r){return r&=-r,2<r?8<r?(r&134217727)!==0?32:268435456:8:2}function $(){var r=K.p;return r!==0?r:(r=window.event,r===void 0?32:Xx(r.type))}function W(r,s){var a=K.p;try{return K.p=r,s()}finally{K.p=a}}var ee=Math.random().toString(36).slice(2),ce="__reactFiber$"+ee,fe="__reactProps$"+ee,ye="__reactContainer$"+ee,xe="__reactEvents$"+ee,ve="__reactListeners$"+ee,Ee="__reactHandles$"+ee,Re="__reactResources$"+ee,_e="__reactMarker$"+ee;function Se(r){delete r[ce],delete r[fe],delete r[xe],delete r[ve],delete r[Ee]}function ze(r){var s=r[ce];if(s)return s;for(var a=r.parentNode;a;){if(s=a[ye]||a[ce]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=Px(r);r!==null;){if(a=r[ce])return a;r=Px(r)}return s}r=a,a=r.parentNode}return null}function Ze(r){if(r=r[ce]||r[ye]){var s=r.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return r}return null}function yt(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r.stateNode;throw Error(i(33))}function Tt(r){var s=r[Re];return s||(s=r[Re]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function Le(r){r[_e]=!0}var st=new Set,Er={};function wn(r,s){cn(r,s),cn(r+"Capture",s)}function cn(r,s){for(Er[r]=s,r=0;r<s.length;r++)st.add(s[r])}var $n=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Lo={},Ri={};function Hr(r){return gt.call(Ri,r)?!0:gt.call(Lo,r)?!1:$n.test(r)?Ri[r]=!0:(Lo[r]=!0,!1)}function Fr(r,s,a){if(Hr(s))if(a===null)r.removeAttribute(s);else{switch(typeof a){case"undefined":case"function":case"symbol":r.removeAttribute(s);return;case"boolean":var c=s.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){r.removeAttribute(s);return}}r.setAttribute(s,""+a)}}function qr(r,s,a){if(a===null)r.removeAttribute(s);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(s);return}r.setAttribute(s,""+a)}}function Pe(r,s,a,c){if(c===null)r.removeAttribute(a);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(a);return}r.setAttributeNS(s,a,""+c)}}var kt,Vr;function mn(r){if(kt===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);kt=s&&s[1]||"",Vr=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+kt+r+Vr}var St=!1;function Ai(r,s){if(!r||St)return"";St=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(s){var oe=function(){throw Error()};if(Object.defineProperty(oe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(oe,[])}catch(J){var Z=J}Reflect.construct(r,[],oe)}else{try{oe.call()}catch(J){Z=J}r.call(oe.prototype)}}else{try{throw Error()}catch(J){Z=J}(oe=r())&&typeof oe.catch=="function"&&oe.catch(function(){})}}catch(J){if(J&&Z&&typeof J.stack=="string")return[J.stack,Z.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=c.DetermineComponentFrameRoot(),S=m[0],w=m[1];if(S&&w){var L=S.split(`
`),Q=w.split(`
`);for(d=c=0;c<L.length&&!L[c].includes("DetermineComponentFrameRoot");)c++;for(;d<Q.length&&!Q[d].includes("DetermineComponentFrameRoot");)d++;if(c===L.length||d===Q.length)for(c=L.length-1,d=Q.length-1;1<=c&&0<=d&&L[c]!==Q[d];)d--;for(;1<=c&&0<=d;c--,d--)if(L[c]!==Q[d]){if(c!==1||d!==1)do if(c--,d--,0>d||L[c]!==Q[d]){var re=`
`+L[c].replace(" at new "," at ");return r.displayName&&re.includes("<anonymous>")&&(re=re.replace("<anonymous>",r.displayName)),re}while(1<=c&&0<=d);break}}}finally{St=!1,Error.prepareStackTrace=a}return(a=r?r.displayName||r.name:"")?mn(a):""}function ju(r){switch(r.tag){case 26:case 27:case 5:return mn(r.type);case 16:return mn("Lazy");case 13:return mn("Suspense");case 19:return mn("SuspenseList");case 0:case 15:return Ai(r.type,!1);case 11:return Ai(r.type.render,!1);case 1:return Ai(r.type,!0);case 31:return mn("Activity");default:return""}}function $u(r){try{var s="";do s+=ju(r),r=r.return;while(r);return s}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Un(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Cb(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function rO(r){var s=Cb(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),c=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return d.call(this)},set:function(S){c=""+S,m.call(this,S)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(S){c=""+S},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function Uu(r){r._valueTracker||(r._valueTracker=rO(r))}function Rb(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return r&&(c=Cb(r)?r.checked?"true":"false":r.value),r=c,r!==a?(s.setValue(r),!0):!1}function zu(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}var iO=/[\n"\\]/g;function zn(r){return r.replace(iO,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function gp(r,s,a,c,d,m,S,w){r.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?r.type=S:r.removeAttribute("type"),s!=null?S==="number"?(s===0&&r.value===""||r.value!=s)&&(r.value=""+Un(s)):r.value!==""+Un(s)&&(r.value=""+Un(s)):S!=="submit"&&S!=="reset"||r.removeAttribute("value"),s!=null?yp(r,S,Un(s)):a!=null?yp(r,S,Un(a)):c!=null&&r.removeAttribute("value"),d==null&&m!=null&&(r.defaultChecked=!!m),d!=null&&(r.checked=d&&typeof d!="function"&&typeof d!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?r.name=""+Un(w):r.removeAttribute("name")}function Ab(r,s,a,c,d,m,S,w){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(r.type=m),s!=null||a!=null){if(!(m!=="submit"&&m!=="reset"||s!=null))return;a=a!=null?""+Un(a):"",s=s!=null?""+Un(s):a,w||s===r.value||(r.value=s),r.defaultValue=s}c=c??d,c=typeof c!="function"&&typeof c!="symbol"&&!!c,r.checked=w?r.checked:!!c,r.defaultChecked=!!c,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(r.name=S)}function yp(r,s,a){s==="number"&&zu(r.ownerDocument)===r||r.defaultValue===""+a||(r.defaultValue=""+a)}function Po(r,s,a,c){if(r=r.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<r.length;a++)d=s.hasOwnProperty("$"+r[a].value),r[a].selected!==d&&(r[a].selected=d),d&&c&&(r[a].defaultSelected=!0)}else{for(a=""+Un(a),s=null,d=0;d<r.length;d++){if(r[d].value===a){r[d].selected=!0,c&&(r[d].defaultSelected=!0);return}s!==null||r[d].disabled||(s=r[d])}s!==null&&(s.selected=!0)}}function Ib(r,s,a){if(s!=null&&(s=""+Un(s),s!==r.value&&(r.value=s),a==null)){r.defaultValue!==s&&(r.defaultValue=s);return}r.defaultValue=a!=null?""+Un(a):""}function Db(r,s,a,c){if(s==null){if(c!=null){if(a!=null)throw Error(i(92));if(ue(c)){if(1<c.length)throw Error(i(93));c=c[0]}a=c}a==null&&(a=""),s=a}a=Un(s),r.defaultValue=a,c=r.textContent,c===a&&c!==""&&c!==null&&(r.value=c)}function jo(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var sO=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ob(r,s,a){var c=s.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?c?r.setProperty(s,""):s==="float"?r.cssFloat="":r[s]="":c?r.setProperty(s,a):typeof a!="number"||a===0||sO.has(s)?s==="float"?r.cssFloat=a:r[s]=(""+a).trim():r[s]=a+"px"}function kb(r,s,a){if(s!=null&&typeof s!="object")throw Error(i(62));if(r=r.style,a!=null){for(var c in a)!a.hasOwnProperty(c)||s!=null&&s.hasOwnProperty(c)||(c.indexOf("--")===0?r.setProperty(c,""):c==="float"?r.cssFloat="":r[c]="");for(var d in s)c=s[d],s.hasOwnProperty(d)&&a[d]!==c&&Ob(r,d,c)}else for(var m in s)s.hasOwnProperty(m)&&Ob(r,m,s[m])}function vp(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var oO=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),aO=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Bu(r){return aO.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}var _p=null;function bp(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var $o=null,Uo=null;function Nb(r){var s=Ze(r);if(s&&(r=s.stateNode)){var a=r[fe]||null;e:switch(r=s.stateNode,s.type){case"input":if(gp(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+zn(""+s)+'"][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==r&&c.form===r.form){var d=c[fe]||null;if(!d)throw Error(i(90));gp(c,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(s=0;s<a.length;s++)c=a[s],c.form===r.form&&Rb(c)}break e;case"textarea":Ib(r,a.value,a.defaultValue);break e;case"select":s=a.value,s!=null&&Po(r,!!a.multiple,s,!1)}}}var Sp=!1;function Mb(r,s,a){if(Sp)return r(s,a);Sp=!0;try{var c=r(s);return c}finally{if(Sp=!1,($o!==null||Uo!==null)&&(Cd(),$o&&(s=$o,r=Uo,Uo=$o=null,Nb(s),r)))for(s=0;s<r.length;s++)Nb(r[s])}}function cl(r,s){var a=r.stateNode;if(a===null)return null;var c=a[fe]||null;if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(i(231,s,typeof a));return a}var Gr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xp=!1;if(Gr)try{var ul={};Object.defineProperty(ul,"passive",{get:function(){xp=!0}}),window.addEventListener("test",ul,ul),window.removeEventListener("test",ul,ul)}catch{xp=!1}var Ii=null,wp=null,Hu=null;function Lb(){if(Hu)return Hu;var r,s=wp,a=s.length,c,d="value"in Ii?Ii.value:Ii.textContent,m=d.length;for(r=0;r<a&&s[r]===d[r];r++);var S=a-r;for(c=1;c<=S&&s[a-c]===d[m-c];c++);return Hu=d.slice(r,1<c?1-c:void 0)}function Fu(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function qu(){return!0}function Pb(){return!1}function gn(r){function s(a,c,d,m,S){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=S,this.currentTarget=null;for(var w in r)r.hasOwnProperty(w)&&(a=r[w],this[w]=a?a(m):m[w]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?qu:Pb,this.isPropagationStopped=Pb,this}return y(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=qu)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=qu)},persist:function(){},isPersistent:qu}),s}var Ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vu=gn(Ls),dl=y({},Ls,{view:0,detail:0}),lO=gn(dl),Ep,Tp,fl,Gu=y({},dl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rp,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==fl&&(fl&&r.type==="mousemove"?(Ep=r.screenX-fl.screenX,Tp=r.screenY-fl.screenY):Tp=Ep=0,fl=r),Ep)},movementY:function(r){return"movementY"in r?r.movementY:Tp}}),jb=gn(Gu),cO=y({},Gu,{dataTransfer:0}),uO=gn(cO),dO=y({},dl,{relatedTarget:0}),Cp=gn(dO),fO=y({},Ls,{animationName:0,elapsedTime:0,pseudoElement:0}),hO=gn(fO),pO=y({},Ls,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),mO=gn(pO),gO=y({},Ls,{data:0}),$b=gn(gO),yO={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vO={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_O={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bO(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=_O[r])?!!s[r]:!1}function Rp(){return bO}var SO=y({},dl,{key:function(r){if(r.key){var s=yO[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Fu(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?vO[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rp,charCode:function(r){return r.type==="keypress"?Fu(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Fu(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),xO=gn(SO),wO=y({},Gu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ub=gn(wO),EO=y({},dl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rp}),TO=gn(EO),CO=y({},Ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),RO=gn(CO),AO=y({},Gu,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),IO=gn(AO),DO=y({},Ls,{newState:0,oldState:0}),OO=gn(DO),kO=[9,13,27,32],Ap=Gr&&"CompositionEvent"in window,hl=null;Gr&&"documentMode"in document&&(hl=document.documentMode);var NO=Gr&&"TextEvent"in window&&!hl,zb=Gr&&(!Ap||hl&&8<hl&&11>=hl),Bb=" ",Hb=!1;function Fb(r,s){switch(r){case"keyup":return kO.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qb(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var zo=!1;function MO(r,s){switch(r){case"compositionend":return qb(s);case"keypress":return s.which!==32?null:(Hb=!0,Bb);case"textInput":return r=s.data,r===Bb&&Hb?null:r;default:return null}}function LO(r,s){if(zo)return r==="compositionend"||!Ap&&Fb(r,s)?(r=Lb(),Hu=wp=Ii=null,zo=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return zb&&s.locale!=="ko"?null:s.data;default:return null}}var PO={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vb(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!PO[r.type]:s==="textarea"}function Gb(r,s,a,c){$o?Uo?Uo.push(c):Uo=[c]:$o=c,s=kd(s,"onChange"),0<s.length&&(a=new Vu("onChange","change",null,a,c),r.push({event:a,listeners:s}))}var pl=null,ml=null;function jO(r){Cx(r,0)}function Wu(r){var s=yt(r);if(Rb(s))return r}function Wb(r,s){if(r==="change")return s}var Yb=!1;if(Gr){var Ip;if(Gr){var Dp="oninput"in document;if(!Dp){var Qb=document.createElement("div");Qb.setAttribute("oninput","return;"),Dp=typeof Qb.oninput=="function"}Ip=Dp}else Ip=!1;Yb=Ip&&(!document.documentMode||9<document.documentMode)}function Kb(){pl&&(pl.detachEvent("onpropertychange",Xb),ml=pl=null)}function Xb(r){if(r.propertyName==="value"&&Wu(ml)){var s=[];Gb(s,ml,r,bp(r)),Mb(jO,s)}}function $O(r,s,a){r==="focusin"?(Kb(),pl=s,ml=a,pl.attachEvent("onpropertychange",Xb)):r==="focusout"&&Kb()}function UO(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Wu(ml)}function zO(r,s){if(r==="click")return Wu(s)}function BO(r,s){if(r==="input"||r==="change")return Wu(s)}function HO(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var En=typeof Object.is=="function"?Object.is:HO;function gl(r,s){if(En(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!gt.call(s,d)||!En(r[d],s[d]))return!1}return!0}function Zb(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Jb(r,s){var a=Zb(r);r=0;for(var c;a;){if(a.nodeType===3){if(c=r+a.textContent.length,r<=s&&c>=s)return{node:a,offset:s-r};r=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Zb(a)}}function e0(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?e0(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function t0(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var s=zu(r.document);s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=zu(r.document)}return s}function Op(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}var FO=Gr&&"documentMode"in document&&11>=document.documentMode,Bo=null,kp=null,yl=null,Np=!1;function n0(r,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Np||Bo==null||Bo!==zu(c)||(c=Bo,"selectionStart"in c&&Op(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),yl&&gl(yl,c)||(yl=c,c=kd(kp,"onSelect"),0<c.length&&(s=new Vu("onSelect","select",null,s,a),r.push({event:s,listeners:c}),s.target=Bo)))}function Ps(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var Ho={animationend:Ps("Animation","AnimationEnd"),animationiteration:Ps("Animation","AnimationIteration"),animationstart:Ps("Animation","AnimationStart"),transitionrun:Ps("Transition","TransitionRun"),transitionstart:Ps("Transition","TransitionStart"),transitioncancel:Ps("Transition","TransitionCancel"),transitionend:Ps("Transition","TransitionEnd")},Mp={},r0={};Gr&&(r0=document.createElement("div").style,"AnimationEvent"in window||(delete Ho.animationend.animation,delete Ho.animationiteration.animation,delete Ho.animationstart.animation),"TransitionEvent"in window||delete Ho.transitionend.transition);function js(r){if(Mp[r])return Mp[r];if(!Ho[r])return r;var s=Ho[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in r0)return Mp[r]=s[a];return r}var i0=js("animationend"),s0=js("animationiteration"),o0=js("animationstart"),qO=js("transitionrun"),VO=js("transitionstart"),GO=js("transitioncancel"),a0=js("transitionend"),l0=new Map,Lp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Lp.push("scrollEnd");function or(r,s){l0.set(r,s),wn(s,[r])}var c0=new WeakMap;function Bn(r,s){if(typeof r=="object"&&r!==null){var a=c0.get(r);return a!==void 0?a:(s={value:r,source:s,stack:$u(s)},c0.set(r,s),s)}return{value:r,source:s,stack:$u(s)}}var Hn=[],Fo=0,Pp=0;function Yu(){for(var r=Fo,s=Pp=Fo=0;s<r;){var a=Hn[s];Hn[s++]=null;var c=Hn[s];Hn[s++]=null;var d=Hn[s];Hn[s++]=null;var m=Hn[s];if(Hn[s++]=null,c!==null&&d!==null){var S=c.pending;S===null?d.next=d:(d.next=S.next,S.next=d),c.pending=d}m!==0&&u0(a,d,m)}}function Qu(r,s,a,c){Hn[Fo++]=r,Hn[Fo++]=s,Hn[Fo++]=a,Hn[Fo++]=c,Pp|=c,r.lanes|=c,r=r.alternate,r!==null&&(r.lanes|=c)}function jp(r,s,a,c){return Qu(r,s,a,c),Ku(r)}function qo(r,s){return Qu(r,null,null,s),Ku(r)}function u0(r,s,a){r.lanes|=a;var c=r.alternate;c!==null&&(c.lanes|=a);for(var d=!1,m=r.return;m!==null;)m.childLanes|=a,c=m.alternate,c!==null&&(c.childLanes|=a),m.tag===22&&(r=m.stateNode,r===null||r._visibility&1||(d=!0)),r=m,m=m.return;return r.tag===3?(m=r.stateNode,d&&s!==null&&(d=31-Qt(a),r=m.hiddenUpdates,c=r[d],c===null?r[d]=[s]:c.push(s),s.lane=a|536870912),m):null}function Ku(r){if(50<Hl)throw Hl=0,Fm=null,Error(i(185));for(var s=r.return;s!==null;)r=s,s=r.return;return r.tag===3?r.stateNode:null}var Vo={};function WO(r,s,a,c){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(r,s,a,c){return new WO(r,s,a,c)}function $p(r){return r=r.prototype,!(!r||!r.isReactComponent)}function Wr(r,s){var a=r.alternate;return a===null?(a=Tn(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&65011712,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a.refCleanup=r.refCleanup,a}function d0(r,s){r.flags&=65011714;var a=r.alternate;return a===null?(r.childLanes=0,r.lanes=s,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=a.childLanes,r.lanes=a.lanes,r.child=a.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=a.memoizedProps,r.memoizedState=a.memoizedState,r.updateQueue=a.updateQueue,r.type=a.type,s=a.dependencies,r.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),r}function Xu(r,s,a,c,d,m){var S=0;if(c=r,typeof r=="function")$p(r)&&(S=1);else if(typeof r=="string")S=Qk(r,a,de.current)?26:r==="html"||r==="head"||r==="body"?27:5;else e:switch(r){case F:return r=Tn(31,a,s,d),r.elementType=F,r.lanes=m,r;case x:return $s(a.children,d,m,s);case O:S=8,d|=24;break;case C:return r=Tn(12,a,s,d|2),r.elementType=C,r.lanes=m,r;case N:return r=Tn(13,a,s,d),r.elementType=N,r.lanes=m,r;case A:return r=Tn(19,a,s,d),r.elementType=A,r.lanes=m,r;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case I:case R:S=10;break e;case M:S=9;break e;case D:S=11;break e;case P:S=14;break e;case U:S=16,c=null;break e}S=29,a=Error(i(130,r===null?"null":typeof r,"")),c=null}return s=Tn(S,a,s,d),s.elementType=r,s.type=c,s.lanes=m,s}function $s(r,s,a,c){return r=Tn(7,r,c,s),r.lanes=a,r}function Up(r,s,a){return r=Tn(6,r,null,s),r.lanes=a,r}function zp(r,s,a){return s=Tn(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}var Go=[],Wo=0,Zu=null,Ju=0,Fn=[],qn=0,Us=null,Yr=1,Qr="";function zs(r,s){Go[Wo++]=Ju,Go[Wo++]=Zu,Zu=r,Ju=s}function f0(r,s,a){Fn[qn++]=Yr,Fn[qn++]=Qr,Fn[qn++]=Us,Us=r;var c=Yr;r=Qr;var d=32-Qt(c)-1;c&=~(1<<d),a+=1;var m=32-Qt(s)+d;if(30<m){var S=d-d%5;m=(c&(1<<S)-1).toString(32),c>>=S,d-=S,Yr=1<<32-Qt(s)+d|a<<d|c,Qr=m+r}else Yr=1<<m|a<<d|c,Qr=r}function Bp(r){r.return!==null&&(zs(r,1),f0(r,1,0))}function Hp(r){for(;r===Zu;)Zu=Go[--Wo],Go[Wo]=null,Ju=Go[--Wo],Go[Wo]=null;for(;r===Us;)Us=Fn[--qn],Fn[qn]=null,Qr=Fn[--qn],Fn[qn]=null,Yr=Fn[--qn],Fn[qn]=null}var un=null,Ct=null,Je=!1,Bs=null,Tr=!1,Fp=Error(i(519));function Hs(r){var s=Error(i(418,""));throw bl(Bn(s,r)),Fp}function h0(r){var s=r.stateNode,a=r.type,c=r.memoizedProps;switch(s[ce]=r,s[fe]=c,a){case"dialog":We("cancel",s),We("close",s);break;case"iframe":case"object":case"embed":We("load",s);break;case"video":case"audio":for(a=0;a<ql.length;a++)We(ql[a],s);break;case"source":We("error",s);break;case"img":case"image":case"link":We("error",s),We("load",s);break;case"details":We("toggle",s);break;case"input":We("invalid",s),Ab(s,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),Uu(s);break;case"select":We("invalid",s);break;case"textarea":We("invalid",s),Db(s,c.value,c.defaultValue,c.children),Uu(s)}a=c.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||s.textContent===""+a||c.suppressHydrationWarning===!0||Dx(s.textContent,a)?(c.popover!=null&&(We("beforetoggle",s),We("toggle",s)),c.onScroll!=null&&We("scroll",s),c.onScrollEnd!=null&&We("scrollend",s),c.onClick!=null&&(s.onclick=Nd),s=!0):s=!1,s||Hs(r)}function p0(r){for(un=r.return;un;)switch(un.tag){case 5:case 13:Tr=!1;return;case 27:case 3:Tr=!0;return;default:un=un.return}}function vl(r){if(r!==un)return!1;if(!Je)return p0(r),Je=!0,!1;var s=r.tag,a;if((a=s!==3&&s!==27)&&((a=s===5)&&(a=r.type,a=!(a!=="form"&&a!=="button")||sg(r.type,r.memoizedProps)),a=!a),a&&Ct&&Hs(r),p0(r),s===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(i(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8)if(a=r.data,a==="/$"){if(s===0){Ct=lr(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++;r=r.nextSibling}Ct=null}}else s===27?(s=Ct,Vi(r.type)?(r=cg,cg=null,Ct=r):Ct=s):Ct=un?lr(r.stateNode.nextSibling):null;return!0}function _l(){Ct=un=null,Je=!1}function m0(){var r=Bs;return r!==null&&(_n===null?_n=r:_n.push.apply(_n,r),Bs=null),r}function bl(r){Bs===null?Bs=[r]:Bs.push(r)}var qp=X(null),Fs=null,Kr=null;function Di(r,s,a){ie(qp,s._currentValue),s._currentValue=a}function Xr(r){r._currentValue=qp.current,le(qp)}function Vp(r,s,a){for(;r!==null;){var c=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),r===a)break;r=r.return}}function Gp(r,s,a,c){var d=r.child;for(d!==null&&(d.return=r);d!==null;){var m=d.dependencies;if(m!==null){var S=d.child;m=m.firstContext;e:for(;m!==null;){var w=m;m=d;for(var L=0;L<s.length;L++)if(w.context===s[L]){m.lanes|=a,w=m.alternate,w!==null&&(w.lanes|=a),Vp(m.return,a,r),c||(S=null);break e}m=w.next}}else if(d.tag===18){if(S=d.return,S===null)throw Error(i(341));S.lanes|=a,m=S.alternate,m!==null&&(m.lanes|=a),Vp(S,a,r),S=null}else S=d.child;if(S!==null)S.return=d;else for(S=d;S!==null;){if(S===r){S=null;break}if(d=S.sibling,d!==null){d.return=S.return,S=d;break}S=S.return}d=S}}function Sl(r,s,a,c){r=null;for(var d=s,m=!1;d!==null;){if(!m){if((d.flags&524288)!==0)m=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var S=d.alternate;if(S===null)throw Error(i(387));if(S=S.memoizedProps,S!==null){var w=d.type;En(d.pendingProps.value,S.value)||(r!==null?r.push(w):r=[w])}}else if(d===Ie.current){if(S=d.alternate,S===null)throw Error(i(387));S.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(r!==null?r.push(Kl):r=[Kl])}d=d.return}r!==null&&Gp(s,r,a,c),s.flags|=262144}function ed(r){for(r=r.firstContext;r!==null;){if(!En(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function qs(r){Fs=r,Kr=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function sn(r){return g0(Fs,r)}function td(r,s){return Fs===null&&qs(r),g0(r,s)}function g0(r,s){var a=s._currentValue;if(s={context:s,memoizedValue:a,next:null},Kr===null){if(r===null)throw Error(i(308));Kr=s,r.dependencies={lanes:0,firstContext:s},r.flags|=524288}else Kr=Kr.next=s;return a}var YO=typeof AbortController<"u"?AbortController:function(){var r=[],s=this.signal={aborted:!1,addEventListener:function(a,c){r.push(c)}};this.abort=function(){s.aborted=!0,r.forEach(function(a){return a()})}},QO=e.unstable_scheduleCallback,KO=e.unstable_NormalPriority,Pt={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wp(){return{controller:new YO,data:new Map,refCount:0}}function xl(r){r.refCount--,r.refCount===0&&QO(KO,function(){r.controller.abort()})}var wl=null,Yp=0,Yo=0,Qo=null;function XO(r,s){if(wl===null){var a=wl=[];Yp=0,Yo=Km(),Qo={status:"pending",value:void 0,then:function(c){a.push(c)}}}return Yp++,s.then(y0,y0),s}function y0(){if(--Yp===0&&wl!==null){Qo!==null&&(Qo.status="fulfilled");var r=wl;wl=null,Yo=0,Qo=null;for(var s=0;s<r.length;s++)(0,r[s])()}}function ZO(r,s){var a=[],c={status:"pending",value:null,reason:null,then:function(d){a.push(d)}};return r.then(function(){c.status="fulfilled",c.value=s;for(var d=0;d<a.length;d++)(0,a[d])(s)},function(d){for(c.status="rejected",c.reason=d,d=0;d<a.length;d++)(0,a[d])(void 0)}),c}var v0=j.S;j.S=function(r,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&XO(r,s),v0!==null&&v0(r,s)};var Vs=X(null);function Qp(){var r=Vs.current;return r!==null?r:ft.pooledCache}function nd(r,s){s===null?ie(Vs,Vs.current):ie(Vs,s.pool)}function _0(){var r=Qp();return r===null?null:{parent:Pt._currentValue,pool:r}}var El=Error(i(460)),b0=Error(i(474)),rd=Error(i(542)),Kp={then:function(){}};function S0(r){return r=r.status,r==="fulfilled"||r==="rejected"}function id(){}function x0(r,s,a){switch(a=r[a],a===void 0?r.push(s):a!==s&&(s.then(id,id),s=a),s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,E0(r),r;default:if(typeof s.status=="string")s.then(id,id);else{if(r=ft,r!==null&&100<r.shellSuspendCounter)throw Error(i(482));r=s,r.status="pending",r.then(function(c){if(s.status==="pending"){var d=s;d.status="fulfilled",d.value=c}},function(c){if(s.status==="pending"){var d=s;d.status="rejected",d.reason=c}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,E0(r),r}throw Tl=s,El}}var Tl=null;function w0(){if(Tl===null)throw Error(i(459));var r=Tl;return Tl=null,r}function E0(r){if(r===El||r===rd)throw Error(i(483))}var Oi=!1;function Xp(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zp(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function ki(r){return{lane:r,tag:0,payload:null,callback:null,next:null}}function Ni(r,s,a){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,(rt&2)!==0){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,s=Ku(r),u0(r,null,a),s}return Qu(r,c,s,a),Ku(r)}function Cl(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194048)!==0)){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,Ms(r,a)}}function Jp(r,s){var a=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};m===null?d=m=S:m=m.next=S,a=a.next}while(a!==null);m===null?d=m=s:m=m.next=s}else d=m=s;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,callbacks:c.callbacks},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}var em=!1;function Rl(){if(em){var r=Qo;if(r!==null)throw r}}function Al(r,s,a,c){em=!1;var d=r.updateQueue;Oi=!1;var m=d.firstBaseUpdate,S=d.lastBaseUpdate,w=d.shared.pending;if(w!==null){d.shared.pending=null;var L=w,Q=L.next;L.next=null,S===null?m=Q:S.next=Q,S=L;var re=r.alternate;re!==null&&(re=re.updateQueue,w=re.lastBaseUpdate,w!==S&&(w===null?re.firstBaseUpdate=Q:w.next=Q,re.lastBaseUpdate=L))}if(m!==null){var oe=d.baseState;S=0,re=Q=L=null,w=m;do{var Z=w.lane&-536870913,J=Z!==w.lane;if(J?(Qe&Z)===Z:(c&Z)===Z){Z!==0&&Z===Yo&&(em=!0),re!==null&&(re=re.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var Me=r,Ae=w;Z=s;var lt=a;switch(Ae.tag){case 1:if(Me=Ae.payload,typeof Me=="function"){oe=Me.call(lt,oe,Z);break e}oe=Me;break e;case 3:Me.flags=Me.flags&-65537|128;case 0:if(Me=Ae.payload,Z=typeof Me=="function"?Me.call(lt,oe,Z):Me,Z==null)break e;oe=y({},oe,Z);break e;case 2:Oi=!0}}Z=w.callback,Z!==null&&(r.flags|=64,J&&(r.flags|=8192),J=d.callbacks,J===null?d.callbacks=[Z]:J.push(Z))}else J={lane:Z,tag:w.tag,payload:w.payload,callback:w.callback,next:null},re===null?(Q=re=J,L=oe):re=re.next=J,S|=Z;if(w=w.next,w===null){if(w=d.shared.pending,w===null)break;J=w,w=J.next,J.next=null,d.lastBaseUpdate=J,d.shared.pending=null}}while(!0);re===null&&(L=oe),d.baseState=L,d.firstBaseUpdate=Q,d.lastBaseUpdate=re,m===null&&(d.shared.lanes=0),Bi|=S,r.lanes=S,r.memoizedState=oe}}function T0(r,s){if(typeof r!="function")throw Error(i(191,r));r.call(s)}function C0(r,s){var a=r.callbacks;if(a!==null)for(r.callbacks=null,r=0;r<a.length;r++)T0(a[r],s)}var Ko=X(null),sd=X(0);function R0(r,s){r=ii,ie(sd,r),ie(Ko,s),ii=r|s.baseLanes}function tm(){ie(sd,ii),ie(Ko,Ko.current)}function nm(){ii=sd.current,le(Ko),le(sd)}var Mi=0,He=null,ot=null,Nt=null,od=!1,Xo=!1,Gs=!1,ad=0,Il=0,Zo=null,JO=0;function Dt(){throw Error(i(321))}function rm(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!En(r[a],s[a]))return!1;return!0}function im(r,s,a,c,d,m){return Mi=m,He=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,j.H=r===null||r.memoizedState===null?uS:dS,Gs=!1,m=a(c,d),Gs=!1,Xo&&(m=I0(s,a,c,d)),A0(r),m}function A0(r){j.H=hd;var s=ot!==null&&ot.next!==null;if(Mi=0,Nt=ot=He=null,od=!1,Il=0,Zo=null,s)throw Error(i(300));r===null||zt||(r=r.dependencies,r!==null&&ed(r)&&(zt=!0))}function I0(r,s,a,c){He=r;var d=0;do{if(Xo&&(Zo=null),Il=0,Xo=!1,25<=d)throw Error(i(301));if(d+=1,Nt=ot=null,r.updateQueue!=null){var m=r.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}j.H=ok,m=s(a,c)}while(Xo);return m}function ek(){var r=j.H,s=r.useState()[0];return s=typeof s.then=="function"?Dl(s):s,r=r.useState()[0],(ot!==null?ot.memoizedState:null)!==r&&(He.flags|=1024),s}function sm(){var r=ad!==0;return ad=0,r}function om(r,s,a){s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~a}function am(r){if(od){for(r=r.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}od=!1}Mi=0,Nt=ot=He=null,Xo=!1,Il=ad=0,Zo=null}function yn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?He.memoizedState=Nt=r:Nt=Nt.next=r,Nt}function Mt(){if(ot===null){var r=He.alternate;r=r!==null?r.memoizedState:null}else r=ot.next;var s=Nt===null?He.memoizedState:Nt.next;if(s!==null)Nt=s,ot=r;else{if(r===null)throw He.alternate===null?Error(i(467)):Error(i(310));ot=r,r={memoizedState:ot.memoizedState,baseState:ot.baseState,baseQueue:ot.baseQueue,queue:ot.queue,next:null},Nt===null?He.memoizedState=Nt=r:Nt=Nt.next=r}return Nt}function lm(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Dl(r){var s=Il;return Il+=1,Zo===null&&(Zo=[]),r=x0(Zo,r,s),s=He,(Nt===null?s.memoizedState:Nt.next)===null&&(s=s.alternate,j.H=s===null||s.memoizedState===null?uS:dS),r}function ld(r){if(r!==null&&typeof r=="object"){if(typeof r.then=="function")return Dl(r);if(r.$$typeof===R)return sn(r)}throw Error(i(438,String(r)))}function cm(r){var s=null,a=He.updateQueue;if(a!==null&&(s=a.memoCache),s==null){var c=He.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(s={data:c.data.map(function(d){return d.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),a===null&&(a=lm(),He.updateQueue=a),a.memoCache=s,a=s.data[s.index],a===void 0)for(a=s.data[s.index]=Array(r),c=0;c<r;c++)a[c]=H;return s.index++,a}function Zr(r,s){return typeof s=="function"?s(r):s}function cd(r){var s=Mt();return um(s,ot,r)}function um(r,s,a){var c=r.queue;if(c===null)throw Error(i(311));c.lastRenderedReducer=a;var d=r.baseQueue,m=c.pending;if(m!==null){if(d!==null){var S=d.next;d.next=m.next,m.next=S}s.baseQueue=d=m,c.pending=null}if(m=r.baseState,d===null)r.memoizedState=m;else{s=d.next;var w=S=null,L=null,Q=s,re=!1;do{var oe=Q.lane&-536870913;if(oe!==Q.lane?(Qe&oe)===oe:(Mi&oe)===oe){var Z=Q.revertLane;if(Z===0)L!==null&&(L=L.next={lane:0,revertLane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),oe===Yo&&(re=!0);else if((Mi&Z)===Z){Q=Q.next,Z===Yo&&(re=!0);continue}else oe={lane:0,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},L===null?(w=L=oe,S=m):L=L.next=oe,He.lanes|=Z,Bi|=Z;oe=Q.action,Gs&&a(m,oe),m=Q.hasEagerState?Q.eagerState:a(m,oe)}else Z={lane:oe,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},L===null?(w=L=Z,S=m):L=L.next=Z,He.lanes|=oe,Bi|=oe;Q=Q.next}while(Q!==null&&Q!==s);if(L===null?S=m:L.next=w,!En(m,r.memoizedState)&&(zt=!0,re&&(a=Qo,a!==null)))throw a;r.memoizedState=m,r.baseState=S,r.baseQueue=L,c.lastRenderedState=m}return d===null&&(c.lanes=0),[r.memoizedState,c.dispatch]}function dm(r){var s=Mt(),a=s.queue;if(a===null)throw Error(i(311));a.lastRenderedReducer=r;var c=a.dispatch,d=a.pending,m=s.memoizedState;if(d!==null){a.pending=null;var S=d=d.next;do m=r(m,S.action),S=S.next;while(S!==d);En(m,s.memoizedState)||(zt=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),a.lastRenderedState=m}return[m,c]}function D0(r,s,a){var c=He,d=Mt(),m=Je;if(m){if(a===void 0)throw Error(i(407));a=a()}else a=s();var S=!En((ot||d).memoizedState,a);S&&(d.memoizedState=a,zt=!0),d=d.queue;var w=N0.bind(null,c,d,r);if(Ol(2048,8,w,[r]),d.getSnapshot!==s||S||Nt!==null&&Nt.memoizedState.tag&1){if(c.flags|=2048,Jo(9,ud(),k0.bind(null,c,d,a,s),null),ft===null)throw Error(i(349));m||(Mi&124)!==0||O0(c,s,a)}return a}function O0(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=He.updateQueue,s===null?(s=lm(),He.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function k0(r,s,a,c){s.value=a,s.getSnapshot=c,M0(s)&&L0(r)}function N0(r,s,a){return a(function(){M0(s)&&L0(r)})}function M0(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!En(r,a)}catch{return!0}}function L0(r){var s=qo(r,2);s!==null&&Dn(s,r,2)}function fm(r){var s=yn();if(typeof r=="function"){var a=r;if(r=a(),Gs){sr(!0);try{a()}finally{sr(!1)}}}return s.memoizedState=s.baseState=r,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zr,lastRenderedState:r},s}function P0(r,s,a,c){return r.baseState=a,um(r,ot,typeof c=="function"?c:Zr)}function tk(r,s,a,c,d){if(fd(r))throw Error(i(485));if(r=s.action,r!==null){var m={payload:d,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){m.listeners.push(S)}};j.T!==null?a(!0):m.isTransition=!1,c(m),a=s.pending,a===null?(m.next=s.pending=m,j0(s,m)):(m.next=a.next,s.pending=a.next=m)}}function j0(r,s){var a=s.action,c=s.payload,d=r.state;if(s.isTransition){var m=j.T,S={};j.T=S;try{var w=a(d,c),L=j.S;L!==null&&L(S,w),$0(r,s,w)}catch(Q){hm(r,s,Q)}finally{j.T=m}}else try{m=a(d,c),$0(r,s,m)}catch(Q){hm(r,s,Q)}}function $0(r,s,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(c){U0(r,s,c)},function(c){return hm(r,s,c)}):U0(r,s,a)}function U0(r,s,a){s.status="fulfilled",s.value=a,z0(s),r.state=a,s=r.pending,s!==null&&(a=s.next,a===s?r.pending=null:(a=a.next,s.next=a,j0(r,a)))}function hm(r,s,a){var c=r.pending;if(r.pending=null,c!==null){c=c.next;do s.status="rejected",s.reason=a,z0(s),s=s.next;while(s!==c)}r.action=null}function z0(r){r=r.listeners;for(var s=0;s<r.length;s++)(0,r[s])()}function B0(r,s){return s}function H0(r,s){if(Je){var a=ft.formState;if(a!==null){e:{var c=He;if(Je){if(Ct){t:{for(var d=Ct,m=Tr;d.nodeType!==8;){if(!m){d=null;break t}if(d=lr(d.nextSibling),d===null){d=null;break t}}m=d.data,d=m==="F!"||m==="F"?d:null}if(d){Ct=lr(d.nextSibling),c=d.data==="F!";break e}}Hs(c)}c=!1}c&&(s=a[0])}}return a=yn(),a.memoizedState=a.baseState=s,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:B0,lastRenderedState:s},a.queue=c,a=aS.bind(null,He,c),c.dispatch=a,c=fm(!1),m=vm.bind(null,He,!1,c.queue),c=yn(),d={state:s,dispatch:null,action:r,pending:null},c.queue=d,a=tk.bind(null,He,d,m,a),d.dispatch=a,c.memoizedState=r,[s,a,!1]}function F0(r){var s=Mt();return q0(s,ot,r)}function q0(r,s,a){if(s=um(r,s,B0)[0],r=cd(Zr)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var c=Dl(s)}catch(S){throw S===El?rd:S}else c=s;s=Mt();var d=s.queue,m=d.dispatch;return a!==s.memoizedState&&(He.flags|=2048,Jo(9,ud(),nk.bind(null,d,a),null)),[c,m,r]}function nk(r,s){r.action=s}function V0(r){var s=Mt(),a=ot;if(a!==null)return q0(s,a,r);Mt(),s=s.memoizedState,a=Mt();var c=a.queue.dispatch;return a.memoizedState=r,[s,c,!1]}function Jo(r,s,a,c){return r={tag:r,create:a,deps:c,inst:s,next:null},s=He.updateQueue,s===null&&(s=lm(),He.updateQueue=s),a=s.lastEffect,a===null?s.lastEffect=r.next=r:(c=a.next,a.next=r,r.next=c,s.lastEffect=r),r}function ud(){return{destroy:void 0,resource:void 0}}function G0(){return Mt().memoizedState}function dd(r,s,a,c){var d=yn();c=c===void 0?null:c,He.flags|=r,d.memoizedState=Jo(1|s,ud(),a,c)}function Ol(r,s,a,c){var d=Mt();c=c===void 0?null:c;var m=d.memoizedState.inst;ot!==null&&c!==null&&rm(c,ot.memoizedState.deps)?d.memoizedState=Jo(s,m,a,c):(He.flags|=r,d.memoizedState=Jo(1|s,m,a,c))}function W0(r,s){dd(8390656,8,r,s)}function Y0(r,s){Ol(2048,8,r,s)}function Q0(r,s){return Ol(4,2,r,s)}function K0(r,s){return Ol(4,4,r,s)}function X0(r,s){if(typeof s=="function"){r=r();var a=s(r);return function(){typeof a=="function"?a():s(null)}}if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function Z0(r,s,a){a=a!=null?a.concat([r]):null,Ol(4,4,X0.bind(null,s,r),a)}function pm(){}function J0(r,s){var a=Mt();s=s===void 0?null:s;var c=a.memoizedState;return s!==null&&rm(s,c[1])?c[0]:(a.memoizedState=[r,s],r)}function eS(r,s){var a=Mt();s=s===void 0?null:s;var c=a.memoizedState;if(s!==null&&rm(s,c[1]))return c[0];if(c=r(),Gs){sr(!0);try{r()}finally{sr(!1)}}return a.memoizedState=[c,s],c}function mm(r,s,a){return a===void 0||(Mi&1073741824)!==0?r.memoizedState=s:(r.memoizedState=a,r=rx(),He.lanes|=r,Bi|=r,a)}function tS(r,s,a,c){return En(a,s)?a:Ko.current!==null?(r=mm(r,a,c),En(r,s)||(zt=!0),r):(Mi&42)===0?(zt=!0,r.memoizedState=a):(r=rx(),He.lanes|=r,Bi|=r,s)}function nS(r,s,a,c,d){var m=K.p;K.p=m!==0&&8>m?m:8;var S=j.T,w={};j.T=w,vm(r,!1,s,a);try{var L=d(),Q=j.S;if(Q!==null&&Q(w,L),L!==null&&typeof L=="object"&&typeof L.then=="function"){var re=ZO(L,c);kl(r,s,re,In(r))}else kl(r,s,c,In(r))}catch(oe){kl(r,s,{then:function(){},status:"rejected",reason:oe},In())}finally{K.p=m,j.T=S}}function rk(){}function gm(r,s,a,c){if(r.tag!==5)throw Error(i(476));var d=rS(r).queue;nS(r,d,s,ne,a===null?rk:function(){return iS(r),a(c)})}function rS(r){var s=r.memoizedState;if(s!==null)return s;s={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zr,lastRenderedState:ne},next:null};var a={};return s.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zr,lastRenderedState:a},next:null},r.memoizedState=s,r=r.alternate,r!==null&&(r.memoizedState=s),s}function iS(r){var s=rS(r).next.queue;kl(r,s,{},In())}function ym(){return sn(Kl)}function sS(){return Mt().memoizedState}function oS(){return Mt().memoizedState}function ik(r){for(var s=r.return;s!==null;){switch(s.tag){case 24:case 3:var a=In();r=ki(a);var c=Ni(s,r,a);c!==null&&(Dn(c,s,a),Cl(c,s,a)),s={cache:Wp()},r.payload=s;return}s=s.return}}function sk(r,s,a){var c=In();a={lane:c,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},fd(r)?lS(s,a):(a=jp(r,s,a,c),a!==null&&(Dn(a,r,c),cS(a,s,c)))}function aS(r,s,a){var c=In();kl(r,s,a,c)}function kl(r,s,a,c){var d={lane:c,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(fd(r))lS(s,d);else{var m=r.alternate;if(r.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var S=s.lastRenderedState,w=m(S,a);if(d.hasEagerState=!0,d.eagerState=w,En(w,S))return Qu(r,s,d,0),ft===null&&Yu(),!1}catch{}finally{}if(a=jp(r,s,d,c),a!==null)return Dn(a,r,c),cS(a,s,c),!0}return!1}function vm(r,s,a,c){if(c={lane:2,revertLane:Km(),action:c,hasEagerState:!1,eagerState:null,next:null},fd(r)){if(s)throw Error(i(479))}else s=jp(r,a,c,2),s!==null&&Dn(s,r,2)}function fd(r){var s=r.alternate;return r===He||s!==null&&s===He}function lS(r,s){Xo=od=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function cS(r,s,a){if((a&4194048)!==0){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,Ms(r,a)}}var hd={readContext:sn,use:ld,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useLayoutEffect:Dt,useInsertionEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useSyncExternalStore:Dt,useId:Dt,useHostTransitionStatus:Dt,useFormState:Dt,useActionState:Dt,useOptimistic:Dt,useMemoCache:Dt,useCacheRefresh:Dt},uS={readContext:sn,use:ld,useCallback:function(r,s){return yn().memoizedState=[r,s===void 0?null:s],r},useContext:sn,useEffect:W0,useImperativeHandle:function(r,s,a){a=a!=null?a.concat([r]):null,dd(4194308,4,X0.bind(null,s,r),a)},useLayoutEffect:function(r,s){return dd(4194308,4,r,s)},useInsertionEffect:function(r,s){dd(4,2,r,s)},useMemo:function(r,s){var a=yn();s=s===void 0?null:s;var c=r();if(Gs){sr(!0);try{r()}finally{sr(!1)}}return a.memoizedState=[c,s],c},useReducer:function(r,s,a){var c=yn();if(a!==void 0){var d=a(s);if(Gs){sr(!0);try{a(s)}finally{sr(!1)}}}else d=s;return c.memoizedState=c.baseState=d,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:d},c.queue=r,r=r.dispatch=sk.bind(null,He,r),[c.memoizedState,r]},useRef:function(r){var s=yn();return r={current:r},s.memoizedState=r},useState:function(r){r=fm(r);var s=r.queue,a=aS.bind(null,He,s);return s.dispatch=a,[r.memoizedState,a]},useDebugValue:pm,useDeferredValue:function(r,s){var a=yn();return mm(a,r,s)},useTransition:function(){var r=fm(!1);return r=nS.bind(null,He,r.queue,!0,!1),yn().memoizedState=r,[!1,r]},useSyncExternalStore:function(r,s,a){var c=He,d=yn();if(Je){if(a===void 0)throw Error(i(407));a=a()}else{if(a=s(),ft===null)throw Error(i(349));(Qe&124)!==0||O0(c,s,a)}d.memoizedState=a;var m={value:a,getSnapshot:s};return d.queue=m,W0(N0.bind(null,c,m,r),[r]),c.flags|=2048,Jo(9,ud(),k0.bind(null,c,m,a,s),null),a},useId:function(){var r=yn(),s=ft.identifierPrefix;if(Je){var a=Qr,c=Yr;a=(c&~(1<<32-Qt(c)-1)).toString(32)+a,s="«"+s+"R"+a,a=ad++,0<a&&(s+="H"+a.toString(32)),s+="»"}else a=JO++,s="«"+s+"r"+a.toString(32)+"»";return r.memoizedState=s},useHostTransitionStatus:ym,useFormState:H0,useActionState:H0,useOptimistic:function(r){var s=yn();s.memoizedState=s.baseState=r;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=a,s=vm.bind(null,He,!0,a),a.dispatch=s,[r,s]},useMemoCache:cm,useCacheRefresh:function(){return yn().memoizedState=ik.bind(null,He)}},dS={readContext:sn,use:ld,useCallback:J0,useContext:sn,useEffect:Y0,useImperativeHandle:Z0,useInsertionEffect:Q0,useLayoutEffect:K0,useMemo:eS,useReducer:cd,useRef:G0,useState:function(){return cd(Zr)},useDebugValue:pm,useDeferredValue:function(r,s){var a=Mt();return tS(a,ot.memoizedState,r,s)},useTransition:function(){var r=cd(Zr)[0],s=Mt().memoizedState;return[typeof r=="boolean"?r:Dl(r),s]},useSyncExternalStore:D0,useId:sS,useHostTransitionStatus:ym,useFormState:F0,useActionState:F0,useOptimistic:function(r,s){var a=Mt();return P0(a,ot,r,s)},useMemoCache:cm,useCacheRefresh:oS},ok={readContext:sn,use:ld,useCallback:J0,useContext:sn,useEffect:Y0,useImperativeHandle:Z0,useInsertionEffect:Q0,useLayoutEffect:K0,useMemo:eS,useReducer:dm,useRef:G0,useState:function(){return dm(Zr)},useDebugValue:pm,useDeferredValue:function(r,s){var a=Mt();return ot===null?mm(a,r,s):tS(a,ot.memoizedState,r,s)},useTransition:function(){var r=dm(Zr)[0],s=Mt().memoizedState;return[typeof r=="boolean"?r:Dl(r),s]},useSyncExternalStore:D0,useId:sS,useHostTransitionStatus:ym,useFormState:V0,useActionState:V0,useOptimistic:function(r,s){var a=Mt();return ot!==null?P0(a,ot,r,s):(a.baseState=r,[r,a.queue.dispatch])},useMemoCache:cm,useCacheRefresh:oS},ea=null,Nl=0;function pd(r){var s=Nl;return Nl+=1,ea===null&&(ea=[]),x0(ea,r,s)}function Ml(r,s){s=s.props.ref,r.ref=s!==void 0?s:null}function md(r,s){throw s.$$typeof===_?Error(i(525)):(r=Object.prototype.toString.call(s),Error(i(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r)))}function fS(r){var s=r._init;return s(r._payload)}function hS(r){function s(q,B){if(r){var Y=q.deletions;Y===null?(q.deletions=[B],q.flags|=16):Y.push(B)}}function a(q,B){if(!r)return null;for(;B!==null;)s(q,B),B=B.sibling;return null}function c(q){for(var B=new Map;q!==null;)q.key!==null?B.set(q.key,q):B.set(q.index,q),q=q.sibling;return B}function d(q,B){return q=Wr(q,B),q.index=0,q.sibling=null,q}function m(q,B,Y){return q.index=Y,r?(Y=q.alternate,Y!==null?(Y=Y.index,Y<B?(q.flags|=67108866,B):Y):(q.flags|=67108866,B)):(q.flags|=1048576,B)}function S(q){return r&&q.alternate===null&&(q.flags|=67108866),q}function w(q,B,Y,se){return B===null||B.tag!==6?(B=Up(Y,q.mode,se),B.return=q,B):(B=d(B,Y),B.return=q,B)}function L(q,B,Y,se){var ge=Y.type;return ge===x?re(q,B,Y.props.children,se,Y.key):B!==null&&(B.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===U&&fS(ge)===B.type)?(B=d(B,Y.props),Ml(B,Y),B.return=q,B):(B=Xu(Y.type,Y.key,Y.props,null,q.mode,se),Ml(B,Y),B.return=q,B)}function Q(q,B,Y,se){return B===null||B.tag!==4||B.stateNode.containerInfo!==Y.containerInfo||B.stateNode.implementation!==Y.implementation?(B=zp(Y,q.mode,se),B.return=q,B):(B=d(B,Y.children||[]),B.return=q,B)}function re(q,B,Y,se,ge){return B===null||B.tag!==7?(B=$s(Y,q.mode,se,ge),B.return=q,B):(B=d(B,Y),B.return=q,B)}function oe(q,B,Y){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return B=Up(""+B,q.mode,Y),B.return=q,B;if(typeof B=="object"&&B!==null){switch(B.$$typeof){case v:return Y=Xu(B.type,B.key,B.props,null,q.mode,Y),Ml(Y,B),Y.return=q,Y;case b:return B=zp(B,q.mode,Y),B.return=q,B;case U:var se=B._init;return B=se(B._payload),oe(q,B,Y)}if(ue(B)||G(B))return B=$s(B,q.mode,Y,null),B.return=q,B;if(typeof B.then=="function")return oe(q,pd(B),Y);if(B.$$typeof===R)return oe(q,td(q,B),Y);md(q,B)}return null}function Z(q,B,Y,se){var ge=B!==null?B.key:null;if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return ge!==null?null:w(q,B,""+Y,se);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case v:return Y.key===ge?L(q,B,Y,se):null;case b:return Y.key===ge?Q(q,B,Y,se):null;case U:return ge=Y._init,Y=ge(Y._payload),Z(q,B,Y,se)}if(ue(Y)||G(Y))return ge!==null?null:re(q,B,Y,se,null);if(typeof Y.then=="function")return Z(q,B,pd(Y),se);if(Y.$$typeof===R)return Z(q,B,td(q,Y),se);md(q,Y)}return null}function J(q,B,Y,se,ge){if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return q=q.get(Y)||null,w(B,q,""+se,ge);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case v:return q=q.get(se.key===null?Y:se.key)||null,L(B,q,se,ge);case b:return q=q.get(se.key===null?Y:se.key)||null,Q(B,q,se,ge);case U:var Fe=se._init;return se=Fe(se._payload),J(q,B,Y,se,ge)}if(ue(se)||G(se))return q=q.get(Y)||null,re(B,q,se,ge,null);if(typeof se.then=="function")return J(q,B,Y,pd(se),ge);if(se.$$typeof===R)return J(q,B,Y,td(B,se),ge);md(B,se)}return null}function Me(q,B,Y,se){for(var ge=null,Fe=null,we=B,De=B=0,Ht=null;we!==null&&De<Y.length;De++){we.index>De?(Ht=we,we=null):Ht=we.sibling;var Ke=Z(q,we,Y[De],se);if(Ke===null){we===null&&(we=Ht);break}r&&we&&Ke.alternate===null&&s(q,we),B=m(Ke,B,De),Fe===null?ge=Ke:Fe.sibling=Ke,Fe=Ke,we=Ht}if(De===Y.length)return a(q,we),Je&&zs(q,De),ge;if(we===null){for(;De<Y.length;De++)we=oe(q,Y[De],se),we!==null&&(B=m(we,B,De),Fe===null?ge=we:Fe.sibling=we,Fe=we);return Je&&zs(q,De),ge}for(we=c(we);De<Y.length;De++)Ht=J(we,q,De,Y[De],se),Ht!==null&&(r&&Ht.alternate!==null&&we.delete(Ht.key===null?De:Ht.key),B=m(Ht,B,De),Fe===null?ge=Ht:Fe.sibling=Ht,Fe=Ht);return r&&we.forEach(function(Ki){return s(q,Ki)}),Je&&zs(q,De),ge}function Ae(q,B,Y,se){if(Y==null)throw Error(i(151));for(var ge=null,Fe=null,we=B,De=B=0,Ht=null,Ke=Y.next();we!==null&&!Ke.done;De++,Ke=Y.next()){we.index>De?(Ht=we,we=null):Ht=we.sibling;var Ki=Z(q,we,Ke.value,se);if(Ki===null){we===null&&(we=Ht);break}r&&we&&Ki.alternate===null&&s(q,we),B=m(Ki,B,De),Fe===null?ge=Ki:Fe.sibling=Ki,Fe=Ki,we=Ht}if(Ke.done)return a(q,we),Je&&zs(q,De),ge;if(we===null){for(;!Ke.done;De++,Ke=Y.next())Ke=oe(q,Ke.value,se),Ke!==null&&(B=m(Ke,B,De),Fe===null?ge=Ke:Fe.sibling=Ke,Fe=Ke);return Je&&zs(q,De),ge}for(we=c(we);!Ke.done;De++,Ke=Y.next())Ke=J(we,q,De,Ke.value,se),Ke!==null&&(r&&Ke.alternate!==null&&we.delete(Ke.key===null?De:Ke.key),B=m(Ke,B,De),Fe===null?ge=Ke:Fe.sibling=Ke,Fe=Ke);return r&&we.forEach(function(aN){return s(q,aN)}),Je&&zs(q,De),ge}function lt(q,B,Y,se){if(typeof Y=="object"&&Y!==null&&Y.type===x&&Y.key===null&&(Y=Y.props.children),typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case v:e:{for(var ge=Y.key;B!==null;){if(B.key===ge){if(ge=Y.type,ge===x){if(B.tag===7){a(q,B.sibling),se=d(B,Y.props.children),se.return=q,q=se;break e}}else if(B.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===U&&fS(ge)===B.type){a(q,B.sibling),se=d(B,Y.props),Ml(se,Y),se.return=q,q=se;break e}a(q,B);break}else s(q,B);B=B.sibling}Y.type===x?(se=$s(Y.props.children,q.mode,se,Y.key),se.return=q,q=se):(se=Xu(Y.type,Y.key,Y.props,null,q.mode,se),Ml(se,Y),se.return=q,q=se)}return S(q);case b:e:{for(ge=Y.key;B!==null;){if(B.key===ge)if(B.tag===4&&B.stateNode.containerInfo===Y.containerInfo&&B.stateNode.implementation===Y.implementation){a(q,B.sibling),se=d(B,Y.children||[]),se.return=q,q=se;break e}else{a(q,B);break}else s(q,B);B=B.sibling}se=zp(Y,q.mode,se),se.return=q,q=se}return S(q);case U:return ge=Y._init,Y=ge(Y._payload),lt(q,B,Y,se)}if(ue(Y))return Me(q,B,Y,se);if(G(Y)){if(ge=G(Y),typeof ge!="function")throw Error(i(150));return Y=ge.call(Y),Ae(q,B,Y,se)}if(typeof Y.then=="function")return lt(q,B,pd(Y),se);if(Y.$$typeof===R)return lt(q,B,td(q,Y),se);md(q,Y)}return typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint"?(Y=""+Y,B!==null&&B.tag===6?(a(q,B.sibling),se=d(B,Y),se.return=q,q=se):(a(q,B),se=Up(Y,q.mode,se),se.return=q,q=se),S(q)):a(q,B)}return function(q,B,Y,se){try{Nl=0;var ge=lt(q,B,Y,se);return ea=null,ge}catch(we){if(we===El||we===rd)throw we;var Fe=Tn(29,we,null,q.mode);return Fe.lanes=se,Fe.return=q,Fe}finally{}}}var ta=hS(!0),pS=hS(!1),Vn=X(null),Cr=null;function Li(r){var s=r.alternate;ie(jt,jt.current&1),ie(Vn,r),Cr===null&&(s===null||Ko.current!==null||s.memoizedState!==null)&&(Cr=r)}function mS(r){if(r.tag===22){if(ie(jt,jt.current),ie(Vn,r),Cr===null){var s=r.alternate;s!==null&&s.memoizedState!==null&&(Cr=r)}}else Pi()}function Pi(){ie(jt,jt.current),ie(Vn,Vn.current)}function Jr(r){le(Vn),Cr===r&&(Cr=null),le(jt)}var jt=X(0);function gd(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||lg(a)))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}function _m(r,s,a,c){s=r.memoizedState,a=a(c,s),a=a==null?s:y({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var bm={enqueueSetState:function(r,s,a){r=r._reactInternals;var c=In(),d=ki(c);d.payload=s,a!=null&&(d.callback=a),s=Ni(r,d,c),s!==null&&(Dn(s,r,c),Cl(s,r,c))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var c=In(),d=ki(c);d.tag=1,d.payload=s,a!=null&&(d.callback=a),s=Ni(r,d,c),s!==null&&(Dn(s,r,c),Cl(s,r,c))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=In(),c=ki(a);c.tag=2,s!=null&&(c.callback=s),s=Ni(r,c,a),s!==null&&(Dn(s,r,a),Cl(s,r,a))}};function gS(r,s,a,c,d,m,S){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,m,S):s.prototype&&s.prototype.isPureReactComponent?!gl(a,c)||!gl(d,m):!0}function yS(r,s,a,c){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==r&&bm.enqueueReplaceState(s,s.state,null)}function Ws(r,s){var a=s;if("ref"in s){a={};for(var c in s)c!=="ref"&&(a[c]=s[c])}if(r=r.defaultProps){a===s&&(a=y({},a));for(var d in r)a[d]===void 0&&(a[d]=r[d])}return a}var yd=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function vS(r){yd(r)}function _S(r){console.error(r)}function bS(r){yd(r)}function vd(r,s){try{var a=r.onUncaughtError;a(s.value,{componentStack:s.stack})}catch(c){setTimeout(function(){throw c})}}function SS(r,s,a){try{var c=r.onCaughtError;c(a.value,{componentStack:a.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function Sm(r,s,a){return a=ki(a),a.tag=3,a.payload={element:null},a.callback=function(){vd(r,s)},a}function xS(r){return r=ki(r),r.tag=3,r}function wS(r,s,a,c){var d=a.type.getDerivedStateFromError;if(typeof d=="function"){var m=c.value;r.payload=function(){return d(m)},r.callback=function(){SS(s,a,c)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(r.callback=function(){SS(s,a,c),typeof d!="function"&&(Hi===null?Hi=new Set([this]):Hi.add(this));var w=c.stack;this.componentDidCatch(c.value,{componentStack:w!==null?w:""})})}function ak(r,s,a,c,d){if(a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(s=a.alternate,s!==null&&Sl(s,a,d,!0),a=Vn.current,a!==null){switch(a.tag){case 13:return Cr===null?Vm():a.alternate===null&&Rt===0&&(Rt=3),a.flags&=-257,a.flags|=65536,a.lanes=d,c===Kp?a.flags|=16384:(s=a.updateQueue,s===null?a.updateQueue=new Set([c]):s.add(c),Wm(r,c,d)),!1;case 22:return a.flags|=65536,c===Kp?a.flags|=16384:(s=a.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([c])},a.updateQueue=s):(a=s.retryQueue,a===null?s.retryQueue=new Set([c]):a.add(c)),Wm(r,c,d)),!1}throw Error(i(435,a.tag))}return Wm(r,c,d),Vm(),!1}if(Je)return s=Vn.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=d,c!==Fp&&(r=Error(i(422),{cause:c}),bl(Bn(r,a)))):(c!==Fp&&(s=Error(i(423),{cause:c}),bl(Bn(s,a))),r=r.current.alternate,r.flags|=65536,d&=-d,r.lanes|=d,c=Bn(c,a),d=Sm(r.stateNode,c,d),Jp(r,d),Rt!==4&&(Rt=2)),!1;var m=Error(i(520),{cause:c});if(m=Bn(m,a),Bl===null?Bl=[m]:Bl.push(m),Rt!==4&&(Rt=2),s===null)return!0;c=Bn(c,a),a=s;do{switch(a.tag){case 3:return a.flags|=65536,r=d&-d,a.lanes|=r,r=Sm(a.stateNode,c,r),Jp(a,r),!1;case 1:if(s=a.type,m=a.stateNode,(a.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Hi===null||!Hi.has(m))))return a.flags|=65536,d&=-d,a.lanes|=d,d=xS(d),wS(d,r,a,c),Jp(a,d),!1}a=a.return}while(a!==null);return!1}var ES=Error(i(461)),zt=!1;function Kt(r,s,a,c){s.child=r===null?pS(s,null,a,c):ta(s,r.child,a,c)}function TS(r,s,a,c,d){a=a.render;var m=s.ref;if("ref"in c){var S={};for(var w in c)w!=="ref"&&(S[w]=c[w])}else S=c;return qs(s),c=im(r,s,a,S,m,d),w=sm(),r!==null&&!zt?(om(r,s,d),ei(r,s,d)):(Je&&w&&Bp(s),s.flags|=1,Kt(r,s,c,d),s.child)}function CS(r,s,a,c,d){if(r===null){var m=a.type;return typeof m=="function"&&!$p(m)&&m.defaultProps===void 0&&a.compare===null?(s.tag=15,s.type=m,RS(r,s,m,c,d)):(r=Xu(a.type,null,c,s,s.mode,d),r.ref=s.ref,r.return=s,s.child=r)}if(m=r.child,!Im(r,d)){var S=m.memoizedProps;if(a=a.compare,a=a!==null?a:gl,a(S,c)&&r.ref===s.ref)return ei(r,s,d)}return s.flags|=1,r=Wr(m,c),r.ref=s.ref,r.return=s,s.child=r}function RS(r,s,a,c,d){if(r!==null){var m=r.memoizedProps;if(gl(m,c)&&r.ref===s.ref)if(zt=!1,s.pendingProps=c=m,Im(r,d))(r.flags&131072)!==0&&(zt=!0);else return s.lanes=r.lanes,ei(r,s,d)}return xm(r,s,a,c,d)}function AS(r,s,a){var c=s.pendingProps,d=c.children,m=r!==null?r.memoizedState:null;if(c.mode==="hidden"){if((s.flags&128)!==0){if(c=m!==null?m.baseLanes|a:a,r!==null){for(d=s.child=r.child,m=0;d!==null;)m=m|d.lanes|d.childLanes,d=d.sibling;s.childLanes=m&~c}else s.childLanes=0,s.child=null;return IS(r,s,c,a)}if((a&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},r!==null&&nd(s,m!==null?m.cachePool:null),m!==null?R0(s,m):tm(),mS(s);else return s.lanes=s.childLanes=536870912,IS(r,s,m!==null?m.baseLanes|a:a,a)}else m!==null?(nd(s,m.cachePool),R0(s,m),Pi(),s.memoizedState=null):(r!==null&&nd(s,null),tm(),Pi());return Kt(r,s,d,a),s.child}function IS(r,s,a,c){var d=Qp();return d=d===null?null:{parent:Pt._currentValue,pool:d},s.memoizedState={baseLanes:a,cachePool:d},r!==null&&nd(s,null),tm(),mS(s),r!==null&&Sl(r,s,c,!0),null}function _d(r,s){var a=s.ref;if(a===null)r!==null&&r.ref!==null&&(s.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(i(284));(r===null||r.ref!==a)&&(s.flags|=4194816)}}function xm(r,s,a,c,d){return qs(s),a=im(r,s,a,c,void 0,d),c=sm(),r!==null&&!zt?(om(r,s,d),ei(r,s,d)):(Je&&c&&Bp(s),s.flags|=1,Kt(r,s,a,d),s.child)}function DS(r,s,a,c,d,m){return qs(s),s.updateQueue=null,a=I0(s,c,a,d),A0(r),c=sm(),r!==null&&!zt?(om(r,s,m),ei(r,s,m)):(Je&&c&&Bp(s),s.flags|=1,Kt(r,s,a,m),s.child)}function OS(r,s,a,c,d){if(qs(s),s.stateNode===null){var m=Vo,S=a.contextType;typeof S=="object"&&S!==null&&(m=sn(S)),m=new a(c,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=bm,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=c,m.state=s.memoizedState,m.refs={},Xp(s),S=a.contextType,m.context=typeof S=="object"&&S!==null?sn(S):Vo,m.state=s.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(_m(s,a,S,c),m.state=s.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(S=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),S!==m.state&&bm.enqueueReplaceState(m,m.state,null),Al(s,c,m,d),Rl(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),c=!0}else if(r===null){m=s.stateNode;var w=s.memoizedProps,L=Ws(a,w);m.props=L;var Q=m.context,re=a.contextType;S=Vo,typeof re=="object"&&re!==null&&(S=sn(re));var oe=a.getDerivedStateFromProps;re=typeof oe=="function"||typeof m.getSnapshotBeforeUpdate=="function",w=s.pendingProps!==w,re||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w||Q!==S)&&yS(s,m,c,S),Oi=!1;var Z=s.memoizedState;m.state=Z,Al(s,c,m,d),Rl(),Q=s.memoizedState,w||Z!==Q||Oi?(typeof oe=="function"&&(_m(s,a,oe,c),Q=s.memoizedState),(L=Oi||gS(s,a,L,c,Z,Q,S))?(re||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=Q),m.props=c,m.state=Q,m.context=S,c=L):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{m=s.stateNode,Zp(r,s),S=s.memoizedProps,re=Ws(a,S),m.props=re,oe=s.pendingProps,Z=m.context,Q=a.contextType,L=Vo,typeof Q=="object"&&Q!==null&&(L=sn(Q)),w=a.getDerivedStateFromProps,(Q=typeof w=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S!==oe||Z!==L)&&yS(s,m,c,L),Oi=!1,Z=s.memoizedState,m.state=Z,Al(s,c,m,d),Rl();var J=s.memoizedState;S!==oe||Z!==J||Oi||r!==null&&r.dependencies!==null&&ed(r.dependencies)?(typeof w=="function"&&(_m(s,a,w,c),J=s.memoizedState),(re=Oi||gS(s,a,re,c,Z,J,L)||r!==null&&r.dependencies!==null&&ed(r.dependencies))?(Q||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(c,J,L),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(c,J,L)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||S===r.memoizedProps&&Z===r.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&Z===r.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=J),m.props=c,m.state=J,m.context=L,c=re):(typeof m.componentDidUpdate!="function"||S===r.memoizedProps&&Z===r.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&Z===r.memoizedState||(s.flags|=1024),c=!1)}return m=c,_d(r,s),c=(s.flags&128)!==0,m||c?(m=s.stateNode,a=c&&typeof a.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,r!==null&&c?(s.child=ta(s,r.child,null,d),s.child=ta(s,null,a,d)):Kt(r,s,a,d),s.memoizedState=m.state,r=s.child):r=ei(r,s,d),r}function kS(r,s,a,c){return _l(),s.flags|=256,Kt(r,s,a,c),s.child}var wm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Em(r){return{baseLanes:r,cachePool:_0()}}function Tm(r,s,a){return r=r!==null?r.childLanes&~a:0,s&&(r|=Gn),r}function NS(r,s,a){var c=s.pendingProps,d=!1,m=(s.flags&128)!==0,S;if((S=m)||(S=r!==null&&r.memoizedState===null?!1:(jt.current&2)!==0),S&&(d=!0,s.flags&=-129),S=(s.flags&32)!==0,s.flags&=-33,r===null){if(Je){if(d?Li(s):Pi(),Je){var w=Ct,L;if(L=w){e:{for(L=w,w=Tr;L.nodeType!==8;){if(!w){w=null;break e}if(L=lr(L.nextSibling),L===null){w=null;break e}}w=L}w!==null?(s.memoizedState={dehydrated:w,treeContext:Us!==null?{id:Yr,overflow:Qr}:null,retryLane:536870912,hydrationErrors:null},L=Tn(18,null,null,0),L.stateNode=w,L.return=s,s.child=L,un=s,Ct=null,L=!0):L=!1}L||Hs(s)}if(w=s.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return lg(w)?s.lanes=32:s.lanes=536870912,null;Jr(s)}return w=c.children,c=c.fallback,d?(Pi(),d=s.mode,w=bd({mode:"hidden",children:w},d),c=$s(c,d,a,null),w.return=s,c.return=s,w.sibling=c,s.child=w,d=s.child,d.memoizedState=Em(a),d.childLanes=Tm(r,S,a),s.memoizedState=wm,c):(Li(s),Cm(s,w))}if(L=r.memoizedState,L!==null&&(w=L.dehydrated,w!==null)){if(m)s.flags&256?(Li(s),s.flags&=-257,s=Rm(r,s,a)):s.memoizedState!==null?(Pi(),s.child=r.child,s.flags|=128,s=null):(Pi(),d=c.fallback,w=s.mode,c=bd({mode:"visible",children:c.children},w),d=$s(d,w,a,null),d.flags|=2,c.return=s,d.return=s,c.sibling=d,s.child=c,ta(s,r.child,null,a),c=s.child,c.memoizedState=Em(a),c.childLanes=Tm(r,S,a),s.memoizedState=wm,s=d);else if(Li(s),lg(w)){if(S=w.nextSibling&&w.nextSibling.dataset,S)var Q=S.dgst;S=Q,c=Error(i(419)),c.stack="",c.digest=S,bl({value:c,source:null,stack:null}),s=Rm(r,s,a)}else if(zt||Sl(r,s,a,!1),S=(a&r.childLanes)!==0,zt||S){if(S=ft,S!==null&&(c=a&-a,c=(c&42)!==0?1:al(c),c=(c&(S.suspendedLanes|a))!==0?0:c,c!==0&&c!==L.retryLane))throw L.retryLane=c,qo(r,c),Dn(S,r,c),ES;w.data==="$?"||Vm(),s=Rm(r,s,a)}else w.data==="$?"?(s.flags|=192,s.child=r.child,s=null):(r=L.treeContext,Ct=lr(w.nextSibling),un=s,Je=!0,Bs=null,Tr=!1,r!==null&&(Fn[qn++]=Yr,Fn[qn++]=Qr,Fn[qn++]=Us,Yr=r.id,Qr=r.overflow,Us=s),s=Cm(s,c.children),s.flags|=4096);return s}return d?(Pi(),d=c.fallback,w=s.mode,L=r.child,Q=L.sibling,c=Wr(L,{mode:"hidden",children:c.children}),c.subtreeFlags=L.subtreeFlags&65011712,Q!==null?d=Wr(Q,d):(d=$s(d,w,a,null),d.flags|=2),d.return=s,c.return=s,c.sibling=d,s.child=c,c=d,d=s.child,w=r.child.memoizedState,w===null?w=Em(a):(L=w.cachePool,L!==null?(Q=Pt._currentValue,L=L.parent!==Q?{parent:Q,pool:Q}:L):L=_0(),w={baseLanes:w.baseLanes|a,cachePool:L}),d.memoizedState=w,d.childLanes=Tm(r,S,a),s.memoizedState=wm,c):(Li(s),a=r.child,r=a.sibling,a=Wr(a,{mode:"visible",children:c.children}),a.return=s,a.sibling=null,r!==null&&(S=s.deletions,S===null?(s.deletions=[r],s.flags|=16):S.push(r)),s.child=a,s.memoizedState=null,a)}function Cm(r,s){return s=bd({mode:"visible",children:s},r.mode),s.return=r,r.child=s}function bd(r,s){return r=Tn(22,r,null,s),r.lanes=0,r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},r}function Rm(r,s,a){return ta(s,r.child,null,a),r=Cm(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function MS(r,s,a){r.lanes|=s;var c=r.alternate;c!==null&&(c.lanes|=s),Vp(r.return,s,a)}function Am(r,s,a,c,d){var m=r.memoizedState;m===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=s,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function LS(r,s,a){var c=s.pendingProps,d=c.revealOrder,m=c.tail;if(Kt(r,s,c.children,a),c=jt.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&MS(r,a,s);else if(r.tag===19)MS(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}switch(ie(jt,c),d){case"forwards":for(a=s.child,d=null;a!==null;)r=a.alternate,r!==null&&gd(r)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),Am(s,!1,d,a,m);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(r=d.alternate,r!==null&&gd(r)===null){s.child=d;break}r=d.sibling,d.sibling=a,a=d,d=r}Am(s,!0,a,null,m);break;case"together":Am(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function ei(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),Bi|=s.lanes,(a&s.childLanes)===0)if(r!==null){if(Sl(r,s,a,!1),(a&s.childLanes)===0)return null}else return null;if(r!==null&&s.child!==r.child)throw Error(i(153));if(s.child!==null){for(r=s.child,a=Wr(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=Wr(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function Im(r,s){return(r.lanes&s)!==0?!0:(r=r.dependencies,!!(r!==null&&ed(r)))}function lk(r,s,a){switch(s.tag){case 3:be(s,s.stateNode.containerInfo),Di(s,Pt,r.memoizedState.cache),_l();break;case 27:case 5:Ue(s);break;case 4:be(s,s.stateNode.containerInfo);break;case 10:Di(s,s.type,s.memoizedProps.value);break;case 13:var c=s.memoizedState;if(c!==null)return c.dehydrated!==null?(Li(s),s.flags|=128,null):(a&s.child.childLanes)!==0?NS(r,s,a):(Li(s),r=ei(r,s,a),r!==null?r.sibling:null);Li(s);break;case 19:var d=(r.flags&128)!==0;if(c=(a&s.childLanes)!==0,c||(Sl(r,s,a,!1),c=(a&s.childLanes)!==0),d){if(c)return LS(r,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),ie(jt,jt.current),c)break;return null;case 22:case 23:return s.lanes=0,AS(r,s,a);case 24:Di(s,Pt,r.memoizedState.cache)}return ei(r,s,a)}function PS(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps)zt=!0;else{if(!Im(r,a)&&(s.flags&128)===0)return zt=!1,lk(r,s,a);zt=(r.flags&131072)!==0}else zt=!1,Je&&(s.flags&1048576)!==0&&f0(s,Ju,s.index);switch(s.lanes=0,s.tag){case 16:e:{r=s.pendingProps;var c=s.elementType,d=c._init;if(c=d(c._payload),s.type=c,typeof c=="function")$p(c)?(r=Ws(c,r),s.tag=1,s=OS(null,s,c,r,a)):(s.tag=0,s=xm(null,s,c,r,a));else{if(c!=null){if(d=c.$$typeof,d===D){s.tag=11,s=TS(null,s,c,r,a);break e}else if(d===P){s.tag=14,s=CS(null,s,c,r,a);break e}}throw s=te(c)||c,Error(i(306,s,""))}}return s;case 0:return xm(r,s,s.type,s.pendingProps,a);case 1:return c=s.type,d=Ws(c,s.pendingProps),OS(r,s,c,d,a);case 3:e:{if(be(s,s.stateNode.containerInfo),r===null)throw Error(i(387));c=s.pendingProps;var m=s.memoizedState;d=m.element,Zp(r,s),Al(s,c,null,a);var S=s.memoizedState;if(c=S.cache,Di(s,Pt,c),c!==m.cache&&Gp(s,[Pt],a,!0),Rl(),c=S.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:S.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=kS(r,s,c,a);break e}else if(c!==d){d=Bn(Error(i(424)),s),bl(d),s=kS(r,s,c,a);break e}else{switch(r=s.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}for(Ct=lr(r.firstChild),un=s,Je=!0,Bs=null,Tr=!0,a=pS(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(_l(),c===d){s=ei(r,s,a);break e}Kt(r,s,c,a)}s=s.child}return s;case 26:return _d(r,s),r===null?(a=zx(s.type,null,s.pendingProps,null))?s.memoizedState=a:Je||(a=s.type,r=s.pendingProps,c=Md(pe.current).createElement(a),c[ce]=s,c[fe]=r,Zt(c,a,r),Le(c),s.stateNode=c):s.memoizedState=zx(s.type,r.memoizedProps,s.pendingProps,r.memoizedState),null;case 27:return Ue(s),r===null&&Je&&(c=s.stateNode=jx(s.type,s.pendingProps,pe.current),un=s,Tr=!0,d=Ct,Vi(s.type)?(cg=d,Ct=lr(c.firstChild)):Ct=d),Kt(r,s,s.pendingProps.children,a),_d(r,s),r===null&&(s.flags|=4194304),s.child;case 5:return r===null&&Je&&((d=c=Ct)&&(c=Pk(c,s.type,s.pendingProps,Tr),c!==null?(s.stateNode=c,un=s,Ct=lr(c.firstChild),Tr=!1,d=!0):d=!1),d||Hs(s)),Ue(s),d=s.type,m=s.pendingProps,S=r!==null?r.memoizedProps:null,c=m.children,sg(d,m)?c=null:S!==null&&sg(d,S)&&(s.flags|=32),s.memoizedState!==null&&(d=im(r,s,ek,null,null,a),Kl._currentValue=d),_d(r,s),Kt(r,s,c,a),s.child;case 6:return r===null&&Je&&((r=a=Ct)&&(a=jk(a,s.pendingProps,Tr),a!==null?(s.stateNode=a,un=s,Ct=null,r=!0):r=!1),r||Hs(s)),null;case 13:return NS(r,s,a);case 4:return be(s,s.stateNode.containerInfo),c=s.pendingProps,r===null?s.child=ta(s,null,c,a):Kt(r,s,c,a),s.child;case 11:return TS(r,s,s.type,s.pendingProps,a);case 7:return Kt(r,s,s.pendingProps,a),s.child;case 8:return Kt(r,s,s.pendingProps.children,a),s.child;case 12:return Kt(r,s,s.pendingProps.children,a),s.child;case 10:return c=s.pendingProps,Di(s,s.type,c.value),Kt(r,s,c.children,a),s.child;case 9:return d=s.type._context,c=s.pendingProps.children,qs(s),d=sn(d),c=c(d),s.flags|=1,Kt(r,s,c,a),s.child;case 14:return CS(r,s,s.type,s.pendingProps,a);case 15:return RS(r,s,s.type,s.pendingProps,a);case 19:return LS(r,s,a);case 31:return c=s.pendingProps,a=s.mode,c={mode:c.mode,children:c.children},r===null?(a=bd(c,a),a.ref=s.ref,s.child=a,a.return=s,s=a):(a=Wr(r.child,c),a.ref=s.ref,s.child=a,a.return=s,s=a),s;case 22:return AS(r,s,a);case 24:return qs(s),c=sn(Pt),r===null?(d=Qp(),d===null&&(d=ft,m=Wp(),d.pooledCache=m,m.refCount++,m!==null&&(d.pooledCacheLanes|=a),d=m),s.memoizedState={parent:c,cache:d},Xp(s),Di(s,Pt,d)):((r.lanes&a)!==0&&(Zp(r,s),Al(s,null,null,a),Rl()),d=r.memoizedState,m=s.memoizedState,d.parent!==c?(d={parent:c,cache:c},s.memoizedState=d,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=d),Di(s,Pt,c)):(c=m.cache,Di(s,Pt,c),c!==d.cache&&Gp(s,[Pt],a,!0))),Kt(r,s,s.pendingProps.children,a),s.child;case 29:throw s.pendingProps}throw Error(i(156,s.tag))}function ti(r){r.flags|=4}function jS(r,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)r.flags&=-16777217;else if(r.flags|=16777216,!Vx(s)){if(s=Vn.current,s!==null&&((Qe&4194048)===Qe?Cr!==null:(Qe&62914560)!==Qe&&(Qe&536870912)===0||s!==Cr))throw Tl=Kp,b0;r.flags|=8192}}function Sd(r,s){s!==null&&(r.flags|=4),r.flags&16384&&(s=r.tag!==22?Lu():536870912,r.lanes|=s,sa|=s)}function Ll(r,s){if(!Je)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function xt(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,c=0;if(s)for(var d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&65011712,c|=d.flags&65011712,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=c,r.childLanes=a,s}function ck(r,s,a){var c=s.pendingProps;switch(Hp(s),s.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xt(s),null;case 1:return xt(s),null;case 3:return a=s.stateNode,c=null,r!==null&&(c=r.memoizedState.cache),s.memoizedState.cache!==c&&(s.flags|=2048),Xr(Pt),Oe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(r===null||r.child===null)&&(vl(s)?ti(s):r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,m0())),xt(s),null;case 26:return a=s.memoizedState,r===null?(ti(s),a!==null?(xt(s),jS(s,a)):(xt(s),s.flags&=-16777217)):a?a!==r.memoizedState?(ti(s),xt(s),jS(s,a)):(xt(s),s.flags&=-16777217):(r.memoizedProps!==c&&ti(s),xt(s),s.flags&=-16777217),null;case 27:_t(s),a=pe.current;var d=s.type;if(r!==null&&s.stateNode!=null)r.memoizedProps!==c&&ti(s);else{if(!c){if(s.stateNode===null)throw Error(i(166));return xt(s),null}r=de.current,vl(s)?h0(s):(r=jx(d,c,a),s.stateNode=r,ti(s))}return xt(s),null;case 5:if(_t(s),a=s.type,r!==null&&s.stateNode!=null)r.memoizedProps!==c&&ti(s);else{if(!c){if(s.stateNode===null)throw Error(i(166));return xt(s),null}if(r=de.current,vl(s))h0(s);else{switch(d=Md(pe.current),r){case 1:r=d.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:r=d.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":r=d.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":r=d.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":r=d.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof c.is=="string"?d.createElement("select",{is:c.is}):d.createElement("select"),c.multiple?r.multiple=!0:c.size&&(r.size=c.size);break;default:r=typeof c.is=="string"?d.createElement(a,{is:c.is}):d.createElement(a)}}r[ce]=s,r[fe]=c;e:for(d=s.child;d!==null;){if(d.tag===5||d.tag===6)r.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===s)break e;for(;d.sibling===null;){if(d.return===null||d.return===s)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}s.stateNode=r;e:switch(Zt(r,a,c),a){case"button":case"input":case"select":case"textarea":r=!!c.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&ti(s)}}return xt(s),s.flags&=-16777217,null;case 6:if(r&&s.stateNode!=null)r.memoizedProps!==c&&ti(s);else{if(typeof c!="string"&&s.stateNode===null)throw Error(i(166));if(r=pe.current,vl(s)){if(r=s.stateNode,a=s.memoizedProps,c=null,d=un,d!==null)switch(d.tag){case 27:case 5:c=d.memoizedProps}r[ce]=s,r=!!(r.nodeValue===a||c!==null&&c.suppressHydrationWarning===!0||Dx(r.nodeValue,a)),r||Hs(s)}else r=Md(r).createTextNode(c),r[ce]=s,s.stateNode=r}return xt(s),null;case 13:if(c=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(d=vl(s),c!==null&&c.dehydrated!==null){if(r===null){if(!d)throw Error(i(318));if(d=s.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(i(317));d[ce]=s}else _l(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;xt(s),d=!1}else d=m0(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=d),d=!0;if(!d)return s.flags&256?(Jr(s),s):(Jr(s),null)}if(Jr(s),(s.flags&128)!==0)return s.lanes=a,s;if(a=c!==null,r=r!==null&&r.memoizedState!==null,a){c=s.child,d=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(d=c.alternate.memoizedState.cachePool.pool);var m=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(m=c.memoizedState.cachePool.pool),m!==d&&(c.flags|=2048)}return a!==r&&a&&(s.child.flags|=8192),Sd(s,s.updateQueue),xt(s),null;case 4:return Oe(),r===null&&eg(s.stateNode.containerInfo),xt(s),null;case 10:return Xr(s.type),xt(s),null;case 19:if(le(jt),d=s.memoizedState,d===null)return xt(s),null;if(c=(s.flags&128)!==0,m=d.rendering,m===null)if(c)Ll(d,!1);else{if(Rt!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(m=gd(r),m!==null){for(s.flags|=128,Ll(d,!1),r=m.updateQueue,s.updateQueue=r,Sd(s,r),s.subtreeFlags=0,r=a,a=s.child;a!==null;)d0(a,r),a=a.sibling;return ie(jt,jt.current&1|2),s.child}r=r.sibling}d.tail!==null&&Yt()>Ed&&(s.flags|=128,c=!0,Ll(d,!1),s.lanes=4194304)}else{if(!c)if(r=gd(m),r!==null){if(s.flags|=128,c=!0,r=r.updateQueue,s.updateQueue=r,Sd(s,r),Ll(d,!0),d.tail===null&&d.tailMode==="hidden"&&!m.alternate&&!Je)return xt(s),null}else 2*Yt()-d.renderingStartTime>Ed&&a!==536870912&&(s.flags|=128,c=!0,Ll(d,!1),s.lanes=4194304);d.isBackwards?(m.sibling=s.child,s.child=m):(r=d.last,r!==null?r.sibling=m:s.child=m,d.last=m)}return d.tail!==null?(s=d.tail,d.rendering=s,d.tail=s.sibling,d.renderingStartTime=Yt(),s.sibling=null,r=jt.current,ie(jt,c?r&1|2:r&1),s):(xt(s),null);case 22:case 23:return Jr(s),nm(),c=s.memoizedState!==null,r!==null?r.memoizedState!==null!==c&&(s.flags|=8192):c&&(s.flags|=8192),c?(a&536870912)!==0&&(s.flags&128)===0&&(xt(s),s.subtreeFlags&6&&(s.flags|=8192)):xt(s),a=s.updateQueue,a!==null&&Sd(s,a.retryQueue),a=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),c=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==a&&(s.flags|=2048),r!==null&&le(Vs),null;case 24:return a=null,r!==null&&(a=r.memoizedState.cache),s.memoizedState.cache!==a&&(s.flags|=2048),Xr(Pt),xt(s),null;case 25:return null;case 30:return null}throw Error(i(156,s.tag))}function uk(r,s){switch(Hp(s),s.tag){case 1:return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return Xr(Pt),Oe(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 26:case 27:case 5:return _t(s),null;case 13:if(Jr(s),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(i(340));_l()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return le(jt),null;case 4:return Oe(),null;case 10:return Xr(s.type),null;case 22:case 23:return Jr(s),nm(),r!==null&&le(Vs),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 24:return Xr(Pt),null;case 25:return null;default:return null}}function $S(r,s){switch(Hp(s),s.tag){case 3:Xr(Pt),Oe();break;case 26:case 27:case 5:_t(s);break;case 4:Oe();break;case 13:Jr(s);break;case 19:le(jt);break;case 10:Xr(s.type);break;case 22:case 23:Jr(s),nm(),r!==null&&le(Vs);break;case 24:Xr(Pt)}}function Pl(r,s){try{var a=s.updateQueue,c=a!==null?a.lastEffect:null;if(c!==null){var d=c.next;a=d;do{if((a.tag&r)===r){c=void 0;var m=a.create,S=a.inst;c=m(),S.destroy=c}a=a.next}while(a!==d)}}catch(w){dt(s,s.return,w)}}function ji(r,s,a){try{var c=s.updateQueue,d=c!==null?c.lastEffect:null;if(d!==null){var m=d.next;c=m;do{if((c.tag&r)===r){var S=c.inst,w=S.destroy;if(w!==void 0){S.destroy=void 0,d=s;var L=a,Q=w;try{Q()}catch(re){dt(d,L,re)}}}c=c.next}while(c!==m)}}catch(re){dt(s,s.return,re)}}function US(r){var s=r.updateQueue;if(s!==null){var a=r.stateNode;try{C0(s,a)}catch(c){dt(r,r.return,c)}}}function zS(r,s,a){a.props=Ws(r.type,r.memoizedProps),a.state=r.memoizedState;try{a.componentWillUnmount()}catch(c){dt(r,s,c)}}function jl(r,s){try{var a=r.ref;if(a!==null){switch(r.tag){case 26:case 27:case 5:var c=r.stateNode;break;case 30:c=r.stateNode;break;default:c=r.stateNode}typeof a=="function"?r.refCleanup=a(c):a.current=c}}catch(d){dt(r,s,d)}}function Rr(r,s){var a=r.ref,c=r.refCleanup;if(a!==null)if(typeof c=="function")try{c()}catch(d){dt(r,s,d)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(d){dt(r,s,d)}else a.current=null}function BS(r){var s=r.type,a=r.memoizedProps,c=r.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":a.autoFocus&&c.focus();break e;case"img":a.src?c.src=a.src:a.srcSet&&(c.srcset=a.srcSet)}}catch(d){dt(r,r.return,d)}}function Dm(r,s,a){try{var c=r.stateNode;Ok(c,r.type,a,s),c[fe]=s}catch(d){dt(r,r.return,d)}}function HS(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&Vi(r.type)||r.tag===4}function Om(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||HS(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&Vi(r.type)||r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function km(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(r,s):(s=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,s.appendChild(r),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=Nd));else if(c!==4&&(c===27&&Vi(r.type)&&(a=r.stateNode,s=null),r=r.child,r!==null))for(km(r,s,a),r=r.sibling;r!==null;)km(r,s,a),r=r.sibling}function xd(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(c!==4&&(c===27&&Vi(r.type)&&(a=r.stateNode),r=r.child,r!==null))for(xd(r,s,a),r=r.sibling;r!==null;)xd(r,s,a),r=r.sibling}function FS(r){var s=r.stateNode,a=r.memoizedProps;try{for(var c=r.type,d=s.attributes;d.length;)s.removeAttributeNode(d[0]);Zt(s,c,a),s[ce]=r,s[fe]=a}catch(m){dt(r,r.return,m)}}var ni=!1,Ot=!1,Nm=!1,qS=typeof WeakSet=="function"?WeakSet:Set,Bt=null;function dk(r,s){if(r=r.containerInfo,rg=zd,r=t0(r),Op(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var S=0,w=-1,L=-1,Q=0,re=0,oe=r,Z=null;t:for(;;){for(var J;oe!==a||d!==0&&oe.nodeType!==3||(w=S+d),oe!==m||c!==0&&oe.nodeType!==3||(L=S+c),oe.nodeType===3&&(S+=oe.nodeValue.length),(J=oe.firstChild)!==null;)Z=oe,oe=J;for(;;){if(oe===r)break t;if(Z===a&&++Q===d&&(w=S),Z===m&&++re===c&&(L=S),(J=oe.nextSibling)!==null)break;oe=Z,Z=oe.parentNode}oe=J}a=w===-1||L===-1?null:{start:w,end:L}}else a=null}a=a||{start:0,end:0}}else a=null;for(ig={focusedElem:r,selectionRange:a},zd=!1,Bt=s;Bt!==null;)if(s=Bt,r=s.child,(s.subtreeFlags&1024)!==0&&r!==null)r.return=s,Bt=r;else for(;Bt!==null;){switch(s=Bt,m=s.alternate,r=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if((r&1024)!==0&&m!==null){r=void 0,a=s,d=m.memoizedProps,m=m.memoizedState,c=a.stateNode;try{var Me=Ws(a.type,d,a.elementType===a.type);r=c.getSnapshotBeforeUpdate(Me,m),c.__reactInternalSnapshotBeforeUpdate=r}catch(Ae){dt(a,a.return,Ae)}}break;case 3:if((r&1024)!==0){if(r=s.stateNode.containerInfo,a=r.nodeType,a===9)ag(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":ag(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((r&1024)!==0)throw Error(i(163))}if(r=s.sibling,r!==null){r.return=s.return,Bt=r;break}Bt=s.return}}function VS(r,s,a){var c=a.flags;switch(a.tag){case 0:case 11:case 15:$i(r,a),c&4&&Pl(5,a);break;case 1:if($i(r,a),c&4)if(r=a.stateNode,s===null)try{r.componentDidMount()}catch(S){dt(a,a.return,S)}else{var d=Ws(a.type,s.memoizedProps);s=s.memoizedState;try{r.componentDidUpdate(d,s,r.__reactInternalSnapshotBeforeUpdate)}catch(S){dt(a,a.return,S)}}c&64&&US(a),c&512&&jl(a,a.return);break;case 3:if($i(r,a),c&64&&(r=a.updateQueue,r!==null)){if(s=null,a.child!==null)switch(a.child.tag){case 27:case 5:s=a.child.stateNode;break;case 1:s=a.child.stateNode}try{C0(r,s)}catch(S){dt(a,a.return,S)}}break;case 27:s===null&&c&4&&FS(a);case 26:case 5:$i(r,a),s===null&&c&4&&BS(a),c&512&&jl(a,a.return);break;case 12:$i(r,a);break;case 13:$i(r,a),c&4&&YS(r,a),c&64&&(r=a.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(a=bk.bind(null,a),$k(r,a))));break;case 22:if(c=a.memoizedState!==null||ni,!c){s=s!==null&&s.memoizedState!==null||Ot,d=ni;var m=Ot;ni=c,(Ot=s)&&!m?Ui(r,a,(a.subtreeFlags&8772)!==0):$i(r,a),ni=d,Ot=m}break;case 30:break;default:$i(r,a)}}function GS(r){var s=r.alternate;s!==null&&(r.alternate=null,GS(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&Se(s)),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}var vt=null,vn=!1;function ri(r,s,a){for(a=a.child;a!==null;)WS(r,s,a),a=a.sibling}function WS(r,s,a){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(pn,a)}catch{}switch(a.tag){case 26:Ot||Rr(a,s),ri(r,s,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ot||Rr(a,s);var c=vt,d=vn;Vi(a.type)&&(vt=a.stateNode,vn=!1),ri(r,s,a),Gl(a.stateNode),vt=c,vn=d;break;case 5:Ot||Rr(a,s);case 6:if(c=vt,d=vn,vt=null,ri(r,s,a),vt=c,vn=d,vt!==null)if(vn)try{(vt.nodeType===9?vt.body:vt.nodeName==="HTML"?vt.ownerDocument.body:vt).removeChild(a.stateNode)}catch(m){dt(a,s,m)}else try{vt.removeChild(a.stateNode)}catch(m){dt(a,s,m)}break;case 18:vt!==null&&(vn?(r=vt,Lx(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,a.stateNode),ec(r)):Lx(vt,a.stateNode));break;case 4:c=vt,d=vn,vt=a.stateNode.containerInfo,vn=!0,ri(r,s,a),vt=c,vn=d;break;case 0:case 11:case 14:case 15:Ot||ji(2,a,s),Ot||ji(4,a,s),ri(r,s,a);break;case 1:Ot||(Rr(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"&&zS(a,s,c)),ri(r,s,a);break;case 21:ri(r,s,a);break;case 22:Ot=(c=Ot)||a.memoizedState!==null,ri(r,s,a),Ot=c;break;default:ri(r,s,a)}}function YS(r,s){if(s.memoizedState===null&&(r=s.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{ec(r)}catch(a){dt(s,s.return,a)}}function fk(r){switch(r.tag){case 13:case 19:var s=r.stateNode;return s===null&&(s=r.stateNode=new qS),s;case 22:return r=r.stateNode,s=r._retryCache,s===null&&(s=r._retryCache=new qS),s;default:throw Error(i(435,r.tag))}}function Mm(r,s){var a=fk(r);s.forEach(function(c){var d=Sk.bind(null,r,c);a.has(c)||(a.add(c),c.then(d,d))})}function Cn(r,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c],m=r,S=s,w=S;e:for(;w!==null;){switch(w.tag){case 27:if(Vi(w.type)){vt=w.stateNode,vn=!1;break e}break;case 5:vt=w.stateNode,vn=!1;break e;case 3:case 4:vt=w.stateNode.containerInfo,vn=!0;break e}w=w.return}if(vt===null)throw Error(i(160));WS(m,S,d),vt=null,vn=!1,m=d.alternate,m!==null&&(m.return=null),d.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)QS(s,r),s=s.sibling}var ar=null;function QS(r,s){var a=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:Cn(s,r),Rn(r),c&4&&(ji(3,r,r.return),Pl(3,r),ji(5,r,r.return));break;case 1:Cn(s,r),Rn(r),c&512&&(Ot||a===null||Rr(a,a.return)),c&64&&ni&&(r=r.updateQueue,r!==null&&(c=r.callbacks,c!==null&&(a=r.shared.hiddenCallbacks,r.shared.hiddenCallbacks=a===null?c:a.concat(c))));break;case 26:var d=ar;if(Cn(s,r),Rn(r),c&512&&(Ot||a===null||Rr(a,a.return)),c&4){var m=a!==null?a.memoizedState:null;if(c=r.memoizedState,a===null)if(c===null)if(r.stateNode===null){e:{c=r.type,a=r.memoizedProps,d=d.ownerDocument||d;t:switch(c){case"title":m=d.getElementsByTagName("title")[0],(!m||m[_e]||m[ce]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=d.createElement(c),d.head.insertBefore(m,d.querySelector("head > title"))),Zt(m,c,a),m[ce]=r,Le(m),c=m;break e;case"link":var S=Fx("link","href",d).get(c+(a.href||""));if(S){for(var w=0;w<S.length;w++)if(m=S[w],m.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&m.getAttribute("rel")===(a.rel==null?null:a.rel)&&m.getAttribute("title")===(a.title==null?null:a.title)&&m.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(w,1);break t}}m=d.createElement(c),Zt(m,c,a),d.head.appendChild(m);break;case"meta":if(S=Fx("meta","content",d).get(c+(a.content||""))){for(w=0;w<S.length;w++)if(m=S[w],m.getAttribute("content")===(a.content==null?null:""+a.content)&&m.getAttribute("name")===(a.name==null?null:a.name)&&m.getAttribute("property")===(a.property==null?null:a.property)&&m.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&m.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(w,1);break t}}m=d.createElement(c),Zt(m,c,a),d.head.appendChild(m);break;default:throw Error(i(468,c))}m[ce]=r,Le(m),c=m}r.stateNode=c}else qx(d,r.type,r.stateNode);else r.stateNode=Hx(d,c,r.memoizedProps);else m!==c?(m===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):m.count--,c===null?qx(d,r.type,r.stateNode):Hx(d,c,r.memoizedProps)):c===null&&r.stateNode!==null&&Dm(r,r.memoizedProps,a.memoizedProps)}break;case 27:Cn(s,r),Rn(r),c&512&&(Ot||a===null||Rr(a,a.return)),a!==null&&c&4&&Dm(r,r.memoizedProps,a.memoizedProps);break;case 5:if(Cn(s,r),Rn(r),c&512&&(Ot||a===null||Rr(a,a.return)),r.flags&32){d=r.stateNode;try{jo(d,"")}catch(J){dt(r,r.return,J)}}c&4&&r.stateNode!=null&&(d=r.memoizedProps,Dm(r,d,a!==null?a.memoizedProps:d)),c&1024&&(Nm=!0);break;case 6:if(Cn(s,r),Rn(r),c&4){if(r.stateNode===null)throw Error(i(162));c=r.memoizedProps,a=r.stateNode;try{a.nodeValue=c}catch(J){dt(r,r.return,J)}}break;case 3:if(jd=null,d=ar,ar=Ld(s.containerInfo),Cn(s,r),ar=d,Rn(r),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ec(s.containerInfo)}catch(J){dt(r,r.return,J)}Nm&&(Nm=!1,KS(r));break;case 4:c=ar,ar=Ld(r.stateNode.containerInfo),Cn(s,r),Rn(r),ar=c;break;case 12:Cn(s,r),Rn(r);break;case 13:Cn(s,r),Rn(r),r.child.flags&8192&&r.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(zm=Yt()),c&4&&(c=r.updateQueue,c!==null&&(r.updateQueue=null,Mm(r,c)));break;case 22:d=r.memoizedState!==null;var L=a!==null&&a.memoizedState!==null,Q=ni,re=Ot;if(ni=Q||d,Ot=re||L,Cn(s,r),Ot=re,ni=Q,Rn(r),c&8192)e:for(s=r.stateNode,s._visibility=d?s._visibility&-2:s._visibility|1,d&&(a===null||L||ni||Ot||Ys(r)),a=null,s=r;;){if(s.tag===5||s.tag===26){if(a===null){L=a=s;try{if(m=L.stateNode,d)S=m.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{w=L.stateNode;var oe=L.memoizedProps.style,Z=oe!=null&&oe.hasOwnProperty("display")?oe.display:null;w.style.display=Z==null||typeof Z=="boolean"?"":(""+Z).trim()}}catch(J){dt(L,L.return,J)}}}else if(s.tag===6){if(a===null){L=s;try{L.stateNode.nodeValue=d?"":L.memoizedProps}catch(J){dt(L,L.return,J)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===r)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break e;for(;s.sibling===null;){if(s.return===null||s.return===r)break e;a===s&&(a=null),s=s.return}a===s&&(a=null),s.sibling.return=s.return,s=s.sibling}c&4&&(c=r.updateQueue,c!==null&&(a=c.retryQueue,a!==null&&(c.retryQueue=null,Mm(r,a))));break;case 19:Cn(s,r),Rn(r),c&4&&(c=r.updateQueue,c!==null&&(r.updateQueue=null,Mm(r,c)));break;case 30:break;case 21:break;default:Cn(s,r),Rn(r)}}function Rn(r){var s=r.flags;if(s&2){try{for(var a,c=r.return;c!==null;){if(HS(c)){a=c;break}c=c.return}if(a==null)throw Error(i(160));switch(a.tag){case 27:var d=a.stateNode,m=Om(r);xd(r,m,d);break;case 5:var S=a.stateNode;a.flags&32&&(jo(S,""),a.flags&=-33);var w=Om(r);xd(r,w,S);break;case 3:case 4:var L=a.stateNode.containerInfo,Q=Om(r);km(r,Q,L);break;default:throw Error(i(161))}}catch(re){dt(r,r.return,re)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function KS(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var s=r;KS(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),r=r.sibling}}function $i(r,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)VS(r,s.alternate,s),s=s.sibling}function Ys(r){for(r=r.child;r!==null;){var s=r;switch(s.tag){case 0:case 11:case 14:case 15:ji(4,s,s.return),Ys(s);break;case 1:Rr(s,s.return);var a=s.stateNode;typeof a.componentWillUnmount=="function"&&zS(s,s.return,a),Ys(s);break;case 27:Gl(s.stateNode);case 26:case 5:Rr(s,s.return),Ys(s);break;case 22:s.memoizedState===null&&Ys(s);break;case 30:Ys(s);break;default:Ys(s)}r=r.sibling}}function Ui(r,s,a){for(a=a&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var c=s.alternate,d=r,m=s,S=m.flags;switch(m.tag){case 0:case 11:case 15:Ui(d,m,a),Pl(4,m);break;case 1:if(Ui(d,m,a),c=m,d=c.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(Q){dt(c,c.return,Q)}if(c=m,d=c.updateQueue,d!==null){var w=c.stateNode;try{var L=d.shared.hiddenCallbacks;if(L!==null)for(d.shared.hiddenCallbacks=null,d=0;d<L.length;d++)T0(L[d],w)}catch(Q){dt(c,c.return,Q)}}a&&S&64&&US(m),jl(m,m.return);break;case 27:FS(m);case 26:case 5:Ui(d,m,a),a&&c===null&&S&4&&BS(m),jl(m,m.return);break;case 12:Ui(d,m,a);break;case 13:Ui(d,m,a),a&&S&4&&YS(d,m);break;case 22:m.memoizedState===null&&Ui(d,m,a),jl(m,m.return);break;case 30:break;default:Ui(d,m,a)}s=s.sibling}}function Lm(r,s){var a=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==a&&(r!=null&&r.refCount++,a!=null&&xl(a))}function Pm(r,s){r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&xl(r))}function Ar(r,s,a,c){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)XS(r,s,a,c),s=s.sibling}function XS(r,s,a,c){var d=s.flags;switch(s.tag){case 0:case 11:case 15:Ar(r,s,a,c),d&2048&&Pl(9,s);break;case 1:Ar(r,s,a,c);break;case 3:Ar(r,s,a,c),d&2048&&(r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&xl(r)));break;case 12:if(d&2048){Ar(r,s,a,c),r=s.stateNode;try{var m=s.memoizedProps,S=m.id,w=m.onPostCommit;typeof w=="function"&&w(S,s.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(L){dt(s,s.return,L)}}else Ar(r,s,a,c);break;case 13:Ar(r,s,a,c);break;case 23:break;case 22:m=s.stateNode,S=s.alternate,s.memoizedState!==null?m._visibility&2?Ar(r,s,a,c):$l(r,s):m._visibility&2?Ar(r,s,a,c):(m._visibility|=2,na(r,s,a,c,(s.subtreeFlags&10256)!==0)),d&2048&&Lm(S,s);break;case 24:Ar(r,s,a,c),d&2048&&Pm(s.alternate,s);break;default:Ar(r,s,a,c)}}function na(r,s,a,c,d){for(d=d&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var m=r,S=s,w=a,L=c,Q=S.flags;switch(S.tag){case 0:case 11:case 15:na(m,S,w,L,d),Pl(8,S);break;case 23:break;case 22:var re=S.stateNode;S.memoizedState!==null?re._visibility&2?na(m,S,w,L,d):$l(m,S):(re._visibility|=2,na(m,S,w,L,d)),d&&Q&2048&&Lm(S.alternate,S);break;case 24:na(m,S,w,L,d),d&&Q&2048&&Pm(S.alternate,S);break;default:na(m,S,w,L,d)}s=s.sibling}}function $l(r,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var a=r,c=s,d=c.flags;switch(c.tag){case 22:$l(a,c),d&2048&&Lm(c.alternate,c);break;case 24:$l(a,c),d&2048&&Pm(c.alternate,c);break;default:$l(a,c)}s=s.sibling}}var Ul=8192;function ra(r){if(r.subtreeFlags&Ul)for(r=r.child;r!==null;)ZS(r),r=r.sibling}function ZS(r){switch(r.tag){case 26:ra(r),r.flags&Ul&&r.memoizedState!==null&&Xk(ar,r.memoizedState,r.memoizedProps);break;case 5:ra(r);break;case 3:case 4:var s=ar;ar=Ld(r.stateNode.containerInfo),ra(r),ar=s;break;case 22:r.memoizedState===null&&(s=r.alternate,s!==null&&s.memoizedState!==null?(s=Ul,Ul=16777216,ra(r),Ul=s):ra(r));break;default:ra(r)}}function JS(r){var s=r.alternate;if(s!==null&&(r=s.child,r!==null)){s.child=null;do s=r.sibling,r.sibling=null,r=s;while(r!==null)}}function zl(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var a=0;a<s.length;a++){var c=s[a];Bt=c,tx(c,r)}JS(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)ex(r),r=r.sibling}function ex(r){switch(r.tag){case 0:case 11:case 15:zl(r),r.flags&2048&&ji(9,r,r.return);break;case 3:zl(r);break;case 12:zl(r);break;case 22:var s=r.stateNode;r.memoizedState!==null&&s._visibility&2&&(r.return===null||r.return.tag!==13)?(s._visibility&=-3,wd(r)):zl(r);break;default:zl(r)}}function wd(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var a=0;a<s.length;a++){var c=s[a];Bt=c,tx(c,r)}JS(r)}for(r=r.child;r!==null;){switch(s=r,s.tag){case 0:case 11:case 15:ji(8,s,s.return),wd(s);break;case 22:a=s.stateNode,a._visibility&2&&(a._visibility&=-3,wd(s));break;default:wd(s)}r=r.sibling}}function tx(r,s){for(;Bt!==null;){var a=Bt;switch(a.tag){case 0:case 11:case 15:ji(8,a,s);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var c=a.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:xl(a.memoizedState.cache)}if(c=a.child,c!==null)c.return=a,Bt=c;else e:for(a=r;Bt!==null;){c=Bt;var d=c.sibling,m=c.return;if(GS(c),c===a){Bt=null;break e}if(d!==null){d.return=m,Bt=d;break e}Bt=m}}}var hk={getCacheForType:function(r){var s=sn(Pt),a=s.data.get(r);return a===void 0&&(a=r(),s.data.set(r,a)),a}},pk=typeof WeakMap=="function"?WeakMap:Map,rt=0,ft=null,Ge=null,Qe=0,it=0,An=null,zi=!1,ia=!1,jm=!1,ii=0,Rt=0,Bi=0,Qs=0,$m=0,Gn=0,sa=0,Bl=null,_n=null,Um=!1,zm=0,Ed=1/0,Td=null,Hi=null,Xt=0,Fi=null,oa=null,aa=0,Bm=0,Hm=null,nx=null,Hl=0,Fm=null;function In(){if((rt&2)!==0&&Qe!==0)return Qe&-Qe;if(j.T!==null){var r=Yo;return r!==0?r:Km()}return $()}function rx(){Gn===0&&(Gn=(Qe&536870912)===0||Je?No():536870912);var r=Vn.current;return r!==null&&(r.flags|=32),Gn}function Dn(r,s,a){(r===ft&&(it===2||it===9)||r.cancelPendingCommit!==null)&&(la(r,0),qi(r,Qe,Gn,!1)),ks(r,a),((rt&2)===0||r!==ft)&&(r===ft&&((rt&2)===0&&(Qs|=a),Rt===4&&qi(r,Qe,Gn,!1)),Ir(r))}function ix(r,s,a){if((rt&6)!==0)throw Error(i(327));var c=!a&&(s&124)===0&&(s&r.expiredLanes)===0||wr(r,s),d=c?yk(r,s):Gm(r,s,!0),m=c;do{if(d===0){ia&&!c&&qi(r,s,0,!1);break}else{if(a=r.current.alternate,m&&!mk(a)){d=Gm(r,s,!1),m=!1;continue}if(d===2){if(m=s,r.errorRecoveryDisabledLanes&m)var S=0;else S=r.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){s=S;e:{var w=r;d=Bl;var L=w.current.memoizedState.isDehydrated;if(L&&(la(w,S).flags|=256),S=Gm(w,S,!1),S!==2){if(jm&&!L){w.errorRecoveryDisabledLanes|=m,Qs|=m,d=4;break e}m=_n,_n=d,m!==null&&(_n===null?_n=m:_n.push.apply(_n,m))}d=S}if(m=!1,d!==2)continue}}if(d===1){la(r,0),qi(r,s,0,!0);break}e:{switch(c=r,m=d,m){case 0:case 1:throw Error(i(345));case 4:if((s&4194048)!==s)break;case 6:qi(c,s,Gn,!zi);break e;case 2:_n=null;break;case 3:case 5:break;default:throw Error(i(329))}if((s&62914560)===s&&(d=zm+300-Yt(),10<d)){if(qi(c,s,Gn,!zi),Os(c,0,!0)!==0)break e;c.timeoutHandle=Nx(sx.bind(null,c,a,_n,Td,Um,s,Gn,Qs,sa,zi,m,2,-0,0),d);break e}sx(c,a,_n,Td,Um,s,Gn,Qs,sa,zi,m,0,-0,0)}}break}while(!0);Ir(r)}function sx(r,s,a,c,d,m,S,w,L,Q,re,oe,Z,J){if(r.timeoutHandle=-1,oe=s.subtreeFlags,(oe&8192||(oe&16785408)===16785408)&&(Ql={stylesheets:null,count:0,unsuspend:Kk},ZS(s),oe=Zk(),oe!==null)){r.cancelPendingCommit=oe(fx.bind(null,r,s,m,a,c,d,S,w,L,re,1,Z,J)),qi(r,m,S,!Q);return}fx(r,s,m,a,c,d,S,w,L)}function mk(r){for(var s=r;;){var a=s.tag;if((a===0||a===11||a===15)&&s.flags&16384&&(a=s.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!En(m(),d))return!1}catch{return!1}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function qi(r,s,a,c){s&=~$m,s&=~Qs,r.suspendedLanes|=s,r.pingedLanes&=~s,c&&(r.warmLanes|=s),c=r.expirationTimes;for(var d=s;0<d;){var m=31-Qt(d),S=1<<m;c[m]=-1,d&=~S}a!==0&&Ns(r,a,s)}function Cd(){return(rt&6)===0?(Fl(0),!1):!0}function qm(){if(Ge!==null){if(it===0)var r=Ge.return;else r=Ge,Kr=Fs=null,am(r),ea=null,Nl=0,r=Ge;for(;r!==null;)$S(r.alternate,r),r=r.return;Ge=null}}function la(r,s){var a=r.timeoutHandle;a!==-1&&(r.timeoutHandle=-1,Nk(a)),a=r.cancelPendingCommit,a!==null&&(r.cancelPendingCommit=null,a()),qm(),ft=r,Ge=a=Wr(r.current,null),Qe=s,it=0,An=null,zi=!1,ia=wr(r,s),jm=!1,sa=Gn=$m=Qs=Bi=Rt=0,_n=Bl=null,Um=!1,(s&8)!==0&&(s|=s&32);var c=r.entangledLanes;if(c!==0)for(r=r.entanglements,c&=s;0<c;){var d=31-Qt(c),m=1<<d;s|=r[d],c&=~m}return ii=s,Yu(),a}function ox(r,s){He=null,j.H=hd,s===El||s===rd?(s=w0(),it=3):s===b0?(s=w0(),it=4):it=s===ES?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,An=s,Ge===null&&(Rt=1,vd(r,Bn(s,r.current)))}function ax(){var r=j.H;return j.H=hd,r===null?hd:r}function lx(){var r=j.A;return j.A=hk,r}function Vm(){Rt=4,zi||(Qe&4194048)!==Qe&&Vn.current!==null||(ia=!0),(Bi&134217727)===0&&(Qs&134217727)===0||ft===null||qi(ft,Qe,Gn,!1)}function Gm(r,s,a){var c=rt;rt|=2;var d=ax(),m=lx();(ft!==r||Qe!==s)&&(Td=null,la(r,s)),s=!1;var S=Rt;e:do try{if(it!==0&&Ge!==null){var w=Ge,L=An;switch(it){case 8:qm(),S=6;break e;case 3:case 2:case 9:case 6:Vn.current===null&&(s=!0);var Q=it;if(it=0,An=null,ca(r,w,L,Q),a&&ia){S=0;break e}break;default:Q=it,it=0,An=null,ca(r,w,L,Q)}}gk(),S=Rt;break}catch(re){ox(r,re)}while(!0);return s&&r.shellSuspendCounter++,Kr=Fs=null,rt=c,j.H=d,j.A=m,Ge===null&&(ft=null,Qe=0,Yu()),S}function gk(){for(;Ge!==null;)cx(Ge)}function yk(r,s){var a=rt;rt|=2;var c=ax(),d=lx();ft!==r||Qe!==s?(Td=null,Ed=Yt()+500,la(r,s)):ia=wr(r,s);e:do try{if(it!==0&&Ge!==null){s=Ge;var m=An;t:switch(it){case 1:it=0,An=null,ca(r,s,m,1);break;case 2:case 9:if(S0(m)){it=0,An=null,ux(s);break}s=function(){it!==2&&it!==9||ft!==r||(it=7),Ir(r)},m.then(s,s);break e;case 3:it=7;break e;case 4:it=5;break e;case 7:S0(m)?(it=0,An=null,ux(s)):(it=0,An=null,ca(r,s,m,7));break;case 5:var S=null;switch(Ge.tag){case 26:S=Ge.memoizedState;case 5:case 27:var w=Ge;if(!S||Vx(S)){it=0,An=null;var L=w.sibling;if(L!==null)Ge=L;else{var Q=w.return;Q!==null?(Ge=Q,Rd(Q)):Ge=null}break t}}it=0,An=null,ca(r,s,m,5);break;case 6:it=0,An=null,ca(r,s,m,6);break;case 8:qm(),Rt=6;break e;default:throw Error(i(462))}}vk();break}catch(re){ox(r,re)}while(!0);return Kr=Fs=null,j.H=c,j.A=d,rt=a,Ge!==null?0:(ft=null,Qe=0,Yu(),Rt)}function vk(){for(;Ge!==null&&!jn();)cx(Ge)}function cx(r){var s=PS(r.alternate,r,ii);r.memoizedProps=r.pendingProps,s===null?Rd(r):Ge=s}function ux(r){var s=r,a=s.alternate;switch(s.tag){case 15:case 0:s=DS(a,s,s.pendingProps,s.type,void 0,Qe);break;case 11:s=DS(a,s,s.pendingProps,s.type.render,s.ref,Qe);break;case 5:am(s);default:$S(a,s),s=Ge=d0(s,ii),s=PS(a,s,ii)}r.memoizedProps=r.pendingProps,s===null?Rd(r):Ge=s}function ca(r,s,a,c){Kr=Fs=null,am(s),ea=null,Nl=0;var d=s.return;try{if(ak(r,d,s,a,Qe)){Rt=1,vd(r,Bn(a,r.current)),Ge=null;return}}catch(m){if(d!==null)throw Ge=d,m;Rt=1,vd(r,Bn(a,r.current)),Ge=null;return}s.flags&32768?(Je||c===1?r=!0:ia||(Qe&536870912)!==0?r=!1:(zi=r=!0,(c===2||c===9||c===3||c===6)&&(c=Vn.current,c!==null&&c.tag===13&&(c.flags|=16384))),dx(s,r)):Rd(s)}function Rd(r){var s=r;do{if((s.flags&32768)!==0){dx(s,zi);return}r=s.return;var a=ck(s.alternate,s,ii);if(a!==null){Ge=a;return}if(s=s.sibling,s!==null){Ge=s;return}Ge=s=r}while(s!==null);Rt===0&&(Rt=5)}function dx(r,s){do{var a=uk(r.alternate,r);if(a!==null){a.flags&=32767,Ge=a;return}if(a=r.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!s&&(r=r.sibling,r!==null)){Ge=r;return}Ge=r=a}while(r!==null);Rt=6,Ge=null}function fx(r,s,a,c,d,m,S,w,L){r.cancelPendingCommit=null;do Ad();while(Xt!==0);if((rt&6)!==0)throw Error(i(327));if(s!==null){if(s===r.current)throw Error(i(177));if(m=s.lanes|s.childLanes,m|=Pp,Pu(r,a,m,S,w,L),r===ft&&(Ge=ft=null,Qe=0),oa=s,Fi=r,aa=a,Bm=m,Hm=d,nx=c,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,xk(ko,function(){return yx(),null})):(r.callbackNode=null,r.callbackPriority=0),c=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||c){c=j.T,j.T=null,d=K.p,K.p=2,S=rt,rt|=4;try{dk(r,s,a)}finally{rt=S,K.p=d,j.T=c}}Xt=1,hx(),px(),mx()}}function hx(){if(Xt===1){Xt=0;var r=Fi,s=oa,a=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||a){a=j.T,j.T=null;var c=K.p;K.p=2;var d=rt;rt|=4;try{QS(s,r);var m=ig,S=t0(r.containerInfo),w=m.focusedElem,L=m.selectionRange;if(S!==w&&w&&w.ownerDocument&&e0(w.ownerDocument.documentElement,w)){if(L!==null&&Op(w)){var Q=L.start,re=L.end;if(re===void 0&&(re=Q),"selectionStart"in w)w.selectionStart=Q,w.selectionEnd=Math.min(re,w.value.length);else{var oe=w.ownerDocument||document,Z=oe&&oe.defaultView||window;if(Z.getSelection){var J=Z.getSelection(),Me=w.textContent.length,Ae=Math.min(L.start,Me),lt=L.end===void 0?Ae:Math.min(L.end,Me);!J.extend&&Ae>lt&&(S=lt,lt=Ae,Ae=S);var q=Jb(w,Ae),B=Jb(w,lt);if(q&&B&&(J.rangeCount!==1||J.anchorNode!==q.node||J.anchorOffset!==q.offset||J.focusNode!==B.node||J.focusOffset!==B.offset)){var Y=oe.createRange();Y.setStart(q.node,q.offset),J.removeAllRanges(),Ae>lt?(J.addRange(Y),J.extend(B.node,B.offset)):(Y.setEnd(B.node,B.offset),J.addRange(Y))}}}}for(oe=[],J=w;J=J.parentNode;)J.nodeType===1&&oe.push({element:J,left:J.scrollLeft,top:J.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<oe.length;w++){var se=oe[w];se.element.scrollLeft=se.left,se.element.scrollTop=se.top}}zd=!!rg,ig=rg=null}finally{rt=d,K.p=c,j.T=a}}r.current=s,Xt=2}}function px(){if(Xt===2){Xt=0;var r=Fi,s=oa,a=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||a){a=j.T,j.T=null;var c=K.p;K.p=2;var d=rt;rt|=4;try{VS(r,s.alternate,s)}finally{rt=d,K.p=c,j.T=a}}Xt=3}}function mx(){if(Xt===4||Xt===3){Xt=0,Ur();var r=Fi,s=oa,a=aa,c=nx;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?Xt=5:(Xt=0,oa=Fi=null,gx(r,r.pendingLanes));var d=r.pendingLanes;if(d===0&&(Hi=null),ll(a),s=s.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(pn,s,void 0,(s.current.flags&128)===128)}catch{}if(c!==null){s=j.T,d=K.p,K.p=2,j.T=null;try{for(var m=r.onRecoverableError,S=0;S<c.length;S++){var w=c[S];m(w.value,{componentStack:w.stack})}}finally{j.T=s,K.p=d}}(aa&3)!==0&&Ad(),Ir(r),d=r.pendingLanes,(a&4194090)!==0&&(d&42)!==0?r===Fm?Hl++:(Hl=0,Fm=r):Hl=0,Fl(0)}}function gx(r,s){(r.pooledCacheLanes&=s)===0&&(s=r.pooledCache,s!=null&&(r.pooledCache=null,xl(s)))}function Ad(r){return hx(),px(),mx(),yx()}function yx(){if(Xt!==5)return!1;var r=Fi,s=Bm;Bm=0;var a=ll(aa),c=j.T,d=K.p;try{K.p=32>a?32:a,j.T=null,a=Hm,Hm=null;var m=Fi,S=aa;if(Xt=0,oa=Fi=null,aa=0,(rt&6)!==0)throw Error(i(331));var w=rt;if(rt|=4,ex(m.current),XS(m,m.current,S,a),rt=w,Fl(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(pn,m)}catch{}return!0}finally{K.p=d,j.T=c,gx(r,s)}}function vx(r,s,a){s=Bn(a,s),s=Sm(r.stateNode,s,2),r=Ni(r,s,2),r!==null&&(ks(r,2),Ir(r))}function dt(r,s,a){if(r.tag===3)vx(r,r,a);else for(;s!==null;){if(s.tag===3){vx(s,r,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Hi===null||!Hi.has(c))){r=Bn(a,r),a=xS(2),c=Ni(s,a,2),c!==null&&(wS(a,c,s,r),ks(c,2),Ir(c));break}}s=s.return}}function Wm(r,s,a){var c=r.pingCache;if(c===null){c=r.pingCache=new pk;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(a)||(jm=!0,d.add(a),r=_k.bind(null,r,s,a),s.then(r,r))}function _k(r,s,a){var c=r.pingCache;c!==null&&c.delete(s),r.pingedLanes|=r.suspendedLanes&a,r.warmLanes&=~a,ft===r&&(Qe&a)===a&&(Rt===4||Rt===3&&(Qe&62914560)===Qe&&300>Yt()-zm?(rt&2)===0&&la(r,0):$m|=a,sa===Qe&&(sa=0)),Ir(r)}function _x(r,s){s===0&&(s=Lu()),r=qo(r,s),r!==null&&(ks(r,s),Ir(r))}function bk(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),_x(r,a)}function Sk(r,s){var a=0;switch(r.tag){case 13:var c=r.stateNode,d=r.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=r.stateNode;break;case 22:c=r.stateNode._retryCache;break;default:throw Error(i(314))}c!==null&&c.delete(s),_x(r,a)}function xk(r,s){return Pn(r,s)}var Id=null,ua=null,Ym=!1,Dd=!1,Qm=!1,Ks=0;function Ir(r){r!==ua&&r.next===null&&(ua===null?Id=ua=r:ua=ua.next=r),Dd=!0,Ym||(Ym=!0,Ek())}function Fl(r,s){if(!Qm&&Dd){Qm=!0;do for(var a=!1,c=Id;c!==null;){if(r!==0){var d=c.pendingLanes;if(d===0)var m=0;else{var S=c.suspendedLanes,w=c.pingedLanes;m=(1<<31-Qt(42|r)+1)-1,m&=d&~(S&~w),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(a=!0,wx(c,m))}else m=Qe,m=Os(c,c===ft?m:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(m&3)===0||wr(c,m)||(a=!0,wx(c,m));c=c.next}while(a);Qm=!1}}function wk(){bx()}function bx(){Dd=Ym=!1;var r=0;Ks!==0&&(kk()&&(r=Ks),Ks=0);for(var s=Yt(),a=null,c=Id;c!==null;){var d=c.next,m=Sx(c,s);m===0?(c.next=null,a===null?Id=d:a.next=d,d===null&&(ua=a)):(a=c,(r!==0||(m&3)!==0)&&(Dd=!0)),c=d}Fl(r)}function Sx(r,s){for(var a=r.suspendedLanes,c=r.pingedLanes,d=r.expirationTimes,m=r.pendingLanes&-62914561;0<m;){var S=31-Qt(m),w=1<<S,L=d[S];L===-1?((w&a)===0||(w&c)!==0)&&(d[S]=Mu(w,s)):L<=s&&(r.expiredLanes|=w),m&=~w}if(s=ft,a=Qe,a=Os(r,r===s?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),c=r.callbackNode,a===0||r===s&&(it===2||it===9)||r.cancelPendingCommit!==null)return c!==null&&c!==null&&Et(c),r.callbackNode=null,r.callbackPriority=0;if((a&3)===0||wr(r,a)){if(s=a&-a,s===r.callbackPriority)return s;switch(c!==null&&Et(c),ll(a)){case 2:case 8:a=Oo;break;case 32:a=ko;break;case 268435456:a=Ci;break;default:a=ko}return c=xx.bind(null,r),a=Pn(a,c),r.callbackPriority=s,r.callbackNode=a,s}return c!==null&&c!==null&&Et(c),r.callbackPriority=2,r.callbackNode=null,2}function xx(r,s){if(Xt!==0&&Xt!==5)return r.callbackNode=null,r.callbackPriority=0,null;var a=r.callbackNode;if(Ad()&&r.callbackNode!==a)return null;var c=Qe;return c=Os(r,r===ft?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),c===0?null:(ix(r,c,s),Sx(r,Yt()),r.callbackNode!=null&&r.callbackNode===a?xx.bind(null,r):null)}function wx(r,s){if(Ad())return null;ix(r,s,!0)}function Ek(){Mk(function(){(rt&6)!==0?Pn(As,wk):bx()})}function Km(){return Ks===0&&(Ks=No()),Ks}function Ex(r){return r==null||typeof r=="symbol"||typeof r=="boolean"?null:typeof r=="function"?r:Bu(""+r)}function Tx(r,s){var a=s.ownerDocument.createElement("input");return a.name=s.name,a.value=s.value,r.id&&a.setAttribute("form",r.id),s.parentNode.insertBefore(a,s),r=new FormData(r),a.parentNode.removeChild(a),r}function Tk(r,s,a,c,d){if(s==="submit"&&a&&a.stateNode===d){var m=Ex((d[fe]||null).action),S=c.submitter;S&&(s=(s=S[fe]||null)?Ex(s.formAction):S.getAttribute("formAction"),s!==null&&(m=s,S=null));var w=new Vu("action","action",null,c,d);r.push({event:w,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(Ks!==0){var L=S?Tx(d,S):new FormData(d);gm(a,{pending:!0,data:L,method:d.method,action:m},null,L)}}else typeof m=="function"&&(w.preventDefault(),L=S?Tx(d,S):new FormData(d),gm(a,{pending:!0,data:L,method:d.method,action:m},m,L))},currentTarget:d}]})}}for(var Xm=0;Xm<Lp.length;Xm++){var Zm=Lp[Xm],Ck=Zm.toLowerCase(),Rk=Zm[0].toUpperCase()+Zm.slice(1);or(Ck,"on"+Rk)}or(i0,"onAnimationEnd"),or(s0,"onAnimationIteration"),or(o0,"onAnimationStart"),or("dblclick","onDoubleClick"),or("focusin","onFocus"),or("focusout","onBlur"),or(qO,"onTransitionRun"),or(VO,"onTransitionStart"),or(GO,"onTransitionCancel"),or(a0,"onTransitionEnd"),cn("onMouseEnter",["mouseout","mouseover"]),cn("onMouseLeave",["mouseout","mouseover"]),cn("onPointerEnter",["pointerout","pointerover"]),cn("onPointerLeave",["pointerout","pointerover"]),wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),wn("onBeforeInput",["compositionend","keypress","textInput","paste"]),wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ql="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ak=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ql));function Cx(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var c=r[a],d=c.event;c=c.listeners;e:{var m=void 0;if(s)for(var S=c.length-1;0<=S;S--){var w=c[S],L=w.instance,Q=w.currentTarget;if(w=w.listener,L!==m&&d.isPropagationStopped())break e;m=w,d.currentTarget=Q;try{m(d)}catch(re){yd(re)}d.currentTarget=null,m=L}else for(S=0;S<c.length;S++){if(w=c[S],L=w.instance,Q=w.currentTarget,w=w.listener,L!==m&&d.isPropagationStopped())break e;m=w,d.currentTarget=Q;try{m(d)}catch(re){yd(re)}d.currentTarget=null,m=L}}}}function We(r,s){var a=s[xe];a===void 0&&(a=s[xe]=new Set);var c=r+"__bubble";a.has(c)||(Rx(s,r,2,!1),a.add(c))}function Jm(r,s,a){var c=0;s&&(c|=4),Rx(a,r,c,s)}var Od="_reactListening"+Math.random().toString(36).slice(2);function eg(r){if(!r[Od]){r[Od]=!0,st.forEach(function(a){a!=="selectionchange"&&(Ak.has(a)||Jm(a,!1,r),Jm(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[Od]||(s[Od]=!0,Jm("selectionchange",!1,s))}}function Rx(r,s,a,c){switch(Xx(s)){case 2:var d=tN;break;case 8:d=nN;break;default:d=pg}a=d.bind(null,s,a,r),d=void 0,!xp||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?r.addEventListener(s,a,{capture:!0,passive:d}):r.addEventListener(s,a,!0):d!==void 0?r.addEventListener(s,a,{passive:d}):r.addEventListener(s,a,!1)}function tg(r,s,a,c,d){var m=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var S=c.tag;if(S===3||S===4){var w=c.stateNode.containerInfo;if(w===d)break;if(S===4)for(S=c.return;S!==null;){var L=S.tag;if((L===3||L===4)&&S.stateNode.containerInfo===d)return;S=S.return}for(;w!==null;){if(S=ze(w),S===null)return;if(L=S.tag,L===5||L===6||L===26||L===27){c=m=S;continue e}w=w.parentNode}}c=c.return}Mb(function(){var Q=m,re=bp(a),oe=[];e:{var Z=l0.get(r);if(Z!==void 0){var J=Vu,Me=r;switch(r){case"keypress":if(Fu(a)===0)break e;case"keydown":case"keyup":J=xO;break;case"focusin":Me="focus",J=Cp;break;case"focusout":Me="blur",J=Cp;break;case"beforeblur":case"afterblur":J=Cp;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":J=jb;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":J=uO;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":J=TO;break;case i0:case s0:case o0:J=hO;break;case a0:J=RO;break;case"scroll":case"scrollend":J=lO;break;case"wheel":J=IO;break;case"copy":case"cut":case"paste":J=mO;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":J=Ub;break;case"toggle":case"beforetoggle":J=OO}var Ae=(s&4)!==0,lt=!Ae&&(r==="scroll"||r==="scrollend"),q=Ae?Z!==null?Z+"Capture":null:Z;Ae=[];for(var B=Q,Y;B!==null;){var se=B;if(Y=se.stateNode,se=se.tag,se!==5&&se!==26&&se!==27||Y===null||q===null||(se=cl(B,q),se!=null&&Ae.push(Vl(B,se,Y))),lt)break;B=B.return}0<Ae.length&&(Z=new J(Z,Me,null,a,re),oe.push({event:Z,listeners:Ae}))}}if((s&7)===0){e:{if(Z=r==="mouseover"||r==="pointerover",J=r==="mouseout"||r==="pointerout",Z&&a!==_p&&(Me=a.relatedTarget||a.fromElement)&&(ze(Me)||Me[ye]))break e;if((J||Z)&&(Z=re.window===re?re:(Z=re.ownerDocument)?Z.defaultView||Z.parentWindow:window,J?(Me=a.relatedTarget||a.toElement,J=Q,Me=Me?ze(Me):null,Me!==null&&(lt=l(Me),Ae=Me.tag,Me!==lt||Ae!==5&&Ae!==27&&Ae!==6)&&(Me=null)):(J=null,Me=Q),J!==Me)){if(Ae=jb,se="onMouseLeave",q="onMouseEnter",B="mouse",(r==="pointerout"||r==="pointerover")&&(Ae=Ub,se="onPointerLeave",q="onPointerEnter",B="pointer"),lt=J==null?Z:yt(J),Y=Me==null?Z:yt(Me),Z=new Ae(se,B+"leave",J,a,re),Z.target=lt,Z.relatedTarget=Y,se=null,ze(re)===Q&&(Ae=new Ae(q,B+"enter",Me,a,re),Ae.target=Y,Ae.relatedTarget=lt,se=Ae),lt=se,J&&Me)t:{for(Ae=J,q=Me,B=0,Y=Ae;Y;Y=da(Y))B++;for(Y=0,se=q;se;se=da(se))Y++;for(;0<B-Y;)Ae=da(Ae),B--;for(;0<Y-B;)q=da(q),Y--;for(;B--;){if(Ae===q||q!==null&&Ae===q.alternate)break t;Ae=da(Ae),q=da(q)}Ae=null}else Ae=null;J!==null&&Ax(oe,Z,J,Ae,!1),Me!==null&&lt!==null&&Ax(oe,lt,Me,Ae,!0)}}e:{if(Z=Q?yt(Q):window,J=Z.nodeName&&Z.nodeName.toLowerCase(),J==="select"||J==="input"&&Z.type==="file")var ge=Wb;else if(Vb(Z))if(Yb)ge=BO;else{ge=UO;var Fe=$O}else J=Z.nodeName,!J||J.toLowerCase()!=="input"||Z.type!=="checkbox"&&Z.type!=="radio"?Q&&vp(Q.elementType)&&(ge=Wb):ge=zO;if(ge&&(ge=ge(r,Q))){Gb(oe,ge,a,re);break e}Fe&&Fe(r,Z,Q),r==="focusout"&&Q&&Z.type==="number"&&Q.memoizedProps.value!=null&&yp(Z,"number",Z.value)}switch(Fe=Q?yt(Q):window,r){case"focusin":(Vb(Fe)||Fe.contentEditable==="true")&&(Bo=Fe,kp=Q,yl=null);break;case"focusout":yl=kp=Bo=null;break;case"mousedown":Np=!0;break;case"contextmenu":case"mouseup":case"dragend":Np=!1,n0(oe,a,re);break;case"selectionchange":if(FO)break;case"keydown":case"keyup":n0(oe,a,re)}var we;if(Ap)e:{switch(r){case"compositionstart":var De="onCompositionStart";break e;case"compositionend":De="onCompositionEnd";break e;case"compositionupdate":De="onCompositionUpdate";break e}De=void 0}else zo?Fb(r,a)&&(De="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(De="onCompositionStart");De&&(zb&&a.locale!=="ko"&&(zo||De!=="onCompositionStart"?De==="onCompositionEnd"&&zo&&(we=Lb()):(Ii=re,wp="value"in Ii?Ii.value:Ii.textContent,zo=!0)),Fe=kd(Q,De),0<Fe.length&&(De=new $b(De,r,null,a,re),oe.push({event:De,listeners:Fe}),we?De.data=we:(we=qb(a),we!==null&&(De.data=we)))),(we=NO?MO(r,a):LO(r,a))&&(De=kd(Q,"onBeforeInput"),0<De.length&&(Fe=new $b("onBeforeInput","beforeinput",null,a,re),oe.push({event:Fe,listeners:De}),Fe.data=we)),Tk(oe,r,Q,a,re)}Cx(oe,s)})}function Vl(r,s,a){return{instance:r,listener:s,currentTarget:a}}function kd(r,s){for(var a=s+"Capture",c=[];r!==null;){var d=r,m=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||m===null||(d=cl(r,a),d!=null&&c.unshift(Vl(r,d,m)),d=cl(r,s),d!=null&&c.push(Vl(r,d,m))),r.tag===3)return c;r=r.return}return[]}function da(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r||null}function Ax(r,s,a,c,d){for(var m=s._reactName,S=[];a!==null&&a!==c;){var w=a,L=w.alternate,Q=w.stateNode;if(w=w.tag,L!==null&&L===c)break;w!==5&&w!==26&&w!==27||Q===null||(L=Q,d?(Q=cl(a,m),Q!=null&&S.unshift(Vl(a,Q,L))):d||(Q=cl(a,m),Q!=null&&S.push(Vl(a,Q,L)))),a=a.return}S.length!==0&&r.push({event:s,listeners:S})}var Ik=/\r\n?/g,Dk=/\u0000|\uFFFD/g;function Ix(r){return(typeof r=="string"?r:""+r).replace(Ik,`
`).replace(Dk,"")}function Dx(r,s){return s=Ix(s),Ix(r)===s}function Nd(){}function at(r,s,a,c,d,m){switch(a){case"children":typeof c=="string"?s==="body"||s==="textarea"&&c===""||jo(r,c):(typeof c=="number"||typeof c=="bigint")&&s!=="body"&&jo(r,""+c);break;case"className":qr(r,"class",c);break;case"tabIndex":qr(r,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":qr(r,a,c);break;case"style":kb(r,c,m);break;case"data":if(s!=="object"){qr(r,"data",c);break}case"src":case"href":if(c===""&&(s!=="a"||a!=="href")){r.removeAttribute(a);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){r.removeAttribute(a);break}c=Bu(""+c),r.setAttribute(a,c);break;case"action":case"formAction":if(typeof c=="function"){r.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(a==="formAction"?(s!=="input"&&at(r,s,"name",d.name,d,null),at(r,s,"formEncType",d.formEncType,d,null),at(r,s,"formMethod",d.formMethod,d,null),at(r,s,"formTarget",d.formTarget,d,null)):(at(r,s,"encType",d.encType,d,null),at(r,s,"method",d.method,d,null),at(r,s,"target",d.target,d,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){r.removeAttribute(a);break}c=Bu(""+c),r.setAttribute(a,c);break;case"onClick":c!=null&&(r.onclick=Nd);break;case"onScroll":c!=null&&We("scroll",r);break;case"onScrollEnd":c!=null&&We("scrollend",r);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(a=c.__html,a!=null){if(d.children!=null)throw Error(i(60));r.innerHTML=a}}break;case"multiple":r.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":r.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){r.removeAttribute("xlink:href");break}a=Bu(""+c),r.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(a,""+c):r.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(a,""):r.removeAttribute(a);break;case"capture":case"download":c===!0?r.setAttribute(a,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(a,c):r.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?r.setAttribute(a,c):r.removeAttribute(a);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?r.removeAttribute(a):r.setAttribute(a,c);break;case"popover":We("beforetoggle",r),We("toggle",r),Fr(r,"popover",c);break;case"xlinkActuate":Pe(r,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":Pe(r,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":Pe(r,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":Pe(r,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":Pe(r,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":Pe(r,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":Pe(r,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":Pe(r,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":Pe(r,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":Fr(r,"is",c);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=oO.get(a)||a,Fr(r,a,c))}}function ng(r,s,a,c,d,m){switch(a){case"style":kb(r,c,m);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(a=c.__html,a!=null){if(d.children!=null)throw Error(i(60));r.innerHTML=a}}break;case"children":typeof c=="string"?jo(r,c):(typeof c=="number"||typeof c=="bigint")&&jo(r,""+c);break;case"onScroll":c!=null&&We("scroll",r);break;case"onScrollEnd":c!=null&&We("scrollend",r);break;case"onClick":c!=null&&(r.onclick=Nd);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Er.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(d=a.endsWith("Capture"),s=a.slice(2,d?a.length-7:void 0),m=r[fe]||null,m=m!=null?m[a]:null,typeof m=="function"&&r.removeEventListener(s,m,d),typeof c=="function")){typeof m!="function"&&m!==null&&(a in r?r[a]=null:r.hasAttribute(a)&&r.removeAttribute(a)),r.addEventListener(s,c,d);break e}a in r?r[a]=c:c===!0?r.setAttribute(a,""):Fr(r,a,c)}}}function Zt(r,s,a){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":We("error",r),We("load",r);var c=!1,d=!1,m;for(m in a)if(a.hasOwnProperty(m)){var S=a[m];if(S!=null)switch(m){case"src":c=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:at(r,s,m,S,a,null)}}d&&at(r,s,"srcSet",a.srcSet,a,null),c&&at(r,s,"src",a.src,a,null);return;case"input":We("invalid",r);var w=m=S=d=null,L=null,Q=null;for(c in a)if(a.hasOwnProperty(c)){var re=a[c];if(re!=null)switch(c){case"name":d=re;break;case"type":S=re;break;case"checked":L=re;break;case"defaultChecked":Q=re;break;case"value":m=re;break;case"defaultValue":w=re;break;case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(i(137,s));break;default:at(r,s,c,re,a,null)}}Ab(r,m,w,L,Q,S,d,!1),Uu(r);return;case"select":We("invalid",r),c=S=m=null;for(d in a)if(a.hasOwnProperty(d)&&(w=a[d],w!=null))switch(d){case"value":m=w;break;case"defaultValue":S=w;break;case"multiple":c=w;default:at(r,s,d,w,a,null)}s=m,a=S,r.multiple=!!c,s!=null?Po(r,!!c,s,!1):a!=null&&Po(r,!!c,a,!0);return;case"textarea":We("invalid",r),m=d=c=null;for(S in a)if(a.hasOwnProperty(S)&&(w=a[S],w!=null))switch(S){case"value":c=w;break;case"defaultValue":d=w;break;case"children":m=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(i(91));break;default:at(r,s,S,w,a,null)}Db(r,c,d,m),Uu(r);return;case"option":for(L in a)if(a.hasOwnProperty(L)&&(c=a[L],c!=null))switch(L){case"selected":r.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:at(r,s,L,c,a,null)}return;case"dialog":We("beforetoggle",r),We("toggle",r),We("cancel",r),We("close",r);break;case"iframe":case"object":We("load",r);break;case"video":case"audio":for(c=0;c<ql.length;c++)We(ql[c],r);break;case"image":We("error",r),We("load",r);break;case"details":We("toggle",r);break;case"embed":case"source":case"link":We("error",r),We("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(c=a[Q],c!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:at(r,s,Q,c,a,null)}return;default:if(vp(s)){for(re in a)a.hasOwnProperty(re)&&(c=a[re],c!==void 0&&ng(r,s,re,c,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(c=a[w],c!=null&&at(r,s,w,c,a,null))}function Ok(r,s,a,c){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,m=null,S=null,w=null,L=null,Q=null,re=null;for(J in a){var oe=a[J];if(a.hasOwnProperty(J)&&oe!=null)switch(J){case"checked":break;case"value":break;case"defaultValue":L=oe;default:c.hasOwnProperty(J)||at(r,s,J,null,c,oe)}}for(var Z in c){var J=c[Z];if(oe=a[Z],c.hasOwnProperty(Z)&&(J!=null||oe!=null))switch(Z){case"type":m=J;break;case"name":d=J;break;case"checked":Q=J;break;case"defaultChecked":re=J;break;case"value":S=J;break;case"defaultValue":w=J;break;case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(i(137,s));break;default:J!==oe&&at(r,s,Z,J,c,oe)}}gp(r,S,w,L,Q,re,m,d);return;case"select":J=S=w=Z=null;for(m in a)if(L=a[m],a.hasOwnProperty(m)&&L!=null)switch(m){case"value":break;case"multiple":J=L;default:c.hasOwnProperty(m)||at(r,s,m,null,c,L)}for(d in c)if(m=c[d],L=a[d],c.hasOwnProperty(d)&&(m!=null||L!=null))switch(d){case"value":Z=m;break;case"defaultValue":w=m;break;case"multiple":S=m;default:m!==L&&at(r,s,d,m,c,L)}s=w,a=S,c=J,Z!=null?Po(r,!!a,Z,!1):!!c!=!!a&&(s!=null?Po(r,!!a,s,!0):Po(r,!!a,a?[]:"",!1));return;case"textarea":J=Z=null;for(w in a)if(d=a[w],a.hasOwnProperty(w)&&d!=null&&!c.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:at(r,s,w,null,c,d)}for(S in c)if(d=c[S],m=a[S],c.hasOwnProperty(S)&&(d!=null||m!=null))switch(S){case"value":Z=d;break;case"defaultValue":J=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(i(91));break;default:d!==m&&at(r,s,S,d,c,m)}Ib(r,Z,J);return;case"option":for(var Me in a)if(Z=a[Me],a.hasOwnProperty(Me)&&Z!=null&&!c.hasOwnProperty(Me))switch(Me){case"selected":r.selected=!1;break;default:at(r,s,Me,null,c,Z)}for(L in c)if(Z=c[L],J=a[L],c.hasOwnProperty(L)&&Z!==J&&(Z!=null||J!=null))switch(L){case"selected":r.selected=Z&&typeof Z!="function"&&typeof Z!="symbol";break;default:at(r,s,L,Z,c,J)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ae in a)Z=a[Ae],a.hasOwnProperty(Ae)&&Z!=null&&!c.hasOwnProperty(Ae)&&at(r,s,Ae,null,c,Z);for(Q in c)if(Z=c[Q],J=a[Q],c.hasOwnProperty(Q)&&Z!==J&&(Z!=null||J!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(i(137,s));break;default:at(r,s,Q,Z,c,J)}return;default:if(vp(s)){for(var lt in a)Z=a[lt],a.hasOwnProperty(lt)&&Z!==void 0&&!c.hasOwnProperty(lt)&&ng(r,s,lt,void 0,c,Z);for(re in c)Z=c[re],J=a[re],!c.hasOwnProperty(re)||Z===J||Z===void 0&&J===void 0||ng(r,s,re,Z,c,J);return}}for(var q in a)Z=a[q],a.hasOwnProperty(q)&&Z!=null&&!c.hasOwnProperty(q)&&at(r,s,q,null,c,Z);for(oe in c)Z=c[oe],J=a[oe],!c.hasOwnProperty(oe)||Z===J||Z==null&&J==null||at(r,s,oe,Z,c,J)}var rg=null,ig=null;function Md(r){return r.nodeType===9?r:r.ownerDocument}function Ox(r){switch(r){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function kx(r,s){if(r===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return r===1&&s==="foreignObject"?0:r}function sg(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var og=null;function kk(){var r=window.event;return r&&r.type==="popstate"?r===og?!1:(og=r,!0):(og=null,!1)}var Nx=typeof setTimeout=="function"?setTimeout:void 0,Nk=typeof clearTimeout=="function"?clearTimeout:void 0,Mx=typeof Promise=="function"?Promise:void 0,Mk=typeof queueMicrotask=="function"?queueMicrotask:typeof Mx<"u"?function(r){return Mx.resolve(null).then(r).catch(Lk)}:Nx;function Lk(r){setTimeout(function(){throw r})}function Vi(r){return r==="head"}function Lx(r,s){var a=s,c=0,d=0;do{var m=a.nextSibling;if(r.removeChild(a),m&&m.nodeType===8)if(a=m.data,a==="/$"){if(0<c&&8>c){a=c;var S=r.ownerDocument;if(a&1&&Gl(S.documentElement),a&2&&Gl(S.body),a&4)for(a=S.head,Gl(a),S=a.firstChild;S;){var w=S.nextSibling,L=S.nodeName;S[_e]||L==="SCRIPT"||L==="STYLE"||L==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=w}}if(d===0){r.removeChild(m),ec(s);return}d--}else a==="$"||a==="$?"||a==="$!"?d++:c=a.charCodeAt(0)-48;else c=0;a=m}while(a);ec(s)}function ag(r){var s=r.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var a=s;switch(s=s.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ag(a),Se(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}r.removeChild(a)}}function Pk(r,s,a,c){for(;r.nodeType===1;){var d=a;if(r.nodeName.toLowerCase()!==s.toLowerCase()){if(!c&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(c){if(!r[_e])switch(s){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(m=r.getAttribute("rel"),m==="stylesheet"&&r.hasAttribute("data-precedence"))break;if(m!==d.rel||r.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||r.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||r.getAttribute("title")!==(d.title==null?null:d.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(m=r.getAttribute("src"),(m!==(d.src==null?null:d.src)||r.getAttribute("type")!==(d.type==null?null:d.type)||r.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&m&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}}else if(s==="input"&&r.type==="hidden"){var m=d.name==null?null:""+d.name;if(d.type==="hidden"&&r.getAttribute("name")===m)return r}else return r;if(r=lr(r.nextSibling),r===null)break}return null}function jk(r,s,a){if(s==="")return null;for(;r.nodeType!==3;)if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!a||(r=lr(r.nextSibling),r===null))return null;return r}function lg(r){return r.data==="$!"||r.data==="$?"&&r.ownerDocument.readyState==="complete"}function $k(r,s){var a=r.ownerDocument;if(r.data!=="$?"||a.readyState==="complete")s();else{var c=function(){s(),a.removeEventListener("DOMContentLoaded",c)};a.addEventListener("DOMContentLoaded",c),r._reactRetry=c}}function lr(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return r}var cg=null;function Px(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}function jx(r,s,a){switch(s=Md(a),r){case"html":if(r=s.documentElement,!r)throw Error(i(452));return r;case"head":if(r=s.head,!r)throw Error(i(453));return r;case"body":if(r=s.body,!r)throw Error(i(454));return r;default:throw Error(i(451))}}function Gl(r){for(var s=r.attributes;s.length;)r.removeAttributeNode(s[0]);Se(r)}var Wn=new Map,$x=new Set;function Ld(r){return typeof r.getRootNode=="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}var si=K.d;K.d={f:Uk,r:zk,D:Bk,C:Hk,L:Fk,m:qk,X:Gk,S:Vk,M:Wk};function Uk(){var r=si.f(),s=Cd();return r||s}function zk(r){var s=Ze(r);s!==null&&s.tag===5&&s.type==="form"?iS(s):si.r(r)}var fa=typeof document>"u"?null:document;function Ux(r,s,a){var c=fa;if(c&&typeof s=="string"&&s){var d=zn(s);d='link[rel="'+r+'"][href="'+d+'"]',typeof a=="string"&&(d+='[crossorigin="'+a+'"]'),$x.has(d)||($x.add(d),r={rel:r,crossOrigin:a,href:s},c.querySelector(d)===null&&(s=c.createElement("link"),Zt(s,"link",r),Le(s),c.head.appendChild(s)))}}function Bk(r){si.D(r),Ux("dns-prefetch",r,null)}function Hk(r,s){si.C(r,s),Ux("preconnect",r,s)}function Fk(r,s,a){si.L(r,s,a);var c=fa;if(c&&r&&s){var d='link[rel="preload"][as="'+zn(s)+'"]';s==="image"&&a&&a.imageSrcSet?(d+='[imagesrcset="'+zn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(d+='[imagesizes="'+zn(a.imageSizes)+'"]')):d+='[href="'+zn(r)+'"]';var m=d;switch(s){case"style":m=ha(r);break;case"script":m=pa(r)}Wn.has(m)||(r=y({rel:"preload",href:s==="image"&&a&&a.imageSrcSet?void 0:r,as:s},a),Wn.set(m,r),c.querySelector(d)!==null||s==="style"&&c.querySelector(Wl(m))||s==="script"&&c.querySelector(Yl(m))||(s=c.createElement("link"),Zt(s,"link",r),Le(s),c.head.appendChild(s)))}}function qk(r,s){si.m(r,s);var a=fa;if(a&&r){var c=s&&typeof s.as=="string"?s.as:"script",d='link[rel="modulepreload"][as="'+zn(c)+'"][href="'+zn(r)+'"]',m=d;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=pa(r)}if(!Wn.has(m)&&(r=y({rel:"modulepreload",href:r},s),Wn.set(m,r),a.querySelector(d)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Yl(m)))return}c=a.createElement("link"),Zt(c,"link",r),Le(c),a.head.appendChild(c)}}}function Vk(r,s,a){si.S(r,s,a);var c=fa;if(c&&r){var d=Tt(c).hoistableStyles,m=ha(r);s=s||"default";var S=d.get(m);if(!S){var w={loading:0,preload:null};if(S=c.querySelector(Wl(m)))w.loading=5;else{r=y({rel:"stylesheet",href:r,"data-precedence":s},a),(a=Wn.get(m))&&ug(r,a);var L=S=c.createElement("link");Le(L),Zt(L,"link",r),L._p=new Promise(function(Q,re){L.onload=Q,L.onerror=re}),L.addEventListener("load",function(){w.loading|=1}),L.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Pd(S,s,c)}S={type:"stylesheet",instance:S,count:1,state:w},d.set(m,S)}}}function Gk(r,s){si.X(r,s);var a=fa;if(a&&r){var c=Tt(a).hoistableScripts,d=pa(r),m=c.get(d);m||(m=a.querySelector(Yl(d)),m||(r=y({src:r,async:!0},s),(s=Wn.get(d))&&dg(r,s),m=a.createElement("script"),Le(m),Zt(m,"link",r),a.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(d,m))}}function Wk(r,s){si.M(r,s);var a=fa;if(a&&r){var c=Tt(a).hoistableScripts,d=pa(r),m=c.get(d);m||(m=a.querySelector(Yl(d)),m||(r=y({src:r,async:!0,type:"module"},s),(s=Wn.get(d))&&dg(r,s),m=a.createElement("script"),Le(m),Zt(m,"link",r),a.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(d,m))}}function zx(r,s,a,c){var d=(d=pe.current)?Ld(d):null;if(!d)throw Error(i(446));switch(r){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(s=ha(a.href),a=Tt(d).hoistableStyles,c=a.get(s),c||(c={type:"style",instance:null,count:0,state:null},a.set(s,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){r=ha(a.href);var m=Tt(d).hoistableStyles,S=m.get(r);if(S||(d=d.ownerDocument||d,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(r,S),(m=d.querySelector(Wl(r)))&&!m._p&&(S.instance=m,S.state.loading=5),Wn.has(r)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Wn.set(r,a),m||Yk(d,r,a,S.state))),s&&c===null)throw Error(i(528,""));return S}if(s&&c!==null)throw Error(i(529,""));return null;case"script":return s=a.async,a=a.src,typeof a=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=pa(a),a=Tt(d).hoistableScripts,c=a.get(s),c||(c={type:"script",instance:null,count:0,state:null},a.set(s,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,r))}}function ha(r){return'href="'+zn(r)+'"'}function Wl(r){return'link[rel="stylesheet"]['+r+"]"}function Bx(r){return y({},r,{"data-precedence":r.precedence,precedence:null})}function Yk(r,s,a,c){r.querySelector('link[rel="preload"][as="style"]['+s+"]")?c.loading=1:(s=r.createElement("link"),c.preload=s,s.addEventListener("load",function(){return c.loading|=1}),s.addEventListener("error",function(){return c.loading|=2}),Zt(s,"link",a),Le(s),r.head.appendChild(s))}function pa(r){return'[src="'+zn(r)+'"]'}function Yl(r){return"script[async]"+r}function Hx(r,s,a){if(s.count++,s.instance===null)switch(s.type){case"style":var c=r.querySelector('style[data-href~="'+zn(a.href)+'"]');if(c)return s.instance=c,Le(c),c;var d=y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return c=(r.ownerDocument||r).createElement("style"),Le(c),Zt(c,"style",d),Pd(c,a.precedence,r),s.instance=c;case"stylesheet":d=ha(a.href);var m=r.querySelector(Wl(d));if(m)return s.state.loading|=4,s.instance=m,Le(m),m;c=Bx(a),(d=Wn.get(d))&&ug(c,d),m=(r.ownerDocument||r).createElement("link"),Le(m);var S=m;return S._p=new Promise(function(w,L){S.onload=w,S.onerror=L}),Zt(m,"link",c),s.state.loading|=4,Pd(m,a.precedence,r),s.instance=m;case"script":return m=pa(a.src),(d=r.querySelector(Yl(m)))?(s.instance=d,Le(d),d):(c=a,(d=Wn.get(m))&&(c=y({},a),dg(c,d)),r=r.ownerDocument||r,d=r.createElement("script"),Le(d),Zt(d,"link",c),r.head.appendChild(d),s.instance=d);case"void":return null;default:throw Error(i(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(c=s.instance,s.state.loading|=4,Pd(c,a.precedence,r));return s.instance}function Pd(r,s,a){for(var c=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=c.length?c[c.length-1]:null,m=d,S=0;S<c.length;S++){var w=c[S];if(w.dataset.precedence===s)m=w;else if(m!==d)break}m?m.parentNode.insertBefore(r,m.nextSibling):(s=a.nodeType===9?a.head:a,s.insertBefore(r,s.firstChild))}function ug(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.title==null&&(r.title=s.title)}function dg(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.integrity==null&&(r.integrity=s.integrity)}var jd=null;function Fx(r,s,a){if(jd===null){var c=new Map,d=jd=new Map;d.set(a,c)}else d=jd,c=d.get(a),c||(c=new Map,d.set(a,c));if(c.has(r))return c;for(c.set(r,null),a=a.getElementsByTagName(r),d=0;d<a.length;d++){var m=a[d];if(!(m[_e]||m[ce]||r==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var S=m.getAttribute(s)||"";S=r+S;var w=c.get(S);w?w.push(m):c.set(S,[m])}}return c}function qx(r,s,a){r=r.ownerDocument||r,r.head.insertBefore(a,s==="title"?r.querySelector("head > title"):null)}function Qk(r,s,a){if(a===1||s.itemProp!=null)return!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return r=s.disabled,typeof s.precedence=="string"&&r==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function Vx(r){return!(r.type==="stylesheet"&&(r.state.loading&3)===0)}var Ql=null;function Kk(){}function Xk(r,s,a){if(Ql===null)throw Error(i(475));var c=Ql;if(s.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var d=ha(a.href),m=r.querySelector(Wl(d));if(m){r=m._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(c.count++,c=$d.bind(c),r.then(c,c)),s.state.loading|=4,s.instance=m,Le(m);return}m=r.ownerDocument||r,a=Bx(a),(d=Wn.get(d))&&ug(a,d),m=m.createElement("link"),Le(m);var S=m;S._p=new Promise(function(w,L){S.onload=w,S.onerror=L}),Zt(m,"link",a),s.instance=m}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(s,r),(r=s.state.preload)&&(s.state.loading&3)===0&&(c.count++,s=$d.bind(c),r.addEventListener("load",s),r.addEventListener("error",s))}}function Zk(){if(Ql===null)throw Error(i(475));var r=Ql;return r.stylesheets&&r.count===0&&fg(r,r.stylesheets),0<r.count?function(s){var a=setTimeout(function(){if(r.stylesheets&&fg(r,r.stylesheets),r.unsuspend){var c=r.unsuspend;r.unsuspend=null,c()}},6e4);return r.unsuspend=s,function(){r.unsuspend=null,clearTimeout(a)}}:null}function $d(){if(this.count--,this.count===0){if(this.stylesheets)fg(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}var Ud=null;function fg(r,s){r.stylesheets=null,r.unsuspend!==null&&(r.count++,Ud=new Map,s.forEach(Jk,r),Ud=null,$d.call(r))}function Jk(r,s){if(!(s.state.loading&4)){var a=Ud.get(r);if(a)var c=a.get(null);else{a=new Map,Ud.set(r,a);for(var d=r.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<d.length;m++){var S=d[m];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),c=S)}c&&a.set(null,c)}d=s.instance,S=d.getAttribute("data-precedence"),m=a.get(S)||c,m===c&&a.set(null,d),a.set(S,d),this.count++,c=$d.bind(this),d.addEventListener("load",c),d.addEventListener("error",c),m?m.parentNode.insertBefore(d,m.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(d,r.firstChild)),s.state.loading|=4}}var Kl={$$typeof:R,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function eN(r,s,a,c,d,m,S,w){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Mo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mo(0),this.hiddenUpdates=Mo(null),this.identifierPrefix=c,this.onUncaughtError=d,this.onCaughtError=m,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function Gx(r,s,a,c,d,m,S,w,L,Q,re,oe){return r=new eN(r,s,a,S,w,L,Q,oe),s=1,m===!0&&(s|=24),m=Tn(3,null,null,s),r.current=m,m.stateNode=r,s=Wp(),s.refCount++,r.pooledCache=s,s.refCount++,m.memoizedState={element:c,isDehydrated:a,cache:s},Xp(m),r}function Wx(r){return r?(r=Vo,r):Vo}function Yx(r,s,a,c,d,m){d=Wx(d),c.context===null?c.context=d:c.pendingContext=d,c=ki(s),c.payload={element:a},m=m===void 0?null:m,m!==null&&(c.callback=m),a=Ni(r,c,s),a!==null&&(Dn(a,r,s),Cl(a,r,s))}function Qx(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function hg(r,s){Qx(r,s),(r=r.alternate)&&Qx(r,s)}function Kx(r){if(r.tag===13){var s=qo(r,67108864);s!==null&&Dn(s,r,67108864),hg(r,67108864)}}var zd=!0;function tN(r,s,a,c){var d=j.T;j.T=null;var m=K.p;try{K.p=2,pg(r,s,a,c)}finally{K.p=m,j.T=d}}function nN(r,s,a,c){var d=j.T;j.T=null;var m=K.p;try{K.p=8,pg(r,s,a,c)}finally{K.p=m,j.T=d}}function pg(r,s,a,c){if(zd){var d=mg(c);if(d===null)tg(r,s,c,Bd,a),Zx(r,c);else if(iN(d,r,s,a,c))c.stopPropagation();else if(Zx(r,c),s&4&&-1<rN.indexOf(r)){for(;d!==null;){var m=Ze(d);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var S=Br(m.pendingLanes);if(S!==0){var w=m;for(w.pendingLanes|=2,w.entangledLanes|=2;S;){var L=1<<31-Qt(S);w.entanglements[1]|=L,S&=~L}Ir(m),(rt&6)===0&&(Ed=Yt()+500,Fl(0))}}break;case 13:w=qo(m,2),w!==null&&Dn(w,m,2),Cd(),hg(m,2)}if(m=mg(c),m===null&&tg(r,s,c,Bd,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else tg(r,s,c,null,a)}}function mg(r){return r=bp(r),gg(r)}var Bd=null;function gg(r){if(Bd=null,r=ze(r),r!==null){var s=l(r);if(s===null)r=null;else{var a=s.tag;if(a===13){if(r=u(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null)}}return Bd=r,null}function Xx(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(sl()){case As:return 2;case Oo:return 8;case ko:case zr:return 32;case Ci:return 268435456;default:return 32}default:return 32}}var yg=!1,Gi=null,Wi=null,Yi=null,Xl=new Map,Zl=new Map,Qi=[],rN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Zx(r,s){switch(r){case"focusin":case"focusout":Gi=null;break;case"dragenter":case"dragleave":Wi=null;break;case"mouseover":case"mouseout":Yi=null;break;case"pointerover":case"pointerout":Xl.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zl.delete(s.pointerId)}}function Jl(r,s,a,c,d,m){return r===null||r.nativeEvent!==m?(r={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},s!==null&&(s=Ze(s),s!==null&&Kx(s)),r):(r.eventSystemFlags|=c,s=r.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),r)}function iN(r,s,a,c,d){switch(s){case"focusin":return Gi=Jl(Gi,r,s,a,c,d),!0;case"dragenter":return Wi=Jl(Wi,r,s,a,c,d),!0;case"mouseover":return Yi=Jl(Yi,r,s,a,c,d),!0;case"pointerover":var m=d.pointerId;return Xl.set(m,Jl(Xl.get(m)||null,r,s,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,Zl.set(m,Jl(Zl.get(m)||null,r,s,a,c,d)),!0}return!1}function Jx(r){var s=ze(r.target);if(s!==null){var a=l(s);if(a!==null){if(s=a.tag,s===13){if(s=u(a),s!==null){r.blockedOn=s,W(r.priority,function(){if(a.tag===13){var c=In();c=al(c);var d=qo(a,c);d!==null&&Dn(d,a,c),hg(a,c)}});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Hd(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=mg(r.nativeEvent);if(a===null){a=r.nativeEvent;var c=new a.constructor(a.type,a);_p=c,a.target.dispatchEvent(c),_p=null}else return s=Ze(a),s!==null&&Kx(s),r.blockedOn=a,!1;s.shift()}return!0}function e1(r,s,a){Hd(r)&&a.delete(s)}function sN(){yg=!1,Gi!==null&&Hd(Gi)&&(Gi=null),Wi!==null&&Hd(Wi)&&(Wi=null),Yi!==null&&Hd(Yi)&&(Yi=null),Xl.forEach(e1),Zl.forEach(e1)}function Fd(r,s){r.blockedOn===s&&(r.blockedOn=null,yg||(yg=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,sN)))}var qd=null;function t1(r){qd!==r&&(qd=r,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){qd===r&&(qd=null);for(var s=0;s<r.length;s+=3){var a=r[s],c=r[s+1],d=r[s+2];if(typeof c!="function"){if(gg(c||a)===null)continue;break}var m=Ze(a);m!==null&&(r.splice(s,3),s-=3,gm(m,{pending:!0,data:d,method:a.method,action:c},c,d))}}))}function ec(r){function s(L){return Fd(L,r)}Gi!==null&&Fd(Gi,r),Wi!==null&&Fd(Wi,r),Yi!==null&&Fd(Yi,r),Xl.forEach(s),Zl.forEach(s);for(var a=0;a<Qi.length;a++){var c=Qi[a];c.blockedOn===r&&(c.blockedOn=null)}for(;0<Qi.length&&(a=Qi[0],a.blockedOn===null);)Jx(a),a.blockedOn===null&&Qi.shift();if(a=(r.ownerDocument||r).$$reactFormReplay,a!=null)for(c=0;c<a.length;c+=3){var d=a[c],m=a[c+1],S=d[fe]||null;if(typeof m=="function")S||t1(a);else if(S){var w=null;if(m&&m.hasAttribute("formAction")){if(d=m,S=m[fe]||null)w=S.formAction;else if(gg(d)!==null)continue}else w=S.action;typeof w=="function"?a[c+1]=w:(a.splice(c,3),c-=3),t1(a)}}}function vg(r){this._internalRoot=r}Vd.prototype.render=vg.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(i(409));var a=s.current,c=In();Yx(a,c,r,s,null,null)},Vd.prototype.unmount=vg.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;Yx(r.current,2,null,r,null,null),Cd(),s[ye]=null}};function Vd(r){this._internalRoot=r}Vd.prototype.unstable_scheduleHydration=function(r){if(r){var s=$();r={blockedOn:null,target:r,priority:s};for(var a=0;a<Qi.length&&s!==0&&s<Qi[a].priority;a++);Qi.splice(a,0,r),a===0&&Jx(r)}};var n1=t.version;if(n1!=="19.1.1")throw Error(i(527,n1,"19.1.1"));K.findDOMNode=function(r){var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(i(188)):(r=Object.keys(r).join(","),Error(i(268,r)));return r=p(s),r=r!==null?h(r):null,r=r===null?null:r.stateNode,r};var oN={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:j,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gd.isDisabled&&Gd.supportsFiber)try{pn=Gd.inject(oN),bt=Gd}catch{}}return nc.createRoot=function(r,s){if(!o(r))throw Error(i(299));var a=!1,c="",d=vS,m=_S,S=bS,w=null;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(S=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(w=s.unstable_transitionCallbacks)),s=Gx(r,1,!1,null,null,a,c,d,m,S,w,null),r[ye]=s.current,eg(r),new vg(s)},nc.hydrateRoot=function(r,s,a){if(!o(r))throw Error(i(299));var c=!1,d="",m=vS,S=_S,w=bS,L=null,Q=null;return a!=null&&(a.unstable_strictMode===!0&&(c=!0),a.identifierPrefix!==void 0&&(d=a.identifierPrefix),a.onUncaughtError!==void 0&&(m=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(L=a.unstable_transitionCallbacks),a.formState!==void 0&&(Q=a.formState)),s=Gx(r,1,!0,s,a??null,c,d,m,S,w,L,Q),s.context=Wx(null),a=s.current,c=In(),c=al(c),d=ki(c),d.callback=null,Ni(a,d,c),a=c,s.current.lanes=a,ks(s,a),Ir(s),r[ye]=s.current,eg(r),new Vd(s)},nc.version="19.1.1",nc}var f1;function gN(){if(f1)return Sg.exports;f1=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),Sg.exports=mN(),Sg.exports}var yN=gN(),Tg={exports:{}},Cg={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h1;function vN(){if(h1)return Cg;h1=1;var e=Ah();function t(p,h){return p===h&&(p!==0||1/p===1/h)||p!==p&&h!==h}var n=typeof Object.is=="function"?Object.is:t,i=e.useSyncExternalStore,o=e.useRef,l=e.useEffect,u=e.useMemo,f=e.useDebugValue;return Cg.useSyncExternalStoreWithSelector=function(p,h,y,_,v){var b=o(null);if(b.current===null){var x={hasValue:!1,value:null};b.current=x}else x=b.current;b=u(function(){function C(N){if(!I){if(I=!0,M=N,N=_(N),v!==void 0&&x.hasValue){var A=x.value;if(v(A,N))return R=A}return R=N}if(A=R,n(M,N))return A;var P=_(N);return v!==void 0&&v(A,P)?(M=N,A):(M=N,R=P)}var I=!1,M,R,D=y===void 0?null:y;return[function(){return C(h())},D===null?void 0:function(){return C(D())}]},[h,y,_,v]);var O=i(p,b[0],b[1]);return l(function(){x.hasValue=!0,x.value=O},[O]),f(O),O},Cg}var p1;function _N(){return p1||(p1=1,Tg.exports=vN()),Tg.exports}var bN=_N();function cC(e){e()}function SN(){let e=null,t=null;return{clear(){e=null,t=null},notify(){cC(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let i=e;for(;i;)n.push(i),i=i.next;return n},subscribe(n){let i=!0;const o=t={callback:n,next:null,prev:t};return o.prev?o.prev.next=o:e=o,function(){!i||e===null||(i=!1,o.next?o.next.prev=o.prev:t=o.prev,o.prev?o.prev.next=o.next:e=o.next)}}}}var m1={notify(){},get:()=>[]};function xN(e,t){let n,i=m1,o=0,l=!1;function u(O){y();const C=i.subscribe(O);let I=!1;return()=>{I||(I=!0,C(),_())}}function f(){i.notify()}function p(){x.onStateChange&&x.onStateChange()}function h(){return l}function y(){o++,n||(n=e.subscribe(p),i=SN())}function _(){o--,n&&o===0&&(n(),n=void 0,i.clear(),i=m1)}function v(){l||(l=!0,y())}function b(){l&&(l=!1,_())}const x={addNestedSub:u,notifyNestedSubs:f,handleChangeWrapper:p,isSubscribed:h,trySubscribe:v,tryUnsubscribe:b,getListeners:()=>i};return x}var wN=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",EN=wN(),TN=()=>typeof navigator<"u"&&navigator.product==="ReactNative",CN=TN(),RN=()=>EN||CN?E.useLayoutEffect:E.useEffect,AN=RN();function g1(e,t){return e===t?e!==0||t!==0||1/e===1/t:e!==e&&t!==t}function Cc(e,t){if(g1(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;const n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(let o=0;o<n.length;o++)if(!Object.prototype.hasOwnProperty.call(t,n[o])||!g1(e[n[o]],t[n[o]]))return!1;return!0}var IN=Symbol.for("react-redux-context"),DN=typeof globalThis<"u"?globalThis:{};function ON(){if(!E.createContext)return{};const e=DN[IN]??=new Map;let t=e.get(E.createContext);return t||(t=E.createContext(null),e.set(E.createContext,t)),t}var ps=ON();function kN(e){const{children:t,context:n,serverState:i,store:o}=e,l=E.useMemo(()=>{const p=xN(o);return{store:o,subscription:p,getServerState:i?()=>i:void 0}},[o,i]),u=E.useMemo(()=>o.getState(),[o]);AN(()=>{const{subscription:p}=l;return p.onStateChange=p.notifyNestedSubs,p.trySubscribe(),u!==o.getState()&&p.notifyNestedSubs(),()=>{p.tryUnsubscribe(),p.onStateChange=void 0}},[l,u]);const f=n||ps;return E.createElement(f.Provider,{value:l},t)}var NN=kN;function Mv(e=ps){return function(){return E.useContext(e)}}var uC=Mv();function dC(e=ps){const t=e===ps?uC:Mv(e),n=()=>{const{store:i}=t();return i};return Object.assign(n,{withTypes:()=>n}),n}var fC=dC();function MN(e=ps){const t=e===ps?fC:dC(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var hC=MN(),LN=(e,t)=>e===t;function PN(e=ps){const t=e===ps?uC:Mv(e),n=(i,o={})=>{const{equalityFn:l=LN}=typeof o=="function"?{equalityFn:o}:o,u=t(),{store:f,subscription:p,getServerState:h}=u;E.useRef(!0);const y=E.useCallback({[i.name](v){return i(v)}}[i.name],[i]),_=bN.useSyncExternalStoreWithSelector(p.addNestedSub,f.getState,h||f.getState,y,l);return E.useDebugValue(_),_};return Object.assign(n,{withTypes:()=>n}),n}var pC=PN(),jN=cC;/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var mC=e=>{throw TypeError(e)},$N=(e,t,n)=>t.has(e)||mC("Cannot "+n),Rg=(e,t,n)=>($N(e,t,"read from private field"),n?n.call(e):t.get(e)),UN=(e,t,n)=>t.has(e)?mC("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),y1="popstate";function zN(e={}){function t(o,l){let{pathname:u="/",search:f="",hash:p=""}=xi(o.location.hash.substring(1));return!u.startsWith("/")&&!u.startsWith(".")&&(u="/"+u),zc("",{pathname:u,search:f,hash:p},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(o,l){let u=o.document.querySelector("base"),f="";if(u&&u.getAttribute("href")){let p=o.location.href,h=p.indexOf("#");f=h===-1?p:p.slice(0,h)}return f+"#"+(typeof l=="string"?l:ms(l))}function i(o,l){wt(o.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(l)})`)}return HN(t,n,i,e)}function $e(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function wt(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function BN(){return Math.random().toString(36).substring(2,10)}function v1(e,t){return{usr:e.state,key:e.key,idx:t}}function zc(e,t,n=null,i){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?xi(t):t,state:n,key:t&&t.key||i||BN()}}function ms({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function xi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let i=e.indexOf("?");i>=0&&(t.search=e.substring(i),e=e.substring(0,i)),e&&(t.pathname=e)}return t}function HN(e,t,n,i={}){let{window:o=document.defaultView,v5Compat:l=!1}=i,u=o.history,f="POP",p=null,h=y();h==null&&(h=0,u.replaceState({...u.state,idx:h},""));function y(){return(u.state||{idx:null}).idx}function _(){f="POP";let C=y(),I=C==null?null:C-h;h=C,p&&p({action:f,location:O.location,delta:I})}function v(C,I){f="PUSH";let M=zc(O.location,C,I);n&&n(M,C),h=y()+1;let R=v1(M,h),D=O.createHref(M);try{u.pushState(R,"",D)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;o.location.assign(D)}l&&p&&p({action:f,location:O.location,delta:1})}function b(C,I){f="REPLACE";let M=zc(O.location,C,I);n&&n(M,C),h=y();let R=v1(M,h),D=O.createHref(M);u.replaceState(R,"",D),l&&p&&p({action:f,location:O.location,delta:0})}function x(C){return gC(C)}let O={get action(){return f},get location(){return e(o,u)},listen(C){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(y1,_),p=C,()=>{o.removeEventListener(y1,_),p=null}},createHref(C){return t(o,C)},createURL:x,encodeLocation(C){let I=x(C);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:v,replace:b,go(C){return u.go(C)}};return O}function gC(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),$e(n,"No window.location.(origin|href) available to create URL");let i=typeof e=="string"?e:ms(e);return i=i.replace(/ $/,"%20"),!t&&i.startsWith("//")&&(i=n+i),new URL(i,n)}var bc,_1=class{constructor(e){if(UN(this,bc,new Map),e)for(let[t,n]of e)this.set(t,n)}get(e){if(Rg(this,bc).has(e))return Rg(this,bc).get(e);if(e.defaultValue!==void 0)return e.defaultValue;throw new Error("No value found for context")}set(e,t){Rg(this,bc).set(e,t)}};bc=new WeakMap;var FN=new Set(["lazy","caseSensitive","path","id","index","children"]);function qN(e){return FN.has(e)}var VN=new Set(["lazy","caseSensitive","path","id","index","middleware","children"]);function GN(e){return VN.has(e)}function WN(e){return e.index===!0}function Bc(e,t,n=[],i={},o=!1){return e.map((l,u)=>{let f=[...n,String(u)],p=typeof l.id=="string"?l.id:f.join("-");if($e(l.index!==!0||!l.children,"Cannot specify children on an index route"),$e(o||!i[p],`Found a route id collision on id "${p}".  Route id's must be globally unique within Data Router usages`),WN(l)){let h={...l,...t(l),id:p};return i[p]=h,h}else{let h={...l,...t(l),id:p,children:void 0};return i[p]=h,l.children&&(h.children=Bc(l.children,t,f,i,o)),h}})}function ns(e,t,n="/"){return yf(e,t,n,!1)}function yf(e,t,n,i){let o=typeof t=="string"?xi(t):t,l=er(o.pathname||"/",n);if(l==null)return null;let u=yC(e);QN(u);let f=null;for(let p=0;f==null&&p<u.length;++p){let h=oM(l);f=iM(u[p],h,i)}return f}function YN(e,t){let{route:n,pathname:i,params:o}=e;return{id:n.id,pathname:i,params:o,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function yC(e,t=[],n=[],i="",o=!1){let l=(u,f,p=o,h)=>{let y={relativePath:h===void 0?u.path||"":h,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(i)&&p)return;$e(y.relativePath.startsWith(i),`Absolute route path "${y.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(i.length)}let _=Or([i,y.relativePath]),v=n.concat(y);u.children&&u.children.length>0&&($e(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),yC(u.children,t,v,_,p)),!(u.path==null&&!u.index)&&t.push({path:_,score:nM(_,u.index),routesMeta:v})};return e.forEach((u,f)=>{if(u.path===""||!u.path?.includes("?"))l(u,f);else for(let p of vC(u.path))l(u,f,!0,p)}),t}function vC(e){let t=e.split("/");if(t.length===0)return[];let[n,...i]=t,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let u=vC(i.join("/")),f=[];return f.push(...u.map(p=>p===""?l:[l,p].join("/"))),o&&f.push(...u),f.map(p=>e.startsWith("/")&&p===""?"/":p)}function QN(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:rM(t.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var KN=/^:[\w-]+$/,XN=3,ZN=2,JN=1,eM=10,tM=-2,b1=e=>e==="*";function nM(e,t){let n=e.split("/"),i=n.length;return n.some(b1)&&(i+=tM),t&&(i+=ZN),n.filter(o=>!b1(o)).reduce((o,l)=>o+(KN.test(l)?XN:l===""?JN:eM),i)}function rM(e,t){return e.length===t.length&&e.slice(0,-1).every((i,o)=>i===t[o])?e[e.length-1]-t[t.length-1]:0}function iM(e,t,n=!1){let{routesMeta:i}=e,o={},l="/",u=[];for(let f=0;f<i.length;++f){let p=i[f],h=f===i.length-1,y=l==="/"?t:t.slice(l.length)||"/",_=Lf({path:p.relativePath,caseSensitive:p.caseSensitive,end:h},y),v=p.route;if(!_&&h&&n&&!i[i.length-1].route.index&&(_=Lf({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},y)),!_)return null;Object.assign(o,_.params),u.push({params:o,pathname:Or([l,_.pathname]),pathnameBase:uM(Or([l,_.pathnameBase])),route:v}),_.pathnameBase!=="/"&&(l=Or([l,_.pathnameBase]))}return u}function Lf(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,i]=sM(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let l=o[0],u=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:i.reduce((h,{paramName:y,isOptional:_},v)=>{if(y==="*"){let x=f[v]||"";u=l.slice(0,l.length-x.length).replace(/(.)\/+$/,"$1")}const b=f[v];return _&&!b?h[y]=void 0:h[y]=(b||"").replace(/%2F/g,"/"),h},{}),pathname:l,pathnameBase:u,pattern:e}}function sM(e,t=!1,n=!0){wt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let i=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,f,p)=>(i.push({paramName:f,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(i.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),i]}function oM(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return wt(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function er(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,i=e.charAt(n);return i&&i!=="/"?null:e.slice(n)||"/"}function aM({basename:e,pathname:t}){return t==="/"?e:Or([e,t])}function lM(e,t="/"){let{pathname:n,search:i="",hash:o=""}=typeof e=="string"?xi(e):e;return{pathname:n?n.startsWith("/")?n:cM(n,t):t,search:dM(i),hash:fM(o)}}function cM(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Ag(e,t,n,i){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function _C(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ih(e){let t=_C(e);return t.map((n,i)=>i===t.length-1?n.pathname:n.pathnameBase)}function Dh(e,t,n,i=!1){let o;typeof e=="string"?o=xi(e):(o={...e},$e(!o.pathname||!o.pathname.includes("?"),Ag("?","pathname","search",o)),$e(!o.pathname||!o.pathname.includes("#"),Ag("#","pathname","hash",o)),$e(!o.search||!o.search.includes("#"),Ag("#","search","hash",o)));let l=e===""||o.pathname==="",u=l?"/":o.pathname,f;if(u==null)f=n;else{let _=t.length-1;if(!i&&u.startsWith("..")){let v=u.split("/");for(;v[0]==="..";)v.shift(),_-=1;o.pathname=v.join("/")}f=_>=0?t[_]:"/"}let p=lM(o,f),h=u&&u!=="/"&&u.endsWith("/"),y=(l||u===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(h||y)&&(p.pathname+="/"),p}var Or=e=>e.join("/").replace(/\/\/+/g,"/"),uM=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),dM=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,fM=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Pf=class{constructor(e,t,n,i=!1){this.status=e,this.statusText=t||"",this.internal=i,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Hc(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var bC=["POST","PUT","PATCH","DELETE"],hM=new Set(bC),pM=["GET",...bC],mM=new Set(pM),gM=new Set([301,302,303,307,308]),yM=new Set([307,308]),Ig={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},vM={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},rc={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},_M=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Lv=e=>_M.test(e),bM=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),SC="remix-router-transitions",xC=Symbol("ResetLoaderData");function SM(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u";$e(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let i=e.hydrationRouteProperties||[],o=e.mapRouteProperties||bM,l={},u=Bc(e.routes,o,void 0,l),f,p=e.basename||"/";p.startsWith("/")||(p=`/${p}`);let h=e.dataStrategy||CM,y={...e.future},_=null,v=new Set,b=null,x=null,O=null,C=e.hydrationData!=null,I=ns(u,e.history.location,p),M=!1,R=null,D;if(I==null&&!e.patchRoutesOnNavigation){let $=Kn(404,{pathname:e.history.location.pathname}),{matches:W,route:ee}=Wd(u);D=!0,I=W,R={[ee.id]:$}}else if(I&&!e.hydrationData&&Ns(I,u,e.history.location.pathname).active&&(I=null),I)if(I.some($=>$.route.lazy))D=!1;else if(!I.some($=>$.route.loader))D=!0;else{let $=e.hydrationData?e.hydrationData.loaderData:null,W=e.hydrationData?e.hydrationData.errors:null;if(W){let ee=I.findIndex(ce=>W[ce.route.id]!==void 0);D=I.slice(0,ee+1).every(ce=>!ky(ce.route,$,W))}else D=I.every(ee=>!ky(ee.route,$,W))}else{D=!1,I=[];let $=Ns(null,u,e.history.location.pathname);$.active&&$.matches&&(M=!0,I=$.matches)}let N,A={historyAction:e.history.action,location:e.history.location,matches:I,initialized:D,navigation:Ig,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||R,fetchers:new Map,blockers:new Map},P="POP",U=!1,F,H=!1,z=new Map,G=null,V=!1,te=!1,ue=new Set,j=new Map,K=0,ne=-1,ae=new Map,k=new Set,X=new Map,le=new Map,ie=new Set,de=new Map,me,pe=null;function Ie(){if(_=e.history.listen(({action:$,location:W,delta:ee})=>{if(me){me(),me=void 0;return}wt(de.size===0||ee!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ce=Mu({currentLocation:A.location,nextLocation:W,historyAction:$});if(ce&&ee!=null){let fe=new Promise(ye=>{me=ye});e.history.go(ee*-1),wr(ce,{state:"blocked",location:W,proceed(){wr(ce,{state:"proceeding",proceed:void 0,reset:void 0,location:W}),fe.then(()=>e.history.go(ee))},reset(){let ye=new Map(A.blockers);ye.set(ce,rc),Ue({blockers:ye})}});return}return Et($,W)}),n){BM(t,z);let $=()=>HM(t,z);t.addEventListener("pagehide",$),G=()=>t.removeEventListener("pagehide",$)}return A.initialized||Et("POP",A.location,{initialHydration:!0}),N}function be(){_&&_(),G&&G(),v.clear(),F&&F.abort(),A.fetchers.forEach(($,W)=>Qt(W)),A.blockers.forEach(($,W)=>Os(W))}function Oe($){return v.add($),()=>v.delete($)}function Ue($,W={}){$.matches&&($.matches=$.matches.map(fe=>{let ye=l[fe.route.id],xe=fe.route;return xe.element!==ye.element||xe.errorElement!==ye.errorElement||xe.hydrateFallbackElement!==ye.hydrateFallbackElement?{...fe,route:ye}:fe})),A={...A,...$};let ee=[],ce=[];A.fetchers.forEach((fe,ye)=>{fe.state==="idle"&&(ie.has(ye)?ee.push(ye):ce.push(ye))}),ie.forEach(fe=>{!A.fetchers.has(fe)&&!j.has(fe)&&ee.push(fe)}),[...v].forEach(fe=>fe(A,{deletedFetchers:ee,viewTransitionOpts:W.viewTransitionOpts,flushSync:W.flushSync===!0})),ee.forEach(fe=>Qt(fe)),ce.forEach(fe=>A.fetchers.delete(fe))}function _t($,W,{flushSync:ee}={}){let ce=A.actionData!=null&&A.navigation.formMethod!=null&&bn(A.navigation.formMethod)&&A.navigation.state==="loading"&&$.state?._isRedirect!==!0,fe;W.actionData?Object.keys(W.actionData).length>0?fe=W.actionData:fe=null:ce?fe=A.actionData:fe=null;let ye=W.loaderData?D1(A.loaderData,W.loaderData,W.matches||[],W.errors):A.loaderData,xe=A.blockers;xe.size>0&&(xe=new Map(xe),xe.forEach((_e,Se)=>xe.set(Se,rc)));let ve=V?!1:Pu($,W.matches||A.matches),Ee=U===!0||A.navigation.formMethod!=null&&bn(A.navigation.formMethod)&&$.state?._isRedirect!==!0;f&&(u=f,f=void 0),V||P==="POP"||(P==="PUSH"?e.history.push($,$.state):P==="REPLACE"&&e.history.replace($,$.state));let Re;if(P==="POP"){let _e=z.get(A.location.pathname);_e&&_e.has($.pathname)?Re={currentLocation:A.location,nextLocation:$}:z.has($.pathname)&&(Re={currentLocation:$,nextLocation:A.location})}else if(H){let _e=z.get(A.location.pathname);_e?_e.add($.pathname):(_e=new Set([$.pathname]),z.set(A.location.pathname,_e)),Re={currentLocation:A.location,nextLocation:$}}Ue({...W,actionData:fe,loaderData:ye,historyAction:P,location:$,initialized:!0,navigation:Ig,revalidation:"idle",restoreScrollPosition:ve,preventScrollReset:Ee,blockers:xe},{viewTransitionOpts:Re,flushSync:ee===!0}),P="POP",U=!1,H=!1,V=!1,te=!1,pe?.resolve(),pe=null}async function gt($,W){if(typeof $=="number"){e.history.go($);return}let ee=Oy(A.location,A.matches,p,$,W?.fromRouteId,W?.relative),{path:ce,submission:fe,error:ye}=S1(!1,ee,W),xe=A.location,ve=zc(A.location,ce,W&&W.state);ve={...ve,...e.history.encodeLocation(ve)};let Ee=W&&W.replace!=null?W.replace:void 0,Re="PUSH";Ee===!0?Re="REPLACE":Ee===!1||fe!=null&&bn(fe.formMethod)&&fe.formAction===A.location.pathname+A.location.search&&(Re="REPLACE");let _e=W&&"preventScrollReset"in W?W.preventScrollReset===!0:void 0,Se=(W&&W.flushSync)===!0,ze=Mu({currentLocation:xe,nextLocation:ve,historyAction:Re});if(ze){wr(ze,{state:"blocked",location:ve,proceed(){wr(ze,{state:"proceeding",proceed:void 0,reset:void 0,location:ve}),gt($,W)},reset(){let Ze=new Map(A.blockers);Ze.set(ze,rc),Ue({blockers:Ze})}});return}await Et(Re,ve,{submission:fe,pendingError:ye,preventScrollReset:_e,replace:W&&W.replace,enableViewTransition:W&&W.viewTransition,flushSync:Se})}function Pn(){pe||(pe=FM()),ol(),Ue({revalidation:"loading"});let $=pe.promise;return A.navigation.state==="submitting"?$:A.navigation.state==="idle"?(Et(A.historyAction,A.location,{startUninterruptedRevalidation:!0}),$):(Et(P||A.historyAction,A.navigation.location,{overrideNavigation:A.navigation,enableViewTransition:H===!0}),$)}async function Et($,W,ee){F&&F.abort(),F=null,P=$,V=(ee&&ee.startUninterruptedRevalidation)===!0,ks(A.location,A.matches),U=(ee&&ee.preventScrollReset)===!0,H=(ee&&ee.enableViewTransition)===!0;let ce=f||u,fe=ee&&ee.overrideNavigation,ye=ee?.initialHydration&&A.matches&&A.matches.length>0&&!M?A.matches:ns(ce,W,p),xe=(ee&&ee.flushSync)===!0;if(ye&&A.initialized&&!te&&MM(A.location,W)&&!(ee&&ee.submission&&bn(ee.submission.formMethod))){_t(W,{matches:ye},{flushSync:xe});return}let ve=Ns(ye,ce,W.pathname);if(ve.active&&ve.matches&&(ye=ve.matches),!ye){let{error:Tt,notFoundMatches:Le,route:st}=No(W.pathname);_t(W,{matches:Le,loaderData:{},errors:{[st.id]:Tt}},{flushSync:xe});return}F=new AbortController;let Ee=ba(e.history,W,F.signal,ee&&ee.submission),Re=e.getContext?await e.getContext():new _1,_e;if(ee&&ee.pendingError)_e=[rs(ye).route.id,{type:"error",error:ee.pendingError}];else if(ee&&ee.submission&&bn(ee.submission.formMethod)){let Tt=await jn(Ee,W,ee.submission,ye,Re,ve.active,ee&&ee.initialHydration===!0,{replace:ee.replace,flushSync:xe});if(Tt.shortCircuited)return;if(Tt.pendingActionResult){let[Le,st]=Tt.pendingActionResult;if(kn(st)&&Hc(st.error)&&st.error.status===404){F=null,_t(W,{matches:Tt.matches,loaderData:{},errors:{[Le]:st.error}});return}}ye=Tt.matches||ye,_e=Tt.pendingActionResult,fe=Dg(W,ee.submission),xe=!1,ve.active=!1,Ee=ba(e.history,Ee.url,Ee.signal)}let{shortCircuited:Se,matches:ze,loaderData:Ze,errors:yt}=await Ur(Ee,W,ye,Re,ve.active,fe,ee&&ee.submission,ee&&ee.fetcherSubmission,ee&&ee.replace,ee&&ee.initialHydration===!0,xe,_e);Se||(F=null,_t(W,{matches:ze||ye,...O1(_e),loaderData:Ze,errors:yt}))}async function jn($,W,ee,ce,fe,ye,xe,ve={}){ol();let Ee=UM(W,ee);if(Ue({navigation:Ee},{flushSync:ve.flushSync===!0}),ye){let Se=await Ms(ce,W.pathname,$.signal);if(Se.type==="aborted")return{shortCircuited:!0};if(Se.type==="error"){if(Se.partialMatches.length===0){let{matches:Ze,route:yt}=Wd(u);return{matches:Ze,pendingActionResult:[yt.id,{type:"error",error:Se.error}]}}let ze=rs(Se.partialMatches).route.id;return{matches:Se.partialMatches,pendingActionResult:[ze,{type:"error",error:Se.error}]}}else if(Se.matches)ce=Se.matches;else{let{notFoundMatches:ze,error:Ze,route:yt}=No(W.pathname);return{matches:ze,pendingActionResult:[yt.id,{type:"error",error:Ze}]}}}let Re,_e=vf(ce,W);if(!_e.route.action&&!_e.route.lazy)Re={type:"error",error:Kn(405,{method:$.method,pathname:W.pathname,routeId:_e.route.id})};else{let Se=Ea(o,l,$,ce,_e,xe?[]:i,fe),ze=await Ci($,Se,fe,null);if(Re=ze[_e.route.id],!Re){for(let Ze of ce)if(ze[Ze.route.id]){Re=ze[Ze.route.id];break}}if($.signal.aborted)return{shortCircuited:!0}}if(oo(Re)){let Se;return ve&&ve.replace!=null?Se=ve.replace:Se=R1(Re.response.headers.get("Location"),new URL($.url),p)===A.location.pathname+A.location.search,await zr($,Re,!0,{submission:ee,replace:Se}),{shortCircuited:!0}}if(kn(Re)){let Se=rs(ce,_e.route.id);return(ve&&ve.replace)!==!0&&(P="PUSH"),{matches:ce,pendingActionResult:[Se.route.id,Re,_e.route.id]}}return{matches:ce,pendingActionResult:[_e.route.id,Re]}}async function Ur($,W,ee,ce,fe,ye,xe,ve,Ee,Re,_e,Se){let ze=ye||Dg(W,xe),Ze=xe||ve||N1(ze),yt=!V&&!Re;if(fe){if(yt){let kt=Yt(Se);Ue({navigation:ze,...kt!==void 0?{actionData:kt}:{}},{flushSync:_e})}let Pe=await Ms(ee,W.pathname,$.signal);if(Pe.type==="aborted")return{shortCircuited:!0};if(Pe.type==="error"){if(Pe.partialMatches.length===0){let{matches:Vr,route:mn}=Wd(u);return{matches:Vr,loaderData:{},errors:{[mn.id]:Pe.error}}}let kt=rs(Pe.partialMatches).route.id;return{matches:Pe.partialMatches,loaderData:{},errors:{[kt]:Pe.error}}}else if(Pe.matches)ee=Pe.matches;else{let{error:kt,notFoundMatches:Vr,route:mn}=No(W.pathname);return{matches:Vr,loaderData:{},errors:{[mn.id]:kt}}}}let Tt=f||u,{dsMatches:Le,revalidatingFetchers:st}=x1($,ce,o,l,e.history,A,ee,Ze,W,Re?[]:i,Re===!0,te,ue,ie,X,k,Tt,p,e.patchRoutesOnNavigation!=null,Se);if(ne=++K,!e.dataStrategy&&!Le.some(Pe=>Pe.shouldLoad)&&!Le.some(Pe=>Pe.route.middleware)&&st.length===0){let Pe=Is();return _t(W,{matches:ee,loaderData:{},errors:Se&&kn(Se[1])?{[Se[0]]:Se[1].error}:null,...O1(Se),...Pe?{fetchers:new Map(A.fetchers)}:{}},{flushSync:_e}),{shortCircuited:!0}}if(yt){let Pe={};if(!fe){Pe.navigation=ze;let kt=Yt(Se);kt!==void 0&&(Pe.actionData=kt)}st.length>0&&(Pe.fetchers=sl(st)),Ue(Pe,{flushSync:_e})}st.forEach(Pe=>{xr(Pe.key),Pe.controller&&j.set(Pe.key,Pe.controller)});let Er=()=>st.forEach(Pe=>xr(Pe.key));F&&F.signal.addEventListener("abort",Er);let{loaderResults:wn,fetcherResults:cn}=await ku(Le,st,$,ce);if($.signal.aborted)return{shortCircuited:!0};F&&F.signal.removeEventListener("abort",Er),st.forEach(Pe=>j.delete(Pe.key));let $n=Yd(wn);if($n)return await zr($,$n.result,!0,{replace:Ee}),{shortCircuited:!0};if($n=Yd(cn),$n)return k.add($n.key),await zr($,$n.result,!0,{replace:Ee}),{shortCircuited:!0};let{loaderData:Lo,errors:Ri}=I1(A,ee,wn,Se,st,cn);Re&&A.errors&&(Ri={...A.errors,...Ri});let Hr=Is(),Fr=Ds(ne),qr=Hr||Fr||st.length>0;return{matches:ee,loaderData:Lo,errors:Ri,...qr?{fetchers:new Map(A.fetchers)}:{}}}function Yt($){if($&&!kn($[1]))return{[$[0]]:$[1].data};if(A.actionData)return Object.keys(A.actionData).length===0?null:A.actionData}function sl($){return $.forEach(W=>{let ee=A.fetchers.get(W.key),ce=ic(void 0,ee?ee.data:void 0);A.fetchers.set(W.key,ce)}),new Map(A.fetchers)}async function As($,W,ee,ce){xr($);let fe=(ce&&ce.flushSync)===!0,ye=f||u,xe=Oy(A.location,A.matches,p,ee,W,ce?.relative),ve=ns(ye,xe,p),Ee=Ns(ve,ye,xe);if(Ee.active&&Ee.matches&&(ve=Ee.matches),!ve){bt($,W,Kn(404,{pathname:xe}),{flushSync:fe});return}let{path:Re,submission:_e,error:Se}=S1(!0,xe,ce);if(Se){bt($,W,Se,{flushSync:fe});return}let ze=e.getContext?await e.getContext():new _1,Ze=(ce&&ce.preventScrollReset)===!0;if(_e&&bn(_e.formMethod)){await Oo($,W,Re,ve,ze,Ee.active,fe,Ze,_e);return}X.set($,{routeId:W,path:Re}),await ko($,W,Re,ve,ze,Ee.active,fe,Ze,_e)}async function Oo($,W,ee,ce,fe,ye,xe,ve,Ee){ol(),X.delete($);let Re=A.fetchers.get($);pn($,zM(Ee,Re),{flushSync:xe});let _e=new AbortController,Se=ba(e.history,ee,_e.signal,Ee);if(ye){let St=await Ms(ce,new URL(Se.url).pathname,Se.signal,$);if(St.type==="aborted")return;if(St.type==="error"){bt($,W,St.error,{flushSync:xe});return}else if(St.matches)ce=St.matches;else{bt($,W,Kn(404,{pathname:ee}),{flushSync:xe});return}}let ze=vf(ce,ee);if(!ze.route.action&&!ze.route.lazy){let St=Kn(405,{method:Ee.formMethod,pathname:ee,routeId:W});bt($,W,St,{flushSync:xe});return}j.set($,_e);let Ze=K,yt=Ea(o,l,Se,ce,ze,i,fe),Le=(await Ci(Se,yt,fe,$))[ze.route.id];if(Se.signal.aborted){j.get($)===_e&&j.delete($);return}if(ie.has($)){if(oo(Le)||kn(Le)){pn($,es(void 0));return}}else{if(oo(Le))if(j.delete($),ne>Ze){pn($,es(void 0));return}else return k.add($),pn($,ic(Ee)),zr(Se,Le,!1,{fetcherSubmission:Ee,preventScrollReset:ve});if(kn(Le)){bt($,W,Le.error);return}}let st=A.navigation.location||A.location,Er=ba(e.history,st,_e.signal),wn=f||u,cn=A.navigation.state!=="idle"?ns(wn,A.navigation.location,p):A.matches;$e(cn,"Didn't find any matches after fetcher action");let $n=++K;ae.set($,$n);let Lo=ic(Ee,Le.data);A.fetchers.set($,Lo);let{dsMatches:Ri,revalidatingFetchers:Hr}=x1(Er,fe,o,l,e.history,A,cn,Ee,st,i,!1,te,ue,ie,X,k,wn,p,e.patchRoutesOnNavigation!=null,[ze.route.id,Le]);Hr.filter(St=>St.key!==$).forEach(St=>{let Ai=St.key,ju=A.fetchers.get(Ai),$u=ic(void 0,ju?ju.data:void 0);A.fetchers.set(Ai,$u),xr(Ai),St.controller&&j.set(Ai,St.controller)}),Ue({fetchers:new Map(A.fetchers)});let Fr=()=>Hr.forEach(St=>xr(St.key));_e.signal.addEventListener("abort",Fr);let{loaderResults:qr,fetcherResults:Pe}=await ku(Ri,Hr,Er,fe);if(_e.signal.aborted)return;if(_e.signal.removeEventListener("abort",Fr),ae.delete($),j.delete($),Hr.forEach(St=>j.delete(St.key)),A.fetchers.has($)){let St=es(Le.data);A.fetchers.set($,St)}let kt=Yd(qr);if(kt)return zr(Er,kt.result,!1,{preventScrollReset:ve});if(kt=Yd(Pe),kt)return k.add(kt.key),zr(Er,kt.result,!1,{preventScrollReset:ve});let{loaderData:Vr,errors:mn}=I1(A,cn,qr,void 0,Hr,Pe);Ds($n),A.navigation.state==="loading"&&$n>ne?($e(P,"Expected pending action"),F&&F.abort(),_t(A.navigation.location,{matches:cn,loaderData:Vr,errors:mn,fetchers:new Map(A.fetchers)})):(Ue({errors:mn,loaderData:D1(A.loaderData,Vr,cn,mn),fetchers:new Map(A.fetchers)}),te=!1)}async function ko($,W,ee,ce,fe,ye,xe,ve,Ee){let Re=A.fetchers.get($);pn($,ic(Ee,Re?Re.data:void 0),{flushSync:xe});let _e=new AbortController,Se=ba(e.history,ee,_e.signal);if(ye){let st=await Ms(ce,new URL(Se.url).pathname,Se.signal,$);if(st.type==="aborted")return;if(st.type==="error"){bt($,W,st.error,{flushSync:xe});return}else if(st.matches)ce=st.matches;else{bt($,W,Kn(404,{pathname:ee}),{flushSync:xe});return}}let ze=vf(ce,ee);j.set($,_e);let Ze=K,yt=Ea(o,l,Se,ce,ze,i,fe),Le=(await Ci(Se,yt,fe,$))[ze.route.id];if(j.get($)===_e&&j.delete($),!Se.signal.aborted){if(ie.has($)){pn($,es(void 0));return}if(oo(Le))if(ne>Ze){pn($,es(void 0));return}else{k.add($),await zr(Se,Le,!1,{preventScrollReset:ve});return}if(kn(Le)){bt($,W,Le.error);return}pn($,es(Le.data))}}async function zr($,W,ee,{submission:ce,fetcherSubmission:fe,preventScrollReset:ye,replace:xe}={}){W.response.headers.has("X-Remix-Revalidate")&&(te=!0);let ve=W.response.headers.get("Location");$e(ve,"Expected a Location header on the redirect Response"),ve=R1(ve,new URL($.url),p);let Ee=zc(A.location,ve,{_isRedirect:!0});if(n){let yt=!1;if(W.response.headers.has("X-Remix-Reload-Document"))yt=!0;else if(Lv(ve)){const Tt=gC(ve,!0);yt=Tt.origin!==t.location.origin||er(Tt.pathname,p)==null}if(yt){xe?t.location.replace(ve):t.location.assign(ve);return}}F=null;let Re=xe===!0||W.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:_e,formAction:Se,formEncType:ze}=A.navigation;!ce&&!fe&&_e&&Se&&ze&&(ce=N1(A.navigation));let Ze=ce||fe;if(yM.has(W.response.status)&&Ze&&bn(Ze.formMethod))await Et(Re,Ee,{submission:{...Ze,formAction:ve},preventScrollReset:ye||U,enableViewTransition:ee?H:void 0});else{let yt=Dg(Ee,ce);await Et(Re,Ee,{overrideNavigation:yt,fetcherSubmission:fe,preventScrollReset:ye||U,enableViewTransition:ee?H:void 0})}}async function Ci($,W,ee,ce){let fe,ye={};try{fe=await AM(h,$,W,ce,ee,!1)}catch(xe){return W.filter(ve=>ve.shouldLoad).forEach(ve=>{ye[ve.route.id]={type:"error",error:xe}}),ye}if($.signal.aborted)return ye;for(let[xe,ve]of Object.entries(fe))if(jM(ve)){let Ee=ve.result;ye[xe]={type:"redirect",response:kM(Ee,$,xe,W,p)}}else ye[xe]=await OM(ve);return ye}async function ku($,W,ee,ce){let fe=Ci(ee,$,ce,null),ye=Promise.all(W.map(async Ee=>{if(Ee.matches&&Ee.match&&Ee.request&&Ee.controller){let _e=(await Ci(Ee.request,Ee.matches,ce,Ee.key))[Ee.match.route.id];return{[Ee.key]:_e}}else return Promise.resolve({[Ee.key]:{type:"error",error:Kn(404,{pathname:Ee.path})}})})),xe=await fe,ve=(await ye).reduce((Ee,Re)=>Object.assign(Ee,Re),{});return{loaderResults:xe,fetcherResults:ve}}function ol(){te=!0,X.forEach(($,W)=>{j.has(W)&&ue.add(W),xr(W)})}function pn($,W,ee={}){A.fetchers.set($,W),Ue({fetchers:new Map(A.fetchers)},{flushSync:(ee&&ee.flushSync)===!0})}function bt($,W,ee,ce={}){let fe=rs(A.matches,W);Qt($),Ue({errors:{[fe.route.id]:ee},fetchers:new Map(A.fetchers)},{flushSync:(ce&&ce.flushSync)===!0})}function sr($){return le.set($,(le.get($)||0)+1),ie.has($)&&ie.delete($),A.fetchers.get($)||vM}function Qt($){let W=A.fetchers.get($);j.has($)&&!(W&&W.state==="loading"&&ae.has($))&&xr($),X.delete($),ae.delete($),k.delete($),ie.delete($),ue.delete($),A.fetchers.delete($)}function mp($){let W=(le.get($)||0)-1;W<=0?(le.delete($),ie.add($)):le.set($,W),Ue({fetchers:new Map(A.fetchers)})}function xr($){let W=j.get($);W&&(W.abort(),j.delete($))}function Nu($){for(let W of $){let ee=sr(W),ce=es(ee.data);A.fetchers.set(W,ce)}}function Is(){let $=[],W=!1;for(let ee of k){let ce=A.fetchers.get(ee);$e(ce,`Expected fetcher: ${ee}`),ce.state==="loading"&&(k.delete(ee),$.push(ee),W=!0)}return Nu($),W}function Ds($){let W=[];for(let[ee,ce]of ae)if(ce<$){let fe=A.fetchers.get(ee);$e(fe,`Expected fetcher: ${ee}`),fe.state==="loading"&&(xr(ee),ae.delete(ee),W.push(ee))}return Nu(W),W.length>0}function Br($,W){let ee=A.blockers.get($)||rc;return de.get($)!==W&&de.set($,W),ee}function Os($){A.blockers.delete($),de.delete($)}function wr($,W){let ee=A.blockers.get($)||rc;$e(ee.state==="unblocked"&&W.state==="blocked"||ee.state==="blocked"&&W.state==="blocked"||ee.state==="blocked"&&W.state==="proceeding"||ee.state==="blocked"&&W.state==="unblocked"||ee.state==="proceeding"&&W.state==="unblocked",`Invalid blocker state transition: ${ee.state} -> ${W.state}`);let ce=new Map(A.blockers);ce.set($,W),Ue({blockers:ce})}function Mu({currentLocation:$,nextLocation:W,historyAction:ee}){if(de.size===0)return;de.size>1&&wt(!1,"A router only supports one blocker at a time");let ce=Array.from(de.entries()),[fe,ye]=ce[ce.length-1],xe=A.blockers.get(fe);if(!(xe&&xe.state==="proceeding")&&ye({currentLocation:$,nextLocation:W,historyAction:ee}))return fe}function No($){let W=Kn(404,{pathname:$}),ee=f||u,{matches:ce,route:fe}=Wd(ee);return{notFoundMatches:ce,route:fe,error:W}}function Lu($,W,ee){if(b=$,O=W,x=ee||null,!C&&A.navigation===Ig){C=!0;let ce=Pu(A.location,A.matches);ce!=null&&Ue({restoreScrollPosition:ce})}return()=>{b=null,O=null,x=null}}function Mo($,W){return x&&x($,W.map(ce=>YN(ce,A.loaderData)))||$.key}function ks($,W){if(b&&O){let ee=Mo($,W);b[ee]=O()}}function Pu($,W){if(b){let ee=Mo($,W),ce=b[ee];if(typeof ce=="number")return ce}return null}function Ns($,W,ee){if(e.patchRoutesOnNavigation)if($){if(Object.keys($[0].params).length>0)return{active:!0,matches:yf(W,ee,p,!0)}}else return{active:!0,matches:yf(W,ee,p,!0)||[]};return{active:!1,matches:null}}async function Ms($,W,ee,ce){if(!e.patchRoutesOnNavigation)return{type:"success",matches:$};let fe=$;for(;;){let ye=f==null,xe=f||u,ve=l;try{await e.patchRoutesOnNavigation({signal:ee,path:W,matches:fe,fetcherKey:ce,patch:(_e,Se)=>{ee.aborted||w1(_e,Se,xe,ve,o,!1)}})}catch(_e){return{type:"error",error:_e,partialMatches:fe}}finally{ye&&!ee.aborted&&(u=[...u])}if(ee.aborted)return{type:"aborted"};let Ee=ns(xe,W,p);if(Ee)return{type:"success",matches:Ee};let Re=yf(xe,W,p,!0);if(!Re||fe.length===Re.length&&fe.every((_e,Se)=>_e.route.id===Re[Se].route.id))return{type:"success",matches:null};fe=Re}}function al($){l={},f=Bc($,o,void 0,l)}function ll($,W,ee=!1){let ce=f==null;w1($,W,f||u,l,o,ee),ce&&(u=[...u],Ue({}))}return N={get basename(){return p},get future(){return y},get state(){return A},get routes(){return u},get window(){return t},initialize:Ie,subscribe:Oe,enableScrollRestoration:Lu,navigate:gt,fetch:As,revalidate:Pn,createHref:$=>e.history.createHref($),encodeLocation:$=>e.history.encodeLocation($),getFetcher:sr,deleteFetcher:mp,dispose:be,getBlocker:Br,deleteBlocker:Os,patchRoutes:ll,_internalFetchControllers:j,_internalSetRoutes:al,_internalSetStateDoNotUseOrYouWillBreakYourApp($){Ue($)}},N}function xM(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Oy(e,t,n,i,o,l){let u,f;if(o){u=[];for(let h of t)if(u.push(h),h.route.id===o){f=h;break}}else u=t,f=t[t.length-1];let p=Dh(i||".",Ih(u),er(e.pathname,n)||e.pathname,l==="path");if(i==null&&(p.search=e.search,p.hash=e.hash),(i==null||i===""||i===".")&&f){let h=Pv(p.search);if(f.route.index&&!h)p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index";else if(!f.route.index&&h){let y=new URLSearchParams(p.search),_=y.getAll("index");y.delete("index"),_.filter(b=>b).forEach(b=>y.append("index",b));let v=y.toString();p.search=v?`?${v}`:""}}return n!=="/"&&(p.pathname=aM({basename:n,pathname:p.pathname})),ms(p)}function S1(e,t,n){if(!n||!xM(n))return{path:t};if(n.formMethod&&!$M(n.formMethod))return{path:t,error:Kn(405,{method:n.formMethod})};let i=()=>({path:t,error:Kn(400,{type:"invalid-body"})}),l=(n.formMethod||"get").toUpperCase(),u=AC(t);if(n.body!==void 0){if(n.formEncType==="text/plain"){if(!bn(l))return i();let _=typeof n.body=="string"?n.body:n.body instanceof FormData||n.body instanceof URLSearchParams?Array.from(n.body.entries()).reduce((v,[b,x])=>`${v}${b}=${x}
`,""):String(n.body);return{path:t,submission:{formMethod:l,formAction:u,formEncType:n.formEncType,formData:void 0,json:void 0,text:_}}}else if(n.formEncType==="application/json"){if(!bn(l))return i();try{let _=typeof n.body=="string"?JSON.parse(n.body):n.body;return{path:t,submission:{formMethod:l,formAction:u,formEncType:n.formEncType,formData:void 0,json:_,text:void 0}}}catch{return i()}}}$e(typeof FormData=="function","FormData is not available in this environment");let f,p;if(n.formData)f=My(n.formData),p=n.formData;else if(n.body instanceof FormData)f=My(n.body),p=n.body;else if(n.body instanceof URLSearchParams)f=n.body,p=A1(f);else if(n.body==null)f=new URLSearchParams,p=new FormData;else try{f=new URLSearchParams(n.body),p=A1(f)}catch{return i()}let h={formMethod:l,formAction:u,formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:p,json:void 0,text:void 0};if(bn(h.formMethod))return{path:t,submission:h};let y=xi(t);return e&&y.search&&Pv(y.search)&&f.append("index",""),y.search=`?${f}`,{path:ms(y),submission:h}}function x1(e,t,n,i,o,l,u,f,p,h,y,_,v,b,x,O,C,I,M,R){let D=R?kn(R[1])?R[1].error:R[1].data:void 0,N=o.createURL(l.location),A=o.createURL(p),P;if(y&&l.errors){let V=Object.keys(l.errors)[0];P=u.findIndex(te=>te.route.id===V)}else if(R&&kn(R[1])){let V=R[0];P=u.findIndex(te=>te.route.id===V)-1}let U=R?R[1].statusCode:void 0,F=U&&U>=400,H={currentUrl:N,currentParams:l.matches[0]?.params||{},nextUrl:A,nextParams:u[0].params,...f,actionResult:D,actionStatus:U},z=u.map((V,te)=>{let{route:ue}=V,j=null;if(P!=null&&te>P?j=!1:ue.lazy?j=!0:ue.loader==null?j=!1:y?j=ky(ue,l.loaderData,l.errors):wM(l.loaderData,l.matches[te],V)&&(j=!0),j!==null)return Ny(n,i,e,V,h,t,j);let K=F?!1:_||N.pathname+N.search===A.pathname+A.search||N.search!==A.search||EM(l.matches[te],V),ne={...H,defaultShouldRevalidate:K},ae=jf(V,ne);return Ny(n,i,e,V,h,t,ae,ne)}),G=[];return x.forEach((V,te)=>{if(y||!u.some(le=>le.route.id===V.routeId)||b.has(te))return;let ue=l.fetchers.get(te),j=ue&&ue.state!=="idle"&&ue.data===void 0,K=ns(C,V.path,I);if(!K){if(M&&j)return;G.push({key:te,routeId:V.routeId,path:V.path,matches:null,match:null,request:null,controller:null});return}if(O.has(te))return;let ne=vf(K,V.path),ae=new AbortController,k=ba(o,V.path,ae.signal),X=null;if(v.has(te))v.delete(te),X=Ea(n,i,k,K,ne,h,t);else if(j)_&&(X=Ea(n,i,k,K,ne,h,t));else{let le={...H,defaultShouldRevalidate:F?!1:_};jf(ne,le)&&(X=Ea(n,i,k,K,ne,h,t,le))}X&&G.push({key:te,routeId:V.routeId,path:V.path,matches:X,match:ne,request:k,controller:ae})}),{dsMatches:z,revalidatingFetchers:G}}function ky(e,t,n){if(e.lazy)return!0;if(!e.loader)return!1;let i=t!=null&&e.id in t,o=n!=null&&n[e.id]!==void 0;return!i&&o?!1:typeof e.loader=="function"&&e.loader.hydrate===!0?!0:!i&&!o}function wM(e,t,n){let i=!t||n.route.id!==t.route.id,o=!e.hasOwnProperty(n.route.id);return i||o}function EM(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function jf(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}function w1(e,t,n,i,o,l){let u;if(e){let h=i[e];$e(h,`No route found to patch children into: routeId = ${e}`),h.children||(h.children=[]),u=h.children}else u=n;let f=[],p=[];if(t.forEach(h=>{let y=u.find(_=>wC(h,_));y?p.push({existingRoute:y,newRoute:h}):f.push(h)}),f.length>0){let h=Bc(f,o,[e||"_","patch",String(u?.length||"0")],i);u.push(...h)}if(l&&p.length>0)for(let h=0;h<p.length;h++){let{existingRoute:y,newRoute:_}=p[h],v=y,[b]=Bc([_],o,[],{},!0);Object.assign(v,{element:b.element?b.element:v.element,errorElement:b.errorElement?b.errorElement:v.errorElement,hydrateFallbackElement:b.hydrateFallbackElement?b.hydrateFallbackElement:v.hydrateFallbackElement})}}function wC(e,t){return"id"in e&&"id"in t&&e.id===t.id?!0:e.index===t.index&&e.path===t.path&&e.caseSensitive===t.caseSensitive?(!e.children||e.children.length===0)&&(!t.children||t.children.length===0)?!0:e.children.every((n,i)=>t.children?.some(o=>wC(n,o))):!1}var E1=new WeakMap,EC=({key:e,route:t,manifest:n,mapRouteProperties:i})=>{let o=n[t.id];if($e(o,"No route found in manifest"),!o.lazy||typeof o.lazy!="object")return;let l=o.lazy[e];if(!l)return;let u=E1.get(o);u||(u={},E1.set(o,u));let f=u[e];if(f)return f;let p=(async()=>{let h=qN(e),_=o[e]!==void 0&&e!=="hasErrorBoundary";if(h)wt(!h,"Route property "+e+" is not a supported lazy route property. This property will be ignored."),u[e]=Promise.resolve();else if(_)wt(!1,`Route "${o.id}" has a static property "${e}" defined. The lazy property will be ignored.`);else{let v=await l();v!=null&&(Object.assign(o,{[e]:v}),Object.assign(o,i(o)))}typeof o.lazy=="object"&&(o.lazy[e]=void 0,Object.values(o.lazy).every(v=>v===void 0)&&(o.lazy=void 0))})();return u[e]=p,p},T1=new WeakMap;function TM(e,t,n,i,o){let l=n[e.id];if($e(l,"No route found in manifest"),!e.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof e.lazy=="function"){let y=T1.get(l);if(y)return{lazyRoutePromise:y,lazyHandlerPromise:y};let _=(async()=>{$e(typeof e.lazy=="function","No lazy route function found");let v=await e.lazy(),b={};for(let x in v){let O=v[x];if(O===void 0)continue;let C=GN(x),M=l[x]!==void 0&&x!=="hasErrorBoundary";C?wt(!C,"Route property "+x+" is not a supported property to be returned from a lazy route function. This property will be ignored."):M?wt(!M,`Route "${l.id}" has a static property "${x}" defined but its lazy function is also returning a value for this property. The lazy route property "${x}" will be ignored.`):b[x]=O}Object.assign(l,b),Object.assign(l,{...i(l),lazy:void 0})})();return T1.set(l,_),_.catch(()=>{}),{lazyRoutePromise:_,lazyHandlerPromise:_}}let u=Object.keys(e.lazy),f=[],p;for(let y of u){if(o&&o.includes(y))continue;let _=EC({key:y,route:e,manifest:n,mapRouteProperties:i});_&&(f.push(_),y===t&&(p=_))}let h=f.length>0?Promise.all(f).then(()=>{}):void 0;return h?.catch(()=>{}),p?.catch(()=>{}),{lazyRoutePromise:h,lazyHandlerPromise:p}}async function C1(e){let t=e.matches.filter(o=>o.shouldLoad),n={};return(await Promise.all(t.map(o=>o.resolve()))).forEach((o,l)=>{n[t[l].route.id]=o}),n}async function CM(e){return e.matches.some(t=>t.route.middleware)?TC(e,()=>C1(e)):C1(e)}function TC(e,t){return RM(e,t,i=>i,LM,n);function n(i,o,l){if(l)return Promise.resolve(Object.assign(l.value,{[o]:{type:"error",result:i}}));{let{matches:u}=e,f=Math.min(u.findIndex(h=>h.route.id===o)||0,u.findIndex(h=>h.unstable_shouldCallHandler())||0),p=rs(u,u[f].route.id).route.id;return Promise.resolve({[p]:{type:"error",result:i}})}}}async function RM(e,t,n,i,o){let{matches:l,request:u,params:f,context:p}=e,h=l.flatMap(_=>_.route.middleware?_.route.middleware.map(v=>[_.route.id,v]):[]);return await CC({request:u,params:f,context:p},h,t,n,i,o)}async function CC(e,t,n,i,o,l,u=0){let{request:f}=e;if(f.signal.aborted)throw f.signal.reason??new Error(`Request aborted: ${f.method} ${f.url}`);let p=t[u];if(!p)return await n();let[h,y]=p,_,v=async()=>{if(_)throw new Error("You may only call `next()` once per middleware");try{return _={value:await CC(e,t,n,i,o,l,u+1)},_.value}catch(b){return _={value:await l(b,h,_)},_.value}};try{let b=await y(e,v),x=b!=null?i(b):void 0;return o(x)?x:_?x??_.value:(_={value:await v()},_.value)}catch(b){return await l(b,h,_)}}function RC(e,t,n,i,o){let l=EC({key:"middleware",route:i.route,manifest:t,mapRouteProperties:e}),u=TM(i.route,bn(n.method)?"action":"loader",t,e,o);return{middleware:l,route:u.lazyRoutePromise,handler:u.lazyHandlerPromise}}function Ny(e,t,n,i,o,l,u,f=null){let p=!1,h=RC(e,t,n,i,o);return{...i,_lazyPromises:h,shouldLoad:u,unstable_shouldRevalidateArgs:f,unstable_shouldCallHandler(y){return p=!0,f?typeof y=="boolean"?jf(i,{...f,defaultShouldRevalidate:y}):jf(i,f):u},resolve(y){return p||u||y&&!bn(n.method)&&(i.route.lazy||i.route.loader)?IM({request:n,match:i,lazyHandlerPromise:h?.handler,lazyRoutePromise:h?.route,handlerOverride:y,scopedContext:l}):Promise.resolve({type:"data",result:void 0})}}}function Ea(e,t,n,i,o,l,u,f=null){return i.map(p=>p.route.id!==o.route.id?{...p,shouldLoad:!1,unstable_shouldRevalidateArgs:f,unstable_shouldCallHandler:()=>!1,_lazyPromises:RC(e,t,n,p,l),resolve:()=>Promise.resolve({type:"data",result:void 0})}:Ny(e,t,n,p,l,u,!0,f))}async function AM(e,t,n,i,o,l){n.some(h=>h._lazyPromises?.middleware)&&await Promise.all(n.map(h=>h._lazyPromises?.middleware));let u={request:t,params:n[0].params,context:o,matches:n},p=await e({...u,fetcherKey:i,runClientMiddleware:h=>{let y=u;return TC(y,()=>h({...y,fetcherKey:i,runClientMiddleware:()=>{throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler")}}))}});try{await Promise.all(n.flatMap(h=>[h._lazyPromises?.handler,h._lazyPromises?.route]))}catch{}return p}async function IM({request:e,match:t,lazyHandlerPromise:n,lazyRoutePromise:i,handlerOverride:o,scopedContext:l}){let u,f,p=bn(e.method),h=p?"action":"loader",y=_=>{let v,b=new Promise((C,I)=>v=I);f=()=>v(),e.signal.addEventListener("abort",f);let x=C=>typeof _!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${h}" [routeId: ${t.route.id}]`)):_({request:e,params:t.params,context:l},...C!==void 0?[C]:[]),O=(async()=>{try{return{type:"data",result:await(o?o(I=>x(I)):x())}}catch(C){return{type:"error",result:C}}})();return Promise.race([O,b])};try{let _=p?t.route.action:t.route.loader;if(n||i)if(_){let v,[b]=await Promise.all([y(_).catch(x=>{v=x}),n,i]);if(v!==void 0)throw v;u=b}else{await n;let v=p?t.route.action:t.route.loader;if(v)[u]=await Promise.all([y(v),i]);else if(h==="action"){let b=new URL(e.url),x=b.pathname+b.search;throw Kn(405,{method:e.method,pathname:x,routeId:t.route.id})}else return{type:"data",result:void 0}}else if(_)u=await y(_);else{let v=new URL(e.url),b=v.pathname+v.search;throw Kn(404,{pathname:b})}}catch(_){return{type:"error",result:_}}finally{f&&e.signal.removeEventListener("abort",f)}return u}async function DM(e){let t=e.headers.get("Content-Type");return t&&/\bapplication\/json\b/.test(t)?e.body==null?null:e.json():e.text()}async function OM(e){let{result:t,type:n}=e;if(IC(t)){let i;try{i=await DM(t)}catch(o){return{type:"error",error:o}}return n==="error"?{type:"error",error:new Pf(t.status,t.statusText,i),statusCode:t.status,headers:t.headers}:{type:"data",data:i,statusCode:t.status,headers:t.headers}}return n==="error"?k1(t)?t.data instanceof Error?{type:"error",error:t.data,statusCode:t.init?.status,headers:t.init?.headers?new Headers(t.init.headers):void 0}:{type:"error",error:new Pf(t.init?.status||500,void 0,t.data),statusCode:Hc(t)?t.status:void 0,headers:t.init?.headers?new Headers(t.init.headers):void 0}:{type:"error",error:t,statusCode:Hc(t)?t.status:void 0}:k1(t)?{type:"data",data:t.data,statusCode:t.init?.status,headers:t.init?.headers?new Headers(t.init.headers):void 0}:{type:"data",data:t}}function kM(e,t,n,i,o){let l=e.headers.get("Location");if($e(l,"Redirects returned/thrown from loaders/actions must have a Location header"),!Lv(l)){let u=i.slice(0,i.findIndex(f=>f.route.id===n)+1);l=Oy(new URL(t.url),u,o,l),e.headers.set("Location",l)}return e}function R1(e,t,n){if(Lv(e)){let i=e,o=i.startsWith("//")?new URL(t.protocol+i):new URL(i),l=er(o.pathname,n)!=null;if(o.origin===t.origin&&l)return o.pathname+o.search+o.hash}return e}function ba(e,t,n,i){let o=e.createURL(AC(t)).toString(),l={signal:n};if(i&&bn(i.formMethod)){let{formMethod:u,formEncType:f}=i;l.method=u.toUpperCase(),f==="application/json"?(l.headers=new Headers({"Content-Type":f}),l.body=JSON.stringify(i.json)):f==="text/plain"?l.body=i.text:f==="application/x-www-form-urlencoded"&&i.formData?l.body=My(i.formData):l.body=i.formData}return new Request(o,l)}function My(e){let t=new URLSearchParams;for(let[n,i]of e.entries())t.append(n,typeof i=="string"?i:i.name);return t}function A1(e){let t=new FormData;for(let[n,i]of e.entries())t.append(n,i);return t}function NM(e,t,n,i=!1,o=!1){let l={},u=null,f,p=!1,h={},y=n&&kn(n[1])?n[1].error:void 0;return e.forEach(_=>{if(!(_.route.id in t))return;let v=_.route.id,b=t[v];if($e(!oo(b),"Cannot handle redirect results in processLoaderData"),kn(b)){let x=b.error;if(y!==void 0&&(x=y,y=void 0),u=u||{},o)u[v]=x;else{let O=rs(e,v);u[O.route.id]==null&&(u[O.route.id]=x)}i||(l[v]=xC),p||(p=!0,f=Hc(b.error)?b.error.status:500),b.headers&&(h[v]=b.headers)}else l[v]=b.data,b.statusCode&&b.statusCode!==200&&!p&&(f=b.statusCode),b.headers&&(h[v]=b.headers)}),y!==void 0&&n&&(u={[n[0]]:y},n[2]&&(l[n[2]]=void 0)),{loaderData:l,errors:u,statusCode:f||200,loaderHeaders:h}}function I1(e,t,n,i,o,l){let{loaderData:u,errors:f}=NM(t,n,i);return o.filter(p=>!p.matches||p.matches.some(h=>h.shouldLoad)).forEach(p=>{let{key:h,match:y,controller:_}=p;if(_&&_.signal.aborted)return;let v=l[h];if($e(v,"Did not find corresponding fetcher result"),kn(v)){let b=rs(e.matches,y?.route.id);f&&f[b.route.id]||(f={...f,[b.route.id]:v.error}),e.fetchers.delete(h)}else if(oo(v))$e(!1,"Unhandled fetcher revalidation redirect");else{let b=es(v.data);e.fetchers.set(h,b)}}),{loaderData:u,errors:f}}function D1(e,t,n,i){let o=Object.entries(t).filter(([,l])=>l!==xC).reduce((l,[u,f])=>(l[u]=f,l),{});for(let l of n){let u=l.route.id;if(!t.hasOwnProperty(u)&&e.hasOwnProperty(u)&&l.route.loader&&(o[u]=e[u]),i&&i.hasOwnProperty(u))break}return o}function O1(e){return e?kn(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function rs(e,t){return(t?e.slice(0,e.findIndex(i=>i.route.id===t)+1):[...e]).reverse().find(i=>i.route.hasErrorBoundary===!0)||e[0]}function Wd(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Kn(e,{pathname:t,routeId:n,method:i,type:o,message:l}={}){let u="Unknown Server Error",f="Unknown @remix-run/router error";return e===400?(u="Bad Request",i&&t&&n?f=`You made a ${i} request to "${t}" but did not provide a \`loader\` for route "${n}", so there is no way to handle the request.`:o==="invalid-body"&&(f="Unable to encode submission body")):e===403?(u="Forbidden",f=`Route "${n}" does not match URL "${t}"`):e===404?(u="Not Found",f=`No route matches URL "${t}"`):e===405&&(u="Method Not Allowed",i&&t&&n?f=`You made a ${i.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${n}", so there is no way to handle the request.`:i&&(f=`Invalid request method "${i.toUpperCase()}"`)),new Pf(e||500,u,new Error(f),!0)}function Yd(e){let t=Object.entries(e);for(let n=t.length-1;n>=0;n--){let[i,o]=t[n];if(oo(o))return{key:i,result:o}}}function AC(e){let t=typeof e=="string"?xi(e):e;return ms({...t,hash:""})}function MM(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function LM(e){return e!=null&&typeof e=="object"&&Object.entries(e).every(([t,n])=>typeof t=="string"&&PM(n))}function PM(e){return e!=null&&typeof e=="object"&&"type"in e&&"result"in e&&(e.type==="data"||e.type==="error")}function jM(e){return IC(e.result)&&gM.has(e.result.status)}function kn(e){return e.type==="error"}function oo(e){return(e&&e.type)==="redirect"}function k1(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function IC(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function $M(e){return mM.has(e.toUpperCase())}function bn(e){return hM.has(e.toUpperCase())}function Pv(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function vf(e,t){let n=typeof t=="string"?xi(t).search:t.search;if(e[e.length-1].route.index&&Pv(n||""))return e[e.length-1];let i=_C(e);return i[i.length-1]}function N1(e){let{formMethod:t,formAction:n,formEncType:i,text:o,formData:l,json:u}=e;if(!(!t||!n||!i)){if(o!=null)return{formMethod:t,formAction:n,formEncType:i,formData:void 0,json:void 0,text:o};if(l!=null)return{formMethod:t,formAction:n,formEncType:i,formData:l,json:void 0,text:void 0};if(u!==void 0)return{formMethod:t,formAction:n,formEncType:i,formData:void 0,json:u,text:void 0}}}function Dg(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function UM(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function ic(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function zM(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function es(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function BM(e,t){try{let n=e.sessionStorage.getItem(SC);if(n){let i=JSON.parse(n);for(let[o,l]of Object.entries(i||{}))l&&Array.isArray(l)&&t.set(o,new Set(l||[]))}}catch{}}function HM(e,t){if(t.size>0){let n={};for(let[i,o]of t)n[i]=[...o];try{e.sessionStorage.setItem(SC,JSON.stringify(n))}catch(i){wt(!1,`Failed to save applied view transitions in sessionStorage (${i}).`)}}}function FM(){let e,t,n=new Promise((i,o)=>{e=async l=>{i(l);try{await n}catch{}},t=async l=>{o(l);try{await n}catch{}}});return{promise:n,resolve:e,reject:t}}var Co=E.createContext(null);Co.displayName="DataRouter";var hu=E.createContext(null);hu.displayName="DataRouterState";E.createContext(!1);var jv=E.createContext({isTransitioning:!1});jv.displayName="ViewTransition";var DC=E.createContext(new Map);DC.displayName="Fetchers";var qM=E.createContext(null);qM.displayName="Await";var Sr=E.createContext(null);Sr.displayName="Navigation";var Oh=E.createContext(null);Oh.displayName="Location";var ir=E.createContext({outlet:null,matches:[],isDataRoute:!1});ir.displayName="Route";var $v=E.createContext(null);$v.displayName="RouteError";function VM(e,{relative:t}={}){$e(Ga(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=E.useContext(Sr),{hash:o,pathname:l,search:u}=pu(e,{relative:t}),f=l;return n!=="/"&&(f=l==="/"?n:Or([n,l])),i.createHref({pathname:f,search:u,hash:o})}function Ga(){return E.useContext(Oh)!=null}function Pr(){return $e(Ga(),"useLocation() may be used only in the context of a <Router> component."),E.useContext(Oh).location}var OC="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function kC(e){E.useContext(Sr).static||E.useLayoutEffect(e)}function ws(){let{isDataRoute:e}=E.useContext(ir);return e?a2():GM()}function GM(){$e(Ga(),"useNavigate() may be used only in the context of a <Router> component.");let e=E.useContext(Co),{basename:t,navigator:n}=E.useContext(Sr),{matches:i}=E.useContext(ir),{pathname:o}=Pr(),l=JSON.stringify(Ih(i)),u=E.useRef(!1);return kC(()=>{u.current=!0}),E.useCallback((p,h={})=>{if(wt(u.current,OC),!u.current)return;if(typeof p=="number"){n.go(p);return}let y=Dh(p,JSON.parse(l),o,h.relative==="path");e==null&&t!=="/"&&(y.pathname=y.pathname==="/"?t:Or([t,y.pathname])),(h.replace?n.replace:n.push)(y,h.state,h)},[t,n,l,o,e])}var WM=E.createContext(null);function YM(e){let t=E.useContext(ir).outlet;return t&&E.createElement(WM.Provider,{value:e},t)}function QM(){let{matches:e}=E.useContext(ir),t=e[e.length-1];return t?t.params:{}}function pu(e,{relative:t}={}){let{matches:n}=E.useContext(ir),{pathname:i}=Pr(),o=JSON.stringify(Ih(n));return E.useMemo(()=>Dh(e,JSON.parse(o),i,t==="path"),[e,o,i,t])}function KM(e,t,n,i,o){$e(Ga(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=E.useContext(Sr),{matches:u}=E.useContext(ir),f=u[u.length-1],p=f?f.params:{},h=f?f.pathname:"/",y=f?f.pathnameBase:"/",_=f&&f.route;{let M=_&&_.path||"";NC(h,!_||M.endsWith("*")||M.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${M==="/"?"*":`${M}/*`}">.`)}let v=Pr(),b;b=v;let x=b.pathname||"/",O=x;if(y!=="/"){let M=y.replace(/^\//,"").split("/");O="/"+x.replace(/^\//,"").split("/").slice(M.length).join("/")}let C=ns(e,{pathname:O});return wt(_||C!=null,`No routes matched location "${b.pathname}${b.search}${b.hash}" `),wt(C==null||C[C.length-1].route.element!==void 0||C[C.length-1].route.Component!==void 0||C[C.length-1].route.lazy!==void 0,`Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),t2(C&&C.map(M=>Object.assign({},M,{params:Object.assign({},p,M.params),pathname:Or([y,l.encodeLocation?l.encodeLocation(M.pathname).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?y:Or([y,l.encodeLocation?l.encodeLocation(M.pathnameBase).pathname:M.pathnameBase])})),u,n,i,o)}function XM(){let e=o2(),t=Hc(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},u=null;return console.error("Error handled by React Router default ErrorBoundary:",e),u=E.createElement(E.Fragment,null,E.createElement("p",null,"💿 Hey developer 👋"),E.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",E.createElement("code",{style:l},"ErrorBoundary")," or"," ",E.createElement("code",{style:l},"errorElement")," prop on your route.")),E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:o},n):null,u)}var ZM=E.createElement(XM,null),JM=class extends E.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.unstable_onError?this.props.unstable_onError(e,t):console.error("React Router caught the following error during render",e)}render(){return this.state.error!==void 0?E.createElement(ir.Provider,{value:this.props.routeContext},E.createElement($v.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function e2({routeContext:e,match:t,children:n}){let i=E.useContext(Co);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),E.createElement(ir.Provider,{value:e},n)}function t2(e,t=[],n=null,i=null,o=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,u=n?.errors;if(u!=null){let h=l.findIndex(y=>y.route.id&&u?.[y.route.id]!==void 0);$e(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,h+1))}let f=!1,p=-1;if(n)for(let h=0;h<l.length;h++){let y=l[h];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(p=h),y.route.id){let{loaderData:_,errors:v}=n,b=y.route.loader&&!_.hasOwnProperty(y.route.id)&&(!v||v[y.route.id]===void 0);if(y.route.lazy||b){f=!0,p>=0?l=l.slice(0,p+1):l=[l[0]];break}}}return l.reduceRight((h,y,_)=>{let v,b=!1,x=null,O=null;n&&(v=u&&y.route.id?u[y.route.id]:void 0,x=y.route.errorElement||ZM,f&&(p<0&&_===0?(NC("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,O=null):p===_&&(b=!0,O=y.route.hydrateFallbackElement||null)));let C=t.concat(l.slice(0,_+1)),I=()=>{let M;return v?M=x:b?M=O:y.route.Component?M=E.createElement(y.route.Component,null):y.route.element?M=y.route.element:M=h,E.createElement(e2,{match:y,routeContext:{outlet:h,matches:C,isDataRoute:n!=null},children:M})};return n&&(y.route.ErrorBoundary||y.route.errorElement||_===0)?E.createElement(JM,{location:n.location,revalidation:n.revalidation,component:x,error:v,children:I(),routeContext:{outlet:null,matches:C,isDataRoute:!0},unstable_onError:i}):I()},null)}function Uv(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function n2(e){let t=E.useContext(Co);return $e(t,Uv(e)),t}function r2(e){let t=E.useContext(hu);return $e(t,Uv(e)),t}function i2(e){let t=E.useContext(ir);return $e(t,Uv(e)),t}function zv(e){let t=i2(e),n=t.matches[t.matches.length-1];return $e(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function s2(){return zv("useRouteId")}function o2(){let e=E.useContext($v),t=r2("useRouteError"),n=zv("useRouteError");return e!==void 0?e:t.errors?.[n]}function a2(){let{router:e}=n2("useNavigate"),t=zv("useNavigate"),n=E.useRef(!1);return kC(()=>{n.current=!0}),E.useCallback(async(o,l={})=>{wt(n.current,OC),n.current&&(typeof o=="number"?e.navigate(o):await e.navigate(o,{fromRouteId:t,...l}))},[e,t])}var M1={};function NC(e,t,n){!t&&!M1[e]&&(M1[e]=!0,wt(!1,n))}var L1={};function P1(e,t){!e&&!L1[t]&&(L1[t]=!0,console.warn(t))}function l2(e){let t={hasErrorBoundary:e.hasErrorBoundary||e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&(e.element&&wt(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(t,{element:E.createElement(e.Component),Component:void 0})),e.HydrateFallback&&(e.hydrateFallbackElement&&wt(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(t,{hydrateFallbackElement:E.createElement(e.HydrateFallback),HydrateFallback:void 0})),e.ErrorBoundary&&(e.errorElement&&wt(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(t,{errorElement:E.createElement(e.ErrorBoundary),ErrorBoundary:void 0})),t}var c2=["HydrateFallback","hydrateFallbackElement"],u2=class{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=i=>{this.status==="pending"&&(this.status="resolved",t(i))},this.reject=i=>{this.status==="pending"&&(this.status="rejected",n(i))}})}};function d2({router:e,flushSync:t,unstable_onError:n}){let[i,o]=E.useState(e.state),[l,u]=E.useState(),[f,p]=E.useState({isTransitioning:!1}),[h,y]=E.useState(),[_,v]=E.useState(),[b,x]=E.useState(),O=E.useRef(new Map),C=E.useCallback(N=>{o(A=>(N.errors&&n&&Object.entries(N.errors).forEach(([P,U])=>{A.errors?.[P]!==U&&n(U)}),N))},[n]),I=E.useCallback((N,{deletedFetchers:A,flushSync:P,viewTransitionOpts:U})=>{N.fetchers.forEach((H,z)=>{H.data!==void 0&&O.current.set(z,H.data)}),A.forEach(H=>O.current.delete(H)),P1(P===!1||t!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let F=e.window!=null&&e.window.document!=null&&typeof e.window.document.startViewTransition=="function";if(P1(U==null||F,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!U||!F){t&&P?t(()=>C(N)):E.startTransition(()=>C(N));return}if(t&&P){t(()=>{_&&(h&&h.resolve(),_.skipTransition()),p({isTransitioning:!0,flushSync:!0,currentLocation:U.currentLocation,nextLocation:U.nextLocation})});let H=e.window.document.startViewTransition(()=>{t(()=>C(N))});H.finished.finally(()=>{t(()=>{y(void 0),v(void 0),u(void 0),p({isTransitioning:!1})})}),t(()=>v(H));return}_?(h&&h.resolve(),_.skipTransition(),x({state:N,currentLocation:U.currentLocation,nextLocation:U.nextLocation})):(u(N),p({isTransitioning:!0,flushSync:!1,currentLocation:U.currentLocation,nextLocation:U.nextLocation}))},[e.window,t,_,h,C]);E.useLayoutEffect(()=>e.subscribe(I),[e,I]),E.useEffect(()=>{f.isTransitioning&&!f.flushSync&&y(new u2)},[f]),E.useEffect(()=>{if(h&&l&&e.window){let N=l,A=h.promise,P=e.window.document.startViewTransition(async()=>{E.startTransition(()=>C(N)),await A});P.finished.finally(()=>{y(void 0),v(void 0),u(void 0),p({isTransitioning:!1})}),v(P)}},[l,h,e.window,C]),E.useEffect(()=>{h&&l&&i.location.key===l.location.key&&h.resolve()},[h,_,i.location,l]),E.useEffect(()=>{!f.isTransitioning&&b&&(u(b.state),p({isTransitioning:!0,flushSync:!1,currentLocation:b.currentLocation,nextLocation:b.nextLocation}),x(void 0))},[f.isTransitioning,b]);let M=E.useMemo(()=>({createHref:e.createHref,encodeLocation:e.encodeLocation,go:N=>e.navigate(N),push:(N,A,P)=>e.navigate(N,{state:A,preventScrollReset:P?.preventScrollReset}),replace:(N,A,P)=>e.navigate(N,{replace:!0,state:A,preventScrollReset:P?.preventScrollReset})}),[e]),R=e.basename||"/",D=E.useMemo(()=>({router:e,navigator:M,static:!1,basename:R,unstable_onError:n}),[e,M,R,n]);return E.createElement(E.Fragment,null,E.createElement(Co.Provider,{value:D},E.createElement(hu.Provider,{value:i},E.createElement(DC.Provider,{value:O.current},E.createElement(jv.Provider,{value:f},E.createElement(m2,{basename:R,location:i.location,navigationType:i.historyAction,navigator:M},E.createElement(f2,{routes:e.routes,future:e.future,state:i,unstable_onError:n})))))),null)}var f2=E.memo(h2);function h2({routes:e,future:t,state:n,unstable_onError:i}){return KM(e,void 0,n,i,t)}function Bv({to:e,replace:t,state:n,relative:i}){$e(Ga(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=E.useContext(Sr);wt(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=E.useContext(ir),{pathname:u}=Pr(),f=ws(),p=Dh(e,Ih(l),u,i==="path"),h=JSON.stringify(p);return E.useEffect(()=>{f(JSON.parse(h),{replace:t,state:n,relative:i})},[f,h,i,t,n]),null}function p2(e){return YM(e.context)}function Qn(e){$e(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function m2({basename:e="/",children:t=null,location:n,navigationType:i="POP",navigator:o,static:l=!1}){$e(!Ga(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=e.replace(/^\/*/,"/"),f=E.useMemo(()=>({basename:u,navigator:o,static:l,future:{}}),[u,o,l]);typeof n=="string"&&(n=xi(n));let{pathname:p="/",search:h="",hash:y="",state:_=null,key:v="default"}=n,b=E.useMemo(()=>{let x=er(p,u);return x==null?null:{location:{pathname:x,search:h,hash:y,state:_,key:v},navigationType:i}},[u,p,h,y,_,v,i]);return wt(b!=null,`<Router basename="${u}"> is not able to match the URL "${p}${h}${y}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:E.createElement(Sr.Provider,{value:f},E.createElement(Oh.Provider,{children:t,value:b}))}function Ly(e,t=[]){let n=[];return E.Children.forEach(e,(i,o)=>{if(!E.isValidElement(i))return;let l=[...t,o];if(i.type===E.Fragment){n.push.apply(n,Ly(i.props.children,l));return}$e(i.type===Qn,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),$e(!i.props.index||!i.props.children,"An index route cannot have child routes.");let u={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(u.children=Ly(i.props.children,l)),n.push(u)}),n}var g2=Ly,_f="get",bf="application/x-www-form-urlencoded";function kh(e){return e!=null&&typeof e.tagName=="string"}function y2(e){return kh(e)&&e.tagName.toLowerCase()==="button"}function v2(e){return kh(e)&&e.tagName.toLowerCase()==="form"}function _2(e){return kh(e)&&e.tagName.toLowerCase()==="input"}function b2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function S2(e,t){return e.button===0&&(!t||t==="_self")&&!b2(e)}function Py(e=""){return new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let i=e[n];return t.concat(Array.isArray(i)?i.map(o=>[n,o]):[[n,i]])},[]))}function x2(e,t){let n=Py(e);return t&&t.forEach((i,o)=>{n.has(o)||t.getAll(o).forEach(l=>{n.append(o,l)})}),n}var Qd=null;function w2(){if(Qd===null)try{new FormData(document.createElement("form"),0),Qd=!1}catch{Qd=!0}return Qd}var E2=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Og(e){return e!=null&&!E2.has(e)?(wt(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${bf}"`),null):e}function T2(e,t){let n,i,o,l,u;if(v2(e)){let f=e.getAttribute("action");i=f?er(f,t):null,n=e.getAttribute("method")||_f,o=Og(e.getAttribute("enctype"))||bf,l=new FormData(e)}else if(y2(e)||_2(e)&&(e.type==="submit"||e.type==="image")){let f=e.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=e.getAttribute("formaction")||f.getAttribute("action");if(i=p?er(p,t):null,n=e.getAttribute("formmethod")||f.getAttribute("method")||_f,o=Og(e.getAttribute("formenctype"))||Og(f.getAttribute("enctype"))||bf,l=new FormData(f,e),!w2()){let{name:h,type:y,value:_}=e;if(y==="image"){let v=h?`${h}.`:"";l.append(`${v}x`,"0"),l.append(`${v}y`,"0")}else h&&l.append(h,_)}}else{if(kh(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=_f,i=null,o=bf,u=e}return l&&o==="text/plain"&&(u=l,l=void 0),{action:i,method:n.toLowerCase(),encType:o,formData:l,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Hv(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function C2(e,t,n){let i=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return i.pathname==="/"?i.pathname=`_root.${n}`:t&&er(i.pathname,t)==="/"?i.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${n}`,i}async function R2(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function A2(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function I2(e,t,n){let i=await Promise.all(e.map(async o=>{let l=t.routes[o.route.id];if(l){let u=await R2(l,n);return u.links?u.links():[]}return[]}));return N2(i.flat(1).filter(A2).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function j1(e,t,n,i,o,l){let u=(p,h)=>n[h]?p.route.id!==n[h].route.id:!0,f=(p,h)=>n[h].pathname!==p.pathname||n[h].route.path?.endsWith("*")&&n[h].params["*"]!==p.params["*"];return l==="assets"?t.filter((p,h)=>u(p,h)||f(p,h)):l==="data"?t.filter((p,h)=>{let y=i.routes[p.route.id];if(!y||!y.hasLoader)return!1;if(u(p,h)||f(p,h))return!0;if(p.route.shouldRevalidate){let _=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function D2(e,t,{includeHydrateFallback:n}={}){return O2(e.map(i=>{let o=t.routes[i.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function O2(e){return[...new Set(e)]}function k2(e){let t={},n=Object.keys(e).sort();for(let i of n)t[i]=e[i];return t}function N2(e,t){let n=new Set;return new Set(t),e.reduce((i,o)=>{let l=JSON.stringify(k2(o));return n.has(l)||(n.add(l),i.push({key:l,link:o})),i},[])}function MC(){let e=E.useContext(Co);return Hv(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function M2(){let e=E.useContext(hu);return Hv(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Fv=E.createContext(void 0);Fv.displayName="FrameworkContext";function LC(){let e=E.useContext(Fv);return Hv(e,"You must render this element inside a <HydratedRouter> element"),e}function L2(e,t){let n=E.useContext(Fv),[i,o]=E.useState(!1),[l,u]=E.useState(!1),{onFocus:f,onBlur:p,onMouseEnter:h,onMouseLeave:y,onTouchStart:_}=t,v=E.useRef(null);E.useEffect(()=>{if(e==="render"&&u(!0),e==="viewport"){let O=I=>{I.forEach(M=>{u(M.isIntersecting)})},C=new IntersectionObserver(O,{threshold:.5});return v.current&&C.observe(v.current),()=>{C.disconnect()}}},[e]),E.useEffect(()=>{if(i){let O=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(O)}}},[i]);let b=()=>{o(!0)},x=()=>{o(!1),u(!1)};return n?e!=="intent"?[l,v,{}]:[l,v,{onFocus:sc(f,b),onBlur:sc(p,x),onMouseEnter:sc(h,b),onMouseLeave:sc(y,x),onTouchStart:sc(_,b)}]:[!1,v,{}]}function sc(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function P2({page:e,...t}){let{router:n}=MC(),i=E.useMemo(()=>ns(n.routes,e,n.basename),[n.routes,e,n.basename]);return i?E.createElement($2,{page:e,matches:i,...t}):null}function j2(e){let{manifest:t,routeModules:n}=LC(),[i,o]=E.useState([]);return E.useEffect(()=>{let l=!1;return I2(e,t,n).then(u=>{l||o(u)}),()=>{l=!0}},[e,t,n]),i}function $2({page:e,matches:t,...n}){let i=Pr(),{manifest:o,routeModules:l}=LC(),{basename:u}=MC(),{loaderData:f,matches:p}=M2(),h=E.useMemo(()=>j1(e,t,p,o,i,"data"),[e,t,p,o,i]),y=E.useMemo(()=>j1(e,t,p,o,i,"assets"),[e,t,p,o,i]),_=E.useMemo(()=>{if(e===i.pathname+i.search+i.hash)return[];let x=new Set,O=!1;if(t.forEach(I=>{let M=o.routes[I.route.id];!M||!M.hasLoader||(!h.some(R=>R.route.id===I.route.id)&&I.route.id in f&&l[I.route.id]?.shouldRevalidate||M.hasClientLoader?O=!0:x.add(I.route.id))}),x.size===0)return[];let C=C2(e,u,"data");return O&&x.size>0&&C.searchParams.set("_routes",t.filter(I=>x.has(I.route.id)).map(I=>I.route.id).join(",")),[C.pathname+C.search]},[u,f,i,o,h,t,e,l]),v=E.useMemo(()=>D2(y,o),[y,o]),b=j2(y);return E.createElement(E.Fragment,null,_.map(x=>E.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...n})),v.map(x=>E.createElement("link",{key:x,rel:"modulepreload",href:x,...n})),b.map(({key:x,link:O})=>E.createElement("link",{key:x,nonce:n.nonce,...O})))}function U2(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var PC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{PC&&(window.__reactRouterVersion="7.9.1")}catch{}function z2(e,t){return SM({basename:t?.basename,getContext:t?.getContext,future:t?.future,history:zN({window:t?.window}),hydrationData:B2(),routes:e,mapRouteProperties:l2,hydrationRouteProperties:c2,dataStrategy:t?.dataStrategy,patchRoutesOnNavigation:t?.patchRoutesOnNavigation,window:t?.window}).initialize()}function B2(){let e=window?.__staticRouterHydrationData;return e&&e.errors&&(e={...e,errors:H2(e.errors)}),e}function H2(e){if(!e)return null;let t=Object.entries(e),n={};for(let[i,o]of t)if(o&&o.__type==="RouteErrorResponse")n[i]=new Pf(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){if(o.__subType){let l=window[o.__subType];if(typeof l=="function")try{let u=new l(o.message);u.stack="",n[i]=u}catch{}}if(n[i]==null){let l=new Error(o.message);l.stack="",n[i]=l}}else n[i]=o;return n}var jC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Es=E.forwardRef(function({onClick:t,discover:n="render",prefetch:i="none",relative:o,reloadDocument:l,replace:u,state:f,target:p,to:h,preventScrollReset:y,viewTransition:_,...v},b){let{basename:x}=E.useContext(Sr),O=typeof h=="string"&&jC.test(h),C,I=!1;if(typeof h=="string"&&O&&(C=h,PC))try{let F=new URL(window.location.href),H=h.startsWith("//")?new URL(F.protocol+h):new URL(h),z=er(H.pathname,x);H.origin===F.origin&&z!=null?h=z+H.search+H.hash:I=!0}catch{wt(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let M=VM(h,{relative:o}),[R,D,N]=L2(i,v),A=V2(h,{replace:u,state:f,target:p,preventScrollReset:y,relative:o,viewTransition:_});function P(F){t&&t(F),F.defaultPrevented||A(F)}let U=E.createElement("a",{...v,...N,href:C||M,onClick:I||l?t:P,ref:U2(b,D),target:p,"data-discover":!O&&n==="render"?"true":void 0});return R&&!O?E.createElement(E.Fragment,null,U,E.createElement(P2,{page:M})):U});Es.displayName="Link";var qv=E.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:i="",end:o=!1,style:l,to:u,viewTransition:f,children:p,...h},y){let _=pu(u,{relative:h.relative}),v=Pr(),b=E.useContext(hu),{navigator:x,basename:O}=E.useContext(Sr),C=b!=null&&X2(_)&&f===!0,I=x.encodeLocation?x.encodeLocation(_).pathname:_.pathname,M=v.pathname,R=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;n||(M=M.toLowerCase(),R=R?R.toLowerCase():null,I=I.toLowerCase()),R&&O&&(R=er(R,O)||R);const D=I!=="/"&&I.endsWith("/")?I.length-1:I.length;let N=M===I||!o&&M.startsWith(I)&&M.charAt(D)==="/",A=R!=null&&(R===I||!o&&R.startsWith(I)&&R.charAt(I.length)==="/"),P={isActive:N,isPending:A,isTransitioning:C},U=N?t:void 0,F;typeof i=="function"?F=i(P):F=[i,N?"active":null,A?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let H=typeof l=="function"?l(P):l;return E.createElement(Es,{...h,"aria-current":U,className:F,ref:y,style:H,to:u,viewTransition:f},typeof p=="function"?p(P):p)});qv.displayName="NavLink";var F2=E.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:i,replace:o,state:l,method:u=_f,action:f,onSubmit:p,relative:h,preventScrollReset:y,viewTransition:_,...v},b)=>{let x=Q2(),O=K2(f,{relative:h}),C=u.toLowerCase()==="get"?"get":"post",I=typeof f=="string"&&jC.test(f),M=R=>{if(p&&p(R),R.defaultPrevented)return;R.preventDefault();let D=R.nativeEvent.submitter,N=D?.getAttribute("formmethod")||u;x(D||R.currentTarget,{fetcherKey:t,method:N,navigate:n,replace:o,state:l,relative:h,preventScrollReset:y,viewTransition:_})};return E.createElement("form",{ref:b,method:C,action:O,onSubmit:i?p:M,...v,"data-discover":!I&&e==="render"?"true":void 0})});F2.displayName="Form";function q2(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $C(e){let t=E.useContext(Co);return $e(t,q2(e)),t}function V2(e,{target:t,replace:n,state:i,preventScrollReset:o,relative:l,viewTransition:u}={}){let f=ws(),p=Pr(),h=pu(e,{relative:l});return E.useCallback(y=>{if(S2(y,t)){y.preventDefault();let _=n!==void 0?n:ms(p)===ms(h);f(e,{replace:_,state:i,preventScrollReset:o,relative:l,viewTransition:u})}},[p,f,h,n,i,t,e,o,l,u])}function G2(e){wt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=E.useRef(Py(e)),n=E.useRef(!1),i=Pr(),o=E.useMemo(()=>x2(i.search,n.current?null:t.current),[i.search]),l=ws(),u=E.useCallback((f,p)=>{const h=Py(typeof f=="function"?f(new URLSearchParams(o)):f);n.current=!0,l("?"+h,p)},[l,o]);return[o,u]}var W2=0,Y2=()=>`__${String(++W2)}__`;function Q2(){let{router:e}=$C("useSubmit"),{basename:t}=E.useContext(Sr),n=s2();return E.useCallback(async(i,o={})=>{let{action:l,method:u,encType:f,formData:p,body:h}=T2(i,t);if(o.navigate===!1){let y=o.fetcherKey||Y2();await e.fetch(y,n,o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:h,formMethod:o.method||u,formEncType:o.encType||f,flushSync:o.flushSync})}else await e.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:h,formMethod:o.method||u,formEncType:o.encType||f,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[e,t,n])}function K2(e,{relative:t}={}){let{basename:n}=E.useContext(Sr),i=E.useContext(ir);$e(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),l={...pu(e||".",{relative:t})},u=Pr();if(e==null){l.search=u.search;let f=new URLSearchParams(l.search),p=f.getAll("index");if(p.some(y=>y==="")){f.delete("index"),p.filter(_=>_).forEach(_=>f.append("index",_));let y=f.toString();l.search=y?`?${y}`:""}}return(!e||e===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(l.pathname=l.pathname==="/"?n:Or([n,l.pathname])),ms(l)}function X2(e,{relative:t}={}){let n=E.useContext(jv);$e(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=$C("useViewTransitionState"),o=pu(e,{relative:t});if(!n.isTransitioning)return!1;let l=er(n.currentLocation.pathname,i)||n.currentLocation.pathname,u=er(n.nextLocation.pathname,i)||n.nextLocation.pathname;return Lf(o.pathname,u)!=null||Lf(o.pathname,l)!=null}var UC=lC();function Z2(e){return E.createElement(d2,{flushSync:UC.flushSync,...e})}var Gt=function(){return Gt=Object.assign||function(t){for(var n,i=1,o=arguments.length;i<o;i++){n=arguments[i];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},Gt.apply(this,arguments)};function Fc(e,t,n){if(n||arguments.length===2)for(var i=0,o=t.length,l;i<o;i++)(l||!(i in t))&&(l||(l=Array.prototype.slice.call(t,0,i)),l[i]=t[i]);return e.concat(l||Array.prototype.slice.call(t))}var mt="-ms-",Rc="-moz-",tt="-webkit-",zC="comm",Nh="rule",Vv="decl",J2="@import",BC="@keyframes",eL="@layer",HC=Math.abs,Gv=String.fromCharCode,jy=Object.assign;function tL(e,t){return qt(e,0)^45?(((t<<2^qt(e,0))<<2^qt(e,1))<<2^qt(e,2))<<2^qt(e,3):0}function FC(e){return e.trim()}function li(e,t){return(e=t.exec(e))?e[0]:e}function Be(e,t,n){return e.replace(t,n)}function Sf(e,t,n){return e.indexOf(t,n)}function qt(e,t){return e.charCodeAt(t)|0}function Oa(e,t,n){return e.slice(t,n)}function Dr(e){return e.length}function qC(e){return e.length}function Sc(e,t){return t.push(e),e}function nL(e,t){return e.map(t).join("")}function $1(e,t){return e.filter(function(n){return!li(n,t)})}var Mh=1,ka=1,VC=0,tr=0,Lt=0,Wa="";function Lh(e,t,n,i,o,l,u,f){return{value:e,root:t,parent:n,type:i,props:o,children:l,line:Mh,column:ka,length:u,return:"",siblings:f}}function ts(e,t){return jy(Lh("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ma(e){for(;e.root;)e=ts(e.root,{children:[e]});Sc(e,e.siblings)}function rL(){return Lt}function iL(){return Lt=tr>0?qt(Wa,--tr):0,ka--,Lt===10&&(ka=1,Mh--),Lt}function pr(){return Lt=tr<VC?qt(Wa,tr++):0,ka++,Lt===10&&(ka=1,Mh++),Lt}function fo(){return qt(Wa,tr)}function xf(){return tr}function Ph(e,t){return Oa(Wa,e,t)}function $y(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function sL(e){return Mh=ka=1,VC=Dr(Wa=e),tr=0,[]}function oL(e){return Wa="",e}function kg(e){return FC(Ph(tr-1,Uy(e===91?e+2:e===40?e+1:e)))}function aL(e){for(;(Lt=fo())&&Lt<33;)pr();return $y(e)>2||$y(Lt)>3?"":" "}function lL(e,t){for(;--t&&pr()&&!(Lt<48||Lt>102||Lt>57&&Lt<65||Lt>70&&Lt<97););return Ph(e,xf()+(t<6&&fo()==32&&pr()==32))}function Uy(e){for(;pr();)switch(Lt){case e:return tr;case 34:case 39:e!==34&&e!==39&&Uy(Lt);break;case 40:e===41&&Uy(e);break;case 92:pr();break}return tr}function cL(e,t){for(;pr()&&e+Lt!==57;)if(e+Lt===84&&fo()===47)break;return"/*"+Ph(t,tr-1)+"*"+Gv(e===47?e:pr())}function uL(e){for(;!$y(fo());)pr();return Ph(e,tr)}function dL(e){return oL(wf("",null,null,null,[""],e=sL(e),0,[0],e))}function wf(e,t,n,i,o,l,u,f,p){for(var h=0,y=0,_=u,v=0,b=0,x=0,O=1,C=1,I=1,M=0,R="",D=o,N=l,A=i,P=R;C;)switch(x=M,M=pr()){case 40:if(x!=108&&qt(P,_-1)==58){Sf(P+=Be(kg(M),"&","&\f"),"&\f",HC(h?f[h-1]:0))!=-1&&(I=-1);break}case 34:case 39:case 91:P+=kg(M);break;case 9:case 10:case 13:case 32:P+=aL(x);break;case 92:P+=lL(xf()-1,7);continue;case 47:switch(fo()){case 42:case 47:Sc(fL(cL(pr(),xf()),t,n,p),p);break;default:P+="/"}break;case 123*O:f[h++]=Dr(P)*I;case 125*O:case 59:case 0:switch(M){case 0:case 125:C=0;case 59+y:I==-1&&(P=Be(P,/\f/g,"")),b>0&&Dr(P)-_&&Sc(b>32?z1(P+";",i,n,_-1,p):z1(Be(P," ","")+";",i,n,_-2,p),p);break;case 59:P+=";";default:if(Sc(A=U1(P,t,n,h,y,o,f,R,D=[],N=[],_,l),l),M===123)if(y===0)wf(P,t,A,A,D,l,_,f,N);else switch(v===99&&qt(P,3)===110?100:v){case 100:case 108:case 109:case 115:wf(e,A,A,i&&Sc(U1(e,A,A,0,0,o,f,R,o,D=[],_,N),N),o,N,_,f,i?D:N);break;default:wf(P,A,A,A,[""],N,0,f,N)}}h=y=b=0,O=I=1,R=P="",_=u;break;case 58:_=1+Dr(P),b=x;default:if(O<1){if(M==123)--O;else if(M==125&&O++==0&&iL()==125)continue}switch(P+=Gv(M),M*O){case 38:I=y>0?1:(P+="\f",-1);break;case 44:f[h++]=(Dr(P)-1)*I,I=1;break;case 64:fo()===45&&(P+=kg(pr())),v=fo(),y=_=Dr(R=P+=uL(xf())),M++;break;case 45:x===45&&Dr(P)==2&&(O=0)}}return l}function U1(e,t,n,i,o,l,u,f,p,h,y,_){for(var v=o-1,b=o===0?l:[""],x=qC(b),O=0,C=0,I=0;O<i;++O)for(var M=0,R=Oa(e,v+1,v=HC(C=u[O])),D=e;M<x;++M)(D=FC(C>0?b[M]+" "+R:Be(R,/&\f/g,b[M])))&&(p[I++]=D);return Lh(e,t,n,o===0?Nh:f,p,h,y,_)}function fL(e,t,n,i){return Lh(e,t,n,zC,Gv(rL()),Oa(e,2,-2),0,i)}function z1(e,t,n,i,o){return Lh(e,t,n,Vv,Oa(e,0,i),Oa(e,i+1,-1),i,o)}function GC(e,t,n){switch(tL(e,t)){case 5103:return tt+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return tt+e+e;case 4789:return Rc+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return tt+e+Rc+e+mt+e+e;case 5936:switch(qt(e,t+11)){case 114:return tt+e+mt+Be(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return tt+e+mt+Be(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return tt+e+mt+Be(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return tt+e+mt+e+e;case 6165:return tt+e+mt+"flex-"+e+e;case 5187:return tt+e+Be(e,/(\w+).+(:[^]+)/,tt+"box-$1$2"+mt+"flex-$1$2")+e;case 5443:return tt+e+mt+"flex-item-"+Be(e,/flex-|-self/g,"")+(li(e,/flex-|baseline/)?"":mt+"grid-row-"+Be(e,/flex-|-self/g,""))+e;case 4675:return tt+e+mt+"flex-line-pack"+Be(e,/align-content|flex-|-self/g,"")+e;case 5548:return tt+e+mt+Be(e,"shrink","negative")+e;case 5292:return tt+e+mt+Be(e,"basis","preferred-size")+e;case 6060:return tt+"box-"+Be(e,"-grow","")+tt+e+mt+Be(e,"grow","positive")+e;case 4554:return tt+Be(e,/([^-])(transform)/g,"$1"+tt+"$2")+e;case 6187:return Be(Be(Be(e,/(zoom-|grab)/,tt+"$1"),/(image-set)/,tt+"$1"),e,"")+e;case 5495:case 3959:return Be(e,/(image-set\([^]*)/,tt+"$1$`$1");case 4968:return Be(Be(e,/(.+:)(flex-)?(.*)/,tt+"box-pack:$3"+mt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+tt+e+e;case 4200:if(!li(e,/flex-|baseline/))return mt+"grid-column-align"+Oa(e,t)+e;break;case 2592:case 3360:return mt+Be(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(i,o){return t=o,li(i.props,/grid-\w+-end/)})?~Sf(e+(n=n[t].value),"span",0)?e:mt+Be(e,"-start","")+e+mt+"grid-row-span:"+(~Sf(n,"span",0)?li(n,/\d+/):+li(n,/\d+/)-+li(e,/\d+/))+";":mt+Be(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(i){return li(i.props,/grid-\w+-start/)})?e:mt+Be(Be(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Be(e,/(.+)-inline(.+)/,tt+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Dr(e)-1-t>6)switch(qt(e,t+1)){case 109:if(qt(e,t+4)!==45)break;case 102:return Be(e,/(.+:)(.+)-([^]+)/,"$1"+tt+"$2-$3$1"+Rc+(qt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Sf(e,"stretch",0)?GC(Be(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Be(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,o,l,u,f,p,h){return mt+o+":"+l+h+(u?mt+o+"-span:"+(f?p:+p-+l)+h:"")+e});case 4949:if(qt(e,t+6)===121)return Be(e,":",":"+tt)+e;break;case 6444:switch(qt(e,qt(e,14)===45?18:11)){case 120:return Be(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+tt+(qt(e,14)===45?"inline-":"")+"box$3$1"+tt+"$2$3$1"+mt+"$2box$3")+e;case 100:return Be(e,":",":"+mt)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Be(e,"scroll-","scroll-snap-")+e}return e}function $f(e,t){for(var n="",i=0;i<e.length;i++)n+=t(e[i],i,e,t)||"";return n}function hL(e,t,n,i){switch(e.type){case eL:if(e.children.length)break;case J2:case Vv:return e.return=e.return||e.value;case zC:return"";case BC:return e.return=e.value+"{"+$f(e.children,i)+"}";case Nh:if(!Dr(e.value=e.props.join(",")))return""}return Dr(n=$f(e.children,i))?e.return=e.value+"{"+n+"}":""}function pL(e){var t=qC(e);return function(n,i,o,l){for(var u="",f=0;f<t;f++)u+=e[f](n,i,o,l)||"";return u}}function mL(e){return function(t){t.root||(t=t.return)&&e(t)}}function gL(e,t,n,i){if(e.length>-1&&!e.return)switch(e.type){case Vv:e.return=GC(e.value,e.length,n);return;case BC:return $f([ts(e,{value:Be(e.value,"@","@"+tt)})],i);case Nh:if(e.length)return nL(n=e.props,function(o){switch(li(o,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ma(ts(e,{props:[Be(o,/:(read-\w+)/,":"+Rc+"$1")]})),ma(ts(e,{props:[o]})),jy(e,{props:$1(n,i)});break;case"::placeholder":ma(ts(e,{props:[Be(o,/:(plac\w+)/,":"+tt+"input-$1")]})),ma(ts(e,{props:[Be(o,/:(plac\w+)/,":"+Rc+"$1")]})),ma(ts(e,{props:[Be(o,/:(plac\w+)/,mt+"input-$1")]})),ma(ts(e,{props:[o]})),jy(e,{props:$1(n,i)});break}return""})}}var yL={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},On={},Na=typeof process<"u"&&On!==void 0&&(On.REACT_APP_SC_ATTR||On.SC_ATTR)||"data-styled",WC="active",YC="data-styled-version",jh="6.1.19",Wv=`/*!sc*/
`,Uf=typeof window<"u"&&typeof document<"u",vL=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&On!==void 0&&On.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&On.REACT_APP_SC_DISABLE_SPEEDY!==""?On.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&On.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&On!==void 0&&On.SC_DISABLE_SPEEDY!==void 0&&On.SC_DISABLE_SPEEDY!==""&&On.SC_DISABLE_SPEEDY!=="false"&&On.SC_DISABLE_SPEEDY),_L={},$h=Object.freeze([]),Ma=Object.freeze({});function QC(e,t,n){return n===void 0&&(n=Ma),e.theme!==n.theme&&e.theme||t||n.theme}var KC=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),bL=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,SL=/(^-|-$)/g;function B1(e){return e.replace(bL,"-").replace(SL,"")}var xL=/(a)(d)/gi,Kd=52,H1=function(e){return String.fromCharCode(e+(e>25?39:97))};function zy(e){var t,n="";for(t=Math.abs(e);t>Kd;t=t/Kd|0)n=H1(t%Kd)+n;return(H1(t%Kd)+n).replace(xL,"$1-$2")}var Ng,XC=5381,Sa=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ZC=function(e){return Sa(XC,e)};function JC(e){return zy(ZC(e)>>>0)}function wL(e){return e.displayName||e.name||"Component"}function Mg(e){return typeof e=="string"&&!0}var eR=typeof Symbol=="function"&&Symbol.for,tR=eR?Symbol.for("react.memo"):60115,EL=eR?Symbol.for("react.forward_ref"):60112,TL={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},CL={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},nR={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},RL=((Ng={})[EL]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ng[tR]=nR,Ng);function F1(e){return("type"in(t=e)&&t.type.$$typeof)===tR?nR:"$$typeof"in e?RL[e.$$typeof]:TL;var t}var AL=Object.defineProperty,IL=Object.getOwnPropertyNames,q1=Object.getOwnPropertySymbols,DL=Object.getOwnPropertyDescriptor,OL=Object.getPrototypeOf,V1=Object.prototype;function rR(e,t,n){if(typeof t!="string"){if(V1){var i=OL(t);i&&i!==V1&&rR(e,i,n)}var o=IL(t);q1&&(o=o.concat(q1(t)));for(var l=F1(e),u=F1(t),f=0;f<o.length;++f){var p=o[f];if(!(p in CL||n&&n[p]||u&&p in u||l&&p in l)){var h=DL(t,p);try{AL(e,p,h)}catch{}}}}return e}function ho(e){return typeof e=="function"}function Yv(e){return typeof e=="object"&&"styledComponentId"in e}function ao(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function By(e,t){if(e.length===0)return"";for(var n=e[0],i=1;i<e.length;i++)n+=e[i];return n}function qc(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Hy(e,t,n){if(n===void 0&&(n=!1),!n&&!qc(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var i=0;i<t.length;i++)e[i]=Hy(e[i],t[i]);else if(qc(t))for(var i in t)e[i]=Hy(e[i],t[i]);return e}function Qv(e,t){Object.defineProperty(e,"toString",{value:t})}function gs(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var kL=(function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,i=0;i<t;i++)n+=this.groupSizes[i];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,l=o;t>=l;)if((l<<=1)<0)throw gs(16,"".concat(t));this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var u=o;u<l;u++)this.groupSizes[u]=0}for(var f=this.indexOfGroup(t+1),p=(u=0,n.length);u<p;u++)this.tag.insertRule(f,n[u])&&(this.groupSizes[t]++,f++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],i=this.indexOfGroup(t),o=i+n;this.groupSizes[t]=0;for(var l=i;l<o;l++)this.tag.deleteRule(i)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var i=this.groupSizes[t],o=this.indexOfGroup(t),l=o+i,u=o;u<l;u++)n+="".concat(this.tag.getRule(u)).concat(Wv);return n},e})(),Ef=new Map,zf=new Map,Tf=1,Xd=function(e){if(Ef.has(e))return Ef.get(e);for(;zf.has(Tf);)Tf++;var t=Tf++;return Ef.set(e,t),zf.set(t,e),t},NL=function(e,t){Tf=t+1,Ef.set(e,t),zf.set(t,e)},ML="style[".concat(Na,"][").concat(YC,'="').concat(jh,'"]'),LL=new RegExp("^".concat(Na,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),PL=function(e,t,n){for(var i,o=n.split(","),l=0,u=o.length;l<u;l++)(i=o[l])&&e.registerName(t,i)},jL=function(e,t){for(var n,i=((n=t.textContent)!==null&&n!==void 0?n:"").split(Wv),o=[],l=0,u=i.length;l<u;l++){var f=i[l].trim();if(f){var p=f.match(LL);if(p){var h=0|parseInt(p[1],10),y=p[2];h!==0&&(NL(y,h),PL(e,y,p[3]),e.getTag().insertRules(h,o)),o.length=0}else o.push(f)}}},G1=function(e){for(var t=document.querySelectorAll(ML),n=0,i=t.length;n<i;n++){var o=t[n];o&&o.getAttribute(Na)!==WC&&(jL(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function $L(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var iR=function(e){var t=document.head,n=e||t,i=document.createElement("style"),o=(function(f){var p=Array.from(f.querySelectorAll("style[".concat(Na,"]")));return p[p.length-1]})(n),l=o!==void 0?o.nextSibling:null;i.setAttribute(Na,WC),i.setAttribute(YC,jh);var u=$L();return u&&i.setAttribute("nonce",u),n.insertBefore(i,l),i},UL=(function(){function e(t){this.element=iR(t),this.element.appendChild(document.createTextNode("")),this.sheet=(function(n){if(n.sheet)return n.sheet;for(var i=document.styleSheets,o=0,l=i.length;o<l;o++){var u=i[o];if(u.ownerNode===n)return u}throw gs(17)})(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e})(),zL=(function(){function e(t){this.element=iR(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var i=document.createTextNode(n);return this.element.insertBefore(i,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e})(),BL=(function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e})(),W1=Uf,HL={isServer:!Uf,useCSSOMInjection:!vL},Bf=(function(){function e(t,n,i){t===void 0&&(t=Ma),n===void 0&&(n={});var o=this;this.options=Gt(Gt({},HL),t),this.gs=n,this.names=new Map(i),this.server=!!t.isServer,!this.server&&Uf&&W1&&(W1=!1,G1(this)),Qv(this,function(){return(function(l){for(var u=l.getTag(),f=u.length,p="",h=function(_){var v=(function(I){return zf.get(I)})(_);if(v===void 0)return"continue";var b=l.names.get(v),x=u.getGroup(_);if(b===void 0||!b.size||x.length===0)return"continue";var O="".concat(Na,".g").concat(_,'[id="').concat(v,'"]'),C="";b!==void 0&&b.forEach(function(I){I.length>0&&(C+="".concat(I,","))}),p+="".concat(x).concat(O,'{content:"').concat(C,'"}').concat(Wv)},y=0;y<f;y++)h(y);return p})(o)})}return e.registerId=function(t){return Xd(t)},e.prototype.rehydrate=function(){!this.server&&Uf&&G1(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Gt(Gt({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=(function(n){var i=n.useCSSOMInjection,o=n.target;return n.isServer?new BL(o):i?new UL(o):new zL(o)})(this.options),new kL(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Xd(t),this.names.has(t))this.names.get(t).add(n);else{var i=new Set;i.add(n),this.names.set(t,i)}},e.prototype.insertRules=function(t,n,i){this.registerName(t,n),this.getTag().insertRules(Xd(t),i)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Xd(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e})(),FL=/&/g,qL=/^\s*\/\/.*$/gm;function sR(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(i){return"".concat(t," ").concat(i)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=sR(n.children,t)),n})}function VL(e){var t,n,i,o=Ma,l=o.options,u=l===void 0?Ma:l,f=o.plugins,p=f===void 0?$h:f,h=function(v,b,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):v},y=p.slice();y.push(function(v){v.type===Nh&&v.value.includes("&")&&(v.props[0]=v.props[0].replace(FL,n).replace(i,h))}),u.prefix&&y.push(gL),y.push(hL);var _=function(v,b,x,O){b===void 0&&(b=""),x===void 0&&(x=""),O===void 0&&(O="&"),t=O,n=b,i=new RegExp("\\".concat(n,"\\b"),"g");var C=v.replace(qL,""),I=dL(x||b?"".concat(x," ").concat(b," { ").concat(C," }"):C);u.namespace&&(I=sR(I,u.namespace));var M=[];return $f(I,pL(y.concat(mL(function(R){return M.push(R)})))),M};return _.hash=p.length?p.reduce(function(v,b){return b.name||gs(15),Sa(v,b.name)},XC).toString():"",_}var GL=new Bf,Fy=VL(),oR=dr.createContext({shouldForwardProp:void 0,styleSheet:GL,stylis:Fy});oR.Consumer;dr.createContext(void 0);function qy(){return E.useContext(oR)}var WL=(function(){function e(t,n){var i=this;this.inject=function(o,l){l===void 0&&(l=Fy);var u=i.name+l.hash;o.hasNameForId(i.id,u)||o.insertRules(i.id,u,l(i.rules,u,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Qv(this,function(){throw gs(12,String(i.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Fy),this.name+t.hash},e})(),YL=function(e){return e>="A"&&e<="Z"};function Y1(e){for(var t="",n=0;n<e.length;n++){var i=e[n];if(n===1&&i==="-"&&e[0]==="-")return e;YL(i)?t+="-"+i.toLowerCase():t+=i}return t.startsWith("ms-")?"-"+t:t}var aR=function(e){return e==null||e===!1||e===""},lR=function(e){var t,n,i=[];for(var o in e){var l=e[o];e.hasOwnProperty(o)&&!aR(l)&&(Array.isArray(l)&&l.isCss||ho(l)?i.push("".concat(Y1(o),":"),l,";"):qc(l)?i.push.apply(i,Fc(Fc(["".concat(o," {")],lR(l),!1),["}"],!1)):i.push("".concat(Y1(o),": ").concat((t=o,(n=l)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in yL||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function cs(e,t,n,i){if(aR(e))return[];if(Yv(e))return[".".concat(e.styledComponentId)];if(ho(e)){if(!ho(l=e)||l.prototype&&l.prototype.isReactComponent||!t)return[e];var o=e(t);return cs(o,t,n,i)}var l;return e instanceof WL?n?(e.inject(n,i),[e.getName(i)]):[e]:qc(e)?lR(e):Array.isArray(e)?Array.prototype.concat.apply($h,e.map(function(u){return cs(u,t,n,i)})):[e.toString()]}function cR(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ho(n)&&!Yv(n))return!1}return!0}var QL=ZC(jh),KL=(function(){function e(t,n,i){this.rules=t,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&cR(t),this.componentId=n,this.baseHash=Sa(QL,n),this.baseStyle=i,Bf.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,i){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=ao(o,this.staticRulesId);else{var l=By(cs(this.rules,t,n,i)),u=zy(Sa(this.baseHash,l)>>>0);if(!n.hasNameForId(this.componentId,u)){var f=i(l,".".concat(u),void 0,this.componentId);n.insertRules(this.componentId,u,f)}o=ao(o,u),this.staticRulesId=u}else{for(var p=Sa(this.baseHash,i.hash),h="",y=0;y<this.rules.length;y++){var _=this.rules[y];if(typeof _=="string")h+=_;else if(_){var v=By(cs(_,t,n,i));p=Sa(p,v+y),h+=v}}if(h){var b=zy(p>>>0);n.hasNameForId(this.componentId,b)||n.insertRules(this.componentId,b,i(h,".".concat(b),void 0,this.componentId)),o=ao(o,b)}}return o},e})(),La=dr.createContext(void 0);La.Consumer;function Kv(){var e=E.useContext(La);if(!e)throw gs(18);return e}function XL(e){var t=dr.useContext(La),n=E.useMemo(function(){return(function(i,o){if(!i)throw gs(14);if(ho(i)){var l=i(o);return l}if(Array.isArray(i)||typeof i!="object")throw gs(8);return o?Gt(Gt({},o),i):i})(e.theme,t)},[e.theme,t]);return e.children?dr.createElement(La.Provider,{value:n},e.children):null}var Lg={};function ZL(e,t,n){var i=Yv(e),o=e,l=!Mg(e),u=t.attrs,f=u===void 0?$h:u,p=t.componentId,h=p===void 0?(function(D,N){var A=typeof D!="string"?"sc":B1(D);Lg[A]=(Lg[A]||0)+1;var P="".concat(A,"-").concat(JC(jh+A+Lg[A]));return N?"".concat(N,"-").concat(P):P})(t.displayName,t.parentComponentId):p,y=t.displayName,_=y===void 0?(function(D){return Mg(D)?"styled.".concat(D):"Styled(".concat(wL(D),")")})(e):y,v=t.displayName&&t.componentId?"".concat(B1(t.displayName),"-").concat(t.componentId):t.componentId||h,b=i&&o.attrs?o.attrs.concat(f).filter(Boolean):f,x=t.shouldForwardProp;if(i&&o.shouldForwardProp){var O=o.shouldForwardProp;if(t.shouldForwardProp){var C=t.shouldForwardProp;x=function(D,N){return O(D,N)&&C(D,N)}}else x=O}var I=new KL(n,v,i?o.componentStyle:void 0);function M(D,N){return(function(A,P,U){var F=A.attrs,H=A.componentStyle,z=A.defaultProps,G=A.foldedComponentIds,V=A.styledComponentId,te=A.target,ue=dr.useContext(La),j=qy(),K=A.shouldForwardProp||j.shouldForwardProp,ne=QC(P,ue,z)||Ma,ae=(function(me,pe,Ie){for(var be,Oe=Gt(Gt({},pe),{className:void 0,theme:Ie}),Ue=0;Ue<me.length;Ue+=1){var _t=ho(be=me[Ue])?be(Oe):be;for(var gt in _t)Oe[gt]=gt==="className"?ao(Oe[gt],_t[gt]):gt==="style"?Gt(Gt({},Oe[gt]),_t[gt]):_t[gt]}return pe.className&&(Oe.className=ao(Oe.className,pe.className)),Oe})(F,P,ne),k=ae.as||te,X={};for(var le in ae)ae[le]===void 0||le[0]==="$"||le==="as"||le==="theme"&&ae.theme===ne||(le==="forwardedAs"?X.as=ae.forwardedAs:K&&!K(le,k)||(X[le]=ae[le]));var ie=(function(me,pe){var Ie=qy(),be=me.generateAndInjectStyles(pe,Ie.styleSheet,Ie.stylis);return be})(H,ae),de=ao(G,V);return ie&&(de+=" "+ie),ae.className&&(de+=" "+ae.className),X[Mg(k)&&!KC.has(k)?"class":"className"]=de,U&&(X.ref=U),E.createElement(k,X)})(R,D,N)}M.displayName=_;var R=dr.forwardRef(M);return R.attrs=b,R.componentStyle=I,R.displayName=_,R.shouldForwardProp=x,R.foldedComponentIds=i?ao(o.foldedComponentIds,o.styledComponentId):"",R.styledComponentId=v,R.target=i?o.target:e,Object.defineProperty(R,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(D){this._foldedDefaultProps=i?(function(N){for(var A=[],P=1;P<arguments.length;P++)A[P-1]=arguments[P];for(var U=0,F=A;U<F.length;U++)Hy(N,F[U],!0);return N})({},o.defaultProps,D):D}}),Qv(R,function(){return".".concat(R.styledComponentId)}),l&&rR(R,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),R}function Q1(e,t){for(var n=[e[0]],i=0,o=t.length;i<o;i+=1)n.push(t[i],e[i+1]);return n}var K1=function(e){return Object.assign(e,{isCss:!0})};function nn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(ho(e)||qc(e))return K1(cs(Q1($h,Fc([e],t,!0))));var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?cs(i):K1(cs(Q1(i,t)))}function Vy(e,t,n){if(n===void 0&&(n=Ma),!t)throw gs(1,t);var i=function(o){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];return e(t,n,nn.apply(void 0,Fc([o],l,!1)))};return i.attrs=function(o){return Vy(e,t,Gt(Gt({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},i.withConfig=function(o){return Vy(e,t,Gt(Gt({},n),o))},i}var uR=function(e){return Vy(ZL,e)},T=uR;KC.forEach(function(e){T[e]=uR(e)});var JL=(function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=cR(t),Bf.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,i,o){var l=o(By(cs(this.rules,n,i,o)),""),u=this.componentId+t;i.insertRules(u,u,l)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,i,o){t>2&&Bf.registerId(this.componentId+t),this.removeStyles(t,i),this.createStyles(t,n,i,o)},e})();function eP(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var i=nn.apply(void 0,Fc([e],t,!1)),o="sc-global-".concat(JC(JSON.stringify(i))),l=new JL(i,o),u=function(p){var h=qy(),y=dr.useContext(La),_=dr.useRef(h.styleSheet.allocateGSInstance(o)).current;return h.styleSheet.server&&f(_,p,h.styleSheet,y,h.stylis),dr.useLayoutEffect(function(){if(!h.styleSheet.server)return f(_,p,h.styleSheet,y,h.stylis),function(){return l.removeStyles(_,h.styleSheet)}},[_,p,h.styleSheet,y,h.stylis]),null};function f(p,h,y,_,v){if(l.isStatic)l.renderStyles(p,_L,y,v);else{var b=Gt(Gt({},h),{theme:QC(h,_,u.defaultProps)});l.renderStyles(p,b,y,v)}}return dr.memo(u)}const Ta=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__,ys=globalThis,Ac="10.11.0";function dR(){return Xv(ys),ys}function Xv(e){const t=e.__SENTRY__=e.__SENTRY__||{};return t.version=t.version||Ac,t[Ac]=t[Ac]||{}}function Zv(e,t,n=ys){const i=n.__SENTRY__=n.__SENTRY__||{},o=i[Ac]=i[Ac]||{};return o[e]||(o[e]=t())}const tP="Sentry Logger ",X1={};function nP(e){if(!("console"in ys))return e();const t=ys.console,n={},i=Object.keys(X1);i.forEach(o=>{const l=X1[o];n[o]=t[o],t[o]=l});try{return e()}finally{i.forEach(o=>{t[o]=n[o]})}}function rP(){e_().enabled=!0}function iP(){e_().enabled=!1}function fR(){return e_().enabled}function sP(...e){Jv("log",...e)}function oP(...e){Jv("warn",...e)}function aP(...e){Jv("error",...e)}function Jv(e,...t){Ta&&fR()&&nP(()=>{ys.console[e](`${tP}[${e}]:`,...t)})}function e_(){return Ta?Zv("loggerSettings",()=>({enabled:!1})):{enabled:!1}}const Cf={enable:rP,disable:iP,isEnabled:fR,log:sP,warn:oP,error:aP},lP=Object.prototype.toString;function cP(e,t){return lP.call(e)===`[object ${t}]`}function uP(e){return cP(e,"Object")}function dP(e){return!!(e?.then&&typeof e.then=="function")}function fP(e,t=0){return typeof e!="string"||t===0||e.length<=t?e:`${e.slice(0,t)}...`}function hP(e,t,n){try{Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0})}catch{Ta&&Cf.log(`Failed to add non-enumerable property "${t}" to object`,e)}}function pP(){const e=ys;return e.crypto||e.msCrypto}function Ic(e=pP()){let t=()=>Math.random()*16;try{if(e?.randomUUID)return e.randomUUID().replace(/-/g,"");e?.getRandomValues&&(t=()=>{const n=new Uint8Array(1);return e.getRandomValues(n),n[0]})}catch{}return("10000000100040008000"+1e11).replace(/[018]/g,n=>(n^(t()&15)>>n/4).toString(16))}const hR=1e3;function pR(){return Date.now()/hR}function mP(){const{performance:e}=ys;if(!e?.now||!e.timeOrigin)return pR;const t=e.timeOrigin;return()=>(t+e.now())/hR}let Z1;function gP(){return(Z1??(Z1=mP()))()}function yP(e,t={}){if(t.user&&(!e.ipAddress&&t.user.ip_address&&(e.ipAddress=t.user.ip_address),!e.did&&!t.did&&(e.did=t.user.id||t.user.email||t.user.username)),e.timestamp=t.timestamp||gP(),t.abnormal_mechanism&&(e.abnormal_mechanism=t.abnormal_mechanism),t.ignoreDuration&&(e.ignoreDuration=t.ignoreDuration),t.sid&&(e.sid=t.sid.length===32?t.sid:Ic()),t.init!==void 0&&(e.init=t.init),!e.did&&t.did&&(e.did=`${t.did}`),typeof t.started=="number"&&(e.started=t.started),e.ignoreDuration)e.duration=void 0;else if(typeof t.duration=="number")e.duration=t.duration;else{const n=e.timestamp-e.started;e.duration=n>=0?n:0}t.release&&(e.release=t.release),t.environment&&(e.environment=t.environment),!e.ipAddress&&t.ipAddress&&(e.ipAddress=t.ipAddress),!e.userAgent&&t.userAgent&&(e.userAgent=t.userAgent),typeof t.errors=="number"&&(e.errors=t.errors),t.status&&(e.status=t.status)}function mR(e,t,n=2){if(!t||typeof t!="object"||n<=0)return t;if(e&&Object.keys(t).length===0)return e;const i={...e};for(const o in t)Object.prototype.hasOwnProperty.call(t,o)&&(i[o]=mR(i[o],t[o],n-1));return i}function J1(){return Ic()}const Gy="_sentrySpan";function ew(e,t){t?hP(e,Gy,t):delete e[Gy]}function tw(e){return e[Gy]}const vP=100;class po{constructor(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._attachments=[],this._user={},this._tags={},this._extra={},this._contexts={},this._sdkProcessingMetadata={},this._propagationContext={traceId:J1(),sampleRand:Math.random()}}clone(){const t=new po;return t._breadcrumbs=[...this._breadcrumbs],t._tags={...this._tags},t._extra={...this._extra},t._contexts={...this._contexts},this._contexts.flags&&(t._contexts.flags={values:[...this._contexts.flags.values]}),t._user=this._user,t._level=this._level,t._session=this._session,t._transactionName=this._transactionName,t._fingerprint=this._fingerprint,t._eventProcessors=[...this._eventProcessors],t._attachments=[...this._attachments],t._sdkProcessingMetadata={...this._sdkProcessingMetadata},t._propagationContext={...this._propagationContext},t._client=this._client,t._lastEventId=this._lastEventId,ew(t,tw(this)),t}setClient(t){this._client=t}setLastEventId(t){this._lastEventId=t}getClient(){return this._client}lastEventId(){return this._lastEventId}addScopeListener(t){this._scopeListeners.push(t)}addEventProcessor(t){return this._eventProcessors.push(t),this}setUser(t){return this._user=t||{email:void 0,id:void 0,ip_address:void 0,username:void 0},this._session&&yP(this._session,{user:t}),this._notifyScopeListeners(),this}getUser(){return this._user}setTags(t){return this._tags={...this._tags,...t},this._notifyScopeListeners(),this}setTag(t,n){return this._tags={...this._tags,[t]:n},this._notifyScopeListeners(),this}setExtras(t){return this._extra={...this._extra,...t},this._notifyScopeListeners(),this}setExtra(t,n){return this._extra={...this._extra,[t]:n},this._notifyScopeListeners(),this}setFingerprint(t){return this._fingerprint=t,this._notifyScopeListeners(),this}setLevel(t){return this._level=t,this._notifyScopeListeners(),this}setTransactionName(t){return this._transactionName=t,this._notifyScopeListeners(),this}setContext(t,n){return n===null?delete this._contexts[t]:this._contexts[t]=n,this._notifyScopeListeners(),this}setSession(t){return t?this._session=t:delete this._session,this._notifyScopeListeners(),this}getSession(){return this._session}update(t){if(!t)return this;const n=typeof t=="function"?t(this):t,i=n instanceof po?n.getScopeData():uP(n)?t:void 0,{tags:o,extra:l,user:u,contexts:f,level:p,fingerprint:h=[],propagationContext:y}=i||{};return this._tags={...this._tags,...o},this._extra={...this._extra,...l},this._contexts={...this._contexts,...f},u&&Object.keys(u).length&&(this._user=u),p&&(this._level=p),h.length&&(this._fingerprint=h),y&&(this._propagationContext=y),this}clear(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._session=void 0,ew(this,void 0),this._attachments=[],this.setPropagationContext({traceId:J1(),sampleRand:Math.random()}),this._notifyScopeListeners(),this}addBreadcrumb(t,n){const i=typeof n=="number"?n:vP;if(i<=0)return this;const o={timestamp:pR(),...t,message:t.message?fP(t.message,2048):t.message};return this._breadcrumbs.push(o),this._breadcrumbs.length>i&&(this._breadcrumbs=this._breadcrumbs.slice(-i),this._client?.recordDroppedEvent("buffer_overflow","log_item")),this._notifyScopeListeners(),this}getLastBreadcrumb(){return this._breadcrumbs[this._breadcrumbs.length-1]}clearBreadcrumbs(){return this._breadcrumbs=[],this._notifyScopeListeners(),this}addAttachment(t){return this._attachments.push(t),this}clearAttachments(){return this._attachments=[],this}getScopeData(){return{breadcrumbs:this._breadcrumbs,attachments:this._attachments,contexts:this._contexts,tags:this._tags,extra:this._extra,user:this._user,level:this._level,fingerprint:this._fingerprint||[],eventProcessors:this._eventProcessors,propagationContext:this._propagationContext,sdkProcessingMetadata:this._sdkProcessingMetadata,transactionName:this._transactionName,span:tw(this)}}setSDKProcessingMetadata(t){return this._sdkProcessingMetadata=mR(this._sdkProcessingMetadata,t,2),this}setPropagationContext(t){return this._propagationContext=t,this}getPropagationContext(){return this._propagationContext}captureException(t,n){const i=n?.event_id||Ic();if(!this._client)return Ta&&Cf.warn("No client configured on scope - will not capture exception!"),i;const o=new Error("Sentry syntheticException");return this._client.captureException(t,{originalException:t,syntheticException:o,...n,event_id:i},this),i}captureMessage(t,n,i){const o=i?.event_id||Ic();if(!this._client)return Ta&&Cf.warn("No client configured on scope - will not capture message!"),o;const l=new Error(t);return this._client.captureMessage(t,n,{originalException:t,syntheticException:l,...i,event_id:o},this),o}captureEvent(t,n){const i=n?.event_id||Ic();return this._client?(this._client.captureEvent(t,{...n,event_id:i},this),i):(Ta&&Cf.warn("No client configured on scope - will not capture event!"),i)}_notifyScopeListeners(){this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach(t=>{t(this)}),this._notifyingListeners=!1)}}function _P(){return Zv("defaultCurrentScope",()=>new po)}function bP(){return Zv("defaultIsolationScope",()=>new po)}class SP{constructor(t,n){let i;t?i=t:i=new po;let o;n?o=n:o=new po,this._stack=[{scope:i}],this._isolationScope=o}withScope(t){const n=this._pushScope();let i;try{i=t(n)}catch(o){throw this._popScope(),o}return dP(i)?i.then(o=>(this._popScope(),o),o=>{throw this._popScope(),o}):(this._popScope(),i)}getClient(){return this.getStackTop().client}getScope(){return this.getStackTop().scope}getIsolationScope(){return this._isolationScope}getStackTop(){return this._stack[this._stack.length-1]}_pushScope(){const t=this.getScope().clone();return this._stack.push({client:this.getClient(),scope:t}),t}_popScope(){return this._stack.length<=1?!1:!!this._stack.pop()}}function Pa(){const e=dR(),t=Xv(e);return t.stack=t.stack||new SP(_P(),bP())}function xP(e){return Pa().withScope(e)}function wP(e,t){const n=Pa();return n.withScope(()=>(n.getStackTop().scope=e,t(e)))}function nw(e){return Pa().withScope(()=>e(Pa().getIsolationScope()))}function EP(){return{withIsolationScope:nw,withScope:xP,withSetScope:wP,withSetIsolationScope:(e,t)=>nw(t),getCurrentScope:()=>Pa().getScope(),getIsolationScope:()=>Pa().getIsolationScope()}}function TP(e){const t=Xv(e);return t.acs?t.acs:EP()}function gR(){const e=dR();return TP(e).getCurrentScope()}function Nr(e,t){return gR().captureException(e,void 0)}function t_(e,t){const n=typeof t=="string"?t:void 0,i=typeof t!="string"?{captureContext:t}:void 0;return gR().captureMessage(e,n,i)}const CP=()=>{};var rw={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yR={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he=function(e,t){if(!e)throw Ya(t)},Ya=function(e){return new Error("Firebase Database ("+yR.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vR=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let o=e.charCodeAt(i);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(e.charCodeAt(++i)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},RP=function(e){const t=[];let n=0,i=0;for(;n<e.length;){const o=e[n++];if(o<128)t[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=e[n++];t[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=e[n++],u=e[n++],f=e[n++],p=((o&7)<<18|(l&63)<<12|(u&63)<<6|f&63)-65536;t[i++]=String.fromCharCode(55296+(p>>10)),t[i++]=String.fromCharCode(56320+(p&1023))}else{const l=e[n++],u=e[n++];t[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|u&63)}}return t.join("")},n_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<e.length;o+=3){const l=e[o],u=o+1<e.length,f=u?e[o+1]:0,p=o+2<e.length,h=p?e[o+2]:0,y=l>>2,_=(l&3)<<4|f>>4;let v=(f&15)<<2|h>>6,b=h&63;p||(b=64,u||(v=64)),i.push(n[y],n[_],n[v],n[b])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(vR(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):RP(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<e.length;){const l=n[e.charAt(o++)],f=o<e.length?n[e.charAt(o)]:0;++o;const h=o<e.length?n[e.charAt(o)]:64;++o;const _=o<e.length?n[e.charAt(o)]:64;if(++o,l==null||f==null||h==null||_==null)throw new AP;const v=l<<2|f>>4;if(i.push(v),h!==64){const b=f<<4&240|h>>2;if(i.push(b),_!==64){const x=h<<6&192|_;i.push(x)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class AP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _R=function(e){const t=vR(e);return n_.encodeByteArray(t,!0)},Hf=function(e){return _R(e).replace(/\./g,"")},Ff=function(e){try{return n_.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IP(e){return bR(void 0,e)}function bR(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)!t.hasOwnProperty(n)||!DP(n)||(e[n]=bR(e[n],t[n]));return e}function DP(e){return e!=="__proto__"}/**
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
 */function OP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const kP=()=>OP().__FIREBASE_DEFAULTS__,NP=()=>{if(typeof process>"u"||typeof rw>"u")return;const e=rw.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},MP=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Ff(e[1]);return t&&JSON.parse(t)},r_=()=>{try{return CP()||kP()||NP()||MP()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},SR=e=>r_()?.emulatorHosts?.[e],LP=e=>{const t=SR(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),i]:[t.substring(0,n),i]},xR=()=>r_()?.config,wR=e=>r_()?.[`_${e}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,i))}}}/**
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
 */function Qa(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ER(e){return(await fetch(e,{credentials:"include"})).ok}/**
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
 */function PP(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",o=e.iat||0,l=e.sub||e.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u={iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...e};return[Hf(JSON.stringify(n)),Hf(JSON.stringify(u)),""].join(".")}const Dc={};function jP(){const e={prod:[],emulator:[]};for(const t of Object.keys(Dc))Dc[t]?e.emulator.push(t):e.prod.push(t);return e}function $P(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}let iw=!1;function TR(e,t){if(typeof window>"u"||typeof document>"u"||!Qa(window.location.host)||Dc[e]===t||Dc[e]||iw)return;Dc[e]=t;function n(v){return`__firebase__banner__${v}`}const i="__firebase__banner",l=jP().prod.length>0;function u(){const v=document.getElementById(i);v&&v.remove()}function f(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function p(v,b){v.setAttribute("width","24"),v.setAttribute("id",b),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function h(){const v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{iw=!0,u()},v}function y(v,b){v.setAttribute("id",b),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function _(){const v=$P(i),b=n("text"),x=document.getElementById(b)||document.createElement("span"),O=n("learnmore"),C=document.getElementById(O)||document.createElement("a"),I=n("preprendIcon"),M=document.getElementById(I)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){const R=v.element;f(R),y(C,O);const D=h();p(M,I),R.append(M,x,C,D),document.body.appendChild(R)}l?(x.innerText="Preview backend disconnected.",M.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function hn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function i_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(hn())}function UP(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function zP(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function CR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function BP(){const e=hn();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function HP(){return yR.NODE_ADMIN===!0}function RR(){try{return typeof indexedDB=="object"}catch{return!1}}function AR(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{t(o.error?.message||"")}}catch(n){t(n)}})}function FP(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qP="FirebaseError";class wi extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name=qP,Object.setPrototypeOf(this,wi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ro.prototype.create)}}class Ro{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},o=`${this.service}/${t}`,l=this.errors[t],u=l?VP(l,i):"Error",f=`${this.serviceName}: ${u} (${o}).`;return new wi(o,f,i)}}function VP(e,t){return e.replace(GP,(n,i)=>{const o=t[i];return o!=null?String(o):`<${i}?>`})}const GP=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(e){return JSON.parse(e)}function Ut(e){return JSON.stringify(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR=function(e){let t={},n={},i={},o="";try{const l=e.split(".");t=Vc(Ff(l[0])||""),n=Vc(Ff(l[1])||""),o=l[2],i=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:i,signature:o}},WP=function(e){const t=IR(e),n=t.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},YP=function(e){const t=IR(e).claims;return typeof t=="object"&&t.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ja(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function Wy(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function qf(e,t,n){const i={};for(const o in e)Object.prototype.hasOwnProperty.call(e,o)&&(i[o]=t.call(n,e[o],o,e));return i}function mo(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const o of n){if(!i.includes(o))return!1;const l=e[o],u=t[o];if(sw(l)&&sw(u)){if(!mo(l,u))return!1}else if(l!==u)return!1}for(const o of i)if(!n.includes(o))return!1;return!0}function sw(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(o=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function xc(e){const t={};return e.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");t[decodeURIComponent(o)]=decodeURIComponent(l)}}),t}function wc(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QP{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,n){n||(n=0);const i=this.W_;if(typeof t=="string")for(let _=0;_<16;_++)i[_]=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),n+=4;else for(let _=0;_<16;_++)i[_]=t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3],n+=4;for(let _=16;_<80;_++){const v=i[_-3]^i[_-8]^i[_-14]^i[_-16];i[_]=(v<<1|v>>>31)&4294967295}let o=this.chain_[0],l=this.chain_[1],u=this.chain_[2],f=this.chain_[3],p=this.chain_[4],h,y;for(let _=0;_<80;_++){_<40?_<20?(h=f^l&(u^f),y=1518500249):(h=l^u^f,y=1859775393):_<60?(h=l&u|f&(l|u),y=2400959708):(h=l^u^f,y=3395469782);const v=(o<<5|o>>>27)+h+p+y+i[_]&4294967295;p=f,f=u,u=(l<<30|l>>>2)&4294967295,l=o,o=v}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(t,n){if(t==null)return;n===void 0&&(n=t.length);const i=n-this.blockSize;let o=0;const l=this.buf_;let u=this.inbuf_;for(;o<n;){if(u===0)for(;o<=i;)this.compress_(t,o),o+=this.blockSize;if(typeof t=="string"){for(;o<n;)if(l[u]=t.charCodeAt(o),++u,++o,u===this.blockSize){this.compress_(l),u=0;break}}else for(;o<n;)if(l[u]=t[o],++u,++o,u===this.blockSize){this.compress_(l),u=0;break}}this.inbuf_=u,this.total_+=n}digest(){const t=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let o=0;o<5;o++)for(let l=24;l>=0;l-=8)t[i]=this.chain_[o]>>l&255,++i;return t}}function KP(e,t){const n=new XP(e,t);return n.subscribe.bind(n)}class XP{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,i){let o;if(t===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");ZP(t,["next","error","complete"])?o=t:o={next:t,error:n,complete:i},o.next===void 0&&(o.next=Pg),o.error===void 0&&(o.error=Pg),o.complete===void 0&&(o.complete=Pg);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ZP(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Pg(){}function Uh(e,t){return`${e} failed: ${t} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JP=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let o=e.charCodeAt(i);if(o>=55296&&o<=56319){const l=o-55296;i++,he(i<e.length,"Surrogate pair missing trail surrogate.");const u=e.charCodeAt(i)-56320;o=65536+(l<<10)+u}o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):o<65536?(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},zh=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};/**
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
 */function Wt(e){return e&&e._delegate?e._delegate:e}class _r{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const ro="[DEFAULT]";/**
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
 */class ej{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const i=new mu;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t?.identifier),i=t?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(nj(t))try{this.getOrInitializeService({instanceIdentifier:ro})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(t=ro){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ro){return this.instances.has(t)}getOptions(t=ro){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[l,u]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&u.resolve(o)}return o}onInit(t,n){const i=this.normalizeInstanceIdentifier(n),o=this.onInitCallbacks.get(i)??new Set;o.add(t),this.onInitCallbacks.set(i,o);const l=this.instances.get(i);return l&&t(l,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const i=this.onInitCallbacks.get(n);if(i)for(const o of i)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:tj(t),options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=ro){return this.component?this.component.multipleInstances?t:ro:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tj(e){return e===ro?void 0:e}function nj(e){return e.instantiationMode==="EAGER"}/**
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
 */class rj{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new ej(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ct||(ct={}));const ij={debug:ct.DEBUG,verbose:ct.VERBOSE,info:ct.INFO,warn:ct.WARN,error:ct.ERROR,silent:ct.SILENT},sj=ct.INFO,oj={[ct.DEBUG]:"log",[ct.VERBOSE]:"log",[ct.INFO]:"info",[ct.WARN]:"warn",[ct.ERROR]:"error"},aj=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),o=oj[t];if(o)console[o](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class s_{constructor(t){this.name=t,this._logLevel=sj,this._logHandler=aj,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ct))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ij[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ct.DEBUG,...t),this._logHandler(this,ct.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ct.VERBOSE,...t),this._logHandler(this,ct.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ct.INFO,...t),this._logHandler(this,ct.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ct.WARN,...t),this._logHandler(this,ct.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ct.ERROR,...t),this._logHandler(this,ct.ERROR,...t)}}const lj=(e,t)=>t.some(n=>e instanceof n);let ow,aw;function cj(){return ow||(ow=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uj(){return aw||(aw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const DR=new WeakMap,Yy=new WeakMap,OR=new WeakMap,jg=new WeakMap,o_=new WeakMap;function dj(e){const t=new Promise((n,i)=>{const o=()=>{e.removeEventListener("success",l),e.removeEventListener("error",u)},l=()=>{n(mi(e.result)),o()},u=()=>{i(e.error),o()};e.addEventListener("success",l),e.addEventListener("error",u)});return t.then(n=>{n instanceof IDBCursor&&DR.set(n,e)}).catch(()=>{}),o_.set(t,e),t}function fj(e){if(Yy.has(e))return;const t=new Promise((n,i)=>{const o=()=>{e.removeEventListener("complete",l),e.removeEventListener("error",u),e.removeEventListener("abort",u)},l=()=>{n(),o()},u=()=>{i(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",l),e.addEventListener("error",u),e.addEventListener("abort",u)});Yy.set(e,t)}let Qy={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Yy.get(e);if(t==="objectStoreNames")return e.objectStoreNames||OR.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mi(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function hj(e){Qy=e(Qy)}function pj(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const i=e.call($g(this),t,...n);return OR.set(i,t.sort?t.sort():[t]),mi(i)}:uj().includes(e)?function(...t){return e.apply($g(this),t),mi(DR.get(this))}:function(...t){return mi(e.apply($g(this),t))}}function mj(e){return typeof e=="function"?pj(e):(e instanceof IDBTransaction&&fj(e),lj(e,cj())?new Proxy(e,Qy):e)}function mi(e){if(e instanceof IDBRequest)return dj(e);if(jg.has(e))return jg.get(e);const t=mj(e);return t!==e&&(jg.set(e,t),o_.set(t,e)),t}const $g=e=>o_.get(e);function Bh(e,t,{blocked:n,upgrade:i,blocking:o,terminated:l}={}){const u=indexedDB.open(e,t),f=mi(u);return i&&u.addEventListener("upgradeneeded",p=>{i(mi(u.result),p.oldVersion,p.newVersion,mi(u.transaction),p)}),n&&u.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),f.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",h=>o(h.oldVersion,h.newVersion,h))}).catch(()=>{}),f}function Ug(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",i=>t(i.oldVersion,i)),mi(n).then(()=>{})}const gj=["get","getKey","getAll","getAllKeys","count"],yj=["put","add","delete","clear"],zg=new Map;function lw(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(zg.get(t))return zg.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,o=yj.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(o||gj.includes(n)))return;const l=async function(u,...f){const p=this.transaction(u,o?"readwrite":"readonly");let h=p.store;return i&&(h=h.index(f.shift())),(await Promise.all([h[n](...f),o&&p.done]))[0]};return zg.set(t,l),l}hj(e=>({...e,get:(t,n,i)=>lw(t,n)||e.get(t,n,i),has:(t,n)=>!!lw(t,n)||e.has(t,n)}));/**
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
 */class vj{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_j(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function _j(e){return e.getComponent()?.type==="VERSION"}const Ky="@firebase/app",cw="0.14.2";/**
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
 */const vi=new s_("@firebase/app"),bj="@firebase/app-compat",Sj="@firebase/analytics-compat",xj="@firebase/analytics",wj="@firebase/app-check-compat",Ej="@firebase/app-check",Tj="@firebase/auth",Cj="@firebase/auth-compat",Rj="@firebase/database",Aj="@firebase/data-connect",Ij="@firebase/database-compat",Dj="@firebase/functions",Oj="@firebase/functions-compat",kj="@firebase/installations",Nj="@firebase/installations-compat",Mj="@firebase/messaging",Lj="@firebase/messaging-compat",Pj="@firebase/performance",jj="@firebase/performance-compat",$j="@firebase/remote-config",Uj="@firebase/remote-config-compat",zj="@firebase/storage",Bj="@firebase/storage-compat",Hj="@firebase/firestore",Fj="@firebase/ai",qj="@firebase/firestore-compat",Vj="firebase",Gj="12.2.0";/**
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
 */const Xy="[DEFAULT]",Wj={[Ky]:"fire-core",[bj]:"fire-core-compat",[xj]:"fire-analytics",[Sj]:"fire-analytics-compat",[Ej]:"fire-app-check",[wj]:"fire-app-check-compat",[Tj]:"fire-auth",[Cj]:"fire-auth-compat",[Rj]:"fire-rtdb",[Aj]:"fire-data-connect",[Ij]:"fire-rtdb-compat",[Dj]:"fire-fn",[Oj]:"fire-fn-compat",[kj]:"fire-iid",[Nj]:"fire-iid-compat",[Mj]:"fire-fcm",[Lj]:"fire-fcm-compat",[Pj]:"fire-perf",[jj]:"fire-perf-compat",[$j]:"fire-rc",[Uj]:"fire-rc-compat",[zj]:"fire-gcs",[Bj]:"fire-gcs-compat",[Hj]:"fire-fst",[qj]:"fire-fst-compat",[Fj]:"fire-vertex","fire-js":"fire-js",[Vj]:"fire-js-all"};/**
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
 */const Vf=new Map,Yj=new Map,Zy=new Map;function uw(e,t){try{e.container.addComponent(t)}catch(n){vi.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Mr(e){const t=e.name;if(Zy.has(t))return vi.debug(`There were multiple attempts to register component ${t}.`),!1;Zy.set(t,e);for(const n of Vf.values())uw(n,e);for(const n of Yj.values())uw(n,e);return!0}function Xa(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Nn(e){return e==null?!1:e.settings!==void 0}/**
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
 */const Qj={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},us=new Ro("app","Firebase",Qj);/**
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
 */class Kj{constructor(t,n,i){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new _r("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw us.create("app-deleted",{appName:this._name})}}/**
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
 */const Za=Gj;function kR(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const i={name:Xy,automaticDataCollectionEnabled:!0,...t},o=i.name;if(typeof o!="string"||!o)throw us.create("bad-app-name",{appName:String(o)});if(n||(n=xR()),!n)throw us.create("no-options");const l=Vf.get(o);if(l){if(mo(n,l.options)&&mo(i,l.config))return l;throw us.create("duplicate-app",{appName:o})}const u=new rj(o);for(const p of Zy.values())u.addComponent(p);const f=new Kj(n,i,u);return Vf.set(o,f),f}function a_(e=Xy){const t=Vf.get(e);if(!t&&e===Xy&&xR())return kR();if(!t)throw us.create("no-app",{appName:e});return t}function Jn(e,t,n){let i=Wj[e]??e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),l=t.match(/\s|\//);if(o||l){const u=[`Unable to register library "${i}" with version "${t}":`];o&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&l&&u.push("and"),l&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),vi.warn(u.join(" "));return}Mr(new _r(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Xj="firebase-heartbeat-database",Zj=1,Gc="firebase-heartbeat-store";let Bg=null;function NR(){return Bg||(Bg=Bh(Xj,Zj,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Gc)}catch(n){console.warn(n)}}}}).catch(e=>{throw us.create("idb-open",{originalErrorMessage:e.message})})),Bg}async function Jj(e){try{const n=(await NR()).transaction(Gc),i=await n.objectStore(Gc).get(MR(e));return await n.done,i}catch(t){if(t instanceof wi)vi.warn(t.message);else{const n=us.create("idb-get",{originalErrorMessage:t?.message});vi.warn(n.message)}}}async function dw(e,t){try{const i=(await NR()).transaction(Gc,"readwrite");await i.objectStore(Gc).put(t,MR(e)),await i.done}catch(n){if(n instanceof wi)vi.warn(n.message);else{const i=us.create("idb-set",{originalErrorMessage:n?.message});vi.warn(i.message)}}}function MR(e){return`${e.name}!${e.options.appId}`}/**
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
 */const e4=1024,t4=30;class n4{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new i4(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=fw();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats.length>t4){const o=s4(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){vi.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=fw(),{heartbeatsToSend:n,unsentEntries:i}=r4(this._heartbeatsCache.heartbeats),o=Hf(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return vi.warn(t),""}}}function fw(){return new Date().toISOString().substring(0,10)}function r4(e,t=e4){const n=[];let i=e.slice();for(const o of e){const l=n.find(u=>u.agent===o.agent);if(l){if(l.dates.push(o.date),hw(n)>t){l.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),hw(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class i4{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return RR()?AR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Jj(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const i=await this.read();return dw(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const i=await this.read();return dw(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function hw(e){return Hf(JSON.stringify({version:2,heartbeats:e})).length}function s4(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let i=1;i<e.length;i++)e[i].date<n&&(n=e[i].date,t=i);return t}/**
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
 */function o4(e){Mr(new _r("platform-logger",t=>new vj(t),"PRIVATE")),Mr(new _r("heartbeat",t=>new n4(t),"PRIVATE")),Jn(Ky,cw,e),Jn(Ky,cw,"esm2020"),Jn("fire-js","")}o4("");const LR="@firebase/installations",l_="0.6.19";/**
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
 */const PR=1e4,jR=`w:${l_}`,$R="FIS_v2",a4="https://firebaseinstallations.googleapis.com/v1",l4=3600*1e3,c4="installations",u4="Installations";/**
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
 */const d4={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},go=new Ro(c4,u4,d4);function UR(e){return e instanceof wi&&e.code.includes("request-failed")}/**
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
 */function zR({projectId:e}){return`${a4}/projects/${e}/installations`}function BR(e){return{token:e.token,requestStatus:2,expiresIn:h4(e.expiresIn),creationTime:Date.now()}}async function HR(e,t){const i=(await t.json()).error;return go.create("request-failed",{requestName:e,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function FR({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function f4(e,{refreshToken:t}){const n=FR(e);return n.append("Authorization",p4(t)),n}async function qR(e){const t=await e();return t.status>=500&&t.status<600?e():t}function h4(e){return Number(e.replace("s","000"))}function p4(e){return`${$R} ${e}`}/**
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
 */async function m4({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const i=zR(e),o=FR(e),l=t.getImmediate({optional:!0});if(l){const h=await l.getHeartbeatsHeader();h&&o.append("x-firebase-client",h)}const u={fid:n,authVersion:$R,appId:e.appId,sdkVersion:jR},f={method:"POST",headers:o,body:JSON.stringify(u)},p=await qR(()=>fetch(i,f));if(p.ok){const h=await p.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:BR(h.authToken)}}else throw await HR("Create Installation",p)}/**
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
 */function VR(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function g4(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const y4=/^[cdef][\w-]{21}$/,Jy="";function v4(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=_4(e);return y4.test(n)?n:Jy}catch{return Jy}}function _4(e){return g4(e).substr(0,22)}/**
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
 */const GR=new Map;function WR(e,t){const n=Hh(e);YR(n,t),b4(n,t)}function YR(e,t){const n=GR.get(e);if(n)for(const i of n)i(t)}function b4(e,t){const n=S4();n&&n.postMessage({key:e,fid:t}),x4()}let lo=null;function S4(){return!lo&&"BroadcastChannel"in self&&(lo=new BroadcastChannel("[Firebase] FID Change"),lo.onmessage=e=>{YR(e.data.key,e.data.fid)}),lo}function x4(){GR.size===0&&lo&&(lo.close(),lo=null)}/**
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
 */const w4="firebase-installations-database",E4=1,yo="firebase-installations-store";let Hg=null;function c_(){return Hg||(Hg=Bh(w4,E4,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(yo)}}})),Hg}async function Gf(e,t){const n=Hh(e),o=(await c_()).transaction(yo,"readwrite"),l=o.objectStore(yo),u=await l.get(n);return await l.put(t,n),await o.done,(!u||u.fid!==t.fid)&&WR(e,t.fid),t}async function QR(e){const t=Hh(e),i=(await c_()).transaction(yo,"readwrite");await i.objectStore(yo).delete(t),await i.done}async function Fh(e,t){const n=Hh(e),o=(await c_()).transaction(yo,"readwrite"),l=o.objectStore(yo),u=await l.get(n),f=t(u);return f===void 0?await l.delete(n):await l.put(f,n),await o.done,f&&(!u||u.fid!==f.fid)&&WR(e,f.fid),f}/**
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
 */async function u_(e){let t;const n=await Fh(e.appConfig,i=>{const o=T4(i),l=C4(e,o);return t=l.registrationPromise,l.installationEntry});return n.fid===Jy?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function T4(e){const t=e||{fid:v4(),registrationStatus:0};return KR(t)}function C4(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(go.create("app-offline"));return{installationEntry:t,registrationPromise:o}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=R4(e,n);return{installationEntry:n,registrationPromise:i}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:A4(e)}:{installationEntry:t}}async function R4(e,t){try{const n=await m4(e,t);return Gf(e.appConfig,n)}catch(n){throw UR(n)&&n.customData.serverCode===409?await QR(e.appConfig):await Gf(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function A4(e){let t=await pw(e.appConfig);for(;t.registrationStatus===1;)await VR(100),t=await pw(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await u_(e);return i||n}return t}function pw(e){return Fh(e,t=>{if(!t)throw go.create("installation-not-found");return KR(t)})}function KR(e){return I4(e)?{fid:e.fid,registrationStatus:0}:e}function I4(e){return e.registrationStatus===1&&e.registrationTime+PR<Date.now()}/**
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
 */async function D4({appConfig:e,heartbeatServiceProvider:t},n){const i=O4(e,n),o=f4(e,n),l=t.getImmediate({optional:!0});if(l){const h=await l.getHeartbeatsHeader();h&&o.append("x-firebase-client",h)}const u={installation:{sdkVersion:jR,appId:e.appId}},f={method:"POST",headers:o,body:JSON.stringify(u)},p=await qR(()=>fetch(i,f));if(p.ok){const h=await p.json();return BR(h)}else throw await HR("Generate Auth Token",p)}function O4(e,{fid:t}){return`${zR(e)}/${t}/authTokens:generate`}/**
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
 */async function d_(e,t=!1){let n;const i=await Fh(e.appConfig,l=>{if(!XR(l))throw go.create("not-registered");const u=l.authToken;if(!t&&M4(u))return l;if(u.requestStatus===1)return n=k4(e,t),l;{if(!navigator.onLine)throw go.create("app-offline");const f=P4(l);return n=N4(e,f),f}});return n?await n:i.authToken}async function k4(e,t){let n=await mw(e.appConfig);for(;n.authToken.requestStatus===1;)await VR(100),n=await mw(e.appConfig);const i=n.authToken;return i.requestStatus===0?d_(e,t):i}function mw(e){return Fh(e,t=>{if(!XR(t))throw go.create("not-registered");const n=t.authToken;return j4(n)?{...t,authToken:{requestStatus:0}}:t})}async function N4(e,t){try{const n=await D4(e,t),i={...t,authToken:n};return await Gf(e.appConfig,i),n}catch(n){if(UR(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await QR(e.appConfig);else{const i={...t,authToken:{requestStatus:0}};await Gf(e.appConfig,i)}throw n}}function XR(e){return e!==void 0&&e.registrationStatus===2}function M4(e){return e.requestStatus===2&&!L4(e)}function L4(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+l4}function P4(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}function j4(e){return e.requestStatus===1&&e.requestTime+PR<Date.now()}/**
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
 */async function $4(e){const t=e,{installationEntry:n,registrationPromise:i}=await u_(t);return i?i.catch(console.error):d_(t).catch(console.error),n.fid}/**
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
 */async function U4(e,t=!1){const n=e;return await z4(n),(await d_(n,t)).token}async function z4(e){const{registrationPromise:t}=await u_(e);t&&await t}/**
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
 */function B4(e){if(!e||!e.options)throw Fg("App Configuration");if(!e.name)throw Fg("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Fg(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Fg(e){return go.create("missing-app-config-values",{valueName:e})}/**
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
 */const ZR="installations",H4="installations-internal",F4=e=>{const t=e.getProvider("app").getImmediate(),n=B4(t),i=Xa(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},q4=e=>{const t=e.getProvider("app").getImmediate(),n=Xa(t,ZR).getImmediate();return{getId:()=>$4(n),getToken:o=>U4(n,o)}};function V4(){Mr(new _r(ZR,F4,"PUBLIC")),Mr(new _r(H4,q4,"PRIVATE"))}V4();Jn(LR,l_);Jn(LR,l_,"esm2020");/**
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
 */const G4="/firebase-messaging-sw.js",W4="/firebase-cloud-messaging-push-scope",JR="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Y4="https://fcmregistrations.googleapis.com/v1",eA="google.c.a.c_id",Q4="google.c.a.c_l",K4="google.c.a.ts",X4="google.c.a.e",gw=1e4;var yw;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(yw||(yw={}));/**
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
 */var Wc;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(Wc||(Wc={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Z4(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(n),o=new Uint8Array(i.length);for(let l=0;l<i.length;++l)o[l]=i.charCodeAt(l);return o}/**
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
 */const qg="fcm_token_details_db",J4=5,vw="fcm_token_object_Store";async function e6(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(l=>l.name).includes(qg))return null;let t=null;return(await Bh(qg,J4,{upgrade:async(i,o,l,u)=>{if(o<2||!i.objectStoreNames.contains(vw))return;const f=u.objectStore(vw),p=await f.index("fcmSenderId").get(e);if(await f.clear(),!!p){if(o===2){const h=p;if(!h.auth||!h.p256dh||!h.endpoint)return;t={token:h.fcmToken,createTime:h.createTime??Date.now(),subscriptionOptions:{auth:h.auth,p256dh:h.p256dh,endpoint:h.endpoint,swScope:h.swScope,vapidKey:typeof h.vapidKey=="string"?h.vapidKey:ci(h.vapidKey)}}}else if(o===3){const h=p;t={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:ci(h.auth),p256dh:ci(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:ci(h.vapidKey)}}}else if(o===4){const h=p;t={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:ci(h.auth),p256dh:ci(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:ci(h.vapidKey)}}}}}})).close(),await Ug(qg),await Ug("fcm_vapid_details_db"),await Ug("undefined"),t6(t)?t:null}function t6(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
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
 */const n6="firebase-messaging-database",r6=1,Yc="firebase-messaging-store";let Vg=null;function tA(){return Vg||(Vg=Bh(n6,r6,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Yc)}}})),Vg}async function i6(e){const t=nA(e),i=await(await tA()).transaction(Yc).objectStore(Yc).get(t);if(i)return i;{const o=await e6(e.appConfig.senderId);if(o)return await f_(e,o),o}}async function f_(e,t){const n=nA(e),o=(await tA()).transaction(Yc,"readwrite");return await o.objectStore(Yc).put(t,n),await o.done,t}function nA({appConfig:e}){return e.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s6={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},an=new Ro("messaging","Messaging",s6);/**
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
 */async function o6(e,t){const n=await p_(e),i=rA(t),o={method:"POST",headers:n,body:JSON.stringify(i)};let l;try{l=await(await fetch(h_(e.appConfig),o)).json()}catch(u){throw an.create("token-subscribe-failed",{errorInfo:u?.toString()})}if(l.error){const u=l.error.message;throw an.create("token-subscribe-failed",{errorInfo:u})}if(!l.token)throw an.create("token-subscribe-no-token");return l.token}async function a6(e,t){const n=await p_(e),i=rA(t.subscriptionOptions),o={method:"PATCH",headers:n,body:JSON.stringify(i)};let l;try{l=await(await fetch(`${h_(e.appConfig)}/${t.token}`,o)).json()}catch(u){throw an.create("token-update-failed",{errorInfo:u?.toString()})}if(l.error){const u=l.error.message;throw an.create("token-update-failed",{errorInfo:u})}if(!l.token)throw an.create("token-update-no-token");return l.token}async function l6(e,t){const i={method:"DELETE",headers:await p_(e)};try{const l=await(await fetch(`${h_(e.appConfig)}/${t}`,i)).json();if(l.error){const u=l.error.message;throw an.create("token-unsubscribe-failed",{errorInfo:u})}}catch(o){throw an.create("token-unsubscribe-failed",{errorInfo:o?.toString()})}}function h_({projectId:e}){return`${Y4}/projects/${e}/registrations`}async function p_({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function rA({p256dh:e,auth:t,endpoint:n,vapidKey:i}){const o={web:{endpoint:n,auth:t,p256dh:e}};return i!==JR&&(o.web.applicationPubKey=i),o}/**
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
 */const c6=10080*60*1e3;async function u6(e){const t=await f6(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:ci(t.getKey("auth")),p256dh:ci(t.getKey("p256dh"))},i=await i6(e.firebaseDependencies);if(i){if(h6(i.subscriptionOptions,n))return Date.now()>=i.createTime+c6?d6(e,{token:i.token,createTime:Date.now(),subscriptionOptions:n}):i.token;try{await l6(e.firebaseDependencies,i.token)}catch(o){console.warn(o)}return _w(e.firebaseDependencies,n)}else return _w(e.firebaseDependencies,n)}async function d6(e,t){try{const n=await a6(e.firebaseDependencies,t),i={...t,token:n,createTime:Date.now()};return await f_(e.firebaseDependencies,i),n}catch(n){throw n}}async function _w(e,t){const i={token:await o6(e,t),createTime:Date.now(),subscriptionOptions:t};return await f_(e,i),i.token}async function f6(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Z4(t)})}function h6(e,t){const n=t.vapidKey===e.vapidKey,i=t.endpoint===e.endpoint,o=t.auth===e.auth,l=t.p256dh===e.p256dh;return n&&i&&o&&l}/**
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
 */function bw(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return p6(t,e),m6(t,e),g6(t,e),t}function p6(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const i=t.notification.body;i&&(e.notification.body=i);const o=t.notification.image;o&&(e.notification.image=o);const l=t.notification.icon;l&&(e.notification.icon=l)}function m6(e,t){t.data&&(e.data=t.data)}function g6(e,t){if(!t.fcmOptions&&!t.notification?.click_action)return;e.fcmOptions={};const n=t.fcmOptions?.link??t.notification?.click_action;n&&(e.fcmOptions.link=n);const i=t.fcmOptions?.analytics_label;i&&(e.fcmOptions.analyticsLabel=i)}/**
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
 */function y6(e){return typeof e=="object"&&!!e&&eA in e}/**
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
 */function v6(e){if(!e||!e.options)throw Gg("App Configuration Object");if(!e.name)throw Gg("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const i of t)if(!n[i])throw Gg(i);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Gg(e){return an.create("missing-app-config-values",{valueName:e})}/**
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
 */class _6{constructor(t,n,i){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=v6(t);this.firebaseDependencies={app:t,appConfig:o,installations:n,analyticsProvider:i}}_delete(){return Promise.resolve()}}/**
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
 */async function b6(e){try{e.swRegistration=await navigator.serviceWorker.register(G4,{scope:W4}),e.swRegistration.update().catch(()=>{}),await S6(e.swRegistration)}catch(t){throw an.create("failed-service-worker-registration",{browserErrorMessage:t?.message})}}async function S6(e){return new Promise((t,n)=>{const i=setTimeout(()=>n(new Error(`Service worker not registered after ${gw} ms`)),gw),o=e.installing||e.waiting;e.active?(clearTimeout(i),t()):o?o.onstatechange=l=>{l.target?.state==="activated"&&(o.onstatechange=null,clearTimeout(i),t())}:(clearTimeout(i),n(new Error("No incoming service worker found.")))})}/**
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
 */async function x6(e,t){if(!t&&!e.swRegistration&&await b6(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw an.create("invalid-sw-registration");e.swRegistration=t}}/**
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
 */async function w6(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=JR)}/**
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
 */async function iA(e,t){if(!navigator)throw an.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw an.create("permission-blocked");return await w6(e,t?.vapidKey),await x6(e,t?.serviceWorkerRegistration),u6(e)}/**
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
 */async function E6(e,t,n){const i=T6(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(i,{message_id:n[eA],message_name:n[Q4],message_time:n[K4],message_device_time:Math.floor(Date.now()/1e3)})}function T6(e){switch(e){case Wc.NOTIFICATION_CLICKED:return"notification_open";case Wc.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C6(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===Wc.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(bw(n)):e.onMessageHandler.next(bw(n)));const i=n.data;y6(i)&&i[X4]==="1"&&await E6(e,n.messageType,i)}const Sw="@firebase/messaging",xw="0.12.23";/**
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
 */const R6=e=>{const t=new _6(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>C6(t,n)),t},A6=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:i=>iA(t,i)}};function I6(){Mr(new _r("messaging",R6,"PUBLIC")),Mr(new _r("messaging-internal",A6,"PRIVATE")),Jn(Sw,xw),Jn(Sw,xw,"esm2020")}/**
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
 */async function D6(){try{await AR()}catch{return!1}return typeof window<"u"&&RR()&&FP()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function O6(e,t){if(!navigator)throw an.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k6(e=a_()){return D6().then(t=>{if(!t)throw an.create("unsupported-browser")},t=>{throw an.create("indexed-db-unsupported")}),Xa(Wt(e),"messaging").getImmediate()}async function N6(e,t){return e=Wt(e),iA(e,t)}function M6(e,t){return e=Wt(e),O6(e,t)}I6();const qh=e=>{try{return e()}catch(t){throw t}};var L6="firebase",P6="12.2.1";/**
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
 */Jn(L6,P6,"app");const j6={apiKey:"AIzaSyAMtG6b23AqO2WbJ2ad8SKMXD1X4tfALtc",authDomain:"peloton-alerts.firebaseapp.com",projectId:"peloton-alerts",storageBucket:"peloton-alerts.appspot.com",messagingSenderId:"331185140393",appId:"1:331185140393:web:5f49c5c60b8b162914efb8",measurementId:"G-R2QRE36WEQ",databaseURL:"https://peloton-alerts-default-rtdb.firebaseio.com/"},Oc=qh(()=>kR(j6)),xa=qh(()=>k6(Oc)),$6="serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window,sA=async()=>{if(!("serviceWorker"in navigator))throw new Error("Service workers are not supported");return navigator.serviceWorker.register("/peloton-reservations/messaging-sw.js",{type:"classic"})};let Wg=sA();const ww=async()=>{if(!xa)throw new Error("Messaging is not set up");if(!$6)throw new Error("Browser environment does not allow messaging");let e;try{e=await Wg,console.log("Registered service worker successfully")}catch(t){console.error("Failed to register service worker. Trying again...",t),Wg=sA(),e=await Wg}return N6(xa,{vapidKey:"BO9hF0_u2BKehXtAWTxtm7RtvIUGIEA5GT_jGycvCfUEW0yZZkLvtRB1Y8R_5KKBEODsLufyDkcBXn9rx5dHY5g",serviceWorkerRegistration:e})};function Jt(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var U6=typeof Symbol=="function"&&Symbol.observable||"@@observable",Ew=U6,Yg=()=>Math.random().toString(36).substring(7).split("").join("."),z6={INIT:`@@redux/INIT${Yg()}`,REPLACE:`@@redux/REPLACE${Yg()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Yg()}`},Wf=z6;function vs(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function oA(e,t,n){if(typeof e!="function")throw new Error(Jt(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Jt(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Jt(1));return n(oA)(e,t)}let i=e,o=t,l=new Map,u=l,f=0,p=!1;function h(){u===l&&(u=new Map,l.forEach((C,I)=>{u.set(I,C)}))}function y(){if(p)throw new Error(Jt(3));return o}function _(C){if(typeof C!="function")throw new Error(Jt(4));if(p)throw new Error(Jt(5));let I=!0;h();const M=f++;return u.set(M,C),function(){if(I){if(p)throw new Error(Jt(6));I=!1,h(),u.delete(M),l=null}}}function v(C){if(!vs(C))throw new Error(Jt(7));if(typeof C.type>"u")throw new Error(Jt(8));if(typeof C.type!="string")throw new Error(Jt(17));if(p)throw new Error(Jt(9));try{p=!0,o=i(o,C)}finally{p=!1}return(l=u).forEach(M=>{M()}),C}function b(C){if(typeof C!="function")throw new Error(Jt(10));i=C,v({type:Wf.REPLACE})}function x(){const C=_;return{subscribe(I){if(typeof I!="object"||I===null)throw new Error(Jt(11));function M(){const D=I;D.next&&D.next(y())}return M(),{unsubscribe:C(M)}},[Ew](){return this}}}return v({type:Wf.INIT}),{dispatch:v,subscribe:_,getState:y,replaceReducer:b,[Ew]:x}}function B6(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:Wf.INIT})>"u")throw new Error(Jt(12));if(typeof n(void 0,{type:Wf.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Jt(13))})}function aA(e){const t=Object.keys(e),n={};for(let l=0;l<t.length;l++){const u=t[l];typeof e[u]=="function"&&(n[u]=e[u])}const i=Object.keys(n);let o;try{B6(n)}catch(l){o=l}return function(u={},f){if(o)throw o;let p=!1;const h={};for(let y=0;y<i.length;y++){const _=i[y],v=n[_],b=u[_],x=v(b,f);if(typeof x>"u")throw f&&f.type,new Error(Jt(14));h[_]=x,p=p||x!==b}return p=p||i.length!==Object.keys(u).length,p?h:u}}function Yf(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...i)=>t(n(...i)))}function H6(...e){return t=>(n,i)=>{const o=t(n,i);let l=()=>{throw new Error(Jt(15))};const u={getState:o.getState,dispatch:(p,...h)=>l(p,...h)},f=e.map(p=>p(u));return l=Yf(...f)(o.dispatch),{...o,dispatch:l}}}function lA(e){return vs(e)&&"type"in e&&typeof e.type=="string"}var m_=Symbol.for("immer-nothing"),kc=Symbol.for("immer-draftable"),xn=Symbol.for("immer-state");function tn(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var $a=Object.getPrototypeOf;function Lr(e){return!!e&&!!e[xn]}function br(e){return e?cA(e)||Array.isArray(e)||!!e[kc]||!!e.constructor?.[kc]||Ja(e)||gu(e):!1}var F6=Object.prototype.constructor.toString(),Tw=new WeakMap;function cA(e){if(!e||typeof e!="object")return!1;const t=Object.getPrototypeOf(e);if(t===null||t===Object.prototype)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;if(n===Object)return!0;if(typeof n!="function")return!1;let i=Tw.get(n);return i===void 0&&(i=Function.toString.call(n),Tw.set(n,i)),i===F6}function q6(e){return Lr(e)||tn(15,e),e[xn].base_}function Qc(e,t,n=!0){vo(e)===0?(n?Reflect.ownKeys(e):Object.keys(e)).forEach(o=>{t(o,e[o],e)}):e.forEach((i,o)=>t(o,i,e))}function vo(e){const t=e[xn];return t?t.type_:Array.isArray(e)?1:Ja(e)?2:gu(e)?3:0}function Kc(e,t){return vo(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Qg(e,t){return vo(e)===2?e.get(t):e[t]}function uA(e,t,n){const i=vo(e);i===2?e.set(t,n):i===3?e.add(n):e[t]=n}function V6(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function Ja(e){return e instanceof Map}function gu(e){return e instanceof Set}function io(e){return e.copy_||e.base_}function ev(e,t){if(Ja(e))return new Map(e);if(gu(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const n=cA(e);if(t===!0||t==="class_only"&&!n){const i=Object.getOwnPropertyDescriptors(e);delete i[xn];let o=Reflect.ownKeys(i);for(let l=0;l<o.length;l++){const u=o[l],f=i[u];f.writable===!1&&(f.writable=!0,f.configurable=!0),(f.get||f.set)&&(i[u]={configurable:!0,writable:!0,enumerable:f.enumerable,value:e[u]})}return Object.create($a(e),i)}else{const i=$a(e);if(i!==null&&n)return{...e};const o=Object.create(i);return Object.assign(o,e)}}function g_(e,t=!1){return Vh(e)||Lr(e)||!br(e)||(vo(e)>1&&Object.defineProperties(e,{set:Zd,add:Zd,clear:Zd,delete:Zd}),Object.freeze(e),t&&Object.values(e).forEach(n=>g_(n,!0))),e}function G6(){tn(2)}var Zd={value:G6};function Vh(e){return e===null||typeof e!="object"?!0:Object.isFrozen(e)}var tv={};function _o(e){const t=tv[e];return t||tn(0,e),t}function W6(e,t){tv[e]||(tv[e]=t)}var Xc;function dA(){return Xc}function Y6(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Cw(e,t){t&&(_o("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function nv(e){rv(e),e.drafts_.forEach(Q6),e.drafts_=null}function rv(e){e===Xc&&(Xc=e.parent_)}function Rw(e){return Xc=Y6(Xc,e)}function Q6(e){const t=e[xn];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function Aw(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return e!==void 0&&e!==n?(n[xn].modified_&&(nv(t),tn(4)),br(e)&&(e=Qf(t,e),t.parent_||Kf(t,e)),t.patches_&&_o("Patches").generateReplacementPatches_(n[xn].base_,e,t.patches_,t.inversePatches_)):e=Qf(t,n,[]),nv(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==m_?e:void 0}function Qf(e,t,n){if(Vh(t))return t;const i=e.immer_.shouldUseStrictIteration(),o=t[xn];if(!o)return Qc(t,(l,u)=>Iw(e,o,t,l,u,n),i),t;if(o.scope_!==e)return t;if(!o.modified_)return Kf(e,o.base_,!0),o.base_;if(!o.finalized_){o.finalized_=!0,o.scope_.unfinalizedDrafts_--;const l=o.copy_;let u=l,f=!1;o.type_===3&&(u=new Set(l),l.clear(),f=!0),Qc(u,(p,h)=>Iw(e,o,l,p,h,n,f),i),Kf(e,l,!1),n&&e.patches_&&_o("Patches").generatePatches_(o,n,e.patches_,e.inversePatches_)}return o.copy_}function Iw(e,t,n,i,o,l,u){if(o==null||typeof o!="object"&&!u)return;const f=Vh(o);if(!(f&&!u)){if(Lr(o)){const p=l&&t&&t.type_!==3&&!Kc(t.assigned_,i)?l.concat(i):void 0,h=Qf(e,o,p);if(uA(n,i,h),Lr(h))e.canAutoFreeze_=!1;else return}else u&&n.add(o);if(br(o)&&!f){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1||t&&t.base_&&t.base_[i]===o&&f)return;Qf(e,o),(!t||!t.scope_.parent_)&&typeof i!="symbol"&&(Ja(n)?n.has(i):Object.prototype.propertyIsEnumerable.call(n,i))&&Kf(e,o)}}}function Kf(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&g_(t,n)}function K6(e,t){const n=Array.isArray(e),i={type_:n?1:0,scope_:t?t.scope_:dA(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=i,l=y_;n&&(o=[i],l=Zc);const{revoke:u,proxy:f}=Proxy.revocable(o,l);return i.draft_=f,i.revoke_=u,f}var y_={get(e,t){if(t===xn)return e;const n=io(e);if(!Kc(n,t))return X6(e,n,t);const i=n[t];return e.finalized_||!br(i)?i:i===Kg(e.base_,t)?(Xg(e),e.copy_[t]=sv(i,e)):i},has(e,t){return t in io(e)},ownKeys(e){return Reflect.ownKeys(io(e))},set(e,t,n){const i=fA(io(e),t);if(i?.set)return i.set.call(e.draft_,n),!0;if(!e.modified_){const o=Kg(io(e),t),l=o?.[xn];if(l&&l.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(V6(n,o)&&(n!==void 0||Kc(e.base_,t)))return!0;Xg(e),iv(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty(e,t){return Kg(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,Xg(e),iv(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=io(e),i=Reflect.getOwnPropertyDescriptor(n,t);return i&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:i.enumerable,value:n[t]}},defineProperty(){tn(11)},getPrototypeOf(e){return $a(e.base_)},setPrototypeOf(){tn(12)}},Zc={};Qc(y_,(e,t)=>{Zc[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});Zc.deleteProperty=function(e,t){return Zc.set.call(this,e,t,void 0)};Zc.set=function(e,t,n){return y_.set.call(this,e[0],t,n,e[0])};function Kg(e,t){const n=e[xn];return(n?io(n):e)[t]}function X6(e,t,n){const i=fA(t,n);return i?"value"in i?i.value:i.get?.call(e.draft_):void 0}function fA(e,t){if(!(t in e))return;let n=$a(e);for(;n;){const i=Object.getOwnPropertyDescriptor(n,t);if(i)return i;n=$a(n)}}function iv(e){e.modified_||(e.modified_=!0,e.parent_&&iv(e.parent_))}function Xg(e){e.copy_||(e.copy_=ev(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var Z6=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!0,this.produce=(t,n,i)=>{if(typeof t=="function"&&typeof n!="function"){const l=n;n=t;const u=this;return function(p=l,...h){return u.produce(p,y=>n.call(this,y,...h))}}typeof n!="function"&&tn(6),i!==void 0&&typeof i!="function"&&tn(7);let o;if(br(t)){const l=Rw(this),u=sv(t,void 0);let f=!0;try{o=n(u),f=!1}finally{f?nv(l):rv(l)}return Cw(l,i),Aw(o,l)}else if(!t||typeof t!="object"){if(o=n(t),o===void 0&&(o=t),o===m_&&(o=void 0),this.autoFreeze_&&g_(o,!0),i){const l=[],u=[];_o("Patches").generateReplacementPatches_(t,o,l,u),i(l,u)}return o}else tn(1,t)},this.produceWithPatches=(t,n)=>{if(typeof t=="function")return(u,...f)=>this.produceWithPatches(u,p=>t(p,...f));let i,o;return[this.produce(t,n,(u,f)=>{i=u,o=f}),i,o]},typeof e?.autoFreeze=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof e?.useStrictShallowCopy=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),typeof e?.useStrictIteration=="boolean"&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){br(e)||tn(8),Lr(e)&&(e=J6(e));const t=Rw(this),n=sv(e,void 0);return n[xn].isManual_=!0,rv(t),n}finishDraft(e,t){const n=e&&e[xn];(!n||!n.isManual_)&&tn(9);const{scope_:i}=n;return Cw(i,t),Aw(void 0,i)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const o=t[n];if(o.path.length===0&&o.op==="replace"){e=o.value;break}}n>-1&&(t=t.slice(n+1));const i=_o("Patches").applyPatches_;return Lr(e)?i(e,t):this.produce(e,o=>i(o,t))}};function sv(e,t){const n=Ja(e)?_o("MapSet").proxyMap_(e,t):gu(e)?_o("MapSet").proxySet_(e,t):K6(e,t);return(t?t.scope_:dA()).drafts_.push(n),n}function J6(e){return Lr(e)||tn(10,e),hA(e)}function hA(e){if(!br(e)||Vh(e))return e;const t=e[xn];let n,i=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=ev(e,t.scope_.immer_.useStrictShallowCopy_),i=t.scope_.immer_.shouldUseStrictIteration()}else n=ev(e,!0);return Qc(n,(o,l)=>{uA(n,o,hA(l))},i),t&&(t.finalized_=!1),n}function e$(){const t="replace",i="remove";function o(v,b,x,O){switch(v.type_){case 0:case 2:return u(v,b,x,O);case 1:return l(v,b,x,O);case 3:return f(v,b,x,O)}}function l(v,b,x,O){let{base_:C,assigned_:I}=v,M=v.copy_;M.length<C.length&&([C,M]=[M,C],[x,O]=[O,x]);for(let R=0;R<C.length;R++)if(I[R]&&M[R]!==C[R]){const D=b.concat([R]);x.push({op:t,path:D,value:_(M[R])}),O.push({op:t,path:D,value:_(C[R])})}for(let R=C.length;R<M.length;R++){const D=b.concat([R]);x.push({op:"add",path:D,value:_(M[R])})}for(let R=M.length-1;C.length<=R;--R){const D=b.concat([R]);O.push({op:i,path:D})}}function u(v,b,x,O){const{base_:C,copy_:I}=v;Qc(v.assigned_,(M,R)=>{const D=Qg(C,M),N=Qg(I,M),A=R?Kc(C,M)?t:"add":i;if(D===N&&A===t)return;const P=b.concat(M);x.push(A===i?{op:A,path:P}:{op:A,path:P,value:N}),O.push(A==="add"?{op:i,path:P}:A===i?{op:"add",path:P,value:_(D)}:{op:t,path:P,value:_(D)})})}function f(v,b,x,O){let{base_:C,copy_:I}=v,M=0;C.forEach(R=>{if(!I.has(R)){const D=b.concat([M]);x.push({op:i,path:D,value:R}),O.unshift({op:"add",path:D,value:R})}M++}),M=0,I.forEach(R=>{if(!C.has(R)){const D=b.concat([M]);x.push({op:"add",path:D,value:R}),O.unshift({op:i,path:D,value:R})}M++})}function p(v,b,x,O){x.push({op:t,path:[],value:b===m_?void 0:b}),O.push({op:t,path:[],value:v})}function h(v,b){return b.forEach(x=>{const{path:O,op:C}=x;let I=v;for(let N=0;N<O.length-1;N++){const A=vo(I);let P=O[N];typeof P!="string"&&typeof P!="number"&&(P=""+P),(A===0||A===1)&&(P==="__proto__"||P==="constructor")&&tn(19),typeof I=="function"&&P==="prototype"&&tn(19),I=Qg(I,P),typeof I!="object"&&tn(18,O.join("/"))}const M=vo(I),R=y(x.value),D=O[O.length-1];switch(C){case t:switch(M){case 2:return I.set(D,R);case 3:tn(16);default:return I[D]=R}case"add":switch(M){case 1:return D==="-"?I.push(R):I.splice(D,0,R);case 2:return I.set(D,R);case 3:return I.add(R);default:return I[D]=R}case i:switch(M){case 1:return I.splice(D,1);case 2:return I.delete(D);case 3:return I.delete(x.value);default:return delete I[D]}default:tn(17,C)}}),v}function y(v){if(!br(v))return v;if(Array.isArray(v))return v.map(y);if(Ja(v))return new Map(Array.from(v.entries()).map(([x,O])=>[x,y(O)]));if(gu(v))return new Set(Array.from(v).map(y));const b=Object.create($a(v));for(const x in v)b[x]=y(v[x]);return Kc(v,kc)&&(b[kc]=v[kc]),b}function _(v){return Lr(v)?y(v):v}W6("Patches",{applyPatches_:h,generatePatches_:o,generateReplacementPatches_:p})}var Jc=new Z6,yu=Jc.produce,pA=Jc.produceWithPatches.bind(Jc),Dw=Jc.applyPatches.bind(Jc);function t$(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(t)}function n$(e,t=`expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(t)}function r$(e,t="expected all items to be functions, instead received the following types: "){if(!e.every(n=>typeof n=="function")){const n=e.map(i=>typeof i=="function"?`function ${i.name||"unnamed"}()`:typeof i).join(", ");throw new TypeError(`${t}[${n}]`)}}var Ow=e=>Array.isArray(e)?e:[e];function i$(e){const t=Array.isArray(e[0])?e[0]:e;return r$(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}function s$(e,t){const n=[],{length:i}=e;for(let o=0;o<i;o++)n.push(e[o].apply(null,t));return n}var o$=class{constructor(e){this.value=e}deref(){return this.value}},a$=typeof WeakRef<"u"?WeakRef:o$,l$=0,kw=1;function Jd(){return{s:l$,v:void 0,o:null,p:null}}function Xf(e,t={}){let n=Jd();const{resultEqualityCheck:i}=t;let o,l=0;function u(){let f=n;const{length:p}=arguments;for(let _=0,v=p;_<v;_++){const b=arguments[_];if(typeof b=="function"||typeof b=="object"&&b!==null){let x=f.o;x===null&&(f.o=x=new WeakMap);const O=x.get(b);O===void 0?(f=Jd(),x.set(b,f)):f=O}else{let x=f.p;x===null&&(f.p=x=new Map);const O=x.get(b);O===void 0?(f=Jd(),x.set(b,f)):f=O}}const h=f;let y;if(f.s===kw)y=f.v;else if(y=e.apply(null,arguments),l++,i){const _=o?.deref?.()??o;_!=null&&i(_,y)&&(y=_,l!==0&&l--),o=typeof y=="object"&&y!==null||typeof y=="function"?new a$(y):y}return h.s=kw,h.v=y,y}return u.clearCache=()=>{n=Jd(),u.resetResultsCount()},u.resultsCount=()=>l,u.resetResultsCount=()=>{l=0},u}function c$(e,...t){const n=typeof e=="function"?{memoize:e,memoizeOptions:t}:e,i=(...o)=>{let l=0,u=0,f,p={},h=o.pop();typeof h=="object"&&(p=h,h=o.pop()),t$(h,`createSelector expects an output function after the inputs, but received: [${typeof h}]`);const y={...n,...p},{memoize:_,memoizeOptions:v=[],argsMemoize:b=Xf,argsMemoizeOptions:x=[]}=y,O=Ow(v),C=Ow(x),I=i$(o),M=_(function(){return l++,h.apply(null,arguments)},...O),R=b(function(){u++;const N=s$(I,arguments);return f=M.apply(null,N),f},...C);return Object.assign(R,{resultFunc:h,memoizedResultFunc:M,dependencies:I,dependencyRecomputations:()=>u,resetDependencyRecomputations:()=>{u=0},lastResult:()=>f,recomputations:()=>l,resetRecomputations:()=>{l=0},memoize:_,argsMemoize:b})};return Object.assign(i,{withTypes:()=>i}),i}var Ei=c$(Xf),u$=Object.assign((e,t=Ei)=>{n$(e,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);const n=Object.keys(e),i=n.map(l=>e[l]);return t(i,(...l)=>l.reduce((u,f,p)=>(u[n[p]]=f,u),{}))},{withTypes:()=>u$});function mA(e){return({dispatch:n,getState:i})=>o=>l=>typeof l=="function"?l(n,i,e):o(l)}var d$=mA(),f$=mA,h$=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Yf:Yf.apply(null,arguments)},p$=e=>e&&typeof e.match=="function";function mr(e,t){function n(...i){if(t){let o=t(...i);if(!o)throw new Error(gr(0));return{type:e,payload:o.payload,..."meta"in o&&{meta:o.meta},..."error"in o&&{error:o.error}}}return{type:e,payload:i[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=i=>lA(i)&&i.type===e,n}var gA=class Ec extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,Ec.prototype)}static get[Symbol.species](){return Ec}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new Ec(...t[0].concat(this)):new Ec(...t.concat(this))}};function Nw(e){return br(e)?yu(e,()=>{}):e}function ef(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function m$(e){return typeof e=="boolean"}var g$=()=>function(t){const{thunk:n=!0,immutableCheck:i=!0,serializableCheck:o=!0,actionCreatorCheck:l=!0}=t??{};let u=new gA;return n&&(m$(n)?u.push(d$):u.push(f$(n.extraArgument))),u},Gh="RTK_autoBatch",oc=()=>e=>({payload:e,meta:{[Gh]:!0}}),Mw=e=>t=>{setTimeout(t,e)},y$=(e={type:"raf"})=>t=>(...n)=>{const i=t(...n);let o=!0,l=!1,u=!1;const f=new Set,p=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Mw(10):e.type==="callback"?e.queueNotification:Mw(e.timeout),h=()=>{u=!1,l&&(l=!1,f.forEach(y=>y()))};return Object.assign({},i,{subscribe(y){const _=()=>o&&y(),v=i.subscribe(_);return f.add(y),()=>{v(),f.delete(y)}},dispatch(y){try{return o=!y?.meta?.[Gh],l=!o,l&&(u||(u=!0,p(h))),i.dispatch(y)}finally{o=!0}}})},v$=e=>function(n){const{autoBatch:i=!0}=n??{};let o=new gA(e);return i&&o.push(y$(typeof i=="object"?i:void 0)),o};function _$(e){const t=g$(),{reducer:n=void 0,middleware:i,devTools:o=!0,preloadedState:l=void 0,enhancers:u=void 0}=e||{};let f;if(typeof n=="function")f=n;else if(vs(n))f=aA(n);else throw new Error(gr(1));let p;typeof i=="function"?p=i(t):p=t();let h=Yf;o&&(h=h$({trace:!1,...typeof o=="object"&&o}));const y=H6(...p),_=v$(y);let v=typeof u=="function"?u(_):_();const b=h(...v);return oA(f,l,b)}function yA(e){const t={},n=[];let i;const o={addCase(l,u){const f=typeof l=="string"?l:l.type;if(!f)throw new Error(gr(28));if(f in t)throw new Error(gr(29));return t[f]=u,o},addAsyncThunk(l,u){return u.pending&&(t[l.pending.type]=u.pending),u.rejected&&(t[l.rejected.type]=u.rejected),u.fulfilled&&(t[l.fulfilled.type]=u.fulfilled),u.settled&&n.push({matcher:l.settled,reducer:u.settled}),o},addMatcher(l,u){return n.push({matcher:l,reducer:u}),o},addDefaultCase(l){return i=l,o}};return e(o),[t,n,i]}function b$(e){return typeof e=="function"}function S$(e,t){let[n,i,o]=yA(t),l;if(b$(e))l=()=>Nw(e());else{const f=Nw(e);l=()=>f}function u(f=l(),p){let h=[n[p.type],...i.filter(({matcher:y})=>y(p)).map(({reducer:y})=>y)];return h.filter(y=>!!y).length===0&&(h=[o]),h.reduce((y,_)=>{if(_)if(Lr(y)){const b=_(y,p);return b===void 0?y:b}else{if(br(y))return yu(y,v=>_(v,p));{const v=_(y,p);if(v===void 0){if(y===null)return y;throw Error("A case reducer on a non-draftable value must not return undefined")}return v}}return y},f)}return u.getInitialState=l,u}var vA=(e,t)=>p$(e)?e.match(t):e(t);function _i(...e){return t=>e.some(n=>vA(n,t))}function Nc(...e){return t=>e.every(n=>vA(n,t))}function Wh(e,t){if(!e||!e.meta)return!1;const n=typeof e.meta.requestId=="string",i=t.indexOf(e.meta.requestStatus)>-1;return n&&i}function vu(e){return typeof e[0]=="function"&&"pending"in e[0]&&"fulfilled"in e[0]&&"rejected"in e[0]}function v_(...e){return e.length===0?t=>Wh(t,["pending"]):vu(e)?_i(...e.map(t=>t.pending)):v_()(e[0])}function Ua(...e){return e.length===0?t=>Wh(t,["rejected"]):vu(e)?_i(...e.map(t=>t.rejected)):Ua()(e[0])}function Yh(...e){const t=n=>n&&n.meta&&n.meta.rejectedWithValue;return e.length===0?Nc(Ua(...e),t):vu(e)?Nc(Ua(...e),t):Yh()(e[0])}function _s(...e){return e.length===0?t=>Wh(t,["fulfilled"]):vu(e)?_i(...e.map(t=>t.fulfilled)):_s()(e[0])}function ov(...e){return e.length===0?t=>Wh(t,["pending","fulfilled","rejected"]):vu(e)?_i(...e.flatMap(t=>[t.pending,t.rejected,t.fulfilled])):ov()(e[0])}var x$="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",__=(e=21)=>{let t="",n=e;for(;n--;)t+=x$[Math.random()*64|0];return t},w$=["name","message","stack","code"],Zg=class{constructor(e,t){this.payload=e,this.meta=t}_type},Lw=class{constructor(e,t){this.payload=e,this.meta=t}_type},E$=e=>{if(typeof e=="object"&&e!==null){const t={};for(const n of w$)typeof e[n]=="string"&&(t[n]=e[n]);return t}return{message:String(e)}},Pw="External signal was aborted",jw=(()=>{function e(t,n,i){const o=mr(t+"/fulfilled",(p,h,y,_)=>({payload:p,meta:{..._||{},arg:y,requestId:h,requestStatus:"fulfilled"}})),l=mr(t+"/pending",(p,h,y)=>({payload:void 0,meta:{...y||{},arg:h,requestId:p,requestStatus:"pending"}})),u=mr(t+"/rejected",(p,h,y,_,v)=>({payload:_,error:(i&&i.serializeError||E$)(p||"Rejected"),meta:{...v||{},arg:y,requestId:h,rejectedWithValue:!!_,requestStatus:"rejected",aborted:p?.name==="AbortError",condition:p?.name==="ConditionError"}}));function f(p,{signal:h}={}){return(y,_,v)=>{const b=i?.idGenerator?i.idGenerator(p):__(),x=new AbortController;let O,C;function I(R){C=R,x.abort()}h&&(h.aborted?I(Pw):h.addEventListener("abort",()=>I(Pw),{once:!0}));const M=(async function(){let R;try{let N=i?.condition?.(p,{getState:_,extra:v});if(C$(N)&&(N=await N),N===!1||x.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const A=new Promise((P,U)=>{O=()=>{U({name:"AbortError",message:C||"Aborted"})},x.signal.addEventListener("abort",O)});y(l(b,p,i?.getPendingMeta?.({requestId:b,arg:p},{getState:_,extra:v}))),R=await Promise.race([A,Promise.resolve(n(p,{dispatch:y,getState:_,extra:v,requestId:b,signal:x.signal,abort:I,rejectWithValue:(P,U)=>new Zg(P,U),fulfillWithValue:(P,U)=>new Lw(P,U)})).then(P=>{if(P instanceof Zg)throw P;return P instanceof Lw?o(P.payload,b,p,P.meta):o(P,b,p)})])}catch(N){R=N instanceof Zg?u(null,b,p,N.payload,N.meta):u(N,b,p)}finally{O&&x.signal.removeEventListener("abort",O)}return i&&!i.dispatchConditionRejection&&u.match(R)&&R.meta.condition||y(R),R})();return Object.assign(M,{abort:I,requestId:b,arg:p,unwrap(){return M.then(T$)}})}}return Object.assign(f,{pending:l,rejected:u,fulfilled:o,settled:_i(u,o),typePrefix:t})}return e.withTypes=()=>e,e})();function T$(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function C$(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var R$=Symbol.for("rtk-slice-createasyncthunk");function A$(e,t){return`${e}/${t}`}function I$({creators:e}={}){const t=e?.asyncThunk?.[R$];return function(i){const{name:o,reducerPath:l=o}=i;if(!o)throw new Error(gr(11));const u=(typeof i.reducers=="function"?i.reducers(O$()):i.reducers)||{},f=Object.keys(u),p={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},h={addCase(R,D){const N=typeof R=="string"?R:R.type;if(!N)throw new Error(gr(12));if(N in p.sliceCaseReducersByType)throw new Error(gr(13));return p.sliceCaseReducersByType[N]=D,h},addMatcher(R,D){return p.sliceMatchers.push({matcher:R,reducer:D}),h},exposeAction(R,D){return p.actionCreators[R]=D,h},exposeCaseReducer(R,D){return p.sliceCaseReducersByName[R]=D,h}};f.forEach(R=>{const D=u[R],N={reducerName:R,type:A$(o,R),createNotation:typeof i.reducers=="function"};N$(D)?L$(N,D,h,t):k$(N,D,h)});function y(){const[R={},D=[],N=void 0]=typeof i.extraReducers=="function"?yA(i.extraReducers):[i.extraReducers],A={...R,...p.sliceCaseReducersByType};return S$(i.initialState,P=>{for(let U in A)P.addCase(U,A[U]);for(let U of p.sliceMatchers)P.addMatcher(U.matcher,U.reducer);for(let U of D)P.addMatcher(U.matcher,U.reducer);N&&P.addDefaultCase(N)})}const _=R=>R,v=new Map,b=new WeakMap;let x;function O(R,D){return x||(x=y()),x(R,D)}function C(){return x||(x=y()),x.getInitialState()}function I(R,D=!1){function N(P){let U=P[R];return typeof U>"u"&&D&&(U=ef(b,N,C)),U}function A(P=_){const U=ef(v,D,()=>new WeakMap);return ef(U,P,()=>{const F={};for(const[H,z]of Object.entries(i.selectors??{}))F[H]=D$(z,P,()=>ef(b,P,C),D);return F})}return{reducerPath:R,getSelectors:A,get selectors(){return A(N)},selectSlice:N}}const M={name:o,reducer:O,actions:p.actionCreators,caseReducers:p.sliceCaseReducersByName,getInitialState:C,...I(l),injectInto(R,{reducerPath:D,...N}={}){const A=D??l;return R.inject({reducerPath:A,reducer:O},N),{...M,...I(A,!0)}}};return M}}function D$(e,t,n,i){function o(l,...u){let f=t(l);return typeof f>"u"&&i&&(f=n()),e(f,...u)}return o.unwrapped=e,o}var Xn=I$();function O$(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function k$({type:e,reducerName:t,createNotation:n},i,o){let l,u;if("reducer"in i){if(n&&!M$(i))throw new Error(gr(17));l=i.reducer,u=i.prepare}else l=i;o.addCase(e,l).exposeCaseReducer(t,l).exposeAction(t,u?mr(e,u):mr(e))}function N$(e){return e._reducerDefinitionType==="asyncThunk"}function M$(e){return e._reducerDefinitionType==="reducerWithPrepare"}function L$({type:e,reducerName:t},n,i,o){if(!o)throw new Error(gr(18));const{payloadCreator:l,fulfilled:u,pending:f,rejected:p,settled:h,options:y}=n,_=o(e,l,y);i.exposeAction(t,_),u&&i.addCase(_.fulfilled,u),f&&i.addCase(_.pending,f),p&&i.addCase(_.rejected,p),h&&i.addMatcher(_.settled,h),i.exposeCaseReducer(t,{fulfilled:u||tf,pending:f||tf,rejected:p||tf,settled:h||tf})}function tf(){}function gr(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const el=e=>e.session,_u=Ei([el],e=>{if(e.state==="fulfilled")return e.data?.id}),Mn=hC,et=pC,bu=E.createContext({refreshToken:()=>{},deleteToken:()=>Promise.reject("Not implemented")});var $w={};const Uw="@firebase/database",zw="1.1.0";/**
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
 */let _A="";function P$(e){_A=e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j${constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,n){n==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),Ut(n))}get(t){const n=this.domStorage_.getItem(this.prefixedName_(t));return n==null?null:Vc(n)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $${constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,n){n==null?delete this.cache_[t]:this.cache_[t]=n}get(t){return jr(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bA=function(e){try{if(typeof window<"u"&&typeof window[e]<"u"){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new j$(t)}}catch{}return new $$},co=bA("localStorage"),U$=bA("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca=new s_("@firebase/database"),z$=(function(){let e=1;return function(){return e++}})(),SA=function(e){const t=JP(e),n=new QP;n.update(t);const i=n.digest();return n_.encodeByteArray(i)},Su=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?t+=Su.apply(null,i):typeof i=="object"?t+=Ut(i):t+=i,t+=" "}return t};let Mc=null,Bw=!0;const B$=function(e,t){he(!0,"Can't turn on custom loggers persistently."),Ca.logLevel=ct.VERBOSE,Mc=Ca.log.bind(Ca)},en=function(...e){if(Bw===!0&&(Bw=!1,Mc===null&&U$.get("logging_enabled")===!0&&B$()),Mc){const t=Su.apply(null,e);Mc(t)}},xu=function(e){return function(...t){en(e,...t)}},av=function(...e){const t="FIREBASE INTERNAL ERROR: "+Su(...e);Ca.error(t)},bi=function(...e){const t=`FIREBASE FATAL ERROR: ${Su(...e)}`;throw Ca.error(t),new Error(t)},fn=function(...e){const t="FIREBASE WARNING: "+Su(...e);Ca.warn(t)},H$=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&fn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},b_=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},F$=function(e){if(document.readyState==="complete")e();else{let t=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},za="[MIN_NAME]",bo="[MAX_NAME]",Ao=function(e,t){if(e===t)return 0;if(e===za||t===bo)return-1;if(t===za||e===bo)return 1;{const n=Hw(e),i=Hw(t);return n!==null?i!==null?n-i===0?e.length-t.length:n-i:-1:i!==null?1:e<t?-1:1}},q$=function(e,t){return e===t?0:e<t?-1:1},ac=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Ut(t))},S_=function(e){if(typeof e!="object"||e===null)return Ut(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)i!==0&&(n+=","),n+=Ut(t[i]),n+=":",n+=S_(e[t[i]]);return n+="}",n},xA=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let o=0;o<n;o+=t)o+t>n?i.push(e.substring(o,n)):i.push(e.substring(o,o+t));return i};function rn(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const wA=function(e){he(!b_(e),"Invalid JSON number");const t=11,n=52,i=(1<<t-1)-1;let o,l,u,f,p;e===0?(l=0,u=0,o=1/e===-1/0?1:0):(o=e<0,e=Math.abs(e),e>=Math.pow(2,1-i)?(f=Math.min(Math.floor(Math.log(e)/Math.LN2),i),l=f+i,u=Math.round(e*Math.pow(2,n-f)-Math.pow(2,n))):(l=0,u=Math.round(e/Math.pow(2,1-i-n))));const h=[];for(p=n;p;p-=1)h.push(u%2?1:0),u=Math.floor(u/2);for(p=t;p;p-=1)h.push(l%2?1:0),l=Math.floor(l/2);h.push(o?1:0),h.reverse();const y=h.join("");let _="";for(p=0;p<64;p+=8){let v=parseInt(y.substr(p,8),2).toString(16);v.length===1&&(v="0"+v),_=_+v}return _.toLowerCase()},V$=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},G$=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function W$(e,t){let n="Unknown Error";e==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":e==="permission_denied"?n="Client doesn't have permission to access the desired data.":e==="unavailable"&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}const Y$=new RegExp("^-?(0*)\\d{1,10}$"),Q$=-2147483648,K$=2147483647,Hw=function(e){if(Y$.test(e)){const t=Number(e);if(t>=Q$&&t<=K$)return t}return null},tl=function(e){try{e()}catch(t){setTimeout(()=>{const n=t.stack||"";throw fn("Exception was thrown by user callback.",n),t},Math.floor(0))}},X$=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Lc=function(e,t){const n=setTimeout(e,t);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Z${constructor(t,n){this.appCheckProvider=n,this.appName=t.name,Nn(t)&&t.settings.appCheckToken&&(this.serverAppAppCheckToken=t.settings.appCheckToken),this.appCheck=n?.getImmediate({optional:!0}),this.appCheck||n?.get().then(i=>this.appCheck=i)}getToken(t){if(this.serverAppAppCheckToken){if(t)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(t):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(n,i):n(null)},0)})}addTokenChangeListener(t){this.appCheckProvider?.get().then(n=>n.addTokenListener(t))}notifyForInvalidToken(){fn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J${constructor(t,n,i){this.appName_=t,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(o=>this.auth_=o)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(n=>n&&n.code==="auth/token-not-initialized"?(en("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(n,i):n(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(n=>n.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(n=>n.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',fn(t)}}class Rf{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}Rf.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_="5",EA="v",TA="s",CA="r",RA="f",AA=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,IA="ls",DA="p",lv="ac",OA="websocket",kA="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(t,n,i,o,l=!1,u="",f=!1,p=!1,h=null){this.secure=n,this.namespace=i,this.webSocketOnly=o,this.nodeAdmin=l,this.persistenceKey=u,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=p,this.emulatorOptions=h,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=co.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&co.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${n}`}}function e3(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function MA(e,t,n){he(typeof t=="string","typeof type must == string"),he(typeof n=="object","typeof params must == object");let i;if(t===OA)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===kA)i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);e3(e)&&(n.ns=e.namespace);const o=[];return rn(n,(l,u)=>{o.push(l+"="+u)}),i+o.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t3{constructor(){this.counters_={}}incrementCounter(t,n=1){jr(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=n}get(){return IP(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg={},ey={};function w_(e){const t=e.toString();return Jg[t]||(Jg[t]=new t3),Jg[t]}function n3(e,t){const n=e.toString();return ey[n]||(ey[n]=t()),ey[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r3{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,n){this.closeAfterResponse=t,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,n){for(this.pendingResponses[t]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<i.length;++o)i[o]&&tl(()=>{this.onMessage_(i[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw="start",i3="close",s3="pLPCommand",o3="pRTLPCB",LA="id",PA="pw",jA="ser",a3="cb",l3="seg",c3="ts",u3="d",d3="dframe",$A=1870,UA=30,f3=$A-UA,h3=25e3,p3=3e4;class wa{constructor(t,n,i,o,l,u,f){this.connId=t,this.repoInfo=n,this.applicationId=i,this.appCheckToken=o,this.authToken=l,this.transportSessionId=u,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=xu(t),this.stats_=w_(n),this.urlFn=p=>(this.appCheckToken&&(p[lv]=this.appCheckToken),MA(n,kA,p))}open(t,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new r3(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(p3)),F$(()=>{if(this.isClosed_)return;this.scriptTagHolder=new E_((...l)=>{const[u,f,p,h,y]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===Fw)this.id=f,this.password=p;else if(u===i3)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...l)=>{const[u,f]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(u,f)},()=>{this.onClosed_()},this.urlFn);const i={};i[Fw]="t",i[jA]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[a3]=this.scriptTagHolder.uniqueCallbackIdentifier),i[EA]=x_,this.transportSessionId&&(i[TA]=this.transportSessionId),this.lastSessionId&&(i[IA]=this.lastSessionId),this.applicationId&&(i[DA]=this.applicationId),this.appCheckToken&&(i[lv]=this.appCheckToken),typeof location<"u"&&location.hostname&&AA.test(location.hostname)&&(i[CA]=RA);const o=this.urlFn(i);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){wa.forceAllow_=!0}static forceDisallow(){wa.forceDisallow_=!0}static isAvailable(){return wa.forceAllow_?!0:!wa.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!V$()&&!G$()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const n=Ut(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=_R(n),o=xA(i,f3);for(let l=0;l<o.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[l]),this.curSegmentNum++}addDisconnectPingFrame(t,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[d3]="t",i[LA]=t,i[PA]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const n=Ut(t).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class E_{constructor(t,n,i,o){this.onDisconnect=i,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=z$(),window[s3+this.uniqueCallbackIdentifier]=t,window[o3+this.uniqueCallbackIdentifier]=n,this.myIFrame=E_.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(f){en("frame writing exception"),f.stack&&en(f.stack),en(f)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||en("No IE domain setting required")}catch{const i=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,n){for(this.myID=t,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[LA]=this.myID,t[PA]=this.myPW,t[jA]=this.currentSerial;let n=this.urlFn(t),i="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+UA+i.length<=$A;){const u=this.pendingSegs.shift();i=i+"&"+l3+o+"="+u.seg+"&"+c3+o+"="+u.ts+"&"+u3+o+"="+u.d,o++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(t,n,i){this.pendingSegs.push({seg:t,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(t,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},o=setTimeout(i,Math.floor(h3)),l=()=>{clearTimeout(o),i()};this.addTag(t,l)}addTag(t,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=t,i.onload=i.onreadystatechange=function(){const o=i.readyState;(!o||o==="loaded"||o==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{en("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m3=16384,g3=45e3;let Zf=null;typeof MozWebSocket<"u"?Zf=MozWebSocket:typeof WebSocket<"u"&&(Zf=WebSocket);class ur{constructor(t,n,i,o,l,u,f){this.connId=t,this.applicationId=i,this.appCheckToken=o,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=xu(this.connId),this.stats_=w_(n),this.connURL=ur.connectionURL_(n,u,f,o,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(t,n,i,o,l){const u={};return u[EA]=x_,typeof location<"u"&&location.hostname&&AA.test(location.hostname)&&(u[CA]=RA),n&&(u[TA]=n),i&&(u[IA]=i),o&&(u[lv]=o),l&&(u[DA]=l),MA(t,OA,u)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,co.set("previous_websocket_failure",!0);try{let i;HP(),this.mySock=new Zf(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const o=i.message||i.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const o=i.message||i.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){ur.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(t=!0)}return!t&&Zf!==null&&!ur.forceDisallow_}static previouslyFailed(){return co.isInMemoryStorage||co.get("previous_websocket_failure")===!0}markConnectionHealthy(){co.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Vc(n);this.onMessage(i)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(he(this.frames===null,"We already have a frame buffer"),t.length<=6){const n=Number(t);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const n=t.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(t){this.resetKeepAlive();const n=Ut(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=xA(n,m3);i.length>1&&this.sendString_(String(i.length));for(let o=0;o<i.length;o++)this.sendString_(i[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(g3))}sendString_(t){try{this.mySock.send(t)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ur.responsesRequiredToBeHealthy=2;ur.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{static get ALL_TRANSPORTS(){return[wa,ur]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(t){this.initTransports_(t)}initTransports_(t){const n=ur&&ur.isAvailable();let i=n&&!ur.previouslyFailed();if(t.webSocketOnly&&(n||fn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[ur];else{const o=this.transports_=[];for(const l of eu.ALL_TRANSPORTS)l&&l.isAvailable()&&o.push(l);eu.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}eu.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y3=6e4,v3=5e3,_3=10*1024,b3=100*1024,ty="t",qw="d",S3="s",Vw="r",x3="e",Gw="o",Ww="a",Yw="n",Qw="p",w3="h";class E3{constructor(t,n,i,o,l,u,f,p,h,y){this.id=t,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=o,this.authToken_=l,this.onMessage_=u,this.onReady_=f,this.onDisconnect_=p,this.onKill_=h,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=xu("c:"+this.id+":"),this.transportManager_=new eu(n),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const o=t.healthyTimeout||0;o>0&&(this.healthyTimeout_=Lc(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>b3?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>_3?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return n=>{t===this.conn_?this.onConnectionLost_(n):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return n=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(n):t===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(t){const n={t:"d",d:t};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(ty in t){const n=t[ty];n===Ww?this.upgradeIfSecondaryHealthy_():n===Vw?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Gw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const n=ac("t",t),i=ac("d",t);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Qw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ww,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Yw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const n=ac("t",t),i=ac("d",t);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const n=ac(ty,t);if(qw in t){const i=t[qw];if(n===w3){const o={...i};this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(n===Yw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===S3?this.onConnectionShutdown_(i):n===Vw?this.onReset_(i):n===x3?av("Server Error: "+i):n===Gw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):av("Unknown control packet command: "+n)}}onHandshake_(t){const n=t.ts,i=t.v,o=t.h;this.sessionId=t.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),x_!==i&&fn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Lc(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(y3))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,n){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Lc(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(v3))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Qw,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(co.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{put(t,n,i,o){}merge(t,n,i,o){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,n,i){}onDisconnectMerge(t,n,i){}onDisconnectCancel(t,n){}reportStats(t){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(t){this.allowedEvents_=t,this.listeners_={},he(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...n){if(Array.isArray(this.listeners_[t])){const i=[...this.listeners_[t]];for(let o=0;o<i.length;o++)i[o].callback.apply(i[o].context,n)}}on(t,n,i){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:n,context:i});const o=this.getInitialEvent(t);o&&n.apply(i,o)}off(t,n,i){this.validateEventType_(t);const o=this.listeners_[t]||[];for(let l=0;l<o.length;l++)if(o[l].callback===n&&(!i||i===o[l].context)){o.splice(l,1);return}}validateEventType_(t){he(this.allowedEvents_.find(n=>n===t),"Unknown event: "+t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf extends BA{static getInstance(){return new Jf}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!i_()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(t){return he(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw=32,Xw=768;class ut{constructor(t,n){if(n===void 0){this.pieces_=t.split("/");let i=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[i]=this.pieces_[o],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=n}toString(){let t="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(t+="/"+this.pieces_[n]);return t||"/"}}function Xe(){return new ut("")}function qe(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function bs(e){return e.pieces_.length-e.pieceNum_}function pt(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ut(e.pieces_,t)}function T_(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function T3(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)e.pieces_[n]!==""&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function tu(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function HA(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ut(t,0)}function At(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof ut)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const i=t.split("/");for(let o=0;o<i.length;o++)i[o].length>0&&n.push(i[o])}return new ut(n,0)}function Ye(e){return e.pieceNum_>=e.pieces_.length}function dn(e,t){const n=qe(e),i=qe(t);if(n===null)return t;if(n===i)return dn(pt(e),pt(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function C3(e,t){const n=tu(e,0),i=tu(t,0);for(let o=0;o<n.length&&o<i.length;o++){const l=Ao(n[o],i[o]);if(l!==0)return l}return n.length===i.length?0:n.length<i.length?-1:1}function C_(e,t){if(bs(e)!==bs(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Zn(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(bs(e)>bs(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class R3{constructor(t,n){this.errorPrefix_=n,this.parts_=tu(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=zh(this.parts_[i]);FA(this)}}function A3(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=zh(t),FA(e)}function I3(e){const t=e.parts_.pop();e.byteLength_-=zh(t),e.parts_.length>0&&(e.byteLength_-=1)}function FA(e){if(e.byteLength_>Xw)throw new Error(e.errorPrefix_+"has a key path longer than "+Xw+" bytes ("+e.byteLength_+").");if(e.parts_.length>Kw)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Kw+") or object contains a cycle "+so(e))}function so(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_ extends BA{static getInstance(){return new R_}constructor(){super(["visible"]);let t,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[t];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(t){return he(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=1e3,D3=300*1e3,Zw=30*1e3,O3=1.3,k3=3e4,N3="server_kill",Jw=3;class gi extends zA{constructor(t,n,i,o,l,u,f,p){if(super(),this.repoInfo_=t,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=o,this.onServerInfoUpdate_=l,this.authTokenProvider_=u,this.appCheckTokenProvider_=f,this.authOverride_=p,this.id=gi.nextPersistentConnectionId_++,this.log_=xu("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=lc,this.maxReconnectDelay_=D3,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");R_.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&Jf.getInstance().on("online",this.onOnline_,this)}sendRequest(t,n,i){const o=++this.requestNumber_,l={r:o,a:t,b:n};this.log_(Ut(l)),he(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),i&&(this.requestCBHash_[o]=i)}get(t){this.initConnection_();const n=new mu,o={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:u=>{const f=u.d;u.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),n.promise}listen(t,n,i,o){this.initConnection_();const l=t._queryIdentifier,u=t._path.toString();this.log_("Listen called for "+u+" "+l),this.listens.has(u)||this.listens.set(u,new Map),he(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),he(!this.listens.get(u).has(l),"listen() called twice for same path/queryId.");const f={onComplete:o,hashFn:n,query:t,tag:i};this.listens.get(u).set(l,f),this.connected_&&this.sendListen_(f)}sendGet_(t){const n=this.outstandingGets_[t];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(t){const n=t.query,i=n._path.toString(),o=n._queryIdentifier;this.log_("Listen on "+i+" for "+o);const l={p:i},u="q";t.tag&&(l.q=n._queryObject,l.t=t.tag),l.h=t.hashFn(),this.sendRequest(u,l,f=>{const p=f.d,h=f.s;gi.warnOnListenWarnings_(p,n),(this.listens.get(i)&&this.listens.get(i).get(o))===t&&(this.log_("listen response",f),h!=="ok"&&this.removeListen_(i,o),t.onComplete&&t.onComplete(h,p))})}static warnOnListenWarnings_(t,n){if(t&&typeof t=="object"&&jr(t,"w")){const i=ja(t,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const o='".indexOn": "'+n._queryParams.getIndex().toString()+'"',l=n._path.toString();fn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||YP(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Zw)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,n=WP(t)?"auth":"gauth",i={cred:t};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,o=>{const l=o.s,u=o.d||"error";this.authToken_===t&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const n=t.s,i=t.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(t,n){const i=t._path.toString(),o=t._queryIdentifier;this.log_("Unlisten called for "+i+" "+o),he(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,o)&&this.connected_&&this.sendUnlisten_(i,o,t._queryObject,n)}sendUnlisten_(t,n,i,o){this.log_("Unlisten on "+t+" for "+n);const l={p:t},u="n";o&&(l.q=i,l.t=o),this.sendRequest(u,l)}onDisconnectPut(t,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,n,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:n,onComplete:i})}onDisconnectMerge(t,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,n,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:n,onComplete:i})}onDisconnectCancel(t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(t,n,i,o){const l={p:n,d:i};this.log_("onDisconnect "+t,l),this.sendRequest(t,l,u=>{o&&setTimeout(()=>{o(u.s,u.d)},Math.floor(0))})}put(t,n,i,o){this.putInternal("p",t,n,i,o)}merge(t,n,i,o){this.putInternal("m",t,n,i,o)}putInternal(t,n,i,o,l){this.initConnection_();const u={p:n,d:i};l!==void 0&&(u.h=l),this.outstandingPuts_.push({action:t,request:u,onComplete:o}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(t){const n=this.outstandingPuts_[t].action,i=this.outstandingPuts_[t].request,o=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(n,i,l=>{this.log_(n+" response",l),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(l.s,l.d)})}reportStats(t){if(this.connected_){const n={c:t};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const l=i.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+Ut(t));const n=t.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,n){this.log_("handleServerMessage",t,n),t==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):t==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):t==="c"?this.onListenRevoked_(n.p,n.q):t==="ac"?this.onAuthRevoked_(n.s,n.d):t==="apc"?this.onAppCheckRevoked_(n.s,n.d):t==="sd"?this.onSecurityDebugPacket_(n):av("Unrecognized action received from server: "+Ut(t)+`
Are you using the latest client?`)}onReady_(t,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){he(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=lc,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=lc,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>k3&&(this.reconnectDelay_=lc),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-t);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*O3)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+gi.nextConnectionId_++,l=this.lastSessionId;let u=!1,f=null;const p=function(){f?f.close():(u=!0,i())},h=function(_){he(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(_)};this.realtime_={close:p,sendRequest:h};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[_,v]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);u?en("getToken() completed but was canceled"):(en("getToken() completed. Creating connection."),this.authToken_=_&&_.accessToken,this.appCheckToken_=v&&v.token,f=new E3(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,i,b=>{fn(b+" ("+this.repoInfo_.toString()+")"),this.interrupt(N3)},l))}catch(_){this.log_("Failed to get token: "+_),u||(this.repoInfo_.nodeAdmin&&fn(_),p())}}}interrupt(t){en("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){en("Resuming connection for reason: "+t),delete this.interruptReasons_[t],Wy(this.interruptReasons_)&&(this.reconnectDelay_=lc,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const n=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const n=this.outstandingPuts_[t];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,n){let i;n?i=n.map(l=>S_(l)).join("$"):i="default";const o=this.removeListen_(t,i);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(t,n){const i=new ut(t).toString();let o;if(this.listens.has(i)){const l=this.listens.get(i);o=l.get(n),l.delete(n),l.size===0&&this.listens.delete(i)}else o=void 0;return o}onAuthRevoked_(t,n){en("Auth token revoked: "+t+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Jw&&(this.reconnectDelay_=Zw,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,n){en("App check token revoked: "+t+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Jw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const n of t.values())this.sendListen_(n);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let n="js";t["sdk."+n+"."+_A.replace(/\./g,"-")]=1,i_()?t["framework.cordova"]=1:CR()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=Jf.getInstance().currentlyOnline();return Wy(this.interruptReasons_)&&t}}gi.nextPersistentConnectionId_=0;gi.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Qh{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,n){const i=new Ve(za,t),o=new Ve(za,n);return this.compare(i,o)!==0}minPost(){return Ve.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nf;class qA extends Qh{static get __EMPTY_NODE(){return nf}static set __EMPTY_NODE(t){nf=t}compare(t,n){return Ao(t.name,n.name)}isDefinedOn(t){throw Ya("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,n){return!1}minPost(){return Ve.MIN}maxPost(){return new Ve(bo,nf)}makePost(t,n){return he(typeof t=="string","KeyIndex indexValue must always be a string."),new Ve(t,nf)}toString(){return".key"}}const Ra=new qA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(t,n,i,o,l=null){this.isReverse_=o,this.resultGenerator_=l,this.nodeStack_=[];let u=1;for(;!t.isEmpty();)if(t=t,u=n?i(t.key,n):1,o&&(u*=-1),u<0)this.isReverse_?t=t.left:t=t.right;else if(u===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(t.key,t.value):n={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class Vt{constructor(t,n,i,o,l){this.key=t,this.value=n,this.color=i??Vt.RED,this.left=o??Sn.EMPTY_NODE,this.right=l??Sn.EMPTY_NODE}copy(t,n,i,o,l){return new Vt(t??this.key,n??this.value,i??this.color,o??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,i){let o=this;const l=i(t,o.key);return l<0?o=o.copy(null,null,null,o.left.insert(t,n,i),null):l===0?o=o.copy(null,n,null,null,null):o=o.copy(null,null,null,null,o.right.insert(t,n,i)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return Sn.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,n){let i,o;if(i=this,n(t,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(t,i.key)===0){if(i.right.isEmpty())return Sn.EMPTY_NODE;o=i.right.min_(),i=i.copy(o.key,o.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,Vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,Vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}Vt.RED=!0;Vt.BLACK=!1;class M3{copy(t,n,i,o,l){return this}insert(t,n,i){return new Vt(t,n,null)}remove(t,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Sn{constructor(t,n=Sn.EMPTY_NODE){this.comparator_=t,this.root_=n}insert(t,n){return new Sn(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,Vt.BLACK,null,null))}remove(t){return new Sn(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,Vt.BLACK,null,null))}get(t){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(t,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(t){let n,i=this.root_,o=null;for(;!i.isEmpty();)if(n=this.comparator_(t,i.key),n===0){if(i.left.isEmpty())return o?o.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(o=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new rf(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,n){return new rf(this.root_,t,this.comparator_,!1,n)}getReverseIteratorFrom(t,n){return new rf(this.root_,t,this.comparator_,!0,n)}getReverseIterator(t){return new rf(this.root_,null,this.comparator_,!0,t)}}Sn.EMPTY_NODE=new M3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L3(e,t){return Ao(e.name,t.name)}function A_(e,t){return Ao(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cv;function P3(e){cv=e}const VA=function(e){return typeof e=="number"?"number:"+wA(e):"string:"+e},GA=function(e){if(e.isLeafNode()){const t=e.val();he(typeof t=="string"||typeof t=="number"||typeof t=="object"&&jr(t,".sv"),"Priority must be a string or number.")}else he(e===cv||e.isEmpty(),"priority of unexpected type.");he(e===cv||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eE;class Ft{static set __childrenNodeConstructor(t){eE=t}static get __childrenNodeConstructor(){return eE}constructor(t,n=Ft.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=n,this.lazyHash_=null,he(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),GA(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new Ft(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:Ft.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return Ye(t)?this:qe(t)===".priority"?this.priorityNode_:Ft.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,n){return null}updateImmediateChild(t,n){return t===".priority"?this.updatePriority(n):n.isEmpty()&&t!==".priority"?this:Ft.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}updateChild(t,n){const i=qe(t);return i===null?n:n.isEmpty()&&i!==".priority"?this:(he(i!==".priority"||bs(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Ft.__childrenNodeConstructor.EMPTY_NODE.updateChild(pt(t),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,n){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+VA(this.priorityNode_.val())+":");const n=typeof this.value_;t+=n+":",n==="number"?t+=wA(this.value_):t+=this.value_,this.lazyHash_=SA(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===Ft.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof Ft.__childrenNodeConstructor?-1:(he(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const n=typeof t.value_,i=typeof this.value_,o=Ft.VALUE_TYPE_ORDER.indexOf(n),l=Ft.VALUE_TYPE_ORDER.indexOf(i);return he(o>=0,"Unknown leaf type: "+n),he(l>=0,"Unknown leaf type: "+i),o===l?i==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:l-o}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const n=t;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ft.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let WA,YA;function j3(e){WA=e}function $3(e){YA=e}class U3 extends Qh{compare(t,n){const i=t.node.getPriority(),o=n.node.getPriority(),l=i.compareTo(o);return l===0?Ao(t.name,n.name):l}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,n){return!t.getPriority().equals(n.getPriority())}minPost(){return Ve.MIN}maxPost(){return new Ve(bo,new Ft("[PRIORITY-POST]",YA))}makePost(t,n){const i=WA(t);return new Ve(n,new Ft("[PRIORITY-POST]",i))}toString(){return".priority"}}const It=new U3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z3=Math.log(2);class B3{constructor(t){const n=l=>parseInt(Math.log(l)/z3,10),i=l=>parseInt(Array(l+1).join("1"),2);this.count=n(t+1),this.current_=this.count-1;const o=i(this.count);this.bits_=t+1&o}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const eh=function(e,t,n,i){e.sort(t);const o=function(p,h){const y=h-p;let _,v;if(y===0)return null;if(y===1)return _=e[p],v=n?n(_):_,new Vt(v,_.node,Vt.BLACK,null,null);{const b=parseInt(y/2,10)+p,x=o(p,b),O=o(b+1,h);return _=e[b],v=n?n(_):_,new Vt(v,_.node,Vt.BLACK,x,O)}},l=function(p){let h=null,y=null,_=e.length;const v=function(x,O){const C=_-x,I=_;_-=x;const M=o(C+1,I),R=e[C],D=n?n(R):R;b(new Vt(D,R.node,O,null,M))},b=function(x){h?(h.left=x,h=x):(y=x,h=x)};for(let x=0;x<p.count;++x){const O=p.nextBitIsOne(),C=Math.pow(2,p.count-(x+1));O?v(C,Vt.BLACK):(v(C,Vt.BLACK),v(C,Vt.RED))}return y},u=new B3(e.length),f=l(u);return new Sn(i||t,f)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ny;const ga={};class fi{static get Default(){return he(ga&&It,"ChildrenNode.ts has not been loaded"),ny=ny||new fi({".priority":ga},{".priority":It}),ny}constructor(t,n){this.indexes_=t,this.indexSet_=n}get(t){const n=ja(this.indexes_,t);if(!n)throw new Error("No index defined for "+t);return n instanceof Sn?n:null}hasIndex(t){return jr(this.indexSet_,t.toString())}addIndex(t,n){he(t!==Ra,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let o=!1;const l=n.getIterator(Ve.Wrap);let u=l.getNext();for(;u;)o=o||t.isDefinedOn(u.node),i.push(u),u=l.getNext();let f;o?f=eh(i,t.getCompare()):f=ga;const p=t.toString(),h={...this.indexSet_};h[p]=t;const y={...this.indexes_};return y[p]=f,new fi(y,h)}addToIndexes(t,n){const i=qf(this.indexes_,(o,l)=>{const u=ja(this.indexSet_,l);if(he(u,"Missing index implementation for "+l),o===ga)if(u.isDefinedOn(t.node)){const f=[],p=n.getIterator(Ve.Wrap);let h=p.getNext();for(;h;)h.name!==t.name&&f.push(h),h=p.getNext();return f.push(t),eh(f,u.getCompare())}else return ga;else{const f=n.get(t.name);let p=o;return f&&(p=p.remove(new Ve(t.name,f))),p.insert(t,t.node)}});return new fi(i,this.indexSet_)}removeFromIndexes(t,n){const i=qf(this.indexes_,o=>{if(o===ga)return o;{const l=n.get(t.name);return l?o.remove(new Ve(t.name,l)):o}});return new fi(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cc;class Ne{static get EMPTY_NODE(){return cc||(cc=new Ne(new Sn(A_),null,fi.Default))}constructor(t,n,i){this.children_=t,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&GA(this.priorityNode_),this.children_.isEmpty()&&he(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||cc}updatePriority(t){return this.children_.isEmpty()?this:new Ne(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const n=this.children_.get(t);return n===null?cc:n}}getChild(t){const n=qe(t);return n===null?this:this.getImmediateChild(n).getChild(pt(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,n){if(he(n,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(n);{const i=new Ve(t,n);let o,l;n.isEmpty()?(o=this.children_.remove(t),l=this.indexMap_.removeFromIndexes(i,this.children_)):(o=this.children_.insert(t,n),l=this.indexMap_.addToIndexes(i,this.children_));const u=o.isEmpty()?cc:this.priorityNode_;return new Ne(o,u,l)}}updateChild(t,n){const i=qe(t);if(i===null)return n;{he(qe(t)!==".priority"||bs(t)===1,".priority must be the last token in a path");const o=this.getImmediateChild(i).updateChild(pt(t),n);return this.updateImmediateChild(i,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const n={};let i=0,o=0,l=!0;if(this.forEachChild(It,(u,f)=>{n[u]=f.val(t),i++,l&&Ne.INTEGER_REGEXP_.test(u)?o=Math.max(o,Number(u)):l=!1}),!t&&l&&o<2*i){const u=[];for(const f in n)u[f]=n[f];return u}else return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+VA(this.getPriority().val())+":"),this.forEachChild(It,(n,i)=>{const o=i.hash();o!==""&&(t+=":"+n+":"+o)}),this.lazyHash_=t===""?"":SA(t)}return this.lazyHash_}getPredecessorChildName(t,n,i){const o=this.resolveIndex_(i);if(o){const l=o.getPredecessorKey(new Ve(t,n));return l?l.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const n=this.resolveIndex_(t);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(t){const n=this.getFirstChildName(t);return n?new Ve(n,this.children_.get(n)):null}getLastChildName(t){const n=this.resolveIndex_(t);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(t){const n=this.getLastChildName(t);return n?new Ve(n,this.children_.get(n)):null}forEachChild(t,n){const i=this.resolveIndex_(t);return i?i.inorderTraversal(o=>n(o.name,o.node)):this.children_.inorderTraversal(n)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(t,o=>o);{const o=this.children_.getIteratorFrom(t.name,Ve.Wrap);let l=o.peek();for(;l!=null&&n.compare(l,t)<0;)o.getNext(),l=o.peek();return o}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(t,o=>o);{const o=this.children_.getReverseIteratorFrom(t.name,Ve.Wrap);let l=o.peek();for(;l!=null&&n.compare(l,t)>0;)o.getNext(),l=o.peek();return o}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===wu?-1:0}withIndex(t){if(t===Ra||this.indexMap_.hasIndex(t))return this;{const n=this.indexMap_.addIndex(t,this.children_);return new Ne(this.children_,this.priorityNode_,n)}}isIndexed(t){return t===Ra||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const n=t;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(It),o=n.getIterator(It);let l=i.getNext(),u=o.getNext();for(;l&&u;){if(l.name!==u.name||!l.node.equals(u.node))return!1;l=i.getNext(),u=o.getNext()}return l===null&&u===null}else return!1;else return!1}}resolveIndex_(t){return t===Ra?null:this.indexMap_.get(t.toString())}}Ne.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class H3 extends Ne{constructor(){super(new Sn(A_),Ne.EMPTY_NODE,fi.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return Ne.EMPTY_NODE}isEmpty(){return!1}}const wu=new H3;Object.defineProperties(Ve,{MIN:{value:new Ve(za,Ne.EMPTY_NODE)},MAX:{value:new Ve(bo,wu)}});qA.__EMPTY_NODE=Ne.EMPTY_NODE;Ft.__childrenNodeConstructor=Ne;P3(wu);$3(wu);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F3=!0;function $t(e,t=null){if(e===null)return Ne.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(t=e[".priority"]),he(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){const n=e;return new Ft(n,$t(t))}if(!(e instanceof Array)&&F3){const n=[];let i=!1;if(rn(e,(u,f)=>{if(u.substring(0,1)!=="."){const p=$t(f);p.isEmpty()||(i=i||!p.getPriority().isEmpty(),n.push(new Ve(u,p)))}}),n.length===0)return Ne.EMPTY_NODE;const l=eh(n,L3,u=>u.name,A_);if(i){const u=eh(n,It.getCompare());return new Ne(l,$t(t),new fi({".priority":u},{".priority":It}))}else return new Ne(l,$t(t),fi.Default)}else{let n=Ne.EMPTY_NODE;return rn(e,(i,o)=>{if(jr(e,i)&&i.substring(0,1)!=="."){const l=$t(o);(l.isLeafNode()||!l.isEmpty())&&(n=n.updateImmediateChild(i,l))}}),n.updatePriority($t(t))}}j3($t);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q3 extends Qh{constructor(t){super(),this.indexPath_=t,he(!Ye(t)&&qe(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,n){const i=this.extractChild(t.node),o=this.extractChild(n.node),l=i.compareTo(o);return l===0?Ao(t.name,n.name):l}makePost(t,n){const i=$t(t),o=Ne.EMPTY_NODE.updateChild(this.indexPath_,i);return new Ve(n,o)}maxPost(){const t=Ne.EMPTY_NODE.updateChild(this.indexPath_,wu);return new Ve(bo,t)}toString(){return tu(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V3 extends Qh{compare(t,n){const i=t.node.compareTo(n.node);return i===0?Ao(t.name,n.name):i}isDefinedOn(t){return!0}indexedValueChanged(t,n){return!t.equals(n)}minPost(){return Ve.MIN}maxPost(){return Ve.MAX}makePost(t,n){const i=$t(t);return new Ve(n,i)}toString(){return".value"}}const G3=new V3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QA(e){return{type:"value",snapshotNode:e}}function Ba(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function nu(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function ru(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function W3(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(t){this.index_=t}updateChild(t,n,i,o,l,u){he(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=t.getImmediateChild(n);return f.getChild(o).equals(i.getChild(o))&&f.isEmpty()===i.isEmpty()||(u!=null&&(i.isEmpty()?t.hasChild(n)?u.trackChildChange(nu(n,f)):he(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?u.trackChildChange(Ba(n,i)):u.trackChildChange(ru(n,i,f))),t.isLeafNode()&&i.isEmpty())?t:t.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(t,n,i){return i!=null&&(t.isLeafNode()||t.forEachChild(It,(o,l)=>{n.hasChild(o)||i.trackChildChange(nu(o,l))}),n.isLeafNode()||n.forEachChild(It,(o,l)=>{if(t.hasChild(o)){const u=t.getImmediateChild(o);u.equals(l)||i.trackChildChange(ru(o,l,u))}else i.trackChildChange(Ba(o,l))})),n.withIndex(this.index_)}updatePriority(t,n){return t.isEmpty()?Ne.EMPTY_NODE:t.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(t){this.indexedFilter_=new I_(t.getIndex()),this.index_=t.getIndex(),this.startPost_=iu.getStartPost_(t),this.endPost_=iu.getEndPost_(t),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),t)<=0:this.index_.compare(this.getStartPost(),t)<0,i=this.endIsInclusive_?this.index_.compare(t,this.getEndPost())<=0:this.index_.compare(t,this.getEndPost())<0;return n&&i}updateChild(t,n,i,o,l,u){return this.matches(new Ve(n,i))||(i=Ne.EMPTY_NODE),this.indexedFilter_.updateChild(t,n,i,o,l,u)}updateFullNode(t,n,i){n.isLeafNode()&&(n=Ne.EMPTY_NODE);let o=n.withIndex(this.index_);o=o.updatePriority(Ne.EMPTY_NODE);const l=this;return n.forEachChild(It,(u,f)=>{l.matches(new Ve(u,f))||(o=o.updateImmediateChild(u,Ne.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,o,i)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const n=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),n)}else return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const n=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),n)}else return t.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y3{constructor(t){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new iu(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft(),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}updateChild(t,n,i,o,l,u){return this.rangedFilter_.matches(new Ve(n,i))||(i=Ne.EMPTY_NODE),t.getImmediateChild(n).equals(i)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,n,i,o,l,u):this.fullLimitUpdateChild_(t,n,i,l,u)}updateFullNode(t,n,i){let o;if(n.isLeafNode()||n.isEmpty())o=Ne.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){o=Ne.EMPTY_NODE.withIndex(this.index_);let l;this.reverse_?l=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):l=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;l.hasNext()&&u<this.limit_;){const f=l.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))o=o.updateImmediateChild(f.name,f.node),u++;else break;else continue}}else{o=n.withIndex(this.index_),o=o.updatePriority(Ne.EMPTY_NODE);let l;this.reverse_?l=o.getReverseIterator(this.index_):l=o.getIterator(this.index_);let u=0;for(;l.hasNext();){const f=l.getNext();u<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?u++:o=o.updateImmediateChild(f.name,Ne.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,o,i)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,n,i,o,l){let u;if(this.reverse_){const _=this.index_.getCompare();u=(v,b)=>_(b,v)}else u=this.index_.getCompare();const f=t;he(f.numChildren()===this.limit_,"");const p=new Ve(n,i),h=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),y=this.rangedFilter_.matches(p);if(f.hasChild(n)){const _=f.getImmediateChild(n);let v=o.getChildAfterChild(this.index_,h,this.reverse_);for(;v!=null&&(v.name===n||f.hasChild(v.name));)v=o.getChildAfterChild(this.index_,v,this.reverse_);const b=v==null?1:u(v,p);if(y&&!i.isEmpty()&&b>=0)return l?.trackChildChange(ru(n,i,_)),f.updateImmediateChild(n,i);{l?.trackChildChange(nu(n,_));const O=f.updateImmediateChild(n,Ne.EMPTY_NODE);return v!=null&&this.rangedFilter_.matches(v)?(l?.trackChildChange(Ba(v.name,v.node)),O.updateImmediateChild(v.name,v.node)):O}}else return i.isEmpty()?t:y&&u(h,p)>=0?(l!=null&&(l.trackChildChange(nu(h.name,h.node)),l.trackChildChange(Ba(n,i))),f.updateImmediateChild(n,i).updateImmediateChild(h.name,Ne.EMPTY_NODE)):t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=It}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return he(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return he(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:za}hasEnd(){return this.endSet_}getIndexEndValue(){return he(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return he(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:bo}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return he(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===It}copy(){const t=new D_;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function Q3(e){return e.loadsAllData()?new I_(e.getIndex()):e.hasLimit()?new Y3(e):new iu(e)}function tE(e){const t={};if(e.isDefault())return t;let n;if(e.index_===It?n="$priority":e.index_===G3?n="$value":e.index_===Ra?n="$key":(he(e.index_ instanceof q3,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=Ut(n),e.startSet_){const i=e.startAfterSet_?"startAfter":"startAt";t[i]=Ut(e.indexStartValue_),e.startNameSet_&&(t[i]+=","+Ut(e.indexStartName_))}if(e.endSet_){const i=e.endBeforeSet_?"endBefore":"endAt";t[i]=Ut(e.indexEndValue_),e.endNameSet_&&(t[i]+=","+Ut(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function nE(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;n===""&&(e.isViewFromLeft()?n="l":n="r"),t.vf=n}return e.index_!==It&&(t.i=e.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th extends zA{reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,n){return n!==void 0?"tag$"+n:(he(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}constructor(t,n,i,o){super(),this.repoInfo_=t,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=o,this.log_=xu("p:rest:"),this.listens_={}}listen(t,n,i,o){const l=t._path.toString();this.log_("Listen called for "+l+" "+t._queryIdentifier);const u=th.getListenId_(t,i),f={};this.listens_[u]=f;const p=tE(t._queryParams);this.restRequest_(l+".json",p,(h,y)=>{let _=y;if(h===404&&(_=null,h=null),h===null&&this.onDataUpdate_(l,_,!1,i),ja(this.listens_,u)===f){let v;h?h===401?v="permission_denied":v="rest_error:"+h:v="ok",o(v,null)}})}unlisten(t,n){const i=th.getListenId_(t,n);delete this.listens_[i]}get(t){const n=tE(t._queryParams),i=t._path.toString(),o=new mu;return this.restRequest_(i+".json",n,(l,u)=>{let f=u;l===404&&(f=null,l=null),l===null?(this.onDataUpdate_(i,f,!1,null),o.resolve(f)):o.reject(new Error(f))}),o.promise}refreshAuthToken(t){}restRequest_(t,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,l])=>{o&&o.accessToken&&(n.auth=o.accessToken),l&&l.token&&(n.ac=l.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+Ka(n);this.log_("Sending REST request for "+u);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(i&&f.readyState===4){this.log_("REST Response for "+u+" received. status:",f.status,"response:",f.responseText);let p=null;if(f.status>=200&&f.status<300){try{p=Vc(f.responseText)}catch{fn("Failed to parse JSON response for "+u+": "+f.responseText)}i(null,p)}else f.status!==401&&f.status!==404&&fn("Got unsuccessful REST response for "+u+" Status: "+f.status),i(f.status);i=null}},f.open("GET",u,!0),f.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K3{constructor(){this.rootNode_=Ne.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,n){this.rootNode_=this.rootNode_.updateChild(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(){return{value:null,children:new Map}}function KA(e,t,n){if(Ye(t))e.value=n,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(t,n);else{const i=qe(t);e.children.has(i)||e.children.set(i,nh());const o=e.children.get(i);t=pt(t),KA(o,t,n)}}function uv(e,t,n){e.value!==null?n(t,e.value):X3(e,(i,o)=>{const l=new ut(t.toString()+"/"+i);uv(o,l,n)})}function X3(e,t){e.children.forEach((n,i)=>{t(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z3{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),n={...t};return this.last_&&rn(this.last_,(i,o)=>{n[i]=n[i]-o}),this.last_=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE=10*1e3,J3=30*1e3,e5=300*1e3;class t5{constructor(t,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Z3(t);const i=rE+(J3-rE)*Math.random();Lc(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const t=this.statsListener_.get(),n={};let i=!1;rn(t,(o,l)=>{l>0&&jr(this.statsToReport_,o)&&(n[o]=l,i=!0)}),i&&this.server_.reportStats(n),Lc(this.reportStats_.bind(this),Math.floor(Math.random()*2*e5))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fr;(function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(fr||(fr={}));function O_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function k_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function N_(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(t,n,i){this.path=t,this.affectedTree=n,this.revert=i,this.type=fr.ACK_USER_WRITE,this.source=O_()}operationForChild(t){if(Ye(this.path)){if(this.affectedTree.value!=null)return he(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ut(t));return new rh(Xe(),n,this.revert)}}else return he(qe(this.path)===t,"operationForChild called for unrelated child."),new rh(pt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(t,n){this.source=t,this.path=n,this.type=fr.LISTEN_COMPLETE}operationForChild(t){return Ye(this.path)?new su(this.source,Xe()):new su(this.source,pt(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(t,n,i){this.source=t,this.path=n,this.snap=i,this.type=fr.OVERWRITE}operationForChild(t){return Ye(this.path)?new So(this.source,Xe(),this.snap.getImmediateChild(t)):new So(this.source,pt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(t,n,i){this.source=t,this.path=n,this.children=i,this.type=fr.MERGE}operationForChild(t){if(Ye(this.path)){const n=this.children.subtree(new ut(t));return n.isEmpty()?null:n.value?new So(this.source,Xe(),n.value):new Ha(this.source,Xe(),n)}else return he(qe(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new Ha(this.source,pt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(t,n,i){this.node_=t,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(Ye(t))return this.isFullyInitialized()&&!this.filtered_;const n=qe(t);return this.isCompleteForChild(n)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n5{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function r5(e,t,n,i){const o=[],l=[];return t.forEach(u=>{u.type==="child_changed"&&e.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&l.push(W3(u.childName,u.snapshotNode))}),uc(e,o,"child_removed",t,i,n),uc(e,o,"child_added",t,i,n),uc(e,o,"child_moved",l,i,n),uc(e,o,"child_changed",t,i,n),uc(e,o,"value",t,i,n),o}function uc(e,t,n,i,o,l){const u=i.filter(f=>f.type===n);u.sort((f,p)=>s5(e,f,p)),u.forEach(f=>{const p=i5(e,f,l);o.forEach(h=>{h.respondsTo(f.type)&&t.push(h.createEvent(p,e.query_))})})}function i5(e,t,n){return t.type==="value"||t.type==="child_removed"||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function s5(e,t,n){if(t.childName==null||n.childName==null)throw Ya("Should only compare child_ events.");const i=new Ve(t.childName,t.snapshotNode),o=new Ve(n.childName,n.snapshotNode);return e.index_.compare(i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(e,t){return{eventCache:e,serverCache:t}}function Pc(e,t,n,i){return Kh(new Ss(t,n,i),e.serverCache)}function XA(e,t,n,i){return Kh(e.eventCache,new Ss(t,n,i))}function ih(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function xo(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ry;const o5=()=>(ry||(ry=new Sn(q$)),ry);class ht{static fromObject(t){let n=new ht(null);return rn(t,(i,o)=>{n=n.set(new ut(i),o)}),n}constructor(t,n=o5()){this.value=t,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,n){if(this.value!=null&&n(this.value))return{path:Xe(),value:this.value};if(Ye(t))return null;{const i=qe(t),o=this.children.get(i);if(o!==null){const l=o.findRootMostMatchingPathAndValue(pt(t),n);return l!=null?{path:At(new ut(i),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(Ye(t))return this;{const n=qe(t),i=this.children.get(n);return i!==null?i.subtree(pt(t)):new ht(null)}}set(t,n){if(Ye(t))return new ht(n,this.children);{const i=qe(t),l=(this.children.get(i)||new ht(null)).set(pt(t),n),u=this.children.insert(i,l);return new ht(this.value,u)}}remove(t){if(Ye(t))return this.children.isEmpty()?new ht(null):new ht(null,this.children);{const n=qe(t),i=this.children.get(n);if(i){const o=i.remove(pt(t));let l;return o.isEmpty()?l=this.children.remove(n):l=this.children.insert(n,o),this.value===null&&l.isEmpty()?new ht(null):new ht(this.value,l)}else return this}}get(t){if(Ye(t))return this.value;{const n=qe(t),i=this.children.get(n);return i?i.get(pt(t)):null}}setTree(t,n){if(Ye(t))return n;{const i=qe(t),l=(this.children.get(i)||new ht(null)).setTree(pt(t),n);let u;return l.isEmpty()?u=this.children.remove(i):u=this.children.insert(i,l),new ht(this.value,u)}}fold(t){return this.fold_(Xe(),t)}fold_(t,n){const i={};return this.children.inorderTraversal((o,l)=>{i[o]=l.fold_(At(t,o),n)}),n(t,this.value,i)}findOnPath(t,n){return this.findOnPath_(t,Xe(),n)}findOnPath_(t,n,i){const o=this.value?i(n,this.value):!1;if(o)return o;if(Ye(t))return null;{const l=qe(t),u=this.children.get(l);return u?u.findOnPath_(pt(t),At(n,l),i):null}}foreachOnPath(t,n){return this.foreachOnPath_(t,Xe(),n)}foreachOnPath_(t,n,i){if(Ye(t))return this;{this.value&&i(n,this.value);const o=qe(t),l=this.children.get(o);return l?l.foreachOnPath_(pt(t),At(n,o),i):new ht(null)}}foreach(t){this.foreach_(Xe(),t)}foreach_(t,n){this.children.inorderTraversal((i,o)=>{o.foreach_(At(t,i),n)}),this.value&&n(t,this.value)}foreachChild(t){this.children.inorderTraversal((n,i)=>{i.value&&t(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(t){this.writeTree_=t}static empty(){return new yr(new ht(null))}}function jc(e,t,n){if(Ye(t))return new yr(new ht(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(i!=null){const o=i.path;let l=i.value;const u=dn(o,t);return l=l.updateChild(u,n),new yr(e.writeTree_.set(o,l))}else{const o=new ht(n),l=e.writeTree_.setTree(t,o);return new yr(l)}}}function dv(e,t,n){let i=e;return rn(n,(o,l)=>{i=jc(i,At(t,o),l)}),i}function iE(e,t){if(Ye(t))return yr.empty();{const n=e.writeTree_.setTree(t,new ht(null));return new yr(n)}}function fv(e,t){return Io(e,t)!=null}function Io(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return n!=null?e.writeTree_.get(n.path).getChild(dn(n.path,t)):null}function sE(e){const t=[],n=e.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(It,(i,o)=>{t.push(new Ve(i,o))}):e.writeTree_.children.inorderTraversal((i,o)=>{o.value!=null&&t.push(new Ve(i,o.value))}),t}function ds(e,t){if(Ye(t))return e;{const n=Io(e,t);return n!=null?new yr(new ht(n)):new yr(e.writeTree_.subtree(t))}}function hv(e){return e.writeTree_.isEmpty()}function Fa(e,t){return ZA(Xe(),e.writeTree_,t)}function ZA(e,t,n){if(t.value!=null)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal((o,l)=>{o===".priority"?(he(l.value!==null,"Priority writes must always be leaf nodes"),i=l.value):n=ZA(At(e,o),l,n)}),!n.getChild(e).isEmpty()&&i!==null&&(n=n.updateChild(At(e,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(e,t){return nI(t,e)}function a5(e,t,n,i,o){he(i>e.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:o}),o&&(e.visibleWrites=jc(e.visibleWrites,t,n)),e.lastWriteId=i}function l5(e,t,n,i){he(i>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:i,visible:!0}),e.visibleWrites=dv(e.visibleWrites,t,n),e.lastWriteId=i}function c5(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}function u5(e,t){const n=e.allWrites.findIndex(f=>f.writeId===t);he(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let o=i.visible,l=!1,u=e.allWrites.length-1;for(;o&&u>=0;){const f=e.allWrites[u];f.visible&&(u>=n&&d5(f,i.path)?o=!1:Zn(i.path,f.path)&&(l=!0)),u--}if(o){if(l)return f5(e),!0;if(i.snap)e.visibleWrites=iE(e.visibleWrites,i.path);else{const f=i.children;rn(f,p=>{e.visibleWrites=iE(e.visibleWrites,At(i.path,p))})}return!0}else return!1}function d5(e,t){if(e.snap)return Zn(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Zn(At(e.path,n),t))return!0;return!1}function f5(e){e.visibleWrites=JA(e.allWrites,h5,Xe()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function h5(e){return e.visible}function JA(e,t,n){let i=yr.empty();for(let o=0;o<e.length;++o){const l=e[o];if(t(l)){const u=l.path;let f;if(l.snap)Zn(n,u)?(f=dn(n,u),i=jc(i,f,l.snap)):Zn(u,n)&&(f=dn(u,n),i=jc(i,Xe(),l.snap.getChild(f)));else if(l.children){if(Zn(n,u))f=dn(n,u),i=dv(i,f,l.children);else if(Zn(u,n))if(f=dn(u,n),Ye(f))i=dv(i,Xe(),l.children);else{const p=ja(l.children,qe(f));if(p){const h=p.getChild(pt(f));i=jc(i,Xe(),h)}}}else throw Ya("WriteRecord should have .snap or .children")}}return i}function eI(e,t,n,i,o){if(!i&&!o){const l=Io(e.visibleWrites,t);if(l!=null)return l;{const u=ds(e.visibleWrites,t);if(hv(u))return n;if(n==null&&!fv(u,Xe()))return null;{const f=n||Ne.EMPTY_NODE;return Fa(u,f)}}}else{const l=ds(e.visibleWrites,t);if(!o&&hv(l))return n;if(!o&&n==null&&!fv(l,Xe()))return null;{const u=function(h){return(h.visible||o)&&(!i||!~i.indexOf(h.writeId))&&(Zn(h.path,t)||Zn(t,h.path))},f=JA(e.allWrites,u,t),p=n||Ne.EMPTY_NODE;return Fa(f,p)}}}function p5(e,t,n){let i=Ne.EMPTY_NODE;const o=Io(e.visibleWrites,t);if(o)return o.isLeafNode()||o.forEachChild(It,(l,u)=>{i=i.updateImmediateChild(l,u)}),i;if(n){const l=ds(e.visibleWrites,t);return n.forEachChild(It,(u,f)=>{const p=Fa(ds(l,new ut(u)),f);i=i.updateImmediateChild(u,p)}),sE(l).forEach(u=>{i=i.updateImmediateChild(u.name,u.node)}),i}else{const l=ds(e.visibleWrites,t);return sE(l).forEach(u=>{i=i.updateImmediateChild(u.name,u.node)}),i}}function m5(e,t,n,i,o){he(i||o,"Either existingEventSnap or existingServerSnap must exist");const l=At(t,n);if(fv(e.visibleWrites,l))return null;{const u=ds(e.visibleWrites,l);return hv(u)?o.getChild(n):Fa(u,o.getChild(n))}}function g5(e,t,n,i){const o=At(t,n),l=Io(e.visibleWrites,o);if(l!=null)return l;if(i.isCompleteForChild(n)){const u=ds(e.visibleWrites,o);return Fa(u,i.getNode().getImmediateChild(n))}else return null}function y5(e,t){return Io(e.visibleWrites,t)}function v5(e,t,n,i,o,l,u){let f;const p=ds(e.visibleWrites,t),h=Io(p,Xe());if(h!=null)f=h;else if(n!=null)f=Fa(p,n);else return[];if(f=f.withIndex(u),!f.isEmpty()&&!f.isLeafNode()){const y=[],_=u.getCompare(),v=l?f.getReverseIteratorFrom(i,u):f.getIteratorFrom(i,u);let b=v.getNext();for(;b&&y.length<o;)_(b,i)!==0&&y.push(b),b=v.getNext();return y}else return[]}function _5(){return{visibleWrites:yr.empty(),allWrites:[],lastWriteId:-1}}function sh(e,t,n,i){return eI(e.writeTree,e.treePath,t,n,i)}function M_(e,t){return p5(e.writeTree,e.treePath,t)}function oE(e,t,n,i){return m5(e.writeTree,e.treePath,t,n,i)}function oh(e,t){return y5(e.writeTree,At(e.treePath,t))}function b5(e,t,n,i,o,l){return v5(e.writeTree,e.treePath,t,n,i,o,l)}function L_(e,t,n){return g5(e.writeTree,e.treePath,t,n)}function tI(e,t){return nI(At(e.treePath,t),e.writeTree)}function nI(e,t){return{treePath:e,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S5{constructor(){this.changeMap=new Map}trackChildChange(t){const n=t.type,i=t.childName;he(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),he(i!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(i);if(o){const l=o.type;if(n==="child_added"&&l==="child_removed")this.changeMap.set(i,ru(i,t.snapshotNode,o.snapshotNode));else if(n==="child_removed"&&l==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&l==="child_changed")this.changeMap.set(i,nu(i,o.oldSnap));else if(n==="child_changed"&&l==="child_added")this.changeMap.set(i,Ba(i,t.snapshotNode));else if(n==="child_changed"&&l==="child_changed")this.changeMap.set(i,ru(i,t.snapshotNode,o.oldSnap));else throw Ya("Illegal combination of changes: "+t+" occurred after "+o)}else this.changeMap.set(i,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x5{getCompleteChild(t){return null}getChildAfterChild(t,n,i){return null}}const rI=new x5;class P_{constructor(t,n,i=null){this.writes_=t,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(t){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(t))return n.getNode().getImmediateChild(t);{const i=this.optCompleteServerCache_!=null?new Ss(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return L_(this.writes_,t,i)}}getChildAfterChild(t,n,i){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:xo(this.viewCache_),l=b5(this.writes_,o,n,1,i,t);return l.length===0?null:l[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w5(e){return{filter:e}}function E5(e,t){he(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),he(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function T5(e,t,n,i,o){const l=new S5;let u,f;if(n.type===fr.OVERWRITE){const h=n;h.source.fromUser?u=pv(e,t,h.path,h.snap,i,o,l):(he(h.source.fromServer,"Unknown source."),f=h.source.tagged||t.serverCache.isFiltered()&&!Ye(h.path),u=ah(e,t,h.path,h.snap,i,o,f,l))}else if(n.type===fr.MERGE){const h=n;h.source.fromUser?u=R5(e,t,h.path,h.children,i,o,l):(he(h.source.fromServer,"Unknown source."),f=h.source.tagged||t.serverCache.isFiltered(),u=mv(e,t,h.path,h.children,i,o,f,l))}else if(n.type===fr.ACK_USER_WRITE){const h=n;h.revert?u=D5(e,t,h.path,i,o,l):u=A5(e,t,h.path,h.affectedTree,i,o,l)}else if(n.type===fr.LISTEN_COMPLETE)u=I5(e,t,n.path,i,l);else throw Ya("Unknown operation type: "+n.type);const p=l.getChanges();return C5(t,u,p),{viewCache:u,changes:p}}function C5(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const o=i.getNode().isLeafNode()||i.getNode().isEmpty(),l=ih(e);(n.length>0||!e.eventCache.isFullyInitialized()||o&&!i.getNode().equals(l)||!i.getNode().getPriority().equals(l.getPriority()))&&n.push(QA(ih(t)))}}function iI(e,t,n,i,o,l){const u=t.eventCache;if(oh(i,n)!=null)return t;{let f,p;if(Ye(n))if(he(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const h=xo(t),y=h instanceof Ne?h:Ne.EMPTY_NODE,_=M_(i,y);f=e.filter.updateFullNode(t.eventCache.getNode(),_,l)}else{const h=sh(i,xo(t));f=e.filter.updateFullNode(t.eventCache.getNode(),h,l)}else{const h=qe(n);if(h===".priority"){he(bs(n)===1,"Can't have a priority with additional path components");const y=u.getNode();p=t.serverCache.getNode();const _=oE(i,n,y,p);_!=null?f=e.filter.updatePriority(y,_):f=u.getNode()}else{const y=pt(n);let _;if(u.isCompleteForChild(h)){p=t.serverCache.getNode();const v=oE(i,n,u.getNode(),p);v!=null?_=u.getNode().getImmediateChild(h).updateChild(y,v):_=u.getNode().getImmediateChild(h)}else _=L_(i,h,t.serverCache);_!=null?f=e.filter.updateChild(u.getNode(),h,_,y,o,l):f=u.getNode()}}return Pc(t,f,u.isFullyInitialized()||Ye(n),e.filter.filtersNodes())}}function ah(e,t,n,i,o,l,u,f){const p=t.serverCache;let h;const y=u?e.filter:e.filter.getIndexedFilter();if(Ye(n))h=y.updateFullNode(p.getNode(),i,null);else if(y.filtersNodes()&&!p.isFiltered()){const b=p.getNode().updateChild(n,i);h=y.updateFullNode(p.getNode(),b,null)}else{const b=qe(n);if(!p.isCompleteForPath(n)&&bs(n)>1)return t;const x=pt(n),C=p.getNode().getImmediateChild(b).updateChild(x,i);b===".priority"?h=y.updatePriority(p.getNode(),C):h=y.updateChild(p.getNode(),b,C,x,rI,null)}const _=XA(t,h,p.isFullyInitialized()||Ye(n),y.filtersNodes()),v=new P_(o,_,l);return iI(e,_,n,o,v,f)}function pv(e,t,n,i,o,l,u){const f=t.eventCache;let p,h;const y=new P_(o,t,l);if(Ye(n))h=e.filter.updateFullNode(t.eventCache.getNode(),i,u),p=Pc(t,h,!0,e.filter.filtersNodes());else{const _=qe(n);if(_===".priority")h=e.filter.updatePriority(t.eventCache.getNode(),i),p=Pc(t,h,f.isFullyInitialized(),f.isFiltered());else{const v=pt(n),b=f.getNode().getImmediateChild(_);let x;if(Ye(v))x=i;else{const O=y.getCompleteChild(_);O!=null?T_(v)===".priority"&&O.getChild(HA(v)).isEmpty()?x=O:x=O.updateChild(v,i):x=Ne.EMPTY_NODE}if(b.equals(x))p=t;else{const O=e.filter.updateChild(f.getNode(),_,x,v,y,u);p=Pc(t,O,f.isFullyInitialized(),e.filter.filtersNodes())}}}return p}function aE(e,t){return e.eventCache.isCompleteForChild(t)}function R5(e,t,n,i,o,l,u){let f=t;return i.foreach((p,h)=>{const y=At(n,p);aE(t,qe(y))&&(f=pv(e,f,y,h,o,l,u))}),i.foreach((p,h)=>{const y=At(n,p);aE(t,qe(y))||(f=pv(e,f,y,h,o,l,u))}),f}function lE(e,t,n){return n.foreach((i,o)=>{t=t.updateChild(i,o)}),t}function mv(e,t,n,i,o,l,u,f){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let p=t,h;Ye(n)?h=i:h=new ht(null).setTree(n,i);const y=t.serverCache.getNode();return h.children.inorderTraversal((_,v)=>{if(y.hasChild(_)){const b=t.serverCache.getNode().getImmediateChild(_),x=lE(e,b,v);p=ah(e,p,new ut(_),x,o,l,u,f)}}),h.children.inorderTraversal((_,v)=>{const b=!t.serverCache.isCompleteForChild(_)&&v.value===null;if(!y.hasChild(_)&&!b){const x=t.serverCache.getNode().getImmediateChild(_),O=lE(e,x,v);p=ah(e,p,new ut(_),O,o,l,u,f)}}),p}function A5(e,t,n,i,o,l,u){if(oh(o,n)!=null)return t;const f=t.serverCache.isFiltered(),p=t.serverCache;if(i.value!=null){if(Ye(n)&&p.isFullyInitialized()||p.isCompleteForPath(n))return ah(e,t,n,p.getNode().getChild(n),o,l,f,u);if(Ye(n)){let h=new ht(null);return p.getNode().forEachChild(Ra,(y,_)=>{h=h.set(new ut(y),_)}),mv(e,t,n,h,o,l,f,u)}else return t}else{let h=new ht(null);return i.foreach((y,_)=>{const v=At(n,y);p.isCompleteForPath(v)&&(h=h.set(y,p.getNode().getChild(v)))}),mv(e,t,n,h,o,l,f,u)}}function I5(e,t,n,i,o){const l=t.serverCache,u=XA(t,l.getNode(),l.isFullyInitialized()||Ye(n),l.isFiltered());return iI(e,u,n,i,rI,o)}function D5(e,t,n,i,o,l){let u;if(oh(i,n)!=null)return t;{const f=new P_(i,t,o),p=t.eventCache.getNode();let h;if(Ye(n)||qe(n)===".priority"){let y;if(t.serverCache.isFullyInitialized())y=sh(i,xo(t));else{const _=t.serverCache.getNode();he(_ instanceof Ne,"serverChildren would be complete if leaf node"),y=M_(i,_)}y=y,h=e.filter.updateFullNode(p,y,l)}else{const y=qe(n);let _=L_(i,y,t.serverCache);_==null&&t.serverCache.isCompleteForChild(y)&&(_=p.getImmediateChild(y)),_!=null?h=e.filter.updateChild(p,y,_,pt(n),f,l):t.eventCache.getNode().hasChild(y)?h=e.filter.updateChild(p,y,Ne.EMPTY_NODE,pt(n),f,l):h=p,h.isEmpty()&&t.serverCache.isFullyInitialized()&&(u=sh(i,xo(t)),u.isLeafNode()&&(h=e.filter.updateFullNode(h,u,l)))}return u=t.serverCache.isFullyInitialized()||oh(i,Xe())!=null,Pc(t,h,u,e.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O5{constructor(t,n){this.query_=t,this.eventRegistrations_=[];const i=this.query_._queryParams,o=new I_(i.getIndex()),l=Q3(i);this.processor_=w5(l);const u=n.serverCache,f=n.eventCache,p=o.updateFullNode(Ne.EMPTY_NODE,u.getNode(),null),h=l.updateFullNode(Ne.EMPTY_NODE,f.getNode(),null),y=new Ss(p,u.isFullyInitialized(),o.filtersNodes()),_=new Ss(h,f.isFullyInitialized(),l.filtersNodes());this.viewCache_=Kh(_,y),this.eventGenerator_=new n5(this.query_)}get query(){return this.query_}}function k5(e){return e.viewCache_.serverCache.getNode()}function N5(e){return ih(e.viewCache_)}function M5(e,t){const n=xo(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Ye(t)&&!n.getImmediateChild(qe(t)).isEmpty())?n.getChild(t):null}function cE(e){return e.eventRegistrations_.length===0}function L5(e,t){e.eventRegistrations_.push(t)}function uE(e,t,n){const i=[];if(n){he(t==null,"A cancel should cancel all event registrations.");const o=e.query._path;e.eventRegistrations_.forEach(l=>{const u=l.createCancelEvent(n,o);u&&i.push(u)})}if(t){let o=[];for(let l=0;l<e.eventRegistrations_.length;++l){const u=e.eventRegistrations_[l];if(!u.matches(t))o.push(u);else if(t.hasAnyCallback()){o=o.concat(e.eventRegistrations_.slice(l+1));break}}e.eventRegistrations_=o}else e.eventRegistrations_=[];return i}function dE(e,t,n,i){t.type===fr.MERGE&&t.source.queryId!==null&&(he(xo(e.viewCache_),"We should always have a full cache before handling merges"),he(ih(e.viewCache_),"Missing event cache, even though we have a server cache"));const o=e.viewCache_,l=T5(e.processor_,o,t,n,i);return E5(e.processor_,l.viewCache),he(l.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=l.viewCache,sI(e,l.changes,l.viewCache.eventCache.getNode(),null)}function P5(e,t){const n=e.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(It,(l,u)=>{i.push(Ba(l,u))}),n.isFullyInitialized()&&i.push(QA(n.getNode())),sI(e,i,n.getNode(),t)}function sI(e,t,n,i){const o=i?[i]:e.eventRegistrations_;return r5(e.eventGenerator_,t,n,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lh;class oI{constructor(){this.views=new Map}}function j5(e){he(!lh,"__referenceConstructor has already been defined"),lh=e}function $5(){return he(lh,"Reference.ts has not been loaded"),lh}function U5(e){return e.views.size===0}function j_(e,t,n,i){const o=t.source.queryId;if(o!==null){const l=e.views.get(o);return he(l!=null,"SyncTree gave us an op for an invalid query."),dE(l,t,n,i)}else{let l=[];for(const u of e.views.values())l=l.concat(dE(u,t,n,i));return l}}function aI(e,t,n,i,o){const l=t._queryIdentifier,u=e.views.get(l);if(!u){let f=sh(n,o?i:null),p=!1;f?p=!0:i instanceof Ne?(f=M_(n,i),p=!1):(f=Ne.EMPTY_NODE,p=!1);const h=Kh(new Ss(f,p,!1),new Ss(i,o,!1));return new O5(t,h)}return u}function z5(e,t,n,i,o,l){const u=aI(e,t,i,o,l);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,u),L5(u,n),P5(u,n)}function B5(e,t,n,i){const o=t._queryIdentifier,l=[];let u=[];const f=xs(e);if(o==="default")for(const[p,h]of e.views.entries())u=u.concat(uE(h,n,i)),cE(h)&&(e.views.delete(p),h.query._queryParams.loadsAllData()||l.push(h.query));else{const p=e.views.get(o);p&&(u=u.concat(uE(p,n,i)),cE(p)&&(e.views.delete(o),p.query._queryParams.loadsAllData()||l.push(p.query)))}return f&&!xs(e)&&l.push(new($5())(t._repo,t._path)),{removed:l,events:u}}function lI(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function fs(e,t){let n=null;for(const i of e.views.values())n=n||M5(i,t);return n}function cI(e,t){if(t._queryParams.loadsAllData())return Zh(e);{const i=t._queryIdentifier;return e.views.get(i)}}function uI(e,t){return cI(e,t)!=null}function xs(e){return Zh(e)!=null}function Zh(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ch;function H5(e){he(!ch,"__referenceConstructor has already been defined"),ch=e}function F5(){return he(ch,"Reference.ts has not been loaded"),ch}let q5=1;class fE{constructor(t){this.listenProvider_=t,this.syncPointTree_=new ht(null),this.pendingWriteTree_=_5(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function dI(e,t,n,i,o){return a5(e.pendingWriteTree_,t,n,i,o),o?nl(e,new So(O_(),t,n)):[]}function V5(e,t,n,i){l5(e.pendingWriteTree_,t,n,i);const o=ht.fromObject(n);return nl(e,new Ha(O_(),t,o))}function as(e,t,n=!1){const i=c5(e.pendingWriteTree_,t);if(u5(e.pendingWriteTree_,t)){let l=new ht(null);return i.snap!=null?l=l.set(Xe(),!0):rn(i.children,u=>{l=l.set(new ut(u),!0)}),nl(e,new rh(i.path,l,n))}else return[]}function Eu(e,t,n){return nl(e,new So(k_(),t,n))}function G5(e,t,n){const i=ht.fromObject(n);return nl(e,new Ha(k_(),t,i))}function W5(e,t){return nl(e,new su(k_(),t))}function Y5(e,t,n){const i=U_(e,n);if(i){const o=z_(i),l=o.path,u=o.queryId,f=dn(l,t),p=new su(N_(u),f);return B_(e,l,p)}else return[]}function uh(e,t,n,i,o=!1){const l=t._path,u=e.syncPointTree_.get(l);let f=[];if(u&&(t._queryIdentifier==="default"||uI(u,t))){const p=B5(u,t,n,i);U5(u)&&(e.syncPointTree_=e.syncPointTree_.remove(l));const h=p.removed;if(f=p.events,!o){const y=h.findIndex(v=>v._queryParams.loadsAllData())!==-1,_=e.syncPointTree_.findOnPath(l,(v,b)=>xs(b));if(y&&!_){const v=e.syncPointTree_.subtree(l);if(!v.isEmpty()){const b=X5(v);for(let x=0;x<b.length;++x){const O=b[x],C=O.query,I=mI(e,O);e.listenProvider_.startListening($c(C),ou(e,C),I.hashFn,I.onComplete)}}}!_&&h.length>0&&!i&&(y?e.listenProvider_.stopListening($c(t),null):h.forEach(v=>{const b=e.queryToTagMap.get(Jh(v));e.listenProvider_.stopListening($c(v),b)}))}Z5(e,h)}return f}function fI(e,t,n,i){const o=U_(e,i);if(o!=null){const l=z_(o),u=l.path,f=l.queryId,p=dn(u,t),h=new So(N_(f),p,n);return B_(e,u,h)}else return[]}function Q5(e,t,n,i){const o=U_(e,i);if(o){const l=z_(o),u=l.path,f=l.queryId,p=dn(u,t),h=ht.fromObject(n),y=new Ha(N_(f),p,h);return B_(e,u,y)}else return[]}function gv(e,t,n,i=!1){const o=t._path;let l=null,u=!1;e.syncPointTree_.foreachOnPath(o,(v,b)=>{const x=dn(v,o);l=l||fs(b,x),u=u||xs(b)});let f=e.syncPointTree_.get(o);f?(u=u||xs(f),l=l||fs(f,Xe())):(f=new oI,e.syncPointTree_=e.syncPointTree_.set(o,f));let p;l!=null?p=!0:(p=!1,l=Ne.EMPTY_NODE,e.syncPointTree_.subtree(o).foreachChild((b,x)=>{const O=fs(x,Xe());O&&(l=l.updateImmediateChild(b,O))}));const h=uI(f,t);if(!h&&!t._queryParams.loadsAllData()){const v=Jh(t);he(!e.queryToTagMap.has(v),"View does not exist, but we have a tag");const b=J5();e.queryToTagMap.set(v,b),e.tagToQueryMap.set(b,v)}const y=Xh(e.pendingWriteTree_,o);let _=z5(f,t,n,y,l,p);if(!h&&!u&&!i){const v=cI(f,t);_=_.concat(eU(e,t,v))}return _}function $_(e,t,n){const o=e.pendingWriteTree_,l=e.syncPointTree_.findOnPath(t,(u,f)=>{const p=dn(u,t),h=fs(f,p);if(h)return h});return eI(o,t,l,n,!0)}function K5(e,t){const n=t._path;let i=null;e.syncPointTree_.foreachOnPath(n,(h,y)=>{const _=dn(h,n);i=i||fs(y,_)});let o=e.syncPointTree_.get(n);o?i=i||fs(o,Xe()):(o=new oI,e.syncPointTree_=e.syncPointTree_.set(n,o));const l=i!=null,u=l?new Ss(i,!0,!1):null,f=Xh(e.pendingWriteTree_,t._path),p=aI(o,t,f,l?u.getNode():Ne.EMPTY_NODE,l);return N5(p)}function nl(e,t){return hI(t,e.syncPointTree_,null,Xh(e.pendingWriteTree_,Xe()))}function hI(e,t,n,i){if(Ye(e.path))return pI(e,t,n,i);{const o=t.get(Xe());n==null&&o!=null&&(n=fs(o,Xe()));let l=[];const u=qe(e.path),f=e.operationForChild(u),p=t.children.get(u);if(p&&f){const h=n?n.getImmediateChild(u):null,y=tI(i,u);l=l.concat(hI(f,p,h,y))}return o&&(l=l.concat(j_(o,e,i,n))),l}}function pI(e,t,n,i){const o=t.get(Xe());n==null&&o!=null&&(n=fs(o,Xe()));let l=[];return t.children.inorderTraversal((u,f)=>{const p=n?n.getImmediateChild(u):null,h=tI(i,u),y=e.operationForChild(u);y&&(l=l.concat(pI(y,f,p,h)))}),o&&(l=l.concat(j_(o,e,i,n))),l}function mI(e,t){const n=t.query,i=ou(e,n);return{hashFn:()=>(k5(t)||Ne.EMPTY_NODE).hash(),onComplete:o=>{if(o==="ok")return i?Y5(e,n._path,i):W5(e,n._path);{const l=W$(o,n);return uh(e,n,null,l)}}}}function ou(e,t){const n=Jh(t);return e.queryToTagMap.get(n)}function Jh(e){return e._path.toString()+"$"+e._queryIdentifier}function U_(e,t){return e.tagToQueryMap.get(t)}function z_(e){const t=e.indexOf("$");return he(t!==-1&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ut(e.substr(0,t))}}function B_(e,t,n){const i=e.syncPointTree_.get(t);he(i,"Missing sync point for query tag that we're tracking");const o=Xh(e.pendingWriteTree_,t);return j_(i,n,o,null)}function X5(e){return e.fold((t,n,i)=>{if(n&&xs(n))return[Zh(n)];{let o=[];return n&&(o=lI(n)),rn(i,(l,u)=>{o=o.concat(u)}),o}})}function $c(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(F5())(e._repo,e._path):e}function Z5(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const o=Jh(i),l=e.queryToTagMap.get(o);e.queryToTagMap.delete(o),e.tagToQueryMap.delete(l)}}}function J5(){return q5++}function eU(e,t,n){const i=t._path,o=ou(e,t),l=mI(e,n),u=e.listenProvider_.startListening($c(t),o,l.hashFn,l.onComplete),f=e.syncPointTree_.subtree(i);if(o)he(!xs(f.value),"If we're adding a query, it shouldn't be shadowed");else{const p=f.fold((h,y,_)=>{if(!Ye(h)&&y&&xs(y))return[Zh(y).query];{let v=[];return y&&(v=v.concat(lI(y).map(b=>b.query))),rn(_,(b,x)=>{v=v.concat(x)}),v}});for(let h=0;h<p.length;++h){const y=p[h];e.listenProvider_.stopListening($c(y),ou(e,y))}}return u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(t){this.node_=t}getImmediateChild(t){const n=this.node_.getImmediateChild(t);return new H_(n)}node(){return this.node_}}class F_{constructor(t,n){this.syncTree_=t,this.path_=n}getImmediateChild(t){const n=At(this.path_,t);return new F_(this.syncTree_,n)}node(){return $_(this.syncTree_,this.path_)}}const tU=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},hE=function(e,t,n){if(!e||typeof e!="object")return e;if(he(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return nU(e[".sv"],t,n);if(typeof e[".sv"]=="object")return rU(e[".sv"],t);he(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},nU=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:he(!1,"Unexpected server value: "+e)}},rU=function(e,t,n){e.hasOwnProperty("increment")||he(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;typeof i!="number"&&he(!1,"Unexpected increment value: "+i);const o=t.node();if(he(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return i;const u=o.getValue();return typeof u!="number"?i:u+i},gI=function(e,t,n,i){return q_(t,new F_(n,e),i)},yI=function(e,t,n){return q_(e,new H_(t),n)};function q_(e,t,n){const i=e.getPriority().val(),o=hE(i,t.getImmediateChild(".priority"),n);let l;if(e.isLeafNode()){const u=e,f=hE(u.getValue(),t,n);return f!==u.getValue()||o!==u.getPriority().val()?new Ft(f,$t(o)):e}else{const u=e;return l=u,o!==u.getPriority().val()&&(l=l.updatePriority(new Ft(o))),u.forEachChild(It,(f,p)=>{const h=q_(p,t.getImmediateChild(f),n);h!==p&&(l=l.updateImmediateChild(f,h))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(t="",n=null,i={children:{},childCount:0}){this.name=t,this.parent=n,this.node=i}}function G_(e,t){let n=t instanceof ut?t:new ut(t),i=e,o=qe(n);for(;o!==null;){const l=ja(i.node.children,o)||{children:{},childCount:0};i=new V_(o,i,l),n=pt(n),o=qe(n)}return i}function rl(e){return e.node.value}function vI(e,t){e.node.value=t,yv(e)}function _I(e){return e.node.childCount>0}function iU(e){return rl(e)===void 0&&!_I(e)}function ep(e,t){rn(e.node.children,(n,i)=>{t(new V_(n,e,i))})}function bI(e,t,n,i){n&&t(e),ep(e,o=>{bI(o,t,!0)})}function sU(e,t,n){let i=e.parent;for(;i!==null;){if(t(i))return!0;i=i.parent}return!1}function Tu(e){return new ut(e.parent===null?e.name:Tu(e.parent)+"/"+e.name)}function yv(e){e.parent!==null&&oU(e.parent,e.name,e)}function oU(e,t,n){const i=iU(n),o=jr(e.node.children,t);i&&o?(delete e.node.children[t],e.node.childCount--,yv(e)):!i&&!o&&(e.node.children[t]=n.node,e.node.childCount++,yv(e))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aU=/[\[\].#$\/\u0000-\u001F\u007F]/,lU=/[\[\].#$\u0000-\u001F\u007F]/,iy=10*1024*1024,W_=function(e){return typeof e=="string"&&e.length!==0&&!aU.test(e)},SI=function(e){return typeof e=="string"&&e.length!==0&&!lU.test(e)},cU=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),SI(e)},uU=function(e){return e===null||typeof e=="string"||typeof e=="number"&&!b_(e)||e&&typeof e=="object"&&jr(e,".sv")},xI=function(e,t,n,i){i&&t===void 0||tp(Uh(e,"value"),t,n)},tp=function(e,t,n){const i=n instanceof ut?new R3(n,e):n;if(t===void 0)throw new Error(e+"contains undefined "+so(i));if(typeof t=="function")throw new Error(e+"contains a function "+so(i)+" with contents = "+t.toString());if(b_(t))throw new Error(e+"contains "+t.toString()+" "+so(i));if(typeof t=="string"&&t.length>iy/3&&zh(t)>iy)throw new Error(e+"contains a string greater than "+iy+" utf8 bytes "+so(i)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let o=!1,l=!1;if(rn(t,(u,f)=>{if(u===".value")o=!0;else if(u!==".priority"&&u!==".sv"&&(l=!0,!W_(u)))throw new Error(e+" contains an invalid key ("+u+") "+so(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);A3(i,u),tp(e,f,i),I3(i)}),o&&l)throw new Error(e+' contains ".value" child '+so(i)+" in addition to actual children.")}},dU=function(e,t){let n,i;for(n=0;n<t.length;n++){i=t[n];const l=tu(i);for(let u=0;u<l.length;u++)if(!(l[u]===".priority"&&u===l.length-1)){if(!W_(l[u]))throw new Error(e+"contains an invalid key ("+l[u]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}t.sort(C3);let o=null;for(n=0;n<t.length;n++){if(i=t[n],o!==null&&Zn(o,i))throw new Error(e+"contains a path "+o.toString()+" that is ancestor of another path "+i.toString());o=i}},fU=function(e,t,n,i){const o=Uh(e,"values");if(!(t&&typeof t=="object")||Array.isArray(t))throw new Error(o+" must be an object containing the children to replace.");const l=[];rn(t,(u,f)=>{const p=new ut(u);if(tp(o,f,At(n,p)),T_(p)===".priority"&&!uU(f))throw new Error(o+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");l.push(p)}),dU(o,l)},wI=function(e,t,n,i){if(!SI(n))throw new Error(Uh(e,t)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},hU=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),wI(e,t,n)},Y_=function(e,t){if(qe(t)===".info")throw new Error(e+" failed = Can't modify data under /.info/")},pU=function(e,t){const n=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!W_(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!cU(n))throw new Error(Uh(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mU{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function np(e,t){let n=null;for(let i=0;i<t.length;i++){const o=t[i],l=o.getPath();n!==null&&!C_(l,n.path)&&(e.eventLists_.push(n),n=null),n===null&&(n={events:[],path:l}),n.events.push(o)}n&&e.eventLists_.push(n)}function EI(e,t,n){np(e,n),TI(e,i=>C_(i,t))}function nr(e,t,n){np(e,n),TI(e,i=>Zn(i,t)||Zn(t,i))}function TI(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const o=e.eventLists_[i];if(o){const l=o.path;t(l)?(gU(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function gU(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(n!==null){e.events[t]=null;const i=n.getEventRunner();Mc&&en("event: "+n.toString()),tl(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yU="repo_interrupt",vU=25;class _U{constructor(t,n,i,o){this.repoInfo_=t,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new mU,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=nh(),this.transactionQueueTree_=new V_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function bU(e,t,n){if(e.stats_=w_(e.repoInfo_),e.forceRestClient_||X$())e.server_=new th(e.repoInfo_,(i,o,l,u)=>{pE(e,i,o,l,u)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>mE(e,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ut(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new gi(e.repoInfo_,t,(i,o,l,u)=>{pE(e,i,o,l,u)},i=>{mE(e,i)},i=>{SU(e,i)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(i=>{e.server_.refreshAuthToken(i)}),e.appCheckProvider_.addTokenChangeListener(i=>{e.server_.refreshAppCheckToken(i.token)}),e.statsReporter_=n3(e.repoInfo_,()=>new t5(e.stats_,e.server_)),e.infoData_=new K3,e.infoSyncTree_=new fE({startListening:(i,o,l,u)=>{let f=[];const p=e.infoData_.getNode(i._path);return p.isEmpty()||(f=Eu(e.infoSyncTree_,i._path,p),setTimeout(()=>{u("ok")},0)),f},stopListening:()=>{}}),Q_(e,"connected",!1),e.serverSyncTree_=new fE({startListening:(i,o,l,u)=>(e.server_.listen(i,l,o,(f,p)=>{const h=u(f,p);nr(e.eventQueue_,i._path,h)}),[]),stopListening:(i,o)=>{e.server_.unlisten(i,o)}})}function CI(e){const n=e.infoData_.getNode(new ut(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function rp(e){return tU({timestamp:CI(e)})}function pE(e,t,n,i,o){e.dataUpdateCount++;const l=new ut(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let u=[];if(o)if(i){const p=qf(n,h=>$t(h));u=Q5(e.serverSyncTree_,l,p,o)}else{const p=$t(n);u=fI(e.serverSyncTree_,l,p,o)}else if(i){const p=qf(n,h=>$t(h));u=G5(e.serverSyncTree_,l,p)}else{const p=$t(n);u=Eu(e.serverSyncTree_,l,p)}let f=l;u.length>0&&(f=qa(e,l)),nr(e.eventQueue_,f,u)}function mE(e,t){Q_(e,"connected",t),t===!1&&TU(e)}function SU(e,t){rn(t,(n,i)=>{Q_(e,n,i)})}function Q_(e,t,n){const i=new ut("/.info/"+t),o=$t(n);e.infoData_.updateSnapshot(i,o);const l=Eu(e.infoSyncTree_,i,o);nr(e.eventQueue_,i,l)}function K_(e){return e.nextWriteId_++}function xU(e,t,n){const i=K5(e.serverSyncTree_,t);return i!=null?Promise.resolve(i):e.server_.get(t).then(o=>{const l=$t(o).withIndex(t._queryParams.getIndex());gv(e.serverSyncTree_,t,n,!0);let u;if(t._queryParams.loadsAllData())u=Eu(e.serverSyncTree_,t._path,l);else{const f=ou(e.serverSyncTree_,t);u=fI(e.serverSyncTree_,t._path,l,f)}return nr(e.eventQueue_,t._path,u),uh(e.serverSyncTree_,t,n,null,!0),l},o=>(Cu(e,"get for query "+Ut(t)+" failed: "+o),Promise.reject(new Error(o))))}function wU(e,t,n,i,o){Cu(e,"set",{path:t.toString(),value:n,priority:i});const l=rp(e),u=$t(n,i),f=$_(e.serverSyncTree_,t),p=yI(u,f,l),h=K_(e),y=dI(e.serverSyncTree_,t,p,h,!0);np(e.eventQueue_,y),e.server_.put(t.toString(),u.val(!0),(v,b)=>{const x=v==="ok";x||fn("set at "+t+" failed: "+v);const O=as(e.serverSyncTree_,h,!x);nr(e.eventQueue_,t,O),vv(e,o,v,b)});const _=Z_(e,t);qa(e,_),nr(e.eventQueue_,_,[])}function EU(e,t,n,i){Cu(e,"update",{path:t.toString(),value:n});let o=!0;const l=rp(e),u={};if(rn(n,(f,p)=>{o=!1,u[f]=gI(At(t,f),$t(p),e.serverSyncTree_,l)}),o)en("update() called with empty data.  Don't do anything."),vv(e,i,"ok",void 0);else{const f=K_(e),p=V5(e.serverSyncTree_,t,u,f);np(e.eventQueue_,p),e.server_.merge(t.toString(),n,(h,y)=>{const _=h==="ok";_||fn("update at "+t+" failed: "+h);const v=as(e.serverSyncTree_,f,!_),b=v.length>0?qa(e,t):t;nr(e.eventQueue_,b,v),vv(e,i,h,y)}),rn(n,h=>{const y=Z_(e,At(t,h));qa(e,y)}),nr(e.eventQueue_,t,[])}}function TU(e){Cu(e,"onDisconnectEvents");const t=rp(e),n=nh();uv(e.onDisconnect_,Xe(),(o,l)=>{const u=gI(o,l,e.serverSyncTree_,t);KA(n,o,u)});let i=[];uv(n,Xe(),(o,l)=>{i=i.concat(Eu(e.serverSyncTree_,o,l));const u=Z_(e,o);qa(e,u)}),e.onDisconnect_=nh(),nr(e.eventQueue_,Xe(),i)}function CU(e,t,n){let i;qe(t._path)===".info"?i=gv(e.infoSyncTree_,t,n):i=gv(e.serverSyncTree_,t,n),EI(e.eventQueue_,t._path,i)}function gE(e,t,n){let i;qe(t._path)===".info"?i=uh(e.infoSyncTree_,t,n):i=uh(e.serverSyncTree_,t,n),EI(e.eventQueue_,t._path,i)}function RU(e){e.persistentConnection_&&e.persistentConnection_.interrupt(yU)}function Cu(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),en(n,...t)}function vv(e,t,n,i){t&&tl(()=>{if(n==="ok")t(null);else{const o=(n||"error").toUpperCase();let l=o;i&&(l+=": "+i);const u=new Error(l);u.code=o,t(u)}})}function RI(e,t,n){return $_(e.serverSyncTree_,t,n)||Ne.EMPTY_NODE}function X_(e,t=e.transactionQueueTree_){if(t||ip(e,t),rl(t)){const n=II(e,t);he(n.length>0,"Sending zero length transaction queue"),n.every(o=>o.status===0)&&AU(e,Tu(t),n)}else _I(t)&&ep(t,n=>{X_(e,n)})}function AU(e,t,n){const i=n.map(h=>h.currentWriteId),o=RI(e,t,i);let l=o;const u=o.hash();for(let h=0;h<n.length;h++){const y=n[h];he(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const _=dn(t,y.path);l=l.updateChild(_,y.currentOutputSnapshotRaw)}const f=l.val(!0),p=t;e.server_.put(p.toString(),f,h=>{Cu(e,"transaction put response",{path:p.toString(),status:h});let y=[];if(h==="ok"){const _=[];for(let v=0;v<n.length;v++)n[v].status=2,y=y.concat(as(e.serverSyncTree_,n[v].currentWriteId)),n[v].onComplete&&_.push(()=>n[v].onComplete(null,!0,n[v].currentOutputSnapshotResolved)),n[v].unwatcher();ip(e,G_(e.transactionQueueTree_,t)),X_(e,e.transactionQueueTree_),nr(e.eventQueue_,t,y);for(let v=0;v<_.length;v++)tl(_[v])}else{if(h==="datastale")for(let _=0;_<n.length;_++)n[_].status===3?n[_].status=4:n[_].status=0;else{fn("transaction at "+p.toString()+" failed: "+h);for(let _=0;_<n.length;_++)n[_].status=4,n[_].abortReason=h}qa(e,t)}},u)}function qa(e,t){const n=AI(e,t),i=Tu(n),o=II(e,n);return IU(e,o,i),i}function IU(e,t,n){if(t.length===0)return;const i=[];let o=[];const u=t.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<t.length;f++){const p=t[f],h=dn(n,p.path);let y=!1,_;if(he(h!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)y=!0,_=p.abortReason,o=o.concat(as(e.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=vU)y=!0,_="maxretry",o=o.concat(as(e.serverSyncTree_,p.currentWriteId,!0));else{const v=RI(e,p.path,u);p.currentInputSnapshot=v;const b=t[f].update(v.val());if(b!==void 0){tp("transaction failed: Data returned ",b,p.path);let x=$t(b);typeof b=="object"&&b!=null&&jr(b,".priority")||(x=x.updatePriority(v.getPriority()));const C=p.currentWriteId,I=rp(e),M=yI(x,v,I);p.currentOutputSnapshotRaw=x,p.currentOutputSnapshotResolved=M,p.currentWriteId=K_(e),u.splice(u.indexOf(C),1),o=o.concat(dI(e.serverSyncTree_,p.path,M,p.currentWriteId,p.applyLocally)),o=o.concat(as(e.serverSyncTree_,C,!0))}else y=!0,_="nodata",o=o.concat(as(e.serverSyncTree_,p.currentWriteId,!0))}nr(e.eventQueue_,n,o),o=[],y&&(t[f].status=2,(function(v){setTimeout(v,Math.floor(0))})(t[f].unwatcher),t[f].onComplete&&(_==="nodata"?i.push(()=>t[f].onComplete(null,!1,t[f].currentInputSnapshot)):i.push(()=>t[f].onComplete(new Error(_),!1,null))))}ip(e,e.transactionQueueTree_);for(let f=0;f<i.length;f++)tl(i[f]);X_(e,e.transactionQueueTree_)}function AI(e,t){let n,i=e.transactionQueueTree_;for(n=qe(t);n!==null&&rl(i)===void 0;)i=G_(i,n),t=pt(t),n=qe(t);return i}function II(e,t){const n=[];return DI(e,t,n),n.sort((i,o)=>i.order-o.order),n}function DI(e,t,n){const i=rl(t);if(i)for(let o=0;o<i.length;o++)n.push(i[o]);ep(t,o=>{DI(e,o,n)})}function ip(e,t){const n=rl(t);if(n){let i=0;for(let o=0;o<n.length;o++)n[o].status!==2&&(n[i]=n[o],i++);n.length=i,vI(t,n.length>0?n:void 0)}ep(t,i=>{ip(e,i)})}function Z_(e,t){const n=Tu(AI(e,t)),i=G_(e.transactionQueueTree_,t);return sU(i,o=>{sy(e,o)}),sy(e,i),bI(i,o=>{sy(e,o)}),n}function sy(e,t){const n=rl(t);if(n){const i=[];let o=[],l=-1;for(let u=0;u<n.length;u++)n[u].status===3||(n[u].status===1?(he(l===u-1,"All SENT items should be at beginning of queue."),l=u,n[u].status=3,n[u].abortReason="set"):(he(n[u].status===0,"Unexpected transaction status in abort"),n[u].unwatcher(),o=o.concat(as(e.serverSyncTree_,n[u].currentWriteId,!0)),n[u].onComplete&&i.push(n[u].onComplete.bind(null,new Error("set"),!1,null))));l===-1?vI(t,void 0):n.length=l+1,nr(e.eventQueue_,Tu(t),o);for(let u=0;u<i.length;u++)tl(i[u])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DU(e){let t="";const n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let o=n[i];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}t+="/"+o}return t}function OU(e){const t={};e.charAt(0)==="?"&&(e=e.substring(1));for(const n of e.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):fn(`Invalid query segment '${n}' in query '${e}'`)}return t}const yE=function(e,t){const n=kU(e),i=n.namespace;n.domain==="firebase.com"&&bi(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&bi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||H$();const o=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new NA(n.host,n.secure,i,o,t,"",i!==n.subdomain),path:new ut(n.pathString)}},kU=function(e){let t="",n="",i="",o="",l="",u=!0,f="https",p=443;if(typeof e=="string"){let h=e.indexOf("//");h>=0&&(f=e.substring(0,h-1),e=e.substring(h+2));let y=e.indexOf("/");y===-1&&(y=e.length);let _=e.indexOf("?");_===-1&&(_=e.length),t=e.substring(0,Math.min(y,_)),y<_&&(o=DU(e.substring(y,_)));const v=OU(e.substring(Math.min(e.length,_)));h=t.indexOf(":"),h>=0?(u=f==="https"||f==="wss",p=parseInt(t.substring(h+1),10)):h=t.length;const b=t.slice(0,h);if(b.toLowerCase()==="localhost")n="localhost";else if(b.split(".").length<=2)n=b;else{const x=t.indexOf(".");i=t.substring(0,x).toLowerCase(),n=t.substring(x+1),l=i}"ns"in v&&(l=v.ns)}return{host:t,port:p,domain:n,subdomain:i,secure:u,scheme:f,pathString:o,namespace:l}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",NU=(function(){let e=0;const t=[];return function(n){const i=n===e;e=n;let o;const l=new Array(8);for(o=7;o>=0;o--)l[o]=vE.charAt(n%64),n=Math.floor(n/64);he(n===0,"Cannot push at time == 0");let u=l.join("");if(i){for(o=11;o>=0&&t[o]===63;o--)t[o]=0;t[o]++}else for(o=0;o<12;o++)t[o]=Math.floor(Math.random()*64);for(o=0;o<12;o++)u+=vE.charAt(t[o]);return he(u.length===20,"nextPushId: Length should be 20."),u}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MU{constructor(t,n,i,o){this.eventType=t,this.eventRegistration=n,this.snapshot=i,this.prevName=o}getPath(){const t=this.snapshot.ref;return this.eventType==="value"?t._path:t.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ut(this.snapshot.exportVal())}}class LU{constructor(t,n,i){this.eventRegistration=t,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(t,n){this.snapshotCallback=t,this.cancelCallback=n}onValue(t,n){this.snapshotCallback.call(null,t,n)}onCancel(t){return he(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)}get hasCancelCallback(){return!!this.cancelCallback}matches(t){return this.snapshotCallback===t.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}/**
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
 */class J_{constructor(t,n,i,o){this._repo=t,this._path=n,this._queryParams=i,this._orderByCalled=o}get key(){return Ye(this._path)?null:T_(this._path)}get ref(){return new Ti(this._repo,this._path)}get _queryIdentifier(){const t=nE(this._queryParams),n=S_(t);return n==="{}"?"default":n}get _queryObject(){return nE(this._queryParams)}isEqual(t){if(t=Wt(t),!(t instanceof J_))return!1;const n=this._repo===t._repo,i=C_(this._path,t._path),o=this._queryIdentifier===t._queryIdentifier;return n&&i&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+T3(this._path)}}class Ti extends J_{constructor(t,n){super(t,n,new D_,!1)}get parent(){const t=HA(this._path);return t===null?null:new Ti(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}class au{constructor(t,n,i){this._node=t,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const n=new ut(t),i=lu(this.ref,t);return new au(this._node.getChild(n),i,It)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,o)=>t(new au(o,lu(this.ref,i),It)))}hasChild(t){const n=new ut(t);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ln(e,t){return e=Wt(e),e._checkNotDeleted("ref"),t!==void 0?lu(e._root,t):e._root}function lu(e,t){return e=Wt(e),qe(e._path)===null?hU("child","path",t):wI("child","path",t),new Ti(e._repo,At(e._path,t))}function PU(e,t){e=Wt(e),Y_("push",e._path),xI("push",t,e._path,!0);const n=CI(e._repo),i=NU(n),o=lu(e,i),l=lu(e,i);let u;return t!=null?u=eb(l,t).then(()=>l):u=Promise.resolve(l),o.then=u.then.bind(u),o.catch=u.then.bind(u,void 0),o}function kI(e){return Y_("remove",e._path),eb(e,null)}function eb(e,t){e=Wt(e),Y_("set",e._path),xI("set",t,e._path,!1);const n=new mu;return wU(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}function NI(e,t){fU("update",t,e._path);const n=new mu;return EU(e._repo,e._path,t,n.wrapCallback(()=>{})),n.promise}function MI(e){e=Wt(e);const t=new OI(()=>{}),n=new sp(t);return xU(e._repo,e,n).then(i=>new au(i,new Ti(e._repo,e._path),e._queryParams.getIndex()))}class sp{constructor(t){this.callbackContext=t}respondsTo(t){return t==="value"}createEvent(t,n){const i=n._queryParams.getIndex();return new MU("value",this,new au(t.snapshotNode,new Ti(n._repo,n._path),i))}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,n){return this.callbackContext.hasCancelCallback?new LU(this,t,n):null}matches(t){return t instanceof sp?!t.callbackContext||!this.callbackContext?!0:t.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function jU(e,t,n,i,o){let l;if(typeof i=="object"&&(l=void 0,o=i),typeof i=="function"&&(l=i),o&&o.onlyOnce){const p=n,h=(y,_)=>{gE(e._repo,e,f),p(y,_)};h.userCallback=n.userCallback,h.context=n.context,n=h}const u=new OI(n,l||void 0),f=new sp(u);return CU(e._repo,e,f),()=>gE(e._repo,e,f)}function Ru(e,t,n,i){return jU(e,"value",t,n,i)}j5(Ti);H5(Ti);/**
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
 */const $U="FIREBASE_DATABASE_EMULATOR_HOST",_v={};let UU=!1;function zU(e,t,n,i){const o=t.lastIndexOf(":"),l=t.substring(0,o),u=Qa(l);e.repoInfo_=new NA(t,u,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0,n),i&&(e.authTokenProvider_=i)}function BU(e,t,n,i,o){let l=i||e.options.databaseURL;l===void 0&&(e.options.projectId||bi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),en("Using default host for project ",e.options.projectId),l=`${e.options.projectId}-default-rtdb.firebaseio.com`);let u=yE(l,o),f=u.repoInfo,p;typeof process<"u"&&$w&&(p=$w[$U]),p?(l=`http://${p}?ns=${f.namespace}`,u=yE(l,o),f=u.repoInfo):u.repoInfo.secure;const h=new J$(e.name,e.options,t);pU("Invalid Firebase Database URL",u),Ye(u.path)||bi("Database URL must point to the root of a Firebase Database (not including a child path).");const y=FU(f,e,h,new Z$(e,n));return new qU(y,e)}function HU(e,t){const n=_v[t];(!n||n[e.key]!==e)&&bi(`Database ${t}(${e.repoInfo_}) has already been deleted.`),RU(e),delete n[e.key]}function FU(e,t,n,i){let o=_v[t.name];o||(o={},_v[t.name]=o);let l=o[e.toURLString()];return l&&bi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new _U(e,UU,n,i),o[e.toURLString()]=l,l}class qU{constructor(t,n){this._repoInternal=t,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(bU(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ti(this._repo,Xe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(HU(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&bi("Cannot call "+t+" on a deleted database.")}}function VU(e=a_(),t){const n=Xa(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const i=LP("database");i&&GU(n,...i)}return n}function GU(e,t,n,i={}){e=Wt(e),e._checkNotDeleted("useEmulator");const o=`${t}:${n}`,l=e._repoInternal;if(e._instanceStarted){if(o===e._repoInternal.repoInfo_.host&&mo(i,l.repoInfo_.emulatorOptions))return;bi("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let u;if(l.repoInfo_.nodeAdmin)i.mockUserToken&&bi('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new Rf(Rf.OWNER);else if(i.mockUserToken){const f=typeof i.mockUserToken=="string"?i.mockUserToken:PP(i.mockUserToken,e.app.options.projectId);u=new Rf(f)}Qa(t)&&(ER(t),TR("Database",!0)),zU(l,o,i,u)}/**
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
 */function WU(e){P$(Za),Mr(new _r("database",(t,{instanceIdentifier:n})=>{const i=t.getProvider("app").getImmediate(),o=t.getProvider("auth-internal"),l=t.getProvider("app-check-internal");return BU(i,o,l,n)},"PUBLIC").setMultipleInstances(!0)),Jn(Uw,zw,e),Jn(Uw,zw,"esm2020")}gi.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)};gi.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};WU();var Xs={},oy={},ay={},_E;function tb(){return _E||(_E=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.getBookableStatus=e.isWaitlistFull=e.isFree=e.WAITLIST_MAX=void 0,e.WAITLIST_MAX=10;const t=o=>o.occupancy<o.max_occupancy;e.isFree=t;const n=o=>o.waiting_count>=e.WAITLIST_MAX;e.isWaitlistFull=n;const i=o=>(0,e.isFree)(o)?"free":(0,e.isWaitlistFull)(o)?"full":"waitlist";e.getBookableStatus=i})(ay)),ay}var Zs={},bE;function nb(){return bE||(bE=1,Object.defineProperty(Zs,"__esModule",{value:!0}),Zs.DEFAULT_STUDIO_ID=Zs.STUDIOS=void 0,Zs.STUDIOS={7248695:{location:"New York",timezone:"America/New_York"},7248663:{location:"London",timezone:"Europe/London"}},Zs.DEFAULT_STUDIO_ID="7248695"),Zs}var SE;function YU(){return SE||(SE=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.getChangeType=e.getWaitlistChangeType=e.classifyMatch=e.matchesAlert=void 0;const t=tb(),n=nb(),i=(_,v)=>!(v.maxStatus==="free"&&!(0,t.isFree)(_)||v.maxStatus==="waitlist"&&(0,t.isWaitlistFull)(_)),o=(_,v)=>{if(!v.disciplines)return!0;const b=String(_.offering_type.category.id);return v.disciplines.some(x=>String(x)===b)},l=(_,v)=>v.instructors?_.instructors.some(b=>v.instructors.indexOf(String(b.id))!==-1):!0,u=(_,v)=>{if(!v.timeRanges)return!0;const b=n.STUDIOS[v.studioId]?.timezone;if(!b)return!1;const x=new Date(_.starts_at),O=new Date(x.toLocaleString("en-US",{timeZone:"UTC"})),C=new Date(x.toLocaleString("en-US",{timeZone:b})),I=O.getTime()-C.getTime();x.setTime(x.getTime()-I);const M=v.timeRanges[x.getDay()];if(!M)return!1;const R=x.getHours()*60+x.getMinutes();return M.startMin<=R&&M.endMin>=R},f=(_,v)=>i(_,v)&&o(_,v)&&l(_,v)&&u(_,v);e.matchesAlert=f;const p=(_,v)=>{const b=[];return i(_,v)||b.push("status"),o(_,v)||b.push("discipline"),l(_,v)||b.push("instructor"),u(_,v)||b.push("time"),b.length===0?{type:"match"}:b.length===1?{type:"near-miss",reason:b[0]}:{type:"skipped"}};e.classifyMatch=p;const h=(_,v,b)=>!_.waitlistAlerts||v.waiting_count===b.waiting_count||!o(b,_)||!l(b,_)||!u(b,_)||_.watchedClassIds&&_.watchedClassIds.length>0&&_.watchedClassIds.indexOf(String(b.id))===-1?null:"waitlist_changed";e.getWaitlistChangeType=h;const y=(_,v,b)=>(0,e.matchesAlert)(b,_)?_.maxStatus==="free"&&!(0,t.isFree)(v)&&(0,t.isFree)(b)?"became_free":_.maxStatus==="waitlist"&&(0,t.isWaitlistFull)(v)&&!(0,t.isWaitlistFull)(b)?"waitlist_opened":null:null;e.getChangeType=y})(oy)),oy}var Js={},xE;function QU(){if(xE)return Js;xE=1,Object.defineProperty(Js,"__esModule",{value:!0}),Js.classifySnapshotMatch=Js.buildSnapshot=void 0;const e=tb(),t=nb(),n=(l,u=Date.now())=>({snapshotAt:u,starts_at:l.starts_at,instructors:l.instructors.map(({id:f,name:p})=>({id:String(f),name:p})),disciplineId:String(l.offering_type.category.id),occupancy:l.occupancy,maxOccupancy:l.max_occupancy,waitingCount:l.waiting_count,status:(0,e.getBookableStatus)(l),name:l.name});Js.buildSnapshot=n;const i=(l,u)=>{if(!u.timeRanges)return!0;const f=t.STUDIOS[u.studioId]?.timezone;if(!f)return!1;const p=new Date(l.starts_at),h=new Date(p.toLocaleString("en-US",{timeZone:"UTC"})),y=new Date(p.toLocaleString("en-US",{timeZone:f})),_=h.getTime()-y.getTime();p.setTime(p.getTime()-_);const v=u.timeRanges[p.getDay()];if(!v)return!1;const b=p.getHours()*60+p.getMinutes();return v.startMin<=b&&v.endMin>=b},o=(l,u)=>{const f=[];return(u.maxStatus==="free"&&l.status!=="free"||u.maxStatus==="waitlist"&&l.status==="full")&&f.push("status"),u.disciplines&&u.disciplines.map(String).indexOf(l.disciplineId)===-1&&f.push("discipline"),u.instructors&&!l.instructors.some(h=>u.instructors.indexOf(h.id)!==-1)&&f.push("instructor"),i(l,u)||f.push("time"),f.length===0?{type:"match"}:f.length===1?{type:"near-miss",reason:f[0]}:{type:"skipped"}};return Js.classifySnapshotMatch=o,Js}var ly={},wE;function KU(){return wE||(wE=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.fetchAllPelotonPages=e.rebasePelotonUrl=e.buildEventsUrl=e.getPelotonHeaders=e.PELOTON_CORS_PROXY=e.PELOTON_API_BASE=void 0,e.PELOTON_API_BASE="https://schedule.studio.onepeloton.com/api/v2",e.PELOTON_CORS_PROXY="https://cors.abbondanzo.workers.dev";const t=l=>({"Teamup-Request-Mode":"customer","Teamup-Provider-ID":l});e.getPelotonHeaders=t;const n=l=>{const{localStartsAtGte:u=new Date,localStartsAtLte:f,fields:p,expand:h,corsProxy:y=!1}=l,_=y?`${e.PELOTON_CORS_PROXY}/${e.PELOTON_API_BASE}`:e.PELOTON_API_BASE,v=new URLSearchParams({local_starts_at_gte:u.toISOString().replace("Z",""),page_size:"500",sort:"start"});return p&&p.length>0&&v.set("fields",p.join(",")),h&&h.length>0&&v.set("expand",h.join(",")),f&&v.set("local_starts_at_lte",f.toISOString().replace("Z","")),`${_}/events?${v}`};e.buildEventsUrl=n;const i=(l,u=!1)=>{const{search:f}=new URL(l);return`${u?`${e.PELOTON_CORS_PROXY}/${e.PELOTON_API_BASE}`:e.PELOTON_API_BASE}/events${f}`};e.rebasePelotonUrl=i;const o=async(l,u,f=!1)=>{const p=await u(l);if(!p.next)return p.results;const h=[...p.results];let y=(0,e.rebasePelotonUrl)(p.next,f);for(;y;){const _=await u(y);h.push(..._.results),y=_.next?(0,e.rebasePelotonUrl)(_.next,f):null}return h};e.fetchAllPelotonPages=o})(ly)),ly}var cy={},EE;function XU(){return EE||(EE=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isBookableStatus=e.BOOKABLE_STATUS_KEYS=void 0,e.BOOKABLE_STATUS_KEYS=["free","waitlist","full"];const t=n=>e.BOOKABLE_STATUS_KEYS.indexOf(n)!==-1;e.isBookableStatus=t})(cy)),cy}var uy={},TE;function ZU(){return TE||(TE=1,Object.defineProperty(uy,"__esModule",{value:!0})),uy}var dc={},CE;function JU(){return CE||(CE=1,Object.defineProperty(dc,"__esModule",{value:!0}),dc.PATHS=void 0,dc.PATHS={alerts:e=>`alerts/${e}`,alert:(e,t)=>`alerts/${e}/${t}`,alertPreferences:e=>`alertPreferences/${e}`,messagingTokens:e=>`messagingTokens/${e}`,messagingToken:(e,t)=>`messagingTokens/${e}/${t}`,classHistory:e=>`classHistory/${e}`,classSnapshot:(e,t)=>`classHistory/${e}/${t}`,selloutStats:e=>`selloutStats/${e}`,selloutRecord:(e,t)=>`selloutStats/${e}/${t}`}),dc}var eo={},RE;function ez(){if(RE)return eo;RE=1,Object.defineProperty(eo,"__esModule",{value:!0}),eo.isNotEmpty=eo.isEmpty=void 0;const e=n=>n==null;eo.isEmpty=e;const t=n=>n!=null;return eo.isNotEmpty=t,eo}var dy={},AE;function tz(){return AE||(AE=1,Object.defineProperty(dy,"__esModule",{value:!0})),dy}var fy={},IE;function nz(){return IE||(IE=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isAllDay=e.DEFAULT_TIME_RANGE=e.SPECIFIC_DEFAULT_TIME_RANGE=e.ALL_DAY_TIME_RANGE=void 0,e.ALL_DAY_TIME_RANGE={startMin:0,endMin:1440},e.SPECIFIC_DEFAULT_TIME_RANGE={startMin:420,endMin:1140},e.DEFAULT_TIME_RANGE=e.ALL_DAY_TIME_RANGE;const t=n=>n.startMin===e.ALL_DAY_TIME_RANGE.startMin&&n.endMin===e.ALL_DAY_TIME_RANGE.endMin;e.isAllDay=t})(fy)),fy}var DE;function rz(){return DE||(DE=1,(function(e){var t=Xs&&Xs.__createBinding||(Object.create?(function(i,o,l,u){u===void 0&&(u=l);var f=Object.getOwnPropertyDescriptor(o,l);(!f||("get"in f?!o.__esModule:f.writable||f.configurable))&&(f={enumerable:!0,get:function(){return o[l]}}),Object.defineProperty(i,u,f)}):(function(i,o,l,u){u===void 0&&(u=l),i[u]=o[l]})),n=Xs&&Xs.__exportStar||function(i,o){for(var l in i)l!=="default"&&!Object.prototype.hasOwnProperty.call(o,l)&&t(o,i,l)};Object.defineProperty(e,"__esModule",{value:!0}),n(YU(),e),n(QU(),e),n(KU(),e),n(XU(),e),n(ZU(),e),n(tb(),e),n(JU(),e),n(ez(),e),n(tz(),e),n(nb(),e),n(nz(),e)})(Xs)),Xs}var Ce=rz();const ln=qh(()=>VU(Oc)),LI=async(e,t)=>{const n=ln;if(!n)throw new Error("No Firebase database connection to use");const i=Ln(n,Ce.PATHS.messagingToken(e,t));await kI(i)},OE=async(e,t)=>{const n=ln;if(!n)throw new Error("No Firebase database connection to use");const i=Ln(n,Ce.PATHS.messagingToken(e,t)),o={timestamp:new Date().getTime(),userAgent:navigator.userAgent};await eb(i,o)},iz=({children:e})=>{const[t,n]=E.useState();E.useEffect(()=>{if(xa){const u=M6(xa,f=>{console.log("[MessagingProvider] Received message ",f);const p=f.notification?.title??f.data?.title,h=f.notification?.body??f.data?.body;p&&new Notification(p,{body:h})});return()=>{u()}}return()=>{}},[]);const i=et(_u);E.useEffect(()=>{xa&&i&&ww().then(u=>(n(u),OE(i,u))).catch(u=>{Nr(u)})},[i]);const o=E.useCallback(()=>{xa&&i&&ww().then(u=>(n(u),OE(i,u))).catch(u=>{Nr(u)})},[i]);E.useEffect(()=>{const u=()=>{document.visibilityState==="visible"&&o()};return document.addEventListener("visibilitychange",u),()=>document.removeEventListener("visibilitychange",u)},[o]);const l=E.useCallback(async()=>{t&&i&&(await LI(i,t),n(void 0))},[t,i]);return g.jsx(bu.Provider,{value:{token:t,refreshToken:o,deleteToken:l},children:e})},rb=60,ib=e=>e.session.state!=="fulfilled"?!1:e.session.data?.isAdmin===!0,nt={CLASS_LIST:"/class-list",ABOUT:"/about",SIGN_IN:"/sign-in",ALERTS:"/alerts",ALERTS_EDITOR:"/alerts/edit",ALERTS_SIMULATION:"/alerts/:alertId/test",STATS:"/stats",WAITLIST_ALERT:"/waitlist-alert"},sz=e=>`/alerts/${e}/test`,PI=({size:e=22})=>g.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[g.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M 7.556 3.681 C 8.185 3.199 8.927 2.837 9.796 2.612 C 9.786 2.524 9.781 2.435 9.781 2.345 C 9.781 1.089 10.8 0.072 12.055 0.072 C 13.311 0.072 14.328 1.089 14.328 2.345 C 14.328 2.435 14.323 2.524 14.313 2.612 C 15.181 2.837 15.925 3.199 16.553 3.681 C 17.662 4.533 18.304 5.677 18.683 6.817 C 19.062 7.948 19.198 9.126 19.264 10.119 C 19.29 10.523 19.308 10.91 19.321 11.252 L 19.331 11.482 C 19.349 11.893 19.368 12.199 19.398 12.425 C 19.62 14.086 19.895 15.252 20.289 16.183 C 20.673 17.094 21.187 17.828 21.952 18.592 C 22.277 18.917 22.374 19.406 22.198 19.831 C 22.023 20.256 21.609 20.532 21.148 20.532 L 14.025 20.532 C 14.218 20.867 14.328 21.255 14.328 21.668 C 14.328 22.925 13.311 23.943 12.055 23.943 C 10.8 23.943 9.781 22.925 9.781 21.668 C 9.781 21.255 9.892 20.867 10.086 20.532 L 2.961 20.532 C 2.502 20.532 2.087 20.256 1.911 19.831 C 1.735 19.406 1.832 18.917 2.157 18.592 C 2.923 17.826 3.437 17.098 3.819 16.19 C 4.213 15.262 4.488 14.099 4.711 12.425 C 4.742 12.199 4.76 11.893 4.777 11.482 L 4.787 11.252 C 4.802 10.91 4.818 10.523 4.844 10.119 C 4.911 9.126 5.048 7.948 5.424 6.817 C 5.805 5.677 6.447 4.533 7.556 3.681 Z M 5.312 18.259 C 5.537 17.889 5.736 17.497 5.914 17.075 C 6.421 15.879 6.73 14.485 6.965 12.727 C 7.011 12.384 7.032 11.98 7.049 11.581 L 7.06 11.337 C 7.074 10.996 7.089 10.644 7.113 10.272 C 7.175 9.347 7.296 8.394 7.582 7.536 C 7.865 6.686 8.292 5.982 8.941 5.484 C 9.582 4.992 10.546 4.618 12.055 4.618 C 13.564 4.618 14.527 4.992 15.167 5.484 C 15.816 5.982 16.245 6.686 16.528 7.536 C 16.814 8.394 16.934 9.347 16.997 10.272 C 17.021 10.644 17.036 10.996 17.05 11.337 L 17.061 11.581 C 17.077 11.98 17.098 12.384 17.144 12.727 C 17.377 14.475 17.688 15.867 18.194 17.066 C 18.373 17.491 18.573 17.884 18.799 18.259 L 5.312 18.259 Z",fill:"currentColor"}),g.jsx("path",{d:"M 15.285 7.952 L 16.425 5.973 C 16.754 5.392 16.56 4.649 15.98 4.318 C 15.402 3.986 14.657 4.18 14.326 4.761 L 13.179 6.741 C 10.743 5.973 8.016 6.97 6.686 9.274 C 5.838 10.74 5.736 12.426 6.25 13.905 L 8.359 10.243 C 8.359 10.243 8.359 10.243 8.359 10.243 C 8.841 9.403 9.63 8.802 10.568 8.551 C 11.506 8.296 12.482 8.427 13.323 8.917 C 15.056 9.918 15.655 12.146 14.652 13.877 C 13.648 15.611 11.428 16.21 9.689 15.206 L 10.9 13.109 C 11.479 13.44 12.222 13.247 12.555 12.666 C 12.886 12.087 12.69 11.345 12.111 11.013 C 11.532 10.68 10.788 10.877 10.457 11.454 L 6.602 18.144 C 6.269 18.725 6.464 19.466 7.044 19.8 C 7.624 20.13 8.367 19.935 8.699 19.355 L 9.846 17.377 C 12.281 18.144 15.009 17.149 16.338 14.842 C 17.666 12.543 17.165 9.685 15.285 7.952 Z",fill:"currentColor",style:{strokeWidth:"0.5px",stroke:"currentColor"}})]});function jI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $I=jI,UI=new Ro("auth","Firebase",jI());/**
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
 */const dh=new s_("@firebase/auth");function oz(e,...t){dh.logLevel<=ct.WARN&&dh.warn(`Auth (${Za}): ${e}`,...t)}function Af(e,...t){dh.logLevel<=ct.ERROR&&dh.error(`Auth (${Za}): ${e}`,...t)}/**
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
 */function rr(e,...t){throw ob(e,...t)}function vr(e,...t){return ob(e,...t)}function sb(e,t,n){const i={...$I(),[t]:n};return new Ro("auth","Firebase",i).create(t,{appName:e.name})}function yi(e){return sb(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function az(e,t,n){const i=n;if(!(t instanceof i))throw i.name!==t.constructor.name&&rr(e,"argument-error"),sb(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ob(e,...t){if(typeof e!="string"){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return UI.create(e,...t)}function ke(e,t,...n){if(!e)throw ob(t,...n)}function hi(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Af(t),new Error(t)}function Si(e,t){e||hi(t)}/**
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
 */function bv(){return typeof self<"u"&&self.location?.href||""}function lz(){return kE()==="http:"||kE()==="https:"}function kE(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function cz(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lz()||zP()||"connection"in navigator)?navigator.onLine:!0}function uz(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Au{constructor(t,n){this.shortDelay=t,this.longDelay=n,Si(n>t,"Short delay should be less than long delay!"),this.isMobile=i_()||CR()}get(){return cz()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ab(e,t){Si(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class zI{static initialize(t,n,i){this.fetchImpl=t,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;hi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;hi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;hi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const dz={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const fz=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],hz=new Au(3e4,6e4);function Ts(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function Cs(e,t,n,i,o={}){return BI(e,o,async()=>{let l={},u={};i&&(t==="GET"?u=i:l={body:JSON.stringify(i)});const f=Ka({key:e.config.apiKey,...u}).slice(1),p=await e._getAdditionalHeaders();p["Content-Type"]="application/json",e.languageCode&&(p["X-Firebase-Locale"]=e.languageCode);const h={method:t,headers:p,...l};return UP()||(h.referrerPolicy="no-referrer"),e.emulatorConfig&&Qa(e.emulatorConfig.host)&&(h.credentials="include"),zI.fetch()(await HI(e,e.config.apiHost,n,f),h)})}async function BI(e,t,n){e._canInitEmulator=!1;const i={...dz,...t};try{const o=new mz(e),l=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const u=await l.json();if("needConfirmation"in u)throw sf(e,"account-exists-with-different-credential",u);if(l.ok&&!("errorMessage"in u))return u;{const f=l.ok?u.errorMessage:u.error.message,[p,h]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw sf(e,"credential-already-in-use",u);if(p==="EMAIL_EXISTS")throw sf(e,"email-already-in-use",u);if(p==="USER_DISABLED")throw sf(e,"user-disabled",u);const y=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw sb(e,y,h);rr(e,y)}}catch(o){if(o instanceof wi)throw o;rr(e,"network-request-failed",{message:String(o)})}}async function Iu(e,t,n,i,o={}){const l=await Cs(e,t,n,i,o);return"mfaPendingCredential"in l&&rr(e,"multi-factor-auth-required",{_serverResponse:l}),l}async function HI(e,t,n,i){const o=`${t}${n}?${i}`,l=e,u=l.config.emulator?ab(e.config,o):`${e.config.apiScheme}://${o}`;return fz.includes(n)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(u).toString():u}function pz(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class mz{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(vr(this.auth,"network-request-failed")),hz.get())})}}function sf(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const o=vr(e,t,i);return o.customData._tokenResponse=n,o}function NE(e){return e!==void 0&&e.enterprise!==void 0}class gz{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return pz(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function yz(e,t){return Cs(e,"GET","/v2/recaptchaConfig",Ts(e,t))}/**
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
 */async function vz(e,t){return Cs(e,"POST","/v1/accounts:delete",t)}async function fh(e,t){return Cs(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Uc(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function _z(e,t=!1){const n=Wt(e),i=await n.getIdToken(t),o=lb(i);ke(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,u=l?.sign_in_provider;return{claims:o,token:i,authTime:Uc(hy(o.auth_time)),issuedAtTime:Uc(hy(o.iat)),expirationTime:Uc(hy(o.exp)),signInProvider:u||null,signInSecondFactor:l?.sign_in_second_factor||null}}function hy(e){return Number(e)*1e3}function lb(e){const[t,n,i]=e.split(".");if(t===void 0||n===void 0||i===void 0)return Af("JWT malformed, contained fewer than 3 sections"),null;try{const o=Ff(n);return o?JSON.parse(o):(Af("Failed to decode base64 JWT payload"),null)}catch(o){return Af("Caught error parsing JWT payload as JSON",o?.toString()),null}}function ME(e){const t=lb(e);return ke(t,"internal-error"),ke(typeof t.exp<"u","internal-error"),ke(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function cu(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof wi&&bz(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function bz({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class Sz{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Sv{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Uc(this.lastLoginAt),this.creationTime=Uc(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function hh(e){const t=e.auth,n=await e.getIdToken(),i=await cu(e,fh(t,{idToken:n}));ke(i?.users.length,t,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const l=o.providerUserInfo?.length?FI(o.providerUserInfo):[],u=wz(e.providerData,l),f=e.isAnonymous,p=!(e.email&&o.passwordHash)&&!u?.length,h=f?p:!1,y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Sv(o.createdAt,o.lastLoginAt),isAnonymous:h};Object.assign(e,y)}async function xz(e){const t=Wt(e);await hh(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function wz(e,t){return[...e.filter(i=>!t.some(o=>o.providerId===i.providerId)),...t]}function FI(e){return e.map(({providerId:t,...n})=>({providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function Ez(e,t){const n=await BI(e,{},async()=>{const i=Ka({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:l}=e.config,u=await HI(e,o,"/v1/token",`key=${l}`),f=await e._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:f,body:i};return e.emulatorConfig&&Qa(e.emulatorConfig.host)&&(p.credentials="include"),zI.fetch()(u,p)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Tz(e,t){return Cs(e,"POST","/v2/accounts:revokeToken",Ts(e,t))}/**
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
 */class Aa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){ke(t.idToken,"internal-error"),ke(typeof t.idToken<"u","internal-error"),ke(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):ME(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){ke(t.length!==0,"internal-error");const n=ME(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ke(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:i,refreshToken:o,expiresIn:l}=await Ez(t,n);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(t,n,i){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(t,n){const{refreshToken:i,accessToken:o,expirationTime:l}=n,u=new Aa;return i&&(ke(typeof i=="string","internal-error",{appName:t}),u.refreshToken=i),o&&(ke(typeof o=="string","internal-error",{appName:t}),u.accessToken=o),l&&(ke(typeof l=="number","internal-error",{appName:t}),u.expirationTime=l),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Aa,this.toJSON())}_performRefresh(){return hi("not implemented")}}/**
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
 */function Xi(e,t){ke(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class hr{constructor({uid:t,auth:n,stsTokenManager:i,...o}){this.providerId="firebase",this.proactiveRefresh=new Sz(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Sv(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await cu(this,this.stsTokenManager.getToken(this.auth,t));return ke(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return _z(this,t)}reload(){return xz(this)}_assign(t){this!==t&&(ke(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>({...n})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new hr({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(t){ke(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),n&&await hh(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Nn(this.auth.app))return Promise.reject(yi(this.auth));const t=await this.getIdToken();return await cu(this,vz(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){const i=n.displayName??void 0,o=n.email??void 0,l=n.phoneNumber??void 0,u=n.photoURL??void 0,f=n.tenantId??void 0,p=n._redirectEventId??void 0,h=n.createdAt??void 0,y=n.lastLoginAt??void 0,{uid:_,emailVerified:v,isAnonymous:b,providerData:x,stsTokenManager:O}=n;ke(_&&O,t,"internal-error");const C=Aa.fromJSON(this.name,O);ke(typeof _=="string",t,"internal-error"),Xi(i,t.name),Xi(o,t.name),ke(typeof v=="boolean",t,"internal-error"),ke(typeof b=="boolean",t,"internal-error"),Xi(l,t.name),Xi(u,t.name),Xi(f,t.name),Xi(p,t.name),Xi(h,t.name),Xi(y,t.name);const I=new hr({uid:_,auth:t,email:o,emailVerified:v,displayName:i,isAnonymous:b,photoURL:u,phoneNumber:l,tenantId:f,stsTokenManager:C,createdAt:h,lastLoginAt:y});return x&&Array.isArray(x)&&(I.providerData=x.map(M=>({...M}))),p&&(I._redirectEventId=p),I}static async _fromIdTokenResponse(t,n,i=!1){const o=new Aa;o.updateFromServerResponse(n);const l=new hr({uid:n.localId,auth:t,stsTokenManager:o,isAnonymous:i});return await hh(l),l}static async _fromGetAccountInfoResponse(t,n,i){const o=n.users[0];ke(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?FI(o.providerUserInfo):[],u=!(o.email&&o.passwordHash)&&!l?.length,f=new Aa;f.updateFromIdToken(i);const p=new hr({uid:o.localId,auth:t,stsTokenManager:f,isAnonymous:u}),h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Sv(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!l?.length};return Object.assign(p,h),p}}/**
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
 */const LE=new Map;function pi(e){Si(e instanceof Function,"Expected a class definition");let t=LE.get(e);return t?(Si(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,LE.set(e,t),t)}/**
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
 */class qI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}qI.type="NONE";const PE=qI;/**
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
 */function If(e,t,n){return`firebase:${e}:${t}:${n}`}class Ia{constructor(t,n,i){this.persistence=t,this.auth=n,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=If(this.userKey,o.apiKey,l),this.fullPersistenceKey=If("persistence",o.apiKey,l),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await fh(this.auth,{idToken:t}).catch(()=>{});return n?hr._fromGetAccountInfoResponse(this.auth,n,t):null}return hr._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,i="authUser"){if(!n.length)return new Ia(pi(PE),t,i);const o=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let l=o[0]||pi(PE);const u=If(i,t.config.apiKey,t.name);let f=null;for(const h of n)try{const y=await h._get(u);if(y){let _;if(typeof y=="string"){const v=await fh(t,{idToken:y}).catch(()=>{});if(!v)break;_=await hr._fromGetAccountInfoResponse(t,v,y)}else _=hr._fromJSON(t,y);h!==l&&(f=_),l=h;break}}catch{}const p=o.filter(h=>h._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Ia(l,t,i):(l=p[0],f&&await l._set(u,f.toJSON()),await Promise.all(n.map(async h=>{if(h!==l)try{await h._remove(u)}catch{}})),new Ia(l,t,i))}}/**
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
 */function jE(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(YI(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(VI(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(KI(t))return"Blackberry";if(XI(t))return"Webos";if(GI(t))return"Safari";if((t.includes("chrome/")||WI(t))&&!t.includes("edge/"))return"Chrome";if(QI(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=e.match(n);if(i?.length===2)return i[1]}return"Other"}function VI(e=hn()){return/firefox\//i.test(e)}function GI(e=hn()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function WI(e=hn()){return/crios\//i.test(e)}function YI(e=hn()){return/iemobile/i.test(e)}function QI(e=hn()){return/android/i.test(e)}function KI(e=hn()){return/blackberry/i.test(e)}function XI(e=hn()){return/webos/i.test(e)}function cb(e=hn()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Cz(e=hn()){return cb(e)&&!!window.navigator?.standalone}function Rz(){return BP()&&document.documentMode===10}function ZI(e=hn()){return cb(e)||QI(e)||XI(e)||KI(e)||/windows phone/i.test(e)||YI(e)}/**
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
 */function JI(e,t=[]){let n;switch(e){case"Browser":n=jE(hn());break;case"Worker":n=`${jE(hn())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Za}/${i}`}/**
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
 */class Az{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const i=l=>new Promise((u,f)=>{try{const p=t(l);u(p)}catch(p){f(p)}});i.onAbort=n,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const i of this.queue)await i(t),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
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
 */async function Iz(e,t={}){return Cs(e,"GET","/v2/passwordPolicy",Ts(e,t))}/**
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
 */const Dz=6;class Oz{constructor(t){const n=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Dz,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=t.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,n),this.validatePasswordCharacterOptions(t,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(t,n){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=t.length>=i),o&&(n.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let o=0;o<t.length;o++)i=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(t,n,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=l))}}/**
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
 */class kz{constructor(t,n,i,o){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $E(this),this.idTokenSubscription=new $E(this),this.beforeStateQueue=new Az(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=UI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=pi(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Ia.create(this,t),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await fh(this,{idToken:t}),i=await hr._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){if(Nn(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(u,u))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=this.redirectUser?._redirectEventId,u=i?._redirectEventId,f=await this.tryRedirectSignIn(t);(!l||l===u)&&f?.user&&(i=f.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(l){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ke(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await hh(t)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=uz()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Nn(this.app))return Promise.reject(yi(this));const n=t?Wt(t):null;return n&&ke(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&ke(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Nn(this.app)?Promise.reject(yi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Nn(this.app)?Promise.reject(yi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pi(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Iz(this),n=new Oz(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Ro("auth","Firebase",t())}onAuthStateChanged(t,n,i){return this.registerStateListener(this.authStateSubscription,t,n,i)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,i){return this.registerStateListener(this.idTokenSubscription,t,n,i)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const i=this.onAuthStateChanged(()=>{i(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await Tz(this,i)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(t,n){const i=await this.getOrInitRedirectPersistenceManager(n);return t===null?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&pi(t)||this._popupRedirectResolver;ke(n,this,"argument-error"),this.redirectPersistenceManager=await Ia.create(this,[pi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===t?this._currentUser:this.redirectUser?._redirectEventId===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=this.currentUser?.uid??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,i,o){if(this._deleted)return()=>{};const l=typeof n=="function"?n:n.next.bind(n);let u=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(ke(f,this,"internal-error"),f.then(()=>{u||l(this.currentUser)}),typeof n=="function"){const p=t.addObserver(n,i,o);return()=>{u=!0,p()}}else{const p=t.addObserver(n);return()=>{u=!0,p()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return ke(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=JI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){if(Nn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return t?.error&&oz(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Rs(e){return Wt(e)}class $E{constructor(t){this.auth=t,this.observer=null,this.addObserver=KP(n=>this.observer=n)}get next(){return ke(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let op={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Nz(e){op=e}function eD(e){return op.loadJS(e)}function Mz(){return op.recaptchaEnterpriseScript}function Lz(){return op.gapiScript}function Pz(e){return`__${e}${Math.floor(Math.random()*1e6)}`}class jz{constructor(){this.enterprise=new $z}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class $z{ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const Uz="recaptcha-enterprise",tD="NO_RECAPTCHA";class zz{constructor(t){this.type=Uz,this.auth=Rs(t)}async verify(t="verify",n=!1){async function i(l){if(!n){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(u,f)=>{yz(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const h=new gz(p);return l.tenantId==null?l._agentRecaptchaConfig=h:l._tenantRecaptchaConfigs[l.tenantId]=h,u(h.siteKey)}}).catch(p=>{f(p)})})}function o(l,u,f){const p=window.grecaptcha;NE(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:t}).then(h=>{u(h)}).catch(()=>{u(tD)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new jz().execute("siteKey",{action:"verify"}):new Promise((l,u)=>{i(this.auth).then(f=>{if(!n&&NE(window.grecaptcha))o(f,l,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let p=Mz();p.length!==0&&(p+=f),eD(p).then(()=>{o(f,l,u)}).catch(h=>{u(h)})}}).catch(f=>{u(f)})})}}async function UE(e,t,n,i=!1,o=!1){const l=new zz(e);let u;if(o)u=tD;else try{u=await l.verify(n)}catch{u=await l.verify(n,!0)}const f={...t};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const p=f.phoneEnrollmentInfo.phoneNumber,h=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:h,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const p=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return i?Object.assign(f,{captchaResp:u}):Object.assign(f,{captchaResponse:u}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function xv(e,t,n,i,o){if(e._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await UE(e,t,n,n==="getOobCode");return i(e,l)}else return i(e,t).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await UE(e,t,n,n==="getOobCode");return i(e,u)}else return Promise.reject(l)})}/**
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
 */function nD(e,t){const n=Xa(e,"auth");if(n.isInitialized()){const o=n.getImmediate(),l=n.getOptions();if(mo(l,t??{}))return o;rr(o,"already-initialized")}return n.initialize({options:t})}function Bz(e,t){const n=t?.persistence||[],i=(Array.isArray(n)?n:[n]).map(pi);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,t?.popupRedirectResolver)}function Hz(e,t,n){const i=Rs(e);ke(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const o=!1,l=rD(t),{host:u,port:f}=Fz(t),p=f===null?"":`:${f}`,h={url:`${l}//${u}${p}/`},y=Object.freeze({host:u,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){ke(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),ke(mo(h,i.config.emulator)&&mo(y,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=h,i.emulatorConfig=y,i.settings.appVerificationDisabledForTesting=!0,Qa(u)?(ER(`${l}//${u}${p}`),TR("Auth",!0)):qz()}function rD(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Fz(e){const t=rD(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:zE(i.substr(l.length+1))}}else{const[l,u]=i.split(":");return{host:l,port:zE(u)}}}function zE(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function qz(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class ub{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return hi("not implemented")}_getIdTokenResponse(t){return hi("not implemented")}_linkToIdToken(t,n){return hi("not implemented")}_getReauthenticationResolver(t){return hi("not implemented")}}async function Vz(e,t){return Cs(e,"POST","/v1/accounts:signUp",t)}/**
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
 */async function Gz(e,t){return Iu(e,"POST","/v1/accounts:signInWithPassword",Ts(e,t))}/**
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
 */async function Wz(e,t){return Iu(e,"POST","/v1/accounts:signInWithEmailLink",Ts(e,t))}async function Yz(e,t){return Iu(e,"POST","/v1/accounts:signInWithEmailLink",Ts(e,t))}/**
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
 */class uu extends ub{constructor(t,n,i,o=null){super("password",i),this._email=t,this._password=n,this._tenantId=o}static _fromEmailAndPassword(t,n){return new uu(t,n,"password")}static _fromEmailAndCode(t,n,i=null){return new uu(t,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xv(t,n,"signInWithPassword",Gz);case"emailLink":return Wz(t,{email:this._email,oobCode:this._password});default:rr(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xv(t,i,"signUpPassword",Vz);case"emailLink":return Yz(t,{idToken:n,email:this._email,oobCode:this._password});default:rr(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Da(e,t){return Iu(e,"POST","/v1/accounts:signInWithIdp",Ts(e,t))}/**
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
 */const Qz="http://localhost";class wo extends ub{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new wo(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):rr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:i,signInMethod:o,...l}=n;if(!i||!o)return null;const u=new wo(i,o);return u.idToken=l.idToken||void 0,u.accessToken=l.accessToken||void 0,u.secret=l.secret,u.nonce=l.nonce,u.pendingToken=l.pendingToken||null,u}_getIdTokenResponse(t){const n=this.buildRequest();return Da(t,n)}_linkToIdToken(t,n){const i=this.buildRequest();return i.idToken=n,Da(t,i)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Da(t,n)}buildRequest(){const t={requestUri:Qz,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Ka(n)}return t}}/**
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
 */function Kz(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Xz(e){const t=xc(wc(e)).link,n=t?xc(wc(t)).deep_link_id:null,i=xc(wc(e)).deep_link_id;return(i?xc(wc(i)).link:null)||i||n||t||e}class db{constructor(t){const n=xc(wc(t)),i=n.apiKey??null,o=n.oobCode??null,l=Kz(n.mode??null);ke(i&&o&&l,"argument-error"),this.apiKey=i,this.operation=l,this.code=o,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(t){const n=Xz(t);try{return new db(n)}catch{return null}}}/**
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
 */class il{constructor(){this.providerId=il.PROVIDER_ID}static credential(t,n){return uu._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const i=db.parseLink(n);return ke(i,"argument-error"),uu._fromEmailAndCode(t,i.code,i.tenantId)}}il.PROVIDER_ID="password";il.EMAIL_PASSWORD_SIGN_IN_METHOD="password";il.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class fb{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Du extends fb{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class is extends Du{constructor(){super("facebook.com")}static credential(t){return wo._fromParams({providerId:is.PROVIDER_ID,signInMethod:is.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return is.credentialFromTaggedObject(t)}static credentialFromError(t){return is.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return is.credential(t.oauthAccessToken)}catch{return null}}}is.FACEBOOK_SIGN_IN_METHOD="facebook.com";is.PROVIDER_ID="facebook.com";/**
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
 */class ui extends Du{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return wo._fromParams({providerId:ui.PROVIDER_ID,signInMethod:ui.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return ui.credentialFromTaggedObject(t)}static credentialFromError(t){return ui.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:i}=t;if(!n&&!i)return null;try{return ui.credential(n,i)}catch{return null}}}ui.GOOGLE_SIGN_IN_METHOD="google.com";ui.PROVIDER_ID="google.com";/**
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
 */class ss extends Du{constructor(){super("github.com")}static credential(t){return wo._fromParams({providerId:ss.PROVIDER_ID,signInMethod:ss.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ss.credentialFromTaggedObject(t)}static credentialFromError(t){return ss.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ss.credential(t.oauthAccessToken)}catch{return null}}}ss.GITHUB_SIGN_IN_METHOD="github.com";ss.PROVIDER_ID="github.com";/**
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
 */class os extends Du{constructor(){super("twitter.com")}static credential(t,n){return wo._fromParams({providerId:os.PROVIDER_ID,signInMethod:os.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return os.credentialFromTaggedObject(t)}static credentialFromError(t){return os.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=t;if(!n||!i)return null;try{return os.credential(n,i)}catch{return null}}}os.TWITTER_SIGN_IN_METHOD="twitter.com";os.PROVIDER_ID="twitter.com";/**
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
 */async function Zz(e,t){return Iu(e,"POST","/v1/accounts:signUp",Ts(e,t))}/**
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
 */class Eo{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,i,o=!1){const l=await hr._fromIdTokenResponse(t,i,o),u=BE(i);return new Eo({user:l,providerId:u,_tokenResponse:i,operationType:n})}static async _forOperation(t,n,i){await t._updateTokensIfNecessary(i,!0);const o=BE(i);return new Eo({user:t,providerId:o,_tokenResponse:i,operationType:n})}}function BE(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class ph extends wi{constructor(t,n,i,o){super(n.code,n.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,ph.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(t,n,i,o){return new ph(t,n,i,o)}}function iD(e,t,n,i){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?ph._fromErrorAndOperation(e,l,t,i):l})}async function Jz(e,t,n=!1){const i=await cu(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Eo._forOperation(e,"link",i)}/**
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
 */async function e8(e,t,n=!1){const{auth:i}=e;if(Nn(i.app))return Promise.reject(yi(i));const o="reauthenticate";try{const l=await cu(e,iD(i,o,t,e),n);ke(l.idToken,i,"internal-error");const u=lb(l.idToken);ke(u,i,"internal-error");const{sub:f}=u;return ke(e.uid===f,i,"user-mismatch"),Eo._forOperation(e,o,l)}catch(l){throw l?.code==="auth/user-not-found"&&rr(i,"user-mismatch"),l}}/**
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
 */async function sD(e,t,n=!1){if(Nn(e.app))return Promise.reject(yi(e));const i="signIn",o=await iD(e,i,t),l=await Eo._fromIdTokenResponse(e,i,o);return n||await e._updateCurrentUser(l.user),l}async function t8(e,t){return sD(Rs(e),t)}/**
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
 */async function oD(e){const t=Rs(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function n8(e,t,n){if(Nn(e.app))return Promise.reject(yi(e));const i=Rs(e),u=await xv(i,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Zz).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&oD(e),p}),f=await Eo._fromIdTokenResponse(i,"signIn",u);return await i._updateCurrentUser(f.user),f}function r8(e,t,n){return Nn(e.app)?Promise.reject(yi(e)):t8(Wt(e),il.credential(t,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&oD(e),i})}function i8(e,t,n,i){return Wt(e).onIdTokenChanged(t,n,i)}function s8(e,t,n){return Wt(e).beforeAuthStateChanged(t,n)}function o8(e,t,n,i){return Wt(e).onAuthStateChanged(t,n,i)}const mh="__sak";/**
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
 */class aD{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(mh,"1"),this.storage.removeItem(mh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const a8=1e3,l8=10;class lD extends aD{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ZI(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),o=this.localCache[n];i!==o&&t(n,o,i)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((u,f,p)=>{this.notifyListeners(u,p)});return}const i=t.key;n?this.detachListener():this.stopPolling();const o=()=>{const u=this.storage.getItem(i);!n&&this.localCache[i]===u||this.notifyListeners(i,u)},l=this.storage.getItem(i);Rz()&&l!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,l8):o()}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const o of Array.from(i))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:i}),!0)})},a8)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}lD.type="LOCAL";const c8=lD;/**
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
 */class cD extends aD{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}cD.type="SESSION";const uD=cD;/**
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
 */function u8(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ap{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(o=>o.isListeningto(t));if(n)return n;const i=new ap(t);return this.receivers.push(i),i}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:i,eventType:o,data:l}=n.data,u=this.handlersMap[o];if(!u?.size)return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(u).map(async h=>h(n.origin,l)),p=await u8(f);n.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ap.receivers=[];/**
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
 */function hb(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class d8{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,u;return new Promise((f,p)=>{const h=hb("",20);o.port1.start();const y=setTimeout(()=>{p(new Error("unsupported_event"))},i);u={messageChannel:o,onMessage(_){const v=_;if(v.data.eventId===h)switch(v.data.status){case"ack":clearTimeout(y),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(v.data.response);break;default:clearTimeout(y),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(u),o.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:t,eventId:h,data:n},[o.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
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
 */function kr(){return window}function f8(e){kr().location.href=e}/**
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
 */function dD(){return typeof kr().WorkerGlobalScope<"u"&&typeof kr().importScripts=="function"}async function h8(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function p8(){return navigator?.serviceWorker?.controller||null}function m8(){return dD()?self:null}/**
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
 */const fD="firebaseLocalStorageDb",g8=1,gh="firebaseLocalStorage",hD="fbase_key";class Ou{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function lp(e,t){return e.transaction([gh],t?"readwrite":"readonly").objectStore(gh)}function y8(){const e=indexedDB.deleteDatabase(fD);return new Ou(e).toPromise()}function wv(){const e=indexedDB.open(fD,g8);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const i=e.result;try{i.createObjectStore(gh,{keyPath:hD})}catch(o){n(o)}}),e.addEventListener("success",async()=>{const i=e.result;i.objectStoreNames.contains(gh)?t(i):(i.close(),await y8(),t(await wv()))})})}async function HE(e,t,n){const i=lp(e,!0).put({[hD]:t,value:n});return new Ou(i).toPromise()}async function v8(e,t){const n=lp(e,!1).get(t),i=await new Ou(n).toPromise();return i===void 0?null:i.value}function FE(e,t){const n=lp(e,!0).delete(t);return new Ou(n).toPromise()}const _8=800,b8=3;class pD{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wv(),this.db)}async _withRetries(t){let n=0;for(;;)try{const i=await this._openDb();return await t(i)}catch(i){if(n++>b8)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dD()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ap._getInstance(m8()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await h8(),!this.activeServiceWorker)return;this.sender=new d8(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&t[0]?.fulfilled&&t[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||p8()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await wv();return await HE(t,mh,"1"),await FE(t,mh),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>HE(i,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(i=>v8(i,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>FE(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const l=lp(o,!1).getAll();return new Ou(l).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(t.length!==0)for(const{fbase_key:o,value:l}of t)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const o of Array.from(i))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_8)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pD.type="LOCAL";const S8=pD;new Au(3e4,6e4);/**
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
 */function mD(e,t){return t?pi(t):(ke(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class pb extends ub{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Da(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Da(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Da(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function x8(e){return sD(e.auth,new pb(e),e.bypassAuthState)}function w8(e){const{auth:t,user:n}=e;return ke(n,t,"internal-error"),e8(n,new pb(e),e.bypassAuthState)}async function E8(e){const{auth:t,user:n}=e;return ke(n,t,"internal-error"),Jz(n,new pb(e),e.bypassAuthState)}/**
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
 */class gD{constructor(t,n,i,o,l=!1){this.auth=t,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:i,postBody:o,tenantId:l,error:u,type:f}=t;if(u){this.reject(u);return}const p={auth:this.auth,requestUri:n,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(h){this.reject(h)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return x8;case"linkViaPopup":case"linkViaRedirect":return E8;case"reauthViaPopup":case"reauthViaRedirect":return w8;default:rr(this.auth,"internal-error")}}resolve(t){Si(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Si(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const T8=new Au(2e3,1e4);async function C8(e,t,n){if(Nn(e.app))return Promise.reject(vr(e,"operation-not-supported-in-this-environment"));const i=Rs(e);az(e,t,fb);const o=mD(i,n);return new uo(i,"signInViaPopup",t,o).executeNotNull()}class uo extends gD{constructor(t,n,i,o,l){super(t,n,o,l),this.provider=i,this.authWindow=null,this.pollId=null,uo.currentPopupAction&&uo.currentPopupAction.cancel(),uo.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return ke(t,this.auth,"internal-error"),t}async onExecution(){Si(this.filter.length===1,"Popup operations only handle one event");const t=hb();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(vr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,uo.currentPopupAction=null}pollUserCancellation(){const t=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,T8.get())};t()}}uo.currentPopupAction=null;/**
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
 */const R8="pendingRedirect",Df=new Map;class A8 extends gD{constructor(t,n,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let t=Df.get(this.auth._key());if(!t){try{const i=await I8(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(i)}catch(n){t=()=>Promise.reject(n)}Df.set(this.auth._key(),t)}return this.bypassAuthState||Df.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function I8(e,t){const n=k8(t),i=O8(e);if(!await i._isAvailable())return!1;const o=await i._get(n)==="true";return await i._remove(n),o}function D8(e,t){Df.set(e._key(),t)}function O8(e){return pi(e._redirectPersistence)}function k8(e){return If(R8,e.config.apiKey,e.name)}async function N8(e,t,n=!1){if(Nn(e.app))return Promise.reject(yi(e));const i=Rs(e),o=mD(i,t),u=await new A8(i,o,n).execute();return u&&!n&&(delete u.user._redirectEventId,await i._persistUserIfCurrent(u.user),await i._setRedirectUser(null,t)),u}/**
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
 */const M8=600*1e3;class L8{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(t,i)&&(n=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!P8(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){if(t.error&&!yD(t)){const i=t.error.code?.split("auth/")[1]||"internal-error";n.onError(vr(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const i=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=M8&&this.cachedEventUids.clear(),this.cachedEventUids.has(qE(t))}saveEventToCache(t){this.cachedEventUids.add(qE(t)),this.lastProcessedEventTime=Date.now()}}function qE(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function yD({type:e,error:t}){return e==="unknown"&&t?.code==="auth/no-auth-event"}function P8(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yD(e);default:return!1}}/**
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
 */async function j8(e,t={}){return Cs(e,"GET","/v1/projects",t)}/**
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
 */const $8=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,U8=/^https?/;async function z8(e){if(e.config.emulator)return;const{authorizedDomains:t}=await j8(e);for(const n of t)try{if(B8(n))return}catch{}rr(e,"unauthorized-domain")}function B8(e){const t=bv(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const u=new URL(e);return u.hostname===""&&i===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&u.hostname===i}if(!U8.test(n))return!1;if($8.test(e))return i===e;const o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const H8=new Au(3e4,6e4);function VE(){const e=kr().___jsl;if(e?.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function F8(e){return new Promise((t,n)=>{function i(){VE(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{VE(),n(vr(e,"network-request-failed"))},timeout:H8.get()})}if(kr().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(kr().gapi?.load)i();else{const o=Pz("iframefcb");return kr()[o]=()=>{gapi.load?i():n(vr(e,"network-request-failed"))},eD(`${Lz()}?onload=${o}`).catch(l=>n(l))}}).catch(t=>{throw Of=null,t})}let Of=null;function q8(e){return Of=Of||F8(e),Of}/**
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
 */const V8=new Au(5e3,15e3),G8="__/auth/iframe",W8="emulator/auth/iframe",Y8={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Q8=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function K8(e){const t=e.config;ke(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?ab(t,W8):`https://${e.config.authDomain}/${G8}`,i={apiKey:t.apiKey,appName:e.name,v:Za},o=Q8.get(e.config.apiHost);o&&(i.eid=o);const l=e._getFrameworks();return l.length&&(i.fw=l.join(",")),`${n}?${Ka(i).slice(1)}`}async function X8(e){const t=await q8(e),n=kr().gapi;return ke(n,e,"internal-error"),t.open({where:document.body,url:K8(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Y8,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const u=vr(e,"network-request-failed"),f=kr().setTimeout(()=>{l(u)},V8.get());function p(){kr().clearTimeout(f),o(i)}i.ping(p).then(p,()=>{l(u)})}))}/**
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
 */const Z8={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},J8=500,eB=600,tB="_blank",nB="http://localhost";class GE{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rB(e,t,n,i=J8,o=eB){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),u=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const p={...Z8,width:i.toString(),height:o.toString(),top:l,left:u},h=hn().toLowerCase();n&&(f=WI(h)?tB:n),VI(h)&&(t=t||nB,p.scrollbars="yes");const y=Object.entries(p).reduce((v,[b,x])=>`${v}${b}=${x},`,"");if(Cz(h)&&f!=="_self")return iB(t||"",f),new GE(null);const _=window.open(t||"",f,y);ke(_,e,"popup-blocked");try{_.focus()}catch{}return new GE(_)}function iB(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const sB="__/auth/handler",oB="emulator/auth/handler",aB=encodeURIComponent("fac");async function WE(e,t,n,i,o,l){ke(e.config.authDomain,e,"auth-domain-config-required"),ke(e.config.apiKey,e,"invalid-api-key");const u={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:Za,eventId:o};if(t instanceof fb){t.setDefaultLanguage(e.languageCode),u.providerId=t.providerId||"",Wy(t.getCustomParameters())||(u.customParameters=JSON.stringify(t.getCustomParameters()));for(const[y,_]of Object.entries({}))u[y]=_}if(t instanceof Du){const y=t.getScopes().filter(_=>_!=="");y.length>0&&(u.scopes=y.join(","))}e.tenantId&&(u.tid=e.tenantId);const f=u;for(const y of Object.keys(f))f[y]===void 0&&delete f[y];const p=await e._getAppCheckToken(),h=p?`#${aB}=${encodeURIComponent(p)}`:"";return`${lB(e)}?${Ka(f).slice(1)}${h}`}function lB({config:e}){return e.emulator?ab(e,oB):`https://${e.authDomain}/${sB}`}/**
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
 */const py="webStorageSupport";class cB{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=uD,this._completeRedirectFn=N8,this._overrideRedirectResult=D8}async _openPopup(t,n,i,o){Si(this.eventManagers[t._key()]?.manager,"_initialize() not called before _openPopup()");const l=await WE(t,n,i,bv(),o);return rB(t,l,hb())}async _openRedirect(t,n,i,o){await this._originValidation(t);const l=await WE(t,n,i,bv(),o);return f8(l),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:o,promise:l}=this.eventManagers[n];return o?Promise.resolve(o):(Si(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(t);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(t){const n=await X8(t),i=new L8(t);return n.register("authEvent",o=>(ke(o?.authEvent,t,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=n,i}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(py,{type:py},o=>{const l=o?.[0]?.[py];l!==void 0&&n(!!l),rr(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=z8(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return ZI()||GI()||cb()}}const uB=cB;var YE="@firebase/auth",QE="1.11.0";/**
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
 */class dB{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(i=>{t(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ke(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function fB(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hB(e){Mr(new _r("auth",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),l=t.getProvider("app-check-internal"),{apiKey:u,authDomain:f}=i.options;ke(u&&!u.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:u,authDomain:f,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:JI(e)},h=new kz(i,o,l,p);return Bz(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,i)=>{t.getProvider("auth-internal").initialize()})),Mr(new _r("auth-internal",t=>{const n=Rs(t.getProvider("auth").getImmediate());return(i=>new dB(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jn(YE,QE,fB(e)),Jn(YE,QE,"esm2020")}/**
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
 */const pB=300,mB=wR("authIdTokenMaxAge")||pB;let KE=null;const gB=e=>async t=>{const n=t&&await t.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>mB)return;const o=n?.token;KE!==o&&(KE=o,await fetch(e,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function yB(e=a_()){const t=Xa(e,"auth");if(t.isInitialized())return t.getImmediate();const n=nD(e,{popupRedirectResolver:uB,persistence:[S8,c8,uD]}),i=wR("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const u=gB(l.toString());s8(n,u,()=>u(n.currentUser)),i8(n,f=>u(f))}}const o=SR("auth");return o&&Hz(n,`http://${o}`),n}function vB(){return document.getElementsByTagName("head")?.[0]??document}Nz({loadJS(e){return new Promise((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=o=>{const l=vr("internal-error");l.customData=o,n(l)},i.type="text/javascript",i.charset="UTF-8",vB().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hB("Browser");const _B=$I,di=qh(()=>{if(!Oc)throw new Error("Firebase app not initialized");try{return yB(Oc)}catch{return nD(Oc,{errorMap:_B})}}),vD=E.createContext({isDark:!1,toggle:()=>{}}),bB=T.button`
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
`,SB=T.span`
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
`,_D=()=>{const{isDark:e,toggle:t}=E.useContext(vD);return g.jsxs(bB,{type:"button",role:"switch","aria-checked":e,onClick:t,children:["Dark mode",g.jsx(SB,{$on:e,"aria-hidden":"true"})]})},xB=T(Es)`
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
`,wB=T.div`
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
  margin-bottom: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,EB=T.button`
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
`,TB=()=>{const e=et(el),{deleteToken:t}=E.useContext(bu),n=E.useCallback(async()=>{await t(),await di?.signOut()},[t]);return e.state==="loading"?null:e.state!=="fulfilled"||!e.data?g.jsx(xB,{to:nt.SIGN_IN,children:"Sign in"}):g.jsxs(g.Fragment,{children:[g.jsx(wB,{children:e.data.displayName}),g.jsx(_D,{}),g.jsx(EB,{type:"button",onClick:n,children:"Sign out"})]})},CB="#181a2f",RB=280,AB=T.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  transition: opacity 0.2s;
  opacity: ${e=>e.$open?1:0};
  pointer-events: ${e=>e.$open?"all":"none"};
  z-index: 10;
`,IB=T.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: ${RB}px;
  max-width: 90vw;
  background-color: ${e=>e.theme.colors.mainSurface};
  z-index: 11;
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(${e=>e.$open?"0":"100%"});
  overflow: hidden;
`,DB=T.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: env(safe-area-inset-top, 0) 16px 0;
  height: calc(60px + env(safe-area-inset-top, 0px));
  background-color: ${CB};
  color: #fff;
  flex-shrink: 0;
`,OB=T(Es)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: inherit;
`,kB=T.span`
  font-size: 15px;
  font-weight: 600;
`,NB=T.button`
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
`,MB=T.nav`
  flex: 1;
  padding: 8px 0;
  overflow-y: auto;
`,of=T(qv)`
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
`,LB=T.div`
  padding: 16px 20px;
  border-top: 1px solid ${e=>e.theme.borderColor};
  flex-shrink: 0;
`,PB=()=>g.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none","aria-hidden":"true",children:g.jsx("path",{d:"M4 4l10 10M14 4L4 14",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})}),jB=({open:e,onClose:t})=>{const n=et(ib);return g.jsxs(g.Fragment,{children:[g.jsx(AB,{$open:e,onClick:t}),g.jsxs(IB,{$open:e,onClick:i=>i.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":"Navigation menu",children:[g.jsxs(DB,{children:[g.jsxs(OB,{to:nt.CLASS_LIST,onClick:t,children:[g.jsx(PI,{size:20}),g.jsx(kB,{children:"Peloton Alerts"})]}),g.jsx(NB,{onClick:t,"aria-label":"Close menu",children:g.jsx(PB,{})})]}),g.jsxs(MB,{onClick:t,children:[g.jsx(of,{to:nt.CLASS_LIST,end:!0,children:"Classes"}),g.jsx(of,{to:nt.ALERTS,children:"Alerts"}),g.jsx(of,{to:nt.ABOUT,end:!0,children:"FAQ"}),n&&g.jsx(of,{to:nt.STATS,children:"Stats"})]}),g.jsx(LB,{children:g.jsx(TB,{})})]})]})},$B=T.div`
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
`,UB=({children:e,open:t,onClose:n})=>{const i=E.useRef(null),o=E.useCallback(l=>{l.key==="Escape"&&n()},[n]);return E.useEffect(()=>{if(t)return document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}},[t,o]),E.useEffect(()=>{if(!t)return;const l=f=>{const p=f.target;if(!(p instanceof Node)){n();return}const h=i.current;h&&h.contains(p)||n()},u=setTimeout(()=>{document.addEventListener("click",l,!0)},0);return()=>{clearTimeout(u),document.removeEventListener("click",l,!0)}},[t,n]),t?g.jsx($B,{ref:i,role:"dialog","aria-modal":"true",children:e}):null},zB=T(Es)`
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
`,BB=T.button`
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
`,HB=T.div`
  position: relative;
`,FB=T.hr`
  margin: 4px 0;
  border: none;
  border-top: 1px solid ${e=>e.theme.borderColor};
`,qB=T.button`
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
`,VB=()=>{const e=et(el),[t,n]=E.useState(!1),{deleteToken:i}=E.useContext(bu),o=E.useCallback(async()=>{await i(),await di?.signOut()},[i]);if(e.state!=="fulfilled"||!e.data){const l=e.state==="loading";return g.jsx(zB,{to:nt.SIGN_IN,$disabled:l,"aria-disabled":l,tabIndex:l?-1:void 0,children:"Sign in"})}return g.jsxs(HB,{children:[g.jsx(BB,{type:"button",onClick:()=>n(!0),"aria-expanded":t,"aria-haspopup":"dialog",children:e.data.displayName}),g.jsxs(UB,{open:t,onClose:()=>n(!1),children:[g.jsx(_D,{}),g.jsx(FB,{}),g.jsx(qB,{type:"button",onClick:o,children:"Sign out"})]})]})},GB="#181a2f",cp=680,WB=T.nav`
  height: inherit;
  background-color: ${GB};
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
`,YB=T(Es)`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  justify-self: start;
`,QB=T.span`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.01em;
  white-space: nowrap;
`,KB=T.div`
  display: flex;
  align-items: center;
  gap: 2px;

  @media only screen and (max-width: ${cp}px) {
    display: none;
  }
`,af=T(qv)`
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
`,XB=T.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  justify-self: end;

  @media only screen and (max-width: ${cp}px) {
    display: none;
  }
`,ZB=T.button`
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
`,JB=()=>g.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:g.jsx("path",{d:"M3 5h14M3 10h14M3 15h14",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})}),eH=()=>{const[e,t]=E.useState(!1),n=et(ib);return g.jsxs(g.Fragment,{children:[g.jsxs(WB,{children:[g.jsxs(YB,{to:nt.CLASS_LIST,children:[g.jsx(PI,{}),g.jsx(QB,{children:"Peloton Alerts"})]}),g.jsxs(KB,{children:[g.jsx(af,{to:nt.CLASS_LIST,end:!0,children:"Classes"}),g.jsx(af,{to:nt.ALERTS,children:"Alerts"}),g.jsx(af,{to:nt.ABOUT,end:!0,children:"FAQ"}),n&&g.jsx(af,{to:nt.STATS,children:"Stats"})]}),g.jsx(XB,{children:g.jsx(VB,{})}),g.jsx(ZB,{type:"button","aria-label":"Open menu",onClick:()=>t(!0),children:g.jsx(JB,{})})]}),g.jsx(jB,{open:e,onClose:()=>t(!1)})]})},tH=T.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`,nH=T.div`
  position: sticky;
  height: calc(${rb}px + env(safe-area-inset-top));
  top: 0;
  z-index: 2;
`,rH=T.div`
  flex: 1;
  background-color: ${e=>e.theme.colors.secondarySurface};
`,hs=({children:e})=>g.jsxs(tH,{children:[g.jsx(nH,{children:g.jsx(eH,{})}),g.jsx(rH,{children:e})]}),Te=(...e)=>nn`
  @media only screen and (max-width: ${t=>t.theme.widths.mobile}px) {
    ${nn(...e)}
  }
`,bD=(...e)=>nn`
  @media only screen and (max-width: ${t=>t.theme.widths.tablet}px) {
    ${nn(...e)}
  }
`,iH=T.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 24px 20px;

  ${Te`
    padding: 16px 12px;
  `}
`,sH=T.div`
  margin-bottom: 20px;
`,oH=T.h1`
  font-size: 22px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
  margin: 0;
`,fc=T.section`
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  overflow: hidden;
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
`,hc=T.div`
  padding: 14px 20px;
  border-bottom: 1px solid ${e=>e.theme.borderColor};
`,pc=T.h2`
  font-size: 15px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
  margin: 0;
`,mc=T.div`
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
`,aH=()=>g.jsx(hs,{children:g.jsxs(iH,{children:[g.jsx(sH,{children:g.jsx(oH,{children:"FAQ"})}),g.jsxs(fc,{children:[g.jsx(hc,{children:g.jsx(pc,{children:"What is this?"})}),g.jsx(mc,{children:g.jsxs("p",{children:["A quicker, smarter way to browse"," ",g.jsx("a",{href:"https://studio.onepeloton.com/",target:"_blank",rel:"noreferrer",children:"Peloton Studios"})," ","class reservations. Filter by status (free, waitlist, full), instructor, or discipline — things the official site doesn't support. Classes are fetched directly from Peloton each time you load the page."]})})]}),g.jsxs(fc,{children:[g.jsx(hc,{children:g.jsx(pc,{children:"How do I view classes?"})}),g.jsx(mc,{children:g.jsxs("p",{children:["Open the ",g.jsx(Es,{to:nt.CLASS_LIST,children:"Class List"})," and use the sidebar to set filters or switch between studio locations."]})})]}),g.jsxs(fc,{children:[g.jsx(hc,{children:g.jsx(pc,{children:"Is the class data live?"})}),g.jsx(mc,{children:g.jsx("p",{children:"Yes — data is fetched fresh from Peloton each time you load the page or switch studio. Filters persist across refreshes, unlike the official site."})})]}),g.jsxs(fc,{children:[g.jsx(hc,{children:g.jsx(pc,{children:"When do new classes become available?"})}),g.jsx(mc,{children:g.jsx("p",{children:"New classes typically open at 12:00 pm on Mondays and Thursdays in your studio's local timezone."})})]}),g.jsxs(fc,{children:[g.jsx(hc,{children:g.jsx(pc,{children:"Can I request a feature or report a bug?"})}),g.jsx(mc,{children:g.jsxs("p",{children:["Yes — this project is open source and lives on"," ",g.jsx("a",{href:"https://github.com/Abbondanzo/peloton-reservations",target:"_blank",rel:"noreferrer",children:"GitHub"}),". Open an issue to request a feature, report a bug, or just share feedback. Pull requests are welcome too."]})})]})]})}),$r=nn`
  border-color: ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  border-style: solid;
  border-width: 1px;
`,up=nn`
  &:hover {
    background-color: ${e=>e.theme.colors.hoverSurface};
  }
`,lH=nn`
  &:focus {
    background-color: ${e=>e.theme.colors.hoverSurface};
  }
`,mb=E.createContext({state:"idle"}),cH=e=>{if(!e||typeof e!="object")return!1;const t=e;return typeof t.snapshotAt=="number"&&typeof t.starts_at=="string"&&Array.isArray(t.instructors)&&typeof t.disciplineId=="string"&&typeof t.occupancy=="number"&&typeof t.maxOccupancy=="number"&&typeof t.waitingCount=="number"&&typeof t.status=="string"},uH=e=>{const[t,n]=E.useState({state:"loading"});return E.useEffect(()=>{if(!e){n({state:"fulfilled",data:[]});return}n({state:"loading"});const i=ln;if(!i){n({state:"failed",error:new Error("No database connection")});return}const o=Ln(i,Ce.PATHS.classHistory(e)),l=Ru(o,u=>{const f=u.val();if(!f){n({state:"fulfilled",data:[]});return}const p=[];for(const[h,y]of Object.entries(f))if(!(!y||typeof y!="object"))for(const _ of Object.values(y))cH(_)&&p.push({..._,classId:h});p.sort((h,y)=>y.snapshotAt-h.snapshotAt),n({state:"fulfilled",data:p})},u=>{n({state:"failed",error:u})});return()=>l()},[e]),t},Va=(e,t,n)=>{const i=new Date(e),o=new Intl.DateTimeFormat(void 0,{month:n?"long":"short",timeZone:t}).format(i),l=new Intl.DateTimeFormat(void 0,{day:"numeric",timeZone:t}).format(i);return n?`${new Intl.DateTimeFormat(void 0,{weekday:"long",timeZone:t}).format(i)}, ${o} ${l}`:`${o} ${l}`},dH=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],fH=(e,t)=>{const n=new Map;for(const i of e){const o=new Date(i.snapshotAt),l=Va(o.toISOString(),t,!0);if(!n.has(l)){const u=new Intl.DateTimeFormat("en-US",{weekday:"long",timeZone:t}).format(o);n.set(l,{dayIndex:dH.indexOf(u),snapshots:[]})}n.get(l).snapshots.push(i)}return Array.from(n.entries()).map(([i,{dayIndex:o,snapshots:l}])=>({label:i,dayIndex:o,snapshots:l}))},To=(e,t)=>new Intl.DateTimeFormat(void 0,{hour:"numeric",minute:"numeric",timeZone:t}).format(new Date(e)),hH=T.div`
  border: 1px solid ${e=>e.theme.colors.status.free.text}40;
  border-left: 4px solid ${e=>e.theme.colors.status.free.text};
  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.status.free.bg};
  padding: 12px 14px;
`,pH=T.div`
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${e=>e.theme.colors.status.free.text};
  margin-bottom: 6px;
`,mH=T.div`
  font-size: 13px;
  color: ${e=>e.theme.colors.main};
  font-weight: 500;
`,gH=T.div`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
  margin-top: 2px;
`,yH=T.div`
  font-size: 11px;
  color: ${e=>e.theme.colors.secondary};
  opacity: 0.6;
  margin-top: 2px;
`,vH=({snapshot:e,timezone:t})=>{const n=Va(e.starts_at,t,!1),i=To(e.starts_at,t),o=To(new Date(e.snapshotAt).toISOString(),t),l=e.instructors[0]?.name??"Unknown instructor",u=e.maxOccupancy-e.occupancy;return g.jsxs(hH,{children:[g.jsx(pH,{children:"● Would have triggered"}),g.jsxs(mH,{children:[n," ",i,e.name?` · ${e.name}`:""," · ",l]}),g.jsx(gH,{children:e.status==="free"?`Free · ${u} spot${u===1?"":"s"} available`:e.status==="waitlist"?`Waitlist · ${e.waitingCount} waiting`:"Full"}),g.jsxs(yH,{children:["detected at ",o]})]})},_H=T.div`
  border: 1px solid ${e=>e.theme.colors.status.waitlist.text}40;
  border-left: 4px solid ${e=>e.theme.colors.status.waitlist.text};
  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.status.waitlist.bg};
  padding: 12px 14px;
`,bH=T.div`
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${e=>e.theme.colors.status.waitlist.text};
  margin-bottom: 6px;
`,SH=T.div`
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
`,xH=T.div`
  font-size: 11px;
  color: ${e=>e.theme.colors.secondary};
  opacity: 0.6;
  margin-top: 2px;
`,wH={instructor:"wrong instructor",time:"outside your time range",discipline:"wrong discipline",status:"class not bookable"},EH=({snapshot:e,reason:t,timezone:n})=>{const i=Va(e.starts_at,n,!1),o=To(e.starts_at,n),l=To(new Date(e.snapshotAt).toISOString(),n),u=e.instructors[0]?.name??"Unknown instructor";return g.jsxs(_H,{children:[g.jsxs(bH,{children:["◌ Near miss — ",wH[t]]}),g.jsxs(SH,{children:[i," ",o,e.name?` · ${e.name}`:""," · ",u]}),g.jsxs(xH,{children:["detected at ",l]})]})},TH=T.button`
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
`,CH=T.ul`
  margin: 6px 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,RH=T.li`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
  padding: 4px 8px;
  background-color: ${e=>e.theme.colors.secondarySurface};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,AH=T.span`
  font-size: 11px;
  opacity: 0.6;
`,IH=({snapshots:e,timezone:t})=>{const[n,i]=E.useState(!1),o=e.length;return g.jsxs("div",{children:[g.jsxs(TH,{type:"button",onClick:()=>i(l=>!l),children:[g.jsx("span",{children:n?"▾":"▸"}),o," class",o===1?"":"es"," skipped"]}),n&&g.jsx(CH,{children:e.map((l,u)=>{const f=Va(l.starts_at,t,!1),p=To(l.starts_at,t),h=To(new Date(l.snapshotAt).toISOString(),t);return g.jsxs(RH,{children:[g.jsxs("span",{children:[f," ",p,l.name?` · ${l.name}`:"",l.instructors[0]?` · ${l.instructors[0].name}`:""]}),g.jsxs(AH,{children:["detected at ",h]})]},u)})})]})},DH=T.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,OH=T.h3`
  position: sticky;
  top: calc(${rb}px + env(safe-area-inset-top, 0px));
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
`,kH=T.span`
  font-size: 11px;
  font-weight: 400;
  color: ${e=>e.theme.colors.secondary};
  opacity: 0.6;
`,NH=({label:e,dayIndex:t,snapshots:n,alert:i,timezone:o})=>{const l=!!i.timeRanges[t],u=[],f=[],p=[];for(const h of n){const y=Ce.classifySnapshotMatch(h,i);y.type==="match"?u.push(h):y.type==="near-miss"?f.push({snapshot:h,reason:y.reason}):p.push(h)}return g.jsxs(DH,{children:[g.jsxs(OH,{children:[e,!l&&g.jsx(kH,{children:"not monitored"})]}),u.map((h,y)=>g.jsx(vH,{snapshot:h,timezone:o},y)),f.map(({snapshot:h,reason:y},_)=>g.jsx(EH,{snapshot:h,reason:y,timezone:o},_)),p.length>0&&g.jsx(IH,{snapshots:p,timezone:o})]})},MH=T.div`
  display: flex;
  gap: 16px;
  padding: 12px 0;
  border-bottom: 1px solid ${e=>e.theme.borderColor};
  flex-wrap: wrap;
`,XE=T.span`
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
`,ZE=T.strong`
  color: ${e=>e.$color??e.theme.colors.main};
`,LH=({matchCount:e,nearMissCount:t})=>{const n=Kv();return g.jsxs(MH,{children:[g.jsxs(XE,{children:[g.jsx(ZE,{$color:n.colors.status.free.text,children:e})," ",e===1?"class":"classes"," would have triggered"]}),g.jsxs(XE,{children:[g.jsx(ZE,{$color:n.colors.status.waitlist.text,children:t})," ","near ",t===1?"miss":"misses"]})]})},PH=T.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  ${$r}
  border-radius: ${e=>e.theme.borderRadius};
  overflow: hidden;
  background-color: ${e=>e.theme.colors.mainSurface};
`,jH=T.div`
  padding: 20px 24px;
  border-bottom: 1px solid ${e=>e.theme.borderColor};

  ${Te`
    padding: 16px;
  `}
`,$H=T.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`,UH=T.button`
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
`,zH=T.button`
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
`,BH=T.h1`
  margin: 0 0 4px;
  font-size: 18px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
`,HH=T.p`
  margin: 0;
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
`,FH=T.div`
  padding: 16px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${Te`
    padding: 12px 16px 16px;
  `}
`,lf=T.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
  padding: 32px 0;
`,qH=()=>{const{alertId:e}=QM(),t=ws(),n=E.useContext(mb),[i,o]=E.useState("idle"),l=E.useMemo(()=>n.state!=="fulfilled"?null:n.data.find(C=>C.id===e)??null,[n,e]),u=uH(l?.studioId??null),f=l?Ce.STUDIOS[l.studioId]?.timezone??"UTC":"UTC",p=E.useMemo(()=>!l||u.state!=="fulfilled"?[]:fH(u.data,f),[l,u,f]),{matchCount:h,nearMissCount:y}=E.useMemo(()=>{if(!l||u.state!=="fulfilled")return{matchCount:0,nearMissCount:0};let C=0,I=0;for(const M of u.data){const R=Ce.classifySnapshotMatch(M,l);R.type==="match"?C++:R.type==="near-miss"&&I++}return{matchCount:C,nearMissCount:I}},[l,u]),_=n.state==="loading"||n.state==="idle"||u.state==="loading",v="Notification"in window&&"serviceWorker"in navigator,b=E.useCallback(async()=>{if(v){o("sending");try{if(Notification.permission!=="granted"&&await Notification.requestPermission()!=="granted"){o("idle");return}const C=await navigator.serviceWorker.ready,I=l?Ce.STUDIOS[l.studioId]:null,M="Spot opened up!",R=`${l?.name??"Test alert"} — ${I?.location??"Studio"} · test notification`;await C.showNotification(M,{body:R,icon:"/icons/icon-192x192.png",badge:"/icons/icon-96x96.png",data:{classUrl:"/p/7248695-peloton-studios-new-york/e/99586855-30-min-intervals-ride/"}}),o("sent"),setTimeout(()=>o("idle"),3e3)}catch{o("error"),setTimeout(()=>o("idle"),3e3)}}},[l,v]),x=l?.name??"Alert",O=i==="sending"?"Sending…":i==="sent"?"Sent!":i==="error"?"Error":"Send test notification";return g.jsxs(PH,{children:[g.jsxs(jH,{children:[g.jsx(zH,{type:"button",onClick:()=>t(-1),children:"← Alerts"}),g.jsxs($H,{children:[g.jsx("div",{children:g.jsxs(BH,{children:[x," — Past 7 Days"]})}),v&&g.jsx(UH,{type:"button",$sent:i==="sent",disabled:i==="sending",onClick:b,title:"Fire a test push notification to verify delivery and the notification URL",children:O})]}),g.jsx(HH,{children:l?`${Ce.STUDIOS[l.studioId]?.location??l.studioId}`:""})]}),g.jsxs(FH,{children:[_&&g.jsx(lf,{children:"Loading…"}),!_&&!l&&g.jsx(lf,{children:"Alert not found."}),!_&&l&&u.state==="fulfilled"&&g.jsxs(g.Fragment,{children:[g.jsx(LH,{matchCount:h,nearMissCount:y}),p.length===0&&g.jsx(lf,{children:"No class history yet. History builds up as the backend detects class changes."}),p.map(({label:C,dayIndex:I,snapshots:M})=>g.jsx(NH,{label:C,dayIndex:I,snapshots:M,alert:l,timezone:f},C))]}),!_&&u.state==="failed"&&g.jsx(lf,{children:"Failed to load class history."})]})]})},VH=e=>{try{return window.localStorage.getItem(e)}catch(t){return Nr(t),null}},GH="STUDIO_ID",SD=e=>{const t=VH(GH);return t===null?e:Object.keys(Ce.STUDIOS).includes(t)?t:e},WH={studioId:SD(Ce.DEFAULT_STUDIO_ID)},Ev=Xn({name:"studioSelector",initialState:WH,reducers:{setStudioId(e,t){e.studioId=t.payload}}}),{setStudioId:yh}=Ev.actions,YH=async(e,t)=>{const n=ln;if(!n)throw new Error("No Firebase database connection to use");const i=(await PU(Ln(n,Ce.PATHS.alerts(e)),t)).key;if(!i)throw new Error("Missing ID from insertion operation");return{...t,id:i}},xD=async(e,t)=>{const n=ln;if(!n)throw new Error("No Firebase database connection to use");const i={...t,name:t.name??null,watchedClassIds:t.watchedClassIds??null,disabled:t.disabled??null};await NI(Ln(n,Ce.PATHS.alert(e,t.id)),i)},QH=T.div`
  display: flex;
  flex-direction: column;
`,KH=T.label`
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,XH=T.input`
  ${$r}
  padding: 12px 8px;
  font-family: inherit;
  background-color: ${e=>e.theme.colors.mainSurface};
  color: ${e=>e.theme.colors.main};
`,ZH=T.span`
  margin-top: 4px;
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,JH=({label:e,hint:t,placeholder:n,value:i,onChange:o})=>{const l=E.useId();return g.jsxs(QH,{children:[g.jsx(KH,{htmlFor:l,children:e}),g.jsx(XH,{id:l,placeholder:n,value:i,"aria-describedby":t?`${l}-hint`:void 0,onChange:({target:u})=>o(u.value)}),t&&g.jsx(ZH,{id:`${l}-hint`,children:t})]})},e9=T.label`
  ${$r}
  ${up}
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
`,t9=T.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,n9=T.span`
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
`,r9=T.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,i9=T.input`
  accent-color: ${e=>e.theme.colors.accent};
`,vh=({name:e,value:t,checked:n,onChange:i,label:o,hint:l,icon:u})=>{const f=E.useId();return g.jsxs(e9,{htmlFor:f,children:[g.jsx(i9,{type:"radio",id:f,name:e,value:t,checked:n,onChange:i}),u,g.jsxs(t9,{children:[g.jsx(n9,{children:o}),l&&g.jsx(r9,{children:l})]})]})},JE=T.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`,eT=T.legend`
  font-weight: 600;
  font-size: 18px;
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,tT=T.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  margin: 0 0 16px;
`,nT=T.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,rT=T.div`
  margin-top: 32px;

  ${Te`
    margin-top: 24px;
  `}
`,s9=Object.entries(Ce.STUDIOS).map(([e,t])=>({id:e,label:t.location})),o9=[{status:"free",label:"Open spots only",hint:"Alert me when a class has available spots"},{status:"waitlist",label:"Open spots or waitlist",hint:"Alert me even if I'd join the waitlist"}],a9=({name:e,onNameChange:t,studioId:n,onStudioChange:i,maxStatus:o,onStatusChange:l})=>g.jsxs("div",{children:[g.jsx(JH,{label:"Alert name (optional)",hint:"Leave blank to auto-generate a name from your filters",placeholder:"e.g. Morning Cycling with Cody",value:e,onChange:t}),g.jsx(rT,{}),g.jsxs(JE,{children:[g.jsx(eT,{children:"Which studio?"}),g.jsx(tT,{children:"Pick the Peloton studio you want to monitor."}),g.jsx(nT,{children:s9.map(u=>g.jsx(vh,{name:"studio",value:u.id,checked:n===u.id,onChange:()=>i(u.id),label:u.label},u.id))})]}),g.jsx(rT,{}),g.jsxs(JE,{children:[g.jsx(eT,{children:"When should we alert you?"}),g.jsx(tT,{children:"Choose whether to include waitlisted classes."}),g.jsx(nT,{children:o9.map(u=>g.jsx(vh,{name:"status",value:u.status,checked:o===u.status,onChange:()=>l(u.status),label:u.label,hint:u.hint},u.status))})]})]}),iT={Cardio:"#d8ec43",Cycling:"#bbd4f4",Meditation:"#e6d4ff",Rowing:"#cbf293","Outdoor Run":"#a8e6cf","Outdoor Run/Walk":"#94f3d0",Running:"#fde987",Strength:"#ffc0d5",Tread:"#fdbe9f",Walking:"#ffa8a9",Yoga:"#ceffdc"},wD=.2,_h=e=>Math.round(e*(1-wD*2)),l9=e=>Math.round(e*wD),c9=T.div`
  width: ${e=>_h(e.size)}px;
  height: ${e=>_h(e.size)}px;
  border-radius: ${e=>e.size}px;
  background-color: ${e=>e.color};
  padding: ${e=>l9(e.size)}px;
  flex-shrink: 0;
`,u9=T.img`
  width: ${e=>_h(e.size)}px;
  height: ${e=>_h(e.size)}px;
  display: block;
`,bh=({discipline:e,size:t=32})=>{const n=Kv(),i=E.useMemo(()=>{const o=Object.keys(iT),l=e.name.toLowerCase(),u=o.find(f=>f.toLowerCase()===l)??o.find(f=>{const p=f.toLowerCase();return p.includes(l)||l.includes(p)});if(u)return iT[u];{const f=`Received unsupported discipline ${e.name}`;return console.log(f),t_(f),n.colors.secondarySurface}},[e.name,n.colors.secondarySurface]);return g.jsx(c9,{color:i,size:t,children:g.jsx(u9,{alt:e.name,src:e.iconUrl,size:t,color:i})})},d9=T.img`
  width: ${e=>e.size}px;
  min-width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  overflow: hidden;
  background-color: ${e=>e.theme.colors.secondarySurface};
  border-radius: 50%;
  color: ${e=>e.theme.colors.secondary};
`,gb=({instructor:e,size:t=32})=>g.jsx(d9,{src:e.imageUrl,alt:`Profile of ${e.name}`,size:t});var f9=class extends Error{issues;constructor(e){super(e[0].message),this.name="SchemaError",this.issues=e}},ED=(e=>(e.uninitialized="uninitialized",e.pending="pending",e.fulfilled="fulfilled",e.rejected="rejected",e))(ED||{});function sT(e){return{status:e,isUninitialized:e==="uninitialized",isLoading:e==="pending",isSuccess:e==="fulfilled",isError:e==="rejected"}}var oT=vs;function yb(e,t){if(e===t||!(oT(e)&&oT(t)||Array.isArray(e)&&Array.isArray(t)))return t;const n=Object.keys(t),i=Object.keys(e);let o=n.length===i.length;const l=Array.isArray(t)?[]:{};for(const u of n)l[u]=yb(e[u],t[u]),o&&(o=e[u]===l[u]);return o?e:l}function my(e){let t=0;for(const n in e)t++;return t}var aT=e=>[].concat(...e);function h9(e){return new RegExp("(^|:)//").test(e)}function p9(){return typeof document>"u"?!0:document.visibilityState!=="hidden"}function Sh(e){return e!=null}function m9(){return typeof navigator>"u"||navigator.onLine===void 0?!0:navigator.onLine}var g9=e=>e.replace(/\/$/,""),y9=e=>e.replace(/^\//,"");function v9(e,t){if(!e)return t;if(!t)return e;if(h9(t))return t;const n=e.endsWith("/")||!t.startsWith("?")?"/":"";return e=g9(e),t=y9(t),`${e}${n}${t}`}function _9(e,t,n){return e.has(t)?e.get(t):e.set(t,n).get(t)}function Tv(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}var Cv=()=>new Map,lT=(...e)=>fetch(...e),b9=e=>e.status>=200&&e.status<=299,S9=e=>/ion\/(vnd\.api\+)?json/.test(e.get("content-type")||"");function cT(e){if(!vs(e))return e;const t={...e};for(const[n,i]of Object.entries(t))i===void 0&&delete t[n];return t}function x9({baseUrl:e,prepareHeaders:t=_=>_,fetchFn:n=lT,paramsSerializer:i,isJsonContentType:o=S9,jsonContentType:l="application/json",jsonReplacer:u,timeout:f,responseHandler:p,validateStatus:h,...y}={}){return typeof fetch>"u"&&n===lT&&console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."),async(v,b,x)=>{const{getState:O,extra:C,endpoint:I,forced:M,type:R}=b;let D,{url:N,headers:A=new Headers(y.headers),params:P=void 0,responseHandler:U=p??"json",validateStatus:F=h??b9,timeout:H=f,...z}=typeof v=="string"?{url:v}:v,G,V=b.signal;H&&(G=new AbortController,b.signal.addEventListener("abort",G.abort),V=G.signal);let te={...y,signal:V,...z};A=new Headers(cT(A)),te.headers=await t(A,{getState:O,arg:v,extra:C,endpoint:I,forced:M,type:R,extraOptions:x})||A;const ue=de=>typeof de=="object"&&(vs(de)||Array.isArray(de)||typeof de.toJSON=="function");if(!te.headers.has("content-type")&&ue(te.body)&&te.headers.set("content-type",l),ue(te.body)&&o(te.headers)&&(te.body=JSON.stringify(te.body,u)),P){const de=~N.indexOf("?")?"&":"?",me=i?i(P):new URLSearchParams(cT(P));N+=de+me}N=v9(e,N);const j=new Request(N,te);D={request:new Request(N,te)};let ne,ae=!1,k=G&&setTimeout(()=>{ae=!0,G.abort()},H);try{ne=await n(j)}catch(de){return{error:{status:ae?"TIMEOUT_ERROR":"FETCH_ERROR",error:String(de)},meta:D}}finally{k&&clearTimeout(k),G?.signal.removeEventListener("abort",G.abort)}const X=ne.clone();D.response=X;let le,ie="";try{let de;if(await Promise.all([_(ne,U).then(me=>le=me,me=>de=me),X.text().then(me=>ie=me,()=>{})]),de)throw de}catch(de){return{error:{status:"PARSING_ERROR",originalStatus:ne.status,data:ie,error:String(de)},meta:D}}return F(ne,le)?{data:le,meta:D}:{error:{status:ne.status,data:le},meta:D}};async function _(v,b){if(typeof b=="function")return b(v);if(b==="content-type"&&(b=o(v.headers)?"json":"text"),b==="json"){const x=await v.text();return x.length?JSON.parse(x):null}return v.text()}}var uT=class{constructor(e,t=void 0){this.value=e,this.meta=t}},vb=mr("__rtkq/focused"),TD=mr("__rtkq/unfocused"),_b=mr("__rtkq/online"),CD=mr("__rtkq/offline");function dp(e){return e.type==="query"}function w9(e){return e.type==="mutation"}function fp(e){return e.type==="infinitequery"}function xh(e){return dp(e)||fp(e)}function bb(e,t,n,i,o,l){return E9(e)?e(t,n,i,o).filter(Sh).map(Rv).map(l):Array.isArray(e)?e.map(Rv).map(l):[]}function E9(e){return typeof e=="function"}function Rv(e){return typeof e=="string"?{type:e}:e}function T9(e,t){return e.catch(t)}var du=Symbol("forceQueryFn"),Av=e=>typeof e[du]=="function";function C9({serializeQueryArgs:e,queryThunk:t,infiniteQueryThunk:n,mutationThunk:i,api:o,context:l,internalState:u}){const{runningQueries:f,runningMutations:p}=u,{unsubscribeQueryResult:h,removeMutationResult:y,updateSubscriptionOptions:_}=o.internalActions;return{buildInitiateQuery:I,buildInitiateInfiniteQuery:M,buildInitiateMutation:R,getRunningQueryThunk:v,getRunningMutationThunk:b,getRunningQueriesThunk:x,getRunningMutationsThunk:O};function v(D,N){return A=>{const P=l.endpointDefinitions[D],U=e({queryArgs:N,endpointDefinition:P,endpointName:D});return f.get(A)?.[U]}}function b(D,N){return A=>p.get(A)?.[N]}function x(){return D=>Object.values(f.get(D)||{}).filter(Sh)}function O(){return D=>Object.values(p.get(D)||{}).filter(Sh)}function C(D,N){const A=(P,{subscribe:U=!0,forceRefetch:F,subscriptionOptions:H,[du]:z,...G}={})=>(V,te)=>{const ue=e({queryArgs:P,endpointDefinition:N,endpointName:D});let j;const K={...G,type:"query",subscribe:U,forceRefetch:F,subscriptionOptions:H,endpointName:D,originalArgs:P,queryCacheKey:ue,[du]:z};if(dp(N))j=t(K);else{const{direction:Ie,initialPageParam:be}=G;j=n({...K,direction:Ie,initialPageParam:be})}const ne=o.endpoints[D].select(P),ae=V(j),k=ne(te()),{requestId:X,abort:le}=ae,ie=k.requestId!==X,de=f.get(V)?.[ue],me=()=>ne(te()),pe=Object.assign(z?ae.then(me):ie&&!de?Promise.resolve(k):Promise.all([de,ae]).then(me),{arg:P,requestId:X,subscriptionOptions:H,queryCacheKey:ue,abort:le,async unwrap(){const Ie=await pe;if(Ie.isError)throw Ie.error;return Ie.data},refetch:()=>V(A(P,{subscribe:!1,forceRefetch:!0})),unsubscribe(){U&&V(h({queryCacheKey:ue,requestId:X}))},updateSubscriptionOptions(Ie){pe.subscriptionOptions=Ie,V(_({endpointName:D,requestId:X,queryCacheKey:ue,options:Ie}))}});if(!de&&!ie&&!z){const Ie=_9(f,V,{});Ie[ue]=pe,pe.then(()=>{delete Ie[ue],my(Ie)||f.delete(V)})}return pe};return A}function I(D,N){return C(D,N)}function M(D,N){return C(D,N)}function R(D){return(N,{track:A=!0,fixedCacheKey:P}={})=>(U,F)=>{const H=i({type:"mutation",endpointName:D,originalArgs:N,track:A,fixedCacheKey:P}),z=U(H),{requestId:G,abort:V,unwrap:te}=z,ue=T9(z.unwrap().then(ae=>({data:ae})),ae=>({error:ae})),j=()=>{U(y({requestId:G,fixedCacheKey:P}))},K=Object.assign(ue,{arg:z.arg,requestId:G,abort:V,unwrap:te,reset:j}),ne=p.get(U)||{};return p.set(U,ne),ne[G]=K,K.then(()=>{delete ne[G],my(ne)||p.delete(U)}),P&&(ne[P]=K,K.then(()=>{ne[P]===K&&(delete ne[P],my(ne)||p.delete(U))})),K}}}var RD=class extends f9{constructor(e,t,n,i){super(e),this.value=t,this.schemaName=n,this._bqMeta=i}},to=(e,t)=>Array.isArray(e)?e.includes(t):!!e;async function no(e,t,n,i){const o=await e["~standard"].validate(t);if(o.issues)throw new RD(o.issues,t,n,i);return o.value}function dT(e){return e}var gc=(e={})=>({...e,[Gh]:!0});function R9({reducerPath:e,baseQuery:t,context:{endpointDefinitions:n},serializeQueryArgs:i,api:o,assertTagType:l,selectors:u,onSchemaFailure:f,catchSchemaFailure:p,skipSchemaValidation:h}){const y=(z,G,V,te)=>(ue,j)=>{const K=n[z],ne=i({queryArgs:G,endpointDefinition:K,endpointName:z});if(ue(o.internalActions.queryResultPatched({queryCacheKey:ne,patches:V})),!te)return;const ae=o.endpoints[z].select(G)(j()),k=bb(K.providesTags,ae.data,void 0,G,{},l);ue(o.internalActions.updateProvidedBy([{queryCacheKey:ne,providedTags:k}]))};function _(z,G,V=0){const te=[G,...z];return V&&te.length>V?te.slice(0,-1):te}function v(z,G,V=0){const te=[...z,G];return V&&te.length>V?te.slice(1):te}const b=(z,G,V,te=!0)=>(ue,j)=>{const ne=o.endpoints[z].select(G)(j()),ae={patches:[],inversePatches:[],undo:()=>ue(o.util.patchQueryData(z,G,ae.inversePatches,te))};if(ne.status==="uninitialized")return ae;let k;if("data"in ne)if(br(ne.data)){const[X,le,ie]=pA(ne.data,V);ae.patches.push(...le),ae.inversePatches.push(...ie),k=X}else k=V(ne.data),ae.patches.push({op:"replace",path:[],value:k}),ae.inversePatches.push({op:"replace",path:[],value:ne.data});return ae.patches.length===0||ue(o.util.patchQueryData(z,G,ae.patches,te)),ae},x=(z,G,V)=>te=>te(o.endpoints[z].initiate(G,{subscribe:!1,forceRefetch:!0,[du]:()=>({data:V})})),O=(z,G)=>z.query&&z[G]?z[G]:dT,C=async(z,{signal:G,abort:V,rejectWithValue:te,fulfillWithValue:ue,dispatch:j,getState:K,extra:ne})=>{const ae=n[z.endpointName],{metaSchema:k,skipSchemaValidation:X=h}=ae;try{let le=dT;const ie={signal:G,abort:V,dispatch:j,getState:K,extra:ne,endpoint:z.endpointName,type:z.type,forced:z.type==="query"?I(z,K()):void 0,queryCacheKey:z.type==="query"?z.queryCacheKey:void 0},de=z.type==="query"?z[du]:void 0;let me;const pe=async(be,Oe,Ue,_t)=>{if(Oe==null&&be.pages.length)return Promise.resolve({data:be});const gt={queryArg:z.originalArgs,pageParam:Oe},Pn=await Ie(gt),Et=_t?_:v;return{data:{pages:Et(be.pages,Pn.data,Ue),pageParams:Et(be.pageParams,Oe,Ue)},meta:Pn.meta}};async function Ie(be){let Oe;const{extraOptions:Ue,argSchema:_t,rawResponseSchema:gt,responseSchema:Pn}=ae;if(_t&&!to(X,"arg")&&(be=await no(_t,be,"argSchema",{})),de?Oe=de():ae.query?(le=O(ae,"transformResponse"),Oe=await t(ae.query(be),ie,Ue)):Oe=await ae.queryFn(be,ie,Ue,Ur=>t(Ur,ie,Ue)),typeof process<"u",Oe.error)throw new uT(Oe.error,Oe.meta);let{data:Et}=Oe;gt&&!to(X,"rawResponse")&&(Et=await no(gt,Oe.data,"rawResponseSchema",Oe.meta));let jn=await le(Et,Oe.meta,be);return Pn&&!to(X,"response")&&(jn=await no(Pn,jn,"responseSchema",Oe.meta)),{...Oe,data:jn}}if(z.type==="query"&&"infiniteQueryOptions"in ae){const{infiniteQueryOptions:be}=ae,{maxPages:Oe=1/0}=be;let Ue;const _t={pages:[],pageParams:[]},gt=u.selectQueryEntry(K(),z.queryCacheKey)?.data,Et=I(z,K())&&!z.direction||!gt?_t:gt;if("direction"in z&&z.direction&&Et.pages.length){const jn=z.direction==="backward",Yt=(jn?AD:Iv)(be,Et,z.originalArgs);Ue=await pe(Et,Yt,Oe,jn)}else{const{initialPageParam:jn=be.initialPageParam}=z,Ur=gt?.pageParams??[],Yt=Ur[0]??jn,sl=Ur.length;Ue=await pe(Et,Yt,Oe),de&&(Ue={data:Ue.data.pages[0]});for(let As=1;As<sl;As++){const Oo=Iv(be,Ue.data,z.originalArgs);Ue=await pe(Ue.data,Oo,Oe)}}me=Ue}else me=await Ie(z.originalArgs);return k&&!to(X,"meta")&&me.meta&&(me.meta=await no(k,me.meta,"metaSchema",me.meta)),ue(me.data,gc({fulfilledTimeStamp:Date.now(),baseQueryMeta:me.meta}))}catch(le){let ie=le;if(ie instanceof uT){let de=O(ae,"transformErrorResponse");const{rawErrorResponseSchema:me,errorResponseSchema:pe}=ae;let{value:Ie,meta:be}=ie;try{me&&!to(X,"rawErrorResponse")&&(Ie=await no(me,Ie,"rawErrorResponseSchema",be)),k&&!to(X,"meta")&&(be=await no(k,be,"metaSchema",be));let Oe=await de(Ie,be,z.originalArgs);return pe&&!to(X,"errorResponse")&&(Oe=await no(pe,Oe,"errorResponseSchema",be)),te(Oe,gc({baseQueryMeta:be}))}catch(Oe){ie=Oe}}try{if(ie instanceof RD){const de={endpoint:z.endpointName,arg:z.originalArgs,type:z.type,queryCacheKey:z.type==="query"?z.queryCacheKey:void 0};ae.onSchemaFailure?.(ie,de),f?.(ie,de);const{catchSchemaFailure:me=p}=ae;if(me)return te(me(ie,de),gc({baseQueryMeta:ie._bqMeta}))}}catch(de){ie=de}throw console.error(ie),ie}};function I(z,G){const V=u.selectQueryEntry(G,z.queryCacheKey),te=u.selectConfig(G).refetchOnMountOrArgChange,ue=V?.fulfilledTimeStamp,j=z.forceRefetch??(z.subscribe&&te);return j?j===!0||(Number(new Date)-Number(ue))/1e3>=j:!1}const M=()=>jw(`${e}/executeQuery`,C,{getPendingMeta({arg:G}){const V=n[G.endpointName];return gc({startedTimeStamp:Date.now(),...fp(V)?{direction:G.direction}:{}})},condition(G,{getState:V}){const te=V(),ue=u.selectQueryEntry(te,G.queryCacheKey),j=ue?.fulfilledTimeStamp,K=G.originalArgs,ne=ue?.originalArgs,ae=n[G.endpointName],k=G.direction;return Av(G)?!0:ue?.status==="pending"?!1:I(G,te)||dp(ae)&&ae?.forceRefetch?.({currentArg:K,previousArg:ne,endpointState:ue,state:te})?!0:!(j&&!k)},dispatchConditionRejection:!0}),R=M(),D=M(),N=jw(`${e}/executeMutation`,C,{getPendingMeta(){return gc({startedTimeStamp:Date.now()})}}),A=z=>"force"in z,P=z=>"ifOlderThan"in z,U=(z,G,V)=>(te,ue)=>{const j=A(V)&&V.force,K=P(V)&&V.ifOlderThan,ne=(k=!0)=>{const X={forceRefetch:k,isPrefetch:!0};return o.endpoints[z].initiate(G,X)},ae=o.endpoints[z].select(G)(ue());if(j)te(ne());else if(K){const k=ae?.fulfilledTimeStamp;if(!k){te(ne());return}(Number(new Date)-Number(new Date(k)))/1e3>=K&&te(ne())}else te(ne(!1))};function F(z){return G=>G?.meta?.arg?.endpointName===z}function H(z,G){return{matchPending:Nc(v_(z),F(G)),matchFulfilled:Nc(_s(z),F(G)),matchRejected:Nc(Ua(z),F(G))}}return{queryThunk:R,mutationThunk:N,infiniteQueryThunk:D,prefetch:U,updateQueryData:b,upsertQueryData:x,patchQueryData:y,buildMatchThunkActions:H}}function Iv(e,{pages:t,pageParams:n},i){const o=t.length-1;return e.getNextPageParam(t[o],t,n[o],n,i)}function AD(e,{pages:t,pageParams:n},i){return e.getPreviousPageParam?.(t[0],t,n[0],n,i)}function ID(e,t,n,i){return bb(n[e.meta.arg.endpointName][t],_s(e)?e.payload:void 0,Yh(e)?e.payload:void 0,e.meta.arg.originalArgs,"baseQueryMeta"in e.meta?e.meta.baseQueryMeta:void 0,i)}function cf(e,t,n){const i=e[t];i&&n(i)}function fu(e){return("arg"in e?e.arg.fixedCacheKey:e.fixedCacheKey)??e.requestId}function fT(e,t,n){const i=e[fu(t)];i&&n(i)}var uf={};function A9({reducerPath:e,queryThunk:t,mutationThunk:n,serializeQueryArgs:i,context:{endpointDefinitions:o,apiUid:l,extractRehydrationInfo:u,hasRehydrationInfo:f},assertTagType:p,config:h}){const y=mr(`${e}/resetApiState`);function _(F,H,z,G){F[H.queryCacheKey]??={status:"uninitialized",endpointName:H.endpointName},cf(F,H.queryCacheKey,V=>{V.status="pending",V.requestId=z&&V.requestId?V.requestId:G.requestId,H.originalArgs!==void 0&&(V.originalArgs=H.originalArgs),V.startedTimeStamp=G.startedTimeStamp;const te=o[G.arg.endpointName];fp(te)&&"direction"in H&&(V.direction=H.direction)})}function v(F,H,z,G){cf(F,H.arg.queryCacheKey,V=>{if(V.requestId!==H.requestId&&!G)return;const{merge:te}=o[H.arg.endpointName];if(V.status="fulfilled",te)if(V.data!==void 0){const{fulfilledTimeStamp:ue,arg:j,baseQueryMeta:K,requestId:ne}=H;let ae=yu(V.data,k=>te(k,z,{arg:j.originalArgs,baseQueryMeta:K,fulfilledTimeStamp:ue,requestId:ne}));V.data=ae}else V.data=z;else V.data=o[H.arg.endpointName].structuralSharing??!0?yb(Lr(V.data)?q6(V.data):V.data,z):z;delete V.error,V.fulfilledTimeStamp=H.fulfilledTimeStamp})}const b=Xn({name:`${e}/queries`,initialState:uf,reducers:{removeQueryResult:{reducer(F,{payload:{queryCacheKey:H}}){delete F[H]},prepare:oc()},cacheEntriesUpserted:{reducer(F,H){for(const z of H.payload){const{queryDescription:G,value:V}=z;_(F,G,!0,{arg:G,requestId:H.meta.requestId,startedTimeStamp:H.meta.timestamp}),v(F,{arg:G,requestId:H.meta.requestId,fulfilledTimeStamp:H.meta.timestamp,baseQueryMeta:{}},V,!0)}},prepare:F=>({payload:F.map(G=>{const{endpointName:V,arg:te,value:ue}=G,j=o[V];return{queryDescription:{type:"query",endpointName:V,originalArgs:G.arg,queryCacheKey:i({queryArgs:te,endpointDefinition:j,endpointName:V})},value:ue}}),meta:{[Gh]:!0,requestId:__(),timestamp:Date.now()}})},queryResultPatched:{reducer(F,{payload:{queryCacheKey:H,patches:z}}){cf(F,H,G=>{G.data=Dw(G.data,z.concat())})},prepare:oc()}},extraReducers(F){F.addCase(t.pending,(H,{meta:z,meta:{arg:G}})=>{const V=Av(G);_(H,G,V,z)}).addCase(t.fulfilled,(H,{meta:z,payload:G})=>{const V=Av(z.arg);v(H,z,G,V)}).addCase(t.rejected,(H,{meta:{condition:z,arg:G,requestId:V},error:te,payload:ue})=>{cf(H,G.queryCacheKey,j=>{if(!z){if(j.requestId!==V)return;j.status="rejected",j.error=ue??te}})}).addMatcher(f,(H,z)=>{const{queries:G}=u(z);for(const[V,te]of Object.entries(G))(te?.status==="fulfilled"||te?.status==="rejected")&&(H[V]=te)})}}),x=Xn({name:`${e}/mutations`,initialState:uf,reducers:{removeMutationResult:{reducer(F,{payload:H}){const z=fu(H);z in F&&delete F[z]},prepare:oc()}},extraReducers(F){F.addCase(n.pending,(H,{meta:z,meta:{requestId:G,arg:V,startedTimeStamp:te}})=>{V.track&&(H[fu(z)]={requestId:G,status:"pending",endpointName:V.endpointName,startedTimeStamp:te})}).addCase(n.fulfilled,(H,{payload:z,meta:G})=>{G.arg.track&&fT(H,G,V=>{V.requestId===G.requestId&&(V.status="fulfilled",V.data=z,V.fulfilledTimeStamp=G.fulfilledTimeStamp)})}).addCase(n.rejected,(H,{payload:z,error:G,meta:V})=>{V.arg.track&&fT(H,V,te=>{te.requestId===V.requestId&&(te.status="rejected",te.error=z??G)})}).addMatcher(f,(H,z)=>{const{mutations:G}=u(z);for(const[V,te]of Object.entries(G))(te?.status==="fulfilled"||te?.status==="rejected")&&V!==te?.requestId&&(H[V]=te)})}}),O={tags:{},keys:{}},C=Xn({name:`${e}/invalidation`,initialState:O,reducers:{updateProvidedBy:{reducer(F,H){for(const{queryCacheKey:z,providedTags:G}of H.payload){I(F,z);for(const{type:V,id:te}of G){const ue=(F.tags[V]??={})[te||"__internal_without_id"]??=[];ue.includes(z)||ue.push(z)}F.keys[z]=G}},prepare:oc()}},extraReducers(F){F.addCase(b.actions.removeQueryResult,(H,{payload:{queryCacheKey:z}})=>{I(H,z)}).addMatcher(f,(H,z)=>{const{provided:G}=u(z);for(const[V,te]of Object.entries(G.tags??{}))for(const[ue,j]of Object.entries(te)){const K=(H.tags[V]??={})[ue||"__internal_without_id"]??=[];for(const ne of j)K.includes(ne)||K.push(ne),H.keys[ne]=G.keys[ne]}}).addMatcher(_i(_s(t),Yh(t)),(H,z)=>{M(H,[z])}).addMatcher(b.actions.cacheEntriesUpserted.match,(H,z)=>{const G=z.payload.map(({queryDescription:V,value:te})=>({type:"UNKNOWN",payload:te,meta:{requestStatus:"fulfilled",requestId:"UNKNOWN",arg:V}}));M(H,G)})}});function I(F,H){const z=F.keys[H]??[];for(const G of z){const V=G.type,te=G.id??"__internal_without_id",ue=F.tags[V]?.[te];ue&&(F.tags[V][te]=ue.filter(j=>j!==H))}delete F.keys[H]}function M(F,H){const z=H.map(G=>{const V=ID(G,"providesTags",o,p),{queryCacheKey:te}=G.meta.arg;return{queryCacheKey:te,providedTags:V}});C.caseReducers.updateProvidedBy(F,C.actions.updateProvidedBy(z))}const R=Xn({name:`${e}/subscriptions`,initialState:uf,reducers:{updateSubscriptionOptions(F,H){},unsubscribeQueryResult(F,H){},internal_getRTKQSubscriptions(){}}}),D=Xn({name:`${e}/internalSubscriptions`,initialState:uf,reducers:{subscriptionsUpdated:{reducer(F,H){return Dw(F,H.payload)},prepare:oc()}}}),N=Xn({name:`${e}/config`,initialState:{online:m9(),focused:p9(),middlewareRegistered:!1,...h},reducers:{middlewareRegistered(F,{payload:H}){F.middlewareRegistered=F.middlewareRegistered==="conflict"||l!==H?"conflict":!0}},extraReducers:F=>{F.addCase(_b,H=>{H.online=!0}).addCase(CD,H=>{H.online=!1}).addCase(vb,H=>{H.focused=!0}).addCase(TD,H=>{H.focused=!1}).addMatcher(f,H=>({...H}))}}),A=aA({queries:b.reducer,mutations:x.reducer,provided:C.reducer,subscriptions:D.reducer,config:N.reducer}),P=(F,H)=>A(y.match(H)?void 0:F,H),U={...N.actions,...b.actions,...R.actions,...D.actions,...x.actions,...C.actions,resetApiState:y};return{reducer:P,actions:U}}var cr=Symbol.for("RTKQ/skipToken"),DD={status:"uninitialized"},hT=yu(DD,()=>{}),pT=yu(DD,()=>{});function I9({serializeQueryArgs:e,reducerPath:t,createSelector:n}){const i=R=>hT,o=R=>pT;return{buildQuerySelector:v,buildInfiniteQuerySelector:b,buildMutationSelector:x,selectInvalidatedBy:O,selectCachedArgsForQuery:C,selectApiState:u,selectQueries:f,selectMutations:h,selectQueryEntry:p,selectConfig:y};function l(R){return{...R,...sT(R.status)}}function u(R){return R[t]}function f(R){return u(R)?.queries}function p(R,D){return f(R)?.[D]}function h(R){return u(R)?.mutations}function y(R){return u(R)?.config}function _(R,D,N){return A=>{if(A===cr)return n(i,N);const P=e({queryArgs:A,endpointDefinition:D,endpointName:R});return n(F=>p(F,P)??hT,N)}}function v(R,D){return _(R,D,l)}function b(R,D){const{infiniteQueryOptions:N}=D;function A(P){const U={...P,...sT(P.status)},{isLoading:F,isError:H,direction:z}=U,G=z==="forward",V=z==="backward";return{...U,hasNextPage:I(N,U.data,U.originalArgs),hasPreviousPage:M(N,U.data,U.originalArgs),isFetchingNextPage:F&&G,isFetchingPreviousPage:F&&V,isFetchNextPageError:H&&G,isFetchPreviousPageError:H&&V}}return _(R,D,A)}function x(){return R=>{let D;return typeof R=="object"?D=fu(R)??cr:D=R,n(D===cr?o:P=>u(P)?.mutations?.[D]??pT,l)}}function O(R,D){const N=R[t],A=new Set;for(const P of D.filter(Sh).map(Rv)){const U=N.provided.tags[P.type];if(!U)continue;let F=(P.id!==void 0?U[P.id]:aT(Object.values(U)))??[];for(const H of F)A.add(H)}return aT(Array.from(A.values()).map(P=>{const U=N.queries[P];return U?[{queryCacheKey:P,endpointName:U.endpointName,originalArgs:U.originalArgs}]:[]}))}function C(R,D){return Object.values(f(R)).filter(N=>N?.endpointName===D&&N.status!=="uninitialized").map(N=>N.originalArgs)}function I(R,D,N){return D?Iv(R,D,N)!=null:!1}function M(R,D,N){return!D||!R.getPreviousPageParam?!1:AD(R,D,N)!=null}}var mT=WeakMap?new WeakMap:void 0,gT=({endpointName:e,queryArgs:t})=>{let n="";const i=mT?.get(t);if(typeof i=="string")n=i;else{const o=JSON.stringify(t,(l,u)=>(u=typeof u=="bigint"?{$bigint:u.toString()}:u,u=vs(u)?Object.keys(u).sort().reduce((f,p)=>(f[p]=u[p],f),{}):u,u));vs(t)&&mT?.set(t,o),n=o}return`${e}(${n})`};function OD(...e){return function(n){const i=Xf(h=>n.extractRehydrationInfo?.(h,{reducerPath:n.reducerPath??"api"})),o={reducerPath:"api",keepUnusedDataFor:60,refetchOnMountOrArgChange:!1,refetchOnFocus:!1,refetchOnReconnect:!1,invalidationBehavior:"delayed",...n,extractRehydrationInfo:i,serializeQueryArgs(h){let y=gT;if("serializeQueryArgs"in h.endpointDefinition){const _=h.endpointDefinition.serializeQueryArgs;y=v=>{const b=_(v);return typeof b=="string"?b:gT({...v,queryArgs:b})}}else n.serializeQueryArgs&&(y=n.serializeQueryArgs);return y(h)},tagTypes:[...n.tagTypes||[]]},l={endpointDefinitions:{},batch(h){h()},apiUid:__(),extractRehydrationInfo:i,hasRehydrationInfo:Xf(h=>i(h)!=null)},u={injectEndpoints:p,enhanceEndpoints({addTagTypes:h,endpoints:y}){if(h)for(const _ of h)o.tagTypes.includes(_)||o.tagTypes.push(_);if(y)for(const[_,v]of Object.entries(y))typeof v=="function"?v(l.endpointDefinitions[_]):Object.assign(l.endpointDefinitions[_]||{},v);return u}},f=e.map(h=>h.init(u,o,l));function p(h){const y=h.endpoints({query:_=>({..._,type:"query"}),mutation:_=>({..._,type:"mutation"}),infiniteQuery:_=>({..._,type:"infinitequery"})});for(const[_,v]of Object.entries(y)){if(h.overrideExisting!==!0&&_ in l.endpointDefinitions){if(h.overrideExisting==="throw")throw new Error(gr(39));continue}l.endpointDefinitions[_]=v;for(const b of f)b.injectEndpoint(_,v)}return u}return u.injectEndpoints({endpoints:n.endpoints})}}function oi(e,...t){return Object.assign(e,...t)}var D9=({api:e,queryThunk:t,internalState:n,mwApi:i})=>{const o=`${e.reducerPath}/subscriptions`;let l=null,u=null;const{updateSubscriptionOptions:f,unsubscribeQueryResult:p}=e.internalActions,h=(O,C)=>{if(f.match(C)){const{queryCacheKey:M,requestId:R,options:D}=C.payload,N=O.get(M);return N?.has(R)&&N.set(R,D),!0}if(p.match(C)){const{queryCacheKey:M,requestId:R}=C.payload,D=O.get(M);return D&&D.delete(R),!0}if(e.internalActions.removeQueryResult.match(C))return O.delete(C.payload.queryCacheKey),!0;if(t.pending.match(C)){const{meta:{arg:M,requestId:R}}=C,D=Tv(O,M.queryCacheKey,Cv);return M.subscribe&&D.set(R,M.subscriptionOptions??D.get(R)??{}),!0}let I=!1;if(t.rejected.match(C)){const{meta:{condition:M,arg:R,requestId:D}}=C;if(M&&R.subscribe){const N=Tv(O,R.queryCacheKey,Cv);N.set(D,R.subscriptionOptions??N.get(D)??{}),I=!0}}return I},y=()=>n.currentSubscriptions,b={getSubscriptions:y,getSubscriptionCount:O=>y().get(O)?.size??0,isRequestSubscribed:(O,C)=>!!y()?.get(O)?.get(C)};function x(O){return JSON.parse(JSON.stringify(Object.fromEntries([...O].map(([C,I])=>[C,Object.fromEntries(I)]))))}return(O,C)=>{if(l||(l=x(n.currentSubscriptions)),e.util.resetApiState.match(O))return l={},n.currentSubscriptions.clear(),u=null,[!0,!1];if(e.internalActions.internal_getRTKQSubscriptions.match(O))return[!1,b];const I=h(n.currentSubscriptions,O);let M=!0;if(I){u||(u=setTimeout(()=>{const N=x(n.currentSubscriptions),[,A]=pA(l,()=>N);C.next(e.internalActions.subscriptionsUpdated(A)),l=N,u=null},500));const R=typeof O.type=="string"&&!!O.type.startsWith(o),D=t.rejected.match(O)&&O.meta.condition&&!!O.meta.arg.subscribe;M=!R&&!D}return[M,!1]}},O9=2147483647/1e3-1,k9=({reducerPath:e,api:t,queryThunk:n,context:i,internalState:o,selectors:{selectQueryEntry:l,selectConfig:u},getRunningQueryThunk:f,mwApi:p})=>{const{removeQueryResult:h,unsubscribeQueryResult:y,cacheEntriesUpserted:_}=t.internalActions,v=o.runningQueries.get(p.dispatch),b=_i(y.match,n.fulfilled,n.rejected,_.match);function x(R){const D=o.currentSubscriptions.get(R);if(!D)return!1;const N=D.size>0,A=v?.[R]!==void 0;return N||A}const O={},C=(R,D,N)=>{const A=D.getState(),P=u(A);if(b(R)){let U;if(_.match(R))U=R.payload.map(F=>F.queryDescription.queryCacheKey);else{const{queryCacheKey:F}=y.match(R)?R.payload:R.meta.arg;U=[F]}I(U,D,P)}if(t.util.resetApiState.match(R))for(const[U,F]of Object.entries(O))F&&clearTimeout(F),delete O[U];if(i.hasRehydrationInfo(R)){const{queries:U}=i.extractRehydrationInfo(R);I(Object.keys(U),D,P)}};function I(R,D,N){const A=D.getState();for(const P of R){const U=l(A,P);U?.endpointName&&M(P,U.endpointName,D,N)}}function M(R,D,N,A){const U=i.endpointDefinitions[D]?.keepUnusedDataFor??A.keepUnusedDataFor;if(U===1/0)return;const F=Math.max(0,Math.min(U,O9));if(!x(R)){const H=O[R];H&&clearTimeout(H),O[R]=setTimeout(()=>{if(!x(R)){const z=l(N.getState(),R);z?.endpointName&&N.dispatch(f(z.endpointName,z.originalArgs))?.abort(),N.dispatch(h({queryCacheKey:R}))}delete O[R]},F*1e3)}}return C},yT=new Error("Promise never resolved before cacheEntryRemoved."),N9=({api:e,reducerPath:t,context:n,queryThunk:i,mutationThunk:o,internalState:l,selectors:{selectQueryEntry:u,selectApiState:f}})=>{const p=ov(i),h=ov(o),y=_s(i,o),_={};function v(I,M,R){const D=_[I];D?.valueResolved&&(D.valueResolved({data:M,meta:R}),delete D.valueResolved)}function b(I){const M=_[I];M&&(delete _[I],M.cacheEntryRemoved())}const x=(I,M,R)=>{const D=O(I);function N(A,P,U,F){const H=u(R,P),z=u(M.getState(),P);!H&&z&&C(A,F,P,M,U)}if(i.pending.match(I))N(I.meta.arg.endpointName,D,I.meta.requestId,I.meta.arg.originalArgs);else if(e.internalActions.cacheEntriesUpserted.match(I))for(const{queryDescription:A,value:P}of I.payload){const{endpointName:U,originalArgs:F,queryCacheKey:H}=A;N(U,H,I.meta.requestId,F),v(H,P,{})}else if(o.pending.match(I))M.getState()[t].mutations[D]&&C(I.meta.arg.endpointName,I.meta.arg.originalArgs,D,M,I.meta.requestId);else if(y(I))v(D,I.payload,I.meta.baseQueryMeta);else if(e.internalActions.removeQueryResult.match(I)||e.internalActions.removeMutationResult.match(I))b(D);else if(e.util.resetApiState.match(I))for(const A of Object.keys(_))b(A)};function O(I){return p(I)?I.meta.arg.queryCacheKey:h(I)?I.meta.arg.fixedCacheKey??I.meta.requestId:e.internalActions.removeQueryResult.match(I)?I.payload.queryCacheKey:e.internalActions.removeMutationResult.match(I)?fu(I.payload):""}function C(I,M,R,D,N){const A=n.endpointDefinitions[I],P=A?.onCacheEntryAdded;if(!P)return;const U={},F=new Promise(ue=>{U.cacheEntryRemoved=ue}),H=Promise.race([new Promise(ue=>{U.valueResolved=ue}),F.then(()=>{throw yT})]);H.catch(()=>{}),_[R]=U;const z=e.endpoints[I].select(xh(A)?M:R),G=D.dispatch((ue,j,K)=>K),V={...D,getCacheEntry:()=>z(D.getState()),requestId:N,extra:G,updateCachedData:xh(A)?ue=>D.dispatch(e.util.updateQueryData(I,M,ue)):void 0,cacheDataLoaded:H,cacheEntryRemoved:F},te=P(M,V);Promise.resolve(te).catch(ue=>{if(ue!==yT)throw ue})}return x},M9=({api:e,context:{apiUid:t},reducerPath:n})=>(i,o)=>{e.util.resetApiState.match(i)&&o.dispatch(e.internalActions.middlewareRegistered(t))},L9=({reducerPath:e,context:t,context:{endpointDefinitions:n},mutationThunk:i,queryThunk:o,api:l,assertTagType:u,refetchQuery:f,internalState:p})=>{const{removeQueryResult:h}=l.internalActions,y=_i(_s(i),Yh(i)),_=_i(_s(i,o),Ua(i,o));let v=[];const b=(C,I)=>{y(C)?O(ID(C,"invalidatesTags",n,u),I):_(C)?O([],I):l.util.invalidateTags.match(C)&&O(bb(C.payload,void 0,void 0,void 0,void 0,u),I)};function x(C){const{queries:I,mutations:M}=C;for(const R of[I,M])for(const D in R)if(R[D]?.status==="pending")return!0;return!1}function O(C,I){const M=I.getState(),R=M[e];if(v.push(...C),R.config.invalidationBehavior==="delayed"&&x(R))return;const D=v;if(v=[],D.length===0)return;const N=l.util.selectInvalidatedBy(M,D);t.batch(()=>{const A=Array.from(N.values());for(const{queryCacheKey:P}of A){const U=R.queries[P],F=Tv(p.currentSubscriptions,P,Cv);U&&(F.size===0?I.dispatch(h({queryCacheKey:P})):U.status!=="uninitialized"&&I.dispatch(f(U)))}})}return b},P9=({reducerPath:e,queryThunk:t,api:n,refetchQuery:i,internalState:o})=>{const{currentPolls:l,currentSubscriptions:u}=o,f=new Set;let p=null;const h=(C,I)=>{(n.internalActions.updateSubscriptionOptions.match(C)||n.internalActions.unsubscribeQueryResult.match(C))&&y(C.payload.queryCacheKey,I),(t.pending.match(C)||t.rejected.match(C)&&C.meta.condition)&&y(C.meta.arg.queryCacheKey,I),(t.fulfilled.match(C)||t.rejected.match(C)&&!C.meta.condition)&&_(C.meta.arg,I),n.util.resetApiState.match(C)&&(x(),p&&(clearTimeout(p),p=null),f.clear())};function y(C,I){f.add(C),p||(p=setTimeout(()=>{for(const M of f)v({queryCacheKey:M},I);f.clear(),p=null},0))}function _({queryCacheKey:C},I){const M=I.getState()[e],R=M.queries[C],D=u.get(C);if(!R||R.status==="uninitialized")return;const{lowestPollingInterval:N,skipPollingIfUnfocused:A}=O(D);if(!Number.isFinite(N))return;const P=l.get(C);P?.timeout&&(clearTimeout(P.timeout),P.timeout=void 0);const U=Date.now()+N;l.set(C,{nextPollTimestamp:U,pollingInterval:N,timeout:setTimeout(()=>{(M.config.focused||!A)&&I.dispatch(i(R)),_({queryCacheKey:C},I)},N)})}function v({queryCacheKey:C},I){const R=I.getState()[e].queries[C],D=u.get(C);if(!R||R.status==="uninitialized")return;const{lowestPollingInterval:N}=O(D);if(!Number.isFinite(N)){b(C);return}const A=l.get(C),P=Date.now()+N;(!A||P<A.nextPollTimestamp)&&_({queryCacheKey:C},I)}function b(C){const I=l.get(C);I?.timeout&&clearTimeout(I.timeout),l.delete(C)}function x(){for(const C of l.keys())b(C)}function O(C=new Map){let I=!1,M=Number.POSITIVE_INFINITY;for(const R of C.values())R.pollingInterval&&(M=Math.min(R.pollingInterval,M),I=R.skipPollingIfUnfocused||I);return{lowestPollingInterval:M,skipPollingIfUnfocused:I}}return h},j9=({api:e,context:t,queryThunk:n,mutationThunk:i})=>{const o=v_(n,i),l=Ua(n,i),u=_s(n,i),f={};return(h,y)=>{if(o(h)){const{requestId:_,arg:{endpointName:v,originalArgs:b}}=h.meta,x=t.endpointDefinitions[v],O=x?.onQueryStarted;if(O){const C={},I=new Promise((N,A)=>{C.resolve=N,C.reject=A});I.catch(()=>{}),f[_]=C;const M=e.endpoints[v].select(xh(x)?b:_),R=y.dispatch((N,A,P)=>P),D={...y,getCacheEntry:()=>M(y.getState()),requestId:_,extra:R,updateCachedData:xh(x)?N=>y.dispatch(e.util.updateQueryData(v,b,N)):void 0,queryFulfilled:I};O(b,D)}}else if(u(h)){const{requestId:_,baseQueryMeta:v}=h.meta;f[_]?.resolve({data:h.payload,meta:v}),delete f[_]}else if(l(h)){const{requestId:_,rejectedWithValue:v,baseQueryMeta:b}=h.meta;f[_]?.reject({error:h.payload??h.error,isUnhandledError:!v,meta:b}),delete f[_]}}},$9=({reducerPath:e,context:t,api:n,refetchQuery:i,internalState:o})=>{const{removeQueryResult:l}=n.internalActions,u=(p,h)=>{vb.match(p)&&f(h,"refetchOnFocus"),_b.match(p)&&f(h,"refetchOnReconnect")};function f(p,h){const y=p.getState()[e],_=y.queries,v=o.currentSubscriptions;t.batch(()=>{for(const b of v.keys()){const x=_[b],O=v.get(b);if(!O||!x)continue;const C=[...O.values()];(C.some(M=>M[h]===!0)||C.every(M=>M[h]===void 0)&&y.config[h])&&(O.size===0?p.dispatch(l({queryCacheKey:b})):x.status!=="uninitialized"&&p.dispatch(i(x)))}})}return u};function U9(e){const{reducerPath:t,queryThunk:n,api:i,context:o,internalState:l}=e,{apiUid:u}=o,f={invalidateTags:mr(`${t}/invalidateTags`)},p=v=>v.type.startsWith(`${t}/`),h=[M9,k9,L9,P9,N9,j9];return{middleware:v=>{let b=!1;const x={...e,internalState:l,refetchQuery:_,isThisApiSliceAction:p,mwApi:v},O=h.map(M=>M(x)),C=D9(x),I=$9(x);return M=>R=>{if(!lA(R))return M(R);b||(b=!0,v.dispatch(i.internalActions.middlewareRegistered(u)));const D={...v,next:M},N=v.getState(),[A,P]=C(R,D,N);let U;if(A?U=M(R):U=P,v.getState()[t]&&(I(R,D,N),p(R)||o.hasRehydrationInfo(R)))for(const F of O)F(R,D,N);return U}},actions:f};function _(v){return e.api.endpoints[v.endpointName].initiate(v.originalArgs,{subscribe:!1,forceRefetch:!0})}}var vT=Symbol(),kD=({createSelector:e=Ei}={})=>({name:vT,init(t,{baseQuery:n,tagTypes:i,reducerPath:o,serializeQueryArgs:l,keepUnusedDataFor:u,refetchOnMountOrArgChange:f,refetchOnFocus:p,refetchOnReconnect:h,invalidationBehavior:y,onSchemaFailure:_,catchSchemaFailure:v,skipSchemaValidation:b},x){e$();const O=pe=>pe;Object.assign(t,{reducerPath:o,endpoints:{},internalActions:{onOnline:_b,onOffline:CD,onFocus:vb,onFocusLost:TD},util:{}});const C=I9({serializeQueryArgs:l,reducerPath:o,createSelector:e}),{selectInvalidatedBy:I,selectCachedArgsForQuery:M,buildQuerySelector:R,buildInfiniteQuerySelector:D,buildMutationSelector:N}=C;oi(t.util,{selectInvalidatedBy:I,selectCachedArgsForQuery:M});const{queryThunk:A,infiniteQueryThunk:P,mutationThunk:U,patchQueryData:F,updateQueryData:H,upsertQueryData:z,prefetch:G,buildMatchThunkActions:V}=R9({baseQuery:n,reducerPath:o,context:x,api:t,serializeQueryArgs:l,assertTagType:O,selectors:C,onSchemaFailure:_,catchSchemaFailure:v,skipSchemaValidation:b}),{reducer:te,actions:ue}=A9({context:x,queryThunk:A,mutationThunk:U,serializeQueryArgs:l,reducerPath:o,assertTagType:O,config:{refetchOnFocus:p,refetchOnReconnect:h,refetchOnMountOrArgChange:f,keepUnusedDataFor:u,reducerPath:o,invalidationBehavior:y}});oi(t.util,{patchQueryData:F,updateQueryData:H,upsertQueryData:z,prefetch:G,resetApiState:ue.resetApiState,upsertQueryEntries:ue.cacheEntriesUpserted}),oi(t.internalActions,ue);const j={currentSubscriptions:new Map,currentPolls:new Map,runningQueries:new Map,runningMutations:new Map},{buildInitiateQuery:K,buildInitiateInfiniteQuery:ne,buildInitiateMutation:ae,getRunningMutationThunk:k,getRunningMutationsThunk:X,getRunningQueriesThunk:le,getRunningQueryThunk:ie}=C9({queryThunk:A,mutationThunk:U,infiniteQueryThunk:P,api:t,serializeQueryArgs:l,context:x,internalState:j});oi(t.util,{getRunningMutationThunk:k,getRunningMutationsThunk:X,getRunningQueryThunk:ie,getRunningQueriesThunk:le});const{middleware:de,actions:me}=U9({reducerPath:o,context:x,queryThunk:A,mutationThunk:U,infiniteQueryThunk:P,api:t,assertTagType:O,selectors:C,getRunningQueryThunk:ie,internalState:j});return oi(t.util,me),oi(t,{reducer:te,middleware:de}),{name:vT,injectEndpoint(pe,Ie){const be=t,Oe=be.endpoints[pe]??={};dp(Ie)&&oi(Oe,{name:pe,select:R(pe,Ie),initiate:K(pe,Ie)},V(A,pe)),w9(Ie)&&oi(Oe,{name:pe,select:N(),initiate:ae(pe)},V(U,pe)),fp(Ie)&&oi(Oe,{name:pe,select:D(pe,Ie),initiate:ne(pe,Ie)},V(A,pe))}}}});kD();function df(e){return e.replace(e[0],e[0].toUpperCase())}function z9(e){return e.type==="query"}function B9(e){return e.type==="mutation"}function ND(e){return e.type==="infinitequery"}function yc(e,...t){return Object.assign(e,...t)}var gy=Symbol();function yy(e){const t=E.useRef(e),n=E.useMemo(()=>yb(t.current,e),[e]);return E.useEffect(()=>{t.current!==n&&(t.current=n)},[n]),n}function ff(e){const t=E.useRef(e);return E.useEffect(()=>{Cc(t.current,e)||(t.current=e)},[e]),Cc(t.current,e)?t.current:e}var H9=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",F9=H9(),q9=()=>typeof navigator<"u"&&navigator.product==="ReactNative",V9=q9(),G9=()=>F9||V9?E.useLayoutEffect:E.useEffect,W9=G9(),_T=e=>e.isUninitialized?{...e,isUninitialized:!1,isFetching:!0,isLoading:e.data===void 0,status:ED.pending}:e;function vy(e,...t){const n={};return t.forEach(i=>{n[i]=e[i]}),n}var _y=["data","status","isLoading","isSuccess","isError","error"];function Y9({api:e,moduleOptions:{batch:t,hooks:{useDispatch:n,useSelector:i,useStore:o},unstable__sideEffectsInRender:l,createSelector:u},serializeQueryArgs:f,context:p}){const h=l?D=>D():E.useEffect;return{buildQueryHooks:I,buildInfiniteQueryHooks:M,buildMutationHook:R,usePrefetch:v};function y(D,N,A){if(N?.endpointName&&D.isUninitialized){const{endpointName:G}=N,V=p.endpointDefinitions[G];A!==cr&&f({queryArgs:N.originalArgs,endpointDefinition:V,endpointName:G})===f({queryArgs:A,endpointDefinition:V,endpointName:G})&&(N=void 0)}let P=D.isSuccess?D.data:N?.data;P===void 0&&(P=D.data);const U=P!==void 0,F=D.isLoading,H=(!N||N.isLoading||N.isUninitialized)&&!U&&F,z=D.isSuccess||U&&(F&&!N?.isError||D.isUninitialized);return{...D,data:P,currentData:D.data,isFetching:F,isLoading:H,isSuccess:z}}function _(D,N,A){if(N?.endpointName&&D.isUninitialized){const{endpointName:G}=N,V=p.endpointDefinitions[G];A!==cr&&f({queryArgs:N.originalArgs,endpointDefinition:V,endpointName:G})===f({queryArgs:A,endpointDefinition:V,endpointName:G})&&(N=void 0)}let P=D.isSuccess?D.data:N?.data;P===void 0&&(P=D.data);const U=P!==void 0,F=D.isLoading,H=(!N||N.isLoading||N.isUninitialized)&&!U&&F,z=D.isSuccess||F&&U;return{...D,data:P,currentData:D.data,isFetching:F,isLoading:H,isSuccess:z}}function v(D,N){const A=n(),P=ff(N);return E.useCallback((U,F)=>A(e.util.prefetch(D,U,{...P,...F})),[D,A,P])}function b(D,N,{refetchOnReconnect:A,refetchOnFocus:P,refetchOnMountOrArgChange:U,skip:F=!1,pollingInterval:H=0,skipPollingIfUnfocused:z=!1,...G}={}){const{initiate:V}=e.endpoints[D],te=n(),ue=E.useRef(void 0);if(!ue.current){const me=te(e.internalActions.internal_getRTKQSubscriptions());ue.current=me}const j=yy(F?cr:N),K=ff({refetchOnReconnect:A,refetchOnFocus:P,pollingInterval:H,skipPollingIfUnfocused:z}),ne=G.initialPageParam,ae=ff(ne),k=E.useRef(void 0);let{queryCacheKey:X,requestId:le}=k.current||{},ie=!1;X&&le&&(ie=ue.current.isRequestSubscribed(X,le));const de=!ie&&k.current!==void 0;return h(()=>{de&&(k.current=void 0)},[de]),h(()=>{const me=k.current;if(j===cr){me?.unsubscribe(),k.current=void 0;return}const pe=k.current?.subscriptionOptions;if(!me||me.arg!==j){me?.unsubscribe();const Ie=te(V(j,{subscriptionOptions:K,forceRefetch:U,...ND(p.endpointDefinitions[D])?{initialPageParam:ae}:{}}));k.current=Ie}else K!==pe&&me.updateSubscriptionOptions(K)},[te,V,U,j,K,de,ae,D]),[k,te,V,K]}function x(D,N){return(P,{skip:U=!1,selectFromResult:F}={})=>{const{select:H}=e.endpoints[D],z=yy(U?cr:P),G=E.useRef(void 0),V=E.useMemo(()=>u([H(z),(ne,ae)=>ae,ne=>z],N,{memoizeOptions:{resultEqualityCheck:Cc}}),[H,z]),te=E.useMemo(()=>F?u([V],F,{devModeChecks:{identityFunctionCheck:"never"}}):V,[V,F]),ue=i(ne=>te(ne,G.current),Cc),j=o(),K=V(j.getState(),G.current);return W9(()=>{G.current=K},[K]),ue}}function O(D){E.useEffect(()=>()=>{D.current?.unsubscribe?.(),D.current=void 0},[D])}function C(D){if(!D.current)throw new Error(gr(38));return D.current.refetch()}function I(D){const N=(U,F={})=>{const[H]=b(D,U,F);return O(H),E.useMemo(()=>({refetch:()=>C(H)}),[H])},A=({refetchOnReconnect:U,refetchOnFocus:F,pollingInterval:H=0,skipPollingIfUnfocused:z=!1}={})=>{const{initiate:G}=e.endpoints[D],V=n(),[te,ue]=E.useState(gy),j=E.useRef(void 0),K=ff({refetchOnReconnect:U,refetchOnFocus:F,pollingInterval:H,skipPollingIfUnfocused:z});h(()=>{const X=j.current?.subscriptionOptions;K!==X&&j.current?.updateSubscriptionOptions(K)},[K]);const ne=E.useRef(K);h(()=>{ne.current=K},[K]);const ae=E.useCallback(function(X,le=!1){let ie;return t(()=>{j.current?.unsubscribe(),j.current=ie=V(G(X,{subscriptionOptions:ne.current,forceRefetch:!le})),ue(X)}),ie},[V,G]),k=E.useCallback(()=>{j.current?.queryCacheKey&&V(e.internalActions.removeQueryResult({queryCacheKey:j.current?.queryCacheKey}))},[V]);return E.useEffect(()=>()=>{j?.current?.unsubscribe()},[]),E.useEffect(()=>{te!==gy&&!j.current&&ae(te,!0)},[te,ae]),E.useMemo(()=>[ae,te,{reset:k}],[ae,te,k])},P=x(D,y);return{useQueryState:P,useQuerySubscription:N,useLazyQuerySubscription:A,useLazyQuery(U){const[F,H,{reset:z}]=A(U),G=P(H,{...U,skip:H===gy}),V=E.useMemo(()=>({lastArg:H}),[H]);return E.useMemo(()=>[F,{...G,reset:z},V],[F,G,z,V])},useQuery(U,F){const H=N(U,F),z=P(U,{selectFromResult:U===cr||F?.skip?void 0:_T,...F}),G=vy(z,..._y);return E.useDebugValue(G),E.useMemo(()=>({...z,...H}),[z,H])}}}function M(D){const N=(P,U={})=>{const[F,H,z,G]=b(D,P,U),V=E.useRef(G);h(()=>{V.current=G},[G]);const te=E.useCallback(function(K,ne){let ae;return t(()=>{F.current?.unsubscribe(),F.current=ae=H(z(K,{subscriptionOptions:V.current,direction:ne}))}),ae},[F,H,z]);O(F);const ue=yy(U.skip?cr:P),j=E.useCallback(()=>C(F),[F]);return E.useMemo(()=>({trigger:te,refetch:j,fetchNextPage:()=>te(ue,"forward"),fetchPreviousPage:()=>te(ue,"backward")}),[j,te,ue])},A=x(D,_);return{useInfiniteQueryState:A,useInfiniteQuerySubscription:N,useInfiniteQuery(P,U){const{refetch:F,fetchNextPage:H,fetchPreviousPage:z}=N(P,U),G=A(P,{selectFromResult:P===cr||U?.skip?void 0:_T,...U}),V=vy(G,..._y,"hasNextPage","hasPreviousPage");return E.useDebugValue(V),E.useMemo(()=>({...G,fetchNextPage:H,fetchPreviousPage:z,refetch:F}),[G,H,z,F])}}}function R(D){return({selectFromResult:N,fixedCacheKey:A}={})=>{const{select:P,initiate:U}=e.endpoints[D],F=n(),[H,z]=E.useState();E.useEffect(()=>()=>{H?.arg.fixedCacheKey||H?.reset()},[H]);const G=E.useCallback(function(X){const le=F(U(X,{fixedCacheKey:A}));return z(le),le},[F,U,A]),{requestId:V}=H||{},te=E.useMemo(()=>P({fixedCacheKey:A,requestId:H?.requestId}),[A,H,P]),ue=E.useMemo(()=>N?u([te],N):te,[N,te]),j=i(ue,Cc),K=A==null?H?.arg.originalArgs:void 0,ne=E.useCallback(()=>{t(()=>{H&&z(void 0),A&&F(e.internalActions.removeMutationResult({requestId:V,fixedCacheKey:A}))})},[F,A,H,V]),ae=vy(j,..._y,"endpointName");E.useDebugValue(ae);const k=E.useMemo(()=>({...j,originalArgs:K,reset:ne}),[j,K,ne]);return E.useMemo(()=>[G,k],[G,k])}}}var Q9=Symbol(),K9=({batch:e=jN,hooks:t={useDispatch:hC,useSelector:pC,useStore:fC},createSelector:n=Ei,unstable__sideEffectsInRender:i=!1,...o}={})=>({name:Q9,init(l,{serializeQueryArgs:u},f){const p=l,{buildQueryHooks:h,buildInfiniteQueryHooks:y,buildMutationHook:_,usePrefetch:v}=Y9({api:l,moduleOptions:{batch:e,hooks:t,unstable__sideEffectsInRender:i,createSelector:n},serializeQueryArgs:u,context:f});return yc(p,{usePrefetch:v}),yc(f,{batch:e}),{injectEndpoint(b,x){if(z9(x)){const{useQuery:O,useLazyQuery:C,useLazyQuerySubscription:I,useQueryState:M,useQuerySubscription:R}=h(b);yc(p.endpoints[b],{useQuery:O,useLazyQuery:C,useLazyQuerySubscription:I,useQueryState:M,useQuerySubscription:R}),l[`use${df(b)}Query`]=O,l[`useLazy${df(b)}Query`]=C}if(B9(x)){const O=_(b);yc(p.endpoints[b],{useMutation:O}),l[`use${df(b)}Mutation`]=O}else if(ND(x)){const{useInfiniteQuery:O,useInfiniteQuerySubscription:C,useInfiniteQueryState:I}=y(b);yc(p.endpoints[b],{useInfiniteQuery:O,useInfiniteQuerySubscription:C,useInfiniteQueryState:I}),l[`use${df(b)}InfiniteQuery`]=O}}}}}),X9=OD(kD(),K9());const MD=e=>({id:String(e.id),name:e.name,imageUrl:e.picture_url,display:!0}),Z9=e=>e.results.map(MD).sort((n,i)=>n.name.localeCompare(i.name)),LD=e=>{const t=e.image.original_height||48,n=e.image.original_width||48;return{id:String(e.id),name:e.name,iconUrl:e.image.url.replace("{height}",t).replace("{width}",n)}},J9=e=>e.results.map(LD).sort((n,i)=>n.name.localeCompare(i.name)),eF=e=>{const t=e.instructors[0],n=t?MD(t):{id:"0",name:"Unknown Instructor",imageUrl:"",display:!1},i=Ce.getBookableStatus(e),o=new Date(e.starts_at),u=(new Date(e.ends_at).getTime()-o.getTime())/1e3;return Number.isNaN(u)&&t_("Computed invalid duration",{extra:{rawClass:e}}),{...e,id:String(e.id),name:e.name,start:e.starts_at,end:e.ends_at,customerUrl:e.customer_url,duration:u,discipline:LD(e.offering_type.category),instructor:n,status:i}},tF=e=>e.results.map(eF),nF=["id","name","max_occupancy","occupancy","attending_count","starts_at","ends_at","waiting_count","active_registration_status","category.name","venue","customer_url","description"],rF=["instructors","active_registration_status","category","offering_type","offering_type.category","venue","suggested_booking_action"],kf=X9({reducerPath:"pelotonApi",baseQuery:x9({baseUrl:`${Ce.PELOTON_CORS_PROXY}/${Ce.PELOTON_API_BASE}/`}),endpoints:e=>({getClasses:e.query({queryFn:async t=>{try{const n=Ce.getPelotonHeaders(t),i=Ce.buildEventsUrl({fields:nF,expand:rF,corsProxy:!0}),o=await Ce.fetchAllPelotonPages(i,async l=>{const u=await fetch(l,{headers:n});if(!u.ok)throw new Error(`${u.status}: ${await u.text()}`);return u.json()},!0);return{data:tF({results:o})}}catch(n){return{error:{status:"FETCH_ERROR",error:String(n)}}}}}),getDisciplines:e.query({query:t=>({url:`offering_type_categories?${new URLSearchParams({sort:"name"})}`,method:"GET",headers:Ce.getPelotonHeaders(t)}),transformResponse:t=>J9(t)}),getInstructors:e.query({query:t=>({url:`instructors?${new URLSearchParams({sort:"name"})}`,method:"GET",headers:Ce.getPelotonHeaders(t)}),transformResponse:t=>Z9(t)})})}),{useGetClassesQuery:Sb,useGetDisciplinesQuery:xb,useGetInstructorsQuery:wb}=kf,iF=e=>{if("error"in e&&typeof e.error=="string")return e.error;if("message"in e&&typeof e.message=="string")return e.message},sF=T.label`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  cursor: pointer;
  user-select: none;
  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.$checked?`${e.theme.colors.accent}0a`:"transparent"};
  transition: background-color 0.15s;

  ${up}
`,oF=T.span`
  color: ${e=>e.theme.colors.main};
  font-size: 14px;
`,aF=T.input`
  accent-color: ${e=>e.theme.colors.accent};
`,PD=({value:e,checked:t,onChange:n,label:i,icon:o})=>{const l=E.useId();return g.jsxs(sF,{$checked:t,htmlFor:l,children:[g.jsx(aF,{type:"checkbox",id:l,value:e,checked:t,onChange:n}),o,g.jsx(oF,{children:i})]})},bT=T.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`,ST=T.legend`
  font-weight: 600;
  font-size: 18px;
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,xT=T.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  margin: 0 0 12px;
`,wT=T.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
`,hf=T.button`
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
`,jD=T.div`
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
`,ET=T.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
  margin-left: auto;
`,wh=T.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  padding: 24px;
  text-align: center;
`,$D=T.p`
  color: ${e=>e.theme.colors.error};
  font-size: 14px;
  padding: 16px;
`,UD=T.button`
  border: none;
  background: none;
  color: ${e=>e.theme.colors.accent};
  cursor: pointer;
  font-family: inherit;
  font-size: 14px;
  text-decoration: underline;
  padding: 0;
`,lF=T.div`
  margin-top: 32px;

  ${Te`
    margin-top: 24px;
  `}
`,cF=({studioId:e,selectedInstructors:t,setSelectedInstructors:n,selectedDisciplines:i,setSelectedDisciplines:o})=>{const l=wb(e),u=xb(e),f=E.useRef(t),p=E.useRef(i);E.useEffect(()=>{const b=f.current;if(!l.currentData||!Ce.isNotEmpty(b))return;const x=new Set(l.currentData.map(C=>C.id)),O=b.filter(C=>x.has(C));O.length<b.length&&(n(O),f.current=O)},[l.currentData,n]),E.useEffect(()=>{const b=p.current;if(!u.currentData||!Ce.isNotEmpty(b))return;const x=new Set(u.currentData.map(C=>String(C.id))),O=b.filter(C=>x.has(String(C))).map(String);O.length<b.length&&(o(O),p.current=O)},[u.currentData,o]);const h=E.useCallback(b=>{if(!Ce.isNotEmpty(t))return;const x=t.includes(b);n(x?t.filter(O=>O!==b):[...t,b])},[t,n]),y=E.useCallback(b=>{if(!Ce.isNotEmpty(i))return;const x=i.includes(b);o(x?i.filter(O=>O!==b):[...i,b])},[i,o]),_=Ce.isNotEmpty(t),v=Ce.isNotEmpty(i);return g.jsxs("div",{children:[g.jsxs(bT,{children:[g.jsx(ST,{children:"Instructors"}),g.jsx(xT,{children:"Filter by specific instructors or get alerts for all of them."}),g.jsxs(wT,{children:[g.jsx(hf,{type:"button",$active:!_,onClick:()=>n(null),children:"Any instructor"}),g.jsx(hf,{type:"button",$active:_,onClick:()=>{_||n([])},children:"Specific instructors"}),_&&t.length>0&&g.jsxs(ET,{children:[t.length," selected"]})]}),_&&g.jsx(uF,{query:l,selectedIds:t,onToggle:h})]}),g.jsx(lF,{}),g.jsxs(bT,{children:[g.jsx(ST,{children:"Disciplines"}),g.jsx(xT,{children:"Filter by class type or get alerts for everything."}),g.jsxs(wT,{children:[g.jsx(hf,{type:"button",$active:!v,onClick:()=>o(null),children:"Any discipline"}),g.jsx(hf,{type:"button",$active:v,onClick:()=>{v||o([])},children:"Specific disciplines"}),v&&i.length>0&&g.jsxs(ET,{children:[i.length," selected"]})]}),v&&g.jsx(dF,{query:u,selectedIds:i,onToggle:y})]})]})},uF=E.memo(({query:e,selectedIds:t,onToggle:n})=>e.isLoading?g.jsx(wh,{children:"Loading instructors…"}):e.error?g.jsxs($D,{children:["Couldn't load instructors."," ",g.jsx(UD,{type:"button",onClick:e.refetch,children:"Try again"})]}):!e.currentData||e.currentData.length===0?g.jsx(wh,{children:"No instructors found for this studio."}):g.jsx(jD,{role:"group","aria-label":"Instructors",children:e.currentData.map(i=>g.jsx(PD,{value:i.id,checked:t.includes(i.id),onChange:()=>n(i.id),label:i.name,icon:g.jsx(gb,{instructor:i,size:28})},i.id))})),dF=E.memo(({query:e,selectedIds:t,onToggle:n})=>e.isLoading?g.jsx(wh,{children:"Loading disciplines…"}):e.error?g.jsxs($D,{children:["Couldn't load disciplines."," ",g.jsx(UD,{type:"button",onClick:e.refetch,children:"Try again"})]}):!e.currentData||e.currentData.length===0?g.jsx(wh,{children:"No disciplines found for this studio."}):g.jsx(jD,{role:"group","aria-label":"Disciplines",children:e.currentData.map(i=>g.jsx(PD,{value:i.id,checked:t.includes(i.id),onChange:()=>n(i.id),label:i.name,icon:g.jsx(bh,{discipline:i,size:24})},i.id))})),fF=T.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 16px;
  margin-bottom: 24px;

  ${Te`
    padding: 0;
    margin-bottom: 12px;
  `}
`,hF=T.button`
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
`,pF=T.div`
  flex: 1;
  height: 2px;
  background-color: ${e=>e.$filled?e.theme.colors.accent:e.theme.borderColor};
  transition: background-color 0.2s;
`,mF=T.span`
  position: absolute;
  top: 18px;
  font-size: 10px;
  white-space: nowrap;
  color: ${e=>e.$state==="active"?e.theme.colors.main:e.theme.colors.secondary};
  font-weight: ${e=>e.$state==="active"?600:400};

  ${Te`
    display: none;
  `}
`,gF=T.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`,yF=({steps:e,currentStep:t,onStepClick:n})=>g.jsx(fF,{role:"navigation","aria-label":"Editor steps",children:e.map((i,o)=>{const l=o<t?"completed":o===t?"active":"upcoming";return g.jsxs(gF,{style:{flex:o<e.length-1?1:0},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",width:"100%"},children:[g.jsx(hF,{$state:l,onClick:()=>{l!=="upcoming"&&n(o)},"aria-label":`Step ${o+1}: ${i}`,"aria-current":l==="active"?"step":void 0,type:"button"}),o<e.length-1&&g.jsx(pF,{$filled:o<t})]}),g.jsx(mF,{$state:l,children:i})]},o)})}),ls=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Eh=new Array(48).fill(null).map((e,t)=>{const n=t*30,i=new Date;i.setHours(Math.floor(n/60)),i.setMinutes(n%60);const o=new Intl.DateTimeFormat(void 0,{hour:"numeric",minute:"numeric"});return{minutes:n,label:o.format(i)}}),vF=T.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`,_F=T.legend`
  font-weight: 600;
  font-size: 18px;
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,bF=T.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  margin: 0 0 20px;
`,SF=T.div`
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  overflow: hidden;
`,Zi=T.div`
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
`,Ji=T.span`
  font-size: 13px;
  font-weight: 500;
  color: ${e=>e.theme.colors.secondary};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  flex-shrink: 0;
`,ai=T.span`
  font-size: 14px;
  color: ${e=>e.theme.colors.main};
  text-align: right;
  word-break: break-word;

  ${Te`
    text-align: left;
  `}
`,xF=T.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  justify-content: flex-end;

  ${Te`
    justify-content: flex-start;
  `}
`,wF=T.span`
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  background-color: ${e=>e.theme.colors.secondarySurface};
  color: ${e=>e.theme.colors.main};
`,EF=e=>{if(Ce.isAllDay(e))return"All day";const t=Eh.find(i=>i.minutes===e.startMin),n=Eh.find(i=>i.minutes===e.endMin);return!t||!n?"All day":`${t.label} – ${n.label}`},TF=e=>{switch(e){case"free":return"Open spots only";case"waitlist":return"Open spots or waitlist";case"full":return"Any status"}},CF=({name:e,studioId:t,maxStatus:n,selectedInstructors:i,selectedDisciplines:o,timeRanges:l,waitlistAlerts:u,watchedClassIds:f})=>{const p=Ce.STUDIOS[t],h=ls.filter((v,b)=>l[b]),y=l.find(Boolean),_=l.filter(Boolean).every(v=>v&&y&&v.startMin===y.startMin&&v.endMin===y.endMin);return g.jsxs(vF,{children:[g.jsx(_F,{children:"Review your alert"}),g.jsx(bF,{children:"Double-check everything looks right, then hit Save."}),g.jsxs(SF,{children:[e.trim()&&g.jsxs(Zi,{children:[g.jsx(Ji,{children:"Name"}),g.jsx(ai,{children:e.trim()})]}),g.jsxs(Zi,{children:[g.jsx(Ji,{children:"Studio"}),g.jsx(ai,{children:p?.location||t})]}),g.jsxs(Zi,{children:[g.jsx(Ji,{children:"Alert on"}),g.jsx(ai,{children:TF(n)})]}),g.jsxs(Zi,{children:[g.jsx(Ji,{children:"Instructors"}),g.jsx(ai,{children:i===null?"Any instructor":i.length===0?"None selected":`${i.length} selected`})]}),g.jsxs(Zi,{children:[g.jsx(Ji,{children:"Disciplines"}),g.jsx(ai,{children:o===null?"Any discipline":o.length===0?"None selected":`${o.length} selected`})]}),g.jsxs(Zi,{children:[g.jsx(Ji,{children:"Days"}),h.length===0?g.jsx(ai,{children:"No days selected"}):h.length===7?g.jsx(ai,{children:"Every day"}):g.jsx(xF,{children:h.map(v=>g.jsx(wF,{children:v.slice(0,3)},v))})]}),y&&g.jsxs(Zi,{children:[g.jsx(Ji,{children:"Time window"}),g.jsx(ai,{children:_?EF(y):"Varies by day"})]}),g.jsxs(Zi,{children:[g.jsx(Ji,{children:"Waitlist alerts"}),g.jsx(ai,{children:u?f===null?"On — any matching class":f.length===0?"On — no classes selected":`On — ${f.length} ${f.length===1?"class":"classes"} selected`:"Off"})]})]})]})},RF=T.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`,AF=T.legend`
  font-weight: 600;
  font-size: 18px;
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,IF=T.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  margin: 0 0 16px;
`,DF=T.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,OF=T.div`
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
`,kF=T.label`
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
`,NF=T.input`
  accent-color: ${e=>e.theme.colors.accent};
`,MF=T.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: auto;

  ${Te`
    margin-left: 28px;
    width: calc(100% - 28px);
  `}
`,LF=T.label`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
`,PF=T.input`
  accent-color: ${e=>e.theme.colors.accent};
`,TT=T.select`
  ${$r}
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
`,jF=T.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,$F=T.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  flex-wrap: wrap;
`,by=T.button`
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
`,UF=({timeRanges:e,setTimeRanges:t})=>{const n=e.filter(Boolean).length,i=E.useRef(ls.map(()=>{})),o=E.useCallback(y=>{const _=[...e];_[y]=_[y]?null:Ce.DEFAULT_TIME_RANGE,t(_)},[e,t]),l=E.useCallback(y=>{const _=e[y];if(!_)return;const v=[...e];Ce.isAllDay(_)?v[y]=i.current[y]??Ce.SPECIFIC_DEFAULT_TIME_RANGE:(i.current[y]=_,v[y]=Ce.ALL_DAY_TIME_RANGE),t(v)},[e,t]),u=E.useCallback((y,_,v)=>{const b=[...e],x=b[y];x&&(_==="startMin"?b[y]={startMin:v,endMin:x.endMin===0||x.endMin>=v?x.endMin:0}:b[y]={...x,endMin:v},t(b))},[e,t]),f=E.useCallback(()=>{t(ls.map(()=>Ce.DEFAULT_TIME_RANGE))},[t]),p=E.useCallback(()=>{t(ls.map(()=>null))},[t]),h=E.useCallback(()=>{const y=e.find(Boolean);y&&t(e.map(_=>_?{...y}:null))},[e,t]);return g.jsxs(RF,{children:[g.jsx(AF,{children:"Days & times"}),g.jsx(IF,{children:"Choose which days and time windows to monitor. Alerts fire when a matching class falls within these windows (in the studio's timezone)."}),g.jsxs($F,{children:[g.jsx(by,{type:"button",onClick:f,children:"Select all days"}),n>0&&g.jsx(by,{type:"button",onClick:p,children:"Clear all"}),n>1&&g.jsx(by,{type:"button",onClick:h,children:"Copy time to all"})]}),g.jsx(DF,{children:ls.map((y,_)=>{const v=e[_],b=!!v&&Ce.isAllDay(v);return g.jsxs(OF,{$enabled:!!v,children:[g.jsxs(kF,{htmlFor:`day-${_}`,children:[g.jsx(NF,{type:"checkbox",id:`day-${_}`,checked:!!v,onChange:()=>o(_)}),y]}),v&&g.jsxs(MF,{children:[g.jsxs(LF,{htmlFor:`allday-${_}`,children:[g.jsx(PF,{type:"checkbox",id:`allday-${_}`,checked:b,onChange:()=>l(_)}),"All day"]}),!b&&g.jsxs(g.Fragment,{children:[g.jsx(TT,{value:v.startMin,"aria-label":`${y} start time`,onChange:({target:x})=>{const O=parseInt(x.value);Number.isNaN(O)||u(_,"startMin",O)},children:Eh.map(x=>g.jsx("option",{value:x.minutes,children:x.label},x.minutes))}),g.jsx(jF,{children:"to"}),g.jsx(TT,{value:v.endMin,"aria-label":`${y} end time`,onChange:({target:x})=>{const O=parseInt(x.value);Number.isNaN(O)||u(_,"endMin",O)},children:Eh.map(x=>g.jsx("option",{value:x.minutes,disabled:x.minutes>0&&x.minutes<v.startMin,children:x.label},x.minutes))})]})]})]},y)})})]})},CT=T.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`,RT=T.legend`
  font-weight: 600;
  font-size: 18px;
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,AT=T.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  margin: 0 0 16px;
`,zF=T.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,BF=T.div`
  margin-top: 32px;

  ${Te`
    margin-top: 24px;
  `}
`,HF=T.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
`,IT=T.button`
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
`,FF=T.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  max-height: 360px;
  overflow-y: auto;
  padding: 4px;
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};

  ${Te`
    max-height: 280px;
  `}
`,qF=T.label`
  ${$r}
  ${up}
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
`,VF=T.input`
  accent-color: ${e=>e.theme.colors.accent};
  margin-top: 2px;
  flex-shrink: 0;
`,GF=T.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,WF=T.span`
  font-size: 13px;
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
`,YF=T.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,QF=T.span`
  font-size: 11px;
  font-weight: 500;
  padding: 1px 6px;
  border-radius: 4px;
  margin-left: auto;
  flex-shrink: 0;
  align-self: flex-start;
  background-color: ${e=>e.$status==="free"?`${e.theme.colors.accent}18`:e.$status==="waitlist"?"#f59e0b18":`${e.theme.colors.secondarySurface}`};
  color: ${e=>e.$status==="free"?e.theme.colors.accent:e.$status==="waitlist"?"#b45309":e.theme.colors.secondary};
`,Sy=T.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  padding: 20px;
  text-align: center;
  margin: 0;
`,KF=T.button`
  border: none;
  background: none;
  color: ${e=>e.theme.colors.accent};
  cursor: pointer;
  font-family: inherit;
  font-size: 14px;
  text-decoration: underline;
  padding: 0;
`,XF=T.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
  margin-left: auto;
`;function ZF(e,t){try{const n=new Date(e),i=new Date(n.toLocaleString("en-US",{timeZone:"UTC"})),o=new Date(n.toLocaleString("en-US",{timeZone:t})),l=i.getTime()-o.getTime();return n.setTime(n.getTime()-l),{day:n.getDay(),minute:n.getHours()*60+n.getMinutes()}}catch{return null}}function JF(e,t){try{return new Date(e).toLocaleString("en-US",{timeZone:t,weekday:"short",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}catch{return e}}function e7(e,t,n,i,o){const l=Ce.STUDIOS[o]?.timezone,u=Date.now();return e.filter(f=>{if(new Date(f.start).getTime()<=u||t!==null&&!t.includes(f.instructor.id)||n!==null&&!n.includes(f.discipline.id))return!1;if(i&&l){const p=ZF(f.start,l);if(!p)return!1;const h=i[p.day];if(!h||p.minute<h.startMin||p.minute>h.endMin)return!1}return!0})}const t7=E.memo(({studioId:e,instructors:t,disciplines:n,timeRanges:i,selectedIds:o,onToggle:l})=>{const u=Sb(e),f=Ce.STUDIOS[e]?.timezone??"UTC";if(u.isLoading)return g.jsx(Sy,{children:"Loading classes…"});if(u.error)return g.jsxs(Sy,{children:["Couldn't load classes."," ",g.jsx(KF,{type:"button",onClick:u.refetch,children:"Try again"})]});const p=e7(u.currentData??[],t,n,i,e);return p.length===0?g.jsx(Sy,{children:"No upcoming classes match your filters."}):g.jsx(FF,{role:"group","aria-label":"Classes",children:p.map(h=>{const y=o.includes(h.id),_=JF(h.start,f),v=[h.instructor.name,h.discipline.name].filter(Boolean).join(" · "),b=h.status==="free"?"Open":h.status==="waitlist"?"Waitlist":"Full";return g.jsxs(qF,{$checked:y,htmlFor:`cls-${h.id}`,children:[g.jsx(VF,{type:"checkbox",id:`cls-${h.id}`,checked:y,onChange:()=>l(h.id)}),g.jsxs(GF,{children:[g.jsx(WF,{children:_}),v&&g.jsx(YF,{children:v})]}),g.jsx(QF,{$status:h.status,children:b})]},h.id)})})}),n7=({studioId:e,waitlistAlerts:t,onWaitlistAlertsChange:n,watchedClassIds:i,onWatchedClassIdsChange:o,selectedInstructors:l,selectedDisciplines:u,timeRanges:f})=>{const p=_=>{const v=i??[];o(v.includes(_)?v.filter(b=>b!==_):[...v,_])},h=i!==null,y=i?.length??0;return g.jsxs("div",{children:[g.jsxs(CT,{children:[g.jsx(RT,{children:"Waitlist position alerts"}),g.jsx(AT,{children:"Get a push notification whenever the waitlist count changes for a matching class. Tap the notification to open a prompt reminding you to check your email for the 2-hour acceptance window."}),g.jsxs(zF,{children:[g.jsx(vh,{name:"waitlistAlerts",value:"off",checked:!t,onChange:()=>n(!1),label:"Disabled",hint:"No waitlist count notifications"}),g.jsx(vh,{name:"waitlistAlerts",value:"on",checked:t,onChange:()=>n(!0),label:"Enabled",hint:"Notify me when the waitlist count changes"})]})]}),t&&g.jsxs(g.Fragment,{children:[g.jsx(BF,{}),g.jsxs(CT,{children:[g.jsx(RT,{children:"Which classes?"}),g.jsx(AT,{children:"Notify for any class matching your filters, or pick specific ones you've already joined the waitlist for."}),g.jsxs(HF,{children:[g.jsx(IT,{type:"button",$active:!h,onClick:()=>o(null),children:"Any matching class"}),g.jsx(IT,{type:"button",$active:h,onClick:()=>{h||o([])},children:"Specific classes"}),h&&y>0&&g.jsxs(XF,{children:[y," selected"]})]}),h&&g.jsx(t7,{studioId:e,instructors:l,disciplines:u,timeRanges:f,selectedIds:i,onToggle:p})]})]})]})},Do=Ei([e=>e.studioSelector],e=>e.studioId),r7=e=>{const t=Mn(),n=et(Do);E.useEffect(()=>{e.studioId?t(yh(e.studioId)):t(yh(SD(Ce.DEFAULT_STUDIO_ID)))},[e.studioId,t]);const[i,o]=E.useState(e.name||""),[l,u]=E.useState(e.instructors||null),[f,p]=E.useState(e.disciplines||null),[h,y]=E.useState(()=>e.timeRanges||ls.map(()=>Ce.DEFAULT_TIME_RANGE)),[_,v]=E.useState(e.maxStatus||"free"),[b,x]=E.useState(e.waitlistAlerts??!1),[O,C]=E.useState(e.watchedClassIds??null),I=E.useRef(e.studioId);return E.useEffect(()=>{n&&I.current&&n!==I.current&&(u(M=>M&&[]),p(M=>M&&[])),I.current=n},[n]),{selectedStudioId:n,name:i,setName:o,selectedInstructors:l,setSelectedInstructors:u,selectedDisciplines:f,setSelectedDisciplines:p,timeRanges:h,setTimeRanges:y,maxStatus:_,setMaxStatus:v,waitlistAlerts:b,setWaitlistAlerts:x,watchedClassIds:O,setWatchedClassIds:C}},xy=["Basics","Filters","Schedule","Waitlist","Review"],i7=T.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
`,s7=T.div`
  padding: 24px 24px 0;

  ${Te`
    padding: 16px 16px 0;
  `}
`,o7=T.h2`
  margin: 0 0 4px;
  font-size: 22px;
  color: ${e=>e.theme.colors.main};
`,a7=T.p`
  margin: 0 0 20px;
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
`,l7=T.div`
  padding: 8px 24px 24px;
  flex: 1;
  overflow-y: auto;

  ${Te`
    padding: 8px 16px 16px;
  `}
`,c7=T.div`
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
`,vc=T.button`
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
`,u7=T.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,d7=T.span`
  font-size: 13px;
  color: ${e=>e.$error?e.theme.colors.error:e.theme.colors.secondary};

  ${Te`
    font-size: 12px;
  `}
`,f7=({alertToEdit:e,onSave:t,onCancel:n})=>{const i=Mn(),o=et(_u),[l,u]=E.useState(0),[f,p]=E.useState(!1),[h,y]=E.useState(),{selectedStudioId:_,name:v,setName:b,selectedInstructors:x,setSelectedInstructors:O,selectedDisciplines:C,setSelectedDisciplines:I,timeRanges:M,setTimeRanges:R,maxStatus:D,setMaxStatus:N,waitlistAlerts:A,setWaitlistAlerts:P,watchedClassIds:U,setWatchedClassIds:F}=r7(e),H=l<xy.length-1,z=l>0,G=l===xy.length-1,V=E.useCallback(()=>{H&&u(K=>K+1)},[H]),te=E.useCallback(()=>{z&&u(K=>K-1)},[z]),ue=E.useCallback(async()=>{if(!_||!o)return;p(!0),y(void 0);const K={id:e.id||null,created:e.created||new Date().getTime(),...v.trim()?{name:v.trim()}:{},studioId:_,instructors:x,disciplines:C,timeRanges:M,maxStatus:D,waitlistAlerts:A,...A&&U!==null?{watchedClassIds:U}:{}};try{K.id?await xD(o,K):await YH(o,K),t()}catch(ne){Nr(ne),y("Something went wrong. Please try again."),p(!1)}},[e.id,e.created,v,_,o,x,C,M,D,A,U,t]),j=!!e.id;return g.jsxs(i7,{children:[g.jsxs(s7,{children:[g.jsx(o7,{children:j?"Edit alert":"New alert"}),g.jsx(a7,{children:j?"Update your alert settings below.":"Set up a new alert in a few quick steps."}),g.jsx(yF,{steps:xy,currentStep:l,onStepClick:u})]}),g.jsxs(l7,{children:[l===0&&g.jsx(a9,{name:v,onNameChange:b,studioId:_,onStudioChange:K=>i(yh(K)),maxStatus:D,onStatusChange:N}),l===1&&g.jsx(cF,{studioId:_,selectedInstructors:x,setSelectedInstructors:O,selectedDisciplines:C,setSelectedDisciplines:I}),l===2&&g.jsx(UF,{timeRanges:M,setTimeRanges:R}),l===3&&g.jsx(n7,{studioId:_,waitlistAlerts:A,onWaitlistAlertsChange:P,watchedClassIds:U,onWatchedClassIdsChange:F,selectedInstructors:x,selectedDisciplines:C,timeRanges:M}),l===4&&g.jsx(CF,{name:v,studioId:_,maxStatus:D,selectedInstructors:x,selectedDisciplines:C,timeRanges:M,waitlistAlerts:A,watchedClassIds:U})]}),g.jsxs(c7,{children:[g.jsx("div",{children:z?g.jsx(vc,{type:"button",onClick:te,children:"Back"}):g.jsx(vc,{type:"button",onClick:n,children:"Cancel"})}),g.jsxs(u7,{children:[h&&g.jsx(d7,{$error:!0,children:h}),G?g.jsx(vc,{type:"button",$primary:!0,onClick:ue,disabled:f,children:f?"Saving…":"Save alert"}):g.jsxs(g.Fragment,{children:[j&&g.jsx(vc,{type:"button",onClick:ue,disabled:f,children:f?"Saving…":"Save"}),g.jsx(vc,{type:"button",$primary:!0,onClick:V,children:"Continue"})]})]})]})]})},h7=()=>{const e=Pr(),t=ws(),n=e.state||{};return g.jsx(f7,{alertToEdit:n,onSave:()=>{t(nt.ALERTS)},onCancel:()=>{t(nt.ALERTS)}})},p7={userId:null,data:{state:"idle"}},zD=Xn({name:"alerts",initialState:p7,reducers:{setAlertsLoading(e,t){return{userId:t.payload,data:{state:"loading"}}},setAlertsData(e,t){return{userId:t.payload.userId,data:{state:"fulfilled",data:t.payload.data}}},setAlertsFailed(e,t){return{userId:t.payload.userId,data:{state:"failed",error:t.payload.error}}}}}),{setAlertsLoading:m7,setAlertsData:DT,setAlertsFailed:OT}=zD.actions,g7=zD.reducer,y7={userId:null,data:{state:"idle"}},BD=Xn({name:"alertPreferences",initialState:y7,reducers:{setAlertPreferencesLoading(e,t){return{userId:t.payload,data:{state:"loading"}}},setAlertPreferencesData(e,t){return{userId:t.payload.userId,data:{state:"fulfilled",data:t.payload.data}}},setAlertPreferencesFailed(e,t){return{userId:t.payload.userId,data:{state:"failed",error:t.payload.error}}}}}),{setAlertPreferencesLoading:v7,setAlertPreferencesData:_7,setAlertPreferencesFailed:kT}=BD.actions,b7=BD.reducer,Eb=e=>{try{return window.localStorage.getItem(e)}catch(t){return Nr(t),null}},Tb=(e,t)=>{try{window.localStorage.setItem(e,t)}catch(n){Nr(n)}},HD=e=>{try{window.localStorage.removeItem(e)}catch(t){Nr(t)}},FD="BOOKABLE_STATUS_FILTERS",Dv="DISCIPLINE_FILTERS",Ov="INSTRUCTOR_FILTERS",S7=e=>{const t=Eb(FD);return t===null?e:t.split(";").filter(Ce.isBookableStatus)},x7=e=>{Tb(FD,e.join(";"))},w7=e=>{const t=Eb(Dv);return t===null?e:t.split(";").filter(Boolean)},wy=e=>{e.length===0?HD(Dv):Tb(Dv,e.join(";"))},E7=e=>{const t=Eb(Ov);return t===null?e:t.split(";").filter(Boolean)},NT=e=>{e.length===0?HD(Ov):Tb(Ov,e.join(";"))},T7={selectedBookableStatuses:S7(["free","waitlist"]),selectedInstructors:E7([]),selectedDisciplines:w7([])},qD=Xn({name:"filters",initialState:T7,reducers:{toggleBookableStatus(e,t){e.selectedBookableStatuses.includes(t.payload)?e.selectedBookableStatuses=e.selectedBookableStatuses.filter(n=>n!==t.payload):e.selectedBookableStatuses=[...e.selectedBookableStatuses,t.payload],x7(e.selectedBookableStatuses)},toggleInstructor(e,t){e.selectedInstructors.includes(t.payload)?e.selectedInstructors=e.selectedInstructors.filter(n=>n!==t.payload):e.selectedInstructors=[...e.selectedInstructors,t.payload],NT(e.selectedInstructors)},resetInstructors(e){e.selectedInstructors=[],NT(e.selectedInstructors)},toggleDiscipline(e,t){e.selectedDisciplines.includes(t.payload)?e.selectedDisciplines=e.selectedDisciplines.filter(n=>n!==t.payload):e.selectedDisciplines=[...e.selectedDisciplines,t.payload],wy(e.selectedDisciplines)},setDisciplines(e,t){e.selectedDisciplines=t.payload,wy(e.selectedDisciplines)},resetDisciplines(e){e.selectedDisciplines=[],wy(e.selectedDisciplines)}}}),{toggleBookableStatus:C7,toggleInstructor:R7,resetInstructors:A7,toggleDiscipline:I7,setDisciplines:D7,resetDisciplines:O7}=qD.actions,k7=qD.reducer,N7={userId:null,data:{state:"idle"}},VD=Xn({name:"registeredDevices",initialState:N7,reducers:{setRegisteredDevicesLoading(e,t){return{userId:t.payload,data:{state:"loading"}}},setRegisteredDevicesData(e,t){return{userId:t.payload.userId,data:{state:"fulfilled",data:t.payload.data}}},setRegisteredDevicesFailed(e,t){return{userId:t.payload.userId,data:{state:"failed",error:t.payload.error}}}}}),{setRegisteredDevicesLoading:M7,setRegisteredDevicesData:L7,setRegisteredDevicesFailed:MT}=VD.actions,P7=VD.reducer,j7={state:"idle"},GD=Xn({name:"session",initialState:j7,reducers:{setLoading(e){return{state:"loading"}},setSession(e,t){return{state:"fulfilled",data:t.payload}},removeSession(e){return{state:"fulfilled",data:null}}}}),{setLoading:LT,setSession:$7,removeSession:PT}=GD.actions,U7=GD.reducer,hp=_$({reducer:{alerts:g7,alertPreferences:b7,filters:k7,registeredDevices:P7,session:U7,[kf.reducerPath]:kf.reducer,[Ev.name]:Ev.reducer},middleware:e=>e().concat(kf.middleware)}),WD=E.createContext({state:"idle"}),z7=({children:e,userId:t})=>{const n=Mn(),i=et(l=>l.registeredDevices);E.useEffect(()=>{const l=ln;if(!l)return n(MT({userId:t,error:{message:"No database set up"}})),()=>{};const u=hp.getState().registeredDevices;(u.userId!==t||u.data.state!=="fulfilled")&&n(M7(t));const f=Ln(l,`messagingTokens/${t}`),p=Ru(f,h=>{const y=h.val();n(L7({userId:t,data:y||{}}))},h=>{n(MT({userId:t,error:{message:h.message}}))});return()=>p()},[t,n]);const o=i.userId===t?i.data:{state:"loading"};return g.jsx(WD.Provider,{value:o,children:e})},YD=E.createContext({state:"idle"}),B7=({children:e,userId:t})=>{const n=Mn(),i=et(l=>l.alertPreferences);E.useEffect(()=>{const l=ln;if(!l)return n(kT({userId:t,error:{message:"No database set up"}})),()=>{};const u=hp.getState().alertPreferences;(u.userId!==t||u.data.state!=="fulfilled")&&n(v7(t));const f=Ln(l,Ce.PATHS.alertPreferences(t)),p=Ru(f,h=>{const y=h.val();n(_7({userId:t,data:y||{}}))},h=>{n(kT({userId:t,error:{message:h.message}}))});return()=>p()},[t,n]);const o=i.userId===t?i.data:{state:"loading"};return g.jsx(YD.Provider,{value:o,children:e})},H7=({children:e,userId:t})=>{const n=Mn(),i=et(l=>l.alerts);E.useEffect(()=>{const l=ln;if(!l)return n(OT({userId:t,error:{message:"No database set up"}})),()=>{};const u=hp.getState().alerts;(u.userId!==t||u.data.state!=="fulfilled")&&n(m7(t));const f=Ln(l,Ce.PATHS.alerts(t)),p=Ru(f,h=>{const y=h.val();if(!y){n(DT({userId:t,data:[]}));return}const _=Object.entries(y).map(([v,b])=>({...b,timeRanges:new Array(ls.length).fill(null).map((x,O)=>b.timeRanges[O]||null),id:v}));n(DT({userId:t,data:_}))},h=>{n(OT({userId:t,error:{message:h.message}}))});return()=>p()},[t,n]);const o=i.userId===t?i.data:{state:"loading"};return g.jsx(mb.Provider,{value:o,children:e})},F7=T.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 16px;

  ${Te`
    padding: 8px;
  `}
`,q7=T.div`
  overflow: auto;
  height: 100%;
`,V7=T.div`
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
`,G7=T.div`
  font-size: 36px;
  margin-bottom: 16px;
  line-height: 1;
`,W7=T.h1`
  font-size: 20px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
  margin: 0 0 10px;
`,Y7=T.p`
  font-size: 15px;
  color: ${e=>e.theme.colors.secondary};
  line-height: 1.55;
  margin: 0 0 24px;
`,Q7=T(Es)`
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
`,K7=T.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
  padding: 32px 0;
  margin: 0;
`,X7=({children:e})=>{const t=et(el);return t.state==="loading"?g.jsx(K7,{children:"Loading…"}):t.state!=="fulfilled"||!t.data?g.jsxs(V7,{children:[g.jsx(G7,{children:"🔔"}),g.jsx(W7,{children:"Sign in to use Alerts"}),g.jsx(Y7,{children:"Track class availability and get push notifications when a spot opens up for the classes you care about."}),g.jsx(Q7,{to:nt.SIGN_IN,children:"Sign in"})]}):e(t.data.id)},Z7=e=>g.jsx(hs,{children:g.jsx(q7,{children:g.jsx(F7,{children:g.jsx(X7,{...e})})})}),J7=({userId:e})=>g.jsx(H7,{userId:e,children:g.jsx(B7,{userId:e,children:g.jsx(z7,{userId:e,children:g.jsx(p2,{})})})}),eq=()=>g.jsx(Z7,{children:e=>g.jsx(J7,{userId:e})}),jT=async(e,t)=>{const n=ln;if(!n)throw new Error("No Firebase database connection to use");await NI(Ln(n,Ce.PATHS.alertPreferences(e)),t)},tq=T.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`,nq=T.div`
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
`,rq=T.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: 2px;
  left: ${e=>e.$checked?"20px":"2px"};
  transition: left 0.2s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
`,iq=T.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  position: relative;
`,QD=({id:e,checked:t,onChange:n,label:i,"aria-label":o})=>g.jsxs(iq,{htmlFor:e,children:[g.jsx(tq,{id:e,type:"checkbox",checked:t,"aria-label":o??i,onChange:l=>n(l.target.checked)}),g.jsx(nq,{$checked:t,children:g.jsx(rq,{$checked:t})}),i&&g.jsx("span",{children:i})]}),sq=T.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,oq=T.div`
  display: flex;
  align-items: center;
  gap: 12px;

  ${Te`
    flex-direction: column;
    align-items: stretch;
  `}
`,aq=T.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,lq=T.label`
  font-size: 13px;
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
`,cq=T.input`
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

  ${Te`
    width: 100%;
  `}
`,uq=T.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,dq=T.button`
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
`,fq=T.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
  padding: 16px;
`,hq=T.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.error};
  text-align: center;
  padding: 16px;
`,pq=T.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${e=>e.theme.borderColor};
  margin-bottom: 4px;
`,mq=T.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,gq=T.span`
  font-size: 13px;
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
`,yq=T.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,vq=({alertPreferences:e})=>{const t=et(_u),[n,i]=E.useState(e.notificationDelayMin||5),[o,l]=E.useState(!1),[u,f]=E.useState(!1),p=!!e.pauseAll,h=E.useCallback(async _=>{if(_.preventDefault(),!!t){l(!0),f(!1);try{await jT(t,{lastUpdated:new Date().getTime(),notificationDelayMin:n}),f(!0),setTimeout(()=>f(!1),2e3)}catch{}finally{l(!1)}}},[t,n]),y=E.useCallback(async _=>{t&&await jT(t,{pauseAll:!_})},[t]);return g.jsxs(g.Fragment,{children:[g.jsxs(pq,{children:[g.jsxs(mq,{children:[g.jsx(gq,{children:"Enable all notifications"}),g.jsx(yq,{children:"Globally pause or resume notifications for all alerts"})]}),g.jsx(QD,{id:"pause-all-toggle",checked:!p,onChange:y,"aria-label":p?"Resume all notifications":"Pause all notifications"})]}),g.jsxs(sq,{onSubmit:h,children:[g.jsxs(aq,{children:[g.jsx(lq,{htmlFor:"delay-input",children:"Cooldown (minutes)"}),g.jsx(uq,{children:"Minimum delay between consecutive alert notifications"})]}),g.jsxs(oq,{children:[g.jsx(cq,{id:"delay-input",type:"number",min:0,value:n,onChange:_=>{const v=parseInt(_.target.value,10);Number.isNaN(v)||i(v)}}),g.jsx(dq,{type:"submit",disabled:o,$saved:u,children:o?"Saving…":u?"Saved ✓":"Save"})]})]})]})},_q=()=>{const e=E.useContext(YD);return e.state==="idle"||e.state==="loading"?g.jsx(fq,{children:"Loading preferences…"}):e.state==="failed"?g.jsx(hq,{children:"Failed to load preferences."}):g.jsx(vq,{alertPreferences:e.data},e.data.lastUpdated)},bq=e=>{if(!e)return"Unknown device";const t=Sq(e),n=xq(e);return t&&n?`${t} on ${n}`:t||n||"Unknown device"},Sq=e=>{if(e.includes("Edg/"))return"Edge";if(e.includes("OPR/")||e.includes("Opera"))return"Opera";if(e.includes("CriOS"))return"Chrome";if(e.includes("FxiOS"))return"Firefox";if(e.includes("Chrome/")&&!e.includes("Chromium"))return"Chrome";if(e.includes("Firefox/"))return"Firefox";if(e.includes("Safari/")&&!e.includes("Chrome"))return"Safari"},xq=e=>{if(/iPhone/.test(e))return"iPhone";if(/iPad/.test(e))return"iPad";if(/iPod/.test(e))return"iPod";if(/Android/.test(e))return"Android";if(/CrOS/.test(e))return"ChromeOS";if(/Mac OS X|Macintosh/.test(e))return"macOS";if(/Windows/.test(e))return"Windows";if(/Linux/.test(e))return"Linux"},wq=T.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Eq=T.li`
  ${$r}
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
`,Tq=T.span`
  font-size: 20px;
  flex-shrink: 0;
`,Cq=T.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
`,Rq=T.span`
  font-weight: 500;
  font-size: 14px;
  color: ${e=>e.theme.colors.main};
  display: flex;
  align-items: center;
  gap: 6px;
`,Aq=T.span`
  padding: 1px 6px;
  border-radius: 10px;
  font-size: 10px;
  font-weight: 600;
  background-color: ${e=>e.theme.colors.accent}14;
  color: ${e=>e.theme.colors.accent};
`,Iq=T.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,Dq=T.button`
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
`,Oq=T.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
  padding: 16px;
`,kq=T.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
  padding: 16px;
`,Nq=T.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.error};
  text-align: center;
  padding: 16px;
`,Mq=e=>e?/iPhone|iPad|iPod/i.test(e)||/Android/i.test(e)?"📱":/Windows/i.test(e)||/Macintosh|Mac OS/i.test(e)?"💻":/Linux/i.test(e)?"🖥️":"💻":"💻",Lq=E.memo(({deviceToken:e,device:t,isCurrentDevice:n,onDelete:i})=>{const o=E.useMemo(()=>{const f=new Date(t.timestamp).getFullYear()===new Date().getFullYear();return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"numeric",...f?{}:{year:"numeric"}}).format(t.timestamp)},[t.timestamp]),l=bq(t.userAgent);return g.jsxs(Eq,{children:[g.jsx(Tq,{children:Mq(t.userAgent)}),g.jsxs(Cq,{children:[g.jsxs(Rq,{children:[l,n&&g.jsx(Aq,{children:"This device"})]}),g.jsxs(Iq,{children:["Last active ",o]})]}),g.jsx(Dq,{type:"button",onClick:()=>i(e),"aria-label":`Remove ${l}`,children:"Remove"})]})}),Pq=({devices:e})=>{const n=E.useContext(bu).token,i=et(_u),o=E.useCallback(l=>{i&&LI(i,l).catch(console.error)},[i]);return e.length===0?g.jsx(Oq,{children:"No devices registered for push notifications yet."}):g.jsx(wq,{children:e.map(([l,u])=>g.jsx(Lq,{deviceToken:l,device:u,isCurrentDevice:n!==void 0?l===n:u.userAgent!==void 0&&u.userAgent===navigator.userAgent,onDelete:o},l))})},jq=()=>{const e=E.useContext(WD),t=E.useMemo(()=>e.state==="fulfilled"?Object.entries(e.data).sort(([,n],[,i])=>i.timestamp-n.timestamp):[],[e]);return e.state==="idle"||e.state==="loading"?g.jsx(kq,{children:"Loading devices…"}):e.state==="failed"?g.jsx(Nq,{children:"Failed to load devices. Please try again."}):g.jsx(Pq,{devices:t})},$q=async(e,t)=>{const n=ln;if(!n)throw new Error("No Firebase database connection to use");await kI(Ln(n,Ce.PATHS.alert(e,t)))},$T=(e,t,n)=>!e||e.length===0?t:e.length===1?e[0]:e.length===2?`${e[0]} or ${e[1]}`:`${e.length} ${n}`,Uq=(e,t)=>{const n=$T(e,"Any Class","Disciplines"),i=$T(t,"Any Instructor","Instructors");return`${n} with ${i}`},zq=T.li`
  ${$r}
  padding: 16px;
  transition: box-shadow 0.15s;
  opacity: ${e=>e.$disabled?.55:1};

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 12px;
  }

  ${Te`
    padding: 12px;
  `}
`,Bq=T.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;

  ${Te`
    flex-direction: column;
    gap: 8px;
  `}
`,Hq=T.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`,Fq=T.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`,qq=T.span`
  font-weight: 600;
  font-size: 15px;
  color: ${e=>e.theme.colors.main};
`,Vq=T.span`
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 500;
  background-color: ${e=>e.$status==="free"?e.theme.colors.status.free.bg:e.$status==="waitlist"?e.theme.colors.status.waitlist.bg:`${e.theme.colors.error}20`};
  color: ${e=>e.$status==="free"?e.theme.colors.status.free.text:e.$status==="waitlist"?e.theme.colors.status.waitlist.text:e.theme.colors.error};
`,Gq=T.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
`,Wq=T.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  margin-top: 2px;
`,Yq=T.span`
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
`,Qq=T.div`
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;

  ${Te`
    align-self: flex-end;
  `}
`,Kq=T.div`
  position: relative;
  flex-shrink: 0;
`,Xq=T.button`
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
`,Zq=T.ul`
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
`,Nf=T.button`
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
`,Jq=T(Nf)`
  color: ${e=>e.theme.colors.error};
`,eV=T.li`
  height: 1px;
  background: ${e=>e.theme.borderColor};
  margin: 4px 0;
`,tV=T.div`
  padding: 10px 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,nV=T.p`
  margin: 0;
  font-size: 13px;
  color: ${e=>e.theme.colors.main};
  white-space: nowrap;
`,rV=T.div`
  display: flex;
  gap: 6px;
`,iV=T.button`
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
`,sV=T.button`
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
`,oV=T.span`
  font-size: 11px;
  color: ${e=>e.theme.colors.secondary};
  margin-top: 4px;
`,aV={free:{label:"Open spots",title:"Only alerts when a class has open spots available to book"},waitlist:{label:"Waitlist",title:"Alerts when a class has open spots or waitlist availability"},full:{label:"Any",title:"Alerts regardless of availability status"}},lV=e=>aV[e]||{label:e,title:""},cV=E.memo(({alert:e,onDuplicate:t,onEdit:n})=>{const i=ws(),o=et(_u),l=!!e.disabled,[u,f]=E.useState(!1),[p,h]=E.useState(!1),[y,_]=E.useState({top:0,right:0}),v=E.useRef(null),b=E.useRef(null),x=E.useCallback(()=>{o&&xD(o,{...e,disabled:!l})},[o,e,l]),O=E.useCallback(()=>{f(!1),h(!1)},[]);E.useLayoutEffect(()=>{if(!u||!v.current)return;const U=v.current.getBoundingClientRect();_({top:U.bottom+4,right:window.innerWidth-U.right})},[u]),E.useEffect(()=>{if(!u)return;const U=z=>{z.key==="Escape"&&O()},F=z=>{if(!(z.target instanceof Node))return O();!v.current?.contains(z.target)&&!b.current?.contains(z.target)&&O()},H=setTimeout(()=>{document.addEventListener("keydown",U),document.addEventListener("click",F,!0)},0);return()=>{clearTimeout(H),document.removeEventListener("keydown",U),document.removeEventListener("click",F,!0)}},[u]);const{data:C}=wb(e.studioId),{data:I}=xb(e.studioId),M=E.useMemo(()=>{const F=new Date(e.created).getFullYear()===new Date().getFullYear();return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",...F?{}:{year:"numeric"}}).format(e.created)},[e.created]),R=E.useMemo(()=>new Map(C?.map(U=>[U.id,U.name])),[C]),D=E.useMemo(()=>new Map(I?.map(U=>[U.id,U.name])),[I]),N=E.useMemo(()=>{if(e.name)return e.name;const U=Ce.isNotEmpty(e.instructors)&&C?e.instructors.map(H=>R.get(H)).filter(H=>!!H):null,F=Ce.isNotEmpty(e.disciplines)&&I?e.disciplines.map(H=>D.get(H)).filter(H=>!!H):null;return Uq(F,U)},[e.name,e.instructors,e.disciplines,C,I,R,D]),A=Ce.STUDIOS[e.studioId]?.location||e.studioId||"No studio",P=lV(e.maxStatus);return g.jsx(zq,{$disabled:l,children:g.jsxs(Bq,{children:[g.jsxs(Hq,{children:[g.jsxs(Fq,{children:[g.jsx(qq,{children:N}),g.jsx(Vq,{$status:e.maxStatus,title:P.title,children:P.label})]}),g.jsx(Gq,{children:A}),g.jsx(Wq,{children:ls.map((U,F)=>g.jsx(Yq,{$active:!!e.timeRanges[F],title:e.timeRanges[F]?`${U}: monitoring enabled`:`${U}: not monitored`,children:U.charAt(0)},U))}),g.jsxs(oV,{children:["Created ",M]})]}),g.jsxs(Qq,{children:[g.jsx(QD,{id:`toggle-${e.id}`,checked:!l,onChange:x,"aria-label":l?"Enable alert":"Disable alert"}),g.jsxs(Kq,{children:[g.jsx(Xq,{ref:v,type:"button","aria-label":"More options","aria-expanded":u,"aria-haspopup":"menu",onClick:()=>f(U=>!U),children:g.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:[g.jsx("circle",{cx:"8",cy:"3",r:"1.5"}),g.jsx("circle",{cx:"8",cy:"8",r:"1.5"}),g.jsx("circle",{cx:"8",cy:"13",r:"1.5"})]})}),u&&UC.createPortal(g.jsxs(Zq,{ref:b,role:"menu",$top:y.top,$right:y.right,children:[g.jsx("li",{children:g.jsx(Nf,{type:"button",role:"menuitem",onClick:()=>{O(),i(sz(e.id))},children:"Test"})}),g.jsx("li",{children:g.jsx(Nf,{type:"button",role:"menuitem",onClick:()=>{O(),n(e)},children:"Edit"})}),g.jsx("li",{children:g.jsx(Nf,{type:"button",role:"menuitem",onClick:()=>{O(),t(e)},children:"Duplicate"})}),g.jsx(eV,{}),p?g.jsx("li",{children:g.jsxs(tV,{children:[g.jsx(nV,{children:"Delete this alert?"}),g.jsxs(rV,{children:[g.jsx(iV,{type:"button",onClick:()=>h(!1),children:"Cancel"}),g.jsx(sV,{type:"button",onClick:()=>{O(),o&&$q(o,e.id)},children:"Delete"})]})]})}):g.jsx("li",{children:g.jsx(Jq,{type:"button",role:"menuitem",onClick:()=>h(!0),children:"Delete"})})]}),document.body)]})]})]})})}),uV=T.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,dV=({alerts:e,onDuplicate:t,onEdit:n})=>g.jsx(uV,{children:e.map(i=>g.jsx(cV,{alert:i,onDuplicate:t,onEdit:n},i.id))}),fV=T.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px 0;

  ${Te`
    padding: 16px 16px 0;
  `}
`,hV=T.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,pV=T.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
`,mV=T.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
`,gV=T.button`
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
`,yV=T.div`
  padding: 16px 24px 24px;

  ${Te`
    padding: 12px 16px 16px;
  `}
`,vV=T.p`
  margin: 0;
  padding: 24px;
  text-align: center;
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
`,_V=T.p`
  margin: 0;
  padding: 24px;
  text-align: center;
  color: ${e=>e.theme.colors.error};
  font-size: 14px;
`,bV=({onAdd:e,onEdit:t,onDuplicate:n})=>{const i=E.useContext(mb),o=i.state==="loading"||i.state==="idle",l=i.state==="failed",u=i.state==="fulfilled"?i.data:[];return g.jsxs(g.Fragment,{children:[g.jsxs(fV,{children:[g.jsxs(hV,{children:[g.jsx(pV,{children:"Alerts"}),g.jsx(mV,{children:o?"Loading your alerts…":l?"Something went wrong":u.length===0?"You haven't created any alerts yet":`${u.length} alert${u.length===1?"":"s"}`})]}),!o&&!l&&g.jsx(gV,{type:"button",onClick:e,children:"+ New alert"})]}),g.jsxs(yV,{children:[o&&g.jsx(vV,{children:"Loading…"}),l&&g.jsx(_V,{children:"Failed to load your alerts. Please refresh and try again."}),!o&&!l&&u.length===0&&g.jsx(EV,{onAdd:e}),!o&&!l&&u.length>0&&g.jsx(dV,{alerts:u,onEdit:t,onDuplicate:n})]})]})},SV=T.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 32px 16px;
`,xV=T.p`
  margin: 0;
  font-size: 15px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
`,wV=T.button`
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
`,EV=({onAdd:e})=>g.jsxs(SV,{children:[g.jsx(xV,{children:"Create your first alert to get notified when classes become available."}),g.jsx(wV,{type:"button",onClick:e,children:"Create an alert"})]}),TV=T.button`
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
`;T.button`
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
`;const CV=T.div`
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 16px;
`,RV=()=>["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document||/iPad|iPhone|iPod/.test(navigator.userAgent),Ey=T(CV)`
  margin-bottom: 1em;
`,AV=T(TV)`
  margin-top: 1em;
`,UT=T.h2`
  color: ${e=>e.theme.colors.accent};
`,IV=()=>{const[e,t]=E.useState(window.Notification?window.Notification.permission:void 0),{refreshToken:n}=E.useContext(bu),i=RV(),o=!!navigator.standalone||window.matchMedia("(display-mode: standalone)").matches,l=E.useCallback(()=>{window.Notification&&typeof window.Notification.requestPermission=="function"&&window.Notification.requestPermission().then(u=>{t(u),u==="granted"&&n()}).catch(u=>{console.error(u),Nr(u)})},[n]);return i&&!o?g.jsxs(Ey,{children:[g.jsx(UT,{children:"Installation Required"}),g.jsx("p",{children:"To receive notifications on iOS, you must first add this app to your home screen. Tap the share button in Safari and select “Add to Home Screen”, then open the app from there."})]}):e===void 0||!("serviceWorker"in navigator)?g.jsxs(Ey,{children:[g.jsx(UT,{children:"Unsupported Browser"}),g.jsx("p",{children:"This browser does not support sending you notifications in the background. Alerts for new classes will only display if you keep this tab open."})]}):e!=="granted"?g.jsxs(Ey,{children:[g.jsx("h2",{children:"Grant notification permissions"}),g.jsx("p",{children:"In order to get notified when any of your alerts trigger, you need to grant permission to send notifications"}),g.jsx(AV,{type:"button",onClick:l,children:"Grant Permission"})]}):null},DV=T.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${Te`
    gap: 16px;
  `}
`,Ty=T.section`
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  overflow: hidden;
`,zT=T.div`
  padding: 20px 24px 0;

  ${Te`
    padding: 16px 16px 0;
  `}
`,BT=T.h2`
  margin: 0 0 4px;
  font-size: 20px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
`,HT=T.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
`,FT=T.div`
  padding: 16px 24px 24px;

  ${Te`
    padding: 12px 16px 16px;
  `}
`,OV=()=>{const e=ws();return g.jsxs(DV,{children:[g.jsx(Ty,{children:g.jsx(bV,{onAdd:()=>{e(nt.ALERTS_EDITOR,{state:{}})},onEdit:t=>{e(nt.ALERTS_EDITOR,{state:t})},onDuplicate:t=>{e(nt.ALERTS_EDITOR,{state:{...t,id:void 0,created:void 0}})}})}),g.jsxs(Ty,{children:[g.jsxs(zT,{children:[g.jsx(BT,{children:"Preferences"}),g.jsx(HT,{children:"Control how often you receive alert notifications."})]}),g.jsx(FT,{children:g.jsx(_q,{})})]}),g.jsxs(Ty,{children:[g.jsxs(zT,{children:[g.jsx(BT,{children:"Devices"}),g.jsx(HT,{children:"Devices registered to receive push notifications. Removed devices will re-register on their next visit."})]}),g.jsxs(FT,{children:[g.jsx(IV,{}),g.jsx(jq,{})]})]})]})},kV=T.button.attrs({"aria-label":"Close",type:"button"})`
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
`,NV=()=>{const e=et(i=>i.filters.selectedBookableStatuses),t=Mn(),n=E.useCallback(i=>{t(C7(i))},[t]);return{bookableStatuses:e,toggleBookableStatus:n}},MV=T.button`
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
`,LV=T.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px 8px;
`,PV=T.h3`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${e=>e.theme.colors.secondary};
  margin: 0;
`,pp=({label:e,onReset:t,children:n})=>g.jsxs(LV,{children:[g.jsx(PV,{children:e}),t&&g.jsx(MV,{type:"button",onClick:t,children:"Reset"}),n]}),jV=T.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 0 16px 16px;
`,$V=T.button`
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
`,UV=()=>{const{bookableStatuses:e,toggleBookableStatus:t}=NV(),n=Kv(),i=[{label:"Free",status:"free",color:n.colors.status.free.text},{label:"Waitlist",status:"waitlist",color:n.colors.status.waitlist.text},{label:"Full",status:"full",color:n.colors.status.full.text}];return g.jsxs("fieldset",{style:{border:"none",margin:0,padding:0},children:[g.jsx("legend",{style:{padding:0,width:"100%"},children:g.jsx(pp,{label:"Status"})}),g.jsx(jV,{children:i.map(o=>{const l=e.includes(o.status);return g.jsx($V,{type:"button",$active:l,$color:o.color,onClick:()=>t(o.status),"aria-pressed":l,children:o.label},o.status)})})]})},zV=()=>{const e=et(i=>i.filters.selectedDisciplines),t=Mn(),n=E.useCallback(i=>{t(I7(i))},[t]);return{selectedDisciplines:e,toggleDiscipline:n}},KD=T.ul`
  list-style: none;
  margin: 0;
  padding: 0 0 8px;
`,XD=T.li`
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
`,ZD=T.span`
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
`,JD=T.span`
  font-size: 14px;
  color: ${e=>e.theme.colors.main};
`,Th=T.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  padding: 8px 16px 16px;
  margin: 0;
`,BV=({discipline:e,checked:t,onClick:n})=>g.jsxs(XD,{$checked:t,onClick:n,role:"checkbox","aria-checked":t,children:[g.jsx(ZD,{$checked:t}),g.jsx(bh,{discipline:e,size:24}),g.jsx(JD,{children:e.name})]}),HV=()=>{const e=et(Do),{currentData:t,isLoading:n,error:i}=xb(e),{selectedDisciplines:o,toggleDiscipline:l}=zV(),u=Mn(),f=E.useRef(o);return E.useEffect(()=>{const p=f.current;if(!t||p.length===0)return;const h=new Set(t.map(_=>_.id)),y=p.filter(_=>h.has(_));y.length<p.length&&u(D7(y))},[t,u]),i&&!n?g.jsx(Th,{children:"Failed to load disciplines"}):!t||n?g.jsx(Th,{children:"Loading…"}):g.jsx(KD,{children:t.map((p,h)=>g.jsx(BV,{discipline:p,checked:o.includes(p.id),onClick:()=>l(p.id)},h))})},FV=()=>{const e=et(n=>n.filters.selectedDisciplines.length>0),t=Mn();return g.jsxs("div",{children:[g.jsx(pp,{label:"Disciplines",onReset:e?()=>t(O7()):void 0}),g.jsx(HV,{})]})},qV=()=>{const e=et(i=>i.filters.selectedInstructors),t=Mn(),n=E.useCallback(i=>{t(R7(i))},[t]);return{selectedInstructors:e,toggleInstructor:n}},VV=({instructor:e,checked:t,onClick:n})=>g.jsxs(XD,{$checked:t,onClick:n,role:"checkbox","aria-checked":t,children:[g.jsx(ZD,{$checked:t}),g.jsx(gb,{instructor:e,size:28}),g.jsx(JD,{children:e.name})]}),GV=()=>{const e=et(Do),{currentData:t,isLoading:n,error:i}=wb(e),{selectedInstructors:o,toggleInstructor:l}=qV();return i&&!n?g.jsx(Th,{children:"Failed to load instructors"}):!t||n?g.jsx(Th,{children:"Loading…"}):g.jsx(KD,{children:t.map((u,f)=>g.jsx(VV,{instructor:u,checked:o.includes(u.id),onClick:()=>l(u.id)},f))})},WV=()=>{const e=et(n=>n.filters.selectedInstructors.length>0),t=Mn();return g.jsxs("div",{children:[g.jsx(pp,{label:"Instructors",onReset:e?()=>t(A7()):void 0}),g.jsx(GV,{})]})},YV=Object.entries(Ce.STUDIOS).map(([e,t])=>({id:e,label:t.location})),QV=T.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 0 16px 16px;
`,KV=T.label`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  ${$r}
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
`,XV=T.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`,ZV=T.span`
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
`,JV=T.span`
  font-size: 15px;
  color: ${e=>e.theme.colors.main};
`,eG=()=>{const e=Mn(),t=et(Do);return g.jsxs("fieldset",{style:{border:"none",margin:0,padding:0},children:[g.jsx("legend",{style:{padding:0,width:"100%"},children:g.jsx(pp,{label:"Studio"})}),g.jsx(QV,{children:YV.map(n=>{const i=t===n.id;return g.jsxs(KV,{$selected:i,htmlFor:`studio-${n.id}`,children:[g.jsx(XV,{type:"radio",id:`studio-${n.id}`,name:"studio-selected",value:n.id,checked:i,onChange:()=>{i||e(yh(n.id))}}),g.jsx(ZV,{$selected:i}),g.jsx(JV,{children:n.label})]},n.id)})})]})},tG=T.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`,nG=T.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 16px 12px;
  border-bottom: 1px solid ${e=>e.theme.borderColor};
  position: sticky;
  top: 0;
  background-color: ${e=>e.theme.colors.secondarySurface};
  z-index: 1;

  ${bD`
    display: flex;
  `}
`,rG=T.h2`
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${e=>e.theme.colors.main};
  margin: 0;
`,iG=T(kV)`
  display: none;

  ${bD`
    display: block;
  `}
`,sG=T.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  overflow-y: auto;
  flex: 1;
`,pf=T.div`
  border-bottom: 1px solid ${e=>e.theme.borderColor};

  &:last-child {
    border-bottom: none;
  }
`,oG=({onClose:e})=>g.jsxs(tG,{children:[g.jsxs(nG,{children:[g.jsx(rG,{children:"Filters"}),g.jsx(iG,{onClick:()=>e()})]}),g.jsxs(sG,{children:[g.jsx(pf,{children:g.jsx(eG,{})}),g.jsx(pf,{children:g.jsx(UV,{})}),g.jsx(pf,{children:g.jsx(FV,{})}),g.jsx(pf,{children:g.jsx(WV,{})})]})]}),aG=()=>{const e=et(Do),{refetch:t}=Sb(e);return{refresh:E.useCallback(async()=>{await t()},[t])}},qT=150,VT=60,lG=()=>document.documentElement.scrollTop||document.body.scrollTop,cG=({refresh:e})=>{const t=E.useRef(null),n=E.useRef(null),i=E.useRef(e);E.useLayoutEffect(()=>{i.current=e});const o=E.useMemo(()=>!!navigator.standalone||window.matchMedia("(display-mode: standalone)").matches||!1,[]);return E.useEffect(()=>{if(!o)return;let l=0,u=!1,f=!1,p=!1;const h=x=>{const O=n.current;O&&(O.style.transition=x?"transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease":"none",O.style.transform="",O.style.opacity="0")},y=x=>{l=x.touches[0].clientY,u=!1,f=!1},_=x=>{if(p||lG()>0)return;const O=x.touches[0].clientY-l;if(O<=0){u&&(u=!1,f=!1,h(!1));return}u=!0,f=O>=qT;const C=Math.min(O/qT,1),I=VT*(1-Math.pow(1-C,2)),M=Math.pow(C,.5),R=Math.floor(C*270),D=n.current;D&&(D.style.transition="none",D.style.transform=`translateY(${I}px) rotate(${R}deg)`,D.style.opacity=String(Math.min(M,1)))},v=()=>{if(u)if(u=!1,f&&!p){f=!1,p=!0;const x=n.current;x&&(x.classList.add("animate"),x.style.transition="none",x.style.transform=`translateY(${VT}px)`,x.style.opacity="1");let O=!1;const C=()=>{if(O)return;O=!0,p=!1;const M=n.current;M&&(M.classList.remove("animate"),h(!0))},I=setTimeout(C,1e4);i.current().finally(()=>{clearTimeout(I),C()})}else f=!1,h(!0)},b=()=>{u=!1,f=!1,h(!1)};return document.addEventListener("touchstart",y,{passive:!0}),document.addEventListener("touchmove",_,{passive:!0}),document.addEventListener("touchend",v,{passive:!0}),document.addEventListener("touchcancel",b,{passive:!0}),()=>{document.removeEventListener("touchstart",y),document.removeEventListener("touchmove",_),document.removeEventListener("touchend",v),document.removeEventListener("touchcancel",b)}},[o]),{swipeRef:t,spinnerRef:n}},uG=e=>e.filters.selectedDisciplines.length>0||e.filters.selectedInstructors.length>0,dG=e=>e.filters.selectedBookableStatuses,fG=e=>e.filters.selectedDisciplines,hG=e=>e.filters.selectedInstructors,pG=(e,t)=>t,mG=Ei([dG,fG,hG,pG],(e,t,n,i)=>i.filter(o=>e.includes(o.status)).filter(o=>n.length>0?n.some(l=>l===o.instructor.id):!0).filter(o=>t.length>0?t.includes(o.discipline.id):!0)),eO=Ei([Do],e=>{if(e)return Ce.STUDIOS[e]}),gG=Ei([mG,eO],(e,t)=>{if(e.length===0)return[];const n=t?.timezone||"",i=[];let o=1,l=Va(e[0].start,n,!0),u=[e[0]];for(;o<e.length;){const f=e[o],p=Va(f.start,n,!0);p===l?u.push(f):(i.push({formattedDate:l,classes:u}),l=p,u=[f]),o++}return u.length>0&&i.push({formattedDate:l,classes:u}),i}),GT={free:{label:"Book"},waitlist:{label:"Waitlist"},full:{label:"Full"}},yG=T.a`
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
`,vG=T.div`
  flex-shrink: 0;
  width: 84px;
  ${Te`
    width: 70px;
  `}
`,_G=T.div`
  font-weight: 600;
  font-size: 16px;
  color: ${e=>e.theme.colors.main};
  white-space: nowrap;
  ${Te`
    font-size: 13px;
  `}
`,bG=T.div`
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
  margin-top: 2px;
  ${Te`
    font-size: 11px;
  `}
`,SG=T.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  ${Te`
    display: none;
  `}
`,xG=T.div`
  flex: 1;
  min-width: 0;
`,wG=T.div`
  font-size: 16px;
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${Te`
    font-size: 13px;
  `}
`,EG=T.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  margin-top: 3px;
  ${Te`
    font-size: 12px;
  `}
`,TG=T.span`
  color: ${e=>e.theme.borderColor};
`,CG=T.div`
  display: none;
  ${Te`
    display: flex;
    align-items: center;
  `}
`,RG=T.button`
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
`,AG=E.memo(({clazz:e})=>{const t=et(eO),n=e.status,i=n==="free"||n==="waitlist",o=E.useMemo(()=>e.customerUrl?new URL(e.customerUrl,"https://schedule.studio.onepeloton.com").href:(t_("Missing customer URL",{extra:{clazz:e}}),""),[e]),l=E.useCallback(p=>{o&&(p.preventDefault(),window.open(o,"_blank","noopener,noreferrer"))},[o]),u=E.useMemo(()=>To(e.start,t?.timezone),[e.start,t?.timezone]),f=GT[n]??GT.full;return g.jsxs(yG,{$status:n,$interactive:i,href:o,target:"_blank",rel:"noopener noreferrer",onClick:l,"aria-label":`${f.label} ${e.name} at ${u}`,children:[g.jsxs(vG,{children:[g.jsx(_G,{children:u}),g.jsxs(bG,{children:[e.duration/60," min"]})]}),g.jsxs(SG,{children:[g.jsx(gb,{instructor:e.instructor,size:44}),g.jsx(bh,{discipline:e.discipline,size:36})]}),g.jsxs(xG,{children:[g.jsx(wG,{children:e.name}),g.jsxs(EG,{children:[e.instructor.name,g.jsx(TG,{children:"·"}),e.discipline.name,g.jsx(CG,{children:g.jsx(bh,{discipline:e.discipline,size:20})})]})]}),g.jsx(RG,{$status:n,disabled:!i,tabIndex:-1,children:f.label})]})}),IG=T.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,DG=T.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,OG=T.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 0 4px 6px;
  border-bottom: 1px solid ${e=>e.theme.borderColor};
  margin-bottom: 2px;
`,kG=T.h2`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${e=>e.theme.colors.main};
  margin: 0;
`,WT=T.span`
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
`,NG=T.div`
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 32px 24px;
  text-align: center;
  ${Te`
    padding: 24px 16px;
  `}
`,MG=T.p`
  font-size: 16px;
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
  margin: 0 0 8px;
`,YT=T.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  margin: 0;
  line-height: 1.5;
`,LG=({classes:e,fulfilledTimeStamp:t})=>{const n=et(u=>gG(u,e)),i=et(uG),o=et(u=>u.filters.selectedBookableStatuses.includes("free")),l=E.useMemo(()=>t?new Intl.DateTimeFormat(void 0,{hour:"numeric",minute:"numeric"}).format(t):void 0,[t]);return n.length===0?g.jsxs(NG,{children:[g.jsx(MG,{children:"No classes found"}),i&&g.jsx(YT,{children:"Try resetting your filters or selecting more options in the sidebar."}),o&&!i&&g.jsx(YT,{children:"New classes usually open at 12:00 pm on Mondays and Thursdays in your studio's timezone."})]}):g.jsx(IG,{children:n.map((u,f)=>g.jsxs(DG,{children:[g.jsxs(OG,{children:[g.jsx(kG,{children:u.formattedDate}),f===0&&l&&g.jsxs(WT,{children:["Times in studio timezone · loaded ",l]}),f===0&&!l&&g.jsx(WT,{children:"All times in studio timezone"})]}),u.classes.map((p,h)=>g.jsx(AG,{clazz:p},h))]},f))})},QT=T.div`
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 32px 24px;
  text-align: center;
  ${Te`
    padding: 24px 16px;
  `}
`,PG=T.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  margin: 0;
`,jG=T.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.error};
  margin: 0 0 6px;
`,$G=T.code`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,UG=()=>{const e=et(Do),{currentData:t,isLoading:n,error:i,fulfilledTimeStamp:o}=Sb(e,{refetchOnMountOrArgChange:!0});return i&&!n?g.jsxs(QT,{children:[g.jsx(jG,{children:"Failed to load classes"}),g.jsx($G,{children:iF(i)})]}):!t||n?g.jsx(QT,{children:g.jsx(PG,{children:"Loading classes…"})}):g.jsx(LG,{classes:t,fulfilledTimeStamp:o})},zG=T.div``,kv=300,BG=T.aside`
  max-width: 100%;
  width: ${kv}px;
  top: calc(${rb}px + env(safe-area-inset-top, 0px));
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
    left: ${e=>e.$toggleVisible?0:-kv}px;
    z-index: 2;
    box-shadow: ${e=>e.$toggleVisible?"4px 0 16px rgba(0,0,0,0.08)":"none"};
  }
`,HG=T.div`
  flex: 1;
  background-color: ${e=>e.theme.colors.secondarySurface};
  padding: 20px;
  padding-bottom: calc(20px + env(safe-area-inset-bottom, 0px));
  position: relative;
  margin-left: ${kv}px;

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
`,mf=40,FG=T.div`
  padding-top: 10px;
  position: absolute;
  left: 0;
  width: 100%;
  top: -50px;
  text-align: center;
`,qG=T.div`
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
`,VG=T.div`
  display: none;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;

  @media only screen and (max-width: ${e=>e.theme.widths.tablet}px) {
    display: flex;
  }
`,GG=T.button`
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
`,WG=()=>g.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:g.jsx("path",{d:"M1 3h12M3 7h8M5 11h4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),YG=()=>{const{refresh:e}=aG(),{swipeRef:t,spinnerRef:n}=cG({refresh:e}),[i,o]=E.useState(!1);return g.jsx(hs,{children:g.jsxs(zG,{children:[g.jsx(BG,{$toggleVisible:i,children:g.jsx(oG,{onClose:()=>{o(!1)}})}),g.jsxs(HG,{$toggleVisible:i,onClick:()=>{o(!1)},ref:t,children:[g.jsx(FG,{children:g.jsxs(qG,{ref:n,children:[g.jsx("div",{}),g.jsx("div",{}),g.jsx("div",{})]})}),g.jsx(VG,{children:g.jsxs(GG,{type:"button",onClick:l=>{o(!0),l.stopPropagation()},children:[g.jsx(WG,{}),"Filters"]})}),g.jsx(UG,{})]})]})})},QG=({children:e})=>{const t=et(el),n=et(ib);return t.state!=="fulfilled"?null:n?g.jsx(g.Fragment,{children:e}):g.jsx(Bv,{to:nt.CLASS_LIST,replace:!0})},KT=e=>{switch(e.code){case"auth/user-not-found":return"No account found with this email address. Please check your email or create a new account.";case"auth/wrong-password":return"Incorrect password. Please try again or reset your password.";case"auth/invalid-email":return"Please enter a valid email address.";case"auth/user-disabled":return"This account has been disabled. Please contact support for assistance.";case"auth/too-many-requests":return"Too many failed login attempts. Please try again later or reset your password.";case"auth/weak-password":return"Password should be at least 6 characters long.";case"auth/email-already-in-use":return"An account with this email already exists. Please sign in instead.";case"auth/invalid-credential":return"Invalid email or password. Please check your credentials and try again.";case"auth/operation-not-allowed":return"This sign-in method is not enabled. Please contact support.";case"auth/account-exists-with-different-credential":return"An account already exists with the same email but different sign-in credentials. Please sign in using the original method.";case"auth/credential-already-in-use":return"This credential is already associated with a different user account.";case"auth/popup-closed-by-user":return"Sign-in was cancelled. Please try again.";case"auth/popup-blocked":return"Pop-up was blocked by your browser. Please allow pop-ups for this site and try again.";case"auth/cancelled-popup-request":return"Sign-in was cancelled. Please try again.";case"auth/network-request-failed":return"Network error occurred. Please check your internet connection and try again.";case"auth/internal-error":return"An internal error occurred. Please try again later.";case"auth/invalid-api-key":return"Configuration error. Please contact support.";case"auth/app-deleted":return"Application error. Please refresh the page and try again.";case"auth/invalid-user-token":return"Your session has expired. Please sign in again.";case"auth/user-token-expired":return"Your session has expired. Please sign in again.";case"auth/null-user":return"No user is currently signed in.";case"auth/requires-recent-login":return"This operation requires recent authentication. Please sign in again.";default:return e.message||"An unexpected error occurred. Please try again."}},KG=T.h1`
  font-size: 26px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
  margin: 0 0 6px;
`,XG=T.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  margin: 0 0 16px;
  line-height: 1.5;
`,ZG=T.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,XT=T.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,ZT=T.label`
  font-size: 13px;
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
`,JT=T.input`
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
`,JG=T.button`
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
`,eW=T.button`
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
`,tW=T.div`
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
`,nW=T.p`
  margin: 0;
  font-size: 13px;
  color: ${e=>e.theme.colors.error};
`,rW=T.p`
  margin: 32px 0 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
`,iW=T.button`
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
`,sW=()=>{const e=ws(),[t,n]=E.useState(!1),[i,o]=E.useState(""),[l,u]=E.useState(!1),[f,p]=E.useState(""),[h,y]=E.useState(""),_=E.useCallback(async b=>{if(b.preventDefault(),!(!di||!f||!h)){n(!0),o("");try{l?await n8(di,f,h):await r8(di,f,h),e(nt.CLASS_LIST)}catch(x){console.error("Email auth error:",x);const O=x&&typeof x=="object"&&"code"in x?KT(x):"Authentication failed";o(O),Nr(x)}finally{n(!1)}}},[f,h,l,e]),v=E.useCallback(async()=>{if(di){n(!0),o("");try{const b=new ui;await C8(di,b),e(nt.CLASS_LIST)}catch(b){console.error("Google sign-in error:",b);const x=b&&typeof b=="object"&&"code"in b?KT(b):"Google sign-in failed";o(x),Nr(b)}finally{n(!1)}}},[e]);return g.jsxs("div",{children:[g.jsx(KG,{children:l?"Create account":"Sign in"}),g.jsx(XG,{children:"Set alerts, persist filters across devices, and access beta features."}),g.jsxs(ZG,{onSubmit:_,children:[g.jsxs(XT,{children:[g.jsx(ZT,{htmlFor:"signin-email",children:"Email"}),g.jsx(JT,{id:"signin-email",type:"email",placeholder:"you@example.com",value:f,onChange:b=>p(b.target.value),required:!0,disabled:t})]}),g.jsxs(XT,{children:[g.jsx(ZT,{htmlFor:"signin-password",children:"Password"}),g.jsx(JT,{id:"signin-password",type:"password",placeholder:"••••••••",value:h,onChange:b=>y(b.target.value),required:!0,disabled:t})]}),i&&g.jsx(nW,{role:"alert",children:i}),g.jsx(JG,{type:"submit",disabled:t,children:t?"Loading…":l?"Create account":"Sign in"})]}),g.jsx(tW,{style:{marginTop:20,marginBottom:16},children:"or"}),g.jsx(eW,{type:"button",onClick:v,disabled:t,children:"Continue with Google"}),g.jsxs(rW,{children:[l?"Already have an account?":"Don't have an account?"," ",g.jsx(iW,{type:"button",onClick:()=>{u(!l),o("")},disabled:t,children:l?"Sign in":"Create account"})]})]})},oW=Ei([el],e=>e.state==="fulfilled"&&!!e.data),aW=T.div`
  padding: 32px 20px;
  display: flex;
  justify-content: center;

  ${Te`
    padding: 16px 12px;
  `}
`,lW=T.div`
  width: 100%;
  max-width: 400px;
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 32px;

  ${Te`
    padding: 24px 20px;
  `}
`,cW=()=>et(oW)?g.jsx(Bv,{to:nt.CLASS_LIST}):g.jsx(hs,{children:g.jsx(aW,{children:g.jsx(lW,{children:g.jsx(sW,{})})})});function uW(e){const t=[];for(let n=e-1;n>=0;n--){const i=new Date;i.setDate(i.getDate()-n),t.push(i.toISOString().slice(0,10))}return t}function dW(e=14){const[t,n]=E.useState({state:"idle"});return E.useEffect(()=>{if(!ln){n({state:"failed",error:new Error("No database")});return}n({state:"loading"}),MI(Ln(ln,"metrics")).then(i=>{const o=i.val()??{},u=uW(e).map(f=>{const p=o[f]??{},h=p.diffs??{},y={};for(const[v,b]of Object.entries(h))y[v]={added:b.added??0,changed:b.changed??0,removed:b.removed??0};const _=p.notifications??{};return{date:f,diffs:y,notifications:{sent:_.sent??0,failed:_.failed??0,usersReached:_.usersReached??0}}});n({state:"fulfilled",data:u})}).catch(i=>{n({state:"failed",error:i})})},[e]),t}function eC(e){if(e.length===0)return null;const t=[...e].sort((i,o)=>i-o),n=Math.floor(t.length/2);return t.length%2===0?(t[n-1]+t[n])/2:t[n]}const fW=e=>{if(!e||typeof e!="object")return!1;const t=e;return typeof t.classId=="string"&&typeof t.instructorName=="string"&&typeof t.addedAt=="number"};function hW(){const[e,t]=E.useState({state:"idle"});return E.useEffect(()=>{if(!ln){t({state:"failed",error:new Error("No database")});return}t({state:"loading"});const n=Ln(ln,"selloutStats"),i=Ru(n,o=>{const l=o.val()??{},u=[];for(const[f,p]of Object.entries(l)){if(!p||typeof p!="object")continue;const h=Object.values(p).filter(fW);if(h.length===0)continue;const y=h.map(v=>v.timeToWaitlistMs).filter(v=>v!=null),_=h.map(v=>v.timeToFullMs).filter(v=>v!=null);u.push({instructorId:f,instructorName:h[0].instructorName,classCount:h.length,medianTimeToWaitlistMs:eC(y),waitlistSampleSize:y.length,medianTimeToFullMs:eC(_),fullSampleSize:_.length})}t({state:"fulfilled",data:u})},o=>{t({state:"failed",error:o})});return()=>i()},[]),e}function pW(e){const t=Math.round(e/6e4),n=Math.floor(t/1440),i=Math.floor(t%1440/60),o=t%60;return n>0?`${n}d ${i}h`:i>0?`${i}h ${o}m`:`${o}m`}const Cy=T.div`
  padding: 32px 24px;
  max-width: 900px;
  margin: 0 auto;

  ${Te`
    padding: 20px 16px;
  `}
`,Ry=T.h1`
  font-size: 22px;
  font-weight: 700;
  color: ${e=>e.theme.colors.main};
  margin: 0 0 28px;
`,Ay=T.section`
  margin-bottom: 40px;
`,Iy=T.h2`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${e=>e.theme.colors.secondary};
  margin: 0 0 16px;
`,mW=T.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 40px;

  ${Te`
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  `}
`,ya=T.div`
  background: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 16px 20px;
`,va=T.div`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
  margin-bottom: 4px;
`,_a=T.div`
  font-size: 24px;
  font-weight: 700;
  color: ${e=>e.theme.colors.main};
`,Tc=T.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
`,Ch=1e3,Mf=140,Rh=12,tO=4,nO=Mf-Rh-tO;function _c(e,t){return t<=1?Ch/2:e/(t-1)*Ch}function Dy(e,t){return Rh+nO*(1-e/t)}const gW=[.25,.5,.75],yW=T.div`
  background: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 16px 16px 12px;
`,vW=T.svg`
  display: block;
  width: 100%;
  height: 140px;
  /* currentColor is used by grid lines so they inherit the theme secondary color */
  color: ${e=>e.theme.colors.secondary};
`,_W=T.div`
  display: flex;
  margin-top: 6px;
`,bW=T.div`
  flex: 1;
  text-align: center;
  font-size: 10px;
  color: ${e=>e.theme.colors.secondary};
  overflow: hidden;
`,SW=T.div`
  display: flex;
  gap: 16px;
  margin-top: 12px;
  flex-wrap: wrap;
`,xW=T.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,wW=T.div`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  background-color: ${e=>e.$color};
  flex-shrink: 0;
`;function EW(e){const[,t,n]=e.split("-");return`${parseInt(t)}/${parseInt(n)}`}function TW({days:e,legend:t}){return g.jsxs(g.Fragment,{children:[g.jsx(_W,{children:e.map(n=>g.jsx(bW,{children:EW(n.date)},n.date))}),g.jsx(SW,{children:t.map(n=>g.jsxs(xW,{children:[g.jsx(wW,{$color:n.color}),n.label]},n.label))})]})}const CW=T.div`
  position: relative;
`,RW=T.div`
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
`,AW=T.div`
  font-size: 11px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,IW=T.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: ${e=>e.theme.colors.secondary};
  line-height: 1.6;
`,DW=T.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${e=>e.$color};
  flex-shrink: 0;
`,OW=T.span`
  margin-left: auto;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
`,kW=T.div`
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${e=>e.$color};
  border: 2px solid ${e=>e.theme.colors.mainSurface};
  transform: translate(-50%, -50%);
  pointer-events: none;
`;function tC({days:e,seriesForDay:t,legend:n}){const i=e.length,[o,l]=E.useState(null),u=e.map(t),f=Math.max(...u.flatMap(v=>v.map(b=>b.value)),1),p=u[0].length,h=Dy(0,f).toFixed(1);function y(v,b){const{left:x,width:O}=b.getBoundingClientRect(),C=(v-x)/O;return Math.max(0,Math.min(i-1,Math.round(C*(i-1))))}const _=o!==null?o/(i-1)*100:null;return g.jsxs(yW,{children:[g.jsxs(CW,{children:[o!==null&&_!==null&&g.jsxs(g.Fragment,{children:[g.jsxs(RW,{$pct:_,children:[g.jsx(AW,{children:e[o].date}),u[o].map(v=>g.jsxs(IW,{children:[g.jsx(DW,{$color:v.color}),v.label,g.jsx(OW,{children:v.value})]},v.label))]}),u[o].map((v,b)=>g.jsx(kW,{$color:v.color,style:{left:`${_}%`,top:`${Dy(v.value,f)/Mf*100}%`}},b))]}),g.jsxs(vW,{viewBox:`0 0 ${Ch} ${Mf}`,preserveAspectRatio:"none","aria-hidden":"true",style:{cursor:"crosshair",display:"block"},onMouseMove:v=>l(y(v.clientX,v.currentTarget)),onMouseLeave:()=>l(null),onTouchStart:v=>l(y(v.touches[0].clientX,v.currentTarget)),onTouchMove:v=>l(y(v.touches[0].clientX,v.currentTarget)),onTouchEnd:()=>l(null),children:[gW.map(v=>{const b=(Rh+nO*(1-v)).toFixed(1);return g.jsx("line",{x1:0,y1:b,x2:Ch,y2:b,stroke:"currentColor",strokeOpacity:.1,strokeWidth:1,vectorEffect:"non-scaling-stroke"},v)}),o!==null&&g.jsx("line",{x1:_c(o,i).toFixed(1),y1:Rh,x2:_c(o,i).toFixed(1),y2:Mf-tO,stroke:"currentColor",strokeOpacity:.2,strokeWidth:1,vectorEffect:"non-scaling-stroke"}),Array.from({length:p},(v,b)=>{const x=u[0][b].color,C=u.map((M,R)=>({x:_c(R,i),y:Dy(M[b].value,f)})).map(({x:M,y:R},D)=>`${D===0?"M":"L"}${M.toFixed(1)},${R.toFixed(1)}`).join(" "),I=[C,`L${_c(i-1,i).toFixed(1)},${h}`,`L${_c(0,i).toFixed(1)},${h}`,"Z"].join(" ");return g.jsxs("g",{children:[g.jsx("path",{d:I,fill:x,fillOpacity:.12}),g.jsx("path",{d:C,fill:"none",stroke:x,strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})]},b)})]})]}),g.jsx(TW,{days:e,legend:n})]})}const NW=T.div`
  overflow-x: auto;
  ${$r}
`,MW=T.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 480px;
  background: ${e=>e.theme.colors.mainSurface};
`,LW=T.th`
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
`,PW=T.button`
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

  ${up}
  ${lH}
`,jW=T.span`
  font-size: 10px;
  visibility: ${e=>e.$visible?"visible":"hidden"};
`,nC=T.tr`
  &:not(:last-child) td {
    border-bottom: 1px solid ${e=>e.theme.borderColor};
  }
`,gf=T.td`
  padding: 10px 16px;
  font-size: 13px;
  color: ${e=>e.theme.colors.main};
  white-space: nowrap;
`,rC=T.span`
  color: ${e=>e.theme.colors.secondary};
  font-size: 11px;
  margin-left: 4px;
`;function iC(e,t){return e===null?g.jsx(rC,{children:"—"}):g.jsxs(g.Fragment,{children:[pW(e),g.jsxs(rC,{children:["(n=",t,")"]})]})}const $W=[{key:"instructor",label:"Instructor"},{key:"classCount",label:"Classes tracked"},{key:"waitlist",label:"Median time to waitlist"},{key:"full",label:"Median time to waitlist full"}];function sC(e,t,n){return e===null&&t===null?0:e===null?1:t===null?-1:n==="asc"?e-t:t-e}function UW(e,t,n){if(!n)return e.instructorName.localeCompare(t.instructorName);switch(n.key){case"instructor":return n.direction==="asc"?e.instructorName.localeCompare(t.instructorName):t.instructorName.localeCompare(e.instructorName);case"classCount":return n.direction==="asc"?e.classCount-t.classCount:t.classCount-e.classCount;case"waitlist":return sC(e.medianTimeToWaitlistMs,t.medianTimeToWaitlistMs,n.direction);case"full":return sC(e.medianTimeToFullMs,t.medianTimeToFullMs,n.direction)}}function zW({stats:e}){const[t,n]=E.useState(null);if(e.length===0)return g.jsx(Tc,{children:"No sellout data recorded yet."});function i(l){n(u=>!u||u.key!==l?{key:l,direction:"asc"}:u.direction==="asc"?{key:l,direction:"desc"}:null)}const o=[...e].sort((l,u)=>UW(l,u,t));return g.jsx(NW,{children:g.jsxs(MW,{children:[g.jsx("thead",{children:g.jsx(nC,{children:$W.map(({key:l,label:u})=>{const f=t?.key===l;return g.jsx(LW,{"aria-sort":f?t.direction==="asc"?"ascending":"descending":"none",children:g.jsxs(PW,{type:"button",onClick:()=>i(l),children:[u,g.jsx(jW,{$visible:f,children:f&&t.direction==="desc"?"▼":"▲"})]})},l)})})}),g.jsx("tbody",{children:o.map(l=>g.jsxs(nC,{children:[g.jsx(gf,{children:l.instructorName}),g.jsx(gf,{children:l.classCount}),g.jsx(gf,{children:iC(l.medianTimeToWaitlistMs,l.waitlistSampleSize)}),g.jsx(gf,{children:iC(l.medianTimeToFullMs,l.fullSampleSize)})]},l.instructorId))})]})})}const Yn={added:"#4ade80",changed:"#facc15",removed:"#f87171",sent:"#60a5fa",failed:"#f87171",usersReached:"#a78bfa"},BW=()=>{const e=dW(14),t=hW();if(e.state==="idle"||e.state==="loading")return g.jsx(hs,{children:g.jsxs(Cy,{children:[g.jsx(Ry,{children:"Stats"}),g.jsx(Tc,{children:"Loading…"})]})});if(e.state==="failed")return g.jsx(hs,{children:g.jsxs(Cy,{children:[g.jsx(Ry,{children:"Stats"}),g.jsxs(Tc,{children:["Failed to load metrics: ",e.error.message??"unknown error"]})]})});const n=e.data,i=n.reduce((l,u)=>{l.sent+=u.notifications.sent,l.failed+=u.notifications.failed,l.usersReached+=u.notifications.usersReached;for(const f of Object.values(u.diffs))l.added+=f.added,l.changed+=f.changed,l.removed+=f.removed;return l},{sent:0,failed:0,usersReached:0,added:0,changed:0,removed:0}),o=[...new Set(n.flatMap(l=>Object.keys(l.diffs)))];return g.jsx(hs,{children:g.jsxs(Cy,{children:[g.jsx(Ry,{children:"Stats"}),g.jsxs(mW,{children:[g.jsxs(ya,{children:[g.jsx(va,{children:"Notifications sent (14d)"}),g.jsx(_a,{children:i.sent.toLocaleString()})]}),g.jsxs(ya,{children:[g.jsx(va,{children:"Users reached (14d)"}),g.jsx(_a,{children:i.usersReached.toLocaleString()})]}),g.jsxs(ya,{children:[g.jsx(va,{children:"Delivery failures (14d)"}),g.jsx(_a,{children:i.failed.toLocaleString()})]}),g.jsxs(ya,{children:[g.jsx(va,{children:"Classes added (14d)"}),g.jsx(_a,{children:i.added.toLocaleString()})]}),g.jsxs(ya,{children:[g.jsx(va,{children:"Classes changed (14d)"}),g.jsx(_a,{children:i.changed.toLocaleString()})]}),g.jsxs(ya,{children:[g.jsx(va,{children:"Classes removed (14d)"}),g.jsx(_a,{children:i.removed.toLocaleString()})]})]}),g.jsxs(Ay,{children:[g.jsx(Iy,{children:"Push notifications (14 days)"}),g.jsx(tC,{days:n,seriesForDay:l=>[{value:l.notifications.sent,color:Yn.sent,label:"Sent"},{value:l.notifications.failed,color:Yn.failed,label:"Failed"},{value:l.notifications.usersReached,color:Yn.usersReached,label:"Users reached"}],legend:[{color:Yn.sent,label:"Sent"},{color:Yn.failed,label:"Failed"},{color:Yn.usersReached,label:"Users reached"}]})]}),g.jsxs(Ay,{children:[g.jsx(Iy,{children:"Class sellout speed by instructor"}),t.state==="idle"||t.state==="loading"?g.jsx(Tc,{children:"Loading…"}):t.state==="failed"?g.jsxs(Tc,{children:["Failed to load sellout stats:"," ",t.error.message??"unknown error"]}):g.jsx(zW,{stats:t.data})]}),o.map(l=>g.jsxs(Ay,{children:[g.jsxs(Iy,{children:["Schedule changes — ",Ce.STUDIOS[l]?.location??l," (14 days)"]}),g.jsx(tC,{days:n,seriesForDay:u=>{const f=u.diffs[l]??{added:0,changed:0,removed:0};return[{value:f.added,color:Yn.added,label:"Added"},{value:f.changed,color:Yn.changed,label:"Changed"},{value:f.removed,color:Yn.removed,label:"Removed"}]},legend:[{color:Yn.added,label:"Added"},{color:Yn.changed,label:"Changed"},{color:Yn.removed,label:"Removed"}]})]},l))]})})},HW=T.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  ${Te`
    padding: 24px 16px;
  `}
`,FW=T.div`
  font-size: 48px;
  margin-bottom: 20px;
`,qW=T.h1`
  font-size: 22px;
  font-weight: 700;
  color: ${e=>e.theme.colors.main};
  margin: 0 0 12px;
`,VW=T.p`
  font-size: 15px;
  line-height: 1.6;
  color: ${e=>e.theme.colors.secondary};
  margin: 0 0 28px;
`,GW=T.div`
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
`,oC=T.span`
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: ${e=>e.theme.colors.secondary};
`,aC=T.span`
  font-size: 15px;
  color: ${e=>e.theme.colors.main};
`,WW=T.a`
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
`,YW=T.p`
  margin: 16px 0 0;
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
`;function QW(e,t){if(!e)return null;try{const n=Ce.STUDIOS[t]?.timezone;return new Date(e).toLocaleString("en-US",{timeZone:n??"UTC",weekday:"short",month:"short",day:"numeric",hour:"numeric",minute:"2-digit",timeZoneName:"short"})}catch{return null}}const KW=()=>{const[e]=G2(),t=e.get("studioId")??"",n=e.get("startsAt")??"",i=e.get("waitingCount"),o=Ce.STUDIOS[t],l=QW(n,t),u=i!==null?parseInt(i,10):null;return g.jsx(hs,{children:g.jsxs(HW,{children:[g.jsx(FW,{children:"📬"}),g.jsx(qW,{children:"Waitlist count changed"}),g.jsxs(VW,{children:["The number of people on the waitlist just changed",u!==null?` — there ${u===1?"is now 1 person":`are now ${u} people`} ahead`:"",". If you joined this waitlist, check your email — Peloton sends a message when it's your turn, and you'll have a 2-hour window to accept."]}),(l||o)&&g.jsxs(GW,{children:[o&&g.jsxs(g.Fragment,{children:[g.jsx(oC,{children:"Studio"}),g.jsx(aC,{children:o.location})]}),l&&g.jsxs(g.Fragment,{children:[g.jsx(oC,{style:{marginTop:o?8:0},children:"Class time"}),g.jsx(aC,{children:l})]})]}),g.jsx(WW,{href:"mailto:",children:"Open Mail App"}),g.jsx(YW,{children:"Opens your device's default mail app."})]})})},XW=z2(g2(g.jsxs(Qn,{children:[g.jsx(Qn,{path:nt.CLASS_LIST,element:g.jsx(YG,{})}),g.jsxs(Qn,{path:nt.ALERTS,element:g.jsx(eq,{}),children:[g.jsx(Qn,{index:!0,element:g.jsx(OV,{})}),g.jsx(Qn,{path:"edit",element:g.jsx(h7,{})}),g.jsx(Qn,{path:":alertId/test",element:g.jsx(qH,{})})]}),g.jsx(Qn,{path:nt.WAITLIST_ALERT,element:g.jsx(KW,{})}),g.jsx(Qn,{path:nt.SIGN_IN,element:g.jsx(cW,{})}),g.jsx(Qn,{path:nt.ABOUT,element:g.jsx(aH,{})}),g.jsx(Qn,{path:nt.STATS,element:g.jsx(QG,{children:g.jsx(BW,{})})}),g.jsx(Qn,{path:"*",element:g.jsx(Bv,{to:nt.CLASS_LIST,replace:!0})})]}))),ZW=(e,t)=>({id:e.uid,displayName:e.displayName||e.email||"",isAdmin:t}),JW=({children:e})=>{const t=Mn();return E.useEffect(()=>{if(t(LT()),!di)return t(PT()),()=>{};const n=o8(di,async i=>{if(t(LT()),i){let o=!1;try{o=(ln?await MI(Ln(ln,`admins/${i.uid}`)):null)?.val()===!0}catch{}t($7(ZW(i,o)))}else t(PT())});return()=>n()},[t]),g.jsx(g.Fragment,{children:e})},eY={mode:"light",borderRadius:"8px",borderColor:"#d1d1d1",colors:{main:"#494f59",secondary:"#514e60",mainSurface:"#fff",secondarySurface:"#ededed",accent:"#cb3449",error:"#d93025",hoverSurface:"rgba(0, 0, 0, 0.05)",status:{free:{bg:"#e8f5e9",text:"#2e7d32"},waitlist:{bg:"#fff3e0",text:"#e65100"},full:{text:"#9e9e9e"}}},widths:{tablet:1024,mobile:560}},tY={mode:"dark",borderRadius:"8px",borderColor:"#2e2f45",colors:{main:"#e2e4eb",secondary:"#9b98b0",mainSurface:"#1c1d2e",secondarySurface:"#13141f",accent:"#cb3449",error:"#ef5350",hoverSurface:"rgba(255, 255, 255, 0.08)",status:{free:{bg:"rgba(46, 125, 50, 0.15)",text:"#81c784"},waitlist:{bg:"rgba(230, 81, 0, 0.15)",text:"#ffb74d"},full:{text:"#757575"}}},widths:{tablet:1024,mobile:560}},nY=eP`
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
`,Nv="theme-mode";function rY(){const e=localStorage.getItem(Nv);return e!==null?e==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches}function iY(){const[e,t]=E.useState(rY),n=E.useCallback(()=>{t(i=>{const o=!i;return localStorage.setItem(Nv,o?"dark":"light"),o})},[]);return E.useEffect(()=>{const i=window.matchMedia("(prefers-color-scheme: dark)"),o=l=>{localStorage.getItem(Nv)===null&&t(l.matches)};return i.addEventListener("change",o),()=>i.removeEventListener("change",o)},[]),{isDark:e,toggle:n}}function sY(){const{isDark:e,toggle:t}=iY();return E.useEffect(()=>{const i=new URLSearchParams(window.location.search).get("classUrl");i&&(window.history.replaceState(null,"",window.location.pathname+window.location.hash),window.location.assign(new URL(i,"https://schedule.studio.onepeloton.com").href))},[]),g.jsx(vD.Provider,{value:{isDark:e,toggle:t},children:g.jsxs(XL,{theme:e?tY:eY,children:[g.jsx(nY,{}),g.jsx(NN,{store:hp,children:g.jsx(JW,{children:g.jsx(iz,{children:g.jsx(Z2,{router:XW})})})})]})})}yN.createRoot(document.getElementById("root")).render(g.jsx(E.StrictMode,{children:g.jsx(sY,{})}));
//# sourceMappingURL=index-BUFT_CTT.js.map

//# debugId=4d7c21ce-3987-57af-92e6-476409bdb85f
