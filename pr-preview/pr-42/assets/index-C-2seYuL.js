(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function wN(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ug={exports:{}},tc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L1;function EN(){if(L1)return tc;L1=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(i,o,l){var u=null;if(l!==void 0&&(u=""+l),o.key!==void 0&&(u=""+o.key),"key"in o){l={};for(var f in o)f!=="key"&&(l[f]=o[f])}else l=o;return o=l.ref,{$$typeof:e,type:i,key:u,ref:o!==void 0?o:null,props:l}}return tc.Fragment=t,tc.jsx=n,tc.jsxs=n,tc}var P1;function xN(){return P1||(P1=1,ug.exports=EN()),ug.exports}var v=xN(),dg={exports:{}},je={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j1;function TN(){if(j1)return je;j1=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function _(N){return N===null||typeof N!="object"?null:(N=y&&N[y]||N["@@iterator"],typeof N=="function"?N:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,O={};function T(N,X,le){this.props=N,this.context=X,this.refs=O,this.updater=le||S}T.prototype.isReactComponent={},T.prototype.setState=function(N,X){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,X,"setState")},T.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function A(){}A.prototype=T.prototype;function k(N,X,le){this.props=N,this.context=X,this.refs=O,this.updater=le||S}var x=k.prototype=new A;x.constructor=k,w(x,T.prototype),x.isPureReactComponent=!0;var I=Array.isArray,M={H:null,A:null,T:null,S:null,V:null},R=Object.prototype.hasOwnProperty;function P(N,X,le,ie,de,me){return le=me.ref,{$$typeof:e,type:N,key:X,ref:le!==void 0?le:null,props:me}}function V(N,X){return P(N.type,X,void 0,void 0,void 0,N.props)}function H(N){return typeof N=="object"&&N!==null&&N.$$typeof===e}function B(N){var X={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(le){return X[le]})}var z=/\/+/g;function G(N,X){return typeof N=="object"&&N!==null&&N.key!=null?B(""+N.key):X.toString(36)}function F(){}function K(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(F,F):(N.status="pending",N.then(function(X){N.status==="pending"&&(N.status="fulfilled",N.value=X)},function(X){N.status==="pending"&&(N.status="rejected",N.reason=X)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function ue(N,X,le,ie,de){var me=typeof N;(me==="undefined"||me==="boolean")&&(N=null);var pe=!1;if(N===null)pe=!0;else switch(me){case"bigint":case"string":case"number":pe=!0;break;case"object":switch(N.$$typeof){case e:case t:pe=!0;break;case g:return pe=N._init,ue(pe(N._payload),X,le,ie,de)}}if(pe)return de=de(N),pe=ie===""?"."+G(N,0):ie,I(de)?(le="",pe!=null&&(le=pe.replace(z,"$&/")+"/"),ue(de,X,le,"",function(De){return De})):de!=null&&(H(de)&&(de=V(de,le+(de.key==null||N&&N.key===de.key?"":(""+de.key).replace(z,"$&/")+"/")+pe)),X.push(de)),1;pe=0;var Ae=ie===""?".":ie+":";if(I(N))for(var be=0;be<N.length;be++)ie=N[be],me=Ae+G(ie,be),pe+=ue(ie,X,le,me,de);else if(be=_(N),typeof be=="function")for(N=be.call(N),be=0;!(ie=N.next()).done;)ie=ie.value,me=Ae+G(ie,be++),pe+=ue(ie,X,le,me,de);else if(me==="object"){if(typeof N.then=="function")return ue(K(N),X,le,ie,de);throw X=String(N),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return pe}function U(N,X,le){if(N==null)return N;var ie=[],de=0;return ue(N,ie,"","",function(me){return X.call(le,me,de++)}),ie}function ee(N){if(N._status===-1){var X=N._result;X=X(),X.then(function(le){(N._status===0||N._status===-1)&&(N._status=1,N._result=le)},function(le){(N._status===0||N._status===-1)&&(N._status=2,N._result=le)}),N._status===-1&&(N._status=0,N._result=X)}if(N._status===1)return N._result.default;throw N._result}var ne=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function ae(){}return je.Children={map:U,forEach:function(N,X,le){U(N,function(){X.apply(this,arguments)},le)},count:function(N){var X=0;return U(N,function(){X++}),X},toArray:function(N){return U(N,function(X){return X})||[]},only:function(N){if(!H(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},je.Component=T,je.Fragment=n,je.Profiler=o,je.PureComponent=k,je.StrictMode=i,je.Suspense=h,je.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=M,je.__COMPILER_RUNTIME={__proto__:null,c:function(N){return M.H.useMemoCache(N)}},je.cache=function(N){return function(){return N.apply(null,arguments)}},je.cloneElement=function(N,X,le){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var ie=w({},N.props),de=N.key,me=void 0;if(X!=null)for(pe in X.ref!==void 0&&(me=void 0),X.key!==void 0&&(de=""+X.key),X)!R.call(X,pe)||pe==="key"||pe==="__self"||pe==="__source"||pe==="ref"&&X.ref===void 0||(ie[pe]=X[pe]);var pe=arguments.length-2;if(pe===1)ie.children=le;else if(1<pe){for(var Ae=Array(pe),be=0;be<pe;be++)Ae[be]=arguments[be+2];ie.children=Ae}return P(N.type,de,void 0,void 0,me,ie)},je.createContext=function(N){return N={$$typeof:u,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:l,_context:N},N},je.createElement=function(N,X,le){var ie,de={},me=null;if(X!=null)for(ie in X.key!==void 0&&(me=""+X.key),X)R.call(X,ie)&&ie!=="key"&&ie!=="__self"&&ie!=="__source"&&(de[ie]=X[ie]);var pe=arguments.length-2;if(pe===1)de.children=le;else if(1<pe){for(var Ae=Array(pe),be=0;be<pe;be++)Ae[be]=arguments[be+2];de.children=Ae}if(N&&N.defaultProps)for(ie in pe=N.defaultProps,pe)de[ie]===void 0&&(de[ie]=pe[ie]);return P(N,me,void 0,void 0,null,de)},je.createRef=function(){return{current:null}},je.forwardRef=function(N){return{$$typeof:f,render:N}},je.isValidElement=H,je.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:ee}},je.memo=function(N,X){return{$$typeof:p,type:N,compare:X===void 0?null:X}},je.startTransition=function(N){var X=M.T,le={};M.T=le;try{var ie=N(),de=M.S;de!==null&&de(le,ie),typeof ie=="object"&&ie!==null&&typeof ie.then=="function"&&ie.then(ae,ne)}catch(me){ne(me)}finally{M.T=X}},je.unstable_useCacheRefresh=function(){return M.H.useCacheRefresh()},je.use=function(N){return M.H.use(N)},je.useActionState=function(N,X,le){return M.H.useActionState(N,X,le)},je.useCallback=function(N,X){return M.H.useCallback(N,X)},je.useContext=function(N){return M.H.useContext(N)},je.useDebugValue=function(){},je.useDeferredValue=function(N,X){return M.H.useDeferredValue(N,X)},je.useEffect=function(N,X,le){var ie=M.H;if(typeof le=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ie.useEffect(N,X)},je.useId=function(){return M.H.useId()},je.useImperativeHandle=function(N,X,le){return M.H.useImperativeHandle(N,X,le)},je.useInsertionEffect=function(N,X){return M.H.useInsertionEffect(N,X)},je.useLayoutEffect=function(N,X){return M.H.useLayoutEffect(N,X)},je.useMemo=function(N,X){return M.H.useMemo(N,X)},je.useOptimistic=function(N,X){return M.H.useOptimistic(N,X)},je.useReducer=function(N,X,le){return M.H.useReducer(N,X,le)},je.useRef=function(N){return M.H.useRef(N)},je.useState=function(N){return M.H.useState(N)},je.useSyncExternalStore=function(N,X,le){return M.H.useSyncExternalStore(N,X,le)},je.useTransition=function(){return M.H.useTransition()},je.version="19.1.1",je}var U1;function bh(){return U1||(U1=1,dg.exports=TN()),dg.exports}var C=bh();const co=wN(C);var fg={exports:{}},nc={},hg={exports:{}},pg={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $1;function CN(){return $1||($1=1,(function(e){function t(U,ee){var ne=U.length;U.push(ee);e:for(;0<ne;){var ae=ne-1>>>1,N=U[ae];if(0<o(N,ee))U[ae]=ee,U[ne]=N,ne=ae;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var ee=U[0],ne=U.pop();if(ne!==ee){U[0]=ne;e:for(var ae=0,N=U.length,X=N>>>1;ae<X;){var le=2*(ae+1)-1,ie=U[le],de=le+1,me=U[de];if(0>o(ie,ne))de<N&&0>o(me,ie)?(U[ae]=me,U[de]=ne,ae=de):(U[ae]=ie,U[le]=ne,ae=le);else if(de<N&&0>o(me,ne))U[ae]=me,U[de]=ne,ae=de;else break e}}return ee}function o(U,ee){var ne=U.sortIndex-ee.sortIndex;return ne!==0?ne:U.id-ee.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();e.unstable_now=function(){return u.now()-f}}var h=[],p=[],g=1,y=null,_=3,S=!1,w=!1,O=!1,T=!1,A=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;function I(U){for(var ee=n(p);ee!==null;){if(ee.callback===null)i(p);else if(ee.startTime<=U)i(p),ee.sortIndex=ee.expirationTime,t(h,ee);else break;ee=n(p)}}function M(U){if(O=!1,I(U),!w)if(n(h)!==null)w=!0,R||(R=!0,G());else{var ee=n(p);ee!==null&&ue(M,ee.startTime-U)}}var R=!1,P=-1,V=5,H=-1;function B(){return T?!0:!(e.unstable_now()-H<V)}function z(){if(T=!1,R){var U=e.unstable_now();H=U;var ee=!0;try{e:{w=!1,O&&(O=!1,k(P),P=-1),S=!0;var ne=_;try{t:{for(I(U),y=n(h);y!==null&&!(y.expirationTime>U&&B());){var ae=y.callback;if(typeof ae=="function"){y.callback=null,_=y.priorityLevel;var N=ae(y.expirationTime<=U);if(U=e.unstable_now(),typeof N=="function"){y.callback=N,I(U),ee=!0;break t}y===n(h)&&i(h),I(U)}else i(h);y=n(h)}if(y!==null)ee=!0;else{var X=n(p);X!==null&&ue(M,X.startTime-U),ee=!1}}break e}finally{y=null,_=ne,S=!1}ee=void 0}}finally{ee?G():R=!1}}}var G;if(typeof x=="function")G=function(){x(z)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,K=F.port2;F.port1.onmessage=z,G=function(){K.postMessage(null)}}else G=function(){A(z,0)};function ue(U,ee){P=A(function(){U(e.unstable_now())},ee)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(U){U.callback=null},e.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<U?Math.floor(1e3/U):5},e.unstable_getCurrentPriorityLevel=function(){return _},e.unstable_next=function(U){switch(_){case 1:case 2:case 3:var ee=3;break;default:ee=_}var ne=_;_=ee;try{return U()}finally{_=ne}},e.unstable_requestPaint=function(){T=!0},e.unstable_runWithPriority=function(U,ee){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var ne=_;_=U;try{return ee()}finally{_=ne}},e.unstable_scheduleCallback=function(U,ee,ne){var ae=e.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?ae+ne:ae):ne=ae,U){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=ne+N,U={id:g++,callback:ee,priorityLevel:U,startTime:ne,expirationTime:N,sortIndex:-1},ne>ae?(U.sortIndex=ne,t(p,U),n(h)===null&&U===n(p)&&(O?(k(P),P=-1):O=!0,ue(M,ne-ae))):(U.sortIndex=N,t(h,U),w||S||(w=!0,R||(R=!0,G()))),U},e.unstable_shouldYield=B,e.unstable_wrapCallback=function(U){var ee=_;return function(){var ne=_;_=ee;try{return U.apply(this,arguments)}finally{_=ne}}}})(pg)),pg}var z1;function RN(){return z1||(z1=1,hg.exports=CN()),hg.exports}var mg={exports:{}},rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B1;function AN(){if(B1)return rn;B1=1;var e=bh();function t(h){var p="https://react.dev/errors/"+h;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+h+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var i={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function l(h,p,g){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:y==null?null:""+y,children:h,containerInfo:p,implementation:g}}var u=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(h,p){if(h==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,rn.createPortal=function(h,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return l(h,p,null,g)},rn.flushSync=function(h){var p=u.T,g=i.p;try{if(u.T=null,i.p=2,h)return h()}finally{u.T=p,i.p=g,i.d.f()}},rn.preconnect=function(h,p){typeof h=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,i.d.C(h,p))},rn.prefetchDNS=function(h){typeof h=="string"&&i.d.D(h)},rn.preinit=function(h,p){if(typeof h=="string"&&p&&typeof p.as=="string"){var g=p.as,y=f(g,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?i.d.S(h,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:y,integrity:_,fetchPriority:S}):g==="script"&&i.d.X(h,{crossOrigin:y,integrity:_,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},rn.preinitModule=function(h,p){if(typeof h=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=f(p.as,p.crossOrigin);i.d.M(h,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&i.d.M(h)},rn.preload=function(h,p){if(typeof h=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,y=f(g,p.crossOrigin);i.d.L(h,g,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},rn.preloadModule=function(h,p){if(typeof h=="string")if(p){var g=f(p.as,p.crossOrigin);i.d.m(h,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else i.d.m(h)},rn.requestFormReset=function(h){i.d.r(h)},rn.unstable_batchedUpdates=function(h,p){return h(p)},rn.useFormState=function(h,p,g){return u.H.useFormState(h,p,g)},rn.useFormStatus=function(){return u.H.useHostTransitionStatus()},rn.version="19.1.1",rn}var H1;function IT(){if(H1)return mg.exports;H1=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),mg.exports=AN(),mg.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F1;function IN(){if(F1)return nc;F1=1;var e=RN(),t=bh(),n=IT();function i(r){var s="https://react.dev/errors/"+r;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function l(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function u(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function f(r){if(l(r)!==r)throw Error(i(188))}function h(r){var s=r.alternate;if(!s){if(s=l(r),s===null)throw Error(i(188));return s!==r?null:r}for(var a=r,c=s;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return f(d),r;if(m===c)return f(d),s;m=m.sibling}throw Error(i(188))}if(a.return!==c.return)a=d,c=m;else{for(var b=!1,E=d.child;E;){if(E===a){b=!0,a=d,c=m;break}if(E===c){b=!0,c=d,a=m;break}E=E.sibling}if(!b){for(E=m.child;E;){if(E===a){b=!0,a=m,c=d;break}if(E===c){b=!0,c=m,a=d;break}E=E.sibling}if(!b)throw Error(i(189))}}if(a.alternate!==c)throw Error(i(190))}if(a.tag!==3)throw Error(i(188));return a.stateNode.current===a?r:s}function p(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r;for(r=r.child;r!==null;){if(s=p(r),s!==null)return s;r=r.sibling}return null}var g=Object.assign,y=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),k=Symbol.for("react.consumer"),x=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),R=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),H=Symbol.for("react.activity"),B=Symbol.for("react.memo_cache_sentinel"),z=Symbol.iterator;function G(r){return r===null||typeof r!="object"?null:(r=z&&r[z]||r["@@iterator"],typeof r=="function"?r:null)}var F=Symbol.for("react.client.reference");function K(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===F?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case w:return"Fragment";case T:return"Profiler";case O:return"StrictMode";case M:return"Suspense";case R:return"SuspenseList";case H:return"Activity"}if(typeof r=="object")switch(r.$$typeof){case S:return"Portal";case x:return(r.displayName||"Context")+".Provider";case k:return(r._context.displayName||"Context")+".Consumer";case I:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case P:return s=r.displayName||null,s!==null?s:K(r.type)||"Memo";case V:s=r._payload,r=r._init;try{return K(r(s))}catch{}}return null}var ue=Array.isArray,U=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},ae=[],N=-1;function X(r){return{current:r}}function le(r){0>N||(r.current=ae[N],ae[N]=null,N--)}function ie(r,s){N++,ae[N]=r.current,r.current=s}var de=X(null),me=X(null),pe=X(null),Ae=X(null);function be(r,s){switch(ie(pe,s),ie(me,r),ie(de,null),s.nodeType){case 9:case 11:r=(r=s.documentElement)&&(r=r.namespaceURI)?c1(r):0;break;default:if(r=s.tagName,s=s.namespaceURI)s=c1(s),r=u1(s,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}le(de),ie(de,r)}function De(){le(de),le(me),le(pe)}function $e(r){r.memoizedState!==null&&ie(Ae,r);var s=de.current,a=u1(s,r.type);s!==a&&(ie(me,r),ie(de,a))}function _t(r){me.current===r&&(le(de),le(me)),Ae.current===r&&(le(Ae),Kl._currentValue=ne)}var gt=Object.prototype.hasOwnProperty,kn=e.unstable_scheduleCallback,Et=e.unstable_cancelCallback,Ln=e.unstable_shouldYield,Lr=e.unstable_requestPaint,Yt=e.unstable_now,sl=e.unstable_getCurrentPriorityLevel,Ss=e.unstable_ImmediatePriority,Oo=e.unstable_UserBlockingPriority,No=e.unstable_NormalPriority,Pr=e.unstable_LowPriority,wi=e.unstable_IdlePriority,Ru=e.log,ol=e.unstable_setDisableYieldValue,hn=null,bt=null;function nr(r){if(typeof Ru=="function"&&ol(r),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(hn,r)}catch{}}var Wt=Math.clz32?Math.clz32:Au,op=Math.log,_r=Math.LN2;function Au(r){return r>>>=0,r===0?32:31-(op(r)/_r|0)|0}var ws=256,Es=4194304;function jr(r){var s=r&42;if(s!==0)return s;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return r}}function xs(r,s,a){var c=r.pendingLanes;if(c===0)return 0;var d=0,m=r.suspendedLanes,b=r.pingedLanes;r=r.warmLanes;var E=c&134217727;return E!==0?(c=E&~m,c!==0?d=jr(c):(b&=E,b!==0?d=jr(b):a||(a=E&~r,a!==0&&(d=jr(a))))):(E=c&~m,E!==0?d=jr(E):b!==0?d=jr(b):a||(a=c&~r,a!==0&&(d=jr(a)))),d===0?0:s!==0&&s!==d&&(s&m)===0&&(m=d&-d,a=s&-s,m>=a||m===32&&(a&4194048)!==0)?s:d}function br(r,s){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&s)===0}function Iu(r,s){switch(r){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mo(){var r=ws;return ws<<=1,(ws&4194048)===0&&(ws=256),r}function Du(){var r=Es;return Es<<=1,(Es&62914560)===0&&(Es=4194304),r}function ko(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function Ts(r,s){r.pendingLanes|=s,s!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function Ou(r,s,a,c,d,m){var b=r.pendingLanes;r.pendingLanes=a,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=a,r.entangledLanes&=a,r.errorRecoveryDisabledLanes&=a,r.shellSuspendCounter=0;var E=r.entanglements,L=r.expirationTimes,Q=r.hiddenUpdates;for(a=b&~a;0<a;){var re=31-Wt(a),oe=1<<re;E[re]=0,L[re]=-1;var Z=Q[re];if(Z!==null)for(Q[re]=null,re=0;re<Z.length;re++){var J=Z[re];J!==null&&(J.lane&=-536870913)}a&=~oe}c!==0&&Cs(r,c,0),m!==0&&d===0&&r.tag!==0&&(r.suspendedLanes|=m&~(b&~s))}function Cs(r,s,a){r.pendingLanes|=s,r.suspendedLanes&=~s;var c=31-Wt(s);r.entangledLanes|=s,r.entanglements[c]=r.entanglements[c]|1073741824|a&4194090}function Rs(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var c=31-Wt(a),d=1<<c;d&s|r[c]&s&&(r[c]|=s),a&=~d}}function al(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function ll(r){return r&=-r,2<r?8<r?(r&134217727)!==0?32:268435456:8:2}function j(){var r=ee.p;return r!==0?r:(r=window.event,r===void 0?32:I1(r.type))}function Y(r,s){var a=ee.p;try{return ee.p=r,s()}finally{ee.p=a}}var te=Math.random().toString(36).slice(2),ce="__reactFiber$"+te,fe="__reactProps$"+te,ye="__reactContainer$"+te,we="__reactEvents$"+te,ve="__reactListeners$"+te,xe="__reactHandles$"+te,Ce="__reactResources$"+te,_e="__reactMarker$"+te;function Se(r){delete r[ce],delete r[fe],delete r[we],delete r[ve],delete r[xe]}function ze(r){var s=r[ce];if(s)return s;for(var a=r.parentNode;a;){if(s=a[ye]||a[ce]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=p1(r);r!==null;){if(a=r[ce])return a;r=p1(r)}return s}r=a,a=r.parentNode}return null}function Ze(r){if(r=r[ce]||r[ye]){var s=r.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return r}return null}function yt(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r.stateNode;throw Error(i(33))}function xt(r){var s=r[Ce];return s||(s=r[Ce]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function Le(r){r[_e]=!0}var it=new Set,Sr={};function En(r,s){ln(r,s),ln(r+"Capture",s)}function ln(r,s){for(Sr[r]=s,r=0;r<s.length;r++)it.add(s[r])}var Pn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Lo={},Ei={};function Ur(r){return gt.call(Ei,r)?!0:gt.call(Lo,r)?!1:Pn.test(r)?Ei[r]=!0:(Lo[r]=!0,!1)}function $r(r,s,a){if(Ur(s))if(a===null)r.removeAttribute(s);else{switch(typeof a){case"undefined":case"function":case"symbol":r.removeAttribute(s);return;case"boolean":var c=s.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){r.removeAttribute(s);return}}r.setAttribute(s,""+a)}}function zr(r,s,a){if(a===null)r.removeAttribute(s);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(s);return}r.setAttribute(s,""+a)}}function Pe(r,s,a,c){if(c===null)r.removeAttribute(a);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(a);return}r.setAttributeNS(s,a,""+c)}}var Nt,Br;function pn(r){if(Nt===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);Nt=s&&s[1]||"",Br=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Nt+r+Br}var St=!1;function xi(r,s){if(!r||St)return"";St=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(s){var oe=function(){throw Error()};if(Object.defineProperty(oe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(oe,[])}catch(J){var Z=J}Reflect.construct(r,[],oe)}else{try{oe.call()}catch(J){Z=J}r.call(oe.prototype)}}else{try{throw Error()}catch(J){Z=J}(oe=r())&&typeof oe.catch=="function"&&oe.catch(function(){})}}catch(J){if(J&&Z&&typeof J.stack=="string")return[J.stack,Z.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=c.DetermineComponentFrameRoot(),b=m[0],E=m[1];if(b&&E){var L=b.split(`
`),Q=E.split(`
`);for(d=c=0;c<L.length&&!L[c].includes("DetermineComponentFrameRoot");)c++;for(;d<Q.length&&!Q[d].includes("DetermineComponentFrameRoot");)d++;if(c===L.length||d===Q.length)for(c=L.length-1,d=Q.length-1;1<=c&&0<=d&&L[c]!==Q[d];)d--;for(;1<=c&&0<=d;c--,d--)if(L[c]!==Q[d]){if(c!==1||d!==1)do if(c--,d--,0>d||L[c]!==Q[d]){var re=`
`+L[c].replace(" at new "," at ");return r.displayName&&re.includes("<anonymous>")&&(re=re.replace("<anonymous>",r.displayName)),re}while(1<=c&&0<=d);break}}}finally{St=!1,Error.prepareStackTrace=a}return(a=r?r.displayName||r.name:"")?pn(a):""}function Nu(r){switch(r.tag){case 26:case 27:case 5:return pn(r.type);case 16:return pn("Lazy");case 13:return pn("Suspense");case 19:return pn("SuspenseList");case 0:case 15:return xi(r.type,!1);case 11:return xi(r.type.render,!1);case 1:return xi(r.type,!0);case 31:return pn("Activity");default:return""}}function Mu(r){try{var s="";do s+=Nu(r),r=r.return;while(r);return s}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function jn(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function ib(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function yD(r){var s=ib(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),c=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return d.call(this)},set:function(b){c=""+b,m.call(this,b)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(b){c=""+b},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function ku(r){r._valueTracker||(r._valueTracker=yD(r))}function sb(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return r&&(c=ib(r)?r.checked?"true":"false":r.value),r=c,r!==a?(s.setValue(r),!0):!1}function Lu(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}var vD=/[\n"\\]/g;function Un(r){return r.replace(vD,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function ap(r,s,a,c,d,m,b,E){r.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?r.type=b:r.removeAttribute("type"),s!=null?b==="number"?(s===0&&r.value===""||r.value!=s)&&(r.value=""+jn(s)):r.value!==""+jn(s)&&(r.value=""+jn(s)):b!=="submit"&&b!=="reset"||r.removeAttribute("value"),s!=null?lp(r,b,jn(s)):a!=null?lp(r,b,jn(a)):c!=null&&r.removeAttribute("value"),d==null&&m!=null&&(r.defaultChecked=!!m),d!=null&&(r.checked=d&&typeof d!="function"&&typeof d!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?r.name=""+jn(E):r.removeAttribute("name")}function ob(r,s,a,c,d,m,b,E){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(r.type=m),s!=null||a!=null){if(!(m!=="submit"&&m!=="reset"||s!=null))return;a=a!=null?""+jn(a):"",s=s!=null?""+jn(s):a,E||s===r.value||(r.value=s),r.defaultValue=s}c=c??d,c=typeof c!="function"&&typeof c!="symbol"&&!!c,r.checked=E?r.checked:!!c,r.defaultChecked=!!c,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(r.name=b)}function lp(r,s,a){s==="number"&&Lu(r.ownerDocument)===r||r.defaultValue===""+a||(r.defaultValue=""+a)}function Po(r,s,a,c){if(r=r.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<r.length;a++)d=s.hasOwnProperty("$"+r[a].value),r[a].selected!==d&&(r[a].selected=d),d&&c&&(r[a].defaultSelected=!0)}else{for(a=""+jn(a),s=null,d=0;d<r.length;d++){if(r[d].value===a){r[d].selected=!0,c&&(r[d].defaultSelected=!0);return}s!==null||r[d].disabled||(s=r[d])}s!==null&&(s.selected=!0)}}function ab(r,s,a){if(s!=null&&(s=""+jn(s),s!==r.value&&(r.value=s),a==null)){r.defaultValue!==s&&(r.defaultValue=s);return}r.defaultValue=a!=null?""+jn(a):""}function lb(r,s,a,c){if(s==null){if(c!=null){if(a!=null)throw Error(i(92));if(ue(c)){if(1<c.length)throw Error(i(93));c=c[0]}a=c}a==null&&(a=""),s=a}a=jn(s),r.defaultValue=a,c=r.textContent,c===a&&c!==""&&c!==null&&(r.value=c)}function jo(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var _D=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function cb(r,s,a){var c=s.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?c?r.setProperty(s,""):s==="float"?r.cssFloat="":r[s]="":c?r.setProperty(s,a):typeof a!="number"||a===0||_D.has(s)?s==="float"?r.cssFloat=a:r[s]=(""+a).trim():r[s]=a+"px"}function ub(r,s,a){if(s!=null&&typeof s!="object")throw Error(i(62));if(r=r.style,a!=null){for(var c in a)!a.hasOwnProperty(c)||s!=null&&s.hasOwnProperty(c)||(c.indexOf("--")===0?r.setProperty(c,""):c==="float"?r.cssFloat="":r[c]="");for(var d in s)c=s[d],s.hasOwnProperty(d)&&a[d]!==c&&cb(r,d,c)}else for(var m in s)s.hasOwnProperty(m)&&cb(r,m,s[m])}function cp(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bD=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),SD=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Pu(r){return SD.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}var up=null;function dp(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Uo=null,$o=null;function db(r){var s=Ze(r);if(s&&(r=s.stateNode)){var a=r[fe]||null;e:switch(r=s.stateNode,s.type){case"input":if(ap(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Un(""+s)+'"][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==r&&c.form===r.form){var d=c[fe]||null;if(!d)throw Error(i(90));ap(c,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(s=0;s<a.length;s++)c=a[s],c.form===r.form&&sb(c)}break e;case"textarea":ab(r,a.value,a.defaultValue);break e;case"select":s=a.value,s!=null&&Po(r,!!a.multiple,s,!1)}}}var fp=!1;function fb(r,s,a){if(fp)return r(s,a);fp=!0;try{var c=r(s);return c}finally{if(fp=!1,(Uo!==null||$o!==null)&&(Sd(),Uo&&(s=Uo,r=$o,$o=Uo=null,db(s),r)))for(s=0;s<r.length;s++)db(r[s])}}function cl(r,s){var a=r.stateNode;if(a===null)return null;var c=a[fe]||null;if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(i(231,s,typeof a));return a}var Hr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hp=!1;if(Hr)try{var ul={};Object.defineProperty(ul,"passive",{get:function(){hp=!0}}),window.addEventListener("test",ul,ul),window.removeEventListener("test",ul,ul)}catch{hp=!1}var Ti=null,pp=null,ju=null;function hb(){if(ju)return ju;var r,s=pp,a=s.length,c,d="value"in Ti?Ti.value:Ti.textContent,m=d.length;for(r=0;r<a&&s[r]===d[r];r++);var b=a-r;for(c=1;c<=b&&s[a-c]===d[m-c];c++);return ju=d.slice(r,1<c?1-c:void 0)}function Uu(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function $u(){return!0}function pb(){return!1}function mn(r){function s(a,c,d,m,b){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var E in r)r.hasOwnProperty(E)&&(a=r[E],this[E]=a?a(m):m[E]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?$u:pb,this.isPropagationStopped=pb,this}return g(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=$u)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=$u)},persist:function(){},isPersistent:$u}),s}var As={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zu=mn(As),dl=g({},As,{view:0,detail:0}),wD=mn(dl),mp,gp,fl,Bu=g({},dl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vp,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==fl&&(fl&&r.type==="mousemove"?(mp=r.screenX-fl.screenX,gp=r.screenY-fl.screenY):gp=mp=0,fl=r),mp)},movementY:function(r){return"movementY"in r?r.movementY:gp}}),mb=mn(Bu),ED=g({},Bu,{dataTransfer:0}),xD=mn(ED),TD=g({},dl,{relatedTarget:0}),yp=mn(TD),CD=g({},As,{animationName:0,elapsedTime:0,pseudoElement:0}),RD=mn(CD),AD=g({},As,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),ID=mn(AD),DD=g({},As,{data:0}),gb=mn(DD),OD={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ND={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},MD={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kD(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=MD[r])?!!s[r]:!1}function vp(){return kD}var LD=g({},dl,{key:function(r){if(r.key){var s=OD[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Uu(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?ND[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vp,charCode:function(r){return r.type==="keypress"?Uu(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Uu(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),PD=mn(LD),jD=g({},Bu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yb=mn(jD),UD=g({},dl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vp}),$D=mn(UD),zD=g({},As,{propertyName:0,elapsedTime:0,pseudoElement:0}),BD=mn(zD),HD=g({},Bu,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),FD=mn(HD),qD=g({},As,{newState:0,oldState:0}),VD=mn(qD),GD=[9,13,27,32],_p=Hr&&"CompositionEvent"in window,hl=null;Hr&&"documentMode"in document&&(hl=document.documentMode);var YD=Hr&&"TextEvent"in window&&!hl,vb=Hr&&(!_p||hl&&8<hl&&11>=hl),_b=" ",bb=!1;function Sb(r,s){switch(r){case"keyup":return GD.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wb(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var zo=!1;function WD(r,s){switch(r){case"compositionend":return wb(s);case"keypress":return s.which!==32?null:(bb=!0,_b);case"textInput":return r=s.data,r===_b&&bb?null:r;default:return null}}function QD(r,s){if(zo)return r==="compositionend"||!_p&&Sb(r,s)?(r=hb(),ju=pp=Ti=null,zo=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return vb&&s.locale!=="ko"?null:s.data;default:return null}}var KD={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Eb(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!KD[r.type]:s==="textarea"}function xb(r,s,a,c){Uo?$o?$o.push(c):$o=[c]:Uo=c,s=Rd(s,"onChange"),0<s.length&&(a=new zu("onChange","change",null,a,c),r.push({event:a,listeners:s}))}var pl=null,ml=null;function XD(r){i1(r,0)}function Hu(r){var s=yt(r);if(sb(s))return r}function Tb(r,s){if(r==="change")return s}var Cb=!1;if(Hr){var bp;if(Hr){var Sp="oninput"in document;if(!Sp){var Rb=document.createElement("div");Rb.setAttribute("oninput","return;"),Sp=typeof Rb.oninput=="function"}bp=Sp}else bp=!1;Cb=bp&&(!document.documentMode||9<document.documentMode)}function Ab(){pl&&(pl.detachEvent("onpropertychange",Ib),ml=pl=null)}function Ib(r){if(r.propertyName==="value"&&Hu(ml)){var s=[];xb(s,ml,r,dp(r)),fb(XD,s)}}function ZD(r,s,a){r==="focusin"?(Ab(),pl=s,ml=a,pl.attachEvent("onpropertychange",Ib)):r==="focusout"&&Ab()}function JD(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Hu(ml)}function eO(r,s){if(r==="click")return Hu(s)}function tO(r,s){if(r==="input"||r==="change")return Hu(s)}function nO(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var xn=typeof Object.is=="function"?Object.is:nO;function gl(r,s){if(xn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!gt.call(s,d)||!xn(r[d],s[d]))return!1}return!0}function Db(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Ob(r,s){var a=Db(r);r=0;for(var c;a;){if(a.nodeType===3){if(c=r+a.textContent.length,r<=s&&c>=s)return{node:a,offset:s-r};r=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Db(a)}}function Nb(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?Nb(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Mb(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var s=Lu(r.document);s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=Lu(r.document)}return s}function wp(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}var rO=Hr&&"documentMode"in document&&11>=document.documentMode,Bo=null,Ep=null,yl=null,xp=!1;function kb(r,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;xp||Bo==null||Bo!==Lu(c)||(c=Bo,"selectionStart"in c&&wp(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),yl&&gl(yl,c)||(yl=c,c=Rd(Ep,"onSelect"),0<c.length&&(s=new zu("onSelect","select",null,s,a),r.push({event:s,listeners:c}),s.target=Bo)))}function Is(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var Ho={animationend:Is("Animation","AnimationEnd"),animationiteration:Is("Animation","AnimationIteration"),animationstart:Is("Animation","AnimationStart"),transitionrun:Is("Transition","TransitionRun"),transitionstart:Is("Transition","TransitionStart"),transitioncancel:Is("Transition","TransitionCancel"),transitionend:Is("Transition","TransitionEnd")},Tp={},Lb={};Hr&&(Lb=document.createElement("div").style,"AnimationEvent"in window||(delete Ho.animationend.animation,delete Ho.animationiteration.animation,delete Ho.animationstart.animation),"TransitionEvent"in window||delete Ho.transitionend.transition);function Ds(r){if(Tp[r])return Tp[r];if(!Ho[r])return r;var s=Ho[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in Lb)return Tp[r]=s[a];return r}var Pb=Ds("animationend"),jb=Ds("animationiteration"),Ub=Ds("animationstart"),iO=Ds("transitionrun"),sO=Ds("transitionstart"),oO=Ds("transitioncancel"),$b=Ds("transitionend"),zb=new Map,Cp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Cp.push("scrollEnd");function rr(r,s){zb.set(r,s),En(s,[r])}var Bb=new WeakMap;function $n(r,s){if(typeof r=="object"&&r!==null){var a=Bb.get(r);return a!==void 0?a:(s={value:r,source:s,stack:Mu(s)},Bb.set(r,s),s)}return{value:r,source:s,stack:Mu(s)}}var zn=[],Fo=0,Rp=0;function Fu(){for(var r=Fo,s=Rp=Fo=0;s<r;){var a=zn[s];zn[s++]=null;var c=zn[s];zn[s++]=null;var d=zn[s];zn[s++]=null;var m=zn[s];if(zn[s++]=null,c!==null&&d!==null){var b=c.pending;b===null?d.next=d:(d.next=b.next,b.next=d),c.pending=d}m!==0&&Hb(a,d,m)}}function qu(r,s,a,c){zn[Fo++]=r,zn[Fo++]=s,zn[Fo++]=a,zn[Fo++]=c,Rp|=c,r.lanes|=c,r=r.alternate,r!==null&&(r.lanes|=c)}function Ap(r,s,a,c){return qu(r,s,a,c),Vu(r)}function qo(r,s){return qu(r,null,null,s),Vu(r)}function Hb(r,s,a){r.lanes|=a;var c=r.alternate;c!==null&&(c.lanes|=a);for(var d=!1,m=r.return;m!==null;)m.childLanes|=a,c=m.alternate,c!==null&&(c.childLanes|=a),m.tag===22&&(r=m.stateNode,r===null||r._visibility&1||(d=!0)),r=m,m=m.return;return r.tag===3?(m=r.stateNode,d&&s!==null&&(d=31-Wt(a),r=m.hiddenUpdates,c=r[d],c===null?r[d]=[s]:c.push(s),s.lane=a|536870912),m):null}function Vu(r){if(50<Hl)throw Hl=0,km=null,Error(i(185));for(var s=r.return;s!==null;)r=s,s=r.return;return r.tag===3?r.stateNode:null}var Vo={};function aO(r,s,a,c){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(r,s,a,c){return new aO(r,s,a,c)}function Ip(r){return r=r.prototype,!(!r||!r.isReactComponent)}function Fr(r,s){var a=r.alternate;return a===null?(a=Tn(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&65011712,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a.refCleanup=r.refCleanup,a}function Fb(r,s){r.flags&=65011714;var a=r.alternate;return a===null?(r.childLanes=0,r.lanes=s,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=a.childLanes,r.lanes=a.lanes,r.child=a.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=a.memoizedProps,r.memoizedState=a.memoizedState,r.updateQueue=a.updateQueue,r.type=a.type,s=a.dependencies,r.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),r}function Gu(r,s,a,c,d,m){var b=0;if(c=r,typeof r=="function")Ip(r)&&(b=1);else if(typeof r=="string")b=cN(r,a,de.current)?26:r==="html"||r==="head"||r==="body"?27:5;else e:switch(r){case H:return r=Tn(31,a,s,d),r.elementType=H,r.lanes=m,r;case w:return Os(a.children,d,m,s);case O:b=8,d|=24;break;case T:return r=Tn(12,a,s,d|2),r.elementType=T,r.lanes=m,r;case M:return r=Tn(13,a,s,d),r.elementType=M,r.lanes=m,r;case R:return r=Tn(19,a,s,d),r.elementType=R,r.lanes=m,r;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case A:case x:b=10;break e;case k:b=9;break e;case I:b=11;break e;case P:b=14;break e;case V:b=16,c=null;break e}b=29,a=Error(i(130,r===null?"null":typeof r,"")),c=null}return s=Tn(b,a,s,d),s.elementType=r,s.type=c,s.lanes=m,s}function Os(r,s,a,c){return r=Tn(7,r,c,s),r.lanes=a,r}function Dp(r,s,a){return r=Tn(6,r,null,s),r.lanes=a,r}function Op(r,s,a){return s=Tn(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}var Go=[],Yo=0,Yu=null,Wu=0,Bn=[],Hn=0,Ns=null,qr=1,Vr="";function Ms(r,s){Go[Yo++]=Wu,Go[Yo++]=Yu,Yu=r,Wu=s}function qb(r,s,a){Bn[Hn++]=qr,Bn[Hn++]=Vr,Bn[Hn++]=Ns,Ns=r;var c=qr;r=Vr;var d=32-Wt(c)-1;c&=~(1<<d),a+=1;var m=32-Wt(s)+d;if(30<m){var b=d-d%5;m=(c&(1<<b)-1).toString(32),c>>=b,d-=b,qr=1<<32-Wt(s)+d|a<<d|c,Vr=m+r}else qr=1<<m|a<<d|c,Vr=r}function Np(r){r.return!==null&&(Ms(r,1),qb(r,1,0))}function Mp(r){for(;r===Yu;)Yu=Go[--Yo],Go[Yo]=null,Wu=Go[--Yo],Go[Yo]=null;for(;r===Ns;)Ns=Bn[--Hn],Bn[Hn]=null,Vr=Bn[--Hn],Bn[Hn]=null,qr=Bn[--Hn],Bn[Hn]=null}var cn=null,Tt=null,Je=!1,ks=null,wr=!1,kp=Error(i(519));function Ls(r){var s=Error(i(418,""));throw bl($n(s,r)),kp}function Vb(r){var s=r.stateNode,a=r.type,c=r.memoizedProps;switch(s[ce]=r,s[fe]=c,a){case"dialog":Ye("cancel",s),Ye("close",s);break;case"iframe":case"object":case"embed":Ye("load",s);break;case"video":case"audio":for(a=0;a<ql.length;a++)Ye(ql[a],s);break;case"source":Ye("error",s);break;case"img":case"image":case"link":Ye("error",s),Ye("load",s);break;case"details":Ye("toggle",s);break;case"input":Ye("invalid",s),ob(s,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),ku(s);break;case"select":Ye("invalid",s);break;case"textarea":Ye("invalid",s),lb(s,c.value,c.defaultValue,c.children),ku(s)}a=c.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||s.textContent===""+a||c.suppressHydrationWarning===!0||l1(s.textContent,a)?(c.popover!=null&&(Ye("beforetoggle",s),Ye("toggle",s)),c.onScroll!=null&&Ye("scroll",s),c.onScrollEnd!=null&&Ye("scrollend",s),c.onClick!=null&&(s.onclick=Ad),s=!0):s=!1,s||Ls(r)}function Gb(r){for(cn=r.return;cn;)switch(cn.tag){case 5:case 13:wr=!1;return;case 27:case 3:wr=!0;return;default:cn=cn.return}}function vl(r){if(r!==cn)return!1;if(!Je)return Gb(r),Je=!0,!1;var s=r.tag,a;if((a=s!==3&&s!==27)&&((a=s===5)&&(a=r.type,a=!(a!=="form"&&a!=="button")||Km(r.type,r.memoizedProps)),a=!a),a&&Tt&&Ls(r),Gb(r),s===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(i(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8)if(a=r.data,a==="/$"){if(s===0){Tt=sr(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++;r=r.nextSibling}Tt=null}}else s===27?(s=Tt,Bi(r.type)?(r=eg,eg=null,Tt=r):Tt=s):Tt=cn?sr(r.stateNode.nextSibling):null;return!0}function _l(){Tt=cn=null,Je=!1}function Yb(){var r=ks;return r!==null&&(vn===null?vn=r:vn.push.apply(vn,r),ks=null),r}function bl(r){ks===null?ks=[r]:ks.push(r)}var Lp=X(null),Ps=null,Gr=null;function Ci(r,s,a){ie(Lp,s._currentValue),s._currentValue=a}function Yr(r){r._currentValue=Lp.current,le(Lp)}function Pp(r,s,a){for(;r!==null;){var c=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),r===a)break;r=r.return}}function jp(r,s,a,c){var d=r.child;for(d!==null&&(d.return=r);d!==null;){var m=d.dependencies;if(m!==null){var b=d.child;m=m.firstContext;e:for(;m!==null;){var E=m;m=d;for(var L=0;L<s.length;L++)if(E.context===s[L]){m.lanes|=a,E=m.alternate,E!==null&&(E.lanes|=a),Pp(m.return,a,r),c||(b=null);break e}m=E.next}}else if(d.tag===18){if(b=d.return,b===null)throw Error(i(341));b.lanes|=a,m=b.alternate,m!==null&&(m.lanes|=a),Pp(b,a,r),b=null}else b=d.child;if(b!==null)b.return=d;else for(b=d;b!==null;){if(b===r){b=null;break}if(d=b.sibling,d!==null){d.return=b.return,b=d;break}b=b.return}d=b}}function Sl(r,s,a,c){r=null;for(var d=s,m=!1;d!==null;){if(!m){if((d.flags&524288)!==0)m=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var b=d.alternate;if(b===null)throw Error(i(387));if(b=b.memoizedProps,b!==null){var E=d.type;xn(d.pendingProps.value,b.value)||(r!==null?r.push(E):r=[E])}}else if(d===Ae.current){if(b=d.alternate,b===null)throw Error(i(387));b.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(r!==null?r.push(Kl):r=[Kl])}d=d.return}r!==null&&jp(s,r,a,c),s.flags|=262144}function Qu(r){for(r=r.firstContext;r!==null;){if(!xn(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function js(r){Ps=r,Gr=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function nn(r){return Wb(Ps,r)}function Ku(r,s){return Ps===null&&js(r),Wb(r,s)}function Wb(r,s){var a=s._currentValue;if(s={context:s,memoizedValue:a,next:null},Gr===null){if(r===null)throw Error(i(308));Gr=s,r.dependencies={lanes:0,firstContext:s},r.flags|=524288}else Gr=Gr.next=s;return a}var lO=typeof AbortController<"u"?AbortController:function(){var r=[],s=this.signal={aborted:!1,addEventListener:function(a,c){r.push(c)}};this.abort=function(){s.aborted=!0,r.forEach(function(a){return a()})}},cO=e.unstable_scheduleCallback,uO=e.unstable_NormalPriority,Pt={$$typeof:x,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Up(){return{controller:new lO,data:new Map,refCount:0}}function wl(r){r.refCount--,r.refCount===0&&cO(uO,function(){r.controller.abort()})}var El=null,$p=0,Wo=0,Qo=null;function dO(r,s){if(El===null){var a=El=[];$p=0,Wo=Bm(),Qo={status:"pending",value:void 0,then:function(c){a.push(c)}}}return $p++,s.then(Qb,Qb),s}function Qb(){if(--$p===0&&El!==null){Qo!==null&&(Qo.status="fulfilled");var r=El;El=null,Wo=0,Qo=null;for(var s=0;s<r.length;s++)(0,r[s])()}}function fO(r,s){var a=[],c={status:"pending",value:null,reason:null,then:function(d){a.push(d)}};return r.then(function(){c.status="fulfilled",c.value=s;for(var d=0;d<a.length;d++)(0,a[d])(s)},function(d){for(c.status="rejected",c.reason=d,d=0;d<a.length;d++)(0,a[d])(void 0)}),c}var Kb=U.S;U.S=function(r,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&dO(r,s),Kb!==null&&Kb(r,s)};var Us=X(null);function zp(){var r=Us.current;return r!==null?r:ft.pooledCache}function Xu(r,s){s===null?ie(Us,Us.current):ie(Us,s.pool)}function Xb(){var r=zp();return r===null?null:{parent:Pt._currentValue,pool:r}}var xl=Error(i(460)),Zb=Error(i(474)),Zu=Error(i(542)),Bp={then:function(){}};function Jb(r){return r=r.status,r==="fulfilled"||r==="rejected"}function Ju(){}function e0(r,s,a){switch(a=r[a],a===void 0?r.push(s):a!==s&&(s.then(Ju,Ju),s=a),s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,n0(r),r;default:if(typeof s.status=="string")s.then(Ju,Ju);else{if(r=ft,r!==null&&100<r.shellSuspendCounter)throw Error(i(482));r=s,r.status="pending",r.then(function(c){if(s.status==="pending"){var d=s;d.status="fulfilled",d.value=c}},function(c){if(s.status==="pending"){var d=s;d.status="rejected",d.reason=c}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,n0(r),r}throw Tl=s,xl}}var Tl=null;function t0(){if(Tl===null)throw Error(i(459));var r=Tl;return Tl=null,r}function n0(r){if(r===xl||r===Zu)throw Error(i(483))}var Ri=!1;function Hp(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Fp(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function Ai(r){return{lane:r,tag:0,payload:null,callback:null,next:null}}function Ii(r,s,a){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,(tt&2)!==0){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,s=Vu(r),Hb(r,null,a),s}return qu(r,c,s,a),Vu(r)}function Cl(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194048)!==0)){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,Rs(r,a)}}function qp(r,s){var a=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var b={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};m===null?d=m=b:m=m.next=b,a=a.next}while(a!==null);m===null?d=m=s:m=m.next=s}else d=m=s;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,callbacks:c.callbacks},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}var Vp=!1;function Rl(){if(Vp){var r=Qo;if(r!==null)throw r}}function Al(r,s,a,c){Vp=!1;var d=r.updateQueue;Ri=!1;var m=d.firstBaseUpdate,b=d.lastBaseUpdate,E=d.shared.pending;if(E!==null){d.shared.pending=null;var L=E,Q=L.next;L.next=null,b===null?m=Q:b.next=Q,b=L;var re=r.alternate;re!==null&&(re=re.updateQueue,E=re.lastBaseUpdate,E!==b&&(E===null?re.firstBaseUpdate=Q:E.next=Q,re.lastBaseUpdate=L))}if(m!==null){var oe=d.baseState;b=0,re=Q=L=null,E=m;do{var Z=E.lane&-536870913,J=Z!==E.lane;if(J?(Qe&Z)===Z:(c&Z)===Z){Z!==0&&Z===Wo&&(Vp=!0),re!==null&&(re=re.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});e:{var Me=r,Re=E;Z=s;var at=a;switch(Re.tag){case 1:if(Me=Re.payload,typeof Me=="function"){oe=Me.call(at,oe,Z);break e}oe=Me;break e;case 3:Me.flags=Me.flags&-65537|128;case 0:if(Me=Re.payload,Z=typeof Me=="function"?Me.call(at,oe,Z):Me,Z==null)break e;oe=g({},oe,Z);break e;case 2:Ri=!0}}Z=E.callback,Z!==null&&(r.flags|=64,J&&(r.flags|=8192),J=d.callbacks,J===null?d.callbacks=[Z]:J.push(Z))}else J={lane:Z,tag:E.tag,payload:E.payload,callback:E.callback,next:null},re===null?(Q=re=J,L=oe):re=re.next=J,b|=Z;if(E=E.next,E===null){if(E=d.shared.pending,E===null)break;J=E,E=J.next,J.next=null,d.lastBaseUpdate=J,d.shared.pending=null}}while(!0);re===null&&(L=oe),d.baseState=L,d.firstBaseUpdate=Q,d.lastBaseUpdate=re,m===null&&(d.shared.lanes=0),ji|=b,r.lanes=b,r.memoizedState=oe}}function r0(r,s){if(typeof r!="function")throw Error(i(191,r));r.call(s)}function i0(r,s){var a=r.callbacks;if(a!==null)for(r.callbacks=null,r=0;r<a.length;r++)r0(a[r],s)}var Ko=X(null),ed=X(0);function s0(r,s){r=ei,ie(ed,r),ie(Ko,s),ei=r|s.baseLanes}function Gp(){ie(ed,ei),ie(Ko,Ko.current)}function Yp(){ei=ed.current,le(Ko),le(ed)}var Di=0,He=null,st=null,Mt=null,td=!1,Xo=!1,$s=!1,nd=0,Il=0,Zo=null,hO=0;function Dt(){throw Error(i(321))}function Wp(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!xn(r[a],s[a]))return!1;return!0}function Qp(r,s,a,c,d,m){return Di=m,He=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,U.H=r===null||r.memoizedState===null?H0:F0,$s=!1,m=a(c,d),$s=!1,Xo&&(m=a0(s,a,c,d)),o0(r),m}function o0(r){U.H=ld;var s=st!==null&&st.next!==null;if(Di=0,Mt=st=He=null,td=!1,Il=0,Zo=null,s)throw Error(i(300));r===null||zt||(r=r.dependencies,r!==null&&Qu(r)&&(zt=!0))}function a0(r,s,a,c){He=r;var d=0;do{if(Xo&&(Zo=null),Il=0,Xo=!1,25<=d)throw Error(i(301));if(d+=1,Mt=st=null,r.updateQueue!=null){var m=r.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}U.H=bO,m=s(a,c)}while(Xo);return m}function pO(){var r=U.H,s=r.useState()[0];return s=typeof s.then=="function"?Dl(s):s,r=r.useState()[0],(st!==null?st.memoizedState:null)!==r&&(He.flags|=1024),s}function Kp(){var r=nd!==0;return nd=0,r}function Xp(r,s,a){s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~a}function Zp(r){if(td){for(r=r.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}td=!1}Di=0,Mt=st=He=null,Xo=!1,Il=nd=0,Zo=null}function gn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mt===null?He.memoizedState=Mt=r:Mt=Mt.next=r,Mt}function kt(){if(st===null){var r=He.alternate;r=r!==null?r.memoizedState:null}else r=st.next;var s=Mt===null?He.memoizedState:Mt.next;if(s!==null)Mt=s,st=r;else{if(r===null)throw He.alternate===null?Error(i(467)):Error(i(310));st=r,r={memoizedState:st.memoizedState,baseState:st.baseState,baseQueue:st.baseQueue,queue:st.queue,next:null},Mt===null?He.memoizedState=Mt=r:Mt=Mt.next=r}return Mt}function Jp(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Dl(r){var s=Il;return Il+=1,Zo===null&&(Zo=[]),r=e0(Zo,r,s),s=He,(Mt===null?s.memoizedState:Mt.next)===null&&(s=s.alternate,U.H=s===null||s.memoizedState===null?H0:F0),r}function rd(r){if(r!==null&&typeof r=="object"){if(typeof r.then=="function")return Dl(r);if(r.$$typeof===x)return nn(r)}throw Error(i(438,String(r)))}function em(r){var s=null,a=He.updateQueue;if(a!==null&&(s=a.memoCache),s==null){var c=He.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(s={data:c.data.map(function(d){return d.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),a===null&&(a=Jp(),He.updateQueue=a),a.memoCache=s,a=s.data[s.index],a===void 0)for(a=s.data[s.index]=Array(r),c=0;c<r;c++)a[c]=B;return s.index++,a}function Wr(r,s){return typeof s=="function"?s(r):s}function id(r){var s=kt();return tm(s,st,r)}function tm(r,s,a){var c=r.queue;if(c===null)throw Error(i(311));c.lastRenderedReducer=a;var d=r.baseQueue,m=c.pending;if(m!==null){if(d!==null){var b=d.next;d.next=m.next,m.next=b}s.baseQueue=d=m,c.pending=null}if(m=r.baseState,d===null)r.memoizedState=m;else{s=d.next;var E=b=null,L=null,Q=s,re=!1;do{var oe=Q.lane&-536870913;if(oe!==Q.lane?(Qe&oe)===oe:(Di&oe)===oe){var Z=Q.revertLane;if(Z===0)L!==null&&(L=L.next={lane:0,revertLane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),oe===Wo&&(re=!0);else if((Di&Z)===Z){Q=Q.next,Z===Wo&&(re=!0);continue}else oe={lane:0,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},L===null?(E=L=oe,b=m):L=L.next=oe,He.lanes|=Z,ji|=Z;oe=Q.action,$s&&a(m,oe),m=Q.hasEagerState?Q.eagerState:a(m,oe)}else Z={lane:oe,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},L===null?(E=L=Z,b=m):L=L.next=Z,He.lanes|=oe,ji|=oe;Q=Q.next}while(Q!==null&&Q!==s);if(L===null?b=m:L.next=E,!xn(m,r.memoizedState)&&(zt=!0,re&&(a=Qo,a!==null)))throw a;r.memoizedState=m,r.baseState=b,r.baseQueue=L,c.lastRenderedState=m}return d===null&&(c.lanes=0),[r.memoizedState,c.dispatch]}function nm(r){var s=kt(),a=s.queue;if(a===null)throw Error(i(311));a.lastRenderedReducer=r;var c=a.dispatch,d=a.pending,m=s.memoizedState;if(d!==null){a.pending=null;var b=d=d.next;do m=r(m,b.action),b=b.next;while(b!==d);xn(m,s.memoizedState)||(zt=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),a.lastRenderedState=m}return[m,c]}function l0(r,s,a){var c=He,d=kt(),m=Je;if(m){if(a===void 0)throw Error(i(407));a=a()}else a=s();var b=!xn((st||d).memoizedState,a);b&&(d.memoizedState=a,zt=!0),d=d.queue;var E=d0.bind(null,c,d,r);if(Ol(2048,8,E,[r]),d.getSnapshot!==s||b||Mt!==null&&Mt.memoizedState.tag&1){if(c.flags|=2048,Jo(9,sd(),u0.bind(null,c,d,a,s),null),ft===null)throw Error(i(349));m||(Di&124)!==0||c0(c,s,a)}return a}function c0(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=He.updateQueue,s===null?(s=Jp(),He.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function u0(r,s,a,c){s.value=a,s.getSnapshot=c,f0(s)&&h0(r)}function d0(r,s,a){return a(function(){f0(s)&&h0(r)})}function f0(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!xn(r,a)}catch{return!0}}function h0(r){var s=qo(r,2);s!==null&&Dn(s,r,2)}function rm(r){var s=gn();if(typeof r=="function"){var a=r;if(r=a(),$s){nr(!0);try{a()}finally{nr(!1)}}}return s.memoizedState=s.baseState=r,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wr,lastRenderedState:r},s}function p0(r,s,a,c){return r.baseState=a,tm(r,st,typeof c=="function"?c:Wr)}function mO(r,s,a,c,d){if(ad(r))throw Error(i(485));if(r=s.action,r!==null){var m={payload:d,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){m.listeners.push(b)}};U.T!==null?a(!0):m.isTransition=!1,c(m),a=s.pending,a===null?(m.next=s.pending=m,m0(s,m)):(m.next=a.next,s.pending=a.next=m)}}function m0(r,s){var a=s.action,c=s.payload,d=r.state;if(s.isTransition){var m=U.T,b={};U.T=b;try{var E=a(d,c),L=U.S;L!==null&&L(b,E),g0(r,s,E)}catch(Q){im(r,s,Q)}finally{U.T=m}}else try{m=a(d,c),g0(r,s,m)}catch(Q){im(r,s,Q)}}function g0(r,s,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(c){y0(r,s,c)},function(c){return im(r,s,c)}):y0(r,s,a)}function y0(r,s,a){s.status="fulfilled",s.value=a,v0(s),r.state=a,s=r.pending,s!==null&&(a=s.next,a===s?r.pending=null:(a=a.next,s.next=a,m0(r,a)))}function im(r,s,a){var c=r.pending;if(r.pending=null,c!==null){c=c.next;do s.status="rejected",s.reason=a,v0(s),s=s.next;while(s!==c)}r.action=null}function v0(r){r=r.listeners;for(var s=0;s<r.length;s++)(0,r[s])()}function _0(r,s){return s}function b0(r,s){if(Je){var a=ft.formState;if(a!==null){e:{var c=He;if(Je){if(Tt){t:{for(var d=Tt,m=wr;d.nodeType!==8;){if(!m){d=null;break t}if(d=sr(d.nextSibling),d===null){d=null;break t}}m=d.data,d=m==="F!"||m==="F"?d:null}if(d){Tt=sr(d.nextSibling),c=d.data==="F!";break e}}Ls(c)}c=!1}c&&(s=a[0])}}return a=gn(),a.memoizedState=a.baseState=s,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_0,lastRenderedState:s},a.queue=c,a=$0.bind(null,He,c),c.dispatch=a,c=rm(!1),m=cm.bind(null,He,!1,c.queue),c=gn(),d={state:s,dispatch:null,action:r,pending:null},c.queue=d,a=mO.bind(null,He,d,m,a),d.dispatch=a,c.memoizedState=r,[s,a,!1]}function S0(r){var s=kt();return w0(s,st,r)}function w0(r,s,a){if(s=tm(r,s,_0)[0],r=id(Wr)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var c=Dl(s)}catch(b){throw b===xl?Zu:b}else c=s;s=kt();var d=s.queue,m=d.dispatch;return a!==s.memoizedState&&(He.flags|=2048,Jo(9,sd(),gO.bind(null,d,a),null)),[c,m,r]}function gO(r,s){r.action=s}function E0(r){var s=kt(),a=st;if(a!==null)return w0(s,a,r);kt(),s=s.memoizedState,a=kt();var c=a.queue.dispatch;return a.memoizedState=r,[s,c,!1]}function Jo(r,s,a,c){return r={tag:r,create:a,deps:c,inst:s,next:null},s=He.updateQueue,s===null&&(s=Jp(),He.updateQueue=s),a=s.lastEffect,a===null?s.lastEffect=r.next=r:(c=a.next,a.next=r,r.next=c,s.lastEffect=r),r}function sd(){return{destroy:void 0,resource:void 0}}function x0(){return kt().memoizedState}function od(r,s,a,c){var d=gn();c=c===void 0?null:c,He.flags|=r,d.memoizedState=Jo(1|s,sd(),a,c)}function Ol(r,s,a,c){var d=kt();c=c===void 0?null:c;var m=d.memoizedState.inst;st!==null&&c!==null&&Wp(c,st.memoizedState.deps)?d.memoizedState=Jo(s,m,a,c):(He.flags|=r,d.memoizedState=Jo(1|s,m,a,c))}function T0(r,s){od(8390656,8,r,s)}function C0(r,s){Ol(2048,8,r,s)}function R0(r,s){return Ol(4,2,r,s)}function A0(r,s){return Ol(4,4,r,s)}function I0(r,s){if(typeof s=="function"){r=r();var a=s(r);return function(){typeof a=="function"?a():s(null)}}if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function D0(r,s,a){a=a!=null?a.concat([r]):null,Ol(4,4,I0.bind(null,s,r),a)}function sm(){}function O0(r,s){var a=kt();s=s===void 0?null:s;var c=a.memoizedState;return s!==null&&Wp(s,c[1])?c[0]:(a.memoizedState=[r,s],r)}function N0(r,s){var a=kt();s=s===void 0?null:s;var c=a.memoizedState;if(s!==null&&Wp(s,c[1]))return c[0];if(c=r(),$s){nr(!0);try{r()}finally{nr(!1)}}return a.memoizedState=[c,s],c}function om(r,s,a){return a===void 0||(Di&1073741824)!==0?r.memoizedState=s:(r.memoizedState=a,r=LS(),He.lanes|=r,ji|=r,a)}function M0(r,s,a,c){return xn(a,s)?a:Ko.current!==null?(r=om(r,a,c),xn(r,s)||(zt=!0),r):(Di&42)===0?(zt=!0,r.memoizedState=a):(r=LS(),He.lanes|=r,ji|=r,s)}function k0(r,s,a,c,d){var m=ee.p;ee.p=m!==0&&8>m?m:8;var b=U.T,E={};U.T=E,cm(r,!1,s,a);try{var L=d(),Q=U.S;if(Q!==null&&Q(E,L),L!==null&&typeof L=="object"&&typeof L.then=="function"){var re=fO(L,c);Nl(r,s,re,In(r))}else Nl(r,s,c,In(r))}catch(oe){Nl(r,s,{then:function(){},status:"rejected",reason:oe},In())}finally{ee.p=m,U.T=b}}function yO(){}function am(r,s,a,c){if(r.tag!==5)throw Error(i(476));var d=L0(r).queue;k0(r,d,s,ne,a===null?yO:function(){return P0(r),a(c)})}function L0(r){var s=r.memoizedState;if(s!==null)return s;s={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wr,lastRenderedState:ne},next:null};var a={};return s.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wr,lastRenderedState:a},next:null},r.memoizedState=s,r=r.alternate,r!==null&&(r.memoizedState=s),s}function P0(r){var s=L0(r).next.queue;Nl(r,s,{},In())}function lm(){return nn(Kl)}function j0(){return kt().memoizedState}function U0(){return kt().memoizedState}function vO(r){for(var s=r.return;s!==null;){switch(s.tag){case 24:case 3:var a=In();r=Ai(a);var c=Ii(s,r,a);c!==null&&(Dn(c,s,a),Cl(c,s,a)),s={cache:Up()},r.payload=s;return}s=s.return}}function _O(r,s,a){var c=In();a={lane:c,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},ad(r)?z0(s,a):(a=Ap(r,s,a,c),a!==null&&(Dn(a,r,c),B0(a,s,c)))}function $0(r,s,a){var c=In();Nl(r,s,a,c)}function Nl(r,s,a,c){var d={lane:c,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(ad(r))z0(s,d);else{var m=r.alternate;if(r.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var b=s.lastRenderedState,E=m(b,a);if(d.hasEagerState=!0,d.eagerState=E,xn(E,b))return qu(r,s,d,0),ft===null&&Fu(),!1}catch{}finally{}if(a=Ap(r,s,d,c),a!==null)return Dn(a,r,c),B0(a,s,c),!0}return!1}function cm(r,s,a,c){if(c={lane:2,revertLane:Bm(),action:c,hasEagerState:!1,eagerState:null,next:null},ad(r)){if(s)throw Error(i(479))}else s=Ap(r,a,c,2),s!==null&&Dn(s,r,2)}function ad(r){var s=r.alternate;return r===He||s!==null&&s===He}function z0(r,s){Xo=td=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function B0(r,s,a){if((a&4194048)!==0){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,Rs(r,a)}}var ld={readContext:nn,use:rd,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useLayoutEffect:Dt,useInsertionEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useSyncExternalStore:Dt,useId:Dt,useHostTransitionStatus:Dt,useFormState:Dt,useActionState:Dt,useOptimistic:Dt,useMemoCache:Dt,useCacheRefresh:Dt},H0={readContext:nn,use:rd,useCallback:function(r,s){return gn().memoizedState=[r,s===void 0?null:s],r},useContext:nn,useEffect:T0,useImperativeHandle:function(r,s,a){a=a!=null?a.concat([r]):null,od(4194308,4,I0.bind(null,s,r),a)},useLayoutEffect:function(r,s){return od(4194308,4,r,s)},useInsertionEffect:function(r,s){od(4,2,r,s)},useMemo:function(r,s){var a=gn();s=s===void 0?null:s;var c=r();if($s){nr(!0);try{r()}finally{nr(!1)}}return a.memoizedState=[c,s],c},useReducer:function(r,s,a){var c=gn();if(a!==void 0){var d=a(s);if($s){nr(!0);try{a(s)}finally{nr(!1)}}}else d=s;return c.memoizedState=c.baseState=d,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:d},c.queue=r,r=r.dispatch=_O.bind(null,He,r),[c.memoizedState,r]},useRef:function(r){var s=gn();return r={current:r},s.memoizedState=r},useState:function(r){r=rm(r);var s=r.queue,a=$0.bind(null,He,s);return s.dispatch=a,[r.memoizedState,a]},useDebugValue:sm,useDeferredValue:function(r,s){var a=gn();return om(a,r,s)},useTransition:function(){var r=rm(!1);return r=k0.bind(null,He,r.queue,!0,!1),gn().memoizedState=r,[!1,r]},useSyncExternalStore:function(r,s,a){var c=He,d=gn();if(Je){if(a===void 0)throw Error(i(407));a=a()}else{if(a=s(),ft===null)throw Error(i(349));(Qe&124)!==0||c0(c,s,a)}d.memoizedState=a;var m={value:a,getSnapshot:s};return d.queue=m,T0(d0.bind(null,c,m,r),[r]),c.flags|=2048,Jo(9,sd(),u0.bind(null,c,m,a,s),null),a},useId:function(){var r=gn(),s=ft.identifierPrefix;if(Je){var a=Vr,c=qr;a=(c&~(1<<32-Wt(c)-1)).toString(32)+a,s="«"+s+"R"+a,a=nd++,0<a&&(s+="H"+a.toString(32)),s+="»"}else a=hO++,s="«"+s+"r"+a.toString(32)+"»";return r.memoizedState=s},useHostTransitionStatus:lm,useFormState:b0,useActionState:b0,useOptimistic:function(r){var s=gn();s.memoizedState=s.baseState=r;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=a,s=cm.bind(null,He,!0,a),a.dispatch=s,[r,s]},useMemoCache:em,useCacheRefresh:function(){return gn().memoizedState=vO.bind(null,He)}},F0={readContext:nn,use:rd,useCallback:O0,useContext:nn,useEffect:C0,useImperativeHandle:D0,useInsertionEffect:R0,useLayoutEffect:A0,useMemo:N0,useReducer:id,useRef:x0,useState:function(){return id(Wr)},useDebugValue:sm,useDeferredValue:function(r,s){var a=kt();return M0(a,st.memoizedState,r,s)},useTransition:function(){var r=id(Wr)[0],s=kt().memoizedState;return[typeof r=="boolean"?r:Dl(r),s]},useSyncExternalStore:l0,useId:j0,useHostTransitionStatus:lm,useFormState:S0,useActionState:S0,useOptimistic:function(r,s){var a=kt();return p0(a,st,r,s)},useMemoCache:em,useCacheRefresh:U0},bO={readContext:nn,use:rd,useCallback:O0,useContext:nn,useEffect:C0,useImperativeHandle:D0,useInsertionEffect:R0,useLayoutEffect:A0,useMemo:N0,useReducer:nm,useRef:x0,useState:function(){return nm(Wr)},useDebugValue:sm,useDeferredValue:function(r,s){var a=kt();return st===null?om(a,r,s):M0(a,st.memoizedState,r,s)},useTransition:function(){var r=nm(Wr)[0],s=kt().memoizedState;return[typeof r=="boolean"?r:Dl(r),s]},useSyncExternalStore:l0,useId:j0,useHostTransitionStatus:lm,useFormState:E0,useActionState:E0,useOptimistic:function(r,s){var a=kt();return st!==null?p0(a,st,r,s):(a.baseState=r,[r,a.queue.dispatch])},useMemoCache:em,useCacheRefresh:U0},ea=null,Ml=0;function cd(r){var s=Ml;return Ml+=1,ea===null&&(ea=[]),e0(ea,r,s)}function kl(r,s){s=s.props.ref,r.ref=s!==void 0?s:null}function ud(r,s){throw s.$$typeof===y?Error(i(525)):(r=Object.prototype.toString.call(s),Error(i(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r)))}function q0(r){var s=r._init;return s(r._payload)}function V0(r){function s(q,$){if(r){var W=q.deletions;W===null?(q.deletions=[$],q.flags|=16):W.push($)}}function a(q,$){if(!r)return null;for(;$!==null;)s(q,$),$=$.sibling;return null}function c(q){for(var $=new Map;q!==null;)q.key!==null?$.set(q.key,q):$.set(q.index,q),q=q.sibling;return $}function d(q,$){return q=Fr(q,$),q.index=0,q.sibling=null,q}function m(q,$,W){return q.index=W,r?(W=q.alternate,W!==null?(W=W.index,W<$?(q.flags|=67108866,$):W):(q.flags|=67108866,$)):(q.flags|=1048576,$)}function b(q){return r&&q.alternate===null&&(q.flags|=67108866),q}function E(q,$,W,se){return $===null||$.tag!==6?($=Dp(W,q.mode,se),$.return=q,$):($=d($,W),$.return=q,$)}function L(q,$,W,se){var ge=W.type;return ge===w?re(q,$,W.props.children,se,W.key):$!==null&&($.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===V&&q0(ge)===$.type)?($=d($,W.props),kl($,W),$.return=q,$):($=Gu(W.type,W.key,W.props,null,q.mode,se),kl($,W),$.return=q,$)}function Q(q,$,W,se){return $===null||$.tag!==4||$.stateNode.containerInfo!==W.containerInfo||$.stateNode.implementation!==W.implementation?($=Op(W,q.mode,se),$.return=q,$):($=d($,W.children||[]),$.return=q,$)}function re(q,$,W,se,ge){return $===null||$.tag!==7?($=Os(W,q.mode,se,ge),$.return=q,$):($=d($,W),$.return=q,$)}function oe(q,$,W){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return $=Dp(""+$,q.mode,W),$.return=q,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case _:return W=Gu($.type,$.key,$.props,null,q.mode,W),kl(W,$),W.return=q,W;case S:return $=Op($,q.mode,W),$.return=q,$;case V:var se=$._init;return $=se($._payload),oe(q,$,W)}if(ue($)||G($))return $=Os($,q.mode,W,null),$.return=q,$;if(typeof $.then=="function")return oe(q,cd($),W);if($.$$typeof===x)return oe(q,Ku(q,$),W);ud(q,$)}return null}function Z(q,$,W,se){var ge=$!==null?$.key:null;if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return ge!==null?null:E(q,$,""+W,se);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case _:return W.key===ge?L(q,$,W,se):null;case S:return W.key===ge?Q(q,$,W,se):null;case V:return ge=W._init,W=ge(W._payload),Z(q,$,W,se)}if(ue(W)||G(W))return ge!==null?null:re(q,$,W,se,null);if(typeof W.then=="function")return Z(q,$,cd(W),se);if(W.$$typeof===x)return Z(q,$,Ku(q,W),se);ud(q,W)}return null}function J(q,$,W,se,ge){if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return q=q.get(W)||null,E($,q,""+se,ge);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case _:return q=q.get(se.key===null?W:se.key)||null,L($,q,se,ge);case S:return q=q.get(se.key===null?W:se.key)||null,Q($,q,se,ge);case V:var Fe=se._init;return se=Fe(se._payload),J(q,$,W,se,ge)}if(ue(se)||G(se))return q=q.get(W)||null,re($,q,se,ge,null);if(typeof se.then=="function")return J(q,$,W,cd(se),ge);if(se.$$typeof===x)return J(q,$,W,Ku($,se),ge);ud($,se)}return null}function Me(q,$,W,se){for(var ge=null,Fe=null,Ee=$,Ie=$=0,Ht=null;Ee!==null&&Ie<W.length;Ie++){Ee.index>Ie?(Ht=Ee,Ee=null):Ht=Ee.sibling;var Ke=Z(q,Ee,W[Ie],se);if(Ke===null){Ee===null&&(Ee=Ht);break}r&&Ee&&Ke.alternate===null&&s(q,Ee),$=m(Ke,$,Ie),Fe===null?ge=Ke:Fe.sibling=Ke,Fe=Ke,Ee=Ht}if(Ie===W.length)return a(q,Ee),Je&&Ms(q,Ie),ge;if(Ee===null){for(;Ie<W.length;Ie++)Ee=oe(q,W[Ie],se),Ee!==null&&($=m(Ee,$,Ie),Fe===null?ge=Ee:Fe.sibling=Ee,Fe=Ee);return Je&&Ms(q,Ie),ge}for(Ee=c(Ee);Ie<W.length;Ie++)Ht=J(Ee,q,Ie,W[Ie],se),Ht!==null&&(r&&Ht.alternate!==null&&Ee.delete(Ht.key===null?Ie:Ht.key),$=m(Ht,$,Ie),Fe===null?ge=Ht:Fe.sibling=Ht,Fe=Ht);return r&&Ee.forEach(function(Gi){return s(q,Gi)}),Je&&Ms(q,Ie),ge}function Re(q,$,W,se){if(W==null)throw Error(i(151));for(var ge=null,Fe=null,Ee=$,Ie=$=0,Ht=null,Ke=W.next();Ee!==null&&!Ke.done;Ie++,Ke=W.next()){Ee.index>Ie?(Ht=Ee,Ee=null):Ht=Ee.sibling;var Gi=Z(q,Ee,Ke.value,se);if(Gi===null){Ee===null&&(Ee=Ht);break}r&&Ee&&Gi.alternate===null&&s(q,Ee),$=m(Gi,$,Ie),Fe===null?ge=Gi:Fe.sibling=Gi,Fe=Gi,Ee=Ht}if(Ke.done)return a(q,Ee),Je&&Ms(q,Ie),ge;if(Ee===null){for(;!Ke.done;Ie++,Ke=W.next())Ke=oe(q,Ke.value,se),Ke!==null&&($=m(Ke,$,Ie),Fe===null?ge=Ke:Fe.sibling=Ke,Fe=Ke);return Je&&Ms(q,Ie),ge}for(Ee=c(Ee);!Ke.done;Ie++,Ke=W.next())Ke=J(Ee,q,Ie,Ke.value,se),Ke!==null&&(r&&Ke.alternate!==null&&Ee.delete(Ke.key===null?Ie:Ke.key),$=m(Ke,$,Ie),Fe===null?ge=Ke:Fe.sibling=Ke,Fe=Ke);return r&&Ee.forEach(function(SN){return s(q,SN)}),Je&&Ms(q,Ie),ge}function at(q,$,W,se){if(typeof W=="object"&&W!==null&&W.type===w&&W.key===null&&(W=W.props.children),typeof W=="object"&&W!==null){switch(W.$$typeof){case _:e:{for(var ge=W.key;$!==null;){if($.key===ge){if(ge=W.type,ge===w){if($.tag===7){a(q,$.sibling),se=d($,W.props.children),se.return=q,q=se;break e}}else if($.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===V&&q0(ge)===$.type){a(q,$.sibling),se=d($,W.props),kl(se,W),se.return=q,q=se;break e}a(q,$);break}else s(q,$);$=$.sibling}W.type===w?(se=Os(W.props.children,q.mode,se,W.key),se.return=q,q=se):(se=Gu(W.type,W.key,W.props,null,q.mode,se),kl(se,W),se.return=q,q=se)}return b(q);case S:e:{for(ge=W.key;$!==null;){if($.key===ge)if($.tag===4&&$.stateNode.containerInfo===W.containerInfo&&$.stateNode.implementation===W.implementation){a(q,$.sibling),se=d($,W.children||[]),se.return=q,q=se;break e}else{a(q,$);break}else s(q,$);$=$.sibling}se=Op(W,q.mode,se),se.return=q,q=se}return b(q);case V:return ge=W._init,W=ge(W._payload),at(q,$,W,se)}if(ue(W))return Me(q,$,W,se);if(G(W)){if(ge=G(W),typeof ge!="function")throw Error(i(150));return W=ge.call(W),Re(q,$,W,se)}if(typeof W.then=="function")return at(q,$,cd(W),se);if(W.$$typeof===x)return at(q,$,Ku(q,W),se);ud(q,W)}return typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint"?(W=""+W,$!==null&&$.tag===6?(a(q,$.sibling),se=d($,W),se.return=q,q=se):(a(q,$),se=Dp(W,q.mode,se),se.return=q,q=se),b(q)):a(q,$)}return function(q,$,W,se){try{Ml=0;var ge=at(q,$,W,se);return ea=null,ge}catch(Ee){if(Ee===xl||Ee===Zu)throw Ee;var Fe=Tn(29,Ee,null,q.mode);return Fe.lanes=se,Fe.return=q,Fe}finally{}}}var ta=V0(!0),G0=V0(!1),Fn=X(null),Er=null;function Oi(r){var s=r.alternate;ie(jt,jt.current&1),ie(Fn,r),Er===null&&(s===null||Ko.current!==null||s.memoizedState!==null)&&(Er=r)}function Y0(r){if(r.tag===22){if(ie(jt,jt.current),ie(Fn,r),Er===null){var s=r.alternate;s!==null&&s.memoizedState!==null&&(Er=r)}}else Ni()}function Ni(){ie(jt,jt.current),ie(Fn,Fn.current)}function Qr(r){le(Fn),Er===r&&(Er=null),le(jt)}var jt=X(0);function dd(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Jm(a)))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}function um(r,s,a,c){s=r.memoizedState,a=a(c,s),a=a==null?s:g({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var dm={enqueueSetState:function(r,s,a){r=r._reactInternals;var c=In(),d=Ai(c);d.payload=s,a!=null&&(d.callback=a),s=Ii(r,d,c),s!==null&&(Dn(s,r,c),Cl(s,r,c))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var c=In(),d=Ai(c);d.tag=1,d.payload=s,a!=null&&(d.callback=a),s=Ii(r,d,c),s!==null&&(Dn(s,r,c),Cl(s,r,c))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=In(),c=Ai(a);c.tag=2,s!=null&&(c.callback=s),s=Ii(r,c,a),s!==null&&(Dn(s,r,a),Cl(s,r,a))}};function W0(r,s,a,c,d,m,b){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,m,b):s.prototype&&s.prototype.isPureReactComponent?!gl(a,c)||!gl(d,m):!0}function Q0(r,s,a,c){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==r&&dm.enqueueReplaceState(s,s.state,null)}function zs(r,s){var a=s;if("ref"in s){a={};for(var c in s)c!=="ref"&&(a[c]=s[c])}if(r=r.defaultProps){a===s&&(a=g({},a));for(var d in r)a[d]===void 0&&(a[d]=r[d])}return a}var fd=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function K0(r){fd(r)}function X0(r){console.error(r)}function Z0(r){fd(r)}function hd(r,s){try{var a=r.onUncaughtError;a(s.value,{componentStack:s.stack})}catch(c){setTimeout(function(){throw c})}}function J0(r,s,a){try{var c=r.onCaughtError;c(a.value,{componentStack:a.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function fm(r,s,a){return a=Ai(a),a.tag=3,a.payload={element:null},a.callback=function(){hd(r,s)},a}function eS(r){return r=Ai(r),r.tag=3,r}function tS(r,s,a,c){var d=a.type.getDerivedStateFromError;if(typeof d=="function"){var m=c.value;r.payload=function(){return d(m)},r.callback=function(){J0(s,a,c)}}var b=a.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(r.callback=function(){J0(s,a,c),typeof d!="function"&&(Ui===null?Ui=new Set([this]):Ui.add(this));var E=c.stack;this.componentDidCatch(c.value,{componentStack:E!==null?E:""})})}function SO(r,s,a,c,d){if(a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(s=a.alternate,s!==null&&Sl(s,a,d,!0),a=Fn.current,a!==null){switch(a.tag){case 13:return Er===null?Pm():a.alternate===null&&Ct===0&&(Ct=3),a.flags&=-257,a.flags|=65536,a.lanes=d,c===Bp?a.flags|=16384:(s=a.updateQueue,s===null?a.updateQueue=new Set([c]):s.add(c),Um(r,c,d)),!1;case 22:return a.flags|=65536,c===Bp?a.flags|=16384:(s=a.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([c])},a.updateQueue=s):(a=s.retryQueue,a===null?s.retryQueue=new Set([c]):a.add(c)),Um(r,c,d)),!1}throw Error(i(435,a.tag))}return Um(r,c,d),Pm(),!1}if(Je)return s=Fn.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=d,c!==kp&&(r=Error(i(422),{cause:c}),bl($n(r,a)))):(c!==kp&&(s=Error(i(423),{cause:c}),bl($n(s,a))),r=r.current.alternate,r.flags|=65536,d&=-d,r.lanes|=d,c=$n(c,a),d=fm(r.stateNode,c,d),qp(r,d),Ct!==4&&(Ct=2)),!1;var m=Error(i(520),{cause:c});if(m=$n(m,a),Bl===null?Bl=[m]:Bl.push(m),Ct!==4&&(Ct=2),s===null)return!0;c=$n(c,a),a=s;do{switch(a.tag){case 3:return a.flags|=65536,r=d&-d,a.lanes|=r,r=fm(a.stateNode,c,r),qp(a,r),!1;case 1:if(s=a.type,m=a.stateNode,(a.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ui===null||!Ui.has(m))))return a.flags|=65536,d&=-d,a.lanes|=d,d=eS(d),tS(d,r,a,c),qp(a,d),!1}a=a.return}while(a!==null);return!1}var nS=Error(i(461)),zt=!1;function Qt(r,s,a,c){s.child=r===null?G0(s,null,a,c):ta(s,r.child,a,c)}function rS(r,s,a,c,d){a=a.render;var m=s.ref;if("ref"in c){var b={};for(var E in c)E!=="ref"&&(b[E]=c[E])}else b=c;return js(s),c=Qp(r,s,a,b,m,d),E=Kp(),r!==null&&!zt?(Xp(r,s,d),Kr(r,s,d)):(Je&&E&&Np(s),s.flags|=1,Qt(r,s,c,d),s.child)}function iS(r,s,a,c,d){if(r===null){var m=a.type;return typeof m=="function"&&!Ip(m)&&m.defaultProps===void 0&&a.compare===null?(s.tag=15,s.type=m,sS(r,s,m,c,d)):(r=Gu(a.type,null,c,s,s.mode,d),r.ref=s.ref,r.return=s,s.child=r)}if(m=r.child,!bm(r,d)){var b=m.memoizedProps;if(a=a.compare,a=a!==null?a:gl,a(b,c)&&r.ref===s.ref)return Kr(r,s,d)}return s.flags|=1,r=Fr(m,c),r.ref=s.ref,r.return=s,s.child=r}function sS(r,s,a,c,d){if(r!==null){var m=r.memoizedProps;if(gl(m,c)&&r.ref===s.ref)if(zt=!1,s.pendingProps=c=m,bm(r,d))(r.flags&131072)!==0&&(zt=!0);else return s.lanes=r.lanes,Kr(r,s,d)}return hm(r,s,a,c,d)}function oS(r,s,a){var c=s.pendingProps,d=c.children,m=r!==null?r.memoizedState:null;if(c.mode==="hidden"){if((s.flags&128)!==0){if(c=m!==null?m.baseLanes|a:a,r!==null){for(d=s.child=r.child,m=0;d!==null;)m=m|d.lanes|d.childLanes,d=d.sibling;s.childLanes=m&~c}else s.childLanes=0,s.child=null;return aS(r,s,c,a)}if((a&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},r!==null&&Xu(s,m!==null?m.cachePool:null),m!==null?s0(s,m):Gp(),Y0(s);else return s.lanes=s.childLanes=536870912,aS(r,s,m!==null?m.baseLanes|a:a,a)}else m!==null?(Xu(s,m.cachePool),s0(s,m),Ni(),s.memoizedState=null):(r!==null&&Xu(s,null),Gp(),Ni());return Qt(r,s,d,a),s.child}function aS(r,s,a,c){var d=zp();return d=d===null?null:{parent:Pt._currentValue,pool:d},s.memoizedState={baseLanes:a,cachePool:d},r!==null&&Xu(s,null),Gp(),Y0(s),r!==null&&Sl(r,s,c,!0),null}function pd(r,s){var a=s.ref;if(a===null)r!==null&&r.ref!==null&&(s.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(i(284));(r===null||r.ref!==a)&&(s.flags|=4194816)}}function hm(r,s,a,c,d){return js(s),a=Qp(r,s,a,c,void 0,d),c=Kp(),r!==null&&!zt?(Xp(r,s,d),Kr(r,s,d)):(Je&&c&&Np(s),s.flags|=1,Qt(r,s,a,d),s.child)}function lS(r,s,a,c,d,m){return js(s),s.updateQueue=null,a=a0(s,c,a,d),o0(r),c=Kp(),r!==null&&!zt?(Xp(r,s,m),Kr(r,s,m)):(Je&&c&&Np(s),s.flags|=1,Qt(r,s,a,m),s.child)}function cS(r,s,a,c,d){if(js(s),s.stateNode===null){var m=Vo,b=a.contextType;typeof b=="object"&&b!==null&&(m=nn(b)),m=new a(c,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=dm,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=c,m.state=s.memoizedState,m.refs={},Hp(s),b=a.contextType,m.context=typeof b=="object"&&b!==null?nn(b):Vo,m.state=s.memoizedState,b=a.getDerivedStateFromProps,typeof b=="function"&&(um(s,a,b,c),m.state=s.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(b=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),b!==m.state&&dm.enqueueReplaceState(m,m.state,null),Al(s,c,m,d),Rl(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),c=!0}else if(r===null){m=s.stateNode;var E=s.memoizedProps,L=zs(a,E);m.props=L;var Q=m.context,re=a.contextType;b=Vo,typeof re=="object"&&re!==null&&(b=nn(re));var oe=a.getDerivedStateFromProps;re=typeof oe=="function"||typeof m.getSnapshotBeforeUpdate=="function",E=s.pendingProps!==E,re||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E||Q!==b)&&Q0(s,m,c,b),Ri=!1;var Z=s.memoizedState;m.state=Z,Al(s,c,m,d),Rl(),Q=s.memoizedState,E||Z!==Q||Ri?(typeof oe=="function"&&(um(s,a,oe,c),Q=s.memoizedState),(L=Ri||W0(s,a,L,c,Z,Q,b))?(re||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=Q),m.props=c,m.state=Q,m.context=b,c=L):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{m=s.stateNode,Fp(r,s),b=s.memoizedProps,re=zs(a,b),m.props=re,oe=s.pendingProps,Z=m.context,Q=a.contextType,L=Vo,typeof Q=="object"&&Q!==null&&(L=nn(Q)),E=a.getDerivedStateFromProps,(Q=typeof E=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(b!==oe||Z!==L)&&Q0(s,m,c,L),Ri=!1,Z=s.memoizedState,m.state=Z,Al(s,c,m,d),Rl();var J=s.memoizedState;b!==oe||Z!==J||Ri||r!==null&&r.dependencies!==null&&Qu(r.dependencies)?(typeof E=="function"&&(um(s,a,E,c),J=s.memoizedState),(re=Ri||W0(s,a,re,c,Z,J,L)||r!==null&&r.dependencies!==null&&Qu(r.dependencies))?(Q||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(c,J,L),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(c,J,L)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||b===r.memoizedProps&&Z===r.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===r.memoizedProps&&Z===r.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=J),m.props=c,m.state=J,m.context=L,c=re):(typeof m.componentDidUpdate!="function"||b===r.memoizedProps&&Z===r.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===r.memoizedProps&&Z===r.memoizedState||(s.flags|=1024),c=!1)}return m=c,pd(r,s),c=(s.flags&128)!==0,m||c?(m=s.stateNode,a=c&&typeof a.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,r!==null&&c?(s.child=ta(s,r.child,null,d),s.child=ta(s,null,a,d)):Qt(r,s,a,d),s.memoizedState=m.state,r=s.child):r=Kr(r,s,d),r}function uS(r,s,a,c){return _l(),s.flags|=256,Qt(r,s,a,c),s.child}var pm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mm(r){return{baseLanes:r,cachePool:Xb()}}function gm(r,s,a){return r=r!==null?r.childLanes&~a:0,s&&(r|=qn),r}function dS(r,s,a){var c=s.pendingProps,d=!1,m=(s.flags&128)!==0,b;if((b=m)||(b=r!==null&&r.memoizedState===null?!1:(jt.current&2)!==0),b&&(d=!0,s.flags&=-129),b=(s.flags&32)!==0,s.flags&=-33,r===null){if(Je){if(d?Oi(s):Ni(),Je){var E=Tt,L;if(L=E){e:{for(L=E,E=wr;L.nodeType!==8;){if(!E){E=null;break e}if(L=sr(L.nextSibling),L===null){E=null;break e}}E=L}E!==null?(s.memoizedState={dehydrated:E,treeContext:Ns!==null?{id:qr,overflow:Vr}:null,retryLane:536870912,hydrationErrors:null},L=Tn(18,null,null,0),L.stateNode=E,L.return=s,s.child=L,cn=s,Tt=null,L=!0):L=!1}L||Ls(s)}if(E=s.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return Jm(E)?s.lanes=32:s.lanes=536870912,null;Qr(s)}return E=c.children,c=c.fallback,d?(Ni(),d=s.mode,E=md({mode:"hidden",children:E},d),c=Os(c,d,a,null),E.return=s,c.return=s,E.sibling=c,s.child=E,d=s.child,d.memoizedState=mm(a),d.childLanes=gm(r,b,a),s.memoizedState=pm,c):(Oi(s),ym(s,E))}if(L=r.memoizedState,L!==null&&(E=L.dehydrated,E!==null)){if(m)s.flags&256?(Oi(s),s.flags&=-257,s=vm(r,s,a)):s.memoizedState!==null?(Ni(),s.child=r.child,s.flags|=128,s=null):(Ni(),d=c.fallback,E=s.mode,c=md({mode:"visible",children:c.children},E),d=Os(d,E,a,null),d.flags|=2,c.return=s,d.return=s,c.sibling=d,s.child=c,ta(s,r.child,null,a),c=s.child,c.memoizedState=mm(a),c.childLanes=gm(r,b,a),s.memoizedState=pm,s=d);else if(Oi(s),Jm(E)){if(b=E.nextSibling&&E.nextSibling.dataset,b)var Q=b.dgst;b=Q,c=Error(i(419)),c.stack="",c.digest=b,bl({value:c,source:null,stack:null}),s=vm(r,s,a)}else if(zt||Sl(r,s,a,!1),b=(a&r.childLanes)!==0,zt||b){if(b=ft,b!==null&&(c=a&-a,c=(c&42)!==0?1:al(c),c=(c&(b.suspendedLanes|a))!==0?0:c,c!==0&&c!==L.retryLane))throw L.retryLane=c,qo(r,c),Dn(b,r,c),nS;E.data==="$?"||Pm(),s=vm(r,s,a)}else E.data==="$?"?(s.flags|=192,s.child=r.child,s=null):(r=L.treeContext,Tt=sr(E.nextSibling),cn=s,Je=!0,ks=null,wr=!1,r!==null&&(Bn[Hn++]=qr,Bn[Hn++]=Vr,Bn[Hn++]=Ns,qr=r.id,Vr=r.overflow,Ns=s),s=ym(s,c.children),s.flags|=4096);return s}return d?(Ni(),d=c.fallback,E=s.mode,L=r.child,Q=L.sibling,c=Fr(L,{mode:"hidden",children:c.children}),c.subtreeFlags=L.subtreeFlags&65011712,Q!==null?d=Fr(Q,d):(d=Os(d,E,a,null),d.flags|=2),d.return=s,c.return=s,c.sibling=d,s.child=c,c=d,d=s.child,E=r.child.memoizedState,E===null?E=mm(a):(L=E.cachePool,L!==null?(Q=Pt._currentValue,L=L.parent!==Q?{parent:Q,pool:Q}:L):L=Xb(),E={baseLanes:E.baseLanes|a,cachePool:L}),d.memoizedState=E,d.childLanes=gm(r,b,a),s.memoizedState=pm,c):(Oi(s),a=r.child,r=a.sibling,a=Fr(a,{mode:"visible",children:c.children}),a.return=s,a.sibling=null,r!==null&&(b=s.deletions,b===null?(s.deletions=[r],s.flags|=16):b.push(r)),s.child=a,s.memoizedState=null,a)}function ym(r,s){return s=md({mode:"visible",children:s},r.mode),s.return=r,r.child=s}function md(r,s){return r=Tn(22,r,null,s),r.lanes=0,r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},r}function vm(r,s,a){return ta(s,r.child,null,a),r=ym(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function fS(r,s,a){r.lanes|=s;var c=r.alternate;c!==null&&(c.lanes|=s),Pp(r.return,s,a)}function _m(r,s,a,c,d){var m=r.memoizedState;m===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=s,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function hS(r,s,a){var c=s.pendingProps,d=c.revealOrder,m=c.tail;if(Qt(r,s,c.children,a),c=jt.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&fS(r,a,s);else if(r.tag===19)fS(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}switch(ie(jt,c),d){case"forwards":for(a=s.child,d=null;a!==null;)r=a.alternate,r!==null&&dd(r)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),_m(s,!1,d,a,m);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(r=d.alternate,r!==null&&dd(r)===null){s.child=d;break}r=d.sibling,d.sibling=a,a=d,d=r}_m(s,!0,a,null,m);break;case"together":_m(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Kr(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),ji|=s.lanes,(a&s.childLanes)===0)if(r!==null){if(Sl(r,s,a,!1),(a&s.childLanes)===0)return null}else return null;if(r!==null&&s.child!==r.child)throw Error(i(153));if(s.child!==null){for(r=s.child,a=Fr(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=Fr(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function bm(r,s){return(r.lanes&s)!==0?!0:(r=r.dependencies,!!(r!==null&&Qu(r)))}function wO(r,s,a){switch(s.tag){case 3:be(s,s.stateNode.containerInfo),Ci(s,Pt,r.memoizedState.cache),_l();break;case 27:case 5:$e(s);break;case 4:be(s,s.stateNode.containerInfo);break;case 10:Ci(s,s.type,s.memoizedProps.value);break;case 13:var c=s.memoizedState;if(c!==null)return c.dehydrated!==null?(Oi(s),s.flags|=128,null):(a&s.child.childLanes)!==0?dS(r,s,a):(Oi(s),r=Kr(r,s,a),r!==null?r.sibling:null);Oi(s);break;case 19:var d=(r.flags&128)!==0;if(c=(a&s.childLanes)!==0,c||(Sl(r,s,a,!1),c=(a&s.childLanes)!==0),d){if(c)return hS(r,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),ie(jt,jt.current),c)break;return null;case 22:case 23:return s.lanes=0,oS(r,s,a);case 24:Ci(s,Pt,r.memoizedState.cache)}return Kr(r,s,a)}function pS(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps)zt=!0;else{if(!bm(r,a)&&(s.flags&128)===0)return zt=!1,wO(r,s,a);zt=(r.flags&131072)!==0}else zt=!1,Je&&(s.flags&1048576)!==0&&qb(s,Wu,s.index);switch(s.lanes=0,s.tag){case 16:e:{r=s.pendingProps;var c=s.elementType,d=c._init;if(c=d(c._payload),s.type=c,typeof c=="function")Ip(c)?(r=zs(c,r),s.tag=1,s=cS(null,s,c,r,a)):(s.tag=0,s=hm(null,s,c,r,a));else{if(c!=null){if(d=c.$$typeof,d===I){s.tag=11,s=rS(null,s,c,r,a);break e}else if(d===P){s.tag=14,s=iS(null,s,c,r,a);break e}}throw s=K(c)||c,Error(i(306,s,""))}}return s;case 0:return hm(r,s,s.type,s.pendingProps,a);case 1:return c=s.type,d=zs(c,s.pendingProps),cS(r,s,c,d,a);case 3:e:{if(be(s,s.stateNode.containerInfo),r===null)throw Error(i(387));c=s.pendingProps;var m=s.memoizedState;d=m.element,Fp(r,s),Al(s,c,null,a);var b=s.memoizedState;if(c=b.cache,Ci(s,Pt,c),c!==m.cache&&jp(s,[Pt],a,!0),Rl(),c=b.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:b.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=uS(r,s,c,a);break e}else if(c!==d){d=$n(Error(i(424)),s),bl(d),s=uS(r,s,c,a);break e}else{switch(r=s.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}for(Tt=sr(r.firstChild),cn=s,Je=!0,ks=null,wr=!0,a=G0(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(_l(),c===d){s=Kr(r,s,a);break e}Qt(r,s,c,a)}s=s.child}return s;case 26:return pd(r,s),r===null?(a=v1(s.type,null,s.pendingProps,null))?s.memoizedState=a:Je||(a=s.type,r=s.pendingProps,c=Id(pe.current).createElement(a),c[ce]=s,c[fe]=r,Xt(c,a,r),Le(c),s.stateNode=c):s.memoizedState=v1(s.type,r.memoizedProps,s.pendingProps,r.memoizedState),null;case 27:return $e(s),r===null&&Je&&(c=s.stateNode=m1(s.type,s.pendingProps,pe.current),cn=s,wr=!0,d=Tt,Bi(s.type)?(eg=d,Tt=sr(c.firstChild)):Tt=d),Qt(r,s,s.pendingProps.children,a),pd(r,s),r===null&&(s.flags|=4194304),s.child;case 5:return r===null&&Je&&((d=c=Tt)&&(c=KO(c,s.type,s.pendingProps,wr),c!==null?(s.stateNode=c,cn=s,Tt=sr(c.firstChild),wr=!1,d=!0):d=!1),d||Ls(s)),$e(s),d=s.type,m=s.pendingProps,b=r!==null?r.memoizedProps:null,c=m.children,Km(d,m)?c=null:b!==null&&Km(d,b)&&(s.flags|=32),s.memoizedState!==null&&(d=Qp(r,s,pO,null,null,a),Kl._currentValue=d),pd(r,s),Qt(r,s,c,a),s.child;case 6:return r===null&&Je&&((r=a=Tt)&&(a=XO(a,s.pendingProps,wr),a!==null?(s.stateNode=a,cn=s,Tt=null,r=!0):r=!1),r||Ls(s)),null;case 13:return dS(r,s,a);case 4:return be(s,s.stateNode.containerInfo),c=s.pendingProps,r===null?s.child=ta(s,null,c,a):Qt(r,s,c,a),s.child;case 11:return rS(r,s,s.type,s.pendingProps,a);case 7:return Qt(r,s,s.pendingProps,a),s.child;case 8:return Qt(r,s,s.pendingProps.children,a),s.child;case 12:return Qt(r,s,s.pendingProps.children,a),s.child;case 10:return c=s.pendingProps,Ci(s,s.type,c.value),Qt(r,s,c.children,a),s.child;case 9:return d=s.type._context,c=s.pendingProps.children,js(s),d=nn(d),c=c(d),s.flags|=1,Qt(r,s,c,a),s.child;case 14:return iS(r,s,s.type,s.pendingProps,a);case 15:return sS(r,s,s.type,s.pendingProps,a);case 19:return hS(r,s,a);case 31:return c=s.pendingProps,a=s.mode,c={mode:c.mode,children:c.children},r===null?(a=md(c,a),a.ref=s.ref,s.child=a,a.return=s,s=a):(a=Fr(r.child,c),a.ref=s.ref,s.child=a,a.return=s,s=a),s;case 22:return oS(r,s,a);case 24:return js(s),c=nn(Pt),r===null?(d=zp(),d===null&&(d=ft,m=Up(),d.pooledCache=m,m.refCount++,m!==null&&(d.pooledCacheLanes|=a),d=m),s.memoizedState={parent:c,cache:d},Hp(s),Ci(s,Pt,d)):((r.lanes&a)!==0&&(Fp(r,s),Al(s,null,null,a),Rl()),d=r.memoizedState,m=s.memoizedState,d.parent!==c?(d={parent:c,cache:c},s.memoizedState=d,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=d),Ci(s,Pt,c)):(c=m.cache,Ci(s,Pt,c),c!==d.cache&&jp(s,[Pt],a,!0))),Qt(r,s,s.pendingProps.children,a),s.child;case 29:throw s.pendingProps}throw Error(i(156,s.tag))}function Xr(r){r.flags|=4}function mS(r,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)r.flags&=-16777217;else if(r.flags|=16777216,!E1(s)){if(s=Fn.current,s!==null&&((Qe&4194048)===Qe?Er!==null:(Qe&62914560)!==Qe&&(Qe&536870912)===0||s!==Er))throw Tl=Bp,Zb;r.flags|=8192}}function gd(r,s){s!==null&&(r.flags|=4),r.flags&16384&&(s=r.tag!==22?Du():536870912,r.lanes|=s,sa|=s)}function Ll(r,s){if(!Je)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function wt(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,c=0;if(s)for(var d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&65011712,c|=d.flags&65011712,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=c,r.childLanes=a,s}function EO(r,s,a){var c=s.pendingProps;switch(Mp(s),s.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(s),null;case 1:return wt(s),null;case 3:return a=s.stateNode,c=null,r!==null&&(c=r.memoizedState.cache),s.memoizedState.cache!==c&&(s.flags|=2048),Yr(Pt),De(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(r===null||r.child===null)&&(vl(s)?Xr(s):r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Yb())),wt(s),null;case 26:return a=s.memoizedState,r===null?(Xr(s),a!==null?(wt(s),mS(s,a)):(wt(s),s.flags&=-16777217)):a?a!==r.memoizedState?(Xr(s),wt(s),mS(s,a)):(wt(s),s.flags&=-16777217):(r.memoizedProps!==c&&Xr(s),wt(s),s.flags&=-16777217),null;case 27:_t(s),a=pe.current;var d=s.type;if(r!==null&&s.stateNode!=null)r.memoizedProps!==c&&Xr(s);else{if(!c){if(s.stateNode===null)throw Error(i(166));return wt(s),null}r=de.current,vl(s)?Vb(s):(r=m1(d,c,a),s.stateNode=r,Xr(s))}return wt(s),null;case 5:if(_t(s),a=s.type,r!==null&&s.stateNode!=null)r.memoizedProps!==c&&Xr(s);else{if(!c){if(s.stateNode===null)throw Error(i(166));return wt(s),null}if(r=de.current,vl(s))Vb(s);else{switch(d=Id(pe.current),r){case 1:r=d.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:r=d.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":r=d.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":r=d.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":r=d.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof c.is=="string"?d.createElement("select",{is:c.is}):d.createElement("select"),c.multiple?r.multiple=!0:c.size&&(r.size=c.size);break;default:r=typeof c.is=="string"?d.createElement(a,{is:c.is}):d.createElement(a)}}r[ce]=s,r[fe]=c;e:for(d=s.child;d!==null;){if(d.tag===5||d.tag===6)r.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===s)break e;for(;d.sibling===null;){if(d.return===null||d.return===s)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}s.stateNode=r;e:switch(Xt(r,a,c),a){case"button":case"input":case"select":case"textarea":r=!!c.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Xr(s)}}return wt(s),s.flags&=-16777217,null;case 6:if(r&&s.stateNode!=null)r.memoizedProps!==c&&Xr(s);else{if(typeof c!="string"&&s.stateNode===null)throw Error(i(166));if(r=pe.current,vl(s)){if(r=s.stateNode,a=s.memoizedProps,c=null,d=cn,d!==null)switch(d.tag){case 27:case 5:c=d.memoizedProps}r[ce]=s,r=!!(r.nodeValue===a||c!==null&&c.suppressHydrationWarning===!0||l1(r.nodeValue,a)),r||Ls(s)}else r=Id(r).createTextNode(c),r[ce]=s,s.stateNode=r}return wt(s),null;case 13:if(c=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(d=vl(s),c!==null&&c.dehydrated!==null){if(r===null){if(!d)throw Error(i(318));if(d=s.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(i(317));d[ce]=s}else _l(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;wt(s),d=!1}else d=Yb(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=d),d=!0;if(!d)return s.flags&256?(Qr(s),s):(Qr(s),null)}if(Qr(s),(s.flags&128)!==0)return s.lanes=a,s;if(a=c!==null,r=r!==null&&r.memoizedState!==null,a){c=s.child,d=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(d=c.alternate.memoizedState.cachePool.pool);var m=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(m=c.memoizedState.cachePool.pool),m!==d&&(c.flags|=2048)}return a!==r&&a&&(s.child.flags|=8192),gd(s,s.updateQueue),wt(s),null;case 4:return De(),r===null&&Vm(s.stateNode.containerInfo),wt(s),null;case 10:return Yr(s.type),wt(s),null;case 19:if(le(jt),d=s.memoizedState,d===null)return wt(s),null;if(c=(s.flags&128)!==0,m=d.rendering,m===null)if(c)Ll(d,!1);else{if(Ct!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(m=dd(r),m!==null){for(s.flags|=128,Ll(d,!1),r=m.updateQueue,s.updateQueue=r,gd(s,r),s.subtreeFlags=0,r=a,a=s.child;a!==null;)Fb(a,r),a=a.sibling;return ie(jt,jt.current&1|2),s.child}r=r.sibling}d.tail!==null&&Yt()>_d&&(s.flags|=128,c=!0,Ll(d,!1),s.lanes=4194304)}else{if(!c)if(r=dd(m),r!==null){if(s.flags|=128,c=!0,r=r.updateQueue,s.updateQueue=r,gd(s,r),Ll(d,!0),d.tail===null&&d.tailMode==="hidden"&&!m.alternate&&!Je)return wt(s),null}else 2*Yt()-d.renderingStartTime>_d&&a!==536870912&&(s.flags|=128,c=!0,Ll(d,!1),s.lanes=4194304);d.isBackwards?(m.sibling=s.child,s.child=m):(r=d.last,r!==null?r.sibling=m:s.child=m,d.last=m)}return d.tail!==null?(s=d.tail,d.rendering=s,d.tail=s.sibling,d.renderingStartTime=Yt(),s.sibling=null,r=jt.current,ie(jt,c?r&1|2:r&1),s):(wt(s),null);case 22:case 23:return Qr(s),Yp(),c=s.memoizedState!==null,r!==null?r.memoizedState!==null!==c&&(s.flags|=8192):c&&(s.flags|=8192),c?(a&536870912)!==0&&(s.flags&128)===0&&(wt(s),s.subtreeFlags&6&&(s.flags|=8192)):wt(s),a=s.updateQueue,a!==null&&gd(s,a.retryQueue),a=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),c=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==a&&(s.flags|=2048),r!==null&&le(Us),null;case 24:return a=null,r!==null&&(a=r.memoizedState.cache),s.memoizedState.cache!==a&&(s.flags|=2048),Yr(Pt),wt(s),null;case 25:return null;case 30:return null}throw Error(i(156,s.tag))}function xO(r,s){switch(Mp(s),s.tag){case 1:return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return Yr(Pt),De(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 26:case 27:case 5:return _t(s),null;case 13:if(Qr(s),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(i(340));_l()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return le(jt),null;case 4:return De(),null;case 10:return Yr(s.type),null;case 22:case 23:return Qr(s),Yp(),r!==null&&le(Us),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 24:return Yr(Pt),null;case 25:return null;default:return null}}function gS(r,s){switch(Mp(s),s.tag){case 3:Yr(Pt),De();break;case 26:case 27:case 5:_t(s);break;case 4:De();break;case 13:Qr(s);break;case 19:le(jt);break;case 10:Yr(s.type);break;case 22:case 23:Qr(s),Yp(),r!==null&&le(Us);break;case 24:Yr(Pt)}}function Pl(r,s){try{var a=s.updateQueue,c=a!==null?a.lastEffect:null;if(c!==null){var d=c.next;a=d;do{if((a.tag&r)===r){c=void 0;var m=a.create,b=a.inst;c=m(),b.destroy=c}a=a.next}while(a!==d)}}catch(E){dt(s,s.return,E)}}function Mi(r,s,a){try{var c=s.updateQueue,d=c!==null?c.lastEffect:null;if(d!==null){var m=d.next;c=m;do{if((c.tag&r)===r){var b=c.inst,E=b.destroy;if(E!==void 0){b.destroy=void 0,d=s;var L=a,Q=E;try{Q()}catch(re){dt(d,L,re)}}}c=c.next}while(c!==m)}}catch(re){dt(s,s.return,re)}}function yS(r){var s=r.updateQueue;if(s!==null){var a=r.stateNode;try{i0(s,a)}catch(c){dt(r,r.return,c)}}}function vS(r,s,a){a.props=zs(r.type,r.memoizedProps),a.state=r.memoizedState;try{a.componentWillUnmount()}catch(c){dt(r,s,c)}}function jl(r,s){try{var a=r.ref;if(a!==null){switch(r.tag){case 26:case 27:case 5:var c=r.stateNode;break;case 30:c=r.stateNode;break;default:c=r.stateNode}typeof a=="function"?r.refCleanup=a(c):a.current=c}}catch(d){dt(r,s,d)}}function xr(r,s){var a=r.ref,c=r.refCleanup;if(a!==null)if(typeof c=="function")try{c()}catch(d){dt(r,s,d)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(d){dt(r,s,d)}else a.current=null}function _S(r){var s=r.type,a=r.memoizedProps,c=r.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":a.autoFocus&&c.focus();break e;case"img":a.src?c.src=a.src:a.srcSet&&(c.srcset=a.srcSet)}}catch(d){dt(r,r.return,d)}}function Sm(r,s,a){try{var c=r.stateNode;VO(c,r.type,a,s),c[fe]=s}catch(d){dt(r,r.return,d)}}function bS(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&Bi(r.type)||r.tag===4}function wm(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||bS(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&Bi(r.type)||r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Em(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(r,s):(s=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,s.appendChild(r),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=Ad));else if(c!==4&&(c===27&&Bi(r.type)&&(a=r.stateNode,s=null),r=r.child,r!==null))for(Em(r,s,a),r=r.sibling;r!==null;)Em(r,s,a),r=r.sibling}function yd(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(c!==4&&(c===27&&Bi(r.type)&&(a=r.stateNode),r=r.child,r!==null))for(yd(r,s,a),r=r.sibling;r!==null;)yd(r,s,a),r=r.sibling}function SS(r){var s=r.stateNode,a=r.memoizedProps;try{for(var c=r.type,d=s.attributes;d.length;)s.removeAttributeNode(d[0]);Xt(s,c,a),s[ce]=r,s[fe]=a}catch(m){dt(r,r.return,m)}}var Zr=!1,Ot=!1,xm=!1,wS=typeof WeakSet=="function"?WeakSet:Set,Bt=null;function TO(r,s){if(r=r.containerInfo,Wm=Ld,r=Mb(r),wp(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var b=0,E=-1,L=-1,Q=0,re=0,oe=r,Z=null;t:for(;;){for(var J;oe!==a||d!==0&&oe.nodeType!==3||(E=b+d),oe!==m||c!==0&&oe.nodeType!==3||(L=b+c),oe.nodeType===3&&(b+=oe.nodeValue.length),(J=oe.firstChild)!==null;)Z=oe,oe=J;for(;;){if(oe===r)break t;if(Z===a&&++Q===d&&(E=b),Z===m&&++re===c&&(L=b),(J=oe.nextSibling)!==null)break;oe=Z,Z=oe.parentNode}oe=J}a=E===-1||L===-1?null:{start:E,end:L}}else a=null}a=a||{start:0,end:0}}else a=null;for(Qm={focusedElem:r,selectionRange:a},Ld=!1,Bt=s;Bt!==null;)if(s=Bt,r=s.child,(s.subtreeFlags&1024)!==0&&r!==null)r.return=s,Bt=r;else for(;Bt!==null;){switch(s=Bt,m=s.alternate,r=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if((r&1024)!==0&&m!==null){r=void 0,a=s,d=m.memoizedProps,m=m.memoizedState,c=a.stateNode;try{var Me=zs(a.type,d,a.elementType===a.type);r=c.getSnapshotBeforeUpdate(Me,m),c.__reactInternalSnapshotBeforeUpdate=r}catch(Re){dt(a,a.return,Re)}}break;case 3:if((r&1024)!==0){if(r=s.stateNode.containerInfo,a=r.nodeType,a===9)Zm(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Zm(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((r&1024)!==0)throw Error(i(163))}if(r=s.sibling,r!==null){r.return=s.return,Bt=r;break}Bt=s.return}}function ES(r,s,a){var c=a.flags;switch(a.tag){case 0:case 11:case 15:ki(r,a),c&4&&Pl(5,a);break;case 1:if(ki(r,a),c&4)if(r=a.stateNode,s===null)try{r.componentDidMount()}catch(b){dt(a,a.return,b)}else{var d=zs(a.type,s.memoizedProps);s=s.memoizedState;try{r.componentDidUpdate(d,s,r.__reactInternalSnapshotBeforeUpdate)}catch(b){dt(a,a.return,b)}}c&64&&yS(a),c&512&&jl(a,a.return);break;case 3:if(ki(r,a),c&64&&(r=a.updateQueue,r!==null)){if(s=null,a.child!==null)switch(a.child.tag){case 27:case 5:s=a.child.stateNode;break;case 1:s=a.child.stateNode}try{i0(r,s)}catch(b){dt(a,a.return,b)}}break;case 27:s===null&&c&4&&SS(a);case 26:case 5:ki(r,a),s===null&&c&4&&_S(a),c&512&&jl(a,a.return);break;case 12:ki(r,a);break;case 13:ki(r,a),c&4&&CS(r,a),c&64&&(r=a.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(a=kO.bind(null,a),ZO(r,a))));break;case 22:if(c=a.memoizedState!==null||Zr,!c){s=s!==null&&s.memoizedState!==null||Ot,d=Zr;var m=Ot;Zr=c,(Ot=s)&&!m?Li(r,a,(a.subtreeFlags&8772)!==0):ki(r,a),Zr=d,Ot=m}break;case 30:break;default:ki(r,a)}}function xS(r){var s=r.alternate;s!==null&&(r.alternate=null,xS(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&Se(s)),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}var vt=null,yn=!1;function Jr(r,s,a){for(a=a.child;a!==null;)TS(r,s,a),a=a.sibling}function TS(r,s,a){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(hn,a)}catch{}switch(a.tag){case 26:Ot||xr(a,s),Jr(r,s,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ot||xr(a,s);var c=vt,d=yn;Bi(a.type)&&(vt=a.stateNode,yn=!1),Jr(r,s,a),Gl(a.stateNode),vt=c,yn=d;break;case 5:Ot||xr(a,s);case 6:if(c=vt,d=yn,vt=null,Jr(r,s,a),vt=c,yn=d,vt!==null)if(yn)try{(vt.nodeType===9?vt.body:vt.nodeName==="HTML"?vt.ownerDocument.body:vt).removeChild(a.stateNode)}catch(m){dt(a,s,m)}else try{vt.removeChild(a.stateNode)}catch(m){dt(a,s,m)}break;case 18:vt!==null&&(yn?(r=vt,h1(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,a.stateNode),ec(r)):h1(vt,a.stateNode));break;case 4:c=vt,d=yn,vt=a.stateNode.containerInfo,yn=!0,Jr(r,s,a),vt=c,yn=d;break;case 0:case 11:case 14:case 15:Ot||Mi(2,a,s),Ot||Mi(4,a,s),Jr(r,s,a);break;case 1:Ot||(xr(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"&&vS(a,s,c)),Jr(r,s,a);break;case 21:Jr(r,s,a);break;case 22:Ot=(c=Ot)||a.memoizedState!==null,Jr(r,s,a),Ot=c;break;default:Jr(r,s,a)}}function CS(r,s){if(s.memoizedState===null&&(r=s.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{ec(r)}catch(a){dt(s,s.return,a)}}function CO(r){switch(r.tag){case 13:case 19:var s=r.stateNode;return s===null&&(s=r.stateNode=new wS),s;case 22:return r=r.stateNode,s=r._retryCache,s===null&&(s=r._retryCache=new wS),s;default:throw Error(i(435,r.tag))}}function Tm(r,s){var a=CO(r);s.forEach(function(c){var d=LO.bind(null,r,c);a.has(c)||(a.add(c),c.then(d,d))})}function Cn(r,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c],m=r,b=s,E=b;e:for(;E!==null;){switch(E.tag){case 27:if(Bi(E.type)){vt=E.stateNode,yn=!1;break e}break;case 5:vt=E.stateNode,yn=!1;break e;case 3:case 4:vt=E.stateNode.containerInfo,yn=!0;break e}E=E.return}if(vt===null)throw Error(i(160));TS(m,b,d),vt=null,yn=!1,m=d.alternate,m!==null&&(m.return=null),d.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)RS(s,r),s=s.sibling}var ir=null;function RS(r,s){var a=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:Cn(s,r),Rn(r),c&4&&(Mi(3,r,r.return),Pl(3,r),Mi(5,r,r.return));break;case 1:Cn(s,r),Rn(r),c&512&&(Ot||a===null||xr(a,a.return)),c&64&&Zr&&(r=r.updateQueue,r!==null&&(c=r.callbacks,c!==null&&(a=r.shared.hiddenCallbacks,r.shared.hiddenCallbacks=a===null?c:a.concat(c))));break;case 26:var d=ir;if(Cn(s,r),Rn(r),c&512&&(Ot||a===null||xr(a,a.return)),c&4){var m=a!==null?a.memoizedState:null;if(c=r.memoizedState,a===null)if(c===null)if(r.stateNode===null){e:{c=r.type,a=r.memoizedProps,d=d.ownerDocument||d;t:switch(c){case"title":m=d.getElementsByTagName("title")[0],(!m||m[_e]||m[ce]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=d.createElement(c),d.head.insertBefore(m,d.querySelector("head > title"))),Xt(m,c,a),m[ce]=r,Le(m),c=m;break e;case"link":var b=S1("link","href",d).get(c+(a.href||""));if(b){for(var E=0;E<b.length;E++)if(m=b[E],m.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&m.getAttribute("rel")===(a.rel==null?null:a.rel)&&m.getAttribute("title")===(a.title==null?null:a.title)&&m.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){b.splice(E,1);break t}}m=d.createElement(c),Xt(m,c,a),d.head.appendChild(m);break;case"meta":if(b=S1("meta","content",d).get(c+(a.content||""))){for(E=0;E<b.length;E++)if(m=b[E],m.getAttribute("content")===(a.content==null?null:""+a.content)&&m.getAttribute("name")===(a.name==null?null:a.name)&&m.getAttribute("property")===(a.property==null?null:a.property)&&m.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&m.getAttribute("charset")===(a.charSet==null?null:a.charSet)){b.splice(E,1);break t}}m=d.createElement(c),Xt(m,c,a),d.head.appendChild(m);break;default:throw Error(i(468,c))}m[ce]=r,Le(m),c=m}r.stateNode=c}else w1(d,r.type,r.stateNode);else r.stateNode=b1(d,c,r.memoizedProps);else m!==c?(m===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):m.count--,c===null?w1(d,r.type,r.stateNode):b1(d,c,r.memoizedProps)):c===null&&r.stateNode!==null&&Sm(r,r.memoizedProps,a.memoizedProps)}break;case 27:Cn(s,r),Rn(r),c&512&&(Ot||a===null||xr(a,a.return)),a!==null&&c&4&&Sm(r,r.memoizedProps,a.memoizedProps);break;case 5:if(Cn(s,r),Rn(r),c&512&&(Ot||a===null||xr(a,a.return)),r.flags&32){d=r.stateNode;try{jo(d,"")}catch(J){dt(r,r.return,J)}}c&4&&r.stateNode!=null&&(d=r.memoizedProps,Sm(r,d,a!==null?a.memoizedProps:d)),c&1024&&(xm=!0);break;case 6:if(Cn(s,r),Rn(r),c&4){if(r.stateNode===null)throw Error(i(162));c=r.memoizedProps,a=r.stateNode;try{a.nodeValue=c}catch(J){dt(r,r.return,J)}}break;case 3:if(Nd=null,d=ir,ir=Dd(s.containerInfo),Cn(s,r),ir=d,Rn(r),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ec(s.containerInfo)}catch(J){dt(r,r.return,J)}xm&&(xm=!1,AS(r));break;case 4:c=ir,ir=Dd(r.stateNode.containerInfo),Cn(s,r),Rn(r),ir=c;break;case 12:Cn(s,r),Rn(r);break;case 13:Cn(s,r),Rn(r),r.child.flags&8192&&r.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Om=Yt()),c&4&&(c=r.updateQueue,c!==null&&(r.updateQueue=null,Tm(r,c)));break;case 22:d=r.memoizedState!==null;var L=a!==null&&a.memoizedState!==null,Q=Zr,re=Ot;if(Zr=Q||d,Ot=re||L,Cn(s,r),Ot=re,Zr=Q,Rn(r),c&8192)e:for(s=r.stateNode,s._visibility=d?s._visibility&-2:s._visibility|1,d&&(a===null||L||Zr||Ot||Bs(r)),a=null,s=r;;){if(s.tag===5||s.tag===26){if(a===null){L=a=s;try{if(m=L.stateNode,d)b=m.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{E=L.stateNode;var oe=L.memoizedProps.style,Z=oe!=null&&oe.hasOwnProperty("display")?oe.display:null;E.style.display=Z==null||typeof Z=="boolean"?"":(""+Z).trim()}}catch(J){dt(L,L.return,J)}}}else if(s.tag===6){if(a===null){L=s;try{L.stateNode.nodeValue=d?"":L.memoizedProps}catch(J){dt(L,L.return,J)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===r)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break e;for(;s.sibling===null;){if(s.return===null||s.return===r)break e;a===s&&(a=null),s=s.return}a===s&&(a=null),s.sibling.return=s.return,s=s.sibling}c&4&&(c=r.updateQueue,c!==null&&(a=c.retryQueue,a!==null&&(c.retryQueue=null,Tm(r,a))));break;case 19:Cn(s,r),Rn(r),c&4&&(c=r.updateQueue,c!==null&&(r.updateQueue=null,Tm(r,c)));break;case 30:break;case 21:break;default:Cn(s,r),Rn(r)}}function Rn(r){var s=r.flags;if(s&2){try{for(var a,c=r.return;c!==null;){if(bS(c)){a=c;break}c=c.return}if(a==null)throw Error(i(160));switch(a.tag){case 27:var d=a.stateNode,m=wm(r);yd(r,m,d);break;case 5:var b=a.stateNode;a.flags&32&&(jo(b,""),a.flags&=-33);var E=wm(r);yd(r,E,b);break;case 3:case 4:var L=a.stateNode.containerInfo,Q=wm(r);Em(r,Q,L);break;default:throw Error(i(161))}}catch(re){dt(r,r.return,re)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function AS(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var s=r;AS(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),r=r.sibling}}function ki(r,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)ES(r,s.alternate,s),s=s.sibling}function Bs(r){for(r=r.child;r!==null;){var s=r;switch(s.tag){case 0:case 11:case 14:case 15:Mi(4,s,s.return),Bs(s);break;case 1:xr(s,s.return);var a=s.stateNode;typeof a.componentWillUnmount=="function"&&vS(s,s.return,a),Bs(s);break;case 27:Gl(s.stateNode);case 26:case 5:xr(s,s.return),Bs(s);break;case 22:s.memoizedState===null&&Bs(s);break;case 30:Bs(s);break;default:Bs(s)}r=r.sibling}}function Li(r,s,a){for(a=a&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var c=s.alternate,d=r,m=s,b=m.flags;switch(m.tag){case 0:case 11:case 15:Li(d,m,a),Pl(4,m);break;case 1:if(Li(d,m,a),c=m,d=c.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(Q){dt(c,c.return,Q)}if(c=m,d=c.updateQueue,d!==null){var E=c.stateNode;try{var L=d.shared.hiddenCallbacks;if(L!==null)for(d.shared.hiddenCallbacks=null,d=0;d<L.length;d++)r0(L[d],E)}catch(Q){dt(c,c.return,Q)}}a&&b&64&&yS(m),jl(m,m.return);break;case 27:SS(m);case 26:case 5:Li(d,m,a),a&&c===null&&b&4&&_S(m),jl(m,m.return);break;case 12:Li(d,m,a);break;case 13:Li(d,m,a),a&&b&4&&CS(d,m);break;case 22:m.memoizedState===null&&Li(d,m,a),jl(m,m.return);break;case 30:break;default:Li(d,m,a)}s=s.sibling}}function Cm(r,s){var a=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==a&&(r!=null&&r.refCount++,a!=null&&wl(a))}function Rm(r,s){r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&wl(r))}function Tr(r,s,a,c){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)IS(r,s,a,c),s=s.sibling}function IS(r,s,a,c){var d=s.flags;switch(s.tag){case 0:case 11:case 15:Tr(r,s,a,c),d&2048&&Pl(9,s);break;case 1:Tr(r,s,a,c);break;case 3:Tr(r,s,a,c),d&2048&&(r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&wl(r)));break;case 12:if(d&2048){Tr(r,s,a,c),r=s.stateNode;try{var m=s.memoizedProps,b=m.id,E=m.onPostCommit;typeof E=="function"&&E(b,s.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(L){dt(s,s.return,L)}}else Tr(r,s,a,c);break;case 13:Tr(r,s,a,c);break;case 23:break;case 22:m=s.stateNode,b=s.alternate,s.memoizedState!==null?m._visibility&2?Tr(r,s,a,c):Ul(r,s):m._visibility&2?Tr(r,s,a,c):(m._visibility|=2,na(r,s,a,c,(s.subtreeFlags&10256)!==0)),d&2048&&Cm(b,s);break;case 24:Tr(r,s,a,c),d&2048&&Rm(s.alternate,s);break;default:Tr(r,s,a,c)}}function na(r,s,a,c,d){for(d=d&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var m=r,b=s,E=a,L=c,Q=b.flags;switch(b.tag){case 0:case 11:case 15:na(m,b,E,L,d),Pl(8,b);break;case 23:break;case 22:var re=b.stateNode;b.memoizedState!==null?re._visibility&2?na(m,b,E,L,d):Ul(m,b):(re._visibility|=2,na(m,b,E,L,d)),d&&Q&2048&&Cm(b.alternate,b);break;case 24:na(m,b,E,L,d),d&&Q&2048&&Rm(b.alternate,b);break;default:na(m,b,E,L,d)}s=s.sibling}}function Ul(r,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var a=r,c=s,d=c.flags;switch(c.tag){case 22:Ul(a,c),d&2048&&Cm(c.alternate,c);break;case 24:Ul(a,c),d&2048&&Rm(c.alternate,c);break;default:Ul(a,c)}s=s.sibling}}var $l=8192;function ra(r){if(r.subtreeFlags&$l)for(r=r.child;r!==null;)DS(r),r=r.sibling}function DS(r){switch(r.tag){case 26:ra(r),r.flags&$l&&r.memoizedState!==null&&dN(ir,r.memoizedState,r.memoizedProps);break;case 5:ra(r);break;case 3:case 4:var s=ir;ir=Dd(r.stateNode.containerInfo),ra(r),ir=s;break;case 22:r.memoizedState===null&&(s=r.alternate,s!==null&&s.memoizedState!==null?(s=$l,$l=16777216,ra(r),$l=s):ra(r));break;default:ra(r)}}function OS(r){var s=r.alternate;if(s!==null&&(r=s.child,r!==null)){s.child=null;do s=r.sibling,r.sibling=null,r=s;while(r!==null)}}function zl(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var a=0;a<s.length;a++){var c=s[a];Bt=c,MS(c,r)}OS(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)NS(r),r=r.sibling}function NS(r){switch(r.tag){case 0:case 11:case 15:zl(r),r.flags&2048&&Mi(9,r,r.return);break;case 3:zl(r);break;case 12:zl(r);break;case 22:var s=r.stateNode;r.memoizedState!==null&&s._visibility&2&&(r.return===null||r.return.tag!==13)?(s._visibility&=-3,vd(r)):zl(r);break;default:zl(r)}}function vd(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var a=0;a<s.length;a++){var c=s[a];Bt=c,MS(c,r)}OS(r)}for(r=r.child;r!==null;){switch(s=r,s.tag){case 0:case 11:case 15:Mi(8,s,s.return),vd(s);break;case 22:a=s.stateNode,a._visibility&2&&(a._visibility&=-3,vd(s));break;default:vd(s)}r=r.sibling}}function MS(r,s){for(;Bt!==null;){var a=Bt;switch(a.tag){case 0:case 11:case 15:Mi(8,a,s);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var c=a.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:wl(a.memoizedState.cache)}if(c=a.child,c!==null)c.return=a,Bt=c;else e:for(a=r;Bt!==null;){c=Bt;var d=c.sibling,m=c.return;if(xS(c),c===a){Bt=null;break e}if(d!==null){d.return=m,Bt=d;break e}Bt=m}}}var RO={getCacheForType:function(r){var s=nn(Pt),a=s.data.get(r);return a===void 0&&(a=r(),s.data.set(r,a)),a}},AO=typeof WeakMap=="function"?WeakMap:Map,tt=0,ft=null,Ge=null,Qe=0,nt=0,An=null,Pi=!1,ia=!1,Am=!1,ei=0,Ct=0,ji=0,Hs=0,Im=0,qn=0,sa=0,Bl=null,vn=null,Dm=!1,Om=0,_d=1/0,bd=null,Ui=null,Kt=0,$i=null,oa=null,aa=0,Nm=0,Mm=null,kS=null,Hl=0,km=null;function In(){if((tt&2)!==0&&Qe!==0)return Qe&-Qe;if(U.T!==null){var r=Wo;return r!==0?r:Bm()}return j()}function LS(){qn===0&&(qn=(Qe&536870912)===0||Je?Mo():536870912);var r=Fn.current;return r!==null&&(r.flags|=32),qn}function Dn(r,s,a){(r===ft&&(nt===2||nt===9)||r.cancelPendingCommit!==null)&&(la(r,0),zi(r,Qe,qn,!1)),Ts(r,a),((tt&2)===0||r!==ft)&&(r===ft&&((tt&2)===0&&(Hs|=a),Ct===4&&zi(r,Qe,qn,!1)),Cr(r))}function PS(r,s,a){if((tt&6)!==0)throw Error(i(327));var c=!a&&(s&124)===0&&(s&r.expiredLanes)===0||br(r,s),d=c?OO(r,s):jm(r,s,!0),m=c;do{if(d===0){ia&&!c&&zi(r,s,0,!1);break}else{if(a=r.current.alternate,m&&!IO(a)){d=jm(r,s,!1),m=!1;continue}if(d===2){if(m=s,r.errorRecoveryDisabledLanes&m)var b=0;else b=r.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){s=b;e:{var E=r;d=Bl;var L=E.current.memoizedState.isDehydrated;if(L&&(la(E,b).flags|=256),b=jm(E,b,!1),b!==2){if(Am&&!L){E.errorRecoveryDisabledLanes|=m,Hs|=m,d=4;break e}m=vn,vn=d,m!==null&&(vn===null?vn=m:vn.push.apply(vn,m))}d=b}if(m=!1,d!==2)continue}}if(d===1){la(r,0),zi(r,s,0,!0);break}e:{switch(c=r,m=d,m){case 0:case 1:throw Error(i(345));case 4:if((s&4194048)!==s)break;case 6:zi(c,s,qn,!Pi);break e;case 2:vn=null;break;case 3:case 5:break;default:throw Error(i(329))}if((s&62914560)===s&&(d=Om+300-Yt(),10<d)){if(zi(c,s,qn,!Pi),xs(c,0,!0)!==0)break e;c.timeoutHandle=d1(jS.bind(null,c,a,vn,bd,Dm,s,qn,Hs,sa,Pi,m,2,-0,0),d);break e}jS(c,a,vn,bd,Dm,s,qn,Hs,sa,Pi,m,0,-0,0)}}break}while(!0);Cr(r)}function jS(r,s,a,c,d,m,b,E,L,Q,re,oe,Z,J){if(r.timeoutHandle=-1,oe=s.subtreeFlags,(oe&8192||(oe&16785408)===16785408)&&(Ql={stylesheets:null,count:0,unsuspend:uN},DS(s),oe=fN(),oe!==null)){r.cancelPendingCommit=oe(qS.bind(null,r,s,m,a,c,d,b,E,L,re,1,Z,J)),zi(r,m,b,!Q);return}qS(r,s,m,a,c,d,b,E,L)}function IO(r){for(var s=r;;){var a=s.tag;if((a===0||a===11||a===15)&&s.flags&16384&&(a=s.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!xn(m(),d))return!1}catch{return!1}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function zi(r,s,a,c){s&=~Im,s&=~Hs,r.suspendedLanes|=s,r.pingedLanes&=~s,c&&(r.warmLanes|=s),c=r.expirationTimes;for(var d=s;0<d;){var m=31-Wt(d),b=1<<m;c[m]=-1,d&=~b}a!==0&&Cs(r,a,s)}function Sd(){return(tt&6)===0?(Fl(0),!1):!0}function Lm(){if(Ge!==null){if(nt===0)var r=Ge.return;else r=Ge,Gr=Ps=null,Zp(r),ea=null,Ml=0,r=Ge;for(;r!==null;)gS(r.alternate,r),r=r.return;Ge=null}}function la(r,s){var a=r.timeoutHandle;a!==-1&&(r.timeoutHandle=-1,YO(a)),a=r.cancelPendingCommit,a!==null&&(r.cancelPendingCommit=null,a()),Lm(),ft=r,Ge=a=Fr(r.current,null),Qe=s,nt=0,An=null,Pi=!1,ia=br(r,s),Am=!1,sa=qn=Im=Hs=ji=Ct=0,vn=Bl=null,Dm=!1,(s&8)!==0&&(s|=s&32);var c=r.entangledLanes;if(c!==0)for(r=r.entanglements,c&=s;0<c;){var d=31-Wt(c),m=1<<d;s|=r[d],c&=~m}return ei=s,Fu(),a}function US(r,s){He=null,U.H=ld,s===xl||s===Zu?(s=t0(),nt=3):s===Zb?(s=t0(),nt=4):nt=s===nS?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,An=s,Ge===null&&(Ct=1,hd(r,$n(s,r.current)))}function $S(){var r=U.H;return U.H=ld,r===null?ld:r}function zS(){var r=U.A;return U.A=RO,r}function Pm(){Ct=4,Pi||(Qe&4194048)!==Qe&&Fn.current!==null||(ia=!0),(ji&134217727)===0&&(Hs&134217727)===0||ft===null||zi(ft,Qe,qn,!1)}function jm(r,s,a){var c=tt;tt|=2;var d=$S(),m=zS();(ft!==r||Qe!==s)&&(bd=null,la(r,s)),s=!1;var b=Ct;e:do try{if(nt!==0&&Ge!==null){var E=Ge,L=An;switch(nt){case 8:Lm(),b=6;break e;case 3:case 2:case 9:case 6:Fn.current===null&&(s=!0);var Q=nt;if(nt=0,An=null,ca(r,E,L,Q),a&&ia){b=0;break e}break;default:Q=nt,nt=0,An=null,ca(r,E,L,Q)}}DO(),b=Ct;break}catch(re){US(r,re)}while(!0);return s&&r.shellSuspendCounter++,Gr=Ps=null,tt=c,U.H=d,U.A=m,Ge===null&&(ft=null,Qe=0,Fu()),b}function DO(){for(;Ge!==null;)BS(Ge)}function OO(r,s){var a=tt;tt|=2;var c=$S(),d=zS();ft!==r||Qe!==s?(bd=null,_d=Yt()+500,la(r,s)):ia=br(r,s);e:do try{if(nt!==0&&Ge!==null){s=Ge;var m=An;t:switch(nt){case 1:nt=0,An=null,ca(r,s,m,1);break;case 2:case 9:if(Jb(m)){nt=0,An=null,HS(s);break}s=function(){nt!==2&&nt!==9||ft!==r||(nt=7),Cr(r)},m.then(s,s);break e;case 3:nt=7;break e;case 4:nt=5;break e;case 7:Jb(m)?(nt=0,An=null,HS(s)):(nt=0,An=null,ca(r,s,m,7));break;case 5:var b=null;switch(Ge.tag){case 26:b=Ge.memoizedState;case 5:case 27:var E=Ge;if(!b||E1(b)){nt=0,An=null;var L=E.sibling;if(L!==null)Ge=L;else{var Q=E.return;Q!==null?(Ge=Q,wd(Q)):Ge=null}break t}}nt=0,An=null,ca(r,s,m,5);break;case 6:nt=0,An=null,ca(r,s,m,6);break;case 8:Lm(),Ct=6;break e;default:throw Error(i(462))}}NO();break}catch(re){US(r,re)}while(!0);return Gr=Ps=null,U.H=c,U.A=d,tt=a,Ge!==null?0:(ft=null,Qe=0,Fu(),Ct)}function NO(){for(;Ge!==null&&!Ln();)BS(Ge)}function BS(r){var s=pS(r.alternate,r,ei);r.memoizedProps=r.pendingProps,s===null?wd(r):Ge=s}function HS(r){var s=r,a=s.alternate;switch(s.tag){case 15:case 0:s=lS(a,s,s.pendingProps,s.type,void 0,Qe);break;case 11:s=lS(a,s,s.pendingProps,s.type.render,s.ref,Qe);break;case 5:Zp(s);default:gS(a,s),s=Ge=Fb(s,ei),s=pS(a,s,ei)}r.memoizedProps=r.pendingProps,s===null?wd(r):Ge=s}function ca(r,s,a,c){Gr=Ps=null,Zp(s),ea=null,Ml=0;var d=s.return;try{if(SO(r,d,s,a,Qe)){Ct=1,hd(r,$n(a,r.current)),Ge=null;return}}catch(m){if(d!==null)throw Ge=d,m;Ct=1,hd(r,$n(a,r.current)),Ge=null;return}s.flags&32768?(Je||c===1?r=!0:ia||(Qe&536870912)!==0?r=!1:(Pi=r=!0,(c===2||c===9||c===3||c===6)&&(c=Fn.current,c!==null&&c.tag===13&&(c.flags|=16384))),FS(s,r)):wd(s)}function wd(r){var s=r;do{if((s.flags&32768)!==0){FS(s,Pi);return}r=s.return;var a=EO(s.alternate,s,ei);if(a!==null){Ge=a;return}if(s=s.sibling,s!==null){Ge=s;return}Ge=s=r}while(s!==null);Ct===0&&(Ct=5)}function FS(r,s){do{var a=xO(r.alternate,r);if(a!==null){a.flags&=32767,Ge=a;return}if(a=r.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!s&&(r=r.sibling,r!==null)){Ge=r;return}Ge=r=a}while(r!==null);Ct=6,Ge=null}function qS(r,s,a,c,d,m,b,E,L){r.cancelPendingCommit=null;do Ed();while(Kt!==0);if((tt&6)!==0)throw Error(i(327));if(s!==null){if(s===r.current)throw Error(i(177));if(m=s.lanes|s.childLanes,m|=Rp,Ou(r,a,m,b,E,L),r===ft&&(Ge=ft=null,Qe=0),oa=s,$i=r,aa=a,Nm=m,Mm=d,kS=c,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,PO(No,function(){return QS(),null})):(r.callbackNode=null,r.callbackPriority=0),c=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||c){c=U.T,U.T=null,d=ee.p,ee.p=2,b=tt,tt|=4;try{TO(r,s,a)}finally{tt=b,ee.p=d,U.T=c}}Kt=1,VS(),GS(),YS()}}function VS(){if(Kt===1){Kt=0;var r=$i,s=oa,a=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||a){a=U.T,U.T=null;var c=ee.p;ee.p=2;var d=tt;tt|=4;try{RS(s,r);var m=Qm,b=Mb(r.containerInfo),E=m.focusedElem,L=m.selectionRange;if(b!==E&&E&&E.ownerDocument&&Nb(E.ownerDocument.documentElement,E)){if(L!==null&&wp(E)){var Q=L.start,re=L.end;if(re===void 0&&(re=Q),"selectionStart"in E)E.selectionStart=Q,E.selectionEnd=Math.min(re,E.value.length);else{var oe=E.ownerDocument||document,Z=oe&&oe.defaultView||window;if(Z.getSelection){var J=Z.getSelection(),Me=E.textContent.length,Re=Math.min(L.start,Me),at=L.end===void 0?Re:Math.min(L.end,Me);!J.extend&&Re>at&&(b=at,at=Re,Re=b);var q=Ob(E,Re),$=Ob(E,at);if(q&&$&&(J.rangeCount!==1||J.anchorNode!==q.node||J.anchorOffset!==q.offset||J.focusNode!==$.node||J.focusOffset!==$.offset)){var W=oe.createRange();W.setStart(q.node,q.offset),J.removeAllRanges(),Re>at?(J.addRange(W),J.extend($.node,$.offset)):(W.setEnd($.node,$.offset),J.addRange(W))}}}}for(oe=[],J=E;J=J.parentNode;)J.nodeType===1&&oe.push({element:J,left:J.scrollLeft,top:J.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<oe.length;E++){var se=oe[E];se.element.scrollLeft=se.left,se.element.scrollTop=se.top}}Ld=!!Wm,Qm=Wm=null}finally{tt=d,ee.p=c,U.T=a}}r.current=s,Kt=2}}function GS(){if(Kt===2){Kt=0;var r=$i,s=oa,a=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||a){a=U.T,U.T=null;var c=ee.p;ee.p=2;var d=tt;tt|=4;try{ES(r,s.alternate,s)}finally{tt=d,ee.p=c,U.T=a}}Kt=3}}function YS(){if(Kt===4||Kt===3){Kt=0,Lr();var r=$i,s=oa,a=aa,c=kS;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?Kt=5:(Kt=0,oa=$i=null,WS(r,r.pendingLanes));var d=r.pendingLanes;if(d===0&&(Ui=null),ll(a),s=s.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(hn,s,void 0,(s.current.flags&128)===128)}catch{}if(c!==null){s=U.T,d=ee.p,ee.p=2,U.T=null;try{for(var m=r.onRecoverableError,b=0;b<c.length;b++){var E=c[b];m(E.value,{componentStack:E.stack})}}finally{U.T=s,ee.p=d}}(aa&3)!==0&&Ed(),Cr(r),d=r.pendingLanes,(a&4194090)!==0&&(d&42)!==0?r===km?Hl++:(Hl=0,km=r):Hl=0,Fl(0)}}function WS(r,s){(r.pooledCacheLanes&=s)===0&&(s=r.pooledCache,s!=null&&(r.pooledCache=null,wl(s)))}function Ed(r){return VS(),GS(),YS(),QS()}function QS(){if(Kt!==5)return!1;var r=$i,s=Nm;Nm=0;var a=ll(aa),c=U.T,d=ee.p;try{ee.p=32>a?32:a,U.T=null,a=Mm,Mm=null;var m=$i,b=aa;if(Kt=0,oa=$i=null,aa=0,(tt&6)!==0)throw Error(i(331));var E=tt;if(tt|=4,NS(m.current),IS(m,m.current,b,a),tt=E,Fl(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(hn,m)}catch{}return!0}finally{ee.p=d,U.T=c,WS(r,s)}}function KS(r,s,a){s=$n(a,s),s=fm(r.stateNode,s,2),r=Ii(r,s,2),r!==null&&(Ts(r,2),Cr(r))}function dt(r,s,a){if(r.tag===3)KS(r,r,a);else for(;s!==null;){if(s.tag===3){KS(s,r,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Ui===null||!Ui.has(c))){r=$n(a,r),a=eS(2),c=Ii(s,a,2),c!==null&&(tS(a,c,s,r),Ts(c,2),Cr(c));break}}s=s.return}}function Um(r,s,a){var c=r.pingCache;if(c===null){c=r.pingCache=new AO;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(a)||(Am=!0,d.add(a),r=MO.bind(null,r,s,a),s.then(r,r))}function MO(r,s,a){var c=r.pingCache;c!==null&&c.delete(s),r.pingedLanes|=r.suspendedLanes&a,r.warmLanes&=~a,ft===r&&(Qe&a)===a&&(Ct===4||Ct===3&&(Qe&62914560)===Qe&&300>Yt()-Om?(tt&2)===0&&la(r,0):Im|=a,sa===Qe&&(sa=0)),Cr(r)}function XS(r,s){s===0&&(s=Du()),r=qo(r,s),r!==null&&(Ts(r,s),Cr(r))}function kO(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),XS(r,a)}function LO(r,s){var a=0;switch(r.tag){case 13:var c=r.stateNode,d=r.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=r.stateNode;break;case 22:c=r.stateNode._retryCache;break;default:throw Error(i(314))}c!==null&&c.delete(s),XS(r,a)}function PO(r,s){return kn(r,s)}var xd=null,ua=null,$m=!1,Td=!1,zm=!1,Fs=0;function Cr(r){r!==ua&&r.next===null&&(ua===null?xd=ua=r:ua=ua.next=r),Td=!0,$m||($m=!0,UO())}function Fl(r,s){if(!zm&&Td){zm=!0;do for(var a=!1,c=xd;c!==null;){if(r!==0){var d=c.pendingLanes;if(d===0)var m=0;else{var b=c.suspendedLanes,E=c.pingedLanes;m=(1<<31-Wt(42|r)+1)-1,m&=d&~(b&~E),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(a=!0,t1(c,m))}else m=Qe,m=xs(c,c===ft?m:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(m&3)===0||br(c,m)||(a=!0,t1(c,m));c=c.next}while(a);zm=!1}}function jO(){ZS()}function ZS(){Td=$m=!1;var r=0;Fs!==0&&(GO()&&(r=Fs),Fs=0);for(var s=Yt(),a=null,c=xd;c!==null;){var d=c.next,m=JS(c,s);m===0?(c.next=null,a===null?xd=d:a.next=d,d===null&&(ua=a)):(a=c,(r!==0||(m&3)!==0)&&(Td=!0)),c=d}Fl(r)}function JS(r,s){for(var a=r.suspendedLanes,c=r.pingedLanes,d=r.expirationTimes,m=r.pendingLanes&-62914561;0<m;){var b=31-Wt(m),E=1<<b,L=d[b];L===-1?((E&a)===0||(E&c)!==0)&&(d[b]=Iu(E,s)):L<=s&&(r.expiredLanes|=E),m&=~E}if(s=ft,a=Qe,a=xs(r,r===s?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),c=r.callbackNode,a===0||r===s&&(nt===2||nt===9)||r.cancelPendingCommit!==null)return c!==null&&c!==null&&Et(c),r.callbackNode=null,r.callbackPriority=0;if((a&3)===0||br(r,a)){if(s=a&-a,s===r.callbackPriority)return s;switch(c!==null&&Et(c),ll(a)){case 2:case 8:a=Oo;break;case 32:a=No;break;case 268435456:a=wi;break;default:a=No}return c=e1.bind(null,r),a=kn(a,c),r.callbackPriority=s,r.callbackNode=a,s}return c!==null&&c!==null&&Et(c),r.callbackPriority=2,r.callbackNode=null,2}function e1(r,s){if(Kt!==0&&Kt!==5)return r.callbackNode=null,r.callbackPriority=0,null;var a=r.callbackNode;if(Ed()&&r.callbackNode!==a)return null;var c=Qe;return c=xs(r,r===ft?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),c===0?null:(PS(r,c,s),JS(r,Yt()),r.callbackNode!=null&&r.callbackNode===a?e1.bind(null,r):null)}function t1(r,s){if(Ed())return null;PS(r,s,!0)}function UO(){WO(function(){(tt&6)!==0?kn(Ss,jO):ZS()})}function Bm(){return Fs===0&&(Fs=Mo()),Fs}function n1(r){return r==null||typeof r=="symbol"||typeof r=="boolean"?null:typeof r=="function"?r:Pu(""+r)}function r1(r,s){var a=s.ownerDocument.createElement("input");return a.name=s.name,a.value=s.value,r.id&&a.setAttribute("form",r.id),s.parentNode.insertBefore(a,s),r=new FormData(r),a.parentNode.removeChild(a),r}function $O(r,s,a,c,d){if(s==="submit"&&a&&a.stateNode===d){var m=n1((d[fe]||null).action),b=c.submitter;b&&(s=(s=b[fe]||null)?n1(s.formAction):b.getAttribute("formAction"),s!==null&&(m=s,b=null));var E=new zu("action","action",null,c,d);r.push({event:E,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(Fs!==0){var L=b?r1(d,b):new FormData(d);am(a,{pending:!0,data:L,method:d.method,action:m},null,L)}}else typeof m=="function"&&(E.preventDefault(),L=b?r1(d,b):new FormData(d),am(a,{pending:!0,data:L,method:d.method,action:m},m,L))},currentTarget:d}]})}}for(var Hm=0;Hm<Cp.length;Hm++){var Fm=Cp[Hm],zO=Fm.toLowerCase(),BO=Fm[0].toUpperCase()+Fm.slice(1);rr(zO,"on"+BO)}rr(Pb,"onAnimationEnd"),rr(jb,"onAnimationIteration"),rr(Ub,"onAnimationStart"),rr("dblclick","onDoubleClick"),rr("focusin","onFocus"),rr("focusout","onBlur"),rr(iO,"onTransitionRun"),rr(sO,"onTransitionStart"),rr(oO,"onTransitionCancel"),rr($b,"onTransitionEnd"),ln("onMouseEnter",["mouseout","mouseover"]),ln("onMouseLeave",["mouseout","mouseover"]),ln("onPointerEnter",["pointerout","pointerover"]),ln("onPointerLeave",["pointerout","pointerover"]),En("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),En("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),En("onBeforeInput",["compositionend","keypress","textInput","paste"]),En("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),En("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),En("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ql="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),HO=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ql));function i1(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var c=r[a],d=c.event;c=c.listeners;e:{var m=void 0;if(s)for(var b=c.length-1;0<=b;b--){var E=c[b],L=E.instance,Q=E.currentTarget;if(E=E.listener,L!==m&&d.isPropagationStopped())break e;m=E,d.currentTarget=Q;try{m(d)}catch(re){fd(re)}d.currentTarget=null,m=L}else for(b=0;b<c.length;b++){if(E=c[b],L=E.instance,Q=E.currentTarget,E=E.listener,L!==m&&d.isPropagationStopped())break e;m=E,d.currentTarget=Q;try{m(d)}catch(re){fd(re)}d.currentTarget=null,m=L}}}}function Ye(r,s){var a=s[we];a===void 0&&(a=s[we]=new Set);var c=r+"__bubble";a.has(c)||(s1(s,r,2,!1),a.add(c))}function qm(r,s,a){var c=0;s&&(c|=4),s1(a,r,c,s)}var Cd="_reactListening"+Math.random().toString(36).slice(2);function Vm(r){if(!r[Cd]){r[Cd]=!0,it.forEach(function(a){a!=="selectionchange"&&(HO.has(a)||qm(a,!1,r),qm(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[Cd]||(s[Cd]=!0,qm("selectionchange",!1,s))}}function s1(r,s,a,c){switch(I1(s)){case 2:var d=mN;break;case 8:d=gN;break;default:d=sg}a=d.bind(null,s,a,r),d=void 0,!hp||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?r.addEventListener(s,a,{capture:!0,passive:d}):r.addEventListener(s,a,!0):d!==void 0?r.addEventListener(s,a,{passive:d}):r.addEventListener(s,a,!1)}function Gm(r,s,a,c,d){var m=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var b=c.tag;if(b===3||b===4){var E=c.stateNode.containerInfo;if(E===d)break;if(b===4)for(b=c.return;b!==null;){var L=b.tag;if((L===3||L===4)&&b.stateNode.containerInfo===d)return;b=b.return}for(;E!==null;){if(b=ze(E),b===null)return;if(L=b.tag,L===5||L===6||L===26||L===27){c=m=b;continue e}E=E.parentNode}}c=c.return}fb(function(){var Q=m,re=dp(a),oe=[];e:{var Z=zb.get(r);if(Z!==void 0){var J=zu,Me=r;switch(r){case"keypress":if(Uu(a)===0)break e;case"keydown":case"keyup":J=PD;break;case"focusin":Me="focus",J=yp;break;case"focusout":Me="blur",J=yp;break;case"beforeblur":case"afterblur":J=yp;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":J=mb;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":J=xD;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":J=$D;break;case Pb:case jb:case Ub:J=RD;break;case $b:J=BD;break;case"scroll":case"scrollend":J=wD;break;case"wheel":J=FD;break;case"copy":case"cut":case"paste":J=ID;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":J=yb;break;case"toggle":case"beforetoggle":J=VD}var Re=(s&4)!==0,at=!Re&&(r==="scroll"||r==="scrollend"),q=Re?Z!==null?Z+"Capture":null:Z;Re=[];for(var $=Q,W;$!==null;){var se=$;if(W=se.stateNode,se=se.tag,se!==5&&se!==26&&se!==27||W===null||q===null||(se=cl($,q),se!=null&&Re.push(Vl($,se,W))),at)break;$=$.return}0<Re.length&&(Z=new J(Z,Me,null,a,re),oe.push({event:Z,listeners:Re}))}}if((s&7)===0){e:{if(Z=r==="mouseover"||r==="pointerover",J=r==="mouseout"||r==="pointerout",Z&&a!==up&&(Me=a.relatedTarget||a.fromElement)&&(ze(Me)||Me[ye]))break e;if((J||Z)&&(Z=re.window===re?re:(Z=re.ownerDocument)?Z.defaultView||Z.parentWindow:window,J?(Me=a.relatedTarget||a.toElement,J=Q,Me=Me?ze(Me):null,Me!==null&&(at=l(Me),Re=Me.tag,Me!==at||Re!==5&&Re!==27&&Re!==6)&&(Me=null)):(J=null,Me=Q),J!==Me)){if(Re=mb,se="onMouseLeave",q="onMouseEnter",$="mouse",(r==="pointerout"||r==="pointerover")&&(Re=yb,se="onPointerLeave",q="onPointerEnter",$="pointer"),at=J==null?Z:yt(J),W=Me==null?Z:yt(Me),Z=new Re(se,$+"leave",J,a,re),Z.target=at,Z.relatedTarget=W,se=null,ze(re)===Q&&(Re=new Re(q,$+"enter",Me,a,re),Re.target=W,Re.relatedTarget=at,se=Re),at=se,J&&Me)t:{for(Re=J,q=Me,$=0,W=Re;W;W=da(W))$++;for(W=0,se=q;se;se=da(se))W++;for(;0<$-W;)Re=da(Re),$--;for(;0<W-$;)q=da(q),W--;for(;$--;){if(Re===q||q!==null&&Re===q.alternate)break t;Re=da(Re),q=da(q)}Re=null}else Re=null;J!==null&&o1(oe,Z,J,Re,!1),Me!==null&&at!==null&&o1(oe,at,Me,Re,!0)}}e:{if(Z=Q?yt(Q):window,J=Z.nodeName&&Z.nodeName.toLowerCase(),J==="select"||J==="input"&&Z.type==="file")var ge=Tb;else if(Eb(Z))if(Cb)ge=tO;else{ge=JD;var Fe=ZD}else J=Z.nodeName,!J||J.toLowerCase()!=="input"||Z.type!=="checkbox"&&Z.type!=="radio"?Q&&cp(Q.elementType)&&(ge=Tb):ge=eO;if(ge&&(ge=ge(r,Q))){xb(oe,ge,a,re);break e}Fe&&Fe(r,Z,Q),r==="focusout"&&Q&&Z.type==="number"&&Q.memoizedProps.value!=null&&lp(Z,"number",Z.value)}switch(Fe=Q?yt(Q):window,r){case"focusin":(Eb(Fe)||Fe.contentEditable==="true")&&(Bo=Fe,Ep=Q,yl=null);break;case"focusout":yl=Ep=Bo=null;break;case"mousedown":xp=!0;break;case"contextmenu":case"mouseup":case"dragend":xp=!1,kb(oe,a,re);break;case"selectionchange":if(rO)break;case"keydown":case"keyup":kb(oe,a,re)}var Ee;if(_p)e:{switch(r){case"compositionstart":var Ie="onCompositionStart";break e;case"compositionend":Ie="onCompositionEnd";break e;case"compositionupdate":Ie="onCompositionUpdate";break e}Ie=void 0}else zo?Sb(r,a)&&(Ie="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(Ie="onCompositionStart");Ie&&(vb&&a.locale!=="ko"&&(zo||Ie!=="onCompositionStart"?Ie==="onCompositionEnd"&&zo&&(Ee=hb()):(Ti=re,pp="value"in Ti?Ti.value:Ti.textContent,zo=!0)),Fe=Rd(Q,Ie),0<Fe.length&&(Ie=new gb(Ie,r,null,a,re),oe.push({event:Ie,listeners:Fe}),Ee?Ie.data=Ee:(Ee=wb(a),Ee!==null&&(Ie.data=Ee)))),(Ee=YD?WD(r,a):QD(r,a))&&(Ie=Rd(Q,"onBeforeInput"),0<Ie.length&&(Fe=new gb("onBeforeInput","beforeinput",null,a,re),oe.push({event:Fe,listeners:Ie}),Fe.data=Ee)),$O(oe,r,Q,a,re)}i1(oe,s)})}function Vl(r,s,a){return{instance:r,listener:s,currentTarget:a}}function Rd(r,s){for(var a=s+"Capture",c=[];r!==null;){var d=r,m=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||m===null||(d=cl(r,a),d!=null&&c.unshift(Vl(r,d,m)),d=cl(r,s),d!=null&&c.push(Vl(r,d,m))),r.tag===3)return c;r=r.return}return[]}function da(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r||null}function o1(r,s,a,c,d){for(var m=s._reactName,b=[];a!==null&&a!==c;){var E=a,L=E.alternate,Q=E.stateNode;if(E=E.tag,L!==null&&L===c)break;E!==5&&E!==26&&E!==27||Q===null||(L=Q,d?(Q=cl(a,m),Q!=null&&b.unshift(Vl(a,Q,L))):d||(Q=cl(a,m),Q!=null&&b.push(Vl(a,Q,L)))),a=a.return}b.length!==0&&r.push({event:s,listeners:b})}var FO=/\r\n?/g,qO=/\u0000|\uFFFD/g;function a1(r){return(typeof r=="string"?r:""+r).replace(FO,`
`).replace(qO,"")}function l1(r,s){return s=a1(s),a1(r)===s}function Ad(){}function ot(r,s,a,c,d,m){switch(a){case"children":typeof c=="string"?s==="body"||s==="textarea"&&c===""||jo(r,c):(typeof c=="number"||typeof c=="bigint")&&s!=="body"&&jo(r,""+c);break;case"className":zr(r,"class",c);break;case"tabIndex":zr(r,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":zr(r,a,c);break;case"style":ub(r,c,m);break;case"data":if(s!=="object"){zr(r,"data",c);break}case"src":case"href":if(c===""&&(s!=="a"||a!=="href")){r.removeAttribute(a);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){r.removeAttribute(a);break}c=Pu(""+c),r.setAttribute(a,c);break;case"action":case"formAction":if(typeof c=="function"){r.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(a==="formAction"?(s!=="input"&&ot(r,s,"name",d.name,d,null),ot(r,s,"formEncType",d.formEncType,d,null),ot(r,s,"formMethod",d.formMethod,d,null),ot(r,s,"formTarget",d.formTarget,d,null)):(ot(r,s,"encType",d.encType,d,null),ot(r,s,"method",d.method,d,null),ot(r,s,"target",d.target,d,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){r.removeAttribute(a);break}c=Pu(""+c),r.setAttribute(a,c);break;case"onClick":c!=null&&(r.onclick=Ad);break;case"onScroll":c!=null&&Ye("scroll",r);break;case"onScrollEnd":c!=null&&Ye("scrollend",r);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(a=c.__html,a!=null){if(d.children!=null)throw Error(i(60));r.innerHTML=a}}break;case"multiple":r.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":r.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){r.removeAttribute("xlink:href");break}a=Pu(""+c),r.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(a,""+c):r.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(a,""):r.removeAttribute(a);break;case"capture":case"download":c===!0?r.setAttribute(a,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(a,c):r.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?r.setAttribute(a,c):r.removeAttribute(a);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?r.removeAttribute(a):r.setAttribute(a,c);break;case"popover":Ye("beforetoggle",r),Ye("toggle",r),$r(r,"popover",c);break;case"xlinkActuate":Pe(r,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":Pe(r,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":Pe(r,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":Pe(r,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":Pe(r,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":Pe(r,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":Pe(r,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":Pe(r,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":Pe(r,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":$r(r,"is",c);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=bD.get(a)||a,$r(r,a,c))}}function Ym(r,s,a,c,d,m){switch(a){case"style":ub(r,c,m);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(a=c.__html,a!=null){if(d.children!=null)throw Error(i(60));r.innerHTML=a}}break;case"children":typeof c=="string"?jo(r,c):(typeof c=="number"||typeof c=="bigint")&&jo(r,""+c);break;case"onScroll":c!=null&&Ye("scroll",r);break;case"onScrollEnd":c!=null&&Ye("scrollend",r);break;case"onClick":c!=null&&(r.onclick=Ad);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Sr.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(d=a.endsWith("Capture"),s=a.slice(2,d?a.length-7:void 0),m=r[fe]||null,m=m!=null?m[a]:null,typeof m=="function"&&r.removeEventListener(s,m,d),typeof c=="function")){typeof m!="function"&&m!==null&&(a in r?r[a]=null:r.hasAttribute(a)&&r.removeAttribute(a)),r.addEventListener(s,c,d);break e}a in r?r[a]=c:c===!0?r.setAttribute(a,""):$r(r,a,c)}}}function Xt(r,s,a){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ye("error",r),Ye("load",r);var c=!1,d=!1,m;for(m in a)if(a.hasOwnProperty(m)){var b=a[m];if(b!=null)switch(m){case"src":c=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:ot(r,s,m,b,a,null)}}d&&ot(r,s,"srcSet",a.srcSet,a,null),c&&ot(r,s,"src",a.src,a,null);return;case"input":Ye("invalid",r);var E=m=b=d=null,L=null,Q=null;for(c in a)if(a.hasOwnProperty(c)){var re=a[c];if(re!=null)switch(c){case"name":d=re;break;case"type":b=re;break;case"checked":L=re;break;case"defaultChecked":Q=re;break;case"value":m=re;break;case"defaultValue":E=re;break;case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(i(137,s));break;default:ot(r,s,c,re,a,null)}}ob(r,m,E,L,Q,b,d,!1),ku(r);return;case"select":Ye("invalid",r),c=b=m=null;for(d in a)if(a.hasOwnProperty(d)&&(E=a[d],E!=null))switch(d){case"value":m=E;break;case"defaultValue":b=E;break;case"multiple":c=E;default:ot(r,s,d,E,a,null)}s=m,a=b,r.multiple=!!c,s!=null?Po(r,!!c,s,!1):a!=null&&Po(r,!!c,a,!0);return;case"textarea":Ye("invalid",r),m=d=c=null;for(b in a)if(a.hasOwnProperty(b)&&(E=a[b],E!=null))switch(b){case"value":c=E;break;case"defaultValue":d=E;break;case"children":m=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(i(91));break;default:ot(r,s,b,E,a,null)}lb(r,c,d,m),ku(r);return;case"option":for(L in a)if(a.hasOwnProperty(L)&&(c=a[L],c!=null))switch(L){case"selected":r.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:ot(r,s,L,c,a,null)}return;case"dialog":Ye("beforetoggle",r),Ye("toggle",r),Ye("cancel",r),Ye("close",r);break;case"iframe":case"object":Ye("load",r);break;case"video":case"audio":for(c=0;c<ql.length;c++)Ye(ql[c],r);break;case"image":Ye("error",r),Ye("load",r);break;case"details":Ye("toggle",r);break;case"embed":case"source":case"link":Ye("error",r),Ye("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(c=a[Q],c!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:ot(r,s,Q,c,a,null)}return;default:if(cp(s)){for(re in a)a.hasOwnProperty(re)&&(c=a[re],c!==void 0&&Ym(r,s,re,c,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(c=a[E],c!=null&&ot(r,s,E,c,a,null))}function VO(r,s,a,c){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,m=null,b=null,E=null,L=null,Q=null,re=null;for(J in a){var oe=a[J];if(a.hasOwnProperty(J)&&oe!=null)switch(J){case"checked":break;case"value":break;case"defaultValue":L=oe;default:c.hasOwnProperty(J)||ot(r,s,J,null,c,oe)}}for(var Z in c){var J=c[Z];if(oe=a[Z],c.hasOwnProperty(Z)&&(J!=null||oe!=null))switch(Z){case"type":m=J;break;case"name":d=J;break;case"checked":Q=J;break;case"defaultChecked":re=J;break;case"value":b=J;break;case"defaultValue":E=J;break;case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(i(137,s));break;default:J!==oe&&ot(r,s,Z,J,c,oe)}}ap(r,b,E,L,Q,re,m,d);return;case"select":J=b=E=Z=null;for(m in a)if(L=a[m],a.hasOwnProperty(m)&&L!=null)switch(m){case"value":break;case"multiple":J=L;default:c.hasOwnProperty(m)||ot(r,s,m,null,c,L)}for(d in c)if(m=c[d],L=a[d],c.hasOwnProperty(d)&&(m!=null||L!=null))switch(d){case"value":Z=m;break;case"defaultValue":E=m;break;case"multiple":b=m;default:m!==L&&ot(r,s,d,m,c,L)}s=E,a=b,c=J,Z!=null?Po(r,!!a,Z,!1):!!c!=!!a&&(s!=null?Po(r,!!a,s,!0):Po(r,!!a,a?[]:"",!1));return;case"textarea":J=Z=null;for(E in a)if(d=a[E],a.hasOwnProperty(E)&&d!=null&&!c.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:ot(r,s,E,null,c,d)}for(b in c)if(d=c[b],m=a[b],c.hasOwnProperty(b)&&(d!=null||m!=null))switch(b){case"value":Z=d;break;case"defaultValue":J=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(i(91));break;default:d!==m&&ot(r,s,b,d,c,m)}ab(r,Z,J);return;case"option":for(var Me in a)if(Z=a[Me],a.hasOwnProperty(Me)&&Z!=null&&!c.hasOwnProperty(Me))switch(Me){case"selected":r.selected=!1;break;default:ot(r,s,Me,null,c,Z)}for(L in c)if(Z=c[L],J=a[L],c.hasOwnProperty(L)&&Z!==J&&(Z!=null||J!=null))switch(L){case"selected":r.selected=Z&&typeof Z!="function"&&typeof Z!="symbol";break;default:ot(r,s,L,Z,c,J)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Re in a)Z=a[Re],a.hasOwnProperty(Re)&&Z!=null&&!c.hasOwnProperty(Re)&&ot(r,s,Re,null,c,Z);for(Q in c)if(Z=c[Q],J=a[Q],c.hasOwnProperty(Q)&&Z!==J&&(Z!=null||J!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(i(137,s));break;default:ot(r,s,Q,Z,c,J)}return;default:if(cp(s)){for(var at in a)Z=a[at],a.hasOwnProperty(at)&&Z!==void 0&&!c.hasOwnProperty(at)&&Ym(r,s,at,void 0,c,Z);for(re in c)Z=c[re],J=a[re],!c.hasOwnProperty(re)||Z===J||Z===void 0&&J===void 0||Ym(r,s,re,Z,c,J);return}}for(var q in a)Z=a[q],a.hasOwnProperty(q)&&Z!=null&&!c.hasOwnProperty(q)&&ot(r,s,q,null,c,Z);for(oe in c)Z=c[oe],J=a[oe],!c.hasOwnProperty(oe)||Z===J||Z==null&&J==null||ot(r,s,oe,Z,c,J)}var Wm=null,Qm=null;function Id(r){return r.nodeType===9?r:r.ownerDocument}function c1(r){switch(r){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function u1(r,s){if(r===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return r===1&&s==="foreignObject"?0:r}function Km(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Xm=null;function GO(){var r=window.event;return r&&r.type==="popstate"?r===Xm?!1:(Xm=r,!0):(Xm=null,!1)}var d1=typeof setTimeout=="function"?setTimeout:void 0,YO=typeof clearTimeout=="function"?clearTimeout:void 0,f1=typeof Promise=="function"?Promise:void 0,WO=typeof queueMicrotask=="function"?queueMicrotask:typeof f1<"u"?function(r){return f1.resolve(null).then(r).catch(QO)}:d1;function QO(r){setTimeout(function(){throw r})}function Bi(r){return r==="head"}function h1(r,s){var a=s,c=0,d=0;do{var m=a.nextSibling;if(r.removeChild(a),m&&m.nodeType===8)if(a=m.data,a==="/$"){if(0<c&&8>c){a=c;var b=r.ownerDocument;if(a&1&&Gl(b.documentElement),a&2&&Gl(b.body),a&4)for(a=b.head,Gl(a),b=a.firstChild;b;){var E=b.nextSibling,L=b.nodeName;b[_e]||L==="SCRIPT"||L==="STYLE"||L==="LINK"&&b.rel.toLowerCase()==="stylesheet"||a.removeChild(b),b=E}}if(d===0){r.removeChild(m),ec(s);return}d--}else a==="$"||a==="$?"||a==="$!"?d++:c=a.charCodeAt(0)-48;else c=0;a=m}while(a);ec(s)}function Zm(r){var s=r.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var a=s;switch(s=s.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Zm(a),Se(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}r.removeChild(a)}}function KO(r,s,a,c){for(;r.nodeType===1;){var d=a;if(r.nodeName.toLowerCase()!==s.toLowerCase()){if(!c&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(c){if(!r[_e])switch(s){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(m=r.getAttribute("rel"),m==="stylesheet"&&r.hasAttribute("data-precedence"))break;if(m!==d.rel||r.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||r.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||r.getAttribute("title")!==(d.title==null?null:d.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(m=r.getAttribute("src"),(m!==(d.src==null?null:d.src)||r.getAttribute("type")!==(d.type==null?null:d.type)||r.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&m&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}}else if(s==="input"&&r.type==="hidden"){var m=d.name==null?null:""+d.name;if(d.type==="hidden"&&r.getAttribute("name")===m)return r}else return r;if(r=sr(r.nextSibling),r===null)break}return null}function XO(r,s,a){if(s==="")return null;for(;r.nodeType!==3;)if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!a||(r=sr(r.nextSibling),r===null))return null;return r}function Jm(r){return r.data==="$!"||r.data==="$?"&&r.ownerDocument.readyState==="complete"}function ZO(r,s){var a=r.ownerDocument;if(r.data!=="$?"||a.readyState==="complete")s();else{var c=function(){s(),a.removeEventListener("DOMContentLoaded",c)};a.addEventListener("DOMContentLoaded",c),r._reactRetry=c}}function sr(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return r}var eg=null;function p1(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}function m1(r,s,a){switch(s=Id(a),r){case"html":if(r=s.documentElement,!r)throw Error(i(452));return r;case"head":if(r=s.head,!r)throw Error(i(453));return r;case"body":if(r=s.body,!r)throw Error(i(454));return r;default:throw Error(i(451))}}function Gl(r){for(var s=r.attributes;s.length;)r.removeAttributeNode(s[0]);Se(r)}var Vn=new Map,g1=new Set;function Dd(r){return typeof r.getRootNode=="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}var ti=ee.d;ee.d={f:JO,r:eN,D:tN,C:nN,L:rN,m:iN,X:oN,S:sN,M:aN};function JO(){var r=ti.f(),s=Sd();return r||s}function eN(r){var s=Ze(r);s!==null&&s.tag===5&&s.type==="form"?P0(s):ti.r(r)}var fa=typeof document>"u"?null:document;function y1(r,s,a){var c=fa;if(c&&typeof s=="string"&&s){var d=Un(s);d='link[rel="'+r+'"][href="'+d+'"]',typeof a=="string"&&(d+='[crossorigin="'+a+'"]'),g1.has(d)||(g1.add(d),r={rel:r,crossOrigin:a,href:s},c.querySelector(d)===null&&(s=c.createElement("link"),Xt(s,"link",r),Le(s),c.head.appendChild(s)))}}function tN(r){ti.D(r),y1("dns-prefetch",r,null)}function nN(r,s){ti.C(r,s),y1("preconnect",r,s)}function rN(r,s,a){ti.L(r,s,a);var c=fa;if(c&&r&&s){var d='link[rel="preload"][as="'+Un(s)+'"]';s==="image"&&a&&a.imageSrcSet?(d+='[imagesrcset="'+Un(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(d+='[imagesizes="'+Un(a.imageSizes)+'"]')):d+='[href="'+Un(r)+'"]';var m=d;switch(s){case"style":m=ha(r);break;case"script":m=pa(r)}Vn.has(m)||(r=g({rel:"preload",href:s==="image"&&a&&a.imageSrcSet?void 0:r,as:s},a),Vn.set(m,r),c.querySelector(d)!==null||s==="style"&&c.querySelector(Yl(m))||s==="script"&&c.querySelector(Wl(m))||(s=c.createElement("link"),Xt(s,"link",r),Le(s),c.head.appendChild(s)))}}function iN(r,s){ti.m(r,s);var a=fa;if(a&&r){var c=s&&typeof s.as=="string"?s.as:"script",d='link[rel="modulepreload"][as="'+Un(c)+'"][href="'+Un(r)+'"]',m=d;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=pa(r)}if(!Vn.has(m)&&(r=g({rel:"modulepreload",href:r},s),Vn.set(m,r),a.querySelector(d)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Wl(m)))return}c=a.createElement("link"),Xt(c,"link",r),Le(c),a.head.appendChild(c)}}}function sN(r,s,a){ti.S(r,s,a);var c=fa;if(c&&r){var d=xt(c).hoistableStyles,m=ha(r);s=s||"default";var b=d.get(m);if(!b){var E={loading:0,preload:null};if(b=c.querySelector(Yl(m)))E.loading=5;else{r=g({rel:"stylesheet",href:r,"data-precedence":s},a),(a=Vn.get(m))&&tg(r,a);var L=b=c.createElement("link");Le(L),Xt(L,"link",r),L._p=new Promise(function(Q,re){L.onload=Q,L.onerror=re}),L.addEventListener("load",function(){E.loading|=1}),L.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Od(b,s,c)}b={type:"stylesheet",instance:b,count:1,state:E},d.set(m,b)}}}function oN(r,s){ti.X(r,s);var a=fa;if(a&&r){var c=xt(a).hoistableScripts,d=pa(r),m=c.get(d);m||(m=a.querySelector(Wl(d)),m||(r=g({src:r,async:!0},s),(s=Vn.get(d))&&ng(r,s),m=a.createElement("script"),Le(m),Xt(m,"link",r),a.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(d,m))}}function aN(r,s){ti.M(r,s);var a=fa;if(a&&r){var c=xt(a).hoistableScripts,d=pa(r),m=c.get(d);m||(m=a.querySelector(Wl(d)),m||(r=g({src:r,async:!0,type:"module"},s),(s=Vn.get(d))&&ng(r,s),m=a.createElement("script"),Le(m),Xt(m,"link",r),a.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(d,m))}}function v1(r,s,a,c){var d=(d=pe.current)?Dd(d):null;if(!d)throw Error(i(446));switch(r){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(s=ha(a.href),a=xt(d).hoistableStyles,c=a.get(s),c||(c={type:"style",instance:null,count:0,state:null},a.set(s,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){r=ha(a.href);var m=xt(d).hoistableStyles,b=m.get(r);if(b||(d=d.ownerDocument||d,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(r,b),(m=d.querySelector(Yl(r)))&&!m._p&&(b.instance=m,b.state.loading=5),Vn.has(r)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Vn.set(r,a),m||lN(d,r,a,b.state))),s&&c===null)throw Error(i(528,""));return b}if(s&&c!==null)throw Error(i(529,""));return null;case"script":return s=a.async,a=a.src,typeof a=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=pa(a),a=xt(d).hoistableScripts,c=a.get(s),c||(c={type:"script",instance:null,count:0,state:null},a.set(s,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,r))}}function ha(r){return'href="'+Un(r)+'"'}function Yl(r){return'link[rel="stylesheet"]['+r+"]"}function _1(r){return g({},r,{"data-precedence":r.precedence,precedence:null})}function lN(r,s,a,c){r.querySelector('link[rel="preload"][as="style"]['+s+"]")?c.loading=1:(s=r.createElement("link"),c.preload=s,s.addEventListener("load",function(){return c.loading|=1}),s.addEventListener("error",function(){return c.loading|=2}),Xt(s,"link",a),Le(s),r.head.appendChild(s))}function pa(r){return'[src="'+Un(r)+'"]'}function Wl(r){return"script[async]"+r}function b1(r,s,a){if(s.count++,s.instance===null)switch(s.type){case"style":var c=r.querySelector('style[data-href~="'+Un(a.href)+'"]');if(c)return s.instance=c,Le(c),c;var d=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return c=(r.ownerDocument||r).createElement("style"),Le(c),Xt(c,"style",d),Od(c,a.precedence,r),s.instance=c;case"stylesheet":d=ha(a.href);var m=r.querySelector(Yl(d));if(m)return s.state.loading|=4,s.instance=m,Le(m),m;c=_1(a),(d=Vn.get(d))&&tg(c,d),m=(r.ownerDocument||r).createElement("link"),Le(m);var b=m;return b._p=new Promise(function(E,L){b.onload=E,b.onerror=L}),Xt(m,"link",c),s.state.loading|=4,Od(m,a.precedence,r),s.instance=m;case"script":return m=pa(a.src),(d=r.querySelector(Wl(m)))?(s.instance=d,Le(d),d):(c=a,(d=Vn.get(m))&&(c=g({},a),ng(c,d)),r=r.ownerDocument||r,d=r.createElement("script"),Le(d),Xt(d,"link",c),r.head.appendChild(d),s.instance=d);case"void":return null;default:throw Error(i(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(c=s.instance,s.state.loading|=4,Od(c,a.precedence,r));return s.instance}function Od(r,s,a){for(var c=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=c.length?c[c.length-1]:null,m=d,b=0;b<c.length;b++){var E=c[b];if(E.dataset.precedence===s)m=E;else if(m!==d)break}m?m.parentNode.insertBefore(r,m.nextSibling):(s=a.nodeType===9?a.head:a,s.insertBefore(r,s.firstChild))}function tg(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.title==null&&(r.title=s.title)}function ng(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.integrity==null&&(r.integrity=s.integrity)}var Nd=null;function S1(r,s,a){if(Nd===null){var c=new Map,d=Nd=new Map;d.set(a,c)}else d=Nd,c=d.get(a),c||(c=new Map,d.set(a,c));if(c.has(r))return c;for(c.set(r,null),a=a.getElementsByTagName(r),d=0;d<a.length;d++){var m=a[d];if(!(m[_e]||m[ce]||r==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var b=m.getAttribute(s)||"";b=r+b;var E=c.get(b);E?E.push(m):c.set(b,[m])}}return c}function w1(r,s,a){r=r.ownerDocument||r,r.head.insertBefore(a,s==="title"?r.querySelector("head > title"):null)}function cN(r,s,a){if(a===1||s.itemProp!=null)return!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return r=s.disabled,typeof s.precedence=="string"&&r==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function E1(r){return!(r.type==="stylesheet"&&(r.state.loading&3)===0)}var Ql=null;function uN(){}function dN(r,s,a){if(Ql===null)throw Error(i(475));var c=Ql;if(s.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var d=ha(a.href),m=r.querySelector(Yl(d));if(m){r=m._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(c.count++,c=Md.bind(c),r.then(c,c)),s.state.loading|=4,s.instance=m,Le(m);return}m=r.ownerDocument||r,a=_1(a),(d=Vn.get(d))&&tg(a,d),m=m.createElement("link"),Le(m);var b=m;b._p=new Promise(function(E,L){b.onload=E,b.onerror=L}),Xt(m,"link",a),s.instance=m}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(s,r),(r=s.state.preload)&&(s.state.loading&3)===0&&(c.count++,s=Md.bind(c),r.addEventListener("load",s),r.addEventListener("error",s))}}function fN(){if(Ql===null)throw Error(i(475));var r=Ql;return r.stylesheets&&r.count===0&&rg(r,r.stylesheets),0<r.count?function(s){var a=setTimeout(function(){if(r.stylesheets&&rg(r,r.stylesheets),r.unsuspend){var c=r.unsuspend;r.unsuspend=null,c()}},6e4);return r.unsuspend=s,function(){r.unsuspend=null,clearTimeout(a)}}:null}function Md(){if(this.count--,this.count===0){if(this.stylesheets)rg(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}var kd=null;function rg(r,s){r.stylesheets=null,r.unsuspend!==null&&(r.count++,kd=new Map,s.forEach(hN,r),kd=null,Md.call(r))}function hN(r,s){if(!(s.state.loading&4)){var a=kd.get(r);if(a)var c=a.get(null);else{a=new Map,kd.set(r,a);for(var d=r.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<d.length;m++){var b=d[m];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(a.set(b.dataset.precedence,b),c=b)}c&&a.set(null,c)}d=s.instance,b=d.getAttribute("data-precedence"),m=a.get(b)||c,m===c&&a.set(null,d),a.set(b,d),this.count++,c=Md.bind(this),d.addEventListener("load",c),d.addEventListener("error",c),m?m.parentNode.insertBefore(d,m.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(d,r.firstChild)),s.state.loading|=4}}var Kl={$$typeof:x,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function pN(r,s,a,c,d,m,b,E){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ko(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ko(0),this.hiddenUpdates=ko(null),this.identifierPrefix=c,this.onUncaughtError=d,this.onCaughtError=m,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function x1(r,s,a,c,d,m,b,E,L,Q,re,oe){return r=new pN(r,s,a,b,E,L,Q,oe),s=1,m===!0&&(s|=24),m=Tn(3,null,null,s),r.current=m,m.stateNode=r,s=Up(),s.refCount++,r.pooledCache=s,s.refCount++,m.memoizedState={element:c,isDehydrated:a,cache:s},Hp(m),r}function T1(r){return r?(r=Vo,r):Vo}function C1(r,s,a,c,d,m){d=T1(d),c.context===null?c.context=d:c.pendingContext=d,c=Ai(s),c.payload={element:a},m=m===void 0?null:m,m!==null&&(c.callback=m),a=Ii(r,c,s),a!==null&&(Dn(a,r,s),Cl(a,r,s))}function R1(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function ig(r,s){R1(r,s),(r=r.alternate)&&R1(r,s)}function A1(r){if(r.tag===13){var s=qo(r,67108864);s!==null&&Dn(s,r,67108864),ig(r,67108864)}}var Ld=!0;function mN(r,s,a,c){var d=U.T;U.T=null;var m=ee.p;try{ee.p=2,sg(r,s,a,c)}finally{ee.p=m,U.T=d}}function gN(r,s,a,c){var d=U.T;U.T=null;var m=ee.p;try{ee.p=8,sg(r,s,a,c)}finally{ee.p=m,U.T=d}}function sg(r,s,a,c){if(Ld){var d=og(c);if(d===null)Gm(r,s,c,Pd,a),D1(r,c);else if(vN(d,r,s,a,c))c.stopPropagation();else if(D1(r,c),s&4&&-1<yN.indexOf(r)){for(;d!==null;){var m=Ze(d);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var b=jr(m.pendingLanes);if(b!==0){var E=m;for(E.pendingLanes|=2,E.entangledLanes|=2;b;){var L=1<<31-Wt(b);E.entanglements[1]|=L,b&=~L}Cr(m),(tt&6)===0&&(_d=Yt()+500,Fl(0))}}break;case 13:E=qo(m,2),E!==null&&Dn(E,m,2),Sd(),ig(m,2)}if(m=og(c),m===null&&Gm(r,s,c,Pd,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else Gm(r,s,c,null,a)}}function og(r){return r=dp(r),ag(r)}var Pd=null;function ag(r){if(Pd=null,r=ze(r),r!==null){var s=l(r);if(s===null)r=null;else{var a=s.tag;if(a===13){if(r=u(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null)}}return Pd=r,null}function I1(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(sl()){case Ss:return 2;case Oo:return 8;case No:case Pr:return 32;case wi:return 268435456;default:return 32}default:return 32}}var lg=!1,Hi=null,Fi=null,qi=null,Xl=new Map,Zl=new Map,Vi=[],yN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function D1(r,s){switch(r){case"focusin":case"focusout":Hi=null;break;case"dragenter":case"dragleave":Fi=null;break;case"mouseover":case"mouseout":qi=null;break;case"pointerover":case"pointerout":Xl.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zl.delete(s.pointerId)}}function Jl(r,s,a,c,d,m){return r===null||r.nativeEvent!==m?(r={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},s!==null&&(s=Ze(s),s!==null&&A1(s)),r):(r.eventSystemFlags|=c,s=r.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),r)}function vN(r,s,a,c,d){switch(s){case"focusin":return Hi=Jl(Hi,r,s,a,c,d),!0;case"dragenter":return Fi=Jl(Fi,r,s,a,c,d),!0;case"mouseover":return qi=Jl(qi,r,s,a,c,d),!0;case"pointerover":var m=d.pointerId;return Xl.set(m,Jl(Xl.get(m)||null,r,s,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,Zl.set(m,Jl(Zl.get(m)||null,r,s,a,c,d)),!0}return!1}function O1(r){var s=ze(r.target);if(s!==null){var a=l(s);if(a!==null){if(s=a.tag,s===13){if(s=u(a),s!==null){r.blockedOn=s,Y(r.priority,function(){if(a.tag===13){var c=In();c=al(c);var d=qo(a,c);d!==null&&Dn(d,a,c),ig(a,c)}});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function jd(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=og(r.nativeEvent);if(a===null){a=r.nativeEvent;var c=new a.constructor(a.type,a);up=c,a.target.dispatchEvent(c),up=null}else return s=Ze(a),s!==null&&A1(s),r.blockedOn=a,!1;s.shift()}return!0}function N1(r,s,a){jd(r)&&a.delete(s)}function _N(){lg=!1,Hi!==null&&jd(Hi)&&(Hi=null),Fi!==null&&jd(Fi)&&(Fi=null),qi!==null&&jd(qi)&&(qi=null),Xl.forEach(N1),Zl.forEach(N1)}function Ud(r,s){r.blockedOn===s&&(r.blockedOn=null,lg||(lg=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,_N)))}var $d=null;function M1(r){$d!==r&&($d=r,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){$d===r&&($d=null);for(var s=0;s<r.length;s+=3){var a=r[s],c=r[s+1],d=r[s+2];if(typeof c!="function"){if(ag(c||a)===null)continue;break}var m=Ze(a);m!==null&&(r.splice(s,3),s-=3,am(m,{pending:!0,data:d,method:a.method,action:c},c,d))}}))}function ec(r){function s(L){return Ud(L,r)}Hi!==null&&Ud(Hi,r),Fi!==null&&Ud(Fi,r),qi!==null&&Ud(qi,r),Xl.forEach(s),Zl.forEach(s);for(var a=0;a<Vi.length;a++){var c=Vi[a];c.blockedOn===r&&(c.blockedOn=null)}for(;0<Vi.length&&(a=Vi[0],a.blockedOn===null);)O1(a),a.blockedOn===null&&Vi.shift();if(a=(r.ownerDocument||r).$$reactFormReplay,a!=null)for(c=0;c<a.length;c+=3){var d=a[c],m=a[c+1],b=d[fe]||null;if(typeof m=="function")b||M1(a);else if(b){var E=null;if(m&&m.hasAttribute("formAction")){if(d=m,b=m[fe]||null)E=b.formAction;else if(ag(d)!==null)continue}else E=b.action;typeof E=="function"?a[c+1]=E:(a.splice(c,3),c-=3),M1(a)}}}function cg(r){this._internalRoot=r}zd.prototype.render=cg.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(i(409));var a=s.current,c=In();C1(a,c,r,s,null,null)},zd.prototype.unmount=cg.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;C1(r.current,2,null,r,null,null),Sd(),s[ye]=null}};function zd(r){this._internalRoot=r}zd.prototype.unstable_scheduleHydration=function(r){if(r){var s=j();r={blockedOn:null,target:r,priority:s};for(var a=0;a<Vi.length&&s!==0&&s<Vi[a].priority;a++);Vi.splice(a,0,r),a===0&&O1(r)}};var k1=t.version;if(k1!=="19.1.1")throw Error(i(527,k1,"19.1.1"));ee.findDOMNode=function(r){var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(i(188)):(r=Object.keys(r).join(","),Error(i(268,r)));return r=h(s),r=r!==null?p(r):null,r=r===null?null:r.stateNode,r};var bN={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bd.isDisabled&&Bd.supportsFiber)try{hn=Bd.inject(bN),bt=Bd}catch{}}return nc.createRoot=function(r,s){if(!o(r))throw Error(i(299));var a=!1,c="",d=K0,m=X0,b=Z0,E=null;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(b=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(E=s.unstable_transitionCallbacks)),s=x1(r,1,!1,null,null,a,c,d,m,b,E,null),r[ye]=s.current,Vm(r),new cg(s)},nc.hydrateRoot=function(r,s,a){if(!o(r))throw Error(i(299));var c=!1,d="",m=K0,b=X0,E=Z0,L=null,Q=null;return a!=null&&(a.unstable_strictMode===!0&&(c=!0),a.identifierPrefix!==void 0&&(d=a.identifierPrefix),a.onUncaughtError!==void 0&&(m=a.onUncaughtError),a.onCaughtError!==void 0&&(b=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(L=a.unstable_transitionCallbacks),a.formState!==void 0&&(Q=a.formState)),s=x1(r,1,!0,s,a??null,c,d,m,b,E,L,Q),s.context=T1(null),a=s.current,c=In(),c=al(c),d=Ai(c),d.callback=null,Ii(a,d,c),a=c,s.current.lanes=a,Ts(s,a),Cr(s),r[ye]=s.current,Vm(r),new zd(s)},nc.version="19.1.1",nc}var q1;function DN(){if(q1)return fg.exports;q1=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),fg.exports=IN(),fg.exports}var ON=DN(),gg={exports:{}},yg={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V1;function NN(){if(V1)return yg;V1=1;var e=bh();function t(h,p){return h===p&&(h!==0||1/h===1/p)||h!==h&&p!==p}var n=typeof Object.is=="function"?Object.is:t,i=e.useSyncExternalStore,o=e.useRef,l=e.useEffect,u=e.useMemo,f=e.useDebugValue;return yg.useSyncExternalStoreWithSelector=function(h,p,g,y,_){var S=o(null);if(S.current===null){var w={hasValue:!1,value:null};S.current=w}else w=S.current;S=u(function(){function T(M){if(!A){if(A=!0,k=M,M=y(M),_!==void 0&&w.hasValue){var R=w.value;if(_(R,M))return x=R}return x=M}if(R=x,n(k,M))return R;var P=y(M);return _!==void 0&&_(R,P)?(k=M,R):(k=M,x=P)}var A=!1,k,x,I=g===void 0?null:g;return[function(){return T(p())},I===null?void 0:function(){return T(I())}]},[p,g,y,_]);var O=i(h,S[0],S[1]);return l(function(){w.hasValue=!0,w.value=O},[O]),f(O),O},yg}var G1;function MN(){return G1||(G1=1,gg.exports=NN()),gg.exports}var kN=MN();function DT(e){e()}function LN(){let e=null,t=null;return{clear(){e=null,t=null},notify(){DT(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let i=e;for(;i;)n.push(i),i=i.next;return n},subscribe(n){let i=!0;const o=t={callback:n,next:null,prev:t};return o.prev?o.prev.next=o:e=o,function(){!i||e===null||(i=!1,o.next?o.next.prev=o.prev:t=o.prev,o.prev?o.prev.next=o.next:e=o.next)}}}}var Y1={notify(){},get:()=>[]};function PN(e,t){let n,i=Y1,o=0,l=!1;function u(O){g();const T=i.subscribe(O);let A=!1;return()=>{A||(A=!0,T(),y())}}function f(){i.notify()}function h(){w.onStateChange&&w.onStateChange()}function p(){return l}function g(){o++,n||(n=e.subscribe(h),i=LN())}function y(){o--,n&&o===0&&(n(),n=void 0,i.clear(),i=Y1)}function _(){l||(l=!0,g())}function S(){l&&(l=!1,y())}const w={addNestedSub:u,notifyNestedSubs:f,handleChangeWrapper:h,isSubscribed:p,trySubscribe:_,tryUnsubscribe:S,getListeners:()=>i};return w}var jN=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",UN=jN(),$N=()=>typeof navigator<"u"&&navigator.product==="ReactNative",zN=$N(),BN=()=>UN||zN?C.useLayoutEffect:C.useEffect,HN=BN();function W1(e,t){return e===t?e!==0||t!==0||1/e===1/t:e!==e&&t!==t}function Ec(e,t){if(W1(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;const n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(let o=0;o<n.length;o++)if(!Object.prototype.hasOwnProperty.call(t,n[o])||!W1(e[n[o]],t[n[o]]))return!1;return!0}var FN=Symbol.for("react-redux-context"),qN=typeof globalThis<"u"?globalThis:{};function VN(){if(!C.createContext)return{};const e=qN[FN]??=new Map;let t=e.get(C.createContext);return t||(t=C.createContext(null),e.set(C.createContext,t)),t}var as=VN();function GN(e){const{children:t,context:n,serverState:i,store:o}=e,l=C.useMemo(()=>{const h=PN(o);return{store:o,subscription:h,getServerState:i?()=>i:void 0}},[o,i]),u=C.useMemo(()=>o.getState(),[o]);HN(()=>{const{subscription:h}=l;return h.onStateChange=h.notifyNestedSubs,h.trySubscribe(),u!==o.getState()&&h.notifyNestedSubs(),()=>{h.tryUnsubscribe(),h.onStateChange=void 0}},[l,u]);const f=n||as;return C.createElement(f.Provider,{value:l},t)}var YN=GN;function mv(e=as){return function(){return C.useContext(e)}}var OT=mv();function NT(e=as){const t=e===as?OT:mv(e),n=()=>{const{store:i}=t();return i};return Object.assign(n,{withTypes:()=>n}),n}var MT=NT();function WN(e=as){const t=e===as?MT:NT(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var kT=WN(),QN=(e,t)=>e===t;function KN(e=as){const t=e===as?OT:mv(e),n=(i,o={})=>{const{equalityFn:l=QN}=typeof o=="function"?{equalityFn:o}:o,u=t(),{store:f,subscription:h,getServerState:p}=u;C.useRef(!0);const g=C.useCallback({[i.name](_){return i(_)}}[i.name],[i]),y=kN.useSyncExternalStoreWithSelector(h.addNestedSub,f.getState,p||f.getState,g,l);return C.useDebugValue(y),y};return Object.assign(n,{withTypes:()=>n}),n}var LT=KN(),XN=DT;/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var PT=e=>{throw TypeError(e)},ZN=(e,t,n)=>t.has(e)||PT("Cannot "+n),vg=(e,t,n)=>(ZN(e,t,"read from private field"),n?n.call(e):t.get(e)),JN=(e,t,n)=>t.has(e)?PT("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),Q1="popstate";function eM(e={}){function t(o,l){let{pathname:u="/",search:f="",hash:h=""}=yi(o.location.hash.substring(1));return!u.startsWith("/")&&!u.startsWith(".")&&(u="/"+u),jc("",{pathname:u,search:f,hash:h},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(o,l){let u=o.document.querySelector("base"),f="";if(u&&u.getAttribute("href")){let h=o.location.href,p=h.indexOf("#");f=p===-1?h:h.slice(0,p)}return f+"#"+(typeof l=="string"?l:ls(l))}function i(o,l){It(o.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(l)})`)}return nM(t,n,i,e)}function Ue(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function It(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function tM(){return Math.random().toString(36).substring(2,10)}function K1(e,t){return{usr:e.state,key:e.key,idx:t}}function jc(e,t,n=null,i){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?yi(t):t,state:n,key:t&&t.key||i||tM()}}function ls({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function yi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let i=e.indexOf("?");i>=0&&(t.search=e.substring(i),e=e.substring(0,i)),e&&(t.pathname=e)}return t}function nM(e,t,n,i={}){let{window:o=document.defaultView,v5Compat:l=!1}=i,u=o.history,f="POP",h=null,p=g();p==null&&(p=0,u.replaceState({...u.state,idx:p},""));function g(){return(u.state||{idx:null}).idx}function y(){f="POP";let T=g(),A=T==null?null:T-p;p=T,h&&h({action:f,location:O.location,delta:A})}function _(T,A){f="PUSH";let k=jc(O.location,T,A);n&&n(k,T),p=g()+1;let x=K1(k,p),I=O.createHref(k);try{u.pushState(x,"",I)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;o.location.assign(I)}l&&h&&h({action:f,location:O.location,delta:1})}function S(T,A){f="REPLACE";let k=jc(O.location,T,A);n&&n(k,T),p=g();let x=K1(k,p),I=O.createHref(k);u.replaceState(x,"",I),l&&h&&h({action:f,location:O.location,delta:0})}function w(T){return jT(T)}let O={get action(){return f},get location(){return e(o,u)},listen(T){if(h)throw new Error("A history only accepts one active listener");return o.addEventListener(Q1,y),h=T,()=>{o.removeEventListener(Q1,y),h=null}},createHref(T){return t(o,T)},createURL:w,encodeLocation(T){let A=w(T);return{pathname:A.pathname,search:A.search,hash:A.hash}},push:_,replace:S,go(T){return u.go(T)}};return O}function jT(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Ue(n,"No window.location.(origin|href) available to create URL");let i=typeof e=="string"?e:ls(e);return i=i.replace(/ $/,"%20"),!t&&i.startsWith("//")&&(i=n+i),new URL(i,n)}var vc,X1=class{constructor(e){if(JN(this,vc,new Map),e)for(let[t,n]of e)this.set(t,n)}get(e){if(vg(this,vc).has(e))return vg(this,vc).get(e);if(e.defaultValue!==void 0)return e.defaultValue;throw new Error("No value found for context")}set(e,t){vg(this,vc).set(e,t)}};vc=new WeakMap;var rM=new Set(["lazy","caseSensitive","path","id","index","children"]);function iM(e){return rM.has(e)}var sM=new Set(["lazy","caseSensitive","path","id","index","middleware","children"]);function oM(e){return sM.has(e)}function aM(e){return e.index===!0}function Uc(e,t,n=[],i={},o=!1){return e.map((l,u)=>{let f=[...n,String(u)],h=typeof l.id=="string"?l.id:f.join("-");if(Ue(l.index!==!0||!l.children,"Cannot specify children on an index route"),Ue(o||!i[h],`Found a route id collision on id "${h}".  Route id's must be globally unique within Data Router usages`),aM(l)){let p={...l,...t(l),id:h};return i[h]=p,p}else{let p={...l,...t(l),id:h,children:void 0};return i[h]=p,l.children&&(p.children=Uc(l.children,t,f,i,o)),p}})}function Xi(e,t,n="/"){return ff(e,t,n,!1)}function ff(e,t,n,i){let o=typeof t=="string"?yi(t):t,l=Kn(o.pathname||"/",n);if(l==null)return null;let u=UT(e);cM(u);let f=null;for(let h=0;f==null&&h<u.length;++h){let p=bM(l);f=vM(u[h],p,i)}return f}function lM(e,t){let{route:n,pathname:i,params:o}=e;return{id:n.id,pathname:i,params:o,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function UT(e,t=[],n=[],i="",o=!1){let l=(u,f,h=o,p)=>{let g={relativePath:p===void 0?u.path||"":p,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(i)&&h)return;Ue(g.relativePath.startsWith(i),`Absolute route path "${g.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(i.length)}let y=Ir([i,g.relativePath]),_=n.concat(g);u.children&&u.children.length>0&&(Ue(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),UT(u.children,t,_,y,h)),!(u.path==null&&!u.index)&&t.push({path:y,score:gM(y,u.index),routesMeta:_})};return e.forEach((u,f)=>{if(u.path===""||!u.path?.includes("?"))l(u,f);else for(let h of $T(u.path))l(u,f,!0,h)}),t}function $T(e){let t=e.split("/");if(t.length===0)return[];let[n,...i]=t,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let u=$T(i.join("/")),f=[];return f.push(...u.map(h=>h===""?l:[l,h].join("/"))),o&&f.push(...u),f.map(h=>e.startsWith("/")&&h===""?"/":h)}function cM(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:yM(t.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var uM=/^:[\w-]+$/,dM=3,fM=2,hM=1,pM=10,mM=-2,Z1=e=>e==="*";function gM(e,t){let n=e.split("/"),i=n.length;return n.some(Z1)&&(i+=mM),t&&(i+=fM),n.filter(o=>!Z1(o)).reduce((o,l)=>o+(uM.test(l)?dM:l===""?hM:pM),i)}function yM(e,t){return e.length===t.length&&e.slice(0,-1).every((i,o)=>i===t[o])?e[e.length-1]-t[t.length-1]:0}function vM(e,t,n=!1){let{routesMeta:i}=e,o={},l="/",u=[];for(let f=0;f<i.length;++f){let h=i[f],p=f===i.length-1,g=l==="/"?t:t.slice(l.length)||"/",y=Df({path:h.relativePath,caseSensitive:h.caseSensitive,end:p},g),_=h.route;if(!y&&p&&n&&!i[i.length-1].route.index&&(y=Df({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},g)),!y)return null;Object.assign(o,y.params),u.push({params:o,pathname:Ir([l,y.pathname]),pathnameBase:xM(Ir([l,y.pathnameBase])),route:_}),y.pathnameBase!=="/"&&(l=Ir([l,y.pathnameBase]))}return u}function Df(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,i]=_M(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let l=o[0],u=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:i.reduce((p,{paramName:g,isOptional:y},_)=>{if(g==="*"){let w=f[_]||"";u=l.slice(0,l.length-w.length).replace(/(.)\/+$/,"$1")}const S=f[_];return y&&!S?p[g]=void 0:p[g]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:u,pattern:e}}function _M(e,t=!1,n=!0){It(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let i=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,f,h)=>(i.push({paramName:f,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(i.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),i]}function bM(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return It(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Kn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,i=e.charAt(n);return i&&i!=="/"?null:e.slice(n)||"/"}function SM({basename:e,pathname:t}){return t==="/"?e:Ir([e,t])}function wM(e,t="/"){let{pathname:n,search:i="",hash:o=""}=typeof e=="string"?yi(e):e;return{pathname:n?n.startsWith("/")?n:EM(n,t):t,search:TM(i),hash:CM(o)}}function EM(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function _g(e,t,n,i){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function zT(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Sh(e){let t=zT(e);return t.map((n,i)=>i===t.length-1?n.pathname:n.pathnameBase)}function wh(e,t,n,i=!1){let o;typeof e=="string"?o=yi(e):(o={...e},Ue(!o.pathname||!o.pathname.includes("?"),_g("?","pathname","search",o)),Ue(!o.pathname||!o.pathname.includes("#"),_g("#","pathname","hash",o)),Ue(!o.search||!o.search.includes("#"),_g("#","search","hash",o)));let l=e===""||o.pathname==="",u=l?"/":o.pathname,f;if(u==null)f=n;else{let y=t.length-1;if(!i&&u.startsWith("..")){let _=u.split("/");for(;_[0]==="..";)_.shift(),y-=1;o.pathname=_.join("/")}f=y>=0?t[y]:"/"}let h=wM(o,f),p=u&&u!=="/"&&u.endsWith("/"),g=(l||u===".")&&n.endsWith("/");return!h.pathname.endsWith("/")&&(p||g)&&(h.pathname+="/"),h}var Ir=e=>e.join("/").replace(/\/\/+/g,"/"),xM=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),TM=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,CM=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Of=class{constructor(e,t,n,i=!1){this.status=e,this.statusText=t||"",this.internal=i,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function $c(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var BT=["POST","PUT","PATCH","DELETE"],RM=new Set(BT),AM=["GET",...BT],IM=new Set(AM),DM=new Set([301,302,303,307,308]),OM=new Set([307,308]),bg={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},NM={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},rc={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},MM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,gv=e=>MM.test(e),kM=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),HT="remix-router-transitions",FT=Symbol("ResetLoaderData");function LM(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u";Ue(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let i=e.hydrationRouteProperties||[],o=e.mapRouteProperties||kM,l={},u=Uc(e.routes,o,void 0,l),f,h=e.basename||"/";h.startsWith("/")||(h=`/${h}`);let p=e.dataStrategy||zM,g={...e.future},y=null,_=new Set,S=null,w=null,O=null,T=e.hydrationData!=null,A=Xi(u,e.history.location,h),k=!1,x=null,I;if(A==null&&!e.patchRoutesOnNavigation){let j=Yn(404,{pathname:e.history.location.pathname}),{matches:Y,route:te}=Hd(u);I=!0,A=Y,x={[te.id]:j}}else if(A&&!e.hydrationData&&Cs(A,u,e.history.location.pathname).active&&(A=null),A)if(A.some(j=>j.route.lazy))I=!1;else if(!A.some(j=>j.route.loader))I=!0;else{let j=e.hydrationData?e.hydrationData.loaderData:null,Y=e.hydrationData?e.hydrationData.errors:null;if(Y){let te=A.findIndex(ce=>Y[ce.route.id]!==void 0);I=A.slice(0,te+1).every(ce=>!yy(ce.route,j,Y))}else I=A.every(te=>!yy(te.route,j,Y))}else{I=!1,A=[];let j=Cs(null,u,e.history.location.pathname);j.active&&j.matches&&(k=!0,A=j.matches)}let M,R={historyAction:e.history.action,location:e.history.location,matches:A,initialized:I,navigation:bg,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||x,fetchers:new Map,blockers:new Map},P="POP",V=!1,H,B=!1,z=new Map,G=null,F=!1,K=!1,ue=new Set,U=new Map,ee=0,ne=-1,ae=new Map,N=new Set,X=new Map,le=new Map,ie=new Set,de=new Map,me,pe=null;function Ae(){if(y=e.history.listen(({action:j,location:Y,delta:te})=>{if(me){me(),me=void 0;return}It(de.size===0||te!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ce=Iu({currentLocation:R.location,nextLocation:Y,historyAction:j});if(ce&&te!=null){let fe=new Promise(ye=>{me=ye});e.history.go(te*-1),br(ce,{state:"blocked",location:Y,proceed(){br(ce,{state:"proceeding",proceed:void 0,reset:void 0,location:Y}),fe.then(()=>e.history.go(te))},reset(){let ye=new Map(R.blockers);ye.set(ce,rc),$e({blockers:ye})}});return}return Et(j,Y)}),n){tk(t,z);let j=()=>nk(t,z);t.addEventListener("pagehide",j),G=()=>t.removeEventListener("pagehide",j)}return R.initialized||Et("POP",R.location,{initialHydration:!0}),M}function be(){y&&y(),G&&G(),_.clear(),H&&H.abort(),R.fetchers.forEach((j,Y)=>Wt(Y)),R.blockers.forEach((j,Y)=>xs(Y))}function De(j){return _.add(j),()=>_.delete(j)}function $e(j,Y={}){j.matches&&(j.matches=j.matches.map(fe=>{let ye=l[fe.route.id],we=fe.route;return we.element!==ye.element||we.errorElement!==ye.errorElement||we.hydrateFallbackElement!==ye.hydrateFallbackElement?{...fe,route:ye}:fe})),R={...R,...j};let te=[],ce=[];R.fetchers.forEach((fe,ye)=>{fe.state==="idle"&&(ie.has(ye)?te.push(ye):ce.push(ye))}),ie.forEach(fe=>{!R.fetchers.has(fe)&&!U.has(fe)&&te.push(fe)}),[..._].forEach(fe=>fe(R,{deletedFetchers:te,viewTransitionOpts:Y.viewTransitionOpts,flushSync:Y.flushSync===!0})),te.forEach(fe=>Wt(fe)),ce.forEach(fe=>R.fetchers.delete(fe))}function _t(j,Y,{flushSync:te}={}){let ce=R.actionData!=null&&R.navigation.formMethod!=null&&_n(R.navigation.formMethod)&&R.navigation.state==="loading"&&j.state?._isRedirect!==!0,fe;Y.actionData?Object.keys(Y.actionData).length>0?fe=Y.actionData:fe=null:ce?fe=R.actionData:fe=null;let ye=Y.loaderData?lw(R.loaderData,Y.loaderData,Y.matches||[],Y.errors):R.loaderData,we=R.blockers;we.size>0&&(we=new Map(we),we.forEach((_e,Se)=>we.set(Se,rc)));let ve=F?!1:Ou(j,Y.matches||R.matches),xe=V===!0||R.navigation.formMethod!=null&&_n(R.navigation.formMethod)&&j.state?._isRedirect!==!0;f&&(u=f,f=void 0),F||P==="POP"||(P==="PUSH"?e.history.push(j,j.state):P==="REPLACE"&&e.history.replace(j,j.state));let Ce;if(P==="POP"){let _e=z.get(R.location.pathname);_e&&_e.has(j.pathname)?Ce={currentLocation:R.location,nextLocation:j}:z.has(j.pathname)&&(Ce={currentLocation:j,nextLocation:R.location})}else if(B){let _e=z.get(R.location.pathname);_e?_e.add(j.pathname):(_e=new Set([j.pathname]),z.set(R.location.pathname,_e)),Ce={currentLocation:R.location,nextLocation:j}}$e({...Y,actionData:fe,loaderData:ye,historyAction:P,location:j,initialized:!0,navigation:bg,revalidation:"idle",restoreScrollPosition:ve,preventScrollReset:xe,blockers:we},{viewTransitionOpts:Ce,flushSync:te===!0}),P="POP",V=!1,B=!1,F=!1,K=!1,pe?.resolve(),pe=null}async function gt(j,Y){if(typeof j=="number"){e.history.go(j);return}let te=gy(R.location,R.matches,h,j,Y?.fromRouteId,Y?.relative),{path:ce,submission:fe,error:ye}=J1(!1,te,Y),we=R.location,ve=jc(R.location,ce,Y&&Y.state);ve={...ve,...e.history.encodeLocation(ve)};let xe=Y&&Y.replace!=null?Y.replace:void 0,Ce="PUSH";xe===!0?Ce="REPLACE":xe===!1||fe!=null&&_n(fe.formMethod)&&fe.formAction===R.location.pathname+R.location.search&&(Ce="REPLACE");let _e=Y&&"preventScrollReset"in Y?Y.preventScrollReset===!0:void 0,Se=(Y&&Y.flushSync)===!0,ze=Iu({currentLocation:we,nextLocation:ve,historyAction:Ce});if(ze){br(ze,{state:"blocked",location:ve,proceed(){br(ze,{state:"proceeding",proceed:void 0,reset:void 0,location:ve}),gt(j,Y)},reset(){let Ze=new Map(R.blockers);Ze.set(ze,rc),$e({blockers:Ze})}});return}await Et(Ce,ve,{submission:fe,pendingError:ye,preventScrollReset:_e,replace:Y&&Y.replace,enableViewTransition:Y&&Y.viewTransition,flushSync:Se})}function kn(){pe||(pe=rk()),ol(),$e({revalidation:"loading"});let j=pe.promise;return R.navigation.state==="submitting"?j:R.navigation.state==="idle"?(Et(R.historyAction,R.location,{startUninterruptedRevalidation:!0}),j):(Et(P||R.historyAction,R.navigation.location,{overrideNavigation:R.navigation,enableViewTransition:B===!0}),j)}async function Et(j,Y,te){H&&H.abort(),H=null,P=j,F=(te&&te.startUninterruptedRevalidation)===!0,Ts(R.location,R.matches),V=(te&&te.preventScrollReset)===!0,B=(te&&te.enableViewTransition)===!0;let ce=f||u,fe=te&&te.overrideNavigation,ye=te?.initialHydration&&R.matches&&R.matches.length>0&&!k?R.matches:Xi(ce,Y,h),we=(te&&te.flushSync)===!0;if(ye&&R.initialized&&!K&&WM(R.location,Y)&&!(te&&te.submission&&_n(te.submission.formMethod))){_t(Y,{matches:ye},{flushSync:we});return}let ve=Cs(ye,ce,Y.pathname);if(ve.active&&ve.matches&&(ye=ve.matches),!ye){let{error:xt,notFoundMatches:Le,route:it}=Mo(Y.pathname);_t(Y,{matches:Le,loaderData:{},errors:{[it.id]:xt}},{flushSync:we});return}H=new AbortController;let xe=ba(e.history,Y,H.signal,te&&te.submission),Ce=e.getContext?await e.getContext():new X1,_e;if(te&&te.pendingError)_e=[Zi(ye).route.id,{type:"error",error:te.pendingError}];else if(te&&te.submission&&_n(te.submission.formMethod)){let xt=await Ln(xe,Y,te.submission,ye,Ce,ve.active,te&&te.initialHydration===!0,{replace:te.replace,flushSync:we});if(xt.shortCircuited)return;if(xt.pendingActionResult){let[Le,it]=xt.pendingActionResult;if(Nn(it)&&$c(it.error)&&it.error.status===404){H=null,_t(Y,{matches:xt.matches,loaderData:{},errors:{[Le]:it.error}});return}}ye=xt.matches||ye,_e=xt.pendingActionResult,fe=Sg(Y,te.submission),we=!1,ve.active=!1,xe=ba(e.history,xe.url,xe.signal)}let{shortCircuited:Se,matches:ze,loaderData:Ze,errors:yt}=await Lr(xe,Y,ye,Ce,ve.active,fe,te&&te.submission,te&&te.fetcherSubmission,te&&te.replace,te&&te.initialHydration===!0,we,_e);Se||(H=null,_t(Y,{matches:ze||ye,...cw(_e),loaderData:Ze,errors:yt}))}async function Ln(j,Y,te,ce,fe,ye,we,ve={}){ol();let xe=JM(Y,te);if($e({navigation:xe},{flushSync:ve.flushSync===!0}),ye){let Se=await Rs(ce,Y.pathname,j.signal);if(Se.type==="aborted")return{shortCircuited:!0};if(Se.type==="error"){if(Se.partialMatches.length===0){let{matches:Ze,route:yt}=Hd(u);return{matches:Ze,pendingActionResult:[yt.id,{type:"error",error:Se.error}]}}let ze=Zi(Se.partialMatches).route.id;return{matches:Se.partialMatches,pendingActionResult:[ze,{type:"error",error:Se.error}]}}else if(Se.matches)ce=Se.matches;else{let{notFoundMatches:ze,error:Ze,route:yt}=Mo(Y.pathname);return{matches:ze,pendingActionResult:[yt.id,{type:"error",error:Ze}]}}}let Ce,_e=hf(ce,Y);if(!_e.route.action&&!_e.route.lazy)Ce={type:"error",error:Yn(405,{method:j.method,pathname:Y.pathname,routeId:_e.route.id})};else{let Se=xa(o,l,j,ce,_e,we?[]:i,fe),ze=await wi(j,Se,fe,null);if(Ce=ze[_e.route.id],!Ce){for(let Ze of ce)if(ze[Ze.route.id]){Ce=ze[Ze.route.id];break}}if(j.signal.aborted)return{shortCircuited:!0}}if(to(Ce)){let Se;return ve&&ve.replace!=null?Se=ve.replace:Se=sw(Ce.response.headers.get("Location"),new URL(j.url),h)===R.location.pathname+R.location.search,await Pr(j,Ce,!0,{submission:te,replace:Se}),{shortCircuited:!0}}if(Nn(Ce)){let Se=Zi(ce,_e.route.id);return(ve&&ve.replace)!==!0&&(P="PUSH"),{matches:ce,pendingActionResult:[Se.route.id,Ce,_e.route.id]}}return{matches:ce,pendingActionResult:[_e.route.id,Ce]}}async function Lr(j,Y,te,ce,fe,ye,we,ve,xe,Ce,_e,Se){let ze=ye||Sg(Y,we),Ze=we||ve||dw(ze),yt=!F&&!Ce;if(fe){if(yt){let Nt=Yt(Se);$e({navigation:ze,...Nt!==void 0?{actionData:Nt}:{}},{flushSync:_e})}let Pe=await Rs(te,Y.pathname,j.signal);if(Pe.type==="aborted")return{shortCircuited:!0};if(Pe.type==="error"){if(Pe.partialMatches.length===0){let{matches:Br,route:pn}=Hd(u);return{matches:Br,loaderData:{},errors:{[pn.id]:Pe.error}}}let Nt=Zi(Pe.partialMatches).route.id;return{matches:Pe.partialMatches,loaderData:{},errors:{[Nt]:Pe.error}}}else if(Pe.matches)te=Pe.matches;else{let{error:Nt,notFoundMatches:Br,route:pn}=Mo(Y.pathname);return{matches:Br,loaderData:{},errors:{[pn.id]:Nt}}}}let xt=f||u,{dsMatches:Le,revalidatingFetchers:it}=ew(j,ce,o,l,e.history,R,te,Ze,Y,Ce?[]:i,Ce===!0,K,ue,ie,X,N,xt,h,e.patchRoutesOnNavigation!=null,Se);if(ne=++ee,!e.dataStrategy&&!Le.some(Pe=>Pe.shouldLoad)&&!Le.some(Pe=>Pe.route.middleware)&&it.length===0){let Pe=ws();return _t(Y,{matches:te,loaderData:{},errors:Se&&Nn(Se[1])?{[Se[0]]:Se[1].error}:null,...cw(Se),...Pe?{fetchers:new Map(R.fetchers)}:{}},{flushSync:_e}),{shortCircuited:!0}}if(yt){let Pe={};if(!fe){Pe.navigation=ze;let Nt=Yt(Se);Nt!==void 0&&(Pe.actionData=Nt)}it.length>0&&(Pe.fetchers=sl(it)),$e(Pe,{flushSync:_e})}it.forEach(Pe=>{_r(Pe.key),Pe.controller&&U.set(Pe.key,Pe.controller)});let Sr=()=>it.forEach(Pe=>_r(Pe.key));H&&H.signal.addEventListener("abort",Sr);let{loaderResults:En,fetcherResults:ln}=await Ru(Le,it,j,ce);if(j.signal.aborted)return{shortCircuited:!0};H&&H.signal.removeEventListener("abort",Sr),it.forEach(Pe=>U.delete(Pe.key));let Pn=Fd(En);if(Pn)return await Pr(j,Pn.result,!0,{replace:xe}),{shortCircuited:!0};if(Pn=Fd(ln),Pn)return N.add(Pn.key),await Pr(j,Pn.result,!0,{replace:xe}),{shortCircuited:!0};let{loaderData:Lo,errors:Ei}=aw(R,te,En,Se,it,ln);Ce&&R.errors&&(Ei={...R.errors,...Ei});let Ur=ws(),$r=Es(ne),zr=Ur||$r||it.length>0;return{matches:te,loaderData:Lo,errors:Ei,...zr?{fetchers:new Map(R.fetchers)}:{}}}function Yt(j){if(j&&!Nn(j[1]))return{[j[0]]:j[1].data};if(R.actionData)return Object.keys(R.actionData).length===0?null:R.actionData}function sl(j){return j.forEach(Y=>{let te=R.fetchers.get(Y.key),ce=ic(void 0,te?te.data:void 0);R.fetchers.set(Y.key,ce)}),new Map(R.fetchers)}async function Ss(j,Y,te,ce){_r(j);let fe=(ce&&ce.flushSync)===!0,ye=f||u,we=gy(R.location,R.matches,h,te,Y,ce?.relative),ve=Xi(ye,we,h),xe=Cs(ve,ye,we);if(xe.active&&xe.matches&&(ve=xe.matches),!ve){bt(j,Y,Yn(404,{pathname:we}),{flushSync:fe});return}let{path:Ce,submission:_e,error:Se}=J1(!0,we,ce);if(Se){bt(j,Y,Se,{flushSync:fe});return}let ze=e.getContext?await e.getContext():new X1,Ze=(ce&&ce.preventScrollReset)===!0;if(_e&&_n(_e.formMethod)){await Oo(j,Y,Ce,ve,ze,xe.active,fe,Ze,_e);return}X.set(j,{routeId:Y,path:Ce}),await No(j,Y,Ce,ve,ze,xe.active,fe,Ze,_e)}async function Oo(j,Y,te,ce,fe,ye,we,ve,xe){ol(),X.delete(j);let Ce=R.fetchers.get(j);hn(j,ek(xe,Ce),{flushSync:we});let _e=new AbortController,Se=ba(e.history,te,_e.signal,xe);if(ye){let St=await Rs(ce,new URL(Se.url).pathname,Se.signal,j);if(St.type==="aborted")return;if(St.type==="error"){bt(j,Y,St.error,{flushSync:we});return}else if(St.matches)ce=St.matches;else{bt(j,Y,Yn(404,{pathname:te}),{flushSync:we});return}}let ze=hf(ce,te);if(!ze.route.action&&!ze.route.lazy){let St=Yn(405,{method:xe.formMethod,pathname:te,routeId:Y});bt(j,Y,St,{flushSync:we});return}U.set(j,_e);let Ze=ee,yt=xa(o,l,Se,ce,ze,i,fe),Le=(await wi(Se,yt,fe,j))[ze.route.id];if(Se.signal.aborted){U.get(j)===_e&&U.delete(j);return}if(ie.has(j)){if(to(Le)||Nn(Le)){hn(j,Qi(void 0));return}}else{if(to(Le))if(U.delete(j),ne>Ze){hn(j,Qi(void 0));return}else return N.add(j),hn(j,ic(xe)),Pr(Se,Le,!1,{fetcherSubmission:xe,preventScrollReset:ve});if(Nn(Le)){bt(j,Y,Le.error);return}}let it=R.navigation.location||R.location,Sr=ba(e.history,it,_e.signal),En=f||u,ln=R.navigation.state!=="idle"?Xi(En,R.navigation.location,h):R.matches;Ue(ln,"Didn't find any matches after fetcher action");let Pn=++ee;ae.set(j,Pn);let Lo=ic(xe,Le.data);R.fetchers.set(j,Lo);let{dsMatches:Ei,revalidatingFetchers:Ur}=ew(Sr,fe,o,l,e.history,R,ln,xe,it,i,!1,K,ue,ie,X,N,En,h,e.patchRoutesOnNavigation!=null,[ze.route.id,Le]);Ur.filter(St=>St.key!==j).forEach(St=>{let xi=St.key,Nu=R.fetchers.get(xi),Mu=ic(void 0,Nu?Nu.data:void 0);R.fetchers.set(xi,Mu),_r(xi),St.controller&&U.set(xi,St.controller)}),$e({fetchers:new Map(R.fetchers)});let $r=()=>Ur.forEach(St=>_r(St.key));_e.signal.addEventListener("abort",$r);let{loaderResults:zr,fetcherResults:Pe}=await Ru(Ei,Ur,Sr,fe);if(_e.signal.aborted)return;if(_e.signal.removeEventListener("abort",$r),ae.delete(j),U.delete(j),Ur.forEach(St=>U.delete(St.key)),R.fetchers.has(j)){let St=Qi(Le.data);R.fetchers.set(j,St)}let Nt=Fd(zr);if(Nt)return Pr(Sr,Nt.result,!1,{preventScrollReset:ve});if(Nt=Fd(Pe),Nt)return N.add(Nt.key),Pr(Sr,Nt.result,!1,{preventScrollReset:ve});let{loaderData:Br,errors:pn}=aw(R,ln,zr,void 0,Ur,Pe);Es(Pn),R.navigation.state==="loading"&&Pn>ne?(Ue(P,"Expected pending action"),H&&H.abort(),_t(R.navigation.location,{matches:ln,loaderData:Br,errors:pn,fetchers:new Map(R.fetchers)})):($e({errors:pn,loaderData:lw(R.loaderData,Br,ln,pn),fetchers:new Map(R.fetchers)}),K=!1)}async function No(j,Y,te,ce,fe,ye,we,ve,xe){let Ce=R.fetchers.get(j);hn(j,ic(xe,Ce?Ce.data:void 0),{flushSync:we});let _e=new AbortController,Se=ba(e.history,te,_e.signal);if(ye){let it=await Rs(ce,new URL(Se.url).pathname,Se.signal,j);if(it.type==="aborted")return;if(it.type==="error"){bt(j,Y,it.error,{flushSync:we});return}else if(it.matches)ce=it.matches;else{bt(j,Y,Yn(404,{pathname:te}),{flushSync:we});return}}let ze=hf(ce,te);U.set(j,_e);let Ze=ee,yt=xa(o,l,Se,ce,ze,i,fe),Le=(await wi(Se,yt,fe,j))[ze.route.id];if(U.get(j)===_e&&U.delete(j),!Se.signal.aborted){if(ie.has(j)){hn(j,Qi(void 0));return}if(to(Le))if(ne>Ze){hn(j,Qi(void 0));return}else{N.add(j),await Pr(Se,Le,!1,{preventScrollReset:ve});return}if(Nn(Le)){bt(j,Y,Le.error);return}hn(j,Qi(Le.data))}}async function Pr(j,Y,te,{submission:ce,fetcherSubmission:fe,preventScrollReset:ye,replace:we}={}){Y.response.headers.has("X-Remix-Revalidate")&&(K=!0);let ve=Y.response.headers.get("Location");Ue(ve,"Expected a Location header on the redirect Response"),ve=sw(ve,new URL(j.url),h);let xe=jc(R.location,ve,{_isRedirect:!0});if(n){let yt=!1;if(Y.response.headers.has("X-Remix-Reload-Document"))yt=!0;else if(gv(ve)){const xt=jT(ve,!0);yt=xt.origin!==t.location.origin||Kn(xt.pathname,h)==null}if(yt){we?t.location.replace(ve):t.location.assign(ve);return}}H=null;let Ce=we===!0||Y.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:_e,formAction:Se,formEncType:ze}=R.navigation;!ce&&!fe&&_e&&Se&&ze&&(ce=dw(R.navigation));let Ze=ce||fe;if(OM.has(Y.response.status)&&Ze&&_n(Ze.formMethod))await Et(Ce,xe,{submission:{...Ze,formAction:ve},preventScrollReset:ye||V,enableViewTransition:te?B:void 0});else{let yt=Sg(xe,ce);await Et(Ce,xe,{overrideNavigation:yt,fetcherSubmission:fe,preventScrollReset:ye||V,enableViewTransition:te?B:void 0})}}async function wi(j,Y,te,ce){let fe,ye={};try{fe=await HM(p,j,Y,ce,te,!1)}catch(we){return Y.filter(ve=>ve.shouldLoad).forEach(ve=>{ye[ve.route.id]={type:"error",error:we}}),ye}if(j.signal.aborted)return ye;for(let[we,ve]of Object.entries(fe))if(XM(ve)){let xe=ve.result;ye[we]={type:"redirect",response:GM(xe,j,we,Y,h)}}else ye[we]=await VM(ve);return ye}async function Ru(j,Y,te,ce){let fe=wi(te,j,ce,null),ye=Promise.all(Y.map(async xe=>{if(xe.matches&&xe.match&&xe.request&&xe.controller){let _e=(await wi(xe.request,xe.matches,ce,xe.key))[xe.match.route.id];return{[xe.key]:_e}}else return Promise.resolve({[xe.key]:{type:"error",error:Yn(404,{pathname:xe.path})}})})),we=await fe,ve=(await ye).reduce((xe,Ce)=>Object.assign(xe,Ce),{});return{loaderResults:we,fetcherResults:ve}}function ol(){K=!0,X.forEach((j,Y)=>{U.has(Y)&&ue.add(Y),_r(Y)})}function hn(j,Y,te={}){R.fetchers.set(j,Y),$e({fetchers:new Map(R.fetchers)},{flushSync:(te&&te.flushSync)===!0})}function bt(j,Y,te,ce={}){let fe=Zi(R.matches,Y);Wt(j),$e({errors:{[fe.route.id]:te},fetchers:new Map(R.fetchers)},{flushSync:(ce&&ce.flushSync)===!0})}function nr(j){return le.set(j,(le.get(j)||0)+1),ie.has(j)&&ie.delete(j),R.fetchers.get(j)||NM}function Wt(j){let Y=R.fetchers.get(j);U.has(j)&&!(Y&&Y.state==="loading"&&ae.has(j))&&_r(j),X.delete(j),ae.delete(j),N.delete(j),ie.delete(j),ue.delete(j),R.fetchers.delete(j)}function op(j){let Y=(le.get(j)||0)-1;Y<=0?(le.delete(j),ie.add(j)):le.set(j,Y),$e({fetchers:new Map(R.fetchers)})}function _r(j){let Y=U.get(j);Y&&(Y.abort(),U.delete(j))}function Au(j){for(let Y of j){let te=nr(Y),ce=Qi(te.data);R.fetchers.set(Y,ce)}}function ws(){let j=[],Y=!1;for(let te of N){let ce=R.fetchers.get(te);Ue(ce,`Expected fetcher: ${te}`),ce.state==="loading"&&(N.delete(te),j.push(te),Y=!0)}return Au(j),Y}function Es(j){let Y=[];for(let[te,ce]of ae)if(ce<j){let fe=R.fetchers.get(te);Ue(fe,`Expected fetcher: ${te}`),fe.state==="loading"&&(_r(te),ae.delete(te),Y.push(te))}return Au(Y),Y.length>0}function jr(j,Y){let te=R.blockers.get(j)||rc;return de.get(j)!==Y&&de.set(j,Y),te}function xs(j){R.blockers.delete(j),de.delete(j)}function br(j,Y){let te=R.blockers.get(j)||rc;Ue(te.state==="unblocked"&&Y.state==="blocked"||te.state==="blocked"&&Y.state==="blocked"||te.state==="blocked"&&Y.state==="proceeding"||te.state==="blocked"&&Y.state==="unblocked"||te.state==="proceeding"&&Y.state==="unblocked",`Invalid blocker state transition: ${te.state} -> ${Y.state}`);let ce=new Map(R.blockers);ce.set(j,Y),$e({blockers:ce})}function Iu({currentLocation:j,nextLocation:Y,historyAction:te}){if(de.size===0)return;de.size>1&&It(!1,"A router only supports one blocker at a time");let ce=Array.from(de.entries()),[fe,ye]=ce[ce.length-1],we=R.blockers.get(fe);if(!(we&&we.state==="proceeding")&&ye({currentLocation:j,nextLocation:Y,historyAction:te}))return fe}function Mo(j){let Y=Yn(404,{pathname:j}),te=f||u,{matches:ce,route:fe}=Hd(te);return{notFoundMatches:ce,route:fe,error:Y}}function Du(j,Y,te){if(S=j,O=Y,w=te||null,!T&&R.navigation===bg){T=!0;let ce=Ou(R.location,R.matches);ce!=null&&$e({restoreScrollPosition:ce})}return()=>{S=null,O=null,w=null}}function ko(j,Y){return w&&w(j,Y.map(ce=>lM(ce,R.loaderData)))||j.key}function Ts(j,Y){if(S&&O){let te=ko(j,Y);S[te]=O()}}function Ou(j,Y){if(S){let te=ko(j,Y),ce=S[te];if(typeof ce=="number")return ce}return null}function Cs(j,Y,te){if(e.patchRoutesOnNavigation)if(j){if(Object.keys(j[0].params).length>0)return{active:!0,matches:ff(Y,te,h,!0)}}else return{active:!0,matches:ff(Y,te,h,!0)||[]};return{active:!1,matches:null}}async function Rs(j,Y,te,ce){if(!e.patchRoutesOnNavigation)return{type:"success",matches:j};let fe=j;for(;;){let ye=f==null,we=f||u,ve=l;try{await e.patchRoutesOnNavigation({signal:te,path:Y,matches:fe,fetcherKey:ce,patch:(_e,Se)=>{te.aborted||tw(_e,Se,we,ve,o,!1)}})}catch(_e){return{type:"error",error:_e,partialMatches:fe}}finally{ye&&!te.aborted&&(u=[...u])}if(te.aborted)return{type:"aborted"};let xe=Xi(we,Y,h);if(xe)return{type:"success",matches:xe};let Ce=ff(we,Y,h,!0);if(!Ce||fe.length===Ce.length&&fe.every((_e,Se)=>_e.route.id===Ce[Se].route.id))return{type:"success",matches:null};fe=Ce}}function al(j){l={},f=Uc(j,o,void 0,l)}function ll(j,Y,te=!1){let ce=f==null;tw(j,Y,f||u,l,o,te),ce&&(u=[...u],$e({}))}return M={get basename(){return h},get future(){return g},get state(){return R},get routes(){return u},get window(){return t},initialize:Ae,subscribe:De,enableScrollRestoration:Du,navigate:gt,fetch:Ss,revalidate:kn,createHref:j=>e.history.createHref(j),encodeLocation:j=>e.history.encodeLocation(j),getFetcher:nr,deleteFetcher:op,dispose:be,getBlocker:jr,deleteBlocker:xs,patchRoutes:ll,_internalFetchControllers:U,_internalSetRoutes:al,_internalSetStateDoNotUseOrYouWillBreakYourApp(j){$e(j)}},M}function PM(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function gy(e,t,n,i,o,l){let u,f;if(o){u=[];for(let p of t)if(u.push(p),p.route.id===o){f=p;break}}else u=t,f=t[t.length-1];let h=wh(i||".",Sh(u),Kn(e.pathname,n)||e.pathname,l==="path");if(i==null&&(h.search=e.search,h.hash=e.hash),(i==null||i===""||i===".")&&f){let p=yv(h.search);if(f.route.index&&!p)h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index";else if(!f.route.index&&p){let g=new URLSearchParams(h.search),y=g.getAll("index");g.delete("index"),y.filter(S=>S).forEach(S=>g.append("index",S));let _=g.toString();h.search=_?`?${_}`:""}}return n!=="/"&&(h.pathname=SM({basename:n,pathname:h.pathname})),ls(h)}function J1(e,t,n){if(!n||!PM(n))return{path:t};if(n.formMethod&&!ZM(n.formMethod))return{path:t,error:Yn(405,{method:n.formMethod})};let i=()=>({path:t,error:Yn(400,{type:"invalid-body"})}),l=(n.formMethod||"get").toUpperCase(),u=QT(t);if(n.body!==void 0){if(n.formEncType==="text/plain"){if(!_n(l))return i();let y=typeof n.body=="string"?n.body:n.body instanceof FormData||n.body instanceof URLSearchParams?Array.from(n.body.entries()).reduce((_,[S,w])=>`${_}${S}=${w}
`,""):String(n.body);return{path:t,submission:{formMethod:l,formAction:u,formEncType:n.formEncType,formData:void 0,json:void 0,text:y}}}else if(n.formEncType==="application/json"){if(!_n(l))return i();try{let y=typeof n.body=="string"?JSON.parse(n.body):n.body;return{path:t,submission:{formMethod:l,formAction:u,formEncType:n.formEncType,formData:void 0,json:y,text:void 0}}}catch{return i()}}}Ue(typeof FormData=="function","FormData is not available in this environment");let f,h;if(n.formData)f=_y(n.formData),h=n.formData;else if(n.body instanceof FormData)f=_y(n.body),h=n.body;else if(n.body instanceof URLSearchParams)f=n.body,h=ow(f);else if(n.body==null)f=new URLSearchParams,h=new FormData;else try{f=new URLSearchParams(n.body),h=ow(f)}catch{return i()}let p={formMethod:l,formAction:u,formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:h,json:void 0,text:void 0};if(_n(p.formMethod))return{path:t,submission:p};let g=yi(t);return e&&g.search&&yv(g.search)&&f.append("index",""),g.search=`?${f}`,{path:ls(g),submission:p}}function ew(e,t,n,i,o,l,u,f,h,p,g,y,_,S,w,O,T,A,k,x){let I=x?Nn(x[1])?x[1].error:x[1].data:void 0,M=o.createURL(l.location),R=o.createURL(h),P;if(g&&l.errors){let F=Object.keys(l.errors)[0];P=u.findIndex(K=>K.route.id===F)}else if(x&&Nn(x[1])){let F=x[0];P=u.findIndex(K=>K.route.id===F)-1}let V=x?x[1].statusCode:void 0,H=V&&V>=400,B={currentUrl:M,currentParams:l.matches[0]?.params||{},nextUrl:R,nextParams:u[0].params,...f,actionResult:I,actionStatus:V},z=u.map((F,K)=>{let{route:ue}=F,U=null;if(P!=null&&K>P?U=!1:ue.lazy?U=!0:ue.loader==null?U=!1:g?U=yy(ue,l.loaderData,l.errors):jM(l.loaderData,l.matches[K],F)&&(U=!0),U!==null)return vy(n,i,e,F,p,t,U);let ee=H?!1:y||M.pathname+M.search===R.pathname+R.search||M.search!==R.search||UM(l.matches[K],F),ne={...B,defaultShouldRevalidate:ee},ae=Nf(F,ne);return vy(n,i,e,F,p,t,ae,ne)}),G=[];return w.forEach((F,K)=>{if(g||!u.some(le=>le.route.id===F.routeId)||S.has(K))return;let ue=l.fetchers.get(K),U=ue&&ue.state!=="idle"&&ue.data===void 0,ee=Xi(T,F.path,A);if(!ee){if(k&&U)return;G.push({key:K,routeId:F.routeId,path:F.path,matches:null,match:null,request:null,controller:null});return}if(O.has(K))return;let ne=hf(ee,F.path),ae=new AbortController,N=ba(o,F.path,ae.signal),X=null;if(_.has(K))_.delete(K),X=xa(n,i,N,ee,ne,p,t);else if(U)y&&(X=xa(n,i,N,ee,ne,p,t));else{let le={...B,defaultShouldRevalidate:H?!1:y};Nf(ne,le)&&(X=xa(n,i,N,ee,ne,p,t,le))}X&&G.push({key:K,routeId:F.routeId,path:F.path,matches:X,match:ne,request:N,controller:ae})}),{dsMatches:z,revalidatingFetchers:G}}function yy(e,t,n){if(e.lazy)return!0;if(!e.loader)return!1;let i=t!=null&&e.id in t,o=n!=null&&n[e.id]!==void 0;return!i&&o?!1:typeof e.loader=="function"&&e.loader.hydrate===!0?!0:!i&&!o}function jM(e,t,n){let i=!t||n.route.id!==t.route.id,o=!e.hasOwnProperty(n.route.id);return i||o}function UM(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Nf(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}function tw(e,t,n,i,o,l){let u;if(e){let p=i[e];Ue(p,`No route found to patch children into: routeId = ${e}`),p.children||(p.children=[]),u=p.children}else u=n;let f=[],h=[];if(t.forEach(p=>{let g=u.find(y=>qT(p,y));g?h.push({existingRoute:g,newRoute:p}):f.push(p)}),f.length>0){let p=Uc(f,o,[e||"_","patch",String(u?.length||"0")],i);u.push(...p)}if(l&&h.length>0)for(let p=0;p<h.length;p++){let{existingRoute:g,newRoute:y}=h[p],_=g,[S]=Uc([y],o,[],{},!0);Object.assign(_,{element:S.element?S.element:_.element,errorElement:S.errorElement?S.errorElement:_.errorElement,hydrateFallbackElement:S.hydrateFallbackElement?S.hydrateFallbackElement:_.hydrateFallbackElement})}}function qT(e,t){return"id"in e&&"id"in t&&e.id===t.id?!0:e.index===t.index&&e.path===t.path&&e.caseSensitive===t.caseSensitive?(!e.children||e.children.length===0)&&(!t.children||t.children.length===0)?!0:e.children.every((n,i)=>t.children?.some(o=>qT(n,o))):!1}var nw=new WeakMap,VT=({key:e,route:t,manifest:n,mapRouteProperties:i})=>{let o=n[t.id];if(Ue(o,"No route found in manifest"),!o.lazy||typeof o.lazy!="object")return;let l=o.lazy[e];if(!l)return;let u=nw.get(o);u||(u={},nw.set(o,u));let f=u[e];if(f)return f;let h=(async()=>{let p=iM(e),y=o[e]!==void 0&&e!=="hasErrorBoundary";if(p)It(!p,"Route property "+e+" is not a supported lazy route property. This property will be ignored."),u[e]=Promise.resolve();else if(y)It(!1,`Route "${o.id}" has a static property "${e}" defined. The lazy property will be ignored.`);else{let _=await l();_!=null&&(Object.assign(o,{[e]:_}),Object.assign(o,i(o)))}typeof o.lazy=="object"&&(o.lazy[e]=void 0,Object.values(o.lazy).every(_=>_===void 0)&&(o.lazy=void 0))})();return u[e]=h,h},rw=new WeakMap;function $M(e,t,n,i,o){let l=n[e.id];if(Ue(l,"No route found in manifest"),!e.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof e.lazy=="function"){let g=rw.get(l);if(g)return{lazyRoutePromise:g,lazyHandlerPromise:g};let y=(async()=>{Ue(typeof e.lazy=="function","No lazy route function found");let _=await e.lazy(),S={};for(let w in _){let O=_[w];if(O===void 0)continue;let T=oM(w),k=l[w]!==void 0&&w!=="hasErrorBoundary";T?It(!T,"Route property "+w+" is not a supported property to be returned from a lazy route function. This property will be ignored."):k?It(!k,`Route "${l.id}" has a static property "${w}" defined but its lazy function is also returning a value for this property. The lazy route property "${w}" will be ignored.`):S[w]=O}Object.assign(l,S),Object.assign(l,{...i(l),lazy:void 0})})();return rw.set(l,y),y.catch(()=>{}),{lazyRoutePromise:y,lazyHandlerPromise:y}}let u=Object.keys(e.lazy),f=[],h;for(let g of u){if(o&&o.includes(g))continue;let y=VT({key:g,route:e,manifest:n,mapRouteProperties:i});y&&(f.push(y),g===t&&(h=y))}let p=f.length>0?Promise.all(f).then(()=>{}):void 0;return p?.catch(()=>{}),h?.catch(()=>{}),{lazyRoutePromise:p,lazyHandlerPromise:h}}async function iw(e){let t=e.matches.filter(o=>o.shouldLoad),n={};return(await Promise.all(t.map(o=>o.resolve()))).forEach((o,l)=>{n[t[l].route.id]=o}),n}async function zM(e){return e.matches.some(t=>t.route.middleware)?GT(e,()=>iw(e)):iw(e)}function GT(e,t){return BM(e,t,i=>i,QM,n);function n(i,o,l){if(l)return Promise.resolve(Object.assign(l.value,{[o]:{type:"error",result:i}}));{let{matches:u}=e,f=Math.min(u.findIndex(p=>p.route.id===o)||0,u.findIndex(p=>p.unstable_shouldCallHandler())||0),h=Zi(u,u[f].route.id).route.id;return Promise.resolve({[h]:{type:"error",result:i}})}}}async function BM(e,t,n,i,o){let{matches:l,request:u,params:f,context:h}=e,p=l.flatMap(y=>y.route.middleware?y.route.middleware.map(_=>[y.route.id,_]):[]);return await YT({request:u,params:f,context:h},p,t,n,i,o)}async function YT(e,t,n,i,o,l,u=0){let{request:f}=e;if(f.signal.aborted)throw f.signal.reason??new Error(`Request aborted: ${f.method} ${f.url}`);let h=t[u];if(!h)return await n();let[p,g]=h,y,_=async()=>{if(y)throw new Error("You may only call `next()` once per middleware");try{return y={value:await YT(e,t,n,i,o,l,u+1)},y.value}catch(S){return y={value:await l(S,p,y)},y.value}};try{let S=await g(e,_),w=S!=null?i(S):void 0;return o(w)?w:y?w??y.value:(y={value:await _()},y.value)}catch(S){return await l(S,p,y)}}function WT(e,t,n,i,o){let l=VT({key:"middleware",route:i.route,manifest:t,mapRouteProperties:e}),u=$M(i.route,_n(n.method)?"action":"loader",t,e,o);return{middleware:l,route:u.lazyRoutePromise,handler:u.lazyHandlerPromise}}function vy(e,t,n,i,o,l,u,f=null){let h=!1,p=WT(e,t,n,i,o);return{...i,_lazyPromises:p,shouldLoad:u,unstable_shouldRevalidateArgs:f,unstable_shouldCallHandler(g){return h=!0,f?typeof g=="boolean"?Nf(i,{...f,defaultShouldRevalidate:g}):Nf(i,f):u},resolve(g){return h||u||g&&!_n(n.method)&&(i.route.lazy||i.route.loader)?FM({request:n,match:i,lazyHandlerPromise:p?.handler,lazyRoutePromise:p?.route,handlerOverride:g,scopedContext:l}):Promise.resolve({type:"data",result:void 0})}}}function xa(e,t,n,i,o,l,u,f=null){return i.map(h=>h.route.id!==o.route.id?{...h,shouldLoad:!1,unstable_shouldRevalidateArgs:f,unstable_shouldCallHandler:()=>!1,_lazyPromises:WT(e,t,n,h,l),resolve:()=>Promise.resolve({type:"data",result:void 0})}:vy(e,t,n,h,l,u,!0,f))}async function HM(e,t,n,i,o,l){n.some(p=>p._lazyPromises?.middleware)&&await Promise.all(n.map(p=>p._lazyPromises?.middleware));let u={request:t,params:n[0].params,context:o,matches:n},h=await e({...u,fetcherKey:i,runClientMiddleware:p=>{let g=u;return GT(g,()=>p({...g,fetcherKey:i,runClientMiddleware:()=>{throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler")}}))}});try{await Promise.all(n.flatMap(p=>[p._lazyPromises?.handler,p._lazyPromises?.route]))}catch{}return h}async function FM({request:e,match:t,lazyHandlerPromise:n,lazyRoutePromise:i,handlerOverride:o,scopedContext:l}){let u,f,h=_n(e.method),p=h?"action":"loader",g=y=>{let _,S=new Promise((T,A)=>_=A);f=()=>_(),e.signal.addEventListener("abort",f);let w=T=>typeof y!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${p}" [routeId: ${t.route.id}]`)):y({request:e,params:t.params,context:l},...T!==void 0?[T]:[]),O=(async()=>{try{return{type:"data",result:await(o?o(A=>w(A)):w())}}catch(T){return{type:"error",result:T}}})();return Promise.race([O,S])};try{let y=h?t.route.action:t.route.loader;if(n||i)if(y){let _,[S]=await Promise.all([g(y).catch(w=>{_=w}),n,i]);if(_!==void 0)throw _;u=S}else{await n;let _=h?t.route.action:t.route.loader;if(_)[u]=await Promise.all([g(_),i]);else if(p==="action"){let S=new URL(e.url),w=S.pathname+S.search;throw Yn(405,{method:e.method,pathname:w,routeId:t.route.id})}else return{type:"data",result:void 0}}else if(y)u=await g(y);else{let _=new URL(e.url),S=_.pathname+_.search;throw Yn(404,{pathname:S})}}catch(y){return{type:"error",result:y}}finally{f&&e.signal.removeEventListener("abort",f)}return u}async function qM(e){let t=e.headers.get("Content-Type");return t&&/\bapplication\/json\b/.test(t)?e.body==null?null:e.json():e.text()}async function VM(e){let{result:t,type:n}=e;if(KT(t)){let i;try{i=await qM(t)}catch(o){return{type:"error",error:o}}return n==="error"?{type:"error",error:new Of(t.status,t.statusText,i),statusCode:t.status,headers:t.headers}:{type:"data",data:i,statusCode:t.status,headers:t.headers}}return n==="error"?uw(t)?t.data instanceof Error?{type:"error",error:t.data,statusCode:t.init?.status,headers:t.init?.headers?new Headers(t.init.headers):void 0}:{type:"error",error:new Of(t.init?.status||500,void 0,t.data),statusCode:$c(t)?t.status:void 0,headers:t.init?.headers?new Headers(t.init.headers):void 0}:{type:"error",error:t,statusCode:$c(t)?t.status:void 0}:uw(t)?{type:"data",data:t.data,statusCode:t.init?.status,headers:t.init?.headers?new Headers(t.init.headers):void 0}:{type:"data",data:t}}function GM(e,t,n,i,o){let l=e.headers.get("Location");if(Ue(l,"Redirects returned/thrown from loaders/actions must have a Location header"),!gv(l)){let u=i.slice(0,i.findIndex(f=>f.route.id===n)+1);l=gy(new URL(t.url),u,o,l),e.headers.set("Location",l)}return e}function sw(e,t,n){if(gv(e)){let i=e,o=i.startsWith("//")?new URL(t.protocol+i):new URL(i),l=Kn(o.pathname,n)!=null;if(o.origin===t.origin&&l)return o.pathname+o.search+o.hash}return e}function ba(e,t,n,i){let o=e.createURL(QT(t)).toString(),l={signal:n};if(i&&_n(i.formMethod)){let{formMethod:u,formEncType:f}=i;l.method=u.toUpperCase(),f==="application/json"?(l.headers=new Headers({"Content-Type":f}),l.body=JSON.stringify(i.json)):f==="text/plain"?l.body=i.text:f==="application/x-www-form-urlencoded"&&i.formData?l.body=_y(i.formData):l.body=i.formData}return new Request(o,l)}function _y(e){let t=new URLSearchParams;for(let[n,i]of e.entries())t.append(n,typeof i=="string"?i:i.name);return t}function ow(e){let t=new FormData;for(let[n,i]of e.entries())t.append(n,i);return t}function YM(e,t,n,i=!1,o=!1){let l={},u=null,f,h=!1,p={},g=n&&Nn(n[1])?n[1].error:void 0;return e.forEach(y=>{if(!(y.route.id in t))return;let _=y.route.id,S=t[_];if(Ue(!to(S),"Cannot handle redirect results in processLoaderData"),Nn(S)){let w=S.error;if(g!==void 0&&(w=g,g=void 0),u=u||{},o)u[_]=w;else{let O=Zi(e,_);u[O.route.id]==null&&(u[O.route.id]=w)}i||(l[_]=FT),h||(h=!0,f=$c(S.error)?S.error.status:500),S.headers&&(p[_]=S.headers)}else l[_]=S.data,S.statusCode&&S.statusCode!==200&&!h&&(f=S.statusCode),S.headers&&(p[_]=S.headers)}),g!==void 0&&n&&(u={[n[0]]:g},n[2]&&(l[n[2]]=void 0)),{loaderData:l,errors:u,statusCode:f||200,loaderHeaders:p}}function aw(e,t,n,i,o,l){let{loaderData:u,errors:f}=YM(t,n,i);return o.filter(h=>!h.matches||h.matches.some(p=>p.shouldLoad)).forEach(h=>{let{key:p,match:g,controller:y}=h;if(y&&y.signal.aborted)return;let _=l[p];if(Ue(_,"Did not find corresponding fetcher result"),Nn(_)){let S=Zi(e.matches,g?.route.id);f&&f[S.route.id]||(f={...f,[S.route.id]:_.error}),e.fetchers.delete(p)}else if(to(_))Ue(!1,"Unhandled fetcher revalidation redirect");else{let S=Qi(_.data);e.fetchers.set(p,S)}}),{loaderData:u,errors:f}}function lw(e,t,n,i){let o=Object.entries(t).filter(([,l])=>l!==FT).reduce((l,[u,f])=>(l[u]=f,l),{});for(let l of n){let u=l.route.id;if(!t.hasOwnProperty(u)&&e.hasOwnProperty(u)&&l.route.loader&&(o[u]=e[u]),i&&i.hasOwnProperty(u))break}return o}function cw(e){return e?Nn(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function Zi(e,t){return(t?e.slice(0,e.findIndex(i=>i.route.id===t)+1):[...e]).reverse().find(i=>i.route.hasErrorBoundary===!0)||e[0]}function Hd(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Yn(e,{pathname:t,routeId:n,method:i,type:o,message:l}={}){let u="Unknown Server Error",f="Unknown @remix-run/router error";return e===400?(u="Bad Request",i&&t&&n?f=`You made a ${i} request to "${t}" but did not provide a \`loader\` for route "${n}", so there is no way to handle the request.`:o==="invalid-body"&&(f="Unable to encode submission body")):e===403?(u="Forbidden",f=`Route "${n}" does not match URL "${t}"`):e===404?(u="Not Found",f=`No route matches URL "${t}"`):e===405&&(u="Method Not Allowed",i&&t&&n?f=`You made a ${i.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${n}", so there is no way to handle the request.`:i&&(f=`Invalid request method "${i.toUpperCase()}"`)),new Of(e||500,u,new Error(f),!0)}function Fd(e){let t=Object.entries(e);for(let n=t.length-1;n>=0;n--){let[i,o]=t[n];if(to(o))return{key:i,result:o}}}function QT(e){let t=typeof e=="string"?yi(e):e;return ls({...t,hash:""})}function WM(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function QM(e){return e!=null&&typeof e=="object"&&Object.entries(e).every(([t,n])=>typeof t=="string"&&KM(n))}function KM(e){return e!=null&&typeof e=="object"&&"type"in e&&"result"in e&&(e.type==="data"||e.type==="error")}function XM(e){return KT(e.result)&&DM.has(e.result.status)}function Nn(e){return e.type==="error"}function to(e){return(e&&e.type)==="redirect"}function uw(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function KT(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function ZM(e){return IM.has(e.toUpperCase())}function _n(e){return RM.has(e.toUpperCase())}function yv(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function hf(e,t){let n=typeof t=="string"?yi(t).search:t.search;if(e[e.length-1].route.index&&yv(n||""))return e[e.length-1];let i=zT(e);return i[i.length-1]}function dw(e){let{formMethod:t,formAction:n,formEncType:i,text:o,formData:l,json:u}=e;if(!(!t||!n||!i)){if(o!=null)return{formMethod:t,formAction:n,formEncType:i,formData:void 0,json:void 0,text:o};if(l!=null)return{formMethod:t,formAction:n,formEncType:i,formData:l,json:void 0,text:void 0};if(u!==void 0)return{formMethod:t,formAction:n,formEncType:i,formData:void 0,json:u,text:void 0}}}function Sg(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function JM(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function ic(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function ek(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function Qi(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function tk(e,t){try{let n=e.sessionStorage.getItem(HT);if(n){let i=JSON.parse(n);for(let[o,l]of Object.entries(i||{}))l&&Array.isArray(l)&&t.set(o,new Set(l||[]))}}catch{}}function nk(e,t){if(t.size>0){let n={};for(let[i,o]of t)n[i]=[...o];try{e.sessionStorage.setItem(HT,JSON.stringify(n))}catch(i){It(!1,`Failed to save applied view transitions in sessionStorage (${i}).`)}}}function rk(){let e,t,n=new Promise((i,o)=>{e=async l=>{i(l);try{await n}catch{}},t=async l=>{o(l);try{await n}catch{}}});return{promise:n,resolve:e,reject:t}}var To=C.createContext(null);To.displayName="DataRouter";var cu=C.createContext(null);cu.displayName="DataRouterState";C.createContext(!1);var vv=C.createContext({isTransitioning:!1});vv.displayName="ViewTransition";var XT=C.createContext(new Map);XT.displayName="Fetchers";var ik=C.createContext(null);ik.displayName="Await";var vr=C.createContext(null);vr.displayName="Navigation";var Eh=C.createContext(null);Eh.displayName="Location";var er=C.createContext({outlet:null,matches:[],isDataRoute:!1});er.displayName="Route";var _v=C.createContext(null);_v.displayName="RouteError";function sk(e,{relative:t}={}){Ue(Ga(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=C.useContext(vr),{hash:o,pathname:l,search:u}=uu(e,{relative:t}),f=l;return n!=="/"&&(f=l==="/"?n:Ir([n,l])),i.createHref({pathname:f,search:u,hash:o})}function Ga(){return C.useContext(Eh)!=null}function vi(){return Ue(Ga(),"useLocation() may be used only in the context of a <Router> component."),C.useContext(Eh).location}var ZT="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function JT(e){C.useContext(vr).static||C.useLayoutEffect(e)}function Co(){let{isDataRoute:e}=C.useContext(er);return e?Sk():ok()}function ok(){Ue(Ga(),"useNavigate() may be used only in the context of a <Router> component.");let e=C.useContext(To),{basename:t,navigator:n}=C.useContext(vr),{matches:i}=C.useContext(er),{pathname:o}=vi(),l=JSON.stringify(Sh(i)),u=C.useRef(!1);return JT(()=>{u.current=!0}),C.useCallback((h,p={})=>{if(It(u.current,ZT),!u.current)return;if(typeof h=="number"){n.go(h);return}let g=wh(h,JSON.parse(l),o,p.relative==="path");e==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:Ir([t,g.pathname])),(p.replace?n.replace:n.push)(g,p.state,p)},[t,n,l,o,e])}var ak=C.createContext(null);function lk(e){let t=C.useContext(er).outlet;return t&&C.createElement(ak.Provider,{value:e},t)}function ck(){let{matches:e}=C.useContext(er),t=e[e.length-1];return t?t.params:{}}function uu(e,{relative:t}={}){let{matches:n}=C.useContext(er),{pathname:i}=vi(),o=JSON.stringify(Sh(n));return C.useMemo(()=>wh(e,JSON.parse(o),i,t==="path"),[e,o,i,t])}function uk(e,t,n,i,o){Ue(Ga(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=C.useContext(vr),{matches:u}=C.useContext(er),f=u[u.length-1],h=f?f.params:{},p=f?f.pathname:"/",g=f?f.pathnameBase:"/",y=f&&f.route;{let k=y&&y.path||"";eC(p,!y||k.endsWith("*")||k.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${k}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${k}"> to <Route path="${k==="/"?"*":`${k}/*`}">.`)}let _=vi(),S;S=_;let w=S.pathname||"/",O=w;if(g!=="/"){let k=g.replace(/^\//,"").split("/");O="/"+w.replace(/^\//,"").split("/").slice(k.length).join("/")}let T=Xi(e,{pathname:O});return It(y||T!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),It(T==null||T[T.length-1].route.element!==void 0||T[T.length-1].route.Component!==void 0||T[T.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),mk(T&&T.map(k=>Object.assign({},k,{params:Object.assign({},h,k.params),pathname:Ir([g,l.encodeLocation?l.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?g:Ir([g,l.encodeLocation?l.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),u,n,i,o)}function dk(){let e=bk(),t=$c(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},u=null;return console.error("Error handled by React Router default ErrorBoundary:",e),u=C.createElement(C.Fragment,null,C.createElement("p",null,"💿 Hey developer 👋"),C.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",C.createElement("code",{style:l},"ErrorBoundary")," or"," ",C.createElement("code",{style:l},"errorElement")," prop on your route.")),C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:o},n):null,u)}var fk=C.createElement(dk,null),hk=class extends C.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.unstable_onError?this.props.unstable_onError(e,t):console.error("React Router caught the following error during render",e)}render(){return this.state.error!==void 0?C.createElement(er.Provider,{value:this.props.routeContext},C.createElement(_v.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function pk({routeContext:e,match:t,children:n}){let i=C.useContext(To);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),C.createElement(er.Provider,{value:e},n)}function mk(e,t=[],n=null,i=null,o=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,u=n?.errors;if(u!=null){let p=l.findIndex(g=>g.route.id&&u?.[g.route.id]!==void 0);Ue(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,p+1))}let f=!1,h=-1;if(n)for(let p=0;p<l.length;p++){let g=l[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(h=p),g.route.id){let{loaderData:y,errors:_}=n,S=g.route.loader&&!y.hasOwnProperty(g.route.id)&&(!_||_[g.route.id]===void 0);if(g.route.lazy||S){f=!0,h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}return l.reduceRight((p,g,y)=>{let _,S=!1,w=null,O=null;n&&(_=u&&g.route.id?u[g.route.id]:void 0,w=g.route.errorElement||fk,f&&(h<0&&y===0?(eC("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,O=null):h===y&&(S=!0,O=g.route.hydrateFallbackElement||null)));let T=t.concat(l.slice(0,y+1)),A=()=>{let k;return _?k=w:S?k=O:g.route.Component?k=C.createElement(g.route.Component,null):g.route.element?k=g.route.element:k=p,C.createElement(pk,{match:g,routeContext:{outlet:p,matches:T,isDataRoute:n!=null},children:k})};return n&&(g.route.ErrorBoundary||g.route.errorElement||y===0)?C.createElement(hk,{location:n.location,revalidation:n.revalidation,component:w,error:_,children:A(),routeContext:{outlet:null,matches:T,isDataRoute:!0},unstable_onError:i}):A()},null)}function bv(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function gk(e){let t=C.useContext(To);return Ue(t,bv(e)),t}function yk(e){let t=C.useContext(cu);return Ue(t,bv(e)),t}function vk(e){let t=C.useContext(er);return Ue(t,bv(e)),t}function Sv(e){let t=vk(e),n=t.matches[t.matches.length-1];return Ue(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function _k(){return Sv("useRouteId")}function bk(){let e=C.useContext(_v),t=yk("useRouteError"),n=Sv("useRouteError");return e!==void 0?e:t.errors?.[n]}function Sk(){let{router:e}=gk("useNavigate"),t=Sv("useNavigate"),n=C.useRef(!1);return JT(()=>{n.current=!0}),C.useCallback(async(o,l={})=>{It(n.current,ZT),n.current&&(typeof o=="number"?e.navigate(o):await e.navigate(o,{fromRouteId:t,...l}))},[e,t])}var fw={};function eC(e,t,n){!t&&!fw[e]&&(fw[e]=!0,It(!1,n))}var hw={};function pw(e,t){!e&&!hw[t]&&(hw[t]=!0,console.warn(t))}function wk(e){let t={hasErrorBoundary:e.hasErrorBoundary||e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&(e.element&&It(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(t,{element:C.createElement(e.Component),Component:void 0})),e.HydrateFallback&&(e.hydrateFallbackElement&&It(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(t,{hydrateFallbackElement:C.createElement(e.HydrateFallback),HydrateFallback:void 0})),e.ErrorBoundary&&(e.errorElement&&It(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(t,{errorElement:C.createElement(e.ErrorBoundary),ErrorBoundary:void 0})),t}var Ek=["HydrateFallback","hydrateFallbackElement"],xk=class{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=i=>{this.status==="pending"&&(this.status="resolved",t(i))},this.reject=i=>{this.status==="pending"&&(this.status="rejected",n(i))}})}};function Tk({router:e,flushSync:t,unstable_onError:n}){let[i,o]=C.useState(e.state),[l,u]=C.useState(),[f,h]=C.useState({isTransitioning:!1}),[p,g]=C.useState(),[y,_]=C.useState(),[S,w]=C.useState(),O=C.useRef(new Map),T=C.useCallback(M=>{o(R=>(M.errors&&n&&Object.entries(M.errors).forEach(([P,V])=>{R.errors?.[P]!==V&&n(V)}),M))},[n]),A=C.useCallback((M,{deletedFetchers:R,flushSync:P,viewTransitionOpts:V})=>{M.fetchers.forEach((B,z)=>{B.data!==void 0&&O.current.set(z,B.data)}),R.forEach(B=>O.current.delete(B)),pw(P===!1||t!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let H=e.window!=null&&e.window.document!=null&&typeof e.window.document.startViewTransition=="function";if(pw(V==null||H,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!V||!H){t&&P?t(()=>T(M)):C.startTransition(()=>T(M));return}if(t&&P){t(()=>{y&&(p&&p.resolve(),y.skipTransition()),h({isTransitioning:!0,flushSync:!0,currentLocation:V.currentLocation,nextLocation:V.nextLocation})});let B=e.window.document.startViewTransition(()=>{t(()=>T(M))});B.finished.finally(()=>{t(()=>{g(void 0),_(void 0),u(void 0),h({isTransitioning:!1})})}),t(()=>_(B));return}y?(p&&p.resolve(),y.skipTransition(),w({state:M,currentLocation:V.currentLocation,nextLocation:V.nextLocation})):(u(M),h({isTransitioning:!0,flushSync:!1,currentLocation:V.currentLocation,nextLocation:V.nextLocation}))},[e.window,t,y,p,T]);C.useLayoutEffect(()=>e.subscribe(A),[e,A]),C.useEffect(()=>{f.isTransitioning&&!f.flushSync&&g(new xk)},[f]),C.useEffect(()=>{if(p&&l&&e.window){let M=l,R=p.promise,P=e.window.document.startViewTransition(async()=>{C.startTransition(()=>T(M)),await R});P.finished.finally(()=>{g(void 0),_(void 0),u(void 0),h({isTransitioning:!1})}),_(P)}},[l,p,e.window,T]),C.useEffect(()=>{p&&l&&i.location.key===l.location.key&&p.resolve()},[p,y,i.location,l]),C.useEffect(()=>{!f.isTransitioning&&S&&(u(S.state),h({isTransitioning:!0,flushSync:!1,currentLocation:S.currentLocation,nextLocation:S.nextLocation}),w(void 0))},[f.isTransitioning,S]);let k=C.useMemo(()=>({createHref:e.createHref,encodeLocation:e.encodeLocation,go:M=>e.navigate(M),push:(M,R,P)=>e.navigate(M,{state:R,preventScrollReset:P?.preventScrollReset}),replace:(M,R,P)=>e.navigate(M,{replace:!0,state:R,preventScrollReset:P?.preventScrollReset})}),[e]),x=e.basename||"/",I=C.useMemo(()=>({router:e,navigator:k,static:!1,basename:x,unstable_onError:n}),[e,k,x,n]);return C.createElement(C.Fragment,null,C.createElement(To.Provider,{value:I},C.createElement(cu.Provider,{value:i},C.createElement(XT.Provider,{value:O.current},C.createElement(vv.Provider,{value:f},C.createElement(Ik,{basename:x,location:i.location,navigationType:i.historyAction,navigator:k},C.createElement(Ck,{routes:e.routes,future:e.future,state:i,unstable_onError:n})))))),null)}var Ck=C.memo(Rk);function Rk({routes:e,future:t,state:n,unstable_onError:i}){return uk(e,void 0,n,i,t)}function wv({to:e,replace:t,state:n,relative:i}){Ue(Ga(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=C.useContext(vr);It(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=C.useContext(er),{pathname:u}=vi(),f=Co(),h=wh(e,Sh(l),u,i==="path"),p=JSON.stringify(h);return C.useEffect(()=>{f(JSON.parse(p),{replace:t,state:n,relative:i})},[f,p,i,t,n]),null}function Ak(e){return lk(e.context)}function or(e){Ue(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ik({basename:e="/",children:t=null,location:n,navigationType:i="POP",navigator:o,static:l=!1}){Ue(!Ga(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=e.replace(/^\/*/,"/"),f=C.useMemo(()=>({basename:u,navigator:o,static:l,future:{}}),[u,o,l]);typeof n=="string"&&(n=yi(n));let{pathname:h="/",search:p="",hash:g="",state:y=null,key:_="default"}=n,S=C.useMemo(()=>{let w=Kn(h,u);return w==null?null:{location:{pathname:w,search:p,hash:g,state:y,key:_},navigationType:i}},[u,h,p,g,y,_,i]);return It(S!=null,`<Router basename="${u}"> is not able to match the URL "${h}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:C.createElement(vr.Provider,{value:f},C.createElement(Eh.Provider,{children:t,value:S}))}function by(e,t=[]){let n=[];return C.Children.forEach(e,(i,o)=>{if(!C.isValidElement(i))return;let l=[...t,o];if(i.type===C.Fragment){n.push.apply(n,by(i.props.children,l));return}Ue(i.type===or,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ue(!i.props.index||!i.props.children,"An index route cannot have child routes.");let u={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(u.children=by(i.props.children,l)),n.push(u)}),n}var Dk=by,pf="get",mf="application/x-www-form-urlencoded";function xh(e){return e!=null&&typeof e.tagName=="string"}function Ok(e){return xh(e)&&e.tagName.toLowerCase()==="button"}function Nk(e){return xh(e)&&e.tagName.toLowerCase()==="form"}function Mk(e){return xh(e)&&e.tagName.toLowerCase()==="input"}function kk(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Lk(e,t){return e.button===0&&(!t||t==="_self")&&!kk(e)}var qd=null;function Pk(){if(qd===null)try{new FormData(document.createElement("form"),0),qd=!1}catch{qd=!0}return qd}var jk=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function wg(e){return e!=null&&!jk.has(e)?(It(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${mf}"`),null):e}function Uk(e,t){let n,i,o,l,u;if(Nk(e)){let f=e.getAttribute("action");i=f?Kn(f,t):null,n=e.getAttribute("method")||pf,o=wg(e.getAttribute("enctype"))||mf,l=new FormData(e)}else if(Ok(e)||Mk(e)&&(e.type==="submit"||e.type==="image")){let f=e.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=e.getAttribute("formaction")||f.getAttribute("action");if(i=h?Kn(h,t):null,n=e.getAttribute("formmethod")||f.getAttribute("method")||pf,o=wg(e.getAttribute("formenctype"))||wg(f.getAttribute("enctype"))||mf,l=new FormData(f,e),!Pk()){let{name:p,type:g,value:y}=e;if(g==="image"){let _=p?`${p}.`:"";l.append(`${_}x`,"0"),l.append(`${_}y`,"0")}else p&&l.append(p,y)}}else{if(xh(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=pf,i=null,o=mf,u=e}return l&&o==="text/plain"&&(u=l,l=void 0),{action:i,method:n.toLowerCase(),encType:o,formData:l,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ev(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function $k(e,t,n){let i=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return i.pathname==="/"?i.pathname=`_root.${n}`:t&&Kn(i.pathname,t)==="/"?i.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${n}`,i}async function zk(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Bk(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Hk(e,t,n){let i=await Promise.all(e.map(async o=>{let l=t.routes[o.route.id];if(l){let u=await zk(l,n);return u.links?u.links():[]}return[]}));return Gk(i.flat(1).filter(Bk).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function mw(e,t,n,i,o,l){let u=(h,p)=>n[p]?h.route.id!==n[p].route.id:!0,f=(h,p)=>n[p].pathname!==h.pathname||n[p].route.path?.endsWith("*")&&n[p].params["*"]!==h.params["*"];return l==="assets"?t.filter((h,p)=>u(h,p)||f(h,p)):l==="data"?t.filter((h,p)=>{let g=i.routes[h.route.id];if(!g||!g.hasLoader)return!1;if(u(h,p)||f(h,p))return!0;if(h.route.shouldRevalidate){let y=h.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function Fk(e,t,{includeHydrateFallback:n}={}){return qk(e.map(i=>{let o=t.routes[i.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function qk(e){return[...new Set(e)]}function Vk(e){let t={},n=Object.keys(e).sort();for(let i of n)t[i]=e[i];return t}function Gk(e,t){let n=new Set;return new Set(t),e.reduce((i,o)=>{let l=JSON.stringify(Vk(o));return n.has(l)||(n.add(l),i.push({key:l,link:o})),i},[])}function tC(){let e=C.useContext(To);return Ev(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Yk(){let e=C.useContext(cu);return Ev(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var xv=C.createContext(void 0);xv.displayName="FrameworkContext";function nC(){let e=C.useContext(xv);return Ev(e,"You must render this element inside a <HydratedRouter> element"),e}function Wk(e,t){let n=C.useContext(xv),[i,o]=C.useState(!1),[l,u]=C.useState(!1),{onFocus:f,onBlur:h,onMouseEnter:p,onMouseLeave:g,onTouchStart:y}=t,_=C.useRef(null);C.useEffect(()=>{if(e==="render"&&u(!0),e==="viewport"){let O=A=>{A.forEach(k=>{u(k.isIntersecting)})},T=new IntersectionObserver(O,{threshold:.5});return _.current&&T.observe(_.current),()=>{T.disconnect()}}},[e]),C.useEffect(()=>{if(i){let O=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(O)}}},[i]);let S=()=>{o(!0)},w=()=>{o(!1),u(!1)};return n?e!=="intent"?[l,_,{}]:[l,_,{onFocus:sc(f,S),onBlur:sc(h,w),onMouseEnter:sc(p,S),onMouseLeave:sc(g,w),onTouchStart:sc(y,S)}]:[!1,_,{}]}function sc(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Qk({page:e,...t}){let{router:n}=tC(),i=C.useMemo(()=>Xi(n.routes,e,n.basename),[n.routes,e,n.basename]);return i?C.createElement(Xk,{page:e,matches:i,...t}):null}function Kk(e){let{manifest:t,routeModules:n}=nC(),[i,o]=C.useState([]);return C.useEffect(()=>{let l=!1;return Hk(e,t,n).then(u=>{l||o(u)}),()=>{l=!0}},[e,t,n]),i}function Xk({page:e,matches:t,...n}){let i=vi(),{manifest:o,routeModules:l}=nC(),{basename:u}=tC(),{loaderData:f,matches:h}=Yk(),p=C.useMemo(()=>mw(e,t,h,o,i,"data"),[e,t,h,o,i]),g=C.useMemo(()=>mw(e,t,h,o,i,"assets"),[e,t,h,o,i]),y=C.useMemo(()=>{if(e===i.pathname+i.search+i.hash)return[];let w=new Set,O=!1;if(t.forEach(A=>{let k=o.routes[A.route.id];!k||!k.hasLoader||(!p.some(x=>x.route.id===A.route.id)&&A.route.id in f&&l[A.route.id]?.shouldRevalidate||k.hasClientLoader?O=!0:w.add(A.route.id))}),w.size===0)return[];let T=$k(e,u,"data");return O&&w.size>0&&T.searchParams.set("_routes",t.filter(A=>w.has(A.route.id)).map(A=>A.route.id).join(",")),[T.pathname+T.search]},[u,f,i,o,p,t,e,l]),_=C.useMemo(()=>Fk(g,o),[g,o]),S=Kk(g);return C.createElement(C.Fragment,null,y.map(w=>C.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...n})),_.map(w=>C.createElement("link",{key:w,rel:"modulepreload",href:w,...n})),S.map(({key:w,link:O})=>C.createElement("link",{key:w,nonce:n.nonce,...O})))}function Zk(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var rC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{rC&&(window.__reactRouterVersion="7.9.1")}catch{}function Jk(e,t){return LM({basename:t?.basename,getContext:t?.getContext,future:t?.future,history:eM({window:t?.window}),hydrationData:e2(),routes:e,mapRouteProperties:wk,hydrationRouteProperties:Ek,dataStrategy:t?.dataStrategy,patchRoutesOnNavigation:t?.patchRoutesOnNavigation,window:t?.window}).initialize()}function e2(){let e=window?.__staticRouterHydrationData;return e&&e.errors&&(e={...e,errors:t2(e.errors)}),e}function t2(e){if(!e)return null;let t=Object.entries(e),n={};for(let[i,o]of t)if(o&&o.__type==="RouteErrorResponse")n[i]=new Of(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){if(o.__subType){let l=window[o.__subType];if(typeof l=="function")try{let u=new l(o.message);u.stack="",n[i]=u}catch{}}if(n[i]==null){let l=new Error(o.message);l.stack="",n[i]=l}}else n[i]=o;return n}var iC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ms=C.forwardRef(function({onClick:t,discover:n="render",prefetch:i="none",relative:o,reloadDocument:l,replace:u,state:f,target:h,to:p,preventScrollReset:g,viewTransition:y,..._},S){let{basename:w}=C.useContext(vr),O=typeof p=="string"&&iC.test(p),T,A=!1;if(typeof p=="string"&&O&&(T=p,rC))try{let H=new URL(window.location.href),B=p.startsWith("//")?new URL(H.protocol+p):new URL(p),z=Kn(B.pathname,w);B.origin===H.origin&&z!=null?p=z+B.search+B.hash:A=!0}catch{It(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let k=sk(p,{relative:o}),[x,I,M]=Wk(i,_),R=i2(p,{replace:u,state:f,target:h,preventScrollReset:g,relative:o,viewTransition:y});function P(H){t&&t(H),H.defaultPrevented||R(H)}let V=C.createElement("a",{..._,...M,href:T||k,onClick:A||l?t:P,ref:Zk(S,I),target:h,"data-discover":!O&&n==="render"?"true":void 0});return x&&!O?C.createElement(C.Fragment,null,V,C.createElement(Qk,{page:k})):V});ms.displayName="Link";var Tv=C.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:i="",end:o=!1,style:l,to:u,viewTransition:f,children:h,...p},g){let y=uu(u,{relative:p.relative}),_=vi(),S=C.useContext(cu),{navigator:w,basename:O}=C.useContext(vr),T=S!=null&&c2(y)&&f===!0,A=w.encodeLocation?w.encodeLocation(y).pathname:y.pathname,k=_.pathname,x=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;n||(k=k.toLowerCase(),x=x?x.toLowerCase():null,A=A.toLowerCase()),x&&O&&(x=Kn(x,O)||x);const I=A!=="/"&&A.endsWith("/")?A.length-1:A.length;let M=k===A||!o&&k.startsWith(A)&&k.charAt(I)==="/",R=x!=null&&(x===A||!o&&x.startsWith(A)&&x.charAt(A.length)==="/"),P={isActive:M,isPending:R,isTransitioning:T},V=M?t:void 0,H;typeof i=="function"?H=i(P):H=[i,M?"active":null,R?"pending":null,T?"transitioning":null].filter(Boolean).join(" ");let B=typeof l=="function"?l(P):l;return C.createElement(ms,{...p,"aria-current":V,className:H,ref:g,style:B,to:u,viewTransition:f},typeof h=="function"?h(P):h)});Tv.displayName="NavLink";var n2=C.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:i,replace:o,state:l,method:u=pf,action:f,onSubmit:h,relative:p,preventScrollReset:g,viewTransition:y,..._},S)=>{let w=a2(),O=l2(f,{relative:p}),T=u.toLowerCase()==="get"?"get":"post",A=typeof f=="string"&&iC.test(f),k=x=>{if(h&&h(x),x.defaultPrevented)return;x.preventDefault();let I=x.nativeEvent.submitter,M=I?.getAttribute("formmethod")||u;w(I||x.currentTarget,{fetcherKey:t,method:M,navigate:n,replace:o,state:l,relative:p,preventScrollReset:g,viewTransition:y})};return C.createElement("form",{ref:S,method:T,action:O,onSubmit:i?h:k,..._,"data-discover":!A&&e==="render"?"true":void 0})});n2.displayName="Form";function r2(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function sC(e){let t=C.useContext(To);return Ue(t,r2(e)),t}function i2(e,{target:t,replace:n,state:i,preventScrollReset:o,relative:l,viewTransition:u}={}){let f=Co(),h=vi(),p=uu(e,{relative:l});return C.useCallback(g=>{if(Lk(g,t)){g.preventDefault();let y=n!==void 0?n:ls(h)===ls(p);f(e,{replace:y,state:i,preventScrollReset:o,relative:l,viewTransition:u})}},[h,f,p,n,i,t,e,o,l,u])}var s2=0,o2=()=>`__${String(++s2)}__`;function a2(){let{router:e}=sC("useSubmit"),{basename:t}=C.useContext(vr),n=_k();return C.useCallback(async(i,o={})=>{let{action:l,method:u,encType:f,formData:h,body:p}=Uk(i,t);if(o.navigate===!1){let g=o.fetcherKey||o2();await e.fetch(g,n,o.action||l,{preventScrollReset:o.preventScrollReset,formData:h,body:p,formMethod:o.method||u,formEncType:o.encType||f,flushSync:o.flushSync})}else await e.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:h,body:p,formMethod:o.method||u,formEncType:o.encType||f,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[e,t,n])}function l2(e,{relative:t}={}){let{basename:n}=C.useContext(vr),i=C.useContext(er);Ue(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),l={...uu(e||".",{relative:t})},u=vi();if(e==null){l.search=u.search;let f=new URLSearchParams(l.search),h=f.getAll("index");if(h.some(g=>g==="")){f.delete("index"),h.filter(y=>y).forEach(y=>f.append("index",y));let g=f.toString();l.search=g?`?${g}`:""}}return(!e||e===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(l.pathname=l.pathname==="/"?n:Ir([n,l.pathname])),ls(l)}function c2(e,{relative:t}={}){let n=C.useContext(vv);Ue(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=sC("useViewTransitionState"),o=uu(e,{relative:t});if(!n.isTransitioning)return!1;let l=Kn(n.currentLocation.pathname,i)||n.currentLocation.pathname,u=Kn(n.nextLocation.pathname,i)||n.nextLocation.pathname;return Df(o.pathname,u)!=null||Df(o.pathname,l)!=null}var u2=IT();function d2(e){return C.createElement(Tk,{flushSync:u2.flushSync,...e})}var sn=function(){return sn=Object.assign||function(t){for(var n,i=1,o=arguments.length;i<o;i++){n=arguments[i];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},sn.apply(this,arguments)};function Mf(e,t,n){if(n||arguments.length===2)for(var i=0,o=t.length,l;i<o;i++)(l||!(i in t))&&(l||(l=Array.prototype.slice.call(t,0,i)),l[i]=t[i]);return e.concat(l||Array.prototype.slice.call(t))}var mt="-ms-",xc="-moz-",et="-webkit-",oC="comm",Th="rule",Cv="decl",f2="@import",aC="@keyframes",h2="@layer",lC=Math.abs,Rv=String.fromCharCode,Sy=Object.assign;function p2(e,t){return qt(e,0)^45?(((t<<2^qt(e,0))<<2^qt(e,1))<<2^qt(e,2))<<2^qt(e,3):0}function cC(e){return e.trim()}function ri(e,t){return(e=t.exec(e))?e[0]:e}function Be(e,t,n){return e.replace(t,n)}function gf(e,t,n){return e.indexOf(t,n)}function qt(e,t){return e.charCodeAt(t)|0}function Na(e,t,n){return e.slice(t,n)}function Rr(e){return e.length}function uC(e){return e.length}function _c(e,t){return t.push(e),e}function m2(e,t){return e.map(t).join("")}function gw(e,t){return e.filter(function(n){return!ri(n,t)})}var Ch=1,Ma=1,dC=0,Xn=0,Lt=0,Ya="";function Rh(e,t,n,i,o,l,u,f){return{value:e,root:t,parent:n,type:i,props:o,children:l,line:Ch,column:Ma,length:u,return:"",siblings:f}}function Ki(e,t){return Sy(Rh("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ma(e){for(;e.root;)e=Ki(e.root,{children:[e]});_c(e,e.siblings)}function g2(){return Lt}function y2(){return Lt=Xn>0?qt(Ya,--Xn):0,Ma--,Lt===10&&(Ma=1,Ch--),Lt}function dr(){return Lt=Xn<dC?qt(Ya,Xn++):0,Ma++,Lt===10&&(Ma=1,Ch++),Lt}function oo(){return qt(Ya,Xn)}function yf(){return Xn}function Ah(e,t){return Na(Ya,e,t)}function wy(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function v2(e){return Ch=Ma=1,dC=Rr(Ya=e),Xn=0,[]}function _2(e){return Ya="",e}function Eg(e){return cC(Ah(Xn-1,Ey(e===91?e+2:e===40?e+1:e)))}function b2(e){for(;(Lt=oo())&&Lt<33;)dr();return wy(e)>2||wy(Lt)>3?"":" "}function S2(e,t){for(;--t&&dr()&&!(Lt<48||Lt>102||Lt>57&&Lt<65||Lt>70&&Lt<97););return Ah(e,yf()+(t<6&&oo()==32&&dr()==32))}function Ey(e){for(;dr();)switch(Lt){case e:return Xn;case 34:case 39:e!==34&&e!==39&&Ey(Lt);break;case 40:e===41&&Ey(e);break;case 92:dr();break}return Xn}function w2(e,t){for(;dr()&&e+Lt!==57;)if(e+Lt===84&&oo()===47)break;return"/*"+Ah(t,Xn-1)+"*"+Rv(e===47?e:dr())}function E2(e){for(;!wy(oo());)dr();return Ah(e,Xn)}function x2(e){return _2(vf("",null,null,null,[""],e=v2(e),0,[0],e))}function vf(e,t,n,i,o,l,u,f,h){for(var p=0,g=0,y=u,_=0,S=0,w=0,O=1,T=1,A=1,k=0,x="",I=o,M=l,R=i,P=x;T;)switch(w=k,k=dr()){case 40:if(w!=108&&qt(P,y-1)==58){gf(P+=Be(Eg(k),"&","&\f"),"&\f",lC(p?f[p-1]:0))!=-1&&(A=-1);break}case 34:case 39:case 91:P+=Eg(k);break;case 9:case 10:case 13:case 32:P+=b2(w);break;case 92:P+=S2(yf()-1,7);continue;case 47:switch(oo()){case 42:case 47:_c(T2(w2(dr(),yf()),t,n,h),h);break;default:P+="/"}break;case 123*O:f[p++]=Rr(P)*A;case 125*O:case 59:case 0:switch(k){case 0:case 125:T=0;case 59+g:A==-1&&(P=Be(P,/\f/g,"")),S>0&&Rr(P)-y&&_c(S>32?vw(P+";",i,n,y-1,h):vw(Be(P," ","")+";",i,n,y-2,h),h);break;case 59:P+=";";default:if(_c(R=yw(P,t,n,p,g,o,f,x,I=[],M=[],y,l),l),k===123)if(g===0)vf(P,t,R,R,I,l,y,f,M);else switch(_===99&&qt(P,3)===110?100:_){case 100:case 108:case 109:case 115:vf(e,R,R,i&&_c(yw(e,R,R,0,0,o,f,x,o,I=[],y,M),M),o,M,y,f,i?I:M);break;default:vf(P,R,R,R,[""],M,0,f,M)}}p=g=S=0,O=A=1,x=P="",y=u;break;case 58:y=1+Rr(P),S=w;default:if(O<1){if(k==123)--O;else if(k==125&&O++==0&&y2()==125)continue}switch(P+=Rv(k),k*O){case 38:A=g>0?1:(P+="\f",-1);break;case 44:f[p++]=(Rr(P)-1)*A,A=1;break;case 64:oo()===45&&(P+=Eg(dr())),_=oo(),g=y=Rr(x=P+=E2(yf())),k++;break;case 45:w===45&&Rr(P)==2&&(O=0)}}return l}function yw(e,t,n,i,o,l,u,f,h,p,g,y){for(var _=o-1,S=o===0?l:[""],w=uC(S),O=0,T=0,A=0;O<i;++O)for(var k=0,x=Na(e,_+1,_=lC(T=u[O])),I=e;k<w;++k)(I=cC(T>0?S[k]+" "+x:Be(x,/&\f/g,S[k])))&&(h[A++]=I);return Rh(e,t,n,o===0?Th:f,h,p,g,y)}function T2(e,t,n,i){return Rh(e,t,n,oC,Rv(g2()),Na(e,2,-2),0,i)}function vw(e,t,n,i,o){return Rh(e,t,n,Cv,Na(e,0,i),Na(e,i+1,-1),i,o)}function fC(e,t,n){switch(p2(e,t)){case 5103:return et+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return et+e+e;case 4789:return xc+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return et+e+xc+e+mt+e+e;case 5936:switch(qt(e,t+11)){case 114:return et+e+mt+Be(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return et+e+mt+Be(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return et+e+mt+Be(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return et+e+mt+e+e;case 6165:return et+e+mt+"flex-"+e+e;case 5187:return et+e+Be(e,/(\w+).+(:[^]+)/,et+"box-$1$2"+mt+"flex-$1$2")+e;case 5443:return et+e+mt+"flex-item-"+Be(e,/flex-|-self/g,"")+(ri(e,/flex-|baseline/)?"":mt+"grid-row-"+Be(e,/flex-|-self/g,""))+e;case 4675:return et+e+mt+"flex-line-pack"+Be(e,/align-content|flex-|-self/g,"")+e;case 5548:return et+e+mt+Be(e,"shrink","negative")+e;case 5292:return et+e+mt+Be(e,"basis","preferred-size")+e;case 6060:return et+"box-"+Be(e,"-grow","")+et+e+mt+Be(e,"grow","positive")+e;case 4554:return et+Be(e,/([^-])(transform)/g,"$1"+et+"$2")+e;case 6187:return Be(Be(Be(e,/(zoom-|grab)/,et+"$1"),/(image-set)/,et+"$1"),e,"")+e;case 5495:case 3959:return Be(e,/(image-set\([^]*)/,et+"$1$`$1");case 4968:return Be(Be(e,/(.+:)(flex-)?(.*)/,et+"box-pack:$3"+mt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+et+e+e;case 4200:if(!ri(e,/flex-|baseline/))return mt+"grid-column-align"+Na(e,t)+e;break;case 2592:case 3360:return mt+Be(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(i,o){return t=o,ri(i.props,/grid-\w+-end/)})?~gf(e+(n=n[t].value),"span",0)?e:mt+Be(e,"-start","")+e+mt+"grid-row-span:"+(~gf(n,"span",0)?ri(n,/\d+/):+ri(n,/\d+/)-+ri(e,/\d+/))+";":mt+Be(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(i){return ri(i.props,/grid-\w+-start/)})?e:mt+Be(Be(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Be(e,/(.+)-inline(.+)/,et+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Rr(e)-1-t>6)switch(qt(e,t+1)){case 109:if(qt(e,t+4)!==45)break;case 102:return Be(e,/(.+:)(.+)-([^]+)/,"$1"+et+"$2-$3$1"+xc+(qt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~gf(e,"stretch",0)?fC(Be(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Be(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,o,l,u,f,h,p){return mt+o+":"+l+p+(u?mt+o+"-span:"+(f?h:+h-+l)+p:"")+e});case 4949:if(qt(e,t+6)===121)return Be(e,":",":"+et)+e;break;case 6444:switch(qt(e,qt(e,14)===45?18:11)){case 120:return Be(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+et+(qt(e,14)===45?"inline-":"")+"box$3$1"+et+"$2$3$1"+mt+"$2box$3")+e;case 100:return Be(e,":",":"+mt)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Be(e,"scroll-","scroll-snap-")+e}return e}function kf(e,t){for(var n="",i=0;i<e.length;i++)n+=t(e[i],i,e,t)||"";return n}function C2(e,t,n,i){switch(e.type){case h2:if(e.children.length)break;case f2:case Cv:return e.return=e.return||e.value;case oC:return"";case aC:return e.return=e.value+"{"+kf(e.children,i)+"}";case Th:if(!Rr(e.value=e.props.join(",")))return""}return Rr(n=kf(e.children,i))?e.return=e.value+"{"+n+"}":""}function R2(e){var t=uC(e);return function(n,i,o,l){for(var u="",f=0;f<t;f++)u+=e[f](n,i,o,l)||"";return u}}function A2(e){return function(t){t.root||(t=t.return)&&e(t)}}function I2(e,t,n,i){if(e.length>-1&&!e.return)switch(e.type){case Cv:e.return=fC(e.value,e.length,n);return;case aC:return kf([Ki(e,{value:Be(e.value,"@","@"+et)})],i);case Th:if(e.length)return m2(n=e.props,function(o){switch(ri(o,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ma(Ki(e,{props:[Be(o,/:(read-\w+)/,":"+xc+"$1")]})),ma(Ki(e,{props:[o]})),Sy(e,{props:gw(n,i)});break;case"::placeholder":ma(Ki(e,{props:[Be(o,/:(plac\w+)/,":"+et+"input-$1")]})),ma(Ki(e,{props:[Be(o,/:(plac\w+)/,":"+xc+"$1")]})),ma(Ki(e,{props:[Be(o,/:(plac\w+)/,mt+"input-$1")]})),ma(Ki(e,{props:[o]})),Sy(e,{props:gw(n,i)});break}return""})}}var D2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},On={},ka=typeof process<"u"&&On!==void 0&&(On.REACT_APP_SC_ATTR||On.SC_ATTR)||"data-styled",hC="active",pC="data-styled-version",Ih="6.1.19",Av=`/*!sc*/
`,Lf=typeof window<"u"&&typeof document<"u",O2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&On!==void 0&&On.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&On.REACT_APP_SC_DISABLE_SPEEDY!==""?On.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&On.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&On!==void 0&&On.SC_DISABLE_SPEEDY!==void 0&&On.SC_DISABLE_SPEEDY!==""&&On.SC_DISABLE_SPEEDY!=="false"&&On.SC_DISABLE_SPEEDY),Dh=Object.freeze([]),La=Object.freeze({});function N2(e,t,n){return n===void 0&&(n=La),e.theme!==n.theme&&e.theme||t||n.theme}var mC=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),M2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,k2=/(^-|-$)/g;function _w(e){return e.replace(M2,"-").replace(k2,"")}var L2=/(a)(d)/gi,Vd=52,bw=function(e){return String.fromCharCode(e+(e>25?39:97))};function xy(e){var t,n="";for(t=Math.abs(e);t>Vd;t=t/Vd|0)n=bw(t%Vd)+n;return(bw(t%Vd)+n).replace(L2,"$1-$2")}var xg,gC=5381,Sa=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},yC=function(e){return Sa(gC,e)};function P2(e){return xy(yC(e)>>>0)}function j2(e){return e.displayName||e.name||"Component"}function Tg(e){return typeof e=="string"&&!0}var vC=typeof Symbol=="function"&&Symbol.for,_C=vC?Symbol.for("react.memo"):60115,U2=vC?Symbol.for("react.forward_ref"):60112,$2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},z2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},bC={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},B2=((xg={})[U2]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},xg[_C]=bC,xg);function Sw(e){return("type"in(t=e)&&t.type.$$typeof)===_C?bC:"$$typeof"in e?B2[e.$$typeof]:$2;var t}var H2=Object.defineProperty,F2=Object.getOwnPropertyNames,ww=Object.getOwnPropertySymbols,q2=Object.getOwnPropertyDescriptor,V2=Object.getPrototypeOf,Ew=Object.prototype;function SC(e,t,n){if(typeof t!="string"){if(Ew){var i=V2(t);i&&i!==Ew&&SC(e,i,n)}var o=F2(t);ww&&(o=o.concat(ww(t)));for(var l=Sw(e),u=Sw(t),f=0;f<o.length;++f){var h=o[f];if(!(h in z2||n&&n[h]||u&&h in u||l&&h in l)){var p=q2(t,h);try{H2(e,h,p)}catch{}}}}return e}function uo(e){return typeof e=="function"}function Iv(e){return typeof e=="object"&&"styledComponentId"in e}function no(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function xw(e,t){if(e.length===0)return"";for(var n=e[0],i=1;i<e.length;i++)n+=e[i];return n}function zc(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ty(e,t,n){if(n===void 0&&(n=!1),!n&&!zc(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var i=0;i<t.length;i++)e[i]=Ty(e[i],t[i]);else if(zc(t))for(var i in t)e[i]=Ty(e[i],t[i]);return e}function Dv(e,t){Object.defineProperty(e,"toString",{value:t})}function fo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var G2=(function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,i=0;i<t;i++)n+=this.groupSizes[i];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,l=o;t>=l;)if((l<<=1)<0)throw fo(16,"".concat(t));this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var u=o;u<l;u++)this.groupSizes[u]=0}for(var f=this.indexOfGroup(t+1),h=(u=0,n.length);u<h;u++)this.tag.insertRule(f,n[u])&&(this.groupSizes[t]++,f++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],i=this.indexOfGroup(t),o=i+n;this.groupSizes[t]=0;for(var l=i;l<o;l++)this.tag.deleteRule(i)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var i=this.groupSizes[t],o=this.indexOfGroup(t),l=o+i,u=o;u<l;u++)n+="".concat(this.tag.getRule(u)).concat(Av);return n},e})(),_f=new Map,Pf=new Map,bf=1,Gd=function(e){if(_f.has(e))return _f.get(e);for(;Pf.has(bf);)bf++;var t=bf++;return _f.set(e,t),Pf.set(t,e),t},Y2=function(e,t){bf=t+1,_f.set(e,t),Pf.set(t,e)},W2="style[".concat(ka,"][").concat(pC,'="').concat(Ih,'"]'),Q2=new RegExp("^".concat(ka,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),K2=function(e,t,n){for(var i,o=n.split(","),l=0,u=o.length;l<u;l++)(i=o[l])&&e.registerName(t,i)},X2=function(e,t){for(var n,i=((n=t.textContent)!==null&&n!==void 0?n:"").split(Av),o=[],l=0,u=i.length;l<u;l++){var f=i[l].trim();if(f){var h=f.match(Q2);if(h){var p=0|parseInt(h[1],10),g=h[2];p!==0&&(Y2(g,p),K2(e,g,h[3]),e.getTag().insertRules(p,o)),o.length=0}else o.push(f)}}},Tw=function(e){for(var t=document.querySelectorAll(W2),n=0,i=t.length;n<i;n++){var o=t[n];o&&o.getAttribute(ka)!==hC&&(X2(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function Z2(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var wC=function(e){var t=document.head,n=e||t,i=document.createElement("style"),o=(function(f){var h=Array.from(f.querySelectorAll("style[".concat(ka,"]")));return h[h.length-1]})(n),l=o!==void 0?o.nextSibling:null;i.setAttribute(ka,hC),i.setAttribute(pC,Ih);var u=Z2();return u&&i.setAttribute("nonce",u),n.insertBefore(i,l),i},J2=(function(){function e(t){this.element=wC(t),this.element.appendChild(document.createTextNode("")),this.sheet=(function(n){if(n.sheet)return n.sheet;for(var i=document.styleSheets,o=0,l=i.length;o<l;o++){var u=i[o];if(u.ownerNode===n)return u}throw fo(17)})(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e})(),eL=(function(){function e(t){this.element=wC(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var i=document.createTextNode(n);return this.element.insertBefore(i,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e})(),tL=(function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e})(),Cw=Lf,nL={isServer:!Lf,useCSSOMInjection:!O2},EC=(function(){function e(t,n,i){t===void 0&&(t=La),n===void 0&&(n={});var o=this;this.options=sn(sn({},nL),t),this.gs=n,this.names=new Map(i),this.server=!!t.isServer,!this.server&&Lf&&Cw&&(Cw=!1,Tw(this)),Dv(this,function(){return(function(l){for(var u=l.getTag(),f=u.length,h="",p=function(y){var _=(function(A){return Pf.get(A)})(y);if(_===void 0)return"continue";var S=l.names.get(_),w=u.getGroup(y);if(S===void 0||!S.size||w.length===0)return"continue";var O="".concat(ka,".g").concat(y,'[id="').concat(_,'"]'),T="";S!==void 0&&S.forEach(function(A){A.length>0&&(T+="".concat(A,","))}),h+="".concat(w).concat(O,'{content:"').concat(T,'"}').concat(Av)},g=0;g<f;g++)p(g);return h})(o)})}return e.registerId=function(t){return Gd(t)},e.prototype.rehydrate=function(){!this.server&&Lf&&Tw(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(sn(sn({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=(function(n){var i=n.useCSSOMInjection,o=n.target;return n.isServer?new tL(o):i?new J2(o):new eL(o)})(this.options),new G2(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Gd(t),this.names.has(t))this.names.get(t).add(n);else{var i=new Set;i.add(n),this.names.set(t,i)}},e.prototype.insertRules=function(t,n,i){this.registerName(t,n),this.getTag().insertRules(Gd(t),i)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Gd(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e})(),rL=/&/g,iL=/^\s*\/\/.*$/gm;function xC(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(i){return"".concat(t," ").concat(i)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=xC(n.children,t)),n})}function sL(e){var t,n,i,o=La,l=o.options,u=l===void 0?La:l,f=o.plugins,h=f===void 0?Dh:f,p=function(_,S,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):_},g=h.slice();g.push(function(_){_.type===Th&&_.value.includes("&")&&(_.props[0]=_.props[0].replace(rL,n).replace(i,p))}),u.prefix&&g.push(I2),g.push(C2);var y=function(_,S,w,O){S===void 0&&(S=""),w===void 0&&(w=""),O===void 0&&(O="&"),t=O,n=S,i=new RegExp("\\".concat(n,"\\b"),"g");var T=_.replace(iL,""),A=x2(w||S?"".concat(w," ").concat(S," { ").concat(T," }"):T);u.namespace&&(A=xC(A,u.namespace));var k=[];return kf(A,R2(g.concat(A2(function(x){return k.push(x)})))),k};return y.hash=h.length?h.reduce(function(_,S){return S.name||fo(15),Sa(_,S.name)},gC).toString():"",y}var oL=new EC,Cy=sL(),TC=co.createContext({shouldForwardProp:void 0,styleSheet:oL,stylis:Cy});TC.Consumer;co.createContext(void 0);function Rw(){return C.useContext(TC)}var aL=(function(){function e(t,n){var i=this;this.inject=function(o,l){l===void 0&&(l=Cy);var u=i.name+l.hash;o.hasNameForId(i.id,u)||o.insertRules(i.id,u,l(i.rules,u,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Dv(this,function(){throw fo(12,String(i.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Cy),this.name+t.hash},e})(),lL=function(e){return e>="A"&&e<="Z"};function Aw(e){for(var t="",n=0;n<e.length;n++){var i=e[n];if(n===1&&i==="-"&&e[0]==="-")return e;lL(i)?t+="-"+i.toLowerCase():t+=i}return t.startsWith("ms-")?"-"+t:t}var CC=function(e){return e==null||e===!1||e===""},RC=function(e){var t,n,i=[];for(var o in e){var l=e[o];e.hasOwnProperty(o)&&!CC(l)&&(Array.isArray(l)&&l.isCss||uo(l)?i.push("".concat(Aw(o),":"),l,";"):zc(l)?i.push.apply(i,Mf(Mf(["".concat(o," {")],RC(l),!1),["}"],!1)):i.push("".concat(Aw(o),": ").concat((t=o,(n=l)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in D2||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function ao(e,t,n,i){if(CC(e))return[];if(Iv(e))return[".".concat(e.styledComponentId)];if(uo(e)){if(!uo(l=e)||l.prototype&&l.prototype.isReactComponent||!t)return[e];var o=e(t);return ao(o,t,n,i)}var l;return e instanceof aL?n?(e.inject(n,i),[e.getName(i)]):[e]:zc(e)?RC(e):Array.isArray(e)?Array.prototype.concat.apply(Dh,e.map(function(u){return ao(u,t,n,i)})):[e.toString()]}function cL(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(uo(n)&&!Iv(n))return!1}return!0}var uL=yC(Ih),dL=(function(){function e(t,n,i){this.rules=t,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&cL(t),this.componentId=n,this.baseHash=Sa(uL,n),this.baseStyle=i,EC.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,i){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=no(o,this.staticRulesId);else{var l=xw(ao(this.rules,t,n,i)),u=xy(Sa(this.baseHash,l)>>>0);if(!n.hasNameForId(this.componentId,u)){var f=i(l,".".concat(u),void 0,this.componentId);n.insertRules(this.componentId,u,f)}o=no(o,u),this.staticRulesId=u}else{for(var h=Sa(this.baseHash,i.hash),p="",g=0;g<this.rules.length;g++){var y=this.rules[g];if(typeof y=="string")p+=y;else if(y){var _=xw(ao(y,t,n,i));h=Sa(h,_+g),p+=_}}if(p){var S=xy(h>>>0);n.hasNameForId(this.componentId,S)||n.insertRules(this.componentId,S,i(p,".".concat(S),void 0,this.componentId)),o=no(o,S)}}return o},e})(),jf=co.createContext(void 0);jf.Consumer;function fL(e){var t=co.useContext(jf),n=C.useMemo(function(){return(function(i,o){if(!i)throw fo(14);if(uo(i)){var l=i(o);return l}if(Array.isArray(i)||typeof i!="object")throw fo(8);return o?sn(sn({},o),i):i})(e.theme,t)},[e.theme,t]);return e.children?co.createElement(jf.Provider,{value:n},e.children):null}var Cg={};function hL(e,t,n){var i=Iv(e),o=e,l=!Tg(e),u=t.attrs,f=u===void 0?Dh:u,h=t.componentId,p=h===void 0?(function(I,M){var R=typeof I!="string"?"sc":_w(I);Cg[R]=(Cg[R]||0)+1;var P="".concat(R,"-").concat(P2(Ih+R+Cg[R]));return M?"".concat(M,"-").concat(P):P})(t.displayName,t.parentComponentId):h,g=t.displayName,y=g===void 0?(function(I){return Tg(I)?"styled.".concat(I):"Styled(".concat(j2(I),")")})(e):g,_=t.displayName&&t.componentId?"".concat(_w(t.displayName),"-").concat(t.componentId):t.componentId||p,S=i&&o.attrs?o.attrs.concat(f).filter(Boolean):f,w=t.shouldForwardProp;if(i&&o.shouldForwardProp){var O=o.shouldForwardProp;if(t.shouldForwardProp){var T=t.shouldForwardProp;w=function(I,M){return O(I,M)&&T(I,M)}}else w=O}var A=new dL(n,_,i?o.componentStyle:void 0);function k(I,M){return(function(R,P,V){var H=R.attrs,B=R.componentStyle,z=R.defaultProps,G=R.foldedComponentIds,F=R.styledComponentId,K=R.target,ue=co.useContext(jf),U=Rw(),ee=R.shouldForwardProp||U.shouldForwardProp,ne=N2(P,ue,z)||La,ae=(function(me,pe,Ae){for(var be,De=sn(sn({},pe),{className:void 0,theme:Ae}),$e=0;$e<me.length;$e+=1){var _t=uo(be=me[$e])?be(De):be;for(var gt in _t)De[gt]=gt==="className"?no(De[gt],_t[gt]):gt==="style"?sn(sn({},De[gt]),_t[gt]):_t[gt]}return pe.className&&(De.className=no(De.className,pe.className)),De})(H,P,ne),N=ae.as||K,X={};for(var le in ae)ae[le]===void 0||le[0]==="$"||le==="as"||le==="theme"&&ae.theme===ne||(le==="forwardedAs"?X.as=ae.forwardedAs:ee&&!ee(le,N)||(X[le]=ae[le]));var ie=(function(me,pe){var Ae=Rw(),be=me.generateAndInjectStyles(pe,Ae.styleSheet,Ae.stylis);return be})(B,ae),de=no(G,F);return ie&&(de+=" "+ie),ae.className&&(de+=" "+ae.className),X[Tg(N)&&!mC.has(N)?"class":"className"]=de,V&&(X.ref=V),C.createElement(N,X)})(x,I,M)}k.displayName=y;var x=co.forwardRef(k);return x.attrs=S,x.componentStyle=A,x.displayName=y,x.shouldForwardProp=w,x.foldedComponentIds=i?no(o.foldedComponentIds,o.styledComponentId):"",x.styledComponentId=_,x.target=i?o.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(I){this._foldedDefaultProps=i?(function(M){for(var R=[],P=1;P<arguments.length;P++)R[P-1]=arguments[P];for(var V=0,H=R;V<H.length;V++)Ty(M,H[V],!0);return M})({},o.defaultProps,I):I}}),Dv(x,function(){return".".concat(x.styledComponentId)}),l&&SC(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function Iw(e,t){for(var n=[e[0]],i=0,o=t.length;i<o;i+=1)n.push(t[i],e[i+1]);return n}var Dw=function(e){return Object.assign(e,{isCss:!0})};function an(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(uo(e)||zc(e))return Dw(ao(Iw(Dh,Mf([e],t,!0))));var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?ao(i):Dw(ao(Iw(i,t)))}function Ry(e,t,n){if(n===void 0&&(n=La),!t)throw fo(1,t);var i=function(o){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];return e(t,n,an.apply(void 0,Mf([o],l,!1)))};return i.attrs=function(o){return Ry(e,t,sn(sn({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},i.withConfig=function(o){return Ry(e,t,sn(sn({},n),o))},i}var AC=function(e){return Ry(hL,e)},D=AC;mC.forEach(function(e){D[e]=AC(e)});const Ta=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__,cs=globalThis,Tc="10.11.0";function IC(){return Ov(cs),cs}function Ov(e){const t=e.__SENTRY__=e.__SENTRY__||{};return t.version=t.version||Tc,t[Tc]=t[Tc]||{}}function Nv(e,t,n=cs){const i=n.__SENTRY__=n.__SENTRY__||{},o=i[Tc]=i[Tc]||{};return o[e]||(o[e]=t())}const pL="Sentry Logger ",Ow={};function mL(e){if(!("console"in cs))return e();const t=cs.console,n={},i=Object.keys(Ow);i.forEach(o=>{const l=Ow[o];n[o]=t[o],t[o]=l});try{return e()}finally{i.forEach(o=>{t[o]=n[o]})}}function gL(){kv().enabled=!0}function yL(){kv().enabled=!1}function DC(){return kv().enabled}function vL(...e){Mv("log",...e)}function _L(...e){Mv("warn",...e)}function bL(...e){Mv("error",...e)}function Mv(e,...t){Ta&&DC()&&mL(()=>{cs.console[e](`${pL}[${e}]:`,...t)})}function kv(){return Ta?Nv("loggerSettings",()=>({enabled:!1})):{enabled:!1}}const Sf={enable:gL,disable:yL,isEnabled:DC,log:vL,warn:_L,error:bL},SL=Object.prototype.toString;function wL(e,t){return SL.call(e)===`[object ${t}]`}function EL(e){return wL(e,"Object")}function xL(e){return!!(e?.then&&typeof e.then=="function")}function TL(e,t=0){return typeof e!="string"||t===0||e.length<=t?e:`${e.slice(0,t)}...`}function CL(e,t,n){try{Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0})}catch{Ta&&Sf.log(`Failed to add non-enumerable property "${t}" to object`,e)}}function RL(){const e=cs;return e.crypto||e.msCrypto}function Cc(e=RL()){let t=()=>Math.random()*16;try{if(e?.randomUUID)return e.randomUUID().replace(/-/g,"");e?.getRandomValues&&(t=()=>{const n=new Uint8Array(1);return e.getRandomValues(n),n[0]})}catch{}return("10000000100040008000"+1e11).replace(/[018]/g,n=>(n^(t()&15)>>n/4).toString(16))}const OC=1e3;function NC(){return Date.now()/OC}function AL(){const{performance:e}=cs;if(!e?.now||!e.timeOrigin)return NC;const t=e.timeOrigin;return()=>(t+e.now())/OC}let Nw;function IL(){return(Nw??(Nw=AL()))()}function DL(e,t={}){if(t.user&&(!e.ipAddress&&t.user.ip_address&&(e.ipAddress=t.user.ip_address),!e.did&&!t.did&&(e.did=t.user.id||t.user.email||t.user.username)),e.timestamp=t.timestamp||IL(),t.abnormal_mechanism&&(e.abnormal_mechanism=t.abnormal_mechanism),t.ignoreDuration&&(e.ignoreDuration=t.ignoreDuration),t.sid&&(e.sid=t.sid.length===32?t.sid:Cc()),t.init!==void 0&&(e.init=t.init),!e.did&&t.did&&(e.did=`${t.did}`),typeof t.started=="number"&&(e.started=t.started),e.ignoreDuration)e.duration=void 0;else if(typeof t.duration=="number")e.duration=t.duration;else{const n=e.timestamp-e.started;e.duration=n>=0?n:0}t.release&&(e.release=t.release),t.environment&&(e.environment=t.environment),!e.ipAddress&&t.ipAddress&&(e.ipAddress=t.ipAddress),!e.userAgent&&t.userAgent&&(e.userAgent=t.userAgent),typeof t.errors=="number"&&(e.errors=t.errors),t.status&&(e.status=t.status)}function MC(e,t,n=2){if(!t||typeof t!="object"||n<=0)return t;if(e&&Object.keys(t).length===0)return e;const i={...e};for(const o in t)Object.prototype.hasOwnProperty.call(t,o)&&(i[o]=MC(i[o],t[o],n-1));return i}function Mw(){return Cc()}const Ay="_sentrySpan";function kw(e,t){t?CL(e,Ay,t):delete e[Ay]}function Lw(e){return e[Ay]}const OL=100;class ho{constructor(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._attachments=[],this._user={},this._tags={},this._extra={},this._contexts={},this._sdkProcessingMetadata={},this._propagationContext={traceId:Mw(),sampleRand:Math.random()}}clone(){const t=new ho;return t._breadcrumbs=[...this._breadcrumbs],t._tags={...this._tags},t._extra={...this._extra},t._contexts={...this._contexts},this._contexts.flags&&(t._contexts.flags={values:[...this._contexts.flags.values]}),t._user=this._user,t._level=this._level,t._session=this._session,t._transactionName=this._transactionName,t._fingerprint=this._fingerprint,t._eventProcessors=[...this._eventProcessors],t._attachments=[...this._attachments],t._sdkProcessingMetadata={...this._sdkProcessingMetadata},t._propagationContext={...this._propagationContext},t._client=this._client,t._lastEventId=this._lastEventId,kw(t,Lw(this)),t}setClient(t){this._client=t}setLastEventId(t){this._lastEventId=t}getClient(){return this._client}lastEventId(){return this._lastEventId}addScopeListener(t){this._scopeListeners.push(t)}addEventProcessor(t){return this._eventProcessors.push(t),this}setUser(t){return this._user=t||{email:void 0,id:void 0,ip_address:void 0,username:void 0},this._session&&DL(this._session,{user:t}),this._notifyScopeListeners(),this}getUser(){return this._user}setTags(t){return this._tags={...this._tags,...t},this._notifyScopeListeners(),this}setTag(t,n){return this._tags={...this._tags,[t]:n},this._notifyScopeListeners(),this}setExtras(t){return this._extra={...this._extra,...t},this._notifyScopeListeners(),this}setExtra(t,n){return this._extra={...this._extra,[t]:n},this._notifyScopeListeners(),this}setFingerprint(t){return this._fingerprint=t,this._notifyScopeListeners(),this}setLevel(t){return this._level=t,this._notifyScopeListeners(),this}setTransactionName(t){return this._transactionName=t,this._notifyScopeListeners(),this}setContext(t,n){return n===null?delete this._contexts[t]:this._contexts[t]=n,this._notifyScopeListeners(),this}setSession(t){return t?this._session=t:delete this._session,this._notifyScopeListeners(),this}getSession(){return this._session}update(t){if(!t)return this;const n=typeof t=="function"?t(this):t,i=n instanceof ho?n.getScopeData():EL(n)?t:void 0,{tags:o,extra:l,user:u,contexts:f,level:h,fingerprint:p=[],propagationContext:g}=i||{};return this._tags={...this._tags,...o},this._extra={...this._extra,...l},this._contexts={...this._contexts,...f},u&&Object.keys(u).length&&(this._user=u),h&&(this._level=h),p.length&&(this._fingerprint=p),g&&(this._propagationContext=g),this}clear(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._session=void 0,kw(this,void 0),this._attachments=[],this.setPropagationContext({traceId:Mw(),sampleRand:Math.random()}),this._notifyScopeListeners(),this}addBreadcrumb(t,n){const i=typeof n=="number"?n:OL;if(i<=0)return this;const o={timestamp:NC(),...t,message:t.message?TL(t.message,2048):t.message};return this._breadcrumbs.push(o),this._breadcrumbs.length>i&&(this._breadcrumbs=this._breadcrumbs.slice(-i),this._client?.recordDroppedEvent("buffer_overflow","log_item")),this._notifyScopeListeners(),this}getLastBreadcrumb(){return this._breadcrumbs[this._breadcrumbs.length-1]}clearBreadcrumbs(){return this._breadcrumbs=[],this._notifyScopeListeners(),this}addAttachment(t){return this._attachments.push(t),this}clearAttachments(){return this._attachments=[],this}getScopeData(){return{breadcrumbs:this._breadcrumbs,attachments:this._attachments,contexts:this._contexts,tags:this._tags,extra:this._extra,user:this._user,level:this._level,fingerprint:this._fingerprint||[],eventProcessors:this._eventProcessors,propagationContext:this._propagationContext,sdkProcessingMetadata:this._sdkProcessingMetadata,transactionName:this._transactionName,span:Lw(this)}}setSDKProcessingMetadata(t){return this._sdkProcessingMetadata=MC(this._sdkProcessingMetadata,t,2),this}setPropagationContext(t){return this._propagationContext=t,this}getPropagationContext(){return this._propagationContext}captureException(t,n){const i=n?.event_id||Cc();if(!this._client)return Ta&&Sf.warn("No client configured on scope - will not capture exception!"),i;const o=new Error("Sentry syntheticException");return this._client.captureException(t,{originalException:t,syntheticException:o,...n,event_id:i},this),i}captureMessage(t,n,i){const o=i?.event_id||Cc();if(!this._client)return Ta&&Sf.warn("No client configured on scope - will not capture message!"),o;const l=new Error(t);return this._client.captureMessage(t,n,{originalException:t,syntheticException:l,...i,event_id:o},this),o}captureEvent(t,n){const i=n?.event_id||Cc();return this._client?(this._client.captureEvent(t,{...n,event_id:i},this),i):(Ta&&Sf.warn("No client configured on scope - will not capture event!"),i)}_notifyScopeListeners(){this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach(t=>{t(this)}),this._notifyingListeners=!1)}}function NL(){return Nv("defaultCurrentScope",()=>new ho)}function ML(){return Nv("defaultIsolationScope",()=>new ho)}class kL{constructor(t,n){let i;t?i=t:i=new ho;let o;n?o=n:o=new ho,this._stack=[{scope:i}],this._isolationScope=o}withScope(t){const n=this._pushScope();let i;try{i=t(n)}catch(o){throw this._popScope(),o}return xL(i)?i.then(o=>(this._popScope(),o),o=>{throw this._popScope(),o}):(this._popScope(),i)}getClient(){return this.getStackTop().client}getScope(){return this.getStackTop().scope}getIsolationScope(){return this._isolationScope}getStackTop(){return this._stack[this._stack.length-1]}_pushScope(){const t=this.getScope().clone();return this._stack.push({client:this.getClient(),scope:t}),t}_popScope(){return this._stack.length<=1?!1:!!this._stack.pop()}}function Pa(){const e=IC(),t=Ov(e);return t.stack=t.stack||new kL(NL(),ML())}function LL(e){return Pa().withScope(e)}function PL(e,t){const n=Pa();return n.withScope(()=>(n.getStackTop().scope=e,t(e)))}function Pw(e){return Pa().withScope(()=>e(Pa().getIsolationScope()))}function jL(){return{withIsolationScope:Pw,withScope:LL,withSetScope:PL,withSetIsolationScope:(e,t)=>Pw(t),getCurrentScope:()=>Pa().getScope(),getIsolationScope:()=>Pa().getIsolationScope()}}function UL(e){const t=Ov(e);return t.acs?t.acs:jL()}function kC(){const e=IC();return UL(e).getCurrentScope()}function Or(e,t){return kC().captureException(e,void 0)}function Lv(e,t){const n=typeof t=="string"?t:void 0,i=typeof t!="string"?{captureContext:t}:void 0;return kC().captureMessage(e,n,i)}const $L=()=>{};var jw={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LC={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he=function(e,t){if(!e)throw Wa(t)},Wa=function(e){return new Error("Firebase Database ("+LC.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PC=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let o=e.charCodeAt(i);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(e.charCodeAt(++i)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},zL=function(e){const t=[];let n=0,i=0;for(;n<e.length;){const o=e[n++];if(o<128)t[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=e[n++];t[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=e[n++],u=e[n++],f=e[n++],h=((o&7)<<18|(l&63)<<12|(u&63)<<6|f&63)-65536;t[i++]=String.fromCharCode(55296+(h>>10)),t[i++]=String.fromCharCode(56320+(h&1023))}else{const l=e[n++],u=e[n++];t[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|u&63)}}return t.join("")},Pv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<e.length;o+=3){const l=e[o],u=o+1<e.length,f=u?e[o+1]:0,h=o+2<e.length,p=h?e[o+2]:0,g=l>>2,y=(l&3)<<4|f>>4;let _=(f&15)<<2|p>>6,S=p&63;h||(S=64,u||(_=64)),i.push(n[g],n[y],n[_],n[S])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(PC(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):zL(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<e.length;){const l=n[e.charAt(o++)],f=o<e.length?n[e.charAt(o)]:0;++o;const p=o<e.length?n[e.charAt(o)]:64;++o;const y=o<e.length?n[e.charAt(o)]:64;if(++o,l==null||f==null||p==null||y==null)throw new BL;const _=l<<2|f>>4;if(i.push(_),p!==64){const S=f<<4&240|p>>2;if(i.push(S),y!==64){const w=p<<6&192|y;i.push(w)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class BL extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jC=function(e){const t=PC(e);return Pv.encodeByteArray(t,!0)},Uf=function(e){return jC(e).replace(/\./g,"")},$f=function(e){try{return Pv.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HL(e){return UC(void 0,e)}function UC(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)!t.hasOwnProperty(n)||!FL(n)||(e[n]=UC(e[n],t[n]));return e}function FL(e){return e!=="__proto__"}/**
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
 */function qL(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const VL=()=>qL().__FIREBASE_DEFAULTS__,GL=()=>{if(typeof process>"u"||typeof jw>"u")return;const e=jw.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},YL=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&$f(e[1]);return t&&JSON.parse(t)},jv=()=>{try{return $L()||VL()||GL()||YL()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},$C=e=>jv()?.emulatorHosts?.[e],WL=e=>{const t=$C(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),i]:[t.substring(0,n),i]},zC=()=>jv()?.config,BC=e=>jv()?.[`_${e}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,i))}}}/**
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
 */function Qa(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function HC(e){return(await fetch(e,{credentials:"include"})).ok}/**
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
 */function QL(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",o=e.iat||0,l=e.sub||e.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u={iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...e};return[Uf(JSON.stringify(n)),Uf(JSON.stringify(u)),""].join(".")}const Rc={};function KL(){const e={prod:[],emulator:[]};for(const t of Object.keys(Rc))Rc[t]?e.emulator.push(t):e.prod.push(t);return e}function XL(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}let Uw=!1;function FC(e,t){if(typeof window>"u"||typeof document>"u"||!Qa(window.location.host)||Rc[e]===t||Rc[e]||Uw)return;Rc[e]=t;function n(_){return`__firebase__banner__${_}`}const i="__firebase__banner",l=KL().prod.length>0;function u(){const _=document.getElementById(i);_&&_.remove()}function f(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function h(_,S){_.setAttribute("width","24"),_.setAttribute("id",S),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function p(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{Uw=!0,u()},_}function g(_,S){_.setAttribute("id",S),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function y(){const _=XL(i),S=n("text"),w=document.getElementById(S)||document.createElement("span"),O=n("learnmore"),T=document.getElementById(O)||document.createElement("a"),A=n("preprendIcon"),k=document.getElementById(A)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const x=_.element;f(x),g(T,O);const I=p();h(k,A),x.append(k,w,T,I),document.body.appendChild(x)}l?(w.innerText="Preview backend disconnected.",k.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(k.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,w.innerText="Preview backend running in this workspace."),w.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Uv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fn())}function ZL(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function JL(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function qC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function eP(){const e=fn();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function tP(){return LC.NODE_ADMIN===!0}function VC(){try{return typeof indexedDB=="object"}catch{return!1}}function GC(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{t(o.error?.message||"")}}catch(n){t(n)}})}function nP(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rP="FirebaseError";class _i extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name=rP,Object.setPrototypeOf(this,_i.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ro.prototype.create)}}class Ro{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},o=`${this.service}/${t}`,l=this.errors[t],u=l?iP(l,i):"Error",f=`${this.serviceName}: ${u} (${o}).`;return new _i(o,f,i)}}function iP(e,t){return e.replace(sP,(n,i)=>{const o=t[i];return o!=null?String(o):`<${i}?>`})}const sP=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(e){return JSON.parse(e)}function $t(e){return JSON.stringify(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YC=function(e){let t={},n={},i={},o="";try{const l=e.split(".");t=Bc($f(l[0])||""),n=Bc($f(l[1])||""),o=l[2],i=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:i,signature:o}},oP=function(e){const t=YC(e),n=t.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},aP=function(e){const t=YC(e).claims;return typeof t=="object"&&t.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ja(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function Iy(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function zf(e,t,n){const i={};for(const o in e)Object.prototype.hasOwnProperty.call(e,o)&&(i[o]=t.call(n,e[o],o,e));return i}function po(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const o of n){if(!i.includes(o))return!1;const l=e[o],u=t[o];if($w(l)&&$w(u)){if(!po(l,u))return!1}else if(l!==u)return!1}for(const o of i)if(!n.includes(o))return!1;return!0}function $w(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(o=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function bc(e){const t={};return e.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");t[decodeURIComponent(o)]=decodeURIComponent(l)}}),t}function Sc(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,n){n||(n=0);const i=this.W_;if(typeof t=="string")for(let y=0;y<16;y++)i[y]=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),n+=4;else for(let y=0;y<16;y++)i[y]=t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3],n+=4;for(let y=16;y<80;y++){const _=i[y-3]^i[y-8]^i[y-14]^i[y-16];i[y]=(_<<1|_>>>31)&4294967295}let o=this.chain_[0],l=this.chain_[1],u=this.chain_[2],f=this.chain_[3],h=this.chain_[4],p,g;for(let y=0;y<80;y++){y<40?y<20?(p=f^l&(u^f),g=1518500249):(p=l^u^f,g=1859775393):y<60?(p=l&u|f&(l|u),g=2400959708):(p=l^u^f,g=3395469782);const _=(o<<5|o>>>27)+p+h+g+i[y]&4294967295;h=f,f=u,u=(l<<30|l>>>2)&4294967295,l=o,o=_}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295}update(t,n){if(t==null)return;n===void 0&&(n=t.length);const i=n-this.blockSize;let o=0;const l=this.buf_;let u=this.inbuf_;for(;o<n;){if(u===0)for(;o<=i;)this.compress_(t,o),o+=this.blockSize;if(typeof t=="string"){for(;o<n;)if(l[u]=t.charCodeAt(o),++u,++o,u===this.blockSize){this.compress_(l),u=0;break}}else for(;o<n;)if(l[u]=t[o],++u,++o,u===this.blockSize){this.compress_(l),u=0;break}}this.inbuf_=u,this.total_+=n}digest(){const t=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let o=0;o<5;o++)for(let l=24;l>=0;l-=8)t[i]=this.chain_[o]>>l&255,++i;return t}}function cP(e,t){const n=new uP(e,t);return n.subscribe.bind(n)}class uP{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,i){let o;if(t===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");dP(t,["next","error","complete"])?o=t:o={next:t,error:n,complete:i},o.next===void 0&&(o.next=Rg),o.error===void 0&&(o.error=Rg),o.complete===void 0&&(o.complete=Rg);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function dP(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Rg(){}function Oh(e,t){return`${e} failed: ${t} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fP=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let o=e.charCodeAt(i);if(o>=55296&&o<=56319){const l=o-55296;i++,he(i<e.length,"Surrogate pair missing trail surrogate.");const u=e.charCodeAt(i)-56320;o=65536+(l<<10)+u}o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):o<65536?(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},Nh=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};/**
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
 */function Gt(e){return e&&e._delegate?e._delegate:e}class gr{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Zs="[DEFAULT]";/**
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
 */class hP{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const i=new du;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t?.identifier),i=t?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(mP(t))try{this.getOrInitializeService({instanceIdentifier:Zs})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(t=Zs){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Zs){return this.instances.has(t)}getOptions(t=Zs){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[l,u]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&u.resolve(o)}return o}onInit(t,n){const i=this.normalizeInstanceIdentifier(n),o=this.onInitCallbacks.get(i)??new Set;o.add(t),this.onInitCallbacks.set(i,o);const l=this.instances.get(i);return l&&t(l,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const i=this.onInitCallbacks.get(n);if(i)for(const o of i)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:pP(t),options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=Zs){return this.component?this.component.multipleInstances?t:Zs:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pP(e){return e===Zs?void 0:e}function mP(e){return e.instantiationMode==="EAGER"}/**
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
 */class gP{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new hP(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lt;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(lt||(lt={}));const yP={debug:lt.DEBUG,verbose:lt.VERBOSE,info:lt.INFO,warn:lt.WARN,error:lt.ERROR,silent:lt.SILENT},vP=lt.INFO,_P={[lt.DEBUG]:"log",[lt.VERBOSE]:"log",[lt.INFO]:"info",[lt.WARN]:"warn",[lt.ERROR]:"error"},bP=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),o=_P[t];if(o)console[o](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class $v{constructor(t){this.name=t,this._logLevel=vP,this._logHandler=bP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in lt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?yP[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,lt.DEBUG,...t),this._logHandler(this,lt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,lt.VERBOSE,...t),this._logHandler(this,lt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,lt.INFO,...t),this._logHandler(this,lt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,lt.WARN,...t),this._logHandler(this,lt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,lt.ERROR,...t),this._logHandler(this,lt.ERROR,...t)}}const SP=(e,t)=>t.some(n=>e instanceof n);let zw,Bw;function wP(){return zw||(zw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function EP(){return Bw||(Bw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const WC=new WeakMap,Dy=new WeakMap,QC=new WeakMap,Ag=new WeakMap,zv=new WeakMap;function xP(e){const t=new Promise((n,i)=>{const o=()=>{e.removeEventListener("success",l),e.removeEventListener("error",u)},l=()=>{n(ui(e.result)),o()},u=()=>{i(e.error),o()};e.addEventListener("success",l),e.addEventListener("error",u)});return t.then(n=>{n instanceof IDBCursor&&WC.set(n,e)}).catch(()=>{}),zv.set(t,e),t}function TP(e){if(Dy.has(e))return;const t=new Promise((n,i)=>{const o=()=>{e.removeEventListener("complete",l),e.removeEventListener("error",u),e.removeEventListener("abort",u)},l=()=>{n(),o()},u=()=>{i(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",l),e.addEventListener("error",u),e.addEventListener("abort",u)});Dy.set(e,t)}let Oy={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Dy.get(e);if(t==="objectStoreNames")return e.objectStoreNames||QC.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ui(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function CP(e){Oy=e(Oy)}function RP(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const i=e.call(Ig(this),t,...n);return QC.set(i,t.sort?t.sort():[t]),ui(i)}:EP().includes(e)?function(...t){return e.apply(Ig(this),t),ui(WC.get(this))}:function(...t){return ui(e.apply(Ig(this),t))}}function AP(e){return typeof e=="function"?RP(e):(e instanceof IDBTransaction&&TP(e),SP(e,wP())?new Proxy(e,Oy):e)}function ui(e){if(e instanceof IDBRequest)return xP(e);if(Ag.has(e))return Ag.get(e);const t=AP(e);return t!==e&&(Ag.set(e,t),zv.set(t,e)),t}const Ig=e=>zv.get(e);function Mh(e,t,{blocked:n,upgrade:i,blocking:o,terminated:l}={}){const u=indexedDB.open(e,t),f=ui(u);return i&&u.addEventListener("upgradeneeded",h=>{i(ui(u.result),h.oldVersion,h.newVersion,ui(u.transaction),h)}),n&&u.addEventListener("blocked",h=>n(h.oldVersion,h.newVersion,h)),f.then(h=>{l&&h.addEventListener("close",()=>l()),o&&h.addEventListener("versionchange",p=>o(p.oldVersion,p.newVersion,p))}).catch(()=>{}),f}function Dg(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",i=>t(i.oldVersion,i)),ui(n).then(()=>{})}const IP=["get","getKey","getAll","getAllKeys","count"],DP=["put","add","delete","clear"],Og=new Map;function Hw(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Og.get(t))return Og.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,o=DP.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(o||IP.includes(n)))return;const l=async function(u,...f){const h=this.transaction(u,o?"readwrite":"readonly");let p=h.store;return i&&(p=p.index(f.shift())),(await Promise.all([p[n](...f),o&&h.done]))[0]};return Og.set(t,l),l}CP(e=>({...e,get:(t,n,i)=>Hw(t,n)||e.get(t,n,i),has:(t,n)=>!!Hw(t,n)||e.has(t,n)}));/**
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
 */class OP{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(NP(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function NP(e){return e.getComponent()?.type==="VERSION"}const Ny="@firebase/app",Fw="0.14.2";/**
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
 */const hi=new $v("@firebase/app"),MP="@firebase/app-compat",kP="@firebase/analytics-compat",LP="@firebase/analytics",PP="@firebase/app-check-compat",jP="@firebase/app-check",UP="@firebase/auth",$P="@firebase/auth-compat",zP="@firebase/database",BP="@firebase/data-connect",HP="@firebase/database-compat",FP="@firebase/functions",qP="@firebase/functions-compat",VP="@firebase/installations",GP="@firebase/installations-compat",YP="@firebase/messaging",WP="@firebase/messaging-compat",QP="@firebase/performance",KP="@firebase/performance-compat",XP="@firebase/remote-config",ZP="@firebase/remote-config-compat",JP="@firebase/storage",e4="@firebase/storage-compat",t4="@firebase/firestore",n4="@firebase/ai",r4="@firebase/firestore-compat",i4="firebase",s4="12.2.0";/**
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
 */const My="[DEFAULT]",o4={[Ny]:"fire-core",[MP]:"fire-core-compat",[LP]:"fire-analytics",[kP]:"fire-analytics-compat",[jP]:"fire-app-check",[PP]:"fire-app-check-compat",[UP]:"fire-auth",[$P]:"fire-auth-compat",[zP]:"fire-rtdb",[BP]:"fire-data-connect",[HP]:"fire-rtdb-compat",[FP]:"fire-fn",[qP]:"fire-fn-compat",[VP]:"fire-iid",[GP]:"fire-iid-compat",[YP]:"fire-fcm",[WP]:"fire-fcm-compat",[QP]:"fire-perf",[KP]:"fire-perf-compat",[XP]:"fire-rc",[ZP]:"fire-rc-compat",[JP]:"fire-gcs",[e4]:"fire-gcs-compat",[t4]:"fire-fst",[r4]:"fire-fst-compat",[n4]:"fire-vertex","fire-js":"fire-js",[i4]:"fire-js-all"};/**
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
 */const Bf=new Map,a4=new Map,ky=new Map;function qw(e,t){try{e.container.addComponent(t)}catch(n){hi.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Nr(e){const t=e.name;if(ky.has(t))return hi.debug(`There were multiple attempts to register component ${t}.`),!1;ky.set(t,e);for(const n of Bf.values())qw(n,e);for(const n of a4.values())qw(n,e);return!0}function Xa(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Mn(e){return e==null?!1:e.settings!==void 0}/**
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
 */const l4={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},is=new Ro("app","Firebase",l4);/**
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
 */class c4{constructor(t,n,i){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new gr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw is.create("app-deleted",{appName:this._name})}}/**
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
 */const Za=s4;function KC(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const i={name:My,automaticDataCollectionEnabled:!0,...t},o=i.name;if(typeof o!="string"||!o)throw is.create("bad-app-name",{appName:String(o)});if(n||(n=zC()),!n)throw is.create("no-options");const l=Bf.get(o);if(l){if(po(n,l.options)&&po(i,l.config))return l;throw is.create("duplicate-app",{appName:o})}const u=new gP(o);for(const h of ky.values())u.addComponent(h);const f=new c4(n,i,u);return Bf.set(o,f),f}function Bv(e=My){const t=Bf.get(e);if(!t&&e===My&&zC())return KC();if(!t)throw is.create("no-app",{appName:e});return t}function Qn(e,t,n){let i=o4[e]??e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),l=t.match(/\s|\//);if(o||l){const u=[`Unable to register library "${i}" with version "${t}":`];o&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&l&&u.push("and"),l&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),hi.warn(u.join(" "));return}Nr(new gr(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const u4="firebase-heartbeat-database",d4=1,Hc="firebase-heartbeat-store";let Ng=null;function XC(){return Ng||(Ng=Mh(u4,d4,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Hc)}catch(n){console.warn(n)}}}}).catch(e=>{throw is.create("idb-open",{originalErrorMessage:e.message})})),Ng}async function f4(e){try{const n=(await XC()).transaction(Hc),i=await n.objectStore(Hc).get(ZC(e));return await n.done,i}catch(t){if(t instanceof _i)hi.warn(t.message);else{const n=is.create("idb-get",{originalErrorMessage:t?.message});hi.warn(n.message)}}}async function Vw(e,t){try{const i=(await XC()).transaction(Hc,"readwrite");await i.objectStore(Hc).put(t,ZC(e)),await i.done}catch(n){if(n instanceof _i)hi.warn(n.message);else{const i=is.create("idb-set",{originalErrorMessage:n?.message});hi.warn(i.message)}}}function ZC(e){return`${e.name}!${e.options.appId}`}/**
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
 */const h4=1024,p4=30;class m4{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new y4(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Gw();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats.length>p4){const o=v4(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){hi.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Gw(),{heartbeatsToSend:n,unsentEntries:i}=g4(this._heartbeatsCache.heartbeats),o=Uf(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return hi.warn(t),""}}}function Gw(){return new Date().toISOString().substring(0,10)}function g4(e,t=h4){const n=[];let i=e.slice();for(const o of e){const l=n.find(u=>u.agent===o.agent);if(l){if(l.dates.push(o.date),Yw(n)>t){l.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Yw(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class y4{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return VC()?GC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await f4(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const i=await this.read();return Vw(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const i=await this.read();return Vw(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Yw(e){return Uf(JSON.stringify({version:2,heartbeats:e})).length}function v4(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let i=1;i<e.length;i++)e[i].date<n&&(n=e[i].date,t=i);return t}/**
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
 */function _4(e){Nr(new gr("platform-logger",t=>new OP(t),"PRIVATE")),Nr(new gr("heartbeat",t=>new m4(t),"PRIVATE")),Qn(Ny,Fw,e),Qn(Ny,Fw,"esm2020"),Qn("fire-js","")}_4("");const JC="@firebase/installations",Hv="0.6.19";/**
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
 */const eR=1e4,tR=`w:${Hv}`,nR="FIS_v2",b4="https://firebaseinstallations.googleapis.com/v1",S4=3600*1e3,w4="installations",E4="Installations";/**
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
 */const x4={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},mo=new Ro(w4,E4,x4);function rR(e){return e instanceof _i&&e.code.includes("request-failed")}/**
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
 */function iR({projectId:e}){return`${b4}/projects/${e}/installations`}function sR(e){return{token:e.token,requestStatus:2,expiresIn:C4(e.expiresIn),creationTime:Date.now()}}async function oR(e,t){const i=(await t.json()).error;return mo.create("request-failed",{requestName:e,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function aR({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function T4(e,{refreshToken:t}){const n=aR(e);return n.append("Authorization",R4(t)),n}async function lR(e){const t=await e();return t.status>=500&&t.status<600?e():t}function C4(e){return Number(e.replace("s","000"))}function R4(e){return`${nR} ${e}`}/**
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
 */async function A4({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const i=iR(e),o=aR(e),l=t.getImmediate({optional:!0});if(l){const p=await l.getHeartbeatsHeader();p&&o.append("x-firebase-client",p)}const u={fid:n,authVersion:nR,appId:e.appId,sdkVersion:tR},f={method:"POST",headers:o,body:JSON.stringify(u)},h=await lR(()=>fetch(i,f));if(h.ok){const p=await h.json();return{fid:p.fid||n,registrationStatus:2,refreshToken:p.refreshToken,authToken:sR(p.authToken)}}else throw await oR("Create Installation",h)}/**
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
 */function cR(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function I4(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const D4=/^[cdef][\w-]{21}$/,Ly="";function O4(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=N4(e);return D4.test(n)?n:Ly}catch{return Ly}}function N4(e){return I4(e).substr(0,22)}/**
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
 */function kh(e){return`${e.appName}!${e.appId}`}/**
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
 */const uR=new Map;function dR(e,t){const n=kh(e);fR(n,t),M4(n,t)}function fR(e,t){const n=uR.get(e);if(n)for(const i of n)i(t)}function M4(e,t){const n=k4();n&&n.postMessage({key:e,fid:t}),L4()}let ro=null;function k4(){return!ro&&"BroadcastChannel"in self&&(ro=new BroadcastChannel("[Firebase] FID Change"),ro.onmessage=e=>{fR(e.data.key,e.data.fid)}),ro}function L4(){uR.size===0&&ro&&(ro.close(),ro=null)}/**
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
 */const P4="firebase-installations-database",j4=1,go="firebase-installations-store";let Mg=null;function Fv(){return Mg||(Mg=Mh(P4,j4,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(go)}}})),Mg}async function Hf(e,t){const n=kh(e),o=(await Fv()).transaction(go,"readwrite"),l=o.objectStore(go),u=await l.get(n);return await l.put(t,n),await o.done,(!u||u.fid!==t.fid)&&dR(e,t.fid),t}async function hR(e){const t=kh(e),i=(await Fv()).transaction(go,"readwrite");await i.objectStore(go).delete(t),await i.done}async function Lh(e,t){const n=kh(e),o=(await Fv()).transaction(go,"readwrite"),l=o.objectStore(go),u=await l.get(n),f=t(u);return f===void 0?await l.delete(n):await l.put(f,n),await o.done,f&&(!u||u.fid!==f.fid)&&dR(e,f.fid),f}/**
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
 */async function qv(e){let t;const n=await Lh(e.appConfig,i=>{const o=U4(i),l=$4(e,o);return t=l.registrationPromise,l.installationEntry});return n.fid===Ly?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function U4(e){const t=e||{fid:O4(),registrationStatus:0};return pR(t)}function $4(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(mo.create("app-offline"));return{installationEntry:t,registrationPromise:o}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=z4(e,n);return{installationEntry:n,registrationPromise:i}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:B4(e)}:{installationEntry:t}}async function z4(e,t){try{const n=await A4(e,t);return Hf(e.appConfig,n)}catch(n){throw rR(n)&&n.customData.serverCode===409?await hR(e.appConfig):await Hf(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function B4(e){let t=await Ww(e.appConfig);for(;t.registrationStatus===1;)await cR(100),t=await Ww(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await qv(e);return i||n}return t}function Ww(e){return Lh(e,t=>{if(!t)throw mo.create("installation-not-found");return pR(t)})}function pR(e){return H4(e)?{fid:e.fid,registrationStatus:0}:e}function H4(e){return e.registrationStatus===1&&e.registrationTime+eR<Date.now()}/**
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
 */async function F4({appConfig:e,heartbeatServiceProvider:t},n){const i=q4(e,n),o=T4(e,n),l=t.getImmediate({optional:!0});if(l){const p=await l.getHeartbeatsHeader();p&&o.append("x-firebase-client",p)}const u={installation:{sdkVersion:tR,appId:e.appId}},f={method:"POST",headers:o,body:JSON.stringify(u)},h=await lR(()=>fetch(i,f));if(h.ok){const p=await h.json();return sR(p)}else throw await oR("Generate Auth Token",h)}function q4(e,{fid:t}){return`${iR(e)}/${t}/authTokens:generate`}/**
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
 */async function Vv(e,t=!1){let n;const i=await Lh(e.appConfig,l=>{if(!mR(l))throw mo.create("not-registered");const u=l.authToken;if(!t&&Y4(u))return l;if(u.requestStatus===1)return n=V4(e,t),l;{if(!navigator.onLine)throw mo.create("app-offline");const f=Q4(l);return n=G4(e,f),f}});return n?await n:i.authToken}async function V4(e,t){let n=await Qw(e.appConfig);for(;n.authToken.requestStatus===1;)await cR(100),n=await Qw(e.appConfig);const i=n.authToken;return i.requestStatus===0?Vv(e,t):i}function Qw(e){return Lh(e,t=>{if(!mR(t))throw mo.create("not-registered");const n=t.authToken;return K4(n)?{...t,authToken:{requestStatus:0}}:t})}async function G4(e,t){try{const n=await F4(e,t),i={...t,authToken:n};return await Hf(e.appConfig,i),n}catch(n){if(rR(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await hR(e.appConfig);else{const i={...t,authToken:{requestStatus:0}};await Hf(e.appConfig,i)}throw n}}function mR(e){return e!==void 0&&e.registrationStatus===2}function Y4(e){return e.requestStatus===2&&!W4(e)}function W4(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+S4}function Q4(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}function K4(e){return e.requestStatus===1&&e.requestTime+eR<Date.now()}/**
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
 */async function X4(e){const t=e,{installationEntry:n,registrationPromise:i}=await qv(t);return i?i.catch(console.error):Vv(t).catch(console.error),n.fid}/**
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
 */async function Z4(e,t=!1){const n=e;return await J4(n),(await Vv(n,t)).token}async function J4(e){const{registrationPromise:t}=await qv(e);t&&await t}/**
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
 */function e6(e){if(!e||!e.options)throw kg("App Configuration");if(!e.name)throw kg("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw kg(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function kg(e){return mo.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR="installations",t6="installations-internal",n6=e=>{const t=e.getProvider("app").getImmediate(),n=e6(t),i=Xa(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},r6=e=>{const t=e.getProvider("app").getImmediate(),n=Xa(t,gR).getImmediate();return{getId:()=>X4(n),getToken:o=>Z4(n,o)}};function i6(){Nr(new gr(gR,n6,"PUBLIC")),Nr(new gr(t6,r6,"PRIVATE"))}i6();Qn(JC,Hv);Qn(JC,Hv,"esm2020");/**
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
 */const s6="/firebase-messaging-sw.js",o6="/firebase-cloud-messaging-push-scope",yR="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",a6="https://fcmregistrations.googleapis.com/v1",vR="google.c.a.c_id",l6="google.c.a.c_l",c6="google.c.a.ts",u6="google.c.a.e",Kw=1e4;var Xw;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Xw||(Xw={}));/**
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
 */var Fc;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(Fc||(Fc={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function d6(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(n),o=new Uint8Array(i.length);for(let l=0;l<i.length;++l)o[l]=i.charCodeAt(l);return o}/**
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
 */const Lg="fcm_token_details_db",f6=5,Zw="fcm_token_object_Store";async function h6(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(l=>l.name).includes(Lg))return null;let t=null;return(await Mh(Lg,f6,{upgrade:async(i,o,l,u)=>{if(o<2||!i.objectStoreNames.contains(Zw))return;const f=u.objectStore(Zw),h=await f.index("fcmSenderId").get(e);if(await f.clear(),!!h){if(o===2){const p=h;if(!p.auth||!p.p256dh||!p.endpoint)return;t={token:p.fcmToken,createTime:p.createTime??Date.now(),subscriptionOptions:{auth:p.auth,p256dh:p.p256dh,endpoint:p.endpoint,swScope:p.swScope,vapidKey:typeof p.vapidKey=="string"?p.vapidKey:ii(p.vapidKey)}}}else if(o===3){const p=h;t={token:p.fcmToken,createTime:p.createTime,subscriptionOptions:{auth:ii(p.auth),p256dh:ii(p.p256dh),endpoint:p.endpoint,swScope:p.swScope,vapidKey:ii(p.vapidKey)}}}else if(o===4){const p=h;t={token:p.fcmToken,createTime:p.createTime,subscriptionOptions:{auth:ii(p.auth),p256dh:ii(p.p256dh),endpoint:p.endpoint,swScope:p.swScope,vapidKey:ii(p.vapidKey)}}}}}})).close(),await Dg(Lg),await Dg("fcm_vapid_details_db"),await Dg("undefined"),p6(t)?t:null}function p6(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
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
 */const m6="firebase-messaging-database",g6=1,qc="firebase-messaging-store";let Pg=null;function _R(){return Pg||(Pg=Mh(m6,g6,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(qc)}}})),Pg}async function y6(e){const t=bR(e),i=await(await _R()).transaction(qc).objectStore(qc).get(t);if(i)return i;{const o=await h6(e.appConfig.senderId);if(o)return await Gv(e,o),o}}async function Gv(e,t){const n=bR(e),o=(await _R()).transaction(qc,"readwrite");return await o.objectStore(qc).put(t,n),await o.done,t}function bR({appConfig:e}){return e.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v6={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},on=new Ro("messaging","Messaging",v6);/**
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
 */async function _6(e,t){const n=await Wv(e),i=SR(t),o={method:"POST",headers:n,body:JSON.stringify(i)};let l;try{l=await(await fetch(Yv(e.appConfig),o)).json()}catch(u){throw on.create("token-subscribe-failed",{errorInfo:u?.toString()})}if(l.error){const u=l.error.message;throw on.create("token-subscribe-failed",{errorInfo:u})}if(!l.token)throw on.create("token-subscribe-no-token");return l.token}async function b6(e,t){const n=await Wv(e),i=SR(t.subscriptionOptions),o={method:"PATCH",headers:n,body:JSON.stringify(i)};let l;try{l=await(await fetch(`${Yv(e.appConfig)}/${t.token}`,o)).json()}catch(u){throw on.create("token-update-failed",{errorInfo:u?.toString()})}if(l.error){const u=l.error.message;throw on.create("token-update-failed",{errorInfo:u})}if(!l.token)throw on.create("token-update-no-token");return l.token}async function S6(e,t){const i={method:"DELETE",headers:await Wv(e)};try{const l=await(await fetch(`${Yv(e.appConfig)}/${t}`,i)).json();if(l.error){const u=l.error.message;throw on.create("token-unsubscribe-failed",{errorInfo:u})}}catch(o){throw on.create("token-unsubscribe-failed",{errorInfo:o?.toString()})}}function Yv({projectId:e}){return`${a6}/projects/${e}/registrations`}async function Wv({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function SR({p256dh:e,auth:t,endpoint:n,vapidKey:i}){const o={web:{endpoint:n,auth:t,p256dh:e}};return i!==yR&&(o.web.applicationPubKey=i),o}/**
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
 */const w6=10080*60*1e3;async function E6(e){const t=await T6(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:ii(t.getKey("auth")),p256dh:ii(t.getKey("p256dh"))},i=await y6(e.firebaseDependencies);if(i){if(C6(i.subscriptionOptions,n))return Date.now()>=i.createTime+w6?x6(e,{token:i.token,createTime:Date.now(),subscriptionOptions:n}):i.token;try{await S6(e.firebaseDependencies,i.token)}catch(o){console.warn(o)}return Jw(e.firebaseDependencies,n)}else return Jw(e.firebaseDependencies,n)}async function x6(e,t){try{const n=await b6(e.firebaseDependencies,t),i={...t,token:n,createTime:Date.now()};return await Gv(e.firebaseDependencies,i),n}catch(n){throw n}}async function Jw(e,t){const i={token:await _6(e,t),createTime:Date.now(),subscriptionOptions:t};return await Gv(e,i),i.token}async function T6(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:d6(t)})}function C6(e,t){const n=t.vapidKey===e.vapidKey,i=t.endpoint===e.endpoint,o=t.auth===e.auth,l=t.p256dh===e.p256dh;return n&&i&&o&&l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eE(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return R6(t,e),A6(t,e),I6(t,e),t}function R6(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const i=t.notification.body;i&&(e.notification.body=i);const o=t.notification.image;o&&(e.notification.image=o);const l=t.notification.icon;l&&(e.notification.icon=l)}function A6(e,t){t.data&&(e.data=t.data)}function I6(e,t){if(!t.fcmOptions&&!t.notification?.click_action)return;e.fcmOptions={};const n=t.fcmOptions?.link??t.notification?.click_action;n&&(e.fcmOptions.link=n);const i=t.fcmOptions?.analytics_label;i&&(e.fcmOptions.analyticsLabel=i)}/**
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
 */function D6(e){return typeof e=="object"&&!!e&&vR in e}/**
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
 */function O6(e){if(!e||!e.options)throw jg("App Configuration Object");if(!e.name)throw jg("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const i of t)if(!n[i])throw jg(i);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function jg(e){return on.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N6{constructor(t,n,i){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=O6(t);this.firebaseDependencies={app:t,appConfig:o,installations:n,analyticsProvider:i}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M6(e){try{e.swRegistration=await navigator.serviceWorker.register(s6,{scope:o6}),e.swRegistration.update().catch(()=>{}),await k6(e.swRegistration)}catch(t){throw on.create("failed-service-worker-registration",{browserErrorMessage:t?.message})}}async function k6(e){return new Promise((t,n)=>{const i=setTimeout(()=>n(new Error(`Service worker not registered after ${Kw} ms`)),Kw),o=e.installing||e.waiting;e.active?(clearTimeout(i),t()):o?o.onstatechange=l=>{l.target?.state==="activated"&&(o.onstatechange=null,clearTimeout(i),t())}:(clearTimeout(i),n(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L6(e,t){if(!t&&!e.swRegistration&&await M6(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw on.create("invalid-sw-registration");e.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P6(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=yR)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wR(e,t){if(!navigator)throw on.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw on.create("permission-blocked");return await P6(e,t?.vapidKey),await L6(e,t?.serviceWorkerRegistration),E6(e)}/**
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
 */async function j6(e,t,n){const i=U6(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(i,{message_id:n[vR],message_name:n[l6],message_time:n[c6],message_device_time:Math.floor(Date.now()/1e3)})}function U6(e){switch(e){case Fc.NOTIFICATION_CLICKED:return"notification_open";case Fc.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $6(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===Fc.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(eE(n)):e.onMessageHandler.next(eE(n)));const i=n.data;D6(i)&&i[u6]==="1"&&await j6(e,n.messageType,i)}const tE="@firebase/messaging",nE="0.12.23";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z6=e=>{const t=new N6(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>$6(t,n)),t},B6=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:i=>wR(t,i)}};function H6(){Nr(new gr("messaging",z6,"PUBLIC")),Nr(new gr("messaging-internal",B6,"PRIVATE")),Qn(tE,nE),Qn(tE,nE,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F6(){try{await GC()}catch{return!1}return typeof window<"u"&&VC()&&nP()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q6(e,t){if(!navigator)throw on.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V6(e=Bv()){return F6().then(t=>{if(!t)throw on.create("unsupported-browser")},t=>{throw on.create("indexed-db-unsupported")}),Xa(Gt(e),"messaging").getImmediate()}async function G6(e,t){return e=Gt(e),wR(e,t)}function Y6(e,t){return e=Gt(e),q6(e,t)}H6();const Ph=e=>{try{return e()}catch(t){throw t}};var W6="firebase",Q6="12.2.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qn(W6,Q6,"app");const K6={apiKey:"AIzaSyAMtG6b23AqO2WbJ2ad8SKMXD1X4tfALtc",authDomain:"peloton-alerts.firebaseapp.com",projectId:"peloton-alerts",storageBucket:"peloton-alerts.appspot.com",messagingSenderId:"331185140393",appId:"1:331185140393:web:5f49c5c60b8b162914efb8",measurementId:"G-R2QRE36WEQ",databaseURL:"https://peloton-alerts-default-rtdb.firebaseio.com/"},Ac=Ph(()=>KC(K6)),wa=Ph(()=>V6(Ac)),X6="serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window,ER=async()=>{if(!("serviceWorker"in navigator))throw new Error("Service workers are not supported");return navigator.serviceWorker.register("/peloton-reservations/pr-preview/pr-42/messaging-sw.js",{type:"classic"})};let Ug=ER();const rE=async()=>{if(!wa)throw new Error("Messaging is not set up");if(!X6)throw new Error("Browser environment does not allow messaging");let e;try{e=await Ug,console.log("Registered service worker successfully")}catch(t){console.error("Failed to register service worker. Trying again...",t),Ug=ER(),e=await Ug}return G6(wa,{vapidKey:"BO9hF0_u2BKehXtAWTxtm7RtvIUGIEA5GT_jGycvCfUEW0yZZkLvtRB1Y8R_5KKBEODsLufyDkcBXn9rx5dHY5g",serviceWorkerRegistration:e})};function Zt(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var Z6=typeof Symbol=="function"&&Symbol.observable||"@@observable",iE=Z6,$g=()=>Math.random().toString(36).substring(7).split("").join("."),J6={INIT:`@@redux/INIT${$g()}`,REPLACE:`@@redux/REPLACE${$g()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${$g()}`},Ff=J6;function us(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function xR(e,t,n){if(typeof e!="function")throw new Error(Zt(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Zt(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Zt(1));return n(xR)(e,t)}let i=e,o=t,l=new Map,u=l,f=0,h=!1;function p(){u===l&&(u=new Map,l.forEach((T,A)=>{u.set(A,T)}))}function g(){if(h)throw new Error(Zt(3));return o}function y(T){if(typeof T!="function")throw new Error(Zt(4));if(h)throw new Error(Zt(5));let A=!0;p();const k=f++;return u.set(k,T),function(){if(A){if(h)throw new Error(Zt(6));A=!1,p(),u.delete(k),l=null}}}function _(T){if(!us(T))throw new Error(Zt(7));if(typeof T.type>"u")throw new Error(Zt(8));if(typeof T.type!="string")throw new Error(Zt(17));if(h)throw new Error(Zt(9));try{h=!0,o=i(o,T)}finally{h=!1}return(l=u).forEach(k=>{k()}),T}function S(T){if(typeof T!="function")throw new Error(Zt(10));i=T,_({type:Ff.REPLACE})}function w(){const T=y;return{subscribe(A){if(typeof A!="object"||A===null)throw new Error(Zt(11));function k(){const I=A;I.next&&I.next(g())}return k(),{unsubscribe:T(k)}},[iE](){return this}}}return _({type:Ff.INIT}),{dispatch:_,subscribe:y,getState:g,replaceReducer:S,[iE]:w}}function ej(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:Ff.INIT})>"u")throw new Error(Zt(12));if(typeof n(void 0,{type:Ff.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Zt(13))})}function TR(e){const t=Object.keys(e),n={};for(let l=0;l<t.length;l++){const u=t[l];typeof e[u]=="function"&&(n[u]=e[u])}const i=Object.keys(n);let o;try{ej(n)}catch(l){o=l}return function(u={},f){if(o)throw o;let h=!1;const p={};for(let g=0;g<i.length;g++){const y=i[g],_=n[y],S=u[y],w=_(S,f);if(typeof w>"u")throw f&&f.type,new Error(Zt(14));p[y]=w,h=h||w!==S}return h=h||i.length!==Object.keys(u).length,h?p:u}}function qf(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...i)=>t(n(...i)))}function tj(...e){return t=>(n,i)=>{const o=t(n,i);let l=()=>{throw new Error(Zt(15))};const u={getState:o.getState,dispatch:(h,...p)=>l(h,...p)},f=e.map(h=>h(u));return l=qf(...f)(o.dispatch),{...o,dispatch:l}}}function CR(e){return us(e)&&"type"in e&&typeof e.type=="string"}var Qv=Symbol.for("immer-nothing"),Ic=Symbol.for("immer-draftable"),Sn=Symbol.for("immer-state");function en(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Ua=Object.getPrototypeOf;function Mr(e){return!!e&&!!e[Sn]}function yr(e){return e?RR(e)||Array.isArray(e)||!!e[Ic]||!!e.constructor?.[Ic]||Ja(e)||fu(e):!1}var nj=Object.prototype.constructor.toString(),sE=new WeakMap;function RR(e){if(!e||typeof e!="object")return!1;const t=Object.getPrototypeOf(e);if(t===null||t===Object.prototype)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;if(n===Object)return!0;if(typeof n!="function")return!1;let i=sE.get(n);return i===void 0&&(i=Function.toString.call(n),sE.set(n,i)),i===nj}function rj(e){return Mr(e)||en(15,e),e[Sn].base_}function Vc(e,t,n=!0){yo(e)===0?(n?Reflect.ownKeys(e):Object.keys(e)).forEach(o=>{t(o,e[o],e)}):e.forEach((i,o)=>t(o,i,e))}function yo(e){const t=e[Sn];return t?t.type_:Array.isArray(e)?1:Ja(e)?2:fu(e)?3:0}function Gc(e,t){return yo(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function zg(e,t){return yo(e)===2?e.get(t):e[t]}function AR(e,t,n){const i=yo(e);i===2?e.set(t,n):i===3?e.add(n):e[t]=n}function ij(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function Ja(e){return e instanceof Map}function fu(e){return e instanceof Set}function Js(e){return e.copy_||e.base_}function Py(e,t){if(Ja(e))return new Map(e);if(fu(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const n=RR(e);if(t===!0||t==="class_only"&&!n){const i=Object.getOwnPropertyDescriptors(e);delete i[Sn];let o=Reflect.ownKeys(i);for(let l=0;l<o.length;l++){const u=o[l],f=i[u];f.writable===!1&&(f.writable=!0,f.configurable=!0),(f.get||f.set)&&(i[u]={configurable:!0,writable:!0,enumerable:f.enumerable,value:e[u]})}return Object.create(Ua(e),i)}else{const i=Ua(e);if(i!==null&&n)return{...e};const o=Object.create(i);return Object.assign(o,e)}}function Kv(e,t=!1){return jh(e)||Mr(e)||!yr(e)||(yo(e)>1&&Object.defineProperties(e,{set:Yd,add:Yd,clear:Yd,delete:Yd}),Object.freeze(e),t&&Object.values(e).forEach(n=>Kv(n,!0))),e}function sj(){en(2)}var Yd={value:sj};function jh(e){return e===null||typeof e!="object"?!0:Object.isFrozen(e)}var jy={};function vo(e){const t=jy[e];return t||en(0,e),t}function oj(e,t){jy[e]||(jy[e]=t)}var Yc;function IR(){return Yc}function aj(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function oE(e,t){t&&(vo("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Uy(e){$y(e),e.drafts_.forEach(lj),e.drafts_=null}function $y(e){e===Yc&&(Yc=e.parent_)}function aE(e){return Yc=aj(Yc,e)}function lj(e){const t=e[Sn];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function lE(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return e!==void 0&&e!==n?(n[Sn].modified_&&(Uy(t),en(4)),yr(e)&&(e=Vf(t,e),t.parent_||Gf(t,e)),t.patches_&&vo("Patches").generateReplacementPatches_(n[Sn].base_,e,t.patches_,t.inversePatches_)):e=Vf(t,n,[]),Uy(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==Qv?e:void 0}function Vf(e,t,n){if(jh(t))return t;const i=e.immer_.shouldUseStrictIteration(),o=t[Sn];if(!o)return Vc(t,(l,u)=>cE(e,o,t,l,u,n),i),t;if(o.scope_!==e)return t;if(!o.modified_)return Gf(e,o.base_,!0),o.base_;if(!o.finalized_){o.finalized_=!0,o.scope_.unfinalizedDrafts_--;const l=o.copy_;let u=l,f=!1;o.type_===3&&(u=new Set(l),l.clear(),f=!0),Vc(u,(h,p)=>cE(e,o,l,h,p,n,f),i),Gf(e,l,!1),n&&e.patches_&&vo("Patches").generatePatches_(o,n,e.patches_,e.inversePatches_)}return o.copy_}function cE(e,t,n,i,o,l,u){if(o==null||typeof o!="object"&&!u)return;const f=jh(o);if(!(f&&!u)){if(Mr(o)){const h=l&&t&&t.type_!==3&&!Gc(t.assigned_,i)?l.concat(i):void 0,p=Vf(e,o,h);if(AR(n,i,p),Mr(p))e.canAutoFreeze_=!1;else return}else u&&n.add(o);if(yr(o)&&!f){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1||t&&t.base_&&t.base_[i]===o&&f)return;Vf(e,o),(!t||!t.scope_.parent_)&&typeof i!="symbol"&&(Ja(n)?n.has(i):Object.prototype.propertyIsEnumerable.call(n,i))&&Gf(e,o)}}}function Gf(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Kv(t,n)}function cj(e,t){const n=Array.isArray(e),i={type_:n?1:0,scope_:t?t.scope_:IR(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=i,l=Xv;n&&(o=[i],l=Wc);const{revoke:u,proxy:f}=Proxy.revocable(o,l);return i.draft_=f,i.revoke_=u,f}var Xv={get(e,t){if(t===Sn)return e;const n=Js(e);if(!Gc(n,t))return uj(e,n,t);const i=n[t];return e.finalized_||!yr(i)?i:i===Bg(e.base_,t)?(Hg(e),e.copy_[t]=By(i,e)):i},has(e,t){return t in Js(e)},ownKeys(e){return Reflect.ownKeys(Js(e))},set(e,t,n){const i=DR(Js(e),t);if(i?.set)return i.set.call(e.draft_,n),!0;if(!e.modified_){const o=Bg(Js(e),t),l=o?.[Sn];if(l&&l.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(ij(n,o)&&(n!==void 0||Gc(e.base_,t)))return!0;Hg(e),zy(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty(e,t){return Bg(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,Hg(e),zy(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=Js(e),i=Reflect.getOwnPropertyDescriptor(n,t);return i&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:i.enumerable,value:n[t]}},defineProperty(){en(11)},getPrototypeOf(e){return Ua(e.base_)},setPrototypeOf(){en(12)}},Wc={};Vc(Xv,(e,t)=>{Wc[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});Wc.deleteProperty=function(e,t){return Wc.set.call(this,e,t,void 0)};Wc.set=function(e,t,n){return Xv.set.call(this,e[0],t,n,e[0])};function Bg(e,t){const n=e[Sn];return(n?Js(n):e)[t]}function uj(e,t,n){const i=DR(t,n);return i?"value"in i?i.value:i.get?.call(e.draft_):void 0}function DR(e,t){if(!(t in e))return;let n=Ua(e);for(;n;){const i=Object.getOwnPropertyDescriptor(n,t);if(i)return i;n=Ua(n)}}function zy(e){e.modified_||(e.modified_=!0,e.parent_&&zy(e.parent_))}function Hg(e){e.copy_||(e.copy_=Py(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var dj=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!0,this.produce=(t,n,i)=>{if(typeof t=="function"&&typeof n!="function"){const l=n;n=t;const u=this;return function(h=l,...p){return u.produce(h,g=>n.call(this,g,...p))}}typeof n!="function"&&en(6),i!==void 0&&typeof i!="function"&&en(7);let o;if(yr(t)){const l=aE(this),u=By(t,void 0);let f=!0;try{o=n(u),f=!1}finally{f?Uy(l):$y(l)}return oE(l,i),lE(o,l)}else if(!t||typeof t!="object"){if(o=n(t),o===void 0&&(o=t),o===Qv&&(o=void 0),this.autoFreeze_&&Kv(o,!0),i){const l=[],u=[];vo("Patches").generateReplacementPatches_(t,o,l,u),i(l,u)}return o}else en(1,t)},this.produceWithPatches=(t,n)=>{if(typeof t=="function")return(u,...f)=>this.produceWithPatches(u,h=>t(h,...f));let i,o;return[this.produce(t,n,(u,f)=>{i=u,o=f}),i,o]},typeof e?.autoFreeze=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof e?.useStrictShallowCopy=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),typeof e?.useStrictIteration=="boolean"&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){yr(e)||en(8),Mr(e)&&(e=fj(e));const t=aE(this),n=By(e,void 0);return n[Sn].isManual_=!0,$y(t),n}finishDraft(e,t){const n=e&&e[Sn];(!n||!n.isManual_)&&en(9);const{scope_:i}=n;return oE(i,t),lE(void 0,i)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const o=t[n];if(o.path.length===0&&o.op==="replace"){e=o.value;break}}n>-1&&(t=t.slice(n+1));const i=vo("Patches").applyPatches_;return Mr(e)?i(e,t):this.produce(e,o=>i(o,t))}};function By(e,t){const n=Ja(e)?vo("MapSet").proxyMap_(e,t):fu(e)?vo("MapSet").proxySet_(e,t):cj(e,t);return(t?t.scope_:IR()).drafts_.push(n),n}function fj(e){return Mr(e)||en(10,e),OR(e)}function OR(e){if(!yr(e)||jh(e))return e;const t=e[Sn];let n,i=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=Py(e,t.scope_.immer_.useStrictShallowCopy_),i=t.scope_.immer_.shouldUseStrictIteration()}else n=Py(e,!0);return Vc(n,(o,l)=>{AR(n,o,OR(l))},i),t&&(t.finalized_=!1),n}function hj(){const t="replace",i="remove";function o(_,S,w,O){switch(_.type_){case 0:case 2:return u(_,S,w,O);case 1:return l(_,S,w,O);case 3:return f(_,S,w,O)}}function l(_,S,w,O){let{base_:T,assigned_:A}=_,k=_.copy_;k.length<T.length&&([T,k]=[k,T],[w,O]=[O,w]);for(let x=0;x<T.length;x++)if(A[x]&&k[x]!==T[x]){const I=S.concat([x]);w.push({op:t,path:I,value:y(k[x])}),O.push({op:t,path:I,value:y(T[x])})}for(let x=T.length;x<k.length;x++){const I=S.concat([x]);w.push({op:"add",path:I,value:y(k[x])})}for(let x=k.length-1;T.length<=x;--x){const I=S.concat([x]);O.push({op:i,path:I})}}function u(_,S,w,O){const{base_:T,copy_:A}=_;Vc(_.assigned_,(k,x)=>{const I=zg(T,k),M=zg(A,k),R=x?Gc(T,k)?t:"add":i;if(I===M&&R===t)return;const P=S.concat(k);w.push(R===i?{op:R,path:P}:{op:R,path:P,value:M}),O.push(R==="add"?{op:i,path:P}:R===i?{op:"add",path:P,value:y(I)}:{op:t,path:P,value:y(I)})})}function f(_,S,w,O){let{base_:T,copy_:A}=_,k=0;T.forEach(x=>{if(!A.has(x)){const I=S.concat([k]);w.push({op:i,path:I,value:x}),O.unshift({op:"add",path:I,value:x})}k++}),k=0,A.forEach(x=>{if(!T.has(x)){const I=S.concat([k]);w.push({op:"add",path:I,value:x}),O.unshift({op:i,path:I,value:x})}k++})}function h(_,S,w,O){w.push({op:t,path:[],value:S===Qv?void 0:S}),O.push({op:t,path:[],value:_})}function p(_,S){return S.forEach(w=>{const{path:O,op:T}=w;let A=_;for(let M=0;M<O.length-1;M++){const R=yo(A);let P=O[M];typeof P!="string"&&typeof P!="number"&&(P=""+P),(R===0||R===1)&&(P==="__proto__"||P==="constructor")&&en(19),typeof A=="function"&&P==="prototype"&&en(19),A=zg(A,P),typeof A!="object"&&en(18,O.join("/"))}const k=yo(A),x=g(w.value),I=O[O.length-1];switch(T){case t:switch(k){case 2:return A.set(I,x);case 3:en(16);default:return A[I]=x}case"add":switch(k){case 1:return I==="-"?A.push(x):A.splice(I,0,x);case 2:return A.set(I,x);case 3:return A.add(x);default:return A[I]=x}case i:switch(k){case 1:return A.splice(I,1);case 2:return A.delete(I);case 3:return A.delete(w.value);default:return delete A[I]}default:en(17,T)}}),_}function g(_){if(!yr(_))return _;if(Array.isArray(_))return _.map(g);if(Ja(_))return new Map(Array.from(_.entries()).map(([w,O])=>[w,g(O)]));if(fu(_))return new Set(Array.from(_).map(g));const S=Object.create(Ua(_));for(const w in _)S[w]=g(_[w]);return Gc(_,Ic)&&(S[Ic]=_[Ic]),S}function y(_){return Mr(_)?g(_):_}oj("Patches",{applyPatches_:p,generatePatches_:o,generateReplacementPatches_:h})}var Qc=new dj,hu=Qc.produce,NR=Qc.produceWithPatches.bind(Qc),uE=Qc.applyPatches.bind(Qc);function pj(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(t)}function mj(e,t=`expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(t)}function gj(e,t="expected all items to be functions, instead received the following types: "){if(!e.every(n=>typeof n=="function")){const n=e.map(i=>typeof i=="function"?`function ${i.name||"unnamed"}()`:typeof i).join(", ");throw new TypeError(`${t}[${n}]`)}}var dE=e=>Array.isArray(e)?e:[e];function yj(e){const t=Array.isArray(e[0])?e[0]:e;return gj(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}function vj(e,t){const n=[],{length:i}=e;for(let o=0;o<i;o++)n.push(e[o].apply(null,t));return n}var _j=class{constructor(e){this.value=e}deref(){return this.value}},bj=typeof WeakRef<"u"?WeakRef:_j,Sj=0,fE=1;function Wd(){return{s:Sj,v:void 0,o:null,p:null}}function Yf(e,t={}){let n=Wd();const{resultEqualityCheck:i}=t;let o,l=0;function u(){let f=n;const{length:h}=arguments;for(let y=0,_=h;y<_;y++){const S=arguments[y];if(typeof S=="function"||typeof S=="object"&&S!==null){let w=f.o;w===null&&(f.o=w=new WeakMap);const O=w.get(S);O===void 0?(f=Wd(),w.set(S,f)):f=O}else{let w=f.p;w===null&&(f.p=w=new Map);const O=w.get(S);O===void 0?(f=Wd(),w.set(S,f)):f=O}}const p=f;let g;if(f.s===fE)g=f.v;else if(g=e.apply(null,arguments),l++,i){const y=o?.deref?.()??o;y!=null&&i(y,g)&&(g=y,l!==0&&l--),o=typeof g=="object"&&g!==null||typeof g=="function"?new bj(g):g}return p.s=fE,p.v=g,g}return u.clearCache=()=>{n=Wd(),u.resetResultsCount()},u.resultsCount=()=>l,u.resetResultsCount=()=>{l=0},u}function wj(e,...t){const n=typeof e=="function"?{memoize:e,memoizeOptions:t}:e,i=(...o)=>{let l=0,u=0,f,h={},p=o.pop();typeof p=="object"&&(h=p,p=o.pop()),pj(p,`createSelector expects an output function after the inputs, but received: [${typeof p}]`);const g={...n,...h},{memoize:y,memoizeOptions:_=[],argsMemoize:S=Yf,argsMemoizeOptions:w=[]}=g,O=dE(_),T=dE(w),A=yj(o),k=y(function(){return l++,p.apply(null,arguments)},...O),x=S(function(){u++;const M=vj(A,arguments);return f=k.apply(null,M),f},...T);return Object.assign(x,{resultFunc:p,memoizedResultFunc:k,dependencies:A,dependencyRecomputations:()=>u,resetDependencyRecomputations:()=>{u=0},lastResult:()=>f,recomputations:()=>l,resetRecomputations:()=>{l=0},memoize:y,argsMemoize:S})};return Object.assign(i,{withTypes:()=>i}),i}var bi=wj(Yf),Ej=Object.assign((e,t=bi)=>{mj(e,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);const n=Object.keys(e),i=n.map(l=>e[l]);return t(i,(...l)=>l.reduce((u,f,h)=>(u[n[h]]=f,u),{}))},{withTypes:()=>Ej});function MR(e){return({dispatch:n,getState:i})=>o=>l=>typeof l=="function"?l(n,i,e):o(l)}var xj=MR(),Tj=MR,Cj=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?qf:qf.apply(null,arguments)},Rj=e=>e&&typeof e.match=="function";function fr(e,t){function n(...i){if(t){let o=t(...i);if(!o)throw new Error(hr(0));return{type:e,payload:o.payload,..."meta"in o&&{meta:o.meta},..."error"in o&&{error:o.error}}}return{type:e,payload:i[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=i=>CR(i)&&i.type===e,n}var kR=class wc extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,wc.prototype)}static get[Symbol.species](){return wc}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new wc(...t[0].concat(this)):new wc(...t.concat(this))}};function hE(e){return yr(e)?hu(e,()=>{}):e}function Qd(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function Aj(e){return typeof e=="boolean"}var Ij=()=>function(t){const{thunk:n=!0,immutableCheck:i=!0,serializableCheck:o=!0,actionCreatorCheck:l=!0}=t??{};let u=new kR;return n&&(Aj(n)?u.push(xj):u.push(Tj(n.extraArgument))),u},Uh="RTK_autoBatch",oc=()=>e=>({payload:e,meta:{[Uh]:!0}}),pE=e=>t=>{setTimeout(t,e)},Dj=(e={type:"raf"})=>t=>(...n)=>{const i=t(...n);let o=!0,l=!1,u=!1;const f=new Set,h=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:pE(10):e.type==="callback"?e.queueNotification:pE(e.timeout),p=()=>{u=!1,l&&(l=!1,f.forEach(g=>g()))};return Object.assign({},i,{subscribe(g){const y=()=>o&&g(),_=i.subscribe(y);return f.add(g),()=>{_(),f.delete(g)}},dispatch(g){try{return o=!g?.meta?.[Uh],l=!o,l&&(u||(u=!0,h(p))),i.dispatch(g)}finally{o=!0}}})},Oj=e=>function(n){const{autoBatch:i=!0}=n??{};let o=new kR(e);return i&&o.push(Dj(typeof i=="object"?i:void 0)),o};function Nj(e){const t=Ij(),{reducer:n=void 0,middleware:i,devTools:o=!0,preloadedState:l=void 0,enhancers:u=void 0}=e||{};let f;if(typeof n=="function")f=n;else if(us(n))f=TR(n);else throw new Error(hr(1));let h;typeof i=="function"?h=i(t):h=t();let p=qf;o&&(p=Cj({trace:!1,...typeof o=="object"&&o}));const g=tj(...h),y=Oj(g);let _=typeof u=="function"?u(y):y();const S=p(..._);return xR(f,l,S)}function LR(e){const t={},n=[];let i;const o={addCase(l,u){const f=typeof l=="string"?l:l.type;if(!f)throw new Error(hr(28));if(f in t)throw new Error(hr(29));return t[f]=u,o},addAsyncThunk(l,u){return u.pending&&(t[l.pending.type]=u.pending),u.rejected&&(t[l.rejected.type]=u.rejected),u.fulfilled&&(t[l.fulfilled.type]=u.fulfilled),u.settled&&n.push({matcher:l.settled,reducer:u.settled}),o},addMatcher(l,u){return n.push({matcher:l,reducer:u}),o},addDefaultCase(l){return i=l,o}};return e(o),[t,n,i]}function Mj(e){return typeof e=="function"}function kj(e,t){let[n,i,o]=LR(t),l;if(Mj(e))l=()=>hE(e());else{const f=hE(e);l=()=>f}function u(f=l(),h){let p=[n[h.type],...i.filter(({matcher:g})=>g(h)).map(({reducer:g})=>g)];return p.filter(g=>!!g).length===0&&(p=[o]),p.reduce((g,y)=>{if(y)if(Mr(g)){const S=y(g,h);return S===void 0?g:S}else{if(yr(g))return hu(g,_=>y(_,h));{const _=y(g,h);if(_===void 0){if(g===null)return g;throw Error("A case reducer on a non-draftable value must not return undefined")}return _}}return g},f)}return u.getInitialState=l,u}var PR=(e,t)=>Rj(e)?e.match(t):e(t);function pi(...e){return t=>e.some(n=>PR(n,t))}function Dc(...e){return t=>e.every(n=>PR(n,t))}function $h(e,t){if(!e||!e.meta)return!1;const n=typeof e.meta.requestId=="string",i=t.indexOf(e.meta.requestStatus)>-1;return n&&i}function pu(e){return typeof e[0]=="function"&&"pending"in e[0]&&"fulfilled"in e[0]&&"rejected"in e[0]}function Zv(...e){return e.length===0?t=>$h(t,["pending"]):pu(e)?pi(...e.map(t=>t.pending)):Zv()(e[0])}function $a(...e){return e.length===0?t=>$h(t,["rejected"]):pu(e)?pi(...e.map(t=>t.rejected)):$a()(e[0])}function zh(...e){const t=n=>n&&n.meta&&n.meta.rejectedWithValue;return e.length===0?Dc($a(...e),t):pu(e)?Dc($a(...e),t):zh()(e[0])}function ds(...e){return e.length===0?t=>$h(t,["fulfilled"]):pu(e)?pi(...e.map(t=>t.fulfilled)):ds()(e[0])}function Hy(...e){return e.length===0?t=>$h(t,["pending","fulfilled","rejected"]):pu(e)?pi(...e.flatMap(t=>[t.pending,t.rejected,t.fulfilled])):Hy()(e[0])}var Lj="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",Jv=(e=21)=>{let t="",n=e;for(;n--;)t+=Lj[Math.random()*64|0];return t},Pj=["name","message","stack","code"],Fg=class{constructor(e,t){this.payload=e,this.meta=t}_type},mE=class{constructor(e,t){this.payload=e,this.meta=t}_type},jj=e=>{if(typeof e=="object"&&e!==null){const t={};for(const n of Pj)typeof e[n]=="string"&&(t[n]=e[n]);return t}return{message:String(e)}},gE="External signal was aborted",yE=(()=>{function e(t,n,i){const o=fr(t+"/fulfilled",(h,p,g,y)=>({payload:h,meta:{...y||{},arg:g,requestId:p,requestStatus:"fulfilled"}})),l=fr(t+"/pending",(h,p,g)=>({payload:void 0,meta:{...g||{},arg:p,requestId:h,requestStatus:"pending"}})),u=fr(t+"/rejected",(h,p,g,y,_)=>({payload:y,error:(i&&i.serializeError||jj)(h||"Rejected"),meta:{..._||{},arg:g,requestId:p,rejectedWithValue:!!y,requestStatus:"rejected",aborted:h?.name==="AbortError",condition:h?.name==="ConditionError"}}));function f(h,{signal:p}={}){return(g,y,_)=>{const S=i?.idGenerator?i.idGenerator(h):Jv(),w=new AbortController;let O,T;function A(x){T=x,w.abort()}p&&(p.aborted?A(gE):p.addEventListener("abort",()=>A(gE),{once:!0}));const k=(async function(){let x;try{let M=i?.condition?.(h,{getState:y,extra:_});if($j(M)&&(M=await M),M===!1||w.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const R=new Promise((P,V)=>{O=()=>{V({name:"AbortError",message:T||"Aborted"})},w.signal.addEventListener("abort",O)});g(l(S,h,i?.getPendingMeta?.({requestId:S,arg:h},{getState:y,extra:_}))),x=await Promise.race([R,Promise.resolve(n(h,{dispatch:g,getState:y,extra:_,requestId:S,signal:w.signal,abort:A,rejectWithValue:(P,V)=>new Fg(P,V),fulfillWithValue:(P,V)=>new mE(P,V)})).then(P=>{if(P instanceof Fg)throw P;return P instanceof mE?o(P.payload,S,h,P.meta):o(P,S,h)})])}catch(M){x=M instanceof Fg?u(null,S,h,M.payload,M.meta):u(M,S,h)}finally{O&&w.signal.removeEventListener("abort",O)}return i&&!i.dispatchConditionRejection&&u.match(x)&&x.meta.condition||g(x),x})();return Object.assign(k,{abort:A,requestId:S,arg:h,unwrap(){return k.then(Uj)}})}}return Object.assign(f,{pending:l,rejected:u,fulfilled:o,settled:pi(u,o),typePrefix:t})}return e.withTypes=()=>e,e})();function Uj(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function $j(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var zj=Symbol.for("rtk-slice-createasyncthunk");function Bj(e,t){return`${e}/${t}`}function Hj({creators:e}={}){const t=e?.asyncThunk?.[zj];return function(i){const{name:o,reducerPath:l=o}=i;if(!o)throw new Error(hr(11));const u=(typeof i.reducers=="function"?i.reducers(qj()):i.reducers)||{},f=Object.keys(u),h={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},p={addCase(x,I){const M=typeof x=="string"?x:x.type;if(!M)throw new Error(hr(12));if(M in h.sliceCaseReducersByType)throw new Error(hr(13));return h.sliceCaseReducersByType[M]=I,p},addMatcher(x,I){return h.sliceMatchers.push({matcher:x,reducer:I}),p},exposeAction(x,I){return h.actionCreators[x]=I,p},exposeCaseReducer(x,I){return h.sliceCaseReducersByName[x]=I,p}};f.forEach(x=>{const I=u[x],M={reducerName:x,type:Bj(o,x),createNotation:typeof i.reducers=="function"};Gj(I)?Wj(M,I,p,t):Vj(M,I,p)});function g(){const[x={},I=[],M=void 0]=typeof i.extraReducers=="function"?LR(i.extraReducers):[i.extraReducers],R={...x,...h.sliceCaseReducersByType};return kj(i.initialState,P=>{for(let V in R)P.addCase(V,R[V]);for(let V of h.sliceMatchers)P.addMatcher(V.matcher,V.reducer);for(let V of I)P.addMatcher(V.matcher,V.reducer);M&&P.addDefaultCase(M)})}const y=x=>x,_=new Map,S=new WeakMap;let w;function O(x,I){return w||(w=g()),w(x,I)}function T(){return w||(w=g()),w.getInitialState()}function A(x,I=!1){function M(P){let V=P[x];return typeof V>"u"&&I&&(V=Qd(S,M,T)),V}function R(P=y){const V=Qd(_,I,()=>new WeakMap);return Qd(V,P,()=>{const H={};for(const[B,z]of Object.entries(i.selectors??{}))H[B]=Fj(z,P,()=>Qd(S,P,T),I);return H})}return{reducerPath:x,getSelectors:R,get selectors(){return R(M)},selectSlice:M}}const k={name:o,reducer:O,actions:h.actionCreators,caseReducers:h.sliceCaseReducersByName,getInitialState:T,...A(l),injectInto(x,{reducerPath:I,...M}={}){const R=I??l;return x.inject({reducerPath:R,reducer:O},M),{...k,...A(R,!0)}}};return k}}function Fj(e,t,n,i){function o(l,...u){let f=t(l);return typeof f>"u"&&i&&(f=n()),e(f,...u)}return o.unwrapped=e,o}var Ar=Hj();function qj(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function Vj({type:e,reducerName:t,createNotation:n},i,o){let l,u;if("reducer"in i){if(n&&!Yj(i))throw new Error(hr(17));l=i.reducer,u=i.prepare}else l=i;o.addCase(e,l).exposeCaseReducer(t,l).exposeAction(t,u?fr(e,u):fr(e))}function Gj(e){return e._reducerDefinitionType==="asyncThunk"}function Yj(e){return e._reducerDefinitionType==="reducerWithPrepare"}function Wj({type:e,reducerName:t},n,i,o){if(!o)throw new Error(hr(18));const{payloadCreator:l,fulfilled:u,pending:f,rejected:h,settled:p,options:g}=n,y=o(e,l,g);i.exposeAction(t,y),u&&i.addCase(y.fulfilled,u),f&&i.addCase(y.pending,f),h&&i.addCase(y.rejected,h),p&&i.addMatcher(y.settled,p),i.exposeCaseReducer(t,{fulfilled:u||Kd,pending:f||Kd,rejected:h||Kd,settled:p||Kd})}function Kd(){}function hr(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const el=e=>e.session,mu=bi([el],e=>{if(e.state==="fulfilled")return e.data?.id}),gs=kT,ct=LT,gu=C.createContext({refreshToken:()=>{},deleteToken:()=>Promise.reject("Not implemented")});var vE={};const _E="@firebase/database",bE="1.1.0";/**
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
 */let jR="";function Qj(e){jR=e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kj{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,n){n==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),$t(n))}get(t){const n=this.domStorage_.getItem(this.prefixedName_(t));return n==null?null:Bc(n)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xj{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,n){n==null?delete this.cache_[t]:this.cache_[t]=n}get(t){return kr(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UR=function(e){try{if(typeof window<"u"&&typeof window[e]<"u"){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Kj(t)}}catch{}return new Xj},io=UR("localStorage"),Zj=UR("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca=new $v("@firebase/database"),Jj=(function(){let e=1;return function(){return e++}})(),$R=function(e){const t=fP(e),n=new lP;n.update(t);const i=n.digest();return Pv.encodeByteArray(i)},yu=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?t+=yu.apply(null,i):typeof i=="object"?t+=$t(i):t+=i,t+=" "}return t};let Oc=null,SE=!0;const e3=function(e,t){he(!0,"Can't turn on custom loggers persistently."),Ca.logLevel=lt.VERBOSE,Oc=Ca.log.bind(Ca)},Jt=function(...e){if(SE===!0&&(SE=!1,Oc===null&&Zj.get("logging_enabled")===!0&&e3()),Oc){const t=yu.apply(null,e);Oc(t)}},vu=function(e){return function(...t){Jt(e,...t)}},Fy=function(...e){const t="FIREBASE INTERNAL ERROR: "+yu(...e);Ca.error(t)},mi=function(...e){const t=`FIREBASE FATAL ERROR: ${yu(...e)}`;throw Ca.error(t),new Error(t)},dn=function(...e){const t="FIREBASE WARNING: "+yu(...e);Ca.warn(t)},t3=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&dn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},e_=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},n3=function(e){if(document.readyState==="complete")e();else{let t=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},za="[MIN_NAME]",_o="[MAX_NAME]",Ao=function(e,t){if(e===t)return 0;if(e===za||t===_o)return-1;if(t===za||e===_o)return 1;{const n=wE(e),i=wE(t);return n!==null?i!==null?n-i===0?e.length-t.length:n-i:-1:i!==null?1:e<t?-1:1}},r3=function(e,t){return e===t?0:e<t?-1:1},ac=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+$t(t))},t_=function(e){if(typeof e!="object"||e===null)return $t(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)i!==0&&(n+=","),n+=$t(t[i]),n+=":",n+=t_(e[t[i]]);return n+="}",n},zR=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let o=0;o<n;o+=t)o+t>n?i.push(e.substring(o,n)):i.push(e.substring(o,o+t));return i};function tn(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const BR=function(e){he(!e_(e),"Invalid JSON number");const t=11,n=52,i=(1<<t-1)-1;let o,l,u,f,h;e===0?(l=0,u=0,o=1/e===-1/0?1:0):(o=e<0,e=Math.abs(e),e>=Math.pow(2,1-i)?(f=Math.min(Math.floor(Math.log(e)/Math.LN2),i),l=f+i,u=Math.round(e*Math.pow(2,n-f)-Math.pow(2,n))):(l=0,u=Math.round(e/Math.pow(2,1-i-n))));const p=[];for(h=n;h;h-=1)p.push(u%2?1:0),u=Math.floor(u/2);for(h=t;h;h-=1)p.push(l%2?1:0),l=Math.floor(l/2);p.push(o?1:0),p.reverse();const g=p.join("");let y="";for(h=0;h<64;h+=8){let _=parseInt(g.substr(h,8),2).toString(16);_.length===1&&(_="0"+_),y=y+_}return y.toLowerCase()},i3=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},s3=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function o3(e,t){let n="Unknown Error";e==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":e==="permission_denied"?n="Client doesn't have permission to access the desired data.":e==="unavailable"&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}const a3=new RegExp("^-?(0*)\\d{1,10}$"),l3=-2147483648,c3=2147483647,wE=function(e){if(a3.test(e)){const t=Number(e);if(t>=l3&&t<=c3)return t}return null},tl=function(e){try{e()}catch(t){setTimeout(()=>{const n=t.stack||"";throw dn("Exception was thrown by user callback.",n),t},Math.floor(0))}},u3=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Nc=function(e,t){const n=setTimeout(e,t);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class d3{constructor(t,n){this.appCheckProvider=n,this.appName=t.name,Mn(t)&&t.settings.appCheckToken&&(this.serverAppAppCheckToken=t.settings.appCheckToken),this.appCheck=n?.getImmediate({optional:!0}),this.appCheck||n?.get().then(i=>this.appCheck=i)}getToken(t){if(this.serverAppAppCheckToken){if(t)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(t):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(n,i):n(null)},0)})}addTokenChangeListener(t){this.appCheckProvider?.get().then(n=>n.addTokenListener(t))}notifyForInvalidToken(){dn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f3{constructor(t,n,i){this.appName_=t,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(o=>this.auth_=o)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(n=>n&&n.code==="auth/token-not-initialized"?(Jt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(n,i):n(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(n=>n.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(n=>n.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',dn(t)}}class wf{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}wf.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_="5",HR="v",FR="s",qR="r",VR="f",GR=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,YR="ls",WR="p",qy="ac",QR="websocket",KR="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(t,n,i,o,l=!1,u="",f=!1,h=!1,p=null){this.secure=n,this.namespace=i,this.webSocketOnly=o,this.nodeAdmin=l,this.persistenceKey=u,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=h,this.emulatorOptions=p,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=io.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&io.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${n}`}}function h3(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function ZR(e,t,n){he(typeof t=="string","typeof type must == string"),he(typeof n=="object","typeof params must == object");let i;if(t===QR)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===KR)i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);h3(e)&&(n.ns=e.namespace);const o=[];return tn(n,(l,u)=>{o.push(l+"="+u)}),i+o.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p3{constructor(){this.counters_={}}incrementCounter(t,n=1){kr(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=n}get(){return HL(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg={},Vg={};function r_(e){const t=e.toString();return qg[t]||(qg[t]=new p3),qg[t]}function m3(e,t){const n=e.toString();return Vg[n]||(Vg[n]=t()),Vg[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g3{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,n){this.closeAfterResponse=t,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,n){for(this.pendingResponses[t]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<i.length;++o)i[o]&&tl(()=>{this.onMessage_(i[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EE="start",y3="close",v3="pLPCommand",_3="pRTLPCB",JR="id",eA="pw",tA="ser",b3="cb",S3="seg",w3="ts",E3="d",x3="dframe",nA=1870,rA=30,T3=nA-rA,C3=25e3,R3=3e4;class Ea{constructor(t,n,i,o,l,u,f){this.connId=t,this.repoInfo=n,this.applicationId=i,this.appCheckToken=o,this.authToken=l,this.transportSessionId=u,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=vu(t),this.stats_=r_(n),this.urlFn=h=>(this.appCheckToken&&(h[qy]=this.appCheckToken),ZR(n,KR,h))}open(t,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new g3(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(R3)),n3(()=>{if(this.isClosed_)return;this.scriptTagHolder=new i_((...l)=>{const[u,f,h,p,g]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===EE)this.id=f,this.password=h;else if(u===y3)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...l)=>{const[u,f]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(u,f)},()=>{this.onClosed_()},this.urlFn);const i={};i[EE]="t",i[tA]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[b3]=this.scriptTagHolder.uniqueCallbackIdentifier),i[HR]=n_,this.transportSessionId&&(i[FR]=this.transportSessionId),this.lastSessionId&&(i[YR]=this.lastSessionId),this.applicationId&&(i[WR]=this.applicationId),this.appCheckToken&&(i[qy]=this.appCheckToken),typeof location<"u"&&location.hostname&&GR.test(location.hostname)&&(i[qR]=VR);const o=this.urlFn(i);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ea.forceAllow_=!0}static forceDisallow(){Ea.forceDisallow_=!0}static isAvailable(){return Ea.forceAllow_?!0:!Ea.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!i3()&&!s3()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const n=$t(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=jC(n),o=zR(i,T3);for(let l=0;l<o.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[l]),this.curSegmentNum++}addDisconnectPingFrame(t,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[x3]="t",i[JR]=t,i[eA]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const n=$t(t).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class i_{constructor(t,n,i,o){this.onDisconnect=i,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Jj(),window[v3+this.uniqueCallbackIdentifier]=t,window[_3+this.uniqueCallbackIdentifier]=n,this.myIFrame=i_.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(f){Jt("frame writing exception"),f.stack&&Jt(f.stack),Jt(f)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||Jt("No IE domain setting required")}catch{const i=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,n){for(this.myID=t,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[JR]=this.myID,t[eA]=this.myPW,t[tA]=this.currentSerial;let n=this.urlFn(t),i="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+rA+i.length<=nA;){const u=this.pendingSegs.shift();i=i+"&"+S3+o+"="+u.seg+"&"+w3+o+"="+u.ts+"&"+E3+o+"="+u.d,o++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(t,n,i){this.pendingSegs.push({seg:t,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(t,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},o=setTimeout(i,Math.floor(C3)),l=()=>{clearTimeout(o),i()};this.addTag(t,l)}addTag(t,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=t,i.onload=i.onreadystatechange=function(){const o=i.readyState;(!o||o==="loaded"||o==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Jt("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A3=16384,I3=45e3;let Wf=null;typeof MozWebSocket<"u"?Wf=MozWebSocket:typeof WebSocket<"u"&&(Wf=WebSocket);class lr{constructor(t,n,i,o,l,u,f){this.connId=t,this.applicationId=i,this.appCheckToken=o,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=vu(this.connId),this.stats_=r_(n),this.connURL=lr.connectionURL_(n,u,f,o,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(t,n,i,o,l){const u={};return u[HR]=n_,typeof location<"u"&&location.hostname&&GR.test(location.hostname)&&(u[qR]=VR),n&&(u[FR]=n),i&&(u[YR]=i),o&&(u[qy]=o),l&&(u[WR]=l),ZR(t,QR,u)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,io.set("previous_websocket_failure",!0);try{let i;tP(),this.mySock=new Wf(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const o=i.message||i.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const o=i.message||i.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){lr.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(t=!0)}return!t&&Wf!==null&&!lr.forceDisallow_}static previouslyFailed(){return io.isInMemoryStorage||io.get("previous_websocket_failure")===!0}markConnectionHealthy(){io.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Bc(n);this.onMessage(i)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(he(this.frames===null,"We already have a frame buffer"),t.length<=6){const n=Number(t);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const n=t.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(t){this.resetKeepAlive();const n=$t(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=zR(n,A3);i.length>1&&this.sendString_(String(i.length));for(let o=0;o<i.length;o++)this.sendString_(i[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(I3))}sendString_(t){try{this.mySock.send(t)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}lr.responsesRequiredToBeHealthy=2;lr.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{static get ALL_TRANSPORTS(){return[Ea,lr]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(t){this.initTransports_(t)}initTransports_(t){const n=lr&&lr.isAvailable();let i=n&&!lr.previouslyFailed();if(t.webSocketOnly&&(n||dn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[lr];else{const o=this.transports_=[];for(const l of Kc.ALL_TRANSPORTS)l&&l.isAvailable()&&o.push(l);Kc.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Kc.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D3=6e4,O3=5e3,N3=10*1024,M3=100*1024,Gg="t",xE="d",k3="s",TE="r",L3="e",CE="o",RE="a",AE="n",IE="p",P3="h";class j3{constructor(t,n,i,o,l,u,f,h,p,g){this.id=t,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=o,this.authToken_=l,this.onMessage_=u,this.onReady_=f,this.onDisconnect_=h,this.onKill_=p,this.lastSessionId=g,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=vu("c:"+this.id+":"),this.transportManager_=new Kc(n),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const o=t.healthyTimeout||0;o>0&&(this.healthyTimeout_=Nc(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>M3?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>N3?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return n=>{t===this.conn_?this.onConnectionLost_(n):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return n=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(n):t===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(t){const n={t:"d",d:t};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(Gg in t){const n=t[Gg];n===RE?this.upgradeIfSecondaryHealthy_():n===TE?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===CE&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const n=ac("t",t),i=ac("d",t);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:IE,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:RE,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:AE,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const n=ac("t",t),i=ac("d",t);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const n=ac(Gg,t);if(xE in t){const i=t[xE];if(n===P3){const o={...i};this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(n===AE){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===k3?this.onConnectionShutdown_(i):n===TE?this.onReset_(i):n===L3?Fy("Server Error: "+i):n===CE?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Fy("Unknown control packet command: "+n)}}onHandshake_(t){const n=t.ts,i=t.v,o=t.h;this.sessionId=t.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),n_!==i&&dn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Nc(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(D3))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,n){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Nc(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(O3))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:IE,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(io.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{put(t,n,i,o){}merge(t,n,i,o){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,n,i){}onDisconnectMerge(t,n,i){}onDisconnectCancel(t,n){}reportStats(t){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(t){this.allowedEvents_=t,this.listeners_={},he(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...n){if(Array.isArray(this.listeners_[t])){const i=[...this.listeners_[t]];for(let o=0;o<i.length;o++)i[o].callback.apply(i[o].context,n)}}on(t,n,i){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:n,context:i});const o=this.getInitialEvent(t);o&&n.apply(i,o)}off(t,n,i){this.validateEventType_(t);const o=this.listeners_[t]||[];for(let l=0;l<o.length;l++)if(o[l].callback===n&&(!i||i===o[l].context)){o.splice(l,1);return}}validateEventType_(t){he(this.allowedEvents_.find(n=>n===t),"Unknown event: "+t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf extends sA{static getInstance(){return new Qf}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Uv()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(t){return he(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE=32,OE=768;class ut{constructor(t,n){if(n===void 0){this.pieces_=t.split("/");let i=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[i]=this.pieces_[o],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=n}toString(){let t="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(t+="/"+this.pieces_[n]);return t||"/"}}function Xe(){return new ut("")}function qe(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function fs(e){return e.pieces_.length-e.pieceNum_}function pt(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ut(e.pieces_,t)}function s_(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function U3(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)e.pieces_[n]!==""&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function Xc(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function oA(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ut(t,0)}function Rt(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof ut)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const i=t.split("/");for(let o=0;o<i.length;o++)i[o].length>0&&n.push(i[o])}return new ut(n,0)}function We(e){return e.pieceNum_>=e.pieces_.length}function un(e,t){const n=qe(e),i=qe(t);if(n===null)return t;if(n===i)return un(pt(e),pt(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function $3(e,t){const n=Xc(e,0),i=Xc(t,0);for(let o=0;o<n.length&&o<i.length;o++){const l=Ao(n[o],i[o]);if(l!==0)return l}return n.length===i.length?0:n.length<i.length?-1:1}function o_(e,t){if(fs(e)!==fs(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Wn(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(fs(e)>fs(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class z3{constructor(t,n){this.errorPrefix_=n,this.parts_=Xc(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Nh(this.parts_[i]);aA(this)}}function B3(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Nh(t),aA(e)}function H3(e){const t=e.parts_.pop();e.byteLength_-=Nh(t),e.parts_.length>0&&(e.byteLength_-=1)}function aA(e){if(e.byteLength_>OE)throw new Error(e.errorPrefix_+"has a key path longer than "+OE+" bytes ("+e.byteLength_+").");if(e.parts_.length>DE)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+DE+") or object contains a cycle "+eo(e))}function eo(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_ extends sA{static getInstance(){return new a_}constructor(){super(["visible"]);let t,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[t];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(t){return he(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=1e3,F3=300*1e3,NE=30*1e3,q3=1.3,V3=3e4,G3="server_kill",ME=3;class di extends iA{constructor(t,n,i,o,l,u,f,h){if(super(),this.repoInfo_=t,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=o,this.onServerInfoUpdate_=l,this.authTokenProvider_=u,this.appCheckTokenProvider_=f,this.authOverride_=h,this.id=di.nextPersistentConnectionId_++,this.log_=vu("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=lc,this.maxReconnectDelay_=F3,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,h)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");a_.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&Qf.getInstance().on("online",this.onOnline_,this)}sendRequest(t,n,i){const o=++this.requestNumber_,l={r:o,a:t,b:n};this.log_($t(l)),he(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),i&&(this.requestCBHash_[o]=i)}get(t){this.initConnection_();const n=new du,o={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:u=>{const f=u.d;u.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),n.promise}listen(t,n,i,o){this.initConnection_();const l=t._queryIdentifier,u=t._path.toString();this.log_("Listen called for "+u+" "+l),this.listens.has(u)||this.listens.set(u,new Map),he(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),he(!this.listens.get(u).has(l),"listen() called twice for same path/queryId.");const f={onComplete:o,hashFn:n,query:t,tag:i};this.listens.get(u).set(l,f),this.connected_&&this.sendListen_(f)}sendGet_(t){const n=this.outstandingGets_[t];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(t){const n=t.query,i=n._path.toString(),o=n._queryIdentifier;this.log_("Listen on "+i+" for "+o);const l={p:i},u="q";t.tag&&(l.q=n._queryObject,l.t=t.tag),l.h=t.hashFn(),this.sendRequest(u,l,f=>{const h=f.d,p=f.s;di.warnOnListenWarnings_(h,n),(this.listens.get(i)&&this.listens.get(i).get(o))===t&&(this.log_("listen response",f),p!=="ok"&&this.removeListen_(i,o),t.onComplete&&t.onComplete(p,h))})}static warnOnListenWarnings_(t,n){if(t&&typeof t=="object"&&kr(t,"w")){const i=ja(t,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const o='".indexOn": "'+n._queryParams.getIndex().toString()+'"',l=n._path.toString();dn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||aP(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=NE)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,n=oP(t)?"auth":"gauth",i={cred:t};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,o=>{const l=o.s,u=o.d||"error";this.authToken_===t&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const n=t.s,i=t.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(t,n){const i=t._path.toString(),o=t._queryIdentifier;this.log_("Unlisten called for "+i+" "+o),he(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,o)&&this.connected_&&this.sendUnlisten_(i,o,t._queryObject,n)}sendUnlisten_(t,n,i,o){this.log_("Unlisten on "+t+" for "+n);const l={p:t},u="n";o&&(l.q=i,l.t=o),this.sendRequest(u,l)}onDisconnectPut(t,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,n,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:n,onComplete:i})}onDisconnectMerge(t,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,n,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:n,onComplete:i})}onDisconnectCancel(t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(t,n,i,o){const l={p:n,d:i};this.log_("onDisconnect "+t,l),this.sendRequest(t,l,u=>{o&&setTimeout(()=>{o(u.s,u.d)},Math.floor(0))})}put(t,n,i,o){this.putInternal("p",t,n,i,o)}merge(t,n,i,o){this.putInternal("m",t,n,i,o)}putInternal(t,n,i,o,l){this.initConnection_();const u={p:n,d:i};l!==void 0&&(u.h=l),this.outstandingPuts_.push({action:t,request:u,onComplete:o}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(t){const n=this.outstandingPuts_[t].action,i=this.outstandingPuts_[t].request,o=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(n,i,l=>{this.log_(n+" response",l),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(l.s,l.d)})}reportStats(t){if(this.connected_){const n={c:t};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const l=i.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+$t(t));const n=t.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,n){this.log_("handleServerMessage",t,n),t==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):t==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):t==="c"?this.onListenRevoked_(n.p,n.q):t==="ac"?this.onAuthRevoked_(n.s,n.d):t==="apc"?this.onAppCheckRevoked_(n.s,n.d):t==="sd"?this.onSecurityDebugPacket_(n):Fy("Unrecognized action received from server: "+$t(t)+`
Are you using the latest client?`)}onReady_(t,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){he(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=lc,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=lc,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>V3&&(this.reconnectDelay_=lc),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-t);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*q3)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+di.nextConnectionId_++,l=this.lastSessionId;let u=!1,f=null;const h=function(){f?f.close():(u=!0,i())},p=function(y){he(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(y)};this.realtime_={close:h,sendRequest:p};const g=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[y,_]=await Promise.all([this.authTokenProvider_.getToken(g),this.appCheckTokenProvider_.getToken(g)]);u?Jt("getToken() completed but was canceled"):(Jt("getToken() completed. Creating connection."),this.authToken_=y&&y.accessToken,this.appCheckToken_=_&&_.token,f=new j3(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,i,S=>{dn(S+" ("+this.repoInfo_.toString()+")"),this.interrupt(G3)},l))}catch(y){this.log_("Failed to get token: "+y),u||(this.repoInfo_.nodeAdmin&&dn(y),h())}}}interrupt(t){Jt("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){Jt("Resuming connection for reason: "+t),delete this.interruptReasons_[t],Iy(this.interruptReasons_)&&(this.reconnectDelay_=lc,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const n=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const n=this.outstandingPuts_[t];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,n){let i;n?i=n.map(l=>t_(l)).join("$"):i="default";const o=this.removeListen_(t,i);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(t,n){const i=new ut(t).toString();let o;if(this.listens.has(i)){const l=this.listens.get(i);o=l.get(n),l.delete(n),l.size===0&&this.listens.delete(i)}else o=void 0;return o}onAuthRevoked_(t,n){Jt("Auth token revoked: "+t+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ME&&(this.reconnectDelay_=NE,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,n){Jt("App check token revoked: "+t+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ME&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const n of t.values())this.sendListen_(n);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let n="js";t["sdk."+n+"."+jR.replace(/\./g,"-")]=1,Uv()?t["framework.cordova"]=1:qC()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=Qf.getInstance().currentlyOnline();return Iy(this.interruptReasons_)&&t}}di.nextPersistentConnectionId_=0;di.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Bh{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,n){const i=new Ve(za,t),o=new Ve(za,n);return this.compare(i,o)!==0}minPost(){return Ve.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xd;class lA extends Bh{static get __EMPTY_NODE(){return Xd}static set __EMPTY_NODE(t){Xd=t}compare(t,n){return Ao(t.name,n.name)}isDefinedOn(t){throw Wa("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,n){return!1}minPost(){return Ve.MIN}maxPost(){return new Ve(_o,Xd)}makePost(t,n){return he(typeof t=="string","KeyIndex indexValue must always be a string."),new Ve(t,Xd)}toString(){return".key"}}const Ra=new lA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(t,n,i,o,l=null){this.isReverse_=o,this.resultGenerator_=l,this.nodeStack_=[];let u=1;for(;!t.isEmpty();)if(t=t,u=n?i(t.key,n):1,o&&(u*=-1),u<0)this.isReverse_?t=t.left:t=t.right;else if(u===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(t.key,t.value):n={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class Vt{constructor(t,n,i,o,l){this.key=t,this.value=n,this.color=i??Vt.RED,this.left=o??bn.EMPTY_NODE,this.right=l??bn.EMPTY_NODE}copy(t,n,i,o,l){return new Vt(t??this.key,n??this.value,i??this.color,o??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,i){let o=this;const l=i(t,o.key);return l<0?o=o.copy(null,null,null,o.left.insert(t,n,i),null):l===0?o=o.copy(null,n,null,null,null):o=o.copy(null,null,null,null,o.right.insert(t,n,i)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return bn.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,n){let i,o;if(i=this,n(t,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(t,i.key)===0){if(i.right.isEmpty())return bn.EMPTY_NODE;o=i.right.min_(),i=i.copy(o.key,o.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,Vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,Vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}Vt.RED=!0;Vt.BLACK=!1;class Y3{copy(t,n,i,o,l){return this}insert(t,n,i){return new Vt(t,n,null)}remove(t,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class bn{constructor(t,n=bn.EMPTY_NODE){this.comparator_=t,this.root_=n}insert(t,n){return new bn(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,Vt.BLACK,null,null))}remove(t){return new bn(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,Vt.BLACK,null,null))}get(t){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(t,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(t){let n,i=this.root_,o=null;for(;!i.isEmpty();)if(n=this.comparator_(t,i.key),n===0){if(i.left.isEmpty())return o?o.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(o=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new Zd(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,n){return new Zd(this.root_,t,this.comparator_,!1,n)}getReverseIteratorFrom(t,n){return new Zd(this.root_,t,this.comparator_,!0,n)}getReverseIterator(t){return new Zd(this.root_,null,this.comparator_,!0,t)}}bn.EMPTY_NODE=new Y3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W3(e,t){return Ao(e.name,t.name)}function l_(e,t){return Ao(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vy;function Q3(e){Vy=e}const cA=function(e){return typeof e=="number"?"number:"+BR(e):"string:"+e},uA=function(e){if(e.isLeafNode()){const t=e.val();he(typeof t=="string"||typeof t=="number"||typeof t=="object"&&kr(t,".sv"),"Priority must be a string or number.")}else he(e===Vy||e.isEmpty(),"priority of unexpected type.");he(e===Vy||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kE;class Ft{static set __childrenNodeConstructor(t){kE=t}static get __childrenNodeConstructor(){return kE}constructor(t,n=Ft.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=n,this.lazyHash_=null,he(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),uA(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new Ft(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:Ft.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return We(t)?this:qe(t)===".priority"?this.priorityNode_:Ft.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,n){return null}updateImmediateChild(t,n){return t===".priority"?this.updatePriority(n):n.isEmpty()&&t!==".priority"?this:Ft.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}updateChild(t,n){const i=qe(t);return i===null?n:n.isEmpty()&&i!==".priority"?this:(he(i!==".priority"||fs(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Ft.__childrenNodeConstructor.EMPTY_NODE.updateChild(pt(t),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,n){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+cA(this.priorityNode_.val())+":");const n=typeof this.value_;t+=n+":",n==="number"?t+=BR(this.value_):t+=this.value_,this.lazyHash_=$R(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===Ft.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof Ft.__childrenNodeConstructor?-1:(he(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const n=typeof t.value_,i=typeof this.value_,o=Ft.VALUE_TYPE_ORDER.indexOf(n),l=Ft.VALUE_TYPE_ORDER.indexOf(i);return he(o>=0,"Unknown leaf type: "+n),he(l>=0,"Unknown leaf type: "+i),o===l?i==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:l-o}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const n=t;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ft.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dA,fA;function K3(e){dA=e}function X3(e){fA=e}class Z3 extends Bh{compare(t,n){const i=t.node.getPriority(),o=n.node.getPriority(),l=i.compareTo(o);return l===0?Ao(t.name,n.name):l}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,n){return!t.getPriority().equals(n.getPriority())}minPost(){return Ve.MIN}maxPost(){return new Ve(_o,new Ft("[PRIORITY-POST]",fA))}makePost(t,n){const i=dA(t);return new Ve(n,new Ft("[PRIORITY-POST]",i))}toString(){return".priority"}}const At=new Z3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J3=Math.log(2);class e5{constructor(t){const n=l=>parseInt(Math.log(l)/J3,10),i=l=>parseInt(Array(l+1).join("1"),2);this.count=n(t+1),this.current_=this.count-1;const o=i(this.count);this.bits_=t+1&o}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const Kf=function(e,t,n,i){e.sort(t);const o=function(h,p){const g=p-h;let y,_;if(g===0)return null;if(g===1)return y=e[h],_=n?n(y):y,new Vt(_,y.node,Vt.BLACK,null,null);{const S=parseInt(g/2,10)+h,w=o(h,S),O=o(S+1,p);return y=e[S],_=n?n(y):y,new Vt(_,y.node,Vt.BLACK,w,O)}},l=function(h){let p=null,g=null,y=e.length;const _=function(w,O){const T=y-w,A=y;y-=w;const k=o(T+1,A),x=e[T],I=n?n(x):x;S(new Vt(I,x.node,O,null,k))},S=function(w){p?(p.left=w,p=w):(g=w,p=w)};for(let w=0;w<h.count;++w){const O=h.nextBitIsOne(),T=Math.pow(2,h.count-(w+1));O?_(T,Vt.BLACK):(_(T,Vt.BLACK),_(T,Vt.RED))}return g},u=new e5(e.length),f=l(u);return new bn(i||t,f)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yg;const ga={};class ai{static get Default(){return he(ga&&At,"ChildrenNode.ts has not been loaded"),Yg=Yg||new ai({".priority":ga},{".priority":At}),Yg}constructor(t,n){this.indexes_=t,this.indexSet_=n}get(t){const n=ja(this.indexes_,t);if(!n)throw new Error("No index defined for "+t);return n instanceof bn?n:null}hasIndex(t){return kr(this.indexSet_,t.toString())}addIndex(t,n){he(t!==Ra,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let o=!1;const l=n.getIterator(Ve.Wrap);let u=l.getNext();for(;u;)o=o||t.isDefinedOn(u.node),i.push(u),u=l.getNext();let f;o?f=Kf(i,t.getCompare()):f=ga;const h=t.toString(),p={...this.indexSet_};p[h]=t;const g={...this.indexes_};return g[h]=f,new ai(g,p)}addToIndexes(t,n){const i=zf(this.indexes_,(o,l)=>{const u=ja(this.indexSet_,l);if(he(u,"Missing index implementation for "+l),o===ga)if(u.isDefinedOn(t.node)){const f=[],h=n.getIterator(Ve.Wrap);let p=h.getNext();for(;p;)p.name!==t.name&&f.push(p),p=h.getNext();return f.push(t),Kf(f,u.getCompare())}else return ga;else{const f=n.get(t.name);let h=o;return f&&(h=h.remove(new Ve(t.name,f))),h.insert(t,t.node)}});return new ai(i,this.indexSet_)}removeFromIndexes(t,n){const i=zf(this.indexes_,o=>{if(o===ga)return o;{const l=n.get(t.name);return l?o.remove(new Ve(t.name,l)):o}});return new ai(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cc;class Ne{static get EMPTY_NODE(){return cc||(cc=new Ne(new bn(l_),null,ai.Default))}constructor(t,n,i){this.children_=t,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&uA(this.priorityNode_),this.children_.isEmpty()&&he(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||cc}updatePriority(t){return this.children_.isEmpty()?this:new Ne(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const n=this.children_.get(t);return n===null?cc:n}}getChild(t){const n=qe(t);return n===null?this:this.getImmediateChild(n).getChild(pt(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,n){if(he(n,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(n);{const i=new Ve(t,n);let o,l;n.isEmpty()?(o=this.children_.remove(t),l=this.indexMap_.removeFromIndexes(i,this.children_)):(o=this.children_.insert(t,n),l=this.indexMap_.addToIndexes(i,this.children_));const u=o.isEmpty()?cc:this.priorityNode_;return new Ne(o,u,l)}}updateChild(t,n){const i=qe(t);if(i===null)return n;{he(qe(t)!==".priority"||fs(t)===1,".priority must be the last token in a path");const o=this.getImmediateChild(i).updateChild(pt(t),n);return this.updateImmediateChild(i,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const n={};let i=0,o=0,l=!0;if(this.forEachChild(At,(u,f)=>{n[u]=f.val(t),i++,l&&Ne.INTEGER_REGEXP_.test(u)?o=Math.max(o,Number(u)):l=!1}),!t&&l&&o<2*i){const u=[];for(const f in n)u[f]=n[f];return u}else return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+cA(this.getPriority().val())+":"),this.forEachChild(At,(n,i)=>{const o=i.hash();o!==""&&(t+=":"+n+":"+o)}),this.lazyHash_=t===""?"":$R(t)}return this.lazyHash_}getPredecessorChildName(t,n,i){const o=this.resolveIndex_(i);if(o){const l=o.getPredecessorKey(new Ve(t,n));return l?l.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const n=this.resolveIndex_(t);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(t){const n=this.getFirstChildName(t);return n?new Ve(n,this.children_.get(n)):null}getLastChildName(t){const n=this.resolveIndex_(t);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(t){const n=this.getLastChildName(t);return n?new Ve(n,this.children_.get(n)):null}forEachChild(t,n){const i=this.resolveIndex_(t);return i?i.inorderTraversal(o=>n(o.name,o.node)):this.children_.inorderTraversal(n)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(t,o=>o);{const o=this.children_.getIteratorFrom(t.name,Ve.Wrap);let l=o.peek();for(;l!=null&&n.compare(l,t)<0;)o.getNext(),l=o.peek();return o}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(t,o=>o);{const o=this.children_.getReverseIteratorFrom(t.name,Ve.Wrap);let l=o.peek();for(;l!=null&&n.compare(l,t)>0;)o.getNext(),l=o.peek();return o}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===_u?-1:0}withIndex(t){if(t===Ra||this.indexMap_.hasIndex(t))return this;{const n=this.indexMap_.addIndex(t,this.children_);return new Ne(this.children_,this.priorityNode_,n)}}isIndexed(t){return t===Ra||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const n=t;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(At),o=n.getIterator(At);let l=i.getNext(),u=o.getNext();for(;l&&u;){if(l.name!==u.name||!l.node.equals(u.node))return!1;l=i.getNext(),u=o.getNext()}return l===null&&u===null}else return!1;else return!1}}resolveIndex_(t){return t===Ra?null:this.indexMap_.get(t.toString())}}Ne.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class t5 extends Ne{constructor(){super(new bn(l_),Ne.EMPTY_NODE,ai.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return Ne.EMPTY_NODE}isEmpty(){return!1}}const _u=new t5;Object.defineProperties(Ve,{MIN:{value:new Ve(za,Ne.EMPTY_NODE)},MAX:{value:new Ve(_o,_u)}});lA.__EMPTY_NODE=Ne.EMPTY_NODE;Ft.__childrenNodeConstructor=Ne;Q3(_u);X3(_u);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n5=!0;function Ut(e,t=null){if(e===null)return Ne.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(t=e[".priority"]),he(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){const n=e;return new Ft(n,Ut(t))}if(!(e instanceof Array)&&n5){const n=[];let i=!1;if(tn(e,(u,f)=>{if(u.substring(0,1)!=="."){const h=Ut(f);h.isEmpty()||(i=i||!h.getPriority().isEmpty(),n.push(new Ve(u,h)))}}),n.length===0)return Ne.EMPTY_NODE;const l=Kf(n,W3,u=>u.name,l_);if(i){const u=Kf(n,At.getCompare());return new Ne(l,Ut(t),new ai({".priority":u},{".priority":At}))}else return new Ne(l,Ut(t),ai.Default)}else{let n=Ne.EMPTY_NODE;return tn(e,(i,o)=>{if(kr(e,i)&&i.substring(0,1)!=="."){const l=Ut(o);(l.isLeafNode()||!l.isEmpty())&&(n=n.updateImmediateChild(i,l))}}),n.updatePriority(Ut(t))}}K3(Ut);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r5 extends Bh{constructor(t){super(),this.indexPath_=t,he(!We(t)&&qe(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,n){const i=this.extractChild(t.node),o=this.extractChild(n.node),l=i.compareTo(o);return l===0?Ao(t.name,n.name):l}makePost(t,n){const i=Ut(t),o=Ne.EMPTY_NODE.updateChild(this.indexPath_,i);return new Ve(n,o)}maxPost(){const t=Ne.EMPTY_NODE.updateChild(this.indexPath_,_u);return new Ve(_o,t)}toString(){return Xc(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i5 extends Bh{compare(t,n){const i=t.node.compareTo(n.node);return i===0?Ao(t.name,n.name):i}isDefinedOn(t){return!0}indexedValueChanged(t,n){return!t.equals(n)}minPost(){return Ve.MIN}maxPost(){return Ve.MAX}makePost(t,n){const i=Ut(t);return new Ve(n,i)}toString(){return".value"}}const s5=new i5;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hA(e){return{type:"value",snapshotNode:e}}function Ba(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Zc(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Jc(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function o5(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(t){this.index_=t}updateChild(t,n,i,o,l,u){he(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=t.getImmediateChild(n);return f.getChild(o).equals(i.getChild(o))&&f.isEmpty()===i.isEmpty()||(u!=null&&(i.isEmpty()?t.hasChild(n)?u.trackChildChange(Zc(n,f)):he(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?u.trackChildChange(Ba(n,i)):u.trackChildChange(Jc(n,i,f))),t.isLeafNode()&&i.isEmpty())?t:t.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(t,n,i){return i!=null&&(t.isLeafNode()||t.forEachChild(At,(o,l)=>{n.hasChild(o)||i.trackChildChange(Zc(o,l))}),n.isLeafNode()||n.forEachChild(At,(o,l)=>{if(t.hasChild(o)){const u=t.getImmediateChild(o);u.equals(l)||i.trackChildChange(Jc(o,l,u))}else i.trackChildChange(Ba(o,l))})),n.withIndex(this.index_)}updatePriority(t,n){return t.isEmpty()?Ne.EMPTY_NODE:t.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(t){this.indexedFilter_=new c_(t.getIndex()),this.index_=t.getIndex(),this.startPost_=eu.getStartPost_(t),this.endPost_=eu.getEndPost_(t),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),t)<=0:this.index_.compare(this.getStartPost(),t)<0,i=this.endIsInclusive_?this.index_.compare(t,this.getEndPost())<=0:this.index_.compare(t,this.getEndPost())<0;return n&&i}updateChild(t,n,i,o,l,u){return this.matches(new Ve(n,i))||(i=Ne.EMPTY_NODE),this.indexedFilter_.updateChild(t,n,i,o,l,u)}updateFullNode(t,n,i){n.isLeafNode()&&(n=Ne.EMPTY_NODE);let o=n.withIndex(this.index_);o=o.updatePriority(Ne.EMPTY_NODE);const l=this;return n.forEachChild(At,(u,f)=>{l.matches(new Ve(u,f))||(o=o.updateImmediateChild(u,Ne.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,o,i)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const n=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),n)}else return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const n=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),n)}else return t.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a5{constructor(t){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new eu(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft(),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}updateChild(t,n,i,o,l,u){return this.rangedFilter_.matches(new Ve(n,i))||(i=Ne.EMPTY_NODE),t.getImmediateChild(n).equals(i)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,n,i,o,l,u):this.fullLimitUpdateChild_(t,n,i,l,u)}updateFullNode(t,n,i){let o;if(n.isLeafNode()||n.isEmpty())o=Ne.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){o=Ne.EMPTY_NODE.withIndex(this.index_);let l;this.reverse_?l=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):l=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;l.hasNext()&&u<this.limit_;){const f=l.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))o=o.updateImmediateChild(f.name,f.node),u++;else break;else continue}}else{o=n.withIndex(this.index_),o=o.updatePriority(Ne.EMPTY_NODE);let l;this.reverse_?l=o.getReverseIterator(this.index_):l=o.getIterator(this.index_);let u=0;for(;l.hasNext();){const f=l.getNext();u<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?u++:o=o.updateImmediateChild(f.name,Ne.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,o,i)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,n,i,o,l){let u;if(this.reverse_){const y=this.index_.getCompare();u=(_,S)=>y(S,_)}else u=this.index_.getCompare();const f=t;he(f.numChildren()===this.limit_,"");const h=new Ve(n,i),p=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),g=this.rangedFilter_.matches(h);if(f.hasChild(n)){const y=f.getImmediateChild(n);let _=o.getChildAfterChild(this.index_,p,this.reverse_);for(;_!=null&&(_.name===n||f.hasChild(_.name));)_=o.getChildAfterChild(this.index_,_,this.reverse_);const S=_==null?1:u(_,h);if(g&&!i.isEmpty()&&S>=0)return l?.trackChildChange(Jc(n,i,y)),f.updateImmediateChild(n,i);{l?.trackChildChange(Zc(n,y));const O=f.updateImmediateChild(n,Ne.EMPTY_NODE);return _!=null&&this.rangedFilter_.matches(_)?(l?.trackChildChange(Ba(_.name,_.node)),O.updateImmediateChild(_.name,_.node)):O}}else return i.isEmpty()?t:g&&u(p,h)>=0?(l!=null&&(l.trackChildChange(Zc(p.name,p.node)),l.trackChildChange(Ba(n,i))),f.updateImmediateChild(n,i).updateImmediateChild(p.name,Ne.EMPTY_NODE)):t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=At}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return he(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return he(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:za}hasEnd(){return this.endSet_}getIndexEndValue(){return he(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return he(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:_o}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return he(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===At}copy(){const t=new u_;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function l5(e){return e.loadsAllData()?new c_(e.getIndex()):e.hasLimit()?new a5(e):new eu(e)}function LE(e){const t={};if(e.isDefault())return t;let n;if(e.index_===At?n="$priority":e.index_===s5?n="$value":e.index_===Ra?n="$key":(he(e.index_ instanceof r5,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=$t(n),e.startSet_){const i=e.startAfterSet_?"startAfter":"startAt";t[i]=$t(e.indexStartValue_),e.startNameSet_&&(t[i]+=","+$t(e.indexStartName_))}if(e.endSet_){const i=e.endBeforeSet_?"endBefore":"endAt";t[i]=$t(e.indexEndValue_),e.endNameSet_&&(t[i]+=","+$t(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function PE(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;n===""&&(e.isViewFromLeft()?n="l":n="r"),t.vf=n}return e.index_!==At&&(t.i=e.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf extends iA{reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,n){return n!==void 0?"tag$"+n:(he(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}constructor(t,n,i,o){super(),this.repoInfo_=t,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=o,this.log_=vu("p:rest:"),this.listens_={}}listen(t,n,i,o){const l=t._path.toString();this.log_("Listen called for "+l+" "+t._queryIdentifier);const u=Xf.getListenId_(t,i),f={};this.listens_[u]=f;const h=LE(t._queryParams);this.restRequest_(l+".json",h,(p,g)=>{let y=g;if(p===404&&(y=null,p=null),p===null&&this.onDataUpdate_(l,y,!1,i),ja(this.listens_,u)===f){let _;p?p===401?_="permission_denied":_="rest_error:"+p:_="ok",o(_,null)}})}unlisten(t,n){const i=Xf.getListenId_(t,n);delete this.listens_[i]}get(t){const n=LE(t._queryParams),i=t._path.toString(),o=new du;return this.restRequest_(i+".json",n,(l,u)=>{let f=u;l===404&&(f=null,l=null),l===null?(this.onDataUpdate_(i,f,!1,null),o.resolve(f)):o.reject(new Error(f))}),o.promise}refreshAuthToken(t){}restRequest_(t,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,l])=>{o&&o.accessToken&&(n.auth=o.accessToken),l&&l.token&&(n.ac=l.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+Ka(n);this.log_("Sending REST request for "+u);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(i&&f.readyState===4){this.log_("REST Response for "+u+" received. status:",f.status,"response:",f.responseText);let h=null;if(f.status>=200&&f.status<300){try{h=Bc(f.responseText)}catch{dn("Failed to parse JSON response for "+u+": "+f.responseText)}i(null,h)}else f.status!==401&&f.status!==404&&dn("Got unsuccessful REST response for "+u+" Status: "+f.status),i(f.status);i=null}},f.open("GET",u,!0),f.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c5{constructor(){this.rootNode_=Ne.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,n){this.rootNode_=this.rootNode_.updateChild(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(){return{value:null,children:new Map}}function pA(e,t,n){if(We(t))e.value=n,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(t,n);else{const i=qe(t);e.children.has(i)||e.children.set(i,Zf());const o=e.children.get(i);t=pt(t),pA(o,t,n)}}function Gy(e,t,n){e.value!==null?n(t,e.value):u5(e,(i,o)=>{const l=new ut(t.toString()+"/"+i);Gy(o,l,n)})}function u5(e,t){e.children.forEach((n,i)=>{t(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d5{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),n={...t};return this.last_&&tn(this.last_,(i,o)=>{n[i]=n[i]-o}),this.last_=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE=10*1e3,f5=30*1e3,h5=300*1e3;class p5{constructor(t,n){this.server_=n,this.statsToReport_={},this.statsListener_=new d5(t);const i=jE+(f5-jE)*Math.random();Nc(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const t=this.statsListener_.get(),n={};let i=!1;tn(t,(o,l)=>{l>0&&kr(this.statsToReport_,o)&&(n[o]=l,i=!0)}),i&&this.server_.reportStats(n),Nc(this.reportStats_.bind(this),Math.floor(Math.random()*2*h5))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var cr;(function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(cr||(cr={}));function d_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function f_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function h_(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(t,n,i){this.path=t,this.affectedTree=n,this.revert=i,this.type=cr.ACK_USER_WRITE,this.source=d_()}operationForChild(t){if(We(this.path)){if(this.affectedTree.value!=null)return he(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ut(t));return new Jf(Xe(),n,this.revert)}}else return he(qe(this.path)===t,"operationForChild called for unrelated child."),new Jf(pt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(t,n){this.source=t,this.path=n,this.type=cr.LISTEN_COMPLETE}operationForChild(t){return We(this.path)?new tu(this.source,Xe()):new tu(this.source,pt(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(t,n,i){this.source=t,this.path=n,this.snap=i,this.type=cr.OVERWRITE}operationForChild(t){return We(this.path)?new bo(this.source,Xe(),this.snap.getImmediateChild(t)):new bo(this.source,pt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(t,n,i){this.source=t,this.path=n,this.children=i,this.type=cr.MERGE}operationForChild(t){if(We(this.path)){const n=this.children.subtree(new ut(t));return n.isEmpty()?null:n.value?new bo(this.source,Xe(),n.value):new Ha(this.source,Xe(),n)}else return he(qe(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new Ha(this.source,pt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(t,n,i){this.node_=t,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(We(t))return this.isFullyInitialized()&&!this.filtered_;const n=qe(t);return this.isCompleteForChild(n)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m5{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function g5(e,t,n,i){const o=[],l=[];return t.forEach(u=>{u.type==="child_changed"&&e.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&l.push(o5(u.childName,u.snapshotNode))}),uc(e,o,"child_removed",t,i,n),uc(e,o,"child_added",t,i,n),uc(e,o,"child_moved",l,i,n),uc(e,o,"child_changed",t,i,n),uc(e,o,"value",t,i,n),o}function uc(e,t,n,i,o,l){const u=i.filter(f=>f.type===n);u.sort((f,h)=>v5(e,f,h)),u.forEach(f=>{const h=y5(e,f,l);o.forEach(p=>{p.respondsTo(f.type)&&t.push(p.createEvent(h,e.query_))})})}function y5(e,t,n){return t.type==="value"||t.type==="child_removed"||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function v5(e,t,n){if(t.childName==null||n.childName==null)throw Wa("Should only compare child_ events.");const i=new Ve(t.childName,t.snapshotNode),o=new Ve(n.childName,n.snapshotNode);return e.index_.compare(i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hh(e,t){return{eventCache:e,serverCache:t}}function Mc(e,t,n,i){return Hh(new hs(t,n,i),e.serverCache)}function mA(e,t,n,i){return Hh(e.eventCache,new hs(t,n,i))}function eh(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function So(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wg;const _5=()=>(Wg||(Wg=new bn(r3)),Wg);class ht{static fromObject(t){let n=new ht(null);return tn(t,(i,o)=>{n=n.set(new ut(i),o)}),n}constructor(t,n=_5()){this.value=t,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,n){if(this.value!=null&&n(this.value))return{path:Xe(),value:this.value};if(We(t))return null;{const i=qe(t),o=this.children.get(i);if(o!==null){const l=o.findRootMostMatchingPathAndValue(pt(t),n);return l!=null?{path:Rt(new ut(i),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(We(t))return this;{const n=qe(t),i=this.children.get(n);return i!==null?i.subtree(pt(t)):new ht(null)}}set(t,n){if(We(t))return new ht(n,this.children);{const i=qe(t),l=(this.children.get(i)||new ht(null)).set(pt(t),n),u=this.children.insert(i,l);return new ht(this.value,u)}}remove(t){if(We(t))return this.children.isEmpty()?new ht(null):new ht(null,this.children);{const n=qe(t),i=this.children.get(n);if(i){const o=i.remove(pt(t));let l;return o.isEmpty()?l=this.children.remove(n):l=this.children.insert(n,o),this.value===null&&l.isEmpty()?new ht(null):new ht(this.value,l)}else return this}}get(t){if(We(t))return this.value;{const n=qe(t),i=this.children.get(n);return i?i.get(pt(t)):null}}setTree(t,n){if(We(t))return n;{const i=qe(t),l=(this.children.get(i)||new ht(null)).setTree(pt(t),n);let u;return l.isEmpty()?u=this.children.remove(i):u=this.children.insert(i,l),new ht(this.value,u)}}fold(t){return this.fold_(Xe(),t)}fold_(t,n){const i={};return this.children.inorderTraversal((o,l)=>{i[o]=l.fold_(Rt(t,o),n)}),n(t,this.value,i)}findOnPath(t,n){return this.findOnPath_(t,Xe(),n)}findOnPath_(t,n,i){const o=this.value?i(n,this.value):!1;if(o)return o;if(We(t))return null;{const l=qe(t),u=this.children.get(l);return u?u.findOnPath_(pt(t),Rt(n,l),i):null}}foreachOnPath(t,n){return this.foreachOnPath_(t,Xe(),n)}foreachOnPath_(t,n,i){if(We(t))return this;{this.value&&i(n,this.value);const o=qe(t),l=this.children.get(o);return l?l.foreachOnPath_(pt(t),Rt(n,o),i):new ht(null)}}foreach(t){this.foreach_(Xe(),t)}foreach_(t,n){this.children.inorderTraversal((i,o)=>{o.foreach_(Rt(t,i),n)}),this.value&&n(t,this.value)}foreachChild(t){this.children.inorderTraversal((n,i)=>{i.value&&t(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(t){this.writeTree_=t}static empty(){return new pr(new ht(null))}}function kc(e,t,n){if(We(t))return new pr(new ht(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(i!=null){const o=i.path;let l=i.value;const u=un(o,t);return l=l.updateChild(u,n),new pr(e.writeTree_.set(o,l))}else{const o=new ht(n),l=e.writeTree_.setTree(t,o);return new pr(l)}}}function Yy(e,t,n){let i=e;return tn(n,(o,l)=>{i=kc(i,Rt(t,o),l)}),i}function UE(e,t){if(We(t))return pr.empty();{const n=e.writeTree_.setTree(t,new ht(null));return new pr(n)}}function Wy(e,t){return Io(e,t)!=null}function Io(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return n!=null?e.writeTree_.get(n.path).getChild(un(n.path,t)):null}function $E(e){const t=[],n=e.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(At,(i,o)=>{t.push(new Ve(i,o))}):e.writeTree_.children.inorderTraversal((i,o)=>{o.value!=null&&t.push(new Ve(i,o.value))}),t}function ss(e,t){if(We(t))return e;{const n=Io(e,t);return n!=null?new pr(new ht(n)):new pr(e.writeTree_.subtree(t))}}function Qy(e){return e.writeTree_.isEmpty()}function Fa(e,t){return gA(Xe(),e.writeTree_,t)}function gA(e,t,n){if(t.value!=null)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal((o,l)=>{o===".priority"?(he(l.value!==null,"Priority writes must always be leaf nodes"),i=l.value):n=gA(Rt(e,o),l,n)}),!n.getChild(e).isEmpty()&&i!==null&&(n=n.updateChild(Rt(e,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(e,t){return bA(t,e)}function b5(e,t,n,i,o){he(i>e.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:o}),o&&(e.visibleWrites=kc(e.visibleWrites,t,n)),e.lastWriteId=i}function S5(e,t,n,i){he(i>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:i,visible:!0}),e.visibleWrites=Yy(e.visibleWrites,t,n),e.lastWriteId=i}function w5(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}function E5(e,t){const n=e.allWrites.findIndex(f=>f.writeId===t);he(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let o=i.visible,l=!1,u=e.allWrites.length-1;for(;o&&u>=0;){const f=e.allWrites[u];f.visible&&(u>=n&&x5(f,i.path)?o=!1:Wn(i.path,f.path)&&(l=!0)),u--}if(o){if(l)return T5(e),!0;if(i.snap)e.visibleWrites=UE(e.visibleWrites,i.path);else{const f=i.children;tn(f,h=>{e.visibleWrites=UE(e.visibleWrites,Rt(i.path,h))})}return!0}else return!1}function x5(e,t){if(e.snap)return Wn(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Wn(Rt(e.path,n),t))return!0;return!1}function T5(e){e.visibleWrites=yA(e.allWrites,C5,Xe()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function C5(e){return e.visible}function yA(e,t,n){let i=pr.empty();for(let o=0;o<e.length;++o){const l=e[o];if(t(l)){const u=l.path;let f;if(l.snap)Wn(n,u)?(f=un(n,u),i=kc(i,f,l.snap)):Wn(u,n)&&(f=un(u,n),i=kc(i,Xe(),l.snap.getChild(f)));else if(l.children){if(Wn(n,u))f=un(n,u),i=Yy(i,f,l.children);else if(Wn(u,n))if(f=un(u,n),We(f))i=Yy(i,Xe(),l.children);else{const h=ja(l.children,qe(f));if(h){const p=h.getChild(pt(f));i=kc(i,Xe(),p)}}}else throw Wa("WriteRecord should have .snap or .children")}}return i}function vA(e,t,n,i,o){if(!i&&!o){const l=Io(e.visibleWrites,t);if(l!=null)return l;{const u=ss(e.visibleWrites,t);if(Qy(u))return n;if(n==null&&!Wy(u,Xe()))return null;{const f=n||Ne.EMPTY_NODE;return Fa(u,f)}}}else{const l=ss(e.visibleWrites,t);if(!o&&Qy(l))return n;if(!o&&n==null&&!Wy(l,Xe()))return null;{const u=function(p){return(p.visible||o)&&(!i||!~i.indexOf(p.writeId))&&(Wn(p.path,t)||Wn(t,p.path))},f=yA(e.allWrites,u,t),h=n||Ne.EMPTY_NODE;return Fa(f,h)}}}function R5(e,t,n){let i=Ne.EMPTY_NODE;const o=Io(e.visibleWrites,t);if(o)return o.isLeafNode()||o.forEachChild(At,(l,u)=>{i=i.updateImmediateChild(l,u)}),i;if(n){const l=ss(e.visibleWrites,t);return n.forEachChild(At,(u,f)=>{const h=Fa(ss(l,new ut(u)),f);i=i.updateImmediateChild(u,h)}),$E(l).forEach(u=>{i=i.updateImmediateChild(u.name,u.node)}),i}else{const l=ss(e.visibleWrites,t);return $E(l).forEach(u=>{i=i.updateImmediateChild(u.name,u.node)}),i}}function A5(e,t,n,i,o){he(i||o,"Either existingEventSnap or existingServerSnap must exist");const l=Rt(t,n);if(Wy(e.visibleWrites,l))return null;{const u=ss(e.visibleWrites,l);return Qy(u)?o.getChild(n):Fa(u,o.getChild(n))}}function I5(e,t,n,i){const o=Rt(t,n),l=Io(e.visibleWrites,o);if(l!=null)return l;if(i.isCompleteForChild(n)){const u=ss(e.visibleWrites,o);return Fa(u,i.getNode().getImmediateChild(n))}else return null}function D5(e,t){return Io(e.visibleWrites,t)}function O5(e,t,n,i,o,l,u){let f;const h=ss(e.visibleWrites,t),p=Io(h,Xe());if(p!=null)f=p;else if(n!=null)f=Fa(h,n);else return[];if(f=f.withIndex(u),!f.isEmpty()&&!f.isLeafNode()){const g=[],y=u.getCompare(),_=l?f.getReverseIteratorFrom(i,u):f.getIteratorFrom(i,u);let S=_.getNext();for(;S&&g.length<o;)y(S,i)!==0&&g.push(S),S=_.getNext();return g}else return[]}function N5(){return{visibleWrites:pr.empty(),allWrites:[],lastWriteId:-1}}function th(e,t,n,i){return vA(e.writeTree,e.treePath,t,n,i)}function p_(e,t){return R5(e.writeTree,e.treePath,t)}function zE(e,t,n,i){return A5(e.writeTree,e.treePath,t,n,i)}function nh(e,t){return D5(e.writeTree,Rt(e.treePath,t))}function M5(e,t,n,i,o,l){return O5(e.writeTree,e.treePath,t,n,i,o,l)}function m_(e,t,n){return I5(e.writeTree,e.treePath,t,n)}function _A(e,t){return bA(Rt(e.treePath,t),e.writeTree)}function bA(e,t){return{treePath:e,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k5{constructor(){this.changeMap=new Map}trackChildChange(t){const n=t.type,i=t.childName;he(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),he(i!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(i);if(o){const l=o.type;if(n==="child_added"&&l==="child_removed")this.changeMap.set(i,Jc(i,t.snapshotNode,o.snapshotNode));else if(n==="child_removed"&&l==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&l==="child_changed")this.changeMap.set(i,Zc(i,o.oldSnap));else if(n==="child_changed"&&l==="child_added")this.changeMap.set(i,Ba(i,t.snapshotNode));else if(n==="child_changed"&&l==="child_changed")this.changeMap.set(i,Jc(i,t.snapshotNode,o.oldSnap));else throw Wa("Illegal combination of changes: "+t+" occurred after "+o)}else this.changeMap.set(i,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L5{getCompleteChild(t){return null}getChildAfterChild(t,n,i){return null}}const SA=new L5;class g_{constructor(t,n,i=null){this.writes_=t,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(t){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(t))return n.getNode().getImmediateChild(t);{const i=this.optCompleteServerCache_!=null?new hs(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return m_(this.writes_,t,i)}}getChildAfterChild(t,n,i){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:So(this.viewCache_),l=M5(this.writes_,o,n,1,i,t);return l.length===0?null:l[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P5(e){return{filter:e}}function j5(e,t){he(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),he(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function U5(e,t,n,i,o){const l=new k5;let u,f;if(n.type===cr.OVERWRITE){const p=n;p.source.fromUser?u=Ky(e,t,p.path,p.snap,i,o,l):(he(p.source.fromServer,"Unknown source."),f=p.source.tagged||t.serverCache.isFiltered()&&!We(p.path),u=rh(e,t,p.path,p.snap,i,o,f,l))}else if(n.type===cr.MERGE){const p=n;p.source.fromUser?u=z5(e,t,p.path,p.children,i,o,l):(he(p.source.fromServer,"Unknown source."),f=p.source.tagged||t.serverCache.isFiltered(),u=Xy(e,t,p.path,p.children,i,o,f,l))}else if(n.type===cr.ACK_USER_WRITE){const p=n;p.revert?u=F5(e,t,p.path,i,o,l):u=B5(e,t,p.path,p.affectedTree,i,o,l)}else if(n.type===cr.LISTEN_COMPLETE)u=H5(e,t,n.path,i,l);else throw Wa("Unknown operation type: "+n.type);const h=l.getChanges();return $5(t,u,h),{viewCache:u,changes:h}}function $5(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const o=i.getNode().isLeafNode()||i.getNode().isEmpty(),l=eh(e);(n.length>0||!e.eventCache.isFullyInitialized()||o&&!i.getNode().equals(l)||!i.getNode().getPriority().equals(l.getPriority()))&&n.push(hA(eh(t)))}}function wA(e,t,n,i,o,l){const u=t.eventCache;if(nh(i,n)!=null)return t;{let f,h;if(We(n))if(he(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const p=So(t),g=p instanceof Ne?p:Ne.EMPTY_NODE,y=p_(i,g);f=e.filter.updateFullNode(t.eventCache.getNode(),y,l)}else{const p=th(i,So(t));f=e.filter.updateFullNode(t.eventCache.getNode(),p,l)}else{const p=qe(n);if(p===".priority"){he(fs(n)===1,"Can't have a priority with additional path components");const g=u.getNode();h=t.serverCache.getNode();const y=zE(i,n,g,h);y!=null?f=e.filter.updatePriority(g,y):f=u.getNode()}else{const g=pt(n);let y;if(u.isCompleteForChild(p)){h=t.serverCache.getNode();const _=zE(i,n,u.getNode(),h);_!=null?y=u.getNode().getImmediateChild(p).updateChild(g,_):y=u.getNode().getImmediateChild(p)}else y=m_(i,p,t.serverCache);y!=null?f=e.filter.updateChild(u.getNode(),p,y,g,o,l):f=u.getNode()}}return Mc(t,f,u.isFullyInitialized()||We(n),e.filter.filtersNodes())}}function rh(e,t,n,i,o,l,u,f){const h=t.serverCache;let p;const g=u?e.filter:e.filter.getIndexedFilter();if(We(n))p=g.updateFullNode(h.getNode(),i,null);else if(g.filtersNodes()&&!h.isFiltered()){const S=h.getNode().updateChild(n,i);p=g.updateFullNode(h.getNode(),S,null)}else{const S=qe(n);if(!h.isCompleteForPath(n)&&fs(n)>1)return t;const w=pt(n),T=h.getNode().getImmediateChild(S).updateChild(w,i);S===".priority"?p=g.updatePriority(h.getNode(),T):p=g.updateChild(h.getNode(),S,T,w,SA,null)}const y=mA(t,p,h.isFullyInitialized()||We(n),g.filtersNodes()),_=new g_(o,y,l);return wA(e,y,n,o,_,f)}function Ky(e,t,n,i,o,l,u){const f=t.eventCache;let h,p;const g=new g_(o,t,l);if(We(n))p=e.filter.updateFullNode(t.eventCache.getNode(),i,u),h=Mc(t,p,!0,e.filter.filtersNodes());else{const y=qe(n);if(y===".priority")p=e.filter.updatePriority(t.eventCache.getNode(),i),h=Mc(t,p,f.isFullyInitialized(),f.isFiltered());else{const _=pt(n),S=f.getNode().getImmediateChild(y);let w;if(We(_))w=i;else{const O=g.getCompleteChild(y);O!=null?s_(_)===".priority"&&O.getChild(oA(_)).isEmpty()?w=O:w=O.updateChild(_,i):w=Ne.EMPTY_NODE}if(S.equals(w))h=t;else{const O=e.filter.updateChild(f.getNode(),y,w,_,g,u);h=Mc(t,O,f.isFullyInitialized(),e.filter.filtersNodes())}}}return h}function BE(e,t){return e.eventCache.isCompleteForChild(t)}function z5(e,t,n,i,o,l,u){let f=t;return i.foreach((h,p)=>{const g=Rt(n,h);BE(t,qe(g))&&(f=Ky(e,f,g,p,o,l,u))}),i.foreach((h,p)=>{const g=Rt(n,h);BE(t,qe(g))||(f=Ky(e,f,g,p,o,l,u))}),f}function HE(e,t,n){return n.foreach((i,o)=>{t=t.updateChild(i,o)}),t}function Xy(e,t,n,i,o,l,u,f){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let h=t,p;We(n)?p=i:p=new ht(null).setTree(n,i);const g=t.serverCache.getNode();return p.children.inorderTraversal((y,_)=>{if(g.hasChild(y)){const S=t.serverCache.getNode().getImmediateChild(y),w=HE(e,S,_);h=rh(e,h,new ut(y),w,o,l,u,f)}}),p.children.inorderTraversal((y,_)=>{const S=!t.serverCache.isCompleteForChild(y)&&_.value===null;if(!g.hasChild(y)&&!S){const w=t.serverCache.getNode().getImmediateChild(y),O=HE(e,w,_);h=rh(e,h,new ut(y),O,o,l,u,f)}}),h}function B5(e,t,n,i,o,l,u){if(nh(o,n)!=null)return t;const f=t.serverCache.isFiltered(),h=t.serverCache;if(i.value!=null){if(We(n)&&h.isFullyInitialized()||h.isCompleteForPath(n))return rh(e,t,n,h.getNode().getChild(n),o,l,f,u);if(We(n)){let p=new ht(null);return h.getNode().forEachChild(Ra,(g,y)=>{p=p.set(new ut(g),y)}),Xy(e,t,n,p,o,l,f,u)}else return t}else{let p=new ht(null);return i.foreach((g,y)=>{const _=Rt(n,g);h.isCompleteForPath(_)&&(p=p.set(g,h.getNode().getChild(_)))}),Xy(e,t,n,p,o,l,f,u)}}function H5(e,t,n,i,o){const l=t.serverCache,u=mA(t,l.getNode(),l.isFullyInitialized()||We(n),l.isFiltered());return wA(e,u,n,i,SA,o)}function F5(e,t,n,i,o,l){let u;if(nh(i,n)!=null)return t;{const f=new g_(i,t,o),h=t.eventCache.getNode();let p;if(We(n)||qe(n)===".priority"){let g;if(t.serverCache.isFullyInitialized())g=th(i,So(t));else{const y=t.serverCache.getNode();he(y instanceof Ne,"serverChildren would be complete if leaf node"),g=p_(i,y)}g=g,p=e.filter.updateFullNode(h,g,l)}else{const g=qe(n);let y=m_(i,g,t.serverCache);y==null&&t.serverCache.isCompleteForChild(g)&&(y=h.getImmediateChild(g)),y!=null?p=e.filter.updateChild(h,g,y,pt(n),f,l):t.eventCache.getNode().hasChild(g)?p=e.filter.updateChild(h,g,Ne.EMPTY_NODE,pt(n),f,l):p=h,p.isEmpty()&&t.serverCache.isFullyInitialized()&&(u=th(i,So(t)),u.isLeafNode()&&(p=e.filter.updateFullNode(p,u,l)))}return u=t.serverCache.isFullyInitialized()||nh(i,Xe())!=null,Mc(t,p,u,e.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q5{constructor(t,n){this.query_=t,this.eventRegistrations_=[];const i=this.query_._queryParams,o=new c_(i.getIndex()),l=l5(i);this.processor_=P5(l);const u=n.serverCache,f=n.eventCache,h=o.updateFullNode(Ne.EMPTY_NODE,u.getNode(),null),p=l.updateFullNode(Ne.EMPTY_NODE,f.getNode(),null),g=new hs(h,u.isFullyInitialized(),o.filtersNodes()),y=new hs(p,f.isFullyInitialized(),l.filtersNodes());this.viewCache_=Hh(y,g),this.eventGenerator_=new m5(this.query_)}get query(){return this.query_}}function V5(e){return e.viewCache_.serverCache.getNode()}function G5(e){return eh(e.viewCache_)}function Y5(e,t){const n=So(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!We(t)&&!n.getImmediateChild(qe(t)).isEmpty())?n.getChild(t):null}function FE(e){return e.eventRegistrations_.length===0}function W5(e,t){e.eventRegistrations_.push(t)}function qE(e,t,n){const i=[];if(n){he(t==null,"A cancel should cancel all event registrations.");const o=e.query._path;e.eventRegistrations_.forEach(l=>{const u=l.createCancelEvent(n,o);u&&i.push(u)})}if(t){let o=[];for(let l=0;l<e.eventRegistrations_.length;++l){const u=e.eventRegistrations_[l];if(!u.matches(t))o.push(u);else if(t.hasAnyCallback()){o=o.concat(e.eventRegistrations_.slice(l+1));break}}e.eventRegistrations_=o}else e.eventRegistrations_=[];return i}function VE(e,t,n,i){t.type===cr.MERGE&&t.source.queryId!==null&&(he(So(e.viewCache_),"We should always have a full cache before handling merges"),he(eh(e.viewCache_),"Missing event cache, even though we have a server cache"));const o=e.viewCache_,l=U5(e.processor_,o,t,n,i);return j5(e.processor_,l.viewCache),he(l.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=l.viewCache,EA(e,l.changes,l.viewCache.eventCache.getNode(),null)}function Q5(e,t){const n=e.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(At,(l,u)=>{i.push(Ba(l,u))}),n.isFullyInitialized()&&i.push(hA(n.getNode())),EA(e,i,n.getNode(),t)}function EA(e,t,n,i){const o=i?[i]:e.eventRegistrations_;return g5(e.eventGenerator_,t,n,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ih;class xA{constructor(){this.views=new Map}}function K5(e){he(!ih,"__referenceConstructor has already been defined"),ih=e}function X5(){return he(ih,"Reference.ts has not been loaded"),ih}function Z5(e){return e.views.size===0}function y_(e,t,n,i){const o=t.source.queryId;if(o!==null){const l=e.views.get(o);return he(l!=null,"SyncTree gave us an op for an invalid query."),VE(l,t,n,i)}else{let l=[];for(const u of e.views.values())l=l.concat(VE(u,t,n,i));return l}}function TA(e,t,n,i,o){const l=t._queryIdentifier,u=e.views.get(l);if(!u){let f=th(n,o?i:null),h=!1;f?h=!0:i instanceof Ne?(f=p_(n,i),h=!1):(f=Ne.EMPTY_NODE,h=!1);const p=Hh(new hs(f,h,!1),new hs(i,o,!1));return new q5(t,p)}return u}function J5(e,t,n,i,o,l){const u=TA(e,t,i,o,l);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,u),W5(u,n),Q5(u,n)}function eU(e,t,n,i){const o=t._queryIdentifier,l=[];let u=[];const f=ps(e);if(o==="default")for(const[h,p]of e.views.entries())u=u.concat(qE(p,n,i)),FE(p)&&(e.views.delete(h),p.query._queryParams.loadsAllData()||l.push(p.query));else{const h=e.views.get(o);h&&(u=u.concat(qE(h,n,i)),FE(h)&&(e.views.delete(o),h.query._queryParams.loadsAllData()||l.push(h.query)))}return f&&!ps(e)&&l.push(new(X5())(t._repo,t._path)),{removed:l,events:u}}function CA(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function os(e,t){let n=null;for(const i of e.views.values())n=n||Y5(i,t);return n}function RA(e,t){if(t._queryParams.loadsAllData())return qh(e);{const i=t._queryIdentifier;return e.views.get(i)}}function AA(e,t){return RA(e,t)!=null}function ps(e){return qh(e)!=null}function qh(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sh;function tU(e){he(!sh,"__referenceConstructor has already been defined"),sh=e}function nU(){return he(sh,"Reference.ts has not been loaded"),sh}let rU=1;class GE{constructor(t){this.listenProvider_=t,this.syncPointTree_=new ht(null),this.pendingWriteTree_=N5(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function IA(e,t,n,i,o){return b5(e.pendingWriteTree_,t,n,i,o),o?nl(e,new bo(d_(),t,n)):[]}function iU(e,t,n,i){S5(e.pendingWriteTree_,t,n,i);const o=ht.fromObject(n);return nl(e,new Ha(d_(),t,o))}function ns(e,t,n=!1){const i=w5(e.pendingWriteTree_,t);if(E5(e.pendingWriteTree_,t)){let l=new ht(null);return i.snap!=null?l=l.set(Xe(),!0):tn(i.children,u=>{l=l.set(new ut(u),!0)}),nl(e,new Jf(i.path,l,n))}else return[]}function bu(e,t,n){return nl(e,new bo(f_(),t,n))}function sU(e,t,n){const i=ht.fromObject(n);return nl(e,new Ha(f_(),t,i))}function oU(e,t){return nl(e,new tu(f_(),t))}function aU(e,t,n){const i=__(e,n);if(i){const o=b_(i),l=o.path,u=o.queryId,f=un(l,t),h=new tu(h_(u),f);return S_(e,l,h)}else return[]}function oh(e,t,n,i,o=!1){const l=t._path,u=e.syncPointTree_.get(l);let f=[];if(u&&(t._queryIdentifier==="default"||AA(u,t))){const h=eU(u,t,n,i);Z5(u)&&(e.syncPointTree_=e.syncPointTree_.remove(l));const p=h.removed;if(f=h.events,!o){const g=p.findIndex(_=>_._queryParams.loadsAllData())!==-1,y=e.syncPointTree_.findOnPath(l,(_,S)=>ps(S));if(g&&!y){const _=e.syncPointTree_.subtree(l);if(!_.isEmpty()){const S=uU(_);for(let w=0;w<S.length;++w){const O=S[w],T=O.query,A=MA(e,O);e.listenProvider_.startListening(Lc(T),nu(e,T),A.hashFn,A.onComplete)}}}!y&&p.length>0&&!i&&(g?e.listenProvider_.stopListening(Lc(t),null):p.forEach(_=>{const S=e.queryToTagMap.get(Vh(_));e.listenProvider_.stopListening(Lc(_),S)}))}dU(e,p)}return f}function DA(e,t,n,i){const o=__(e,i);if(o!=null){const l=b_(o),u=l.path,f=l.queryId,h=un(u,t),p=new bo(h_(f),h,n);return S_(e,u,p)}else return[]}function lU(e,t,n,i){const o=__(e,i);if(o){const l=b_(o),u=l.path,f=l.queryId,h=un(u,t),p=ht.fromObject(n),g=new Ha(h_(f),h,p);return S_(e,u,g)}else return[]}function Zy(e,t,n,i=!1){const o=t._path;let l=null,u=!1;e.syncPointTree_.foreachOnPath(o,(_,S)=>{const w=un(_,o);l=l||os(S,w),u=u||ps(S)});let f=e.syncPointTree_.get(o);f?(u=u||ps(f),l=l||os(f,Xe())):(f=new xA,e.syncPointTree_=e.syncPointTree_.set(o,f));let h;l!=null?h=!0:(h=!1,l=Ne.EMPTY_NODE,e.syncPointTree_.subtree(o).foreachChild((S,w)=>{const O=os(w,Xe());O&&(l=l.updateImmediateChild(S,O))}));const p=AA(f,t);if(!p&&!t._queryParams.loadsAllData()){const _=Vh(t);he(!e.queryToTagMap.has(_),"View does not exist, but we have a tag");const S=fU();e.queryToTagMap.set(_,S),e.tagToQueryMap.set(S,_)}const g=Fh(e.pendingWriteTree_,o);let y=J5(f,t,n,g,l,h);if(!p&&!u&&!i){const _=RA(f,t);y=y.concat(hU(e,t,_))}return y}function v_(e,t,n){const o=e.pendingWriteTree_,l=e.syncPointTree_.findOnPath(t,(u,f)=>{const h=un(u,t),p=os(f,h);if(p)return p});return vA(o,t,l,n,!0)}function cU(e,t){const n=t._path;let i=null;e.syncPointTree_.foreachOnPath(n,(p,g)=>{const y=un(p,n);i=i||os(g,y)});let o=e.syncPointTree_.get(n);o?i=i||os(o,Xe()):(o=new xA,e.syncPointTree_=e.syncPointTree_.set(n,o));const l=i!=null,u=l?new hs(i,!0,!1):null,f=Fh(e.pendingWriteTree_,t._path),h=TA(o,t,f,l?u.getNode():Ne.EMPTY_NODE,l);return G5(h)}function nl(e,t){return OA(t,e.syncPointTree_,null,Fh(e.pendingWriteTree_,Xe()))}function OA(e,t,n,i){if(We(e.path))return NA(e,t,n,i);{const o=t.get(Xe());n==null&&o!=null&&(n=os(o,Xe()));let l=[];const u=qe(e.path),f=e.operationForChild(u),h=t.children.get(u);if(h&&f){const p=n?n.getImmediateChild(u):null,g=_A(i,u);l=l.concat(OA(f,h,p,g))}return o&&(l=l.concat(y_(o,e,i,n))),l}}function NA(e,t,n,i){const o=t.get(Xe());n==null&&o!=null&&(n=os(o,Xe()));let l=[];return t.children.inorderTraversal((u,f)=>{const h=n?n.getImmediateChild(u):null,p=_A(i,u),g=e.operationForChild(u);g&&(l=l.concat(NA(g,f,h,p)))}),o&&(l=l.concat(y_(o,e,i,n))),l}function MA(e,t){const n=t.query,i=nu(e,n);return{hashFn:()=>(V5(t)||Ne.EMPTY_NODE).hash(),onComplete:o=>{if(o==="ok")return i?aU(e,n._path,i):oU(e,n._path);{const l=o3(o,n);return oh(e,n,null,l)}}}}function nu(e,t){const n=Vh(t);return e.queryToTagMap.get(n)}function Vh(e){return e._path.toString()+"$"+e._queryIdentifier}function __(e,t){return e.tagToQueryMap.get(t)}function b_(e){const t=e.indexOf("$");return he(t!==-1&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ut(e.substr(0,t))}}function S_(e,t,n){const i=e.syncPointTree_.get(t);he(i,"Missing sync point for query tag that we're tracking");const o=Fh(e.pendingWriteTree_,t);return y_(i,n,o,null)}function uU(e){return e.fold((t,n,i)=>{if(n&&ps(n))return[qh(n)];{let o=[];return n&&(o=CA(n)),tn(i,(l,u)=>{o=o.concat(u)}),o}})}function Lc(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(nU())(e._repo,e._path):e}function dU(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const o=Vh(i),l=e.queryToTagMap.get(o);e.queryToTagMap.delete(o),e.tagToQueryMap.delete(l)}}}function fU(){return rU++}function hU(e,t,n){const i=t._path,o=nu(e,t),l=MA(e,n),u=e.listenProvider_.startListening(Lc(t),o,l.hashFn,l.onComplete),f=e.syncPointTree_.subtree(i);if(o)he(!ps(f.value),"If we're adding a query, it shouldn't be shadowed");else{const h=f.fold((p,g,y)=>{if(!We(p)&&g&&ps(g))return[qh(g).query];{let _=[];return g&&(_=_.concat(CA(g).map(S=>S.query))),tn(y,(S,w)=>{_=_.concat(w)}),_}});for(let p=0;p<h.length;++p){const g=h[p];e.listenProvider_.stopListening(Lc(g),nu(e,g))}}return u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(t){this.node_=t}getImmediateChild(t){const n=this.node_.getImmediateChild(t);return new w_(n)}node(){return this.node_}}class E_{constructor(t,n){this.syncTree_=t,this.path_=n}getImmediateChild(t){const n=Rt(this.path_,t);return new E_(this.syncTree_,n)}node(){return v_(this.syncTree_,this.path_)}}const pU=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},YE=function(e,t,n){if(!e||typeof e!="object")return e;if(he(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return mU(e[".sv"],t,n);if(typeof e[".sv"]=="object")return gU(e[".sv"],t);he(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},mU=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:he(!1,"Unexpected server value: "+e)}},gU=function(e,t,n){e.hasOwnProperty("increment")||he(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;typeof i!="number"&&he(!1,"Unexpected increment value: "+i);const o=t.node();if(he(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return i;const u=o.getValue();return typeof u!="number"?i:u+i},kA=function(e,t,n,i){return x_(t,new E_(n,e),i)},LA=function(e,t,n){return x_(e,new w_(t),n)};function x_(e,t,n){const i=e.getPriority().val(),o=YE(i,t.getImmediateChild(".priority"),n);let l;if(e.isLeafNode()){const u=e,f=YE(u.getValue(),t,n);return f!==u.getValue()||o!==u.getPriority().val()?new Ft(f,Ut(o)):e}else{const u=e;return l=u,o!==u.getPriority().val()&&(l=l.updatePriority(new Ft(o))),u.forEachChild(At,(f,h)=>{const p=x_(h,t.getImmediateChild(f),n);p!==h&&(l=l.updateImmediateChild(f,p))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(t="",n=null,i={children:{},childCount:0}){this.name=t,this.parent=n,this.node=i}}function C_(e,t){let n=t instanceof ut?t:new ut(t),i=e,o=qe(n);for(;o!==null;){const l=ja(i.node.children,o)||{children:{},childCount:0};i=new T_(o,i,l),n=pt(n),o=qe(n)}return i}function rl(e){return e.node.value}function PA(e,t){e.node.value=t,Jy(e)}function jA(e){return e.node.childCount>0}function yU(e){return rl(e)===void 0&&!jA(e)}function Gh(e,t){tn(e.node.children,(n,i)=>{t(new T_(n,e,i))})}function UA(e,t,n,i){n&&t(e),Gh(e,o=>{UA(o,t,!0)})}function vU(e,t,n){let i=e.parent;for(;i!==null;){if(t(i))return!0;i=i.parent}return!1}function Su(e){return new ut(e.parent===null?e.name:Su(e.parent)+"/"+e.name)}function Jy(e){e.parent!==null&&_U(e.parent,e.name,e)}function _U(e,t,n){const i=yU(n),o=kr(e.node.children,t);i&&o?(delete e.node.children[t],e.node.childCount--,Jy(e)):!i&&!o&&(e.node.children[t]=n.node,e.node.childCount++,Jy(e))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bU=/[\[\].#$\/\u0000-\u001F\u007F]/,SU=/[\[\].#$\u0000-\u001F\u007F]/,Qg=10*1024*1024,R_=function(e){return typeof e=="string"&&e.length!==0&&!bU.test(e)},$A=function(e){return typeof e=="string"&&e.length!==0&&!SU.test(e)},wU=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),$A(e)},EU=function(e){return e===null||typeof e=="string"||typeof e=="number"&&!e_(e)||e&&typeof e=="object"&&kr(e,".sv")},zA=function(e,t,n,i){i&&t===void 0||Yh(Oh(e,"value"),t,n)},Yh=function(e,t,n){const i=n instanceof ut?new z3(n,e):n;if(t===void 0)throw new Error(e+"contains undefined "+eo(i));if(typeof t=="function")throw new Error(e+"contains a function "+eo(i)+" with contents = "+t.toString());if(e_(t))throw new Error(e+"contains "+t.toString()+" "+eo(i));if(typeof t=="string"&&t.length>Qg/3&&Nh(t)>Qg)throw new Error(e+"contains a string greater than "+Qg+" utf8 bytes "+eo(i)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let o=!1,l=!1;if(tn(t,(u,f)=>{if(u===".value")o=!0;else if(u!==".priority"&&u!==".sv"&&(l=!0,!R_(u)))throw new Error(e+" contains an invalid key ("+u+") "+eo(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);B3(i,u),Yh(e,f,i),H3(i)}),o&&l)throw new Error(e+' contains ".value" child '+eo(i)+" in addition to actual children.")}},xU=function(e,t){let n,i;for(n=0;n<t.length;n++){i=t[n];const l=Xc(i);for(let u=0;u<l.length;u++)if(!(l[u]===".priority"&&u===l.length-1)){if(!R_(l[u]))throw new Error(e+"contains an invalid key ("+l[u]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}t.sort($3);let o=null;for(n=0;n<t.length;n++){if(i=t[n],o!==null&&Wn(o,i))throw new Error(e+"contains a path "+o.toString()+" that is ancestor of another path "+i.toString());o=i}},TU=function(e,t,n,i){const o=Oh(e,"values");if(!(t&&typeof t=="object")||Array.isArray(t))throw new Error(o+" must be an object containing the children to replace.");const l=[];tn(t,(u,f)=>{const h=new ut(u);if(Yh(o,f,Rt(n,h)),s_(h)===".priority"&&!EU(f))throw new Error(o+"contains an invalid value for '"+h.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");l.push(h)}),xU(o,l)},BA=function(e,t,n,i){if(!$A(n))throw new Error(Oh(e,t)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},CU=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),BA(e,t,n)},A_=function(e,t){if(qe(t)===".info")throw new Error(e+" failed = Can't modify data under /.info/")},RU=function(e,t){const n=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!R_(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!wU(n))throw new Error(Oh(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AU{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Wh(e,t){let n=null;for(let i=0;i<t.length;i++){const o=t[i],l=o.getPath();n!==null&&!o_(l,n.path)&&(e.eventLists_.push(n),n=null),n===null&&(n={events:[],path:l}),n.events.push(o)}n&&e.eventLists_.push(n)}function HA(e,t,n){Wh(e,n),FA(e,i=>o_(i,t))}function Zn(e,t,n){Wh(e,n),FA(e,i=>Wn(i,t)||Wn(t,i))}function FA(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const o=e.eventLists_[i];if(o){const l=o.path;t(l)?(IU(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function IU(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(n!==null){e.events[t]=null;const i=n.getEventRunner();Oc&&Jt("event: "+n.toString()),tl(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DU="repo_interrupt",OU=25;class NU{constructor(t,n,i,o){this.repoInfo_=t,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new AU,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Zf(),this.transactionQueueTree_=new T_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function MU(e,t,n){if(e.stats_=r_(e.repoInfo_),e.forceRestClient_||u3())e.server_=new Xf(e.repoInfo_,(i,o,l,u)=>{WE(e,i,o,l,u)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>QE(e,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{$t(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new di(e.repoInfo_,t,(i,o,l,u)=>{WE(e,i,o,l,u)},i=>{QE(e,i)},i=>{kU(e,i)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(i=>{e.server_.refreshAuthToken(i)}),e.appCheckProvider_.addTokenChangeListener(i=>{e.server_.refreshAppCheckToken(i.token)}),e.statsReporter_=m3(e.repoInfo_,()=>new p5(e.stats_,e.server_)),e.infoData_=new c5,e.infoSyncTree_=new GE({startListening:(i,o,l,u)=>{let f=[];const h=e.infoData_.getNode(i._path);return h.isEmpty()||(f=bu(e.infoSyncTree_,i._path,h),setTimeout(()=>{u("ok")},0)),f},stopListening:()=>{}}),I_(e,"connected",!1),e.serverSyncTree_=new GE({startListening:(i,o,l,u)=>(e.server_.listen(i,l,o,(f,h)=>{const p=u(f,h);Zn(e.eventQueue_,i._path,p)}),[]),stopListening:(i,o)=>{e.server_.unlisten(i,o)}})}function qA(e){const n=e.infoData_.getNode(new ut(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Qh(e){return pU({timestamp:qA(e)})}function WE(e,t,n,i,o){e.dataUpdateCount++;const l=new ut(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let u=[];if(o)if(i){const h=zf(n,p=>Ut(p));u=lU(e.serverSyncTree_,l,h,o)}else{const h=Ut(n);u=DA(e.serverSyncTree_,l,h,o)}else if(i){const h=zf(n,p=>Ut(p));u=sU(e.serverSyncTree_,l,h)}else{const h=Ut(n);u=bu(e.serverSyncTree_,l,h)}let f=l;u.length>0&&(f=qa(e,l)),Zn(e.eventQueue_,f,u)}function QE(e,t){I_(e,"connected",t),t===!1&&UU(e)}function kU(e,t){tn(t,(n,i)=>{I_(e,n,i)})}function I_(e,t,n){const i=new ut("/.info/"+t),o=Ut(n);e.infoData_.updateSnapshot(i,o);const l=bu(e.infoSyncTree_,i,o);Zn(e.eventQueue_,i,l)}function D_(e){return e.nextWriteId_++}function LU(e,t,n){const i=cU(e.serverSyncTree_,t);return i!=null?Promise.resolve(i):e.server_.get(t).then(o=>{const l=Ut(o).withIndex(t._queryParams.getIndex());Zy(e.serverSyncTree_,t,n,!0);let u;if(t._queryParams.loadsAllData())u=bu(e.serverSyncTree_,t._path,l);else{const f=nu(e.serverSyncTree_,t);u=DA(e.serverSyncTree_,t._path,l,f)}return Zn(e.eventQueue_,t._path,u),oh(e.serverSyncTree_,t,n,null,!0),l},o=>(wu(e,"get for query "+$t(t)+" failed: "+o),Promise.reject(new Error(o))))}function PU(e,t,n,i,o){wu(e,"set",{path:t.toString(),value:n,priority:i});const l=Qh(e),u=Ut(n,i),f=v_(e.serverSyncTree_,t),h=LA(u,f,l),p=D_(e),g=IA(e.serverSyncTree_,t,h,p,!0);Wh(e.eventQueue_,g),e.server_.put(t.toString(),u.val(!0),(_,S)=>{const w=_==="ok";w||dn("set at "+t+" failed: "+_);const O=ns(e.serverSyncTree_,p,!w);Zn(e.eventQueue_,t,O),ev(e,o,_,S)});const y=N_(e,t);qa(e,y),Zn(e.eventQueue_,y,[])}function jU(e,t,n,i){wu(e,"update",{path:t.toString(),value:n});let o=!0;const l=Qh(e),u={};if(tn(n,(f,h)=>{o=!1,u[f]=kA(Rt(t,f),Ut(h),e.serverSyncTree_,l)}),o)Jt("update() called with empty data.  Don't do anything."),ev(e,i,"ok",void 0);else{const f=D_(e),h=iU(e.serverSyncTree_,t,u,f);Wh(e.eventQueue_,h),e.server_.merge(t.toString(),n,(p,g)=>{const y=p==="ok";y||dn("update at "+t+" failed: "+p);const _=ns(e.serverSyncTree_,f,!y),S=_.length>0?qa(e,t):t;Zn(e.eventQueue_,S,_),ev(e,i,p,g)}),tn(n,p=>{const g=N_(e,Rt(t,p));qa(e,g)}),Zn(e.eventQueue_,t,[])}}function UU(e){wu(e,"onDisconnectEvents");const t=Qh(e),n=Zf();Gy(e.onDisconnect_,Xe(),(o,l)=>{const u=kA(o,l,e.serverSyncTree_,t);pA(n,o,u)});let i=[];Gy(n,Xe(),(o,l)=>{i=i.concat(bu(e.serverSyncTree_,o,l));const u=N_(e,o);qa(e,u)}),e.onDisconnect_=Zf(),Zn(e.eventQueue_,Xe(),i)}function $U(e,t,n){let i;qe(t._path)===".info"?i=Zy(e.infoSyncTree_,t,n):i=Zy(e.serverSyncTree_,t,n),HA(e.eventQueue_,t._path,i)}function KE(e,t,n){let i;qe(t._path)===".info"?i=oh(e.infoSyncTree_,t,n):i=oh(e.serverSyncTree_,t,n),HA(e.eventQueue_,t._path,i)}function zU(e){e.persistentConnection_&&e.persistentConnection_.interrupt(DU)}function wu(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Jt(n,...t)}function ev(e,t,n,i){t&&tl(()=>{if(n==="ok")t(null);else{const o=(n||"error").toUpperCase();let l=o;i&&(l+=": "+i);const u=new Error(l);u.code=o,t(u)}})}function VA(e,t,n){return v_(e.serverSyncTree_,t,n)||Ne.EMPTY_NODE}function O_(e,t=e.transactionQueueTree_){if(t||Kh(e,t),rl(t)){const n=YA(e,t);he(n.length>0,"Sending zero length transaction queue"),n.every(o=>o.status===0)&&BU(e,Su(t),n)}else jA(t)&&Gh(t,n=>{O_(e,n)})}function BU(e,t,n){const i=n.map(p=>p.currentWriteId),o=VA(e,t,i);let l=o;const u=o.hash();for(let p=0;p<n.length;p++){const g=n[p];he(g.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),g.status=1,g.retryCount++;const y=un(t,g.path);l=l.updateChild(y,g.currentOutputSnapshotRaw)}const f=l.val(!0),h=t;e.server_.put(h.toString(),f,p=>{wu(e,"transaction put response",{path:h.toString(),status:p});let g=[];if(p==="ok"){const y=[];for(let _=0;_<n.length;_++)n[_].status=2,g=g.concat(ns(e.serverSyncTree_,n[_].currentWriteId)),n[_].onComplete&&y.push(()=>n[_].onComplete(null,!0,n[_].currentOutputSnapshotResolved)),n[_].unwatcher();Kh(e,C_(e.transactionQueueTree_,t)),O_(e,e.transactionQueueTree_),Zn(e.eventQueue_,t,g);for(let _=0;_<y.length;_++)tl(y[_])}else{if(p==="datastale")for(let y=0;y<n.length;y++)n[y].status===3?n[y].status=4:n[y].status=0;else{dn("transaction at "+h.toString()+" failed: "+p);for(let y=0;y<n.length;y++)n[y].status=4,n[y].abortReason=p}qa(e,t)}},u)}function qa(e,t){const n=GA(e,t),i=Su(n),o=YA(e,n);return HU(e,o,i),i}function HU(e,t,n){if(t.length===0)return;const i=[];let o=[];const u=t.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<t.length;f++){const h=t[f],p=un(n,h.path);let g=!1,y;if(he(p!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),h.status===4)g=!0,y=h.abortReason,o=o.concat(ns(e.serverSyncTree_,h.currentWriteId,!0));else if(h.status===0)if(h.retryCount>=OU)g=!0,y="maxretry",o=o.concat(ns(e.serverSyncTree_,h.currentWriteId,!0));else{const _=VA(e,h.path,u);h.currentInputSnapshot=_;const S=t[f].update(_.val());if(S!==void 0){Yh("transaction failed: Data returned ",S,h.path);let w=Ut(S);typeof S=="object"&&S!=null&&kr(S,".priority")||(w=w.updatePriority(_.getPriority()));const T=h.currentWriteId,A=Qh(e),k=LA(w,_,A);h.currentOutputSnapshotRaw=w,h.currentOutputSnapshotResolved=k,h.currentWriteId=D_(e),u.splice(u.indexOf(T),1),o=o.concat(IA(e.serverSyncTree_,h.path,k,h.currentWriteId,h.applyLocally)),o=o.concat(ns(e.serverSyncTree_,T,!0))}else g=!0,y="nodata",o=o.concat(ns(e.serverSyncTree_,h.currentWriteId,!0))}Zn(e.eventQueue_,n,o),o=[],g&&(t[f].status=2,(function(_){setTimeout(_,Math.floor(0))})(t[f].unwatcher),t[f].onComplete&&(y==="nodata"?i.push(()=>t[f].onComplete(null,!1,t[f].currentInputSnapshot)):i.push(()=>t[f].onComplete(new Error(y),!1,null))))}Kh(e,e.transactionQueueTree_);for(let f=0;f<i.length;f++)tl(i[f]);O_(e,e.transactionQueueTree_)}function GA(e,t){let n,i=e.transactionQueueTree_;for(n=qe(t);n!==null&&rl(i)===void 0;)i=C_(i,n),t=pt(t),n=qe(t);return i}function YA(e,t){const n=[];return WA(e,t,n),n.sort((i,o)=>i.order-o.order),n}function WA(e,t,n){const i=rl(t);if(i)for(let o=0;o<i.length;o++)n.push(i[o]);Gh(t,o=>{WA(e,o,n)})}function Kh(e,t){const n=rl(t);if(n){let i=0;for(let o=0;o<n.length;o++)n[o].status!==2&&(n[i]=n[o],i++);n.length=i,PA(t,n.length>0?n:void 0)}Gh(t,i=>{Kh(e,i)})}function N_(e,t){const n=Su(GA(e,t)),i=C_(e.transactionQueueTree_,t);return vU(i,o=>{Kg(e,o)}),Kg(e,i),UA(i,o=>{Kg(e,o)}),n}function Kg(e,t){const n=rl(t);if(n){const i=[];let o=[],l=-1;for(let u=0;u<n.length;u++)n[u].status===3||(n[u].status===1?(he(l===u-1,"All SENT items should be at beginning of queue."),l=u,n[u].status=3,n[u].abortReason="set"):(he(n[u].status===0,"Unexpected transaction status in abort"),n[u].unwatcher(),o=o.concat(ns(e.serverSyncTree_,n[u].currentWriteId,!0)),n[u].onComplete&&i.push(n[u].onComplete.bind(null,new Error("set"),!1,null))));l===-1?PA(t,void 0):n.length=l+1,Zn(e.eventQueue_,Su(t),o);for(let u=0;u<i.length;u++)tl(i[u])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FU(e){let t="";const n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let o=n[i];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}t+="/"+o}return t}function qU(e){const t={};e.charAt(0)==="?"&&(e=e.substring(1));for(const n of e.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):dn(`Invalid query segment '${n}' in query '${e}'`)}return t}const XE=function(e,t){const n=VU(e),i=n.namespace;n.domain==="firebase.com"&&mi(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&mi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||t3();const o=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new XR(n.host,n.secure,i,o,t,"",i!==n.subdomain),path:new ut(n.pathString)}},VU=function(e){let t="",n="",i="",o="",l="",u=!0,f="https",h=443;if(typeof e=="string"){let p=e.indexOf("//");p>=0&&(f=e.substring(0,p-1),e=e.substring(p+2));let g=e.indexOf("/");g===-1&&(g=e.length);let y=e.indexOf("?");y===-1&&(y=e.length),t=e.substring(0,Math.min(g,y)),g<y&&(o=FU(e.substring(g,y)));const _=qU(e.substring(Math.min(e.length,y)));p=t.indexOf(":"),p>=0?(u=f==="https"||f==="wss",h=parseInt(t.substring(p+1),10)):p=t.length;const S=t.slice(0,p);if(S.toLowerCase()==="localhost")n="localhost";else if(S.split(".").length<=2)n=S;else{const w=t.indexOf(".");i=t.substring(0,w).toLowerCase(),n=t.substring(w+1),l=i}"ns"in _&&(l=_.ns)}return{host:t,port:h,domain:n,subdomain:i,secure:u,scheme:f,pathString:o,namespace:l}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",GU=(function(){let e=0;const t=[];return function(n){const i=n===e;e=n;let o;const l=new Array(8);for(o=7;o>=0;o--)l[o]=ZE.charAt(n%64),n=Math.floor(n/64);he(n===0,"Cannot push at time == 0");let u=l.join("");if(i){for(o=11;o>=0&&t[o]===63;o--)t[o]=0;t[o]++}else for(o=0;o<12;o++)t[o]=Math.floor(Math.random()*64);for(o=0;o<12;o++)u+=ZE.charAt(t[o]);return he(u.length===20,"nextPushId: Length should be 20."),u}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YU{constructor(t,n,i,o){this.eventType=t,this.eventRegistration=n,this.snapshot=i,this.prevName=o}getPath(){const t=this.snapshot.ref;return this.eventType==="value"?t._path:t.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+$t(this.snapshot.exportVal())}}class WU{constructor(t,n,i){this.eventRegistration=t,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(t,n){this.snapshotCallback=t,this.cancelCallback=n}onValue(t,n){this.snapshotCallback.call(null,t,n)}onCancel(t){return he(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)}get hasCancelCallback(){return!!this.cancelCallback}matches(t){return this.snapshotCallback===t.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(t,n,i,o){this._repo=t,this._path=n,this._queryParams=i,this._orderByCalled=o}get key(){return We(this._path)?null:s_(this._path)}get ref(){return new Si(this._repo,this._path)}get _queryIdentifier(){const t=PE(this._queryParams),n=t_(t);return n==="{}"?"default":n}get _queryObject(){return PE(this._queryParams)}isEqual(t){if(t=Gt(t),!(t instanceof M_))return!1;const n=this._repo===t._repo,i=o_(this._path,t._path),o=this._queryIdentifier===t._queryIdentifier;return n&&i&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+U3(this._path)}}class Si extends M_{constructor(t,n){super(t,n,new u_,!1)}get parent(){const t=oA(this._path);return t===null?null:new Si(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}class ru{constructor(t,n,i){this._node=t,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const n=new ut(t),i=iu(this.ref,t);return new ru(this._node.getChild(n),i,At)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,o)=>t(new ru(o,iu(this.ref,i),At)))}hasChild(t){const n=new ut(t);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function tr(e,t){return e=Gt(e),e._checkNotDeleted("ref"),t!==void 0?iu(e._root,t):e._root}function iu(e,t){return e=Gt(e),qe(e._path)===null?CU("child","path",t):BA("child","path",t),new Si(e._repo,Rt(e._path,t))}function QU(e,t){e=Gt(e),A_("push",e._path),zA("push",t,e._path,!0);const n=qA(e._repo),i=GU(n),o=iu(e,i),l=iu(e,i);let u;return t!=null?u=k_(l,t).then(()=>l):u=Promise.resolve(l),o.then=u.then.bind(u),o.catch=u.then.bind(u,void 0),o}function KA(e){return A_("remove",e._path),k_(e,null)}function k_(e,t){e=Gt(e),A_("set",e._path),zA("set",t,e._path,!1);const n=new du;return PU(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}function XA(e,t){TU("update",t,e._path);const n=new du;return jU(e._repo,e._path,t,n.wrapCallback(()=>{})),n.promise}function ZA(e){e=Gt(e);const t=new QA(()=>{}),n=new Xh(t);return LU(e._repo,e,n).then(i=>new ru(i,new Si(e._repo,e._path),e._queryParams.getIndex()))}class Xh{constructor(t){this.callbackContext=t}respondsTo(t){return t==="value"}createEvent(t,n){const i=n._queryParams.getIndex();return new YU("value",this,new ru(t.snapshotNode,new Si(n._repo,n._path),i))}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,n){return this.callbackContext.hasCancelCallback?new WU(this,t,n):null}matches(t){return t instanceof Xh?!t.callbackContext||!this.callbackContext?!0:t.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function KU(e,t,n,i,o){let l;if(typeof i=="object"&&(l=void 0,o=i),typeof i=="function"&&(l=i),o&&o.onlyOnce){const h=n,p=(g,y)=>{KE(e._repo,e,f),h(g,y)};p.userCallback=n.userCallback,p.context=n.context,n=p}const u=new QA(n,l||void 0),f=new Xh(u);return $U(e._repo,e,f),()=>KE(e._repo,e,f)}function Zh(e,t,n,i){return KU(e,"value",t,n,i)}K5(Si);tU(Si);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XU="FIREBASE_DATABASE_EMULATOR_HOST",tv={};let ZU=!1;function JU(e,t,n,i){const o=t.lastIndexOf(":"),l=t.substring(0,o),u=Qa(l);e.repoInfo_=new XR(t,u,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0,n),i&&(e.authTokenProvider_=i)}function e$(e,t,n,i,o){let l=i||e.options.databaseURL;l===void 0&&(e.options.projectId||mi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Jt("Using default host for project ",e.options.projectId),l=`${e.options.projectId}-default-rtdb.firebaseio.com`);let u=XE(l,o),f=u.repoInfo,h;typeof process<"u"&&vE&&(h=vE[XU]),h?(l=`http://${h}?ns=${f.namespace}`,u=XE(l,o),f=u.repoInfo):u.repoInfo.secure;const p=new f3(e.name,e.options,t);RU("Invalid Firebase Database URL",u),We(u.path)||mi("Database URL must point to the root of a Firebase Database (not including a child path).");const g=n$(f,e,p,new d3(e,n));return new r$(g,e)}function t$(e,t){const n=tv[t];(!n||n[e.key]!==e)&&mi(`Database ${t}(${e.repoInfo_}) has already been deleted.`),zU(e),delete n[e.key]}function n$(e,t,n,i){let o=tv[t.name];o||(o={},tv[t.name]=o);let l=o[e.toURLString()];return l&&mi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new NU(e,ZU,n,i),o[e.toURLString()]=l,l}class r${constructor(t,n){this._repoInternal=t,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(MU(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Si(this._repo,Xe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(t$(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&mi("Cannot call "+t+" on a deleted database.")}}function i$(e=Bv(),t){const n=Xa(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const i=WL("database");i&&s$(n,...i)}return n}function s$(e,t,n,i={}){e=Gt(e),e._checkNotDeleted("useEmulator");const o=`${t}:${n}`,l=e._repoInternal;if(e._instanceStarted){if(o===e._repoInternal.repoInfo_.host&&po(i,l.repoInfo_.emulatorOptions))return;mi("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let u;if(l.repoInfo_.nodeAdmin)i.mockUserToken&&mi('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new wf(wf.OWNER);else if(i.mockUserToken){const f=typeof i.mockUserToken=="string"?i.mockUserToken:QL(i.mockUserToken,e.app.options.projectId);u=new wf(f)}Qa(t)&&(HC(t),FC("Database",!0)),JU(l,o,i,u)}/**
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
 */function o$(e){Qj(Za),Nr(new gr("database",(t,{instanceIdentifier:n})=>{const i=t.getProvider("app").getImmediate(),o=t.getProvider("auth-internal"),l=t.getProvider("app-check-internal");return e$(i,o,l,n)},"PUBLIC").setMultipleInstances(!0)),Qn(_E,bE,e),Qn(_E,bE,"esm2020")}di.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)};di.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};o$();var qs={},Xg={},Zg={},JE;function L_(){return JE||(JE=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.getBookableStatus=e.isWaitlistFull=e.isFree=e.WAITLIST_MAX=void 0,e.WAITLIST_MAX=10;const t=o=>o.occupancy<o.max_occupancy;e.isFree=t;const n=o=>o.waiting_count>=e.WAITLIST_MAX;e.isWaitlistFull=n;const i=o=>(0,e.isFree)(o)?"free":(0,e.isWaitlistFull)(o)?"full":"waitlist";e.getBookableStatus=i})(Zg)),Zg}var Vs={},ex;function P_(){return ex||(ex=1,Object.defineProperty(Vs,"__esModule",{value:!0}),Vs.DEFAULT_STUDIO_ID=Vs.STUDIOS=void 0,Vs.STUDIOS={7248695:{location:"New York",timezone:"America/New_York"},7248663:{location:"London",timezone:"Europe/London"}},Vs.DEFAULT_STUDIO_ID="7248695"),Vs}var tx;function a$(){return tx||(tx=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.getChangeType=e.classifyMatch=e.matchesAlert=void 0;const t=L_(),n=P_(),i=(g,y)=>!(y.maxStatus==="free"&&!(0,t.isFree)(g)||y.maxStatus==="waitlist"&&(0,t.isWaitlistFull)(g)),o=(g,y)=>{if(!y.disciplines)return!0;const _=String(g.offering_type.category.id);return y.disciplines.some(S=>String(S)===_)},l=(g,y)=>y.instructors?g.instructors.some(_=>y.instructors.indexOf(String(_.id))!==-1):!0,u=(g,y)=>{if(!y.timeRanges)return!0;const _=n.STUDIOS[y.studioId]?.timezone;if(!_)return!1;const S=new Date(g.starts_at),w=new Date(S.toLocaleString("en-US",{timeZone:"UTC"})),O=new Date(S.toLocaleString("en-US",{timeZone:_})),T=w.getTime()-O.getTime();S.setTime(S.getTime()-T);const A=y.timeRanges[S.getDay()];if(!A)return!1;const k=S.getHours()*60+S.getMinutes();return A.startMin<=k&&A.endMin>=k},f=(g,y)=>i(g,y)&&o(g,y)&&l(g,y)&&u(g,y);e.matchesAlert=f;const h=(g,y)=>{const _=[];return i(g,y)||_.push("status"),o(g,y)||_.push("discipline"),l(g,y)||_.push("instructor"),u(g,y)||_.push("time"),_.length===0?{type:"match"}:_.length===1?{type:"near-miss",reason:_[0]}:{type:"skipped"}};e.classifyMatch=h;const p=(g,y,_)=>(0,e.matchesAlert)(_,g)?g.maxStatus==="free"&&!(0,t.isFree)(y)&&(0,t.isFree)(_)?"became_free":g.maxStatus==="waitlist"&&(0,t.isWaitlistFull)(y)&&!(0,t.isWaitlistFull)(_)?"waitlist_opened":null:null;e.getChangeType=p})(Xg)),Xg}var Gs={},nx;function l$(){if(nx)return Gs;nx=1,Object.defineProperty(Gs,"__esModule",{value:!0}),Gs.classifySnapshotMatch=Gs.buildSnapshot=void 0;const e=L_(),t=P_(),n=(l,u=Date.now())=>({snapshotAt:u,starts_at:l.starts_at,instructors:l.instructors.map(({id:f,name:h})=>({id:String(f),name:h})),disciplineId:String(l.offering_type.category.id),occupancy:l.occupancy,maxOccupancy:l.max_occupancy,waitingCount:l.waiting_count,status:(0,e.getBookableStatus)(l),name:l.name});Gs.buildSnapshot=n;const i=(l,u)=>{if(!u.timeRanges)return!0;const f=t.STUDIOS[u.studioId]?.timezone;if(!f)return!1;const h=new Date(l.starts_at),p=new Date(h.toLocaleString("en-US",{timeZone:"UTC"})),g=new Date(h.toLocaleString("en-US",{timeZone:f})),y=p.getTime()-g.getTime();h.setTime(h.getTime()-y);const _=u.timeRanges[h.getDay()];if(!_)return!1;const S=h.getHours()*60+h.getMinutes();return _.startMin<=S&&_.endMin>=S},o=(l,u)=>{const f=[];return(u.maxStatus==="free"&&l.status!=="free"||u.maxStatus==="waitlist"&&l.status==="full")&&f.push("status"),u.disciplines&&u.disciplines.map(String).indexOf(l.disciplineId)===-1&&f.push("discipline"),u.instructors&&!l.instructors.some(p=>u.instructors.indexOf(p.id)!==-1)&&f.push("instructor"),i(l,u)||f.push("time"),f.length===0?{type:"match"}:f.length===1?{type:"near-miss",reason:f[0]}:{type:"skipped"}};return Gs.classifySnapshotMatch=o,Gs}var Jg={},rx;function c$(){return rx||(rx=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.fetchAllPelotonPages=e.rebasePelotonUrl=e.buildEventsUrl=e.getPelotonHeaders=e.PELOTON_CORS_PROXY=e.PELOTON_API_BASE=void 0,e.PELOTON_API_BASE="https://schedule.studio.onepeloton.com/api/v2",e.PELOTON_CORS_PROXY="https://cors.abbondanzo.workers.dev";const t=l=>({"Teamup-Request-Mode":"customer","Teamup-Provider-ID":l});e.getPelotonHeaders=t;const n=l=>{const{localStartsAtGte:u=new Date,localStartsAtLte:f,fields:h,expand:p,corsProxy:g=!1}=l,y=g?`${e.PELOTON_CORS_PROXY}/${e.PELOTON_API_BASE}`:e.PELOTON_API_BASE,_=new URLSearchParams({local_starts_at_gte:u.toISOString().replace("Z",""),page_size:"500",sort:"start"});return h&&h.length>0&&_.set("fields",h.join(",")),p&&p.length>0&&_.set("expand",p.join(",")),f&&_.set("local_starts_at_lte",f.toISOString().replace("Z","")),`${y}/events?${_}`};e.buildEventsUrl=n;const i=(l,u=!1)=>{const{search:f}=new URL(l);return`${u?`${e.PELOTON_CORS_PROXY}/${e.PELOTON_API_BASE}`:e.PELOTON_API_BASE}/events${f}`};e.rebasePelotonUrl=i;const o=async(l,u,f=!1)=>{const h=await u(l);if(!h.next)return h.results;const p=[...h.results];let g=(0,e.rebasePelotonUrl)(h.next,f);for(;g;){const y=await u(g);p.push(...y.results),g=y.next?(0,e.rebasePelotonUrl)(y.next,f):null}return p};e.fetchAllPelotonPages=o})(Jg)),Jg}var ey={},ix;function u$(){return ix||(ix=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isBookableStatus=e.BOOKABLE_STATUS_KEYS=void 0,e.BOOKABLE_STATUS_KEYS=["free","waitlist","full"];const t=n=>e.BOOKABLE_STATUS_KEYS.indexOf(n)!==-1;e.isBookableStatus=t})(ey)),ey}var ty={},sx;function d$(){return sx||(sx=1,Object.defineProperty(ty,"__esModule",{value:!0})),ty}var dc={},ox;function f$(){return ox||(ox=1,Object.defineProperty(dc,"__esModule",{value:!0}),dc.PATHS=void 0,dc.PATHS={alerts:e=>`alerts/${e}`,alert:(e,t)=>`alerts/${e}/${t}`,alertPreferences:e=>`alertPreferences/${e}`,messagingTokens:e=>`messagingTokens/${e}`,messagingToken:(e,t)=>`messagingTokens/${e}/${t}`,classHistory:e=>`classHistory/${e}`,classSnapshot:(e,t)=>`classHistory/${e}/${t}`}),dc}var Ys={},ax;function h$(){if(ax)return Ys;ax=1,Object.defineProperty(Ys,"__esModule",{value:!0}),Ys.isNotEmpty=Ys.isEmpty=void 0;const e=n=>n==null;Ys.isEmpty=e;const t=n=>n!=null;return Ys.isNotEmpty=t,Ys}var ny={},lx;function p$(){return lx||(lx=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isAllDay=e.DEFAULT_TIME_RANGE=e.SPECIFIC_DEFAULT_TIME_RANGE=e.ALL_DAY_TIME_RANGE=void 0,e.ALL_DAY_TIME_RANGE={startMin:0,endMin:1440},e.SPECIFIC_DEFAULT_TIME_RANGE={startMin:420,endMin:1140},e.DEFAULT_TIME_RANGE=e.ALL_DAY_TIME_RANGE;const t=n=>n.startMin===e.ALL_DAY_TIME_RANGE.startMin&&n.endMin===e.ALL_DAY_TIME_RANGE.endMin;e.isAllDay=t})(ny)),ny}var cx;function m$(){return cx||(cx=1,(function(e){var t=qs&&qs.__createBinding||(Object.create?(function(i,o,l,u){u===void 0&&(u=l);var f=Object.getOwnPropertyDescriptor(o,l);(!f||("get"in f?!o.__esModule:f.writable||f.configurable))&&(f={enumerable:!0,get:function(){return o[l]}}),Object.defineProperty(i,u,f)}):(function(i,o,l,u){u===void 0&&(u=l),i[u]=o[l]})),n=qs&&qs.__exportStar||function(i,o){for(var l in i)l!=="default"&&!Object.prototype.hasOwnProperty.call(o,l)&&t(o,i,l)};Object.defineProperty(e,"__esModule",{value:!0}),n(a$(),e),n(l$(),e),n(c$(),e),n(u$(),e),n(d$(),e),n(L_(),e),n(f$(),e),n(h$(),e),n(P_(),e),n(p$(),e)})(qs)),qs}var ke=m$();const wn=Ph(()=>i$(Ac)),JA=async(e,t)=>{const n=wn;if(!n)throw new Error("No Firebase database connection to use");const i=tr(n,ke.PATHS.messagingToken(e,t));await KA(i)},ux=async(e,t)=>{const n=wn;if(!n)throw new Error("No Firebase database connection to use");const i=tr(n,ke.PATHS.messagingToken(e,t)),o={timestamp:new Date().getTime(),userAgent:navigator.userAgent};await k_(i,o)},g$=({children:e})=>{const[t,n]=C.useState();C.useEffect(()=>{if(wa){const u=Y6(wa,f=>{console.log("[MessagingProvider] Received message ",f);const h=f.notification?.title??f.data?.title,p=f.notification?.body??f.data?.body;h&&new Notification(h,{body:p})});return()=>{u()}}return()=>{}},[]);const i=ct(mu);C.useEffect(()=>{wa&&i&&rE().then(u=>(n(u),ux(i,u))).catch(u=>{Or(u)})},[i]);const o=C.useCallback(()=>{wa&&i&&rE().then(u=>(n(u),ux(i,u))).catch(u=>{Or(u)})},[i]);C.useEffect(()=>{const u=()=>{document.visibilityState==="visible"&&o()};return document.addEventListener("visibilitychange",u),()=>document.removeEventListener("visibilitychange",u)},[o]);const l=C.useCallback(async()=>{t&&i&&(await JA(i,t),n(void 0))},[t,i]);return v.jsx(gu.Provider,{value:{token:t,refreshToken:o,deleteToken:l},children:e})},eI=60,j_=e=>e.session.state!=="fulfilled"?!1:e.session.data?.isAdmin===!0,rt={CLASS_LIST:"/class-list",ABOUT:"/about",SIGN_IN:"/sign-in",ALERTS:"/alerts",ALERTS_EDITOR:"/alerts/edit",ALERTS_SIMULATION:"/alerts/:alertId/test",STATS:"/stats"},y$=e=>`/alerts/${e}/test`,tI=({size:e=22})=>v.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[v.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M 7.556 3.681 C 8.185 3.199 8.927 2.837 9.796 2.612 C 9.786 2.524 9.781 2.435 9.781 2.345 C 9.781 1.089 10.8 0.072 12.055 0.072 C 13.311 0.072 14.328 1.089 14.328 2.345 C 14.328 2.435 14.323 2.524 14.313 2.612 C 15.181 2.837 15.925 3.199 16.553 3.681 C 17.662 4.533 18.304 5.677 18.683 6.817 C 19.062 7.948 19.198 9.126 19.264 10.119 C 19.29 10.523 19.308 10.91 19.321 11.252 L 19.331 11.482 C 19.349 11.893 19.368 12.199 19.398 12.425 C 19.62 14.086 19.895 15.252 20.289 16.183 C 20.673 17.094 21.187 17.828 21.952 18.592 C 22.277 18.917 22.374 19.406 22.198 19.831 C 22.023 20.256 21.609 20.532 21.148 20.532 L 14.025 20.532 C 14.218 20.867 14.328 21.255 14.328 21.668 C 14.328 22.925 13.311 23.943 12.055 23.943 C 10.8 23.943 9.781 22.925 9.781 21.668 C 9.781 21.255 9.892 20.867 10.086 20.532 L 2.961 20.532 C 2.502 20.532 2.087 20.256 1.911 19.831 C 1.735 19.406 1.832 18.917 2.157 18.592 C 2.923 17.826 3.437 17.098 3.819 16.19 C 4.213 15.262 4.488 14.099 4.711 12.425 C 4.742 12.199 4.76 11.893 4.777 11.482 L 4.787 11.252 C 4.802 10.91 4.818 10.523 4.844 10.119 C 4.911 9.126 5.048 7.948 5.424 6.817 C 5.805 5.677 6.447 4.533 7.556 3.681 Z M 5.312 18.259 C 5.537 17.889 5.736 17.497 5.914 17.075 C 6.421 15.879 6.73 14.485 6.965 12.727 C 7.011 12.384 7.032 11.98 7.049 11.581 L 7.06 11.337 C 7.074 10.996 7.089 10.644 7.113 10.272 C 7.175 9.347 7.296 8.394 7.582 7.536 C 7.865 6.686 8.292 5.982 8.941 5.484 C 9.582 4.992 10.546 4.618 12.055 4.618 C 13.564 4.618 14.527 4.992 15.167 5.484 C 15.816 5.982 16.245 6.686 16.528 7.536 C 16.814 8.394 16.934 9.347 16.997 10.272 C 17.021 10.644 17.036 10.996 17.05 11.337 L 17.061 11.581 C 17.077 11.98 17.098 12.384 17.144 12.727 C 17.377 14.475 17.688 15.867 18.194 17.066 C 18.373 17.491 18.573 17.884 18.799 18.259 L 5.312 18.259 Z",fill:"currentColor"}),v.jsx("path",{d:"M 15.285 7.952 L 16.425 5.973 C 16.754 5.392 16.56 4.649 15.98 4.318 C 15.402 3.986 14.657 4.18 14.326 4.761 L 13.179 6.741 C 10.743 5.973 8.016 6.97 6.686 9.274 C 5.838 10.74 5.736 12.426 6.25 13.905 L 8.359 10.243 C 8.359 10.243 8.359 10.243 8.359 10.243 C 8.841 9.403 9.63 8.802 10.568 8.551 C 11.506 8.296 12.482 8.427 13.323 8.917 C 15.056 9.918 15.655 12.146 14.652 13.877 C 13.648 15.611 11.428 16.21 9.689 15.206 L 10.9 13.109 C 11.479 13.44 12.222 13.247 12.555 12.666 C 12.886 12.087 12.69 11.345 12.111 11.013 C 11.532 10.68 10.788 10.877 10.457 11.454 L 6.602 18.144 C 6.269 18.725 6.464 19.466 7.044 19.8 C 7.624 20.13 8.367 19.935 8.699 19.355 L 9.846 17.377 C 12.281 18.144 15.009 17.149 16.338 14.842 C 17.666 12.543 17.165 9.685 15.285 7.952 Z",fill:"currentColor",style:{strokeWidth:"0.5px",stroke:"currentColor"}})]});function nI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rI=nI,iI=new Ro("auth","Firebase",nI());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah=new $v("@firebase/auth");function v$(e,...t){ah.logLevel<=lt.WARN&&ah.warn(`Auth (${Za}): ${e}`,...t)}function Ef(e,...t){ah.logLevel<=lt.ERROR&&ah.error(`Auth (${Za}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(e,...t){throw $_(e,...t)}function mr(e,...t){return $_(e,...t)}function U_(e,t,n){const i={...rI(),[t]:n};return new Ro("auth","Firebase",i).create(t,{appName:e.name})}function fi(e){return U_(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _$(e,t,n){const i=n;if(!(t instanceof i))throw i.name!==t.constructor.name&&Jn(e,"argument-error"),U_(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function $_(e,...t){if(typeof e!="string"){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return iI.create(e,...t)}function Oe(e,t,...n){if(!e)throw $_(t,...n)}function li(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ef(t),new Error(t)}function gi(e,t){e||li(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(){return typeof self<"u"&&self.location?.href||""}function b$(){return dx()==="http:"||dx()==="https:"}function dx(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S$(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(b$()||JL()||"connection"in navigator)?navigator.onLine:!0}function w$(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(t,n){this.shortDelay=t,this.longDelay=n,gi(n>t,"Short delay should be less than long delay!"),this.isMobile=Uv()||qC()}get(){return S$()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(e,t){gi(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{static initialize(t,n,i){this.fetchImpl=t,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;li("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;li("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;li("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E$={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x$=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],T$=new Eu(3e4,6e4);function ys(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function vs(e,t,n,i,o={}){return oI(e,o,async()=>{let l={},u={};i&&(t==="GET"?u=i:l={body:JSON.stringify(i)});const f=Ka({key:e.config.apiKey,...u}).slice(1),h=await e._getAdditionalHeaders();h["Content-Type"]="application/json",e.languageCode&&(h["X-Firebase-Locale"]=e.languageCode);const p={method:t,headers:h,...l};return ZL()||(p.referrerPolicy="no-referrer"),e.emulatorConfig&&Qa(e.emulatorConfig.host)&&(p.credentials="include"),sI.fetch()(await aI(e,e.config.apiHost,n,f),p)})}async function oI(e,t,n){e._canInitEmulator=!1;const i={...E$,...t};try{const o=new R$(e),l=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const u=await l.json();if("needConfirmation"in u)throw Jd(e,"account-exists-with-different-credential",u);if(l.ok&&!("errorMessage"in u))return u;{const f=l.ok?u.errorMessage:u.error.message,[h,p]=f.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Jd(e,"credential-already-in-use",u);if(h==="EMAIL_EXISTS")throw Jd(e,"email-already-in-use",u);if(h==="USER_DISABLED")throw Jd(e,"user-disabled",u);const g=i[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw U_(e,g,p);Jn(e,g)}}catch(o){if(o instanceof _i)throw o;Jn(e,"network-request-failed",{message:String(o)})}}async function xu(e,t,n,i,o={}){const l=await vs(e,t,n,i,o);return"mfaPendingCredential"in l&&Jn(e,"multi-factor-auth-required",{_serverResponse:l}),l}async function aI(e,t,n,i){const o=`${t}${n}?${i}`,l=e,u=l.config.emulator?z_(e.config,o):`${e.config.apiScheme}://${o}`;return x$.includes(n)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(u).toString():u}function C$(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class R${clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(mr(this.auth,"network-request-failed")),T$.get())})}}function Jd(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const o=mr(e,t,i);return o.customData._tokenResponse=n,o}function fx(e){return e!==void 0&&e.enterprise!==void 0}class A${constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return C$(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function I$(e,t){return vs(e,"GET","/v2/recaptchaConfig",ys(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D$(e,t){return vs(e,"POST","/v1/accounts:delete",t)}async function lh(e,t){return vs(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function O$(e,t=!1){const n=Gt(e),i=await n.getIdToken(t),o=B_(i);Oe(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,u=l?.sign_in_provider;return{claims:o,token:i,authTime:Pc(ry(o.auth_time)),issuedAtTime:Pc(ry(o.iat)),expirationTime:Pc(ry(o.exp)),signInProvider:u||null,signInSecondFactor:l?.sign_in_second_factor||null}}function ry(e){return Number(e)*1e3}function B_(e){const[t,n,i]=e.split(".");if(t===void 0||n===void 0||i===void 0)return Ef("JWT malformed, contained fewer than 3 sections"),null;try{const o=$f(n);return o?JSON.parse(o):(Ef("Failed to decode base64 JWT payload"),null)}catch(o){return Ef("Caught error parsing JWT payload as JSON",o?.toString()),null}}function hx(e){const t=B_(e);return Oe(t,"internal-error"),Oe(typeof t.exp<"u","internal-error"),Oe(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function su(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof _i&&N$(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function N$({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M${constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pc(this.lastLoginAt),this.creationTime=Pc(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ch(e){const t=e.auth,n=await e.getIdToken(),i=await su(e,lh(t,{idToken:n}));Oe(i?.users.length,t,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const l=o.providerUserInfo?.length?lI(o.providerUserInfo):[],u=L$(e.providerData,l),f=e.isAnonymous,h=!(e.email&&o.passwordHash)&&!u?.length,p=f?h:!1,g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new rv(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(e,g)}async function k$(e){const t=Gt(e);await ch(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function L$(e,t){return[...e.filter(i=>!t.some(o=>o.providerId===i.providerId)),...t]}function lI(e){return e.map(({providerId:t,...n})=>({providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P$(e,t){const n=await oI(e,{},async()=>{const i=Ka({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:l}=e.config,u=await aI(e,o,"/v1/token",`key=${l}`),f=await e._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:f,body:i};return e.emulatorConfig&&Qa(e.emulatorConfig.host)&&(h.credentials="include"),sI.fetch()(u,h)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function j$(e,t){return vs(e,"POST","/v2/accounts:revokeToken",ys(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Oe(t.idToken,"internal-error"),Oe(typeof t.idToken<"u","internal-error"),Oe(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):hx(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){Oe(t.length!==0,"internal-error");const n=hx(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Oe(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:i,refreshToken:o,expiresIn:l}=await P$(t,n);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(t,n,i){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(t,n){const{refreshToken:i,accessToken:o,expirationTime:l}=n,u=new Aa;return i&&(Oe(typeof i=="string","internal-error",{appName:t}),u.refreshToken=i),o&&(Oe(typeof o=="string","internal-error",{appName:t}),u.accessToken=o),l&&(Oe(typeof l=="number","internal-error",{appName:t}),u.expirationTime=l),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Aa,this.toJSON())}_performRefresh(){return li("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(e,t){Oe(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class ur{constructor({uid:t,auth:n,stsTokenManager:i,...o}){this.providerId="firebase",this.proactiveRefresh=new M$(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new rv(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await su(this,this.stsTokenManager.getToken(this.auth,t));return Oe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return O$(this,t)}reload(){return k$(this)}_assign(t){this!==t&&(Oe(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>({...n})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new ur({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(t){Oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),n&&await ch(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Mn(this.auth.app))return Promise.reject(fi(this.auth));const t=await this.getIdToken();return await su(this,D$(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){const i=n.displayName??void 0,o=n.email??void 0,l=n.phoneNumber??void 0,u=n.photoURL??void 0,f=n.tenantId??void 0,h=n._redirectEventId??void 0,p=n.createdAt??void 0,g=n.lastLoginAt??void 0,{uid:y,emailVerified:_,isAnonymous:S,providerData:w,stsTokenManager:O}=n;Oe(y&&O,t,"internal-error");const T=Aa.fromJSON(this.name,O);Oe(typeof y=="string",t,"internal-error"),Yi(i,t.name),Yi(o,t.name),Oe(typeof _=="boolean",t,"internal-error"),Oe(typeof S=="boolean",t,"internal-error"),Yi(l,t.name),Yi(u,t.name),Yi(f,t.name),Yi(h,t.name),Yi(p,t.name),Yi(g,t.name);const A=new ur({uid:y,auth:t,email:o,emailVerified:_,displayName:i,isAnonymous:S,photoURL:u,phoneNumber:l,tenantId:f,stsTokenManager:T,createdAt:p,lastLoginAt:g});return w&&Array.isArray(w)&&(A.providerData=w.map(k=>({...k}))),h&&(A._redirectEventId=h),A}static async _fromIdTokenResponse(t,n,i=!1){const o=new Aa;o.updateFromServerResponse(n);const l=new ur({uid:n.localId,auth:t,stsTokenManager:o,isAnonymous:i});return await ch(l),l}static async _fromGetAccountInfoResponse(t,n,i){const o=n.users[0];Oe(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?lI(o.providerUserInfo):[],u=!(o.email&&o.passwordHash)&&!l?.length,f=new Aa;f.updateFromIdToken(i);const h=new ur({uid:o.localId,auth:t,stsTokenManager:f,isAnonymous:u}),p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new rv(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!l?.length};return Object.assign(h,p),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const px=new Map;function ci(e){gi(e instanceof Function,"Expected a class definition");let t=px.get(e);return t?(gi(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,px.set(e,t),t)}/**
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
 */class cI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}cI.type="NONE";const mx=cI;/**
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
 */function xf(e,t,n){return`firebase:${e}:${t}:${n}`}class Ia{constructor(t,n,i){this.persistence=t,this.auth=n,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=xf(this.userKey,o.apiKey,l),this.fullPersistenceKey=xf("persistence",o.apiKey,l),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await lh(this.auth,{idToken:t}).catch(()=>{});return n?ur._fromGetAccountInfoResponse(this.auth,n,t):null}return ur._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,i="authUser"){if(!n.length)return new Ia(ci(mx),t,i);const o=(await Promise.all(n.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let l=o[0]||ci(mx);const u=xf(i,t.config.apiKey,t.name);let f=null;for(const p of n)try{const g=await p._get(u);if(g){let y;if(typeof g=="string"){const _=await lh(t,{idToken:g}).catch(()=>{});if(!_)break;y=await ur._fromGetAccountInfoResponse(t,_,g)}else y=ur._fromJSON(t,g);p!==l&&(f=y),l=p;break}}catch{}const h=o.filter(p=>p._shouldAllowMigration);return!l._shouldAllowMigration||!h.length?new Ia(l,t,i):(l=h[0],f&&await l._set(u,f.toJSON()),await Promise.all(n.map(async p=>{if(p!==l)try{await p._remove(u)}catch{}})),new Ia(l,t,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gx(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(hI(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(uI(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(mI(t))return"Blackberry";if(gI(t))return"Webos";if(dI(t))return"Safari";if((t.includes("chrome/")||fI(t))&&!t.includes("edge/"))return"Chrome";if(pI(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=e.match(n);if(i?.length===2)return i[1]}return"Other"}function uI(e=fn()){return/firefox\//i.test(e)}function dI(e=fn()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function fI(e=fn()){return/crios\//i.test(e)}function hI(e=fn()){return/iemobile/i.test(e)}function pI(e=fn()){return/android/i.test(e)}function mI(e=fn()){return/blackberry/i.test(e)}function gI(e=fn()){return/webos/i.test(e)}function H_(e=fn()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function U$(e=fn()){return H_(e)&&!!window.navigator?.standalone}function $$(){return eP()&&document.documentMode===10}function yI(e=fn()){return H_(e)||pI(e)||gI(e)||mI(e)||/windows phone/i.test(e)||hI(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vI(e,t=[]){let n;switch(e){case"Browser":n=gx(fn());break;case"Worker":n=`${gx(fn())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Za}/${i}`}/**
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
 */class z${constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const i=l=>new Promise((u,f)=>{try{const h=t(l);u(h)}catch(h){f(h)}});i.onAbort=n,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const i of this.queue)await i(t),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
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
 */async function B$(e,t={}){return vs(e,"GET","/v2/passwordPolicy",ys(e,t))}/**
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
 */const H$=6;class F${constructor(t){const n=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??H$,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=t.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,n),this.validatePasswordCharacterOptions(t,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(t,n){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=t.length>=i),o&&(n.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let o=0;o<t.length;o++)i=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(t,n,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q${constructor(t,n,i,o){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yx(this),this.idTokenSubscription=new yx(this),this.beforeStateQueue=new z$(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=iI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=ci(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Ia.create(this,t),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await lh(this,{idToken:t}),i=await ur._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){if(Mn(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(u,u))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=this.redirectUser?._redirectEventId,u=i?._redirectEventId,f=await this.tryRedirectSignIn(t);(!l||l===u)&&f?.user&&(i=f.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(l){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await ch(t)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=w$()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Mn(this.app))return Promise.reject(fi(this));const n=t?Gt(t):null;return n&&Oe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&Oe(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Mn(this.app)?Promise.reject(fi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Mn(this.app)?Promise.reject(fi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ci(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await B$(this),n=new F$(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Ro("auth","Firebase",t())}onAuthStateChanged(t,n,i){return this.registerStateListener(this.authStateSubscription,t,n,i)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,i){return this.registerStateListener(this.idTokenSubscription,t,n,i)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const i=this.onAuthStateChanged(()=>{i(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await j$(this,i)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(t,n){const i=await this.getOrInitRedirectPersistenceManager(n);return t===null?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&ci(t)||this._popupRedirectResolver;Oe(n,this,"argument-error"),this.redirectPersistenceManager=await Ia.create(this,[ci(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===t?this._currentUser:this.redirectUser?._redirectEventId===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=this.currentUser?.uid??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,i,o){if(this._deleted)return()=>{};const l=typeof n=="function"?n:n.next.bind(n);let u=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(Oe(f,this,"internal-error"),f.then(()=>{u||l(this.currentUser)}),typeof n=="function"){const h=t.addObserver(n,i,o);return()=>{u=!0,h()}}else{const h=t.addObserver(n);return()=>{u=!0,h()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=vI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){if(Mn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return t?.error&&v$(`Error while retrieving App Check token: ${t.error}`),t?.token}}function _s(e){return Gt(e)}class yx{constructor(t){this.auth=t,this.observer=null,this.addObserver=cP(n=>this.observer=n)}get next(){return Oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function V$(e){Jh=e}function _I(e){return Jh.loadJS(e)}function G$(){return Jh.recaptchaEnterpriseScript}function Y$(){return Jh.gapiScript}function W$(e){return`__${e}${Math.floor(Math.random()*1e6)}`}class Q${constructor(){this.enterprise=new K$}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class K${ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const X$="recaptcha-enterprise",bI="NO_RECAPTCHA";class Z${constructor(t){this.type=X$,this.auth=_s(t)}async verify(t="verify",n=!1){async function i(l){if(!n){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(u,f)=>{I$(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const p=new A$(h);return l.tenantId==null?l._agentRecaptchaConfig=p:l._tenantRecaptchaConfigs[l.tenantId]=p,u(p.siteKey)}}).catch(h=>{f(h)})})}function o(l,u,f){const h=window.grecaptcha;fx(h)?h.enterprise.ready(()=>{h.enterprise.execute(l,{action:t}).then(p=>{u(p)}).catch(()=>{u(bI)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Q$().execute("siteKey",{action:"verify"}):new Promise((l,u)=>{i(this.auth).then(f=>{if(!n&&fx(window.grecaptcha))o(f,l,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let h=G$();h.length!==0&&(h+=f),_I(h).then(()=>{o(f,l,u)}).catch(p=>{u(p)})}}).catch(f=>{u(f)})})}}async function vx(e,t,n,i=!1,o=!1){const l=new Z$(e);let u;if(o)u=bI;else try{u=await l.verify(n)}catch{u=await l.verify(n,!0)}const f={...t};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const h=f.phoneEnrollmentInfo.phoneNumber,p=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:h,recaptchaToken:p,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const h=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:h,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return i?Object.assign(f,{captchaResp:u}):Object.assign(f,{captchaResponse:u}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function iv(e,t,n,i,o){if(e._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await vx(e,t,n,n==="getOobCode");return i(e,l)}else return i(e,t).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await vx(e,t,n,n==="getOobCode");return i(e,u)}else return Promise.reject(l)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SI(e,t){const n=Xa(e,"auth");if(n.isInitialized()){const o=n.getImmediate(),l=n.getOptions();if(po(l,t??{}))return o;Jn(o,"already-initialized")}return n.initialize({options:t})}function J$(e,t){const n=t?.persistence||[],i=(Array.isArray(n)?n:[n]).map(ci);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,t?.popupRedirectResolver)}function ez(e,t,n){const i=_s(e);Oe(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const o=!1,l=wI(t),{host:u,port:f}=tz(t),h=f===null?"":`:${f}`,p={url:`${l}//${u}${h}/`},g=Object.freeze({host:u,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){Oe(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),Oe(po(p,i.config.emulator)&&po(g,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=p,i.emulatorConfig=g,i.settings.appVerificationDisabledForTesting=!0,Qa(u)?(HC(`${l}//${u}${h}`),FC("Auth",!0)):nz()}function wI(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function tz(e){const t=wI(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:_x(i.substr(l.length+1))}}else{const[l,u]=i.split(":");return{host:l,port:_x(u)}}}function _x(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function nz(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return li("not implemented")}_getIdTokenResponse(t){return li("not implemented")}_linkToIdToken(t,n){return li("not implemented")}_getReauthenticationResolver(t){return li("not implemented")}}async function rz(e,t){return vs(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iz(e,t){return xu(e,"POST","/v1/accounts:signInWithPassword",ys(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sz(e,t){return xu(e,"POST","/v1/accounts:signInWithEmailLink",ys(e,t))}async function oz(e,t){return xu(e,"POST","/v1/accounts:signInWithEmailLink",ys(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou extends F_{constructor(t,n,i,o=null){super("password",i),this._email=t,this._password=n,this._tenantId=o}static _fromEmailAndPassword(t,n){return new ou(t,n,"password")}static _fromEmailAndCode(t,n,i=null){return new ou(t,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return iv(t,n,"signInWithPassword",iz);case"emailLink":return sz(t,{email:this._email,oobCode:this._password});default:Jn(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return iv(t,i,"signUpPassword",rz);case"emailLink":return oz(t,{idToken:n,email:this._email,oobCode:this._password});default:Jn(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Da(e,t){return xu(e,"POST","/v1/accounts:signInWithIdp",ys(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const az="http://localhost";class wo extends F_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new wo(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Jn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:i,signInMethod:o,...l}=n;if(!i||!o)return null;const u=new wo(i,o);return u.idToken=l.idToken||void 0,u.accessToken=l.accessToken||void 0,u.secret=l.secret,u.nonce=l.nonce,u.pendingToken=l.pendingToken||null,u}_getIdTokenResponse(t){const n=this.buildRequest();return Da(t,n)}_linkToIdToken(t,n){const i=this.buildRequest();return i.idToken=n,Da(t,i)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Da(t,n)}buildRequest(){const t={requestUri:az,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Ka(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lz(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function cz(e){const t=bc(Sc(e)).link,n=t?bc(Sc(t)).deep_link_id:null,i=bc(Sc(e)).deep_link_id;return(i?bc(Sc(i)).link:null)||i||n||t||e}class q_{constructor(t){const n=bc(Sc(t)),i=n.apiKey??null,o=n.oobCode??null,l=lz(n.mode??null);Oe(i&&o&&l,"argument-error"),this.apiKey=i,this.operation=l,this.code=o,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(t){const n=cz(t);try{return new q_(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(){this.providerId=il.PROVIDER_ID}static credential(t,n){return ou._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const i=q_.parseLink(n);return Oe(i,"argument-error"),ou._fromEmailAndCode(t,i.code,i.tenantId)}}il.PROVIDER_ID="password";il.EMAIL_PASSWORD_SIGN_IN_METHOD="password";il.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Tu extends V_{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji extends Tu{constructor(){super("facebook.com")}static credential(t){return wo._fromParams({providerId:Ji.PROVIDER_ID,signInMethod:Ji.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ji.credentialFromTaggedObject(t)}static credentialFromError(t){return Ji.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ji.credential(t.oauthAccessToken)}catch{return null}}}Ji.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ji.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends Tu{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return wo._fromParams({providerId:si.PROVIDER_ID,signInMethod:si.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return si.credentialFromTaggedObject(t)}static credentialFromError(t){return si.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:i}=t;if(!n&&!i)return null;try{return si.credential(n,i)}catch{return null}}}si.GOOGLE_SIGN_IN_METHOD="google.com";si.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es extends Tu{constructor(){super("github.com")}static credential(t){return wo._fromParams({providerId:es.PROVIDER_ID,signInMethod:es.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return es.credentialFromTaggedObject(t)}static credentialFromError(t){return es.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return es.credential(t.oauthAccessToken)}catch{return null}}}es.GITHUB_SIGN_IN_METHOD="github.com";es.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts extends Tu{constructor(){super("twitter.com")}static credential(t,n){return wo._fromParams({providerId:ts.PROVIDER_ID,signInMethod:ts.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return ts.credentialFromTaggedObject(t)}static credentialFromError(t){return ts.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=t;if(!n||!i)return null;try{return ts.credential(n,i)}catch{return null}}}ts.TWITTER_SIGN_IN_METHOD="twitter.com";ts.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uz(e,t){return xu(e,"POST","/v1/accounts:signUp",ys(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,i,o=!1){const l=await ur._fromIdTokenResponse(t,i,o),u=bx(i);return new Eo({user:l,providerId:u,_tokenResponse:i,operationType:n})}static async _forOperation(t,n,i){await t._updateTokensIfNecessary(i,!0);const o=bx(i);return new Eo({user:t,providerId:o,_tokenResponse:i,operationType:n})}}function bx(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh extends _i{constructor(t,n,i,o){super(n.code,n.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,uh.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(t,n,i,o){return new uh(t,n,i,o)}}function EI(e,t,n,i){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?uh._fromErrorAndOperation(e,l,t,i):l})}async function dz(e,t,n=!1){const i=await su(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Eo._forOperation(e,"link",i)}/**
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
 */async function fz(e,t,n=!1){const{auth:i}=e;if(Mn(i.app))return Promise.reject(fi(i));const o="reauthenticate";try{const l=await su(e,EI(i,o,t,e),n);Oe(l.idToken,i,"internal-error");const u=B_(l.idToken);Oe(u,i,"internal-error");const{sub:f}=u;return Oe(e.uid===f,i,"user-mismatch"),Eo._forOperation(e,o,l)}catch(l){throw l?.code==="auth/user-not-found"&&Jn(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xI(e,t,n=!1){if(Mn(e.app))return Promise.reject(fi(e));const i="signIn",o=await EI(e,i,t),l=await Eo._fromIdTokenResponse(e,i,o);return n||await e._updateCurrentUser(l.user),l}async function hz(e,t){return xI(_s(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TI(e){const t=_s(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function pz(e,t,n){if(Mn(e.app))return Promise.reject(fi(e));const i=_s(e),u=await iv(i,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",uz).catch(h=>{throw h.code==="auth/password-does-not-meet-requirements"&&TI(e),h}),f=await Eo._fromIdTokenResponse(i,"signIn",u);return await i._updateCurrentUser(f.user),f}function mz(e,t,n){return Mn(e.app)?Promise.reject(fi(e)):hz(Gt(e),il.credential(t,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&TI(e),i})}function gz(e,t,n,i){return Gt(e).onIdTokenChanged(t,n,i)}function yz(e,t,n){return Gt(e).beforeAuthStateChanged(t,n)}function vz(e,t,n,i){return Gt(e).onAuthStateChanged(t,n,i)}const dh="__sak";/**
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
 */class CI{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(dh,"1"),this.storage.removeItem(dh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _z=1e3,bz=10;class RI extends CI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=yI(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),o=this.localCache[n];i!==o&&t(n,o,i)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((u,f,h)=>{this.notifyListeners(u,h)});return}const i=t.key;n?this.detachListener():this.stopPolling();const o=()=>{const u=this.storage.getItem(i);!n&&this.localCache[i]===u||this.notifyListeners(i,u)},l=this.storage.getItem(i);$$()&&l!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,bz):o()}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const o of Array.from(i))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:i}),!0)})},_z)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}RI.type="LOCAL";const Sz=RI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI extends CI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}AI.type="SESSION";const II=AI;/**
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
 */function wz(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ep{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(o=>o.isListeningto(t));if(n)return n;const i=new ep(t);return this.receivers.push(i),i}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:i,eventType:o,data:l}=n.data,u=this.handlersMap[o];if(!u?.size)return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(u).map(async p=>p(n.origin,l)),h=await wz(f);n.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:h})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ep.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G_(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class Ez{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,u;return new Promise((f,h)=>{const p=G_("",20);o.port1.start();const g=setTimeout(()=>{h(new Error("unsupported_event"))},i);u={messageChannel:o,onMessage(y){const _=y;if(_.data.eventId===p)switch(_.data.status){case"ack":clearTimeout(g),l=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(_.data.response);break;default:clearTimeout(g),clearTimeout(l),h(new Error("invalid_response"));break}}},this.handlers.add(u),o.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:t,eventId:p,data:n},[o.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(){return window}function xz(e){Dr().location.href=e}/**
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
 */function DI(){return typeof Dr().WorkerGlobalScope<"u"&&typeof Dr().importScripts=="function"}async function Tz(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Cz(){return navigator?.serviceWorker?.controller||null}function Rz(){return DI()?self:null}/**
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
 */const OI="firebaseLocalStorageDb",Az=1,fh="firebaseLocalStorage",NI="fbase_key";class Cu{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function tp(e,t){return e.transaction([fh],t?"readwrite":"readonly").objectStore(fh)}function Iz(){const e=indexedDB.deleteDatabase(OI);return new Cu(e).toPromise()}function sv(){const e=indexedDB.open(OI,Az);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const i=e.result;try{i.createObjectStore(fh,{keyPath:NI})}catch(o){n(o)}}),e.addEventListener("success",async()=>{const i=e.result;i.objectStoreNames.contains(fh)?t(i):(i.close(),await Iz(),t(await sv()))})})}async function Sx(e,t,n){const i=tp(e,!0).put({[NI]:t,value:n});return new Cu(i).toPromise()}async function Dz(e,t){const n=tp(e,!1).get(t),i=await new Cu(n).toPromise();return i===void 0?null:i.value}function wx(e,t){const n=tp(e,!0).delete(t);return new Cu(n).toPromise()}const Oz=800,Nz=3;class MI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sv(),this.db)}async _withRetries(t){let n=0;for(;;)try{const i=await this._openDb();return await t(i)}catch(i){if(n++>Nz)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return DI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ep._getInstance(Rz()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Tz(),!this.activeServiceWorker)return;this.sender=new Ez(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&t[0]?.fulfilled&&t[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Cz()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await sv();return await Sx(t,dh,"1"),await wx(t,dh),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Sx(i,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(i=>Dz(i,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>wx(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const l=tp(o,!1).getAll();return new Cu(l).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(t.length!==0)for(const{fbase_key:o,value:l}of t)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const o of Array.from(i))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Oz)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}MI.type="LOCAL";const Mz=MI;new Eu(3e4,6e4);/**
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
 */function kI(e,t){return t?ci(t):(Oe(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Y_ extends F_{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Da(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Da(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Da(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function kz(e){return xI(e.auth,new Y_(e),e.bypassAuthState)}function Lz(e){const{auth:t,user:n}=e;return Oe(n,t,"internal-error"),fz(n,new Y_(e),e.bypassAuthState)}async function Pz(e){const{auth:t,user:n}=e;return Oe(n,t,"internal-error"),dz(n,new Y_(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(t,n,i,o,l=!1){this.auth=t,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:i,postBody:o,tenantId:l,error:u,type:f}=t;if(u){this.reject(u);return}const h={auth:this.auth,requestUri:n,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(h))}catch(p){this.reject(p)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return kz;case"linkViaPopup":case"linkViaRedirect":return Pz;case"reauthViaPopup":case"reauthViaRedirect":return Lz;default:Jn(this.auth,"internal-error")}}resolve(t){gi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){gi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jz=new Eu(2e3,1e4);async function Uz(e,t,n){if(Mn(e.app))return Promise.reject(mr(e,"operation-not-supported-in-this-environment"));const i=_s(e);_$(e,t,V_);const o=kI(i,n);return new so(i,"signInViaPopup",t,o).executeNotNull()}class so extends LI{constructor(t,n,i,o,l){super(t,n,o,l),this.provider=i,this.authWindow=null,this.pollId=null,so.currentPopupAction&&so.currentPopupAction.cancel(),so.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return Oe(t,this.auth,"internal-error"),t}async onExecution(){gi(this.filter.length===1,"Popup operations only handle one event");const t=G_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(mr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,so.currentPopupAction=null}pollUserCancellation(){const t=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,jz.get())};t()}}so.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $z="pendingRedirect",Tf=new Map;class zz extends LI{constructor(t,n,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let t=Tf.get(this.auth._key());if(!t){try{const i=await Bz(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(i)}catch(n){t=()=>Promise.reject(n)}Tf.set(this.auth._key(),t)}return this.bypassAuthState||Tf.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Bz(e,t){const n=qz(t),i=Fz(e);if(!await i._isAvailable())return!1;const o=await i._get(n)==="true";return await i._remove(n),o}function Hz(e,t){Tf.set(e._key(),t)}function Fz(e){return ci(e._redirectPersistence)}function qz(e){return xf($z,e.config.apiKey,e.name)}async function Vz(e,t,n=!1){if(Mn(e.app))return Promise.reject(fi(e));const i=_s(e),o=kI(i,t),u=await new zz(i,o,n).execute();return u&&!n&&(delete u.user._redirectEventId,await i._persistUserIfCurrent(u.user),await i._setRedirectUser(null,t)),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gz=600*1e3;class Yz{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(t,i)&&(n=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Wz(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){if(t.error&&!PI(t)){const i=t.error.code?.split("auth/")[1]||"internal-error";n.onError(mr(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const i=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Gz&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ex(t))}saveEventToCache(t){this.cachedEventUids.add(Ex(t)),this.lastProcessedEventTime=Date.now()}}function Ex(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function PI({type:e,error:t}){return e==="unknown"&&t?.code==="auth/no-auth-event"}function Wz(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return PI(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qz(e,t={}){return vs(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kz=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Xz=/^https?/;async function Zz(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Qz(e);for(const n of t)try{if(Jz(n))return}catch{}Jn(e,"unauthorized-domain")}function Jz(e){const t=nv(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const u=new URL(e);return u.hostname===""&&i===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&u.hostname===i}if(!Xz.test(n))return!1;if(Kz.test(e))return i===e;const o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const e8=new Eu(3e4,6e4);function xx(){const e=Dr().___jsl;if(e?.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function t8(e){return new Promise((t,n)=>{function i(){xx(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{xx(),n(mr(e,"network-request-failed"))},timeout:e8.get()})}if(Dr().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(Dr().gapi?.load)i();else{const o=W$("iframefcb");return Dr()[o]=()=>{gapi.load?i():n(mr(e,"network-request-failed"))},_I(`${Y$()}?onload=${o}`).catch(l=>n(l))}}).catch(t=>{throw Cf=null,t})}let Cf=null;function n8(e){return Cf=Cf||t8(e),Cf}/**
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
 */const r8=new Eu(5e3,15e3),i8="__/auth/iframe",s8="emulator/auth/iframe",o8={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},a8=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function l8(e){const t=e.config;Oe(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?z_(t,s8):`https://${e.config.authDomain}/${i8}`,i={apiKey:t.apiKey,appName:e.name,v:Za},o=a8.get(e.config.apiHost);o&&(i.eid=o);const l=e._getFrameworks();return l.length&&(i.fw=l.join(",")),`${n}?${Ka(i).slice(1)}`}async function c8(e){const t=await n8(e),n=Dr().gapi;return Oe(n,e,"internal-error"),t.open({where:document.body,url:l8(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:o8,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const u=mr(e,"network-request-failed"),f=Dr().setTimeout(()=>{l(u)},r8.get());function h(){Dr().clearTimeout(f),o(i)}i.ping(h).then(h,()=>{l(u)})}))}/**
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
 */const u8={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},d8=500,f8=600,h8="_blank",p8="http://localhost";class Tx{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function m8(e,t,n,i=d8,o=f8){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),u=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const h={...u8,width:i.toString(),height:o.toString(),top:l,left:u},p=fn().toLowerCase();n&&(f=fI(p)?h8:n),uI(p)&&(t=t||p8,h.scrollbars="yes");const g=Object.entries(h).reduce((_,[S,w])=>`${_}${S}=${w},`,"");if(U$(p)&&f!=="_self")return g8(t||"",f),new Tx(null);const y=window.open(t||"",f,g);Oe(y,e,"popup-blocked");try{y.focus()}catch{}return new Tx(y)}function g8(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const y8="__/auth/handler",v8="emulator/auth/handler",_8=encodeURIComponent("fac");async function Cx(e,t,n,i,o,l){Oe(e.config.authDomain,e,"auth-domain-config-required"),Oe(e.config.apiKey,e,"invalid-api-key");const u={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:Za,eventId:o};if(t instanceof V_){t.setDefaultLanguage(e.languageCode),u.providerId=t.providerId||"",Iy(t.getCustomParameters())||(u.customParameters=JSON.stringify(t.getCustomParameters()));for(const[g,y]of Object.entries({}))u[g]=y}if(t instanceof Tu){const g=t.getScopes().filter(y=>y!=="");g.length>0&&(u.scopes=g.join(","))}e.tenantId&&(u.tid=e.tenantId);const f=u;for(const g of Object.keys(f))f[g]===void 0&&delete f[g];const h=await e._getAppCheckToken(),p=h?`#${_8}=${encodeURIComponent(h)}`:"";return`${b8(e)}?${Ka(f).slice(1)}${p}`}function b8({config:e}){return e.emulator?z_(e,v8):`https://${e.authDomain}/${y8}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy="webStorageSupport";class S8{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=II,this._completeRedirectFn=Vz,this._overrideRedirectResult=Hz}async _openPopup(t,n,i,o){gi(this.eventManagers[t._key()]?.manager,"_initialize() not called before _openPopup()");const l=await Cx(t,n,i,nv(),o);return m8(t,l,G_())}async _openRedirect(t,n,i,o){await this._originValidation(t);const l=await Cx(t,n,i,nv(),o);return xz(l),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:o,promise:l}=this.eventManagers[n];return o?Promise.resolve(o):(gi(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(t);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(t){const n=await c8(t),i=new Yz(t);return n.register("authEvent",o=>(Oe(o?.authEvent,t,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=n,i}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(iy,{type:iy},o=>{const l=o?.[0]?.[iy];l!==void 0&&n(!!l),Jn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Zz(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return yI()||dI()||H_()}}const w8=S8;var Rx="@firebase/auth",Ax="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E8{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(i=>{t(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x8(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function T8(e){Nr(new gr("auth",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),l=t.getProvider("app-check-internal"),{apiKey:u,authDomain:f}=i.options;Oe(u&&!u.includes(":"),"invalid-api-key",{appName:i.name});const h={apiKey:u,authDomain:f,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vI(e)},p=new q$(i,o,l,h);return J$(p,n),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,i)=>{t.getProvider("auth-internal").initialize()})),Nr(new gr("auth-internal",t=>{const n=_s(t.getProvider("auth").getImmediate());return(i=>new E8(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qn(Rx,Ax,x8(e)),Qn(Rx,Ax,"esm2020")}/**
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
 */const C8=300,R8=BC("authIdTokenMaxAge")||C8;let Ix=null;const A8=e=>async t=>{const n=t&&await t.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>R8)return;const o=n?.token;Ix!==o&&(Ix=o,await fetch(e,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function I8(e=Bv()){const t=Xa(e,"auth");if(t.isInitialized())return t.getImmediate();const n=SI(e,{popupRedirectResolver:w8,persistence:[Mz,Sz,II]}),i=BC("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const u=A8(l.toString());yz(n,u,()=>u(n.currentUser)),gz(n,f=>u(f))}}const o=$C("auth");return o&&ez(n,`http://${o}`),n}function D8(){return document.getElementsByTagName("head")?.[0]??document}V$({loadJS(e){return new Promise((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=o=>{const l=mr("internal-error");l.customData=o,n(l)},i.type="text/javascript",i.charset="UTF-8",D8().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});T8("Browser");const O8=rI,oi=Ph(()=>{if(!Ac)throw new Error("Firebase app not initialized");try{return I8(Ac)}catch{return SI(Ac,{errorMap:O8})}}),N8=D(ms)`
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
`,M8=D.div`
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
  margin-bottom: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,k8=D.button`
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
    background-color: rgba(0, 0, 0, 0.04);
    color: ${e=>e.theme.colors.main};
  }
`,L8=()=>{const e=ct(el),{deleteToken:t}=C.useContext(gu),n=C.useCallback(async()=>{await t(),await oi?.signOut()},[t]);return e.state==="loading"?null:e.state!=="fulfilled"||!e.data?v.jsx(N8,{to:rt.SIGN_IN,children:"Sign in"}):v.jsxs(v.Fragment,{children:[v.jsx(M8,{children:e.data.displayName}),v.jsx(k8,{type:"button",onClick:n,children:"Sign out"})]})},P8="#181a2f",j8=280,U8=D.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  transition: opacity 0.2s;
  opacity: ${e=>e.$open?1:0};
  pointer-events: ${e=>e.$open?"all":"none"};
  z-index: 10;
`,$8=D.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: ${j8}px;
  max-width: 90vw;
  background-color: ${e=>e.theme.colors.mainSurface};
  z-index: 11;
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(${e=>e.$open?"0":"100%"});
  overflow: hidden;
`,z8=D.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: env(safe-area-inset-top, 0) 16px 0;
  height: calc(60px + env(safe-area-inset-top, 0px));
  background-color: ${P8};
  color: #fff;
  flex-shrink: 0;
`,B8=D(ms)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: inherit;
`,H8=D.span`
  font-size: 15px;
  font-weight: 600;
`,F8=D.button`
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
`,q8=D.nav`
  flex: 1;
  padding: 8px 0;
  overflow-y: auto;
`,ef=D(Tv)`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  font-size: 15px;
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
  text-decoration: none;
  transition: background-color 0.1s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }

  &.active {
    color: ${e=>e.theme.colors.accent};
    background-color: ${e=>e.theme.colors.accent}0a;
  }
`,V8=D.div`
  padding: 16px 20px;
  border-top: 1px solid ${e=>e.theme.borderColor};
  flex-shrink: 0;
`,G8=()=>v.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none","aria-hidden":"true",children:v.jsx("path",{d:"M4 4l10 10M14 4L4 14",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})}),Y8=({open:e,onClose:t})=>{const n=ct(j_);return v.jsxs(v.Fragment,{children:[v.jsx(U8,{$open:e,onClick:t}),v.jsxs($8,{$open:e,onClick:i=>i.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":"Navigation menu",children:[v.jsxs(z8,{children:[v.jsxs(B8,{to:rt.CLASS_LIST,onClick:t,children:[v.jsx(tI,{size:20}),v.jsx(H8,{children:"Peloton Alerts"})]}),v.jsx(F8,{onClick:t,"aria-label":"Close menu",children:v.jsx(G8,{})})]}),v.jsxs(q8,{onClick:t,children:[v.jsx(ef,{to:rt.CLASS_LIST,end:!0,children:"Classes"}),v.jsx(ef,{to:rt.ALERTS,children:"Alerts"}),v.jsx(ef,{to:rt.ABOUT,end:!0,children:"FAQ"}),n&&v.jsx(ef,{to:rt.STATS,children:"Stats"})]}),v.jsx(V8,{children:v.jsx(L8,{})})]})]})},W8=D.div`
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
`,Q8=({children:e,open:t,onClose:n})=>{const i=C.useRef(null),o=C.useCallback(l=>{l.key==="Escape"&&n()},[n]);return C.useEffect(()=>{if(t)return document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}},[t,o]),C.useEffect(()=>{if(!t)return;const l=f=>{const h=f.target;if(!(h instanceof Node)){n();return}const p=i.current;p&&p.contains(h)||n()},u=setTimeout(()=>{document.addEventListener("click",l,!0)},0);return()=>{clearTimeout(u),document.removeEventListener("click",l,!0)}},[t,n]),t?v.jsx(W8,{ref:i,role:"dialog","aria-modal":"true",children:e}):null},K8=D(ms)`
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
`,X8=D.button`
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
`,Z8=D.div`
  position: relative;
`,J8=D.button`
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
    background-color: rgba(0, 0, 0, 0.05);
  }
`,eB=()=>{const e=ct(el),[t,n]=C.useState(!1),{deleteToken:i}=C.useContext(gu),o=C.useCallback(async()=>{await i(),await oi?.signOut()},[i]);if(e.state!=="fulfilled"||!e.data){const l=e.state==="loading";return v.jsx(K8,{to:rt.SIGN_IN,$disabled:l,"aria-disabled":l,tabIndex:l?-1:void 0,children:"Sign in"})}return v.jsxs(Z8,{children:[v.jsx(X8,{type:"button",onClick:()=>n(!0),"aria-expanded":t,"aria-haspopup":"dialog",children:e.data.displayName}),v.jsx(Q8,{open:t,onClose:()=>n(!1),children:v.jsx(J8,{type:"button",onClick:o,children:"Sign out"})})]})},tB="#181a2f",np=680,nB=D.nav`
  height: inherit;
  background-color: ${tB};
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

  @media only screen and (min-width: ${np+1}px) {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
  }
`,rB=D(ms)`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  justify-self: start;
`,iB=D.span`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.01em;
  white-space: nowrap;
`,sB=D.div`
  display: flex;
  align-items: center;
  gap: 2px;

  @media only screen and (max-width: ${np}px) {
    display: none;
  }
`,tf=D(Tv)`
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
`,oB=D.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  justify-self: end;

  @media only screen and (max-width: ${np}px) {
    display: none;
  }
`,aB=D.button`
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

  @media only screen and (max-width: ${np}px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,lB=()=>v.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:v.jsx("path",{d:"M3 5h14M3 10h14M3 15h14",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})}),cB=()=>{const[e,t]=C.useState(!1),n=ct(j_);return v.jsxs(v.Fragment,{children:[v.jsxs(nB,{children:[v.jsxs(rB,{to:rt.CLASS_LIST,children:[v.jsx(tI,{}),v.jsx(iB,{children:"Peloton Alerts"})]}),v.jsxs(sB,{children:[v.jsx(tf,{to:rt.CLASS_LIST,end:!0,children:"Classes"}),v.jsx(tf,{to:rt.ALERTS,children:"Alerts"}),v.jsx(tf,{to:rt.ABOUT,end:!0,children:"FAQ"}),n&&v.jsx(tf,{to:rt.STATS,children:"Stats"})]}),v.jsx(oB,{children:v.jsx(eB,{})}),v.jsx(aB,{type:"button","aria-label":"Open menu",onClick:()=>t(!0),children:v.jsx(lB,{})})]}),v.jsx(Y8,{open:e,onClose:()=>t(!1)})]})},uB=D.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`,dB=D.div`
  position: sticky;
  height: calc(${eI}px + env(safe-area-inset-top));
  top: 0;
  z-index: 1;
`,fB=D.div`
  flex: 1;
  background-color: ${e=>e.theme.colors.secondarySurface};
`,lo=({children:e})=>v.jsxs(uB,{children:[v.jsx(dB,{children:v.jsx(cB,{})}),v.jsx(fB,{children:e})]}),Te=(...e)=>an`
  @media only screen and (max-width: ${t=>t.theme.widths.mobile}px) {
    ${an(...e)}
  }
`,jI=(...e)=>an`
  @media only screen and (max-width: ${t=>t.theme.widths.tablet}px) {
    ${an(...e)}
  }
`,hB=D.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 24px 20px;

  ${Te`
    padding: 16px 12px;
  `}
`,pB=D.div`
  margin-bottom: 20px;
`,mB=D.h1`
  font-size: 22px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
  margin: 0;
`,fc=D.section`
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  overflow: hidden;
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
`,hc=D.div`
  padding: 14px 20px;
  border-bottom: 1px solid ${e=>e.theme.borderColor};
`,pc=D.h2`
  font-size: 15px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
  margin: 0;
`,mc=D.div`
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
`,gB=()=>v.jsx(lo,{children:v.jsxs(hB,{children:[v.jsx(pB,{children:v.jsx(mB,{children:"FAQ"})}),v.jsxs(fc,{children:[v.jsx(hc,{children:v.jsx(pc,{children:"What is this?"})}),v.jsx(mc,{children:v.jsxs("p",{children:["A quicker, smarter way to browse"," ",v.jsx("a",{href:"https://studio.onepeloton.com/",target:"_blank",rel:"noreferrer",children:"Peloton Studios"})," ","class reservations. Filter by status (free, waitlist, full), instructor, or discipline — things the official site doesn't support. Classes are fetched directly from Peloton each time you load the page."]})})]}),v.jsxs(fc,{children:[v.jsx(hc,{children:v.jsx(pc,{children:"How do I view classes?"})}),v.jsx(mc,{children:v.jsxs("p",{children:["Open the ",v.jsx(ms,{to:rt.CLASS_LIST,children:"Class List"})," and use the sidebar to set filters or switch between studio locations."]})})]}),v.jsxs(fc,{children:[v.jsx(hc,{children:v.jsx(pc,{children:"Is the class data live?"})}),v.jsx(mc,{children:v.jsx("p",{children:"Yes — data is fetched fresh from Peloton each time you load the page or switch studio. Filters persist across refreshes, unlike the official site."})})]}),v.jsxs(fc,{children:[v.jsx(hc,{children:v.jsx(pc,{children:"When do new classes become available?"})}),v.jsx(mc,{children:v.jsx("p",{children:"New classes typically open at 12:00 pm on Mondays and Thursdays in your studio's local timezone."})})]}),v.jsxs(fc,{children:[v.jsx(hc,{children:v.jsx(pc,{children:"Can I request a feature or report a bug?"})}),v.jsx(mc,{children:v.jsxs("p",{children:["Yes — this project is open source and lives on"," ",v.jsx("a",{href:"https://github.com/Abbondanzo/peloton-reservations",target:"_blank",rel:"noreferrer",children:"GitHub"}),". Open an issue to request a feature, report a bug, or just share feedback. Pull requests are welcome too."]})})]})]})}),bs=an`
  border-color: ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  border-style: solid;
  border-width: 1px;
`,UI=an`
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;an`
  &:focus {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;const W_=C.createContext({state:"idle"}),yB=e=>{if(!e||typeof e!="object")return!1;const t=e;return typeof t.snapshotAt=="number"&&typeof t.starts_at=="string"&&Array.isArray(t.instructors)&&typeof t.disciplineId=="string"&&typeof t.occupancy=="number"&&typeof t.maxOccupancy=="number"&&typeof t.waitingCount=="number"&&typeof t.status=="string"},vB=e=>{const[t,n]=C.useState({state:"loading"});return C.useEffect(()=>{if(!e){n({state:"fulfilled",data:[]});return}n({state:"loading"});const i=wn;if(!i){n({state:"failed",error:new Error("No database connection")});return}const o=tr(i,ke.PATHS.classHistory(e)),l=Zh(o,u=>{const f=u.val();if(!f){n({state:"fulfilled",data:[]});return}const h=[];for(const[p,g]of Object.entries(f))if(!(!g||typeof g!="object"))for(const y of Object.values(g))yB(y)&&h.push({...y,classId:p});h.sort((p,g)=>p.snapshotAt-g.snapshotAt),n({state:"fulfilled",data:h})},u=>{n({state:"failed",error:u})});return()=>l()},[e]),t},Va=(e,t,n)=>{const i=new Date(e),o=new Intl.DateTimeFormat(void 0,{month:n?"long":"short",timeZone:t}).format(i),l=new Intl.DateTimeFormat(void 0,{day:"numeric",timeZone:t}).format(i);return n?`${new Intl.DateTimeFormat(void 0,{weekday:"long",timeZone:t}).format(i)}, ${o} ${l}`:`${o} ${l}`},_B=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],bB=(e,t)=>{const n=new Map;for(const i of e){const o=new Date(i.snapshotAt),l=Va(o.toISOString(),t,!0);if(!n.has(l)){const u=new Intl.DateTimeFormat("en-US",{weekday:"long",timeZone:t}).format(o);n.set(l,{dayIndex:_B.indexOf(u),snapshots:[]})}n.get(l).snapshots.push(i)}return Array.from(n.entries()).map(([i,{dayIndex:o,snapshots:l}])=>({label:i,dayIndex:o,snapshots:l}))},xo=(e,t)=>new Intl.DateTimeFormat(void 0,{hour:"numeric",minute:"numeric",timeZone:t}).format(new Date(e)),SB=D.div`
  border: 1px solid #a5d6a7;
  border-left: 4px solid #43a047;
  border-radius: ${e=>e.theme.borderRadius};
  background-color: #f1f8f1;
  padding: 12px 14px;
`,wB=D.div`
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #2e7d32;
  margin-bottom: 6px;
`,EB=D.div`
  font-size: 13px;
  color: ${e=>e.theme.colors.main};
  font-weight: 500;
`,xB=D.div`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
  margin-top: 2px;
`,TB=D.div`
  font-size: 11px;
  color: ${e=>e.theme.colors.secondary};
  opacity: 0.6;
  margin-top: 2px;
`,CB=({snapshot:e,timezone:t})=>{const n=Va(e.starts_at,t,!1),i=xo(e.starts_at,t),o=xo(new Date(e.snapshotAt).toISOString(),t),l=e.instructors[0]?.name??"Unknown instructor",u=e.maxOccupancy-e.occupancy;return v.jsxs(SB,{children:[v.jsx(wB,{children:"● Would have triggered"}),v.jsxs(EB,{children:[n," ",i,e.name?` · ${e.name}`:""," · ",l]}),v.jsx(xB,{children:e.status==="free"?`Free · ${u} spot${u===1?"":"s"} available`:e.status==="waitlist"?`Waitlist · ${e.waitingCount} waiting`:"Full"}),v.jsxs(TB,{children:["detected at ",o]})]})},RB=D.div`
  border: 1px solid #ffe0b2;
  border-left: 4px solid #fb8c00;
  border-radius: ${e=>e.theme.borderRadius};
  background-color: #fffbf5;
  padding: 12px 14px;
`,AB=D.div`
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #e65100;
  margin-bottom: 6px;
`,IB=D.div`
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
`,DB=D.div`
  font-size: 11px;
  color: ${e=>e.theme.colors.secondary};
  opacity: 0.6;
  margin-top: 2px;
`,OB={instructor:"wrong instructor",time:"outside your time range",discipline:"wrong discipline",status:"class not bookable"},NB=({snapshot:e,reason:t,timezone:n})=>{const i=Va(e.starts_at,n,!1),o=xo(e.starts_at,n),l=xo(new Date(e.snapshotAt).toISOString(),n),u=e.instructors[0]?.name??"Unknown instructor";return v.jsxs(RB,{children:[v.jsxs(AB,{children:["◌ Near miss — ",OB[t]]}),v.jsxs(IB,{children:[i," ",o,e.name?` · ${e.name}`:""," · ",u]}),v.jsxs(DB,{children:["detected at ",l]})]})},MB=D.button`
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
`,kB=D.ul`
  margin: 6px 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,LB=D.li`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
  padding: 4px 8px;
  background-color: ${e=>e.theme.colors.secondarySurface};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,PB=D.span`
  font-size: 11px;
  opacity: 0.6;
`,jB=({snapshots:e,timezone:t})=>{const[n,i]=C.useState(!1),o=e.length;return v.jsxs("div",{children:[v.jsxs(MB,{type:"button",onClick:()=>i(l=>!l),children:[v.jsx("span",{children:n?"▾":"▸"}),o," class",o===1?"":"es"," skipped"]}),n&&v.jsx(kB,{children:e.map((l,u)=>{const f=Va(l.starts_at,t,!1),h=xo(l.starts_at,t),p=xo(new Date(l.snapshotAt).toISOString(),t);return v.jsxs(LB,{children:[v.jsxs("span",{children:[f," ",h,l.name?` · ${l.name}`:"",l.instructors[0]?` · ${l.instructors[0].name}`:""]}),v.jsxs(PB,{children:["detected at ",p]})]},u)})})]})},UB=D.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,$B=D.h3`
  position: sticky;
  top: 0;
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
`,zB=D.span`
  font-size: 11px;
  font-weight: 400;
  color: ${e=>e.theme.colors.secondary};
  opacity: 0.6;
`,BB=({label:e,dayIndex:t,snapshots:n,alert:i,timezone:o})=>{const l=!!i.timeRanges[t],u=[],f=[],h=[];for(const p of n){const g=ke.classifySnapshotMatch(p,i);g.type==="match"?u.push(p):g.type==="near-miss"?f.push({snapshot:p,reason:g.reason}):h.push(p)}return v.jsxs(UB,{children:[v.jsxs($B,{children:[e,!l&&v.jsx(zB,{children:"not monitored"})]}),u.map((p,g)=>v.jsx(CB,{snapshot:p,timezone:o},g)),f.map(({snapshot:p,reason:g},y)=>v.jsx(NB,{snapshot:p,reason:g,timezone:o},y)),h.length>0&&v.jsx(jB,{snapshots:h,timezone:o})]})},HB=D.div`
  display: flex;
  gap: 16px;
  padding: 12px 0;
  border-bottom: 1px solid ${e=>e.theme.borderColor};
  flex-wrap: wrap;
`,Dx=D.span`
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
`,Ox=D.strong`
  color: ${e=>e.$color??e.theme.colors.main};
`,FB=({matchCount:e,nearMissCount:t})=>v.jsxs(HB,{children:[v.jsxs(Dx,{children:[v.jsx(Ox,{$color:"#2e7d32",children:e})," ",e===1?"class":"classes"," would have triggered"]}),v.jsxs(Dx,{children:[v.jsx(Ox,{$color:"#e65100",children:t})," near"," ",t===1?"miss":"misses"]})]}),qB=D.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  ${bs}
  border-radius: ${e=>e.theme.borderRadius};
  overflow: hidden;
  background-color: ${e=>e.theme.colors.mainSurface};
`,VB=D.div`
  padding: 20px 24px;
  border-bottom: 1px solid ${e=>e.theme.borderColor};

  ${Te`
    padding: 16px;
  `}
`,GB=D.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`,YB=D.button`
  flex-shrink: 0;
  padding: 6px 12px;
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  background: none;
  font-family: inherit;
  font-size: 12px;
  color: ${e=>e.$sent?"#2e7d32":e.theme.colors.secondary};
  cursor: ${e=>e.disabled?"default":"pointer"};
  transition: all 0.15s;
  white-space: nowrap;

  &:hover:not(:disabled) {
    border-color: ${e=>e.theme.colors.accent};
    color: ${e=>e.theme.colors.accent};
  }
`,WB=D.button`
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
`,QB=D.h1`
  margin: 0 0 4px;
  font-size: 18px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
`,KB=D.p`
  margin: 0;
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
`,XB=D.div`
  padding: 16px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${Te`
    padding: 12px 16px 16px;
  `}
`,nf=D.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
  padding: 32px 0;
`,ZB=()=>{const{alertId:e}=ck(),t=Co(),n=C.useContext(W_),[i,o]=C.useState("idle"),l=C.useMemo(()=>n.state!=="fulfilled"?null:n.data.find(T=>T.id===e)??null,[n,e]),u=vB(l?.studioId??null),f=l?ke.STUDIOS[l.studioId]?.timezone??"UTC":"UTC",h=C.useMemo(()=>!l||u.state!=="fulfilled"?[]:bB(u.data,f),[l,u,f]),{matchCount:p,nearMissCount:g}=C.useMemo(()=>{if(!l||u.state!=="fulfilled")return{matchCount:0,nearMissCount:0};let T=0,A=0;for(const k of u.data){const x=ke.classifySnapshotMatch(k,l);x.type==="match"?T++:x.type==="near-miss"&&A++}return{matchCount:T,nearMissCount:A}},[l,u]),y=n.state==="loading"||n.state==="idle"||u.state==="loading",_="Notification"in window&&"serviceWorker"in navigator,S=C.useCallback(async()=>{if(_){o("sending");try{if(Notification.permission!=="granted"&&await Notification.requestPermission()!=="granted"){o("idle");return}const T=await navigator.serviceWorker.ready,A=l?ke.STUDIOS[l.studioId]:null,k="Spot opened up!",x=`${l?.name??"Test alert"} — ${A?.location??"Studio"} · test notification`;await T.showNotification(k,{body:x,icon:"/icons/icon-192x192.png",badge:"/icons/icon-96x96.png",data:{classUrl:"/p/7248695-peloton-studios-new-york/e/99586855-30-min-intervals-ride/"}}),o("sent"),setTimeout(()=>o("idle"),3e3)}catch{o("error"),setTimeout(()=>o("idle"),3e3)}}},[l,_]),w=l?.name??"Alert",O=i==="sending"?"Sending…":i==="sent"?"Sent!":i==="error"?"Error":"Send test notification";return v.jsxs(qB,{children:[v.jsxs(VB,{children:[v.jsx(WB,{type:"button",onClick:()=>t(-1),children:"← Alerts"}),v.jsxs(GB,{children:[v.jsx("div",{children:v.jsxs(QB,{children:[w," — Past 7 Days"]})}),_&&v.jsx(YB,{type:"button",$sent:i==="sent",disabled:i==="sending",onClick:S,title:"Fire a test push notification to verify delivery and the notification URL",children:O})]}),v.jsx(KB,{children:l?`${ke.STUDIOS[l.studioId]?.location??l.studioId}`:""})]}),v.jsxs(XB,{children:[y&&v.jsx(nf,{children:"Loading…"}),!y&&!l&&v.jsx(nf,{children:"Alert not found."}),!y&&l&&u.state==="fulfilled"&&v.jsxs(v.Fragment,{children:[v.jsx(FB,{matchCount:p,nearMissCount:g}),h.length===0&&v.jsx(nf,{children:"No class history yet. History builds up as the backend detects class changes."}),h.map(({label:T,dayIndex:A,snapshots:k})=>v.jsx(BB,{label:T,dayIndex:A,snapshots:k,alert:l,timezone:f},T))]}),!y&&u.state==="failed"&&v.jsx(nf,{children:"Failed to load class history."})]})]})},JB=e=>{try{return window.localStorage.getItem(e)}catch(t){return Or(t),null}},eH="STUDIO_ID",$I=e=>{const t=JB(eH);return t===null?e:Object.keys(ke.STUDIOS).includes(t)?t:e},Do=bi([e=>e.studioSelector],e=>e.studioId),tH={studioId:$I(ke.DEFAULT_STUDIO_ID)},ov=Ar({name:"studioSelector",initialState:tH,reducers:{setStudioId(e,t){e.studioId=t.payload}}}),{setStudioId:Rf}=ov.actions,rs=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],hh=new Array(48).fill(null).map((e,t)=>{const n=t*30,i=new Date;i.setHours(Math.floor(n/60)),i.setMinutes(n%60);const o=new Intl.DateTimeFormat(void 0,{hour:"numeric",minute:"numeric"});return{minutes:n,label:o.format(i)}}),nH=async(e,t)=>{const n=wn;if(!n)throw new Error("No Firebase database connection to use");const i=(await QU(tr(n,ke.PATHS.alerts(e)),t)).key;if(!i)throw new Error("Missing ID from insertion operation");return{...t,id:i}},rH=async(e,t)=>{const n=wn;if(!n)throw new Error("No Firebase database connection to use");await XA(tr(n,ke.PATHS.alert(e,t.id)),t)},iH=D.div`
  display: flex;
  flex-direction: column;
`,sH=D.label`
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,oH=D.input`
  ${bs}
  padding: 12px 8px;
  font-family: inherit;
`,aH=D.span`
  margin-top: 4px;
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,lH=({label:e,hint:t,placeholder:n,value:i,onChange:o})=>{const l=C.useId();return v.jsxs(iH,{children:[v.jsx(sH,{htmlFor:l,children:e}),v.jsx(oH,{id:l,placeholder:n,value:i,"aria-describedby":t?`${l}-hint`:void 0,onChange:({target:u})=>o(u.value)}),t&&v.jsx(aH,{id:`${l}-hint`,children:t})]})},cH=D.label`
  ${bs}
  ${UI}
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
`,uH=D.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,dH=D.span`
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
`,fH=D.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,hH=D.input`
  accent-color: ${e=>e.theme.colors.accent};
`,Nx=({name:e,value:t,checked:n,onChange:i,label:o,hint:l,icon:u})=>{const f=C.useId();return v.jsxs(cH,{htmlFor:f,children:[v.jsx(hH,{type:"radio",id:f,name:e,value:t,checked:n,onChange:i}),u,v.jsxs(uH,{children:[v.jsx(dH,{children:o}),l&&v.jsx(fH,{children:l})]})]})},Mx=D.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`,kx=D.legend`
  font-weight: 600;
  font-size: 18px;
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,Lx=D.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  margin: 0 0 16px;
`,Px=D.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,jx=D.div`
  margin-top: 32px;

  ${Te`
    margin-top: 24px;
  `}
`,pH=Object.entries(ke.STUDIOS).map(([e,t])=>({id:e,label:t.location})),mH=[{status:"free",label:"Open spots only",hint:"Alert me when a class has available spots"},{status:"waitlist",label:"Open spots or waitlist",hint:"Alert me even if I'd join the waitlist"}],gH=({name:e,onNameChange:t,studioId:n,onStudioChange:i,maxStatus:o,onStatusChange:l})=>v.jsxs("div",{children:[v.jsx(lH,{label:"Alert name (optional)",hint:"Leave blank to auto-generate a name from your filters",placeholder:"e.g. Morning Cycling with Cody",value:e,onChange:t}),v.jsx(jx,{}),v.jsxs(Mx,{children:[v.jsx(kx,{children:"Which studio?"}),v.jsx(Lx,{children:"Pick the Peloton studio you want to monitor."}),v.jsx(Px,{children:pH.map(u=>v.jsx(Nx,{name:"studio",value:u.id,checked:n===u.id,onChange:()=>i(u.id),label:u.label},u.id))})]}),v.jsx(jx,{}),v.jsxs(Mx,{children:[v.jsx(kx,{children:"When should we alert you?"}),v.jsx(Lx,{children:"Choose whether to include waitlisted classes."}),v.jsx(Px,{children:mH.map(u=>v.jsx(Nx,{name:"status",value:u.status,checked:o===u.status,onChange:()=>l(u.status),label:u.label,hint:u.hint},u.status))})]})]}),Ux={Cardio:"#d8ec43",Cycling:"#bbd4f4",Meditation:"#e6d4ff",Rowing:"#cbf293","Outdoor Run":"#a8e6cf","Outdoor Run/Walk":"#94f3d0",Running:"#fde987",Strength:"#ffc0d5",Tread:"#fdbe9f",Walking:"#ffa8a9",Yoga:"#ceffdc"},zI=.2,ph=e=>Math.round(e*(1-zI*2)),yH=e=>Math.round(e*zI),vH=D.div`
  width: ${e=>ph(e.size)}px;
  height: ${e=>ph(e.size)}px;
  border-radius: ${e=>e.size}px;
  background-color: ${e=>e.color};
  padding: ${e=>yH(e.size)}px;
  flex-shrink: 0;
`,_H=D.img`
  width: ${e=>ph(e.size)}px;
  height: ${e=>ph(e.size)}px;
  display: block;
`,mh=({discipline:e,size:t=32})=>{const n=C.useMemo(()=>{const i=Object.keys(Ux),o=e.name.toLowerCase(),l=i.find(u=>u.toLowerCase()===o)??i.find(u=>{const f=u.toLowerCase();return f.includes(o)||o.includes(f)});if(l)return Ux[l];{const u=`Received unsupported discipline ${e.name}`;return console.log(u),Lv(u),"#fafafa"}},[e.name]);return v.jsx(vH,{color:n,size:t,children:v.jsx(_H,{alt:e.name,src:e.iconUrl,size:t,color:n})})},bH=D.img`
  width: ${e=>e.size}px;
  min-width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  color: #bbb;
`,Q_=({instructor:e,size:t=32})=>v.jsx(bH,{src:e.imageUrl,alt:`Profile of ${e.name}`,size:t});var SH=class extends Error{issues;constructor(e){super(e[0].message),this.name="SchemaError",this.issues=e}},BI=(e=>(e.uninitialized="uninitialized",e.pending="pending",e.fulfilled="fulfilled",e.rejected="rejected",e))(BI||{});function $x(e){return{status:e,isUninitialized:e==="uninitialized",isLoading:e==="pending",isSuccess:e==="fulfilled",isError:e==="rejected"}}var zx=us;function K_(e,t){if(e===t||!(zx(e)&&zx(t)||Array.isArray(e)&&Array.isArray(t)))return t;const n=Object.keys(t),i=Object.keys(e);let o=n.length===i.length;const l=Array.isArray(t)?[]:{};for(const u of n)l[u]=K_(e[u],t[u]),o&&(o=e[u]===l[u]);return o?e:l}function sy(e){let t=0;for(const n in e)t++;return t}var Bx=e=>[].concat(...e);function wH(e){return new RegExp("(^|:)//").test(e)}function EH(){return typeof document>"u"?!0:document.visibilityState!=="hidden"}function gh(e){return e!=null}function xH(){return typeof navigator>"u"||navigator.onLine===void 0?!0:navigator.onLine}var TH=e=>e.replace(/\/$/,""),CH=e=>e.replace(/^\//,"");function RH(e,t){if(!e)return t;if(!t)return e;if(wH(t))return t;const n=e.endsWith("/")||!t.startsWith("?")?"/":"";return e=TH(e),t=CH(t),`${e}${n}${t}`}function AH(e,t,n){return e.has(t)?e.get(t):e.set(t,n).get(t)}function av(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}var lv=()=>new Map,Hx=(...e)=>fetch(...e),IH=e=>e.status>=200&&e.status<=299,DH=e=>/ion\/(vnd\.api\+)?json/.test(e.get("content-type")||"");function Fx(e){if(!us(e))return e;const t={...e};for(const[n,i]of Object.entries(t))i===void 0&&delete t[n];return t}function OH({baseUrl:e,prepareHeaders:t=y=>y,fetchFn:n=Hx,paramsSerializer:i,isJsonContentType:o=DH,jsonContentType:l="application/json",jsonReplacer:u,timeout:f,responseHandler:h,validateStatus:p,...g}={}){return typeof fetch>"u"&&n===Hx&&console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."),async(_,S,w)=>{const{getState:O,extra:T,endpoint:A,forced:k,type:x}=S;let I,{url:M,headers:R=new Headers(g.headers),params:P=void 0,responseHandler:V=h??"json",validateStatus:H=p??IH,timeout:B=f,...z}=typeof _=="string"?{url:_}:_,G,F=S.signal;B&&(G=new AbortController,S.signal.addEventListener("abort",G.abort),F=G.signal);let K={...g,signal:F,...z};R=new Headers(Fx(R)),K.headers=await t(R,{getState:O,arg:_,extra:T,endpoint:A,forced:k,type:x,extraOptions:w})||R;const ue=de=>typeof de=="object"&&(us(de)||Array.isArray(de)||typeof de.toJSON=="function");if(!K.headers.has("content-type")&&ue(K.body)&&K.headers.set("content-type",l),ue(K.body)&&o(K.headers)&&(K.body=JSON.stringify(K.body,u)),P){const de=~M.indexOf("?")?"&":"?",me=i?i(P):new URLSearchParams(Fx(P));M+=de+me}M=RH(e,M);const U=new Request(M,K);I={request:new Request(M,K)};let ne,ae=!1,N=G&&setTimeout(()=>{ae=!0,G.abort()},B);try{ne=await n(U)}catch(de){return{error:{status:ae?"TIMEOUT_ERROR":"FETCH_ERROR",error:String(de)},meta:I}}finally{N&&clearTimeout(N),G?.signal.removeEventListener("abort",G.abort)}const X=ne.clone();I.response=X;let le,ie="";try{let de;if(await Promise.all([y(ne,V).then(me=>le=me,me=>de=me),X.text().then(me=>ie=me,()=>{})]),de)throw de}catch(de){return{error:{status:"PARSING_ERROR",originalStatus:ne.status,data:ie,error:String(de)},meta:I}}return H(ne,le)?{data:le,meta:I}:{error:{status:ne.status,data:le},meta:I}};async function y(_,S){if(typeof S=="function")return S(_);if(S==="content-type"&&(S=o(_.headers)?"json":"text"),S==="json"){const w=await _.text();return w.length?JSON.parse(w):null}return _.text()}}var qx=class{constructor(e,t=void 0){this.value=e,this.meta=t}},X_=fr("__rtkq/focused"),HI=fr("__rtkq/unfocused"),Z_=fr("__rtkq/online"),FI=fr("__rtkq/offline");function rp(e){return e.type==="query"}function NH(e){return e.type==="mutation"}function ip(e){return e.type==="infinitequery"}function yh(e){return rp(e)||ip(e)}function J_(e,t,n,i,o,l){return MH(e)?e(t,n,i,o).filter(gh).map(cv).map(l):Array.isArray(e)?e.map(cv).map(l):[]}function MH(e){return typeof e=="function"}function cv(e){return typeof e=="string"?{type:e}:e}function kH(e,t){return e.catch(t)}var au=Symbol("forceQueryFn"),uv=e=>typeof e[au]=="function";function LH({serializeQueryArgs:e,queryThunk:t,infiniteQueryThunk:n,mutationThunk:i,api:o,context:l,internalState:u}){const{runningQueries:f,runningMutations:h}=u,{unsubscribeQueryResult:p,removeMutationResult:g,updateSubscriptionOptions:y}=o.internalActions;return{buildInitiateQuery:A,buildInitiateInfiniteQuery:k,buildInitiateMutation:x,getRunningQueryThunk:_,getRunningMutationThunk:S,getRunningQueriesThunk:w,getRunningMutationsThunk:O};function _(I,M){return R=>{const P=l.endpointDefinitions[I],V=e({queryArgs:M,endpointDefinition:P,endpointName:I});return f.get(R)?.[V]}}function S(I,M){return R=>h.get(R)?.[M]}function w(){return I=>Object.values(f.get(I)||{}).filter(gh)}function O(){return I=>Object.values(h.get(I)||{}).filter(gh)}function T(I,M){const R=(P,{subscribe:V=!0,forceRefetch:H,subscriptionOptions:B,[au]:z,...G}={})=>(F,K)=>{const ue=e({queryArgs:P,endpointDefinition:M,endpointName:I});let U;const ee={...G,type:"query",subscribe:V,forceRefetch:H,subscriptionOptions:B,endpointName:I,originalArgs:P,queryCacheKey:ue,[au]:z};if(rp(M))U=t(ee);else{const{direction:Ae,initialPageParam:be}=G;U=n({...ee,direction:Ae,initialPageParam:be})}const ne=o.endpoints[I].select(P),ae=F(U),N=ne(K()),{requestId:X,abort:le}=ae,ie=N.requestId!==X,de=f.get(F)?.[ue],me=()=>ne(K()),pe=Object.assign(z?ae.then(me):ie&&!de?Promise.resolve(N):Promise.all([de,ae]).then(me),{arg:P,requestId:X,subscriptionOptions:B,queryCacheKey:ue,abort:le,async unwrap(){const Ae=await pe;if(Ae.isError)throw Ae.error;return Ae.data},refetch:()=>F(R(P,{subscribe:!1,forceRefetch:!0})),unsubscribe(){V&&F(p({queryCacheKey:ue,requestId:X}))},updateSubscriptionOptions(Ae){pe.subscriptionOptions=Ae,F(y({endpointName:I,requestId:X,queryCacheKey:ue,options:Ae}))}});if(!de&&!ie&&!z){const Ae=AH(f,F,{});Ae[ue]=pe,pe.then(()=>{delete Ae[ue],sy(Ae)||f.delete(F)})}return pe};return R}function A(I,M){return T(I,M)}function k(I,M){return T(I,M)}function x(I){return(M,{track:R=!0,fixedCacheKey:P}={})=>(V,H)=>{const B=i({type:"mutation",endpointName:I,originalArgs:M,track:R,fixedCacheKey:P}),z=V(B),{requestId:G,abort:F,unwrap:K}=z,ue=kH(z.unwrap().then(ae=>({data:ae})),ae=>({error:ae})),U=()=>{V(g({requestId:G,fixedCacheKey:P}))},ee=Object.assign(ue,{arg:z.arg,requestId:G,abort:F,unwrap:K,reset:U}),ne=h.get(V)||{};return h.set(V,ne),ne[G]=ee,ee.then(()=>{delete ne[G],sy(ne)||h.delete(V)}),P&&(ne[P]=ee,ee.then(()=>{ne[P]===ee&&(delete ne[P],sy(ne)||h.delete(V))})),ee}}}var qI=class extends SH{constructor(e,t,n,i){super(e),this.value=t,this.schemaName=n,this._bqMeta=i}},Ws=(e,t)=>Array.isArray(e)?e.includes(t):!!e;async function Qs(e,t,n,i){const o=await e["~standard"].validate(t);if(o.issues)throw new qI(o.issues,t,n,i);return o.value}function Vx(e){return e}var gc=(e={})=>({...e,[Uh]:!0});function PH({reducerPath:e,baseQuery:t,context:{endpointDefinitions:n},serializeQueryArgs:i,api:o,assertTagType:l,selectors:u,onSchemaFailure:f,catchSchemaFailure:h,skipSchemaValidation:p}){const g=(z,G,F,K)=>(ue,U)=>{const ee=n[z],ne=i({queryArgs:G,endpointDefinition:ee,endpointName:z});if(ue(o.internalActions.queryResultPatched({queryCacheKey:ne,patches:F})),!K)return;const ae=o.endpoints[z].select(G)(U()),N=J_(ee.providesTags,ae.data,void 0,G,{},l);ue(o.internalActions.updateProvidedBy([{queryCacheKey:ne,providedTags:N}]))};function y(z,G,F=0){const K=[G,...z];return F&&K.length>F?K.slice(0,-1):K}function _(z,G,F=0){const K=[...z,G];return F&&K.length>F?K.slice(1):K}const S=(z,G,F,K=!0)=>(ue,U)=>{const ne=o.endpoints[z].select(G)(U()),ae={patches:[],inversePatches:[],undo:()=>ue(o.util.patchQueryData(z,G,ae.inversePatches,K))};if(ne.status==="uninitialized")return ae;let N;if("data"in ne)if(yr(ne.data)){const[X,le,ie]=NR(ne.data,F);ae.patches.push(...le),ae.inversePatches.push(...ie),N=X}else N=F(ne.data),ae.patches.push({op:"replace",path:[],value:N}),ae.inversePatches.push({op:"replace",path:[],value:ne.data});return ae.patches.length===0||ue(o.util.patchQueryData(z,G,ae.patches,K)),ae},w=(z,G,F)=>K=>K(o.endpoints[z].initiate(G,{subscribe:!1,forceRefetch:!0,[au]:()=>({data:F})})),O=(z,G)=>z.query&&z[G]?z[G]:Vx,T=async(z,{signal:G,abort:F,rejectWithValue:K,fulfillWithValue:ue,dispatch:U,getState:ee,extra:ne})=>{const ae=n[z.endpointName],{metaSchema:N,skipSchemaValidation:X=p}=ae;try{let le=Vx;const ie={signal:G,abort:F,dispatch:U,getState:ee,extra:ne,endpoint:z.endpointName,type:z.type,forced:z.type==="query"?A(z,ee()):void 0,queryCacheKey:z.type==="query"?z.queryCacheKey:void 0},de=z.type==="query"?z[au]:void 0;let me;const pe=async(be,De,$e,_t)=>{if(De==null&&be.pages.length)return Promise.resolve({data:be});const gt={queryArg:z.originalArgs,pageParam:De},kn=await Ae(gt),Et=_t?y:_;return{data:{pages:Et(be.pages,kn.data,$e),pageParams:Et(be.pageParams,De,$e)},meta:kn.meta}};async function Ae(be){let De;const{extraOptions:$e,argSchema:_t,rawResponseSchema:gt,responseSchema:kn}=ae;if(_t&&!Ws(X,"arg")&&(be=await Qs(_t,be,"argSchema",{})),de?De=de():ae.query?(le=O(ae,"transformResponse"),De=await t(ae.query(be),ie,$e)):De=await ae.queryFn(be,ie,$e,Lr=>t(Lr,ie,$e)),typeof process<"u",De.error)throw new qx(De.error,De.meta);let{data:Et}=De;gt&&!Ws(X,"rawResponse")&&(Et=await Qs(gt,De.data,"rawResponseSchema",De.meta));let Ln=await le(Et,De.meta,be);return kn&&!Ws(X,"response")&&(Ln=await Qs(kn,Ln,"responseSchema",De.meta)),{...De,data:Ln}}if(z.type==="query"&&"infiniteQueryOptions"in ae){const{infiniteQueryOptions:be}=ae,{maxPages:De=1/0}=be;let $e;const _t={pages:[],pageParams:[]},gt=u.selectQueryEntry(ee(),z.queryCacheKey)?.data,Et=A(z,ee())&&!z.direction||!gt?_t:gt;if("direction"in z&&z.direction&&Et.pages.length){const Ln=z.direction==="backward",Yt=(Ln?VI:dv)(be,Et,z.originalArgs);$e=await pe(Et,Yt,De,Ln)}else{const{initialPageParam:Ln=be.initialPageParam}=z,Lr=gt?.pageParams??[],Yt=Lr[0]??Ln,sl=Lr.length;$e=await pe(Et,Yt,De),de&&($e={data:$e.data.pages[0]});for(let Ss=1;Ss<sl;Ss++){const Oo=dv(be,$e.data,z.originalArgs);$e=await pe($e.data,Oo,De)}}me=$e}else me=await Ae(z.originalArgs);return N&&!Ws(X,"meta")&&me.meta&&(me.meta=await Qs(N,me.meta,"metaSchema",me.meta)),ue(me.data,gc({fulfilledTimeStamp:Date.now(),baseQueryMeta:me.meta}))}catch(le){let ie=le;if(ie instanceof qx){let de=O(ae,"transformErrorResponse");const{rawErrorResponseSchema:me,errorResponseSchema:pe}=ae;let{value:Ae,meta:be}=ie;try{me&&!Ws(X,"rawErrorResponse")&&(Ae=await Qs(me,Ae,"rawErrorResponseSchema",be)),N&&!Ws(X,"meta")&&(be=await Qs(N,be,"metaSchema",be));let De=await de(Ae,be,z.originalArgs);return pe&&!Ws(X,"errorResponse")&&(De=await Qs(pe,De,"errorResponseSchema",be)),K(De,gc({baseQueryMeta:be}))}catch(De){ie=De}}try{if(ie instanceof qI){const de={endpoint:z.endpointName,arg:z.originalArgs,type:z.type,queryCacheKey:z.type==="query"?z.queryCacheKey:void 0};ae.onSchemaFailure?.(ie,de),f?.(ie,de);const{catchSchemaFailure:me=h}=ae;if(me)return K(me(ie,de),gc({baseQueryMeta:ie._bqMeta}))}}catch(de){ie=de}throw console.error(ie),ie}};function A(z,G){const F=u.selectQueryEntry(G,z.queryCacheKey),K=u.selectConfig(G).refetchOnMountOrArgChange,ue=F?.fulfilledTimeStamp,U=z.forceRefetch??(z.subscribe&&K);return U?U===!0||(Number(new Date)-Number(ue))/1e3>=U:!1}const k=()=>yE(`${e}/executeQuery`,T,{getPendingMeta({arg:G}){const F=n[G.endpointName];return gc({startedTimeStamp:Date.now(),...ip(F)?{direction:G.direction}:{}})},condition(G,{getState:F}){const K=F(),ue=u.selectQueryEntry(K,G.queryCacheKey),U=ue?.fulfilledTimeStamp,ee=G.originalArgs,ne=ue?.originalArgs,ae=n[G.endpointName],N=G.direction;return uv(G)?!0:ue?.status==="pending"?!1:A(G,K)||rp(ae)&&ae?.forceRefetch?.({currentArg:ee,previousArg:ne,endpointState:ue,state:K})?!0:!(U&&!N)},dispatchConditionRejection:!0}),x=k(),I=k(),M=yE(`${e}/executeMutation`,T,{getPendingMeta(){return gc({startedTimeStamp:Date.now()})}}),R=z=>"force"in z,P=z=>"ifOlderThan"in z,V=(z,G,F)=>(K,ue)=>{const U=R(F)&&F.force,ee=P(F)&&F.ifOlderThan,ne=(N=!0)=>{const X={forceRefetch:N,isPrefetch:!0};return o.endpoints[z].initiate(G,X)},ae=o.endpoints[z].select(G)(ue());if(U)K(ne());else if(ee){const N=ae?.fulfilledTimeStamp;if(!N){K(ne());return}(Number(new Date)-Number(new Date(N)))/1e3>=ee&&K(ne())}else K(ne(!1))};function H(z){return G=>G?.meta?.arg?.endpointName===z}function B(z,G){return{matchPending:Dc(Zv(z),H(G)),matchFulfilled:Dc(ds(z),H(G)),matchRejected:Dc($a(z),H(G))}}return{queryThunk:x,mutationThunk:M,infiniteQueryThunk:I,prefetch:V,updateQueryData:S,upsertQueryData:w,patchQueryData:g,buildMatchThunkActions:B}}function dv(e,{pages:t,pageParams:n},i){const o=t.length-1;return e.getNextPageParam(t[o],t,n[o],n,i)}function VI(e,{pages:t,pageParams:n},i){return e.getPreviousPageParam?.(t[0],t,n[0],n,i)}function GI(e,t,n,i){return J_(n[e.meta.arg.endpointName][t],ds(e)?e.payload:void 0,zh(e)?e.payload:void 0,e.meta.arg.originalArgs,"baseQueryMeta"in e.meta?e.meta.baseQueryMeta:void 0,i)}function rf(e,t,n){const i=e[t];i&&n(i)}function lu(e){return("arg"in e?e.arg.fixedCacheKey:e.fixedCacheKey)??e.requestId}function Gx(e,t,n){const i=e[lu(t)];i&&n(i)}var sf={};function jH({reducerPath:e,queryThunk:t,mutationThunk:n,serializeQueryArgs:i,context:{endpointDefinitions:o,apiUid:l,extractRehydrationInfo:u,hasRehydrationInfo:f},assertTagType:h,config:p}){const g=fr(`${e}/resetApiState`);function y(H,B,z,G){H[B.queryCacheKey]??={status:"uninitialized",endpointName:B.endpointName},rf(H,B.queryCacheKey,F=>{F.status="pending",F.requestId=z&&F.requestId?F.requestId:G.requestId,B.originalArgs!==void 0&&(F.originalArgs=B.originalArgs),F.startedTimeStamp=G.startedTimeStamp;const K=o[G.arg.endpointName];ip(K)&&"direction"in B&&(F.direction=B.direction)})}function _(H,B,z,G){rf(H,B.arg.queryCacheKey,F=>{if(F.requestId!==B.requestId&&!G)return;const{merge:K}=o[B.arg.endpointName];if(F.status="fulfilled",K)if(F.data!==void 0){const{fulfilledTimeStamp:ue,arg:U,baseQueryMeta:ee,requestId:ne}=B;let ae=hu(F.data,N=>K(N,z,{arg:U.originalArgs,baseQueryMeta:ee,fulfilledTimeStamp:ue,requestId:ne}));F.data=ae}else F.data=z;else F.data=o[B.arg.endpointName].structuralSharing??!0?K_(Mr(F.data)?rj(F.data):F.data,z):z;delete F.error,F.fulfilledTimeStamp=B.fulfilledTimeStamp})}const S=Ar({name:`${e}/queries`,initialState:sf,reducers:{removeQueryResult:{reducer(H,{payload:{queryCacheKey:B}}){delete H[B]},prepare:oc()},cacheEntriesUpserted:{reducer(H,B){for(const z of B.payload){const{queryDescription:G,value:F}=z;y(H,G,!0,{arg:G,requestId:B.meta.requestId,startedTimeStamp:B.meta.timestamp}),_(H,{arg:G,requestId:B.meta.requestId,fulfilledTimeStamp:B.meta.timestamp,baseQueryMeta:{}},F,!0)}},prepare:H=>({payload:H.map(G=>{const{endpointName:F,arg:K,value:ue}=G,U=o[F];return{queryDescription:{type:"query",endpointName:F,originalArgs:G.arg,queryCacheKey:i({queryArgs:K,endpointDefinition:U,endpointName:F})},value:ue}}),meta:{[Uh]:!0,requestId:Jv(),timestamp:Date.now()}})},queryResultPatched:{reducer(H,{payload:{queryCacheKey:B,patches:z}}){rf(H,B,G=>{G.data=uE(G.data,z.concat())})},prepare:oc()}},extraReducers(H){H.addCase(t.pending,(B,{meta:z,meta:{arg:G}})=>{const F=uv(G);y(B,G,F,z)}).addCase(t.fulfilled,(B,{meta:z,payload:G})=>{const F=uv(z.arg);_(B,z,G,F)}).addCase(t.rejected,(B,{meta:{condition:z,arg:G,requestId:F},error:K,payload:ue})=>{rf(B,G.queryCacheKey,U=>{if(!z){if(U.requestId!==F)return;U.status="rejected",U.error=ue??K}})}).addMatcher(f,(B,z)=>{const{queries:G}=u(z);for(const[F,K]of Object.entries(G))(K?.status==="fulfilled"||K?.status==="rejected")&&(B[F]=K)})}}),w=Ar({name:`${e}/mutations`,initialState:sf,reducers:{removeMutationResult:{reducer(H,{payload:B}){const z=lu(B);z in H&&delete H[z]},prepare:oc()}},extraReducers(H){H.addCase(n.pending,(B,{meta:z,meta:{requestId:G,arg:F,startedTimeStamp:K}})=>{F.track&&(B[lu(z)]={requestId:G,status:"pending",endpointName:F.endpointName,startedTimeStamp:K})}).addCase(n.fulfilled,(B,{payload:z,meta:G})=>{G.arg.track&&Gx(B,G,F=>{F.requestId===G.requestId&&(F.status="fulfilled",F.data=z,F.fulfilledTimeStamp=G.fulfilledTimeStamp)})}).addCase(n.rejected,(B,{payload:z,error:G,meta:F})=>{F.arg.track&&Gx(B,F,K=>{K.requestId===F.requestId&&(K.status="rejected",K.error=z??G)})}).addMatcher(f,(B,z)=>{const{mutations:G}=u(z);for(const[F,K]of Object.entries(G))(K?.status==="fulfilled"||K?.status==="rejected")&&F!==K?.requestId&&(B[F]=K)})}}),O={tags:{},keys:{}},T=Ar({name:`${e}/invalidation`,initialState:O,reducers:{updateProvidedBy:{reducer(H,B){for(const{queryCacheKey:z,providedTags:G}of B.payload){A(H,z);for(const{type:F,id:K}of G){const ue=(H.tags[F]??={})[K||"__internal_without_id"]??=[];ue.includes(z)||ue.push(z)}H.keys[z]=G}},prepare:oc()}},extraReducers(H){H.addCase(S.actions.removeQueryResult,(B,{payload:{queryCacheKey:z}})=>{A(B,z)}).addMatcher(f,(B,z)=>{const{provided:G}=u(z);for(const[F,K]of Object.entries(G.tags??{}))for(const[ue,U]of Object.entries(K)){const ee=(B.tags[F]??={})[ue||"__internal_without_id"]??=[];for(const ne of U)ee.includes(ne)||ee.push(ne),B.keys[ne]=G.keys[ne]}}).addMatcher(pi(ds(t),zh(t)),(B,z)=>{k(B,[z])}).addMatcher(S.actions.cacheEntriesUpserted.match,(B,z)=>{const G=z.payload.map(({queryDescription:F,value:K})=>({type:"UNKNOWN",payload:K,meta:{requestStatus:"fulfilled",requestId:"UNKNOWN",arg:F}}));k(B,G)})}});function A(H,B){const z=H.keys[B]??[];for(const G of z){const F=G.type,K=G.id??"__internal_without_id",ue=H.tags[F]?.[K];ue&&(H.tags[F][K]=ue.filter(U=>U!==B))}delete H.keys[B]}function k(H,B){const z=B.map(G=>{const F=GI(G,"providesTags",o,h),{queryCacheKey:K}=G.meta.arg;return{queryCacheKey:K,providedTags:F}});T.caseReducers.updateProvidedBy(H,T.actions.updateProvidedBy(z))}const x=Ar({name:`${e}/subscriptions`,initialState:sf,reducers:{updateSubscriptionOptions(H,B){},unsubscribeQueryResult(H,B){},internal_getRTKQSubscriptions(){}}}),I=Ar({name:`${e}/internalSubscriptions`,initialState:sf,reducers:{subscriptionsUpdated:{reducer(H,B){return uE(H,B.payload)},prepare:oc()}}}),M=Ar({name:`${e}/config`,initialState:{online:xH(),focused:EH(),middlewareRegistered:!1,...p},reducers:{middlewareRegistered(H,{payload:B}){H.middlewareRegistered=H.middlewareRegistered==="conflict"||l!==B?"conflict":!0}},extraReducers:H=>{H.addCase(Z_,B=>{B.online=!0}).addCase(FI,B=>{B.online=!1}).addCase(X_,B=>{B.focused=!0}).addCase(HI,B=>{B.focused=!1}).addMatcher(f,B=>({...B}))}}),R=TR({queries:S.reducer,mutations:w.reducer,provided:T.reducer,subscriptions:I.reducer,config:M.reducer}),P=(H,B)=>R(g.match(B)?void 0:H,B),V={...M.actions,...S.actions,...x.actions,...I.actions,...w.actions,...T.actions,resetApiState:g};return{reducer:P,actions:V}}var ar=Symbol.for("RTKQ/skipToken"),YI={status:"uninitialized"},Yx=hu(YI,()=>{}),Wx=hu(YI,()=>{});function UH({serializeQueryArgs:e,reducerPath:t,createSelector:n}){const i=x=>Yx,o=x=>Wx;return{buildQuerySelector:_,buildInfiniteQuerySelector:S,buildMutationSelector:w,selectInvalidatedBy:O,selectCachedArgsForQuery:T,selectApiState:u,selectQueries:f,selectMutations:p,selectQueryEntry:h,selectConfig:g};function l(x){return{...x,...$x(x.status)}}function u(x){return x[t]}function f(x){return u(x)?.queries}function h(x,I){return f(x)?.[I]}function p(x){return u(x)?.mutations}function g(x){return u(x)?.config}function y(x,I,M){return R=>{if(R===ar)return n(i,M);const P=e({queryArgs:R,endpointDefinition:I,endpointName:x});return n(H=>h(H,P)??Yx,M)}}function _(x,I){return y(x,I,l)}function S(x,I){const{infiniteQueryOptions:M}=I;function R(P){const V={...P,...$x(P.status)},{isLoading:H,isError:B,direction:z}=V,G=z==="forward",F=z==="backward";return{...V,hasNextPage:A(M,V.data,V.originalArgs),hasPreviousPage:k(M,V.data,V.originalArgs),isFetchingNextPage:H&&G,isFetchingPreviousPage:H&&F,isFetchNextPageError:B&&G,isFetchPreviousPageError:B&&F}}return y(x,I,R)}function w(){return x=>{let I;return typeof x=="object"?I=lu(x)??ar:I=x,n(I===ar?o:P=>u(P)?.mutations?.[I]??Wx,l)}}function O(x,I){const M=x[t],R=new Set;for(const P of I.filter(gh).map(cv)){const V=M.provided.tags[P.type];if(!V)continue;let H=(P.id!==void 0?V[P.id]:Bx(Object.values(V)))??[];for(const B of H)R.add(B)}return Bx(Array.from(R.values()).map(P=>{const V=M.queries[P];return V?[{queryCacheKey:P,endpointName:V.endpointName,originalArgs:V.originalArgs}]:[]}))}function T(x,I){return Object.values(f(x)).filter(M=>M?.endpointName===I&&M.status!=="uninitialized").map(M=>M.originalArgs)}function A(x,I,M){return I?dv(x,I,M)!=null:!1}function k(x,I,M){return!I||!x.getPreviousPageParam?!1:VI(x,I,M)!=null}}var Qx=WeakMap?new WeakMap:void 0,Kx=({endpointName:e,queryArgs:t})=>{let n="";const i=Qx?.get(t);if(typeof i=="string")n=i;else{const o=JSON.stringify(t,(l,u)=>(u=typeof u=="bigint"?{$bigint:u.toString()}:u,u=us(u)?Object.keys(u).sort().reduce((f,h)=>(f[h]=u[h],f),{}):u,u));us(t)&&Qx?.set(t,o),n=o}return`${e}(${n})`};function WI(...e){return function(n){const i=Yf(p=>n.extractRehydrationInfo?.(p,{reducerPath:n.reducerPath??"api"})),o={reducerPath:"api",keepUnusedDataFor:60,refetchOnMountOrArgChange:!1,refetchOnFocus:!1,refetchOnReconnect:!1,invalidationBehavior:"delayed",...n,extractRehydrationInfo:i,serializeQueryArgs(p){let g=Kx;if("serializeQueryArgs"in p.endpointDefinition){const y=p.endpointDefinition.serializeQueryArgs;g=_=>{const S=y(_);return typeof S=="string"?S:Kx({..._,queryArgs:S})}}else n.serializeQueryArgs&&(g=n.serializeQueryArgs);return g(p)},tagTypes:[...n.tagTypes||[]]},l={endpointDefinitions:{},batch(p){p()},apiUid:Jv(),extractRehydrationInfo:i,hasRehydrationInfo:Yf(p=>i(p)!=null)},u={injectEndpoints:h,enhanceEndpoints({addTagTypes:p,endpoints:g}){if(p)for(const y of p)o.tagTypes.includes(y)||o.tagTypes.push(y);if(g)for(const[y,_]of Object.entries(g))typeof _=="function"?_(l.endpointDefinitions[y]):Object.assign(l.endpointDefinitions[y]||{},_);return u}},f=e.map(p=>p.init(u,o,l));function h(p){const g=p.endpoints({query:y=>({...y,type:"query"}),mutation:y=>({...y,type:"mutation"}),infiniteQuery:y=>({...y,type:"infinitequery"})});for(const[y,_]of Object.entries(g)){if(p.overrideExisting!==!0&&y in l.endpointDefinitions){if(p.overrideExisting==="throw")throw new Error(hr(39));continue}l.endpointDefinitions[y]=_;for(const S of f)S.injectEndpoint(y,_)}return u}return u.injectEndpoints({endpoints:n.endpoints})}}function ni(e,...t){return Object.assign(e,...t)}var $H=({api:e,queryThunk:t,internalState:n,mwApi:i})=>{const o=`${e.reducerPath}/subscriptions`;let l=null,u=null;const{updateSubscriptionOptions:f,unsubscribeQueryResult:h}=e.internalActions,p=(O,T)=>{if(f.match(T)){const{queryCacheKey:k,requestId:x,options:I}=T.payload,M=O.get(k);return M?.has(x)&&M.set(x,I),!0}if(h.match(T)){const{queryCacheKey:k,requestId:x}=T.payload,I=O.get(k);return I&&I.delete(x),!0}if(e.internalActions.removeQueryResult.match(T))return O.delete(T.payload.queryCacheKey),!0;if(t.pending.match(T)){const{meta:{arg:k,requestId:x}}=T,I=av(O,k.queryCacheKey,lv);return k.subscribe&&I.set(x,k.subscriptionOptions??I.get(x)??{}),!0}let A=!1;if(t.rejected.match(T)){const{meta:{condition:k,arg:x,requestId:I}}=T;if(k&&x.subscribe){const M=av(O,x.queryCacheKey,lv);M.set(I,x.subscriptionOptions??M.get(I)??{}),A=!0}}return A},g=()=>n.currentSubscriptions,S={getSubscriptions:g,getSubscriptionCount:O=>g().get(O)?.size??0,isRequestSubscribed:(O,T)=>!!g()?.get(O)?.get(T)};function w(O){return JSON.parse(JSON.stringify(Object.fromEntries([...O].map(([T,A])=>[T,Object.fromEntries(A)]))))}return(O,T)=>{if(l||(l=w(n.currentSubscriptions)),e.util.resetApiState.match(O))return l={},n.currentSubscriptions.clear(),u=null,[!0,!1];if(e.internalActions.internal_getRTKQSubscriptions.match(O))return[!1,S];const A=p(n.currentSubscriptions,O);let k=!0;if(A){u||(u=setTimeout(()=>{const M=w(n.currentSubscriptions),[,R]=NR(l,()=>M);T.next(e.internalActions.subscriptionsUpdated(R)),l=M,u=null},500));const x=typeof O.type=="string"&&!!O.type.startsWith(o),I=t.rejected.match(O)&&O.meta.condition&&!!O.meta.arg.subscribe;k=!x&&!I}return[k,!1]}},zH=2147483647/1e3-1,BH=({reducerPath:e,api:t,queryThunk:n,context:i,internalState:o,selectors:{selectQueryEntry:l,selectConfig:u},getRunningQueryThunk:f,mwApi:h})=>{const{removeQueryResult:p,unsubscribeQueryResult:g,cacheEntriesUpserted:y}=t.internalActions,_=o.runningQueries.get(h.dispatch),S=pi(g.match,n.fulfilled,n.rejected,y.match);function w(x){const I=o.currentSubscriptions.get(x);if(!I)return!1;const M=I.size>0,R=_?.[x]!==void 0;return M||R}const O={},T=(x,I,M)=>{const R=I.getState(),P=u(R);if(S(x)){let V;if(y.match(x))V=x.payload.map(H=>H.queryDescription.queryCacheKey);else{const{queryCacheKey:H}=g.match(x)?x.payload:x.meta.arg;V=[H]}A(V,I,P)}if(t.util.resetApiState.match(x))for(const[V,H]of Object.entries(O))H&&clearTimeout(H),delete O[V];if(i.hasRehydrationInfo(x)){const{queries:V}=i.extractRehydrationInfo(x);A(Object.keys(V),I,P)}};function A(x,I,M){const R=I.getState();for(const P of x){const V=l(R,P);V?.endpointName&&k(P,V.endpointName,I,M)}}function k(x,I,M,R){const V=i.endpointDefinitions[I]?.keepUnusedDataFor??R.keepUnusedDataFor;if(V===1/0)return;const H=Math.max(0,Math.min(V,zH));if(!w(x)){const B=O[x];B&&clearTimeout(B),O[x]=setTimeout(()=>{if(!w(x)){const z=l(M.getState(),x);z?.endpointName&&M.dispatch(f(z.endpointName,z.originalArgs))?.abort(),M.dispatch(p({queryCacheKey:x}))}delete O[x]},H*1e3)}}return T},Xx=new Error("Promise never resolved before cacheEntryRemoved."),HH=({api:e,reducerPath:t,context:n,queryThunk:i,mutationThunk:o,internalState:l,selectors:{selectQueryEntry:u,selectApiState:f}})=>{const h=Hy(i),p=Hy(o),g=ds(i,o),y={};function _(A,k,x){const I=y[A];I?.valueResolved&&(I.valueResolved({data:k,meta:x}),delete I.valueResolved)}function S(A){const k=y[A];k&&(delete y[A],k.cacheEntryRemoved())}const w=(A,k,x)=>{const I=O(A);function M(R,P,V,H){const B=u(x,P),z=u(k.getState(),P);!B&&z&&T(R,H,P,k,V)}if(i.pending.match(A))M(A.meta.arg.endpointName,I,A.meta.requestId,A.meta.arg.originalArgs);else if(e.internalActions.cacheEntriesUpserted.match(A))for(const{queryDescription:R,value:P}of A.payload){const{endpointName:V,originalArgs:H,queryCacheKey:B}=R;M(V,B,A.meta.requestId,H),_(B,P,{})}else if(o.pending.match(A))k.getState()[t].mutations[I]&&T(A.meta.arg.endpointName,A.meta.arg.originalArgs,I,k,A.meta.requestId);else if(g(A))_(I,A.payload,A.meta.baseQueryMeta);else if(e.internalActions.removeQueryResult.match(A)||e.internalActions.removeMutationResult.match(A))S(I);else if(e.util.resetApiState.match(A))for(const R of Object.keys(y))S(R)};function O(A){return h(A)?A.meta.arg.queryCacheKey:p(A)?A.meta.arg.fixedCacheKey??A.meta.requestId:e.internalActions.removeQueryResult.match(A)?A.payload.queryCacheKey:e.internalActions.removeMutationResult.match(A)?lu(A.payload):""}function T(A,k,x,I,M){const R=n.endpointDefinitions[A],P=R?.onCacheEntryAdded;if(!P)return;const V={},H=new Promise(ue=>{V.cacheEntryRemoved=ue}),B=Promise.race([new Promise(ue=>{V.valueResolved=ue}),H.then(()=>{throw Xx})]);B.catch(()=>{}),y[x]=V;const z=e.endpoints[A].select(yh(R)?k:x),G=I.dispatch((ue,U,ee)=>ee),F={...I,getCacheEntry:()=>z(I.getState()),requestId:M,extra:G,updateCachedData:yh(R)?ue=>I.dispatch(e.util.updateQueryData(A,k,ue)):void 0,cacheDataLoaded:B,cacheEntryRemoved:H},K=P(k,F);Promise.resolve(K).catch(ue=>{if(ue!==Xx)throw ue})}return w},FH=({api:e,context:{apiUid:t},reducerPath:n})=>(i,o)=>{e.util.resetApiState.match(i)&&o.dispatch(e.internalActions.middlewareRegistered(t))},qH=({reducerPath:e,context:t,context:{endpointDefinitions:n},mutationThunk:i,queryThunk:o,api:l,assertTagType:u,refetchQuery:f,internalState:h})=>{const{removeQueryResult:p}=l.internalActions,g=pi(ds(i),zh(i)),y=pi(ds(i,o),$a(i,o));let _=[];const S=(T,A)=>{g(T)?O(GI(T,"invalidatesTags",n,u),A):y(T)?O([],A):l.util.invalidateTags.match(T)&&O(J_(T.payload,void 0,void 0,void 0,void 0,u),A)};function w(T){const{queries:A,mutations:k}=T;for(const x of[A,k])for(const I in x)if(x[I]?.status==="pending")return!0;return!1}function O(T,A){const k=A.getState(),x=k[e];if(_.push(...T),x.config.invalidationBehavior==="delayed"&&w(x))return;const I=_;if(_=[],I.length===0)return;const M=l.util.selectInvalidatedBy(k,I);t.batch(()=>{const R=Array.from(M.values());for(const{queryCacheKey:P}of R){const V=x.queries[P],H=av(h.currentSubscriptions,P,lv);V&&(H.size===0?A.dispatch(p({queryCacheKey:P})):V.status!=="uninitialized"&&A.dispatch(f(V)))}})}return S},VH=({reducerPath:e,queryThunk:t,api:n,refetchQuery:i,internalState:o})=>{const{currentPolls:l,currentSubscriptions:u}=o,f=new Set;let h=null;const p=(T,A)=>{(n.internalActions.updateSubscriptionOptions.match(T)||n.internalActions.unsubscribeQueryResult.match(T))&&g(T.payload.queryCacheKey,A),(t.pending.match(T)||t.rejected.match(T)&&T.meta.condition)&&g(T.meta.arg.queryCacheKey,A),(t.fulfilled.match(T)||t.rejected.match(T)&&!T.meta.condition)&&y(T.meta.arg,A),n.util.resetApiState.match(T)&&(w(),h&&(clearTimeout(h),h=null),f.clear())};function g(T,A){f.add(T),h||(h=setTimeout(()=>{for(const k of f)_({queryCacheKey:k},A);f.clear(),h=null},0))}function y({queryCacheKey:T},A){const k=A.getState()[e],x=k.queries[T],I=u.get(T);if(!x||x.status==="uninitialized")return;const{lowestPollingInterval:M,skipPollingIfUnfocused:R}=O(I);if(!Number.isFinite(M))return;const P=l.get(T);P?.timeout&&(clearTimeout(P.timeout),P.timeout=void 0);const V=Date.now()+M;l.set(T,{nextPollTimestamp:V,pollingInterval:M,timeout:setTimeout(()=>{(k.config.focused||!R)&&A.dispatch(i(x)),y({queryCacheKey:T},A)},M)})}function _({queryCacheKey:T},A){const x=A.getState()[e].queries[T],I=u.get(T);if(!x||x.status==="uninitialized")return;const{lowestPollingInterval:M}=O(I);if(!Number.isFinite(M)){S(T);return}const R=l.get(T),P=Date.now()+M;(!R||P<R.nextPollTimestamp)&&y({queryCacheKey:T},A)}function S(T){const A=l.get(T);A?.timeout&&clearTimeout(A.timeout),l.delete(T)}function w(){for(const T of l.keys())S(T)}function O(T=new Map){let A=!1,k=Number.POSITIVE_INFINITY;for(const x of T.values())x.pollingInterval&&(k=Math.min(x.pollingInterval,k),A=x.skipPollingIfUnfocused||A);return{lowestPollingInterval:k,skipPollingIfUnfocused:A}}return p},GH=({api:e,context:t,queryThunk:n,mutationThunk:i})=>{const o=Zv(n,i),l=$a(n,i),u=ds(n,i),f={};return(p,g)=>{if(o(p)){const{requestId:y,arg:{endpointName:_,originalArgs:S}}=p.meta,w=t.endpointDefinitions[_],O=w?.onQueryStarted;if(O){const T={},A=new Promise((M,R)=>{T.resolve=M,T.reject=R});A.catch(()=>{}),f[y]=T;const k=e.endpoints[_].select(yh(w)?S:y),x=g.dispatch((M,R,P)=>P),I={...g,getCacheEntry:()=>k(g.getState()),requestId:y,extra:x,updateCachedData:yh(w)?M=>g.dispatch(e.util.updateQueryData(_,S,M)):void 0,queryFulfilled:A};O(S,I)}}else if(u(p)){const{requestId:y,baseQueryMeta:_}=p.meta;f[y]?.resolve({data:p.payload,meta:_}),delete f[y]}else if(l(p)){const{requestId:y,rejectedWithValue:_,baseQueryMeta:S}=p.meta;f[y]?.reject({error:p.payload??p.error,isUnhandledError:!_,meta:S}),delete f[y]}}},YH=({reducerPath:e,context:t,api:n,refetchQuery:i,internalState:o})=>{const{removeQueryResult:l}=n.internalActions,u=(h,p)=>{X_.match(h)&&f(p,"refetchOnFocus"),Z_.match(h)&&f(p,"refetchOnReconnect")};function f(h,p){const g=h.getState()[e],y=g.queries,_=o.currentSubscriptions;t.batch(()=>{for(const S of _.keys()){const w=y[S],O=_.get(S);if(!O||!w)continue;const T=[...O.values()];(T.some(k=>k[p]===!0)||T.every(k=>k[p]===void 0)&&g.config[p])&&(O.size===0?h.dispatch(l({queryCacheKey:S})):w.status!=="uninitialized"&&h.dispatch(i(w)))}})}return u};function WH(e){const{reducerPath:t,queryThunk:n,api:i,context:o,internalState:l}=e,{apiUid:u}=o,f={invalidateTags:fr(`${t}/invalidateTags`)},h=_=>_.type.startsWith(`${t}/`),p=[FH,BH,qH,VH,HH,GH];return{middleware:_=>{let S=!1;const w={...e,internalState:l,refetchQuery:y,isThisApiSliceAction:h,mwApi:_},O=p.map(k=>k(w)),T=$H(w),A=YH(w);return k=>x=>{if(!CR(x))return k(x);S||(S=!0,_.dispatch(i.internalActions.middlewareRegistered(u)));const I={..._,next:k},M=_.getState(),[R,P]=T(x,I,M);let V;if(R?V=k(x):V=P,_.getState()[t]&&(A(x,I,M),h(x)||o.hasRehydrationInfo(x)))for(const H of O)H(x,I,M);return V}},actions:f};function y(_){return e.api.endpoints[_.endpointName].initiate(_.originalArgs,{subscribe:!1,forceRefetch:!0})}}var Zx=Symbol(),QI=({createSelector:e=bi}={})=>({name:Zx,init(t,{baseQuery:n,tagTypes:i,reducerPath:o,serializeQueryArgs:l,keepUnusedDataFor:u,refetchOnMountOrArgChange:f,refetchOnFocus:h,refetchOnReconnect:p,invalidationBehavior:g,onSchemaFailure:y,catchSchemaFailure:_,skipSchemaValidation:S},w){hj();const O=pe=>pe;Object.assign(t,{reducerPath:o,endpoints:{},internalActions:{onOnline:Z_,onOffline:FI,onFocus:X_,onFocusLost:HI},util:{}});const T=UH({serializeQueryArgs:l,reducerPath:o,createSelector:e}),{selectInvalidatedBy:A,selectCachedArgsForQuery:k,buildQuerySelector:x,buildInfiniteQuerySelector:I,buildMutationSelector:M}=T;ni(t.util,{selectInvalidatedBy:A,selectCachedArgsForQuery:k});const{queryThunk:R,infiniteQueryThunk:P,mutationThunk:V,patchQueryData:H,updateQueryData:B,upsertQueryData:z,prefetch:G,buildMatchThunkActions:F}=PH({baseQuery:n,reducerPath:o,context:w,api:t,serializeQueryArgs:l,assertTagType:O,selectors:T,onSchemaFailure:y,catchSchemaFailure:_,skipSchemaValidation:S}),{reducer:K,actions:ue}=jH({context:w,queryThunk:R,mutationThunk:V,serializeQueryArgs:l,reducerPath:o,assertTagType:O,config:{refetchOnFocus:h,refetchOnReconnect:p,refetchOnMountOrArgChange:f,keepUnusedDataFor:u,reducerPath:o,invalidationBehavior:g}});ni(t.util,{patchQueryData:H,updateQueryData:B,upsertQueryData:z,prefetch:G,resetApiState:ue.resetApiState,upsertQueryEntries:ue.cacheEntriesUpserted}),ni(t.internalActions,ue);const U={currentSubscriptions:new Map,currentPolls:new Map,runningQueries:new Map,runningMutations:new Map},{buildInitiateQuery:ee,buildInitiateInfiniteQuery:ne,buildInitiateMutation:ae,getRunningMutationThunk:N,getRunningMutationsThunk:X,getRunningQueriesThunk:le,getRunningQueryThunk:ie}=LH({queryThunk:R,mutationThunk:V,infiniteQueryThunk:P,api:t,serializeQueryArgs:l,context:w,internalState:U});ni(t.util,{getRunningMutationThunk:N,getRunningMutationsThunk:X,getRunningQueryThunk:ie,getRunningQueriesThunk:le});const{middleware:de,actions:me}=WH({reducerPath:o,context:w,queryThunk:R,mutationThunk:V,infiniteQueryThunk:P,api:t,assertTagType:O,selectors:T,getRunningQueryThunk:ie,internalState:U});return ni(t.util,me),ni(t,{reducer:K,middleware:de}),{name:Zx,injectEndpoint(pe,Ae){const be=t,De=be.endpoints[pe]??={};rp(Ae)&&ni(De,{name:pe,select:x(pe,Ae),initiate:ee(pe,Ae)},F(R,pe)),NH(Ae)&&ni(De,{name:pe,select:M(),initiate:ae(pe)},F(V,pe)),ip(Ae)&&ni(De,{name:pe,select:I(pe,Ae),initiate:ne(pe,Ae)},F(R,pe))}}}});QI();function of(e){return e.replace(e[0],e[0].toUpperCase())}function QH(e){return e.type==="query"}function KH(e){return e.type==="mutation"}function KI(e){return e.type==="infinitequery"}function yc(e,...t){return Object.assign(e,...t)}var oy=Symbol();function ay(e){const t=C.useRef(e),n=C.useMemo(()=>K_(t.current,e),[e]);return C.useEffect(()=>{t.current!==n&&(t.current=n)},[n]),n}function af(e){const t=C.useRef(e);return C.useEffect(()=>{Ec(t.current,e)||(t.current=e)},[e]),Ec(t.current,e)?t.current:e}var XH=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ZH=XH(),JH=()=>typeof navigator<"u"&&navigator.product==="ReactNative",e9=JH(),t9=()=>ZH||e9?C.useLayoutEffect:C.useEffect,n9=t9(),Jx=e=>e.isUninitialized?{...e,isUninitialized:!1,isFetching:!0,isLoading:e.data===void 0,status:BI.pending}:e;function ly(e,...t){const n={};return t.forEach(i=>{n[i]=e[i]}),n}var cy=["data","status","isLoading","isSuccess","isError","error"];function r9({api:e,moduleOptions:{batch:t,hooks:{useDispatch:n,useSelector:i,useStore:o},unstable__sideEffectsInRender:l,createSelector:u},serializeQueryArgs:f,context:h}){const p=l?I=>I():C.useEffect;return{buildQueryHooks:A,buildInfiniteQueryHooks:k,buildMutationHook:x,usePrefetch:_};function g(I,M,R){if(M?.endpointName&&I.isUninitialized){const{endpointName:G}=M,F=h.endpointDefinitions[G];R!==ar&&f({queryArgs:M.originalArgs,endpointDefinition:F,endpointName:G})===f({queryArgs:R,endpointDefinition:F,endpointName:G})&&(M=void 0)}let P=I.isSuccess?I.data:M?.data;P===void 0&&(P=I.data);const V=P!==void 0,H=I.isLoading,B=(!M||M.isLoading||M.isUninitialized)&&!V&&H,z=I.isSuccess||V&&(H&&!M?.isError||I.isUninitialized);return{...I,data:P,currentData:I.data,isFetching:H,isLoading:B,isSuccess:z}}function y(I,M,R){if(M?.endpointName&&I.isUninitialized){const{endpointName:G}=M,F=h.endpointDefinitions[G];R!==ar&&f({queryArgs:M.originalArgs,endpointDefinition:F,endpointName:G})===f({queryArgs:R,endpointDefinition:F,endpointName:G})&&(M=void 0)}let P=I.isSuccess?I.data:M?.data;P===void 0&&(P=I.data);const V=P!==void 0,H=I.isLoading,B=(!M||M.isLoading||M.isUninitialized)&&!V&&H,z=I.isSuccess||H&&V;return{...I,data:P,currentData:I.data,isFetching:H,isLoading:B,isSuccess:z}}function _(I,M){const R=n(),P=af(M);return C.useCallback((V,H)=>R(e.util.prefetch(I,V,{...P,...H})),[I,R,P])}function S(I,M,{refetchOnReconnect:R,refetchOnFocus:P,refetchOnMountOrArgChange:V,skip:H=!1,pollingInterval:B=0,skipPollingIfUnfocused:z=!1,...G}={}){const{initiate:F}=e.endpoints[I],K=n(),ue=C.useRef(void 0);if(!ue.current){const me=K(e.internalActions.internal_getRTKQSubscriptions());ue.current=me}const U=ay(H?ar:M),ee=af({refetchOnReconnect:R,refetchOnFocus:P,pollingInterval:B,skipPollingIfUnfocused:z}),ne=G.initialPageParam,ae=af(ne),N=C.useRef(void 0);let{queryCacheKey:X,requestId:le}=N.current||{},ie=!1;X&&le&&(ie=ue.current.isRequestSubscribed(X,le));const de=!ie&&N.current!==void 0;return p(()=>{de&&(N.current=void 0)},[de]),p(()=>{const me=N.current;if(U===ar){me?.unsubscribe(),N.current=void 0;return}const pe=N.current?.subscriptionOptions;if(!me||me.arg!==U){me?.unsubscribe();const Ae=K(F(U,{subscriptionOptions:ee,forceRefetch:V,...KI(h.endpointDefinitions[I])?{initialPageParam:ae}:{}}));N.current=Ae}else ee!==pe&&me.updateSubscriptionOptions(ee)},[K,F,V,U,ee,de,ae,I]),[N,K,F,ee]}function w(I,M){return(P,{skip:V=!1,selectFromResult:H}={})=>{const{select:B}=e.endpoints[I],z=ay(V?ar:P),G=C.useRef(void 0),F=C.useMemo(()=>u([B(z),(ne,ae)=>ae,ne=>z],M,{memoizeOptions:{resultEqualityCheck:Ec}}),[B,z]),K=C.useMemo(()=>H?u([F],H,{devModeChecks:{identityFunctionCheck:"never"}}):F,[F,H]),ue=i(ne=>K(ne,G.current),Ec),U=o(),ee=F(U.getState(),G.current);return n9(()=>{G.current=ee},[ee]),ue}}function O(I){C.useEffect(()=>()=>{I.current?.unsubscribe?.(),I.current=void 0},[I])}function T(I){if(!I.current)throw new Error(hr(38));return I.current.refetch()}function A(I){const M=(V,H={})=>{const[B]=S(I,V,H);return O(B),C.useMemo(()=>({refetch:()=>T(B)}),[B])},R=({refetchOnReconnect:V,refetchOnFocus:H,pollingInterval:B=0,skipPollingIfUnfocused:z=!1}={})=>{const{initiate:G}=e.endpoints[I],F=n(),[K,ue]=C.useState(oy),U=C.useRef(void 0),ee=af({refetchOnReconnect:V,refetchOnFocus:H,pollingInterval:B,skipPollingIfUnfocused:z});p(()=>{const X=U.current?.subscriptionOptions;ee!==X&&U.current?.updateSubscriptionOptions(ee)},[ee]);const ne=C.useRef(ee);p(()=>{ne.current=ee},[ee]);const ae=C.useCallback(function(X,le=!1){let ie;return t(()=>{U.current?.unsubscribe(),U.current=ie=F(G(X,{subscriptionOptions:ne.current,forceRefetch:!le})),ue(X)}),ie},[F,G]),N=C.useCallback(()=>{U.current?.queryCacheKey&&F(e.internalActions.removeQueryResult({queryCacheKey:U.current?.queryCacheKey}))},[F]);return C.useEffect(()=>()=>{U?.current?.unsubscribe()},[]),C.useEffect(()=>{K!==oy&&!U.current&&ae(K,!0)},[K,ae]),C.useMemo(()=>[ae,K,{reset:N}],[ae,K,N])},P=w(I,g);return{useQueryState:P,useQuerySubscription:M,useLazyQuerySubscription:R,useLazyQuery(V){const[H,B,{reset:z}]=R(V),G=P(B,{...V,skip:B===oy}),F=C.useMemo(()=>({lastArg:B}),[B]);return C.useMemo(()=>[H,{...G,reset:z},F],[H,G,z,F])},useQuery(V,H){const B=M(V,H),z=P(V,{selectFromResult:V===ar||H?.skip?void 0:Jx,...H}),G=ly(z,...cy);return C.useDebugValue(G),C.useMemo(()=>({...z,...B}),[z,B])}}}function k(I){const M=(P,V={})=>{const[H,B,z,G]=S(I,P,V),F=C.useRef(G);p(()=>{F.current=G},[G]);const K=C.useCallback(function(ee,ne){let ae;return t(()=>{H.current?.unsubscribe(),H.current=ae=B(z(ee,{subscriptionOptions:F.current,direction:ne}))}),ae},[H,B,z]);O(H);const ue=ay(V.skip?ar:P),U=C.useCallback(()=>T(H),[H]);return C.useMemo(()=>({trigger:K,refetch:U,fetchNextPage:()=>K(ue,"forward"),fetchPreviousPage:()=>K(ue,"backward")}),[U,K,ue])},R=w(I,y);return{useInfiniteQueryState:R,useInfiniteQuerySubscription:M,useInfiniteQuery(P,V){const{refetch:H,fetchNextPage:B,fetchPreviousPage:z}=M(P,V),G=R(P,{selectFromResult:P===ar||V?.skip?void 0:Jx,...V}),F=ly(G,...cy,"hasNextPage","hasPreviousPage");return C.useDebugValue(F),C.useMemo(()=>({...G,fetchNextPage:B,fetchPreviousPage:z,refetch:H}),[G,B,z,H])}}}function x(I){return({selectFromResult:M,fixedCacheKey:R}={})=>{const{select:P,initiate:V}=e.endpoints[I],H=n(),[B,z]=C.useState();C.useEffect(()=>()=>{B?.arg.fixedCacheKey||B?.reset()},[B]);const G=C.useCallback(function(X){const le=H(V(X,{fixedCacheKey:R}));return z(le),le},[H,V,R]),{requestId:F}=B||{},K=C.useMemo(()=>P({fixedCacheKey:R,requestId:B?.requestId}),[R,B,P]),ue=C.useMemo(()=>M?u([K],M):K,[M,K]),U=i(ue,Ec),ee=R==null?B?.arg.originalArgs:void 0,ne=C.useCallback(()=>{t(()=>{B&&z(void 0),R&&H(e.internalActions.removeMutationResult({requestId:F,fixedCacheKey:R}))})},[H,R,B,F]),ae=ly(U,...cy,"endpointName");C.useDebugValue(ae);const N=C.useMemo(()=>({...U,originalArgs:ee,reset:ne}),[U,ee,ne]);return C.useMemo(()=>[G,N],[G,N])}}}var i9=Symbol(),s9=({batch:e=XN,hooks:t={useDispatch:kT,useSelector:LT,useStore:MT},createSelector:n=bi,unstable__sideEffectsInRender:i=!1,...o}={})=>({name:i9,init(l,{serializeQueryArgs:u},f){const h=l,{buildQueryHooks:p,buildInfiniteQueryHooks:g,buildMutationHook:y,usePrefetch:_}=r9({api:l,moduleOptions:{batch:e,hooks:t,unstable__sideEffectsInRender:i,createSelector:n},serializeQueryArgs:u,context:f});return yc(h,{usePrefetch:_}),yc(f,{batch:e}),{injectEndpoint(S,w){if(QH(w)){const{useQuery:O,useLazyQuery:T,useLazyQuerySubscription:A,useQueryState:k,useQuerySubscription:x}=p(S);yc(h.endpoints[S],{useQuery:O,useLazyQuery:T,useLazyQuerySubscription:A,useQueryState:k,useQuerySubscription:x}),l[`use${of(S)}Query`]=O,l[`useLazy${of(S)}Query`]=T}if(KH(w)){const O=y(S);yc(h.endpoints[S],{useMutation:O}),l[`use${of(S)}Mutation`]=O}else if(KI(w)){const{useInfiniteQuery:O,useInfiniteQuerySubscription:T,useInfiniteQueryState:A}=g(S);yc(h.endpoints[S],{useInfiniteQuery:O,useInfiniteQuerySubscription:T,useInfiniteQueryState:A}),l[`use${of(S)}InfiniteQuery`]=O}}}}}),o9=WI(QI(),s9());const XI=e=>({id:String(e.id),name:e.name,imageUrl:e.picture_url,display:!0}),a9=e=>e.results.map(XI).sort((n,i)=>n.name.localeCompare(i.name)),ZI=e=>{const t=e.image.original_height||48,n=e.image.original_width||48;return{id:String(e.id),name:e.name,iconUrl:e.image.url.replace("{height}",t).replace("{width}",n)}},l9=e=>e.results.map(ZI).sort((n,i)=>n.name.localeCompare(i.name)),c9=e=>{const t=e.instructors[0],n=t?XI(t):{id:"0",name:"Unknown Instructor",imageUrl:"",display:!1},i=ke.getBookableStatus(e),o=new Date(e.starts_at),u=(new Date(e.ends_at).getTime()-o.getTime())/1e3;return Number.isNaN(u)&&Lv("Computed invalid duration",{extra:{rawClass:e}}),{...e,id:String(e.id),name:e.name,start:e.starts_at,end:e.ends_at,customerUrl:e.customer_url,duration:u,discipline:ZI(e.offering_type.category),instructor:n,status:i}},u9=e=>e.results.map(c9),d9=["id","name","max_occupancy","occupancy","attending_count","starts_at","ends_at","waiting_count","active_registration_status","category.name","venue","customer_url","description"],f9=["instructors","active_registration_status","category","offering_type","offering_type.category","venue","suggested_booking_action"],Af=o9({reducerPath:"pelotonApi",baseQuery:OH({baseUrl:`${ke.PELOTON_CORS_PROXY}/${ke.PELOTON_API_BASE}/`}),endpoints:e=>({getClasses:e.query({queryFn:async t=>{try{const n=ke.getPelotonHeaders(t),i=ke.buildEventsUrl({fields:d9,expand:f9,corsProxy:!0}),o=await ke.fetchAllPelotonPages(i,async l=>{const u=await fetch(l,{headers:n});if(!u.ok)throw new Error(`${u.status}: ${await u.text()}`);return u.json()},!0);return{data:u9({results:o})}}catch(n){return{error:{status:"FETCH_ERROR",error:String(n)}}}}}),getDisciplines:e.query({query:t=>({url:`offering_type_categories?${new URLSearchParams({sort:"name"})}`,method:"GET",headers:ke.getPelotonHeaders(t)}),transformResponse:t=>l9(t)}),getInstructors:e.query({query:t=>({url:`instructors?${new URLSearchParams({sort:"name"})}`,method:"GET",headers:ke.getPelotonHeaders(t)}),transformResponse:t=>a9(t)})})}),{useGetClassesQuery:JI,useGetDisciplinesQuery:eb,useGetInstructorsQuery:tb}=Af,h9=e=>{if("error"in e&&typeof e.error=="string")return e.error;if("message"in e&&typeof e.message=="string")return e.message},p9=D.label`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  cursor: pointer;
  user-select: none;
  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.$checked?`${e.theme.colors.accent}0a`:"transparent"};
  transition: background-color 0.15s;

  ${UI}
`,m9=D.span`
  color: ${e=>e.theme.colors.main};
  font-size: 14px;
`,g9=D.input`
  accent-color: ${e=>e.theme.colors.accent};
`,eD=({value:e,checked:t,onChange:n,label:i,icon:o})=>{const l=C.useId();return v.jsxs(p9,{$checked:t,htmlFor:l,children:[v.jsx(g9,{type:"checkbox",id:l,value:e,checked:t,onChange:n}),o,v.jsx(m9,{children:i})]})},eT=D.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`,tT=D.legend`
  font-weight: 600;
  font-size: 18px;
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,nT=D.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  margin: 0 0 12px;
`,rT=D.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
`,lf=D.button`
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
`,tD=D.div`
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
`,iT=D.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
  margin-left: auto;
`,vh=D.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  padding: 24px;
  text-align: center;
`,nD=D.p`
  color: #d93025;
  font-size: 14px;
  padding: 16px;
`,rD=D.button`
  border: none;
  background: none;
  color: ${e=>e.theme.colors.accent};
  cursor: pointer;
  font-family: inherit;
  font-size: 14px;
  text-decoration: underline;
  padding: 0;
`,y9=D.div`
  margin-top: 32px;

  ${Te`
    margin-top: 24px;
  `}
`,v9=({studioId:e,selectedInstructors:t,setSelectedInstructors:n,selectedDisciplines:i,setSelectedDisciplines:o})=>{const l=tb(e),u=eb(e),f=C.useRef(t),h=C.useRef(i);C.useEffect(()=>{const S=f.current;if(!l.currentData||!ke.isNotEmpty(S))return;const w=new Set(l.currentData.map(T=>T.id)),O=S.filter(T=>w.has(T));O.length<S.length&&(n(O),f.current=O)},[l.currentData,n]),C.useEffect(()=>{const S=h.current;if(!u.currentData||!ke.isNotEmpty(S))return;const w=new Set(u.currentData.map(T=>String(T.id))),O=S.filter(T=>w.has(String(T)));O.length<S.length&&(o(O),h.current=O)},[u.currentData,o]);const p=S=>{if(!ke.isNotEmpty(t))return;const w=t.includes(S);n(w?t.filter(O=>O!==S):[...t,S])},g=S=>{if(!ke.isNotEmpty(i))return;const w=i.includes(S);o(w?i.filter(O=>O!==S):[...i,S])},y=ke.isNotEmpty(t),_=ke.isNotEmpty(i);return v.jsxs("div",{children:[v.jsxs(eT,{children:[v.jsx(tT,{children:"Instructors"}),v.jsx(nT,{children:"Filter by specific instructors or get alerts for all of them."}),v.jsxs(rT,{children:[v.jsx(lf,{type:"button",$active:!y,onClick:()=>n(null),children:"Any instructor"}),v.jsx(lf,{type:"button",$active:y,onClick:()=>{y||n([])},children:"Specific instructors"}),y&&t.length>0&&v.jsxs(iT,{children:[t.length," selected"]})]}),y&&v.jsx(_9,{query:l,selectedIds:t,onToggle:p})]}),v.jsx(y9,{}),v.jsxs(eT,{children:[v.jsx(tT,{children:"Disciplines"}),v.jsx(nT,{children:"Filter by class type or get alerts for everything."}),v.jsxs(rT,{children:[v.jsx(lf,{type:"button",$active:!_,onClick:()=>o(null),children:"Any discipline"}),v.jsx(lf,{type:"button",$active:_,onClick:()=>{_||o([])},children:"Specific disciplines"}),_&&i.length>0&&v.jsxs(iT,{children:[i.length," selected"]})]}),_&&v.jsx(b9,{query:u,selectedIds:i,onToggle:g})]})]})},_9=({query:e,selectedIds:t,onToggle:n})=>e.isLoading?v.jsx(vh,{children:"Loading instructors…"}):e.error?v.jsxs(nD,{children:["Couldn't load instructors."," ",v.jsx(rD,{type:"button",onClick:()=>e.refetch(),children:"Try again"})]}):!e.currentData||e.currentData.length===0?v.jsx(vh,{children:"No instructors found for this studio."}):v.jsx(tD,{role:"group","aria-label":"Instructors",children:e.currentData.map(i=>v.jsx(eD,{value:i.id,checked:t.includes(i.id),onChange:()=>n(i.id),label:i.name,icon:v.jsx(Q_,{instructor:i,size:28})},i.id))}),b9=({query:e,selectedIds:t,onToggle:n})=>e.isLoading?v.jsx(vh,{children:"Loading disciplines…"}):e.error?v.jsxs(nD,{children:["Couldn't load disciplines."," ",v.jsx(rD,{type:"button",onClick:()=>e.refetch(),children:"Try again"})]}):!e.currentData||e.currentData.length===0?v.jsx(vh,{children:"No disciplines found for this studio."}):v.jsx(tD,{role:"group","aria-label":"Disciplines",children:e.currentData.map(i=>v.jsx(eD,{value:i.id,checked:t.includes(i.id),onChange:()=>n(i.id),label:i.name,icon:v.jsx(mh,{discipline:i,size:24})},i.id))}),S9=D.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 16px;
  margin-bottom: 24px;

  ${Te`
    padding: 0;
    margin-bottom: 12px;
  `}
`,w9=D.button`
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
`,E9=D.div`
  flex: 1;
  height: 2px;
  background-color: ${e=>e.$filled?e.theme.colors.accent:e.theme.borderColor};
  transition: background-color 0.2s;
`,x9=D.span`
  position: absolute;
  top: 18px;
  font-size: 10px;
  white-space: nowrap;
  color: ${e=>e.$state==="active"?e.theme.colors.main:e.theme.colors.secondary};
  font-weight: ${e=>e.$state==="active"?600:400};

  ${Te`
    display: none;
  `}
`,T9=D.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`,C9=({steps:e,currentStep:t,onStepClick:n})=>v.jsx(S9,{role:"navigation","aria-label":"Editor steps",children:e.map((i,o)=>{const l=o<t?"completed":o===t?"active":"upcoming";return v.jsxs(T9,{style:{flex:o<e.length-1?1:0},children:[v.jsxs("div",{style:{display:"flex",alignItems:"center",width:"100%"},children:[v.jsx(w9,{$state:l,onClick:()=>{l!=="upcoming"&&n(o)},"aria-label":`Step ${o+1}: ${i}`,"aria-current":l==="active"?"step":void 0,type:"button"}),o<e.length-1&&v.jsx(E9,{$filled:o<t})]}),v.jsx(x9,{$state:l,children:i})]},o)})}),R9=D.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`,A9=D.legend`
  font-weight: 600;
  font-size: 18px;
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,I9=D.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  margin: 0 0 20px;
`,D9=D.div`
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  overflow: hidden;
`,Ks=D.div`
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
`,Xs=D.span`
  font-size: 13px;
  font-weight: 500;
  color: ${e=>e.theme.colors.secondary};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  flex-shrink: 0;
`,Wi=D.span`
  font-size: 14px;
  color: ${e=>e.theme.colors.main};
  text-align: right;
  word-break: break-word;

  ${Te`
    text-align: left;
  `}
`,O9=D.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  justify-content: flex-end;

  ${Te`
    justify-content: flex-start;
  `}
`,N9=D.span`
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  background-color: ${e=>e.theme.colors.secondarySurface};
  color: ${e=>e.theme.colors.main};
`,M9=e=>{if(ke.isAllDay(e))return"All day";const t=hh.find(i=>i.minutes===e.startMin),n=hh.find(i=>i.minutes===e.endMin);return!t||!n?"All day":`${t.label} – ${n.label}`},k9=e=>{switch(e){case"free":return"Open spots only";case"waitlist":return"Open spots or waitlist";case"full":return"Any status"}},L9=({name:e,studioId:t,maxStatus:n,selectedInstructors:i,selectedDisciplines:o,timeRanges:l})=>{const u=ke.STUDIOS[t],f=rs.filter((g,y)=>l[y]),h=l.find(Boolean),p=l.filter(Boolean).every(g=>g&&h&&g.startMin===h.startMin&&g.endMin===h.endMin);return v.jsxs(R9,{children:[v.jsx(A9,{children:"Review your alert"}),v.jsx(I9,{children:"Double-check everything looks right, then hit Save."}),v.jsxs(D9,{children:[e.trim()&&v.jsxs(Ks,{children:[v.jsx(Xs,{children:"Name"}),v.jsx(Wi,{children:e.trim()})]}),v.jsxs(Ks,{children:[v.jsx(Xs,{children:"Studio"}),v.jsx(Wi,{children:u?.location||t})]}),v.jsxs(Ks,{children:[v.jsx(Xs,{children:"Alert on"}),v.jsx(Wi,{children:k9(n)})]}),v.jsxs(Ks,{children:[v.jsx(Xs,{children:"Instructors"}),v.jsx(Wi,{children:i===null?"Any instructor":i.length===0?"None selected":`${i.length} selected`})]}),v.jsxs(Ks,{children:[v.jsx(Xs,{children:"Disciplines"}),v.jsx(Wi,{children:o===null?"Any discipline":o.length===0?"None selected":`${o.length} selected`})]}),v.jsxs(Ks,{children:[v.jsx(Xs,{children:"Days"}),f.length===0?v.jsx(Wi,{children:"No days selected"}):f.length===7?v.jsx(Wi,{children:"Every day"}):v.jsx(O9,{children:f.map(g=>v.jsx(N9,{children:g.slice(0,3)},g))})]}),h&&v.jsxs(Ks,{children:[v.jsx(Xs,{children:"Time window"}),v.jsx(Wi,{children:p?M9(h):"Varies by day"})]})]})]})},P9=D.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`,j9=D.legend`
  font-weight: 600;
  font-size: 18px;
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,U9=D.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  margin: 0 0 16px;
`,$9=D.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,z9=D.div`
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
`,B9=D.label`
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
`,H9=D.input`
  accent-color: ${e=>e.theme.colors.accent};
`,F9=D.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: auto;

  ${Te`
    margin-left: 28px;
    width: calc(100% - 28px);
  `}
`,q9=D.label`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
`,V9=D.input`
  accent-color: ${e=>e.theme.colors.accent};
`,sT=D.select`
  ${bs}
  font-family: inherit;
  font-size: 13px;
  padding: 6px 8px;
  background-color: inherit;
  cursor: pointer;
  color: ${e=>e.theme.colors.main};

  ${Te`
    flex: 1;
    min-width: 0;
  `}
`,G9=D.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,Y9=D.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  flex-wrap: wrap;
`,uy=D.button`
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
`,W9=({timeRanges:e,setTimeRanges:t})=>{const n=e.filter(Boolean).length,i=C.useRef(rs.map(()=>{})),o=C.useCallback(g=>{const y=[...e];y[g]=y[g]?null:ke.DEFAULT_TIME_RANGE,t(y)},[e,t]),l=C.useCallback(g=>{const y=e[g];if(!y)return;const _=[...e];ke.isAllDay(y)?_[g]=i.current[g]??ke.SPECIFIC_DEFAULT_TIME_RANGE:(i.current[g]=y,_[g]=ke.ALL_DAY_TIME_RANGE),t(_)},[e,t]),u=C.useCallback((g,y,_)=>{const S=[...e],w=S[g];w&&(y==="startMin"?S[g]={startMin:_,endMin:w.endMin===0||w.endMin>=_?w.endMin:0}:S[g]={...w,endMin:_},t(S))},[e,t]),f=()=>{t(rs.map(()=>ke.DEFAULT_TIME_RANGE))},h=()=>{t(rs.map(()=>null))},p=()=>{const g=e.find(Boolean);g&&t(e.map(y=>y?{...g}:null))};return v.jsxs(P9,{children:[v.jsx(j9,{children:"Days & times"}),v.jsx(U9,{children:"Choose which days and time windows to monitor. Alerts fire when a matching class falls within these windows (in the studio's timezone)."}),v.jsxs(Y9,{children:[v.jsx(uy,{type:"button",onClick:f,children:"Select all days"}),n>0&&v.jsx(uy,{type:"button",onClick:h,children:"Clear all"}),n>1&&v.jsx(uy,{type:"button",onClick:p,children:"Copy time to all"})]}),v.jsx($9,{children:rs.map((g,y)=>{const _=e[y],S=!!_&&ke.isAllDay(_);return v.jsxs(z9,{$enabled:!!_,children:[v.jsxs(B9,{htmlFor:`day-${y}`,children:[v.jsx(H9,{type:"checkbox",id:`day-${y}`,checked:!!_,onChange:()=>o(y)}),g]}),_&&v.jsxs(F9,{children:[v.jsxs(q9,{htmlFor:`allday-${y}`,children:[v.jsx(V9,{type:"checkbox",id:`allday-${y}`,checked:S,onChange:()=>l(y)}),"All day"]}),!S&&v.jsxs(v.Fragment,{children:[v.jsx(sT,{value:_.startMin,"aria-label":`${g} start time`,onChange:({target:w})=>{const O=parseInt(w.value);Number.isNaN(O)||u(y,"startMin",O)},children:hh.map(w=>v.jsx("option",{value:w.minutes,children:w.label},w.minutes))}),v.jsx(G9,{children:"to"}),v.jsx(sT,{value:_.endMin,"aria-label":`${g} end time`,onChange:({target:w})=>{const O=parseInt(w.value);Number.isNaN(O)||u(y,"endMin",O)},children:hh.map(w=>v.jsx("option",{value:w.minutes,disabled:w.minutes>0&&w.minutes<_.startMin,children:w.label},w.minutes))})]})]})]},g)})})]})},dy=["Basics","Filters","Schedule","Review"],Q9=D.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
  background-color: white;
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
`,K9=D.div`
  padding: 24px 24px 0;

  ${Te`
    padding: 16px 16px 0;
  `}
`,X9=D.h2`
  margin: 0 0 4px;
  font-size: 22px;
  color: ${e=>e.theme.colors.main};
`,Z9=D.p`
  margin: 0 0 20px;
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
`,J9=D.div`
  padding: 8px 24px 24px;
  flex: 1;
  overflow-y: auto;

  ${Te`
    padding: 8px 16px 16px;
  `}
`,e7=D.div`
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
`,cf=D.button`
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
`,t7=D.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,n7=D.span`
  font-size: 13px;
  color: ${e=>e.$error?"#d93025":e.theme.colors.secondary};

  ${Te`
    font-size: 12px;
  `}
`,r7=({alertToEdit:e,onSave:t,onCancel:n})=>{const i=gs(),o=ct(Do),l=ct(mu),[u,f]=C.useState(0),[h,p]=C.useState(!1),[g,y]=C.useState();C.useEffect(()=>{e.studioId?i(Rf(e.studioId)):i(Rf($I(ke.DEFAULT_STUDIO_ID)))},[e.studioId,i]);const[_,S]=C.useState(e.name||""),[w,O]=C.useState(e.instructors||null),[T,A]=C.useState(e.disciplines||null),[k,x]=C.useState(()=>e.timeRanges||rs.map(()=>ke.DEFAULT_TIME_RANGE)),[I,M]=C.useState(e.maxStatus||"free"),R=C.useRef(e.studioId);C.useEffect(()=>{o&&R.current&&o!==R.current&&(O(K=>K&&[]),A(K=>K&&[])),R.current=o},[o]);const P=u<dy.length-1,V=u>0,H=u===dy.length-1,B=C.useCallback(()=>{P&&f(K=>K+1)},[P]),z=C.useCallback(()=>{V&&f(K=>K-1)},[V]),G=C.useCallback(async()=>{if(!o||!l)return;p(!0),y(void 0);const K={id:e.id||null,created:e.created||new Date().getTime(),..._.trim()?{name:_.trim()}:{},studioId:o,instructors:w,disciplines:T,timeRanges:k,maxStatus:I};try{K.id?await rH(l,K):await nH(l,K),t()}catch(ue){Or(ue),y("Something went wrong. Please try again."),p(!1)}},[e.id,e.created,_,o,l,w,T,k,I,t]),F=!!e.id;return v.jsxs(Q9,{children:[v.jsxs(K9,{children:[v.jsx(X9,{children:F?"Edit alert":"New alert"}),v.jsx(Z9,{children:F?"Update your alert settings below.":"Set up a new alert in a few quick steps."}),v.jsx(C9,{steps:dy,currentStep:u,onStepClick:f})]}),v.jsxs(J9,{children:[u===0&&v.jsx(gH,{name:_,onNameChange:S,studioId:o,onStudioChange:K=>i(Rf(K)),maxStatus:I,onStatusChange:M}),u===1&&v.jsx(v9,{studioId:o,selectedInstructors:w,setSelectedInstructors:O,selectedDisciplines:T,setSelectedDisciplines:A}),u===2&&v.jsx(W9,{timeRanges:k,setTimeRanges:x}),u===3&&v.jsx(L9,{name:_,studioId:o,maxStatus:I,selectedInstructors:w,selectedDisciplines:T,timeRanges:k})]}),v.jsxs(e7,{children:[v.jsx("div",{children:V?v.jsx(cf,{type:"button",onClick:z,children:"Back"}):v.jsx(cf,{type:"button",onClick:n,children:"Cancel"})}),v.jsxs(t7,{children:[g&&v.jsx(n7,{$error:!0,children:g}),H?v.jsx(cf,{type:"button",$primary:!0,onClick:G,disabled:h,children:h?"Saving…":"Save alert"}):v.jsx(cf,{type:"button",$primary:!0,onClick:B,children:"Continue"})]})]})]})},i7=()=>{const e=vi(),t=Co(),n=e.state||{};return v.jsx(r7,{alertToEdit:n,onSave:()=>{t(rt.ALERTS)},onCancel:()=>{t(rt.ALERTS)}})},iD=C.createContext({state:"idle"}),s7=({children:e,userId:t})=>{const[n,i]=C.useState({state:"idle"});return C.useEffect(()=>{i({state:"loading"});const o=wn;if(!o)return i({state:"failed",error:new Error("No database set up")}),()=>{};const l=tr(o,`messagingTokens/${t}`),u=Zh(l,f=>{const h=f.val();i({state:"fulfilled",data:h||{}})},f=>{i({state:"failed",error:f})});return()=>u()},[t]),v.jsx(iD.Provider,{value:n,children:e})},sD=C.createContext({state:"idle"}),o7=({children:e,userId:t})=>{const[n,i]=C.useState({state:"idle"});return C.useEffect(()=>{i({state:"loading"});const o=wn;if(!o)return i({state:"failed",error:new Error("No database set up")}),()=>{};const l=tr(o,ke.PATHS.alertPreferences(t)),u=Zh(l,f=>{const h=f.val();i({state:"fulfilled",data:h||{}})},f=>{i({state:"failed",error:f})});return()=>u()},[t]),v.jsx(sD.Provider,{value:n,children:e})},a7=({children:e,userId:t})=>{const[n,i]=C.useState({state:"idle"});return C.useEffect(()=>{i({state:"loading"});const o=wn;if(!o)return i({state:"failed",error:new Error("No database set up")}),()=>{};const l=tr(o,ke.PATHS.alerts(t)),u=Zh(l,f=>{const h=f.val();if(!h){i({state:"fulfilled",data:[]});return}const p=Object.entries(h).map(([g,y])=>({...y,timeRanges:new Array(rs.length).fill(null).map((_,S)=>y.timeRanges[S]||null),id:g}));i({state:"fulfilled",data:p})},f=>{i({state:"failed",error:f})});return()=>u()},[t]),v.jsx(W_.Provider,{value:n,children:e})},l7=D.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 16px;

  ${Te`
    padding: 8px;
  `}
`,c7=D.div`
  overflow: auto;
  height: 100%;
`,u7=D.div`
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
`,d7=D.div`
  font-size: 36px;
  margin-bottom: 16px;
  line-height: 1;
`,f7=D.h1`
  font-size: 20px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
  margin: 0 0 10px;
`,h7=D.p`
  font-size: 15px;
  color: ${e=>e.theme.colors.secondary};
  line-height: 1.55;
  margin: 0 0 24px;
`,p7=D(ms)`
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
`,m7=D.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
  padding: 32px 0;
  margin: 0;
`,g7=({children:e})=>{const t=ct(el);return t.state==="loading"?v.jsx(m7,{children:"Loading…"}):t.state!=="fulfilled"||!t.data?v.jsxs(u7,{children:[v.jsx(d7,{children:"🔔"}),v.jsx(f7,{children:"Sign in to use Alerts"}),v.jsx(h7,{children:"Track class availability and get push notifications when a spot opens up for the classes you care about."}),v.jsx(p7,{to:rt.SIGN_IN,children:"Sign in"})]}):e(t.data.id)},y7=e=>v.jsx(lo,{children:v.jsx(c7,{children:v.jsx(l7,{children:v.jsx(g7,{...e})})})}),v7=({userId:e})=>v.jsx(a7,{userId:e,children:v.jsx(o7,{userId:e,children:v.jsx(s7,{userId:e,children:v.jsx(Ak,{})})})}),_7=()=>v.jsx(y7,{children:e=>v.jsx(v7,{userId:e})}),b7=async(e,t)=>{const n=wn;if(!n)throw new Error("No Firebase database connection to use");await XA(tr(n,ke.PATHS.alertPreferences(e)),t)},S7=D.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,w7=D.div`
  display: flex;
  align-items: center;
  gap: 12px;

  ${Te`
    flex-direction: column;
    align-items: stretch;
  `}
`,E7=D.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,x7=D.label`
  font-size: 13px;
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
`,T7=D.input`
  ${bs}
  padding: 8px 12px;
  font-family: inherit;
  font-size: 14px;
  color: ${e=>e.theme.colors.main};
  width: 80px;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.accent};
  }

  ${Te`
    width: 100%;
  `}
`,C7=D.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,R7=D.button`
  padding: 8px 20px;
  border: 1px solid
    ${e=>e.$saved?"#2e7d32":e.theme.colors.accent};
  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.$saved?"#e8f5e9":e.theme.colors.accent};
  color: ${e=>e.$saved?"#2e7d32":"#fff"};
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
`,A7=D.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
  padding: 16px;
`,I7=D.p`
  margin: 0;
  font-size: 14px;
  color: #d93025;
  text-align: center;
  padding: 16px;
`,D7=({alertPreferences:e})=>{const t=ct(mu),[n,i]=C.useState(e.notificationDelayMin||5),[o,l]=C.useState(!1),[u,f]=C.useState(!1),h=C.useCallback(async p=>{if(p.preventDefault(),!!t){l(!0),f(!1);try{await b7(t,{lastUpdated:new Date().getTime(),notificationDelayMin:n}),f(!0),setTimeout(()=>f(!1),2e3)}catch{}finally{l(!1)}}},[t,n]);return v.jsxs(S7,{onSubmit:h,children:[v.jsxs(E7,{children:[v.jsx(x7,{htmlFor:"delay-input",children:"Cooldown (minutes)"}),v.jsx(C7,{children:"Minimum delay between consecutive alert notifications"})]}),v.jsxs(w7,{children:[v.jsx(T7,{id:"delay-input",type:"number",min:0,value:n,onChange:p=>{const g=parseInt(p.target.value,10);Number.isNaN(g)||i(g)}}),v.jsx(R7,{type:"submit",disabled:o,$saved:u,children:o?"Saving…":u?"Saved ✓":"Save"})]})]})},O7=()=>{const e=C.useContext(sD);return e.state==="idle"||e.state==="loading"?v.jsx(A7,{children:"Loading preferences…"}):e.state==="failed"?v.jsx(I7,{children:"Failed to load preferences."}):v.jsx(D7,{alertPreferences:e.data},e.data.lastUpdated)},N7=e=>{if(!e)return"Unknown device";const t=M7(e),n=k7(e);return t&&n?`${t} on ${n}`:t||n||"Unknown device"},M7=e=>{if(e.includes("Edg/"))return"Edge";if(e.includes("OPR/")||e.includes("Opera"))return"Opera";if(e.includes("CriOS"))return"Chrome";if(e.includes("FxiOS"))return"Firefox";if(e.includes("Chrome/")&&!e.includes("Chromium"))return"Chrome";if(e.includes("Firefox/"))return"Firefox";if(e.includes("Safari/")&&!e.includes("Chrome"))return"Safari"},k7=e=>{if(/iPhone/.test(e))return"iPhone";if(/iPad/.test(e))return"iPad";if(/iPod/.test(e))return"iPod";if(/Android/.test(e))return"Android";if(/CrOS/.test(e))return"ChromeOS";if(/Mac OS X|Macintosh/.test(e))return"macOS";if(/Windows/.test(e))return"Windows";if(/Linux/.test(e))return"Linux"},L7=D.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,P7=D.li`
  ${bs}
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
`,j7=D.span`
  font-size: 20px;
  flex-shrink: 0;
`,U7=D.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
`,$7=D.span`
  font-weight: 500;
  font-size: 14px;
  color: ${e=>e.theme.colors.main};
  display: flex;
  align-items: center;
  gap: 6px;
`,z7=D.span`
  padding: 1px 6px;
  border-radius: 10px;
  font-size: 10px;
  font-weight: 600;
  background-color: ${e=>e.theme.colors.accent}14;
  color: ${e=>e.theme.colors.accent};
`,B7=D.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,H7=D.button`
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
    border-color: #d93025;
    color: #d93025;
  }

  ${Te`
    margin-left: auto;
  `}
`,F7=D.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
  padding: 16px;
`,q7=D.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
  padding: 16px;
`,V7=D.p`
  margin: 0;
  font-size: 14px;
  color: #d93025;
  text-align: center;
  padding: 16px;
`,G7=e=>e?/iPhone|iPad|iPod/i.test(e)||/Android/i.test(e)?"📱":/Windows/i.test(e)||/Macintosh|Mac OS/i.test(e)?"💻":/Linux/i.test(e)?"🖥️":"💻":"💻",Y7=({device:e,isCurrentDevice:t,onDelete:n})=>{const i=C.useMemo(()=>{const u=new Date(e.timestamp).getFullYear()===new Date().getFullYear();return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"numeric",...u?{}:{year:"numeric"}}).format(e.timestamp)},[e.timestamp]),o=N7(e.userAgent);return v.jsxs(P7,{children:[v.jsx(j7,{children:G7(e.userAgent)}),v.jsxs(U7,{children:[v.jsxs($7,{children:[o,t&&v.jsx(z7,{children:"This device"})]}),v.jsxs(B7,{children:["Last active ",i]})]}),v.jsx(H7,{type:"button",onClick:n,"aria-label":`Remove ${o}`,children:"Remove"})]})},W7=({devices:e})=>{const n=C.useContext(gu).token,i=ct(mu),o=l=>{i&&JA(i,l).catch(console.error)};return e.length===0?v.jsx(F7,{children:"No devices registered for push notifications yet."}):v.jsx(L7,{children:e.map(([l,u])=>v.jsx(Y7,{device:u,isCurrentDevice:n!==void 0?l===n:u.userAgent!==void 0&&u.userAgent===navigator.userAgent,onDelete:()=>o(l)},l))})},Q7=()=>{const e=C.useContext(iD),t=C.useMemo(()=>e.state==="fulfilled"?Object.entries(e.data).sort(([,n],[,i])=>i.timestamp-n.timestamp):[],[e]);return e.state==="idle"||e.state==="loading"?v.jsx(q7,{children:"Loading devices…"}):e.state==="failed"?v.jsx(V7,{children:"Failed to load devices. Please try again."}):v.jsx(W7,{devices:t})},K7=async(e,t)=>{const n=wn;if(!n)throw new Error("No Firebase database connection to use");await KA(tr(n,ke.PATHS.alert(e,t)))},oT=(e,t,n)=>!e||e.length===0?t:e.length===1?e[0]:e.length===2?`${e[0]} or ${e[1]}`:`${e.length} ${n}`,X7=(e,t)=>{const n=oT(e,"Any Class","Disciplines"),i=oT(t,"Any Instructor","Instructors");return`${n} with ${i}`},Z7=D.li`
  ${bs}
  padding: 16px;
  transition: box-shadow 0.15s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 12px;
  }

  ${Te`
    padding: 12px;
  `}
`,J7=D.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;

  ${Te`
    flex-direction: column;
    gap: 8px;
  `}
`,eF=D.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`,tF=D.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`,nF=D.span`
  font-weight: 600;
  font-size: 15px;
  color: ${e=>e.theme.colors.main};
`,rF=D.span`
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 500;
  background-color: ${e=>e.$status==="free"?"#e8f5e9":e.$status==="waitlist"?"#fff3e0":"#fce4ec"};
  color: ${e=>e.$status==="free"?"#2e7d32":e.$status==="waitlist"?"#e65100":"#c62828"};
`,iF=D.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
`,sF=D.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  margin-top: 2px;
`,oF=D.span`
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
`,aF=D.div`
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;

  ${Te`
    align-self: flex-end;
  `}
`,If=D.button`
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
`,lF=D(If)`
  &:hover {
    border-color: #d93025;
    color: #d93025;
  }
`,cF=D.span`
  font-size: 11px;
  color: ${e=>e.theme.colors.secondary};
  margin-top: 4px;
`,uF={free:{label:"Open spots",title:"Only alerts when a class has open spots available to book"},waitlist:{label:"Waitlist",title:"Alerts when a class has open spots or waitlist availability"},full:{label:"Any",title:"Alerts regardless of availability status"}},dF=e=>uF[e]||{label:e,title:""},fF=C.memo(({alert:e,onDuplicate:t,onEdit:n})=>{const i=Co(),o=ct(mu),{data:l}=tb(e.studioId),{data:u}=eb(e.studioId),f=C.useMemo(()=>{const _=new Date(e.created).getFullYear()===new Date().getFullYear();return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",..._?{}:{year:"numeric"}}).format(e.created)},[e.created]),h=C.useMemo(()=>{if(e.name)return e.name;const y=ke.isNotEmpty(e.instructors)&&l?e.instructors.map(S=>l.find(w=>w.id===S)?.name).filter(S=>!!S):null,_=ke.isNotEmpty(e.disciplines)&&u?e.disciplines.map(S=>u.find(w=>w.id===S)?.name).filter(S=>!!S):null;return X7(_,y)},[e.name,e.instructors,e.disciplines,l,u]),p=ke.STUDIOS[e.studioId]?.location||e.studioId||"No studio",g=dF(e.maxStatus);return v.jsx(Z7,{children:v.jsxs(J7,{children:[v.jsxs(eF,{children:[v.jsxs(tF,{children:[v.jsx(nF,{children:h}),v.jsx(rF,{$status:e.maxStatus,title:g.title,children:g.label})]}),v.jsx(iF,{children:p}),v.jsx(sF,{children:rs.map((y,_)=>v.jsx(oF,{$active:!!e.timeRanges[_],title:e.timeRanges[_]?`${y}: monitoring enabled`:`${y}: not monitored`,children:y.charAt(0)},y))}),v.jsxs(cF,{children:["Created ",f]})]}),v.jsxs(aF,{children:[v.jsx(If,{type:"button",onClick:()=>i(y$(e.id)),"aria-label":"Test alert",children:"Test"}),v.jsx(If,{type:"button",onClick:n,"aria-label":"Edit alert",children:"Edit"}),v.jsx(If,{type:"button",onClick:t,"aria-label":"Duplicate alert",children:"Duplicate"}),v.jsx(lF,{type:"button",onClick:()=>o&&K7(o,e.id),"aria-label":"Delete alert",children:"Delete"})]})]})})}),hF=D.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,pF=({alerts:e,onDuplicate:t,onEdit:n})=>v.jsx(hF,{children:e.map(i=>v.jsx(fF,{alert:i,onDuplicate:()=>t(i),onEdit:()=>n(i)},i.id))}),mF=D.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px 0;

  ${Te`
    padding: 16px 16px 0;
  `}
`,gF=D.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,yF=D.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
`,vF=D.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
`,_F=D.button`
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
`,bF=D.div`
  padding: 16px 24px 24px;

  ${Te`
    padding: 12px 16px 16px;
  `}
`,SF=D.p`
  margin: 0;
  padding: 24px;
  text-align: center;
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
`,wF=D.p`
  margin: 0;
  padding: 24px;
  text-align: center;
  color: #d93025;
  font-size: 14px;
`,EF=({onAdd:e,onEdit:t,onDuplicate:n})=>{const i=C.useContext(W_),o=i.state==="loading"||i.state==="idle",l=i.state==="failed",u=i.state==="fulfilled"?i.data:[];return v.jsxs(v.Fragment,{children:[v.jsxs(mF,{children:[v.jsxs(gF,{children:[v.jsx(yF,{children:"Alerts"}),v.jsx(vF,{children:o?"Loading your alerts…":l?"Something went wrong":u.length===0?"You haven't created any alerts yet":`${u.length} alert${u.length===1?"":"s"}`})]}),!o&&!l&&v.jsx(_F,{type:"button",onClick:e,children:"+ New alert"})]}),v.jsxs(bF,{children:[o&&v.jsx(SF,{children:"Loading…"}),l&&v.jsx(wF,{children:"Failed to load your alerts. Please refresh and try again."}),!o&&!l&&u.length===0&&v.jsx(RF,{onAdd:e}),!o&&!l&&u.length>0&&v.jsx(pF,{alerts:u,onEdit:t,onDuplicate:n})]})]})},xF=D.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 32px 16px;
`,TF=D.p`
  margin: 0;
  font-size: 15px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
`,CF=D.button`
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
`,RF=({onAdd:e})=>v.jsxs(xF,{children:[v.jsx(TF,{children:"Create your first alert to get notified when classes become available."}),v.jsx(CF,{type:"button",onClick:e,children:"Create an alert"})]}),AF=D.button`
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
`;D.button`
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
`;const IF=D.div`
  background-color: white;
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 16px;
`,DF=()=>["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document||/iPad|iPhone|iPod/.test(navigator.userAgent),fy=D(IF)`
  margin-bottom: 1em;
`,OF=D(AF)`
  margin-top: 1em;
`,aT=D.h2`
  color: ${e=>e.theme.colors.accent};
`,NF=()=>{const[e,t]=C.useState(window.Notification?window.Notification.permission:void 0),{refreshToken:n}=C.useContext(gu),i=DF(),o=!!navigator.standalone||window.matchMedia("(display-mode: standalone)").matches,l=C.useCallback(()=>{window.Notification&&typeof window.Notification.requestPermission=="function"&&window.Notification.requestPermission().then(u=>{t(u),u==="granted"&&n()}).catch(u=>{console.error(u),Or(u)})},[n]);return i&&!o?v.jsxs(fy,{children:[v.jsx(aT,{children:"Installation Required"}),v.jsx("p",{children:"To receive notifications on iOS, you must first add this app to your home screen. Tap the share button in Safari and select “Add to Home Screen”, then open the app from there."})]}):e===void 0||!("serviceWorker"in navigator)?v.jsxs(fy,{children:[v.jsx(aT,{children:"Unsupported Browser"}),v.jsx("p",{children:"This browser does not support sending you notifications in the background. Alerts for new classes will only display if you keep this tab open."})]}):e!=="granted"?v.jsxs(fy,{children:[v.jsx("h2",{children:"Grant notification permissions"}),v.jsx("p",{children:"In order to get notified when any of your alerts trigger, you need to grant permission to send notifications"}),v.jsx(OF,{type:"button",onClick:l,children:"Grant Permission"})]}):null},MF=D.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${Te`
    gap: 16px;
  `}
`,hy=D.section`
  background-color: white;
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  overflow: hidden;
`,lT=D.div`
  padding: 20px 24px 0;

  ${Te`
    padding: 16px 16px 0;
  `}
`,cT=D.h2`
  margin: 0 0 4px;
  font-size: 20px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
`,uT=D.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
`,dT=D.div`
  padding: 16px 24px 24px;

  ${Te`
    padding: 12px 16px 16px;
  `}
`,kF=()=>{const e=Co();return v.jsxs(MF,{children:[v.jsx(hy,{children:v.jsx(EF,{onAdd:()=>{e(rt.ALERTS_EDITOR,{state:{}})},onEdit:t=>{e(rt.ALERTS_EDITOR,{state:t})},onDuplicate:t=>{e(rt.ALERTS_EDITOR,{state:{...t,id:void 0,created:void 0}})}})}),v.jsxs(hy,{children:[v.jsxs(lT,{children:[v.jsx(cT,{children:"Preferences"}),v.jsx(uT,{children:"Control how often you receive alert notifications."})]}),v.jsx(dT,{children:v.jsx(O7,{})})]}),v.jsxs(hy,{children:[v.jsxs(lT,{children:[v.jsx(cT,{children:"Devices"}),v.jsx(uT,{children:"Devices registered to receive push notifications. Removed devices will re-register on their next visit."})]}),v.jsxs(dT,{children:[v.jsx(NF,{}),v.jsx(Q7,{})]})]})]})},LF=D.button.attrs({"aria-label":"Close",type:"button"})`
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
`,nb=e=>{try{return window.localStorage.getItem(e)}catch(t){return Or(t),null}},rb=(e,t)=>{try{window.localStorage.setItem(e,t)}catch(n){Or(n)}},oD=e=>{try{window.localStorage.removeItem(e)}catch(t){Or(t)}},aD="BOOKABLE_STATUS_FILTERS",fv="DISCIPLINE_FILTERS",hv="INSTRUCTOR_FILTERS",PF=e=>{const t=nb(aD);return t===null?e:t.split(";").filter(ke.isBookableStatus)},jF=e=>{rb(aD,e.join(";"))},UF=e=>{const t=nb(fv);return t===null?e:t.split(";").filter(Boolean)},fT=e=>{e.length===0?oD(fv):rb(fv,e.join(";"))},$F=e=>{const t=nb(hv);return t===null?e:t.split(";").filter(Boolean)},hT=e=>{e.length===0?oD(hv):rb(hv,e.join(";"))},zF={selectedBookableStatuses:PF(["free","waitlist"]),selectedInstructors:$F([]),selectedDisciplines:UF([])},lD=Ar({name:"filters",initialState:zF,reducers:{toggleBookableStatus(e,t){e.selectedBookableStatuses.includes(t.payload)?e.selectedBookableStatuses=e.selectedBookableStatuses.filter(n=>n!==t.payload):e.selectedBookableStatuses=[...e.selectedBookableStatuses,t.payload],jF(e.selectedBookableStatuses)},toggleInstructor(e,t){e.selectedInstructors.includes(t.payload)?e.selectedInstructors=e.selectedInstructors.filter(n=>n!==t.payload):e.selectedInstructors=[...e.selectedInstructors,t.payload],hT(e.selectedInstructors)},resetInstructors(e){e.selectedInstructors=[],hT(e.selectedInstructors)},toggleDiscipline(e,t){e.selectedDisciplines.includes(t.payload)?e.selectedDisciplines=e.selectedDisciplines.filter(n=>n!==t.payload):e.selectedDisciplines=[...e.selectedDisciplines,t.payload],fT(e.selectedDisciplines)},resetDisciplines(e){e.selectedDisciplines=[],fT(e.selectedDisciplines)}}}),{toggleBookableStatus:BF,toggleInstructor:HF,resetInstructors:FF,toggleDiscipline:qF,resetDisciplines:VF}=lD.actions,GF=lD.reducer,YF=()=>{const e=ct(i=>i.filters.selectedBookableStatuses),t=gs(),n=C.useCallback(i=>{t(BF(i))},[t]);return{bookableStatuses:e,toggleBookableStatus:n}},WF=D.button`
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
`,QF=D.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px 8px;
`,KF=D.h3`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${e=>e.theme.colors.secondary};
  margin: 0;
`,sp=({label:e,onReset:t,children:n})=>v.jsxs(QF,{children:[v.jsx(KF,{children:e}),t&&v.jsx(WF,{type:"button",onClick:t,children:"Reset"}),n]}),XF=[{label:"Free",status:"free",color:"#2e7d32"},{label:"Waitlist",status:"waitlist",color:"#e65100"},{label:"Full",status:"full",color:"#9e9e9e"}],ZF=D.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 0 16px 16px;
`,JF=D.button`
  padding: 5px 14px;
  border-radius: 20px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: box-shadow 0.1s;

  ${e=>e.$active?an`
          border: 1.5px solid ${e.$color};
          background-color: ${e.$color}14;
          color: ${e.$color};
        `:an`
          border: 1px solid ${e.theme.borderColor};
          background-color: transparent;
          color: ${e.theme.colors.secondary};

          &:hover {
            background-color: rgba(0, 0, 0, 0.04);
          }
        `}
`,eq=()=>{const{bookableStatuses:e,toggleBookableStatus:t}=YF();return v.jsxs("fieldset",{style:{border:"none",margin:0,padding:0},children:[v.jsx("legend",{style:{padding:0,width:"100%"},children:v.jsx(sp,{label:"Status"})}),v.jsx(ZF,{children:XF.map(n=>{const i=e.includes(n.status);return v.jsx(JF,{type:"button",$active:i,$color:n.color,onClick:()=>t(n.status),"aria-pressed":i,children:n.label},n.status)})})]})},tq=()=>{const e=ct(i=>i.filters.selectedDisciplines),t=gs(),n=C.useCallback(i=>{t(qF(i))},[t]);return{selectedDisciplines:e,toggleDiscipline:n}},cD=D.ul`
  list-style: none;
  margin: 0;
  padding: 0 0 8px;
`,uD=D.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.1s;

  ${e=>e.$checked?an`
          background-color: ${e.theme.colors.accent}08;
        `:an`
          &:hover {
            background-color: rgba(0, 0, 0, 0.03);
          }
        `}
`,dD=D.span`
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
`,fD=D.span`
  font-size: 14px;
  color: ${e=>e.theme.colors.main};
`,_h=D.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  padding: 8px 16px 16px;
  margin: 0;
`,nq=({discipline:e,checked:t,onClick:n})=>v.jsxs(uD,{$checked:t,onClick:n,role:"checkbox","aria-checked":t,children:[v.jsx(dD,{$checked:t}),v.jsx(mh,{discipline:e,size:24}),v.jsx(fD,{children:e.name})]}),rq=()=>{const e=ct(Do),{currentData:t,isLoading:n,error:i}=eb(e),{selectedDisciplines:o,toggleDiscipline:l}=tq();return i&&!n?v.jsx(_h,{children:"Failed to load disciplines"}):!t||n?v.jsx(_h,{children:"Loading…"}):v.jsx(cD,{children:t.map((u,f)=>v.jsx(nq,{discipline:u,checked:o.includes(u.id),onClick:()=>l(u.id)},f))})},iq=()=>{const e=ct(n=>n.filters.selectedDisciplines.length>0),t=gs();return v.jsxs("div",{children:[v.jsx(sp,{label:"Disciplines",onReset:e?()=>t(VF()):void 0}),v.jsx(rq,{})]})},sq=()=>{const e=ct(i=>i.filters.selectedInstructors),t=gs(),n=C.useCallback(i=>{t(HF(i))},[t]);return{selectedInstructors:e,toggleInstructor:n}},oq=({instructor:e,checked:t,onClick:n})=>v.jsxs(uD,{$checked:t,onClick:n,role:"checkbox","aria-checked":t,children:[v.jsx(dD,{$checked:t}),v.jsx(Q_,{instructor:e,size:28}),v.jsx(fD,{children:e.name})]}),aq=()=>{const e=ct(Do),{currentData:t,isLoading:n,error:i}=tb(e),{selectedInstructors:o,toggleInstructor:l}=sq();return i&&!n?v.jsx(_h,{children:"Failed to load instructors"}):!t||n?v.jsx(_h,{children:"Loading…"}):v.jsx(cD,{children:t.map((u,f)=>v.jsx(oq,{instructor:u,checked:o.includes(u.id),onClick:()=>l(u.id)},f))})},lq=()=>{const e=ct(n=>n.filters.selectedInstructors.length>0),t=gs();return v.jsxs("div",{children:[v.jsx(sp,{label:"Instructors",onReset:e?()=>t(FF()):void 0}),v.jsx(aq,{})]})},cq=Object.entries(ke.STUDIOS).map(([e,t])=>({id:e,label:t.location})),uq=D.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 0 16px 16px;
`,dq=D.label`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  ${bs}
  cursor: pointer;
  transition: box-shadow 0.1s;

  ${e=>e.$selected?an`
          border-color: ${e.theme.colors.accent};
          background-color: ${e.theme.colors.accent}0a;
        `:an`
          &:hover {
            background-color: rgba(0, 0, 0, 0.03);
          }
        `}
`,fq=D.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`,hq=D.span`
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
`,pq=D.span`
  font-size: 15px;
  color: ${e=>e.theme.colors.main};
`,mq=()=>{const e=gs(),t=ct(Do);return v.jsxs("fieldset",{style:{border:"none",margin:0,padding:0},children:[v.jsx("legend",{style:{padding:0,width:"100%"},children:v.jsx(sp,{label:"Studio"})}),v.jsx(uq,{children:cq.map(n=>{const i=t===n.id;return v.jsxs(dq,{$selected:i,htmlFor:`studio-${n.id}`,children:[v.jsx(fq,{type:"radio",id:`studio-${n.id}`,name:"studio-selected",value:n.id,checked:i,onChange:()=>{i||e(Rf(n.id))}}),v.jsx(hq,{$selected:i}),v.jsx(pq,{children:n.label})]},n.id)})})]})},gq=D.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`,yq=D.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 16px 12px;
  border-bottom: 1px solid ${e=>e.theme.borderColor};
  position: sticky;
  top: 0;
  background-color: ${e=>e.theme.colors.secondarySurface};
  z-index: 1;

  ${jI`
    display: flex;
  `}
`,vq=D.h2`
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${e=>e.theme.colors.main};
  margin: 0;
`,_q=D(LF)`
  display: none;

  ${jI`
    display: block;
  `}
`,bq=D.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  overflow-y: auto;
  flex: 1;
`,uf=D.div`
  border-bottom: 1px solid ${e=>e.theme.borderColor};

  &:last-child {
    border-bottom: none;
  }
`,Sq=({onClose:e})=>v.jsxs(gq,{children:[v.jsxs(yq,{children:[v.jsx(vq,{children:"Filters"}),v.jsx(_q,{onClick:()=>e()})]}),v.jsxs(bq,{children:[v.jsx(uf,{children:v.jsx(mq,{})}),v.jsx(uf,{children:v.jsx(eq,{})}),v.jsx(uf,{children:v.jsx(iq,{})}),v.jsx(uf,{children:v.jsx(lq,{})})]})]}),wq=()=>{const e=ct(Do),{refetch:t}=JI(e);return{refresh:C.useCallback(async()=>{await t()},[t])}},pT=150,mT=60,Eq=()=>document.documentElement.scrollTop||document.body.scrollTop,xq=({refresh:e})=>{const t=C.useRef(null),n=C.useRef(null),i=C.useMemo(()=>!!navigator.standalone||window.matchMedia("(display-mode: standalone)").matches||!1,[]);return C.useEffect(()=>{if(!i)return;let o=0,l=!1,u=!1,f=!1;const h=S=>{const w=n.current;w&&(w.style.transition=S?"transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease":"none",w.style.transform="",w.style.opacity="0")},p=S=>{o=S.touches[0].clientY,l=!1,u=!1},g=S=>{if(f||Eq()>0)return;const w=S.touches[0].clientY-o;if(w<=0){l&&(l=!1,u=!1,h(!1));return}l=!0,u=w>=pT;const O=Math.min(w/pT,1),T=mT*(1-Math.pow(1-O,2)),A=Math.pow(O,.5),k=Math.floor(O*270),x=n.current;x&&(x.style.transition="none",x.style.transform=`translateY(${T}px) rotate(${k}deg)`,x.style.opacity=String(Math.min(A,1)))},y=()=>{if(l)if(l=!1,u&&!f){u=!1,f=!0;const S=n.current;S&&(S.classList.add("animate"),S.style.transition="none",S.style.transform=`translateY(${mT}px)`,S.style.opacity="1"),e().finally(()=>{f=!1;const w=n.current;w&&(w.classList.remove("animate"),h(!0))})}else u=!1,h(!0)},_=()=>{l=!1,u=!1,h(!1)};return document.addEventListener("touchstart",p,{passive:!0}),document.addEventListener("touchmove",g,{passive:!0}),document.addEventListener("touchend",y,{passive:!0}),document.addEventListener("touchcancel",_,{passive:!0}),()=>{document.removeEventListener("touchstart",p),document.removeEventListener("touchmove",g),document.removeEventListener("touchend",y),document.removeEventListener("touchcancel",_)}},[e,i]),{swipeRef:t,spinnerRef:n}},Tq=e=>e.filters.selectedDisciplines.length>0||e.filters.selectedInstructors.length>0,Cq=e=>e.filters.selectedBookableStatuses,Rq=e=>e.filters.selectedDisciplines,Aq=e=>e.filters.selectedInstructors,Iq=(e,t)=>t,Dq=bi([Cq,Rq,Aq,Iq],(e,t,n,i)=>i.filter(o=>e.includes(o.status)).filter(o=>n.length>0?n.some(l=>l===o.instructor.id):!0).filter(o=>t.length>0?t.includes(o.discipline.id):!0)),hD=bi([Do],e=>{if(e)return ke.STUDIOS[e]}),Oq=bi([Dq,hD],(e,t)=>{if(e.length===0)return[];const n=t?.timezone||"",i=[];let o=1,l=Va(e[0].start,n,!0),u=[e[0]];for(;o<e.length;){const f=e[o],h=Va(f.start,n,!0);h===l?u.push(f):(i.push({formattedDate:l,classes:u}),l=h,u=[f]),o++}return u.length>0&&i.push({formattedDate:l,classes:u}),i}),Oa={free:{accentColor:"#2e7d32",buttonBg:"#cb3449",buttonText:"#fff",buttonBorder:"#cb3449",label:"Book"},waitlist:{accentColor:"#e65100",buttonBg:"transparent",buttonText:"#e65100",buttonBorder:"#e65100",label:"Waitlist"},full:{accentColor:"#c4c4c4",buttonBg:"transparent",buttonText:"#aaa",buttonBorder:"#d1d1d1",label:"Full"}},Nq=D.a`
  display: flex;
  align-items: center;
  gap: 14px;
  text-decoration: none;
  color: inherit;
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-left: 4px solid ${e=>Oa[e.$status].accentColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 14px 18px;
  transition: box-shadow 0.15s;
  opacity: ${e=>e.$interactive?1:.55};

  ${e=>e.$interactive&&an`
      cursor: pointer;
      &:hover {
        box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 12px;
      }
    `}

  ${e=>!e.$interactive&&an`
      pointer-events: none;
    `}

  ${Te`
    padding: 10px 12px;
    gap: 10px;
  `}
`,Mq=D.div`
  flex-shrink: 0;
  width: 84px;
  ${Te`
    width: 70px;
  `}
`,kq=D.div`
  font-weight: 600;
  font-size: 16px;
  color: ${e=>e.theme.colors.main};
  white-space: nowrap;
  ${Te`
    font-size: 13px;
  `}
`,Lq=D.div`
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
  margin-top: 2px;
  ${Te`
    font-size: 11px;
  `}
`,Pq=D.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  ${Te`
    display: none;
  `}
`,jq=D.div`
  flex: 1;
  min-width: 0;
`,Uq=D.div`
  font-size: 16px;
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${Te`
    font-size: 13px;
  `}
`,$q=D.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  margin-top: 3px;
  ${Te`
    font-size: 12px;
  `}
`,zq=D.span`
  color: ${e=>e.theme.borderColor};
`,Bq=D.div`
  display: none;
  ${Te`
    display: flex;
    align-items: center;
  `}
`,Hq=D.button`
  flex-shrink: 0;
  border: 1px solid ${e=>Oa[e.$status].buttonBorder};
  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>Oa[e.$status].buttonBg};
  color: ${e=>Oa[e.$status].buttonText};
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
`,Fq=C.memo(({clazz:e})=>{const t=ct(hD),n=e.status,i=n==="free"||n==="waitlist",o=C.useMemo(()=>e.customerUrl?new URL(e.customerUrl,"https://schedule.studio.onepeloton.com").href:(Lv("Missing customer URL",{extra:{clazz:e}}),""),[e]),l=C.useMemo(()=>xo(e.start,t?.timezone),[e.start,t?.timezone]),u=Oa[n]??Oa.full;return v.jsxs(Nq,{$status:n,$interactive:i,href:o,target:"_blank","aria-label":`${u.label} ${e.name} at ${l}`,children:[v.jsxs(Mq,{children:[v.jsx(kq,{children:l}),v.jsxs(Lq,{children:[e.duration/60," min"]})]}),v.jsxs(Pq,{children:[v.jsx(Q_,{instructor:e.instructor,size:44}),v.jsx(mh,{discipline:e.discipline,size:36})]}),v.jsxs(jq,{children:[v.jsx(Uq,{children:e.name}),v.jsxs($q,{children:[e.instructor.name,v.jsx(zq,{children:"·"}),e.discipline.name,v.jsx(Bq,{children:v.jsx(mh,{discipline:e.discipline,size:20})})]})]}),v.jsx(Hq,{$status:n,disabled:!i,tabIndex:-1,children:u.label})]})}),qq=D.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,Vq=D.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,Gq=D.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 0 4px 6px;
  border-bottom: 1px solid ${e=>e.theme.borderColor};
  margin-bottom: 2px;
`,Yq=D.h2`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${e=>e.theme.colors.main};
  margin: 0;
`,gT=D.span`
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
`,Wq=D.div`
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 32px 24px;
  text-align: center;
  ${Te`
    padding: 24px 16px;
  `}
`,Qq=D.p`
  font-size: 16px;
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
  margin: 0 0 8px;
`,yT=D.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  margin: 0;
  line-height: 1.5;
`,Kq=({classes:e,fulfilledTimeStamp:t})=>{const n=ct(u=>Oq(u,e)),i=ct(Tq),o=ct(u=>u.filters.selectedBookableStatuses.includes("free")),l=C.useMemo(()=>t?new Intl.DateTimeFormat(void 0,{hour:"numeric",minute:"numeric"}).format(t):void 0,[t]);return n.length===0?v.jsxs(Wq,{children:[v.jsx(Qq,{children:"No classes found"}),i&&v.jsx(yT,{children:"Try resetting your filters or selecting more options in the sidebar."}),o&&!i&&v.jsx(yT,{children:"New classes usually open at 12:00 pm on Mondays and Thursdays in your studio's timezone."})]}):v.jsx(qq,{children:n.map((u,f)=>v.jsxs(Vq,{children:[v.jsxs(Gq,{children:[v.jsx(Yq,{children:u.formattedDate}),f===0&&l&&v.jsxs(gT,{children:["Times in studio timezone · loaded ",l]}),f===0&&!l&&v.jsx(gT,{children:"All times in studio timezone"})]}),u.classes.map((h,p)=>v.jsx(Fq,{clazz:h},p))]},f))})},vT=D.div`
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 32px 24px;
  text-align: center;
  ${Te`
    padding: 24px 16px;
  `}
`,Xq=D.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  margin: 0;
`,Zq=D.p`
  font-size: 14px;
  color: #d93025;
  margin: 0 0 6px;
`,Jq=D.code`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,eV=()=>{const e=ct(Do),{currentData:t,isLoading:n,error:i,fulfilledTimeStamp:o}=JI(e,{refetchOnMountOrArgChange:!0});return i&&!n?v.jsxs(vT,{children:[v.jsx(Zq,{children:"Failed to load classes"}),v.jsx(Jq,{children:h9(i)})]}):!t||n?v.jsx(vT,{children:v.jsx(Xq,{children:"Loading classes…"})}):v.jsx(Kq,{classes:t,fulfilledTimeStamp:o})},tV=D.div``,pv=300,nV=D.aside`
  max-width: 100%;
  width: ${pv}px;
  top: calc(${eI}px + env(safe-area-inset-top, 0px));
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
    left: ${e=>e.$toggleVisible?0:-pv}px;
    z-index: 2;
    box-shadow: ${e=>e.$toggleVisible?"4px 0 16px rgba(0,0,0,0.08)":"none"};
  }
`,rV=D.div`
  flex: 1;
  background-color: ${e=>e.theme.colors.secondarySurface};
  padding: 20px;
  padding-bottom: calc(20px + env(safe-area-inset-bottom, 0px));
  position: relative;
  margin-left: ${pv}px;

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
`,df=40,iV=D.div`
  padding-top: 10px;
  position: absolute;
  left: 0;
  width: 100%;
  top: -50px;
  text-align: center;
`,sV=D.div`
  display: inline-block;
  position: relative;
  width: ${df}px;
  height: ${df}px;
  transform-origin: center;
  transition: transform 0.1s;

  --sp-color: ${e=>e.theme.colors.accent};

  &.animate div {
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1);
    border-color: var(--sp-color) transparent transparent transparent;
  }

  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${df}px;
    height: ${df}px;
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
`,oV=D.div`
  display: none;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;

  @media only screen and (max-width: ${e=>e.theme.widths.tablet}px) {
    display: flex;
  }
`,aV=D.button`
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
`,lV=()=>v.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:v.jsx("path",{d:"M1 3h12M3 7h8M5 11h4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),cV=()=>{const{refresh:e}=wq(),{swipeRef:t,spinnerRef:n}=xq({refresh:e}),[i,o]=C.useState(!1);return v.jsx(lo,{children:v.jsxs(tV,{children:[v.jsx(nV,{$toggleVisible:i,children:v.jsx(Sq,{onClose:()=>{o(!1)}})}),v.jsxs(rV,{$toggleVisible:i,onClick:()=>{o(!1)},ref:t,children:[v.jsx(iV,{children:v.jsxs(sV,{ref:n,children:[v.jsx("div",{}),v.jsx("div",{}),v.jsx("div",{})]})}),v.jsx(oV,{children:v.jsxs(aV,{type:"button",onClick:l=>{o(!0),l.stopPropagation()},children:[v.jsx(lV,{}),"Filters"]})}),v.jsx(eV,{})]})]})})},uV=({children:e})=>{const t=ct(el),n=ct(j_);return t.state!=="fulfilled"?null:n?v.jsx(v.Fragment,{children:e}):v.jsx(wv,{to:rt.CLASS_LIST,replace:!0})},_T=e=>{switch(e.code){case"auth/user-not-found":return"No account found with this email address. Please check your email or create a new account.";case"auth/wrong-password":return"Incorrect password. Please try again or reset your password.";case"auth/invalid-email":return"Please enter a valid email address.";case"auth/user-disabled":return"This account has been disabled. Please contact support for assistance.";case"auth/too-many-requests":return"Too many failed login attempts. Please try again later or reset your password.";case"auth/weak-password":return"Password should be at least 6 characters long.";case"auth/email-already-in-use":return"An account with this email already exists. Please sign in instead.";case"auth/invalid-credential":return"Invalid email or password. Please check your credentials and try again.";case"auth/operation-not-allowed":return"This sign-in method is not enabled. Please contact support.";case"auth/account-exists-with-different-credential":return"An account already exists with the same email but different sign-in credentials. Please sign in using the original method.";case"auth/credential-already-in-use":return"This credential is already associated with a different user account.";case"auth/popup-closed-by-user":return"Sign-in was cancelled. Please try again.";case"auth/popup-blocked":return"Pop-up was blocked by your browser. Please allow pop-ups for this site and try again.";case"auth/cancelled-popup-request":return"Sign-in was cancelled. Please try again.";case"auth/network-request-failed":return"Network error occurred. Please check your internet connection and try again.";case"auth/internal-error":return"An internal error occurred. Please try again later.";case"auth/invalid-api-key":return"Configuration error. Please contact support.";case"auth/app-deleted":return"Application error. Please refresh the page and try again.";case"auth/invalid-user-token":return"Your session has expired. Please sign in again.";case"auth/user-token-expired":return"Your session has expired. Please sign in again.";case"auth/null-user":return"No user is currently signed in.";case"auth/requires-recent-login":return"This operation requires recent authentication. Please sign in again.";default:return e.message||"An unexpected error occurred. Please try again."}},dV=D.h1`
  font-size: 26px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
  margin: 0 0 6px;
`,fV=D.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  margin: 0 0 16px;
  line-height: 1.5;
`,hV=D.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,bT=D.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,ST=D.label`
  font-size: 13px;
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
`,wT=D.input`
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
`,pV=D.button`
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
`,mV=D.button`
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
    background-color: rgba(0, 0, 0, 0.04);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,gV=D.div`
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
`,yV=D.p`
  margin: 0;
  font-size: 13px;
  color: #d93025;
`,vV=D.p`
  margin: 32px 0 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
`,_V=D.button`
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
`,bV=()=>{const e=Co(),[t,n]=C.useState(!1),[i,o]=C.useState(""),[l,u]=C.useState(!1),[f,h]=C.useState(""),[p,g]=C.useState(""),y=C.useCallback(async S=>{if(S.preventDefault(),!(!oi||!f||!p)){n(!0),o("");try{l?await pz(oi,f,p):await mz(oi,f,p),e(rt.CLASS_LIST)}catch(w){console.error("Email auth error:",w);const O=w&&typeof w=="object"&&"code"in w?_T(w):"Authentication failed";o(O),Or(w)}finally{n(!1)}}},[f,p,l,e]),_=C.useCallback(async()=>{if(oi){n(!0),o("");try{const S=new si;await Uz(oi,S),e(rt.CLASS_LIST)}catch(S){console.error("Google sign-in error:",S);const w=S&&typeof S=="object"&&"code"in S?_T(S):"Google sign-in failed";o(w),Or(S)}finally{n(!1)}}},[e]);return v.jsxs("div",{children:[v.jsx(dV,{children:l?"Create account":"Sign in"}),v.jsx(fV,{children:"Set alerts, persist filters across devices, and access beta features."}),v.jsxs(hV,{onSubmit:y,children:[v.jsxs(bT,{children:[v.jsx(ST,{htmlFor:"signin-email",children:"Email"}),v.jsx(wT,{id:"signin-email",type:"email",placeholder:"you@example.com",value:f,onChange:S=>h(S.target.value),required:!0,disabled:t})]}),v.jsxs(bT,{children:[v.jsx(ST,{htmlFor:"signin-password",children:"Password"}),v.jsx(wT,{id:"signin-password",type:"password",placeholder:"••••••••",value:p,onChange:S=>g(S.target.value),required:!0,disabled:t})]}),i&&v.jsx(yV,{role:"alert",children:i}),v.jsx(pV,{type:"submit",disabled:t,children:t?"Loading…":l?"Create account":"Sign in"})]}),v.jsx(gV,{style:{marginTop:20,marginBottom:16},children:"or"}),v.jsx(mV,{type:"button",onClick:_,disabled:t,children:"Continue with Google"}),v.jsxs(vV,{children:[l?"Already have an account?":"Don't have an account?"," ",v.jsx(_V,{type:"button",onClick:()=>{u(!l),o("")},disabled:t,children:l?"Sign in":"Create account"})]})]})},SV=bi([el],e=>e.state==="fulfilled"&&!!e.data),wV=D.div`
  padding: 32px 20px;
  display: flex;
  justify-content: center;

  ${Te`
    padding: 16px 12px;
  `}
`,EV=D.div`
  width: 100%;
  max-width: 400px;
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 32px;

  ${Te`
    padding: 24px 20px;
  `}
`,xV=()=>ct(SV)?v.jsx(wv,{to:rt.CLASS_LIST}):v.jsx(lo,{children:v.jsx(wV,{children:v.jsx(EV,{children:v.jsx(bV,{})})})});function TV(e){const t=[];for(let n=e-1;n>=0;n--){const i=new Date;i.setDate(i.getDate()-n),t.push(i.toISOString().slice(0,10))}return t}function CV(e=14){const[t,n]=C.useState({state:"idle"});return C.useEffect(()=>{if(!wn){n({state:"failed",error:new Error("No database")});return}n({state:"loading"}),ZA(tr(wn,"metrics")).then(i=>{const o=i.val()??{},u=TV(e).map(f=>{const h=o[f]??{},p=h.diffs??{},g={};for(const[_,S]of Object.entries(p))g[_]={added:S.added??0,changed:S.changed??0,removed:S.removed??0};const y=h.notifications??{};return{date:f,diffs:g,notifications:{sent:y.sent??0,failed:y.failed??0,usersReached:y.usersReached??0}}});n({state:"fulfilled",data:u})}).catch(i=>{n({state:"failed",error:i})})},[e]),t}const py=D.div`
  padding: 32px 24px;
  max-width: 900px;
  margin: 0 auto;

  ${Te`
    padding: 20px 16px;
  `}
`,my=D.h1`
  font-size: 22px;
  font-weight: 700;
  color: ${e=>e.theme.colors.main};
  margin: 0 0 28px;
`,ET=D.section`
  margin-bottom: 40px;
`,xT=D.h2`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${e=>e.theme.colors.secondary};
  margin: 0 0 16px;
`,RV=D.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 40px;

  ${Te`
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  `}
`,ya=D.div`
  background: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 16px 20px;
`,va=D.div`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
  margin-bottom: 4px;
`,_a=D.div`
  font-size: 24px;
  font-weight: 700;
  color: ${e=>e.theme.colors.main};
`,TT=D.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
`,pD=80,AV=D.div`
  background: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 20px 16px 12px;
  overflow-x: auto;
`,IV=D.div`
  display: flex;
  align-items: flex-end;
  gap: 6px;
  min-width: max-content;
`,DV=D.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`,OV=D.div`
  display: flex;
  align-items: flex-end;
  gap: 2px;
  height: ${pD+16}px;
`,NV=D.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`,MV=D.div`
  font-size: 9px;
  font-weight: 600;
  line-height: 1;
  color: ${e=>e.$color};
`,kV=D.div`
  width: 10px;
  height: ${e=>e.$height}px;
  background-color: ${e=>e.$color};
  border-radius: 2px 2px 0 0;
  min-height: 1px;
`,LV=D.div`
  font-size: 10px;
  color: ${e=>e.theme.colors.secondary};
  white-space: nowrap;
`,PV=D.div`
  display: flex;
  gap: 16px;
  margin-top: 12px;
  flex-wrap: wrap;
`,jV=D.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,UV=D.div`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  background-color: ${e=>e.$color};
  flex-shrink: 0;
`;function $V(e){const[,t,n]=e.split("-");return`${parseInt(t)}/${parseInt(n)}`}function CT({days:e,barsForDay:t,legend:n}){const i=e.flatMap(l=>t(l).map(u=>u.value)),o=Math.max(...i,1);return v.jsxs(AV,{children:[v.jsx(IV,{children:e.map(l=>v.jsxs(DV,{children:[v.jsx(OV,{children:t(l).map(u=>v.jsxs(NV,{children:[u.value>0&&v.jsx(MV,{$color:u.color,children:u.value}),v.jsx(kV,{$height:Math.round(u.value/o*pD),$color:u.color})]},u.label))}),v.jsx(LV,{children:$V(l.date)})]},l.date))}),v.jsx(PV,{children:n.map(l=>v.jsxs(jV,{children:[v.jsx(UV,{$color:l.color}),l.label]},l.label))})]})}const Gn={added:"#4ade80",changed:"#facc15",removed:"#f87171",sent:"#60a5fa",failed:"#f87171",usersReached:"#a78bfa"},zV=()=>{const e=CV(14);if(e.state==="idle"||e.state==="loading")return v.jsx(lo,{children:v.jsxs(py,{children:[v.jsx(my,{children:"Stats"}),v.jsx(TT,{children:"Loading…"})]})});if(e.state==="failed")return v.jsx(lo,{children:v.jsxs(py,{children:[v.jsx(my,{children:"Stats"}),v.jsxs(TT,{children:["Failed to load metrics: ",e.error.message??"unknown error"]})]})});const t=e.data,n=t.reduce((o,l)=>{o.sent+=l.notifications.sent,o.failed+=l.notifications.failed,o.usersReached+=l.notifications.usersReached;for(const u of Object.values(l.diffs))o.added+=u.added,o.changed+=u.changed,o.removed+=u.removed;return o},{sent:0,failed:0,usersReached:0,added:0,changed:0,removed:0}),i=[...new Set(t.flatMap(o=>Object.keys(o.diffs)))];return v.jsx(lo,{children:v.jsxs(py,{children:[v.jsx(my,{children:"Stats"}),v.jsxs(RV,{children:[v.jsxs(ya,{children:[v.jsx(va,{children:"Notifications sent (14d)"}),v.jsx(_a,{children:n.sent.toLocaleString()})]}),v.jsxs(ya,{children:[v.jsx(va,{children:"Users reached (14d)"}),v.jsx(_a,{children:n.usersReached.toLocaleString()})]}),v.jsxs(ya,{children:[v.jsx(va,{children:"Delivery failures (14d)"}),v.jsx(_a,{children:n.failed.toLocaleString()})]}),v.jsxs(ya,{children:[v.jsx(va,{children:"Classes added (14d)"}),v.jsx(_a,{children:n.added.toLocaleString()})]}),v.jsxs(ya,{children:[v.jsx(va,{children:"Classes changed (14d)"}),v.jsx(_a,{children:n.changed.toLocaleString()})]}),v.jsxs(ya,{children:[v.jsx(va,{children:"Classes removed (14d)"}),v.jsx(_a,{children:n.removed.toLocaleString()})]})]}),v.jsxs(ET,{children:[v.jsx(xT,{children:"Push notifications (14 days)"}),v.jsx(CT,{days:t,barsForDay:o=>[{value:o.notifications.sent,color:Gn.sent,label:"Sent"},{value:o.notifications.failed,color:Gn.failed,label:"Failed"},{value:o.notifications.usersReached,color:Gn.usersReached,label:"Users reached"}],legend:[{color:Gn.sent,label:"Sent"},{color:Gn.failed,label:"Failed"},{color:Gn.usersReached,label:"Users reached"}]})]}),i.map(o=>v.jsxs(ET,{children:[v.jsxs(xT,{children:["Schedule changes — ",ke.STUDIOS[o]?.location??o," (14 days)"]}),v.jsx(CT,{days:t,barsForDay:l=>{const u=l.diffs[o]??{added:0,changed:0,removed:0};return[{value:u.added,color:Gn.added,label:"Added"},{value:u.changed,color:Gn.changed,label:"Changed"},{value:u.removed,color:Gn.removed,label:"Removed"}]},legend:[{color:Gn.added,label:"Added"},{color:Gn.changed,label:"Changed"},{color:Gn.removed,label:"Removed"}]})]},o))]})})},BV=Jk(Dk(v.jsxs(or,{children:[v.jsx(or,{path:rt.CLASS_LIST,element:v.jsx(cV,{})}),v.jsxs(or,{path:rt.ALERTS,element:v.jsx(_7,{}),children:[v.jsx(or,{index:!0,element:v.jsx(kF,{})}),v.jsx(or,{path:"edit",element:v.jsx(i7,{})}),v.jsx(or,{path:":alertId/test",element:v.jsx(ZB,{})})]}),v.jsx(or,{path:rt.SIGN_IN,element:v.jsx(xV,{})}),v.jsx(or,{path:rt.ABOUT,element:v.jsx(gB,{})}),v.jsx(or,{path:rt.STATS,element:v.jsx(uV,{children:v.jsx(zV,{})})}),v.jsx(or,{path:"*",element:v.jsx(wv,{to:rt.CLASS_LIST,replace:!0})})]}))),HV=(e,t)=>({id:e.uid,displayName:e.displayName||e.email||"",isAdmin:t}),FV={state:"idle"},mD=Ar({name:"session",initialState:FV,reducers:{setLoading(e){return{state:"loading"}},setSession(e,t){return{state:"fulfilled",data:t.payload}},removeSession(e){return{state:"fulfilled",data:null}}}}),{setLoading:RT,setSession:qV,removeSession:AT}=mD.actions,VV=mD.reducer,GV=({children:e})=>{const t=gs();return C.useEffect(()=>{if(t(RT()),!oi)return t(AT()),()=>{};const n=vz(oi,async i=>{if(t(RT()),i){let o=!1;try{o=(wn?await ZA(tr(wn,`admins/${i.uid}`)):null)?.val()===!0}catch{}t(qV(HV(i,o)))}else t(AT())});return()=>n()},[t]),v.jsx(v.Fragment,{children:e})},YV={alerts:[]},gD=Ar({name:"alerts",initialState:YV,reducers:{addAlert(e,t){e.alerts.push(t.payload)},setAlerts(e,t){e.alerts=t.payload},removeAlerts(e){e.alerts=[]}}}),{addAlert:JV,setAlerts:eG,removeAlerts:tG}=gD.actions,WV=gD.reducer,QV=Nj({reducer:{alerts:WV,filters:GF,session:VV,[Af.reducerPath]:Af.reducer,[ov.name]:ov.reducer},middleware:e=>e().concat(Af.middleware)}),KV={borderRadius:"8px",borderColor:"#d1d1d1",colors:{main:"#494f59",secondary:"#514e60",mainSurface:"#fff",secondarySurface:"#ededed",accent:"#cb3449"},widths:{tablet:1024,mobile:560}};function XV(){return C.useEffect(()=>{const t=new URLSearchParams(window.location.search).get("classUrl");t&&(window.history.replaceState(null,"",window.location.pathname+window.location.hash),window.location.assign(new URL(t,"https://schedule.studio.onepeloton.com").href))},[]),v.jsx(fL,{theme:KV,children:v.jsx(YN,{store:QV,children:v.jsx(GV,{children:v.jsx(g$,{children:v.jsx(d2,{router:BV})})})})})}ON.createRoot(document.getElementById("root")).render(v.jsx(C.StrictMode,{children:v.jsx(XV,{})}));
//# sourceMappingURL=index-C-2seYuL.js.map
