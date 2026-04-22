(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();function wN(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ug={exports:{}},tc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P1;function EN(){if(P1)return tc;P1=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(i,a,l){var u=null;if(l!==void 0&&(u=""+l),a.key!==void 0&&(u=""+a.key),"key"in a){l={};for(var f in a)f!=="key"&&(l[f]=a[f])}else l=a;return a=l.ref,{$$typeof:e,type:i,key:u,ref:a!==void 0?a:null,props:l}}return tc.Fragment=t,tc.jsx=n,tc.jsxs=n,tc}var j1;function xN(){return j1||(j1=1,ug.exports=EN()),ug.exports}var v=xN(),dg={exports:{}},je={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U1;function TN(){if(U1)return je;U1=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function _(N){return N===null||typeof N!="object"?null:(N=y&&N[y]||N["@@iterator"],typeof N=="function"?N:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,O={};function R(N,X,le){this.props=N,this.context=X,this.refs=O,this.updater=le||b}R.prototype.isReactComponent={},R.prototype.setState=function(N,X){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,X,"setState")},R.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function D(){}D.prototype=R.prototype;function k(N,X,le){this.props=N,this.context=X,this.refs=O,this.updater=le||b}var x=k.prototype=new D;x.constructor=k,w(x,R.prototype),x.isPureReactComponent=!0;var A=Array.isArray,M={H:null,A:null,T:null,S:null,V:null},T=Object.prototype.hasOwnProperty;function P(N,X,le,ie,de,me){return le=me.ref,{$$typeof:e,type:N,key:X,ref:le!==void 0?le:null,props:me}}function V(N,X){return P(N.type,X,void 0,void 0,void 0,N.props)}function H(N){return typeof N=="object"&&N!==null&&N.$$typeof===e}function B(N){var X={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(le){return X[le]})}var z=/\/+/g;function G(N,X){return typeof N=="object"&&N!==null&&N.key!=null?B(""+N.key):X.toString(36)}function F(){}function K(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(F,F):(N.status="pending",N.then(function(X){N.status==="pending"&&(N.status="fulfilled",N.value=X)},function(X){N.status==="pending"&&(N.status="rejected",N.reason=X)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function ue(N,X,le,ie,de){var me=typeof N;(me==="undefined"||me==="boolean")&&(N=null);var pe=!1;if(N===null)pe=!0;else switch(me){case"bigint":case"string":case"number":pe=!0;break;case"object":switch(N.$$typeof){case e:case t:pe=!0;break;case g:return pe=N._init,ue(pe(N._payload),X,le,ie,de)}}if(pe)return de=de(N),pe=ie===""?"."+G(N,0):ie,A(de)?(le="",pe!=null&&(le=pe.replace(z,"$&/")+"/"),ue(de,X,le,"",function(De){return De})):de!=null&&(H(de)&&(de=V(de,le+(de.key==null||N&&N.key===de.key?"":(""+de.key).replace(z,"$&/")+"/")+pe)),X.push(de)),1;pe=0;var Ae=ie===""?".":ie+":";if(A(N))for(var be=0;be<N.length;be++)ie=N[be],me=Ae+G(ie,be),pe+=ue(ie,X,le,me,de);else if(be=_(N),typeof be=="function")for(N=be.call(N),be=0;!(ie=N.next()).done;)ie=ie.value,me=Ae+G(ie,be++),pe+=ue(ie,X,le,me,de);else if(me==="object"){if(typeof N.then=="function")return ue(K(N),X,le,ie,de);throw X=String(N),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return pe}function U(N,X,le){if(N==null)return N;var ie=[],de=0;return ue(N,ie,"","",function(me){return X.call(le,me,de++)}),ie}function ee(N){if(N._status===-1){var X=N._result;X=X(),X.then(function(le){(N._status===0||N._status===-1)&&(N._status=1,N._result=le)},function(le){(N._status===0||N._status===-1)&&(N._status=2,N._result=le)}),N._status===-1&&(N._status=0,N._result=X)}if(N._status===1)return N._result.default;throw N._result}var ne=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function oe(){}return je.Children={map:U,forEach:function(N,X,le){U(N,function(){X.apply(this,arguments)},le)},count:function(N){var X=0;return U(N,function(){X++}),X},toArray:function(N){return U(N,function(X){return X})||[]},only:function(N){if(!H(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},je.Component=R,je.Fragment=n,je.Profiler=a,je.PureComponent=k,je.StrictMode=i,je.Suspense=h,je.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=M,je.__COMPILER_RUNTIME={__proto__:null,c:function(N){return M.H.useMemoCache(N)}},je.cache=function(N){return function(){return N.apply(null,arguments)}},je.cloneElement=function(N,X,le){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var ie=w({},N.props),de=N.key,me=void 0;if(X!=null)for(pe in X.ref!==void 0&&(me=void 0),X.key!==void 0&&(de=""+X.key),X)!T.call(X,pe)||pe==="key"||pe==="__self"||pe==="__source"||pe==="ref"&&X.ref===void 0||(ie[pe]=X[pe]);var pe=arguments.length-2;if(pe===1)ie.children=le;else if(1<pe){for(var Ae=Array(pe),be=0;be<pe;be++)Ae[be]=arguments[be+2];ie.children=Ae}return P(N.type,de,void 0,void 0,me,ie)},je.createContext=function(N){return N={$$typeof:u,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:l,_context:N},N},je.createElement=function(N,X,le){var ie,de={},me=null;if(X!=null)for(ie in X.key!==void 0&&(me=""+X.key),X)T.call(X,ie)&&ie!=="key"&&ie!=="__self"&&ie!=="__source"&&(de[ie]=X[ie]);var pe=arguments.length-2;if(pe===1)de.children=le;else if(1<pe){for(var Ae=Array(pe),be=0;be<pe;be++)Ae[be]=arguments[be+2];de.children=Ae}if(N&&N.defaultProps)for(ie in pe=N.defaultProps,pe)de[ie]===void 0&&(de[ie]=pe[ie]);return P(N,me,void 0,void 0,null,de)},je.createRef=function(){return{current:null}},je.forwardRef=function(N){return{$$typeof:f,render:N}},je.isValidElement=H,je.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:ee}},je.memo=function(N,X){return{$$typeof:p,type:N,compare:X===void 0?null:X}},je.startTransition=function(N){var X=M.T,le={};M.T=le;try{var ie=N(),de=M.S;de!==null&&de(le,ie),typeof ie=="object"&&ie!==null&&typeof ie.then=="function"&&ie.then(oe,ne)}catch(me){ne(me)}finally{M.T=X}},je.unstable_useCacheRefresh=function(){return M.H.useCacheRefresh()},je.use=function(N){return M.H.use(N)},je.useActionState=function(N,X,le){return M.H.useActionState(N,X,le)},je.useCallback=function(N,X){return M.H.useCallback(N,X)},je.useContext=function(N){return M.H.useContext(N)},je.useDebugValue=function(){},je.useDeferredValue=function(N,X){return M.H.useDeferredValue(N,X)},je.useEffect=function(N,X,le){var ie=M.H;if(typeof le=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ie.useEffect(N,X)},je.useId=function(){return M.H.useId()},je.useImperativeHandle=function(N,X,le){return M.H.useImperativeHandle(N,X,le)},je.useInsertionEffect=function(N,X){return M.H.useInsertionEffect(N,X)},je.useLayoutEffect=function(N,X){return M.H.useLayoutEffect(N,X)},je.useMemo=function(N,X){return M.H.useMemo(N,X)},je.useOptimistic=function(N,X){return M.H.useOptimistic(N,X)},je.useReducer=function(N,X,le){return M.H.useReducer(N,X,le)},je.useRef=function(N){return M.H.useRef(N)},je.useState=function(N){return M.H.useState(N)},je.useSyncExternalStore=function(N,X,le){return M.H.useSyncExternalStore(N,X,le)},je.useTransition=function(){return M.H.useTransition()},je.version="19.1.1",je}var $1;function bh(){return $1||($1=1,dg.exports=TN()),dg.exports}var C=bh();const ca=wN(C);var fg={exports:{}},nc={},hg={exports:{}},pg={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z1;function CN(){return z1||(z1=1,(function(e){function t(U,ee){var ne=U.length;U.push(ee);e:for(;0<ne;){var oe=ne-1>>>1,N=U[oe];if(0<a(N,ee))U[oe]=ee,U[ne]=N,ne=oe;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var ee=U[0],ne=U.pop();if(ne!==ee){U[0]=ne;e:for(var oe=0,N=U.length,X=N>>>1;oe<X;){var le=2*(oe+1)-1,ie=U[le],de=le+1,me=U[de];if(0>a(ie,ne))de<N&&0>a(me,ie)?(U[oe]=me,U[de]=ne,oe=de):(U[oe]=ie,U[le]=ne,oe=le);else if(de<N&&0>a(me,ne))U[oe]=me,U[de]=ne,oe=de;else break e}}return ee}function a(U,ee){var ne=U.sortIndex-ee.sortIndex;return ne!==0?ne:U.id-ee.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();e.unstable_now=function(){return u.now()-f}}var h=[],p=[],g=1,y=null,_=3,b=!1,w=!1,O=!1,R=!1,D=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;function A(U){for(var ee=n(p);ee!==null;){if(ee.callback===null)i(p);else if(ee.startTime<=U)i(p),ee.sortIndex=ee.expirationTime,t(h,ee);else break;ee=n(p)}}function M(U){if(O=!1,A(U),!w)if(n(h)!==null)w=!0,T||(T=!0,G());else{var ee=n(p);ee!==null&&ue(M,ee.startTime-U)}}var T=!1,P=-1,V=5,H=-1;function B(){return R?!0:!(e.unstable_now()-H<V)}function z(){if(R=!1,T){var U=e.unstable_now();H=U;var ee=!0;try{e:{w=!1,O&&(O=!1,k(P),P=-1),b=!0;var ne=_;try{t:{for(A(U),y=n(h);y!==null&&!(y.expirationTime>U&&B());){var oe=y.callback;if(typeof oe=="function"){y.callback=null,_=y.priorityLevel;var N=oe(y.expirationTime<=U);if(U=e.unstable_now(),typeof N=="function"){y.callback=N,A(U),ee=!0;break t}y===n(h)&&i(h),A(U)}else i(h);y=n(h)}if(y!==null)ee=!0;else{var X=n(p);X!==null&&ue(M,X.startTime-U),ee=!1}}break e}finally{y=null,_=ne,b=!1}ee=void 0}}finally{ee?G():T=!1}}}var G;if(typeof x=="function")G=function(){x(z)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,K=F.port2;F.port1.onmessage=z,G=function(){K.postMessage(null)}}else G=function(){D(z,0)};function ue(U,ee){P=D(function(){U(e.unstable_now())},ee)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(U){U.callback=null},e.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<U?Math.floor(1e3/U):5},e.unstable_getCurrentPriorityLevel=function(){return _},e.unstable_next=function(U){switch(_){case 1:case 2:case 3:var ee=3;break;default:ee=_}var ne=_;_=ee;try{return U()}finally{_=ne}},e.unstable_requestPaint=function(){R=!0},e.unstable_runWithPriority=function(U,ee){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var ne=_;_=U;try{return ee()}finally{_=ne}},e.unstable_scheduleCallback=function(U,ee,ne){var oe=e.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?oe+ne:oe):ne=oe,U){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=ne+N,U={id:g++,callback:ee,priorityLevel:U,startTime:ne,expirationTime:N,sortIndex:-1},ne>oe?(U.sortIndex=ne,t(p,U),n(h)===null&&U===n(p)&&(O?(k(P),P=-1):O=!0,ue(M,ne-oe))):(U.sortIndex=N,t(h,U),w||b||(w=!0,T||(T=!0,G()))),U},e.unstable_shouldYield=B,e.unstable_wrapCallback=function(U){var ee=_;return function(){var ne=_;_=ee;try{return U.apply(this,arguments)}finally{_=ne}}}})(pg)),pg}var B1;function RN(){return B1||(B1=1,hg.exports=CN()),hg.exports}var mg={exports:{}},rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H1;function AN(){if(H1)return rn;H1=1;var e=bh();function t(h){var p="https://react.dev/errors/"+h;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+h+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var i={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(h,p,g){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:y==null?null:""+y,children:h,containerInfo:p,implementation:g}}var u=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(h,p){if(h==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,rn.createPortal=function(h,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return l(h,p,null,g)},rn.flushSync=function(h){var p=u.T,g=i.p;try{if(u.T=null,i.p=2,h)return h()}finally{u.T=p,i.p=g,i.d.f()}},rn.preconnect=function(h,p){typeof h=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,i.d.C(h,p))},rn.prefetchDNS=function(h){typeof h=="string"&&i.d.D(h)},rn.preinit=function(h,p){if(typeof h=="string"&&p&&typeof p.as=="string"){var g=p.as,y=f(g,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,b=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?i.d.S(h,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:y,integrity:_,fetchPriority:b}):g==="script"&&i.d.X(h,{crossOrigin:y,integrity:_,fetchPriority:b,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},rn.preinitModule=function(h,p){if(typeof h=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=f(p.as,p.crossOrigin);i.d.M(h,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&i.d.M(h)},rn.preload=function(h,p){if(typeof h=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,y=f(g,p.crossOrigin);i.d.L(h,g,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},rn.preloadModule=function(h,p){if(typeof h=="string")if(p){var g=f(p.as,p.crossOrigin);i.d.m(h,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else i.d.m(h)},rn.requestFormReset=function(h){i.d.r(h)},rn.unstable_batchedUpdates=function(h,p){return h(p)},rn.useFormState=function(h,p,g){return u.H.useFormState(h,p,g)},rn.useFormStatus=function(){return u.H.useHostTransitionStatus()},rn.version="19.1.1",rn}var F1;function DT(){if(F1)return mg.exports;F1=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),mg.exports=AN(),mg.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q1;function IN(){if(q1)return nc;q1=1;var e=RN(),t=bh(),n=DT();function i(r){var s="https://react.dev/errors/"+r;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function l(r){var s=r,o=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(o=s.return),r=s.return;while(r)}return s.tag===3?o:null}function u(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function f(r){if(l(r)!==r)throw Error(i(188))}function h(r){var s=r.alternate;if(!s){if(s=l(r),s===null)throw Error(i(188));return s!==r?null:r}for(var o=r,c=s;;){var d=o.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){o=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===o)return f(d),r;if(m===c)return f(d),s;m=m.sibling}throw Error(i(188))}if(o.return!==c.return)o=d,c=m;else{for(var S=!1,E=d.child;E;){if(E===o){S=!0,o=d,c=m;break}if(E===c){S=!0,c=d,o=m;break}E=E.sibling}if(!S){for(E=m.child;E;){if(E===o){S=!0,o=m,c=d;break}if(E===c){S=!0,c=m,o=d;break}E=E.sibling}if(!S)throw Error(i(189))}}if(o.alternate!==c)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?r:s}function p(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r;for(r=r.child;r!==null;){if(s=p(r),s!==null)return s;r=r.sibling}return null}var g=Object.assign,y=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),k=Symbol.for("react.consumer"),x=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),T=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),H=Symbol.for("react.activity"),B=Symbol.for("react.memo_cache_sentinel"),z=Symbol.iterator;function G(r){return r===null||typeof r!="object"?null:(r=z&&r[z]||r["@@iterator"],typeof r=="function"?r:null)}var F=Symbol.for("react.client.reference");function K(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===F?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case w:return"Fragment";case R:return"Profiler";case O:return"StrictMode";case M:return"Suspense";case T:return"SuspenseList";case H:return"Activity"}if(typeof r=="object")switch(r.$$typeof){case b:return"Portal";case x:return(r.displayName||"Context")+".Provider";case k:return(r._context.displayName||"Context")+".Consumer";case A:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case P:return s=r.displayName||null,s!==null?s:K(r.type)||"Memo";case V:s=r._payload,r=r._init;try{return K(r(s))}catch{}}return null}var ue=Array.isArray,U=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},oe=[],N=-1;function X(r){return{current:r}}function le(r){0>N||(r.current=oe[N],oe[N]=null,N--)}function ie(r,s){N++,oe[N]=r.current,r.current=s}var de=X(null),me=X(null),pe=X(null),Ae=X(null);function be(r,s){switch(ie(pe,s),ie(me,r),ie(de,null),s.nodeType){case 9:case 11:r=(r=s.documentElement)&&(r=r.namespaceURI)?u1(r):0;break;default:if(r=s.tagName,s=s.namespaceURI)s=u1(s),r=d1(s,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}le(de),ie(de,r)}function De(){le(de),le(me),le(pe)}function $e(r){r.memoizedState!==null&&ie(Ae,r);var s=de.current,o=d1(s,r.type);s!==o&&(ie(me,r),ie(de,o))}function _t(r){me.current===r&&(le(de),le(me)),Ae.current===r&&(le(Ae),Kl._currentValue=ne)}var gt=Object.prototype.hasOwnProperty,kn=e.unstable_scheduleCallback,Et=e.unstable_cancelCallback,Ln=e.unstable_shouldYield,Lr=e.unstable_requestPaint,Yt=e.unstable_now,sl=e.unstable_getCurrentPriorityLevel,Ss=e.unstable_ImmediatePriority,Da=e.unstable_UserBlockingPriority,Oa=e.unstable_NormalPriority,Pr=e.unstable_LowPriority,wi=e.unstable_IdlePriority,Ru=e.log,al=e.unstable_setDisableYieldValue,hn=null,bt=null;function nr(r){if(typeof Ru=="function"&&al(r),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(hn,r)}catch{}}var Wt=Math.clz32?Math.clz32:Au,ap=Math.log,_r=Math.LN2;function Au(r){return r>>>=0,r===0?32:31-(ap(r)/_r|0)|0}var ws=256,Es=4194304;function jr(r){var s=r&42;if(s!==0)return s;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return r}}function xs(r,s,o){var c=r.pendingLanes;if(c===0)return 0;var d=0,m=r.suspendedLanes,S=r.pingedLanes;r=r.warmLanes;var E=c&134217727;return E!==0?(c=E&~m,c!==0?d=jr(c):(S&=E,S!==0?d=jr(S):o||(o=E&~r,o!==0&&(d=jr(o))))):(E=c&~m,E!==0?d=jr(E):S!==0?d=jr(S):o||(o=c&~r,o!==0&&(d=jr(o)))),d===0?0:s!==0&&s!==d&&(s&m)===0&&(m=d&-d,o=s&-s,m>=o||m===32&&(o&4194048)!==0)?s:d}function br(r,s){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&s)===0}function Iu(r,s){switch(r){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Na(){var r=ws;return ws<<=1,(ws&4194048)===0&&(ws=256),r}function Du(){var r=Es;return Es<<=1,(Es&62914560)===0&&(Es=4194304),r}function Ma(r){for(var s=[],o=0;31>o;o++)s.push(r);return s}function Ts(r,s){r.pendingLanes|=s,s!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function Ou(r,s,o,c,d,m){var S=r.pendingLanes;r.pendingLanes=o,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=o,r.entangledLanes&=o,r.errorRecoveryDisabledLanes&=o,r.shellSuspendCounter=0;var E=r.entanglements,L=r.expirationTimes,Q=r.hiddenUpdates;for(o=S&~o;0<o;){var re=31-Wt(o),ae=1<<re;E[re]=0,L[re]=-1;var Z=Q[re];if(Z!==null)for(Q[re]=null,re=0;re<Z.length;re++){var J=Z[re];J!==null&&(J.lane&=-536870913)}o&=~ae}c!==0&&Cs(r,c,0),m!==0&&d===0&&r.tag!==0&&(r.suspendedLanes|=m&~(S&~s))}function Cs(r,s,o){r.pendingLanes|=s,r.suspendedLanes&=~s;var c=31-Wt(s);r.entangledLanes|=s,r.entanglements[c]=r.entanglements[c]|1073741824|o&4194090}function Rs(r,s){var o=r.entangledLanes|=s;for(r=r.entanglements;o;){var c=31-Wt(o),d=1<<c;d&s|r[c]&s&&(r[c]|=s),o&=~d}}function ol(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function ll(r){return r&=-r,2<r?8<r?(r&134217727)!==0?32:268435456:8:2}function j(){var r=ee.p;return r!==0?r:(r=window.event,r===void 0?32:D1(r.type))}function Y(r,s){var o=ee.p;try{return ee.p=r,s()}finally{ee.p=o}}var te=Math.random().toString(36).slice(2),ce="__reactFiber$"+te,fe="__reactProps$"+te,ye="__reactContainer$"+te,we="__reactEvents$"+te,ve="__reactListeners$"+te,xe="__reactHandles$"+te,Ce="__reactResources$"+te,_e="__reactMarker$"+te;function Se(r){delete r[ce],delete r[fe],delete r[we],delete r[ve],delete r[xe]}function ze(r){var s=r[ce];if(s)return s;for(var o=r.parentNode;o;){if(s=o[ye]||o[ce]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(r=m1(r);r!==null;){if(o=r[ce])return o;r=m1(r)}return s}r=o,o=r.parentNode}return null}function Ze(r){if(r=r[ce]||r[ye]){var s=r.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return r}return null}function yt(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r.stateNode;throw Error(i(33))}function xt(r){var s=r[Ce];return s||(s=r[Ce]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function Le(r){r[_e]=!0}var it=new Set,Sr={};function En(r,s){ln(r,s),ln(r+"Capture",s)}function ln(r,s){for(Sr[r]=s,r=0;r<s.length;r++)it.add(s[r])}var Pn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ka={},Ei={};function Ur(r){return gt.call(Ei,r)?!0:gt.call(ka,r)?!1:Pn.test(r)?Ei[r]=!0:(ka[r]=!0,!1)}function $r(r,s,o){if(Ur(s))if(o===null)r.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":r.removeAttribute(s);return;case"boolean":var c=s.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){r.removeAttribute(s);return}}r.setAttribute(s,""+o)}}function zr(r,s,o){if(o===null)r.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(s);return}r.setAttribute(s,""+o)}}function Pe(r,s,o,c){if(c===null)r.removeAttribute(o);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(o);return}r.setAttributeNS(s,o,""+c)}}var Nt,Br;function pn(r){if(Nt===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);Nt=s&&s[1]||"",Br=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Nt+r+Br}var St=!1;function xi(r,s){if(!r||St)return"";St=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(s){var ae=function(){throw Error()};if(Object.defineProperty(ae.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ae,[])}catch(J){var Z=J}Reflect.construct(r,[],ae)}else{try{ae.call()}catch(J){Z=J}r.call(ae.prototype)}}else{try{throw Error()}catch(J){Z=J}(ae=r())&&typeof ae.catch=="function"&&ae.catch(function(){})}}catch(J){if(J&&Z&&typeof J.stack=="string")return[J.stack,Z.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=c.DetermineComponentFrameRoot(),S=m[0],E=m[1];if(S&&E){var L=S.split(`
`),Q=E.split(`
`);for(d=c=0;c<L.length&&!L[c].includes("DetermineComponentFrameRoot");)c++;for(;d<Q.length&&!Q[d].includes("DetermineComponentFrameRoot");)d++;if(c===L.length||d===Q.length)for(c=L.length-1,d=Q.length-1;1<=c&&0<=d&&L[c]!==Q[d];)d--;for(;1<=c&&0<=d;c--,d--)if(L[c]!==Q[d]){if(c!==1||d!==1)do if(c--,d--,0>d||L[c]!==Q[d]){var re=`
`+L[c].replace(" at new "," at ");return r.displayName&&re.includes("<anonymous>")&&(re=re.replace("<anonymous>",r.displayName)),re}while(1<=c&&0<=d);break}}}finally{St=!1,Error.prepareStackTrace=o}return(o=r?r.displayName||r.name:"")?pn(o):""}function Nu(r){switch(r.tag){case 26:case 27:case 5:return pn(r.type);case 16:return pn("Lazy");case 13:return pn("Suspense");case 19:return pn("SuspenseList");case 0:case 15:return xi(r.type,!1);case 11:return xi(r.type.render,!1);case 1:return xi(r.type,!0);case 31:return pn("Activity");default:return""}}function Mu(r){try{var s="";do s+=Nu(r),r=r.return;while(r);return s}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function jn(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function sb(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function yD(r){var s=sb(r)?"checked":"value",o=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),c=""+r[s];if(!r.hasOwnProperty(s)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,m=o.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return d.call(this)},set:function(S){c=""+S,m.call(this,S)}}),Object.defineProperty(r,s,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(S){c=""+S},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function ku(r){r._valueTracker||(r._valueTracker=yD(r))}function ab(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var o=s.getValue(),c="";return r&&(c=sb(r)?r.checked?"true":"false":r.value),r=c,r!==o?(s.setValue(r),!0):!1}function Lu(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}var vD=/[\n"\\]/g;function Un(r){return r.replace(vD,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function op(r,s,o,c,d,m,S,E){r.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?r.type=S:r.removeAttribute("type"),s!=null?S==="number"?(s===0&&r.value===""||r.value!=s)&&(r.value=""+jn(s)):r.value!==""+jn(s)&&(r.value=""+jn(s)):S!=="submit"&&S!=="reset"||r.removeAttribute("value"),s!=null?lp(r,S,jn(s)):o!=null?lp(r,S,jn(o)):c!=null&&r.removeAttribute("value"),d==null&&m!=null&&(r.defaultChecked=!!m),d!=null&&(r.checked=d&&typeof d!="function"&&typeof d!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?r.name=""+jn(E):r.removeAttribute("name")}function ob(r,s,o,c,d,m,S,E){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(r.type=m),s!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||s!=null))return;o=o!=null?""+jn(o):"",s=s!=null?""+jn(s):o,E||s===r.value||(r.value=s),r.defaultValue=s}c=c??d,c=typeof c!="function"&&typeof c!="symbol"&&!!c,r.checked=E?r.checked:!!c,r.defaultChecked=!!c,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(r.name=S)}function lp(r,s,o){s==="number"&&Lu(r.ownerDocument)===r||r.defaultValue===""+o||(r.defaultValue=""+o)}function La(r,s,o,c){if(r=r.options,s){s={};for(var d=0;d<o.length;d++)s["$"+o[d]]=!0;for(o=0;o<r.length;o++)d=s.hasOwnProperty("$"+r[o].value),r[o].selected!==d&&(r[o].selected=d),d&&c&&(r[o].defaultSelected=!0)}else{for(o=""+jn(o),s=null,d=0;d<r.length;d++){if(r[d].value===o){r[d].selected=!0,c&&(r[d].defaultSelected=!0);return}s!==null||r[d].disabled||(s=r[d])}s!==null&&(s.selected=!0)}}function lb(r,s,o){if(s!=null&&(s=""+jn(s),s!==r.value&&(r.value=s),o==null)){r.defaultValue!==s&&(r.defaultValue=s);return}r.defaultValue=o!=null?""+jn(o):""}function cb(r,s,o,c){if(s==null){if(c!=null){if(o!=null)throw Error(i(92));if(ue(c)){if(1<c.length)throw Error(i(93));c=c[0]}o=c}o==null&&(o=""),s=o}o=jn(s),r.defaultValue=o,c=r.textContent,c===o&&c!==""&&c!==null&&(r.value=c)}function Pa(r,s){if(s){var o=r.firstChild;if(o&&o===r.lastChild&&o.nodeType===3){o.nodeValue=s;return}}r.textContent=s}var _D=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ub(r,s,o){var c=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?c?r.setProperty(s,""):s==="float"?r.cssFloat="":r[s]="":c?r.setProperty(s,o):typeof o!="number"||o===0||_D.has(s)?s==="float"?r.cssFloat=o:r[s]=(""+o).trim():r[s]=o+"px"}function db(r,s,o){if(s!=null&&typeof s!="object")throw Error(i(62));if(r=r.style,o!=null){for(var c in o)!o.hasOwnProperty(c)||s!=null&&s.hasOwnProperty(c)||(c.indexOf("--")===0?r.setProperty(c,""):c==="float"?r.cssFloat="":r[c]="");for(var d in s)c=s[d],s.hasOwnProperty(d)&&o[d]!==c&&ub(r,d,c)}else for(var m in s)s.hasOwnProperty(m)&&ub(r,m,s[m])}function cp(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bD=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),SD=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Pu(r){return SD.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}var up=null;function dp(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var ja=null,Ua=null;function fb(r){var s=Ze(r);if(s&&(r=s.stateNode)){var o=r[fe]||null;e:switch(r=s.stateNode,s.type){case"input":if(op(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=r;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Un(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var c=o[s];if(c!==r&&c.form===r.form){var d=c[fe]||null;if(!d)throw Error(i(90));op(c,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(s=0;s<o.length;s++)c=o[s],c.form===r.form&&ab(c)}break e;case"textarea":lb(r,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&La(r,!!o.multiple,s,!1)}}}var fp=!1;function hb(r,s,o){if(fp)return r(s,o);fp=!0;try{var c=r(s);return c}finally{if(fp=!1,(ja!==null||Ua!==null)&&(Sd(),ja&&(s=ja,r=Ua,Ua=ja=null,fb(s),r)))for(s=0;s<r.length;s++)fb(r[s])}}function cl(r,s){var o=r.stateNode;if(o===null)return null;var c=o[fe]||null;if(c===null)return null;o=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(o&&typeof o!="function")throw Error(i(231,s,typeof o));return o}var Hr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hp=!1;if(Hr)try{var ul={};Object.defineProperty(ul,"passive",{get:function(){hp=!0}}),window.addEventListener("test",ul,ul),window.removeEventListener("test",ul,ul)}catch{hp=!1}var Ti=null,pp=null,ju=null;function pb(){if(ju)return ju;var r,s=pp,o=s.length,c,d="value"in Ti?Ti.value:Ti.textContent,m=d.length;for(r=0;r<o&&s[r]===d[r];r++);var S=o-r;for(c=1;c<=S&&s[o-c]===d[m-c];c++);return ju=d.slice(r,1<c?1-c:void 0)}function Uu(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function $u(){return!0}function mb(){return!1}function mn(r){function s(o,c,d,m,S){this._reactName=o,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=S,this.currentTarget=null;for(var E in r)r.hasOwnProperty(E)&&(o=r[E],this[E]=o?o(m):m[E]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?$u:mb,this.isPropagationStopped=mb,this}return g(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=$u)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=$u)},persist:function(){},isPersistent:$u}),s}var As={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zu=mn(As),dl=g({},As,{view:0,detail:0}),wD=mn(dl),mp,gp,fl,Bu=g({},dl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vp,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==fl&&(fl&&r.type==="mousemove"?(mp=r.screenX-fl.screenX,gp=r.screenY-fl.screenY):gp=mp=0,fl=r),mp)},movementY:function(r){return"movementY"in r?r.movementY:gp}}),gb=mn(Bu),ED=g({},Bu,{dataTransfer:0}),xD=mn(ED),TD=g({},dl,{relatedTarget:0}),yp=mn(TD),CD=g({},As,{animationName:0,elapsedTime:0,pseudoElement:0}),RD=mn(CD),AD=g({},As,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),ID=mn(AD),DD=g({},As,{data:0}),yb=mn(DD),OD={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ND={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},MD={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kD(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=MD[r])?!!s[r]:!1}function vp(){return kD}var LD=g({},dl,{key:function(r){if(r.key){var s=OD[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Uu(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?ND[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vp,charCode:function(r){return r.type==="keypress"?Uu(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Uu(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),PD=mn(LD),jD=g({},Bu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vb=mn(jD),UD=g({},dl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vp}),$D=mn(UD),zD=g({},As,{propertyName:0,elapsedTime:0,pseudoElement:0}),BD=mn(zD),HD=g({},Bu,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),FD=mn(HD),qD=g({},As,{newState:0,oldState:0}),VD=mn(qD),GD=[9,13,27,32],_p=Hr&&"CompositionEvent"in window,hl=null;Hr&&"documentMode"in document&&(hl=document.documentMode);var YD=Hr&&"TextEvent"in window&&!hl,_b=Hr&&(!_p||hl&&8<hl&&11>=hl),bb=" ",Sb=!1;function wb(r,s){switch(r){case"keyup":return GD.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Eb(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var $a=!1;function WD(r,s){switch(r){case"compositionend":return Eb(s);case"keypress":return s.which!==32?null:(Sb=!0,bb);case"textInput":return r=s.data,r===bb&&Sb?null:r;default:return null}}function QD(r,s){if($a)return r==="compositionend"||!_p&&wb(r,s)?(r=pb(),ju=pp=Ti=null,$a=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return _b&&s.locale!=="ko"?null:s.data;default:return null}}var KD={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xb(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!KD[r.type]:s==="textarea"}function Tb(r,s,o,c){ja?Ua?Ua.push(c):Ua=[c]:ja=c,s=Rd(s,"onChange"),0<s.length&&(o=new zu("onChange","change",null,o,c),r.push({event:o,listeners:s}))}var pl=null,ml=null;function XD(r){s1(r,0)}function Hu(r){var s=yt(r);if(ab(s))return r}function Cb(r,s){if(r==="change")return s}var Rb=!1;if(Hr){var bp;if(Hr){var Sp="oninput"in document;if(!Sp){var Ab=document.createElement("div");Ab.setAttribute("oninput","return;"),Sp=typeof Ab.oninput=="function"}bp=Sp}else bp=!1;Rb=bp&&(!document.documentMode||9<document.documentMode)}function Ib(){pl&&(pl.detachEvent("onpropertychange",Db),ml=pl=null)}function Db(r){if(r.propertyName==="value"&&Hu(ml)){var s=[];Tb(s,ml,r,dp(r)),hb(XD,s)}}function ZD(r,s,o){r==="focusin"?(Ib(),pl=s,ml=o,pl.attachEvent("onpropertychange",Db)):r==="focusout"&&Ib()}function JD(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Hu(ml)}function eO(r,s){if(r==="click")return Hu(s)}function tO(r,s){if(r==="input"||r==="change")return Hu(s)}function nO(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var xn=typeof Object.is=="function"?Object.is:nO;function gl(r,s){if(xn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var o=Object.keys(r),c=Object.keys(s);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var d=o[c];if(!gt.call(s,d)||!xn(r[d],s[d]))return!1}return!0}function Ob(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Nb(r,s){var o=Ob(r);r=0;for(var c;o;){if(o.nodeType===3){if(c=r+o.textContent.length,r<=s&&c>=s)return{node:o,offset:s-r};r=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Ob(o)}}function Mb(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?Mb(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function kb(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var s=Lu(r.document);s instanceof r.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)r=s.contentWindow;else break;s=Lu(r.document)}return s}function wp(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}var rO=Hr&&"documentMode"in document&&11>=document.documentMode,za=null,Ep=null,yl=null,xp=!1;function Lb(r,s,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;xp||za==null||za!==Lu(c)||(c=za,"selectionStart"in c&&wp(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),yl&&gl(yl,c)||(yl=c,c=Rd(Ep,"onSelect"),0<c.length&&(s=new zu("onSelect","select",null,s,o),r.push({event:s,listeners:c}),s.target=za)))}function Is(r,s){var o={};return o[r.toLowerCase()]=s.toLowerCase(),o["Webkit"+r]="webkit"+s,o["Moz"+r]="moz"+s,o}var Ba={animationend:Is("Animation","AnimationEnd"),animationiteration:Is("Animation","AnimationIteration"),animationstart:Is("Animation","AnimationStart"),transitionrun:Is("Transition","TransitionRun"),transitionstart:Is("Transition","TransitionStart"),transitioncancel:Is("Transition","TransitionCancel"),transitionend:Is("Transition","TransitionEnd")},Tp={},Pb={};Hr&&(Pb=document.createElement("div").style,"AnimationEvent"in window||(delete Ba.animationend.animation,delete Ba.animationiteration.animation,delete Ba.animationstart.animation),"TransitionEvent"in window||delete Ba.transitionend.transition);function Ds(r){if(Tp[r])return Tp[r];if(!Ba[r])return r;var s=Ba[r],o;for(o in s)if(s.hasOwnProperty(o)&&o in Pb)return Tp[r]=s[o];return r}var jb=Ds("animationend"),Ub=Ds("animationiteration"),$b=Ds("animationstart"),iO=Ds("transitionrun"),sO=Ds("transitionstart"),aO=Ds("transitioncancel"),zb=Ds("transitionend"),Bb=new Map,Cp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Cp.push("scrollEnd");function rr(r,s){Bb.set(r,s),En(s,[r])}var Hb=new WeakMap;function $n(r,s){if(typeof r=="object"&&r!==null){var o=Hb.get(r);return o!==void 0?o:(s={value:r,source:s,stack:Mu(s)},Hb.set(r,s),s)}return{value:r,source:s,stack:Mu(s)}}var zn=[],Ha=0,Rp=0;function Fu(){for(var r=Ha,s=Rp=Ha=0;s<r;){var o=zn[s];zn[s++]=null;var c=zn[s];zn[s++]=null;var d=zn[s];zn[s++]=null;var m=zn[s];if(zn[s++]=null,c!==null&&d!==null){var S=c.pending;S===null?d.next=d:(d.next=S.next,S.next=d),c.pending=d}m!==0&&Fb(o,d,m)}}function qu(r,s,o,c){zn[Ha++]=r,zn[Ha++]=s,zn[Ha++]=o,zn[Ha++]=c,Rp|=c,r.lanes|=c,r=r.alternate,r!==null&&(r.lanes|=c)}function Ap(r,s,o,c){return qu(r,s,o,c),Vu(r)}function Fa(r,s){return qu(r,null,null,s),Vu(r)}function Fb(r,s,o){r.lanes|=o;var c=r.alternate;c!==null&&(c.lanes|=o);for(var d=!1,m=r.return;m!==null;)m.childLanes|=o,c=m.alternate,c!==null&&(c.childLanes|=o),m.tag===22&&(r=m.stateNode,r===null||r._visibility&1||(d=!0)),r=m,m=m.return;return r.tag===3?(m=r.stateNode,d&&s!==null&&(d=31-Wt(o),r=m.hiddenUpdates,c=r[d],c===null?r[d]=[s]:c.push(s),s.lane=o|536870912),m):null}function Vu(r){if(50<Hl)throw Hl=0,km=null,Error(i(185));for(var s=r.return;s!==null;)r=s,s=r.return;return r.tag===3?r.stateNode:null}var qa={};function oO(r,s,o,c){this.tag=r,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(r,s,o,c){return new oO(r,s,o,c)}function Ip(r){return r=r.prototype,!(!r||!r.isReactComponent)}function Fr(r,s){var o=r.alternate;return o===null?(o=Tn(r.tag,s,r.key,r.mode),o.elementType=r.elementType,o.type=r.type,o.stateNode=r.stateNode,o.alternate=r,r.alternate=o):(o.pendingProps=s,o.type=r.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=r.flags&65011712,o.childLanes=r.childLanes,o.lanes=r.lanes,o.child=r.child,o.memoizedProps=r.memoizedProps,o.memoizedState=r.memoizedState,o.updateQueue=r.updateQueue,s=r.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=r.sibling,o.index=r.index,o.ref=r.ref,o.refCleanup=r.refCleanup,o}function qb(r,s){r.flags&=65011714;var o=r.alternate;return o===null?(r.childLanes=0,r.lanes=s,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,r.type=o.type,s=o.dependencies,r.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),r}function Gu(r,s,o,c,d,m){var S=0;if(c=r,typeof r=="function")Ip(r)&&(S=1);else if(typeof r=="string")S=cN(r,o,de.current)?26:r==="html"||r==="head"||r==="body"?27:5;else e:switch(r){case H:return r=Tn(31,o,s,d),r.elementType=H,r.lanes=m,r;case w:return Os(o.children,d,m,s);case O:S=8,d|=24;break;case R:return r=Tn(12,o,s,d|2),r.elementType=R,r.lanes=m,r;case M:return r=Tn(13,o,s,d),r.elementType=M,r.lanes=m,r;case T:return r=Tn(19,o,s,d),r.elementType=T,r.lanes=m,r;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case D:case x:S=10;break e;case k:S=9;break e;case A:S=11;break e;case P:S=14;break e;case V:S=16,c=null;break e}S=29,o=Error(i(130,r===null?"null":typeof r,"")),c=null}return s=Tn(S,o,s,d),s.elementType=r,s.type=c,s.lanes=m,s}function Os(r,s,o,c){return r=Tn(7,r,c,s),r.lanes=o,r}function Dp(r,s,o){return r=Tn(6,r,null,s),r.lanes=o,r}function Op(r,s,o){return s=Tn(4,r.children!==null?r.children:[],r.key,s),s.lanes=o,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}var Va=[],Ga=0,Yu=null,Wu=0,Bn=[],Hn=0,Ns=null,qr=1,Vr="";function Ms(r,s){Va[Ga++]=Wu,Va[Ga++]=Yu,Yu=r,Wu=s}function Vb(r,s,o){Bn[Hn++]=qr,Bn[Hn++]=Vr,Bn[Hn++]=Ns,Ns=r;var c=qr;r=Vr;var d=32-Wt(c)-1;c&=~(1<<d),o+=1;var m=32-Wt(s)+d;if(30<m){var S=d-d%5;m=(c&(1<<S)-1).toString(32),c>>=S,d-=S,qr=1<<32-Wt(s)+d|o<<d|c,Vr=m+r}else qr=1<<m|o<<d|c,Vr=r}function Np(r){r.return!==null&&(Ms(r,1),Vb(r,1,0))}function Mp(r){for(;r===Yu;)Yu=Va[--Ga],Va[Ga]=null,Wu=Va[--Ga],Va[Ga]=null;for(;r===Ns;)Ns=Bn[--Hn],Bn[Hn]=null,Vr=Bn[--Hn],Bn[Hn]=null,qr=Bn[--Hn],Bn[Hn]=null}var cn=null,Tt=null,Je=!1,ks=null,wr=!1,kp=Error(i(519));function Ls(r){var s=Error(i(418,""));throw bl($n(s,r)),kp}function Gb(r){var s=r.stateNode,o=r.type,c=r.memoizedProps;switch(s[ce]=r,s[fe]=c,o){case"dialog":Ye("cancel",s),Ye("close",s);break;case"iframe":case"object":case"embed":Ye("load",s);break;case"video":case"audio":for(o=0;o<ql.length;o++)Ye(ql[o],s);break;case"source":Ye("error",s);break;case"img":case"image":case"link":Ye("error",s),Ye("load",s);break;case"details":Ye("toggle",s);break;case"input":Ye("invalid",s),ob(s,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),ku(s);break;case"select":Ye("invalid",s);break;case"textarea":Ye("invalid",s),cb(s,c.value,c.defaultValue,c.children),ku(s)}o=c.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||c.suppressHydrationWarning===!0||c1(s.textContent,o)?(c.popover!=null&&(Ye("beforetoggle",s),Ye("toggle",s)),c.onScroll!=null&&Ye("scroll",s),c.onScrollEnd!=null&&Ye("scrollend",s),c.onClick!=null&&(s.onclick=Ad),s=!0):s=!1,s||Ls(r)}function Yb(r){for(cn=r.return;cn;)switch(cn.tag){case 5:case 13:wr=!1;return;case 27:case 3:wr=!0;return;default:cn=cn.return}}function vl(r){if(r!==cn)return!1;if(!Je)return Yb(r),Je=!0,!1;var s=r.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=r.type,o=!(o!=="form"&&o!=="button")||Km(r.type,r.memoizedProps)),o=!o),o&&Tt&&Ls(r),Yb(r),s===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(i(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8)if(o=r.data,o==="/$"){if(s===0){Tt=sr(r.nextSibling);break e}s--}else o!=="$"&&o!=="$!"&&o!=="$?"||s++;r=r.nextSibling}Tt=null}}else s===27?(s=Tt,Bi(r.type)?(r=eg,eg=null,Tt=r):Tt=s):Tt=cn?sr(r.stateNode.nextSibling):null;return!0}function _l(){Tt=cn=null,Je=!1}function Wb(){var r=ks;return r!==null&&(vn===null?vn=r:vn.push.apply(vn,r),ks=null),r}function bl(r){ks===null?ks=[r]:ks.push(r)}var Lp=X(null),Ps=null,Gr=null;function Ci(r,s,o){ie(Lp,s._currentValue),s._currentValue=o}function Yr(r){r._currentValue=Lp.current,le(Lp)}function Pp(r,s,o){for(;r!==null;){var c=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),r===o)break;r=r.return}}function jp(r,s,o,c){var d=r.child;for(d!==null&&(d.return=r);d!==null;){var m=d.dependencies;if(m!==null){var S=d.child;m=m.firstContext;e:for(;m!==null;){var E=m;m=d;for(var L=0;L<s.length;L++)if(E.context===s[L]){m.lanes|=o,E=m.alternate,E!==null&&(E.lanes|=o),Pp(m.return,o,r),c||(S=null);break e}m=E.next}}else if(d.tag===18){if(S=d.return,S===null)throw Error(i(341));S.lanes|=o,m=S.alternate,m!==null&&(m.lanes|=o),Pp(S,o,r),S=null}else S=d.child;if(S!==null)S.return=d;else for(S=d;S!==null;){if(S===r){S=null;break}if(d=S.sibling,d!==null){d.return=S.return,S=d;break}S=S.return}d=S}}function Sl(r,s,o,c){r=null;for(var d=s,m=!1;d!==null;){if(!m){if((d.flags&524288)!==0)m=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var S=d.alternate;if(S===null)throw Error(i(387));if(S=S.memoizedProps,S!==null){var E=d.type;xn(d.pendingProps.value,S.value)||(r!==null?r.push(E):r=[E])}}else if(d===Ae.current){if(S=d.alternate,S===null)throw Error(i(387));S.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(r!==null?r.push(Kl):r=[Kl])}d=d.return}r!==null&&jp(s,r,o,c),s.flags|=262144}function Qu(r){for(r=r.firstContext;r!==null;){if(!xn(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function js(r){Ps=r,Gr=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function nn(r){return Qb(Ps,r)}function Ku(r,s){return Ps===null&&js(r),Qb(r,s)}function Qb(r,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},Gr===null){if(r===null)throw Error(i(308));Gr=s,r.dependencies={lanes:0,firstContext:s},r.flags|=524288}else Gr=Gr.next=s;return o}var lO=typeof AbortController<"u"?AbortController:function(){var r=[],s=this.signal={aborted:!1,addEventListener:function(o,c){r.push(c)}};this.abort=function(){s.aborted=!0,r.forEach(function(o){return o()})}},cO=e.unstable_scheduleCallback,uO=e.unstable_NormalPriority,Pt={$$typeof:x,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Up(){return{controller:new lO,data:new Map,refCount:0}}function wl(r){r.refCount--,r.refCount===0&&cO(uO,function(){r.controller.abort()})}var El=null,$p=0,Ya=0,Wa=null;function dO(r,s){if(El===null){var o=El=[];$p=0,Ya=Bm(),Wa={status:"pending",value:void 0,then:function(c){o.push(c)}}}return $p++,s.then(Kb,Kb),s}function Kb(){if(--$p===0&&El!==null){Wa!==null&&(Wa.status="fulfilled");var r=El;El=null,Ya=0,Wa=null;for(var s=0;s<r.length;s++)(0,r[s])()}}function fO(r,s){var o=[],c={status:"pending",value:null,reason:null,then:function(d){o.push(d)}};return r.then(function(){c.status="fulfilled",c.value=s;for(var d=0;d<o.length;d++)(0,o[d])(s)},function(d){for(c.status="rejected",c.reason=d,d=0;d<o.length;d++)(0,o[d])(void 0)}),c}var Xb=U.S;U.S=function(r,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&dO(r,s),Xb!==null&&Xb(r,s)};var Us=X(null);function zp(){var r=Us.current;return r!==null?r:ft.pooledCache}function Xu(r,s){s===null?ie(Us,Us.current):ie(Us,s.pool)}function Zb(){var r=zp();return r===null?null:{parent:Pt._currentValue,pool:r}}var xl=Error(i(460)),Jb=Error(i(474)),Zu=Error(i(542)),Bp={then:function(){}};function e0(r){return r=r.status,r==="fulfilled"||r==="rejected"}function Ju(){}function t0(r,s,o){switch(o=r[o],o===void 0?r.push(s):o!==s&&(s.then(Ju,Ju),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,r0(r),r;default:if(typeof s.status=="string")s.then(Ju,Ju);else{if(r=ft,r!==null&&100<r.shellSuspendCounter)throw Error(i(482));r=s,r.status="pending",r.then(function(c){if(s.status==="pending"){var d=s;d.status="fulfilled",d.value=c}},function(c){if(s.status==="pending"){var d=s;d.status="rejected",d.reason=c}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,r0(r),r}throw Tl=s,xl}}var Tl=null;function n0(){if(Tl===null)throw Error(i(459));var r=Tl;return Tl=null,r}function r0(r){if(r===xl||r===Zu)throw Error(i(483))}var Ri=!1;function Hp(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Fp(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function Ai(r){return{lane:r,tag:0,payload:null,callback:null,next:null}}function Ii(r,s,o){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,(tt&2)!==0){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,s=Vu(r),Fb(r,null,o),s}return qu(r,c,s,o),Vu(r)}function Cl(r,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var c=s.lanes;c&=r.pendingLanes,o|=c,s.lanes=o,Rs(r,o)}}function qp(r,s){var o=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var d=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var S={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?d=m=S:m=m.next=S,o=o.next}while(o!==null);m===null?d=m=s:m=m.next=s}else d=m=s;o={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,callbacks:c.callbacks},r.updateQueue=o;return}r=o.lastBaseUpdate,r===null?o.firstBaseUpdate=s:r.next=s,o.lastBaseUpdate=s}var Vp=!1;function Rl(){if(Vp){var r=Wa;if(r!==null)throw r}}function Al(r,s,o,c){Vp=!1;var d=r.updateQueue;Ri=!1;var m=d.firstBaseUpdate,S=d.lastBaseUpdate,E=d.shared.pending;if(E!==null){d.shared.pending=null;var L=E,Q=L.next;L.next=null,S===null?m=Q:S.next=Q,S=L;var re=r.alternate;re!==null&&(re=re.updateQueue,E=re.lastBaseUpdate,E!==S&&(E===null?re.firstBaseUpdate=Q:E.next=Q,re.lastBaseUpdate=L))}if(m!==null){var ae=d.baseState;S=0,re=Q=L=null,E=m;do{var Z=E.lane&-536870913,J=Z!==E.lane;if(J?(Qe&Z)===Z:(c&Z)===Z){Z!==0&&Z===Ya&&(Vp=!0),re!==null&&(re=re.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});e:{var Me=r,Re=E;Z=s;var ot=o;switch(Re.tag){case 1:if(Me=Re.payload,typeof Me=="function"){ae=Me.call(ot,ae,Z);break e}ae=Me;break e;case 3:Me.flags=Me.flags&-65537|128;case 0:if(Me=Re.payload,Z=typeof Me=="function"?Me.call(ot,ae,Z):Me,Z==null)break e;ae=g({},ae,Z);break e;case 2:Ri=!0}}Z=E.callback,Z!==null&&(r.flags|=64,J&&(r.flags|=8192),J=d.callbacks,J===null?d.callbacks=[Z]:J.push(Z))}else J={lane:Z,tag:E.tag,payload:E.payload,callback:E.callback,next:null},re===null?(Q=re=J,L=ae):re=re.next=J,S|=Z;if(E=E.next,E===null){if(E=d.shared.pending,E===null)break;J=E,E=J.next,J.next=null,d.lastBaseUpdate=J,d.shared.pending=null}}while(!0);re===null&&(L=ae),d.baseState=L,d.firstBaseUpdate=Q,d.lastBaseUpdate=re,m===null&&(d.shared.lanes=0),ji|=S,r.lanes=S,r.memoizedState=ae}}function i0(r,s){if(typeof r!="function")throw Error(i(191,r));r.call(s)}function s0(r,s){var o=r.callbacks;if(o!==null)for(r.callbacks=null,r=0;r<o.length;r++)i0(o[r],s)}var Qa=X(null),ed=X(0);function a0(r,s){r=ei,ie(ed,r),ie(Qa,s),ei=r|s.baseLanes}function Gp(){ie(ed,ei),ie(Qa,Qa.current)}function Yp(){ei=ed.current,le(Qa),le(ed)}var Di=0,He=null,st=null,Mt=null,td=!1,Ka=!1,$s=!1,nd=0,Il=0,Xa=null,hO=0;function Dt(){throw Error(i(321))}function Wp(r,s){if(s===null)return!1;for(var o=0;o<s.length&&o<r.length;o++)if(!xn(r[o],s[o]))return!1;return!0}function Qp(r,s,o,c,d,m){return Di=m,He=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,U.H=r===null||r.memoizedState===null?F0:q0,$s=!1,m=o(c,d),$s=!1,Ka&&(m=l0(s,o,c,d)),o0(r),m}function o0(r){U.H=ld;var s=st!==null&&st.next!==null;if(Di=0,Mt=st=He=null,td=!1,Il=0,Xa=null,s)throw Error(i(300));r===null||zt||(r=r.dependencies,r!==null&&Qu(r)&&(zt=!0))}function l0(r,s,o,c){He=r;var d=0;do{if(Ka&&(Xa=null),Il=0,Ka=!1,25<=d)throw Error(i(301));if(d+=1,Mt=st=null,r.updateQueue!=null){var m=r.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}U.H=bO,m=s(o,c)}while(Ka);return m}function pO(){var r=U.H,s=r.useState()[0];return s=typeof s.then=="function"?Dl(s):s,r=r.useState()[0],(st!==null?st.memoizedState:null)!==r&&(He.flags|=1024),s}function Kp(){var r=nd!==0;return nd=0,r}function Xp(r,s,o){s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~o}function Zp(r){if(td){for(r=r.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}td=!1}Di=0,Mt=st=He=null,Ka=!1,Il=nd=0,Xa=null}function gn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mt===null?He.memoizedState=Mt=r:Mt=Mt.next=r,Mt}function kt(){if(st===null){var r=He.alternate;r=r!==null?r.memoizedState:null}else r=st.next;var s=Mt===null?He.memoizedState:Mt.next;if(s!==null)Mt=s,st=r;else{if(r===null)throw He.alternate===null?Error(i(467)):Error(i(310));st=r,r={memoizedState:st.memoizedState,baseState:st.baseState,baseQueue:st.baseQueue,queue:st.queue,next:null},Mt===null?He.memoizedState=Mt=r:Mt=Mt.next=r}return Mt}function Jp(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Dl(r){var s=Il;return Il+=1,Xa===null&&(Xa=[]),r=t0(Xa,r,s),s=He,(Mt===null?s.memoizedState:Mt.next)===null&&(s=s.alternate,U.H=s===null||s.memoizedState===null?F0:q0),r}function rd(r){if(r!==null&&typeof r=="object"){if(typeof r.then=="function")return Dl(r);if(r.$$typeof===x)return nn(r)}throw Error(i(438,String(r)))}function em(r){var s=null,o=He.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var c=He.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(s={data:c.data.map(function(d){return d.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=Jp(),He.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(r),c=0;c<r;c++)o[c]=B;return s.index++,o}function Wr(r,s){return typeof s=="function"?s(r):s}function id(r){var s=kt();return tm(s,st,r)}function tm(r,s,o){var c=r.queue;if(c===null)throw Error(i(311));c.lastRenderedReducer=o;var d=r.baseQueue,m=c.pending;if(m!==null){if(d!==null){var S=d.next;d.next=m.next,m.next=S}s.baseQueue=d=m,c.pending=null}if(m=r.baseState,d===null)r.memoizedState=m;else{s=d.next;var E=S=null,L=null,Q=s,re=!1;do{var ae=Q.lane&-536870913;if(ae!==Q.lane?(Qe&ae)===ae:(Di&ae)===ae){var Z=Q.revertLane;if(Z===0)L!==null&&(L=L.next={lane:0,revertLane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),ae===Ya&&(re=!0);else if((Di&Z)===Z){Q=Q.next,Z===Ya&&(re=!0);continue}else ae={lane:0,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},L===null?(E=L=ae,S=m):L=L.next=ae,He.lanes|=Z,ji|=Z;ae=Q.action,$s&&o(m,ae),m=Q.hasEagerState?Q.eagerState:o(m,ae)}else Z={lane:ae,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},L===null?(E=L=Z,S=m):L=L.next=Z,He.lanes|=ae,ji|=ae;Q=Q.next}while(Q!==null&&Q!==s);if(L===null?S=m:L.next=E,!xn(m,r.memoizedState)&&(zt=!0,re&&(o=Wa,o!==null)))throw o;r.memoizedState=m,r.baseState=S,r.baseQueue=L,c.lastRenderedState=m}return d===null&&(c.lanes=0),[r.memoizedState,c.dispatch]}function nm(r){var s=kt(),o=s.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=r;var c=o.dispatch,d=o.pending,m=s.memoizedState;if(d!==null){o.pending=null;var S=d=d.next;do m=r(m,S.action),S=S.next;while(S!==d);xn(m,s.memoizedState)||(zt=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),o.lastRenderedState=m}return[m,c]}function c0(r,s,o){var c=He,d=kt(),m=Je;if(m){if(o===void 0)throw Error(i(407));o=o()}else o=s();var S=!xn((st||d).memoizedState,o);S&&(d.memoizedState=o,zt=!0),d=d.queue;var E=f0.bind(null,c,d,r);if(Ol(2048,8,E,[r]),d.getSnapshot!==s||S||Mt!==null&&Mt.memoizedState.tag&1){if(c.flags|=2048,Za(9,sd(),d0.bind(null,c,d,o,s),null),ft===null)throw Error(i(349));m||(Di&124)!==0||u0(c,s,o)}return o}function u0(r,s,o){r.flags|=16384,r={getSnapshot:s,value:o},s=He.updateQueue,s===null?(s=Jp(),He.updateQueue=s,s.stores=[r]):(o=s.stores,o===null?s.stores=[r]:o.push(r))}function d0(r,s,o,c){s.value=o,s.getSnapshot=c,h0(s)&&p0(r)}function f0(r,s,o){return o(function(){h0(s)&&p0(r)})}function h0(r){var s=r.getSnapshot;r=r.value;try{var o=s();return!xn(r,o)}catch{return!0}}function p0(r){var s=Fa(r,2);s!==null&&Dn(s,r,2)}function rm(r){var s=gn();if(typeof r=="function"){var o=r;if(r=o(),$s){nr(!0);try{o()}finally{nr(!1)}}}return s.memoizedState=s.baseState=r,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wr,lastRenderedState:r},s}function m0(r,s,o,c){return r.baseState=o,tm(r,st,typeof c=="function"?c:Wr)}function mO(r,s,o,c,d){if(od(r))throw Error(i(485));if(r=s.action,r!==null){var m={payload:d,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){m.listeners.push(S)}};U.T!==null?o(!0):m.isTransition=!1,c(m),o=s.pending,o===null?(m.next=s.pending=m,g0(s,m)):(m.next=o.next,s.pending=o.next=m)}}function g0(r,s){var o=s.action,c=s.payload,d=r.state;if(s.isTransition){var m=U.T,S={};U.T=S;try{var E=o(d,c),L=U.S;L!==null&&L(S,E),y0(r,s,E)}catch(Q){im(r,s,Q)}finally{U.T=m}}else try{m=o(d,c),y0(r,s,m)}catch(Q){im(r,s,Q)}}function y0(r,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(c){v0(r,s,c)},function(c){return im(r,s,c)}):v0(r,s,o)}function v0(r,s,o){s.status="fulfilled",s.value=o,_0(s),r.state=o,s=r.pending,s!==null&&(o=s.next,o===s?r.pending=null:(o=o.next,s.next=o,g0(r,o)))}function im(r,s,o){var c=r.pending;if(r.pending=null,c!==null){c=c.next;do s.status="rejected",s.reason=o,_0(s),s=s.next;while(s!==c)}r.action=null}function _0(r){r=r.listeners;for(var s=0;s<r.length;s++)(0,r[s])()}function b0(r,s){return s}function S0(r,s){if(Je){var o=ft.formState;if(o!==null){e:{var c=He;if(Je){if(Tt){t:{for(var d=Tt,m=wr;d.nodeType!==8;){if(!m){d=null;break t}if(d=sr(d.nextSibling),d===null){d=null;break t}}m=d.data,d=m==="F!"||m==="F"?d:null}if(d){Tt=sr(d.nextSibling),c=d.data==="F!";break e}}Ls(c)}c=!1}c&&(s=o[0])}}return o=gn(),o.memoizedState=o.baseState=s,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:b0,lastRenderedState:s},o.queue=c,o=z0.bind(null,He,c),c.dispatch=o,c=rm(!1),m=cm.bind(null,He,!1,c.queue),c=gn(),d={state:s,dispatch:null,action:r,pending:null},c.queue=d,o=mO.bind(null,He,d,m,o),d.dispatch=o,c.memoizedState=r,[s,o,!1]}function w0(r){var s=kt();return E0(s,st,r)}function E0(r,s,o){if(s=tm(r,s,b0)[0],r=id(Wr)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var c=Dl(s)}catch(S){throw S===xl?Zu:S}else c=s;s=kt();var d=s.queue,m=d.dispatch;return o!==s.memoizedState&&(He.flags|=2048,Za(9,sd(),gO.bind(null,d,o),null)),[c,m,r]}function gO(r,s){r.action=s}function x0(r){var s=kt(),o=st;if(o!==null)return E0(s,o,r);kt(),s=s.memoizedState,o=kt();var c=o.queue.dispatch;return o.memoizedState=r,[s,c,!1]}function Za(r,s,o,c){return r={tag:r,create:o,deps:c,inst:s,next:null},s=He.updateQueue,s===null&&(s=Jp(),He.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=r.next=r:(c=o.next,o.next=r,r.next=c,s.lastEffect=r),r}function sd(){return{destroy:void 0,resource:void 0}}function T0(){return kt().memoizedState}function ad(r,s,o,c){var d=gn();c=c===void 0?null:c,He.flags|=r,d.memoizedState=Za(1|s,sd(),o,c)}function Ol(r,s,o,c){var d=kt();c=c===void 0?null:c;var m=d.memoizedState.inst;st!==null&&c!==null&&Wp(c,st.memoizedState.deps)?d.memoizedState=Za(s,m,o,c):(He.flags|=r,d.memoizedState=Za(1|s,m,o,c))}function C0(r,s){ad(8390656,8,r,s)}function R0(r,s){Ol(2048,8,r,s)}function A0(r,s){return Ol(4,2,r,s)}function I0(r,s){return Ol(4,4,r,s)}function D0(r,s){if(typeof s=="function"){r=r();var o=s(r);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function O0(r,s,o){o=o!=null?o.concat([r]):null,Ol(4,4,D0.bind(null,s,r),o)}function sm(){}function N0(r,s){var o=kt();s=s===void 0?null:s;var c=o.memoizedState;return s!==null&&Wp(s,c[1])?c[0]:(o.memoizedState=[r,s],r)}function M0(r,s){var o=kt();s=s===void 0?null:s;var c=o.memoizedState;if(s!==null&&Wp(s,c[1]))return c[0];if(c=r(),$s){nr(!0);try{r()}finally{nr(!1)}}return o.memoizedState=[c,s],c}function am(r,s,o){return o===void 0||(Di&1073741824)!==0?r.memoizedState=s:(r.memoizedState=o,r=PS(),He.lanes|=r,ji|=r,o)}function k0(r,s,o,c){return xn(o,s)?o:Qa.current!==null?(r=am(r,o,c),xn(r,s)||(zt=!0),r):(Di&42)===0?(zt=!0,r.memoizedState=o):(r=PS(),He.lanes|=r,ji|=r,s)}function L0(r,s,o,c,d){var m=ee.p;ee.p=m!==0&&8>m?m:8;var S=U.T,E={};U.T=E,cm(r,!1,s,o);try{var L=d(),Q=U.S;if(Q!==null&&Q(E,L),L!==null&&typeof L=="object"&&typeof L.then=="function"){var re=fO(L,c);Nl(r,s,re,In(r))}else Nl(r,s,c,In(r))}catch(ae){Nl(r,s,{then:function(){},status:"rejected",reason:ae},In())}finally{ee.p=m,U.T=S}}function yO(){}function om(r,s,o,c){if(r.tag!==5)throw Error(i(476));var d=P0(r).queue;L0(r,d,s,ne,o===null?yO:function(){return j0(r),o(c)})}function P0(r){var s=r.memoizedState;if(s!==null)return s;s={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wr,lastRenderedState:ne},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wr,lastRenderedState:o},next:null},r.memoizedState=s,r=r.alternate,r!==null&&(r.memoizedState=s),s}function j0(r){var s=P0(r).next.queue;Nl(r,s,{},In())}function lm(){return nn(Kl)}function U0(){return kt().memoizedState}function $0(){return kt().memoizedState}function vO(r){for(var s=r.return;s!==null;){switch(s.tag){case 24:case 3:var o=In();r=Ai(o);var c=Ii(s,r,o);c!==null&&(Dn(c,s,o),Cl(c,s,o)),s={cache:Up()},r.payload=s;return}s=s.return}}function _O(r,s,o){var c=In();o={lane:c,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},od(r)?B0(s,o):(o=Ap(r,s,o,c),o!==null&&(Dn(o,r,c),H0(o,s,c)))}function z0(r,s,o){var c=In();Nl(r,s,o,c)}function Nl(r,s,o,c){var d={lane:c,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(od(r))B0(s,d);else{var m=r.alternate;if(r.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var S=s.lastRenderedState,E=m(S,o);if(d.hasEagerState=!0,d.eagerState=E,xn(E,S))return qu(r,s,d,0),ft===null&&Fu(),!1}catch{}finally{}if(o=Ap(r,s,d,c),o!==null)return Dn(o,r,c),H0(o,s,c),!0}return!1}function cm(r,s,o,c){if(c={lane:2,revertLane:Bm(),action:c,hasEagerState:!1,eagerState:null,next:null},od(r)){if(s)throw Error(i(479))}else s=Ap(r,o,c,2),s!==null&&Dn(s,r,2)}function od(r){var s=r.alternate;return r===He||s!==null&&s===He}function B0(r,s){Ka=td=!0;var o=r.pending;o===null?s.next=s:(s.next=o.next,o.next=s),r.pending=s}function H0(r,s,o){if((o&4194048)!==0){var c=s.lanes;c&=r.pendingLanes,o|=c,s.lanes=o,Rs(r,o)}}var ld={readContext:nn,use:rd,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useLayoutEffect:Dt,useInsertionEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useSyncExternalStore:Dt,useId:Dt,useHostTransitionStatus:Dt,useFormState:Dt,useActionState:Dt,useOptimistic:Dt,useMemoCache:Dt,useCacheRefresh:Dt},F0={readContext:nn,use:rd,useCallback:function(r,s){return gn().memoizedState=[r,s===void 0?null:s],r},useContext:nn,useEffect:C0,useImperativeHandle:function(r,s,o){o=o!=null?o.concat([r]):null,ad(4194308,4,D0.bind(null,s,r),o)},useLayoutEffect:function(r,s){return ad(4194308,4,r,s)},useInsertionEffect:function(r,s){ad(4,2,r,s)},useMemo:function(r,s){var o=gn();s=s===void 0?null:s;var c=r();if($s){nr(!0);try{r()}finally{nr(!1)}}return o.memoizedState=[c,s],c},useReducer:function(r,s,o){var c=gn();if(o!==void 0){var d=o(s);if($s){nr(!0);try{o(s)}finally{nr(!1)}}}else d=s;return c.memoizedState=c.baseState=d,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:d},c.queue=r,r=r.dispatch=_O.bind(null,He,r),[c.memoizedState,r]},useRef:function(r){var s=gn();return r={current:r},s.memoizedState=r},useState:function(r){r=rm(r);var s=r.queue,o=z0.bind(null,He,s);return s.dispatch=o,[r.memoizedState,o]},useDebugValue:sm,useDeferredValue:function(r,s){var o=gn();return am(o,r,s)},useTransition:function(){var r=rm(!1);return r=L0.bind(null,He,r.queue,!0,!1),gn().memoizedState=r,[!1,r]},useSyncExternalStore:function(r,s,o){var c=He,d=gn();if(Je){if(o===void 0)throw Error(i(407));o=o()}else{if(o=s(),ft===null)throw Error(i(349));(Qe&124)!==0||u0(c,s,o)}d.memoizedState=o;var m={value:o,getSnapshot:s};return d.queue=m,C0(f0.bind(null,c,m,r),[r]),c.flags|=2048,Za(9,sd(),d0.bind(null,c,m,o,s),null),o},useId:function(){var r=gn(),s=ft.identifierPrefix;if(Je){var o=Vr,c=qr;o=(c&~(1<<32-Wt(c)-1)).toString(32)+o,s="«"+s+"R"+o,o=nd++,0<o&&(s+="H"+o.toString(32)),s+="»"}else o=hO++,s="«"+s+"r"+o.toString(32)+"»";return r.memoizedState=s},useHostTransitionStatus:lm,useFormState:S0,useActionState:S0,useOptimistic:function(r){var s=gn();s.memoizedState=s.baseState=r;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=cm.bind(null,He,!0,o),o.dispatch=s,[r,s]},useMemoCache:em,useCacheRefresh:function(){return gn().memoizedState=vO.bind(null,He)}},q0={readContext:nn,use:rd,useCallback:N0,useContext:nn,useEffect:R0,useImperativeHandle:O0,useInsertionEffect:A0,useLayoutEffect:I0,useMemo:M0,useReducer:id,useRef:T0,useState:function(){return id(Wr)},useDebugValue:sm,useDeferredValue:function(r,s){var o=kt();return k0(o,st.memoizedState,r,s)},useTransition:function(){var r=id(Wr)[0],s=kt().memoizedState;return[typeof r=="boolean"?r:Dl(r),s]},useSyncExternalStore:c0,useId:U0,useHostTransitionStatus:lm,useFormState:w0,useActionState:w0,useOptimistic:function(r,s){var o=kt();return m0(o,st,r,s)},useMemoCache:em,useCacheRefresh:$0},bO={readContext:nn,use:rd,useCallback:N0,useContext:nn,useEffect:R0,useImperativeHandle:O0,useInsertionEffect:A0,useLayoutEffect:I0,useMemo:M0,useReducer:nm,useRef:T0,useState:function(){return nm(Wr)},useDebugValue:sm,useDeferredValue:function(r,s){var o=kt();return st===null?am(o,r,s):k0(o,st.memoizedState,r,s)},useTransition:function(){var r=nm(Wr)[0],s=kt().memoizedState;return[typeof r=="boolean"?r:Dl(r),s]},useSyncExternalStore:c0,useId:U0,useHostTransitionStatus:lm,useFormState:x0,useActionState:x0,useOptimistic:function(r,s){var o=kt();return st!==null?m0(o,st,r,s):(o.baseState=r,[r,o.queue.dispatch])},useMemoCache:em,useCacheRefresh:$0},Ja=null,Ml=0;function cd(r){var s=Ml;return Ml+=1,Ja===null&&(Ja=[]),t0(Ja,r,s)}function kl(r,s){s=s.props.ref,r.ref=s!==void 0?s:null}function ud(r,s){throw s.$$typeof===y?Error(i(525)):(r=Object.prototype.toString.call(s),Error(i(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r)))}function V0(r){var s=r._init;return s(r._payload)}function G0(r){function s(q,$){if(r){var W=q.deletions;W===null?(q.deletions=[$],q.flags|=16):W.push($)}}function o(q,$){if(!r)return null;for(;$!==null;)s(q,$),$=$.sibling;return null}function c(q){for(var $=new Map;q!==null;)q.key!==null?$.set(q.key,q):$.set(q.index,q),q=q.sibling;return $}function d(q,$){return q=Fr(q,$),q.index=0,q.sibling=null,q}function m(q,$,W){return q.index=W,r?(W=q.alternate,W!==null?(W=W.index,W<$?(q.flags|=67108866,$):W):(q.flags|=67108866,$)):(q.flags|=1048576,$)}function S(q){return r&&q.alternate===null&&(q.flags|=67108866),q}function E(q,$,W,se){return $===null||$.tag!==6?($=Dp(W,q.mode,se),$.return=q,$):($=d($,W),$.return=q,$)}function L(q,$,W,se){var ge=W.type;return ge===w?re(q,$,W.props.children,se,W.key):$!==null&&($.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===V&&V0(ge)===$.type)?($=d($,W.props),kl($,W),$.return=q,$):($=Gu(W.type,W.key,W.props,null,q.mode,se),kl($,W),$.return=q,$)}function Q(q,$,W,se){return $===null||$.tag!==4||$.stateNode.containerInfo!==W.containerInfo||$.stateNode.implementation!==W.implementation?($=Op(W,q.mode,se),$.return=q,$):($=d($,W.children||[]),$.return=q,$)}function re(q,$,W,se,ge){return $===null||$.tag!==7?($=Os(W,q.mode,se,ge),$.return=q,$):($=d($,W),$.return=q,$)}function ae(q,$,W){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return $=Dp(""+$,q.mode,W),$.return=q,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case _:return W=Gu($.type,$.key,$.props,null,q.mode,W),kl(W,$),W.return=q,W;case b:return $=Op($,q.mode,W),$.return=q,$;case V:var se=$._init;return $=se($._payload),ae(q,$,W)}if(ue($)||G($))return $=Os($,q.mode,W,null),$.return=q,$;if(typeof $.then=="function")return ae(q,cd($),W);if($.$$typeof===x)return ae(q,Ku(q,$),W);ud(q,$)}return null}function Z(q,$,W,se){var ge=$!==null?$.key:null;if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return ge!==null?null:E(q,$,""+W,se);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case _:return W.key===ge?L(q,$,W,se):null;case b:return W.key===ge?Q(q,$,W,se):null;case V:return ge=W._init,W=ge(W._payload),Z(q,$,W,se)}if(ue(W)||G(W))return ge!==null?null:re(q,$,W,se,null);if(typeof W.then=="function")return Z(q,$,cd(W),se);if(W.$$typeof===x)return Z(q,$,Ku(q,W),se);ud(q,W)}return null}function J(q,$,W,se,ge){if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return q=q.get(W)||null,E($,q,""+se,ge);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case _:return q=q.get(se.key===null?W:se.key)||null,L($,q,se,ge);case b:return q=q.get(se.key===null?W:se.key)||null,Q($,q,se,ge);case V:var Fe=se._init;return se=Fe(se._payload),J(q,$,W,se,ge)}if(ue(se)||G(se))return q=q.get(W)||null,re($,q,se,ge,null);if(typeof se.then=="function")return J(q,$,W,cd(se),ge);if(se.$$typeof===x)return J(q,$,W,Ku($,se),ge);ud($,se)}return null}function Me(q,$,W,se){for(var ge=null,Fe=null,Ee=$,Ie=$=0,Ht=null;Ee!==null&&Ie<W.length;Ie++){Ee.index>Ie?(Ht=Ee,Ee=null):Ht=Ee.sibling;var Ke=Z(q,Ee,W[Ie],se);if(Ke===null){Ee===null&&(Ee=Ht);break}r&&Ee&&Ke.alternate===null&&s(q,Ee),$=m(Ke,$,Ie),Fe===null?ge=Ke:Fe.sibling=Ke,Fe=Ke,Ee=Ht}if(Ie===W.length)return o(q,Ee),Je&&Ms(q,Ie),ge;if(Ee===null){for(;Ie<W.length;Ie++)Ee=ae(q,W[Ie],se),Ee!==null&&($=m(Ee,$,Ie),Fe===null?ge=Ee:Fe.sibling=Ee,Fe=Ee);return Je&&Ms(q,Ie),ge}for(Ee=c(Ee);Ie<W.length;Ie++)Ht=J(Ee,q,Ie,W[Ie],se),Ht!==null&&(r&&Ht.alternate!==null&&Ee.delete(Ht.key===null?Ie:Ht.key),$=m(Ht,$,Ie),Fe===null?ge=Ht:Fe.sibling=Ht,Fe=Ht);return r&&Ee.forEach(function(Gi){return s(q,Gi)}),Je&&Ms(q,Ie),ge}function Re(q,$,W,se){if(W==null)throw Error(i(151));for(var ge=null,Fe=null,Ee=$,Ie=$=0,Ht=null,Ke=W.next();Ee!==null&&!Ke.done;Ie++,Ke=W.next()){Ee.index>Ie?(Ht=Ee,Ee=null):Ht=Ee.sibling;var Gi=Z(q,Ee,Ke.value,se);if(Gi===null){Ee===null&&(Ee=Ht);break}r&&Ee&&Gi.alternate===null&&s(q,Ee),$=m(Gi,$,Ie),Fe===null?ge=Gi:Fe.sibling=Gi,Fe=Gi,Ee=Ht}if(Ke.done)return o(q,Ee),Je&&Ms(q,Ie),ge;if(Ee===null){for(;!Ke.done;Ie++,Ke=W.next())Ke=ae(q,Ke.value,se),Ke!==null&&($=m(Ke,$,Ie),Fe===null?ge=Ke:Fe.sibling=Ke,Fe=Ke);return Je&&Ms(q,Ie),ge}for(Ee=c(Ee);!Ke.done;Ie++,Ke=W.next())Ke=J(Ee,q,Ie,Ke.value,se),Ke!==null&&(r&&Ke.alternate!==null&&Ee.delete(Ke.key===null?Ie:Ke.key),$=m(Ke,$,Ie),Fe===null?ge=Ke:Fe.sibling=Ke,Fe=Ke);return r&&Ee.forEach(function(SN){return s(q,SN)}),Je&&Ms(q,Ie),ge}function ot(q,$,W,se){if(typeof W=="object"&&W!==null&&W.type===w&&W.key===null&&(W=W.props.children),typeof W=="object"&&W!==null){switch(W.$$typeof){case _:e:{for(var ge=W.key;$!==null;){if($.key===ge){if(ge=W.type,ge===w){if($.tag===7){o(q,$.sibling),se=d($,W.props.children),se.return=q,q=se;break e}}else if($.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===V&&V0(ge)===$.type){o(q,$.sibling),se=d($,W.props),kl(se,W),se.return=q,q=se;break e}o(q,$);break}else s(q,$);$=$.sibling}W.type===w?(se=Os(W.props.children,q.mode,se,W.key),se.return=q,q=se):(se=Gu(W.type,W.key,W.props,null,q.mode,se),kl(se,W),se.return=q,q=se)}return S(q);case b:e:{for(ge=W.key;$!==null;){if($.key===ge)if($.tag===4&&$.stateNode.containerInfo===W.containerInfo&&$.stateNode.implementation===W.implementation){o(q,$.sibling),se=d($,W.children||[]),se.return=q,q=se;break e}else{o(q,$);break}else s(q,$);$=$.sibling}se=Op(W,q.mode,se),se.return=q,q=se}return S(q);case V:return ge=W._init,W=ge(W._payload),ot(q,$,W,se)}if(ue(W))return Me(q,$,W,se);if(G(W)){if(ge=G(W),typeof ge!="function")throw Error(i(150));return W=ge.call(W),Re(q,$,W,se)}if(typeof W.then=="function")return ot(q,$,cd(W),se);if(W.$$typeof===x)return ot(q,$,Ku(q,W),se);ud(q,W)}return typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint"?(W=""+W,$!==null&&$.tag===6?(o(q,$.sibling),se=d($,W),se.return=q,q=se):(o(q,$),se=Dp(W,q.mode,se),se.return=q,q=se),S(q)):o(q,$)}return function(q,$,W,se){try{Ml=0;var ge=ot(q,$,W,se);return Ja=null,ge}catch(Ee){if(Ee===xl||Ee===Zu)throw Ee;var Fe=Tn(29,Ee,null,q.mode);return Fe.lanes=se,Fe.return=q,Fe}finally{}}}var eo=G0(!0),Y0=G0(!1),Fn=X(null),Er=null;function Oi(r){var s=r.alternate;ie(jt,jt.current&1),ie(Fn,r),Er===null&&(s===null||Qa.current!==null||s.memoizedState!==null)&&(Er=r)}function W0(r){if(r.tag===22){if(ie(jt,jt.current),ie(Fn,r),Er===null){var s=r.alternate;s!==null&&s.memoizedState!==null&&(Er=r)}}else Ni()}function Ni(){ie(jt,jt.current),ie(Fn,Fn.current)}function Qr(r){le(Fn),Er===r&&(Er=null),le(jt)}var jt=X(0);function dd(r){for(var s=r;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||Jm(o)))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}function um(r,s,o,c){s=r.memoizedState,o=o(c,s),o=o==null?s:g({},s,o),r.memoizedState=o,r.lanes===0&&(r.updateQueue.baseState=o)}var dm={enqueueSetState:function(r,s,o){r=r._reactInternals;var c=In(),d=Ai(c);d.payload=s,o!=null&&(d.callback=o),s=Ii(r,d,c),s!==null&&(Dn(s,r,c),Cl(s,r,c))},enqueueReplaceState:function(r,s,o){r=r._reactInternals;var c=In(),d=Ai(c);d.tag=1,d.payload=s,o!=null&&(d.callback=o),s=Ii(r,d,c),s!==null&&(Dn(s,r,c),Cl(s,r,c))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var o=In(),c=Ai(o);c.tag=2,s!=null&&(c.callback=s),s=Ii(r,c,o),s!==null&&(Dn(s,r,o),Cl(s,r,o))}};function Q0(r,s,o,c,d,m,S){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,m,S):s.prototype&&s.prototype.isPureReactComponent?!gl(o,c)||!gl(d,m):!0}function K0(r,s,o,c){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,c),s.state!==r&&dm.enqueueReplaceState(s,s.state,null)}function zs(r,s){var o=s;if("ref"in s){o={};for(var c in s)c!=="ref"&&(o[c]=s[c])}if(r=r.defaultProps){o===s&&(o=g({},o));for(var d in r)o[d]===void 0&&(o[d]=r[d])}return o}var fd=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function X0(r){fd(r)}function Z0(r){console.error(r)}function J0(r){fd(r)}function hd(r,s){try{var o=r.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(c){setTimeout(function(){throw c})}}function eS(r,s,o){try{var c=r.onCaughtError;c(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function fm(r,s,o){return o=Ai(o),o.tag=3,o.payload={element:null},o.callback=function(){hd(r,s)},o}function tS(r){return r=Ai(r),r.tag=3,r}function nS(r,s,o,c){var d=o.type.getDerivedStateFromError;if(typeof d=="function"){var m=c.value;r.payload=function(){return d(m)},r.callback=function(){eS(s,o,c)}}var S=o.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(r.callback=function(){eS(s,o,c),typeof d!="function"&&(Ui===null?Ui=new Set([this]):Ui.add(this));var E=c.stack;this.componentDidCatch(c.value,{componentStack:E!==null?E:""})})}function SO(r,s,o,c,d){if(o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(s=o.alternate,s!==null&&Sl(s,o,d,!0),o=Fn.current,o!==null){switch(o.tag){case 13:return Er===null?Pm():o.alternate===null&&Ct===0&&(Ct=3),o.flags&=-257,o.flags|=65536,o.lanes=d,c===Bp?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([c]):s.add(c),Um(r,c,d)),!1;case 22:return o.flags|=65536,c===Bp?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([c])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([c]):o.add(c)),Um(r,c,d)),!1}throw Error(i(435,o.tag))}return Um(r,c,d),Pm(),!1}if(Je)return s=Fn.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=d,c!==kp&&(r=Error(i(422),{cause:c}),bl($n(r,o)))):(c!==kp&&(s=Error(i(423),{cause:c}),bl($n(s,o))),r=r.current.alternate,r.flags|=65536,d&=-d,r.lanes|=d,c=$n(c,o),d=fm(r.stateNode,c,d),qp(r,d),Ct!==4&&(Ct=2)),!1;var m=Error(i(520),{cause:c});if(m=$n(m,o),Bl===null?Bl=[m]:Bl.push(m),Ct!==4&&(Ct=2),s===null)return!0;c=$n(c,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,r=d&-d,o.lanes|=r,r=fm(o.stateNode,c,r),qp(o,r),!1;case 1:if(s=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ui===null||!Ui.has(m))))return o.flags|=65536,d&=-d,o.lanes|=d,d=tS(d),nS(d,r,o,c),qp(o,d),!1}o=o.return}while(o!==null);return!1}var rS=Error(i(461)),zt=!1;function Qt(r,s,o,c){s.child=r===null?Y0(s,null,o,c):eo(s,r.child,o,c)}function iS(r,s,o,c,d){o=o.render;var m=s.ref;if("ref"in c){var S={};for(var E in c)E!=="ref"&&(S[E]=c[E])}else S=c;return js(s),c=Qp(r,s,o,S,m,d),E=Kp(),r!==null&&!zt?(Xp(r,s,d),Kr(r,s,d)):(Je&&E&&Np(s),s.flags|=1,Qt(r,s,c,d),s.child)}function sS(r,s,o,c,d){if(r===null){var m=o.type;return typeof m=="function"&&!Ip(m)&&m.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=m,aS(r,s,m,c,d)):(r=Gu(o.type,null,c,s,s.mode,d),r.ref=s.ref,r.return=s,s.child=r)}if(m=r.child,!bm(r,d)){var S=m.memoizedProps;if(o=o.compare,o=o!==null?o:gl,o(S,c)&&r.ref===s.ref)return Kr(r,s,d)}return s.flags|=1,r=Fr(m,c),r.ref=s.ref,r.return=s,s.child=r}function aS(r,s,o,c,d){if(r!==null){var m=r.memoizedProps;if(gl(m,c)&&r.ref===s.ref)if(zt=!1,s.pendingProps=c=m,bm(r,d))(r.flags&131072)!==0&&(zt=!0);else return s.lanes=r.lanes,Kr(r,s,d)}return hm(r,s,o,c,d)}function oS(r,s,o){var c=s.pendingProps,d=c.children,m=r!==null?r.memoizedState:null;if(c.mode==="hidden"){if((s.flags&128)!==0){if(c=m!==null?m.baseLanes|o:o,r!==null){for(d=s.child=r.child,m=0;d!==null;)m=m|d.lanes|d.childLanes,d=d.sibling;s.childLanes=m&~c}else s.childLanes=0,s.child=null;return lS(r,s,c,o)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},r!==null&&Xu(s,m!==null?m.cachePool:null),m!==null?a0(s,m):Gp(),W0(s);else return s.lanes=s.childLanes=536870912,lS(r,s,m!==null?m.baseLanes|o:o,o)}else m!==null?(Xu(s,m.cachePool),a0(s,m),Ni(),s.memoizedState=null):(r!==null&&Xu(s,null),Gp(),Ni());return Qt(r,s,d,o),s.child}function lS(r,s,o,c){var d=zp();return d=d===null?null:{parent:Pt._currentValue,pool:d},s.memoizedState={baseLanes:o,cachePool:d},r!==null&&Xu(s,null),Gp(),W0(s),r!==null&&Sl(r,s,c,!0),null}function pd(r,s){var o=s.ref;if(o===null)r!==null&&r.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(i(284));(r===null||r.ref!==o)&&(s.flags|=4194816)}}function hm(r,s,o,c,d){return js(s),o=Qp(r,s,o,c,void 0,d),c=Kp(),r!==null&&!zt?(Xp(r,s,d),Kr(r,s,d)):(Je&&c&&Np(s),s.flags|=1,Qt(r,s,o,d),s.child)}function cS(r,s,o,c,d,m){return js(s),s.updateQueue=null,o=l0(s,c,o,d),o0(r),c=Kp(),r!==null&&!zt?(Xp(r,s,m),Kr(r,s,m)):(Je&&c&&Np(s),s.flags|=1,Qt(r,s,o,m),s.child)}function uS(r,s,o,c,d){if(js(s),s.stateNode===null){var m=qa,S=o.contextType;typeof S=="object"&&S!==null&&(m=nn(S)),m=new o(c,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=dm,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=c,m.state=s.memoizedState,m.refs={},Hp(s),S=o.contextType,m.context=typeof S=="object"&&S!==null?nn(S):qa,m.state=s.memoizedState,S=o.getDerivedStateFromProps,typeof S=="function"&&(um(s,o,S,c),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(S=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),S!==m.state&&dm.enqueueReplaceState(m,m.state,null),Al(s,c,m,d),Rl(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),c=!0}else if(r===null){m=s.stateNode;var E=s.memoizedProps,L=zs(o,E);m.props=L;var Q=m.context,re=o.contextType;S=qa,typeof re=="object"&&re!==null&&(S=nn(re));var ae=o.getDerivedStateFromProps;re=typeof ae=="function"||typeof m.getSnapshotBeforeUpdate=="function",E=s.pendingProps!==E,re||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E||Q!==S)&&K0(s,m,c,S),Ri=!1;var Z=s.memoizedState;m.state=Z,Al(s,c,m,d),Rl(),Q=s.memoizedState,E||Z!==Q||Ri?(typeof ae=="function"&&(um(s,o,ae,c),Q=s.memoizedState),(L=Ri||Q0(s,o,L,c,Z,Q,S))?(re||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=Q),m.props=c,m.state=Q,m.context=S,c=L):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{m=s.stateNode,Fp(r,s),S=s.memoizedProps,re=zs(o,S),m.props=re,ae=s.pendingProps,Z=m.context,Q=o.contextType,L=qa,typeof Q=="object"&&Q!==null&&(L=nn(Q)),E=o.getDerivedStateFromProps,(Q=typeof E=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S!==ae||Z!==L)&&K0(s,m,c,L),Ri=!1,Z=s.memoizedState,m.state=Z,Al(s,c,m,d),Rl();var J=s.memoizedState;S!==ae||Z!==J||Ri||r!==null&&r.dependencies!==null&&Qu(r.dependencies)?(typeof E=="function"&&(um(s,o,E,c),J=s.memoizedState),(re=Ri||Q0(s,o,re,c,Z,J,L)||r!==null&&r.dependencies!==null&&Qu(r.dependencies))?(Q||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(c,J,L),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(c,J,L)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||S===r.memoizedProps&&Z===r.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&Z===r.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=J),m.props=c,m.state=J,m.context=L,c=re):(typeof m.componentDidUpdate!="function"||S===r.memoizedProps&&Z===r.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&Z===r.memoizedState||(s.flags|=1024),c=!1)}return m=c,pd(r,s),c=(s.flags&128)!==0,m||c?(m=s.stateNode,o=c&&typeof o.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,r!==null&&c?(s.child=eo(s,r.child,null,d),s.child=eo(s,null,o,d)):Qt(r,s,o,d),s.memoizedState=m.state,r=s.child):r=Kr(r,s,d),r}function dS(r,s,o,c){return _l(),s.flags|=256,Qt(r,s,o,c),s.child}var pm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mm(r){return{baseLanes:r,cachePool:Zb()}}function gm(r,s,o){return r=r!==null?r.childLanes&~o:0,s&&(r|=qn),r}function fS(r,s,o){var c=s.pendingProps,d=!1,m=(s.flags&128)!==0,S;if((S=m)||(S=r!==null&&r.memoizedState===null?!1:(jt.current&2)!==0),S&&(d=!0,s.flags&=-129),S=(s.flags&32)!==0,s.flags&=-33,r===null){if(Je){if(d?Oi(s):Ni(),Je){var E=Tt,L;if(L=E){e:{for(L=E,E=wr;L.nodeType!==8;){if(!E){E=null;break e}if(L=sr(L.nextSibling),L===null){E=null;break e}}E=L}E!==null?(s.memoizedState={dehydrated:E,treeContext:Ns!==null?{id:qr,overflow:Vr}:null,retryLane:536870912,hydrationErrors:null},L=Tn(18,null,null,0),L.stateNode=E,L.return=s,s.child=L,cn=s,Tt=null,L=!0):L=!1}L||Ls(s)}if(E=s.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return Jm(E)?s.lanes=32:s.lanes=536870912,null;Qr(s)}return E=c.children,c=c.fallback,d?(Ni(),d=s.mode,E=md({mode:"hidden",children:E},d),c=Os(c,d,o,null),E.return=s,c.return=s,E.sibling=c,s.child=E,d=s.child,d.memoizedState=mm(o),d.childLanes=gm(r,S,o),s.memoizedState=pm,c):(Oi(s),ym(s,E))}if(L=r.memoizedState,L!==null&&(E=L.dehydrated,E!==null)){if(m)s.flags&256?(Oi(s),s.flags&=-257,s=vm(r,s,o)):s.memoizedState!==null?(Ni(),s.child=r.child,s.flags|=128,s=null):(Ni(),d=c.fallback,E=s.mode,c=md({mode:"visible",children:c.children},E),d=Os(d,E,o,null),d.flags|=2,c.return=s,d.return=s,c.sibling=d,s.child=c,eo(s,r.child,null,o),c=s.child,c.memoizedState=mm(o),c.childLanes=gm(r,S,o),s.memoizedState=pm,s=d);else if(Oi(s),Jm(E)){if(S=E.nextSibling&&E.nextSibling.dataset,S)var Q=S.dgst;S=Q,c=Error(i(419)),c.stack="",c.digest=S,bl({value:c,source:null,stack:null}),s=vm(r,s,o)}else if(zt||Sl(r,s,o,!1),S=(o&r.childLanes)!==0,zt||S){if(S=ft,S!==null&&(c=o&-o,c=(c&42)!==0?1:ol(c),c=(c&(S.suspendedLanes|o))!==0?0:c,c!==0&&c!==L.retryLane))throw L.retryLane=c,Fa(r,c),Dn(S,r,c),rS;E.data==="$?"||Pm(),s=vm(r,s,o)}else E.data==="$?"?(s.flags|=192,s.child=r.child,s=null):(r=L.treeContext,Tt=sr(E.nextSibling),cn=s,Je=!0,ks=null,wr=!1,r!==null&&(Bn[Hn++]=qr,Bn[Hn++]=Vr,Bn[Hn++]=Ns,qr=r.id,Vr=r.overflow,Ns=s),s=ym(s,c.children),s.flags|=4096);return s}return d?(Ni(),d=c.fallback,E=s.mode,L=r.child,Q=L.sibling,c=Fr(L,{mode:"hidden",children:c.children}),c.subtreeFlags=L.subtreeFlags&65011712,Q!==null?d=Fr(Q,d):(d=Os(d,E,o,null),d.flags|=2),d.return=s,c.return=s,c.sibling=d,s.child=c,c=d,d=s.child,E=r.child.memoizedState,E===null?E=mm(o):(L=E.cachePool,L!==null?(Q=Pt._currentValue,L=L.parent!==Q?{parent:Q,pool:Q}:L):L=Zb(),E={baseLanes:E.baseLanes|o,cachePool:L}),d.memoizedState=E,d.childLanes=gm(r,S,o),s.memoizedState=pm,c):(Oi(s),o=r.child,r=o.sibling,o=Fr(o,{mode:"visible",children:c.children}),o.return=s,o.sibling=null,r!==null&&(S=s.deletions,S===null?(s.deletions=[r],s.flags|=16):S.push(r)),s.child=o,s.memoizedState=null,o)}function ym(r,s){return s=md({mode:"visible",children:s},r.mode),s.return=r,r.child=s}function md(r,s){return r=Tn(22,r,null,s),r.lanes=0,r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},r}function vm(r,s,o){return eo(s,r.child,null,o),r=ym(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function hS(r,s,o){r.lanes|=s;var c=r.alternate;c!==null&&(c.lanes|=s),Pp(r.return,s,o)}function _m(r,s,o,c,d){var m=r.memoizedState;m===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:d}:(m.isBackwards=s,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=o,m.tailMode=d)}function pS(r,s,o){var c=s.pendingProps,d=c.revealOrder,m=c.tail;if(Qt(r,s,c.children,o),c=jt.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&hS(r,o,s);else if(r.tag===19)hS(r,o,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}switch(ie(jt,c),d){case"forwards":for(o=s.child,d=null;o!==null;)r=o.alternate,r!==null&&dd(r)===null&&(d=o),o=o.sibling;o=d,o===null?(d=s.child,s.child=null):(d=o.sibling,o.sibling=null),_m(s,!1,d,o,m);break;case"backwards":for(o=null,d=s.child,s.child=null;d!==null;){if(r=d.alternate,r!==null&&dd(r)===null){s.child=d;break}r=d.sibling,d.sibling=o,o=d,d=r}_m(s,!0,o,null,m);break;case"together":_m(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Kr(r,s,o){if(r!==null&&(s.dependencies=r.dependencies),ji|=s.lanes,(o&s.childLanes)===0)if(r!==null){if(Sl(r,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(r!==null&&s.child!==r.child)throw Error(i(153));if(s.child!==null){for(r=s.child,o=Fr(r,r.pendingProps),s.child=o,o.return=s;r.sibling!==null;)r=r.sibling,o=o.sibling=Fr(r,r.pendingProps),o.return=s;o.sibling=null}return s.child}function bm(r,s){return(r.lanes&s)!==0?!0:(r=r.dependencies,!!(r!==null&&Qu(r)))}function wO(r,s,o){switch(s.tag){case 3:be(s,s.stateNode.containerInfo),Ci(s,Pt,r.memoizedState.cache),_l();break;case 27:case 5:$e(s);break;case 4:be(s,s.stateNode.containerInfo);break;case 10:Ci(s,s.type,s.memoizedProps.value);break;case 13:var c=s.memoizedState;if(c!==null)return c.dehydrated!==null?(Oi(s),s.flags|=128,null):(o&s.child.childLanes)!==0?fS(r,s,o):(Oi(s),r=Kr(r,s,o),r!==null?r.sibling:null);Oi(s);break;case 19:var d=(r.flags&128)!==0;if(c=(o&s.childLanes)!==0,c||(Sl(r,s,o,!1),c=(o&s.childLanes)!==0),d){if(c)return pS(r,s,o);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),ie(jt,jt.current),c)break;return null;case 22:case 23:return s.lanes=0,oS(r,s,o);case 24:Ci(s,Pt,r.memoizedState.cache)}return Kr(r,s,o)}function mS(r,s,o){if(r!==null)if(r.memoizedProps!==s.pendingProps)zt=!0;else{if(!bm(r,o)&&(s.flags&128)===0)return zt=!1,wO(r,s,o);zt=(r.flags&131072)!==0}else zt=!1,Je&&(s.flags&1048576)!==0&&Vb(s,Wu,s.index);switch(s.lanes=0,s.tag){case 16:e:{r=s.pendingProps;var c=s.elementType,d=c._init;if(c=d(c._payload),s.type=c,typeof c=="function")Ip(c)?(r=zs(c,r),s.tag=1,s=uS(null,s,c,r,o)):(s.tag=0,s=hm(null,s,c,r,o));else{if(c!=null){if(d=c.$$typeof,d===A){s.tag=11,s=iS(null,s,c,r,o);break e}else if(d===P){s.tag=14,s=sS(null,s,c,r,o);break e}}throw s=K(c)||c,Error(i(306,s,""))}}return s;case 0:return hm(r,s,s.type,s.pendingProps,o);case 1:return c=s.type,d=zs(c,s.pendingProps),uS(r,s,c,d,o);case 3:e:{if(be(s,s.stateNode.containerInfo),r===null)throw Error(i(387));c=s.pendingProps;var m=s.memoizedState;d=m.element,Fp(r,s),Al(s,c,null,o);var S=s.memoizedState;if(c=S.cache,Ci(s,Pt,c),c!==m.cache&&jp(s,[Pt],o,!0),Rl(),c=S.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:S.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=dS(r,s,c,o);break e}else if(c!==d){d=$n(Error(i(424)),s),bl(d),s=dS(r,s,c,o);break e}else{switch(r=s.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}for(Tt=sr(r.firstChild),cn=s,Je=!0,ks=null,wr=!0,o=Y0(s,null,c,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(_l(),c===d){s=Kr(r,s,o);break e}Qt(r,s,c,o)}s=s.child}return s;case 26:return pd(r,s),r===null?(o=_1(s.type,null,s.pendingProps,null))?s.memoizedState=o:Je||(o=s.type,r=s.pendingProps,c=Id(pe.current).createElement(o),c[ce]=s,c[fe]=r,Xt(c,o,r),Le(c),s.stateNode=c):s.memoizedState=_1(s.type,r.memoizedProps,s.pendingProps,r.memoizedState),null;case 27:return $e(s),r===null&&Je&&(c=s.stateNode=g1(s.type,s.pendingProps,pe.current),cn=s,wr=!0,d=Tt,Bi(s.type)?(eg=d,Tt=sr(c.firstChild)):Tt=d),Qt(r,s,s.pendingProps.children,o),pd(r,s),r===null&&(s.flags|=4194304),s.child;case 5:return r===null&&Je&&((d=c=Tt)&&(c=KO(c,s.type,s.pendingProps,wr),c!==null?(s.stateNode=c,cn=s,Tt=sr(c.firstChild),wr=!1,d=!0):d=!1),d||Ls(s)),$e(s),d=s.type,m=s.pendingProps,S=r!==null?r.memoizedProps:null,c=m.children,Km(d,m)?c=null:S!==null&&Km(d,S)&&(s.flags|=32),s.memoizedState!==null&&(d=Qp(r,s,pO,null,null,o),Kl._currentValue=d),pd(r,s),Qt(r,s,c,o),s.child;case 6:return r===null&&Je&&((r=o=Tt)&&(o=XO(o,s.pendingProps,wr),o!==null?(s.stateNode=o,cn=s,Tt=null,r=!0):r=!1),r||Ls(s)),null;case 13:return fS(r,s,o);case 4:return be(s,s.stateNode.containerInfo),c=s.pendingProps,r===null?s.child=eo(s,null,c,o):Qt(r,s,c,o),s.child;case 11:return iS(r,s,s.type,s.pendingProps,o);case 7:return Qt(r,s,s.pendingProps,o),s.child;case 8:return Qt(r,s,s.pendingProps.children,o),s.child;case 12:return Qt(r,s,s.pendingProps.children,o),s.child;case 10:return c=s.pendingProps,Ci(s,s.type,c.value),Qt(r,s,c.children,o),s.child;case 9:return d=s.type._context,c=s.pendingProps.children,js(s),d=nn(d),c=c(d),s.flags|=1,Qt(r,s,c,o),s.child;case 14:return sS(r,s,s.type,s.pendingProps,o);case 15:return aS(r,s,s.type,s.pendingProps,o);case 19:return pS(r,s,o);case 31:return c=s.pendingProps,o=s.mode,c={mode:c.mode,children:c.children},r===null?(o=md(c,o),o.ref=s.ref,s.child=o,o.return=s,s=o):(o=Fr(r.child,c),o.ref=s.ref,s.child=o,o.return=s,s=o),s;case 22:return oS(r,s,o);case 24:return js(s),c=nn(Pt),r===null?(d=zp(),d===null&&(d=ft,m=Up(),d.pooledCache=m,m.refCount++,m!==null&&(d.pooledCacheLanes|=o),d=m),s.memoizedState={parent:c,cache:d},Hp(s),Ci(s,Pt,d)):((r.lanes&o)!==0&&(Fp(r,s),Al(s,null,null,o),Rl()),d=r.memoizedState,m=s.memoizedState,d.parent!==c?(d={parent:c,cache:c},s.memoizedState=d,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=d),Ci(s,Pt,c)):(c=m.cache,Ci(s,Pt,c),c!==d.cache&&jp(s,[Pt],o,!0))),Qt(r,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(i(156,s.tag))}function Xr(r){r.flags|=4}function gS(r,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)r.flags&=-16777217;else if(r.flags|=16777216,!x1(s)){if(s=Fn.current,s!==null&&((Qe&4194048)===Qe?Er!==null:(Qe&62914560)!==Qe&&(Qe&536870912)===0||s!==Er))throw Tl=Bp,Jb;r.flags|=8192}}function gd(r,s){s!==null&&(r.flags|=4),r.flags&16384&&(s=r.tag!==22?Du():536870912,r.lanes|=s,io|=s)}function Ll(r,s){if(!Je)switch(r.tailMode){case"hidden":s=r.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?r.tail=null:o.sibling=null;break;case"collapsed":o=r.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function wt(r){var s=r.alternate!==null&&r.alternate.child===r.child,o=0,c=0;if(s)for(var d=r.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags&65011712,c|=d.flags&65011712,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=c,r.childLanes=o,s}function EO(r,s,o){var c=s.pendingProps;switch(Mp(s),s.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(s),null;case 1:return wt(s),null;case 3:return o=s.stateNode,c=null,r!==null&&(c=r.memoizedState.cache),s.memoizedState.cache!==c&&(s.flags|=2048),Yr(Pt),De(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(r===null||r.child===null)&&(vl(s)?Xr(s):r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Wb())),wt(s),null;case 26:return o=s.memoizedState,r===null?(Xr(s),o!==null?(wt(s),gS(s,o)):(wt(s),s.flags&=-16777217)):o?o!==r.memoizedState?(Xr(s),wt(s),gS(s,o)):(wt(s),s.flags&=-16777217):(r.memoizedProps!==c&&Xr(s),wt(s),s.flags&=-16777217),null;case 27:_t(s),o=pe.current;var d=s.type;if(r!==null&&s.stateNode!=null)r.memoizedProps!==c&&Xr(s);else{if(!c){if(s.stateNode===null)throw Error(i(166));return wt(s),null}r=de.current,vl(s)?Gb(s):(r=g1(d,c,o),s.stateNode=r,Xr(s))}return wt(s),null;case 5:if(_t(s),o=s.type,r!==null&&s.stateNode!=null)r.memoizedProps!==c&&Xr(s);else{if(!c){if(s.stateNode===null)throw Error(i(166));return wt(s),null}if(r=de.current,vl(s))Gb(s);else{switch(d=Id(pe.current),r){case 1:r=d.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:r=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":r=d.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":r=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":r=d.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof c.is=="string"?d.createElement("select",{is:c.is}):d.createElement("select"),c.multiple?r.multiple=!0:c.size&&(r.size=c.size);break;default:r=typeof c.is=="string"?d.createElement(o,{is:c.is}):d.createElement(o)}}r[ce]=s,r[fe]=c;e:for(d=s.child;d!==null;){if(d.tag===5||d.tag===6)r.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===s)break e;for(;d.sibling===null;){if(d.return===null||d.return===s)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}s.stateNode=r;e:switch(Xt(r,o,c),o){case"button":case"input":case"select":case"textarea":r=!!c.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Xr(s)}}return wt(s),s.flags&=-16777217,null;case 6:if(r&&s.stateNode!=null)r.memoizedProps!==c&&Xr(s);else{if(typeof c!="string"&&s.stateNode===null)throw Error(i(166));if(r=pe.current,vl(s)){if(r=s.stateNode,o=s.memoizedProps,c=null,d=cn,d!==null)switch(d.tag){case 27:case 5:c=d.memoizedProps}r[ce]=s,r=!!(r.nodeValue===o||c!==null&&c.suppressHydrationWarning===!0||c1(r.nodeValue,o)),r||Ls(s)}else r=Id(r).createTextNode(c),r[ce]=s,s.stateNode=r}return wt(s),null;case 13:if(c=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(d=vl(s),c!==null&&c.dehydrated!==null){if(r===null){if(!d)throw Error(i(318));if(d=s.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(i(317));d[ce]=s}else _l(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;wt(s),d=!1}else d=Wb(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=d),d=!0;if(!d)return s.flags&256?(Qr(s),s):(Qr(s),null)}if(Qr(s),(s.flags&128)!==0)return s.lanes=o,s;if(o=c!==null,r=r!==null&&r.memoizedState!==null,o){c=s.child,d=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(d=c.alternate.memoizedState.cachePool.pool);var m=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(m=c.memoizedState.cachePool.pool),m!==d&&(c.flags|=2048)}return o!==r&&o&&(s.child.flags|=8192),gd(s,s.updateQueue),wt(s),null;case 4:return De(),r===null&&Vm(s.stateNode.containerInfo),wt(s),null;case 10:return Yr(s.type),wt(s),null;case 19:if(le(jt),d=s.memoizedState,d===null)return wt(s),null;if(c=(s.flags&128)!==0,m=d.rendering,m===null)if(c)Ll(d,!1);else{if(Ct!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(m=dd(r),m!==null){for(s.flags|=128,Ll(d,!1),r=m.updateQueue,s.updateQueue=r,gd(s,r),s.subtreeFlags=0,r=o,o=s.child;o!==null;)qb(o,r),o=o.sibling;return ie(jt,jt.current&1|2),s.child}r=r.sibling}d.tail!==null&&Yt()>_d&&(s.flags|=128,c=!0,Ll(d,!1),s.lanes=4194304)}else{if(!c)if(r=dd(m),r!==null){if(s.flags|=128,c=!0,r=r.updateQueue,s.updateQueue=r,gd(s,r),Ll(d,!0),d.tail===null&&d.tailMode==="hidden"&&!m.alternate&&!Je)return wt(s),null}else 2*Yt()-d.renderingStartTime>_d&&o!==536870912&&(s.flags|=128,c=!0,Ll(d,!1),s.lanes=4194304);d.isBackwards?(m.sibling=s.child,s.child=m):(r=d.last,r!==null?r.sibling=m:s.child=m,d.last=m)}return d.tail!==null?(s=d.tail,d.rendering=s,d.tail=s.sibling,d.renderingStartTime=Yt(),s.sibling=null,r=jt.current,ie(jt,c?r&1|2:r&1),s):(wt(s),null);case 22:case 23:return Qr(s),Yp(),c=s.memoizedState!==null,r!==null?r.memoizedState!==null!==c&&(s.flags|=8192):c&&(s.flags|=8192),c?(o&536870912)!==0&&(s.flags&128)===0&&(wt(s),s.subtreeFlags&6&&(s.flags|=8192)):wt(s),o=s.updateQueue,o!==null&&gd(s,o.retryQueue),o=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),c=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==o&&(s.flags|=2048),r!==null&&le(Us),null;case 24:return o=null,r!==null&&(o=r.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),Yr(Pt),wt(s),null;case 25:return null;case 30:return null}throw Error(i(156,s.tag))}function xO(r,s){switch(Mp(s),s.tag){case 1:return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return Yr(Pt),De(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 26:case 27:case 5:return _t(s),null;case 13:if(Qr(s),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(i(340));_l()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return le(jt),null;case 4:return De(),null;case 10:return Yr(s.type),null;case 22:case 23:return Qr(s),Yp(),r!==null&&le(Us),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 24:return Yr(Pt),null;case 25:return null;default:return null}}function yS(r,s){switch(Mp(s),s.tag){case 3:Yr(Pt),De();break;case 26:case 27:case 5:_t(s);break;case 4:De();break;case 13:Qr(s);break;case 19:le(jt);break;case 10:Yr(s.type);break;case 22:case 23:Qr(s),Yp(),r!==null&&le(Us);break;case 24:Yr(Pt)}}function Pl(r,s){try{var o=s.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var d=c.next;o=d;do{if((o.tag&r)===r){c=void 0;var m=o.create,S=o.inst;c=m(),S.destroy=c}o=o.next}while(o!==d)}}catch(E){dt(s,s.return,E)}}function Mi(r,s,o){try{var c=s.updateQueue,d=c!==null?c.lastEffect:null;if(d!==null){var m=d.next;c=m;do{if((c.tag&r)===r){var S=c.inst,E=S.destroy;if(E!==void 0){S.destroy=void 0,d=s;var L=o,Q=E;try{Q()}catch(re){dt(d,L,re)}}}c=c.next}while(c!==m)}}catch(re){dt(s,s.return,re)}}function vS(r){var s=r.updateQueue;if(s!==null){var o=r.stateNode;try{s0(s,o)}catch(c){dt(r,r.return,c)}}}function _S(r,s,o){o.props=zs(r.type,r.memoizedProps),o.state=r.memoizedState;try{o.componentWillUnmount()}catch(c){dt(r,s,c)}}function jl(r,s){try{var o=r.ref;if(o!==null){switch(r.tag){case 26:case 27:case 5:var c=r.stateNode;break;case 30:c=r.stateNode;break;default:c=r.stateNode}typeof o=="function"?r.refCleanup=o(c):o.current=c}}catch(d){dt(r,s,d)}}function xr(r,s){var o=r.ref,c=r.refCleanup;if(o!==null)if(typeof c=="function")try{c()}catch(d){dt(r,s,d)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(d){dt(r,s,d)}else o.current=null}function bS(r){var s=r.type,o=r.memoizedProps,c=r.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&c.focus();break e;case"img":o.src?c.src=o.src:o.srcSet&&(c.srcset=o.srcSet)}}catch(d){dt(r,r.return,d)}}function Sm(r,s,o){try{var c=r.stateNode;VO(c,r.type,o,s),c[fe]=s}catch(d){dt(r,r.return,d)}}function SS(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&Bi(r.type)||r.tag===4}function wm(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||SS(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&Bi(r.type)||r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Em(r,s,o){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(r,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(r),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=Ad));else if(c!==4&&(c===27&&Bi(r.type)&&(o=r.stateNode,s=null),r=r.child,r!==null))for(Em(r,s,o),r=r.sibling;r!==null;)Em(r,s,o),r=r.sibling}function yd(r,s,o){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?o.insertBefore(r,s):o.appendChild(r);else if(c!==4&&(c===27&&Bi(r.type)&&(o=r.stateNode),r=r.child,r!==null))for(yd(r,s,o),r=r.sibling;r!==null;)yd(r,s,o),r=r.sibling}function wS(r){var s=r.stateNode,o=r.memoizedProps;try{for(var c=r.type,d=s.attributes;d.length;)s.removeAttributeNode(d[0]);Xt(s,c,o),s[ce]=r,s[fe]=o}catch(m){dt(r,r.return,m)}}var Zr=!1,Ot=!1,xm=!1,ES=typeof WeakSet=="function"?WeakSet:Set,Bt=null;function TO(r,s){if(r=r.containerInfo,Wm=Ld,r=kb(r),wp(r)){if("selectionStart"in r)var o={start:r.selectionStart,end:r.selectionEnd};else e:{o=(o=r.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var S=0,E=-1,L=-1,Q=0,re=0,ae=r,Z=null;t:for(;;){for(var J;ae!==o||d!==0&&ae.nodeType!==3||(E=S+d),ae!==m||c!==0&&ae.nodeType!==3||(L=S+c),ae.nodeType===3&&(S+=ae.nodeValue.length),(J=ae.firstChild)!==null;)Z=ae,ae=J;for(;;){if(ae===r)break t;if(Z===o&&++Q===d&&(E=S),Z===m&&++re===c&&(L=S),(J=ae.nextSibling)!==null)break;ae=Z,Z=ae.parentNode}ae=J}o=E===-1||L===-1?null:{start:E,end:L}}else o=null}o=o||{start:0,end:0}}else o=null;for(Qm={focusedElem:r,selectionRange:o},Ld=!1,Bt=s;Bt!==null;)if(s=Bt,r=s.child,(s.subtreeFlags&1024)!==0&&r!==null)r.return=s,Bt=r;else for(;Bt!==null;){switch(s=Bt,m=s.alternate,r=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if((r&1024)!==0&&m!==null){r=void 0,o=s,d=m.memoizedProps,m=m.memoizedState,c=o.stateNode;try{var Me=zs(o.type,d,o.elementType===o.type);r=c.getSnapshotBeforeUpdate(Me,m),c.__reactInternalSnapshotBeforeUpdate=r}catch(Re){dt(o,o.return,Re)}}break;case 3:if((r&1024)!==0){if(r=s.stateNode.containerInfo,o=r.nodeType,o===9)Zm(r);else if(o===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Zm(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((r&1024)!==0)throw Error(i(163))}if(r=s.sibling,r!==null){r.return=s.return,Bt=r;break}Bt=s.return}}function xS(r,s,o){var c=o.flags;switch(o.tag){case 0:case 11:case 15:ki(r,o),c&4&&Pl(5,o);break;case 1:if(ki(r,o),c&4)if(r=o.stateNode,s===null)try{r.componentDidMount()}catch(S){dt(o,o.return,S)}else{var d=zs(o.type,s.memoizedProps);s=s.memoizedState;try{r.componentDidUpdate(d,s,r.__reactInternalSnapshotBeforeUpdate)}catch(S){dt(o,o.return,S)}}c&64&&vS(o),c&512&&jl(o,o.return);break;case 3:if(ki(r,o),c&64&&(r=o.updateQueue,r!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{s0(r,s)}catch(S){dt(o,o.return,S)}}break;case 27:s===null&&c&4&&wS(o);case 26:case 5:ki(r,o),s===null&&c&4&&bS(o),c&512&&jl(o,o.return);break;case 12:ki(r,o);break;case 13:ki(r,o),c&4&&RS(r,o),c&64&&(r=o.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(o=kO.bind(null,o),ZO(r,o))));break;case 22:if(c=o.memoizedState!==null||Zr,!c){s=s!==null&&s.memoizedState!==null||Ot,d=Zr;var m=Ot;Zr=c,(Ot=s)&&!m?Li(r,o,(o.subtreeFlags&8772)!==0):ki(r,o),Zr=d,Ot=m}break;case 30:break;default:ki(r,o)}}function TS(r){var s=r.alternate;s!==null&&(r.alternate=null,TS(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&Se(s)),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}var vt=null,yn=!1;function Jr(r,s,o){for(o=o.child;o!==null;)CS(r,s,o),o=o.sibling}function CS(r,s,o){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(hn,o)}catch{}switch(o.tag){case 26:Ot||xr(o,s),Jr(r,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Ot||xr(o,s);var c=vt,d=yn;Bi(o.type)&&(vt=o.stateNode,yn=!1),Jr(r,s,o),Gl(o.stateNode),vt=c,yn=d;break;case 5:Ot||xr(o,s);case 6:if(c=vt,d=yn,vt=null,Jr(r,s,o),vt=c,yn=d,vt!==null)if(yn)try{(vt.nodeType===9?vt.body:vt.nodeName==="HTML"?vt.ownerDocument.body:vt).removeChild(o.stateNode)}catch(m){dt(o,s,m)}else try{vt.removeChild(o.stateNode)}catch(m){dt(o,s,m)}break;case 18:vt!==null&&(yn?(r=vt,p1(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,o.stateNode),ec(r)):p1(vt,o.stateNode));break;case 4:c=vt,d=yn,vt=o.stateNode.containerInfo,yn=!0,Jr(r,s,o),vt=c,yn=d;break;case 0:case 11:case 14:case 15:Ot||Mi(2,o,s),Ot||Mi(4,o,s),Jr(r,s,o);break;case 1:Ot||(xr(o,s),c=o.stateNode,typeof c.componentWillUnmount=="function"&&_S(o,s,c)),Jr(r,s,o);break;case 21:Jr(r,s,o);break;case 22:Ot=(c=Ot)||o.memoizedState!==null,Jr(r,s,o),Ot=c;break;default:Jr(r,s,o)}}function RS(r,s){if(s.memoizedState===null&&(r=s.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{ec(r)}catch(o){dt(s,s.return,o)}}function CO(r){switch(r.tag){case 13:case 19:var s=r.stateNode;return s===null&&(s=r.stateNode=new ES),s;case 22:return r=r.stateNode,s=r._retryCache,s===null&&(s=r._retryCache=new ES),s;default:throw Error(i(435,r.tag))}}function Tm(r,s){var o=CO(r);s.forEach(function(c){var d=LO.bind(null,r,c);o.has(c)||(o.add(c),c.then(d,d))})}function Cn(r,s){var o=s.deletions;if(o!==null)for(var c=0;c<o.length;c++){var d=o[c],m=r,S=s,E=S;e:for(;E!==null;){switch(E.tag){case 27:if(Bi(E.type)){vt=E.stateNode,yn=!1;break e}break;case 5:vt=E.stateNode,yn=!1;break e;case 3:case 4:vt=E.stateNode.containerInfo,yn=!0;break e}E=E.return}if(vt===null)throw Error(i(160));CS(m,S,d),vt=null,yn=!1,m=d.alternate,m!==null&&(m.return=null),d.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)AS(s,r),s=s.sibling}var ir=null;function AS(r,s){var o=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:Cn(s,r),Rn(r),c&4&&(Mi(3,r,r.return),Pl(3,r),Mi(5,r,r.return));break;case 1:Cn(s,r),Rn(r),c&512&&(Ot||o===null||xr(o,o.return)),c&64&&Zr&&(r=r.updateQueue,r!==null&&(c=r.callbacks,c!==null&&(o=r.shared.hiddenCallbacks,r.shared.hiddenCallbacks=o===null?c:o.concat(c))));break;case 26:var d=ir;if(Cn(s,r),Rn(r),c&512&&(Ot||o===null||xr(o,o.return)),c&4){var m=o!==null?o.memoizedState:null;if(c=r.memoizedState,o===null)if(c===null)if(r.stateNode===null){e:{c=r.type,o=r.memoizedProps,d=d.ownerDocument||d;t:switch(c){case"title":m=d.getElementsByTagName("title")[0],(!m||m[_e]||m[ce]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=d.createElement(c),d.head.insertBefore(m,d.querySelector("head > title"))),Xt(m,c,o),m[ce]=r,Le(m),c=m;break e;case"link":var S=w1("link","href",d).get(c+(o.href||""));if(S){for(var E=0;E<S.length;E++)if(m=S[E],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){S.splice(E,1);break t}}m=d.createElement(c),Xt(m,c,o),d.head.appendChild(m);break;case"meta":if(S=w1("meta","content",d).get(c+(o.content||""))){for(E=0;E<S.length;E++)if(m=S[E],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){S.splice(E,1);break t}}m=d.createElement(c),Xt(m,c,o),d.head.appendChild(m);break;default:throw Error(i(468,c))}m[ce]=r,Le(m),c=m}r.stateNode=c}else E1(d,r.type,r.stateNode);else r.stateNode=S1(d,c,r.memoizedProps);else m!==c?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,c===null?E1(d,r.type,r.stateNode):S1(d,c,r.memoizedProps)):c===null&&r.stateNode!==null&&Sm(r,r.memoizedProps,o.memoizedProps)}break;case 27:Cn(s,r),Rn(r),c&512&&(Ot||o===null||xr(o,o.return)),o!==null&&c&4&&Sm(r,r.memoizedProps,o.memoizedProps);break;case 5:if(Cn(s,r),Rn(r),c&512&&(Ot||o===null||xr(o,o.return)),r.flags&32){d=r.stateNode;try{Pa(d,"")}catch(J){dt(r,r.return,J)}}c&4&&r.stateNode!=null&&(d=r.memoizedProps,Sm(r,d,o!==null?o.memoizedProps:d)),c&1024&&(xm=!0);break;case 6:if(Cn(s,r),Rn(r),c&4){if(r.stateNode===null)throw Error(i(162));c=r.memoizedProps,o=r.stateNode;try{o.nodeValue=c}catch(J){dt(r,r.return,J)}}break;case 3:if(Nd=null,d=ir,ir=Dd(s.containerInfo),Cn(s,r),ir=d,Rn(r),c&4&&o!==null&&o.memoizedState.isDehydrated)try{ec(s.containerInfo)}catch(J){dt(r,r.return,J)}xm&&(xm=!1,IS(r));break;case 4:c=ir,ir=Dd(r.stateNode.containerInfo),Cn(s,r),Rn(r),ir=c;break;case 12:Cn(s,r),Rn(r);break;case 13:Cn(s,r),Rn(r),r.child.flags&8192&&r.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Om=Yt()),c&4&&(c=r.updateQueue,c!==null&&(r.updateQueue=null,Tm(r,c)));break;case 22:d=r.memoizedState!==null;var L=o!==null&&o.memoizedState!==null,Q=Zr,re=Ot;if(Zr=Q||d,Ot=re||L,Cn(s,r),Ot=re,Zr=Q,Rn(r),c&8192)e:for(s=r.stateNode,s._visibility=d?s._visibility&-2:s._visibility|1,d&&(o===null||L||Zr||Ot||Bs(r)),o=null,s=r;;){if(s.tag===5||s.tag===26){if(o===null){L=o=s;try{if(m=L.stateNode,d)S=m.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{E=L.stateNode;var ae=L.memoizedProps.style,Z=ae!=null&&ae.hasOwnProperty("display")?ae.display:null;E.style.display=Z==null||typeof Z=="boolean"?"":(""+Z).trim()}}catch(J){dt(L,L.return,J)}}}else if(s.tag===6){if(o===null){L=s;try{L.stateNode.nodeValue=d?"":L.memoizedProps}catch(J){dt(L,L.return,J)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===r)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break e;for(;s.sibling===null;){if(s.return===null||s.return===r)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}c&4&&(c=r.updateQueue,c!==null&&(o=c.retryQueue,o!==null&&(c.retryQueue=null,Tm(r,o))));break;case 19:Cn(s,r),Rn(r),c&4&&(c=r.updateQueue,c!==null&&(r.updateQueue=null,Tm(r,c)));break;case 30:break;case 21:break;default:Cn(s,r),Rn(r)}}function Rn(r){var s=r.flags;if(s&2){try{for(var o,c=r.return;c!==null;){if(SS(c)){o=c;break}c=c.return}if(o==null)throw Error(i(160));switch(o.tag){case 27:var d=o.stateNode,m=wm(r);yd(r,m,d);break;case 5:var S=o.stateNode;o.flags&32&&(Pa(S,""),o.flags&=-33);var E=wm(r);yd(r,E,S);break;case 3:case 4:var L=o.stateNode.containerInfo,Q=wm(r);Em(r,Q,L);break;default:throw Error(i(161))}}catch(re){dt(r,r.return,re)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function IS(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var s=r;IS(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),r=r.sibling}}function ki(r,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)xS(r,s.alternate,s),s=s.sibling}function Bs(r){for(r=r.child;r!==null;){var s=r;switch(s.tag){case 0:case 11:case 14:case 15:Mi(4,s,s.return),Bs(s);break;case 1:xr(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&_S(s,s.return,o),Bs(s);break;case 27:Gl(s.stateNode);case 26:case 5:xr(s,s.return),Bs(s);break;case 22:s.memoizedState===null&&Bs(s);break;case 30:Bs(s);break;default:Bs(s)}r=r.sibling}}function Li(r,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var c=s.alternate,d=r,m=s,S=m.flags;switch(m.tag){case 0:case 11:case 15:Li(d,m,o),Pl(4,m);break;case 1:if(Li(d,m,o),c=m,d=c.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(Q){dt(c,c.return,Q)}if(c=m,d=c.updateQueue,d!==null){var E=c.stateNode;try{var L=d.shared.hiddenCallbacks;if(L!==null)for(d.shared.hiddenCallbacks=null,d=0;d<L.length;d++)i0(L[d],E)}catch(Q){dt(c,c.return,Q)}}o&&S&64&&vS(m),jl(m,m.return);break;case 27:wS(m);case 26:case 5:Li(d,m,o),o&&c===null&&S&4&&bS(m),jl(m,m.return);break;case 12:Li(d,m,o);break;case 13:Li(d,m,o),o&&S&4&&RS(d,m);break;case 22:m.memoizedState===null&&Li(d,m,o),jl(m,m.return);break;case 30:break;default:Li(d,m,o)}s=s.sibling}}function Cm(r,s){var o=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==o&&(r!=null&&r.refCount++,o!=null&&wl(o))}function Rm(r,s){r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&wl(r))}function Tr(r,s,o,c){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)DS(r,s,o,c),s=s.sibling}function DS(r,s,o,c){var d=s.flags;switch(s.tag){case 0:case 11:case 15:Tr(r,s,o,c),d&2048&&Pl(9,s);break;case 1:Tr(r,s,o,c);break;case 3:Tr(r,s,o,c),d&2048&&(r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&wl(r)));break;case 12:if(d&2048){Tr(r,s,o,c),r=s.stateNode;try{var m=s.memoizedProps,S=m.id,E=m.onPostCommit;typeof E=="function"&&E(S,s.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(L){dt(s,s.return,L)}}else Tr(r,s,o,c);break;case 13:Tr(r,s,o,c);break;case 23:break;case 22:m=s.stateNode,S=s.alternate,s.memoizedState!==null?m._visibility&2?Tr(r,s,o,c):Ul(r,s):m._visibility&2?Tr(r,s,o,c):(m._visibility|=2,to(r,s,o,c,(s.subtreeFlags&10256)!==0)),d&2048&&Cm(S,s);break;case 24:Tr(r,s,o,c),d&2048&&Rm(s.alternate,s);break;default:Tr(r,s,o,c)}}function to(r,s,o,c,d){for(d=d&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var m=r,S=s,E=o,L=c,Q=S.flags;switch(S.tag){case 0:case 11:case 15:to(m,S,E,L,d),Pl(8,S);break;case 23:break;case 22:var re=S.stateNode;S.memoizedState!==null?re._visibility&2?to(m,S,E,L,d):Ul(m,S):(re._visibility|=2,to(m,S,E,L,d)),d&&Q&2048&&Cm(S.alternate,S);break;case 24:to(m,S,E,L,d),d&&Q&2048&&Rm(S.alternate,S);break;default:to(m,S,E,L,d)}s=s.sibling}}function Ul(r,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=r,c=s,d=c.flags;switch(c.tag){case 22:Ul(o,c),d&2048&&Cm(c.alternate,c);break;case 24:Ul(o,c),d&2048&&Rm(c.alternate,c);break;default:Ul(o,c)}s=s.sibling}}var $l=8192;function no(r){if(r.subtreeFlags&$l)for(r=r.child;r!==null;)OS(r),r=r.sibling}function OS(r){switch(r.tag){case 26:no(r),r.flags&$l&&r.memoizedState!==null&&dN(ir,r.memoizedState,r.memoizedProps);break;case 5:no(r);break;case 3:case 4:var s=ir;ir=Dd(r.stateNode.containerInfo),no(r),ir=s;break;case 22:r.memoizedState===null&&(s=r.alternate,s!==null&&s.memoizedState!==null?(s=$l,$l=16777216,no(r),$l=s):no(r));break;default:no(r)}}function NS(r){var s=r.alternate;if(s!==null&&(r=s.child,r!==null)){s.child=null;do s=r.sibling,r.sibling=null,r=s;while(r!==null)}}function zl(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var c=s[o];Bt=c,kS(c,r)}NS(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)MS(r),r=r.sibling}function MS(r){switch(r.tag){case 0:case 11:case 15:zl(r),r.flags&2048&&Mi(9,r,r.return);break;case 3:zl(r);break;case 12:zl(r);break;case 22:var s=r.stateNode;r.memoizedState!==null&&s._visibility&2&&(r.return===null||r.return.tag!==13)?(s._visibility&=-3,vd(r)):zl(r);break;default:zl(r)}}function vd(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var c=s[o];Bt=c,kS(c,r)}NS(r)}for(r=r.child;r!==null;){switch(s=r,s.tag){case 0:case 11:case 15:Mi(8,s,s.return),vd(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,vd(s));break;default:vd(s)}r=r.sibling}}function kS(r,s){for(;Bt!==null;){var o=Bt;switch(o.tag){case 0:case 11:case 15:Mi(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var c=o.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:wl(o.memoizedState.cache)}if(c=o.child,c!==null)c.return=o,Bt=c;else e:for(o=r;Bt!==null;){c=Bt;var d=c.sibling,m=c.return;if(TS(c),c===o){Bt=null;break e}if(d!==null){d.return=m,Bt=d;break e}Bt=m}}}var RO={getCacheForType:function(r){var s=nn(Pt),o=s.data.get(r);return o===void 0&&(o=r(),s.data.set(r,o)),o}},AO=typeof WeakMap=="function"?WeakMap:Map,tt=0,ft=null,Ge=null,Qe=0,nt=0,An=null,Pi=!1,ro=!1,Am=!1,ei=0,Ct=0,ji=0,Hs=0,Im=0,qn=0,io=0,Bl=null,vn=null,Dm=!1,Om=0,_d=1/0,bd=null,Ui=null,Kt=0,$i=null,so=null,ao=0,Nm=0,Mm=null,LS=null,Hl=0,km=null;function In(){if((tt&2)!==0&&Qe!==0)return Qe&-Qe;if(U.T!==null){var r=Ya;return r!==0?r:Bm()}return j()}function PS(){qn===0&&(qn=(Qe&536870912)===0||Je?Na():536870912);var r=Fn.current;return r!==null&&(r.flags|=32),qn}function Dn(r,s,o){(r===ft&&(nt===2||nt===9)||r.cancelPendingCommit!==null)&&(oo(r,0),zi(r,Qe,qn,!1)),Ts(r,o),((tt&2)===0||r!==ft)&&(r===ft&&((tt&2)===0&&(Hs|=o),Ct===4&&zi(r,Qe,qn,!1)),Cr(r))}function jS(r,s,o){if((tt&6)!==0)throw Error(i(327));var c=!o&&(s&124)===0&&(s&r.expiredLanes)===0||br(r,s),d=c?OO(r,s):jm(r,s,!0),m=c;do{if(d===0){ro&&!c&&zi(r,s,0,!1);break}else{if(o=r.current.alternate,m&&!IO(o)){d=jm(r,s,!1),m=!1;continue}if(d===2){if(m=s,r.errorRecoveryDisabledLanes&m)var S=0;else S=r.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){s=S;e:{var E=r;d=Bl;var L=E.current.memoizedState.isDehydrated;if(L&&(oo(E,S).flags|=256),S=jm(E,S,!1),S!==2){if(Am&&!L){E.errorRecoveryDisabledLanes|=m,Hs|=m,d=4;break e}m=vn,vn=d,m!==null&&(vn===null?vn=m:vn.push.apply(vn,m))}d=S}if(m=!1,d!==2)continue}}if(d===1){oo(r,0),zi(r,s,0,!0);break}e:{switch(c=r,m=d,m){case 0:case 1:throw Error(i(345));case 4:if((s&4194048)!==s)break;case 6:zi(c,s,qn,!Pi);break e;case 2:vn=null;break;case 3:case 5:break;default:throw Error(i(329))}if((s&62914560)===s&&(d=Om+300-Yt(),10<d)){if(zi(c,s,qn,!Pi),xs(c,0,!0)!==0)break e;c.timeoutHandle=f1(US.bind(null,c,o,vn,bd,Dm,s,qn,Hs,io,Pi,m,2,-0,0),d);break e}US(c,o,vn,bd,Dm,s,qn,Hs,io,Pi,m,0,-0,0)}}break}while(!0);Cr(r)}function US(r,s,o,c,d,m,S,E,L,Q,re,ae,Z,J){if(r.timeoutHandle=-1,ae=s.subtreeFlags,(ae&8192||(ae&16785408)===16785408)&&(Ql={stylesheets:null,count:0,unsuspend:uN},OS(s),ae=fN(),ae!==null)){r.cancelPendingCommit=ae(VS.bind(null,r,s,m,o,c,d,S,E,L,re,1,Z,J)),zi(r,m,S,!Q);return}VS(r,s,m,o,c,d,S,E,L)}function IO(r){for(var s=r;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var c=0;c<o.length;c++){var d=o[c],m=d.getSnapshot;d=d.value;try{if(!xn(m(),d))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function zi(r,s,o,c){s&=~Im,s&=~Hs,r.suspendedLanes|=s,r.pingedLanes&=~s,c&&(r.warmLanes|=s),c=r.expirationTimes;for(var d=s;0<d;){var m=31-Wt(d),S=1<<m;c[m]=-1,d&=~S}o!==0&&Cs(r,o,s)}function Sd(){return(tt&6)===0?(Fl(0),!1):!0}function Lm(){if(Ge!==null){if(nt===0)var r=Ge.return;else r=Ge,Gr=Ps=null,Zp(r),Ja=null,Ml=0,r=Ge;for(;r!==null;)yS(r.alternate,r),r=r.return;Ge=null}}function oo(r,s){var o=r.timeoutHandle;o!==-1&&(r.timeoutHandle=-1,YO(o)),o=r.cancelPendingCommit,o!==null&&(r.cancelPendingCommit=null,o()),Lm(),ft=r,Ge=o=Fr(r.current,null),Qe=s,nt=0,An=null,Pi=!1,ro=br(r,s),Am=!1,io=qn=Im=Hs=ji=Ct=0,vn=Bl=null,Dm=!1,(s&8)!==0&&(s|=s&32);var c=r.entangledLanes;if(c!==0)for(r=r.entanglements,c&=s;0<c;){var d=31-Wt(c),m=1<<d;s|=r[d],c&=~m}return ei=s,Fu(),o}function $S(r,s){He=null,U.H=ld,s===xl||s===Zu?(s=n0(),nt=3):s===Jb?(s=n0(),nt=4):nt=s===rS?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,An=s,Ge===null&&(Ct=1,hd(r,$n(s,r.current)))}function zS(){var r=U.H;return U.H=ld,r===null?ld:r}function BS(){var r=U.A;return U.A=RO,r}function Pm(){Ct=4,Pi||(Qe&4194048)!==Qe&&Fn.current!==null||(ro=!0),(ji&134217727)===0&&(Hs&134217727)===0||ft===null||zi(ft,Qe,qn,!1)}function jm(r,s,o){var c=tt;tt|=2;var d=zS(),m=BS();(ft!==r||Qe!==s)&&(bd=null,oo(r,s)),s=!1;var S=Ct;e:do try{if(nt!==0&&Ge!==null){var E=Ge,L=An;switch(nt){case 8:Lm(),S=6;break e;case 3:case 2:case 9:case 6:Fn.current===null&&(s=!0);var Q=nt;if(nt=0,An=null,lo(r,E,L,Q),o&&ro){S=0;break e}break;default:Q=nt,nt=0,An=null,lo(r,E,L,Q)}}DO(),S=Ct;break}catch(re){$S(r,re)}while(!0);return s&&r.shellSuspendCounter++,Gr=Ps=null,tt=c,U.H=d,U.A=m,Ge===null&&(ft=null,Qe=0,Fu()),S}function DO(){for(;Ge!==null;)HS(Ge)}function OO(r,s){var o=tt;tt|=2;var c=zS(),d=BS();ft!==r||Qe!==s?(bd=null,_d=Yt()+500,oo(r,s)):ro=br(r,s);e:do try{if(nt!==0&&Ge!==null){s=Ge;var m=An;t:switch(nt){case 1:nt=0,An=null,lo(r,s,m,1);break;case 2:case 9:if(e0(m)){nt=0,An=null,FS(s);break}s=function(){nt!==2&&nt!==9||ft!==r||(nt=7),Cr(r)},m.then(s,s);break e;case 3:nt=7;break e;case 4:nt=5;break e;case 7:e0(m)?(nt=0,An=null,FS(s)):(nt=0,An=null,lo(r,s,m,7));break;case 5:var S=null;switch(Ge.tag){case 26:S=Ge.memoizedState;case 5:case 27:var E=Ge;if(!S||x1(S)){nt=0,An=null;var L=E.sibling;if(L!==null)Ge=L;else{var Q=E.return;Q!==null?(Ge=Q,wd(Q)):Ge=null}break t}}nt=0,An=null,lo(r,s,m,5);break;case 6:nt=0,An=null,lo(r,s,m,6);break;case 8:Lm(),Ct=6;break e;default:throw Error(i(462))}}NO();break}catch(re){$S(r,re)}while(!0);return Gr=Ps=null,U.H=c,U.A=d,tt=o,Ge!==null?0:(ft=null,Qe=0,Fu(),Ct)}function NO(){for(;Ge!==null&&!Ln();)HS(Ge)}function HS(r){var s=mS(r.alternate,r,ei);r.memoizedProps=r.pendingProps,s===null?wd(r):Ge=s}function FS(r){var s=r,o=s.alternate;switch(s.tag){case 15:case 0:s=cS(o,s,s.pendingProps,s.type,void 0,Qe);break;case 11:s=cS(o,s,s.pendingProps,s.type.render,s.ref,Qe);break;case 5:Zp(s);default:yS(o,s),s=Ge=qb(s,ei),s=mS(o,s,ei)}r.memoizedProps=r.pendingProps,s===null?wd(r):Ge=s}function lo(r,s,o,c){Gr=Ps=null,Zp(s),Ja=null,Ml=0;var d=s.return;try{if(SO(r,d,s,o,Qe)){Ct=1,hd(r,$n(o,r.current)),Ge=null;return}}catch(m){if(d!==null)throw Ge=d,m;Ct=1,hd(r,$n(o,r.current)),Ge=null;return}s.flags&32768?(Je||c===1?r=!0:ro||(Qe&536870912)!==0?r=!1:(Pi=r=!0,(c===2||c===9||c===3||c===6)&&(c=Fn.current,c!==null&&c.tag===13&&(c.flags|=16384))),qS(s,r)):wd(s)}function wd(r){var s=r;do{if((s.flags&32768)!==0){qS(s,Pi);return}r=s.return;var o=EO(s.alternate,s,ei);if(o!==null){Ge=o;return}if(s=s.sibling,s!==null){Ge=s;return}Ge=s=r}while(s!==null);Ct===0&&(Ct=5)}function qS(r,s){do{var o=xO(r.alternate,r);if(o!==null){o.flags&=32767,Ge=o;return}if(o=r.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(r=r.sibling,r!==null)){Ge=r;return}Ge=r=o}while(r!==null);Ct=6,Ge=null}function VS(r,s,o,c,d,m,S,E,L){r.cancelPendingCommit=null;do Ed();while(Kt!==0);if((tt&6)!==0)throw Error(i(327));if(s!==null){if(s===r.current)throw Error(i(177));if(m=s.lanes|s.childLanes,m|=Rp,Ou(r,o,m,S,E,L),r===ft&&(Ge=ft=null,Qe=0),so=s,$i=r,ao=o,Nm=m,Mm=d,LS=c,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,PO(Oa,function(){return KS(),null})):(r.callbackNode=null,r.callbackPriority=0),c=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||c){c=U.T,U.T=null,d=ee.p,ee.p=2,S=tt,tt|=4;try{TO(r,s,o)}finally{tt=S,ee.p=d,U.T=c}}Kt=1,GS(),YS(),WS()}}function GS(){if(Kt===1){Kt=0;var r=$i,s=so,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=U.T,U.T=null;var c=ee.p;ee.p=2;var d=tt;tt|=4;try{AS(s,r);var m=Qm,S=kb(r.containerInfo),E=m.focusedElem,L=m.selectionRange;if(S!==E&&E&&E.ownerDocument&&Mb(E.ownerDocument.documentElement,E)){if(L!==null&&wp(E)){var Q=L.start,re=L.end;if(re===void 0&&(re=Q),"selectionStart"in E)E.selectionStart=Q,E.selectionEnd=Math.min(re,E.value.length);else{var ae=E.ownerDocument||document,Z=ae&&ae.defaultView||window;if(Z.getSelection){var J=Z.getSelection(),Me=E.textContent.length,Re=Math.min(L.start,Me),ot=L.end===void 0?Re:Math.min(L.end,Me);!J.extend&&Re>ot&&(S=ot,ot=Re,Re=S);var q=Nb(E,Re),$=Nb(E,ot);if(q&&$&&(J.rangeCount!==1||J.anchorNode!==q.node||J.anchorOffset!==q.offset||J.focusNode!==$.node||J.focusOffset!==$.offset)){var W=ae.createRange();W.setStart(q.node,q.offset),J.removeAllRanges(),Re>ot?(J.addRange(W),J.extend($.node,$.offset)):(W.setEnd($.node,$.offset),J.addRange(W))}}}}for(ae=[],J=E;J=J.parentNode;)J.nodeType===1&&ae.push({element:J,left:J.scrollLeft,top:J.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<ae.length;E++){var se=ae[E];se.element.scrollLeft=se.left,se.element.scrollTop=se.top}}Ld=!!Wm,Qm=Wm=null}finally{tt=d,ee.p=c,U.T=o}}r.current=s,Kt=2}}function YS(){if(Kt===2){Kt=0;var r=$i,s=so,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=U.T,U.T=null;var c=ee.p;ee.p=2;var d=tt;tt|=4;try{xS(r,s.alternate,s)}finally{tt=d,ee.p=c,U.T=o}}Kt=3}}function WS(){if(Kt===4||Kt===3){Kt=0,Lr();var r=$i,s=so,o=ao,c=LS;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?Kt=5:(Kt=0,so=$i=null,QS(r,r.pendingLanes));var d=r.pendingLanes;if(d===0&&(Ui=null),ll(o),s=s.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(hn,s,void 0,(s.current.flags&128)===128)}catch{}if(c!==null){s=U.T,d=ee.p,ee.p=2,U.T=null;try{for(var m=r.onRecoverableError,S=0;S<c.length;S++){var E=c[S];m(E.value,{componentStack:E.stack})}}finally{U.T=s,ee.p=d}}(ao&3)!==0&&Ed(),Cr(r),d=r.pendingLanes,(o&4194090)!==0&&(d&42)!==0?r===km?Hl++:(Hl=0,km=r):Hl=0,Fl(0)}}function QS(r,s){(r.pooledCacheLanes&=s)===0&&(s=r.pooledCache,s!=null&&(r.pooledCache=null,wl(s)))}function Ed(r){return GS(),YS(),WS(),KS()}function KS(){if(Kt!==5)return!1;var r=$i,s=Nm;Nm=0;var o=ll(ao),c=U.T,d=ee.p;try{ee.p=32>o?32:o,U.T=null,o=Mm,Mm=null;var m=$i,S=ao;if(Kt=0,so=$i=null,ao=0,(tt&6)!==0)throw Error(i(331));var E=tt;if(tt|=4,MS(m.current),DS(m,m.current,S,o),tt=E,Fl(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(hn,m)}catch{}return!0}finally{ee.p=d,U.T=c,QS(r,s)}}function XS(r,s,o){s=$n(o,s),s=fm(r.stateNode,s,2),r=Ii(r,s,2),r!==null&&(Ts(r,2),Cr(r))}function dt(r,s,o){if(r.tag===3)XS(r,r,o);else for(;s!==null;){if(s.tag===3){XS(s,r,o);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Ui===null||!Ui.has(c))){r=$n(o,r),o=tS(2),c=Ii(s,o,2),c!==null&&(nS(o,c,s,r),Ts(c,2),Cr(c));break}}s=s.return}}function Um(r,s,o){var c=r.pingCache;if(c===null){c=r.pingCache=new AO;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(o)||(Am=!0,d.add(o),r=MO.bind(null,r,s,o),s.then(r,r))}function MO(r,s,o){var c=r.pingCache;c!==null&&c.delete(s),r.pingedLanes|=r.suspendedLanes&o,r.warmLanes&=~o,ft===r&&(Qe&o)===o&&(Ct===4||Ct===3&&(Qe&62914560)===Qe&&300>Yt()-Om?(tt&2)===0&&oo(r,0):Im|=o,io===Qe&&(io=0)),Cr(r)}function ZS(r,s){s===0&&(s=Du()),r=Fa(r,s),r!==null&&(Ts(r,s),Cr(r))}function kO(r){var s=r.memoizedState,o=0;s!==null&&(o=s.retryLane),ZS(r,o)}function LO(r,s){var o=0;switch(r.tag){case 13:var c=r.stateNode,d=r.memoizedState;d!==null&&(o=d.retryLane);break;case 19:c=r.stateNode;break;case 22:c=r.stateNode._retryCache;break;default:throw Error(i(314))}c!==null&&c.delete(s),ZS(r,o)}function PO(r,s){return kn(r,s)}var xd=null,co=null,$m=!1,Td=!1,zm=!1,Fs=0;function Cr(r){r!==co&&r.next===null&&(co===null?xd=co=r:co=co.next=r),Td=!0,$m||($m=!0,UO())}function Fl(r,s){if(!zm&&Td){zm=!0;do for(var o=!1,c=xd;c!==null;){if(r!==0){var d=c.pendingLanes;if(d===0)var m=0;else{var S=c.suspendedLanes,E=c.pingedLanes;m=(1<<31-Wt(42|r)+1)-1,m&=d&~(S&~E),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,n1(c,m))}else m=Qe,m=xs(c,c===ft?m:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(m&3)===0||br(c,m)||(o=!0,n1(c,m));c=c.next}while(o);zm=!1}}function jO(){JS()}function JS(){Td=$m=!1;var r=0;Fs!==0&&(GO()&&(r=Fs),Fs=0);for(var s=Yt(),o=null,c=xd;c!==null;){var d=c.next,m=e1(c,s);m===0?(c.next=null,o===null?xd=d:o.next=d,d===null&&(co=o)):(o=c,(r!==0||(m&3)!==0)&&(Td=!0)),c=d}Fl(r)}function e1(r,s){for(var o=r.suspendedLanes,c=r.pingedLanes,d=r.expirationTimes,m=r.pendingLanes&-62914561;0<m;){var S=31-Wt(m),E=1<<S,L=d[S];L===-1?((E&o)===0||(E&c)!==0)&&(d[S]=Iu(E,s)):L<=s&&(r.expiredLanes|=E),m&=~E}if(s=ft,o=Qe,o=xs(r,r===s?o:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),c=r.callbackNode,o===0||r===s&&(nt===2||nt===9)||r.cancelPendingCommit!==null)return c!==null&&c!==null&&Et(c),r.callbackNode=null,r.callbackPriority=0;if((o&3)===0||br(r,o)){if(s=o&-o,s===r.callbackPriority)return s;switch(c!==null&&Et(c),ll(o)){case 2:case 8:o=Da;break;case 32:o=Oa;break;case 268435456:o=wi;break;default:o=Oa}return c=t1.bind(null,r),o=kn(o,c),r.callbackPriority=s,r.callbackNode=o,s}return c!==null&&c!==null&&Et(c),r.callbackPriority=2,r.callbackNode=null,2}function t1(r,s){if(Kt!==0&&Kt!==5)return r.callbackNode=null,r.callbackPriority=0,null;var o=r.callbackNode;if(Ed()&&r.callbackNode!==o)return null;var c=Qe;return c=xs(r,r===ft?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),c===0?null:(jS(r,c,s),e1(r,Yt()),r.callbackNode!=null&&r.callbackNode===o?t1.bind(null,r):null)}function n1(r,s){if(Ed())return null;jS(r,s,!0)}function UO(){WO(function(){(tt&6)!==0?kn(Ss,jO):JS()})}function Bm(){return Fs===0&&(Fs=Na()),Fs}function r1(r){return r==null||typeof r=="symbol"||typeof r=="boolean"?null:typeof r=="function"?r:Pu(""+r)}function i1(r,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,r.id&&o.setAttribute("form",r.id),s.parentNode.insertBefore(o,s),r=new FormData(r),o.parentNode.removeChild(o),r}function $O(r,s,o,c,d){if(s==="submit"&&o&&o.stateNode===d){var m=r1((d[fe]||null).action),S=c.submitter;S&&(s=(s=S[fe]||null)?r1(s.formAction):S.getAttribute("formAction"),s!==null&&(m=s,S=null));var E=new zu("action","action",null,c,d);r.push({event:E,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(Fs!==0){var L=S?i1(d,S):new FormData(d);om(o,{pending:!0,data:L,method:d.method,action:m},null,L)}}else typeof m=="function"&&(E.preventDefault(),L=S?i1(d,S):new FormData(d),om(o,{pending:!0,data:L,method:d.method,action:m},m,L))},currentTarget:d}]})}}for(var Hm=0;Hm<Cp.length;Hm++){var Fm=Cp[Hm],zO=Fm.toLowerCase(),BO=Fm[0].toUpperCase()+Fm.slice(1);rr(zO,"on"+BO)}rr(jb,"onAnimationEnd"),rr(Ub,"onAnimationIteration"),rr($b,"onAnimationStart"),rr("dblclick","onDoubleClick"),rr("focusin","onFocus"),rr("focusout","onBlur"),rr(iO,"onTransitionRun"),rr(sO,"onTransitionStart"),rr(aO,"onTransitionCancel"),rr(zb,"onTransitionEnd"),ln("onMouseEnter",["mouseout","mouseover"]),ln("onMouseLeave",["mouseout","mouseover"]),ln("onPointerEnter",["pointerout","pointerover"]),ln("onPointerLeave",["pointerout","pointerover"]),En("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),En("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),En("onBeforeInput",["compositionend","keypress","textInput","paste"]),En("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),En("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),En("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ql="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),HO=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ql));function s1(r,s){s=(s&4)!==0;for(var o=0;o<r.length;o++){var c=r[o],d=c.event;c=c.listeners;e:{var m=void 0;if(s)for(var S=c.length-1;0<=S;S--){var E=c[S],L=E.instance,Q=E.currentTarget;if(E=E.listener,L!==m&&d.isPropagationStopped())break e;m=E,d.currentTarget=Q;try{m(d)}catch(re){fd(re)}d.currentTarget=null,m=L}else for(S=0;S<c.length;S++){if(E=c[S],L=E.instance,Q=E.currentTarget,E=E.listener,L!==m&&d.isPropagationStopped())break e;m=E,d.currentTarget=Q;try{m(d)}catch(re){fd(re)}d.currentTarget=null,m=L}}}}function Ye(r,s){var o=s[we];o===void 0&&(o=s[we]=new Set);var c=r+"__bubble";o.has(c)||(a1(s,r,2,!1),o.add(c))}function qm(r,s,o){var c=0;s&&(c|=4),a1(o,r,c,s)}var Cd="_reactListening"+Math.random().toString(36).slice(2);function Vm(r){if(!r[Cd]){r[Cd]=!0,it.forEach(function(o){o!=="selectionchange"&&(HO.has(o)||qm(o,!1,r),qm(o,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[Cd]||(s[Cd]=!0,qm("selectionchange",!1,s))}}function a1(r,s,o,c){switch(D1(s)){case 2:var d=mN;break;case 8:d=gN;break;default:d=sg}o=d.bind(null,s,o,r),d=void 0,!hp||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?r.addEventListener(s,o,{capture:!0,passive:d}):r.addEventListener(s,o,!0):d!==void 0?r.addEventListener(s,o,{passive:d}):r.addEventListener(s,o,!1)}function Gm(r,s,o,c,d){var m=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var S=c.tag;if(S===3||S===4){var E=c.stateNode.containerInfo;if(E===d)break;if(S===4)for(S=c.return;S!==null;){var L=S.tag;if((L===3||L===4)&&S.stateNode.containerInfo===d)return;S=S.return}for(;E!==null;){if(S=ze(E),S===null)return;if(L=S.tag,L===5||L===6||L===26||L===27){c=m=S;continue e}E=E.parentNode}}c=c.return}hb(function(){var Q=m,re=dp(o),ae=[];e:{var Z=Bb.get(r);if(Z!==void 0){var J=zu,Me=r;switch(r){case"keypress":if(Uu(o)===0)break e;case"keydown":case"keyup":J=PD;break;case"focusin":Me="focus",J=yp;break;case"focusout":Me="blur",J=yp;break;case"beforeblur":case"afterblur":J=yp;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":J=gb;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":J=xD;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":J=$D;break;case jb:case Ub:case $b:J=RD;break;case zb:J=BD;break;case"scroll":case"scrollend":J=wD;break;case"wheel":J=FD;break;case"copy":case"cut":case"paste":J=ID;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":J=vb;break;case"toggle":case"beforetoggle":J=VD}var Re=(s&4)!==0,ot=!Re&&(r==="scroll"||r==="scrollend"),q=Re?Z!==null?Z+"Capture":null:Z;Re=[];for(var $=Q,W;$!==null;){var se=$;if(W=se.stateNode,se=se.tag,se!==5&&se!==26&&se!==27||W===null||q===null||(se=cl($,q),se!=null&&Re.push(Vl($,se,W))),ot)break;$=$.return}0<Re.length&&(Z=new J(Z,Me,null,o,re),ae.push({event:Z,listeners:Re}))}}if((s&7)===0){e:{if(Z=r==="mouseover"||r==="pointerover",J=r==="mouseout"||r==="pointerout",Z&&o!==up&&(Me=o.relatedTarget||o.fromElement)&&(ze(Me)||Me[ye]))break e;if((J||Z)&&(Z=re.window===re?re:(Z=re.ownerDocument)?Z.defaultView||Z.parentWindow:window,J?(Me=o.relatedTarget||o.toElement,J=Q,Me=Me?ze(Me):null,Me!==null&&(ot=l(Me),Re=Me.tag,Me!==ot||Re!==5&&Re!==27&&Re!==6)&&(Me=null)):(J=null,Me=Q),J!==Me)){if(Re=gb,se="onMouseLeave",q="onMouseEnter",$="mouse",(r==="pointerout"||r==="pointerover")&&(Re=vb,se="onPointerLeave",q="onPointerEnter",$="pointer"),ot=J==null?Z:yt(J),W=Me==null?Z:yt(Me),Z=new Re(se,$+"leave",J,o,re),Z.target=ot,Z.relatedTarget=W,se=null,ze(re)===Q&&(Re=new Re(q,$+"enter",Me,o,re),Re.target=W,Re.relatedTarget=ot,se=Re),ot=se,J&&Me)t:{for(Re=J,q=Me,$=0,W=Re;W;W=uo(W))$++;for(W=0,se=q;se;se=uo(se))W++;for(;0<$-W;)Re=uo(Re),$--;for(;0<W-$;)q=uo(q),W--;for(;$--;){if(Re===q||q!==null&&Re===q.alternate)break t;Re=uo(Re),q=uo(q)}Re=null}else Re=null;J!==null&&o1(ae,Z,J,Re,!1),Me!==null&&ot!==null&&o1(ae,ot,Me,Re,!0)}}e:{if(Z=Q?yt(Q):window,J=Z.nodeName&&Z.nodeName.toLowerCase(),J==="select"||J==="input"&&Z.type==="file")var ge=Cb;else if(xb(Z))if(Rb)ge=tO;else{ge=JD;var Fe=ZD}else J=Z.nodeName,!J||J.toLowerCase()!=="input"||Z.type!=="checkbox"&&Z.type!=="radio"?Q&&cp(Q.elementType)&&(ge=Cb):ge=eO;if(ge&&(ge=ge(r,Q))){Tb(ae,ge,o,re);break e}Fe&&Fe(r,Z,Q),r==="focusout"&&Q&&Z.type==="number"&&Q.memoizedProps.value!=null&&lp(Z,"number",Z.value)}switch(Fe=Q?yt(Q):window,r){case"focusin":(xb(Fe)||Fe.contentEditable==="true")&&(za=Fe,Ep=Q,yl=null);break;case"focusout":yl=Ep=za=null;break;case"mousedown":xp=!0;break;case"contextmenu":case"mouseup":case"dragend":xp=!1,Lb(ae,o,re);break;case"selectionchange":if(rO)break;case"keydown":case"keyup":Lb(ae,o,re)}var Ee;if(_p)e:{switch(r){case"compositionstart":var Ie="onCompositionStart";break e;case"compositionend":Ie="onCompositionEnd";break e;case"compositionupdate":Ie="onCompositionUpdate";break e}Ie=void 0}else $a?wb(r,o)&&(Ie="onCompositionEnd"):r==="keydown"&&o.keyCode===229&&(Ie="onCompositionStart");Ie&&(_b&&o.locale!=="ko"&&($a||Ie!=="onCompositionStart"?Ie==="onCompositionEnd"&&$a&&(Ee=pb()):(Ti=re,pp="value"in Ti?Ti.value:Ti.textContent,$a=!0)),Fe=Rd(Q,Ie),0<Fe.length&&(Ie=new yb(Ie,r,null,o,re),ae.push({event:Ie,listeners:Fe}),Ee?Ie.data=Ee:(Ee=Eb(o),Ee!==null&&(Ie.data=Ee)))),(Ee=YD?WD(r,o):QD(r,o))&&(Ie=Rd(Q,"onBeforeInput"),0<Ie.length&&(Fe=new yb("onBeforeInput","beforeinput",null,o,re),ae.push({event:Fe,listeners:Ie}),Fe.data=Ee)),$O(ae,r,Q,o,re)}s1(ae,s)})}function Vl(r,s,o){return{instance:r,listener:s,currentTarget:o}}function Rd(r,s){for(var o=s+"Capture",c=[];r!==null;){var d=r,m=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||m===null||(d=cl(r,o),d!=null&&c.unshift(Vl(r,d,m)),d=cl(r,s),d!=null&&c.push(Vl(r,d,m))),r.tag===3)return c;r=r.return}return[]}function uo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r||null}function o1(r,s,o,c,d){for(var m=s._reactName,S=[];o!==null&&o!==c;){var E=o,L=E.alternate,Q=E.stateNode;if(E=E.tag,L!==null&&L===c)break;E!==5&&E!==26&&E!==27||Q===null||(L=Q,d?(Q=cl(o,m),Q!=null&&S.unshift(Vl(o,Q,L))):d||(Q=cl(o,m),Q!=null&&S.push(Vl(o,Q,L)))),o=o.return}S.length!==0&&r.push({event:s,listeners:S})}var FO=/\r\n?/g,qO=/\u0000|\uFFFD/g;function l1(r){return(typeof r=="string"?r:""+r).replace(FO,`
`).replace(qO,"")}function c1(r,s){return s=l1(s),l1(r)===s}function Ad(){}function at(r,s,o,c,d,m){switch(o){case"children":typeof c=="string"?s==="body"||s==="textarea"&&c===""||Pa(r,c):(typeof c=="number"||typeof c=="bigint")&&s!=="body"&&Pa(r,""+c);break;case"className":zr(r,"class",c);break;case"tabIndex":zr(r,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":zr(r,o,c);break;case"style":db(r,c,m);break;case"data":if(s!=="object"){zr(r,"data",c);break}case"src":case"href":if(c===""&&(s!=="a"||o!=="href")){r.removeAttribute(o);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){r.removeAttribute(o);break}c=Pu(""+c),r.setAttribute(o,c);break;case"action":case"formAction":if(typeof c=="function"){r.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(s!=="input"&&at(r,s,"name",d.name,d,null),at(r,s,"formEncType",d.formEncType,d,null),at(r,s,"formMethod",d.formMethod,d,null),at(r,s,"formTarget",d.formTarget,d,null)):(at(r,s,"encType",d.encType,d,null),at(r,s,"method",d.method,d,null),at(r,s,"target",d.target,d,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){r.removeAttribute(o);break}c=Pu(""+c),r.setAttribute(o,c);break;case"onClick":c!=null&&(r.onclick=Ad);break;case"onScroll":c!=null&&Ye("scroll",r);break;case"onScrollEnd":c!=null&&Ye("scrollend",r);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(o=c.__html,o!=null){if(d.children!=null)throw Error(i(60));r.innerHTML=o}}break;case"multiple":r.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":r.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){r.removeAttribute("xlink:href");break}o=Pu(""+c),r.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(o,""+c):r.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(o,""):r.removeAttribute(o);break;case"capture":case"download":c===!0?r.setAttribute(o,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(o,c):r.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?r.setAttribute(o,c):r.removeAttribute(o);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?r.removeAttribute(o):r.setAttribute(o,c);break;case"popover":Ye("beforetoggle",r),Ye("toggle",r),$r(r,"popover",c);break;case"xlinkActuate":Pe(r,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":Pe(r,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":Pe(r,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":Pe(r,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":Pe(r,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":Pe(r,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":Pe(r,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":Pe(r,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":Pe(r,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":$r(r,"is",c);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=bD.get(o)||o,$r(r,o,c))}}function Ym(r,s,o,c,d,m){switch(o){case"style":db(r,c,m);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(o=c.__html,o!=null){if(d.children!=null)throw Error(i(60));r.innerHTML=o}}break;case"children":typeof c=="string"?Pa(r,c):(typeof c=="number"||typeof c=="bigint")&&Pa(r,""+c);break;case"onScroll":c!=null&&Ye("scroll",r);break;case"onScrollEnd":c!=null&&Ye("scrollend",r);break;case"onClick":c!=null&&(r.onclick=Ad);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Sr.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(d=o.endsWith("Capture"),s=o.slice(2,d?o.length-7:void 0),m=r[fe]||null,m=m!=null?m[o]:null,typeof m=="function"&&r.removeEventListener(s,m,d),typeof c=="function")){typeof m!="function"&&m!==null&&(o in r?r[o]=null:r.hasAttribute(o)&&r.removeAttribute(o)),r.addEventListener(s,c,d);break e}o in r?r[o]=c:c===!0?r.setAttribute(o,""):$r(r,o,c)}}}function Xt(r,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ye("error",r),Ye("load",r);var c=!1,d=!1,m;for(m in o)if(o.hasOwnProperty(m)){var S=o[m];if(S!=null)switch(m){case"src":c=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:at(r,s,m,S,o,null)}}d&&at(r,s,"srcSet",o.srcSet,o,null),c&&at(r,s,"src",o.src,o,null);return;case"input":Ye("invalid",r);var E=m=S=d=null,L=null,Q=null;for(c in o)if(o.hasOwnProperty(c)){var re=o[c];if(re!=null)switch(c){case"name":d=re;break;case"type":S=re;break;case"checked":L=re;break;case"defaultChecked":Q=re;break;case"value":m=re;break;case"defaultValue":E=re;break;case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(i(137,s));break;default:at(r,s,c,re,o,null)}}ob(r,m,E,L,Q,S,d,!1),ku(r);return;case"select":Ye("invalid",r),c=S=m=null;for(d in o)if(o.hasOwnProperty(d)&&(E=o[d],E!=null))switch(d){case"value":m=E;break;case"defaultValue":S=E;break;case"multiple":c=E;default:at(r,s,d,E,o,null)}s=m,o=S,r.multiple=!!c,s!=null?La(r,!!c,s,!1):o!=null&&La(r,!!c,o,!0);return;case"textarea":Ye("invalid",r),m=d=c=null;for(S in o)if(o.hasOwnProperty(S)&&(E=o[S],E!=null))switch(S){case"value":c=E;break;case"defaultValue":d=E;break;case"children":m=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(i(91));break;default:at(r,s,S,E,o,null)}cb(r,c,d,m),ku(r);return;case"option":for(L in o)if(o.hasOwnProperty(L)&&(c=o[L],c!=null))switch(L){case"selected":r.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:at(r,s,L,c,o,null)}return;case"dialog":Ye("beforetoggle",r),Ye("toggle",r),Ye("cancel",r),Ye("close",r);break;case"iframe":case"object":Ye("load",r);break;case"video":case"audio":for(c=0;c<ql.length;c++)Ye(ql[c],r);break;case"image":Ye("error",r),Ye("load",r);break;case"details":Ye("toggle",r);break;case"embed":case"source":case"link":Ye("error",r),Ye("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in o)if(o.hasOwnProperty(Q)&&(c=o[Q],c!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:at(r,s,Q,c,o,null)}return;default:if(cp(s)){for(re in o)o.hasOwnProperty(re)&&(c=o[re],c!==void 0&&Ym(r,s,re,c,o,void 0));return}}for(E in o)o.hasOwnProperty(E)&&(c=o[E],c!=null&&at(r,s,E,c,o,null))}function VO(r,s,o,c){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,m=null,S=null,E=null,L=null,Q=null,re=null;for(J in o){var ae=o[J];if(o.hasOwnProperty(J)&&ae!=null)switch(J){case"checked":break;case"value":break;case"defaultValue":L=ae;default:c.hasOwnProperty(J)||at(r,s,J,null,c,ae)}}for(var Z in c){var J=c[Z];if(ae=o[Z],c.hasOwnProperty(Z)&&(J!=null||ae!=null))switch(Z){case"type":m=J;break;case"name":d=J;break;case"checked":Q=J;break;case"defaultChecked":re=J;break;case"value":S=J;break;case"defaultValue":E=J;break;case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(i(137,s));break;default:J!==ae&&at(r,s,Z,J,c,ae)}}op(r,S,E,L,Q,re,m,d);return;case"select":J=S=E=Z=null;for(m in o)if(L=o[m],o.hasOwnProperty(m)&&L!=null)switch(m){case"value":break;case"multiple":J=L;default:c.hasOwnProperty(m)||at(r,s,m,null,c,L)}for(d in c)if(m=c[d],L=o[d],c.hasOwnProperty(d)&&(m!=null||L!=null))switch(d){case"value":Z=m;break;case"defaultValue":E=m;break;case"multiple":S=m;default:m!==L&&at(r,s,d,m,c,L)}s=E,o=S,c=J,Z!=null?La(r,!!o,Z,!1):!!c!=!!o&&(s!=null?La(r,!!o,s,!0):La(r,!!o,o?[]:"",!1));return;case"textarea":J=Z=null;for(E in o)if(d=o[E],o.hasOwnProperty(E)&&d!=null&&!c.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:at(r,s,E,null,c,d)}for(S in c)if(d=c[S],m=o[S],c.hasOwnProperty(S)&&(d!=null||m!=null))switch(S){case"value":Z=d;break;case"defaultValue":J=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(i(91));break;default:d!==m&&at(r,s,S,d,c,m)}lb(r,Z,J);return;case"option":for(var Me in o)if(Z=o[Me],o.hasOwnProperty(Me)&&Z!=null&&!c.hasOwnProperty(Me))switch(Me){case"selected":r.selected=!1;break;default:at(r,s,Me,null,c,Z)}for(L in c)if(Z=c[L],J=o[L],c.hasOwnProperty(L)&&Z!==J&&(Z!=null||J!=null))switch(L){case"selected":r.selected=Z&&typeof Z!="function"&&typeof Z!="symbol";break;default:at(r,s,L,Z,c,J)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Re in o)Z=o[Re],o.hasOwnProperty(Re)&&Z!=null&&!c.hasOwnProperty(Re)&&at(r,s,Re,null,c,Z);for(Q in c)if(Z=c[Q],J=o[Q],c.hasOwnProperty(Q)&&Z!==J&&(Z!=null||J!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(i(137,s));break;default:at(r,s,Q,Z,c,J)}return;default:if(cp(s)){for(var ot in o)Z=o[ot],o.hasOwnProperty(ot)&&Z!==void 0&&!c.hasOwnProperty(ot)&&Ym(r,s,ot,void 0,c,Z);for(re in c)Z=c[re],J=o[re],!c.hasOwnProperty(re)||Z===J||Z===void 0&&J===void 0||Ym(r,s,re,Z,c,J);return}}for(var q in o)Z=o[q],o.hasOwnProperty(q)&&Z!=null&&!c.hasOwnProperty(q)&&at(r,s,q,null,c,Z);for(ae in c)Z=c[ae],J=o[ae],!c.hasOwnProperty(ae)||Z===J||Z==null&&J==null||at(r,s,ae,Z,c,J)}var Wm=null,Qm=null;function Id(r){return r.nodeType===9?r:r.ownerDocument}function u1(r){switch(r){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function d1(r,s){if(r===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return r===1&&s==="foreignObject"?0:r}function Km(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Xm=null;function GO(){var r=window.event;return r&&r.type==="popstate"?r===Xm?!1:(Xm=r,!0):(Xm=null,!1)}var f1=typeof setTimeout=="function"?setTimeout:void 0,YO=typeof clearTimeout=="function"?clearTimeout:void 0,h1=typeof Promise=="function"?Promise:void 0,WO=typeof queueMicrotask=="function"?queueMicrotask:typeof h1<"u"?function(r){return h1.resolve(null).then(r).catch(QO)}:f1;function QO(r){setTimeout(function(){throw r})}function Bi(r){return r==="head"}function p1(r,s){var o=s,c=0,d=0;do{var m=o.nextSibling;if(r.removeChild(o),m&&m.nodeType===8)if(o=m.data,o==="/$"){if(0<c&&8>c){o=c;var S=r.ownerDocument;if(o&1&&Gl(S.documentElement),o&2&&Gl(S.body),o&4)for(o=S.head,Gl(o),S=o.firstChild;S;){var E=S.nextSibling,L=S.nodeName;S[_e]||L==="SCRIPT"||L==="STYLE"||L==="LINK"&&S.rel.toLowerCase()==="stylesheet"||o.removeChild(S),S=E}}if(d===0){r.removeChild(m),ec(s);return}d--}else o==="$"||o==="$?"||o==="$!"?d++:c=o.charCodeAt(0)-48;else c=0;o=m}while(o);ec(s)}function Zm(r){var s=r.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Zm(o),Se(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}r.removeChild(o)}}function KO(r,s,o,c){for(;r.nodeType===1;){var d=o;if(r.nodeName.toLowerCase()!==s.toLowerCase()){if(!c&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(c){if(!r[_e])switch(s){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(m=r.getAttribute("rel"),m==="stylesheet"&&r.hasAttribute("data-precedence"))break;if(m!==d.rel||r.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||r.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||r.getAttribute("title")!==(d.title==null?null:d.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(m=r.getAttribute("src"),(m!==(d.src==null?null:d.src)||r.getAttribute("type")!==(d.type==null?null:d.type)||r.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&m&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}}else if(s==="input"&&r.type==="hidden"){var m=d.name==null?null:""+d.name;if(d.type==="hidden"&&r.getAttribute("name")===m)return r}else return r;if(r=sr(r.nextSibling),r===null)break}return null}function XO(r,s,o){if(s==="")return null;for(;r.nodeType!==3;)if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!o||(r=sr(r.nextSibling),r===null))return null;return r}function Jm(r){return r.data==="$!"||r.data==="$?"&&r.ownerDocument.readyState==="complete"}function ZO(r,s){var o=r.ownerDocument;if(r.data!=="$?"||o.readyState==="complete")s();else{var c=function(){s(),o.removeEventListener("DOMContentLoaded",c)};o.addEventListener("DOMContentLoaded",c),r._reactRetry=c}}function sr(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return r}var eg=null;function m1(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var o=r.data;if(o==="$"||o==="$!"||o==="$?"){if(s===0)return r;s--}else o==="/$"&&s++}r=r.previousSibling}return null}function g1(r,s,o){switch(s=Id(o),r){case"html":if(r=s.documentElement,!r)throw Error(i(452));return r;case"head":if(r=s.head,!r)throw Error(i(453));return r;case"body":if(r=s.body,!r)throw Error(i(454));return r;default:throw Error(i(451))}}function Gl(r){for(var s=r.attributes;s.length;)r.removeAttributeNode(s[0]);Se(r)}var Vn=new Map,y1=new Set;function Dd(r){return typeof r.getRootNode=="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}var ti=ee.d;ee.d={f:JO,r:eN,D:tN,C:nN,L:rN,m:iN,X:aN,S:sN,M:oN};function JO(){var r=ti.f(),s=Sd();return r||s}function eN(r){var s=Ze(r);s!==null&&s.tag===5&&s.type==="form"?j0(s):ti.r(r)}var fo=typeof document>"u"?null:document;function v1(r,s,o){var c=fo;if(c&&typeof s=="string"&&s){var d=Un(s);d='link[rel="'+r+'"][href="'+d+'"]',typeof o=="string"&&(d+='[crossorigin="'+o+'"]'),y1.has(d)||(y1.add(d),r={rel:r,crossOrigin:o,href:s},c.querySelector(d)===null&&(s=c.createElement("link"),Xt(s,"link",r),Le(s),c.head.appendChild(s)))}}function tN(r){ti.D(r),v1("dns-prefetch",r,null)}function nN(r,s){ti.C(r,s),v1("preconnect",r,s)}function rN(r,s,o){ti.L(r,s,o);var c=fo;if(c&&r&&s){var d='link[rel="preload"][as="'+Un(s)+'"]';s==="image"&&o&&o.imageSrcSet?(d+='[imagesrcset="'+Un(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(d+='[imagesizes="'+Un(o.imageSizes)+'"]')):d+='[href="'+Un(r)+'"]';var m=d;switch(s){case"style":m=ho(r);break;case"script":m=po(r)}Vn.has(m)||(r=g({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:r,as:s},o),Vn.set(m,r),c.querySelector(d)!==null||s==="style"&&c.querySelector(Yl(m))||s==="script"&&c.querySelector(Wl(m))||(s=c.createElement("link"),Xt(s,"link",r),Le(s),c.head.appendChild(s)))}}function iN(r,s){ti.m(r,s);var o=fo;if(o&&r){var c=s&&typeof s.as=="string"?s.as:"script",d='link[rel="modulepreload"][as="'+Un(c)+'"][href="'+Un(r)+'"]',m=d;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=po(r)}if(!Vn.has(m)&&(r=g({rel:"modulepreload",href:r},s),Vn.set(m,r),o.querySelector(d)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Wl(m)))return}c=o.createElement("link"),Xt(c,"link",r),Le(c),o.head.appendChild(c)}}}function sN(r,s,o){ti.S(r,s,o);var c=fo;if(c&&r){var d=xt(c).hoistableStyles,m=ho(r);s=s||"default";var S=d.get(m);if(!S){var E={loading:0,preload:null};if(S=c.querySelector(Yl(m)))E.loading=5;else{r=g({rel:"stylesheet",href:r,"data-precedence":s},o),(o=Vn.get(m))&&tg(r,o);var L=S=c.createElement("link");Le(L),Xt(L,"link",r),L._p=new Promise(function(Q,re){L.onload=Q,L.onerror=re}),L.addEventListener("load",function(){E.loading|=1}),L.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Od(S,s,c)}S={type:"stylesheet",instance:S,count:1,state:E},d.set(m,S)}}}function aN(r,s){ti.X(r,s);var o=fo;if(o&&r){var c=xt(o).hoistableScripts,d=po(r),m=c.get(d);m||(m=o.querySelector(Wl(d)),m||(r=g({src:r,async:!0},s),(s=Vn.get(d))&&ng(r,s),m=o.createElement("script"),Le(m),Xt(m,"link",r),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(d,m))}}function oN(r,s){ti.M(r,s);var o=fo;if(o&&r){var c=xt(o).hoistableScripts,d=po(r),m=c.get(d);m||(m=o.querySelector(Wl(d)),m||(r=g({src:r,async:!0,type:"module"},s),(s=Vn.get(d))&&ng(r,s),m=o.createElement("script"),Le(m),Xt(m,"link",r),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(d,m))}}function _1(r,s,o,c){var d=(d=pe.current)?Dd(d):null;if(!d)throw Error(i(446));switch(r){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=ho(o.href),o=xt(d).hoistableStyles,c=o.get(s),c||(c={type:"style",instance:null,count:0,state:null},o.set(s,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){r=ho(o.href);var m=xt(d).hoistableStyles,S=m.get(r);if(S||(d=d.ownerDocument||d,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(r,S),(m=d.querySelector(Yl(r)))&&!m._p&&(S.instance=m,S.state.loading=5),Vn.has(r)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Vn.set(r,o),m||lN(d,r,o,S.state))),s&&c===null)throw Error(i(528,""));return S}if(s&&c!==null)throw Error(i(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=po(o),o=xt(d).hoistableScripts,c=o.get(s),c||(c={type:"script",instance:null,count:0,state:null},o.set(s,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,r))}}function ho(r){return'href="'+Un(r)+'"'}function Yl(r){return'link[rel="stylesheet"]['+r+"]"}function b1(r){return g({},r,{"data-precedence":r.precedence,precedence:null})}function lN(r,s,o,c){r.querySelector('link[rel="preload"][as="style"]['+s+"]")?c.loading=1:(s=r.createElement("link"),c.preload=s,s.addEventListener("load",function(){return c.loading|=1}),s.addEventListener("error",function(){return c.loading|=2}),Xt(s,"link",o),Le(s),r.head.appendChild(s))}function po(r){return'[src="'+Un(r)+'"]'}function Wl(r){return"script[async]"+r}function S1(r,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var c=r.querySelector('style[data-href~="'+Un(o.href)+'"]');if(c)return s.instance=c,Le(c),c;var d=g({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return c=(r.ownerDocument||r).createElement("style"),Le(c),Xt(c,"style",d),Od(c,o.precedence,r),s.instance=c;case"stylesheet":d=ho(o.href);var m=r.querySelector(Yl(d));if(m)return s.state.loading|=4,s.instance=m,Le(m),m;c=b1(o),(d=Vn.get(d))&&tg(c,d),m=(r.ownerDocument||r).createElement("link"),Le(m);var S=m;return S._p=new Promise(function(E,L){S.onload=E,S.onerror=L}),Xt(m,"link",c),s.state.loading|=4,Od(m,o.precedence,r),s.instance=m;case"script":return m=po(o.src),(d=r.querySelector(Wl(m)))?(s.instance=d,Le(d),d):(c=o,(d=Vn.get(m))&&(c=g({},o),ng(c,d)),r=r.ownerDocument||r,d=r.createElement("script"),Le(d),Xt(d,"link",c),r.head.appendChild(d),s.instance=d);case"void":return null;default:throw Error(i(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(c=s.instance,s.state.loading|=4,Od(c,o.precedence,r));return s.instance}function Od(r,s,o){for(var c=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=c.length?c[c.length-1]:null,m=d,S=0;S<c.length;S++){var E=c[S];if(E.dataset.precedence===s)m=E;else if(m!==d)break}m?m.parentNode.insertBefore(r,m.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(r,s.firstChild))}function tg(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.title==null&&(r.title=s.title)}function ng(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.integrity==null&&(r.integrity=s.integrity)}var Nd=null;function w1(r,s,o){if(Nd===null){var c=new Map,d=Nd=new Map;d.set(o,c)}else d=Nd,c=d.get(o),c||(c=new Map,d.set(o,c));if(c.has(r))return c;for(c.set(r,null),o=o.getElementsByTagName(r),d=0;d<o.length;d++){var m=o[d];if(!(m[_e]||m[ce]||r==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var S=m.getAttribute(s)||"";S=r+S;var E=c.get(S);E?E.push(m):c.set(S,[m])}}return c}function E1(r,s,o){r=r.ownerDocument||r,r.head.insertBefore(o,s==="title"?r.querySelector("head > title"):null)}function cN(r,s,o){if(o===1||s.itemProp!=null)return!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return r=s.disabled,typeof s.precedence=="string"&&r==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function x1(r){return!(r.type==="stylesheet"&&(r.state.loading&3)===0)}var Ql=null;function uN(){}function dN(r,s,o){if(Ql===null)throw Error(i(475));var c=Ql;if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var d=ho(o.href),m=r.querySelector(Yl(d));if(m){r=m._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(c.count++,c=Md.bind(c),r.then(c,c)),s.state.loading|=4,s.instance=m,Le(m);return}m=r.ownerDocument||r,o=b1(o),(d=Vn.get(d))&&tg(o,d),m=m.createElement("link"),Le(m);var S=m;S._p=new Promise(function(E,L){S.onload=E,S.onerror=L}),Xt(m,"link",o),s.instance=m}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(s,r),(r=s.state.preload)&&(s.state.loading&3)===0&&(c.count++,s=Md.bind(c),r.addEventListener("load",s),r.addEventListener("error",s))}}function fN(){if(Ql===null)throw Error(i(475));var r=Ql;return r.stylesheets&&r.count===0&&rg(r,r.stylesheets),0<r.count?function(s){var o=setTimeout(function(){if(r.stylesheets&&rg(r,r.stylesheets),r.unsuspend){var c=r.unsuspend;r.unsuspend=null,c()}},6e4);return r.unsuspend=s,function(){r.unsuspend=null,clearTimeout(o)}}:null}function Md(){if(this.count--,this.count===0){if(this.stylesheets)rg(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}var kd=null;function rg(r,s){r.stylesheets=null,r.unsuspend!==null&&(r.count++,kd=new Map,s.forEach(hN,r),kd=null,Md.call(r))}function hN(r,s){if(!(s.state.loading&4)){var o=kd.get(r);if(o)var c=o.get(null);else{o=new Map,kd.set(r,o);for(var d=r.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<d.length;m++){var S=d[m];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(o.set(S.dataset.precedence,S),c=S)}c&&o.set(null,c)}d=s.instance,S=d.getAttribute("data-precedence"),m=o.get(S)||c,m===c&&o.set(null,d),o.set(S,d),this.count++,c=Md.bind(this),d.addEventListener("load",c),d.addEventListener("error",c),m?m.parentNode.insertBefore(d,m.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(d,r.firstChild)),s.state.loading|=4}}var Kl={$$typeof:x,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function pN(r,s,o,c,d,m,S,E){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ma(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ma(0),this.hiddenUpdates=Ma(null),this.identifierPrefix=c,this.onUncaughtError=d,this.onCaughtError=m,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function T1(r,s,o,c,d,m,S,E,L,Q,re,ae){return r=new pN(r,s,o,S,E,L,Q,ae),s=1,m===!0&&(s|=24),m=Tn(3,null,null,s),r.current=m,m.stateNode=r,s=Up(),s.refCount++,r.pooledCache=s,s.refCount++,m.memoizedState={element:c,isDehydrated:o,cache:s},Hp(m),r}function C1(r){return r?(r=qa,r):qa}function R1(r,s,o,c,d,m){d=C1(d),c.context===null?c.context=d:c.pendingContext=d,c=Ai(s),c.payload={element:o},m=m===void 0?null:m,m!==null&&(c.callback=m),o=Ii(r,c,s),o!==null&&(Dn(o,r,s),Cl(o,r,s))}function A1(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var o=r.retryLane;r.retryLane=o!==0&&o<s?o:s}}function ig(r,s){A1(r,s),(r=r.alternate)&&A1(r,s)}function I1(r){if(r.tag===13){var s=Fa(r,67108864);s!==null&&Dn(s,r,67108864),ig(r,67108864)}}var Ld=!0;function mN(r,s,o,c){var d=U.T;U.T=null;var m=ee.p;try{ee.p=2,sg(r,s,o,c)}finally{ee.p=m,U.T=d}}function gN(r,s,o,c){var d=U.T;U.T=null;var m=ee.p;try{ee.p=8,sg(r,s,o,c)}finally{ee.p=m,U.T=d}}function sg(r,s,o,c){if(Ld){var d=ag(c);if(d===null)Gm(r,s,c,Pd,o),O1(r,c);else if(vN(d,r,s,o,c))c.stopPropagation();else if(O1(r,c),s&4&&-1<yN.indexOf(r)){for(;d!==null;){var m=Ze(d);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var S=jr(m.pendingLanes);if(S!==0){var E=m;for(E.pendingLanes|=2,E.entangledLanes|=2;S;){var L=1<<31-Wt(S);E.entanglements[1]|=L,S&=~L}Cr(m),(tt&6)===0&&(_d=Yt()+500,Fl(0))}}break;case 13:E=Fa(m,2),E!==null&&Dn(E,m,2),Sd(),ig(m,2)}if(m=ag(c),m===null&&Gm(r,s,c,Pd,o),m===d)break;d=m}d!==null&&c.stopPropagation()}else Gm(r,s,c,null,o)}}function ag(r){return r=dp(r),og(r)}var Pd=null;function og(r){if(Pd=null,r=ze(r),r!==null){var s=l(r);if(s===null)r=null;else{var o=s.tag;if(o===13){if(r=u(s),r!==null)return r;r=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null)}}return Pd=r,null}function D1(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(sl()){case Ss:return 2;case Da:return 8;case Oa:case Pr:return 32;case wi:return 268435456;default:return 32}default:return 32}}var lg=!1,Hi=null,Fi=null,qi=null,Xl=new Map,Zl=new Map,Vi=[],yN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function O1(r,s){switch(r){case"focusin":case"focusout":Hi=null;break;case"dragenter":case"dragleave":Fi=null;break;case"mouseover":case"mouseout":qi=null;break;case"pointerover":case"pointerout":Xl.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zl.delete(s.pointerId)}}function Jl(r,s,o,c,d,m){return r===null||r.nativeEvent!==m?(r={blockedOn:s,domEventName:o,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},s!==null&&(s=Ze(s),s!==null&&I1(s)),r):(r.eventSystemFlags|=c,s=r.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),r)}function vN(r,s,o,c,d){switch(s){case"focusin":return Hi=Jl(Hi,r,s,o,c,d),!0;case"dragenter":return Fi=Jl(Fi,r,s,o,c,d),!0;case"mouseover":return qi=Jl(qi,r,s,o,c,d),!0;case"pointerover":var m=d.pointerId;return Xl.set(m,Jl(Xl.get(m)||null,r,s,o,c,d)),!0;case"gotpointercapture":return m=d.pointerId,Zl.set(m,Jl(Zl.get(m)||null,r,s,o,c,d)),!0}return!1}function N1(r){var s=ze(r.target);if(s!==null){var o=l(s);if(o!==null){if(s=o.tag,s===13){if(s=u(o),s!==null){r.blockedOn=s,Y(r.priority,function(){if(o.tag===13){var c=In();c=ol(c);var d=Fa(o,c);d!==null&&Dn(d,o,c),ig(o,c)}});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){r.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}r.blockedOn=null}function jd(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var o=ag(r.nativeEvent);if(o===null){o=r.nativeEvent;var c=new o.constructor(o.type,o);up=c,o.target.dispatchEvent(c),up=null}else return s=Ze(o),s!==null&&I1(s),r.blockedOn=o,!1;s.shift()}return!0}function M1(r,s,o){jd(r)&&o.delete(s)}function _N(){lg=!1,Hi!==null&&jd(Hi)&&(Hi=null),Fi!==null&&jd(Fi)&&(Fi=null),qi!==null&&jd(qi)&&(qi=null),Xl.forEach(M1),Zl.forEach(M1)}function Ud(r,s){r.blockedOn===s&&(r.blockedOn=null,lg||(lg=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,_N)))}var $d=null;function k1(r){$d!==r&&($d=r,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){$d===r&&($d=null);for(var s=0;s<r.length;s+=3){var o=r[s],c=r[s+1],d=r[s+2];if(typeof c!="function"){if(og(c||o)===null)continue;break}var m=Ze(o);m!==null&&(r.splice(s,3),s-=3,om(m,{pending:!0,data:d,method:o.method,action:c},c,d))}}))}function ec(r){function s(L){return Ud(L,r)}Hi!==null&&Ud(Hi,r),Fi!==null&&Ud(Fi,r),qi!==null&&Ud(qi,r),Xl.forEach(s),Zl.forEach(s);for(var o=0;o<Vi.length;o++){var c=Vi[o];c.blockedOn===r&&(c.blockedOn=null)}for(;0<Vi.length&&(o=Vi[0],o.blockedOn===null);)N1(o),o.blockedOn===null&&Vi.shift();if(o=(r.ownerDocument||r).$$reactFormReplay,o!=null)for(c=0;c<o.length;c+=3){var d=o[c],m=o[c+1],S=d[fe]||null;if(typeof m=="function")S||k1(o);else if(S){var E=null;if(m&&m.hasAttribute("formAction")){if(d=m,S=m[fe]||null)E=S.formAction;else if(og(d)!==null)continue}else E=S.action;typeof E=="function"?o[c+1]=E:(o.splice(c,3),c-=3),k1(o)}}}function cg(r){this._internalRoot=r}zd.prototype.render=cg.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(i(409));var o=s.current,c=In();R1(o,c,r,s,null,null)},zd.prototype.unmount=cg.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;R1(r.current,2,null,r,null,null),Sd(),s[ye]=null}};function zd(r){this._internalRoot=r}zd.prototype.unstable_scheduleHydration=function(r){if(r){var s=j();r={blockedOn:null,target:r,priority:s};for(var o=0;o<Vi.length&&s!==0&&s<Vi[o].priority;o++);Vi.splice(o,0,r),o===0&&N1(r)}};var L1=t.version;if(L1!=="19.1.1")throw Error(i(527,L1,"19.1.1"));ee.findDOMNode=function(r){var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(i(188)):(r=Object.keys(r).join(","),Error(i(268,r)));return r=h(s),r=r!==null?p(r):null,r=r===null?null:r.stateNode,r};var bN={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bd.isDisabled&&Bd.supportsFiber)try{hn=Bd.inject(bN),bt=Bd}catch{}}return nc.createRoot=function(r,s){if(!a(r))throw Error(i(299));var o=!1,c="",d=X0,m=Z0,S=J0,E=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(S=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(E=s.unstable_transitionCallbacks)),s=T1(r,1,!1,null,null,o,c,d,m,S,E,null),r[ye]=s.current,Vm(r),new cg(s)},nc.hydrateRoot=function(r,s,o){if(!a(r))throw Error(i(299));var c=!1,d="",m=X0,S=Z0,E=J0,L=null,Q=null;return o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(S=o.onCaughtError),o.onRecoverableError!==void 0&&(E=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(L=o.unstable_transitionCallbacks),o.formState!==void 0&&(Q=o.formState)),s=T1(r,1,!0,s,o??null,c,d,m,S,E,L,Q),s.context=C1(null),o=s.current,c=In(),c=ol(c),d=Ai(c),d.callback=null,Ii(o,d,c),o=c,s.current.lanes=o,Ts(s,o),Cr(s),r[ye]=s.current,Vm(r),new zd(s)},nc.version="19.1.1",nc}var V1;function DN(){if(V1)return fg.exports;V1=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),fg.exports=IN(),fg.exports}var ON=DN(),gg={exports:{}},yg={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G1;function NN(){if(G1)return yg;G1=1;var e=bh();function t(h,p){return h===p&&(h!==0||1/h===1/p)||h!==h&&p!==p}var n=typeof Object.is=="function"?Object.is:t,i=e.useSyncExternalStore,a=e.useRef,l=e.useEffect,u=e.useMemo,f=e.useDebugValue;return yg.useSyncExternalStoreWithSelector=function(h,p,g,y,_){var b=a(null);if(b.current===null){var w={hasValue:!1,value:null};b.current=w}else w=b.current;b=u(function(){function R(M){if(!D){if(D=!0,k=M,M=y(M),_!==void 0&&w.hasValue){var T=w.value;if(_(T,M))return x=T}return x=M}if(T=x,n(k,M))return T;var P=y(M);return _!==void 0&&_(T,P)?(k=M,T):(k=M,x=P)}var D=!1,k,x,A=g===void 0?null:g;return[function(){return R(p())},A===null?void 0:function(){return R(A())}]},[p,g,y,_]);var O=i(h,b[0],b[1]);return l(function(){w.hasValue=!0,w.value=O},[O]),f(O),O},yg}var Y1;function MN(){return Y1||(Y1=1,gg.exports=NN()),gg.exports}var kN=MN();function OT(e){e()}function LN(){let e=null,t=null;return{clear(){e=null,t=null},notify(){OT(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let i=e;for(;i;)n.push(i),i=i.next;return n},subscribe(n){let i=!0;const a=t={callback:n,next:null,prev:t};return a.prev?a.prev.next=a:e=a,function(){!i||e===null||(i=!1,a.next?a.next.prev=a.prev:t=a.prev,a.prev?a.prev.next=a.next:e=a.next)}}}}var W1={notify(){},get:()=>[]};function PN(e,t){let n,i=W1,a=0,l=!1;function u(O){g();const R=i.subscribe(O);let D=!1;return()=>{D||(D=!0,R(),y())}}function f(){i.notify()}function h(){w.onStateChange&&w.onStateChange()}function p(){return l}function g(){a++,n||(n=e.subscribe(h),i=LN())}function y(){a--,n&&a===0&&(n(),n=void 0,i.clear(),i=W1)}function _(){l||(l=!0,g())}function b(){l&&(l=!1,y())}const w={addNestedSub:u,notifyNestedSubs:f,handleChangeWrapper:h,isSubscribed:p,trySubscribe:_,tryUnsubscribe:b,getListeners:()=>i};return w}var jN=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",UN=jN(),$N=()=>typeof navigator<"u"&&navigator.product==="ReactNative",zN=$N(),BN=()=>UN||zN?C.useLayoutEffect:C.useEffect,HN=BN();function Q1(e,t){return e===t?e!==0||t!==0||1/e===1/t:e!==e&&t!==t}function Ec(e,t){if(Q1(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;const n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(let a=0;a<n.length;a++)if(!Object.prototype.hasOwnProperty.call(t,n[a])||!Q1(e[n[a]],t[n[a]]))return!1;return!0}var FN=Symbol.for("react-redux-context"),qN=typeof globalThis<"u"?globalThis:{};function VN(){if(!C.createContext)return{};const e=qN[FN]??=new Map;let t=e.get(C.createContext);return t||(t=C.createContext(null),e.set(C.createContext,t)),t}var os=VN();function GN(e){const{children:t,context:n,serverState:i,store:a}=e,l=C.useMemo(()=>{const h=PN(a);return{store:a,subscription:h,getServerState:i?()=>i:void 0}},[a,i]),u=C.useMemo(()=>a.getState(),[a]);HN(()=>{const{subscription:h}=l;return h.onStateChange=h.notifyNestedSubs,h.trySubscribe(),u!==a.getState()&&h.notifyNestedSubs(),()=>{h.tryUnsubscribe(),h.onStateChange=void 0}},[l,u]);const f=n||os;return C.createElement(f.Provider,{value:l},t)}var YN=GN;function mv(e=os){return function(){return C.useContext(e)}}var NT=mv();function MT(e=os){const t=e===os?NT:mv(e),n=()=>{const{store:i}=t();return i};return Object.assign(n,{withTypes:()=>n}),n}var kT=MT();function WN(e=os){const t=e===os?kT:MT(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var LT=WN(),QN=(e,t)=>e===t;function KN(e=os){const t=e===os?NT:mv(e),n=(i,a={})=>{const{equalityFn:l=QN}=typeof a=="function"?{equalityFn:a}:a,u=t(),{store:f,subscription:h,getServerState:p}=u;C.useRef(!0);const g=C.useCallback({[i.name](_){return i(_)}}[i.name],[i]),y=kN.useSyncExternalStoreWithSelector(h.addNestedSub,f.getState,p||f.getState,g,l);return C.useDebugValue(y),y};return Object.assign(n,{withTypes:()=>n}),n}var PT=KN(),XN=OT;/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var jT=e=>{throw TypeError(e)},ZN=(e,t,n)=>t.has(e)||jT("Cannot "+n),vg=(e,t,n)=>(ZN(e,t,"read from private field"),n?n.call(e):t.get(e)),JN=(e,t,n)=>t.has(e)?jT("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),K1="popstate";function eM(e={}){function t(a,l){let{pathname:u="/",search:f="",hash:h=""}=yi(a.location.hash.substring(1));return!u.startsWith("/")&&!u.startsWith(".")&&(u="/"+u),jc("",{pathname:u,search:f,hash:h},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(a,l){let u=a.document.querySelector("base"),f="";if(u&&u.getAttribute("href")){let h=a.location.href,p=h.indexOf("#");f=p===-1?h:h.slice(0,p)}return f+"#"+(typeof l=="string"?l:ls(l))}function i(a,l){It(a.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(l)})`)}return nM(t,n,i,e)}function Ue(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function It(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function tM(){return Math.random().toString(36).substring(2,10)}function X1(e,t){return{usr:e.state,key:e.key,idx:t}}function jc(e,t,n=null,i){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?yi(t):t,state:n,key:t&&t.key||i||tM()}}function ls({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function yi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let i=e.indexOf("?");i>=0&&(t.search=e.substring(i),e=e.substring(0,i)),e&&(t.pathname=e)}return t}function nM(e,t,n,i={}){let{window:a=document.defaultView,v5Compat:l=!1}=i,u=a.history,f="POP",h=null,p=g();p==null&&(p=0,u.replaceState({...u.state,idx:p},""));function g(){return(u.state||{idx:null}).idx}function y(){f="POP";let R=g(),D=R==null?null:R-p;p=R,h&&h({action:f,location:O.location,delta:D})}function _(R,D){f="PUSH";let k=jc(O.location,R,D);n&&n(k,R),p=g()+1;let x=X1(k,p),A=O.createHref(k);try{u.pushState(x,"",A)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;a.location.assign(A)}l&&h&&h({action:f,location:O.location,delta:1})}function b(R,D){f="REPLACE";let k=jc(O.location,R,D);n&&n(k,R),p=g();let x=X1(k,p),A=O.createHref(k);u.replaceState(x,"",A),l&&h&&h({action:f,location:O.location,delta:0})}function w(R){return UT(R)}let O={get action(){return f},get location(){return e(a,u)},listen(R){if(h)throw new Error("A history only accepts one active listener");return a.addEventListener(K1,y),h=R,()=>{a.removeEventListener(K1,y),h=null}},createHref(R){return t(a,R)},createURL:w,encodeLocation(R){let D=w(R);return{pathname:D.pathname,search:D.search,hash:D.hash}},push:_,replace:b,go(R){return u.go(R)}};return O}function UT(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Ue(n,"No window.location.(origin|href) available to create URL");let i=typeof e=="string"?e:ls(e);return i=i.replace(/ $/,"%20"),!t&&i.startsWith("//")&&(i=n+i),new URL(i,n)}var vc,Z1=class{constructor(e){if(JN(this,vc,new Map),e)for(let[t,n]of e)this.set(t,n)}get(e){if(vg(this,vc).has(e))return vg(this,vc).get(e);if(e.defaultValue!==void 0)return e.defaultValue;throw new Error("No value found for context")}set(e,t){vg(this,vc).set(e,t)}};vc=new WeakMap;var rM=new Set(["lazy","caseSensitive","path","id","index","children"]);function iM(e){return rM.has(e)}var sM=new Set(["lazy","caseSensitive","path","id","index","middleware","children"]);function aM(e){return sM.has(e)}function oM(e){return e.index===!0}function Uc(e,t,n=[],i={},a=!1){return e.map((l,u)=>{let f=[...n,String(u)],h=typeof l.id=="string"?l.id:f.join("-");if(Ue(l.index!==!0||!l.children,"Cannot specify children on an index route"),Ue(a||!i[h],`Found a route id collision on id "${h}".  Route id's must be globally unique within Data Router usages`),oM(l)){let p={...l,...t(l),id:h};return i[h]=p,p}else{let p={...l,...t(l),id:h,children:void 0};return i[h]=p,l.children&&(p.children=Uc(l.children,t,f,i,a)),p}})}function Xi(e,t,n="/"){return ff(e,t,n,!1)}function ff(e,t,n,i){let a=typeof t=="string"?yi(t):t,l=Kn(a.pathname||"/",n);if(l==null)return null;let u=$T(e);cM(u);let f=null;for(let h=0;f==null&&h<u.length;++h){let p=bM(l);f=vM(u[h],p,i)}return f}function lM(e,t){let{route:n,pathname:i,params:a}=e;return{id:n.id,pathname:i,params:a,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function $T(e,t=[],n=[],i="",a=!1){let l=(u,f,h=a,p)=>{let g={relativePath:p===void 0?u.path||"":p,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(i)&&h)return;Ue(g.relativePath.startsWith(i),`Absolute route path "${g.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(i.length)}let y=Ir([i,g.relativePath]),_=n.concat(g);u.children&&u.children.length>0&&(Ue(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),$T(u.children,t,_,y,h)),!(u.path==null&&!u.index)&&t.push({path:y,score:gM(y,u.index),routesMeta:_})};return e.forEach((u,f)=>{if(u.path===""||!u.path?.includes("?"))l(u,f);else for(let h of zT(u.path))l(u,f,!0,h)}),t}function zT(e){let t=e.split("/");if(t.length===0)return[];let[n,...i]=t,a=n.endsWith("?"),l=n.replace(/\?$/,"");if(i.length===0)return a?[l,""]:[l];let u=zT(i.join("/")),f=[];return f.push(...u.map(h=>h===""?l:[l,h].join("/"))),a&&f.push(...u),f.map(h=>e.startsWith("/")&&h===""?"/":h)}function cM(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:yM(t.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var uM=/^:[\w-]+$/,dM=3,fM=2,hM=1,pM=10,mM=-2,J1=e=>e==="*";function gM(e,t){let n=e.split("/"),i=n.length;return n.some(J1)&&(i+=mM),t&&(i+=fM),n.filter(a=>!J1(a)).reduce((a,l)=>a+(uM.test(l)?dM:l===""?hM:pM),i)}function yM(e,t){return e.length===t.length&&e.slice(0,-1).every((i,a)=>i===t[a])?e[e.length-1]-t[t.length-1]:0}function vM(e,t,n=!1){let{routesMeta:i}=e,a={},l="/",u=[];for(let f=0;f<i.length;++f){let h=i[f],p=f===i.length-1,g=l==="/"?t:t.slice(l.length)||"/",y=Df({path:h.relativePath,caseSensitive:h.caseSensitive,end:p},g),_=h.route;if(!y&&p&&n&&!i[i.length-1].route.index&&(y=Df({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},g)),!y)return null;Object.assign(a,y.params),u.push({params:a,pathname:Ir([l,y.pathname]),pathnameBase:xM(Ir([l,y.pathnameBase])),route:_}),y.pathnameBase!=="/"&&(l=Ir([l,y.pathnameBase]))}return u}function Df(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,i]=_M(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let l=a[0],u=l.replace(/(.)\/+$/,"$1"),f=a.slice(1);return{params:i.reduce((p,{paramName:g,isOptional:y},_)=>{if(g==="*"){let w=f[_]||"";u=l.slice(0,l.length-w.length).replace(/(.)\/+$/,"$1")}const b=f[_];return y&&!b?p[g]=void 0:p[g]=(b||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:u,pattern:e}}function _M(e,t=!1,n=!0){It(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let i=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,f,h)=>(i.push({paramName:f,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(i.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),i]}function bM(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return It(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Kn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,i=e.charAt(n);return i&&i!=="/"?null:e.slice(n)||"/"}function SM({basename:e,pathname:t}){return t==="/"?e:Ir([e,t])}function wM(e,t="/"){let{pathname:n,search:i="",hash:a=""}=typeof e=="string"?yi(e):e;return{pathname:n?n.startsWith("/")?n:EM(n,t):t,search:TM(i),hash:CM(a)}}function EM(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function _g(e,t,n,i){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function BT(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Sh(e){let t=BT(e);return t.map((n,i)=>i===t.length-1?n.pathname:n.pathnameBase)}function wh(e,t,n,i=!1){let a;typeof e=="string"?a=yi(e):(a={...e},Ue(!a.pathname||!a.pathname.includes("?"),_g("?","pathname","search",a)),Ue(!a.pathname||!a.pathname.includes("#"),_g("#","pathname","hash",a)),Ue(!a.search||!a.search.includes("#"),_g("#","search","hash",a)));let l=e===""||a.pathname==="",u=l?"/":a.pathname,f;if(u==null)f=n;else{let y=t.length-1;if(!i&&u.startsWith("..")){let _=u.split("/");for(;_[0]==="..";)_.shift(),y-=1;a.pathname=_.join("/")}f=y>=0?t[y]:"/"}let h=wM(a,f),p=u&&u!=="/"&&u.endsWith("/"),g=(l||u===".")&&n.endsWith("/");return!h.pathname.endsWith("/")&&(p||g)&&(h.pathname+="/"),h}var Ir=e=>e.join("/").replace(/\/\/+/g,"/"),xM=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),TM=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,CM=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Of=class{constructor(e,t,n,i=!1){this.status=e,this.statusText=t||"",this.internal=i,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function $c(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var HT=["POST","PUT","PATCH","DELETE"],RM=new Set(HT),AM=["GET",...HT],IM=new Set(AM),DM=new Set([301,302,303,307,308]),OM=new Set([307,308]),bg={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},NM={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},rc={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},MM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,gv=e=>MM.test(e),kM=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),FT="remix-router-transitions",qT=Symbol("ResetLoaderData");function LM(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u";Ue(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let i=e.hydrationRouteProperties||[],a=e.mapRouteProperties||kM,l={},u=Uc(e.routes,a,void 0,l),f,h=e.basename||"/";h.startsWith("/")||(h=`/${h}`);let p=e.dataStrategy||zM,g={...e.future},y=null,_=new Set,b=null,w=null,O=null,R=e.hydrationData!=null,D=Xi(u,e.history.location,h),k=!1,x=null,A;if(D==null&&!e.patchRoutesOnNavigation){let j=Yn(404,{pathname:e.history.location.pathname}),{matches:Y,route:te}=Hd(u);A=!0,D=Y,x={[te.id]:j}}else if(D&&!e.hydrationData&&Cs(D,u,e.history.location.pathname).active&&(D=null),D)if(D.some(j=>j.route.lazy))A=!1;else if(!D.some(j=>j.route.loader))A=!0;else{let j=e.hydrationData?e.hydrationData.loaderData:null,Y=e.hydrationData?e.hydrationData.errors:null;if(Y){let te=D.findIndex(ce=>Y[ce.route.id]!==void 0);A=D.slice(0,te+1).every(ce=>!yy(ce.route,j,Y))}else A=D.every(te=>!yy(te.route,j,Y))}else{A=!1,D=[];let j=Cs(null,u,e.history.location.pathname);j.active&&j.matches&&(k=!0,D=j.matches)}let M,T={historyAction:e.history.action,location:e.history.location,matches:D,initialized:A,navigation:bg,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||x,fetchers:new Map,blockers:new Map},P="POP",V=!1,H,B=!1,z=new Map,G=null,F=!1,K=!1,ue=new Set,U=new Map,ee=0,ne=-1,oe=new Map,N=new Set,X=new Map,le=new Map,ie=new Set,de=new Map,me,pe=null;function Ae(){if(y=e.history.listen(({action:j,location:Y,delta:te})=>{if(me){me(),me=void 0;return}It(de.size===0||te!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ce=Iu({currentLocation:T.location,nextLocation:Y,historyAction:j});if(ce&&te!=null){let fe=new Promise(ye=>{me=ye});e.history.go(te*-1),br(ce,{state:"blocked",location:Y,proceed(){br(ce,{state:"proceeding",proceed:void 0,reset:void 0,location:Y}),fe.then(()=>e.history.go(te))},reset(){let ye=new Map(T.blockers);ye.set(ce,rc),$e({blockers:ye})}});return}return Et(j,Y)}),n){tk(t,z);let j=()=>nk(t,z);t.addEventListener("pagehide",j),G=()=>t.removeEventListener("pagehide",j)}return T.initialized||Et("POP",T.location,{initialHydration:!0}),M}function be(){y&&y(),G&&G(),_.clear(),H&&H.abort(),T.fetchers.forEach((j,Y)=>Wt(Y)),T.blockers.forEach((j,Y)=>xs(Y))}function De(j){return _.add(j),()=>_.delete(j)}function $e(j,Y={}){j.matches&&(j.matches=j.matches.map(fe=>{let ye=l[fe.route.id],we=fe.route;return we.element!==ye.element||we.errorElement!==ye.errorElement||we.hydrateFallbackElement!==ye.hydrateFallbackElement?{...fe,route:ye}:fe})),T={...T,...j};let te=[],ce=[];T.fetchers.forEach((fe,ye)=>{fe.state==="idle"&&(ie.has(ye)?te.push(ye):ce.push(ye))}),ie.forEach(fe=>{!T.fetchers.has(fe)&&!U.has(fe)&&te.push(fe)}),[..._].forEach(fe=>fe(T,{deletedFetchers:te,viewTransitionOpts:Y.viewTransitionOpts,flushSync:Y.flushSync===!0})),te.forEach(fe=>Wt(fe)),ce.forEach(fe=>T.fetchers.delete(fe))}function _t(j,Y,{flushSync:te}={}){let ce=T.actionData!=null&&T.navigation.formMethod!=null&&_n(T.navigation.formMethod)&&T.navigation.state==="loading"&&j.state?._isRedirect!==!0,fe;Y.actionData?Object.keys(Y.actionData).length>0?fe=Y.actionData:fe=null:ce?fe=T.actionData:fe=null;let ye=Y.loaderData?cw(T.loaderData,Y.loaderData,Y.matches||[],Y.errors):T.loaderData,we=T.blockers;we.size>0&&(we=new Map(we),we.forEach((_e,Se)=>we.set(Se,rc)));let ve=F?!1:Ou(j,Y.matches||T.matches),xe=V===!0||T.navigation.formMethod!=null&&_n(T.navigation.formMethod)&&j.state?._isRedirect!==!0;f&&(u=f,f=void 0),F||P==="POP"||(P==="PUSH"?e.history.push(j,j.state):P==="REPLACE"&&e.history.replace(j,j.state));let Ce;if(P==="POP"){let _e=z.get(T.location.pathname);_e&&_e.has(j.pathname)?Ce={currentLocation:T.location,nextLocation:j}:z.has(j.pathname)&&(Ce={currentLocation:j,nextLocation:T.location})}else if(B){let _e=z.get(T.location.pathname);_e?_e.add(j.pathname):(_e=new Set([j.pathname]),z.set(T.location.pathname,_e)),Ce={currentLocation:T.location,nextLocation:j}}$e({...Y,actionData:fe,loaderData:ye,historyAction:P,location:j,initialized:!0,navigation:bg,revalidation:"idle",restoreScrollPosition:ve,preventScrollReset:xe,blockers:we},{viewTransitionOpts:Ce,flushSync:te===!0}),P="POP",V=!1,B=!1,F=!1,K=!1,pe?.resolve(),pe=null}async function gt(j,Y){if(typeof j=="number"){e.history.go(j);return}let te=gy(T.location,T.matches,h,j,Y?.fromRouteId,Y?.relative),{path:ce,submission:fe,error:ye}=ew(!1,te,Y),we=T.location,ve=jc(T.location,ce,Y&&Y.state);ve={...ve,...e.history.encodeLocation(ve)};let xe=Y&&Y.replace!=null?Y.replace:void 0,Ce="PUSH";xe===!0?Ce="REPLACE":xe===!1||fe!=null&&_n(fe.formMethod)&&fe.formAction===T.location.pathname+T.location.search&&(Ce="REPLACE");let _e=Y&&"preventScrollReset"in Y?Y.preventScrollReset===!0:void 0,Se=(Y&&Y.flushSync)===!0,ze=Iu({currentLocation:we,nextLocation:ve,historyAction:Ce});if(ze){br(ze,{state:"blocked",location:ve,proceed(){br(ze,{state:"proceeding",proceed:void 0,reset:void 0,location:ve}),gt(j,Y)},reset(){let Ze=new Map(T.blockers);Ze.set(ze,rc),$e({blockers:Ze})}});return}await Et(Ce,ve,{submission:fe,pendingError:ye,preventScrollReset:_e,replace:Y&&Y.replace,enableViewTransition:Y&&Y.viewTransition,flushSync:Se})}function kn(){pe||(pe=rk()),al(),$e({revalidation:"loading"});let j=pe.promise;return T.navigation.state==="submitting"?j:T.navigation.state==="idle"?(Et(T.historyAction,T.location,{startUninterruptedRevalidation:!0}),j):(Et(P||T.historyAction,T.navigation.location,{overrideNavigation:T.navigation,enableViewTransition:B===!0}),j)}async function Et(j,Y,te){H&&H.abort(),H=null,P=j,F=(te&&te.startUninterruptedRevalidation)===!0,Ts(T.location,T.matches),V=(te&&te.preventScrollReset)===!0,B=(te&&te.enableViewTransition)===!0;let ce=f||u,fe=te&&te.overrideNavigation,ye=te?.initialHydration&&T.matches&&T.matches.length>0&&!k?T.matches:Xi(ce,Y,h),we=(te&&te.flushSync)===!0;if(ye&&T.initialized&&!K&&WM(T.location,Y)&&!(te&&te.submission&&_n(te.submission.formMethod))){_t(Y,{matches:ye},{flushSync:we});return}let ve=Cs(ye,ce,Y.pathname);if(ve.active&&ve.matches&&(ye=ve.matches),!ye){let{error:xt,notFoundMatches:Le,route:it}=Na(Y.pathname);_t(Y,{matches:Le,loaderData:{},errors:{[it.id]:xt}},{flushSync:we});return}H=new AbortController;let xe=bo(e.history,Y,H.signal,te&&te.submission),Ce=e.getContext?await e.getContext():new Z1,_e;if(te&&te.pendingError)_e=[Zi(ye).route.id,{type:"error",error:te.pendingError}];else if(te&&te.submission&&_n(te.submission.formMethod)){let xt=await Ln(xe,Y,te.submission,ye,Ce,ve.active,te&&te.initialHydration===!0,{replace:te.replace,flushSync:we});if(xt.shortCircuited)return;if(xt.pendingActionResult){let[Le,it]=xt.pendingActionResult;if(Nn(it)&&$c(it.error)&&it.error.status===404){H=null,_t(Y,{matches:xt.matches,loaderData:{},errors:{[Le]:it.error}});return}}ye=xt.matches||ye,_e=xt.pendingActionResult,fe=Sg(Y,te.submission),we=!1,ve.active=!1,xe=bo(e.history,xe.url,xe.signal)}let{shortCircuited:Se,matches:ze,loaderData:Ze,errors:yt}=await Lr(xe,Y,ye,Ce,ve.active,fe,te&&te.submission,te&&te.fetcherSubmission,te&&te.replace,te&&te.initialHydration===!0,we,_e);Se||(H=null,_t(Y,{matches:ze||ye,...uw(_e),loaderData:Ze,errors:yt}))}async function Ln(j,Y,te,ce,fe,ye,we,ve={}){al();let xe=JM(Y,te);if($e({navigation:xe},{flushSync:ve.flushSync===!0}),ye){let Se=await Rs(ce,Y.pathname,j.signal);if(Se.type==="aborted")return{shortCircuited:!0};if(Se.type==="error"){if(Se.partialMatches.length===0){let{matches:Ze,route:yt}=Hd(u);return{matches:Ze,pendingActionResult:[yt.id,{type:"error",error:Se.error}]}}let ze=Zi(Se.partialMatches).route.id;return{matches:Se.partialMatches,pendingActionResult:[ze,{type:"error",error:Se.error}]}}else if(Se.matches)ce=Se.matches;else{let{notFoundMatches:ze,error:Ze,route:yt}=Na(Y.pathname);return{matches:ze,pendingActionResult:[yt.id,{type:"error",error:Ze}]}}}let Ce,_e=hf(ce,Y);if(!_e.route.action&&!_e.route.lazy)Ce={type:"error",error:Yn(405,{method:j.method,pathname:Y.pathname,routeId:_e.route.id})};else{let Se=xo(a,l,j,ce,_e,we?[]:i,fe),ze=await wi(j,Se,fe,null);if(Ce=ze[_e.route.id],!Ce){for(let Ze of ce)if(ze[Ze.route.id]){Ce=ze[Ze.route.id];break}}if(j.signal.aborted)return{shortCircuited:!0}}if(ta(Ce)){let Se;return ve&&ve.replace!=null?Se=ve.replace:Se=aw(Ce.response.headers.get("Location"),new URL(j.url),h)===T.location.pathname+T.location.search,await Pr(j,Ce,!0,{submission:te,replace:Se}),{shortCircuited:!0}}if(Nn(Ce)){let Se=Zi(ce,_e.route.id);return(ve&&ve.replace)!==!0&&(P="PUSH"),{matches:ce,pendingActionResult:[Se.route.id,Ce,_e.route.id]}}return{matches:ce,pendingActionResult:[_e.route.id,Ce]}}async function Lr(j,Y,te,ce,fe,ye,we,ve,xe,Ce,_e,Se){let ze=ye||Sg(Y,we),Ze=we||ve||fw(ze),yt=!F&&!Ce;if(fe){if(yt){let Nt=Yt(Se);$e({navigation:ze,...Nt!==void 0?{actionData:Nt}:{}},{flushSync:_e})}let Pe=await Rs(te,Y.pathname,j.signal);if(Pe.type==="aborted")return{shortCircuited:!0};if(Pe.type==="error"){if(Pe.partialMatches.length===0){let{matches:Br,route:pn}=Hd(u);return{matches:Br,loaderData:{},errors:{[pn.id]:Pe.error}}}let Nt=Zi(Pe.partialMatches).route.id;return{matches:Pe.partialMatches,loaderData:{},errors:{[Nt]:Pe.error}}}else if(Pe.matches)te=Pe.matches;else{let{error:Nt,notFoundMatches:Br,route:pn}=Na(Y.pathname);return{matches:Br,loaderData:{},errors:{[pn.id]:Nt}}}}let xt=f||u,{dsMatches:Le,revalidatingFetchers:it}=tw(j,ce,a,l,e.history,T,te,Ze,Y,Ce?[]:i,Ce===!0,K,ue,ie,X,N,xt,h,e.patchRoutesOnNavigation!=null,Se);if(ne=++ee,!e.dataStrategy&&!Le.some(Pe=>Pe.shouldLoad)&&!Le.some(Pe=>Pe.route.middleware)&&it.length===0){let Pe=ws();return _t(Y,{matches:te,loaderData:{},errors:Se&&Nn(Se[1])?{[Se[0]]:Se[1].error}:null,...uw(Se),...Pe?{fetchers:new Map(T.fetchers)}:{}},{flushSync:_e}),{shortCircuited:!0}}if(yt){let Pe={};if(!fe){Pe.navigation=ze;let Nt=Yt(Se);Nt!==void 0&&(Pe.actionData=Nt)}it.length>0&&(Pe.fetchers=sl(it)),$e(Pe,{flushSync:_e})}it.forEach(Pe=>{_r(Pe.key),Pe.controller&&U.set(Pe.key,Pe.controller)});let Sr=()=>it.forEach(Pe=>_r(Pe.key));H&&H.signal.addEventListener("abort",Sr);let{loaderResults:En,fetcherResults:ln}=await Ru(Le,it,j,ce);if(j.signal.aborted)return{shortCircuited:!0};H&&H.signal.removeEventListener("abort",Sr),it.forEach(Pe=>U.delete(Pe.key));let Pn=Fd(En);if(Pn)return await Pr(j,Pn.result,!0,{replace:xe}),{shortCircuited:!0};if(Pn=Fd(ln),Pn)return N.add(Pn.key),await Pr(j,Pn.result,!0,{replace:xe}),{shortCircuited:!0};let{loaderData:ka,errors:Ei}=lw(T,te,En,Se,it,ln);Ce&&T.errors&&(Ei={...T.errors,...Ei});let Ur=ws(),$r=Es(ne),zr=Ur||$r||it.length>0;return{matches:te,loaderData:ka,errors:Ei,...zr?{fetchers:new Map(T.fetchers)}:{}}}function Yt(j){if(j&&!Nn(j[1]))return{[j[0]]:j[1].data};if(T.actionData)return Object.keys(T.actionData).length===0?null:T.actionData}function sl(j){return j.forEach(Y=>{let te=T.fetchers.get(Y.key),ce=ic(void 0,te?te.data:void 0);T.fetchers.set(Y.key,ce)}),new Map(T.fetchers)}async function Ss(j,Y,te,ce){_r(j);let fe=(ce&&ce.flushSync)===!0,ye=f||u,we=gy(T.location,T.matches,h,te,Y,ce?.relative),ve=Xi(ye,we,h),xe=Cs(ve,ye,we);if(xe.active&&xe.matches&&(ve=xe.matches),!ve){bt(j,Y,Yn(404,{pathname:we}),{flushSync:fe});return}let{path:Ce,submission:_e,error:Se}=ew(!0,we,ce);if(Se){bt(j,Y,Se,{flushSync:fe});return}let ze=e.getContext?await e.getContext():new Z1,Ze=(ce&&ce.preventScrollReset)===!0;if(_e&&_n(_e.formMethod)){await Da(j,Y,Ce,ve,ze,xe.active,fe,Ze,_e);return}X.set(j,{routeId:Y,path:Ce}),await Oa(j,Y,Ce,ve,ze,xe.active,fe,Ze,_e)}async function Da(j,Y,te,ce,fe,ye,we,ve,xe){al(),X.delete(j);let Ce=T.fetchers.get(j);hn(j,ek(xe,Ce),{flushSync:we});let _e=new AbortController,Se=bo(e.history,te,_e.signal,xe);if(ye){let St=await Rs(ce,new URL(Se.url).pathname,Se.signal,j);if(St.type==="aborted")return;if(St.type==="error"){bt(j,Y,St.error,{flushSync:we});return}else if(St.matches)ce=St.matches;else{bt(j,Y,Yn(404,{pathname:te}),{flushSync:we});return}}let ze=hf(ce,te);if(!ze.route.action&&!ze.route.lazy){let St=Yn(405,{method:xe.formMethod,pathname:te,routeId:Y});bt(j,Y,St,{flushSync:we});return}U.set(j,_e);let Ze=ee,yt=xo(a,l,Se,ce,ze,i,fe),Le=(await wi(Se,yt,fe,j))[ze.route.id];if(Se.signal.aborted){U.get(j)===_e&&U.delete(j);return}if(ie.has(j)){if(ta(Le)||Nn(Le)){hn(j,Qi(void 0));return}}else{if(ta(Le))if(U.delete(j),ne>Ze){hn(j,Qi(void 0));return}else return N.add(j),hn(j,ic(xe)),Pr(Se,Le,!1,{fetcherSubmission:xe,preventScrollReset:ve});if(Nn(Le)){bt(j,Y,Le.error);return}}let it=T.navigation.location||T.location,Sr=bo(e.history,it,_e.signal),En=f||u,ln=T.navigation.state!=="idle"?Xi(En,T.navigation.location,h):T.matches;Ue(ln,"Didn't find any matches after fetcher action");let Pn=++ee;oe.set(j,Pn);let ka=ic(xe,Le.data);T.fetchers.set(j,ka);let{dsMatches:Ei,revalidatingFetchers:Ur}=tw(Sr,fe,a,l,e.history,T,ln,xe,it,i,!1,K,ue,ie,X,N,En,h,e.patchRoutesOnNavigation!=null,[ze.route.id,Le]);Ur.filter(St=>St.key!==j).forEach(St=>{let xi=St.key,Nu=T.fetchers.get(xi),Mu=ic(void 0,Nu?Nu.data:void 0);T.fetchers.set(xi,Mu),_r(xi),St.controller&&U.set(xi,St.controller)}),$e({fetchers:new Map(T.fetchers)});let $r=()=>Ur.forEach(St=>_r(St.key));_e.signal.addEventListener("abort",$r);let{loaderResults:zr,fetcherResults:Pe}=await Ru(Ei,Ur,Sr,fe);if(_e.signal.aborted)return;if(_e.signal.removeEventListener("abort",$r),oe.delete(j),U.delete(j),Ur.forEach(St=>U.delete(St.key)),T.fetchers.has(j)){let St=Qi(Le.data);T.fetchers.set(j,St)}let Nt=Fd(zr);if(Nt)return Pr(Sr,Nt.result,!1,{preventScrollReset:ve});if(Nt=Fd(Pe),Nt)return N.add(Nt.key),Pr(Sr,Nt.result,!1,{preventScrollReset:ve});let{loaderData:Br,errors:pn}=lw(T,ln,zr,void 0,Ur,Pe);Es(Pn),T.navigation.state==="loading"&&Pn>ne?(Ue(P,"Expected pending action"),H&&H.abort(),_t(T.navigation.location,{matches:ln,loaderData:Br,errors:pn,fetchers:new Map(T.fetchers)})):($e({errors:pn,loaderData:cw(T.loaderData,Br,ln,pn),fetchers:new Map(T.fetchers)}),K=!1)}async function Oa(j,Y,te,ce,fe,ye,we,ve,xe){let Ce=T.fetchers.get(j);hn(j,ic(xe,Ce?Ce.data:void 0),{flushSync:we});let _e=new AbortController,Se=bo(e.history,te,_e.signal);if(ye){let it=await Rs(ce,new URL(Se.url).pathname,Se.signal,j);if(it.type==="aborted")return;if(it.type==="error"){bt(j,Y,it.error,{flushSync:we});return}else if(it.matches)ce=it.matches;else{bt(j,Y,Yn(404,{pathname:te}),{flushSync:we});return}}let ze=hf(ce,te);U.set(j,_e);let Ze=ee,yt=xo(a,l,Se,ce,ze,i,fe),Le=(await wi(Se,yt,fe,j))[ze.route.id];if(U.get(j)===_e&&U.delete(j),!Se.signal.aborted){if(ie.has(j)){hn(j,Qi(void 0));return}if(ta(Le))if(ne>Ze){hn(j,Qi(void 0));return}else{N.add(j),await Pr(Se,Le,!1,{preventScrollReset:ve});return}if(Nn(Le)){bt(j,Y,Le.error);return}hn(j,Qi(Le.data))}}async function Pr(j,Y,te,{submission:ce,fetcherSubmission:fe,preventScrollReset:ye,replace:we}={}){Y.response.headers.has("X-Remix-Revalidate")&&(K=!0);let ve=Y.response.headers.get("Location");Ue(ve,"Expected a Location header on the redirect Response"),ve=aw(ve,new URL(j.url),h);let xe=jc(T.location,ve,{_isRedirect:!0});if(n){let yt=!1;if(Y.response.headers.has("X-Remix-Reload-Document"))yt=!0;else if(gv(ve)){const xt=UT(ve,!0);yt=xt.origin!==t.location.origin||Kn(xt.pathname,h)==null}if(yt){we?t.location.replace(ve):t.location.assign(ve);return}}H=null;let Ce=we===!0||Y.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:_e,formAction:Se,formEncType:ze}=T.navigation;!ce&&!fe&&_e&&Se&&ze&&(ce=fw(T.navigation));let Ze=ce||fe;if(OM.has(Y.response.status)&&Ze&&_n(Ze.formMethod))await Et(Ce,xe,{submission:{...Ze,formAction:ve},preventScrollReset:ye||V,enableViewTransition:te?B:void 0});else{let yt=Sg(xe,ce);await Et(Ce,xe,{overrideNavigation:yt,fetcherSubmission:fe,preventScrollReset:ye||V,enableViewTransition:te?B:void 0})}}async function wi(j,Y,te,ce){let fe,ye={};try{fe=await HM(p,j,Y,ce,te,!1)}catch(we){return Y.filter(ve=>ve.shouldLoad).forEach(ve=>{ye[ve.route.id]={type:"error",error:we}}),ye}if(j.signal.aborted)return ye;for(let[we,ve]of Object.entries(fe))if(XM(ve)){let xe=ve.result;ye[we]={type:"redirect",response:GM(xe,j,we,Y,h)}}else ye[we]=await VM(ve);return ye}async function Ru(j,Y,te,ce){let fe=wi(te,j,ce,null),ye=Promise.all(Y.map(async xe=>{if(xe.matches&&xe.match&&xe.request&&xe.controller){let _e=(await wi(xe.request,xe.matches,ce,xe.key))[xe.match.route.id];return{[xe.key]:_e}}else return Promise.resolve({[xe.key]:{type:"error",error:Yn(404,{pathname:xe.path})}})})),we=await fe,ve=(await ye).reduce((xe,Ce)=>Object.assign(xe,Ce),{});return{loaderResults:we,fetcherResults:ve}}function al(){K=!0,X.forEach((j,Y)=>{U.has(Y)&&ue.add(Y),_r(Y)})}function hn(j,Y,te={}){T.fetchers.set(j,Y),$e({fetchers:new Map(T.fetchers)},{flushSync:(te&&te.flushSync)===!0})}function bt(j,Y,te,ce={}){let fe=Zi(T.matches,Y);Wt(j),$e({errors:{[fe.route.id]:te},fetchers:new Map(T.fetchers)},{flushSync:(ce&&ce.flushSync)===!0})}function nr(j){return le.set(j,(le.get(j)||0)+1),ie.has(j)&&ie.delete(j),T.fetchers.get(j)||NM}function Wt(j){let Y=T.fetchers.get(j);U.has(j)&&!(Y&&Y.state==="loading"&&oe.has(j))&&_r(j),X.delete(j),oe.delete(j),N.delete(j),ie.delete(j),ue.delete(j),T.fetchers.delete(j)}function ap(j){let Y=(le.get(j)||0)-1;Y<=0?(le.delete(j),ie.add(j)):le.set(j,Y),$e({fetchers:new Map(T.fetchers)})}function _r(j){let Y=U.get(j);Y&&(Y.abort(),U.delete(j))}function Au(j){for(let Y of j){let te=nr(Y),ce=Qi(te.data);T.fetchers.set(Y,ce)}}function ws(){let j=[],Y=!1;for(let te of N){let ce=T.fetchers.get(te);Ue(ce,`Expected fetcher: ${te}`),ce.state==="loading"&&(N.delete(te),j.push(te),Y=!0)}return Au(j),Y}function Es(j){let Y=[];for(let[te,ce]of oe)if(ce<j){let fe=T.fetchers.get(te);Ue(fe,`Expected fetcher: ${te}`),fe.state==="loading"&&(_r(te),oe.delete(te),Y.push(te))}return Au(Y),Y.length>0}function jr(j,Y){let te=T.blockers.get(j)||rc;return de.get(j)!==Y&&de.set(j,Y),te}function xs(j){T.blockers.delete(j),de.delete(j)}function br(j,Y){let te=T.blockers.get(j)||rc;Ue(te.state==="unblocked"&&Y.state==="blocked"||te.state==="blocked"&&Y.state==="blocked"||te.state==="blocked"&&Y.state==="proceeding"||te.state==="blocked"&&Y.state==="unblocked"||te.state==="proceeding"&&Y.state==="unblocked",`Invalid blocker state transition: ${te.state} -> ${Y.state}`);let ce=new Map(T.blockers);ce.set(j,Y),$e({blockers:ce})}function Iu({currentLocation:j,nextLocation:Y,historyAction:te}){if(de.size===0)return;de.size>1&&It(!1,"A router only supports one blocker at a time");let ce=Array.from(de.entries()),[fe,ye]=ce[ce.length-1],we=T.blockers.get(fe);if(!(we&&we.state==="proceeding")&&ye({currentLocation:j,nextLocation:Y,historyAction:te}))return fe}function Na(j){let Y=Yn(404,{pathname:j}),te=f||u,{matches:ce,route:fe}=Hd(te);return{notFoundMatches:ce,route:fe,error:Y}}function Du(j,Y,te){if(b=j,O=Y,w=te||null,!R&&T.navigation===bg){R=!0;let ce=Ou(T.location,T.matches);ce!=null&&$e({restoreScrollPosition:ce})}return()=>{b=null,O=null,w=null}}function Ma(j,Y){return w&&w(j,Y.map(ce=>lM(ce,T.loaderData)))||j.key}function Ts(j,Y){if(b&&O){let te=Ma(j,Y);b[te]=O()}}function Ou(j,Y){if(b){let te=Ma(j,Y),ce=b[te];if(typeof ce=="number")return ce}return null}function Cs(j,Y,te){if(e.patchRoutesOnNavigation)if(j){if(Object.keys(j[0].params).length>0)return{active:!0,matches:ff(Y,te,h,!0)}}else return{active:!0,matches:ff(Y,te,h,!0)||[]};return{active:!1,matches:null}}async function Rs(j,Y,te,ce){if(!e.patchRoutesOnNavigation)return{type:"success",matches:j};let fe=j;for(;;){let ye=f==null,we=f||u,ve=l;try{await e.patchRoutesOnNavigation({signal:te,path:Y,matches:fe,fetcherKey:ce,patch:(_e,Se)=>{te.aborted||nw(_e,Se,we,ve,a,!1)}})}catch(_e){return{type:"error",error:_e,partialMatches:fe}}finally{ye&&!te.aborted&&(u=[...u])}if(te.aborted)return{type:"aborted"};let xe=Xi(we,Y,h);if(xe)return{type:"success",matches:xe};let Ce=ff(we,Y,h,!0);if(!Ce||fe.length===Ce.length&&fe.every((_e,Se)=>_e.route.id===Ce[Se].route.id))return{type:"success",matches:null};fe=Ce}}function ol(j){l={},f=Uc(j,a,void 0,l)}function ll(j,Y,te=!1){let ce=f==null;nw(j,Y,f||u,l,a,te),ce&&(u=[...u],$e({}))}return M={get basename(){return h},get future(){return g},get state(){return T},get routes(){return u},get window(){return t},initialize:Ae,subscribe:De,enableScrollRestoration:Du,navigate:gt,fetch:Ss,revalidate:kn,createHref:j=>e.history.createHref(j),encodeLocation:j=>e.history.encodeLocation(j),getFetcher:nr,deleteFetcher:ap,dispose:be,getBlocker:jr,deleteBlocker:xs,patchRoutes:ll,_internalFetchControllers:U,_internalSetRoutes:ol,_internalSetStateDoNotUseOrYouWillBreakYourApp(j){$e(j)}},M}function PM(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function gy(e,t,n,i,a,l){let u,f;if(a){u=[];for(let p of t)if(u.push(p),p.route.id===a){f=p;break}}else u=t,f=t[t.length-1];let h=wh(i||".",Sh(u),Kn(e.pathname,n)||e.pathname,l==="path");if(i==null&&(h.search=e.search,h.hash=e.hash),(i==null||i===""||i===".")&&f){let p=yv(h.search);if(f.route.index&&!p)h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index";else if(!f.route.index&&p){let g=new URLSearchParams(h.search),y=g.getAll("index");g.delete("index"),y.filter(b=>b).forEach(b=>g.append("index",b));let _=g.toString();h.search=_?`?${_}`:""}}return n!=="/"&&(h.pathname=SM({basename:n,pathname:h.pathname})),ls(h)}function ew(e,t,n){if(!n||!PM(n))return{path:t};if(n.formMethod&&!ZM(n.formMethod))return{path:t,error:Yn(405,{method:n.formMethod})};let i=()=>({path:t,error:Yn(400,{type:"invalid-body"})}),l=(n.formMethod||"get").toUpperCase(),u=KT(t);if(n.body!==void 0){if(n.formEncType==="text/plain"){if(!_n(l))return i();let y=typeof n.body=="string"?n.body:n.body instanceof FormData||n.body instanceof URLSearchParams?Array.from(n.body.entries()).reduce((_,[b,w])=>`${_}${b}=${w}
`,""):String(n.body);return{path:t,submission:{formMethod:l,formAction:u,formEncType:n.formEncType,formData:void 0,json:void 0,text:y}}}else if(n.formEncType==="application/json"){if(!_n(l))return i();try{let y=typeof n.body=="string"?JSON.parse(n.body):n.body;return{path:t,submission:{formMethod:l,formAction:u,formEncType:n.formEncType,formData:void 0,json:y,text:void 0}}}catch{return i()}}}Ue(typeof FormData=="function","FormData is not available in this environment");let f,h;if(n.formData)f=_y(n.formData),h=n.formData;else if(n.body instanceof FormData)f=_y(n.body),h=n.body;else if(n.body instanceof URLSearchParams)f=n.body,h=ow(f);else if(n.body==null)f=new URLSearchParams,h=new FormData;else try{f=new URLSearchParams(n.body),h=ow(f)}catch{return i()}let p={formMethod:l,formAction:u,formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:h,json:void 0,text:void 0};if(_n(p.formMethod))return{path:t,submission:p};let g=yi(t);return e&&g.search&&yv(g.search)&&f.append("index",""),g.search=`?${f}`,{path:ls(g),submission:p}}function tw(e,t,n,i,a,l,u,f,h,p,g,y,_,b,w,O,R,D,k,x){let A=x?Nn(x[1])?x[1].error:x[1].data:void 0,M=a.createURL(l.location),T=a.createURL(h),P;if(g&&l.errors){let F=Object.keys(l.errors)[0];P=u.findIndex(K=>K.route.id===F)}else if(x&&Nn(x[1])){let F=x[0];P=u.findIndex(K=>K.route.id===F)-1}let V=x?x[1].statusCode:void 0,H=V&&V>=400,B={currentUrl:M,currentParams:l.matches[0]?.params||{},nextUrl:T,nextParams:u[0].params,...f,actionResult:A,actionStatus:V},z=u.map((F,K)=>{let{route:ue}=F,U=null;if(P!=null&&K>P?U=!1:ue.lazy?U=!0:ue.loader==null?U=!1:g?U=yy(ue,l.loaderData,l.errors):jM(l.loaderData,l.matches[K],F)&&(U=!0),U!==null)return vy(n,i,e,F,p,t,U);let ee=H?!1:y||M.pathname+M.search===T.pathname+T.search||M.search!==T.search||UM(l.matches[K],F),ne={...B,defaultShouldRevalidate:ee},oe=Nf(F,ne);return vy(n,i,e,F,p,t,oe,ne)}),G=[];return w.forEach((F,K)=>{if(g||!u.some(le=>le.route.id===F.routeId)||b.has(K))return;let ue=l.fetchers.get(K),U=ue&&ue.state!=="idle"&&ue.data===void 0,ee=Xi(R,F.path,D);if(!ee){if(k&&U)return;G.push({key:K,routeId:F.routeId,path:F.path,matches:null,match:null,request:null,controller:null});return}if(O.has(K))return;let ne=hf(ee,F.path),oe=new AbortController,N=bo(a,F.path,oe.signal),X=null;if(_.has(K))_.delete(K),X=xo(n,i,N,ee,ne,p,t);else if(U)y&&(X=xo(n,i,N,ee,ne,p,t));else{let le={...B,defaultShouldRevalidate:H?!1:y};Nf(ne,le)&&(X=xo(n,i,N,ee,ne,p,t,le))}X&&G.push({key:K,routeId:F.routeId,path:F.path,matches:X,match:ne,request:N,controller:oe})}),{dsMatches:z,revalidatingFetchers:G}}function yy(e,t,n){if(e.lazy)return!0;if(!e.loader)return!1;let i=t!=null&&e.id in t,a=n!=null&&n[e.id]!==void 0;return!i&&a?!1:typeof e.loader=="function"&&e.loader.hydrate===!0?!0:!i&&!a}function jM(e,t,n){let i=!t||n.route.id!==t.route.id,a=!e.hasOwnProperty(n.route.id);return i||a}function UM(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Nf(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}function nw(e,t,n,i,a,l){let u;if(e){let p=i[e];Ue(p,`No route found to patch children into: routeId = ${e}`),p.children||(p.children=[]),u=p.children}else u=n;let f=[],h=[];if(t.forEach(p=>{let g=u.find(y=>VT(p,y));g?h.push({existingRoute:g,newRoute:p}):f.push(p)}),f.length>0){let p=Uc(f,a,[e||"_","patch",String(u?.length||"0")],i);u.push(...p)}if(l&&h.length>0)for(let p=0;p<h.length;p++){let{existingRoute:g,newRoute:y}=h[p],_=g,[b]=Uc([y],a,[],{},!0);Object.assign(_,{element:b.element?b.element:_.element,errorElement:b.errorElement?b.errorElement:_.errorElement,hydrateFallbackElement:b.hydrateFallbackElement?b.hydrateFallbackElement:_.hydrateFallbackElement})}}function VT(e,t){return"id"in e&&"id"in t&&e.id===t.id?!0:e.index===t.index&&e.path===t.path&&e.caseSensitive===t.caseSensitive?(!e.children||e.children.length===0)&&(!t.children||t.children.length===0)?!0:e.children.every((n,i)=>t.children?.some(a=>VT(n,a))):!1}var rw=new WeakMap,GT=({key:e,route:t,manifest:n,mapRouteProperties:i})=>{let a=n[t.id];if(Ue(a,"No route found in manifest"),!a.lazy||typeof a.lazy!="object")return;let l=a.lazy[e];if(!l)return;let u=rw.get(a);u||(u={},rw.set(a,u));let f=u[e];if(f)return f;let h=(async()=>{let p=iM(e),y=a[e]!==void 0&&e!=="hasErrorBoundary";if(p)It(!p,"Route property "+e+" is not a supported lazy route property. This property will be ignored."),u[e]=Promise.resolve();else if(y)It(!1,`Route "${a.id}" has a static property "${e}" defined. The lazy property will be ignored.`);else{let _=await l();_!=null&&(Object.assign(a,{[e]:_}),Object.assign(a,i(a)))}typeof a.lazy=="object"&&(a.lazy[e]=void 0,Object.values(a.lazy).every(_=>_===void 0)&&(a.lazy=void 0))})();return u[e]=h,h},iw=new WeakMap;function $M(e,t,n,i,a){let l=n[e.id];if(Ue(l,"No route found in manifest"),!e.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof e.lazy=="function"){let g=iw.get(l);if(g)return{lazyRoutePromise:g,lazyHandlerPromise:g};let y=(async()=>{Ue(typeof e.lazy=="function","No lazy route function found");let _=await e.lazy(),b={};for(let w in _){let O=_[w];if(O===void 0)continue;let R=aM(w),k=l[w]!==void 0&&w!=="hasErrorBoundary";R?It(!R,"Route property "+w+" is not a supported property to be returned from a lazy route function. This property will be ignored."):k?It(!k,`Route "${l.id}" has a static property "${w}" defined but its lazy function is also returning a value for this property. The lazy route property "${w}" will be ignored.`):b[w]=O}Object.assign(l,b),Object.assign(l,{...i(l),lazy:void 0})})();return iw.set(l,y),y.catch(()=>{}),{lazyRoutePromise:y,lazyHandlerPromise:y}}let u=Object.keys(e.lazy),f=[],h;for(let g of u){if(a&&a.includes(g))continue;let y=GT({key:g,route:e,manifest:n,mapRouteProperties:i});y&&(f.push(y),g===t&&(h=y))}let p=f.length>0?Promise.all(f).then(()=>{}):void 0;return p?.catch(()=>{}),h?.catch(()=>{}),{lazyRoutePromise:p,lazyHandlerPromise:h}}async function sw(e){let t=e.matches.filter(a=>a.shouldLoad),n={};return(await Promise.all(t.map(a=>a.resolve()))).forEach((a,l)=>{n[t[l].route.id]=a}),n}async function zM(e){return e.matches.some(t=>t.route.middleware)?YT(e,()=>sw(e)):sw(e)}function YT(e,t){return BM(e,t,i=>i,QM,n);function n(i,a,l){if(l)return Promise.resolve(Object.assign(l.value,{[a]:{type:"error",result:i}}));{let{matches:u}=e,f=Math.min(u.findIndex(p=>p.route.id===a)||0,u.findIndex(p=>p.unstable_shouldCallHandler())||0),h=Zi(u,u[f].route.id).route.id;return Promise.resolve({[h]:{type:"error",result:i}})}}}async function BM(e,t,n,i,a){let{matches:l,request:u,params:f,context:h}=e,p=l.flatMap(y=>y.route.middleware?y.route.middleware.map(_=>[y.route.id,_]):[]);return await WT({request:u,params:f,context:h},p,t,n,i,a)}async function WT(e,t,n,i,a,l,u=0){let{request:f}=e;if(f.signal.aborted)throw f.signal.reason??new Error(`Request aborted: ${f.method} ${f.url}`);let h=t[u];if(!h)return await n();let[p,g]=h,y,_=async()=>{if(y)throw new Error("You may only call `next()` once per middleware");try{return y={value:await WT(e,t,n,i,a,l,u+1)},y.value}catch(b){return y={value:await l(b,p,y)},y.value}};try{let b=await g(e,_),w=b!=null?i(b):void 0;return a(w)?w:y?w??y.value:(y={value:await _()},y.value)}catch(b){return await l(b,p,y)}}function QT(e,t,n,i,a){let l=GT({key:"middleware",route:i.route,manifest:t,mapRouteProperties:e}),u=$M(i.route,_n(n.method)?"action":"loader",t,e,a);return{middleware:l,route:u.lazyRoutePromise,handler:u.lazyHandlerPromise}}function vy(e,t,n,i,a,l,u,f=null){let h=!1,p=QT(e,t,n,i,a);return{...i,_lazyPromises:p,shouldLoad:u,unstable_shouldRevalidateArgs:f,unstable_shouldCallHandler(g){return h=!0,f?typeof g=="boolean"?Nf(i,{...f,defaultShouldRevalidate:g}):Nf(i,f):u},resolve(g){return h||u||g&&!_n(n.method)&&(i.route.lazy||i.route.loader)?FM({request:n,match:i,lazyHandlerPromise:p?.handler,lazyRoutePromise:p?.route,handlerOverride:g,scopedContext:l}):Promise.resolve({type:"data",result:void 0})}}}function xo(e,t,n,i,a,l,u,f=null){return i.map(h=>h.route.id!==a.route.id?{...h,shouldLoad:!1,unstable_shouldRevalidateArgs:f,unstable_shouldCallHandler:()=>!1,_lazyPromises:QT(e,t,n,h,l),resolve:()=>Promise.resolve({type:"data",result:void 0})}:vy(e,t,n,h,l,u,!0,f))}async function HM(e,t,n,i,a,l){n.some(p=>p._lazyPromises?.middleware)&&await Promise.all(n.map(p=>p._lazyPromises?.middleware));let u={request:t,params:n[0].params,context:a,matches:n},h=await e({...u,fetcherKey:i,runClientMiddleware:p=>{let g=u;return YT(g,()=>p({...g,fetcherKey:i,runClientMiddleware:()=>{throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler")}}))}});try{await Promise.all(n.flatMap(p=>[p._lazyPromises?.handler,p._lazyPromises?.route]))}catch{}return h}async function FM({request:e,match:t,lazyHandlerPromise:n,lazyRoutePromise:i,handlerOverride:a,scopedContext:l}){let u,f,h=_n(e.method),p=h?"action":"loader",g=y=>{let _,b=new Promise((R,D)=>_=D);f=()=>_(),e.signal.addEventListener("abort",f);let w=R=>typeof y!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${p}" [routeId: ${t.route.id}]`)):y({request:e,params:t.params,context:l},...R!==void 0?[R]:[]),O=(async()=>{try{return{type:"data",result:await(a?a(D=>w(D)):w())}}catch(R){return{type:"error",result:R}}})();return Promise.race([O,b])};try{let y=h?t.route.action:t.route.loader;if(n||i)if(y){let _,[b]=await Promise.all([g(y).catch(w=>{_=w}),n,i]);if(_!==void 0)throw _;u=b}else{await n;let _=h?t.route.action:t.route.loader;if(_)[u]=await Promise.all([g(_),i]);else if(p==="action"){let b=new URL(e.url),w=b.pathname+b.search;throw Yn(405,{method:e.method,pathname:w,routeId:t.route.id})}else return{type:"data",result:void 0}}else if(y)u=await g(y);else{let _=new URL(e.url),b=_.pathname+_.search;throw Yn(404,{pathname:b})}}catch(y){return{type:"error",result:y}}finally{f&&e.signal.removeEventListener("abort",f)}return u}async function qM(e){let t=e.headers.get("Content-Type");return t&&/\bapplication\/json\b/.test(t)?e.body==null?null:e.json():e.text()}async function VM(e){let{result:t,type:n}=e;if(XT(t)){let i;try{i=await qM(t)}catch(a){return{type:"error",error:a}}return n==="error"?{type:"error",error:new Of(t.status,t.statusText,i),statusCode:t.status,headers:t.headers}:{type:"data",data:i,statusCode:t.status,headers:t.headers}}return n==="error"?dw(t)?t.data instanceof Error?{type:"error",error:t.data,statusCode:t.init?.status,headers:t.init?.headers?new Headers(t.init.headers):void 0}:{type:"error",error:new Of(t.init?.status||500,void 0,t.data),statusCode:$c(t)?t.status:void 0,headers:t.init?.headers?new Headers(t.init.headers):void 0}:{type:"error",error:t,statusCode:$c(t)?t.status:void 0}:dw(t)?{type:"data",data:t.data,statusCode:t.init?.status,headers:t.init?.headers?new Headers(t.init.headers):void 0}:{type:"data",data:t}}function GM(e,t,n,i,a){let l=e.headers.get("Location");if(Ue(l,"Redirects returned/thrown from loaders/actions must have a Location header"),!gv(l)){let u=i.slice(0,i.findIndex(f=>f.route.id===n)+1);l=gy(new URL(t.url),u,a,l),e.headers.set("Location",l)}return e}function aw(e,t,n){if(gv(e)){let i=e,a=i.startsWith("//")?new URL(t.protocol+i):new URL(i),l=Kn(a.pathname,n)!=null;if(a.origin===t.origin&&l)return a.pathname+a.search+a.hash}return e}function bo(e,t,n,i){let a=e.createURL(KT(t)).toString(),l={signal:n};if(i&&_n(i.formMethod)){let{formMethod:u,formEncType:f}=i;l.method=u.toUpperCase(),f==="application/json"?(l.headers=new Headers({"Content-Type":f}),l.body=JSON.stringify(i.json)):f==="text/plain"?l.body=i.text:f==="application/x-www-form-urlencoded"&&i.formData?l.body=_y(i.formData):l.body=i.formData}return new Request(a,l)}function _y(e){let t=new URLSearchParams;for(let[n,i]of e.entries())t.append(n,typeof i=="string"?i:i.name);return t}function ow(e){let t=new FormData;for(let[n,i]of e.entries())t.append(n,i);return t}function YM(e,t,n,i=!1,a=!1){let l={},u=null,f,h=!1,p={},g=n&&Nn(n[1])?n[1].error:void 0;return e.forEach(y=>{if(!(y.route.id in t))return;let _=y.route.id,b=t[_];if(Ue(!ta(b),"Cannot handle redirect results in processLoaderData"),Nn(b)){let w=b.error;if(g!==void 0&&(w=g,g=void 0),u=u||{},a)u[_]=w;else{let O=Zi(e,_);u[O.route.id]==null&&(u[O.route.id]=w)}i||(l[_]=qT),h||(h=!0,f=$c(b.error)?b.error.status:500),b.headers&&(p[_]=b.headers)}else l[_]=b.data,b.statusCode&&b.statusCode!==200&&!h&&(f=b.statusCode),b.headers&&(p[_]=b.headers)}),g!==void 0&&n&&(u={[n[0]]:g},n[2]&&(l[n[2]]=void 0)),{loaderData:l,errors:u,statusCode:f||200,loaderHeaders:p}}function lw(e,t,n,i,a,l){let{loaderData:u,errors:f}=YM(t,n,i);return a.filter(h=>!h.matches||h.matches.some(p=>p.shouldLoad)).forEach(h=>{let{key:p,match:g,controller:y}=h;if(y&&y.signal.aborted)return;let _=l[p];if(Ue(_,"Did not find corresponding fetcher result"),Nn(_)){let b=Zi(e.matches,g?.route.id);f&&f[b.route.id]||(f={...f,[b.route.id]:_.error}),e.fetchers.delete(p)}else if(ta(_))Ue(!1,"Unhandled fetcher revalidation redirect");else{let b=Qi(_.data);e.fetchers.set(p,b)}}),{loaderData:u,errors:f}}function cw(e,t,n,i){let a=Object.entries(t).filter(([,l])=>l!==qT).reduce((l,[u,f])=>(l[u]=f,l),{});for(let l of n){let u=l.route.id;if(!t.hasOwnProperty(u)&&e.hasOwnProperty(u)&&l.route.loader&&(a[u]=e[u]),i&&i.hasOwnProperty(u))break}return a}function uw(e){return e?Nn(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function Zi(e,t){return(t?e.slice(0,e.findIndex(i=>i.route.id===t)+1):[...e]).reverse().find(i=>i.route.hasErrorBoundary===!0)||e[0]}function Hd(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Yn(e,{pathname:t,routeId:n,method:i,type:a,message:l}={}){let u="Unknown Server Error",f="Unknown @remix-run/router error";return e===400?(u="Bad Request",i&&t&&n?f=`You made a ${i} request to "${t}" but did not provide a \`loader\` for route "${n}", so there is no way to handle the request.`:a==="invalid-body"&&(f="Unable to encode submission body")):e===403?(u="Forbidden",f=`Route "${n}" does not match URL "${t}"`):e===404?(u="Not Found",f=`No route matches URL "${t}"`):e===405&&(u="Method Not Allowed",i&&t&&n?f=`You made a ${i.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${n}", so there is no way to handle the request.`:i&&(f=`Invalid request method "${i.toUpperCase()}"`)),new Of(e||500,u,new Error(f),!0)}function Fd(e){let t=Object.entries(e);for(let n=t.length-1;n>=0;n--){let[i,a]=t[n];if(ta(a))return{key:i,result:a}}}function KT(e){let t=typeof e=="string"?yi(e):e;return ls({...t,hash:""})}function WM(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function QM(e){return e!=null&&typeof e=="object"&&Object.entries(e).every(([t,n])=>typeof t=="string"&&KM(n))}function KM(e){return e!=null&&typeof e=="object"&&"type"in e&&"result"in e&&(e.type==="data"||e.type==="error")}function XM(e){return XT(e.result)&&DM.has(e.result.status)}function Nn(e){return e.type==="error"}function ta(e){return(e&&e.type)==="redirect"}function dw(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function XT(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function ZM(e){return IM.has(e.toUpperCase())}function _n(e){return RM.has(e.toUpperCase())}function yv(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function hf(e,t){let n=typeof t=="string"?yi(t).search:t.search;if(e[e.length-1].route.index&&yv(n||""))return e[e.length-1];let i=BT(e);return i[i.length-1]}function fw(e){let{formMethod:t,formAction:n,formEncType:i,text:a,formData:l,json:u}=e;if(!(!t||!n||!i)){if(a!=null)return{formMethod:t,formAction:n,formEncType:i,formData:void 0,json:void 0,text:a};if(l!=null)return{formMethod:t,formAction:n,formEncType:i,formData:l,json:void 0,text:void 0};if(u!==void 0)return{formMethod:t,formAction:n,formEncType:i,formData:void 0,json:u,text:void 0}}}function Sg(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function JM(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function ic(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function ek(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function Qi(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function tk(e,t){try{let n=e.sessionStorage.getItem(FT);if(n){let i=JSON.parse(n);for(let[a,l]of Object.entries(i||{}))l&&Array.isArray(l)&&t.set(a,new Set(l||[]))}}catch{}}function nk(e,t){if(t.size>0){let n={};for(let[i,a]of t)n[i]=[...a];try{e.sessionStorage.setItem(FT,JSON.stringify(n))}catch(i){It(!1,`Failed to save applied view transitions in sessionStorage (${i}).`)}}}function rk(){let e,t,n=new Promise((i,a)=>{e=async l=>{i(l);try{await n}catch{}},t=async l=>{a(l);try{await n}catch{}}});return{promise:n,resolve:e,reject:t}}var xa=C.createContext(null);xa.displayName="DataRouter";var cu=C.createContext(null);cu.displayName="DataRouterState";C.createContext(!1);var vv=C.createContext({isTransitioning:!1});vv.displayName="ViewTransition";var ZT=C.createContext(new Map);ZT.displayName="Fetchers";var ik=C.createContext(null);ik.displayName="Await";var vr=C.createContext(null);vr.displayName="Navigation";var Eh=C.createContext(null);Eh.displayName="Location";var er=C.createContext({outlet:null,matches:[],isDataRoute:!1});er.displayName="Route";var _v=C.createContext(null);_v.displayName="RouteError";function sk(e,{relative:t}={}){Ue(Go(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=C.useContext(vr),{hash:a,pathname:l,search:u}=uu(e,{relative:t}),f=l;return n!=="/"&&(f=l==="/"?n:Ir([n,l])),i.createHref({pathname:f,search:u,hash:a})}function Go(){return C.useContext(Eh)!=null}function vi(){return Ue(Go(),"useLocation() may be used only in the context of a <Router> component."),C.useContext(Eh).location}var JT="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function eC(e){C.useContext(vr).static||C.useLayoutEffect(e)}function Ta(){let{isDataRoute:e}=C.useContext(er);return e?Sk():ak()}function ak(){Ue(Go(),"useNavigate() may be used only in the context of a <Router> component.");let e=C.useContext(xa),{basename:t,navigator:n}=C.useContext(vr),{matches:i}=C.useContext(er),{pathname:a}=vi(),l=JSON.stringify(Sh(i)),u=C.useRef(!1);return eC(()=>{u.current=!0}),C.useCallback((h,p={})=>{if(It(u.current,JT),!u.current)return;if(typeof h=="number"){n.go(h);return}let g=wh(h,JSON.parse(l),a,p.relative==="path");e==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:Ir([t,g.pathname])),(p.replace?n.replace:n.push)(g,p.state,p)},[t,n,l,a,e])}var ok=C.createContext(null);function lk(e){let t=C.useContext(er).outlet;return t&&C.createElement(ok.Provider,{value:e},t)}function ck(){let{matches:e}=C.useContext(er),t=e[e.length-1];return t?t.params:{}}function uu(e,{relative:t}={}){let{matches:n}=C.useContext(er),{pathname:i}=vi(),a=JSON.stringify(Sh(n));return C.useMemo(()=>wh(e,JSON.parse(a),i,t==="path"),[e,a,i,t])}function uk(e,t,n,i,a){Ue(Go(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=C.useContext(vr),{matches:u}=C.useContext(er),f=u[u.length-1],h=f?f.params:{},p=f?f.pathname:"/",g=f?f.pathnameBase:"/",y=f&&f.route;{let k=y&&y.path||"";tC(p,!y||k.endsWith("*")||k.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${k}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${k}"> to <Route path="${k==="/"?"*":`${k}/*`}">.`)}let _=vi(),b;b=_;let w=b.pathname||"/",O=w;if(g!=="/"){let k=g.replace(/^\//,"").split("/");O="/"+w.replace(/^\//,"").split("/").slice(k.length).join("/")}let R=Xi(e,{pathname:O});return It(y||R!=null,`No routes matched location "${b.pathname}${b.search}${b.hash}" `),It(R==null||R[R.length-1].route.element!==void 0||R[R.length-1].route.Component!==void 0||R[R.length-1].route.lazy!==void 0,`Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),mk(R&&R.map(k=>Object.assign({},k,{params:Object.assign({},h,k.params),pathname:Ir([g,l.encodeLocation?l.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?g:Ir([g,l.encodeLocation?l.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),u,n,i,a)}function dk(){let e=bk(),t=$c(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},u=null;return console.error("Error handled by React Router default ErrorBoundary:",e),u=C.createElement(C.Fragment,null,C.createElement("p",null,"💿 Hey developer 👋"),C.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",C.createElement("code",{style:l},"ErrorBoundary")," or"," ",C.createElement("code",{style:l},"errorElement")," prop on your route.")),C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:a},n):null,u)}var fk=C.createElement(dk,null),hk=class extends C.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.unstable_onError?this.props.unstable_onError(e,t):console.error("React Router caught the following error during render",e)}render(){return this.state.error!==void 0?C.createElement(er.Provider,{value:this.props.routeContext},C.createElement(_v.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function pk({routeContext:e,match:t,children:n}){let i=C.useContext(xa);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),C.createElement(er.Provider,{value:e},n)}function mk(e,t=[],n=null,i=null,a=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,u=n?.errors;if(u!=null){let p=l.findIndex(g=>g.route.id&&u?.[g.route.id]!==void 0);Ue(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,p+1))}let f=!1,h=-1;if(n)for(let p=0;p<l.length;p++){let g=l[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(h=p),g.route.id){let{loaderData:y,errors:_}=n,b=g.route.loader&&!y.hasOwnProperty(g.route.id)&&(!_||_[g.route.id]===void 0);if(g.route.lazy||b){f=!0,h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}return l.reduceRight((p,g,y)=>{let _,b=!1,w=null,O=null;n&&(_=u&&g.route.id?u[g.route.id]:void 0,w=g.route.errorElement||fk,f&&(h<0&&y===0?(tC("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,O=null):h===y&&(b=!0,O=g.route.hydrateFallbackElement||null)));let R=t.concat(l.slice(0,y+1)),D=()=>{let k;return _?k=w:b?k=O:g.route.Component?k=C.createElement(g.route.Component,null):g.route.element?k=g.route.element:k=p,C.createElement(pk,{match:g,routeContext:{outlet:p,matches:R,isDataRoute:n!=null},children:k})};return n&&(g.route.ErrorBoundary||g.route.errorElement||y===0)?C.createElement(hk,{location:n.location,revalidation:n.revalidation,component:w,error:_,children:D(),routeContext:{outlet:null,matches:R,isDataRoute:!0},unstable_onError:i}):D()},null)}function bv(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function gk(e){let t=C.useContext(xa);return Ue(t,bv(e)),t}function yk(e){let t=C.useContext(cu);return Ue(t,bv(e)),t}function vk(e){let t=C.useContext(er);return Ue(t,bv(e)),t}function Sv(e){let t=vk(e),n=t.matches[t.matches.length-1];return Ue(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function _k(){return Sv("useRouteId")}function bk(){let e=C.useContext(_v),t=yk("useRouteError"),n=Sv("useRouteError");return e!==void 0?e:t.errors?.[n]}function Sk(){let{router:e}=gk("useNavigate"),t=Sv("useNavigate"),n=C.useRef(!1);return eC(()=>{n.current=!0}),C.useCallback(async(a,l={})=>{It(n.current,JT),n.current&&(typeof a=="number"?e.navigate(a):await e.navigate(a,{fromRouteId:t,...l}))},[e,t])}var hw={};function tC(e,t,n){!t&&!hw[e]&&(hw[e]=!0,It(!1,n))}var pw={};function mw(e,t){!e&&!pw[t]&&(pw[t]=!0,console.warn(t))}function wk(e){let t={hasErrorBoundary:e.hasErrorBoundary||e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&(e.element&&It(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(t,{element:C.createElement(e.Component),Component:void 0})),e.HydrateFallback&&(e.hydrateFallbackElement&&It(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(t,{hydrateFallbackElement:C.createElement(e.HydrateFallback),HydrateFallback:void 0})),e.ErrorBoundary&&(e.errorElement&&It(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(t,{errorElement:C.createElement(e.ErrorBoundary),ErrorBoundary:void 0})),t}var Ek=["HydrateFallback","hydrateFallbackElement"],xk=class{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=i=>{this.status==="pending"&&(this.status="resolved",t(i))},this.reject=i=>{this.status==="pending"&&(this.status="rejected",n(i))}})}};function Tk({router:e,flushSync:t,unstable_onError:n}){let[i,a]=C.useState(e.state),[l,u]=C.useState(),[f,h]=C.useState({isTransitioning:!1}),[p,g]=C.useState(),[y,_]=C.useState(),[b,w]=C.useState(),O=C.useRef(new Map),R=C.useCallback(M=>{a(T=>(M.errors&&n&&Object.entries(M.errors).forEach(([P,V])=>{T.errors?.[P]!==V&&n(V)}),M))},[n]),D=C.useCallback((M,{deletedFetchers:T,flushSync:P,viewTransitionOpts:V})=>{M.fetchers.forEach((B,z)=>{B.data!==void 0&&O.current.set(z,B.data)}),T.forEach(B=>O.current.delete(B)),mw(P===!1||t!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let H=e.window!=null&&e.window.document!=null&&typeof e.window.document.startViewTransition=="function";if(mw(V==null||H,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!V||!H){t&&P?t(()=>R(M)):C.startTransition(()=>R(M));return}if(t&&P){t(()=>{y&&(p&&p.resolve(),y.skipTransition()),h({isTransitioning:!0,flushSync:!0,currentLocation:V.currentLocation,nextLocation:V.nextLocation})});let B=e.window.document.startViewTransition(()=>{t(()=>R(M))});B.finished.finally(()=>{t(()=>{g(void 0),_(void 0),u(void 0),h({isTransitioning:!1})})}),t(()=>_(B));return}y?(p&&p.resolve(),y.skipTransition(),w({state:M,currentLocation:V.currentLocation,nextLocation:V.nextLocation})):(u(M),h({isTransitioning:!0,flushSync:!1,currentLocation:V.currentLocation,nextLocation:V.nextLocation}))},[e.window,t,y,p,R]);C.useLayoutEffect(()=>e.subscribe(D),[e,D]),C.useEffect(()=>{f.isTransitioning&&!f.flushSync&&g(new xk)},[f]),C.useEffect(()=>{if(p&&l&&e.window){let M=l,T=p.promise,P=e.window.document.startViewTransition(async()=>{C.startTransition(()=>R(M)),await T});P.finished.finally(()=>{g(void 0),_(void 0),u(void 0),h({isTransitioning:!1})}),_(P)}},[l,p,e.window,R]),C.useEffect(()=>{p&&l&&i.location.key===l.location.key&&p.resolve()},[p,y,i.location,l]),C.useEffect(()=>{!f.isTransitioning&&b&&(u(b.state),h({isTransitioning:!0,flushSync:!1,currentLocation:b.currentLocation,nextLocation:b.nextLocation}),w(void 0))},[f.isTransitioning,b]);let k=C.useMemo(()=>({createHref:e.createHref,encodeLocation:e.encodeLocation,go:M=>e.navigate(M),push:(M,T,P)=>e.navigate(M,{state:T,preventScrollReset:P?.preventScrollReset}),replace:(M,T,P)=>e.navigate(M,{replace:!0,state:T,preventScrollReset:P?.preventScrollReset})}),[e]),x=e.basename||"/",A=C.useMemo(()=>({router:e,navigator:k,static:!1,basename:x,unstable_onError:n}),[e,k,x,n]);return C.createElement(C.Fragment,null,C.createElement(xa.Provider,{value:A},C.createElement(cu.Provider,{value:i},C.createElement(ZT.Provider,{value:O.current},C.createElement(vv.Provider,{value:f},C.createElement(Ik,{basename:x,location:i.location,navigationType:i.historyAction,navigator:k},C.createElement(Ck,{routes:e.routes,future:e.future,state:i,unstable_onError:n})))))),null)}var Ck=C.memo(Rk);function Rk({routes:e,future:t,state:n,unstable_onError:i}){return uk(e,void 0,n,i,t)}function wv({to:e,replace:t,state:n,relative:i}){Ue(Go(),"<Navigate> may be used only in the context of a <Router> component.");let{static:a}=C.useContext(vr);It(!a,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=C.useContext(er),{pathname:u}=vi(),f=Ta(),h=wh(e,Sh(l),u,i==="path"),p=JSON.stringify(h);return C.useEffect(()=>{f(JSON.parse(p),{replace:t,state:n,relative:i})},[f,p,i,t,n]),null}function Ak(e){return lk(e.context)}function ar(e){Ue(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ik({basename:e="/",children:t=null,location:n,navigationType:i="POP",navigator:a,static:l=!1}){Ue(!Go(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=e.replace(/^\/*/,"/"),f=C.useMemo(()=>({basename:u,navigator:a,static:l,future:{}}),[u,a,l]);typeof n=="string"&&(n=yi(n));let{pathname:h="/",search:p="",hash:g="",state:y=null,key:_="default"}=n,b=C.useMemo(()=>{let w=Kn(h,u);return w==null?null:{location:{pathname:w,search:p,hash:g,state:y,key:_},navigationType:i}},[u,h,p,g,y,_,i]);return It(b!=null,`<Router basename="${u}"> is not able to match the URL "${h}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:C.createElement(vr.Provider,{value:f},C.createElement(Eh.Provider,{children:t,value:b}))}function by(e,t=[]){let n=[];return C.Children.forEach(e,(i,a)=>{if(!C.isValidElement(i))return;let l=[...t,a];if(i.type===C.Fragment){n.push.apply(n,by(i.props.children,l));return}Ue(i.type===ar,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ue(!i.props.index||!i.props.children,"An index route cannot have child routes.");let u={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(u.children=by(i.props.children,l)),n.push(u)}),n}var Dk=by,pf="get",mf="application/x-www-form-urlencoded";function xh(e){return e!=null&&typeof e.tagName=="string"}function Ok(e){return xh(e)&&e.tagName.toLowerCase()==="button"}function Nk(e){return xh(e)&&e.tagName.toLowerCase()==="form"}function Mk(e){return xh(e)&&e.tagName.toLowerCase()==="input"}function kk(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Lk(e,t){return e.button===0&&(!t||t==="_self")&&!kk(e)}var qd=null;function Pk(){if(qd===null)try{new FormData(document.createElement("form"),0),qd=!1}catch{qd=!0}return qd}var jk=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function wg(e){return e!=null&&!jk.has(e)?(It(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${mf}"`),null):e}function Uk(e,t){let n,i,a,l,u;if(Nk(e)){let f=e.getAttribute("action");i=f?Kn(f,t):null,n=e.getAttribute("method")||pf,a=wg(e.getAttribute("enctype"))||mf,l=new FormData(e)}else if(Ok(e)||Mk(e)&&(e.type==="submit"||e.type==="image")){let f=e.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=e.getAttribute("formaction")||f.getAttribute("action");if(i=h?Kn(h,t):null,n=e.getAttribute("formmethod")||f.getAttribute("method")||pf,a=wg(e.getAttribute("formenctype"))||wg(f.getAttribute("enctype"))||mf,l=new FormData(f,e),!Pk()){let{name:p,type:g,value:y}=e;if(g==="image"){let _=p?`${p}.`:"";l.append(`${_}x`,"0"),l.append(`${_}y`,"0")}else p&&l.append(p,y)}}else{if(xh(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=pf,i=null,a=mf,u=e}return l&&a==="text/plain"&&(u=l,l=void 0),{action:i,method:n.toLowerCase(),encType:a,formData:l,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ev(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function $k(e,t,n){let i=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return i.pathname==="/"?i.pathname=`_root.${n}`:t&&Kn(i.pathname,t)==="/"?i.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${n}`,i}async function zk(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Bk(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Hk(e,t,n){let i=await Promise.all(e.map(async a=>{let l=t.routes[a.route.id];if(l){let u=await zk(l,n);return u.links?u.links():[]}return[]}));return Gk(i.flat(1).filter(Bk).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function gw(e,t,n,i,a,l){let u=(h,p)=>n[p]?h.route.id!==n[p].route.id:!0,f=(h,p)=>n[p].pathname!==h.pathname||n[p].route.path?.endsWith("*")&&n[p].params["*"]!==h.params["*"];return l==="assets"?t.filter((h,p)=>u(h,p)||f(h,p)):l==="data"?t.filter((h,p)=>{let g=i.routes[h.route.id];if(!g||!g.hasLoader)return!1;if(u(h,p)||f(h,p))return!0;if(h.route.shouldRevalidate){let y=h.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function Fk(e,t,{includeHydrateFallback:n}={}){return qk(e.map(i=>{let a=t.routes[i.route.id];if(!a)return[];let l=[a.module];return a.clientActionModule&&(l=l.concat(a.clientActionModule)),a.clientLoaderModule&&(l=l.concat(a.clientLoaderModule)),n&&a.hydrateFallbackModule&&(l=l.concat(a.hydrateFallbackModule)),a.imports&&(l=l.concat(a.imports)),l}).flat(1))}function qk(e){return[...new Set(e)]}function Vk(e){let t={},n=Object.keys(e).sort();for(let i of n)t[i]=e[i];return t}function Gk(e,t){let n=new Set;return new Set(t),e.reduce((i,a)=>{let l=JSON.stringify(Vk(a));return n.has(l)||(n.add(l),i.push({key:l,link:a})),i},[])}function nC(){let e=C.useContext(xa);return Ev(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Yk(){let e=C.useContext(cu);return Ev(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var xv=C.createContext(void 0);xv.displayName="FrameworkContext";function rC(){let e=C.useContext(xv);return Ev(e,"You must render this element inside a <HydratedRouter> element"),e}function Wk(e,t){let n=C.useContext(xv),[i,a]=C.useState(!1),[l,u]=C.useState(!1),{onFocus:f,onBlur:h,onMouseEnter:p,onMouseLeave:g,onTouchStart:y}=t,_=C.useRef(null);C.useEffect(()=>{if(e==="render"&&u(!0),e==="viewport"){let O=D=>{D.forEach(k=>{u(k.isIntersecting)})},R=new IntersectionObserver(O,{threshold:.5});return _.current&&R.observe(_.current),()=>{R.disconnect()}}},[e]),C.useEffect(()=>{if(i){let O=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(O)}}},[i]);let b=()=>{a(!0)},w=()=>{a(!1),u(!1)};return n?e!=="intent"?[l,_,{}]:[l,_,{onFocus:sc(f,b),onBlur:sc(h,w),onMouseEnter:sc(p,b),onMouseLeave:sc(g,w),onTouchStart:sc(y,b)}]:[!1,_,{}]}function sc(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Qk({page:e,...t}){let{router:n}=nC(),i=C.useMemo(()=>Xi(n.routes,e,n.basename),[n.routes,e,n.basename]);return i?C.createElement(Xk,{page:e,matches:i,...t}):null}function Kk(e){let{manifest:t,routeModules:n}=rC(),[i,a]=C.useState([]);return C.useEffect(()=>{let l=!1;return Hk(e,t,n).then(u=>{l||a(u)}),()=>{l=!0}},[e,t,n]),i}function Xk({page:e,matches:t,...n}){let i=vi(),{manifest:a,routeModules:l}=rC(),{basename:u}=nC(),{loaderData:f,matches:h}=Yk(),p=C.useMemo(()=>gw(e,t,h,a,i,"data"),[e,t,h,a,i]),g=C.useMemo(()=>gw(e,t,h,a,i,"assets"),[e,t,h,a,i]),y=C.useMemo(()=>{if(e===i.pathname+i.search+i.hash)return[];let w=new Set,O=!1;if(t.forEach(D=>{let k=a.routes[D.route.id];!k||!k.hasLoader||(!p.some(x=>x.route.id===D.route.id)&&D.route.id in f&&l[D.route.id]?.shouldRevalidate||k.hasClientLoader?O=!0:w.add(D.route.id))}),w.size===0)return[];let R=$k(e,u,"data");return O&&w.size>0&&R.searchParams.set("_routes",t.filter(D=>w.has(D.route.id)).map(D=>D.route.id).join(",")),[R.pathname+R.search]},[u,f,i,a,p,t,e,l]),_=C.useMemo(()=>Fk(g,a),[g,a]),b=Kk(g);return C.createElement(C.Fragment,null,y.map(w=>C.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...n})),_.map(w=>C.createElement("link",{key:w,rel:"modulepreload",href:w,...n})),b.map(({key:w,link:O})=>C.createElement("link",{key:w,nonce:n.nonce,...O})))}function Zk(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var iC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{iC&&(window.__reactRouterVersion="7.9.1")}catch{}function Jk(e,t){return LM({basename:t?.basename,getContext:t?.getContext,future:t?.future,history:eM({window:t?.window}),hydrationData:e2(),routes:e,mapRouteProperties:wk,hydrationRouteProperties:Ek,dataStrategy:t?.dataStrategy,patchRoutesOnNavigation:t?.patchRoutesOnNavigation,window:t?.window}).initialize()}function e2(){let e=window?.__staticRouterHydrationData;return e&&e.errors&&(e={...e,errors:t2(e.errors)}),e}function t2(e){if(!e)return null;let t=Object.entries(e),n={};for(let[i,a]of t)if(a&&a.__type==="RouteErrorResponse")n[i]=new Of(a.status,a.statusText,a.data,a.internal===!0);else if(a&&a.__type==="Error"){if(a.__subType){let l=window[a.__subType];if(typeof l=="function")try{let u=new l(a.message);u.stack="",n[i]=u}catch{}}if(n[i]==null){let l=new Error(a.message);l.stack="",n[i]=l}}else n[i]=a;return n}var sC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ms=C.forwardRef(function({onClick:t,discover:n="render",prefetch:i="none",relative:a,reloadDocument:l,replace:u,state:f,target:h,to:p,preventScrollReset:g,viewTransition:y,..._},b){let{basename:w}=C.useContext(vr),O=typeof p=="string"&&sC.test(p),R,D=!1;if(typeof p=="string"&&O&&(R=p,iC))try{let H=new URL(window.location.href),B=p.startsWith("//")?new URL(H.protocol+p):new URL(p),z=Kn(B.pathname,w);B.origin===H.origin&&z!=null?p=z+B.search+B.hash:D=!0}catch{It(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let k=sk(p,{relative:a}),[x,A,M]=Wk(i,_),T=i2(p,{replace:u,state:f,target:h,preventScrollReset:g,relative:a,viewTransition:y});function P(H){t&&t(H),H.defaultPrevented||T(H)}let V=C.createElement("a",{..._,...M,href:R||k,onClick:D||l?t:P,ref:Zk(b,A),target:h,"data-discover":!O&&n==="render"?"true":void 0});return x&&!O?C.createElement(C.Fragment,null,V,C.createElement(Qk,{page:k})):V});ms.displayName="Link";var Tv=C.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:i="",end:a=!1,style:l,to:u,viewTransition:f,children:h,...p},g){let y=uu(u,{relative:p.relative}),_=vi(),b=C.useContext(cu),{navigator:w,basename:O}=C.useContext(vr),R=b!=null&&c2(y)&&f===!0,D=w.encodeLocation?w.encodeLocation(y).pathname:y.pathname,k=_.pathname,x=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;n||(k=k.toLowerCase(),x=x?x.toLowerCase():null,D=D.toLowerCase()),x&&O&&(x=Kn(x,O)||x);const A=D!=="/"&&D.endsWith("/")?D.length-1:D.length;let M=k===D||!a&&k.startsWith(D)&&k.charAt(A)==="/",T=x!=null&&(x===D||!a&&x.startsWith(D)&&x.charAt(D.length)==="/"),P={isActive:M,isPending:T,isTransitioning:R},V=M?t:void 0,H;typeof i=="function"?H=i(P):H=[i,M?"active":null,T?"pending":null,R?"transitioning":null].filter(Boolean).join(" ");let B=typeof l=="function"?l(P):l;return C.createElement(ms,{...p,"aria-current":V,className:H,ref:g,style:B,to:u,viewTransition:f},typeof h=="function"?h(P):h)});Tv.displayName="NavLink";var n2=C.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:i,replace:a,state:l,method:u=pf,action:f,onSubmit:h,relative:p,preventScrollReset:g,viewTransition:y,..._},b)=>{let w=o2(),O=l2(f,{relative:p}),R=u.toLowerCase()==="get"?"get":"post",D=typeof f=="string"&&sC.test(f),k=x=>{if(h&&h(x),x.defaultPrevented)return;x.preventDefault();let A=x.nativeEvent.submitter,M=A?.getAttribute("formmethod")||u;w(A||x.currentTarget,{fetcherKey:t,method:M,navigate:n,replace:a,state:l,relative:p,preventScrollReset:g,viewTransition:y})};return C.createElement("form",{ref:b,method:R,action:O,onSubmit:i?h:k,..._,"data-discover":!D&&e==="render"?"true":void 0})});n2.displayName="Form";function r2(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function aC(e){let t=C.useContext(xa);return Ue(t,r2(e)),t}function i2(e,{target:t,replace:n,state:i,preventScrollReset:a,relative:l,viewTransition:u}={}){let f=Ta(),h=vi(),p=uu(e,{relative:l});return C.useCallback(g=>{if(Lk(g,t)){g.preventDefault();let y=n!==void 0?n:ls(h)===ls(p);f(e,{replace:y,state:i,preventScrollReset:a,relative:l,viewTransition:u})}},[h,f,p,n,i,t,e,a,l,u])}var s2=0,a2=()=>`__${String(++s2)}__`;function o2(){let{router:e}=aC("useSubmit"),{basename:t}=C.useContext(vr),n=_k();return C.useCallback(async(i,a={})=>{let{action:l,method:u,encType:f,formData:h,body:p}=Uk(i,t);if(a.navigate===!1){let g=a.fetcherKey||a2();await e.fetch(g,n,a.action||l,{preventScrollReset:a.preventScrollReset,formData:h,body:p,formMethod:a.method||u,formEncType:a.encType||f,flushSync:a.flushSync})}else await e.navigate(a.action||l,{preventScrollReset:a.preventScrollReset,formData:h,body:p,formMethod:a.method||u,formEncType:a.encType||f,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[e,t,n])}function l2(e,{relative:t}={}){let{basename:n}=C.useContext(vr),i=C.useContext(er);Ue(i,"useFormAction must be used inside a RouteContext");let[a]=i.matches.slice(-1),l={...uu(e||".",{relative:t})},u=vi();if(e==null){l.search=u.search;let f=new URLSearchParams(l.search),h=f.getAll("index");if(h.some(g=>g==="")){f.delete("index"),h.filter(y=>y).forEach(y=>f.append("index",y));let g=f.toString();l.search=g?`?${g}`:""}}return(!e||e===".")&&a.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(l.pathname=l.pathname==="/"?n:Ir([n,l.pathname])),ls(l)}function c2(e,{relative:t}={}){let n=C.useContext(vv);Ue(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=aC("useViewTransitionState"),a=uu(e,{relative:t});if(!n.isTransitioning)return!1;let l=Kn(n.currentLocation.pathname,i)||n.currentLocation.pathname,u=Kn(n.nextLocation.pathname,i)||n.nextLocation.pathname;return Df(a.pathname,u)!=null||Df(a.pathname,l)!=null}var u2=DT();function d2(e){return C.createElement(Tk,{flushSync:u2.flushSync,...e})}var sn=function(){return sn=Object.assign||function(t){for(var n,i=1,a=arguments.length;i<a;i++){n=arguments[i];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},sn.apply(this,arguments)};function Mf(e,t,n){if(n||arguments.length===2)for(var i=0,a=t.length,l;i<a;i++)(l||!(i in t))&&(l||(l=Array.prototype.slice.call(t,0,i)),l[i]=t[i]);return e.concat(l||Array.prototype.slice.call(t))}var mt="-ms-",xc="-moz-",et="-webkit-",oC="comm",Th="rule",Cv="decl",f2="@import",lC="@keyframes",h2="@layer",cC=Math.abs,Rv=String.fromCharCode,Sy=Object.assign;function p2(e,t){return qt(e,0)^45?(((t<<2^qt(e,0))<<2^qt(e,1))<<2^qt(e,2))<<2^qt(e,3):0}function uC(e){return e.trim()}function ri(e,t){return(e=t.exec(e))?e[0]:e}function Be(e,t,n){return e.replace(t,n)}function gf(e,t,n){return e.indexOf(t,n)}function qt(e,t){return e.charCodeAt(t)|0}function No(e,t,n){return e.slice(t,n)}function Rr(e){return e.length}function dC(e){return e.length}function _c(e,t){return t.push(e),e}function m2(e,t){return e.map(t).join("")}function yw(e,t){return e.filter(function(n){return!ri(n,t)})}var Ch=1,Mo=1,fC=0,Xn=0,Lt=0,Yo="";function Rh(e,t,n,i,a,l,u,f){return{value:e,root:t,parent:n,type:i,props:a,children:l,line:Ch,column:Mo,length:u,return:"",siblings:f}}function Ki(e,t){return Sy(Rh("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function mo(e){for(;e.root;)e=Ki(e.root,{children:[e]});_c(e,e.siblings)}function g2(){return Lt}function y2(){return Lt=Xn>0?qt(Yo,--Xn):0,Mo--,Lt===10&&(Mo=1,Ch--),Lt}function dr(){return Lt=Xn<fC?qt(Yo,Xn++):0,Mo++,Lt===10&&(Mo=1,Ch++),Lt}function aa(){return qt(Yo,Xn)}function yf(){return Xn}function Ah(e,t){return No(Yo,e,t)}function wy(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function v2(e){return Ch=Mo=1,fC=Rr(Yo=e),Xn=0,[]}function _2(e){return Yo="",e}function Eg(e){return uC(Ah(Xn-1,Ey(e===91?e+2:e===40?e+1:e)))}function b2(e){for(;(Lt=aa())&&Lt<33;)dr();return wy(e)>2||wy(Lt)>3?"":" "}function S2(e,t){for(;--t&&dr()&&!(Lt<48||Lt>102||Lt>57&&Lt<65||Lt>70&&Lt<97););return Ah(e,yf()+(t<6&&aa()==32&&dr()==32))}function Ey(e){for(;dr();)switch(Lt){case e:return Xn;case 34:case 39:e!==34&&e!==39&&Ey(Lt);break;case 40:e===41&&Ey(e);break;case 92:dr();break}return Xn}function w2(e,t){for(;dr()&&e+Lt!==57;)if(e+Lt===84&&aa()===47)break;return"/*"+Ah(t,Xn-1)+"*"+Rv(e===47?e:dr())}function E2(e){for(;!wy(aa());)dr();return Ah(e,Xn)}function x2(e){return _2(vf("",null,null,null,[""],e=v2(e),0,[0],e))}function vf(e,t,n,i,a,l,u,f,h){for(var p=0,g=0,y=u,_=0,b=0,w=0,O=1,R=1,D=1,k=0,x="",A=a,M=l,T=i,P=x;R;)switch(w=k,k=dr()){case 40:if(w!=108&&qt(P,y-1)==58){gf(P+=Be(Eg(k),"&","&\f"),"&\f",cC(p?f[p-1]:0))!=-1&&(D=-1);break}case 34:case 39:case 91:P+=Eg(k);break;case 9:case 10:case 13:case 32:P+=b2(w);break;case 92:P+=S2(yf()-1,7);continue;case 47:switch(aa()){case 42:case 47:_c(T2(w2(dr(),yf()),t,n,h),h);break;default:P+="/"}break;case 123*O:f[p++]=Rr(P)*D;case 125*O:case 59:case 0:switch(k){case 0:case 125:R=0;case 59+g:D==-1&&(P=Be(P,/\f/g,"")),b>0&&Rr(P)-y&&_c(b>32?_w(P+";",i,n,y-1,h):_w(Be(P," ","")+";",i,n,y-2,h),h);break;case 59:P+=";";default:if(_c(T=vw(P,t,n,p,g,a,f,x,A=[],M=[],y,l),l),k===123)if(g===0)vf(P,t,T,T,A,l,y,f,M);else switch(_===99&&qt(P,3)===110?100:_){case 100:case 108:case 109:case 115:vf(e,T,T,i&&_c(vw(e,T,T,0,0,a,f,x,a,A=[],y,M),M),a,M,y,f,i?A:M);break;default:vf(P,T,T,T,[""],M,0,f,M)}}p=g=b=0,O=D=1,x=P="",y=u;break;case 58:y=1+Rr(P),b=w;default:if(O<1){if(k==123)--O;else if(k==125&&O++==0&&y2()==125)continue}switch(P+=Rv(k),k*O){case 38:D=g>0?1:(P+="\f",-1);break;case 44:f[p++]=(Rr(P)-1)*D,D=1;break;case 64:aa()===45&&(P+=Eg(dr())),_=aa(),g=y=Rr(x=P+=E2(yf())),k++;break;case 45:w===45&&Rr(P)==2&&(O=0)}}return l}function vw(e,t,n,i,a,l,u,f,h,p,g,y){for(var _=a-1,b=a===0?l:[""],w=dC(b),O=0,R=0,D=0;O<i;++O)for(var k=0,x=No(e,_+1,_=cC(R=u[O])),A=e;k<w;++k)(A=uC(R>0?b[k]+" "+x:Be(x,/&\f/g,b[k])))&&(h[D++]=A);return Rh(e,t,n,a===0?Th:f,h,p,g,y)}function T2(e,t,n,i){return Rh(e,t,n,oC,Rv(g2()),No(e,2,-2),0,i)}function _w(e,t,n,i,a){return Rh(e,t,n,Cv,No(e,0,i),No(e,i+1,-1),i,a)}function hC(e,t,n){switch(p2(e,t)){case 5103:return et+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return et+e+e;case 4789:return xc+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return et+e+xc+e+mt+e+e;case 5936:switch(qt(e,t+11)){case 114:return et+e+mt+Be(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return et+e+mt+Be(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return et+e+mt+Be(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return et+e+mt+e+e;case 6165:return et+e+mt+"flex-"+e+e;case 5187:return et+e+Be(e,/(\w+).+(:[^]+)/,et+"box-$1$2"+mt+"flex-$1$2")+e;case 5443:return et+e+mt+"flex-item-"+Be(e,/flex-|-self/g,"")+(ri(e,/flex-|baseline/)?"":mt+"grid-row-"+Be(e,/flex-|-self/g,""))+e;case 4675:return et+e+mt+"flex-line-pack"+Be(e,/align-content|flex-|-self/g,"")+e;case 5548:return et+e+mt+Be(e,"shrink","negative")+e;case 5292:return et+e+mt+Be(e,"basis","preferred-size")+e;case 6060:return et+"box-"+Be(e,"-grow","")+et+e+mt+Be(e,"grow","positive")+e;case 4554:return et+Be(e,/([^-])(transform)/g,"$1"+et+"$2")+e;case 6187:return Be(Be(Be(e,/(zoom-|grab)/,et+"$1"),/(image-set)/,et+"$1"),e,"")+e;case 5495:case 3959:return Be(e,/(image-set\([^]*)/,et+"$1$`$1");case 4968:return Be(Be(e,/(.+:)(flex-)?(.*)/,et+"box-pack:$3"+mt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+et+e+e;case 4200:if(!ri(e,/flex-|baseline/))return mt+"grid-column-align"+No(e,t)+e;break;case 2592:case 3360:return mt+Be(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(i,a){return t=a,ri(i.props,/grid-\w+-end/)})?~gf(e+(n=n[t].value),"span",0)?e:mt+Be(e,"-start","")+e+mt+"grid-row-span:"+(~gf(n,"span",0)?ri(n,/\d+/):+ri(n,/\d+/)-+ri(e,/\d+/))+";":mt+Be(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(i){return ri(i.props,/grid-\w+-start/)})?e:mt+Be(Be(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Be(e,/(.+)-inline(.+)/,et+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Rr(e)-1-t>6)switch(qt(e,t+1)){case 109:if(qt(e,t+4)!==45)break;case 102:return Be(e,/(.+:)(.+)-([^]+)/,"$1"+et+"$2-$3$1"+xc+(qt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~gf(e,"stretch",0)?hC(Be(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Be(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,a,l,u,f,h,p){return mt+a+":"+l+p+(u?mt+a+"-span:"+(f?h:+h-+l)+p:"")+e});case 4949:if(qt(e,t+6)===121)return Be(e,":",":"+et)+e;break;case 6444:switch(qt(e,qt(e,14)===45?18:11)){case 120:return Be(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+et+(qt(e,14)===45?"inline-":"")+"box$3$1"+et+"$2$3$1"+mt+"$2box$3")+e;case 100:return Be(e,":",":"+mt)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Be(e,"scroll-","scroll-snap-")+e}return e}function kf(e,t){for(var n="",i=0;i<e.length;i++)n+=t(e[i],i,e,t)||"";return n}function C2(e,t,n,i){switch(e.type){case h2:if(e.children.length)break;case f2:case Cv:return e.return=e.return||e.value;case oC:return"";case lC:return e.return=e.value+"{"+kf(e.children,i)+"}";case Th:if(!Rr(e.value=e.props.join(",")))return""}return Rr(n=kf(e.children,i))?e.return=e.value+"{"+n+"}":""}function R2(e){var t=dC(e);return function(n,i,a,l){for(var u="",f=0;f<t;f++)u+=e[f](n,i,a,l)||"";return u}}function A2(e){return function(t){t.root||(t=t.return)&&e(t)}}function I2(e,t,n,i){if(e.length>-1&&!e.return)switch(e.type){case Cv:e.return=hC(e.value,e.length,n);return;case lC:return kf([Ki(e,{value:Be(e.value,"@","@"+et)})],i);case Th:if(e.length)return m2(n=e.props,function(a){switch(ri(a,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":mo(Ki(e,{props:[Be(a,/:(read-\w+)/,":"+xc+"$1")]})),mo(Ki(e,{props:[a]})),Sy(e,{props:yw(n,i)});break;case"::placeholder":mo(Ki(e,{props:[Be(a,/:(plac\w+)/,":"+et+"input-$1")]})),mo(Ki(e,{props:[Be(a,/:(plac\w+)/,":"+xc+"$1")]})),mo(Ki(e,{props:[Be(a,/:(plac\w+)/,mt+"input-$1")]})),mo(Ki(e,{props:[a]})),Sy(e,{props:yw(n,i)});break}return""})}}var D2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},On={},ko=typeof process<"u"&&On!==void 0&&(On.REACT_APP_SC_ATTR||On.SC_ATTR)||"data-styled",pC="active",mC="data-styled-version",Ih="6.1.19",Av=`/*!sc*/
`,Lf=typeof window<"u"&&typeof document<"u",O2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&On!==void 0&&On.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&On.REACT_APP_SC_DISABLE_SPEEDY!==""?On.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&On.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&On!==void 0&&On.SC_DISABLE_SPEEDY!==void 0&&On.SC_DISABLE_SPEEDY!==""&&On.SC_DISABLE_SPEEDY!=="false"&&On.SC_DISABLE_SPEEDY),Dh=Object.freeze([]),Lo=Object.freeze({});function N2(e,t,n){return n===void 0&&(n=Lo),e.theme!==n.theme&&e.theme||t||n.theme}var gC=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),M2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,k2=/(^-|-$)/g;function bw(e){return e.replace(M2,"-").replace(k2,"")}var L2=/(a)(d)/gi,Vd=52,Sw=function(e){return String.fromCharCode(e+(e>25?39:97))};function xy(e){var t,n="";for(t=Math.abs(e);t>Vd;t=t/Vd|0)n=Sw(t%Vd)+n;return(Sw(t%Vd)+n).replace(L2,"$1-$2")}var xg,yC=5381,So=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},vC=function(e){return So(yC,e)};function P2(e){return xy(vC(e)>>>0)}function j2(e){return e.displayName||e.name||"Component"}function Tg(e){return typeof e=="string"&&!0}var _C=typeof Symbol=="function"&&Symbol.for,bC=_C?Symbol.for("react.memo"):60115,U2=_C?Symbol.for("react.forward_ref"):60112,$2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},z2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},SC={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},B2=((xg={})[U2]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},xg[bC]=SC,xg);function ww(e){return("type"in(t=e)&&t.type.$$typeof)===bC?SC:"$$typeof"in e?B2[e.$$typeof]:$2;var t}var H2=Object.defineProperty,F2=Object.getOwnPropertyNames,Ew=Object.getOwnPropertySymbols,q2=Object.getOwnPropertyDescriptor,V2=Object.getPrototypeOf,xw=Object.prototype;function wC(e,t,n){if(typeof t!="string"){if(xw){var i=V2(t);i&&i!==xw&&wC(e,i,n)}var a=F2(t);Ew&&(a=a.concat(Ew(t)));for(var l=ww(e),u=ww(t),f=0;f<a.length;++f){var h=a[f];if(!(h in z2||n&&n[h]||u&&h in u||l&&h in l)){var p=q2(t,h);try{H2(e,h,p)}catch{}}}}return e}function ua(e){return typeof e=="function"}function Iv(e){return typeof e=="object"&&"styledComponentId"in e}function na(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Tw(e,t){if(e.length===0)return"";for(var n=e[0],i=1;i<e.length;i++)n+=e[i];return n}function zc(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ty(e,t,n){if(n===void 0&&(n=!1),!n&&!zc(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var i=0;i<t.length;i++)e[i]=Ty(e[i],t[i]);else if(zc(t))for(var i in t)e[i]=Ty(e[i],t[i]);return e}function Dv(e,t){Object.defineProperty(e,"toString",{value:t})}function da(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var G2=(function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,i=0;i<t;i++)n+=this.groupSizes[i];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var i=this.groupSizes,a=i.length,l=a;t>=l;)if((l<<=1)<0)throw da(16,"".concat(t));this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var u=a;u<l;u++)this.groupSizes[u]=0}for(var f=this.indexOfGroup(t+1),h=(u=0,n.length);u<h;u++)this.tag.insertRule(f,n[u])&&(this.groupSizes[t]++,f++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],i=this.indexOfGroup(t),a=i+n;this.groupSizes[t]=0;for(var l=i;l<a;l++)this.tag.deleteRule(i)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var i=this.groupSizes[t],a=this.indexOfGroup(t),l=a+i,u=a;u<l;u++)n+="".concat(this.tag.getRule(u)).concat(Av);return n},e})(),_f=new Map,Pf=new Map,bf=1,Gd=function(e){if(_f.has(e))return _f.get(e);for(;Pf.has(bf);)bf++;var t=bf++;return _f.set(e,t),Pf.set(t,e),t},Y2=function(e,t){bf=t+1,_f.set(e,t),Pf.set(t,e)},W2="style[".concat(ko,"][").concat(mC,'="').concat(Ih,'"]'),Q2=new RegExp("^".concat(ko,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),K2=function(e,t,n){for(var i,a=n.split(","),l=0,u=a.length;l<u;l++)(i=a[l])&&e.registerName(t,i)},X2=function(e,t){for(var n,i=((n=t.textContent)!==null&&n!==void 0?n:"").split(Av),a=[],l=0,u=i.length;l<u;l++){var f=i[l].trim();if(f){var h=f.match(Q2);if(h){var p=0|parseInt(h[1],10),g=h[2];p!==0&&(Y2(g,p),K2(e,g,h[3]),e.getTag().insertRules(p,a)),a.length=0}else a.push(f)}}},Cw=function(e){for(var t=document.querySelectorAll(W2),n=0,i=t.length;n<i;n++){var a=t[n];a&&a.getAttribute(ko)!==pC&&(X2(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function Z2(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var EC=function(e){var t=document.head,n=e||t,i=document.createElement("style"),a=(function(f){var h=Array.from(f.querySelectorAll("style[".concat(ko,"]")));return h[h.length-1]})(n),l=a!==void 0?a.nextSibling:null;i.setAttribute(ko,pC),i.setAttribute(mC,Ih);var u=Z2();return u&&i.setAttribute("nonce",u),n.insertBefore(i,l),i},J2=(function(){function e(t){this.element=EC(t),this.element.appendChild(document.createTextNode("")),this.sheet=(function(n){if(n.sheet)return n.sheet;for(var i=document.styleSheets,a=0,l=i.length;a<l;a++){var u=i[a];if(u.ownerNode===n)return u}throw da(17)})(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e})(),eL=(function(){function e(t){this.element=EC(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var i=document.createTextNode(n);return this.element.insertBefore(i,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e})(),tL=(function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e})(),Rw=Lf,nL={isServer:!Lf,useCSSOMInjection:!O2},xC=(function(){function e(t,n,i){t===void 0&&(t=Lo),n===void 0&&(n={});var a=this;this.options=sn(sn({},nL),t),this.gs=n,this.names=new Map(i),this.server=!!t.isServer,!this.server&&Lf&&Rw&&(Rw=!1,Cw(this)),Dv(this,function(){return(function(l){for(var u=l.getTag(),f=u.length,h="",p=function(y){var _=(function(D){return Pf.get(D)})(y);if(_===void 0)return"continue";var b=l.names.get(_),w=u.getGroup(y);if(b===void 0||!b.size||w.length===0)return"continue";var O="".concat(ko,".g").concat(y,'[id="').concat(_,'"]'),R="";b!==void 0&&b.forEach(function(D){D.length>0&&(R+="".concat(D,","))}),h+="".concat(w).concat(O,'{content:"').concat(R,'"}').concat(Av)},g=0;g<f;g++)p(g);return h})(a)})}return e.registerId=function(t){return Gd(t)},e.prototype.rehydrate=function(){!this.server&&Lf&&Cw(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(sn(sn({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=(function(n){var i=n.useCSSOMInjection,a=n.target;return n.isServer?new tL(a):i?new J2(a):new eL(a)})(this.options),new G2(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Gd(t),this.names.has(t))this.names.get(t).add(n);else{var i=new Set;i.add(n),this.names.set(t,i)}},e.prototype.insertRules=function(t,n,i){this.registerName(t,n),this.getTag().insertRules(Gd(t),i)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Gd(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e})(),rL=/&/g,iL=/^\s*\/\/.*$/gm;function TC(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(i){return"".concat(t," ").concat(i)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=TC(n.children,t)),n})}function sL(e){var t,n,i,a=Lo,l=a.options,u=l===void 0?Lo:l,f=a.plugins,h=f===void 0?Dh:f,p=function(_,b,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):_},g=h.slice();g.push(function(_){_.type===Th&&_.value.includes("&")&&(_.props[0]=_.props[0].replace(rL,n).replace(i,p))}),u.prefix&&g.push(I2),g.push(C2);var y=function(_,b,w,O){b===void 0&&(b=""),w===void 0&&(w=""),O===void 0&&(O="&"),t=O,n=b,i=new RegExp("\\".concat(n,"\\b"),"g");var R=_.replace(iL,""),D=x2(w||b?"".concat(w," ").concat(b," { ").concat(R," }"):R);u.namespace&&(D=TC(D,u.namespace));var k=[];return kf(D,R2(g.concat(A2(function(x){return k.push(x)})))),k};return y.hash=h.length?h.reduce(function(_,b){return b.name||da(15),So(_,b.name)},yC).toString():"",y}var aL=new xC,Cy=sL(),CC=ca.createContext({shouldForwardProp:void 0,styleSheet:aL,stylis:Cy});CC.Consumer;ca.createContext(void 0);function Aw(){return C.useContext(CC)}var oL=(function(){function e(t,n){var i=this;this.inject=function(a,l){l===void 0&&(l=Cy);var u=i.name+l.hash;a.hasNameForId(i.id,u)||a.insertRules(i.id,u,l(i.rules,u,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Dv(this,function(){throw da(12,String(i.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Cy),this.name+t.hash},e})(),lL=function(e){return e>="A"&&e<="Z"};function Iw(e){for(var t="",n=0;n<e.length;n++){var i=e[n];if(n===1&&i==="-"&&e[0]==="-")return e;lL(i)?t+="-"+i.toLowerCase():t+=i}return t.startsWith("ms-")?"-"+t:t}var RC=function(e){return e==null||e===!1||e===""},AC=function(e){var t,n,i=[];for(var a in e){var l=e[a];e.hasOwnProperty(a)&&!RC(l)&&(Array.isArray(l)&&l.isCss||ua(l)?i.push("".concat(Iw(a),":"),l,";"):zc(l)?i.push.apply(i,Mf(Mf(["".concat(a," {")],AC(l),!1),["}"],!1)):i.push("".concat(Iw(a),": ").concat((t=a,(n=l)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in D2||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function oa(e,t,n,i){if(RC(e))return[];if(Iv(e))return[".".concat(e.styledComponentId)];if(ua(e)){if(!ua(l=e)||l.prototype&&l.prototype.isReactComponent||!t)return[e];var a=e(t);return oa(a,t,n,i)}var l;return e instanceof oL?n?(e.inject(n,i),[e.getName(i)]):[e]:zc(e)?AC(e):Array.isArray(e)?Array.prototype.concat.apply(Dh,e.map(function(u){return oa(u,t,n,i)})):[e.toString()]}function cL(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ua(n)&&!Iv(n))return!1}return!0}var uL=vC(Ih),dL=(function(){function e(t,n,i){this.rules=t,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&cL(t),this.componentId=n,this.baseHash=So(uL,n),this.baseStyle=i,xC.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,i){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))a=na(a,this.staticRulesId);else{var l=Tw(oa(this.rules,t,n,i)),u=xy(So(this.baseHash,l)>>>0);if(!n.hasNameForId(this.componentId,u)){var f=i(l,".".concat(u),void 0,this.componentId);n.insertRules(this.componentId,u,f)}a=na(a,u),this.staticRulesId=u}else{for(var h=So(this.baseHash,i.hash),p="",g=0;g<this.rules.length;g++){var y=this.rules[g];if(typeof y=="string")p+=y;else if(y){var _=Tw(oa(y,t,n,i));h=So(h,_+g),p+=_}}if(p){var b=xy(h>>>0);n.hasNameForId(this.componentId,b)||n.insertRules(this.componentId,b,i(p,".".concat(b),void 0,this.componentId)),a=na(a,b)}}return a},e})(),jf=ca.createContext(void 0);jf.Consumer;function fL(e){var t=ca.useContext(jf),n=C.useMemo(function(){return(function(i,a){if(!i)throw da(14);if(ua(i)){var l=i(a);return l}if(Array.isArray(i)||typeof i!="object")throw da(8);return a?sn(sn({},a),i):i})(e.theme,t)},[e.theme,t]);return e.children?ca.createElement(jf.Provider,{value:n},e.children):null}var Cg={};function hL(e,t,n){var i=Iv(e),a=e,l=!Tg(e),u=t.attrs,f=u===void 0?Dh:u,h=t.componentId,p=h===void 0?(function(A,M){var T=typeof A!="string"?"sc":bw(A);Cg[T]=(Cg[T]||0)+1;var P="".concat(T,"-").concat(P2(Ih+T+Cg[T]));return M?"".concat(M,"-").concat(P):P})(t.displayName,t.parentComponentId):h,g=t.displayName,y=g===void 0?(function(A){return Tg(A)?"styled.".concat(A):"Styled(".concat(j2(A),")")})(e):g,_=t.displayName&&t.componentId?"".concat(bw(t.displayName),"-").concat(t.componentId):t.componentId||p,b=i&&a.attrs?a.attrs.concat(f).filter(Boolean):f,w=t.shouldForwardProp;if(i&&a.shouldForwardProp){var O=a.shouldForwardProp;if(t.shouldForwardProp){var R=t.shouldForwardProp;w=function(A,M){return O(A,M)&&R(A,M)}}else w=O}var D=new dL(n,_,i?a.componentStyle:void 0);function k(A,M){return(function(T,P,V){var H=T.attrs,B=T.componentStyle,z=T.defaultProps,G=T.foldedComponentIds,F=T.styledComponentId,K=T.target,ue=ca.useContext(jf),U=Aw(),ee=T.shouldForwardProp||U.shouldForwardProp,ne=N2(P,ue,z)||Lo,oe=(function(me,pe,Ae){for(var be,De=sn(sn({},pe),{className:void 0,theme:Ae}),$e=0;$e<me.length;$e+=1){var _t=ua(be=me[$e])?be(De):be;for(var gt in _t)De[gt]=gt==="className"?na(De[gt],_t[gt]):gt==="style"?sn(sn({},De[gt]),_t[gt]):_t[gt]}return pe.className&&(De.className=na(De.className,pe.className)),De})(H,P,ne),N=oe.as||K,X={};for(var le in oe)oe[le]===void 0||le[0]==="$"||le==="as"||le==="theme"&&oe.theme===ne||(le==="forwardedAs"?X.as=oe.forwardedAs:ee&&!ee(le,N)||(X[le]=oe[le]));var ie=(function(me,pe){var Ae=Aw(),be=me.generateAndInjectStyles(pe,Ae.styleSheet,Ae.stylis);return be})(B,oe),de=na(G,F);return ie&&(de+=" "+ie),oe.className&&(de+=" "+oe.className),X[Tg(N)&&!gC.has(N)?"class":"className"]=de,V&&(X.ref=V),C.createElement(N,X)})(x,A,M)}k.displayName=y;var x=ca.forwardRef(k);return x.attrs=b,x.componentStyle=D,x.displayName=y,x.shouldForwardProp=w,x.foldedComponentIds=i?na(a.foldedComponentIds,a.styledComponentId):"",x.styledComponentId=_,x.target=i?a.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(A){this._foldedDefaultProps=i?(function(M){for(var T=[],P=1;P<arguments.length;P++)T[P-1]=arguments[P];for(var V=0,H=T;V<H.length;V++)Ty(M,H[V],!0);return M})({},a.defaultProps,A):A}}),Dv(x,function(){return".".concat(x.styledComponentId)}),l&&wC(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function Dw(e,t){for(var n=[e[0]],i=0,a=t.length;i<a;i+=1)n.push(t[i],e[i+1]);return n}var Ow=function(e){return Object.assign(e,{isCss:!0})};function on(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(ua(e)||zc(e))return Ow(oa(Dw(Dh,Mf([e],t,!0))));var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?oa(i):Ow(oa(Dw(i,t)))}function Ry(e,t,n){if(n===void 0&&(n=Lo),!t)throw da(1,t);var i=function(a){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];return e(t,n,on.apply(void 0,Mf([a],l,!1)))};return i.attrs=function(a){return Ry(e,t,sn(sn({},n),{attrs:Array.prototype.concat(n.attrs,a).filter(Boolean)}))},i.withConfig=function(a){return Ry(e,t,sn(sn({},n),a))},i}var IC=function(e){return Ry(hL,e)},I=IC;gC.forEach(function(e){I[e]=IC(e)});const To=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__,cs=globalThis,Tc="10.11.0";function DC(){return Ov(cs),cs}function Ov(e){const t=e.__SENTRY__=e.__SENTRY__||{};return t.version=t.version||Tc,t[Tc]=t[Tc]||{}}function Nv(e,t,n=cs){const i=n.__SENTRY__=n.__SENTRY__||{},a=i[Tc]=i[Tc]||{};return a[e]||(a[e]=t())}const pL="Sentry Logger ",Nw={};function mL(e){if(!("console"in cs))return e();const t=cs.console,n={},i=Object.keys(Nw);i.forEach(a=>{const l=Nw[a];n[a]=t[a],t[a]=l});try{return e()}finally{i.forEach(a=>{t[a]=n[a]})}}function gL(){kv().enabled=!0}function yL(){kv().enabled=!1}function OC(){return kv().enabled}function vL(...e){Mv("log",...e)}function _L(...e){Mv("warn",...e)}function bL(...e){Mv("error",...e)}function Mv(e,...t){To&&OC()&&mL(()=>{cs.console[e](`${pL}[${e}]:`,...t)})}function kv(){return To?Nv("loggerSettings",()=>({enabled:!1})):{enabled:!1}}const Sf={enable:gL,disable:yL,isEnabled:OC,log:vL,warn:_L,error:bL},SL=Object.prototype.toString;function wL(e,t){return SL.call(e)===`[object ${t}]`}function EL(e){return wL(e,"Object")}function xL(e){return!!(e?.then&&typeof e.then=="function")}function TL(e,t=0){return typeof e!="string"||t===0||e.length<=t?e:`${e.slice(0,t)}...`}function CL(e,t,n){try{Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0})}catch{To&&Sf.log(`Failed to add non-enumerable property "${t}" to object`,e)}}function RL(){const e=cs;return e.crypto||e.msCrypto}function Cc(e=RL()){let t=()=>Math.random()*16;try{if(e?.randomUUID)return e.randomUUID().replace(/-/g,"");e?.getRandomValues&&(t=()=>{const n=new Uint8Array(1);return e.getRandomValues(n),n[0]})}catch{}return("10000000100040008000"+1e11).replace(/[018]/g,n=>(n^(t()&15)>>n/4).toString(16))}const NC=1e3;function MC(){return Date.now()/NC}function AL(){const{performance:e}=cs;if(!e?.now||!e.timeOrigin)return MC;const t=e.timeOrigin;return()=>(t+e.now())/NC}let Mw;function IL(){return(Mw??(Mw=AL()))()}function DL(e,t={}){if(t.user&&(!e.ipAddress&&t.user.ip_address&&(e.ipAddress=t.user.ip_address),!e.did&&!t.did&&(e.did=t.user.id||t.user.email||t.user.username)),e.timestamp=t.timestamp||IL(),t.abnormal_mechanism&&(e.abnormal_mechanism=t.abnormal_mechanism),t.ignoreDuration&&(e.ignoreDuration=t.ignoreDuration),t.sid&&(e.sid=t.sid.length===32?t.sid:Cc()),t.init!==void 0&&(e.init=t.init),!e.did&&t.did&&(e.did=`${t.did}`),typeof t.started=="number"&&(e.started=t.started),e.ignoreDuration)e.duration=void 0;else if(typeof t.duration=="number")e.duration=t.duration;else{const n=e.timestamp-e.started;e.duration=n>=0?n:0}t.release&&(e.release=t.release),t.environment&&(e.environment=t.environment),!e.ipAddress&&t.ipAddress&&(e.ipAddress=t.ipAddress),!e.userAgent&&t.userAgent&&(e.userAgent=t.userAgent),typeof t.errors=="number"&&(e.errors=t.errors),t.status&&(e.status=t.status)}function kC(e,t,n=2){if(!t||typeof t!="object"||n<=0)return t;if(e&&Object.keys(t).length===0)return e;const i={...e};for(const a in t)Object.prototype.hasOwnProperty.call(t,a)&&(i[a]=kC(i[a],t[a],n-1));return i}function kw(){return Cc()}const Ay="_sentrySpan";function Lw(e,t){t?CL(e,Ay,t):delete e[Ay]}function Pw(e){return e[Ay]}const OL=100;class fa{constructor(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._attachments=[],this._user={},this._tags={},this._extra={},this._contexts={},this._sdkProcessingMetadata={},this._propagationContext={traceId:kw(),sampleRand:Math.random()}}clone(){const t=new fa;return t._breadcrumbs=[...this._breadcrumbs],t._tags={...this._tags},t._extra={...this._extra},t._contexts={...this._contexts},this._contexts.flags&&(t._contexts.flags={values:[...this._contexts.flags.values]}),t._user=this._user,t._level=this._level,t._session=this._session,t._transactionName=this._transactionName,t._fingerprint=this._fingerprint,t._eventProcessors=[...this._eventProcessors],t._attachments=[...this._attachments],t._sdkProcessingMetadata={...this._sdkProcessingMetadata},t._propagationContext={...this._propagationContext},t._client=this._client,t._lastEventId=this._lastEventId,Lw(t,Pw(this)),t}setClient(t){this._client=t}setLastEventId(t){this._lastEventId=t}getClient(){return this._client}lastEventId(){return this._lastEventId}addScopeListener(t){this._scopeListeners.push(t)}addEventProcessor(t){return this._eventProcessors.push(t),this}setUser(t){return this._user=t||{email:void 0,id:void 0,ip_address:void 0,username:void 0},this._session&&DL(this._session,{user:t}),this._notifyScopeListeners(),this}getUser(){return this._user}setTags(t){return this._tags={...this._tags,...t},this._notifyScopeListeners(),this}setTag(t,n){return this._tags={...this._tags,[t]:n},this._notifyScopeListeners(),this}setExtras(t){return this._extra={...this._extra,...t},this._notifyScopeListeners(),this}setExtra(t,n){return this._extra={...this._extra,[t]:n},this._notifyScopeListeners(),this}setFingerprint(t){return this._fingerprint=t,this._notifyScopeListeners(),this}setLevel(t){return this._level=t,this._notifyScopeListeners(),this}setTransactionName(t){return this._transactionName=t,this._notifyScopeListeners(),this}setContext(t,n){return n===null?delete this._contexts[t]:this._contexts[t]=n,this._notifyScopeListeners(),this}setSession(t){return t?this._session=t:delete this._session,this._notifyScopeListeners(),this}getSession(){return this._session}update(t){if(!t)return this;const n=typeof t=="function"?t(this):t,i=n instanceof fa?n.getScopeData():EL(n)?t:void 0,{tags:a,extra:l,user:u,contexts:f,level:h,fingerprint:p=[],propagationContext:g}=i||{};return this._tags={...this._tags,...a},this._extra={...this._extra,...l},this._contexts={...this._contexts,...f},u&&Object.keys(u).length&&(this._user=u),h&&(this._level=h),p.length&&(this._fingerprint=p),g&&(this._propagationContext=g),this}clear(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._session=void 0,Lw(this,void 0),this._attachments=[],this.setPropagationContext({traceId:kw(),sampleRand:Math.random()}),this._notifyScopeListeners(),this}addBreadcrumb(t,n){const i=typeof n=="number"?n:OL;if(i<=0)return this;const a={timestamp:MC(),...t,message:t.message?TL(t.message,2048):t.message};return this._breadcrumbs.push(a),this._breadcrumbs.length>i&&(this._breadcrumbs=this._breadcrumbs.slice(-i),this._client?.recordDroppedEvent("buffer_overflow","log_item")),this._notifyScopeListeners(),this}getLastBreadcrumb(){return this._breadcrumbs[this._breadcrumbs.length-1]}clearBreadcrumbs(){return this._breadcrumbs=[],this._notifyScopeListeners(),this}addAttachment(t){return this._attachments.push(t),this}clearAttachments(){return this._attachments=[],this}getScopeData(){return{breadcrumbs:this._breadcrumbs,attachments:this._attachments,contexts:this._contexts,tags:this._tags,extra:this._extra,user:this._user,level:this._level,fingerprint:this._fingerprint||[],eventProcessors:this._eventProcessors,propagationContext:this._propagationContext,sdkProcessingMetadata:this._sdkProcessingMetadata,transactionName:this._transactionName,span:Pw(this)}}setSDKProcessingMetadata(t){return this._sdkProcessingMetadata=kC(this._sdkProcessingMetadata,t,2),this}setPropagationContext(t){return this._propagationContext=t,this}getPropagationContext(){return this._propagationContext}captureException(t,n){const i=n?.event_id||Cc();if(!this._client)return To&&Sf.warn("No client configured on scope - will not capture exception!"),i;const a=new Error("Sentry syntheticException");return this._client.captureException(t,{originalException:t,syntheticException:a,...n,event_id:i},this),i}captureMessage(t,n,i){const a=i?.event_id||Cc();if(!this._client)return To&&Sf.warn("No client configured on scope - will not capture message!"),a;const l=new Error(t);return this._client.captureMessage(t,n,{originalException:t,syntheticException:l,...i,event_id:a},this),a}captureEvent(t,n){const i=n?.event_id||Cc();return this._client?(this._client.captureEvent(t,{...n,event_id:i},this),i):(To&&Sf.warn("No client configured on scope - will not capture event!"),i)}_notifyScopeListeners(){this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach(t=>{t(this)}),this._notifyingListeners=!1)}}function NL(){return Nv("defaultCurrentScope",()=>new fa)}function ML(){return Nv("defaultIsolationScope",()=>new fa)}class kL{constructor(t,n){let i;t?i=t:i=new fa;let a;n?a=n:a=new fa,this._stack=[{scope:i}],this._isolationScope=a}withScope(t){const n=this._pushScope();let i;try{i=t(n)}catch(a){throw this._popScope(),a}return xL(i)?i.then(a=>(this._popScope(),a),a=>{throw this._popScope(),a}):(this._popScope(),i)}getClient(){return this.getStackTop().client}getScope(){return this.getStackTop().scope}getIsolationScope(){return this._isolationScope}getStackTop(){return this._stack[this._stack.length-1]}_pushScope(){const t=this.getScope().clone();return this._stack.push({client:this.getClient(),scope:t}),t}_popScope(){return this._stack.length<=1?!1:!!this._stack.pop()}}function Po(){const e=DC(),t=Ov(e);return t.stack=t.stack||new kL(NL(),ML())}function LL(e){return Po().withScope(e)}function PL(e,t){const n=Po();return n.withScope(()=>(n.getStackTop().scope=e,t(e)))}function jw(e){return Po().withScope(()=>e(Po().getIsolationScope()))}function jL(){return{withIsolationScope:jw,withScope:LL,withSetScope:PL,withSetIsolationScope:(e,t)=>jw(t),getCurrentScope:()=>Po().getScope(),getIsolationScope:()=>Po().getIsolationScope()}}function UL(e){const t=Ov(e);return t.acs?t.acs:jL()}function LC(){const e=DC();return UL(e).getCurrentScope()}function Or(e,t){return LC().captureException(e,void 0)}function Lv(e,t){const n=typeof t=="string"?t:void 0,i=typeof t!="string"?{captureContext:t}:void 0;return LC().captureMessage(e,n,i)}const $L=()=>{};var Uw={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PC={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he=function(e,t){if(!e)throw Wo(t)},Wo=function(e){return new Error("Firebase Database ("+PC.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let a=e.charCodeAt(i);a<128?t[n++]=a:a<2048?(t[n++]=a>>6|192,t[n++]=a&63|128):(a&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(a=65536+((a&1023)<<10)+(e.charCodeAt(++i)&1023),t[n++]=a>>18|240,t[n++]=a>>12&63|128,t[n++]=a>>6&63|128,t[n++]=a&63|128):(t[n++]=a>>12|224,t[n++]=a>>6&63|128,t[n++]=a&63|128)}return t},zL=function(e){const t=[];let n=0,i=0;for(;n<e.length;){const a=e[n++];if(a<128)t[i++]=String.fromCharCode(a);else if(a>191&&a<224){const l=e[n++];t[i++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=e[n++],u=e[n++],f=e[n++],h=((a&7)<<18|(l&63)<<12|(u&63)<<6|f&63)-65536;t[i++]=String.fromCharCode(55296+(h>>10)),t[i++]=String.fromCharCode(56320+(h&1023))}else{const l=e[n++],u=e[n++];t[i++]=String.fromCharCode((a&15)<<12|(l&63)<<6|u&63)}}return t.join("")},Pv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let a=0;a<e.length;a+=3){const l=e[a],u=a+1<e.length,f=u?e[a+1]:0,h=a+2<e.length,p=h?e[a+2]:0,g=l>>2,y=(l&3)<<4|f>>4;let _=(f&15)<<2|p>>6,b=p&63;h||(b=64,u||(_=64)),i.push(n[g],n[y],n[_],n[b])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(jC(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):zL(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let a=0;a<e.length;){const l=n[e.charAt(a++)],f=a<e.length?n[e.charAt(a)]:0;++a;const p=a<e.length?n[e.charAt(a)]:64;++a;const y=a<e.length?n[e.charAt(a)]:64;if(++a,l==null||f==null||p==null||y==null)throw new BL;const _=l<<2|f>>4;if(i.push(_),p!==64){const b=f<<4&240|p>>2;if(i.push(b),y!==64){const w=p<<6&192|y;i.push(w)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class BL extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const UC=function(e){const t=jC(e);return Pv.encodeByteArray(t,!0)},Uf=function(e){return UC(e).replace(/\./g,"")},$f=function(e){try{return Pv.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HL(e){return $C(void 0,e)}function $C(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)!t.hasOwnProperty(n)||!FL(n)||(e[n]=$C(e[n],t[n]));return e}function FL(e){return e!=="__proto__"}/**
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
 */const VL=()=>qL().__FIREBASE_DEFAULTS__,GL=()=>{if(typeof process>"u"||typeof Uw>"u")return;const e=Uw.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},YL=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&$f(e[1]);return t&&JSON.parse(t)},jv=()=>{try{return $L()||VL()||GL()||YL()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},zC=e=>jv()?.emulatorHosts?.[e],WL=e=>{const t=zC(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),i]:[t.substring(0,n),i]},BC=()=>jv()?.config,HC=e=>jv()?.[`_${e}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Qo(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function FC(e){return(await fetch(e,{credentials:"include"})).ok}/**
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
 */function QL(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",a=e.iat||0,l=e.sub||e.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u={iss:`https://securetoken.google.com/${i}`,aud:i,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...e};return[Uf(JSON.stringify(n)),Uf(JSON.stringify(u)),""].join(".")}const Rc={};function KL(){const e={prod:[],emulator:[]};for(const t of Object.keys(Rc))Rc[t]?e.emulator.push(t):e.prod.push(t);return e}function XL(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}let $w=!1;function qC(e,t){if(typeof window>"u"||typeof document>"u"||!Qo(window.location.host)||Rc[e]===t||Rc[e]||$w)return;Rc[e]=t;function n(_){return`__firebase__banner__${_}`}const i="__firebase__banner",l=KL().prod.length>0;function u(){const _=document.getElementById(i);_&&_.remove()}function f(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function h(_,b){_.setAttribute("width","24"),_.setAttribute("id",b),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function p(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{$w=!0,u()},_}function g(_,b){_.setAttribute("id",b),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function y(){const _=XL(i),b=n("text"),w=document.getElementById(b)||document.createElement("span"),O=n("learnmore"),R=document.getElementById(O)||document.createElement("a"),D=n("preprendIcon"),k=document.getElementById(D)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const x=_.element;f(x),g(R,O);const A=p();h(k,D),x.append(k,w,R,A),document.body.appendChild(x)}l?(w.innerText="Preview backend disconnected.",k.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function fn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Uv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fn())}function ZL(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function JL(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function VC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function eP(){const e=fn();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function tP(){return PC.NODE_ADMIN===!0}function GC(){try{return typeof indexedDB=="object"}catch{return!1}}function YC(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(i);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{t(a.error?.message||"")}}catch(n){t(n)}})}function nP(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rP="FirebaseError";class _i extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name=rP,Object.setPrototypeOf(this,_i.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ca.prototype.create)}}class Ca{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},a=`${this.service}/${t}`,l=this.errors[t],u=l?iP(l,i):"Error",f=`${this.serviceName}: ${u} (${a}).`;return new _i(a,f,i)}}function iP(e,t){return e.replace(sP,(n,i)=>{const a=t[i];return a!=null?String(a):`<${i}?>`})}const sP=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const WC=function(e){let t={},n={},i={},a="";try{const l=e.split(".");t=Bc($f(l[0])||""),n=Bc($f(l[1])||""),a=l[2],i=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:i,signature:a}},aP=function(e){const t=WC(e),n=t.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},oP=function(e){const t=WC(e).claims;return typeof t=="object"&&t.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function jo(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function Iy(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function zf(e,t,n){const i={};for(const a in e)Object.prototype.hasOwnProperty.call(e,a)&&(i[a]=t.call(n,e[a],a,e));return i}function ha(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const a of n){if(!i.includes(a))return!1;const l=e[a],u=t[a];if(zw(l)&&zw(u)){if(!ha(l,u))return!1}else if(l!==u)return!1}for(const a of i)if(!n.includes(a))return!1;return!0}function zw(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(a=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(a))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function bc(e){const t={};return e.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[a,l]=i.split("=");t[decodeURIComponent(a)]=decodeURIComponent(l)}}),t}function Sc(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,n){n||(n=0);const i=this.W_;if(typeof t=="string")for(let y=0;y<16;y++)i[y]=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),n+=4;else for(let y=0;y<16;y++)i[y]=t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3],n+=4;for(let y=16;y<80;y++){const _=i[y-3]^i[y-8]^i[y-14]^i[y-16];i[y]=(_<<1|_>>>31)&4294967295}let a=this.chain_[0],l=this.chain_[1],u=this.chain_[2],f=this.chain_[3],h=this.chain_[4],p,g;for(let y=0;y<80;y++){y<40?y<20?(p=f^l&(u^f),g=1518500249):(p=l^u^f,g=1859775393):y<60?(p=l&u|f&(l|u),g=2400959708):(p=l^u^f,g=3395469782);const _=(a<<5|a>>>27)+p+h+g+i[y]&4294967295;h=f,f=u,u=(l<<30|l>>>2)&4294967295,l=a,a=_}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295}update(t,n){if(t==null)return;n===void 0&&(n=t.length);const i=n-this.blockSize;let a=0;const l=this.buf_;let u=this.inbuf_;for(;a<n;){if(u===0)for(;a<=i;)this.compress_(t,a),a+=this.blockSize;if(typeof t=="string"){for(;a<n;)if(l[u]=t.charCodeAt(a),++u,++a,u===this.blockSize){this.compress_(l),u=0;break}}else for(;a<n;)if(l[u]=t[a],++u,++a,u===this.blockSize){this.compress_(l),u=0;break}}this.inbuf_=u,this.total_+=n}digest(){const t=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let a=0;a<5;a++)for(let l=24;l>=0;l-=8)t[i]=this.chain_[a]>>l&255,++i;return t}}function cP(e,t){const n=new uP(e,t);return n.subscribe.bind(n)}class uP{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,i){let a;if(t===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");dP(t,["next","error","complete"])?a=t:a={next:t,error:n,complete:i},a.next===void 0&&(a.next=Rg),a.error===void 0&&(a.error=Rg),a.complete===void 0&&(a.complete=Rg);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function dP(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Rg(){}function Oh(e,t){return`${e} failed: ${t} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fP=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let a=e.charCodeAt(i);if(a>=55296&&a<=56319){const l=a-55296;i++,he(i<e.length,"Surrogate pair missing trail surrogate.");const u=e.charCodeAt(i)-56320;a=65536+(l<<10)+u}a<128?t[n++]=a:a<2048?(t[n++]=a>>6|192,t[n++]=a&63|128):a<65536?(t[n++]=a>>12|224,t[n++]=a>>6&63|128,t[n++]=a&63|128):(t[n++]=a>>18|240,t[n++]=a>>12&63|128,t[n++]=a>>6&63|128,t[n++]=a&63|128)}return t},Nh=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};/**
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
 */class hP{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const i=new du;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:n});a&&i.resolve(a)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t?.identifier),i=t?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(mP(t))try{this.getOrInitializeService({instanceIdentifier:Zs})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(n);try{const l=this.getOrInitializeService({instanceIdentifier:a});i.resolve(l)}catch{}}}}clearInstance(t=Zs){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Zs){return this.instances.has(t)}getOptions(t=Zs){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[l,u]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&u.resolve(a)}return a}onInit(t,n){const i=this.normalizeInstanceIdentifier(n),a=this.onInitCallbacks.get(i)??new Set;a.add(t),this.onInitCallbacks.set(i,a);const l=this.instances.get(i);return l&&t(l,i),()=>{a.delete(t)}}invokeOnInitCallbacks(t,n){const i=this.onInitCallbacks.get(n);if(i)for(const a of i)try{a(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:pP(t),options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=Zs){return this.component?this.component.multipleInstances?t:Zs:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pP(e){return e===Zs?void 0:e}function mP(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */var lt;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(lt||(lt={}));const yP={debug:lt.DEBUG,verbose:lt.VERBOSE,info:lt.INFO,warn:lt.WARN,error:lt.ERROR,silent:lt.SILENT},vP=lt.INFO,_P={[lt.DEBUG]:"log",[lt.VERBOSE]:"log",[lt.INFO]:"info",[lt.WARN]:"warn",[lt.ERROR]:"error"},bP=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),a=_P[t];if(a)console[a](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class $v{constructor(t){this.name=t,this._logLevel=vP,this._logHandler=bP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in lt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?yP[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,lt.DEBUG,...t),this._logHandler(this,lt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,lt.VERBOSE,...t),this._logHandler(this,lt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,lt.INFO,...t),this._logHandler(this,lt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,lt.WARN,...t),this._logHandler(this,lt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,lt.ERROR,...t),this._logHandler(this,lt.ERROR,...t)}}const SP=(e,t)=>t.some(n=>e instanceof n);let Bw,Hw;function wP(){return Bw||(Bw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function EP(){return Hw||(Hw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const QC=new WeakMap,Dy=new WeakMap,KC=new WeakMap,Ag=new WeakMap,zv=new WeakMap;function xP(e){const t=new Promise((n,i)=>{const a=()=>{e.removeEventListener("success",l),e.removeEventListener("error",u)},l=()=>{n(ui(e.result)),a()},u=()=>{i(e.error),a()};e.addEventListener("success",l),e.addEventListener("error",u)});return t.then(n=>{n instanceof IDBCursor&&QC.set(n,e)}).catch(()=>{}),zv.set(t,e),t}function TP(e){if(Dy.has(e))return;const t=new Promise((n,i)=>{const a=()=>{e.removeEventListener("complete",l),e.removeEventListener("error",u),e.removeEventListener("abort",u)},l=()=>{n(),a()},u=()=>{i(e.error||new DOMException("AbortError","AbortError")),a()};e.addEventListener("complete",l),e.addEventListener("error",u),e.addEventListener("abort",u)});Dy.set(e,t)}let Oy={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Dy.get(e);if(t==="objectStoreNames")return e.objectStoreNames||KC.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ui(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function CP(e){Oy=e(Oy)}function RP(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const i=e.call(Ig(this),t,...n);return KC.set(i,t.sort?t.sort():[t]),ui(i)}:EP().includes(e)?function(...t){return e.apply(Ig(this),t),ui(QC.get(this))}:function(...t){return ui(e.apply(Ig(this),t))}}function AP(e){return typeof e=="function"?RP(e):(e instanceof IDBTransaction&&TP(e),SP(e,wP())?new Proxy(e,Oy):e)}function ui(e){if(e instanceof IDBRequest)return xP(e);if(Ag.has(e))return Ag.get(e);const t=AP(e);return t!==e&&(Ag.set(e,t),zv.set(t,e)),t}const Ig=e=>zv.get(e);function Mh(e,t,{blocked:n,upgrade:i,blocking:a,terminated:l}={}){const u=indexedDB.open(e,t),f=ui(u);return i&&u.addEventListener("upgradeneeded",h=>{i(ui(u.result),h.oldVersion,h.newVersion,ui(u.transaction),h)}),n&&u.addEventListener("blocked",h=>n(h.oldVersion,h.newVersion,h)),f.then(h=>{l&&h.addEventListener("close",()=>l()),a&&h.addEventListener("versionchange",p=>a(p.oldVersion,p.newVersion,p))}).catch(()=>{}),f}function Dg(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",i=>t(i.oldVersion,i)),ui(n).then(()=>{})}const IP=["get","getKey","getAll","getAllKeys","count"],DP=["put","add","delete","clear"],Og=new Map;function Fw(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Og.get(t))return Og.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,a=DP.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(a||IP.includes(n)))return;const l=async function(u,...f){const h=this.transaction(u,a?"readwrite":"readonly");let p=h.store;return i&&(p=p.index(f.shift())),(await Promise.all([p[n](...f),a&&h.done]))[0]};return Og.set(t,l),l}CP(e=>({...e,get:(t,n,i)=>Fw(t,n)||e.get(t,n,i),has:(t,n)=>!!Fw(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OP{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(NP(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function NP(e){return e.getComponent()?.type==="VERSION"}const Ny="@firebase/app",qw="0.14.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const My="[DEFAULT]",a4={[Ny]:"fire-core",[MP]:"fire-core-compat",[LP]:"fire-analytics",[kP]:"fire-analytics-compat",[jP]:"fire-app-check",[PP]:"fire-app-check-compat",[UP]:"fire-auth",[$P]:"fire-auth-compat",[zP]:"fire-rtdb",[BP]:"fire-data-connect",[HP]:"fire-rtdb-compat",[FP]:"fire-fn",[qP]:"fire-fn-compat",[VP]:"fire-iid",[GP]:"fire-iid-compat",[YP]:"fire-fcm",[WP]:"fire-fcm-compat",[QP]:"fire-perf",[KP]:"fire-perf-compat",[XP]:"fire-rc",[ZP]:"fire-rc-compat",[JP]:"fire-gcs",[e4]:"fire-gcs-compat",[t4]:"fire-fst",[r4]:"fire-fst-compat",[n4]:"fire-vertex","fire-js":"fire-js",[i4]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf=new Map,o4=new Map,ky=new Map;function Vw(e,t){try{e.container.addComponent(t)}catch(n){hi.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Nr(e){const t=e.name;if(ky.has(t))return hi.debug(`There were multiple attempts to register component ${t}.`),!1;ky.set(t,e);for(const n of Bf.values())Vw(n,e);for(const n of o4.values())Vw(n,e);return!0}function Xo(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Mn(e){return e==null?!1:e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l4={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},is=new Ca("app","Firebase",l4);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Zo=s4;function XC(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const i={name:My,automaticDataCollectionEnabled:!0,...t},a=i.name;if(typeof a!="string"||!a)throw is.create("bad-app-name",{appName:String(a)});if(n||(n=BC()),!n)throw is.create("no-options");const l=Bf.get(a);if(l){if(ha(n,l.options)&&ha(i,l.config))return l;throw is.create("duplicate-app",{appName:a})}const u=new gP(a);for(const h of ky.values())u.addComponent(h);const f=new c4(n,i,u);return Bf.set(a,f),f}function Bv(e=My){const t=Bf.get(e);if(!t&&e===My&&BC())return XC();if(!t)throw is.create("no-app",{appName:e});return t}function Qn(e,t,n){let i=a4[e]??e;n&&(i+=`-${n}`);const a=i.match(/\s|\//),l=t.match(/\s|\//);if(a||l){const u=[`Unable to register library "${i}" with version "${t}":`];a&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&l&&u.push("and"),l&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),hi.warn(u.join(" "));return}Nr(new gr(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const u4="firebase-heartbeat-database",d4=1,Hc="firebase-heartbeat-store";let Ng=null;function ZC(){return Ng||(Ng=Mh(u4,d4,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Hc)}catch(n){console.warn(n)}}}}).catch(e=>{throw is.create("idb-open",{originalErrorMessage:e.message})})),Ng}async function f4(e){try{const n=(await ZC()).transaction(Hc),i=await n.objectStore(Hc).get(JC(e));return await n.done,i}catch(t){if(t instanceof _i)hi.warn(t.message);else{const n=is.create("idb-get",{originalErrorMessage:t?.message});hi.warn(n.message)}}}async function Gw(e,t){try{const i=(await ZC()).transaction(Hc,"readwrite");await i.objectStore(Hc).put(t,JC(e)),await i.done}catch(n){if(n instanceof _i)hi.warn(n.message);else{const i=is.create("idb-set",{originalErrorMessage:n?.message});hi.warn(i.message)}}}function JC(e){return`${e.name}!${e.options.appId}`}/**
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
 */const h4=1024,p4=30;class m4{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new y4(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Yw();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats.length>p4){const a=v4(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){hi.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Yw(),{heartbeatsToSend:n,unsentEntries:i}=g4(this._heartbeatsCache.heartbeats),a=Uf(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return hi.warn(t),""}}}function Yw(){return new Date().toISOString().substring(0,10)}function g4(e,t=h4){const n=[];let i=e.slice();for(const a of e){const l=n.find(u=>u.agent===a.agent);if(l){if(l.dates.push(a.date),Ww(n)>t){l.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),Ww(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class y4{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return GC()?YC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await f4(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const i=await this.read();return Gw(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const i=await this.read();return Gw(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Ww(e){return Uf(JSON.stringify({version:2,heartbeats:e})).length}function v4(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let i=1;i<e.length;i++)e[i].date<n&&(n=e[i].date,t=i);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _4(e){Nr(new gr("platform-logger",t=>new OP(t),"PRIVATE")),Nr(new gr("heartbeat",t=>new m4(t),"PRIVATE")),Qn(Ny,qw,e),Qn(Ny,qw,"esm2020"),Qn("fire-js","")}_4("");const eR="@firebase/installations",Hv="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR=1e4,nR=`w:${Hv}`,rR="FIS_v2",b4="https://firebaseinstallations.googleapis.com/v1",S4=3600*1e3,w4="installations",E4="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x4={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},pa=new Ca(w4,E4,x4);function iR(e){return e instanceof _i&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sR({projectId:e}){return`${b4}/projects/${e}/installations`}function aR(e){return{token:e.token,requestStatus:2,expiresIn:C4(e.expiresIn),creationTime:Date.now()}}async function oR(e,t){const i=(await t.json()).error;return pa.create("request-failed",{requestName:e,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function lR({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function T4(e,{refreshToken:t}){const n=lR(e);return n.append("Authorization",R4(t)),n}async function cR(e){const t=await e();return t.status>=500&&t.status<600?e():t}function C4(e){return Number(e.replace("s","000"))}function R4(e){return`${rR} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A4({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const i=sR(e),a=lR(e),l=t.getImmediate({optional:!0});if(l){const p=await l.getHeartbeatsHeader();p&&a.append("x-firebase-client",p)}const u={fid:n,authVersion:rR,appId:e.appId,sdkVersion:nR},f={method:"POST",headers:a,body:JSON.stringify(u)},h=await cR(()=>fetch(i,f));if(h.ok){const p=await h.json();return{fid:p.fid||n,registrationStatus:2,refreshToken:p.refreshToken,authToken:aR(p.authToken)}}else throw await oR("Create Installation",h)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uR(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const dR=new Map;function fR(e,t){const n=kh(e);hR(n,t),M4(n,t)}function hR(e,t){const n=dR.get(e);if(n)for(const i of n)i(t)}function M4(e,t){const n=k4();n&&n.postMessage({key:e,fid:t}),L4()}let ra=null;function k4(){return!ra&&"BroadcastChannel"in self&&(ra=new BroadcastChannel("[Firebase] FID Change"),ra.onmessage=e=>{hR(e.data.key,e.data.fid)}),ra}function L4(){dR.size===0&&ra&&(ra.close(),ra=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P4="firebase-installations-database",j4=1,ma="firebase-installations-store";let Mg=null;function Fv(){return Mg||(Mg=Mh(P4,j4,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ma)}}})),Mg}async function Hf(e,t){const n=kh(e),a=(await Fv()).transaction(ma,"readwrite"),l=a.objectStore(ma),u=await l.get(n);return await l.put(t,n),await a.done,(!u||u.fid!==t.fid)&&fR(e,t.fid),t}async function pR(e){const t=kh(e),i=(await Fv()).transaction(ma,"readwrite");await i.objectStore(ma).delete(t),await i.done}async function Lh(e,t){const n=kh(e),a=(await Fv()).transaction(ma,"readwrite"),l=a.objectStore(ma),u=await l.get(n),f=t(u);return f===void 0?await l.delete(n):await l.put(f,n),await a.done,f&&(!u||u.fid!==f.fid)&&fR(e,f.fid),f}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qv(e){let t;const n=await Lh(e.appConfig,i=>{const a=U4(i),l=$4(e,a);return t=l.registrationPromise,l.installationEntry});return n.fid===Ly?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function U4(e){const t=e||{fid:O4(),registrationStatus:0};return mR(t)}function $4(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const a=Promise.reject(pa.create("app-offline"));return{installationEntry:t,registrationPromise:a}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=z4(e,n);return{installationEntry:n,registrationPromise:i}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:B4(e)}:{installationEntry:t}}async function z4(e,t){try{const n=await A4(e,t);return Hf(e.appConfig,n)}catch(n){throw iR(n)&&n.customData.serverCode===409?await pR(e.appConfig):await Hf(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function B4(e){let t=await Qw(e.appConfig);for(;t.registrationStatus===1;)await uR(100),t=await Qw(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await qv(e);return i||n}return t}function Qw(e){return Lh(e,t=>{if(!t)throw pa.create("installation-not-found");return mR(t)})}function mR(e){return H4(e)?{fid:e.fid,registrationStatus:0}:e}function H4(e){return e.registrationStatus===1&&e.registrationTime+tR<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F4({appConfig:e,heartbeatServiceProvider:t},n){const i=q4(e,n),a=T4(e,n),l=t.getImmediate({optional:!0});if(l){const p=await l.getHeartbeatsHeader();p&&a.append("x-firebase-client",p)}const u={installation:{sdkVersion:nR,appId:e.appId}},f={method:"POST",headers:a,body:JSON.stringify(u)},h=await cR(()=>fetch(i,f));if(h.ok){const p=await h.json();return aR(p)}else throw await oR("Generate Auth Token",h)}function q4(e,{fid:t}){return`${sR(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vv(e,t=!1){let n;const i=await Lh(e.appConfig,l=>{if(!gR(l))throw pa.create("not-registered");const u=l.authToken;if(!t&&Y4(u))return l;if(u.requestStatus===1)return n=V4(e,t),l;{if(!navigator.onLine)throw pa.create("app-offline");const f=Q4(l);return n=G4(e,f),f}});return n?await n:i.authToken}async function V4(e,t){let n=await Kw(e.appConfig);for(;n.authToken.requestStatus===1;)await uR(100),n=await Kw(e.appConfig);const i=n.authToken;return i.requestStatus===0?Vv(e,t):i}function Kw(e){return Lh(e,t=>{if(!gR(t))throw pa.create("not-registered");const n=t.authToken;return K4(n)?{...t,authToken:{requestStatus:0}}:t})}async function G4(e,t){try{const n=await F4(e,t),i={...t,authToken:n};return await Hf(e.appConfig,i),n}catch(n){if(iR(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await pR(e.appConfig);else{const i={...t,authToken:{requestStatus:0}};await Hf(e.appConfig,i)}throw n}}function gR(e){return e!==void 0&&e.registrationStatus===2}function Y4(e){return e.requestStatus===2&&!W4(e)}function W4(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+S4}function Q4(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}function K4(e){return e.requestStatus===1&&e.requestTime+tR<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function e6(e){if(!e||!e.options)throw kg("App Configuration");if(!e.name)throw kg("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw kg(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function kg(e){return pa.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yR="installations",t6="installations-internal",n6=e=>{const t=e.getProvider("app").getImmediate(),n=e6(t),i=Xo(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},r6=e=>{const t=e.getProvider("app").getImmediate(),n=Xo(t,yR).getImmediate();return{getId:()=>X4(n),getToken:a=>Z4(n,a)}};function i6(){Nr(new gr(yR,n6,"PUBLIC")),Nr(new gr(t6,r6,"PRIVATE"))}i6();Qn(eR,Hv);Qn(eR,Hv,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s6="/firebase-messaging-sw.js",a6="/firebase-cloud-messaging-push-scope",vR="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",o6="https://fcmregistrations.googleapis.com/v1",_R="google.c.a.c_id",l6="google.c.a.c_l",c6="google.c.a.ts",u6="google.c.a.e",Xw=1e4;var Zw;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Zw||(Zw={}));/**
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
 */function ii(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function d6(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(n),a=new Uint8Array(i.length);for(let l=0;l<i.length;++l)a[l]=i.charCodeAt(l);return a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg="fcm_token_details_db",f6=5,Jw="fcm_token_object_Store";async function h6(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(l=>l.name).includes(Lg))return null;let t=null;return(await Mh(Lg,f6,{upgrade:async(i,a,l,u)=>{if(a<2||!i.objectStoreNames.contains(Jw))return;const f=u.objectStore(Jw),h=await f.index("fcmSenderId").get(e);if(await f.clear(),!!h){if(a===2){const p=h;if(!p.auth||!p.p256dh||!p.endpoint)return;t={token:p.fcmToken,createTime:p.createTime??Date.now(),subscriptionOptions:{auth:p.auth,p256dh:p.p256dh,endpoint:p.endpoint,swScope:p.swScope,vapidKey:typeof p.vapidKey=="string"?p.vapidKey:ii(p.vapidKey)}}}else if(a===3){const p=h;t={token:p.fcmToken,createTime:p.createTime,subscriptionOptions:{auth:ii(p.auth),p256dh:ii(p.p256dh),endpoint:p.endpoint,swScope:p.swScope,vapidKey:ii(p.vapidKey)}}}else if(a===4){const p=h;t={token:p.fcmToken,createTime:p.createTime,subscriptionOptions:{auth:ii(p.auth),p256dh:ii(p.p256dh),endpoint:p.endpoint,swScope:p.swScope,vapidKey:ii(p.vapidKey)}}}}}})).close(),await Dg(Lg),await Dg("fcm_vapid_details_db"),await Dg("undefined"),p6(t)?t:null}function p6(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m6="firebase-messaging-database",g6=1,qc="firebase-messaging-store";let Pg=null;function bR(){return Pg||(Pg=Mh(m6,g6,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(qc)}}})),Pg}async function y6(e){const t=SR(e),i=await(await bR()).transaction(qc).objectStore(qc).get(t);if(i)return i;{const a=await h6(e.appConfig.senderId);if(a)return await Gv(e,a),a}}async function Gv(e,t){const n=SR(e),a=(await bR()).transaction(qc,"readwrite");return await a.objectStore(qc).put(t,n),await a.done,t}function SR({appConfig:e}){return e.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v6={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},an=new Ca("messaging","Messaging",v6);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _6(e,t){const n=await Wv(e),i=wR(t),a={method:"POST",headers:n,body:JSON.stringify(i)};let l;try{l=await(await fetch(Yv(e.appConfig),a)).json()}catch(u){throw an.create("token-subscribe-failed",{errorInfo:u?.toString()})}if(l.error){const u=l.error.message;throw an.create("token-subscribe-failed",{errorInfo:u})}if(!l.token)throw an.create("token-subscribe-no-token");return l.token}async function b6(e,t){const n=await Wv(e),i=wR(t.subscriptionOptions),a={method:"PATCH",headers:n,body:JSON.stringify(i)};let l;try{l=await(await fetch(`${Yv(e.appConfig)}/${t.token}`,a)).json()}catch(u){throw an.create("token-update-failed",{errorInfo:u?.toString()})}if(l.error){const u=l.error.message;throw an.create("token-update-failed",{errorInfo:u})}if(!l.token)throw an.create("token-update-no-token");return l.token}async function S6(e,t){const i={method:"DELETE",headers:await Wv(e)};try{const l=await(await fetch(`${Yv(e.appConfig)}/${t}`,i)).json();if(l.error){const u=l.error.message;throw an.create("token-unsubscribe-failed",{errorInfo:u})}}catch(a){throw an.create("token-unsubscribe-failed",{errorInfo:a?.toString()})}}function Yv({projectId:e}){return`${o6}/projects/${e}/registrations`}async function Wv({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function wR({p256dh:e,auth:t,endpoint:n,vapidKey:i}){const a={web:{endpoint:n,auth:t,p256dh:e}};return i!==vR&&(a.web.applicationPubKey=i),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w6=10080*60*1e3;async function E6(e){const t=await T6(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:ii(t.getKey("auth")),p256dh:ii(t.getKey("p256dh"))},i=await y6(e.firebaseDependencies);if(i){if(C6(i.subscriptionOptions,n))return Date.now()>=i.createTime+w6?x6(e,{token:i.token,createTime:Date.now(),subscriptionOptions:n}):i.token;try{await S6(e.firebaseDependencies,i.token)}catch(a){console.warn(a)}return eE(e.firebaseDependencies,n)}else return eE(e.firebaseDependencies,n)}async function x6(e,t){try{const n=await b6(e.firebaseDependencies,t),i={...t,token:n,createTime:Date.now()};return await Gv(e.firebaseDependencies,i),n}catch(n){throw n}}async function eE(e,t){const i={token:await _6(e,t),createTime:Date.now(),subscriptionOptions:t};return await Gv(e,i),i.token}async function T6(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:d6(t)})}function C6(e,t){const n=t.vapidKey===e.vapidKey,i=t.endpoint===e.endpoint,a=t.auth===e.auth,l=t.p256dh===e.p256dh;return n&&i&&a&&l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tE(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return R6(t,e),A6(t,e),I6(t,e),t}function R6(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const i=t.notification.body;i&&(e.notification.body=i);const a=t.notification.image;a&&(e.notification.image=a);const l=t.notification.icon;l&&(e.notification.icon=l)}function A6(e,t){t.data&&(e.data=t.data)}function I6(e,t){if(!t.fcmOptions&&!t.notification?.click_action)return;e.fcmOptions={};const n=t.fcmOptions?.link??t.notification?.click_action;n&&(e.fcmOptions.link=n);const i=t.fcmOptions?.analytics_label;i&&(e.fcmOptions.analyticsLabel=i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D6(e){return typeof e=="object"&&!!e&&_R in e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O6(e){if(!e||!e.options)throw jg("App Configuration Object");if(!e.name)throw jg("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const i of t)if(!n[i])throw jg(i);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function jg(e){return an.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N6{constructor(t,n,i){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const a=O6(t);this.firebaseDependencies={app:t,appConfig:a,installations:n,analyticsProvider:i}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M6(e){try{e.swRegistration=await navigator.serviceWorker.register(s6,{scope:a6}),e.swRegistration.update().catch(()=>{}),await k6(e.swRegistration)}catch(t){throw an.create("failed-service-worker-registration",{browserErrorMessage:t?.message})}}async function k6(e){return new Promise((t,n)=>{const i=setTimeout(()=>n(new Error(`Service worker not registered after ${Xw} ms`)),Xw),a=e.installing||e.waiting;e.active?(clearTimeout(i),t()):a?a.onstatechange=l=>{l.target?.state==="activated"&&(a.onstatechange=null,clearTimeout(i),t())}:(clearTimeout(i),n(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L6(e,t){if(!t&&!e.swRegistration&&await M6(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw an.create("invalid-sw-registration");e.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P6(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=vR)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ER(e,t){if(!navigator)throw an.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw an.create("permission-blocked");return await P6(e,t?.vapidKey),await L6(e,t?.serviceWorkerRegistration),E6(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j6(e,t,n){const i=U6(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(i,{message_id:n[_R],message_name:n[l6],message_time:n[c6],message_device_time:Math.floor(Date.now()/1e3)})}function U6(e){switch(e){case Fc.NOTIFICATION_CLICKED:return"notification_open";case Fc.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $6(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===Fc.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(tE(n)):e.onMessageHandler.next(tE(n)));const i=n.data;D6(i)&&i[u6]==="1"&&await j6(e,n.messageType,i)}const nE="@firebase/messaging",rE="0.12.23";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z6=e=>{const t=new N6(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>$6(t,n)),t},B6=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:i=>ER(t,i)}};function H6(){Nr(new gr("messaging",z6,"PUBLIC")),Nr(new gr("messaging-internal",B6,"PRIVATE")),Qn(nE,rE),Qn(nE,rE,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F6(){try{await YC()}catch{return!1}return typeof window<"u"&&GC()&&nP()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q6(e,t){if(!navigator)throw an.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V6(e=Bv()){return F6().then(t=>{if(!t)throw an.create("unsupported-browser")},t=>{throw an.create("indexed-db-unsupported")}),Xo(Gt(e),"messaging").getImmediate()}async function G6(e,t){return e=Gt(e),ER(e,t)}function Y6(e,t){return e=Gt(e),q6(e,t)}H6();const Ph=e=>{try{return e()}catch(t){throw t}};var W6="firebase",Q6="12.2.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qn(W6,Q6,"app");const K6={apiKey:"AIzaSyAMtG6b23AqO2WbJ2ad8SKMXD1X4tfALtc",authDomain:"peloton-alerts.firebaseapp.com",projectId:"peloton-alerts",storageBucket:"peloton-alerts.appspot.com",messagingSenderId:"331185140393",appId:"1:331185140393:web:5f49c5c60b8b162914efb8",measurementId:"G-R2QRE36WEQ",databaseURL:"https://peloton-alerts-default-rtdb.firebaseio.com/"},Ac=Ph(()=>XC(K6)),wo=Ph(()=>V6(Ac)),X6="serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window,xR=async()=>{if(!("serviceWorker"in navigator))throw new Error("Service workers are not supported");return navigator.serviceWorker.register("/peloton-reservations/pr-preview/pr-40/messaging-sw.js",{type:"classic"})};let Ug=xR();const iE=async()=>{if(!wo)throw new Error("Messaging is not set up");if(!X6)throw new Error("Browser environment does not allow messaging");let e;try{e=await Ug,console.log("Registered service worker successfully")}catch(t){console.error("Failed to register service worker. Trying again...",t),Ug=xR(),e=await Ug}return G6(wo,{vapidKey:"BO9hF0_u2BKehXtAWTxtm7RtvIUGIEA5GT_jGycvCfUEW0yZZkLvtRB1Y8R_5KKBEODsLufyDkcBXn9rx5dHY5g",serviceWorkerRegistration:e})};function Zt(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var Z6=typeof Symbol=="function"&&Symbol.observable||"@@observable",sE=Z6,$g=()=>Math.random().toString(36).substring(7).split("").join("."),J6={INIT:`@@redux/INIT${$g()}`,REPLACE:`@@redux/REPLACE${$g()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${$g()}`},Ff=J6;function us(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function TR(e,t,n){if(typeof e!="function")throw new Error(Zt(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Zt(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Zt(1));return n(TR)(e,t)}let i=e,a=t,l=new Map,u=l,f=0,h=!1;function p(){u===l&&(u=new Map,l.forEach((R,D)=>{u.set(D,R)}))}function g(){if(h)throw new Error(Zt(3));return a}function y(R){if(typeof R!="function")throw new Error(Zt(4));if(h)throw new Error(Zt(5));let D=!0;p();const k=f++;return u.set(k,R),function(){if(D){if(h)throw new Error(Zt(6));D=!1,p(),u.delete(k),l=null}}}function _(R){if(!us(R))throw new Error(Zt(7));if(typeof R.type>"u")throw new Error(Zt(8));if(typeof R.type!="string")throw new Error(Zt(17));if(h)throw new Error(Zt(9));try{h=!0,a=i(a,R)}finally{h=!1}return(l=u).forEach(k=>{k()}),R}function b(R){if(typeof R!="function")throw new Error(Zt(10));i=R,_({type:Ff.REPLACE})}function w(){const R=y;return{subscribe(D){if(typeof D!="object"||D===null)throw new Error(Zt(11));function k(){const A=D;A.next&&A.next(g())}return k(),{unsubscribe:R(k)}},[sE](){return this}}}return _({type:Ff.INIT}),{dispatch:_,subscribe:y,getState:g,replaceReducer:b,[sE]:w}}function ej(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:Ff.INIT})>"u")throw new Error(Zt(12));if(typeof n(void 0,{type:Ff.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Zt(13))})}function CR(e){const t=Object.keys(e),n={};for(let l=0;l<t.length;l++){const u=t[l];typeof e[u]=="function"&&(n[u]=e[u])}const i=Object.keys(n);let a;try{ej(n)}catch(l){a=l}return function(u={},f){if(a)throw a;let h=!1;const p={};for(let g=0;g<i.length;g++){const y=i[g],_=n[y],b=u[y],w=_(b,f);if(typeof w>"u")throw f&&f.type,new Error(Zt(14));p[y]=w,h=h||w!==b}return h=h||i.length!==Object.keys(u).length,h?p:u}}function qf(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...i)=>t(n(...i)))}function tj(...e){return t=>(n,i)=>{const a=t(n,i);let l=()=>{throw new Error(Zt(15))};const u={getState:a.getState,dispatch:(h,...p)=>l(h,...p)},f=e.map(h=>h(u));return l=qf(...f)(a.dispatch),{...a,dispatch:l}}}function RR(e){return us(e)&&"type"in e&&typeof e.type=="string"}var Qv=Symbol.for("immer-nothing"),Ic=Symbol.for("immer-draftable"),Sn=Symbol.for("immer-state");function en(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Uo=Object.getPrototypeOf;function Mr(e){return!!e&&!!e[Sn]}function yr(e){return e?AR(e)||Array.isArray(e)||!!e[Ic]||!!e.constructor?.[Ic]||Jo(e)||fu(e):!1}var nj=Object.prototype.constructor.toString(),aE=new WeakMap;function AR(e){if(!e||typeof e!="object")return!1;const t=Object.getPrototypeOf(e);if(t===null||t===Object.prototype)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;if(n===Object)return!0;if(typeof n!="function")return!1;let i=aE.get(n);return i===void 0&&(i=Function.toString.call(n),aE.set(n,i)),i===nj}function rj(e){return Mr(e)||en(15,e),e[Sn].base_}function Vc(e,t,n=!0){ga(e)===0?(n?Reflect.ownKeys(e):Object.keys(e)).forEach(a=>{t(a,e[a],e)}):e.forEach((i,a)=>t(a,i,e))}function ga(e){const t=e[Sn];return t?t.type_:Array.isArray(e)?1:Jo(e)?2:fu(e)?3:0}function Gc(e,t){return ga(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function zg(e,t){return ga(e)===2?e.get(t):e[t]}function IR(e,t,n){const i=ga(e);i===2?e.set(t,n):i===3?e.add(n):e[t]=n}function ij(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function Jo(e){return e instanceof Map}function fu(e){return e instanceof Set}function Js(e){return e.copy_||e.base_}function Py(e,t){if(Jo(e))return new Map(e);if(fu(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const n=AR(e);if(t===!0||t==="class_only"&&!n){const i=Object.getOwnPropertyDescriptors(e);delete i[Sn];let a=Reflect.ownKeys(i);for(let l=0;l<a.length;l++){const u=a[l],f=i[u];f.writable===!1&&(f.writable=!0,f.configurable=!0),(f.get||f.set)&&(i[u]={configurable:!0,writable:!0,enumerable:f.enumerable,value:e[u]})}return Object.create(Uo(e),i)}else{const i=Uo(e);if(i!==null&&n)return{...e};const a=Object.create(i);return Object.assign(a,e)}}function Kv(e,t=!1){return jh(e)||Mr(e)||!yr(e)||(ga(e)>1&&Object.defineProperties(e,{set:Yd,add:Yd,clear:Yd,delete:Yd}),Object.freeze(e),t&&Object.values(e).forEach(n=>Kv(n,!0))),e}function sj(){en(2)}var Yd={value:sj};function jh(e){return e===null||typeof e!="object"?!0:Object.isFrozen(e)}var jy={};function ya(e){const t=jy[e];return t||en(0,e),t}function aj(e,t){jy[e]||(jy[e]=t)}var Yc;function DR(){return Yc}function oj(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function oE(e,t){t&&(ya("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Uy(e){$y(e),e.drafts_.forEach(lj),e.drafts_=null}function $y(e){e===Yc&&(Yc=e.parent_)}function lE(e){return Yc=oj(Yc,e)}function lj(e){const t=e[Sn];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function cE(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return e!==void 0&&e!==n?(n[Sn].modified_&&(Uy(t),en(4)),yr(e)&&(e=Vf(t,e),t.parent_||Gf(t,e)),t.patches_&&ya("Patches").generateReplacementPatches_(n[Sn].base_,e,t.patches_,t.inversePatches_)):e=Vf(t,n,[]),Uy(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==Qv?e:void 0}function Vf(e,t,n){if(jh(t))return t;const i=e.immer_.shouldUseStrictIteration(),a=t[Sn];if(!a)return Vc(t,(l,u)=>uE(e,a,t,l,u,n),i),t;if(a.scope_!==e)return t;if(!a.modified_)return Gf(e,a.base_,!0),a.base_;if(!a.finalized_){a.finalized_=!0,a.scope_.unfinalizedDrafts_--;const l=a.copy_;let u=l,f=!1;a.type_===3&&(u=new Set(l),l.clear(),f=!0),Vc(u,(h,p)=>uE(e,a,l,h,p,n,f),i),Gf(e,l,!1),n&&e.patches_&&ya("Patches").generatePatches_(a,n,e.patches_,e.inversePatches_)}return a.copy_}function uE(e,t,n,i,a,l,u){if(a==null||typeof a!="object"&&!u)return;const f=jh(a);if(!(f&&!u)){if(Mr(a)){const h=l&&t&&t.type_!==3&&!Gc(t.assigned_,i)?l.concat(i):void 0,p=Vf(e,a,h);if(IR(n,i,p),Mr(p))e.canAutoFreeze_=!1;else return}else u&&n.add(a);if(yr(a)&&!f){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1||t&&t.base_&&t.base_[i]===a&&f)return;Vf(e,a),(!t||!t.scope_.parent_)&&typeof i!="symbol"&&(Jo(n)?n.has(i):Object.prototype.propertyIsEnumerable.call(n,i))&&Gf(e,a)}}}function Gf(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Kv(t,n)}function cj(e,t){const n=Array.isArray(e),i={type_:n?1:0,scope_:t?t.scope_:DR(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let a=i,l=Xv;n&&(a=[i],l=Wc);const{revoke:u,proxy:f}=Proxy.revocable(a,l);return i.draft_=f,i.revoke_=u,f}var Xv={get(e,t){if(t===Sn)return e;const n=Js(e);if(!Gc(n,t))return uj(e,n,t);const i=n[t];return e.finalized_||!yr(i)?i:i===Bg(e.base_,t)?(Hg(e),e.copy_[t]=By(i,e)):i},has(e,t){return t in Js(e)},ownKeys(e){return Reflect.ownKeys(Js(e))},set(e,t,n){const i=OR(Js(e),t);if(i?.set)return i.set.call(e.draft_,n),!0;if(!e.modified_){const a=Bg(Js(e),t),l=a?.[Sn];if(l&&l.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(ij(n,a)&&(n!==void 0||Gc(e.base_,t)))return!0;Hg(e),zy(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty(e,t){return Bg(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,Hg(e),zy(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=Js(e),i=Reflect.getOwnPropertyDescriptor(n,t);return i&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:i.enumerable,value:n[t]}},defineProperty(){en(11)},getPrototypeOf(e){return Uo(e.base_)},setPrototypeOf(){en(12)}},Wc={};Vc(Xv,(e,t)=>{Wc[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});Wc.deleteProperty=function(e,t){return Wc.set.call(this,e,t,void 0)};Wc.set=function(e,t,n){return Xv.set.call(this,e[0],t,n,e[0])};function Bg(e,t){const n=e[Sn];return(n?Js(n):e)[t]}function uj(e,t,n){const i=OR(t,n);return i?"value"in i?i.value:i.get?.call(e.draft_):void 0}function OR(e,t){if(!(t in e))return;let n=Uo(e);for(;n;){const i=Object.getOwnPropertyDescriptor(n,t);if(i)return i;n=Uo(n)}}function zy(e){e.modified_||(e.modified_=!0,e.parent_&&zy(e.parent_))}function Hg(e){e.copy_||(e.copy_=Py(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var dj=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!0,this.produce=(t,n,i)=>{if(typeof t=="function"&&typeof n!="function"){const l=n;n=t;const u=this;return function(h=l,...p){return u.produce(h,g=>n.call(this,g,...p))}}typeof n!="function"&&en(6),i!==void 0&&typeof i!="function"&&en(7);let a;if(yr(t)){const l=lE(this),u=By(t,void 0);let f=!0;try{a=n(u),f=!1}finally{f?Uy(l):$y(l)}return oE(l,i),cE(a,l)}else if(!t||typeof t!="object"){if(a=n(t),a===void 0&&(a=t),a===Qv&&(a=void 0),this.autoFreeze_&&Kv(a,!0),i){const l=[],u=[];ya("Patches").generateReplacementPatches_(t,a,l,u),i(l,u)}return a}else en(1,t)},this.produceWithPatches=(t,n)=>{if(typeof t=="function")return(u,...f)=>this.produceWithPatches(u,h=>t(h,...f));let i,a;return[this.produce(t,n,(u,f)=>{i=u,a=f}),i,a]},typeof e?.autoFreeze=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof e?.useStrictShallowCopy=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),typeof e?.useStrictIteration=="boolean"&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){yr(e)||en(8),Mr(e)&&(e=fj(e));const t=lE(this),n=By(e,void 0);return n[Sn].isManual_=!0,$y(t),n}finishDraft(e,t){const n=e&&e[Sn];(!n||!n.isManual_)&&en(9);const{scope_:i}=n;return oE(i,t),cE(void 0,i)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const a=t[n];if(a.path.length===0&&a.op==="replace"){e=a.value;break}}n>-1&&(t=t.slice(n+1));const i=ya("Patches").applyPatches_;return Mr(e)?i(e,t):this.produce(e,a=>i(a,t))}};function By(e,t){const n=Jo(e)?ya("MapSet").proxyMap_(e,t):fu(e)?ya("MapSet").proxySet_(e,t):cj(e,t);return(t?t.scope_:DR()).drafts_.push(n),n}function fj(e){return Mr(e)||en(10,e),NR(e)}function NR(e){if(!yr(e)||jh(e))return e;const t=e[Sn];let n,i=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=Py(e,t.scope_.immer_.useStrictShallowCopy_),i=t.scope_.immer_.shouldUseStrictIteration()}else n=Py(e,!0);return Vc(n,(a,l)=>{IR(n,a,NR(l))},i),t&&(t.finalized_=!1),n}function hj(){const t="replace",i="remove";function a(_,b,w,O){switch(_.type_){case 0:case 2:return u(_,b,w,O);case 1:return l(_,b,w,O);case 3:return f(_,b,w,O)}}function l(_,b,w,O){let{base_:R,assigned_:D}=_,k=_.copy_;k.length<R.length&&([R,k]=[k,R],[w,O]=[O,w]);for(let x=0;x<R.length;x++)if(D[x]&&k[x]!==R[x]){const A=b.concat([x]);w.push({op:t,path:A,value:y(k[x])}),O.push({op:t,path:A,value:y(R[x])})}for(let x=R.length;x<k.length;x++){const A=b.concat([x]);w.push({op:"add",path:A,value:y(k[x])})}for(let x=k.length-1;R.length<=x;--x){const A=b.concat([x]);O.push({op:i,path:A})}}function u(_,b,w,O){const{base_:R,copy_:D}=_;Vc(_.assigned_,(k,x)=>{const A=zg(R,k),M=zg(D,k),T=x?Gc(R,k)?t:"add":i;if(A===M&&T===t)return;const P=b.concat(k);w.push(T===i?{op:T,path:P}:{op:T,path:P,value:M}),O.push(T==="add"?{op:i,path:P}:T===i?{op:"add",path:P,value:y(A)}:{op:t,path:P,value:y(A)})})}function f(_,b,w,O){let{base_:R,copy_:D}=_,k=0;R.forEach(x=>{if(!D.has(x)){const A=b.concat([k]);w.push({op:i,path:A,value:x}),O.unshift({op:"add",path:A,value:x})}k++}),k=0,D.forEach(x=>{if(!R.has(x)){const A=b.concat([k]);w.push({op:"add",path:A,value:x}),O.unshift({op:i,path:A,value:x})}k++})}function h(_,b,w,O){w.push({op:t,path:[],value:b===Qv?void 0:b}),O.push({op:t,path:[],value:_})}function p(_,b){return b.forEach(w=>{const{path:O,op:R}=w;let D=_;for(let M=0;M<O.length-1;M++){const T=ga(D);let P=O[M];typeof P!="string"&&typeof P!="number"&&(P=""+P),(T===0||T===1)&&(P==="__proto__"||P==="constructor")&&en(19),typeof D=="function"&&P==="prototype"&&en(19),D=zg(D,P),typeof D!="object"&&en(18,O.join("/"))}const k=ga(D),x=g(w.value),A=O[O.length-1];switch(R){case t:switch(k){case 2:return D.set(A,x);case 3:en(16);default:return D[A]=x}case"add":switch(k){case 1:return A==="-"?D.push(x):D.splice(A,0,x);case 2:return D.set(A,x);case 3:return D.add(x);default:return D[A]=x}case i:switch(k){case 1:return D.splice(A,1);case 2:return D.delete(A);case 3:return D.delete(w.value);default:return delete D[A]}default:en(17,R)}}),_}function g(_){if(!yr(_))return _;if(Array.isArray(_))return _.map(g);if(Jo(_))return new Map(Array.from(_.entries()).map(([w,O])=>[w,g(O)]));if(fu(_))return new Set(Array.from(_).map(g));const b=Object.create(Uo(_));for(const w in _)b[w]=g(_[w]);return Gc(_,Ic)&&(b[Ic]=_[Ic]),b}function y(_){return Mr(_)?g(_):_}aj("Patches",{applyPatches_:p,generatePatches_:a,generateReplacementPatches_:h})}var Qc=new dj,hu=Qc.produce,MR=Qc.produceWithPatches.bind(Qc),dE=Qc.applyPatches.bind(Qc);function pj(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(t)}function mj(e,t=`expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(t)}function gj(e,t="expected all items to be functions, instead received the following types: "){if(!e.every(n=>typeof n=="function")){const n=e.map(i=>typeof i=="function"?`function ${i.name||"unnamed"}()`:typeof i).join(", ");throw new TypeError(`${t}[${n}]`)}}var fE=e=>Array.isArray(e)?e:[e];function yj(e){const t=Array.isArray(e[0])?e[0]:e;return gj(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}function vj(e,t){const n=[],{length:i}=e;for(let a=0;a<i;a++)n.push(e[a].apply(null,t));return n}var _j=class{constructor(e){this.value=e}deref(){return this.value}},bj=typeof WeakRef<"u"?WeakRef:_j,Sj=0,hE=1;function Wd(){return{s:Sj,v:void 0,o:null,p:null}}function Yf(e,t={}){let n=Wd();const{resultEqualityCheck:i}=t;let a,l=0;function u(){let f=n;const{length:h}=arguments;for(let y=0,_=h;y<_;y++){const b=arguments[y];if(typeof b=="function"||typeof b=="object"&&b!==null){let w=f.o;w===null&&(f.o=w=new WeakMap);const O=w.get(b);O===void 0?(f=Wd(),w.set(b,f)):f=O}else{let w=f.p;w===null&&(f.p=w=new Map);const O=w.get(b);O===void 0?(f=Wd(),w.set(b,f)):f=O}}const p=f;let g;if(f.s===hE)g=f.v;else if(g=e.apply(null,arguments),l++,i){const y=a?.deref?.()??a;y!=null&&i(y,g)&&(g=y,l!==0&&l--),a=typeof g=="object"&&g!==null||typeof g=="function"?new bj(g):g}return p.s=hE,p.v=g,g}return u.clearCache=()=>{n=Wd(),u.resetResultsCount()},u.resultsCount=()=>l,u.resetResultsCount=()=>{l=0},u}function wj(e,...t){const n=typeof e=="function"?{memoize:e,memoizeOptions:t}:e,i=(...a)=>{let l=0,u=0,f,h={},p=a.pop();typeof p=="object"&&(h=p,p=a.pop()),pj(p,`createSelector expects an output function after the inputs, but received: [${typeof p}]`);const g={...n,...h},{memoize:y,memoizeOptions:_=[],argsMemoize:b=Yf,argsMemoizeOptions:w=[]}=g,O=fE(_),R=fE(w),D=yj(a),k=y(function(){return l++,p.apply(null,arguments)},...O),x=b(function(){u++;const M=vj(D,arguments);return f=k.apply(null,M),f},...R);return Object.assign(x,{resultFunc:p,memoizedResultFunc:k,dependencies:D,dependencyRecomputations:()=>u,resetDependencyRecomputations:()=>{u=0},lastResult:()=>f,recomputations:()=>l,resetRecomputations:()=>{l=0},memoize:y,argsMemoize:b})};return Object.assign(i,{withTypes:()=>i}),i}var bi=wj(Yf),Ej=Object.assign((e,t=bi)=>{mj(e,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);const n=Object.keys(e),i=n.map(l=>e[l]);return t(i,(...l)=>l.reduce((u,f,h)=>(u[n[h]]=f,u),{}))},{withTypes:()=>Ej});function kR(e){return({dispatch:n,getState:i})=>a=>l=>typeof l=="function"?l(n,i,e):a(l)}var xj=kR(),Tj=kR,Cj=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?qf:qf.apply(null,arguments)},Rj=e=>e&&typeof e.match=="function";function fr(e,t){function n(...i){if(t){let a=t(...i);if(!a)throw new Error(hr(0));return{type:e,payload:a.payload,..."meta"in a&&{meta:a.meta},..."error"in a&&{error:a.error}}}return{type:e,payload:i[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=i=>RR(i)&&i.type===e,n}var LR=class wc extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,wc.prototype)}static get[Symbol.species](){return wc}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new wc(...t[0].concat(this)):new wc(...t.concat(this))}};function pE(e){return yr(e)?hu(e,()=>{}):e}function Qd(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function Aj(e){return typeof e=="boolean"}var Ij=()=>function(t){const{thunk:n=!0,immutableCheck:i=!0,serializableCheck:a=!0,actionCreatorCheck:l=!0}=t??{};let u=new LR;return n&&(Aj(n)?u.push(xj):u.push(Tj(n.extraArgument))),u},Uh="RTK_autoBatch",ac=()=>e=>({payload:e,meta:{[Uh]:!0}}),mE=e=>t=>{setTimeout(t,e)},Dj=(e={type:"raf"})=>t=>(...n)=>{const i=t(...n);let a=!0,l=!1,u=!1;const f=new Set,h=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:mE(10):e.type==="callback"?e.queueNotification:mE(e.timeout),p=()=>{u=!1,l&&(l=!1,f.forEach(g=>g()))};return Object.assign({},i,{subscribe(g){const y=()=>a&&g(),_=i.subscribe(y);return f.add(g),()=>{_(),f.delete(g)}},dispatch(g){try{return a=!g?.meta?.[Uh],l=!a,l&&(u||(u=!0,h(p))),i.dispatch(g)}finally{a=!0}}})},Oj=e=>function(n){const{autoBatch:i=!0}=n??{};let a=new LR(e);return i&&a.push(Dj(typeof i=="object"?i:void 0)),a};function Nj(e){const t=Ij(),{reducer:n=void 0,middleware:i,devTools:a=!0,preloadedState:l=void 0,enhancers:u=void 0}=e||{};let f;if(typeof n=="function")f=n;else if(us(n))f=CR(n);else throw new Error(hr(1));let h;typeof i=="function"?h=i(t):h=t();let p=qf;a&&(p=Cj({trace:!1,...typeof a=="object"&&a}));const g=tj(...h),y=Oj(g);let _=typeof u=="function"?u(y):y();const b=p(..._);return TR(f,l,b)}function PR(e){const t={},n=[];let i;const a={addCase(l,u){const f=typeof l=="string"?l:l.type;if(!f)throw new Error(hr(28));if(f in t)throw new Error(hr(29));return t[f]=u,a},addAsyncThunk(l,u){return u.pending&&(t[l.pending.type]=u.pending),u.rejected&&(t[l.rejected.type]=u.rejected),u.fulfilled&&(t[l.fulfilled.type]=u.fulfilled),u.settled&&n.push({matcher:l.settled,reducer:u.settled}),a},addMatcher(l,u){return n.push({matcher:l,reducer:u}),a},addDefaultCase(l){return i=l,a}};return e(a),[t,n,i]}function Mj(e){return typeof e=="function"}function kj(e,t){let[n,i,a]=PR(t),l;if(Mj(e))l=()=>pE(e());else{const f=pE(e);l=()=>f}function u(f=l(),h){let p=[n[h.type],...i.filter(({matcher:g})=>g(h)).map(({reducer:g})=>g)];return p.filter(g=>!!g).length===0&&(p=[a]),p.reduce((g,y)=>{if(y)if(Mr(g)){const b=y(g,h);return b===void 0?g:b}else{if(yr(g))return hu(g,_=>y(_,h));{const _=y(g,h);if(_===void 0){if(g===null)return g;throw Error("A case reducer on a non-draftable value must not return undefined")}return _}}return g},f)}return u.getInitialState=l,u}var jR=(e,t)=>Rj(e)?e.match(t):e(t);function pi(...e){return t=>e.some(n=>jR(n,t))}function Dc(...e){return t=>e.every(n=>jR(n,t))}function $h(e,t){if(!e||!e.meta)return!1;const n=typeof e.meta.requestId=="string",i=t.indexOf(e.meta.requestStatus)>-1;return n&&i}function pu(e){return typeof e[0]=="function"&&"pending"in e[0]&&"fulfilled"in e[0]&&"rejected"in e[0]}function Zv(...e){return e.length===0?t=>$h(t,["pending"]):pu(e)?pi(...e.map(t=>t.pending)):Zv()(e[0])}function $o(...e){return e.length===0?t=>$h(t,["rejected"]):pu(e)?pi(...e.map(t=>t.rejected)):$o()(e[0])}function zh(...e){const t=n=>n&&n.meta&&n.meta.rejectedWithValue;return e.length===0?Dc($o(...e),t):pu(e)?Dc($o(...e),t):zh()(e[0])}function ds(...e){return e.length===0?t=>$h(t,["fulfilled"]):pu(e)?pi(...e.map(t=>t.fulfilled)):ds()(e[0])}function Hy(...e){return e.length===0?t=>$h(t,["pending","fulfilled","rejected"]):pu(e)?pi(...e.flatMap(t=>[t.pending,t.rejected,t.fulfilled])):Hy()(e[0])}var Lj="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",Jv=(e=21)=>{let t="",n=e;for(;n--;)t+=Lj[Math.random()*64|0];return t},Pj=["name","message","stack","code"],Fg=class{constructor(e,t){this.payload=e,this.meta=t}_type},gE=class{constructor(e,t){this.payload=e,this.meta=t}_type},jj=e=>{if(typeof e=="object"&&e!==null){const t={};for(const n of Pj)typeof e[n]=="string"&&(t[n]=e[n]);return t}return{message:String(e)}},yE="External signal was aborted",vE=(()=>{function e(t,n,i){const a=fr(t+"/fulfilled",(h,p,g,y)=>({payload:h,meta:{...y||{},arg:g,requestId:p,requestStatus:"fulfilled"}})),l=fr(t+"/pending",(h,p,g)=>({payload:void 0,meta:{...g||{},arg:p,requestId:h,requestStatus:"pending"}})),u=fr(t+"/rejected",(h,p,g,y,_)=>({payload:y,error:(i&&i.serializeError||jj)(h||"Rejected"),meta:{..._||{},arg:g,requestId:p,rejectedWithValue:!!y,requestStatus:"rejected",aborted:h?.name==="AbortError",condition:h?.name==="ConditionError"}}));function f(h,{signal:p}={}){return(g,y,_)=>{const b=i?.idGenerator?i.idGenerator(h):Jv(),w=new AbortController;let O,R;function D(x){R=x,w.abort()}p&&(p.aborted?D(yE):p.addEventListener("abort",()=>D(yE),{once:!0}));const k=(async function(){let x;try{let M=i?.condition?.(h,{getState:y,extra:_});if($j(M)&&(M=await M),M===!1||w.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const T=new Promise((P,V)=>{O=()=>{V({name:"AbortError",message:R||"Aborted"})},w.signal.addEventListener("abort",O)});g(l(b,h,i?.getPendingMeta?.({requestId:b,arg:h},{getState:y,extra:_}))),x=await Promise.race([T,Promise.resolve(n(h,{dispatch:g,getState:y,extra:_,requestId:b,signal:w.signal,abort:D,rejectWithValue:(P,V)=>new Fg(P,V),fulfillWithValue:(P,V)=>new gE(P,V)})).then(P=>{if(P instanceof Fg)throw P;return P instanceof gE?a(P.payload,b,h,P.meta):a(P,b,h)})])}catch(M){x=M instanceof Fg?u(null,b,h,M.payload,M.meta):u(M,b,h)}finally{O&&w.signal.removeEventListener("abort",O)}return i&&!i.dispatchConditionRejection&&u.match(x)&&x.meta.condition||g(x),x})();return Object.assign(k,{abort:D,requestId:b,arg:h,unwrap(){return k.then(Uj)}})}}return Object.assign(f,{pending:l,rejected:u,fulfilled:a,settled:pi(u,a),typePrefix:t})}return e.withTypes=()=>e,e})();function Uj(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function $j(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var zj=Symbol.for("rtk-slice-createasyncthunk");function Bj(e,t){return`${e}/${t}`}function Hj({creators:e}={}){const t=e?.asyncThunk?.[zj];return function(i){const{name:a,reducerPath:l=a}=i;if(!a)throw new Error(hr(11));const u=(typeof i.reducers=="function"?i.reducers(qj()):i.reducers)||{},f=Object.keys(u),h={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},p={addCase(x,A){const M=typeof x=="string"?x:x.type;if(!M)throw new Error(hr(12));if(M in h.sliceCaseReducersByType)throw new Error(hr(13));return h.sliceCaseReducersByType[M]=A,p},addMatcher(x,A){return h.sliceMatchers.push({matcher:x,reducer:A}),p},exposeAction(x,A){return h.actionCreators[x]=A,p},exposeCaseReducer(x,A){return h.sliceCaseReducersByName[x]=A,p}};f.forEach(x=>{const A=u[x],M={reducerName:x,type:Bj(a,x),createNotation:typeof i.reducers=="function"};Gj(A)?Wj(M,A,p,t):Vj(M,A,p)});function g(){const[x={},A=[],M=void 0]=typeof i.extraReducers=="function"?PR(i.extraReducers):[i.extraReducers],T={...x,...h.sliceCaseReducersByType};return kj(i.initialState,P=>{for(let V in T)P.addCase(V,T[V]);for(let V of h.sliceMatchers)P.addMatcher(V.matcher,V.reducer);for(let V of A)P.addMatcher(V.matcher,V.reducer);M&&P.addDefaultCase(M)})}const y=x=>x,_=new Map,b=new WeakMap;let w;function O(x,A){return w||(w=g()),w(x,A)}function R(){return w||(w=g()),w.getInitialState()}function D(x,A=!1){function M(P){let V=P[x];return typeof V>"u"&&A&&(V=Qd(b,M,R)),V}function T(P=y){const V=Qd(_,A,()=>new WeakMap);return Qd(V,P,()=>{const H={};for(const[B,z]of Object.entries(i.selectors??{}))H[B]=Fj(z,P,()=>Qd(b,P,R),A);return H})}return{reducerPath:x,getSelectors:T,get selectors(){return T(M)},selectSlice:M}}const k={name:a,reducer:O,actions:h.actionCreators,caseReducers:h.sliceCaseReducersByName,getInitialState:R,...D(l),injectInto(x,{reducerPath:A,...M}={}){const T=A??l;return x.inject({reducerPath:T,reducer:O},M),{...k,...D(T,!0)}}};return k}}function Fj(e,t,n,i){function a(l,...u){let f=t(l);return typeof f>"u"&&i&&(f=n()),e(f,...u)}return a.unwrapped=e,a}var Ar=Hj();function qj(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function Vj({type:e,reducerName:t,createNotation:n},i,a){let l,u;if("reducer"in i){if(n&&!Yj(i))throw new Error(hr(17));l=i.reducer,u=i.prepare}else l=i;a.addCase(e,l).exposeCaseReducer(t,l).exposeAction(t,u?fr(e,u):fr(e))}function Gj(e){return e._reducerDefinitionType==="asyncThunk"}function Yj(e){return e._reducerDefinitionType==="reducerWithPrepare"}function Wj({type:e,reducerName:t},n,i,a){if(!a)throw new Error(hr(18));const{payloadCreator:l,fulfilled:u,pending:f,rejected:h,settled:p,options:g}=n,y=a(e,l,g);i.exposeAction(t,y),u&&i.addCase(y.fulfilled,u),f&&i.addCase(y.pending,f),h&&i.addCase(y.rejected,h),p&&i.addMatcher(y.settled,p),i.exposeCaseReducer(t,{fulfilled:u||Kd,pending:f||Kd,rejected:h||Kd,settled:p||Kd})}function Kd(){}function hr(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const el=e=>e.session,mu=bi([el],e=>{if(e.state==="fulfilled")return e.data?.id}),gs=LT,ct=PT,gu=C.createContext({refreshToken:()=>{},deleteToken:()=>Promise.reject("Not implemented")});var _E={};const bE="@firebase/database",SE="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let UR="";function Qj(e){UR=e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const $R=function(e){try{if(typeof window<"u"&&typeof window[e]<"u"){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Kj(t)}}catch{}return new Xj},ia=$R("localStorage"),Zj=$R("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co=new $v("@firebase/database"),Jj=(function(){let e=1;return function(){return e++}})(),zR=function(e){const t=fP(e),n=new lP;n.update(t);const i=n.digest();return Pv.encodeByteArray(i)},yu=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?t+=yu.apply(null,i):typeof i=="object"?t+=$t(i):t+=i,t+=" "}return t};let Oc=null,wE=!0;const e3=function(e,t){he(!0,"Can't turn on custom loggers persistently."),Co.logLevel=lt.VERBOSE,Oc=Co.log.bind(Co)},Jt=function(...e){if(wE===!0&&(wE=!1,Oc===null&&Zj.get("logging_enabled")===!0&&e3()),Oc){const t=yu.apply(null,e);Oc(t)}},vu=function(e){return function(...t){Jt(e,...t)}},Fy=function(...e){const t="FIREBASE INTERNAL ERROR: "+yu(...e);Co.error(t)},mi=function(...e){const t=`FIREBASE FATAL ERROR: ${yu(...e)}`;throw Co.error(t),new Error(t)},dn=function(...e){const t="FIREBASE WARNING: "+yu(...e);Co.warn(t)},t3=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&dn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},e_=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},n3=function(e){if(document.readyState==="complete")e();else{let t=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},zo="[MIN_NAME]",va="[MAX_NAME]",Ra=function(e,t){if(e===t)return 0;if(e===zo||t===va)return-1;if(t===zo||e===va)return 1;{const n=EE(e),i=EE(t);return n!==null?i!==null?n-i===0?e.length-t.length:n-i:-1:i!==null?1:e<t?-1:1}},r3=function(e,t){return e===t?0:e<t?-1:1},oc=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+$t(t))},t_=function(e){if(typeof e!="object"||e===null)return $t(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)i!==0&&(n+=","),n+=$t(t[i]),n+=":",n+=t_(e[t[i]]);return n+="}",n},BR=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let a=0;a<n;a+=t)a+t>n?i.push(e.substring(a,n)):i.push(e.substring(a,a+t));return i};function tn(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const HR=function(e){he(!e_(e),"Invalid JSON number");const t=11,n=52,i=(1<<t-1)-1;let a,l,u,f,h;e===0?(l=0,u=0,a=1/e===-1/0?1:0):(a=e<0,e=Math.abs(e),e>=Math.pow(2,1-i)?(f=Math.min(Math.floor(Math.log(e)/Math.LN2),i),l=f+i,u=Math.round(e*Math.pow(2,n-f)-Math.pow(2,n))):(l=0,u=Math.round(e/Math.pow(2,1-i-n))));const p=[];for(h=n;h;h-=1)p.push(u%2?1:0),u=Math.floor(u/2);for(h=t;h;h-=1)p.push(l%2?1:0),l=Math.floor(l/2);p.push(a?1:0),p.reverse();const g=p.join("");let y="";for(h=0;h<64;h+=8){let _=parseInt(g.substr(h,8),2).toString(16);_.length===1&&(_="0"+_),y=y+_}return y.toLowerCase()},i3=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},s3=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function a3(e,t){let n="Unknown Error";e==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":e==="permission_denied"?n="Client doesn't have permission to access the desired data.":e==="unavailable"&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}const o3=new RegExp("^-?(0*)\\d{1,10}$"),l3=-2147483648,c3=2147483647,EE=function(e){if(o3.test(e)){const t=Number(e);if(t>=l3&&t<=c3)return t}return null},tl=function(e){try{e()}catch(t){setTimeout(()=>{const n=t.stack||"";throw dn("Exception was thrown by user callback.",n),t},Math.floor(0))}},u3=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Nc=function(e,t){const n=setTimeout(e,t);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class f3{constructor(t,n,i){this.appName_=t,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(a=>this.auth_=a)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(n=>n&&n.code==="auth/token-not-initialized"?(Jt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(n,i):n(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(n=>n.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(n=>n.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',dn(t)}}class wf{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}wf.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_="5",FR="v",qR="s",VR="r",GR="f",YR=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,WR="ls",QR="p",qy="ac",KR="websocket",XR="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(t,n,i,a,l=!1,u="",f=!1,h=!1,p=null){this.secure=n,this.namespace=i,this.webSocketOnly=a,this.nodeAdmin=l,this.persistenceKey=u,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=h,this.emulatorOptions=p,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ia.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&ia.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${n}`}}function h3(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function JR(e,t,n){he(typeof t=="string","typeof type must == string"),he(typeof n=="object","typeof params must == object");let i;if(t===KR)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===XR)i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);h3(e)&&(n.ns=e.namespace);const a=[];return tn(n,(l,u)=>{a.push(l+"="+u)}),i+a.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class g3{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,n){this.closeAfterResponse=t,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,n){for(this.pendingResponses[t]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<i.length;++a)i[a]&&tl(()=>{this.onMessage_(i[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE="start",y3="close",v3="pLPCommand",_3="pRTLPCB",eA="id",tA="pw",nA="ser",b3="cb",S3="seg",w3="ts",E3="d",x3="dframe",rA=1870,iA=30,T3=rA-iA,C3=25e3,R3=3e4;class Eo{constructor(t,n,i,a,l,u,f){this.connId=t,this.repoInfo=n,this.applicationId=i,this.appCheckToken=a,this.authToken=l,this.transportSessionId=u,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=vu(t),this.stats_=r_(n),this.urlFn=h=>(this.appCheckToken&&(h[qy]=this.appCheckToken),JR(n,XR,h))}open(t,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new g3(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(R3)),n3(()=>{if(this.isClosed_)return;this.scriptTagHolder=new i_((...l)=>{const[u,f,h,p,g]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===xE)this.id=f,this.password=h;else if(u===y3)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...l)=>{const[u,f]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(u,f)},()=>{this.onClosed_()},this.urlFn);const i={};i[xE]="t",i[nA]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[b3]=this.scriptTagHolder.uniqueCallbackIdentifier),i[FR]=n_,this.transportSessionId&&(i[qR]=this.transportSessionId),this.lastSessionId&&(i[WR]=this.lastSessionId),this.applicationId&&(i[QR]=this.applicationId),this.appCheckToken&&(i[qy]=this.appCheckToken),typeof location<"u"&&location.hostname&&YR.test(location.hostname)&&(i[VR]=GR);const a=this.urlFn(i);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Eo.forceAllow_=!0}static forceDisallow(){Eo.forceDisallow_=!0}static isAvailable(){return Eo.forceAllow_?!0:!Eo.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!i3()&&!s3()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const n=$t(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=UC(n),a=BR(i,T3);for(let l=0;l<a.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[l]),this.curSegmentNum++}addDisconnectPingFrame(t,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[x3]="t",i[eA]=t,i[tA]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const n=$t(t).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class i_{constructor(t,n,i,a){this.onDisconnect=i,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Jj(),window[v3+this.uniqueCallbackIdentifier]=t,window[_3+this.uniqueCallbackIdentifier]=n,this.myIFrame=i_.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(f){Jt("frame writing exception"),f.stack&&Jt(f.stack),Jt(f)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||Jt("No IE domain setting required")}catch{const i=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,n){for(this.myID=t,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[eA]=this.myID,t[tA]=this.myPW,t[nA]=this.currentSerial;let n=this.urlFn(t),i="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+iA+i.length<=rA;){const u=this.pendingSegs.shift();i=i+"&"+S3+a+"="+u.seg+"&"+w3+a+"="+u.ts+"&"+E3+a+"="+u.d,a++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(t,n,i){this.pendingSegs.push({seg:t,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(t,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},a=setTimeout(i,Math.floor(C3)),l=()=>{clearTimeout(a),i()};this.addTag(t,l)}addTag(t,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=t,i.onload=i.onreadystatechange=function(){const a=i.readyState;(!a||a==="loaded"||a==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Jt("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A3=16384,I3=45e3;let Wf=null;typeof MozWebSocket<"u"?Wf=MozWebSocket:typeof WebSocket<"u"&&(Wf=WebSocket);class lr{constructor(t,n,i,a,l,u,f){this.connId=t,this.applicationId=i,this.appCheckToken=a,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=vu(this.connId),this.stats_=r_(n),this.connURL=lr.connectionURL_(n,u,f,a,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(t,n,i,a,l){const u={};return u[FR]=n_,typeof location<"u"&&location.hostname&&YR.test(location.hostname)&&(u[VR]=GR),n&&(u[qR]=n),i&&(u[WR]=i),a&&(u[qy]=a),l&&(u[QR]=l),JR(t,KR,u)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ia.set("previous_websocket_failure",!0);try{let i;tP(),this.mySock=new Wf(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const a=i.message||i.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const a=i.message||i.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){lr.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(t=!0)}return!t&&Wf!==null&&!lr.forceDisallow_}static previouslyFailed(){return ia.isInMemoryStorage||ia.get("previous_websocket_failure")===!0}markConnectionHealthy(){ia.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Bc(n);this.onMessage(i)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(he(this.frames===null,"We already have a frame buffer"),t.length<=6){const n=Number(t);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const n=t.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(t){this.resetKeepAlive();const n=$t(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=BR(n,A3);i.length>1&&this.sendString_(String(i.length));for(let a=0;a<i.length;a++)this.sendString_(i[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(I3))}sendString_(t){try{this.mySock.send(t)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}lr.responsesRequiredToBeHealthy=2;lr.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{static get ALL_TRANSPORTS(){return[Eo,lr]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(t){this.initTransports_(t)}initTransports_(t){const n=lr&&lr.isAvailable();let i=n&&!lr.previouslyFailed();if(t.webSocketOnly&&(n||dn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[lr];else{const a=this.transports_=[];for(const l of Kc.ALL_TRANSPORTS)l&&l.isAvailable()&&a.push(l);Kc.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Kc.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D3=6e4,O3=5e3,N3=10*1024,M3=100*1024,Gg="t",TE="d",k3="s",CE="r",L3="e",RE="o",AE="a",IE="n",DE="p",P3="h";class j3{constructor(t,n,i,a,l,u,f,h,p,g){this.id=t,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=a,this.authToken_=l,this.onMessage_=u,this.onReady_=f,this.onDisconnect_=h,this.onKill_=p,this.lastSessionId=g,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=vu("c:"+this.id+":"),this.transportManager_=new Kc(n),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const a=t.healthyTimeout||0;a>0&&(this.healthyTimeout_=Nc(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>M3?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>N3?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return n=>{t===this.conn_?this.onConnectionLost_(n):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return n=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(n):t===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(t){const n={t:"d",d:t};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(Gg in t){const n=t[Gg];n===AE?this.upgradeIfSecondaryHealthy_():n===CE?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===RE&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const n=oc("t",t),i=oc("d",t);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:DE,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:AE,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:IE,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const n=oc("t",t),i=oc("d",t);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const n=oc(Gg,t);if(TE in t){const i=t[TE];if(n===P3){const a={...i};this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(n===IE){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===k3?this.onConnectionShutdown_(i):n===CE?this.onReset_(i):n===L3?Fy("Server Error: "+i):n===RE?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Fy("Unknown control packet command: "+n)}}onHandshake_(t){const n=t.ts,i=t.v,a=t.h;this.sessionId=t.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),n_!==i&&dn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Nc(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(D3))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,n){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Nc(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(O3))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:DE,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ia.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{put(t,n,i,a){}merge(t,n,i,a){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,n,i){}onDisconnectMerge(t,n,i){}onDisconnectCancel(t,n){}reportStats(t){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(t){this.allowedEvents_=t,this.listeners_={},he(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...n){if(Array.isArray(this.listeners_[t])){const i=[...this.listeners_[t]];for(let a=0;a<i.length;a++)i[a].callback.apply(i[a].context,n)}}on(t,n,i){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:n,context:i});const a=this.getInitialEvent(t);a&&n.apply(i,a)}off(t,n,i){this.validateEventType_(t);const a=this.listeners_[t]||[];for(let l=0;l<a.length;l++)if(a[l].callback===n&&(!i||i===a[l].context)){a.splice(l,1);return}}validateEventType_(t){he(this.allowedEvents_.find(n=>n===t),"Unknown event: "+t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf extends aA{static getInstance(){return new Qf}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Uv()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(t){return he(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE=32,NE=768;class ut{constructor(t,n){if(n===void 0){this.pieces_=t.split("/");let i=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[i]=this.pieces_[a],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=n}toString(){let t="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(t+="/"+this.pieces_[n]);return t||"/"}}function Xe(){return new ut("")}function qe(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function fs(e){return e.pieces_.length-e.pieceNum_}function pt(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ut(e.pieces_,t)}function s_(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function U3(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)e.pieces_[n]!==""&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function Xc(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function oA(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ut(t,0)}function Rt(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof ut)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const i=t.split("/");for(let a=0;a<i.length;a++)i[a].length>0&&n.push(i[a])}return new ut(n,0)}function We(e){return e.pieceNum_>=e.pieces_.length}function un(e,t){const n=qe(e),i=qe(t);if(n===null)return t;if(n===i)return un(pt(e),pt(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function $3(e,t){const n=Xc(e,0),i=Xc(t,0);for(let a=0;a<n.length&&a<i.length;a++){const l=Ra(n[a],i[a]);if(l!==0)return l}return n.length===i.length?0:n.length<i.length?-1:1}function a_(e,t){if(fs(e)!==fs(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Wn(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(fs(e)>fs(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class z3{constructor(t,n){this.errorPrefix_=n,this.parts_=Xc(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Nh(this.parts_[i]);lA(this)}}function B3(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Nh(t),lA(e)}function H3(e){const t=e.parts_.pop();e.byteLength_-=Nh(t),e.parts_.length>0&&(e.byteLength_-=1)}function lA(e){if(e.byteLength_>NE)throw new Error(e.errorPrefix_+"has a key path longer than "+NE+" bytes ("+e.byteLength_+").");if(e.parts_.length>OE)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+OE+") or object contains a cycle "+ea(e))}function ea(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_ extends aA{static getInstance(){return new o_}constructor(){super(["visible"]);let t,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[t];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(t){return he(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=1e3,F3=300*1e3,ME=30*1e3,q3=1.3,V3=3e4,G3="server_kill",kE=3;class di extends sA{constructor(t,n,i,a,l,u,f,h){if(super(),this.repoInfo_=t,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=a,this.onServerInfoUpdate_=l,this.authTokenProvider_=u,this.appCheckTokenProvider_=f,this.authOverride_=h,this.id=di.nextPersistentConnectionId_++,this.log_=vu("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=lc,this.maxReconnectDelay_=F3,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,h)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");o_.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&Qf.getInstance().on("online",this.onOnline_,this)}sendRequest(t,n,i){const a=++this.requestNumber_,l={r:a,a:t,b:n};this.log_($t(l)),he(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),i&&(this.requestCBHash_[a]=i)}get(t){this.initConnection_();const n=new du,a={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:u=>{const f=u.d;u.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),n.promise}listen(t,n,i,a){this.initConnection_();const l=t._queryIdentifier,u=t._path.toString();this.log_("Listen called for "+u+" "+l),this.listens.has(u)||this.listens.set(u,new Map),he(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),he(!this.listens.get(u).has(l),"listen() called twice for same path/queryId.");const f={onComplete:a,hashFn:n,query:t,tag:i};this.listens.get(u).set(l,f),this.connected_&&this.sendListen_(f)}sendGet_(t){const n=this.outstandingGets_[t];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(t){const n=t.query,i=n._path.toString(),a=n._queryIdentifier;this.log_("Listen on "+i+" for "+a);const l={p:i},u="q";t.tag&&(l.q=n._queryObject,l.t=t.tag),l.h=t.hashFn(),this.sendRequest(u,l,f=>{const h=f.d,p=f.s;di.warnOnListenWarnings_(h,n),(this.listens.get(i)&&this.listens.get(i).get(a))===t&&(this.log_("listen response",f),p!=="ok"&&this.removeListen_(i,a),t.onComplete&&t.onComplete(p,h))})}static warnOnListenWarnings_(t,n){if(t&&typeof t=="object"&&kr(t,"w")){const i=jo(t,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const a='".indexOn": "'+n._queryParams.getIndex().toString()+'"',l=n._path.toString();dn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||oP(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ME)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,n=aP(t)?"auth":"gauth",i={cred:t};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,a=>{const l=a.s,u=a.d||"error";this.authToken_===t&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const n=t.s,i=t.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(t,n){const i=t._path.toString(),a=t._queryIdentifier;this.log_("Unlisten called for "+i+" "+a),he(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,a)&&this.connected_&&this.sendUnlisten_(i,a,t._queryObject,n)}sendUnlisten_(t,n,i,a){this.log_("Unlisten on "+t+" for "+n);const l={p:t},u="n";a&&(l.q=i,l.t=a),this.sendRequest(u,l)}onDisconnectPut(t,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,n,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:n,onComplete:i})}onDisconnectMerge(t,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,n,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:n,onComplete:i})}onDisconnectCancel(t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(t,n,i,a){const l={p:n,d:i};this.log_("onDisconnect "+t,l),this.sendRequest(t,l,u=>{a&&setTimeout(()=>{a(u.s,u.d)},Math.floor(0))})}put(t,n,i,a){this.putInternal("p",t,n,i,a)}merge(t,n,i,a){this.putInternal("m",t,n,i,a)}putInternal(t,n,i,a,l){this.initConnection_();const u={p:n,d:i};l!==void 0&&(u.h=l),this.outstandingPuts_.push({action:t,request:u,onComplete:a}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(t){const n=this.outstandingPuts_[t].action,i=this.outstandingPuts_[t].request,a=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(n,i,l=>{this.log_(n+" response",l),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(l.s,l.d)})}reportStats(t){if(this.connected_){const n={c:t};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const l=i.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+$t(t));const n=t.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,n){this.log_("handleServerMessage",t,n),t==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):t==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):t==="c"?this.onListenRevoked_(n.p,n.q):t==="ac"?this.onAuthRevoked_(n.s,n.d):t==="apc"?this.onAppCheckRevoked_(n.s,n.d):t==="sd"?this.onSecurityDebugPacket_(n):Fy("Unrecognized action received from server: "+$t(t)+`
Are you using the latest client?`)}onReady_(t,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){he(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=lc,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=lc,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>V3&&(this.reconnectDelay_=lc),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-t);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*q3)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+di.nextConnectionId_++,l=this.lastSessionId;let u=!1,f=null;const h=function(){f?f.close():(u=!0,i())},p=function(y){he(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(y)};this.realtime_={close:h,sendRequest:p};const g=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[y,_]=await Promise.all([this.authTokenProvider_.getToken(g),this.appCheckTokenProvider_.getToken(g)]);u?Jt("getToken() completed but was canceled"):(Jt("getToken() completed. Creating connection."),this.authToken_=y&&y.accessToken,this.appCheckToken_=_&&_.token,f=new j3(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,i,b=>{dn(b+" ("+this.repoInfo_.toString()+")"),this.interrupt(G3)},l))}catch(y){this.log_("Failed to get token: "+y),u||(this.repoInfo_.nodeAdmin&&dn(y),h())}}}interrupt(t){Jt("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){Jt("Resuming connection for reason: "+t),delete this.interruptReasons_[t],Iy(this.interruptReasons_)&&(this.reconnectDelay_=lc,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const n=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const n=this.outstandingPuts_[t];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,n){let i;n?i=n.map(l=>t_(l)).join("$"):i="default";const a=this.removeListen_(t,i);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(t,n){const i=new ut(t).toString();let a;if(this.listens.has(i)){const l=this.listens.get(i);a=l.get(n),l.delete(n),l.size===0&&this.listens.delete(i)}else a=void 0;return a}onAuthRevoked_(t,n){Jt("Auth token revoked: "+t+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=kE&&(this.reconnectDelay_=ME,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,n){Jt("App check token revoked: "+t+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=kE&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const n of t.values())this.sendListen_(n);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let n="js";t["sdk."+n+"."+UR.replace(/\./g,"-")]=1,Uv()?t["framework.cordova"]=1:VC()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=Qf.getInstance().currentlyOnline();return Iy(this.interruptReasons_)&&t}}di.nextPersistentConnectionId_=0;di.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Bh{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,n){const i=new Ve(zo,t),a=new Ve(zo,n);return this.compare(i,a)!==0}minPost(){return Ve.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xd;class cA extends Bh{static get __EMPTY_NODE(){return Xd}static set __EMPTY_NODE(t){Xd=t}compare(t,n){return Ra(t.name,n.name)}isDefinedOn(t){throw Wo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,n){return!1}minPost(){return Ve.MIN}maxPost(){return new Ve(va,Xd)}makePost(t,n){return he(typeof t=="string","KeyIndex indexValue must always be a string."),new Ve(t,Xd)}toString(){return".key"}}const Ro=new cA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(t,n,i,a,l=null){this.isReverse_=a,this.resultGenerator_=l,this.nodeStack_=[];let u=1;for(;!t.isEmpty();)if(t=t,u=n?i(t.key,n):1,a&&(u*=-1),u<0)this.isReverse_?t=t.left:t=t.right;else if(u===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(t.key,t.value):n={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class Vt{constructor(t,n,i,a,l){this.key=t,this.value=n,this.color=i??Vt.RED,this.left=a??bn.EMPTY_NODE,this.right=l??bn.EMPTY_NODE}copy(t,n,i,a,l){return new Vt(t??this.key,n??this.value,i??this.color,a??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,i){let a=this;const l=i(t,a.key);return l<0?a=a.copy(null,null,null,a.left.insert(t,n,i),null):l===0?a=a.copy(null,n,null,null,null):a=a.copy(null,null,null,null,a.right.insert(t,n,i)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return bn.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,n){let i,a;if(i=this,n(t,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(t,i.key)===0){if(i.right.isEmpty())return bn.EMPTY_NODE;a=i.right.min_(),i=i.copy(a.key,a.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,Vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,Vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}Vt.RED=!0;Vt.BLACK=!1;class Y3{copy(t,n,i,a,l){return this}insert(t,n,i){return new Vt(t,n,null)}remove(t,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class bn{constructor(t,n=bn.EMPTY_NODE){this.comparator_=t,this.root_=n}insert(t,n){return new bn(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,Vt.BLACK,null,null))}remove(t){return new bn(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,Vt.BLACK,null,null))}get(t){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(t,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(t){let n,i=this.root_,a=null;for(;!i.isEmpty();)if(n=this.comparator_(t,i.key),n===0){if(i.left.isEmpty())return a?a.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(a=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new Zd(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,n){return new Zd(this.root_,t,this.comparator_,!1,n)}getReverseIteratorFrom(t,n){return new Zd(this.root_,t,this.comparator_,!0,n)}getReverseIterator(t){return new Zd(this.root_,null,this.comparator_,!0,t)}}bn.EMPTY_NODE=new Y3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W3(e,t){return Ra(e.name,t.name)}function l_(e,t){return Ra(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vy;function Q3(e){Vy=e}const uA=function(e){return typeof e=="number"?"number:"+HR(e):"string:"+e},dA=function(e){if(e.isLeafNode()){const t=e.val();he(typeof t=="string"||typeof t=="number"||typeof t=="object"&&kr(t,".sv"),"Priority must be a string or number.")}else he(e===Vy||e.isEmpty(),"priority of unexpected type.");he(e===Vy||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let LE;class Ft{static set __childrenNodeConstructor(t){LE=t}static get __childrenNodeConstructor(){return LE}constructor(t,n=Ft.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=n,this.lazyHash_=null,he(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),dA(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new Ft(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:Ft.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return We(t)?this:qe(t)===".priority"?this.priorityNode_:Ft.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,n){return null}updateImmediateChild(t,n){return t===".priority"?this.updatePriority(n):n.isEmpty()&&t!==".priority"?this:Ft.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}updateChild(t,n){const i=qe(t);return i===null?n:n.isEmpty()&&i!==".priority"?this:(he(i!==".priority"||fs(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Ft.__childrenNodeConstructor.EMPTY_NODE.updateChild(pt(t),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,n){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+uA(this.priorityNode_.val())+":");const n=typeof this.value_;t+=n+":",n==="number"?t+=HR(this.value_):t+=this.value_,this.lazyHash_=zR(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===Ft.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof Ft.__childrenNodeConstructor?-1:(he(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const n=typeof t.value_,i=typeof this.value_,a=Ft.VALUE_TYPE_ORDER.indexOf(n),l=Ft.VALUE_TYPE_ORDER.indexOf(i);return he(a>=0,"Unknown leaf type: "+n),he(l>=0,"Unknown leaf type: "+i),a===l?i==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:l-a}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const n=t;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ft.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fA,hA;function K3(e){fA=e}function X3(e){hA=e}class Z3 extends Bh{compare(t,n){const i=t.node.getPriority(),a=n.node.getPriority(),l=i.compareTo(a);return l===0?Ra(t.name,n.name):l}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,n){return!t.getPriority().equals(n.getPriority())}minPost(){return Ve.MIN}maxPost(){return new Ve(va,new Ft("[PRIORITY-POST]",hA))}makePost(t,n){const i=fA(t);return new Ve(n,new Ft("[PRIORITY-POST]",i))}toString(){return".priority"}}const At=new Z3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J3=Math.log(2);class e5{constructor(t){const n=l=>parseInt(Math.log(l)/J3,10),i=l=>parseInt(Array(l+1).join("1"),2);this.count=n(t+1),this.current_=this.count-1;const a=i(this.count);this.bits_=t+1&a}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const Kf=function(e,t,n,i){e.sort(t);const a=function(h,p){const g=p-h;let y,_;if(g===0)return null;if(g===1)return y=e[h],_=n?n(y):y,new Vt(_,y.node,Vt.BLACK,null,null);{const b=parseInt(g/2,10)+h,w=a(h,b),O=a(b+1,p);return y=e[b],_=n?n(y):y,new Vt(_,y.node,Vt.BLACK,w,O)}},l=function(h){let p=null,g=null,y=e.length;const _=function(w,O){const R=y-w,D=y;y-=w;const k=a(R+1,D),x=e[R],A=n?n(x):x;b(new Vt(A,x.node,O,null,k))},b=function(w){p?(p.left=w,p=w):(g=w,p=w)};for(let w=0;w<h.count;++w){const O=h.nextBitIsOne(),R=Math.pow(2,h.count-(w+1));O?_(R,Vt.BLACK):(_(R,Vt.BLACK),_(R,Vt.RED))}return g},u=new e5(e.length),f=l(u);return new bn(i||t,f)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yg;const go={};class oi{static get Default(){return he(go&&At,"ChildrenNode.ts has not been loaded"),Yg=Yg||new oi({".priority":go},{".priority":At}),Yg}constructor(t,n){this.indexes_=t,this.indexSet_=n}get(t){const n=jo(this.indexes_,t);if(!n)throw new Error("No index defined for "+t);return n instanceof bn?n:null}hasIndex(t){return kr(this.indexSet_,t.toString())}addIndex(t,n){he(t!==Ro,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let a=!1;const l=n.getIterator(Ve.Wrap);let u=l.getNext();for(;u;)a=a||t.isDefinedOn(u.node),i.push(u),u=l.getNext();let f;a?f=Kf(i,t.getCompare()):f=go;const h=t.toString(),p={...this.indexSet_};p[h]=t;const g={...this.indexes_};return g[h]=f,new oi(g,p)}addToIndexes(t,n){const i=zf(this.indexes_,(a,l)=>{const u=jo(this.indexSet_,l);if(he(u,"Missing index implementation for "+l),a===go)if(u.isDefinedOn(t.node)){const f=[],h=n.getIterator(Ve.Wrap);let p=h.getNext();for(;p;)p.name!==t.name&&f.push(p),p=h.getNext();return f.push(t),Kf(f,u.getCompare())}else return go;else{const f=n.get(t.name);let h=a;return f&&(h=h.remove(new Ve(t.name,f))),h.insert(t,t.node)}});return new oi(i,this.indexSet_)}removeFromIndexes(t,n){const i=zf(this.indexes_,a=>{if(a===go)return a;{const l=n.get(t.name);return l?a.remove(new Ve(t.name,l)):a}});return new oi(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cc;class Ne{static get EMPTY_NODE(){return cc||(cc=new Ne(new bn(l_),null,oi.Default))}constructor(t,n,i){this.children_=t,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&dA(this.priorityNode_),this.children_.isEmpty()&&he(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||cc}updatePriority(t){return this.children_.isEmpty()?this:new Ne(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const n=this.children_.get(t);return n===null?cc:n}}getChild(t){const n=qe(t);return n===null?this:this.getImmediateChild(n).getChild(pt(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,n){if(he(n,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(n);{const i=new Ve(t,n);let a,l;n.isEmpty()?(a=this.children_.remove(t),l=this.indexMap_.removeFromIndexes(i,this.children_)):(a=this.children_.insert(t,n),l=this.indexMap_.addToIndexes(i,this.children_));const u=a.isEmpty()?cc:this.priorityNode_;return new Ne(a,u,l)}}updateChild(t,n){const i=qe(t);if(i===null)return n;{he(qe(t)!==".priority"||fs(t)===1,".priority must be the last token in a path");const a=this.getImmediateChild(i).updateChild(pt(t),n);return this.updateImmediateChild(i,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const n={};let i=0,a=0,l=!0;if(this.forEachChild(At,(u,f)=>{n[u]=f.val(t),i++,l&&Ne.INTEGER_REGEXP_.test(u)?a=Math.max(a,Number(u)):l=!1}),!t&&l&&a<2*i){const u=[];for(const f in n)u[f]=n[f];return u}else return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+uA(this.getPriority().val())+":"),this.forEachChild(At,(n,i)=>{const a=i.hash();a!==""&&(t+=":"+n+":"+a)}),this.lazyHash_=t===""?"":zR(t)}return this.lazyHash_}getPredecessorChildName(t,n,i){const a=this.resolveIndex_(i);if(a){const l=a.getPredecessorKey(new Ve(t,n));return l?l.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const n=this.resolveIndex_(t);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(t){const n=this.getFirstChildName(t);return n?new Ve(n,this.children_.get(n)):null}getLastChildName(t){const n=this.resolveIndex_(t);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(t){const n=this.getLastChildName(t);return n?new Ve(n,this.children_.get(n)):null}forEachChild(t,n){const i=this.resolveIndex_(t);return i?i.inorderTraversal(a=>n(a.name,a.node)):this.children_.inorderTraversal(n)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(t,a=>a);{const a=this.children_.getIteratorFrom(t.name,Ve.Wrap);let l=a.peek();for(;l!=null&&n.compare(l,t)<0;)a.getNext(),l=a.peek();return a}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(t,a=>a);{const a=this.children_.getReverseIteratorFrom(t.name,Ve.Wrap);let l=a.peek();for(;l!=null&&n.compare(l,t)>0;)a.getNext(),l=a.peek();return a}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===_u?-1:0}withIndex(t){if(t===Ro||this.indexMap_.hasIndex(t))return this;{const n=this.indexMap_.addIndex(t,this.children_);return new Ne(this.children_,this.priorityNode_,n)}}isIndexed(t){return t===Ro||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const n=t;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(At),a=n.getIterator(At);let l=i.getNext(),u=a.getNext();for(;l&&u;){if(l.name!==u.name||!l.node.equals(u.node))return!1;l=i.getNext(),u=a.getNext()}return l===null&&u===null}else return!1;else return!1}}resolveIndex_(t){return t===Ro?null:this.indexMap_.get(t.toString())}}Ne.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class t5 extends Ne{constructor(){super(new bn(l_),Ne.EMPTY_NODE,oi.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return Ne.EMPTY_NODE}isEmpty(){return!1}}const _u=new t5;Object.defineProperties(Ve,{MIN:{value:new Ve(zo,Ne.EMPTY_NODE)},MAX:{value:new Ve(va,_u)}});cA.__EMPTY_NODE=Ne.EMPTY_NODE;Ft.__childrenNodeConstructor=Ne;Q3(_u);X3(_u);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n5=!0;function Ut(e,t=null){if(e===null)return Ne.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(t=e[".priority"]),he(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){const n=e;return new Ft(n,Ut(t))}if(!(e instanceof Array)&&n5){const n=[];let i=!1;if(tn(e,(u,f)=>{if(u.substring(0,1)!=="."){const h=Ut(f);h.isEmpty()||(i=i||!h.getPriority().isEmpty(),n.push(new Ve(u,h)))}}),n.length===0)return Ne.EMPTY_NODE;const l=Kf(n,W3,u=>u.name,l_);if(i){const u=Kf(n,At.getCompare());return new Ne(l,Ut(t),new oi({".priority":u},{".priority":At}))}else return new Ne(l,Ut(t),oi.Default)}else{let n=Ne.EMPTY_NODE;return tn(e,(i,a)=>{if(kr(e,i)&&i.substring(0,1)!=="."){const l=Ut(a);(l.isLeafNode()||!l.isEmpty())&&(n=n.updateImmediateChild(i,l))}}),n.updatePriority(Ut(t))}}K3(Ut);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r5 extends Bh{constructor(t){super(),this.indexPath_=t,he(!We(t)&&qe(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,n){const i=this.extractChild(t.node),a=this.extractChild(n.node),l=i.compareTo(a);return l===0?Ra(t.name,n.name):l}makePost(t,n){const i=Ut(t),a=Ne.EMPTY_NODE.updateChild(this.indexPath_,i);return new Ve(n,a)}maxPost(){const t=Ne.EMPTY_NODE.updateChild(this.indexPath_,_u);return new Ve(va,t)}toString(){return Xc(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i5 extends Bh{compare(t,n){const i=t.node.compareTo(n.node);return i===0?Ra(t.name,n.name):i}isDefinedOn(t){return!0}indexedValueChanged(t,n){return!t.equals(n)}minPost(){return Ve.MIN}maxPost(){return Ve.MAX}makePost(t,n){const i=Ut(t);return new Ve(n,i)}toString(){return".value"}}const s5=new i5;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pA(e){return{type:"value",snapshotNode:e}}function Bo(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Zc(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Jc(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function a5(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(t){this.index_=t}updateChild(t,n,i,a,l,u){he(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=t.getImmediateChild(n);return f.getChild(a).equals(i.getChild(a))&&f.isEmpty()===i.isEmpty()||(u!=null&&(i.isEmpty()?t.hasChild(n)?u.trackChildChange(Zc(n,f)):he(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?u.trackChildChange(Bo(n,i)):u.trackChildChange(Jc(n,i,f))),t.isLeafNode()&&i.isEmpty())?t:t.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(t,n,i){return i!=null&&(t.isLeafNode()||t.forEachChild(At,(a,l)=>{n.hasChild(a)||i.trackChildChange(Zc(a,l))}),n.isLeafNode()||n.forEachChild(At,(a,l)=>{if(t.hasChild(a)){const u=t.getImmediateChild(a);u.equals(l)||i.trackChildChange(Jc(a,l,u))}else i.trackChildChange(Bo(a,l))})),n.withIndex(this.index_)}updatePriority(t,n){return t.isEmpty()?Ne.EMPTY_NODE:t.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(t){this.indexedFilter_=new c_(t.getIndex()),this.index_=t.getIndex(),this.startPost_=eu.getStartPost_(t),this.endPost_=eu.getEndPost_(t),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),t)<=0:this.index_.compare(this.getStartPost(),t)<0,i=this.endIsInclusive_?this.index_.compare(t,this.getEndPost())<=0:this.index_.compare(t,this.getEndPost())<0;return n&&i}updateChild(t,n,i,a,l,u){return this.matches(new Ve(n,i))||(i=Ne.EMPTY_NODE),this.indexedFilter_.updateChild(t,n,i,a,l,u)}updateFullNode(t,n,i){n.isLeafNode()&&(n=Ne.EMPTY_NODE);let a=n.withIndex(this.index_);a=a.updatePriority(Ne.EMPTY_NODE);const l=this;return n.forEachChild(At,(u,f)=>{l.matches(new Ve(u,f))||(a=a.updateImmediateChild(u,Ne.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,a,i)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const n=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),n)}else return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const n=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),n)}else return t.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o5{constructor(t){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new eu(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft(),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}updateChild(t,n,i,a,l,u){return this.rangedFilter_.matches(new Ve(n,i))||(i=Ne.EMPTY_NODE),t.getImmediateChild(n).equals(i)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,n,i,a,l,u):this.fullLimitUpdateChild_(t,n,i,l,u)}updateFullNode(t,n,i){let a;if(n.isLeafNode()||n.isEmpty())a=Ne.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){a=Ne.EMPTY_NODE.withIndex(this.index_);let l;this.reverse_?l=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):l=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;l.hasNext()&&u<this.limit_;){const f=l.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))a=a.updateImmediateChild(f.name,f.node),u++;else break;else continue}}else{a=n.withIndex(this.index_),a=a.updatePriority(Ne.EMPTY_NODE);let l;this.reverse_?l=a.getReverseIterator(this.index_):l=a.getIterator(this.index_);let u=0;for(;l.hasNext();){const f=l.getNext();u<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?u++:a=a.updateImmediateChild(f.name,Ne.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,a,i)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,n,i,a,l){let u;if(this.reverse_){const y=this.index_.getCompare();u=(_,b)=>y(b,_)}else u=this.index_.getCompare();const f=t;he(f.numChildren()===this.limit_,"");const h=new Ve(n,i),p=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),g=this.rangedFilter_.matches(h);if(f.hasChild(n)){const y=f.getImmediateChild(n);let _=a.getChildAfterChild(this.index_,p,this.reverse_);for(;_!=null&&(_.name===n||f.hasChild(_.name));)_=a.getChildAfterChild(this.index_,_,this.reverse_);const b=_==null?1:u(_,h);if(g&&!i.isEmpty()&&b>=0)return l?.trackChildChange(Jc(n,i,y)),f.updateImmediateChild(n,i);{l?.trackChildChange(Zc(n,y));const O=f.updateImmediateChild(n,Ne.EMPTY_NODE);return _!=null&&this.rangedFilter_.matches(_)?(l?.trackChildChange(Bo(_.name,_.node)),O.updateImmediateChild(_.name,_.node)):O}}else return i.isEmpty()?t:g&&u(p,h)>=0?(l!=null&&(l.trackChildChange(Zc(p.name,p.node)),l.trackChildChange(Bo(n,i))),f.updateImmediateChild(n,i).updateImmediateChild(p.name,Ne.EMPTY_NODE)):t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=At}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return he(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return he(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:zo}hasEnd(){return this.endSet_}getIndexEndValue(){return he(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return he(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:va}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return he(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===At}copy(){const t=new u_;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function l5(e){return e.loadsAllData()?new c_(e.getIndex()):e.hasLimit()?new o5(e):new eu(e)}function PE(e){const t={};if(e.isDefault())return t;let n;if(e.index_===At?n="$priority":e.index_===s5?n="$value":e.index_===Ro?n="$key":(he(e.index_ instanceof r5,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=$t(n),e.startSet_){const i=e.startAfterSet_?"startAfter":"startAt";t[i]=$t(e.indexStartValue_),e.startNameSet_&&(t[i]+=","+$t(e.indexStartName_))}if(e.endSet_){const i=e.endBeforeSet_?"endBefore":"endAt";t[i]=$t(e.indexEndValue_),e.endNameSet_&&(t[i]+=","+$t(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function jE(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;n===""&&(e.isViewFromLeft()?n="l":n="r"),t.vf=n}return e.index_!==At&&(t.i=e.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf extends sA{reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,n){return n!==void 0?"tag$"+n:(he(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}constructor(t,n,i,a){super(),this.repoInfo_=t,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=a,this.log_=vu("p:rest:"),this.listens_={}}listen(t,n,i,a){const l=t._path.toString();this.log_("Listen called for "+l+" "+t._queryIdentifier);const u=Xf.getListenId_(t,i),f={};this.listens_[u]=f;const h=PE(t._queryParams);this.restRequest_(l+".json",h,(p,g)=>{let y=g;if(p===404&&(y=null,p=null),p===null&&this.onDataUpdate_(l,y,!1,i),jo(this.listens_,u)===f){let _;p?p===401?_="permission_denied":_="rest_error:"+p:_="ok",a(_,null)}})}unlisten(t,n){const i=Xf.getListenId_(t,n);delete this.listens_[i]}get(t){const n=PE(t._queryParams),i=t._path.toString(),a=new du;return this.restRequest_(i+".json",n,(l,u)=>{let f=u;l===404&&(f=null,l=null),l===null?(this.onDataUpdate_(i,f,!1,null),a.resolve(f)):a.reject(new Error(f))}),a.promise}refreshAuthToken(t){}restRequest_(t,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,l])=>{a&&a.accessToken&&(n.auth=a.accessToken),l&&l.token&&(n.ac=l.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+Ko(n);this.log_("Sending REST request for "+u);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(i&&f.readyState===4){this.log_("REST Response for "+u+" received. status:",f.status,"response:",f.responseText);let h=null;if(f.status>=200&&f.status<300){try{h=Bc(f.responseText)}catch{dn("Failed to parse JSON response for "+u+": "+f.responseText)}i(null,h)}else f.status!==401&&f.status!==404&&dn("Got unsuccessful REST response for "+u+" Status: "+f.status),i(f.status);i=null}},f.open("GET",u,!0),f.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Zf(){return{value:null,children:new Map}}function mA(e,t,n){if(We(t))e.value=n,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(t,n);else{const i=qe(t);e.children.has(i)||e.children.set(i,Zf());const a=e.children.get(i);t=pt(t),mA(a,t,n)}}function Gy(e,t,n){e.value!==null?n(t,e.value):u5(e,(i,a)=>{const l=new ut(t.toString()+"/"+i);Gy(a,l,n)})}function u5(e,t){e.children.forEach((n,i)=>{t(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d5{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),n={...t};return this.last_&&tn(this.last_,(i,a)=>{n[i]=n[i]-a}),this.last_=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE=10*1e3,f5=30*1e3,h5=300*1e3;class p5{constructor(t,n){this.server_=n,this.statsToReport_={},this.statsListener_=new d5(t);const i=UE+(f5-UE)*Math.random();Nc(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const t=this.statsListener_.get(),n={};let i=!1;tn(t,(a,l)=>{l>0&&kr(this.statsToReport_,a)&&(n[a]=l,i=!0)}),i&&this.server_.reportStats(n),Nc(this.reportStats_.bind(this),Math.floor(Math.random()*2*h5))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class _a{constructor(t,n,i){this.source=t,this.path=n,this.snap=i,this.type=cr.OVERWRITE}operationForChild(t){return We(this.path)?new _a(this.source,Xe(),this.snap.getImmediateChild(t)):new _a(this.source,pt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(t,n,i){this.source=t,this.path=n,this.children=i,this.type=cr.MERGE}operationForChild(t){if(We(this.path)){const n=this.children.subtree(new ut(t));return n.isEmpty()?null:n.value?new _a(this.source,Xe(),n.value):new Ho(this.source,Xe(),n)}else return he(qe(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new Ho(this.source,pt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class m5{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function g5(e,t,n,i){const a=[],l=[];return t.forEach(u=>{u.type==="child_changed"&&e.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&l.push(a5(u.childName,u.snapshotNode))}),uc(e,a,"child_removed",t,i,n),uc(e,a,"child_added",t,i,n),uc(e,a,"child_moved",l,i,n),uc(e,a,"child_changed",t,i,n),uc(e,a,"value",t,i,n),a}function uc(e,t,n,i,a,l){const u=i.filter(f=>f.type===n);u.sort((f,h)=>v5(e,f,h)),u.forEach(f=>{const h=y5(e,f,l);a.forEach(p=>{p.respondsTo(f.type)&&t.push(p.createEvent(h,e.query_))})})}function y5(e,t,n){return t.type==="value"||t.type==="child_removed"||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function v5(e,t,n){if(t.childName==null||n.childName==null)throw Wo("Should only compare child_ events.");const i=new Ve(t.childName,t.snapshotNode),a=new Ve(n.childName,n.snapshotNode);return e.index_.compare(i,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hh(e,t){return{eventCache:e,serverCache:t}}function Mc(e,t,n,i){return Hh(new hs(t,n,i),e.serverCache)}function gA(e,t,n,i){return Hh(e.eventCache,new hs(t,n,i))}function eh(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function ba(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wg;const _5=()=>(Wg||(Wg=new bn(r3)),Wg);class ht{static fromObject(t){let n=new ht(null);return tn(t,(i,a)=>{n=n.set(new ut(i),a)}),n}constructor(t,n=_5()){this.value=t,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,n){if(this.value!=null&&n(this.value))return{path:Xe(),value:this.value};if(We(t))return null;{const i=qe(t),a=this.children.get(i);if(a!==null){const l=a.findRootMostMatchingPathAndValue(pt(t),n);return l!=null?{path:Rt(new ut(i),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(We(t))return this;{const n=qe(t),i=this.children.get(n);return i!==null?i.subtree(pt(t)):new ht(null)}}set(t,n){if(We(t))return new ht(n,this.children);{const i=qe(t),l=(this.children.get(i)||new ht(null)).set(pt(t),n),u=this.children.insert(i,l);return new ht(this.value,u)}}remove(t){if(We(t))return this.children.isEmpty()?new ht(null):new ht(null,this.children);{const n=qe(t),i=this.children.get(n);if(i){const a=i.remove(pt(t));let l;return a.isEmpty()?l=this.children.remove(n):l=this.children.insert(n,a),this.value===null&&l.isEmpty()?new ht(null):new ht(this.value,l)}else return this}}get(t){if(We(t))return this.value;{const n=qe(t),i=this.children.get(n);return i?i.get(pt(t)):null}}setTree(t,n){if(We(t))return n;{const i=qe(t),l=(this.children.get(i)||new ht(null)).setTree(pt(t),n);let u;return l.isEmpty()?u=this.children.remove(i):u=this.children.insert(i,l),new ht(this.value,u)}}fold(t){return this.fold_(Xe(),t)}fold_(t,n){const i={};return this.children.inorderTraversal((a,l)=>{i[a]=l.fold_(Rt(t,a),n)}),n(t,this.value,i)}findOnPath(t,n){return this.findOnPath_(t,Xe(),n)}findOnPath_(t,n,i){const a=this.value?i(n,this.value):!1;if(a)return a;if(We(t))return null;{const l=qe(t),u=this.children.get(l);return u?u.findOnPath_(pt(t),Rt(n,l),i):null}}foreachOnPath(t,n){return this.foreachOnPath_(t,Xe(),n)}foreachOnPath_(t,n,i){if(We(t))return this;{this.value&&i(n,this.value);const a=qe(t),l=this.children.get(a);return l?l.foreachOnPath_(pt(t),Rt(n,a),i):new ht(null)}}foreach(t){this.foreach_(Xe(),t)}foreach_(t,n){this.children.inorderTraversal((i,a)=>{a.foreach_(Rt(t,i),n)}),this.value&&n(t,this.value)}foreachChild(t){this.children.inorderTraversal((n,i)=>{i.value&&t(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(t){this.writeTree_=t}static empty(){return new pr(new ht(null))}}function kc(e,t,n){if(We(t))return new pr(new ht(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(i!=null){const a=i.path;let l=i.value;const u=un(a,t);return l=l.updateChild(u,n),new pr(e.writeTree_.set(a,l))}else{const a=new ht(n),l=e.writeTree_.setTree(t,a);return new pr(l)}}}function Yy(e,t,n){let i=e;return tn(n,(a,l)=>{i=kc(i,Rt(t,a),l)}),i}function $E(e,t){if(We(t))return pr.empty();{const n=e.writeTree_.setTree(t,new ht(null));return new pr(n)}}function Wy(e,t){return Aa(e,t)!=null}function Aa(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return n!=null?e.writeTree_.get(n.path).getChild(un(n.path,t)):null}function zE(e){const t=[],n=e.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(At,(i,a)=>{t.push(new Ve(i,a))}):e.writeTree_.children.inorderTraversal((i,a)=>{a.value!=null&&t.push(new Ve(i,a.value))}),t}function ss(e,t){if(We(t))return e;{const n=Aa(e,t);return n!=null?new pr(new ht(n)):new pr(e.writeTree_.subtree(t))}}function Qy(e){return e.writeTree_.isEmpty()}function Fo(e,t){return yA(Xe(),e.writeTree_,t)}function yA(e,t,n){if(t.value!=null)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal((a,l)=>{a===".priority"?(he(l.value!==null,"Priority writes must always be leaf nodes"),i=l.value):n=yA(Rt(e,a),l,n)}),!n.getChild(e).isEmpty()&&i!==null&&(n=n.updateChild(Rt(e,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(e,t){return SA(t,e)}function b5(e,t,n,i,a){he(i>e.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:a}),a&&(e.visibleWrites=kc(e.visibleWrites,t,n)),e.lastWriteId=i}function S5(e,t,n,i){he(i>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:i,visible:!0}),e.visibleWrites=Yy(e.visibleWrites,t,n),e.lastWriteId=i}function w5(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}function E5(e,t){const n=e.allWrites.findIndex(f=>f.writeId===t);he(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let a=i.visible,l=!1,u=e.allWrites.length-1;for(;a&&u>=0;){const f=e.allWrites[u];f.visible&&(u>=n&&x5(f,i.path)?a=!1:Wn(i.path,f.path)&&(l=!0)),u--}if(a){if(l)return T5(e),!0;if(i.snap)e.visibleWrites=$E(e.visibleWrites,i.path);else{const f=i.children;tn(f,h=>{e.visibleWrites=$E(e.visibleWrites,Rt(i.path,h))})}return!0}else return!1}function x5(e,t){if(e.snap)return Wn(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Wn(Rt(e.path,n),t))return!0;return!1}function T5(e){e.visibleWrites=vA(e.allWrites,C5,Xe()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function C5(e){return e.visible}function vA(e,t,n){let i=pr.empty();for(let a=0;a<e.length;++a){const l=e[a];if(t(l)){const u=l.path;let f;if(l.snap)Wn(n,u)?(f=un(n,u),i=kc(i,f,l.snap)):Wn(u,n)&&(f=un(u,n),i=kc(i,Xe(),l.snap.getChild(f)));else if(l.children){if(Wn(n,u))f=un(n,u),i=Yy(i,f,l.children);else if(Wn(u,n))if(f=un(u,n),We(f))i=Yy(i,Xe(),l.children);else{const h=jo(l.children,qe(f));if(h){const p=h.getChild(pt(f));i=kc(i,Xe(),p)}}}else throw Wo("WriteRecord should have .snap or .children")}}return i}function _A(e,t,n,i,a){if(!i&&!a){const l=Aa(e.visibleWrites,t);if(l!=null)return l;{const u=ss(e.visibleWrites,t);if(Qy(u))return n;if(n==null&&!Wy(u,Xe()))return null;{const f=n||Ne.EMPTY_NODE;return Fo(u,f)}}}else{const l=ss(e.visibleWrites,t);if(!a&&Qy(l))return n;if(!a&&n==null&&!Wy(l,Xe()))return null;{const u=function(p){return(p.visible||a)&&(!i||!~i.indexOf(p.writeId))&&(Wn(p.path,t)||Wn(t,p.path))},f=vA(e.allWrites,u,t),h=n||Ne.EMPTY_NODE;return Fo(f,h)}}}function R5(e,t,n){let i=Ne.EMPTY_NODE;const a=Aa(e.visibleWrites,t);if(a)return a.isLeafNode()||a.forEachChild(At,(l,u)=>{i=i.updateImmediateChild(l,u)}),i;if(n){const l=ss(e.visibleWrites,t);return n.forEachChild(At,(u,f)=>{const h=Fo(ss(l,new ut(u)),f);i=i.updateImmediateChild(u,h)}),zE(l).forEach(u=>{i=i.updateImmediateChild(u.name,u.node)}),i}else{const l=ss(e.visibleWrites,t);return zE(l).forEach(u=>{i=i.updateImmediateChild(u.name,u.node)}),i}}function A5(e,t,n,i,a){he(i||a,"Either existingEventSnap or existingServerSnap must exist");const l=Rt(t,n);if(Wy(e.visibleWrites,l))return null;{const u=ss(e.visibleWrites,l);return Qy(u)?a.getChild(n):Fo(u,a.getChild(n))}}function I5(e,t,n,i){const a=Rt(t,n),l=Aa(e.visibleWrites,a);if(l!=null)return l;if(i.isCompleteForChild(n)){const u=ss(e.visibleWrites,a);return Fo(u,i.getNode().getImmediateChild(n))}else return null}function D5(e,t){return Aa(e.visibleWrites,t)}function O5(e,t,n,i,a,l,u){let f;const h=ss(e.visibleWrites,t),p=Aa(h,Xe());if(p!=null)f=p;else if(n!=null)f=Fo(h,n);else return[];if(f=f.withIndex(u),!f.isEmpty()&&!f.isLeafNode()){const g=[],y=u.getCompare(),_=l?f.getReverseIteratorFrom(i,u):f.getIteratorFrom(i,u);let b=_.getNext();for(;b&&g.length<a;)y(b,i)!==0&&g.push(b),b=_.getNext();return g}else return[]}function N5(){return{visibleWrites:pr.empty(),allWrites:[],lastWriteId:-1}}function th(e,t,n,i){return _A(e.writeTree,e.treePath,t,n,i)}function p_(e,t){return R5(e.writeTree,e.treePath,t)}function BE(e,t,n,i){return A5(e.writeTree,e.treePath,t,n,i)}function nh(e,t){return D5(e.writeTree,Rt(e.treePath,t))}function M5(e,t,n,i,a,l){return O5(e.writeTree,e.treePath,t,n,i,a,l)}function m_(e,t,n){return I5(e.writeTree,e.treePath,t,n)}function bA(e,t){return SA(Rt(e.treePath,t),e.writeTree)}function SA(e,t){return{treePath:e,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k5{constructor(){this.changeMap=new Map}trackChildChange(t){const n=t.type,i=t.childName;he(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),he(i!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(i);if(a){const l=a.type;if(n==="child_added"&&l==="child_removed")this.changeMap.set(i,Jc(i,t.snapshotNode,a.snapshotNode));else if(n==="child_removed"&&l==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&l==="child_changed")this.changeMap.set(i,Zc(i,a.oldSnap));else if(n==="child_changed"&&l==="child_added")this.changeMap.set(i,Bo(i,t.snapshotNode));else if(n==="child_changed"&&l==="child_changed")this.changeMap.set(i,Jc(i,t.snapshotNode,a.oldSnap));else throw Wo("Illegal combination of changes: "+t+" occurred after "+a)}else this.changeMap.set(i,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L5{getCompleteChild(t){return null}getChildAfterChild(t,n,i){return null}}const wA=new L5;class g_{constructor(t,n,i=null){this.writes_=t,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(t){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(t))return n.getNode().getImmediateChild(t);{const i=this.optCompleteServerCache_!=null?new hs(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return m_(this.writes_,t,i)}}getChildAfterChild(t,n,i){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ba(this.viewCache_),l=M5(this.writes_,a,n,1,i,t);return l.length===0?null:l[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P5(e){return{filter:e}}function j5(e,t){he(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),he(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function U5(e,t,n,i,a){const l=new k5;let u,f;if(n.type===cr.OVERWRITE){const p=n;p.source.fromUser?u=Ky(e,t,p.path,p.snap,i,a,l):(he(p.source.fromServer,"Unknown source."),f=p.source.tagged||t.serverCache.isFiltered()&&!We(p.path),u=rh(e,t,p.path,p.snap,i,a,f,l))}else if(n.type===cr.MERGE){const p=n;p.source.fromUser?u=z5(e,t,p.path,p.children,i,a,l):(he(p.source.fromServer,"Unknown source."),f=p.source.tagged||t.serverCache.isFiltered(),u=Xy(e,t,p.path,p.children,i,a,f,l))}else if(n.type===cr.ACK_USER_WRITE){const p=n;p.revert?u=F5(e,t,p.path,i,a,l):u=B5(e,t,p.path,p.affectedTree,i,a,l)}else if(n.type===cr.LISTEN_COMPLETE)u=H5(e,t,n.path,i,l);else throw Wo("Unknown operation type: "+n.type);const h=l.getChanges();return $5(t,u,h),{viewCache:u,changes:h}}function $5(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const a=i.getNode().isLeafNode()||i.getNode().isEmpty(),l=eh(e);(n.length>0||!e.eventCache.isFullyInitialized()||a&&!i.getNode().equals(l)||!i.getNode().getPriority().equals(l.getPriority()))&&n.push(pA(eh(t)))}}function EA(e,t,n,i,a,l){const u=t.eventCache;if(nh(i,n)!=null)return t;{let f,h;if(We(n))if(he(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const p=ba(t),g=p instanceof Ne?p:Ne.EMPTY_NODE,y=p_(i,g);f=e.filter.updateFullNode(t.eventCache.getNode(),y,l)}else{const p=th(i,ba(t));f=e.filter.updateFullNode(t.eventCache.getNode(),p,l)}else{const p=qe(n);if(p===".priority"){he(fs(n)===1,"Can't have a priority with additional path components");const g=u.getNode();h=t.serverCache.getNode();const y=BE(i,n,g,h);y!=null?f=e.filter.updatePriority(g,y):f=u.getNode()}else{const g=pt(n);let y;if(u.isCompleteForChild(p)){h=t.serverCache.getNode();const _=BE(i,n,u.getNode(),h);_!=null?y=u.getNode().getImmediateChild(p).updateChild(g,_):y=u.getNode().getImmediateChild(p)}else y=m_(i,p,t.serverCache);y!=null?f=e.filter.updateChild(u.getNode(),p,y,g,a,l):f=u.getNode()}}return Mc(t,f,u.isFullyInitialized()||We(n),e.filter.filtersNodes())}}function rh(e,t,n,i,a,l,u,f){const h=t.serverCache;let p;const g=u?e.filter:e.filter.getIndexedFilter();if(We(n))p=g.updateFullNode(h.getNode(),i,null);else if(g.filtersNodes()&&!h.isFiltered()){const b=h.getNode().updateChild(n,i);p=g.updateFullNode(h.getNode(),b,null)}else{const b=qe(n);if(!h.isCompleteForPath(n)&&fs(n)>1)return t;const w=pt(n),R=h.getNode().getImmediateChild(b).updateChild(w,i);b===".priority"?p=g.updatePriority(h.getNode(),R):p=g.updateChild(h.getNode(),b,R,w,wA,null)}const y=gA(t,p,h.isFullyInitialized()||We(n),g.filtersNodes()),_=new g_(a,y,l);return EA(e,y,n,a,_,f)}function Ky(e,t,n,i,a,l,u){const f=t.eventCache;let h,p;const g=new g_(a,t,l);if(We(n))p=e.filter.updateFullNode(t.eventCache.getNode(),i,u),h=Mc(t,p,!0,e.filter.filtersNodes());else{const y=qe(n);if(y===".priority")p=e.filter.updatePriority(t.eventCache.getNode(),i),h=Mc(t,p,f.isFullyInitialized(),f.isFiltered());else{const _=pt(n),b=f.getNode().getImmediateChild(y);let w;if(We(_))w=i;else{const O=g.getCompleteChild(y);O!=null?s_(_)===".priority"&&O.getChild(oA(_)).isEmpty()?w=O:w=O.updateChild(_,i):w=Ne.EMPTY_NODE}if(b.equals(w))h=t;else{const O=e.filter.updateChild(f.getNode(),y,w,_,g,u);h=Mc(t,O,f.isFullyInitialized(),e.filter.filtersNodes())}}}return h}function HE(e,t){return e.eventCache.isCompleteForChild(t)}function z5(e,t,n,i,a,l,u){let f=t;return i.foreach((h,p)=>{const g=Rt(n,h);HE(t,qe(g))&&(f=Ky(e,f,g,p,a,l,u))}),i.foreach((h,p)=>{const g=Rt(n,h);HE(t,qe(g))||(f=Ky(e,f,g,p,a,l,u))}),f}function FE(e,t,n){return n.foreach((i,a)=>{t=t.updateChild(i,a)}),t}function Xy(e,t,n,i,a,l,u,f){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let h=t,p;We(n)?p=i:p=new ht(null).setTree(n,i);const g=t.serverCache.getNode();return p.children.inorderTraversal((y,_)=>{if(g.hasChild(y)){const b=t.serverCache.getNode().getImmediateChild(y),w=FE(e,b,_);h=rh(e,h,new ut(y),w,a,l,u,f)}}),p.children.inorderTraversal((y,_)=>{const b=!t.serverCache.isCompleteForChild(y)&&_.value===null;if(!g.hasChild(y)&&!b){const w=t.serverCache.getNode().getImmediateChild(y),O=FE(e,w,_);h=rh(e,h,new ut(y),O,a,l,u,f)}}),h}function B5(e,t,n,i,a,l,u){if(nh(a,n)!=null)return t;const f=t.serverCache.isFiltered(),h=t.serverCache;if(i.value!=null){if(We(n)&&h.isFullyInitialized()||h.isCompleteForPath(n))return rh(e,t,n,h.getNode().getChild(n),a,l,f,u);if(We(n)){let p=new ht(null);return h.getNode().forEachChild(Ro,(g,y)=>{p=p.set(new ut(g),y)}),Xy(e,t,n,p,a,l,f,u)}else return t}else{let p=new ht(null);return i.foreach((g,y)=>{const _=Rt(n,g);h.isCompleteForPath(_)&&(p=p.set(g,h.getNode().getChild(_)))}),Xy(e,t,n,p,a,l,f,u)}}function H5(e,t,n,i,a){const l=t.serverCache,u=gA(t,l.getNode(),l.isFullyInitialized()||We(n),l.isFiltered());return EA(e,u,n,i,wA,a)}function F5(e,t,n,i,a,l){let u;if(nh(i,n)!=null)return t;{const f=new g_(i,t,a),h=t.eventCache.getNode();let p;if(We(n)||qe(n)===".priority"){let g;if(t.serverCache.isFullyInitialized())g=th(i,ba(t));else{const y=t.serverCache.getNode();he(y instanceof Ne,"serverChildren would be complete if leaf node"),g=p_(i,y)}g=g,p=e.filter.updateFullNode(h,g,l)}else{const g=qe(n);let y=m_(i,g,t.serverCache);y==null&&t.serverCache.isCompleteForChild(g)&&(y=h.getImmediateChild(g)),y!=null?p=e.filter.updateChild(h,g,y,pt(n),f,l):t.eventCache.getNode().hasChild(g)?p=e.filter.updateChild(h,g,Ne.EMPTY_NODE,pt(n),f,l):p=h,p.isEmpty()&&t.serverCache.isFullyInitialized()&&(u=th(i,ba(t)),u.isLeafNode()&&(p=e.filter.updateFullNode(p,u,l)))}return u=t.serverCache.isFullyInitialized()||nh(i,Xe())!=null,Mc(t,p,u,e.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q5{constructor(t,n){this.query_=t,this.eventRegistrations_=[];const i=this.query_._queryParams,a=new c_(i.getIndex()),l=l5(i);this.processor_=P5(l);const u=n.serverCache,f=n.eventCache,h=a.updateFullNode(Ne.EMPTY_NODE,u.getNode(),null),p=l.updateFullNode(Ne.EMPTY_NODE,f.getNode(),null),g=new hs(h,u.isFullyInitialized(),a.filtersNodes()),y=new hs(p,f.isFullyInitialized(),l.filtersNodes());this.viewCache_=Hh(y,g),this.eventGenerator_=new m5(this.query_)}get query(){return this.query_}}function V5(e){return e.viewCache_.serverCache.getNode()}function G5(e){return eh(e.viewCache_)}function Y5(e,t){const n=ba(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!We(t)&&!n.getImmediateChild(qe(t)).isEmpty())?n.getChild(t):null}function qE(e){return e.eventRegistrations_.length===0}function W5(e,t){e.eventRegistrations_.push(t)}function VE(e,t,n){const i=[];if(n){he(t==null,"A cancel should cancel all event registrations.");const a=e.query._path;e.eventRegistrations_.forEach(l=>{const u=l.createCancelEvent(n,a);u&&i.push(u)})}if(t){let a=[];for(let l=0;l<e.eventRegistrations_.length;++l){const u=e.eventRegistrations_[l];if(!u.matches(t))a.push(u);else if(t.hasAnyCallback()){a=a.concat(e.eventRegistrations_.slice(l+1));break}}e.eventRegistrations_=a}else e.eventRegistrations_=[];return i}function GE(e,t,n,i){t.type===cr.MERGE&&t.source.queryId!==null&&(he(ba(e.viewCache_),"We should always have a full cache before handling merges"),he(eh(e.viewCache_),"Missing event cache, even though we have a server cache"));const a=e.viewCache_,l=U5(e.processor_,a,t,n,i);return j5(e.processor_,l.viewCache),he(l.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=l.viewCache,xA(e,l.changes,l.viewCache.eventCache.getNode(),null)}function Q5(e,t){const n=e.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(At,(l,u)=>{i.push(Bo(l,u))}),n.isFullyInitialized()&&i.push(pA(n.getNode())),xA(e,i,n.getNode(),t)}function xA(e,t,n,i){const a=i?[i]:e.eventRegistrations_;return g5(e.eventGenerator_,t,n,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ih;class TA{constructor(){this.views=new Map}}function K5(e){he(!ih,"__referenceConstructor has already been defined"),ih=e}function X5(){return he(ih,"Reference.ts has not been loaded"),ih}function Z5(e){return e.views.size===0}function y_(e,t,n,i){const a=t.source.queryId;if(a!==null){const l=e.views.get(a);return he(l!=null,"SyncTree gave us an op for an invalid query."),GE(l,t,n,i)}else{let l=[];for(const u of e.views.values())l=l.concat(GE(u,t,n,i));return l}}function CA(e,t,n,i,a){const l=t._queryIdentifier,u=e.views.get(l);if(!u){let f=th(n,a?i:null),h=!1;f?h=!0:i instanceof Ne?(f=p_(n,i),h=!1):(f=Ne.EMPTY_NODE,h=!1);const p=Hh(new hs(f,h,!1),new hs(i,a,!1));return new q5(t,p)}return u}function J5(e,t,n,i,a,l){const u=CA(e,t,i,a,l);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,u),W5(u,n),Q5(u,n)}function eU(e,t,n,i){const a=t._queryIdentifier,l=[];let u=[];const f=ps(e);if(a==="default")for(const[h,p]of e.views.entries())u=u.concat(VE(p,n,i)),qE(p)&&(e.views.delete(h),p.query._queryParams.loadsAllData()||l.push(p.query));else{const h=e.views.get(a);h&&(u=u.concat(VE(h,n,i)),qE(h)&&(e.views.delete(a),h.query._queryParams.loadsAllData()||l.push(h.query)))}return f&&!ps(e)&&l.push(new(X5())(t._repo,t._path)),{removed:l,events:u}}function RA(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function as(e,t){let n=null;for(const i of e.views.values())n=n||Y5(i,t);return n}function AA(e,t){if(t._queryParams.loadsAllData())return qh(e);{const i=t._queryIdentifier;return e.views.get(i)}}function IA(e,t){return AA(e,t)!=null}function ps(e){return qh(e)!=null}function qh(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sh;function tU(e){he(!sh,"__referenceConstructor has already been defined"),sh=e}function nU(){return he(sh,"Reference.ts has not been loaded"),sh}let rU=1;class YE{constructor(t){this.listenProvider_=t,this.syncPointTree_=new ht(null),this.pendingWriteTree_=N5(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function DA(e,t,n,i,a){return b5(e.pendingWriteTree_,t,n,i,a),a?nl(e,new _a(d_(),t,n)):[]}function iU(e,t,n,i){S5(e.pendingWriteTree_,t,n,i);const a=ht.fromObject(n);return nl(e,new Ho(d_(),t,a))}function ns(e,t,n=!1){const i=w5(e.pendingWriteTree_,t);if(E5(e.pendingWriteTree_,t)){let l=new ht(null);return i.snap!=null?l=l.set(Xe(),!0):tn(i.children,u=>{l=l.set(new ut(u),!0)}),nl(e,new Jf(i.path,l,n))}else return[]}function bu(e,t,n){return nl(e,new _a(f_(),t,n))}function sU(e,t,n){const i=ht.fromObject(n);return nl(e,new Ho(f_(),t,i))}function aU(e,t){return nl(e,new tu(f_(),t))}function oU(e,t,n){const i=__(e,n);if(i){const a=b_(i),l=a.path,u=a.queryId,f=un(l,t),h=new tu(h_(u),f);return S_(e,l,h)}else return[]}function ah(e,t,n,i,a=!1){const l=t._path,u=e.syncPointTree_.get(l);let f=[];if(u&&(t._queryIdentifier==="default"||IA(u,t))){const h=eU(u,t,n,i);Z5(u)&&(e.syncPointTree_=e.syncPointTree_.remove(l));const p=h.removed;if(f=h.events,!a){const g=p.findIndex(_=>_._queryParams.loadsAllData())!==-1,y=e.syncPointTree_.findOnPath(l,(_,b)=>ps(b));if(g&&!y){const _=e.syncPointTree_.subtree(l);if(!_.isEmpty()){const b=uU(_);for(let w=0;w<b.length;++w){const O=b[w],R=O.query,D=kA(e,O);e.listenProvider_.startListening(Lc(R),nu(e,R),D.hashFn,D.onComplete)}}}!y&&p.length>0&&!i&&(g?e.listenProvider_.stopListening(Lc(t),null):p.forEach(_=>{const b=e.queryToTagMap.get(Vh(_));e.listenProvider_.stopListening(Lc(_),b)}))}dU(e,p)}return f}function OA(e,t,n,i){const a=__(e,i);if(a!=null){const l=b_(a),u=l.path,f=l.queryId,h=un(u,t),p=new _a(h_(f),h,n);return S_(e,u,p)}else return[]}function lU(e,t,n,i){const a=__(e,i);if(a){const l=b_(a),u=l.path,f=l.queryId,h=un(u,t),p=ht.fromObject(n),g=new Ho(h_(f),h,p);return S_(e,u,g)}else return[]}function Zy(e,t,n,i=!1){const a=t._path;let l=null,u=!1;e.syncPointTree_.foreachOnPath(a,(_,b)=>{const w=un(_,a);l=l||as(b,w),u=u||ps(b)});let f=e.syncPointTree_.get(a);f?(u=u||ps(f),l=l||as(f,Xe())):(f=new TA,e.syncPointTree_=e.syncPointTree_.set(a,f));let h;l!=null?h=!0:(h=!1,l=Ne.EMPTY_NODE,e.syncPointTree_.subtree(a).foreachChild((b,w)=>{const O=as(w,Xe());O&&(l=l.updateImmediateChild(b,O))}));const p=IA(f,t);if(!p&&!t._queryParams.loadsAllData()){const _=Vh(t);he(!e.queryToTagMap.has(_),"View does not exist, but we have a tag");const b=fU();e.queryToTagMap.set(_,b),e.tagToQueryMap.set(b,_)}const g=Fh(e.pendingWriteTree_,a);let y=J5(f,t,n,g,l,h);if(!p&&!u&&!i){const _=AA(f,t);y=y.concat(hU(e,t,_))}return y}function v_(e,t,n){const a=e.pendingWriteTree_,l=e.syncPointTree_.findOnPath(t,(u,f)=>{const h=un(u,t),p=as(f,h);if(p)return p});return _A(a,t,l,n,!0)}function cU(e,t){const n=t._path;let i=null;e.syncPointTree_.foreachOnPath(n,(p,g)=>{const y=un(p,n);i=i||as(g,y)});let a=e.syncPointTree_.get(n);a?i=i||as(a,Xe()):(a=new TA,e.syncPointTree_=e.syncPointTree_.set(n,a));const l=i!=null,u=l?new hs(i,!0,!1):null,f=Fh(e.pendingWriteTree_,t._path),h=CA(a,t,f,l?u.getNode():Ne.EMPTY_NODE,l);return G5(h)}function nl(e,t){return NA(t,e.syncPointTree_,null,Fh(e.pendingWriteTree_,Xe()))}function NA(e,t,n,i){if(We(e.path))return MA(e,t,n,i);{const a=t.get(Xe());n==null&&a!=null&&(n=as(a,Xe()));let l=[];const u=qe(e.path),f=e.operationForChild(u),h=t.children.get(u);if(h&&f){const p=n?n.getImmediateChild(u):null,g=bA(i,u);l=l.concat(NA(f,h,p,g))}return a&&(l=l.concat(y_(a,e,i,n))),l}}function MA(e,t,n,i){const a=t.get(Xe());n==null&&a!=null&&(n=as(a,Xe()));let l=[];return t.children.inorderTraversal((u,f)=>{const h=n?n.getImmediateChild(u):null,p=bA(i,u),g=e.operationForChild(u);g&&(l=l.concat(MA(g,f,h,p)))}),a&&(l=l.concat(y_(a,e,i,n))),l}function kA(e,t){const n=t.query,i=nu(e,n);return{hashFn:()=>(V5(t)||Ne.EMPTY_NODE).hash(),onComplete:a=>{if(a==="ok")return i?oU(e,n._path,i):aU(e,n._path);{const l=a3(a,n);return ah(e,n,null,l)}}}}function nu(e,t){const n=Vh(t);return e.queryToTagMap.get(n)}function Vh(e){return e._path.toString()+"$"+e._queryIdentifier}function __(e,t){return e.tagToQueryMap.get(t)}function b_(e){const t=e.indexOf("$");return he(t!==-1&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ut(e.substr(0,t))}}function S_(e,t,n){const i=e.syncPointTree_.get(t);he(i,"Missing sync point for query tag that we're tracking");const a=Fh(e.pendingWriteTree_,t);return y_(i,n,a,null)}function uU(e){return e.fold((t,n,i)=>{if(n&&ps(n))return[qh(n)];{let a=[];return n&&(a=RA(n)),tn(i,(l,u)=>{a=a.concat(u)}),a}})}function Lc(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(nU())(e._repo,e._path):e}function dU(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const a=Vh(i),l=e.queryToTagMap.get(a);e.queryToTagMap.delete(a),e.tagToQueryMap.delete(l)}}}function fU(){return rU++}function hU(e,t,n){const i=t._path,a=nu(e,t),l=kA(e,n),u=e.listenProvider_.startListening(Lc(t),a,l.hashFn,l.onComplete),f=e.syncPointTree_.subtree(i);if(a)he(!ps(f.value),"If we're adding a query, it shouldn't be shadowed");else{const h=f.fold((p,g,y)=>{if(!We(p)&&g&&ps(g))return[qh(g).query];{let _=[];return g&&(_=_.concat(RA(g).map(b=>b.query))),tn(y,(b,w)=>{_=_.concat(w)}),_}});for(let p=0;p<h.length;++p){const g=h[p];e.listenProvider_.stopListening(Lc(g),nu(e,g))}}return u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(t){this.node_=t}getImmediateChild(t){const n=this.node_.getImmediateChild(t);return new w_(n)}node(){return this.node_}}class E_{constructor(t,n){this.syncTree_=t,this.path_=n}getImmediateChild(t){const n=Rt(this.path_,t);return new E_(this.syncTree_,n)}node(){return v_(this.syncTree_,this.path_)}}const pU=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},WE=function(e,t,n){if(!e||typeof e!="object")return e;if(he(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return mU(e[".sv"],t,n);if(typeof e[".sv"]=="object")return gU(e[".sv"],t);he(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},mU=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:he(!1,"Unexpected server value: "+e)}},gU=function(e,t,n){e.hasOwnProperty("increment")||he(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;typeof i!="number"&&he(!1,"Unexpected increment value: "+i);const a=t.node();if(he(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return i;const u=a.getValue();return typeof u!="number"?i:u+i},LA=function(e,t,n,i){return x_(t,new E_(n,e),i)},PA=function(e,t,n){return x_(e,new w_(t),n)};function x_(e,t,n){const i=e.getPriority().val(),a=WE(i,t.getImmediateChild(".priority"),n);let l;if(e.isLeafNode()){const u=e,f=WE(u.getValue(),t,n);return f!==u.getValue()||a!==u.getPriority().val()?new Ft(f,Ut(a)):e}else{const u=e;return l=u,a!==u.getPriority().val()&&(l=l.updatePriority(new Ft(a))),u.forEachChild(At,(f,h)=>{const p=x_(h,t.getImmediateChild(f),n);p!==h&&(l=l.updateImmediateChild(f,p))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(t="",n=null,i={children:{},childCount:0}){this.name=t,this.parent=n,this.node=i}}function C_(e,t){let n=t instanceof ut?t:new ut(t),i=e,a=qe(n);for(;a!==null;){const l=jo(i.node.children,a)||{children:{},childCount:0};i=new T_(a,i,l),n=pt(n),a=qe(n)}return i}function rl(e){return e.node.value}function jA(e,t){e.node.value=t,Jy(e)}function UA(e){return e.node.childCount>0}function yU(e){return rl(e)===void 0&&!UA(e)}function Gh(e,t){tn(e.node.children,(n,i)=>{t(new T_(n,e,i))})}function $A(e,t,n,i){n&&t(e),Gh(e,a=>{$A(a,t,!0)})}function vU(e,t,n){let i=e.parent;for(;i!==null;){if(t(i))return!0;i=i.parent}return!1}function Su(e){return new ut(e.parent===null?e.name:Su(e.parent)+"/"+e.name)}function Jy(e){e.parent!==null&&_U(e.parent,e.name,e)}function _U(e,t,n){const i=yU(n),a=kr(e.node.children,t);i&&a?(delete e.node.children[t],e.node.childCount--,Jy(e)):!i&&!a&&(e.node.children[t]=n.node,e.node.childCount++,Jy(e))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bU=/[\[\].#$\/\u0000-\u001F\u007F]/,SU=/[\[\].#$\u0000-\u001F\u007F]/,Qg=10*1024*1024,R_=function(e){return typeof e=="string"&&e.length!==0&&!bU.test(e)},zA=function(e){return typeof e=="string"&&e.length!==0&&!SU.test(e)},wU=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),zA(e)},EU=function(e){return e===null||typeof e=="string"||typeof e=="number"&&!e_(e)||e&&typeof e=="object"&&kr(e,".sv")},BA=function(e,t,n,i){i&&t===void 0||Yh(Oh(e,"value"),t,n)},Yh=function(e,t,n){const i=n instanceof ut?new z3(n,e):n;if(t===void 0)throw new Error(e+"contains undefined "+ea(i));if(typeof t=="function")throw new Error(e+"contains a function "+ea(i)+" with contents = "+t.toString());if(e_(t))throw new Error(e+"contains "+t.toString()+" "+ea(i));if(typeof t=="string"&&t.length>Qg/3&&Nh(t)>Qg)throw new Error(e+"contains a string greater than "+Qg+" utf8 bytes "+ea(i)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let a=!1,l=!1;if(tn(t,(u,f)=>{if(u===".value")a=!0;else if(u!==".priority"&&u!==".sv"&&(l=!0,!R_(u)))throw new Error(e+" contains an invalid key ("+u+") "+ea(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);B3(i,u),Yh(e,f,i),H3(i)}),a&&l)throw new Error(e+' contains ".value" child '+ea(i)+" in addition to actual children.")}},xU=function(e,t){let n,i;for(n=0;n<t.length;n++){i=t[n];const l=Xc(i);for(let u=0;u<l.length;u++)if(!(l[u]===".priority"&&u===l.length-1)){if(!R_(l[u]))throw new Error(e+"contains an invalid key ("+l[u]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}t.sort($3);let a=null;for(n=0;n<t.length;n++){if(i=t[n],a!==null&&Wn(a,i))throw new Error(e+"contains a path "+a.toString()+" that is ancestor of another path "+i.toString());a=i}},TU=function(e,t,n,i){const a=Oh(e,"values");if(!(t&&typeof t=="object")||Array.isArray(t))throw new Error(a+" must be an object containing the children to replace.");const l=[];tn(t,(u,f)=>{const h=new ut(u);if(Yh(a,f,Rt(n,h)),s_(h)===".priority"&&!EU(f))throw new Error(a+"contains an invalid value for '"+h.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");l.push(h)}),xU(a,l)},HA=function(e,t,n,i){if(!zA(n))throw new Error(Oh(e,t)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},CU=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),HA(e,t,n)},A_=function(e,t){if(qe(t)===".info")throw new Error(e+" failed = Can't modify data under /.info/")},RU=function(e,t){const n=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!R_(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!wU(n))throw new Error(Oh(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AU{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Wh(e,t){let n=null;for(let i=0;i<t.length;i++){const a=t[i],l=a.getPath();n!==null&&!a_(l,n.path)&&(e.eventLists_.push(n),n=null),n===null&&(n={events:[],path:l}),n.events.push(a)}n&&e.eventLists_.push(n)}function FA(e,t,n){Wh(e,n),qA(e,i=>a_(i,t))}function Zn(e,t,n){Wh(e,n),qA(e,i=>Wn(i,t)||Wn(t,i))}function qA(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const a=e.eventLists_[i];if(a){const l=a.path;t(l)?(IU(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function IU(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(n!==null){e.events[t]=null;const i=n.getEventRunner();Oc&&Jt("event: "+n.toString()),tl(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DU="repo_interrupt",OU=25;class NU{constructor(t,n,i,a){this.repoInfo_=t,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new AU,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Zf(),this.transactionQueueTree_=new T_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function MU(e,t,n){if(e.stats_=r_(e.repoInfo_),e.forceRestClient_||u3())e.server_=new Xf(e.repoInfo_,(i,a,l,u)=>{QE(e,i,a,l,u)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>KE(e,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{$t(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new di(e.repoInfo_,t,(i,a,l,u)=>{QE(e,i,a,l,u)},i=>{KE(e,i)},i=>{kU(e,i)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(i=>{e.server_.refreshAuthToken(i)}),e.appCheckProvider_.addTokenChangeListener(i=>{e.server_.refreshAppCheckToken(i.token)}),e.statsReporter_=m3(e.repoInfo_,()=>new p5(e.stats_,e.server_)),e.infoData_=new c5,e.infoSyncTree_=new YE({startListening:(i,a,l,u)=>{let f=[];const h=e.infoData_.getNode(i._path);return h.isEmpty()||(f=bu(e.infoSyncTree_,i._path,h),setTimeout(()=>{u("ok")},0)),f},stopListening:()=>{}}),I_(e,"connected",!1),e.serverSyncTree_=new YE({startListening:(i,a,l,u)=>(e.server_.listen(i,l,a,(f,h)=>{const p=u(f,h);Zn(e.eventQueue_,i._path,p)}),[]),stopListening:(i,a)=>{e.server_.unlisten(i,a)}})}function VA(e){const n=e.infoData_.getNode(new ut(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Qh(e){return pU({timestamp:VA(e)})}function QE(e,t,n,i,a){e.dataUpdateCount++;const l=new ut(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let u=[];if(a)if(i){const h=zf(n,p=>Ut(p));u=lU(e.serverSyncTree_,l,h,a)}else{const h=Ut(n);u=OA(e.serverSyncTree_,l,h,a)}else if(i){const h=zf(n,p=>Ut(p));u=sU(e.serverSyncTree_,l,h)}else{const h=Ut(n);u=bu(e.serverSyncTree_,l,h)}let f=l;u.length>0&&(f=qo(e,l)),Zn(e.eventQueue_,f,u)}function KE(e,t){I_(e,"connected",t),t===!1&&UU(e)}function kU(e,t){tn(t,(n,i)=>{I_(e,n,i)})}function I_(e,t,n){const i=new ut("/.info/"+t),a=Ut(n);e.infoData_.updateSnapshot(i,a);const l=bu(e.infoSyncTree_,i,a);Zn(e.eventQueue_,i,l)}function D_(e){return e.nextWriteId_++}function LU(e,t,n){const i=cU(e.serverSyncTree_,t);return i!=null?Promise.resolve(i):e.server_.get(t).then(a=>{const l=Ut(a).withIndex(t._queryParams.getIndex());Zy(e.serverSyncTree_,t,n,!0);let u;if(t._queryParams.loadsAllData())u=bu(e.serverSyncTree_,t._path,l);else{const f=nu(e.serverSyncTree_,t);u=OA(e.serverSyncTree_,t._path,l,f)}return Zn(e.eventQueue_,t._path,u),ah(e.serverSyncTree_,t,n,null,!0),l},a=>(wu(e,"get for query "+$t(t)+" failed: "+a),Promise.reject(new Error(a))))}function PU(e,t,n,i,a){wu(e,"set",{path:t.toString(),value:n,priority:i});const l=Qh(e),u=Ut(n,i),f=v_(e.serverSyncTree_,t),h=PA(u,f,l),p=D_(e),g=DA(e.serverSyncTree_,t,h,p,!0);Wh(e.eventQueue_,g),e.server_.put(t.toString(),u.val(!0),(_,b)=>{const w=_==="ok";w||dn("set at "+t+" failed: "+_);const O=ns(e.serverSyncTree_,p,!w);Zn(e.eventQueue_,t,O),ev(e,a,_,b)});const y=N_(e,t);qo(e,y),Zn(e.eventQueue_,y,[])}function jU(e,t,n,i){wu(e,"update",{path:t.toString(),value:n});let a=!0;const l=Qh(e),u={};if(tn(n,(f,h)=>{a=!1,u[f]=LA(Rt(t,f),Ut(h),e.serverSyncTree_,l)}),a)Jt("update() called with empty data.  Don't do anything."),ev(e,i,"ok",void 0);else{const f=D_(e),h=iU(e.serverSyncTree_,t,u,f);Wh(e.eventQueue_,h),e.server_.merge(t.toString(),n,(p,g)=>{const y=p==="ok";y||dn("update at "+t+" failed: "+p);const _=ns(e.serverSyncTree_,f,!y),b=_.length>0?qo(e,t):t;Zn(e.eventQueue_,b,_),ev(e,i,p,g)}),tn(n,p=>{const g=N_(e,Rt(t,p));qo(e,g)}),Zn(e.eventQueue_,t,[])}}function UU(e){wu(e,"onDisconnectEvents");const t=Qh(e),n=Zf();Gy(e.onDisconnect_,Xe(),(a,l)=>{const u=LA(a,l,e.serverSyncTree_,t);mA(n,a,u)});let i=[];Gy(n,Xe(),(a,l)=>{i=i.concat(bu(e.serverSyncTree_,a,l));const u=N_(e,a);qo(e,u)}),e.onDisconnect_=Zf(),Zn(e.eventQueue_,Xe(),i)}function $U(e,t,n){let i;qe(t._path)===".info"?i=Zy(e.infoSyncTree_,t,n):i=Zy(e.serverSyncTree_,t,n),FA(e.eventQueue_,t._path,i)}function XE(e,t,n){let i;qe(t._path)===".info"?i=ah(e.infoSyncTree_,t,n):i=ah(e.serverSyncTree_,t,n),FA(e.eventQueue_,t._path,i)}function zU(e){e.persistentConnection_&&e.persistentConnection_.interrupt(DU)}function wu(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Jt(n,...t)}function ev(e,t,n,i){t&&tl(()=>{if(n==="ok")t(null);else{const a=(n||"error").toUpperCase();let l=a;i&&(l+=": "+i);const u=new Error(l);u.code=a,t(u)}})}function GA(e,t,n){return v_(e.serverSyncTree_,t,n)||Ne.EMPTY_NODE}function O_(e,t=e.transactionQueueTree_){if(t||Kh(e,t),rl(t)){const n=WA(e,t);he(n.length>0,"Sending zero length transaction queue"),n.every(a=>a.status===0)&&BU(e,Su(t),n)}else UA(t)&&Gh(t,n=>{O_(e,n)})}function BU(e,t,n){const i=n.map(p=>p.currentWriteId),a=GA(e,t,i);let l=a;const u=a.hash();for(let p=0;p<n.length;p++){const g=n[p];he(g.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),g.status=1,g.retryCount++;const y=un(t,g.path);l=l.updateChild(y,g.currentOutputSnapshotRaw)}const f=l.val(!0),h=t;e.server_.put(h.toString(),f,p=>{wu(e,"transaction put response",{path:h.toString(),status:p});let g=[];if(p==="ok"){const y=[];for(let _=0;_<n.length;_++)n[_].status=2,g=g.concat(ns(e.serverSyncTree_,n[_].currentWriteId)),n[_].onComplete&&y.push(()=>n[_].onComplete(null,!0,n[_].currentOutputSnapshotResolved)),n[_].unwatcher();Kh(e,C_(e.transactionQueueTree_,t)),O_(e,e.transactionQueueTree_),Zn(e.eventQueue_,t,g);for(let _=0;_<y.length;_++)tl(y[_])}else{if(p==="datastale")for(let y=0;y<n.length;y++)n[y].status===3?n[y].status=4:n[y].status=0;else{dn("transaction at "+h.toString()+" failed: "+p);for(let y=0;y<n.length;y++)n[y].status=4,n[y].abortReason=p}qo(e,t)}},u)}function qo(e,t){const n=YA(e,t),i=Su(n),a=WA(e,n);return HU(e,a,i),i}function HU(e,t,n){if(t.length===0)return;const i=[];let a=[];const u=t.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<t.length;f++){const h=t[f],p=un(n,h.path);let g=!1,y;if(he(p!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),h.status===4)g=!0,y=h.abortReason,a=a.concat(ns(e.serverSyncTree_,h.currentWriteId,!0));else if(h.status===0)if(h.retryCount>=OU)g=!0,y="maxretry",a=a.concat(ns(e.serverSyncTree_,h.currentWriteId,!0));else{const _=GA(e,h.path,u);h.currentInputSnapshot=_;const b=t[f].update(_.val());if(b!==void 0){Yh("transaction failed: Data returned ",b,h.path);let w=Ut(b);typeof b=="object"&&b!=null&&kr(b,".priority")||(w=w.updatePriority(_.getPriority()));const R=h.currentWriteId,D=Qh(e),k=PA(w,_,D);h.currentOutputSnapshotRaw=w,h.currentOutputSnapshotResolved=k,h.currentWriteId=D_(e),u.splice(u.indexOf(R),1),a=a.concat(DA(e.serverSyncTree_,h.path,k,h.currentWriteId,h.applyLocally)),a=a.concat(ns(e.serverSyncTree_,R,!0))}else g=!0,y="nodata",a=a.concat(ns(e.serverSyncTree_,h.currentWriteId,!0))}Zn(e.eventQueue_,n,a),a=[],g&&(t[f].status=2,(function(_){setTimeout(_,Math.floor(0))})(t[f].unwatcher),t[f].onComplete&&(y==="nodata"?i.push(()=>t[f].onComplete(null,!1,t[f].currentInputSnapshot)):i.push(()=>t[f].onComplete(new Error(y),!1,null))))}Kh(e,e.transactionQueueTree_);for(let f=0;f<i.length;f++)tl(i[f]);O_(e,e.transactionQueueTree_)}function YA(e,t){let n,i=e.transactionQueueTree_;for(n=qe(t);n!==null&&rl(i)===void 0;)i=C_(i,n),t=pt(t),n=qe(t);return i}function WA(e,t){const n=[];return QA(e,t,n),n.sort((i,a)=>i.order-a.order),n}function QA(e,t,n){const i=rl(t);if(i)for(let a=0;a<i.length;a++)n.push(i[a]);Gh(t,a=>{QA(e,a,n)})}function Kh(e,t){const n=rl(t);if(n){let i=0;for(let a=0;a<n.length;a++)n[a].status!==2&&(n[i]=n[a],i++);n.length=i,jA(t,n.length>0?n:void 0)}Gh(t,i=>{Kh(e,i)})}function N_(e,t){const n=Su(YA(e,t)),i=C_(e.transactionQueueTree_,t);return vU(i,a=>{Kg(e,a)}),Kg(e,i),$A(i,a=>{Kg(e,a)}),n}function Kg(e,t){const n=rl(t);if(n){const i=[];let a=[],l=-1;for(let u=0;u<n.length;u++)n[u].status===3||(n[u].status===1?(he(l===u-1,"All SENT items should be at beginning of queue."),l=u,n[u].status=3,n[u].abortReason="set"):(he(n[u].status===0,"Unexpected transaction status in abort"),n[u].unwatcher(),a=a.concat(ns(e.serverSyncTree_,n[u].currentWriteId,!0)),n[u].onComplete&&i.push(n[u].onComplete.bind(null,new Error("set"),!1,null))));l===-1?jA(t,void 0):n.length=l+1,Zn(e.eventQueue_,Su(t),a);for(let u=0;u<i.length;u++)tl(i[u])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FU(e){let t="";const n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let a=n[i];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}t+="/"+a}return t}function qU(e){const t={};e.charAt(0)==="?"&&(e=e.substring(1));for(const n of e.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):dn(`Invalid query segment '${n}' in query '${e}'`)}return t}const ZE=function(e,t){const n=VU(e),i=n.namespace;n.domain==="firebase.com"&&mi(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&mi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||t3();const a=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new ZR(n.host,n.secure,i,a,t,"",i!==n.subdomain),path:new ut(n.pathString)}},VU=function(e){let t="",n="",i="",a="",l="",u=!0,f="https",h=443;if(typeof e=="string"){let p=e.indexOf("//");p>=0&&(f=e.substring(0,p-1),e=e.substring(p+2));let g=e.indexOf("/");g===-1&&(g=e.length);let y=e.indexOf("?");y===-1&&(y=e.length),t=e.substring(0,Math.min(g,y)),g<y&&(a=FU(e.substring(g,y)));const _=qU(e.substring(Math.min(e.length,y)));p=t.indexOf(":"),p>=0?(u=f==="https"||f==="wss",h=parseInt(t.substring(p+1),10)):p=t.length;const b=t.slice(0,p);if(b.toLowerCase()==="localhost")n="localhost";else if(b.split(".").length<=2)n=b;else{const w=t.indexOf(".");i=t.substring(0,w).toLowerCase(),n=t.substring(w+1),l=i}"ns"in _&&(l=_.ns)}return{host:t,port:h,domain:n,subdomain:i,secure:u,scheme:f,pathString:a,namespace:l}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",GU=(function(){let e=0;const t=[];return function(n){const i=n===e;e=n;let a;const l=new Array(8);for(a=7;a>=0;a--)l[a]=JE.charAt(n%64),n=Math.floor(n/64);he(n===0,"Cannot push at time == 0");let u=l.join("");if(i){for(a=11;a>=0&&t[a]===63;a--)t[a]=0;t[a]++}else for(a=0;a<12;a++)t[a]=Math.floor(Math.random()*64);for(a=0;a<12;a++)u+=JE.charAt(t[a]);return he(u.length===20,"nextPushId: Length should be 20."),u}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YU{constructor(t,n,i,a){this.eventType=t,this.eventRegistration=n,this.snapshot=i,this.prevName=a}getPath(){const t=this.snapshot.ref;return this.eventType==="value"?t._path:t.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+$t(this.snapshot.exportVal())}}class WU{constructor(t,n,i){this.eventRegistration=t,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(t,n){this.snapshotCallback=t,this.cancelCallback=n}onValue(t,n){this.snapshotCallback.call(null,t,n)}onCancel(t){return he(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)}get hasCancelCallback(){return!!this.cancelCallback}matches(t){return this.snapshotCallback===t.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(t,n,i,a){this._repo=t,this._path=n,this._queryParams=i,this._orderByCalled=a}get key(){return We(this._path)?null:s_(this._path)}get ref(){return new Si(this._repo,this._path)}get _queryIdentifier(){const t=jE(this._queryParams),n=t_(t);return n==="{}"?"default":n}get _queryObject(){return jE(this._queryParams)}isEqual(t){if(t=Gt(t),!(t instanceof M_))return!1;const n=this._repo===t._repo,i=a_(this._path,t._path),a=this._queryIdentifier===t._queryIdentifier;return n&&i&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+U3(this._path)}}class Si extends M_{constructor(t,n){super(t,n,new u_,!1)}get parent(){const t=oA(this._path);return t===null?null:new Si(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}class ru{constructor(t,n,i){this._node=t,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const n=new ut(t),i=iu(this.ref,t);return new ru(this._node.getChild(n),i,At)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,a)=>t(new ru(a,iu(this.ref,i),At)))}hasChild(t){const n=new ut(t);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function tr(e,t){return e=Gt(e),e._checkNotDeleted("ref"),t!==void 0?iu(e._root,t):e._root}function iu(e,t){return e=Gt(e),qe(e._path)===null?CU("child","path",t):HA("child","path",t),new Si(e._repo,Rt(e._path,t))}function QU(e,t){e=Gt(e),A_("push",e._path),BA("push",t,e._path,!0);const n=VA(e._repo),i=GU(n),a=iu(e,i),l=iu(e,i);let u;return t!=null?u=k_(l,t).then(()=>l):u=Promise.resolve(l),a.then=u.then.bind(u),a.catch=u.then.bind(u,void 0),a}function XA(e){return A_("remove",e._path),k_(e,null)}function k_(e,t){e=Gt(e),A_("set",e._path),BA("set",t,e._path,!1);const n=new du;return PU(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}function ZA(e,t){TU("update",t,e._path);const n=new du;return jU(e._repo,e._path,t,n.wrapCallback(()=>{})),n.promise}function JA(e){e=Gt(e);const t=new KA(()=>{}),n=new Xh(t);return LU(e._repo,e,n).then(i=>new ru(i,new Si(e._repo,e._path),e._queryParams.getIndex()))}class Xh{constructor(t){this.callbackContext=t}respondsTo(t){return t==="value"}createEvent(t,n){const i=n._queryParams.getIndex();return new YU("value",this,new ru(t.snapshotNode,new Si(n._repo,n._path),i))}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,n){return this.callbackContext.hasCancelCallback?new WU(this,t,n):null}matches(t){return t instanceof Xh?!t.callbackContext||!this.callbackContext?!0:t.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function KU(e,t,n,i,a){let l;if(typeof i=="object"&&(l=void 0,a=i),typeof i=="function"&&(l=i),a&&a.onlyOnce){const h=n,p=(g,y)=>{XE(e._repo,e,f),h(g,y)};p.userCallback=n.userCallback,p.context=n.context,n=p}const u=new KA(n,l||void 0),f=new Xh(u);return $U(e._repo,e,f),()=>XE(e._repo,e,f)}function Zh(e,t,n,i){return KU(e,"value",t,n,i)}K5(Si);tU(Si);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XU="FIREBASE_DATABASE_EMULATOR_HOST",tv={};let ZU=!1;function JU(e,t,n,i){const a=t.lastIndexOf(":"),l=t.substring(0,a),u=Qo(l);e.repoInfo_=new ZR(t,u,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0,n),i&&(e.authTokenProvider_=i)}function e$(e,t,n,i,a){let l=i||e.options.databaseURL;l===void 0&&(e.options.projectId||mi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Jt("Using default host for project ",e.options.projectId),l=`${e.options.projectId}-default-rtdb.firebaseio.com`);let u=ZE(l,a),f=u.repoInfo,h;typeof process<"u"&&_E&&(h=_E[XU]),h?(l=`http://${h}?ns=${f.namespace}`,u=ZE(l,a),f=u.repoInfo):u.repoInfo.secure;const p=new f3(e.name,e.options,t);RU("Invalid Firebase Database URL",u),We(u.path)||mi("Database URL must point to the root of a Firebase Database (not including a child path).");const g=n$(f,e,p,new d3(e,n));return new r$(g,e)}function t$(e,t){const n=tv[t];(!n||n[e.key]!==e)&&mi(`Database ${t}(${e.repoInfo_}) has already been deleted.`),zU(e),delete n[e.key]}function n$(e,t,n,i){let a=tv[t.name];a||(a={},tv[t.name]=a);let l=a[e.toURLString()];return l&&mi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new NU(e,ZU,n,i),a[e.toURLString()]=l,l}class r${constructor(t,n){this._repoInternal=t,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(MU(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Si(this._repo,Xe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(t$(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&mi("Cannot call "+t+" on a deleted database.")}}function i$(e=Bv(),t){const n=Xo(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const i=WL("database");i&&s$(n,...i)}return n}function s$(e,t,n,i={}){e=Gt(e),e._checkNotDeleted("useEmulator");const a=`${t}:${n}`,l=e._repoInternal;if(e._instanceStarted){if(a===e._repoInternal.repoInfo_.host&&ha(i,l.repoInfo_.emulatorOptions))return;mi("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let u;if(l.repoInfo_.nodeAdmin)i.mockUserToken&&mi('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new wf(wf.OWNER);else if(i.mockUserToken){const f=typeof i.mockUserToken=="string"?i.mockUserToken:QL(i.mockUserToken,e.app.options.projectId);u=new wf(f)}Qo(t)&&(FC(t),qC("Database",!0)),JU(l,a,i,u)}/**
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
 */function a$(e){Qj(Zo),Nr(new gr("database",(t,{instanceIdentifier:n})=>{const i=t.getProvider("app").getImmediate(),a=t.getProvider("auth-internal"),l=t.getProvider("app-check-internal");return e$(i,a,l,n)},"PUBLIC").setMultipleInstances(!0)),Qn(bE,SE,e),Qn(bE,SE,"esm2020")}di.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)};di.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};a$();var qs={},Xg={},Zg={},ex;function L_(){return ex||(ex=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.getBookableStatus=e.isWaitlistFull=e.isFree=e.WAITLIST_MAX=void 0,e.WAITLIST_MAX=10;const t=a=>a.occupancy<a.max_occupancy;e.isFree=t;const n=a=>a.waiting_count>=e.WAITLIST_MAX;e.isWaitlistFull=n;const i=a=>(0,e.isFree)(a)?"free":(0,e.isWaitlistFull)(a)?"full":"waitlist";e.getBookableStatus=i})(Zg)),Zg}var Vs={},tx;function P_(){return tx||(tx=1,Object.defineProperty(Vs,"__esModule",{value:!0}),Vs.DEFAULT_STUDIO_ID=Vs.STUDIOS=void 0,Vs.STUDIOS={7248695:{location:"New York",timezone:"America/New_York"},7248663:{location:"London",timezone:"Europe/London"}},Vs.DEFAULT_STUDIO_ID="7248695"),Vs}var nx;function o$(){return nx||(nx=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.getChangeType=e.classifyMatch=e.matchesAlert=void 0;const t=L_(),n=P_(),i=(g,y)=>!(y.maxStatus==="free"&&!(0,t.isFree)(g)||y.maxStatus==="waitlist"&&(0,t.isWaitlistFull)(g)),a=(g,y)=>{if(!y.disciplines)return!0;const _=String(g.offering_type.category.id);return y.disciplines.some(b=>String(b)===_)},l=(g,y)=>y.instructors?g.instructors.some(_=>y.instructors.indexOf(String(_.id))!==-1):!0,u=(g,y)=>{if(!y.timeRanges)return!0;const _=n.STUDIOS[y.studioId]?.timezone;if(!_)return!1;const b=new Date(g.starts_at),w=new Date(b.toLocaleString("en-US",{timeZone:"UTC"})),O=new Date(b.toLocaleString("en-US",{timeZone:_})),R=w.getTime()-O.getTime();b.setTime(b.getTime()-R);const D=y.timeRanges[b.getDay()];if(!D)return!1;const k=b.getHours()*60+b.getMinutes();return D.startMin<=k&&D.endMin>=k},f=(g,y)=>i(g,y)&&a(g,y)&&l(g,y)&&u(g,y);e.matchesAlert=f;const h=(g,y)=>{const _=[];return i(g,y)||_.push("status"),a(g,y)||_.push("discipline"),l(g,y)||_.push("instructor"),u(g,y)||_.push("time"),_.length===0?{type:"match"}:_.length===1?{type:"near-miss",reason:_[0]}:{type:"skipped"}};e.classifyMatch=h;const p=(g,y,_)=>(0,e.matchesAlert)(_,g)?g.maxStatus==="free"&&!(0,t.isFree)(y)&&(0,t.isFree)(_)?"became_free":g.maxStatus==="waitlist"&&(0,t.isWaitlistFull)(y)&&!(0,t.isWaitlistFull)(_)?"waitlist_opened":null:null;e.getChangeType=p})(Xg)),Xg}var Gs={},rx;function l$(){if(rx)return Gs;rx=1,Object.defineProperty(Gs,"__esModule",{value:!0}),Gs.classifySnapshotMatch=Gs.buildSnapshot=void 0;const e=L_(),t=P_(),n=(l,u=Date.now())=>({snapshotAt:u,starts_at:l.starts_at,instructors:l.instructors.map(({id:f,name:h})=>({id:String(f),name:h})),disciplineId:String(l.offering_type.category.id),occupancy:l.occupancy,maxOccupancy:l.max_occupancy,waitingCount:l.waiting_count,status:(0,e.getBookableStatus)(l),name:l.name});Gs.buildSnapshot=n;const i=(l,u)=>{if(!u.timeRanges)return!0;const f=t.STUDIOS[u.studioId]?.timezone;if(!f)return!1;const h=new Date(l.starts_at),p=new Date(h.toLocaleString("en-US",{timeZone:"UTC"})),g=new Date(h.toLocaleString("en-US",{timeZone:f})),y=p.getTime()-g.getTime();h.setTime(h.getTime()-y);const _=u.timeRanges[h.getDay()];if(!_)return!1;const b=h.getHours()*60+h.getMinutes();return _.startMin<=b&&_.endMin>=b},a=(l,u)=>{const f=[];return(u.maxStatus==="free"&&l.status!=="free"||u.maxStatus==="waitlist"&&l.status==="full")&&f.push("status"),u.disciplines&&u.disciplines.map(String).indexOf(l.disciplineId)===-1&&f.push("discipline"),u.instructors&&!l.instructors.some(p=>u.instructors.indexOf(p.id)!==-1)&&f.push("instructor"),i(l,u)||f.push("time"),f.length===0?{type:"match"}:f.length===1?{type:"near-miss",reason:f[0]}:{type:"skipped"}};return Gs.classifySnapshotMatch=a,Gs}var Jg={},ix;function c$(){return ix||(ix=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.fetchAllPelotonPages=e.rebasePelotonUrl=e.buildEventsUrl=e.getPelotonHeaders=e.PELOTON_CORS_PROXY=e.PELOTON_API_BASE=void 0,e.PELOTON_API_BASE="https://schedule.studio.onepeloton.com/api/v2",e.PELOTON_CORS_PROXY="https://cors.abbondanzo.workers.dev";const t=l=>({"Teamup-Request-Mode":"customer","Teamup-Provider-ID":l});e.getPelotonHeaders=t;const n=l=>{const{localStartsAtGte:u=new Date,localStartsAtLte:f,fields:h,expand:p,corsProxy:g=!1}=l,y=g?`${e.PELOTON_CORS_PROXY}/${e.PELOTON_API_BASE}`:e.PELOTON_API_BASE,_=new URLSearchParams({local_starts_at_gte:u.toISOString().replace("Z",""),page_size:"500",sort:"start"});return h&&h.length>0&&_.set("fields",h.join(",")),p&&p.length>0&&_.set("expand",p.join(",")),f&&_.set("local_starts_at_lte",f.toISOString().replace("Z","")),`${y}/events?${_}`};e.buildEventsUrl=n;const i=(l,u=!1)=>{const{search:f}=new URL(l);return`${u?`${e.PELOTON_CORS_PROXY}/${e.PELOTON_API_BASE}`:e.PELOTON_API_BASE}/events${f}`};e.rebasePelotonUrl=i;const a=async(l,u,f=!1)=>{const h=await u(l);if(!h.next)return h.results;const p=[...h.results];let g=(0,e.rebasePelotonUrl)(h.next,f);for(;g;){const y=await u(g);p.push(...y.results),g=y.next?(0,e.rebasePelotonUrl)(y.next,f):null}return p};e.fetchAllPelotonPages=a})(Jg)),Jg}var ey={},sx;function u$(){return sx||(sx=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isBookableStatus=e.BOOKABLE_STATUS_KEYS=void 0,e.BOOKABLE_STATUS_KEYS=["free","waitlist","full"];const t=n=>e.BOOKABLE_STATUS_KEYS.indexOf(n)!==-1;e.isBookableStatus=t})(ey)),ey}var ty={},ax;function d$(){return ax||(ax=1,Object.defineProperty(ty,"__esModule",{value:!0})),ty}var dc={},ox;function f$(){return ox||(ox=1,Object.defineProperty(dc,"__esModule",{value:!0}),dc.PATHS=void 0,dc.PATHS={alerts:e=>`alerts/${e}`,alert:(e,t)=>`alerts/${e}/${t}`,alertPreferences:e=>`alertPreferences/${e}`,messagingTokens:e=>`messagingTokens/${e}`,messagingToken:(e,t)=>`messagingTokens/${e}/${t}`,classHistory:e=>`classHistory/${e}`,classSnapshot:(e,t)=>`classHistory/${e}/${t}`}),dc}var Ys={},lx;function h$(){if(lx)return Ys;lx=1,Object.defineProperty(Ys,"__esModule",{value:!0}),Ys.isNotEmpty=Ys.isEmpty=void 0;const e=n=>n==null;Ys.isEmpty=e;const t=n=>n!=null;return Ys.isNotEmpty=t,Ys}var ny={},cx;function p$(){return cx||(cx=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isAllDay=e.DEFAULT_TIME_RANGE=e.SPECIFIC_DEFAULT_TIME_RANGE=e.ALL_DAY_TIME_RANGE=void 0,e.ALL_DAY_TIME_RANGE={startMin:0,endMin:1440},e.SPECIFIC_DEFAULT_TIME_RANGE={startMin:420,endMin:1140},e.DEFAULT_TIME_RANGE=e.ALL_DAY_TIME_RANGE;const t=n=>n.startMin===e.ALL_DAY_TIME_RANGE.startMin&&n.endMin===e.ALL_DAY_TIME_RANGE.endMin;e.isAllDay=t})(ny)),ny}var ux;function m$(){return ux||(ux=1,(function(e){var t=qs&&qs.__createBinding||(Object.create?(function(i,a,l,u){u===void 0&&(u=l);var f=Object.getOwnPropertyDescriptor(a,l);(!f||("get"in f?!a.__esModule:f.writable||f.configurable))&&(f={enumerable:!0,get:function(){return a[l]}}),Object.defineProperty(i,u,f)}):(function(i,a,l,u){u===void 0&&(u=l),i[u]=a[l]})),n=qs&&qs.__exportStar||function(i,a){for(var l in i)l!=="default"&&!Object.prototype.hasOwnProperty.call(a,l)&&t(a,i,l)};Object.defineProperty(e,"__esModule",{value:!0}),n(o$(),e),n(l$(),e),n(c$(),e),n(u$(),e),n(d$(),e),n(L_(),e),n(f$(),e),n(h$(),e),n(P_(),e),n(p$(),e)})(qs)),qs}var ke=m$();const wn=Ph(()=>i$(Ac)),eI=async(e,t)=>{const n=wn;if(!n)throw new Error("No Firebase database connection to use");const i=tr(n,ke.PATHS.messagingToken(e,t));await XA(i)},dx=async(e,t)=>{const n=wn;if(!n)throw new Error("No Firebase database connection to use");const i=tr(n,ke.PATHS.messagingToken(e,t)),a={timestamp:new Date().getTime(),userAgent:navigator.userAgent};await k_(i,a)},g$=({children:e})=>{const[t,n]=C.useState();C.useEffect(()=>{if(wo){const u=Y6(wo,f=>{console.log("[MessagingProvider] Received message ",f);const h=f.notification?.title??f.data?.title,p=f.notification?.body??f.data?.body;h&&new Notification(h,{body:p})});return()=>{u()}}return()=>{}},[]);const i=ct(mu);C.useEffect(()=>{wo&&i&&iE().then(u=>(n(u),dx(i,u))).catch(u=>{Or(u)})},[i]);const a=C.useCallback(()=>{wo&&i&&iE().then(u=>(n(u),dx(i,u))).catch(u=>{Or(u)})},[i]);C.useEffect(()=>{const u=()=>{document.visibilityState==="visible"&&a()};return document.addEventListener("visibilitychange",u),()=>document.removeEventListener("visibilitychange",u)},[a]);const l=C.useCallback(async()=>{t&&i&&(await eI(i,t),n(void 0))},[t,i]);return v.jsx(gu.Provider,{value:{token:t,refreshToken:a,deleteToken:l},children:e})},j_=60,U_=e=>e.session.state!=="fulfilled"?!1:e.session.data?.isAdmin===!0,rt={CLASS_LIST:"/class-list",ABOUT:"/about",SIGN_IN:"/sign-in",ALERTS:"/alerts",ALERTS_EDITOR:"/alerts/edit",ALERTS_SIMULATION:"/alerts/:alertId/test",STATS:"/stats"},y$=e=>`/alerts/${e}/test`,tI=({size:e=22})=>v.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[v.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M 7.556 3.681 C 8.185 3.199 8.927 2.837 9.796 2.612 C 9.786 2.524 9.781 2.435 9.781 2.345 C 9.781 1.089 10.8 0.072 12.055 0.072 C 13.311 0.072 14.328 1.089 14.328 2.345 C 14.328 2.435 14.323 2.524 14.313 2.612 C 15.181 2.837 15.925 3.199 16.553 3.681 C 17.662 4.533 18.304 5.677 18.683 6.817 C 19.062 7.948 19.198 9.126 19.264 10.119 C 19.29 10.523 19.308 10.91 19.321 11.252 L 19.331 11.482 C 19.349 11.893 19.368 12.199 19.398 12.425 C 19.62 14.086 19.895 15.252 20.289 16.183 C 20.673 17.094 21.187 17.828 21.952 18.592 C 22.277 18.917 22.374 19.406 22.198 19.831 C 22.023 20.256 21.609 20.532 21.148 20.532 L 14.025 20.532 C 14.218 20.867 14.328 21.255 14.328 21.668 C 14.328 22.925 13.311 23.943 12.055 23.943 C 10.8 23.943 9.781 22.925 9.781 21.668 C 9.781 21.255 9.892 20.867 10.086 20.532 L 2.961 20.532 C 2.502 20.532 2.087 20.256 1.911 19.831 C 1.735 19.406 1.832 18.917 2.157 18.592 C 2.923 17.826 3.437 17.098 3.819 16.19 C 4.213 15.262 4.488 14.099 4.711 12.425 C 4.742 12.199 4.76 11.893 4.777 11.482 L 4.787 11.252 C 4.802 10.91 4.818 10.523 4.844 10.119 C 4.911 9.126 5.048 7.948 5.424 6.817 C 5.805 5.677 6.447 4.533 7.556 3.681 Z M 5.312 18.259 C 5.537 17.889 5.736 17.497 5.914 17.075 C 6.421 15.879 6.73 14.485 6.965 12.727 C 7.011 12.384 7.032 11.98 7.049 11.581 L 7.06 11.337 C 7.074 10.996 7.089 10.644 7.113 10.272 C 7.175 9.347 7.296 8.394 7.582 7.536 C 7.865 6.686 8.292 5.982 8.941 5.484 C 9.582 4.992 10.546 4.618 12.055 4.618 C 13.564 4.618 14.527 4.992 15.167 5.484 C 15.816 5.982 16.245 6.686 16.528 7.536 C 16.814 8.394 16.934 9.347 16.997 10.272 C 17.021 10.644 17.036 10.996 17.05 11.337 L 17.061 11.581 C 17.077 11.98 17.098 12.384 17.144 12.727 C 17.377 14.475 17.688 15.867 18.194 17.066 C 18.373 17.491 18.573 17.884 18.799 18.259 L 5.312 18.259 Z",fill:"currentColor"}),v.jsx("path",{d:"M 15.285 7.952 L 16.425 5.973 C 16.754 5.392 16.56 4.649 15.98 4.318 C 15.402 3.986 14.657 4.18 14.326 4.761 L 13.179 6.741 C 10.743 5.973 8.016 6.97 6.686 9.274 C 5.838 10.74 5.736 12.426 6.25 13.905 L 8.359 10.243 C 8.359 10.243 8.359 10.243 8.359 10.243 C 8.841 9.403 9.63 8.802 10.568 8.551 C 11.506 8.296 12.482 8.427 13.323 8.917 C 15.056 9.918 15.655 12.146 14.652 13.877 C 13.648 15.611 11.428 16.21 9.689 15.206 L 10.9 13.109 C 11.479 13.44 12.222 13.247 12.555 12.666 C 12.886 12.087 12.69 11.345 12.111 11.013 C 11.532 10.68 10.788 10.877 10.457 11.454 L 6.602 18.144 C 6.269 18.725 6.464 19.466 7.044 19.8 C 7.624 20.13 8.367 19.935 8.699 19.355 L 9.846 17.377 C 12.281 18.144 15.009 17.149 16.338 14.842 C 17.666 12.543 17.165 9.685 15.285 7.952 Z",fill:"currentColor",style:{strokeWidth:"0.5px",stroke:"currentColor"}})]});function nI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rI=nI,iI=new Ca("auth","Firebase",nI());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh=new $v("@firebase/auth");function v$(e,...t){oh.logLevel<=lt.WARN&&oh.warn(`Auth (${Zo}): ${e}`,...t)}function Ef(e,...t){oh.logLevel<=lt.ERROR&&oh.error(`Auth (${Zo}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(e,...t){throw z_(e,...t)}function mr(e,...t){return z_(e,...t)}function $_(e,t,n){const i={...rI(),[t]:n};return new Ca("auth","Firebase",i).create(t,{appName:e.name})}function fi(e){return $_(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _$(e,t,n){const i=n;if(!(t instanceof i))throw i.name!==t.constructor.name&&Jn(e,"argument-error"),$_(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function z_(e,...t){if(typeof e!="string"){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return iI.create(e,...t)}function Oe(e,t,...n){if(!e)throw z_(t,...n)}function li(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ef(t),new Error(t)}function gi(e,t){e||li(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(){return typeof self<"u"&&self.location?.href||""}function b$(){return fx()==="http:"||fx()==="https:"}function fx(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Eu{constructor(t,n){this.shortDelay=t,this.longDelay=n,gi(n>t,"Short delay should be less than long delay!"),this.isMobile=Uv()||VC()}get(){return S$()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B_(e,t){gi(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const x$=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],T$=new Eu(3e4,6e4);function ys(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function vs(e,t,n,i,a={}){return aI(e,a,async()=>{let l={},u={};i&&(t==="GET"?u=i:l={body:JSON.stringify(i)});const f=Ko({key:e.config.apiKey,...u}).slice(1),h=await e._getAdditionalHeaders();h["Content-Type"]="application/json",e.languageCode&&(h["X-Firebase-Locale"]=e.languageCode);const p={method:t,headers:h,...l};return ZL()||(p.referrerPolicy="no-referrer"),e.emulatorConfig&&Qo(e.emulatorConfig.host)&&(p.credentials="include"),sI.fetch()(await oI(e,e.config.apiHost,n,f),p)})}async function aI(e,t,n){e._canInitEmulator=!1;const i={...E$,...t};try{const a=new R$(e),l=await Promise.race([n(),a.promise]);a.clearNetworkTimeout();const u=await l.json();if("needConfirmation"in u)throw Jd(e,"account-exists-with-different-credential",u);if(l.ok&&!("errorMessage"in u))return u;{const f=l.ok?u.errorMessage:u.error.message,[h,p]=f.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Jd(e,"credential-already-in-use",u);if(h==="EMAIL_EXISTS")throw Jd(e,"email-already-in-use",u);if(h==="USER_DISABLED")throw Jd(e,"user-disabled",u);const g=i[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw $_(e,g,p);Jn(e,g)}}catch(a){if(a instanceof _i)throw a;Jn(e,"network-request-failed",{message:String(a)})}}async function xu(e,t,n,i,a={}){const l=await vs(e,t,n,i,a);return"mfaPendingCredential"in l&&Jn(e,"multi-factor-auth-required",{_serverResponse:l}),l}async function oI(e,t,n,i){const a=`${t}${n}?${i}`,l=e,u=l.config.emulator?B_(e.config,a):`${e.config.apiScheme}://${a}`;return x$.includes(n)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(u).toString():u}function C$(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class R${clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(mr(this.auth,"network-request-failed")),T$.get())})}}function Jd(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const a=mr(e,t,i);return a.customData._tokenResponse=n,a}function hx(e){return e!==void 0&&e.enterprise!==void 0}class A${constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return C$(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function I$(e,t){return vs(e,"GET","/v2/recaptchaConfig",ys(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Pc(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function O$(e,t=!1){const n=Gt(e),i=await n.getIdToken(t),a=H_(i);Oe(a&&a.exp&&a.auth_time&&a.iat,n.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,u=l?.sign_in_provider;return{claims:a,token:i,authTime:Pc(ry(a.auth_time)),issuedAtTime:Pc(ry(a.iat)),expirationTime:Pc(ry(a.exp)),signInProvider:u||null,signInSecondFactor:l?.sign_in_second_factor||null}}function ry(e){return Number(e)*1e3}function H_(e){const[t,n,i]=e.split(".");if(t===void 0||n===void 0||i===void 0)return Ef("JWT malformed, contained fewer than 3 sections"),null;try{const a=$f(n);return a?JSON.parse(a):(Ef("Failed to decode base64 JWT payload"),null)}catch(a){return Ef("Caught error parsing JWT payload as JSON",a?.toString()),null}}function px(e){const t=H_(e);return Oe(t,"internal-error"),Oe(typeof t.exp<"u","internal-error"),Oe(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function ch(e){const t=e.auth,n=await e.getIdToken(),i=await su(e,lh(t,{idToken:n}));Oe(i?.users.length,t,"internal-error");const a=i.users[0];e._notifyReloadListener(a);const l=a.providerUserInfo?.length?lI(a.providerUserInfo):[],u=L$(e.providerData,l),f=e.isAnonymous,h=!(e.email&&a.passwordHash)&&!u?.length,p=f?h:!1,g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:u,metadata:new rv(a.createdAt,a.lastLoginAt),isAnonymous:p};Object.assign(e,g)}async function k$(e){const t=Gt(e);await ch(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function L$(e,t){return[...e.filter(i=>!t.some(a=>a.providerId===i.providerId)),...t]}function lI(e){return e.map(({providerId:t,...n})=>({providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P$(e,t){const n=await aI(e,{},async()=>{const i=Ko({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:a,apiKey:l}=e.config,u=await oI(e,a,"/v1/token",`key=${l}`),f=await e._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:f,body:i};return e.emulatorConfig&&Qo(e.emulatorConfig.host)&&(h.credentials="include"),sI.fetch()(u,h)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function j$(e,t){return vs(e,"POST","/v2/accounts:revokeToken",ys(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Oe(t.idToken,"internal-error"),Oe(typeof t.idToken<"u","internal-error"),Oe(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):px(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){Oe(t.length!==0,"internal-error");const n=px(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Oe(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:i,refreshToken:a,expiresIn:l}=await P$(t,n);this.updateTokensAndExpiration(i,a,Number(l))}updateTokensAndExpiration(t,n,i){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(t,n){const{refreshToken:i,accessToken:a,expirationTime:l}=n,u=new Ao;return i&&(Oe(typeof i=="string","internal-error",{appName:t}),u.refreshToken=i),a&&(Oe(typeof a=="string","internal-error",{appName:t}),u.accessToken=a),l&&(Oe(typeof l=="number","internal-error",{appName:t}),u.expirationTime=l),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ao,this.toJSON())}_performRefresh(){return li("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(e,t){Oe(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class ur{constructor({uid:t,auth:n,stsTokenManager:i,...a}){this.providerId="firebase",this.proactiveRefresh=new M$(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new rv(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(t){const n=await su(this,this.stsTokenManager.getToken(this.auth,t));return Oe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return O$(this,t)}reload(){return k$(this)}_assign(t){this!==t&&(Oe(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>({...n})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new ur({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(t){Oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),n&&await ch(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Mn(this.auth.app))return Promise.reject(fi(this.auth));const t=await this.getIdToken();return await su(this,D$(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){const i=n.displayName??void 0,a=n.email??void 0,l=n.phoneNumber??void 0,u=n.photoURL??void 0,f=n.tenantId??void 0,h=n._redirectEventId??void 0,p=n.createdAt??void 0,g=n.lastLoginAt??void 0,{uid:y,emailVerified:_,isAnonymous:b,providerData:w,stsTokenManager:O}=n;Oe(y&&O,t,"internal-error");const R=Ao.fromJSON(this.name,O);Oe(typeof y=="string",t,"internal-error"),Yi(i,t.name),Yi(a,t.name),Oe(typeof _=="boolean",t,"internal-error"),Oe(typeof b=="boolean",t,"internal-error"),Yi(l,t.name),Yi(u,t.name),Yi(f,t.name),Yi(h,t.name),Yi(p,t.name),Yi(g,t.name);const D=new ur({uid:y,auth:t,email:a,emailVerified:_,displayName:i,isAnonymous:b,photoURL:u,phoneNumber:l,tenantId:f,stsTokenManager:R,createdAt:p,lastLoginAt:g});return w&&Array.isArray(w)&&(D.providerData=w.map(k=>({...k}))),h&&(D._redirectEventId=h),D}static async _fromIdTokenResponse(t,n,i=!1){const a=new Ao;a.updateFromServerResponse(n);const l=new ur({uid:n.localId,auth:t,stsTokenManager:a,isAnonymous:i});return await ch(l),l}static async _fromGetAccountInfoResponse(t,n,i){const a=n.users[0];Oe(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?lI(a.providerUserInfo):[],u=!(a.email&&a.passwordHash)&&!l?.length,f=new Ao;f.updateFromIdToken(i);const h=new ur({uid:a.localId,auth:t,stsTokenManager:f,isAnonymous:u}),p={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new rv(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!l?.length};return Object.assign(h,p),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mx=new Map;function ci(e){gi(e instanceof Function,"Expected a class definition");let t=mx.get(e);return t?(gi(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,mx.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}cI.type="NONE";const gx=cI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xf(e,t,n){return`firebase:${e}:${t}:${n}`}class Io{constructor(t,n,i){this.persistence=t,this.auth=n,this.userKey=i;const{config:a,name:l}=this.auth;this.fullUserKey=xf(this.userKey,a.apiKey,l),this.fullPersistenceKey=xf("persistence",a.apiKey,l),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await lh(this.auth,{idToken:t}).catch(()=>{});return n?ur._fromGetAccountInfoResponse(this.auth,n,t):null}return ur._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,i="authUser"){if(!n.length)return new Io(ci(gx),t,i);const a=(await Promise.all(n.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let l=a[0]||ci(gx);const u=xf(i,t.config.apiKey,t.name);let f=null;for(const p of n)try{const g=await p._get(u);if(g){let y;if(typeof g=="string"){const _=await lh(t,{idToken:g}).catch(()=>{});if(!_)break;y=await ur._fromGetAccountInfoResponse(t,_,g)}else y=ur._fromJSON(t,g);p!==l&&(f=y),l=p;break}}catch{}const h=a.filter(p=>p._shouldAllowMigration);return!l._shouldAllowMigration||!h.length?new Io(l,t,i):(l=h[0],f&&await l._set(u,f.toJSON()),await Promise.all(n.map(async p=>{if(p!==l)try{await p._remove(u)}catch{}})),new Io(l,t,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yx(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(hI(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(uI(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(mI(t))return"Blackberry";if(gI(t))return"Webos";if(dI(t))return"Safari";if((t.includes("chrome/")||fI(t))&&!t.includes("edge/"))return"Chrome";if(pI(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=e.match(n);if(i?.length===2)return i[1]}return"Other"}function uI(e=fn()){return/firefox\//i.test(e)}function dI(e=fn()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function fI(e=fn()){return/crios\//i.test(e)}function hI(e=fn()){return/iemobile/i.test(e)}function pI(e=fn()){return/android/i.test(e)}function mI(e=fn()){return/blackberry/i.test(e)}function gI(e=fn()){return/webos/i.test(e)}function F_(e=fn()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function U$(e=fn()){return F_(e)&&!!window.navigator?.standalone}function $$(){return eP()&&document.documentMode===10}function yI(e=fn()){return F_(e)||pI(e)||gI(e)||mI(e)||/windows phone/i.test(e)||hI(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vI(e,t=[]){let n;switch(e){case"Browser":n=yx(fn());break;case"Worker":n=`${yx(fn())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zo}/${i}`}/**
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
 */class z${constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const i=l=>new Promise((u,f)=>{try{const h=t(l);u(h)}catch(h){f(h)}});i.onAbort=n,this.queue.push(i);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const i of this.queue)await i(t),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const a of n)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
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
 */const H$=6;class F${constructor(t){const n=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??H$,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=t.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,n),this.validatePasswordCharacterOptions(t,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(t,n){const i=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=t.length>=i),a&&(n.meetsMaxPasswordLength=t.length<=a)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let a=0;a<t.length;a++)i=t.charAt(a),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(t,n,i,a,l){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q${constructor(t,n,i,a){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vx(this),this.idTokenSubscription=new vx(this),this.beforeStateQueue=new z$(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=iI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=ci(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Io.create(this,t),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await lh(this,{idToken:t}),i=await ur._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){if(Mn(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(u,u))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,a=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=this.redirectUser?._redirectEventId,u=i?._redirectEventId,f=await this.tryRedirectSignIn(t);(!l||l===u)&&f?.user&&(i=f.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(l){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await ch(t)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=w$()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Mn(this.app))return Promise.reject(fi(this));const n=t?Gt(t):null;return n&&Oe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&Oe(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Mn(this.app)?Promise.reject(fi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Mn(this.app)?Promise.reject(fi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ci(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await B$(this),n=new F$(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Ca("auth","Firebase",t())}onAuthStateChanged(t,n,i){return this.registerStateListener(this.authStateSubscription,t,n,i)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,i){return this.registerStateListener(this.idTokenSubscription,t,n,i)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const i=this.onAuthStateChanged(()=>{i(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await j$(this,i)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(t,n){const i=await this.getOrInitRedirectPersistenceManager(n);return t===null?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&ci(t)||this._popupRedirectResolver;Oe(n,this,"argument-error"),this.redirectPersistenceManager=await Io.create(this,[ci(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===t?this._currentUser:this.redirectUser?._redirectEventId===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=this.currentUser?.uid??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,i,a){if(this._deleted)return()=>{};const l=typeof n=="function"?n:n.next.bind(n);let u=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(Oe(f,this,"internal-error"),f.then(()=>{u||l(this.currentUser)}),typeof n=="function"){const h=t.addObserver(n,i,a);return()=>{u=!0,h()}}else{const h=t.addObserver(n);return()=>{u=!0,h()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=vI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){if(Mn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return t?.error&&v$(`Error while retrieving App Check token: ${t.error}`),t?.token}}function _s(e){return Gt(e)}class vx{constructor(t){this.auth=t,this.observer=null,this.addObserver=cP(n=>this.observer=n)}get next(){return Oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function V$(e){Jh=e}function _I(e){return Jh.loadJS(e)}function G$(){return Jh.recaptchaEnterpriseScript}function Y$(){return Jh.gapiScript}function W$(e){return`__${e}${Math.floor(Math.random()*1e6)}`}class Q${constructor(){this.enterprise=new K$}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class K${ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const X$="recaptcha-enterprise",bI="NO_RECAPTCHA";class Z${constructor(t){this.type=X$,this.auth=_s(t)}async verify(t="verify",n=!1){async function i(l){if(!n){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(u,f)=>{I$(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const p=new A$(h);return l.tenantId==null?l._agentRecaptchaConfig=p:l._tenantRecaptchaConfigs[l.tenantId]=p,u(p.siteKey)}}).catch(h=>{f(h)})})}function a(l,u,f){const h=window.grecaptcha;hx(h)?h.enterprise.ready(()=>{h.enterprise.execute(l,{action:t}).then(p=>{u(p)}).catch(()=>{u(bI)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Q$().execute("siteKey",{action:"verify"}):new Promise((l,u)=>{i(this.auth).then(f=>{if(!n&&hx(window.grecaptcha))a(f,l,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let h=G$();h.length!==0&&(h+=f),_I(h).then(()=>{a(f,l,u)}).catch(p=>{u(p)})}}).catch(f=>{u(f)})})}}async function _x(e,t,n,i=!1,a=!1){const l=new Z$(e);let u;if(a)u=bI;else try{u=await l.verify(n)}catch{u=await l.verify(n,!0)}const f={...t};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const h=f.phoneEnrollmentInfo.phoneNumber,p=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:h,recaptchaToken:p,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const h=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:h,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return i?Object.assign(f,{captchaResp:u}):Object.assign(f,{captchaResponse:u}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function iv(e,t,n,i,a){if(e._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await _x(e,t,n,n==="getOobCode");return i(e,l)}else return i(e,t).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await _x(e,t,n,n==="getOobCode");return i(e,u)}else return Promise.reject(l)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SI(e,t){const n=Xo(e,"auth");if(n.isInitialized()){const a=n.getImmediate(),l=n.getOptions();if(ha(l,t??{}))return a;Jn(a,"already-initialized")}return n.initialize({options:t})}function J$(e,t){const n=t?.persistence||[],i=(Array.isArray(n)?n:[n]).map(ci);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,t?.popupRedirectResolver)}function ez(e,t,n){const i=_s(e);Oe(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const a=!1,l=wI(t),{host:u,port:f}=tz(t),h=f===null?"":`:${f}`,p={url:`${l}//${u}${h}/`},g=Object.freeze({host:u,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!i._canInitEmulator){Oe(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),Oe(ha(p,i.config.emulator)&&ha(g,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=p,i.emulatorConfig=g,i.settings.appVerificationDisabledForTesting=!0,Qo(u)?(FC(`${l}//${u}${h}`),qC("Auth",!0)):nz()}function wI(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function tz(e){const t=wI(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){const l=a[1];return{host:l,port:bx(i.substr(l.length+1))}}else{const[l,u]=i.split(":");return{host:l,port:bx(u)}}}function bx(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function nz(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return li("not implemented")}_getIdTokenResponse(t){return li("not implemented")}_linkToIdToken(t,n){return li("not implemented")}_getReauthenticationResolver(t){return li("not implemented")}}async function rz(e,t){return vs(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function sz(e,t){return xu(e,"POST","/v1/accounts:signInWithEmailLink",ys(e,t))}async function az(e,t){return xu(e,"POST","/v1/accounts:signInWithEmailLink",ys(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au extends q_{constructor(t,n,i,a=null){super("password",i),this._email=t,this._password=n,this._tenantId=a}static _fromEmailAndPassword(t,n){return new au(t,n,"password")}static _fromEmailAndCode(t,n,i=null){return new au(t,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return iv(t,n,"signInWithPassword",iz);case"emailLink":return sz(t,{email:this._email,oobCode:this._password});default:Jn(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return iv(t,i,"signUpPassword",rz);case"emailLink":return az(t,{idToken:n,email:this._email,oobCode:this._password});default:Jn(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Do(e,t){return xu(e,"POST","/v1/accounts:signInWithIdp",ys(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oz="http://localhost";class Sa extends q_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Sa(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Jn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:i,signInMethod:a,...l}=n;if(!i||!a)return null;const u=new Sa(i,a);return u.idToken=l.idToken||void 0,u.accessToken=l.accessToken||void 0,u.secret=l.secret,u.nonce=l.nonce,u.pendingToken=l.pendingToken||null,u}_getIdTokenResponse(t){const n=this.buildRequest();return Do(t,n)}_linkToIdToken(t,n){const i=this.buildRequest();return i.idToken=n,Do(t,i)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Do(t,n)}buildRequest(){const t={requestUri:oz,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Ko(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lz(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function cz(e){const t=bc(Sc(e)).link,n=t?bc(Sc(t)).deep_link_id:null,i=bc(Sc(e)).deep_link_id;return(i?bc(Sc(i)).link:null)||i||n||t||e}class V_{constructor(t){const n=bc(Sc(t)),i=n.apiKey??null,a=n.oobCode??null,l=lz(n.mode??null);Oe(i&&a&&l,"argument-error"),this.apiKey=i,this.operation=l,this.code=a,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(t){const n=cz(t);try{return new V_(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(){this.providerId=il.PROVIDER_ID}static credential(t,n){return au._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const i=V_.parseLink(n);return Oe(i,"argument-error"),au._fromEmailAndCode(t,i.code,i.tenantId)}}il.PROVIDER_ID="password";il.EMAIL_PASSWORD_SIGN_IN_METHOD="password";il.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu extends G_{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji extends Tu{constructor(){super("facebook.com")}static credential(t){return Sa._fromParams({providerId:Ji.PROVIDER_ID,signInMethod:Ji.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ji.credentialFromTaggedObject(t)}static credentialFromError(t){return Ji.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ji.credential(t.oauthAccessToken)}catch{return null}}}Ji.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ji.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends Tu{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Sa._fromParams({providerId:si.PROVIDER_ID,signInMethod:si.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return si.credentialFromTaggedObject(t)}static credentialFromError(t){return si.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:i}=t;if(!n&&!i)return null;try{return si.credential(n,i)}catch{return null}}}si.GOOGLE_SIGN_IN_METHOD="google.com";si.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es extends Tu{constructor(){super("github.com")}static credential(t){return Sa._fromParams({providerId:es.PROVIDER_ID,signInMethod:es.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return es.credentialFromTaggedObject(t)}static credentialFromError(t){return es.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return es.credential(t.oauthAccessToken)}catch{return null}}}es.GITHUB_SIGN_IN_METHOD="github.com";es.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts extends Tu{constructor(){super("twitter.com")}static credential(t,n){return Sa._fromParams({providerId:ts.PROVIDER_ID,signInMethod:ts.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return ts.credentialFromTaggedObject(t)}static credentialFromError(t){return ts.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=t;if(!n||!i)return null;try{return ts.credential(n,i)}catch{return null}}}ts.TWITTER_SIGN_IN_METHOD="twitter.com";ts.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class wa{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,i,a=!1){const l=await ur._fromIdTokenResponse(t,i,a),u=Sx(i);return new wa({user:l,providerId:u,_tokenResponse:i,operationType:n})}static async _forOperation(t,n,i){await t._updateTokensIfNecessary(i,!0);const a=Sx(i);return new wa({user:t,providerId:a,_tokenResponse:i,operationType:n})}}function Sx(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh extends _i{constructor(t,n,i,a){super(n.code,n.message),this.operationType=i,this.user=a,Object.setPrototypeOf(this,uh.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(t,n,i,a){return new uh(t,n,i,a)}}function EI(e,t,n,i){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?uh._fromErrorAndOperation(e,l,t,i):l})}async function dz(e,t,n=!1){const i=await su(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return wa._forOperation(e,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fz(e,t,n=!1){const{auth:i}=e;if(Mn(i.app))return Promise.reject(fi(i));const a="reauthenticate";try{const l=await su(e,EI(i,a,t,e),n);Oe(l.idToken,i,"internal-error");const u=H_(l.idToken);Oe(u,i,"internal-error");const{sub:f}=u;return Oe(e.uid===f,i,"user-mismatch"),wa._forOperation(e,a,l)}catch(l){throw l?.code==="auth/user-not-found"&&Jn(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xI(e,t,n=!1){if(Mn(e.app))return Promise.reject(fi(e));const i="signIn",a=await EI(e,i,t),l=await wa._fromIdTokenResponse(e,i,a);return n||await e._updateCurrentUser(l.user),l}async function hz(e,t){return xI(_s(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TI(e){const t=_s(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function pz(e,t,n){if(Mn(e.app))return Promise.reject(fi(e));const i=_s(e),u=await iv(i,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",uz).catch(h=>{throw h.code==="auth/password-does-not-meet-requirements"&&TI(e),h}),f=await wa._fromIdTokenResponse(i,"signIn",u);return await i._updateCurrentUser(f.user),f}function mz(e,t,n){return Mn(e.app)?Promise.reject(fi(e)):hz(Gt(e),il.credential(t,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&TI(e),i})}function gz(e,t,n,i){return Gt(e).onIdTokenChanged(t,n,i)}function yz(e,t,n){return Gt(e).beforeAuthStateChanged(t,n)}function vz(e,t,n,i){return Gt(e).onAuthStateChanged(t,n,i)}const dh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const _z=1e3,bz=10;class RI extends CI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=yI(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),a=this.localCache[n];i!==a&&t(n,a,i)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((u,f,h)=>{this.notifyListeners(u,h)});return}const i=t.key;n?this.detachListener():this.stopPolling();const a=()=>{const u=this.storage.getItem(i);!n&&this.localCache[i]===u||this.notifyListeners(i,u)},l=this.storage.getItem(i);$$()&&l!==t.newValue&&t.newValue!==t.oldValue?setTimeout(a,bz):a()}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const a of Array.from(i))a(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:i}),!0)})},_z)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}RI.type="LOCAL";const Sz=RI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ep{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(a=>a.isListeningto(t));if(n)return n;const i=new ep(t);return this.receivers.push(i),i}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:i,eventType:a,data:l}=n.data,u=this.handlersMap[a];if(!u?.size)return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:a});const f=Array.from(u).map(async p=>p(n.origin,l)),h=await wz(f);n.ports[0].postMessage({status:"done",eventId:i,eventType:a,response:h})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ep.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y_(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ez{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,i=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,u;return new Promise((f,h)=>{const p=Y_("",20);a.port1.start();const g=setTimeout(()=>{h(new Error("unsupported_event"))},i);u={messageChannel:a,onMessage(y){const _=y;if(_.data.eventId===p)switch(_.data.status){case"ack":clearTimeout(g),l=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(_.data.response);break;default:clearTimeout(g),clearTimeout(l),h(new Error("invalid_response"));break}}},this.handlers.add(u),a.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:t,eventId:p,data:n},[a.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const OI="firebaseLocalStorageDb",Az=1,fh="firebaseLocalStorage",NI="fbase_key";class Cu{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function tp(e,t){return e.transaction([fh],t?"readwrite":"readonly").objectStore(fh)}function Iz(){const e=indexedDB.deleteDatabase(OI);return new Cu(e).toPromise()}function sv(){const e=indexedDB.open(OI,Az);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const i=e.result;try{i.createObjectStore(fh,{keyPath:NI})}catch(a){n(a)}}),e.addEventListener("success",async()=>{const i=e.result;i.objectStoreNames.contains(fh)?t(i):(i.close(),await Iz(),t(await sv()))})})}async function wx(e,t,n){const i=tp(e,!0).put({[NI]:t,value:n});return new Cu(i).toPromise()}async function Dz(e,t){const n=tp(e,!1).get(t),i=await new Cu(n).toPromise();return i===void 0?null:i.value}function Ex(e,t){const n=tp(e,!0).delete(t);return new Cu(n).toPromise()}const Oz=800,Nz=3;class MI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sv(),this.db)}async _withRetries(t){let n=0;for(;;)try{const i=await this._openDb();return await t(i)}catch(i){if(n++>Nz)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return DI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ep._getInstance(Rz()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Tz(),!this.activeServiceWorker)return;this.sender=new Ez(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&t[0]?.fulfilled&&t[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Cz()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await sv();return await wx(t,dh,"1"),await Ex(t,dh),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>wx(i,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(i=>Dz(i,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ex(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(a=>{const l=tp(a,!1).getAll();return new Cu(l).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(t.length!==0)for(const{fbase_key:a,value:l}of t)i.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),n.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!i.has(a)&&(this.notifyListeners(a,null),n.push(a));return n}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const a of Array.from(i))a(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Oz)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}MI.type="LOCAL";const Mz=MI;new Eu(3e4,6e4);/**
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
 */class W_ extends q_{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Do(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Do(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Do(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function kz(e){return xI(e.auth,new W_(e),e.bypassAuthState)}function Lz(e){const{auth:t,user:n}=e;return Oe(n,t,"internal-error"),fz(n,new W_(e),e.bypassAuthState)}async function Pz(e){const{auth:t,user:n}=e;return Oe(n,t,"internal-error"),dz(n,new W_(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(t,n,i,a,l=!1){this.auth=t,this.resolver=i,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:i,postBody:a,tenantId:l,error:u,type:f}=t;if(u){this.reject(u);return}const h={auth:this.auth,requestUri:n,sessionId:i,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(h))}catch(p){this.reject(p)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return kz;case"linkViaPopup":case"linkViaRedirect":return Pz;case"reauthViaPopup":case"reauthViaRedirect":return Lz;default:Jn(this.auth,"internal-error")}}resolve(t){gi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){gi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jz=new Eu(2e3,1e4);async function Uz(e,t,n){if(Mn(e.app))return Promise.reject(mr(e,"operation-not-supported-in-this-environment"));const i=_s(e);_$(e,t,G_);const a=kI(i,n);return new sa(i,"signInViaPopup",t,a).executeNotNull()}class sa extends LI{constructor(t,n,i,a,l){super(t,n,a,l),this.provider=i,this.authWindow=null,this.pollId=null,sa.currentPopupAction&&sa.currentPopupAction.cancel(),sa.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return Oe(t,this.auth,"internal-error"),t}async onExecution(){gi(this.filter.length===1,"Popup operations only handle one event");const t=Y_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(mr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,sa.currentPopupAction=null}pollUserCancellation(){const t=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,jz.get())};t()}}sa.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $z="pendingRedirect",Tf=new Map;class zz extends LI{constructor(t,n,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let t=Tf.get(this.auth._key());if(!t){try{const i=await Bz(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(i)}catch(n){t=()=>Promise.reject(n)}Tf.set(this.auth._key(),t)}return this.bypassAuthState||Tf.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Bz(e,t){const n=qz(t),i=Fz(e);if(!await i._isAvailable())return!1;const a=await i._get(n)==="true";return await i._remove(n),a}function Hz(e,t){Tf.set(e._key(),t)}function Fz(e){return ci(e._redirectPersistence)}function qz(e){return xf($z,e.config.apiKey,e.name)}async function Vz(e,t,n=!1){if(Mn(e.app))return Promise.reject(fi(e));const i=_s(e),a=kI(i,t),u=await new zz(i,a,n).execute();return u&&!n&&(delete u.user._redirectEventId,await i._persistUserIfCurrent(u.user),await i._setRedirectUser(null,t)),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gz=600*1e3;class Yz{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(t,i)&&(n=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Wz(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){if(t.error&&!PI(t)){const i=t.error.code?.split("auth/")[1]||"internal-error";n.onError(mr(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const i=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Gz&&this.cachedEventUids.clear(),this.cachedEventUids.has(xx(t))}saveEventToCache(t){this.cachedEventUids.add(xx(t)),this.lastProcessedEventTime=Date.now()}}function xx(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function PI({type:e,error:t}){return e==="unknown"&&t?.code==="auth/no-auth-event"}function Wz(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return PI(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Kz=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Xz=/^https?/;async function Zz(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Qz(e);for(const n of t)try{if(Jz(n))return}catch{}Jn(e,"unauthorized-domain")}function Jz(e){const t=nv(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const u=new URL(e);return u.hostname===""&&i===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&u.hostname===i}if(!Xz.test(n))return!1;if(Kz.test(e))return i===e;const a=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(i)}/**
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
 */const e8=new Eu(3e4,6e4);function Tx(){const e=Dr().___jsl;if(e?.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function t8(e){return new Promise((t,n)=>{function i(){Tx(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Tx(),n(mr(e,"network-request-failed"))},timeout:e8.get()})}if(Dr().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(Dr().gapi?.load)i();else{const a=W$("iframefcb");return Dr()[a]=()=>{gapi.load?i():n(mr(e,"network-request-failed"))},_I(`${Y$()}?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Cf=null,t})}let Cf=null;function n8(e){return Cf=Cf||t8(e),Cf}/**
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
 */const r8=new Eu(5e3,15e3),i8="__/auth/iframe",s8="emulator/auth/iframe",a8={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},o8=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function l8(e){const t=e.config;Oe(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?B_(t,s8):`https://${e.config.authDomain}/${i8}`,i={apiKey:t.apiKey,appName:e.name,v:Zo},a=o8.get(e.config.apiHost);a&&(i.eid=a);const l=e._getFrameworks();return l.length&&(i.fw=l.join(",")),`${n}?${Ko(i).slice(1)}`}async function c8(e){const t=await n8(e),n=Dr().gapi;return Oe(n,e,"internal-error"),t.open({where:document.body,url:l8(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:a8,dontclear:!0},i=>new Promise(async(a,l)=>{await i.restyle({setHideOnLeave:!1});const u=mr(e,"network-request-failed"),f=Dr().setTimeout(()=>{l(u)},r8.get());function h(){Dr().clearTimeout(f),a(i)}i.ping(h).then(h,()=>{l(u)})}))}/**
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
 */const u8={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},d8=500,f8=600,h8="_blank",p8="http://localhost";class Cx{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function m8(e,t,n,i=d8,a=f8){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),u=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const h={...u8,width:i.toString(),height:a.toString(),top:l,left:u},p=fn().toLowerCase();n&&(f=fI(p)?h8:n),uI(p)&&(t=t||p8,h.scrollbars="yes");const g=Object.entries(h).reduce((_,[b,w])=>`${_}${b}=${w},`,"");if(U$(p)&&f!=="_self")return g8(t||"",f),new Cx(null);const y=window.open(t||"",f,g);Oe(y,e,"popup-blocked");try{y.focus()}catch{}return new Cx(y)}function g8(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const y8="__/auth/handler",v8="emulator/auth/handler",_8=encodeURIComponent("fac");async function Rx(e,t,n,i,a,l){Oe(e.config.authDomain,e,"auth-domain-config-required"),Oe(e.config.apiKey,e,"invalid-api-key");const u={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:Zo,eventId:a};if(t instanceof G_){t.setDefaultLanguage(e.languageCode),u.providerId=t.providerId||"",Iy(t.getCustomParameters())||(u.customParameters=JSON.stringify(t.getCustomParameters()));for(const[g,y]of Object.entries({}))u[g]=y}if(t instanceof Tu){const g=t.getScopes().filter(y=>y!=="");g.length>0&&(u.scopes=g.join(","))}e.tenantId&&(u.tid=e.tenantId);const f=u;for(const g of Object.keys(f))f[g]===void 0&&delete f[g];const h=await e._getAppCheckToken(),p=h?`#${_8}=${encodeURIComponent(h)}`:"";return`${b8(e)}?${Ko(f).slice(1)}${p}`}function b8({config:e}){return e.emulator?B_(e,v8):`https://${e.authDomain}/${y8}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy="webStorageSupport";class S8{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=II,this._completeRedirectFn=Vz,this._overrideRedirectResult=Hz}async _openPopup(t,n,i,a){gi(this.eventManagers[t._key()]?.manager,"_initialize() not called before _openPopup()");const l=await Rx(t,n,i,nv(),a);return m8(t,l,Y_())}async _openRedirect(t,n,i,a){await this._originValidation(t);const l=await Rx(t,n,i,nv(),a);return xz(l),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:a,promise:l}=this.eventManagers[n];return a?Promise.resolve(a):(gi(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(t);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(t){const n=await c8(t),i=new Yz(t);return n.register("authEvent",a=>(Oe(a?.authEvent,t,"invalid-auth-event"),{status:i.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=n,i}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(iy,{type:iy},a=>{const l=a?.[0]?.[iy];l!==void 0&&n(!!l),Jn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Zz(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return yI()||dI()||F_()}}const w8=S8;var Ax="@firebase/auth",Ix="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function x8(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function T8(e){Nr(new gr("auth",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),a=t.getProvider("heartbeat"),l=t.getProvider("app-check-internal"),{apiKey:u,authDomain:f}=i.options;Oe(u&&!u.includes(":"),"invalid-api-key",{appName:i.name});const h={apiKey:u,authDomain:f,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vI(e)},p=new q$(i,a,l,h);return J$(p,n),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,i)=>{t.getProvider("auth-internal").initialize()})),Nr(new gr("auth-internal",t=>{const n=_s(t.getProvider("auth").getImmediate());return(i=>new E8(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qn(Ax,Ix,x8(e)),Qn(Ax,Ix,"esm2020")}/**
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
 */const C8=300,R8=HC("authIdTokenMaxAge")||C8;let Dx=null;const A8=e=>async t=>{const n=t&&await t.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>R8)return;const a=n?.token;Dx!==a&&(Dx=a,await fetch(e,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function I8(e=Bv()){const t=Xo(e,"auth");if(t.isInitialized())return t.getImmediate();const n=SI(e,{popupRedirectResolver:w8,persistence:[Mz,Sz,II]}),i=HC("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const u=A8(l.toString());yz(n,u,()=>u(n.currentUser)),gz(n,f=>u(f))}}const a=zC("auth");return a&&ez(n,`http://${a}`),n}function D8(){return document.getElementsByTagName("head")?.[0]??document}V$({loadJS(e){return new Promise((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=a=>{const l=mr("internal-error");l.customData=a,n(l)},i.type="text/javascript",i.charset="UTF-8",D8().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});T8("Browser");const O8=rI,ai=Ph(()=>{if(!Ac)throw new Error("Firebase app not initialized");try{return I8(Ac)}catch{return SI(Ac,{errorMap:O8})}}),N8=I(ms)`
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
`,M8=I.div`
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
  margin-bottom: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,k8=I.button`
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
`,L8=()=>{const e=ct(el),{deleteToken:t}=C.useContext(gu),n=C.useCallback(async()=>{await t(),await ai?.signOut()},[t]);return e.state==="loading"?null:e.state!=="fulfilled"||!e.data?v.jsx(N8,{to:rt.SIGN_IN,children:"Sign in"}):v.jsxs(v.Fragment,{children:[v.jsx(M8,{children:e.data.displayName}),v.jsx(k8,{type:"button",onClick:n,children:"Sign out"})]})},P8="#181a2f",j8=280,U8=I.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  transition: opacity 0.2s;
  opacity: ${e=>e.$open?1:0};
  pointer-events: ${e=>e.$open?"all":"none"};
  z-index: 10;
`,$8=I.div`
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
`,z8=I.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: env(safe-area-inset-top, 0) 16px 0;
  height: calc(60px + env(safe-area-inset-top, 0px));
  background-color: ${P8};
  color: #fff;
  flex-shrink: 0;
`,B8=I(ms)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: inherit;
`,H8=I.span`
  font-size: 15px;
  font-weight: 600;
`,F8=I.button`
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
`,q8=I.nav`
  flex: 1;
  padding: 8px 0;
  overflow-y: auto;
`,ef=I(Tv)`
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
`,V8=I.div`
  padding: 16px 20px;
  border-top: 1px solid ${e=>e.theme.borderColor};
  flex-shrink: 0;
`,G8=()=>v.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none","aria-hidden":"true",children:v.jsx("path",{d:"M4 4l10 10M14 4L4 14",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})}),Y8=({open:e,onClose:t})=>{const n=ct(U_);return v.jsxs(v.Fragment,{children:[v.jsx(U8,{$open:e,onClick:t}),v.jsxs($8,{$open:e,onClick:i=>i.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":"Navigation menu",children:[v.jsxs(z8,{children:[v.jsxs(B8,{to:rt.CLASS_LIST,onClick:t,children:[v.jsx(tI,{size:20}),v.jsx(H8,{children:"Peloton Alerts"})]}),v.jsx(F8,{onClick:t,"aria-label":"Close menu",children:v.jsx(G8,{})})]}),v.jsxs(q8,{onClick:t,children:[v.jsx(ef,{to:rt.CLASS_LIST,end:!0,children:"Classes"}),v.jsx(ef,{to:rt.ALERTS,children:"Alerts"}),v.jsx(ef,{to:rt.ABOUT,end:!0,children:"FAQ"}),n&&v.jsx(ef,{to:rt.STATS,children:"Stats"})]}),v.jsx(V8,{children:v.jsx(L8,{})})]})]})},W8=I.div`
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
`,Q8=({children:e,open:t,onClose:n})=>{const i=C.useRef(null),a=C.useCallback(l=>{l.key==="Escape"&&n()},[n]);return C.useEffect(()=>{if(t)return document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a)}},[t,a]),C.useEffect(()=>{if(!t)return;const l=f=>{const h=f.target;if(!(h instanceof Node)){n();return}const p=i.current;p&&p.contains(h)||n()},u=setTimeout(()=>{document.addEventListener("click",l,!0)},0);return()=>{clearTimeout(u),document.removeEventListener("click",l,!0)}},[t,n]),t?v.jsx(W8,{ref:i,role:"dialog","aria-modal":"true",children:e}):null},K8=I(ms)`
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
`,X8=I.button`
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
`,Z8=I.div`
  position: relative;
`,J8=I.button`
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
`,eB=()=>{const e=ct(el),[t,n]=C.useState(!1),{deleteToken:i}=C.useContext(gu),a=C.useCallback(async()=>{await i(),await ai?.signOut()},[i]);if(e.state!=="fulfilled"||!e.data){const l=e.state==="loading";return v.jsx(K8,{to:rt.SIGN_IN,$disabled:l,"aria-disabled":l,tabIndex:l?-1:void 0,children:"Sign in"})}return v.jsxs(Z8,{children:[v.jsx(X8,{type:"button",onClick:()=>n(!0),"aria-expanded":t,"aria-haspopup":"dialog",children:e.data.displayName}),v.jsx(Q8,{open:t,onClose:()=>n(!1),children:v.jsx(J8,{type:"button",onClick:a,children:"Sign out"})})]})},tB="#181a2f",np=680,nB=I.nav`
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
`,rB=I(ms)`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  justify-self: start;
`,iB=I.span`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.01em;
  white-space: nowrap;
`,sB=I.div`
  display: flex;
  align-items: center;
  gap: 2px;

  @media only screen and (max-width: ${np}px) {
    display: none;
  }
`,tf=I(Tv)`
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
`,aB=I.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  justify-self: end;

  @media only screen and (max-width: ${np}px) {
    display: none;
  }
`,oB=I.button`
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
`,lB=()=>v.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:v.jsx("path",{d:"M3 5h14M3 10h14M3 15h14",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})}),cB=()=>{const[e,t]=C.useState(!1),n=ct(U_);return v.jsxs(v.Fragment,{children:[v.jsxs(nB,{children:[v.jsxs(rB,{to:rt.CLASS_LIST,children:[v.jsx(tI,{}),v.jsx(iB,{children:"Peloton Alerts"})]}),v.jsxs(sB,{children:[v.jsx(tf,{to:rt.CLASS_LIST,end:!0,children:"Classes"}),v.jsx(tf,{to:rt.ALERTS,children:"Alerts"}),v.jsx(tf,{to:rt.ABOUT,end:!0,children:"FAQ"}),n&&v.jsx(tf,{to:rt.STATS,children:"Stats"})]}),v.jsx(aB,{children:v.jsx(eB,{})}),v.jsx(oB,{type:"button","aria-label":"Open menu",onClick:()=>t(!0),children:v.jsx(lB,{})})]}),v.jsx(Y8,{open:e,onClose:()=>t(!1)})]})},uB=I.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`,dB=I.div`
  position: sticky;
  height: calc(${j_}px + env(safe-area-inset-top));
  top: 0;
  z-index: 1;
`,fB=I.div`
  flex: 1;
  background-color: ${e=>e.theme.colors.secondarySurface};
`,la=({children:e})=>v.jsxs(uB,{children:[v.jsx(dB,{children:v.jsx(cB,{})}),v.jsx(fB,{children:e})]}),Te=(...e)=>on`
  @media only screen and (max-width: ${t=>t.theme.widths.mobile}px) {
    ${on(...e)}
  }
`,jI=(...e)=>on`
  @media only screen and (max-width: ${t=>t.theme.widths.tablet}px) {
    ${on(...e)}
  }
`,hB=I.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 24px 20px;

  ${Te`
    padding: 16px 12px;
  `}
`,pB=I.div`
  margin-bottom: 20px;
`,mB=I.h1`
  font-size: 22px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
  margin: 0;
`,fc=I.section`
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  overflow: hidden;
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
`,hc=I.div`
  padding: 14px 20px;
  border-bottom: 1px solid ${e=>e.theme.borderColor};
`,pc=I.h2`
  font-size: 15px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
  margin: 0;
`,mc=I.div`
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
`,gB=()=>v.jsx(la,{children:v.jsxs(hB,{children:[v.jsx(pB,{children:v.jsx(mB,{children:"FAQ"})}),v.jsxs(fc,{children:[v.jsx(hc,{children:v.jsx(pc,{children:"What is this?"})}),v.jsx(mc,{children:v.jsxs("p",{children:["A quicker, smarter way to browse"," ",v.jsx("a",{href:"https://studio.onepeloton.com/",target:"_blank",rel:"noreferrer",children:"Peloton Studios"})," ","class reservations. Filter by status (free, waitlist, full), instructor, or discipline — things the official site doesn't support. Classes are fetched directly from Peloton each time you load the page."]})})]}),v.jsxs(fc,{children:[v.jsx(hc,{children:v.jsx(pc,{children:"How do I view classes?"})}),v.jsx(mc,{children:v.jsxs("p",{children:["Open the ",v.jsx(ms,{to:rt.CLASS_LIST,children:"Class List"})," and use the sidebar to set filters or switch between studio locations."]})})]}),v.jsxs(fc,{children:[v.jsx(hc,{children:v.jsx(pc,{children:"Is the class data live?"})}),v.jsx(mc,{children:v.jsx("p",{children:"Yes — data is fetched fresh from Peloton each time you load the page or switch studio. Filters persist across refreshes, unlike the official site."})})]}),v.jsxs(fc,{children:[v.jsx(hc,{children:v.jsx(pc,{children:"When do new classes become available?"})}),v.jsx(mc,{children:v.jsx("p",{children:"New classes typically open at 12:00 pm on Mondays and Thursdays in your studio's local timezone."})})]}),v.jsxs(fc,{children:[v.jsx(hc,{children:v.jsx(pc,{children:"Can I request a feature or report a bug?"})}),v.jsx(mc,{children:v.jsxs("p",{children:["Yes — this project is open source and lives on"," ",v.jsx("a",{href:"https://github.com/Abbondanzo/peloton-reservations",target:"_blank",rel:"noreferrer",children:"GitHub"}),". Open an issue to request a feature, report a bug, or just share feedback. Pull requests are welcome too."]})})]})]})}),bs=on`
  border-color: ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  border-style: solid;
  border-width: 1px;
`,UI=on`
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;on`
  &:focus {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;const Q_=C.createContext({state:"idle"}),yB=e=>{if(!e||typeof e!="object")return!1;const t=e;return typeof t.snapshotAt=="number"&&typeof t.starts_at=="string"&&Array.isArray(t.instructors)&&typeof t.disciplineId=="string"&&typeof t.occupancy=="number"&&typeof t.maxOccupancy=="number"&&typeof t.waitingCount=="number"&&typeof t.status=="string"},vB=e=>{const[t,n]=C.useState({state:"loading"});return C.useEffect(()=>{if(!e){n({state:"fulfilled",data:[]});return}n({state:"loading"});const i=wn;if(!i){n({state:"failed",error:new Error("No database connection")});return}const a=tr(i,ke.PATHS.classHistory(e)),l=Zh(a,u=>{const f=u.val();if(!f){n({state:"fulfilled",data:[]});return}const h=[];for(const[p,g]of Object.entries(f))if(!(!g||typeof g!="object"))for(const y of Object.values(g))yB(y)&&h.push({...y,classId:p});h.sort((p,g)=>p.snapshotAt-g.snapshotAt),n({state:"fulfilled",data:h})},u=>{n({state:"failed",error:u})});return()=>l()},[e]),t},Vo=(e,t,n)=>{const i=new Date(e),a=new Intl.DateTimeFormat(void 0,{month:n?"long":"short",timeZone:t}).format(i),l=new Intl.DateTimeFormat(void 0,{day:"numeric",timeZone:t}).format(i);return n?`${new Intl.DateTimeFormat(void 0,{weekday:"long",timeZone:t}).format(i)}, ${a} ${l}`:`${a} ${l}`},_B=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],bB=(e,t)=>{const n=new Map;for(const i of e){const a=new Date(i.snapshotAt),l=Vo(a.toISOString(),t,!0);if(!n.has(l)){const u=new Intl.DateTimeFormat("en-US",{weekday:"long",timeZone:t}).format(a);n.set(l,{dayIndex:_B.indexOf(u),snapshots:[]})}n.get(l).snapshots.push(i)}return Array.from(n.entries()).map(([i,{dayIndex:a,snapshots:l}])=>({label:i,dayIndex:a,snapshots:l}))},Ea=(e,t)=>new Intl.DateTimeFormat(void 0,{hour:"numeric",minute:"numeric",timeZone:t}).format(new Date(e)),SB=I.div`
  border: 1px solid #a5d6a7;
  border-left: 4px solid #43a047;
  border-radius: ${e=>e.theme.borderRadius};
  background-color: #f1f8f1;
  padding: 12px 14px;
`,wB=I.div`
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #2e7d32;
  margin-bottom: 6px;
`,EB=I.div`
  font-size: 13px;
  color: ${e=>e.theme.colors.main};
  font-weight: 500;
`,xB=I.div`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
  margin-top: 2px;
`,TB=I.div`
  font-size: 11px;
  color: ${e=>e.theme.colors.secondary};
  opacity: 0.6;
  margin-top: 2px;
`,CB=({snapshot:e,timezone:t})=>{const n=Vo(e.starts_at,t,!1),i=Ea(e.starts_at,t),a=Ea(new Date(e.snapshotAt).toISOString(),t),l=e.instructors[0]?.name??"Unknown instructor",u=e.maxOccupancy-e.occupancy;return v.jsxs(SB,{children:[v.jsx(wB,{children:"● Would have triggered"}),v.jsxs(EB,{children:[n," ",i,e.name?` · ${e.name}`:""," · ",l]}),v.jsx(xB,{children:e.status==="free"?`Free · ${u} spot${u===1?"":"s"} available`:e.status==="waitlist"?`Waitlist · ${e.waitingCount} waiting`:"Full"}),v.jsxs(TB,{children:["detected at ",a]})]})},RB=I.div`
  border: 1px solid #ffe0b2;
  border-left: 4px solid #fb8c00;
  border-radius: ${e=>e.theme.borderRadius};
  background-color: #fffbf5;
  padding: 12px 14px;
`,AB=I.div`
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #e65100;
  margin-bottom: 6px;
`,IB=I.div`
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
`,DB=I.div`
  font-size: 11px;
  color: ${e=>e.theme.colors.secondary};
  opacity: 0.6;
  margin-top: 2px;
`,OB={instructor:"wrong instructor",time:"outside your time range",discipline:"wrong discipline",status:"class not bookable"},NB=({snapshot:e,reason:t,timezone:n})=>{const i=Vo(e.starts_at,n,!1),a=Ea(e.starts_at,n),l=Ea(new Date(e.snapshotAt).toISOString(),n),u=e.instructors[0]?.name??"Unknown instructor";return v.jsxs(RB,{children:[v.jsxs(AB,{children:["◌ Near miss — ",OB[t]]}),v.jsxs(IB,{children:[i," ",a,e.name?` · ${e.name}`:""," · ",u]}),v.jsxs(DB,{children:["detected at ",l]})]})},MB=I.button`
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
`,kB=I.ul`
  margin: 6px 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,LB=I.li`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
  padding: 4px 8px;
  background-color: ${e=>e.theme.colors.secondarySurface};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 1px;
`,PB=I.span`
  font-size: 11px;
  opacity: 0.6;
`,jB=({snapshots:e,timezone:t})=>{const[n,i]=C.useState(!1),a=e.length;return v.jsxs("div",{children:[v.jsxs(MB,{type:"button",onClick:()=>i(l=>!l),children:[v.jsx("span",{children:n?"▾":"▸"}),a," class",a===1?"":"es"," skipped"]}),n&&v.jsx(kB,{children:e.map((l,u)=>{const f=Vo(l.starts_at,t,!1),h=Ea(l.starts_at,t),p=Ea(new Date(l.snapshotAt).toISOString(),t);return v.jsxs(LB,{children:[v.jsxs("span",{children:[f," ",h,l.name?` · ${l.name}`:"",l.instructors[0]?` · ${l.instructors[0].name}`:""]}),v.jsxs(PB,{children:["detected at ",p]})]},u)})})]})},UB=I.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,$B=I.h3`
  position: sticky;
  top: calc(${j_}px + env(safe-area-inset-top, 0px));
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
`,zB=I.span`
  font-size: 11px;
  font-weight: 400;
  color: ${e=>e.theme.colors.secondary};
  opacity: 0.6;
`,BB=({label:e,dayIndex:t,snapshots:n,alert:i,timezone:a})=>{const l=!!i.timeRanges[t],u=[],f=[],h=[];for(const p of n){const g=ke.classifySnapshotMatch(p,i);g.type==="match"?u.push(p):g.type==="near-miss"?f.push({snapshot:p,reason:g.reason}):h.push(p)}return v.jsxs(UB,{children:[v.jsxs($B,{children:[e,!l&&v.jsx(zB,{children:"not monitored"})]}),u.map((p,g)=>v.jsx(CB,{snapshot:p,timezone:a},g)),f.map(({snapshot:p,reason:g},y)=>v.jsx(NB,{snapshot:p,reason:g,timezone:a},y)),h.length>0&&v.jsx(jB,{snapshots:h,timezone:a})]})},HB=I.div`
  display: flex;
  gap: 16px;
  padding: 12px 0;
  border-bottom: 1px solid ${e=>e.theme.borderColor};
  flex-wrap: wrap;
`,Ox=I.span`
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
`,Nx=I.strong`
  color: ${e=>e.$color??e.theme.colors.main};
`,FB=({matchCount:e,nearMissCount:t})=>v.jsxs(HB,{children:[v.jsxs(Ox,{children:[v.jsx(Nx,{$color:"#2e7d32",children:e})," ",e===1?"class":"classes"," would have triggered"]}),v.jsxs(Ox,{children:[v.jsx(Nx,{$color:"#e65100",children:t})," near"," ",t===1?"miss":"misses"]})]}),qB=I.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  ${bs}
  border-radius: ${e=>e.theme.borderRadius};
  overflow: hidden;
  background-color: ${e=>e.theme.colors.mainSurface};
`,VB=I.div`
  padding: 20px 24px;
  border-bottom: 1px solid ${e=>e.theme.borderColor};

  ${Te`
    padding: 16px;
  `}
`,GB=I.button`
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
`,YB=I.h1`
  margin: 0 0 4px;
  font-size: 18px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
`,WB=I.p`
  margin: 0;
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
`,QB=I.div`
  padding: 16px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${Te`
    padding: 12px 16px 16px;
  `}
`,nf=I.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
  padding: 32px 0;
`,KB=()=>{const{alertId:e}=ck(),t=Ta(),n=C.useContext(Q_),i=C.useMemo(()=>n.state!=="fulfilled"?null:n.data.find(y=>y.id===e)??null,[n,e]),a=vB(i?.studioId??null),l=i?ke.STUDIOS[i.studioId]?.timezone??"UTC":"UTC",u=C.useMemo(()=>!i||a.state!=="fulfilled"?[]:bB(a.data,l),[i,a,l]),{matchCount:f,nearMissCount:h}=C.useMemo(()=>{if(!i||a.state!=="fulfilled")return{matchCount:0,nearMissCount:0};let y=0,_=0;for(const b of a.data){const w=ke.classifySnapshotMatch(b,i);w.type==="match"?y++:w.type==="near-miss"&&_++}return{matchCount:y,nearMissCount:_}},[i,a]),p=n.state==="loading"||n.state==="idle"||a.state==="loading",g=i?.name??"Alert";return v.jsxs(qB,{children:[v.jsxs(VB,{children:[v.jsx(GB,{type:"button",onClick:()=>t(-1),children:"← Alerts"}),v.jsxs(YB,{children:[g," — Past 7 Days"]}),v.jsx(WB,{children:i?`${ke.STUDIOS[i.studioId]?.location??i.studioId}`:""})]}),v.jsxs(QB,{children:[p&&v.jsx(nf,{children:"Loading…"}),!p&&!i&&v.jsx(nf,{children:"Alert not found."}),!p&&i&&a.state==="fulfilled"&&v.jsxs(v.Fragment,{children:[v.jsx(FB,{matchCount:f,nearMissCount:h}),u.length===0&&v.jsx(nf,{children:"No class history yet. History builds up as the backend detects class changes."}),u.map(({label:y,dayIndex:_,snapshots:b})=>v.jsx(BB,{label:y,dayIndex:_,snapshots:b,alert:i,timezone:l},y))]}),!p&&a.state==="failed"&&v.jsx(nf,{children:"Failed to load class history."})]})]})},XB=e=>{try{return window.localStorage.getItem(e)}catch(t){return Or(t),null}},ZB="STUDIO_ID",$I=e=>{const t=XB(ZB);return t===null?e:Object.keys(ke.STUDIOS).includes(t)?t:e},Ia=bi([e=>e.studioSelector],e=>e.studioId),JB={studioId:$I(ke.DEFAULT_STUDIO_ID)},av=Ar({name:"studioSelector",initialState:JB,reducers:{setStudioId(e,t){e.studioId=t.payload}}}),{setStudioId:Rf}=av.actions,rs=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],hh=new Array(48).fill(null).map((e,t)=>{const n=t*30,i=new Date;i.setHours(Math.floor(n/60)),i.setMinutes(n%60);const a=new Intl.DateTimeFormat(void 0,{hour:"numeric",minute:"numeric"});return{minutes:n,label:a.format(i)}}),eH=async(e,t)=>{const n=wn;if(!n)throw new Error("No Firebase database connection to use");const i=(await QU(tr(n,ke.PATHS.alerts(e)),t)).key;if(!i)throw new Error("Missing ID from insertion operation");return{...t,id:i}},tH=async(e,t)=>{const n=wn;if(!n)throw new Error("No Firebase database connection to use");await ZA(tr(n,ke.PATHS.alert(e,t.id)),t)},nH=I.div`
  display: flex;
  flex-direction: column;
`,rH=I.label`
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,iH=I.input`
  ${bs}
  padding: 12px 8px;
  font-family: inherit;
`,sH=I.span`
  margin-top: 4px;
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,aH=({label:e,hint:t,placeholder:n,value:i,onChange:a})=>{const l=C.useId();return v.jsxs(nH,{children:[v.jsx(rH,{htmlFor:l,children:e}),v.jsx(iH,{id:l,placeholder:n,value:i,"aria-describedby":t?`${l}-hint`:void 0,onChange:({target:u})=>a(u.value)}),t&&v.jsx(sH,{id:`${l}-hint`,children:t})]})},oH=I.label`
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
`,lH=I.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,cH=I.span`
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
`,uH=I.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,dH=I.input`
  accent-color: ${e=>e.theme.colors.accent};
`,Mx=({name:e,value:t,checked:n,onChange:i,label:a,hint:l,icon:u})=>{const f=C.useId();return v.jsxs(oH,{htmlFor:f,children:[v.jsx(dH,{type:"radio",id:f,name:e,value:t,checked:n,onChange:i}),u,v.jsxs(lH,{children:[v.jsx(cH,{children:a}),l&&v.jsx(uH,{children:l})]})]})},kx=I.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`,Lx=I.legend`
  font-weight: 600;
  font-size: 18px;
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,Px=I.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  margin: 0 0 16px;
`,jx=I.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Ux=I.div`
  margin-top: 32px;

  ${Te`
    margin-top: 24px;
  `}
`,fH=Object.entries(ke.STUDIOS).map(([e,t])=>({id:e,label:t.location})),hH=[{status:"free",label:"Open spots only",hint:"Alert me when a class has available spots"},{status:"waitlist",label:"Open spots or waitlist",hint:"Alert me even if I'd join the waitlist"}],pH=({name:e,onNameChange:t,studioId:n,onStudioChange:i,maxStatus:a,onStatusChange:l})=>v.jsxs("div",{children:[v.jsx(aH,{label:"Alert name (optional)",hint:"Leave blank to auto-generate a name from your filters",placeholder:"e.g. Morning Cycling with Cody",value:e,onChange:t}),v.jsx(Ux,{}),v.jsxs(kx,{children:[v.jsx(Lx,{children:"Which studio?"}),v.jsx(Px,{children:"Pick the Peloton studio you want to monitor."}),v.jsx(jx,{children:fH.map(u=>v.jsx(Mx,{name:"studio",value:u.id,checked:n===u.id,onChange:()=>i(u.id),label:u.label},u.id))})]}),v.jsx(Ux,{}),v.jsxs(kx,{children:[v.jsx(Lx,{children:"When should we alert you?"}),v.jsx(Px,{children:"Choose whether to include waitlisted classes."}),v.jsx(jx,{children:hH.map(u=>v.jsx(Mx,{name:"status",value:u.status,checked:a===u.status,onChange:()=>l(u.status),label:u.label,hint:u.hint},u.status))})]})]}),$x={Cardio:"#d8ec43",Cycling:"#bbd4f4",Meditation:"#e6d4ff",Rowing:"#cbf293","Outdoor Run":"#a8e6cf","Outdoor Run/Walk":"#94f3d0",Running:"#fde987",Strength:"#ffc0d5",Tread:"#fdbe9f",Walking:"#ffa8a9",Yoga:"#ceffdc"},zI=.2,ph=e=>Math.round(e*(1-zI*2)),mH=e=>Math.round(e*zI),gH=I.div`
  width: ${e=>ph(e.size)}px;
  height: ${e=>ph(e.size)}px;
  border-radius: ${e=>e.size}px;
  background-color: ${e=>e.color};
  padding: ${e=>mH(e.size)}px;
  flex-shrink: 0;
`,yH=I.img`
  width: ${e=>ph(e.size)}px;
  height: ${e=>ph(e.size)}px;
  display: block;
`,mh=({discipline:e,size:t=32})=>{const n=C.useMemo(()=>{const i=Object.keys($x),a=e.name.toLowerCase(),l=i.find(u=>u.toLowerCase()===a)??i.find(u=>{const f=u.toLowerCase();return f.includes(a)||a.includes(f)});if(l)return $x[l];{const u=`Received unsupported discipline ${e.name}`;return console.log(u),Lv(u),"#fafafa"}},[e.name]);return v.jsx(gH,{color:n,size:t,children:v.jsx(yH,{alt:e.name,src:e.iconUrl,size:t,color:n})})},vH=I.img`
  width: ${e=>e.size}px;
  min-width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  color: #bbb;
`,K_=({instructor:e,size:t=32})=>v.jsx(vH,{src:e.imageUrl,alt:`Profile of ${e.name}`,size:t});var _H=class extends Error{issues;constructor(e){super(e[0].message),this.name="SchemaError",this.issues=e}},BI=(e=>(e.uninitialized="uninitialized",e.pending="pending",e.fulfilled="fulfilled",e.rejected="rejected",e))(BI||{});function zx(e){return{status:e,isUninitialized:e==="uninitialized",isLoading:e==="pending",isSuccess:e==="fulfilled",isError:e==="rejected"}}var Bx=us;function X_(e,t){if(e===t||!(Bx(e)&&Bx(t)||Array.isArray(e)&&Array.isArray(t)))return t;const n=Object.keys(t),i=Object.keys(e);let a=n.length===i.length;const l=Array.isArray(t)?[]:{};for(const u of n)l[u]=X_(e[u],t[u]),a&&(a=e[u]===l[u]);return a?e:l}function sy(e){let t=0;for(const n in e)t++;return t}var Hx=e=>[].concat(...e);function bH(e){return new RegExp("(^|:)//").test(e)}function SH(){return typeof document>"u"?!0:document.visibilityState!=="hidden"}function gh(e){return e!=null}function wH(){return typeof navigator>"u"||navigator.onLine===void 0?!0:navigator.onLine}var EH=e=>e.replace(/\/$/,""),xH=e=>e.replace(/^\//,"");function TH(e,t){if(!e)return t;if(!t)return e;if(bH(t))return t;const n=e.endsWith("/")||!t.startsWith("?")?"/":"";return e=EH(e),t=xH(t),`${e}${n}${t}`}function CH(e,t,n){return e.has(t)?e.get(t):e.set(t,n).get(t)}function ov(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}var lv=()=>new Map,Fx=(...e)=>fetch(...e),RH=e=>e.status>=200&&e.status<=299,AH=e=>/ion\/(vnd\.api\+)?json/.test(e.get("content-type")||"");function qx(e){if(!us(e))return e;const t={...e};for(const[n,i]of Object.entries(t))i===void 0&&delete t[n];return t}function IH({baseUrl:e,prepareHeaders:t=y=>y,fetchFn:n=Fx,paramsSerializer:i,isJsonContentType:a=AH,jsonContentType:l="application/json",jsonReplacer:u,timeout:f,responseHandler:h,validateStatus:p,...g}={}){return typeof fetch>"u"&&n===Fx&&console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."),async(_,b,w)=>{const{getState:O,extra:R,endpoint:D,forced:k,type:x}=b;let A,{url:M,headers:T=new Headers(g.headers),params:P=void 0,responseHandler:V=h??"json",validateStatus:H=p??RH,timeout:B=f,...z}=typeof _=="string"?{url:_}:_,G,F=b.signal;B&&(G=new AbortController,b.signal.addEventListener("abort",G.abort),F=G.signal);let K={...g,signal:F,...z};T=new Headers(qx(T)),K.headers=await t(T,{getState:O,arg:_,extra:R,endpoint:D,forced:k,type:x,extraOptions:w})||T;const ue=de=>typeof de=="object"&&(us(de)||Array.isArray(de)||typeof de.toJSON=="function");if(!K.headers.has("content-type")&&ue(K.body)&&K.headers.set("content-type",l),ue(K.body)&&a(K.headers)&&(K.body=JSON.stringify(K.body,u)),P){const de=~M.indexOf("?")?"&":"?",me=i?i(P):new URLSearchParams(qx(P));M+=de+me}M=TH(e,M);const U=new Request(M,K);A={request:new Request(M,K)};let ne,oe=!1,N=G&&setTimeout(()=>{oe=!0,G.abort()},B);try{ne=await n(U)}catch(de){return{error:{status:oe?"TIMEOUT_ERROR":"FETCH_ERROR",error:String(de)},meta:A}}finally{N&&clearTimeout(N),G?.signal.removeEventListener("abort",G.abort)}const X=ne.clone();A.response=X;let le,ie="";try{let de;if(await Promise.all([y(ne,V).then(me=>le=me,me=>de=me),X.text().then(me=>ie=me,()=>{})]),de)throw de}catch(de){return{error:{status:"PARSING_ERROR",originalStatus:ne.status,data:ie,error:String(de)},meta:A}}return H(ne,le)?{data:le,meta:A}:{error:{status:ne.status,data:le},meta:A}};async function y(_,b){if(typeof b=="function")return b(_);if(b==="content-type"&&(b=a(_.headers)?"json":"text"),b==="json"){const w=await _.text();return w.length?JSON.parse(w):null}return _.text()}}var Vx=class{constructor(e,t=void 0){this.value=e,this.meta=t}},Z_=fr("__rtkq/focused"),HI=fr("__rtkq/unfocused"),J_=fr("__rtkq/online"),FI=fr("__rtkq/offline");function rp(e){return e.type==="query"}function DH(e){return e.type==="mutation"}function ip(e){return e.type==="infinitequery"}function yh(e){return rp(e)||ip(e)}function eb(e,t,n,i,a,l){return OH(e)?e(t,n,i,a).filter(gh).map(cv).map(l):Array.isArray(e)?e.map(cv).map(l):[]}function OH(e){return typeof e=="function"}function cv(e){return typeof e=="string"?{type:e}:e}function NH(e,t){return e.catch(t)}var ou=Symbol("forceQueryFn"),uv=e=>typeof e[ou]=="function";function MH({serializeQueryArgs:e,queryThunk:t,infiniteQueryThunk:n,mutationThunk:i,api:a,context:l,internalState:u}){const{runningQueries:f,runningMutations:h}=u,{unsubscribeQueryResult:p,removeMutationResult:g,updateSubscriptionOptions:y}=a.internalActions;return{buildInitiateQuery:D,buildInitiateInfiniteQuery:k,buildInitiateMutation:x,getRunningQueryThunk:_,getRunningMutationThunk:b,getRunningQueriesThunk:w,getRunningMutationsThunk:O};function _(A,M){return T=>{const P=l.endpointDefinitions[A],V=e({queryArgs:M,endpointDefinition:P,endpointName:A});return f.get(T)?.[V]}}function b(A,M){return T=>h.get(T)?.[M]}function w(){return A=>Object.values(f.get(A)||{}).filter(gh)}function O(){return A=>Object.values(h.get(A)||{}).filter(gh)}function R(A,M){const T=(P,{subscribe:V=!0,forceRefetch:H,subscriptionOptions:B,[ou]:z,...G}={})=>(F,K)=>{const ue=e({queryArgs:P,endpointDefinition:M,endpointName:A});let U;const ee={...G,type:"query",subscribe:V,forceRefetch:H,subscriptionOptions:B,endpointName:A,originalArgs:P,queryCacheKey:ue,[ou]:z};if(rp(M))U=t(ee);else{const{direction:Ae,initialPageParam:be}=G;U=n({...ee,direction:Ae,initialPageParam:be})}const ne=a.endpoints[A].select(P),oe=F(U),N=ne(K()),{requestId:X,abort:le}=oe,ie=N.requestId!==X,de=f.get(F)?.[ue],me=()=>ne(K()),pe=Object.assign(z?oe.then(me):ie&&!de?Promise.resolve(N):Promise.all([de,oe]).then(me),{arg:P,requestId:X,subscriptionOptions:B,queryCacheKey:ue,abort:le,async unwrap(){const Ae=await pe;if(Ae.isError)throw Ae.error;return Ae.data},refetch:()=>F(T(P,{subscribe:!1,forceRefetch:!0})),unsubscribe(){V&&F(p({queryCacheKey:ue,requestId:X}))},updateSubscriptionOptions(Ae){pe.subscriptionOptions=Ae,F(y({endpointName:A,requestId:X,queryCacheKey:ue,options:Ae}))}});if(!de&&!ie&&!z){const Ae=CH(f,F,{});Ae[ue]=pe,pe.then(()=>{delete Ae[ue],sy(Ae)||f.delete(F)})}return pe};return T}function D(A,M){return R(A,M)}function k(A,M){return R(A,M)}function x(A){return(M,{track:T=!0,fixedCacheKey:P}={})=>(V,H)=>{const B=i({type:"mutation",endpointName:A,originalArgs:M,track:T,fixedCacheKey:P}),z=V(B),{requestId:G,abort:F,unwrap:K}=z,ue=NH(z.unwrap().then(oe=>({data:oe})),oe=>({error:oe})),U=()=>{V(g({requestId:G,fixedCacheKey:P}))},ee=Object.assign(ue,{arg:z.arg,requestId:G,abort:F,unwrap:K,reset:U}),ne=h.get(V)||{};return h.set(V,ne),ne[G]=ee,ee.then(()=>{delete ne[G],sy(ne)||h.delete(V)}),P&&(ne[P]=ee,ee.then(()=>{ne[P]===ee&&(delete ne[P],sy(ne)||h.delete(V))})),ee}}}var qI=class extends _H{constructor(e,t,n,i){super(e),this.value=t,this.schemaName=n,this._bqMeta=i}},Ws=(e,t)=>Array.isArray(e)?e.includes(t):!!e;async function Qs(e,t,n,i){const a=await e["~standard"].validate(t);if(a.issues)throw new qI(a.issues,t,n,i);return a.value}function Gx(e){return e}var gc=(e={})=>({...e,[Uh]:!0});function kH({reducerPath:e,baseQuery:t,context:{endpointDefinitions:n},serializeQueryArgs:i,api:a,assertTagType:l,selectors:u,onSchemaFailure:f,catchSchemaFailure:h,skipSchemaValidation:p}){const g=(z,G,F,K)=>(ue,U)=>{const ee=n[z],ne=i({queryArgs:G,endpointDefinition:ee,endpointName:z});if(ue(a.internalActions.queryResultPatched({queryCacheKey:ne,patches:F})),!K)return;const oe=a.endpoints[z].select(G)(U()),N=eb(ee.providesTags,oe.data,void 0,G,{},l);ue(a.internalActions.updateProvidedBy([{queryCacheKey:ne,providedTags:N}]))};function y(z,G,F=0){const K=[G,...z];return F&&K.length>F?K.slice(0,-1):K}function _(z,G,F=0){const K=[...z,G];return F&&K.length>F?K.slice(1):K}const b=(z,G,F,K=!0)=>(ue,U)=>{const ne=a.endpoints[z].select(G)(U()),oe={patches:[],inversePatches:[],undo:()=>ue(a.util.patchQueryData(z,G,oe.inversePatches,K))};if(ne.status==="uninitialized")return oe;let N;if("data"in ne)if(yr(ne.data)){const[X,le,ie]=MR(ne.data,F);oe.patches.push(...le),oe.inversePatches.push(...ie),N=X}else N=F(ne.data),oe.patches.push({op:"replace",path:[],value:N}),oe.inversePatches.push({op:"replace",path:[],value:ne.data});return oe.patches.length===0||ue(a.util.patchQueryData(z,G,oe.patches,K)),oe},w=(z,G,F)=>K=>K(a.endpoints[z].initiate(G,{subscribe:!1,forceRefetch:!0,[ou]:()=>({data:F})})),O=(z,G)=>z.query&&z[G]?z[G]:Gx,R=async(z,{signal:G,abort:F,rejectWithValue:K,fulfillWithValue:ue,dispatch:U,getState:ee,extra:ne})=>{const oe=n[z.endpointName],{metaSchema:N,skipSchemaValidation:X=p}=oe;try{let le=Gx;const ie={signal:G,abort:F,dispatch:U,getState:ee,extra:ne,endpoint:z.endpointName,type:z.type,forced:z.type==="query"?D(z,ee()):void 0,queryCacheKey:z.type==="query"?z.queryCacheKey:void 0},de=z.type==="query"?z[ou]:void 0;let me;const pe=async(be,De,$e,_t)=>{if(De==null&&be.pages.length)return Promise.resolve({data:be});const gt={queryArg:z.originalArgs,pageParam:De},kn=await Ae(gt),Et=_t?y:_;return{data:{pages:Et(be.pages,kn.data,$e),pageParams:Et(be.pageParams,De,$e)},meta:kn.meta}};async function Ae(be){let De;const{extraOptions:$e,argSchema:_t,rawResponseSchema:gt,responseSchema:kn}=oe;if(_t&&!Ws(X,"arg")&&(be=await Qs(_t,be,"argSchema",{})),de?De=de():oe.query?(le=O(oe,"transformResponse"),De=await t(oe.query(be),ie,$e)):De=await oe.queryFn(be,ie,$e,Lr=>t(Lr,ie,$e)),typeof process<"u",De.error)throw new Vx(De.error,De.meta);let{data:Et}=De;gt&&!Ws(X,"rawResponse")&&(Et=await Qs(gt,De.data,"rawResponseSchema",De.meta));let Ln=await le(Et,De.meta,be);return kn&&!Ws(X,"response")&&(Ln=await Qs(kn,Ln,"responseSchema",De.meta)),{...De,data:Ln}}if(z.type==="query"&&"infiniteQueryOptions"in oe){const{infiniteQueryOptions:be}=oe,{maxPages:De=1/0}=be;let $e;const _t={pages:[],pageParams:[]},gt=u.selectQueryEntry(ee(),z.queryCacheKey)?.data,Et=D(z,ee())&&!z.direction||!gt?_t:gt;if("direction"in z&&z.direction&&Et.pages.length){const Ln=z.direction==="backward",Yt=(Ln?VI:dv)(be,Et,z.originalArgs);$e=await pe(Et,Yt,De,Ln)}else{const{initialPageParam:Ln=be.initialPageParam}=z,Lr=gt?.pageParams??[],Yt=Lr[0]??Ln,sl=Lr.length;$e=await pe(Et,Yt,De),de&&($e={data:$e.data.pages[0]});for(let Ss=1;Ss<sl;Ss++){const Da=dv(be,$e.data,z.originalArgs);$e=await pe($e.data,Da,De)}}me=$e}else me=await Ae(z.originalArgs);return N&&!Ws(X,"meta")&&me.meta&&(me.meta=await Qs(N,me.meta,"metaSchema",me.meta)),ue(me.data,gc({fulfilledTimeStamp:Date.now(),baseQueryMeta:me.meta}))}catch(le){let ie=le;if(ie instanceof Vx){let de=O(oe,"transformErrorResponse");const{rawErrorResponseSchema:me,errorResponseSchema:pe}=oe;let{value:Ae,meta:be}=ie;try{me&&!Ws(X,"rawErrorResponse")&&(Ae=await Qs(me,Ae,"rawErrorResponseSchema",be)),N&&!Ws(X,"meta")&&(be=await Qs(N,be,"metaSchema",be));let De=await de(Ae,be,z.originalArgs);return pe&&!Ws(X,"errorResponse")&&(De=await Qs(pe,De,"errorResponseSchema",be)),K(De,gc({baseQueryMeta:be}))}catch(De){ie=De}}try{if(ie instanceof qI){const de={endpoint:z.endpointName,arg:z.originalArgs,type:z.type,queryCacheKey:z.type==="query"?z.queryCacheKey:void 0};oe.onSchemaFailure?.(ie,de),f?.(ie,de);const{catchSchemaFailure:me=h}=oe;if(me)return K(me(ie,de),gc({baseQueryMeta:ie._bqMeta}))}}catch(de){ie=de}throw console.error(ie),ie}};function D(z,G){const F=u.selectQueryEntry(G,z.queryCacheKey),K=u.selectConfig(G).refetchOnMountOrArgChange,ue=F?.fulfilledTimeStamp,U=z.forceRefetch??(z.subscribe&&K);return U?U===!0||(Number(new Date)-Number(ue))/1e3>=U:!1}const k=()=>vE(`${e}/executeQuery`,R,{getPendingMeta({arg:G}){const F=n[G.endpointName];return gc({startedTimeStamp:Date.now(),...ip(F)?{direction:G.direction}:{}})},condition(G,{getState:F}){const K=F(),ue=u.selectQueryEntry(K,G.queryCacheKey),U=ue?.fulfilledTimeStamp,ee=G.originalArgs,ne=ue?.originalArgs,oe=n[G.endpointName],N=G.direction;return uv(G)?!0:ue?.status==="pending"?!1:D(G,K)||rp(oe)&&oe?.forceRefetch?.({currentArg:ee,previousArg:ne,endpointState:ue,state:K})?!0:!(U&&!N)},dispatchConditionRejection:!0}),x=k(),A=k(),M=vE(`${e}/executeMutation`,R,{getPendingMeta(){return gc({startedTimeStamp:Date.now()})}}),T=z=>"force"in z,P=z=>"ifOlderThan"in z,V=(z,G,F)=>(K,ue)=>{const U=T(F)&&F.force,ee=P(F)&&F.ifOlderThan,ne=(N=!0)=>{const X={forceRefetch:N,isPrefetch:!0};return a.endpoints[z].initiate(G,X)},oe=a.endpoints[z].select(G)(ue());if(U)K(ne());else if(ee){const N=oe?.fulfilledTimeStamp;if(!N){K(ne());return}(Number(new Date)-Number(new Date(N)))/1e3>=ee&&K(ne())}else K(ne(!1))};function H(z){return G=>G?.meta?.arg?.endpointName===z}function B(z,G){return{matchPending:Dc(Zv(z),H(G)),matchFulfilled:Dc(ds(z),H(G)),matchRejected:Dc($o(z),H(G))}}return{queryThunk:x,mutationThunk:M,infiniteQueryThunk:A,prefetch:V,updateQueryData:b,upsertQueryData:w,patchQueryData:g,buildMatchThunkActions:B}}function dv(e,{pages:t,pageParams:n},i){const a=t.length-1;return e.getNextPageParam(t[a],t,n[a],n,i)}function VI(e,{pages:t,pageParams:n},i){return e.getPreviousPageParam?.(t[0],t,n[0],n,i)}function GI(e,t,n,i){return eb(n[e.meta.arg.endpointName][t],ds(e)?e.payload:void 0,zh(e)?e.payload:void 0,e.meta.arg.originalArgs,"baseQueryMeta"in e.meta?e.meta.baseQueryMeta:void 0,i)}function rf(e,t,n){const i=e[t];i&&n(i)}function lu(e){return("arg"in e?e.arg.fixedCacheKey:e.fixedCacheKey)??e.requestId}function Yx(e,t,n){const i=e[lu(t)];i&&n(i)}var sf={};function LH({reducerPath:e,queryThunk:t,mutationThunk:n,serializeQueryArgs:i,context:{endpointDefinitions:a,apiUid:l,extractRehydrationInfo:u,hasRehydrationInfo:f},assertTagType:h,config:p}){const g=fr(`${e}/resetApiState`);function y(H,B,z,G){H[B.queryCacheKey]??={status:"uninitialized",endpointName:B.endpointName},rf(H,B.queryCacheKey,F=>{F.status="pending",F.requestId=z&&F.requestId?F.requestId:G.requestId,B.originalArgs!==void 0&&(F.originalArgs=B.originalArgs),F.startedTimeStamp=G.startedTimeStamp;const K=a[G.arg.endpointName];ip(K)&&"direction"in B&&(F.direction=B.direction)})}function _(H,B,z,G){rf(H,B.arg.queryCacheKey,F=>{if(F.requestId!==B.requestId&&!G)return;const{merge:K}=a[B.arg.endpointName];if(F.status="fulfilled",K)if(F.data!==void 0){const{fulfilledTimeStamp:ue,arg:U,baseQueryMeta:ee,requestId:ne}=B;let oe=hu(F.data,N=>K(N,z,{arg:U.originalArgs,baseQueryMeta:ee,fulfilledTimeStamp:ue,requestId:ne}));F.data=oe}else F.data=z;else F.data=a[B.arg.endpointName].structuralSharing??!0?X_(Mr(F.data)?rj(F.data):F.data,z):z;delete F.error,F.fulfilledTimeStamp=B.fulfilledTimeStamp})}const b=Ar({name:`${e}/queries`,initialState:sf,reducers:{removeQueryResult:{reducer(H,{payload:{queryCacheKey:B}}){delete H[B]},prepare:ac()},cacheEntriesUpserted:{reducer(H,B){for(const z of B.payload){const{queryDescription:G,value:F}=z;y(H,G,!0,{arg:G,requestId:B.meta.requestId,startedTimeStamp:B.meta.timestamp}),_(H,{arg:G,requestId:B.meta.requestId,fulfilledTimeStamp:B.meta.timestamp,baseQueryMeta:{}},F,!0)}},prepare:H=>({payload:H.map(G=>{const{endpointName:F,arg:K,value:ue}=G,U=a[F];return{queryDescription:{type:"query",endpointName:F,originalArgs:G.arg,queryCacheKey:i({queryArgs:K,endpointDefinition:U,endpointName:F})},value:ue}}),meta:{[Uh]:!0,requestId:Jv(),timestamp:Date.now()}})},queryResultPatched:{reducer(H,{payload:{queryCacheKey:B,patches:z}}){rf(H,B,G=>{G.data=dE(G.data,z.concat())})},prepare:ac()}},extraReducers(H){H.addCase(t.pending,(B,{meta:z,meta:{arg:G}})=>{const F=uv(G);y(B,G,F,z)}).addCase(t.fulfilled,(B,{meta:z,payload:G})=>{const F=uv(z.arg);_(B,z,G,F)}).addCase(t.rejected,(B,{meta:{condition:z,arg:G,requestId:F},error:K,payload:ue})=>{rf(B,G.queryCacheKey,U=>{if(!z){if(U.requestId!==F)return;U.status="rejected",U.error=ue??K}})}).addMatcher(f,(B,z)=>{const{queries:G}=u(z);for(const[F,K]of Object.entries(G))(K?.status==="fulfilled"||K?.status==="rejected")&&(B[F]=K)})}}),w=Ar({name:`${e}/mutations`,initialState:sf,reducers:{removeMutationResult:{reducer(H,{payload:B}){const z=lu(B);z in H&&delete H[z]},prepare:ac()}},extraReducers(H){H.addCase(n.pending,(B,{meta:z,meta:{requestId:G,arg:F,startedTimeStamp:K}})=>{F.track&&(B[lu(z)]={requestId:G,status:"pending",endpointName:F.endpointName,startedTimeStamp:K})}).addCase(n.fulfilled,(B,{payload:z,meta:G})=>{G.arg.track&&Yx(B,G,F=>{F.requestId===G.requestId&&(F.status="fulfilled",F.data=z,F.fulfilledTimeStamp=G.fulfilledTimeStamp)})}).addCase(n.rejected,(B,{payload:z,error:G,meta:F})=>{F.arg.track&&Yx(B,F,K=>{K.requestId===F.requestId&&(K.status="rejected",K.error=z??G)})}).addMatcher(f,(B,z)=>{const{mutations:G}=u(z);for(const[F,K]of Object.entries(G))(K?.status==="fulfilled"||K?.status==="rejected")&&F!==K?.requestId&&(B[F]=K)})}}),O={tags:{},keys:{}},R=Ar({name:`${e}/invalidation`,initialState:O,reducers:{updateProvidedBy:{reducer(H,B){for(const{queryCacheKey:z,providedTags:G}of B.payload){D(H,z);for(const{type:F,id:K}of G){const ue=(H.tags[F]??={})[K||"__internal_without_id"]??=[];ue.includes(z)||ue.push(z)}H.keys[z]=G}},prepare:ac()}},extraReducers(H){H.addCase(b.actions.removeQueryResult,(B,{payload:{queryCacheKey:z}})=>{D(B,z)}).addMatcher(f,(B,z)=>{const{provided:G}=u(z);for(const[F,K]of Object.entries(G.tags??{}))for(const[ue,U]of Object.entries(K)){const ee=(B.tags[F]??={})[ue||"__internal_without_id"]??=[];for(const ne of U)ee.includes(ne)||ee.push(ne),B.keys[ne]=G.keys[ne]}}).addMatcher(pi(ds(t),zh(t)),(B,z)=>{k(B,[z])}).addMatcher(b.actions.cacheEntriesUpserted.match,(B,z)=>{const G=z.payload.map(({queryDescription:F,value:K})=>({type:"UNKNOWN",payload:K,meta:{requestStatus:"fulfilled",requestId:"UNKNOWN",arg:F}}));k(B,G)})}});function D(H,B){const z=H.keys[B]??[];for(const G of z){const F=G.type,K=G.id??"__internal_without_id",ue=H.tags[F]?.[K];ue&&(H.tags[F][K]=ue.filter(U=>U!==B))}delete H.keys[B]}function k(H,B){const z=B.map(G=>{const F=GI(G,"providesTags",a,h),{queryCacheKey:K}=G.meta.arg;return{queryCacheKey:K,providedTags:F}});R.caseReducers.updateProvidedBy(H,R.actions.updateProvidedBy(z))}const x=Ar({name:`${e}/subscriptions`,initialState:sf,reducers:{updateSubscriptionOptions(H,B){},unsubscribeQueryResult(H,B){},internal_getRTKQSubscriptions(){}}}),A=Ar({name:`${e}/internalSubscriptions`,initialState:sf,reducers:{subscriptionsUpdated:{reducer(H,B){return dE(H,B.payload)},prepare:ac()}}}),M=Ar({name:`${e}/config`,initialState:{online:wH(),focused:SH(),middlewareRegistered:!1,...p},reducers:{middlewareRegistered(H,{payload:B}){H.middlewareRegistered=H.middlewareRegistered==="conflict"||l!==B?"conflict":!0}},extraReducers:H=>{H.addCase(J_,B=>{B.online=!0}).addCase(FI,B=>{B.online=!1}).addCase(Z_,B=>{B.focused=!0}).addCase(HI,B=>{B.focused=!1}).addMatcher(f,B=>({...B}))}}),T=CR({queries:b.reducer,mutations:w.reducer,provided:R.reducer,subscriptions:A.reducer,config:M.reducer}),P=(H,B)=>T(g.match(B)?void 0:H,B),V={...M.actions,...b.actions,...x.actions,...A.actions,...w.actions,...R.actions,resetApiState:g};return{reducer:P,actions:V}}var or=Symbol.for("RTKQ/skipToken"),YI={status:"uninitialized"},Wx=hu(YI,()=>{}),Qx=hu(YI,()=>{});function PH({serializeQueryArgs:e,reducerPath:t,createSelector:n}){const i=x=>Wx,a=x=>Qx;return{buildQuerySelector:_,buildInfiniteQuerySelector:b,buildMutationSelector:w,selectInvalidatedBy:O,selectCachedArgsForQuery:R,selectApiState:u,selectQueries:f,selectMutations:p,selectQueryEntry:h,selectConfig:g};function l(x){return{...x,...zx(x.status)}}function u(x){return x[t]}function f(x){return u(x)?.queries}function h(x,A){return f(x)?.[A]}function p(x){return u(x)?.mutations}function g(x){return u(x)?.config}function y(x,A,M){return T=>{if(T===or)return n(i,M);const P=e({queryArgs:T,endpointDefinition:A,endpointName:x});return n(H=>h(H,P)??Wx,M)}}function _(x,A){return y(x,A,l)}function b(x,A){const{infiniteQueryOptions:M}=A;function T(P){const V={...P,...zx(P.status)},{isLoading:H,isError:B,direction:z}=V,G=z==="forward",F=z==="backward";return{...V,hasNextPage:D(M,V.data,V.originalArgs),hasPreviousPage:k(M,V.data,V.originalArgs),isFetchingNextPage:H&&G,isFetchingPreviousPage:H&&F,isFetchNextPageError:B&&G,isFetchPreviousPageError:B&&F}}return y(x,A,T)}function w(){return x=>{let A;return typeof x=="object"?A=lu(x)??or:A=x,n(A===or?a:P=>u(P)?.mutations?.[A]??Qx,l)}}function O(x,A){const M=x[t],T=new Set;for(const P of A.filter(gh).map(cv)){const V=M.provided.tags[P.type];if(!V)continue;let H=(P.id!==void 0?V[P.id]:Hx(Object.values(V)))??[];for(const B of H)T.add(B)}return Hx(Array.from(T.values()).map(P=>{const V=M.queries[P];return V?[{queryCacheKey:P,endpointName:V.endpointName,originalArgs:V.originalArgs}]:[]}))}function R(x,A){return Object.values(f(x)).filter(M=>M?.endpointName===A&&M.status!=="uninitialized").map(M=>M.originalArgs)}function D(x,A,M){return A?dv(x,A,M)!=null:!1}function k(x,A,M){return!A||!x.getPreviousPageParam?!1:VI(x,A,M)!=null}}var Kx=WeakMap?new WeakMap:void 0,Xx=({endpointName:e,queryArgs:t})=>{let n="";const i=Kx?.get(t);if(typeof i=="string")n=i;else{const a=JSON.stringify(t,(l,u)=>(u=typeof u=="bigint"?{$bigint:u.toString()}:u,u=us(u)?Object.keys(u).sort().reduce((f,h)=>(f[h]=u[h],f),{}):u,u));us(t)&&Kx?.set(t,a),n=a}return`${e}(${n})`};function WI(...e){return function(n){const i=Yf(p=>n.extractRehydrationInfo?.(p,{reducerPath:n.reducerPath??"api"})),a={reducerPath:"api",keepUnusedDataFor:60,refetchOnMountOrArgChange:!1,refetchOnFocus:!1,refetchOnReconnect:!1,invalidationBehavior:"delayed",...n,extractRehydrationInfo:i,serializeQueryArgs(p){let g=Xx;if("serializeQueryArgs"in p.endpointDefinition){const y=p.endpointDefinition.serializeQueryArgs;g=_=>{const b=y(_);return typeof b=="string"?b:Xx({..._,queryArgs:b})}}else n.serializeQueryArgs&&(g=n.serializeQueryArgs);return g(p)},tagTypes:[...n.tagTypes||[]]},l={endpointDefinitions:{},batch(p){p()},apiUid:Jv(),extractRehydrationInfo:i,hasRehydrationInfo:Yf(p=>i(p)!=null)},u={injectEndpoints:h,enhanceEndpoints({addTagTypes:p,endpoints:g}){if(p)for(const y of p)a.tagTypes.includes(y)||a.tagTypes.push(y);if(g)for(const[y,_]of Object.entries(g))typeof _=="function"?_(l.endpointDefinitions[y]):Object.assign(l.endpointDefinitions[y]||{},_);return u}},f=e.map(p=>p.init(u,a,l));function h(p){const g=p.endpoints({query:y=>({...y,type:"query"}),mutation:y=>({...y,type:"mutation"}),infiniteQuery:y=>({...y,type:"infinitequery"})});for(const[y,_]of Object.entries(g)){if(p.overrideExisting!==!0&&y in l.endpointDefinitions){if(p.overrideExisting==="throw")throw new Error(hr(39));continue}l.endpointDefinitions[y]=_;for(const b of f)b.injectEndpoint(y,_)}return u}return u.injectEndpoints({endpoints:n.endpoints})}}function ni(e,...t){return Object.assign(e,...t)}var jH=({api:e,queryThunk:t,internalState:n,mwApi:i})=>{const a=`${e.reducerPath}/subscriptions`;let l=null,u=null;const{updateSubscriptionOptions:f,unsubscribeQueryResult:h}=e.internalActions,p=(O,R)=>{if(f.match(R)){const{queryCacheKey:k,requestId:x,options:A}=R.payload,M=O.get(k);return M?.has(x)&&M.set(x,A),!0}if(h.match(R)){const{queryCacheKey:k,requestId:x}=R.payload,A=O.get(k);return A&&A.delete(x),!0}if(e.internalActions.removeQueryResult.match(R))return O.delete(R.payload.queryCacheKey),!0;if(t.pending.match(R)){const{meta:{arg:k,requestId:x}}=R,A=ov(O,k.queryCacheKey,lv);return k.subscribe&&A.set(x,k.subscriptionOptions??A.get(x)??{}),!0}let D=!1;if(t.rejected.match(R)){const{meta:{condition:k,arg:x,requestId:A}}=R;if(k&&x.subscribe){const M=ov(O,x.queryCacheKey,lv);M.set(A,x.subscriptionOptions??M.get(A)??{}),D=!0}}return D},g=()=>n.currentSubscriptions,b={getSubscriptions:g,getSubscriptionCount:O=>g().get(O)?.size??0,isRequestSubscribed:(O,R)=>!!g()?.get(O)?.get(R)};function w(O){return JSON.parse(JSON.stringify(Object.fromEntries([...O].map(([R,D])=>[R,Object.fromEntries(D)]))))}return(O,R)=>{if(l||(l=w(n.currentSubscriptions)),e.util.resetApiState.match(O))return l={},n.currentSubscriptions.clear(),u=null,[!0,!1];if(e.internalActions.internal_getRTKQSubscriptions.match(O))return[!1,b];const D=p(n.currentSubscriptions,O);let k=!0;if(D){u||(u=setTimeout(()=>{const M=w(n.currentSubscriptions),[,T]=MR(l,()=>M);R.next(e.internalActions.subscriptionsUpdated(T)),l=M,u=null},500));const x=typeof O.type=="string"&&!!O.type.startsWith(a),A=t.rejected.match(O)&&O.meta.condition&&!!O.meta.arg.subscribe;k=!x&&!A}return[k,!1]}},UH=2147483647/1e3-1,$H=({reducerPath:e,api:t,queryThunk:n,context:i,internalState:a,selectors:{selectQueryEntry:l,selectConfig:u},getRunningQueryThunk:f,mwApi:h})=>{const{removeQueryResult:p,unsubscribeQueryResult:g,cacheEntriesUpserted:y}=t.internalActions,_=a.runningQueries.get(h.dispatch),b=pi(g.match,n.fulfilled,n.rejected,y.match);function w(x){const A=a.currentSubscriptions.get(x);if(!A)return!1;const M=A.size>0,T=_?.[x]!==void 0;return M||T}const O={},R=(x,A,M)=>{const T=A.getState(),P=u(T);if(b(x)){let V;if(y.match(x))V=x.payload.map(H=>H.queryDescription.queryCacheKey);else{const{queryCacheKey:H}=g.match(x)?x.payload:x.meta.arg;V=[H]}D(V,A,P)}if(t.util.resetApiState.match(x))for(const[V,H]of Object.entries(O))H&&clearTimeout(H),delete O[V];if(i.hasRehydrationInfo(x)){const{queries:V}=i.extractRehydrationInfo(x);D(Object.keys(V),A,P)}};function D(x,A,M){const T=A.getState();for(const P of x){const V=l(T,P);V?.endpointName&&k(P,V.endpointName,A,M)}}function k(x,A,M,T){const V=i.endpointDefinitions[A]?.keepUnusedDataFor??T.keepUnusedDataFor;if(V===1/0)return;const H=Math.max(0,Math.min(V,UH));if(!w(x)){const B=O[x];B&&clearTimeout(B),O[x]=setTimeout(()=>{if(!w(x)){const z=l(M.getState(),x);z?.endpointName&&M.dispatch(f(z.endpointName,z.originalArgs))?.abort(),M.dispatch(p({queryCacheKey:x}))}delete O[x]},H*1e3)}}return R},Zx=new Error("Promise never resolved before cacheEntryRemoved."),zH=({api:e,reducerPath:t,context:n,queryThunk:i,mutationThunk:a,internalState:l,selectors:{selectQueryEntry:u,selectApiState:f}})=>{const h=Hy(i),p=Hy(a),g=ds(i,a),y={};function _(D,k,x){const A=y[D];A?.valueResolved&&(A.valueResolved({data:k,meta:x}),delete A.valueResolved)}function b(D){const k=y[D];k&&(delete y[D],k.cacheEntryRemoved())}const w=(D,k,x)=>{const A=O(D);function M(T,P,V,H){const B=u(x,P),z=u(k.getState(),P);!B&&z&&R(T,H,P,k,V)}if(i.pending.match(D))M(D.meta.arg.endpointName,A,D.meta.requestId,D.meta.arg.originalArgs);else if(e.internalActions.cacheEntriesUpserted.match(D))for(const{queryDescription:T,value:P}of D.payload){const{endpointName:V,originalArgs:H,queryCacheKey:B}=T;M(V,B,D.meta.requestId,H),_(B,P,{})}else if(a.pending.match(D))k.getState()[t].mutations[A]&&R(D.meta.arg.endpointName,D.meta.arg.originalArgs,A,k,D.meta.requestId);else if(g(D))_(A,D.payload,D.meta.baseQueryMeta);else if(e.internalActions.removeQueryResult.match(D)||e.internalActions.removeMutationResult.match(D))b(A);else if(e.util.resetApiState.match(D))for(const T of Object.keys(y))b(T)};function O(D){return h(D)?D.meta.arg.queryCacheKey:p(D)?D.meta.arg.fixedCacheKey??D.meta.requestId:e.internalActions.removeQueryResult.match(D)?D.payload.queryCacheKey:e.internalActions.removeMutationResult.match(D)?lu(D.payload):""}function R(D,k,x,A,M){const T=n.endpointDefinitions[D],P=T?.onCacheEntryAdded;if(!P)return;const V={},H=new Promise(ue=>{V.cacheEntryRemoved=ue}),B=Promise.race([new Promise(ue=>{V.valueResolved=ue}),H.then(()=>{throw Zx})]);B.catch(()=>{}),y[x]=V;const z=e.endpoints[D].select(yh(T)?k:x),G=A.dispatch((ue,U,ee)=>ee),F={...A,getCacheEntry:()=>z(A.getState()),requestId:M,extra:G,updateCachedData:yh(T)?ue=>A.dispatch(e.util.updateQueryData(D,k,ue)):void 0,cacheDataLoaded:B,cacheEntryRemoved:H},K=P(k,F);Promise.resolve(K).catch(ue=>{if(ue!==Zx)throw ue})}return w},BH=({api:e,context:{apiUid:t},reducerPath:n})=>(i,a)=>{e.util.resetApiState.match(i)&&a.dispatch(e.internalActions.middlewareRegistered(t))},HH=({reducerPath:e,context:t,context:{endpointDefinitions:n},mutationThunk:i,queryThunk:a,api:l,assertTagType:u,refetchQuery:f,internalState:h})=>{const{removeQueryResult:p}=l.internalActions,g=pi(ds(i),zh(i)),y=pi(ds(i,a),$o(i,a));let _=[];const b=(R,D)=>{g(R)?O(GI(R,"invalidatesTags",n,u),D):y(R)?O([],D):l.util.invalidateTags.match(R)&&O(eb(R.payload,void 0,void 0,void 0,void 0,u),D)};function w(R){const{queries:D,mutations:k}=R;for(const x of[D,k])for(const A in x)if(x[A]?.status==="pending")return!0;return!1}function O(R,D){const k=D.getState(),x=k[e];if(_.push(...R),x.config.invalidationBehavior==="delayed"&&w(x))return;const A=_;if(_=[],A.length===0)return;const M=l.util.selectInvalidatedBy(k,A);t.batch(()=>{const T=Array.from(M.values());for(const{queryCacheKey:P}of T){const V=x.queries[P],H=ov(h.currentSubscriptions,P,lv);V&&(H.size===0?D.dispatch(p({queryCacheKey:P})):V.status!=="uninitialized"&&D.dispatch(f(V)))}})}return b},FH=({reducerPath:e,queryThunk:t,api:n,refetchQuery:i,internalState:a})=>{const{currentPolls:l,currentSubscriptions:u}=a,f=new Set;let h=null;const p=(R,D)=>{(n.internalActions.updateSubscriptionOptions.match(R)||n.internalActions.unsubscribeQueryResult.match(R))&&g(R.payload.queryCacheKey,D),(t.pending.match(R)||t.rejected.match(R)&&R.meta.condition)&&g(R.meta.arg.queryCacheKey,D),(t.fulfilled.match(R)||t.rejected.match(R)&&!R.meta.condition)&&y(R.meta.arg,D),n.util.resetApiState.match(R)&&(w(),h&&(clearTimeout(h),h=null),f.clear())};function g(R,D){f.add(R),h||(h=setTimeout(()=>{for(const k of f)_({queryCacheKey:k},D);f.clear(),h=null},0))}function y({queryCacheKey:R},D){const k=D.getState()[e],x=k.queries[R],A=u.get(R);if(!x||x.status==="uninitialized")return;const{lowestPollingInterval:M,skipPollingIfUnfocused:T}=O(A);if(!Number.isFinite(M))return;const P=l.get(R);P?.timeout&&(clearTimeout(P.timeout),P.timeout=void 0);const V=Date.now()+M;l.set(R,{nextPollTimestamp:V,pollingInterval:M,timeout:setTimeout(()=>{(k.config.focused||!T)&&D.dispatch(i(x)),y({queryCacheKey:R},D)},M)})}function _({queryCacheKey:R},D){const x=D.getState()[e].queries[R],A=u.get(R);if(!x||x.status==="uninitialized")return;const{lowestPollingInterval:M}=O(A);if(!Number.isFinite(M)){b(R);return}const T=l.get(R),P=Date.now()+M;(!T||P<T.nextPollTimestamp)&&y({queryCacheKey:R},D)}function b(R){const D=l.get(R);D?.timeout&&clearTimeout(D.timeout),l.delete(R)}function w(){for(const R of l.keys())b(R)}function O(R=new Map){let D=!1,k=Number.POSITIVE_INFINITY;for(const x of R.values())x.pollingInterval&&(k=Math.min(x.pollingInterval,k),D=x.skipPollingIfUnfocused||D);return{lowestPollingInterval:k,skipPollingIfUnfocused:D}}return p},qH=({api:e,context:t,queryThunk:n,mutationThunk:i})=>{const a=Zv(n,i),l=$o(n,i),u=ds(n,i),f={};return(p,g)=>{if(a(p)){const{requestId:y,arg:{endpointName:_,originalArgs:b}}=p.meta,w=t.endpointDefinitions[_],O=w?.onQueryStarted;if(O){const R={},D=new Promise((M,T)=>{R.resolve=M,R.reject=T});D.catch(()=>{}),f[y]=R;const k=e.endpoints[_].select(yh(w)?b:y),x=g.dispatch((M,T,P)=>P),A={...g,getCacheEntry:()=>k(g.getState()),requestId:y,extra:x,updateCachedData:yh(w)?M=>g.dispatch(e.util.updateQueryData(_,b,M)):void 0,queryFulfilled:D};O(b,A)}}else if(u(p)){const{requestId:y,baseQueryMeta:_}=p.meta;f[y]?.resolve({data:p.payload,meta:_}),delete f[y]}else if(l(p)){const{requestId:y,rejectedWithValue:_,baseQueryMeta:b}=p.meta;f[y]?.reject({error:p.payload??p.error,isUnhandledError:!_,meta:b}),delete f[y]}}},VH=({reducerPath:e,context:t,api:n,refetchQuery:i,internalState:a})=>{const{removeQueryResult:l}=n.internalActions,u=(h,p)=>{Z_.match(h)&&f(p,"refetchOnFocus"),J_.match(h)&&f(p,"refetchOnReconnect")};function f(h,p){const g=h.getState()[e],y=g.queries,_=a.currentSubscriptions;t.batch(()=>{for(const b of _.keys()){const w=y[b],O=_.get(b);if(!O||!w)continue;const R=[...O.values()];(R.some(k=>k[p]===!0)||R.every(k=>k[p]===void 0)&&g.config[p])&&(O.size===0?h.dispatch(l({queryCacheKey:b})):w.status!=="uninitialized"&&h.dispatch(i(w)))}})}return u};function GH(e){const{reducerPath:t,queryThunk:n,api:i,context:a,internalState:l}=e,{apiUid:u}=a,f={invalidateTags:fr(`${t}/invalidateTags`)},h=_=>_.type.startsWith(`${t}/`),p=[BH,$H,HH,FH,zH,qH];return{middleware:_=>{let b=!1;const w={...e,internalState:l,refetchQuery:y,isThisApiSliceAction:h,mwApi:_},O=p.map(k=>k(w)),R=jH(w),D=VH(w);return k=>x=>{if(!RR(x))return k(x);b||(b=!0,_.dispatch(i.internalActions.middlewareRegistered(u)));const A={..._,next:k},M=_.getState(),[T,P]=R(x,A,M);let V;if(T?V=k(x):V=P,_.getState()[t]&&(D(x,A,M),h(x)||a.hasRehydrationInfo(x)))for(const H of O)H(x,A,M);return V}},actions:f};function y(_){return e.api.endpoints[_.endpointName].initiate(_.originalArgs,{subscribe:!1,forceRefetch:!0})}}var Jx=Symbol(),QI=({createSelector:e=bi}={})=>({name:Jx,init(t,{baseQuery:n,tagTypes:i,reducerPath:a,serializeQueryArgs:l,keepUnusedDataFor:u,refetchOnMountOrArgChange:f,refetchOnFocus:h,refetchOnReconnect:p,invalidationBehavior:g,onSchemaFailure:y,catchSchemaFailure:_,skipSchemaValidation:b},w){hj();const O=pe=>pe;Object.assign(t,{reducerPath:a,endpoints:{},internalActions:{onOnline:J_,onOffline:FI,onFocus:Z_,onFocusLost:HI},util:{}});const R=PH({serializeQueryArgs:l,reducerPath:a,createSelector:e}),{selectInvalidatedBy:D,selectCachedArgsForQuery:k,buildQuerySelector:x,buildInfiniteQuerySelector:A,buildMutationSelector:M}=R;ni(t.util,{selectInvalidatedBy:D,selectCachedArgsForQuery:k});const{queryThunk:T,infiniteQueryThunk:P,mutationThunk:V,patchQueryData:H,updateQueryData:B,upsertQueryData:z,prefetch:G,buildMatchThunkActions:F}=kH({baseQuery:n,reducerPath:a,context:w,api:t,serializeQueryArgs:l,assertTagType:O,selectors:R,onSchemaFailure:y,catchSchemaFailure:_,skipSchemaValidation:b}),{reducer:K,actions:ue}=LH({context:w,queryThunk:T,mutationThunk:V,serializeQueryArgs:l,reducerPath:a,assertTagType:O,config:{refetchOnFocus:h,refetchOnReconnect:p,refetchOnMountOrArgChange:f,keepUnusedDataFor:u,reducerPath:a,invalidationBehavior:g}});ni(t.util,{patchQueryData:H,updateQueryData:B,upsertQueryData:z,prefetch:G,resetApiState:ue.resetApiState,upsertQueryEntries:ue.cacheEntriesUpserted}),ni(t.internalActions,ue);const U={currentSubscriptions:new Map,currentPolls:new Map,runningQueries:new Map,runningMutations:new Map},{buildInitiateQuery:ee,buildInitiateInfiniteQuery:ne,buildInitiateMutation:oe,getRunningMutationThunk:N,getRunningMutationsThunk:X,getRunningQueriesThunk:le,getRunningQueryThunk:ie}=MH({queryThunk:T,mutationThunk:V,infiniteQueryThunk:P,api:t,serializeQueryArgs:l,context:w,internalState:U});ni(t.util,{getRunningMutationThunk:N,getRunningMutationsThunk:X,getRunningQueryThunk:ie,getRunningQueriesThunk:le});const{middleware:de,actions:me}=GH({reducerPath:a,context:w,queryThunk:T,mutationThunk:V,infiniteQueryThunk:P,api:t,assertTagType:O,selectors:R,getRunningQueryThunk:ie,internalState:U});return ni(t.util,me),ni(t,{reducer:K,middleware:de}),{name:Jx,injectEndpoint(pe,Ae){const be=t,De=be.endpoints[pe]??={};rp(Ae)&&ni(De,{name:pe,select:x(pe,Ae),initiate:ee(pe,Ae)},F(T,pe)),DH(Ae)&&ni(De,{name:pe,select:M(),initiate:oe(pe)},F(V,pe)),ip(Ae)&&ni(De,{name:pe,select:A(pe,Ae),initiate:ne(pe,Ae)},F(T,pe))}}}});QI();function af(e){return e.replace(e[0],e[0].toUpperCase())}function YH(e){return e.type==="query"}function WH(e){return e.type==="mutation"}function KI(e){return e.type==="infinitequery"}function yc(e,...t){return Object.assign(e,...t)}var ay=Symbol();function oy(e){const t=C.useRef(e),n=C.useMemo(()=>X_(t.current,e),[e]);return C.useEffect(()=>{t.current!==n&&(t.current=n)},[n]),n}function of(e){const t=C.useRef(e);return C.useEffect(()=>{Ec(t.current,e)||(t.current=e)},[e]),Ec(t.current,e)?t.current:e}var QH=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",KH=QH(),XH=()=>typeof navigator<"u"&&navigator.product==="ReactNative",ZH=XH(),JH=()=>KH||ZH?C.useLayoutEffect:C.useEffect,e9=JH(),eT=e=>e.isUninitialized?{...e,isUninitialized:!1,isFetching:!0,isLoading:e.data===void 0,status:BI.pending}:e;function ly(e,...t){const n={};return t.forEach(i=>{n[i]=e[i]}),n}var cy=["data","status","isLoading","isSuccess","isError","error"];function t9({api:e,moduleOptions:{batch:t,hooks:{useDispatch:n,useSelector:i,useStore:a},unstable__sideEffectsInRender:l,createSelector:u},serializeQueryArgs:f,context:h}){const p=l?A=>A():C.useEffect;return{buildQueryHooks:D,buildInfiniteQueryHooks:k,buildMutationHook:x,usePrefetch:_};function g(A,M,T){if(M?.endpointName&&A.isUninitialized){const{endpointName:G}=M,F=h.endpointDefinitions[G];T!==or&&f({queryArgs:M.originalArgs,endpointDefinition:F,endpointName:G})===f({queryArgs:T,endpointDefinition:F,endpointName:G})&&(M=void 0)}let P=A.isSuccess?A.data:M?.data;P===void 0&&(P=A.data);const V=P!==void 0,H=A.isLoading,B=(!M||M.isLoading||M.isUninitialized)&&!V&&H,z=A.isSuccess||V&&(H&&!M?.isError||A.isUninitialized);return{...A,data:P,currentData:A.data,isFetching:H,isLoading:B,isSuccess:z}}function y(A,M,T){if(M?.endpointName&&A.isUninitialized){const{endpointName:G}=M,F=h.endpointDefinitions[G];T!==or&&f({queryArgs:M.originalArgs,endpointDefinition:F,endpointName:G})===f({queryArgs:T,endpointDefinition:F,endpointName:G})&&(M=void 0)}let P=A.isSuccess?A.data:M?.data;P===void 0&&(P=A.data);const V=P!==void 0,H=A.isLoading,B=(!M||M.isLoading||M.isUninitialized)&&!V&&H,z=A.isSuccess||H&&V;return{...A,data:P,currentData:A.data,isFetching:H,isLoading:B,isSuccess:z}}function _(A,M){const T=n(),P=of(M);return C.useCallback((V,H)=>T(e.util.prefetch(A,V,{...P,...H})),[A,T,P])}function b(A,M,{refetchOnReconnect:T,refetchOnFocus:P,refetchOnMountOrArgChange:V,skip:H=!1,pollingInterval:B=0,skipPollingIfUnfocused:z=!1,...G}={}){const{initiate:F}=e.endpoints[A],K=n(),ue=C.useRef(void 0);if(!ue.current){const me=K(e.internalActions.internal_getRTKQSubscriptions());ue.current=me}const U=oy(H?or:M),ee=of({refetchOnReconnect:T,refetchOnFocus:P,pollingInterval:B,skipPollingIfUnfocused:z}),ne=G.initialPageParam,oe=of(ne),N=C.useRef(void 0);let{queryCacheKey:X,requestId:le}=N.current||{},ie=!1;X&&le&&(ie=ue.current.isRequestSubscribed(X,le));const de=!ie&&N.current!==void 0;return p(()=>{de&&(N.current=void 0)},[de]),p(()=>{const me=N.current;if(U===or){me?.unsubscribe(),N.current=void 0;return}const pe=N.current?.subscriptionOptions;if(!me||me.arg!==U){me?.unsubscribe();const Ae=K(F(U,{subscriptionOptions:ee,forceRefetch:V,...KI(h.endpointDefinitions[A])?{initialPageParam:oe}:{}}));N.current=Ae}else ee!==pe&&me.updateSubscriptionOptions(ee)},[K,F,V,U,ee,de,oe,A]),[N,K,F,ee]}function w(A,M){return(P,{skip:V=!1,selectFromResult:H}={})=>{const{select:B}=e.endpoints[A],z=oy(V?or:P),G=C.useRef(void 0),F=C.useMemo(()=>u([B(z),(ne,oe)=>oe,ne=>z],M,{memoizeOptions:{resultEqualityCheck:Ec}}),[B,z]),K=C.useMemo(()=>H?u([F],H,{devModeChecks:{identityFunctionCheck:"never"}}):F,[F,H]),ue=i(ne=>K(ne,G.current),Ec),U=a(),ee=F(U.getState(),G.current);return e9(()=>{G.current=ee},[ee]),ue}}function O(A){C.useEffect(()=>()=>{A.current?.unsubscribe?.(),A.current=void 0},[A])}function R(A){if(!A.current)throw new Error(hr(38));return A.current.refetch()}function D(A){const M=(V,H={})=>{const[B]=b(A,V,H);return O(B),C.useMemo(()=>({refetch:()=>R(B)}),[B])},T=({refetchOnReconnect:V,refetchOnFocus:H,pollingInterval:B=0,skipPollingIfUnfocused:z=!1}={})=>{const{initiate:G}=e.endpoints[A],F=n(),[K,ue]=C.useState(ay),U=C.useRef(void 0),ee=of({refetchOnReconnect:V,refetchOnFocus:H,pollingInterval:B,skipPollingIfUnfocused:z});p(()=>{const X=U.current?.subscriptionOptions;ee!==X&&U.current?.updateSubscriptionOptions(ee)},[ee]);const ne=C.useRef(ee);p(()=>{ne.current=ee},[ee]);const oe=C.useCallback(function(X,le=!1){let ie;return t(()=>{U.current?.unsubscribe(),U.current=ie=F(G(X,{subscriptionOptions:ne.current,forceRefetch:!le})),ue(X)}),ie},[F,G]),N=C.useCallback(()=>{U.current?.queryCacheKey&&F(e.internalActions.removeQueryResult({queryCacheKey:U.current?.queryCacheKey}))},[F]);return C.useEffect(()=>()=>{U?.current?.unsubscribe()},[]),C.useEffect(()=>{K!==ay&&!U.current&&oe(K,!0)},[K,oe]),C.useMemo(()=>[oe,K,{reset:N}],[oe,K,N])},P=w(A,g);return{useQueryState:P,useQuerySubscription:M,useLazyQuerySubscription:T,useLazyQuery(V){const[H,B,{reset:z}]=T(V),G=P(B,{...V,skip:B===ay}),F=C.useMemo(()=>({lastArg:B}),[B]);return C.useMemo(()=>[H,{...G,reset:z},F],[H,G,z,F])},useQuery(V,H){const B=M(V,H),z=P(V,{selectFromResult:V===or||H?.skip?void 0:eT,...H}),G=ly(z,...cy);return C.useDebugValue(G),C.useMemo(()=>({...z,...B}),[z,B])}}}function k(A){const M=(P,V={})=>{const[H,B,z,G]=b(A,P,V),F=C.useRef(G);p(()=>{F.current=G},[G]);const K=C.useCallback(function(ee,ne){let oe;return t(()=>{H.current?.unsubscribe(),H.current=oe=B(z(ee,{subscriptionOptions:F.current,direction:ne}))}),oe},[H,B,z]);O(H);const ue=oy(V.skip?or:P),U=C.useCallback(()=>R(H),[H]);return C.useMemo(()=>({trigger:K,refetch:U,fetchNextPage:()=>K(ue,"forward"),fetchPreviousPage:()=>K(ue,"backward")}),[U,K,ue])},T=w(A,y);return{useInfiniteQueryState:T,useInfiniteQuerySubscription:M,useInfiniteQuery(P,V){const{refetch:H,fetchNextPage:B,fetchPreviousPage:z}=M(P,V),G=T(P,{selectFromResult:P===or||V?.skip?void 0:eT,...V}),F=ly(G,...cy,"hasNextPage","hasPreviousPage");return C.useDebugValue(F),C.useMemo(()=>({...G,fetchNextPage:B,fetchPreviousPage:z,refetch:H}),[G,B,z,H])}}}function x(A){return({selectFromResult:M,fixedCacheKey:T}={})=>{const{select:P,initiate:V}=e.endpoints[A],H=n(),[B,z]=C.useState();C.useEffect(()=>()=>{B?.arg.fixedCacheKey||B?.reset()},[B]);const G=C.useCallback(function(X){const le=H(V(X,{fixedCacheKey:T}));return z(le),le},[H,V,T]),{requestId:F}=B||{},K=C.useMemo(()=>P({fixedCacheKey:T,requestId:B?.requestId}),[T,B,P]),ue=C.useMemo(()=>M?u([K],M):K,[M,K]),U=i(ue,Ec),ee=T==null?B?.arg.originalArgs:void 0,ne=C.useCallback(()=>{t(()=>{B&&z(void 0),T&&H(e.internalActions.removeMutationResult({requestId:F,fixedCacheKey:T}))})},[H,T,B,F]),oe=ly(U,...cy,"endpointName");C.useDebugValue(oe);const N=C.useMemo(()=>({...U,originalArgs:ee,reset:ne}),[U,ee,ne]);return C.useMemo(()=>[G,N],[G,N])}}}var n9=Symbol(),r9=({batch:e=XN,hooks:t={useDispatch:LT,useSelector:PT,useStore:kT},createSelector:n=bi,unstable__sideEffectsInRender:i=!1,...a}={})=>({name:n9,init(l,{serializeQueryArgs:u},f){const h=l,{buildQueryHooks:p,buildInfiniteQueryHooks:g,buildMutationHook:y,usePrefetch:_}=t9({api:l,moduleOptions:{batch:e,hooks:t,unstable__sideEffectsInRender:i,createSelector:n},serializeQueryArgs:u,context:f});return yc(h,{usePrefetch:_}),yc(f,{batch:e}),{injectEndpoint(b,w){if(YH(w)){const{useQuery:O,useLazyQuery:R,useLazyQuerySubscription:D,useQueryState:k,useQuerySubscription:x}=p(b);yc(h.endpoints[b],{useQuery:O,useLazyQuery:R,useLazyQuerySubscription:D,useQueryState:k,useQuerySubscription:x}),l[`use${af(b)}Query`]=O,l[`useLazy${af(b)}Query`]=R}if(WH(w)){const O=y(b);yc(h.endpoints[b],{useMutation:O}),l[`use${af(b)}Mutation`]=O}else if(KI(w)){const{useInfiniteQuery:O,useInfiniteQuerySubscription:R,useInfiniteQueryState:D}=g(b);yc(h.endpoints[b],{useInfiniteQuery:O,useInfiniteQuerySubscription:R,useInfiniteQueryState:D}),l[`use${af(b)}InfiniteQuery`]=O}}}}}),i9=WI(QI(),r9());const XI=e=>({id:String(e.id),name:e.name,imageUrl:e.picture_url,display:!0}),s9=e=>e.results.map(XI).sort((n,i)=>n.name.localeCompare(i.name)),ZI=e=>{const t=e.image.original_height||48,n=e.image.original_width||48;return{id:String(e.id),name:e.name,iconUrl:e.image.url.replace("{height}",t).replace("{width}",n)}},a9=e=>e.results.map(ZI).sort((n,i)=>n.name.localeCompare(i.name)),o9=e=>{const t=e.instructors[0],n=t?XI(t):{id:"0",name:"Unknown Instructor",imageUrl:"",display:!1},i=ke.getBookableStatus(e),a=new Date(e.starts_at),u=(new Date(e.ends_at).getTime()-a.getTime())/1e3;return Number.isNaN(u)&&Lv("Computed invalid duration",{extra:{rawClass:e}}),{...e,id:String(e.id),name:e.name,start:e.starts_at,end:e.ends_at,customerUrl:e.customer_url,duration:u,discipline:ZI(e.offering_type.category),instructor:n,status:i}},l9=e=>e.results.map(o9),c9=["id","name","max_occupancy","occupancy","attending_count","starts_at","ends_at","waiting_count","active_registration_status","category.name","venue","customer_url","description"],u9=["instructors","active_registration_status","category","offering_type","offering_type.category","venue","suggested_booking_action"],Af=i9({reducerPath:"pelotonApi",baseQuery:IH({baseUrl:`${ke.PELOTON_CORS_PROXY}/${ke.PELOTON_API_BASE}/`}),endpoints:e=>({getClasses:e.query({queryFn:async t=>{try{const n=ke.getPelotonHeaders(t),i=ke.buildEventsUrl({fields:c9,expand:u9,corsProxy:!0}),a=await ke.fetchAllPelotonPages(i,async l=>{const u=await fetch(l,{headers:n});if(!u.ok)throw new Error(`${u.status}: ${await u.text()}`);return u.json()},!0);return{data:l9({results:a})}}catch(n){return{error:{status:"FETCH_ERROR",error:String(n)}}}}}),getDisciplines:e.query({query:t=>({url:`offering_type_categories?${new URLSearchParams({sort:"name"})}`,method:"GET",headers:ke.getPelotonHeaders(t)}),transformResponse:t=>a9(t)}),getInstructors:e.query({query:t=>({url:`instructors?${new URLSearchParams({sort:"name"})}`,method:"GET",headers:ke.getPelotonHeaders(t)}),transformResponse:t=>s9(t)})})}),{useGetClassesQuery:JI,useGetDisciplinesQuery:tb,useGetInstructorsQuery:nb}=Af,d9=e=>{if("error"in e&&typeof e.error=="string")return e.error;if("message"in e&&typeof e.message=="string")return e.message},f9=I.label`
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
`,h9=I.span`
  color: ${e=>e.theme.colors.main};
  font-size: 14px;
`,p9=I.input`
  accent-color: ${e=>e.theme.colors.accent};
`,eD=({value:e,checked:t,onChange:n,label:i,icon:a})=>{const l=C.useId();return v.jsxs(f9,{$checked:t,htmlFor:l,children:[v.jsx(p9,{type:"checkbox",id:l,value:e,checked:t,onChange:n}),a,v.jsx(h9,{children:i})]})},tT=I.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`,nT=I.legend`
  font-weight: 600;
  font-size: 18px;
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,rT=I.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  margin: 0 0 12px;
`,iT=I.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
`,lf=I.button`
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
`,tD=I.div`
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
`,sT=I.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
  margin-left: auto;
`,vh=I.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  padding: 24px;
  text-align: center;
`,nD=I.p`
  color: #d93025;
  font-size: 14px;
  padding: 16px;
`,rD=I.button`
  border: none;
  background: none;
  color: ${e=>e.theme.colors.accent};
  cursor: pointer;
  font-family: inherit;
  font-size: 14px;
  text-decoration: underline;
  padding: 0;
`,m9=I.div`
  margin-top: 32px;

  ${Te`
    margin-top: 24px;
  `}
`,g9=({studioId:e,selectedInstructors:t,setSelectedInstructors:n,selectedDisciplines:i,setSelectedDisciplines:a})=>{const l=nb(e),u=tb(e),f=C.useRef(t),h=C.useRef(i);C.useEffect(()=>{const b=f.current;if(!l.currentData||!ke.isNotEmpty(b))return;const w=new Set(l.currentData.map(R=>R.id)),O=b.filter(R=>w.has(R));O.length<b.length&&(n(O),f.current=O)},[l.currentData,n]),C.useEffect(()=>{const b=h.current;if(!u.currentData||!ke.isNotEmpty(b))return;const w=new Set(u.currentData.map(R=>String(R.id))),O=b.filter(R=>w.has(String(R)));O.length<b.length&&(a(O),h.current=O)},[u.currentData,a]);const p=b=>{if(!ke.isNotEmpty(t))return;const w=t.includes(b);n(w?t.filter(O=>O!==b):[...t,b])},g=b=>{if(!ke.isNotEmpty(i))return;const w=i.includes(b);a(w?i.filter(O=>O!==b):[...i,b])},y=ke.isNotEmpty(t),_=ke.isNotEmpty(i);return v.jsxs("div",{children:[v.jsxs(tT,{children:[v.jsx(nT,{children:"Instructors"}),v.jsx(rT,{children:"Filter by specific instructors or get alerts for all of them."}),v.jsxs(iT,{children:[v.jsx(lf,{type:"button",$active:!y,onClick:()=>n(null),children:"Any instructor"}),v.jsx(lf,{type:"button",$active:y,onClick:()=>{y||n([])},children:"Specific instructors"}),y&&t.length>0&&v.jsxs(sT,{children:[t.length," selected"]})]}),y&&v.jsx(y9,{query:l,selectedIds:t,onToggle:p})]}),v.jsx(m9,{}),v.jsxs(tT,{children:[v.jsx(nT,{children:"Disciplines"}),v.jsx(rT,{children:"Filter by class type or get alerts for everything."}),v.jsxs(iT,{children:[v.jsx(lf,{type:"button",$active:!_,onClick:()=>a(null),children:"Any discipline"}),v.jsx(lf,{type:"button",$active:_,onClick:()=>{_||a([])},children:"Specific disciplines"}),_&&i.length>0&&v.jsxs(sT,{children:[i.length," selected"]})]}),_&&v.jsx(v9,{query:u,selectedIds:i,onToggle:g})]})]})},y9=({query:e,selectedIds:t,onToggle:n})=>e.isLoading?v.jsx(vh,{children:"Loading instructors…"}):e.error?v.jsxs(nD,{children:["Couldn't load instructors."," ",v.jsx(rD,{type:"button",onClick:()=>e.refetch(),children:"Try again"})]}):!e.currentData||e.currentData.length===0?v.jsx(vh,{children:"No instructors found for this studio."}):v.jsx(tD,{role:"group","aria-label":"Instructors",children:e.currentData.map(i=>v.jsx(eD,{value:i.id,checked:t.includes(i.id),onChange:()=>n(i.id),label:i.name,icon:v.jsx(K_,{instructor:i,size:28})},i.id))}),v9=({query:e,selectedIds:t,onToggle:n})=>e.isLoading?v.jsx(vh,{children:"Loading disciplines…"}):e.error?v.jsxs(nD,{children:["Couldn't load disciplines."," ",v.jsx(rD,{type:"button",onClick:()=>e.refetch(),children:"Try again"})]}):!e.currentData||e.currentData.length===0?v.jsx(vh,{children:"No disciplines found for this studio."}):v.jsx(tD,{role:"group","aria-label":"Disciplines",children:e.currentData.map(i=>v.jsx(eD,{value:i.id,checked:t.includes(i.id),onChange:()=>n(i.id),label:i.name,icon:v.jsx(mh,{discipline:i,size:24})},i.id))}),_9=I.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 16px;
  margin-bottom: 24px;

  ${Te`
    padding: 0;
    margin-bottom: 12px;
  `}
`,b9=I.button`
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
`,S9=I.div`
  flex: 1;
  height: 2px;
  background-color: ${e=>e.$filled?e.theme.colors.accent:e.theme.borderColor};
  transition: background-color 0.2s;
`,w9=I.span`
  position: absolute;
  top: 18px;
  font-size: 10px;
  white-space: nowrap;
  color: ${e=>e.$state==="active"?e.theme.colors.main:e.theme.colors.secondary};
  font-weight: ${e=>e.$state==="active"?600:400};

  ${Te`
    display: none;
  `}
`,E9=I.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`,x9=({steps:e,currentStep:t,onStepClick:n})=>v.jsx(_9,{role:"navigation","aria-label":"Editor steps",children:e.map((i,a)=>{const l=a<t?"completed":a===t?"active":"upcoming";return v.jsxs(E9,{style:{flex:a<e.length-1?1:0},children:[v.jsxs("div",{style:{display:"flex",alignItems:"center",width:"100%"},children:[v.jsx(b9,{$state:l,onClick:()=>{l!=="upcoming"&&n(a)},"aria-label":`Step ${a+1}: ${i}`,"aria-current":l==="active"?"step":void 0,type:"button"}),a<e.length-1&&v.jsx(S9,{$filled:a<t})]}),v.jsx(w9,{$state:l,children:i})]},a)})}),T9=I.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`,C9=I.legend`
  font-weight: 600;
  font-size: 18px;
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,R9=I.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  margin: 0 0 20px;
`,A9=I.div`
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  overflow: hidden;
`,Ks=I.div`
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
`,Xs=I.span`
  font-size: 13px;
  font-weight: 500;
  color: ${e=>e.theme.colors.secondary};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  flex-shrink: 0;
`,Wi=I.span`
  font-size: 14px;
  color: ${e=>e.theme.colors.main};
  text-align: right;
  word-break: break-word;

  ${Te`
    text-align: left;
  `}
`,I9=I.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  justify-content: flex-end;

  ${Te`
    justify-content: flex-start;
  `}
`,D9=I.span`
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  background-color: ${e=>e.theme.colors.secondarySurface};
  color: ${e=>e.theme.colors.main};
`,O9=e=>{if(ke.isAllDay(e))return"All day";const t=hh.find(i=>i.minutes===e.startMin),n=hh.find(i=>i.minutes===e.endMin);return!t||!n?"All day":`${t.label} – ${n.label}`},N9=e=>{switch(e){case"free":return"Open spots only";case"waitlist":return"Open spots or waitlist";case"full":return"Any status"}},M9=({name:e,studioId:t,maxStatus:n,selectedInstructors:i,selectedDisciplines:a,timeRanges:l})=>{const u=ke.STUDIOS[t],f=rs.filter((g,y)=>l[y]),h=l.find(Boolean),p=l.filter(Boolean).every(g=>g&&h&&g.startMin===h.startMin&&g.endMin===h.endMin);return v.jsxs(T9,{children:[v.jsx(C9,{children:"Review your alert"}),v.jsx(R9,{children:"Double-check everything looks right, then hit Save."}),v.jsxs(A9,{children:[e.trim()&&v.jsxs(Ks,{children:[v.jsx(Xs,{children:"Name"}),v.jsx(Wi,{children:e.trim()})]}),v.jsxs(Ks,{children:[v.jsx(Xs,{children:"Studio"}),v.jsx(Wi,{children:u?.location||t})]}),v.jsxs(Ks,{children:[v.jsx(Xs,{children:"Alert on"}),v.jsx(Wi,{children:N9(n)})]}),v.jsxs(Ks,{children:[v.jsx(Xs,{children:"Instructors"}),v.jsx(Wi,{children:i===null?"Any instructor":i.length===0?"None selected":`${i.length} selected`})]}),v.jsxs(Ks,{children:[v.jsx(Xs,{children:"Disciplines"}),v.jsx(Wi,{children:a===null?"Any discipline":a.length===0?"None selected":`${a.length} selected`})]}),v.jsxs(Ks,{children:[v.jsx(Xs,{children:"Days"}),f.length===0?v.jsx(Wi,{children:"No days selected"}):f.length===7?v.jsx(Wi,{children:"Every day"}):v.jsx(I9,{children:f.map(g=>v.jsx(D9,{children:g.slice(0,3)},g))})]}),h&&v.jsxs(Ks,{children:[v.jsx(Xs,{children:"Time window"}),v.jsx(Wi,{children:p?O9(h):"Varies by day"})]})]})]})},k9=I.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`,L9=I.legend`
  font-weight: 600;
  font-size: 18px;
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,P9=I.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  margin: 0 0 16px;
`,j9=I.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,U9=I.div`
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
`,$9=I.label`
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
`,z9=I.input`
  accent-color: ${e=>e.theme.colors.accent};
`,B9=I.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: auto;

  ${Te`
    margin-left: 28px;
    width: calc(100% - 28px);
  `}
`,H9=I.label`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
`,F9=I.input`
  accent-color: ${e=>e.theme.colors.accent};
`,aT=I.select`
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
`,q9=I.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,V9=I.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  flex-wrap: wrap;
`,uy=I.button`
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
`,G9=({timeRanges:e,setTimeRanges:t})=>{const n=e.filter(Boolean).length,i=C.useRef(rs.map(()=>{})),a=C.useCallback(g=>{const y=[...e];y[g]=y[g]?null:ke.DEFAULT_TIME_RANGE,t(y)},[e,t]),l=C.useCallback(g=>{const y=e[g];if(!y)return;const _=[...e];ke.isAllDay(y)?_[g]=i.current[g]??ke.SPECIFIC_DEFAULT_TIME_RANGE:(i.current[g]=y,_[g]=ke.ALL_DAY_TIME_RANGE),t(_)},[e,t]),u=C.useCallback((g,y,_)=>{const b=[...e],w=b[g];w&&(y==="startMin"?b[g]={startMin:_,endMin:w.endMin===0||w.endMin>=_?w.endMin:0}:b[g]={...w,endMin:_},t(b))},[e,t]),f=()=>{t(rs.map(()=>ke.DEFAULT_TIME_RANGE))},h=()=>{t(rs.map(()=>null))},p=()=>{const g=e.find(Boolean);g&&t(e.map(y=>y?{...g}:null))};return v.jsxs(k9,{children:[v.jsx(L9,{children:"Days & times"}),v.jsx(P9,{children:"Choose which days and time windows to monitor. Alerts fire when a matching class falls within these windows (in the studio's timezone)."}),v.jsxs(V9,{children:[v.jsx(uy,{type:"button",onClick:f,children:"Select all days"}),n>0&&v.jsx(uy,{type:"button",onClick:h,children:"Clear all"}),n>1&&v.jsx(uy,{type:"button",onClick:p,children:"Copy time to all"})]}),v.jsx(j9,{children:rs.map((g,y)=>{const _=e[y],b=!!_&&ke.isAllDay(_);return v.jsxs(U9,{$enabled:!!_,children:[v.jsxs($9,{htmlFor:`day-${y}`,children:[v.jsx(z9,{type:"checkbox",id:`day-${y}`,checked:!!_,onChange:()=>a(y)}),g]}),_&&v.jsxs(B9,{children:[v.jsxs(H9,{htmlFor:`allday-${y}`,children:[v.jsx(F9,{type:"checkbox",id:`allday-${y}`,checked:b,onChange:()=>l(y)}),"All day"]}),!b&&v.jsxs(v.Fragment,{children:[v.jsx(aT,{value:_.startMin,"aria-label":`${g} start time`,onChange:({target:w})=>{const O=parseInt(w.value);Number.isNaN(O)||u(y,"startMin",O)},children:hh.map(w=>v.jsx("option",{value:w.minutes,children:w.label},w.minutes))}),v.jsx(q9,{children:"to"}),v.jsx(aT,{value:_.endMin,"aria-label":`${g} end time`,onChange:({target:w})=>{const O=parseInt(w.value);Number.isNaN(O)||u(y,"endMin",O)},children:hh.map(w=>v.jsx("option",{value:w.minutes,disabled:w.minutes>0&&w.minutes<_.startMin,children:w.label},w.minutes))})]})]})]},g)})})]})},dy=["Basics","Filters","Schedule","Review"],Y9=I.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
  background-color: white;
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
`,W9=I.div`
  padding: 24px 24px 0;

  ${Te`
    padding: 16px 16px 0;
  `}
`,Q9=I.h2`
  margin: 0 0 4px;
  font-size: 22px;
  color: ${e=>e.theme.colors.main};
`,K9=I.p`
  margin: 0 0 20px;
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
`,X9=I.div`
  padding: 8px 24px 24px;
  flex: 1;
  overflow-y: auto;

  ${Te`
    padding: 8px 16px 16px;
  `}
`,Z9=I.div`
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
`,cf=I.button`
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
`,J9=I.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,e7=I.span`
  font-size: 13px;
  color: ${e=>e.$error?"#d93025":e.theme.colors.secondary};

  ${Te`
    font-size: 12px;
  `}
`,t7=({alertToEdit:e,onSave:t,onCancel:n})=>{const i=gs(),a=ct(Ia),l=ct(mu),[u,f]=C.useState(0),[h,p]=C.useState(!1),[g,y]=C.useState();C.useEffect(()=>{e.studioId?i(Rf(e.studioId)):i(Rf($I(ke.DEFAULT_STUDIO_ID)))},[e.studioId,i]);const[_,b]=C.useState(e.name||""),[w,O]=C.useState(e.instructors||null),[R,D]=C.useState(e.disciplines||null),[k,x]=C.useState(()=>e.timeRanges||rs.map(()=>ke.DEFAULT_TIME_RANGE)),[A,M]=C.useState(e.maxStatus||"free"),T=C.useRef(e.studioId);C.useEffect(()=>{a&&T.current&&a!==T.current&&(O(K=>K&&[]),D(K=>K&&[])),T.current=a},[a]);const P=u<dy.length-1,V=u>0,H=u===dy.length-1,B=C.useCallback(()=>{P&&f(K=>K+1)},[P]),z=C.useCallback(()=>{V&&f(K=>K-1)},[V]),G=C.useCallback(async()=>{if(!a||!l)return;p(!0),y(void 0);const K={id:e.id||null,created:e.created||new Date().getTime(),..._.trim()?{name:_.trim()}:{},studioId:a,instructors:w,disciplines:R,timeRanges:k,maxStatus:A};try{K.id?await tH(l,K):await eH(l,K),t()}catch(ue){Or(ue),y("Something went wrong. Please try again."),p(!1)}},[e.id,e.created,_,a,l,w,R,k,A,t]),F=!!e.id;return v.jsxs(Y9,{children:[v.jsxs(W9,{children:[v.jsx(Q9,{children:F?"Edit alert":"New alert"}),v.jsx(K9,{children:F?"Update your alert settings below.":"Set up a new alert in a few quick steps."}),v.jsx(x9,{steps:dy,currentStep:u,onStepClick:f})]}),v.jsxs(X9,{children:[u===0&&v.jsx(pH,{name:_,onNameChange:b,studioId:a,onStudioChange:K=>i(Rf(K)),maxStatus:A,onStatusChange:M}),u===1&&v.jsx(g9,{studioId:a,selectedInstructors:w,setSelectedInstructors:O,selectedDisciplines:R,setSelectedDisciplines:D}),u===2&&v.jsx(G9,{timeRanges:k,setTimeRanges:x}),u===3&&v.jsx(M9,{name:_,studioId:a,maxStatus:A,selectedInstructors:w,selectedDisciplines:R,timeRanges:k})]}),v.jsxs(Z9,{children:[v.jsx("div",{children:V?v.jsx(cf,{type:"button",onClick:z,children:"Back"}):v.jsx(cf,{type:"button",onClick:n,children:"Cancel"})}),v.jsxs(J9,{children:[g&&v.jsx(e7,{$error:!0,children:g}),H?v.jsx(cf,{type:"button",$primary:!0,onClick:G,disabled:h,children:h?"Saving…":"Save alert"}):v.jsx(cf,{type:"button",$primary:!0,onClick:B,children:"Continue"})]})]})]})},n7=()=>{const e=vi(),t=Ta(),n=e.state||{};return v.jsx(t7,{alertToEdit:n,onSave:()=>{t(rt.ALERTS)},onCancel:()=>{t(rt.ALERTS)}})},iD=C.createContext({state:"idle"}),r7=({children:e,userId:t})=>{const[n,i]=C.useState({state:"idle"});return C.useEffect(()=>{i({state:"loading"});const a=wn;if(!a)return i({state:"failed",error:new Error("No database set up")}),()=>{};const l=tr(a,`messagingTokens/${t}`),u=Zh(l,f=>{const h=f.val();i({state:"fulfilled",data:h||{}})},f=>{i({state:"failed",error:f})});return()=>u()},[t]),v.jsx(iD.Provider,{value:n,children:e})},sD=C.createContext({state:"idle"}),i7=({children:e,userId:t})=>{const[n,i]=C.useState({state:"idle"});return C.useEffect(()=>{i({state:"loading"});const a=wn;if(!a)return i({state:"failed",error:new Error("No database set up")}),()=>{};const l=tr(a,ke.PATHS.alertPreferences(t)),u=Zh(l,f=>{const h=f.val();i({state:"fulfilled",data:h||{}})},f=>{i({state:"failed",error:f})});return()=>u()},[t]),v.jsx(sD.Provider,{value:n,children:e})},s7=({children:e,userId:t})=>{const[n,i]=C.useState({state:"idle"});return C.useEffect(()=>{i({state:"loading"});const a=wn;if(!a)return i({state:"failed",error:new Error("No database set up")}),()=>{};const l=tr(a,ke.PATHS.alerts(t)),u=Zh(l,f=>{const h=f.val();if(!h){i({state:"fulfilled",data:[]});return}const p=Object.entries(h).map(([g,y])=>({...y,timeRanges:new Array(rs.length).fill(null).map((_,b)=>y.timeRanges[b]||null),id:g}));i({state:"fulfilled",data:p})},f=>{i({state:"failed",error:f})});return()=>u()},[t]),v.jsx(Q_.Provider,{value:n,children:e})},a7=I.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 16px;

  ${Te`
    padding: 8px;
  `}
`,o7=I.div`
  overflow: auto;
  height: 100%;
`,l7=I.div`
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
`,c7=I.div`
  font-size: 36px;
  margin-bottom: 16px;
  line-height: 1;
`,u7=I.h1`
  font-size: 20px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
  margin: 0 0 10px;
`,d7=I.p`
  font-size: 15px;
  color: ${e=>e.theme.colors.secondary};
  line-height: 1.55;
  margin: 0 0 24px;
`,f7=I(ms)`
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
`,h7=I.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
  padding: 32px 0;
  margin: 0;
`,p7=({children:e})=>{const t=ct(el);return t.state==="loading"?v.jsx(h7,{children:"Loading…"}):t.state!=="fulfilled"||!t.data?v.jsxs(l7,{children:[v.jsx(c7,{children:"🔔"}),v.jsx(u7,{children:"Sign in to use Alerts"}),v.jsx(d7,{children:"Track class availability and get push notifications when a spot opens up for the classes you care about."}),v.jsx(f7,{to:rt.SIGN_IN,children:"Sign in"})]}):e(t.data.id)},m7=e=>v.jsx(la,{children:v.jsx(o7,{children:v.jsx(a7,{children:v.jsx(p7,{...e})})})}),g7=({userId:e})=>v.jsx(s7,{userId:e,children:v.jsx(i7,{userId:e,children:v.jsx(r7,{userId:e,children:v.jsx(Ak,{})})})}),y7=()=>v.jsx(m7,{children:e=>v.jsx(g7,{userId:e})}),v7=async(e,t)=>{const n=wn;if(!n)throw new Error("No Firebase database connection to use");await ZA(tr(n,ke.PATHS.alertPreferences(e)),t)},_7=I.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,b7=I.div`
  display: flex;
  align-items: center;
  gap: 12px;

  ${Te`
    flex-direction: column;
    align-items: stretch;
  `}
`,S7=I.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,w7=I.label`
  font-size: 13px;
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
`,E7=I.input`
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
`,x7=I.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,T7=I.button`
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
`,C7=I.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
  padding: 16px;
`,R7=I.p`
  margin: 0;
  font-size: 14px;
  color: #d93025;
  text-align: center;
  padding: 16px;
`,A7=({alertPreferences:e})=>{const t=ct(mu),[n,i]=C.useState(e.notificationDelayMin||5),[a,l]=C.useState(!1),[u,f]=C.useState(!1),h=C.useCallback(async p=>{if(p.preventDefault(),!!t){l(!0),f(!1);try{await v7(t,{lastUpdated:new Date().getTime(),notificationDelayMin:n}),f(!0),setTimeout(()=>f(!1),2e3)}catch{}finally{l(!1)}}},[t,n]);return v.jsxs(_7,{onSubmit:h,children:[v.jsxs(S7,{children:[v.jsx(w7,{htmlFor:"delay-input",children:"Cooldown (minutes)"}),v.jsx(x7,{children:"Minimum delay between consecutive alert notifications"})]}),v.jsxs(b7,{children:[v.jsx(E7,{id:"delay-input",type:"number",min:0,value:n,onChange:p=>{const g=parseInt(p.target.value,10);Number.isNaN(g)||i(g)}}),v.jsx(T7,{type:"submit",disabled:a,$saved:u,children:a?"Saving…":u?"Saved ✓":"Save"})]})]})},I7=()=>{const e=C.useContext(sD);return e.state==="idle"||e.state==="loading"?v.jsx(C7,{children:"Loading preferences…"}):e.state==="failed"?v.jsx(R7,{children:"Failed to load preferences."}):v.jsx(A7,{alertPreferences:e.data},e.data.lastUpdated)},D7=e=>{if(!e)return"Unknown device";const t=O7(e),n=N7(e);return t&&n?`${t} on ${n}`:t||n||"Unknown device"},O7=e=>{if(e.includes("Edg/"))return"Edge";if(e.includes("OPR/")||e.includes("Opera"))return"Opera";if(e.includes("CriOS"))return"Chrome";if(e.includes("FxiOS"))return"Firefox";if(e.includes("Chrome/")&&!e.includes("Chromium"))return"Chrome";if(e.includes("Firefox/"))return"Firefox";if(e.includes("Safari/")&&!e.includes("Chrome"))return"Safari"},N7=e=>{if(/iPhone/.test(e))return"iPhone";if(/iPad/.test(e))return"iPad";if(/iPod/.test(e))return"iPod";if(/Android/.test(e))return"Android";if(/CrOS/.test(e))return"ChromeOS";if(/Mac OS X|Macintosh/.test(e))return"macOS";if(/Windows/.test(e))return"Windows";if(/Linux/.test(e))return"Linux"},M7=I.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,k7=I.li`
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
`,L7=I.span`
  font-size: 20px;
  flex-shrink: 0;
`,P7=I.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
`,j7=I.span`
  font-weight: 500;
  font-size: 14px;
  color: ${e=>e.theme.colors.main};
  display: flex;
  align-items: center;
  gap: 6px;
`,U7=I.span`
  padding: 1px 6px;
  border-radius: 10px;
  font-size: 10px;
  font-weight: 600;
  background-color: ${e=>e.theme.colors.accent}14;
  color: ${e=>e.theme.colors.accent};
`,$7=I.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,z7=I.button`
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
`,B7=I.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
  padding: 16px;
`,H7=I.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
  padding: 16px;
`,F7=I.p`
  margin: 0;
  font-size: 14px;
  color: #d93025;
  text-align: center;
  padding: 16px;
`,q7=e=>e?/iPhone|iPad|iPod/i.test(e)||/Android/i.test(e)?"📱":/Windows/i.test(e)||/Macintosh|Mac OS/i.test(e)?"💻":/Linux/i.test(e)?"🖥️":"💻":"💻",V7=({device:e,isCurrentDevice:t,onDelete:n})=>{const i=C.useMemo(()=>{const u=new Date(e.timestamp).getFullYear()===new Date().getFullYear();return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"numeric",...u?{}:{year:"numeric"}}).format(e.timestamp)},[e.timestamp]),a=D7(e.userAgent);return v.jsxs(k7,{children:[v.jsx(L7,{children:q7(e.userAgent)}),v.jsxs(P7,{children:[v.jsxs(j7,{children:[a,t&&v.jsx(U7,{children:"This device"})]}),v.jsxs($7,{children:["Last active ",i]})]}),v.jsx(z7,{type:"button",onClick:n,"aria-label":`Remove ${a}`,children:"Remove"})]})},G7=({devices:e})=>{const n=C.useContext(gu).token,i=ct(mu),a=l=>{i&&eI(i,l).catch(console.error)};return e.length===0?v.jsx(B7,{children:"No devices registered for push notifications yet."}):v.jsx(M7,{children:e.map(([l,u])=>v.jsx(V7,{device:u,isCurrentDevice:n!==void 0?l===n:u.userAgent!==void 0&&u.userAgent===navigator.userAgent,onDelete:()=>a(l)},l))})},Y7=()=>{const e=C.useContext(iD),t=C.useMemo(()=>e.state==="fulfilled"?Object.entries(e.data).sort(([,n],[,i])=>i.timestamp-n.timestamp):[],[e]);return e.state==="idle"||e.state==="loading"?v.jsx(H7,{children:"Loading devices…"}):e.state==="failed"?v.jsx(F7,{children:"Failed to load devices. Please try again."}):v.jsx(G7,{devices:t})},W7=async(e,t)=>{const n=wn;if(!n)throw new Error("No Firebase database connection to use");await XA(tr(n,ke.PATHS.alert(e,t)))},oT=(e,t,n)=>!e||e.length===0?t:e.length===1?e[0]:e.length===2?`${e[0]} or ${e[1]}`:`${e.length} ${n}`,Q7=(e,t)=>{const n=oT(e,"Any Class","Disciplines"),i=oT(t,"Any Instructor","Instructors");return`${n} with ${i}`},K7=I.li`
  ${bs}
  padding: 16px;
  transition: box-shadow 0.15s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 12px;
  }

  ${Te`
    padding: 12px;
  `}
`,X7=I.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;

  ${Te`
    flex-direction: column;
    gap: 8px;
  `}
`,Z7=I.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`,J7=I.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`,eF=I.span`
  font-weight: 600;
  font-size: 15px;
  color: ${e=>e.theme.colors.main};
`,tF=I.span`
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 500;
  background-color: ${e=>e.$status==="free"?"#e8f5e9":e.$status==="waitlist"?"#fff3e0":"#fce4ec"};
  color: ${e=>e.$status==="free"?"#2e7d32":e.$status==="waitlist"?"#e65100":"#c62828"};
`,nF=I.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
`,rF=I.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  margin-top: 2px;
`,iF=I.span`
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
`,sF=I.div`
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;

  ${Te`
    align-self: flex-end;
  `}
`,If=I.button`
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
`,aF=I(If)`
  &:hover {
    border-color: #d93025;
    color: #d93025;
  }
`,oF=I.span`
  font-size: 11px;
  color: ${e=>e.theme.colors.secondary};
  margin-top: 4px;
`,lF={free:{label:"Open spots",title:"Only alerts when a class has open spots available to book"},waitlist:{label:"Waitlist",title:"Alerts when a class has open spots or waitlist availability"},full:{label:"Any",title:"Alerts regardless of availability status"}},cF=e=>lF[e]||{label:e,title:""},uF=C.memo(({alert:e,onDuplicate:t,onEdit:n})=>{const i=Ta(),a=ct(mu),{data:l}=nb(e.studioId),{data:u}=tb(e.studioId),f=C.useMemo(()=>{const _=new Date(e.created).getFullYear()===new Date().getFullYear();return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",..._?{}:{year:"numeric"}}).format(e.created)},[e.created]),h=C.useMemo(()=>{if(e.name)return e.name;const y=ke.isNotEmpty(e.instructors)&&l?e.instructors.map(b=>l.find(w=>w.id===b)?.name).filter(b=>!!b):null,_=ke.isNotEmpty(e.disciplines)&&u?e.disciplines.map(b=>u.find(w=>w.id===b)?.name).filter(b=>!!b):null;return Q7(_,y)},[e.name,e.instructors,e.disciplines,l,u]),p=ke.STUDIOS[e.studioId]?.location||e.studioId||"No studio",g=cF(e.maxStatus);return v.jsx(K7,{children:v.jsxs(X7,{children:[v.jsxs(Z7,{children:[v.jsxs(J7,{children:[v.jsx(eF,{children:h}),v.jsx(tF,{$status:e.maxStatus,title:g.title,children:g.label})]}),v.jsx(nF,{children:p}),v.jsx(rF,{children:rs.map((y,_)=>v.jsx(iF,{$active:!!e.timeRanges[_],title:e.timeRanges[_]?`${y}: monitoring enabled`:`${y}: not monitored`,children:y.charAt(0)},y))}),v.jsxs(oF,{children:["Created ",f]})]}),v.jsxs(sF,{children:[v.jsx(If,{type:"button",onClick:()=>i(y$(e.id)),"aria-label":"Test alert",children:"Test"}),v.jsx(If,{type:"button",onClick:n,"aria-label":"Edit alert",children:"Edit"}),v.jsx(If,{type:"button",onClick:t,"aria-label":"Duplicate alert",children:"Duplicate"}),v.jsx(aF,{type:"button",onClick:()=>a&&W7(a,e.id),"aria-label":"Delete alert",children:"Delete"})]})]})})}),dF=I.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,fF=({alerts:e,onDuplicate:t,onEdit:n})=>v.jsx(dF,{children:e.map(i=>v.jsx(uF,{alert:i,onDuplicate:()=>t(i),onEdit:()=>n(i)},i.id))}),hF=I.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px 0;

  ${Te`
    padding: 16px 16px 0;
  `}
`,pF=I.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,mF=I.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
`,gF=I.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
`,yF=I.button`
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
`,vF=I.div`
  padding: 16px 24px 24px;

  ${Te`
    padding: 12px 16px 16px;
  `}
`,_F=I.p`
  margin: 0;
  padding: 24px;
  text-align: center;
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
`,bF=I.p`
  margin: 0;
  padding: 24px;
  text-align: center;
  color: #d93025;
  font-size: 14px;
`,SF=({onAdd:e,onEdit:t,onDuplicate:n})=>{const i=C.useContext(Q_),a=i.state==="loading"||i.state==="idle",l=i.state==="failed",u=i.state==="fulfilled"?i.data:[];return v.jsxs(v.Fragment,{children:[v.jsxs(hF,{children:[v.jsxs(pF,{children:[v.jsx(mF,{children:"Alerts"}),v.jsx(gF,{children:a?"Loading your alerts…":l?"Something went wrong":u.length===0?"You haven't created any alerts yet":`${u.length} alert${u.length===1?"":"s"}`})]}),!a&&!l&&v.jsx(yF,{type:"button",onClick:e,children:"+ New alert"})]}),v.jsxs(vF,{children:[a&&v.jsx(_F,{children:"Loading…"}),l&&v.jsx(bF,{children:"Failed to load your alerts. Please refresh and try again."}),!a&&!l&&u.length===0&&v.jsx(TF,{onAdd:e}),!a&&!l&&u.length>0&&v.jsx(fF,{alerts:u,onEdit:t,onDuplicate:n})]})]})},wF=I.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 32px 16px;
`,EF=I.p`
  margin: 0;
  font-size: 15px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
`,xF=I.button`
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
`,TF=({onAdd:e})=>v.jsxs(wF,{children:[v.jsx(EF,{children:"Create your first alert to get notified when classes become available."}),v.jsx(xF,{type:"button",onClick:e,children:"Create an alert"})]}),CF=I.button`
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
`;I.button`
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
`;const RF=I.div`
  background-color: white;
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 16px;
`,AF=()=>["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document||/iPad|iPhone|iPod/.test(navigator.userAgent),fy=I(RF)`
  margin-bottom: 1em;
`,IF=I(CF)`
  margin-top: 1em;
`,lT=I.h2`
  color: ${e=>e.theme.colors.accent};
`,DF=()=>{const[e,t]=C.useState(window.Notification?window.Notification.permission:void 0),{refreshToken:n}=C.useContext(gu),i=AF(),a=!!navigator.standalone||window.matchMedia("(display-mode: standalone)").matches,l=C.useCallback(()=>{window.Notification&&typeof window.Notification.requestPermission=="function"&&window.Notification.requestPermission().then(u=>{t(u),u==="granted"&&n()}).catch(u=>{console.error(u),Or(u)})},[n]);return i&&!a?v.jsxs(fy,{children:[v.jsx(lT,{children:"Installation Required"}),v.jsx("p",{children:"To receive notifications on iOS, you must first add this app to your home screen. Tap the share button in Safari and select “Add to Home Screen”, then open the app from there."})]}):e===void 0||!("serviceWorker"in navigator)?v.jsxs(fy,{children:[v.jsx(lT,{children:"Unsupported Browser"}),v.jsx("p",{children:"This browser does not support sending you notifications in the background. Alerts for new classes will only display if you keep this tab open."})]}):e!=="granted"?v.jsxs(fy,{children:[v.jsx("h2",{children:"Grant notification permissions"}),v.jsx("p",{children:"In order to get notified when any of your alerts trigger, you need to grant permission to send notifications"}),v.jsx(IF,{type:"button",onClick:l,children:"Grant Permission"})]}):null},OF=I.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${Te`
    gap: 16px;
  `}
`,hy=I.section`
  background-color: white;
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  overflow: hidden;
`,cT=I.div`
  padding: 20px 24px 0;

  ${Te`
    padding: 16px 16px 0;
  `}
`,uT=I.h2`
  margin: 0 0 4px;
  font-size: 20px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
`,dT=I.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
`,fT=I.div`
  padding: 16px 24px 24px;

  ${Te`
    padding: 12px 16px 16px;
  `}
`,NF=()=>{const e=Ta();return v.jsxs(OF,{children:[v.jsx(hy,{children:v.jsx(SF,{onAdd:()=>{e(rt.ALERTS_EDITOR,{state:{}})},onEdit:t=>{e(rt.ALERTS_EDITOR,{state:t})},onDuplicate:t=>{e(rt.ALERTS_EDITOR,{state:{...t,id:void 0,created:void 0}})}})}),v.jsxs(hy,{children:[v.jsxs(cT,{children:[v.jsx(uT,{children:"Preferences"}),v.jsx(dT,{children:"Control how often you receive alert notifications."})]}),v.jsx(fT,{children:v.jsx(I7,{})})]}),v.jsxs(hy,{children:[v.jsxs(cT,{children:[v.jsx(uT,{children:"Devices"}),v.jsx(dT,{children:"Devices registered to receive push notifications. Removed devices will re-register on their next visit."})]}),v.jsxs(fT,{children:[v.jsx(DF,{}),v.jsx(Y7,{})]})]})]})},MF=I.button.attrs({"aria-label":"Close",type:"button"})`
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
`,rb=e=>{try{return window.localStorage.getItem(e)}catch(t){return Or(t),null}},ib=(e,t)=>{try{window.localStorage.setItem(e,t)}catch(n){Or(n)}},aD=e=>{try{window.localStorage.removeItem(e)}catch(t){Or(t)}},oD="BOOKABLE_STATUS_FILTERS",fv="DISCIPLINE_FILTERS",hv="INSTRUCTOR_FILTERS",kF=e=>{const t=rb(oD);return t===null?e:t.split(";").filter(ke.isBookableStatus)},LF=e=>{ib(oD,e.join(";"))},PF=e=>{const t=rb(fv);return t===null?e:t.split(";").filter(Boolean)},hT=e=>{e.length===0?aD(fv):ib(fv,e.join(";"))},jF=e=>{const t=rb(hv);return t===null?e:t.split(";").filter(Boolean)},pT=e=>{e.length===0?aD(hv):ib(hv,e.join(";"))},UF={selectedBookableStatuses:kF(["free","waitlist"]),selectedInstructors:jF([]),selectedDisciplines:PF([])},lD=Ar({name:"filters",initialState:UF,reducers:{toggleBookableStatus(e,t){e.selectedBookableStatuses.includes(t.payload)?e.selectedBookableStatuses=e.selectedBookableStatuses.filter(n=>n!==t.payload):e.selectedBookableStatuses=[...e.selectedBookableStatuses,t.payload],LF(e.selectedBookableStatuses)},toggleInstructor(e,t){e.selectedInstructors.includes(t.payload)?e.selectedInstructors=e.selectedInstructors.filter(n=>n!==t.payload):e.selectedInstructors=[...e.selectedInstructors,t.payload],pT(e.selectedInstructors)},resetInstructors(e){e.selectedInstructors=[],pT(e.selectedInstructors)},toggleDiscipline(e,t){e.selectedDisciplines.includes(t.payload)?e.selectedDisciplines=e.selectedDisciplines.filter(n=>n!==t.payload):e.selectedDisciplines=[...e.selectedDisciplines,t.payload],hT(e.selectedDisciplines)},resetDisciplines(e){e.selectedDisciplines=[],hT(e.selectedDisciplines)}}}),{toggleBookableStatus:$F,toggleInstructor:zF,resetInstructors:BF,toggleDiscipline:HF,resetDisciplines:FF}=lD.actions,qF=lD.reducer,VF=()=>{const e=ct(i=>i.filters.selectedBookableStatuses),t=gs(),n=C.useCallback(i=>{t($F(i))},[t]);return{bookableStatuses:e,toggleBookableStatus:n}},GF=I.button`
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
`,YF=I.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px 8px;
`,WF=I.h3`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${e=>e.theme.colors.secondary};
  margin: 0;
`,sp=({label:e,onReset:t,children:n})=>v.jsxs(YF,{children:[v.jsx(WF,{children:e}),t&&v.jsx(GF,{type:"button",onClick:t,children:"Reset"}),n]}),QF=[{label:"Free",status:"free",color:"#2e7d32"},{label:"Waitlist",status:"waitlist",color:"#e65100"},{label:"Full",status:"full",color:"#9e9e9e"}],KF=I.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 0 16px 16px;
`,XF=I.button`
  padding: 5px 14px;
  border-radius: 20px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: box-shadow 0.1s;

  ${e=>e.$active?on`
          border: 1.5px solid ${e.$color};
          background-color: ${e.$color}14;
          color: ${e.$color};
        `:on`
          border: 1px solid ${e.theme.borderColor};
          background-color: transparent;
          color: ${e.theme.colors.secondary};

          &:hover {
            background-color: rgba(0, 0, 0, 0.04);
          }
        `}
`,ZF=()=>{const{bookableStatuses:e,toggleBookableStatus:t}=VF();return v.jsxs("fieldset",{style:{border:"none",margin:0,padding:0},children:[v.jsx("legend",{style:{padding:0,width:"100%"},children:v.jsx(sp,{label:"Status"})}),v.jsx(KF,{children:QF.map(n=>{const i=e.includes(n.status);return v.jsx(XF,{type:"button",$active:i,$color:n.color,onClick:()=>t(n.status),"aria-pressed":i,children:n.label},n.status)})})]})},JF=()=>{const e=ct(i=>i.filters.selectedDisciplines),t=gs(),n=C.useCallback(i=>{t(HF(i))},[t]);return{selectedDisciplines:e,toggleDiscipline:n}},cD=I.ul`
  list-style: none;
  margin: 0;
  padding: 0 0 8px;
`,uD=I.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.1s;

  ${e=>e.$checked?on`
          background-color: ${e.theme.colors.accent}08;
        `:on`
          &:hover {
            background-color: rgba(0, 0, 0, 0.03);
          }
        `}
`,dD=I.span`
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
`,fD=I.span`
  font-size: 14px;
  color: ${e=>e.theme.colors.main};
`,_h=I.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  padding: 8px 16px 16px;
  margin: 0;
`,eq=({discipline:e,checked:t,onClick:n})=>v.jsxs(uD,{$checked:t,onClick:n,role:"checkbox","aria-checked":t,children:[v.jsx(dD,{$checked:t}),v.jsx(mh,{discipline:e,size:24}),v.jsx(fD,{children:e.name})]}),tq=()=>{const e=ct(Ia),{currentData:t,isLoading:n,error:i}=tb(e),{selectedDisciplines:a,toggleDiscipline:l}=JF();return i&&!n?v.jsx(_h,{children:"Failed to load disciplines"}):!t||n?v.jsx(_h,{children:"Loading…"}):v.jsx(cD,{children:t.map((u,f)=>v.jsx(eq,{discipline:u,checked:a.includes(u.id),onClick:()=>l(u.id)},f))})},nq=()=>{const e=ct(n=>n.filters.selectedDisciplines.length>0),t=gs();return v.jsxs("div",{children:[v.jsx(sp,{label:"Disciplines",onReset:e?()=>t(FF()):void 0}),v.jsx(tq,{})]})},rq=()=>{const e=ct(i=>i.filters.selectedInstructors),t=gs(),n=C.useCallback(i=>{t(zF(i))},[t]);return{selectedInstructors:e,toggleInstructor:n}},iq=({instructor:e,checked:t,onClick:n})=>v.jsxs(uD,{$checked:t,onClick:n,role:"checkbox","aria-checked":t,children:[v.jsx(dD,{$checked:t}),v.jsx(K_,{instructor:e,size:28}),v.jsx(fD,{children:e.name})]}),sq=()=>{const e=ct(Ia),{currentData:t,isLoading:n,error:i}=nb(e),{selectedInstructors:a,toggleInstructor:l}=rq();return i&&!n?v.jsx(_h,{children:"Failed to load instructors"}):!t||n?v.jsx(_h,{children:"Loading…"}):v.jsx(cD,{children:t.map((u,f)=>v.jsx(iq,{instructor:u,checked:a.includes(u.id),onClick:()=>l(u.id)},f))})},aq=()=>{const e=ct(n=>n.filters.selectedInstructors.length>0),t=gs();return v.jsxs("div",{children:[v.jsx(sp,{label:"Instructors",onReset:e?()=>t(BF()):void 0}),v.jsx(sq,{})]})},oq=Object.entries(ke.STUDIOS).map(([e,t])=>({id:e,label:t.location})),lq=I.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 0 16px 16px;
`,cq=I.label`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  ${bs}
  cursor: pointer;
  transition: box-shadow 0.1s;

  ${e=>e.$selected?on`
          border-color: ${e.theme.colors.accent};
          background-color: ${e.theme.colors.accent}0a;
        `:on`
          &:hover {
            background-color: rgba(0, 0, 0, 0.03);
          }
        `}
`,uq=I.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`,dq=I.span`
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
`,fq=I.span`
  font-size: 15px;
  color: ${e=>e.theme.colors.main};
`,hq=()=>{const e=gs(),t=ct(Ia);return v.jsxs("fieldset",{style:{border:"none",margin:0,padding:0},children:[v.jsx("legend",{style:{padding:0,width:"100%"},children:v.jsx(sp,{label:"Studio"})}),v.jsx(lq,{children:oq.map(n=>{const i=t===n.id;return v.jsxs(cq,{$selected:i,htmlFor:`studio-${n.id}`,children:[v.jsx(uq,{type:"radio",id:`studio-${n.id}`,name:"studio-selected",value:n.id,checked:i,onChange:()=>{i||e(Rf(n.id))}}),v.jsx(dq,{$selected:i}),v.jsx(fq,{children:n.label})]},n.id)})})]})},pq=I.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`,mq=I.div`
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
`,gq=I.h2`
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${e=>e.theme.colors.main};
  margin: 0;
`,yq=I(MF)`
  display: none;

  ${jI`
    display: block;
  `}
`,vq=I.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  overflow-y: auto;
  flex: 1;
`,uf=I.div`
  border-bottom: 1px solid ${e=>e.theme.borderColor};

  &:last-child {
    border-bottom: none;
  }
`,_q=({onClose:e})=>v.jsxs(pq,{children:[v.jsxs(mq,{children:[v.jsx(gq,{children:"Filters"}),v.jsx(yq,{onClick:()=>e()})]}),v.jsxs(vq,{children:[v.jsx(uf,{children:v.jsx(hq,{})}),v.jsx(uf,{children:v.jsx(ZF,{})}),v.jsx(uf,{children:v.jsx(nq,{})}),v.jsx(uf,{children:v.jsx(aq,{})})]})]}),bq=()=>{const e=ct(Ia),{refetch:t}=JI(e);return{refresh:C.useCallback(async()=>{await t()},[t])}},mT=150,gT=60,Sq=()=>document.documentElement.scrollTop||document.body.scrollTop,wq=({refresh:e})=>{const t=C.useRef(null),n=C.useRef(null),i=C.useMemo(()=>!!navigator.standalone||window.matchMedia("(display-mode: standalone)").matches||!1,[]);return C.useEffect(()=>{if(!i)return;let a=0,l=!1,u=!1,f=!1;const h=b=>{const w=n.current;w&&(w.style.transition=b?"transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease":"none",w.style.transform="",w.style.opacity="0")},p=b=>{a=b.touches[0].clientY,l=!1,u=!1},g=b=>{if(f||Sq()>0)return;const w=b.touches[0].clientY-a;if(w<=0){l&&(l=!1,u=!1,h(!1));return}l=!0,u=w>=mT;const O=Math.min(w/mT,1),R=gT*(1-Math.pow(1-O,2)),D=Math.pow(O,.5),k=Math.floor(O*270),x=n.current;x&&(x.style.transition="none",x.style.transform=`translateY(${R}px) rotate(${k}deg)`,x.style.opacity=String(Math.min(D,1)))},y=()=>{if(l)if(l=!1,u&&!f){u=!1,f=!0;const b=n.current;b&&(b.classList.add("animate"),b.style.transition="none",b.style.transform=`translateY(${gT}px)`,b.style.opacity="1"),e().finally(()=>{f=!1;const w=n.current;w&&(w.classList.remove("animate"),h(!0))})}else u=!1,h(!0)},_=()=>{l=!1,u=!1,h(!1)};return document.addEventListener("touchstart",p,{passive:!0}),document.addEventListener("touchmove",g,{passive:!0}),document.addEventListener("touchend",y,{passive:!0}),document.addEventListener("touchcancel",_,{passive:!0}),()=>{document.removeEventListener("touchstart",p),document.removeEventListener("touchmove",g),document.removeEventListener("touchend",y),document.removeEventListener("touchcancel",_)}},[e,i]),{swipeRef:t,spinnerRef:n}},Eq=e=>e.filters.selectedDisciplines.length>0||e.filters.selectedInstructors.length>0,xq=e=>e.filters.selectedBookableStatuses,Tq=e=>e.filters.selectedDisciplines,Cq=e=>e.filters.selectedInstructors,Rq=(e,t)=>t,Aq=bi([xq,Tq,Cq,Rq],(e,t,n,i)=>i.filter(a=>e.includes(a.status)).filter(a=>n.length>0?n.some(l=>l===a.instructor.id):!0).filter(a=>t.length>0?t.includes(a.discipline.id):!0)),hD=bi([Ia],e=>{if(e)return ke.STUDIOS[e]}),Iq=bi([Aq,hD],(e,t)=>{if(e.length===0)return[];const n=t?.timezone||"",i=[];let a=1,l=Vo(e[0].start,n,!0),u=[e[0]];for(;a<e.length;){const f=e[a],h=Vo(f.start,n,!0);h===l?u.push(f):(i.push({formattedDate:l,classes:u}),l=h,u=[f]),a++}return u.length>0&&i.push({formattedDate:l,classes:u}),i}),Oo={free:{accentColor:"#2e7d32",buttonBg:"#cb3449",buttonText:"#fff",buttonBorder:"#cb3449",label:"Book"},waitlist:{accentColor:"#e65100",buttonBg:"transparent",buttonText:"#e65100",buttonBorder:"#e65100",label:"Waitlist"},full:{accentColor:"#c4c4c4",buttonBg:"transparent",buttonText:"#aaa",buttonBorder:"#d1d1d1",label:"Full"}},Dq=I.a`
  display: flex;
  align-items: center;
  gap: 14px;
  text-decoration: none;
  color: inherit;
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-left: 4px solid ${e=>Oo[e.$status].accentColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 14px 18px;
  transition: box-shadow 0.15s;
  opacity: ${e=>e.$interactive?1:.55};

  ${e=>e.$interactive&&on`
      cursor: pointer;
      &:hover {
        box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 12px;
      }
    `}

  ${e=>!e.$interactive&&on`
      pointer-events: none;
    `}

  ${Te`
    padding: 10px 12px;
    gap: 10px;
  `}
`,Oq=I.div`
  flex-shrink: 0;
  width: 84px;
  ${Te`
    width: 70px;
  `}
`,Nq=I.div`
  font-weight: 600;
  font-size: 16px;
  color: ${e=>e.theme.colors.main};
  white-space: nowrap;
  ${Te`
    font-size: 13px;
  `}
`,Mq=I.div`
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
  margin-top: 2px;
  ${Te`
    font-size: 11px;
  `}
`,kq=I.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  ${Te`
    display: none;
  `}
`,Lq=I.div`
  flex: 1;
  min-width: 0;
`,Pq=I.div`
  font-size: 16px;
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${Te`
    font-size: 13px;
  `}
`,jq=I.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  margin-top: 3px;
  ${Te`
    font-size: 12px;
  `}
`,Uq=I.span`
  color: ${e=>e.theme.borderColor};
`,$q=I.div`
  display: none;
  ${Te`
    display: flex;
    align-items: center;
  `}
`,zq=I.button`
  flex-shrink: 0;
  border: 1px solid ${e=>Oo[e.$status].buttonBorder};
  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>Oo[e.$status].buttonBg};
  color: ${e=>Oo[e.$status].buttonText};
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
`,Bq=C.memo(({clazz:e})=>{const t=ct(hD),n=e.status,i=n==="free"||n==="waitlist",a=C.useMemo(()=>e.customerUrl?new URL(e.customerUrl,"https://schedule.studio.onepeloton.com").href:(Lv("Missing customer URL",{extra:{clazz:e}}),""),[e]),l=C.useMemo(()=>Ea(e.start,t?.timezone),[e.start,t?.timezone]),u=Oo[n]??Oo.full;return v.jsxs(Dq,{$status:n,$interactive:i,href:a,target:"_blank","aria-label":`${u.label} ${e.name} at ${l}`,children:[v.jsxs(Oq,{children:[v.jsx(Nq,{children:l}),v.jsxs(Mq,{children:[e.duration/60," min"]})]}),v.jsxs(kq,{children:[v.jsx(K_,{instructor:e.instructor,size:44}),v.jsx(mh,{discipline:e.discipline,size:36})]}),v.jsxs(Lq,{children:[v.jsx(Pq,{children:e.name}),v.jsxs(jq,{children:[e.instructor.name,v.jsx(Uq,{children:"·"}),e.discipline.name,v.jsx($q,{children:v.jsx(mh,{discipline:e.discipline,size:20})})]})]}),v.jsx(zq,{$status:n,disabled:!i,tabIndex:-1,children:u.label})]})}),Hq=I.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,Fq=I.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,qq=I.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 0 4px 6px;
  border-bottom: 1px solid ${e=>e.theme.borderColor};
  margin-bottom: 2px;
`,Vq=I.h2`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${e=>e.theme.colors.main};
  margin: 0;
`,yT=I.span`
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
`,Gq=I.div`
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 32px 24px;
  text-align: center;
  ${Te`
    padding: 24px 16px;
  `}
`,Yq=I.p`
  font-size: 16px;
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
  margin: 0 0 8px;
`,vT=I.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  margin: 0;
  line-height: 1.5;
`,Wq=({classes:e,fulfilledTimeStamp:t})=>{const n=ct(u=>Iq(u,e)),i=ct(Eq),a=ct(u=>u.filters.selectedBookableStatuses.includes("free")),l=C.useMemo(()=>t?new Intl.DateTimeFormat(void 0,{hour:"numeric",minute:"numeric"}).format(t):void 0,[t]);return n.length===0?v.jsxs(Gq,{children:[v.jsx(Yq,{children:"No classes found"}),i&&v.jsx(vT,{children:"Try resetting your filters or selecting more options in the sidebar."}),a&&!i&&v.jsx(vT,{children:"New classes usually open at 12:00 pm on Mondays and Thursdays in your studio's timezone."})]}):v.jsx(Hq,{children:n.map((u,f)=>v.jsxs(Fq,{children:[v.jsxs(qq,{children:[v.jsx(Vq,{children:u.formattedDate}),f===0&&l&&v.jsxs(yT,{children:["Times in studio timezone · loaded ",l]}),f===0&&!l&&v.jsx(yT,{children:"All times in studio timezone"})]}),u.classes.map((h,p)=>v.jsx(Bq,{clazz:h},p))]},f))})},_T=I.div`
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 32px 24px;
  text-align: center;
  ${Te`
    padding: 24px 16px;
  `}
`,Qq=I.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  margin: 0;
`,Kq=I.p`
  font-size: 14px;
  color: #d93025;
  margin: 0 0 6px;
`,Xq=I.code`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,Zq=()=>{const e=ct(Ia),{currentData:t,isLoading:n,error:i,fulfilledTimeStamp:a}=JI(e,{refetchOnMountOrArgChange:!0});return i&&!n?v.jsxs(_T,{children:[v.jsx(Kq,{children:"Failed to load classes"}),v.jsx(Xq,{children:d9(i)})]}):!t||n?v.jsx(_T,{children:v.jsx(Qq,{children:"Loading classes…"})}):v.jsx(Wq,{classes:t,fulfilledTimeStamp:a})},Jq=I.div``,pv=300,eV=I.aside`
  max-width: 100%;
  width: ${pv}px;
  top: calc(${j_}px + env(safe-area-inset-top, 0px));
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
`,tV=I.div`
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
`,df=40,nV=I.div`
  padding-top: 10px;
  position: absolute;
  left: 0;
  width: 100%;
  top: -50px;
  text-align: center;
`,rV=I.div`
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
`,iV=I.div`
  display: none;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;

  @media only screen and (max-width: ${e=>e.theme.widths.tablet}px) {
    display: flex;
  }
`,sV=I.button`
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
`,aV=()=>v.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:v.jsx("path",{d:"M1 3h12M3 7h8M5 11h4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),oV=()=>{const{refresh:e}=bq(),{swipeRef:t,spinnerRef:n}=wq({refresh:e}),[i,a]=C.useState(!1);return v.jsx(la,{children:v.jsxs(Jq,{children:[v.jsx(eV,{$toggleVisible:i,children:v.jsx(_q,{onClose:()=>{a(!1)}})}),v.jsxs(tV,{$toggleVisible:i,onClick:()=>{a(!1)},ref:t,children:[v.jsx(nV,{children:v.jsxs(rV,{ref:n,children:[v.jsx("div",{}),v.jsx("div",{}),v.jsx("div",{})]})}),v.jsx(iV,{children:v.jsxs(sV,{type:"button",onClick:l=>{a(!0),l.stopPropagation()},children:[v.jsx(aV,{}),"Filters"]})}),v.jsx(Zq,{})]})]})})},lV=({children:e})=>{const t=ct(el),n=ct(U_);return t.state!=="fulfilled"?null:n?v.jsx(v.Fragment,{children:e}):v.jsx(wv,{to:rt.CLASS_LIST,replace:!0})},bT=e=>{switch(e.code){case"auth/user-not-found":return"No account found with this email address. Please check your email or create a new account.";case"auth/wrong-password":return"Incorrect password. Please try again or reset your password.";case"auth/invalid-email":return"Please enter a valid email address.";case"auth/user-disabled":return"This account has been disabled. Please contact support for assistance.";case"auth/too-many-requests":return"Too many failed login attempts. Please try again later or reset your password.";case"auth/weak-password":return"Password should be at least 6 characters long.";case"auth/email-already-in-use":return"An account with this email already exists. Please sign in instead.";case"auth/invalid-credential":return"Invalid email or password. Please check your credentials and try again.";case"auth/operation-not-allowed":return"This sign-in method is not enabled. Please contact support.";case"auth/account-exists-with-different-credential":return"An account already exists with the same email but different sign-in credentials. Please sign in using the original method.";case"auth/credential-already-in-use":return"This credential is already associated with a different user account.";case"auth/popup-closed-by-user":return"Sign-in was cancelled. Please try again.";case"auth/popup-blocked":return"Pop-up was blocked by your browser. Please allow pop-ups for this site and try again.";case"auth/cancelled-popup-request":return"Sign-in was cancelled. Please try again.";case"auth/network-request-failed":return"Network error occurred. Please check your internet connection and try again.";case"auth/internal-error":return"An internal error occurred. Please try again later.";case"auth/invalid-api-key":return"Configuration error. Please contact support.";case"auth/app-deleted":return"Application error. Please refresh the page and try again.";case"auth/invalid-user-token":return"Your session has expired. Please sign in again.";case"auth/user-token-expired":return"Your session has expired. Please sign in again.";case"auth/null-user":return"No user is currently signed in.";case"auth/requires-recent-login":return"This operation requires recent authentication. Please sign in again.";default:return e.message||"An unexpected error occurred. Please try again."}},cV=I.h1`
  font-size: 26px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
  margin: 0 0 6px;
`,uV=I.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  margin: 0 0 16px;
  line-height: 1.5;
`,dV=I.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,ST=I.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,wT=I.label`
  font-size: 13px;
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
`,ET=I.input`
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
`,fV=I.button`
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
`,hV=I.button`
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
`,pV=I.div`
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
`,mV=I.p`
  margin: 0;
  font-size: 13px;
  color: #d93025;
`,gV=I.p`
  margin: 32px 0 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
`,yV=I.button`
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
`,vV=()=>{const e=Ta(),[t,n]=C.useState(!1),[i,a]=C.useState(""),[l,u]=C.useState(!1),[f,h]=C.useState(""),[p,g]=C.useState(""),y=C.useCallback(async b=>{if(b.preventDefault(),!(!ai||!f||!p)){n(!0),a("");try{l?await pz(ai,f,p):await mz(ai,f,p),e(rt.CLASS_LIST)}catch(w){console.error("Email auth error:",w);const O=w&&typeof w=="object"&&"code"in w?bT(w):"Authentication failed";a(O),Or(w)}finally{n(!1)}}},[f,p,l,e]),_=C.useCallback(async()=>{if(ai){n(!0),a("");try{const b=new si;await Uz(ai,b),e(rt.CLASS_LIST)}catch(b){console.error("Google sign-in error:",b);const w=b&&typeof b=="object"&&"code"in b?bT(b):"Google sign-in failed";a(w),Or(b)}finally{n(!1)}}},[e]);return v.jsxs("div",{children:[v.jsx(cV,{children:l?"Create account":"Sign in"}),v.jsx(uV,{children:"Set alerts, persist filters across devices, and access beta features."}),v.jsxs(dV,{onSubmit:y,children:[v.jsxs(ST,{children:[v.jsx(wT,{htmlFor:"signin-email",children:"Email"}),v.jsx(ET,{id:"signin-email",type:"email",placeholder:"you@example.com",value:f,onChange:b=>h(b.target.value),required:!0,disabled:t})]}),v.jsxs(ST,{children:[v.jsx(wT,{htmlFor:"signin-password",children:"Password"}),v.jsx(ET,{id:"signin-password",type:"password",placeholder:"••••••••",value:p,onChange:b=>g(b.target.value),required:!0,disabled:t})]}),i&&v.jsx(mV,{role:"alert",children:i}),v.jsx(fV,{type:"submit",disabled:t,children:t?"Loading…":l?"Create account":"Sign in"})]}),v.jsx(pV,{style:{marginTop:20,marginBottom:16},children:"or"}),v.jsx(hV,{type:"button",onClick:_,disabled:t,children:"Continue with Google"}),v.jsxs(gV,{children:[l?"Already have an account?":"Don't have an account?"," ",v.jsx(yV,{type:"button",onClick:()=>{u(!l),a("")},disabled:t,children:l?"Sign in":"Create account"})]})]})},_V=bi([el],e=>e.state==="fulfilled"&&!!e.data),bV=I.div`
  padding: 32px 20px;
  display: flex;
  justify-content: center;

  ${Te`
    padding: 16px 12px;
  `}
`,SV=I.div`
  width: 100%;
  max-width: 400px;
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 32px;

  ${Te`
    padding: 24px 20px;
  `}
`,wV=()=>ct(_V)?v.jsx(wv,{to:rt.CLASS_LIST}):v.jsx(la,{children:v.jsx(bV,{children:v.jsx(SV,{children:v.jsx(vV,{})})})});function EV(e){const t=[];for(let n=e-1;n>=0;n--){const i=new Date;i.setDate(i.getDate()-n),t.push(i.toISOString().slice(0,10))}return t}function xV(e=14){const[t,n]=C.useState({state:"idle"});return C.useEffect(()=>{if(!wn){n({state:"failed",error:new Error("No database")});return}n({state:"loading"}),JA(tr(wn,"metrics")).then(i=>{const a=i.val()??{},u=EV(e).map(f=>{const h=a[f]??{},p=h.diffs??{},g={};for(const[_,b]of Object.entries(p))g[_]={added:b.added??0,changed:b.changed??0,removed:b.removed??0};const y=h.notifications??{};return{date:f,diffs:g,notifications:{sent:y.sent??0,failed:y.failed??0,usersReached:y.usersReached??0}}});n({state:"fulfilled",data:u})}).catch(i=>{n({state:"failed",error:i})})},[e]),t}const py=I.div`
  padding: 32px 24px;
  max-width: 900px;
  margin: 0 auto;

  ${Te`
    padding: 20px 16px;
  `}
`,my=I.h1`
  font-size: 22px;
  font-weight: 700;
  color: ${e=>e.theme.colors.main};
  margin: 0 0 28px;
`,xT=I.section`
  margin-bottom: 40px;
`,TT=I.h2`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${e=>e.theme.colors.secondary};
  margin: 0 0 16px;
`,TV=I.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 40px;

  ${Te`
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  `}
`,yo=I.div`
  background: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 16px 20px;
`,vo=I.div`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
  margin-bottom: 4px;
`,_o=I.div`
  font-size: 24px;
  font-weight: 700;
  color: ${e=>e.theme.colors.main};
`,CT=I.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
`,pD=80,CV=I.div`
  background: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 20px 16px 12px;
  overflow-x: auto;
`,RV=I.div`
  display: flex;
  align-items: flex-end;
  gap: 6px;
  min-width: max-content;
`,AV=I.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`,IV=I.div`
  display: flex;
  align-items: flex-end;
  gap: 2px;
  height: ${pD+16}px;
`,DV=I.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`,OV=I.div`
  font-size: 9px;
  font-weight: 600;
  line-height: 1;
  color: ${e=>e.$color};
`,NV=I.div`
  width: 10px;
  height: ${e=>e.$height}px;
  background-color: ${e=>e.$color};
  border-radius: 2px 2px 0 0;
  min-height: 1px;
`,MV=I.div`
  font-size: 10px;
  color: ${e=>e.theme.colors.secondary};
  white-space: nowrap;
`,kV=I.div`
  display: flex;
  gap: 16px;
  margin-top: 12px;
  flex-wrap: wrap;
`,LV=I.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,PV=I.div`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  background-color: ${e=>e.$color};
  flex-shrink: 0;
`;function jV(e){const[,t,n]=e.split("-");return`${parseInt(t)}/${parseInt(n)}`}function RT({days:e,barsForDay:t,legend:n}){const i=e.flatMap(l=>t(l).map(u=>u.value)),a=Math.max(...i,1);return v.jsxs(CV,{children:[v.jsx(RV,{children:e.map(l=>v.jsxs(AV,{children:[v.jsx(IV,{children:t(l).map(u=>v.jsxs(DV,{children:[u.value>0&&v.jsx(OV,{$color:u.color,children:u.value}),v.jsx(NV,{$height:Math.round(u.value/a*pD),$color:u.color})]},u.label))}),v.jsx(MV,{children:jV(l.date)})]},l.date))}),v.jsx(kV,{children:n.map(l=>v.jsxs(LV,{children:[v.jsx(PV,{$color:l.color}),l.label]},l.label))})]})}const Gn={added:"#4ade80",changed:"#facc15",removed:"#f87171",sent:"#60a5fa",failed:"#f87171",usersReached:"#a78bfa"},UV=()=>{const e=xV(14);if(e.state==="idle"||e.state==="loading")return v.jsx(la,{children:v.jsxs(py,{children:[v.jsx(my,{children:"Stats"}),v.jsx(CT,{children:"Loading…"})]})});if(e.state==="failed")return v.jsx(la,{children:v.jsxs(py,{children:[v.jsx(my,{children:"Stats"}),v.jsxs(CT,{children:["Failed to load metrics: ",e.error.message??"unknown error"]})]})});const t=e.data,n=t.reduce((a,l)=>{a.sent+=l.notifications.sent,a.failed+=l.notifications.failed,a.usersReached+=l.notifications.usersReached;for(const u of Object.values(l.diffs))a.added+=u.added,a.changed+=u.changed,a.removed+=u.removed;return a},{sent:0,failed:0,usersReached:0,added:0,changed:0,removed:0}),i=[...new Set(t.flatMap(a=>Object.keys(a.diffs)))];return v.jsx(la,{children:v.jsxs(py,{children:[v.jsx(my,{children:"Stats"}),v.jsxs(TV,{children:[v.jsxs(yo,{children:[v.jsx(vo,{children:"Notifications sent (14d)"}),v.jsx(_o,{children:n.sent.toLocaleString()})]}),v.jsxs(yo,{children:[v.jsx(vo,{children:"Users reached (14d)"}),v.jsx(_o,{children:n.usersReached.toLocaleString()})]}),v.jsxs(yo,{children:[v.jsx(vo,{children:"Delivery failures (14d)"}),v.jsx(_o,{children:n.failed.toLocaleString()})]}),v.jsxs(yo,{children:[v.jsx(vo,{children:"Classes added (14d)"}),v.jsx(_o,{children:n.added.toLocaleString()})]}),v.jsxs(yo,{children:[v.jsx(vo,{children:"Classes changed (14d)"}),v.jsx(_o,{children:n.changed.toLocaleString()})]}),v.jsxs(yo,{children:[v.jsx(vo,{children:"Classes removed (14d)"}),v.jsx(_o,{children:n.removed.toLocaleString()})]})]}),v.jsxs(xT,{children:[v.jsx(TT,{children:"Push notifications (14 days)"}),v.jsx(RT,{days:t,barsForDay:a=>[{value:a.notifications.sent,color:Gn.sent,label:"Sent"},{value:a.notifications.failed,color:Gn.failed,label:"Failed"},{value:a.notifications.usersReached,color:Gn.usersReached,label:"Users reached"}],legend:[{color:Gn.sent,label:"Sent"},{color:Gn.failed,label:"Failed"},{color:Gn.usersReached,label:"Users reached"}]})]}),i.map(a=>v.jsxs(xT,{children:[v.jsxs(TT,{children:["Schedule changes — ",ke.STUDIOS[a]?.location??a," (14 days)"]}),v.jsx(RT,{days:t,barsForDay:l=>{const u=l.diffs[a]??{added:0,changed:0,removed:0};return[{value:u.added,color:Gn.added,label:"Added"},{value:u.changed,color:Gn.changed,label:"Changed"},{value:u.removed,color:Gn.removed,label:"Removed"}]},legend:[{color:Gn.added,label:"Added"},{color:Gn.changed,label:"Changed"},{color:Gn.removed,label:"Removed"}]})]},a))]})})},$V=Jk(Dk(v.jsxs(ar,{children:[v.jsx(ar,{path:rt.CLASS_LIST,element:v.jsx(oV,{})}),v.jsxs(ar,{path:rt.ALERTS,element:v.jsx(y7,{}),children:[v.jsx(ar,{index:!0,element:v.jsx(NF,{})}),v.jsx(ar,{path:"edit",element:v.jsx(n7,{})}),v.jsx(ar,{path:":alertId/test",element:v.jsx(KB,{})})]}),v.jsx(ar,{path:rt.SIGN_IN,element:v.jsx(wV,{})}),v.jsx(ar,{path:rt.ABOUT,element:v.jsx(gB,{})}),v.jsx(ar,{path:rt.STATS,element:v.jsx(lV,{children:v.jsx(UV,{})})}),v.jsx(ar,{path:"*",element:v.jsx(wv,{to:rt.CLASS_LIST,replace:!0})})]}))),zV=(e,t)=>({id:e.uid,displayName:e.displayName||e.email||"",isAdmin:t}),BV={state:"idle"},mD=Ar({name:"session",initialState:BV,reducers:{setLoading(e){return{state:"loading"}},setSession(e,t){return{state:"fulfilled",data:t.payload}},removeSession(e){return{state:"fulfilled",data:null}}}}),{setLoading:AT,setSession:HV,removeSession:IT}=mD.actions,FV=mD.reducer,qV=({children:e})=>{const t=gs();return C.useEffect(()=>{if(t(AT()),!ai)return t(IT()),()=>{};const n=vz(ai,async i=>{if(t(AT()),i){let a=!1;try{a=(wn?await JA(tr(wn,`admins/${i.uid}`)):null)?.val()===!0}catch{}t(HV(zV(i,a)))}else t(IT())});return()=>n()},[t]),v.jsx(v.Fragment,{children:e})},VV={alerts:[]},gD=Ar({name:"alerts",initialState:VV,reducers:{addAlert(e,t){e.alerts.push(t.payload)},setAlerts(e,t){e.alerts=t.payload},removeAlerts(e){e.alerts=[]}}}),{addAlert:XV,setAlerts:ZV,removeAlerts:JV}=gD.actions,GV=gD.reducer,YV=Nj({reducer:{alerts:GV,filters:qF,session:FV,[Af.reducerPath]:Af.reducer,[av.name]:av.reducer},middleware:e=>e().concat(Af.middleware)}),WV={borderRadius:"8px",borderColor:"#d1d1d1",colors:{main:"#494f59",secondary:"#514e60",mainSurface:"#fff",secondarySurface:"#ededed",accent:"#cb3449"},widths:{tablet:1024,mobile:560}};function QV(){return C.useEffect(()=>{const t=new URLSearchParams(window.location.search).get("classUrl");t&&(window.history.replaceState(null,"",window.location.pathname+window.location.hash),window.location.assign(t))},[]),v.jsx(fL,{theme:WV,children:v.jsx(YN,{store:YV,children:v.jsx(qV,{children:v.jsx(g$,{children:v.jsx(d2,{router:$V})})})})})}ON.createRoot(document.getElementById("root")).render(v.jsx(C.StrictMode,{children:v.jsx(QV,{})}));
//# sourceMappingURL=index-DXlG3P2b.js.map
