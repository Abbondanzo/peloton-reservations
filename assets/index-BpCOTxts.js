
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="1c6d1588-8a6f-541c-bd6a-667b285b2546")}catch(e){}}();
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function Kk(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var gg={exports:{}},tc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z1;function Xk(){if(Z1)return tc;Z1=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(i,o,l){var u=null;if(l!==void 0&&(u=""+l),o.key!==void 0&&(u=""+o.key),"key"in o){l={};for(var f in o)f!=="key"&&(l[f]=o[f])}else l=o;return o=l.ref,{$$typeof:e,type:i,key:u,ref:o!==void 0?o:null,props:l}}return tc.Fragment=t,tc.jsx=n,tc.jsxs=n,tc}var J1;function Zk(){return J1||(J1=1,gg.exports=Xk()),gg.exports}var g=Zk(),yg={exports:{}},je={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ex;function Jk(){if(ex)return je;ex=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.iterator;function _(k){return k===null||typeof k!="object"?null:(k=v&&k[v]||k["@@iterator"],typeof k=="function"?k:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,I={};function C(k,X,le){this.props=k,this.context=X,this.refs=I,this.updater=le||b}C.prototype.isReactComponent={},C.prototype.setState=function(k,X){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,X,"setState")},C.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function O(){}O.prototype=C.prototype;function M(k,X,le){this.props=k,this.context=X,this.refs=I,this.updater=le||b}var R=M.prototype=new O;R.constructor=M,x(R,C.prototype),R.isPureReactComponent=!0;var D=Array.isArray,N={H:null,A:null,T:null,S:null,V:null},A=Object.prototype.hasOwnProperty;function P(k,X,le,ie,de,me){return le=me.ref,{$$typeof:e,type:k,key:X,ref:le!==void 0?le:null,props:me}}function F(k,X){return P(k.type,X,void 0,void 0,void 0,k.props)}function H(k){return typeof k=="object"&&k!==null&&k.$$typeof===e}function B(k){var X={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(le){return X[le]})}var z=/\/+/g;function G(k,X){return typeof k=="object"&&k!==null&&k.key!=null?B(""+k.key):X.toString(36)}function V(){}function te(k){switch(k.status){case"fulfilled":return k.value;case"rejected":throw k.reason;default:switch(typeof k.status=="string"?k.then(V,V):(k.status="pending",k.then(function(X){k.status==="pending"&&(k.status="fulfilled",k.value=X)},function(X){k.status==="pending"&&(k.status="rejected",k.reason=X)})),k.status){case"fulfilled":return k.value;case"rejected":throw k.reason}}throw k}function ue(k,X,le,ie,de){var me=typeof k;(me==="undefined"||me==="boolean")&&(k=null);var pe=!1;if(k===null)pe=!0;else switch(me){case"bigint":case"string":case"number":pe=!0;break;case"object":switch(k.$$typeof){case e:case t:pe=!0;break;case y:return pe=k._init,ue(pe(k._payload),X,le,ie,de)}}if(pe)return de=de(k),pe=ie===""?"."+G(k,0):ie,D(de)?(le="",pe!=null&&(le=pe.replace(z,"$&/")+"/"),ue(de,X,le,"",function(Oe){return Oe})):de!=null&&(H(de)&&(de=F(de,le+(de.key==null||k&&k.key===de.key?"":(""+de.key).replace(z,"$&/")+"/")+pe)),X.push(de)),1;pe=0;var Ie=ie===""?".":ie+":";if(D(k))for(var be=0;be<k.length;be++)ie=k[be],me=Ie+G(ie,be),pe+=ue(ie,X,le,me,de);else if(be=_(k),typeof be=="function")for(k=be.call(k),be=0;!(ie=k.next()).done;)ie=ie.value,me=Ie+G(ie,be++),pe+=ue(ie,X,le,me,de);else if(me==="object"){if(typeof k.then=="function")return ue(te(k),X,le,ie,de);throw X=String(k),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return pe}function j(k,X,le){if(k==null)return k;var ie=[],de=0;return ue(k,ie,"","",function(me){return X.call(le,me,de++)}),ie}function K(k){if(k._status===-1){var X=k._result;X=X(),X.then(function(le){(k._status===0||k._status===-1)&&(k._status=1,k._result=le)},function(le){(k._status===0||k._status===-1)&&(k._status=2,k._result=le)}),k._status===-1&&(k._status=0,k._result=X)}if(k._status===1)return k._result.default;throw k._result}var ne=typeof reportError=="function"?reportError:function(k){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof k=="object"&&k!==null&&typeof k.message=="string"?String(k.message):String(k),error:k});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",k);return}console.error(k)};function ae(){}return je.Children={map:j,forEach:function(k,X,le){j(k,function(){X.apply(this,arguments)},le)},count:function(k){var X=0;return j(k,function(){X++}),X},toArray:function(k){return j(k,function(X){return X})||[]},only:function(k){if(!H(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},je.Component=C,je.Fragment=n,je.Profiler=o,je.PureComponent=M,je.StrictMode=i,je.Suspense=p,je.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,je.__COMPILER_RUNTIME={__proto__:null,c:function(k){return N.H.useMemoCache(k)}},je.cache=function(k){return function(){return k.apply(null,arguments)}},je.cloneElement=function(k,X,le){if(k==null)throw Error("The argument must be a React element, but you passed "+k+".");var ie=x({},k.props),de=k.key,me=void 0;if(X!=null)for(pe in X.ref!==void 0&&(me=void 0),X.key!==void 0&&(de=""+X.key),X)!A.call(X,pe)||pe==="key"||pe==="__self"||pe==="__source"||pe==="ref"&&X.ref===void 0||(ie[pe]=X[pe]);var pe=arguments.length-2;if(pe===1)ie.children=le;else if(1<pe){for(var Ie=Array(pe),be=0;be<pe;be++)Ie[be]=arguments[be+2];ie.children=Ie}return P(k.type,de,void 0,void 0,me,ie)},je.createContext=function(k){return k={$$typeof:u,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null},k.Provider=k,k.Consumer={$$typeof:l,_context:k},k},je.createElement=function(k,X,le){var ie,de={},me=null;if(X!=null)for(ie in X.key!==void 0&&(me=""+X.key),X)A.call(X,ie)&&ie!=="key"&&ie!=="__self"&&ie!=="__source"&&(de[ie]=X[ie]);var pe=arguments.length-2;if(pe===1)de.children=le;else if(1<pe){for(var Ie=Array(pe),be=0;be<pe;be++)Ie[be]=arguments[be+2];de.children=Ie}if(k&&k.defaultProps)for(ie in pe=k.defaultProps,pe)de[ie]===void 0&&(de[ie]=pe[ie]);return P(k,me,void 0,void 0,null,de)},je.createRef=function(){return{current:null}},je.forwardRef=function(k){return{$$typeof:f,render:k}},je.isValidElement=H,je.lazy=function(k){return{$$typeof:y,_payload:{_status:-1,_result:k},_init:K}},je.memo=function(k,X){return{$$typeof:h,type:k,compare:X===void 0?null:X}},je.startTransition=function(k){var X=N.T,le={};N.T=le;try{var ie=k(),de=N.S;de!==null&&de(le,ie),typeof ie=="object"&&ie!==null&&typeof ie.then=="function"&&ie.then(ae,ne)}catch(me){ne(me)}finally{N.T=X}},je.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},je.use=function(k){return N.H.use(k)},je.useActionState=function(k,X,le){return N.H.useActionState(k,X,le)},je.useCallback=function(k,X){return N.H.useCallback(k,X)},je.useContext=function(k){return N.H.useContext(k)},je.useDebugValue=function(){},je.useDeferredValue=function(k,X){return N.H.useDeferredValue(k,X)},je.useEffect=function(k,X,le){var ie=N.H;if(typeof le=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ie.useEffect(k,X)},je.useId=function(){return N.H.useId()},je.useImperativeHandle=function(k,X,le){return N.H.useImperativeHandle(k,X,le)},je.useInsertionEffect=function(k,X){return N.H.useInsertionEffect(k,X)},je.useLayoutEffect=function(k,X){return N.H.useLayoutEffect(k,X)},je.useMemo=function(k,X){return N.H.useMemo(k,X)},je.useOptimistic=function(k,X){return N.H.useOptimistic(k,X)},je.useReducer=function(k,X,le){return N.H.useReducer(k,X,le)},je.useRef=function(k){return N.H.useRef(k)},je.useState=function(k){return N.H.useState(k)},je.useSyncExternalStore=function(k,X,le){return N.H.useSyncExternalStore(k,X,le)},je.useTransition=function(){return N.H.useTransition()},je.version="19.1.1",je}var tx;function Th(){return tx||(tx=1,yg.exports=Jk()),yg.exports}var E=Th();const dr=Kk(E);var vg={exports:{}},nc={},_g={exports:{}},bg={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nx;function eN(){return nx||(nx=1,(function(e){function t(j,K){var ne=j.length;j.push(K);e:for(;0<ne;){var ae=ne-1>>>1,k=j[ae];if(0<o(k,K))j[ae]=K,j[ne]=k,ne=ae;else break e}}function n(j){return j.length===0?null:j[0]}function i(j){if(j.length===0)return null;var K=j[0],ne=j.pop();if(ne!==K){j[0]=ne;e:for(var ae=0,k=j.length,X=k>>>1;ae<X;){var le=2*(ae+1)-1,ie=j[le],de=le+1,me=j[de];if(0>o(ie,ne))de<k&&0>o(me,ie)?(j[ae]=me,j[de]=ne,ae=de):(j[ae]=ie,j[le]=ne,ae=le);else if(de<k&&0>o(me,ne))j[ae]=me,j[de]=ne,ae=de;else break e}}return K}function o(j,K){var ne=j.sortIndex-K.sortIndex;return ne!==0?ne:j.id-K.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();e.unstable_now=function(){return u.now()-f}}var p=[],h=[],y=1,v=null,_=3,b=!1,x=!1,I=!1,C=!1,O=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function D(j){for(var K=n(h);K!==null;){if(K.callback===null)i(h);else if(K.startTime<=j)i(h),K.sortIndex=K.expirationTime,t(p,K);else break;K=n(h)}}function N(j){if(I=!1,D(j),!x)if(n(p)!==null)x=!0,A||(A=!0,G());else{var K=n(h);K!==null&&ue(N,K.startTime-j)}}var A=!1,P=-1,F=5,H=-1;function B(){return C?!0:!(e.unstable_now()-H<F)}function z(){if(C=!1,A){var j=e.unstable_now();H=j;var K=!0;try{e:{x=!1,I&&(I=!1,M(P),P=-1),b=!0;var ne=_;try{t:{for(D(j),v=n(p);v!==null&&!(v.expirationTime>j&&B());){var ae=v.callback;if(typeof ae=="function"){v.callback=null,_=v.priorityLevel;var k=ae(v.expirationTime<=j);if(j=e.unstable_now(),typeof k=="function"){v.callback=k,D(j),K=!0;break t}v===n(p)&&i(p),D(j)}else i(p);v=n(p)}if(v!==null)K=!0;else{var X=n(h);X!==null&&ue(N,X.startTime-j),K=!1}}break e}finally{v=null,_=ne,b=!1}K=void 0}}finally{K?G():A=!1}}}var G;if(typeof R=="function")G=function(){R(z)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,te=V.port2;V.port1.onmessage=z,G=function(){te.postMessage(null)}}else G=function(){O(z,0)};function ue(j,K){P=O(function(){j(e.unstable_now())},K)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return _},e.unstable_next=function(j){switch(_){case 1:case 2:case 3:var K=3;break;default:K=_}var ne=_;_=K;try{return j()}finally{_=ne}},e.unstable_requestPaint=function(){C=!0},e.unstable_runWithPriority=function(j,K){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var ne=_;_=j;try{return K()}finally{_=ne}},e.unstable_scheduleCallback=function(j,K,ne){var ae=e.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?ae+ne:ae):ne=ae,j){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=ne+k,j={id:y++,callback:K,priorityLevel:j,startTime:ne,expirationTime:k,sortIndex:-1},ne>ae?(j.sortIndex=ne,t(h,j),n(p)===null&&j===n(h)&&(I?(M(P),P=-1):I=!0,ue(N,ne-ae))):(j.sortIndex=k,t(p,j),x||b||(x=!0,A||(A=!0,G()))),j},e.unstable_shouldYield=B,e.unstable_wrapCallback=function(j){var K=_;return function(){var ne=_;_=K;try{return j.apply(this,arguments)}finally{_=ne}}}})(bg)),bg}var rx;function tN(){return rx||(rx=1,_g.exports=eN()),_g.exports}var Sg={exports:{}},on={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ix;function nN(){if(ix)return on;ix=1;var e=Th();function t(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)h+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var i={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function l(p,h,y){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:p,containerInfo:h,implementation:y}}var u=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return on.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,on.createPortal=function(p,h){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return l(p,h,null,y)},on.flushSync=function(p){var h=u.T,y=i.p;try{if(u.T=null,i.p=2,p)return p()}finally{u.T=h,i.p=y,i.d.f()}},on.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,i.d.C(p,h))},on.prefetchDNS=function(p){typeof p=="string"&&i.d.D(p)},on.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var y=h.as,v=f(y,h.crossOrigin),_=typeof h.integrity=="string"?h.integrity:void 0,b=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;y==="style"?i.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:b}):y==="script"&&i.d.X(p,{crossOrigin:v,integrity:_,fetchPriority:b,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},on.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var y=f(h.as,h.crossOrigin);i.d.M(p,{crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&i.d.M(p)},on.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var y=h.as,v=f(y,h.crossOrigin);i.d.L(p,y,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},on.preloadModule=function(p,h){if(typeof p=="string")if(h){var y=f(h.as,h.crossOrigin);i.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else i.d.m(p)},on.requestFormReset=function(p){i.d.r(p)},on.unstable_batchedUpdates=function(p,h){return p(h)},on.useFormState=function(p,h,y){return u.H.useFormState(p,h,y)},on.useFormStatus=function(){return u.H.useHostTransitionStatus()},on.version="19.1.1",on}var sx;function JT(){if(sx)return Sg.exports;sx=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),Sg.exports=nN(),Sg.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ox;function rN(){if(ox)return nc;ox=1;var e=tN(),t=Th(),n=JT();function i(r){var s="https://react.dev/errors/"+r;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function l(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function u(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function f(r){if(l(r)!==r)throw Error(i(188))}function p(r){var s=r.alternate;if(!s){if(s=l(r),s===null)throw Error(i(188));return s!==r?null:r}for(var a=r,c=s;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return f(d),r;if(m===c)return f(d),s;m=m.sibling}throw Error(i(188))}if(a.return!==c.return)a=d,c=m;else{for(var S=!1,w=d.child;w;){if(w===a){S=!0,a=d,c=m;break}if(w===c){S=!0,c=d,a=m;break}w=w.sibling}if(!S){for(w=m.child;w;){if(w===a){S=!0,a=m,c=d;break}if(w===c){S=!0,c=m,a=d;break}w=w.sibling}if(!S)throw Error(i(189))}}if(a.alternate!==c)throw Error(i(190))}if(a.tag!==3)throw Error(i(188));return a.stateNode.current===a?r:s}function h(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r;for(r=r.child;r!==null;){if(s=h(r),s!==null)return s;r=r.sibling}return null}var y=Object.assign,v=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),M=Symbol.for("react.consumer"),R=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),A=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),H=Symbol.for("react.activity"),B=Symbol.for("react.memo_cache_sentinel"),z=Symbol.iterator;function G(r){return r===null||typeof r!="object"?null:(r=z&&r[z]||r["@@iterator"],typeof r=="function"?r:null)}var V=Symbol.for("react.client.reference");function te(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===V?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case x:return"Fragment";case C:return"Profiler";case I:return"StrictMode";case N:return"Suspense";case A:return"SuspenseList";case H:return"Activity"}if(typeof r=="object")switch(r.$$typeof){case b:return"Portal";case R:return(r.displayName||"Context")+".Provider";case M:return(r._context.displayName||"Context")+".Consumer";case D:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case P:return s=r.displayName||null,s!==null?s:te(r.type)||"Memo";case F:s=r._payload,r=r._init;try{return te(r(s))}catch{}}return null}var ue=Array.isArray,j=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},ae=[],k=-1;function X(r){return{current:r}}function le(r){0>k||(r.current=ae[k],ae[k]=null,k--)}function ie(r,s){k++,ae[k]=r.current,r.current=s}var de=X(null),me=X(null),pe=X(null),Ie=X(null);function be(r,s){switch(ie(pe,s),ie(me,r),ie(de,null),s.nodeType){case 9:case 11:r=(r=s.documentElement)&&(r=r.namespaceURI)?C1(r):0;break;default:if(r=s.tagName,s=s.namespaceURI)s=C1(s),r=R1(s,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}le(de),ie(de,r)}function Oe(){le(de),le(me),le(pe)}function Ue(r){r.memoizedState!==null&&ie(Ie,r);var s=de.current,a=R1(s,r.type);s!==a&&(ie(me,r),ie(de,a))}function _t(r){me.current===r&&(le(de),le(me)),Ie.current===r&&(le(Ie),Kl._currentValue=ne)}var gt=Object.prototype.hasOwnProperty,Ln=e.unstable_scheduleCallback,Et=e.unstable_cancelCallback,Pn=e.unstable_shouldYield,$r=e.unstable_requestPaint,Yt=e.unstable_now,sl=e.unstable_getCurrentPriorityLevel,As=e.unstable_ImmediatePriority,Oo=e.unstable_UserBlockingPriority,ko=e.unstable_NormalPriority,Ur=e.unstable_LowPriority,Ci=e.unstable_IdlePriority,Du=e.log,ol=e.unstable_setDisableYieldValue,hn=null,bt=null;function sr(r){if(typeof Du=="function"&&ol(r),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(hn,r)}catch{}}var Qt=Math.clz32?Math.clz32:Ou,fp=Math.log,xr=Math.LN2;function Ou(r){return r>>>=0,r===0?32:31-(fp(r)/xr|0)|0}var Is=256,Ds=4194304;function zr(r){var s=r&42;if(s!==0)return s;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return r}}function Os(r,s,a){var c=r.pendingLanes;if(c===0)return 0;var d=0,m=r.suspendedLanes,S=r.pingedLanes;r=r.warmLanes;var w=c&134217727;return w!==0?(c=w&~m,c!==0?d=zr(c):(S&=w,S!==0?d=zr(S):a||(a=w&~r,a!==0&&(d=zr(a))))):(w=c&~m,w!==0?d=zr(w):S!==0?d=zr(S):a||(a=c&~r,a!==0&&(d=zr(a)))),d===0?0:s!==0&&s!==d&&(s&m)===0&&(m=d&-d,a=s&-s,m>=a||m===32&&(a&4194048)!==0)?s:d}function wr(r,s){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&s)===0}function ku(r,s){switch(r){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function No(){var r=Is;return Is<<=1,(Is&4194048)===0&&(Is=256),r}function Nu(){var r=Ds;return Ds<<=1,(Ds&62914560)===0&&(Ds=4194304),r}function Mo(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function ks(r,s){r.pendingLanes|=s,s!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function Mu(r,s,a,c,d,m){var S=r.pendingLanes;r.pendingLanes=a,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=a,r.entangledLanes&=a,r.errorRecoveryDisabledLanes&=a,r.shellSuspendCounter=0;var w=r.entanglements,L=r.expirationTimes,Q=r.hiddenUpdates;for(a=S&~a;0<a;){var re=31-Qt(a),oe=1<<re;w[re]=0,L[re]=-1;var Z=Q[re];if(Z!==null)for(Q[re]=null,re=0;re<Z.length;re++){var J=Z[re];J!==null&&(J.lane&=-536870913)}a&=~oe}c!==0&&Ns(r,c,0),m!==0&&d===0&&r.tag!==0&&(r.suspendedLanes|=m&~(S&~s))}function Ns(r,s,a){r.pendingLanes|=s,r.suspendedLanes&=~s;var c=31-Qt(s);r.entangledLanes|=s,r.entanglements[c]=r.entanglements[c]|1073741824|a&4194090}function Ms(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var c=31-Qt(a),d=1<<c;d&s|r[c]&s&&(r[c]|=s),a&=~d}}function al(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function ll(r){return r&=-r,2<r?8<r?(r&134217727)!==0?32:268435456:8:2}function $(){var r=K.p;return r!==0?r:(r=window.event,r===void 0?32:G1(r.type))}function W(r,s){var a=K.p;try{return K.p=r,s()}finally{K.p=a}}var ee=Math.random().toString(36).slice(2),ce="__reactFiber$"+ee,fe="__reactProps$"+ee,ye="__reactContainer$"+ee,xe="__reactEvents$"+ee,ve="__reactListeners$"+ee,Ee="__reactHandles$"+ee,Re="__reactResources$"+ee,_e="__reactMarker$"+ee;function Se(r){delete r[ce],delete r[fe],delete r[xe],delete r[ve],delete r[Ee]}function ze(r){var s=r[ce];if(s)return s;for(var a=r.parentNode;a;){if(s=a[ye]||a[ce]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=O1(r);r!==null;){if(a=r[ce])return a;r=O1(r)}return s}r=a,a=r.parentNode}return null}function Ze(r){if(r=r[ce]||r[ye]){var s=r.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return r}return null}function yt(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r.stateNode;throw Error(i(33))}function Tt(r){var s=r[Re];return s||(s=r[Re]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function Le(r){r[_e]=!0}var st=new Set,Er={};function wn(r,s){ln(r,s),ln(r+"Capture",s)}function ln(r,s){for(Er[r]=s,r=0;r<s.length;r++)st.add(s[r])}var jn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Lo={},Ri={};function Br(r){return gt.call(Ri,r)?!0:gt.call(Lo,r)?!1:jn.test(r)?Ri[r]=!0:(Lo[r]=!0,!1)}function Hr(r,s,a){if(Br(s))if(a===null)r.removeAttribute(s);else{switch(typeof a){case"undefined":case"function":case"symbol":r.removeAttribute(s);return;case"boolean":var c=s.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){r.removeAttribute(s);return}}r.setAttribute(s,""+a)}}function Fr(r,s,a){if(a===null)r.removeAttribute(s);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(s);return}r.setAttribute(s,""+a)}}function Pe(r,s,a,c){if(c===null)r.removeAttribute(a);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(a);return}r.setAttributeNS(s,a,""+c)}}var kt,qr;function pn(r){if(kt===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);kt=s&&s[1]||"",qr=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+kt+r+qr}var St=!1;function Ai(r,s){if(!r||St)return"";St=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(s){var oe=function(){throw Error()};if(Object.defineProperty(oe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(oe,[])}catch(J){var Z=J}Reflect.construct(r,[],oe)}else{try{oe.call()}catch(J){Z=J}r.call(oe.prototype)}}else{try{throw Error()}catch(J){Z=J}(oe=r())&&typeof oe.catch=="function"&&oe.catch(function(){})}}catch(J){if(J&&Z&&typeof J.stack=="string")return[J.stack,Z.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=c.DetermineComponentFrameRoot(),S=m[0],w=m[1];if(S&&w){var L=S.split(`
`),Q=w.split(`
`);for(d=c=0;c<L.length&&!L[c].includes("DetermineComponentFrameRoot");)c++;for(;d<Q.length&&!Q[d].includes("DetermineComponentFrameRoot");)d++;if(c===L.length||d===Q.length)for(c=L.length-1,d=Q.length-1;1<=c&&0<=d&&L[c]!==Q[d];)d--;for(;1<=c&&0<=d;c--,d--)if(L[c]!==Q[d]){if(c!==1||d!==1)do if(c--,d--,0>d||L[c]!==Q[d]){var re=`
`+L[c].replace(" at new "," at ");return r.displayName&&re.includes("<anonymous>")&&(re=re.replace("<anonymous>",r.displayName)),re}while(1<=c&&0<=d);break}}}finally{St=!1,Error.prepareStackTrace=a}return(a=r?r.displayName||r.name:"")?pn(a):""}function Lu(r){switch(r.tag){case 26:case 27:case 5:return pn(r.type);case 16:return pn("Lazy");case 13:return pn("Suspense");case 19:return pn("SuspenseList");case 0:case 15:return Ai(r.type,!1);case 11:return Ai(r.type.render,!1);case 1:return Ai(r.type,!0);case 31:return pn("Activity");default:return""}}function Pu(r){try{var s="";do s+=Lu(r),r=r.return;while(r);return s}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function $n(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Sb(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function VD(r){var s=Sb(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),c=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return d.call(this)},set:function(S){c=""+S,m.call(this,S)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(S){c=""+S},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function ju(r){r._valueTracker||(r._valueTracker=VD(r))}function xb(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return r&&(c=Sb(r)?r.checked?"true":"false":r.value),r=c,r!==a?(s.setValue(r),!0):!1}function $u(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}var GD=/[\n"\\]/g;function Un(r){return r.replace(GD,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function hp(r,s,a,c,d,m,S,w){r.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?r.type=S:r.removeAttribute("type"),s!=null?S==="number"?(s===0&&r.value===""||r.value!=s)&&(r.value=""+$n(s)):r.value!==""+$n(s)&&(r.value=""+$n(s)):S!=="submit"&&S!=="reset"||r.removeAttribute("value"),s!=null?pp(r,S,$n(s)):a!=null?pp(r,S,$n(a)):c!=null&&r.removeAttribute("value"),d==null&&m!=null&&(r.defaultChecked=!!m),d!=null&&(r.checked=d&&typeof d!="function"&&typeof d!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?r.name=""+$n(w):r.removeAttribute("name")}function wb(r,s,a,c,d,m,S,w){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(r.type=m),s!=null||a!=null){if(!(m!=="submit"&&m!=="reset"||s!=null))return;a=a!=null?""+$n(a):"",s=s!=null?""+$n(s):a,w||s===r.value||(r.value=s),r.defaultValue=s}c=c??d,c=typeof c!="function"&&typeof c!="symbol"&&!!c,r.checked=w?r.checked:!!c,r.defaultChecked=!!c,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(r.name=S)}function pp(r,s,a){s==="number"&&$u(r.ownerDocument)===r||r.defaultValue===""+a||(r.defaultValue=""+a)}function Po(r,s,a,c){if(r=r.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<r.length;a++)d=s.hasOwnProperty("$"+r[a].value),r[a].selected!==d&&(r[a].selected=d),d&&c&&(r[a].defaultSelected=!0)}else{for(a=""+$n(a),s=null,d=0;d<r.length;d++){if(r[d].value===a){r[d].selected=!0,c&&(r[d].defaultSelected=!0);return}s!==null||r[d].disabled||(s=r[d])}s!==null&&(s.selected=!0)}}function Eb(r,s,a){if(s!=null&&(s=""+$n(s),s!==r.value&&(r.value=s),a==null)){r.defaultValue!==s&&(r.defaultValue=s);return}r.defaultValue=a!=null?""+$n(a):""}function Tb(r,s,a,c){if(s==null){if(c!=null){if(a!=null)throw Error(i(92));if(ue(c)){if(1<c.length)throw Error(i(93));c=c[0]}a=c}a==null&&(a=""),s=a}a=$n(s),r.defaultValue=a,c=r.textContent,c===a&&c!==""&&c!==null&&(r.value=c)}function jo(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var WD=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Cb(r,s,a){var c=s.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?c?r.setProperty(s,""):s==="float"?r.cssFloat="":r[s]="":c?r.setProperty(s,a):typeof a!="number"||a===0||WD.has(s)?s==="float"?r.cssFloat=a:r[s]=(""+a).trim():r[s]=a+"px"}function Rb(r,s,a){if(s!=null&&typeof s!="object")throw Error(i(62));if(r=r.style,a!=null){for(var c in a)!a.hasOwnProperty(c)||s!=null&&s.hasOwnProperty(c)||(c.indexOf("--")===0?r.setProperty(c,""):c==="float"?r.cssFloat="":r[c]="");for(var d in s)c=s[d],s.hasOwnProperty(d)&&a[d]!==c&&Cb(r,d,c)}else for(var m in s)s.hasOwnProperty(m)&&Cb(r,m,s[m])}function mp(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var YD=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),QD=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Uu(r){return QD.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}var gp=null;function yp(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var $o=null,Uo=null;function Ab(r){var s=Ze(r);if(s&&(r=s.stateNode)){var a=r[fe]||null;e:switch(r=s.stateNode,s.type){case"input":if(hp(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Un(""+s)+'"][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==r&&c.form===r.form){var d=c[fe]||null;if(!d)throw Error(i(90));hp(c,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(s=0;s<a.length;s++)c=a[s],c.form===r.form&&xb(c)}break e;case"textarea":Eb(r,a.value,a.defaultValue);break e;case"select":s=a.value,s!=null&&Po(r,!!a.multiple,s,!1)}}}var vp=!1;function Ib(r,s,a){if(vp)return r(s,a);vp=!0;try{var c=r(s);return c}finally{if(vp=!1,($o!==null||Uo!==null)&&(Ed(),$o&&(s=$o,r=Uo,Uo=$o=null,Ab(s),r)))for(s=0;s<r.length;s++)Ab(r[s])}}function cl(r,s){var a=r.stateNode;if(a===null)return null;var c=a[fe]||null;if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(i(231,s,typeof a));return a}var Vr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_p=!1;if(Vr)try{var ul={};Object.defineProperty(ul,"passive",{get:function(){_p=!0}}),window.addEventListener("test",ul,ul),window.removeEventListener("test",ul,ul)}catch{_p=!1}var Ii=null,bp=null,zu=null;function Db(){if(zu)return zu;var r,s=bp,a=s.length,c,d="value"in Ii?Ii.value:Ii.textContent,m=d.length;for(r=0;r<a&&s[r]===d[r];r++);var S=a-r;for(c=1;c<=S&&s[a-c]===d[m-c];c++);return zu=d.slice(r,1<c?1-c:void 0)}function Bu(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Hu(){return!0}function Ob(){return!1}function mn(r){function s(a,c,d,m,S){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=S,this.currentTarget=null;for(var w in r)r.hasOwnProperty(w)&&(a=r[w],this[w]=a?a(m):m[w]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Hu:Ob,this.isPropagationStopped=Ob,this}return y(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Hu)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Hu)},persist:function(){},isPersistent:Hu}),s}var Ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fu=mn(Ls),dl=y({},Ls,{view:0,detail:0}),KD=mn(dl),Sp,xp,fl,qu=y({},dl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ep,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==fl&&(fl&&r.type==="mousemove"?(Sp=r.screenX-fl.screenX,xp=r.screenY-fl.screenY):xp=Sp=0,fl=r),Sp)},movementY:function(r){return"movementY"in r?r.movementY:xp}}),kb=mn(qu),XD=y({},qu,{dataTransfer:0}),ZD=mn(XD),JD=y({},dl,{relatedTarget:0}),wp=mn(JD),eO=y({},Ls,{animationName:0,elapsedTime:0,pseudoElement:0}),tO=mn(eO),nO=y({},Ls,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),rO=mn(nO),iO=y({},Ls,{data:0}),Nb=mn(iO),sO={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oO={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},aO={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lO(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=aO[r])?!!s[r]:!1}function Ep(){return lO}var cO=y({},dl,{key:function(r){if(r.key){var s=sO[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Bu(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?oO[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ep,charCode:function(r){return r.type==="keypress"?Bu(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Bu(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),uO=mn(cO),dO=y({},qu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mb=mn(dO),fO=y({},dl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ep}),hO=mn(fO),pO=y({},Ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),mO=mn(pO),gO=y({},qu,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),yO=mn(gO),vO=y({},Ls,{newState:0,oldState:0}),_O=mn(vO),bO=[9,13,27,32],Tp=Vr&&"CompositionEvent"in window,hl=null;Vr&&"documentMode"in document&&(hl=document.documentMode);var SO=Vr&&"TextEvent"in window&&!hl,Lb=Vr&&(!Tp||hl&&8<hl&&11>=hl),Pb=" ",jb=!1;function $b(r,s){switch(r){case"keyup":return bO.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ub(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var zo=!1;function xO(r,s){switch(r){case"compositionend":return Ub(s);case"keypress":return s.which!==32?null:(jb=!0,Pb);case"textInput":return r=s.data,r===Pb&&jb?null:r;default:return null}}function wO(r,s){if(zo)return r==="compositionend"||!Tp&&$b(r,s)?(r=Db(),zu=bp=Ii=null,zo=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Lb&&s.locale!=="ko"?null:s.data;default:return null}}var EO={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zb(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!EO[r.type]:s==="textarea"}function Bb(r,s,a,c){$o?Uo?Uo.push(c):Uo=[c]:$o=c,s=Dd(s,"onChange"),0<s.length&&(a=new Fu("onChange","change",null,a,c),r.push({event:a,listeners:s}))}var pl=null,ml=null;function TO(r){S1(r,0)}function Vu(r){var s=yt(r);if(xb(s))return r}function Hb(r,s){if(r==="change")return s}var Fb=!1;if(Vr){var Cp;if(Vr){var Rp="oninput"in document;if(!Rp){var qb=document.createElement("div");qb.setAttribute("oninput","return;"),Rp=typeof qb.oninput=="function"}Cp=Rp}else Cp=!1;Fb=Cp&&(!document.documentMode||9<document.documentMode)}function Vb(){pl&&(pl.detachEvent("onpropertychange",Gb),ml=pl=null)}function Gb(r){if(r.propertyName==="value"&&Vu(ml)){var s=[];Bb(s,ml,r,yp(r)),Ib(TO,s)}}function CO(r,s,a){r==="focusin"?(Vb(),pl=s,ml=a,pl.attachEvent("onpropertychange",Gb)):r==="focusout"&&Vb()}function RO(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Vu(ml)}function AO(r,s){if(r==="click")return Vu(s)}function IO(r,s){if(r==="input"||r==="change")return Vu(s)}function DO(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var En=typeof Object.is=="function"?Object.is:DO;function gl(r,s){if(En(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!gt.call(s,d)||!En(r[d],s[d]))return!1}return!0}function Wb(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Yb(r,s){var a=Wb(r);r=0;for(var c;a;){if(a.nodeType===3){if(c=r+a.textContent.length,r<=s&&c>=s)return{node:a,offset:s-r};r=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Wb(a)}}function Qb(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?Qb(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Kb(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var s=$u(r.document);s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=$u(r.document)}return s}function Ap(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}var OO=Vr&&"documentMode"in document&&11>=document.documentMode,Bo=null,Ip=null,yl=null,Dp=!1;function Xb(r,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Dp||Bo==null||Bo!==$u(c)||(c=Bo,"selectionStart"in c&&Ap(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),yl&&gl(yl,c)||(yl=c,c=Dd(Ip,"onSelect"),0<c.length&&(s=new Fu("onSelect","select",null,s,a),r.push({event:s,listeners:c}),s.target=Bo)))}function Ps(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var Ho={animationend:Ps("Animation","AnimationEnd"),animationiteration:Ps("Animation","AnimationIteration"),animationstart:Ps("Animation","AnimationStart"),transitionrun:Ps("Transition","TransitionRun"),transitionstart:Ps("Transition","TransitionStart"),transitioncancel:Ps("Transition","TransitionCancel"),transitionend:Ps("Transition","TransitionEnd")},Op={},Zb={};Vr&&(Zb=document.createElement("div").style,"AnimationEvent"in window||(delete Ho.animationend.animation,delete Ho.animationiteration.animation,delete Ho.animationstart.animation),"TransitionEvent"in window||delete Ho.transitionend.transition);function js(r){if(Op[r])return Op[r];if(!Ho[r])return r;var s=Ho[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in Zb)return Op[r]=s[a];return r}var Jb=js("animationend"),e0=js("animationiteration"),t0=js("animationstart"),kO=js("transitionrun"),NO=js("transitionstart"),MO=js("transitioncancel"),n0=js("transitionend"),r0=new Map,kp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");kp.push("scrollEnd");function or(r,s){r0.set(r,s),wn(s,[r])}var i0=new WeakMap;function zn(r,s){if(typeof r=="object"&&r!==null){var a=i0.get(r);return a!==void 0?a:(s={value:r,source:s,stack:Pu(s)},i0.set(r,s),s)}return{value:r,source:s,stack:Pu(s)}}var Bn=[],Fo=0,Np=0;function Gu(){for(var r=Fo,s=Np=Fo=0;s<r;){var a=Bn[s];Bn[s++]=null;var c=Bn[s];Bn[s++]=null;var d=Bn[s];Bn[s++]=null;var m=Bn[s];if(Bn[s++]=null,c!==null&&d!==null){var S=c.pending;S===null?d.next=d:(d.next=S.next,S.next=d),c.pending=d}m!==0&&s0(a,d,m)}}function Wu(r,s,a,c){Bn[Fo++]=r,Bn[Fo++]=s,Bn[Fo++]=a,Bn[Fo++]=c,Np|=c,r.lanes|=c,r=r.alternate,r!==null&&(r.lanes|=c)}function Mp(r,s,a,c){return Wu(r,s,a,c),Yu(r)}function qo(r,s){return Wu(r,null,null,s),Yu(r)}function s0(r,s,a){r.lanes|=a;var c=r.alternate;c!==null&&(c.lanes|=a);for(var d=!1,m=r.return;m!==null;)m.childLanes|=a,c=m.alternate,c!==null&&(c.childLanes|=a),m.tag===22&&(r=m.stateNode,r===null||r._visibility&1||(d=!0)),r=m,m=m.return;return r.tag===3?(m=r.stateNode,d&&s!==null&&(d=31-Qt(a),r=m.hiddenUpdates,c=r[d],c===null?r[d]=[s]:c.push(s),s.lane=a|536870912),m):null}function Yu(r){if(50<Hl)throw Hl=0,zm=null,Error(i(185));for(var s=r.return;s!==null;)r=s,s=r.return;return r.tag===3?r.stateNode:null}var Vo={};function LO(r,s,a,c){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(r,s,a,c){return new LO(r,s,a,c)}function Lp(r){return r=r.prototype,!(!r||!r.isReactComponent)}function Gr(r,s){var a=r.alternate;return a===null?(a=Tn(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&65011712,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a.refCleanup=r.refCleanup,a}function o0(r,s){r.flags&=65011714;var a=r.alternate;return a===null?(r.childLanes=0,r.lanes=s,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=a.childLanes,r.lanes=a.lanes,r.child=a.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=a.memoizedProps,r.memoizedState=a.memoizedState,r.updateQueue=a.updateQueue,r.type=a.type,s=a.dependencies,r.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),r}function Qu(r,s,a,c,d,m){var S=0;if(c=r,typeof r=="function")Lp(r)&&(S=1);else if(typeof r=="string")S=jk(r,a,de.current)?26:r==="html"||r==="head"||r==="body"?27:5;else e:switch(r){case H:return r=Tn(31,a,s,d),r.elementType=H,r.lanes=m,r;case x:return $s(a.children,d,m,s);case I:S=8,d|=24;break;case C:return r=Tn(12,a,s,d|2),r.elementType=C,r.lanes=m,r;case N:return r=Tn(13,a,s,d),r.elementType=N,r.lanes=m,r;case A:return r=Tn(19,a,s,d),r.elementType=A,r.lanes=m,r;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case O:case R:S=10;break e;case M:S=9;break e;case D:S=11;break e;case P:S=14;break e;case F:S=16,c=null;break e}S=29,a=Error(i(130,r===null?"null":typeof r,"")),c=null}return s=Tn(S,a,s,d),s.elementType=r,s.type=c,s.lanes=m,s}function $s(r,s,a,c){return r=Tn(7,r,c,s),r.lanes=a,r}function Pp(r,s,a){return r=Tn(6,r,null,s),r.lanes=a,r}function jp(r,s,a){return s=Tn(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}var Go=[],Wo=0,Ku=null,Xu=0,Hn=[],Fn=0,Us=null,Wr=1,Yr="";function zs(r,s){Go[Wo++]=Xu,Go[Wo++]=Ku,Ku=r,Xu=s}function a0(r,s,a){Hn[Fn++]=Wr,Hn[Fn++]=Yr,Hn[Fn++]=Us,Us=r;var c=Wr;r=Yr;var d=32-Qt(c)-1;c&=~(1<<d),a+=1;var m=32-Qt(s)+d;if(30<m){var S=d-d%5;m=(c&(1<<S)-1).toString(32),c>>=S,d-=S,Wr=1<<32-Qt(s)+d|a<<d|c,Yr=m+r}else Wr=1<<m|a<<d|c,Yr=r}function $p(r){r.return!==null&&(zs(r,1),a0(r,1,0))}function Up(r){for(;r===Ku;)Ku=Go[--Wo],Go[Wo]=null,Xu=Go[--Wo],Go[Wo]=null;for(;r===Us;)Us=Hn[--Fn],Hn[Fn]=null,Yr=Hn[--Fn],Hn[Fn]=null,Wr=Hn[--Fn],Hn[Fn]=null}var cn=null,Ct=null,Je=!1,Bs=null,Tr=!1,zp=Error(i(519));function Hs(r){var s=Error(i(418,""));throw bl(zn(s,r)),zp}function l0(r){var s=r.stateNode,a=r.type,c=r.memoizedProps;switch(s[ce]=r,s[fe]=c,a){case"dialog":We("cancel",s),We("close",s);break;case"iframe":case"object":case"embed":We("load",s);break;case"video":case"audio":for(a=0;a<ql.length;a++)We(ql[a],s);break;case"source":We("error",s);break;case"img":case"image":case"link":We("error",s),We("load",s);break;case"details":We("toggle",s);break;case"input":We("invalid",s),wb(s,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),ju(s);break;case"select":We("invalid",s);break;case"textarea":We("invalid",s),Tb(s,c.value,c.defaultValue,c.children),ju(s)}a=c.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||s.textContent===""+a||c.suppressHydrationWarning===!0||T1(s.textContent,a)?(c.popover!=null&&(We("beforetoggle",s),We("toggle",s)),c.onScroll!=null&&We("scroll",s),c.onScrollEnd!=null&&We("scrollend",s),c.onClick!=null&&(s.onclick=Od),s=!0):s=!1,s||Hs(r)}function c0(r){for(cn=r.return;cn;)switch(cn.tag){case 5:case 13:Tr=!1;return;case 27:case 3:Tr=!0;return;default:cn=cn.return}}function vl(r){if(r!==cn)return!1;if(!Je)return c0(r),Je=!0,!1;var s=r.tag,a;if((a=s!==3&&s!==27)&&((a=s===5)&&(a=r.type,a=!(a!=="form"&&a!=="button")||ng(r.type,r.memoizedProps)),a=!a),a&&Ct&&Hs(r),c0(r),s===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(i(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8)if(a=r.data,a==="/$"){if(s===0){Ct=lr(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++;r=r.nextSibling}Ct=null}}else s===27?(s=Ct,Vi(r.type)?(r=og,og=null,Ct=r):Ct=s):Ct=cn?lr(r.stateNode.nextSibling):null;return!0}function _l(){Ct=cn=null,Je=!1}function u0(){var r=Bs;return r!==null&&(vn===null?vn=r:vn.push.apply(vn,r),Bs=null),r}function bl(r){Bs===null?Bs=[r]:Bs.push(r)}var Bp=X(null),Fs=null,Qr=null;function Di(r,s,a){ie(Bp,s._currentValue),s._currentValue=a}function Kr(r){r._currentValue=Bp.current,le(Bp)}function Hp(r,s,a){for(;r!==null;){var c=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),r===a)break;r=r.return}}function Fp(r,s,a,c){var d=r.child;for(d!==null&&(d.return=r);d!==null;){var m=d.dependencies;if(m!==null){var S=d.child;m=m.firstContext;e:for(;m!==null;){var w=m;m=d;for(var L=0;L<s.length;L++)if(w.context===s[L]){m.lanes|=a,w=m.alternate,w!==null&&(w.lanes|=a),Hp(m.return,a,r),c||(S=null);break e}m=w.next}}else if(d.tag===18){if(S=d.return,S===null)throw Error(i(341));S.lanes|=a,m=S.alternate,m!==null&&(m.lanes|=a),Hp(S,a,r),S=null}else S=d.child;if(S!==null)S.return=d;else for(S=d;S!==null;){if(S===r){S=null;break}if(d=S.sibling,d!==null){d.return=S.return,S=d;break}S=S.return}d=S}}function Sl(r,s,a,c){r=null;for(var d=s,m=!1;d!==null;){if(!m){if((d.flags&524288)!==0)m=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var S=d.alternate;if(S===null)throw Error(i(387));if(S=S.memoizedProps,S!==null){var w=d.type;En(d.pendingProps.value,S.value)||(r!==null?r.push(w):r=[w])}}else if(d===Ie.current){if(S=d.alternate,S===null)throw Error(i(387));S.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(r!==null?r.push(Kl):r=[Kl])}d=d.return}r!==null&&Fp(s,r,a,c),s.flags|=262144}function Zu(r){for(r=r.firstContext;r!==null;){if(!En(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function qs(r){Fs=r,Qr=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function sn(r){return d0(Fs,r)}function Ju(r,s){return Fs===null&&qs(r),d0(r,s)}function d0(r,s){var a=s._currentValue;if(s={context:s,memoizedValue:a,next:null},Qr===null){if(r===null)throw Error(i(308));Qr=s,r.dependencies={lanes:0,firstContext:s},r.flags|=524288}else Qr=Qr.next=s;return a}var PO=typeof AbortController<"u"?AbortController:function(){var r=[],s=this.signal={aborted:!1,addEventListener:function(a,c){r.push(c)}};this.abort=function(){s.aborted=!0,r.forEach(function(a){return a()})}},jO=e.unstable_scheduleCallback,$O=e.unstable_NormalPriority,Pt={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qp(){return{controller:new PO,data:new Map,refCount:0}}function xl(r){r.refCount--,r.refCount===0&&jO($O,function(){r.controller.abort()})}var wl=null,Vp=0,Yo=0,Qo=null;function UO(r,s){if(wl===null){var a=wl=[];Vp=0,Yo=Wm(),Qo={status:"pending",value:void 0,then:function(c){a.push(c)}}}return Vp++,s.then(f0,f0),s}function f0(){if(--Vp===0&&wl!==null){Qo!==null&&(Qo.status="fulfilled");var r=wl;wl=null,Yo=0,Qo=null;for(var s=0;s<r.length;s++)(0,r[s])()}}function zO(r,s){var a=[],c={status:"pending",value:null,reason:null,then:function(d){a.push(d)}};return r.then(function(){c.status="fulfilled",c.value=s;for(var d=0;d<a.length;d++)(0,a[d])(s)},function(d){for(c.status="rejected",c.reason=d,d=0;d<a.length;d++)(0,a[d])(void 0)}),c}var h0=j.S;j.S=function(r,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&UO(r,s),h0!==null&&h0(r,s)};var Vs=X(null);function Gp(){var r=Vs.current;return r!==null?r:ft.pooledCache}function ed(r,s){s===null?ie(Vs,Vs.current):ie(Vs,s.pool)}function p0(){var r=Gp();return r===null?null:{parent:Pt._currentValue,pool:r}}var El=Error(i(460)),m0=Error(i(474)),td=Error(i(542)),Wp={then:function(){}};function g0(r){return r=r.status,r==="fulfilled"||r==="rejected"}function nd(){}function y0(r,s,a){switch(a=r[a],a===void 0?r.push(s):a!==s&&(s.then(nd,nd),s=a),s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,_0(r),r;default:if(typeof s.status=="string")s.then(nd,nd);else{if(r=ft,r!==null&&100<r.shellSuspendCounter)throw Error(i(482));r=s,r.status="pending",r.then(function(c){if(s.status==="pending"){var d=s;d.status="fulfilled",d.value=c}},function(c){if(s.status==="pending"){var d=s;d.status="rejected",d.reason=c}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,_0(r),r}throw Tl=s,El}}var Tl=null;function v0(){if(Tl===null)throw Error(i(459));var r=Tl;return Tl=null,r}function _0(r){if(r===El||r===td)throw Error(i(483))}var Oi=!1;function Yp(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Qp(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function ki(r){return{lane:r,tag:0,payload:null,callback:null,next:null}}function Ni(r,s,a){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,(rt&2)!==0){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,s=Yu(r),s0(r,null,a),s}return Wu(r,c,s,a),Yu(r)}function Cl(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194048)!==0)){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,Ms(r,a)}}function Kp(r,s){var a=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};m===null?d=m=S:m=m.next=S,a=a.next}while(a!==null);m===null?d=m=s:m=m.next=s}else d=m=s;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,callbacks:c.callbacks},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}var Xp=!1;function Rl(){if(Xp){var r=Qo;if(r!==null)throw r}}function Al(r,s,a,c){Xp=!1;var d=r.updateQueue;Oi=!1;var m=d.firstBaseUpdate,S=d.lastBaseUpdate,w=d.shared.pending;if(w!==null){d.shared.pending=null;var L=w,Q=L.next;L.next=null,S===null?m=Q:S.next=Q,S=L;var re=r.alternate;re!==null&&(re=re.updateQueue,w=re.lastBaseUpdate,w!==S&&(w===null?re.firstBaseUpdate=Q:w.next=Q,re.lastBaseUpdate=L))}if(m!==null){var oe=d.baseState;S=0,re=Q=L=null,w=m;do{var Z=w.lane&-536870913,J=Z!==w.lane;if(J?(Qe&Z)===Z:(c&Z)===Z){Z!==0&&Z===Yo&&(Xp=!0),re!==null&&(re=re.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var Me=r,Ae=w;Z=s;var lt=a;switch(Ae.tag){case 1:if(Me=Ae.payload,typeof Me=="function"){oe=Me.call(lt,oe,Z);break e}oe=Me;break e;case 3:Me.flags=Me.flags&-65537|128;case 0:if(Me=Ae.payload,Z=typeof Me=="function"?Me.call(lt,oe,Z):Me,Z==null)break e;oe=y({},oe,Z);break e;case 2:Oi=!0}}Z=w.callback,Z!==null&&(r.flags|=64,J&&(r.flags|=8192),J=d.callbacks,J===null?d.callbacks=[Z]:J.push(Z))}else J={lane:Z,tag:w.tag,payload:w.payload,callback:w.callback,next:null},re===null?(Q=re=J,L=oe):re=re.next=J,S|=Z;if(w=w.next,w===null){if(w=d.shared.pending,w===null)break;J=w,w=J.next,J.next=null,d.lastBaseUpdate=J,d.shared.pending=null}}while(!0);re===null&&(L=oe),d.baseState=L,d.firstBaseUpdate=Q,d.lastBaseUpdate=re,m===null&&(d.shared.lanes=0),Bi|=S,r.lanes=S,r.memoizedState=oe}}function b0(r,s){if(typeof r!="function")throw Error(i(191,r));r.call(s)}function S0(r,s){var a=r.callbacks;if(a!==null)for(r.callbacks=null,r=0;r<a.length;r++)b0(a[r],s)}var Ko=X(null),rd=X(0);function x0(r,s){r=ri,ie(rd,r),ie(Ko,s),ri=r|s.baseLanes}function Zp(){ie(rd,ri),ie(Ko,Ko.current)}function Jp(){ri=rd.current,le(Ko),le(rd)}var Mi=0,He=null,ot=null,Nt=null,id=!1,Xo=!1,Gs=!1,sd=0,Il=0,Zo=null,BO=0;function Dt(){throw Error(i(321))}function em(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!En(r[a],s[a]))return!1;return!0}function tm(r,s,a,c,d,m){return Mi=m,He=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,j.H=r===null||r.memoizedState===null?sS:oS,Gs=!1,m=a(c,d),Gs=!1,Xo&&(m=E0(s,a,c,d)),w0(r),m}function w0(r){j.H=dd;var s=ot!==null&&ot.next!==null;if(Mi=0,Nt=ot=He=null,id=!1,Il=0,Zo=null,s)throw Error(i(300));r===null||zt||(r=r.dependencies,r!==null&&Zu(r)&&(zt=!0))}function E0(r,s,a,c){He=r;var d=0;do{if(Xo&&(Zo=null),Il=0,Xo=!1,25<=d)throw Error(i(301));if(d+=1,Nt=ot=null,r.updateQueue!=null){var m=r.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}j.H=YO,m=s(a,c)}while(Xo);return m}function HO(){var r=j.H,s=r.useState()[0];return s=typeof s.then=="function"?Dl(s):s,r=r.useState()[0],(ot!==null?ot.memoizedState:null)!==r&&(He.flags|=1024),s}function nm(){var r=sd!==0;return sd=0,r}function rm(r,s,a){s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~a}function im(r){if(id){for(r=r.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}id=!1}Mi=0,Nt=ot=He=null,Xo=!1,Il=sd=0,Zo=null}function gn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?He.memoizedState=Nt=r:Nt=Nt.next=r,Nt}function Mt(){if(ot===null){var r=He.alternate;r=r!==null?r.memoizedState:null}else r=ot.next;var s=Nt===null?He.memoizedState:Nt.next;if(s!==null)Nt=s,ot=r;else{if(r===null)throw He.alternate===null?Error(i(467)):Error(i(310));ot=r,r={memoizedState:ot.memoizedState,baseState:ot.baseState,baseQueue:ot.baseQueue,queue:ot.queue,next:null},Nt===null?He.memoizedState=Nt=r:Nt=Nt.next=r}return Nt}function sm(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Dl(r){var s=Il;return Il+=1,Zo===null&&(Zo=[]),r=y0(Zo,r,s),s=He,(Nt===null?s.memoizedState:Nt.next)===null&&(s=s.alternate,j.H=s===null||s.memoizedState===null?sS:oS),r}function od(r){if(r!==null&&typeof r=="object"){if(typeof r.then=="function")return Dl(r);if(r.$$typeof===R)return sn(r)}throw Error(i(438,String(r)))}function om(r){var s=null,a=He.updateQueue;if(a!==null&&(s=a.memoCache),s==null){var c=He.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(s={data:c.data.map(function(d){return d.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),a===null&&(a=sm(),He.updateQueue=a),a.memoCache=s,a=s.data[s.index],a===void 0)for(a=s.data[s.index]=Array(r),c=0;c<r;c++)a[c]=B;return s.index++,a}function Xr(r,s){return typeof s=="function"?s(r):s}function ad(r){var s=Mt();return am(s,ot,r)}function am(r,s,a){var c=r.queue;if(c===null)throw Error(i(311));c.lastRenderedReducer=a;var d=r.baseQueue,m=c.pending;if(m!==null){if(d!==null){var S=d.next;d.next=m.next,m.next=S}s.baseQueue=d=m,c.pending=null}if(m=r.baseState,d===null)r.memoizedState=m;else{s=d.next;var w=S=null,L=null,Q=s,re=!1;do{var oe=Q.lane&-536870913;if(oe!==Q.lane?(Qe&oe)===oe:(Mi&oe)===oe){var Z=Q.revertLane;if(Z===0)L!==null&&(L=L.next={lane:0,revertLane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),oe===Yo&&(re=!0);else if((Mi&Z)===Z){Q=Q.next,Z===Yo&&(re=!0);continue}else oe={lane:0,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},L===null?(w=L=oe,S=m):L=L.next=oe,He.lanes|=Z,Bi|=Z;oe=Q.action,Gs&&a(m,oe),m=Q.hasEagerState?Q.eagerState:a(m,oe)}else Z={lane:oe,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},L===null?(w=L=Z,S=m):L=L.next=Z,He.lanes|=oe,Bi|=oe;Q=Q.next}while(Q!==null&&Q!==s);if(L===null?S=m:L.next=w,!En(m,r.memoizedState)&&(zt=!0,re&&(a=Qo,a!==null)))throw a;r.memoizedState=m,r.baseState=S,r.baseQueue=L,c.lastRenderedState=m}return d===null&&(c.lanes=0),[r.memoizedState,c.dispatch]}function lm(r){var s=Mt(),a=s.queue;if(a===null)throw Error(i(311));a.lastRenderedReducer=r;var c=a.dispatch,d=a.pending,m=s.memoizedState;if(d!==null){a.pending=null;var S=d=d.next;do m=r(m,S.action),S=S.next;while(S!==d);En(m,s.memoizedState)||(zt=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),a.lastRenderedState=m}return[m,c]}function T0(r,s,a){var c=He,d=Mt(),m=Je;if(m){if(a===void 0)throw Error(i(407));a=a()}else a=s();var S=!En((ot||d).memoizedState,a);S&&(d.memoizedState=a,zt=!0),d=d.queue;var w=A0.bind(null,c,d,r);if(Ol(2048,8,w,[r]),d.getSnapshot!==s||S||Nt!==null&&Nt.memoizedState.tag&1){if(c.flags|=2048,Jo(9,ld(),R0.bind(null,c,d,a,s),null),ft===null)throw Error(i(349));m||(Mi&124)!==0||C0(c,s,a)}return a}function C0(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=He.updateQueue,s===null?(s=sm(),He.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function R0(r,s,a,c){s.value=a,s.getSnapshot=c,I0(s)&&D0(r)}function A0(r,s,a){return a(function(){I0(s)&&D0(r)})}function I0(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!En(r,a)}catch{return!0}}function D0(r){var s=qo(r,2);s!==null&&Dn(s,r,2)}function cm(r){var s=gn();if(typeof r=="function"){var a=r;if(r=a(),Gs){sr(!0);try{a()}finally{sr(!1)}}}return s.memoizedState=s.baseState=r,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xr,lastRenderedState:r},s}function O0(r,s,a,c){return r.baseState=a,am(r,ot,typeof c=="function"?c:Xr)}function FO(r,s,a,c,d){if(ud(r))throw Error(i(485));if(r=s.action,r!==null){var m={payload:d,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){m.listeners.push(S)}};j.T!==null?a(!0):m.isTransition=!1,c(m),a=s.pending,a===null?(m.next=s.pending=m,k0(s,m)):(m.next=a.next,s.pending=a.next=m)}}function k0(r,s){var a=s.action,c=s.payload,d=r.state;if(s.isTransition){var m=j.T,S={};j.T=S;try{var w=a(d,c),L=j.S;L!==null&&L(S,w),N0(r,s,w)}catch(Q){um(r,s,Q)}finally{j.T=m}}else try{m=a(d,c),N0(r,s,m)}catch(Q){um(r,s,Q)}}function N0(r,s,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(c){M0(r,s,c)},function(c){return um(r,s,c)}):M0(r,s,a)}function M0(r,s,a){s.status="fulfilled",s.value=a,L0(s),r.state=a,s=r.pending,s!==null&&(a=s.next,a===s?r.pending=null:(a=a.next,s.next=a,k0(r,a)))}function um(r,s,a){var c=r.pending;if(r.pending=null,c!==null){c=c.next;do s.status="rejected",s.reason=a,L0(s),s=s.next;while(s!==c)}r.action=null}function L0(r){r=r.listeners;for(var s=0;s<r.length;s++)(0,r[s])()}function P0(r,s){return s}function j0(r,s){if(Je){var a=ft.formState;if(a!==null){e:{var c=He;if(Je){if(Ct){t:{for(var d=Ct,m=Tr;d.nodeType!==8;){if(!m){d=null;break t}if(d=lr(d.nextSibling),d===null){d=null;break t}}m=d.data,d=m==="F!"||m==="F"?d:null}if(d){Ct=lr(d.nextSibling),c=d.data==="F!";break e}}Hs(c)}c=!1}c&&(s=a[0])}}return a=gn(),a.memoizedState=a.baseState=s,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:P0,lastRenderedState:s},a.queue=c,a=nS.bind(null,He,c),c.dispatch=a,c=cm(!1),m=mm.bind(null,He,!1,c.queue),c=gn(),d={state:s,dispatch:null,action:r,pending:null},c.queue=d,a=FO.bind(null,He,d,m,a),d.dispatch=a,c.memoizedState=r,[s,a,!1]}function $0(r){var s=Mt();return U0(s,ot,r)}function U0(r,s,a){if(s=am(r,s,P0)[0],r=ad(Xr)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var c=Dl(s)}catch(S){throw S===El?td:S}else c=s;s=Mt();var d=s.queue,m=d.dispatch;return a!==s.memoizedState&&(He.flags|=2048,Jo(9,ld(),qO.bind(null,d,a),null)),[c,m,r]}function qO(r,s){r.action=s}function z0(r){var s=Mt(),a=ot;if(a!==null)return U0(s,a,r);Mt(),s=s.memoizedState,a=Mt();var c=a.queue.dispatch;return a.memoizedState=r,[s,c,!1]}function Jo(r,s,a,c){return r={tag:r,create:a,deps:c,inst:s,next:null},s=He.updateQueue,s===null&&(s=sm(),He.updateQueue=s),a=s.lastEffect,a===null?s.lastEffect=r.next=r:(c=a.next,a.next=r,r.next=c,s.lastEffect=r),r}function ld(){return{destroy:void 0,resource:void 0}}function B0(){return Mt().memoizedState}function cd(r,s,a,c){var d=gn();c=c===void 0?null:c,He.flags|=r,d.memoizedState=Jo(1|s,ld(),a,c)}function Ol(r,s,a,c){var d=Mt();c=c===void 0?null:c;var m=d.memoizedState.inst;ot!==null&&c!==null&&em(c,ot.memoizedState.deps)?d.memoizedState=Jo(s,m,a,c):(He.flags|=r,d.memoizedState=Jo(1|s,m,a,c))}function H0(r,s){cd(8390656,8,r,s)}function F0(r,s){Ol(2048,8,r,s)}function q0(r,s){return Ol(4,2,r,s)}function V0(r,s){return Ol(4,4,r,s)}function G0(r,s){if(typeof s=="function"){r=r();var a=s(r);return function(){typeof a=="function"?a():s(null)}}if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function W0(r,s,a){a=a!=null?a.concat([r]):null,Ol(4,4,G0.bind(null,s,r),a)}function dm(){}function Y0(r,s){var a=Mt();s=s===void 0?null:s;var c=a.memoizedState;return s!==null&&em(s,c[1])?c[0]:(a.memoizedState=[r,s],r)}function Q0(r,s){var a=Mt();s=s===void 0?null:s;var c=a.memoizedState;if(s!==null&&em(s,c[1]))return c[0];if(c=r(),Gs){sr(!0);try{r()}finally{sr(!1)}}return a.memoizedState=[c,s],c}function fm(r,s,a){return a===void 0||(Mi&1073741824)!==0?r.memoizedState=s:(r.memoizedState=a,r=ZS(),He.lanes|=r,Bi|=r,a)}function K0(r,s,a,c){return En(a,s)?a:Ko.current!==null?(r=fm(r,a,c),En(r,s)||(zt=!0),r):(Mi&42)===0?(zt=!0,r.memoizedState=a):(r=ZS(),He.lanes|=r,Bi|=r,s)}function X0(r,s,a,c,d){var m=K.p;K.p=m!==0&&8>m?m:8;var S=j.T,w={};j.T=w,mm(r,!1,s,a);try{var L=d(),Q=j.S;if(Q!==null&&Q(w,L),L!==null&&typeof L=="object"&&typeof L.then=="function"){var re=zO(L,c);kl(r,s,re,In(r))}else kl(r,s,c,In(r))}catch(oe){kl(r,s,{then:function(){},status:"rejected",reason:oe},In())}finally{K.p=m,j.T=S}}function VO(){}function hm(r,s,a,c){if(r.tag!==5)throw Error(i(476));var d=Z0(r).queue;X0(r,d,s,ne,a===null?VO:function(){return J0(r),a(c)})}function Z0(r){var s=r.memoizedState;if(s!==null)return s;s={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xr,lastRenderedState:ne},next:null};var a={};return s.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xr,lastRenderedState:a},next:null},r.memoizedState=s,r=r.alternate,r!==null&&(r.memoizedState=s),s}function J0(r){var s=Z0(r).next.queue;kl(r,s,{},In())}function pm(){return sn(Kl)}function eS(){return Mt().memoizedState}function tS(){return Mt().memoizedState}function GO(r){for(var s=r.return;s!==null;){switch(s.tag){case 24:case 3:var a=In();r=ki(a);var c=Ni(s,r,a);c!==null&&(Dn(c,s,a),Cl(c,s,a)),s={cache:qp()},r.payload=s;return}s=s.return}}function WO(r,s,a){var c=In();a={lane:c,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},ud(r)?rS(s,a):(a=Mp(r,s,a,c),a!==null&&(Dn(a,r,c),iS(a,s,c)))}function nS(r,s,a){var c=In();kl(r,s,a,c)}function kl(r,s,a,c){var d={lane:c,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(ud(r))rS(s,d);else{var m=r.alternate;if(r.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var S=s.lastRenderedState,w=m(S,a);if(d.hasEagerState=!0,d.eagerState=w,En(w,S))return Wu(r,s,d,0),ft===null&&Gu(),!1}catch{}finally{}if(a=Mp(r,s,d,c),a!==null)return Dn(a,r,c),iS(a,s,c),!0}return!1}function mm(r,s,a,c){if(c={lane:2,revertLane:Wm(),action:c,hasEagerState:!1,eagerState:null,next:null},ud(r)){if(s)throw Error(i(479))}else s=Mp(r,a,c,2),s!==null&&Dn(s,r,2)}function ud(r){var s=r.alternate;return r===He||s!==null&&s===He}function rS(r,s){Xo=id=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function iS(r,s,a){if((a&4194048)!==0){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,Ms(r,a)}}var dd={readContext:sn,use:od,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useLayoutEffect:Dt,useInsertionEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useSyncExternalStore:Dt,useId:Dt,useHostTransitionStatus:Dt,useFormState:Dt,useActionState:Dt,useOptimistic:Dt,useMemoCache:Dt,useCacheRefresh:Dt},sS={readContext:sn,use:od,useCallback:function(r,s){return gn().memoizedState=[r,s===void 0?null:s],r},useContext:sn,useEffect:H0,useImperativeHandle:function(r,s,a){a=a!=null?a.concat([r]):null,cd(4194308,4,G0.bind(null,s,r),a)},useLayoutEffect:function(r,s){return cd(4194308,4,r,s)},useInsertionEffect:function(r,s){cd(4,2,r,s)},useMemo:function(r,s){var a=gn();s=s===void 0?null:s;var c=r();if(Gs){sr(!0);try{r()}finally{sr(!1)}}return a.memoizedState=[c,s],c},useReducer:function(r,s,a){var c=gn();if(a!==void 0){var d=a(s);if(Gs){sr(!0);try{a(s)}finally{sr(!1)}}}else d=s;return c.memoizedState=c.baseState=d,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:d},c.queue=r,r=r.dispatch=WO.bind(null,He,r),[c.memoizedState,r]},useRef:function(r){var s=gn();return r={current:r},s.memoizedState=r},useState:function(r){r=cm(r);var s=r.queue,a=nS.bind(null,He,s);return s.dispatch=a,[r.memoizedState,a]},useDebugValue:dm,useDeferredValue:function(r,s){var a=gn();return fm(a,r,s)},useTransition:function(){var r=cm(!1);return r=X0.bind(null,He,r.queue,!0,!1),gn().memoizedState=r,[!1,r]},useSyncExternalStore:function(r,s,a){var c=He,d=gn();if(Je){if(a===void 0)throw Error(i(407));a=a()}else{if(a=s(),ft===null)throw Error(i(349));(Qe&124)!==0||C0(c,s,a)}d.memoizedState=a;var m={value:a,getSnapshot:s};return d.queue=m,H0(A0.bind(null,c,m,r),[r]),c.flags|=2048,Jo(9,ld(),R0.bind(null,c,m,a,s),null),a},useId:function(){var r=gn(),s=ft.identifierPrefix;if(Je){var a=Yr,c=Wr;a=(c&~(1<<32-Qt(c)-1)).toString(32)+a,s="«"+s+"R"+a,a=sd++,0<a&&(s+="H"+a.toString(32)),s+="»"}else a=BO++,s="«"+s+"r"+a.toString(32)+"»";return r.memoizedState=s},useHostTransitionStatus:pm,useFormState:j0,useActionState:j0,useOptimistic:function(r){var s=gn();s.memoizedState=s.baseState=r;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=a,s=mm.bind(null,He,!0,a),a.dispatch=s,[r,s]},useMemoCache:om,useCacheRefresh:function(){return gn().memoizedState=GO.bind(null,He)}},oS={readContext:sn,use:od,useCallback:Y0,useContext:sn,useEffect:F0,useImperativeHandle:W0,useInsertionEffect:q0,useLayoutEffect:V0,useMemo:Q0,useReducer:ad,useRef:B0,useState:function(){return ad(Xr)},useDebugValue:dm,useDeferredValue:function(r,s){var a=Mt();return K0(a,ot.memoizedState,r,s)},useTransition:function(){var r=ad(Xr)[0],s=Mt().memoizedState;return[typeof r=="boolean"?r:Dl(r),s]},useSyncExternalStore:T0,useId:eS,useHostTransitionStatus:pm,useFormState:$0,useActionState:$0,useOptimistic:function(r,s){var a=Mt();return O0(a,ot,r,s)},useMemoCache:om,useCacheRefresh:tS},YO={readContext:sn,use:od,useCallback:Y0,useContext:sn,useEffect:F0,useImperativeHandle:W0,useInsertionEffect:q0,useLayoutEffect:V0,useMemo:Q0,useReducer:lm,useRef:B0,useState:function(){return lm(Xr)},useDebugValue:dm,useDeferredValue:function(r,s){var a=Mt();return ot===null?fm(a,r,s):K0(a,ot.memoizedState,r,s)},useTransition:function(){var r=lm(Xr)[0],s=Mt().memoizedState;return[typeof r=="boolean"?r:Dl(r),s]},useSyncExternalStore:T0,useId:eS,useHostTransitionStatus:pm,useFormState:z0,useActionState:z0,useOptimistic:function(r,s){var a=Mt();return ot!==null?O0(a,ot,r,s):(a.baseState=r,[r,a.queue.dispatch])},useMemoCache:om,useCacheRefresh:tS},ea=null,Nl=0;function fd(r){var s=Nl;return Nl+=1,ea===null&&(ea=[]),y0(ea,r,s)}function Ml(r,s){s=s.props.ref,r.ref=s!==void 0?s:null}function hd(r,s){throw s.$$typeof===v?Error(i(525)):(r=Object.prototype.toString.call(s),Error(i(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r)))}function aS(r){var s=r._init;return s(r._payload)}function lS(r){function s(q,U){if(r){var Y=q.deletions;Y===null?(q.deletions=[U],q.flags|=16):Y.push(U)}}function a(q,U){if(!r)return null;for(;U!==null;)s(q,U),U=U.sibling;return null}function c(q){for(var U=new Map;q!==null;)q.key!==null?U.set(q.key,q):U.set(q.index,q),q=q.sibling;return U}function d(q,U){return q=Gr(q,U),q.index=0,q.sibling=null,q}function m(q,U,Y){return q.index=Y,r?(Y=q.alternate,Y!==null?(Y=Y.index,Y<U?(q.flags|=67108866,U):Y):(q.flags|=67108866,U)):(q.flags|=1048576,U)}function S(q){return r&&q.alternate===null&&(q.flags|=67108866),q}function w(q,U,Y,se){return U===null||U.tag!==6?(U=Pp(Y,q.mode,se),U.return=q,U):(U=d(U,Y),U.return=q,U)}function L(q,U,Y,se){var ge=Y.type;return ge===x?re(q,U,Y.props.children,se,Y.key):U!==null&&(U.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===F&&aS(ge)===U.type)?(U=d(U,Y.props),Ml(U,Y),U.return=q,U):(U=Qu(Y.type,Y.key,Y.props,null,q.mode,se),Ml(U,Y),U.return=q,U)}function Q(q,U,Y,se){return U===null||U.tag!==4||U.stateNode.containerInfo!==Y.containerInfo||U.stateNode.implementation!==Y.implementation?(U=jp(Y,q.mode,se),U.return=q,U):(U=d(U,Y.children||[]),U.return=q,U)}function re(q,U,Y,se,ge){return U===null||U.tag!==7?(U=$s(Y,q.mode,se,ge),U.return=q,U):(U=d(U,Y),U.return=q,U)}function oe(q,U,Y){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return U=Pp(""+U,q.mode,Y),U.return=q,U;if(typeof U=="object"&&U!==null){switch(U.$$typeof){case _:return Y=Qu(U.type,U.key,U.props,null,q.mode,Y),Ml(Y,U),Y.return=q,Y;case b:return U=jp(U,q.mode,Y),U.return=q,U;case F:var se=U._init;return U=se(U._payload),oe(q,U,Y)}if(ue(U)||G(U))return U=$s(U,q.mode,Y,null),U.return=q,U;if(typeof U.then=="function")return oe(q,fd(U),Y);if(U.$$typeof===R)return oe(q,Ju(q,U),Y);hd(q,U)}return null}function Z(q,U,Y,se){var ge=U!==null?U.key:null;if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return ge!==null?null:w(q,U,""+Y,se);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case _:return Y.key===ge?L(q,U,Y,se):null;case b:return Y.key===ge?Q(q,U,Y,se):null;case F:return ge=Y._init,Y=ge(Y._payload),Z(q,U,Y,se)}if(ue(Y)||G(Y))return ge!==null?null:re(q,U,Y,se,null);if(typeof Y.then=="function")return Z(q,U,fd(Y),se);if(Y.$$typeof===R)return Z(q,U,Ju(q,Y),se);hd(q,Y)}return null}function J(q,U,Y,se,ge){if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return q=q.get(Y)||null,w(U,q,""+se,ge);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case _:return q=q.get(se.key===null?Y:se.key)||null,L(U,q,se,ge);case b:return q=q.get(se.key===null?Y:se.key)||null,Q(U,q,se,ge);case F:var Fe=se._init;return se=Fe(se._payload),J(q,U,Y,se,ge)}if(ue(se)||G(se))return q=q.get(Y)||null,re(U,q,se,ge,null);if(typeof se.then=="function")return J(q,U,Y,fd(se),ge);if(se.$$typeof===R)return J(q,U,Y,Ju(U,se),ge);hd(U,se)}return null}function Me(q,U,Y,se){for(var ge=null,Fe=null,we=U,De=U=0,Ht=null;we!==null&&De<Y.length;De++){we.index>De?(Ht=we,we=null):Ht=we.sibling;var Ke=Z(q,we,Y[De],se);if(Ke===null){we===null&&(we=Ht);break}r&&we&&Ke.alternate===null&&s(q,we),U=m(Ke,U,De),Fe===null?ge=Ke:Fe.sibling=Ke,Fe=Ke,we=Ht}if(De===Y.length)return a(q,we),Je&&zs(q,De),ge;if(we===null){for(;De<Y.length;De++)we=oe(q,Y[De],se),we!==null&&(U=m(we,U,De),Fe===null?ge=we:Fe.sibling=we,Fe=we);return Je&&zs(q,De),ge}for(we=c(we);De<Y.length;De++)Ht=J(we,q,De,Y[De],se),Ht!==null&&(r&&Ht.alternate!==null&&we.delete(Ht.key===null?De:Ht.key),U=m(Ht,U,De),Fe===null?ge=Ht:Fe.sibling=Ht,Fe=Ht);return r&&we.forEach(function(Ki){return s(q,Ki)}),Je&&zs(q,De),ge}function Ae(q,U,Y,se){if(Y==null)throw Error(i(151));for(var ge=null,Fe=null,we=U,De=U=0,Ht=null,Ke=Y.next();we!==null&&!Ke.done;De++,Ke=Y.next()){we.index>De?(Ht=we,we=null):Ht=we.sibling;var Ki=Z(q,we,Ke.value,se);if(Ki===null){we===null&&(we=Ht);break}r&&we&&Ki.alternate===null&&s(q,we),U=m(Ki,U,De),Fe===null?ge=Ki:Fe.sibling=Ki,Fe=Ki,we=Ht}if(Ke.done)return a(q,we),Je&&zs(q,De),ge;if(we===null){for(;!Ke.done;De++,Ke=Y.next())Ke=oe(q,Ke.value,se),Ke!==null&&(U=m(Ke,U,De),Fe===null?ge=Ke:Fe.sibling=Ke,Fe=Ke);return Je&&zs(q,De),ge}for(we=c(we);!Ke.done;De++,Ke=Y.next())Ke=J(we,q,De,Ke.value,se),Ke!==null&&(r&&Ke.alternate!==null&&we.delete(Ke.key===null?De:Ke.key),U=m(Ke,U,De),Fe===null?ge=Ke:Fe.sibling=Ke,Fe=Ke);return r&&we.forEach(function(Qk){return s(q,Qk)}),Je&&zs(q,De),ge}function lt(q,U,Y,se){if(typeof Y=="object"&&Y!==null&&Y.type===x&&Y.key===null&&(Y=Y.props.children),typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case _:e:{for(var ge=Y.key;U!==null;){if(U.key===ge){if(ge=Y.type,ge===x){if(U.tag===7){a(q,U.sibling),se=d(U,Y.props.children),se.return=q,q=se;break e}}else if(U.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===F&&aS(ge)===U.type){a(q,U.sibling),se=d(U,Y.props),Ml(se,Y),se.return=q,q=se;break e}a(q,U);break}else s(q,U);U=U.sibling}Y.type===x?(se=$s(Y.props.children,q.mode,se,Y.key),se.return=q,q=se):(se=Qu(Y.type,Y.key,Y.props,null,q.mode,se),Ml(se,Y),se.return=q,q=se)}return S(q);case b:e:{for(ge=Y.key;U!==null;){if(U.key===ge)if(U.tag===4&&U.stateNode.containerInfo===Y.containerInfo&&U.stateNode.implementation===Y.implementation){a(q,U.sibling),se=d(U,Y.children||[]),se.return=q,q=se;break e}else{a(q,U);break}else s(q,U);U=U.sibling}se=jp(Y,q.mode,se),se.return=q,q=se}return S(q);case F:return ge=Y._init,Y=ge(Y._payload),lt(q,U,Y,se)}if(ue(Y))return Me(q,U,Y,se);if(G(Y)){if(ge=G(Y),typeof ge!="function")throw Error(i(150));return Y=ge.call(Y),Ae(q,U,Y,se)}if(typeof Y.then=="function")return lt(q,U,fd(Y),se);if(Y.$$typeof===R)return lt(q,U,Ju(q,Y),se);hd(q,Y)}return typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint"?(Y=""+Y,U!==null&&U.tag===6?(a(q,U.sibling),se=d(U,Y),se.return=q,q=se):(a(q,U),se=Pp(Y,q.mode,se),se.return=q,q=se),S(q)):a(q,U)}return function(q,U,Y,se){try{Nl=0;var ge=lt(q,U,Y,se);return ea=null,ge}catch(we){if(we===El||we===td)throw we;var Fe=Tn(29,we,null,q.mode);return Fe.lanes=se,Fe.return=q,Fe}finally{}}}var ta=lS(!0),cS=lS(!1),qn=X(null),Cr=null;function Li(r){var s=r.alternate;ie(jt,jt.current&1),ie(qn,r),Cr===null&&(s===null||Ko.current!==null||s.memoizedState!==null)&&(Cr=r)}function uS(r){if(r.tag===22){if(ie(jt,jt.current),ie(qn,r),Cr===null){var s=r.alternate;s!==null&&s.memoizedState!==null&&(Cr=r)}}else Pi()}function Pi(){ie(jt,jt.current),ie(qn,qn.current)}function Zr(r){le(qn),Cr===r&&(Cr=null),le(jt)}var jt=X(0);function pd(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||sg(a)))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}function gm(r,s,a,c){s=r.memoizedState,a=a(c,s),a=a==null?s:y({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var ym={enqueueSetState:function(r,s,a){r=r._reactInternals;var c=In(),d=ki(c);d.payload=s,a!=null&&(d.callback=a),s=Ni(r,d,c),s!==null&&(Dn(s,r,c),Cl(s,r,c))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var c=In(),d=ki(c);d.tag=1,d.payload=s,a!=null&&(d.callback=a),s=Ni(r,d,c),s!==null&&(Dn(s,r,c),Cl(s,r,c))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=In(),c=ki(a);c.tag=2,s!=null&&(c.callback=s),s=Ni(r,c,a),s!==null&&(Dn(s,r,a),Cl(s,r,a))}};function dS(r,s,a,c,d,m,S){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,m,S):s.prototype&&s.prototype.isPureReactComponent?!gl(a,c)||!gl(d,m):!0}function fS(r,s,a,c){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==r&&ym.enqueueReplaceState(s,s.state,null)}function Ws(r,s){var a=s;if("ref"in s){a={};for(var c in s)c!=="ref"&&(a[c]=s[c])}if(r=r.defaultProps){a===s&&(a=y({},a));for(var d in r)a[d]===void 0&&(a[d]=r[d])}return a}var md=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function hS(r){md(r)}function pS(r){console.error(r)}function mS(r){md(r)}function gd(r,s){try{var a=r.onUncaughtError;a(s.value,{componentStack:s.stack})}catch(c){setTimeout(function(){throw c})}}function gS(r,s,a){try{var c=r.onCaughtError;c(a.value,{componentStack:a.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function vm(r,s,a){return a=ki(a),a.tag=3,a.payload={element:null},a.callback=function(){gd(r,s)},a}function yS(r){return r=ki(r),r.tag=3,r}function vS(r,s,a,c){var d=a.type.getDerivedStateFromError;if(typeof d=="function"){var m=c.value;r.payload=function(){return d(m)},r.callback=function(){gS(s,a,c)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(r.callback=function(){gS(s,a,c),typeof d!="function"&&(Hi===null?Hi=new Set([this]):Hi.add(this));var w=c.stack;this.componentDidCatch(c.value,{componentStack:w!==null?w:""})})}function QO(r,s,a,c,d){if(a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(s=a.alternate,s!==null&&Sl(s,a,d,!0),a=qn.current,a!==null){switch(a.tag){case 13:return Cr===null?Hm():a.alternate===null&&Rt===0&&(Rt=3),a.flags&=-257,a.flags|=65536,a.lanes=d,c===Wp?a.flags|=16384:(s=a.updateQueue,s===null?a.updateQueue=new Set([c]):s.add(c),qm(r,c,d)),!1;case 22:return a.flags|=65536,c===Wp?a.flags|=16384:(s=a.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([c])},a.updateQueue=s):(a=s.retryQueue,a===null?s.retryQueue=new Set([c]):a.add(c)),qm(r,c,d)),!1}throw Error(i(435,a.tag))}return qm(r,c,d),Hm(),!1}if(Je)return s=qn.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=d,c!==zp&&(r=Error(i(422),{cause:c}),bl(zn(r,a)))):(c!==zp&&(s=Error(i(423),{cause:c}),bl(zn(s,a))),r=r.current.alternate,r.flags|=65536,d&=-d,r.lanes|=d,c=zn(c,a),d=vm(r.stateNode,c,d),Kp(r,d),Rt!==4&&(Rt=2)),!1;var m=Error(i(520),{cause:c});if(m=zn(m,a),Bl===null?Bl=[m]:Bl.push(m),Rt!==4&&(Rt=2),s===null)return!0;c=zn(c,a),a=s;do{switch(a.tag){case 3:return a.flags|=65536,r=d&-d,a.lanes|=r,r=vm(a.stateNode,c,r),Kp(a,r),!1;case 1:if(s=a.type,m=a.stateNode,(a.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Hi===null||!Hi.has(m))))return a.flags|=65536,d&=-d,a.lanes|=d,d=yS(d),vS(d,r,a,c),Kp(a,d),!1}a=a.return}while(a!==null);return!1}var _S=Error(i(461)),zt=!1;function Kt(r,s,a,c){s.child=r===null?cS(s,null,a,c):ta(s,r.child,a,c)}function bS(r,s,a,c,d){a=a.render;var m=s.ref;if("ref"in c){var S={};for(var w in c)w!=="ref"&&(S[w]=c[w])}else S=c;return qs(s),c=tm(r,s,a,S,m,d),w=nm(),r!==null&&!zt?(rm(r,s,d),Jr(r,s,d)):(Je&&w&&$p(s),s.flags|=1,Kt(r,s,c,d),s.child)}function SS(r,s,a,c,d){if(r===null){var m=a.type;return typeof m=="function"&&!Lp(m)&&m.defaultProps===void 0&&a.compare===null?(s.tag=15,s.type=m,xS(r,s,m,c,d)):(r=Qu(a.type,null,c,s,s.mode,d),r.ref=s.ref,r.return=s,s.child=r)}if(m=r.child,!Cm(r,d)){var S=m.memoizedProps;if(a=a.compare,a=a!==null?a:gl,a(S,c)&&r.ref===s.ref)return Jr(r,s,d)}return s.flags|=1,r=Gr(m,c),r.ref=s.ref,r.return=s,s.child=r}function xS(r,s,a,c,d){if(r!==null){var m=r.memoizedProps;if(gl(m,c)&&r.ref===s.ref)if(zt=!1,s.pendingProps=c=m,Cm(r,d))(r.flags&131072)!==0&&(zt=!0);else return s.lanes=r.lanes,Jr(r,s,d)}return _m(r,s,a,c,d)}function wS(r,s,a){var c=s.pendingProps,d=c.children,m=r!==null?r.memoizedState:null;if(c.mode==="hidden"){if((s.flags&128)!==0){if(c=m!==null?m.baseLanes|a:a,r!==null){for(d=s.child=r.child,m=0;d!==null;)m=m|d.lanes|d.childLanes,d=d.sibling;s.childLanes=m&~c}else s.childLanes=0,s.child=null;return ES(r,s,c,a)}if((a&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},r!==null&&ed(s,m!==null?m.cachePool:null),m!==null?x0(s,m):Zp(),uS(s);else return s.lanes=s.childLanes=536870912,ES(r,s,m!==null?m.baseLanes|a:a,a)}else m!==null?(ed(s,m.cachePool),x0(s,m),Pi(),s.memoizedState=null):(r!==null&&ed(s,null),Zp(),Pi());return Kt(r,s,d,a),s.child}function ES(r,s,a,c){var d=Gp();return d=d===null?null:{parent:Pt._currentValue,pool:d},s.memoizedState={baseLanes:a,cachePool:d},r!==null&&ed(s,null),Zp(),uS(s),r!==null&&Sl(r,s,c,!0),null}function yd(r,s){var a=s.ref;if(a===null)r!==null&&r.ref!==null&&(s.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(i(284));(r===null||r.ref!==a)&&(s.flags|=4194816)}}function _m(r,s,a,c,d){return qs(s),a=tm(r,s,a,c,void 0,d),c=nm(),r!==null&&!zt?(rm(r,s,d),Jr(r,s,d)):(Je&&c&&$p(s),s.flags|=1,Kt(r,s,a,d),s.child)}function TS(r,s,a,c,d,m){return qs(s),s.updateQueue=null,a=E0(s,c,a,d),w0(r),c=nm(),r!==null&&!zt?(rm(r,s,m),Jr(r,s,m)):(Je&&c&&$p(s),s.flags|=1,Kt(r,s,a,m),s.child)}function CS(r,s,a,c,d){if(qs(s),s.stateNode===null){var m=Vo,S=a.contextType;typeof S=="object"&&S!==null&&(m=sn(S)),m=new a(c,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=ym,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=c,m.state=s.memoizedState,m.refs={},Yp(s),S=a.contextType,m.context=typeof S=="object"&&S!==null?sn(S):Vo,m.state=s.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(gm(s,a,S,c),m.state=s.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(S=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),S!==m.state&&ym.enqueueReplaceState(m,m.state,null),Al(s,c,m,d),Rl(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),c=!0}else if(r===null){m=s.stateNode;var w=s.memoizedProps,L=Ws(a,w);m.props=L;var Q=m.context,re=a.contextType;S=Vo,typeof re=="object"&&re!==null&&(S=sn(re));var oe=a.getDerivedStateFromProps;re=typeof oe=="function"||typeof m.getSnapshotBeforeUpdate=="function",w=s.pendingProps!==w,re||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w||Q!==S)&&fS(s,m,c,S),Oi=!1;var Z=s.memoizedState;m.state=Z,Al(s,c,m,d),Rl(),Q=s.memoizedState,w||Z!==Q||Oi?(typeof oe=="function"&&(gm(s,a,oe,c),Q=s.memoizedState),(L=Oi||dS(s,a,L,c,Z,Q,S))?(re||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=Q),m.props=c,m.state=Q,m.context=S,c=L):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{m=s.stateNode,Qp(r,s),S=s.memoizedProps,re=Ws(a,S),m.props=re,oe=s.pendingProps,Z=m.context,Q=a.contextType,L=Vo,typeof Q=="object"&&Q!==null&&(L=sn(Q)),w=a.getDerivedStateFromProps,(Q=typeof w=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S!==oe||Z!==L)&&fS(s,m,c,L),Oi=!1,Z=s.memoizedState,m.state=Z,Al(s,c,m,d),Rl();var J=s.memoizedState;S!==oe||Z!==J||Oi||r!==null&&r.dependencies!==null&&Zu(r.dependencies)?(typeof w=="function"&&(gm(s,a,w,c),J=s.memoizedState),(re=Oi||dS(s,a,re,c,Z,J,L)||r!==null&&r.dependencies!==null&&Zu(r.dependencies))?(Q||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(c,J,L),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(c,J,L)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||S===r.memoizedProps&&Z===r.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&Z===r.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=J),m.props=c,m.state=J,m.context=L,c=re):(typeof m.componentDidUpdate!="function"||S===r.memoizedProps&&Z===r.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&Z===r.memoizedState||(s.flags|=1024),c=!1)}return m=c,yd(r,s),c=(s.flags&128)!==0,m||c?(m=s.stateNode,a=c&&typeof a.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,r!==null&&c?(s.child=ta(s,r.child,null,d),s.child=ta(s,null,a,d)):Kt(r,s,a,d),s.memoizedState=m.state,r=s.child):r=Jr(r,s,d),r}function RS(r,s,a,c){return _l(),s.flags|=256,Kt(r,s,a,c),s.child}var bm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sm(r){return{baseLanes:r,cachePool:p0()}}function xm(r,s,a){return r=r!==null?r.childLanes&~a:0,s&&(r|=Vn),r}function AS(r,s,a){var c=s.pendingProps,d=!1,m=(s.flags&128)!==0,S;if((S=m)||(S=r!==null&&r.memoizedState===null?!1:(jt.current&2)!==0),S&&(d=!0,s.flags&=-129),S=(s.flags&32)!==0,s.flags&=-33,r===null){if(Je){if(d?Li(s):Pi(),Je){var w=Ct,L;if(L=w){e:{for(L=w,w=Tr;L.nodeType!==8;){if(!w){w=null;break e}if(L=lr(L.nextSibling),L===null){w=null;break e}}w=L}w!==null?(s.memoizedState={dehydrated:w,treeContext:Us!==null?{id:Wr,overflow:Yr}:null,retryLane:536870912,hydrationErrors:null},L=Tn(18,null,null,0),L.stateNode=w,L.return=s,s.child=L,cn=s,Ct=null,L=!0):L=!1}L||Hs(s)}if(w=s.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return sg(w)?s.lanes=32:s.lanes=536870912,null;Zr(s)}return w=c.children,c=c.fallback,d?(Pi(),d=s.mode,w=vd({mode:"hidden",children:w},d),c=$s(c,d,a,null),w.return=s,c.return=s,w.sibling=c,s.child=w,d=s.child,d.memoizedState=Sm(a),d.childLanes=xm(r,S,a),s.memoizedState=bm,c):(Li(s),wm(s,w))}if(L=r.memoizedState,L!==null&&(w=L.dehydrated,w!==null)){if(m)s.flags&256?(Li(s),s.flags&=-257,s=Em(r,s,a)):s.memoizedState!==null?(Pi(),s.child=r.child,s.flags|=128,s=null):(Pi(),d=c.fallback,w=s.mode,c=vd({mode:"visible",children:c.children},w),d=$s(d,w,a,null),d.flags|=2,c.return=s,d.return=s,c.sibling=d,s.child=c,ta(s,r.child,null,a),c=s.child,c.memoizedState=Sm(a),c.childLanes=xm(r,S,a),s.memoizedState=bm,s=d);else if(Li(s),sg(w)){if(S=w.nextSibling&&w.nextSibling.dataset,S)var Q=S.dgst;S=Q,c=Error(i(419)),c.stack="",c.digest=S,bl({value:c,source:null,stack:null}),s=Em(r,s,a)}else if(zt||Sl(r,s,a,!1),S=(a&r.childLanes)!==0,zt||S){if(S=ft,S!==null&&(c=a&-a,c=(c&42)!==0?1:al(c),c=(c&(S.suspendedLanes|a))!==0?0:c,c!==0&&c!==L.retryLane))throw L.retryLane=c,qo(r,c),Dn(S,r,c),_S;w.data==="$?"||Hm(),s=Em(r,s,a)}else w.data==="$?"?(s.flags|=192,s.child=r.child,s=null):(r=L.treeContext,Ct=lr(w.nextSibling),cn=s,Je=!0,Bs=null,Tr=!1,r!==null&&(Hn[Fn++]=Wr,Hn[Fn++]=Yr,Hn[Fn++]=Us,Wr=r.id,Yr=r.overflow,Us=s),s=wm(s,c.children),s.flags|=4096);return s}return d?(Pi(),d=c.fallback,w=s.mode,L=r.child,Q=L.sibling,c=Gr(L,{mode:"hidden",children:c.children}),c.subtreeFlags=L.subtreeFlags&65011712,Q!==null?d=Gr(Q,d):(d=$s(d,w,a,null),d.flags|=2),d.return=s,c.return=s,c.sibling=d,s.child=c,c=d,d=s.child,w=r.child.memoizedState,w===null?w=Sm(a):(L=w.cachePool,L!==null?(Q=Pt._currentValue,L=L.parent!==Q?{parent:Q,pool:Q}:L):L=p0(),w={baseLanes:w.baseLanes|a,cachePool:L}),d.memoizedState=w,d.childLanes=xm(r,S,a),s.memoizedState=bm,c):(Li(s),a=r.child,r=a.sibling,a=Gr(a,{mode:"visible",children:c.children}),a.return=s,a.sibling=null,r!==null&&(S=s.deletions,S===null?(s.deletions=[r],s.flags|=16):S.push(r)),s.child=a,s.memoizedState=null,a)}function wm(r,s){return s=vd({mode:"visible",children:s},r.mode),s.return=r,r.child=s}function vd(r,s){return r=Tn(22,r,null,s),r.lanes=0,r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},r}function Em(r,s,a){return ta(s,r.child,null,a),r=wm(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function IS(r,s,a){r.lanes|=s;var c=r.alternate;c!==null&&(c.lanes|=s),Hp(r.return,s,a)}function Tm(r,s,a,c,d){var m=r.memoizedState;m===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=s,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function DS(r,s,a){var c=s.pendingProps,d=c.revealOrder,m=c.tail;if(Kt(r,s,c.children,a),c=jt.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&IS(r,a,s);else if(r.tag===19)IS(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}switch(ie(jt,c),d){case"forwards":for(a=s.child,d=null;a!==null;)r=a.alternate,r!==null&&pd(r)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),Tm(s,!1,d,a,m);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(r=d.alternate,r!==null&&pd(r)===null){s.child=d;break}r=d.sibling,d.sibling=a,a=d,d=r}Tm(s,!0,a,null,m);break;case"together":Tm(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Jr(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),Bi|=s.lanes,(a&s.childLanes)===0)if(r!==null){if(Sl(r,s,a,!1),(a&s.childLanes)===0)return null}else return null;if(r!==null&&s.child!==r.child)throw Error(i(153));if(s.child!==null){for(r=s.child,a=Gr(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=Gr(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function Cm(r,s){return(r.lanes&s)!==0?!0:(r=r.dependencies,!!(r!==null&&Zu(r)))}function KO(r,s,a){switch(s.tag){case 3:be(s,s.stateNode.containerInfo),Di(s,Pt,r.memoizedState.cache),_l();break;case 27:case 5:Ue(s);break;case 4:be(s,s.stateNode.containerInfo);break;case 10:Di(s,s.type,s.memoizedProps.value);break;case 13:var c=s.memoizedState;if(c!==null)return c.dehydrated!==null?(Li(s),s.flags|=128,null):(a&s.child.childLanes)!==0?AS(r,s,a):(Li(s),r=Jr(r,s,a),r!==null?r.sibling:null);Li(s);break;case 19:var d=(r.flags&128)!==0;if(c=(a&s.childLanes)!==0,c||(Sl(r,s,a,!1),c=(a&s.childLanes)!==0),d){if(c)return DS(r,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),ie(jt,jt.current),c)break;return null;case 22:case 23:return s.lanes=0,wS(r,s,a);case 24:Di(s,Pt,r.memoizedState.cache)}return Jr(r,s,a)}function OS(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps)zt=!0;else{if(!Cm(r,a)&&(s.flags&128)===0)return zt=!1,KO(r,s,a);zt=(r.flags&131072)!==0}else zt=!1,Je&&(s.flags&1048576)!==0&&a0(s,Xu,s.index);switch(s.lanes=0,s.tag){case 16:e:{r=s.pendingProps;var c=s.elementType,d=c._init;if(c=d(c._payload),s.type=c,typeof c=="function")Lp(c)?(r=Ws(c,r),s.tag=1,s=CS(null,s,c,r,a)):(s.tag=0,s=_m(null,s,c,r,a));else{if(c!=null){if(d=c.$$typeof,d===D){s.tag=11,s=bS(null,s,c,r,a);break e}else if(d===P){s.tag=14,s=SS(null,s,c,r,a);break e}}throw s=te(c)||c,Error(i(306,s,""))}}return s;case 0:return _m(r,s,s.type,s.pendingProps,a);case 1:return c=s.type,d=Ws(c,s.pendingProps),CS(r,s,c,d,a);case 3:e:{if(be(s,s.stateNode.containerInfo),r===null)throw Error(i(387));c=s.pendingProps;var m=s.memoizedState;d=m.element,Qp(r,s),Al(s,c,null,a);var S=s.memoizedState;if(c=S.cache,Di(s,Pt,c),c!==m.cache&&Fp(s,[Pt],a,!0),Rl(),c=S.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:S.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=RS(r,s,c,a);break e}else if(c!==d){d=zn(Error(i(424)),s),bl(d),s=RS(r,s,c,a);break e}else{switch(r=s.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}for(Ct=lr(r.firstChild),cn=s,Je=!0,Bs=null,Tr=!0,a=cS(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(_l(),c===d){s=Jr(r,s,a);break e}Kt(r,s,c,a)}s=s.child}return s;case 26:return yd(r,s),r===null?(a=L1(s.type,null,s.pendingProps,null))?s.memoizedState=a:Je||(a=s.type,r=s.pendingProps,c=kd(pe.current).createElement(a),c[ce]=s,c[fe]=r,Zt(c,a,r),Le(c),s.stateNode=c):s.memoizedState=L1(s.type,r.memoizedProps,s.pendingProps,r.memoizedState),null;case 27:return Ue(s),r===null&&Je&&(c=s.stateNode=k1(s.type,s.pendingProps,pe.current),cn=s,Tr=!0,d=Ct,Vi(s.type)?(og=d,Ct=lr(c.firstChild)):Ct=d),Kt(r,s,s.pendingProps.children,a),yd(r,s),r===null&&(s.flags|=4194304),s.child;case 5:return r===null&&Je&&((d=c=Ct)&&(c=Ek(c,s.type,s.pendingProps,Tr),c!==null?(s.stateNode=c,cn=s,Ct=lr(c.firstChild),Tr=!1,d=!0):d=!1),d||Hs(s)),Ue(s),d=s.type,m=s.pendingProps,S=r!==null?r.memoizedProps:null,c=m.children,ng(d,m)?c=null:S!==null&&ng(d,S)&&(s.flags|=32),s.memoizedState!==null&&(d=tm(r,s,HO,null,null,a),Kl._currentValue=d),yd(r,s),Kt(r,s,c,a),s.child;case 6:return r===null&&Je&&((r=a=Ct)&&(a=Tk(a,s.pendingProps,Tr),a!==null?(s.stateNode=a,cn=s,Ct=null,r=!0):r=!1),r||Hs(s)),null;case 13:return AS(r,s,a);case 4:return be(s,s.stateNode.containerInfo),c=s.pendingProps,r===null?s.child=ta(s,null,c,a):Kt(r,s,c,a),s.child;case 11:return bS(r,s,s.type,s.pendingProps,a);case 7:return Kt(r,s,s.pendingProps,a),s.child;case 8:return Kt(r,s,s.pendingProps.children,a),s.child;case 12:return Kt(r,s,s.pendingProps.children,a),s.child;case 10:return c=s.pendingProps,Di(s,s.type,c.value),Kt(r,s,c.children,a),s.child;case 9:return d=s.type._context,c=s.pendingProps.children,qs(s),d=sn(d),c=c(d),s.flags|=1,Kt(r,s,c,a),s.child;case 14:return SS(r,s,s.type,s.pendingProps,a);case 15:return xS(r,s,s.type,s.pendingProps,a);case 19:return DS(r,s,a);case 31:return c=s.pendingProps,a=s.mode,c={mode:c.mode,children:c.children},r===null?(a=vd(c,a),a.ref=s.ref,s.child=a,a.return=s,s=a):(a=Gr(r.child,c),a.ref=s.ref,s.child=a,a.return=s,s=a),s;case 22:return wS(r,s,a);case 24:return qs(s),c=sn(Pt),r===null?(d=Gp(),d===null&&(d=ft,m=qp(),d.pooledCache=m,m.refCount++,m!==null&&(d.pooledCacheLanes|=a),d=m),s.memoizedState={parent:c,cache:d},Yp(s),Di(s,Pt,d)):((r.lanes&a)!==0&&(Qp(r,s),Al(s,null,null,a),Rl()),d=r.memoizedState,m=s.memoizedState,d.parent!==c?(d={parent:c,cache:c},s.memoizedState=d,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=d),Di(s,Pt,c)):(c=m.cache,Di(s,Pt,c),c!==d.cache&&Fp(s,[Pt],a,!0))),Kt(r,s,s.pendingProps.children,a),s.child;case 29:throw s.pendingProps}throw Error(i(156,s.tag))}function ei(r){r.flags|=4}function kS(r,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)r.flags&=-16777217;else if(r.flags|=16777216,!z1(s)){if(s=qn.current,s!==null&&((Qe&4194048)===Qe?Cr!==null:(Qe&62914560)!==Qe&&(Qe&536870912)===0||s!==Cr))throw Tl=Wp,m0;r.flags|=8192}}function _d(r,s){s!==null&&(r.flags|=4),r.flags&16384&&(s=r.tag!==22?Nu():536870912,r.lanes|=s,sa|=s)}function Ll(r,s){if(!Je)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function xt(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,c=0;if(s)for(var d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&65011712,c|=d.flags&65011712,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=c,r.childLanes=a,s}function XO(r,s,a){var c=s.pendingProps;switch(Up(s),s.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xt(s),null;case 1:return xt(s),null;case 3:return a=s.stateNode,c=null,r!==null&&(c=r.memoizedState.cache),s.memoizedState.cache!==c&&(s.flags|=2048),Kr(Pt),Oe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(r===null||r.child===null)&&(vl(s)?ei(s):r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,u0())),xt(s),null;case 26:return a=s.memoizedState,r===null?(ei(s),a!==null?(xt(s),kS(s,a)):(xt(s),s.flags&=-16777217)):a?a!==r.memoizedState?(ei(s),xt(s),kS(s,a)):(xt(s),s.flags&=-16777217):(r.memoizedProps!==c&&ei(s),xt(s),s.flags&=-16777217),null;case 27:_t(s),a=pe.current;var d=s.type;if(r!==null&&s.stateNode!=null)r.memoizedProps!==c&&ei(s);else{if(!c){if(s.stateNode===null)throw Error(i(166));return xt(s),null}r=de.current,vl(s)?l0(s):(r=k1(d,c,a),s.stateNode=r,ei(s))}return xt(s),null;case 5:if(_t(s),a=s.type,r!==null&&s.stateNode!=null)r.memoizedProps!==c&&ei(s);else{if(!c){if(s.stateNode===null)throw Error(i(166));return xt(s),null}if(r=de.current,vl(s))l0(s);else{switch(d=kd(pe.current),r){case 1:r=d.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:r=d.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":r=d.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":r=d.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":r=d.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof c.is=="string"?d.createElement("select",{is:c.is}):d.createElement("select"),c.multiple?r.multiple=!0:c.size&&(r.size=c.size);break;default:r=typeof c.is=="string"?d.createElement(a,{is:c.is}):d.createElement(a)}}r[ce]=s,r[fe]=c;e:for(d=s.child;d!==null;){if(d.tag===5||d.tag===6)r.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===s)break e;for(;d.sibling===null;){if(d.return===null||d.return===s)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}s.stateNode=r;e:switch(Zt(r,a,c),a){case"button":case"input":case"select":case"textarea":r=!!c.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&ei(s)}}return xt(s),s.flags&=-16777217,null;case 6:if(r&&s.stateNode!=null)r.memoizedProps!==c&&ei(s);else{if(typeof c!="string"&&s.stateNode===null)throw Error(i(166));if(r=pe.current,vl(s)){if(r=s.stateNode,a=s.memoizedProps,c=null,d=cn,d!==null)switch(d.tag){case 27:case 5:c=d.memoizedProps}r[ce]=s,r=!!(r.nodeValue===a||c!==null&&c.suppressHydrationWarning===!0||T1(r.nodeValue,a)),r||Hs(s)}else r=kd(r).createTextNode(c),r[ce]=s,s.stateNode=r}return xt(s),null;case 13:if(c=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(d=vl(s),c!==null&&c.dehydrated!==null){if(r===null){if(!d)throw Error(i(318));if(d=s.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(i(317));d[ce]=s}else _l(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;xt(s),d=!1}else d=u0(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=d),d=!0;if(!d)return s.flags&256?(Zr(s),s):(Zr(s),null)}if(Zr(s),(s.flags&128)!==0)return s.lanes=a,s;if(a=c!==null,r=r!==null&&r.memoizedState!==null,a){c=s.child,d=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(d=c.alternate.memoizedState.cachePool.pool);var m=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(m=c.memoizedState.cachePool.pool),m!==d&&(c.flags|=2048)}return a!==r&&a&&(s.child.flags|=8192),_d(s,s.updateQueue),xt(s),null;case 4:return Oe(),r===null&&Xm(s.stateNode.containerInfo),xt(s),null;case 10:return Kr(s.type),xt(s),null;case 19:if(le(jt),d=s.memoizedState,d===null)return xt(s),null;if(c=(s.flags&128)!==0,m=d.rendering,m===null)if(c)Ll(d,!1);else{if(Rt!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(m=pd(r),m!==null){for(s.flags|=128,Ll(d,!1),r=m.updateQueue,s.updateQueue=r,_d(s,r),s.subtreeFlags=0,r=a,a=s.child;a!==null;)o0(a,r),a=a.sibling;return ie(jt,jt.current&1|2),s.child}r=r.sibling}d.tail!==null&&Yt()>xd&&(s.flags|=128,c=!0,Ll(d,!1),s.lanes=4194304)}else{if(!c)if(r=pd(m),r!==null){if(s.flags|=128,c=!0,r=r.updateQueue,s.updateQueue=r,_d(s,r),Ll(d,!0),d.tail===null&&d.tailMode==="hidden"&&!m.alternate&&!Je)return xt(s),null}else 2*Yt()-d.renderingStartTime>xd&&a!==536870912&&(s.flags|=128,c=!0,Ll(d,!1),s.lanes=4194304);d.isBackwards?(m.sibling=s.child,s.child=m):(r=d.last,r!==null?r.sibling=m:s.child=m,d.last=m)}return d.tail!==null?(s=d.tail,d.rendering=s,d.tail=s.sibling,d.renderingStartTime=Yt(),s.sibling=null,r=jt.current,ie(jt,c?r&1|2:r&1),s):(xt(s),null);case 22:case 23:return Zr(s),Jp(),c=s.memoizedState!==null,r!==null?r.memoizedState!==null!==c&&(s.flags|=8192):c&&(s.flags|=8192),c?(a&536870912)!==0&&(s.flags&128)===0&&(xt(s),s.subtreeFlags&6&&(s.flags|=8192)):xt(s),a=s.updateQueue,a!==null&&_d(s,a.retryQueue),a=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),c=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==a&&(s.flags|=2048),r!==null&&le(Vs),null;case 24:return a=null,r!==null&&(a=r.memoizedState.cache),s.memoizedState.cache!==a&&(s.flags|=2048),Kr(Pt),xt(s),null;case 25:return null;case 30:return null}throw Error(i(156,s.tag))}function ZO(r,s){switch(Up(s),s.tag){case 1:return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return Kr(Pt),Oe(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 26:case 27:case 5:return _t(s),null;case 13:if(Zr(s),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(i(340));_l()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return le(jt),null;case 4:return Oe(),null;case 10:return Kr(s.type),null;case 22:case 23:return Zr(s),Jp(),r!==null&&le(Vs),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 24:return Kr(Pt),null;case 25:return null;default:return null}}function NS(r,s){switch(Up(s),s.tag){case 3:Kr(Pt),Oe();break;case 26:case 27:case 5:_t(s);break;case 4:Oe();break;case 13:Zr(s);break;case 19:le(jt);break;case 10:Kr(s.type);break;case 22:case 23:Zr(s),Jp(),r!==null&&le(Vs);break;case 24:Kr(Pt)}}function Pl(r,s){try{var a=s.updateQueue,c=a!==null?a.lastEffect:null;if(c!==null){var d=c.next;a=d;do{if((a.tag&r)===r){c=void 0;var m=a.create,S=a.inst;c=m(),S.destroy=c}a=a.next}while(a!==d)}}catch(w){dt(s,s.return,w)}}function ji(r,s,a){try{var c=s.updateQueue,d=c!==null?c.lastEffect:null;if(d!==null){var m=d.next;c=m;do{if((c.tag&r)===r){var S=c.inst,w=S.destroy;if(w!==void 0){S.destroy=void 0,d=s;var L=a,Q=w;try{Q()}catch(re){dt(d,L,re)}}}c=c.next}while(c!==m)}}catch(re){dt(s,s.return,re)}}function MS(r){var s=r.updateQueue;if(s!==null){var a=r.stateNode;try{S0(s,a)}catch(c){dt(r,r.return,c)}}}function LS(r,s,a){a.props=Ws(r.type,r.memoizedProps),a.state=r.memoizedState;try{a.componentWillUnmount()}catch(c){dt(r,s,c)}}function jl(r,s){try{var a=r.ref;if(a!==null){switch(r.tag){case 26:case 27:case 5:var c=r.stateNode;break;case 30:c=r.stateNode;break;default:c=r.stateNode}typeof a=="function"?r.refCleanup=a(c):a.current=c}}catch(d){dt(r,s,d)}}function Rr(r,s){var a=r.ref,c=r.refCleanup;if(a!==null)if(typeof c=="function")try{c()}catch(d){dt(r,s,d)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(d){dt(r,s,d)}else a.current=null}function PS(r){var s=r.type,a=r.memoizedProps,c=r.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":a.autoFocus&&c.focus();break e;case"img":a.src?c.src=a.src:a.srcSet&&(c.srcset=a.srcSet)}}catch(d){dt(r,r.return,d)}}function Rm(r,s,a){try{var c=r.stateNode;_k(c,r.type,a,s),c[fe]=s}catch(d){dt(r,r.return,d)}}function jS(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&Vi(r.type)||r.tag===4}function Am(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||jS(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&Vi(r.type)||r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Im(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(r,s):(s=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,s.appendChild(r),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=Od));else if(c!==4&&(c===27&&Vi(r.type)&&(a=r.stateNode,s=null),r=r.child,r!==null))for(Im(r,s,a),r=r.sibling;r!==null;)Im(r,s,a),r=r.sibling}function bd(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(c!==4&&(c===27&&Vi(r.type)&&(a=r.stateNode),r=r.child,r!==null))for(bd(r,s,a),r=r.sibling;r!==null;)bd(r,s,a),r=r.sibling}function $S(r){var s=r.stateNode,a=r.memoizedProps;try{for(var c=r.type,d=s.attributes;d.length;)s.removeAttributeNode(d[0]);Zt(s,c,a),s[ce]=r,s[fe]=a}catch(m){dt(r,r.return,m)}}var ti=!1,Ot=!1,Dm=!1,US=typeof WeakSet=="function"?WeakSet:Set,Bt=null;function JO(r,s){if(r=r.containerInfo,eg=$d,r=Kb(r),Ap(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var S=0,w=-1,L=-1,Q=0,re=0,oe=r,Z=null;t:for(;;){for(var J;oe!==a||d!==0&&oe.nodeType!==3||(w=S+d),oe!==m||c!==0&&oe.nodeType!==3||(L=S+c),oe.nodeType===3&&(S+=oe.nodeValue.length),(J=oe.firstChild)!==null;)Z=oe,oe=J;for(;;){if(oe===r)break t;if(Z===a&&++Q===d&&(w=S),Z===m&&++re===c&&(L=S),(J=oe.nextSibling)!==null)break;oe=Z,Z=oe.parentNode}oe=J}a=w===-1||L===-1?null:{start:w,end:L}}else a=null}a=a||{start:0,end:0}}else a=null;for(tg={focusedElem:r,selectionRange:a},$d=!1,Bt=s;Bt!==null;)if(s=Bt,r=s.child,(s.subtreeFlags&1024)!==0&&r!==null)r.return=s,Bt=r;else for(;Bt!==null;){switch(s=Bt,m=s.alternate,r=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if((r&1024)!==0&&m!==null){r=void 0,a=s,d=m.memoizedProps,m=m.memoizedState,c=a.stateNode;try{var Me=Ws(a.type,d,a.elementType===a.type);r=c.getSnapshotBeforeUpdate(Me,m),c.__reactInternalSnapshotBeforeUpdate=r}catch(Ae){dt(a,a.return,Ae)}}break;case 3:if((r&1024)!==0){if(r=s.stateNode.containerInfo,a=r.nodeType,a===9)ig(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":ig(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((r&1024)!==0)throw Error(i(163))}if(r=s.sibling,r!==null){r.return=s.return,Bt=r;break}Bt=s.return}}function zS(r,s,a){var c=a.flags;switch(a.tag){case 0:case 11:case 15:$i(r,a),c&4&&Pl(5,a);break;case 1:if($i(r,a),c&4)if(r=a.stateNode,s===null)try{r.componentDidMount()}catch(S){dt(a,a.return,S)}else{var d=Ws(a.type,s.memoizedProps);s=s.memoizedState;try{r.componentDidUpdate(d,s,r.__reactInternalSnapshotBeforeUpdate)}catch(S){dt(a,a.return,S)}}c&64&&MS(a),c&512&&jl(a,a.return);break;case 3:if($i(r,a),c&64&&(r=a.updateQueue,r!==null)){if(s=null,a.child!==null)switch(a.child.tag){case 27:case 5:s=a.child.stateNode;break;case 1:s=a.child.stateNode}try{S0(r,s)}catch(S){dt(a,a.return,S)}}break;case 27:s===null&&c&4&&$S(a);case 26:case 5:$i(r,a),s===null&&c&4&&PS(a),c&512&&jl(a,a.return);break;case 12:$i(r,a);break;case 13:$i(r,a),c&4&&FS(r,a),c&64&&(r=a.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(a=lk.bind(null,a),Ck(r,a))));break;case 22:if(c=a.memoizedState!==null||ti,!c){s=s!==null&&s.memoizedState!==null||Ot,d=ti;var m=Ot;ti=c,(Ot=s)&&!m?Ui(r,a,(a.subtreeFlags&8772)!==0):$i(r,a),ti=d,Ot=m}break;case 30:break;default:$i(r,a)}}function BS(r){var s=r.alternate;s!==null&&(r.alternate=null,BS(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&Se(s)),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}var vt=null,yn=!1;function ni(r,s,a){for(a=a.child;a!==null;)HS(r,s,a),a=a.sibling}function HS(r,s,a){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(hn,a)}catch{}switch(a.tag){case 26:Ot||Rr(a,s),ni(r,s,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ot||Rr(a,s);var c=vt,d=yn;Vi(a.type)&&(vt=a.stateNode,yn=!1),ni(r,s,a),Gl(a.stateNode),vt=c,yn=d;break;case 5:Ot||Rr(a,s);case 6:if(c=vt,d=yn,vt=null,ni(r,s,a),vt=c,yn=d,vt!==null)if(yn)try{(vt.nodeType===9?vt.body:vt.nodeName==="HTML"?vt.ownerDocument.body:vt).removeChild(a.stateNode)}catch(m){dt(a,s,m)}else try{vt.removeChild(a.stateNode)}catch(m){dt(a,s,m)}break;case 18:vt!==null&&(yn?(r=vt,D1(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,a.stateNode),ec(r)):D1(vt,a.stateNode));break;case 4:c=vt,d=yn,vt=a.stateNode.containerInfo,yn=!0,ni(r,s,a),vt=c,yn=d;break;case 0:case 11:case 14:case 15:Ot||ji(2,a,s),Ot||ji(4,a,s),ni(r,s,a);break;case 1:Ot||(Rr(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"&&LS(a,s,c)),ni(r,s,a);break;case 21:ni(r,s,a);break;case 22:Ot=(c=Ot)||a.memoizedState!==null,ni(r,s,a),Ot=c;break;default:ni(r,s,a)}}function FS(r,s){if(s.memoizedState===null&&(r=s.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{ec(r)}catch(a){dt(s,s.return,a)}}function ek(r){switch(r.tag){case 13:case 19:var s=r.stateNode;return s===null&&(s=r.stateNode=new US),s;case 22:return r=r.stateNode,s=r._retryCache,s===null&&(s=r._retryCache=new US),s;default:throw Error(i(435,r.tag))}}function Om(r,s){var a=ek(r);s.forEach(function(c){var d=ck.bind(null,r,c);a.has(c)||(a.add(c),c.then(d,d))})}function Cn(r,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c],m=r,S=s,w=S;e:for(;w!==null;){switch(w.tag){case 27:if(Vi(w.type)){vt=w.stateNode,yn=!1;break e}break;case 5:vt=w.stateNode,yn=!1;break e;case 3:case 4:vt=w.stateNode.containerInfo,yn=!0;break e}w=w.return}if(vt===null)throw Error(i(160));HS(m,S,d),vt=null,yn=!1,m=d.alternate,m!==null&&(m.return=null),d.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)qS(s,r),s=s.sibling}var ar=null;function qS(r,s){var a=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:Cn(s,r),Rn(r),c&4&&(ji(3,r,r.return),Pl(3,r),ji(5,r,r.return));break;case 1:Cn(s,r),Rn(r),c&512&&(Ot||a===null||Rr(a,a.return)),c&64&&ti&&(r=r.updateQueue,r!==null&&(c=r.callbacks,c!==null&&(a=r.shared.hiddenCallbacks,r.shared.hiddenCallbacks=a===null?c:a.concat(c))));break;case 26:var d=ar;if(Cn(s,r),Rn(r),c&512&&(Ot||a===null||Rr(a,a.return)),c&4){var m=a!==null?a.memoizedState:null;if(c=r.memoizedState,a===null)if(c===null)if(r.stateNode===null){e:{c=r.type,a=r.memoizedProps,d=d.ownerDocument||d;t:switch(c){case"title":m=d.getElementsByTagName("title")[0],(!m||m[_e]||m[ce]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=d.createElement(c),d.head.insertBefore(m,d.querySelector("head > title"))),Zt(m,c,a),m[ce]=r,Le(m),c=m;break e;case"link":var S=$1("link","href",d).get(c+(a.href||""));if(S){for(var w=0;w<S.length;w++)if(m=S[w],m.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&m.getAttribute("rel")===(a.rel==null?null:a.rel)&&m.getAttribute("title")===(a.title==null?null:a.title)&&m.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(w,1);break t}}m=d.createElement(c),Zt(m,c,a),d.head.appendChild(m);break;case"meta":if(S=$1("meta","content",d).get(c+(a.content||""))){for(w=0;w<S.length;w++)if(m=S[w],m.getAttribute("content")===(a.content==null?null:""+a.content)&&m.getAttribute("name")===(a.name==null?null:a.name)&&m.getAttribute("property")===(a.property==null?null:a.property)&&m.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&m.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(w,1);break t}}m=d.createElement(c),Zt(m,c,a),d.head.appendChild(m);break;default:throw Error(i(468,c))}m[ce]=r,Le(m),c=m}r.stateNode=c}else U1(d,r.type,r.stateNode);else r.stateNode=j1(d,c,r.memoizedProps);else m!==c?(m===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):m.count--,c===null?U1(d,r.type,r.stateNode):j1(d,c,r.memoizedProps)):c===null&&r.stateNode!==null&&Rm(r,r.memoizedProps,a.memoizedProps)}break;case 27:Cn(s,r),Rn(r),c&512&&(Ot||a===null||Rr(a,a.return)),a!==null&&c&4&&Rm(r,r.memoizedProps,a.memoizedProps);break;case 5:if(Cn(s,r),Rn(r),c&512&&(Ot||a===null||Rr(a,a.return)),r.flags&32){d=r.stateNode;try{jo(d,"")}catch(J){dt(r,r.return,J)}}c&4&&r.stateNode!=null&&(d=r.memoizedProps,Rm(r,d,a!==null?a.memoizedProps:d)),c&1024&&(Dm=!0);break;case 6:if(Cn(s,r),Rn(r),c&4){if(r.stateNode===null)throw Error(i(162));c=r.memoizedProps,a=r.stateNode;try{a.nodeValue=c}catch(J){dt(r,r.return,J)}}break;case 3:if(Ld=null,d=ar,ar=Nd(s.containerInfo),Cn(s,r),ar=d,Rn(r),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ec(s.containerInfo)}catch(J){dt(r,r.return,J)}Dm&&(Dm=!1,VS(r));break;case 4:c=ar,ar=Nd(r.stateNode.containerInfo),Cn(s,r),Rn(r),ar=c;break;case 12:Cn(s,r),Rn(r);break;case 13:Cn(s,r),Rn(r),r.child.flags&8192&&r.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(jm=Yt()),c&4&&(c=r.updateQueue,c!==null&&(r.updateQueue=null,Om(r,c)));break;case 22:d=r.memoizedState!==null;var L=a!==null&&a.memoizedState!==null,Q=ti,re=Ot;if(ti=Q||d,Ot=re||L,Cn(s,r),Ot=re,ti=Q,Rn(r),c&8192)e:for(s=r.stateNode,s._visibility=d?s._visibility&-2:s._visibility|1,d&&(a===null||L||ti||Ot||Ys(r)),a=null,s=r;;){if(s.tag===5||s.tag===26){if(a===null){L=a=s;try{if(m=L.stateNode,d)S=m.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{w=L.stateNode;var oe=L.memoizedProps.style,Z=oe!=null&&oe.hasOwnProperty("display")?oe.display:null;w.style.display=Z==null||typeof Z=="boolean"?"":(""+Z).trim()}}catch(J){dt(L,L.return,J)}}}else if(s.tag===6){if(a===null){L=s;try{L.stateNode.nodeValue=d?"":L.memoizedProps}catch(J){dt(L,L.return,J)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===r)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break e;for(;s.sibling===null;){if(s.return===null||s.return===r)break e;a===s&&(a=null),s=s.return}a===s&&(a=null),s.sibling.return=s.return,s=s.sibling}c&4&&(c=r.updateQueue,c!==null&&(a=c.retryQueue,a!==null&&(c.retryQueue=null,Om(r,a))));break;case 19:Cn(s,r),Rn(r),c&4&&(c=r.updateQueue,c!==null&&(r.updateQueue=null,Om(r,c)));break;case 30:break;case 21:break;default:Cn(s,r),Rn(r)}}function Rn(r){var s=r.flags;if(s&2){try{for(var a,c=r.return;c!==null;){if(jS(c)){a=c;break}c=c.return}if(a==null)throw Error(i(160));switch(a.tag){case 27:var d=a.stateNode,m=Am(r);bd(r,m,d);break;case 5:var S=a.stateNode;a.flags&32&&(jo(S,""),a.flags&=-33);var w=Am(r);bd(r,w,S);break;case 3:case 4:var L=a.stateNode.containerInfo,Q=Am(r);Im(r,Q,L);break;default:throw Error(i(161))}}catch(re){dt(r,r.return,re)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function VS(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var s=r;VS(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),r=r.sibling}}function $i(r,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)zS(r,s.alternate,s),s=s.sibling}function Ys(r){for(r=r.child;r!==null;){var s=r;switch(s.tag){case 0:case 11:case 14:case 15:ji(4,s,s.return),Ys(s);break;case 1:Rr(s,s.return);var a=s.stateNode;typeof a.componentWillUnmount=="function"&&LS(s,s.return,a),Ys(s);break;case 27:Gl(s.stateNode);case 26:case 5:Rr(s,s.return),Ys(s);break;case 22:s.memoizedState===null&&Ys(s);break;case 30:Ys(s);break;default:Ys(s)}r=r.sibling}}function Ui(r,s,a){for(a=a&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var c=s.alternate,d=r,m=s,S=m.flags;switch(m.tag){case 0:case 11:case 15:Ui(d,m,a),Pl(4,m);break;case 1:if(Ui(d,m,a),c=m,d=c.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(Q){dt(c,c.return,Q)}if(c=m,d=c.updateQueue,d!==null){var w=c.stateNode;try{var L=d.shared.hiddenCallbacks;if(L!==null)for(d.shared.hiddenCallbacks=null,d=0;d<L.length;d++)b0(L[d],w)}catch(Q){dt(c,c.return,Q)}}a&&S&64&&MS(m),jl(m,m.return);break;case 27:$S(m);case 26:case 5:Ui(d,m,a),a&&c===null&&S&4&&PS(m),jl(m,m.return);break;case 12:Ui(d,m,a);break;case 13:Ui(d,m,a),a&&S&4&&FS(d,m);break;case 22:m.memoizedState===null&&Ui(d,m,a),jl(m,m.return);break;case 30:break;default:Ui(d,m,a)}s=s.sibling}}function km(r,s){var a=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==a&&(r!=null&&r.refCount++,a!=null&&xl(a))}function Nm(r,s){r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&xl(r))}function Ar(r,s,a,c){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)GS(r,s,a,c),s=s.sibling}function GS(r,s,a,c){var d=s.flags;switch(s.tag){case 0:case 11:case 15:Ar(r,s,a,c),d&2048&&Pl(9,s);break;case 1:Ar(r,s,a,c);break;case 3:Ar(r,s,a,c),d&2048&&(r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&xl(r)));break;case 12:if(d&2048){Ar(r,s,a,c),r=s.stateNode;try{var m=s.memoizedProps,S=m.id,w=m.onPostCommit;typeof w=="function"&&w(S,s.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(L){dt(s,s.return,L)}}else Ar(r,s,a,c);break;case 13:Ar(r,s,a,c);break;case 23:break;case 22:m=s.stateNode,S=s.alternate,s.memoizedState!==null?m._visibility&2?Ar(r,s,a,c):$l(r,s):m._visibility&2?Ar(r,s,a,c):(m._visibility|=2,na(r,s,a,c,(s.subtreeFlags&10256)!==0)),d&2048&&km(S,s);break;case 24:Ar(r,s,a,c),d&2048&&Nm(s.alternate,s);break;default:Ar(r,s,a,c)}}function na(r,s,a,c,d){for(d=d&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var m=r,S=s,w=a,L=c,Q=S.flags;switch(S.tag){case 0:case 11:case 15:na(m,S,w,L,d),Pl(8,S);break;case 23:break;case 22:var re=S.stateNode;S.memoizedState!==null?re._visibility&2?na(m,S,w,L,d):$l(m,S):(re._visibility|=2,na(m,S,w,L,d)),d&&Q&2048&&km(S.alternate,S);break;case 24:na(m,S,w,L,d),d&&Q&2048&&Nm(S.alternate,S);break;default:na(m,S,w,L,d)}s=s.sibling}}function $l(r,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var a=r,c=s,d=c.flags;switch(c.tag){case 22:$l(a,c),d&2048&&km(c.alternate,c);break;case 24:$l(a,c),d&2048&&Nm(c.alternate,c);break;default:$l(a,c)}s=s.sibling}}var Ul=8192;function ra(r){if(r.subtreeFlags&Ul)for(r=r.child;r!==null;)WS(r),r=r.sibling}function WS(r){switch(r.tag){case 26:ra(r),r.flags&Ul&&r.memoizedState!==null&&Uk(ar,r.memoizedState,r.memoizedProps);break;case 5:ra(r);break;case 3:case 4:var s=ar;ar=Nd(r.stateNode.containerInfo),ra(r),ar=s;break;case 22:r.memoizedState===null&&(s=r.alternate,s!==null&&s.memoizedState!==null?(s=Ul,Ul=16777216,ra(r),Ul=s):ra(r));break;default:ra(r)}}function YS(r){var s=r.alternate;if(s!==null&&(r=s.child,r!==null)){s.child=null;do s=r.sibling,r.sibling=null,r=s;while(r!==null)}}function zl(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var a=0;a<s.length;a++){var c=s[a];Bt=c,KS(c,r)}YS(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)QS(r),r=r.sibling}function QS(r){switch(r.tag){case 0:case 11:case 15:zl(r),r.flags&2048&&ji(9,r,r.return);break;case 3:zl(r);break;case 12:zl(r);break;case 22:var s=r.stateNode;r.memoizedState!==null&&s._visibility&2&&(r.return===null||r.return.tag!==13)?(s._visibility&=-3,Sd(r)):zl(r);break;default:zl(r)}}function Sd(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var a=0;a<s.length;a++){var c=s[a];Bt=c,KS(c,r)}YS(r)}for(r=r.child;r!==null;){switch(s=r,s.tag){case 0:case 11:case 15:ji(8,s,s.return),Sd(s);break;case 22:a=s.stateNode,a._visibility&2&&(a._visibility&=-3,Sd(s));break;default:Sd(s)}r=r.sibling}}function KS(r,s){for(;Bt!==null;){var a=Bt;switch(a.tag){case 0:case 11:case 15:ji(8,a,s);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var c=a.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:xl(a.memoizedState.cache)}if(c=a.child,c!==null)c.return=a,Bt=c;else e:for(a=r;Bt!==null;){c=Bt;var d=c.sibling,m=c.return;if(BS(c),c===a){Bt=null;break e}if(d!==null){d.return=m,Bt=d;break e}Bt=m}}}var tk={getCacheForType:function(r){var s=sn(Pt),a=s.data.get(r);return a===void 0&&(a=r(),s.data.set(r,a)),a}},nk=typeof WeakMap=="function"?WeakMap:Map,rt=0,ft=null,Ge=null,Qe=0,it=0,An=null,zi=!1,ia=!1,Mm=!1,ri=0,Rt=0,Bi=0,Qs=0,Lm=0,Vn=0,sa=0,Bl=null,vn=null,Pm=!1,jm=0,xd=1/0,wd=null,Hi=null,Xt=0,Fi=null,oa=null,aa=0,$m=0,Um=null,XS=null,Hl=0,zm=null;function In(){if((rt&2)!==0&&Qe!==0)return Qe&-Qe;if(j.T!==null){var r=Yo;return r!==0?r:Wm()}return $()}function ZS(){Vn===0&&(Vn=(Qe&536870912)===0||Je?No():536870912);var r=qn.current;return r!==null&&(r.flags|=32),Vn}function Dn(r,s,a){(r===ft&&(it===2||it===9)||r.cancelPendingCommit!==null)&&(la(r,0),qi(r,Qe,Vn,!1)),ks(r,a),((rt&2)===0||r!==ft)&&(r===ft&&((rt&2)===0&&(Qs|=a),Rt===4&&qi(r,Qe,Vn,!1)),Ir(r))}function JS(r,s,a){if((rt&6)!==0)throw Error(i(327));var c=!a&&(s&124)===0&&(s&r.expiredLanes)===0||wr(r,s),d=c?sk(r,s):Fm(r,s,!0),m=c;do{if(d===0){ia&&!c&&qi(r,s,0,!1);break}else{if(a=r.current.alternate,m&&!rk(a)){d=Fm(r,s,!1),m=!1;continue}if(d===2){if(m=s,r.errorRecoveryDisabledLanes&m)var S=0;else S=r.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){s=S;e:{var w=r;d=Bl;var L=w.current.memoizedState.isDehydrated;if(L&&(la(w,S).flags|=256),S=Fm(w,S,!1),S!==2){if(Mm&&!L){w.errorRecoveryDisabledLanes|=m,Qs|=m,d=4;break e}m=vn,vn=d,m!==null&&(vn===null?vn=m:vn.push.apply(vn,m))}d=S}if(m=!1,d!==2)continue}}if(d===1){la(r,0),qi(r,s,0,!0);break}e:{switch(c=r,m=d,m){case 0:case 1:throw Error(i(345));case 4:if((s&4194048)!==s)break;case 6:qi(c,s,Vn,!zi);break e;case 2:vn=null;break;case 3:case 5:break;default:throw Error(i(329))}if((s&62914560)===s&&(d=jm+300-Yt(),10<d)){if(qi(c,s,Vn,!zi),Os(c,0,!0)!==0)break e;c.timeoutHandle=A1(e1.bind(null,c,a,vn,wd,Pm,s,Vn,Qs,sa,zi,m,2,-0,0),d);break e}e1(c,a,vn,wd,Pm,s,Vn,Qs,sa,zi,m,0,-0,0)}}break}while(!0);Ir(r)}function e1(r,s,a,c,d,m,S,w,L,Q,re,oe,Z,J){if(r.timeoutHandle=-1,oe=s.subtreeFlags,(oe&8192||(oe&16785408)===16785408)&&(Ql={stylesheets:null,count:0,unsuspend:$k},WS(s),oe=zk(),oe!==null)){r.cancelPendingCommit=oe(a1.bind(null,r,s,m,a,c,d,S,w,L,re,1,Z,J)),qi(r,m,S,!Q);return}a1(r,s,m,a,c,d,S,w,L)}function rk(r){for(var s=r;;){var a=s.tag;if((a===0||a===11||a===15)&&s.flags&16384&&(a=s.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!En(m(),d))return!1}catch{return!1}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function qi(r,s,a,c){s&=~Lm,s&=~Qs,r.suspendedLanes|=s,r.pingedLanes&=~s,c&&(r.warmLanes|=s),c=r.expirationTimes;for(var d=s;0<d;){var m=31-Qt(d),S=1<<m;c[m]=-1,d&=~S}a!==0&&Ns(r,a,s)}function Ed(){return(rt&6)===0?(Fl(0),!1):!0}function Bm(){if(Ge!==null){if(it===0)var r=Ge.return;else r=Ge,Qr=Fs=null,im(r),ea=null,Nl=0,r=Ge;for(;r!==null;)NS(r.alternate,r),r=r.return;Ge=null}}function la(r,s){var a=r.timeoutHandle;a!==-1&&(r.timeoutHandle=-1,Sk(a)),a=r.cancelPendingCommit,a!==null&&(r.cancelPendingCommit=null,a()),Bm(),ft=r,Ge=a=Gr(r.current,null),Qe=s,it=0,An=null,zi=!1,ia=wr(r,s),Mm=!1,sa=Vn=Lm=Qs=Bi=Rt=0,vn=Bl=null,Pm=!1,(s&8)!==0&&(s|=s&32);var c=r.entangledLanes;if(c!==0)for(r=r.entanglements,c&=s;0<c;){var d=31-Qt(c),m=1<<d;s|=r[d],c&=~m}return ri=s,Gu(),a}function t1(r,s){He=null,j.H=dd,s===El||s===td?(s=v0(),it=3):s===m0?(s=v0(),it=4):it=s===_S?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,An=s,Ge===null&&(Rt=1,gd(r,zn(s,r.current)))}function n1(){var r=j.H;return j.H=dd,r===null?dd:r}function r1(){var r=j.A;return j.A=tk,r}function Hm(){Rt=4,zi||(Qe&4194048)!==Qe&&qn.current!==null||(ia=!0),(Bi&134217727)===0&&(Qs&134217727)===0||ft===null||qi(ft,Qe,Vn,!1)}function Fm(r,s,a){var c=rt;rt|=2;var d=n1(),m=r1();(ft!==r||Qe!==s)&&(wd=null,la(r,s)),s=!1;var S=Rt;e:do try{if(it!==0&&Ge!==null){var w=Ge,L=An;switch(it){case 8:Bm(),S=6;break e;case 3:case 2:case 9:case 6:qn.current===null&&(s=!0);var Q=it;if(it=0,An=null,ca(r,w,L,Q),a&&ia){S=0;break e}break;default:Q=it,it=0,An=null,ca(r,w,L,Q)}}ik(),S=Rt;break}catch(re){t1(r,re)}while(!0);return s&&r.shellSuspendCounter++,Qr=Fs=null,rt=c,j.H=d,j.A=m,Ge===null&&(ft=null,Qe=0,Gu()),S}function ik(){for(;Ge!==null;)i1(Ge)}function sk(r,s){var a=rt;rt|=2;var c=n1(),d=r1();ft!==r||Qe!==s?(wd=null,xd=Yt()+500,la(r,s)):ia=wr(r,s);e:do try{if(it!==0&&Ge!==null){s=Ge;var m=An;t:switch(it){case 1:it=0,An=null,ca(r,s,m,1);break;case 2:case 9:if(g0(m)){it=0,An=null,s1(s);break}s=function(){it!==2&&it!==9||ft!==r||(it=7),Ir(r)},m.then(s,s);break e;case 3:it=7;break e;case 4:it=5;break e;case 7:g0(m)?(it=0,An=null,s1(s)):(it=0,An=null,ca(r,s,m,7));break;case 5:var S=null;switch(Ge.tag){case 26:S=Ge.memoizedState;case 5:case 27:var w=Ge;if(!S||z1(S)){it=0,An=null;var L=w.sibling;if(L!==null)Ge=L;else{var Q=w.return;Q!==null?(Ge=Q,Td(Q)):Ge=null}break t}}it=0,An=null,ca(r,s,m,5);break;case 6:it=0,An=null,ca(r,s,m,6);break;case 8:Bm(),Rt=6;break e;default:throw Error(i(462))}}ok();break}catch(re){t1(r,re)}while(!0);return Qr=Fs=null,j.H=c,j.A=d,rt=a,Ge!==null?0:(ft=null,Qe=0,Gu(),Rt)}function ok(){for(;Ge!==null&&!Pn();)i1(Ge)}function i1(r){var s=OS(r.alternate,r,ri);r.memoizedProps=r.pendingProps,s===null?Td(r):Ge=s}function s1(r){var s=r,a=s.alternate;switch(s.tag){case 15:case 0:s=TS(a,s,s.pendingProps,s.type,void 0,Qe);break;case 11:s=TS(a,s,s.pendingProps,s.type.render,s.ref,Qe);break;case 5:im(s);default:NS(a,s),s=Ge=o0(s,ri),s=OS(a,s,ri)}r.memoizedProps=r.pendingProps,s===null?Td(r):Ge=s}function ca(r,s,a,c){Qr=Fs=null,im(s),ea=null,Nl=0;var d=s.return;try{if(QO(r,d,s,a,Qe)){Rt=1,gd(r,zn(a,r.current)),Ge=null;return}}catch(m){if(d!==null)throw Ge=d,m;Rt=1,gd(r,zn(a,r.current)),Ge=null;return}s.flags&32768?(Je||c===1?r=!0:ia||(Qe&536870912)!==0?r=!1:(zi=r=!0,(c===2||c===9||c===3||c===6)&&(c=qn.current,c!==null&&c.tag===13&&(c.flags|=16384))),o1(s,r)):Td(s)}function Td(r){var s=r;do{if((s.flags&32768)!==0){o1(s,zi);return}r=s.return;var a=XO(s.alternate,s,ri);if(a!==null){Ge=a;return}if(s=s.sibling,s!==null){Ge=s;return}Ge=s=r}while(s!==null);Rt===0&&(Rt=5)}function o1(r,s){do{var a=ZO(r.alternate,r);if(a!==null){a.flags&=32767,Ge=a;return}if(a=r.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!s&&(r=r.sibling,r!==null)){Ge=r;return}Ge=r=a}while(r!==null);Rt=6,Ge=null}function a1(r,s,a,c,d,m,S,w,L){r.cancelPendingCommit=null;do Cd();while(Xt!==0);if((rt&6)!==0)throw Error(i(327));if(s!==null){if(s===r.current)throw Error(i(177));if(m=s.lanes|s.childLanes,m|=Np,Mu(r,a,m,S,w,L),r===ft&&(Ge=ft=null,Qe=0),oa=s,Fi=r,aa=a,$m=m,Um=d,XS=c,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,uk(ko,function(){return f1(),null})):(r.callbackNode=null,r.callbackPriority=0),c=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||c){c=j.T,j.T=null,d=K.p,K.p=2,S=rt,rt|=4;try{JO(r,s,a)}finally{rt=S,K.p=d,j.T=c}}Xt=1,l1(),c1(),u1()}}function l1(){if(Xt===1){Xt=0;var r=Fi,s=oa,a=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||a){a=j.T,j.T=null;var c=K.p;K.p=2;var d=rt;rt|=4;try{qS(s,r);var m=tg,S=Kb(r.containerInfo),w=m.focusedElem,L=m.selectionRange;if(S!==w&&w&&w.ownerDocument&&Qb(w.ownerDocument.documentElement,w)){if(L!==null&&Ap(w)){var Q=L.start,re=L.end;if(re===void 0&&(re=Q),"selectionStart"in w)w.selectionStart=Q,w.selectionEnd=Math.min(re,w.value.length);else{var oe=w.ownerDocument||document,Z=oe&&oe.defaultView||window;if(Z.getSelection){var J=Z.getSelection(),Me=w.textContent.length,Ae=Math.min(L.start,Me),lt=L.end===void 0?Ae:Math.min(L.end,Me);!J.extend&&Ae>lt&&(S=lt,lt=Ae,Ae=S);var q=Yb(w,Ae),U=Yb(w,lt);if(q&&U&&(J.rangeCount!==1||J.anchorNode!==q.node||J.anchorOffset!==q.offset||J.focusNode!==U.node||J.focusOffset!==U.offset)){var Y=oe.createRange();Y.setStart(q.node,q.offset),J.removeAllRanges(),Ae>lt?(J.addRange(Y),J.extend(U.node,U.offset)):(Y.setEnd(U.node,U.offset),J.addRange(Y))}}}}for(oe=[],J=w;J=J.parentNode;)J.nodeType===1&&oe.push({element:J,left:J.scrollLeft,top:J.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<oe.length;w++){var se=oe[w];se.element.scrollLeft=se.left,se.element.scrollTop=se.top}}$d=!!eg,tg=eg=null}finally{rt=d,K.p=c,j.T=a}}r.current=s,Xt=2}}function c1(){if(Xt===2){Xt=0;var r=Fi,s=oa,a=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||a){a=j.T,j.T=null;var c=K.p;K.p=2;var d=rt;rt|=4;try{zS(r,s.alternate,s)}finally{rt=d,K.p=c,j.T=a}}Xt=3}}function u1(){if(Xt===4||Xt===3){Xt=0,$r();var r=Fi,s=oa,a=aa,c=XS;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?Xt=5:(Xt=0,oa=Fi=null,d1(r,r.pendingLanes));var d=r.pendingLanes;if(d===0&&(Hi=null),ll(a),s=s.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(hn,s,void 0,(s.current.flags&128)===128)}catch{}if(c!==null){s=j.T,d=K.p,K.p=2,j.T=null;try{for(var m=r.onRecoverableError,S=0;S<c.length;S++){var w=c[S];m(w.value,{componentStack:w.stack})}}finally{j.T=s,K.p=d}}(aa&3)!==0&&Cd(),Ir(r),d=r.pendingLanes,(a&4194090)!==0&&(d&42)!==0?r===zm?Hl++:(Hl=0,zm=r):Hl=0,Fl(0)}}function d1(r,s){(r.pooledCacheLanes&=s)===0&&(s=r.pooledCache,s!=null&&(r.pooledCache=null,xl(s)))}function Cd(r){return l1(),c1(),u1(),f1()}function f1(){if(Xt!==5)return!1;var r=Fi,s=$m;$m=0;var a=ll(aa),c=j.T,d=K.p;try{K.p=32>a?32:a,j.T=null,a=Um,Um=null;var m=Fi,S=aa;if(Xt=0,oa=Fi=null,aa=0,(rt&6)!==0)throw Error(i(331));var w=rt;if(rt|=4,QS(m.current),GS(m,m.current,S,a),rt=w,Fl(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(hn,m)}catch{}return!0}finally{K.p=d,j.T=c,d1(r,s)}}function h1(r,s,a){s=zn(a,s),s=vm(r.stateNode,s,2),r=Ni(r,s,2),r!==null&&(ks(r,2),Ir(r))}function dt(r,s,a){if(r.tag===3)h1(r,r,a);else for(;s!==null;){if(s.tag===3){h1(s,r,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Hi===null||!Hi.has(c))){r=zn(a,r),a=yS(2),c=Ni(s,a,2),c!==null&&(vS(a,c,s,r),ks(c,2),Ir(c));break}}s=s.return}}function qm(r,s,a){var c=r.pingCache;if(c===null){c=r.pingCache=new nk;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(a)||(Mm=!0,d.add(a),r=ak.bind(null,r,s,a),s.then(r,r))}function ak(r,s,a){var c=r.pingCache;c!==null&&c.delete(s),r.pingedLanes|=r.suspendedLanes&a,r.warmLanes&=~a,ft===r&&(Qe&a)===a&&(Rt===4||Rt===3&&(Qe&62914560)===Qe&&300>Yt()-jm?(rt&2)===0&&la(r,0):Lm|=a,sa===Qe&&(sa=0)),Ir(r)}function p1(r,s){s===0&&(s=Nu()),r=qo(r,s),r!==null&&(ks(r,s),Ir(r))}function lk(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),p1(r,a)}function ck(r,s){var a=0;switch(r.tag){case 13:var c=r.stateNode,d=r.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=r.stateNode;break;case 22:c=r.stateNode._retryCache;break;default:throw Error(i(314))}c!==null&&c.delete(s),p1(r,a)}function uk(r,s){return Ln(r,s)}var Rd=null,ua=null,Vm=!1,Ad=!1,Gm=!1,Ks=0;function Ir(r){r!==ua&&r.next===null&&(ua===null?Rd=ua=r:ua=ua.next=r),Ad=!0,Vm||(Vm=!0,fk())}function Fl(r,s){if(!Gm&&Ad){Gm=!0;do for(var a=!1,c=Rd;c!==null;){if(r!==0){var d=c.pendingLanes;if(d===0)var m=0;else{var S=c.suspendedLanes,w=c.pingedLanes;m=(1<<31-Qt(42|r)+1)-1,m&=d&~(S&~w),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(a=!0,v1(c,m))}else m=Qe,m=Os(c,c===ft?m:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(m&3)===0||wr(c,m)||(a=!0,v1(c,m));c=c.next}while(a);Gm=!1}}function dk(){m1()}function m1(){Ad=Vm=!1;var r=0;Ks!==0&&(bk()&&(r=Ks),Ks=0);for(var s=Yt(),a=null,c=Rd;c!==null;){var d=c.next,m=g1(c,s);m===0?(c.next=null,a===null?Rd=d:a.next=d,d===null&&(ua=a)):(a=c,(r!==0||(m&3)!==0)&&(Ad=!0)),c=d}Fl(r)}function g1(r,s){for(var a=r.suspendedLanes,c=r.pingedLanes,d=r.expirationTimes,m=r.pendingLanes&-62914561;0<m;){var S=31-Qt(m),w=1<<S,L=d[S];L===-1?((w&a)===0||(w&c)!==0)&&(d[S]=ku(w,s)):L<=s&&(r.expiredLanes|=w),m&=~w}if(s=ft,a=Qe,a=Os(r,r===s?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),c=r.callbackNode,a===0||r===s&&(it===2||it===9)||r.cancelPendingCommit!==null)return c!==null&&c!==null&&Et(c),r.callbackNode=null,r.callbackPriority=0;if((a&3)===0||wr(r,a)){if(s=a&-a,s===r.callbackPriority)return s;switch(c!==null&&Et(c),ll(a)){case 2:case 8:a=Oo;break;case 32:a=ko;break;case 268435456:a=Ci;break;default:a=ko}return c=y1.bind(null,r),a=Ln(a,c),r.callbackPriority=s,r.callbackNode=a,s}return c!==null&&c!==null&&Et(c),r.callbackPriority=2,r.callbackNode=null,2}function y1(r,s){if(Xt!==0&&Xt!==5)return r.callbackNode=null,r.callbackPriority=0,null;var a=r.callbackNode;if(Cd()&&r.callbackNode!==a)return null;var c=Qe;return c=Os(r,r===ft?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),c===0?null:(JS(r,c,s),g1(r,Yt()),r.callbackNode!=null&&r.callbackNode===a?y1.bind(null,r):null)}function v1(r,s){if(Cd())return null;JS(r,s,!0)}function fk(){xk(function(){(rt&6)!==0?Ln(As,dk):m1()})}function Wm(){return Ks===0&&(Ks=No()),Ks}function _1(r){return r==null||typeof r=="symbol"||typeof r=="boolean"?null:typeof r=="function"?r:Uu(""+r)}function b1(r,s){var a=s.ownerDocument.createElement("input");return a.name=s.name,a.value=s.value,r.id&&a.setAttribute("form",r.id),s.parentNode.insertBefore(a,s),r=new FormData(r),a.parentNode.removeChild(a),r}function hk(r,s,a,c,d){if(s==="submit"&&a&&a.stateNode===d){var m=_1((d[fe]||null).action),S=c.submitter;S&&(s=(s=S[fe]||null)?_1(s.formAction):S.getAttribute("formAction"),s!==null&&(m=s,S=null));var w=new Fu("action","action",null,c,d);r.push({event:w,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(Ks!==0){var L=S?b1(d,S):new FormData(d);hm(a,{pending:!0,data:L,method:d.method,action:m},null,L)}}else typeof m=="function"&&(w.preventDefault(),L=S?b1(d,S):new FormData(d),hm(a,{pending:!0,data:L,method:d.method,action:m},m,L))},currentTarget:d}]})}}for(var Ym=0;Ym<kp.length;Ym++){var Qm=kp[Ym],pk=Qm.toLowerCase(),mk=Qm[0].toUpperCase()+Qm.slice(1);or(pk,"on"+mk)}or(Jb,"onAnimationEnd"),or(e0,"onAnimationIteration"),or(t0,"onAnimationStart"),or("dblclick","onDoubleClick"),or("focusin","onFocus"),or("focusout","onBlur"),or(kO,"onTransitionRun"),or(NO,"onTransitionStart"),or(MO,"onTransitionCancel"),or(n0,"onTransitionEnd"),ln("onMouseEnter",["mouseout","mouseover"]),ln("onMouseLeave",["mouseout","mouseover"]),ln("onPointerEnter",["pointerout","pointerover"]),ln("onPointerLeave",["pointerout","pointerover"]),wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),wn("onBeforeInput",["compositionend","keypress","textInput","paste"]),wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ql="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gk=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ql));function S1(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var c=r[a],d=c.event;c=c.listeners;e:{var m=void 0;if(s)for(var S=c.length-1;0<=S;S--){var w=c[S],L=w.instance,Q=w.currentTarget;if(w=w.listener,L!==m&&d.isPropagationStopped())break e;m=w,d.currentTarget=Q;try{m(d)}catch(re){md(re)}d.currentTarget=null,m=L}else for(S=0;S<c.length;S++){if(w=c[S],L=w.instance,Q=w.currentTarget,w=w.listener,L!==m&&d.isPropagationStopped())break e;m=w,d.currentTarget=Q;try{m(d)}catch(re){md(re)}d.currentTarget=null,m=L}}}}function We(r,s){var a=s[xe];a===void 0&&(a=s[xe]=new Set);var c=r+"__bubble";a.has(c)||(x1(s,r,2,!1),a.add(c))}function Km(r,s,a){var c=0;s&&(c|=4),x1(a,r,c,s)}var Id="_reactListening"+Math.random().toString(36).slice(2);function Xm(r){if(!r[Id]){r[Id]=!0,st.forEach(function(a){a!=="selectionchange"&&(gk.has(a)||Km(a,!1,r),Km(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[Id]||(s[Id]=!0,Km("selectionchange",!1,s))}}function x1(r,s,a,c){switch(G1(s)){case 2:var d=Fk;break;case 8:d=qk;break;default:d=dg}a=d.bind(null,s,a,r),d=void 0,!_p||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?r.addEventListener(s,a,{capture:!0,passive:d}):r.addEventListener(s,a,!0):d!==void 0?r.addEventListener(s,a,{passive:d}):r.addEventListener(s,a,!1)}function Zm(r,s,a,c,d){var m=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var S=c.tag;if(S===3||S===4){var w=c.stateNode.containerInfo;if(w===d)break;if(S===4)for(S=c.return;S!==null;){var L=S.tag;if((L===3||L===4)&&S.stateNode.containerInfo===d)return;S=S.return}for(;w!==null;){if(S=ze(w),S===null)return;if(L=S.tag,L===5||L===6||L===26||L===27){c=m=S;continue e}w=w.parentNode}}c=c.return}Ib(function(){var Q=m,re=yp(a),oe=[];e:{var Z=r0.get(r);if(Z!==void 0){var J=Fu,Me=r;switch(r){case"keypress":if(Bu(a)===0)break e;case"keydown":case"keyup":J=uO;break;case"focusin":Me="focus",J=wp;break;case"focusout":Me="blur",J=wp;break;case"beforeblur":case"afterblur":J=wp;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":J=kb;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":J=ZD;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":J=hO;break;case Jb:case e0:case t0:J=tO;break;case n0:J=mO;break;case"scroll":case"scrollend":J=KD;break;case"wheel":J=yO;break;case"copy":case"cut":case"paste":J=rO;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":J=Mb;break;case"toggle":case"beforetoggle":J=_O}var Ae=(s&4)!==0,lt=!Ae&&(r==="scroll"||r==="scrollend"),q=Ae?Z!==null?Z+"Capture":null:Z;Ae=[];for(var U=Q,Y;U!==null;){var se=U;if(Y=se.stateNode,se=se.tag,se!==5&&se!==26&&se!==27||Y===null||q===null||(se=cl(U,q),se!=null&&Ae.push(Vl(U,se,Y))),lt)break;U=U.return}0<Ae.length&&(Z=new J(Z,Me,null,a,re),oe.push({event:Z,listeners:Ae}))}}if((s&7)===0){e:{if(Z=r==="mouseover"||r==="pointerover",J=r==="mouseout"||r==="pointerout",Z&&a!==gp&&(Me=a.relatedTarget||a.fromElement)&&(ze(Me)||Me[ye]))break e;if((J||Z)&&(Z=re.window===re?re:(Z=re.ownerDocument)?Z.defaultView||Z.parentWindow:window,J?(Me=a.relatedTarget||a.toElement,J=Q,Me=Me?ze(Me):null,Me!==null&&(lt=l(Me),Ae=Me.tag,Me!==lt||Ae!==5&&Ae!==27&&Ae!==6)&&(Me=null)):(J=null,Me=Q),J!==Me)){if(Ae=kb,se="onMouseLeave",q="onMouseEnter",U="mouse",(r==="pointerout"||r==="pointerover")&&(Ae=Mb,se="onPointerLeave",q="onPointerEnter",U="pointer"),lt=J==null?Z:yt(J),Y=Me==null?Z:yt(Me),Z=new Ae(se,U+"leave",J,a,re),Z.target=lt,Z.relatedTarget=Y,se=null,ze(re)===Q&&(Ae=new Ae(q,U+"enter",Me,a,re),Ae.target=Y,Ae.relatedTarget=lt,se=Ae),lt=se,J&&Me)t:{for(Ae=J,q=Me,U=0,Y=Ae;Y;Y=da(Y))U++;for(Y=0,se=q;se;se=da(se))Y++;for(;0<U-Y;)Ae=da(Ae),U--;for(;0<Y-U;)q=da(q),Y--;for(;U--;){if(Ae===q||q!==null&&Ae===q.alternate)break t;Ae=da(Ae),q=da(q)}Ae=null}else Ae=null;J!==null&&w1(oe,Z,J,Ae,!1),Me!==null&&lt!==null&&w1(oe,lt,Me,Ae,!0)}}e:{if(Z=Q?yt(Q):window,J=Z.nodeName&&Z.nodeName.toLowerCase(),J==="select"||J==="input"&&Z.type==="file")var ge=Hb;else if(zb(Z))if(Fb)ge=IO;else{ge=RO;var Fe=CO}else J=Z.nodeName,!J||J.toLowerCase()!=="input"||Z.type!=="checkbox"&&Z.type!=="radio"?Q&&mp(Q.elementType)&&(ge=Hb):ge=AO;if(ge&&(ge=ge(r,Q))){Bb(oe,ge,a,re);break e}Fe&&Fe(r,Z,Q),r==="focusout"&&Q&&Z.type==="number"&&Q.memoizedProps.value!=null&&pp(Z,"number",Z.value)}switch(Fe=Q?yt(Q):window,r){case"focusin":(zb(Fe)||Fe.contentEditable==="true")&&(Bo=Fe,Ip=Q,yl=null);break;case"focusout":yl=Ip=Bo=null;break;case"mousedown":Dp=!0;break;case"contextmenu":case"mouseup":case"dragend":Dp=!1,Xb(oe,a,re);break;case"selectionchange":if(OO)break;case"keydown":case"keyup":Xb(oe,a,re)}var we;if(Tp)e:{switch(r){case"compositionstart":var De="onCompositionStart";break e;case"compositionend":De="onCompositionEnd";break e;case"compositionupdate":De="onCompositionUpdate";break e}De=void 0}else zo?$b(r,a)&&(De="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(De="onCompositionStart");De&&(Lb&&a.locale!=="ko"&&(zo||De!=="onCompositionStart"?De==="onCompositionEnd"&&zo&&(we=Db()):(Ii=re,bp="value"in Ii?Ii.value:Ii.textContent,zo=!0)),Fe=Dd(Q,De),0<Fe.length&&(De=new Nb(De,r,null,a,re),oe.push({event:De,listeners:Fe}),we?De.data=we:(we=Ub(a),we!==null&&(De.data=we)))),(we=SO?xO(r,a):wO(r,a))&&(De=Dd(Q,"onBeforeInput"),0<De.length&&(Fe=new Nb("onBeforeInput","beforeinput",null,a,re),oe.push({event:Fe,listeners:De}),Fe.data=we)),hk(oe,r,Q,a,re)}S1(oe,s)})}function Vl(r,s,a){return{instance:r,listener:s,currentTarget:a}}function Dd(r,s){for(var a=s+"Capture",c=[];r!==null;){var d=r,m=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||m===null||(d=cl(r,a),d!=null&&c.unshift(Vl(r,d,m)),d=cl(r,s),d!=null&&c.push(Vl(r,d,m))),r.tag===3)return c;r=r.return}return[]}function da(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r||null}function w1(r,s,a,c,d){for(var m=s._reactName,S=[];a!==null&&a!==c;){var w=a,L=w.alternate,Q=w.stateNode;if(w=w.tag,L!==null&&L===c)break;w!==5&&w!==26&&w!==27||Q===null||(L=Q,d?(Q=cl(a,m),Q!=null&&S.unshift(Vl(a,Q,L))):d||(Q=cl(a,m),Q!=null&&S.push(Vl(a,Q,L)))),a=a.return}S.length!==0&&r.push({event:s,listeners:S})}var yk=/\r\n?/g,vk=/\u0000|\uFFFD/g;function E1(r){return(typeof r=="string"?r:""+r).replace(yk,`
`).replace(vk,"")}function T1(r,s){return s=E1(s),E1(r)===s}function Od(){}function at(r,s,a,c,d,m){switch(a){case"children":typeof c=="string"?s==="body"||s==="textarea"&&c===""||jo(r,c):(typeof c=="number"||typeof c=="bigint")&&s!=="body"&&jo(r,""+c);break;case"className":Fr(r,"class",c);break;case"tabIndex":Fr(r,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":Fr(r,a,c);break;case"style":Rb(r,c,m);break;case"data":if(s!=="object"){Fr(r,"data",c);break}case"src":case"href":if(c===""&&(s!=="a"||a!=="href")){r.removeAttribute(a);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){r.removeAttribute(a);break}c=Uu(""+c),r.setAttribute(a,c);break;case"action":case"formAction":if(typeof c=="function"){r.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(a==="formAction"?(s!=="input"&&at(r,s,"name",d.name,d,null),at(r,s,"formEncType",d.formEncType,d,null),at(r,s,"formMethod",d.formMethod,d,null),at(r,s,"formTarget",d.formTarget,d,null)):(at(r,s,"encType",d.encType,d,null),at(r,s,"method",d.method,d,null),at(r,s,"target",d.target,d,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){r.removeAttribute(a);break}c=Uu(""+c),r.setAttribute(a,c);break;case"onClick":c!=null&&(r.onclick=Od);break;case"onScroll":c!=null&&We("scroll",r);break;case"onScrollEnd":c!=null&&We("scrollend",r);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(a=c.__html,a!=null){if(d.children!=null)throw Error(i(60));r.innerHTML=a}}break;case"multiple":r.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":r.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){r.removeAttribute("xlink:href");break}a=Uu(""+c),r.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(a,""+c):r.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(a,""):r.removeAttribute(a);break;case"capture":case"download":c===!0?r.setAttribute(a,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(a,c):r.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?r.setAttribute(a,c):r.removeAttribute(a);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?r.removeAttribute(a):r.setAttribute(a,c);break;case"popover":We("beforetoggle",r),We("toggle",r),Hr(r,"popover",c);break;case"xlinkActuate":Pe(r,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":Pe(r,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":Pe(r,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":Pe(r,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":Pe(r,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":Pe(r,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":Pe(r,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":Pe(r,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":Pe(r,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":Hr(r,"is",c);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=YD.get(a)||a,Hr(r,a,c))}}function Jm(r,s,a,c,d,m){switch(a){case"style":Rb(r,c,m);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(a=c.__html,a!=null){if(d.children!=null)throw Error(i(60));r.innerHTML=a}}break;case"children":typeof c=="string"?jo(r,c):(typeof c=="number"||typeof c=="bigint")&&jo(r,""+c);break;case"onScroll":c!=null&&We("scroll",r);break;case"onScrollEnd":c!=null&&We("scrollend",r);break;case"onClick":c!=null&&(r.onclick=Od);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Er.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(d=a.endsWith("Capture"),s=a.slice(2,d?a.length-7:void 0),m=r[fe]||null,m=m!=null?m[a]:null,typeof m=="function"&&r.removeEventListener(s,m,d),typeof c=="function")){typeof m!="function"&&m!==null&&(a in r?r[a]=null:r.hasAttribute(a)&&r.removeAttribute(a)),r.addEventListener(s,c,d);break e}a in r?r[a]=c:c===!0?r.setAttribute(a,""):Hr(r,a,c)}}}function Zt(r,s,a){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":We("error",r),We("load",r);var c=!1,d=!1,m;for(m in a)if(a.hasOwnProperty(m)){var S=a[m];if(S!=null)switch(m){case"src":c=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:at(r,s,m,S,a,null)}}d&&at(r,s,"srcSet",a.srcSet,a,null),c&&at(r,s,"src",a.src,a,null);return;case"input":We("invalid",r);var w=m=S=d=null,L=null,Q=null;for(c in a)if(a.hasOwnProperty(c)){var re=a[c];if(re!=null)switch(c){case"name":d=re;break;case"type":S=re;break;case"checked":L=re;break;case"defaultChecked":Q=re;break;case"value":m=re;break;case"defaultValue":w=re;break;case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(i(137,s));break;default:at(r,s,c,re,a,null)}}wb(r,m,w,L,Q,S,d,!1),ju(r);return;case"select":We("invalid",r),c=S=m=null;for(d in a)if(a.hasOwnProperty(d)&&(w=a[d],w!=null))switch(d){case"value":m=w;break;case"defaultValue":S=w;break;case"multiple":c=w;default:at(r,s,d,w,a,null)}s=m,a=S,r.multiple=!!c,s!=null?Po(r,!!c,s,!1):a!=null&&Po(r,!!c,a,!0);return;case"textarea":We("invalid",r),m=d=c=null;for(S in a)if(a.hasOwnProperty(S)&&(w=a[S],w!=null))switch(S){case"value":c=w;break;case"defaultValue":d=w;break;case"children":m=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(i(91));break;default:at(r,s,S,w,a,null)}Tb(r,c,d,m),ju(r);return;case"option":for(L in a)if(a.hasOwnProperty(L)&&(c=a[L],c!=null))switch(L){case"selected":r.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:at(r,s,L,c,a,null)}return;case"dialog":We("beforetoggle",r),We("toggle",r),We("cancel",r),We("close",r);break;case"iframe":case"object":We("load",r);break;case"video":case"audio":for(c=0;c<ql.length;c++)We(ql[c],r);break;case"image":We("error",r),We("load",r);break;case"details":We("toggle",r);break;case"embed":case"source":case"link":We("error",r),We("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(c=a[Q],c!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:at(r,s,Q,c,a,null)}return;default:if(mp(s)){for(re in a)a.hasOwnProperty(re)&&(c=a[re],c!==void 0&&Jm(r,s,re,c,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(c=a[w],c!=null&&at(r,s,w,c,a,null))}function _k(r,s,a,c){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,m=null,S=null,w=null,L=null,Q=null,re=null;for(J in a){var oe=a[J];if(a.hasOwnProperty(J)&&oe!=null)switch(J){case"checked":break;case"value":break;case"defaultValue":L=oe;default:c.hasOwnProperty(J)||at(r,s,J,null,c,oe)}}for(var Z in c){var J=c[Z];if(oe=a[Z],c.hasOwnProperty(Z)&&(J!=null||oe!=null))switch(Z){case"type":m=J;break;case"name":d=J;break;case"checked":Q=J;break;case"defaultChecked":re=J;break;case"value":S=J;break;case"defaultValue":w=J;break;case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(i(137,s));break;default:J!==oe&&at(r,s,Z,J,c,oe)}}hp(r,S,w,L,Q,re,m,d);return;case"select":J=S=w=Z=null;for(m in a)if(L=a[m],a.hasOwnProperty(m)&&L!=null)switch(m){case"value":break;case"multiple":J=L;default:c.hasOwnProperty(m)||at(r,s,m,null,c,L)}for(d in c)if(m=c[d],L=a[d],c.hasOwnProperty(d)&&(m!=null||L!=null))switch(d){case"value":Z=m;break;case"defaultValue":w=m;break;case"multiple":S=m;default:m!==L&&at(r,s,d,m,c,L)}s=w,a=S,c=J,Z!=null?Po(r,!!a,Z,!1):!!c!=!!a&&(s!=null?Po(r,!!a,s,!0):Po(r,!!a,a?[]:"",!1));return;case"textarea":J=Z=null;for(w in a)if(d=a[w],a.hasOwnProperty(w)&&d!=null&&!c.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:at(r,s,w,null,c,d)}for(S in c)if(d=c[S],m=a[S],c.hasOwnProperty(S)&&(d!=null||m!=null))switch(S){case"value":Z=d;break;case"defaultValue":J=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(i(91));break;default:d!==m&&at(r,s,S,d,c,m)}Eb(r,Z,J);return;case"option":for(var Me in a)if(Z=a[Me],a.hasOwnProperty(Me)&&Z!=null&&!c.hasOwnProperty(Me))switch(Me){case"selected":r.selected=!1;break;default:at(r,s,Me,null,c,Z)}for(L in c)if(Z=c[L],J=a[L],c.hasOwnProperty(L)&&Z!==J&&(Z!=null||J!=null))switch(L){case"selected":r.selected=Z&&typeof Z!="function"&&typeof Z!="symbol";break;default:at(r,s,L,Z,c,J)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ae in a)Z=a[Ae],a.hasOwnProperty(Ae)&&Z!=null&&!c.hasOwnProperty(Ae)&&at(r,s,Ae,null,c,Z);for(Q in c)if(Z=c[Q],J=a[Q],c.hasOwnProperty(Q)&&Z!==J&&(Z!=null||J!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(i(137,s));break;default:at(r,s,Q,Z,c,J)}return;default:if(mp(s)){for(var lt in a)Z=a[lt],a.hasOwnProperty(lt)&&Z!==void 0&&!c.hasOwnProperty(lt)&&Jm(r,s,lt,void 0,c,Z);for(re in c)Z=c[re],J=a[re],!c.hasOwnProperty(re)||Z===J||Z===void 0&&J===void 0||Jm(r,s,re,Z,c,J);return}}for(var q in a)Z=a[q],a.hasOwnProperty(q)&&Z!=null&&!c.hasOwnProperty(q)&&at(r,s,q,null,c,Z);for(oe in c)Z=c[oe],J=a[oe],!c.hasOwnProperty(oe)||Z===J||Z==null&&J==null||at(r,s,oe,Z,c,J)}var eg=null,tg=null;function kd(r){return r.nodeType===9?r:r.ownerDocument}function C1(r){switch(r){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function R1(r,s){if(r===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return r===1&&s==="foreignObject"?0:r}function ng(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var rg=null;function bk(){var r=window.event;return r&&r.type==="popstate"?r===rg?!1:(rg=r,!0):(rg=null,!1)}var A1=typeof setTimeout=="function"?setTimeout:void 0,Sk=typeof clearTimeout=="function"?clearTimeout:void 0,I1=typeof Promise=="function"?Promise:void 0,xk=typeof queueMicrotask=="function"?queueMicrotask:typeof I1<"u"?function(r){return I1.resolve(null).then(r).catch(wk)}:A1;function wk(r){setTimeout(function(){throw r})}function Vi(r){return r==="head"}function D1(r,s){var a=s,c=0,d=0;do{var m=a.nextSibling;if(r.removeChild(a),m&&m.nodeType===8)if(a=m.data,a==="/$"){if(0<c&&8>c){a=c;var S=r.ownerDocument;if(a&1&&Gl(S.documentElement),a&2&&Gl(S.body),a&4)for(a=S.head,Gl(a),S=a.firstChild;S;){var w=S.nextSibling,L=S.nodeName;S[_e]||L==="SCRIPT"||L==="STYLE"||L==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=w}}if(d===0){r.removeChild(m),ec(s);return}d--}else a==="$"||a==="$?"||a==="$!"?d++:c=a.charCodeAt(0)-48;else c=0;a=m}while(a);ec(s)}function ig(r){var s=r.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var a=s;switch(s=s.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ig(a),Se(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}r.removeChild(a)}}function Ek(r,s,a,c){for(;r.nodeType===1;){var d=a;if(r.nodeName.toLowerCase()!==s.toLowerCase()){if(!c&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(c){if(!r[_e])switch(s){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(m=r.getAttribute("rel"),m==="stylesheet"&&r.hasAttribute("data-precedence"))break;if(m!==d.rel||r.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||r.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||r.getAttribute("title")!==(d.title==null?null:d.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(m=r.getAttribute("src"),(m!==(d.src==null?null:d.src)||r.getAttribute("type")!==(d.type==null?null:d.type)||r.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&m&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}}else if(s==="input"&&r.type==="hidden"){var m=d.name==null?null:""+d.name;if(d.type==="hidden"&&r.getAttribute("name")===m)return r}else return r;if(r=lr(r.nextSibling),r===null)break}return null}function Tk(r,s,a){if(s==="")return null;for(;r.nodeType!==3;)if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!a||(r=lr(r.nextSibling),r===null))return null;return r}function sg(r){return r.data==="$!"||r.data==="$?"&&r.ownerDocument.readyState==="complete"}function Ck(r,s){var a=r.ownerDocument;if(r.data!=="$?"||a.readyState==="complete")s();else{var c=function(){s(),a.removeEventListener("DOMContentLoaded",c)};a.addEventListener("DOMContentLoaded",c),r._reactRetry=c}}function lr(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return r}var og=null;function O1(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}function k1(r,s,a){switch(s=kd(a),r){case"html":if(r=s.documentElement,!r)throw Error(i(452));return r;case"head":if(r=s.head,!r)throw Error(i(453));return r;case"body":if(r=s.body,!r)throw Error(i(454));return r;default:throw Error(i(451))}}function Gl(r){for(var s=r.attributes;s.length;)r.removeAttributeNode(s[0]);Se(r)}var Gn=new Map,N1=new Set;function Nd(r){return typeof r.getRootNode=="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}var ii=K.d;K.d={f:Rk,r:Ak,D:Ik,C:Dk,L:Ok,m:kk,X:Mk,S:Nk,M:Lk};function Rk(){var r=ii.f(),s=Ed();return r||s}function Ak(r){var s=Ze(r);s!==null&&s.tag===5&&s.type==="form"?J0(s):ii.r(r)}var fa=typeof document>"u"?null:document;function M1(r,s,a){var c=fa;if(c&&typeof s=="string"&&s){var d=Un(s);d='link[rel="'+r+'"][href="'+d+'"]',typeof a=="string"&&(d+='[crossorigin="'+a+'"]'),N1.has(d)||(N1.add(d),r={rel:r,crossOrigin:a,href:s},c.querySelector(d)===null&&(s=c.createElement("link"),Zt(s,"link",r),Le(s),c.head.appendChild(s)))}}function Ik(r){ii.D(r),M1("dns-prefetch",r,null)}function Dk(r,s){ii.C(r,s),M1("preconnect",r,s)}function Ok(r,s,a){ii.L(r,s,a);var c=fa;if(c&&r&&s){var d='link[rel="preload"][as="'+Un(s)+'"]';s==="image"&&a&&a.imageSrcSet?(d+='[imagesrcset="'+Un(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(d+='[imagesizes="'+Un(a.imageSizes)+'"]')):d+='[href="'+Un(r)+'"]';var m=d;switch(s){case"style":m=ha(r);break;case"script":m=pa(r)}Gn.has(m)||(r=y({rel:"preload",href:s==="image"&&a&&a.imageSrcSet?void 0:r,as:s},a),Gn.set(m,r),c.querySelector(d)!==null||s==="style"&&c.querySelector(Wl(m))||s==="script"&&c.querySelector(Yl(m))||(s=c.createElement("link"),Zt(s,"link",r),Le(s),c.head.appendChild(s)))}}function kk(r,s){ii.m(r,s);var a=fa;if(a&&r){var c=s&&typeof s.as=="string"?s.as:"script",d='link[rel="modulepreload"][as="'+Un(c)+'"][href="'+Un(r)+'"]',m=d;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=pa(r)}if(!Gn.has(m)&&(r=y({rel:"modulepreload",href:r},s),Gn.set(m,r),a.querySelector(d)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Yl(m)))return}c=a.createElement("link"),Zt(c,"link",r),Le(c),a.head.appendChild(c)}}}function Nk(r,s,a){ii.S(r,s,a);var c=fa;if(c&&r){var d=Tt(c).hoistableStyles,m=ha(r);s=s||"default";var S=d.get(m);if(!S){var w={loading:0,preload:null};if(S=c.querySelector(Wl(m)))w.loading=5;else{r=y({rel:"stylesheet",href:r,"data-precedence":s},a),(a=Gn.get(m))&&ag(r,a);var L=S=c.createElement("link");Le(L),Zt(L,"link",r),L._p=new Promise(function(Q,re){L.onload=Q,L.onerror=re}),L.addEventListener("load",function(){w.loading|=1}),L.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Md(S,s,c)}S={type:"stylesheet",instance:S,count:1,state:w},d.set(m,S)}}}function Mk(r,s){ii.X(r,s);var a=fa;if(a&&r){var c=Tt(a).hoistableScripts,d=pa(r),m=c.get(d);m||(m=a.querySelector(Yl(d)),m||(r=y({src:r,async:!0},s),(s=Gn.get(d))&&lg(r,s),m=a.createElement("script"),Le(m),Zt(m,"link",r),a.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(d,m))}}function Lk(r,s){ii.M(r,s);var a=fa;if(a&&r){var c=Tt(a).hoistableScripts,d=pa(r),m=c.get(d);m||(m=a.querySelector(Yl(d)),m||(r=y({src:r,async:!0,type:"module"},s),(s=Gn.get(d))&&lg(r,s),m=a.createElement("script"),Le(m),Zt(m,"link",r),a.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(d,m))}}function L1(r,s,a,c){var d=(d=pe.current)?Nd(d):null;if(!d)throw Error(i(446));switch(r){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(s=ha(a.href),a=Tt(d).hoistableStyles,c=a.get(s),c||(c={type:"style",instance:null,count:0,state:null},a.set(s,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){r=ha(a.href);var m=Tt(d).hoistableStyles,S=m.get(r);if(S||(d=d.ownerDocument||d,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(r,S),(m=d.querySelector(Wl(r)))&&!m._p&&(S.instance=m,S.state.loading=5),Gn.has(r)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Gn.set(r,a),m||Pk(d,r,a,S.state))),s&&c===null)throw Error(i(528,""));return S}if(s&&c!==null)throw Error(i(529,""));return null;case"script":return s=a.async,a=a.src,typeof a=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=pa(a),a=Tt(d).hoistableScripts,c=a.get(s),c||(c={type:"script",instance:null,count:0,state:null},a.set(s,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,r))}}function ha(r){return'href="'+Un(r)+'"'}function Wl(r){return'link[rel="stylesheet"]['+r+"]"}function P1(r){return y({},r,{"data-precedence":r.precedence,precedence:null})}function Pk(r,s,a,c){r.querySelector('link[rel="preload"][as="style"]['+s+"]")?c.loading=1:(s=r.createElement("link"),c.preload=s,s.addEventListener("load",function(){return c.loading|=1}),s.addEventListener("error",function(){return c.loading|=2}),Zt(s,"link",a),Le(s),r.head.appendChild(s))}function pa(r){return'[src="'+Un(r)+'"]'}function Yl(r){return"script[async]"+r}function j1(r,s,a){if(s.count++,s.instance===null)switch(s.type){case"style":var c=r.querySelector('style[data-href~="'+Un(a.href)+'"]');if(c)return s.instance=c,Le(c),c;var d=y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return c=(r.ownerDocument||r).createElement("style"),Le(c),Zt(c,"style",d),Md(c,a.precedence,r),s.instance=c;case"stylesheet":d=ha(a.href);var m=r.querySelector(Wl(d));if(m)return s.state.loading|=4,s.instance=m,Le(m),m;c=P1(a),(d=Gn.get(d))&&ag(c,d),m=(r.ownerDocument||r).createElement("link"),Le(m);var S=m;return S._p=new Promise(function(w,L){S.onload=w,S.onerror=L}),Zt(m,"link",c),s.state.loading|=4,Md(m,a.precedence,r),s.instance=m;case"script":return m=pa(a.src),(d=r.querySelector(Yl(m)))?(s.instance=d,Le(d),d):(c=a,(d=Gn.get(m))&&(c=y({},a),lg(c,d)),r=r.ownerDocument||r,d=r.createElement("script"),Le(d),Zt(d,"link",c),r.head.appendChild(d),s.instance=d);case"void":return null;default:throw Error(i(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(c=s.instance,s.state.loading|=4,Md(c,a.precedence,r));return s.instance}function Md(r,s,a){for(var c=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=c.length?c[c.length-1]:null,m=d,S=0;S<c.length;S++){var w=c[S];if(w.dataset.precedence===s)m=w;else if(m!==d)break}m?m.parentNode.insertBefore(r,m.nextSibling):(s=a.nodeType===9?a.head:a,s.insertBefore(r,s.firstChild))}function ag(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.title==null&&(r.title=s.title)}function lg(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.integrity==null&&(r.integrity=s.integrity)}var Ld=null;function $1(r,s,a){if(Ld===null){var c=new Map,d=Ld=new Map;d.set(a,c)}else d=Ld,c=d.get(a),c||(c=new Map,d.set(a,c));if(c.has(r))return c;for(c.set(r,null),a=a.getElementsByTagName(r),d=0;d<a.length;d++){var m=a[d];if(!(m[_e]||m[ce]||r==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var S=m.getAttribute(s)||"";S=r+S;var w=c.get(S);w?w.push(m):c.set(S,[m])}}return c}function U1(r,s,a){r=r.ownerDocument||r,r.head.insertBefore(a,s==="title"?r.querySelector("head > title"):null)}function jk(r,s,a){if(a===1||s.itemProp!=null)return!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return r=s.disabled,typeof s.precedence=="string"&&r==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function z1(r){return!(r.type==="stylesheet"&&(r.state.loading&3)===0)}var Ql=null;function $k(){}function Uk(r,s,a){if(Ql===null)throw Error(i(475));var c=Ql;if(s.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var d=ha(a.href),m=r.querySelector(Wl(d));if(m){r=m._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(c.count++,c=Pd.bind(c),r.then(c,c)),s.state.loading|=4,s.instance=m,Le(m);return}m=r.ownerDocument||r,a=P1(a),(d=Gn.get(d))&&ag(a,d),m=m.createElement("link"),Le(m);var S=m;S._p=new Promise(function(w,L){S.onload=w,S.onerror=L}),Zt(m,"link",a),s.instance=m}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(s,r),(r=s.state.preload)&&(s.state.loading&3)===0&&(c.count++,s=Pd.bind(c),r.addEventListener("load",s),r.addEventListener("error",s))}}function zk(){if(Ql===null)throw Error(i(475));var r=Ql;return r.stylesheets&&r.count===0&&cg(r,r.stylesheets),0<r.count?function(s){var a=setTimeout(function(){if(r.stylesheets&&cg(r,r.stylesheets),r.unsuspend){var c=r.unsuspend;r.unsuspend=null,c()}},6e4);return r.unsuspend=s,function(){r.unsuspend=null,clearTimeout(a)}}:null}function Pd(){if(this.count--,this.count===0){if(this.stylesheets)cg(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}var jd=null;function cg(r,s){r.stylesheets=null,r.unsuspend!==null&&(r.count++,jd=new Map,s.forEach(Bk,r),jd=null,Pd.call(r))}function Bk(r,s){if(!(s.state.loading&4)){var a=jd.get(r);if(a)var c=a.get(null);else{a=new Map,jd.set(r,a);for(var d=r.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<d.length;m++){var S=d[m];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),c=S)}c&&a.set(null,c)}d=s.instance,S=d.getAttribute("data-precedence"),m=a.get(S)||c,m===c&&a.set(null,d),a.set(S,d),this.count++,c=Pd.bind(this),d.addEventListener("load",c),d.addEventListener("error",c),m?m.parentNode.insertBefore(d,m.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(d,r.firstChild)),s.state.loading|=4}}var Kl={$$typeof:R,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function Hk(r,s,a,c,d,m,S,w){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Mo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mo(0),this.hiddenUpdates=Mo(null),this.identifierPrefix=c,this.onUncaughtError=d,this.onCaughtError=m,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function B1(r,s,a,c,d,m,S,w,L,Q,re,oe){return r=new Hk(r,s,a,S,w,L,Q,oe),s=1,m===!0&&(s|=24),m=Tn(3,null,null,s),r.current=m,m.stateNode=r,s=qp(),s.refCount++,r.pooledCache=s,s.refCount++,m.memoizedState={element:c,isDehydrated:a,cache:s},Yp(m),r}function H1(r){return r?(r=Vo,r):Vo}function F1(r,s,a,c,d,m){d=H1(d),c.context===null?c.context=d:c.pendingContext=d,c=ki(s),c.payload={element:a},m=m===void 0?null:m,m!==null&&(c.callback=m),a=Ni(r,c,s),a!==null&&(Dn(a,r,s),Cl(a,r,s))}function q1(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function ug(r,s){q1(r,s),(r=r.alternate)&&q1(r,s)}function V1(r){if(r.tag===13){var s=qo(r,67108864);s!==null&&Dn(s,r,67108864),ug(r,67108864)}}var $d=!0;function Fk(r,s,a,c){var d=j.T;j.T=null;var m=K.p;try{K.p=2,dg(r,s,a,c)}finally{K.p=m,j.T=d}}function qk(r,s,a,c){var d=j.T;j.T=null;var m=K.p;try{K.p=8,dg(r,s,a,c)}finally{K.p=m,j.T=d}}function dg(r,s,a,c){if($d){var d=fg(c);if(d===null)Zm(r,s,c,Ud,a),W1(r,c);else if(Gk(d,r,s,a,c))c.stopPropagation();else if(W1(r,c),s&4&&-1<Vk.indexOf(r)){for(;d!==null;){var m=Ze(d);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var S=zr(m.pendingLanes);if(S!==0){var w=m;for(w.pendingLanes|=2,w.entangledLanes|=2;S;){var L=1<<31-Qt(S);w.entanglements[1]|=L,S&=~L}Ir(m),(rt&6)===0&&(xd=Yt()+500,Fl(0))}}break;case 13:w=qo(m,2),w!==null&&Dn(w,m,2),Ed(),ug(m,2)}if(m=fg(c),m===null&&Zm(r,s,c,Ud,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else Zm(r,s,c,null,a)}}function fg(r){return r=yp(r),hg(r)}var Ud=null;function hg(r){if(Ud=null,r=ze(r),r!==null){var s=l(r);if(s===null)r=null;else{var a=s.tag;if(a===13){if(r=u(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null)}}return Ud=r,null}function G1(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(sl()){case As:return 2;case Oo:return 8;case ko:case Ur:return 32;case Ci:return 268435456;default:return 32}default:return 32}}var pg=!1,Gi=null,Wi=null,Yi=null,Xl=new Map,Zl=new Map,Qi=[],Vk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function W1(r,s){switch(r){case"focusin":case"focusout":Gi=null;break;case"dragenter":case"dragleave":Wi=null;break;case"mouseover":case"mouseout":Yi=null;break;case"pointerover":case"pointerout":Xl.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zl.delete(s.pointerId)}}function Jl(r,s,a,c,d,m){return r===null||r.nativeEvent!==m?(r={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},s!==null&&(s=Ze(s),s!==null&&V1(s)),r):(r.eventSystemFlags|=c,s=r.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),r)}function Gk(r,s,a,c,d){switch(s){case"focusin":return Gi=Jl(Gi,r,s,a,c,d),!0;case"dragenter":return Wi=Jl(Wi,r,s,a,c,d),!0;case"mouseover":return Yi=Jl(Yi,r,s,a,c,d),!0;case"pointerover":var m=d.pointerId;return Xl.set(m,Jl(Xl.get(m)||null,r,s,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,Zl.set(m,Jl(Zl.get(m)||null,r,s,a,c,d)),!0}return!1}function Y1(r){var s=ze(r.target);if(s!==null){var a=l(s);if(a!==null){if(s=a.tag,s===13){if(s=u(a),s!==null){r.blockedOn=s,W(r.priority,function(){if(a.tag===13){var c=In();c=al(c);var d=qo(a,c);d!==null&&Dn(d,a,c),ug(a,c)}});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function zd(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=fg(r.nativeEvent);if(a===null){a=r.nativeEvent;var c=new a.constructor(a.type,a);gp=c,a.target.dispatchEvent(c),gp=null}else return s=Ze(a),s!==null&&V1(s),r.blockedOn=a,!1;s.shift()}return!0}function Q1(r,s,a){zd(r)&&a.delete(s)}function Wk(){pg=!1,Gi!==null&&zd(Gi)&&(Gi=null),Wi!==null&&zd(Wi)&&(Wi=null),Yi!==null&&zd(Yi)&&(Yi=null),Xl.forEach(Q1),Zl.forEach(Q1)}function Bd(r,s){r.blockedOn===s&&(r.blockedOn=null,pg||(pg=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Wk)))}var Hd=null;function K1(r){Hd!==r&&(Hd=r,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){Hd===r&&(Hd=null);for(var s=0;s<r.length;s+=3){var a=r[s],c=r[s+1],d=r[s+2];if(typeof c!="function"){if(hg(c||a)===null)continue;break}var m=Ze(a);m!==null&&(r.splice(s,3),s-=3,hm(m,{pending:!0,data:d,method:a.method,action:c},c,d))}}))}function ec(r){function s(L){return Bd(L,r)}Gi!==null&&Bd(Gi,r),Wi!==null&&Bd(Wi,r),Yi!==null&&Bd(Yi,r),Xl.forEach(s),Zl.forEach(s);for(var a=0;a<Qi.length;a++){var c=Qi[a];c.blockedOn===r&&(c.blockedOn=null)}for(;0<Qi.length&&(a=Qi[0],a.blockedOn===null);)Y1(a),a.blockedOn===null&&Qi.shift();if(a=(r.ownerDocument||r).$$reactFormReplay,a!=null)for(c=0;c<a.length;c+=3){var d=a[c],m=a[c+1],S=d[fe]||null;if(typeof m=="function")S||K1(a);else if(S){var w=null;if(m&&m.hasAttribute("formAction")){if(d=m,S=m[fe]||null)w=S.formAction;else if(hg(d)!==null)continue}else w=S.action;typeof w=="function"?a[c+1]=w:(a.splice(c,3),c-=3),K1(a)}}}function mg(r){this._internalRoot=r}Fd.prototype.render=mg.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(i(409));var a=s.current,c=In();F1(a,c,r,s,null,null)},Fd.prototype.unmount=mg.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;F1(r.current,2,null,r,null,null),Ed(),s[ye]=null}};function Fd(r){this._internalRoot=r}Fd.prototype.unstable_scheduleHydration=function(r){if(r){var s=$();r={blockedOn:null,target:r,priority:s};for(var a=0;a<Qi.length&&s!==0&&s<Qi[a].priority;a++);Qi.splice(a,0,r),a===0&&Y1(r)}};var X1=t.version;if(X1!=="19.1.1")throw Error(i(527,X1,"19.1.1"));K.findDOMNode=function(r){var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(i(188)):(r=Object.keys(r).join(","),Error(i(268,r)));return r=p(s),r=r!==null?h(r):null,r=r===null?null:r.stateNode,r};var Yk={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:j,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qd.isDisabled&&qd.supportsFiber)try{hn=qd.inject(Yk),bt=qd}catch{}}return nc.createRoot=function(r,s){if(!o(r))throw Error(i(299));var a=!1,c="",d=hS,m=pS,S=mS,w=null;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(S=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(w=s.unstable_transitionCallbacks)),s=B1(r,1,!1,null,null,a,c,d,m,S,w,null),r[ye]=s.current,Xm(r),new mg(s)},nc.hydrateRoot=function(r,s,a){if(!o(r))throw Error(i(299));var c=!1,d="",m=hS,S=pS,w=mS,L=null,Q=null;return a!=null&&(a.unstable_strictMode===!0&&(c=!0),a.identifierPrefix!==void 0&&(d=a.identifierPrefix),a.onUncaughtError!==void 0&&(m=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(L=a.unstable_transitionCallbacks),a.formState!==void 0&&(Q=a.formState)),s=B1(r,1,!0,s,a??null,c,d,m,S,w,L,Q),s.context=H1(null),a=s.current,c=In(),c=al(c),d=ki(c),d.callback=null,Ni(a,d,c),a=c,s.current.lanes=a,ks(s,a),Ir(s),r[ye]=s.current,Xm(r),new Fd(s)},nc.version="19.1.1",nc}var ax;function iN(){if(ax)return vg.exports;ax=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),vg.exports=rN(),vg.exports}var sN=iN(),xg={exports:{}},wg={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lx;function oN(){if(lx)return wg;lx=1;var e=Th();function t(p,h){return p===h&&(p!==0||1/p===1/h)||p!==p&&h!==h}var n=typeof Object.is=="function"?Object.is:t,i=e.useSyncExternalStore,o=e.useRef,l=e.useEffect,u=e.useMemo,f=e.useDebugValue;return wg.useSyncExternalStoreWithSelector=function(p,h,y,v,_){var b=o(null);if(b.current===null){var x={hasValue:!1,value:null};b.current=x}else x=b.current;b=u(function(){function C(N){if(!O){if(O=!0,M=N,N=v(N),_!==void 0&&x.hasValue){var A=x.value;if(_(A,N))return R=A}return R=N}if(A=R,n(M,N))return A;var P=v(N);return _!==void 0&&_(A,P)?(M=N,A):(M=N,R=P)}var O=!1,M,R,D=y===void 0?null:y;return[function(){return C(h())},D===null?void 0:function(){return C(D())}]},[h,y,v,_]);var I=i(p,b[0],b[1]);return l(function(){x.hasValue=!0,x.value=I},[I]),f(I),I},wg}var cx;function aN(){return cx||(cx=1,xg.exports=oN()),xg.exports}var lN=aN();function eC(e){e()}function cN(){let e=null,t=null;return{clear(){e=null,t=null},notify(){eC(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let i=e;for(;i;)n.push(i),i=i.next;return n},subscribe(n){let i=!0;const o=t={callback:n,next:null,prev:t};return o.prev?o.prev.next=o:e=o,function(){!i||e===null||(i=!1,o.next?o.next.prev=o.prev:t=o.prev,o.prev?o.prev.next=o.next:e=o.next)}}}}var ux={notify(){},get:()=>[]};function uN(e,t){let n,i=ux,o=0,l=!1;function u(I){y();const C=i.subscribe(I);let O=!1;return()=>{O||(O=!0,C(),v())}}function f(){i.notify()}function p(){x.onStateChange&&x.onStateChange()}function h(){return l}function y(){o++,n||(n=e.subscribe(p),i=cN())}function v(){o--,n&&o===0&&(n(),n=void 0,i.clear(),i=ux)}function _(){l||(l=!0,y())}function b(){l&&(l=!1,v())}const x={addNestedSub:u,notifyNestedSubs:f,handleChangeWrapper:p,isSubscribed:h,trySubscribe:_,tryUnsubscribe:b,getListeners:()=>i};return x}var dN=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",fN=dN(),hN=()=>typeof navigator<"u"&&navigator.product==="ReactNative",pN=hN(),mN=()=>fN||pN?E.useLayoutEffect:E.useEffect,gN=mN();function dx(e,t){return e===t?e!==0||t!==0||1/e===1/t:e!==e&&t!==t}function Tc(e,t){if(dx(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;const n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(let o=0;o<n.length;o++)if(!Object.prototype.hasOwnProperty.call(t,n[o])||!dx(e[n[o]],t[n[o]]))return!1;return!0}var yN=Symbol.for("react-redux-context"),vN=typeof globalThis<"u"?globalThis:{};function _N(){if(!E.createContext)return{};const e=vN[yN]??=new Map;let t=e.get(E.createContext);return t||(t=E.createContext(null),e.set(E.createContext,t)),t}var ps=_N();function bN(e){const{children:t,context:n,serverState:i,store:o}=e,l=E.useMemo(()=>{const p=uN(o);return{store:o,subscription:p,getServerState:i?()=>i:void 0}},[o,i]),u=E.useMemo(()=>o.getState(),[o]);gN(()=>{const{subscription:p}=l;return p.onStateChange=p.notifyNestedSubs,p.trySubscribe(),u!==o.getState()&&p.notifyNestedSubs(),()=>{p.tryUnsubscribe(),p.onStateChange=void 0}},[l,u]);const f=n||ps;return E.createElement(f.Provider,{value:l},t)}var SN=bN;function Av(e=ps){return function(){return E.useContext(e)}}var tC=Av();function nC(e=ps){const t=e===ps?tC:Av(e),n=()=>{const{store:i}=t();return i};return Object.assign(n,{withTypes:()=>n}),n}var rC=nC();function xN(e=ps){const t=e===ps?rC:nC(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var iC=xN(),wN=(e,t)=>e===t;function EN(e=ps){const t=e===ps?tC:Av(e),n=(i,o={})=>{const{equalityFn:l=wN}=typeof o=="function"?{equalityFn:o}:o,u=t(),{store:f,subscription:p,getServerState:h}=u;E.useRef(!0);const y=E.useCallback({[i.name](_){return i(_)}}[i.name],[i]),v=lN.useSyncExternalStoreWithSelector(p.addNestedSub,f.getState,h||f.getState,y,l);return E.useDebugValue(v),v};return Object.assign(n,{withTypes:()=>n}),n}var sC=EN(),TN=eC;/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var oC=e=>{throw TypeError(e)},CN=(e,t,n)=>t.has(e)||oC("Cannot "+n),Eg=(e,t,n)=>(CN(e,t,"read from private field"),n?n.call(e):t.get(e)),RN=(e,t,n)=>t.has(e)?oC("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),fx="popstate";function AN(e={}){function t(o,l){let{pathname:u="/",search:f="",hash:p=""}=Si(o.location.hash.substring(1));return!u.startsWith("/")&&!u.startsWith(".")&&(u="/"+u),Uc("",{pathname:u,search:f,hash:p},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(o,l){let u=o.document.querySelector("base"),f="";if(u&&u.getAttribute("href")){let p=o.location.href,h=p.indexOf("#");f=h===-1?p:p.slice(0,h)}return f+"#"+(typeof l=="string"?l:ms(l))}function i(o,l){wt(o.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(l)})`)}return DN(t,n,i,e)}function $e(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function wt(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function IN(){return Math.random().toString(36).substring(2,10)}function hx(e,t){return{usr:e.state,key:e.key,idx:t}}function Uc(e,t,n=null,i){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Si(t):t,state:n,key:t&&t.key||i||IN()}}function ms({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Si(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let i=e.indexOf("?");i>=0&&(t.search=e.substring(i),e=e.substring(0,i)),e&&(t.pathname=e)}return t}function DN(e,t,n,i={}){let{window:o=document.defaultView,v5Compat:l=!1}=i,u=o.history,f="POP",p=null,h=y();h==null&&(h=0,u.replaceState({...u.state,idx:h},""));function y(){return(u.state||{idx:null}).idx}function v(){f="POP";let C=y(),O=C==null?null:C-h;h=C,p&&p({action:f,location:I.location,delta:O})}function _(C,O){f="PUSH";let M=Uc(I.location,C,O);n&&n(M,C),h=y()+1;let R=hx(M,h),D=I.createHref(M);try{u.pushState(R,"",D)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;o.location.assign(D)}l&&p&&p({action:f,location:I.location,delta:1})}function b(C,O){f="REPLACE";let M=Uc(I.location,C,O);n&&n(M,C),h=y();let R=hx(M,h),D=I.createHref(M);u.replaceState(R,"",D),l&&p&&p({action:f,location:I.location,delta:0})}function x(C){return aC(C)}let I={get action(){return f},get location(){return e(o,u)},listen(C){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(fx,v),p=C,()=>{o.removeEventListener(fx,v),p=null}},createHref(C){return t(o,C)},createURL:x,encodeLocation(C){let O=x(C);return{pathname:O.pathname,search:O.search,hash:O.hash}},push:_,replace:b,go(C){return u.go(C)}};return I}function aC(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),$e(n,"No window.location.(origin|href) available to create URL");let i=typeof e=="string"?e:ms(e);return i=i.replace(/ $/,"%20"),!t&&i.startsWith("//")&&(i=n+i),new URL(i,n)}var bc,px=class{constructor(e){if(RN(this,bc,new Map),e)for(let[t,n]of e)this.set(t,n)}get(e){if(Eg(this,bc).has(e))return Eg(this,bc).get(e);if(e.defaultValue!==void 0)return e.defaultValue;throw new Error("No value found for context")}set(e,t){Eg(this,bc).set(e,t)}};bc=new WeakMap;var ON=new Set(["lazy","caseSensitive","path","id","index","children"]);function kN(e){return ON.has(e)}var NN=new Set(["lazy","caseSensitive","path","id","index","middleware","children"]);function MN(e){return NN.has(e)}function LN(e){return e.index===!0}function zc(e,t,n=[],i={},o=!1){return e.map((l,u)=>{let f=[...n,String(u)],p=typeof l.id=="string"?l.id:f.join("-");if($e(l.index!==!0||!l.children,"Cannot specify children on an index route"),$e(o||!i[p],`Found a route id collision on id "${p}".  Route id's must be globally unique within Data Router usages`),LN(l)){let h={...l,...t(l),id:p};return i[p]=h,h}else{let h={...l,...t(l),id:p,children:void 0};return i[p]=h,l.children&&(h.children=zc(l.children,t,f,i,o)),h}})}function ns(e,t,n="/"){return pf(e,t,n,!1)}function pf(e,t,n,i){let o=typeof t=="string"?Si(t):t,l=Jn(o.pathname||"/",n);if(l==null)return null;let u=lC(e);jN(u);let f=null;for(let p=0;f==null&&p<u.length;++p){let h=YN(l);f=GN(u[p],h,i)}return f}function PN(e,t){let{route:n,pathname:i,params:o}=e;return{id:n.id,pathname:i,params:o,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function lC(e,t=[],n=[],i="",o=!1){let l=(u,f,p=o,h)=>{let y={relativePath:h===void 0?u.path||"":h,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(i)&&p)return;$e(y.relativePath.startsWith(i),`Absolute route path "${y.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(i.length)}let v=Or([i,y.relativePath]),_=n.concat(y);u.children&&u.children.length>0&&($e(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),lC(u.children,t,_,v,p)),!(u.path==null&&!u.index)&&t.push({path:v,score:qN(v,u.index),routesMeta:_})};return e.forEach((u,f)=>{if(u.path===""||!u.path?.includes("?"))l(u,f);else for(let p of cC(u.path))l(u,f,!0,p)}),t}function cC(e){let t=e.split("/");if(t.length===0)return[];let[n,...i]=t,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let u=cC(i.join("/")),f=[];return f.push(...u.map(p=>p===""?l:[l,p].join("/"))),o&&f.push(...u),f.map(p=>e.startsWith("/")&&p===""?"/":p)}function jN(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:VN(t.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var $N=/^:[\w-]+$/,UN=3,zN=2,BN=1,HN=10,FN=-2,mx=e=>e==="*";function qN(e,t){let n=e.split("/"),i=n.length;return n.some(mx)&&(i+=FN),t&&(i+=zN),n.filter(o=>!mx(o)).reduce((o,l)=>o+($N.test(l)?UN:l===""?BN:HN),i)}function VN(e,t){return e.length===t.length&&e.slice(0,-1).every((i,o)=>i===t[o])?e[e.length-1]-t[t.length-1]:0}function GN(e,t,n=!1){let{routesMeta:i}=e,o={},l="/",u=[];for(let f=0;f<i.length;++f){let p=i[f],h=f===i.length-1,y=l==="/"?t:t.slice(l.length)||"/",v=kf({path:p.relativePath,caseSensitive:p.caseSensitive,end:h},y),_=p.route;if(!v&&h&&n&&!i[i.length-1].route.index&&(v=kf({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},y)),!v)return null;Object.assign(o,v.params),u.push({params:o,pathname:Or([l,v.pathname]),pathnameBase:ZN(Or([l,v.pathnameBase])),route:_}),v.pathnameBase!=="/"&&(l=Or([l,v.pathnameBase]))}return u}function kf(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,i]=WN(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let l=o[0],u=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:i.reduce((h,{paramName:y,isOptional:v},_)=>{if(y==="*"){let x=f[_]||"";u=l.slice(0,l.length-x.length).replace(/(.)\/+$/,"$1")}const b=f[_];return v&&!b?h[y]=void 0:h[y]=(b||"").replace(/%2F/g,"/"),h},{}),pathname:l,pathnameBase:u,pattern:e}}function WN(e,t=!1,n=!0){wt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let i=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,f,p)=>(i.push({paramName:f,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(i.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),i]}function YN(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return wt(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Jn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,i=e.charAt(n);return i&&i!=="/"?null:e.slice(n)||"/"}function QN({basename:e,pathname:t}){return t==="/"?e:Or([e,t])}function KN(e,t="/"){let{pathname:n,search:i="",hash:o=""}=typeof e=="string"?Si(e):e;return{pathname:n?n.startsWith("/")?n:XN(n,t):t,search:JN(i),hash:eM(o)}}function XN(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Tg(e,t,n,i){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function uC(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ch(e){let t=uC(e);return t.map((n,i)=>i===t.length-1?n.pathname:n.pathnameBase)}function Rh(e,t,n,i=!1){let o;typeof e=="string"?o=Si(e):(o={...e},$e(!o.pathname||!o.pathname.includes("?"),Tg("?","pathname","search",o)),$e(!o.pathname||!o.pathname.includes("#"),Tg("#","pathname","hash",o)),$e(!o.search||!o.search.includes("#"),Tg("#","search","hash",o)));let l=e===""||o.pathname==="",u=l?"/":o.pathname,f;if(u==null)f=n;else{let v=t.length-1;if(!i&&u.startsWith("..")){let _=u.split("/");for(;_[0]==="..";)_.shift(),v-=1;o.pathname=_.join("/")}f=v>=0?t[v]:"/"}let p=KN(o,f),h=u&&u!=="/"&&u.endsWith("/"),y=(l||u===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(h||y)&&(p.pathname+="/"),p}var Or=e=>e.join("/").replace(/\/\/+/g,"/"),ZN=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),JN=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,eM=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Nf=class{constructor(e,t,n,i=!1){this.status=e,this.statusText=t||"",this.internal=i,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Bc(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var dC=["POST","PUT","PATCH","DELETE"],tM=new Set(dC),nM=["GET",...dC],rM=new Set(nM),iM=new Set([301,302,303,307,308]),sM=new Set([307,308]),Cg={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},oM={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},rc={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},aM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Iv=e=>aM.test(e),lM=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),fC="remix-router-transitions",hC=Symbol("ResetLoaderData");function cM(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u";$e(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let i=e.hydrationRouteProperties||[],o=e.mapRouteProperties||lM,l={},u=zc(e.routes,o,void 0,l),f,p=e.basename||"/";p.startsWith("/")||(p=`/${p}`);let h=e.dataStrategy||pM,y={...e.future},v=null,_=new Set,b=null,x=null,I=null,C=e.hydrationData!=null,O=ns(u,e.history.location,p),M=!1,R=null,D;if(O==null&&!e.patchRoutesOnNavigation){let $=Qn(404,{pathname:e.history.location.pathname}),{matches:W,route:ee}=Vd(u);D=!0,O=W,R={[ee.id]:$}}else if(O&&!e.hydrationData&&Ns(O,u,e.history.location.pathname).active&&(O=null),O)if(O.some($=>$.route.lazy))D=!1;else if(!O.some($=>$.route.loader))D=!0;else{let $=e.hydrationData?e.hydrationData.loaderData:null,W=e.hydrationData?e.hydrationData.errors:null;if(W){let ee=O.findIndex(ce=>W[ce.route.id]!==void 0);D=O.slice(0,ee+1).every(ce=>!Cy(ce.route,$,W))}else D=O.every(ee=>!Cy(ee.route,$,W))}else{D=!1,O=[];let $=Ns(null,u,e.history.location.pathname);$.active&&$.matches&&(M=!0,O=$.matches)}let N,A={historyAction:e.history.action,location:e.history.location,matches:O,initialized:D,navigation:Cg,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||R,fetchers:new Map,blockers:new Map},P="POP",F=!1,H,B=!1,z=new Map,G=null,V=!1,te=!1,ue=new Set,j=new Map,K=0,ne=-1,ae=new Map,k=new Set,X=new Map,le=new Map,ie=new Set,de=new Map,me,pe=null;function Ie(){if(v=e.history.listen(({action:$,location:W,delta:ee})=>{if(me){me(),me=void 0;return}wt(de.size===0||ee!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ce=ku({currentLocation:A.location,nextLocation:W,historyAction:$});if(ce&&ee!=null){let fe=new Promise(ye=>{me=ye});e.history.go(ee*-1),wr(ce,{state:"blocked",location:W,proceed(){wr(ce,{state:"proceeding",proceed:void 0,reset:void 0,location:W}),fe.then(()=>e.history.go(ee))},reset(){let ye=new Map(A.blockers);ye.set(ce,rc),Ue({blockers:ye})}});return}return Et($,W)}),n){IM(t,z);let $=()=>DM(t,z);t.addEventListener("pagehide",$),G=()=>t.removeEventListener("pagehide",$)}return A.initialized||Et("POP",A.location,{initialHydration:!0}),N}function be(){v&&v(),G&&G(),_.clear(),H&&H.abort(),A.fetchers.forEach(($,W)=>Qt(W)),A.blockers.forEach(($,W)=>Os(W))}function Oe($){return _.add($),()=>_.delete($)}function Ue($,W={}){$.matches&&($.matches=$.matches.map(fe=>{let ye=l[fe.route.id],xe=fe.route;return xe.element!==ye.element||xe.errorElement!==ye.errorElement||xe.hydrateFallbackElement!==ye.hydrateFallbackElement?{...fe,route:ye}:fe})),A={...A,...$};let ee=[],ce=[];A.fetchers.forEach((fe,ye)=>{fe.state==="idle"&&(ie.has(ye)?ee.push(ye):ce.push(ye))}),ie.forEach(fe=>{!A.fetchers.has(fe)&&!j.has(fe)&&ee.push(fe)}),[..._].forEach(fe=>fe(A,{deletedFetchers:ee,viewTransitionOpts:W.viewTransitionOpts,flushSync:W.flushSync===!0})),ee.forEach(fe=>Qt(fe)),ce.forEach(fe=>A.fetchers.delete(fe))}function _t($,W,{flushSync:ee}={}){let ce=A.actionData!=null&&A.navigation.formMethod!=null&&_n(A.navigation.formMethod)&&A.navigation.state==="loading"&&$.state?._isRedirect!==!0,fe;W.actionData?Object.keys(W.actionData).length>0?fe=W.actionData:fe=null:ce?fe=A.actionData:fe=null;let ye=W.loaderData?Tx(A.loaderData,W.loaderData,W.matches||[],W.errors):A.loaderData,xe=A.blockers;xe.size>0&&(xe=new Map(xe),xe.forEach((_e,Se)=>xe.set(Se,rc)));let ve=V?!1:Mu($,W.matches||A.matches),Ee=F===!0||A.navigation.formMethod!=null&&_n(A.navigation.formMethod)&&$.state?._isRedirect!==!0;f&&(u=f,f=void 0),V||P==="POP"||(P==="PUSH"?e.history.push($,$.state):P==="REPLACE"&&e.history.replace($,$.state));let Re;if(P==="POP"){let _e=z.get(A.location.pathname);_e&&_e.has($.pathname)?Re={currentLocation:A.location,nextLocation:$}:z.has($.pathname)&&(Re={currentLocation:$,nextLocation:A.location})}else if(B){let _e=z.get(A.location.pathname);_e?_e.add($.pathname):(_e=new Set([$.pathname]),z.set(A.location.pathname,_e)),Re={currentLocation:A.location,nextLocation:$}}Ue({...W,actionData:fe,loaderData:ye,historyAction:P,location:$,initialized:!0,navigation:Cg,revalidation:"idle",restoreScrollPosition:ve,preventScrollReset:Ee,blockers:xe},{viewTransitionOpts:Re,flushSync:ee===!0}),P="POP",F=!1,B=!1,V=!1,te=!1,pe?.resolve(),pe=null}async function gt($,W){if(typeof $=="number"){e.history.go($);return}let ee=Ty(A.location,A.matches,p,$,W?.fromRouteId,W?.relative),{path:ce,submission:fe,error:ye}=gx(!1,ee,W),xe=A.location,ve=Uc(A.location,ce,W&&W.state);ve={...ve,...e.history.encodeLocation(ve)};let Ee=W&&W.replace!=null?W.replace:void 0,Re="PUSH";Ee===!0?Re="REPLACE":Ee===!1||fe!=null&&_n(fe.formMethod)&&fe.formAction===A.location.pathname+A.location.search&&(Re="REPLACE");let _e=W&&"preventScrollReset"in W?W.preventScrollReset===!0:void 0,Se=(W&&W.flushSync)===!0,ze=ku({currentLocation:xe,nextLocation:ve,historyAction:Re});if(ze){wr(ze,{state:"blocked",location:ve,proceed(){wr(ze,{state:"proceeding",proceed:void 0,reset:void 0,location:ve}),gt($,W)},reset(){let Ze=new Map(A.blockers);Ze.set(ze,rc),Ue({blockers:Ze})}});return}await Et(Re,ve,{submission:fe,pendingError:ye,preventScrollReset:_e,replace:W&&W.replace,enableViewTransition:W&&W.viewTransition,flushSync:Se})}function Ln(){pe||(pe=OM()),ol(),Ue({revalidation:"loading"});let $=pe.promise;return A.navigation.state==="submitting"?$:A.navigation.state==="idle"?(Et(A.historyAction,A.location,{startUninterruptedRevalidation:!0}),$):(Et(P||A.historyAction,A.navigation.location,{overrideNavigation:A.navigation,enableViewTransition:B===!0}),$)}async function Et($,W,ee){H&&H.abort(),H=null,P=$,V=(ee&&ee.startUninterruptedRevalidation)===!0,ks(A.location,A.matches),F=(ee&&ee.preventScrollReset)===!0,B=(ee&&ee.enableViewTransition)===!0;let ce=f||u,fe=ee&&ee.overrideNavigation,ye=ee?.initialHydration&&A.matches&&A.matches.length>0&&!M?A.matches:ns(ce,W,p),xe=(ee&&ee.flushSync)===!0;if(ye&&A.initialized&&!te&&xM(A.location,W)&&!(ee&&ee.submission&&_n(ee.submission.formMethod))){_t(W,{matches:ye},{flushSync:xe});return}let ve=Ns(ye,ce,W.pathname);if(ve.active&&ve.matches&&(ye=ve.matches),!ye){let{error:Tt,notFoundMatches:Le,route:st}=No(W.pathname);_t(W,{matches:Le,loaderData:{},errors:{[st.id]:Tt}},{flushSync:xe});return}H=new AbortController;let Ee=ba(e.history,W,H.signal,ee&&ee.submission),Re=e.getContext?await e.getContext():new px,_e;if(ee&&ee.pendingError)_e=[rs(ye).route.id,{type:"error",error:ee.pendingError}];else if(ee&&ee.submission&&_n(ee.submission.formMethod)){let Tt=await Pn(Ee,W,ee.submission,ye,Re,ve.active,ee&&ee.initialHydration===!0,{replace:ee.replace,flushSync:xe});if(Tt.shortCircuited)return;if(Tt.pendingActionResult){let[Le,st]=Tt.pendingActionResult;if(kn(st)&&Bc(st.error)&&st.error.status===404){H=null,_t(W,{matches:Tt.matches,loaderData:{},errors:{[Le]:st.error}});return}}ye=Tt.matches||ye,_e=Tt.pendingActionResult,fe=Rg(W,ee.submission),xe=!1,ve.active=!1,Ee=ba(e.history,Ee.url,Ee.signal)}let{shortCircuited:Se,matches:ze,loaderData:Ze,errors:yt}=await $r(Ee,W,ye,Re,ve.active,fe,ee&&ee.submission,ee&&ee.fetcherSubmission,ee&&ee.replace,ee&&ee.initialHydration===!0,xe,_e);Se||(H=null,_t(W,{matches:ze||ye,...Cx(_e),loaderData:Ze,errors:yt}))}async function Pn($,W,ee,ce,fe,ye,xe,ve={}){ol();let Ee=RM(W,ee);if(Ue({navigation:Ee},{flushSync:ve.flushSync===!0}),ye){let Se=await Ms(ce,W.pathname,$.signal);if(Se.type==="aborted")return{shortCircuited:!0};if(Se.type==="error"){if(Se.partialMatches.length===0){let{matches:Ze,route:yt}=Vd(u);return{matches:Ze,pendingActionResult:[yt.id,{type:"error",error:Se.error}]}}let ze=rs(Se.partialMatches).route.id;return{matches:Se.partialMatches,pendingActionResult:[ze,{type:"error",error:Se.error}]}}else if(Se.matches)ce=Se.matches;else{let{notFoundMatches:ze,error:Ze,route:yt}=No(W.pathname);return{matches:ze,pendingActionResult:[yt.id,{type:"error",error:Ze}]}}}let Re,_e=mf(ce,W);if(!_e.route.action&&!_e.route.lazy)Re={type:"error",error:Qn(405,{method:$.method,pathname:W.pathname,routeId:_e.route.id})};else{let Se=Ea(o,l,$,ce,_e,xe?[]:i,fe),ze=await Ci($,Se,fe,null);if(Re=ze[_e.route.id],!Re){for(let Ze of ce)if(ze[Ze.route.id]){Re=ze[Ze.route.id];break}}if($.signal.aborted)return{shortCircuited:!0}}if(oo(Re)){let Se;return ve&&ve.replace!=null?Se=ve.replace:Se=xx(Re.response.headers.get("Location"),new URL($.url),p)===A.location.pathname+A.location.search,await Ur($,Re,!0,{submission:ee,replace:Se}),{shortCircuited:!0}}if(kn(Re)){let Se=rs(ce,_e.route.id);return(ve&&ve.replace)!==!0&&(P="PUSH"),{matches:ce,pendingActionResult:[Se.route.id,Re,_e.route.id]}}return{matches:ce,pendingActionResult:[_e.route.id,Re]}}async function $r($,W,ee,ce,fe,ye,xe,ve,Ee,Re,_e,Se){let ze=ye||Rg(W,xe),Ze=xe||ve||Ax(ze),yt=!V&&!Re;if(fe){if(yt){let kt=Yt(Se);Ue({navigation:ze,...kt!==void 0?{actionData:kt}:{}},{flushSync:_e})}let Pe=await Ms(ee,W.pathname,$.signal);if(Pe.type==="aborted")return{shortCircuited:!0};if(Pe.type==="error"){if(Pe.partialMatches.length===0){let{matches:qr,route:pn}=Vd(u);return{matches:qr,loaderData:{},errors:{[pn.id]:Pe.error}}}let kt=rs(Pe.partialMatches).route.id;return{matches:Pe.partialMatches,loaderData:{},errors:{[kt]:Pe.error}}}else if(Pe.matches)ee=Pe.matches;else{let{error:kt,notFoundMatches:qr,route:pn}=No(W.pathname);return{matches:qr,loaderData:{},errors:{[pn.id]:kt}}}}let Tt=f||u,{dsMatches:Le,revalidatingFetchers:st}=yx($,ce,o,l,e.history,A,ee,Ze,W,Re?[]:i,Re===!0,te,ue,ie,X,k,Tt,p,e.patchRoutesOnNavigation!=null,Se);if(ne=++K,!e.dataStrategy&&!Le.some(Pe=>Pe.shouldLoad)&&!Le.some(Pe=>Pe.route.middleware)&&st.length===0){let Pe=Is();return _t(W,{matches:ee,loaderData:{},errors:Se&&kn(Se[1])?{[Se[0]]:Se[1].error}:null,...Cx(Se),...Pe?{fetchers:new Map(A.fetchers)}:{}},{flushSync:_e}),{shortCircuited:!0}}if(yt){let Pe={};if(!fe){Pe.navigation=ze;let kt=Yt(Se);kt!==void 0&&(Pe.actionData=kt)}st.length>0&&(Pe.fetchers=sl(st)),Ue(Pe,{flushSync:_e})}st.forEach(Pe=>{xr(Pe.key),Pe.controller&&j.set(Pe.key,Pe.controller)});let Er=()=>st.forEach(Pe=>xr(Pe.key));H&&H.signal.addEventListener("abort",Er);let{loaderResults:wn,fetcherResults:ln}=await Du(Le,st,$,ce);if($.signal.aborted)return{shortCircuited:!0};H&&H.signal.removeEventListener("abort",Er),st.forEach(Pe=>j.delete(Pe.key));let jn=Gd(wn);if(jn)return await Ur($,jn.result,!0,{replace:Ee}),{shortCircuited:!0};if(jn=Gd(ln),jn)return k.add(jn.key),await Ur($,jn.result,!0,{replace:Ee}),{shortCircuited:!0};let{loaderData:Lo,errors:Ri}=Ex(A,ee,wn,Se,st,ln);Re&&A.errors&&(Ri={...A.errors,...Ri});let Br=Is(),Hr=Ds(ne),Fr=Br||Hr||st.length>0;return{matches:ee,loaderData:Lo,errors:Ri,...Fr?{fetchers:new Map(A.fetchers)}:{}}}function Yt($){if($&&!kn($[1]))return{[$[0]]:$[1].data};if(A.actionData)return Object.keys(A.actionData).length===0?null:A.actionData}function sl($){return $.forEach(W=>{let ee=A.fetchers.get(W.key),ce=ic(void 0,ee?ee.data:void 0);A.fetchers.set(W.key,ce)}),new Map(A.fetchers)}async function As($,W,ee,ce){xr($);let fe=(ce&&ce.flushSync)===!0,ye=f||u,xe=Ty(A.location,A.matches,p,ee,W,ce?.relative),ve=ns(ye,xe,p),Ee=Ns(ve,ye,xe);if(Ee.active&&Ee.matches&&(ve=Ee.matches),!ve){bt($,W,Qn(404,{pathname:xe}),{flushSync:fe});return}let{path:Re,submission:_e,error:Se}=gx(!0,xe,ce);if(Se){bt($,W,Se,{flushSync:fe});return}let ze=e.getContext?await e.getContext():new px,Ze=(ce&&ce.preventScrollReset)===!0;if(_e&&_n(_e.formMethod)){await Oo($,W,Re,ve,ze,Ee.active,fe,Ze,_e);return}X.set($,{routeId:W,path:Re}),await ko($,W,Re,ve,ze,Ee.active,fe,Ze,_e)}async function Oo($,W,ee,ce,fe,ye,xe,ve,Ee){ol(),X.delete($);let Re=A.fetchers.get($);hn($,AM(Ee,Re),{flushSync:xe});let _e=new AbortController,Se=ba(e.history,ee,_e.signal,Ee);if(ye){let St=await Ms(ce,new URL(Se.url).pathname,Se.signal,$);if(St.type==="aborted")return;if(St.type==="error"){bt($,W,St.error,{flushSync:xe});return}else if(St.matches)ce=St.matches;else{bt($,W,Qn(404,{pathname:ee}),{flushSync:xe});return}}let ze=mf(ce,ee);if(!ze.route.action&&!ze.route.lazy){let St=Qn(405,{method:Ee.formMethod,pathname:ee,routeId:W});bt($,W,St,{flushSync:xe});return}j.set($,_e);let Ze=K,yt=Ea(o,l,Se,ce,ze,i,fe),Le=(await Ci(Se,yt,fe,$))[ze.route.id];if(Se.signal.aborted){j.get($)===_e&&j.delete($);return}if(ie.has($)){if(oo(Le)||kn(Le)){hn($,es(void 0));return}}else{if(oo(Le))if(j.delete($),ne>Ze){hn($,es(void 0));return}else return k.add($),hn($,ic(Ee)),Ur(Se,Le,!1,{fetcherSubmission:Ee,preventScrollReset:ve});if(kn(Le)){bt($,W,Le.error);return}}let st=A.navigation.location||A.location,Er=ba(e.history,st,_e.signal),wn=f||u,ln=A.navigation.state!=="idle"?ns(wn,A.navigation.location,p):A.matches;$e(ln,"Didn't find any matches after fetcher action");let jn=++K;ae.set($,jn);let Lo=ic(Ee,Le.data);A.fetchers.set($,Lo);let{dsMatches:Ri,revalidatingFetchers:Br}=yx(Er,fe,o,l,e.history,A,ln,Ee,st,i,!1,te,ue,ie,X,k,wn,p,e.patchRoutesOnNavigation!=null,[ze.route.id,Le]);Br.filter(St=>St.key!==$).forEach(St=>{let Ai=St.key,Lu=A.fetchers.get(Ai),Pu=ic(void 0,Lu?Lu.data:void 0);A.fetchers.set(Ai,Pu),xr(Ai),St.controller&&j.set(Ai,St.controller)}),Ue({fetchers:new Map(A.fetchers)});let Hr=()=>Br.forEach(St=>xr(St.key));_e.signal.addEventListener("abort",Hr);let{loaderResults:Fr,fetcherResults:Pe}=await Du(Ri,Br,Er,fe);if(_e.signal.aborted)return;if(_e.signal.removeEventListener("abort",Hr),ae.delete($),j.delete($),Br.forEach(St=>j.delete(St.key)),A.fetchers.has($)){let St=es(Le.data);A.fetchers.set($,St)}let kt=Gd(Fr);if(kt)return Ur(Er,kt.result,!1,{preventScrollReset:ve});if(kt=Gd(Pe),kt)return k.add(kt.key),Ur(Er,kt.result,!1,{preventScrollReset:ve});let{loaderData:qr,errors:pn}=Ex(A,ln,Fr,void 0,Br,Pe);Ds(jn),A.navigation.state==="loading"&&jn>ne?($e(P,"Expected pending action"),H&&H.abort(),_t(A.navigation.location,{matches:ln,loaderData:qr,errors:pn,fetchers:new Map(A.fetchers)})):(Ue({errors:pn,loaderData:Tx(A.loaderData,qr,ln,pn),fetchers:new Map(A.fetchers)}),te=!1)}async function ko($,W,ee,ce,fe,ye,xe,ve,Ee){let Re=A.fetchers.get($);hn($,ic(Ee,Re?Re.data:void 0),{flushSync:xe});let _e=new AbortController,Se=ba(e.history,ee,_e.signal);if(ye){let st=await Ms(ce,new URL(Se.url).pathname,Se.signal,$);if(st.type==="aborted")return;if(st.type==="error"){bt($,W,st.error,{flushSync:xe});return}else if(st.matches)ce=st.matches;else{bt($,W,Qn(404,{pathname:ee}),{flushSync:xe});return}}let ze=mf(ce,ee);j.set($,_e);let Ze=K,yt=Ea(o,l,Se,ce,ze,i,fe),Le=(await Ci(Se,yt,fe,$))[ze.route.id];if(j.get($)===_e&&j.delete($),!Se.signal.aborted){if(ie.has($)){hn($,es(void 0));return}if(oo(Le))if(ne>Ze){hn($,es(void 0));return}else{k.add($),await Ur(Se,Le,!1,{preventScrollReset:ve});return}if(kn(Le)){bt($,W,Le.error);return}hn($,es(Le.data))}}async function Ur($,W,ee,{submission:ce,fetcherSubmission:fe,preventScrollReset:ye,replace:xe}={}){W.response.headers.has("X-Remix-Revalidate")&&(te=!0);let ve=W.response.headers.get("Location");$e(ve,"Expected a Location header on the redirect Response"),ve=xx(ve,new URL($.url),p);let Ee=Uc(A.location,ve,{_isRedirect:!0});if(n){let yt=!1;if(W.response.headers.has("X-Remix-Reload-Document"))yt=!0;else if(Iv(ve)){const Tt=aC(ve,!0);yt=Tt.origin!==t.location.origin||Jn(Tt.pathname,p)==null}if(yt){xe?t.location.replace(ve):t.location.assign(ve);return}}H=null;let Re=xe===!0||W.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:_e,formAction:Se,formEncType:ze}=A.navigation;!ce&&!fe&&_e&&Se&&ze&&(ce=Ax(A.navigation));let Ze=ce||fe;if(sM.has(W.response.status)&&Ze&&_n(Ze.formMethod))await Et(Re,Ee,{submission:{...Ze,formAction:ve},preventScrollReset:ye||F,enableViewTransition:ee?B:void 0});else{let yt=Rg(Ee,ce);await Et(Re,Ee,{overrideNavigation:yt,fetcherSubmission:fe,preventScrollReset:ye||F,enableViewTransition:ee?B:void 0})}}async function Ci($,W,ee,ce){let fe,ye={};try{fe=await gM(h,$,W,ce,ee,!1)}catch(xe){return W.filter(ve=>ve.shouldLoad).forEach(ve=>{ye[ve.route.id]={type:"error",error:xe}}),ye}if($.signal.aborted)return ye;for(let[xe,ve]of Object.entries(fe))if(TM(ve)){let Ee=ve.result;ye[xe]={type:"redirect",response:bM(Ee,$,xe,W,p)}}else ye[xe]=await _M(ve);return ye}async function Du($,W,ee,ce){let fe=Ci(ee,$,ce,null),ye=Promise.all(W.map(async Ee=>{if(Ee.matches&&Ee.match&&Ee.request&&Ee.controller){let _e=(await Ci(Ee.request,Ee.matches,ce,Ee.key))[Ee.match.route.id];return{[Ee.key]:_e}}else return Promise.resolve({[Ee.key]:{type:"error",error:Qn(404,{pathname:Ee.path})}})})),xe=await fe,ve=(await ye).reduce((Ee,Re)=>Object.assign(Ee,Re),{});return{loaderResults:xe,fetcherResults:ve}}function ol(){te=!0,X.forEach(($,W)=>{j.has(W)&&ue.add(W),xr(W)})}function hn($,W,ee={}){A.fetchers.set($,W),Ue({fetchers:new Map(A.fetchers)},{flushSync:(ee&&ee.flushSync)===!0})}function bt($,W,ee,ce={}){let fe=rs(A.matches,W);Qt($),Ue({errors:{[fe.route.id]:ee},fetchers:new Map(A.fetchers)},{flushSync:(ce&&ce.flushSync)===!0})}function sr($){return le.set($,(le.get($)||0)+1),ie.has($)&&ie.delete($),A.fetchers.get($)||oM}function Qt($){let W=A.fetchers.get($);j.has($)&&!(W&&W.state==="loading"&&ae.has($))&&xr($),X.delete($),ae.delete($),k.delete($),ie.delete($),ue.delete($),A.fetchers.delete($)}function fp($){let W=(le.get($)||0)-1;W<=0?(le.delete($),ie.add($)):le.set($,W),Ue({fetchers:new Map(A.fetchers)})}function xr($){let W=j.get($);W&&(W.abort(),j.delete($))}function Ou($){for(let W of $){let ee=sr(W),ce=es(ee.data);A.fetchers.set(W,ce)}}function Is(){let $=[],W=!1;for(let ee of k){let ce=A.fetchers.get(ee);$e(ce,`Expected fetcher: ${ee}`),ce.state==="loading"&&(k.delete(ee),$.push(ee),W=!0)}return Ou($),W}function Ds($){let W=[];for(let[ee,ce]of ae)if(ce<$){let fe=A.fetchers.get(ee);$e(fe,`Expected fetcher: ${ee}`),fe.state==="loading"&&(xr(ee),ae.delete(ee),W.push(ee))}return Ou(W),W.length>0}function zr($,W){let ee=A.blockers.get($)||rc;return de.get($)!==W&&de.set($,W),ee}function Os($){A.blockers.delete($),de.delete($)}function wr($,W){let ee=A.blockers.get($)||rc;$e(ee.state==="unblocked"&&W.state==="blocked"||ee.state==="blocked"&&W.state==="blocked"||ee.state==="blocked"&&W.state==="proceeding"||ee.state==="blocked"&&W.state==="unblocked"||ee.state==="proceeding"&&W.state==="unblocked",`Invalid blocker state transition: ${ee.state} -> ${W.state}`);let ce=new Map(A.blockers);ce.set($,W),Ue({blockers:ce})}function ku({currentLocation:$,nextLocation:W,historyAction:ee}){if(de.size===0)return;de.size>1&&wt(!1,"A router only supports one blocker at a time");let ce=Array.from(de.entries()),[fe,ye]=ce[ce.length-1],xe=A.blockers.get(fe);if(!(xe&&xe.state==="proceeding")&&ye({currentLocation:$,nextLocation:W,historyAction:ee}))return fe}function No($){let W=Qn(404,{pathname:$}),ee=f||u,{matches:ce,route:fe}=Vd(ee);return{notFoundMatches:ce,route:fe,error:W}}function Nu($,W,ee){if(b=$,I=W,x=ee||null,!C&&A.navigation===Cg){C=!0;let ce=Mu(A.location,A.matches);ce!=null&&Ue({restoreScrollPosition:ce})}return()=>{b=null,I=null,x=null}}function Mo($,W){return x&&x($,W.map(ce=>PN(ce,A.loaderData)))||$.key}function ks($,W){if(b&&I){let ee=Mo($,W);b[ee]=I()}}function Mu($,W){if(b){let ee=Mo($,W),ce=b[ee];if(typeof ce=="number")return ce}return null}function Ns($,W,ee){if(e.patchRoutesOnNavigation)if($){if(Object.keys($[0].params).length>0)return{active:!0,matches:pf(W,ee,p,!0)}}else return{active:!0,matches:pf(W,ee,p,!0)||[]};return{active:!1,matches:null}}async function Ms($,W,ee,ce){if(!e.patchRoutesOnNavigation)return{type:"success",matches:$};let fe=$;for(;;){let ye=f==null,xe=f||u,ve=l;try{await e.patchRoutesOnNavigation({signal:ee,path:W,matches:fe,fetcherKey:ce,patch:(_e,Se)=>{ee.aborted||vx(_e,Se,xe,ve,o,!1)}})}catch(_e){return{type:"error",error:_e,partialMatches:fe}}finally{ye&&!ee.aborted&&(u=[...u])}if(ee.aborted)return{type:"aborted"};let Ee=ns(xe,W,p);if(Ee)return{type:"success",matches:Ee};let Re=pf(xe,W,p,!0);if(!Re||fe.length===Re.length&&fe.every((_e,Se)=>_e.route.id===Re[Se].route.id))return{type:"success",matches:null};fe=Re}}function al($){l={},f=zc($,o,void 0,l)}function ll($,W,ee=!1){let ce=f==null;vx($,W,f||u,l,o,ee),ce&&(u=[...u],Ue({}))}return N={get basename(){return p},get future(){return y},get state(){return A},get routes(){return u},get window(){return t},initialize:Ie,subscribe:Oe,enableScrollRestoration:Nu,navigate:gt,fetch:As,revalidate:Ln,createHref:$=>e.history.createHref($),encodeLocation:$=>e.history.encodeLocation($),getFetcher:sr,deleteFetcher:fp,dispose:be,getBlocker:zr,deleteBlocker:Os,patchRoutes:ll,_internalFetchControllers:j,_internalSetRoutes:al,_internalSetStateDoNotUseOrYouWillBreakYourApp($){Ue($)}},N}function uM(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Ty(e,t,n,i,o,l){let u,f;if(o){u=[];for(let h of t)if(u.push(h),h.route.id===o){f=h;break}}else u=t,f=t[t.length-1];let p=Rh(i||".",Ch(u),Jn(e.pathname,n)||e.pathname,l==="path");if(i==null&&(p.search=e.search,p.hash=e.hash),(i==null||i===""||i===".")&&f){let h=Dv(p.search);if(f.route.index&&!h)p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index";else if(!f.route.index&&h){let y=new URLSearchParams(p.search),v=y.getAll("index");y.delete("index"),v.filter(b=>b).forEach(b=>y.append("index",b));let _=y.toString();p.search=_?`?${_}`:""}}return n!=="/"&&(p.pathname=QN({basename:n,pathname:p.pathname})),ms(p)}function gx(e,t,n){if(!n||!uM(n))return{path:t};if(n.formMethod&&!CM(n.formMethod))return{path:t,error:Qn(405,{method:n.formMethod})};let i=()=>({path:t,error:Qn(400,{type:"invalid-body"})}),l=(n.formMethod||"get").toUpperCase(),u=_C(t);if(n.body!==void 0){if(n.formEncType==="text/plain"){if(!_n(l))return i();let v=typeof n.body=="string"?n.body:n.body instanceof FormData||n.body instanceof URLSearchParams?Array.from(n.body.entries()).reduce((_,[b,x])=>`${_}${b}=${x}
`,""):String(n.body);return{path:t,submission:{formMethod:l,formAction:u,formEncType:n.formEncType,formData:void 0,json:void 0,text:v}}}else if(n.formEncType==="application/json"){if(!_n(l))return i();try{let v=typeof n.body=="string"?JSON.parse(n.body):n.body;return{path:t,submission:{formMethod:l,formAction:u,formEncType:n.formEncType,formData:void 0,json:v,text:void 0}}}catch{return i()}}}$e(typeof FormData=="function","FormData is not available in this environment");let f,p;if(n.formData)f=Ay(n.formData),p=n.formData;else if(n.body instanceof FormData)f=Ay(n.body),p=n.body;else if(n.body instanceof URLSearchParams)f=n.body,p=wx(f);else if(n.body==null)f=new URLSearchParams,p=new FormData;else try{f=new URLSearchParams(n.body),p=wx(f)}catch{return i()}let h={formMethod:l,formAction:u,formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:p,json:void 0,text:void 0};if(_n(h.formMethod))return{path:t,submission:h};let y=Si(t);return e&&y.search&&Dv(y.search)&&f.append("index",""),y.search=`?${f}`,{path:ms(y),submission:h}}function yx(e,t,n,i,o,l,u,f,p,h,y,v,_,b,x,I,C,O,M,R){let D=R?kn(R[1])?R[1].error:R[1].data:void 0,N=o.createURL(l.location),A=o.createURL(p),P;if(y&&l.errors){let V=Object.keys(l.errors)[0];P=u.findIndex(te=>te.route.id===V)}else if(R&&kn(R[1])){let V=R[0];P=u.findIndex(te=>te.route.id===V)-1}let F=R?R[1].statusCode:void 0,H=F&&F>=400,B={currentUrl:N,currentParams:l.matches[0]?.params||{},nextUrl:A,nextParams:u[0].params,...f,actionResult:D,actionStatus:F},z=u.map((V,te)=>{let{route:ue}=V,j=null;if(P!=null&&te>P?j=!1:ue.lazy?j=!0:ue.loader==null?j=!1:y?j=Cy(ue,l.loaderData,l.errors):dM(l.loaderData,l.matches[te],V)&&(j=!0),j!==null)return Ry(n,i,e,V,h,t,j);let K=H?!1:v||N.pathname+N.search===A.pathname+A.search||N.search!==A.search||fM(l.matches[te],V),ne={...B,defaultShouldRevalidate:K},ae=Mf(V,ne);return Ry(n,i,e,V,h,t,ae,ne)}),G=[];return x.forEach((V,te)=>{if(y||!u.some(le=>le.route.id===V.routeId)||b.has(te))return;let ue=l.fetchers.get(te),j=ue&&ue.state!=="idle"&&ue.data===void 0,K=ns(C,V.path,O);if(!K){if(M&&j)return;G.push({key:te,routeId:V.routeId,path:V.path,matches:null,match:null,request:null,controller:null});return}if(I.has(te))return;let ne=mf(K,V.path),ae=new AbortController,k=ba(o,V.path,ae.signal),X=null;if(_.has(te))_.delete(te),X=Ea(n,i,k,K,ne,h,t);else if(j)v&&(X=Ea(n,i,k,K,ne,h,t));else{let le={...B,defaultShouldRevalidate:H?!1:v};Mf(ne,le)&&(X=Ea(n,i,k,K,ne,h,t,le))}X&&G.push({key:te,routeId:V.routeId,path:V.path,matches:X,match:ne,request:k,controller:ae})}),{dsMatches:z,revalidatingFetchers:G}}function Cy(e,t,n){if(e.lazy)return!0;if(!e.loader)return!1;let i=t!=null&&e.id in t,o=n!=null&&n[e.id]!==void 0;return!i&&o?!1:typeof e.loader=="function"&&e.loader.hydrate===!0?!0:!i&&!o}function dM(e,t,n){let i=!t||n.route.id!==t.route.id,o=!e.hasOwnProperty(n.route.id);return i||o}function fM(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Mf(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}function vx(e,t,n,i,o,l){let u;if(e){let h=i[e];$e(h,`No route found to patch children into: routeId = ${e}`),h.children||(h.children=[]),u=h.children}else u=n;let f=[],p=[];if(t.forEach(h=>{let y=u.find(v=>pC(h,v));y?p.push({existingRoute:y,newRoute:h}):f.push(h)}),f.length>0){let h=zc(f,o,[e||"_","patch",String(u?.length||"0")],i);u.push(...h)}if(l&&p.length>0)for(let h=0;h<p.length;h++){let{existingRoute:y,newRoute:v}=p[h],_=y,[b]=zc([v],o,[],{},!0);Object.assign(_,{element:b.element?b.element:_.element,errorElement:b.errorElement?b.errorElement:_.errorElement,hydrateFallbackElement:b.hydrateFallbackElement?b.hydrateFallbackElement:_.hydrateFallbackElement})}}function pC(e,t){return"id"in e&&"id"in t&&e.id===t.id?!0:e.index===t.index&&e.path===t.path&&e.caseSensitive===t.caseSensitive?(!e.children||e.children.length===0)&&(!t.children||t.children.length===0)?!0:e.children.every((n,i)=>t.children?.some(o=>pC(n,o))):!1}var _x=new WeakMap,mC=({key:e,route:t,manifest:n,mapRouteProperties:i})=>{let o=n[t.id];if($e(o,"No route found in manifest"),!o.lazy||typeof o.lazy!="object")return;let l=o.lazy[e];if(!l)return;let u=_x.get(o);u||(u={},_x.set(o,u));let f=u[e];if(f)return f;let p=(async()=>{let h=kN(e),v=o[e]!==void 0&&e!=="hasErrorBoundary";if(h)wt(!h,"Route property "+e+" is not a supported lazy route property. This property will be ignored."),u[e]=Promise.resolve();else if(v)wt(!1,`Route "${o.id}" has a static property "${e}" defined. The lazy property will be ignored.`);else{let _=await l();_!=null&&(Object.assign(o,{[e]:_}),Object.assign(o,i(o)))}typeof o.lazy=="object"&&(o.lazy[e]=void 0,Object.values(o.lazy).every(_=>_===void 0)&&(o.lazy=void 0))})();return u[e]=p,p},bx=new WeakMap;function hM(e,t,n,i,o){let l=n[e.id];if($e(l,"No route found in manifest"),!e.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof e.lazy=="function"){let y=bx.get(l);if(y)return{lazyRoutePromise:y,lazyHandlerPromise:y};let v=(async()=>{$e(typeof e.lazy=="function","No lazy route function found");let _=await e.lazy(),b={};for(let x in _){let I=_[x];if(I===void 0)continue;let C=MN(x),M=l[x]!==void 0&&x!=="hasErrorBoundary";C?wt(!C,"Route property "+x+" is not a supported property to be returned from a lazy route function. This property will be ignored."):M?wt(!M,`Route "${l.id}" has a static property "${x}" defined but its lazy function is also returning a value for this property. The lazy route property "${x}" will be ignored.`):b[x]=I}Object.assign(l,b),Object.assign(l,{...i(l),lazy:void 0})})();return bx.set(l,v),v.catch(()=>{}),{lazyRoutePromise:v,lazyHandlerPromise:v}}let u=Object.keys(e.lazy),f=[],p;for(let y of u){if(o&&o.includes(y))continue;let v=mC({key:y,route:e,manifest:n,mapRouteProperties:i});v&&(f.push(v),y===t&&(p=v))}let h=f.length>0?Promise.all(f).then(()=>{}):void 0;return h?.catch(()=>{}),p?.catch(()=>{}),{lazyRoutePromise:h,lazyHandlerPromise:p}}async function Sx(e){let t=e.matches.filter(o=>o.shouldLoad),n={};return(await Promise.all(t.map(o=>o.resolve()))).forEach((o,l)=>{n[t[l].route.id]=o}),n}async function pM(e){return e.matches.some(t=>t.route.middleware)?gC(e,()=>Sx(e)):Sx(e)}function gC(e,t){return mM(e,t,i=>i,wM,n);function n(i,o,l){if(l)return Promise.resolve(Object.assign(l.value,{[o]:{type:"error",result:i}}));{let{matches:u}=e,f=Math.min(u.findIndex(h=>h.route.id===o)||0,u.findIndex(h=>h.unstable_shouldCallHandler())||0),p=rs(u,u[f].route.id).route.id;return Promise.resolve({[p]:{type:"error",result:i}})}}}async function mM(e,t,n,i,o){let{matches:l,request:u,params:f,context:p}=e,h=l.flatMap(v=>v.route.middleware?v.route.middleware.map(_=>[v.route.id,_]):[]);return await yC({request:u,params:f,context:p},h,t,n,i,o)}async function yC(e,t,n,i,o,l,u=0){let{request:f}=e;if(f.signal.aborted)throw f.signal.reason??new Error(`Request aborted: ${f.method} ${f.url}`);let p=t[u];if(!p)return await n();let[h,y]=p,v,_=async()=>{if(v)throw new Error("You may only call `next()` once per middleware");try{return v={value:await yC(e,t,n,i,o,l,u+1)},v.value}catch(b){return v={value:await l(b,h,v)},v.value}};try{let b=await y(e,_),x=b!=null?i(b):void 0;return o(x)?x:v?x??v.value:(v={value:await _()},v.value)}catch(b){return await l(b,h,v)}}function vC(e,t,n,i,o){let l=mC({key:"middleware",route:i.route,manifest:t,mapRouteProperties:e}),u=hM(i.route,_n(n.method)?"action":"loader",t,e,o);return{middleware:l,route:u.lazyRoutePromise,handler:u.lazyHandlerPromise}}function Ry(e,t,n,i,o,l,u,f=null){let p=!1,h=vC(e,t,n,i,o);return{...i,_lazyPromises:h,shouldLoad:u,unstable_shouldRevalidateArgs:f,unstable_shouldCallHandler(y){return p=!0,f?typeof y=="boolean"?Mf(i,{...f,defaultShouldRevalidate:y}):Mf(i,f):u},resolve(y){return p||u||y&&!_n(n.method)&&(i.route.lazy||i.route.loader)?yM({request:n,match:i,lazyHandlerPromise:h?.handler,lazyRoutePromise:h?.route,handlerOverride:y,scopedContext:l}):Promise.resolve({type:"data",result:void 0})}}}function Ea(e,t,n,i,o,l,u,f=null){return i.map(p=>p.route.id!==o.route.id?{...p,shouldLoad:!1,unstable_shouldRevalidateArgs:f,unstable_shouldCallHandler:()=>!1,_lazyPromises:vC(e,t,n,p,l),resolve:()=>Promise.resolve({type:"data",result:void 0})}:Ry(e,t,n,p,l,u,!0,f))}async function gM(e,t,n,i,o,l){n.some(h=>h._lazyPromises?.middleware)&&await Promise.all(n.map(h=>h._lazyPromises?.middleware));let u={request:t,params:n[0].params,context:o,matches:n},p=await e({...u,fetcherKey:i,runClientMiddleware:h=>{let y=u;return gC(y,()=>h({...y,fetcherKey:i,runClientMiddleware:()=>{throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler")}}))}});try{await Promise.all(n.flatMap(h=>[h._lazyPromises?.handler,h._lazyPromises?.route]))}catch{}return p}async function yM({request:e,match:t,lazyHandlerPromise:n,lazyRoutePromise:i,handlerOverride:o,scopedContext:l}){let u,f,p=_n(e.method),h=p?"action":"loader",y=v=>{let _,b=new Promise((C,O)=>_=O);f=()=>_(),e.signal.addEventListener("abort",f);let x=C=>typeof v!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${h}" [routeId: ${t.route.id}]`)):v({request:e,params:t.params,context:l},...C!==void 0?[C]:[]),I=(async()=>{try{return{type:"data",result:await(o?o(O=>x(O)):x())}}catch(C){return{type:"error",result:C}}})();return Promise.race([I,b])};try{let v=p?t.route.action:t.route.loader;if(n||i)if(v){let _,[b]=await Promise.all([y(v).catch(x=>{_=x}),n,i]);if(_!==void 0)throw _;u=b}else{await n;let _=p?t.route.action:t.route.loader;if(_)[u]=await Promise.all([y(_),i]);else if(h==="action"){let b=new URL(e.url),x=b.pathname+b.search;throw Qn(405,{method:e.method,pathname:x,routeId:t.route.id})}else return{type:"data",result:void 0}}else if(v)u=await y(v);else{let _=new URL(e.url),b=_.pathname+_.search;throw Qn(404,{pathname:b})}}catch(v){return{type:"error",result:v}}finally{f&&e.signal.removeEventListener("abort",f)}return u}async function vM(e){let t=e.headers.get("Content-Type");return t&&/\bapplication\/json\b/.test(t)?e.body==null?null:e.json():e.text()}async function _M(e){let{result:t,type:n}=e;if(bC(t)){let i;try{i=await vM(t)}catch(o){return{type:"error",error:o}}return n==="error"?{type:"error",error:new Nf(t.status,t.statusText,i),statusCode:t.status,headers:t.headers}:{type:"data",data:i,statusCode:t.status,headers:t.headers}}return n==="error"?Rx(t)?t.data instanceof Error?{type:"error",error:t.data,statusCode:t.init?.status,headers:t.init?.headers?new Headers(t.init.headers):void 0}:{type:"error",error:new Nf(t.init?.status||500,void 0,t.data),statusCode:Bc(t)?t.status:void 0,headers:t.init?.headers?new Headers(t.init.headers):void 0}:{type:"error",error:t,statusCode:Bc(t)?t.status:void 0}:Rx(t)?{type:"data",data:t.data,statusCode:t.init?.status,headers:t.init?.headers?new Headers(t.init.headers):void 0}:{type:"data",data:t}}function bM(e,t,n,i,o){let l=e.headers.get("Location");if($e(l,"Redirects returned/thrown from loaders/actions must have a Location header"),!Iv(l)){let u=i.slice(0,i.findIndex(f=>f.route.id===n)+1);l=Ty(new URL(t.url),u,o,l),e.headers.set("Location",l)}return e}function xx(e,t,n){if(Iv(e)){let i=e,o=i.startsWith("//")?new URL(t.protocol+i):new URL(i),l=Jn(o.pathname,n)!=null;if(o.origin===t.origin&&l)return o.pathname+o.search+o.hash}return e}function ba(e,t,n,i){let o=e.createURL(_C(t)).toString(),l={signal:n};if(i&&_n(i.formMethod)){let{formMethod:u,formEncType:f}=i;l.method=u.toUpperCase(),f==="application/json"?(l.headers=new Headers({"Content-Type":f}),l.body=JSON.stringify(i.json)):f==="text/plain"?l.body=i.text:f==="application/x-www-form-urlencoded"&&i.formData?l.body=Ay(i.formData):l.body=i.formData}return new Request(o,l)}function Ay(e){let t=new URLSearchParams;for(let[n,i]of e.entries())t.append(n,typeof i=="string"?i:i.name);return t}function wx(e){let t=new FormData;for(let[n,i]of e.entries())t.append(n,i);return t}function SM(e,t,n,i=!1,o=!1){let l={},u=null,f,p=!1,h={},y=n&&kn(n[1])?n[1].error:void 0;return e.forEach(v=>{if(!(v.route.id in t))return;let _=v.route.id,b=t[_];if($e(!oo(b),"Cannot handle redirect results in processLoaderData"),kn(b)){let x=b.error;if(y!==void 0&&(x=y,y=void 0),u=u||{},o)u[_]=x;else{let I=rs(e,_);u[I.route.id]==null&&(u[I.route.id]=x)}i||(l[_]=hC),p||(p=!0,f=Bc(b.error)?b.error.status:500),b.headers&&(h[_]=b.headers)}else l[_]=b.data,b.statusCode&&b.statusCode!==200&&!p&&(f=b.statusCode),b.headers&&(h[_]=b.headers)}),y!==void 0&&n&&(u={[n[0]]:y},n[2]&&(l[n[2]]=void 0)),{loaderData:l,errors:u,statusCode:f||200,loaderHeaders:h}}function Ex(e,t,n,i,o,l){let{loaderData:u,errors:f}=SM(t,n,i);return o.filter(p=>!p.matches||p.matches.some(h=>h.shouldLoad)).forEach(p=>{let{key:h,match:y,controller:v}=p;if(v&&v.signal.aborted)return;let _=l[h];if($e(_,"Did not find corresponding fetcher result"),kn(_)){let b=rs(e.matches,y?.route.id);f&&f[b.route.id]||(f={...f,[b.route.id]:_.error}),e.fetchers.delete(h)}else if(oo(_))$e(!1,"Unhandled fetcher revalidation redirect");else{let b=es(_.data);e.fetchers.set(h,b)}}),{loaderData:u,errors:f}}function Tx(e,t,n,i){let o=Object.entries(t).filter(([,l])=>l!==hC).reduce((l,[u,f])=>(l[u]=f,l),{});for(let l of n){let u=l.route.id;if(!t.hasOwnProperty(u)&&e.hasOwnProperty(u)&&l.route.loader&&(o[u]=e[u]),i&&i.hasOwnProperty(u))break}return o}function Cx(e){return e?kn(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function rs(e,t){return(t?e.slice(0,e.findIndex(i=>i.route.id===t)+1):[...e]).reverse().find(i=>i.route.hasErrorBoundary===!0)||e[0]}function Vd(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Qn(e,{pathname:t,routeId:n,method:i,type:o,message:l}={}){let u="Unknown Server Error",f="Unknown @remix-run/router error";return e===400?(u="Bad Request",i&&t&&n?f=`You made a ${i} request to "${t}" but did not provide a \`loader\` for route "${n}", so there is no way to handle the request.`:o==="invalid-body"&&(f="Unable to encode submission body")):e===403?(u="Forbidden",f=`Route "${n}" does not match URL "${t}"`):e===404?(u="Not Found",f=`No route matches URL "${t}"`):e===405&&(u="Method Not Allowed",i&&t&&n?f=`You made a ${i.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${n}", so there is no way to handle the request.`:i&&(f=`Invalid request method "${i.toUpperCase()}"`)),new Nf(e||500,u,new Error(f),!0)}function Gd(e){let t=Object.entries(e);for(let n=t.length-1;n>=0;n--){let[i,o]=t[n];if(oo(o))return{key:i,result:o}}}function _C(e){let t=typeof e=="string"?Si(e):e;return ms({...t,hash:""})}function xM(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function wM(e){return e!=null&&typeof e=="object"&&Object.entries(e).every(([t,n])=>typeof t=="string"&&EM(n))}function EM(e){return e!=null&&typeof e=="object"&&"type"in e&&"result"in e&&(e.type==="data"||e.type==="error")}function TM(e){return bC(e.result)&&iM.has(e.result.status)}function kn(e){return e.type==="error"}function oo(e){return(e&&e.type)==="redirect"}function Rx(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function bC(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function CM(e){return rM.has(e.toUpperCase())}function _n(e){return tM.has(e.toUpperCase())}function Dv(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function mf(e,t){let n=typeof t=="string"?Si(t).search:t.search;if(e[e.length-1].route.index&&Dv(n||""))return e[e.length-1];let i=uC(e);return i[i.length-1]}function Ax(e){let{formMethod:t,formAction:n,formEncType:i,text:o,formData:l,json:u}=e;if(!(!t||!n||!i)){if(o!=null)return{formMethod:t,formAction:n,formEncType:i,formData:void 0,json:void 0,text:o};if(l!=null)return{formMethod:t,formAction:n,formEncType:i,formData:l,json:void 0,text:void 0};if(u!==void 0)return{formMethod:t,formAction:n,formEncType:i,formData:void 0,json:u,text:void 0}}}function Rg(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function RM(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function ic(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function AM(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function es(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function IM(e,t){try{let n=e.sessionStorage.getItem(fC);if(n){let i=JSON.parse(n);for(let[o,l]of Object.entries(i||{}))l&&Array.isArray(l)&&t.set(o,new Set(l||[]))}}catch{}}function DM(e,t){if(t.size>0){let n={};for(let[i,o]of t)n[i]=[...o];try{e.sessionStorage.setItem(fC,JSON.stringify(n))}catch(i){wt(!1,`Failed to save applied view transitions in sessionStorage (${i}).`)}}}function OM(){let e,t,n=new Promise((i,o)=>{e=async l=>{i(l);try{await n}catch{}},t=async l=>{o(l);try{await n}catch{}}});return{promise:n,resolve:e,reject:t}}var Co=E.createContext(null);Co.displayName="DataRouter";var fu=E.createContext(null);fu.displayName="DataRouterState";E.createContext(!1);var Ov=E.createContext({isTransitioning:!1});Ov.displayName="ViewTransition";var SC=E.createContext(new Map);SC.displayName="Fetchers";var kM=E.createContext(null);kM.displayName="Await";var Sr=E.createContext(null);Sr.displayName="Navigation";var Ah=E.createContext(null);Ah.displayName="Location";var rr=E.createContext({outlet:null,matches:[],isDataRoute:!1});rr.displayName="Route";var kv=E.createContext(null);kv.displayName="RouteError";function NM(e,{relative:t}={}){$e(Ga(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=E.useContext(Sr),{hash:o,pathname:l,search:u}=hu(e,{relative:t}),f=l;return n!=="/"&&(f=l==="/"?n:Or([n,l])),i.createHref({pathname:f,search:u,hash:o})}function Ga(){return E.useContext(Ah)!=null}function Pr(){return $e(Ga(),"useLocation() may be used only in the context of a <Router> component."),E.useContext(Ah).location}var xC="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function wC(e){E.useContext(Sr).static||E.useLayoutEffect(e)}function ws(){let{isDataRoute:e}=E.useContext(rr);return e?QM():MM()}function MM(){$e(Ga(),"useNavigate() may be used only in the context of a <Router> component.");let e=E.useContext(Co),{basename:t,navigator:n}=E.useContext(Sr),{matches:i}=E.useContext(rr),{pathname:o}=Pr(),l=JSON.stringify(Ch(i)),u=E.useRef(!1);return wC(()=>{u.current=!0}),E.useCallback((p,h={})=>{if(wt(u.current,xC),!u.current)return;if(typeof p=="number"){n.go(p);return}let y=Rh(p,JSON.parse(l),o,h.relative==="path");e==null&&t!=="/"&&(y.pathname=y.pathname==="/"?t:Or([t,y.pathname])),(h.replace?n.replace:n.push)(y,h.state,h)},[t,n,l,o,e])}var LM=E.createContext(null);function PM(e){let t=E.useContext(rr).outlet;return t&&E.createElement(LM.Provider,{value:e},t)}function jM(){let{matches:e}=E.useContext(rr),t=e[e.length-1];return t?t.params:{}}function hu(e,{relative:t}={}){let{matches:n}=E.useContext(rr),{pathname:i}=Pr(),o=JSON.stringify(Ch(n));return E.useMemo(()=>Rh(e,JSON.parse(o),i,t==="path"),[e,o,i,t])}function $M(e,t,n,i,o){$e(Ga(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=E.useContext(Sr),{matches:u}=E.useContext(rr),f=u[u.length-1],p=f?f.params:{},h=f?f.pathname:"/",y=f?f.pathnameBase:"/",v=f&&f.route;{let M=v&&v.path||"";EC(h,!v||M.endsWith("*")||M.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${M==="/"?"*":`${M}/*`}">.`)}let _=Pr(),b;b=_;let x=b.pathname||"/",I=x;if(y!=="/"){let M=y.replace(/^\//,"").split("/");I="/"+x.replace(/^\//,"").split("/").slice(M.length).join("/")}let C=ns(e,{pathname:I});return wt(v||C!=null,`No routes matched location "${b.pathname}${b.search}${b.hash}" `),wt(C==null||C[C.length-1].route.element!==void 0||C[C.length-1].route.Component!==void 0||C[C.length-1].route.lazy!==void 0,`Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),FM(C&&C.map(M=>Object.assign({},M,{params:Object.assign({},p,M.params),pathname:Or([y,l.encodeLocation?l.encodeLocation(M.pathname).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?y:Or([y,l.encodeLocation?l.encodeLocation(M.pathnameBase).pathname:M.pathnameBase])})),u,n,i,o)}function UM(){let e=YM(),t=Bc(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},u=null;return console.error("Error handled by React Router default ErrorBoundary:",e),u=E.createElement(E.Fragment,null,E.createElement("p",null,"💿 Hey developer 👋"),E.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",E.createElement("code",{style:l},"ErrorBoundary")," or"," ",E.createElement("code",{style:l},"errorElement")," prop on your route.")),E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:o},n):null,u)}var zM=E.createElement(UM,null),BM=class extends E.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.unstable_onError?this.props.unstable_onError(e,t):console.error("React Router caught the following error during render",e)}render(){return this.state.error!==void 0?E.createElement(rr.Provider,{value:this.props.routeContext},E.createElement(kv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function HM({routeContext:e,match:t,children:n}){let i=E.useContext(Co);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),E.createElement(rr.Provider,{value:e},n)}function FM(e,t=[],n=null,i=null,o=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,u=n?.errors;if(u!=null){let h=l.findIndex(y=>y.route.id&&u?.[y.route.id]!==void 0);$e(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,h+1))}let f=!1,p=-1;if(n)for(let h=0;h<l.length;h++){let y=l[h];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(p=h),y.route.id){let{loaderData:v,errors:_}=n,b=y.route.loader&&!v.hasOwnProperty(y.route.id)&&(!_||_[y.route.id]===void 0);if(y.route.lazy||b){f=!0,p>=0?l=l.slice(0,p+1):l=[l[0]];break}}}return l.reduceRight((h,y,v)=>{let _,b=!1,x=null,I=null;n&&(_=u&&y.route.id?u[y.route.id]:void 0,x=y.route.errorElement||zM,f&&(p<0&&v===0?(EC("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,I=null):p===v&&(b=!0,I=y.route.hydrateFallbackElement||null)));let C=t.concat(l.slice(0,v+1)),O=()=>{let M;return _?M=x:b?M=I:y.route.Component?M=E.createElement(y.route.Component,null):y.route.element?M=y.route.element:M=h,E.createElement(HM,{match:y,routeContext:{outlet:h,matches:C,isDataRoute:n!=null},children:M})};return n&&(y.route.ErrorBoundary||y.route.errorElement||v===0)?E.createElement(BM,{location:n.location,revalidation:n.revalidation,component:x,error:_,children:O(),routeContext:{outlet:null,matches:C,isDataRoute:!0},unstable_onError:i}):O()},null)}function Nv(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function qM(e){let t=E.useContext(Co);return $e(t,Nv(e)),t}function VM(e){let t=E.useContext(fu);return $e(t,Nv(e)),t}function GM(e){let t=E.useContext(rr);return $e(t,Nv(e)),t}function Mv(e){let t=GM(e),n=t.matches[t.matches.length-1];return $e(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function WM(){return Mv("useRouteId")}function YM(){let e=E.useContext(kv),t=VM("useRouteError"),n=Mv("useRouteError");return e!==void 0?e:t.errors?.[n]}function QM(){let{router:e}=qM("useNavigate"),t=Mv("useNavigate"),n=E.useRef(!1);return wC(()=>{n.current=!0}),E.useCallback(async(o,l={})=>{wt(n.current,xC),n.current&&(typeof o=="number"?e.navigate(o):await e.navigate(o,{fromRouteId:t,...l}))},[e,t])}var Ix={};function EC(e,t,n){!t&&!Ix[e]&&(Ix[e]=!0,wt(!1,n))}var Dx={};function Ox(e,t){!e&&!Dx[t]&&(Dx[t]=!0,console.warn(t))}function KM(e){let t={hasErrorBoundary:e.hasErrorBoundary||e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&(e.element&&wt(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(t,{element:E.createElement(e.Component),Component:void 0})),e.HydrateFallback&&(e.hydrateFallbackElement&&wt(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(t,{hydrateFallbackElement:E.createElement(e.HydrateFallback),HydrateFallback:void 0})),e.ErrorBoundary&&(e.errorElement&&wt(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(t,{errorElement:E.createElement(e.ErrorBoundary),ErrorBoundary:void 0})),t}var XM=["HydrateFallback","hydrateFallbackElement"],ZM=class{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=i=>{this.status==="pending"&&(this.status="resolved",t(i))},this.reject=i=>{this.status==="pending"&&(this.status="rejected",n(i))}})}};function JM({router:e,flushSync:t,unstable_onError:n}){let[i,o]=E.useState(e.state),[l,u]=E.useState(),[f,p]=E.useState({isTransitioning:!1}),[h,y]=E.useState(),[v,_]=E.useState(),[b,x]=E.useState(),I=E.useRef(new Map),C=E.useCallback(N=>{o(A=>(N.errors&&n&&Object.entries(N.errors).forEach(([P,F])=>{A.errors?.[P]!==F&&n(F)}),N))},[n]),O=E.useCallback((N,{deletedFetchers:A,flushSync:P,viewTransitionOpts:F})=>{N.fetchers.forEach((B,z)=>{B.data!==void 0&&I.current.set(z,B.data)}),A.forEach(B=>I.current.delete(B)),Ox(P===!1||t!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let H=e.window!=null&&e.window.document!=null&&typeof e.window.document.startViewTransition=="function";if(Ox(F==null||H,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!F||!H){t&&P?t(()=>C(N)):E.startTransition(()=>C(N));return}if(t&&P){t(()=>{v&&(h&&h.resolve(),v.skipTransition()),p({isTransitioning:!0,flushSync:!0,currentLocation:F.currentLocation,nextLocation:F.nextLocation})});let B=e.window.document.startViewTransition(()=>{t(()=>C(N))});B.finished.finally(()=>{t(()=>{y(void 0),_(void 0),u(void 0),p({isTransitioning:!1})})}),t(()=>_(B));return}v?(h&&h.resolve(),v.skipTransition(),x({state:N,currentLocation:F.currentLocation,nextLocation:F.nextLocation})):(u(N),p({isTransitioning:!0,flushSync:!1,currentLocation:F.currentLocation,nextLocation:F.nextLocation}))},[e.window,t,v,h,C]);E.useLayoutEffect(()=>e.subscribe(O),[e,O]),E.useEffect(()=>{f.isTransitioning&&!f.flushSync&&y(new ZM)},[f]),E.useEffect(()=>{if(h&&l&&e.window){let N=l,A=h.promise,P=e.window.document.startViewTransition(async()=>{E.startTransition(()=>C(N)),await A});P.finished.finally(()=>{y(void 0),_(void 0),u(void 0),p({isTransitioning:!1})}),_(P)}},[l,h,e.window,C]),E.useEffect(()=>{h&&l&&i.location.key===l.location.key&&h.resolve()},[h,v,i.location,l]),E.useEffect(()=>{!f.isTransitioning&&b&&(u(b.state),p({isTransitioning:!0,flushSync:!1,currentLocation:b.currentLocation,nextLocation:b.nextLocation}),x(void 0))},[f.isTransitioning,b]);let M=E.useMemo(()=>({createHref:e.createHref,encodeLocation:e.encodeLocation,go:N=>e.navigate(N),push:(N,A,P)=>e.navigate(N,{state:A,preventScrollReset:P?.preventScrollReset}),replace:(N,A,P)=>e.navigate(N,{replace:!0,state:A,preventScrollReset:P?.preventScrollReset})}),[e]),R=e.basename||"/",D=E.useMemo(()=>({router:e,navigator:M,static:!1,basename:R,unstable_onError:n}),[e,M,R,n]);return E.createElement(E.Fragment,null,E.createElement(Co.Provider,{value:D},E.createElement(fu.Provider,{value:i},E.createElement(SC.Provider,{value:I.current},E.createElement(Ov.Provider,{value:f},E.createElement(r2,{basename:R,location:i.location,navigationType:i.historyAction,navigator:M},E.createElement(e2,{routes:e.routes,future:e.future,state:i,unstable_onError:n})))))),null)}var e2=E.memo(t2);function t2({routes:e,future:t,state:n,unstable_onError:i}){return $M(e,void 0,n,i,t)}function Lv({to:e,replace:t,state:n,relative:i}){$e(Ga(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=E.useContext(Sr);wt(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=E.useContext(rr),{pathname:u}=Pr(),f=ws(),p=Rh(e,Ch(l),u,i==="path"),h=JSON.stringify(p);return E.useEffect(()=>{f(JSON.parse(h),{replace:t,state:n,relative:i})},[f,h,i,t,n]),null}function n2(e){return PM(e.context)}function Yn(e){$e(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function r2({basename:e="/",children:t=null,location:n,navigationType:i="POP",navigator:o,static:l=!1}){$e(!Ga(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=e.replace(/^\/*/,"/"),f=E.useMemo(()=>({basename:u,navigator:o,static:l,future:{}}),[u,o,l]);typeof n=="string"&&(n=Si(n));let{pathname:p="/",search:h="",hash:y="",state:v=null,key:_="default"}=n,b=E.useMemo(()=>{let x=Jn(p,u);return x==null?null:{location:{pathname:x,search:h,hash:y,state:v,key:_},navigationType:i}},[u,p,h,y,v,_,i]);return wt(b!=null,`<Router basename="${u}"> is not able to match the URL "${p}${h}${y}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:E.createElement(Sr.Provider,{value:f},E.createElement(Ah.Provider,{children:t,value:b}))}function Iy(e,t=[]){let n=[];return E.Children.forEach(e,(i,o)=>{if(!E.isValidElement(i))return;let l=[...t,o];if(i.type===E.Fragment){n.push.apply(n,Iy(i.props.children,l));return}$e(i.type===Yn,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),$e(!i.props.index||!i.props.children,"An index route cannot have child routes.");let u={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(u.children=Iy(i.props.children,l)),n.push(u)}),n}var i2=Iy,gf="get",yf="application/x-www-form-urlencoded";function Ih(e){return e!=null&&typeof e.tagName=="string"}function s2(e){return Ih(e)&&e.tagName.toLowerCase()==="button"}function o2(e){return Ih(e)&&e.tagName.toLowerCase()==="form"}function a2(e){return Ih(e)&&e.tagName.toLowerCase()==="input"}function l2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function c2(e,t){return e.button===0&&(!t||t==="_self")&&!l2(e)}function Dy(e=""){return new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let i=e[n];return t.concat(Array.isArray(i)?i.map(o=>[n,o]):[[n,i]])},[]))}function u2(e,t){let n=Dy(e);return t&&t.forEach((i,o)=>{n.has(o)||t.getAll(o).forEach(l=>{n.append(o,l)})}),n}var Wd=null;function d2(){if(Wd===null)try{new FormData(document.createElement("form"),0),Wd=!1}catch{Wd=!0}return Wd}var f2=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ag(e){return e!=null&&!f2.has(e)?(wt(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${yf}"`),null):e}function h2(e,t){let n,i,o,l,u;if(o2(e)){let f=e.getAttribute("action");i=f?Jn(f,t):null,n=e.getAttribute("method")||gf,o=Ag(e.getAttribute("enctype"))||yf,l=new FormData(e)}else if(s2(e)||a2(e)&&(e.type==="submit"||e.type==="image")){let f=e.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=e.getAttribute("formaction")||f.getAttribute("action");if(i=p?Jn(p,t):null,n=e.getAttribute("formmethod")||f.getAttribute("method")||gf,o=Ag(e.getAttribute("formenctype"))||Ag(f.getAttribute("enctype"))||yf,l=new FormData(f,e),!d2()){let{name:h,type:y,value:v}=e;if(y==="image"){let _=h?`${h}.`:"";l.append(`${_}x`,"0"),l.append(`${_}y`,"0")}else h&&l.append(h,v)}}else{if(Ih(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=gf,i=null,o=yf,u=e}return l&&o==="text/plain"&&(u=l,l=void 0),{action:i,method:n.toLowerCase(),encType:o,formData:l,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Pv(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function p2(e,t,n){let i=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return i.pathname==="/"?i.pathname=`_root.${n}`:t&&Jn(i.pathname,t)==="/"?i.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${n}`,i}async function m2(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function g2(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function y2(e,t,n){let i=await Promise.all(e.map(async o=>{let l=t.routes[o.route.id];if(l){let u=await m2(l,n);return u.links?u.links():[]}return[]}));return S2(i.flat(1).filter(g2).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function kx(e,t,n,i,o,l){let u=(p,h)=>n[h]?p.route.id!==n[h].route.id:!0,f=(p,h)=>n[h].pathname!==p.pathname||n[h].route.path?.endsWith("*")&&n[h].params["*"]!==p.params["*"];return l==="assets"?t.filter((p,h)=>u(p,h)||f(p,h)):l==="data"?t.filter((p,h)=>{let y=i.routes[p.route.id];if(!y||!y.hasLoader)return!1;if(u(p,h)||f(p,h))return!0;if(p.route.shouldRevalidate){let v=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function v2(e,t,{includeHydrateFallback:n}={}){return _2(e.map(i=>{let o=t.routes[i.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function _2(e){return[...new Set(e)]}function b2(e){let t={},n=Object.keys(e).sort();for(let i of n)t[i]=e[i];return t}function S2(e,t){let n=new Set;return new Set(t),e.reduce((i,o)=>{let l=JSON.stringify(b2(o));return n.has(l)||(n.add(l),i.push({key:l,link:o})),i},[])}function TC(){let e=E.useContext(Co);return Pv(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function x2(){let e=E.useContext(fu);return Pv(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var jv=E.createContext(void 0);jv.displayName="FrameworkContext";function CC(){let e=E.useContext(jv);return Pv(e,"You must render this element inside a <HydratedRouter> element"),e}function w2(e,t){let n=E.useContext(jv),[i,o]=E.useState(!1),[l,u]=E.useState(!1),{onFocus:f,onBlur:p,onMouseEnter:h,onMouseLeave:y,onTouchStart:v}=t,_=E.useRef(null);E.useEffect(()=>{if(e==="render"&&u(!0),e==="viewport"){let I=O=>{O.forEach(M=>{u(M.isIntersecting)})},C=new IntersectionObserver(I,{threshold:.5});return _.current&&C.observe(_.current),()=>{C.disconnect()}}},[e]),E.useEffect(()=>{if(i){let I=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(I)}}},[i]);let b=()=>{o(!0)},x=()=>{o(!1),u(!1)};return n?e!=="intent"?[l,_,{}]:[l,_,{onFocus:sc(f,b),onBlur:sc(p,x),onMouseEnter:sc(h,b),onMouseLeave:sc(y,x),onTouchStart:sc(v,b)}]:[!1,_,{}]}function sc(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function E2({page:e,...t}){let{router:n}=TC(),i=E.useMemo(()=>ns(n.routes,e,n.basename),[n.routes,e,n.basename]);return i?E.createElement(C2,{page:e,matches:i,...t}):null}function T2(e){let{manifest:t,routeModules:n}=CC(),[i,o]=E.useState([]);return E.useEffect(()=>{let l=!1;return y2(e,t,n).then(u=>{l||o(u)}),()=>{l=!0}},[e,t,n]),i}function C2({page:e,matches:t,...n}){let i=Pr(),{manifest:o,routeModules:l}=CC(),{basename:u}=TC(),{loaderData:f,matches:p}=x2(),h=E.useMemo(()=>kx(e,t,p,o,i,"data"),[e,t,p,o,i]),y=E.useMemo(()=>kx(e,t,p,o,i,"assets"),[e,t,p,o,i]),v=E.useMemo(()=>{if(e===i.pathname+i.search+i.hash)return[];let x=new Set,I=!1;if(t.forEach(O=>{let M=o.routes[O.route.id];!M||!M.hasLoader||(!h.some(R=>R.route.id===O.route.id)&&O.route.id in f&&l[O.route.id]?.shouldRevalidate||M.hasClientLoader?I=!0:x.add(O.route.id))}),x.size===0)return[];let C=p2(e,u,"data");return I&&x.size>0&&C.searchParams.set("_routes",t.filter(O=>x.has(O.route.id)).map(O=>O.route.id).join(",")),[C.pathname+C.search]},[u,f,i,o,h,t,e,l]),_=E.useMemo(()=>v2(y,o),[y,o]),b=T2(y);return E.createElement(E.Fragment,null,v.map(x=>E.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...n})),_.map(x=>E.createElement("link",{key:x,rel:"modulepreload",href:x,...n})),b.map(({key:x,link:I})=>E.createElement("link",{key:x,nonce:n.nonce,...I})))}function R2(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var RC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{RC&&(window.__reactRouterVersion="7.9.1")}catch{}function A2(e,t){return cM({basename:t?.basename,getContext:t?.getContext,future:t?.future,history:AN({window:t?.window}),hydrationData:I2(),routes:e,mapRouteProperties:KM,hydrationRouteProperties:XM,dataStrategy:t?.dataStrategy,patchRoutesOnNavigation:t?.patchRoutesOnNavigation,window:t?.window}).initialize()}function I2(){let e=window?.__staticRouterHydrationData;return e&&e.errors&&(e={...e,errors:D2(e.errors)}),e}function D2(e){if(!e)return null;let t=Object.entries(e),n={};for(let[i,o]of t)if(o&&o.__type==="RouteErrorResponse")n[i]=new Nf(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){if(o.__subType){let l=window[o.__subType];if(typeof l=="function")try{let u=new l(o.message);u.stack="",n[i]=u}catch{}}if(n[i]==null){let l=new Error(o.message);l.stack="",n[i]=l}}else n[i]=o;return n}var AC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Es=E.forwardRef(function({onClick:t,discover:n="render",prefetch:i="none",relative:o,reloadDocument:l,replace:u,state:f,target:p,to:h,preventScrollReset:y,viewTransition:v,..._},b){let{basename:x}=E.useContext(Sr),I=typeof h=="string"&&AC.test(h),C,O=!1;if(typeof h=="string"&&I&&(C=h,RC))try{let H=new URL(window.location.href),B=h.startsWith("//")?new URL(H.protocol+h):new URL(h),z=Jn(B.pathname,x);B.origin===H.origin&&z!=null?h=z+B.search+B.hash:O=!0}catch{wt(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let M=NM(h,{relative:o}),[R,D,N]=w2(i,_),A=N2(h,{replace:u,state:f,target:p,preventScrollReset:y,relative:o,viewTransition:v});function P(H){t&&t(H),H.defaultPrevented||A(H)}let F=E.createElement("a",{..._,...N,href:C||M,onClick:O||l?t:P,ref:R2(b,D),target:p,"data-discover":!I&&n==="render"?"true":void 0});return R&&!I?E.createElement(E.Fragment,null,F,E.createElement(E2,{page:M})):F});Es.displayName="Link";var $v=E.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:i="",end:o=!1,style:l,to:u,viewTransition:f,children:p,...h},y){let v=hu(u,{relative:h.relative}),_=Pr(),b=E.useContext(fu),{navigator:x,basename:I}=E.useContext(Sr),C=b!=null&&U2(v)&&f===!0,O=x.encodeLocation?x.encodeLocation(v).pathname:v.pathname,M=_.pathname,R=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;n||(M=M.toLowerCase(),R=R?R.toLowerCase():null,O=O.toLowerCase()),R&&I&&(R=Jn(R,I)||R);const D=O!=="/"&&O.endsWith("/")?O.length-1:O.length;let N=M===O||!o&&M.startsWith(O)&&M.charAt(D)==="/",A=R!=null&&(R===O||!o&&R.startsWith(O)&&R.charAt(O.length)==="/"),P={isActive:N,isPending:A,isTransitioning:C},F=N?t:void 0,H;typeof i=="function"?H=i(P):H=[i,N?"active":null,A?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let B=typeof l=="function"?l(P):l;return E.createElement(Es,{...h,"aria-current":F,className:H,ref:y,style:B,to:u,viewTransition:f},typeof p=="function"?p(P):p)});$v.displayName="NavLink";var O2=E.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:i,replace:o,state:l,method:u=gf,action:f,onSubmit:p,relative:h,preventScrollReset:y,viewTransition:v,..._},b)=>{let x=j2(),I=$2(f,{relative:h}),C=u.toLowerCase()==="get"?"get":"post",O=typeof f=="string"&&AC.test(f),M=R=>{if(p&&p(R),R.defaultPrevented)return;R.preventDefault();let D=R.nativeEvent.submitter,N=D?.getAttribute("formmethod")||u;x(D||R.currentTarget,{fetcherKey:t,method:N,navigate:n,replace:o,state:l,relative:h,preventScrollReset:y,viewTransition:v})};return E.createElement("form",{ref:b,method:C,action:I,onSubmit:i?p:M,..._,"data-discover":!O&&e==="render"?"true":void 0})});O2.displayName="Form";function k2(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function IC(e){let t=E.useContext(Co);return $e(t,k2(e)),t}function N2(e,{target:t,replace:n,state:i,preventScrollReset:o,relative:l,viewTransition:u}={}){let f=ws(),p=Pr(),h=hu(e,{relative:l});return E.useCallback(y=>{if(c2(y,t)){y.preventDefault();let v=n!==void 0?n:ms(p)===ms(h);f(e,{replace:v,state:i,preventScrollReset:o,relative:l,viewTransition:u})}},[p,f,h,n,i,t,e,o,l,u])}function M2(e){wt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=E.useRef(Dy(e)),n=E.useRef(!1),i=Pr(),o=E.useMemo(()=>u2(i.search,n.current?null:t.current),[i.search]),l=ws(),u=E.useCallback((f,p)=>{const h=Dy(typeof f=="function"?f(new URLSearchParams(o)):f);n.current=!0,l("?"+h,p)},[l,o]);return[o,u]}var L2=0,P2=()=>`__${String(++L2)}__`;function j2(){let{router:e}=IC("useSubmit"),{basename:t}=E.useContext(Sr),n=WM();return E.useCallback(async(i,o={})=>{let{action:l,method:u,encType:f,formData:p,body:h}=h2(i,t);if(o.navigate===!1){let y=o.fetcherKey||P2();await e.fetch(y,n,o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:h,formMethod:o.method||u,formEncType:o.encType||f,flushSync:o.flushSync})}else await e.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:h,formMethod:o.method||u,formEncType:o.encType||f,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[e,t,n])}function $2(e,{relative:t}={}){let{basename:n}=E.useContext(Sr),i=E.useContext(rr);$e(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),l={...hu(e||".",{relative:t})},u=Pr();if(e==null){l.search=u.search;let f=new URLSearchParams(l.search),p=f.getAll("index");if(p.some(y=>y==="")){f.delete("index"),p.filter(v=>v).forEach(v=>f.append("index",v));let y=f.toString();l.search=y?`?${y}`:""}}return(!e||e===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(l.pathname=l.pathname==="/"?n:Or([n,l.pathname])),ms(l)}function U2(e,{relative:t}={}){let n=E.useContext(Ov);$e(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=IC("useViewTransitionState"),o=hu(e,{relative:t});if(!n.isTransitioning)return!1;let l=Jn(n.currentLocation.pathname,i)||n.currentLocation.pathname,u=Jn(n.nextLocation.pathname,i)||n.nextLocation.pathname;return kf(o.pathname,u)!=null||kf(o.pathname,l)!=null}var z2=JT();function B2(e){return E.createElement(JM,{flushSync:z2.flushSync,...e})}var Gt=function(){return Gt=Object.assign||function(t){for(var n,i=1,o=arguments.length;i<o;i++){n=arguments[i];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},Gt.apply(this,arguments)};function Hc(e,t,n){if(n||arguments.length===2)for(var i=0,o=t.length,l;i<o;i++)(l||!(i in t))&&(l||(l=Array.prototype.slice.call(t,0,i)),l[i]=t[i]);return e.concat(l||Array.prototype.slice.call(t))}var mt="-ms-",Cc="-moz-",tt="-webkit-",DC="comm",Dh="rule",Uv="decl",H2="@import",OC="@keyframes",F2="@layer",kC=Math.abs,zv=String.fromCharCode,Oy=Object.assign;function q2(e,t){return qt(e,0)^45?(((t<<2^qt(e,0))<<2^qt(e,1))<<2^qt(e,2))<<2^qt(e,3):0}function NC(e){return e.trim()}function ai(e,t){return(e=t.exec(e))?e[0]:e}function Be(e,t,n){return e.replace(t,n)}function vf(e,t,n){return e.indexOf(t,n)}function qt(e,t){return e.charCodeAt(t)|0}function Oa(e,t,n){return e.slice(t,n)}function Dr(e){return e.length}function MC(e){return e.length}function Sc(e,t){return t.push(e),e}function V2(e,t){return e.map(t).join("")}function Nx(e,t){return e.filter(function(n){return!ai(n,t)})}var Oh=1,ka=1,LC=0,er=0,Lt=0,Wa="";function kh(e,t,n,i,o,l,u,f){return{value:e,root:t,parent:n,type:i,props:o,children:l,line:Oh,column:ka,length:u,return:"",siblings:f}}function ts(e,t){return Oy(kh("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ma(e){for(;e.root;)e=ts(e.root,{children:[e]});Sc(e,e.siblings)}function G2(){return Lt}function W2(){return Lt=er>0?qt(Wa,--er):0,ka--,Lt===10&&(ka=1,Oh--),Lt}function pr(){return Lt=er<LC?qt(Wa,er++):0,ka++,Lt===10&&(ka=1,Oh++),Lt}function fo(){return qt(Wa,er)}function _f(){return er}function Nh(e,t){return Oa(Wa,e,t)}function ky(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Y2(e){return Oh=ka=1,LC=Dr(Wa=e),er=0,[]}function Q2(e){return Wa="",e}function Ig(e){return NC(Nh(er-1,Ny(e===91?e+2:e===40?e+1:e)))}function K2(e){for(;(Lt=fo())&&Lt<33;)pr();return ky(e)>2||ky(Lt)>3?"":" "}function X2(e,t){for(;--t&&pr()&&!(Lt<48||Lt>102||Lt>57&&Lt<65||Lt>70&&Lt<97););return Nh(e,_f()+(t<6&&fo()==32&&pr()==32))}function Ny(e){for(;pr();)switch(Lt){case e:return er;case 34:case 39:e!==34&&e!==39&&Ny(Lt);break;case 40:e===41&&Ny(e);break;case 92:pr();break}return er}function Z2(e,t){for(;pr()&&e+Lt!==57;)if(e+Lt===84&&fo()===47)break;return"/*"+Nh(t,er-1)+"*"+zv(e===47?e:pr())}function J2(e){for(;!ky(fo());)pr();return Nh(e,er)}function eL(e){return Q2(bf("",null,null,null,[""],e=Y2(e),0,[0],e))}function bf(e,t,n,i,o,l,u,f,p){for(var h=0,y=0,v=u,_=0,b=0,x=0,I=1,C=1,O=1,M=0,R="",D=o,N=l,A=i,P=R;C;)switch(x=M,M=pr()){case 40:if(x!=108&&qt(P,v-1)==58){vf(P+=Be(Ig(M),"&","&\f"),"&\f",kC(h?f[h-1]:0))!=-1&&(O=-1);break}case 34:case 39:case 91:P+=Ig(M);break;case 9:case 10:case 13:case 32:P+=K2(x);break;case 92:P+=X2(_f()-1,7);continue;case 47:switch(fo()){case 42:case 47:Sc(tL(Z2(pr(),_f()),t,n,p),p);break;default:P+="/"}break;case 123*I:f[h++]=Dr(P)*O;case 125*I:case 59:case 0:switch(M){case 0:case 125:C=0;case 59+y:O==-1&&(P=Be(P,/\f/g,"")),b>0&&Dr(P)-v&&Sc(b>32?Lx(P+";",i,n,v-1,p):Lx(Be(P," ","")+";",i,n,v-2,p),p);break;case 59:P+=";";default:if(Sc(A=Mx(P,t,n,h,y,o,f,R,D=[],N=[],v,l),l),M===123)if(y===0)bf(P,t,A,A,D,l,v,f,N);else switch(_===99&&qt(P,3)===110?100:_){case 100:case 108:case 109:case 115:bf(e,A,A,i&&Sc(Mx(e,A,A,0,0,o,f,R,o,D=[],v,N),N),o,N,v,f,i?D:N);break;default:bf(P,A,A,A,[""],N,0,f,N)}}h=y=b=0,I=O=1,R=P="",v=u;break;case 58:v=1+Dr(P),b=x;default:if(I<1){if(M==123)--I;else if(M==125&&I++==0&&W2()==125)continue}switch(P+=zv(M),M*I){case 38:O=y>0?1:(P+="\f",-1);break;case 44:f[h++]=(Dr(P)-1)*O,O=1;break;case 64:fo()===45&&(P+=Ig(pr())),_=fo(),y=v=Dr(R=P+=J2(_f())),M++;break;case 45:x===45&&Dr(P)==2&&(I=0)}}return l}function Mx(e,t,n,i,o,l,u,f,p,h,y,v){for(var _=o-1,b=o===0?l:[""],x=MC(b),I=0,C=0,O=0;I<i;++I)for(var M=0,R=Oa(e,_+1,_=kC(C=u[I])),D=e;M<x;++M)(D=NC(C>0?b[M]+" "+R:Be(R,/&\f/g,b[M])))&&(p[O++]=D);return kh(e,t,n,o===0?Dh:f,p,h,y,v)}function tL(e,t,n,i){return kh(e,t,n,DC,zv(G2()),Oa(e,2,-2),0,i)}function Lx(e,t,n,i,o){return kh(e,t,n,Uv,Oa(e,0,i),Oa(e,i+1,-1),i,o)}function PC(e,t,n){switch(q2(e,t)){case 5103:return tt+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return tt+e+e;case 4789:return Cc+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return tt+e+Cc+e+mt+e+e;case 5936:switch(qt(e,t+11)){case 114:return tt+e+mt+Be(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return tt+e+mt+Be(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return tt+e+mt+Be(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return tt+e+mt+e+e;case 6165:return tt+e+mt+"flex-"+e+e;case 5187:return tt+e+Be(e,/(\w+).+(:[^]+)/,tt+"box-$1$2"+mt+"flex-$1$2")+e;case 5443:return tt+e+mt+"flex-item-"+Be(e,/flex-|-self/g,"")+(ai(e,/flex-|baseline/)?"":mt+"grid-row-"+Be(e,/flex-|-self/g,""))+e;case 4675:return tt+e+mt+"flex-line-pack"+Be(e,/align-content|flex-|-self/g,"")+e;case 5548:return tt+e+mt+Be(e,"shrink","negative")+e;case 5292:return tt+e+mt+Be(e,"basis","preferred-size")+e;case 6060:return tt+"box-"+Be(e,"-grow","")+tt+e+mt+Be(e,"grow","positive")+e;case 4554:return tt+Be(e,/([^-])(transform)/g,"$1"+tt+"$2")+e;case 6187:return Be(Be(Be(e,/(zoom-|grab)/,tt+"$1"),/(image-set)/,tt+"$1"),e,"")+e;case 5495:case 3959:return Be(e,/(image-set\([^]*)/,tt+"$1$`$1");case 4968:return Be(Be(e,/(.+:)(flex-)?(.*)/,tt+"box-pack:$3"+mt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+tt+e+e;case 4200:if(!ai(e,/flex-|baseline/))return mt+"grid-column-align"+Oa(e,t)+e;break;case 2592:case 3360:return mt+Be(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(i,o){return t=o,ai(i.props,/grid-\w+-end/)})?~vf(e+(n=n[t].value),"span",0)?e:mt+Be(e,"-start","")+e+mt+"grid-row-span:"+(~vf(n,"span",0)?ai(n,/\d+/):+ai(n,/\d+/)-+ai(e,/\d+/))+";":mt+Be(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(i){return ai(i.props,/grid-\w+-start/)})?e:mt+Be(Be(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Be(e,/(.+)-inline(.+)/,tt+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Dr(e)-1-t>6)switch(qt(e,t+1)){case 109:if(qt(e,t+4)!==45)break;case 102:return Be(e,/(.+:)(.+)-([^]+)/,"$1"+tt+"$2-$3$1"+Cc+(qt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~vf(e,"stretch",0)?PC(Be(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Be(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,o,l,u,f,p,h){return mt+o+":"+l+h+(u?mt+o+"-span:"+(f?p:+p-+l)+h:"")+e});case 4949:if(qt(e,t+6)===121)return Be(e,":",":"+tt)+e;break;case 6444:switch(qt(e,qt(e,14)===45?18:11)){case 120:return Be(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+tt+(qt(e,14)===45?"inline-":"")+"box$3$1"+tt+"$2$3$1"+mt+"$2box$3")+e;case 100:return Be(e,":",":"+mt)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Be(e,"scroll-","scroll-snap-")+e}return e}function Lf(e,t){for(var n="",i=0;i<e.length;i++)n+=t(e[i],i,e,t)||"";return n}function nL(e,t,n,i){switch(e.type){case F2:if(e.children.length)break;case H2:case Uv:return e.return=e.return||e.value;case DC:return"";case OC:return e.return=e.value+"{"+Lf(e.children,i)+"}";case Dh:if(!Dr(e.value=e.props.join(",")))return""}return Dr(n=Lf(e.children,i))?e.return=e.value+"{"+n+"}":""}function rL(e){var t=MC(e);return function(n,i,o,l){for(var u="",f=0;f<t;f++)u+=e[f](n,i,o,l)||"";return u}}function iL(e){return function(t){t.root||(t=t.return)&&e(t)}}function sL(e,t,n,i){if(e.length>-1&&!e.return)switch(e.type){case Uv:e.return=PC(e.value,e.length,n);return;case OC:return Lf([ts(e,{value:Be(e.value,"@","@"+tt)})],i);case Dh:if(e.length)return V2(n=e.props,function(o){switch(ai(o,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ma(ts(e,{props:[Be(o,/:(read-\w+)/,":"+Cc+"$1")]})),ma(ts(e,{props:[o]})),Oy(e,{props:Nx(n,i)});break;case"::placeholder":ma(ts(e,{props:[Be(o,/:(plac\w+)/,":"+tt+"input-$1")]})),ma(ts(e,{props:[Be(o,/:(plac\w+)/,":"+Cc+"$1")]})),ma(ts(e,{props:[Be(o,/:(plac\w+)/,mt+"input-$1")]})),ma(ts(e,{props:[o]})),Oy(e,{props:Nx(n,i)});break}return""})}}var oL={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},On={},Na=typeof process<"u"&&On!==void 0&&(On.REACT_APP_SC_ATTR||On.SC_ATTR)||"data-styled",jC="active",$C="data-styled-version",Mh="6.1.19",Bv=`/*!sc*/
`,Pf=typeof window<"u"&&typeof document<"u",aL=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&On!==void 0&&On.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&On.REACT_APP_SC_DISABLE_SPEEDY!==""?On.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&On.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&On!==void 0&&On.SC_DISABLE_SPEEDY!==void 0&&On.SC_DISABLE_SPEEDY!==""&&On.SC_DISABLE_SPEEDY!=="false"&&On.SC_DISABLE_SPEEDY),lL={},Lh=Object.freeze([]),Ma=Object.freeze({});function UC(e,t,n){return n===void 0&&(n=Ma),e.theme!==n.theme&&e.theme||t||n.theme}var zC=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),cL=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,uL=/(^-|-$)/g;function Px(e){return e.replace(cL,"-").replace(uL,"")}var dL=/(a)(d)/gi,Yd=52,jx=function(e){return String.fromCharCode(e+(e>25?39:97))};function My(e){var t,n="";for(t=Math.abs(e);t>Yd;t=t/Yd|0)n=jx(t%Yd)+n;return(jx(t%Yd)+n).replace(dL,"$1-$2")}var Dg,BC=5381,Sa=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},HC=function(e){return Sa(BC,e)};function FC(e){return My(HC(e)>>>0)}function fL(e){return e.displayName||e.name||"Component"}function Og(e){return typeof e=="string"&&!0}var qC=typeof Symbol=="function"&&Symbol.for,VC=qC?Symbol.for("react.memo"):60115,hL=qC?Symbol.for("react.forward_ref"):60112,pL={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},mL={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},GC={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},gL=((Dg={})[hL]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Dg[VC]=GC,Dg);function $x(e){return("type"in(t=e)&&t.type.$$typeof)===VC?GC:"$$typeof"in e?gL[e.$$typeof]:pL;var t}var yL=Object.defineProperty,vL=Object.getOwnPropertyNames,Ux=Object.getOwnPropertySymbols,_L=Object.getOwnPropertyDescriptor,bL=Object.getPrototypeOf,zx=Object.prototype;function WC(e,t,n){if(typeof t!="string"){if(zx){var i=bL(t);i&&i!==zx&&WC(e,i,n)}var o=vL(t);Ux&&(o=o.concat(Ux(t)));for(var l=$x(e),u=$x(t),f=0;f<o.length;++f){var p=o[f];if(!(p in mL||n&&n[p]||u&&p in u||l&&p in l)){var h=_L(t,p);try{yL(e,p,h)}catch{}}}}return e}function ho(e){return typeof e=="function"}function Hv(e){return typeof e=="object"&&"styledComponentId"in e}function ao(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ly(e,t){if(e.length===0)return"";for(var n=e[0],i=1;i<e.length;i++)n+=e[i];return n}function Fc(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Py(e,t,n){if(n===void 0&&(n=!1),!n&&!Fc(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var i=0;i<t.length;i++)e[i]=Py(e[i],t[i]);else if(Fc(t))for(var i in t)e[i]=Py(e[i],t[i]);return e}function Fv(e,t){Object.defineProperty(e,"toString",{value:t})}function gs(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var SL=(function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,i=0;i<t;i++)n+=this.groupSizes[i];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,l=o;t>=l;)if((l<<=1)<0)throw gs(16,"".concat(t));this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var u=o;u<l;u++)this.groupSizes[u]=0}for(var f=this.indexOfGroup(t+1),p=(u=0,n.length);u<p;u++)this.tag.insertRule(f,n[u])&&(this.groupSizes[t]++,f++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],i=this.indexOfGroup(t),o=i+n;this.groupSizes[t]=0;for(var l=i;l<o;l++)this.tag.deleteRule(i)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var i=this.groupSizes[t],o=this.indexOfGroup(t),l=o+i,u=o;u<l;u++)n+="".concat(this.tag.getRule(u)).concat(Bv);return n},e})(),Sf=new Map,jf=new Map,xf=1,Qd=function(e){if(Sf.has(e))return Sf.get(e);for(;jf.has(xf);)xf++;var t=xf++;return Sf.set(e,t),jf.set(t,e),t},xL=function(e,t){xf=t+1,Sf.set(e,t),jf.set(t,e)},wL="style[".concat(Na,"][").concat($C,'="').concat(Mh,'"]'),EL=new RegExp("^".concat(Na,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),TL=function(e,t,n){for(var i,o=n.split(","),l=0,u=o.length;l<u;l++)(i=o[l])&&e.registerName(t,i)},CL=function(e,t){for(var n,i=((n=t.textContent)!==null&&n!==void 0?n:"").split(Bv),o=[],l=0,u=i.length;l<u;l++){var f=i[l].trim();if(f){var p=f.match(EL);if(p){var h=0|parseInt(p[1],10),y=p[2];h!==0&&(xL(y,h),TL(e,y,p[3]),e.getTag().insertRules(h,o)),o.length=0}else o.push(f)}}},Bx=function(e){for(var t=document.querySelectorAll(wL),n=0,i=t.length;n<i;n++){var o=t[n];o&&o.getAttribute(Na)!==jC&&(CL(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function RL(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var YC=function(e){var t=document.head,n=e||t,i=document.createElement("style"),o=(function(f){var p=Array.from(f.querySelectorAll("style[".concat(Na,"]")));return p[p.length-1]})(n),l=o!==void 0?o.nextSibling:null;i.setAttribute(Na,jC),i.setAttribute($C,Mh);var u=RL();return u&&i.setAttribute("nonce",u),n.insertBefore(i,l),i},AL=(function(){function e(t){this.element=YC(t),this.element.appendChild(document.createTextNode("")),this.sheet=(function(n){if(n.sheet)return n.sheet;for(var i=document.styleSheets,o=0,l=i.length;o<l;o++){var u=i[o];if(u.ownerNode===n)return u}throw gs(17)})(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e})(),IL=(function(){function e(t){this.element=YC(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var i=document.createTextNode(n);return this.element.insertBefore(i,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e})(),DL=(function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e})(),Hx=Pf,OL={isServer:!Pf,useCSSOMInjection:!aL},$f=(function(){function e(t,n,i){t===void 0&&(t=Ma),n===void 0&&(n={});var o=this;this.options=Gt(Gt({},OL),t),this.gs=n,this.names=new Map(i),this.server=!!t.isServer,!this.server&&Pf&&Hx&&(Hx=!1,Bx(this)),Fv(this,function(){return(function(l){for(var u=l.getTag(),f=u.length,p="",h=function(v){var _=(function(O){return jf.get(O)})(v);if(_===void 0)return"continue";var b=l.names.get(_),x=u.getGroup(v);if(b===void 0||!b.size||x.length===0)return"continue";var I="".concat(Na,".g").concat(v,'[id="').concat(_,'"]'),C="";b!==void 0&&b.forEach(function(O){O.length>0&&(C+="".concat(O,","))}),p+="".concat(x).concat(I,'{content:"').concat(C,'"}').concat(Bv)},y=0;y<f;y++)h(y);return p})(o)})}return e.registerId=function(t){return Qd(t)},e.prototype.rehydrate=function(){!this.server&&Pf&&Bx(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Gt(Gt({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=(function(n){var i=n.useCSSOMInjection,o=n.target;return n.isServer?new DL(o):i?new AL(o):new IL(o)})(this.options),new SL(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Qd(t),this.names.has(t))this.names.get(t).add(n);else{var i=new Set;i.add(n),this.names.set(t,i)}},e.prototype.insertRules=function(t,n,i){this.registerName(t,n),this.getTag().insertRules(Qd(t),i)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Qd(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e})(),kL=/&/g,NL=/^\s*\/\/.*$/gm;function QC(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(i){return"".concat(t," ").concat(i)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=QC(n.children,t)),n})}function ML(e){var t,n,i,o=Ma,l=o.options,u=l===void 0?Ma:l,f=o.plugins,p=f===void 0?Lh:f,h=function(_,b,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):_},y=p.slice();y.push(function(_){_.type===Dh&&_.value.includes("&")&&(_.props[0]=_.props[0].replace(kL,n).replace(i,h))}),u.prefix&&y.push(sL),y.push(nL);var v=function(_,b,x,I){b===void 0&&(b=""),x===void 0&&(x=""),I===void 0&&(I="&"),t=I,n=b,i=new RegExp("\\".concat(n,"\\b"),"g");var C=_.replace(NL,""),O=eL(x||b?"".concat(x," ").concat(b," { ").concat(C," }"):C);u.namespace&&(O=QC(O,u.namespace));var M=[];return Lf(O,rL(y.concat(iL(function(R){return M.push(R)})))),M};return v.hash=p.length?p.reduce(function(_,b){return b.name||gs(15),Sa(_,b.name)},BC).toString():"",v}var LL=new $f,jy=ML(),KC=dr.createContext({shouldForwardProp:void 0,styleSheet:LL,stylis:jy});KC.Consumer;dr.createContext(void 0);function $y(){return E.useContext(KC)}var PL=(function(){function e(t,n){var i=this;this.inject=function(o,l){l===void 0&&(l=jy);var u=i.name+l.hash;o.hasNameForId(i.id,u)||o.insertRules(i.id,u,l(i.rules,u,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Fv(this,function(){throw gs(12,String(i.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=jy),this.name+t.hash},e})(),jL=function(e){return e>="A"&&e<="Z"};function Fx(e){for(var t="",n=0;n<e.length;n++){var i=e[n];if(n===1&&i==="-"&&e[0]==="-")return e;jL(i)?t+="-"+i.toLowerCase():t+=i}return t.startsWith("ms-")?"-"+t:t}var XC=function(e){return e==null||e===!1||e===""},ZC=function(e){var t,n,i=[];for(var o in e){var l=e[o];e.hasOwnProperty(o)&&!XC(l)&&(Array.isArray(l)&&l.isCss||ho(l)?i.push("".concat(Fx(o),":"),l,";"):Fc(l)?i.push.apply(i,Hc(Hc(["".concat(o," {")],ZC(l),!1),["}"],!1)):i.push("".concat(Fx(o),": ").concat((t=o,(n=l)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in oL||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function cs(e,t,n,i){if(XC(e))return[];if(Hv(e))return[".".concat(e.styledComponentId)];if(ho(e)){if(!ho(l=e)||l.prototype&&l.prototype.isReactComponent||!t)return[e];var o=e(t);return cs(o,t,n,i)}var l;return e instanceof PL?n?(e.inject(n,i),[e.getName(i)]):[e]:Fc(e)?ZC(e):Array.isArray(e)?Array.prototype.concat.apply(Lh,e.map(function(u){return cs(u,t,n,i)})):[e.toString()]}function JC(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ho(n)&&!Hv(n))return!1}return!0}var $L=HC(Mh),UL=(function(){function e(t,n,i){this.rules=t,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&JC(t),this.componentId=n,this.baseHash=Sa($L,n),this.baseStyle=i,$f.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,i){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=ao(o,this.staticRulesId);else{var l=Ly(cs(this.rules,t,n,i)),u=My(Sa(this.baseHash,l)>>>0);if(!n.hasNameForId(this.componentId,u)){var f=i(l,".".concat(u),void 0,this.componentId);n.insertRules(this.componentId,u,f)}o=ao(o,u),this.staticRulesId=u}else{for(var p=Sa(this.baseHash,i.hash),h="",y=0;y<this.rules.length;y++){var v=this.rules[y];if(typeof v=="string")h+=v;else if(v){var _=Ly(cs(v,t,n,i));p=Sa(p,_+y),h+=_}}if(h){var b=My(p>>>0);n.hasNameForId(this.componentId,b)||n.insertRules(this.componentId,b,i(h,".".concat(b),void 0,this.componentId)),o=ao(o,b)}}return o},e})(),La=dr.createContext(void 0);La.Consumer;function qv(){var e=E.useContext(La);if(!e)throw gs(18);return e}function zL(e){var t=dr.useContext(La),n=E.useMemo(function(){return(function(i,o){if(!i)throw gs(14);if(ho(i)){var l=i(o);return l}if(Array.isArray(i)||typeof i!="object")throw gs(8);return o?Gt(Gt({},o),i):i})(e.theme,t)},[e.theme,t]);return e.children?dr.createElement(La.Provider,{value:n},e.children):null}var kg={};function BL(e,t,n){var i=Hv(e),o=e,l=!Og(e),u=t.attrs,f=u===void 0?Lh:u,p=t.componentId,h=p===void 0?(function(D,N){var A=typeof D!="string"?"sc":Px(D);kg[A]=(kg[A]||0)+1;var P="".concat(A,"-").concat(FC(Mh+A+kg[A]));return N?"".concat(N,"-").concat(P):P})(t.displayName,t.parentComponentId):p,y=t.displayName,v=y===void 0?(function(D){return Og(D)?"styled.".concat(D):"Styled(".concat(fL(D),")")})(e):y,_=t.displayName&&t.componentId?"".concat(Px(t.displayName),"-").concat(t.componentId):t.componentId||h,b=i&&o.attrs?o.attrs.concat(f).filter(Boolean):f,x=t.shouldForwardProp;if(i&&o.shouldForwardProp){var I=o.shouldForwardProp;if(t.shouldForwardProp){var C=t.shouldForwardProp;x=function(D,N){return I(D,N)&&C(D,N)}}else x=I}var O=new UL(n,_,i?o.componentStyle:void 0);function M(D,N){return(function(A,P,F){var H=A.attrs,B=A.componentStyle,z=A.defaultProps,G=A.foldedComponentIds,V=A.styledComponentId,te=A.target,ue=dr.useContext(La),j=$y(),K=A.shouldForwardProp||j.shouldForwardProp,ne=UC(P,ue,z)||Ma,ae=(function(me,pe,Ie){for(var be,Oe=Gt(Gt({},pe),{className:void 0,theme:Ie}),Ue=0;Ue<me.length;Ue+=1){var _t=ho(be=me[Ue])?be(Oe):be;for(var gt in _t)Oe[gt]=gt==="className"?ao(Oe[gt],_t[gt]):gt==="style"?Gt(Gt({},Oe[gt]),_t[gt]):_t[gt]}return pe.className&&(Oe.className=ao(Oe.className,pe.className)),Oe})(H,P,ne),k=ae.as||te,X={};for(var le in ae)ae[le]===void 0||le[0]==="$"||le==="as"||le==="theme"&&ae.theme===ne||(le==="forwardedAs"?X.as=ae.forwardedAs:K&&!K(le,k)||(X[le]=ae[le]));var ie=(function(me,pe){var Ie=$y(),be=me.generateAndInjectStyles(pe,Ie.styleSheet,Ie.stylis);return be})(B,ae),de=ao(G,V);return ie&&(de+=" "+ie),ae.className&&(de+=" "+ae.className),X[Og(k)&&!zC.has(k)?"class":"className"]=de,F&&(X.ref=F),E.createElement(k,X)})(R,D,N)}M.displayName=v;var R=dr.forwardRef(M);return R.attrs=b,R.componentStyle=O,R.displayName=v,R.shouldForwardProp=x,R.foldedComponentIds=i?ao(o.foldedComponentIds,o.styledComponentId):"",R.styledComponentId=_,R.target=i?o.target:e,Object.defineProperty(R,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(D){this._foldedDefaultProps=i?(function(N){for(var A=[],P=1;P<arguments.length;P++)A[P-1]=arguments[P];for(var F=0,H=A;F<H.length;F++)Py(N,H[F],!0);return N})({},o.defaultProps,D):D}}),Fv(R,function(){return".".concat(R.styledComponentId)}),l&&WC(R,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),R}function qx(e,t){for(var n=[e[0]],i=0,o=t.length;i<o;i+=1)n.push(t[i],e[i+1]);return n}var Vx=function(e){return Object.assign(e,{isCss:!0})};function nn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(ho(e)||Fc(e))return Vx(cs(qx(Lh,Hc([e],t,!0))));var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?cs(i):Vx(cs(qx(i,t)))}function Uy(e,t,n){if(n===void 0&&(n=Ma),!t)throw gs(1,t);var i=function(o){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];return e(t,n,nn.apply(void 0,Hc([o],l,!1)))};return i.attrs=function(o){return Uy(e,t,Gt(Gt({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},i.withConfig=function(o){return Uy(e,t,Gt(Gt({},n),o))},i}var eR=function(e){return Uy(BL,e)},T=eR;zC.forEach(function(e){T[e]=eR(e)});var HL=(function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=JC(t),$f.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,i,o){var l=o(Ly(cs(this.rules,n,i,o)),""),u=this.componentId+t;i.insertRules(u,u,l)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,i,o){t>2&&$f.registerId(this.componentId+t),this.removeStyles(t,i),this.createStyles(t,n,i,o)},e})();function FL(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var i=nn.apply(void 0,Hc([e],t,!1)),o="sc-global-".concat(FC(JSON.stringify(i))),l=new HL(i,o),u=function(p){var h=$y(),y=dr.useContext(La),v=dr.useRef(h.styleSheet.allocateGSInstance(o)).current;return h.styleSheet.server&&f(v,p,h.styleSheet,y,h.stylis),dr.useLayoutEffect(function(){if(!h.styleSheet.server)return f(v,p,h.styleSheet,y,h.stylis),function(){return l.removeStyles(v,h.styleSheet)}},[v,p,h.styleSheet,y,h.stylis]),null};function f(p,h,y,v,_){if(l.isStatic)l.renderStyles(p,lL,y,_);else{var b=Gt(Gt({},h),{theme:UC(h,v,u.defaultProps)});l.renderStyles(p,b,y,_)}}return dr.memo(u)}const Ta=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__,ys=globalThis,Rc="10.11.0";function tR(){return Vv(ys),ys}function Vv(e){const t=e.__SENTRY__=e.__SENTRY__||{};return t.version=t.version||Rc,t[Rc]=t[Rc]||{}}function Gv(e,t,n=ys){const i=n.__SENTRY__=n.__SENTRY__||{},o=i[Rc]=i[Rc]||{};return o[e]||(o[e]=t())}const qL="Sentry Logger ",Gx={};function VL(e){if(!("console"in ys))return e();const t=ys.console,n={},i=Object.keys(Gx);i.forEach(o=>{const l=Gx[o];n[o]=t[o],t[o]=l});try{return e()}finally{i.forEach(o=>{t[o]=n[o]})}}function GL(){Yv().enabled=!0}function WL(){Yv().enabled=!1}function nR(){return Yv().enabled}function YL(...e){Wv("log",...e)}function QL(...e){Wv("warn",...e)}function KL(...e){Wv("error",...e)}function Wv(e,...t){Ta&&nR()&&VL(()=>{ys.console[e](`${qL}[${e}]:`,...t)})}function Yv(){return Ta?Gv("loggerSettings",()=>({enabled:!1})):{enabled:!1}}const wf={enable:GL,disable:WL,isEnabled:nR,log:YL,warn:QL,error:KL},XL=Object.prototype.toString;function ZL(e,t){return XL.call(e)===`[object ${t}]`}function JL(e){return ZL(e,"Object")}function eP(e){return!!(e?.then&&typeof e.then=="function")}function tP(e,t=0){return typeof e!="string"||t===0||e.length<=t?e:`${e.slice(0,t)}...`}function nP(e,t,n){try{Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0})}catch{Ta&&wf.log(`Failed to add non-enumerable property "${t}" to object`,e)}}function rP(){const e=ys;return e.crypto||e.msCrypto}function Ac(e=rP()){let t=()=>Math.random()*16;try{if(e?.randomUUID)return e.randomUUID().replace(/-/g,"");e?.getRandomValues&&(t=()=>{const n=new Uint8Array(1);return e.getRandomValues(n),n[0]})}catch{}return("10000000100040008000"+1e11).replace(/[018]/g,n=>(n^(t()&15)>>n/4).toString(16))}const rR=1e3;function iR(){return Date.now()/rR}function iP(){const{performance:e}=ys;if(!e?.now||!e.timeOrigin)return iR;const t=e.timeOrigin;return()=>(t+e.now())/rR}let Wx;function sP(){return(Wx??(Wx=iP()))()}function oP(e,t={}){if(t.user&&(!e.ipAddress&&t.user.ip_address&&(e.ipAddress=t.user.ip_address),!e.did&&!t.did&&(e.did=t.user.id||t.user.email||t.user.username)),e.timestamp=t.timestamp||sP(),t.abnormal_mechanism&&(e.abnormal_mechanism=t.abnormal_mechanism),t.ignoreDuration&&(e.ignoreDuration=t.ignoreDuration),t.sid&&(e.sid=t.sid.length===32?t.sid:Ac()),t.init!==void 0&&(e.init=t.init),!e.did&&t.did&&(e.did=`${t.did}`),typeof t.started=="number"&&(e.started=t.started),e.ignoreDuration)e.duration=void 0;else if(typeof t.duration=="number")e.duration=t.duration;else{const n=e.timestamp-e.started;e.duration=n>=0?n:0}t.release&&(e.release=t.release),t.environment&&(e.environment=t.environment),!e.ipAddress&&t.ipAddress&&(e.ipAddress=t.ipAddress),!e.userAgent&&t.userAgent&&(e.userAgent=t.userAgent),typeof t.errors=="number"&&(e.errors=t.errors),t.status&&(e.status=t.status)}function sR(e,t,n=2){if(!t||typeof t!="object"||n<=0)return t;if(e&&Object.keys(t).length===0)return e;const i={...e};for(const o in t)Object.prototype.hasOwnProperty.call(t,o)&&(i[o]=sR(i[o],t[o],n-1));return i}function Yx(){return Ac()}const zy="_sentrySpan";function Qx(e,t){t?nP(e,zy,t):delete e[zy]}function Kx(e){return e[zy]}const aP=100;class po{constructor(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._attachments=[],this._user={},this._tags={},this._extra={},this._contexts={},this._sdkProcessingMetadata={},this._propagationContext={traceId:Yx(),sampleRand:Math.random()}}clone(){const t=new po;return t._breadcrumbs=[...this._breadcrumbs],t._tags={...this._tags},t._extra={...this._extra},t._contexts={...this._contexts},this._contexts.flags&&(t._contexts.flags={values:[...this._contexts.flags.values]}),t._user=this._user,t._level=this._level,t._session=this._session,t._transactionName=this._transactionName,t._fingerprint=this._fingerprint,t._eventProcessors=[...this._eventProcessors],t._attachments=[...this._attachments],t._sdkProcessingMetadata={...this._sdkProcessingMetadata},t._propagationContext={...this._propagationContext},t._client=this._client,t._lastEventId=this._lastEventId,Qx(t,Kx(this)),t}setClient(t){this._client=t}setLastEventId(t){this._lastEventId=t}getClient(){return this._client}lastEventId(){return this._lastEventId}addScopeListener(t){this._scopeListeners.push(t)}addEventProcessor(t){return this._eventProcessors.push(t),this}setUser(t){return this._user=t||{email:void 0,id:void 0,ip_address:void 0,username:void 0},this._session&&oP(this._session,{user:t}),this._notifyScopeListeners(),this}getUser(){return this._user}setTags(t){return this._tags={...this._tags,...t},this._notifyScopeListeners(),this}setTag(t,n){return this._tags={...this._tags,[t]:n},this._notifyScopeListeners(),this}setExtras(t){return this._extra={...this._extra,...t},this._notifyScopeListeners(),this}setExtra(t,n){return this._extra={...this._extra,[t]:n},this._notifyScopeListeners(),this}setFingerprint(t){return this._fingerprint=t,this._notifyScopeListeners(),this}setLevel(t){return this._level=t,this._notifyScopeListeners(),this}setTransactionName(t){return this._transactionName=t,this._notifyScopeListeners(),this}setContext(t,n){return n===null?delete this._contexts[t]:this._contexts[t]=n,this._notifyScopeListeners(),this}setSession(t){return t?this._session=t:delete this._session,this._notifyScopeListeners(),this}getSession(){return this._session}update(t){if(!t)return this;const n=typeof t=="function"?t(this):t,i=n instanceof po?n.getScopeData():JL(n)?t:void 0,{tags:o,extra:l,user:u,contexts:f,level:p,fingerprint:h=[],propagationContext:y}=i||{};return this._tags={...this._tags,...o},this._extra={...this._extra,...l},this._contexts={...this._contexts,...f},u&&Object.keys(u).length&&(this._user=u),p&&(this._level=p),h.length&&(this._fingerprint=h),y&&(this._propagationContext=y),this}clear(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._session=void 0,Qx(this,void 0),this._attachments=[],this.setPropagationContext({traceId:Yx(),sampleRand:Math.random()}),this._notifyScopeListeners(),this}addBreadcrumb(t,n){const i=typeof n=="number"?n:aP;if(i<=0)return this;const o={timestamp:iR(),...t,message:t.message?tP(t.message,2048):t.message};return this._breadcrumbs.push(o),this._breadcrumbs.length>i&&(this._breadcrumbs=this._breadcrumbs.slice(-i),this._client?.recordDroppedEvent("buffer_overflow","log_item")),this._notifyScopeListeners(),this}getLastBreadcrumb(){return this._breadcrumbs[this._breadcrumbs.length-1]}clearBreadcrumbs(){return this._breadcrumbs=[],this._notifyScopeListeners(),this}addAttachment(t){return this._attachments.push(t),this}clearAttachments(){return this._attachments=[],this}getScopeData(){return{breadcrumbs:this._breadcrumbs,attachments:this._attachments,contexts:this._contexts,tags:this._tags,extra:this._extra,user:this._user,level:this._level,fingerprint:this._fingerprint||[],eventProcessors:this._eventProcessors,propagationContext:this._propagationContext,sdkProcessingMetadata:this._sdkProcessingMetadata,transactionName:this._transactionName,span:Kx(this)}}setSDKProcessingMetadata(t){return this._sdkProcessingMetadata=sR(this._sdkProcessingMetadata,t,2),this}setPropagationContext(t){return this._propagationContext=t,this}getPropagationContext(){return this._propagationContext}captureException(t,n){const i=n?.event_id||Ac();if(!this._client)return Ta&&wf.warn("No client configured on scope - will not capture exception!"),i;const o=new Error("Sentry syntheticException");return this._client.captureException(t,{originalException:t,syntheticException:o,...n,event_id:i},this),i}captureMessage(t,n,i){const o=i?.event_id||Ac();if(!this._client)return Ta&&wf.warn("No client configured on scope - will not capture message!"),o;const l=new Error(t);return this._client.captureMessage(t,n,{originalException:t,syntheticException:l,...i,event_id:o},this),o}captureEvent(t,n){const i=n?.event_id||Ac();return this._client?(this._client.captureEvent(t,{...n,event_id:i},this),i):(Ta&&wf.warn("No client configured on scope - will not capture event!"),i)}_notifyScopeListeners(){this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach(t=>{t(this)}),this._notifyingListeners=!1)}}function lP(){return Gv("defaultCurrentScope",()=>new po)}function cP(){return Gv("defaultIsolationScope",()=>new po)}class uP{constructor(t,n){let i;t?i=t:i=new po;let o;n?o=n:o=new po,this._stack=[{scope:i}],this._isolationScope=o}withScope(t){const n=this._pushScope();let i;try{i=t(n)}catch(o){throw this._popScope(),o}return eP(i)?i.then(o=>(this._popScope(),o),o=>{throw this._popScope(),o}):(this._popScope(),i)}getClient(){return this.getStackTop().client}getScope(){return this.getStackTop().scope}getIsolationScope(){return this._isolationScope}getStackTop(){return this._stack[this._stack.length-1]}_pushScope(){const t=this.getScope().clone();return this._stack.push({client:this.getClient(),scope:t}),t}_popScope(){return this._stack.length<=1?!1:!!this._stack.pop()}}function Pa(){const e=tR(),t=Vv(e);return t.stack=t.stack||new uP(lP(),cP())}function dP(e){return Pa().withScope(e)}function fP(e,t){const n=Pa();return n.withScope(()=>(n.getStackTop().scope=e,t(e)))}function Xx(e){return Pa().withScope(()=>e(Pa().getIsolationScope()))}function hP(){return{withIsolationScope:Xx,withScope:dP,withSetScope:fP,withSetIsolationScope:(e,t)=>Xx(t),getCurrentScope:()=>Pa().getScope(),getIsolationScope:()=>Pa().getIsolationScope()}}function pP(e){const t=Vv(e);return t.acs?t.acs:hP()}function oR(){const e=tR();return pP(e).getCurrentScope()}function Nr(e,t){return oR().captureException(e,void 0)}function Qv(e,t){const n=typeof t=="string"?t:void 0,i=typeof t!="string"?{captureContext:t}:void 0;return oR().captureMessage(e,n,i)}const mP=()=>{};var Zx={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he=function(e,t){if(!e)throw Ya(t)},Ya=function(e){return new Error("Firebase Database ("+aR.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lR=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let o=e.charCodeAt(i);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(e.charCodeAt(++i)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},gP=function(e){const t=[];let n=0,i=0;for(;n<e.length;){const o=e[n++];if(o<128)t[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=e[n++];t[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=e[n++],u=e[n++],f=e[n++],p=((o&7)<<18|(l&63)<<12|(u&63)<<6|f&63)-65536;t[i++]=String.fromCharCode(55296+(p>>10)),t[i++]=String.fromCharCode(56320+(p&1023))}else{const l=e[n++],u=e[n++];t[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|u&63)}}return t.join("")},Kv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<e.length;o+=3){const l=e[o],u=o+1<e.length,f=u?e[o+1]:0,p=o+2<e.length,h=p?e[o+2]:0,y=l>>2,v=(l&3)<<4|f>>4;let _=(f&15)<<2|h>>6,b=h&63;p||(b=64,u||(_=64)),i.push(n[y],n[v],n[_],n[b])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(lR(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):gP(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<e.length;){const l=n[e.charAt(o++)],f=o<e.length?n[e.charAt(o)]:0;++o;const h=o<e.length?n[e.charAt(o)]:64;++o;const v=o<e.length?n[e.charAt(o)]:64;if(++o,l==null||f==null||h==null||v==null)throw new yP;const _=l<<2|f>>4;if(i.push(_),h!==64){const b=f<<4&240|h>>2;if(i.push(b),v!==64){const x=h<<6&192|v;i.push(x)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class yP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cR=function(e){const t=lR(e);return Kv.encodeByteArray(t,!0)},Uf=function(e){return cR(e).replace(/\./g,"")},zf=function(e){try{return Kv.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vP(e){return uR(void 0,e)}function uR(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)!t.hasOwnProperty(n)||!_P(n)||(e[n]=uR(e[n],t[n]));return e}function _P(e){return e!=="__proto__"}/**
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
 */function bP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const SP=()=>bP().__FIREBASE_DEFAULTS__,xP=()=>{if(typeof process>"u"||typeof Zx>"u")return;const e=Zx.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},wP=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&zf(e[1]);return t&&JSON.parse(t)},Xv=()=>{try{return mP()||SP()||xP()||wP()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},dR=e=>Xv()?.emulatorHosts?.[e],EP=e=>{const t=dR(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),i]:[t.substring(0,n),i]},fR=()=>Xv()?.config,hR=e=>Xv()?.[`_${e}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,i))}}}/**
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
 */function Qa(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function pR(e){return(await fetch(e,{credentials:"include"})).ok}/**
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
 */function TP(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",o=e.iat||0,l=e.sub||e.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u={iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...e};return[Uf(JSON.stringify(n)),Uf(JSON.stringify(u)),""].join(".")}const Ic={};function CP(){const e={prod:[],emulator:[]};for(const t of Object.keys(Ic))Ic[t]?e.emulator.push(t):e.prod.push(t);return e}function RP(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}let Jx=!1;function mR(e,t){if(typeof window>"u"||typeof document>"u"||!Qa(window.location.host)||Ic[e]===t||Ic[e]||Jx)return;Ic[e]=t;function n(_){return`__firebase__banner__${_}`}const i="__firebase__banner",l=CP().prod.length>0;function u(){const _=document.getElementById(i);_&&_.remove()}function f(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function p(_,b){_.setAttribute("width","24"),_.setAttribute("id",b),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function h(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{Jx=!0,u()},_}function y(_,b){_.setAttribute("id",b),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function v(){const _=RP(i),b=n("text"),x=document.getElementById(b)||document.createElement("span"),I=n("learnmore"),C=document.getElementById(I)||document.createElement("a"),O=n("preprendIcon"),M=document.getElementById(O)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const R=_.element;f(R),y(C,I);const D=h();p(M,O),R.append(M,x,C,D),document.body.appendChild(R)}l?(x.innerText="Preview backend disconnected.",M.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",v):v()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Zv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fn())}function AP(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function IP(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function gR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function DP(){const e=fn();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function OP(){return aR.NODE_ADMIN===!0}function yR(){try{return typeof indexedDB=="object"}catch{return!1}}function vR(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{t(o.error?.message||"")}}catch(n){t(n)}})}function kP(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NP="FirebaseError";class xi extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name=NP,Object.setPrototypeOf(this,xi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ro.prototype.create)}}class Ro{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},o=`${this.service}/${t}`,l=this.errors[t],u=l?MP(l,i):"Error",f=`${this.serviceName}: ${u} (${o}).`;return new xi(o,f,i)}}function MP(e,t){return e.replace(LP,(n,i)=>{const o=t[i];return o!=null?String(o):`<${i}?>`})}const LP=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(e){return JSON.parse(e)}function Ut(e){return JSON.stringify(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R=function(e){let t={},n={},i={},o="";try{const l=e.split(".");t=qc(zf(l[0])||""),n=qc(zf(l[1])||""),o=l[2],i=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:i,signature:o}},PP=function(e){const t=_R(e),n=t.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},jP=function(e){const t=_R(e).claims;return typeof t=="object"&&t.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ja(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function By(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Bf(e,t,n){const i={};for(const o in e)Object.prototype.hasOwnProperty.call(e,o)&&(i[o]=t.call(n,e[o],o,e));return i}function mo(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const o of n){if(!i.includes(o))return!1;const l=e[o],u=t[o];if(ew(l)&&ew(u)){if(!mo(l,u))return!1}else if(l!==u)return!1}for(const o of i)if(!n.includes(o))return!1;return!0}function ew(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class $P{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,n){n||(n=0);const i=this.W_;if(typeof t=="string")for(let v=0;v<16;v++)i[v]=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),n+=4;else for(let v=0;v<16;v++)i[v]=t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3],n+=4;for(let v=16;v<80;v++){const _=i[v-3]^i[v-8]^i[v-14]^i[v-16];i[v]=(_<<1|_>>>31)&4294967295}let o=this.chain_[0],l=this.chain_[1],u=this.chain_[2],f=this.chain_[3],p=this.chain_[4],h,y;for(let v=0;v<80;v++){v<40?v<20?(h=f^l&(u^f),y=1518500249):(h=l^u^f,y=1859775393):v<60?(h=l&u|f&(l|u),y=2400959708):(h=l^u^f,y=3395469782);const _=(o<<5|o>>>27)+h+p+y+i[v]&4294967295;p=f,f=u,u=(l<<30|l>>>2)&4294967295,l=o,o=_}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(t,n){if(t==null)return;n===void 0&&(n=t.length);const i=n-this.blockSize;let o=0;const l=this.buf_;let u=this.inbuf_;for(;o<n;){if(u===0)for(;o<=i;)this.compress_(t,o),o+=this.blockSize;if(typeof t=="string"){for(;o<n;)if(l[u]=t.charCodeAt(o),++u,++o,u===this.blockSize){this.compress_(l),u=0;break}}else for(;o<n;)if(l[u]=t[o],++u,++o,u===this.blockSize){this.compress_(l),u=0;break}}this.inbuf_=u,this.total_+=n}digest(){const t=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let o=0;o<5;o++)for(let l=24;l>=0;l-=8)t[i]=this.chain_[o]>>l&255,++i;return t}}function UP(e,t){const n=new zP(e,t);return n.subscribe.bind(n)}class zP{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,i){let o;if(t===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");BP(t,["next","error","complete"])?o=t:o={next:t,error:n,complete:i},o.next===void 0&&(o.next=Ng),o.error===void 0&&(o.error=Ng),o.complete===void 0&&(o.complete=Ng);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function BP(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Ng(){}function Ph(e,t){return`${e} failed: ${t} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HP=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let o=e.charCodeAt(i);if(o>=55296&&o<=56319){const l=o-55296;i++,he(i<e.length,"Surrogate pair missing trail surrogate.");const u=e.charCodeAt(i)-56320;o=65536+(l<<10)+u}o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):o<65536?(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},jh=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};/**
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
 */class FP{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const i=new pu;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t?.identifier),i=t?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(VP(t))try{this.getOrInitializeService({instanceIdentifier:ro})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(t=ro){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ro){return this.instances.has(t)}getOptions(t=ro){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[l,u]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&u.resolve(o)}return o}onInit(t,n){const i=this.normalizeInstanceIdentifier(n),o=this.onInitCallbacks.get(i)??new Set;o.add(t),this.onInitCallbacks.set(i,o);const l=this.instances.get(i);return l&&t(l,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const i=this.onInitCallbacks.get(n);if(i)for(const o of i)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:qP(t),options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=ro){return this.component?this.component.multipleInstances?t:ro:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qP(e){return e===ro?void 0:e}function VP(e){return e.instantiationMode==="EAGER"}/**
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
 */class GP{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new FP(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ct||(ct={}));const WP={debug:ct.DEBUG,verbose:ct.VERBOSE,info:ct.INFO,warn:ct.WARN,error:ct.ERROR,silent:ct.SILENT},YP=ct.INFO,QP={[ct.DEBUG]:"log",[ct.VERBOSE]:"log",[ct.INFO]:"info",[ct.WARN]:"warn",[ct.ERROR]:"error"},KP=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),o=QP[t];if(o)console[o](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Jv{constructor(t){this.name=t,this._logLevel=YP,this._logHandler=KP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ct))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?WP[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ct.DEBUG,...t),this._logHandler(this,ct.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ct.VERBOSE,...t),this._logHandler(this,ct.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ct.INFO,...t),this._logHandler(this,ct.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ct.WARN,...t),this._logHandler(this,ct.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ct.ERROR,...t),this._logHandler(this,ct.ERROR,...t)}}const XP=(e,t)=>t.some(n=>e instanceof n);let tw,nw;function ZP(){return tw||(tw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function JP(){return nw||(nw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bR=new WeakMap,Hy=new WeakMap,SR=new WeakMap,Mg=new WeakMap,e_=new WeakMap;function e4(e){const t=new Promise((n,i)=>{const o=()=>{e.removeEventListener("success",l),e.removeEventListener("error",u)},l=()=>{n(pi(e.result)),o()},u=()=>{i(e.error),o()};e.addEventListener("success",l),e.addEventListener("error",u)});return t.then(n=>{n instanceof IDBCursor&&bR.set(n,e)}).catch(()=>{}),e_.set(t,e),t}function t4(e){if(Hy.has(e))return;const t=new Promise((n,i)=>{const o=()=>{e.removeEventListener("complete",l),e.removeEventListener("error",u),e.removeEventListener("abort",u)},l=()=>{n(),o()},u=()=>{i(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",l),e.addEventListener("error",u),e.addEventListener("abort",u)});Hy.set(e,t)}let Fy={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Hy.get(e);if(t==="objectStoreNames")return e.objectStoreNames||SR.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pi(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function n4(e){Fy=e(Fy)}function r4(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const i=e.call(Lg(this),t,...n);return SR.set(i,t.sort?t.sort():[t]),pi(i)}:JP().includes(e)?function(...t){return e.apply(Lg(this),t),pi(bR.get(this))}:function(...t){return pi(e.apply(Lg(this),t))}}function i4(e){return typeof e=="function"?r4(e):(e instanceof IDBTransaction&&t4(e),XP(e,ZP())?new Proxy(e,Fy):e)}function pi(e){if(e instanceof IDBRequest)return e4(e);if(Mg.has(e))return Mg.get(e);const t=i4(e);return t!==e&&(Mg.set(e,t),e_.set(t,e)),t}const Lg=e=>e_.get(e);function $h(e,t,{blocked:n,upgrade:i,blocking:o,terminated:l}={}){const u=indexedDB.open(e,t),f=pi(u);return i&&u.addEventListener("upgradeneeded",p=>{i(pi(u.result),p.oldVersion,p.newVersion,pi(u.transaction),p)}),n&&u.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),f.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",h=>o(h.oldVersion,h.newVersion,h))}).catch(()=>{}),f}function Pg(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",i=>t(i.oldVersion,i)),pi(n).then(()=>{})}const s4=["get","getKey","getAll","getAllKeys","count"],o4=["put","add","delete","clear"],jg=new Map;function rw(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(jg.get(t))return jg.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,o=o4.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(o||s4.includes(n)))return;const l=async function(u,...f){const p=this.transaction(u,o?"readwrite":"readonly");let h=p.store;return i&&(h=h.index(f.shift())),(await Promise.all([h[n](...f),o&&p.done]))[0]};return jg.set(t,l),l}n4(e=>({...e,get:(t,n,i)=>rw(t,n)||e.get(t,n,i),has:(t,n)=>!!rw(t,n)||e.has(t,n)}));/**
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
 */class a4{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(l4(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function l4(e){return e.getComponent()?.type==="VERSION"}const qy="@firebase/app",iw="0.14.2";/**
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
 */const yi=new Jv("@firebase/app"),c4="@firebase/app-compat",u4="@firebase/analytics-compat",d4="@firebase/analytics",f4="@firebase/app-check-compat",h4="@firebase/app-check",p4="@firebase/auth",m4="@firebase/auth-compat",g4="@firebase/database",y4="@firebase/data-connect",v4="@firebase/database-compat",_4="@firebase/functions",b4="@firebase/functions-compat",S4="@firebase/installations",x4="@firebase/installations-compat",w4="@firebase/messaging",E4="@firebase/messaging-compat",T4="@firebase/performance",C4="@firebase/performance-compat",R4="@firebase/remote-config",A4="@firebase/remote-config-compat",I4="@firebase/storage",D4="@firebase/storage-compat",O4="@firebase/firestore",k4="@firebase/ai",N4="@firebase/firestore-compat",M4="firebase",L4="12.2.0";/**
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
 */const Vy="[DEFAULT]",P4={[qy]:"fire-core",[c4]:"fire-core-compat",[d4]:"fire-analytics",[u4]:"fire-analytics-compat",[h4]:"fire-app-check",[f4]:"fire-app-check-compat",[p4]:"fire-auth",[m4]:"fire-auth-compat",[g4]:"fire-rtdb",[y4]:"fire-data-connect",[v4]:"fire-rtdb-compat",[_4]:"fire-fn",[b4]:"fire-fn-compat",[S4]:"fire-iid",[x4]:"fire-iid-compat",[w4]:"fire-fcm",[E4]:"fire-fcm-compat",[T4]:"fire-perf",[C4]:"fire-perf-compat",[R4]:"fire-rc",[A4]:"fire-rc-compat",[I4]:"fire-gcs",[D4]:"fire-gcs-compat",[O4]:"fire-fst",[N4]:"fire-fst-compat",[k4]:"fire-vertex","fire-js":"fire-js",[M4]:"fire-js-all"};/**
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
 */const Hf=new Map,j4=new Map,Gy=new Map;function sw(e,t){try{e.container.addComponent(t)}catch(n){yi.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Mr(e){const t=e.name;if(Gy.has(t))return yi.debug(`There were multiple attempts to register component ${t}.`),!1;Gy.set(t,e);for(const n of Hf.values())sw(n,e);for(const n of j4.values())sw(n,e);return!0}function Xa(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Nn(e){return e==null?!1:e.settings!==void 0}/**
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
 */const $4={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},us=new Ro("app","Firebase",$4);/**
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
 */class U4{constructor(t,n,i){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new _r("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw us.create("app-deleted",{appName:this._name})}}/**
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
 */const Za=L4;function xR(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const i={name:Vy,automaticDataCollectionEnabled:!0,...t},o=i.name;if(typeof o!="string"||!o)throw us.create("bad-app-name",{appName:String(o)});if(n||(n=fR()),!n)throw us.create("no-options");const l=Hf.get(o);if(l){if(mo(n,l.options)&&mo(i,l.config))return l;throw us.create("duplicate-app",{appName:o})}const u=new GP(o);for(const p of Gy.values())u.addComponent(p);const f=new U4(n,i,u);return Hf.set(o,f),f}function t_(e=Vy){const t=Hf.get(e);if(!t&&e===Vy&&fR())return xR();if(!t)throw us.create("no-app",{appName:e});return t}function Zn(e,t,n){let i=P4[e]??e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),l=t.match(/\s|\//);if(o||l){const u=[`Unable to register library "${i}" with version "${t}":`];o&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&l&&u.push("and"),l&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),yi.warn(u.join(" "));return}Mr(new _r(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const z4="firebase-heartbeat-database",B4=1,Vc="firebase-heartbeat-store";let $g=null;function wR(){return $g||($g=$h(z4,B4,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Vc)}catch(n){console.warn(n)}}}}).catch(e=>{throw us.create("idb-open",{originalErrorMessage:e.message})})),$g}async function H4(e){try{const n=(await wR()).transaction(Vc),i=await n.objectStore(Vc).get(ER(e));return await n.done,i}catch(t){if(t instanceof xi)yi.warn(t.message);else{const n=us.create("idb-get",{originalErrorMessage:t?.message});yi.warn(n.message)}}}async function ow(e,t){try{const i=(await wR()).transaction(Vc,"readwrite");await i.objectStore(Vc).put(t,ER(e)),await i.done}catch(n){if(n instanceof xi)yi.warn(n.message);else{const i=us.create("idb-set",{originalErrorMessage:n?.message});yi.warn(i.message)}}}function ER(e){return`${e.name}!${e.options.appId}`}/**
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
 */const F4=1024,q4=30;class V4{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new W4(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=aw();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats.length>q4){const o=Y4(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){yi.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=aw(),{heartbeatsToSend:n,unsentEntries:i}=G4(this._heartbeatsCache.heartbeats),o=Uf(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return yi.warn(t),""}}}function aw(){return new Date().toISOString().substring(0,10)}function G4(e,t=F4){const n=[];let i=e.slice();for(const o of e){const l=n.find(u=>u.agent===o.agent);if(l){if(l.dates.push(o.date),lw(n)>t){l.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),lw(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class W4{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yR()?vR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await H4(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const i=await this.read();return ow(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const i=await this.read();return ow(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function lw(e){return Uf(JSON.stringify({version:2,heartbeats:e})).length}function Y4(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let i=1;i<e.length;i++)e[i].date<n&&(n=e[i].date,t=i);return t}/**
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
 */function Q4(e){Mr(new _r("platform-logger",t=>new a4(t),"PRIVATE")),Mr(new _r("heartbeat",t=>new V4(t),"PRIVATE")),Zn(qy,iw,e),Zn(qy,iw,"esm2020"),Zn("fire-js","")}Q4("");const TR="@firebase/installations",n_="0.6.19";/**
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
 */const CR=1e4,RR=`w:${n_}`,AR="FIS_v2",K4="https://firebaseinstallations.googleapis.com/v1",X4=3600*1e3,Z4="installations",J4="Installations";/**
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
 */const ej={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},go=new Ro(Z4,J4,ej);function IR(e){return e instanceof xi&&e.code.includes("request-failed")}/**
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
 */function DR({projectId:e}){return`${K4}/projects/${e}/installations`}function OR(e){return{token:e.token,requestStatus:2,expiresIn:nj(e.expiresIn),creationTime:Date.now()}}async function kR(e,t){const i=(await t.json()).error;return go.create("request-failed",{requestName:e,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function NR({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function tj(e,{refreshToken:t}){const n=NR(e);return n.append("Authorization",rj(t)),n}async function MR(e){const t=await e();return t.status>=500&&t.status<600?e():t}function nj(e){return Number(e.replace("s","000"))}function rj(e){return`${AR} ${e}`}/**
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
 */async function ij({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const i=DR(e),o=NR(e),l=t.getImmediate({optional:!0});if(l){const h=await l.getHeartbeatsHeader();h&&o.append("x-firebase-client",h)}const u={fid:n,authVersion:AR,appId:e.appId,sdkVersion:RR},f={method:"POST",headers:o,body:JSON.stringify(u)},p=await MR(()=>fetch(i,f));if(p.ok){const h=await p.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:OR(h.authToken)}}else throw await kR("Create Installation",p)}/**
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
 */function LR(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function sj(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const oj=/^[cdef][\w-]{21}$/,Wy="";function aj(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=lj(e);return oj.test(n)?n:Wy}catch{return Wy}}function lj(e){return sj(e).substr(0,22)}/**
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
 */const PR=new Map;function jR(e,t){const n=Uh(e);$R(n,t),cj(n,t)}function $R(e,t){const n=PR.get(e);if(n)for(const i of n)i(t)}function cj(e,t){const n=uj();n&&n.postMessage({key:e,fid:t}),dj()}let lo=null;function uj(){return!lo&&"BroadcastChannel"in self&&(lo=new BroadcastChannel("[Firebase] FID Change"),lo.onmessage=e=>{$R(e.data.key,e.data.fid)}),lo}function dj(){PR.size===0&&lo&&(lo.close(),lo=null)}/**
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
 */const fj="firebase-installations-database",hj=1,yo="firebase-installations-store";let Ug=null;function r_(){return Ug||(Ug=$h(fj,hj,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(yo)}}})),Ug}async function Ff(e,t){const n=Uh(e),o=(await r_()).transaction(yo,"readwrite"),l=o.objectStore(yo),u=await l.get(n);return await l.put(t,n),await o.done,(!u||u.fid!==t.fid)&&jR(e,t.fid),t}async function UR(e){const t=Uh(e),i=(await r_()).transaction(yo,"readwrite");await i.objectStore(yo).delete(t),await i.done}async function zh(e,t){const n=Uh(e),o=(await r_()).transaction(yo,"readwrite"),l=o.objectStore(yo),u=await l.get(n),f=t(u);return f===void 0?await l.delete(n):await l.put(f,n),await o.done,f&&(!u||u.fid!==f.fid)&&jR(e,f.fid),f}/**
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
 */async function i_(e){let t;const n=await zh(e.appConfig,i=>{const o=pj(i),l=mj(e,o);return t=l.registrationPromise,l.installationEntry});return n.fid===Wy?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function pj(e){const t=e||{fid:aj(),registrationStatus:0};return zR(t)}function mj(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(go.create("app-offline"));return{installationEntry:t,registrationPromise:o}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=gj(e,n);return{installationEntry:n,registrationPromise:i}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:yj(e)}:{installationEntry:t}}async function gj(e,t){try{const n=await ij(e,t);return Ff(e.appConfig,n)}catch(n){throw IR(n)&&n.customData.serverCode===409?await UR(e.appConfig):await Ff(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function yj(e){let t=await cw(e.appConfig);for(;t.registrationStatus===1;)await LR(100),t=await cw(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await i_(e);return i||n}return t}function cw(e){return zh(e,t=>{if(!t)throw go.create("installation-not-found");return zR(t)})}function zR(e){return vj(e)?{fid:e.fid,registrationStatus:0}:e}function vj(e){return e.registrationStatus===1&&e.registrationTime+CR<Date.now()}/**
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
 */async function _j({appConfig:e,heartbeatServiceProvider:t},n){const i=bj(e,n),o=tj(e,n),l=t.getImmediate({optional:!0});if(l){const h=await l.getHeartbeatsHeader();h&&o.append("x-firebase-client",h)}const u={installation:{sdkVersion:RR,appId:e.appId}},f={method:"POST",headers:o,body:JSON.stringify(u)},p=await MR(()=>fetch(i,f));if(p.ok){const h=await p.json();return OR(h)}else throw await kR("Generate Auth Token",p)}function bj(e,{fid:t}){return`${DR(e)}/${t}/authTokens:generate`}/**
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
 */async function s_(e,t=!1){let n;const i=await zh(e.appConfig,l=>{if(!BR(l))throw go.create("not-registered");const u=l.authToken;if(!t&&wj(u))return l;if(u.requestStatus===1)return n=Sj(e,t),l;{if(!navigator.onLine)throw go.create("app-offline");const f=Tj(l);return n=xj(e,f),f}});return n?await n:i.authToken}async function Sj(e,t){let n=await uw(e.appConfig);for(;n.authToken.requestStatus===1;)await LR(100),n=await uw(e.appConfig);const i=n.authToken;return i.requestStatus===0?s_(e,t):i}function uw(e){return zh(e,t=>{if(!BR(t))throw go.create("not-registered");const n=t.authToken;return Cj(n)?{...t,authToken:{requestStatus:0}}:t})}async function xj(e,t){try{const n=await _j(e,t),i={...t,authToken:n};return await Ff(e.appConfig,i),n}catch(n){if(IR(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await UR(e.appConfig);else{const i={...t,authToken:{requestStatus:0}};await Ff(e.appConfig,i)}throw n}}function BR(e){return e!==void 0&&e.registrationStatus===2}function wj(e){return e.requestStatus===2&&!Ej(e)}function Ej(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+X4}function Tj(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}function Cj(e){return e.requestStatus===1&&e.requestTime+CR<Date.now()}/**
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
 */async function Rj(e){const t=e,{installationEntry:n,registrationPromise:i}=await i_(t);return i?i.catch(console.error):s_(t).catch(console.error),n.fid}/**
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
 */async function Aj(e,t=!1){const n=e;return await Ij(n),(await s_(n,t)).token}async function Ij(e){const{registrationPromise:t}=await i_(e);t&&await t}/**
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
 */function Dj(e){if(!e||!e.options)throw zg("App Configuration");if(!e.name)throw zg("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw zg(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function zg(e){return go.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR="installations",Oj="installations-internal",kj=e=>{const t=e.getProvider("app").getImmediate(),n=Dj(t),i=Xa(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},Nj=e=>{const t=e.getProvider("app").getImmediate(),n=Xa(t,HR).getImmediate();return{getId:()=>Rj(n),getToken:o=>Aj(n,o)}};function Mj(){Mr(new _r(HR,kj,"PUBLIC")),Mr(new _r(Oj,Nj,"PRIVATE"))}Mj();Zn(TR,n_);Zn(TR,n_,"esm2020");/**
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
 */const Lj="/firebase-messaging-sw.js",Pj="/firebase-cloud-messaging-push-scope",FR="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",jj="https://fcmregistrations.googleapis.com/v1",qR="google.c.a.c_id",$j="google.c.a.c_l",Uj="google.c.a.ts",zj="google.c.a.e",dw=1e4;var fw;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(fw||(fw={}));/**
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
 */var Gc;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(Gc||(Gc={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Bj(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(n),o=new Uint8Array(i.length);for(let l=0;l<i.length;++l)o[l]=i.charCodeAt(l);return o}/**
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
 */const Bg="fcm_token_details_db",Hj=5,hw="fcm_token_object_Store";async function Fj(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(l=>l.name).includes(Bg))return null;let t=null;return(await $h(Bg,Hj,{upgrade:async(i,o,l,u)=>{if(o<2||!i.objectStoreNames.contains(hw))return;const f=u.objectStore(hw),p=await f.index("fcmSenderId").get(e);if(await f.clear(),!!p){if(o===2){const h=p;if(!h.auth||!h.p256dh||!h.endpoint)return;t={token:h.fcmToken,createTime:h.createTime??Date.now(),subscriptionOptions:{auth:h.auth,p256dh:h.p256dh,endpoint:h.endpoint,swScope:h.swScope,vapidKey:typeof h.vapidKey=="string"?h.vapidKey:li(h.vapidKey)}}}else if(o===3){const h=p;t={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:li(h.auth),p256dh:li(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:li(h.vapidKey)}}}else if(o===4){const h=p;t={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:li(h.auth),p256dh:li(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:li(h.vapidKey)}}}}}})).close(),await Pg(Bg),await Pg("fcm_vapid_details_db"),await Pg("undefined"),qj(t)?t:null}function qj(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
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
 */const Vj="firebase-messaging-database",Gj=1,Wc="firebase-messaging-store";let Hg=null;function VR(){return Hg||(Hg=$h(Vj,Gj,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Wc)}}})),Hg}async function Wj(e){const t=GR(e),i=await(await VR()).transaction(Wc).objectStore(Wc).get(t);if(i)return i;{const o=await Fj(e.appConfig.senderId);if(o)return await o_(e,o),o}}async function o_(e,t){const n=GR(e),o=(await VR()).transaction(Wc,"readwrite");return await o.objectStore(Wc).put(t,n),await o.done,t}function GR({appConfig:e}){return e.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yj={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},an=new Ro("messaging","Messaging",Yj);/**
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
 */async function Qj(e,t){const n=await l_(e),i=WR(t),o={method:"POST",headers:n,body:JSON.stringify(i)};let l;try{l=await(await fetch(a_(e.appConfig),o)).json()}catch(u){throw an.create("token-subscribe-failed",{errorInfo:u?.toString()})}if(l.error){const u=l.error.message;throw an.create("token-subscribe-failed",{errorInfo:u})}if(!l.token)throw an.create("token-subscribe-no-token");return l.token}async function Kj(e,t){const n=await l_(e),i=WR(t.subscriptionOptions),o={method:"PATCH",headers:n,body:JSON.stringify(i)};let l;try{l=await(await fetch(`${a_(e.appConfig)}/${t.token}`,o)).json()}catch(u){throw an.create("token-update-failed",{errorInfo:u?.toString()})}if(l.error){const u=l.error.message;throw an.create("token-update-failed",{errorInfo:u})}if(!l.token)throw an.create("token-update-no-token");return l.token}async function Xj(e,t){const i={method:"DELETE",headers:await l_(e)};try{const l=await(await fetch(`${a_(e.appConfig)}/${t}`,i)).json();if(l.error){const u=l.error.message;throw an.create("token-unsubscribe-failed",{errorInfo:u})}}catch(o){throw an.create("token-unsubscribe-failed",{errorInfo:o?.toString()})}}function a_({projectId:e}){return`${jj}/projects/${e}/registrations`}async function l_({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function WR({p256dh:e,auth:t,endpoint:n,vapidKey:i}){const o={web:{endpoint:n,auth:t,p256dh:e}};return i!==FR&&(o.web.applicationPubKey=i),o}/**
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
 */const Zj=10080*60*1e3;async function Jj(e){const t=await t6(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:li(t.getKey("auth")),p256dh:li(t.getKey("p256dh"))},i=await Wj(e.firebaseDependencies);if(i){if(n6(i.subscriptionOptions,n))return Date.now()>=i.createTime+Zj?e6(e,{token:i.token,createTime:Date.now(),subscriptionOptions:n}):i.token;try{await Xj(e.firebaseDependencies,i.token)}catch(o){console.warn(o)}return pw(e.firebaseDependencies,n)}else return pw(e.firebaseDependencies,n)}async function e6(e,t){try{const n=await Kj(e.firebaseDependencies,t),i={...t,token:n,createTime:Date.now()};return await o_(e.firebaseDependencies,i),n}catch(n){throw n}}async function pw(e,t){const i={token:await Qj(e,t),createTime:Date.now(),subscriptionOptions:t};return await o_(e,i),i.token}async function t6(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Bj(t)})}function n6(e,t){const n=t.vapidKey===e.vapidKey,i=t.endpoint===e.endpoint,o=t.auth===e.auth,l=t.p256dh===e.p256dh;return n&&i&&o&&l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mw(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return r6(t,e),i6(t,e),s6(t,e),t}function r6(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const i=t.notification.body;i&&(e.notification.body=i);const o=t.notification.image;o&&(e.notification.image=o);const l=t.notification.icon;l&&(e.notification.icon=l)}function i6(e,t){t.data&&(e.data=t.data)}function s6(e,t){if(!t.fcmOptions&&!t.notification?.click_action)return;e.fcmOptions={};const n=t.fcmOptions?.link??t.notification?.click_action;n&&(e.fcmOptions.link=n);const i=t.fcmOptions?.analytics_label;i&&(e.fcmOptions.analyticsLabel=i)}/**
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
 */function o6(e){return typeof e=="object"&&!!e&&qR in e}/**
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
 */function a6(e){if(!e||!e.options)throw Fg("App Configuration Object");if(!e.name)throw Fg("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const i of t)if(!n[i])throw Fg(i);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Fg(e){return an.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l6{constructor(t,n,i){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=a6(t);this.firebaseDependencies={app:t,appConfig:o,installations:n,analyticsProvider:i}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c6(e){try{e.swRegistration=await navigator.serviceWorker.register(Lj,{scope:Pj}),e.swRegistration.update().catch(()=>{}),await u6(e.swRegistration)}catch(t){throw an.create("failed-service-worker-registration",{browserErrorMessage:t?.message})}}async function u6(e){return new Promise((t,n)=>{const i=setTimeout(()=>n(new Error(`Service worker not registered after ${dw} ms`)),dw),o=e.installing||e.waiting;e.active?(clearTimeout(i),t()):o?o.onstatechange=l=>{l.target?.state==="activated"&&(o.onstatechange=null,clearTimeout(i),t())}:(clearTimeout(i),n(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d6(e,t){if(!t&&!e.swRegistration&&await c6(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw an.create("invalid-sw-registration");e.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f6(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=FR)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YR(e,t){if(!navigator)throw an.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw an.create("permission-blocked");return await f6(e,t?.vapidKey),await d6(e,t?.serviceWorkerRegistration),Jj(e)}/**
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
 */async function h6(e,t,n){const i=p6(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(i,{message_id:n[qR],message_name:n[$j],message_time:n[Uj],message_device_time:Math.floor(Date.now()/1e3)})}function p6(e){switch(e){case Gc.NOTIFICATION_CLICKED:return"notification_open";case Gc.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m6(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===Gc.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(mw(n)):e.onMessageHandler.next(mw(n)));const i=n.data;o6(i)&&i[zj]==="1"&&await h6(e,n.messageType,i)}const gw="@firebase/messaging",yw="0.12.23";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g6=e=>{const t=new l6(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>m6(t,n)),t},y6=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:i=>YR(t,i)}};function v6(){Mr(new _r("messaging",g6,"PUBLIC")),Mr(new _r("messaging-internal",y6,"PRIVATE")),Zn(gw,yw),Zn(gw,yw,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _6(){try{await vR()}catch{return!1}return typeof window<"u"&&yR()&&kP()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b6(e,t){if(!navigator)throw an.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S6(e=t_()){return _6().then(t=>{if(!t)throw an.create("unsupported-browser")},t=>{throw an.create("indexed-db-unsupported")}),Xa(Wt(e),"messaging").getImmediate()}async function x6(e,t){return e=Wt(e),YR(e,t)}function w6(e,t){return e=Wt(e),b6(e,t)}v6();const Bh=e=>{try{return e()}catch(t){throw t}};var E6="firebase",T6="12.2.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zn(E6,T6,"app");const C6={apiKey:"AIzaSyAMtG6b23AqO2WbJ2ad8SKMXD1X4tfALtc",authDomain:"peloton-alerts.firebaseapp.com",projectId:"peloton-alerts",storageBucket:"peloton-alerts.appspot.com",messagingSenderId:"331185140393",appId:"1:331185140393:web:5f49c5c60b8b162914efb8",measurementId:"G-R2QRE36WEQ",databaseURL:"https://peloton-alerts-default-rtdb.firebaseio.com/"},Dc=Bh(()=>xR(C6)),xa=Bh(()=>S6(Dc)),R6="serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window,QR=async()=>{if(!("serviceWorker"in navigator))throw new Error("Service workers are not supported");return navigator.serviceWorker.register("/peloton-reservations/messaging-sw.js",{type:"classic"})};let qg=QR();const vw=async()=>{if(!xa)throw new Error("Messaging is not set up");if(!R6)throw new Error("Browser environment does not allow messaging");let e;try{e=await qg,console.log("Registered service worker successfully")}catch(t){console.error("Failed to register service worker. Trying again...",t),qg=QR(),e=await qg}return x6(xa,{vapidKey:"BO9hF0_u2BKehXtAWTxtm7RtvIUGIEA5GT_jGycvCfUEW0yZZkLvtRB1Y8R_5KKBEODsLufyDkcBXn9rx5dHY5g",serviceWorkerRegistration:e})};function Jt(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var A6=typeof Symbol=="function"&&Symbol.observable||"@@observable",_w=A6,Vg=()=>Math.random().toString(36).substring(7).split("").join("."),I6={INIT:`@@redux/INIT${Vg()}`,REPLACE:`@@redux/REPLACE${Vg()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Vg()}`},qf=I6;function vs(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function KR(e,t,n){if(typeof e!="function")throw new Error(Jt(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Jt(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Jt(1));return n(KR)(e,t)}let i=e,o=t,l=new Map,u=l,f=0,p=!1;function h(){u===l&&(u=new Map,l.forEach((C,O)=>{u.set(O,C)}))}function y(){if(p)throw new Error(Jt(3));return o}function v(C){if(typeof C!="function")throw new Error(Jt(4));if(p)throw new Error(Jt(5));let O=!0;h();const M=f++;return u.set(M,C),function(){if(O){if(p)throw new Error(Jt(6));O=!1,h(),u.delete(M),l=null}}}function _(C){if(!vs(C))throw new Error(Jt(7));if(typeof C.type>"u")throw new Error(Jt(8));if(typeof C.type!="string")throw new Error(Jt(17));if(p)throw new Error(Jt(9));try{p=!0,o=i(o,C)}finally{p=!1}return(l=u).forEach(M=>{M()}),C}function b(C){if(typeof C!="function")throw new Error(Jt(10));i=C,_({type:qf.REPLACE})}function x(){const C=v;return{subscribe(O){if(typeof O!="object"||O===null)throw new Error(Jt(11));function M(){const D=O;D.next&&D.next(y())}return M(),{unsubscribe:C(M)}},[_w](){return this}}}return _({type:qf.INIT}),{dispatch:_,subscribe:v,getState:y,replaceReducer:b,[_w]:x}}function D6(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:qf.INIT})>"u")throw new Error(Jt(12));if(typeof n(void 0,{type:qf.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Jt(13))})}function XR(e){const t=Object.keys(e),n={};for(let l=0;l<t.length;l++){const u=t[l];typeof e[u]=="function"&&(n[u]=e[u])}const i=Object.keys(n);let o;try{D6(n)}catch(l){o=l}return function(u={},f){if(o)throw o;let p=!1;const h={};for(let y=0;y<i.length;y++){const v=i[y],_=n[v],b=u[v],x=_(b,f);if(typeof x>"u")throw f&&f.type,new Error(Jt(14));h[v]=x,p=p||x!==b}return p=p||i.length!==Object.keys(u).length,p?h:u}}function Vf(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...i)=>t(n(...i)))}function O6(...e){return t=>(n,i)=>{const o=t(n,i);let l=()=>{throw new Error(Jt(15))};const u={getState:o.getState,dispatch:(p,...h)=>l(p,...h)},f=e.map(p=>p(u));return l=Vf(...f)(o.dispatch),{...o,dispatch:l}}}function ZR(e){return vs(e)&&"type"in e&&typeof e.type=="string"}var c_=Symbol.for("immer-nothing"),Oc=Symbol.for("immer-draftable"),Sn=Symbol.for("immer-state");function tn(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var $a=Object.getPrototypeOf;function Lr(e){return!!e&&!!e[Sn]}function br(e){return e?JR(e)||Array.isArray(e)||!!e[Oc]||!!e.constructor?.[Oc]||Ja(e)||mu(e):!1}var k6=Object.prototype.constructor.toString(),bw=new WeakMap;function JR(e){if(!e||typeof e!="object")return!1;const t=Object.getPrototypeOf(e);if(t===null||t===Object.prototype)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;if(n===Object)return!0;if(typeof n!="function")return!1;let i=bw.get(n);return i===void 0&&(i=Function.toString.call(n),bw.set(n,i)),i===k6}function N6(e){return Lr(e)||tn(15,e),e[Sn].base_}function Yc(e,t,n=!0){vo(e)===0?(n?Reflect.ownKeys(e):Object.keys(e)).forEach(o=>{t(o,e[o],e)}):e.forEach((i,o)=>t(o,i,e))}function vo(e){const t=e[Sn];return t?t.type_:Array.isArray(e)?1:Ja(e)?2:mu(e)?3:0}function Qc(e,t){return vo(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Gg(e,t){return vo(e)===2?e.get(t):e[t]}function eA(e,t,n){const i=vo(e);i===2?e.set(t,n):i===3?e.add(n):e[t]=n}function M6(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function Ja(e){return e instanceof Map}function mu(e){return e instanceof Set}function io(e){return e.copy_||e.base_}function Yy(e,t){if(Ja(e))return new Map(e);if(mu(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const n=JR(e);if(t===!0||t==="class_only"&&!n){const i=Object.getOwnPropertyDescriptors(e);delete i[Sn];let o=Reflect.ownKeys(i);for(let l=0;l<o.length;l++){const u=o[l],f=i[u];f.writable===!1&&(f.writable=!0,f.configurable=!0),(f.get||f.set)&&(i[u]={configurable:!0,writable:!0,enumerable:f.enumerable,value:e[u]})}return Object.create($a(e),i)}else{const i=$a(e);if(i!==null&&n)return{...e};const o=Object.create(i);return Object.assign(o,e)}}function u_(e,t=!1){return Hh(e)||Lr(e)||!br(e)||(vo(e)>1&&Object.defineProperties(e,{set:Kd,add:Kd,clear:Kd,delete:Kd}),Object.freeze(e),t&&Object.values(e).forEach(n=>u_(n,!0))),e}function L6(){tn(2)}var Kd={value:L6};function Hh(e){return e===null||typeof e!="object"?!0:Object.isFrozen(e)}var Qy={};function _o(e){const t=Qy[e];return t||tn(0,e),t}function P6(e,t){Qy[e]||(Qy[e]=t)}var Kc;function tA(){return Kc}function j6(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Sw(e,t){t&&(_o("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Ky(e){Xy(e),e.drafts_.forEach($6),e.drafts_=null}function Xy(e){e===Kc&&(Kc=e.parent_)}function xw(e){return Kc=j6(Kc,e)}function $6(e){const t=e[Sn];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function ww(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return e!==void 0&&e!==n?(n[Sn].modified_&&(Ky(t),tn(4)),br(e)&&(e=Gf(t,e),t.parent_||Wf(t,e)),t.patches_&&_o("Patches").generateReplacementPatches_(n[Sn].base_,e,t.patches_,t.inversePatches_)):e=Gf(t,n,[]),Ky(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==c_?e:void 0}function Gf(e,t,n){if(Hh(t))return t;const i=e.immer_.shouldUseStrictIteration(),o=t[Sn];if(!o)return Yc(t,(l,u)=>Ew(e,o,t,l,u,n),i),t;if(o.scope_!==e)return t;if(!o.modified_)return Wf(e,o.base_,!0),o.base_;if(!o.finalized_){o.finalized_=!0,o.scope_.unfinalizedDrafts_--;const l=o.copy_;let u=l,f=!1;o.type_===3&&(u=new Set(l),l.clear(),f=!0),Yc(u,(p,h)=>Ew(e,o,l,p,h,n,f),i),Wf(e,l,!1),n&&e.patches_&&_o("Patches").generatePatches_(o,n,e.patches_,e.inversePatches_)}return o.copy_}function Ew(e,t,n,i,o,l,u){if(o==null||typeof o!="object"&&!u)return;const f=Hh(o);if(!(f&&!u)){if(Lr(o)){const p=l&&t&&t.type_!==3&&!Qc(t.assigned_,i)?l.concat(i):void 0,h=Gf(e,o,p);if(eA(n,i,h),Lr(h))e.canAutoFreeze_=!1;else return}else u&&n.add(o);if(br(o)&&!f){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1||t&&t.base_&&t.base_[i]===o&&f)return;Gf(e,o),(!t||!t.scope_.parent_)&&typeof i!="symbol"&&(Ja(n)?n.has(i):Object.prototype.propertyIsEnumerable.call(n,i))&&Wf(e,o)}}}function Wf(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&u_(t,n)}function U6(e,t){const n=Array.isArray(e),i={type_:n?1:0,scope_:t?t.scope_:tA(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=i,l=d_;n&&(o=[i],l=Xc);const{revoke:u,proxy:f}=Proxy.revocable(o,l);return i.draft_=f,i.revoke_=u,f}var d_={get(e,t){if(t===Sn)return e;const n=io(e);if(!Qc(n,t))return z6(e,n,t);const i=n[t];return e.finalized_||!br(i)?i:i===Wg(e.base_,t)?(Yg(e),e.copy_[t]=Jy(i,e)):i},has(e,t){return t in io(e)},ownKeys(e){return Reflect.ownKeys(io(e))},set(e,t,n){const i=nA(io(e),t);if(i?.set)return i.set.call(e.draft_,n),!0;if(!e.modified_){const o=Wg(io(e),t),l=o?.[Sn];if(l&&l.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(M6(n,o)&&(n!==void 0||Qc(e.base_,t)))return!0;Yg(e),Zy(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty(e,t){return Wg(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,Yg(e),Zy(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=io(e),i=Reflect.getOwnPropertyDescriptor(n,t);return i&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:i.enumerable,value:n[t]}},defineProperty(){tn(11)},getPrototypeOf(e){return $a(e.base_)},setPrototypeOf(){tn(12)}},Xc={};Yc(d_,(e,t)=>{Xc[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});Xc.deleteProperty=function(e,t){return Xc.set.call(this,e,t,void 0)};Xc.set=function(e,t,n){return d_.set.call(this,e[0],t,n,e[0])};function Wg(e,t){const n=e[Sn];return(n?io(n):e)[t]}function z6(e,t,n){const i=nA(t,n);return i?"value"in i?i.value:i.get?.call(e.draft_):void 0}function nA(e,t){if(!(t in e))return;let n=$a(e);for(;n;){const i=Object.getOwnPropertyDescriptor(n,t);if(i)return i;n=$a(n)}}function Zy(e){e.modified_||(e.modified_=!0,e.parent_&&Zy(e.parent_))}function Yg(e){e.copy_||(e.copy_=Yy(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var B6=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!0,this.produce=(t,n,i)=>{if(typeof t=="function"&&typeof n!="function"){const l=n;n=t;const u=this;return function(p=l,...h){return u.produce(p,y=>n.call(this,y,...h))}}typeof n!="function"&&tn(6),i!==void 0&&typeof i!="function"&&tn(7);let o;if(br(t)){const l=xw(this),u=Jy(t,void 0);let f=!0;try{o=n(u),f=!1}finally{f?Ky(l):Xy(l)}return Sw(l,i),ww(o,l)}else if(!t||typeof t!="object"){if(o=n(t),o===void 0&&(o=t),o===c_&&(o=void 0),this.autoFreeze_&&u_(o,!0),i){const l=[],u=[];_o("Patches").generateReplacementPatches_(t,o,l,u),i(l,u)}return o}else tn(1,t)},this.produceWithPatches=(t,n)=>{if(typeof t=="function")return(u,...f)=>this.produceWithPatches(u,p=>t(p,...f));let i,o;return[this.produce(t,n,(u,f)=>{i=u,o=f}),i,o]},typeof e?.autoFreeze=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof e?.useStrictShallowCopy=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),typeof e?.useStrictIteration=="boolean"&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){br(e)||tn(8),Lr(e)&&(e=H6(e));const t=xw(this),n=Jy(e,void 0);return n[Sn].isManual_=!0,Xy(t),n}finishDraft(e,t){const n=e&&e[Sn];(!n||!n.isManual_)&&tn(9);const{scope_:i}=n;return Sw(i,t),ww(void 0,i)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const o=t[n];if(o.path.length===0&&o.op==="replace"){e=o.value;break}}n>-1&&(t=t.slice(n+1));const i=_o("Patches").applyPatches_;return Lr(e)?i(e,t):this.produce(e,o=>i(o,t))}};function Jy(e,t){const n=Ja(e)?_o("MapSet").proxyMap_(e,t):mu(e)?_o("MapSet").proxySet_(e,t):U6(e,t);return(t?t.scope_:tA()).drafts_.push(n),n}function H6(e){return Lr(e)||tn(10,e),rA(e)}function rA(e){if(!br(e)||Hh(e))return e;const t=e[Sn];let n,i=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=Yy(e,t.scope_.immer_.useStrictShallowCopy_),i=t.scope_.immer_.shouldUseStrictIteration()}else n=Yy(e,!0);return Yc(n,(o,l)=>{eA(n,o,rA(l))},i),t&&(t.finalized_=!1),n}function F6(){const t="replace",i="remove";function o(_,b,x,I){switch(_.type_){case 0:case 2:return u(_,b,x,I);case 1:return l(_,b,x,I);case 3:return f(_,b,x,I)}}function l(_,b,x,I){let{base_:C,assigned_:O}=_,M=_.copy_;M.length<C.length&&([C,M]=[M,C],[x,I]=[I,x]);for(let R=0;R<C.length;R++)if(O[R]&&M[R]!==C[R]){const D=b.concat([R]);x.push({op:t,path:D,value:v(M[R])}),I.push({op:t,path:D,value:v(C[R])})}for(let R=C.length;R<M.length;R++){const D=b.concat([R]);x.push({op:"add",path:D,value:v(M[R])})}for(let R=M.length-1;C.length<=R;--R){const D=b.concat([R]);I.push({op:i,path:D})}}function u(_,b,x,I){const{base_:C,copy_:O}=_;Yc(_.assigned_,(M,R)=>{const D=Gg(C,M),N=Gg(O,M),A=R?Qc(C,M)?t:"add":i;if(D===N&&A===t)return;const P=b.concat(M);x.push(A===i?{op:A,path:P}:{op:A,path:P,value:N}),I.push(A==="add"?{op:i,path:P}:A===i?{op:"add",path:P,value:v(D)}:{op:t,path:P,value:v(D)})})}function f(_,b,x,I){let{base_:C,copy_:O}=_,M=0;C.forEach(R=>{if(!O.has(R)){const D=b.concat([M]);x.push({op:i,path:D,value:R}),I.unshift({op:"add",path:D,value:R})}M++}),M=0,O.forEach(R=>{if(!C.has(R)){const D=b.concat([M]);x.push({op:"add",path:D,value:R}),I.unshift({op:i,path:D,value:R})}M++})}function p(_,b,x,I){x.push({op:t,path:[],value:b===c_?void 0:b}),I.push({op:t,path:[],value:_})}function h(_,b){return b.forEach(x=>{const{path:I,op:C}=x;let O=_;for(let N=0;N<I.length-1;N++){const A=vo(O);let P=I[N];typeof P!="string"&&typeof P!="number"&&(P=""+P),(A===0||A===1)&&(P==="__proto__"||P==="constructor")&&tn(19),typeof O=="function"&&P==="prototype"&&tn(19),O=Gg(O,P),typeof O!="object"&&tn(18,I.join("/"))}const M=vo(O),R=y(x.value),D=I[I.length-1];switch(C){case t:switch(M){case 2:return O.set(D,R);case 3:tn(16);default:return O[D]=R}case"add":switch(M){case 1:return D==="-"?O.push(R):O.splice(D,0,R);case 2:return O.set(D,R);case 3:return O.add(R);default:return O[D]=R}case i:switch(M){case 1:return O.splice(D,1);case 2:return O.delete(D);case 3:return O.delete(x.value);default:return delete O[D]}default:tn(17,C)}}),_}function y(_){if(!br(_))return _;if(Array.isArray(_))return _.map(y);if(Ja(_))return new Map(Array.from(_.entries()).map(([x,I])=>[x,y(I)]));if(mu(_))return new Set(Array.from(_).map(y));const b=Object.create($a(_));for(const x in _)b[x]=y(_[x]);return Qc(_,Oc)&&(b[Oc]=_[Oc]),b}function v(_){return Lr(_)?y(_):_}P6("Patches",{applyPatches_:h,generatePatches_:o,generateReplacementPatches_:p})}var Zc=new B6,gu=Zc.produce,iA=Zc.produceWithPatches.bind(Zc),Tw=Zc.applyPatches.bind(Zc);function q6(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(t)}function V6(e,t=`expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(t)}function G6(e,t="expected all items to be functions, instead received the following types: "){if(!e.every(n=>typeof n=="function")){const n=e.map(i=>typeof i=="function"?`function ${i.name||"unnamed"}()`:typeof i).join(", ");throw new TypeError(`${t}[${n}]`)}}var Cw=e=>Array.isArray(e)?e:[e];function W6(e){const t=Array.isArray(e[0])?e[0]:e;return G6(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}function Y6(e,t){const n=[],{length:i}=e;for(let o=0;o<i;o++)n.push(e[o].apply(null,t));return n}var Q6=class{constructor(e){this.value=e}deref(){return this.value}},K6=typeof WeakRef<"u"?WeakRef:Q6,X6=0,Rw=1;function Xd(){return{s:X6,v:void 0,o:null,p:null}}function Yf(e,t={}){let n=Xd();const{resultEqualityCheck:i}=t;let o,l=0;function u(){let f=n;const{length:p}=arguments;for(let v=0,_=p;v<_;v++){const b=arguments[v];if(typeof b=="function"||typeof b=="object"&&b!==null){let x=f.o;x===null&&(f.o=x=new WeakMap);const I=x.get(b);I===void 0?(f=Xd(),x.set(b,f)):f=I}else{let x=f.p;x===null&&(f.p=x=new Map);const I=x.get(b);I===void 0?(f=Xd(),x.set(b,f)):f=I}}const h=f;let y;if(f.s===Rw)y=f.v;else if(y=e.apply(null,arguments),l++,i){const v=o?.deref?.()??o;v!=null&&i(v,y)&&(y=v,l!==0&&l--),o=typeof y=="object"&&y!==null||typeof y=="function"?new K6(y):y}return h.s=Rw,h.v=y,y}return u.clearCache=()=>{n=Xd(),u.resetResultsCount()},u.resultsCount=()=>l,u.resetResultsCount=()=>{l=0},u}function Z6(e,...t){const n=typeof e=="function"?{memoize:e,memoizeOptions:t}:e,i=(...o)=>{let l=0,u=0,f,p={},h=o.pop();typeof h=="object"&&(p=h,h=o.pop()),q6(h,`createSelector expects an output function after the inputs, but received: [${typeof h}]`);const y={...n,...p},{memoize:v,memoizeOptions:_=[],argsMemoize:b=Yf,argsMemoizeOptions:x=[]}=y,I=Cw(_),C=Cw(x),O=W6(o),M=v(function(){return l++,h.apply(null,arguments)},...I),R=b(function(){u++;const N=Y6(O,arguments);return f=M.apply(null,N),f},...C);return Object.assign(R,{resultFunc:h,memoizedResultFunc:M,dependencies:O,dependencyRecomputations:()=>u,resetDependencyRecomputations:()=>{u=0},lastResult:()=>f,recomputations:()=>l,resetRecomputations:()=>{l=0},memoize:v,argsMemoize:b})};return Object.assign(i,{withTypes:()=>i}),i}var wi=Z6(Yf),J6=Object.assign((e,t=wi)=>{V6(e,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);const n=Object.keys(e),i=n.map(l=>e[l]);return t(i,(...l)=>l.reduce((u,f,p)=>(u[n[p]]=f,u),{}))},{withTypes:()=>J6});function sA(e){return({dispatch:n,getState:i})=>o=>l=>typeof l=="function"?l(n,i,e):o(l)}var e3=sA(),t3=sA,n3=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Vf:Vf.apply(null,arguments)},r3=e=>e&&typeof e.match=="function";function mr(e,t){function n(...i){if(t){let o=t(...i);if(!o)throw new Error(gr(0));return{type:e,payload:o.payload,..."meta"in o&&{meta:o.meta},..."error"in o&&{error:o.error}}}return{type:e,payload:i[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=i=>ZR(i)&&i.type===e,n}var oA=class Ec extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,Ec.prototype)}static get[Symbol.species](){return Ec}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new Ec(...t[0].concat(this)):new Ec(...t.concat(this))}};function Aw(e){return br(e)?gu(e,()=>{}):e}function Zd(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function i3(e){return typeof e=="boolean"}var s3=()=>function(t){const{thunk:n=!0,immutableCheck:i=!0,serializableCheck:o=!0,actionCreatorCheck:l=!0}=t??{};let u=new oA;return n&&(i3(n)?u.push(e3):u.push(t3(n.extraArgument))),u},Fh="RTK_autoBatch",oc=()=>e=>({payload:e,meta:{[Fh]:!0}}),Iw=e=>t=>{setTimeout(t,e)},o3=(e={type:"raf"})=>t=>(...n)=>{const i=t(...n);let o=!0,l=!1,u=!1;const f=new Set,p=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Iw(10):e.type==="callback"?e.queueNotification:Iw(e.timeout),h=()=>{u=!1,l&&(l=!1,f.forEach(y=>y()))};return Object.assign({},i,{subscribe(y){const v=()=>o&&y(),_=i.subscribe(v);return f.add(y),()=>{_(),f.delete(y)}},dispatch(y){try{return o=!y?.meta?.[Fh],l=!o,l&&(u||(u=!0,p(h))),i.dispatch(y)}finally{o=!0}}})},a3=e=>function(n){const{autoBatch:i=!0}=n??{};let o=new oA(e);return i&&o.push(o3(typeof i=="object"?i:void 0)),o};function l3(e){const t=s3(),{reducer:n=void 0,middleware:i,devTools:o=!0,preloadedState:l=void 0,enhancers:u=void 0}=e||{};let f;if(typeof n=="function")f=n;else if(vs(n))f=XR(n);else throw new Error(gr(1));let p;typeof i=="function"?p=i(t):p=t();let h=Vf;o&&(h=n3({trace:!1,...typeof o=="object"&&o}));const y=O6(...p),v=a3(y);let _=typeof u=="function"?u(v):v();const b=h(..._);return KR(f,l,b)}function aA(e){const t={},n=[];let i;const o={addCase(l,u){const f=typeof l=="string"?l:l.type;if(!f)throw new Error(gr(28));if(f in t)throw new Error(gr(29));return t[f]=u,o},addAsyncThunk(l,u){return u.pending&&(t[l.pending.type]=u.pending),u.rejected&&(t[l.rejected.type]=u.rejected),u.fulfilled&&(t[l.fulfilled.type]=u.fulfilled),u.settled&&n.push({matcher:l.settled,reducer:u.settled}),o},addMatcher(l,u){return n.push({matcher:l,reducer:u}),o},addDefaultCase(l){return i=l,o}};return e(o),[t,n,i]}function c3(e){return typeof e=="function"}function u3(e,t){let[n,i,o]=aA(t),l;if(c3(e))l=()=>Aw(e());else{const f=Aw(e);l=()=>f}function u(f=l(),p){let h=[n[p.type],...i.filter(({matcher:y})=>y(p)).map(({reducer:y})=>y)];return h.filter(y=>!!y).length===0&&(h=[o]),h.reduce((y,v)=>{if(v)if(Lr(y)){const b=v(y,p);return b===void 0?y:b}else{if(br(y))return gu(y,_=>v(_,p));{const _=v(y,p);if(_===void 0){if(y===null)return y;throw Error("A case reducer on a non-draftable value must not return undefined")}return _}}return y},f)}return u.getInitialState=l,u}var lA=(e,t)=>r3(e)?e.match(t):e(t);function vi(...e){return t=>e.some(n=>lA(n,t))}function kc(...e){return t=>e.every(n=>lA(n,t))}function qh(e,t){if(!e||!e.meta)return!1;const n=typeof e.meta.requestId=="string",i=t.indexOf(e.meta.requestStatus)>-1;return n&&i}function yu(e){return typeof e[0]=="function"&&"pending"in e[0]&&"fulfilled"in e[0]&&"rejected"in e[0]}function f_(...e){return e.length===0?t=>qh(t,["pending"]):yu(e)?vi(...e.map(t=>t.pending)):f_()(e[0])}function Ua(...e){return e.length===0?t=>qh(t,["rejected"]):yu(e)?vi(...e.map(t=>t.rejected)):Ua()(e[0])}function Vh(...e){const t=n=>n&&n.meta&&n.meta.rejectedWithValue;return e.length===0?kc(Ua(...e),t):yu(e)?kc(Ua(...e),t):Vh()(e[0])}function _s(...e){return e.length===0?t=>qh(t,["fulfilled"]):yu(e)?vi(...e.map(t=>t.fulfilled)):_s()(e[0])}function ev(...e){return e.length===0?t=>qh(t,["pending","fulfilled","rejected"]):yu(e)?vi(...e.flatMap(t=>[t.pending,t.rejected,t.fulfilled])):ev()(e[0])}var d3="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",h_=(e=21)=>{let t="",n=e;for(;n--;)t+=d3[Math.random()*64|0];return t},f3=["name","message","stack","code"],Qg=class{constructor(e,t){this.payload=e,this.meta=t}_type},Dw=class{constructor(e,t){this.payload=e,this.meta=t}_type},h3=e=>{if(typeof e=="object"&&e!==null){const t={};for(const n of f3)typeof e[n]=="string"&&(t[n]=e[n]);return t}return{message:String(e)}},Ow="External signal was aborted",kw=(()=>{function e(t,n,i){const o=mr(t+"/fulfilled",(p,h,y,v)=>({payload:p,meta:{...v||{},arg:y,requestId:h,requestStatus:"fulfilled"}})),l=mr(t+"/pending",(p,h,y)=>({payload:void 0,meta:{...y||{},arg:h,requestId:p,requestStatus:"pending"}})),u=mr(t+"/rejected",(p,h,y,v,_)=>({payload:v,error:(i&&i.serializeError||h3)(p||"Rejected"),meta:{..._||{},arg:y,requestId:h,rejectedWithValue:!!v,requestStatus:"rejected",aborted:p?.name==="AbortError",condition:p?.name==="ConditionError"}}));function f(p,{signal:h}={}){return(y,v,_)=>{const b=i?.idGenerator?i.idGenerator(p):h_(),x=new AbortController;let I,C;function O(R){C=R,x.abort()}h&&(h.aborted?O(Ow):h.addEventListener("abort",()=>O(Ow),{once:!0}));const M=(async function(){let R;try{let N=i?.condition?.(p,{getState:v,extra:_});if(m3(N)&&(N=await N),N===!1||x.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const A=new Promise((P,F)=>{I=()=>{F({name:"AbortError",message:C||"Aborted"})},x.signal.addEventListener("abort",I)});y(l(b,p,i?.getPendingMeta?.({requestId:b,arg:p},{getState:v,extra:_}))),R=await Promise.race([A,Promise.resolve(n(p,{dispatch:y,getState:v,extra:_,requestId:b,signal:x.signal,abort:O,rejectWithValue:(P,F)=>new Qg(P,F),fulfillWithValue:(P,F)=>new Dw(P,F)})).then(P=>{if(P instanceof Qg)throw P;return P instanceof Dw?o(P.payload,b,p,P.meta):o(P,b,p)})])}catch(N){R=N instanceof Qg?u(null,b,p,N.payload,N.meta):u(N,b,p)}finally{I&&x.signal.removeEventListener("abort",I)}return i&&!i.dispatchConditionRejection&&u.match(R)&&R.meta.condition||y(R),R})();return Object.assign(M,{abort:O,requestId:b,arg:p,unwrap(){return M.then(p3)}})}}return Object.assign(f,{pending:l,rejected:u,fulfilled:o,settled:vi(u,o),typePrefix:t})}return e.withTypes=()=>e,e})();function p3(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function m3(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var g3=Symbol.for("rtk-slice-createasyncthunk");function y3(e,t){return`${e}/${t}`}function v3({creators:e}={}){const t=e?.asyncThunk?.[g3];return function(i){const{name:o,reducerPath:l=o}=i;if(!o)throw new Error(gr(11));const u=(typeof i.reducers=="function"?i.reducers(b3()):i.reducers)||{},f=Object.keys(u),p={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},h={addCase(R,D){const N=typeof R=="string"?R:R.type;if(!N)throw new Error(gr(12));if(N in p.sliceCaseReducersByType)throw new Error(gr(13));return p.sliceCaseReducersByType[N]=D,h},addMatcher(R,D){return p.sliceMatchers.push({matcher:R,reducer:D}),h},exposeAction(R,D){return p.actionCreators[R]=D,h},exposeCaseReducer(R,D){return p.sliceCaseReducersByName[R]=D,h}};f.forEach(R=>{const D=u[R],N={reducerName:R,type:y3(o,R),createNotation:typeof i.reducers=="function"};x3(D)?E3(N,D,h,t):S3(N,D,h)});function y(){const[R={},D=[],N=void 0]=typeof i.extraReducers=="function"?aA(i.extraReducers):[i.extraReducers],A={...R,...p.sliceCaseReducersByType};return u3(i.initialState,P=>{for(let F in A)P.addCase(F,A[F]);for(let F of p.sliceMatchers)P.addMatcher(F.matcher,F.reducer);for(let F of D)P.addMatcher(F.matcher,F.reducer);N&&P.addDefaultCase(N)})}const v=R=>R,_=new Map,b=new WeakMap;let x;function I(R,D){return x||(x=y()),x(R,D)}function C(){return x||(x=y()),x.getInitialState()}function O(R,D=!1){function N(P){let F=P[R];return typeof F>"u"&&D&&(F=Zd(b,N,C)),F}function A(P=v){const F=Zd(_,D,()=>new WeakMap);return Zd(F,P,()=>{const H={};for(const[B,z]of Object.entries(i.selectors??{}))H[B]=_3(z,P,()=>Zd(b,P,C),D);return H})}return{reducerPath:R,getSelectors:A,get selectors(){return A(N)},selectSlice:N}}const M={name:o,reducer:I,actions:p.actionCreators,caseReducers:p.sliceCaseReducersByName,getInitialState:C,...O(l),injectInto(R,{reducerPath:D,...N}={}){const A=D??l;return R.inject({reducerPath:A,reducer:I},N),{...M,...O(A,!0)}}};return M}}function _3(e,t,n,i){function o(l,...u){let f=t(l);return typeof f>"u"&&i&&(f=n()),e(f,...u)}return o.unwrapped=e,o}var Kn=v3();function b3(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function S3({type:e,reducerName:t,createNotation:n},i,o){let l,u;if("reducer"in i){if(n&&!w3(i))throw new Error(gr(17));l=i.reducer,u=i.prepare}else l=i;o.addCase(e,l).exposeCaseReducer(t,l).exposeAction(t,u?mr(e,u):mr(e))}function x3(e){return e._reducerDefinitionType==="asyncThunk"}function w3(e){return e._reducerDefinitionType==="reducerWithPrepare"}function E3({type:e,reducerName:t},n,i,o){if(!o)throw new Error(gr(18));const{payloadCreator:l,fulfilled:u,pending:f,rejected:p,settled:h,options:y}=n,v=o(e,l,y);i.exposeAction(t,v),u&&i.addCase(v.fulfilled,u),f&&i.addCase(v.pending,f),p&&i.addCase(v.rejected,p),h&&i.addMatcher(v.settled,h),i.exposeCaseReducer(t,{fulfilled:u||Jd,pending:f||Jd,rejected:p||Jd,settled:h||Jd})}function Jd(){}function gr(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const el=e=>e.session,vu=wi([el],e=>{if(e.state==="fulfilled")return e.data?.id}),Mn=iC,et=sC,_u=E.createContext({refreshToken:()=>{},deleteToken:()=>Promise.reject("Not implemented")});var Nw={};const Mw="@firebase/database",Lw="1.1.0";/**
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
 */let cA="";function T3(e){cA=e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C3{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,n){n==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),Ut(n))}get(t){const n=this.domStorage_.getItem(this.prefixedName_(t));return n==null?null:qc(n)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R3{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,n){n==null?delete this.cache_[t]:this.cache_[t]=n}get(t){return jr(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA=function(e){try{if(typeof window<"u"&&typeof window[e]<"u"){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new C3(t)}}catch{}return new R3},co=uA("localStorage"),A3=uA("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca=new Jv("@firebase/database"),I3=(function(){let e=1;return function(){return e++}})(),dA=function(e){const t=HP(e),n=new $P;n.update(t);const i=n.digest();return Kv.encodeByteArray(i)},bu=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?t+=bu.apply(null,i):typeof i=="object"?t+=Ut(i):t+=i,t+=" "}return t};let Nc=null,Pw=!0;const D3=function(e,t){he(!0,"Can't turn on custom loggers persistently."),Ca.logLevel=ct.VERBOSE,Nc=Ca.log.bind(Ca)},en=function(...e){if(Pw===!0&&(Pw=!1,Nc===null&&A3.get("logging_enabled")===!0&&D3()),Nc){const t=bu.apply(null,e);Nc(t)}},Su=function(e){return function(...t){en(e,...t)}},tv=function(...e){const t="FIREBASE INTERNAL ERROR: "+bu(...e);Ca.error(t)},_i=function(...e){const t=`FIREBASE FATAL ERROR: ${bu(...e)}`;throw Ca.error(t),new Error(t)},dn=function(...e){const t="FIREBASE WARNING: "+bu(...e);Ca.warn(t)},O3=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&dn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},p_=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},k3=function(e){if(document.readyState==="complete")e();else{let t=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},za="[MIN_NAME]",bo="[MAX_NAME]",Ao=function(e,t){if(e===t)return 0;if(e===za||t===bo)return-1;if(t===za||e===bo)return 1;{const n=jw(e),i=jw(t);return n!==null?i!==null?n-i===0?e.length-t.length:n-i:-1:i!==null?1:e<t?-1:1}},N3=function(e,t){return e===t?0:e<t?-1:1},ac=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Ut(t))},m_=function(e){if(typeof e!="object"||e===null)return Ut(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)i!==0&&(n+=","),n+=Ut(t[i]),n+=":",n+=m_(e[t[i]]);return n+="}",n},fA=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let o=0;o<n;o+=t)o+t>n?i.push(e.substring(o,n)):i.push(e.substring(o,o+t));return i};function rn(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const hA=function(e){he(!p_(e),"Invalid JSON number");const t=11,n=52,i=(1<<t-1)-1;let o,l,u,f,p;e===0?(l=0,u=0,o=1/e===-1/0?1:0):(o=e<0,e=Math.abs(e),e>=Math.pow(2,1-i)?(f=Math.min(Math.floor(Math.log(e)/Math.LN2),i),l=f+i,u=Math.round(e*Math.pow(2,n-f)-Math.pow(2,n))):(l=0,u=Math.round(e/Math.pow(2,1-i-n))));const h=[];for(p=n;p;p-=1)h.push(u%2?1:0),u=Math.floor(u/2);for(p=t;p;p-=1)h.push(l%2?1:0),l=Math.floor(l/2);h.push(o?1:0),h.reverse();const y=h.join("");let v="";for(p=0;p<64;p+=8){let _=parseInt(y.substr(p,8),2).toString(16);_.length===1&&(_="0"+_),v=v+_}return v.toLowerCase()},M3=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},L3=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function P3(e,t){let n="Unknown Error";e==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":e==="permission_denied"?n="Client doesn't have permission to access the desired data.":e==="unavailable"&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}const j3=new RegExp("^-?(0*)\\d{1,10}$"),$3=-2147483648,U3=2147483647,jw=function(e){if(j3.test(e)){const t=Number(e);if(t>=$3&&t<=U3)return t}return null},tl=function(e){try{e()}catch(t){setTimeout(()=>{const n=t.stack||"";throw dn("Exception was thrown by user callback.",n),t},Math.floor(0))}},z3=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Mc=function(e,t){const n=setTimeout(e,t);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class B3{constructor(t,n){this.appCheckProvider=n,this.appName=t.name,Nn(t)&&t.settings.appCheckToken&&(this.serverAppAppCheckToken=t.settings.appCheckToken),this.appCheck=n?.getImmediate({optional:!0}),this.appCheck||n?.get().then(i=>this.appCheck=i)}getToken(t){if(this.serverAppAppCheckToken){if(t)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(t):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(n,i):n(null)},0)})}addTokenChangeListener(t){this.appCheckProvider?.get().then(n=>n.addTokenListener(t))}notifyForInvalidToken(){dn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H3{constructor(t,n,i){this.appName_=t,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(o=>this.auth_=o)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(n=>n&&n.code==="auth/token-not-initialized"?(en("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(n,i):n(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(n=>n.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(n=>n.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',dn(t)}}class Ef{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}Ef.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_="5",pA="v",mA="s",gA="r",yA="f",vA=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,_A="ls",bA="p",nv="ac",SA="websocket",xA="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(t,n,i,o,l=!1,u="",f=!1,p=!1,h=null){this.secure=n,this.namespace=i,this.webSocketOnly=o,this.nodeAdmin=l,this.persistenceKey=u,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=p,this.emulatorOptions=h,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=co.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&co.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${n}`}}function F3(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function EA(e,t,n){he(typeof t=="string","typeof type must == string"),he(typeof n=="object","typeof params must == object");let i;if(t===SA)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===xA)i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);F3(e)&&(n.ns=e.namespace);const o=[];return rn(n,(l,u)=>{o.push(l+"="+u)}),i+o.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q3{constructor(){this.counters_={}}incrementCounter(t,n=1){jr(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=n}get(){return vP(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg={},Xg={};function y_(e){const t=e.toString();return Kg[t]||(Kg[t]=new q3),Kg[t]}function V3(e,t){const n=e.toString();return Xg[n]||(Xg[n]=t()),Xg[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G3{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,n){this.closeAfterResponse=t,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,n){for(this.pendingResponses[t]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<i.length;++o)i[o]&&tl(()=>{this.onMessage_(i[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w="start",W3="close",Y3="pLPCommand",Q3="pRTLPCB",TA="id",CA="pw",RA="ser",K3="cb",X3="seg",Z3="ts",J3="d",e$="dframe",AA=1870,IA=30,t$=AA-IA,n$=25e3,r$=3e4;class wa{constructor(t,n,i,o,l,u,f){this.connId=t,this.repoInfo=n,this.applicationId=i,this.appCheckToken=o,this.authToken=l,this.transportSessionId=u,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Su(t),this.stats_=y_(n),this.urlFn=p=>(this.appCheckToken&&(p[nv]=this.appCheckToken),EA(n,xA,p))}open(t,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new G3(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(r$)),k3(()=>{if(this.isClosed_)return;this.scriptTagHolder=new v_((...l)=>{const[u,f,p,h,y]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===$w)this.id=f,this.password=p;else if(u===W3)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...l)=>{const[u,f]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(u,f)},()=>{this.onClosed_()},this.urlFn);const i={};i[$w]="t",i[RA]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[K3]=this.scriptTagHolder.uniqueCallbackIdentifier),i[pA]=g_,this.transportSessionId&&(i[mA]=this.transportSessionId),this.lastSessionId&&(i[_A]=this.lastSessionId),this.applicationId&&(i[bA]=this.applicationId),this.appCheckToken&&(i[nv]=this.appCheckToken),typeof location<"u"&&location.hostname&&vA.test(location.hostname)&&(i[gA]=yA);const o=this.urlFn(i);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){wa.forceAllow_=!0}static forceDisallow(){wa.forceDisallow_=!0}static isAvailable(){return wa.forceAllow_?!0:!wa.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!M3()&&!L3()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const n=Ut(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=cR(n),o=fA(i,t$);for(let l=0;l<o.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[l]),this.curSegmentNum++}addDisconnectPingFrame(t,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[e$]="t",i[TA]=t,i[CA]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const n=Ut(t).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class v_{constructor(t,n,i,o){this.onDisconnect=i,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=I3(),window[Y3+this.uniqueCallbackIdentifier]=t,window[Q3+this.uniqueCallbackIdentifier]=n,this.myIFrame=v_.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(f){en("frame writing exception"),f.stack&&en(f.stack),en(f)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||en("No IE domain setting required")}catch{const i=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,n){for(this.myID=t,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[TA]=this.myID,t[CA]=this.myPW,t[RA]=this.currentSerial;let n=this.urlFn(t),i="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+IA+i.length<=AA;){const u=this.pendingSegs.shift();i=i+"&"+X3+o+"="+u.seg+"&"+Z3+o+"="+u.ts+"&"+J3+o+"="+u.d,o++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(t,n,i){this.pendingSegs.push({seg:t,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(t,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},o=setTimeout(i,Math.floor(n$)),l=()=>{clearTimeout(o),i()};this.addTag(t,l)}addTag(t,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=t,i.onload=i.onreadystatechange=function(){const o=i.readyState;(!o||o==="loaded"||o==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{en("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i$=16384,s$=45e3;let Qf=null;typeof MozWebSocket<"u"?Qf=MozWebSocket:typeof WebSocket<"u"&&(Qf=WebSocket);class ur{constructor(t,n,i,o,l,u,f){this.connId=t,this.applicationId=i,this.appCheckToken=o,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Su(this.connId),this.stats_=y_(n),this.connURL=ur.connectionURL_(n,u,f,o,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(t,n,i,o,l){const u={};return u[pA]=g_,typeof location<"u"&&location.hostname&&vA.test(location.hostname)&&(u[gA]=yA),n&&(u[mA]=n),i&&(u[_A]=i),o&&(u[nv]=o),l&&(u[bA]=l),EA(t,SA,u)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,co.set("previous_websocket_failure",!0);try{let i;OP(),this.mySock=new Qf(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const o=i.message||i.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const o=i.message||i.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){ur.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(t=!0)}return!t&&Qf!==null&&!ur.forceDisallow_}static previouslyFailed(){return co.isInMemoryStorage||co.get("previous_websocket_failure")===!0}markConnectionHealthy(){co.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=qc(n);this.onMessage(i)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(he(this.frames===null,"We already have a frame buffer"),t.length<=6){const n=Number(t);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const n=t.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(t){this.resetKeepAlive();const n=Ut(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=fA(n,i$);i.length>1&&this.sendString_(String(i.length));for(let o=0;o<i.length;o++)this.sendString_(i[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(s$))}sendString_(t){try{this.mySock.send(t)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ur.responsesRequiredToBeHealthy=2;ur.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{static get ALL_TRANSPORTS(){return[wa,ur]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(t){this.initTransports_(t)}initTransports_(t){const n=ur&&ur.isAvailable();let i=n&&!ur.previouslyFailed();if(t.webSocketOnly&&(n||dn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[ur];else{const o=this.transports_=[];for(const l of Jc.ALL_TRANSPORTS)l&&l.isAvailable()&&o.push(l);Jc.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Jc.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o$=6e4,a$=5e3,l$=10*1024,c$=100*1024,Zg="t",Uw="d",u$="s",zw="r",d$="e",Bw="o",Hw="a",Fw="n",qw="p",f$="h";class h${constructor(t,n,i,o,l,u,f,p,h,y){this.id=t,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=o,this.authToken_=l,this.onMessage_=u,this.onReady_=f,this.onDisconnect_=p,this.onKill_=h,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Su("c:"+this.id+":"),this.transportManager_=new Jc(n),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const o=t.healthyTimeout||0;o>0&&(this.healthyTimeout_=Mc(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>c$?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>l$?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return n=>{t===this.conn_?this.onConnectionLost_(n):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return n=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(n):t===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(t){const n={t:"d",d:t};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(Zg in t){const n=t[Zg];n===Hw?this.upgradeIfSecondaryHealthy_():n===zw?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Bw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const n=ac("t",t),i=ac("d",t);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:qw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Hw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Fw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const n=ac("t",t),i=ac("d",t);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const n=ac(Zg,t);if(Uw in t){const i=t[Uw];if(n===f$){const o={...i};this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(n===Fw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===u$?this.onConnectionShutdown_(i):n===zw?this.onReset_(i):n===d$?tv("Server Error: "+i):n===Bw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):tv("Unknown control packet command: "+n)}}onHandshake_(t){const n=t.ts,i=t.v,o=t.h;this.sessionId=t.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),g_!==i&&dn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Mc(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(o$))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,n){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Mc(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(a$))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:qw,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(co.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{put(t,n,i,o){}merge(t,n,i,o){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,n,i){}onDisconnectMerge(t,n,i){}onDisconnectCancel(t,n){}reportStats(t){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(t){this.allowedEvents_=t,this.listeners_={},he(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...n){if(Array.isArray(this.listeners_[t])){const i=[...this.listeners_[t]];for(let o=0;o<i.length;o++)i[o].callback.apply(i[o].context,n)}}on(t,n,i){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:n,context:i});const o=this.getInitialEvent(t);o&&n.apply(i,o)}off(t,n,i){this.validateEventType_(t);const o=this.listeners_[t]||[];for(let l=0;l<o.length;l++)if(o[l].callback===n&&(!i||i===o[l].context)){o.splice(l,1);return}}validateEventType_(t){he(this.allowedEvents_.find(n=>n===t),"Unknown event: "+t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf extends OA{static getInstance(){return new Kf}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Zv()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(t){return he(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw=32,Gw=768;class ut{constructor(t,n){if(n===void 0){this.pieces_=t.split("/");let i=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[i]=this.pieces_[o],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=n}toString(){let t="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(t+="/"+this.pieces_[n]);return t||"/"}}function Xe(){return new ut("")}function qe(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function bs(e){return e.pieces_.length-e.pieceNum_}function pt(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ut(e.pieces_,t)}function __(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function p$(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)e.pieces_[n]!==""&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function eu(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function kA(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ut(t,0)}function At(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof ut)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const i=t.split("/");for(let o=0;o<i.length;o++)i[o].length>0&&n.push(i[o])}return new ut(n,0)}function Ye(e){return e.pieceNum_>=e.pieces_.length}function un(e,t){const n=qe(e),i=qe(t);if(n===null)return t;if(n===i)return un(pt(e),pt(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function m$(e,t){const n=eu(e,0),i=eu(t,0);for(let o=0;o<n.length&&o<i.length;o++){const l=Ao(n[o],i[o]);if(l!==0)return l}return n.length===i.length?0:n.length<i.length?-1:1}function b_(e,t){if(bs(e)!==bs(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Xn(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(bs(e)>bs(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class g${constructor(t,n){this.errorPrefix_=n,this.parts_=eu(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=jh(this.parts_[i]);NA(this)}}function y$(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=jh(t),NA(e)}function v$(e){const t=e.parts_.pop();e.byteLength_-=jh(t),e.parts_.length>0&&(e.byteLength_-=1)}function NA(e){if(e.byteLength_>Gw)throw new Error(e.errorPrefix_+"has a key path longer than "+Gw+" bytes ("+e.byteLength_+").");if(e.parts_.length>Vw)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Vw+") or object contains a cycle "+so(e))}function so(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_ extends OA{static getInstance(){return new S_}constructor(){super(["visible"]);let t,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[t];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(t){return he(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=1e3,_$=300*1e3,Ww=30*1e3,b$=1.3,S$=3e4,x$="server_kill",Yw=3;class mi extends DA{constructor(t,n,i,o,l,u,f,p){if(super(),this.repoInfo_=t,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=o,this.onServerInfoUpdate_=l,this.authTokenProvider_=u,this.appCheckTokenProvider_=f,this.authOverride_=p,this.id=mi.nextPersistentConnectionId_++,this.log_=Su("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=lc,this.maxReconnectDelay_=_$,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");S_.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&Kf.getInstance().on("online",this.onOnline_,this)}sendRequest(t,n,i){const o=++this.requestNumber_,l={r:o,a:t,b:n};this.log_(Ut(l)),he(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),i&&(this.requestCBHash_[o]=i)}get(t){this.initConnection_();const n=new pu,o={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:u=>{const f=u.d;u.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),n.promise}listen(t,n,i,o){this.initConnection_();const l=t._queryIdentifier,u=t._path.toString();this.log_("Listen called for "+u+" "+l),this.listens.has(u)||this.listens.set(u,new Map),he(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),he(!this.listens.get(u).has(l),"listen() called twice for same path/queryId.");const f={onComplete:o,hashFn:n,query:t,tag:i};this.listens.get(u).set(l,f),this.connected_&&this.sendListen_(f)}sendGet_(t){const n=this.outstandingGets_[t];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(t){const n=t.query,i=n._path.toString(),o=n._queryIdentifier;this.log_("Listen on "+i+" for "+o);const l={p:i},u="q";t.tag&&(l.q=n._queryObject,l.t=t.tag),l.h=t.hashFn(),this.sendRequest(u,l,f=>{const p=f.d,h=f.s;mi.warnOnListenWarnings_(p,n),(this.listens.get(i)&&this.listens.get(i).get(o))===t&&(this.log_("listen response",f),h!=="ok"&&this.removeListen_(i,o),t.onComplete&&t.onComplete(h,p))})}static warnOnListenWarnings_(t,n){if(t&&typeof t=="object"&&jr(t,"w")){const i=ja(t,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const o='".indexOn": "'+n._queryParams.getIndex().toString()+'"',l=n._path.toString();dn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||jP(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ww)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,n=PP(t)?"auth":"gauth",i={cred:t};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,o=>{const l=o.s,u=o.d||"error";this.authToken_===t&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const n=t.s,i=t.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(t,n){const i=t._path.toString(),o=t._queryIdentifier;this.log_("Unlisten called for "+i+" "+o),he(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,o)&&this.connected_&&this.sendUnlisten_(i,o,t._queryObject,n)}sendUnlisten_(t,n,i,o){this.log_("Unlisten on "+t+" for "+n);const l={p:t},u="n";o&&(l.q=i,l.t=o),this.sendRequest(u,l)}onDisconnectPut(t,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,n,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:n,onComplete:i})}onDisconnectMerge(t,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,n,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:n,onComplete:i})}onDisconnectCancel(t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(t,n,i,o){const l={p:n,d:i};this.log_("onDisconnect "+t,l),this.sendRequest(t,l,u=>{o&&setTimeout(()=>{o(u.s,u.d)},Math.floor(0))})}put(t,n,i,o){this.putInternal("p",t,n,i,o)}merge(t,n,i,o){this.putInternal("m",t,n,i,o)}putInternal(t,n,i,o,l){this.initConnection_();const u={p:n,d:i};l!==void 0&&(u.h=l),this.outstandingPuts_.push({action:t,request:u,onComplete:o}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(t){const n=this.outstandingPuts_[t].action,i=this.outstandingPuts_[t].request,o=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(n,i,l=>{this.log_(n+" response",l),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(l.s,l.d)})}reportStats(t){if(this.connected_){const n={c:t};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const l=i.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+Ut(t));const n=t.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,n){this.log_("handleServerMessage",t,n),t==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):t==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):t==="c"?this.onListenRevoked_(n.p,n.q):t==="ac"?this.onAuthRevoked_(n.s,n.d):t==="apc"?this.onAppCheckRevoked_(n.s,n.d):t==="sd"?this.onSecurityDebugPacket_(n):tv("Unrecognized action received from server: "+Ut(t)+`
Are you using the latest client?`)}onReady_(t,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){he(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=lc,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=lc,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>S$&&(this.reconnectDelay_=lc),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-t);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*b$)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+mi.nextConnectionId_++,l=this.lastSessionId;let u=!1,f=null;const p=function(){f?f.close():(u=!0,i())},h=function(v){he(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(v)};this.realtime_={close:p,sendRequest:h};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[v,_]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);u?en("getToken() completed but was canceled"):(en("getToken() completed. Creating connection."),this.authToken_=v&&v.accessToken,this.appCheckToken_=_&&_.token,f=new h$(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,i,b=>{dn(b+" ("+this.repoInfo_.toString()+")"),this.interrupt(x$)},l))}catch(v){this.log_("Failed to get token: "+v),u||(this.repoInfo_.nodeAdmin&&dn(v),p())}}}interrupt(t){en("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){en("Resuming connection for reason: "+t),delete this.interruptReasons_[t],By(this.interruptReasons_)&&(this.reconnectDelay_=lc,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const n=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const n=this.outstandingPuts_[t];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,n){let i;n?i=n.map(l=>m_(l)).join("$"):i="default";const o=this.removeListen_(t,i);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(t,n){const i=new ut(t).toString();let o;if(this.listens.has(i)){const l=this.listens.get(i);o=l.get(n),l.delete(n),l.size===0&&this.listens.delete(i)}else o=void 0;return o}onAuthRevoked_(t,n){en("Auth token revoked: "+t+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Yw&&(this.reconnectDelay_=Ww,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,n){en("App check token revoked: "+t+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Yw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const n of t.values())this.sendListen_(n);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let n="js";t["sdk."+n+"."+cA.replace(/\./g,"-")]=1,Zv()?t["framework.cordova"]=1:gR()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=Kf.getInstance().currentlyOnline();return By(this.interruptReasons_)&&t}}mi.nextPersistentConnectionId_=0;mi.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Gh{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,n){const i=new Ve(za,t),o=new Ve(za,n);return this.compare(i,o)!==0}minPost(){return Ve.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ef;class MA extends Gh{static get __EMPTY_NODE(){return ef}static set __EMPTY_NODE(t){ef=t}compare(t,n){return Ao(t.name,n.name)}isDefinedOn(t){throw Ya("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,n){return!1}minPost(){return Ve.MIN}maxPost(){return new Ve(bo,ef)}makePost(t,n){return he(typeof t=="string","KeyIndex indexValue must always be a string."),new Ve(t,ef)}toString(){return".key"}}const Ra=new MA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(t,n,i,o,l=null){this.isReverse_=o,this.resultGenerator_=l,this.nodeStack_=[];let u=1;for(;!t.isEmpty();)if(t=t,u=n?i(t.key,n):1,o&&(u*=-1),u<0)this.isReverse_?t=t.left:t=t.right;else if(u===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(t.key,t.value):n={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class Vt{constructor(t,n,i,o,l){this.key=t,this.value=n,this.color=i??Vt.RED,this.left=o??bn.EMPTY_NODE,this.right=l??bn.EMPTY_NODE}copy(t,n,i,o,l){return new Vt(t??this.key,n??this.value,i??this.color,o??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,i){let o=this;const l=i(t,o.key);return l<0?o=o.copy(null,null,null,o.left.insert(t,n,i),null):l===0?o=o.copy(null,n,null,null,null):o=o.copy(null,null,null,null,o.right.insert(t,n,i)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return bn.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,n){let i,o;if(i=this,n(t,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(t,i.key)===0){if(i.right.isEmpty())return bn.EMPTY_NODE;o=i.right.min_(),i=i.copy(o.key,o.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,Vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,Vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}Vt.RED=!0;Vt.BLACK=!1;class w${copy(t,n,i,o,l){return this}insert(t,n,i){return new Vt(t,n,null)}remove(t,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class bn{constructor(t,n=bn.EMPTY_NODE){this.comparator_=t,this.root_=n}insert(t,n){return new bn(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,Vt.BLACK,null,null))}remove(t){return new bn(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,Vt.BLACK,null,null))}get(t){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(t,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(t){let n,i=this.root_,o=null;for(;!i.isEmpty();)if(n=this.comparator_(t,i.key),n===0){if(i.left.isEmpty())return o?o.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(o=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new tf(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,n){return new tf(this.root_,t,this.comparator_,!1,n)}getReverseIteratorFrom(t,n){return new tf(this.root_,t,this.comparator_,!0,n)}getReverseIterator(t){return new tf(this.root_,null,this.comparator_,!0,t)}}bn.EMPTY_NODE=new w$;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E$(e,t){return Ao(e.name,t.name)}function x_(e,t){return Ao(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rv;function T$(e){rv=e}const LA=function(e){return typeof e=="number"?"number:"+hA(e):"string:"+e},PA=function(e){if(e.isLeafNode()){const t=e.val();he(typeof t=="string"||typeof t=="number"||typeof t=="object"&&jr(t,".sv"),"Priority must be a string or number.")}else he(e===rv||e.isEmpty(),"priority of unexpected type.");he(e===rv||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qw;class Ft{static set __childrenNodeConstructor(t){Qw=t}static get __childrenNodeConstructor(){return Qw}constructor(t,n=Ft.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=n,this.lazyHash_=null,he(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),PA(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new Ft(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:Ft.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return Ye(t)?this:qe(t)===".priority"?this.priorityNode_:Ft.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,n){return null}updateImmediateChild(t,n){return t===".priority"?this.updatePriority(n):n.isEmpty()&&t!==".priority"?this:Ft.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}updateChild(t,n){const i=qe(t);return i===null?n:n.isEmpty()&&i!==".priority"?this:(he(i!==".priority"||bs(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Ft.__childrenNodeConstructor.EMPTY_NODE.updateChild(pt(t),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,n){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+LA(this.priorityNode_.val())+":");const n=typeof this.value_;t+=n+":",n==="number"?t+=hA(this.value_):t+=this.value_,this.lazyHash_=dA(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===Ft.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof Ft.__childrenNodeConstructor?-1:(he(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const n=typeof t.value_,i=typeof this.value_,o=Ft.VALUE_TYPE_ORDER.indexOf(n),l=Ft.VALUE_TYPE_ORDER.indexOf(i);return he(o>=0,"Unknown leaf type: "+n),he(l>=0,"Unknown leaf type: "+i),o===l?i==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:l-o}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const n=t;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ft.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jA,$A;function C$(e){jA=e}function R$(e){$A=e}class A$ extends Gh{compare(t,n){const i=t.node.getPriority(),o=n.node.getPriority(),l=i.compareTo(o);return l===0?Ao(t.name,n.name):l}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,n){return!t.getPriority().equals(n.getPriority())}minPost(){return Ve.MIN}maxPost(){return new Ve(bo,new Ft("[PRIORITY-POST]",$A))}makePost(t,n){const i=jA(t);return new Ve(n,new Ft("[PRIORITY-POST]",i))}toString(){return".priority"}}const It=new A$;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I$=Math.log(2);class D${constructor(t){const n=l=>parseInt(Math.log(l)/I$,10),i=l=>parseInt(Array(l+1).join("1"),2);this.count=n(t+1),this.current_=this.count-1;const o=i(this.count);this.bits_=t+1&o}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const Xf=function(e,t,n,i){e.sort(t);const o=function(p,h){const y=h-p;let v,_;if(y===0)return null;if(y===1)return v=e[p],_=n?n(v):v,new Vt(_,v.node,Vt.BLACK,null,null);{const b=parseInt(y/2,10)+p,x=o(p,b),I=o(b+1,h);return v=e[b],_=n?n(v):v,new Vt(_,v.node,Vt.BLACK,x,I)}},l=function(p){let h=null,y=null,v=e.length;const _=function(x,I){const C=v-x,O=v;v-=x;const M=o(C+1,O),R=e[C],D=n?n(R):R;b(new Vt(D,R.node,I,null,M))},b=function(x){h?(h.left=x,h=x):(y=x,h=x)};for(let x=0;x<p.count;++x){const I=p.nextBitIsOne(),C=Math.pow(2,p.count-(x+1));I?_(C,Vt.BLACK):(_(C,Vt.BLACK),_(C,Vt.RED))}return y},u=new D$(e.length),f=l(u);return new bn(i||t,f)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jg;const ga={};class di{static get Default(){return he(ga&&It,"ChildrenNode.ts has not been loaded"),Jg=Jg||new di({".priority":ga},{".priority":It}),Jg}constructor(t,n){this.indexes_=t,this.indexSet_=n}get(t){const n=ja(this.indexes_,t);if(!n)throw new Error("No index defined for "+t);return n instanceof bn?n:null}hasIndex(t){return jr(this.indexSet_,t.toString())}addIndex(t,n){he(t!==Ra,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let o=!1;const l=n.getIterator(Ve.Wrap);let u=l.getNext();for(;u;)o=o||t.isDefinedOn(u.node),i.push(u),u=l.getNext();let f;o?f=Xf(i,t.getCompare()):f=ga;const p=t.toString(),h={...this.indexSet_};h[p]=t;const y={...this.indexes_};return y[p]=f,new di(y,h)}addToIndexes(t,n){const i=Bf(this.indexes_,(o,l)=>{const u=ja(this.indexSet_,l);if(he(u,"Missing index implementation for "+l),o===ga)if(u.isDefinedOn(t.node)){const f=[],p=n.getIterator(Ve.Wrap);let h=p.getNext();for(;h;)h.name!==t.name&&f.push(h),h=p.getNext();return f.push(t),Xf(f,u.getCompare())}else return ga;else{const f=n.get(t.name);let p=o;return f&&(p=p.remove(new Ve(t.name,f))),p.insert(t,t.node)}});return new di(i,this.indexSet_)}removeFromIndexes(t,n){const i=Bf(this.indexes_,o=>{if(o===ga)return o;{const l=n.get(t.name);return l?o.remove(new Ve(t.name,l)):o}});return new di(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cc;class Ne{static get EMPTY_NODE(){return cc||(cc=new Ne(new bn(x_),null,di.Default))}constructor(t,n,i){this.children_=t,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&PA(this.priorityNode_),this.children_.isEmpty()&&he(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||cc}updatePriority(t){return this.children_.isEmpty()?this:new Ne(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const n=this.children_.get(t);return n===null?cc:n}}getChild(t){const n=qe(t);return n===null?this:this.getImmediateChild(n).getChild(pt(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,n){if(he(n,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(n);{const i=new Ve(t,n);let o,l;n.isEmpty()?(o=this.children_.remove(t),l=this.indexMap_.removeFromIndexes(i,this.children_)):(o=this.children_.insert(t,n),l=this.indexMap_.addToIndexes(i,this.children_));const u=o.isEmpty()?cc:this.priorityNode_;return new Ne(o,u,l)}}updateChild(t,n){const i=qe(t);if(i===null)return n;{he(qe(t)!==".priority"||bs(t)===1,".priority must be the last token in a path");const o=this.getImmediateChild(i).updateChild(pt(t),n);return this.updateImmediateChild(i,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const n={};let i=0,o=0,l=!0;if(this.forEachChild(It,(u,f)=>{n[u]=f.val(t),i++,l&&Ne.INTEGER_REGEXP_.test(u)?o=Math.max(o,Number(u)):l=!1}),!t&&l&&o<2*i){const u=[];for(const f in n)u[f]=n[f];return u}else return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+LA(this.getPriority().val())+":"),this.forEachChild(It,(n,i)=>{const o=i.hash();o!==""&&(t+=":"+n+":"+o)}),this.lazyHash_=t===""?"":dA(t)}return this.lazyHash_}getPredecessorChildName(t,n,i){const o=this.resolveIndex_(i);if(o){const l=o.getPredecessorKey(new Ve(t,n));return l?l.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const n=this.resolveIndex_(t);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(t){const n=this.getFirstChildName(t);return n?new Ve(n,this.children_.get(n)):null}getLastChildName(t){const n=this.resolveIndex_(t);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(t){const n=this.getLastChildName(t);return n?new Ve(n,this.children_.get(n)):null}forEachChild(t,n){const i=this.resolveIndex_(t);return i?i.inorderTraversal(o=>n(o.name,o.node)):this.children_.inorderTraversal(n)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(t,o=>o);{const o=this.children_.getIteratorFrom(t.name,Ve.Wrap);let l=o.peek();for(;l!=null&&n.compare(l,t)<0;)o.getNext(),l=o.peek();return o}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(t,o=>o);{const o=this.children_.getReverseIteratorFrom(t.name,Ve.Wrap);let l=o.peek();for(;l!=null&&n.compare(l,t)>0;)o.getNext(),l=o.peek();return o}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===xu?-1:0}withIndex(t){if(t===Ra||this.indexMap_.hasIndex(t))return this;{const n=this.indexMap_.addIndex(t,this.children_);return new Ne(this.children_,this.priorityNode_,n)}}isIndexed(t){return t===Ra||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const n=t;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(It),o=n.getIterator(It);let l=i.getNext(),u=o.getNext();for(;l&&u;){if(l.name!==u.name||!l.node.equals(u.node))return!1;l=i.getNext(),u=o.getNext()}return l===null&&u===null}else return!1;else return!1}}resolveIndex_(t){return t===Ra?null:this.indexMap_.get(t.toString())}}Ne.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class O$ extends Ne{constructor(){super(new bn(x_),Ne.EMPTY_NODE,di.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return Ne.EMPTY_NODE}isEmpty(){return!1}}const xu=new O$;Object.defineProperties(Ve,{MIN:{value:new Ve(za,Ne.EMPTY_NODE)},MAX:{value:new Ve(bo,xu)}});MA.__EMPTY_NODE=Ne.EMPTY_NODE;Ft.__childrenNodeConstructor=Ne;T$(xu);R$(xu);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k$=!0;function $t(e,t=null){if(e===null)return Ne.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(t=e[".priority"]),he(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){const n=e;return new Ft(n,$t(t))}if(!(e instanceof Array)&&k$){const n=[];let i=!1;if(rn(e,(u,f)=>{if(u.substring(0,1)!=="."){const p=$t(f);p.isEmpty()||(i=i||!p.getPriority().isEmpty(),n.push(new Ve(u,p)))}}),n.length===0)return Ne.EMPTY_NODE;const l=Xf(n,E$,u=>u.name,x_);if(i){const u=Xf(n,It.getCompare());return new Ne(l,$t(t),new di({".priority":u},{".priority":It}))}else return new Ne(l,$t(t),di.Default)}else{let n=Ne.EMPTY_NODE;return rn(e,(i,o)=>{if(jr(e,i)&&i.substring(0,1)!=="."){const l=$t(o);(l.isLeafNode()||!l.isEmpty())&&(n=n.updateImmediateChild(i,l))}}),n.updatePriority($t(t))}}C$($t);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N$ extends Gh{constructor(t){super(),this.indexPath_=t,he(!Ye(t)&&qe(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,n){const i=this.extractChild(t.node),o=this.extractChild(n.node),l=i.compareTo(o);return l===0?Ao(t.name,n.name):l}makePost(t,n){const i=$t(t),o=Ne.EMPTY_NODE.updateChild(this.indexPath_,i);return new Ve(n,o)}maxPost(){const t=Ne.EMPTY_NODE.updateChild(this.indexPath_,xu);return new Ve(bo,t)}toString(){return eu(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M$ extends Gh{compare(t,n){const i=t.node.compareTo(n.node);return i===0?Ao(t.name,n.name):i}isDefinedOn(t){return!0}indexedValueChanged(t,n){return!t.equals(n)}minPost(){return Ve.MIN}maxPost(){return Ve.MAX}makePost(t,n){const i=$t(t);return new Ve(n,i)}toString(){return".value"}}const L$=new M$;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UA(e){return{type:"value",snapshotNode:e}}function Ba(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function tu(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function nu(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function P$(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(t){this.index_=t}updateChild(t,n,i,o,l,u){he(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=t.getImmediateChild(n);return f.getChild(o).equals(i.getChild(o))&&f.isEmpty()===i.isEmpty()||(u!=null&&(i.isEmpty()?t.hasChild(n)?u.trackChildChange(tu(n,f)):he(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?u.trackChildChange(Ba(n,i)):u.trackChildChange(nu(n,i,f))),t.isLeafNode()&&i.isEmpty())?t:t.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(t,n,i){return i!=null&&(t.isLeafNode()||t.forEachChild(It,(o,l)=>{n.hasChild(o)||i.trackChildChange(tu(o,l))}),n.isLeafNode()||n.forEachChild(It,(o,l)=>{if(t.hasChild(o)){const u=t.getImmediateChild(o);u.equals(l)||i.trackChildChange(nu(o,l,u))}else i.trackChildChange(Ba(o,l))})),n.withIndex(this.index_)}updatePriority(t,n){return t.isEmpty()?Ne.EMPTY_NODE:t.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(t){this.indexedFilter_=new w_(t.getIndex()),this.index_=t.getIndex(),this.startPost_=ru.getStartPost_(t),this.endPost_=ru.getEndPost_(t),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),t)<=0:this.index_.compare(this.getStartPost(),t)<0,i=this.endIsInclusive_?this.index_.compare(t,this.getEndPost())<=0:this.index_.compare(t,this.getEndPost())<0;return n&&i}updateChild(t,n,i,o,l,u){return this.matches(new Ve(n,i))||(i=Ne.EMPTY_NODE),this.indexedFilter_.updateChild(t,n,i,o,l,u)}updateFullNode(t,n,i){n.isLeafNode()&&(n=Ne.EMPTY_NODE);let o=n.withIndex(this.index_);o=o.updatePriority(Ne.EMPTY_NODE);const l=this;return n.forEachChild(It,(u,f)=>{l.matches(new Ve(u,f))||(o=o.updateImmediateChild(u,Ne.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,o,i)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const n=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),n)}else return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const n=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),n)}else return t.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j${constructor(t){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new ru(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft(),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}updateChild(t,n,i,o,l,u){return this.rangedFilter_.matches(new Ve(n,i))||(i=Ne.EMPTY_NODE),t.getImmediateChild(n).equals(i)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,n,i,o,l,u):this.fullLimitUpdateChild_(t,n,i,l,u)}updateFullNode(t,n,i){let o;if(n.isLeafNode()||n.isEmpty())o=Ne.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){o=Ne.EMPTY_NODE.withIndex(this.index_);let l;this.reverse_?l=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):l=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;l.hasNext()&&u<this.limit_;){const f=l.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))o=o.updateImmediateChild(f.name,f.node),u++;else break;else continue}}else{o=n.withIndex(this.index_),o=o.updatePriority(Ne.EMPTY_NODE);let l;this.reverse_?l=o.getReverseIterator(this.index_):l=o.getIterator(this.index_);let u=0;for(;l.hasNext();){const f=l.getNext();u<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?u++:o=o.updateImmediateChild(f.name,Ne.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,o,i)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,n,i,o,l){let u;if(this.reverse_){const v=this.index_.getCompare();u=(_,b)=>v(b,_)}else u=this.index_.getCompare();const f=t;he(f.numChildren()===this.limit_,"");const p=new Ve(n,i),h=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),y=this.rangedFilter_.matches(p);if(f.hasChild(n)){const v=f.getImmediateChild(n);let _=o.getChildAfterChild(this.index_,h,this.reverse_);for(;_!=null&&(_.name===n||f.hasChild(_.name));)_=o.getChildAfterChild(this.index_,_,this.reverse_);const b=_==null?1:u(_,p);if(y&&!i.isEmpty()&&b>=0)return l?.trackChildChange(nu(n,i,v)),f.updateImmediateChild(n,i);{l?.trackChildChange(tu(n,v));const I=f.updateImmediateChild(n,Ne.EMPTY_NODE);return _!=null&&this.rangedFilter_.matches(_)?(l?.trackChildChange(Ba(_.name,_.node)),I.updateImmediateChild(_.name,_.node)):I}}else return i.isEmpty()?t:y&&u(h,p)>=0?(l!=null&&(l.trackChildChange(tu(h.name,h.node)),l.trackChildChange(Ba(n,i))),f.updateImmediateChild(n,i).updateImmediateChild(h.name,Ne.EMPTY_NODE)):t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=It}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return he(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return he(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:za}hasEnd(){return this.endSet_}getIndexEndValue(){return he(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return he(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:bo}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return he(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===It}copy(){const t=new E_;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function $$(e){return e.loadsAllData()?new w_(e.getIndex()):e.hasLimit()?new j$(e):new ru(e)}function Kw(e){const t={};if(e.isDefault())return t;let n;if(e.index_===It?n="$priority":e.index_===L$?n="$value":e.index_===Ra?n="$key":(he(e.index_ instanceof N$,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=Ut(n),e.startSet_){const i=e.startAfterSet_?"startAfter":"startAt";t[i]=Ut(e.indexStartValue_),e.startNameSet_&&(t[i]+=","+Ut(e.indexStartName_))}if(e.endSet_){const i=e.endBeforeSet_?"endBefore":"endAt";t[i]=Ut(e.indexEndValue_),e.endNameSet_&&(t[i]+=","+Ut(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Xw(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;n===""&&(e.isViewFromLeft()?n="l":n="r"),t.vf=n}return e.index_!==It&&(t.i=e.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf extends DA{reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,n){return n!==void 0?"tag$"+n:(he(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}constructor(t,n,i,o){super(),this.repoInfo_=t,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=o,this.log_=Su("p:rest:"),this.listens_={}}listen(t,n,i,o){const l=t._path.toString();this.log_("Listen called for "+l+" "+t._queryIdentifier);const u=Zf.getListenId_(t,i),f={};this.listens_[u]=f;const p=Kw(t._queryParams);this.restRequest_(l+".json",p,(h,y)=>{let v=y;if(h===404&&(v=null,h=null),h===null&&this.onDataUpdate_(l,v,!1,i),ja(this.listens_,u)===f){let _;h?h===401?_="permission_denied":_="rest_error:"+h:_="ok",o(_,null)}})}unlisten(t,n){const i=Zf.getListenId_(t,n);delete this.listens_[i]}get(t){const n=Kw(t._queryParams),i=t._path.toString(),o=new pu;return this.restRequest_(i+".json",n,(l,u)=>{let f=u;l===404&&(f=null,l=null),l===null?(this.onDataUpdate_(i,f,!1,null),o.resolve(f)):o.reject(new Error(f))}),o.promise}refreshAuthToken(t){}restRequest_(t,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,l])=>{o&&o.accessToken&&(n.auth=o.accessToken),l&&l.token&&(n.ac=l.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+Ka(n);this.log_("Sending REST request for "+u);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(i&&f.readyState===4){this.log_("REST Response for "+u+" received. status:",f.status,"response:",f.responseText);let p=null;if(f.status>=200&&f.status<300){try{p=qc(f.responseText)}catch{dn("Failed to parse JSON response for "+u+": "+f.responseText)}i(null,p)}else f.status!==401&&f.status!==404&&dn("Got unsuccessful REST response for "+u+" Status: "+f.status),i(f.status);i=null}},f.open("GET",u,!0),f.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U${constructor(){this.rootNode_=Ne.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,n){this.rootNode_=this.rootNode_.updateChild(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(){return{value:null,children:new Map}}function zA(e,t,n){if(Ye(t))e.value=n,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(t,n);else{const i=qe(t);e.children.has(i)||e.children.set(i,Jf());const o=e.children.get(i);t=pt(t),zA(o,t,n)}}function iv(e,t,n){e.value!==null?n(t,e.value):z$(e,(i,o)=>{const l=new ut(t.toString()+"/"+i);iv(o,l,n)})}function z$(e,t){e.children.forEach((n,i)=>{t(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B${constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),n={...t};return this.last_&&rn(this.last_,(i,o)=>{n[i]=n[i]-o}),this.last_=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw=10*1e3,H$=30*1e3,F$=300*1e3;class q${constructor(t,n){this.server_=n,this.statsToReport_={},this.statsListener_=new B$(t);const i=Zw+(H$-Zw)*Math.random();Mc(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const t=this.statsListener_.get(),n={};let i=!1;rn(t,(o,l)=>{l>0&&jr(this.statsToReport_,o)&&(n[o]=l,i=!0)}),i&&this.server_.reportStats(n),Mc(this.reportStats_.bind(this),Math.floor(Math.random()*2*F$))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fr;(function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(fr||(fr={}));function T_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function C_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function R_(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(t,n,i){this.path=t,this.affectedTree=n,this.revert=i,this.type=fr.ACK_USER_WRITE,this.source=T_()}operationForChild(t){if(Ye(this.path)){if(this.affectedTree.value!=null)return he(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ut(t));return new eh(Xe(),n,this.revert)}}else return he(qe(this.path)===t,"operationForChild called for unrelated child."),new eh(pt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(t,n){this.source=t,this.path=n,this.type=fr.LISTEN_COMPLETE}operationForChild(t){return Ye(this.path)?new iu(this.source,Xe()):new iu(this.source,pt(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class V${constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function G$(e,t,n,i){const o=[],l=[];return t.forEach(u=>{u.type==="child_changed"&&e.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&l.push(P$(u.childName,u.snapshotNode))}),uc(e,o,"child_removed",t,i,n),uc(e,o,"child_added",t,i,n),uc(e,o,"child_moved",l,i,n),uc(e,o,"child_changed",t,i,n),uc(e,o,"value",t,i,n),o}function uc(e,t,n,i,o,l){const u=i.filter(f=>f.type===n);u.sort((f,p)=>Y$(e,f,p)),u.forEach(f=>{const p=W$(e,f,l);o.forEach(h=>{h.respondsTo(f.type)&&t.push(h.createEvent(p,e.query_))})})}function W$(e,t,n){return t.type==="value"||t.type==="child_removed"||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function Y$(e,t,n){if(t.childName==null||n.childName==null)throw Ya("Should only compare child_ events.");const i=new Ve(t.childName,t.snapshotNode),o=new Ve(n.childName,n.snapshotNode);return e.index_.compare(i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wh(e,t){return{eventCache:e,serverCache:t}}function Lc(e,t,n,i){return Wh(new Ss(t,n,i),e.serverCache)}function BA(e,t,n,i){return Wh(e.eventCache,new Ss(t,n,i))}function th(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function xo(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ey;const Q$=()=>(ey||(ey=new bn(N3)),ey);class ht{static fromObject(t){let n=new ht(null);return rn(t,(i,o)=>{n=n.set(new ut(i),o)}),n}constructor(t,n=Q$()){this.value=t,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,n){if(this.value!=null&&n(this.value))return{path:Xe(),value:this.value};if(Ye(t))return null;{const i=qe(t),o=this.children.get(i);if(o!==null){const l=o.findRootMostMatchingPathAndValue(pt(t),n);return l!=null?{path:At(new ut(i),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(Ye(t))return this;{const n=qe(t),i=this.children.get(n);return i!==null?i.subtree(pt(t)):new ht(null)}}set(t,n){if(Ye(t))return new ht(n,this.children);{const i=qe(t),l=(this.children.get(i)||new ht(null)).set(pt(t),n),u=this.children.insert(i,l);return new ht(this.value,u)}}remove(t){if(Ye(t))return this.children.isEmpty()?new ht(null):new ht(null,this.children);{const n=qe(t),i=this.children.get(n);if(i){const o=i.remove(pt(t));let l;return o.isEmpty()?l=this.children.remove(n):l=this.children.insert(n,o),this.value===null&&l.isEmpty()?new ht(null):new ht(this.value,l)}else return this}}get(t){if(Ye(t))return this.value;{const n=qe(t),i=this.children.get(n);return i?i.get(pt(t)):null}}setTree(t,n){if(Ye(t))return n;{const i=qe(t),l=(this.children.get(i)||new ht(null)).setTree(pt(t),n);let u;return l.isEmpty()?u=this.children.remove(i):u=this.children.insert(i,l),new ht(this.value,u)}}fold(t){return this.fold_(Xe(),t)}fold_(t,n){const i={};return this.children.inorderTraversal((o,l)=>{i[o]=l.fold_(At(t,o),n)}),n(t,this.value,i)}findOnPath(t,n){return this.findOnPath_(t,Xe(),n)}findOnPath_(t,n,i){const o=this.value?i(n,this.value):!1;if(o)return o;if(Ye(t))return null;{const l=qe(t),u=this.children.get(l);return u?u.findOnPath_(pt(t),At(n,l),i):null}}foreachOnPath(t,n){return this.foreachOnPath_(t,Xe(),n)}foreachOnPath_(t,n,i){if(Ye(t))return this;{this.value&&i(n,this.value);const o=qe(t),l=this.children.get(o);return l?l.foreachOnPath_(pt(t),At(n,o),i):new ht(null)}}foreach(t){this.foreach_(Xe(),t)}foreach_(t,n){this.children.inorderTraversal((i,o)=>{o.foreach_(At(t,i),n)}),this.value&&n(t,this.value)}foreachChild(t){this.children.inorderTraversal((n,i)=>{i.value&&t(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(t){this.writeTree_=t}static empty(){return new yr(new ht(null))}}function Pc(e,t,n){if(Ye(t))return new yr(new ht(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(i!=null){const o=i.path;let l=i.value;const u=un(o,t);return l=l.updateChild(u,n),new yr(e.writeTree_.set(o,l))}else{const o=new ht(n),l=e.writeTree_.setTree(t,o);return new yr(l)}}}function sv(e,t,n){let i=e;return rn(n,(o,l)=>{i=Pc(i,At(t,o),l)}),i}function Jw(e,t){if(Ye(t))return yr.empty();{const n=e.writeTree_.setTree(t,new ht(null));return new yr(n)}}function ov(e,t){return Io(e,t)!=null}function Io(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return n!=null?e.writeTree_.get(n.path).getChild(un(n.path,t)):null}function eE(e){const t=[],n=e.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(It,(i,o)=>{t.push(new Ve(i,o))}):e.writeTree_.children.inorderTraversal((i,o)=>{o.value!=null&&t.push(new Ve(i,o.value))}),t}function ds(e,t){if(Ye(t))return e;{const n=Io(e,t);return n!=null?new yr(new ht(n)):new yr(e.writeTree_.subtree(t))}}function av(e){return e.writeTree_.isEmpty()}function Fa(e,t){return HA(Xe(),e.writeTree_,t)}function HA(e,t,n){if(t.value!=null)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal((o,l)=>{o===".priority"?(he(l.value!==null,"Priority writes must always be leaf nodes"),i=l.value):n=HA(At(e,o),l,n)}),!n.getChild(e).isEmpty()&&i!==null&&(n=n.updateChild(At(e,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(e,t){return GA(t,e)}function K$(e,t,n,i,o){he(i>e.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:o}),o&&(e.visibleWrites=Pc(e.visibleWrites,t,n)),e.lastWriteId=i}function X$(e,t,n,i){he(i>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:i,visible:!0}),e.visibleWrites=sv(e.visibleWrites,t,n),e.lastWriteId=i}function Z$(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}function J$(e,t){const n=e.allWrites.findIndex(f=>f.writeId===t);he(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let o=i.visible,l=!1,u=e.allWrites.length-1;for(;o&&u>=0;){const f=e.allWrites[u];f.visible&&(u>=n&&e5(f,i.path)?o=!1:Xn(i.path,f.path)&&(l=!0)),u--}if(o){if(l)return t5(e),!0;if(i.snap)e.visibleWrites=Jw(e.visibleWrites,i.path);else{const f=i.children;rn(f,p=>{e.visibleWrites=Jw(e.visibleWrites,At(i.path,p))})}return!0}else return!1}function e5(e,t){if(e.snap)return Xn(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Xn(At(e.path,n),t))return!0;return!1}function t5(e){e.visibleWrites=FA(e.allWrites,n5,Xe()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function n5(e){return e.visible}function FA(e,t,n){let i=yr.empty();for(let o=0;o<e.length;++o){const l=e[o];if(t(l)){const u=l.path;let f;if(l.snap)Xn(n,u)?(f=un(n,u),i=Pc(i,f,l.snap)):Xn(u,n)&&(f=un(u,n),i=Pc(i,Xe(),l.snap.getChild(f)));else if(l.children){if(Xn(n,u))f=un(n,u),i=sv(i,f,l.children);else if(Xn(u,n))if(f=un(u,n),Ye(f))i=sv(i,Xe(),l.children);else{const p=ja(l.children,qe(f));if(p){const h=p.getChild(pt(f));i=Pc(i,Xe(),h)}}}else throw Ya("WriteRecord should have .snap or .children")}}return i}function qA(e,t,n,i,o){if(!i&&!o){const l=Io(e.visibleWrites,t);if(l!=null)return l;{const u=ds(e.visibleWrites,t);if(av(u))return n;if(n==null&&!ov(u,Xe()))return null;{const f=n||Ne.EMPTY_NODE;return Fa(u,f)}}}else{const l=ds(e.visibleWrites,t);if(!o&&av(l))return n;if(!o&&n==null&&!ov(l,Xe()))return null;{const u=function(h){return(h.visible||o)&&(!i||!~i.indexOf(h.writeId))&&(Xn(h.path,t)||Xn(t,h.path))},f=FA(e.allWrites,u,t),p=n||Ne.EMPTY_NODE;return Fa(f,p)}}}function r5(e,t,n){let i=Ne.EMPTY_NODE;const o=Io(e.visibleWrites,t);if(o)return o.isLeafNode()||o.forEachChild(It,(l,u)=>{i=i.updateImmediateChild(l,u)}),i;if(n){const l=ds(e.visibleWrites,t);return n.forEachChild(It,(u,f)=>{const p=Fa(ds(l,new ut(u)),f);i=i.updateImmediateChild(u,p)}),eE(l).forEach(u=>{i=i.updateImmediateChild(u.name,u.node)}),i}else{const l=ds(e.visibleWrites,t);return eE(l).forEach(u=>{i=i.updateImmediateChild(u.name,u.node)}),i}}function i5(e,t,n,i,o){he(i||o,"Either existingEventSnap or existingServerSnap must exist");const l=At(t,n);if(ov(e.visibleWrites,l))return null;{const u=ds(e.visibleWrites,l);return av(u)?o.getChild(n):Fa(u,o.getChild(n))}}function s5(e,t,n,i){const o=At(t,n),l=Io(e.visibleWrites,o);if(l!=null)return l;if(i.isCompleteForChild(n)){const u=ds(e.visibleWrites,o);return Fa(u,i.getNode().getImmediateChild(n))}else return null}function o5(e,t){return Io(e.visibleWrites,t)}function a5(e,t,n,i,o,l,u){let f;const p=ds(e.visibleWrites,t),h=Io(p,Xe());if(h!=null)f=h;else if(n!=null)f=Fa(p,n);else return[];if(f=f.withIndex(u),!f.isEmpty()&&!f.isLeafNode()){const y=[],v=u.getCompare(),_=l?f.getReverseIteratorFrom(i,u):f.getIteratorFrom(i,u);let b=_.getNext();for(;b&&y.length<o;)v(b,i)!==0&&y.push(b),b=_.getNext();return y}else return[]}function l5(){return{visibleWrites:yr.empty(),allWrites:[],lastWriteId:-1}}function nh(e,t,n,i){return qA(e.writeTree,e.treePath,t,n,i)}function A_(e,t){return r5(e.writeTree,e.treePath,t)}function tE(e,t,n,i){return i5(e.writeTree,e.treePath,t,n,i)}function rh(e,t){return o5(e.writeTree,At(e.treePath,t))}function c5(e,t,n,i,o,l){return a5(e.writeTree,e.treePath,t,n,i,o,l)}function I_(e,t,n){return s5(e.writeTree,e.treePath,t,n)}function VA(e,t){return GA(At(e.treePath,t),e.writeTree)}function GA(e,t){return{treePath:e,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u5{constructor(){this.changeMap=new Map}trackChildChange(t){const n=t.type,i=t.childName;he(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),he(i!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(i);if(o){const l=o.type;if(n==="child_added"&&l==="child_removed")this.changeMap.set(i,nu(i,t.snapshotNode,o.snapshotNode));else if(n==="child_removed"&&l==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&l==="child_changed")this.changeMap.set(i,tu(i,o.oldSnap));else if(n==="child_changed"&&l==="child_added")this.changeMap.set(i,Ba(i,t.snapshotNode));else if(n==="child_changed"&&l==="child_changed")this.changeMap.set(i,nu(i,t.snapshotNode,o.oldSnap));else throw Ya("Illegal combination of changes: "+t+" occurred after "+o)}else this.changeMap.set(i,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d5{getCompleteChild(t){return null}getChildAfterChild(t,n,i){return null}}const WA=new d5;class D_{constructor(t,n,i=null){this.writes_=t,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(t){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(t))return n.getNode().getImmediateChild(t);{const i=this.optCompleteServerCache_!=null?new Ss(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return I_(this.writes_,t,i)}}getChildAfterChild(t,n,i){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:xo(this.viewCache_),l=c5(this.writes_,o,n,1,i,t);return l.length===0?null:l[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f5(e){return{filter:e}}function h5(e,t){he(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),he(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function p5(e,t,n,i,o){const l=new u5;let u,f;if(n.type===fr.OVERWRITE){const h=n;h.source.fromUser?u=lv(e,t,h.path,h.snap,i,o,l):(he(h.source.fromServer,"Unknown source."),f=h.source.tagged||t.serverCache.isFiltered()&&!Ye(h.path),u=ih(e,t,h.path,h.snap,i,o,f,l))}else if(n.type===fr.MERGE){const h=n;h.source.fromUser?u=g5(e,t,h.path,h.children,i,o,l):(he(h.source.fromServer,"Unknown source."),f=h.source.tagged||t.serverCache.isFiltered(),u=cv(e,t,h.path,h.children,i,o,f,l))}else if(n.type===fr.ACK_USER_WRITE){const h=n;h.revert?u=_5(e,t,h.path,i,o,l):u=y5(e,t,h.path,h.affectedTree,i,o,l)}else if(n.type===fr.LISTEN_COMPLETE)u=v5(e,t,n.path,i,l);else throw Ya("Unknown operation type: "+n.type);const p=l.getChanges();return m5(t,u,p),{viewCache:u,changes:p}}function m5(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const o=i.getNode().isLeafNode()||i.getNode().isEmpty(),l=th(e);(n.length>0||!e.eventCache.isFullyInitialized()||o&&!i.getNode().equals(l)||!i.getNode().getPriority().equals(l.getPriority()))&&n.push(UA(th(t)))}}function YA(e,t,n,i,o,l){const u=t.eventCache;if(rh(i,n)!=null)return t;{let f,p;if(Ye(n))if(he(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const h=xo(t),y=h instanceof Ne?h:Ne.EMPTY_NODE,v=A_(i,y);f=e.filter.updateFullNode(t.eventCache.getNode(),v,l)}else{const h=nh(i,xo(t));f=e.filter.updateFullNode(t.eventCache.getNode(),h,l)}else{const h=qe(n);if(h===".priority"){he(bs(n)===1,"Can't have a priority with additional path components");const y=u.getNode();p=t.serverCache.getNode();const v=tE(i,n,y,p);v!=null?f=e.filter.updatePriority(y,v):f=u.getNode()}else{const y=pt(n);let v;if(u.isCompleteForChild(h)){p=t.serverCache.getNode();const _=tE(i,n,u.getNode(),p);_!=null?v=u.getNode().getImmediateChild(h).updateChild(y,_):v=u.getNode().getImmediateChild(h)}else v=I_(i,h,t.serverCache);v!=null?f=e.filter.updateChild(u.getNode(),h,v,y,o,l):f=u.getNode()}}return Lc(t,f,u.isFullyInitialized()||Ye(n),e.filter.filtersNodes())}}function ih(e,t,n,i,o,l,u,f){const p=t.serverCache;let h;const y=u?e.filter:e.filter.getIndexedFilter();if(Ye(n))h=y.updateFullNode(p.getNode(),i,null);else if(y.filtersNodes()&&!p.isFiltered()){const b=p.getNode().updateChild(n,i);h=y.updateFullNode(p.getNode(),b,null)}else{const b=qe(n);if(!p.isCompleteForPath(n)&&bs(n)>1)return t;const x=pt(n),C=p.getNode().getImmediateChild(b).updateChild(x,i);b===".priority"?h=y.updatePriority(p.getNode(),C):h=y.updateChild(p.getNode(),b,C,x,WA,null)}const v=BA(t,h,p.isFullyInitialized()||Ye(n),y.filtersNodes()),_=new D_(o,v,l);return YA(e,v,n,o,_,f)}function lv(e,t,n,i,o,l,u){const f=t.eventCache;let p,h;const y=new D_(o,t,l);if(Ye(n))h=e.filter.updateFullNode(t.eventCache.getNode(),i,u),p=Lc(t,h,!0,e.filter.filtersNodes());else{const v=qe(n);if(v===".priority")h=e.filter.updatePriority(t.eventCache.getNode(),i),p=Lc(t,h,f.isFullyInitialized(),f.isFiltered());else{const _=pt(n),b=f.getNode().getImmediateChild(v);let x;if(Ye(_))x=i;else{const I=y.getCompleteChild(v);I!=null?__(_)===".priority"&&I.getChild(kA(_)).isEmpty()?x=I:x=I.updateChild(_,i):x=Ne.EMPTY_NODE}if(b.equals(x))p=t;else{const I=e.filter.updateChild(f.getNode(),v,x,_,y,u);p=Lc(t,I,f.isFullyInitialized(),e.filter.filtersNodes())}}}return p}function nE(e,t){return e.eventCache.isCompleteForChild(t)}function g5(e,t,n,i,o,l,u){let f=t;return i.foreach((p,h)=>{const y=At(n,p);nE(t,qe(y))&&(f=lv(e,f,y,h,o,l,u))}),i.foreach((p,h)=>{const y=At(n,p);nE(t,qe(y))||(f=lv(e,f,y,h,o,l,u))}),f}function rE(e,t,n){return n.foreach((i,o)=>{t=t.updateChild(i,o)}),t}function cv(e,t,n,i,o,l,u,f){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let p=t,h;Ye(n)?h=i:h=new ht(null).setTree(n,i);const y=t.serverCache.getNode();return h.children.inorderTraversal((v,_)=>{if(y.hasChild(v)){const b=t.serverCache.getNode().getImmediateChild(v),x=rE(e,b,_);p=ih(e,p,new ut(v),x,o,l,u,f)}}),h.children.inorderTraversal((v,_)=>{const b=!t.serverCache.isCompleteForChild(v)&&_.value===null;if(!y.hasChild(v)&&!b){const x=t.serverCache.getNode().getImmediateChild(v),I=rE(e,x,_);p=ih(e,p,new ut(v),I,o,l,u,f)}}),p}function y5(e,t,n,i,o,l,u){if(rh(o,n)!=null)return t;const f=t.serverCache.isFiltered(),p=t.serverCache;if(i.value!=null){if(Ye(n)&&p.isFullyInitialized()||p.isCompleteForPath(n))return ih(e,t,n,p.getNode().getChild(n),o,l,f,u);if(Ye(n)){let h=new ht(null);return p.getNode().forEachChild(Ra,(y,v)=>{h=h.set(new ut(y),v)}),cv(e,t,n,h,o,l,f,u)}else return t}else{let h=new ht(null);return i.foreach((y,v)=>{const _=At(n,y);p.isCompleteForPath(_)&&(h=h.set(y,p.getNode().getChild(_)))}),cv(e,t,n,h,o,l,f,u)}}function v5(e,t,n,i,o){const l=t.serverCache,u=BA(t,l.getNode(),l.isFullyInitialized()||Ye(n),l.isFiltered());return YA(e,u,n,i,WA,o)}function _5(e,t,n,i,o,l){let u;if(rh(i,n)!=null)return t;{const f=new D_(i,t,o),p=t.eventCache.getNode();let h;if(Ye(n)||qe(n)===".priority"){let y;if(t.serverCache.isFullyInitialized())y=nh(i,xo(t));else{const v=t.serverCache.getNode();he(v instanceof Ne,"serverChildren would be complete if leaf node"),y=A_(i,v)}y=y,h=e.filter.updateFullNode(p,y,l)}else{const y=qe(n);let v=I_(i,y,t.serverCache);v==null&&t.serverCache.isCompleteForChild(y)&&(v=p.getImmediateChild(y)),v!=null?h=e.filter.updateChild(p,y,v,pt(n),f,l):t.eventCache.getNode().hasChild(y)?h=e.filter.updateChild(p,y,Ne.EMPTY_NODE,pt(n),f,l):h=p,h.isEmpty()&&t.serverCache.isFullyInitialized()&&(u=nh(i,xo(t)),u.isLeafNode()&&(h=e.filter.updateFullNode(h,u,l)))}return u=t.serverCache.isFullyInitialized()||rh(i,Xe())!=null,Lc(t,h,u,e.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b5{constructor(t,n){this.query_=t,this.eventRegistrations_=[];const i=this.query_._queryParams,o=new w_(i.getIndex()),l=$$(i);this.processor_=f5(l);const u=n.serverCache,f=n.eventCache,p=o.updateFullNode(Ne.EMPTY_NODE,u.getNode(),null),h=l.updateFullNode(Ne.EMPTY_NODE,f.getNode(),null),y=new Ss(p,u.isFullyInitialized(),o.filtersNodes()),v=new Ss(h,f.isFullyInitialized(),l.filtersNodes());this.viewCache_=Wh(v,y),this.eventGenerator_=new V$(this.query_)}get query(){return this.query_}}function S5(e){return e.viewCache_.serverCache.getNode()}function x5(e){return th(e.viewCache_)}function w5(e,t){const n=xo(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Ye(t)&&!n.getImmediateChild(qe(t)).isEmpty())?n.getChild(t):null}function iE(e){return e.eventRegistrations_.length===0}function E5(e,t){e.eventRegistrations_.push(t)}function sE(e,t,n){const i=[];if(n){he(t==null,"A cancel should cancel all event registrations.");const o=e.query._path;e.eventRegistrations_.forEach(l=>{const u=l.createCancelEvent(n,o);u&&i.push(u)})}if(t){let o=[];for(let l=0;l<e.eventRegistrations_.length;++l){const u=e.eventRegistrations_[l];if(!u.matches(t))o.push(u);else if(t.hasAnyCallback()){o=o.concat(e.eventRegistrations_.slice(l+1));break}}e.eventRegistrations_=o}else e.eventRegistrations_=[];return i}function oE(e,t,n,i){t.type===fr.MERGE&&t.source.queryId!==null&&(he(xo(e.viewCache_),"We should always have a full cache before handling merges"),he(th(e.viewCache_),"Missing event cache, even though we have a server cache"));const o=e.viewCache_,l=p5(e.processor_,o,t,n,i);return h5(e.processor_,l.viewCache),he(l.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=l.viewCache,QA(e,l.changes,l.viewCache.eventCache.getNode(),null)}function T5(e,t){const n=e.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(It,(l,u)=>{i.push(Ba(l,u))}),n.isFullyInitialized()&&i.push(UA(n.getNode())),QA(e,i,n.getNode(),t)}function QA(e,t,n,i){const o=i?[i]:e.eventRegistrations_;return G$(e.eventGenerator_,t,n,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sh;class KA{constructor(){this.views=new Map}}function C5(e){he(!sh,"__referenceConstructor has already been defined"),sh=e}function R5(){return he(sh,"Reference.ts has not been loaded"),sh}function A5(e){return e.views.size===0}function O_(e,t,n,i){const o=t.source.queryId;if(o!==null){const l=e.views.get(o);return he(l!=null,"SyncTree gave us an op for an invalid query."),oE(l,t,n,i)}else{let l=[];for(const u of e.views.values())l=l.concat(oE(u,t,n,i));return l}}function XA(e,t,n,i,o){const l=t._queryIdentifier,u=e.views.get(l);if(!u){let f=nh(n,o?i:null),p=!1;f?p=!0:i instanceof Ne?(f=A_(n,i),p=!1):(f=Ne.EMPTY_NODE,p=!1);const h=Wh(new Ss(f,p,!1),new Ss(i,o,!1));return new b5(t,h)}return u}function I5(e,t,n,i,o,l){const u=XA(e,t,i,o,l);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,u),E5(u,n),T5(u,n)}function D5(e,t,n,i){const o=t._queryIdentifier,l=[];let u=[];const f=xs(e);if(o==="default")for(const[p,h]of e.views.entries())u=u.concat(sE(h,n,i)),iE(h)&&(e.views.delete(p),h.query._queryParams.loadsAllData()||l.push(h.query));else{const p=e.views.get(o);p&&(u=u.concat(sE(p,n,i)),iE(p)&&(e.views.delete(o),p.query._queryParams.loadsAllData()||l.push(p.query)))}return f&&!xs(e)&&l.push(new(R5())(t._repo,t._path)),{removed:l,events:u}}function ZA(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function fs(e,t){let n=null;for(const i of e.views.values())n=n||w5(i,t);return n}function JA(e,t){if(t._queryParams.loadsAllData())return Qh(e);{const i=t._queryIdentifier;return e.views.get(i)}}function eI(e,t){return JA(e,t)!=null}function xs(e){return Qh(e)!=null}function Qh(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oh;function O5(e){he(!oh,"__referenceConstructor has already been defined"),oh=e}function k5(){return he(oh,"Reference.ts has not been loaded"),oh}let N5=1;class aE{constructor(t){this.listenProvider_=t,this.syncPointTree_=new ht(null),this.pendingWriteTree_=l5(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function tI(e,t,n,i,o){return K$(e.pendingWriteTree_,t,n,i,o),o?nl(e,new So(T_(),t,n)):[]}function M5(e,t,n,i){X$(e.pendingWriteTree_,t,n,i);const o=ht.fromObject(n);return nl(e,new Ha(T_(),t,o))}function as(e,t,n=!1){const i=Z$(e.pendingWriteTree_,t);if(J$(e.pendingWriteTree_,t)){let l=new ht(null);return i.snap!=null?l=l.set(Xe(),!0):rn(i.children,u=>{l=l.set(new ut(u),!0)}),nl(e,new eh(i.path,l,n))}else return[]}function wu(e,t,n){return nl(e,new So(C_(),t,n))}function L5(e,t,n){const i=ht.fromObject(n);return nl(e,new Ha(C_(),t,i))}function P5(e,t){return nl(e,new iu(C_(),t))}function j5(e,t,n){const i=N_(e,n);if(i){const o=M_(i),l=o.path,u=o.queryId,f=un(l,t),p=new iu(R_(u),f);return L_(e,l,p)}else return[]}function ah(e,t,n,i,o=!1){const l=t._path,u=e.syncPointTree_.get(l);let f=[];if(u&&(t._queryIdentifier==="default"||eI(u,t))){const p=D5(u,t,n,i);A5(u)&&(e.syncPointTree_=e.syncPointTree_.remove(l));const h=p.removed;if(f=p.events,!o){const y=h.findIndex(_=>_._queryParams.loadsAllData())!==-1,v=e.syncPointTree_.findOnPath(l,(_,b)=>xs(b));if(y&&!v){const _=e.syncPointTree_.subtree(l);if(!_.isEmpty()){const b=z5(_);for(let x=0;x<b.length;++x){const I=b[x],C=I.query,O=sI(e,I);e.listenProvider_.startListening(jc(C),su(e,C),O.hashFn,O.onComplete)}}}!v&&h.length>0&&!i&&(y?e.listenProvider_.stopListening(jc(t),null):h.forEach(_=>{const b=e.queryToTagMap.get(Kh(_));e.listenProvider_.stopListening(jc(_),b)}))}B5(e,h)}return f}function nI(e,t,n,i){const o=N_(e,i);if(o!=null){const l=M_(o),u=l.path,f=l.queryId,p=un(u,t),h=new So(R_(f),p,n);return L_(e,u,h)}else return[]}function $5(e,t,n,i){const o=N_(e,i);if(o){const l=M_(o),u=l.path,f=l.queryId,p=un(u,t),h=ht.fromObject(n),y=new Ha(R_(f),p,h);return L_(e,u,y)}else return[]}function uv(e,t,n,i=!1){const o=t._path;let l=null,u=!1;e.syncPointTree_.foreachOnPath(o,(_,b)=>{const x=un(_,o);l=l||fs(b,x),u=u||xs(b)});let f=e.syncPointTree_.get(o);f?(u=u||xs(f),l=l||fs(f,Xe())):(f=new KA,e.syncPointTree_=e.syncPointTree_.set(o,f));let p;l!=null?p=!0:(p=!1,l=Ne.EMPTY_NODE,e.syncPointTree_.subtree(o).foreachChild((b,x)=>{const I=fs(x,Xe());I&&(l=l.updateImmediateChild(b,I))}));const h=eI(f,t);if(!h&&!t._queryParams.loadsAllData()){const _=Kh(t);he(!e.queryToTagMap.has(_),"View does not exist, but we have a tag");const b=H5();e.queryToTagMap.set(_,b),e.tagToQueryMap.set(b,_)}const y=Yh(e.pendingWriteTree_,o);let v=I5(f,t,n,y,l,p);if(!h&&!u&&!i){const _=JA(f,t);v=v.concat(F5(e,t,_))}return v}function k_(e,t,n){const o=e.pendingWriteTree_,l=e.syncPointTree_.findOnPath(t,(u,f)=>{const p=un(u,t),h=fs(f,p);if(h)return h});return qA(o,t,l,n,!0)}function U5(e,t){const n=t._path;let i=null;e.syncPointTree_.foreachOnPath(n,(h,y)=>{const v=un(h,n);i=i||fs(y,v)});let o=e.syncPointTree_.get(n);o?i=i||fs(o,Xe()):(o=new KA,e.syncPointTree_=e.syncPointTree_.set(n,o));const l=i!=null,u=l?new Ss(i,!0,!1):null,f=Yh(e.pendingWriteTree_,t._path),p=XA(o,t,f,l?u.getNode():Ne.EMPTY_NODE,l);return x5(p)}function nl(e,t){return rI(t,e.syncPointTree_,null,Yh(e.pendingWriteTree_,Xe()))}function rI(e,t,n,i){if(Ye(e.path))return iI(e,t,n,i);{const o=t.get(Xe());n==null&&o!=null&&(n=fs(o,Xe()));let l=[];const u=qe(e.path),f=e.operationForChild(u),p=t.children.get(u);if(p&&f){const h=n?n.getImmediateChild(u):null,y=VA(i,u);l=l.concat(rI(f,p,h,y))}return o&&(l=l.concat(O_(o,e,i,n))),l}}function iI(e,t,n,i){const o=t.get(Xe());n==null&&o!=null&&(n=fs(o,Xe()));let l=[];return t.children.inorderTraversal((u,f)=>{const p=n?n.getImmediateChild(u):null,h=VA(i,u),y=e.operationForChild(u);y&&(l=l.concat(iI(y,f,p,h)))}),o&&(l=l.concat(O_(o,e,i,n))),l}function sI(e,t){const n=t.query,i=su(e,n);return{hashFn:()=>(S5(t)||Ne.EMPTY_NODE).hash(),onComplete:o=>{if(o==="ok")return i?j5(e,n._path,i):P5(e,n._path);{const l=P3(o,n);return ah(e,n,null,l)}}}}function su(e,t){const n=Kh(t);return e.queryToTagMap.get(n)}function Kh(e){return e._path.toString()+"$"+e._queryIdentifier}function N_(e,t){return e.tagToQueryMap.get(t)}function M_(e){const t=e.indexOf("$");return he(t!==-1&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ut(e.substr(0,t))}}function L_(e,t,n){const i=e.syncPointTree_.get(t);he(i,"Missing sync point for query tag that we're tracking");const o=Yh(e.pendingWriteTree_,t);return O_(i,n,o,null)}function z5(e){return e.fold((t,n,i)=>{if(n&&xs(n))return[Qh(n)];{let o=[];return n&&(o=ZA(n)),rn(i,(l,u)=>{o=o.concat(u)}),o}})}function jc(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(k5())(e._repo,e._path):e}function B5(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const o=Kh(i),l=e.queryToTagMap.get(o);e.queryToTagMap.delete(o),e.tagToQueryMap.delete(l)}}}function H5(){return N5++}function F5(e,t,n){const i=t._path,o=su(e,t),l=sI(e,n),u=e.listenProvider_.startListening(jc(t),o,l.hashFn,l.onComplete),f=e.syncPointTree_.subtree(i);if(o)he(!xs(f.value),"If we're adding a query, it shouldn't be shadowed");else{const p=f.fold((h,y,v)=>{if(!Ye(h)&&y&&xs(y))return[Qh(y).query];{let _=[];return y&&(_=_.concat(ZA(y).map(b=>b.query))),rn(v,(b,x)=>{_=_.concat(x)}),_}});for(let h=0;h<p.length;++h){const y=p[h];e.listenProvider_.stopListening(jc(y),su(e,y))}}return u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(t){this.node_=t}getImmediateChild(t){const n=this.node_.getImmediateChild(t);return new P_(n)}node(){return this.node_}}class j_{constructor(t,n){this.syncTree_=t,this.path_=n}getImmediateChild(t){const n=At(this.path_,t);return new j_(this.syncTree_,n)}node(){return k_(this.syncTree_,this.path_)}}const q5=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},lE=function(e,t,n){if(!e||typeof e!="object")return e;if(he(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return V5(e[".sv"],t,n);if(typeof e[".sv"]=="object")return G5(e[".sv"],t);he(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},V5=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:he(!1,"Unexpected server value: "+e)}},G5=function(e,t,n){e.hasOwnProperty("increment")||he(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;typeof i!="number"&&he(!1,"Unexpected increment value: "+i);const o=t.node();if(he(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return i;const u=o.getValue();return typeof u!="number"?i:u+i},oI=function(e,t,n,i){return $_(t,new j_(n,e),i)},aI=function(e,t,n){return $_(e,new P_(t),n)};function $_(e,t,n){const i=e.getPriority().val(),o=lE(i,t.getImmediateChild(".priority"),n);let l;if(e.isLeafNode()){const u=e,f=lE(u.getValue(),t,n);return f!==u.getValue()||o!==u.getPriority().val()?new Ft(f,$t(o)):e}else{const u=e;return l=u,o!==u.getPriority().val()&&(l=l.updatePriority(new Ft(o))),u.forEachChild(It,(f,p)=>{const h=$_(p,t.getImmediateChild(f),n);h!==p&&(l=l.updateImmediateChild(f,h))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(t="",n=null,i={children:{},childCount:0}){this.name=t,this.parent=n,this.node=i}}function z_(e,t){let n=t instanceof ut?t:new ut(t),i=e,o=qe(n);for(;o!==null;){const l=ja(i.node.children,o)||{children:{},childCount:0};i=new U_(o,i,l),n=pt(n),o=qe(n)}return i}function rl(e){return e.node.value}function lI(e,t){e.node.value=t,dv(e)}function cI(e){return e.node.childCount>0}function W5(e){return rl(e)===void 0&&!cI(e)}function Xh(e,t){rn(e.node.children,(n,i)=>{t(new U_(n,e,i))})}function uI(e,t,n,i){n&&t(e),Xh(e,o=>{uI(o,t,!0)})}function Y5(e,t,n){let i=e.parent;for(;i!==null;){if(t(i))return!0;i=i.parent}return!1}function Eu(e){return new ut(e.parent===null?e.name:Eu(e.parent)+"/"+e.name)}function dv(e){e.parent!==null&&Q5(e.parent,e.name,e)}function Q5(e,t,n){const i=W5(n),o=jr(e.node.children,t);i&&o?(delete e.node.children[t],e.node.childCount--,dv(e)):!i&&!o&&(e.node.children[t]=n.node,e.node.childCount++,dv(e))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K5=/[\[\].#$\/\u0000-\u001F\u007F]/,X5=/[\[\].#$\u0000-\u001F\u007F]/,ty=10*1024*1024,B_=function(e){return typeof e=="string"&&e.length!==0&&!K5.test(e)},dI=function(e){return typeof e=="string"&&e.length!==0&&!X5.test(e)},Z5=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),dI(e)},J5=function(e){return e===null||typeof e=="string"||typeof e=="number"&&!p_(e)||e&&typeof e=="object"&&jr(e,".sv")},fI=function(e,t,n,i){i&&t===void 0||Zh(Ph(e,"value"),t,n)},Zh=function(e,t,n){const i=n instanceof ut?new g$(n,e):n;if(t===void 0)throw new Error(e+"contains undefined "+so(i));if(typeof t=="function")throw new Error(e+"contains a function "+so(i)+" with contents = "+t.toString());if(p_(t))throw new Error(e+"contains "+t.toString()+" "+so(i));if(typeof t=="string"&&t.length>ty/3&&jh(t)>ty)throw new Error(e+"contains a string greater than "+ty+" utf8 bytes "+so(i)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let o=!1,l=!1;if(rn(t,(u,f)=>{if(u===".value")o=!0;else if(u!==".priority"&&u!==".sv"&&(l=!0,!B_(u)))throw new Error(e+" contains an invalid key ("+u+") "+so(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);y$(i,u),Zh(e,f,i),v$(i)}),o&&l)throw new Error(e+' contains ".value" child '+so(i)+" in addition to actual children.")}},eU=function(e,t){let n,i;for(n=0;n<t.length;n++){i=t[n];const l=eu(i);for(let u=0;u<l.length;u++)if(!(l[u]===".priority"&&u===l.length-1)){if(!B_(l[u]))throw new Error(e+"contains an invalid key ("+l[u]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}t.sort(m$);let o=null;for(n=0;n<t.length;n++){if(i=t[n],o!==null&&Xn(o,i))throw new Error(e+"contains a path "+o.toString()+" that is ancestor of another path "+i.toString());o=i}},tU=function(e,t,n,i){const o=Ph(e,"values");if(!(t&&typeof t=="object")||Array.isArray(t))throw new Error(o+" must be an object containing the children to replace.");const l=[];rn(t,(u,f)=>{const p=new ut(u);if(Zh(o,f,At(n,p)),__(p)===".priority"&&!J5(f))throw new Error(o+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");l.push(p)}),eU(o,l)},hI=function(e,t,n,i){if(!dI(n))throw new Error(Ph(e,t)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},nU=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),hI(e,t,n)},H_=function(e,t){if(qe(t)===".info")throw new Error(e+" failed = Can't modify data under /.info/")},rU=function(e,t){const n=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!B_(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Z5(n))throw new Error(Ph(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iU{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Jh(e,t){let n=null;for(let i=0;i<t.length;i++){const o=t[i],l=o.getPath();n!==null&&!b_(l,n.path)&&(e.eventLists_.push(n),n=null),n===null&&(n={events:[],path:l}),n.events.push(o)}n&&e.eventLists_.push(n)}function pI(e,t,n){Jh(e,n),mI(e,i=>b_(i,t))}function tr(e,t,n){Jh(e,n),mI(e,i=>Xn(i,t)||Xn(t,i))}function mI(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const o=e.eventLists_[i];if(o){const l=o.path;t(l)?(sU(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function sU(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(n!==null){e.events[t]=null;const i=n.getEventRunner();Nc&&en("event: "+n.toString()),tl(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oU="repo_interrupt",aU=25;class lU{constructor(t,n,i,o){this.repoInfo_=t,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new iU,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Jf(),this.transactionQueueTree_=new U_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function cU(e,t,n){if(e.stats_=y_(e.repoInfo_),e.forceRestClient_||z3())e.server_=new Zf(e.repoInfo_,(i,o,l,u)=>{cE(e,i,o,l,u)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>uE(e,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ut(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new mi(e.repoInfo_,t,(i,o,l,u)=>{cE(e,i,o,l,u)},i=>{uE(e,i)},i=>{uU(e,i)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(i=>{e.server_.refreshAuthToken(i)}),e.appCheckProvider_.addTokenChangeListener(i=>{e.server_.refreshAppCheckToken(i.token)}),e.statsReporter_=V3(e.repoInfo_,()=>new q$(e.stats_,e.server_)),e.infoData_=new U$,e.infoSyncTree_=new aE({startListening:(i,o,l,u)=>{let f=[];const p=e.infoData_.getNode(i._path);return p.isEmpty()||(f=wu(e.infoSyncTree_,i._path,p),setTimeout(()=>{u("ok")},0)),f},stopListening:()=>{}}),F_(e,"connected",!1),e.serverSyncTree_=new aE({startListening:(i,o,l,u)=>(e.server_.listen(i,l,o,(f,p)=>{const h=u(f,p);tr(e.eventQueue_,i._path,h)}),[]),stopListening:(i,o)=>{e.server_.unlisten(i,o)}})}function gI(e){const n=e.infoData_.getNode(new ut(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ep(e){return q5({timestamp:gI(e)})}function cE(e,t,n,i,o){e.dataUpdateCount++;const l=new ut(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let u=[];if(o)if(i){const p=Bf(n,h=>$t(h));u=$5(e.serverSyncTree_,l,p,o)}else{const p=$t(n);u=nI(e.serverSyncTree_,l,p,o)}else if(i){const p=Bf(n,h=>$t(h));u=L5(e.serverSyncTree_,l,p)}else{const p=$t(n);u=wu(e.serverSyncTree_,l,p)}let f=l;u.length>0&&(f=qa(e,l)),tr(e.eventQueue_,f,u)}function uE(e,t){F_(e,"connected",t),t===!1&&pU(e)}function uU(e,t){rn(t,(n,i)=>{F_(e,n,i)})}function F_(e,t,n){const i=new ut("/.info/"+t),o=$t(n);e.infoData_.updateSnapshot(i,o);const l=wu(e.infoSyncTree_,i,o);tr(e.eventQueue_,i,l)}function q_(e){return e.nextWriteId_++}function dU(e,t,n){const i=U5(e.serverSyncTree_,t);return i!=null?Promise.resolve(i):e.server_.get(t).then(o=>{const l=$t(o).withIndex(t._queryParams.getIndex());uv(e.serverSyncTree_,t,n,!0);let u;if(t._queryParams.loadsAllData())u=wu(e.serverSyncTree_,t._path,l);else{const f=su(e.serverSyncTree_,t);u=nI(e.serverSyncTree_,t._path,l,f)}return tr(e.eventQueue_,t._path,u),ah(e.serverSyncTree_,t,n,null,!0),l},o=>(Tu(e,"get for query "+Ut(t)+" failed: "+o),Promise.reject(new Error(o))))}function fU(e,t,n,i,o){Tu(e,"set",{path:t.toString(),value:n,priority:i});const l=ep(e),u=$t(n,i),f=k_(e.serverSyncTree_,t),p=aI(u,f,l),h=q_(e),y=tI(e.serverSyncTree_,t,p,h,!0);Jh(e.eventQueue_,y),e.server_.put(t.toString(),u.val(!0),(_,b)=>{const x=_==="ok";x||dn("set at "+t+" failed: "+_);const I=as(e.serverSyncTree_,h,!x);tr(e.eventQueue_,t,I),fv(e,o,_,b)});const v=G_(e,t);qa(e,v),tr(e.eventQueue_,v,[])}function hU(e,t,n,i){Tu(e,"update",{path:t.toString(),value:n});let o=!0;const l=ep(e),u={};if(rn(n,(f,p)=>{o=!1,u[f]=oI(At(t,f),$t(p),e.serverSyncTree_,l)}),o)en("update() called with empty data.  Don't do anything."),fv(e,i,"ok",void 0);else{const f=q_(e),p=M5(e.serverSyncTree_,t,u,f);Jh(e.eventQueue_,p),e.server_.merge(t.toString(),n,(h,y)=>{const v=h==="ok";v||dn("update at "+t+" failed: "+h);const _=as(e.serverSyncTree_,f,!v),b=_.length>0?qa(e,t):t;tr(e.eventQueue_,b,_),fv(e,i,h,y)}),rn(n,h=>{const y=G_(e,At(t,h));qa(e,y)}),tr(e.eventQueue_,t,[])}}function pU(e){Tu(e,"onDisconnectEvents");const t=ep(e),n=Jf();iv(e.onDisconnect_,Xe(),(o,l)=>{const u=oI(o,l,e.serverSyncTree_,t);zA(n,o,u)});let i=[];iv(n,Xe(),(o,l)=>{i=i.concat(wu(e.serverSyncTree_,o,l));const u=G_(e,o);qa(e,u)}),e.onDisconnect_=Jf(),tr(e.eventQueue_,Xe(),i)}function mU(e,t,n){let i;qe(t._path)===".info"?i=uv(e.infoSyncTree_,t,n):i=uv(e.serverSyncTree_,t,n),pI(e.eventQueue_,t._path,i)}function dE(e,t,n){let i;qe(t._path)===".info"?i=ah(e.infoSyncTree_,t,n):i=ah(e.serverSyncTree_,t,n),pI(e.eventQueue_,t._path,i)}function gU(e){e.persistentConnection_&&e.persistentConnection_.interrupt(oU)}function Tu(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),en(n,...t)}function fv(e,t,n,i){t&&tl(()=>{if(n==="ok")t(null);else{const o=(n||"error").toUpperCase();let l=o;i&&(l+=": "+i);const u=new Error(l);u.code=o,t(u)}})}function yI(e,t,n){return k_(e.serverSyncTree_,t,n)||Ne.EMPTY_NODE}function V_(e,t=e.transactionQueueTree_){if(t||tp(e,t),rl(t)){const n=_I(e,t);he(n.length>0,"Sending zero length transaction queue"),n.every(o=>o.status===0)&&yU(e,Eu(t),n)}else cI(t)&&Xh(t,n=>{V_(e,n)})}function yU(e,t,n){const i=n.map(h=>h.currentWriteId),o=yI(e,t,i);let l=o;const u=o.hash();for(let h=0;h<n.length;h++){const y=n[h];he(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const v=un(t,y.path);l=l.updateChild(v,y.currentOutputSnapshotRaw)}const f=l.val(!0),p=t;e.server_.put(p.toString(),f,h=>{Tu(e,"transaction put response",{path:p.toString(),status:h});let y=[];if(h==="ok"){const v=[];for(let _=0;_<n.length;_++)n[_].status=2,y=y.concat(as(e.serverSyncTree_,n[_].currentWriteId)),n[_].onComplete&&v.push(()=>n[_].onComplete(null,!0,n[_].currentOutputSnapshotResolved)),n[_].unwatcher();tp(e,z_(e.transactionQueueTree_,t)),V_(e,e.transactionQueueTree_),tr(e.eventQueue_,t,y);for(let _=0;_<v.length;_++)tl(v[_])}else{if(h==="datastale")for(let v=0;v<n.length;v++)n[v].status===3?n[v].status=4:n[v].status=0;else{dn("transaction at "+p.toString()+" failed: "+h);for(let v=0;v<n.length;v++)n[v].status=4,n[v].abortReason=h}qa(e,t)}},u)}function qa(e,t){const n=vI(e,t),i=Eu(n),o=_I(e,n);return vU(e,o,i),i}function vU(e,t,n){if(t.length===0)return;const i=[];let o=[];const u=t.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<t.length;f++){const p=t[f],h=un(n,p.path);let y=!1,v;if(he(h!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)y=!0,v=p.abortReason,o=o.concat(as(e.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=aU)y=!0,v="maxretry",o=o.concat(as(e.serverSyncTree_,p.currentWriteId,!0));else{const _=yI(e,p.path,u);p.currentInputSnapshot=_;const b=t[f].update(_.val());if(b!==void 0){Zh("transaction failed: Data returned ",b,p.path);let x=$t(b);typeof b=="object"&&b!=null&&jr(b,".priority")||(x=x.updatePriority(_.getPriority()));const C=p.currentWriteId,O=ep(e),M=aI(x,_,O);p.currentOutputSnapshotRaw=x,p.currentOutputSnapshotResolved=M,p.currentWriteId=q_(e),u.splice(u.indexOf(C),1),o=o.concat(tI(e.serverSyncTree_,p.path,M,p.currentWriteId,p.applyLocally)),o=o.concat(as(e.serverSyncTree_,C,!0))}else y=!0,v="nodata",o=o.concat(as(e.serverSyncTree_,p.currentWriteId,!0))}tr(e.eventQueue_,n,o),o=[],y&&(t[f].status=2,(function(_){setTimeout(_,Math.floor(0))})(t[f].unwatcher),t[f].onComplete&&(v==="nodata"?i.push(()=>t[f].onComplete(null,!1,t[f].currentInputSnapshot)):i.push(()=>t[f].onComplete(new Error(v),!1,null))))}tp(e,e.transactionQueueTree_);for(let f=0;f<i.length;f++)tl(i[f]);V_(e,e.transactionQueueTree_)}function vI(e,t){let n,i=e.transactionQueueTree_;for(n=qe(t);n!==null&&rl(i)===void 0;)i=z_(i,n),t=pt(t),n=qe(t);return i}function _I(e,t){const n=[];return bI(e,t,n),n.sort((i,o)=>i.order-o.order),n}function bI(e,t,n){const i=rl(t);if(i)for(let o=0;o<i.length;o++)n.push(i[o]);Xh(t,o=>{bI(e,o,n)})}function tp(e,t){const n=rl(t);if(n){let i=0;for(let o=0;o<n.length;o++)n[o].status!==2&&(n[i]=n[o],i++);n.length=i,lI(t,n.length>0?n:void 0)}Xh(t,i=>{tp(e,i)})}function G_(e,t){const n=Eu(vI(e,t)),i=z_(e.transactionQueueTree_,t);return Y5(i,o=>{ny(e,o)}),ny(e,i),uI(i,o=>{ny(e,o)}),n}function ny(e,t){const n=rl(t);if(n){const i=[];let o=[],l=-1;for(let u=0;u<n.length;u++)n[u].status===3||(n[u].status===1?(he(l===u-1,"All SENT items should be at beginning of queue."),l=u,n[u].status=3,n[u].abortReason="set"):(he(n[u].status===0,"Unexpected transaction status in abort"),n[u].unwatcher(),o=o.concat(as(e.serverSyncTree_,n[u].currentWriteId,!0)),n[u].onComplete&&i.push(n[u].onComplete.bind(null,new Error("set"),!1,null))));l===-1?lI(t,void 0):n.length=l+1,tr(e.eventQueue_,Eu(t),o);for(let u=0;u<i.length;u++)tl(i[u])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _U(e){let t="";const n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let o=n[i];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}t+="/"+o}return t}function bU(e){const t={};e.charAt(0)==="?"&&(e=e.substring(1));for(const n of e.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):dn(`Invalid query segment '${n}' in query '${e}'`)}return t}const fE=function(e,t){const n=SU(e),i=n.namespace;n.domain==="firebase.com"&&_i(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&_i("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||O3();const o=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new wA(n.host,n.secure,i,o,t,"",i!==n.subdomain),path:new ut(n.pathString)}},SU=function(e){let t="",n="",i="",o="",l="",u=!0,f="https",p=443;if(typeof e=="string"){let h=e.indexOf("//");h>=0&&(f=e.substring(0,h-1),e=e.substring(h+2));let y=e.indexOf("/");y===-1&&(y=e.length);let v=e.indexOf("?");v===-1&&(v=e.length),t=e.substring(0,Math.min(y,v)),y<v&&(o=_U(e.substring(y,v)));const _=bU(e.substring(Math.min(e.length,v)));h=t.indexOf(":"),h>=0?(u=f==="https"||f==="wss",p=parseInt(t.substring(h+1),10)):h=t.length;const b=t.slice(0,h);if(b.toLowerCase()==="localhost")n="localhost";else if(b.split(".").length<=2)n=b;else{const x=t.indexOf(".");i=t.substring(0,x).toLowerCase(),n=t.substring(x+1),l=i}"ns"in _&&(l=_.ns)}return{host:t,port:p,domain:n,subdomain:i,secure:u,scheme:f,pathString:o,namespace:l}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",xU=(function(){let e=0;const t=[];return function(n){const i=n===e;e=n;let o;const l=new Array(8);for(o=7;o>=0;o--)l[o]=hE.charAt(n%64),n=Math.floor(n/64);he(n===0,"Cannot push at time == 0");let u=l.join("");if(i){for(o=11;o>=0&&t[o]===63;o--)t[o]=0;t[o]++}else for(o=0;o<12;o++)t[o]=Math.floor(Math.random()*64);for(o=0;o<12;o++)u+=hE.charAt(t[o]);return he(u.length===20,"nextPushId: Length should be 20."),u}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wU{constructor(t,n,i,o){this.eventType=t,this.eventRegistration=n,this.snapshot=i,this.prevName=o}getPath(){const t=this.snapshot.ref;return this.eventType==="value"?t._path:t.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ut(this.snapshot.exportVal())}}class EU{constructor(t,n,i){this.eventRegistration=t,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(t,n){this.snapshotCallback=t,this.cancelCallback=n}onValue(t,n){this.snapshotCallback.call(null,t,n)}onCancel(t){return he(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)}get hasCancelCallback(){return!!this.cancelCallback}matches(t){return this.snapshotCallback===t.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(t,n,i,o){this._repo=t,this._path=n,this._queryParams=i,this._orderByCalled=o}get key(){return Ye(this._path)?null:__(this._path)}get ref(){return new Ei(this._repo,this._path)}get _queryIdentifier(){const t=Xw(this._queryParams),n=m_(t);return n==="{}"?"default":n}get _queryObject(){return Xw(this._queryParams)}isEqual(t){if(t=Wt(t),!(t instanceof W_))return!1;const n=this._repo===t._repo,i=b_(this._path,t._path),o=this._queryIdentifier===t._queryIdentifier;return n&&i&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+p$(this._path)}}class Ei extends W_{constructor(t,n){super(t,n,new E_,!1)}get parent(){const t=kA(this._path);return t===null?null:new Ei(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}class ou{constructor(t,n,i){this._node=t,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const n=new ut(t),i=au(this.ref,t);return new ou(this._node.getChild(n),i,It)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,o)=>t(new ou(o,au(this.ref,i),It)))}hasChild(t){const n=new ut(t);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ir(e,t){return e=Wt(e),e._checkNotDeleted("ref"),t!==void 0?au(e._root,t):e._root}function au(e,t){return e=Wt(e),qe(e._path)===null?nU("child","path",t):hI("child","path",t),new Ei(e._repo,At(e._path,t))}function TU(e,t){e=Wt(e),H_("push",e._path),fI("push",t,e._path,!0);const n=gI(e._repo),i=xU(n),o=au(e,i),l=au(e,i);let u;return t!=null?u=Y_(l,t).then(()=>l):u=Promise.resolve(l),o.then=u.then.bind(u),o.catch=u.then.bind(u,void 0),o}function xI(e){return H_("remove",e._path),Y_(e,null)}function Y_(e,t){e=Wt(e),H_("set",e._path),fI("set",t,e._path,!1);const n=new pu;return fU(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}function wI(e,t){tU("update",t,e._path);const n=new pu;return hU(e._repo,e._path,t,n.wrapCallback(()=>{})),n.promise}function EI(e){e=Wt(e);const t=new SI(()=>{}),n=new np(t);return dU(e._repo,e,n).then(i=>new ou(i,new Ei(e._repo,e._path),e._queryParams.getIndex()))}class np{constructor(t){this.callbackContext=t}respondsTo(t){return t==="value"}createEvent(t,n){const i=n._queryParams.getIndex();return new wU("value",this,new ou(t.snapshotNode,new Ei(n._repo,n._path),i))}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,n){return this.callbackContext.hasCancelCallback?new EU(this,t,n):null}matches(t){return t instanceof np?!t.callbackContext||!this.callbackContext?!0:t.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function CU(e,t,n,i,o){let l;if(typeof i=="object"&&(l=void 0,o=i),typeof i=="function"&&(l=i),o&&o.onlyOnce){const p=n,h=(y,v)=>{dE(e._repo,e,f),p(y,v)};h.userCallback=n.userCallback,h.context=n.context,n=h}const u=new SI(n,l||void 0),f=new np(u);return mU(e._repo,e,f),()=>dE(e._repo,e,f)}function rp(e,t,n,i){return CU(e,"value",t,n,i)}C5(Ei);O5(Ei);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RU="FIREBASE_DATABASE_EMULATOR_HOST",hv={};let AU=!1;function IU(e,t,n,i){const o=t.lastIndexOf(":"),l=t.substring(0,o),u=Qa(l);e.repoInfo_=new wA(t,u,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0,n),i&&(e.authTokenProvider_=i)}function DU(e,t,n,i,o){let l=i||e.options.databaseURL;l===void 0&&(e.options.projectId||_i("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),en("Using default host for project ",e.options.projectId),l=`${e.options.projectId}-default-rtdb.firebaseio.com`);let u=fE(l,o),f=u.repoInfo,p;typeof process<"u"&&Nw&&(p=Nw[RU]),p?(l=`http://${p}?ns=${f.namespace}`,u=fE(l,o),f=u.repoInfo):u.repoInfo.secure;const h=new H3(e.name,e.options,t);rU("Invalid Firebase Database URL",u),Ye(u.path)||_i("Database URL must point to the root of a Firebase Database (not including a child path).");const y=kU(f,e,h,new B3(e,n));return new NU(y,e)}function OU(e,t){const n=hv[t];(!n||n[e.key]!==e)&&_i(`Database ${t}(${e.repoInfo_}) has already been deleted.`),gU(e),delete n[e.key]}function kU(e,t,n,i){let o=hv[t.name];o||(o={},hv[t.name]=o);let l=o[e.toURLString()];return l&&_i("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new lU(e,AU,n,i),o[e.toURLString()]=l,l}class NU{constructor(t,n){this._repoInternal=t,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(cU(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ei(this._repo,Xe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(OU(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&_i("Cannot call "+t+" on a deleted database.")}}function MU(e=t_(),t){const n=Xa(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const i=EP("database");i&&LU(n,...i)}return n}function LU(e,t,n,i={}){e=Wt(e),e._checkNotDeleted("useEmulator");const o=`${t}:${n}`,l=e._repoInternal;if(e._instanceStarted){if(o===e._repoInternal.repoInfo_.host&&mo(i,l.repoInfo_.emulatorOptions))return;_i("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let u;if(l.repoInfo_.nodeAdmin)i.mockUserToken&&_i('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new Ef(Ef.OWNER);else if(i.mockUserToken){const f=typeof i.mockUserToken=="string"?i.mockUserToken:TP(i.mockUserToken,e.app.options.projectId);u=new Ef(f)}Qa(t)&&(pR(t),mR("Database",!0)),IU(l,o,i,u)}/**
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
 */function PU(e){T3(Za),Mr(new _r("database",(t,{instanceIdentifier:n})=>{const i=t.getProvider("app").getImmediate(),o=t.getProvider("auth-internal"),l=t.getProvider("app-check-internal");return DU(i,o,l,n)},"PUBLIC").setMultipleInstances(!0)),Zn(Mw,Lw,e),Zn(Mw,Lw,"esm2020")}mi.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)};mi.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};PU();var Xs={},ry={},iy={},pE;function Q_(){return pE||(pE=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.getBookableStatus=e.isWaitlistFull=e.isFree=e.WAITLIST_MAX=void 0,e.WAITLIST_MAX=10;const t=o=>o.occupancy<o.max_occupancy;e.isFree=t;const n=o=>o.waiting_count>=e.WAITLIST_MAX;e.isWaitlistFull=n;const i=o=>(0,e.isFree)(o)?"free":(0,e.isWaitlistFull)(o)?"full":"waitlist";e.getBookableStatus=i})(iy)),iy}var Zs={},mE;function K_(){return mE||(mE=1,Object.defineProperty(Zs,"__esModule",{value:!0}),Zs.DEFAULT_STUDIO_ID=Zs.STUDIOS=void 0,Zs.STUDIOS={7248695:{location:"New York",timezone:"America/New_York"},7248663:{location:"London",timezone:"Europe/London"}},Zs.DEFAULT_STUDIO_ID="7248695"),Zs}var gE;function jU(){return gE||(gE=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.getChangeType=e.getWaitlistChangeType=e.classifyMatch=e.matchesAlert=void 0;const t=Q_(),n=K_(),i=(v,_)=>!(_.maxStatus==="free"&&!(0,t.isFree)(v)||_.maxStatus==="waitlist"&&(0,t.isWaitlistFull)(v)),o=(v,_)=>{if(!_.disciplines)return!0;const b=String(v.offering_type.category.id);return _.disciplines.some(x=>String(x)===b)},l=(v,_)=>_.instructors?v.instructors.some(b=>_.instructors.indexOf(String(b.id))!==-1):!0,u=(v,_)=>{if(!_.timeRanges)return!0;const b=n.STUDIOS[_.studioId]?.timezone;if(!b)return!1;const x=new Date(v.starts_at),I=new Date(x.toLocaleString("en-US",{timeZone:"UTC"})),C=new Date(x.toLocaleString("en-US",{timeZone:b})),O=I.getTime()-C.getTime();x.setTime(x.getTime()-O);const M=_.timeRanges[x.getDay()];if(!M)return!1;const R=x.getHours()*60+x.getMinutes();return M.startMin<=R&&M.endMin>=R},f=(v,_)=>i(v,_)&&o(v,_)&&l(v,_)&&u(v,_);e.matchesAlert=f;const p=(v,_)=>{const b=[];return i(v,_)||b.push("status"),o(v,_)||b.push("discipline"),l(v,_)||b.push("instructor"),u(v,_)||b.push("time"),b.length===0?{type:"match"}:b.length===1?{type:"near-miss",reason:b[0]}:{type:"skipped"}};e.classifyMatch=p;const h=(v,_,b)=>!v.waitlistAlerts||_.waiting_count===b.waiting_count||!o(b,v)||!l(b,v)||!u(b,v)||v.watchedClassIds&&v.watchedClassIds.length>0&&v.watchedClassIds.indexOf(String(b.id))===-1?null:"waitlist_changed";e.getWaitlistChangeType=h;const y=(v,_,b)=>(0,e.matchesAlert)(b,v)?v.maxStatus==="free"&&!(0,t.isFree)(_)&&(0,t.isFree)(b)?"became_free":v.maxStatus==="waitlist"&&(0,t.isWaitlistFull)(_)&&!(0,t.isWaitlistFull)(b)?"waitlist_opened":null:null;e.getChangeType=y})(ry)),ry}var Js={},yE;function $U(){if(yE)return Js;yE=1,Object.defineProperty(Js,"__esModule",{value:!0}),Js.classifySnapshotMatch=Js.buildSnapshot=void 0;const e=Q_(),t=K_(),n=(l,u=Date.now())=>({snapshotAt:u,starts_at:l.starts_at,instructors:l.instructors.map(({id:f,name:p})=>({id:String(f),name:p})),disciplineId:String(l.offering_type.category.id),occupancy:l.occupancy,maxOccupancy:l.max_occupancy,waitingCount:l.waiting_count,status:(0,e.getBookableStatus)(l),name:l.name});Js.buildSnapshot=n;const i=(l,u)=>{if(!u.timeRanges)return!0;const f=t.STUDIOS[u.studioId]?.timezone;if(!f)return!1;const p=new Date(l.starts_at),h=new Date(p.toLocaleString("en-US",{timeZone:"UTC"})),y=new Date(p.toLocaleString("en-US",{timeZone:f})),v=h.getTime()-y.getTime();p.setTime(p.getTime()-v);const _=u.timeRanges[p.getDay()];if(!_)return!1;const b=p.getHours()*60+p.getMinutes();return _.startMin<=b&&_.endMin>=b},o=(l,u)=>{const f=[];return(u.maxStatus==="free"&&l.status!=="free"||u.maxStatus==="waitlist"&&l.status==="full")&&f.push("status"),u.disciplines&&u.disciplines.map(String).indexOf(l.disciplineId)===-1&&f.push("discipline"),u.instructors&&!l.instructors.some(h=>u.instructors.indexOf(h.id)!==-1)&&f.push("instructor"),i(l,u)||f.push("time"),f.length===0?{type:"match"}:f.length===1?{type:"near-miss",reason:f[0]}:{type:"skipped"}};return Js.classifySnapshotMatch=o,Js}var sy={},vE;function UU(){return vE||(vE=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.fetchAllPelotonPages=e.rebasePelotonUrl=e.buildEventsUrl=e.getPelotonHeaders=e.PELOTON_CORS_PROXY=e.PELOTON_API_BASE=void 0,e.PELOTON_API_BASE="https://schedule.studio.onepeloton.com/api/v2",e.PELOTON_CORS_PROXY="https://cors.abbondanzo.workers.dev";const t=l=>({"Teamup-Request-Mode":"customer","Teamup-Provider-ID":l});e.getPelotonHeaders=t;const n=l=>{const{localStartsAtGte:u=new Date,localStartsAtLte:f,fields:p,expand:h,corsProxy:y=!1}=l,v=y?`${e.PELOTON_CORS_PROXY}/${e.PELOTON_API_BASE}`:e.PELOTON_API_BASE,_=new URLSearchParams({local_starts_at_gte:u.toISOString().replace("Z",""),page_size:"500",sort:"start"});return p&&p.length>0&&_.set("fields",p.join(",")),h&&h.length>0&&_.set("expand",h.join(",")),f&&_.set("local_starts_at_lte",f.toISOString().replace("Z","")),`${v}/events?${_}`};e.buildEventsUrl=n;const i=(l,u=!1)=>{const{search:f}=new URL(l);return`${u?`${e.PELOTON_CORS_PROXY}/${e.PELOTON_API_BASE}`:e.PELOTON_API_BASE}/events${f}`};e.rebasePelotonUrl=i;const o=async(l,u,f=!1)=>{const p=await u(l);if(!p.next)return p.results;const h=[...p.results];let y=(0,e.rebasePelotonUrl)(p.next,f);for(;y;){const v=await u(y);h.push(...v.results),y=v.next?(0,e.rebasePelotonUrl)(v.next,f):null}return h};e.fetchAllPelotonPages=o})(sy)),sy}var oy={},_E;function zU(){return _E||(_E=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isBookableStatus=e.BOOKABLE_STATUS_KEYS=void 0,e.BOOKABLE_STATUS_KEYS=["free","waitlist","full"];const t=n=>e.BOOKABLE_STATUS_KEYS.indexOf(n)!==-1;e.isBookableStatus=t})(oy)),oy}var ay={},bE;function BU(){return bE||(bE=1,Object.defineProperty(ay,"__esModule",{value:!0})),ay}var dc={},SE;function HU(){return SE||(SE=1,Object.defineProperty(dc,"__esModule",{value:!0}),dc.PATHS=void 0,dc.PATHS={alerts:e=>`alerts/${e}`,alert:(e,t)=>`alerts/${e}/${t}`,alertPreferences:e=>`alertPreferences/${e}`,messagingTokens:e=>`messagingTokens/${e}`,messagingToken:(e,t)=>`messagingTokens/${e}/${t}`,classHistory:e=>`classHistory/${e}`,classSnapshot:(e,t)=>`classHistory/${e}/${t}`}),dc}var eo={},xE;function FU(){if(xE)return eo;xE=1,Object.defineProperty(eo,"__esModule",{value:!0}),eo.isNotEmpty=eo.isEmpty=void 0;const e=n=>n==null;eo.isEmpty=e;const t=n=>n!=null;return eo.isNotEmpty=t,eo}var ly={},wE;function qU(){return wE||(wE=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isAllDay=e.DEFAULT_TIME_RANGE=e.SPECIFIC_DEFAULT_TIME_RANGE=e.ALL_DAY_TIME_RANGE=void 0,e.ALL_DAY_TIME_RANGE={startMin:0,endMin:1440},e.SPECIFIC_DEFAULT_TIME_RANGE={startMin:420,endMin:1140},e.DEFAULT_TIME_RANGE=e.ALL_DAY_TIME_RANGE;const t=n=>n.startMin===e.ALL_DAY_TIME_RANGE.startMin&&n.endMin===e.ALL_DAY_TIME_RANGE.endMin;e.isAllDay=t})(ly)),ly}var EE;function VU(){return EE||(EE=1,(function(e){var t=Xs&&Xs.__createBinding||(Object.create?(function(i,o,l,u){u===void 0&&(u=l);var f=Object.getOwnPropertyDescriptor(o,l);(!f||("get"in f?!o.__esModule:f.writable||f.configurable))&&(f={enumerable:!0,get:function(){return o[l]}}),Object.defineProperty(i,u,f)}):(function(i,o,l,u){u===void 0&&(u=l),i[u]=o[l]})),n=Xs&&Xs.__exportStar||function(i,o){for(var l in i)l!=="default"&&!Object.prototype.hasOwnProperty.call(o,l)&&t(o,i,l)};Object.defineProperty(e,"__esModule",{value:!0}),n(jU(),e),n($U(),e),n(UU(),e),n(zU(),e),n(BU(),e),n(Q_(),e),n(HU(),e),n(FU(),e),n(K_(),e),n(qU(),e)})(Xs)),Xs}var Ce=VU();const xn=Bh(()=>MU(Dc)),TI=async(e,t)=>{const n=xn;if(!n)throw new Error("No Firebase database connection to use");const i=ir(n,Ce.PATHS.messagingToken(e,t));await xI(i)},TE=async(e,t)=>{const n=xn;if(!n)throw new Error("No Firebase database connection to use");const i=ir(n,Ce.PATHS.messagingToken(e,t)),o={timestamp:new Date().getTime(),userAgent:navigator.userAgent};await Y_(i,o)},GU=({children:e})=>{const[t,n]=E.useState();E.useEffect(()=>{if(xa){const u=w6(xa,f=>{console.log("[MessagingProvider] Received message ",f);const p=f.notification?.title??f.data?.title,h=f.notification?.body??f.data?.body;p&&new Notification(p,{body:h})});return()=>{u()}}return()=>{}},[]);const i=et(vu);E.useEffect(()=>{xa&&i&&vw().then(u=>(n(u),TE(i,u))).catch(u=>{Nr(u)})},[i]);const o=E.useCallback(()=>{xa&&i&&vw().then(u=>(n(u),TE(i,u))).catch(u=>{Nr(u)})},[i]);E.useEffect(()=>{const u=()=>{document.visibilityState==="visible"&&o()};return document.addEventListener("visibilitychange",u),()=>document.removeEventListener("visibilitychange",u)},[o]);const l=E.useCallback(async()=>{t&&i&&(await TI(i,t),n(void 0))},[t,i]);return g.jsx(_u.Provider,{value:{token:t,refreshToken:o,deleteToken:l},children:e})},X_=60,Z_=e=>e.session.state!=="fulfilled"?!1:e.session.data?.isAdmin===!0,nt={CLASS_LIST:"/class-list",ABOUT:"/about",SIGN_IN:"/sign-in",ALERTS:"/alerts",ALERTS_EDITOR:"/alerts/edit",ALERTS_SIMULATION:"/alerts/:alertId/test",STATS:"/stats",WAITLIST_ALERT:"/waitlist-alert"},WU=e=>`/alerts/${e}/test`,CI=({size:e=22})=>g.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[g.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M 7.556 3.681 C 8.185 3.199 8.927 2.837 9.796 2.612 C 9.786 2.524 9.781 2.435 9.781 2.345 C 9.781 1.089 10.8 0.072 12.055 0.072 C 13.311 0.072 14.328 1.089 14.328 2.345 C 14.328 2.435 14.323 2.524 14.313 2.612 C 15.181 2.837 15.925 3.199 16.553 3.681 C 17.662 4.533 18.304 5.677 18.683 6.817 C 19.062 7.948 19.198 9.126 19.264 10.119 C 19.29 10.523 19.308 10.91 19.321 11.252 L 19.331 11.482 C 19.349 11.893 19.368 12.199 19.398 12.425 C 19.62 14.086 19.895 15.252 20.289 16.183 C 20.673 17.094 21.187 17.828 21.952 18.592 C 22.277 18.917 22.374 19.406 22.198 19.831 C 22.023 20.256 21.609 20.532 21.148 20.532 L 14.025 20.532 C 14.218 20.867 14.328 21.255 14.328 21.668 C 14.328 22.925 13.311 23.943 12.055 23.943 C 10.8 23.943 9.781 22.925 9.781 21.668 C 9.781 21.255 9.892 20.867 10.086 20.532 L 2.961 20.532 C 2.502 20.532 2.087 20.256 1.911 19.831 C 1.735 19.406 1.832 18.917 2.157 18.592 C 2.923 17.826 3.437 17.098 3.819 16.19 C 4.213 15.262 4.488 14.099 4.711 12.425 C 4.742 12.199 4.76 11.893 4.777 11.482 L 4.787 11.252 C 4.802 10.91 4.818 10.523 4.844 10.119 C 4.911 9.126 5.048 7.948 5.424 6.817 C 5.805 5.677 6.447 4.533 7.556 3.681 Z M 5.312 18.259 C 5.537 17.889 5.736 17.497 5.914 17.075 C 6.421 15.879 6.73 14.485 6.965 12.727 C 7.011 12.384 7.032 11.98 7.049 11.581 L 7.06 11.337 C 7.074 10.996 7.089 10.644 7.113 10.272 C 7.175 9.347 7.296 8.394 7.582 7.536 C 7.865 6.686 8.292 5.982 8.941 5.484 C 9.582 4.992 10.546 4.618 12.055 4.618 C 13.564 4.618 14.527 4.992 15.167 5.484 C 15.816 5.982 16.245 6.686 16.528 7.536 C 16.814 8.394 16.934 9.347 16.997 10.272 C 17.021 10.644 17.036 10.996 17.05 11.337 L 17.061 11.581 C 17.077 11.98 17.098 12.384 17.144 12.727 C 17.377 14.475 17.688 15.867 18.194 17.066 C 18.373 17.491 18.573 17.884 18.799 18.259 L 5.312 18.259 Z",fill:"currentColor"}),g.jsx("path",{d:"M 15.285 7.952 L 16.425 5.973 C 16.754 5.392 16.56 4.649 15.98 4.318 C 15.402 3.986 14.657 4.18 14.326 4.761 L 13.179 6.741 C 10.743 5.973 8.016 6.97 6.686 9.274 C 5.838 10.74 5.736 12.426 6.25 13.905 L 8.359 10.243 C 8.359 10.243 8.359 10.243 8.359 10.243 C 8.841 9.403 9.63 8.802 10.568 8.551 C 11.506 8.296 12.482 8.427 13.323 8.917 C 15.056 9.918 15.655 12.146 14.652 13.877 C 13.648 15.611 11.428 16.21 9.689 15.206 L 10.9 13.109 C 11.479 13.44 12.222 13.247 12.555 12.666 C 12.886 12.087 12.69 11.345 12.111 11.013 C 11.532 10.68 10.788 10.877 10.457 11.454 L 6.602 18.144 C 6.269 18.725 6.464 19.466 7.044 19.8 C 7.624 20.13 8.367 19.935 8.699 19.355 L 9.846 17.377 C 12.281 18.144 15.009 17.149 16.338 14.842 C 17.666 12.543 17.165 9.685 15.285 7.952 Z",fill:"currentColor",style:{strokeWidth:"0.5px",stroke:"currentColor"}})]});function RI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const AI=RI,II=new Ro("auth","Firebase",RI());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh=new Jv("@firebase/auth");function YU(e,...t){lh.logLevel<=ct.WARN&&lh.warn(`Auth (${Za}): ${e}`,...t)}function Tf(e,...t){lh.logLevel<=ct.ERROR&&lh.error(`Auth (${Za}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(e,...t){throw eb(e,...t)}function vr(e,...t){return eb(e,...t)}function J_(e,t,n){const i={...AI(),[t]:n};return new Ro("auth","Firebase",i).create(t,{appName:e.name})}function gi(e){return J_(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function QU(e,t,n){const i=n;if(!(t instanceof i))throw i.name!==t.constructor.name&&nr(e,"argument-error"),J_(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function eb(e,...t){if(typeof e!="string"){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return II.create(e,...t)}function ke(e,t,...n){if(!e)throw eb(t,...n)}function fi(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Tf(t),new Error(t)}function bi(e,t){e||fi(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv(){return typeof self<"u"&&self.location?.href||""}function KU(){return CE()==="http:"||CE()==="https:"}function CE(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XU(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(KU()||IP()||"connection"in navigator)?navigator.onLine:!0}function ZU(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(t,n){this.shortDelay=t,this.longDelay=n,bi(n>t,"Short delay should be less than long delay!"),this.isMobile=Zv()||gR()}get(){return XU()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tb(e,t){bi(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{static initialize(t,n,i){this.fetchImpl=t,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;fi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;fi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;fi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JU={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ez=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],tz=new Cu(3e4,6e4);function Ts(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function Cs(e,t,n,i,o={}){return OI(e,o,async()=>{let l={},u={};i&&(t==="GET"?u=i:l={body:JSON.stringify(i)});const f=Ka({key:e.config.apiKey,...u}).slice(1),p=await e._getAdditionalHeaders();p["Content-Type"]="application/json",e.languageCode&&(p["X-Firebase-Locale"]=e.languageCode);const h={method:t,headers:p,...l};return AP()||(h.referrerPolicy="no-referrer"),e.emulatorConfig&&Qa(e.emulatorConfig.host)&&(h.credentials="include"),DI.fetch()(await kI(e,e.config.apiHost,n,f),h)})}async function OI(e,t,n){e._canInitEmulator=!1;const i={...JU,...t};try{const o=new rz(e),l=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const u=await l.json();if("needConfirmation"in u)throw nf(e,"account-exists-with-different-credential",u);if(l.ok&&!("errorMessage"in u))return u;{const f=l.ok?u.errorMessage:u.error.message,[p,h]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw nf(e,"credential-already-in-use",u);if(p==="EMAIL_EXISTS")throw nf(e,"email-already-in-use",u);if(p==="USER_DISABLED")throw nf(e,"user-disabled",u);const y=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw J_(e,y,h);nr(e,y)}}catch(o){if(o instanceof xi)throw o;nr(e,"network-request-failed",{message:String(o)})}}async function Ru(e,t,n,i,o={}){const l=await Cs(e,t,n,i,o);return"mfaPendingCredential"in l&&nr(e,"multi-factor-auth-required",{_serverResponse:l}),l}async function kI(e,t,n,i){const o=`${t}${n}?${i}`,l=e,u=l.config.emulator?tb(e.config,o):`${e.config.apiScheme}://${o}`;return ez.includes(n)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(u).toString():u}function nz(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class rz{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(vr(this.auth,"network-request-failed")),tz.get())})}}function nf(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const o=vr(e,t,i);return o.customData._tokenResponse=n,o}function RE(e){return e!==void 0&&e.enterprise!==void 0}class iz{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return nz(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function sz(e,t){return Cs(e,"GET","/v2/recaptchaConfig",Ts(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oz(e,t){return Cs(e,"POST","/v1/accounts:delete",t)}async function ch(e,t){return Cs(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $c(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function az(e,t=!1){const n=Wt(e),i=await n.getIdToken(t),o=nb(i);ke(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,u=l?.sign_in_provider;return{claims:o,token:i,authTime:$c(cy(o.auth_time)),issuedAtTime:$c(cy(o.iat)),expirationTime:$c(cy(o.exp)),signInProvider:u||null,signInSecondFactor:l?.sign_in_second_factor||null}}function cy(e){return Number(e)*1e3}function nb(e){const[t,n,i]=e.split(".");if(t===void 0||n===void 0||i===void 0)return Tf("JWT malformed, contained fewer than 3 sections"),null;try{const o=zf(n);return o?JSON.parse(o):(Tf("Failed to decode base64 JWT payload"),null)}catch(o){return Tf("Caught error parsing JWT payload as JSON",o?.toString()),null}}function AE(e){const t=nb(e);return ke(t,"internal-error"),ke(typeof t.exp<"u","internal-error"),ke(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lu(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof xi&&lz(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function lz({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cz{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=$c(this.lastLoginAt),this.creationTime=$c(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function uh(e){const t=e.auth,n=await e.getIdToken(),i=await lu(e,ch(t,{idToken:n}));ke(i?.users.length,t,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const l=o.providerUserInfo?.length?NI(o.providerUserInfo):[],u=dz(e.providerData,l),f=e.isAnonymous,p=!(e.email&&o.passwordHash)&&!u?.length,h=f?p:!1,y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new mv(o.createdAt,o.lastLoginAt),isAnonymous:h};Object.assign(e,y)}async function uz(e){const t=Wt(e);await uh(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function dz(e,t){return[...e.filter(i=>!t.some(o=>o.providerId===i.providerId)),...t]}function NI(e){return e.map(({providerId:t,...n})=>({providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fz(e,t){const n=await OI(e,{},async()=>{const i=Ka({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:l}=e.config,u=await kI(e,o,"/v1/token",`key=${l}`),f=await e._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:f,body:i};return e.emulatorConfig&&Qa(e.emulatorConfig.host)&&(p.credentials="include"),DI.fetch()(u,p)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function hz(e,t){return Cs(e,"POST","/v2/accounts:revokeToken",Ts(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){ke(t.idToken,"internal-error"),ke(typeof t.idToken<"u","internal-error"),ke(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):AE(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){ke(t.length!==0,"internal-error");const n=AE(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ke(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:i,refreshToken:o,expiresIn:l}=await fz(t,n);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(t,n,i){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(t,n){const{refreshToken:i,accessToken:o,expirationTime:l}=n,u=new Aa;return i&&(ke(typeof i=="string","internal-error",{appName:t}),u.refreshToken=i),o&&(ke(typeof o=="string","internal-error",{appName:t}),u.accessToken=o),l&&(ke(typeof l=="number","internal-error",{appName:t}),u.expirationTime=l),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Aa,this.toJSON())}_performRefresh(){return fi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(e,t){ke(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class hr{constructor({uid:t,auth:n,stsTokenManager:i,...o}){this.providerId="firebase",this.proactiveRefresh=new cz(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new mv(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await lu(this,this.stsTokenManager.getToken(this.auth,t));return ke(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return az(this,t)}reload(){return uz(this)}_assign(t){this!==t&&(ke(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>({...n})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new hr({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(t){ke(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),n&&await uh(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Nn(this.auth.app))return Promise.reject(gi(this.auth));const t=await this.getIdToken();return await lu(this,oz(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){const i=n.displayName??void 0,o=n.email??void 0,l=n.phoneNumber??void 0,u=n.photoURL??void 0,f=n.tenantId??void 0,p=n._redirectEventId??void 0,h=n.createdAt??void 0,y=n.lastLoginAt??void 0,{uid:v,emailVerified:_,isAnonymous:b,providerData:x,stsTokenManager:I}=n;ke(v&&I,t,"internal-error");const C=Aa.fromJSON(this.name,I);ke(typeof v=="string",t,"internal-error"),Xi(i,t.name),Xi(o,t.name),ke(typeof _=="boolean",t,"internal-error"),ke(typeof b=="boolean",t,"internal-error"),Xi(l,t.name),Xi(u,t.name),Xi(f,t.name),Xi(p,t.name),Xi(h,t.name),Xi(y,t.name);const O=new hr({uid:v,auth:t,email:o,emailVerified:_,displayName:i,isAnonymous:b,photoURL:u,phoneNumber:l,tenantId:f,stsTokenManager:C,createdAt:h,lastLoginAt:y});return x&&Array.isArray(x)&&(O.providerData=x.map(M=>({...M}))),p&&(O._redirectEventId=p),O}static async _fromIdTokenResponse(t,n,i=!1){const o=new Aa;o.updateFromServerResponse(n);const l=new hr({uid:n.localId,auth:t,stsTokenManager:o,isAnonymous:i});return await uh(l),l}static async _fromGetAccountInfoResponse(t,n,i){const o=n.users[0];ke(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?NI(o.providerUserInfo):[],u=!(o.email&&o.passwordHash)&&!l?.length,f=new Aa;f.updateFromIdToken(i);const p=new hr({uid:o.localId,auth:t,stsTokenManager:f,isAnonymous:u}),h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new mv(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!l?.length};return Object.assign(p,h),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE=new Map;function hi(e){bi(e instanceof Function,"Expected a class definition");let t=IE.get(e);return t?(bi(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,IE.set(e,t),t)}/**
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
 */class MI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}MI.type="NONE";const DE=MI;/**
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
 */function Cf(e,t,n){return`firebase:${e}:${t}:${n}`}class Ia{constructor(t,n,i){this.persistence=t,this.auth=n,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=Cf(this.userKey,o.apiKey,l),this.fullPersistenceKey=Cf("persistence",o.apiKey,l),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await ch(this.auth,{idToken:t}).catch(()=>{});return n?hr._fromGetAccountInfoResponse(this.auth,n,t):null}return hr._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,i="authUser"){if(!n.length)return new Ia(hi(DE),t,i);const o=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let l=o[0]||hi(DE);const u=Cf(i,t.config.apiKey,t.name);let f=null;for(const h of n)try{const y=await h._get(u);if(y){let v;if(typeof y=="string"){const _=await ch(t,{idToken:y}).catch(()=>{});if(!_)break;v=await hr._fromGetAccountInfoResponse(t,_,y)}else v=hr._fromJSON(t,y);h!==l&&(f=v),l=h;break}}catch{}const p=o.filter(h=>h._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Ia(l,t,i):(l=p[0],f&&await l._set(u,f.toJSON()),await Promise.all(n.map(async h=>{if(h!==l)try{await h._remove(u)}catch{}})),new Ia(l,t,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OE(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if($I(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(LI(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(zI(t))return"Blackberry";if(BI(t))return"Webos";if(PI(t))return"Safari";if((t.includes("chrome/")||jI(t))&&!t.includes("edge/"))return"Chrome";if(UI(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=e.match(n);if(i?.length===2)return i[1]}return"Other"}function LI(e=fn()){return/firefox\//i.test(e)}function PI(e=fn()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function jI(e=fn()){return/crios\//i.test(e)}function $I(e=fn()){return/iemobile/i.test(e)}function UI(e=fn()){return/android/i.test(e)}function zI(e=fn()){return/blackberry/i.test(e)}function BI(e=fn()){return/webos/i.test(e)}function rb(e=fn()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function pz(e=fn()){return rb(e)&&!!window.navigator?.standalone}function mz(){return DP()&&document.documentMode===10}function HI(e=fn()){return rb(e)||UI(e)||BI(e)||zI(e)||/windows phone/i.test(e)||$I(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FI(e,t=[]){let n;switch(e){case"Browser":n=OE(fn());break;case"Worker":n=`${OE(fn())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Za}/${i}`}/**
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
 */class gz{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const i=l=>new Promise((u,f)=>{try{const p=t(l);u(p)}catch(p){f(p)}});i.onAbort=n,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const i of this.queue)await i(t),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
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
 */async function yz(e,t={}){return Cs(e,"GET","/v2/passwordPolicy",Ts(e,t))}/**
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
 */const vz=6;class _z{constructor(t){const n=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??vz,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=t.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,n),this.validatePasswordCharacterOptions(t,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(t,n){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=t.length>=i),o&&(n.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let o=0;o<t.length;o++)i=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(t,n,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bz{constructor(t,n,i,o){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kE(this),this.idTokenSubscription=new kE(this),this.beforeStateQueue=new gz(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=II,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=hi(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Ia.create(this,t),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await ch(this,{idToken:t}),i=await hr._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){if(Nn(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(u,u))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=this.redirectUser?._redirectEventId,u=i?._redirectEventId,f=await this.tryRedirectSignIn(t);(!l||l===u)&&f?.user&&(i=f.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(l){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ke(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await uh(t)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=ZU()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Nn(this.app))return Promise.reject(gi(this));const n=t?Wt(t):null;return n&&ke(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&ke(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Nn(this.app)?Promise.reject(gi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Nn(this.app)?Promise.reject(gi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(hi(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await yz(this),n=new _z(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Ro("auth","Firebase",t())}onAuthStateChanged(t,n,i){return this.registerStateListener(this.authStateSubscription,t,n,i)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,i){return this.registerStateListener(this.idTokenSubscription,t,n,i)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const i=this.onAuthStateChanged(()=>{i(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await hz(this,i)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(t,n){const i=await this.getOrInitRedirectPersistenceManager(n);return t===null?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&hi(t)||this._popupRedirectResolver;ke(n,this,"argument-error"),this.redirectPersistenceManager=await Ia.create(this,[hi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===t?this._currentUser:this.redirectUser?._redirectEventId===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=this.currentUser?.uid??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,i,o){if(this._deleted)return()=>{};const l=typeof n=="function"?n:n.next.bind(n);let u=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(ke(f,this,"internal-error"),f.then(()=>{u||l(this.currentUser)}),typeof n=="function"){const p=t.addObserver(n,i,o);return()=>{u=!0,p()}}else{const p=t.addObserver(n);return()=>{u=!0,p()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return ke(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=FI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){if(Nn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return t?.error&&YU(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Rs(e){return Wt(e)}class kE{constructor(t){this.auth=t,this.observer=null,this.addObserver=UP(n=>this.observer=n)}get next(){return ke(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ip={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Sz(e){ip=e}function qI(e){return ip.loadJS(e)}function xz(){return ip.recaptchaEnterpriseScript}function wz(){return ip.gapiScript}function Ez(e){return`__${e}${Math.floor(Math.random()*1e6)}`}class Tz{constructor(){this.enterprise=new Cz}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class Cz{ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const Rz="recaptcha-enterprise",VI="NO_RECAPTCHA";class Az{constructor(t){this.type=Rz,this.auth=Rs(t)}async verify(t="verify",n=!1){async function i(l){if(!n){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(u,f)=>{sz(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const h=new iz(p);return l.tenantId==null?l._agentRecaptchaConfig=h:l._tenantRecaptchaConfigs[l.tenantId]=h,u(h.siteKey)}}).catch(p=>{f(p)})})}function o(l,u,f){const p=window.grecaptcha;RE(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:t}).then(h=>{u(h)}).catch(()=>{u(VI)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Tz().execute("siteKey",{action:"verify"}):new Promise((l,u)=>{i(this.auth).then(f=>{if(!n&&RE(window.grecaptcha))o(f,l,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let p=xz();p.length!==0&&(p+=f),qI(p).then(()=>{o(f,l,u)}).catch(h=>{u(h)})}}).catch(f=>{u(f)})})}}async function NE(e,t,n,i=!1,o=!1){const l=new Az(e);let u;if(o)u=VI;else try{u=await l.verify(n)}catch{u=await l.verify(n,!0)}const f={...t};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const p=f.phoneEnrollmentInfo.phoneNumber,h=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:h,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const p=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return i?Object.assign(f,{captchaResp:u}):Object.assign(f,{captchaResponse:u}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function gv(e,t,n,i,o){if(e._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await NE(e,t,n,n==="getOobCode");return i(e,l)}else return i(e,t).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await NE(e,t,n,n==="getOobCode");return i(e,u)}else return Promise.reject(l)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GI(e,t){const n=Xa(e,"auth");if(n.isInitialized()){const o=n.getImmediate(),l=n.getOptions();if(mo(l,t??{}))return o;nr(o,"already-initialized")}return n.initialize({options:t})}function Iz(e,t){const n=t?.persistence||[],i=(Array.isArray(n)?n:[n]).map(hi);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,t?.popupRedirectResolver)}function Dz(e,t,n){const i=Rs(e);ke(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const o=!1,l=WI(t),{host:u,port:f}=Oz(t),p=f===null?"":`:${f}`,h={url:`${l}//${u}${p}/`},y=Object.freeze({host:u,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){ke(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),ke(mo(h,i.config.emulator)&&mo(y,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=h,i.emulatorConfig=y,i.settings.appVerificationDisabledForTesting=!0,Qa(u)?(pR(`${l}//${u}${p}`),mR("Auth",!0)):kz()}function WI(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Oz(e){const t=WI(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:ME(i.substr(l.length+1))}}else{const[l,u]=i.split(":");return{host:l,port:ME(u)}}}function ME(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function kz(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return fi("not implemented")}_getIdTokenResponse(t){return fi("not implemented")}_linkToIdToken(t,n){return fi("not implemented")}_getReauthenticationResolver(t){return fi("not implemented")}}async function Nz(e,t){return Cs(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mz(e,t){return Ru(e,"POST","/v1/accounts:signInWithPassword",Ts(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lz(e,t){return Ru(e,"POST","/v1/accounts:signInWithEmailLink",Ts(e,t))}async function Pz(e,t){return Ru(e,"POST","/v1/accounts:signInWithEmailLink",Ts(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu extends ib{constructor(t,n,i,o=null){super("password",i),this._email=t,this._password=n,this._tenantId=o}static _fromEmailAndPassword(t,n){return new cu(t,n,"password")}static _fromEmailAndCode(t,n,i=null){return new cu(t,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gv(t,n,"signInWithPassword",Mz);case"emailLink":return Lz(t,{email:this._email,oobCode:this._password});default:nr(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gv(t,i,"signUpPassword",Nz);case"emailLink":return Pz(t,{idToken:n,email:this._email,oobCode:this._password});default:nr(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Da(e,t){return Ru(e,"POST","/v1/accounts:signInWithIdp",Ts(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jz="http://localhost";class wo extends ib{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new wo(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):nr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:i,signInMethod:o,...l}=n;if(!i||!o)return null;const u=new wo(i,o);return u.idToken=l.idToken||void 0,u.accessToken=l.accessToken||void 0,u.secret=l.secret,u.nonce=l.nonce,u.pendingToken=l.pendingToken||null,u}_getIdTokenResponse(t){const n=this.buildRequest();return Da(t,n)}_linkToIdToken(t,n){const i=this.buildRequest();return i.idToken=n,Da(t,i)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Da(t,n)}buildRequest(){const t={requestUri:jz,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Ka(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $z(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Uz(e){const t=xc(wc(e)).link,n=t?xc(wc(t)).deep_link_id:null,i=xc(wc(e)).deep_link_id;return(i?xc(wc(i)).link:null)||i||n||t||e}class sb{constructor(t){const n=xc(wc(t)),i=n.apiKey??null,o=n.oobCode??null,l=$z(n.mode??null);ke(i&&o&&l,"argument-error"),this.apiKey=i,this.operation=l,this.code=o,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(t){const n=Uz(t);try{return new sb(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(){this.providerId=il.PROVIDER_ID}static credential(t,n){return cu._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const i=sb.parseLink(n);return ke(i,"argument-error"),cu._fromEmailAndCode(t,i.code,i.tenantId)}}il.PROVIDER_ID="password";il.EMAIL_PASSWORD_SIGN_IN_METHOD="password";il.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class is extends Au{constructor(){super("facebook.com")}static credential(t){return wo._fromParams({providerId:is.PROVIDER_ID,signInMethod:is.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return is.credentialFromTaggedObject(t)}static credentialFromError(t){return is.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return is.credential(t.oauthAccessToken)}catch{return null}}}is.FACEBOOK_SIGN_IN_METHOD="facebook.com";is.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci extends Au{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return wo._fromParams({providerId:ci.PROVIDER_ID,signInMethod:ci.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return ci.credentialFromTaggedObject(t)}static credentialFromError(t){return ci.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:i}=t;if(!n&&!i)return null;try{return ci.credential(n,i)}catch{return null}}}ci.GOOGLE_SIGN_IN_METHOD="google.com";ci.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss extends Au{constructor(){super("github.com")}static credential(t){return wo._fromParams({providerId:ss.PROVIDER_ID,signInMethod:ss.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ss.credentialFromTaggedObject(t)}static credentialFromError(t){return ss.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ss.credential(t.oauthAccessToken)}catch{return null}}}ss.GITHUB_SIGN_IN_METHOD="github.com";ss.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os extends Au{constructor(){super("twitter.com")}static credential(t,n){return wo._fromParams({providerId:os.PROVIDER_ID,signInMethod:os.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return os.credentialFromTaggedObject(t)}static credentialFromError(t){return os.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=t;if(!n||!i)return null;try{return os.credential(n,i)}catch{return null}}}os.TWITTER_SIGN_IN_METHOD="twitter.com";os.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zz(e,t){return Ru(e,"POST","/v1/accounts:signUp",Ts(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,i,o=!1){const l=await hr._fromIdTokenResponse(t,i,o),u=LE(i);return new Eo({user:l,providerId:u,_tokenResponse:i,operationType:n})}static async _forOperation(t,n,i){await t._updateTokensIfNecessary(i,!0);const o=LE(i);return new Eo({user:t,providerId:o,_tokenResponse:i,operationType:n})}}function LE(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh extends xi{constructor(t,n,i,o){super(n.code,n.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,dh.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(t,n,i,o){return new dh(t,n,i,o)}}function YI(e,t,n,i){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?dh._fromErrorAndOperation(e,l,t,i):l})}async function Bz(e,t,n=!1){const i=await lu(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Eo._forOperation(e,"link",i)}/**
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
 */async function Hz(e,t,n=!1){const{auth:i}=e;if(Nn(i.app))return Promise.reject(gi(i));const o="reauthenticate";try{const l=await lu(e,YI(i,o,t,e),n);ke(l.idToken,i,"internal-error");const u=nb(l.idToken);ke(u,i,"internal-error");const{sub:f}=u;return ke(e.uid===f,i,"user-mismatch"),Eo._forOperation(e,o,l)}catch(l){throw l?.code==="auth/user-not-found"&&nr(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QI(e,t,n=!1){if(Nn(e.app))return Promise.reject(gi(e));const i="signIn",o=await YI(e,i,t),l=await Eo._fromIdTokenResponse(e,i,o);return n||await e._updateCurrentUser(l.user),l}async function Fz(e,t){return QI(Rs(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KI(e){const t=Rs(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function qz(e,t,n){if(Nn(e.app))return Promise.reject(gi(e));const i=Rs(e),u=await gv(i,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",zz).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&KI(e),p}),f=await Eo._fromIdTokenResponse(i,"signIn",u);return await i._updateCurrentUser(f.user),f}function Vz(e,t,n){return Nn(e.app)?Promise.reject(gi(e)):Fz(Wt(e),il.credential(t,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&KI(e),i})}function Gz(e,t,n,i){return Wt(e).onIdTokenChanged(t,n,i)}function Wz(e,t,n){return Wt(e).beforeAuthStateChanged(t,n)}function Yz(e,t,n,i){return Wt(e).onAuthStateChanged(t,n,i)}const fh="__sak";/**
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
 */class XI{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(fh,"1"),this.storage.removeItem(fh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qz=1e3,Kz=10;class ZI extends XI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=HI(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),o=this.localCache[n];i!==o&&t(n,o,i)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((u,f,p)=>{this.notifyListeners(u,p)});return}const i=t.key;n?this.detachListener():this.stopPolling();const o=()=>{const u=this.storage.getItem(i);!n&&this.localCache[i]===u||this.notifyListeners(i,u)},l=this.storage.getItem(i);mz()&&l!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,Kz):o()}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const o of Array.from(i))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:i}),!0)})},Qz)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}ZI.type="LOCAL";const Xz=ZI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI extends XI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}JI.type="SESSION";const eD=JI;/**
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
 */function Zz(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class sp{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(o=>o.isListeningto(t));if(n)return n;const i=new sp(t);return this.receivers.push(i),i}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:i,eventType:o,data:l}=n.data,u=this.handlersMap[o];if(!u?.size)return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(u).map(async h=>h(n.origin,l)),p=await Zz(f);n.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}sp.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Jz{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,u;return new Promise((f,p)=>{const h=ab("",20);o.port1.start();const y=setTimeout(()=>{p(new Error("unsupported_event"))},i);u={messageChannel:o,onMessage(v){const _=v;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(y),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(_.data.response);break;default:clearTimeout(y),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(u),o.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:t,eventId:h,data:n},[o.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(){return window}function e8(e){kr().location.href=e}/**
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
 */function tD(){return typeof kr().WorkerGlobalScope<"u"&&typeof kr().importScripts=="function"}async function t8(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function n8(){return navigator?.serviceWorker?.controller||null}function r8(){return tD()?self:null}/**
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
 */const nD="firebaseLocalStorageDb",i8=1,hh="firebaseLocalStorage",rD="fbase_key";class Iu{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function op(e,t){return e.transaction([hh],t?"readwrite":"readonly").objectStore(hh)}function s8(){const e=indexedDB.deleteDatabase(nD);return new Iu(e).toPromise()}function yv(){const e=indexedDB.open(nD,i8);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const i=e.result;try{i.createObjectStore(hh,{keyPath:rD})}catch(o){n(o)}}),e.addEventListener("success",async()=>{const i=e.result;i.objectStoreNames.contains(hh)?t(i):(i.close(),await s8(),t(await yv()))})})}async function PE(e,t,n){const i=op(e,!0).put({[rD]:t,value:n});return new Iu(i).toPromise()}async function o8(e,t){const n=op(e,!1).get(t),i=await new Iu(n).toPromise();return i===void 0?null:i.value}function jE(e,t){const n=op(e,!0).delete(t);return new Iu(n).toPromise()}const a8=800,l8=3;class iD{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yv(),this.db)}async _withRetries(t){let n=0;for(;;)try{const i=await this._openDb();return await t(i)}catch(i){if(n++>l8)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tD()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=sp._getInstance(r8()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await t8(),!this.activeServiceWorker)return;this.sender=new Jz(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&t[0]?.fulfilled&&t[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||n8()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await yv();return await PE(t,fh,"1"),await jE(t,fh),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>PE(i,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(i=>o8(i,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>jE(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const l=op(o,!1).getAll();return new Iu(l).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(t.length!==0)for(const{fbase_key:o,value:l}of t)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const o of Array.from(i))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),a8)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}iD.type="LOCAL";const c8=iD;new Cu(3e4,6e4);/**
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
 */function sD(e,t){return t?hi(t):(ke(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class lb extends ib{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Da(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Da(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Da(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function u8(e){return QI(e.auth,new lb(e),e.bypassAuthState)}function d8(e){const{auth:t,user:n}=e;return ke(n,t,"internal-error"),Hz(n,new lb(e),e.bypassAuthState)}async function f8(e){const{auth:t,user:n}=e;return ke(n,t,"internal-error"),Bz(n,new lb(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oD{constructor(t,n,i,o,l=!1){this.auth=t,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:i,postBody:o,tenantId:l,error:u,type:f}=t;if(u){this.reject(u);return}const p={auth:this.auth,requestUri:n,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(h){this.reject(h)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return u8;case"linkViaPopup":case"linkViaRedirect":return f8;case"reauthViaPopup":case"reauthViaRedirect":return d8;default:nr(this.auth,"internal-error")}}resolve(t){bi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){bi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h8=new Cu(2e3,1e4);async function p8(e,t,n){if(Nn(e.app))return Promise.reject(vr(e,"operation-not-supported-in-this-environment"));const i=Rs(e);QU(e,t,ob);const o=sD(i,n);return new uo(i,"signInViaPopup",t,o).executeNotNull()}class uo extends oD{constructor(t,n,i,o,l){super(t,n,o,l),this.provider=i,this.authWindow=null,this.pollId=null,uo.currentPopupAction&&uo.currentPopupAction.cancel(),uo.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return ke(t,this.auth,"internal-error"),t}async onExecution(){bi(this.filter.length===1,"Popup operations only handle one event");const t=ab();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(vr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,uo.currentPopupAction=null}pollUserCancellation(){const t=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,h8.get())};t()}}uo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m8="pendingRedirect",Rf=new Map;class g8 extends oD{constructor(t,n,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let t=Rf.get(this.auth._key());if(!t){try{const i=await y8(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(i)}catch(n){t=()=>Promise.reject(n)}Rf.set(this.auth._key(),t)}return this.bypassAuthState||Rf.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function y8(e,t){const n=b8(t),i=_8(e);if(!await i._isAvailable())return!1;const o=await i._get(n)==="true";return await i._remove(n),o}function v8(e,t){Rf.set(e._key(),t)}function _8(e){return hi(e._redirectPersistence)}function b8(e){return Cf(m8,e.config.apiKey,e.name)}async function S8(e,t,n=!1){if(Nn(e.app))return Promise.reject(gi(e));const i=Rs(e),o=sD(i,t),u=await new g8(i,o,n).execute();return u&&!n&&(delete u.user._redirectEventId,await i._persistUserIfCurrent(u.user),await i._setRedirectUser(null,t)),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x8=600*1e3;class w8{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(t,i)&&(n=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!E8(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){if(t.error&&!aD(t)){const i=t.error.code?.split("auth/")[1]||"internal-error";n.onError(vr(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const i=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=x8&&this.cachedEventUids.clear(),this.cachedEventUids.has($E(t))}saveEventToCache(t){this.cachedEventUids.add($E(t)),this.lastProcessedEventTime=Date.now()}}function $E(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function aD({type:e,error:t}){return e==="unknown"&&t?.code==="auth/no-auth-event"}function E8(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return aD(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T8(e,t={}){return Cs(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C8=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,R8=/^https?/;async function A8(e){if(e.config.emulator)return;const{authorizedDomains:t}=await T8(e);for(const n of t)try{if(I8(n))return}catch{}nr(e,"unauthorized-domain")}function I8(e){const t=pv(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const u=new URL(e);return u.hostname===""&&i===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&u.hostname===i}if(!R8.test(n))return!1;if(C8.test(e))return i===e;const o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const D8=new Cu(3e4,6e4);function UE(){const e=kr().___jsl;if(e?.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function O8(e){return new Promise((t,n)=>{function i(){UE(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{UE(),n(vr(e,"network-request-failed"))},timeout:D8.get()})}if(kr().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(kr().gapi?.load)i();else{const o=Ez("iframefcb");return kr()[o]=()=>{gapi.load?i():n(vr(e,"network-request-failed"))},qI(`${wz()}?onload=${o}`).catch(l=>n(l))}}).catch(t=>{throw Af=null,t})}let Af=null;function k8(e){return Af=Af||O8(e),Af}/**
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
 */const N8=new Cu(5e3,15e3),M8="__/auth/iframe",L8="emulator/auth/iframe",P8={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},j8=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $8(e){const t=e.config;ke(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?tb(t,L8):`https://${e.config.authDomain}/${M8}`,i={apiKey:t.apiKey,appName:e.name,v:Za},o=j8.get(e.config.apiHost);o&&(i.eid=o);const l=e._getFrameworks();return l.length&&(i.fw=l.join(",")),`${n}?${Ka(i).slice(1)}`}async function U8(e){const t=await k8(e),n=kr().gapi;return ke(n,e,"internal-error"),t.open({where:document.body,url:$8(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:P8,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const u=vr(e,"network-request-failed"),f=kr().setTimeout(()=>{l(u)},N8.get());function p(){kr().clearTimeout(f),o(i)}i.ping(p).then(p,()=>{l(u)})}))}/**
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
 */const z8={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},B8=500,H8=600,F8="_blank",q8="http://localhost";class zE{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function V8(e,t,n,i=B8,o=H8){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),u=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const p={...z8,width:i.toString(),height:o.toString(),top:l,left:u},h=fn().toLowerCase();n&&(f=jI(h)?F8:n),LI(h)&&(t=t||q8,p.scrollbars="yes");const y=Object.entries(p).reduce((_,[b,x])=>`${_}${b}=${x},`,"");if(pz(h)&&f!=="_self")return G8(t||"",f),new zE(null);const v=window.open(t||"",f,y);ke(v,e,"popup-blocked");try{v.focus()}catch{}return new zE(v)}function G8(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const W8="__/auth/handler",Y8="emulator/auth/handler",Q8=encodeURIComponent("fac");async function BE(e,t,n,i,o,l){ke(e.config.authDomain,e,"auth-domain-config-required"),ke(e.config.apiKey,e,"invalid-api-key");const u={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:Za,eventId:o};if(t instanceof ob){t.setDefaultLanguage(e.languageCode),u.providerId=t.providerId||"",By(t.getCustomParameters())||(u.customParameters=JSON.stringify(t.getCustomParameters()));for(const[y,v]of Object.entries({}))u[y]=v}if(t instanceof Au){const y=t.getScopes().filter(v=>v!=="");y.length>0&&(u.scopes=y.join(","))}e.tenantId&&(u.tid=e.tenantId);const f=u;for(const y of Object.keys(f))f[y]===void 0&&delete f[y];const p=await e._getAppCheckToken(),h=p?`#${Q8}=${encodeURIComponent(p)}`:"";return`${K8(e)}?${Ka(f).slice(1)}${h}`}function K8({config:e}){return e.emulator?tb(e,Y8):`https://${e.authDomain}/${W8}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy="webStorageSupport";class X8{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=eD,this._completeRedirectFn=S8,this._overrideRedirectResult=v8}async _openPopup(t,n,i,o){bi(this.eventManagers[t._key()]?.manager,"_initialize() not called before _openPopup()");const l=await BE(t,n,i,pv(),o);return V8(t,l,ab())}async _openRedirect(t,n,i,o){await this._originValidation(t);const l=await BE(t,n,i,pv(),o);return e8(l),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:o,promise:l}=this.eventManagers[n];return o?Promise.resolve(o):(bi(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(t);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(t){const n=await U8(t),i=new w8(t);return n.register("authEvent",o=>(ke(o?.authEvent,t,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=n,i}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(uy,{type:uy},o=>{const l=o?.[0]?.[uy];l!==void 0&&n(!!l),nr(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=A8(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return HI()||PI()||rb()}}const Z8=X8;var HE="@firebase/auth",FE="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J8{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(i=>{t(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ke(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eB(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function tB(e){Mr(new _r("auth",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),l=t.getProvider("app-check-internal"),{apiKey:u,authDomain:f}=i.options;ke(u&&!u.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:u,authDomain:f,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:FI(e)},h=new bz(i,o,l,p);return Iz(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,i)=>{t.getProvider("auth-internal").initialize()})),Mr(new _r("auth-internal",t=>{const n=Rs(t.getProvider("auth").getImmediate());return(i=>new J8(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zn(HE,FE,eB(e)),Zn(HE,FE,"esm2020")}/**
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
 */const nB=300,rB=hR("authIdTokenMaxAge")||nB;let qE=null;const iB=e=>async t=>{const n=t&&await t.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>rB)return;const o=n?.token;qE!==o&&(qE=o,await fetch(e,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function sB(e=t_()){const t=Xa(e,"auth");if(t.isInitialized())return t.getImmediate();const n=GI(e,{popupRedirectResolver:Z8,persistence:[c8,Xz,eD]}),i=hR("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const u=iB(l.toString());Wz(n,u,()=>u(n.currentUser)),Gz(n,f=>u(f))}}const o=dR("auth");return o&&Dz(n,`http://${o}`),n}function oB(){return document.getElementsByTagName("head")?.[0]??document}Sz({loadJS(e){return new Promise((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=o=>{const l=vr("internal-error");l.customData=o,n(l)},i.type="text/javascript",i.charset="UTF-8",oB().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});tB("Browser");const aB=AI,ui=Bh(()=>{if(!Dc)throw new Error("Firebase app not initialized");try{return sB(Dc)}catch{return GI(Dc,{errorMap:aB})}}),lD=E.createContext({isDark:!1,toggle:()=>{}}),lB=T.button`
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
`,cB=T.span`
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
`,cD=()=>{const{isDark:e,toggle:t}=E.useContext(lD);return g.jsxs(lB,{type:"button",role:"switch","aria-checked":e,onClick:t,children:["Dark mode",g.jsx(cB,{$on:e,"aria-hidden":"true"})]})},uB=T(Es)`
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
`,dB=T.div`
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
  margin-bottom: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,fB=T.button`
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
`,hB=()=>{const e=et(el),{deleteToken:t}=E.useContext(_u),n=E.useCallback(async()=>{await t(),await ui?.signOut()},[t]);return e.state==="loading"?null:e.state!=="fulfilled"||!e.data?g.jsx(uB,{to:nt.SIGN_IN,children:"Sign in"}):g.jsxs(g.Fragment,{children:[g.jsx(dB,{children:e.data.displayName}),g.jsx(cD,{}),g.jsx(fB,{type:"button",onClick:n,children:"Sign out"})]})},pB="#181a2f",mB=280,gB=T.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  transition: opacity 0.2s;
  opacity: ${e=>e.$open?1:0};
  pointer-events: ${e=>e.$open?"all":"none"};
  z-index: 10;
`,yB=T.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: ${mB}px;
  max-width: 90vw;
  background-color: ${e=>e.theme.colors.mainSurface};
  z-index: 11;
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(${e=>e.$open?"0":"100%"});
  overflow: hidden;
`,vB=T.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: env(safe-area-inset-top, 0) 16px 0;
  height: calc(60px + env(safe-area-inset-top, 0px));
  background-color: ${pB};
  color: #fff;
  flex-shrink: 0;
`,_B=T(Es)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: inherit;
`,bB=T.span`
  font-size: 15px;
  font-weight: 600;
`,SB=T.button`
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
`,xB=T.nav`
  flex: 1;
  padding: 8px 0;
  overflow-y: auto;
`,rf=T($v)`
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
`,wB=T.div`
  padding: 16px 20px;
  border-top: 1px solid ${e=>e.theme.borderColor};
  flex-shrink: 0;
`,EB=()=>g.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none","aria-hidden":"true",children:g.jsx("path",{d:"M4 4l10 10M14 4L4 14",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})}),TB=({open:e,onClose:t})=>{const n=et(Z_);return g.jsxs(g.Fragment,{children:[g.jsx(gB,{$open:e,onClick:t}),g.jsxs(yB,{$open:e,onClick:i=>i.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":"Navigation menu",children:[g.jsxs(vB,{children:[g.jsxs(_B,{to:nt.CLASS_LIST,onClick:t,children:[g.jsx(CI,{size:20}),g.jsx(bB,{children:"Peloton Alerts"})]}),g.jsx(SB,{onClick:t,"aria-label":"Close menu",children:g.jsx(EB,{})})]}),g.jsxs(xB,{onClick:t,children:[g.jsx(rf,{to:nt.CLASS_LIST,end:!0,children:"Classes"}),g.jsx(rf,{to:nt.ALERTS,children:"Alerts"}),g.jsx(rf,{to:nt.ABOUT,end:!0,children:"FAQ"}),n&&g.jsx(rf,{to:nt.STATS,children:"Stats"})]}),g.jsx(wB,{children:g.jsx(hB,{})})]})]})},CB=T.div`
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
`,RB=({children:e,open:t,onClose:n})=>{const i=E.useRef(null),o=E.useCallback(l=>{l.key==="Escape"&&n()},[n]);return E.useEffect(()=>{if(t)return document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}},[t,o]),E.useEffect(()=>{if(!t)return;const l=f=>{const p=f.target;if(!(p instanceof Node)){n();return}const h=i.current;h&&h.contains(p)||n()},u=setTimeout(()=>{document.addEventListener("click",l,!0)},0);return()=>{clearTimeout(u),document.removeEventListener("click",l,!0)}},[t,n]),t?g.jsx(CB,{ref:i,role:"dialog","aria-modal":"true",children:e}):null},AB=T(Es)`
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
`,IB=T.button`
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
`,DB=T.div`
  position: relative;
`,OB=T.hr`
  margin: 4px 0;
  border: none;
  border-top: 1px solid ${e=>e.theme.borderColor};
`,kB=T.button`
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
`,NB=()=>{const e=et(el),[t,n]=E.useState(!1),{deleteToken:i}=E.useContext(_u),o=E.useCallback(async()=>{await i(),await ui?.signOut()},[i]);if(e.state!=="fulfilled"||!e.data){const l=e.state==="loading";return g.jsx(AB,{to:nt.SIGN_IN,$disabled:l,"aria-disabled":l,tabIndex:l?-1:void 0,children:"Sign in"})}return g.jsxs(DB,{children:[g.jsx(IB,{type:"button",onClick:()=>n(!0),"aria-expanded":t,"aria-haspopup":"dialog",children:e.data.displayName}),g.jsxs(RB,{open:t,onClose:()=>n(!1),children:[g.jsx(cD,{}),g.jsx(OB,{}),g.jsx(kB,{type:"button",onClick:o,children:"Sign out"})]})]})},MB="#181a2f",ap=680,LB=T.nav`
  height: inherit;
  background-color: ${MB};
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

  @media only screen and (min-width: ${ap+1}px) {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
  }
`,PB=T(Es)`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  justify-self: start;
`,jB=T.span`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.01em;
  white-space: nowrap;
`,$B=T.div`
  display: flex;
  align-items: center;
  gap: 2px;

  @media only screen and (max-width: ${ap}px) {
    display: none;
  }
`,sf=T($v)`
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
`,UB=T.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  justify-self: end;

  @media only screen and (max-width: ${ap}px) {
    display: none;
  }
`,zB=T.button`
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

  @media only screen and (max-width: ${ap}px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,BB=()=>g.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:g.jsx("path",{d:"M3 5h14M3 10h14M3 15h14",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})}),HB=()=>{const[e,t]=E.useState(!1),n=et(Z_);return g.jsxs(g.Fragment,{children:[g.jsxs(LB,{children:[g.jsxs(PB,{to:nt.CLASS_LIST,children:[g.jsx(CI,{}),g.jsx(jB,{children:"Peloton Alerts"})]}),g.jsxs($B,{children:[g.jsx(sf,{to:nt.CLASS_LIST,end:!0,children:"Classes"}),g.jsx(sf,{to:nt.ALERTS,children:"Alerts"}),g.jsx(sf,{to:nt.ABOUT,end:!0,children:"FAQ"}),n&&g.jsx(sf,{to:nt.STATS,children:"Stats"})]}),g.jsx(UB,{children:g.jsx(NB,{})}),g.jsx(zB,{type:"button","aria-label":"Open menu",onClick:()=>t(!0),children:g.jsx(BB,{})})]}),g.jsx(TB,{open:e,onClose:()=>t(!1)})]})},FB=T.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`,qB=T.div`
  position: sticky;
  height: calc(${X_}px + env(safe-area-inset-top));
  top: 0;
  z-index: 2;
`,VB=T.div`
  flex: 1;
  background-color: ${e=>e.theme.colors.secondarySurface};
`,hs=({children:e})=>g.jsxs(FB,{children:[g.jsx(qB,{children:g.jsx(HB,{})}),g.jsx(VB,{children:e})]}),Te=(...e)=>nn`
  @media only screen and (max-width: ${t=>t.theme.widths.mobile}px) {
    ${nn(...e)}
  }
`,uD=(...e)=>nn`
  @media only screen and (max-width: ${t=>t.theme.widths.tablet}px) {
    ${nn(...e)}
  }
`,GB=T.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 24px 20px;

  ${Te`
    padding: 16px 12px;
  `}
`,WB=T.div`
  margin-bottom: 20px;
`,YB=T.h1`
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
`,QB=()=>g.jsx(hs,{children:g.jsxs(GB,{children:[g.jsx(WB,{children:g.jsx(YB,{children:"FAQ"})}),g.jsxs(fc,{children:[g.jsx(hc,{children:g.jsx(pc,{children:"What is this?"})}),g.jsx(mc,{children:g.jsxs("p",{children:["A quicker, smarter way to browse"," ",g.jsx("a",{href:"https://studio.onepeloton.com/",target:"_blank",rel:"noreferrer",children:"Peloton Studios"})," ","class reservations. Filter by status (free, waitlist, full), instructor, or discipline — things the official site doesn't support. Classes are fetched directly from Peloton each time you load the page."]})})]}),g.jsxs(fc,{children:[g.jsx(hc,{children:g.jsx(pc,{children:"How do I view classes?"})}),g.jsx(mc,{children:g.jsxs("p",{children:["Open the ",g.jsx(Es,{to:nt.CLASS_LIST,children:"Class List"})," and use the sidebar to set filters or switch between studio locations."]})})]}),g.jsxs(fc,{children:[g.jsx(hc,{children:g.jsx(pc,{children:"Is the class data live?"})}),g.jsx(mc,{children:g.jsx("p",{children:"Yes — data is fetched fresh from Peloton each time you load the page or switch studio. Filters persist across refreshes, unlike the official site."})})]}),g.jsxs(fc,{children:[g.jsx(hc,{children:g.jsx(pc,{children:"When do new classes become available?"})}),g.jsx(mc,{children:g.jsx("p",{children:"New classes typically open at 12:00 pm on Mondays and Thursdays in your studio's local timezone."})})]}),g.jsxs(fc,{children:[g.jsx(hc,{children:g.jsx(pc,{children:"Can I request a feature or report a bug?"})}),g.jsx(mc,{children:g.jsxs("p",{children:["Yes — this project is open source and lives on"," ",g.jsx("a",{href:"https://github.com/Abbondanzo/peloton-reservations",target:"_blank",rel:"noreferrer",children:"GitHub"}),". Open an issue to request a feature, report a bug, or just share feedback. Pull requests are welcome too."]})})]})]})}),Ti=nn`
  border-color: ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  border-style: solid;
  border-width: 1px;
`,cb=nn`
  &:hover {
    background-color: ${e=>e.theme.colors.hoverSurface};
  }
`;nn`
  &:focus {
    background-color: ${e=>e.theme.colors.hoverSurface};
  }
`;const ub=E.createContext({state:"idle"}),KB=e=>{if(!e||typeof e!="object")return!1;const t=e;return typeof t.snapshotAt=="number"&&typeof t.starts_at=="string"&&Array.isArray(t.instructors)&&typeof t.disciplineId=="string"&&typeof t.occupancy=="number"&&typeof t.maxOccupancy=="number"&&typeof t.waitingCount=="number"&&typeof t.status=="string"},XB=e=>{const[t,n]=E.useState({state:"loading"});return E.useEffect(()=>{if(!e){n({state:"fulfilled",data:[]});return}n({state:"loading"});const i=xn;if(!i){n({state:"failed",error:new Error("No database connection")});return}const o=ir(i,Ce.PATHS.classHistory(e)),l=rp(o,u=>{const f=u.val();if(!f){n({state:"fulfilled",data:[]});return}const p=[];for(const[h,y]of Object.entries(f))if(!(!y||typeof y!="object"))for(const v of Object.values(y))KB(v)&&p.push({...v,classId:h});p.sort((h,y)=>y.snapshotAt-h.snapshotAt),n({state:"fulfilled",data:p})},u=>{n({state:"failed",error:u})});return()=>l()},[e]),t},Va=(e,t,n)=>{const i=new Date(e),o=new Intl.DateTimeFormat(void 0,{month:n?"long":"short",timeZone:t}).format(i),l=new Intl.DateTimeFormat(void 0,{day:"numeric",timeZone:t}).format(i);return n?`${new Intl.DateTimeFormat(void 0,{weekday:"long",timeZone:t}).format(i)}, ${o} ${l}`:`${o} ${l}`},ZB=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],JB=(e,t)=>{const n=new Map;for(const i of e){const o=new Date(i.snapshotAt),l=Va(o.toISOString(),t,!0);if(!n.has(l)){const u=new Intl.DateTimeFormat("en-US",{weekday:"long",timeZone:t}).format(o);n.set(l,{dayIndex:ZB.indexOf(u),snapshots:[]})}n.get(l).snapshots.push(i)}return Array.from(n.entries()).map(([i,{dayIndex:o,snapshots:l}])=>({label:i,dayIndex:o,snapshots:l}))},To=(e,t)=>new Intl.DateTimeFormat(void 0,{hour:"numeric",minute:"numeric",timeZone:t}).format(new Date(e)),eH=T.div`
  border: 1px solid ${e=>e.theme.colors.status.free.text}40;
  border-left: 4px solid ${e=>e.theme.colors.status.free.text};
  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.status.free.bg};
  padding: 12px 14px;
`,tH=T.div`
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${e=>e.theme.colors.status.free.text};
  margin-bottom: 6px;
`,nH=T.div`
  font-size: 13px;
  color: ${e=>e.theme.colors.main};
  font-weight: 500;
`,rH=T.div`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
  margin-top: 2px;
`,iH=T.div`
  font-size: 11px;
  color: ${e=>e.theme.colors.secondary};
  opacity: 0.6;
  margin-top: 2px;
`,sH=({snapshot:e,timezone:t})=>{const n=Va(e.starts_at,t,!1),i=To(e.starts_at,t),o=To(new Date(e.snapshotAt).toISOString(),t),l=e.instructors[0]?.name??"Unknown instructor",u=e.maxOccupancy-e.occupancy;return g.jsxs(eH,{children:[g.jsx(tH,{children:"● Would have triggered"}),g.jsxs(nH,{children:[n," ",i,e.name?` · ${e.name}`:""," · ",l]}),g.jsx(rH,{children:e.status==="free"?`Free · ${u} spot${u===1?"":"s"} available`:e.status==="waitlist"?`Waitlist · ${e.waitingCount} waiting`:"Full"}),g.jsxs(iH,{children:["detected at ",o]})]})},oH=T.div`
  border: 1px solid ${e=>e.theme.colors.status.waitlist.text}40;
  border-left: 4px solid ${e=>e.theme.colors.status.waitlist.text};
  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.status.waitlist.bg};
  padding: 12px 14px;
`,aH=T.div`
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${e=>e.theme.colors.status.waitlist.text};
  margin-bottom: 6px;
`,lH=T.div`
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
`,cH=T.div`
  font-size: 11px;
  color: ${e=>e.theme.colors.secondary};
  opacity: 0.6;
  margin-top: 2px;
`,uH={instructor:"wrong instructor",time:"outside your time range",discipline:"wrong discipline",status:"class not bookable"},dH=({snapshot:e,reason:t,timezone:n})=>{const i=Va(e.starts_at,n,!1),o=To(e.starts_at,n),l=To(new Date(e.snapshotAt).toISOString(),n),u=e.instructors[0]?.name??"Unknown instructor";return g.jsxs(oH,{children:[g.jsxs(aH,{children:["◌ Near miss — ",uH[t]]}),g.jsxs(lH,{children:[i," ",o,e.name?` · ${e.name}`:""," · ",u]}),g.jsxs(cH,{children:["detected at ",l]})]})},fH=T.button`
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
`,hH=T.ul`
  margin: 6px 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,pH=T.li`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
  padding: 4px 8px;
  background-color: ${e=>e.theme.colors.secondarySurface};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,mH=T.span`
  font-size: 11px;
  opacity: 0.6;
`,gH=({snapshots:e,timezone:t})=>{const[n,i]=E.useState(!1),o=e.length;return g.jsxs("div",{children:[g.jsxs(fH,{type:"button",onClick:()=>i(l=>!l),children:[g.jsx("span",{children:n?"▾":"▸"}),o," class",o===1?"":"es"," skipped"]}),n&&g.jsx(hH,{children:e.map((l,u)=>{const f=Va(l.starts_at,t,!1),p=To(l.starts_at,t),h=To(new Date(l.snapshotAt).toISOString(),t);return g.jsxs(pH,{children:[g.jsxs("span",{children:[f," ",p,l.name?` · ${l.name}`:"",l.instructors[0]?` · ${l.instructors[0].name}`:""]}),g.jsxs(mH,{children:["detected at ",h]})]},u)})})]})},yH=T.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,vH=T.h3`
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
`,_H=T.span`
  font-size: 11px;
  font-weight: 400;
  color: ${e=>e.theme.colors.secondary};
  opacity: 0.6;
`,bH=({label:e,dayIndex:t,snapshots:n,alert:i,timezone:o})=>{const l=!!i.timeRanges[t],u=[],f=[],p=[];for(const h of n){const y=Ce.classifySnapshotMatch(h,i);y.type==="match"?u.push(h):y.type==="near-miss"?f.push({snapshot:h,reason:y.reason}):p.push(h)}return g.jsxs(yH,{children:[g.jsxs(vH,{children:[e,!l&&g.jsx(_H,{children:"not monitored"})]}),u.map((h,y)=>g.jsx(sH,{snapshot:h,timezone:o},y)),f.map(({snapshot:h,reason:y},v)=>g.jsx(dH,{snapshot:h,reason:y,timezone:o},v)),p.length>0&&g.jsx(gH,{snapshots:p,timezone:o})]})},SH=T.div`
  display: flex;
  gap: 16px;
  padding: 12px 0;
  border-bottom: 1px solid ${e=>e.theme.borderColor};
  flex-wrap: wrap;
`,VE=T.span`
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
`,GE=T.strong`
  color: ${e=>e.$color??e.theme.colors.main};
`,xH=({matchCount:e,nearMissCount:t})=>{const n=qv();return g.jsxs(SH,{children:[g.jsxs(VE,{children:[g.jsx(GE,{$color:n.colors.status.free.text,children:e})," ",e===1?"class":"classes"," would have triggered"]}),g.jsxs(VE,{children:[g.jsx(GE,{$color:n.colors.status.waitlist.text,children:t})," ","near ",t===1?"miss":"misses"]})]})},wH=T.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  ${Ti}
  border-radius: ${e=>e.theme.borderRadius};
  overflow: hidden;
  background-color: ${e=>e.theme.colors.mainSurface};
`,EH=T.div`
  padding: 20px 24px;
  border-bottom: 1px solid ${e=>e.theme.borderColor};

  ${Te`
    padding: 16px;
  `}
`,TH=T.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`,CH=T.button`
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
`,RH=T.button`
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
`,AH=T.h1`
  margin: 0 0 4px;
  font-size: 18px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
`,IH=T.p`
  margin: 0;
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
`,DH=T.div`
  padding: 16px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${Te`
    padding: 12px 16px 16px;
  `}
`,of=T.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
  padding: 32px 0;
`,OH=()=>{const{alertId:e}=jM(),t=ws(),n=E.useContext(ub),[i,o]=E.useState("idle"),l=E.useMemo(()=>n.state!=="fulfilled"?null:n.data.find(C=>C.id===e)??null,[n,e]),u=XB(l?.studioId??null),f=l?Ce.STUDIOS[l.studioId]?.timezone??"UTC":"UTC",p=E.useMemo(()=>!l||u.state!=="fulfilled"?[]:JB(u.data,f),[l,u,f]),{matchCount:h,nearMissCount:y}=E.useMemo(()=>{if(!l||u.state!=="fulfilled")return{matchCount:0,nearMissCount:0};let C=0,O=0;for(const M of u.data){const R=Ce.classifySnapshotMatch(M,l);R.type==="match"?C++:R.type==="near-miss"&&O++}return{matchCount:C,nearMissCount:O}},[l,u]),v=n.state==="loading"||n.state==="idle"||u.state==="loading",_="Notification"in window&&"serviceWorker"in navigator,b=E.useCallback(async()=>{if(_){o("sending");try{if(Notification.permission!=="granted"&&await Notification.requestPermission()!=="granted"){o("idle");return}const C=await navigator.serviceWorker.ready,O=l?Ce.STUDIOS[l.studioId]:null,M="Spot opened up!",R=`${l?.name??"Test alert"} — ${O?.location??"Studio"} · test notification`;await C.showNotification(M,{body:R,icon:"/icons/icon-192x192.png",badge:"/icons/icon-96x96.png",data:{classUrl:"/p/7248695-peloton-studios-new-york/e/99586855-30-min-intervals-ride/"}}),o("sent"),setTimeout(()=>o("idle"),3e3)}catch{o("error"),setTimeout(()=>o("idle"),3e3)}}},[l,_]),x=l?.name??"Alert",I=i==="sending"?"Sending…":i==="sent"?"Sent!":i==="error"?"Error":"Send test notification";return g.jsxs(wH,{children:[g.jsxs(EH,{children:[g.jsx(RH,{type:"button",onClick:()=>t(-1),children:"← Alerts"}),g.jsxs(TH,{children:[g.jsx("div",{children:g.jsxs(AH,{children:[x," — Past 7 Days"]})}),_&&g.jsx(CH,{type:"button",$sent:i==="sent",disabled:i==="sending",onClick:b,title:"Fire a test push notification to verify delivery and the notification URL",children:I})]}),g.jsx(IH,{children:l?`${Ce.STUDIOS[l.studioId]?.location??l.studioId}`:""})]}),g.jsxs(DH,{children:[v&&g.jsx(of,{children:"Loading…"}),!v&&!l&&g.jsx(of,{children:"Alert not found."}),!v&&l&&u.state==="fulfilled"&&g.jsxs(g.Fragment,{children:[g.jsx(xH,{matchCount:h,nearMissCount:y}),p.length===0&&g.jsx(of,{children:"No class history yet. History builds up as the backend detects class changes."}),p.map(({label:C,dayIndex:O,snapshots:M})=>g.jsx(bH,{label:C,dayIndex:O,snapshots:M,alert:l,timezone:f},C))]}),!v&&u.state==="failed"&&g.jsx(of,{children:"Failed to load class history."})]})]})},kH=e=>{try{return window.localStorage.getItem(e)}catch(t){return Nr(t),null}},NH="STUDIO_ID",dD=e=>{const t=kH(NH);return t===null?e:Object.keys(Ce.STUDIOS).includes(t)?t:e},MH={studioId:dD(Ce.DEFAULT_STUDIO_ID)},vv=Kn({name:"studioSelector",initialState:MH,reducers:{setStudioId(e,t){e.studioId=t.payload}}}),{setStudioId:ph}=vv.actions,LH=async(e,t)=>{const n=xn;if(!n)throw new Error("No Firebase database connection to use");const i=(await TU(ir(n,Ce.PATHS.alerts(e)),t)).key;if(!i)throw new Error("Missing ID from insertion operation");return{...t,id:i}},PH=async(e,t)=>{const n=xn;if(!n)throw new Error("No Firebase database connection to use");await wI(ir(n,Ce.PATHS.alert(e,t.id)),t)},jH=T.div`
  display: flex;
  flex-direction: column;
`,$H=T.label`
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,UH=T.input`
  ${Ti}
  padding: 12px 8px;
  font-family: inherit;
  background-color: ${e=>e.theme.colors.mainSurface};
  color: ${e=>e.theme.colors.main};
`,zH=T.span`
  margin-top: 4px;
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,BH=({label:e,hint:t,placeholder:n,value:i,onChange:o})=>{const l=E.useId();return g.jsxs(jH,{children:[g.jsx($H,{htmlFor:l,children:e}),g.jsx(UH,{id:l,placeholder:n,value:i,"aria-describedby":t?`${l}-hint`:void 0,onChange:({target:u})=>o(u.value)}),t&&g.jsx(zH,{id:`${l}-hint`,children:t})]})},HH=T.label`
  ${Ti}
  ${cb}
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
`,FH=T.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,qH=T.span`
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
`,VH=T.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,GH=T.input`
  accent-color: ${e=>e.theme.colors.accent};
`,mh=({name:e,value:t,checked:n,onChange:i,label:o,hint:l,icon:u})=>{const f=E.useId();return g.jsxs(HH,{htmlFor:f,children:[g.jsx(GH,{type:"radio",id:f,name:e,value:t,checked:n,onChange:i}),u,g.jsxs(FH,{children:[g.jsx(qH,{children:o}),l&&g.jsx(VH,{children:l})]})]})},WE=T.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`,YE=T.legend`
  font-weight: 600;
  font-size: 18px;
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,QE=T.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  margin: 0 0 16px;
`,KE=T.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,XE=T.div`
  margin-top: 32px;

  ${Te`
    margin-top: 24px;
  `}
`,WH=Object.entries(Ce.STUDIOS).map(([e,t])=>({id:e,label:t.location})),YH=[{status:"free",label:"Open spots only",hint:"Alert me when a class has available spots"},{status:"waitlist",label:"Open spots or waitlist",hint:"Alert me even if I'd join the waitlist"}],QH=({name:e,onNameChange:t,studioId:n,onStudioChange:i,maxStatus:o,onStatusChange:l})=>g.jsxs("div",{children:[g.jsx(BH,{label:"Alert name (optional)",hint:"Leave blank to auto-generate a name from your filters",placeholder:"e.g. Morning Cycling with Cody",value:e,onChange:t}),g.jsx(XE,{}),g.jsxs(WE,{children:[g.jsx(YE,{children:"Which studio?"}),g.jsx(QE,{children:"Pick the Peloton studio you want to monitor."}),g.jsx(KE,{children:WH.map(u=>g.jsx(mh,{name:"studio",value:u.id,checked:n===u.id,onChange:()=>i(u.id),label:u.label},u.id))})]}),g.jsx(XE,{}),g.jsxs(WE,{children:[g.jsx(YE,{children:"When should we alert you?"}),g.jsx(QE,{children:"Choose whether to include waitlisted classes."}),g.jsx(KE,{children:YH.map(u=>g.jsx(mh,{name:"status",value:u.status,checked:o===u.status,onChange:()=>l(u.status),label:u.label,hint:u.hint},u.status))})]})]}),ZE={Cardio:"#d8ec43",Cycling:"#bbd4f4",Meditation:"#e6d4ff",Rowing:"#cbf293","Outdoor Run":"#a8e6cf","Outdoor Run/Walk":"#94f3d0",Running:"#fde987",Strength:"#ffc0d5",Tread:"#fdbe9f",Walking:"#ffa8a9",Yoga:"#ceffdc"},fD=.2,gh=e=>Math.round(e*(1-fD*2)),KH=e=>Math.round(e*fD),XH=T.div`
  width: ${e=>gh(e.size)}px;
  height: ${e=>gh(e.size)}px;
  border-radius: ${e=>e.size}px;
  background-color: ${e=>e.color};
  padding: ${e=>KH(e.size)}px;
  flex-shrink: 0;
`,ZH=T.img`
  width: ${e=>gh(e.size)}px;
  height: ${e=>gh(e.size)}px;
  display: block;
`,yh=({discipline:e,size:t=32})=>{const n=qv(),i=E.useMemo(()=>{const o=Object.keys(ZE),l=e.name.toLowerCase(),u=o.find(f=>f.toLowerCase()===l)??o.find(f=>{const p=f.toLowerCase();return p.includes(l)||l.includes(p)});if(u)return ZE[u];{const f=`Received unsupported discipline ${e.name}`;return console.log(f),Qv(f),n.colors.secondarySurface}},[e.name,n.colors.secondarySurface]);return g.jsx(XH,{color:i,size:t,children:g.jsx(ZH,{alt:e.name,src:e.iconUrl,size:t,color:i})})},JH=T.img`
  width: ${e=>e.size}px;
  min-width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  overflow: hidden;
  background-color: ${e=>e.theme.colors.secondarySurface};
  border-radius: 50%;
  color: ${e=>e.theme.colors.secondary};
`,db=({instructor:e,size:t=32})=>g.jsx(JH,{src:e.imageUrl,alt:`Profile of ${e.name}`,size:t});var e9=class extends Error{issues;constructor(e){super(e[0].message),this.name="SchemaError",this.issues=e}},hD=(e=>(e.uninitialized="uninitialized",e.pending="pending",e.fulfilled="fulfilled",e.rejected="rejected",e))(hD||{});function JE(e){return{status:e,isUninitialized:e==="uninitialized",isLoading:e==="pending",isSuccess:e==="fulfilled",isError:e==="rejected"}}var eT=vs;function fb(e,t){if(e===t||!(eT(e)&&eT(t)||Array.isArray(e)&&Array.isArray(t)))return t;const n=Object.keys(t),i=Object.keys(e);let o=n.length===i.length;const l=Array.isArray(t)?[]:{};for(const u of n)l[u]=fb(e[u],t[u]),o&&(o=e[u]===l[u]);return o?e:l}function dy(e){let t=0;for(const n in e)t++;return t}var tT=e=>[].concat(...e);function t9(e){return new RegExp("(^|:)//").test(e)}function n9(){return typeof document>"u"?!0:document.visibilityState!=="hidden"}function vh(e){return e!=null}function r9(){return typeof navigator>"u"||navigator.onLine===void 0?!0:navigator.onLine}var i9=e=>e.replace(/\/$/,""),s9=e=>e.replace(/^\//,"");function o9(e,t){if(!e)return t;if(!t)return e;if(t9(t))return t;const n=e.endsWith("/")||!t.startsWith("?")?"/":"";return e=i9(e),t=s9(t),`${e}${n}${t}`}function a9(e,t,n){return e.has(t)?e.get(t):e.set(t,n).get(t)}function _v(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}var bv=()=>new Map,nT=(...e)=>fetch(...e),l9=e=>e.status>=200&&e.status<=299,c9=e=>/ion\/(vnd\.api\+)?json/.test(e.get("content-type")||"");function rT(e){if(!vs(e))return e;const t={...e};for(const[n,i]of Object.entries(t))i===void 0&&delete t[n];return t}function u9({baseUrl:e,prepareHeaders:t=v=>v,fetchFn:n=nT,paramsSerializer:i,isJsonContentType:o=c9,jsonContentType:l="application/json",jsonReplacer:u,timeout:f,responseHandler:p,validateStatus:h,...y}={}){return typeof fetch>"u"&&n===nT&&console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."),async(_,b,x)=>{const{getState:I,extra:C,endpoint:O,forced:M,type:R}=b;let D,{url:N,headers:A=new Headers(y.headers),params:P=void 0,responseHandler:F=p??"json",validateStatus:H=h??l9,timeout:B=f,...z}=typeof _=="string"?{url:_}:_,G,V=b.signal;B&&(G=new AbortController,b.signal.addEventListener("abort",G.abort),V=G.signal);let te={...y,signal:V,...z};A=new Headers(rT(A)),te.headers=await t(A,{getState:I,arg:_,extra:C,endpoint:O,forced:M,type:R,extraOptions:x})||A;const ue=de=>typeof de=="object"&&(vs(de)||Array.isArray(de)||typeof de.toJSON=="function");if(!te.headers.has("content-type")&&ue(te.body)&&te.headers.set("content-type",l),ue(te.body)&&o(te.headers)&&(te.body=JSON.stringify(te.body,u)),P){const de=~N.indexOf("?")?"&":"?",me=i?i(P):new URLSearchParams(rT(P));N+=de+me}N=o9(e,N);const j=new Request(N,te);D={request:new Request(N,te)};let ne,ae=!1,k=G&&setTimeout(()=>{ae=!0,G.abort()},B);try{ne=await n(j)}catch(de){return{error:{status:ae?"TIMEOUT_ERROR":"FETCH_ERROR",error:String(de)},meta:D}}finally{k&&clearTimeout(k),G?.signal.removeEventListener("abort",G.abort)}const X=ne.clone();D.response=X;let le,ie="";try{let de;if(await Promise.all([v(ne,F).then(me=>le=me,me=>de=me),X.text().then(me=>ie=me,()=>{})]),de)throw de}catch(de){return{error:{status:"PARSING_ERROR",originalStatus:ne.status,data:ie,error:String(de)},meta:D}}return H(ne,le)?{data:le,meta:D}:{error:{status:ne.status,data:le},meta:D}};async function v(_,b){if(typeof b=="function")return b(_);if(b==="content-type"&&(b=o(_.headers)?"json":"text"),b==="json"){const x=await _.text();return x.length?JSON.parse(x):null}return _.text()}}var iT=class{constructor(e,t=void 0){this.value=e,this.meta=t}},hb=mr("__rtkq/focused"),pD=mr("__rtkq/unfocused"),pb=mr("__rtkq/online"),mD=mr("__rtkq/offline");function lp(e){return e.type==="query"}function d9(e){return e.type==="mutation"}function cp(e){return e.type==="infinitequery"}function _h(e){return lp(e)||cp(e)}function mb(e,t,n,i,o,l){return f9(e)?e(t,n,i,o).filter(vh).map(Sv).map(l):Array.isArray(e)?e.map(Sv).map(l):[]}function f9(e){return typeof e=="function"}function Sv(e){return typeof e=="string"?{type:e}:e}function h9(e,t){return e.catch(t)}var uu=Symbol("forceQueryFn"),xv=e=>typeof e[uu]=="function";function p9({serializeQueryArgs:e,queryThunk:t,infiniteQueryThunk:n,mutationThunk:i,api:o,context:l,internalState:u}){const{runningQueries:f,runningMutations:p}=u,{unsubscribeQueryResult:h,removeMutationResult:y,updateSubscriptionOptions:v}=o.internalActions;return{buildInitiateQuery:O,buildInitiateInfiniteQuery:M,buildInitiateMutation:R,getRunningQueryThunk:_,getRunningMutationThunk:b,getRunningQueriesThunk:x,getRunningMutationsThunk:I};function _(D,N){return A=>{const P=l.endpointDefinitions[D],F=e({queryArgs:N,endpointDefinition:P,endpointName:D});return f.get(A)?.[F]}}function b(D,N){return A=>p.get(A)?.[N]}function x(){return D=>Object.values(f.get(D)||{}).filter(vh)}function I(){return D=>Object.values(p.get(D)||{}).filter(vh)}function C(D,N){const A=(P,{subscribe:F=!0,forceRefetch:H,subscriptionOptions:B,[uu]:z,...G}={})=>(V,te)=>{const ue=e({queryArgs:P,endpointDefinition:N,endpointName:D});let j;const K={...G,type:"query",subscribe:F,forceRefetch:H,subscriptionOptions:B,endpointName:D,originalArgs:P,queryCacheKey:ue,[uu]:z};if(lp(N))j=t(K);else{const{direction:Ie,initialPageParam:be}=G;j=n({...K,direction:Ie,initialPageParam:be})}const ne=o.endpoints[D].select(P),ae=V(j),k=ne(te()),{requestId:X,abort:le}=ae,ie=k.requestId!==X,de=f.get(V)?.[ue],me=()=>ne(te()),pe=Object.assign(z?ae.then(me):ie&&!de?Promise.resolve(k):Promise.all([de,ae]).then(me),{arg:P,requestId:X,subscriptionOptions:B,queryCacheKey:ue,abort:le,async unwrap(){const Ie=await pe;if(Ie.isError)throw Ie.error;return Ie.data},refetch:()=>V(A(P,{subscribe:!1,forceRefetch:!0})),unsubscribe(){F&&V(h({queryCacheKey:ue,requestId:X}))},updateSubscriptionOptions(Ie){pe.subscriptionOptions=Ie,V(v({endpointName:D,requestId:X,queryCacheKey:ue,options:Ie}))}});if(!de&&!ie&&!z){const Ie=a9(f,V,{});Ie[ue]=pe,pe.then(()=>{delete Ie[ue],dy(Ie)||f.delete(V)})}return pe};return A}function O(D,N){return C(D,N)}function M(D,N){return C(D,N)}function R(D){return(N,{track:A=!0,fixedCacheKey:P}={})=>(F,H)=>{const B=i({type:"mutation",endpointName:D,originalArgs:N,track:A,fixedCacheKey:P}),z=F(B),{requestId:G,abort:V,unwrap:te}=z,ue=h9(z.unwrap().then(ae=>({data:ae})),ae=>({error:ae})),j=()=>{F(y({requestId:G,fixedCacheKey:P}))},K=Object.assign(ue,{arg:z.arg,requestId:G,abort:V,unwrap:te,reset:j}),ne=p.get(F)||{};return p.set(F,ne),ne[G]=K,K.then(()=>{delete ne[G],dy(ne)||p.delete(F)}),P&&(ne[P]=K,K.then(()=>{ne[P]===K&&(delete ne[P],dy(ne)||p.delete(F))})),K}}}var gD=class extends e9{constructor(e,t,n,i){super(e),this.value=t,this.schemaName=n,this._bqMeta=i}},to=(e,t)=>Array.isArray(e)?e.includes(t):!!e;async function no(e,t,n,i){const o=await e["~standard"].validate(t);if(o.issues)throw new gD(o.issues,t,n,i);return o.value}function sT(e){return e}var gc=(e={})=>({...e,[Fh]:!0});function m9({reducerPath:e,baseQuery:t,context:{endpointDefinitions:n},serializeQueryArgs:i,api:o,assertTagType:l,selectors:u,onSchemaFailure:f,catchSchemaFailure:p,skipSchemaValidation:h}){const y=(z,G,V,te)=>(ue,j)=>{const K=n[z],ne=i({queryArgs:G,endpointDefinition:K,endpointName:z});if(ue(o.internalActions.queryResultPatched({queryCacheKey:ne,patches:V})),!te)return;const ae=o.endpoints[z].select(G)(j()),k=mb(K.providesTags,ae.data,void 0,G,{},l);ue(o.internalActions.updateProvidedBy([{queryCacheKey:ne,providedTags:k}]))};function v(z,G,V=0){const te=[G,...z];return V&&te.length>V?te.slice(0,-1):te}function _(z,G,V=0){const te=[...z,G];return V&&te.length>V?te.slice(1):te}const b=(z,G,V,te=!0)=>(ue,j)=>{const ne=o.endpoints[z].select(G)(j()),ae={patches:[],inversePatches:[],undo:()=>ue(o.util.patchQueryData(z,G,ae.inversePatches,te))};if(ne.status==="uninitialized")return ae;let k;if("data"in ne)if(br(ne.data)){const[X,le,ie]=iA(ne.data,V);ae.patches.push(...le),ae.inversePatches.push(...ie),k=X}else k=V(ne.data),ae.patches.push({op:"replace",path:[],value:k}),ae.inversePatches.push({op:"replace",path:[],value:ne.data});return ae.patches.length===0||ue(o.util.patchQueryData(z,G,ae.patches,te)),ae},x=(z,G,V)=>te=>te(o.endpoints[z].initiate(G,{subscribe:!1,forceRefetch:!0,[uu]:()=>({data:V})})),I=(z,G)=>z.query&&z[G]?z[G]:sT,C=async(z,{signal:G,abort:V,rejectWithValue:te,fulfillWithValue:ue,dispatch:j,getState:K,extra:ne})=>{const ae=n[z.endpointName],{metaSchema:k,skipSchemaValidation:X=h}=ae;try{let le=sT;const ie={signal:G,abort:V,dispatch:j,getState:K,extra:ne,endpoint:z.endpointName,type:z.type,forced:z.type==="query"?O(z,K()):void 0,queryCacheKey:z.type==="query"?z.queryCacheKey:void 0},de=z.type==="query"?z[uu]:void 0;let me;const pe=async(be,Oe,Ue,_t)=>{if(Oe==null&&be.pages.length)return Promise.resolve({data:be});const gt={queryArg:z.originalArgs,pageParam:Oe},Ln=await Ie(gt),Et=_t?v:_;return{data:{pages:Et(be.pages,Ln.data,Ue),pageParams:Et(be.pageParams,Oe,Ue)},meta:Ln.meta}};async function Ie(be){let Oe;const{extraOptions:Ue,argSchema:_t,rawResponseSchema:gt,responseSchema:Ln}=ae;if(_t&&!to(X,"arg")&&(be=await no(_t,be,"argSchema",{})),de?Oe=de():ae.query?(le=I(ae,"transformResponse"),Oe=await t(ae.query(be),ie,Ue)):Oe=await ae.queryFn(be,ie,Ue,$r=>t($r,ie,Ue)),typeof process<"u",Oe.error)throw new iT(Oe.error,Oe.meta);let{data:Et}=Oe;gt&&!to(X,"rawResponse")&&(Et=await no(gt,Oe.data,"rawResponseSchema",Oe.meta));let Pn=await le(Et,Oe.meta,be);return Ln&&!to(X,"response")&&(Pn=await no(Ln,Pn,"responseSchema",Oe.meta)),{...Oe,data:Pn}}if(z.type==="query"&&"infiniteQueryOptions"in ae){const{infiniteQueryOptions:be}=ae,{maxPages:Oe=1/0}=be;let Ue;const _t={pages:[],pageParams:[]},gt=u.selectQueryEntry(K(),z.queryCacheKey)?.data,Et=O(z,K())&&!z.direction||!gt?_t:gt;if("direction"in z&&z.direction&&Et.pages.length){const Pn=z.direction==="backward",Yt=(Pn?yD:wv)(be,Et,z.originalArgs);Ue=await pe(Et,Yt,Oe,Pn)}else{const{initialPageParam:Pn=be.initialPageParam}=z,$r=gt?.pageParams??[],Yt=$r[0]??Pn,sl=$r.length;Ue=await pe(Et,Yt,Oe),de&&(Ue={data:Ue.data.pages[0]});for(let As=1;As<sl;As++){const Oo=wv(be,Ue.data,z.originalArgs);Ue=await pe(Ue.data,Oo,Oe)}}me=Ue}else me=await Ie(z.originalArgs);return k&&!to(X,"meta")&&me.meta&&(me.meta=await no(k,me.meta,"metaSchema",me.meta)),ue(me.data,gc({fulfilledTimeStamp:Date.now(),baseQueryMeta:me.meta}))}catch(le){let ie=le;if(ie instanceof iT){let de=I(ae,"transformErrorResponse");const{rawErrorResponseSchema:me,errorResponseSchema:pe}=ae;let{value:Ie,meta:be}=ie;try{me&&!to(X,"rawErrorResponse")&&(Ie=await no(me,Ie,"rawErrorResponseSchema",be)),k&&!to(X,"meta")&&(be=await no(k,be,"metaSchema",be));let Oe=await de(Ie,be,z.originalArgs);return pe&&!to(X,"errorResponse")&&(Oe=await no(pe,Oe,"errorResponseSchema",be)),te(Oe,gc({baseQueryMeta:be}))}catch(Oe){ie=Oe}}try{if(ie instanceof gD){const de={endpoint:z.endpointName,arg:z.originalArgs,type:z.type,queryCacheKey:z.type==="query"?z.queryCacheKey:void 0};ae.onSchemaFailure?.(ie,de),f?.(ie,de);const{catchSchemaFailure:me=p}=ae;if(me)return te(me(ie,de),gc({baseQueryMeta:ie._bqMeta}))}}catch(de){ie=de}throw console.error(ie),ie}};function O(z,G){const V=u.selectQueryEntry(G,z.queryCacheKey),te=u.selectConfig(G).refetchOnMountOrArgChange,ue=V?.fulfilledTimeStamp,j=z.forceRefetch??(z.subscribe&&te);return j?j===!0||(Number(new Date)-Number(ue))/1e3>=j:!1}const M=()=>kw(`${e}/executeQuery`,C,{getPendingMeta({arg:G}){const V=n[G.endpointName];return gc({startedTimeStamp:Date.now(),...cp(V)?{direction:G.direction}:{}})},condition(G,{getState:V}){const te=V(),ue=u.selectQueryEntry(te,G.queryCacheKey),j=ue?.fulfilledTimeStamp,K=G.originalArgs,ne=ue?.originalArgs,ae=n[G.endpointName],k=G.direction;return xv(G)?!0:ue?.status==="pending"?!1:O(G,te)||lp(ae)&&ae?.forceRefetch?.({currentArg:K,previousArg:ne,endpointState:ue,state:te})?!0:!(j&&!k)},dispatchConditionRejection:!0}),R=M(),D=M(),N=kw(`${e}/executeMutation`,C,{getPendingMeta(){return gc({startedTimeStamp:Date.now()})}}),A=z=>"force"in z,P=z=>"ifOlderThan"in z,F=(z,G,V)=>(te,ue)=>{const j=A(V)&&V.force,K=P(V)&&V.ifOlderThan,ne=(k=!0)=>{const X={forceRefetch:k,isPrefetch:!0};return o.endpoints[z].initiate(G,X)},ae=o.endpoints[z].select(G)(ue());if(j)te(ne());else if(K){const k=ae?.fulfilledTimeStamp;if(!k){te(ne());return}(Number(new Date)-Number(new Date(k)))/1e3>=K&&te(ne())}else te(ne(!1))};function H(z){return G=>G?.meta?.arg?.endpointName===z}function B(z,G){return{matchPending:kc(f_(z),H(G)),matchFulfilled:kc(_s(z),H(G)),matchRejected:kc(Ua(z),H(G))}}return{queryThunk:R,mutationThunk:N,infiniteQueryThunk:D,prefetch:F,updateQueryData:b,upsertQueryData:x,patchQueryData:y,buildMatchThunkActions:B}}function wv(e,{pages:t,pageParams:n},i){const o=t.length-1;return e.getNextPageParam(t[o],t,n[o],n,i)}function yD(e,{pages:t,pageParams:n},i){return e.getPreviousPageParam?.(t[0],t,n[0],n,i)}function vD(e,t,n,i){return mb(n[e.meta.arg.endpointName][t],_s(e)?e.payload:void 0,Vh(e)?e.payload:void 0,e.meta.arg.originalArgs,"baseQueryMeta"in e.meta?e.meta.baseQueryMeta:void 0,i)}function af(e,t,n){const i=e[t];i&&n(i)}function du(e){return("arg"in e?e.arg.fixedCacheKey:e.fixedCacheKey)??e.requestId}function oT(e,t,n){const i=e[du(t)];i&&n(i)}var lf={};function g9({reducerPath:e,queryThunk:t,mutationThunk:n,serializeQueryArgs:i,context:{endpointDefinitions:o,apiUid:l,extractRehydrationInfo:u,hasRehydrationInfo:f},assertTagType:p,config:h}){const y=mr(`${e}/resetApiState`);function v(H,B,z,G){H[B.queryCacheKey]??={status:"uninitialized",endpointName:B.endpointName},af(H,B.queryCacheKey,V=>{V.status="pending",V.requestId=z&&V.requestId?V.requestId:G.requestId,B.originalArgs!==void 0&&(V.originalArgs=B.originalArgs),V.startedTimeStamp=G.startedTimeStamp;const te=o[G.arg.endpointName];cp(te)&&"direction"in B&&(V.direction=B.direction)})}function _(H,B,z,G){af(H,B.arg.queryCacheKey,V=>{if(V.requestId!==B.requestId&&!G)return;const{merge:te}=o[B.arg.endpointName];if(V.status="fulfilled",te)if(V.data!==void 0){const{fulfilledTimeStamp:ue,arg:j,baseQueryMeta:K,requestId:ne}=B;let ae=gu(V.data,k=>te(k,z,{arg:j.originalArgs,baseQueryMeta:K,fulfilledTimeStamp:ue,requestId:ne}));V.data=ae}else V.data=z;else V.data=o[B.arg.endpointName].structuralSharing??!0?fb(Lr(V.data)?N6(V.data):V.data,z):z;delete V.error,V.fulfilledTimeStamp=B.fulfilledTimeStamp})}const b=Kn({name:`${e}/queries`,initialState:lf,reducers:{removeQueryResult:{reducer(H,{payload:{queryCacheKey:B}}){delete H[B]},prepare:oc()},cacheEntriesUpserted:{reducer(H,B){for(const z of B.payload){const{queryDescription:G,value:V}=z;v(H,G,!0,{arg:G,requestId:B.meta.requestId,startedTimeStamp:B.meta.timestamp}),_(H,{arg:G,requestId:B.meta.requestId,fulfilledTimeStamp:B.meta.timestamp,baseQueryMeta:{}},V,!0)}},prepare:H=>({payload:H.map(G=>{const{endpointName:V,arg:te,value:ue}=G,j=o[V];return{queryDescription:{type:"query",endpointName:V,originalArgs:G.arg,queryCacheKey:i({queryArgs:te,endpointDefinition:j,endpointName:V})},value:ue}}),meta:{[Fh]:!0,requestId:h_(),timestamp:Date.now()}})},queryResultPatched:{reducer(H,{payload:{queryCacheKey:B,patches:z}}){af(H,B,G=>{G.data=Tw(G.data,z.concat())})},prepare:oc()}},extraReducers(H){H.addCase(t.pending,(B,{meta:z,meta:{arg:G}})=>{const V=xv(G);v(B,G,V,z)}).addCase(t.fulfilled,(B,{meta:z,payload:G})=>{const V=xv(z.arg);_(B,z,G,V)}).addCase(t.rejected,(B,{meta:{condition:z,arg:G,requestId:V},error:te,payload:ue})=>{af(B,G.queryCacheKey,j=>{if(!z){if(j.requestId!==V)return;j.status="rejected",j.error=ue??te}})}).addMatcher(f,(B,z)=>{const{queries:G}=u(z);for(const[V,te]of Object.entries(G))(te?.status==="fulfilled"||te?.status==="rejected")&&(B[V]=te)})}}),x=Kn({name:`${e}/mutations`,initialState:lf,reducers:{removeMutationResult:{reducer(H,{payload:B}){const z=du(B);z in H&&delete H[z]},prepare:oc()}},extraReducers(H){H.addCase(n.pending,(B,{meta:z,meta:{requestId:G,arg:V,startedTimeStamp:te}})=>{V.track&&(B[du(z)]={requestId:G,status:"pending",endpointName:V.endpointName,startedTimeStamp:te})}).addCase(n.fulfilled,(B,{payload:z,meta:G})=>{G.arg.track&&oT(B,G,V=>{V.requestId===G.requestId&&(V.status="fulfilled",V.data=z,V.fulfilledTimeStamp=G.fulfilledTimeStamp)})}).addCase(n.rejected,(B,{payload:z,error:G,meta:V})=>{V.arg.track&&oT(B,V,te=>{te.requestId===V.requestId&&(te.status="rejected",te.error=z??G)})}).addMatcher(f,(B,z)=>{const{mutations:G}=u(z);for(const[V,te]of Object.entries(G))(te?.status==="fulfilled"||te?.status==="rejected")&&V!==te?.requestId&&(B[V]=te)})}}),I={tags:{},keys:{}},C=Kn({name:`${e}/invalidation`,initialState:I,reducers:{updateProvidedBy:{reducer(H,B){for(const{queryCacheKey:z,providedTags:G}of B.payload){O(H,z);for(const{type:V,id:te}of G){const ue=(H.tags[V]??={})[te||"__internal_without_id"]??=[];ue.includes(z)||ue.push(z)}H.keys[z]=G}},prepare:oc()}},extraReducers(H){H.addCase(b.actions.removeQueryResult,(B,{payload:{queryCacheKey:z}})=>{O(B,z)}).addMatcher(f,(B,z)=>{const{provided:G}=u(z);for(const[V,te]of Object.entries(G.tags??{}))for(const[ue,j]of Object.entries(te)){const K=(B.tags[V]??={})[ue||"__internal_without_id"]??=[];for(const ne of j)K.includes(ne)||K.push(ne),B.keys[ne]=G.keys[ne]}}).addMatcher(vi(_s(t),Vh(t)),(B,z)=>{M(B,[z])}).addMatcher(b.actions.cacheEntriesUpserted.match,(B,z)=>{const G=z.payload.map(({queryDescription:V,value:te})=>({type:"UNKNOWN",payload:te,meta:{requestStatus:"fulfilled",requestId:"UNKNOWN",arg:V}}));M(B,G)})}});function O(H,B){const z=H.keys[B]??[];for(const G of z){const V=G.type,te=G.id??"__internal_without_id",ue=H.tags[V]?.[te];ue&&(H.tags[V][te]=ue.filter(j=>j!==B))}delete H.keys[B]}function M(H,B){const z=B.map(G=>{const V=vD(G,"providesTags",o,p),{queryCacheKey:te}=G.meta.arg;return{queryCacheKey:te,providedTags:V}});C.caseReducers.updateProvidedBy(H,C.actions.updateProvidedBy(z))}const R=Kn({name:`${e}/subscriptions`,initialState:lf,reducers:{updateSubscriptionOptions(H,B){},unsubscribeQueryResult(H,B){},internal_getRTKQSubscriptions(){}}}),D=Kn({name:`${e}/internalSubscriptions`,initialState:lf,reducers:{subscriptionsUpdated:{reducer(H,B){return Tw(H,B.payload)},prepare:oc()}}}),N=Kn({name:`${e}/config`,initialState:{online:r9(),focused:n9(),middlewareRegistered:!1,...h},reducers:{middlewareRegistered(H,{payload:B}){H.middlewareRegistered=H.middlewareRegistered==="conflict"||l!==B?"conflict":!0}},extraReducers:H=>{H.addCase(pb,B=>{B.online=!0}).addCase(mD,B=>{B.online=!1}).addCase(hb,B=>{B.focused=!0}).addCase(pD,B=>{B.focused=!1}).addMatcher(f,B=>({...B}))}}),A=XR({queries:b.reducer,mutations:x.reducer,provided:C.reducer,subscriptions:D.reducer,config:N.reducer}),P=(H,B)=>A(y.match(B)?void 0:H,B),F={...N.actions,...b.actions,...R.actions,...D.actions,...x.actions,...C.actions,resetApiState:y};return{reducer:P,actions:F}}var cr=Symbol.for("RTKQ/skipToken"),_D={status:"uninitialized"},aT=gu(_D,()=>{}),lT=gu(_D,()=>{});function y9({serializeQueryArgs:e,reducerPath:t,createSelector:n}){const i=R=>aT,o=R=>lT;return{buildQuerySelector:_,buildInfiniteQuerySelector:b,buildMutationSelector:x,selectInvalidatedBy:I,selectCachedArgsForQuery:C,selectApiState:u,selectQueries:f,selectMutations:h,selectQueryEntry:p,selectConfig:y};function l(R){return{...R,...JE(R.status)}}function u(R){return R[t]}function f(R){return u(R)?.queries}function p(R,D){return f(R)?.[D]}function h(R){return u(R)?.mutations}function y(R){return u(R)?.config}function v(R,D,N){return A=>{if(A===cr)return n(i,N);const P=e({queryArgs:A,endpointDefinition:D,endpointName:R});return n(H=>p(H,P)??aT,N)}}function _(R,D){return v(R,D,l)}function b(R,D){const{infiniteQueryOptions:N}=D;function A(P){const F={...P,...JE(P.status)},{isLoading:H,isError:B,direction:z}=F,G=z==="forward",V=z==="backward";return{...F,hasNextPage:O(N,F.data,F.originalArgs),hasPreviousPage:M(N,F.data,F.originalArgs),isFetchingNextPage:H&&G,isFetchingPreviousPage:H&&V,isFetchNextPageError:B&&G,isFetchPreviousPageError:B&&V}}return v(R,D,A)}function x(){return R=>{let D;return typeof R=="object"?D=du(R)??cr:D=R,n(D===cr?o:P=>u(P)?.mutations?.[D]??lT,l)}}function I(R,D){const N=R[t],A=new Set;for(const P of D.filter(vh).map(Sv)){const F=N.provided.tags[P.type];if(!F)continue;let H=(P.id!==void 0?F[P.id]:tT(Object.values(F)))??[];for(const B of H)A.add(B)}return tT(Array.from(A.values()).map(P=>{const F=N.queries[P];return F?[{queryCacheKey:P,endpointName:F.endpointName,originalArgs:F.originalArgs}]:[]}))}function C(R,D){return Object.values(f(R)).filter(N=>N?.endpointName===D&&N.status!=="uninitialized").map(N=>N.originalArgs)}function O(R,D,N){return D?wv(R,D,N)!=null:!1}function M(R,D,N){return!D||!R.getPreviousPageParam?!1:yD(R,D,N)!=null}}var cT=WeakMap?new WeakMap:void 0,uT=({endpointName:e,queryArgs:t})=>{let n="";const i=cT?.get(t);if(typeof i=="string")n=i;else{const o=JSON.stringify(t,(l,u)=>(u=typeof u=="bigint"?{$bigint:u.toString()}:u,u=vs(u)?Object.keys(u).sort().reduce((f,p)=>(f[p]=u[p],f),{}):u,u));vs(t)&&cT?.set(t,o),n=o}return`${e}(${n})`};function bD(...e){return function(n){const i=Yf(h=>n.extractRehydrationInfo?.(h,{reducerPath:n.reducerPath??"api"})),o={reducerPath:"api",keepUnusedDataFor:60,refetchOnMountOrArgChange:!1,refetchOnFocus:!1,refetchOnReconnect:!1,invalidationBehavior:"delayed",...n,extractRehydrationInfo:i,serializeQueryArgs(h){let y=uT;if("serializeQueryArgs"in h.endpointDefinition){const v=h.endpointDefinition.serializeQueryArgs;y=_=>{const b=v(_);return typeof b=="string"?b:uT({..._,queryArgs:b})}}else n.serializeQueryArgs&&(y=n.serializeQueryArgs);return y(h)},tagTypes:[...n.tagTypes||[]]},l={endpointDefinitions:{},batch(h){h()},apiUid:h_(),extractRehydrationInfo:i,hasRehydrationInfo:Yf(h=>i(h)!=null)},u={injectEndpoints:p,enhanceEndpoints({addTagTypes:h,endpoints:y}){if(h)for(const v of h)o.tagTypes.includes(v)||o.tagTypes.push(v);if(y)for(const[v,_]of Object.entries(y))typeof _=="function"?_(l.endpointDefinitions[v]):Object.assign(l.endpointDefinitions[v]||{},_);return u}},f=e.map(h=>h.init(u,o,l));function p(h){const y=h.endpoints({query:v=>({...v,type:"query"}),mutation:v=>({...v,type:"mutation"}),infiniteQuery:v=>({...v,type:"infinitequery"})});for(const[v,_]of Object.entries(y)){if(h.overrideExisting!==!0&&v in l.endpointDefinitions){if(h.overrideExisting==="throw")throw new Error(gr(39));continue}l.endpointDefinitions[v]=_;for(const b of f)b.injectEndpoint(v,_)}return u}return u.injectEndpoints({endpoints:n.endpoints})}}function si(e,...t){return Object.assign(e,...t)}var v9=({api:e,queryThunk:t,internalState:n,mwApi:i})=>{const o=`${e.reducerPath}/subscriptions`;let l=null,u=null;const{updateSubscriptionOptions:f,unsubscribeQueryResult:p}=e.internalActions,h=(I,C)=>{if(f.match(C)){const{queryCacheKey:M,requestId:R,options:D}=C.payload,N=I.get(M);return N?.has(R)&&N.set(R,D),!0}if(p.match(C)){const{queryCacheKey:M,requestId:R}=C.payload,D=I.get(M);return D&&D.delete(R),!0}if(e.internalActions.removeQueryResult.match(C))return I.delete(C.payload.queryCacheKey),!0;if(t.pending.match(C)){const{meta:{arg:M,requestId:R}}=C,D=_v(I,M.queryCacheKey,bv);return M.subscribe&&D.set(R,M.subscriptionOptions??D.get(R)??{}),!0}let O=!1;if(t.rejected.match(C)){const{meta:{condition:M,arg:R,requestId:D}}=C;if(M&&R.subscribe){const N=_v(I,R.queryCacheKey,bv);N.set(D,R.subscriptionOptions??N.get(D)??{}),O=!0}}return O},y=()=>n.currentSubscriptions,b={getSubscriptions:y,getSubscriptionCount:I=>y().get(I)?.size??0,isRequestSubscribed:(I,C)=>!!y()?.get(I)?.get(C)};function x(I){return JSON.parse(JSON.stringify(Object.fromEntries([...I].map(([C,O])=>[C,Object.fromEntries(O)]))))}return(I,C)=>{if(l||(l=x(n.currentSubscriptions)),e.util.resetApiState.match(I))return l={},n.currentSubscriptions.clear(),u=null,[!0,!1];if(e.internalActions.internal_getRTKQSubscriptions.match(I))return[!1,b];const O=h(n.currentSubscriptions,I);let M=!0;if(O){u||(u=setTimeout(()=>{const N=x(n.currentSubscriptions),[,A]=iA(l,()=>N);C.next(e.internalActions.subscriptionsUpdated(A)),l=N,u=null},500));const R=typeof I.type=="string"&&!!I.type.startsWith(o),D=t.rejected.match(I)&&I.meta.condition&&!!I.meta.arg.subscribe;M=!R&&!D}return[M,!1]}},_9=2147483647/1e3-1,b9=({reducerPath:e,api:t,queryThunk:n,context:i,internalState:o,selectors:{selectQueryEntry:l,selectConfig:u},getRunningQueryThunk:f,mwApi:p})=>{const{removeQueryResult:h,unsubscribeQueryResult:y,cacheEntriesUpserted:v}=t.internalActions,_=o.runningQueries.get(p.dispatch),b=vi(y.match,n.fulfilled,n.rejected,v.match);function x(R){const D=o.currentSubscriptions.get(R);if(!D)return!1;const N=D.size>0,A=_?.[R]!==void 0;return N||A}const I={},C=(R,D,N)=>{const A=D.getState(),P=u(A);if(b(R)){let F;if(v.match(R))F=R.payload.map(H=>H.queryDescription.queryCacheKey);else{const{queryCacheKey:H}=y.match(R)?R.payload:R.meta.arg;F=[H]}O(F,D,P)}if(t.util.resetApiState.match(R))for(const[F,H]of Object.entries(I))H&&clearTimeout(H),delete I[F];if(i.hasRehydrationInfo(R)){const{queries:F}=i.extractRehydrationInfo(R);O(Object.keys(F),D,P)}};function O(R,D,N){const A=D.getState();for(const P of R){const F=l(A,P);F?.endpointName&&M(P,F.endpointName,D,N)}}function M(R,D,N,A){const F=i.endpointDefinitions[D]?.keepUnusedDataFor??A.keepUnusedDataFor;if(F===1/0)return;const H=Math.max(0,Math.min(F,_9));if(!x(R)){const B=I[R];B&&clearTimeout(B),I[R]=setTimeout(()=>{if(!x(R)){const z=l(N.getState(),R);z?.endpointName&&N.dispatch(f(z.endpointName,z.originalArgs))?.abort(),N.dispatch(h({queryCacheKey:R}))}delete I[R]},H*1e3)}}return C},dT=new Error("Promise never resolved before cacheEntryRemoved."),S9=({api:e,reducerPath:t,context:n,queryThunk:i,mutationThunk:o,internalState:l,selectors:{selectQueryEntry:u,selectApiState:f}})=>{const p=ev(i),h=ev(o),y=_s(i,o),v={};function _(O,M,R){const D=v[O];D?.valueResolved&&(D.valueResolved({data:M,meta:R}),delete D.valueResolved)}function b(O){const M=v[O];M&&(delete v[O],M.cacheEntryRemoved())}const x=(O,M,R)=>{const D=I(O);function N(A,P,F,H){const B=u(R,P),z=u(M.getState(),P);!B&&z&&C(A,H,P,M,F)}if(i.pending.match(O))N(O.meta.arg.endpointName,D,O.meta.requestId,O.meta.arg.originalArgs);else if(e.internalActions.cacheEntriesUpserted.match(O))for(const{queryDescription:A,value:P}of O.payload){const{endpointName:F,originalArgs:H,queryCacheKey:B}=A;N(F,B,O.meta.requestId,H),_(B,P,{})}else if(o.pending.match(O))M.getState()[t].mutations[D]&&C(O.meta.arg.endpointName,O.meta.arg.originalArgs,D,M,O.meta.requestId);else if(y(O))_(D,O.payload,O.meta.baseQueryMeta);else if(e.internalActions.removeQueryResult.match(O)||e.internalActions.removeMutationResult.match(O))b(D);else if(e.util.resetApiState.match(O))for(const A of Object.keys(v))b(A)};function I(O){return p(O)?O.meta.arg.queryCacheKey:h(O)?O.meta.arg.fixedCacheKey??O.meta.requestId:e.internalActions.removeQueryResult.match(O)?O.payload.queryCacheKey:e.internalActions.removeMutationResult.match(O)?du(O.payload):""}function C(O,M,R,D,N){const A=n.endpointDefinitions[O],P=A?.onCacheEntryAdded;if(!P)return;const F={},H=new Promise(ue=>{F.cacheEntryRemoved=ue}),B=Promise.race([new Promise(ue=>{F.valueResolved=ue}),H.then(()=>{throw dT})]);B.catch(()=>{}),v[R]=F;const z=e.endpoints[O].select(_h(A)?M:R),G=D.dispatch((ue,j,K)=>K),V={...D,getCacheEntry:()=>z(D.getState()),requestId:N,extra:G,updateCachedData:_h(A)?ue=>D.dispatch(e.util.updateQueryData(O,M,ue)):void 0,cacheDataLoaded:B,cacheEntryRemoved:H},te=P(M,V);Promise.resolve(te).catch(ue=>{if(ue!==dT)throw ue})}return x},x9=({api:e,context:{apiUid:t},reducerPath:n})=>(i,o)=>{e.util.resetApiState.match(i)&&o.dispatch(e.internalActions.middlewareRegistered(t))},w9=({reducerPath:e,context:t,context:{endpointDefinitions:n},mutationThunk:i,queryThunk:o,api:l,assertTagType:u,refetchQuery:f,internalState:p})=>{const{removeQueryResult:h}=l.internalActions,y=vi(_s(i),Vh(i)),v=vi(_s(i,o),Ua(i,o));let _=[];const b=(C,O)=>{y(C)?I(vD(C,"invalidatesTags",n,u),O):v(C)?I([],O):l.util.invalidateTags.match(C)&&I(mb(C.payload,void 0,void 0,void 0,void 0,u),O)};function x(C){const{queries:O,mutations:M}=C;for(const R of[O,M])for(const D in R)if(R[D]?.status==="pending")return!0;return!1}function I(C,O){const M=O.getState(),R=M[e];if(_.push(...C),R.config.invalidationBehavior==="delayed"&&x(R))return;const D=_;if(_=[],D.length===0)return;const N=l.util.selectInvalidatedBy(M,D);t.batch(()=>{const A=Array.from(N.values());for(const{queryCacheKey:P}of A){const F=R.queries[P],H=_v(p.currentSubscriptions,P,bv);F&&(H.size===0?O.dispatch(h({queryCacheKey:P})):F.status!=="uninitialized"&&O.dispatch(f(F)))}})}return b},E9=({reducerPath:e,queryThunk:t,api:n,refetchQuery:i,internalState:o})=>{const{currentPolls:l,currentSubscriptions:u}=o,f=new Set;let p=null;const h=(C,O)=>{(n.internalActions.updateSubscriptionOptions.match(C)||n.internalActions.unsubscribeQueryResult.match(C))&&y(C.payload.queryCacheKey,O),(t.pending.match(C)||t.rejected.match(C)&&C.meta.condition)&&y(C.meta.arg.queryCacheKey,O),(t.fulfilled.match(C)||t.rejected.match(C)&&!C.meta.condition)&&v(C.meta.arg,O),n.util.resetApiState.match(C)&&(x(),p&&(clearTimeout(p),p=null),f.clear())};function y(C,O){f.add(C),p||(p=setTimeout(()=>{for(const M of f)_({queryCacheKey:M},O);f.clear(),p=null},0))}function v({queryCacheKey:C},O){const M=O.getState()[e],R=M.queries[C],D=u.get(C);if(!R||R.status==="uninitialized")return;const{lowestPollingInterval:N,skipPollingIfUnfocused:A}=I(D);if(!Number.isFinite(N))return;const P=l.get(C);P?.timeout&&(clearTimeout(P.timeout),P.timeout=void 0);const F=Date.now()+N;l.set(C,{nextPollTimestamp:F,pollingInterval:N,timeout:setTimeout(()=>{(M.config.focused||!A)&&O.dispatch(i(R)),v({queryCacheKey:C},O)},N)})}function _({queryCacheKey:C},O){const R=O.getState()[e].queries[C],D=u.get(C);if(!R||R.status==="uninitialized")return;const{lowestPollingInterval:N}=I(D);if(!Number.isFinite(N)){b(C);return}const A=l.get(C),P=Date.now()+N;(!A||P<A.nextPollTimestamp)&&v({queryCacheKey:C},O)}function b(C){const O=l.get(C);O?.timeout&&clearTimeout(O.timeout),l.delete(C)}function x(){for(const C of l.keys())b(C)}function I(C=new Map){let O=!1,M=Number.POSITIVE_INFINITY;for(const R of C.values())R.pollingInterval&&(M=Math.min(R.pollingInterval,M),O=R.skipPollingIfUnfocused||O);return{lowestPollingInterval:M,skipPollingIfUnfocused:O}}return h},T9=({api:e,context:t,queryThunk:n,mutationThunk:i})=>{const o=f_(n,i),l=Ua(n,i),u=_s(n,i),f={};return(h,y)=>{if(o(h)){const{requestId:v,arg:{endpointName:_,originalArgs:b}}=h.meta,x=t.endpointDefinitions[_],I=x?.onQueryStarted;if(I){const C={},O=new Promise((N,A)=>{C.resolve=N,C.reject=A});O.catch(()=>{}),f[v]=C;const M=e.endpoints[_].select(_h(x)?b:v),R=y.dispatch((N,A,P)=>P),D={...y,getCacheEntry:()=>M(y.getState()),requestId:v,extra:R,updateCachedData:_h(x)?N=>y.dispatch(e.util.updateQueryData(_,b,N)):void 0,queryFulfilled:O};I(b,D)}}else if(u(h)){const{requestId:v,baseQueryMeta:_}=h.meta;f[v]?.resolve({data:h.payload,meta:_}),delete f[v]}else if(l(h)){const{requestId:v,rejectedWithValue:_,baseQueryMeta:b}=h.meta;f[v]?.reject({error:h.payload??h.error,isUnhandledError:!_,meta:b}),delete f[v]}}},C9=({reducerPath:e,context:t,api:n,refetchQuery:i,internalState:o})=>{const{removeQueryResult:l}=n.internalActions,u=(p,h)=>{hb.match(p)&&f(h,"refetchOnFocus"),pb.match(p)&&f(h,"refetchOnReconnect")};function f(p,h){const y=p.getState()[e],v=y.queries,_=o.currentSubscriptions;t.batch(()=>{for(const b of _.keys()){const x=v[b],I=_.get(b);if(!I||!x)continue;const C=[...I.values()];(C.some(M=>M[h]===!0)||C.every(M=>M[h]===void 0)&&y.config[h])&&(I.size===0?p.dispatch(l({queryCacheKey:b})):x.status!=="uninitialized"&&p.dispatch(i(x)))}})}return u};function R9(e){const{reducerPath:t,queryThunk:n,api:i,context:o,internalState:l}=e,{apiUid:u}=o,f={invalidateTags:mr(`${t}/invalidateTags`)},p=_=>_.type.startsWith(`${t}/`),h=[x9,b9,w9,E9,S9,T9];return{middleware:_=>{let b=!1;const x={...e,internalState:l,refetchQuery:v,isThisApiSliceAction:p,mwApi:_},I=h.map(M=>M(x)),C=v9(x),O=C9(x);return M=>R=>{if(!ZR(R))return M(R);b||(b=!0,_.dispatch(i.internalActions.middlewareRegistered(u)));const D={..._,next:M},N=_.getState(),[A,P]=C(R,D,N);let F;if(A?F=M(R):F=P,_.getState()[t]&&(O(R,D,N),p(R)||o.hasRehydrationInfo(R)))for(const H of I)H(R,D,N);return F}},actions:f};function v(_){return e.api.endpoints[_.endpointName].initiate(_.originalArgs,{subscribe:!1,forceRefetch:!0})}}var fT=Symbol(),SD=({createSelector:e=wi}={})=>({name:fT,init(t,{baseQuery:n,tagTypes:i,reducerPath:o,serializeQueryArgs:l,keepUnusedDataFor:u,refetchOnMountOrArgChange:f,refetchOnFocus:p,refetchOnReconnect:h,invalidationBehavior:y,onSchemaFailure:v,catchSchemaFailure:_,skipSchemaValidation:b},x){F6();const I=pe=>pe;Object.assign(t,{reducerPath:o,endpoints:{},internalActions:{onOnline:pb,onOffline:mD,onFocus:hb,onFocusLost:pD},util:{}});const C=y9({serializeQueryArgs:l,reducerPath:o,createSelector:e}),{selectInvalidatedBy:O,selectCachedArgsForQuery:M,buildQuerySelector:R,buildInfiniteQuerySelector:D,buildMutationSelector:N}=C;si(t.util,{selectInvalidatedBy:O,selectCachedArgsForQuery:M});const{queryThunk:A,infiniteQueryThunk:P,mutationThunk:F,patchQueryData:H,updateQueryData:B,upsertQueryData:z,prefetch:G,buildMatchThunkActions:V}=m9({baseQuery:n,reducerPath:o,context:x,api:t,serializeQueryArgs:l,assertTagType:I,selectors:C,onSchemaFailure:v,catchSchemaFailure:_,skipSchemaValidation:b}),{reducer:te,actions:ue}=g9({context:x,queryThunk:A,mutationThunk:F,serializeQueryArgs:l,reducerPath:o,assertTagType:I,config:{refetchOnFocus:p,refetchOnReconnect:h,refetchOnMountOrArgChange:f,keepUnusedDataFor:u,reducerPath:o,invalidationBehavior:y}});si(t.util,{patchQueryData:H,updateQueryData:B,upsertQueryData:z,prefetch:G,resetApiState:ue.resetApiState,upsertQueryEntries:ue.cacheEntriesUpserted}),si(t.internalActions,ue);const j={currentSubscriptions:new Map,currentPolls:new Map,runningQueries:new Map,runningMutations:new Map},{buildInitiateQuery:K,buildInitiateInfiniteQuery:ne,buildInitiateMutation:ae,getRunningMutationThunk:k,getRunningMutationsThunk:X,getRunningQueriesThunk:le,getRunningQueryThunk:ie}=p9({queryThunk:A,mutationThunk:F,infiniteQueryThunk:P,api:t,serializeQueryArgs:l,context:x,internalState:j});si(t.util,{getRunningMutationThunk:k,getRunningMutationsThunk:X,getRunningQueryThunk:ie,getRunningQueriesThunk:le});const{middleware:de,actions:me}=R9({reducerPath:o,context:x,queryThunk:A,mutationThunk:F,infiniteQueryThunk:P,api:t,assertTagType:I,selectors:C,getRunningQueryThunk:ie,internalState:j});return si(t.util,me),si(t,{reducer:te,middleware:de}),{name:fT,injectEndpoint(pe,Ie){const be=t,Oe=be.endpoints[pe]??={};lp(Ie)&&si(Oe,{name:pe,select:R(pe,Ie),initiate:K(pe,Ie)},V(A,pe)),d9(Ie)&&si(Oe,{name:pe,select:N(),initiate:ae(pe)},V(F,pe)),cp(Ie)&&si(Oe,{name:pe,select:D(pe,Ie),initiate:ne(pe,Ie)},V(A,pe))}}}});SD();function cf(e){return e.replace(e[0],e[0].toUpperCase())}function A9(e){return e.type==="query"}function I9(e){return e.type==="mutation"}function xD(e){return e.type==="infinitequery"}function yc(e,...t){return Object.assign(e,...t)}var fy=Symbol();function hy(e){const t=E.useRef(e),n=E.useMemo(()=>fb(t.current,e),[e]);return E.useEffect(()=>{t.current!==n&&(t.current=n)},[n]),n}function uf(e){const t=E.useRef(e);return E.useEffect(()=>{Tc(t.current,e)||(t.current=e)},[e]),Tc(t.current,e)?t.current:e}var D9=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",O9=D9(),k9=()=>typeof navigator<"u"&&navigator.product==="ReactNative",N9=k9(),M9=()=>O9||N9?E.useLayoutEffect:E.useEffect,L9=M9(),hT=e=>e.isUninitialized?{...e,isUninitialized:!1,isFetching:!0,isLoading:e.data===void 0,status:hD.pending}:e;function py(e,...t){const n={};return t.forEach(i=>{n[i]=e[i]}),n}var my=["data","status","isLoading","isSuccess","isError","error"];function P9({api:e,moduleOptions:{batch:t,hooks:{useDispatch:n,useSelector:i,useStore:o},unstable__sideEffectsInRender:l,createSelector:u},serializeQueryArgs:f,context:p}){const h=l?D=>D():E.useEffect;return{buildQueryHooks:O,buildInfiniteQueryHooks:M,buildMutationHook:R,usePrefetch:_};function y(D,N,A){if(N?.endpointName&&D.isUninitialized){const{endpointName:G}=N,V=p.endpointDefinitions[G];A!==cr&&f({queryArgs:N.originalArgs,endpointDefinition:V,endpointName:G})===f({queryArgs:A,endpointDefinition:V,endpointName:G})&&(N=void 0)}let P=D.isSuccess?D.data:N?.data;P===void 0&&(P=D.data);const F=P!==void 0,H=D.isLoading,B=(!N||N.isLoading||N.isUninitialized)&&!F&&H,z=D.isSuccess||F&&(H&&!N?.isError||D.isUninitialized);return{...D,data:P,currentData:D.data,isFetching:H,isLoading:B,isSuccess:z}}function v(D,N,A){if(N?.endpointName&&D.isUninitialized){const{endpointName:G}=N,V=p.endpointDefinitions[G];A!==cr&&f({queryArgs:N.originalArgs,endpointDefinition:V,endpointName:G})===f({queryArgs:A,endpointDefinition:V,endpointName:G})&&(N=void 0)}let P=D.isSuccess?D.data:N?.data;P===void 0&&(P=D.data);const F=P!==void 0,H=D.isLoading,B=(!N||N.isLoading||N.isUninitialized)&&!F&&H,z=D.isSuccess||H&&F;return{...D,data:P,currentData:D.data,isFetching:H,isLoading:B,isSuccess:z}}function _(D,N){const A=n(),P=uf(N);return E.useCallback((F,H)=>A(e.util.prefetch(D,F,{...P,...H})),[D,A,P])}function b(D,N,{refetchOnReconnect:A,refetchOnFocus:P,refetchOnMountOrArgChange:F,skip:H=!1,pollingInterval:B=0,skipPollingIfUnfocused:z=!1,...G}={}){const{initiate:V}=e.endpoints[D],te=n(),ue=E.useRef(void 0);if(!ue.current){const me=te(e.internalActions.internal_getRTKQSubscriptions());ue.current=me}const j=hy(H?cr:N),K=uf({refetchOnReconnect:A,refetchOnFocus:P,pollingInterval:B,skipPollingIfUnfocused:z}),ne=G.initialPageParam,ae=uf(ne),k=E.useRef(void 0);let{queryCacheKey:X,requestId:le}=k.current||{},ie=!1;X&&le&&(ie=ue.current.isRequestSubscribed(X,le));const de=!ie&&k.current!==void 0;return h(()=>{de&&(k.current=void 0)},[de]),h(()=>{const me=k.current;if(j===cr){me?.unsubscribe(),k.current=void 0;return}const pe=k.current?.subscriptionOptions;if(!me||me.arg!==j){me?.unsubscribe();const Ie=te(V(j,{subscriptionOptions:K,forceRefetch:F,...xD(p.endpointDefinitions[D])?{initialPageParam:ae}:{}}));k.current=Ie}else K!==pe&&me.updateSubscriptionOptions(K)},[te,V,F,j,K,de,ae,D]),[k,te,V,K]}function x(D,N){return(P,{skip:F=!1,selectFromResult:H}={})=>{const{select:B}=e.endpoints[D],z=hy(F?cr:P),G=E.useRef(void 0),V=E.useMemo(()=>u([B(z),(ne,ae)=>ae,ne=>z],N,{memoizeOptions:{resultEqualityCheck:Tc}}),[B,z]),te=E.useMemo(()=>H?u([V],H,{devModeChecks:{identityFunctionCheck:"never"}}):V,[V,H]),ue=i(ne=>te(ne,G.current),Tc),j=o(),K=V(j.getState(),G.current);return L9(()=>{G.current=K},[K]),ue}}function I(D){E.useEffect(()=>()=>{D.current?.unsubscribe?.(),D.current=void 0},[D])}function C(D){if(!D.current)throw new Error(gr(38));return D.current.refetch()}function O(D){const N=(F,H={})=>{const[B]=b(D,F,H);return I(B),E.useMemo(()=>({refetch:()=>C(B)}),[B])},A=({refetchOnReconnect:F,refetchOnFocus:H,pollingInterval:B=0,skipPollingIfUnfocused:z=!1}={})=>{const{initiate:G}=e.endpoints[D],V=n(),[te,ue]=E.useState(fy),j=E.useRef(void 0),K=uf({refetchOnReconnect:F,refetchOnFocus:H,pollingInterval:B,skipPollingIfUnfocused:z});h(()=>{const X=j.current?.subscriptionOptions;K!==X&&j.current?.updateSubscriptionOptions(K)},[K]);const ne=E.useRef(K);h(()=>{ne.current=K},[K]);const ae=E.useCallback(function(X,le=!1){let ie;return t(()=>{j.current?.unsubscribe(),j.current=ie=V(G(X,{subscriptionOptions:ne.current,forceRefetch:!le})),ue(X)}),ie},[V,G]),k=E.useCallback(()=>{j.current?.queryCacheKey&&V(e.internalActions.removeQueryResult({queryCacheKey:j.current?.queryCacheKey}))},[V]);return E.useEffect(()=>()=>{j?.current?.unsubscribe()},[]),E.useEffect(()=>{te!==fy&&!j.current&&ae(te,!0)},[te,ae]),E.useMemo(()=>[ae,te,{reset:k}],[ae,te,k])},P=x(D,y);return{useQueryState:P,useQuerySubscription:N,useLazyQuerySubscription:A,useLazyQuery(F){const[H,B,{reset:z}]=A(F),G=P(B,{...F,skip:B===fy}),V=E.useMemo(()=>({lastArg:B}),[B]);return E.useMemo(()=>[H,{...G,reset:z},V],[H,G,z,V])},useQuery(F,H){const B=N(F,H),z=P(F,{selectFromResult:F===cr||H?.skip?void 0:hT,...H}),G=py(z,...my);return E.useDebugValue(G),E.useMemo(()=>({...z,...B}),[z,B])}}}function M(D){const N=(P,F={})=>{const[H,B,z,G]=b(D,P,F),V=E.useRef(G);h(()=>{V.current=G},[G]);const te=E.useCallback(function(K,ne){let ae;return t(()=>{H.current?.unsubscribe(),H.current=ae=B(z(K,{subscriptionOptions:V.current,direction:ne}))}),ae},[H,B,z]);I(H);const ue=hy(F.skip?cr:P),j=E.useCallback(()=>C(H),[H]);return E.useMemo(()=>({trigger:te,refetch:j,fetchNextPage:()=>te(ue,"forward"),fetchPreviousPage:()=>te(ue,"backward")}),[j,te,ue])},A=x(D,v);return{useInfiniteQueryState:A,useInfiniteQuerySubscription:N,useInfiniteQuery(P,F){const{refetch:H,fetchNextPage:B,fetchPreviousPage:z}=N(P,F),G=A(P,{selectFromResult:P===cr||F?.skip?void 0:hT,...F}),V=py(G,...my,"hasNextPage","hasPreviousPage");return E.useDebugValue(V),E.useMemo(()=>({...G,fetchNextPage:B,fetchPreviousPage:z,refetch:H}),[G,B,z,H])}}}function R(D){return({selectFromResult:N,fixedCacheKey:A}={})=>{const{select:P,initiate:F}=e.endpoints[D],H=n(),[B,z]=E.useState();E.useEffect(()=>()=>{B?.arg.fixedCacheKey||B?.reset()},[B]);const G=E.useCallback(function(X){const le=H(F(X,{fixedCacheKey:A}));return z(le),le},[H,F,A]),{requestId:V}=B||{},te=E.useMemo(()=>P({fixedCacheKey:A,requestId:B?.requestId}),[A,B,P]),ue=E.useMemo(()=>N?u([te],N):te,[N,te]),j=i(ue,Tc),K=A==null?B?.arg.originalArgs:void 0,ne=E.useCallback(()=>{t(()=>{B&&z(void 0),A&&H(e.internalActions.removeMutationResult({requestId:V,fixedCacheKey:A}))})},[H,A,B,V]),ae=py(j,...my,"endpointName");E.useDebugValue(ae);const k=E.useMemo(()=>({...j,originalArgs:K,reset:ne}),[j,K,ne]);return E.useMemo(()=>[G,k],[G,k])}}}var j9=Symbol(),$9=({batch:e=TN,hooks:t={useDispatch:iC,useSelector:sC,useStore:rC},createSelector:n=wi,unstable__sideEffectsInRender:i=!1,...o}={})=>({name:j9,init(l,{serializeQueryArgs:u},f){const p=l,{buildQueryHooks:h,buildInfiniteQueryHooks:y,buildMutationHook:v,usePrefetch:_}=P9({api:l,moduleOptions:{batch:e,hooks:t,unstable__sideEffectsInRender:i,createSelector:n},serializeQueryArgs:u,context:f});return yc(p,{usePrefetch:_}),yc(f,{batch:e}),{injectEndpoint(b,x){if(A9(x)){const{useQuery:I,useLazyQuery:C,useLazyQuerySubscription:O,useQueryState:M,useQuerySubscription:R}=h(b);yc(p.endpoints[b],{useQuery:I,useLazyQuery:C,useLazyQuerySubscription:O,useQueryState:M,useQuerySubscription:R}),l[`use${cf(b)}Query`]=I,l[`useLazy${cf(b)}Query`]=C}if(I9(x)){const I=v(b);yc(p.endpoints[b],{useMutation:I}),l[`use${cf(b)}Mutation`]=I}else if(xD(x)){const{useInfiniteQuery:I,useInfiniteQuerySubscription:C,useInfiniteQueryState:O}=y(b);yc(p.endpoints[b],{useInfiniteQuery:I,useInfiniteQuerySubscription:C,useInfiniteQueryState:O}),l[`use${cf(b)}InfiniteQuery`]=I}}}}}),U9=bD(SD(),$9());const wD=e=>({id:String(e.id),name:e.name,imageUrl:e.picture_url,display:!0}),z9=e=>e.results.map(wD).sort((n,i)=>n.name.localeCompare(i.name)),ED=e=>{const t=e.image.original_height||48,n=e.image.original_width||48;return{id:String(e.id),name:e.name,iconUrl:e.image.url.replace("{height}",t).replace("{width}",n)}},B9=e=>e.results.map(ED).sort((n,i)=>n.name.localeCompare(i.name)),H9=e=>{const t=e.instructors[0],n=t?wD(t):{id:"0",name:"Unknown Instructor",imageUrl:"",display:!1},i=Ce.getBookableStatus(e),o=new Date(e.starts_at),u=(new Date(e.ends_at).getTime()-o.getTime())/1e3;return Number.isNaN(u)&&Qv("Computed invalid duration",{extra:{rawClass:e}}),{...e,id:String(e.id),name:e.name,start:e.starts_at,end:e.ends_at,customerUrl:e.customer_url,duration:u,discipline:ED(e.offering_type.category),instructor:n,status:i}},F9=e=>e.results.map(H9),q9=["id","name","max_occupancy","occupancy","attending_count","starts_at","ends_at","waiting_count","active_registration_status","category.name","venue","customer_url","description"],V9=["instructors","active_registration_status","category","offering_type","offering_type.category","venue","suggested_booking_action"],If=U9({reducerPath:"pelotonApi",baseQuery:u9({baseUrl:`${Ce.PELOTON_CORS_PROXY}/${Ce.PELOTON_API_BASE}/`}),endpoints:e=>({getClasses:e.query({queryFn:async t=>{try{const n=Ce.getPelotonHeaders(t),i=Ce.buildEventsUrl({fields:q9,expand:V9,corsProxy:!0}),o=await Ce.fetchAllPelotonPages(i,async l=>{const u=await fetch(l,{headers:n});if(!u.ok)throw new Error(`${u.status}: ${await u.text()}`);return u.json()},!0);return{data:F9({results:o})}}catch(n){return{error:{status:"FETCH_ERROR",error:String(n)}}}}}),getDisciplines:e.query({query:t=>({url:`offering_type_categories?${new URLSearchParams({sort:"name"})}`,method:"GET",headers:Ce.getPelotonHeaders(t)}),transformResponse:t=>B9(t)}),getInstructors:e.query({query:t=>({url:`instructors?${new URLSearchParams({sort:"name"})}`,method:"GET",headers:Ce.getPelotonHeaders(t)}),transformResponse:t=>z9(t)})})}),{useGetClassesQuery:gb,useGetDisciplinesQuery:yb,useGetInstructorsQuery:vb}=If,G9=e=>{if("error"in e&&typeof e.error=="string")return e.error;if("message"in e&&typeof e.message=="string")return e.message},W9=T.label`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  cursor: pointer;
  user-select: none;
  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.$checked?`${e.theme.colors.accent}0a`:"transparent"};
  transition: background-color 0.15s;

  ${cb}
`,Y9=T.span`
  color: ${e=>e.theme.colors.main};
  font-size: 14px;
`,Q9=T.input`
  accent-color: ${e=>e.theme.colors.accent};
`,TD=({value:e,checked:t,onChange:n,label:i,icon:o})=>{const l=E.useId();return g.jsxs(W9,{$checked:t,htmlFor:l,children:[g.jsx(Q9,{type:"checkbox",id:l,value:e,checked:t,onChange:n}),o,g.jsx(Y9,{children:i})]})},pT=T.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`,mT=T.legend`
  font-weight: 600;
  font-size: 18px;
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,gT=T.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  margin: 0 0 12px;
`,yT=T.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
`,df=T.button`
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
`,CD=T.div`
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
`,vT=T.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
  margin-left: auto;
`,bh=T.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  padding: 24px;
  text-align: center;
`,RD=T.p`
  color: ${e=>e.theme.colors.error};
  font-size: 14px;
  padding: 16px;
`,AD=T.button`
  border: none;
  background: none;
  color: ${e=>e.theme.colors.accent};
  cursor: pointer;
  font-family: inherit;
  font-size: 14px;
  text-decoration: underline;
  padding: 0;
`,K9=T.div`
  margin-top: 32px;

  ${Te`
    margin-top: 24px;
  `}
`,X9=({studioId:e,selectedInstructors:t,setSelectedInstructors:n,selectedDisciplines:i,setSelectedDisciplines:o})=>{const l=vb(e),u=yb(e),f=E.useRef(t),p=E.useRef(i);E.useEffect(()=>{const b=f.current;if(!l.currentData||!Ce.isNotEmpty(b))return;const x=new Set(l.currentData.map(C=>C.id)),I=b.filter(C=>x.has(C));I.length<b.length&&(n(I),f.current=I)},[l.currentData,n]),E.useEffect(()=>{const b=p.current;if(!u.currentData||!Ce.isNotEmpty(b))return;const x=new Set(u.currentData.map(C=>String(C.id))),I=b.filter(C=>x.has(String(C))).map(String);I.length<b.length&&(o(I),p.current=I)},[u.currentData,o]);const h=E.useCallback(b=>{if(!Ce.isNotEmpty(t))return;const x=t.includes(b);n(x?t.filter(I=>I!==b):[...t,b])},[t,n]),y=E.useCallback(b=>{if(!Ce.isNotEmpty(i))return;const x=i.includes(b);o(x?i.filter(I=>I!==b):[...i,b])},[i,o]),v=Ce.isNotEmpty(t),_=Ce.isNotEmpty(i);return g.jsxs("div",{children:[g.jsxs(pT,{children:[g.jsx(mT,{children:"Instructors"}),g.jsx(gT,{children:"Filter by specific instructors or get alerts for all of them."}),g.jsxs(yT,{children:[g.jsx(df,{type:"button",$active:!v,onClick:()=>n(null),children:"Any instructor"}),g.jsx(df,{type:"button",$active:v,onClick:()=>{v||n([])},children:"Specific instructors"}),v&&t.length>0&&g.jsxs(vT,{children:[t.length," selected"]})]}),v&&g.jsx(Z9,{query:l,selectedIds:t,onToggle:h})]}),g.jsx(K9,{}),g.jsxs(pT,{children:[g.jsx(mT,{children:"Disciplines"}),g.jsx(gT,{children:"Filter by class type or get alerts for everything."}),g.jsxs(yT,{children:[g.jsx(df,{type:"button",$active:!_,onClick:()=>o(null),children:"Any discipline"}),g.jsx(df,{type:"button",$active:_,onClick:()=>{_||o([])},children:"Specific disciplines"}),_&&i.length>0&&g.jsxs(vT,{children:[i.length," selected"]})]}),_&&g.jsx(J9,{query:u,selectedIds:i,onToggle:y})]})]})},Z9=E.memo(({query:e,selectedIds:t,onToggle:n})=>e.isLoading?g.jsx(bh,{children:"Loading instructors…"}):e.error?g.jsxs(RD,{children:["Couldn't load instructors."," ",g.jsx(AD,{type:"button",onClick:e.refetch,children:"Try again"})]}):!e.currentData||e.currentData.length===0?g.jsx(bh,{children:"No instructors found for this studio."}):g.jsx(CD,{role:"group","aria-label":"Instructors",children:e.currentData.map(i=>g.jsx(TD,{value:i.id,checked:t.includes(i.id),onChange:()=>n(i.id),label:i.name,icon:g.jsx(db,{instructor:i,size:28})},i.id))})),J9=E.memo(({query:e,selectedIds:t,onToggle:n})=>e.isLoading?g.jsx(bh,{children:"Loading disciplines…"}):e.error?g.jsxs(RD,{children:["Couldn't load disciplines."," ",g.jsx(AD,{type:"button",onClick:e.refetch,children:"Try again"})]}):!e.currentData||e.currentData.length===0?g.jsx(bh,{children:"No disciplines found for this studio."}):g.jsx(CD,{role:"group","aria-label":"Disciplines",children:e.currentData.map(i=>g.jsx(TD,{value:i.id,checked:t.includes(i.id),onChange:()=>n(i.id),label:i.name,icon:g.jsx(yh,{discipline:i,size:24})},i.id))})),eF=T.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 16px;
  margin-bottom: 24px;

  ${Te`
    padding: 0;
    margin-bottom: 12px;
  `}
`,tF=T.button`
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
`,nF=T.div`
  flex: 1;
  height: 2px;
  background-color: ${e=>e.$filled?e.theme.colors.accent:e.theme.borderColor};
  transition: background-color 0.2s;
`,rF=T.span`
  position: absolute;
  top: 18px;
  font-size: 10px;
  white-space: nowrap;
  color: ${e=>e.$state==="active"?e.theme.colors.main:e.theme.colors.secondary};
  font-weight: ${e=>e.$state==="active"?600:400};

  ${Te`
    display: none;
  `}
`,iF=T.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`,sF=({steps:e,currentStep:t,onStepClick:n})=>g.jsx(eF,{role:"navigation","aria-label":"Editor steps",children:e.map((i,o)=>{const l=o<t?"completed":o===t?"active":"upcoming";return g.jsxs(iF,{style:{flex:o<e.length-1?1:0},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",width:"100%"},children:[g.jsx(tF,{$state:l,onClick:()=>{l!=="upcoming"&&n(o)},"aria-label":`Step ${o+1}: ${i}`,"aria-current":l==="active"?"step":void 0,type:"button"}),o<e.length-1&&g.jsx(nF,{$filled:o<t})]}),g.jsx(rF,{$state:l,children:i})]},o)})}),ls=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Sh=new Array(48).fill(null).map((e,t)=>{const n=t*30,i=new Date;i.setHours(Math.floor(n/60)),i.setMinutes(n%60);const o=new Intl.DateTimeFormat(void 0,{hour:"numeric",minute:"numeric"});return{minutes:n,label:o.format(i)}}),oF=T.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`,aF=T.legend`
  font-weight: 600;
  font-size: 18px;
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,lF=T.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  margin: 0 0 20px;
`,cF=T.div`
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
`,oi=T.span`
  font-size: 14px;
  color: ${e=>e.theme.colors.main};
  text-align: right;
  word-break: break-word;

  ${Te`
    text-align: left;
  `}
`,uF=T.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  justify-content: flex-end;

  ${Te`
    justify-content: flex-start;
  `}
`,dF=T.span`
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  background-color: ${e=>e.theme.colors.secondarySurface};
  color: ${e=>e.theme.colors.main};
`,fF=e=>{if(Ce.isAllDay(e))return"All day";const t=Sh.find(i=>i.minutes===e.startMin),n=Sh.find(i=>i.minutes===e.endMin);return!t||!n?"All day":`${t.label} – ${n.label}`},hF=e=>{switch(e){case"free":return"Open spots only";case"waitlist":return"Open spots or waitlist";case"full":return"Any status"}},pF=({name:e,studioId:t,maxStatus:n,selectedInstructors:i,selectedDisciplines:o,timeRanges:l,waitlistAlerts:u,watchedClassIds:f})=>{const p=Ce.STUDIOS[t],h=ls.filter((_,b)=>l[b]),y=l.find(Boolean),v=l.filter(Boolean).every(_=>_&&y&&_.startMin===y.startMin&&_.endMin===y.endMin);return g.jsxs(oF,{children:[g.jsx(aF,{children:"Review your alert"}),g.jsx(lF,{children:"Double-check everything looks right, then hit Save."}),g.jsxs(cF,{children:[e.trim()&&g.jsxs(Zi,{children:[g.jsx(Ji,{children:"Name"}),g.jsx(oi,{children:e.trim()})]}),g.jsxs(Zi,{children:[g.jsx(Ji,{children:"Studio"}),g.jsx(oi,{children:p?.location||t})]}),g.jsxs(Zi,{children:[g.jsx(Ji,{children:"Alert on"}),g.jsx(oi,{children:hF(n)})]}),g.jsxs(Zi,{children:[g.jsx(Ji,{children:"Instructors"}),g.jsx(oi,{children:i===null?"Any instructor":i.length===0?"None selected":`${i.length} selected`})]}),g.jsxs(Zi,{children:[g.jsx(Ji,{children:"Disciplines"}),g.jsx(oi,{children:o===null?"Any discipline":o.length===0?"None selected":`${o.length} selected`})]}),g.jsxs(Zi,{children:[g.jsx(Ji,{children:"Days"}),h.length===0?g.jsx(oi,{children:"No days selected"}):h.length===7?g.jsx(oi,{children:"Every day"}):g.jsx(uF,{children:h.map(_=>g.jsx(dF,{children:_.slice(0,3)},_))})]}),y&&g.jsxs(Zi,{children:[g.jsx(Ji,{children:"Time window"}),g.jsx(oi,{children:v?fF(y):"Varies by day"})]}),g.jsxs(Zi,{children:[g.jsx(Ji,{children:"Waitlist alerts"}),g.jsx(oi,{children:u?f===null?"On — any matching class":f.length===0?"On — no classes selected":`On — ${f.length} ${f.length===1?"class":"classes"} selected`:"Off"})]})]})]})},mF=T.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`,gF=T.legend`
  font-weight: 600;
  font-size: 18px;
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,yF=T.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  margin: 0 0 16px;
`,vF=T.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,_F=T.div`
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
`,bF=T.label`
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
`,SF=T.input`
  accent-color: ${e=>e.theme.colors.accent};
`,xF=T.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: auto;

  ${Te`
    margin-left: 28px;
    width: calc(100% - 28px);
  `}
`,wF=T.label`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
`,EF=T.input`
  accent-color: ${e=>e.theme.colors.accent};
`,_T=T.select`
  ${Ti}
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
`,TF=T.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,CF=T.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  flex-wrap: wrap;
`,gy=T.button`
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
`,RF=({timeRanges:e,setTimeRanges:t})=>{const n=e.filter(Boolean).length,i=E.useRef(ls.map(()=>{})),o=E.useCallback(y=>{const v=[...e];v[y]=v[y]?null:Ce.DEFAULT_TIME_RANGE,t(v)},[e,t]),l=E.useCallback(y=>{const v=e[y];if(!v)return;const _=[...e];Ce.isAllDay(v)?_[y]=i.current[y]??Ce.SPECIFIC_DEFAULT_TIME_RANGE:(i.current[y]=v,_[y]=Ce.ALL_DAY_TIME_RANGE),t(_)},[e,t]),u=E.useCallback((y,v,_)=>{const b=[...e],x=b[y];x&&(v==="startMin"?b[y]={startMin:_,endMin:x.endMin===0||x.endMin>=_?x.endMin:0}:b[y]={...x,endMin:_},t(b))},[e,t]),f=E.useCallback(()=>{t(ls.map(()=>Ce.DEFAULT_TIME_RANGE))},[t]),p=E.useCallback(()=>{t(ls.map(()=>null))},[t]),h=E.useCallback(()=>{const y=e.find(Boolean);y&&t(e.map(v=>v?{...y}:null))},[e,t]);return g.jsxs(mF,{children:[g.jsx(gF,{children:"Days & times"}),g.jsx(yF,{children:"Choose which days and time windows to monitor. Alerts fire when a matching class falls within these windows (in the studio's timezone)."}),g.jsxs(CF,{children:[g.jsx(gy,{type:"button",onClick:f,children:"Select all days"}),n>0&&g.jsx(gy,{type:"button",onClick:p,children:"Clear all"}),n>1&&g.jsx(gy,{type:"button",onClick:h,children:"Copy time to all"})]}),g.jsx(vF,{children:ls.map((y,v)=>{const _=e[v],b=!!_&&Ce.isAllDay(_);return g.jsxs(_F,{$enabled:!!_,children:[g.jsxs(bF,{htmlFor:`day-${v}`,children:[g.jsx(SF,{type:"checkbox",id:`day-${v}`,checked:!!_,onChange:()=>o(v)}),y]}),_&&g.jsxs(xF,{children:[g.jsxs(wF,{htmlFor:`allday-${v}`,children:[g.jsx(EF,{type:"checkbox",id:`allday-${v}`,checked:b,onChange:()=>l(v)}),"All day"]}),!b&&g.jsxs(g.Fragment,{children:[g.jsx(_T,{value:_.startMin,"aria-label":`${y} start time`,onChange:({target:x})=>{const I=parseInt(x.value);Number.isNaN(I)||u(v,"startMin",I)},children:Sh.map(x=>g.jsx("option",{value:x.minutes,children:x.label},x.minutes))}),g.jsx(TF,{children:"to"}),g.jsx(_T,{value:_.endMin,"aria-label":`${y} end time`,onChange:({target:x})=>{const I=parseInt(x.value);Number.isNaN(I)||u(v,"endMin",I)},children:Sh.map(x=>g.jsx("option",{value:x.minutes,disabled:x.minutes>0&&x.minutes<_.startMin,children:x.label},x.minutes))})]})]})]},y)})})]})},bT=T.fieldset`
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
  margin: 0 0 16px;
`,AF=T.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,IF=T.div`
  margin-top: 32px;

  ${Te`
    margin-top: 24px;
  `}
`,DF=T.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
`,wT=T.button`
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
`,OF=T.div`
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
`,kF=T.label`
  ${Ti}
  ${cb}
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
`,NF=T.input`
  accent-color: ${e=>e.theme.colors.accent};
  margin-top: 2px;
  flex-shrink: 0;
`,MF=T.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,LF=T.span`
  font-size: 13px;
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
`,PF=T.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,jF=T.span`
  font-size: 11px;
  font-weight: 500;
  padding: 1px 6px;
  border-radius: 4px;
  margin-left: auto;
  flex-shrink: 0;
  align-self: flex-start;
  background-color: ${e=>e.$status==="free"?`${e.theme.colors.accent}18`:e.$status==="waitlist"?"#f59e0b18":`${e.theme.colors.secondarySurface}`};
  color: ${e=>e.$status==="free"?e.theme.colors.accent:e.$status==="waitlist"?"#b45309":e.theme.colors.secondary};
`,yy=T.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  padding: 20px;
  text-align: center;
  margin: 0;
`,$F=T.button`
  border: none;
  background: none;
  color: ${e=>e.theme.colors.accent};
  cursor: pointer;
  font-family: inherit;
  font-size: 14px;
  text-decoration: underline;
  padding: 0;
`,UF=T.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
  margin-left: auto;
`;function zF(e,t){try{const n=new Date(e),i=new Date(n.toLocaleString("en-US",{timeZone:"UTC"})),o=new Date(n.toLocaleString("en-US",{timeZone:t})),l=i.getTime()-o.getTime();return n.setTime(n.getTime()-l),{day:n.getDay(),minute:n.getHours()*60+n.getMinutes()}}catch{return null}}function BF(e,t){try{return new Date(e).toLocaleString("en-US",{timeZone:t,weekday:"short",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}catch{return e}}function HF(e,t,n,i,o){const l=Ce.STUDIOS[o]?.timezone,u=Date.now();return e.filter(f=>{if(new Date(f.start).getTime()<=u||t!==null&&!t.includes(f.instructor.id)||n!==null&&!n.includes(f.discipline.id))return!1;if(i&&l){const p=zF(f.start,l);if(!p)return!1;const h=i[p.day];if(!h||p.minute<h.startMin||p.minute>h.endMin)return!1}return!0})}const FF=E.memo(({studioId:e,instructors:t,disciplines:n,timeRanges:i,selectedIds:o,onToggle:l})=>{const u=gb(e),f=Ce.STUDIOS[e]?.timezone??"UTC";if(u.isLoading)return g.jsx(yy,{children:"Loading classes…"});if(u.error)return g.jsxs(yy,{children:["Couldn't load classes."," ",g.jsx($F,{type:"button",onClick:u.refetch,children:"Try again"})]});const p=HF(u.currentData??[],t,n,i,e);return p.length===0?g.jsx(yy,{children:"No upcoming classes match your filters."}):g.jsx(OF,{role:"group","aria-label":"Classes",children:p.map(h=>{const y=o.includes(h.id),v=BF(h.start,f),_=[h.instructor.name,h.discipline.name].filter(Boolean).join(" · "),b=h.status==="free"?"Open":h.status==="waitlist"?"Waitlist":"Full";return g.jsxs(kF,{$checked:y,htmlFor:`cls-${h.id}`,children:[g.jsx(NF,{type:"checkbox",id:`cls-${h.id}`,checked:y,onChange:()=>l(h.id)}),g.jsxs(MF,{children:[g.jsx(LF,{children:v}),_&&g.jsx(PF,{children:_})]}),g.jsx(jF,{$status:h.status,children:b})]},h.id)})})}),qF=({studioId:e,waitlistAlerts:t,onWaitlistAlertsChange:n,watchedClassIds:i,onWatchedClassIdsChange:o,selectedInstructors:l,selectedDisciplines:u,timeRanges:f})=>{const p=v=>{const _=i??[];o(_.includes(v)?_.filter(b=>b!==v):[..._,v])},h=i!==null,y=i?.length??0;return g.jsxs("div",{children:[g.jsxs(bT,{children:[g.jsx(ST,{children:"Waitlist position alerts"}),g.jsx(xT,{children:"Get a push notification whenever the waitlist count changes for a matching class. Tap the notification to open a prompt reminding you to check your email for the 2-hour acceptance window."}),g.jsxs(AF,{children:[g.jsx(mh,{name:"waitlistAlerts",value:"off",checked:!t,onChange:()=>n(!1),label:"Disabled",hint:"No waitlist count notifications"}),g.jsx(mh,{name:"waitlistAlerts",value:"on",checked:t,onChange:()=>n(!0),label:"Enabled",hint:"Notify me when the waitlist count changes"})]})]}),t&&g.jsxs(g.Fragment,{children:[g.jsx(IF,{}),g.jsxs(bT,{children:[g.jsx(ST,{children:"Which classes?"}),g.jsx(xT,{children:"Notify for any class matching your filters, or pick specific ones you've already joined the waitlist for."}),g.jsxs(DF,{children:[g.jsx(wT,{type:"button",$active:!h,onClick:()=>o(null),children:"Any matching class"}),g.jsx(wT,{type:"button",$active:h,onClick:()=>{h||o([])},children:"Specific classes"}),h&&y>0&&g.jsxs(UF,{children:[y," selected"]})]}),h&&g.jsx(FF,{studioId:e,instructors:l,disciplines:u,timeRanges:f,selectedIds:i,onToggle:p})]})]})]})},Do=wi([e=>e.studioSelector],e=>e.studioId),VF=e=>{const t=Mn(),n=et(Do);E.useEffect(()=>{e.studioId?t(ph(e.studioId)):t(ph(dD(Ce.DEFAULT_STUDIO_ID)))},[e.studioId,t]);const[i,o]=E.useState(e.name||""),[l,u]=E.useState(e.instructors||null),[f,p]=E.useState(e.disciplines||null),[h,y]=E.useState(()=>e.timeRanges||ls.map(()=>Ce.DEFAULT_TIME_RANGE)),[v,_]=E.useState(e.maxStatus||"free"),[b,x]=E.useState(e.waitlistAlerts??!1),[I,C]=E.useState(e.watchedClassIds??null),O=E.useRef(e.studioId);return E.useEffect(()=>{n&&O.current&&n!==O.current&&(u(M=>M&&[]),p(M=>M&&[])),O.current=n},[n]),{selectedStudioId:n,name:i,setName:o,selectedInstructors:l,setSelectedInstructors:u,selectedDisciplines:f,setSelectedDisciplines:p,timeRanges:h,setTimeRanges:y,maxStatus:v,setMaxStatus:_,waitlistAlerts:b,setWaitlistAlerts:x,watchedClassIds:I,setWatchedClassIds:C}},vy=["Basics","Filters","Schedule","Waitlist","Review"],GF=T.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
`,WF=T.div`
  padding: 24px 24px 0;

  ${Te`
    padding: 16px 16px 0;
  `}
`,YF=T.h2`
  margin: 0 0 4px;
  font-size: 22px;
  color: ${e=>e.theme.colors.main};
`,QF=T.p`
  margin: 0 0 20px;
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
`,KF=T.div`
  padding: 8px 24px 24px;
  flex: 1;
  overflow-y: auto;

  ${Te`
    padding: 8px 16px 16px;
  `}
`,XF=T.div`
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
`,ZF=T.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,JF=T.span`
  font-size: 13px;
  color: ${e=>e.$error?e.theme.colors.error:e.theme.colors.secondary};

  ${Te`
    font-size: 12px;
  `}
`,e7=({alertToEdit:e,onSave:t,onCancel:n})=>{const i=Mn(),o=et(vu),[l,u]=E.useState(0),[f,p]=E.useState(!1),[h,y]=E.useState(),{selectedStudioId:v,name:_,setName:b,selectedInstructors:x,setSelectedInstructors:I,selectedDisciplines:C,setSelectedDisciplines:O,timeRanges:M,setTimeRanges:R,maxStatus:D,setMaxStatus:N,waitlistAlerts:A,setWaitlistAlerts:P,watchedClassIds:F,setWatchedClassIds:H}=VF(e),B=l<vy.length-1,z=l>0,G=l===vy.length-1,V=E.useCallback(()=>{B&&u(K=>K+1)},[B]),te=E.useCallback(()=>{z&&u(K=>K-1)},[z]),ue=E.useCallback(async()=>{if(!v||!o)return;p(!0),y(void 0);const K={id:e.id||null,created:e.created||new Date().getTime(),..._.trim()?{name:_.trim()}:{},studioId:v,instructors:x,disciplines:C,timeRanges:M,maxStatus:D,...A?{waitlistAlerts:!0}:{},...A&&F!==null?{watchedClassIds:F}:{}};try{K.id?await PH(o,K):await LH(o,K),t()}catch(ne){Nr(ne),y("Something went wrong. Please try again."),p(!1)}},[e.id,e.created,_,v,o,x,C,M,D,A,F,t]),j=!!e.id;return g.jsxs(GF,{children:[g.jsxs(WF,{children:[g.jsx(YF,{children:j?"Edit alert":"New alert"}),g.jsx(QF,{children:j?"Update your alert settings below.":"Set up a new alert in a few quick steps."}),g.jsx(sF,{steps:vy,currentStep:l,onStepClick:u})]}),g.jsxs(KF,{children:[l===0&&g.jsx(QH,{name:_,onNameChange:b,studioId:v,onStudioChange:K=>i(ph(K)),maxStatus:D,onStatusChange:N}),l===1&&g.jsx(X9,{studioId:v,selectedInstructors:x,setSelectedInstructors:I,selectedDisciplines:C,setSelectedDisciplines:O}),l===2&&g.jsx(RF,{timeRanges:M,setTimeRanges:R}),l===3&&g.jsx(qF,{studioId:v,waitlistAlerts:A,onWaitlistAlertsChange:P,watchedClassIds:F,onWatchedClassIdsChange:H,selectedInstructors:x,selectedDisciplines:C,timeRanges:M}),l===4&&g.jsx(pF,{name:_,studioId:v,maxStatus:D,selectedInstructors:x,selectedDisciplines:C,timeRanges:M,waitlistAlerts:A,watchedClassIds:F})]}),g.jsxs(XF,{children:[g.jsx("div",{children:z?g.jsx(vc,{type:"button",onClick:te,children:"Back"}):g.jsx(vc,{type:"button",onClick:n,children:"Cancel"})}),g.jsxs(ZF,{children:[h&&g.jsx(JF,{$error:!0,children:h}),G?g.jsx(vc,{type:"button",$primary:!0,onClick:ue,disabled:f,children:f?"Saving…":"Save alert"}):g.jsxs(g.Fragment,{children:[j&&g.jsx(vc,{type:"button",onClick:ue,disabled:f,children:f?"Saving…":"Save"}),g.jsx(vc,{type:"button",$primary:!0,onClick:V,children:"Continue"})]})]})]})]})},t7=()=>{const e=Pr(),t=ws(),n=e.state||{};return g.jsx(e7,{alertToEdit:n,onSave:()=>{t(nt.ALERTS)},onCancel:()=>{t(nt.ALERTS)}})},n7={userId:null,data:{state:"idle"}},ID=Kn({name:"alerts",initialState:n7,reducers:{setAlertsLoading(e,t){return{userId:t.payload,data:{state:"loading"}}},setAlertsData(e,t){return{userId:t.payload.userId,data:{state:"fulfilled",data:t.payload.data}}},setAlertsFailed(e,t){return{userId:t.payload.userId,data:{state:"failed",error:t.payload.error}}}}}),{setAlertsLoading:r7,setAlertsData:ET,setAlertsFailed:TT}=ID.actions,i7=ID.reducer,s7={userId:null,data:{state:"idle"}},DD=Kn({name:"alertPreferences",initialState:s7,reducers:{setAlertPreferencesLoading(e,t){return{userId:t.payload,data:{state:"loading"}}},setAlertPreferencesData(e,t){return{userId:t.payload.userId,data:{state:"fulfilled",data:t.payload.data}}},setAlertPreferencesFailed(e,t){return{userId:t.payload.userId,data:{state:"failed",error:t.payload.error}}}}}),{setAlertPreferencesLoading:o7,setAlertPreferencesData:a7,setAlertPreferencesFailed:CT}=DD.actions,l7=DD.reducer,_b=e=>{try{return window.localStorage.getItem(e)}catch(t){return Nr(t),null}},bb=(e,t)=>{try{window.localStorage.setItem(e,t)}catch(n){Nr(n)}},OD=e=>{try{window.localStorage.removeItem(e)}catch(t){Nr(t)}},kD="BOOKABLE_STATUS_FILTERS",Ev="DISCIPLINE_FILTERS",Tv="INSTRUCTOR_FILTERS",c7=e=>{const t=_b(kD);return t===null?e:t.split(";").filter(Ce.isBookableStatus)},u7=e=>{bb(kD,e.join(";"))},d7=e=>{const t=_b(Ev);return t===null?e:t.split(";").filter(Boolean)},_y=e=>{e.length===0?OD(Ev):bb(Ev,e.join(";"))},f7=e=>{const t=_b(Tv);return t===null?e:t.split(";").filter(Boolean)},RT=e=>{e.length===0?OD(Tv):bb(Tv,e.join(";"))},h7={selectedBookableStatuses:c7(["free","waitlist"]),selectedInstructors:f7([]),selectedDisciplines:d7([])},ND=Kn({name:"filters",initialState:h7,reducers:{toggleBookableStatus(e,t){e.selectedBookableStatuses.includes(t.payload)?e.selectedBookableStatuses=e.selectedBookableStatuses.filter(n=>n!==t.payload):e.selectedBookableStatuses=[...e.selectedBookableStatuses,t.payload],u7(e.selectedBookableStatuses)},toggleInstructor(e,t){e.selectedInstructors.includes(t.payload)?e.selectedInstructors=e.selectedInstructors.filter(n=>n!==t.payload):e.selectedInstructors=[...e.selectedInstructors,t.payload],RT(e.selectedInstructors)},resetInstructors(e){e.selectedInstructors=[],RT(e.selectedInstructors)},toggleDiscipline(e,t){e.selectedDisciplines.includes(t.payload)?e.selectedDisciplines=e.selectedDisciplines.filter(n=>n!==t.payload):e.selectedDisciplines=[...e.selectedDisciplines,t.payload],_y(e.selectedDisciplines)},setDisciplines(e,t){e.selectedDisciplines=t.payload,_y(e.selectedDisciplines)},resetDisciplines(e){e.selectedDisciplines=[],_y(e.selectedDisciplines)}}}),{toggleBookableStatus:p7,toggleInstructor:m7,resetInstructors:g7,toggleDiscipline:y7,setDisciplines:v7,resetDisciplines:_7}=ND.actions,b7=ND.reducer,S7={userId:null,data:{state:"idle"}},MD=Kn({name:"registeredDevices",initialState:S7,reducers:{setRegisteredDevicesLoading(e,t){return{userId:t.payload,data:{state:"loading"}}},setRegisteredDevicesData(e,t){return{userId:t.payload.userId,data:{state:"fulfilled",data:t.payload.data}}},setRegisteredDevicesFailed(e,t){return{userId:t.payload.userId,data:{state:"failed",error:t.payload.error}}}}}),{setRegisteredDevicesLoading:x7,setRegisteredDevicesData:w7,setRegisteredDevicesFailed:AT}=MD.actions,E7=MD.reducer,T7={state:"idle"},LD=Kn({name:"session",initialState:T7,reducers:{setLoading(e){return{state:"loading"}},setSession(e,t){return{state:"fulfilled",data:t.payload}},removeSession(e){return{state:"fulfilled",data:null}}}}),{setLoading:IT,setSession:C7,removeSession:DT}=LD.actions,R7=LD.reducer,up=l3({reducer:{alerts:i7,alertPreferences:l7,filters:b7,registeredDevices:E7,session:R7,[If.reducerPath]:If.reducer,[vv.name]:vv.reducer},middleware:e=>e().concat(If.middleware)}),PD=E.createContext({state:"idle"}),A7=({children:e,userId:t})=>{const n=Mn(),i=et(l=>l.registeredDevices);E.useEffect(()=>{const l=xn;if(!l)return n(AT({userId:t,error:{message:"No database set up"}})),()=>{};const u=up.getState().registeredDevices;(u.userId!==t||u.data.state!=="fulfilled")&&n(x7(t));const f=ir(l,`messagingTokens/${t}`),p=rp(f,h=>{const y=h.val();n(w7({userId:t,data:y||{}}))},h=>{n(AT({userId:t,error:{message:h.message}}))});return()=>p()},[t,n]);const o=i.userId===t?i.data:{state:"loading"};return g.jsx(PD.Provider,{value:o,children:e})},jD=E.createContext({state:"idle"}),I7=({children:e,userId:t})=>{const n=Mn(),i=et(l=>l.alertPreferences);E.useEffect(()=>{const l=xn;if(!l)return n(CT({userId:t,error:{message:"No database set up"}})),()=>{};const u=up.getState().alertPreferences;(u.userId!==t||u.data.state!=="fulfilled")&&n(o7(t));const f=ir(l,Ce.PATHS.alertPreferences(t)),p=rp(f,h=>{const y=h.val();n(a7({userId:t,data:y||{}}))},h=>{n(CT({userId:t,error:{message:h.message}}))});return()=>p()},[t,n]);const o=i.userId===t?i.data:{state:"loading"};return g.jsx(jD.Provider,{value:o,children:e})},D7=({children:e,userId:t})=>{const n=Mn(),i=et(l=>l.alerts);E.useEffect(()=>{const l=xn;if(!l)return n(TT({userId:t,error:{message:"No database set up"}})),()=>{};const u=up.getState().alerts;(u.userId!==t||u.data.state!=="fulfilled")&&n(r7(t));const f=ir(l,Ce.PATHS.alerts(t)),p=rp(f,h=>{const y=h.val();if(!y){n(ET({userId:t,data:[]}));return}const v=Object.entries(y).map(([_,b])=>({...b,timeRanges:new Array(ls.length).fill(null).map((x,I)=>b.timeRanges[I]||null),id:_}));n(ET({userId:t,data:v}))},h=>{n(TT({userId:t,error:{message:h.message}}))});return()=>p()},[t,n]);const o=i.userId===t?i.data:{state:"loading"};return g.jsx(ub.Provider,{value:o,children:e})},O7=T.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 16px;

  ${Te`
    padding: 8px;
  `}
`,k7=T.div`
  overflow: auto;
  height: 100%;
`,N7=T.div`
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
`,M7=T.div`
  font-size: 36px;
  margin-bottom: 16px;
  line-height: 1;
`,L7=T.h1`
  font-size: 20px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
  margin: 0 0 10px;
`,P7=T.p`
  font-size: 15px;
  color: ${e=>e.theme.colors.secondary};
  line-height: 1.55;
  margin: 0 0 24px;
`,j7=T(Es)`
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
`,$7=T.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
  padding: 32px 0;
  margin: 0;
`,U7=({children:e})=>{const t=et(el);return t.state==="loading"?g.jsx($7,{children:"Loading…"}):t.state!=="fulfilled"||!t.data?g.jsxs(N7,{children:[g.jsx(M7,{children:"🔔"}),g.jsx(L7,{children:"Sign in to use Alerts"}),g.jsx(P7,{children:"Track class availability and get push notifications when a spot opens up for the classes you care about."}),g.jsx(j7,{to:nt.SIGN_IN,children:"Sign in"})]}):e(t.data.id)},z7=e=>g.jsx(hs,{children:g.jsx(k7,{children:g.jsx(O7,{children:g.jsx(U7,{...e})})})}),B7=({userId:e})=>g.jsx(D7,{userId:e,children:g.jsx(I7,{userId:e,children:g.jsx(A7,{userId:e,children:g.jsx(n2,{})})})}),H7=()=>g.jsx(z7,{children:e=>g.jsx(B7,{userId:e})}),F7=async(e,t)=>{const n=xn;if(!n)throw new Error("No Firebase database connection to use");await wI(ir(n,Ce.PATHS.alertPreferences(e)),t)},q7=T.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,V7=T.div`
  display: flex;
  align-items: center;
  gap: 12px;

  ${Te`
    flex-direction: column;
    align-items: stretch;
  `}
`,G7=T.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,W7=T.label`
  font-size: 13px;
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
`,Y7=T.input`
  ${Ti}
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
`,Q7=T.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,K7=T.button`
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
`,X7=T.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
  padding: 16px;
`,Z7=T.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.error};
  text-align: center;
  padding: 16px;
`,J7=({alertPreferences:e})=>{const t=et(vu),[n,i]=E.useState(e.notificationDelayMin||5),[o,l]=E.useState(!1),[u,f]=E.useState(!1),p=E.useCallback(async h=>{if(h.preventDefault(),!!t){l(!0),f(!1);try{await F7(t,{lastUpdated:new Date().getTime(),notificationDelayMin:n}),f(!0),setTimeout(()=>f(!1),2e3)}catch{}finally{l(!1)}}},[t,n]);return g.jsxs(q7,{onSubmit:p,children:[g.jsxs(G7,{children:[g.jsx(W7,{htmlFor:"delay-input",children:"Cooldown (minutes)"}),g.jsx(Q7,{children:"Minimum delay between consecutive alert notifications"})]}),g.jsxs(V7,{children:[g.jsx(Y7,{id:"delay-input",type:"number",min:0,value:n,onChange:h=>{const y=parseInt(h.target.value,10);Number.isNaN(y)||i(y)}}),g.jsx(K7,{type:"submit",disabled:o,$saved:u,children:o?"Saving…":u?"Saved ✓":"Save"})]})]})},eq=()=>{const e=E.useContext(jD);return e.state==="idle"||e.state==="loading"?g.jsx(X7,{children:"Loading preferences…"}):e.state==="failed"?g.jsx(Z7,{children:"Failed to load preferences."}):g.jsx(J7,{alertPreferences:e.data},e.data.lastUpdated)},tq=e=>{if(!e)return"Unknown device";const t=nq(e),n=rq(e);return t&&n?`${t} on ${n}`:t||n||"Unknown device"},nq=e=>{if(e.includes("Edg/"))return"Edge";if(e.includes("OPR/")||e.includes("Opera"))return"Opera";if(e.includes("CriOS"))return"Chrome";if(e.includes("FxiOS"))return"Firefox";if(e.includes("Chrome/")&&!e.includes("Chromium"))return"Chrome";if(e.includes("Firefox/"))return"Firefox";if(e.includes("Safari/")&&!e.includes("Chrome"))return"Safari"},rq=e=>{if(/iPhone/.test(e))return"iPhone";if(/iPad/.test(e))return"iPad";if(/iPod/.test(e))return"iPod";if(/Android/.test(e))return"Android";if(/CrOS/.test(e))return"ChromeOS";if(/Mac OS X|Macintosh/.test(e))return"macOS";if(/Windows/.test(e))return"Windows";if(/Linux/.test(e))return"Linux"},iq=T.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,sq=T.li`
  ${Ti}
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
`,oq=T.span`
  font-size: 20px;
  flex-shrink: 0;
`,aq=T.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
`,lq=T.span`
  font-weight: 500;
  font-size: 14px;
  color: ${e=>e.theme.colors.main};
  display: flex;
  align-items: center;
  gap: 6px;
`,cq=T.span`
  padding: 1px 6px;
  border-radius: 10px;
  font-size: 10px;
  font-weight: 600;
  background-color: ${e=>e.theme.colors.accent}14;
  color: ${e=>e.theme.colors.accent};
`,uq=T.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,dq=T.button`
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
`,fq=T.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
  padding: 16px;
`,hq=T.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
  padding: 16px;
`,pq=T.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.error};
  text-align: center;
  padding: 16px;
`,mq=e=>e?/iPhone|iPad|iPod/i.test(e)||/Android/i.test(e)?"📱":/Windows/i.test(e)||/Macintosh|Mac OS/i.test(e)?"💻":/Linux/i.test(e)?"🖥️":"💻":"💻",gq=E.memo(({deviceToken:e,device:t,isCurrentDevice:n,onDelete:i})=>{const o=E.useMemo(()=>{const f=new Date(t.timestamp).getFullYear()===new Date().getFullYear();return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"numeric",...f?{}:{year:"numeric"}}).format(t.timestamp)},[t.timestamp]),l=tq(t.userAgent);return g.jsxs(sq,{children:[g.jsx(oq,{children:mq(t.userAgent)}),g.jsxs(aq,{children:[g.jsxs(lq,{children:[l,n&&g.jsx(cq,{children:"This device"})]}),g.jsxs(uq,{children:["Last active ",o]})]}),g.jsx(dq,{type:"button",onClick:()=>i(e),"aria-label":`Remove ${l}`,children:"Remove"})]})}),yq=({devices:e})=>{const n=E.useContext(_u).token,i=et(vu),o=E.useCallback(l=>{i&&TI(i,l).catch(console.error)},[i]);return e.length===0?g.jsx(fq,{children:"No devices registered for push notifications yet."}):g.jsx(iq,{children:e.map(([l,u])=>g.jsx(gq,{deviceToken:l,device:u,isCurrentDevice:n!==void 0?l===n:u.userAgent!==void 0&&u.userAgent===navigator.userAgent,onDelete:o},l))})},vq=()=>{const e=E.useContext(PD),t=E.useMemo(()=>e.state==="fulfilled"?Object.entries(e.data).sort(([,n],[,i])=>i.timestamp-n.timestamp):[],[e]);return e.state==="idle"||e.state==="loading"?g.jsx(hq,{children:"Loading devices…"}):e.state==="failed"?g.jsx(pq,{children:"Failed to load devices. Please try again."}):g.jsx(yq,{devices:t})},_q=async(e,t)=>{const n=xn;if(!n)throw new Error("No Firebase database connection to use");await xI(ir(n,Ce.PATHS.alert(e,t)))},OT=(e,t,n)=>!e||e.length===0?t:e.length===1?e[0]:e.length===2?`${e[0]} or ${e[1]}`:`${e.length} ${n}`,bq=(e,t)=>{const n=OT(e,"Any Class","Disciplines"),i=OT(t,"Any Instructor","Instructors");return`${n} with ${i}`},Sq=T.li`
  ${Ti}
  padding: 16px;
  transition: box-shadow 0.15s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 12px;
  }

  ${Te`
    padding: 12px;
  `}
`,xq=T.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;

  ${Te`
    flex-direction: column;
    gap: 8px;
  `}
`,wq=T.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`,Eq=T.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`,Tq=T.span`
  font-weight: 600;
  font-size: 15px;
  color: ${e=>e.theme.colors.main};
`,Cq=T.span`
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 500;
  background-color: ${e=>e.$status==="free"?e.theme.colors.status.free.bg:e.$status==="waitlist"?e.theme.colors.status.waitlist.bg:`${e.theme.colors.error}20`};
  color: ${e=>e.$status==="free"?e.theme.colors.status.free.text:e.$status==="waitlist"?e.theme.colors.status.waitlist.text:e.theme.colors.error};
`,Rq=T.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
`,Aq=T.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  margin-top: 2px;
`,Iq=T.span`
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
`,Dq=T.div`
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;

  ${Te`
    align-self: flex-end;
  `}
`,Df=T.button`
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
`,Oq=T(Df)`
  &:hover {
    border-color: ${e=>e.theme.colors.error};
    color: ${e=>e.theme.colors.error};
  }
`,kq=T.span`
  font-size: 11px;
  color: ${e=>e.theme.colors.secondary};
  margin-top: 4px;
`,Nq={free:{label:"Open spots",title:"Only alerts when a class has open spots available to book"},waitlist:{label:"Waitlist",title:"Alerts when a class has open spots or waitlist availability"},full:{label:"Any",title:"Alerts regardless of availability status"}},Mq=e=>Nq[e]||{label:e,title:""},Lq=E.memo(({alert:e,onDuplicate:t,onEdit:n})=>{const i=ws(),o=et(vu),{data:l}=vb(e.studioId),{data:u}=yb(e.studioId),f=E.useMemo(()=>{const x=new Date(e.created).getFullYear()===new Date().getFullYear();return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",...x?{}:{year:"numeric"}}).format(e.created)},[e.created]),p=E.useMemo(()=>new Map(l?.map(b=>[b.id,b.name])),[l]),h=E.useMemo(()=>new Map(u?.map(b=>[b.id,b.name])),[u]),y=E.useMemo(()=>{if(e.name)return e.name;const b=Ce.isNotEmpty(e.instructors)&&l?e.instructors.map(I=>p.get(I)).filter(I=>!!I):null,x=Ce.isNotEmpty(e.disciplines)&&u?e.disciplines.map(I=>h.get(I)).filter(I=>!!I):null;return bq(x,b)},[e.name,e.instructors,e.disciplines,l,u,p,h]),v=Ce.STUDIOS[e.studioId]?.location||e.studioId||"No studio",_=Mq(e.maxStatus);return g.jsx(Sq,{children:g.jsxs(xq,{children:[g.jsxs(wq,{children:[g.jsxs(Eq,{children:[g.jsx(Tq,{children:y}),g.jsx(Cq,{$status:e.maxStatus,title:_.title,children:_.label})]}),g.jsx(Rq,{children:v}),g.jsx(Aq,{children:ls.map((b,x)=>g.jsx(Iq,{$active:!!e.timeRanges[x],title:e.timeRanges[x]?`${b}: monitoring enabled`:`${b}: not monitored`,children:b.charAt(0)},b))}),g.jsxs(kq,{children:["Created ",f]})]}),g.jsxs(Dq,{children:[g.jsx(Df,{type:"button",onClick:()=>i(WU(e.id)),"aria-label":"Test alert",children:"Test"}),g.jsx(Df,{type:"button",onClick:()=>n(e),"aria-label":"Edit alert",children:"Edit"}),g.jsx(Df,{type:"button",onClick:()=>t(e),"aria-label":"Duplicate alert",children:"Duplicate"}),g.jsx(Oq,{type:"button",onClick:()=>o&&_q(o,e.id),"aria-label":"Delete alert",children:"Delete"})]})]})})}),Pq=T.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,jq=({alerts:e,onDuplicate:t,onEdit:n})=>g.jsx(Pq,{children:e.map(i=>g.jsx(Lq,{alert:i,onDuplicate:t,onEdit:n},i.id))}),$q=T.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px 0;

  ${Te`
    padding: 16px 16px 0;
  `}
`,Uq=T.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,zq=T.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
`,Bq=T.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
`,Hq=T.button`
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
`,Fq=T.div`
  padding: 16px 24px 24px;

  ${Te`
    padding: 12px 16px 16px;
  `}
`,qq=T.p`
  margin: 0;
  padding: 24px;
  text-align: center;
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
`,Vq=T.p`
  margin: 0;
  padding: 24px;
  text-align: center;
  color: ${e=>e.theme.colors.error};
  font-size: 14px;
`,Gq=({onAdd:e,onEdit:t,onDuplicate:n})=>{const i=E.useContext(ub),o=i.state==="loading"||i.state==="idle",l=i.state==="failed",u=i.state==="fulfilled"?i.data:[];return g.jsxs(g.Fragment,{children:[g.jsxs($q,{children:[g.jsxs(Uq,{children:[g.jsx(zq,{children:"Alerts"}),g.jsx(Bq,{children:o?"Loading your alerts…":l?"Something went wrong":u.length===0?"You haven't created any alerts yet":`${u.length} alert${u.length===1?"":"s"}`})]}),!o&&!l&&g.jsx(Hq,{type:"button",onClick:e,children:"+ New alert"})]}),g.jsxs(Fq,{children:[o&&g.jsx(qq,{children:"Loading…"}),l&&g.jsx(Vq,{children:"Failed to load your alerts. Please refresh and try again."}),!o&&!l&&u.length===0&&g.jsx(Kq,{onAdd:e}),!o&&!l&&u.length>0&&g.jsx(jq,{alerts:u,onEdit:t,onDuplicate:n})]})]})},Wq=T.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 32px 16px;
`,Yq=T.p`
  margin: 0;
  font-size: 15px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
`,Qq=T.button`
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
`,Kq=({onAdd:e})=>g.jsxs(Wq,{children:[g.jsx(Yq,{children:"Create your first alert to get notified when classes become available."}),g.jsx(Qq,{type:"button",onClick:e,children:"Create an alert"})]}),Xq=T.button`
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
`;const Zq=T.div`
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 16px;
`,Jq=()=>["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document||/iPad|iPhone|iPod/.test(navigator.userAgent),by=T(Zq)`
  margin-bottom: 1em;
`,eV=T(Xq)`
  margin-top: 1em;
`,kT=T.h2`
  color: ${e=>e.theme.colors.accent};
`,tV=()=>{const[e,t]=E.useState(window.Notification?window.Notification.permission:void 0),{refreshToken:n}=E.useContext(_u),i=Jq(),o=!!navigator.standalone||window.matchMedia("(display-mode: standalone)").matches,l=E.useCallback(()=>{window.Notification&&typeof window.Notification.requestPermission=="function"&&window.Notification.requestPermission().then(u=>{t(u),u==="granted"&&n()}).catch(u=>{console.error(u),Nr(u)})},[n]);return i&&!o?g.jsxs(by,{children:[g.jsx(kT,{children:"Installation Required"}),g.jsx("p",{children:"To receive notifications on iOS, you must first add this app to your home screen. Tap the share button in Safari and select “Add to Home Screen”, then open the app from there."})]}):e===void 0||!("serviceWorker"in navigator)?g.jsxs(by,{children:[g.jsx(kT,{children:"Unsupported Browser"}),g.jsx("p",{children:"This browser does not support sending you notifications in the background. Alerts for new classes will only display if you keep this tab open."})]}):e!=="granted"?g.jsxs(by,{children:[g.jsx("h2",{children:"Grant notification permissions"}),g.jsx("p",{children:"In order to get notified when any of your alerts trigger, you need to grant permission to send notifications"}),g.jsx(eV,{type:"button",onClick:l,children:"Grant Permission"})]}):null},nV=T.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${Te`
    gap: 16px;
  `}
`,Sy=T.section`
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  overflow: hidden;
`,NT=T.div`
  padding: 20px 24px 0;

  ${Te`
    padding: 16px 16px 0;
  `}
`,MT=T.h2`
  margin: 0 0 4px;
  font-size: 20px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
`,LT=T.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
`,PT=T.div`
  padding: 16px 24px 24px;

  ${Te`
    padding: 12px 16px 16px;
  `}
`,rV=()=>{const e=ws();return g.jsxs(nV,{children:[g.jsx(Sy,{children:g.jsx(Gq,{onAdd:()=>{e(nt.ALERTS_EDITOR,{state:{}})},onEdit:t=>{e(nt.ALERTS_EDITOR,{state:t})},onDuplicate:t=>{e(nt.ALERTS_EDITOR,{state:{...t,id:void 0,created:void 0}})}})}),g.jsxs(Sy,{children:[g.jsxs(NT,{children:[g.jsx(MT,{children:"Preferences"}),g.jsx(LT,{children:"Control how often you receive alert notifications."})]}),g.jsx(PT,{children:g.jsx(eq,{})})]}),g.jsxs(Sy,{children:[g.jsxs(NT,{children:[g.jsx(MT,{children:"Devices"}),g.jsx(LT,{children:"Devices registered to receive push notifications. Removed devices will re-register on their next visit."})]}),g.jsxs(PT,{children:[g.jsx(tV,{}),g.jsx(vq,{})]})]})]})},iV=T.button.attrs({"aria-label":"Close",type:"button"})`
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
`,sV=()=>{const e=et(i=>i.filters.selectedBookableStatuses),t=Mn(),n=E.useCallback(i=>{t(p7(i))},[t]);return{bookableStatuses:e,toggleBookableStatus:n}},oV=T.button`
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
`,aV=T.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px 8px;
`,lV=T.h3`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${e=>e.theme.colors.secondary};
  margin: 0;
`,dp=({label:e,onReset:t,children:n})=>g.jsxs(aV,{children:[g.jsx(lV,{children:e}),t&&g.jsx(oV,{type:"button",onClick:t,children:"Reset"}),n]}),cV=T.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 0 16px 16px;
`,uV=T.button`
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
`,dV=()=>{const{bookableStatuses:e,toggleBookableStatus:t}=sV(),n=qv(),i=[{label:"Free",status:"free",color:n.colors.status.free.text},{label:"Waitlist",status:"waitlist",color:n.colors.status.waitlist.text},{label:"Full",status:"full",color:n.colors.status.full.text}];return g.jsxs("fieldset",{style:{border:"none",margin:0,padding:0},children:[g.jsx("legend",{style:{padding:0,width:"100%"},children:g.jsx(dp,{label:"Status"})}),g.jsx(cV,{children:i.map(o=>{const l=e.includes(o.status);return g.jsx(uV,{type:"button",$active:l,$color:o.color,onClick:()=>t(o.status),"aria-pressed":l,children:o.label},o.status)})})]})},fV=()=>{const e=et(i=>i.filters.selectedDisciplines),t=Mn(),n=E.useCallback(i=>{t(y7(i))},[t]);return{selectedDisciplines:e,toggleDiscipline:n}},$D=T.ul`
  list-style: none;
  margin: 0;
  padding: 0 0 8px;
`,UD=T.li`
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
`,zD=T.span`
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
`,BD=T.span`
  font-size: 14px;
  color: ${e=>e.theme.colors.main};
`,xh=T.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  padding: 8px 16px 16px;
  margin: 0;
`,hV=({discipline:e,checked:t,onClick:n})=>g.jsxs(UD,{$checked:t,onClick:n,role:"checkbox","aria-checked":t,children:[g.jsx(zD,{$checked:t}),g.jsx(yh,{discipline:e,size:24}),g.jsx(BD,{children:e.name})]}),pV=()=>{const e=et(Do),{currentData:t,isLoading:n,error:i}=yb(e),{selectedDisciplines:o,toggleDiscipline:l}=fV(),u=Mn(),f=E.useRef(o);return E.useEffect(()=>{const p=f.current;if(!t||p.length===0)return;const h=new Set(t.map(v=>v.id)),y=p.filter(v=>h.has(v));y.length<p.length&&u(v7(y))},[t,u]),i&&!n?g.jsx(xh,{children:"Failed to load disciplines"}):!t||n?g.jsx(xh,{children:"Loading…"}):g.jsx($D,{children:t.map((p,h)=>g.jsx(hV,{discipline:p,checked:o.includes(p.id),onClick:()=>l(p.id)},h))})},mV=()=>{const e=et(n=>n.filters.selectedDisciplines.length>0),t=Mn();return g.jsxs("div",{children:[g.jsx(dp,{label:"Disciplines",onReset:e?()=>t(_7()):void 0}),g.jsx(pV,{})]})},gV=()=>{const e=et(i=>i.filters.selectedInstructors),t=Mn(),n=E.useCallback(i=>{t(m7(i))},[t]);return{selectedInstructors:e,toggleInstructor:n}},yV=({instructor:e,checked:t,onClick:n})=>g.jsxs(UD,{$checked:t,onClick:n,role:"checkbox","aria-checked":t,children:[g.jsx(zD,{$checked:t}),g.jsx(db,{instructor:e,size:28}),g.jsx(BD,{children:e.name})]}),vV=()=>{const e=et(Do),{currentData:t,isLoading:n,error:i}=vb(e),{selectedInstructors:o,toggleInstructor:l}=gV();return i&&!n?g.jsx(xh,{children:"Failed to load instructors"}):!t||n?g.jsx(xh,{children:"Loading…"}):g.jsx($D,{children:t.map((u,f)=>g.jsx(yV,{instructor:u,checked:o.includes(u.id),onClick:()=>l(u.id)},f))})},_V=()=>{const e=et(n=>n.filters.selectedInstructors.length>0),t=Mn();return g.jsxs("div",{children:[g.jsx(dp,{label:"Instructors",onReset:e?()=>t(g7()):void 0}),g.jsx(vV,{})]})},bV=Object.entries(Ce.STUDIOS).map(([e,t])=>({id:e,label:t.location})),SV=T.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 0 16px 16px;
`,xV=T.label`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  ${Ti}
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
`,wV=T.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`,EV=T.span`
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
`,TV=T.span`
  font-size: 15px;
  color: ${e=>e.theme.colors.main};
`,CV=()=>{const e=Mn(),t=et(Do);return g.jsxs("fieldset",{style:{border:"none",margin:0,padding:0},children:[g.jsx("legend",{style:{padding:0,width:"100%"},children:g.jsx(dp,{label:"Studio"})}),g.jsx(SV,{children:bV.map(n=>{const i=t===n.id;return g.jsxs(xV,{$selected:i,htmlFor:`studio-${n.id}`,children:[g.jsx(wV,{type:"radio",id:`studio-${n.id}`,name:"studio-selected",value:n.id,checked:i,onChange:()=>{i||e(ph(n.id))}}),g.jsx(EV,{$selected:i}),g.jsx(TV,{children:n.label})]},n.id)})})]})},RV=T.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`,AV=T.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 16px 12px;
  border-bottom: 1px solid ${e=>e.theme.borderColor};
  position: sticky;
  top: 0;
  background-color: ${e=>e.theme.colors.secondarySurface};
  z-index: 1;

  ${uD`
    display: flex;
  `}
`,IV=T.h2`
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${e=>e.theme.colors.main};
  margin: 0;
`,DV=T(iV)`
  display: none;

  ${uD`
    display: block;
  `}
`,OV=T.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  overflow-y: auto;
  flex: 1;
`,ff=T.div`
  border-bottom: 1px solid ${e=>e.theme.borderColor};

  &:last-child {
    border-bottom: none;
  }
`,kV=({onClose:e})=>g.jsxs(RV,{children:[g.jsxs(AV,{children:[g.jsx(IV,{children:"Filters"}),g.jsx(DV,{onClick:()=>e()})]}),g.jsxs(OV,{children:[g.jsx(ff,{children:g.jsx(CV,{})}),g.jsx(ff,{children:g.jsx(dV,{})}),g.jsx(ff,{children:g.jsx(mV,{})}),g.jsx(ff,{children:g.jsx(_V,{})})]})]}),NV=()=>{const e=et(Do),{refetch:t}=gb(e);return{refresh:E.useCallback(async()=>{await t()},[t])}},jT=150,$T=60,MV=()=>document.documentElement.scrollTop||document.body.scrollTop,LV=({refresh:e})=>{const t=E.useRef(null),n=E.useRef(null),i=E.useRef(e);E.useLayoutEffect(()=>{i.current=e});const o=E.useMemo(()=>!!navigator.standalone||window.matchMedia("(display-mode: standalone)").matches||!1,[]);return E.useEffect(()=>{if(!o)return;let l=0,u=!1,f=!1,p=!1;const h=x=>{const I=n.current;I&&(I.style.transition=x?"transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease":"none",I.style.transform="",I.style.opacity="0")},y=x=>{l=x.touches[0].clientY,u=!1,f=!1},v=x=>{if(p||MV()>0)return;const I=x.touches[0].clientY-l;if(I<=0){u&&(u=!1,f=!1,h(!1));return}u=!0,f=I>=jT;const C=Math.min(I/jT,1),O=$T*(1-Math.pow(1-C,2)),M=Math.pow(C,.5),R=Math.floor(C*270),D=n.current;D&&(D.style.transition="none",D.style.transform=`translateY(${O}px) rotate(${R}deg)`,D.style.opacity=String(Math.min(M,1)))},_=()=>{if(u)if(u=!1,f&&!p){f=!1,p=!0;const x=n.current;x&&(x.classList.add("animate"),x.style.transition="none",x.style.transform=`translateY(${$T}px)`,x.style.opacity="1");let I=!1;const C=()=>{if(I)return;I=!0,p=!1;const M=n.current;M&&(M.classList.remove("animate"),h(!0))},O=setTimeout(C,1e4);i.current().finally(()=>{clearTimeout(O),C()})}else f=!1,h(!0)},b=()=>{u=!1,f=!1,h(!1)};return document.addEventListener("touchstart",y,{passive:!0}),document.addEventListener("touchmove",v,{passive:!0}),document.addEventListener("touchend",_,{passive:!0}),document.addEventListener("touchcancel",b,{passive:!0}),()=>{document.removeEventListener("touchstart",y),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",_),document.removeEventListener("touchcancel",b)}},[o]),{swipeRef:t,spinnerRef:n}},PV=e=>e.filters.selectedDisciplines.length>0||e.filters.selectedInstructors.length>0,jV=e=>e.filters.selectedBookableStatuses,$V=e=>e.filters.selectedDisciplines,UV=e=>e.filters.selectedInstructors,zV=(e,t)=>t,BV=wi([jV,$V,UV,zV],(e,t,n,i)=>i.filter(o=>e.includes(o.status)).filter(o=>n.length>0?n.some(l=>l===o.instructor.id):!0).filter(o=>t.length>0?t.includes(o.discipline.id):!0)),HD=wi([Do],e=>{if(e)return Ce.STUDIOS[e]}),HV=wi([BV,HD],(e,t)=>{if(e.length===0)return[];const n=t?.timezone||"",i=[];let o=1,l=Va(e[0].start,n,!0),u=[e[0]];for(;o<e.length;){const f=e[o],p=Va(f.start,n,!0);p===l?u.push(f):(i.push({formattedDate:l,classes:u}),l=p,u=[f]),o++}return u.length>0&&i.push({formattedDate:l,classes:u}),i}),UT={free:{label:"Book"},waitlist:{label:"Waitlist"},full:{label:"Full"}},FV=T.a`
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
`,qV=T.div`
  flex-shrink: 0;
  width: 84px;
  ${Te`
    width: 70px;
  `}
`,VV=T.div`
  font-weight: 600;
  font-size: 16px;
  color: ${e=>e.theme.colors.main};
  white-space: nowrap;
  ${Te`
    font-size: 13px;
  `}
`,GV=T.div`
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
  margin-top: 2px;
  ${Te`
    font-size: 11px;
  `}
`,WV=T.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  ${Te`
    display: none;
  `}
`,YV=T.div`
  flex: 1;
  min-width: 0;
`,QV=T.div`
  font-size: 16px;
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${Te`
    font-size: 13px;
  `}
`,KV=T.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  margin-top: 3px;
  ${Te`
    font-size: 12px;
  `}
`,XV=T.span`
  color: ${e=>e.theme.borderColor};
`,ZV=T.div`
  display: none;
  ${Te`
    display: flex;
    align-items: center;
  `}
`,JV=T.button`
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
`,eG=E.memo(({clazz:e})=>{const t=et(HD),n=e.status,i=n==="free"||n==="waitlist",o=E.useMemo(()=>e.customerUrl?new URL(e.customerUrl,"https://schedule.studio.onepeloton.com").href:(Qv("Missing customer URL",{extra:{clazz:e}}),""),[e]),l=E.useMemo(()=>To(e.start,t?.timezone),[e.start,t?.timezone]),u=UT[n]??UT.full;return g.jsxs(FV,{$status:n,$interactive:i,href:o,target:"_blank","aria-label":`${u.label} ${e.name} at ${l}`,children:[g.jsxs(qV,{children:[g.jsx(VV,{children:l}),g.jsxs(GV,{children:[e.duration/60," min"]})]}),g.jsxs(WV,{children:[g.jsx(db,{instructor:e.instructor,size:44}),g.jsx(yh,{discipline:e.discipline,size:36})]}),g.jsxs(YV,{children:[g.jsx(QV,{children:e.name}),g.jsxs(KV,{children:[e.instructor.name,g.jsx(XV,{children:"·"}),e.discipline.name,g.jsx(ZV,{children:g.jsx(yh,{discipline:e.discipline,size:20})})]})]}),g.jsx(JV,{$status:n,disabled:!i,tabIndex:-1,children:u.label})]})}),tG=T.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,nG=T.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,rG=T.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 0 4px 6px;
  border-bottom: 1px solid ${e=>e.theme.borderColor};
  margin-bottom: 2px;
`,iG=T.h2`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${e=>e.theme.colors.main};
  margin: 0;
`,zT=T.span`
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
`,sG=T.div`
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 32px 24px;
  text-align: center;
  ${Te`
    padding: 24px 16px;
  `}
`,oG=T.p`
  font-size: 16px;
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
  margin: 0 0 8px;
`,BT=T.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  margin: 0;
  line-height: 1.5;
`,aG=({classes:e,fulfilledTimeStamp:t})=>{const n=et(u=>HV(u,e)),i=et(PV),o=et(u=>u.filters.selectedBookableStatuses.includes("free")),l=E.useMemo(()=>t?new Intl.DateTimeFormat(void 0,{hour:"numeric",minute:"numeric"}).format(t):void 0,[t]);return n.length===0?g.jsxs(sG,{children:[g.jsx(oG,{children:"No classes found"}),i&&g.jsx(BT,{children:"Try resetting your filters or selecting more options in the sidebar."}),o&&!i&&g.jsx(BT,{children:"New classes usually open at 12:00 pm on Mondays and Thursdays in your studio's timezone."})]}):g.jsx(tG,{children:n.map((u,f)=>g.jsxs(nG,{children:[g.jsxs(rG,{children:[g.jsx(iG,{children:u.formattedDate}),f===0&&l&&g.jsxs(zT,{children:["Times in studio timezone · loaded ",l]}),f===0&&!l&&g.jsx(zT,{children:"All times in studio timezone"})]}),u.classes.map((p,h)=>g.jsx(eG,{clazz:p},h))]},f))})},HT=T.div`
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 32px 24px;
  text-align: center;
  ${Te`
    padding: 24px 16px;
  `}
`,lG=T.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  margin: 0;
`,cG=T.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.error};
  margin: 0 0 6px;
`,uG=T.code`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,dG=()=>{const e=et(Do),{currentData:t,isLoading:n,error:i,fulfilledTimeStamp:o}=gb(e,{refetchOnMountOrArgChange:!0});return i&&!n?g.jsxs(HT,{children:[g.jsx(cG,{children:"Failed to load classes"}),g.jsx(uG,{children:G9(i)})]}):!t||n?g.jsx(HT,{children:g.jsx(lG,{children:"Loading classes…"})}):g.jsx(aG,{classes:t,fulfilledTimeStamp:o})},fG=T.div``,Cv=300,hG=T.aside`
  max-width: 100%;
  width: ${Cv}px;
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
    left: ${e=>e.$toggleVisible?0:-Cv}px;
    z-index: 2;
    box-shadow: ${e=>e.$toggleVisible?"4px 0 16px rgba(0,0,0,0.08)":"none"};
  }
`,pG=T.div`
  flex: 1;
  background-color: ${e=>e.theme.colors.secondarySurface};
  padding: 20px;
  padding-bottom: calc(20px + env(safe-area-inset-bottom, 0px));
  position: relative;
  margin-left: ${Cv}px;

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
`,hf=40,mG=T.div`
  padding-top: 10px;
  position: absolute;
  left: 0;
  width: 100%;
  top: -50px;
  text-align: center;
`,gG=T.div`
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
`,yG=T.div`
  display: none;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;

  @media only screen and (max-width: ${e=>e.theme.widths.tablet}px) {
    display: flex;
  }
`,vG=T.button`
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
`,_G=()=>g.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:g.jsx("path",{d:"M1 3h12M3 7h8M5 11h4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),bG=()=>{const{refresh:e}=NV(),{swipeRef:t,spinnerRef:n}=LV({refresh:e}),[i,o]=E.useState(!1);return g.jsx(hs,{children:g.jsxs(fG,{children:[g.jsx(hG,{$toggleVisible:i,children:g.jsx(kV,{onClose:()=>{o(!1)}})}),g.jsxs(pG,{$toggleVisible:i,onClick:()=>{o(!1)},ref:t,children:[g.jsx(mG,{children:g.jsxs(gG,{ref:n,children:[g.jsx("div",{}),g.jsx("div",{}),g.jsx("div",{})]})}),g.jsx(yG,{children:g.jsxs(vG,{type:"button",onClick:l=>{o(!0),l.stopPropagation()},children:[g.jsx(_G,{}),"Filters"]})}),g.jsx(dG,{})]})]})})},SG=({children:e})=>{const t=et(el),n=et(Z_);return t.state!=="fulfilled"?null:n?g.jsx(g.Fragment,{children:e}):g.jsx(Lv,{to:nt.CLASS_LIST,replace:!0})},FT=e=>{switch(e.code){case"auth/user-not-found":return"No account found with this email address. Please check your email or create a new account.";case"auth/wrong-password":return"Incorrect password. Please try again or reset your password.";case"auth/invalid-email":return"Please enter a valid email address.";case"auth/user-disabled":return"This account has been disabled. Please contact support for assistance.";case"auth/too-many-requests":return"Too many failed login attempts. Please try again later or reset your password.";case"auth/weak-password":return"Password should be at least 6 characters long.";case"auth/email-already-in-use":return"An account with this email already exists. Please sign in instead.";case"auth/invalid-credential":return"Invalid email or password. Please check your credentials and try again.";case"auth/operation-not-allowed":return"This sign-in method is not enabled. Please contact support.";case"auth/account-exists-with-different-credential":return"An account already exists with the same email but different sign-in credentials. Please sign in using the original method.";case"auth/credential-already-in-use":return"This credential is already associated with a different user account.";case"auth/popup-closed-by-user":return"Sign-in was cancelled. Please try again.";case"auth/popup-blocked":return"Pop-up was blocked by your browser. Please allow pop-ups for this site and try again.";case"auth/cancelled-popup-request":return"Sign-in was cancelled. Please try again.";case"auth/network-request-failed":return"Network error occurred. Please check your internet connection and try again.";case"auth/internal-error":return"An internal error occurred. Please try again later.";case"auth/invalid-api-key":return"Configuration error. Please contact support.";case"auth/app-deleted":return"Application error. Please refresh the page and try again.";case"auth/invalid-user-token":return"Your session has expired. Please sign in again.";case"auth/user-token-expired":return"Your session has expired. Please sign in again.";case"auth/null-user":return"No user is currently signed in.";case"auth/requires-recent-login":return"This operation requires recent authentication. Please sign in again.";default:return e.message||"An unexpected error occurred. Please try again."}},xG=T.h1`
  font-size: 26px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
  margin: 0 0 6px;
`,wG=T.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  margin: 0 0 16px;
  line-height: 1.5;
`,EG=T.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,qT=T.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,VT=T.label`
  font-size: 13px;
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
`,GT=T.input`
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
`,TG=T.button`
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
`,CG=T.button`
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
`,RG=T.div`
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
`,AG=T.p`
  margin: 0;
  font-size: 13px;
  color: ${e=>e.theme.colors.error};
`,IG=T.p`
  margin: 32px 0 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
`,DG=T.button`
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
`,OG=()=>{const e=ws(),[t,n]=E.useState(!1),[i,o]=E.useState(""),[l,u]=E.useState(!1),[f,p]=E.useState(""),[h,y]=E.useState(""),v=E.useCallback(async b=>{if(b.preventDefault(),!(!ui||!f||!h)){n(!0),o("");try{l?await qz(ui,f,h):await Vz(ui,f,h),e(nt.CLASS_LIST)}catch(x){console.error("Email auth error:",x);const I=x&&typeof x=="object"&&"code"in x?FT(x):"Authentication failed";o(I),Nr(x)}finally{n(!1)}}},[f,h,l,e]),_=E.useCallback(async()=>{if(ui){n(!0),o("");try{const b=new ci;await p8(ui,b),e(nt.CLASS_LIST)}catch(b){console.error("Google sign-in error:",b);const x=b&&typeof b=="object"&&"code"in b?FT(b):"Google sign-in failed";o(x),Nr(b)}finally{n(!1)}}},[e]);return g.jsxs("div",{children:[g.jsx(xG,{children:l?"Create account":"Sign in"}),g.jsx(wG,{children:"Set alerts, persist filters across devices, and access beta features."}),g.jsxs(EG,{onSubmit:v,children:[g.jsxs(qT,{children:[g.jsx(VT,{htmlFor:"signin-email",children:"Email"}),g.jsx(GT,{id:"signin-email",type:"email",placeholder:"you@example.com",value:f,onChange:b=>p(b.target.value),required:!0,disabled:t})]}),g.jsxs(qT,{children:[g.jsx(VT,{htmlFor:"signin-password",children:"Password"}),g.jsx(GT,{id:"signin-password",type:"password",placeholder:"••••••••",value:h,onChange:b=>y(b.target.value),required:!0,disabled:t})]}),i&&g.jsx(AG,{role:"alert",children:i}),g.jsx(TG,{type:"submit",disabled:t,children:t?"Loading…":l?"Create account":"Sign in"})]}),g.jsx(RG,{style:{marginTop:20,marginBottom:16},children:"or"}),g.jsx(CG,{type:"button",onClick:_,disabled:t,children:"Continue with Google"}),g.jsxs(IG,{children:[l?"Already have an account?":"Don't have an account?"," ",g.jsx(DG,{type:"button",onClick:()=>{u(!l),o("")},disabled:t,children:l?"Sign in":"Create account"})]})]})},kG=wi([el],e=>e.state==="fulfilled"&&!!e.data),NG=T.div`
  padding: 32px 20px;
  display: flex;
  justify-content: center;

  ${Te`
    padding: 16px 12px;
  `}
`,MG=T.div`
  width: 100%;
  max-width: 400px;
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 32px;

  ${Te`
    padding: 24px 20px;
  `}
`,LG=()=>et(kG)?g.jsx(Lv,{to:nt.CLASS_LIST}):g.jsx(hs,{children:g.jsx(NG,{children:g.jsx(MG,{children:g.jsx(OG,{})})})});function PG(e){const t=[];for(let n=e-1;n>=0;n--){const i=new Date;i.setDate(i.getDate()-n),t.push(i.toISOString().slice(0,10))}return t}function jG(e=14){const[t,n]=E.useState({state:"idle"});return E.useEffect(()=>{if(!xn){n({state:"failed",error:new Error("No database")});return}n({state:"loading"}),EI(ir(xn,"metrics")).then(i=>{const o=i.val()??{},u=PG(e).map(f=>{const p=o[f]??{},h=p.diffs??{},y={};for(const[_,b]of Object.entries(h))y[_]={added:b.added??0,changed:b.changed??0,removed:b.removed??0};const v=p.notifications??{};return{date:f,diffs:y,notifications:{sent:v.sent??0,failed:v.failed??0,usersReached:v.usersReached??0}}});n({state:"fulfilled",data:u})}).catch(i=>{n({state:"failed",error:i})})},[e]),t}const xy=T.div`
  padding: 32px 24px;
  max-width: 900px;
  margin: 0 auto;

  ${Te`
    padding: 20px 16px;
  `}
`,wy=T.h1`
  font-size: 22px;
  font-weight: 700;
  color: ${e=>e.theme.colors.main};
  margin: 0 0 28px;
`,WT=T.section`
  margin-bottom: 40px;
`,YT=T.h2`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${e=>e.theme.colors.secondary};
  margin: 0 0 16px;
`,$G=T.div`
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
`,QT=T.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
`,wh=1e3,Of=140,Eh=12,FD=4,qD=Of-Eh-FD;function _c(e,t){return t<=1?wh/2:e/(t-1)*wh}function Ey(e,t){return Eh+qD*(1-e/t)}const UG=[.25,.5,.75],zG=T.div`
  background: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 16px 16px 12px;
`,BG=T.svg`
  display: block;
  width: 100%;
  height: 140px;
  /* currentColor is used by grid lines so they inherit the theme secondary color */
  color: ${e=>e.theme.colors.secondary};
`,HG=T.div`
  display: flex;
  margin-top: 6px;
`,FG=T.div`
  flex: 1;
  text-align: center;
  font-size: 10px;
  color: ${e=>e.theme.colors.secondary};
  overflow: hidden;
`,qG=T.div`
  display: flex;
  gap: 16px;
  margin-top: 12px;
  flex-wrap: wrap;
`,VG=T.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,GG=T.div`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  background-color: ${e=>e.$color};
  flex-shrink: 0;
`;function WG(e){const[,t,n]=e.split("-");return`${parseInt(t)}/${parseInt(n)}`}function YG({days:e,legend:t}){return g.jsxs(g.Fragment,{children:[g.jsx(HG,{children:e.map(n=>g.jsx(FG,{children:WG(n.date)},n.date))}),g.jsx(qG,{children:t.map(n=>g.jsxs(VG,{children:[g.jsx(GG,{$color:n.color}),n.label]},n.label))})]})}const QG=T.div`
  position: relative;
`,KG=T.div`
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
`,XG=T.div`
  font-size: 11px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,ZG=T.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: ${e=>e.theme.colors.secondary};
  line-height: 1.6;
`,JG=T.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${e=>e.$color};
  flex-shrink: 0;
`,eW=T.span`
  margin-left: auto;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
`,tW=T.div`
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${e=>e.$color};
  border: 2px solid ${e=>e.theme.colors.mainSurface};
  transform: translate(-50%, -50%);
  pointer-events: none;
`;function KT({days:e,seriesForDay:t,legend:n}){const i=e.length,[o,l]=E.useState(null),u=e.map(t),f=Math.max(...u.flatMap(_=>_.map(b=>b.value)),1),p=u[0].length,h=Ey(0,f).toFixed(1);function y(_,b){const{left:x,width:I}=b.getBoundingClientRect(),C=(_-x)/I;return Math.max(0,Math.min(i-1,Math.round(C*(i-1))))}const v=o!==null?o/(i-1)*100:null;return g.jsxs(zG,{children:[g.jsxs(QG,{children:[o!==null&&v!==null&&g.jsxs(g.Fragment,{children:[g.jsxs(KG,{$pct:v,children:[g.jsx(XG,{children:e[o].date}),u[o].map(_=>g.jsxs(ZG,{children:[g.jsx(JG,{$color:_.color}),_.label,g.jsx(eW,{children:_.value})]},_.label))]}),u[o].map((_,b)=>g.jsx(tW,{$color:_.color,style:{left:`${v}%`,top:`${Ey(_.value,f)/Of*100}%`}},b))]}),g.jsxs(BG,{viewBox:`0 0 ${wh} ${Of}`,preserveAspectRatio:"none","aria-hidden":"true",style:{cursor:"crosshair",display:"block"},onMouseMove:_=>l(y(_.clientX,_.currentTarget)),onMouseLeave:()=>l(null),onTouchStart:_=>l(y(_.touches[0].clientX,_.currentTarget)),onTouchMove:_=>l(y(_.touches[0].clientX,_.currentTarget)),onTouchEnd:()=>l(null),children:[UG.map(_=>{const b=(Eh+qD*(1-_)).toFixed(1);return g.jsx("line",{x1:0,y1:b,x2:wh,y2:b,stroke:"currentColor",strokeOpacity:.1,strokeWidth:1,vectorEffect:"non-scaling-stroke"},_)}),o!==null&&g.jsx("line",{x1:_c(o,i).toFixed(1),y1:Eh,x2:_c(o,i).toFixed(1),y2:Of-FD,stroke:"currentColor",strokeOpacity:.2,strokeWidth:1,vectorEffect:"non-scaling-stroke"}),Array.from({length:p},(_,b)=>{const x=u[0][b].color,C=u.map((M,R)=>({x:_c(R,i),y:Ey(M[b].value,f)})).map(({x:M,y:R},D)=>`${D===0?"M":"L"}${M.toFixed(1)},${R.toFixed(1)}`).join(" "),O=[C,`L${_c(i-1,i).toFixed(1)},${h}`,`L${_c(0,i).toFixed(1)},${h}`,"Z"].join(" ");return g.jsxs("g",{children:[g.jsx("path",{d:O,fill:x,fillOpacity:.12}),g.jsx("path",{d:C,fill:"none",stroke:x,strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})]},b)})]})]}),g.jsx(YG,{days:e,legend:n})]})}const Wn={added:"#4ade80",changed:"#facc15",removed:"#f87171",sent:"#60a5fa",failed:"#f87171",usersReached:"#a78bfa"},nW=()=>{const e=jG(14);if(e.state==="idle"||e.state==="loading")return g.jsx(hs,{children:g.jsxs(xy,{children:[g.jsx(wy,{children:"Stats"}),g.jsx(QT,{children:"Loading…"})]})});if(e.state==="failed")return g.jsx(hs,{children:g.jsxs(xy,{children:[g.jsx(wy,{children:"Stats"}),g.jsxs(QT,{children:["Failed to load metrics: ",e.error.message??"unknown error"]})]})});const t=e.data,n=t.reduce((o,l)=>{o.sent+=l.notifications.sent,o.failed+=l.notifications.failed,o.usersReached+=l.notifications.usersReached;for(const u of Object.values(l.diffs))o.added+=u.added,o.changed+=u.changed,o.removed+=u.removed;return o},{sent:0,failed:0,usersReached:0,added:0,changed:0,removed:0}),i=[...new Set(t.flatMap(o=>Object.keys(o.diffs)))];return g.jsx(hs,{children:g.jsxs(xy,{children:[g.jsx(wy,{children:"Stats"}),g.jsxs($G,{children:[g.jsxs(ya,{children:[g.jsx(va,{children:"Notifications sent (14d)"}),g.jsx(_a,{children:n.sent.toLocaleString()})]}),g.jsxs(ya,{children:[g.jsx(va,{children:"Users reached (14d)"}),g.jsx(_a,{children:n.usersReached.toLocaleString()})]}),g.jsxs(ya,{children:[g.jsx(va,{children:"Delivery failures (14d)"}),g.jsx(_a,{children:n.failed.toLocaleString()})]}),g.jsxs(ya,{children:[g.jsx(va,{children:"Classes added (14d)"}),g.jsx(_a,{children:n.added.toLocaleString()})]}),g.jsxs(ya,{children:[g.jsx(va,{children:"Classes changed (14d)"}),g.jsx(_a,{children:n.changed.toLocaleString()})]}),g.jsxs(ya,{children:[g.jsx(va,{children:"Classes removed (14d)"}),g.jsx(_a,{children:n.removed.toLocaleString()})]})]}),g.jsxs(WT,{children:[g.jsx(YT,{children:"Push notifications (14 days)"}),g.jsx(KT,{days:t,seriesForDay:o=>[{value:o.notifications.sent,color:Wn.sent,label:"Sent"},{value:o.notifications.failed,color:Wn.failed,label:"Failed"},{value:o.notifications.usersReached,color:Wn.usersReached,label:"Users reached"}],legend:[{color:Wn.sent,label:"Sent"},{color:Wn.failed,label:"Failed"},{color:Wn.usersReached,label:"Users reached"}]})]}),i.map(o=>g.jsxs(WT,{children:[g.jsxs(YT,{children:["Schedule changes — ",Ce.STUDIOS[o]?.location??o," (14 days)"]}),g.jsx(KT,{days:t,seriesForDay:l=>{const u=l.diffs[o]??{added:0,changed:0,removed:0};return[{value:u.added,color:Wn.added,label:"Added"},{value:u.changed,color:Wn.changed,label:"Changed"},{value:u.removed,color:Wn.removed,label:"Removed"}]},legend:[{color:Wn.added,label:"Added"},{color:Wn.changed,label:"Changed"},{color:Wn.removed,label:"Removed"}]})]},o))]})})},rW=T.div`
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
`,iW=T.div`
  font-size: 48px;
  margin-bottom: 20px;
`,sW=T.h1`
  font-size: 22px;
  font-weight: 700;
  color: ${e=>e.theme.colors.main};
  margin: 0 0 12px;
`,oW=T.p`
  font-size: 15px;
  line-height: 1.6;
  color: ${e=>e.theme.colors.secondary};
  margin: 0 0 28px;
`,aW=T.div`
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
`,XT=T.span`
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: ${e=>e.theme.colors.secondary};
`,ZT=T.span`
  font-size: 15px;
  color: ${e=>e.theme.colors.main};
`,lW=T.a`
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
`,cW=T.p`
  margin: 16px 0 0;
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
`;function uW(e,t){if(!e)return null;try{const n=Ce.STUDIOS[t]?.timezone;return new Date(e).toLocaleString("en-US",{timeZone:n??"UTC",weekday:"short",month:"short",day:"numeric",hour:"numeric",minute:"2-digit",timeZoneName:"short"})}catch{return null}}const dW=()=>{const[e]=M2(),t=e.get("studioId")??"",n=e.get("startsAt")??"",i=e.get("waitingCount"),o=Ce.STUDIOS[t],l=uW(n,t),u=i!==null?parseInt(i,10):null;return g.jsx(hs,{children:g.jsxs(rW,{children:[g.jsx(iW,{children:"📬"}),g.jsx(sW,{children:"Waitlist count changed"}),g.jsxs(oW,{children:["The number of people on the waitlist just changed",u!==null?` — there ${u===1?"is now 1 person":`are now ${u} people`} ahead`:"",". If you joined this waitlist, check your email — Peloton sends a message when it's your turn, and you'll have a 2-hour window to accept."]}),(l||o)&&g.jsxs(aW,{children:[o&&g.jsxs(g.Fragment,{children:[g.jsx(XT,{children:"Studio"}),g.jsx(ZT,{children:o.location})]}),l&&g.jsxs(g.Fragment,{children:[g.jsx(XT,{style:{marginTop:o?8:0},children:"Class time"}),g.jsx(ZT,{children:l})]})]}),g.jsx(lW,{href:"mailto:",children:"Open Mail App"}),g.jsx(cW,{children:"Opens your device's default mail app."})]})})},fW=A2(i2(g.jsxs(Yn,{children:[g.jsx(Yn,{path:nt.CLASS_LIST,element:g.jsx(bG,{})}),g.jsxs(Yn,{path:nt.ALERTS,element:g.jsx(H7,{}),children:[g.jsx(Yn,{index:!0,element:g.jsx(rV,{})}),g.jsx(Yn,{path:"edit",element:g.jsx(t7,{})}),g.jsx(Yn,{path:":alertId/test",element:g.jsx(OH,{})})]}),g.jsx(Yn,{path:nt.WAITLIST_ALERT,element:g.jsx(dW,{})}),g.jsx(Yn,{path:nt.SIGN_IN,element:g.jsx(LG,{})}),g.jsx(Yn,{path:nt.ABOUT,element:g.jsx(QB,{})}),g.jsx(Yn,{path:nt.STATS,element:g.jsx(SG,{children:g.jsx(nW,{})})}),g.jsx(Yn,{path:"*",element:g.jsx(Lv,{to:nt.CLASS_LIST,replace:!0})})]}))),hW=(e,t)=>({id:e.uid,displayName:e.displayName||e.email||"",isAdmin:t}),pW=({children:e})=>{const t=Mn();return E.useEffect(()=>{if(t(IT()),!ui)return t(DT()),()=>{};const n=Yz(ui,async i=>{if(t(IT()),i){let o=!1;try{o=(xn?await EI(ir(xn,`admins/${i.uid}`)):null)?.val()===!0}catch{}t(C7(hW(i,o)))}else t(DT())});return()=>n()},[t]),g.jsx(g.Fragment,{children:e})},mW={mode:"light",borderRadius:"8px",borderColor:"#d1d1d1",colors:{main:"#494f59",secondary:"#514e60",mainSurface:"#fff",secondarySurface:"#ededed",accent:"#cb3449",error:"#d93025",hoverSurface:"rgba(0, 0, 0, 0.05)",status:{free:{bg:"#e8f5e9",text:"#2e7d32"},waitlist:{bg:"#fff3e0",text:"#e65100"},full:{text:"#9e9e9e"}}},widths:{tablet:1024,mobile:560}},gW={mode:"dark",borderRadius:"8px",borderColor:"#2e2f45",colors:{main:"#e2e4eb",secondary:"#9b98b0",mainSurface:"#1c1d2e",secondarySurface:"#13141f",accent:"#cb3449",error:"#ef5350",hoverSurface:"rgba(255, 255, 255, 0.08)",status:{free:{bg:"rgba(46, 125, 50, 0.15)",text:"#81c784"},waitlist:{bg:"rgba(230, 81, 0, 0.15)",text:"#ffb74d"},full:{text:"#757575"}}},widths:{tablet:1024,mobile:560}},yW=FL`
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
`,Rv="theme-mode";function vW(){const e=localStorage.getItem(Rv);return e!==null?e==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches}function _W(){const[e,t]=E.useState(vW),n=E.useCallback(()=>{t(i=>{const o=!i;return localStorage.setItem(Rv,o?"dark":"light"),o})},[]);return E.useEffect(()=>{const i=window.matchMedia("(prefers-color-scheme: dark)"),o=l=>{localStorage.getItem(Rv)===null&&t(l.matches)};return i.addEventListener("change",o),()=>i.removeEventListener("change",o)},[]),{isDark:e,toggle:n}}function bW(){const{isDark:e,toggle:t}=_W();return E.useEffect(()=>{const i=new URLSearchParams(window.location.search).get("classUrl");i&&(window.history.replaceState(null,"",window.location.pathname+window.location.hash),window.location.assign(new URL(i,"https://schedule.studio.onepeloton.com").href))},[]),g.jsx(lD.Provider,{value:{isDark:e,toggle:t},children:g.jsxs(zL,{theme:e?gW:mW,children:[g.jsx(yW,{}),g.jsx(SN,{store:up,children:g.jsx(pW,{children:g.jsx(GU,{children:g.jsx(B2,{router:fW})})})})]})})}sN.createRoot(document.getElementById("root")).render(g.jsx(E.StrictMode,{children:g.jsx(bW,{})}));
//# sourceMappingURL=index-BpCOTxts.js.map

//# debugId=1c6d1588-8a6f-541c-bd6a-667b285b2546
