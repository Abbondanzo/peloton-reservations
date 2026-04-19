(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();function vN(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ig={exports:{}},Xl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D1;function _N(){if(D1)return Xl;D1=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(i,a,l){var u=null;if(l!==void 0&&(u=""+l),a.key!==void 0&&(u=""+a.key),"key"in a){l={};for(var f in a)f!=="key"&&(l[f]=a[f])}else l=a;return a=l.ref,{$$typeof:e,type:i,key:u,ref:a!==void 0?a:null,props:l}}return Xl.Fragment=t,Xl.jsx=n,Xl.jsxs=n,Xl}var O1;function bN(){return O1||(O1=1,ig.exports=_N()),ig.exports}var _=bN(),sg={exports:{}},Pe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N1;function SN(){if(N1)return Pe;N1=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function v(O){return O===null||typeof O!="object"?null:(O=y&&O[y]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,D={};function C(O,X,le){this.props=O,this.context=X,this.refs=D,this.updater=le||S}C.prototype.isReactComponent={},C.prototype.setState=function(O,X){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,X,"setState")},C.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function I(){}I.prototype=C.prototype;function k(O,X,le){this.props=O,this.context=X,this.refs=D,this.updater=le||S}var x=k.prototype=new I;x.constructor=k,w(x,C.prototype),x.isPureReactComponent=!0;var A=Array.isArray,N={H:null,A:null,T:null,S:null,V:null},T=Object.prototype.hasOwnProperty;function P(O,X,le,ie,de,me){return le=me.ref,{$$typeof:e,type:O,key:X,ref:le!==void 0?le:null,props:me}}function V(O,X){return P(O.type,X,void 0,void 0,void 0,O.props)}function H(O){return typeof O=="object"&&O!==null&&O.$$typeof===e}function B(O){var X={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(le){return X[le]})}var $=/\/+/g;function G(O,X){return typeof O=="object"&&O!==null&&O.key!=null?B(""+O.key):X.toString(36)}function F(){}function K(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(F,F):(O.status="pending",O.then(function(X){O.status==="pending"&&(O.status="fulfilled",O.value=X)},function(X){O.status==="pending"&&(O.status="rejected",O.reason=X)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function ue(O,X,le,ie,de){var me=typeof O;(me==="undefined"||me==="boolean")&&(O=null);var pe=!1;if(O===null)pe=!0;else switch(me){case"bigint":case"string":case"number":pe=!0;break;case"object":switch(O.$$typeof){case e:case t:pe=!0;break;case g:return pe=O._init,ue(pe(O._payload),X,le,ie,de)}}if(pe)return de=de(O),pe=ie===""?"."+G(O,0):ie,A(de)?(le="",pe!=null&&(le=pe.replace($,"$&/")+"/"),ue(de,X,le,"",function(De){return De})):de!=null&&(H(de)&&(de=V(de,le+(de.key==null||O&&O.key===de.key?"":(""+de.key).replace($,"$&/")+"/")+pe)),X.push(de)),1;pe=0;var Ae=ie===""?".":ie+":";if(A(O))for(var be=0;be<O.length;be++)ie=O[be],me=Ae+G(ie,be),pe+=ue(ie,X,le,me,de);else if(be=v(O),typeof be=="function")for(O=be.call(O),be=0;!(ie=O.next()).done;)ie=ie.value,me=Ae+G(ie,be++),pe+=ue(ie,X,le,me,de);else if(me==="object"){if(typeof O.then=="function")return ue(K(O),X,le,ie,de);throw X=String(O),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return pe}function U(O,X,le){if(O==null)return O;var ie=[],de=0;return ue(O,ie,"","",function(me){return X.call(le,me,de++)}),ie}function ee(O){if(O._status===-1){var X=O._result;X=X(),X.then(function(le){(O._status===0||O._status===-1)&&(O._status=1,O._result=le)},function(le){(O._status===0||O._status===-1)&&(O._status=2,O._result=le)}),O._status===-1&&(O._status=0,O._result=X)}if(O._status===1)return O._result.default;throw O._result}var ne=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function oe(){}return Pe.Children={map:U,forEach:function(O,X,le){U(O,function(){X.apply(this,arguments)},le)},count:function(O){var X=0;return U(O,function(){X++}),X},toArray:function(O){return U(O,function(X){return X})||[]},only:function(O){if(!H(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Pe.Component=C,Pe.Fragment=n,Pe.Profiler=a,Pe.PureComponent=k,Pe.StrictMode=i,Pe.Suspense=h,Pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,Pe.__COMPILER_RUNTIME={__proto__:null,c:function(O){return N.H.useMemoCache(O)}},Pe.cache=function(O){return function(){return O.apply(null,arguments)}},Pe.cloneElement=function(O,X,le){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var ie=w({},O.props),de=O.key,me=void 0;if(X!=null)for(pe in X.ref!==void 0&&(me=void 0),X.key!==void 0&&(de=""+X.key),X)!T.call(X,pe)||pe==="key"||pe==="__self"||pe==="__source"||pe==="ref"&&X.ref===void 0||(ie[pe]=X[pe]);var pe=arguments.length-2;if(pe===1)ie.children=le;else if(1<pe){for(var Ae=Array(pe),be=0;be<pe;be++)Ae[be]=arguments[be+2];ie.children=Ae}return P(O.type,de,void 0,void 0,me,ie)},Pe.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:l,_context:O},O},Pe.createElement=function(O,X,le){var ie,de={},me=null;if(X!=null)for(ie in X.key!==void 0&&(me=""+X.key),X)T.call(X,ie)&&ie!=="key"&&ie!=="__self"&&ie!=="__source"&&(de[ie]=X[ie]);var pe=arguments.length-2;if(pe===1)de.children=le;else if(1<pe){for(var Ae=Array(pe),be=0;be<pe;be++)Ae[be]=arguments[be+2];de.children=Ae}if(O&&O.defaultProps)for(ie in pe=O.defaultProps,pe)de[ie]===void 0&&(de[ie]=pe[ie]);return P(O,me,void 0,void 0,null,de)},Pe.createRef=function(){return{current:null}},Pe.forwardRef=function(O){return{$$typeof:f,render:O}},Pe.isValidElement=H,Pe.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:ee}},Pe.memo=function(O,X){return{$$typeof:p,type:O,compare:X===void 0?null:X}},Pe.startTransition=function(O){var X=N.T,le={};N.T=le;try{var ie=O(),de=N.S;de!==null&&de(le,ie),typeof ie=="object"&&ie!==null&&typeof ie.then=="function"&&ie.then(oe,ne)}catch(me){ne(me)}finally{N.T=X}},Pe.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},Pe.use=function(O){return N.H.use(O)},Pe.useActionState=function(O,X,le){return N.H.useActionState(O,X,le)},Pe.useCallback=function(O,X){return N.H.useCallback(O,X)},Pe.useContext=function(O){return N.H.useContext(O)},Pe.useDebugValue=function(){},Pe.useDeferredValue=function(O,X){return N.H.useDeferredValue(O,X)},Pe.useEffect=function(O,X,le){var ie=N.H;if(typeof le=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ie.useEffect(O,X)},Pe.useId=function(){return N.H.useId()},Pe.useImperativeHandle=function(O,X,le){return N.H.useImperativeHandle(O,X,le)},Pe.useInsertionEffect=function(O,X){return N.H.useInsertionEffect(O,X)},Pe.useLayoutEffect=function(O,X){return N.H.useLayoutEffect(O,X)},Pe.useMemo=function(O,X){return N.H.useMemo(O,X)},Pe.useOptimistic=function(O,X){return N.H.useOptimistic(O,X)},Pe.useReducer=function(O,X,le){return N.H.useReducer(O,X,le)},Pe.useRef=function(O){return N.H.useRef(O)},Pe.useState=function(O){return N.H.useState(O)},Pe.useSyncExternalStore=function(O,X,le){return N.H.useSyncExternalStore(O,X,le)},Pe.useTransition=function(){return N.H.useTransition()},Pe.version="19.1.1",Pe}var M1;function mh(){return M1||(M1=1,sg.exports=SN()),sg.exports}var R=mh();const oa=vN(R);var ag={exports:{}},Zl={},og={exports:{}},lg={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k1;function wN(){return k1||(k1=1,(function(e){function t(U,ee){var ne=U.length;U.push(ee);e:for(;0<ne;){var oe=ne-1>>>1,O=U[oe];if(0<a(O,ee))U[oe]=ee,U[ne]=O,ne=oe;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var ee=U[0],ne=U.pop();if(ne!==ee){U[0]=ne;e:for(var oe=0,O=U.length,X=O>>>1;oe<X;){var le=2*(oe+1)-1,ie=U[le],de=le+1,me=U[de];if(0>a(ie,ne))de<O&&0>a(me,ie)?(U[oe]=me,U[de]=ne,oe=de):(U[oe]=ie,U[le]=ne,oe=le);else if(de<O&&0>a(me,ne))U[oe]=me,U[de]=ne,oe=de;else break e}}return ee}function a(U,ee){var ne=U.sortIndex-ee.sortIndex;return ne!==0?ne:U.id-ee.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();e.unstable_now=function(){return u.now()-f}}var h=[],p=[],g=1,y=null,v=3,S=!1,w=!1,D=!1,C=!1,I=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;function A(U){for(var ee=n(p);ee!==null;){if(ee.callback===null)i(p);else if(ee.startTime<=U)i(p),ee.sortIndex=ee.expirationTime,t(h,ee);else break;ee=n(p)}}function N(U){if(D=!1,A(U),!w)if(n(h)!==null)w=!0,T||(T=!0,G());else{var ee=n(p);ee!==null&&ue(N,ee.startTime-U)}}var T=!1,P=-1,V=5,H=-1;function B(){return C?!0:!(e.unstable_now()-H<V)}function $(){if(C=!1,T){var U=e.unstable_now();H=U;var ee=!0;try{e:{w=!1,D&&(D=!1,k(P),P=-1),S=!0;var ne=v;try{t:{for(A(U),y=n(h);y!==null&&!(y.expirationTime>U&&B());){var oe=y.callback;if(typeof oe=="function"){y.callback=null,v=y.priorityLevel;var O=oe(y.expirationTime<=U);if(U=e.unstable_now(),typeof O=="function"){y.callback=O,A(U),ee=!0;break t}y===n(h)&&i(h),A(U)}else i(h);y=n(h)}if(y!==null)ee=!0;else{var X=n(p);X!==null&&ue(N,X.startTime-U),ee=!1}}break e}finally{y=null,v=ne,S=!1}ee=void 0}}finally{ee?G():T=!1}}}var G;if(typeof x=="function")G=function(){x($)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,K=F.port2;F.port1.onmessage=$,G=function(){K.postMessage(null)}}else G=function(){I($,0)};function ue(U,ee){P=I(function(){U(e.unstable_now())},ee)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(U){U.callback=null},e.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<U?Math.floor(1e3/U):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_next=function(U){switch(v){case 1:case 2:case 3:var ee=3;break;default:ee=v}var ne=v;v=ee;try{return U()}finally{v=ne}},e.unstable_requestPaint=function(){C=!0},e.unstable_runWithPriority=function(U,ee){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var ne=v;v=U;try{return ee()}finally{v=ne}},e.unstable_scheduleCallback=function(U,ee,ne){var oe=e.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?oe+ne:oe):ne=oe,U){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=ne+O,U={id:g++,callback:ee,priorityLevel:U,startTime:ne,expirationTime:O,sortIndex:-1},ne>oe?(U.sortIndex=ne,t(p,U),n(h)===null&&U===n(p)&&(D?(k(P),P=-1):D=!0,ue(N,ne-oe))):(U.sortIndex=O,t(h,U),w||S||(w=!0,T||(T=!0,G()))),U},e.unstable_shouldYield=B,e.unstable_wrapCallback=function(U){var ee=v;return function(){var ne=v;v=ee;try{return U.apply(this,arguments)}finally{v=ne}}}})(lg)),lg}var L1;function EN(){return L1||(L1=1,og.exports=wN()),og.exports}var cg={exports:{}},rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P1;function xN(){if(P1)return rn;P1=1;var e=mh();function t(h){var p="https://react.dev/errors/"+h;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+h+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var i={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(h,p,g){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:y==null?null:""+y,children:h,containerInfo:p,implementation:g}}var u=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(h,p){if(h==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,rn.createPortal=function(h,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return l(h,p,null,g)},rn.flushSync=function(h){var p=u.T,g=i.p;try{if(u.T=null,i.p=2,h)return h()}finally{u.T=p,i.p=g,i.d.f()}},rn.preconnect=function(h,p){typeof h=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,i.d.C(h,p))},rn.prefetchDNS=function(h){typeof h=="string"&&i.d.D(h)},rn.preinit=function(h,p){if(typeof h=="string"&&p&&typeof p.as=="string"){var g=p.as,y=f(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?i.d.S(h,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:y,integrity:v,fetchPriority:S}):g==="script"&&i.d.X(h,{crossOrigin:y,integrity:v,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},rn.preinitModule=function(h,p){if(typeof h=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=f(p.as,p.crossOrigin);i.d.M(h,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&i.d.M(h)},rn.preload=function(h,p){if(typeof h=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,y=f(g,p.crossOrigin);i.d.L(h,g,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},rn.preloadModule=function(h,p){if(typeof h=="string")if(p){var g=f(p.as,p.crossOrigin);i.d.m(h,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else i.d.m(h)},rn.requestFormReset=function(h){i.d.r(h)},rn.unstable_batchedUpdates=function(h,p){return h(p)},rn.useFormState=function(h,p,g){return u.H.useFormState(h,p,g)},rn.useFormStatus=function(){return u.H.useHostTransitionStatus()},rn.version="19.1.1",rn}var j1;function wT(){if(j1)return cg.exports;j1=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),cg.exports=xN(),cg.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U1;function TN(){if(U1)return Zl;U1=1;var e=EN(),t=mh(),n=wT();function i(r){var s="https://react.dev/errors/"+r;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function l(r){var s=r,o=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(o=s.return),r=s.return;while(r)}return s.tag===3?o:null}function u(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function f(r){if(l(r)!==r)throw Error(i(188))}function h(r){var s=r.alternate;if(!s){if(s=l(r),s===null)throw Error(i(188));return s!==r?null:r}for(var o=r,c=s;;){var d=o.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){o=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===o)return f(d),r;if(m===c)return f(d),s;m=m.sibling}throw Error(i(188))}if(o.return!==c.return)o=d,c=m;else{for(var b=!1,E=d.child;E;){if(E===o){b=!0,o=d,c=m;break}if(E===c){b=!0,c=d,o=m;break}E=E.sibling}if(!b){for(E=m.child;E;){if(E===o){b=!0,o=m,c=d;break}if(E===c){b=!0,c=m,o=d;break}E=E.sibling}if(!b)throw Error(i(189))}}if(o.alternate!==c)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?r:s}function p(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r;for(r=r.child;r!==null;){if(s=p(r),s!==null)return s;r=r.sibling}return null}var g=Object.assign,y=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),I=Symbol.for("react.provider"),k=Symbol.for("react.consumer"),x=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),T=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),H=Symbol.for("react.activity"),B=Symbol.for("react.memo_cache_sentinel"),$=Symbol.iterator;function G(r){return r===null||typeof r!="object"?null:(r=$&&r[$]||r["@@iterator"],typeof r=="function"?r:null)}var F=Symbol.for("react.client.reference");function K(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===F?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case w:return"Fragment";case C:return"Profiler";case D:return"StrictMode";case N:return"Suspense";case T:return"SuspenseList";case H:return"Activity"}if(typeof r=="object")switch(r.$$typeof){case S:return"Portal";case x:return(r.displayName||"Context")+".Provider";case k:return(r._context.displayName||"Context")+".Consumer";case A:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case P:return s=r.displayName||null,s!==null?s:K(r.type)||"Memo";case V:s=r._payload,r=r._init;try{return K(r(s))}catch{}}return null}var ue=Array.isArray,U=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},oe=[],O=-1;function X(r){return{current:r}}function le(r){0>O||(r.current=oe[O],oe[O]=null,O--)}function ie(r,s){O++,oe[O]=r.current,r.current=s}var de=X(null),me=X(null),pe=X(null),Ae=X(null);function be(r,s){switch(ie(pe,s),ie(me,r),ie(de,null),s.nodeType){case 9:case 11:r=(r=s.documentElement)&&(r=r.namespaceURI)?i1(r):0;break;default:if(r=s.tagName,s=s.namespaceURI)s=i1(s),r=s1(s,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}le(de),ie(de,r)}function De(){le(de),le(me),le(pe)}function Ue(r){r.memoizedState!==null&&ie(Ae,r);var s=de.current,o=s1(s,r.type);s!==o&&(ie(me,r),ie(de,o))}function _t(r){me.current===r&&(le(de),le(me)),Ae.current===r&&(le(Ae),Gl._currentValue=ne)}var gt=Object.prototype.hasOwnProperty,kn=e.unstable_scheduleCallback,Et=e.unstable_cancelCallback,Ln=e.unstable_shouldYield,Lr=e.unstable_requestPaint,Yt=e.unstable_now,tl=e.unstable_getCurrentPriorityLevel,bs=e.unstable_ImmediatePriority,Ra=e.unstable_UserBlockingPriority,Aa=e.unstable_NormalPriority,Pr=e.unstable_LowPriority,wi=e.unstable_IdlePriority,xu=e.log,nl=e.unstable_setDisableYieldValue,hn=null,bt=null;function er(r){if(typeof xu=="function"&&nl(r),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(hn,r)}catch{}}var Qt=Math.clz32?Math.clz32:Tu,ep=Math.log,vr=Math.LN2;function Tu(r){return r>>>=0,r===0?32:31-(ep(r)/vr|0)|0}var Ss=256,ws=4194304;function jr(r){var s=r&42;if(s!==0)return s;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return r}}function Es(r,s,o){var c=r.pendingLanes;if(c===0)return 0;var d=0,m=r.suspendedLanes,b=r.pingedLanes;r=r.warmLanes;var E=c&134217727;return E!==0?(c=E&~m,c!==0?d=jr(c):(b&=E,b!==0?d=jr(b):o||(o=E&~r,o!==0&&(d=jr(o))))):(E=c&~m,E!==0?d=jr(E):b!==0?d=jr(b):o||(o=c&~r,o!==0&&(d=jr(o)))),d===0?0:s!==0&&s!==d&&(s&m)===0&&(m=d&-d,o=s&-s,m>=o||m===32&&(o&4194048)!==0)?s:d}function _r(r,s){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&s)===0}function Cu(r,s){switch(r){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ia(){var r=Ss;return Ss<<=1,(Ss&4194048)===0&&(Ss=256),r}function Ru(){var r=ws;return ws<<=1,(ws&62914560)===0&&(ws=4194304),r}function Da(r){for(var s=[],o=0;31>o;o++)s.push(r);return s}function xs(r,s){r.pendingLanes|=s,s!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function Au(r,s,o,c,d,m){var b=r.pendingLanes;r.pendingLanes=o,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=o,r.entangledLanes&=o,r.errorRecoveryDisabledLanes&=o,r.shellSuspendCounter=0;var E=r.entanglements,L=r.expirationTimes,W=r.hiddenUpdates;for(o=b&~o;0<o;){var re=31-Qt(o),ae=1<<re;E[re]=0,L[re]=-1;var Z=W[re];if(Z!==null)for(W[re]=null,re=0;re<Z.length;re++){var J=Z[re];J!==null&&(J.lane&=-536870913)}o&=~ae}c!==0&&Ts(r,c,0),m!==0&&d===0&&r.tag!==0&&(r.suspendedLanes|=m&~(b&~s))}function Ts(r,s,o){r.pendingLanes|=s,r.suspendedLanes&=~s;var c=31-Qt(s);r.entangledLanes|=s,r.entanglements[c]=r.entanglements[c]|1073741824|o&4194090}function Cs(r,s){var o=r.entangledLanes|=s;for(r=r.entanglements;o;){var c=31-Qt(o),d=1<<c;d&s|r[c]&s&&(r[c]|=s),o&=~d}}function rl(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function il(r){return r&=-r,2<r?8<r?(r&134217727)!==0?32:268435456:8:2}function j(){var r=ee.p;return r!==0?r:(r=window.event,r===void 0?32:x1(r.type))}function Y(r,s){var o=ee.p;try{return ee.p=r,s()}finally{ee.p=o}}var te=Math.random().toString(36).slice(2),ce="__reactFiber$"+te,fe="__reactProps$"+te,ye="__reactContainer$"+te,we="__reactEvents$"+te,ve="__reactListeners$"+te,xe="__reactHandles$"+te,Te="__reactResources$"+te,_e="__reactMarker$"+te;function Se(r){delete r[ce],delete r[fe],delete r[we],delete r[ve],delete r[xe]}function ze(r){var s=r[ce];if(s)return s;for(var o=r.parentNode;o;){if(s=o[ye]||o[ce]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(r=c1(r);r!==null;){if(o=r[ce])return o;r=c1(r)}return s}r=o,o=r.parentNode}return null}function Ze(r){if(r=r[ce]||r[ye]){var s=r.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return r}return null}function yt(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r.stateNode;throw Error(i(33))}function xt(r){var s=r[Te];return s||(s=r[Te]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function ke(r){r[_e]=!0}var it=new Set,br={};function wn(r,s){ln(r,s),ln(r+"Capture",s)}function ln(r,s){for(br[r]=s,r=0;r<s.length;r++)it.add(s[r])}var Pn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Oa={},Ei={};function Ur(r){return gt.call(Ei,r)?!0:gt.call(Oa,r)?!1:Pn.test(r)?Ei[r]=!0:(Oa[r]=!0,!1)}function zr(r,s,o){if(Ur(s))if(o===null)r.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":r.removeAttribute(s);return;case"boolean":var c=s.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){r.removeAttribute(s);return}}r.setAttribute(s,""+o)}}function $r(r,s,o){if(o===null)r.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(s);return}r.setAttribute(s,""+o)}}function Le(r,s,o,c){if(c===null)r.removeAttribute(o);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(o);return}r.setAttributeNS(s,o,""+c)}}var Nt,Br;function pn(r){if(Nt===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);Nt=s&&s[1]||"",Br=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Nt+r+Br}var St=!1;function xi(r,s){if(!r||St)return"";St=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(s){var ae=function(){throw Error()};if(Object.defineProperty(ae.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ae,[])}catch(J){var Z=J}Reflect.construct(r,[],ae)}else{try{ae.call()}catch(J){Z=J}r.call(ae.prototype)}}else{try{throw Error()}catch(J){Z=J}(ae=r())&&typeof ae.catch=="function"&&ae.catch(function(){})}}catch(J){if(J&&Z&&typeof J.stack=="string")return[J.stack,Z.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=c.DetermineComponentFrameRoot(),b=m[0],E=m[1];if(b&&E){var L=b.split(`
`),W=E.split(`
`);for(d=c=0;c<L.length&&!L[c].includes("DetermineComponentFrameRoot");)c++;for(;d<W.length&&!W[d].includes("DetermineComponentFrameRoot");)d++;if(c===L.length||d===W.length)for(c=L.length-1,d=W.length-1;1<=c&&0<=d&&L[c]!==W[d];)d--;for(;1<=c&&0<=d;c--,d--)if(L[c]!==W[d]){if(c!==1||d!==1)do if(c--,d--,0>d||L[c]!==W[d]){var re=`
`+L[c].replace(" at new "," at ");return r.displayName&&re.includes("<anonymous>")&&(re=re.replace("<anonymous>",r.displayName)),re}while(1<=c&&0<=d);break}}}finally{St=!1,Error.prepareStackTrace=o}return(o=r?r.displayName||r.name:"")?pn(o):""}function Iu(r){switch(r.tag){case 26:case 27:case 5:return pn(r.type);case 16:return pn("Lazy");case 13:return pn("Suspense");case 19:return pn("SuspenseList");case 0:case 15:return xi(r.type,!1);case 11:return xi(r.type.render,!1);case 1:return xi(r.type,!0);case 31:return pn("Activity");default:return""}}function Du(r){try{var s="";do s+=Iu(r),r=r.return;while(r);return s}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function jn(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function J_(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function hD(r){var s=J_(r)?"checked":"value",o=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),c=""+r[s];if(!r.hasOwnProperty(s)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,m=o.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return d.call(this)},set:function(b){c=""+b,m.call(this,b)}}),Object.defineProperty(r,s,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(b){c=""+b},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function Ou(r){r._valueTracker||(r._valueTracker=hD(r))}function eb(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var o=s.getValue(),c="";return r&&(c=J_(r)?r.checked?"true":"false":r.value),r=c,r!==o?(s.setValue(r),!0):!1}function Nu(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}var pD=/[\n"\\]/g;function Un(r){return r.replace(pD,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function tp(r,s,o,c,d,m,b,E){r.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?r.type=b:r.removeAttribute("type"),s!=null?b==="number"?(s===0&&r.value===""||r.value!=s)&&(r.value=""+jn(s)):r.value!==""+jn(s)&&(r.value=""+jn(s)):b!=="submit"&&b!=="reset"||r.removeAttribute("value"),s!=null?np(r,b,jn(s)):o!=null?np(r,b,jn(o)):c!=null&&r.removeAttribute("value"),d==null&&m!=null&&(r.defaultChecked=!!m),d!=null&&(r.checked=d&&typeof d!="function"&&typeof d!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?r.name=""+jn(E):r.removeAttribute("name")}function tb(r,s,o,c,d,m,b,E){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(r.type=m),s!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||s!=null))return;o=o!=null?""+jn(o):"",s=s!=null?""+jn(s):o,E||s===r.value||(r.value=s),r.defaultValue=s}c=c??d,c=typeof c!="function"&&typeof c!="symbol"&&!!c,r.checked=E?r.checked:!!c,r.defaultChecked=!!c,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(r.name=b)}function np(r,s,o){s==="number"&&Nu(r.ownerDocument)===r||r.defaultValue===""+o||(r.defaultValue=""+o)}function Na(r,s,o,c){if(r=r.options,s){s={};for(var d=0;d<o.length;d++)s["$"+o[d]]=!0;for(o=0;o<r.length;o++)d=s.hasOwnProperty("$"+r[o].value),r[o].selected!==d&&(r[o].selected=d),d&&c&&(r[o].defaultSelected=!0)}else{for(o=""+jn(o),s=null,d=0;d<r.length;d++){if(r[d].value===o){r[d].selected=!0,c&&(r[d].defaultSelected=!0);return}s!==null||r[d].disabled||(s=r[d])}s!==null&&(s.selected=!0)}}function nb(r,s,o){if(s!=null&&(s=""+jn(s),s!==r.value&&(r.value=s),o==null)){r.defaultValue!==s&&(r.defaultValue=s);return}r.defaultValue=o!=null?""+jn(o):""}function rb(r,s,o,c){if(s==null){if(c!=null){if(o!=null)throw Error(i(92));if(ue(c)){if(1<c.length)throw Error(i(93));c=c[0]}o=c}o==null&&(o=""),s=o}o=jn(s),r.defaultValue=o,c=r.textContent,c===o&&c!==""&&c!==null&&(r.value=c)}function Ma(r,s){if(s){var o=r.firstChild;if(o&&o===r.lastChild&&o.nodeType===3){o.nodeValue=s;return}}r.textContent=s}var mD=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ib(r,s,o){var c=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?c?r.setProperty(s,""):s==="float"?r.cssFloat="":r[s]="":c?r.setProperty(s,o):typeof o!="number"||o===0||mD.has(s)?s==="float"?r.cssFloat=o:r[s]=(""+o).trim():r[s]=o+"px"}function sb(r,s,o){if(s!=null&&typeof s!="object")throw Error(i(62));if(r=r.style,o!=null){for(var c in o)!o.hasOwnProperty(c)||s!=null&&s.hasOwnProperty(c)||(c.indexOf("--")===0?r.setProperty(c,""):c==="float"?r.cssFloat="":r[c]="");for(var d in s)c=s[d],s.hasOwnProperty(d)&&o[d]!==c&&ib(r,d,c)}else for(var m in s)s.hasOwnProperty(m)&&ib(r,m,s[m])}function rp(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gD=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),yD=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Mu(r){return yD.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}var ip=null;function sp(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var ka=null,La=null;function ab(r){var s=Ze(r);if(s&&(r=s.stateNode)){var o=r[fe]||null;e:switch(r=s.stateNode,s.type){case"input":if(tp(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=r;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Un(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var c=o[s];if(c!==r&&c.form===r.form){var d=c[fe]||null;if(!d)throw Error(i(90));tp(c,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(s=0;s<o.length;s++)c=o[s],c.form===r.form&&eb(c)}break e;case"textarea":nb(r,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&Na(r,!!o.multiple,s,!1)}}}var ap=!1;function ob(r,s,o){if(ap)return r(s,o);ap=!0;try{var c=r(s);return c}finally{if(ap=!1,(ka!==null||La!==null)&&(vd(),ka&&(s=ka,r=La,La=ka=null,ab(s),r)))for(s=0;s<r.length;s++)ab(r[s])}}function sl(r,s){var o=r.stateNode;if(o===null)return null;var c=o[fe]||null;if(c===null)return null;o=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(o&&typeof o!="function")throw Error(i(231,s,typeof o));return o}var Hr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),op=!1;if(Hr)try{var al={};Object.defineProperty(al,"passive",{get:function(){op=!0}}),window.addEventListener("test",al,al),window.removeEventListener("test",al,al)}catch{op=!1}var Ti=null,lp=null,ku=null;function lb(){if(ku)return ku;var r,s=lp,o=s.length,c,d="value"in Ti?Ti.value:Ti.textContent,m=d.length;for(r=0;r<o&&s[r]===d[r];r++);var b=o-r;for(c=1;c<=b&&s[o-c]===d[m-c];c++);return ku=d.slice(r,1<c?1-c:void 0)}function Lu(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Pu(){return!0}function cb(){return!1}function mn(r){function s(o,c,d,m,b){this._reactName=o,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var E in r)r.hasOwnProperty(E)&&(o=r[E],this[E]=o?o(m):m[E]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Pu:cb,this.isPropagationStopped=cb,this}return g(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Pu)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Pu)},persist:function(){},isPersistent:Pu}),s}var Rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ju=mn(Rs),ol=g({},Rs,{view:0,detail:0}),vD=mn(ol),cp,up,ll,Uu=g({},ol,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fp,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ll&&(ll&&r.type==="mousemove"?(cp=r.screenX-ll.screenX,up=r.screenY-ll.screenY):up=cp=0,ll=r),cp)},movementY:function(r){return"movementY"in r?r.movementY:up}}),ub=mn(Uu),_D=g({},Uu,{dataTransfer:0}),bD=mn(_D),SD=g({},ol,{relatedTarget:0}),dp=mn(SD),wD=g({},Rs,{animationName:0,elapsedTime:0,pseudoElement:0}),ED=mn(wD),xD=g({},Rs,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),TD=mn(xD),CD=g({},Rs,{data:0}),db=mn(CD),RD={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},AD={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ID={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function DD(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=ID[r])?!!s[r]:!1}function fp(){return DD}var OD=g({},ol,{key:function(r){if(r.key){var s=RD[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Lu(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?AD[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fp,charCode:function(r){return r.type==="keypress"?Lu(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Lu(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),ND=mn(OD),MD=g({},Uu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fb=mn(MD),kD=g({},ol,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fp}),LD=mn(kD),PD=g({},Rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),jD=mn(PD),UD=g({},Uu,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),zD=mn(UD),$D=g({},Rs,{newState:0,oldState:0}),BD=mn($D),HD=[9,13,27,32],hp=Hr&&"CompositionEvent"in window,cl=null;Hr&&"documentMode"in document&&(cl=document.documentMode);var FD=Hr&&"TextEvent"in window&&!cl,hb=Hr&&(!hp||cl&&8<cl&&11>=cl),pb=" ",mb=!1;function gb(r,s){switch(r){case"keyup":return HD.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yb(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Pa=!1;function qD(r,s){switch(r){case"compositionend":return yb(s);case"keypress":return s.which!==32?null:(mb=!0,pb);case"textInput":return r=s.data,r===pb&&mb?null:r;default:return null}}function VD(r,s){if(Pa)return r==="compositionend"||!hp&&gb(r,s)?(r=lb(),ku=lp=Ti=null,Pa=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return hb&&s.locale!=="ko"?null:s.data;default:return null}}var GD={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vb(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!GD[r.type]:s==="textarea"}function _b(r,s,o,c){ka?La?La.push(c):La=[c]:ka=c,s=xd(s,"onChange"),0<s.length&&(o=new ju("onChange","change",null,o,c),r.push({event:o,listeners:s}))}var ul=null,dl=null;function YD(r){JS(r,0)}function zu(r){var s=yt(r);if(eb(s))return r}function bb(r,s){if(r==="change")return s}var Sb=!1;if(Hr){var pp;if(Hr){var mp="oninput"in document;if(!mp){var wb=document.createElement("div");wb.setAttribute("oninput","return;"),mp=typeof wb.oninput=="function"}pp=mp}else pp=!1;Sb=pp&&(!document.documentMode||9<document.documentMode)}function Eb(){ul&&(ul.detachEvent("onpropertychange",xb),dl=ul=null)}function xb(r){if(r.propertyName==="value"&&zu(dl)){var s=[];_b(s,dl,r,sp(r)),ob(YD,s)}}function QD(r,s,o){r==="focusin"?(Eb(),ul=s,dl=o,ul.attachEvent("onpropertychange",xb)):r==="focusout"&&Eb()}function WD(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return zu(dl)}function KD(r,s){if(r==="click")return zu(s)}function XD(r,s){if(r==="input"||r==="change")return zu(s)}function ZD(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var En=typeof Object.is=="function"?Object.is:ZD;function fl(r,s){if(En(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var o=Object.keys(r),c=Object.keys(s);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var d=o[c];if(!gt.call(s,d)||!En(r[d],s[d]))return!1}return!0}function Tb(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Cb(r,s){var o=Tb(r);r=0;for(var c;o;){if(o.nodeType===3){if(c=r+o.textContent.length,r<=s&&c>=s)return{node:o,offset:s-r};r=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Tb(o)}}function Rb(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?Rb(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Ab(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var s=Nu(r.document);s instanceof r.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)r=s.contentWindow;else break;s=Nu(r.document)}return s}function gp(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}var JD=Hr&&"documentMode"in document&&11>=document.documentMode,ja=null,yp=null,hl=null,vp=!1;function Ib(r,s,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;vp||ja==null||ja!==Nu(c)||(c=ja,"selectionStart"in c&&gp(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),hl&&fl(hl,c)||(hl=c,c=xd(yp,"onSelect"),0<c.length&&(s=new ju("onSelect","select",null,s,o),r.push({event:s,listeners:c}),s.target=ja)))}function As(r,s){var o={};return o[r.toLowerCase()]=s.toLowerCase(),o["Webkit"+r]="webkit"+s,o["Moz"+r]="moz"+s,o}var Ua={animationend:As("Animation","AnimationEnd"),animationiteration:As("Animation","AnimationIteration"),animationstart:As("Animation","AnimationStart"),transitionrun:As("Transition","TransitionRun"),transitionstart:As("Transition","TransitionStart"),transitioncancel:As("Transition","TransitionCancel"),transitionend:As("Transition","TransitionEnd")},_p={},Db={};Hr&&(Db=document.createElement("div").style,"AnimationEvent"in window||(delete Ua.animationend.animation,delete Ua.animationiteration.animation,delete Ua.animationstart.animation),"TransitionEvent"in window||delete Ua.transitionend.transition);function Is(r){if(_p[r])return _p[r];if(!Ua[r])return r;var s=Ua[r],o;for(o in s)if(s.hasOwnProperty(o)&&o in Db)return _p[r]=s[o];return r}var Ob=Is("animationend"),Nb=Is("animationiteration"),Mb=Is("animationstart"),eO=Is("transitionrun"),tO=Is("transitionstart"),nO=Is("transitioncancel"),kb=Is("transitionend"),Lb=new Map,bp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bp.push("scrollEnd");function tr(r,s){Lb.set(r,s),wn(s,[r])}var Pb=new WeakMap;function zn(r,s){if(typeof r=="object"&&r!==null){var o=Pb.get(r);return o!==void 0?o:(s={value:r,source:s,stack:Du(s)},Pb.set(r,s),s)}return{value:r,source:s,stack:Du(s)}}var $n=[],za=0,Sp=0;function $u(){for(var r=za,s=Sp=za=0;s<r;){var o=$n[s];$n[s++]=null;var c=$n[s];$n[s++]=null;var d=$n[s];$n[s++]=null;var m=$n[s];if($n[s++]=null,c!==null&&d!==null){var b=c.pending;b===null?d.next=d:(d.next=b.next,b.next=d),c.pending=d}m!==0&&jb(o,d,m)}}function Bu(r,s,o,c){$n[za++]=r,$n[za++]=s,$n[za++]=o,$n[za++]=c,Sp|=c,r.lanes|=c,r=r.alternate,r!==null&&(r.lanes|=c)}function wp(r,s,o,c){return Bu(r,s,o,c),Hu(r)}function $a(r,s){return Bu(r,null,null,s),Hu(r)}function jb(r,s,o){r.lanes|=o;var c=r.alternate;c!==null&&(c.lanes|=o);for(var d=!1,m=r.return;m!==null;)m.childLanes|=o,c=m.alternate,c!==null&&(c.childLanes|=o),m.tag===22&&(r=m.stateNode,r===null||r._visibility&1||(d=!0)),r=m,m=m.return;return r.tag===3?(m=r.stateNode,d&&s!==null&&(d=31-Qt(o),r=m.hiddenUpdates,c=r[d],c===null?r[d]=[s]:c.push(s),s.lane=o|536870912),m):null}function Hu(r){if(50<Ul)throw Ul=0,Am=null,Error(i(185));for(var s=r.return;s!==null;)r=s,s=r.return;return r.tag===3?r.stateNode:null}var Ba={};function rO(r,s,o,c){this.tag=r,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xn(r,s,o,c){return new rO(r,s,o,c)}function Ep(r){return r=r.prototype,!(!r||!r.isReactComponent)}function Fr(r,s){var o=r.alternate;return o===null?(o=xn(r.tag,s,r.key,r.mode),o.elementType=r.elementType,o.type=r.type,o.stateNode=r.stateNode,o.alternate=r,r.alternate=o):(o.pendingProps=s,o.type=r.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=r.flags&65011712,o.childLanes=r.childLanes,o.lanes=r.lanes,o.child=r.child,o.memoizedProps=r.memoizedProps,o.memoizedState=r.memoizedState,o.updateQueue=r.updateQueue,s=r.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=r.sibling,o.index=r.index,o.ref=r.ref,o.refCleanup=r.refCleanup,o}function Ub(r,s){r.flags&=65011714;var o=r.alternate;return o===null?(r.childLanes=0,r.lanes=s,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,r.type=o.type,s=o.dependencies,r.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),r}function Fu(r,s,o,c,d,m){var b=0;if(c=r,typeof r=="function")Ep(r)&&(b=1);else if(typeof r=="string")b=sN(r,o,de.current)?26:r==="html"||r==="head"||r==="body"?27:5;else e:switch(r){case H:return r=xn(31,o,s,d),r.elementType=H,r.lanes=m,r;case w:return Ds(o.children,d,m,s);case D:b=8,d|=24;break;case C:return r=xn(12,o,s,d|2),r.elementType=C,r.lanes=m,r;case N:return r=xn(13,o,s,d),r.elementType=N,r.lanes=m,r;case T:return r=xn(19,o,s,d),r.elementType=T,r.lanes=m,r;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case I:case x:b=10;break e;case k:b=9;break e;case A:b=11;break e;case P:b=14;break e;case V:b=16,c=null;break e}b=29,o=Error(i(130,r===null?"null":typeof r,"")),c=null}return s=xn(b,o,s,d),s.elementType=r,s.type=c,s.lanes=m,s}function Ds(r,s,o,c){return r=xn(7,r,c,s),r.lanes=o,r}function xp(r,s,o){return r=xn(6,r,null,s),r.lanes=o,r}function Tp(r,s,o){return s=xn(4,r.children!==null?r.children:[],r.key,s),s.lanes=o,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}var Ha=[],Fa=0,qu=null,Vu=0,Bn=[],Hn=0,Os=null,qr=1,Vr="";function Ns(r,s){Ha[Fa++]=Vu,Ha[Fa++]=qu,qu=r,Vu=s}function zb(r,s,o){Bn[Hn++]=qr,Bn[Hn++]=Vr,Bn[Hn++]=Os,Os=r;var c=qr;r=Vr;var d=32-Qt(c)-1;c&=~(1<<d),o+=1;var m=32-Qt(s)+d;if(30<m){var b=d-d%5;m=(c&(1<<b)-1).toString(32),c>>=b,d-=b,qr=1<<32-Qt(s)+d|o<<d|c,Vr=m+r}else qr=1<<m|o<<d|c,Vr=r}function Cp(r){r.return!==null&&(Ns(r,1),zb(r,1,0))}function Rp(r){for(;r===qu;)qu=Ha[--Fa],Ha[Fa]=null,Vu=Ha[--Fa],Ha[Fa]=null;for(;r===Os;)Os=Bn[--Hn],Bn[Hn]=null,Vr=Bn[--Hn],Bn[Hn]=null,qr=Bn[--Hn],Bn[Hn]=null}var cn=null,Tt=null,Je=!1,Ms=null,Sr=!1,Ap=Error(i(519));function ks(r){var s=Error(i(418,""));throw gl(zn(s,r)),Ap}function $b(r){var s=r.stateNode,o=r.type,c=r.memoizedProps;switch(s[ce]=r,s[fe]=c,o){case"dialog":Ge("cancel",s),Ge("close",s);break;case"iframe":case"object":case"embed":Ge("load",s);break;case"video":case"audio":for(o=0;o<$l.length;o++)Ge($l[o],s);break;case"source":Ge("error",s);break;case"img":case"image":case"link":Ge("error",s),Ge("load",s);break;case"details":Ge("toggle",s);break;case"input":Ge("invalid",s),tb(s,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),Ou(s);break;case"select":Ge("invalid",s);break;case"textarea":Ge("invalid",s),rb(s,c.value,c.defaultValue,c.children),Ou(s)}o=c.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||c.suppressHydrationWarning===!0||r1(s.textContent,o)?(c.popover!=null&&(Ge("beforetoggle",s),Ge("toggle",s)),c.onScroll!=null&&Ge("scroll",s),c.onScrollEnd!=null&&Ge("scrollend",s),c.onClick!=null&&(s.onclick=Td),s=!0):s=!1,s||ks(r)}function Bb(r){for(cn=r.return;cn;)switch(cn.tag){case 5:case 13:Sr=!1;return;case 27:case 3:Sr=!0;return;default:cn=cn.return}}function pl(r){if(r!==cn)return!1;if(!Je)return Bb(r),Je=!0,!1;var s=r.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=r.type,o=!(o!=="form"&&o!=="button")||qm(r.type,r.memoizedProps)),o=!o),o&&Tt&&ks(r),Bb(r),s===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(i(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8)if(o=r.data,o==="/$"){if(s===0){Tt=rr(r.nextSibling);break e}s--}else o!=="$"&&o!=="$!"&&o!=="$?"||s++;r=r.nextSibling}Tt=null}}else s===27?(s=Tt,Bi(r.type)?(r=Qm,Qm=null,Tt=r):Tt=s):Tt=cn?rr(r.stateNode.nextSibling):null;return!0}function ml(){Tt=cn=null,Je=!1}function Hb(){var r=Ms;return r!==null&&(vn===null?vn=r:vn.push.apply(vn,r),Ms=null),r}function gl(r){Ms===null?Ms=[r]:Ms.push(r)}var Ip=X(null),Ls=null,Gr=null;function Ci(r,s,o){ie(Ip,s._currentValue),s._currentValue=o}function Yr(r){r._currentValue=Ip.current,le(Ip)}function Dp(r,s,o){for(;r!==null;){var c=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),r===o)break;r=r.return}}function Op(r,s,o,c){var d=r.child;for(d!==null&&(d.return=r);d!==null;){var m=d.dependencies;if(m!==null){var b=d.child;m=m.firstContext;e:for(;m!==null;){var E=m;m=d;for(var L=0;L<s.length;L++)if(E.context===s[L]){m.lanes|=o,E=m.alternate,E!==null&&(E.lanes|=o),Dp(m.return,o,r),c||(b=null);break e}m=E.next}}else if(d.tag===18){if(b=d.return,b===null)throw Error(i(341));b.lanes|=o,m=b.alternate,m!==null&&(m.lanes|=o),Dp(b,o,r),b=null}else b=d.child;if(b!==null)b.return=d;else for(b=d;b!==null;){if(b===r){b=null;break}if(d=b.sibling,d!==null){d.return=b.return,b=d;break}b=b.return}d=b}}function yl(r,s,o,c){r=null;for(var d=s,m=!1;d!==null;){if(!m){if((d.flags&524288)!==0)m=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var b=d.alternate;if(b===null)throw Error(i(387));if(b=b.memoizedProps,b!==null){var E=d.type;En(d.pendingProps.value,b.value)||(r!==null?r.push(E):r=[E])}}else if(d===Ae.current){if(b=d.alternate,b===null)throw Error(i(387));b.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(r!==null?r.push(Gl):r=[Gl])}d=d.return}r!==null&&Op(s,r,o,c),s.flags|=262144}function Gu(r){for(r=r.firstContext;r!==null;){if(!En(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function Ps(r){Ls=r,Gr=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function nn(r){return Fb(Ls,r)}function Yu(r,s){return Ls===null&&Ps(r),Fb(r,s)}function Fb(r,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},Gr===null){if(r===null)throw Error(i(308));Gr=s,r.dependencies={lanes:0,firstContext:s},r.flags|=524288}else Gr=Gr.next=s;return o}var iO=typeof AbortController<"u"?AbortController:function(){var r=[],s=this.signal={aborted:!1,addEventListener:function(o,c){r.push(c)}};this.abort=function(){s.aborted=!0,r.forEach(function(o){return o()})}},sO=e.unstable_scheduleCallback,aO=e.unstable_NormalPriority,Pt={$$typeof:x,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Np(){return{controller:new iO,data:new Map,refCount:0}}function vl(r){r.refCount--,r.refCount===0&&sO(aO,function(){r.controller.abort()})}var _l=null,Mp=0,qa=0,Va=null;function oO(r,s){if(_l===null){var o=_l=[];Mp=0,qa=Lm(),Va={status:"pending",value:void 0,then:function(c){o.push(c)}}}return Mp++,s.then(qb,qb),s}function qb(){if(--Mp===0&&_l!==null){Va!==null&&(Va.status="fulfilled");var r=_l;_l=null,qa=0,Va=null;for(var s=0;s<r.length;s++)(0,r[s])()}}function lO(r,s){var o=[],c={status:"pending",value:null,reason:null,then:function(d){o.push(d)}};return r.then(function(){c.status="fulfilled",c.value=s;for(var d=0;d<o.length;d++)(0,o[d])(s)},function(d){for(c.status="rejected",c.reason=d,d=0;d<o.length;d++)(0,o[d])(void 0)}),c}var Vb=U.S;U.S=function(r,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&oO(r,s),Vb!==null&&Vb(r,s)};var js=X(null);function kp(){var r=js.current;return r!==null?r:ft.pooledCache}function Qu(r,s){s===null?ie(js,js.current):ie(js,s.pool)}function Gb(){var r=kp();return r===null?null:{parent:Pt._currentValue,pool:r}}var bl=Error(i(460)),Yb=Error(i(474)),Wu=Error(i(542)),Lp={then:function(){}};function Qb(r){return r=r.status,r==="fulfilled"||r==="rejected"}function Ku(){}function Wb(r,s,o){switch(o=r[o],o===void 0?r.push(s):o!==s&&(s.then(Ku,Ku),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,Xb(r),r;default:if(typeof s.status=="string")s.then(Ku,Ku);else{if(r=ft,r!==null&&100<r.shellSuspendCounter)throw Error(i(482));r=s,r.status="pending",r.then(function(c){if(s.status==="pending"){var d=s;d.status="fulfilled",d.value=c}},function(c){if(s.status==="pending"){var d=s;d.status="rejected",d.reason=c}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,Xb(r),r}throw Sl=s,bl}}var Sl=null;function Kb(){if(Sl===null)throw Error(i(459));var r=Sl;return Sl=null,r}function Xb(r){if(r===bl||r===Wu)throw Error(i(483))}var Ri=!1;function Pp(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function jp(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function Ai(r){return{lane:r,tag:0,payload:null,callback:null,next:null}}function Ii(r,s,o){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,(tt&2)!==0){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,s=Hu(r),jb(r,null,o),s}return Bu(r,c,s,o),Hu(r)}function wl(r,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var c=s.lanes;c&=r.pendingLanes,o|=c,s.lanes=o,Cs(r,o)}}function Up(r,s){var o=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var d=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var b={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?d=m=b:m=m.next=b,o=o.next}while(o!==null);m===null?d=m=s:m=m.next=s}else d=m=s;o={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,callbacks:c.callbacks},r.updateQueue=o;return}r=o.lastBaseUpdate,r===null?o.firstBaseUpdate=s:r.next=s,o.lastBaseUpdate=s}var zp=!1;function El(){if(zp){var r=Va;if(r!==null)throw r}}function xl(r,s,o,c){zp=!1;var d=r.updateQueue;Ri=!1;var m=d.firstBaseUpdate,b=d.lastBaseUpdate,E=d.shared.pending;if(E!==null){d.shared.pending=null;var L=E,W=L.next;L.next=null,b===null?m=W:b.next=W,b=L;var re=r.alternate;re!==null&&(re=re.updateQueue,E=re.lastBaseUpdate,E!==b&&(E===null?re.firstBaseUpdate=W:E.next=W,re.lastBaseUpdate=L))}if(m!==null){var ae=d.baseState;b=0,re=W=L=null,E=m;do{var Z=E.lane&-536870913,J=Z!==E.lane;if(J?(We&Z)===Z:(c&Z)===Z){Z!==0&&Z===qa&&(zp=!0),re!==null&&(re=re.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});e:{var Me=r,Ce=E;Z=s;var ot=o;switch(Ce.tag){case 1:if(Me=Ce.payload,typeof Me=="function"){ae=Me.call(ot,ae,Z);break e}ae=Me;break e;case 3:Me.flags=Me.flags&-65537|128;case 0:if(Me=Ce.payload,Z=typeof Me=="function"?Me.call(ot,ae,Z):Me,Z==null)break e;ae=g({},ae,Z);break e;case 2:Ri=!0}}Z=E.callback,Z!==null&&(r.flags|=64,J&&(r.flags|=8192),J=d.callbacks,J===null?d.callbacks=[Z]:J.push(Z))}else J={lane:Z,tag:E.tag,payload:E.payload,callback:E.callback,next:null},re===null?(W=re=J,L=ae):re=re.next=J,b|=Z;if(E=E.next,E===null){if(E=d.shared.pending,E===null)break;J=E,E=J.next,J.next=null,d.lastBaseUpdate=J,d.shared.pending=null}}while(!0);re===null&&(L=ae),d.baseState=L,d.firstBaseUpdate=W,d.lastBaseUpdate=re,m===null&&(d.shared.lanes=0),ji|=b,r.lanes=b,r.memoizedState=ae}}function Zb(r,s){if(typeof r!="function")throw Error(i(191,r));r.call(s)}function Jb(r,s){var o=r.callbacks;if(o!==null)for(r.callbacks=null,r=0;r<o.length;r++)Zb(o[r],s)}var Ga=X(null),Xu=X(0);function e0(r,s){r=ei,ie(Xu,r),ie(Ga,s),ei=r|s.baseLanes}function $p(){ie(Xu,ei),ie(Ga,Ga.current)}function Bp(){ei=Xu.current,le(Ga),le(Xu)}var Di=0,Be=null,st=null,Mt=null,Zu=!1,Ya=!1,Us=!1,Ju=0,Tl=0,Qa=null,cO=0;function Dt(){throw Error(i(321))}function Hp(r,s){if(s===null)return!1;for(var o=0;o<s.length&&o<r.length;o++)if(!En(r[o],s[o]))return!1;return!0}function Fp(r,s,o,c,d,m){return Di=m,Be=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,U.H=r===null||r.memoizedState===null?j0:U0,Us=!1,m=o(c,d),Us=!1,Ya&&(m=n0(s,o,c,d)),t0(r),m}function t0(r){U.H=sd;var s=st!==null&&st.next!==null;if(Di=0,Mt=st=Be=null,Zu=!1,Tl=0,Qa=null,s)throw Error(i(300));r===null||$t||(r=r.dependencies,r!==null&&Gu(r)&&($t=!0))}function n0(r,s,o,c){Be=r;var d=0;do{if(Ya&&(Qa=null),Tl=0,Ya=!1,25<=d)throw Error(i(301));if(d+=1,Mt=st=null,r.updateQueue!=null){var m=r.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}U.H=gO,m=s(o,c)}while(Ya);return m}function uO(){var r=U.H,s=r.useState()[0];return s=typeof s.then=="function"?Cl(s):s,r=r.useState()[0],(st!==null?st.memoizedState:null)!==r&&(Be.flags|=1024),s}function qp(){var r=Ju!==0;return Ju=0,r}function Vp(r,s,o){s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~o}function Gp(r){if(Zu){for(r=r.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Zu=!1}Di=0,Mt=st=Be=null,Ya=!1,Tl=Ju=0,Qa=null}function gn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mt===null?Be.memoizedState=Mt=r:Mt=Mt.next=r,Mt}function kt(){if(st===null){var r=Be.alternate;r=r!==null?r.memoizedState:null}else r=st.next;var s=Mt===null?Be.memoizedState:Mt.next;if(s!==null)Mt=s,st=r;else{if(r===null)throw Be.alternate===null?Error(i(467)):Error(i(310));st=r,r={memoizedState:st.memoizedState,baseState:st.baseState,baseQueue:st.baseQueue,queue:st.queue,next:null},Mt===null?Be.memoizedState=Mt=r:Mt=Mt.next=r}return Mt}function Yp(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Cl(r){var s=Tl;return Tl+=1,Qa===null&&(Qa=[]),r=Wb(Qa,r,s),s=Be,(Mt===null?s.memoizedState:Mt.next)===null&&(s=s.alternate,U.H=s===null||s.memoizedState===null?j0:U0),r}function ed(r){if(r!==null&&typeof r=="object"){if(typeof r.then=="function")return Cl(r);if(r.$$typeof===x)return nn(r)}throw Error(i(438,String(r)))}function Qp(r){var s=null,o=Be.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var c=Be.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(s={data:c.data.map(function(d){return d.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=Yp(),Be.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(r),c=0;c<r;c++)o[c]=B;return s.index++,o}function Qr(r,s){return typeof s=="function"?s(r):s}function td(r){var s=kt();return Wp(s,st,r)}function Wp(r,s,o){var c=r.queue;if(c===null)throw Error(i(311));c.lastRenderedReducer=o;var d=r.baseQueue,m=c.pending;if(m!==null){if(d!==null){var b=d.next;d.next=m.next,m.next=b}s.baseQueue=d=m,c.pending=null}if(m=r.baseState,d===null)r.memoizedState=m;else{s=d.next;var E=b=null,L=null,W=s,re=!1;do{var ae=W.lane&-536870913;if(ae!==W.lane?(We&ae)===ae:(Di&ae)===ae){var Z=W.revertLane;if(Z===0)L!==null&&(L=L.next={lane:0,revertLane:0,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),ae===qa&&(re=!0);else if((Di&Z)===Z){W=W.next,Z===qa&&(re=!0);continue}else ae={lane:0,revertLane:W.revertLane,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},L===null?(E=L=ae,b=m):L=L.next=ae,Be.lanes|=Z,ji|=Z;ae=W.action,Us&&o(m,ae),m=W.hasEagerState?W.eagerState:o(m,ae)}else Z={lane:ae,revertLane:W.revertLane,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},L===null?(E=L=Z,b=m):L=L.next=Z,Be.lanes|=ae,ji|=ae;W=W.next}while(W!==null&&W!==s);if(L===null?b=m:L.next=E,!En(m,r.memoizedState)&&($t=!0,re&&(o=Va,o!==null)))throw o;r.memoizedState=m,r.baseState=b,r.baseQueue=L,c.lastRenderedState=m}return d===null&&(c.lanes=0),[r.memoizedState,c.dispatch]}function Kp(r){var s=kt(),o=s.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=r;var c=o.dispatch,d=o.pending,m=s.memoizedState;if(d!==null){o.pending=null;var b=d=d.next;do m=r(m,b.action),b=b.next;while(b!==d);En(m,s.memoizedState)||($t=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),o.lastRenderedState=m}return[m,c]}function r0(r,s,o){var c=Be,d=kt(),m=Je;if(m){if(o===void 0)throw Error(i(407));o=o()}else o=s();var b=!En((st||d).memoizedState,o);b&&(d.memoizedState=o,$t=!0),d=d.queue;var E=a0.bind(null,c,d,r);if(Rl(2048,8,E,[r]),d.getSnapshot!==s||b||Mt!==null&&Mt.memoizedState.tag&1){if(c.flags|=2048,Wa(9,nd(),s0.bind(null,c,d,o,s),null),ft===null)throw Error(i(349));m||(Di&124)!==0||i0(c,s,o)}return o}function i0(r,s,o){r.flags|=16384,r={getSnapshot:s,value:o},s=Be.updateQueue,s===null?(s=Yp(),Be.updateQueue=s,s.stores=[r]):(o=s.stores,o===null?s.stores=[r]:o.push(r))}function s0(r,s,o,c){s.value=o,s.getSnapshot=c,o0(s)&&l0(r)}function a0(r,s,o){return o(function(){o0(s)&&l0(r)})}function o0(r){var s=r.getSnapshot;r=r.value;try{var o=s();return!En(r,o)}catch{return!0}}function l0(r){var s=$a(r,2);s!==null&&In(s,r,2)}function Xp(r){var s=gn();if(typeof r=="function"){var o=r;if(r=o(),Us){er(!0);try{o()}finally{er(!1)}}}return s.memoizedState=s.baseState=r,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qr,lastRenderedState:r},s}function c0(r,s,o,c){return r.baseState=o,Wp(r,st,typeof c=="function"?c:Qr)}function dO(r,s,o,c,d){if(id(r))throw Error(i(485));if(r=s.action,r!==null){var m={payload:d,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){m.listeners.push(b)}};U.T!==null?o(!0):m.isTransition=!1,c(m),o=s.pending,o===null?(m.next=s.pending=m,u0(s,m)):(m.next=o.next,s.pending=o.next=m)}}function u0(r,s){var o=s.action,c=s.payload,d=r.state;if(s.isTransition){var m=U.T,b={};U.T=b;try{var E=o(d,c),L=U.S;L!==null&&L(b,E),d0(r,s,E)}catch(W){Zp(r,s,W)}finally{U.T=m}}else try{m=o(d,c),d0(r,s,m)}catch(W){Zp(r,s,W)}}function d0(r,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(c){f0(r,s,c)},function(c){return Zp(r,s,c)}):f0(r,s,o)}function f0(r,s,o){s.status="fulfilled",s.value=o,h0(s),r.state=o,s=r.pending,s!==null&&(o=s.next,o===s?r.pending=null:(o=o.next,s.next=o,u0(r,o)))}function Zp(r,s,o){var c=r.pending;if(r.pending=null,c!==null){c=c.next;do s.status="rejected",s.reason=o,h0(s),s=s.next;while(s!==c)}r.action=null}function h0(r){r=r.listeners;for(var s=0;s<r.length;s++)(0,r[s])()}function p0(r,s){return s}function m0(r,s){if(Je){var o=ft.formState;if(o!==null){e:{var c=Be;if(Je){if(Tt){t:{for(var d=Tt,m=Sr;d.nodeType!==8;){if(!m){d=null;break t}if(d=rr(d.nextSibling),d===null){d=null;break t}}m=d.data,d=m==="F!"||m==="F"?d:null}if(d){Tt=rr(d.nextSibling),c=d.data==="F!";break e}}ks(c)}c=!1}c&&(s=o[0])}}return o=gn(),o.memoizedState=o.baseState=s,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:p0,lastRenderedState:s},o.queue=c,o=k0.bind(null,Be,c),c.dispatch=o,c=Xp(!1),m=rm.bind(null,Be,!1,c.queue),c=gn(),d={state:s,dispatch:null,action:r,pending:null},c.queue=d,o=dO.bind(null,Be,d,m,o),d.dispatch=o,c.memoizedState=r,[s,o,!1]}function g0(r){var s=kt();return y0(s,st,r)}function y0(r,s,o){if(s=Wp(r,s,p0)[0],r=td(Qr)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var c=Cl(s)}catch(b){throw b===bl?Wu:b}else c=s;s=kt();var d=s.queue,m=d.dispatch;return o!==s.memoizedState&&(Be.flags|=2048,Wa(9,nd(),fO.bind(null,d,o),null)),[c,m,r]}function fO(r,s){r.action=s}function v0(r){var s=kt(),o=st;if(o!==null)return y0(s,o,r);kt(),s=s.memoizedState,o=kt();var c=o.queue.dispatch;return o.memoizedState=r,[s,c,!1]}function Wa(r,s,o,c){return r={tag:r,create:o,deps:c,inst:s,next:null},s=Be.updateQueue,s===null&&(s=Yp(),Be.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=r.next=r:(c=o.next,o.next=r,r.next=c,s.lastEffect=r),r}function nd(){return{destroy:void 0,resource:void 0}}function _0(){return kt().memoizedState}function rd(r,s,o,c){var d=gn();c=c===void 0?null:c,Be.flags|=r,d.memoizedState=Wa(1|s,nd(),o,c)}function Rl(r,s,o,c){var d=kt();c=c===void 0?null:c;var m=d.memoizedState.inst;st!==null&&c!==null&&Hp(c,st.memoizedState.deps)?d.memoizedState=Wa(s,m,o,c):(Be.flags|=r,d.memoizedState=Wa(1|s,m,o,c))}function b0(r,s){rd(8390656,8,r,s)}function S0(r,s){Rl(2048,8,r,s)}function w0(r,s){return Rl(4,2,r,s)}function E0(r,s){return Rl(4,4,r,s)}function x0(r,s){if(typeof s=="function"){r=r();var o=s(r);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function T0(r,s,o){o=o!=null?o.concat([r]):null,Rl(4,4,x0.bind(null,s,r),o)}function Jp(){}function C0(r,s){var o=kt();s=s===void 0?null:s;var c=o.memoizedState;return s!==null&&Hp(s,c[1])?c[0]:(o.memoizedState=[r,s],r)}function R0(r,s){var o=kt();s=s===void 0?null:s;var c=o.memoizedState;if(s!==null&&Hp(s,c[1]))return c[0];if(c=r(),Us){er(!0);try{r()}finally{er(!1)}}return o.memoizedState=[c,s],c}function em(r,s,o){return o===void 0||(Di&1073741824)!==0?r.memoizedState=s:(r.memoizedState=o,r=DS(),Be.lanes|=r,ji|=r,o)}function A0(r,s,o,c){return En(o,s)?o:Ga.current!==null?(r=em(r,o,c),En(r,s)||($t=!0),r):(Di&42)===0?($t=!0,r.memoizedState=o):(r=DS(),Be.lanes|=r,ji|=r,s)}function I0(r,s,o,c,d){var m=ee.p;ee.p=m!==0&&8>m?m:8;var b=U.T,E={};U.T=E,rm(r,!1,s,o);try{var L=d(),W=U.S;if(W!==null&&W(E,L),L!==null&&typeof L=="object"&&typeof L.then=="function"){var re=lO(L,c);Al(r,s,re,An(r))}else Al(r,s,c,An(r))}catch(ae){Al(r,s,{then:function(){},status:"rejected",reason:ae},An())}finally{ee.p=m,U.T=b}}function hO(){}function tm(r,s,o,c){if(r.tag!==5)throw Error(i(476));var d=D0(r).queue;I0(r,d,s,ne,o===null?hO:function(){return O0(r),o(c)})}function D0(r){var s=r.memoizedState;if(s!==null)return s;s={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qr,lastRenderedState:ne},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qr,lastRenderedState:o},next:null},r.memoizedState=s,r=r.alternate,r!==null&&(r.memoizedState=s),s}function O0(r){var s=D0(r).next.queue;Al(r,s,{},An())}function nm(){return nn(Gl)}function N0(){return kt().memoizedState}function M0(){return kt().memoizedState}function pO(r){for(var s=r.return;s!==null;){switch(s.tag){case 24:case 3:var o=An();r=Ai(o);var c=Ii(s,r,o);c!==null&&(In(c,s,o),wl(c,s,o)),s={cache:Np()},r.payload=s;return}s=s.return}}function mO(r,s,o){var c=An();o={lane:c,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},id(r)?L0(s,o):(o=wp(r,s,o,c),o!==null&&(In(o,r,c),P0(o,s,c)))}function k0(r,s,o){var c=An();Al(r,s,o,c)}function Al(r,s,o,c){var d={lane:c,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(id(r))L0(s,d);else{var m=r.alternate;if(r.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var b=s.lastRenderedState,E=m(b,o);if(d.hasEagerState=!0,d.eagerState=E,En(E,b))return Bu(r,s,d,0),ft===null&&$u(),!1}catch{}finally{}if(o=wp(r,s,d,c),o!==null)return In(o,r,c),P0(o,s,c),!0}return!1}function rm(r,s,o,c){if(c={lane:2,revertLane:Lm(),action:c,hasEagerState:!1,eagerState:null,next:null},id(r)){if(s)throw Error(i(479))}else s=wp(r,o,c,2),s!==null&&In(s,r,2)}function id(r){var s=r.alternate;return r===Be||s!==null&&s===Be}function L0(r,s){Ya=Zu=!0;var o=r.pending;o===null?s.next=s:(s.next=o.next,o.next=s),r.pending=s}function P0(r,s,o){if((o&4194048)!==0){var c=s.lanes;c&=r.pendingLanes,o|=c,s.lanes=o,Cs(r,o)}}var sd={readContext:nn,use:ed,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useLayoutEffect:Dt,useInsertionEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useSyncExternalStore:Dt,useId:Dt,useHostTransitionStatus:Dt,useFormState:Dt,useActionState:Dt,useOptimistic:Dt,useMemoCache:Dt,useCacheRefresh:Dt},j0={readContext:nn,use:ed,useCallback:function(r,s){return gn().memoizedState=[r,s===void 0?null:s],r},useContext:nn,useEffect:b0,useImperativeHandle:function(r,s,o){o=o!=null?o.concat([r]):null,rd(4194308,4,x0.bind(null,s,r),o)},useLayoutEffect:function(r,s){return rd(4194308,4,r,s)},useInsertionEffect:function(r,s){rd(4,2,r,s)},useMemo:function(r,s){var o=gn();s=s===void 0?null:s;var c=r();if(Us){er(!0);try{r()}finally{er(!1)}}return o.memoizedState=[c,s],c},useReducer:function(r,s,o){var c=gn();if(o!==void 0){var d=o(s);if(Us){er(!0);try{o(s)}finally{er(!1)}}}else d=s;return c.memoizedState=c.baseState=d,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:d},c.queue=r,r=r.dispatch=mO.bind(null,Be,r),[c.memoizedState,r]},useRef:function(r){var s=gn();return r={current:r},s.memoizedState=r},useState:function(r){r=Xp(r);var s=r.queue,o=k0.bind(null,Be,s);return s.dispatch=o,[r.memoizedState,o]},useDebugValue:Jp,useDeferredValue:function(r,s){var o=gn();return em(o,r,s)},useTransition:function(){var r=Xp(!1);return r=I0.bind(null,Be,r.queue,!0,!1),gn().memoizedState=r,[!1,r]},useSyncExternalStore:function(r,s,o){var c=Be,d=gn();if(Je){if(o===void 0)throw Error(i(407));o=o()}else{if(o=s(),ft===null)throw Error(i(349));(We&124)!==0||i0(c,s,o)}d.memoizedState=o;var m={value:o,getSnapshot:s};return d.queue=m,b0(a0.bind(null,c,m,r),[r]),c.flags|=2048,Wa(9,nd(),s0.bind(null,c,m,o,s),null),o},useId:function(){var r=gn(),s=ft.identifierPrefix;if(Je){var o=Vr,c=qr;o=(c&~(1<<32-Qt(c)-1)).toString(32)+o,s="«"+s+"R"+o,o=Ju++,0<o&&(s+="H"+o.toString(32)),s+="»"}else o=cO++,s="«"+s+"r"+o.toString(32)+"»";return r.memoizedState=s},useHostTransitionStatus:nm,useFormState:m0,useActionState:m0,useOptimistic:function(r){var s=gn();s.memoizedState=s.baseState=r;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=rm.bind(null,Be,!0,o),o.dispatch=s,[r,s]},useMemoCache:Qp,useCacheRefresh:function(){return gn().memoizedState=pO.bind(null,Be)}},U0={readContext:nn,use:ed,useCallback:C0,useContext:nn,useEffect:S0,useImperativeHandle:T0,useInsertionEffect:w0,useLayoutEffect:E0,useMemo:R0,useReducer:td,useRef:_0,useState:function(){return td(Qr)},useDebugValue:Jp,useDeferredValue:function(r,s){var o=kt();return A0(o,st.memoizedState,r,s)},useTransition:function(){var r=td(Qr)[0],s=kt().memoizedState;return[typeof r=="boolean"?r:Cl(r),s]},useSyncExternalStore:r0,useId:N0,useHostTransitionStatus:nm,useFormState:g0,useActionState:g0,useOptimistic:function(r,s){var o=kt();return c0(o,st,r,s)},useMemoCache:Qp,useCacheRefresh:M0},gO={readContext:nn,use:ed,useCallback:C0,useContext:nn,useEffect:S0,useImperativeHandle:T0,useInsertionEffect:w0,useLayoutEffect:E0,useMemo:R0,useReducer:Kp,useRef:_0,useState:function(){return Kp(Qr)},useDebugValue:Jp,useDeferredValue:function(r,s){var o=kt();return st===null?em(o,r,s):A0(o,st.memoizedState,r,s)},useTransition:function(){var r=Kp(Qr)[0],s=kt().memoizedState;return[typeof r=="boolean"?r:Cl(r),s]},useSyncExternalStore:r0,useId:N0,useHostTransitionStatus:nm,useFormState:v0,useActionState:v0,useOptimistic:function(r,s){var o=kt();return st!==null?c0(o,st,r,s):(o.baseState=r,[r,o.queue.dispatch])},useMemoCache:Qp,useCacheRefresh:M0},Ka=null,Il=0;function ad(r){var s=Il;return Il+=1,Ka===null&&(Ka=[]),Wb(Ka,r,s)}function Dl(r,s){s=s.props.ref,r.ref=s!==void 0?s:null}function od(r,s){throw s.$$typeof===y?Error(i(525)):(r=Object.prototype.toString.call(s),Error(i(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r)))}function z0(r){var s=r._init;return s(r._payload)}function $0(r){function s(q,z){if(r){var Q=q.deletions;Q===null?(q.deletions=[z],q.flags|=16):Q.push(z)}}function o(q,z){if(!r)return null;for(;z!==null;)s(q,z),z=z.sibling;return null}function c(q){for(var z=new Map;q!==null;)q.key!==null?z.set(q.key,q):z.set(q.index,q),q=q.sibling;return z}function d(q,z){return q=Fr(q,z),q.index=0,q.sibling=null,q}function m(q,z,Q){return q.index=Q,r?(Q=q.alternate,Q!==null?(Q=Q.index,Q<z?(q.flags|=67108866,z):Q):(q.flags|=67108866,z)):(q.flags|=1048576,z)}function b(q){return r&&q.alternate===null&&(q.flags|=67108866),q}function E(q,z,Q,se){return z===null||z.tag!==6?(z=xp(Q,q.mode,se),z.return=q,z):(z=d(z,Q),z.return=q,z)}function L(q,z,Q,se){var ge=Q.type;return ge===w?re(q,z,Q.props.children,se,Q.key):z!==null&&(z.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===V&&z0(ge)===z.type)?(z=d(z,Q.props),Dl(z,Q),z.return=q,z):(z=Fu(Q.type,Q.key,Q.props,null,q.mode,se),Dl(z,Q),z.return=q,z)}function W(q,z,Q,se){return z===null||z.tag!==4||z.stateNode.containerInfo!==Q.containerInfo||z.stateNode.implementation!==Q.implementation?(z=Tp(Q,q.mode,se),z.return=q,z):(z=d(z,Q.children||[]),z.return=q,z)}function re(q,z,Q,se,ge){return z===null||z.tag!==7?(z=Ds(Q,q.mode,se,ge),z.return=q,z):(z=d(z,Q),z.return=q,z)}function ae(q,z,Q){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return z=xp(""+z,q.mode,Q),z.return=q,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case v:return Q=Fu(z.type,z.key,z.props,null,q.mode,Q),Dl(Q,z),Q.return=q,Q;case S:return z=Tp(z,q.mode,Q),z.return=q,z;case V:var se=z._init;return z=se(z._payload),ae(q,z,Q)}if(ue(z)||G(z))return z=Ds(z,q.mode,Q,null),z.return=q,z;if(typeof z.then=="function")return ae(q,ad(z),Q);if(z.$$typeof===x)return ae(q,Yu(q,z),Q);od(q,z)}return null}function Z(q,z,Q,se){var ge=z!==null?z.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return ge!==null?null:E(q,z,""+Q,se);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case v:return Q.key===ge?L(q,z,Q,se):null;case S:return Q.key===ge?W(q,z,Q,se):null;case V:return ge=Q._init,Q=ge(Q._payload),Z(q,z,Q,se)}if(ue(Q)||G(Q))return ge!==null?null:re(q,z,Q,se,null);if(typeof Q.then=="function")return Z(q,z,ad(Q),se);if(Q.$$typeof===x)return Z(q,z,Yu(q,Q),se);od(q,Q)}return null}function J(q,z,Q,se,ge){if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return q=q.get(Q)||null,E(z,q,""+se,ge);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case v:return q=q.get(se.key===null?Q:se.key)||null,L(z,q,se,ge);case S:return q=q.get(se.key===null?Q:se.key)||null,W(z,q,se,ge);case V:var He=se._init;return se=He(se._payload),J(q,z,Q,se,ge)}if(ue(se)||G(se))return q=q.get(Q)||null,re(z,q,se,ge,null);if(typeof se.then=="function")return J(q,z,Q,ad(se),ge);if(se.$$typeof===x)return J(q,z,Q,Yu(z,se),ge);od(z,se)}return null}function Me(q,z,Q,se){for(var ge=null,He=null,Ee=z,Ie=z=0,Ht=null;Ee!==null&&Ie<Q.length;Ie++){Ee.index>Ie?(Ht=Ee,Ee=null):Ht=Ee.sibling;var Ke=Z(q,Ee,Q[Ie],se);if(Ke===null){Ee===null&&(Ee=Ht);break}r&&Ee&&Ke.alternate===null&&s(q,Ee),z=m(Ke,z,Ie),He===null?ge=Ke:He.sibling=Ke,He=Ke,Ee=Ht}if(Ie===Q.length)return o(q,Ee),Je&&Ns(q,Ie),ge;if(Ee===null){for(;Ie<Q.length;Ie++)Ee=ae(q,Q[Ie],se),Ee!==null&&(z=m(Ee,z,Ie),He===null?ge=Ee:He.sibling=Ee,He=Ee);return Je&&Ns(q,Ie),ge}for(Ee=c(Ee);Ie<Q.length;Ie++)Ht=J(Ee,q,Ie,Q[Ie],se),Ht!==null&&(r&&Ht.alternate!==null&&Ee.delete(Ht.key===null?Ie:Ht.key),z=m(Ht,z,Ie),He===null?ge=Ht:He.sibling=Ht,He=Ht);return r&&Ee.forEach(function(Gi){return s(q,Gi)}),Je&&Ns(q,Ie),ge}function Ce(q,z,Q,se){if(Q==null)throw Error(i(151));for(var ge=null,He=null,Ee=z,Ie=z=0,Ht=null,Ke=Q.next();Ee!==null&&!Ke.done;Ie++,Ke=Q.next()){Ee.index>Ie?(Ht=Ee,Ee=null):Ht=Ee.sibling;var Gi=Z(q,Ee,Ke.value,se);if(Gi===null){Ee===null&&(Ee=Ht);break}r&&Ee&&Gi.alternate===null&&s(q,Ee),z=m(Gi,z,Ie),He===null?ge=Gi:He.sibling=Gi,He=Gi,Ee=Ht}if(Ke.done)return o(q,Ee),Je&&Ns(q,Ie),ge;if(Ee===null){for(;!Ke.done;Ie++,Ke=Q.next())Ke=ae(q,Ke.value,se),Ke!==null&&(z=m(Ke,z,Ie),He===null?ge=Ke:He.sibling=Ke,He=Ke);return Je&&Ns(q,Ie),ge}for(Ee=c(Ee);!Ke.done;Ie++,Ke=Q.next())Ke=J(Ee,q,Ie,Ke.value,se),Ke!==null&&(r&&Ke.alternate!==null&&Ee.delete(Ke.key===null?Ie:Ke.key),z=m(Ke,z,Ie),He===null?ge=Ke:He.sibling=Ke,He=Ke);return r&&Ee.forEach(function(yN){return s(q,yN)}),Je&&Ns(q,Ie),ge}function ot(q,z,Q,se){if(typeof Q=="object"&&Q!==null&&Q.type===w&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case v:e:{for(var ge=Q.key;z!==null;){if(z.key===ge){if(ge=Q.type,ge===w){if(z.tag===7){o(q,z.sibling),se=d(z,Q.props.children),se.return=q,q=se;break e}}else if(z.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===V&&z0(ge)===z.type){o(q,z.sibling),se=d(z,Q.props),Dl(se,Q),se.return=q,q=se;break e}o(q,z);break}else s(q,z);z=z.sibling}Q.type===w?(se=Ds(Q.props.children,q.mode,se,Q.key),se.return=q,q=se):(se=Fu(Q.type,Q.key,Q.props,null,q.mode,se),Dl(se,Q),se.return=q,q=se)}return b(q);case S:e:{for(ge=Q.key;z!==null;){if(z.key===ge)if(z.tag===4&&z.stateNode.containerInfo===Q.containerInfo&&z.stateNode.implementation===Q.implementation){o(q,z.sibling),se=d(z,Q.children||[]),se.return=q,q=se;break e}else{o(q,z);break}else s(q,z);z=z.sibling}se=Tp(Q,q.mode,se),se.return=q,q=se}return b(q);case V:return ge=Q._init,Q=ge(Q._payload),ot(q,z,Q,se)}if(ue(Q))return Me(q,z,Q,se);if(G(Q)){if(ge=G(Q),typeof ge!="function")throw Error(i(150));return Q=ge.call(Q),Ce(q,z,Q,se)}if(typeof Q.then=="function")return ot(q,z,ad(Q),se);if(Q.$$typeof===x)return ot(q,z,Yu(q,Q),se);od(q,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,z!==null&&z.tag===6?(o(q,z.sibling),se=d(z,Q),se.return=q,q=se):(o(q,z),se=xp(Q,q.mode,se),se.return=q,q=se),b(q)):o(q,z)}return function(q,z,Q,se){try{Il=0;var ge=ot(q,z,Q,se);return Ka=null,ge}catch(Ee){if(Ee===bl||Ee===Wu)throw Ee;var He=xn(29,Ee,null,q.mode);return He.lanes=se,He.return=q,He}finally{}}}var Xa=$0(!0),B0=$0(!1),Fn=X(null),wr=null;function Oi(r){var s=r.alternate;ie(jt,jt.current&1),ie(Fn,r),wr===null&&(s===null||Ga.current!==null||s.memoizedState!==null)&&(wr=r)}function H0(r){if(r.tag===22){if(ie(jt,jt.current),ie(Fn,r),wr===null){var s=r.alternate;s!==null&&s.memoizedState!==null&&(wr=r)}}else Ni()}function Ni(){ie(jt,jt.current),ie(Fn,Fn.current)}function Wr(r){le(Fn),wr===r&&(wr=null),le(jt)}var jt=X(0);function ld(r){for(var s=r;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||Ym(o)))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}function im(r,s,o,c){s=r.memoizedState,o=o(c,s),o=o==null?s:g({},s,o),r.memoizedState=o,r.lanes===0&&(r.updateQueue.baseState=o)}var sm={enqueueSetState:function(r,s,o){r=r._reactInternals;var c=An(),d=Ai(c);d.payload=s,o!=null&&(d.callback=o),s=Ii(r,d,c),s!==null&&(In(s,r,c),wl(s,r,c))},enqueueReplaceState:function(r,s,o){r=r._reactInternals;var c=An(),d=Ai(c);d.tag=1,d.payload=s,o!=null&&(d.callback=o),s=Ii(r,d,c),s!==null&&(In(s,r,c),wl(s,r,c))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var o=An(),c=Ai(o);c.tag=2,s!=null&&(c.callback=s),s=Ii(r,c,o),s!==null&&(In(s,r,o),wl(s,r,o))}};function F0(r,s,o,c,d,m,b){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,m,b):s.prototype&&s.prototype.isPureReactComponent?!fl(o,c)||!fl(d,m):!0}function q0(r,s,o,c){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,c),s.state!==r&&sm.enqueueReplaceState(s,s.state,null)}function zs(r,s){var o=s;if("ref"in s){o={};for(var c in s)c!=="ref"&&(o[c]=s[c])}if(r=r.defaultProps){o===s&&(o=g({},o));for(var d in r)o[d]===void 0&&(o[d]=r[d])}return o}var cd=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function V0(r){cd(r)}function G0(r){console.error(r)}function Y0(r){cd(r)}function ud(r,s){try{var o=r.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(c){setTimeout(function(){throw c})}}function Q0(r,s,o){try{var c=r.onCaughtError;c(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function am(r,s,o){return o=Ai(o),o.tag=3,o.payload={element:null},o.callback=function(){ud(r,s)},o}function W0(r){return r=Ai(r),r.tag=3,r}function K0(r,s,o,c){var d=o.type.getDerivedStateFromError;if(typeof d=="function"){var m=c.value;r.payload=function(){return d(m)},r.callback=function(){Q0(s,o,c)}}var b=o.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(r.callback=function(){Q0(s,o,c),typeof d!="function"&&(Ui===null?Ui=new Set([this]):Ui.add(this));var E=c.stack;this.componentDidCatch(c.value,{componentStack:E!==null?E:""})})}function yO(r,s,o,c,d){if(o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(s=o.alternate,s!==null&&yl(s,o,d,!0),o=Fn.current,o!==null){switch(o.tag){case 13:return wr===null?Dm():o.alternate===null&&Ct===0&&(Ct=3),o.flags&=-257,o.flags|=65536,o.lanes=d,c===Lp?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([c]):s.add(c),Nm(r,c,d)),!1;case 22:return o.flags|=65536,c===Lp?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([c])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([c]):o.add(c)),Nm(r,c,d)),!1}throw Error(i(435,o.tag))}return Nm(r,c,d),Dm(),!1}if(Je)return s=Fn.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=d,c!==Ap&&(r=Error(i(422),{cause:c}),gl(zn(r,o)))):(c!==Ap&&(s=Error(i(423),{cause:c}),gl(zn(s,o))),r=r.current.alternate,r.flags|=65536,d&=-d,r.lanes|=d,c=zn(c,o),d=am(r.stateNode,c,d),Up(r,d),Ct!==4&&(Ct=2)),!1;var m=Error(i(520),{cause:c});if(m=zn(m,o),jl===null?jl=[m]:jl.push(m),Ct!==4&&(Ct=2),s===null)return!0;c=zn(c,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,r=d&-d,o.lanes|=r,r=am(o.stateNode,c,r),Up(o,r),!1;case 1:if(s=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ui===null||!Ui.has(m))))return o.flags|=65536,d&=-d,o.lanes|=d,d=W0(d),K0(d,r,o,c),Up(o,d),!1}o=o.return}while(o!==null);return!1}var X0=Error(i(461)),$t=!1;function Wt(r,s,o,c){s.child=r===null?B0(s,null,o,c):Xa(s,r.child,o,c)}function Z0(r,s,o,c,d){o=o.render;var m=s.ref;if("ref"in c){var b={};for(var E in c)E!=="ref"&&(b[E]=c[E])}else b=c;return Ps(s),c=Fp(r,s,o,b,m,d),E=qp(),r!==null&&!$t?(Vp(r,s,d),Kr(r,s,d)):(Je&&E&&Cp(s),s.flags|=1,Wt(r,s,c,d),s.child)}function J0(r,s,o,c,d){if(r===null){var m=o.type;return typeof m=="function"&&!Ep(m)&&m.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=m,eS(r,s,m,c,d)):(r=Fu(o.type,null,c,s,s.mode,d),r.ref=s.ref,r.return=s,s.child=r)}if(m=r.child,!pm(r,d)){var b=m.memoizedProps;if(o=o.compare,o=o!==null?o:fl,o(b,c)&&r.ref===s.ref)return Kr(r,s,d)}return s.flags|=1,r=Fr(m,c),r.ref=s.ref,r.return=s,s.child=r}function eS(r,s,o,c,d){if(r!==null){var m=r.memoizedProps;if(fl(m,c)&&r.ref===s.ref)if($t=!1,s.pendingProps=c=m,pm(r,d))(r.flags&131072)!==0&&($t=!0);else return s.lanes=r.lanes,Kr(r,s,d)}return om(r,s,o,c,d)}function tS(r,s,o){var c=s.pendingProps,d=c.children,m=r!==null?r.memoizedState:null;if(c.mode==="hidden"){if((s.flags&128)!==0){if(c=m!==null?m.baseLanes|o:o,r!==null){for(d=s.child=r.child,m=0;d!==null;)m=m|d.lanes|d.childLanes,d=d.sibling;s.childLanes=m&~c}else s.childLanes=0,s.child=null;return nS(r,s,c,o)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},r!==null&&Qu(s,m!==null?m.cachePool:null),m!==null?e0(s,m):$p(),H0(s);else return s.lanes=s.childLanes=536870912,nS(r,s,m!==null?m.baseLanes|o:o,o)}else m!==null?(Qu(s,m.cachePool),e0(s,m),Ni(),s.memoizedState=null):(r!==null&&Qu(s,null),$p(),Ni());return Wt(r,s,d,o),s.child}function nS(r,s,o,c){var d=kp();return d=d===null?null:{parent:Pt._currentValue,pool:d},s.memoizedState={baseLanes:o,cachePool:d},r!==null&&Qu(s,null),$p(),H0(s),r!==null&&yl(r,s,c,!0),null}function dd(r,s){var o=s.ref;if(o===null)r!==null&&r.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(i(284));(r===null||r.ref!==o)&&(s.flags|=4194816)}}function om(r,s,o,c,d){return Ps(s),o=Fp(r,s,o,c,void 0,d),c=qp(),r!==null&&!$t?(Vp(r,s,d),Kr(r,s,d)):(Je&&c&&Cp(s),s.flags|=1,Wt(r,s,o,d),s.child)}function rS(r,s,o,c,d,m){return Ps(s),s.updateQueue=null,o=n0(s,c,o,d),t0(r),c=qp(),r!==null&&!$t?(Vp(r,s,m),Kr(r,s,m)):(Je&&c&&Cp(s),s.flags|=1,Wt(r,s,o,m),s.child)}function iS(r,s,o,c,d){if(Ps(s),s.stateNode===null){var m=Ba,b=o.contextType;typeof b=="object"&&b!==null&&(m=nn(b)),m=new o(c,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=sm,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=c,m.state=s.memoizedState,m.refs={},Pp(s),b=o.contextType,m.context=typeof b=="object"&&b!==null?nn(b):Ba,m.state=s.memoizedState,b=o.getDerivedStateFromProps,typeof b=="function"&&(im(s,o,b,c),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(b=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),b!==m.state&&sm.enqueueReplaceState(m,m.state,null),xl(s,c,m,d),El(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),c=!0}else if(r===null){m=s.stateNode;var E=s.memoizedProps,L=zs(o,E);m.props=L;var W=m.context,re=o.contextType;b=Ba,typeof re=="object"&&re!==null&&(b=nn(re));var ae=o.getDerivedStateFromProps;re=typeof ae=="function"||typeof m.getSnapshotBeforeUpdate=="function",E=s.pendingProps!==E,re||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E||W!==b)&&q0(s,m,c,b),Ri=!1;var Z=s.memoizedState;m.state=Z,xl(s,c,m,d),El(),W=s.memoizedState,E||Z!==W||Ri?(typeof ae=="function"&&(im(s,o,ae,c),W=s.memoizedState),(L=Ri||F0(s,o,L,c,Z,W,b))?(re||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=W),m.props=c,m.state=W,m.context=b,c=L):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{m=s.stateNode,jp(r,s),b=s.memoizedProps,re=zs(o,b),m.props=re,ae=s.pendingProps,Z=m.context,W=o.contextType,L=Ba,typeof W=="object"&&W!==null&&(L=nn(W)),E=o.getDerivedStateFromProps,(W=typeof E=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(b!==ae||Z!==L)&&q0(s,m,c,L),Ri=!1,Z=s.memoizedState,m.state=Z,xl(s,c,m,d),El();var J=s.memoizedState;b!==ae||Z!==J||Ri||r!==null&&r.dependencies!==null&&Gu(r.dependencies)?(typeof E=="function"&&(im(s,o,E,c),J=s.memoizedState),(re=Ri||F0(s,o,re,c,Z,J,L)||r!==null&&r.dependencies!==null&&Gu(r.dependencies))?(W||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(c,J,L),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(c,J,L)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||b===r.memoizedProps&&Z===r.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===r.memoizedProps&&Z===r.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=J),m.props=c,m.state=J,m.context=L,c=re):(typeof m.componentDidUpdate!="function"||b===r.memoizedProps&&Z===r.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===r.memoizedProps&&Z===r.memoizedState||(s.flags|=1024),c=!1)}return m=c,dd(r,s),c=(s.flags&128)!==0,m||c?(m=s.stateNode,o=c&&typeof o.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,r!==null&&c?(s.child=Xa(s,r.child,null,d),s.child=Xa(s,null,o,d)):Wt(r,s,o,d),s.memoizedState=m.state,r=s.child):r=Kr(r,s,d),r}function sS(r,s,o,c){return ml(),s.flags|=256,Wt(r,s,o,c),s.child}var lm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cm(r){return{baseLanes:r,cachePool:Gb()}}function um(r,s,o){return r=r!==null?r.childLanes&~o:0,s&&(r|=qn),r}function aS(r,s,o){var c=s.pendingProps,d=!1,m=(s.flags&128)!==0,b;if((b=m)||(b=r!==null&&r.memoizedState===null?!1:(jt.current&2)!==0),b&&(d=!0,s.flags&=-129),b=(s.flags&32)!==0,s.flags&=-33,r===null){if(Je){if(d?Oi(s):Ni(),Je){var E=Tt,L;if(L=E){e:{for(L=E,E=Sr;L.nodeType!==8;){if(!E){E=null;break e}if(L=rr(L.nextSibling),L===null){E=null;break e}}E=L}E!==null?(s.memoizedState={dehydrated:E,treeContext:Os!==null?{id:qr,overflow:Vr}:null,retryLane:536870912,hydrationErrors:null},L=xn(18,null,null,0),L.stateNode=E,L.return=s,s.child=L,cn=s,Tt=null,L=!0):L=!1}L||ks(s)}if(E=s.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return Ym(E)?s.lanes=32:s.lanes=536870912,null;Wr(s)}return E=c.children,c=c.fallback,d?(Ni(),d=s.mode,E=fd({mode:"hidden",children:E},d),c=Ds(c,d,o,null),E.return=s,c.return=s,E.sibling=c,s.child=E,d=s.child,d.memoizedState=cm(o),d.childLanes=um(r,b,o),s.memoizedState=lm,c):(Oi(s),dm(s,E))}if(L=r.memoizedState,L!==null&&(E=L.dehydrated,E!==null)){if(m)s.flags&256?(Oi(s),s.flags&=-257,s=fm(r,s,o)):s.memoizedState!==null?(Ni(),s.child=r.child,s.flags|=128,s=null):(Ni(),d=c.fallback,E=s.mode,c=fd({mode:"visible",children:c.children},E),d=Ds(d,E,o,null),d.flags|=2,c.return=s,d.return=s,c.sibling=d,s.child=c,Xa(s,r.child,null,o),c=s.child,c.memoizedState=cm(o),c.childLanes=um(r,b,o),s.memoizedState=lm,s=d);else if(Oi(s),Ym(E)){if(b=E.nextSibling&&E.nextSibling.dataset,b)var W=b.dgst;b=W,c=Error(i(419)),c.stack="",c.digest=b,gl({value:c,source:null,stack:null}),s=fm(r,s,o)}else if($t||yl(r,s,o,!1),b=(o&r.childLanes)!==0,$t||b){if(b=ft,b!==null&&(c=o&-o,c=(c&42)!==0?1:rl(c),c=(c&(b.suspendedLanes|o))!==0?0:c,c!==0&&c!==L.retryLane))throw L.retryLane=c,$a(r,c),In(b,r,c),X0;E.data==="$?"||Dm(),s=fm(r,s,o)}else E.data==="$?"?(s.flags|=192,s.child=r.child,s=null):(r=L.treeContext,Tt=rr(E.nextSibling),cn=s,Je=!0,Ms=null,Sr=!1,r!==null&&(Bn[Hn++]=qr,Bn[Hn++]=Vr,Bn[Hn++]=Os,qr=r.id,Vr=r.overflow,Os=s),s=dm(s,c.children),s.flags|=4096);return s}return d?(Ni(),d=c.fallback,E=s.mode,L=r.child,W=L.sibling,c=Fr(L,{mode:"hidden",children:c.children}),c.subtreeFlags=L.subtreeFlags&65011712,W!==null?d=Fr(W,d):(d=Ds(d,E,o,null),d.flags|=2),d.return=s,c.return=s,c.sibling=d,s.child=c,c=d,d=s.child,E=r.child.memoizedState,E===null?E=cm(o):(L=E.cachePool,L!==null?(W=Pt._currentValue,L=L.parent!==W?{parent:W,pool:W}:L):L=Gb(),E={baseLanes:E.baseLanes|o,cachePool:L}),d.memoizedState=E,d.childLanes=um(r,b,o),s.memoizedState=lm,c):(Oi(s),o=r.child,r=o.sibling,o=Fr(o,{mode:"visible",children:c.children}),o.return=s,o.sibling=null,r!==null&&(b=s.deletions,b===null?(s.deletions=[r],s.flags|=16):b.push(r)),s.child=o,s.memoizedState=null,o)}function dm(r,s){return s=fd({mode:"visible",children:s},r.mode),s.return=r,r.child=s}function fd(r,s){return r=xn(22,r,null,s),r.lanes=0,r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},r}function fm(r,s,o){return Xa(s,r.child,null,o),r=dm(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function oS(r,s,o){r.lanes|=s;var c=r.alternate;c!==null&&(c.lanes|=s),Dp(r.return,s,o)}function hm(r,s,o,c,d){var m=r.memoizedState;m===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:d}:(m.isBackwards=s,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=o,m.tailMode=d)}function lS(r,s,o){var c=s.pendingProps,d=c.revealOrder,m=c.tail;if(Wt(r,s,c.children,o),c=jt.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&oS(r,o,s);else if(r.tag===19)oS(r,o,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}switch(ie(jt,c),d){case"forwards":for(o=s.child,d=null;o!==null;)r=o.alternate,r!==null&&ld(r)===null&&(d=o),o=o.sibling;o=d,o===null?(d=s.child,s.child=null):(d=o.sibling,o.sibling=null),hm(s,!1,d,o,m);break;case"backwards":for(o=null,d=s.child,s.child=null;d!==null;){if(r=d.alternate,r!==null&&ld(r)===null){s.child=d;break}r=d.sibling,d.sibling=o,o=d,d=r}hm(s,!0,o,null,m);break;case"together":hm(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Kr(r,s,o){if(r!==null&&(s.dependencies=r.dependencies),ji|=s.lanes,(o&s.childLanes)===0)if(r!==null){if(yl(r,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(r!==null&&s.child!==r.child)throw Error(i(153));if(s.child!==null){for(r=s.child,o=Fr(r,r.pendingProps),s.child=o,o.return=s;r.sibling!==null;)r=r.sibling,o=o.sibling=Fr(r,r.pendingProps),o.return=s;o.sibling=null}return s.child}function pm(r,s){return(r.lanes&s)!==0?!0:(r=r.dependencies,!!(r!==null&&Gu(r)))}function vO(r,s,o){switch(s.tag){case 3:be(s,s.stateNode.containerInfo),Ci(s,Pt,r.memoizedState.cache),ml();break;case 27:case 5:Ue(s);break;case 4:be(s,s.stateNode.containerInfo);break;case 10:Ci(s,s.type,s.memoizedProps.value);break;case 13:var c=s.memoizedState;if(c!==null)return c.dehydrated!==null?(Oi(s),s.flags|=128,null):(o&s.child.childLanes)!==0?aS(r,s,o):(Oi(s),r=Kr(r,s,o),r!==null?r.sibling:null);Oi(s);break;case 19:var d=(r.flags&128)!==0;if(c=(o&s.childLanes)!==0,c||(yl(r,s,o,!1),c=(o&s.childLanes)!==0),d){if(c)return lS(r,s,o);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),ie(jt,jt.current),c)break;return null;case 22:case 23:return s.lanes=0,tS(r,s,o);case 24:Ci(s,Pt,r.memoizedState.cache)}return Kr(r,s,o)}function cS(r,s,o){if(r!==null)if(r.memoizedProps!==s.pendingProps)$t=!0;else{if(!pm(r,o)&&(s.flags&128)===0)return $t=!1,vO(r,s,o);$t=(r.flags&131072)!==0}else $t=!1,Je&&(s.flags&1048576)!==0&&zb(s,Vu,s.index);switch(s.lanes=0,s.tag){case 16:e:{r=s.pendingProps;var c=s.elementType,d=c._init;if(c=d(c._payload),s.type=c,typeof c=="function")Ep(c)?(r=zs(c,r),s.tag=1,s=iS(null,s,c,r,o)):(s.tag=0,s=om(null,s,c,r,o));else{if(c!=null){if(d=c.$$typeof,d===A){s.tag=11,s=Z0(null,s,c,r,o);break e}else if(d===P){s.tag=14,s=J0(null,s,c,r,o);break e}}throw s=K(c)||c,Error(i(306,s,""))}}return s;case 0:return om(r,s,s.type,s.pendingProps,o);case 1:return c=s.type,d=zs(c,s.pendingProps),iS(r,s,c,d,o);case 3:e:{if(be(s,s.stateNode.containerInfo),r===null)throw Error(i(387));c=s.pendingProps;var m=s.memoizedState;d=m.element,jp(r,s),xl(s,c,null,o);var b=s.memoizedState;if(c=b.cache,Ci(s,Pt,c),c!==m.cache&&Op(s,[Pt],o,!0),El(),c=b.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:b.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=sS(r,s,c,o);break e}else if(c!==d){d=zn(Error(i(424)),s),gl(d),s=sS(r,s,c,o);break e}else{switch(r=s.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}for(Tt=rr(r.firstChild),cn=s,Je=!0,Ms=null,Sr=!0,o=B0(s,null,c,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(ml(),c===d){s=Kr(r,s,o);break e}Wt(r,s,c,o)}s=s.child}return s;case 26:return dd(r,s),r===null?(o=h1(s.type,null,s.pendingProps,null))?s.memoizedState=o:Je||(o=s.type,r=s.pendingProps,c=Cd(pe.current).createElement(o),c[ce]=s,c[fe]=r,Xt(c,o,r),ke(c),s.stateNode=c):s.memoizedState=h1(s.type,r.memoizedProps,s.pendingProps,r.memoizedState),null;case 27:return Ue(s),r===null&&Je&&(c=s.stateNode=u1(s.type,s.pendingProps,pe.current),cn=s,Sr=!0,d=Tt,Bi(s.type)?(Qm=d,Tt=rr(c.firstChild)):Tt=d),Wt(r,s,s.pendingProps.children,o),dd(r,s),r===null&&(s.flags|=4194304),s.child;case 5:return r===null&&Je&&((d=c=Tt)&&(c=GO(c,s.type,s.pendingProps,Sr),c!==null?(s.stateNode=c,cn=s,Tt=rr(c.firstChild),Sr=!1,d=!0):d=!1),d||ks(s)),Ue(s),d=s.type,m=s.pendingProps,b=r!==null?r.memoizedProps:null,c=m.children,qm(d,m)?c=null:b!==null&&qm(d,b)&&(s.flags|=32),s.memoizedState!==null&&(d=Fp(r,s,uO,null,null,o),Gl._currentValue=d),dd(r,s),Wt(r,s,c,o),s.child;case 6:return r===null&&Je&&((r=o=Tt)&&(o=YO(o,s.pendingProps,Sr),o!==null?(s.stateNode=o,cn=s,Tt=null,r=!0):r=!1),r||ks(s)),null;case 13:return aS(r,s,o);case 4:return be(s,s.stateNode.containerInfo),c=s.pendingProps,r===null?s.child=Xa(s,null,c,o):Wt(r,s,c,o),s.child;case 11:return Z0(r,s,s.type,s.pendingProps,o);case 7:return Wt(r,s,s.pendingProps,o),s.child;case 8:return Wt(r,s,s.pendingProps.children,o),s.child;case 12:return Wt(r,s,s.pendingProps.children,o),s.child;case 10:return c=s.pendingProps,Ci(s,s.type,c.value),Wt(r,s,c.children,o),s.child;case 9:return d=s.type._context,c=s.pendingProps.children,Ps(s),d=nn(d),c=c(d),s.flags|=1,Wt(r,s,c,o),s.child;case 14:return J0(r,s,s.type,s.pendingProps,o);case 15:return eS(r,s,s.type,s.pendingProps,o);case 19:return lS(r,s,o);case 31:return c=s.pendingProps,o=s.mode,c={mode:c.mode,children:c.children},r===null?(o=fd(c,o),o.ref=s.ref,s.child=o,o.return=s,s=o):(o=Fr(r.child,c),o.ref=s.ref,s.child=o,o.return=s,s=o),s;case 22:return tS(r,s,o);case 24:return Ps(s),c=nn(Pt),r===null?(d=kp(),d===null&&(d=ft,m=Np(),d.pooledCache=m,m.refCount++,m!==null&&(d.pooledCacheLanes|=o),d=m),s.memoizedState={parent:c,cache:d},Pp(s),Ci(s,Pt,d)):((r.lanes&o)!==0&&(jp(r,s),xl(s,null,null,o),El()),d=r.memoizedState,m=s.memoizedState,d.parent!==c?(d={parent:c,cache:c},s.memoizedState=d,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=d),Ci(s,Pt,c)):(c=m.cache,Ci(s,Pt,c),c!==d.cache&&Op(s,[Pt],o,!0))),Wt(r,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(i(156,s.tag))}function Xr(r){r.flags|=4}function uS(r,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)r.flags&=-16777217;else if(r.flags|=16777216,!v1(s)){if(s=Fn.current,s!==null&&((We&4194048)===We?wr!==null:(We&62914560)!==We&&(We&536870912)===0||s!==wr))throw Sl=Lp,Yb;r.flags|=8192}}function hd(r,s){s!==null&&(r.flags|=4),r.flags&16384&&(s=r.tag!==22?Ru():536870912,r.lanes|=s,to|=s)}function Ol(r,s){if(!Je)switch(r.tailMode){case"hidden":s=r.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?r.tail=null:o.sibling=null;break;case"collapsed":o=r.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function wt(r){var s=r.alternate!==null&&r.alternate.child===r.child,o=0,c=0;if(s)for(var d=r.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags&65011712,c|=d.flags&65011712,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=c,r.childLanes=o,s}function _O(r,s,o){var c=s.pendingProps;switch(Rp(s),s.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(s),null;case 1:return wt(s),null;case 3:return o=s.stateNode,c=null,r!==null&&(c=r.memoizedState.cache),s.memoizedState.cache!==c&&(s.flags|=2048),Yr(Pt),De(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(r===null||r.child===null)&&(pl(s)?Xr(s):r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Hb())),wt(s),null;case 26:return o=s.memoizedState,r===null?(Xr(s),o!==null?(wt(s),uS(s,o)):(wt(s),s.flags&=-16777217)):o?o!==r.memoizedState?(Xr(s),wt(s),uS(s,o)):(wt(s),s.flags&=-16777217):(r.memoizedProps!==c&&Xr(s),wt(s),s.flags&=-16777217),null;case 27:_t(s),o=pe.current;var d=s.type;if(r!==null&&s.stateNode!=null)r.memoizedProps!==c&&Xr(s);else{if(!c){if(s.stateNode===null)throw Error(i(166));return wt(s),null}r=de.current,pl(s)?$b(s):(r=u1(d,c,o),s.stateNode=r,Xr(s))}return wt(s),null;case 5:if(_t(s),o=s.type,r!==null&&s.stateNode!=null)r.memoizedProps!==c&&Xr(s);else{if(!c){if(s.stateNode===null)throw Error(i(166));return wt(s),null}if(r=de.current,pl(s))$b(s);else{switch(d=Cd(pe.current),r){case 1:r=d.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:r=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":r=d.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":r=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":r=d.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof c.is=="string"?d.createElement("select",{is:c.is}):d.createElement("select"),c.multiple?r.multiple=!0:c.size&&(r.size=c.size);break;default:r=typeof c.is=="string"?d.createElement(o,{is:c.is}):d.createElement(o)}}r[ce]=s,r[fe]=c;e:for(d=s.child;d!==null;){if(d.tag===5||d.tag===6)r.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===s)break e;for(;d.sibling===null;){if(d.return===null||d.return===s)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}s.stateNode=r;e:switch(Xt(r,o,c),o){case"button":case"input":case"select":case"textarea":r=!!c.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Xr(s)}}return wt(s),s.flags&=-16777217,null;case 6:if(r&&s.stateNode!=null)r.memoizedProps!==c&&Xr(s);else{if(typeof c!="string"&&s.stateNode===null)throw Error(i(166));if(r=pe.current,pl(s)){if(r=s.stateNode,o=s.memoizedProps,c=null,d=cn,d!==null)switch(d.tag){case 27:case 5:c=d.memoizedProps}r[ce]=s,r=!!(r.nodeValue===o||c!==null&&c.suppressHydrationWarning===!0||r1(r.nodeValue,o)),r||ks(s)}else r=Cd(r).createTextNode(c),r[ce]=s,s.stateNode=r}return wt(s),null;case 13:if(c=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(d=pl(s),c!==null&&c.dehydrated!==null){if(r===null){if(!d)throw Error(i(318));if(d=s.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(i(317));d[ce]=s}else ml(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;wt(s),d=!1}else d=Hb(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=d),d=!0;if(!d)return s.flags&256?(Wr(s),s):(Wr(s),null)}if(Wr(s),(s.flags&128)!==0)return s.lanes=o,s;if(o=c!==null,r=r!==null&&r.memoizedState!==null,o){c=s.child,d=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(d=c.alternate.memoizedState.cachePool.pool);var m=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(m=c.memoizedState.cachePool.pool),m!==d&&(c.flags|=2048)}return o!==r&&o&&(s.child.flags|=8192),hd(s,s.updateQueue),wt(s),null;case 4:return De(),r===null&&zm(s.stateNode.containerInfo),wt(s),null;case 10:return Yr(s.type),wt(s),null;case 19:if(le(jt),d=s.memoizedState,d===null)return wt(s),null;if(c=(s.flags&128)!==0,m=d.rendering,m===null)if(c)Ol(d,!1);else{if(Ct!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(m=ld(r),m!==null){for(s.flags|=128,Ol(d,!1),r=m.updateQueue,s.updateQueue=r,hd(s,r),s.subtreeFlags=0,r=o,o=s.child;o!==null;)Ub(o,r),o=o.sibling;return ie(jt,jt.current&1|2),s.child}r=r.sibling}d.tail!==null&&Yt()>gd&&(s.flags|=128,c=!0,Ol(d,!1),s.lanes=4194304)}else{if(!c)if(r=ld(m),r!==null){if(s.flags|=128,c=!0,r=r.updateQueue,s.updateQueue=r,hd(s,r),Ol(d,!0),d.tail===null&&d.tailMode==="hidden"&&!m.alternate&&!Je)return wt(s),null}else 2*Yt()-d.renderingStartTime>gd&&o!==536870912&&(s.flags|=128,c=!0,Ol(d,!1),s.lanes=4194304);d.isBackwards?(m.sibling=s.child,s.child=m):(r=d.last,r!==null?r.sibling=m:s.child=m,d.last=m)}return d.tail!==null?(s=d.tail,d.rendering=s,d.tail=s.sibling,d.renderingStartTime=Yt(),s.sibling=null,r=jt.current,ie(jt,c?r&1|2:r&1),s):(wt(s),null);case 22:case 23:return Wr(s),Bp(),c=s.memoizedState!==null,r!==null?r.memoizedState!==null!==c&&(s.flags|=8192):c&&(s.flags|=8192),c?(o&536870912)!==0&&(s.flags&128)===0&&(wt(s),s.subtreeFlags&6&&(s.flags|=8192)):wt(s),o=s.updateQueue,o!==null&&hd(s,o.retryQueue),o=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),c=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==o&&(s.flags|=2048),r!==null&&le(js),null;case 24:return o=null,r!==null&&(o=r.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),Yr(Pt),wt(s),null;case 25:return null;case 30:return null}throw Error(i(156,s.tag))}function bO(r,s){switch(Rp(s),s.tag){case 1:return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return Yr(Pt),De(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 26:case 27:case 5:return _t(s),null;case 13:if(Wr(s),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(i(340));ml()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return le(jt),null;case 4:return De(),null;case 10:return Yr(s.type),null;case 22:case 23:return Wr(s),Bp(),r!==null&&le(js),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 24:return Yr(Pt),null;case 25:return null;default:return null}}function dS(r,s){switch(Rp(s),s.tag){case 3:Yr(Pt),De();break;case 26:case 27:case 5:_t(s);break;case 4:De();break;case 13:Wr(s);break;case 19:le(jt);break;case 10:Yr(s.type);break;case 22:case 23:Wr(s),Bp(),r!==null&&le(js);break;case 24:Yr(Pt)}}function Nl(r,s){try{var o=s.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var d=c.next;o=d;do{if((o.tag&r)===r){c=void 0;var m=o.create,b=o.inst;c=m(),b.destroy=c}o=o.next}while(o!==d)}}catch(E){dt(s,s.return,E)}}function Mi(r,s,o){try{var c=s.updateQueue,d=c!==null?c.lastEffect:null;if(d!==null){var m=d.next;c=m;do{if((c.tag&r)===r){var b=c.inst,E=b.destroy;if(E!==void 0){b.destroy=void 0,d=s;var L=o,W=E;try{W()}catch(re){dt(d,L,re)}}}c=c.next}while(c!==m)}}catch(re){dt(s,s.return,re)}}function fS(r){var s=r.updateQueue;if(s!==null){var o=r.stateNode;try{Jb(s,o)}catch(c){dt(r,r.return,c)}}}function hS(r,s,o){o.props=zs(r.type,r.memoizedProps),o.state=r.memoizedState;try{o.componentWillUnmount()}catch(c){dt(r,s,c)}}function Ml(r,s){try{var o=r.ref;if(o!==null){switch(r.tag){case 26:case 27:case 5:var c=r.stateNode;break;case 30:c=r.stateNode;break;default:c=r.stateNode}typeof o=="function"?r.refCleanup=o(c):o.current=c}}catch(d){dt(r,s,d)}}function Er(r,s){var o=r.ref,c=r.refCleanup;if(o!==null)if(typeof c=="function")try{c()}catch(d){dt(r,s,d)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(d){dt(r,s,d)}else o.current=null}function pS(r){var s=r.type,o=r.memoizedProps,c=r.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&c.focus();break e;case"img":o.src?c.src=o.src:o.srcSet&&(c.srcset=o.srcSet)}}catch(d){dt(r,r.return,d)}}function mm(r,s,o){try{var c=r.stateNode;BO(c,r.type,o,s),c[fe]=s}catch(d){dt(r,r.return,d)}}function mS(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&Bi(r.type)||r.tag===4}function gm(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||mS(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&Bi(r.type)||r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function ym(r,s,o){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(r,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(r),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=Td));else if(c!==4&&(c===27&&Bi(r.type)&&(o=r.stateNode,s=null),r=r.child,r!==null))for(ym(r,s,o),r=r.sibling;r!==null;)ym(r,s,o),r=r.sibling}function pd(r,s,o){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?o.insertBefore(r,s):o.appendChild(r);else if(c!==4&&(c===27&&Bi(r.type)&&(o=r.stateNode),r=r.child,r!==null))for(pd(r,s,o),r=r.sibling;r!==null;)pd(r,s,o),r=r.sibling}function gS(r){var s=r.stateNode,o=r.memoizedProps;try{for(var c=r.type,d=s.attributes;d.length;)s.removeAttributeNode(d[0]);Xt(s,c,o),s[ce]=r,s[fe]=o}catch(m){dt(r,r.return,m)}}var Zr=!1,Ot=!1,vm=!1,yS=typeof WeakSet=="function"?WeakSet:Set,Bt=null;function SO(r,s){if(r=r.containerInfo,Hm=Nd,r=Ab(r),gp(r)){if("selectionStart"in r)var o={start:r.selectionStart,end:r.selectionEnd};else e:{o=(o=r.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var b=0,E=-1,L=-1,W=0,re=0,ae=r,Z=null;t:for(;;){for(var J;ae!==o||d!==0&&ae.nodeType!==3||(E=b+d),ae!==m||c!==0&&ae.nodeType!==3||(L=b+c),ae.nodeType===3&&(b+=ae.nodeValue.length),(J=ae.firstChild)!==null;)Z=ae,ae=J;for(;;){if(ae===r)break t;if(Z===o&&++W===d&&(E=b),Z===m&&++re===c&&(L=b),(J=ae.nextSibling)!==null)break;ae=Z,Z=ae.parentNode}ae=J}o=E===-1||L===-1?null:{start:E,end:L}}else o=null}o=o||{start:0,end:0}}else o=null;for(Fm={focusedElem:r,selectionRange:o},Nd=!1,Bt=s;Bt!==null;)if(s=Bt,r=s.child,(s.subtreeFlags&1024)!==0&&r!==null)r.return=s,Bt=r;else for(;Bt!==null;){switch(s=Bt,m=s.alternate,r=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if((r&1024)!==0&&m!==null){r=void 0,o=s,d=m.memoizedProps,m=m.memoizedState,c=o.stateNode;try{var Me=zs(o.type,d,o.elementType===o.type);r=c.getSnapshotBeforeUpdate(Me,m),c.__reactInternalSnapshotBeforeUpdate=r}catch(Ce){dt(o,o.return,Ce)}}break;case 3:if((r&1024)!==0){if(r=s.stateNode.containerInfo,o=r.nodeType,o===9)Gm(r);else if(o===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Gm(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((r&1024)!==0)throw Error(i(163))}if(r=s.sibling,r!==null){r.return=s.return,Bt=r;break}Bt=s.return}}function vS(r,s,o){var c=o.flags;switch(o.tag){case 0:case 11:case 15:ki(r,o),c&4&&Nl(5,o);break;case 1:if(ki(r,o),c&4)if(r=o.stateNode,s===null)try{r.componentDidMount()}catch(b){dt(o,o.return,b)}else{var d=zs(o.type,s.memoizedProps);s=s.memoizedState;try{r.componentDidUpdate(d,s,r.__reactInternalSnapshotBeforeUpdate)}catch(b){dt(o,o.return,b)}}c&64&&fS(o),c&512&&Ml(o,o.return);break;case 3:if(ki(r,o),c&64&&(r=o.updateQueue,r!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{Jb(r,s)}catch(b){dt(o,o.return,b)}}break;case 27:s===null&&c&4&&gS(o);case 26:case 5:ki(r,o),s===null&&c&4&&pS(o),c&512&&Ml(o,o.return);break;case 12:ki(r,o);break;case 13:ki(r,o),c&4&&SS(r,o),c&64&&(r=o.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(o=DO.bind(null,o),QO(r,o))));break;case 22:if(c=o.memoizedState!==null||Zr,!c){s=s!==null&&s.memoizedState!==null||Ot,d=Zr;var m=Ot;Zr=c,(Ot=s)&&!m?Li(r,o,(o.subtreeFlags&8772)!==0):ki(r,o),Zr=d,Ot=m}break;case 30:break;default:ki(r,o)}}function _S(r){var s=r.alternate;s!==null&&(r.alternate=null,_S(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&Se(s)),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}var vt=null,yn=!1;function Jr(r,s,o){for(o=o.child;o!==null;)bS(r,s,o),o=o.sibling}function bS(r,s,o){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(hn,o)}catch{}switch(o.tag){case 26:Ot||Er(o,s),Jr(r,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Ot||Er(o,s);var c=vt,d=yn;Bi(o.type)&&(vt=o.stateNode,yn=!1),Jr(r,s,o),Hl(o.stateNode),vt=c,yn=d;break;case 5:Ot||Er(o,s);case 6:if(c=vt,d=yn,vt=null,Jr(r,s,o),vt=c,yn=d,vt!==null)if(yn)try{(vt.nodeType===9?vt.body:vt.nodeName==="HTML"?vt.ownerDocument.body:vt).removeChild(o.stateNode)}catch(m){dt(o,s,m)}else try{vt.removeChild(o.stateNode)}catch(m){dt(o,s,m)}break;case 18:vt!==null&&(yn?(r=vt,l1(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,o.stateNode),Kl(r)):l1(vt,o.stateNode));break;case 4:c=vt,d=yn,vt=o.stateNode.containerInfo,yn=!0,Jr(r,s,o),vt=c,yn=d;break;case 0:case 11:case 14:case 15:Ot||Mi(2,o,s),Ot||Mi(4,o,s),Jr(r,s,o);break;case 1:Ot||(Er(o,s),c=o.stateNode,typeof c.componentWillUnmount=="function"&&hS(o,s,c)),Jr(r,s,o);break;case 21:Jr(r,s,o);break;case 22:Ot=(c=Ot)||o.memoizedState!==null,Jr(r,s,o),Ot=c;break;default:Jr(r,s,o)}}function SS(r,s){if(s.memoizedState===null&&(r=s.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{Kl(r)}catch(o){dt(s,s.return,o)}}function wO(r){switch(r.tag){case 13:case 19:var s=r.stateNode;return s===null&&(s=r.stateNode=new yS),s;case 22:return r=r.stateNode,s=r._retryCache,s===null&&(s=r._retryCache=new yS),s;default:throw Error(i(435,r.tag))}}function _m(r,s){var o=wO(r);s.forEach(function(c){var d=OO.bind(null,r,c);o.has(c)||(o.add(c),c.then(d,d))})}function Tn(r,s){var o=s.deletions;if(o!==null)for(var c=0;c<o.length;c++){var d=o[c],m=r,b=s,E=b;e:for(;E!==null;){switch(E.tag){case 27:if(Bi(E.type)){vt=E.stateNode,yn=!1;break e}break;case 5:vt=E.stateNode,yn=!1;break e;case 3:case 4:vt=E.stateNode.containerInfo,yn=!0;break e}E=E.return}if(vt===null)throw Error(i(160));bS(m,b,d),vt=null,yn=!1,m=d.alternate,m!==null&&(m.return=null),d.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)wS(s,r),s=s.sibling}var nr=null;function wS(r,s){var o=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:Tn(s,r),Cn(r),c&4&&(Mi(3,r,r.return),Nl(3,r),Mi(5,r,r.return));break;case 1:Tn(s,r),Cn(r),c&512&&(Ot||o===null||Er(o,o.return)),c&64&&Zr&&(r=r.updateQueue,r!==null&&(c=r.callbacks,c!==null&&(o=r.shared.hiddenCallbacks,r.shared.hiddenCallbacks=o===null?c:o.concat(c))));break;case 26:var d=nr;if(Tn(s,r),Cn(r),c&512&&(Ot||o===null||Er(o,o.return)),c&4){var m=o!==null?o.memoizedState:null;if(c=r.memoizedState,o===null)if(c===null)if(r.stateNode===null){e:{c=r.type,o=r.memoizedProps,d=d.ownerDocument||d;t:switch(c){case"title":m=d.getElementsByTagName("title")[0],(!m||m[_e]||m[ce]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=d.createElement(c),d.head.insertBefore(m,d.querySelector("head > title"))),Xt(m,c,o),m[ce]=r,ke(m),c=m;break e;case"link":var b=g1("link","href",d).get(c+(o.href||""));if(b){for(var E=0;E<b.length;E++)if(m=b[E],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){b.splice(E,1);break t}}m=d.createElement(c),Xt(m,c,o),d.head.appendChild(m);break;case"meta":if(b=g1("meta","content",d).get(c+(o.content||""))){for(E=0;E<b.length;E++)if(m=b[E],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){b.splice(E,1);break t}}m=d.createElement(c),Xt(m,c,o),d.head.appendChild(m);break;default:throw Error(i(468,c))}m[ce]=r,ke(m),c=m}r.stateNode=c}else y1(d,r.type,r.stateNode);else r.stateNode=m1(d,c,r.memoizedProps);else m!==c?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,c===null?y1(d,r.type,r.stateNode):m1(d,c,r.memoizedProps)):c===null&&r.stateNode!==null&&mm(r,r.memoizedProps,o.memoizedProps)}break;case 27:Tn(s,r),Cn(r),c&512&&(Ot||o===null||Er(o,o.return)),o!==null&&c&4&&mm(r,r.memoizedProps,o.memoizedProps);break;case 5:if(Tn(s,r),Cn(r),c&512&&(Ot||o===null||Er(o,o.return)),r.flags&32){d=r.stateNode;try{Ma(d,"")}catch(J){dt(r,r.return,J)}}c&4&&r.stateNode!=null&&(d=r.memoizedProps,mm(r,d,o!==null?o.memoizedProps:d)),c&1024&&(vm=!0);break;case 6:if(Tn(s,r),Cn(r),c&4){if(r.stateNode===null)throw Error(i(162));c=r.memoizedProps,o=r.stateNode;try{o.nodeValue=c}catch(J){dt(r,r.return,J)}}break;case 3:if(Id=null,d=nr,nr=Rd(s.containerInfo),Tn(s,r),nr=d,Cn(r),c&4&&o!==null&&o.memoizedState.isDehydrated)try{Kl(s.containerInfo)}catch(J){dt(r,r.return,J)}vm&&(vm=!1,ES(r));break;case 4:c=nr,nr=Rd(r.stateNode.containerInfo),Tn(s,r),Cn(r),nr=c;break;case 12:Tn(s,r),Cn(r);break;case 13:Tn(s,r),Cn(r),r.child.flags&8192&&r.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Tm=Yt()),c&4&&(c=r.updateQueue,c!==null&&(r.updateQueue=null,_m(r,c)));break;case 22:d=r.memoizedState!==null;var L=o!==null&&o.memoizedState!==null,W=Zr,re=Ot;if(Zr=W||d,Ot=re||L,Tn(s,r),Ot=re,Zr=W,Cn(r),c&8192)e:for(s=r.stateNode,s._visibility=d?s._visibility&-2:s._visibility|1,d&&(o===null||L||Zr||Ot||$s(r)),o=null,s=r;;){if(s.tag===5||s.tag===26){if(o===null){L=o=s;try{if(m=L.stateNode,d)b=m.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{E=L.stateNode;var ae=L.memoizedProps.style,Z=ae!=null&&ae.hasOwnProperty("display")?ae.display:null;E.style.display=Z==null||typeof Z=="boolean"?"":(""+Z).trim()}}catch(J){dt(L,L.return,J)}}}else if(s.tag===6){if(o===null){L=s;try{L.stateNode.nodeValue=d?"":L.memoizedProps}catch(J){dt(L,L.return,J)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===r)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break e;for(;s.sibling===null;){if(s.return===null||s.return===r)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}c&4&&(c=r.updateQueue,c!==null&&(o=c.retryQueue,o!==null&&(c.retryQueue=null,_m(r,o))));break;case 19:Tn(s,r),Cn(r),c&4&&(c=r.updateQueue,c!==null&&(r.updateQueue=null,_m(r,c)));break;case 30:break;case 21:break;default:Tn(s,r),Cn(r)}}function Cn(r){var s=r.flags;if(s&2){try{for(var o,c=r.return;c!==null;){if(mS(c)){o=c;break}c=c.return}if(o==null)throw Error(i(160));switch(o.tag){case 27:var d=o.stateNode,m=gm(r);pd(r,m,d);break;case 5:var b=o.stateNode;o.flags&32&&(Ma(b,""),o.flags&=-33);var E=gm(r);pd(r,E,b);break;case 3:case 4:var L=o.stateNode.containerInfo,W=gm(r);ym(r,W,L);break;default:throw Error(i(161))}}catch(re){dt(r,r.return,re)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function ES(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var s=r;ES(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),r=r.sibling}}function ki(r,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)vS(r,s.alternate,s),s=s.sibling}function $s(r){for(r=r.child;r!==null;){var s=r;switch(s.tag){case 0:case 11:case 14:case 15:Mi(4,s,s.return),$s(s);break;case 1:Er(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&hS(s,s.return,o),$s(s);break;case 27:Hl(s.stateNode);case 26:case 5:Er(s,s.return),$s(s);break;case 22:s.memoizedState===null&&$s(s);break;case 30:$s(s);break;default:$s(s)}r=r.sibling}}function Li(r,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var c=s.alternate,d=r,m=s,b=m.flags;switch(m.tag){case 0:case 11:case 15:Li(d,m,o),Nl(4,m);break;case 1:if(Li(d,m,o),c=m,d=c.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(W){dt(c,c.return,W)}if(c=m,d=c.updateQueue,d!==null){var E=c.stateNode;try{var L=d.shared.hiddenCallbacks;if(L!==null)for(d.shared.hiddenCallbacks=null,d=0;d<L.length;d++)Zb(L[d],E)}catch(W){dt(c,c.return,W)}}o&&b&64&&fS(m),Ml(m,m.return);break;case 27:gS(m);case 26:case 5:Li(d,m,o),o&&c===null&&b&4&&pS(m),Ml(m,m.return);break;case 12:Li(d,m,o);break;case 13:Li(d,m,o),o&&b&4&&SS(d,m);break;case 22:m.memoizedState===null&&Li(d,m,o),Ml(m,m.return);break;case 30:break;default:Li(d,m,o)}s=s.sibling}}function bm(r,s){var o=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==o&&(r!=null&&r.refCount++,o!=null&&vl(o))}function Sm(r,s){r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&vl(r))}function xr(r,s,o,c){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)xS(r,s,o,c),s=s.sibling}function xS(r,s,o,c){var d=s.flags;switch(s.tag){case 0:case 11:case 15:xr(r,s,o,c),d&2048&&Nl(9,s);break;case 1:xr(r,s,o,c);break;case 3:xr(r,s,o,c),d&2048&&(r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&vl(r)));break;case 12:if(d&2048){xr(r,s,o,c),r=s.stateNode;try{var m=s.memoizedProps,b=m.id,E=m.onPostCommit;typeof E=="function"&&E(b,s.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(L){dt(s,s.return,L)}}else xr(r,s,o,c);break;case 13:xr(r,s,o,c);break;case 23:break;case 22:m=s.stateNode,b=s.alternate,s.memoizedState!==null?m._visibility&2?xr(r,s,o,c):kl(r,s):m._visibility&2?xr(r,s,o,c):(m._visibility|=2,Za(r,s,o,c,(s.subtreeFlags&10256)!==0)),d&2048&&bm(b,s);break;case 24:xr(r,s,o,c),d&2048&&Sm(s.alternate,s);break;default:xr(r,s,o,c)}}function Za(r,s,o,c,d){for(d=d&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var m=r,b=s,E=o,L=c,W=b.flags;switch(b.tag){case 0:case 11:case 15:Za(m,b,E,L,d),Nl(8,b);break;case 23:break;case 22:var re=b.stateNode;b.memoizedState!==null?re._visibility&2?Za(m,b,E,L,d):kl(m,b):(re._visibility|=2,Za(m,b,E,L,d)),d&&W&2048&&bm(b.alternate,b);break;case 24:Za(m,b,E,L,d),d&&W&2048&&Sm(b.alternate,b);break;default:Za(m,b,E,L,d)}s=s.sibling}}function kl(r,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=r,c=s,d=c.flags;switch(c.tag){case 22:kl(o,c),d&2048&&bm(c.alternate,c);break;case 24:kl(o,c),d&2048&&Sm(c.alternate,c);break;default:kl(o,c)}s=s.sibling}}var Ll=8192;function Ja(r){if(r.subtreeFlags&Ll)for(r=r.child;r!==null;)TS(r),r=r.sibling}function TS(r){switch(r.tag){case 26:Ja(r),r.flags&Ll&&r.memoizedState!==null&&oN(nr,r.memoizedState,r.memoizedProps);break;case 5:Ja(r);break;case 3:case 4:var s=nr;nr=Rd(r.stateNode.containerInfo),Ja(r),nr=s;break;case 22:r.memoizedState===null&&(s=r.alternate,s!==null&&s.memoizedState!==null?(s=Ll,Ll=16777216,Ja(r),Ll=s):Ja(r));break;default:Ja(r)}}function CS(r){var s=r.alternate;if(s!==null&&(r=s.child,r!==null)){s.child=null;do s=r.sibling,r.sibling=null,r=s;while(r!==null)}}function Pl(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var c=s[o];Bt=c,AS(c,r)}CS(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)RS(r),r=r.sibling}function RS(r){switch(r.tag){case 0:case 11:case 15:Pl(r),r.flags&2048&&Mi(9,r,r.return);break;case 3:Pl(r);break;case 12:Pl(r);break;case 22:var s=r.stateNode;r.memoizedState!==null&&s._visibility&2&&(r.return===null||r.return.tag!==13)?(s._visibility&=-3,md(r)):Pl(r);break;default:Pl(r)}}function md(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var c=s[o];Bt=c,AS(c,r)}CS(r)}for(r=r.child;r!==null;){switch(s=r,s.tag){case 0:case 11:case 15:Mi(8,s,s.return),md(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,md(s));break;default:md(s)}r=r.sibling}}function AS(r,s){for(;Bt!==null;){var o=Bt;switch(o.tag){case 0:case 11:case 15:Mi(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var c=o.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:vl(o.memoizedState.cache)}if(c=o.child,c!==null)c.return=o,Bt=c;else e:for(o=r;Bt!==null;){c=Bt;var d=c.sibling,m=c.return;if(_S(c),c===o){Bt=null;break e}if(d!==null){d.return=m,Bt=d;break e}Bt=m}}}var EO={getCacheForType:function(r){var s=nn(Pt),o=s.data.get(r);return o===void 0&&(o=r(),s.data.set(r,o)),o}},xO=typeof WeakMap=="function"?WeakMap:Map,tt=0,ft=null,Ve=null,We=0,nt=0,Rn=null,Pi=!1,eo=!1,wm=!1,ei=0,Ct=0,ji=0,Bs=0,Em=0,qn=0,to=0,jl=null,vn=null,xm=!1,Tm=0,gd=1/0,yd=null,Ui=null,Kt=0,zi=null,no=null,ro=0,Cm=0,Rm=null,IS=null,Ul=0,Am=null;function An(){if((tt&2)!==0&&We!==0)return We&-We;if(U.T!==null){var r=qa;return r!==0?r:Lm()}return j()}function DS(){qn===0&&(qn=(We&536870912)===0||Je?Ia():536870912);var r=Fn.current;return r!==null&&(r.flags|=32),qn}function In(r,s,o){(r===ft&&(nt===2||nt===9)||r.cancelPendingCommit!==null)&&(io(r,0),$i(r,We,qn,!1)),xs(r,o),((tt&2)===0||r!==ft)&&(r===ft&&((tt&2)===0&&(Bs|=o),Ct===4&&$i(r,We,qn,!1)),Tr(r))}function OS(r,s,o){if((tt&6)!==0)throw Error(i(327));var c=!o&&(s&124)===0&&(s&r.expiredLanes)===0||_r(r,s),d=c?RO(r,s):Om(r,s,!0),m=c;do{if(d===0){eo&&!c&&$i(r,s,0,!1);break}else{if(o=r.current.alternate,m&&!TO(o)){d=Om(r,s,!1),m=!1;continue}if(d===2){if(m=s,r.errorRecoveryDisabledLanes&m)var b=0;else b=r.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){s=b;e:{var E=r;d=jl;var L=E.current.memoizedState.isDehydrated;if(L&&(io(E,b).flags|=256),b=Om(E,b,!1),b!==2){if(wm&&!L){E.errorRecoveryDisabledLanes|=m,Bs|=m,d=4;break e}m=vn,vn=d,m!==null&&(vn===null?vn=m:vn.push.apply(vn,m))}d=b}if(m=!1,d!==2)continue}}if(d===1){io(r,0),$i(r,s,0,!0);break}e:{switch(c=r,m=d,m){case 0:case 1:throw Error(i(345));case 4:if((s&4194048)!==s)break;case 6:$i(c,s,qn,!Pi);break e;case 2:vn=null;break;case 3:case 5:break;default:throw Error(i(329))}if((s&62914560)===s&&(d=Tm+300-Yt(),10<d)){if($i(c,s,qn,!Pi),Es(c,0,!0)!==0)break e;c.timeoutHandle=a1(NS.bind(null,c,o,vn,yd,xm,s,qn,Bs,to,Pi,m,2,-0,0),d);break e}NS(c,o,vn,yd,xm,s,qn,Bs,to,Pi,m,0,-0,0)}}break}while(!0);Tr(r)}function NS(r,s,o,c,d,m,b,E,L,W,re,ae,Z,J){if(r.timeoutHandle=-1,ae=s.subtreeFlags,(ae&8192||(ae&16785408)===16785408)&&(Vl={stylesheets:null,count:0,unsuspend:aN},TS(s),ae=lN(),ae!==null)){r.cancelPendingCommit=ae(zS.bind(null,r,s,m,o,c,d,b,E,L,re,1,Z,J)),$i(r,m,b,!W);return}zS(r,s,m,o,c,d,b,E,L)}function TO(r){for(var s=r;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var c=0;c<o.length;c++){var d=o[c],m=d.getSnapshot;d=d.value;try{if(!En(m(),d))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function $i(r,s,o,c){s&=~Em,s&=~Bs,r.suspendedLanes|=s,r.pingedLanes&=~s,c&&(r.warmLanes|=s),c=r.expirationTimes;for(var d=s;0<d;){var m=31-Qt(d),b=1<<m;c[m]=-1,d&=~b}o!==0&&Ts(r,o,s)}function vd(){return(tt&6)===0?(zl(0),!1):!0}function Im(){if(Ve!==null){if(nt===0)var r=Ve.return;else r=Ve,Gr=Ls=null,Gp(r),Ka=null,Il=0,r=Ve;for(;r!==null;)dS(r.alternate,r),r=r.return;Ve=null}}function io(r,s){var o=r.timeoutHandle;o!==-1&&(r.timeoutHandle=-1,FO(o)),o=r.cancelPendingCommit,o!==null&&(r.cancelPendingCommit=null,o()),Im(),ft=r,Ve=o=Fr(r.current,null),We=s,nt=0,Rn=null,Pi=!1,eo=_r(r,s),wm=!1,to=qn=Em=Bs=ji=Ct=0,vn=jl=null,xm=!1,(s&8)!==0&&(s|=s&32);var c=r.entangledLanes;if(c!==0)for(r=r.entanglements,c&=s;0<c;){var d=31-Qt(c),m=1<<d;s|=r[d],c&=~m}return ei=s,$u(),o}function MS(r,s){Be=null,U.H=sd,s===bl||s===Wu?(s=Kb(),nt=3):s===Yb?(s=Kb(),nt=4):nt=s===X0?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,Rn=s,Ve===null&&(Ct=1,ud(r,zn(s,r.current)))}function kS(){var r=U.H;return U.H=sd,r===null?sd:r}function LS(){var r=U.A;return U.A=EO,r}function Dm(){Ct=4,Pi||(We&4194048)!==We&&Fn.current!==null||(eo=!0),(ji&134217727)===0&&(Bs&134217727)===0||ft===null||$i(ft,We,qn,!1)}function Om(r,s,o){var c=tt;tt|=2;var d=kS(),m=LS();(ft!==r||We!==s)&&(yd=null,io(r,s)),s=!1;var b=Ct;e:do try{if(nt!==0&&Ve!==null){var E=Ve,L=Rn;switch(nt){case 8:Im(),b=6;break e;case 3:case 2:case 9:case 6:Fn.current===null&&(s=!0);var W=nt;if(nt=0,Rn=null,so(r,E,L,W),o&&eo){b=0;break e}break;default:W=nt,nt=0,Rn=null,so(r,E,L,W)}}CO(),b=Ct;break}catch(re){MS(r,re)}while(!0);return s&&r.shellSuspendCounter++,Gr=Ls=null,tt=c,U.H=d,U.A=m,Ve===null&&(ft=null,We=0,$u()),b}function CO(){for(;Ve!==null;)PS(Ve)}function RO(r,s){var o=tt;tt|=2;var c=kS(),d=LS();ft!==r||We!==s?(yd=null,gd=Yt()+500,io(r,s)):eo=_r(r,s);e:do try{if(nt!==0&&Ve!==null){s=Ve;var m=Rn;t:switch(nt){case 1:nt=0,Rn=null,so(r,s,m,1);break;case 2:case 9:if(Qb(m)){nt=0,Rn=null,jS(s);break}s=function(){nt!==2&&nt!==9||ft!==r||(nt=7),Tr(r)},m.then(s,s);break e;case 3:nt=7;break e;case 4:nt=5;break e;case 7:Qb(m)?(nt=0,Rn=null,jS(s)):(nt=0,Rn=null,so(r,s,m,7));break;case 5:var b=null;switch(Ve.tag){case 26:b=Ve.memoizedState;case 5:case 27:var E=Ve;if(!b||v1(b)){nt=0,Rn=null;var L=E.sibling;if(L!==null)Ve=L;else{var W=E.return;W!==null?(Ve=W,_d(W)):Ve=null}break t}}nt=0,Rn=null,so(r,s,m,5);break;case 6:nt=0,Rn=null,so(r,s,m,6);break;case 8:Im(),Ct=6;break e;default:throw Error(i(462))}}AO();break}catch(re){MS(r,re)}while(!0);return Gr=Ls=null,U.H=c,U.A=d,tt=o,Ve!==null?0:(ft=null,We=0,$u(),Ct)}function AO(){for(;Ve!==null&&!Ln();)PS(Ve)}function PS(r){var s=cS(r.alternate,r,ei);r.memoizedProps=r.pendingProps,s===null?_d(r):Ve=s}function jS(r){var s=r,o=s.alternate;switch(s.tag){case 15:case 0:s=rS(o,s,s.pendingProps,s.type,void 0,We);break;case 11:s=rS(o,s,s.pendingProps,s.type.render,s.ref,We);break;case 5:Gp(s);default:dS(o,s),s=Ve=Ub(s,ei),s=cS(o,s,ei)}r.memoizedProps=r.pendingProps,s===null?_d(r):Ve=s}function so(r,s,o,c){Gr=Ls=null,Gp(s),Ka=null,Il=0;var d=s.return;try{if(yO(r,d,s,o,We)){Ct=1,ud(r,zn(o,r.current)),Ve=null;return}}catch(m){if(d!==null)throw Ve=d,m;Ct=1,ud(r,zn(o,r.current)),Ve=null;return}s.flags&32768?(Je||c===1?r=!0:eo||(We&536870912)!==0?r=!1:(Pi=r=!0,(c===2||c===9||c===3||c===6)&&(c=Fn.current,c!==null&&c.tag===13&&(c.flags|=16384))),US(s,r)):_d(s)}function _d(r){var s=r;do{if((s.flags&32768)!==0){US(s,Pi);return}r=s.return;var o=_O(s.alternate,s,ei);if(o!==null){Ve=o;return}if(s=s.sibling,s!==null){Ve=s;return}Ve=s=r}while(s!==null);Ct===0&&(Ct=5)}function US(r,s){do{var o=bO(r.alternate,r);if(o!==null){o.flags&=32767,Ve=o;return}if(o=r.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(r=r.sibling,r!==null)){Ve=r;return}Ve=r=o}while(r!==null);Ct=6,Ve=null}function zS(r,s,o,c,d,m,b,E,L){r.cancelPendingCommit=null;do bd();while(Kt!==0);if((tt&6)!==0)throw Error(i(327));if(s!==null){if(s===r.current)throw Error(i(177));if(m=s.lanes|s.childLanes,m|=Sp,Au(r,o,m,b,E,L),r===ft&&(Ve=ft=null,We=0),no=s,zi=r,ro=o,Cm=m,Rm=d,IS=c,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,NO(Aa,function(){return qS(),null})):(r.callbackNode=null,r.callbackPriority=0),c=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||c){c=U.T,U.T=null,d=ee.p,ee.p=2,b=tt,tt|=4;try{SO(r,s,o)}finally{tt=b,ee.p=d,U.T=c}}Kt=1,$S(),BS(),HS()}}function $S(){if(Kt===1){Kt=0;var r=zi,s=no,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=U.T,U.T=null;var c=ee.p;ee.p=2;var d=tt;tt|=4;try{wS(s,r);var m=Fm,b=Ab(r.containerInfo),E=m.focusedElem,L=m.selectionRange;if(b!==E&&E&&E.ownerDocument&&Rb(E.ownerDocument.documentElement,E)){if(L!==null&&gp(E)){var W=L.start,re=L.end;if(re===void 0&&(re=W),"selectionStart"in E)E.selectionStart=W,E.selectionEnd=Math.min(re,E.value.length);else{var ae=E.ownerDocument||document,Z=ae&&ae.defaultView||window;if(Z.getSelection){var J=Z.getSelection(),Me=E.textContent.length,Ce=Math.min(L.start,Me),ot=L.end===void 0?Ce:Math.min(L.end,Me);!J.extend&&Ce>ot&&(b=ot,ot=Ce,Ce=b);var q=Cb(E,Ce),z=Cb(E,ot);if(q&&z&&(J.rangeCount!==1||J.anchorNode!==q.node||J.anchorOffset!==q.offset||J.focusNode!==z.node||J.focusOffset!==z.offset)){var Q=ae.createRange();Q.setStart(q.node,q.offset),J.removeAllRanges(),Ce>ot?(J.addRange(Q),J.extend(z.node,z.offset)):(Q.setEnd(z.node,z.offset),J.addRange(Q))}}}}for(ae=[],J=E;J=J.parentNode;)J.nodeType===1&&ae.push({element:J,left:J.scrollLeft,top:J.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<ae.length;E++){var se=ae[E];se.element.scrollLeft=se.left,se.element.scrollTop=se.top}}Nd=!!Hm,Fm=Hm=null}finally{tt=d,ee.p=c,U.T=o}}r.current=s,Kt=2}}function BS(){if(Kt===2){Kt=0;var r=zi,s=no,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=U.T,U.T=null;var c=ee.p;ee.p=2;var d=tt;tt|=4;try{vS(r,s.alternate,s)}finally{tt=d,ee.p=c,U.T=o}}Kt=3}}function HS(){if(Kt===4||Kt===3){Kt=0,Lr();var r=zi,s=no,o=ro,c=IS;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?Kt=5:(Kt=0,no=zi=null,FS(r,r.pendingLanes));var d=r.pendingLanes;if(d===0&&(Ui=null),il(o),s=s.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(hn,s,void 0,(s.current.flags&128)===128)}catch{}if(c!==null){s=U.T,d=ee.p,ee.p=2,U.T=null;try{for(var m=r.onRecoverableError,b=0;b<c.length;b++){var E=c[b];m(E.value,{componentStack:E.stack})}}finally{U.T=s,ee.p=d}}(ro&3)!==0&&bd(),Tr(r),d=r.pendingLanes,(o&4194090)!==0&&(d&42)!==0?r===Am?Ul++:(Ul=0,Am=r):Ul=0,zl(0)}}function FS(r,s){(r.pooledCacheLanes&=s)===0&&(s=r.pooledCache,s!=null&&(r.pooledCache=null,vl(s)))}function bd(r){return $S(),BS(),HS(),qS()}function qS(){if(Kt!==5)return!1;var r=zi,s=Cm;Cm=0;var o=il(ro),c=U.T,d=ee.p;try{ee.p=32>o?32:o,U.T=null,o=Rm,Rm=null;var m=zi,b=ro;if(Kt=0,no=zi=null,ro=0,(tt&6)!==0)throw Error(i(331));var E=tt;if(tt|=4,RS(m.current),xS(m,m.current,b,o),tt=E,zl(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(hn,m)}catch{}return!0}finally{ee.p=d,U.T=c,FS(r,s)}}function VS(r,s,o){s=zn(o,s),s=am(r.stateNode,s,2),r=Ii(r,s,2),r!==null&&(xs(r,2),Tr(r))}function dt(r,s,o){if(r.tag===3)VS(r,r,o);else for(;s!==null;){if(s.tag===3){VS(s,r,o);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Ui===null||!Ui.has(c))){r=zn(o,r),o=W0(2),c=Ii(s,o,2),c!==null&&(K0(o,c,s,r),xs(c,2),Tr(c));break}}s=s.return}}function Nm(r,s,o){var c=r.pingCache;if(c===null){c=r.pingCache=new xO;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(o)||(wm=!0,d.add(o),r=IO.bind(null,r,s,o),s.then(r,r))}function IO(r,s,o){var c=r.pingCache;c!==null&&c.delete(s),r.pingedLanes|=r.suspendedLanes&o,r.warmLanes&=~o,ft===r&&(We&o)===o&&(Ct===4||Ct===3&&(We&62914560)===We&&300>Yt()-Tm?(tt&2)===0&&io(r,0):Em|=o,to===We&&(to=0)),Tr(r)}function GS(r,s){s===0&&(s=Ru()),r=$a(r,s),r!==null&&(xs(r,s),Tr(r))}function DO(r){var s=r.memoizedState,o=0;s!==null&&(o=s.retryLane),GS(r,o)}function OO(r,s){var o=0;switch(r.tag){case 13:var c=r.stateNode,d=r.memoizedState;d!==null&&(o=d.retryLane);break;case 19:c=r.stateNode;break;case 22:c=r.stateNode._retryCache;break;default:throw Error(i(314))}c!==null&&c.delete(s),GS(r,o)}function NO(r,s){return kn(r,s)}var Sd=null,ao=null,Mm=!1,wd=!1,km=!1,Hs=0;function Tr(r){r!==ao&&r.next===null&&(ao===null?Sd=ao=r:ao=ao.next=r),wd=!0,Mm||(Mm=!0,kO())}function zl(r,s){if(!km&&wd){km=!0;do for(var o=!1,c=Sd;c!==null;){if(r!==0){var d=c.pendingLanes;if(d===0)var m=0;else{var b=c.suspendedLanes,E=c.pingedLanes;m=(1<<31-Qt(42|r)+1)-1,m&=d&~(b&~E),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,KS(c,m))}else m=We,m=Es(c,c===ft?m:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(m&3)===0||_r(c,m)||(o=!0,KS(c,m));c=c.next}while(o);km=!1}}function MO(){YS()}function YS(){wd=Mm=!1;var r=0;Hs!==0&&(HO()&&(r=Hs),Hs=0);for(var s=Yt(),o=null,c=Sd;c!==null;){var d=c.next,m=QS(c,s);m===0?(c.next=null,o===null?Sd=d:o.next=d,d===null&&(ao=o)):(o=c,(r!==0||(m&3)!==0)&&(wd=!0)),c=d}zl(r)}function QS(r,s){for(var o=r.suspendedLanes,c=r.pingedLanes,d=r.expirationTimes,m=r.pendingLanes&-62914561;0<m;){var b=31-Qt(m),E=1<<b,L=d[b];L===-1?((E&o)===0||(E&c)!==0)&&(d[b]=Cu(E,s)):L<=s&&(r.expiredLanes|=E),m&=~E}if(s=ft,o=We,o=Es(r,r===s?o:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),c=r.callbackNode,o===0||r===s&&(nt===2||nt===9)||r.cancelPendingCommit!==null)return c!==null&&c!==null&&Et(c),r.callbackNode=null,r.callbackPriority=0;if((o&3)===0||_r(r,o)){if(s=o&-o,s===r.callbackPriority)return s;switch(c!==null&&Et(c),il(o)){case 2:case 8:o=Ra;break;case 32:o=Aa;break;case 268435456:o=wi;break;default:o=Aa}return c=WS.bind(null,r),o=kn(o,c),r.callbackPriority=s,r.callbackNode=o,s}return c!==null&&c!==null&&Et(c),r.callbackPriority=2,r.callbackNode=null,2}function WS(r,s){if(Kt!==0&&Kt!==5)return r.callbackNode=null,r.callbackPriority=0,null;var o=r.callbackNode;if(bd()&&r.callbackNode!==o)return null;var c=We;return c=Es(r,r===ft?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),c===0?null:(OS(r,c,s),QS(r,Yt()),r.callbackNode!=null&&r.callbackNode===o?WS.bind(null,r):null)}function KS(r,s){if(bd())return null;OS(r,s,!0)}function kO(){qO(function(){(tt&6)!==0?kn(bs,MO):YS()})}function Lm(){return Hs===0&&(Hs=Ia()),Hs}function XS(r){return r==null||typeof r=="symbol"||typeof r=="boolean"?null:typeof r=="function"?r:Mu(""+r)}function ZS(r,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,r.id&&o.setAttribute("form",r.id),s.parentNode.insertBefore(o,s),r=new FormData(r),o.parentNode.removeChild(o),r}function LO(r,s,o,c,d){if(s==="submit"&&o&&o.stateNode===d){var m=XS((d[fe]||null).action),b=c.submitter;b&&(s=(s=b[fe]||null)?XS(s.formAction):b.getAttribute("formAction"),s!==null&&(m=s,b=null));var E=new ju("action","action",null,c,d);r.push({event:E,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(Hs!==0){var L=b?ZS(d,b):new FormData(d);tm(o,{pending:!0,data:L,method:d.method,action:m},null,L)}}else typeof m=="function"&&(E.preventDefault(),L=b?ZS(d,b):new FormData(d),tm(o,{pending:!0,data:L,method:d.method,action:m},m,L))},currentTarget:d}]})}}for(var Pm=0;Pm<bp.length;Pm++){var jm=bp[Pm],PO=jm.toLowerCase(),jO=jm[0].toUpperCase()+jm.slice(1);tr(PO,"on"+jO)}tr(Ob,"onAnimationEnd"),tr(Nb,"onAnimationIteration"),tr(Mb,"onAnimationStart"),tr("dblclick","onDoubleClick"),tr("focusin","onFocus"),tr("focusout","onBlur"),tr(eO,"onTransitionRun"),tr(tO,"onTransitionStart"),tr(nO,"onTransitionCancel"),tr(kb,"onTransitionEnd"),ln("onMouseEnter",["mouseout","mouseover"]),ln("onMouseLeave",["mouseout","mouseover"]),ln("onPointerEnter",["pointerout","pointerover"]),ln("onPointerLeave",["pointerout","pointerover"]),wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),wn("onBeforeInput",["compositionend","keypress","textInput","paste"]),wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $l="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),UO=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat($l));function JS(r,s){s=(s&4)!==0;for(var o=0;o<r.length;o++){var c=r[o],d=c.event;c=c.listeners;e:{var m=void 0;if(s)for(var b=c.length-1;0<=b;b--){var E=c[b],L=E.instance,W=E.currentTarget;if(E=E.listener,L!==m&&d.isPropagationStopped())break e;m=E,d.currentTarget=W;try{m(d)}catch(re){cd(re)}d.currentTarget=null,m=L}else for(b=0;b<c.length;b++){if(E=c[b],L=E.instance,W=E.currentTarget,E=E.listener,L!==m&&d.isPropagationStopped())break e;m=E,d.currentTarget=W;try{m(d)}catch(re){cd(re)}d.currentTarget=null,m=L}}}}function Ge(r,s){var o=s[we];o===void 0&&(o=s[we]=new Set);var c=r+"__bubble";o.has(c)||(e1(s,r,2,!1),o.add(c))}function Um(r,s,o){var c=0;s&&(c|=4),e1(o,r,c,s)}var Ed="_reactListening"+Math.random().toString(36).slice(2);function zm(r){if(!r[Ed]){r[Ed]=!0,it.forEach(function(o){o!=="selectionchange"&&(UO.has(o)||Um(o,!1,r),Um(o,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[Ed]||(s[Ed]=!0,Um("selectionchange",!1,s))}}function e1(r,s,o,c){switch(x1(s)){case 2:var d=dN;break;case 8:d=fN;break;default:d=Jm}o=d.bind(null,s,o,r),d=void 0,!op||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?r.addEventListener(s,o,{capture:!0,passive:d}):r.addEventListener(s,o,!0):d!==void 0?r.addEventListener(s,o,{passive:d}):r.addEventListener(s,o,!1)}function $m(r,s,o,c,d){var m=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var b=c.tag;if(b===3||b===4){var E=c.stateNode.containerInfo;if(E===d)break;if(b===4)for(b=c.return;b!==null;){var L=b.tag;if((L===3||L===4)&&b.stateNode.containerInfo===d)return;b=b.return}for(;E!==null;){if(b=ze(E),b===null)return;if(L=b.tag,L===5||L===6||L===26||L===27){c=m=b;continue e}E=E.parentNode}}c=c.return}ob(function(){var W=m,re=sp(o),ae=[];e:{var Z=Lb.get(r);if(Z!==void 0){var J=ju,Me=r;switch(r){case"keypress":if(Lu(o)===0)break e;case"keydown":case"keyup":J=ND;break;case"focusin":Me="focus",J=dp;break;case"focusout":Me="blur",J=dp;break;case"beforeblur":case"afterblur":J=dp;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":J=ub;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":J=bD;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":J=LD;break;case Ob:case Nb:case Mb:J=ED;break;case kb:J=jD;break;case"scroll":case"scrollend":J=vD;break;case"wheel":J=zD;break;case"copy":case"cut":case"paste":J=TD;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":J=fb;break;case"toggle":case"beforetoggle":J=BD}var Ce=(s&4)!==0,ot=!Ce&&(r==="scroll"||r==="scrollend"),q=Ce?Z!==null?Z+"Capture":null:Z;Ce=[];for(var z=W,Q;z!==null;){var se=z;if(Q=se.stateNode,se=se.tag,se!==5&&se!==26&&se!==27||Q===null||q===null||(se=sl(z,q),se!=null&&Ce.push(Bl(z,se,Q))),ot)break;z=z.return}0<Ce.length&&(Z=new J(Z,Me,null,o,re),ae.push({event:Z,listeners:Ce}))}}if((s&7)===0){e:{if(Z=r==="mouseover"||r==="pointerover",J=r==="mouseout"||r==="pointerout",Z&&o!==ip&&(Me=o.relatedTarget||o.fromElement)&&(ze(Me)||Me[ye]))break e;if((J||Z)&&(Z=re.window===re?re:(Z=re.ownerDocument)?Z.defaultView||Z.parentWindow:window,J?(Me=o.relatedTarget||o.toElement,J=W,Me=Me?ze(Me):null,Me!==null&&(ot=l(Me),Ce=Me.tag,Me!==ot||Ce!==5&&Ce!==27&&Ce!==6)&&(Me=null)):(J=null,Me=W),J!==Me)){if(Ce=ub,se="onMouseLeave",q="onMouseEnter",z="mouse",(r==="pointerout"||r==="pointerover")&&(Ce=fb,se="onPointerLeave",q="onPointerEnter",z="pointer"),ot=J==null?Z:yt(J),Q=Me==null?Z:yt(Me),Z=new Ce(se,z+"leave",J,o,re),Z.target=ot,Z.relatedTarget=Q,se=null,ze(re)===W&&(Ce=new Ce(q,z+"enter",Me,o,re),Ce.target=Q,Ce.relatedTarget=ot,se=Ce),ot=se,J&&Me)t:{for(Ce=J,q=Me,z=0,Q=Ce;Q;Q=oo(Q))z++;for(Q=0,se=q;se;se=oo(se))Q++;for(;0<z-Q;)Ce=oo(Ce),z--;for(;0<Q-z;)q=oo(q),Q--;for(;z--;){if(Ce===q||q!==null&&Ce===q.alternate)break t;Ce=oo(Ce),q=oo(q)}Ce=null}else Ce=null;J!==null&&t1(ae,Z,J,Ce,!1),Me!==null&&ot!==null&&t1(ae,ot,Me,Ce,!0)}}e:{if(Z=W?yt(W):window,J=Z.nodeName&&Z.nodeName.toLowerCase(),J==="select"||J==="input"&&Z.type==="file")var ge=bb;else if(vb(Z))if(Sb)ge=XD;else{ge=WD;var He=QD}else J=Z.nodeName,!J||J.toLowerCase()!=="input"||Z.type!=="checkbox"&&Z.type!=="radio"?W&&rp(W.elementType)&&(ge=bb):ge=KD;if(ge&&(ge=ge(r,W))){_b(ae,ge,o,re);break e}He&&He(r,Z,W),r==="focusout"&&W&&Z.type==="number"&&W.memoizedProps.value!=null&&np(Z,"number",Z.value)}switch(He=W?yt(W):window,r){case"focusin":(vb(He)||He.contentEditable==="true")&&(ja=He,yp=W,hl=null);break;case"focusout":hl=yp=ja=null;break;case"mousedown":vp=!0;break;case"contextmenu":case"mouseup":case"dragend":vp=!1,Ib(ae,o,re);break;case"selectionchange":if(JD)break;case"keydown":case"keyup":Ib(ae,o,re)}var Ee;if(hp)e:{switch(r){case"compositionstart":var Ie="onCompositionStart";break e;case"compositionend":Ie="onCompositionEnd";break e;case"compositionupdate":Ie="onCompositionUpdate";break e}Ie=void 0}else Pa?gb(r,o)&&(Ie="onCompositionEnd"):r==="keydown"&&o.keyCode===229&&(Ie="onCompositionStart");Ie&&(hb&&o.locale!=="ko"&&(Pa||Ie!=="onCompositionStart"?Ie==="onCompositionEnd"&&Pa&&(Ee=lb()):(Ti=re,lp="value"in Ti?Ti.value:Ti.textContent,Pa=!0)),He=xd(W,Ie),0<He.length&&(Ie=new db(Ie,r,null,o,re),ae.push({event:Ie,listeners:He}),Ee?Ie.data=Ee:(Ee=yb(o),Ee!==null&&(Ie.data=Ee)))),(Ee=FD?qD(r,o):VD(r,o))&&(Ie=xd(W,"onBeforeInput"),0<Ie.length&&(He=new db("onBeforeInput","beforeinput",null,o,re),ae.push({event:He,listeners:Ie}),He.data=Ee)),LO(ae,r,W,o,re)}JS(ae,s)})}function Bl(r,s,o){return{instance:r,listener:s,currentTarget:o}}function xd(r,s){for(var o=s+"Capture",c=[];r!==null;){var d=r,m=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||m===null||(d=sl(r,o),d!=null&&c.unshift(Bl(r,d,m)),d=sl(r,s),d!=null&&c.push(Bl(r,d,m))),r.tag===3)return c;r=r.return}return[]}function oo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r||null}function t1(r,s,o,c,d){for(var m=s._reactName,b=[];o!==null&&o!==c;){var E=o,L=E.alternate,W=E.stateNode;if(E=E.tag,L!==null&&L===c)break;E!==5&&E!==26&&E!==27||W===null||(L=W,d?(W=sl(o,m),W!=null&&b.unshift(Bl(o,W,L))):d||(W=sl(o,m),W!=null&&b.push(Bl(o,W,L)))),o=o.return}b.length!==0&&r.push({event:s,listeners:b})}var zO=/\r\n?/g,$O=/\u0000|\uFFFD/g;function n1(r){return(typeof r=="string"?r:""+r).replace(zO,`
`).replace($O,"")}function r1(r,s){return s=n1(s),n1(r)===s}function Td(){}function at(r,s,o,c,d,m){switch(o){case"children":typeof c=="string"?s==="body"||s==="textarea"&&c===""||Ma(r,c):(typeof c=="number"||typeof c=="bigint")&&s!=="body"&&Ma(r,""+c);break;case"className":$r(r,"class",c);break;case"tabIndex":$r(r,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":$r(r,o,c);break;case"style":sb(r,c,m);break;case"data":if(s!=="object"){$r(r,"data",c);break}case"src":case"href":if(c===""&&(s!=="a"||o!=="href")){r.removeAttribute(o);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){r.removeAttribute(o);break}c=Mu(""+c),r.setAttribute(o,c);break;case"action":case"formAction":if(typeof c=="function"){r.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(s!=="input"&&at(r,s,"name",d.name,d,null),at(r,s,"formEncType",d.formEncType,d,null),at(r,s,"formMethod",d.formMethod,d,null),at(r,s,"formTarget",d.formTarget,d,null)):(at(r,s,"encType",d.encType,d,null),at(r,s,"method",d.method,d,null),at(r,s,"target",d.target,d,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){r.removeAttribute(o);break}c=Mu(""+c),r.setAttribute(o,c);break;case"onClick":c!=null&&(r.onclick=Td);break;case"onScroll":c!=null&&Ge("scroll",r);break;case"onScrollEnd":c!=null&&Ge("scrollend",r);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(o=c.__html,o!=null){if(d.children!=null)throw Error(i(60));r.innerHTML=o}}break;case"multiple":r.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":r.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){r.removeAttribute("xlink:href");break}o=Mu(""+c),r.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(o,""+c):r.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(o,""):r.removeAttribute(o);break;case"capture":case"download":c===!0?r.setAttribute(o,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(o,c):r.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?r.setAttribute(o,c):r.removeAttribute(o);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?r.removeAttribute(o):r.setAttribute(o,c);break;case"popover":Ge("beforetoggle",r),Ge("toggle",r),zr(r,"popover",c);break;case"xlinkActuate":Le(r,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":Le(r,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":Le(r,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":Le(r,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":Le(r,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":Le(r,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":Le(r,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":Le(r,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":Le(r,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":zr(r,"is",c);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=gD.get(o)||o,zr(r,o,c))}}function Bm(r,s,o,c,d,m){switch(o){case"style":sb(r,c,m);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(o=c.__html,o!=null){if(d.children!=null)throw Error(i(60));r.innerHTML=o}}break;case"children":typeof c=="string"?Ma(r,c):(typeof c=="number"||typeof c=="bigint")&&Ma(r,""+c);break;case"onScroll":c!=null&&Ge("scroll",r);break;case"onScrollEnd":c!=null&&Ge("scrollend",r);break;case"onClick":c!=null&&(r.onclick=Td);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!br.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(d=o.endsWith("Capture"),s=o.slice(2,d?o.length-7:void 0),m=r[fe]||null,m=m!=null?m[o]:null,typeof m=="function"&&r.removeEventListener(s,m,d),typeof c=="function")){typeof m!="function"&&m!==null&&(o in r?r[o]=null:r.hasAttribute(o)&&r.removeAttribute(o)),r.addEventListener(s,c,d);break e}o in r?r[o]=c:c===!0?r.setAttribute(o,""):zr(r,o,c)}}}function Xt(r,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ge("error",r),Ge("load",r);var c=!1,d=!1,m;for(m in o)if(o.hasOwnProperty(m)){var b=o[m];if(b!=null)switch(m){case"src":c=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:at(r,s,m,b,o,null)}}d&&at(r,s,"srcSet",o.srcSet,o,null),c&&at(r,s,"src",o.src,o,null);return;case"input":Ge("invalid",r);var E=m=b=d=null,L=null,W=null;for(c in o)if(o.hasOwnProperty(c)){var re=o[c];if(re!=null)switch(c){case"name":d=re;break;case"type":b=re;break;case"checked":L=re;break;case"defaultChecked":W=re;break;case"value":m=re;break;case"defaultValue":E=re;break;case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(i(137,s));break;default:at(r,s,c,re,o,null)}}tb(r,m,E,L,W,b,d,!1),Ou(r);return;case"select":Ge("invalid",r),c=b=m=null;for(d in o)if(o.hasOwnProperty(d)&&(E=o[d],E!=null))switch(d){case"value":m=E;break;case"defaultValue":b=E;break;case"multiple":c=E;default:at(r,s,d,E,o,null)}s=m,o=b,r.multiple=!!c,s!=null?Na(r,!!c,s,!1):o!=null&&Na(r,!!c,o,!0);return;case"textarea":Ge("invalid",r),m=d=c=null;for(b in o)if(o.hasOwnProperty(b)&&(E=o[b],E!=null))switch(b){case"value":c=E;break;case"defaultValue":d=E;break;case"children":m=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(i(91));break;default:at(r,s,b,E,o,null)}rb(r,c,d,m),Ou(r);return;case"option":for(L in o)if(o.hasOwnProperty(L)&&(c=o[L],c!=null))switch(L){case"selected":r.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:at(r,s,L,c,o,null)}return;case"dialog":Ge("beforetoggle",r),Ge("toggle",r),Ge("cancel",r),Ge("close",r);break;case"iframe":case"object":Ge("load",r);break;case"video":case"audio":for(c=0;c<$l.length;c++)Ge($l[c],r);break;case"image":Ge("error",r),Ge("load",r);break;case"details":Ge("toggle",r);break;case"embed":case"source":case"link":Ge("error",r),Ge("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(W in o)if(o.hasOwnProperty(W)&&(c=o[W],c!=null))switch(W){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:at(r,s,W,c,o,null)}return;default:if(rp(s)){for(re in o)o.hasOwnProperty(re)&&(c=o[re],c!==void 0&&Bm(r,s,re,c,o,void 0));return}}for(E in o)o.hasOwnProperty(E)&&(c=o[E],c!=null&&at(r,s,E,c,o,null))}function BO(r,s,o,c){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,m=null,b=null,E=null,L=null,W=null,re=null;for(J in o){var ae=o[J];if(o.hasOwnProperty(J)&&ae!=null)switch(J){case"checked":break;case"value":break;case"defaultValue":L=ae;default:c.hasOwnProperty(J)||at(r,s,J,null,c,ae)}}for(var Z in c){var J=c[Z];if(ae=o[Z],c.hasOwnProperty(Z)&&(J!=null||ae!=null))switch(Z){case"type":m=J;break;case"name":d=J;break;case"checked":W=J;break;case"defaultChecked":re=J;break;case"value":b=J;break;case"defaultValue":E=J;break;case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(i(137,s));break;default:J!==ae&&at(r,s,Z,J,c,ae)}}tp(r,b,E,L,W,re,m,d);return;case"select":J=b=E=Z=null;for(m in o)if(L=o[m],o.hasOwnProperty(m)&&L!=null)switch(m){case"value":break;case"multiple":J=L;default:c.hasOwnProperty(m)||at(r,s,m,null,c,L)}for(d in c)if(m=c[d],L=o[d],c.hasOwnProperty(d)&&(m!=null||L!=null))switch(d){case"value":Z=m;break;case"defaultValue":E=m;break;case"multiple":b=m;default:m!==L&&at(r,s,d,m,c,L)}s=E,o=b,c=J,Z!=null?Na(r,!!o,Z,!1):!!c!=!!o&&(s!=null?Na(r,!!o,s,!0):Na(r,!!o,o?[]:"",!1));return;case"textarea":J=Z=null;for(E in o)if(d=o[E],o.hasOwnProperty(E)&&d!=null&&!c.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:at(r,s,E,null,c,d)}for(b in c)if(d=c[b],m=o[b],c.hasOwnProperty(b)&&(d!=null||m!=null))switch(b){case"value":Z=d;break;case"defaultValue":J=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(i(91));break;default:d!==m&&at(r,s,b,d,c,m)}nb(r,Z,J);return;case"option":for(var Me in o)if(Z=o[Me],o.hasOwnProperty(Me)&&Z!=null&&!c.hasOwnProperty(Me))switch(Me){case"selected":r.selected=!1;break;default:at(r,s,Me,null,c,Z)}for(L in c)if(Z=c[L],J=o[L],c.hasOwnProperty(L)&&Z!==J&&(Z!=null||J!=null))switch(L){case"selected":r.selected=Z&&typeof Z!="function"&&typeof Z!="symbol";break;default:at(r,s,L,Z,c,J)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ce in o)Z=o[Ce],o.hasOwnProperty(Ce)&&Z!=null&&!c.hasOwnProperty(Ce)&&at(r,s,Ce,null,c,Z);for(W in c)if(Z=c[W],J=o[W],c.hasOwnProperty(W)&&Z!==J&&(Z!=null||J!=null))switch(W){case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(i(137,s));break;default:at(r,s,W,Z,c,J)}return;default:if(rp(s)){for(var ot in o)Z=o[ot],o.hasOwnProperty(ot)&&Z!==void 0&&!c.hasOwnProperty(ot)&&Bm(r,s,ot,void 0,c,Z);for(re in c)Z=c[re],J=o[re],!c.hasOwnProperty(re)||Z===J||Z===void 0&&J===void 0||Bm(r,s,re,Z,c,J);return}}for(var q in o)Z=o[q],o.hasOwnProperty(q)&&Z!=null&&!c.hasOwnProperty(q)&&at(r,s,q,null,c,Z);for(ae in c)Z=c[ae],J=o[ae],!c.hasOwnProperty(ae)||Z===J||Z==null&&J==null||at(r,s,ae,Z,c,J)}var Hm=null,Fm=null;function Cd(r){return r.nodeType===9?r:r.ownerDocument}function i1(r){switch(r){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function s1(r,s){if(r===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return r===1&&s==="foreignObject"?0:r}function qm(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Vm=null;function HO(){var r=window.event;return r&&r.type==="popstate"?r===Vm?!1:(Vm=r,!0):(Vm=null,!1)}var a1=typeof setTimeout=="function"?setTimeout:void 0,FO=typeof clearTimeout=="function"?clearTimeout:void 0,o1=typeof Promise=="function"?Promise:void 0,qO=typeof queueMicrotask=="function"?queueMicrotask:typeof o1<"u"?function(r){return o1.resolve(null).then(r).catch(VO)}:a1;function VO(r){setTimeout(function(){throw r})}function Bi(r){return r==="head"}function l1(r,s){var o=s,c=0,d=0;do{var m=o.nextSibling;if(r.removeChild(o),m&&m.nodeType===8)if(o=m.data,o==="/$"){if(0<c&&8>c){o=c;var b=r.ownerDocument;if(o&1&&Hl(b.documentElement),o&2&&Hl(b.body),o&4)for(o=b.head,Hl(o),b=o.firstChild;b;){var E=b.nextSibling,L=b.nodeName;b[_e]||L==="SCRIPT"||L==="STYLE"||L==="LINK"&&b.rel.toLowerCase()==="stylesheet"||o.removeChild(b),b=E}}if(d===0){r.removeChild(m),Kl(s);return}d--}else o==="$"||o==="$?"||o==="$!"?d++:c=o.charCodeAt(0)-48;else c=0;o=m}while(o);Kl(s)}function Gm(r){var s=r.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Gm(o),Se(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}r.removeChild(o)}}function GO(r,s,o,c){for(;r.nodeType===1;){var d=o;if(r.nodeName.toLowerCase()!==s.toLowerCase()){if(!c&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(c){if(!r[_e])switch(s){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(m=r.getAttribute("rel"),m==="stylesheet"&&r.hasAttribute("data-precedence"))break;if(m!==d.rel||r.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||r.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||r.getAttribute("title")!==(d.title==null?null:d.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(m=r.getAttribute("src"),(m!==(d.src==null?null:d.src)||r.getAttribute("type")!==(d.type==null?null:d.type)||r.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&m&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}}else if(s==="input"&&r.type==="hidden"){var m=d.name==null?null:""+d.name;if(d.type==="hidden"&&r.getAttribute("name")===m)return r}else return r;if(r=rr(r.nextSibling),r===null)break}return null}function YO(r,s,o){if(s==="")return null;for(;r.nodeType!==3;)if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!o||(r=rr(r.nextSibling),r===null))return null;return r}function Ym(r){return r.data==="$!"||r.data==="$?"&&r.ownerDocument.readyState==="complete"}function QO(r,s){var o=r.ownerDocument;if(r.data!=="$?"||o.readyState==="complete")s();else{var c=function(){s(),o.removeEventListener("DOMContentLoaded",c)};o.addEventListener("DOMContentLoaded",c),r._reactRetry=c}}function rr(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return r}var Qm=null;function c1(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var o=r.data;if(o==="$"||o==="$!"||o==="$?"){if(s===0)return r;s--}else o==="/$"&&s++}r=r.previousSibling}return null}function u1(r,s,o){switch(s=Cd(o),r){case"html":if(r=s.documentElement,!r)throw Error(i(452));return r;case"head":if(r=s.head,!r)throw Error(i(453));return r;case"body":if(r=s.body,!r)throw Error(i(454));return r;default:throw Error(i(451))}}function Hl(r){for(var s=r.attributes;s.length;)r.removeAttributeNode(s[0]);Se(r)}var Vn=new Map,d1=new Set;function Rd(r){return typeof r.getRootNode=="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}var ti=ee.d;ee.d={f:WO,r:KO,D:XO,C:ZO,L:JO,m:eN,X:nN,S:tN,M:rN};function WO(){var r=ti.f(),s=vd();return r||s}function KO(r){var s=Ze(r);s!==null&&s.tag===5&&s.type==="form"?O0(s):ti.r(r)}var lo=typeof document>"u"?null:document;function f1(r,s,o){var c=lo;if(c&&typeof s=="string"&&s){var d=Un(s);d='link[rel="'+r+'"][href="'+d+'"]',typeof o=="string"&&(d+='[crossorigin="'+o+'"]'),d1.has(d)||(d1.add(d),r={rel:r,crossOrigin:o,href:s},c.querySelector(d)===null&&(s=c.createElement("link"),Xt(s,"link",r),ke(s),c.head.appendChild(s)))}}function XO(r){ti.D(r),f1("dns-prefetch",r,null)}function ZO(r,s){ti.C(r,s),f1("preconnect",r,s)}function JO(r,s,o){ti.L(r,s,o);var c=lo;if(c&&r&&s){var d='link[rel="preload"][as="'+Un(s)+'"]';s==="image"&&o&&o.imageSrcSet?(d+='[imagesrcset="'+Un(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(d+='[imagesizes="'+Un(o.imageSizes)+'"]')):d+='[href="'+Un(r)+'"]';var m=d;switch(s){case"style":m=co(r);break;case"script":m=uo(r)}Vn.has(m)||(r=g({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:r,as:s},o),Vn.set(m,r),c.querySelector(d)!==null||s==="style"&&c.querySelector(Fl(m))||s==="script"&&c.querySelector(ql(m))||(s=c.createElement("link"),Xt(s,"link",r),ke(s),c.head.appendChild(s)))}}function eN(r,s){ti.m(r,s);var o=lo;if(o&&r){var c=s&&typeof s.as=="string"?s.as:"script",d='link[rel="modulepreload"][as="'+Un(c)+'"][href="'+Un(r)+'"]',m=d;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=uo(r)}if(!Vn.has(m)&&(r=g({rel:"modulepreload",href:r},s),Vn.set(m,r),o.querySelector(d)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(ql(m)))return}c=o.createElement("link"),Xt(c,"link",r),ke(c),o.head.appendChild(c)}}}function tN(r,s,o){ti.S(r,s,o);var c=lo;if(c&&r){var d=xt(c).hoistableStyles,m=co(r);s=s||"default";var b=d.get(m);if(!b){var E={loading:0,preload:null};if(b=c.querySelector(Fl(m)))E.loading=5;else{r=g({rel:"stylesheet",href:r,"data-precedence":s},o),(o=Vn.get(m))&&Wm(r,o);var L=b=c.createElement("link");ke(L),Xt(L,"link",r),L._p=new Promise(function(W,re){L.onload=W,L.onerror=re}),L.addEventListener("load",function(){E.loading|=1}),L.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Ad(b,s,c)}b={type:"stylesheet",instance:b,count:1,state:E},d.set(m,b)}}}function nN(r,s){ti.X(r,s);var o=lo;if(o&&r){var c=xt(o).hoistableScripts,d=uo(r),m=c.get(d);m||(m=o.querySelector(ql(d)),m||(r=g({src:r,async:!0},s),(s=Vn.get(d))&&Km(r,s),m=o.createElement("script"),ke(m),Xt(m,"link",r),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(d,m))}}function rN(r,s){ti.M(r,s);var o=lo;if(o&&r){var c=xt(o).hoistableScripts,d=uo(r),m=c.get(d);m||(m=o.querySelector(ql(d)),m||(r=g({src:r,async:!0,type:"module"},s),(s=Vn.get(d))&&Km(r,s),m=o.createElement("script"),ke(m),Xt(m,"link",r),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(d,m))}}function h1(r,s,o,c){var d=(d=pe.current)?Rd(d):null;if(!d)throw Error(i(446));switch(r){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=co(o.href),o=xt(d).hoistableStyles,c=o.get(s),c||(c={type:"style",instance:null,count:0,state:null},o.set(s,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){r=co(o.href);var m=xt(d).hoistableStyles,b=m.get(r);if(b||(d=d.ownerDocument||d,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(r,b),(m=d.querySelector(Fl(r)))&&!m._p&&(b.instance=m,b.state.loading=5),Vn.has(r)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Vn.set(r,o),m||iN(d,r,o,b.state))),s&&c===null)throw Error(i(528,""));return b}if(s&&c!==null)throw Error(i(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=uo(o),o=xt(d).hoistableScripts,c=o.get(s),c||(c={type:"script",instance:null,count:0,state:null},o.set(s,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,r))}}function co(r){return'href="'+Un(r)+'"'}function Fl(r){return'link[rel="stylesheet"]['+r+"]"}function p1(r){return g({},r,{"data-precedence":r.precedence,precedence:null})}function iN(r,s,o,c){r.querySelector('link[rel="preload"][as="style"]['+s+"]")?c.loading=1:(s=r.createElement("link"),c.preload=s,s.addEventListener("load",function(){return c.loading|=1}),s.addEventListener("error",function(){return c.loading|=2}),Xt(s,"link",o),ke(s),r.head.appendChild(s))}function uo(r){return'[src="'+Un(r)+'"]'}function ql(r){return"script[async]"+r}function m1(r,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var c=r.querySelector('style[data-href~="'+Un(o.href)+'"]');if(c)return s.instance=c,ke(c),c;var d=g({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return c=(r.ownerDocument||r).createElement("style"),ke(c),Xt(c,"style",d),Ad(c,o.precedence,r),s.instance=c;case"stylesheet":d=co(o.href);var m=r.querySelector(Fl(d));if(m)return s.state.loading|=4,s.instance=m,ke(m),m;c=p1(o),(d=Vn.get(d))&&Wm(c,d),m=(r.ownerDocument||r).createElement("link"),ke(m);var b=m;return b._p=new Promise(function(E,L){b.onload=E,b.onerror=L}),Xt(m,"link",c),s.state.loading|=4,Ad(m,o.precedence,r),s.instance=m;case"script":return m=uo(o.src),(d=r.querySelector(ql(m)))?(s.instance=d,ke(d),d):(c=o,(d=Vn.get(m))&&(c=g({},o),Km(c,d)),r=r.ownerDocument||r,d=r.createElement("script"),ke(d),Xt(d,"link",c),r.head.appendChild(d),s.instance=d);case"void":return null;default:throw Error(i(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(c=s.instance,s.state.loading|=4,Ad(c,o.precedence,r));return s.instance}function Ad(r,s,o){for(var c=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=c.length?c[c.length-1]:null,m=d,b=0;b<c.length;b++){var E=c[b];if(E.dataset.precedence===s)m=E;else if(m!==d)break}m?m.parentNode.insertBefore(r,m.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(r,s.firstChild))}function Wm(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.title==null&&(r.title=s.title)}function Km(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.integrity==null&&(r.integrity=s.integrity)}var Id=null;function g1(r,s,o){if(Id===null){var c=new Map,d=Id=new Map;d.set(o,c)}else d=Id,c=d.get(o),c||(c=new Map,d.set(o,c));if(c.has(r))return c;for(c.set(r,null),o=o.getElementsByTagName(r),d=0;d<o.length;d++){var m=o[d];if(!(m[_e]||m[ce]||r==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var b=m.getAttribute(s)||"";b=r+b;var E=c.get(b);E?E.push(m):c.set(b,[m])}}return c}function y1(r,s,o){r=r.ownerDocument||r,r.head.insertBefore(o,s==="title"?r.querySelector("head > title"):null)}function sN(r,s,o){if(o===1||s.itemProp!=null)return!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return r=s.disabled,typeof s.precedence=="string"&&r==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function v1(r){return!(r.type==="stylesheet"&&(r.state.loading&3)===0)}var Vl=null;function aN(){}function oN(r,s,o){if(Vl===null)throw Error(i(475));var c=Vl;if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var d=co(o.href),m=r.querySelector(Fl(d));if(m){r=m._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(c.count++,c=Dd.bind(c),r.then(c,c)),s.state.loading|=4,s.instance=m,ke(m);return}m=r.ownerDocument||r,o=p1(o),(d=Vn.get(d))&&Wm(o,d),m=m.createElement("link"),ke(m);var b=m;b._p=new Promise(function(E,L){b.onload=E,b.onerror=L}),Xt(m,"link",o),s.instance=m}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(s,r),(r=s.state.preload)&&(s.state.loading&3)===0&&(c.count++,s=Dd.bind(c),r.addEventListener("load",s),r.addEventListener("error",s))}}function lN(){if(Vl===null)throw Error(i(475));var r=Vl;return r.stylesheets&&r.count===0&&Xm(r,r.stylesheets),0<r.count?function(s){var o=setTimeout(function(){if(r.stylesheets&&Xm(r,r.stylesheets),r.unsuspend){var c=r.unsuspend;r.unsuspend=null,c()}},6e4);return r.unsuspend=s,function(){r.unsuspend=null,clearTimeout(o)}}:null}function Dd(){if(this.count--,this.count===0){if(this.stylesheets)Xm(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}var Od=null;function Xm(r,s){r.stylesheets=null,r.unsuspend!==null&&(r.count++,Od=new Map,s.forEach(cN,r),Od=null,Dd.call(r))}function cN(r,s){if(!(s.state.loading&4)){var o=Od.get(r);if(o)var c=o.get(null);else{o=new Map,Od.set(r,o);for(var d=r.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<d.length;m++){var b=d[m];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(o.set(b.dataset.precedence,b),c=b)}c&&o.set(null,c)}d=s.instance,b=d.getAttribute("data-precedence"),m=o.get(b)||c,m===c&&o.set(null,d),o.set(b,d),this.count++,c=Dd.bind(this),d.addEventListener("load",c),d.addEventListener("error",c),m?m.parentNode.insertBefore(d,m.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(d,r.firstChild)),s.state.loading|=4}}var Gl={$$typeof:x,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function uN(r,s,o,c,d,m,b,E){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Da(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Da(0),this.hiddenUpdates=Da(null),this.identifierPrefix=c,this.onUncaughtError=d,this.onCaughtError=m,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function _1(r,s,o,c,d,m,b,E,L,W,re,ae){return r=new uN(r,s,o,b,E,L,W,ae),s=1,m===!0&&(s|=24),m=xn(3,null,null,s),r.current=m,m.stateNode=r,s=Np(),s.refCount++,r.pooledCache=s,s.refCount++,m.memoizedState={element:c,isDehydrated:o,cache:s},Pp(m),r}function b1(r){return r?(r=Ba,r):Ba}function S1(r,s,o,c,d,m){d=b1(d),c.context===null?c.context=d:c.pendingContext=d,c=Ai(s),c.payload={element:o},m=m===void 0?null:m,m!==null&&(c.callback=m),o=Ii(r,c,s),o!==null&&(In(o,r,s),wl(o,r,s))}function w1(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var o=r.retryLane;r.retryLane=o!==0&&o<s?o:s}}function Zm(r,s){w1(r,s),(r=r.alternate)&&w1(r,s)}function E1(r){if(r.tag===13){var s=$a(r,67108864);s!==null&&In(s,r,67108864),Zm(r,67108864)}}var Nd=!0;function dN(r,s,o,c){var d=U.T;U.T=null;var m=ee.p;try{ee.p=2,Jm(r,s,o,c)}finally{ee.p=m,U.T=d}}function fN(r,s,o,c){var d=U.T;U.T=null;var m=ee.p;try{ee.p=8,Jm(r,s,o,c)}finally{ee.p=m,U.T=d}}function Jm(r,s,o,c){if(Nd){var d=eg(c);if(d===null)$m(r,s,c,Md,o),T1(r,c);else if(pN(d,r,s,o,c))c.stopPropagation();else if(T1(r,c),s&4&&-1<hN.indexOf(r)){for(;d!==null;){var m=Ze(d);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var b=jr(m.pendingLanes);if(b!==0){var E=m;for(E.pendingLanes|=2,E.entangledLanes|=2;b;){var L=1<<31-Qt(b);E.entanglements[1]|=L,b&=~L}Tr(m),(tt&6)===0&&(gd=Yt()+500,zl(0))}}break;case 13:E=$a(m,2),E!==null&&In(E,m,2),vd(),Zm(m,2)}if(m=eg(c),m===null&&$m(r,s,c,Md,o),m===d)break;d=m}d!==null&&c.stopPropagation()}else $m(r,s,c,null,o)}}function eg(r){return r=sp(r),tg(r)}var Md=null;function tg(r){if(Md=null,r=ze(r),r!==null){var s=l(r);if(s===null)r=null;else{var o=s.tag;if(o===13){if(r=u(s),r!==null)return r;r=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null)}}return Md=r,null}function x1(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(tl()){case bs:return 2;case Ra:return 8;case Aa:case Pr:return 32;case wi:return 268435456;default:return 32}default:return 32}}var ng=!1,Hi=null,Fi=null,qi=null,Yl=new Map,Ql=new Map,Vi=[],hN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function T1(r,s){switch(r){case"focusin":case"focusout":Hi=null;break;case"dragenter":case"dragleave":Fi=null;break;case"mouseover":case"mouseout":qi=null;break;case"pointerover":case"pointerout":Yl.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ql.delete(s.pointerId)}}function Wl(r,s,o,c,d,m){return r===null||r.nativeEvent!==m?(r={blockedOn:s,domEventName:o,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},s!==null&&(s=Ze(s),s!==null&&E1(s)),r):(r.eventSystemFlags|=c,s=r.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),r)}function pN(r,s,o,c,d){switch(s){case"focusin":return Hi=Wl(Hi,r,s,o,c,d),!0;case"dragenter":return Fi=Wl(Fi,r,s,o,c,d),!0;case"mouseover":return qi=Wl(qi,r,s,o,c,d),!0;case"pointerover":var m=d.pointerId;return Yl.set(m,Wl(Yl.get(m)||null,r,s,o,c,d)),!0;case"gotpointercapture":return m=d.pointerId,Ql.set(m,Wl(Ql.get(m)||null,r,s,o,c,d)),!0}return!1}function C1(r){var s=ze(r.target);if(s!==null){var o=l(s);if(o!==null){if(s=o.tag,s===13){if(s=u(o),s!==null){r.blockedOn=s,Y(r.priority,function(){if(o.tag===13){var c=An();c=rl(c);var d=$a(o,c);d!==null&&In(d,o,c),Zm(o,c)}});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){r.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}r.blockedOn=null}function kd(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var o=eg(r.nativeEvent);if(o===null){o=r.nativeEvent;var c=new o.constructor(o.type,o);ip=c,o.target.dispatchEvent(c),ip=null}else return s=Ze(o),s!==null&&E1(s),r.blockedOn=o,!1;s.shift()}return!0}function R1(r,s,o){kd(r)&&o.delete(s)}function mN(){ng=!1,Hi!==null&&kd(Hi)&&(Hi=null),Fi!==null&&kd(Fi)&&(Fi=null),qi!==null&&kd(qi)&&(qi=null),Yl.forEach(R1),Ql.forEach(R1)}function Ld(r,s){r.blockedOn===s&&(r.blockedOn=null,ng||(ng=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,mN)))}var Pd=null;function A1(r){Pd!==r&&(Pd=r,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){Pd===r&&(Pd=null);for(var s=0;s<r.length;s+=3){var o=r[s],c=r[s+1],d=r[s+2];if(typeof c!="function"){if(tg(c||o)===null)continue;break}var m=Ze(o);m!==null&&(r.splice(s,3),s-=3,tm(m,{pending:!0,data:d,method:o.method,action:c},c,d))}}))}function Kl(r){function s(L){return Ld(L,r)}Hi!==null&&Ld(Hi,r),Fi!==null&&Ld(Fi,r),qi!==null&&Ld(qi,r),Yl.forEach(s),Ql.forEach(s);for(var o=0;o<Vi.length;o++){var c=Vi[o];c.blockedOn===r&&(c.blockedOn=null)}for(;0<Vi.length&&(o=Vi[0],o.blockedOn===null);)C1(o),o.blockedOn===null&&Vi.shift();if(o=(r.ownerDocument||r).$$reactFormReplay,o!=null)for(c=0;c<o.length;c+=3){var d=o[c],m=o[c+1],b=d[fe]||null;if(typeof m=="function")b||A1(o);else if(b){var E=null;if(m&&m.hasAttribute("formAction")){if(d=m,b=m[fe]||null)E=b.formAction;else if(tg(d)!==null)continue}else E=b.action;typeof E=="function"?o[c+1]=E:(o.splice(c,3),c-=3),A1(o)}}}function rg(r){this._internalRoot=r}jd.prototype.render=rg.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(i(409));var o=s.current,c=An();S1(o,c,r,s,null,null)},jd.prototype.unmount=rg.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;S1(r.current,2,null,r,null,null),vd(),s[ye]=null}};function jd(r){this._internalRoot=r}jd.prototype.unstable_scheduleHydration=function(r){if(r){var s=j();r={blockedOn:null,target:r,priority:s};for(var o=0;o<Vi.length&&s!==0&&s<Vi[o].priority;o++);Vi.splice(o,0,r),o===0&&C1(r)}};var I1=t.version;if(I1!=="19.1.1")throw Error(i(527,I1,"19.1.1"));ee.findDOMNode=function(r){var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(i(188)):(r=Object.keys(r).join(","),Error(i(268,r)));return r=h(s),r=r!==null?p(r):null,r=r===null?null:r.stateNode,r};var gN={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ud=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ud.isDisabled&&Ud.supportsFiber)try{hn=Ud.inject(gN),bt=Ud}catch{}}return Zl.createRoot=function(r,s){if(!a(r))throw Error(i(299));var o=!1,c="",d=V0,m=G0,b=Y0,E=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(b=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(E=s.unstable_transitionCallbacks)),s=_1(r,1,!1,null,null,o,c,d,m,b,E,null),r[ye]=s.current,zm(r),new rg(s)},Zl.hydrateRoot=function(r,s,o){if(!a(r))throw Error(i(299));var c=!1,d="",m=V0,b=G0,E=Y0,L=null,W=null;return o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(b=o.onCaughtError),o.onRecoverableError!==void 0&&(E=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(L=o.unstable_transitionCallbacks),o.formState!==void 0&&(W=o.formState)),s=_1(r,1,!0,s,o??null,c,d,m,b,E,L,W),s.context=b1(null),o=s.current,c=An(),c=rl(c),d=Ai(c),d.callback=null,Ii(o,d,c),o=c,s.current.lanes=o,xs(s,o),Tr(s),r[ye]=s.current,zm(r),new jd(s)},Zl.version="19.1.1",Zl}var z1;function CN(){if(z1)return ag.exports;z1=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),ag.exports=TN(),ag.exports}var RN=CN(),ug={exports:{}},dg={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $1;function AN(){if($1)return dg;$1=1;var e=mh();function t(h,p){return h===p&&(h!==0||1/h===1/p)||h!==h&&p!==p}var n=typeof Object.is=="function"?Object.is:t,i=e.useSyncExternalStore,a=e.useRef,l=e.useEffect,u=e.useMemo,f=e.useDebugValue;return dg.useSyncExternalStoreWithSelector=function(h,p,g,y,v){var S=a(null);if(S.current===null){var w={hasValue:!1,value:null};S.current=w}else w=S.current;S=u(function(){function C(N){if(!I){if(I=!0,k=N,N=y(N),v!==void 0&&w.hasValue){var T=w.value;if(v(T,N))return x=T}return x=N}if(T=x,n(k,N))return T;var P=y(N);return v!==void 0&&v(T,P)?(k=N,T):(k=N,x=P)}var I=!1,k,x,A=g===void 0?null:g;return[function(){return C(p())},A===null?void 0:function(){return C(A())}]},[p,g,y,v]);var D=i(h,S[0],S[1]);return l(function(){w.hasValue=!0,w.value=D},[D]),f(D),D},dg}var B1;function IN(){return B1||(B1=1,ug.exports=AN()),ug.exports}var DN=IN();function ET(e){e()}function ON(){let e=null,t=null;return{clear(){e=null,t=null},notify(){ET(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let i=e;for(;i;)n.push(i),i=i.next;return n},subscribe(n){let i=!0;const a=t={callback:n,next:null,prev:t};return a.prev?a.prev.next=a:e=a,function(){!i||e===null||(i=!1,a.next?a.next.prev=a.prev:t=a.prev,a.prev?a.prev.next=a.next:e=a.next)}}}}var H1={notify(){},get:()=>[]};function NN(e,t){let n,i=H1,a=0,l=!1;function u(D){g();const C=i.subscribe(D);let I=!1;return()=>{I||(I=!0,C(),y())}}function f(){i.notify()}function h(){w.onStateChange&&w.onStateChange()}function p(){return l}function g(){a++,n||(n=e.subscribe(h),i=ON())}function y(){a--,n&&a===0&&(n(),n=void 0,i.clear(),i=H1)}function v(){l||(l=!0,g())}function S(){l&&(l=!1,y())}const w={addNestedSub:u,notifyNestedSubs:f,handleChangeWrapper:h,isSubscribed:p,trySubscribe:v,tryUnsubscribe:S,getListeners:()=>i};return w}var MN=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",kN=MN(),LN=()=>typeof navigator<"u"&&navigator.product==="ReactNative",PN=LN(),jN=()=>kN||PN?R.useLayoutEffect:R.useEffect,UN=jN();function F1(e,t){return e===t?e!==0||t!==0||1/e===1/t:e!==e&&t!==t}function _c(e,t){if(F1(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;const n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(let a=0;a<n.length;a++)if(!Object.prototype.hasOwnProperty.call(t,n[a])||!F1(e[n[a]],t[n[a]]))return!1;return!0}var zN=Symbol.for("react-redux-context"),$N=typeof globalThis<"u"?globalThis:{};function BN(){if(!R.createContext)return{};const e=$N[zN]??=new Map;let t=e.get(R.createContext);return t||(t=R.createContext(null),e.set(R.createContext,t)),t}var os=BN();function HN(e){const{children:t,context:n,serverState:i,store:a}=e,l=R.useMemo(()=>{const h=NN(a);return{store:a,subscription:h,getServerState:i?()=>i:void 0}},[a,i]),u=R.useMemo(()=>a.getState(),[a]);UN(()=>{const{subscription:h}=l;return h.onStateChange=h.notifyNestedSubs,h.trySubscribe(),u!==a.getState()&&h.notifyNestedSubs(),()=>{h.tryUnsubscribe(),h.onStateChange=void 0}},[l,u]);const f=n||os;return R.createElement(f.Provider,{value:l},t)}var FN=HN;function dv(e=os){return function(){return R.useContext(e)}}var xT=dv();function TT(e=os){const t=e===os?xT:dv(e),n=()=>{const{store:i}=t();return i};return Object.assign(n,{withTypes:()=>n}),n}var CT=TT();function qN(e=os){const t=e===os?CT:TT(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var RT=qN(),VN=(e,t)=>e===t;function GN(e=os){const t=e===os?xT:dv(e),n=(i,a={})=>{const{equalityFn:l=VN}=typeof a=="function"?{equalityFn:a}:a,u=t(),{store:f,subscription:h,getServerState:p}=u;R.useRef(!0);const g=R.useCallback({[i.name](v){return i(v)}}[i.name],[i]),y=DN.useSyncExternalStoreWithSelector(h.addNestedSub,f.getState,p||f.getState,g,l);return R.useDebugValue(y),y};return Object.assign(n,{withTypes:()=>n}),n}var AT=GN(),YN=ET;/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var IT=e=>{throw TypeError(e)},QN=(e,t,n)=>t.has(e)||IT("Cannot "+n),fg=(e,t,n)=>(QN(e,t,"read from private field"),n?n.call(e):t.get(e)),WN=(e,t,n)=>t.has(e)?IT("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),q1="popstate";function KN(e={}){function t(a,l){let{pathname:u="/",search:f="",hash:h=""}=yi(a.location.hash.substring(1));return!u.startsWith("/")&&!u.startsWith(".")&&(u="/"+u),Mc("",{pathname:u,search:f,hash:h},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(a,l){let u=a.document.querySelector("base"),f="";if(u&&u.getAttribute("href")){let h=a.location.href,p=h.indexOf("#");f=p===-1?h:h.slice(0,p)}return f+"#"+(typeof l=="string"?l:ls(l))}function i(a,l){It(a.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(l)})`)}return ZN(t,n,i,e)}function je(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function It(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function XN(){return Math.random().toString(36).substring(2,10)}function V1(e,t){return{usr:e.state,key:e.key,idx:t}}function Mc(e,t,n=null,i){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?yi(t):t,state:n,key:t&&t.key||i||XN()}}function ls({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function yi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let i=e.indexOf("?");i>=0&&(t.search=e.substring(i),e=e.substring(0,i)),e&&(t.pathname=e)}return t}function ZN(e,t,n,i={}){let{window:a=document.defaultView,v5Compat:l=!1}=i,u=a.history,f="POP",h=null,p=g();p==null&&(p=0,u.replaceState({...u.state,idx:p},""));function g(){return(u.state||{idx:null}).idx}function y(){f="POP";let C=g(),I=C==null?null:C-p;p=C,h&&h({action:f,location:D.location,delta:I})}function v(C,I){f="PUSH";let k=Mc(D.location,C,I);n&&n(k,C),p=g()+1;let x=V1(k,p),A=D.createHref(k);try{u.pushState(x,"",A)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;a.location.assign(A)}l&&h&&h({action:f,location:D.location,delta:1})}function S(C,I){f="REPLACE";let k=Mc(D.location,C,I);n&&n(k,C),p=g();let x=V1(k,p),A=D.createHref(k);u.replaceState(x,"",A),l&&h&&h({action:f,location:D.location,delta:0})}function w(C){return DT(C)}let D={get action(){return f},get location(){return e(a,u)},listen(C){if(h)throw new Error("A history only accepts one active listener");return a.addEventListener(q1,y),h=C,()=>{a.removeEventListener(q1,y),h=null}},createHref(C){return t(a,C)},createURL:w,encodeLocation(C){let I=w(C);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:v,replace:S,go(C){return u.go(C)}};return D}function DT(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),je(n,"No window.location.(origin|href) available to create URL");let i=typeof e=="string"?e:ls(e);return i=i.replace(/ $/,"%20"),!t&&i.startsWith("//")&&(i=n+i),new URL(i,n)}var pc,G1=class{constructor(e){if(WN(this,pc,new Map),e)for(let[t,n]of e)this.set(t,n)}get(e){if(fg(this,pc).has(e))return fg(this,pc).get(e);if(e.defaultValue!==void 0)return e.defaultValue;throw new Error("No value found for context")}set(e,t){fg(this,pc).set(e,t)}};pc=new WeakMap;var JN=new Set(["lazy","caseSensitive","path","id","index","children"]);function eM(e){return JN.has(e)}var tM=new Set(["lazy","caseSensitive","path","id","index","middleware","children"]);function nM(e){return tM.has(e)}function rM(e){return e.index===!0}function kc(e,t,n=[],i={},a=!1){return e.map((l,u)=>{let f=[...n,String(u)],h=typeof l.id=="string"?l.id:f.join("-");if(je(l.index!==!0||!l.children,"Cannot specify children on an index route"),je(a||!i[h],`Found a route id collision on id "${h}".  Route id's must be globally unique within Data Router usages`),rM(l)){let p={...l,...t(l),id:h};return i[h]=p,p}else{let p={...l,...t(l),id:h,children:void 0};return i[h]=p,l.children&&(p.children=kc(l.children,t,f,i,a)),p}})}function Xi(e,t,n="/"){return lf(e,t,n,!1)}function lf(e,t,n,i){let a=typeof t=="string"?yi(t):t,l=Kn(a.pathname||"/",n);if(l==null)return null;let u=OT(e);sM(u);let f=null;for(let h=0;f==null&&h<u.length;++h){let p=gM(l);f=pM(u[h],p,i)}return f}function iM(e,t){let{route:n,pathname:i,params:a}=e;return{id:n.id,pathname:i,params:a,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function OT(e,t=[],n=[],i="",a=!1){let l=(u,f,h=a,p)=>{let g={relativePath:p===void 0?u.path||"":p,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(i)&&h)return;je(g.relativePath.startsWith(i),`Absolute route path "${g.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(i.length)}let y=Ir([i,g.relativePath]),v=n.concat(g);u.children&&u.children.length>0&&(je(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),OT(u.children,t,v,y,h)),!(u.path==null&&!u.index)&&t.push({path:y,score:fM(y,u.index),routesMeta:v})};return e.forEach((u,f)=>{if(u.path===""||!u.path?.includes("?"))l(u,f);else for(let h of NT(u.path))l(u,f,!0,h)}),t}function NT(e){let t=e.split("/");if(t.length===0)return[];let[n,...i]=t,a=n.endsWith("?"),l=n.replace(/\?$/,"");if(i.length===0)return a?[l,""]:[l];let u=NT(i.join("/")),f=[];return f.push(...u.map(h=>h===""?l:[l,h].join("/"))),a&&f.push(...u),f.map(h=>e.startsWith("/")&&h===""?"/":h)}function sM(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:hM(t.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var aM=/^:[\w-]+$/,oM=3,lM=2,cM=1,uM=10,dM=-2,Y1=e=>e==="*";function fM(e,t){let n=e.split("/"),i=n.length;return n.some(Y1)&&(i+=dM),t&&(i+=lM),n.filter(a=>!Y1(a)).reduce((a,l)=>a+(aM.test(l)?oM:l===""?cM:uM),i)}function hM(e,t){return e.length===t.length&&e.slice(0,-1).every((i,a)=>i===t[a])?e[e.length-1]-t[t.length-1]:0}function pM(e,t,n=!1){let{routesMeta:i}=e,a={},l="/",u=[];for(let f=0;f<i.length;++f){let h=i[f],p=f===i.length-1,g=l==="/"?t:t.slice(l.length)||"/",y=Tf({path:h.relativePath,caseSensitive:h.caseSensitive,end:p},g),v=h.route;if(!y&&p&&n&&!i[i.length-1].route.index&&(y=Tf({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},g)),!y)return null;Object.assign(a,y.params),u.push({params:a,pathname:Ir([l,y.pathname]),pathnameBase:bM(Ir([l,y.pathnameBase])),route:v}),y.pathnameBase!=="/"&&(l=Ir([l,y.pathnameBase]))}return u}function Tf(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,i]=mM(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let l=a[0],u=l.replace(/(.)\/+$/,"$1"),f=a.slice(1);return{params:i.reduce((p,{paramName:g,isOptional:y},v)=>{if(g==="*"){let w=f[v]||"";u=l.slice(0,l.length-w.length).replace(/(.)\/+$/,"$1")}const S=f[v];return y&&!S?p[g]=void 0:p[g]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:u,pattern:e}}function mM(e,t=!1,n=!0){It(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let i=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,f,h)=>(i.push({paramName:f,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(i.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),i]}function gM(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return It(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Kn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,i=e.charAt(n);return i&&i!=="/"?null:e.slice(n)||"/"}function yM({basename:e,pathname:t}){return t==="/"?e:Ir([e,t])}function vM(e,t="/"){let{pathname:n,search:i="",hash:a=""}=typeof e=="string"?yi(e):e;return{pathname:n?n.startsWith("/")?n:_M(n,t):t,search:SM(i),hash:wM(a)}}function _M(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function hg(e,t,n,i){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function MT(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function gh(e){let t=MT(e);return t.map((n,i)=>i===t.length-1?n.pathname:n.pathnameBase)}function yh(e,t,n,i=!1){let a;typeof e=="string"?a=yi(e):(a={...e},je(!a.pathname||!a.pathname.includes("?"),hg("?","pathname","search",a)),je(!a.pathname||!a.pathname.includes("#"),hg("#","pathname","hash",a)),je(!a.search||!a.search.includes("#"),hg("#","search","hash",a)));let l=e===""||a.pathname==="",u=l?"/":a.pathname,f;if(u==null)f=n;else{let y=t.length-1;if(!i&&u.startsWith("..")){let v=u.split("/");for(;v[0]==="..";)v.shift(),y-=1;a.pathname=v.join("/")}f=y>=0?t[y]:"/"}let h=vM(a,f),p=u&&u!=="/"&&u.endsWith("/"),g=(l||u===".")&&n.endsWith("/");return!h.pathname.endsWith("/")&&(p||g)&&(h.pathname+="/"),h}var Ir=e=>e.join("/").replace(/\/\/+/g,"/"),bM=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),SM=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,wM=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Cf=class{constructor(e,t,n,i=!1){this.status=e,this.statusText=t||"",this.internal=i,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Lc(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var kT=["POST","PUT","PATCH","DELETE"],EM=new Set(kT),xM=["GET",...kT],TM=new Set(xM),CM=new Set([301,302,303,307,308]),RM=new Set([307,308]),pg={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},AM={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Jl={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},IM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fv=e=>IM.test(e),DM=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),LT="remix-router-transitions",PT=Symbol("ResetLoaderData");function OM(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u";je(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let i=e.hydrationRouteProperties||[],a=e.mapRouteProperties||DM,l={},u=kc(e.routes,a,void 0,l),f,h=e.basename||"/";h.startsWith("/")||(h=`/${h}`);let p=e.dataStrategy||PM,g={...e.future},y=null,v=new Set,S=null,w=null,D=null,C=e.hydrationData!=null,I=Xi(u,e.history.location,h),k=!1,x=null,A;if(I==null&&!e.patchRoutesOnNavigation){let j=Yn(404,{pathname:e.history.location.pathname}),{matches:Y,route:te}=zd(u);A=!0,I=Y,x={[te.id]:j}}else if(I&&!e.hydrationData&&Ts(I,u,e.history.location.pathname).active&&(I=null),I)if(I.some(j=>j.route.lazy))A=!1;else if(!I.some(j=>j.route.loader))A=!0;else{let j=e.hydrationData?e.hydrationData.loaderData:null,Y=e.hydrationData?e.hydrationData.errors:null;if(Y){let te=I.findIndex(ce=>Y[ce.route.id]!==void 0);A=I.slice(0,te+1).every(ce=>!fy(ce.route,j,Y))}else A=I.every(te=>!fy(te.route,j,Y))}else{A=!1,I=[];let j=Ts(null,u,e.history.location.pathname);j.active&&j.matches&&(k=!0,I=j.matches)}let N,T={historyAction:e.history.action,location:e.history.location,matches:I,initialized:A,navigation:pg,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||x,fetchers:new Map,blockers:new Map},P="POP",V=!1,H,B=!1,$=new Map,G=null,F=!1,K=!1,ue=new Set,U=new Map,ee=0,ne=-1,oe=new Map,O=new Set,X=new Map,le=new Map,ie=new Set,de=new Map,me,pe=null;function Ae(){if(y=e.history.listen(({action:j,location:Y,delta:te})=>{if(me){me(),me=void 0;return}It(de.size===0||te!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ce=Cu({currentLocation:T.location,nextLocation:Y,historyAction:j});if(ce&&te!=null){let fe=new Promise(ye=>{me=ye});e.history.go(te*-1),_r(ce,{state:"blocked",location:Y,proceed(){_r(ce,{state:"proceeding",proceed:void 0,reset:void 0,location:Y}),fe.then(()=>e.history.go(te))},reset(){let ye=new Map(T.blockers);ye.set(ce,Jl),Ue({blockers:ye})}});return}return Et(j,Y)}),n){XM(t,$);let j=()=>ZM(t,$);t.addEventListener("pagehide",j),G=()=>t.removeEventListener("pagehide",j)}return T.initialized||Et("POP",T.location,{initialHydration:!0}),N}function be(){y&&y(),G&&G(),v.clear(),H&&H.abort(),T.fetchers.forEach((j,Y)=>Qt(Y)),T.blockers.forEach((j,Y)=>Es(Y))}function De(j){return v.add(j),()=>v.delete(j)}function Ue(j,Y={}){j.matches&&(j.matches=j.matches.map(fe=>{let ye=l[fe.route.id],we=fe.route;return we.element!==ye.element||we.errorElement!==ye.errorElement||we.hydrateFallbackElement!==ye.hydrateFallbackElement?{...fe,route:ye}:fe})),T={...T,...j};let te=[],ce=[];T.fetchers.forEach((fe,ye)=>{fe.state==="idle"&&(ie.has(ye)?te.push(ye):ce.push(ye))}),ie.forEach(fe=>{!T.fetchers.has(fe)&&!U.has(fe)&&te.push(fe)}),[...v].forEach(fe=>fe(T,{deletedFetchers:te,viewTransitionOpts:Y.viewTransitionOpts,flushSync:Y.flushSync===!0})),te.forEach(fe=>Qt(fe)),ce.forEach(fe=>T.fetchers.delete(fe))}function _t(j,Y,{flushSync:te}={}){let ce=T.actionData!=null&&T.navigation.formMethod!=null&&_n(T.navigation.formMethod)&&T.navigation.state==="loading"&&j.state?._isRedirect!==!0,fe;Y.actionData?Object.keys(Y.actionData).length>0?fe=Y.actionData:fe=null:ce?fe=T.actionData:fe=null;let ye=Y.loaderData?rw(T.loaderData,Y.loaderData,Y.matches||[],Y.errors):T.loaderData,we=T.blockers;we.size>0&&(we=new Map(we),we.forEach((_e,Se)=>we.set(Se,Jl)));let ve=F?!1:Au(j,Y.matches||T.matches),xe=V===!0||T.navigation.formMethod!=null&&_n(T.navigation.formMethod)&&j.state?._isRedirect!==!0;f&&(u=f,f=void 0),F||P==="POP"||(P==="PUSH"?e.history.push(j,j.state):P==="REPLACE"&&e.history.replace(j,j.state));let Te;if(P==="POP"){let _e=$.get(T.location.pathname);_e&&_e.has(j.pathname)?Te={currentLocation:T.location,nextLocation:j}:$.has(j.pathname)&&(Te={currentLocation:j,nextLocation:T.location})}else if(B){let _e=$.get(T.location.pathname);_e?_e.add(j.pathname):(_e=new Set([j.pathname]),$.set(T.location.pathname,_e)),Te={currentLocation:T.location,nextLocation:j}}Ue({...Y,actionData:fe,loaderData:ye,historyAction:P,location:j,initialized:!0,navigation:pg,revalidation:"idle",restoreScrollPosition:ve,preventScrollReset:xe,blockers:we},{viewTransitionOpts:Te,flushSync:te===!0}),P="POP",V=!1,B=!1,F=!1,K=!1,pe?.resolve(),pe=null}async function gt(j,Y){if(typeof j=="number"){e.history.go(j);return}let te=dy(T.location,T.matches,h,j,Y?.fromRouteId,Y?.relative),{path:ce,submission:fe,error:ye}=Q1(!1,te,Y),we=T.location,ve=Mc(T.location,ce,Y&&Y.state);ve={...ve,...e.history.encodeLocation(ve)};let xe=Y&&Y.replace!=null?Y.replace:void 0,Te="PUSH";xe===!0?Te="REPLACE":xe===!1||fe!=null&&_n(fe.formMethod)&&fe.formAction===T.location.pathname+T.location.search&&(Te="REPLACE");let _e=Y&&"preventScrollReset"in Y?Y.preventScrollReset===!0:void 0,Se=(Y&&Y.flushSync)===!0,ze=Cu({currentLocation:we,nextLocation:ve,historyAction:Te});if(ze){_r(ze,{state:"blocked",location:ve,proceed(){_r(ze,{state:"proceeding",proceed:void 0,reset:void 0,location:ve}),gt(j,Y)},reset(){let Ze=new Map(T.blockers);Ze.set(ze,Jl),Ue({blockers:Ze})}});return}await Et(Te,ve,{submission:fe,pendingError:ye,preventScrollReset:_e,replace:Y&&Y.replace,enableViewTransition:Y&&Y.viewTransition,flushSync:Se})}function kn(){pe||(pe=JM()),nl(),Ue({revalidation:"loading"});let j=pe.promise;return T.navigation.state==="submitting"?j:T.navigation.state==="idle"?(Et(T.historyAction,T.location,{startUninterruptedRevalidation:!0}),j):(Et(P||T.historyAction,T.navigation.location,{overrideNavigation:T.navigation,enableViewTransition:B===!0}),j)}async function Et(j,Y,te){H&&H.abort(),H=null,P=j,F=(te&&te.startUninterruptedRevalidation)===!0,xs(T.location,T.matches),V=(te&&te.preventScrollReset)===!0,B=(te&&te.enableViewTransition)===!0;let ce=f||u,fe=te&&te.overrideNavigation,ye=te?.initialHydration&&T.matches&&T.matches.length>0&&!k?T.matches:Xi(ce,Y,h),we=(te&&te.flushSync)===!0;if(ye&&T.initialized&&!K&&qM(T.location,Y)&&!(te&&te.submission&&_n(te.submission.formMethod))){_t(Y,{matches:ye},{flushSync:we});return}let ve=Ts(ye,ce,Y.pathname);if(ve.active&&ve.matches&&(ye=ve.matches),!ye){let{error:xt,notFoundMatches:ke,route:it}=Ia(Y.pathname);_t(Y,{matches:ke,loaderData:{},errors:{[it.id]:xt}},{flushSync:we});return}H=new AbortController;let xe=yo(e.history,Y,H.signal,te&&te.submission),Te=e.getContext?await e.getContext():new G1,_e;if(te&&te.pendingError)_e=[Zi(ye).route.id,{type:"error",error:te.pendingError}];else if(te&&te.submission&&_n(te.submission.formMethod)){let xt=await Ln(xe,Y,te.submission,ye,Te,ve.active,te&&te.initialHydration===!0,{replace:te.replace,flushSync:we});if(xt.shortCircuited)return;if(xt.pendingActionResult){let[ke,it]=xt.pendingActionResult;if(On(it)&&Lc(it.error)&&it.error.status===404){H=null,_t(Y,{matches:xt.matches,loaderData:{},errors:{[ke]:it.error}});return}}ye=xt.matches||ye,_e=xt.pendingActionResult,fe=mg(Y,te.submission),we=!1,ve.active=!1,xe=yo(e.history,xe.url,xe.signal)}let{shortCircuited:Se,matches:ze,loaderData:Ze,errors:yt}=await Lr(xe,Y,ye,Te,ve.active,fe,te&&te.submission,te&&te.fetcherSubmission,te&&te.replace,te&&te.initialHydration===!0,we,_e);Se||(H=null,_t(Y,{matches:ze||ye,...iw(_e),loaderData:Ze,errors:yt}))}async function Ln(j,Y,te,ce,fe,ye,we,ve={}){nl();let xe=WM(Y,te);if(Ue({navigation:xe},{flushSync:ve.flushSync===!0}),ye){let Se=await Cs(ce,Y.pathname,j.signal);if(Se.type==="aborted")return{shortCircuited:!0};if(Se.type==="error"){if(Se.partialMatches.length===0){let{matches:Ze,route:yt}=zd(u);return{matches:Ze,pendingActionResult:[yt.id,{type:"error",error:Se.error}]}}let ze=Zi(Se.partialMatches).route.id;return{matches:Se.partialMatches,pendingActionResult:[ze,{type:"error",error:Se.error}]}}else if(Se.matches)ce=Se.matches;else{let{notFoundMatches:ze,error:Ze,route:yt}=Ia(Y.pathname);return{matches:ze,pendingActionResult:[yt.id,{type:"error",error:Ze}]}}}let Te,_e=cf(ce,Y);if(!_e.route.action&&!_e.route.lazy)Te={type:"error",error:Yn(405,{method:j.method,pathname:Y.pathname,routeId:_e.route.id})};else{let Se=So(a,l,j,ce,_e,we?[]:i,fe),ze=await wi(j,Se,fe,null);if(Te=ze[_e.route.id],!Te){for(let Ze of ce)if(ze[Ze.route.id]){Te=ze[Ze.route.id];break}}if(j.signal.aborted)return{shortCircuited:!0}}if(Js(Te)){let Se;return ve&&ve.replace!=null?Se=ve.replace:Se=ew(Te.response.headers.get("Location"),new URL(j.url),h)===T.location.pathname+T.location.search,await Pr(j,Te,!0,{submission:te,replace:Se}),{shortCircuited:!0}}if(On(Te)){let Se=Zi(ce,_e.route.id);return(ve&&ve.replace)!==!0&&(P="PUSH"),{matches:ce,pendingActionResult:[Se.route.id,Te,_e.route.id]}}return{matches:ce,pendingActionResult:[_e.route.id,Te]}}async function Lr(j,Y,te,ce,fe,ye,we,ve,xe,Te,_e,Se){let ze=ye||mg(Y,we),Ze=we||ve||aw(ze),yt=!F&&!Te;if(fe){if(yt){let Nt=Yt(Se);Ue({navigation:ze,...Nt!==void 0?{actionData:Nt}:{}},{flushSync:_e})}let Le=await Cs(te,Y.pathname,j.signal);if(Le.type==="aborted")return{shortCircuited:!0};if(Le.type==="error"){if(Le.partialMatches.length===0){let{matches:Br,route:pn}=zd(u);return{matches:Br,loaderData:{},errors:{[pn.id]:Le.error}}}let Nt=Zi(Le.partialMatches).route.id;return{matches:Le.partialMatches,loaderData:{},errors:{[Nt]:Le.error}}}else if(Le.matches)te=Le.matches;else{let{error:Nt,notFoundMatches:Br,route:pn}=Ia(Y.pathname);return{matches:Br,loaderData:{},errors:{[pn.id]:Nt}}}}let xt=f||u,{dsMatches:ke,revalidatingFetchers:it}=W1(j,ce,a,l,e.history,T,te,Ze,Y,Te?[]:i,Te===!0,K,ue,ie,X,O,xt,h,e.patchRoutesOnNavigation!=null,Se);if(ne=++ee,!e.dataStrategy&&!ke.some(Le=>Le.shouldLoad)&&!ke.some(Le=>Le.route.middleware)&&it.length===0){let Le=Ss();return _t(Y,{matches:te,loaderData:{},errors:Se&&On(Se[1])?{[Se[0]]:Se[1].error}:null,...iw(Se),...Le?{fetchers:new Map(T.fetchers)}:{}},{flushSync:_e}),{shortCircuited:!0}}if(yt){let Le={};if(!fe){Le.navigation=ze;let Nt=Yt(Se);Nt!==void 0&&(Le.actionData=Nt)}it.length>0&&(Le.fetchers=tl(it)),Ue(Le,{flushSync:_e})}it.forEach(Le=>{vr(Le.key),Le.controller&&U.set(Le.key,Le.controller)});let br=()=>it.forEach(Le=>vr(Le.key));H&&H.signal.addEventListener("abort",br);let{loaderResults:wn,fetcherResults:ln}=await xu(ke,it,j,ce);if(j.signal.aborted)return{shortCircuited:!0};H&&H.signal.removeEventListener("abort",br),it.forEach(Le=>U.delete(Le.key));let Pn=$d(wn);if(Pn)return await Pr(j,Pn.result,!0,{replace:xe}),{shortCircuited:!0};if(Pn=$d(ln),Pn)return O.add(Pn.key),await Pr(j,Pn.result,!0,{replace:xe}),{shortCircuited:!0};let{loaderData:Oa,errors:Ei}=nw(T,te,wn,Se,it,ln);Te&&T.errors&&(Ei={...T.errors,...Ei});let Ur=Ss(),zr=ws(ne),$r=Ur||zr||it.length>0;return{matches:te,loaderData:Oa,errors:Ei,...$r?{fetchers:new Map(T.fetchers)}:{}}}function Yt(j){if(j&&!On(j[1]))return{[j[0]]:j[1].data};if(T.actionData)return Object.keys(T.actionData).length===0?null:T.actionData}function tl(j){return j.forEach(Y=>{let te=T.fetchers.get(Y.key),ce=ec(void 0,te?te.data:void 0);T.fetchers.set(Y.key,ce)}),new Map(T.fetchers)}async function bs(j,Y,te,ce){vr(j);let fe=(ce&&ce.flushSync)===!0,ye=f||u,we=dy(T.location,T.matches,h,te,Y,ce?.relative),ve=Xi(ye,we,h),xe=Ts(ve,ye,we);if(xe.active&&xe.matches&&(ve=xe.matches),!ve){bt(j,Y,Yn(404,{pathname:we}),{flushSync:fe});return}let{path:Te,submission:_e,error:Se}=Q1(!0,we,ce);if(Se){bt(j,Y,Se,{flushSync:fe});return}let ze=e.getContext?await e.getContext():new G1,Ze=(ce&&ce.preventScrollReset)===!0;if(_e&&_n(_e.formMethod)){await Ra(j,Y,Te,ve,ze,xe.active,fe,Ze,_e);return}X.set(j,{routeId:Y,path:Te}),await Aa(j,Y,Te,ve,ze,xe.active,fe,Ze,_e)}async function Ra(j,Y,te,ce,fe,ye,we,ve,xe){nl(),X.delete(j);let Te=T.fetchers.get(j);hn(j,KM(xe,Te),{flushSync:we});let _e=new AbortController,Se=yo(e.history,te,_e.signal,xe);if(ye){let St=await Cs(ce,new URL(Se.url).pathname,Se.signal,j);if(St.type==="aborted")return;if(St.type==="error"){bt(j,Y,St.error,{flushSync:we});return}else if(St.matches)ce=St.matches;else{bt(j,Y,Yn(404,{pathname:te}),{flushSync:we});return}}let ze=cf(ce,te);if(!ze.route.action&&!ze.route.lazy){let St=Yn(405,{method:xe.formMethod,pathname:te,routeId:Y});bt(j,Y,St,{flushSync:we});return}U.set(j,_e);let Ze=ee,yt=So(a,l,Se,ce,ze,i,fe),ke=(await wi(Se,yt,fe,j))[ze.route.id];if(Se.signal.aborted){U.get(j)===_e&&U.delete(j);return}if(ie.has(j)){if(Js(ke)||On(ke)){hn(j,Wi(void 0));return}}else{if(Js(ke))if(U.delete(j),ne>Ze){hn(j,Wi(void 0));return}else return O.add(j),hn(j,ec(xe)),Pr(Se,ke,!1,{fetcherSubmission:xe,preventScrollReset:ve});if(On(ke)){bt(j,Y,ke.error);return}}let it=T.navigation.location||T.location,br=yo(e.history,it,_e.signal),wn=f||u,ln=T.navigation.state!=="idle"?Xi(wn,T.navigation.location,h):T.matches;je(ln,"Didn't find any matches after fetcher action");let Pn=++ee;oe.set(j,Pn);let Oa=ec(xe,ke.data);T.fetchers.set(j,Oa);let{dsMatches:Ei,revalidatingFetchers:Ur}=W1(br,fe,a,l,e.history,T,ln,xe,it,i,!1,K,ue,ie,X,O,wn,h,e.patchRoutesOnNavigation!=null,[ze.route.id,ke]);Ur.filter(St=>St.key!==j).forEach(St=>{let xi=St.key,Iu=T.fetchers.get(xi),Du=ec(void 0,Iu?Iu.data:void 0);T.fetchers.set(xi,Du),vr(xi),St.controller&&U.set(xi,St.controller)}),Ue({fetchers:new Map(T.fetchers)});let zr=()=>Ur.forEach(St=>vr(St.key));_e.signal.addEventListener("abort",zr);let{loaderResults:$r,fetcherResults:Le}=await xu(Ei,Ur,br,fe);if(_e.signal.aborted)return;if(_e.signal.removeEventListener("abort",zr),oe.delete(j),U.delete(j),Ur.forEach(St=>U.delete(St.key)),T.fetchers.has(j)){let St=Wi(ke.data);T.fetchers.set(j,St)}let Nt=$d($r);if(Nt)return Pr(br,Nt.result,!1,{preventScrollReset:ve});if(Nt=$d(Le),Nt)return O.add(Nt.key),Pr(br,Nt.result,!1,{preventScrollReset:ve});let{loaderData:Br,errors:pn}=nw(T,ln,$r,void 0,Ur,Le);ws(Pn),T.navigation.state==="loading"&&Pn>ne?(je(P,"Expected pending action"),H&&H.abort(),_t(T.navigation.location,{matches:ln,loaderData:Br,errors:pn,fetchers:new Map(T.fetchers)})):(Ue({errors:pn,loaderData:rw(T.loaderData,Br,ln,pn),fetchers:new Map(T.fetchers)}),K=!1)}async function Aa(j,Y,te,ce,fe,ye,we,ve,xe){let Te=T.fetchers.get(j);hn(j,ec(xe,Te?Te.data:void 0),{flushSync:we});let _e=new AbortController,Se=yo(e.history,te,_e.signal);if(ye){let it=await Cs(ce,new URL(Se.url).pathname,Se.signal,j);if(it.type==="aborted")return;if(it.type==="error"){bt(j,Y,it.error,{flushSync:we});return}else if(it.matches)ce=it.matches;else{bt(j,Y,Yn(404,{pathname:te}),{flushSync:we});return}}let ze=cf(ce,te);U.set(j,_e);let Ze=ee,yt=So(a,l,Se,ce,ze,i,fe),ke=(await wi(Se,yt,fe,j))[ze.route.id];if(U.get(j)===_e&&U.delete(j),!Se.signal.aborted){if(ie.has(j)){hn(j,Wi(void 0));return}if(Js(ke))if(ne>Ze){hn(j,Wi(void 0));return}else{O.add(j),await Pr(Se,ke,!1,{preventScrollReset:ve});return}if(On(ke)){bt(j,Y,ke.error);return}hn(j,Wi(ke.data))}}async function Pr(j,Y,te,{submission:ce,fetcherSubmission:fe,preventScrollReset:ye,replace:we}={}){Y.response.headers.has("X-Remix-Revalidate")&&(K=!0);let ve=Y.response.headers.get("Location");je(ve,"Expected a Location header on the redirect Response"),ve=ew(ve,new URL(j.url),h);let xe=Mc(T.location,ve,{_isRedirect:!0});if(n){let yt=!1;if(Y.response.headers.has("X-Remix-Reload-Document"))yt=!0;else if(fv(ve)){const xt=DT(ve,!0);yt=xt.origin!==t.location.origin||Kn(xt.pathname,h)==null}if(yt){we?t.location.replace(ve):t.location.assign(ve);return}}H=null;let Te=we===!0||Y.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:_e,formAction:Se,formEncType:ze}=T.navigation;!ce&&!fe&&_e&&Se&&ze&&(ce=aw(T.navigation));let Ze=ce||fe;if(RM.has(Y.response.status)&&Ze&&_n(Ze.formMethod))await Et(Te,xe,{submission:{...Ze,formAction:ve},preventScrollReset:ye||V,enableViewTransition:te?B:void 0});else{let yt=mg(xe,ce);await Et(Te,xe,{overrideNavigation:yt,fetcherSubmission:fe,preventScrollReset:ye||V,enableViewTransition:te?B:void 0})}}async function wi(j,Y,te,ce){let fe,ye={};try{fe=await UM(p,j,Y,ce,te,!1)}catch(we){return Y.filter(ve=>ve.shouldLoad).forEach(ve=>{ye[ve.route.id]={type:"error",error:we}}),ye}if(j.signal.aborted)return ye;for(let[we,ve]of Object.entries(fe))if(YM(ve)){let xe=ve.result;ye[we]={type:"redirect",response:HM(xe,j,we,Y,h)}}else ye[we]=await BM(ve);return ye}async function xu(j,Y,te,ce){let fe=wi(te,j,ce,null),ye=Promise.all(Y.map(async xe=>{if(xe.matches&&xe.match&&xe.request&&xe.controller){let _e=(await wi(xe.request,xe.matches,ce,xe.key))[xe.match.route.id];return{[xe.key]:_e}}else return Promise.resolve({[xe.key]:{type:"error",error:Yn(404,{pathname:xe.path})}})})),we=await fe,ve=(await ye).reduce((xe,Te)=>Object.assign(xe,Te),{});return{loaderResults:we,fetcherResults:ve}}function nl(){K=!0,X.forEach((j,Y)=>{U.has(Y)&&ue.add(Y),vr(Y)})}function hn(j,Y,te={}){T.fetchers.set(j,Y),Ue({fetchers:new Map(T.fetchers)},{flushSync:(te&&te.flushSync)===!0})}function bt(j,Y,te,ce={}){let fe=Zi(T.matches,Y);Qt(j),Ue({errors:{[fe.route.id]:te},fetchers:new Map(T.fetchers)},{flushSync:(ce&&ce.flushSync)===!0})}function er(j){return le.set(j,(le.get(j)||0)+1),ie.has(j)&&ie.delete(j),T.fetchers.get(j)||AM}function Qt(j){let Y=T.fetchers.get(j);U.has(j)&&!(Y&&Y.state==="loading"&&oe.has(j))&&vr(j),X.delete(j),oe.delete(j),O.delete(j),ie.delete(j),ue.delete(j),T.fetchers.delete(j)}function ep(j){let Y=(le.get(j)||0)-1;Y<=0?(le.delete(j),ie.add(j)):le.set(j,Y),Ue({fetchers:new Map(T.fetchers)})}function vr(j){let Y=U.get(j);Y&&(Y.abort(),U.delete(j))}function Tu(j){for(let Y of j){let te=er(Y),ce=Wi(te.data);T.fetchers.set(Y,ce)}}function Ss(){let j=[],Y=!1;for(let te of O){let ce=T.fetchers.get(te);je(ce,`Expected fetcher: ${te}`),ce.state==="loading"&&(O.delete(te),j.push(te),Y=!0)}return Tu(j),Y}function ws(j){let Y=[];for(let[te,ce]of oe)if(ce<j){let fe=T.fetchers.get(te);je(fe,`Expected fetcher: ${te}`),fe.state==="loading"&&(vr(te),oe.delete(te),Y.push(te))}return Tu(Y),Y.length>0}function jr(j,Y){let te=T.blockers.get(j)||Jl;return de.get(j)!==Y&&de.set(j,Y),te}function Es(j){T.blockers.delete(j),de.delete(j)}function _r(j,Y){let te=T.blockers.get(j)||Jl;je(te.state==="unblocked"&&Y.state==="blocked"||te.state==="blocked"&&Y.state==="blocked"||te.state==="blocked"&&Y.state==="proceeding"||te.state==="blocked"&&Y.state==="unblocked"||te.state==="proceeding"&&Y.state==="unblocked",`Invalid blocker state transition: ${te.state} -> ${Y.state}`);let ce=new Map(T.blockers);ce.set(j,Y),Ue({blockers:ce})}function Cu({currentLocation:j,nextLocation:Y,historyAction:te}){if(de.size===0)return;de.size>1&&It(!1,"A router only supports one blocker at a time");let ce=Array.from(de.entries()),[fe,ye]=ce[ce.length-1],we=T.blockers.get(fe);if(!(we&&we.state==="proceeding")&&ye({currentLocation:j,nextLocation:Y,historyAction:te}))return fe}function Ia(j){let Y=Yn(404,{pathname:j}),te=f||u,{matches:ce,route:fe}=zd(te);return{notFoundMatches:ce,route:fe,error:Y}}function Ru(j,Y,te){if(S=j,D=Y,w=te||null,!C&&T.navigation===pg){C=!0;let ce=Au(T.location,T.matches);ce!=null&&Ue({restoreScrollPosition:ce})}return()=>{S=null,D=null,w=null}}function Da(j,Y){return w&&w(j,Y.map(ce=>iM(ce,T.loaderData)))||j.key}function xs(j,Y){if(S&&D){let te=Da(j,Y);S[te]=D()}}function Au(j,Y){if(S){let te=Da(j,Y),ce=S[te];if(typeof ce=="number")return ce}return null}function Ts(j,Y,te){if(e.patchRoutesOnNavigation)if(j){if(Object.keys(j[0].params).length>0)return{active:!0,matches:lf(Y,te,h,!0)}}else return{active:!0,matches:lf(Y,te,h,!0)||[]};return{active:!1,matches:null}}async function Cs(j,Y,te,ce){if(!e.patchRoutesOnNavigation)return{type:"success",matches:j};let fe=j;for(;;){let ye=f==null,we=f||u,ve=l;try{await e.patchRoutesOnNavigation({signal:te,path:Y,matches:fe,fetcherKey:ce,patch:(_e,Se)=>{te.aborted||K1(_e,Se,we,ve,a,!1)}})}catch(_e){return{type:"error",error:_e,partialMatches:fe}}finally{ye&&!te.aborted&&(u=[...u])}if(te.aborted)return{type:"aborted"};let xe=Xi(we,Y,h);if(xe)return{type:"success",matches:xe};let Te=lf(we,Y,h,!0);if(!Te||fe.length===Te.length&&fe.every((_e,Se)=>_e.route.id===Te[Se].route.id))return{type:"success",matches:null};fe=Te}}function rl(j){l={},f=kc(j,a,void 0,l)}function il(j,Y,te=!1){let ce=f==null;K1(j,Y,f||u,l,a,te),ce&&(u=[...u],Ue({}))}return N={get basename(){return h},get future(){return g},get state(){return T},get routes(){return u},get window(){return t},initialize:Ae,subscribe:De,enableScrollRestoration:Ru,navigate:gt,fetch:bs,revalidate:kn,createHref:j=>e.history.createHref(j),encodeLocation:j=>e.history.encodeLocation(j),getFetcher:er,deleteFetcher:ep,dispose:be,getBlocker:jr,deleteBlocker:Es,patchRoutes:il,_internalFetchControllers:U,_internalSetRoutes:rl,_internalSetStateDoNotUseOrYouWillBreakYourApp(j){Ue(j)}},N}function NM(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function dy(e,t,n,i,a,l){let u,f;if(a){u=[];for(let p of t)if(u.push(p),p.route.id===a){f=p;break}}else u=t,f=t[t.length-1];let h=yh(i||".",gh(u),Kn(e.pathname,n)||e.pathname,l==="path");if(i==null&&(h.search=e.search,h.hash=e.hash),(i==null||i===""||i===".")&&f){let p=hv(h.search);if(f.route.index&&!p)h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index";else if(!f.route.index&&p){let g=new URLSearchParams(h.search),y=g.getAll("index");g.delete("index"),y.filter(S=>S).forEach(S=>g.append("index",S));let v=g.toString();h.search=v?`?${v}`:""}}return n!=="/"&&(h.pathname=yM({basename:n,pathname:h.pathname})),ls(h)}function Q1(e,t,n){if(!n||!NM(n))return{path:t};if(n.formMethod&&!QM(n.formMethod))return{path:t,error:Yn(405,{method:n.formMethod})};let i=()=>({path:t,error:Yn(400,{type:"invalid-body"})}),l=(n.formMethod||"get").toUpperCase(),u=HT(t);if(n.body!==void 0){if(n.formEncType==="text/plain"){if(!_n(l))return i();let y=typeof n.body=="string"?n.body:n.body instanceof FormData||n.body instanceof URLSearchParams?Array.from(n.body.entries()).reduce((v,[S,w])=>`${v}${S}=${w}
`,""):String(n.body);return{path:t,submission:{formMethod:l,formAction:u,formEncType:n.formEncType,formData:void 0,json:void 0,text:y}}}else if(n.formEncType==="application/json"){if(!_n(l))return i();try{let y=typeof n.body=="string"?JSON.parse(n.body):n.body;return{path:t,submission:{formMethod:l,formAction:u,formEncType:n.formEncType,formData:void 0,json:y,text:void 0}}}catch{return i()}}}je(typeof FormData=="function","FormData is not available in this environment");let f,h;if(n.formData)f=py(n.formData),h=n.formData;else if(n.body instanceof FormData)f=py(n.body),h=n.body;else if(n.body instanceof URLSearchParams)f=n.body,h=tw(f);else if(n.body==null)f=new URLSearchParams,h=new FormData;else try{f=new URLSearchParams(n.body),h=tw(f)}catch{return i()}let p={formMethod:l,formAction:u,formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:h,json:void 0,text:void 0};if(_n(p.formMethod))return{path:t,submission:p};let g=yi(t);return e&&g.search&&hv(g.search)&&f.append("index",""),g.search=`?${f}`,{path:ls(g),submission:p}}function W1(e,t,n,i,a,l,u,f,h,p,g,y,v,S,w,D,C,I,k,x){let A=x?On(x[1])?x[1].error:x[1].data:void 0,N=a.createURL(l.location),T=a.createURL(h),P;if(g&&l.errors){let F=Object.keys(l.errors)[0];P=u.findIndex(K=>K.route.id===F)}else if(x&&On(x[1])){let F=x[0];P=u.findIndex(K=>K.route.id===F)-1}let V=x?x[1].statusCode:void 0,H=V&&V>=400,B={currentUrl:N,currentParams:l.matches[0]?.params||{},nextUrl:T,nextParams:u[0].params,...f,actionResult:A,actionStatus:V},$=u.map((F,K)=>{let{route:ue}=F,U=null;if(P!=null&&K>P?U=!1:ue.lazy?U=!0:ue.loader==null?U=!1:g?U=fy(ue,l.loaderData,l.errors):MM(l.loaderData,l.matches[K],F)&&(U=!0),U!==null)return hy(n,i,e,F,p,t,U);let ee=H?!1:y||N.pathname+N.search===T.pathname+T.search||N.search!==T.search||kM(l.matches[K],F),ne={...B,defaultShouldRevalidate:ee},oe=Rf(F,ne);return hy(n,i,e,F,p,t,oe,ne)}),G=[];return w.forEach((F,K)=>{if(g||!u.some(le=>le.route.id===F.routeId)||S.has(K))return;let ue=l.fetchers.get(K),U=ue&&ue.state!=="idle"&&ue.data===void 0,ee=Xi(C,F.path,I);if(!ee){if(k&&U)return;G.push({key:K,routeId:F.routeId,path:F.path,matches:null,match:null,request:null,controller:null});return}if(D.has(K))return;let ne=cf(ee,F.path),oe=new AbortController,O=yo(a,F.path,oe.signal),X=null;if(v.has(K))v.delete(K),X=So(n,i,O,ee,ne,p,t);else if(U)y&&(X=So(n,i,O,ee,ne,p,t));else{let le={...B,defaultShouldRevalidate:H?!1:y};Rf(ne,le)&&(X=So(n,i,O,ee,ne,p,t,le))}X&&G.push({key:K,routeId:F.routeId,path:F.path,matches:X,match:ne,request:O,controller:oe})}),{dsMatches:$,revalidatingFetchers:G}}function fy(e,t,n){if(e.lazy)return!0;if(!e.loader)return!1;let i=t!=null&&e.id in t,a=n!=null&&n[e.id]!==void 0;return!i&&a?!1:typeof e.loader=="function"&&e.loader.hydrate===!0?!0:!i&&!a}function MM(e,t,n){let i=!t||n.route.id!==t.route.id,a=!e.hasOwnProperty(n.route.id);return i||a}function kM(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Rf(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}function K1(e,t,n,i,a,l){let u;if(e){let p=i[e];je(p,`No route found to patch children into: routeId = ${e}`),p.children||(p.children=[]),u=p.children}else u=n;let f=[],h=[];if(t.forEach(p=>{let g=u.find(y=>jT(p,y));g?h.push({existingRoute:g,newRoute:p}):f.push(p)}),f.length>0){let p=kc(f,a,[e||"_","patch",String(u?.length||"0")],i);u.push(...p)}if(l&&h.length>0)for(let p=0;p<h.length;p++){let{existingRoute:g,newRoute:y}=h[p],v=g,[S]=kc([y],a,[],{},!0);Object.assign(v,{element:S.element?S.element:v.element,errorElement:S.errorElement?S.errorElement:v.errorElement,hydrateFallbackElement:S.hydrateFallbackElement?S.hydrateFallbackElement:v.hydrateFallbackElement})}}function jT(e,t){return"id"in e&&"id"in t&&e.id===t.id?!0:e.index===t.index&&e.path===t.path&&e.caseSensitive===t.caseSensitive?(!e.children||e.children.length===0)&&(!t.children||t.children.length===0)?!0:e.children.every((n,i)=>t.children?.some(a=>jT(n,a))):!1}var X1=new WeakMap,UT=({key:e,route:t,manifest:n,mapRouteProperties:i})=>{let a=n[t.id];if(je(a,"No route found in manifest"),!a.lazy||typeof a.lazy!="object")return;let l=a.lazy[e];if(!l)return;let u=X1.get(a);u||(u={},X1.set(a,u));let f=u[e];if(f)return f;let h=(async()=>{let p=eM(e),y=a[e]!==void 0&&e!=="hasErrorBoundary";if(p)It(!p,"Route property "+e+" is not a supported lazy route property. This property will be ignored."),u[e]=Promise.resolve();else if(y)It(!1,`Route "${a.id}" has a static property "${e}" defined. The lazy property will be ignored.`);else{let v=await l();v!=null&&(Object.assign(a,{[e]:v}),Object.assign(a,i(a)))}typeof a.lazy=="object"&&(a.lazy[e]=void 0,Object.values(a.lazy).every(v=>v===void 0)&&(a.lazy=void 0))})();return u[e]=h,h},Z1=new WeakMap;function LM(e,t,n,i,a){let l=n[e.id];if(je(l,"No route found in manifest"),!e.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof e.lazy=="function"){let g=Z1.get(l);if(g)return{lazyRoutePromise:g,lazyHandlerPromise:g};let y=(async()=>{je(typeof e.lazy=="function","No lazy route function found");let v=await e.lazy(),S={};for(let w in v){let D=v[w];if(D===void 0)continue;let C=nM(w),k=l[w]!==void 0&&w!=="hasErrorBoundary";C?It(!C,"Route property "+w+" is not a supported property to be returned from a lazy route function. This property will be ignored."):k?It(!k,`Route "${l.id}" has a static property "${w}" defined but its lazy function is also returning a value for this property. The lazy route property "${w}" will be ignored.`):S[w]=D}Object.assign(l,S),Object.assign(l,{...i(l),lazy:void 0})})();return Z1.set(l,y),y.catch(()=>{}),{lazyRoutePromise:y,lazyHandlerPromise:y}}let u=Object.keys(e.lazy),f=[],h;for(let g of u){if(a&&a.includes(g))continue;let y=UT({key:g,route:e,manifest:n,mapRouteProperties:i});y&&(f.push(y),g===t&&(h=y))}let p=f.length>0?Promise.all(f).then(()=>{}):void 0;return p?.catch(()=>{}),h?.catch(()=>{}),{lazyRoutePromise:p,lazyHandlerPromise:h}}async function J1(e){let t=e.matches.filter(a=>a.shouldLoad),n={};return(await Promise.all(t.map(a=>a.resolve()))).forEach((a,l)=>{n[t[l].route.id]=a}),n}async function PM(e){return e.matches.some(t=>t.route.middleware)?zT(e,()=>J1(e)):J1(e)}function zT(e,t){return jM(e,t,i=>i,VM,n);function n(i,a,l){if(l)return Promise.resolve(Object.assign(l.value,{[a]:{type:"error",result:i}}));{let{matches:u}=e,f=Math.min(u.findIndex(p=>p.route.id===a)||0,u.findIndex(p=>p.unstable_shouldCallHandler())||0),h=Zi(u,u[f].route.id).route.id;return Promise.resolve({[h]:{type:"error",result:i}})}}}async function jM(e,t,n,i,a){let{matches:l,request:u,params:f,context:h}=e,p=l.flatMap(y=>y.route.middleware?y.route.middleware.map(v=>[y.route.id,v]):[]);return await $T({request:u,params:f,context:h},p,t,n,i,a)}async function $T(e,t,n,i,a,l,u=0){let{request:f}=e;if(f.signal.aborted)throw f.signal.reason??new Error(`Request aborted: ${f.method} ${f.url}`);let h=t[u];if(!h)return await n();let[p,g]=h,y,v=async()=>{if(y)throw new Error("You may only call `next()` once per middleware");try{return y={value:await $T(e,t,n,i,a,l,u+1)},y.value}catch(S){return y={value:await l(S,p,y)},y.value}};try{let S=await g(e,v),w=S!=null?i(S):void 0;return a(w)?w:y?w??y.value:(y={value:await v()},y.value)}catch(S){return await l(S,p,y)}}function BT(e,t,n,i,a){let l=UT({key:"middleware",route:i.route,manifest:t,mapRouteProperties:e}),u=LM(i.route,_n(n.method)?"action":"loader",t,e,a);return{middleware:l,route:u.lazyRoutePromise,handler:u.lazyHandlerPromise}}function hy(e,t,n,i,a,l,u,f=null){let h=!1,p=BT(e,t,n,i,a);return{...i,_lazyPromises:p,shouldLoad:u,unstable_shouldRevalidateArgs:f,unstable_shouldCallHandler(g){return h=!0,f?typeof g=="boolean"?Rf(i,{...f,defaultShouldRevalidate:g}):Rf(i,f):u},resolve(g){return h||u||g&&!_n(n.method)&&(i.route.lazy||i.route.loader)?zM({request:n,match:i,lazyHandlerPromise:p?.handler,lazyRoutePromise:p?.route,handlerOverride:g,scopedContext:l}):Promise.resolve({type:"data",result:void 0})}}}function So(e,t,n,i,a,l,u,f=null){return i.map(h=>h.route.id!==a.route.id?{...h,shouldLoad:!1,unstable_shouldRevalidateArgs:f,unstable_shouldCallHandler:()=>!1,_lazyPromises:BT(e,t,n,h,l),resolve:()=>Promise.resolve({type:"data",result:void 0})}:hy(e,t,n,h,l,u,!0,f))}async function UM(e,t,n,i,a,l){n.some(p=>p._lazyPromises?.middleware)&&await Promise.all(n.map(p=>p._lazyPromises?.middleware));let u={request:t,params:n[0].params,context:a,matches:n},h=await e({...u,fetcherKey:i,runClientMiddleware:p=>{let g=u;return zT(g,()=>p({...g,fetcherKey:i,runClientMiddleware:()=>{throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler")}}))}});try{await Promise.all(n.flatMap(p=>[p._lazyPromises?.handler,p._lazyPromises?.route]))}catch{}return h}async function zM({request:e,match:t,lazyHandlerPromise:n,lazyRoutePromise:i,handlerOverride:a,scopedContext:l}){let u,f,h=_n(e.method),p=h?"action":"loader",g=y=>{let v,S=new Promise((C,I)=>v=I);f=()=>v(),e.signal.addEventListener("abort",f);let w=C=>typeof y!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${p}" [routeId: ${t.route.id}]`)):y({request:e,params:t.params,context:l},...C!==void 0?[C]:[]),D=(async()=>{try{return{type:"data",result:await(a?a(I=>w(I)):w())}}catch(C){return{type:"error",result:C}}})();return Promise.race([D,S])};try{let y=h?t.route.action:t.route.loader;if(n||i)if(y){let v,[S]=await Promise.all([g(y).catch(w=>{v=w}),n,i]);if(v!==void 0)throw v;u=S}else{await n;let v=h?t.route.action:t.route.loader;if(v)[u]=await Promise.all([g(v),i]);else if(p==="action"){let S=new URL(e.url),w=S.pathname+S.search;throw Yn(405,{method:e.method,pathname:w,routeId:t.route.id})}else return{type:"data",result:void 0}}else if(y)u=await g(y);else{let v=new URL(e.url),S=v.pathname+v.search;throw Yn(404,{pathname:S})}}catch(y){return{type:"error",result:y}}finally{f&&e.signal.removeEventListener("abort",f)}return u}async function $M(e){let t=e.headers.get("Content-Type");return t&&/\bapplication\/json\b/.test(t)?e.body==null?null:e.json():e.text()}async function BM(e){let{result:t,type:n}=e;if(FT(t)){let i;try{i=await $M(t)}catch(a){return{type:"error",error:a}}return n==="error"?{type:"error",error:new Cf(t.status,t.statusText,i),statusCode:t.status,headers:t.headers}:{type:"data",data:i,statusCode:t.status,headers:t.headers}}return n==="error"?sw(t)?t.data instanceof Error?{type:"error",error:t.data,statusCode:t.init?.status,headers:t.init?.headers?new Headers(t.init.headers):void 0}:{type:"error",error:new Cf(t.init?.status||500,void 0,t.data),statusCode:Lc(t)?t.status:void 0,headers:t.init?.headers?new Headers(t.init.headers):void 0}:{type:"error",error:t,statusCode:Lc(t)?t.status:void 0}:sw(t)?{type:"data",data:t.data,statusCode:t.init?.status,headers:t.init?.headers?new Headers(t.init.headers):void 0}:{type:"data",data:t}}function HM(e,t,n,i,a){let l=e.headers.get("Location");if(je(l,"Redirects returned/thrown from loaders/actions must have a Location header"),!fv(l)){let u=i.slice(0,i.findIndex(f=>f.route.id===n)+1);l=dy(new URL(t.url),u,a,l),e.headers.set("Location",l)}return e}function ew(e,t,n){if(fv(e)){let i=e,a=i.startsWith("//")?new URL(t.protocol+i):new URL(i),l=Kn(a.pathname,n)!=null;if(a.origin===t.origin&&l)return a.pathname+a.search+a.hash}return e}function yo(e,t,n,i){let a=e.createURL(HT(t)).toString(),l={signal:n};if(i&&_n(i.formMethod)){let{formMethod:u,formEncType:f}=i;l.method=u.toUpperCase(),f==="application/json"?(l.headers=new Headers({"Content-Type":f}),l.body=JSON.stringify(i.json)):f==="text/plain"?l.body=i.text:f==="application/x-www-form-urlencoded"&&i.formData?l.body=py(i.formData):l.body=i.formData}return new Request(a,l)}function py(e){let t=new URLSearchParams;for(let[n,i]of e.entries())t.append(n,typeof i=="string"?i:i.name);return t}function tw(e){let t=new FormData;for(let[n,i]of e.entries())t.append(n,i);return t}function FM(e,t,n,i=!1,a=!1){let l={},u=null,f,h=!1,p={},g=n&&On(n[1])?n[1].error:void 0;return e.forEach(y=>{if(!(y.route.id in t))return;let v=y.route.id,S=t[v];if(je(!Js(S),"Cannot handle redirect results in processLoaderData"),On(S)){let w=S.error;if(g!==void 0&&(w=g,g=void 0),u=u||{},a)u[v]=w;else{let D=Zi(e,v);u[D.route.id]==null&&(u[D.route.id]=w)}i||(l[v]=PT),h||(h=!0,f=Lc(S.error)?S.error.status:500),S.headers&&(p[v]=S.headers)}else l[v]=S.data,S.statusCode&&S.statusCode!==200&&!h&&(f=S.statusCode),S.headers&&(p[v]=S.headers)}),g!==void 0&&n&&(u={[n[0]]:g},n[2]&&(l[n[2]]=void 0)),{loaderData:l,errors:u,statusCode:f||200,loaderHeaders:p}}function nw(e,t,n,i,a,l){let{loaderData:u,errors:f}=FM(t,n,i);return a.filter(h=>!h.matches||h.matches.some(p=>p.shouldLoad)).forEach(h=>{let{key:p,match:g,controller:y}=h;if(y&&y.signal.aborted)return;let v=l[p];if(je(v,"Did not find corresponding fetcher result"),On(v)){let S=Zi(e.matches,g?.route.id);f&&f[S.route.id]||(f={...f,[S.route.id]:v.error}),e.fetchers.delete(p)}else if(Js(v))je(!1,"Unhandled fetcher revalidation redirect");else{let S=Wi(v.data);e.fetchers.set(p,S)}}),{loaderData:u,errors:f}}function rw(e,t,n,i){let a=Object.entries(t).filter(([,l])=>l!==PT).reduce((l,[u,f])=>(l[u]=f,l),{});for(let l of n){let u=l.route.id;if(!t.hasOwnProperty(u)&&e.hasOwnProperty(u)&&l.route.loader&&(a[u]=e[u]),i&&i.hasOwnProperty(u))break}return a}function iw(e){return e?On(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function Zi(e,t){return(t?e.slice(0,e.findIndex(i=>i.route.id===t)+1):[...e]).reverse().find(i=>i.route.hasErrorBoundary===!0)||e[0]}function zd(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Yn(e,{pathname:t,routeId:n,method:i,type:a,message:l}={}){let u="Unknown Server Error",f="Unknown @remix-run/router error";return e===400?(u="Bad Request",i&&t&&n?f=`You made a ${i} request to "${t}" but did not provide a \`loader\` for route "${n}", so there is no way to handle the request.`:a==="invalid-body"&&(f="Unable to encode submission body")):e===403?(u="Forbidden",f=`Route "${n}" does not match URL "${t}"`):e===404?(u="Not Found",f=`No route matches URL "${t}"`):e===405&&(u="Method Not Allowed",i&&t&&n?f=`You made a ${i.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${n}", so there is no way to handle the request.`:i&&(f=`Invalid request method "${i.toUpperCase()}"`)),new Cf(e||500,u,new Error(f),!0)}function $d(e){let t=Object.entries(e);for(let n=t.length-1;n>=0;n--){let[i,a]=t[n];if(Js(a))return{key:i,result:a}}}function HT(e){let t=typeof e=="string"?yi(e):e;return ls({...t,hash:""})}function qM(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function VM(e){return e!=null&&typeof e=="object"&&Object.entries(e).every(([t,n])=>typeof t=="string"&&GM(n))}function GM(e){return e!=null&&typeof e=="object"&&"type"in e&&"result"in e&&(e.type==="data"||e.type==="error")}function YM(e){return FT(e.result)&&CM.has(e.result.status)}function On(e){return e.type==="error"}function Js(e){return(e&&e.type)==="redirect"}function sw(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function FT(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function QM(e){return TM.has(e.toUpperCase())}function _n(e){return EM.has(e.toUpperCase())}function hv(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function cf(e,t){let n=typeof t=="string"?yi(t).search:t.search;if(e[e.length-1].route.index&&hv(n||""))return e[e.length-1];let i=MT(e);return i[i.length-1]}function aw(e){let{formMethod:t,formAction:n,formEncType:i,text:a,formData:l,json:u}=e;if(!(!t||!n||!i)){if(a!=null)return{formMethod:t,formAction:n,formEncType:i,formData:void 0,json:void 0,text:a};if(l!=null)return{formMethod:t,formAction:n,formEncType:i,formData:l,json:void 0,text:void 0};if(u!==void 0)return{formMethod:t,formAction:n,formEncType:i,formData:void 0,json:u,text:void 0}}}function mg(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function WM(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function ec(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function KM(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function Wi(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function XM(e,t){try{let n=e.sessionStorage.getItem(LT);if(n){let i=JSON.parse(n);for(let[a,l]of Object.entries(i||{}))l&&Array.isArray(l)&&t.set(a,new Set(l||[]))}}catch{}}function ZM(e,t){if(t.size>0){let n={};for(let[i,a]of t)n[i]=[...a];try{e.sessionStorage.setItem(LT,JSON.stringify(n))}catch(i){It(!1,`Failed to save applied view transitions in sessionStorage (${i}).`)}}}function JM(){let e,t,n=new Promise((i,a)=>{e=async l=>{i(l);try{await n}catch{}},t=async l=>{a(l);try{await n}catch{}}});return{promise:n,resolve:e,reject:t}}var Sa=R.createContext(null);Sa.displayName="DataRouter";var su=R.createContext(null);su.displayName="DataRouterState";R.createContext(!1);var pv=R.createContext({isTransitioning:!1});pv.displayName="ViewTransition";var qT=R.createContext(new Map);qT.displayName="Fetchers";var ek=R.createContext(null);ek.displayName="Await";var mr=R.createContext(null);mr.displayName="Navigation";var vh=R.createContext(null);vh.displayName="Location";var gr=R.createContext({outlet:null,matches:[],isDataRoute:!1});gr.displayName="Route";var mv=R.createContext(null);mv.displayName="RouteError";function tk(e,{relative:t}={}){je(Ho(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=R.useContext(mr),{hash:a,pathname:l,search:u}=ou(e,{relative:t}),f=l;return n!=="/"&&(f=l==="/"?n:Ir([n,l])),i.createHref({pathname:f,search:u,hash:a})}function Ho(){return R.useContext(vh)!=null}function vi(){return je(Ho(),"useLocation() may be used only in the context of a <Router> component."),R.useContext(vh).location}var VT="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function GT(e){R.useContext(mr).static||R.useLayoutEffect(e)}function au(){let{isDataRoute:e}=R.useContext(gr);return e?gk():nk()}function nk(){je(Ho(),"useNavigate() may be used only in the context of a <Router> component.");let e=R.useContext(Sa),{basename:t,navigator:n}=R.useContext(mr),{matches:i}=R.useContext(gr),{pathname:a}=vi(),l=JSON.stringify(gh(i)),u=R.useRef(!1);return GT(()=>{u.current=!0}),R.useCallback((h,p={})=>{if(It(u.current,VT),!u.current)return;if(typeof h=="number"){n.go(h);return}let g=yh(h,JSON.parse(l),a,p.relative==="path");e==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:Ir([t,g.pathname])),(p.replace?n.replace:n.push)(g,p.state,p)},[t,n,l,a,e])}var rk=R.createContext(null);function ik(e){let t=R.useContext(gr).outlet;return t&&R.createElement(rk.Provider,{value:e},t)}function ou(e,{relative:t}={}){let{matches:n}=R.useContext(gr),{pathname:i}=vi(),a=JSON.stringify(gh(n));return R.useMemo(()=>yh(e,JSON.parse(a),i,t==="path"),[e,a,i,t])}function sk(e,t,n,i,a){je(Ho(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=R.useContext(mr),{matches:u}=R.useContext(gr),f=u[u.length-1],h=f?f.params:{},p=f?f.pathname:"/",g=f?f.pathnameBase:"/",y=f&&f.route;{let k=y&&y.path||"";YT(p,!y||k.endsWith("*")||k.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${k}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${k}"> to <Route path="${k==="/"?"*":`${k}/*`}">.`)}let v=vi(),S;S=v;let w=S.pathname||"/",D=w;if(g!=="/"){let k=g.replace(/^\//,"").split("/");D="/"+w.replace(/^\//,"").split("/").slice(k.length).join("/")}let C=Xi(e,{pathname:D});return It(y||C!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),It(C==null||C[C.length-1].route.element!==void 0||C[C.length-1].route.Component!==void 0||C[C.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),uk(C&&C.map(k=>Object.assign({},k,{params:Object.assign({},h,k.params),pathname:Ir([g,l.encodeLocation?l.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?g:Ir([g,l.encodeLocation?l.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),u,n,i,a)}function ak(){let e=mk(),t=Lc(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},u=null;return console.error("Error handled by React Router default ErrorBoundary:",e),u=R.createElement(R.Fragment,null,R.createElement("p",null,"💿 Hey developer 👋"),R.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",R.createElement("code",{style:l},"ErrorBoundary")," or"," ",R.createElement("code",{style:l},"errorElement")," prop on your route.")),R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},t),n?R.createElement("pre",{style:a},n):null,u)}var ok=R.createElement(ak,null),lk=class extends R.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.unstable_onError?this.props.unstable_onError(e,t):console.error("React Router caught the following error during render",e)}render(){return this.state.error!==void 0?R.createElement(gr.Provider,{value:this.props.routeContext},R.createElement(mv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function ck({routeContext:e,match:t,children:n}){let i=R.useContext(Sa);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),R.createElement(gr.Provider,{value:e},n)}function uk(e,t=[],n=null,i=null,a=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,u=n?.errors;if(u!=null){let p=l.findIndex(g=>g.route.id&&u?.[g.route.id]!==void 0);je(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,p+1))}let f=!1,h=-1;if(n)for(let p=0;p<l.length;p++){let g=l[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(h=p),g.route.id){let{loaderData:y,errors:v}=n,S=g.route.loader&&!y.hasOwnProperty(g.route.id)&&(!v||v[g.route.id]===void 0);if(g.route.lazy||S){f=!0,h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}return l.reduceRight((p,g,y)=>{let v,S=!1,w=null,D=null;n&&(v=u&&g.route.id?u[g.route.id]:void 0,w=g.route.errorElement||ok,f&&(h<0&&y===0?(YT("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,D=null):h===y&&(S=!0,D=g.route.hydrateFallbackElement||null)));let C=t.concat(l.slice(0,y+1)),I=()=>{let k;return v?k=w:S?k=D:g.route.Component?k=R.createElement(g.route.Component,null):g.route.element?k=g.route.element:k=p,R.createElement(ck,{match:g,routeContext:{outlet:p,matches:C,isDataRoute:n!=null},children:k})};return n&&(g.route.ErrorBoundary||g.route.errorElement||y===0)?R.createElement(lk,{location:n.location,revalidation:n.revalidation,component:w,error:v,children:I(),routeContext:{outlet:null,matches:C,isDataRoute:!0},unstable_onError:i}):I()},null)}function gv(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function dk(e){let t=R.useContext(Sa);return je(t,gv(e)),t}function fk(e){let t=R.useContext(su);return je(t,gv(e)),t}function hk(e){let t=R.useContext(gr);return je(t,gv(e)),t}function yv(e){let t=hk(e),n=t.matches[t.matches.length-1];return je(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function pk(){return yv("useRouteId")}function mk(){let e=R.useContext(mv),t=fk("useRouteError"),n=yv("useRouteError");return e!==void 0?e:t.errors?.[n]}function gk(){let{router:e}=dk("useNavigate"),t=yv("useNavigate"),n=R.useRef(!1);return GT(()=>{n.current=!0}),R.useCallback(async(a,l={})=>{It(n.current,VT),n.current&&(typeof a=="number"?e.navigate(a):await e.navigate(a,{fromRouteId:t,...l}))},[e,t])}var ow={};function YT(e,t,n){!t&&!ow[e]&&(ow[e]=!0,It(!1,n))}var lw={};function cw(e,t){!e&&!lw[t]&&(lw[t]=!0,console.warn(t))}function yk(e){let t={hasErrorBoundary:e.hasErrorBoundary||e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&(e.element&&It(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(t,{element:R.createElement(e.Component),Component:void 0})),e.HydrateFallback&&(e.hydrateFallbackElement&&It(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(t,{hydrateFallbackElement:R.createElement(e.HydrateFallback),HydrateFallback:void 0})),e.ErrorBoundary&&(e.errorElement&&It(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(t,{errorElement:R.createElement(e.ErrorBoundary),ErrorBoundary:void 0})),t}var vk=["HydrateFallback","hydrateFallbackElement"],_k=class{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=i=>{this.status==="pending"&&(this.status="resolved",t(i))},this.reject=i=>{this.status==="pending"&&(this.status="rejected",n(i))}})}};function bk({router:e,flushSync:t,unstable_onError:n}){let[i,a]=R.useState(e.state),[l,u]=R.useState(),[f,h]=R.useState({isTransitioning:!1}),[p,g]=R.useState(),[y,v]=R.useState(),[S,w]=R.useState(),D=R.useRef(new Map),C=R.useCallback(N=>{a(T=>(N.errors&&n&&Object.entries(N.errors).forEach(([P,V])=>{T.errors?.[P]!==V&&n(V)}),N))},[n]),I=R.useCallback((N,{deletedFetchers:T,flushSync:P,viewTransitionOpts:V})=>{N.fetchers.forEach((B,$)=>{B.data!==void 0&&D.current.set($,B.data)}),T.forEach(B=>D.current.delete(B)),cw(P===!1||t!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let H=e.window!=null&&e.window.document!=null&&typeof e.window.document.startViewTransition=="function";if(cw(V==null||H,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!V||!H){t&&P?t(()=>C(N)):R.startTransition(()=>C(N));return}if(t&&P){t(()=>{y&&(p&&p.resolve(),y.skipTransition()),h({isTransitioning:!0,flushSync:!0,currentLocation:V.currentLocation,nextLocation:V.nextLocation})});let B=e.window.document.startViewTransition(()=>{t(()=>C(N))});B.finished.finally(()=>{t(()=>{g(void 0),v(void 0),u(void 0),h({isTransitioning:!1})})}),t(()=>v(B));return}y?(p&&p.resolve(),y.skipTransition(),w({state:N,currentLocation:V.currentLocation,nextLocation:V.nextLocation})):(u(N),h({isTransitioning:!0,flushSync:!1,currentLocation:V.currentLocation,nextLocation:V.nextLocation}))},[e.window,t,y,p,C]);R.useLayoutEffect(()=>e.subscribe(I),[e,I]),R.useEffect(()=>{f.isTransitioning&&!f.flushSync&&g(new _k)},[f]),R.useEffect(()=>{if(p&&l&&e.window){let N=l,T=p.promise,P=e.window.document.startViewTransition(async()=>{R.startTransition(()=>C(N)),await T});P.finished.finally(()=>{g(void 0),v(void 0),u(void 0),h({isTransitioning:!1})}),v(P)}},[l,p,e.window,C]),R.useEffect(()=>{p&&l&&i.location.key===l.location.key&&p.resolve()},[p,y,i.location,l]),R.useEffect(()=>{!f.isTransitioning&&S&&(u(S.state),h({isTransitioning:!0,flushSync:!1,currentLocation:S.currentLocation,nextLocation:S.nextLocation}),w(void 0))},[f.isTransitioning,S]);let k=R.useMemo(()=>({createHref:e.createHref,encodeLocation:e.encodeLocation,go:N=>e.navigate(N),push:(N,T,P)=>e.navigate(N,{state:T,preventScrollReset:P?.preventScrollReset}),replace:(N,T,P)=>e.navigate(N,{replace:!0,state:T,preventScrollReset:P?.preventScrollReset})}),[e]),x=e.basename||"/",A=R.useMemo(()=>({router:e,navigator:k,static:!1,basename:x,unstable_onError:n}),[e,k,x,n]);return R.createElement(R.Fragment,null,R.createElement(Sa.Provider,{value:A},R.createElement(su.Provider,{value:i},R.createElement(qT.Provider,{value:D.current},R.createElement(pv.Provider,{value:f},R.createElement(xk,{basename:x,location:i.location,navigationType:i.historyAction,navigator:k},R.createElement(Sk,{routes:e.routes,future:e.future,state:i,unstable_onError:n})))))),null)}var Sk=R.memo(wk);function wk({routes:e,future:t,state:n,unstable_onError:i}){return sk(e,void 0,n,i,t)}function vv({to:e,replace:t,state:n,relative:i}){je(Ho(),"<Navigate> may be used only in the context of a <Router> component.");let{static:a}=R.useContext(mr);It(!a,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=R.useContext(gr),{pathname:u}=vi(),f=au(),h=yh(e,gh(l),u,i==="path"),p=JSON.stringify(h);return R.useEffect(()=>{f(JSON.parse(p),{replace:t,state:n,relative:i})},[f,p,i,t,n]),null}function Ek(e){return ik(e.context)}function Cr(e){je(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function xk({basename:e="/",children:t=null,location:n,navigationType:i="POP",navigator:a,static:l=!1}){je(!Ho(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=e.replace(/^\/*/,"/"),f=R.useMemo(()=>({basename:u,navigator:a,static:l,future:{}}),[u,a,l]);typeof n=="string"&&(n=yi(n));let{pathname:h="/",search:p="",hash:g="",state:y=null,key:v="default"}=n,S=R.useMemo(()=>{let w=Kn(h,u);return w==null?null:{location:{pathname:w,search:p,hash:g,state:y,key:v},navigationType:i}},[u,h,p,g,y,v,i]);return It(S!=null,`<Router basename="${u}"> is not able to match the URL "${h}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:R.createElement(mr.Provider,{value:f},R.createElement(vh.Provider,{children:t,value:S}))}function my(e,t=[]){let n=[];return R.Children.forEach(e,(i,a)=>{if(!R.isValidElement(i))return;let l=[...t,a];if(i.type===R.Fragment){n.push.apply(n,my(i.props.children,l));return}je(i.type===Cr,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),je(!i.props.index||!i.props.children,"An index route cannot have child routes.");let u={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(u.children=my(i.props.children,l)),n.push(u)}),n}var Tk=my,uf="get",df="application/x-www-form-urlencoded";function _h(e){return e!=null&&typeof e.tagName=="string"}function Ck(e){return _h(e)&&e.tagName.toLowerCase()==="button"}function Rk(e){return _h(e)&&e.tagName.toLowerCase()==="form"}function Ak(e){return _h(e)&&e.tagName.toLowerCase()==="input"}function Ik(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Dk(e,t){return e.button===0&&(!t||t==="_self")&&!Ik(e)}var Bd=null;function Ok(){if(Bd===null)try{new FormData(document.createElement("form"),0),Bd=!1}catch{Bd=!0}return Bd}var Nk=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function gg(e){return e!=null&&!Nk.has(e)?(It(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${df}"`),null):e}function Mk(e,t){let n,i,a,l,u;if(Rk(e)){let f=e.getAttribute("action");i=f?Kn(f,t):null,n=e.getAttribute("method")||uf,a=gg(e.getAttribute("enctype"))||df,l=new FormData(e)}else if(Ck(e)||Ak(e)&&(e.type==="submit"||e.type==="image")){let f=e.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=e.getAttribute("formaction")||f.getAttribute("action");if(i=h?Kn(h,t):null,n=e.getAttribute("formmethod")||f.getAttribute("method")||uf,a=gg(e.getAttribute("formenctype"))||gg(f.getAttribute("enctype"))||df,l=new FormData(f,e),!Ok()){let{name:p,type:g,value:y}=e;if(g==="image"){let v=p?`${p}.`:"";l.append(`${v}x`,"0"),l.append(`${v}y`,"0")}else p&&l.append(p,y)}}else{if(_h(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=uf,i=null,a=df,u=e}return l&&a==="text/plain"&&(u=l,l=void 0),{action:i,method:n.toLowerCase(),encType:a,formData:l,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function _v(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function kk(e,t,n){let i=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return i.pathname==="/"?i.pathname=`_root.${n}`:t&&Kn(i.pathname,t)==="/"?i.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${n}`,i}async function Lk(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Pk(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function jk(e,t,n){let i=await Promise.all(e.map(async a=>{let l=t.routes[a.route.id];if(l){let u=await Lk(l,n);return u.links?u.links():[]}return[]}));return Bk(i.flat(1).filter(Pk).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function uw(e,t,n,i,a,l){let u=(h,p)=>n[p]?h.route.id!==n[p].route.id:!0,f=(h,p)=>n[p].pathname!==h.pathname||n[p].route.path?.endsWith("*")&&n[p].params["*"]!==h.params["*"];return l==="assets"?t.filter((h,p)=>u(h,p)||f(h,p)):l==="data"?t.filter((h,p)=>{let g=i.routes[h.route.id];if(!g||!g.hasLoader)return!1;if(u(h,p)||f(h,p))return!0;if(h.route.shouldRevalidate){let y=h.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function Uk(e,t,{includeHydrateFallback:n}={}){return zk(e.map(i=>{let a=t.routes[i.route.id];if(!a)return[];let l=[a.module];return a.clientActionModule&&(l=l.concat(a.clientActionModule)),a.clientLoaderModule&&(l=l.concat(a.clientLoaderModule)),n&&a.hydrateFallbackModule&&(l=l.concat(a.hydrateFallbackModule)),a.imports&&(l=l.concat(a.imports)),l}).flat(1))}function zk(e){return[...new Set(e)]}function $k(e){let t={},n=Object.keys(e).sort();for(let i of n)t[i]=e[i];return t}function Bk(e,t){let n=new Set;return new Set(t),e.reduce((i,a)=>{let l=JSON.stringify($k(a));return n.has(l)||(n.add(l),i.push({key:l,link:a})),i},[])}function QT(){let e=R.useContext(Sa);return _v(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Hk(){let e=R.useContext(su);return _v(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var bv=R.createContext(void 0);bv.displayName="FrameworkContext";function WT(){let e=R.useContext(bv);return _v(e,"You must render this element inside a <HydratedRouter> element"),e}function Fk(e,t){let n=R.useContext(bv),[i,a]=R.useState(!1),[l,u]=R.useState(!1),{onFocus:f,onBlur:h,onMouseEnter:p,onMouseLeave:g,onTouchStart:y}=t,v=R.useRef(null);R.useEffect(()=>{if(e==="render"&&u(!0),e==="viewport"){let D=I=>{I.forEach(k=>{u(k.isIntersecting)})},C=new IntersectionObserver(D,{threshold:.5});return v.current&&C.observe(v.current),()=>{C.disconnect()}}},[e]),R.useEffect(()=>{if(i){let D=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(D)}}},[i]);let S=()=>{a(!0)},w=()=>{a(!1),u(!1)};return n?e!=="intent"?[l,v,{}]:[l,v,{onFocus:tc(f,S),onBlur:tc(h,w),onMouseEnter:tc(p,S),onMouseLeave:tc(g,w),onTouchStart:tc(y,S)}]:[!1,v,{}]}function tc(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function qk({page:e,...t}){let{router:n}=QT(),i=R.useMemo(()=>Xi(n.routes,e,n.basename),[n.routes,e,n.basename]);return i?R.createElement(Gk,{page:e,matches:i,...t}):null}function Vk(e){let{manifest:t,routeModules:n}=WT(),[i,a]=R.useState([]);return R.useEffect(()=>{let l=!1;return jk(e,t,n).then(u=>{l||a(u)}),()=>{l=!0}},[e,t,n]),i}function Gk({page:e,matches:t,...n}){let i=vi(),{manifest:a,routeModules:l}=WT(),{basename:u}=QT(),{loaderData:f,matches:h}=Hk(),p=R.useMemo(()=>uw(e,t,h,a,i,"data"),[e,t,h,a,i]),g=R.useMemo(()=>uw(e,t,h,a,i,"assets"),[e,t,h,a,i]),y=R.useMemo(()=>{if(e===i.pathname+i.search+i.hash)return[];let w=new Set,D=!1;if(t.forEach(I=>{let k=a.routes[I.route.id];!k||!k.hasLoader||(!p.some(x=>x.route.id===I.route.id)&&I.route.id in f&&l[I.route.id]?.shouldRevalidate||k.hasClientLoader?D=!0:w.add(I.route.id))}),w.size===0)return[];let C=kk(e,u,"data");return D&&w.size>0&&C.searchParams.set("_routes",t.filter(I=>w.has(I.route.id)).map(I=>I.route.id).join(",")),[C.pathname+C.search]},[u,f,i,a,p,t,e,l]),v=R.useMemo(()=>Uk(g,a),[g,a]),S=Vk(g);return R.createElement(R.Fragment,null,y.map(w=>R.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...n})),v.map(w=>R.createElement("link",{key:w,rel:"modulepreload",href:w,...n})),S.map(({key:w,link:D})=>R.createElement("link",{key:w,nonce:n.nonce,...D})))}function Yk(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var KT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{KT&&(window.__reactRouterVersion="7.9.1")}catch{}function Qk(e,t){return OM({basename:t?.basename,getContext:t?.getContext,future:t?.future,history:KN({window:t?.window}),hydrationData:Wk(),routes:e,mapRouteProperties:yk,hydrationRouteProperties:vk,dataStrategy:t?.dataStrategy,patchRoutesOnNavigation:t?.patchRoutesOnNavigation,window:t?.window}).initialize()}function Wk(){let e=window?.__staticRouterHydrationData;return e&&e.errors&&(e={...e,errors:Kk(e.errors)}),e}function Kk(e){if(!e)return null;let t=Object.entries(e),n={};for(let[i,a]of t)if(a&&a.__type==="RouteErrorResponse")n[i]=new Cf(a.status,a.statusText,a.data,a.internal===!0);else if(a&&a.__type==="Error"){if(a.__subType){let l=window[a.__subType];if(typeof l=="function")try{let u=new l(a.message);u.stack="",n[i]=u}catch{}}if(n[i]==null){let l=new Error(a.message);l.stack="",n[i]=l}}else n[i]=a;return n}var XT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ms=R.forwardRef(function({onClick:t,discover:n="render",prefetch:i="none",relative:a,reloadDocument:l,replace:u,state:f,target:h,to:p,preventScrollReset:g,viewTransition:y,...v},S){let{basename:w}=R.useContext(mr),D=typeof p=="string"&&XT.test(p),C,I=!1;if(typeof p=="string"&&D&&(C=p,KT))try{let H=new URL(window.location.href),B=p.startsWith("//")?new URL(H.protocol+p):new URL(p),$=Kn(B.pathname,w);B.origin===H.origin&&$!=null?p=$+B.search+B.hash:I=!0}catch{It(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let k=tk(p,{relative:a}),[x,A,N]=Fk(i,v),T=Jk(p,{replace:u,state:f,target:h,preventScrollReset:g,relative:a,viewTransition:y});function P(H){t&&t(H),H.defaultPrevented||T(H)}let V=R.createElement("a",{...v,...N,href:C||k,onClick:I||l?t:P,ref:Yk(S,A),target:h,"data-discover":!D&&n==="render"?"true":void 0});return x&&!D?R.createElement(R.Fragment,null,V,R.createElement(qk,{page:k})):V});ms.displayName="Link";var Sv=R.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:i="",end:a=!1,style:l,to:u,viewTransition:f,children:h,...p},g){let y=ou(u,{relative:p.relative}),v=vi(),S=R.useContext(su),{navigator:w,basename:D}=R.useContext(mr),C=S!=null&&i2(y)&&f===!0,I=w.encodeLocation?w.encodeLocation(y).pathname:y.pathname,k=v.pathname,x=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;n||(k=k.toLowerCase(),x=x?x.toLowerCase():null,I=I.toLowerCase()),x&&D&&(x=Kn(x,D)||x);const A=I!=="/"&&I.endsWith("/")?I.length-1:I.length;let N=k===I||!a&&k.startsWith(I)&&k.charAt(A)==="/",T=x!=null&&(x===I||!a&&x.startsWith(I)&&x.charAt(I.length)==="/"),P={isActive:N,isPending:T,isTransitioning:C},V=N?t:void 0,H;typeof i=="function"?H=i(P):H=[i,N?"active":null,T?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let B=typeof l=="function"?l(P):l;return R.createElement(ms,{...p,"aria-current":V,className:H,ref:g,style:B,to:u,viewTransition:f},typeof h=="function"?h(P):h)});Sv.displayName="NavLink";var Xk=R.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:i,replace:a,state:l,method:u=uf,action:f,onSubmit:h,relative:p,preventScrollReset:g,viewTransition:y,...v},S)=>{let w=n2(),D=r2(f,{relative:p}),C=u.toLowerCase()==="get"?"get":"post",I=typeof f=="string"&&XT.test(f),k=x=>{if(h&&h(x),x.defaultPrevented)return;x.preventDefault();let A=x.nativeEvent.submitter,N=A?.getAttribute("formmethod")||u;w(A||x.currentTarget,{fetcherKey:t,method:N,navigate:n,replace:a,state:l,relative:p,preventScrollReset:g,viewTransition:y})};return R.createElement("form",{ref:S,method:C,action:D,onSubmit:i?h:k,...v,"data-discover":!I&&e==="render"?"true":void 0})});Xk.displayName="Form";function Zk(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ZT(e){let t=R.useContext(Sa);return je(t,Zk(e)),t}function Jk(e,{target:t,replace:n,state:i,preventScrollReset:a,relative:l,viewTransition:u}={}){let f=au(),h=vi(),p=ou(e,{relative:l});return R.useCallback(g=>{if(Dk(g,t)){g.preventDefault();let y=n!==void 0?n:ls(h)===ls(p);f(e,{replace:y,state:i,preventScrollReset:a,relative:l,viewTransition:u})}},[h,f,p,n,i,t,e,a,l,u])}var e2=0,t2=()=>`__${String(++e2)}__`;function n2(){let{router:e}=ZT("useSubmit"),{basename:t}=R.useContext(mr),n=pk();return R.useCallback(async(i,a={})=>{let{action:l,method:u,encType:f,formData:h,body:p}=Mk(i,t);if(a.navigate===!1){let g=a.fetcherKey||t2();await e.fetch(g,n,a.action||l,{preventScrollReset:a.preventScrollReset,formData:h,body:p,formMethod:a.method||u,formEncType:a.encType||f,flushSync:a.flushSync})}else await e.navigate(a.action||l,{preventScrollReset:a.preventScrollReset,formData:h,body:p,formMethod:a.method||u,formEncType:a.encType||f,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[e,t,n])}function r2(e,{relative:t}={}){let{basename:n}=R.useContext(mr),i=R.useContext(gr);je(i,"useFormAction must be used inside a RouteContext");let[a]=i.matches.slice(-1),l={...ou(e||".",{relative:t})},u=vi();if(e==null){l.search=u.search;let f=new URLSearchParams(l.search),h=f.getAll("index");if(h.some(g=>g==="")){f.delete("index"),h.filter(y=>y).forEach(y=>f.append("index",y));let g=f.toString();l.search=g?`?${g}`:""}}return(!e||e===".")&&a.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(l.pathname=l.pathname==="/"?n:Ir([n,l.pathname])),ls(l)}function i2(e,{relative:t}={}){let n=R.useContext(pv);je(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=ZT("useViewTransitionState"),a=ou(e,{relative:t});if(!n.isTransitioning)return!1;let l=Kn(n.currentLocation.pathname,i)||n.currentLocation.pathname,u=Kn(n.nextLocation.pathname,i)||n.nextLocation.pathname;return Tf(a.pathname,u)!=null||Tf(a.pathname,l)!=null}var s2=wT();function a2(e){return R.createElement(bk,{flushSync:s2.flushSync,...e})}var sn=function(){return sn=Object.assign||function(t){for(var n,i=1,a=arguments.length;i<a;i++){n=arguments[i];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},sn.apply(this,arguments)};function Af(e,t,n){if(n||arguments.length===2)for(var i=0,a=t.length,l;i<a;i++)(l||!(i in t))&&(l||(l=Array.prototype.slice.call(t,0,i)),l[i]=t[i]);return e.concat(l||Array.prototype.slice.call(t))}var mt="-ms-",bc="-moz-",et="-webkit-",JT="comm",bh="rule",wv="decl",o2="@import",eC="@keyframes",l2="@layer",tC=Math.abs,Ev=String.fromCharCode,gy=Object.assign;function c2(e,t){return qt(e,0)^45?(((t<<2^qt(e,0))<<2^qt(e,1))<<2^qt(e,2))<<2^qt(e,3):0}function nC(e){return e.trim()}function ri(e,t){return(e=t.exec(e))?e[0]:e}function $e(e,t,n){return e.replace(t,n)}function ff(e,t,n){return e.indexOf(t,n)}function qt(e,t){return e.charCodeAt(t)|0}function Io(e,t,n){return e.slice(t,n)}function Rr(e){return e.length}function rC(e){return e.length}function mc(e,t){return t.push(e),e}function u2(e,t){return e.map(t).join("")}function dw(e,t){return e.filter(function(n){return!ri(n,t)})}var Sh=1,Do=1,iC=0,Xn=0,Lt=0,Fo="";function wh(e,t,n,i,a,l,u,f){return{value:e,root:t,parent:n,type:i,props:a,children:l,line:Sh,column:Do,length:u,return:"",siblings:f}}function Ki(e,t){return gy(wh("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function fo(e){for(;e.root;)e=Ki(e.root,{children:[e]});mc(e,e.siblings)}function d2(){return Lt}function f2(){return Lt=Xn>0?qt(Fo,--Xn):0,Do--,Lt===10&&(Do=1,Sh--),Lt}function lr(){return Lt=Xn<iC?qt(Fo,Xn++):0,Do++,Lt===10&&(Do=1,Sh++),Lt}function ia(){return qt(Fo,Xn)}function hf(){return Xn}function Eh(e,t){return Io(Fo,e,t)}function yy(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function h2(e){return Sh=Do=1,iC=Rr(Fo=e),Xn=0,[]}function p2(e){return Fo="",e}function yg(e){return nC(Eh(Xn-1,vy(e===91?e+2:e===40?e+1:e)))}function m2(e){for(;(Lt=ia())&&Lt<33;)lr();return yy(e)>2||yy(Lt)>3?"":" "}function g2(e,t){for(;--t&&lr()&&!(Lt<48||Lt>102||Lt>57&&Lt<65||Lt>70&&Lt<97););return Eh(e,hf()+(t<6&&ia()==32&&lr()==32))}function vy(e){for(;lr();)switch(Lt){case e:return Xn;case 34:case 39:e!==34&&e!==39&&vy(Lt);break;case 40:e===41&&vy(e);break;case 92:lr();break}return Xn}function y2(e,t){for(;lr()&&e+Lt!==57;)if(e+Lt===84&&ia()===47)break;return"/*"+Eh(t,Xn-1)+"*"+Ev(e===47?e:lr())}function v2(e){for(;!yy(ia());)lr();return Eh(e,Xn)}function _2(e){return p2(pf("",null,null,null,[""],e=h2(e),0,[0],e))}function pf(e,t,n,i,a,l,u,f,h){for(var p=0,g=0,y=u,v=0,S=0,w=0,D=1,C=1,I=1,k=0,x="",A=a,N=l,T=i,P=x;C;)switch(w=k,k=lr()){case 40:if(w!=108&&qt(P,y-1)==58){ff(P+=$e(yg(k),"&","&\f"),"&\f",tC(p?f[p-1]:0))!=-1&&(I=-1);break}case 34:case 39:case 91:P+=yg(k);break;case 9:case 10:case 13:case 32:P+=m2(w);break;case 92:P+=g2(hf()-1,7);continue;case 47:switch(ia()){case 42:case 47:mc(b2(y2(lr(),hf()),t,n,h),h);break;default:P+="/"}break;case 123*D:f[p++]=Rr(P)*I;case 125*D:case 59:case 0:switch(k){case 0:case 125:C=0;case 59+g:I==-1&&(P=$e(P,/\f/g,"")),S>0&&Rr(P)-y&&mc(S>32?hw(P+";",i,n,y-1,h):hw($e(P," ","")+";",i,n,y-2,h),h);break;case 59:P+=";";default:if(mc(T=fw(P,t,n,p,g,a,f,x,A=[],N=[],y,l),l),k===123)if(g===0)pf(P,t,T,T,A,l,y,f,N);else switch(v===99&&qt(P,3)===110?100:v){case 100:case 108:case 109:case 115:pf(e,T,T,i&&mc(fw(e,T,T,0,0,a,f,x,a,A=[],y,N),N),a,N,y,f,i?A:N);break;default:pf(P,T,T,T,[""],N,0,f,N)}}p=g=S=0,D=I=1,x=P="",y=u;break;case 58:y=1+Rr(P),S=w;default:if(D<1){if(k==123)--D;else if(k==125&&D++==0&&f2()==125)continue}switch(P+=Ev(k),k*D){case 38:I=g>0?1:(P+="\f",-1);break;case 44:f[p++]=(Rr(P)-1)*I,I=1;break;case 64:ia()===45&&(P+=yg(lr())),v=ia(),g=y=Rr(x=P+=v2(hf())),k++;break;case 45:w===45&&Rr(P)==2&&(D=0)}}return l}function fw(e,t,n,i,a,l,u,f,h,p,g,y){for(var v=a-1,S=a===0?l:[""],w=rC(S),D=0,C=0,I=0;D<i;++D)for(var k=0,x=Io(e,v+1,v=tC(C=u[D])),A=e;k<w;++k)(A=nC(C>0?S[k]+" "+x:$e(x,/&\f/g,S[k])))&&(h[I++]=A);return wh(e,t,n,a===0?bh:f,h,p,g,y)}function b2(e,t,n,i){return wh(e,t,n,JT,Ev(d2()),Io(e,2,-2),0,i)}function hw(e,t,n,i,a){return wh(e,t,n,wv,Io(e,0,i),Io(e,i+1,-1),i,a)}function sC(e,t,n){switch(c2(e,t)){case 5103:return et+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return et+e+e;case 4789:return bc+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return et+e+bc+e+mt+e+e;case 5936:switch(qt(e,t+11)){case 114:return et+e+mt+$e(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return et+e+mt+$e(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return et+e+mt+$e(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return et+e+mt+e+e;case 6165:return et+e+mt+"flex-"+e+e;case 5187:return et+e+$e(e,/(\w+).+(:[^]+)/,et+"box-$1$2"+mt+"flex-$1$2")+e;case 5443:return et+e+mt+"flex-item-"+$e(e,/flex-|-self/g,"")+(ri(e,/flex-|baseline/)?"":mt+"grid-row-"+$e(e,/flex-|-self/g,""))+e;case 4675:return et+e+mt+"flex-line-pack"+$e(e,/align-content|flex-|-self/g,"")+e;case 5548:return et+e+mt+$e(e,"shrink","negative")+e;case 5292:return et+e+mt+$e(e,"basis","preferred-size")+e;case 6060:return et+"box-"+$e(e,"-grow","")+et+e+mt+$e(e,"grow","positive")+e;case 4554:return et+$e(e,/([^-])(transform)/g,"$1"+et+"$2")+e;case 6187:return $e($e($e(e,/(zoom-|grab)/,et+"$1"),/(image-set)/,et+"$1"),e,"")+e;case 5495:case 3959:return $e(e,/(image-set\([^]*)/,et+"$1$`$1");case 4968:return $e($e(e,/(.+:)(flex-)?(.*)/,et+"box-pack:$3"+mt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+et+e+e;case 4200:if(!ri(e,/flex-|baseline/))return mt+"grid-column-align"+Io(e,t)+e;break;case 2592:case 3360:return mt+$e(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(i,a){return t=a,ri(i.props,/grid-\w+-end/)})?~ff(e+(n=n[t].value),"span",0)?e:mt+$e(e,"-start","")+e+mt+"grid-row-span:"+(~ff(n,"span",0)?ri(n,/\d+/):+ri(n,/\d+/)-+ri(e,/\d+/))+";":mt+$e(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(i){return ri(i.props,/grid-\w+-start/)})?e:mt+$e($e(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return $e(e,/(.+)-inline(.+)/,et+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Rr(e)-1-t>6)switch(qt(e,t+1)){case 109:if(qt(e,t+4)!==45)break;case 102:return $e(e,/(.+:)(.+)-([^]+)/,"$1"+et+"$2-$3$1"+bc+(qt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ff(e,"stretch",0)?sC($e(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return $e(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,a,l,u,f,h,p){return mt+a+":"+l+p+(u?mt+a+"-span:"+(f?h:+h-+l)+p:"")+e});case 4949:if(qt(e,t+6)===121)return $e(e,":",":"+et)+e;break;case 6444:switch(qt(e,qt(e,14)===45?18:11)){case 120:return $e(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+et+(qt(e,14)===45?"inline-":"")+"box$3$1"+et+"$2$3$1"+mt+"$2box$3")+e;case 100:return $e(e,":",":"+mt)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return $e(e,"scroll-","scroll-snap-")+e}return e}function If(e,t){for(var n="",i=0;i<e.length;i++)n+=t(e[i],i,e,t)||"";return n}function S2(e,t,n,i){switch(e.type){case l2:if(e.children.length)break;case o2:case wv:return e.return=e.return||e.value;case JT:return"";case eC:return e.return=e.value+"{"+If(e.children,i)+"}";case bh:if(!Rr(e.value=e.props.join(",")))return""}return Rr(n=If(e.children,i))?e.return=e.value+"{"+n+"}":""}function w2(e){var t=rC(e);return function(n,i,a,l){for(var u="",f=0;f<t;f++)u+=e[f](n,i,a,l)||"";return u}}function E2(e){return function(t){t.root||(t=t.return)&&e(t)}}function x2(e,t,n,i){if(e.length>-1&&!e.return)switch(e.type){case wv:e.return=sC(e.value,e.length,n);return;case eC:return If([Ki(e,{value:$e(e.value,"@","@"+et)})],i);case bh:if(e.length)return u2(n=e.props,function(a){switch(ri(a,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":fo(Ki(e,{props:[$e(a,/:(read-\w+)/,":"+bc+"$1")]})),fo(Ki(e,{props:[a]})),gy(e,{props:dw(n,i)});break;case"::placeholder":fo(Ki(e,{props:[$e(a,/:(plac\w+)/,":"+et+"input-$1")]})),fo(Ki(e,{props:[$e(a,/:(plac\w+)/,":"+bc+"$1")]})),fo(Ki(e,{props:[$e(a,/:(plac\w+)/,mt+"input-$1")]})),fo(Ki(e,{props:[a]})),gy(e,{props:dw(n,i)});break}return""})}}var T2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Dn={},Oo=typeof process<"u"&&Dn!==void 0&&(Dn.REACT_APP_SC_ATTR||Dn.SC_ATTR)||"data-styled",aC="active",oC="data-styled-version",xh="6.1.19",xv=`/*!sc*/
`,Df=typeof window<"u"&&typeof document<"u",C2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Dn!==void 0&&Dn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Dn.REACT_APP_SC_DISABLE_SPEEDY!==""?Dn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Dn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Dn!==void 0&&Dn.SC_DISABLE_SPEEDY!==void 0&&Dn.SC_DISABLE_SPEEDY!==""&&Dn.SC_DISABLE_SPEEDY!=="false"&&Dn.SC_DISABLE_SPEEDY),Th=Object.freeze([]),No=Object.freeze({});function R2(e,t,n){return n===void 0&&(n=No),e.theme!==n.theme&&e.theme||t||n.theme}var lC=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),A2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,I2=/(^-|-$)/g;function pw(e){return e.replace(A2,"-").replace(I2,"")}var D2=/(a)(d)/gi,Hd=52,mw=function(e){return String.fromCharCode(e+(e>25?39:97))};function _y(e){var t,n="";for(t=Math.abs(e);t>Hd;t=t/Hd|0)n=mw(t%Hd)+n;return(mw(t%Hd)+n).replace(D2,"$1-$2")}var vg,cC=5381,vo=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},uC=function(e){return vo(cC,e)};function O2(e){return _y(uC(e)>>>0)}function N2(e){return e.displayName||e.name||"Component"}function _g(e){return typeof e=="string"&&!0}var dC=typeof Symbol=="function"&&Symbol.for,fC=dC?Symbol.for("react.memo"):60115,M2=dC?Symbol.for("react.forward_ref"):60112,k2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},L2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},hC={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},P2=((vg={})[M2]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},vg[fC]=hC,vg);function gw(e){return("type"in(t=e)&&t.type.$$typeof)===fC?hC:"$$typeof"in e?P2[e.$$typeof]:k2;var t}var j2=Object.defineProperty,U2=Object.getOwnPropertyNames,yw=Object.getOwnPropertySymbols,z2=Object.getOwnPropertyDescriptor,$2=Object.getPrototypeOf,vw=Object.prototype;function pC(e,t,n){if(typeof t!="string"){if(vw){var i=$2(t);i&&i!==vw&&pC(e,i,n)}var a=U2(t);yw&&(a=a.concat(yw(t)));for(var l=gw(e),u=gw(t),f=0;f<a.length;++f){var h=a[f];if(!(h in L2||n&&n[h]||u&&h in u||l&&h in l)){var p=z2(t,h);try{j2(e,h,p)}catch{}}}}return e}function la(e){return typeof e=="function"}function Tv(e){return typeof e=="object"&&"styledComponentId"in e}function ea(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function _w(e,t){if(e.length===0)return"";for(var n=e[0],i=1;i<e.length;i++)n+=e[i];return n}function Pc(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function by(e,t,n){if(n===void 0&&(n=!1),!n&&!Pc(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var i=0;i<t.length;i++)e[i]=by(e[i],t[i]);else if(Pc(t))for(var i in t)e[i]=by(e[i],t[i]);return e}function Cv(e,t){Object.defineProperty(e,"toString",{value:t})}function ca(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var B2=(function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,i=0;i<t;i++)n+=this.groupSizes[i];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var i=this.groupSizes,a=i.length,l=a;t>=l;)if((l<<=1)<0)throw ca(16,"".concat(t));this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var u=a;u<l;u++)this.groupSizes[u]=0}for(var f=this.indexOfGroup(t+1),h=(u=0,n.length);u<h;u++)this.tag.insertRule(f,n[u])&&(this.groupSizes[t]++,f++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],i=this.indexOfGroup(t),a=i+n;this.groupSizes[t]=0;for(var l=i;l<a;l++)this.tag.deleteRule(i)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var i=this.groupSizes[t],a=this.indexOfGroup(t),l=a+i,u=a;u<l;u++)n+="".concat(this.tag.getRule(u)).concat(xv);return n},e})(),mf=new Map,Of=new Map,gf=1,Fd=function(e){if(mf.has(e))return mf.get(e);for(;Of.has(gf);)gf++;var t=gf++;return mf.set(e,t),Of.set(t,e),t},H2=function(e,t){gf=t+1,mf.set(e,t),Of.set(t,e)},F2="style[".concat(Oo,"][").concat(oC,'="').concat(xh,'"]'),q2=new RegExp("^".concat(Oo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),V2=function(e,t,n){for(var i,a=n.split(","),l=0,u=a.length;l<u;l++)(i=a[l])&&e.registerName(t,i)},G2=function(e,t){for(var n,i=((n=t.textContent)!==null&&n!==void 0?n:"").split(xv),a=[],l=0,u=i.length;l<u;l++){var f=i[l].trim();if(f){var h=f.match(q2);if(h){var p=0|parseInt(h[1],10),g=h[2];p!==0&&(H2(g,p),V2(e,g,h[3]),e.getTag().insertRules(p,a)),a.length=0}else a.push(f)}}},bw=function(e){for(var t=document.querySelectorAll(F2),n=0,i=t.length;n<i;n++){var a=t[n];a&&a.getAttribute(Oo)!==aC&&(G2(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function Y2(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var mC=function(e){var t=document.head,n=e||t,i=document.createElement("style"),a=(function(f){var h=Array.from(f.querySelectorAll("style[".concat(Oo,"]")));return h[h.length-1]})(n),l=a!==void 0?a.nextSibling:null;i.setAttribute(Oo,aC),i.setAttribute(oC,xh);var u=Y2();return u&&i.setAttribute("nonce",u),n.insertBefore(i,l),i},Q2=(function(){function e(t){this.element=mC(t),this.element.appendChild(document.createTextNode("")),this.sheet=(function(n){if(n.sheet)return n.sheet;for(var i=document.styleSheets,a=0,l=i.length;a<l;a++){var u=i[a];if(u.ownerNode===n)return u}throw ca(17)})(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e})(),W2=(function(){function e(t){this.element=mC(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var i=document.createTextNode(n);return this.element.insertBefore(i,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e})(),K2=(function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e})(),Sw=Df,X2={isServer:!Df,useCSSOMInjection:!C2},gC=(function(){function e(t,n,i){t===void 0&&(t=No),n===void 0&&(n={});var a=this;this.options=sn(sn({},X2),t),this.gs=n,this.names=new Map(i),this.server=!!t.isServer,!this.server&&Df&&Sw&&(Sw=!1,bw(this)),Cv(this,function(){return(function(l){for(var u=l.getTag(),f=u.length,h="",p=function(y){var v=(function(I){return Of.get(I)})(y);if(v===void 0)return"continue";var S=l.names.get(v),w=u.getGroup(y);if(S===void 0||!S.size||w.length===0)return"continue";var D="".concat(Oo,".g").concat(y,'[id="').concat(v,'"]'),C="";S!==void 0&&S.forEach(function(I){I.length>0&&(C+="".concat(I,","))}),h+="".concat(w).concat(D,'{content:"').concat(C,'"}').concat(xv)},g=0;g<f;g++)p(g);return h})(a)})}return e.registerId=function(t){return Fd(t)},e.prototype.rehydrate=function(){!this.server&&Df&&bw(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(sn(sn({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=(function(n){var i=n.useCSSOMInjection,a=n.target;return n.isServer?new K2(a):i?new Q2(a):new W2(a)})(this.options),new B2(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Fd(t),this.names.has(t))this.names.get(t).add(n);else{var i=new Set;i.add(n),this.names.set(t,i)}},e.prototype.insertRules=function(t,n,i){this.registerName(t,n),this.getTag().insertRules(Fd(t),i)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Fd(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e})(),Z2=/&/g,J2=/^\s*\/\/.*$/gm;function yC(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(i){return"".concat(t," ").concat(i)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=yC(n.children,t)),n})}function eL(e){var t,n,i,a=No,l=a.options,u=l===void 0?No:l,f=a.plugins,h=f===void 0?Th:f,p=function(v,S,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):v},g=h.slice();g.push(function(v){v.type===bh&&v.value.includes("&")&&(v.props[0]=v.props[0].replace(Z2,n).replace(i,p))}),u.prefix&&g.push(x2),g.push(S2);var y=function(v,S,w,D){S===void 0&&(S=""),w===void 0&&(w=""),D===void 0&&(D="&"),t=D,n=S,i=new RegExp("\\".concat(n,"\\b"),"g");var C=v.replace(J2,""),I=_2(w||S?"".concat(w," ").concat(S," { ").concat(C," }"):C);u.namespace&&(I=yC(I,u.namespace));var k=[];return If(I,w2(g.concat(E2(function(x){return k.push(x)})))),k};return y.hash=h.length?h.reduce(function(v,S){return S.name||ca(15),vo(v,S.name)},cC).toString():"",y}var tL=new gC,Sy=eL(),vC=oa.createContext({shouldForwardProp:void 0,styleSheet:tL,stylis:Sy});vC.Consumer;oa.createContext(void 0);function ww(){return R.useContext(vC)}var nL=(function(){function e(t,n){var i=this;this.inject=function(a,l){l===void 0&&(l=Sy);var u=i.name+l.hash;a.hasNameForId(i.id,u)||a.insertRules(i.id,u,l(i.rules,u,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Cv(this,function(){throw ca(12,String(i.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Sy),this.name+t.hash},e})(),rL=function(e){return e>="A"&&e<="Z"};function Ew(e){for(var t="",n=0;n<e.length;n++){var i=e[n];if(n===1&&i==="-"&&e[0]==="-")return e;rL(i)?t+="-"+i.toLowerCase():t+=i}return t.startsWith("ms-")?"-"+t:t}var _C=function(e){return e==null||e===!1||e===""},bC=function(e){var t,n,i=[];for(var a in e){var l=e[a];e.hasOwnProperty(a)&&!_C(l)&&(Array.isArray(l)&&l.isCss||la(l)?i.push("".concat(Ew(a),":"),l,";"):Pc(l)?i.push.apply(i,Af(Af(["".concat(a," {")],bC(l),!1),["}"],!1)):i.push("".concat(Ew(a),": ").concat((t=a,(n=l)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in T2||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function sa(e,t,n,i){if(_C(e))return[];if(Tv(e))return[".".concat(e.styledComponentId)];if(la(e)){if(!la(l=e)||l.prototype&&l.prototype.isReactComponent||!t)return[e];var a=e(t);return sa(a,t,n,i)}var l;return e instanceof nL?n?(e.inject(n,i),[e.getName(i)]):[e]:Pc(e)?bC(e):Array.isArray(e)?Array.prototype.concat.apply(Th,e.map(function(u){return sa(u,t,n,i)})):[e.toString()]}function iL(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(la(n)&&!Tv(n))return!1}return!0}var sL=uC(xh),aL=(function(){function e(t,n,i){this.rules=t,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&iL(t),this.componentId=n,this.baseHash=vo(sL,n),this.baseStyle=i,gC.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,i){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))a=ea(a,this.staticRulesId);else{var l=_w(sa(this.rules,t,n,i)),u=_y(vo(this.baseHash,l)>>>0);if(!n.hasNameForId(this.componentId,u)){var f=i(l,".".concat(u),void 0,this.componentId);n.insertRules(this.componentId,u,f)}a=ea(a,u),this.staticRulesId=u}else{for(var h=vo(this.baseHash,i.hash),p="",g=0;g<this.rules.length;g++){var y=this.rules[g];if(typeof y=="string")p+=y;else if(y){var v=_w(sa(y,t,n,i));h=vo(h,v+g),p+=v}}if(p){var S=_y(h>>>0);n.hasNameForId(this.componentId,S)||n.insertRules(this.componentId,S,i(p,".".concat(S),void 0,this.componentId)),a=ea(a,S)}}return a},e})(),Nf=oa.createContext(void 0);Nf.Consumer;function oL(e){var t=oa.useContext(Nf),n=R.useMemo(function(){return(function(i,a){if(!i)throw ca(14);if(la(i)){var l=i(a);return l}if(Array.isArray(i)||typeof i!="object")throw ca(8);return a?sn(sn({},a),i):i})(e.theme,t)},[e.theme,t]);return e.children?oa.createElement(Nf.Provider,{value:n},e.children):null}var bg={};function lL(e,t,n){var i=Tv(e),a=e,l=!_g(e),u=t.attrs,f=u===void 0?Th:u,h=t.componentId,p=h===void 0?(function(A,N){var T=typeof A!="string"?"sc":pw(A);bg[T]=(bg[T]||0)+1;var P="".concat(T,"-").concat(O2(xh+T+bg[T]));return N?"".concat(N,"-").concat(P):P})(t.displayName,t.parentComponentId):h,g=t.displayName,y=g===void 0?(function(A){return _g(A)?"styled.".concat(A):"Styled(".concat(N2(A),")")})(e):g,v=t.displayName&&t.componentId?"".concat(pw(t.displayName),"-").concat(t.componentId):t.componentId||p,S=i&&a.attrs?a.attrs.concat(f).filter(Boolean):f,w=t.shouldForwardProp;if(i&&a.shouldForwardProp){var D=a.shouldForwardProp;if(t.shouldForwardProp){var C=t.shouldForwardProp;w=function(A,N){return D(A,N)&&C(A,N)}}else w=D}var I=new aL(n,v,i?a.componentStyle:void 0);function k(A,N){return(function(T,P,V){var H=T.attrs,B=T.componentStyle,$=T.defaultProps,G=T.foldedComponentIds,F=T.styledComponentId,K=T.target,ue=oa.useContext(Nf),U=ww(),ee=T.shouldForwardProp||U.shouldForwardProp,ne=R2(P,ue,$)||No,oe=(function(me,pe,Ae){for(var be,De=sn(sn({},pe),{className:void 0,theme:Ae}),Ue=0;Ue<me.length;Ue+=1){var _t=la(be=me[Ue])?be(De):be;for(var gt in _t)De[gt]=gt==="className"?ea(De[gt],_t[gt]):gt==="style"?sn(sn({},De[gt]),_t[gt]):_t[gt]}return pe.className&&(De.className=ea(De.className,pe.className)),De})(H,P,ne),O=oe.as||K,X={};for(var le in oe)oe[le]===void 0||le[0]==="$"||le==="as"||le==="theme"&&oe.theme===ne||(le==="forwardedAs"?X.as=oe.forwardedAs:ee&&!ee(le,O)||(X[le]=oe[le]));var ie=(function(me,pe){var Ae=ww(),be=me.generateAndInjectStyles(pe,Ae.styleSheet,Ae.stylis);return be})(B,oe),de=ea(G,F);return ie&&(de+=" "+ie),oe.className&&(de+=" "+oe.className),X[_g(O)&&!lC.has(O)?"class":"className"]=de,V&&(X.ref=V),R.createElement(O,X)})(x,A,N)}k.displayName=y;var x=oa.forwardRef(k);return x.attrs=S,x.componentStyle=I,x.displayName=y,x.shouldForwardProp=w,x.foldedComponentIds=i?ea(a.foldedComponentIds,a.styledComponentId):"",x.styledComponentId=v,x.target=i?a.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(A){this._foldedDefaultProps=i?(function(N){for(var T=[],P=1;P<arguments.length;P++)T[P-1]=arguments[P];for(var V=0,H=T;V<H.length;V++)by(N,H[V],!0);return N})({},a.defaultProps,A):A}}),Cv(x,function(){return".".concat(x.styledComponentId)}),l&&pC(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function xw(e,t){for(var n=[e[0]],i=0,a=t.length;i<a;i+=1)n.push(t[i],e[i+1]);return n}var Tw=function(e){return Object.assign(e,{isCss:!0})};function on(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(la(e)||Pc(e))return Tw(sa(xw(Th,Af([e],t,!0))));var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?sa(i):Tw(sa(xw(i,t)))}function wy(e,t,n){if(n===void 0&&(n=No),!t)throw ca(1,t);var i=function(a){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];return e(t,n,on.apply(void 0,Af([a],l,!1)))};return i.attrs=function(a){return wy(e,t,sn(sn({},n),{attrs:Array.prototype.concat(n.attrs,a).filter(Boolean)}))},i.withConfig=function(a){return wy(e,t,sn(sn({},n),a))},i}var SC=function(e){return wy(lL,e)},M=SC;lC.forEach(function(e){M[e]=SC(e)});const wo=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__,cs=globalThis,Sc="10.11.0";function wC(){return Rv(cs),cs}function Rv(e){const t=e.__SENTRY__=e.__SENTRY__||{};return t.version=t.version||Sc,t[Sc]=t[Sc]||{}}function Av(e,t,n=cs){const i=n.__SENTRY__=n.__SENTRY__||{},a=i[Sc]=i[Sc]||{};return a[e]||(a[e]=t())}const cL="Sentry Logger ",Cw={};function uL(e){if(!("console"in cs))return e();const t=cs.console,n={},i=Object.keys(Cw);i.forEach(a=>{const l=Cw[a];n[a]=t[a],t[a]=l});try{return e()}finally{i.forEach(a=>{t[a]=n[a]})}}function dL(){Dv().enabled=!0}function fL(){Dv().enabled=!1}function EC(){return Dv().enabled}function hL(...e){Iv("log",...e)}function pL(...e){Iv("warn",...e)}function mL(...e){Iv("error",...e)}function Iv(e,...t){wo&&EC()&&uL(()=>{cs.console[e](`${cL}[${e}]:`,...t)})}function Dv(){return wo?Av("loggerSettings",()=>({enabled:!1})):{enabled:!1}}const yf={enable:dL,disable:fL,isEnabled:EC,log:hL,warn:pL,error:mL},gL=Object.prototype.toString;function yL(e,t){return gL.call(e)===`[object ${t}]`}function vL(e){return yL(e,"Object")}function _L(e){return!!(e?.then&&typeof e.then=="function")}function bL(e,t=0){return typeof e!="string"||t===0||e.length<=t?e:`${e.slice(0,t)}...`}function SL(e,t,n){try{Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0})}catch{wo&&yf.log(`Failed to add non-enumerable property "${t}" to object`,e)}}function wL(){const e=cs;return e.crypto||e.msCrypto}function wc(e=wL()){let t=()=>Math.random()*16;try{if(e?.randomUUID)return e.randomUUID().replace(/-/g,"");e?.getRandomValues&&(t=()=>{const n=new Uint8Array(1);return e.getRandomValues(n),n[0]})}catch{}return("10000000100040008000"+1e11).replace(/[018]/g,n=>(n^(t()&15)>>n/4).toString(16))}const xC=1e3;function TC(){return Date.now()/xC}function EL(){const{performance:e}=cs;if(!e?.now||!e.timeOrigin)return TC;const t=e.timeOrigin;return()=>(t+e.now())/xC}let Rw;function xL(){return(Rw??(Rw=EL()))()}function TL(e,t={}){if(t.user&&(!e.ipAddress&&t.user.ip_address&&(e.ipAddress=t.user.ip_address),!e.did&&!t.did&&(e.did=t.user.id||t.user.email||t.user.username)),e.timestamp=t.timestamp||xL(),t.abnormal_mechanism&&(e.abnormal_mechanism=t.abnormal_mechanism),t.ignoreDuration&&(e.ignoreDuration=t.ignoreDuration),t.sid&&(e.sid=t.sid.length===32?t.sid:wc()),t.init!==void 0&&(e.init=t.init),!e.did&&t.did&&(e.did=`${t.did}`),typeof t.started=="number"&&(e.started=t.started),e.ignoreDuration)e.duration=void 0;else if(typeof t.duration=="number")e.duration=t.duration;else{const n=e.timestamp-e.started;e.duration=n>=0?n:0}t.release&&(e.release=t.release),t.environment&&(e.environment=t.environment),!e.ipAddress&&t.ipAddress&&(e.ipAddress=t.ipAddress),!e.userAgent&&t.userAgent&&(e.userAgent=t.userAgent),typeof t.errors=="number"&&(e.errors=t.errors),t.status&&(e.status=t.status)}function CC(e,t,n=2){if(!t||typeof t!="object"||n<=0)return t;if(e&&Object.keys(t).length===0)return e;const i={...e};for(const a in t)Object.prototype.hasOwnProperty.call(t,a)&&(i[a]=CC(i[a],t[a],n-1));return i}function Aw(){return wc()}const Ey="_sentrySpan";function Iw(e,t){t?SL(e,Ey,t):delete e[Ey]}function Dw(e){return e[Ey]}const CL=100;class ua{constructor(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._attachments=[],this._user={},this._tags={},this._extra={},this._contexts={},this._sdkProcessingMetadata={},this._propagationContext={traceId:Aw(),sampleRand:Math.random()}}clone(){const t=new ua;return t._breadcrumbs=[...this._breadcrumbs],t._tags={...this._tags},t._extra={...this._extra},t._contexts={...this._contexts},this._contexts.flags&&(t._contexts.flags={values:[...this._contexts.flags.values]}),t._user=this._user,t._level=this._level,t._session=this._session,t._transactionName=this._transactionName,t._fingerprint=this._fingerprint,t._eventProcessors=[...this._eventProcessors],t._attachments=[...this._attachments],t._sdkProcessingMetadata={...this._sdkProcessingMetadata},t._propagationContext={...this._propagationContext},t._client=this._client,t._lastEventId=this._lastEventId,Iw(t,Dw(this)),t}setClient(t){this._client=t}setLastEventId(t){this._lastEventId=t}getClient(){return this._client}lastEventId(){return this._lastEventId}addScopeListener(t){this._scopeListeners.push(t)}addEventProcessor(t){return this._eventProcessors.push(t),this}setUser(t){return this._user=t||{email:void 0,id:void 0,ip_address:void 0,username:void 0},this._session&&TL(this._session,{user:t}),this._notifyScopeListeners(),this}getUser(){return this._user}setTags(t){return this._tags={...this._tags,...t},this._notifyScopeListeners(),this}setTag(t,n){return this._tags={...this._tags,[t]:n},this._notifyScopeListeners(),this}setExtras(t){return this._extra={...this._extra,...t},this._notifyScopeListeners(),this}setExtra(t,n){return this._extra={...this._extra,[t]:n},this._notifyScopeListeners(),this}setFingerprint(t){return this._fingerprint=t,this._notifyScopeListeners(),this}setLevel(t){return this._level=t,this._notifyScopeListeners(),this}setTransactionName(t){return this._transactionName=t,this._notifyScopeListeners(),this}setContext(t,n){return n===null?delete this._contexts[t]:this._contexts[t]=n,this._notifyScopeListeners(),this}setSession(t){return t?this._session=t:delete this._session,this._notifyScopeListeners(),this}getSession(){return this._session}update(t){if(!t)return this;const n=typeof t=="function"?t(this):t,i=n instanceof ua?n.getScopeData():vL(n)?t:void 0,{tags:a,extra:l,user:u,contexts:f,level:h,fingerprint:p=[],propagationContext:g}=i||{};return this._tags={...this._tags,...a},this._extra={...this._extra,...l},this._contexts={...this._contexts,...f},u&&Object.keys(u).length&&(this._user=u),h&&(this._level=h),p.length&&(this._fingerprint=p),g&&(this._propagationContext=g),this}clear(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._session=void 0,Iw(this,void 0),this._attachments=[],this.setPropagationContext({traceId:Aw(),sampleRand:Math.random()}),this._notifyScopeListeners(),this}addBreadcrumb(t,n){const i=typeof n=="number"?n:CL;if(i<=0)return this;const a={timestamp:TC(),...t,message:t.message?bL(t.message,2048):t.message};return this._breadcrumbs.push(a),this._breadcrumbs.length>i&&(this._breadcrumbs=this._breadcrumbs.slice(-i),this._client?.recordDroppedEvent("buffer_overflow","log_item")),this._notifyScopeListeners(),this}getLastBreadcrumb(){return this._breadcrumbs[this._breadcrumbs.length-1]}clearBreadcrumbs(){return this._breadcrumbs=[],this._notifyScopeListeners(),this}addAttachment(t){return this._attachments.push(t),this}clearAttachments(){return this._attachments=[],this}getScopeData(){return{breadcrumbs:this._breadcrumbs,attachments:this._attachments,contexts:this._contexts,tags:this._tags,extra:this._extra,user:this._user,level:this._level,fingerprint:this._fingerprint||[],eventProcessors:this._eventProcessors,propagationContext:this._propagationContext,sdkProcessingMetadata:this._sdkProcessingMetadata,transactionName:this._transactionName,span:Dw(this)}}setSDKProcessingMetadata(t){return this._sdkProcessingMetadata=CC(this._sdkProcessingMetadata,t,2),this}setPropagationContext(t){return this._propagationContext=t,this}getPropagationContext(){return this._propagationContext}captureException(t,n){const i=n?.event_id||wc();if(!this._client)return wo&&yf.warn("No client configured on scope - will not capture exception!"),i;const a=new Error("Sentry syntheticException");return this._client.captureException(t,{originalException:t,syntheticException:a,...n,event_id:i},this),i}captureMessage(t,n,i){const a=i?.event_id||wc();if(!this._client)return wo&&yf.warn("No client configured on scope - will not capture message!"),a;const l=new Error(t);return this._client.captureMessage(t,n,{originalException:t,syntheticException:l,...i,event_id:a},this),a}captureEvent(t,n){const i=n?.event_id||wc();return this._client?(this._client.captureEvent(t,{...n,event_id:i},this),i):(wo&&yf.warn("No client configured on scope - will not capture event!"),i)}_notifyScopeListeners(){this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach(t=>{t(this)}),this._notifyingListeners=!1)}}function RL(){return Av("defaultCurrentScope",()=>new ua)}function AL(){return Av("defaultIsolationScope",()=>new ua)}class IL{constructor(t,n){let i;t?i=t:i=new ua;let a;n?a=n:a=new ua,this._stack=[{scope:i}],this._isolationScope=a}withScope(t){const n=this._pushScope();let i;try{i=t(n)}catch(a){throw this._popScope(),a}return _L(i)?i.then(a=>(this._popScope(),a),a=>{throw this._popScope(),a}):(this._popScope(),i)}getClient(){return this.getStackTop().client}getScope(){return this.getStackTop().scope}getIsolationScope(){return this._isolationScope}getStackTop(){return this._stack[this._stack.length-1]}_pushScope(){const t=this.getScope().clone();return this._stack.push({client:this.getClient(),scope:t}),t}_popScope(){return this._stack.length<=1?!1:!!this._stack.pop()}}function Mo(){const e=wC(),t=Rv(e);return t.stack=t.stack||new IL(RL(),AL())}function DL(e){return Mo().withScope(e)}function OL(e,t){const n=Mo();return n.withScope(()=>(n.getStackTop().scope=e,t(e)))}function Ow(e){return Mo().withScope(()=>e(Mo().getIsolationScope()))}function NL(){return{withIsolationScope:Ow,withScope:DL,withSetScope:OL,withSetIsolationScope:(e,t)=>Ow(t),getCurrentScope:()=>Mo().getScope(),getIsolationScope:()=>Mo().getIsolationScope()}}function ML(e){const t=Rv(e);return t.acs?t.acs:NL()}function RC(){const e=wC();return ML(e).getCurrentScope()}function Or(e,t){return RC().captureException(e,void 0)}function Ov(e,t){const n=typeof t=="string"?t:void 0,i=typeof t!="string"?{captureContext:t}:void 0;return RC().captureMessage(e,n,i)}const kL=()=>{};var Nw={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AC={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he=function(e,t){if(!e)throw qo(t)},qo=function(e){return new Error("Firebase Database ("+AC.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let a=e.charCodeAt(i);a<128?t[n++]=a:a<2048?(t[n++]=a>>6|192,t[n++]=a&63|128):(a&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(a=65536+((a&1023)<<10)+(e.charCodeAt(++i)&1023),t[n++]=a>>18|240,t[n++]=a>>12&63|128,t[n++]=a>>6&63|128,t[n++]=a&63|128):(t[n++]=a>>12|224,t[n++]=a>>6&63|128,t[n++]=a&63|128)}return t},LL=function(e){const t=[];let n=0,i=0;for(;n<e.length;){const a=e[n++];if(a<128)t[i++]=String.fromCharCode(a);else if(a>191&&a<224){const l=e[n++];t[i++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=e[n++],u=e[n++],f=e[n++],h=((a&7)<<18|(l&63)<<12|(u&63)<<6|f&63)-65536;t[i++]=String.fromCharCode(55296+(h>>10)),t[i++]=String.fromCharCode(56320+(h&1023))}else{const l=e[n++],u=e[n++];t[i++]=String.fromCharCode((a&15)<<12|(l&63)<<6|u&63)}}return t.join("")},Nv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let a=0;a<e.length;a+=3){const l=e[a],u=a+1<e.length,f=u?e[a+1]:0,h=a+2<e.length,p=h?e[a+2]:0,g=l>>2,y=(l&3)<<4|f>>4;let v=(f&15)<<2|p>>6,S=p&63;h||(S=64,u||(v=64)),i.push(n[g],n[y],n[v],n[S])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(IC(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):LL(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let a=0;a<e.length;){const l=n[e.charAt(a++)],f=a<e.length?n[e.charAt(a)]:0;++a;const p=a<e.length?n[e.charAt(a)]:64;++a;const y=a<e.length?n[e.charAt(a)]:64;if(++a,l==null||f==null||p==null||y==null)throw new PL;const v=l<<2|f>>4;if(i.push(v),p!==64){const S=f<<4&240|p>>2;if(i.push(S),y!==64){const w=p<<6&192|y;i.push(w)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class PL extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const DC=function(e){const t=IC(e);return Nv.encodeByteArray(t,!0)},Mf=function(e){return DC(e).replace(/\./g,"")},kf=function(e){try{return Nv.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jL(e){return OC(void 0,e)}function OC(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)!t.hasOwnProperty(n)||!UL(n)||(e[n]=OC(e[n],t[n]));return e}function UL(e){return e!=="__proto__"}/**
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
 */function zL(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $L=()=>zL().__FIREBASE_DEFAULTS__,BL=()=>{if(typeof process>"u"||typeof Nw>"u")return;const e=Nw.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},HL=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&kf(e[1]);return t&&JSON.parse(t)},Mv=()=>{try{return kL()||$L()||BL()||HL()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},NC=e=>Mv()?.emulatorHosts?.[e],FL=e=>{const t=NC(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),i]:[t.substring(0,n),i]},MC=()=>Mv()?.config,kC=e=>Mv()?.[`_${e}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,i))}}}/**
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
 */function Vo(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function LC(e){return(await fetch(e,{credentials:"include"})).ok}/**
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
 */function qL(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",a=e.iat||0,l=e.sub||e.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u={iss:`https://securetoken.google.com/${i}`,aud:i,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...e};return[Mf(JSON.stringify(n)),Mf(JSON.stringify(u)),""].join(".")}const Ec={};function VL(){const e={prod:[],emulator:[]};for(const t of Object.keys(Ec))Ec[t]?e.emulator.push(t):e.prod.push(t);return e}function GL(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}let Mw=!1;function PC(e,t){if(typeof window>"u"||typeof document>"u"||!Vo(window.location.host)||Ec[e]===t||Ec[e]||Mw)return;Ec[e]=t;function n(v){return`__firebase__banner__${v}`}const i="__firebase__banner",l=VL().prod.length>0;function u(){const v=document.getElementById(i);v&&v.remove()}function f(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function h(v,S){v.setAttribute("width","24"),v.setAttribute("id",S),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function p(){const v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{Mw=!0,u()},v}function g(v,S){v.setAttribute("id",S),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function y(){const v=GL(i),S=n("text"),w=document.getElementById(S)||document.createElement("span"),D=n("learnmore"),C=document.getElementById(D)||document.createElement("a"),I=n("preprendIcon"),k=document.getElementById(I)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){const x=v.element;f(x),g(C,D);const A=p();h(k,I),x.append(k,w,C,A),document.body.appendChild(x)}l?(w.innerText="Preview backend disconnected.",k.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function fn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fn())}function YL(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function QL(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function jC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function WL(){const e=fn();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function KL(){return AC.NODE_ADMIN===!0}function UC(){try{return typeof indexedDB=="object"}catch{return!1}}function zC(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(i);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{t(a.error?.message||"")}}catch(n){t(n)}})}function XL(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZL="FirebaseError";class _i extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name=ZL,Object.setPrototypeOf(this,_i.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wa.prototype.create)}}class wa{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},a=`${this.service}/${t}`,l=this.errors[t],u=l?JL(l,i):"Error",f=`${this.serviceName}: ${u} (${a}).`;return new _i(a,f,i)}}function JL(e,t){return e.replace(eP,(n,i)=>{const a=t[i];return a!=null?String(a):`<${i}?>`})}const eP=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(e){return JSON.parse(e)}function zt(e){return JSON.stringify(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $C=function(e){let t={},n={},i={},a="";try{const l=e.split(".");t=jc(kf(l[0])||""),n=jc(kf(l[1])||""),a=l[2],i=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:i,signature:a}},tP=function(e){const t=$C(e),n=t.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},nP=function(e){const t=$C(e).claims;return typeof t=="object"&&t.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ko(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function xy(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Lf(e,t,n){const i={};for(const a in e)Object.prototype.hasOwnProperty.call(e,a)&&(i[a]=t.call(n,e[a],a,e));return i}function da(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const a of n){if(!i.includes(a))return!1;const l=e[a],u=t[a];if(kw(l)&&kw(u)){if(!da(l,u))return!1}else if(l!==u)return!1}for(const a of i)if(!n.includes(a))return!1;return!0}function kw(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(a=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(a))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function gc(e){const t={};return e.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[a,l]=i.split("=");t[decodeURIComponent(a)]=decodeURIComponent(l)}}),t}function yc(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,n){n||(n=0);const i=this.W_;if(typeof t=="string")for(let y=0;y<16;y++)i[y]=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),n+=4;else for(let y=0;y<16;y++)i[y]=t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3],n+=4;for(let y=16;y<80;y++){const v=i[y-3]^i[y-8]^i[y-14]^i[y-16];i[y]=(v<<1|v>>>31)&4294967295}let a=this.chain_[0],l=this.chain_[1],u=this.chain_[2],f=this.chain_[3],h=this.chain_[4],p,g;for(let y=0;y<80;y++){y<40?y<20?(p=f^l&(u^f),g=1518500249):(p=l^u^f,g=1859775393):y<60?(p=l&u|f&(l|u),g=2400959708):(p=l^u^f,g=3395469782);const v=(a<<5|a>>>27)+p+h+g+i[y]&4294967295;h=f,f=u,u=(l<<30|l>>>2)&4294967295,l=a,a=v}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295}update(t,n){if(t==null)return;n===void 0&&(n=t.length);const i=n-this.blockSize;let a=0;const l=this.buf_;let u=this.inbuf_;for(;a<n;){if(u===0)for(;a<=i;)this.compress_(t,a),a+=this.blockSize;if(typeof t=="string"){for(;a<n;)if(l[u]=t.charCodeAt(a),++u,++a,u===this.blockSize){this.compress_(l),u=0;break}}else for(;a<n;)if(l[u]=t[a],++u,++a,u===this.blockSize){this.compress_(l),u=0;break}}this.inbuf_=u,this.total_+=n}digest(){const t=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let a=0;a<5;a++)for(let l=24;l>=0;l-=8)t[i]=this.chain_[a]>>l&255,++i;return t}}function iP(e,t){const n=new sP(e,t);return n.subscribe.bind(n)}class sP{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,i){let a;if(t===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");aP(t,["next","error","complete"])?a=t:a={next:t,error:n,complete:i},a.next===void 0&&(a.next=Sg),a.error===void 0&&(a.error=Sg),a.complete===void 0&&(a.complete=Sg);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function aP(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Sg(){}function Ch(e,t){return`${e} failed: ${t} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oP=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let a=e.charCodeAt(i);if(a>=55296&&a<=56319){const l=a-55296;i++,he(i<e.length,"Surrogate pair missing trail surrogate.");const u=e.charCodeAt(i)-56320;a=65536+(l<<10)+u}a<128?t[n++]=a:a<2048?(t[n++]=a>>6|192,t[n++]=a&63|128):a<65536?(t[n++]=a>>12|224,t[n++]=a>>6&63|128,t[n++]=a&63|128):(t[n++]=a>>18|240,t[n++]=a>>12&63|128,t[n++]=a>>6&63|128,t[n++]=a&63|128)}return t},Rh=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};/**
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
 */function Gt(e){return e&&e._delegate?e._delegate:e}class hr{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const i=new lu;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:n});a&&i.resolve(a)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t?.identifier),i=t?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(uP(t))try{this.getOrInitializeService({instanceIdentifier:Ks})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(n);try{const l=this.getOrInitializeService({instanceIdentifier:a});i.resolve(l)}catch{}}}}clearInstance(t=Ks){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ks){return this.instances.has(t)}getOptions(t=Ks){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[l,u]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&u.resolve(a)}return a}onInit(t,n){const i=this.normalizeInstanceIdentifier(n),a=this.onInitCallbacks.get(i)??new Set;a.add(t),this.onInitCallbacks.set(i,a);const l=this.instances.get(i);return l&&t(l,i),()=>{a.delete(t)}}invokeOnInitCallbacks(t,n){const i=this.onInitCallbacks.get(n);if(i)for(const a of i)try{a(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:cP(t),options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=Ks){return this.component?this.component.multipleInstances?t:Ks:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cP(e){return e===Ks?void 0:e}function uP(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new lP(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lt;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(lt||(lt={}));const fP={debug:lt.DEBUG,verbose:lt.VERBOSE,info:lt.INFO,warn:lt.WARN,error:lt.ERROR,silent:lt.SILENT},hP=lt.INFO,pP={[lt.DEBUG]:"log",[lt.VERBOSE]:"log",[lt.INFO]:"info",[lt.WARN]:"warn",[lt.ERROR]:"error"},mP=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),a=pP[t];if(a)console[a](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Lv{constructor(t){this.name=t,this._logLevel=hP,this._logHandler=mP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in lt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?fP[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,lt.DEBUG,...t),this._logHandler(this,lt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,lt.VERBOSE,...t),this._logHandler(this,lt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,lt.INFO,...t),this._logHandler(this,lt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,lt.WARN,...t),this._logHandler(this,lt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,lt.ERROR,...t),this._logHandler(this,lt.ERROR,...t)}}const gP=(e,t)=>t.some(n=>e instanceof n);let Lw,Pw;function yP(){return Lw||(Lw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vP(){return Pw||(Pw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const BC=new WeakMap,Ty=new WeakMap,HC=new WeakMap,wg=new WeakMap,Pv=new WeakMap;function _P(e){const t=new Promise((n,i)=>{const a=()=>{e.removeEventListener("success",l),e.removeEventListener("error",u)},l=()=>{n(ui(e.result)),a()},u=()=>{i(e.error),a()};e.addEventListener("success",l),e.addEventListener("error",u)});return t.then(n=>{n instanceof IDBCursor&&BC.set(n,e)}).catch(()=>{}),Pv.set(t,e),t}function bP(e){if(Ty.has(e))return;const t=new Promise((n,i)=>{const a=()=>{e.removeEventListener("complete",l),e.removeEventListener("error",u),e.removeEventListener("abort",u)},l=()=>{n(),a()},u=()=>{i(e.error||new DOMException("AbortError","AbortError")),a()};e.addEventListener("complete",l),e.addEventListener("error",u),e.addEventListener("abort",u)});Ty.set(e,t)}let Cy={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ty.get(e);if(t==="objectStoreNames")return e.objectStoreNames||HC.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ui(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function SP(e){Cy=e(Cy)}function wP(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const i=e.call(Eg(this),t,...n);return HC.set(i,t.sort?t.sort():[t]),ui(i)}:vP().includes(e)?function(...t){return e.apply(Eg(this),t),ui(BC.get(this))}:function(...t){return ui(e.apply(Eg(this),t))}}function EP(e){return typeof e=="function"?wP(e):(e instanceof IDBTransaction&&bP(e),gP(e,yP())?new Proxy(e,Cy):e)}function ui(e){if(e instanceof IDBRequest)return _P(e);if(wg.has(e))return wg.get(e);const t=EP(e);return t!==e&&(wg.set(e,t),Pv.set(t,e)),t}const Eg=e=>Pv.get(e);function Ah(e,t,{blocked:n,upgrade:i,blocking:a,terminated:l}={}){const u=indexedDB.open(e,t),f=ui(u);return i&&u.addEventListener("upgradeneeded",h=>{i(ui(u.result),h.oldVersion,h.newVersion,ui(u.transaction),h)}),n&&u.addEventListener("blocked",h=>n(h.oldVersion,h.newVersion,h)),f.then(h=>{l&&h.addEventListener("close",()=>l()),a&&h.addEventListener("versionchange",p=>a(p.oldVersion,p.newVersion,p))}).catch(()=>{}),f}function xg(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",i=>t(i.oldVersion,i)),ui(n).then(()=>{})}const xP=["get","getKey","getAll","getAllKeys","count"],TP=["put","add","delete","clear"],Tg=new Map;function jw(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Tg.get(t))return Tg.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,a=TP.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(a||xP.includes(n)))return;const l=async function(u,...f){const h=this.transaction(u,a?"readwrite":"readonly");let p=h.store;return i&&(p=p.index(f.shift())),(await Promise.all([p[n](...f),a&&h.done]))[0]};return Tg.set(t,l),l}SP(e=>({...e,get:(t,n,i)=>jw(t,n)||e.get(t,n,i),has:(t,n)=>!!jw(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CP{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(RP(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function RP(e){return e.getComponent()?.type==="VERSION"}const Ry="@firebase/app",Uw="0.14.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=new Lv("@firebase/app"),AP="@firebase/app-compat",IP="@firebase/analytics-compat",DP="@firebase/analytics",OP="@firebase/app-check-compat",NP="@firebase/app-check",MP="@firebase/auth",kP="@firebase/auth-compat",LP="@firebase/database",PP="@firebase/data-connect",jP="@firebase/database-compat",UP="@firebase/functions",zP="@firebase/functions-compat",$P="@firebase/installations",BP="@firebase/installations-compat",HP="@firebase/messaging",FP="@firebase/messaging-compat",qP="@firebase/performance",VP="@firebase/performance-compat",GP="@firebase/remote-config",YP="@firebase/remote-config-compat",QP="@firebase/storage",WP="@firebase/storage-compat",KP="@firebase/firestore",XP="@firebase/ai",ZP="@firebase/firestore-compat",JP="firebase",e4="12.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay="[DEFAULT]",t4={[Ry]:"fire-core",[AP]:"fire-core-compat",[DP]:"fire-analytics",[IP]:"fire-analytics-compat",[NP]:"fire-app-check",[OP]:"fire-app-check-compat",[MP]:"fire-auth",[kP]:"fire-auth-compat",[LP]:"fire-rtdb",[PP]:"fire-data-connect",[jP]:"fire-rtdb-compat",[UP]:"fire-fn",[zP]:"fire-fn-compat",[$P]:"fire-iid",[BP]:"fire-iid-compat",[HP]:"fire-fcm",[FP]:"fire-fcm-compat",[qP]:"fire-perf",[VP]:"fire-perf-compat",[GP]:"fire-rc",[YP]:"fire-rc-compat",[QP]:"fire-gcs",[WP]:"fire-gcs-compat",[KP]:"fire-fst",[ZP]:"fire-fst-compat",[XP]:"fire-vertex","fire-js":"fire-js",[JP]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf=new Map,n4=new Map,Iy=new Map;function zw(e,t){try{e.container.addComponent(t)}catch(n){hi.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Nr(e){const t=e.name;if(Iy.has(t))return hi.debug(`There were multiple attempts to register component ${t}.`),!1;Iy.set(t,e);for(const n of Pf.values())zw(n,e);for(const n of n4.values())zw(n,e);return!0}function Yo(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Nn(e){return e==null?!1:e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r4={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},is=new wa("app","Firebase",r4);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i4{constructor(t,n,i){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new hr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw is.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo=e4;function FC(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const i={name:Ay,automaticDataCollectionEnabled:!0,...t},a=i.name;if(typeof a!="string"||!a)throw is.create("bad-app-name",{appName:String(a)});if(n||(n=MC()),!n)throw is.create("no-options");const l=Pf.get(a);if(l){if(da(n,l.options)&&da(i,l.config))return l;throw is.create("duplicate-app",{appName:a})}const u=new dP(a);for(const h of Iy.values())u.addComponent(h);const f=new i4(n,i,u);return Pf.set(a,f),f}function jv(e=Ay){const t=Pf.get(e);if(!t&&e===Ay&&MC())return FC();if(!t)throw is.create("no-app",{appName:e});return t}function Wn(e,t,n){let i=t4[e]??e;n&&(i+=`-${n}`);const a=i.match(/\s|\//),l=t.match(/\s|\//);if(a||l){const u=[`Unable to register library "${i}" with version "${t}":`];a&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&l&&u.push("and"),l&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),hi.warn(u.join(" "));return}Nr(new hr(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const s4="firebase-heartbeat-database",a4=1,Uc="firebase-heartbeat-store";let Cg=null;function qC(){return Cg||(Cg=Ah(s4,a4,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Uc)}catch(n){console.warn(n)}}}}).catch(e=>{throw is.create("idb-open",{originalErrorMessage:e.message})})),Cg}async function o4(e){try{const n=(await qC()).transaction(Uc),i=await n.objectStore(Uc).get(VC(e));return await n.done,i}catch(t){if(t instanceof _i)hi.warn(t.message);else{const n=is.create("idb-get",{originalErrorMessage:t?.message});hi.warn(n.message)}}}async function $w(e,t){try{const i=(await qC()).transaction(Uc,"readwrite");await i.objectStore(Uc).put(t,VC(e)),await i.done}catch(n){if(n instanceof _i)hi.warn(n.message);else{const i=is.create("idb-set",{originalErrorMessage:n?.message});hi.warn(i.message)}}}function VC(e){return`${e.name}!${e.options.appId}`}/**
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
 */const l4=1024,c4=30;class u4{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new f4(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Bw();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats.length>c4){const a=h4(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){hi.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Bw(),{heartbeatsToSend:n,unsentEntries:i}=d4(this._heartbeatsCache.heartbeats),a=Mf(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return hi.warn(t),""}}}function Bw(){return new Date().toISOString().substring(0,10)}function d4(e,t=l4){const n=[];let i=e.slice();for(const a of e){const l=n.find(u=>u.agent===a.agent);if(l){if(l.dates.push(a.date),Hw(n)>t){l.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),Hw(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class f4{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return UC()?zC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await o4(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const i=await this.read();return $w(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const i=await this.read();return $w(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Hw(e){return Mf(JSON.stringify({version:2,heartbeats:e})).length}function h4(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let i=1;i<e.length;i++)e[i].date<n&&(n=e[i].date,t=i);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p4(e){Nr(new hr("platform-logger",t=>new CP(t),"PRIVATE")),Nr(new hr("heartbeat",t=>new u4(t),"PRIVATE")),Wn(Ry,Uw,e),Wn(Ry,Uw,"esm2020"),Wn("fire-js","")}p4("");const GC="@firebase/installations",Uv="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YC=1e4,QC=`w:${Uv}`,WC="FIS_v2",m4="https://firebaseinstallations.googleapis.com/v1",g4=3600*1e3,y4="installations",v4="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _4={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},fa=new wa(y4,v4,_4);function KC(e){return e instanceof _i&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XC({projectId:e}){return`${m4}/projects/${e}/installations`}function ZC(e){return{token:e.token,requestStatus:2,expiresIn:S4(e.expiresIn),creationTime:Date.now()}}async function JC(e,t){const i=(await t.json()).error;return fa.create("request-failed",{requestName:e,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function eR({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function b4(e,{refreshToken:t}){const n=eR(e);return n.append("Authorization",w4(t)),n}async function tR(e){const t=await e();return t.status>=500&&t.status<600?e():t}function S4(e){return Number(e.replace("s","000"))}function w4(e){return`${WC} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E4({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const i=XC(e),a=eR(e),l=t.getImmediate({optional:!0});if(l){const p=await l.getHeartbeatsHeader();p&&a.append("x-firebase-client",p)}const u={fid:n,authVersion:WC,appId:e.appId,sdkVersion:QC},f={method:"POST",headers:a,body:JSON.stringify(u)},h=await tR(()=>fetch(i,f));if(h.ok){const p=await h.json();return{fid:p.fid||n,registrationStatus:2,refreshToken:p.refreshToken,authToken:ZC(p.authToken)}}else throw await JC("Create Installation",h)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nR(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x4(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T4=/^[cdef][\w-]{21}$/,Dy="";function C4(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=R4(e);return T4.test(n)?n:Dy}catch{return Dy}}function R4(e){return x4(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ih(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR=new Map;function iR(e,t){const n=Ih(e);sR(n,t),A4(n,t)}function sR(e,t){const n=rR.get(e);if(n)for(const i of n)i(t)}function A4(e,t){const n=I4();n&&n.postMessage({key:e,fid:t}),D4()}let ta=null;function I4(){return!ta&&"BroadcastChannel"in self&&(ta=new BroadcastChannel("[Firebase] FID Change"),ta.onmessage=e=>{sR(e.data.key,e.data.fid)}),ta}function D4(){rR.size===0&&ta&&(ta.close(),ta=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O4="firebase-installations-database",N4=1,ha="firebase-installations-store";let Rg=null;function zv(){return Rg||(Rg=Ah(O4,N4,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ha)}}})),Rg}async function jf(e,t){const n=Ih(e),a=(await zv()).transaction(ha,"readwrite"),l=a.objectStore(ha),u=await l.get(n);return await l.put(t,n),await a.done,(!u||u.fid!==t.fid)&&iR(e,t.fid),t}async function aR(e){const t=Ih(e),i=(await zv()).transaction(ha,"readwrite");await i.objectStore(ha).delete(t),await i.done}async function Dh(e,t){const n=Ih(e),a=(await zv()).transaction(ha,"readwrite"),l=a.objectStore(ha),u=await l.get(n),f=t(u);return f===void 0?await l.delete(n):await l.put(f,n),await a.done,f&&(!u||u.fid!==f.fid)&&iR(e,f.fid),f}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $v(e){let t;const n=await Dh(e.appConfig,i=>{const a=M4(i),l=k4(e,a);return t=l.registrationPromise,l.installationEntry});return n.fid===Dy?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function M4(e){const t=e||{fid:C4(),registrationStatus:0};return oR(t)}function k4(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const a=Promise.reject(fa.create("app-offline"));return{installationEntry:t,registrationPromise:a}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=L4(e,n);return{installationEntry:n,registrationPromise:i}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:P4(e)}:{installationEntry:t}}async function L4(e,t){try{const n=await E4(e,t);return jf(e.appConfig,n)}catch(n){throw KC(n)&&n.customData.serverCode===409?await aR(e.appConfig):await jf(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function P4(e){let t=await Fw(e.appConfig);for(;t.registrationStatus===1;)await nR(100),t=await Fw(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await $v(e);return i||n}return t}function Fw(e){return Dh(e,t=>{if(!t)throw fa.create("installation-not-found");return oR(t)})}function oR(e){return j4(e)?{fid:e.fid,registrationStatus:0}:e}function j4(e){return e.registrationStatus===1&&e.registrationTime+YC<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U4({appConfig:e,heartbeatServiceProvider:t},n){const i=z4(e,n),a=b4(e,n),l=t.getImmediate({optional:!0});if(l){const p=await l.getHeartbeatsHeader();p&&a.append("x-firebase-client",p)}const u={installation:{sdkVersion:QC,appId:e.appId}},f={method:"POST",headers:a,body:JSON.stringify(u)},h=await tR(()=>fetch(i,f));if(h.ok){const p=await h.json();return ZC(p)}else throw await JC("Generate Auth Token",h)}function z4(e,{fid:t}){return`${XC(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bv(e,t=!1){let n;const i=await Dh(e.appConfig,l=>{if(!lR(l))throw fa.create("not-registered");const u=l.authToken;if(!t&&H4(u))return l;if(u.requestStatus===1)return n=$4(e,t),l;{if(!navigator.onLine)throw fa.create("app-offline");const f=q4(l);return n=B4(e,f),f}});return n?await n:i.authToken}async function $4(e,t){let n=await qw(e.appConfig);for(;n.authToken.requestStatus===1;)await nR(100),n=await qw(e.appConfig);const i=n.authToken;return i.requestStatus===0?Bv(e,t):i}function qw(e){return Dh(e,t=>{if(!lR(t))throw fa.create("not-registered");const n=t.authToken;return V4(n)?{...t,authToken:{requestStatus:0}}:t})}async function B4(e,t){try{const n=await U4(e,t),i={...t,authToken:n};return await jf(e.appConfig,i),n}catch(n){if(KC(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await aR(e.appConfig);else{const i={...t,authToken:{requestStatus:0}};await jf(e.appConfig,i)}throw n}}function lR(e){return e!==void 0&&e.registrationStatus===2}function H4(e){return e.requestStatus===2&&!F4(e)}function F4(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+g4}function q4(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}function V4(e){return e.requestStatus===1&&e.requestTime+YC<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G4(e){const t=e,{installationEntry:n,registrationPromise:i}=await $v(t);return i?i.catch(console.error):Bv(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y4(e,t=!1){const n=e;return await Q4(n),(await Bv(n,t)).token}async function Q4(e){const{registrationPromise:t}=await $v(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W4(e){if(!e||!e.options)throw Ag("App Configuration");if(!e.name)throw Ag("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Ag(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Ag(e){return fa.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR="installations",K4="installations-internal",X4=e=>{const t=e.getProvider("app").getImmediate(),n=W4(t),i=Yo(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},Z4=e=>{const t=e.getProvider("app").getImmediate(),n=Yo(t,cR).getImmediate();return{getId:()=>G4(n),getToken:a=>Y4(n,a)}};function J4(){Nr(new hr(cR,X4,"PUBLIC")),Nr(new hr(K4,Z4,"PRIVATE"))}J4();Wn(GC,Uv);Wn(GC,Uv,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e6="/firebase-messaging-sw.js",t6="/firebase-cloud-messaging-push-scope",uR="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",n6="https://fcmregistrations.googleapis.com/v1",dR="google.c.a.c_id",r6="google.c.a.c_l",i6="google.c.a.ts",s6="google.c.a.e",Vw=1e4;var Gw;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Gw||(Gw={}));/**
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
 */var zc;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(zc||(zc={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function a6(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(n),a=new Uint8Array(i.length);for(let l=0;l<i.length;++l)a[l]=i.charCodeAt(l);return a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig="fcm_token_details_db",o6=5,Yw="fcm_token_object_Store";async function l6(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(l=>l.name).includes(Ig))return null;let t=null;return(await Ah(Ig,o6,{upgrade:async(i,a,l,u)=>{if(a<2||!i.objectStoreNames.contains(Yw))return;const f=u.objectStore(Yw),h=await f.index("fcmSenderId").get(e);if(await f.clear(),!!h){if(a===2){const p=h;if(!p.auth||!p.p256dh||!p.endpoint)return;t={token:p.fcmToken,createTime:p.createTime??Date.now(),subscriptionOptions:{auth:p.auth,p256dh:p.p256dh,endpoint:p.endpoint,swScope:p.swScope,vapidKey:typeof p.vapidKey=="string"?p.vapidKey:ii(p.vapidKey)}}}else if(a===3){const p=h;t={token:p.fcmToken,createTime:p.createTime,subscriptionOptions:{auth:ii(p.auth),p256dh:ii(p.p256dh),endpoint:p.endpoint,swScope:p.swScope,vapidKey:ii(p.vapidKey)}}}else if(a===4){const p=h;t={token:p.fcmToken,createTime:p.createTime,subscriptionOptions:{auth:ii(p.auth),p256dh:ii(p.p256dh),endpoint:p.endpoint,swScope:p.swScope,vapidKey:ii(p.vapidKey)}}}}}})).close(),await xg(Ig),await xg("fcm_vapid_details_db"),await xg("undefined"),c6(t)?t:null}function c6(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u6="firebase-messaging-database",d6=1,$c="firebase-messaging-store";let Dg=null;function fR(){return Dg||(Dg=Ah(u6,d6,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore($c)}}})),Dg}async function f6(e){const t=hR(e),i=await(await fR()).transaction($c).objectStore($c).get(t);if(i)return i;{const a=await l6(e.appConfig.senderId);if(a)return await Hv(e,a),a}}async function Hv(e,t){const n=hR(e),a=(await fR()).transaction($c,"readwrite");return await a.objectStore($c).put(t,n),await a.done,t}function hR({appConfig:e}){return e.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h6={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},an=new wa("messaging","Messaging",h6);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p6(e,t){const n=await qv(e),i=pR(t),a={method:"POST",headers:n,body:JSON.stringify(i)};let l;try{l=await(await fetch(Fv(e.appConfig),a)).json()}catch(u){throw an.create("token-subscribe-failed",{errorInfo:u?.toString()})}if(l.error){const u=l.error.message;throw an.create("token-subscribe-failed",{errorInfo:u})}if(!l.token)throw an.create("token-subscribe-no-token");return l.token}async function m6(e,t){const n=await qv(e),i=pR(t.subscriptionOptions),a={method:"PATCH",headers:n,body:JSON.stringify(i)};let l;try{l=await(await fetch(`${Fv(e.appConfig)}/${t.token}`,a)).json()}catch(u){throw an.create("token-update-failed",{errorInfo:u?.toString()})}if(l.error){const u=l.error.message;throw an.create("token-update-failed",{errorInfo:u})}if(!l.token)throw an.create("token-update-no-token");return l.token}async function g6(e,t){const i={method:"DELETE",headers:await qv(e)};try{const l=await(await fetch(`${Fv(e.appConfig)}/${t}`,i)).json();if(l.error){const u=l.error.message;throw an.create("token-unsubscribe-failed",{errorInfo:u})}}catch(a){throw an.create("token-unsubscribe-failed",{errorInfo:a?.toString()})}}function Fv({projectId:e}){return`${n6}/projects/${e}/registrations`}async function qv({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function pR({p256dh:e,auth:t,endpoint:n,vapidKey:i}){const a={web:{endpoint:n,auth:t,p256dh:e}};return i!==uR&&(a.web.applicationPubKey=i),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y6=10080*60*1e3;async function v6(e){const t=await b6(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:ii(t.getKey("auth")),p256dh:ii(t.getKey("p256dh"))},i=await f6(e.firebaseDependencies);if(i){if(S6(i.subscriptionOptions,n))return Date.now()>=i.createTime+y6?_6(e,{token:i.token,createTime:Date.now(),subscriptionOptions:n}):i.token;try{await g6(e.firebaseDependencies,i.token)}catch(a){console.warn(a)}return Qw(e.firebaseDependencies,n)}else return Qw(e.firebaseDependencies,n)}async function _6(e,t){try{const n=await m6(e.firebaseDependencies,t),i={...t,token:n,createTime:Date.now()};return await Hv(e.firebaseDependencies,i),n}catch(n){throw n}}async function Qw(e,t){const i={token:await p6(e,t),createTime:Date.now(),subscriptionOptions:t};return await Hv(e,i),i.token}async function b6(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:a6(t)})}function S6(e,t){const n=t.vapidKey===e.vapidKey,i=t.endpoint===e.endpoint,a=t.auth===e.auth,l=t.p256dh===e.p256dh;return n&&i&&a&&l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return w6(t,e),E6(t,e),x6(t,e),t}function w6(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const i=t.notification.body;i&&(e.notification.body=i);const a=t.notification.image;a&&(e.notification.image=a);const l=t.notification.icon;l&&(e.notification.icon=l)}function E6(e,t){t.data&&(e.data=t.data)}function x6(e,t){if(!t.fcmOptions&&!t.notification?.click_action)return;e.fcmOptions={};const n=t.fcmOptions?.link??t.notification?.click_action;n&&(e.fcmOptions.link=n);const i=t.fcmOptions?.analytics_label;i&&(e.fcmOptions.analyticsLabel=i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T6(e){return typeof e=="object"&&!!e&&dR in e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C6(e){if(!e||!e.options)throw Og("App Configuration Object");if(!e.name)throw Og("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const i of t)if(!n[i])throw Og(i);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Og(e){return an.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R6{constructor(t,n,i){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const a=C6(t);this.firebaseDependencies={app:t,appConfig:a,installations:n,analyticsProvider:i}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A6(e){try{e.swRegistration=await navigator.serviceWorker.register(e6,{scope:t6}),e.swRegistration.update().catch(()=>{}),await I6(e.swRegistration)}catch(t){throw an.create("failed-service-worker-registration",{browserErrorMessage:t?.message})}}async function I6(e){return new Promise((t,n)=>{const i=setTimeout(()=>n(new Error(`Service worker not registered after ${Vw} ms`)),Vw),a=e.installing||e.waiting;e.active?(clearTimeout(i),t()):a?a.onstatechange=l=>{l.target?.state==="activated"&&(a.onstatechange=null,clearTimeout(i),t())}:(clearTimeout(i),n(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D6(e,t){if(!t&&!e.swRegistration&&await A6(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw an.create("invalid-sw-registration");e.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O6(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=uR)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mR(e,t){if(!navigator)throw an.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw an.create("permission-blocked");return await O6(e,t?.vapidKey),await D6(e,t?.serviceWorkerRegistration),v6(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N6(e,t,n){const i=M6(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(i,{message_id:n[dR],message_name:n[r6],message_time:n[i6],message_device_time:Math.floor(Date.now()/1e3)})}function M6(e){switch(e){case zc.NOTIFICATION_CLICKED:return"notification_open";case zc.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k6(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===zc.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(Ww(n)):e.onMessageHandler.next(Ww(n)));const i=n.data;T6(i)&&i[s6]==="1"&&await N6(e,n.messageType,i)}const Kw="@firebase/messaging",Xw="0.12.23";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L6=e=>{const t=new R6(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>k6(t,n)),t},P6=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:i=>mR(t,i)}};function j6(){Nr(new hr("messaging",L6,"PUBLIC")),Nr(new hr("messaging-internal",P6,"PRIVATE")),Wn(Kw,Xw),Wn(Kw,Xw,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U6(){try{await zC()}catch{return!1}return typeof window<"u"&&UC()&&XL()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z6(e,t){if(!navigator)throw an.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $6(e=jv()){return U6().then(t=>{if(!t)throw an.create("unsupported-browser")},t=>{throw an.create("indexed-db-unsupported")}),Yo(Gt(e),"messaging").getImmediate()}async function B6(e,t){return e=Gt(e),mR(e,t)}function H6(e,t){return e=Gt(e),z6(e,t)}j6();const Oh=e=>{try{return e()}catch(t){throw t}};var F6="firebase",q6="12.2.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wn(F6,q6,"app");const V6={apiKey:"AIzaSyAMtG6b23AqO2WbJ2ad8SKMXD1X4tfALtc",authDomain:"peloton-alerts.firebaseapp.com",projectId:"peloton-alerts",storageBucket:"peloton-alerts.appspot.com",messagingSenderId:"331185140393",appId:"1:331185140393:web:5f49c5c60b8b162914efb8",measurementId:"G-R2QRE36WEQ",databaseURL:"https://peloton-alerts-default-rtdb.firebaseio.com/"},xc=Oh(()=>FC(V6)),_o=Oh(()=>$6(xc)),G6="serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window,gR=async()=>{if(!("serviceWorker"in navigator))throw new Error("Service workers are not supported");return navigator.serviceWorker.register("/peloton-reservations/pr-preview/pr-34/messaging-sw.js",{type:"classic"})};let Ng=gR();const Zw=async()=>{if(!_o)throw new Error("Messaging is not set up");if(!G6)throw new Error("Browser environment does not allow messaging");let e;try{e=await Ng,console.log("Registered service worker successfully")}catch(t){console.error("Failed to register service worker. Trying again...",t),Ng=gR(),e=await Ng}return B6(_o,{vapidKey:"BO9hF0_u2BKehXtAWTxtm7RtvIUGIEA5GT_jGycvCfUEW0yZZkLvtRB1Y8R_5KKBEODsLufyDkcBXn9rx5dHY5g",serviceWorkerRegistration:e})};function Zt(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var Y6=typeof Symbol=="function"&&Symbol.observable||"@@observable",Jw=Y6,Mg=()=>Math.random().toString(36).substring(7).split("").join("."),Q6={INIT:`@@redux/INIT${Mg()}`,REPLACE:`@@redux/REPLACE${Mg()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Mg()}`},Uf=Q6;function us(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function yR(e,t,n){if(typeof e!="function")throw new Error(Zt(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Zt(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Zt(1));return n(yR)(e,t)}let i=e,a=t,l=new Map,u=l,f=0,h=!1;function p(){u===l&&(u=new Map,l.forEach((C,I)=>{u.set(I,C)}))}function g(){if(h)throw new Error(Zt(3));return a}function y(C){if(typeof C!="function")throw new Error(Zt(4));if(h)throw new Error(Zt(5));let I=!0;p();const k=f++;return u.set(k,C),function(){if(I){if(h)throw new Error(Zt(6));I=!1,p(),u.delete(k),l=null}}}function v(C){if(!us(C))throw new Error(Zt(7));if(typeof C.type>"u")throw new Error(Zt(8));if(typeof C.type!="string")throw new Error(Zt(17));if(h)throw new Error(Zt(9));try{h=!0,a=i(a,C)}finally{h=!1}return(l=u).forEach(k=>{k()}),C}function S(C){if(typeof C!="function")throw new Error(Zt(10));i=C,v({type:Uf.REPLACE})}function w(){const C=y;return{subscribe(I){if(typeof I!="object"||I===null)throw new Error(Zt(11));function k(){const A=I;A.next&&A.next(g())}return k(),{unsubscribe:C(k)}},[Jw](){return this}}}return v({type:Uf.INIT}),{dispatch:v,subscribe:y,getState:g,replaceReducer:S,[Jw]:w}}function W6(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:Uf.INIT})>"u")throw new Error(Zt(12));if(typeof n(void 0,{type:Uf.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Zt(13))})}function vR(e){const t=Object.keys(e),n={};for(let l=0;l<t.length;l++){const u=t[l];typeof e[u]=="function"&&(n[u]=e[u])}const i=Object.keys(n);let a;try{W6(n)}catch(l){a=l}return function(u={},f){if(a)throw a;let h=!1;const p={};for(let g=0;g<i.length;g++){const y=i[g],v=n[y],S=u[y],w=v(S,f);if(typeof w>"u")throw f&&f.type,new Error(Zt(14));p[y]=w,h=h||w!==S}return h=h||i.length!==Object.keys(u).length,h?p:u}}function zf(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...i)=>t(n(...i)))}function K6(...e){return t=>(n,i)=>{const a=t(n,i);let l=()=>{throw new Error(Zt(15))};const u={getState:a.getState,dispatch:(h,...p)=>l(h,...p)},f=e.map(h=>h(u));return l=zf(...f)(a.dispatch),{...a,dispatch:l}}}function _R(e){return us(e)&&"type"in e&&typeof e.type=="string"}var Vv=Symbol.for("immer-nothing"),Tc=Symbol.for("immer-draftable"),Sn=Symbol.for("immer-state");function en(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Lo=Object.getPrototypeOf;function Mr(e){return!!e&&!!e[Sn]}function pr(e){return e?bR(e)||Array.isArray(e)||!!e[Tc]||!!e.constructor?.[Tc]||Wo(e)||cu(e):!1}var X6=Object.prototype.constructor.toString(),eE=new WeakMap;function bR(e){if(!e||typeof e!="object")return!1;const t=Object.getPrototypeOf(e);if(t===null||t===Object.prototype)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;if(n===Object)return!0;if(typeof n!="function")return!1;let i=eE.get(n);return i===void 0&&(i=Function.toString.call(n),eE.set(n,i)),i===X6}function Z6(e){return Mr(e)||en(15,e),e[Sn].base_}function Bc(e,t,n=!0){pa(e)===0?(n?Reflect.ownKeys(e):Object.keys(e)).forEach(a=>{t(a,e[a],e)}):e.forEach((i,a)=>t(a,i,e))}function pa(e){const t=e[Sn];return t?t.type_:Array.isArray(e)?1:Wo(e)?2:cu(e)?3:0}function Hc(e,t){return pa(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function kg(e,t){return pa(e)===2?e.get(t):e[t]}function SR(e,t,n){const i=pa(e);i===2?e.set(t,n):i===3?e.add(n):e[t]=n}function J6(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function Wo(e){return e instanceof Map}function cu(e){return e instanceof Set}function Xs(e){return e.copy_||e.base_}function Oy(e,t){if(Wo(e))return new Map(e);if(cu(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const n=bR(e);if(t===!0||t==="class_only"&&!n){const i=Object.getOwnPropertyDescriptors(e);delete i[Sn];let a=Reflect.ownKeys(i);for(let l=0;l<a.length;l++){const u=a[l],f=i[u];f.writable===!1&&(f.writable=!0,f.configurable=!0),(f.get||f.set)&&(i[u]={configurable:!0,writable:!0,enumerable:f.enumerable,value:e[u]})}return Object.create(Lo(e),i)}else{const i=Lo(e);if(i!==null&&n)return{...e};const a=Object.create(i);return Object.assign(a,e)}}function Gv(e,t=!1){return Nh(e)||Mr(e)||!pr(e)||(pa(e)>1&&Object.defineProperties(e,{set:qd,add:qd,clear:qd,delete:qd}),Object.freeze(e),t&&Object.values(e).forEach(n=>Gv(n,!0))),e}function e3(){en(2)}var qd={value:e3};function Nh(e){return e===null||typeof e!="object"?!0:Object.isFrozen(e)}var Ny={};function ma(e){const t=Ny[e];return t||en(0,e),t}function t3(e,t){Ny[e]||(Ny[e]=t)}var Fc;function wR(){return Fc}function n3(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function tE(e,t){t&&(ma("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function My(e){ky(e),e.drafts_.forEach(r3),e.drafts_=null}function ky(e){e===Fc&&(Fc=e.parent_)}function nE(e){return Fc=n3(Fc,e)}function r3(e){const t=e[Sn];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function rE(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return e!==void 0&&e!==n?(n[Sn].modified_&&(My(t),en(4)),pr(e)&&(e=$f(t,e),t.parent_||Bf(t,e)),t.patches_&&ma("Patches").generateReplacementPatches_(n[Sn].base_,e,t.patches_,t.inversePatches_)):e=$f(t,n,[]),My(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==Vv?e:void 0}function $f(e,t,n){if(Nh(t))return t;const i=e.immer_.shouldUseStrictIteration(),a=t[Sn];if(!a)return Bc(t,(l,u)=>iE(e,a,t,l,u,n),i),t;if(a.scope_!==e)return t;if(!a.modified_)return Bf(e,a.base_,!0),a.base_;if(!a.finalized_){a.finalized_=!0,a.scope_.unfinalizedDrafts_--;const l=a.copy_;let u=l,f=!1;a.type_===3&&(u=new Set(l),l.clear(),f=!0),Bc(u,(h,p)=>iE(e,a,l,h,p,n,f),i),Bf(e,l,!1),n&&e.patches_&&ma("Patches").generatePatches_(a,n,e.patches_,e.inversePatches_)}return a.copy_}function iE(e,t,n,i,a,l,u){if(a==null||typeof a!="object"&&!u)return;const f=Nh(a);if(!(f&&!u)){if(Mr(a)){const h=l&&t&&t.type_!==3&&!Hc(t.assigned_,i)?l.concat(i):void 0,p=$f(e,a,h);if(SR(n,i,p),Mr(p))e.canAutoFreeze_=!1;else return}else u&&n.add(a);if(pr(a)&&!f){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1||t&&t.base_&&t.base_[i]===a&&f)return;$f(e,a),(!t||!t.scope_.parent_)&&typeof i!="symbol"&&(Wo(n)?n.has(i):Object.prototype.propertyIsEnumerable.call(n,i))&&Bf(e,a)}}}function Bf(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Gv(t,n)}function i3(e,t){const n=Array.isArray(e),i={type_:n?1:0,scope_:t?t.scope_:wR(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let a=i,l=Yv;n&&(a=[i],l=qc);const{revoke:u,proxy:f}=Proxy.revocable(a,l);return i.draft_=f,i.revoke_=u,f}var Yv={get(e,t){if(t===Sn)return e;const n=Xs(e);if(!Hc(n,t))return s3(e,n,t);const i=n[t];return e.finalized_||!pr(i)?i:i===Lg(e.base_,t)?(Pg(e),e.copy_[t]=Py(i,e)):i},has(e,t){return t in Xs(e)},ownKeys(e){return Reflect.ownKeys(Xs(e))},set(e,t,n){const i=ER(Xs(e),t);if(i?.set)return i.set.call(e.draft_,n),!0;if(!e.modified_){const a=Lg(Xs(e),t),l=a?.[Sn];if(l&&l.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(J6(n,a)&&(n!==void 0||Hc(e.base_,t)))return!0;Pg(e),Ly(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty(e,t){return Lg(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,Pg(e),Ly(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=Xs(e),i=Reflect.getOwnPropertyDescriptor(n,t);return i&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:i.enumerable,value:n[t]}},defineProperty(){en(11)},getPrototypeOf(e){return Lo(e.base_)},setPrototypeOf(){en(12)}},qc={};Bc(Yv,(e,t)=>{qc[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});qc.deleteProperty=function(e,t){return qc.set.call(this,e,t,void 0)};qc.set=function(e,t,n){return Yv.set.call(this,e[0],t,n,e[0])};function Lg(e,t){const n=e[Sn];return(n?Xs(n):e)[t]}function s3(e,t,n){const i=ER(t,n);return i?"value"in i?i.value:i.get?.call(e.draft_):void 0}function ER(e,t){if(!(t in e))return;let n=Lo(e);for(;n;){const i=Object.getOwnPropertyDescriptor(n,t);if(i)return i;n=Lo(n)}}function Ly(e){e.modified_||(e.modified_=!0,e.parent_&&Ly(e.parent_))}function Pg(e){e.copy_||(e.copy_=Oy(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var a3=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!0,this.produce=(t,n,i)=>{if(typeof t=="function"&&typeof n!="function"){const l=n;n=t;const u=this;return function(h=l,...p){return u.produce(h,g=>n.call(this,g,...p))}}typeof n!="function"&&en(6),i!==void 0&&typeof i!="function"&&en(7);let a;if(pr(t)){const l=nE(this),u=Py(t,void 0);let f=!0;try{a=n(u),f=!1}finally{f?My(l):ky(l)}return tE(l,i),rE(a,l)}else if(!t||typeof t!="object"){if(a=n(t),a===void 0&&(a=t),a===Vv&&(a=void 0),this.autoFreeze_&&Gv(a,!0),i){const l=[],u=[];ma("Patches").generateReplacementPatches_(t,a,l,u),i(l,u)}return a}else en(1,t)},this.produceWithPatches=(t,n)=>{if(typeof t=="function")return(u,...f)=>this.produceWithPatches(u,h=>t(h,...f));let i,a;return[this.produce(t,n,(u,f)=>{i=u,a=f}),i,a]},typeof e?.autoFreeze=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof e?.useStrictShallowCopy=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),typeof e?.useStrictIteration=="boolean"&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){pr(e)||en(8),Mr(e)&&(e=o3(e));const t=nE(this),n=Py(e,void 0);return n[Sn].isManual_=!0,ky(t),n}finishDraft(e,t){const n=e&&e[Sn];(!n||!n.isManual_)&&en(9);const{scope_:i}=n;return tE(i,t),rE(void 0,i)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const a=t[n];if(a.path.length===0&&a.op==="replace"){e=a.value;break}}n>-1&&(t=t.slice(n+1));const i=ma("Patches").applyPatches_;return Mr(e)?i(e,t):this.produce(e,a=>i(a,t))}};function Py(e,t){const n=Wo(e)?ma("MapSet").proxyMap_(e,t):cu(e)?ma("MapSet").proxySet_(e,t):i3(e,t);return(t?t.scope_:wR()).drafts_.push(n),n}function o3(e){return Mr(e)||en(10,e),xR(e)}function xR(e){if(!pr(e)||Nh(e))return e;const t=e[Sn];let n,i=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=Oy(e,t.scope_.immer_.useStrictShallowCopy_),i=t.scope_.immer_.shouldUseStrictIteration()}else n=Oy(e,!0);return Bc(n,(a,l)=>{SR(n,a,xR(l))},i),t&&(t.finalized_=!1),n}function l3(){const t="replace",i="remove";function a(v,S,w,D){switch(v.type_){case 0:case 2:return u(v,S,w,D);case 1:return l(v,S,w,D);case 3:return f(v,S,w,D)}}function l(v,S,w,D){let{base_:C,assigned_:I}=v,k=v.copy_;k.length<C.length&&([C,k]=[k,C],[w,D]=[D,w]);for(let x=0;x<C.length;x++)if(I[x]&&k[x]!==C[x]){const A=S.concat([x]);w.push({op:t,path:A,value:y(k[x])}),D.push({op:t,path:A,value:y(C[x])})}for(let x=C.length;x<k.length;x++){const A=S.concat([x]);w.push({op:"add",path:A,value:y(k[x])})}for(let x=k.length-1;C.length<=x;--x){const A=S.concat([x]);D.push({op:i,path:A})}}function u(v,S,w,D){const{base_:C,copy_:I}=v;Bc(v.assigned_,(k,x)=>{const A=kg(C,k),N=kg(I,k),T=x?Hc(C,k)?t:"add":i;if(A===N&&T===t)return;const P=S.concat(k);w.push(T===i?{op:T,path:P}:{op:T,path:P,value:N}),D.push(T==="add"?{op:i,path:P}:T===i?{op:"add",path:P,value:y(A)}:{op:t,path:P,value:y(A)})})}function f(v,S,w,D){let{base_:C,copy_:I}=v,k=0;C.forEach(x=>{if(!I.has(x)){const A=S.concat([k]);w.push({op:i,path:A,value:x}),D.unshift({op:"add",path:A,value:x})}k++}),k=0,I.forEach(x=>{if(!C.has(x)){const A=S.concat([k]);w.push({op:"add",path:A,value:x}),D.unshift({op:i,path:A,value:x})}k++})}function h(v,S,w,D){w.push({op:t,path:[],value:S===Vv?void 0:S}),D.push({op:t,path:[],value:v})}function p(v,S){return S.forEach(w=>{const{path:D,op:C}=w;let I=v;for(let N=0;N<D.length-1;N++){const T=pa(I);let P=D[N];typeof P!="string"&&typeof P!="number"&&(P=""+P),(T===0||T===1)&&(P==="__proto__"||P==="constructor")&&en(19),typeof I=="function"&&P==="prototype"&&en(19),I=kg(I,P),typeof I!="object"&&en(18,D.join("/"))}const k=pa(I),x=g(w.value),A=D[D.length-1];switch(C){case t:switch(k){case 2:return I.set(A,x);case 3:en(16);default:return I[A]=x}case"add":switch(k){case 1:return A==="-"?I.push(x):I.splice(A,0,x);case 2:return I.set(A,x);case 3:return I.add(x);default:return I[A]=x}case i:switch(k){case 1:return I.splice(A,1);case 2:return I.delete(A);case 3:return I.delete(w.value);default:return delete I[A]}default:en(17,C)}}),v}function g(v){if(!pr(v))return v;if(Array.isArray(v))return v.map(g);if(Wo(v))return new Map(Array.from(v.entries()).map(([w,D])=>[w,g(D)]));if(cu(v))return new Set(Array.from(v).map(g));const S=Object.create(Lo(v));for(const w in v)S[w]=g(v[w]);return Hc(v,Tc)&&(S[Tc]=v[Tc]),S}function y(v){return Mr(v)?g(v):v}t3("Patches",{applyPatches_:p,generatePatches_:a,generateReplacementPatches_:h})}var Vc=new a3,uu=Vc.produce,TR=Vc.produceWithPatches.bind(Vc),sE=Vc.applyPatches.bind(Vc);function c3(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(t)}function u3(e,t=`expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(t)}function d3(e,t="expected all items to be functions, instead received the following types: "){if(!e.every(n=>typeof n=="function")){const n=e.map(i=>typeof i=="function"?`function ${i.name||"unnamed"}()`:typeof i).join(", ");throw new TypeError(`${t}[${n}]`)}}var aE=e=>Array.isArray(e)?e:[e];function f3(e){const t=Array.isArray(e[0])?e[0]:e;return d3(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}function h3(e,t){const n=[],{length:i}=e;for(let a=0;a<i;a++)n.push(e[a].apply(null,t));return n}var p3=class{constructor(e){this.value=e}deref(){return this.value}},m3=typeof WeakRef<"u"?WeakRef:p3,g3=0,oE=1;function Vd(){return{s:g3,v:void 0,o:null,p:null}}function Hf(e,t={}){let n=Vd();const{resultEqualityCheck:i}=t;let a,l=0;function u(){let f=n;const{length:h}=arguments;for(let y=0,v=h;y<v;y++){const S=arguments[y];if(typeof S=="function"||typeof S=="object"&&S!==null){let w=f.o;w===null&&(f.o=w=new WeakMap);const D=w.get(S);D===void 0?(f=Vd(),w.set(S,f)):f=D}else{let w=f.p;w===null&&(f.p=w=new Map);const D=w.get(S);D===void 0?(f=Vd(),w.set(S,f)):f=D}}const p=f;let g;if(f.s===oE)g=f.v;else if(g=e.apply(null,arguments),l++,i){const y=a?.deref?.()??a;y!=null&&i(y,g)&&(g=y,l!==0&&l--),a=typeof g=="object"&&g!==null||typeof g=="function"?new m3(g):g}return p.s=oE,p.v=g,g}return u.clearCache=()=>{n=Vd(),u.resetResultsCount()},u.resultsCount=()=>l,u.resetResultsCount=()=>{l=0},u}function y3(e,...t){const n=typeof e=="function"?{memoize:e,memoizeOptions:t}:e,i=(...a)=>{let l=0,u=0,f,h={},p=a.pop();typeof p=="object"&&(h=p,p=a.pop()),c3(p,`createSelector expects an output function after the inputs, but received: [${typeof p}]`);const g={...n,...h},{memoize:y,memoizeOptions:v=[],argsMemoize:S=Hf,argsMemoizeOptions:w=[]}=g,D=aE(v),C=aE(w),I=f3(a),k=y(function(){return l++,p.apply(null,arguments)},...D),x=S(function(){u++;const N=h3(I,arguments);return f=k.apply(null,N),f},...C);return Object.assign(x,{resultFunc:p,memoizedResultFunc:k,dependencies:I,dependencyRecomputations:()=>u,resetDependencyRecomputations:()=>{u=0},lastResult:()=>f,recomputations:()=>l,resetRecomputations:()=>{l=0},memoize:y,argsMemoize:S})};return Object.assign(i,{withTypes:()=>i}),i}var bi=y3(Hf),v3=Object.assign((e,t=bi)=>{u3(e,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);const n=Object.keys(e),i=n.map(l=>e[l]);return t(i,(...l)=>l.reduce((u,f,h)=>(u[n[h]]=f,u),{}))},{withTypes:()=>v3});function CR(e){return({dispatch:n,getState:i})=>a=>l=>typeof l=="function"?l(n,i,e):a(l)}var _3=CR(),b3=CR,S3=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?zf:zf.apply(null,arguments)},w3=e=>e&&typeof e.match=="function";function cr(e,t){function n(...i){if(t){let a=t(...i);if(!a)throw new Error(ur(0));return{type:e,payload:a.payload,..."meta"in a&&{meta:a.meta},..."error"in a&&{error:a.error}}}return{type:e,payload:i[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=i=>_R(i)&&i.type===e,n}var RR=class vc extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,vc.prototype)}static get[Symbol.species](){return vc}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new vc(...t[0].concat(this)):new vc(...t.concat(this))}};function lE(e){return pr(e)?uu(e,()=>{}):e}function Gd(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function E3(e){return typeof e=="boolean"}var x3=()=>function(t){const{thunk:n=!0,immutableCheck:i=!0,serializableCheck:a=!0,actionCreatorCheck:l=!0}=t??{};let u=new RR;return n&&(E3(n)?u.push(_3):u.push(b3(n.extraArgument))),u},Mh="RTK_autoBatch",nc=()=>e=>({payload:e,meta:{[Mh]:!0}}),cE=e=>t=>{setTimeout(t,e)},T3=(e={type:"raf"})=>t=>(...n)=>{const i=t(...n);let a=!0,l=!1,u=!1;const f=new Set,h=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:cE(10):e.type==="callback"?e.queueNotification:cE(e.timeout),p=()=>{u=!1,l&&(l=!1,f.forEach(g=>g()))};return Object.assign({},i,{subscribe(g){const y=()=>a&&g(),v=i.subscribe(y);return f.add(g),()=>{v(),f.delete(g)}},dispatch(g){try{return a=!g?.meta?.[Mh],l=!a,l&&(u||(u=!0,h(p))),i.dispatch(g)}finally{a=!0}}})},C3=e=>function(n){const{autoBatch:i=!0}=n??{};let a=new RR(e);return i&&a.push(T3(typeof i=="object"?i:void 0)),a};function R3(e){const t=x3(),{reducer:n=void 0,middleware:i,devTools:a=!0,preloadedState:l=void 0,enhancers:u=void 0}=e||{};let f;if(typeof n=="function")f=n;else if(us(n))f=vR(n);else throw new Error(ur(1));let h;typeof i=="function"?h=i(t):h=t();let p=zf;a&&(p=S3({trace:!1,...typeof a=="object"&&a}));const g=K6(...h),y=C3(g);let v=typeof u=="function"?u(y):y();const S=p(...v);return yR(f,l,S)}function AR(e){const t={},n=[];let i;const a={addCase(l,u){const f=typeof l=="string"?l:l.type;if(!f)throw new Error(ur(28));if(f in t)throw new Error(ur(29));return t[f]=u,a},addAsyncThunk(l,u){return u.pending&&(t[l.pending.type]=u.pending),u.rejected&&(t[l.rejected.type]=u.rejected),u.fulfilled&&(t[l.fulfilled.type]=u.fulfilled),u.settled&&n.push({matcher:l.settled,reducer:u.settled}),a},addMatcher(l,u){return n.push({matcher:l,reducer:u}),a},addDefaultCase(l){return i=l,a}};return e(a),[t,n,i]}function A3(e){return typeof e=="function"}function I3(e,t){let[n,i,a]=AR(t),l;if(A3(e))l=()=>lE(e());else{const f=lE(e);l=()=>f}function u(f=l(),h){let p=[n[h.type],...i.filter(({matcher:g})=>g(h)).map(({reducer:g})=>g)];return p.filter(g=>!!g).length===0&&(p=[a]),p.reduce((g,y)=>{if(y)if(Mr(g)){const S=y(g,h);return S===void 0?g:S}else{if(pr(g))return uu(g,v=>y(v,h));{const v=y(g,h);if(v===void 0){if(g===null)return g;throw Error("A case reducer on a non-draftable value must not return undefined")}return v}}return g},f)}return u.getInitialState=l,u}var IR=(e,t)=>w3(e)?e.match(t):e(t);function pi(...e){return t=>e.some(n=>IR(n,t))}function Cc(...e){return t=>e.every(n=>IR(n,t))}function kh(e,t){if(!e||!e.meta)return!1;const n=typeof e.meta.requestId=="string",i=t.indexOf(e.meta.requestStatus)>-1;return n&&i}function du(e){return typeof e[0]=="function"&&"pending"in e[0]&&"fulfilled"in e[0]&&"rejected"in e[0]}function Qv(...e){return e.length===0?t=>kh(t,["pending"]):du(e)?pi(...e.map(t=>t.pending)):Qv()(e[0])}function Po(...e){return e.length===0?t=>kh(t,["rejected"]):du(e)?pi(...e.map(t=>t.rejected)):Po()(e[0])}function Lh(...e){const t=n=>n&&n.meta&&n.meta.rejectedWithValue;return e.length===0?Cc(Po(...e),t):du(e)?Cc(Po(...e),t):Lh()(e[0])}function ds(...e){return e.length===0?t=>kh(t,["fulfilled"]):du(e)?pi(...e.map(t=>t.fulfilled)):ds()(e[0])}function jy(...e){return e.length===0?t=>kh(t,["pending","fulfilled","rejected"]):du(e)?pi(...e.flatMap(t=>[t.pending,t.rejected,t.fulfilled])):jy()(e[0])}var D3="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",Wv=(e=21)=>{let t="",n=e;for(;n--;)t+=D3[Math.random()*64|0];return t},O3=["name","message","stack","code"],jg=class{constructor(e,t){this.payload=e,this.meta=t}_type},uE=class{constructor(e,t){this.payload=e,this.meta=t}_type},N3=e=>{if(typeof e=="object"&&e!==null){const t={};for(const n of O3)typeof e[n]=="string"&&(t[n]=e[n]);return t}return{message:String(e)}},dE="External signal was aborted",fE=(()=>{function e(t,n,i){const a=cr(t+"/fulfilled",(h,p,g,y)=>({payload:h,meta:{...y||{},arg:g,requestId:p,requestStatus:"fulfilled"}})),l=cr(t+"/pending",(h,p,g)=>({payload:void 0,meta:{...g||{},arg:p,requestId:h,requestStatus:"pending"}})),u=cr(t+"/rejected",(h,p,g,y,v)=>({payload:y,error:(i&&i.serializeError||N3)(h||"Rejected"),meta:{...v||{},arg:g,requestId:p,rejectedWithValue:!!y,requestStatus:"rejected",aborted:h?.name==="AbortError",condition:h?.name==="ConditionError"}}));function f(h,{signal:p}={}){return(g,y,v)=>{const S=i?.idGenerator?i.idGenerator(h):Wv(),w=new AbortController;let D,C;function I(x){C=x,w.abort()}p&&(p.aborted?I(dE):p.addEventListener("abort",()=>I(dE),{once:!0}));const k=(async function(){let x;try{let N=i?.condition?.(h,{getState:y,extra:v});if(k3(N)&&(N=await N),N===!1||w.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const T=new Promise((P,V)=>{D=()=>{V({name:"AbortError",message:C||"Aborted"})},w.signal.addEventListener("abort",D)});g(l(S,h,i?.getPendingMeta?.({requestId:S,arg:h},{getState:y,extra:v}))),x=await Promise.race([T,Promise.resolve(n(h,{dispatch:g,getState:y,extra:v,requestId:S,signal:w.signal,abort:I,rejectWithValue:(P,V)=>new jg(P,V),fulfillWithValue:(P,V)=>new uE(P,V)})).then(P=>{if(P instanceof jg)throw P;return P instanceof uE?a(P.payload,S,h,P.meta):a(P,S,h)})])}catch(N){x=N instanceof jg?u(null,S,h,N.payload,N.meta):u(N,S,h)}finally{D&&w.signal.removeEventListener("abort",D)}return i&&!i.dispatchConditionRejection&&u.match(x)&&x.meta.condition||g(x),x})();return Object.assign(k,{abort:I,requestId:S,arg:h,unwrap(){return k.then(M3)}})}}return Object.assign(f,{pending:l,rejected:u,fulfilled:a,settled:pi(u,a),typePrefix:t})}return e.withTypes=()=>e,e})();function M3(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function k3(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var L3=Symbol.for("rtk-slice-createasyncthunk");function P3(e,t){return`${e}/${t}`}function j3({creators:e}={}){const t=e?.asyncThunk?.[L3];return function(i){const{name:a,reducerPath:l=a}=i;if(!a)throw new Error(ur(11));const u=(typeof i.reducers=="function"?i.reducers(z3()):i.reducers)||{},f=Object.keys(u),h={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},p={addCase(x,A){const N=typeof x=="string"?x:x.type;if(!N)throw new Error(ur(12));if(N in h.sliceCaseReducersByType)throw new Error(ur(13));return h.sliceCaseReducersByType[N]=A,p},addMatcher(x,A){return h.sliceMatchers.push({matcher:x,reducer:A}),p},exposeAction(x,A){return h.actionCreators[x]=A,p},exposeCaseReducer(x,A){return h.sliceCaseReducersByName[x]=A,p}};f.forEach(x=>{const A=u[x],N={reducerName:x,type:P3(a,x),createNotation:typeof i.reducers=="function"};B3(A)?F3(N,A,p,t):$3(N,A,p)});function g(){const[x={},A=[],N=void 0]=typeof i.extraReducers=="function"?AR(i.extraReducers):[i.extraReducers],T={...x,...h.sliceCaseReducersByType};return I3(i.initialState,P=>{for(let V in T)P.addCase(V,T[V]);for(let V of h.sliceMatchers)P.addMatcher(V.matcher,V.reducer);for(let V of A)P.addMatcher(V.matcher,V.reducer);N&&P.addDefaultCase(N)})}const y=x=>x,v=new Map,S=new WeakMap;let w;function D(x,A){return w||(w=g()),w(x,A)}function C(){return w||(w=g()),w.getInitialState()}function I(x,A=!1){function N(P){let V=P[x];return typeof V>"u"&&A&&(V=Gd(S,N,C)),V}function T(P=y){const V=Gd(v,A,()=>new WeakMap);return Gd(V,P,()=>{const H={};for(const[B,$]of Object.entries(i.selectors??{}))H[B]=U3($,P,()=>Gd(S,P,C),A);return H})}return{reducerPath:x,getSelectors:T,get selectors(){return T(N)},selectSlice:N}}const k={name:a,reducer:D,actions:h.actionCreators,caseReducers:h.sliceCaseReducersByName,getInitialState:C,...I(l),injectInto(x,{reducerPath:A,...N}={}){const T=A??l;return x.inject({reducerPath:T,reducer:D},N),{...k,...I(T,!0)}}};return k}}function U3(e,t,n,i){function a(l,...u){let f=t(l);return typeof f>"u"&&i&&(f=n()),e(f,...u)}return a.unwrapped=e,a}var Ar=j3();function z3(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function $3({type:e,reducerName:t,createNotation:n},i,a){let l,u;if("reducer"in i){if(n&&!H3(i))throw new Error(ur(17));l=i.reducer,u=i.prepare}else l=i;a.addCase(e,l).exposeCaseReducer(t,l).exposeAction(t,u?cr(e,u):cr(e))}function B3(e){return e._reducerDefinitionType==="asyncThunk"}function H3(e){return e._reducerDefinitionType==="reducerWithPrepare"}function F3({type:e,reducerName:t},n,i,a){if(!a)throw new Error(ur(18));const{payloadCreator:l,fulfilled:u,pending:f,rejected:h,settled:p,options:g}=n,y=a(e,l,g);i.exposeAction(t,y),u&&i.addCase(y.fulfilled,u),f&&i.addCase(y.pending,f),h&&i.addCase(y.rejected,h),p&&i.addMatcher(y.settled,p),i.exposeCaseReducer(t,{fulfilled:u||Yd,pending:f||Yd,rejected:h||Yd,settled:p||Yd})}function Yd(){}function ur(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const Ko=e=>e.session,fu=bi([Ko],e=>{if(e.state==="fulfilled")return e.data?.id}),gs=RT,ct=AT,hu=R.createContext({refreshToken:()=>{},deleteToken:()=>Promise.reject("Not implemented")});var hE={};const pE="@firebase/database",mE="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let DR="";function q3(e){DR=e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V3{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,n){n==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),zt(n))}get(t){const n=this.domStorage_.getItem(this.prefixedName_(t));return n==null?null:jc(n)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G3{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,n){n==null?delete this.cache_[t]:this.cache_[t]=n}get(t){return kr(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR=function(e){try{if(typeof window<"u"&&typeof window[e]<"u"){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new V3(t)}}catch{}return new G3},na=OR("localStorage"),Y3=OR("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=new Lv("@firebase/database"),Q3=(function(){let e=1;return function(){return e++}})(),NR=function(e){const t=oP(e),n=new rP;n.update(t);const i=n.digest();return Nv.encodeByteArray(i)},pu=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?t+=pu.apply(null,i):typeof i=="object"?t+=zt(i):t+=i,t+=" "}return t};let Rc=null,gE=!0;const W3=function(e,t){he(!0,"Can't turn on custom loggers persistently."),Eo.logLevel=lt.VERBOSE,Rc=Eo.log.bind(Eo)},Jt=function(...e){if(gE===!0&&(gE=!1,Rc===null&&Y3.get("logging_enabled")===!0&&W3()),Rc){const t=pu.apply(null,e);Rc(t)}},mu=function(e){return function(...t){Jt(e,...t)}},Uy=function(...e){const t="FIREBASE INTERNAL ERROR: "+pu(...e);Eo.error(t)},mi=function(...e){const t=`FIREBASE FATAL ERROR: ${pu(...e)}`;throw Eo.error(t),new Error(t)},dn=function(...e){const t="FIREBASE WARNING: "+pu(...e);Eo.warn(t)},K3=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&dn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Kv=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},X3=function(e){if(document.readyState==="complete")e();else{let t=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},jo="[MIN_NAME]",ga="[MAX_NAME]",Ea=function(e,t){if(e===t)return 0;if(e===jo||t===ga)return-1;if(t===jo||e===ga)return 1;{const n=yE(e),i=yE(t);return n!==null?i!==null?n-i===0?e.length-t.length:n-i:-1:i!==null?1:e<t?-1:1}},Z3=function(e,t){return e===t?0:e<t?-1:1},rc=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+zt(t))},Xv=function(e){if(typeof e!="object"||e===null)return zt(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)i!==0&&(n+=","),n+=zt(t[i]),n+=":",n+=Xv(e[t[i]]);return n+="}",n},MR=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let a=0;a<n;a+=t)a+t>n?i.push(e.substring(a,n)):i.push(e.substring(a,a+t));return i};function tn(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const kR=function(e){he(!Kv(e),"Invalid JSON number");const t=11,n=52,i=(1<<t-1)-1;let a,l,u,f,h;e===0?(l=0,u=0,a=1/e===-1/0?1:0):(a=e<0,e=Math.abs(e),e>=Math.pow(2,1-i)?(f=Math.min(Math.floor(Math.log(e)/Math.LN2),i),l=f+i,u=Math.round(e*Math.pow(2,n-f)-Math.pow(2,n))):(l=0,u=Math.round(e/Math.pow(2,1-i-n))));const p=[];for(h=n;h;h-=1)p.push(u%2?1:0),u=Math.floor(u/2);for(h=t;h;h-=1)p.push(l%2?1:0),l=Math.floor(l/2);p.push(a?1:0),p.reverse();const g=p.join("");let y="";for(h=0;h<64;h+=8){let v=parseInt(g.substr(h,8),2).toString(16);v.length===1&&(v="0"+v),y=y+v}return y.toLowerCase()},J3=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ej=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function tj(e,t){let n="Unknown Error";e==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":e==="permission_denied"?n="Client doesn't have permission to access the desired data.":e==="unavailable"&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}const nj=new RegExp("^-?(0*)\\d{1,10}$"),rj=-2147483648,ij=2147483647,yE=function(e){if(nj.test(e)){const t=Number(e);if(t>=rj&&t<=ij)return t}return null},Xo=function(e){try{e()}catch(t){setTimeout(()=>{const n=t.stack||"";throw dn("Exception was thrown by user callback.",n),t},Math.floor(0))}},sj=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ac=function(e,t){const n=setTimeout(e,t);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class aj{constructor(t,n){this.appCheckProvider=n,this.appName=t.name,Nn(t)&&t.settings.appCheckToken&&(this.serverAppAppCheckToken=t.settings.appCheckToken),this.appCheck=n?.getImmediate({optional:!0}),this.appCheck||n?.get().then(i=>this.appCheck=i)}getToken(t){if(this.serverAppAppCheckToken){if(t)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(t):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(n,i):n(null)},0)})}addTokenChangeListener(t){this.appCheckProvider?.get().then(n=>n.addTokenListener(t))}notifyForInvalidToken(){dn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oj{constructor(t,n,i){this.appName_=t,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(a=>this.auth_=a)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(n=>n&&n.code==="auth/token-not-initialized"?(Jt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(n,i):n(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(n=>n.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(n=>n.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',dn(t)}}class vf{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}vf.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv="5",LR="v",PR="s",jR="r",UR="f",zR=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,$R="ls",BR="p",zy="ac",HR="websocket",FR="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(t,n,i,a,l=!1,u="",f=!1,h=!1,p=null){this.secure=n,this.namespace=i,this.webSocketOnly=a,this.nodeAdmin=l,this.persistenceKey=u,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=h,this.emulatorOptions=p,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=na.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&na.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${n}`}}function lj(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function VR(e,t,n){he(typeof t=="string","typeof type must == string"),he(typeof n=="object","typeof params must == object");let i;if(t===HR)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===FR)i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);lj(e)&&(n.ns=e.namespace);const a=[];return tn(n,(l,u)=>{a.push(l+"="+u)}),i+a.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cj{constructor(){this.counters_={}}incrementCounter(t,n=1){kr(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=n}get(){return jL(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug={},zg={};function Jv(e){const t=e.toString();return Ug[t]||(Ug[t]=new cj),Ug[t]}function uj(e,t){const n=e.toString();return zg[n]||(zg[n]=t()),zg[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dj{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,n){this.closeAfterResponse=t,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,n){for(this.pendingResponses[t]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<i.length;++a)i[a]&&Xo(()=>{this.onMessage_(i[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE="start",fj="close",hj="pLPCommand",pj="pRTLPCB",GR="id",YR="pw",QR="ser",mj="cb",gj="seg",yj="ts",vj="d",_j="dframe",WR=1870,KR=30,bj=WR-KR,Sj=25e3,wj=3e4;class bo{constructor(t,n,i,a,l,u,f){this.connId=t,this.repoInfo=n,this.applicationId=i,this.appCheckToken=a,this.authToken=l,this.transportSessionId=u,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=mu(t),this.stats_=Jv(n),this.urlFn=h=>(this.appCheckToken&&(h[zy]=this.appCheckToken),VR(n,FR,h))}open(t,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new dj(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(wj)),X3(()=>{if(this.isClosed_)return;this.scriptTagHolder=new e_((...l)=>{const[u,f,h,p,g]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===vE)this.id=f,this.password=h;else if(u===fj)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...l)=>{const[u,f]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(u,f)},()=>{this.onClosed_()},this.urlFn);const i={};i[vE]="t",i[QR]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[mj]=this.scriptTagHolder.uniqueCallbackIdentifier),i[LR]=Zv,this.transportSessionId&&(i[PR]=this.transportSessionId),this.lastSessionId&&(i[$R]=this.lastSessionId),this.applicationId&&(i[BR]=this.applicationId),this.appCheckToken&&(i[zy]=this.appCheckToken),typeof location<"u"&&location.hostname&&zR.test(location.hostname)&&(i[jR]=UR);const a=this.urlFn(i);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){bo.forceAllow_=!0}static forceDisallow(){bo.forceDisallow_=!0}static isAvailable(){return bo.forceAllow_?!0:!bo.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!J3()&&!ej()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const n=zt(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=DC(n),a=MR(i,bj);for(let l=0;l<a.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[l]),this.curSegmentNum++}addDisconnectPingFrame(t,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[_j]="t",i[GR]=t,i[YR]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const n=zt(t).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class e_{constructor(t,n,i,a){this.onDisconnect=i,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Q3(),window[hj+this.uniqueCallbackIdentifier]=t,window[pj+this.uniqueCallbackIdentifier]=n,this.myIFrame=e_.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(f){Jt("frame writing exception"),f.stack&&Jt(f.stack),Jt(f)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||Jt("No IE domain setting required")}catch{const i=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,n){for(this.myID=t,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[GR]=this.myID,t[YR]=this.myPW,t[QR]=this.currentSerial;let n=this.urlFn(t),i="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+KR+i.length<=WR;){const u=this.pendingSegs.shift();i=i+"&"+gj+a+"="+u.seg+"&"+yj+a+"="+u.ts+"&"+vj+a+"="+u.d,a++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(t,n,i){this.pendingSegs.push({seg:t,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(t,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},a=setTimeout(i,Math.floor(Sj)),l=()=>{clearTimeout(a),i()};this.addTag(t,l)}addTag(t,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=t,i.onload=i.onreadystatechange=function(){const a=i.readyState;(!a||a==="loaded"||a==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Jt("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ej=16384,xj=45e3;let Ff=null;typeof MozWebSocket<"u"?Ff=MozWebSocket:typeof WebSocket<"u"&&(Ff=WebSocket);class sr{constructor(t,n,i,a,l,u,f){this.connId=t,this.applicationId=i,this.appCheckToken=a,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=mu(this.connId),this.stats_=Jv(n),this.connURL=sr.connectionURL_(n,u,f,a,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(t,n,i,a,l){const u={};return u[LR]=Zv,typeof location<"u"&&location.hostname&&zR.test(location.hostname)&&(u[jR]=UR),n&&(u[PR]=n),i&&(u[$R]=i),a&&(u[zy]=a),l&&(u[BR]=l),VR(t,HR,u)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,na.set("previous_websocket_failure",!0);try{let i;KL(),this.mySock=new Ff(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const a=i.message||i.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const a=i.message||i.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){sr.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(t=!0)}return!t&&Ff!==null&&!sr.forceDisallow_}static previouslyFailed(){return na.isInMemoryStorage||na.get("previous_websocket_failure")===!0}markConnectionHealthy(){na.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=jc(n);this.onMessage(i)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(he(this.frames===null,"We already have a frame buffer"),t.length<=6){const n=Number(t);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const n=t.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(t){this.resetKeepAlive();const n=zt(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=MR(n,Ej);i.length>1&&this.sendString_(String(i.length));for(let a=0;a<i.length;a++)this.sendString_(i[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(xj))}sendString_(t){try{this.mySock.send(t)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}sr.responsesRequiredToBeHealthy=2;sr.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{static get ALL_TRANSPORTS(){return[bo,sr]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(t){this.initTransports_(t)}initTransports_(t){const n=sr&&sr.isAvailable();let i=n&&!sr.previouslyFailed();if(t.webSocketOnly&&(n||dn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[sr];else{const a=this.transports_=[];for(const l of Gc.ALL_TRANSPORTS)l&&l.isAvailable()&&a.push(l);Gc.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Gc.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tj=6e4,Cj=5e3,Rj=10*1024,Aj=100*1024,$g="t",_E="d",Ij="s",bE="r",Dj="e",SE="o",wE="a",EE="n",xE="p",Oj="h";class Nj{constructor(t,n,i,a,l,u,f,h,p,g){this.id=t,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=a,this.authToken_=l,this.onMessage_=u,this.onReady_=f,this.onDisconnect_=h,this.onKill_=p,this.lastSessionId=g,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=mu("c:"+this.id+":"),this.transportManager_=new Gc(n),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const a=t.healthyTimeout||0;a>0&&(this.healthyTimeout_=Ac(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Aj?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Rj?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return n=>{t===this.conn_?this.onConnectionLost_(n):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return n=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(n):t===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(t){const n={t:"d",d:t};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if($g in t){const n=t[$g];n===wE?this.upgradeIfSecondaryHealthy_():n===bE?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===SE&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const n=rc("t",t),i=rc("d",t);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:xE,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:wE,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:EE,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const n=rc("t",t),i=rc("d",t);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const n=rc($g,t);if(_E in t){const i=t[_E];if(n===Oj){const a={...i};this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(n===EE){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Ij?this.onConnectionShutdown_(i):n===bE?this.onReset_(i):n===Dj?Uy("Server Error: "+i):n===SE?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Uy("Unknown control packet command: "+n)}}onHandshake_(t){const n=t.ts,i=t.v,a=t.h;this.sessionId=t.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Zv!==i&&dn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Ac(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Tj))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,n){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ac(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Cj))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:xE,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(na.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{put(t,n,i,a){}merge(t,n,i,a){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,n,i){}onDisconnectMerge(t,n,i){}onDisconnectCancel(t,n){}reportStats(t){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(t){this.allowedEvents_=t,this.listeners_={},he(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...n){if(Array.isArray(this.listeners_[t])){const i=[...this.listeners_[t]];for(let a=0;a<i.length;a++)i[a].callback.apply(i[a].context,n)}}on(t,n,i){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:n,context:i});const a=this.getInitialEvent(t);a&&n.apply(i,a)}off(t,n,i){this.validateEventType_(t);const a=this.listeners_[t]||[];for(let l=0;l<a.length;l++)if(a[l].callback===n&&(!i||i===a[l].context)){a.splice(l,1);return}}validateEventType_(t){he(this.allowedEvents_.find(n=>n===t),"Unknown event: "+t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf extends ZR{static getInstance(){return new qf}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!kv()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(t){return he(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE=32,CE=768;class ut{constructor(t,n){if(n===void 0){this.pieces_=t.split("/");let i=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[i]=this.pieces_[a],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=n}toString(){let t="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(t+="/"+this.pieces_[n]);return t||"/"}}function Xe(){return new ut("")}function Fe(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function fs(e){return e.pieces_.length-e.pieceNum_}function pt(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ut(e.pieces_,t)}function t_(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Mj(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)e.pieces_[n]!==""&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function Yc(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function JR(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ut(t,0)}function Rt(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof ut)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const i=t.split("/");for(let a=0;a<i.length;a++)i[a].length>0&&n.push(i[a])}return new ut(n,0)}function Ye(e){return e.pieceNum_>=e.pieces_.length}function un(e,t){const n=Fe(e),i=Fe(t);if(n===null)return t;if(n===i)return un(pt(e),pt(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function kj(e,t){const n=Yc(e,0),i=Yc(t,0);for(let a=0;a<n.length&&a<i.length;a++){const l=Ea(n[a],i[a]);if(l!==0)return l}return n.length===i.length?0:n.length<i.length?-1:1}function n_(e,t){if(fs(e)!==fs(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Qn(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(fs(e)>fs(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Lj{constructor(t,n){this.errorPrefix_=n,this.parts_=Yc(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Rh(this.parts_[i]);eA(this)}}function Pj(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Rh(t),eA(e)}function jj(e){const t=e.parts_.pop();e.byteLength_-=Rh(t),e.parts_.length>0&&(e.byteLength_-=1)}function eA(e){if(e.byteLength_>CE)throw new Error(e.errorPrefix_+"has a key path longer than "+CE+" bytes ("+e.byteLength_+").");if(e.parts_.length>TE)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+TE+") or object contains a cycle "+Zs(e))}function Zs(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_ extends ZR{static getInstance(){return new r_}constructor(){super(["visible"]);let t,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[t];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(t){return he(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic=1e3,Uj=300*1e3,RE=30*1e3,zj=1.3,$j=3e4,Bj="server_kill",AE=3;class di extends XR{constructor(t,n,i,a,l,u,f,h){if(super(),this.repoInfo_=t,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=a,this.onServerInfoUpdate_=l,this.authTokenProvider_=u,this.appCheckTokenProvider_=f,this.authOverride_=h,this.id=di.nextPersistentConnectionId_++,this.log_=mu("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ic,this.maxReconnectDelay_=Uj,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,h)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");r_.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&qf.getInstance().on("online",this.onOnline_,this)}sendRequest(t,n,i){const a=++this.requestNumber_,l={r:a,a:t,b:n};this.log_(zt(l)),he(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),i&&(this.requestCBHash_[a]=i)}get(t){this.initConnection_();const n=new lu,a={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:u=>{const f=u.d;u.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),n.promise}listen(t,n,i,a){this.initConnection_();const l=t._queryIdentifier,u=t._path.toString();this.log_("Listen called for "+u+" "+l),this.listens.has(u)||this.listens.set(u,new Map),he(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),he(!this.listens.get(u).has(l),"listen() called twice for same path/queryId.");const f={onComplete:a,hashFn:n,query:t,tag:i};this.listens.get(u).set(l,f),this.connected_&&this.sendListen_(f)}sendGet_(t){const n=this.outstandingGets_[t];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(t){const n=t.query,i=n._path.toString(),a=n._queryIdentifier;this.log_("Listen on "+i+" for "+a);const l={p:i},u="q";t.tag&&(l.q=n._queryObject,l.t=t.tag),l.h=t.hashFn(),this.sendRequest(u,l,f=>{const h=f.d,p=f.s;di.warnOnListenWarnings_(h,n),(this.listens.get(i)&&this.listens.get(i).get(a))===t&&(this.log_("listen response",f),p!=="ok"&&this.removeListen_(i,a),t.onComplete&&t.onComplete(p,h))})}static warnOnListenWarnings_(t,n){if(t&&typeof t=="object"&&kr(t,"w")){const i=ko(t,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const a='".indexOn": "'+n._queryParams.getIndex().toString()+'"',l=n._path.toString();dn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||nP(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=RE)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,n=tP(t)?"auth":"gauth",i={cred:t};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,a=>{const l=a.s,u=a.d||"error";this.authToken_===t&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const n=t.s,i=t.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(t,n){const i=t._path.toString(),a=t._queryIdentifier;this.log_("Unlisten called for "+i+" "+a),he(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,a)&&this.connected_&&this.sendUnlisten_(i,a,t._queryObject,n)}sendUnlisten_(t,n,i,a){this.log_("Unlisten on "+t+" for "+n);const l={p:t},u="n";a&&(l.q=i,l.t=a),this.sendRequest(u,l)}onDisconnectPut(t,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,n,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:n,onComplete:i})}onDisconnectMerge(t,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,n,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:n,onComplete:i})}onDisconnectCancel(t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(t,n,i,a){const l={p:n,d:i};this.log_("onDisconnect "+t,l),this.sendRequest(t,l,u=>{a&&setTimeout(()=>{a(u.s,u.d)},Math.floor(0))})}put(t,n,i,a){this.putInternal("p",t,n,i,a)}merge(t,n,i,a){this.putInternal("m",t,n,i,a)}putInternal(t,n,i,a,l){this.initConnection_();const u={p:n,d:i};l!==void 0&&(u.h=l),this.outstandingPuts_.push({action:t,request:u,onComplete:a}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(t){const n=this.outstandingPuts_[t].action,i=this.outstandingPuts_[t].request,a=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(n,i,l=>{this.log_(n+" response",l),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(l.s,l.d)})}reportStats(t){if(this.connected_){const n={c:t};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const l=i.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+zt(t));const n=t.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,n){this.log_("handleServerMessage",t,n),t==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):t==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):t==="c"?this.onListenRevoked_(n.p,n.q):t==="ac"?this.onAuthRevoked_(n.s,n.d):t==="apc"?this.onAppCheckRevoked_(n.s,n.d):t==="sd"?this.onSecurityDebugPacket_(n):Uy("Unrecognized action received from server: "+zt(t)+`
Are you using the latest client?`)}onReady_(t,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){he(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ic,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=ic,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>$j&&(this.reconnectDelay_=ic),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-t);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*zj)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+di.nextConnectionId_++,l=this.lastSessionId;let u=!1,f=null;const h=function(){f?f.close():(u=!0,i())},p=function(y){he(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(y)};this.realtime_={close:h,sendRequest:p};const g=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[y,v]=await Promise.all([this.authTokenProvider_.getToken(g),this.appCheckTokenProvider_.getToken(g)]);u?Jt("getToken() completed but was canceled"):(Jt("getToken() completed. Creating connection."),this.authToken_=y&&y.accessToken,this.appCheckToken_=v&&v.token,f=new Nj(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,i,S=>{dn(S+" ("+this.repoInfo_.toString()+")"),this.interrupt(Bj)},l))}catch(y){this.log_("Failed to get token: "+y),u||(this.repoInfo_.nodeAdmin&&dn(y),h())}}}interrupt(t){Jt("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){Jt("Resuming connection for reason: "+t),delete this.interruptReasons_[t],xy(this.interruptReasons_)&&(this.reconnectDelay_=ic,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const n=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const n=this.outstandingPuts_[t];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,n){let i;n?i=n.map(l=>Xv(l)).join("$"):i="default";const a=this.removeListen_(t,i);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(t,n){const i=new ut(t).toString();let a;if(this.listens.has(i)){const l=this.listens.get(i);a=l.get(n),l.delete(n),l.size===0&&this.listens.delete(i)}else a=void 0;return a}onAuthRevoked_(t,n){Jt("Auth token revoked: "+t+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=AE&&(this.reconnectDelay_=RE,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,n){Jt("App check token revoked: "+t+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=AE&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const n of t.values())this.sendListen_(n);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let n="js";t["sdk."+n+"."+DR.replace(/\./g,"-")]=1,kv()?t["framework.cordova"]=1:jC()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=qf.getInstance().currentlyOnline();return xy(this.interruptReasons_)&&t}}di.nextPersistentConnectionId_=0;di.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ph{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,n){const i=new qe(jo,t),a=new qe(jo,n);return this.compare(i,a)!==0}minPost(){return qe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qd;class tA extends Ph{static get __EMPTY_NODE(){return Qd}static set __EMPTY_NODE(t){Qd=t}compare(t,n){return Ea(t.name,n.name)}isDefinedOn(t){throw qo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,n){return!1}minPost(){return qe.MIN}maxPost(){return new qe(ga,Qd)}makePost(t,n){return he(typeof t=="string","KeyIndex indexValue must always be a string."),new qe(t,Qd)}toString(){return".key"}}const xo=new tA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(t,n,i,a,l=null){this.isReverse_=a,this.resultGenerator_=l,this.nodeStack_=[];let u=1;for(;!t.isEmpty();)if(t=t,u=n?i(t.key,n):1,a&&(u*=-1),u<0)this.isReverse_?t=t.left:t=t.right;else if(u===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(t.key,t.value):n={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class Vt{constructor(t,n,i,a,l){this.key=t,this.value=n,this.color=i??Vt.RED,this.left=a??bn.EMPTY_NODE,this.right=l??bn.EMPTY_NODE}copy(t,n,i,a,l){return new Vt(t??this.key,n??this.value,i??this.color,a??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,i){let a=this;const l=i(t,a.key);return l<0?a=a.copy(null,null,null,a.left.insert(t,n,i),null):l===0?a=a.copy(null,n,null,null,null):a=a.copy(null,null,null,null,a.right.insert(t,n,i)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return bn.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,n){let i,a;if(i=this,n(t,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(t,i.key)===0){if(i.right.isEmpty())return bn.EMPTY_NODE;a=i.right.min_(),i=i.copy(a.key,a.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,Vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,Vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}Vt.RED=!0;Vt.BLACK=!1;class Hj{copy(t,n,i,a,l){return this}insert(t,n,i){return new Vt(t,n,null)}remove(t,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class bn{constructor(t,n=bn.EMPTY_NODE){this.comparator_=t,this.root_=n}insert(t,n){return new bn(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,Vt.BLACK,null,null))}remove(t){return new bn(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,Vt.BLACK,null,null))}get(t){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(t,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(t){let n,i=this.root_,a=null;for(;!i.isEmpty();)if(n=this.comparator_(t,i.key),n===0){if(i.left.isEmpty())return a?a.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(a=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new Wd(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,n){return new Wd(this.root_,t,this.comparator_,!1,n)}getReverseIteratorFrom(t,n){return new Wd(this.root_,t,this.comparator_,!0,n)}getReverseIterator(t){return new Wd(this.root_,null,this.comparator_,!0,t)}}bn.EMPTY_NODE=new Hj;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fj(e,t){return Ea(e.name,t.name)}function i_(e,t){return Ea(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $y;function qj(e){$y=e}const nA=function(e){return typeof e=="number"?"number:"+kR(e):"string:"+e},rA=function(e){if(e.isLeafNode()){const t=e.val();he(typeof t=="string"||typeof t=="number"||typeof t=="object"&&kr(t,".sv"),"Priority must be a string or number.")}else he(e===$y||e.isEmpty(),"priority of unexpected type.");he(e===$y||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let IE;class Ft{static set __childrenNodeConstructor(t){IE=t}static get __childrenNodeConstructor(){return IE}constructor(t,n=Ft.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=n,this.lazyHash_=null,he(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),rA(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new Ft(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:Ft.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return Ye(t)?this:Fe(t)===".priority"?this.priorityNode_:Ft.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,n){return null}updateImmediateChild(t,n){return t===".priority"?this.updatePriority(n):n.isEmpty()&&t!==".priority"?this:Ft.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}updateChild(t,n){const i=Fe(t);return i===null?n:n.isEmpty()&&i!==".priority"?this:(he(i!==".priority"||fs(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Ft.__childrenNodeConstructor.EMPTY_NODE.updateChild(pt(t),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,n){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+nA(this.priorityNode_.val())+":");const n=typeof this.value_;t+=n+":",n==="number"?t+=kR(this.value_):t+=this.value_,this.lazyHash_=NR(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===Ft.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof Ft.__childrenNodeConstructor?-1:(he(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const n=typeof t.value_,i=typeof this.value_,a=Ft.VALUE_TYPE_ORDER.indexOf(n),l=Ft.VALUE_TYPE_ORDER.indexOf(i);return he(a>=0,"Unknown leaf type: "+n),he(l>=0,"Unknown leaf type: "+i),a===l?i==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:l-a}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const n=t;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ft.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iA,sA;function Vj(e){iA=e}function Gj(e){sA=e}class Yj extends Ph{compare(t,n){const i=t.node.getPriority(),a=n.node.getPriority(),l=i.compareTo(a);return l===0?Ea(t.name,n.name):l}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,n){return!t.getPriority().equals(n.getPriority())}minPost(){return qe.MIN}maxPost(){return new qe(ga,new Ft("[PRIORITY-POST]",sA))}makePost(t,n){const i=iA(t);return new qe(n,new Ft("[PRIORITY-POST]",i))}toString(){return".priority"}}const At=new Yj;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qj=Math.log(2);class Wj{constructor(t){const n=l=>parseInt(Math.log(l)/Qj,10),i=l=>parseInt(Array(l+1).join("1"),2);this.count=n(t+1),this.current_=this.count-1;const a=i(this.count);this.bits_=t+1&a}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const Vf=function(e,t,n,i){e.sort(t);const a=function(h,p){const g=p-h;let y,v;if(g===0)return null;if(g===1)return y=e[h],v=n?n(y):y,new Vt(v,y.node,Vt.BLACK,null,null);{const S=parseInt(g/2,10)+h,w=a(h,S),D=a(S+1,p);return y=e[S],v=n?n(y):y,new Vt(v,y.node,Vt.BLACK,w,D)}},l=function(h){let p=null,g=null,y=e.length;const v=function(w,D){const C=y-w,I=y;y-=w;const k=a(C+1,I),x=e[C],A=n?n(x):x;S(new Vt(A,x.node,D,null,k))},S=function(w){p?(p.left=w,p=w):(g=w,p=w)};for(let w=0;w<h.count;++w){const D=h.nextBitIsOne(),C=Math.pow(2,h.count-(w+1));D?v(C,Vt.BLACK):(v(C,Vt.BLACK),v(C,Vt.RED))}return g},u=new Wj(e.length),f=l(u);return new bn(i||t,f)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bg;const ho={};class oi{static get Default(){return he(ho&&At,"ChildrenNode.ts has not been loaded"),Bg=Bg||new oi({".priority":ho},{".priority":At}),Bg}constructor(t,n){this.indexes_=t,this.indexSet_=n}get(t){const n=ko(this.indexes_,t);if(!n)throw new Error("No index defined for "+t);return n instanceof bn?n:null}hasIndex(t){return kr(this.indexSet_,t.toString())}addIndex(t,n){he(t!==xo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let a=!1;const l=n.getIterator(qe.Wrap);let u=l.getNext();for(;u;)a=a||t.isDefinedOn(u.node),i.push(u),u=l.getNext();let f;a?f=Vf(i,t.getCompare()):f=ho;const h=t.toString(),p={...this.indexSet_};p[h]=t;const g={...this.indexes_};return g[h]=f,new oi(g,p)}addToIndexes(t,n){const i=Lf(this.indexes_,(a,l)=>{const u=ko(this.indexSet_,l);if(he(u,"Missing index implementation for "+l),a===ho)if(u.isDefinedOn(t.node)){const f=[],h=n.getIterator(qe.Wrap);let p=h.getNext();for(;p;)p.name!==t.name&&f.push(p),p=h.getNext();return f.push(t),Vf(f,u.getCompare())}else return ho;else{const f=n.get(t.name);let h=a;return f&&(h=h.remove(new qe(t.name,f))),h.insert(t,t.node)}});return new oi(i,this.indexSet_)}removeFromIndexes(t,n){const i=Lf(this.indexes_,a=>{if(a===ho)return a;{const l=n.get(t.name);return l?a.remove(new qe(t.name,l)):a}});return new oi(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sc;class Ne{static get EMPTY_NODE(){return sc||(sc=new Ne(new bn(i_),null,oi.Default))}constructor(t,n,i){this.children_=t,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&rA(this.priorityNode_),this.children_.isEmpty()&&he(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||sc}updatePriority(t){return this.children_.isEmpty()?this:new Ne(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const n=this.children_.get(t);return n===null?sc:n}}getChild(t){const n=Fe(t);return n===null?this:this.getImmediateChild(n).getChild(pt(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,n){if(he(n,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(n);{const i=new qe(t,n);let a,l;n.isEmpty()?(a=this.children_.remove(t),l=this.indexMap_.removeFromIndexes(i,this.children_)):(a=this.children_.insert(t,n),l=this.indexMap_.addToIndexes(i,this.children_));const u=a.isEmpty()?sc:this.priorityNode_;return new Ne(a,u,l)}}updateChild(t,n){const i=Fe(t);if(i===null)return n;{he(Fe(t)!==".priority"||fs(t)===1,".priority must be the last token in a path");const a=this.getImmediateChild(i).updateChild(pt(t),n);return this.updateImmediateChild(i,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const n={};let i=0,a=0,l=!0;if(this.forEachChild(At,(u,f)=>{n[u]=f.val(t),i++,l&&Ne.INTEGER_REGEXP_.test(u)?a=Math.max(a,Number(u)):l=!1}),!t&&l&&a<2*i){const u=[];for(const f in n)u[f]=n[f];return u}else return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+nA(this.getPriority().val())+":"),this.forEachChild(At,(n,i)=>{const a=i.hash();a!==""&&(t+=":"+n+":"+a)}),this.lazyHash_=t===""?"":NR(t)}return this.lazyHash_}getPredecessorChildName(t,n,i){const a=this.resolveIndex_(i);if(a){const l=a.getPredecessorKey(new qe(t,n));return l?l.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const n=this.resolveIndex_(t);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(t){const n=this.getFirstChildName(t);return n?new qe(n,this.children_.get(n)):null}getLastChildName(t){const n=this.resolveIndex_(t);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(t){const n=this.getLastChildName(t);return n?new qe(n,this.children_.get(n)):null}forEachChild(t,n){const i=this.resolveIndex_(t);return i?i.inorderTraversal(a=>n(a.name,a.node)):this.children_.inorderTraversal(n)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(t,a=>a);{const a=this.children_.getIteratorFrom(t.name,qe.Wrap);let l=a.peek();for(;l!=null&&n.compare(l,t)<0;)a.getNext(),l=a.peek();return a}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(t,a=>a);{const a=this.children_.getReverseIteratorFrom(t.name,qe.Wrap);let l=a.peek();for(;l!=null&&n.compare(l,t)>0;)a.getNext(),l=a.peek();return a}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===gu?-1:0}withIndex(t){if(t===xo||this.indexMap_.hasIndex(t))return this;{const n=this.indexMap_.addIndex(t,this.children_);return new Ne(this.children_,this.priorityNode_,n)}}isIndexed(t){return t===xo||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const n=t;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(At),a=n.getIterator(At);let l=i.getNext(),u=a.getNext();for(;l&&u;){if(l.name!==u.name||!l.node.equals(u.node))return!1;l=i.getNext(),u=a.getNext()}return l===null&&u===null}else return!1;else return!1}}resolveIndex_(t){return t===xo?null:this.indexMap_.get(t.toString())}}Ne.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Kj extends Ne{constructor(){super(new bn(i_),Ne.EMPTY_NODE,oi.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return Ne.EMPTY_NODE}isEmpty(){return!1}}const gu=new Kj;Object.defineProperties(qe,{MIN:{value:new qe(jo,Ne.EMPTY_NODE)},MAX:{value:new qe(ga,gu)}});tA.__EMPTY_NODE=Ne.EMPTY_NODE;Ft.__childrenNodeConstructor=Ne;qj(gu);Gj(gu);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xj=!0;function Ut(e,t=null){if(e===null)return Ne.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(t=e[".priority"]),he(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){const n=e;return new Ft(n,Ut(t))}if(!(e instanceof Array)&&Xj){const n=[];let i=!1;if(tn(e,(u,f)=>{if(u.substring(0,1)!=="."){const h=Ut(f);h.isEmpty()||(i=i||!h.getPriority().isEmpty(),n.push(new qe(u,h)))}}),n.length===0)return Ne.EMPTY_NODE;const l=Vf(n,Fj,u=>u.name,i_);if(i){const u=Vf(n,At.getCompare());return new Ne(l,Ut(t),new oi({".priority":u},{".priority":At}))}else return new Ne(l,Ut(t),oi.Default)}else{let n=Ne.EMPTY_NODE;return tn(e,(i,a)=>{if(kr(e,i)&&i.substring(0,1)!=="."){const l=Ut(a);(l.isLeafNode()||!l.isEmpty())&&(n=n.updateImmediateChild(i,l))}}),n.updatePriority(Ut(t))}}Vj(Ut);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zj extends Ph{constructor(t){super(),this.indexPath_=t,he(!Ye(t)&&Fe(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,n){const i=this.extractChild(t.node),a=this.extractChild(n.node),l=i.compareTo(a);return l===0?Ea(t.name,n.name):l}makePost(t,n){const i=Ut(t),a=Ne.EMPTY_NODE.updateChild(this.indexPath_,i);return new qe(n,a)}maxPost(){const t=Ne.EMPTY_NODE.updateChild(this.indexPath_,gu);return new qe(ga,t)}toString(){return Yc(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jj extends Ph{compare(t,n){const i=t.node.compareTo(n.node);return i===0?Ea(t.name,n.name):i}isDefinedOn(t){return!0}indexedValueChanged(t,n){return!t.equals(n)}minPost(){return qe.MIN}maxPost(){return qe.MAX}makePost(t,n){const i=Ut(t);return new qe(n,i)}toString(){return".value"}}const e5=new Jj;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aA(e){return{type:"value",snapshotNode:e}}function Uo(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Qc(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Wc(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function t5(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(t){this.index_=t}updateChild(t,n,i,a,l,u){he(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=t.getImmediateChild(n);return f.getChild(a).equals(i.getChild(a))&&f.isEmpty()===i.isEmpty()||(u!=null&&(i.isEmpty()?t.hasChild(n)?u.trackChildChange(Qc(n,f)):he(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?u.trackChildChange(Uo(n,i)):u.trackChildChange(Wc(n,i,f))),t.isLeafNode()&&i.isEmpty())?t:t.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(t,n,i){return i!=null&&(t.isLeafNode()||t.forEachChild(At,(a,l)=>{n.hasChild(a)||i.trackChildChange(Qc(a,l))}),n.isLeafNode()||n.forEachChild(At,(a,l)=>{if(t.hasChild(a)){const u=t.getImmediateChild(a);u.equals(l)||i.trackChildChange(Wc(a,l,u))}else i.trackChildChange(Uo(a,l))})),n.withIndex(this.index_)}updatePriority(t,n){return t.isEmpty()?Ne.EMPTY_NODE:t.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(t){this.indexedFilter_=new s_(t.getIndex()),this.index_=t.getIndex(),this.startPost_=Kc.getStartPost_(t),this.endPost_=Kc.getEndPost_(t),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),t)<=0:this.index_.compare(this.getStartPost(),t)<0,i=this.endIsInclusive_?this.index_.compare(t,this.getEndPost())<=0:this.index_.compare(t,this.getEndPost())<0;return n&&i}updateChild(t,n,i,a,l,u){return this.matches(new qe(n,i))||(i=Ne.EMPTY_NODE),this.indexedFilter_.updateChild(t,n,i,a,l,u)}updateFullNode(t,n,i){n.isLeafNode()&&(n=Ne.EMPTY_NODE);let a=n.withIndex(this.index_);a=a.updatePriority(Ne.EMPTY_NODE);const l=this;return n.forEachChild(At,(u,f)=>{l.matches(new qe(u,f))||(a=a.updateImmediateChild(u,Ne.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,a,i)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const n=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),n)}else return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const n=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),n)}else return t.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n5{constructor(t){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Kc(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft(),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}updateChild(t,n,i,a,l,u){return this.rangedFilter_.matches(new qe(n,i))||(i=Ne.EMPTY_NODE),t.getImmediateChild(n).equals(i)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,n,i,a,l,u):this.fullLimitUpdateChild_(t,n,i,l,u)}updateFullNode(t,n,i){let a;if(n.isLeafNode()||n.isEmpty())a=Ne.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){a=Ne.EMPTY_NODE.withIndex(this.index_);let l;this.reverse_?l=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):l=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;l.hasNext()&&u<this.limit_;){const f=l.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))a=a.updateImmediateChild(f.name,f.node),u++;else break;else continue}}else{a=n.withIndex(this.index_),a=a.updatePriority(Ne.EMPTY_NODE);let l;this.reverse_?l=a.getReverseIterator(this.index_):l=a.getIterator(this.index_);let u=0;for(;l.hasNext();){const f=l.getNext();u<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?u++:a=a.updateImmediateChild(f.name,Ne.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,a,i)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,n,i,a,l){let u;if(this.reverse_){const y=this.index_.getCompare();u=(v,S)=>y(S,v)}else u=this.index_.getCompare();const f=t;he(f.numChildren()===this.limit_,"");const h=new qe(n,i),p=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),g=this.rangedFilter_.matches(h);if(f.hasChild(n)){const y=f.getImmediateChild(n);let v=a.getChildAfterChild(this.index_,p,this.reverse_);for(;v!=null&&(v.name===n||f.hasChild(v.name));)v=a.getChildAfterChild(this.index_,v,this.reverse_);const S=v==null?1:u(v,h);if(g&&!i.isEmpty()&&S>=0)return l?.trackChildChange(Wc(n,i,y)),f.updateImmediateChild(n,i);{l?.trackChildChange(Qc(n,y));const D=f.updateImmediateChild(n,Ne.EMPTY_NODE);return v!=null&&this.rangedFilter_.matches(v)?(l?.trackChildChange(Uo(v.name,v.node)),D.updateImmediateChild(v.name,v.node)):D}}else return i.isEmpty()?t:g&&u(p,h)>=0?(l!=null&&(l.trackChildChange(Qc(p.name,p.node)),l.trackChildChange(Uo(n,i))),f.updateImmediateChild(n,i).updateImmediateChild(p.name,Ne.EMPTY_NODE)):t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=At}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return he(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return he(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:jo}hasEnd(){return this.endSet_}getIndexEndValue(){return he(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return he(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ga}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return he(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===At}copy(){const t=new a_;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function r5(e){return e.loadsAllData()?new s_(e.getIndex()):e.hasLimit()?new n5(e):new Kc(e)}function DE(e){const t={};if(e.isDefault())return t;let n;if(e.index_===At?n="$priority":e.index_===e5?n="$value":e.index_===xo?n="$key":(he(e.index_ instanceof Zj,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=zt(n),e.startSet_){const i=e.startAfterSet_?"startAfter":"startAt";t[i]=zt(e.indexStartValue_),e.startNameSet_&&(t[i]+=","+zt(e.indexStartName_))}if(e.endSet_){const i=e.endBeforeSet_?"endBefore":"endAt";t[i]=zt(e.indexEndValue_),e.endNameSet_&&(t[i]+=","+zt(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function OE(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;n===""&&(e.isViewFromLeft()?n="l":n="r"),t.vf=n}return e.index_!==At&&(t.i=e.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf extends XR{reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,n){return n!==void 0?"tag$"+n:(he(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}constructor(t,n,i,a){super(),this.repoInfo_=t,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=a,this.log_=mu("p:rest:"),this.listens_={}}listen(t,n,i,a){const l=t._path.toString();this.log_("Listen called for "+l+" "+t._queryIdentifier);const u=Gf.getListenId_(t,i),f={};this.listens_[u]=f;const h=DE(t._queryParams);this.restRequest_(l+".json",h,(p,g)=>{let y=g;if(p===404&&(y=null,p=null),p===null&&this.onDataUpdate_(l,y,!1,i),ko(this.listens_,u)===f){let v;p?p===401?v="permission_denied":v="rest_error:"+p:v="ok",a(v,null)}})}unlisten(t,n){const i=Gf.getListenId_(t,n);delete this.listens_[i]}get(t){const n=DE(t._queryParams),i=t._path.toString(),a=new lu;return this.restRequest_(i+".json",n,(l,u)=>{let f=u;l===404&&(f=null,l=null),l===null?(this.onDataUpdate_(i,f,!1,null),a.resolve(f)):a.reject(new Error(f))}),a.promise}refreshAuthToken(t){}restRequest_(t,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,l])=>{a&&a.accessToken&&(n.auth=a.accessToken),l&&l.token&&(n.ac=l.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+Go(n);this.log_("Sending REST request for "+u);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(i&&f.readyState===4){this.log_("REST Response for "+u+" received. status:",f.status,"response:",f.responseText);let h=null;if(f.status>=200&&f.status<300){try{h=jc(f.responseText)}catch{dn("Failed to parse JSON response for "+u+": "+f.responseText)}i(null,h)}else f.status!==401&&f.status!==404&&dn("Got unsuccessful REST response for "+u+" Status: "+f.status),i(f.status);i=null}},f.open("GET",u,!0),f.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i5{constructor(){this.rootNode_=Ne.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,n){this.rootNode_=this.rootNode_.updateChild(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yf(){return{value:null,children:new Map}}function oA(e,t,n){if(Ye(t))e.value=n,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(t,n);else{const i=Fe(t);e.children.has(i)||e.children.set(i,Yf());const a=e.children.get(i);t=pt(t),oA(a,t,n)}}function By(e,t,n){e.value!==null?n(t,e.value):s5(e,(i,a)=>{const l=new ut(t.toString()+"/"+i);By(a,l,n)})}function s5(e,t){e.children.forEach((n,i)=>{t(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a5{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),n={...t};return this.last_&&tn(this.last_,(i,a)=>{n[i]=n[i]-a}),this.last_=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE=10*1e3,o5=30*1e3,l5=300*1e3;class c5{constructor(t,n){this.server_=n,this.statsToReport_={},this.statsListener_=new a5(t);const i=NE+(o5-NE)*Math.random();Ac(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const t=this.statsListener_.get(),n={};let i=!1;tn(t,(a,l)=>{l>0&&kr(this.statsToReport_,a)&&(n[a]=l,i=!0)}),i&&this.server_.reportStats(n),Ac(this.reportStats_.bind(this),Math.floor(Math.random()*2*l5))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ar;(function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ar||(ar={}));function o_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function l_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function c_(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(t,n,i){this.path=t,this.affectedTree=n,this.revert=i,this.type=ar.ACK_USER_WRITE,this.source=o_()}operationForChild(t){if(Ye(this.path)){if(this.affectedTree.value!=null)return he(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ut(t));return new Qf(Xe(),n,this.revert)}}else return he(Fe(this.path)===t,"operationForChild called for unrelated child."),new Qf(pt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(t,n){this.source=t,this.path=n,this.type=ar.LISTEN_COMPLETE}operationForChild(t){return Ye(this.path)?new Xc(this.source,Xe()):new Xc(this.source,pt(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(t,n,i){this.source=t,this.path=n,this.snap=i,this.type=ar.OVERWRITE}operationForChild(t){return Ye(this.path)?new ya(this.source,Xe(),this.snap.getImmediateChild(t)):new ya(this.source,pt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(t,n,i){this.source=t,this.path=n,this.children=i,this.type=ar.MERGE}operationForChild(t){if(Ye(this.path)){const n=this.children.subtree(new ut(t));return n.isEmpty()?null:n.value?new ya(this.source,Xe(),n.value):new zo(this.source,Xe(),n)}else return he(Fe(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new zo(this.source,pt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(t,n,i){this.node_=t,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(Ye(t))return this.isFullyInitialized()&&!this.filtered_;const n=Fe(t);return this.isCompleteForChild(n)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u5{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function d5(e,t,n,i){const a=[],l=[];return t.forEach(u=>{u.type==="child_changed"&&e.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&l.push(t5(u.childName,u.snapshotNode))}),ac(e,a,"child_removed",t,i,n),ac(e,a,"child_added",t,i,n),ac(e,a,"child_moved",l,i,n),ac(e,a,"child_changed",t,i,n),ac(e,a,"value",t,i,n),a}function ac(e,t,n,i,a,l){const u=i.filter(f=>f.type===n);u.sort((f,h)=>h5(e,f,h)),u.forEach(f=>{const h=f5(e,f,l);a.forEach(p=>{p.respondsTo(f.type)&&t.push(p.createEvent(h,e.query_))})})}function f5(e,t,n){return t.type==="value"||t.type==="child_removed"||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function h5(e,t,n){if(t.childName==null||n.childName==null)throw qo("Should only compare child_ events.");const i=new qe(t.childName,t.snapshotNode),a=new qe(n.childName,n.snapshotNode);return e.index_.compare(i,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(e,t){return{eventCache:e,serverCache:t}}function Ic(e,t,n,i){return jh(new hs(t,n,i),e.serverCache)}function lA(e,t,n,i){return jh(e.eventCache,new hs(t,n,i))}function Wf(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function va(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hg;const p5=()=>(Hg||(Hg=new bn(Z3)),Hg);class ht{static fromObject(t){let n=new ht(null);return tn(t,(i,a)=>{n=n.set(new ut(i),a)}),n}constructor(t,n=p5()){this.value=t,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,n){if(this.value!=null&&n(this.value))return{path:Xe(),value:this.value};if(Ye(t))return null;{const i=Fe(t),a=this.children.get(i);if(a!==null){const l=a.findRootMostMatchingPathAndValue(pt(t),n);return l!=null?{path:Rt(new ut(i),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(Ye(t))return this;{const n=Fe(t),i=this.children.get(n);return i!==null?i.subtree(pt(t)):new ht(null)}}set(t,n){if(Ye(t))return new ht(n,this.children);{const i=Fe(t),l=(this.children.get(i)||new ht(null)).set(pt(t),n),u=this.children.insert(i,l);return new ht(this.value,u)}}remove(t){if(Ye(t))return this.children.isEmpty()?new ht(null):new ht(null,this.children);{const n=Fe(t),i=this.children.get(n);if(i){const a=i.remove(pt(t));let l;return a.isEmpty()?l=this.children.remove(n):l=this.children.insert(n,a),this.value===null&&l.isEmpty()?new ht(null):new ht(this.value,l)}else return this}}get(t){if(Ye(t))return this.value;{const n=Fe(t),i=this.children.get(n);return i?i.get(pt(t)):null}}setTree(t,n){if(Ye(t))return n;{const i=Fe(t),l=(this.children.get(i)||new ht(null)).setTree(pt(t),n);let u;return l.isEmpty()?u=this.children.remove(i):u=this.children.insert(i,l),new ht(this.value,u)}}fold(t){return this.fold_(Xe(),t)}fold_(t,n){const i={};return this.children.inorderTraversal((a,l)=>{i[a]=l.fold_(Rt(t,a),n)}),n(t,this.value,i)}findOnPath(t,n){return this.findOnPath_(t,Xe(),n)}findOnPath_(t,n,i){const a=this.value?i(n,this.value):!1;if(a)return a;if(Ye(t))return null;{const l=Fe(t),u=this.children.get(l);return u?u.findOnPath_(pt(t),Rt(n,l),i):null}}foreachOnPath(t,n){return this.foreachOnPath_(t,Xe(),n)}foreachOnPath_(t,n,i){if(Ye(t))return this;{this.value&&i(n,this.value);const a=Fe(t),l=this.children.get(a);return l?l.foreachOnPath_(pt(t),Rt(n,a),i):new ht(null)}}foreach(t){this.foreach_(Xe(),t)}foreach_(t,n){this.children.inorderTraversal((i,a)=>{a.foreach_(Rt(t,i),n)}),this.value&&n(t,this.value)}foreachChild(t){this.children.inorderTraversal((n,i)=>{i.value&&t(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(t){this.writeTree_=t}static empty(){return new dr(new ht(null))}}function Dc(e,t,n){if(Ye(t))return new dr(new ht(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(i!=null){const a=i.path;let l=i.value;const u=un(a,t);return l=l.updateChild(u,n),new dr(e.writeTree_.set(a,l))}else{const a=new ht(n),l=e.writeTree_.setTree(t,a);return new dr(l)}}}function Hy(e,t,n){let i=e;return tn(n,(a,l)=>{i=Dc(i,Rt(t,a),l)}),i}function ME(e,t){if(Ye(t))return dr.empty();{const n=e.writeTree_.setTree(t,new ht(null));return new dr(n)}}function Fy(e,t){return xa(e,t)!=null}function xa(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return n!=null?e.writeTree_.get(n.path).getChild(un(n.path,t)):null}function kE(e){const t=[],n=e.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(At,(i,a)=>{t.push(new qe(i,a))}):e.writeTree_.children.inorderTraversal((i,a)=>{a.value!=null&&t.push(new qe(i,a.value))}),t}function ss(e,t){if(Ye(t))return e;{const n=xa(e,t);return n!=null?new dr(new ht(n)):new dr(e.writeTree_.subtree(t))}}function qy(e){return e.writeTree_.isEmpty()}function $o(e,t){return cA(Xe(),e.writeTree_,t)}function cA(e,t,n){if(t.value!=null)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal((a,l)=>{a===".priority"?(he(l.value!==null,"Priority writes must always be leaf nodes"),i=l.value):n=cA(Rt(e,a),l,n)}),!n.getChild(e).isEmpty()&&i!==null&&(n=n.updateChild(Rt(e,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(e,t){return hA(t,e)}function m5(e,t,n,i,a){he(i>e.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:a}),a&&(e.visibleWrites=Dc(e.visibleWrites,t,n)),e.lastWriteId=i}function g5(e,t,n,i){he(i>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:i,visible:!0}),e.visibleWrites=Hy(e.visibleWrites,t,n),e.lastWriteId=i}function y5(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}function v5(e,t){const n=e.allWrites.findIndex(f=>f.writeId===t);he(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let a=i.visible,l=!1,u=e.allWrites.length-1;for(;a&&u>=0;){const f=e.allWrites[u];f.visible&&(u>=n&&_5(f,i.path)?a=!1:Qn(i.path,f.path)&&(l=!0)),u--}if(a){if(l)return b5(e),!0;if(i.snap)e.visibleWrites=ME(e.visibleWrites,i.path);else{const f=i.children;tn(f,h=>{e.visibleWrites=ME(e.visibleWrites,Rt(i.path,h))})}return!0}else return!1}function _5(e,t){if(e.snap)return Qn(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Qn(Rt(e.path,n),t))return!0;return!1}function b5(e){e.visibleWrites=uA(e.allWrites,S5,Xe()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function S5(e){return e.visible}function uA(e,t,n){let i=dr.empty();for(let a=0;a<e.length;++a){const l=e[a];if(t(l)){const u=l.path;let f;if(l.snap)Qn(n,u)?(f=un(n,u),i=Dc(i,f,l.snap)):Qn(u,n)&&(f=un(u,n),i=Dc(i,Xe(),l.snap.getChild(f)));else if(l.children){if(Qn(n,u))f=un(n,u),i=Hy(i,f,l.children);else if(Qn(u,n))if(f=un(u,n),Ye(f))i=Hy(i,Xe(),l.children);else{const h=ko(l.children,Fe(f));if(h){const p=h.getChild(pt(f));i=Dc(i,Xe(),p)}}}else throw qo("WriteRecord should have .snap or .children")}}return i}function dA(e,t,n,i,a){if(!i&&!a){const l=xa(e.visibleWrites,t);if(l!=null)return l;{const u=ss(e.visibleWrites,t);if(qy(u))return n;if(n==null&&!Fy(u,Xe()))return null;{const f=n||Ne.EMPTY_NODE;return $o(u,f)}}}else{const l=ss(e.visibleWrites,t);if(!a&&qy(l))return n;if(!a&&n==null&&!Fy(l,Xe()))return null;{const u=function(p){return(p.visible||a)&&(!i||!~i.indexOf(p.writeId))&&(Qn(p.path,t)||Qn(t,p.path))},f=uA(e.allWrites,u,t),h=n||Ne.EMPTY_NODE;return $o(f,h)}}}function w5(e,t,n){let i=Ne.EMPTY_NODE;const a=xa(e.visibleWrites,t);if(a)return a.isLeafNode()||a.forEachChild(At,(l,u)=>{i=i.updateImmediateChild(l,u)}),i;if(n){const l=ss(e.visibleWrites,t);return n.forEachChild(At,(u,f)=>{const h=$o(ss(l,new ut(u)),f);i=i.updateImmediateChild(u,h)}),kE(l).forEach(u=>{i=i.updateImmediateChild(u.name,u.node)}),i}else{const l=ss(e.visibleWrites,t);return kE(l).forEach(u=>{i=i.updateImmediateChild(u.name,u.node)}),i}}function E5(e,t,n,i,a){he(i||a,"Either existingEventSnap or existingServerSnap must exist");const l=Rt(t,n);if(Fy(e.visibleWrites,l))return null;{const u=ss(e.visibleWrites,l);return qy(u)?a.getChild(n):$o(u,a.getChild(n))}}function x5(e,t,n,i){const a=Rt(t,n),l=xa(e.visibleWrites,a);if(l!=null)return l;if(i.isCompleteForChild(n)){const u=ss(e.visibleWrites,a);return $o(u,i.getNode().getImmediateChild(n))}else return null}function T5(e,t){return xa(e.visibleWrites,t)}function C5(e,t,n,i,a,l,u){let f;const h=ss(e.visibleWrites,t),p=xa(h,Xe());if(p!=null)f=p;else if(n!=null)f=$o(h,n);else return[];if(f=f.withIndex(u),!f.isEmpty()&&!f.isLeafNode()){const g=[],y=u.getCompare(),v=l?f.getReverseIteratorFrom(i,u):f.getIteratorFrom(i,u);let S=v.getNext();for(;S&&g.length<a;)y(S,i)!==0&&g.push(S),S=v.getNext();return g}else return[]}function R5(){return{visibleWrites:dr.empty(),allWrites:[],lastWriteId:-1}}function Kf(e,t,n,i){return dA(e.writeTree,e.treePath,t,n,i)}function u_(e,t){return w5(e.writeTree,e.treePath,t)}function LE(e,t,n,i){return E5(e.writeTree,e.treePath,t,n,i)}function Xf(e,t){return T5(e.writeTree,Rt(e.treePath,t))}function A5(e,t,n,i,a,l){return C5(e.writeTree,e.treePath,t,n,i,a,l)}function d_(e,t,n){return x5(e.writeTree,e.treePath,t,n)}function fA(e,t){return hA(Rt(e.treePath,t),e.writeTree)}function hA(e,t){return{treePath:e,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I5{constructor(){this.changeMap=new Map}trackChildChange(t){const n=t.type,i=t.childName;he(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),he(i!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(i);if(a){const l=a.type;if(n==="child_added"&&l==="child_removed")this.changeMap.set(i,Wc(i,t.snapshotNode,a.snapshotNode));else if(n==="child_removed"&&l==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&l==="child_changed")this.changeMap.set(i,Qc(i,a.oldSnap));else if(n==="child_changed"&&l==="child_added")this.changeMap.set(i,Uo(i,t.snapshotNode));else if(n==="child_changed"&&l==="child_changed")this.changeMap.set(i,Wc(i,t.snapshotNode,a.oldSnap));else throw qo("Illegal combination of changes: "+t+" occurred after "+a)}else this.changeMap.set(i,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D5{getCompleteChild(t){return null}getChildAfterChild(t,n,i){return null}}const pA=new D5;class f_{constructor(t,n,i=null){this.writes_=t,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(t){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(t))return n.getNode().getImmediateChild(t);{const i=this.optCompleteServerCache_!=null?new hs(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return d_(this.writes_,t,i)}}getChildAfterChild(t,n,i){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:va(this.viewCache_),l=A5(this.writes_,a,n,1,i,t);return l.length===0?null:l[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O5(e){return{filter:e}}function N5(e,t){he(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),he(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function M5(e,t,n,i,a){const l=new I5;let u,f;if(n.type===ar.OVERWRITE){const p=n;p.source.fromUser?u=Vy(e,t,p.path,p.snap,i,a,l):(he(p.source.fromServer,"Unknown source."),f=p.source.tagged||t.serverCache.isFiltered()&&!Ye(p.path),u=Zf(e,t,p.path,p.snap,i,a,f,l))}else if(n.type===ar.MERGE){const p=n;p.source.fromUser?u=L5(e,t,p.path,p.children,i,a,l):(he(p.source.fromServer,"Unknown source."),f=p.source.tagged||t.serverCache.isFiltered(),u=Gy(e,t,p.path,p.children,i,a,f,l))}else if(n.type===ar.ACK_USER_WRITE){const p=n;p.revert?u=U5(e,t,p.path,i,a,l):u=P5(e,t,p.path,p.affectedTree,i,a,l)}else if(n.type===ar.LISTEN_COMPLETE)u=j5(e,t,n.path,i,l);else throw qo("Unknown operation type: "+n.type);const h=l.getChanges();return k5(t,u,h),{viewCache:u,changes:h}}function k5(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const a=i.getNode().isLeafNode()||i.getNode().isEmpty(),l=Wf(e);(n.length>0||!e.eventCache.isFullyInitialized()||a&&!i.getNode().equals(l)||!i.getNode().getPriority().equals(l.getPriority()))&&n.push(aA(Wf(t)))}}function mA(e,t,n,i,a,l){const u=t.eventCache;if(Xf(i,n)!=null)return t;{let f,h;if(Ye(n))if(he(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const p=va(t),g=p instanceof Ne?p:Ne.EMPTY_NODE,y=u_(i,g);f=e.filter.updateFullNode(t.eventCache.getNode(),y,l)}else{const p=Kf(i,va(t));f=e.filter.updateFullNode(t.eventCache.getNode(),p,l)}else{const p=Fe(n);if(p===".priority"){he(fs(n)===1,"Can't have a priority with additional path components");const g=u.getNode();h=t.serverCache.getNode();const y=LE(i,n,g,h);y!=null?f=e.filter.updatePriority(g,y):f=u.getNode()}else{const g=pt(n);let y;if(u.isCompleteForChild(p)){h=t.serverCache.getNode();const v=LE(i,n,u.getNode(),h);v!=null?y=u.getNode().getImmediateChild(p).updateChild(g,v):y=u.getNode().getImmediateChild(p)}else y=d_(i,p,t.serverCache);y!=null?f=e.filter.updateChild(u.getNode(),p,y,g,a,l):f=u.getNode()}}return Ic(t,f,u.isFullyInitialized()||Ye(n),e.filter.filtersNodes())}}function Zf(e,t,n,i,a,l,u,f){const h=t.serverCache;let p;const g=u?e.filter:e.filter.getIndexedFilter();if(Ye(n))p=g.updateFullNode(h.getNode(),i,null);else if(g.filtersNodes()&&!h.isFiltered()){const S=h.getNode().updateChild(n,i);p=g.updateFullNode(h.getNode(),S,null)}else{const S=Fe(n);if(!h.isCompleteForPath(n)&&fs(n)>1)return t;const w=pt(n),C=h.getNode().getImmediateChild(S).updateChild(w,i);S===".priority"?p=g.updatePriority(h.getNode(),C):p=g.updateChild(h.getNode(),S,C,w,pA,null)}const y=lA(t,p,h.isFullyInitialized()||Ye(n),g.filtersNodes()),v=new f_(a,y,l);return mA(e,y,n,a,v,f)}function Vy(e,t,n,i,a,l,u){const f=t.eventCache;let h,p;const g=new f_(a,t,l);if(Ye(n))p=e.filter.updateFullNode(t.eventCache.getNode(),i,u),h=Ic(t,p,!0,e.filter.filtersNodes());else{const y=Fe(n);if(y===".priority")p=e.filter.updatePriority(t.eventCache.getNode(),i),h=Ic(t,p,f.isFullyInitialized(),f.isFiltered());else{const v=pt(n),S=f.getNode().getImmediateChild(y);let w;if(Ye(v))w=i;else{const D=g.getCompleteChild(y);D!=null?t_(v)===".priority"&&D.getChild(JR(v)).isEmpty()?w=D:w=D.updateChild(v,i):w=Ne.EMPTY_NODE}if(S.equals(w))h=t;else{const D=e.filter.updateChild(f.getNode(),y,w,v,g,u);h=Ic(t,D,f.isFullyInitialized(),e.filter.filtersNodes())}}}return h}function PE(e,t){return e.eventCache.isCompleteForChild(t)}function L5(e,t,n,i,a,l,u){let f=t;return i.foreach((h,p)=>{const g=Rt(n,h);PE(t,Fe(g))&&(f=Vy(e,f,g,p,a,l,u))}),i.foreach((h,p)=>{const g=Rt(n,h);PE(t,Fe(g))||(f=Vy(e,f,g,p,a,l,u))}),f}function jE(e,t,n){return n.foreach((i,a)=>{t=t.updateChild(i,a)}),t}function Gy(e,t,n,i,a,l,u,f){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let h=t,p;Ye(n)?p=i:p=new ht(null).setTree(n,i);const g=t.serverCache.getNode();return p.children.inorderTraversal((y,v)=>{if(g.hasChild(y)){const S=t.serverCache.getNode().getImmediateChild(y),w=jE(e,S,v);h=Zf(e,h,new ut(y),w,a,l,u,f)}}),p.children.inorderTraversal((y,v)=>{const S=!t.serverCache.isCompleteForChild(y)&&v.value===null;if(!g.hasChild(y)&&!S){const w=t.serverCache.getNode().getImmediateChild(y),D=jE(e,w,v);h=Zf(e,h,new ut(y),D,a,l,u,f)}}),h}function P5(e,t,n,i,a,l,u){if(Xf(a,n)!=null)return t;const f=t.serverCache.isFiltered(),h=t.serverCache;if(i.value!=null){if(Ye(n)&&h.isFullyInitialized()||h.isCompleteForPath(n))return Zf(e,t,n,h.getNode().getChild(n),a,l,f,u);if(Ye(n)){let p=new ht(null);return h.getNode().forEachChild(xo,(g,y)=>{p=p.set(new ut(g),y)}),Gy(e,t,n,p,a,l,f,u)}else return t}else{let p=new ht(null);return i.foreach((g,y)=>{const v=Rt(n,g);h.isCompleteForPath(v)&&(p=p.set(g,h.getNode().getChild(v)))}),Gy(e,t,n,p,a,l,f,u)}}function j5(e,t,n,i,a){const l=t.serverCache,u=lA(t,l.getNode(),l.isFullyInitialized()||Ye(n),l.isFiltered());return mA(e,u,n,i,pA,a)}function U5(e,t,n,i,a,l){let u;if(Xf(i,n)!=null)return t;{const f=new f_(i,t,a),h=t.eventCache.getNode();let p;if(Ye(n)||Fe(n)===".priority"){let g;if(t.serverCache.isFullyInitialized())g=Kf(i,va(t));else{const y=t.serverCache.getNode();he(y instanceof Ne,"serverChildren would be complete if leaf node"),g=u_(i,y)}g=g,p=e.filter.updateFullNode(h,g,l)}else{const g=Fe(n);let y=d_(i,g,t.serverCache);y==null&&t.serverCache.isCompleteForChild(g)&&(y=h.getImmediateChild(g)),y!=null?p=e.filter.updateChild(h,g,y,pt(n),f,l):t.eventCache.getNode().hasChild(g)?p=e.filter.updateChild(h,g,Ne.EMPTY_NODE,pt(n),f,l):p=h,p.isEmpty()&&t.serverCache.isFullyInitialized()&&(u=Kf(i,va(t)),u.isLeafNode()&&(p=e.filter.updateFullNode(p,u,l)))}return u=t.serverCache.isFullyInitialized()||Xf(i,Xe())!=null,Ic(t,p,u,e.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z5{constructor(t,n){this.query_=t,this.eventRegistrations_=[];const i=this.query_._queryParams,a=new s_(i.getIndex()),l=r5(i);this.processor_=O5(l);const u=n.serverCache,f=n.eventCache,h=a.updateFullNode(Ne.EMPTY_NODE,u.getNode(),null),p=l.updateFullNode(Ne.EMPTY_NODE,f.getNode(),null),g=new hs(h,u.isFullyInitialized(),a.filtersNodes()),y=new hs(p,f.isFullyInitialized(),l.filtersNodes());this.viewCache_=jh(y,g),this.eventGenerator_=new u5(this.query_)}get query(){return this.query_}}function $5(e){return e.viewCache_.serverCache.getNode()}function B5(e){return Wf(e.viewCache_)}function H5(e,t){const n=va(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Ye(t)&&!n.getImmediateChild(Fe(t)).isEmpty())?n.getChild(t):null}function UE(e){return e.eventRegistrations_.length===0}function F5(e,t){e.eventRegistrations_.push(t)}function zE(e,t,n){const i=[];if(n){he(t==null,"A cancel should cancel all event registrations.");const a=e.query._path;e.eventRegistrations_.forEach(l=>{const u=l.createCancelEvent(n,a);u&&i.push(u)})}if(t){let a=[];for(let l=0;l<e.eventRegistrations_.length;++l){const u=e.eventRegistrations_[l];if(!u.matches(t))a.push(u);else if(t.hasAnyCallback()){a=a.concat(e.eventRegistrations_.slice(l+1));break}}e.eventRegistrations_=a}else e.eventRegistrations_=[];return i}function $E(e,t,n,i){t.type===ar.MERGE&&t.source.queryId!==null&&(he(va(e.viewCache_),"We should always have a full cache before handling merges"),he(Wf(e.viewCache_),"Missing event cache, even though we have a server cache"));const a=e.viewCache_,l=M5(e.processor_,a,t,n,i);return N5(e.processor_,l.viewCache),he(l.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=l.viewCache,gA(e,l.changes,l.viewCache.eventCache.getNode(),null)}function q5(e,t){const n=e.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(At,(l,u)=>{i.push(Uo(l,u))}),n.isFullyInitialized()&&i.push(aA(n.getNode())),gA(e,i,n.getNode(),t)}function gA(e,t,n,i){const a=i?[i]:e.eventRegistrations_;return d5(e.eventGenerator_,t,n,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jf;class yA{constructor(){this.views=new Map}}function V5(e){he(!Jf,"__referenceConstructor has already been defined"),Jf=e}function G5(){return he(Jf,"Reference.ts has not been loaded"),Jf}function Y5(e){return e.views.size===0}function h_(e,t,n,i){const a=t.source.queryId;if(a!==null){const l=e.views.get(a);return he(l!=null,"SyncTree gave us an op for an invalid query."),$E(l,t,n,i)}else{let l=[];for(const u of e.views.values())l=l.concat($E(u,t,n,i));return l}}function vA(e,t,n,i,a){const l=t._queryIdentifier,u=e.views.get(l);if(!u){let f=Kf(n,a?i:null),h=!1;f?h=!0:i instanceof Ne?(f=u_(n,i),h=!1):(f=Ne.EMPTY_NODE,h=!1);const p=jh(new hs(f,h,!1),new hs(i,a,!1));return new z5(t,p)}return u}function Q5(e,t,n,i,a,l){const u=vA(e,t,i,a,l);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,u),F5(u,n),q5(u,n)}function W5(e,t,n,i){const a=t._queryIdentifier,l=[];let u=[];const f=ps(e);if(a==="default")for(const[h,p]of e.views.entries())u=u.concat(zE(p,n,i)),UE(p)&&(e.views.delete(h),p.query._queryParams.loadsAllData()||l.push(p.query));else{const h=e.views.get(a);h&&(u=u.concat(zE(h,n,i)),UE(h)&&(e.views.delete(a),h.query._queryParams.loadsAllData()||l.push(h.query)))}return f&&!ps(e)&&l.push(new(G5())(t._repo,t._path)),{removed:l,events:u}}function _A(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function as(e,t){let n=null;for(const i of e.views.values())n=n||H5(i,t);return n}function bA(e,t){if(t._queryParams.loadsAllData())return zh(e);{const i=t._queryIdentifier;return e.views.get(i)}}function SA(e,t){return bA(e,t)!=null}function ps(e){return zh(e)!=null}function zh(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eh;function K5(e){he(!eh,"__referenceConstructor has already been defined"),eh=e}function X5(){return he(eh,"Reference.ts has not been loaded"),eh}let Z5=1;class BE{constructor(t){this.listenProvider_=t,this.syncPointTree_=new ht(null),this.pendingWriteTree_=R5(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function wA(e,t,n,i,a){return m5(e.pendingWriteTree_,t,n,i,a),a?Zo(e,new ya(o_(),t,n)):[]}function J5(e,t,n,i){g5(e.pendingWriteTree_,t,n,i);const a=ht.fromObject(n);return Zo(e,new zo(o_(),t,a))}function ns(e,t,n=!1){const i=y5(e.pendingWriteTree_,t);if(v5(e.pendingWriteTree_,t)){let l=new ht(null);return i.snap!=null?l=l.set(Xe(),!0):tn(i.children,u=>{l=l.set(new ut(u),!0)}),Zo(e,new Qf(i.path,l,n))}else return[]}function yu(e,t,n){return Zo(e,new ya(l_(),t,n))}function eU(e,t,n){const i=ht.fromObject(n);return Zo(e,new zo(l_(),t,i))}function tU(e,t){return Zo(e,new Xc(l_(),t))}function nU(e,t,n){const i=m_(e,n);if(i){const a=g_(i),l=a.path,u=a.queryId,f=un(l,t),h=new Xc(c_(u),f);return y_(e,l,h)}else return[]}function th(e,t,n,i,a=!1){const l=t._path,u=e.syncPointTree_.get(l);let f=[];if(u&&(t._queryIdentifier==="default"||SA(u,t))){const h=W5(u,t,n,i);Y5(u)&&(e.syncPointTree_=e.syncPointTree_.remove(l));const p=h.removed;if(f=h.events,!a){const g=p.findIndex(v=>v._queryParams.loadsAllData())!==-1,y=e.syncPointTree_.findOnPath(l,(v,S)=>ps(S));if(g&&!y){const v=e.syncPointTree_.subtree(l);if(!v.isEmpty()){const S=sU(v);for(let w=0;w<S.length;++w){const D=S[w],C=D.query,I=CA(e,D);e.listenProvider_.startListening(Oc(C),Zc(e,C),I.hashFn,I.onComplete)}}}!y&&p.length>0&&!i&&(g?e.listenProvider_.stopListening(Oc(t),null):p.forEach(v=>{const S=e.queryToTagMap.get($h(v));e.listenProvider_.stopListening(Oc(v),S)}))}aU(e,p)}return f}function EA(e,t,n,i){const a=m_(e,i);if(a!=null){const l=g_(a),u=l.path,f=l.queryId,h=un(u,t),p=new ya(c_(f),h,n);return y_(e,u,p)}else return[]}function rU(e,t,n,i){const a=m_(e,i);if(a){const l=g_(a),u=l.path,f=l.queryId,h=un(u,t),p=ht.fromObject(n),g=new zo(c_(f),h,p);return y_(e,u,g)}else return[]}function Yy(e,t,n,i=!1){const a=t._path;let l=null,u=!1;e.syncPointTree_.foreachOnPath(a,(v,S)=>{const w=un(v,a);l=l||as(S,w),u=u||ps(S)});let f=e.syncPointTree_.get(a);f?(u=u||ps(f),l=l||as(f,Xe())):(f=new yA,e.syncPointTree_=e.syncPointTree_.set(a,f));let h;l!=null?h=!0:(h=!1,l=Ne.EMPTY_NODE,e.syncPointTree_.subtree(a).foreachChild((S,w)=>{const D=as(w,Xe());D&&(l=l.updateImmediateChild(S,D))}));const p=SA(f,t);if(!p&&!t._queryParams.loadsAllData()){const v=$h(t);he(!e.queryToTagMap.has(v),"View does not exist, but we have a tag");const S=oU();e.queryToTagMap.set(v,S),e.tagToQueryMap.set(S,v)}const g=Uh(e.pendingWriteTree_,a);let y=Q5(f,t,n,g,l,h);if(!p&&!u&&!i){const v=bA(f,t);y=y.concat(lU(e,t,v))}return y}function p_(e,t,n){const a=e.pendingWriteTree_,l=e.syncPointTree_.findOnPath(t,(u,f)=>{const h=un(u,t),p=as(f,h);if(p)return p});return dA(a,t,l,n,!0)}function iU(e,t){const n=t._path;let i=null;e.syncPointTree_.foreachOnPath(n,(p,g)=>{const y=un(p,n);i=i||as(g,y)});let a=e.syncPointTree_.get(n);a?i=i||as(a,Xe()):(a=new yA,e.syncPointTree_=e.syncPointTree_.set(n,a));const l=i!=null,u=l?new hs(i,!0,!1):null,f=Uh(e.pendingWriteTree_,t._path),h=vA(a,t,f,l?u.getNode():Ne.EMPTY_NODE,l);return B5(h)}function Zo(e,t){return xA(t,e.syncPointTree_,null,Uh(e.pendingWriteTree_,Xe()))}function xA(e,t,n,i){if(Ye(e.path))return TA(e,t,n,i);{const a=t.get(Xe());n==null&&a!=null&&(n=as(a,Xe()));let l=[];const u=Fe(e.path),f=e.operationForChild(u),h=t.children.get(u);if(h&&f){const p=n?n.getImmediateChild(u):null,g=fA(i,u);l=l.concat(xA(f,h,p,g))}return a&&(l=l.concat(h_(a,e,i,n))),l}}function TA(e,t,n,i){const a=t.get(Xe());n==null&&a!=null&&(n=as(a,Xe()));let l=[];return t.children.inorderTraversal((u,f)=>{const h=n?n.getImmediateChild(u):null,p=fA(i,u),g=e.operationForChild(u);g&&(l=l.concat(TA(g,f,h,p)))}),a&&(l=l.concat(h_(a,e,i,n))),l}function CA(e,t){const n=t.query,i=Zc(e,n);return{hashFn:()=>($5(t)||Ne.EMPTY_NODE).hash(),onComplete:a=>{if(a==="ok")return i?nU(e,n._path,i):tU(e,n._path);{const l=tj(a,n);return th(e,n,null,l)}}}}function Zc(e,t){const n=$h(t);return e.queryToTagMap.get(n)}function $h(e){return e._path.toString()+"$"+e._queryIdentifier}function m_(e,t){return e.tagToQueryMap.get(t)}function g_(e){const t=e.indexOf("$");return he(t!==-1&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ut(e.substr(0,t))}}function y_(e,t,n){const i=e.syncPointTree_.get(t);he(i,"Missing sync point for query tag that we're tracking");const a=Uh(e.pendingWriteTree_,t);return h_(i,n,a,null)}function sU(e){return e.fold((t,n,i)=>{if(n&&ps(n))return[zh(n)];{let a=[];return n&&(a=_A(n)),tn(i,(l,u)=>{a=a.concat(u)}),a}})}function Oc(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(X5())(e._repo,e._path):e}function aU(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const a=$h(i),l=e.queryToTagMap.get(a);e.queryToTagMap.delete(a),e.tagToQueryMap.delete(l)}}}function oU(){return Z5++}function lU(e,t,n){const i=t._path,a=Zc(e,t),l=CA(e,n),u=e.listenProvider_.startListening(Oc(t),a,l.hashFn,l.onComplete),f=e.syncPointTree_.subtree(i);if(a)he(!ps(f.value),"If we're adding a query, it shouldn't be shadowed");else{const h=f.fold((p,g,y)=>{if(!Ye(p)&&g&&ps(g))return[zh(g).query];{let v=[];return g&&(v=v.concat(_A(g).map(S=>S.query))),tn(y,(S,w)=>{v=v.concat(w)}),v}});for(let p=0;p<h.length;++p){const g=h[p];e.listenProvider_.stopListening(Oc(g),Zc(e,g))}}return u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(t){this.node_=t}getImmediateChild(t){const n=this.node_.getImmediateChild(t);return new v_(n)}node(){return this.node_}}class __{constructor(t,n){this.syncTree_=t,this.path_=n}getImmediateChild(t){const n=Rt(this.path_,t);return new __(this.syncTree_,n)}node(){return p_(this.syncTree_,this.path_)}}const cU=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},HE=function(e,t,n){if(!e||typeof e!="object")return e;if(he(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return uU(e[".sv"],t,n);if(typeof e[".sv"]=="object")return dU(e[".sv"],t);he(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},uU=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:he(!1,"Unexpected server value: "+e)}},dU=function(e,t,n){e.hasOwnProperty("increment")||he(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;typeof i!="number"&&he(!1,"Unexpected increment value: "+i);const a=t.node();if(he(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return i;const u=a.getValue();return typeof u!="number"?i:u+i},RA=function(e,t,n,i){return b_(t,new __(n,e),i)},AA=function(e,t,n){return b_(e,new v_(t),n)};function b_(e,t,n){const i=e.getPriority().val(),a=HE(i,t.getImmediateChild(".priority"),n);let l;if(e.isLeafNode()){const u=e,f=HE(u.getValue(),t,n);return f!==u.getValue()||a!==u.getPriority().val()?new Ft(f,Ut(a)):e}else{const u=e;return l=u,a!==u.getPriority().val()&&(l=l.updatePriority(new Ft(a))),u.forEachChild(At,(f,h)=>{const p=b_(h,t.getImmediateChild(f),n);p!==h&&(l=l.updateImmediateChild(f,p))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(t="",n=null,i={children:{},childCount:0}){this.name=t,this.parent=n,this.node=i}}function w_(e,t){let n=t instanceof ut?t:new ut(t),i=e,a=Fe(n);for(;a!==null;){const l=ko(i.node.children,a)||{children:{},childCount:0};i=new S_(a,i,l),n=pt(n),a=Fe(n)}return i}function Jo(e){return e.node.value}function IA(e,t){e.node.value=t,Qy(e)}function DA(e){return e.node.childCount>0}function fU(e){return Jo(e)===void 0&&!DA(e)}function Bh(e,t){tn(e.node.children,(n,i)=>{t(new S_(n,e,i))})}function OA(e,t,n,i){n&&t(e),Bh(e,a=>{OA(a,t,!0)})}function hU(e,t,n){let i=e.parent;for(;i!==null;){if(t(i))return!0;i=i.parent}return!1}function vu(e){return new ut(e.parent===null?e.name:vu(e.parent)+"/"+e.name)}function Qy(e){e.parent!==null&&pU(e.parent,e.name,e)}function pU(e,t,n){const i=fU(n),a=kr(e.node.children,t);i&&a?(delete e.node.children[t],e.node.childCount--,Qy(e)):!i&&!a&&(e.node.children[t]=n.node,e.node.childCount++,Qy(e))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mU=/[\[\].#$\/\u0000-\u001F\u007F]/,gU=/[\[\].#$\u0000-\u001F\u007F]/,Fg=10*1024*1024,E_=function(e){return typeof e=="string"&&e.length!==0&&!mU.test(e)},NA=function(e){return typeof e=="string"&&e.length!==0&&!gU.test(e)},yU=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),NA(e)},vU=function(e){return e===null||typeof e=="string"||typeof e=="number"&&!Kv(e)||e&&typeof e=="object"&&kr(e,".sv")},MA=function(e,t,n,i){i&&t===void 0||Hh(Ch(e,"value"),t,n)},Hh=function(e,t,n){const i=n instanceof ut?new Lj(n,e):n;if(t===void 0)throw new Error(e+"contains undefined "+Zs(i));if(typeof t=="function")throw new Error(e+"contains a function "+Zs(i)+" with contents = "+t.toString());if(Kv(t))throw new Error(e+"contains "+t.toString()+" "+Zs(i));if(typeof t=="string"&&t.length>Fg/3&&Rh(t)>Fg)throw new Error(e+"contains a string greater than "+Fg+" utf8 bytes "+Zs(i)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let a=!1,l=!1;if(tn(t,(u,f)=>{if(u===".value")a=!0;else if(u!==".priority"&&u!==".sv"&&(l=!0,!E_(u)))throw new Error(e+" contains an invalid key ("+u+") "+Zs(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Pj(i,u),Hh(e,f,i),jj(i)}),a&&l)throw new Error(e+' contains ".value" child '+Zs(i)+" in addition to actual children.")}},_U=function(e,t){let n,i;for(n=0;n<t.length;n++){i=t[n];const l=Yc(i);for(let u=0;u<l.length;u++)if(!(l[u]===".priority"&&u===l.length-1)){if(!E_(l[u]))throw new Error(e+"contains an invalid key ("+l[u]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}t.sort(kj);let a=null;for(n=0;n<t.length;n++){if(i=t[n],a!==null&&Qn(a,i))throw new Error(e+"contains a path "+a.toString()+" that is ancestor of another path "+i.toString());a=i}},bU=function(e,t,n,i){const a=Ch(e,"values");if(!(t&&typeof t=="object")||Array.isArray(t))throw new Error(a+" must be an object containing the children to replace.");const l=[];tn(t,(u,f)=>{const h=new ut(u);if(Hh(a,f,Rt(n,h)),t_(h)===".priority"&&!vU(f))throw new Error(a+"contains an invalid value for '"+h.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");l.push(h)}),_U(a,l)},kA=function(e,t,n,i){if(!NA(n))throw new Error(Ch(e,t)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},SU=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),kA(e,t,n)},x_=function(e,t){if(Fe(t)===".info")throw new Error(e+" failed = Can't modify data under /.info/")},wU=function(e,t){const n=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!E_(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!yU(n))throw new Error(Ch(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EU{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Fh(e,t){let n=null;for(let i=0;i<t.length;i++){const a=t[i],l=a.getPath();n!==null&&!n_(l,n.path)&&(e.eventLists_.push(n),n=null),n===null&&(n={events:[],path:l}),n.events.push(a)}n&&e.eventLists_.push(n)}function LA(e,t,n){Fh(e,n),PA(e,i=>n_(i,t))}function Zn(e,t,n){Fh(e,n),PA(e,i=>Qn(i,t)||Qn(t,i))}function PA(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const a=e.eventLists_[i];if(a){const l=a.path;t(l)?(xU(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function xU(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(n!==null){e.events[t]=null;const i=n.getEventRunner();Rc&&Jt("event: "+n.toString()),Xo(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TU="repo_interrupt",CU=25;class RU{constructor(t,n,i,a){this.repoInfo_=t,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new EU,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Yf(),this.transactionQueueTree_=new S_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function AU(e,t,n){if(e.stats_=Jv(e.repoInfo_),e.forceRestClient_||sj())e.server_=new Gf(e.repoInfo_,(i,a,l,u)=>{FE(e,i,a,l,u)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>qE(e,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{zt(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new di(e.repoInfo_,t,(i,a,l,u)=>{FE(e,i,a,l,u)},i=>{qE(e,i)},i=>{IU(e,i)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(i=>{e.server_.refreshAuthToken(i)}),e.appCheckProvider_.addTokenChangeListener(i=>{e.server_.refreshAppCheckToken(i.token)}),e.statsReporter_=uj(e.repoInfo_,()=>new c5(e.stats_,e.server_)),e.infoData_=new i5,e.infoSyncTree_=new BE({startListening:(i,a,l,u)=>{let f=[];const h=e.infoData_.getNode(i._path);return h.isEmpty()||(f=yu(e.infoSyncTree_,i._path,h),setTimeout(()=>{u("ok")},0)),f},stopListening:()=>{}}),T_(e,"connected",!1),e.serverSyncTree_=new BE({startListening:(i,a,l,u)=>(e.server_.listen(i,l,a,(f,h)=>{const p=u(f,h);Zn(e.eventQueue_,i._path,p)}),[]),stopListening:(i,a)=>{e.server_.unlisten(i,a)}})}function jA(e){const n=e.infoData_.getNode(new ut(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function qh(e){return cU({timestamp:jA(e)})}function FE(e,t,n,i,a){e.dataUpdateCount++;const l=new ut(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let u=[];if(a)if(i){const h=Lf(n,p=>Ut(p));u=rU(e.serverSyncTree_,l,h,a)}else{const h=Ut(n);u=EA(e.serverSyncTree_,l,h,a)}else if(i){const h=Lf(n,p=>Ut(p));u=eU(e.serverSyncTree_,l,h)}else{const h=Ut(n);u=yu(e.serverSyncTree_,l,h)}let f=l;u.length>0&&(f=Bo(e,l)),Zn(e.eventQueue_,f,u)}function qE(e,t){T_(e,"connected",t),t===!1&&MU(e)}function IU(e,t){tn(t,(n,i)=>{T_(e,n,i)})}function T_(e,t,n){const i=new ut("/.info/"+t),a=Ut(n);e.infoData_.updateSnapshot(i,a);const l=yu(e.infoSyncTree_,i,a);Zn(e.eventQueue_,i,l)}function C_(e){return e.nextWriteId_++}function DU(e,t,n){const i=iU(e.serverSyncTree_,t);return i!=null?Promise.resolve(i):e.server_.get(t).then(a=>{const l=Ut(a).withIndex(t._queryParams.getIndex());Yy(e.serverSyncTree_,t,n,!0);let u;if(t._queryParams.loadsAllData())u=yu(e.serverSyncTree_,t._path,l);else{const f=Zc(e.serverSyncTree_,t);u=EA(e.serverSyncTree_,t._path,l,f)}return Zn(e.eventQueue_,t._path,u),th(e.serverSyncTree_,t,n,null,!0),l},a=>(_u(e,"get for query "+zt(t)+" failed: "+a),Promise.reject(new Error(a))))}function OU(e,t,n,i,a){_u(e,"set",{path:t.toString(),value:n,priority:i});const l=qh(e),u=Ut(n,i),f=p_(e.serverSyncTree_,t),h=AA(u,f,l),p=C_(e),g=wA(e.serverSyncTree_,t,h,p,!0);Fh(e.eventQueue_,g),e.server_.put(t.toString(),u.val(!0),(v,S)=>{const w=v==="ok";w||dn("set at "+t+" failed: "+v);const D=ns(e.serverSyncTree_,p,!w);Zn(e.eventQueue_,t,D),Wy(e,a,v,S)});const y=A_(e,t);Bo(e,y),Zn(e.eventQueue_,y,[])}function NU(e,t,n,i){_u(e,"update",{path:t.toString(),value:n});let a=!0;const l=qh(e),u={};if(tn(n,(f,h)=>{a=!1,u[f]=RA(Rt(t,f),Ut(h),e.serverSyncTree_,l)}),a)Jt("update() called with empty data.  Don't do anything."),Wy(e,i,"ok",void 0);else{const f=C_(e),h=J5(e.serverSyncTree_,t,u,f);Fh(e.eventQueue_,h),e.server_.merge(t.toString(),n,(p,g)=>{const y=p==="ok";y||dn("update at "+t+" failed: "+p);const v=ns(e.serverSyncTree_,f,!y),S=v.length>0?Bo(e,t):t;Zn(e.eventQueue_,S,v),Wy(e,i,p,g)}),tn(n,p=>{const g=A_(e,Rt(t,p));Bo(e,g)}),Zn(e.eventQueue_,t,[])}}function MU(e){_u(e,"onDisconnectEvents");const t=qh(e),n=Yf();By(e.onDisconnect_,Xe(),(a,l)=>{const u=RA(a,l,e.serverSyncTree_,t);oA(n,a,u)});let i=[];By(n,Xe(),(a,l)=>{i=i.concat(yu(e.serverSyncTree_,a,l));const u=A_(e,a);Bo(e,u)}),e.onDisconnect_=Yf(),Zn(e.eventQueue_,Xe(),i)}function kU(e,t,n){let i;Fe(t._path)===".info"?i=Yy(e.infoSyncTree_,t,n):i=Yy(e.serverSyncTree_,t,n),LA(e.eventQueue_,t._path,i)}function VE(e,t,n){let i;Fe(t._path)===".info"?i=th(e.infoSyncTree_,t,n):i=th(e.serverSyncTree_,t,n),LA(e.eventQueue_,t._path,i)}function LU(e){e.persistentConnection_&&e.persistentConnection_.interrupt(TU)}function _u(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Jt(n,...t)}function Wy(e,t,n,i){t&&Xo(()=>{if(n==="ok")t(null);else{const a=(n||"error").toUpperCase();let l=a;i&&(l+=": "+i);const u=new Error(l);u.code=a,t(u)}})}function UA(e,t,n){return p_(e.serverSyncTree_,t,n)||Ne.EMPTY_NODE}function R_(e,t=e.transactionQueueTree_){if(t||Vh(e,t),Jo(t)){const n=$A(e,t);he(n.length>0,"Sending zero length transaction queue"),n.every(a=>a.status===0)&&PU(e,vu(t),n)}else DA(t)&&Bh(t,n=>{R_(e,n)})}function PU(e,t,n){const i=n.map(p=>p.currentWriteId),a=UA(e,t,i);let l=a;const u=a.hash();for(let p=0;p<n.length;p++){const g=n[p];he(g.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),g.status=1,g.retryCount++;const y=un(t,g.path);l=l.updateChild(y,g.currentOutputSnapshotRaw)}const f=l.val(!0),h=t;e.server_.put(h.toString(),f,p=>{_u(e,"transaction put response",{path:h.toString(),status:p});let g=[];if(p==="ok"){const y=[];for(let v=0;v<n.length;v++)n[v].status=2,g=g.concat(ns(e.serverSyncTree_,n[v].currentWriteId)),n[v].onComplete&&y.push(()=>n[v].onComplete(null,!0,n[v].currentOutputSnapshotResolved)),n[v].unwatcher();Vh(e,w_(e.transactionQueueTree_,t)),R_(e,e.transactionQueueTree_),Zn(e.eventQueue_,t,g);for(let v=0;v<y.length;v++)Xo(y[v])}else{if(p==="datastale")for(let y=0;y<n.length;y++)n[y].status===3?n[y].status=4:n[y].status=0;else{dn("transaction at "+h.toString()+" failed: "+p);for(let y=0;y<n.length;y++)n[y].status=4,n[y].abortReason=p}Bo(e,t)}},u)}function Bo(e,t){const n=zA(e,t),i=vu(n),a=$A(e,n);return jU(e,a,i),i}function jU(e,t,n){if(t.length===0)return;const i=[];let a=[];const u=t.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<t.length;f++){const h=t[f],p=un(n,h.path);let g=!1,y;if(he(p!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),h.status===4)g=!0,y=h.abortReason,a=a.concat(ns(e.serverSyncTree_,h.currentWriteId,!0));else if(h.status===0)if(h.retryCount>=CU)g=!0,y="maxretry",a=a.concat(ns(e.serverSyncTree_,h.currentWriteId,!0));else{const v=UA(e,h.path,u);h.currentInputSnapshot=v;const S=t[f].update(v.val());if(S!==void 0){Hh("transaction failed: Data returned ",S,h.path);let w=Ut(S);typeof S=="object"&&S!=null&&kr(S,".priority")||(w=w.updatePriority(v.getPriority()));const C=h.currentWriteId,I=qh(e),k=AA(w,v,I);h.currentOutputSnapshotRaw=w,h.currentOutputSnapshotResolved=k,h.currentWriteId=C_(e),u.splice(u.indexOf(C),1),a=a.concat(wA(e.serverSyncTree_,h.path,k,h.currentWriteId,h.applyLocally)),a=a.concat(ns(e.serverSyncTree_,C,!0))}else g=!0,y="nodata",a=a.concat(ns(e.serverSyncTree_,h.currentWriteId,!0))}Zn(e.eventQueue_,n,a),a=[],g&&(t[f].status=2,(function(v){setTimeout(v,Math.floor(0))})(t[f].unwatcher),t[f].onComplete&&(y==="nodata"?i.push(()=>t[f].onComplete(null,!1,t[f].currentInputSnapshot)):i.push(()=>t[f].onComplete(new Error(y),!1,null))))}Vh(e,e.transactionQueueTree_);for(let f=0;f<i.length;f++)Xo(i[f]);R_(e,e.transactionQueueTree_)}function zA(e,t){let n,i=e.transactionQueueTree_;for(n=Fe(t);n!==null&&Jo(i)===void 0;)i=w_(i,n),t=pt(t),n=Fe(t);return i}function $A(e,t){const n=[];return BA(e,t,n),n.sort((i,a)=>i.order-a.order),n}function BA(e,t,n){const i=Jo(t);if(i)for(let a=0;a<i.length;a++)n.push(i[a]);Bh(t,a=>{BA(e,a,n)})}function Vh(e,t){const n=Jo(t);if(n){let i=0;for(let a=0;a<n.length;a++)n[a].status!==2&&(n[i]=n[a],i++);n.length=i,IA(t,n.length>0?n:void 0)}Bh(t,i=>{Vh(e,i)})}function A_(e,t){const n=vu(zA(e,t)),i=w_(e.transactionQueueTree_,t);return hU(i,a=>{qg(e,a)}),qg(e,i),OA(i,a=>{qg(e,a)}),n}function qg(e,t){const n=Jo(t);if(n){const i=[];let a=[],l=-1;for(let u=0;u<n.length;u++)n[u].status===3||(n[u].status===1?(he(l===u-1,"All SENT items should be at beginning of queue."),l=u,n[u].status=3,n[u].abortReason="set"):(he(n[u].status===0,"Unexpected transaction status in abort"),n[u].unwatcher(),a=a.concat(ns(e.serverSyncTree_,n[u].currentWriteId,!0)),n[u].onComplete&&i.push(n[u].onComplete.bind(null,new Error("set"),!1,null))));l===-1?IA(t,void 0):n.length=l+1,Zn(e.eventQueue_,vu(t),a);for(let u=0;u<i.length;u++)Xo(i[u])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UU(e){let t="";const n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let a=n[i];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}t+="/"+a}return t}function zU(e){const t={};e.charAt(0)==="?"&&(e=e.substring(1));for(const n of e.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):dn(`Invalid query segment '${n}' in query '${e}'`)}return t}const GE=function(e,t){const n=$U(e),i=n.namespace;n.domain==="firebase.com"&&mi(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&mi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||K3();const a=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new qR(n.host,n.secure,i,a,t,"",i!==n.subdomain),path:new ut(n.pathString)}},$U=function(e){let t="",n="",i="",a="",l="",u=!0,f="https",h=443;if(typeof e=="string"){let p=e.indexOf("//");p>=0&&(f=e.substring(0,p-1),e=e.substring(p+2));let g=e.indexOf("/");g===-1&&(g=e.length);let y=e.indexOf("?");y===-1&&(y=e.length),t=e.substring(0,Math.min(g,y)),g<y&&(a=UU(e.substring(g,y)));const v=zU(e.substring(Math.min(e.length,y)));p=t.indexOf(":"),p>=0?(u=f==="https"||f==="wss",h=parseInt(t.substring(p+1),10)):p=t.length;const S=t.slice(0,p);if(S.toLowerCase()==="localhost")n="localhost";else if(S.split(".").length<=2)n=S;else{const w=t.indexOf(".");i=t.substring(0,w).toLowerCase(),n=t.substring(w+1),l=i}"ns"in v&&(l=v.ns)}return{host:t,port:h,domain:n,subdomain:i,secure:u,scheme:f,pathString:a,namespace:l}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",BU=(function(){let e=0;const t=[];return function(n){const i=n===e;e=n;let a;const l=new Array(8);for(a=7;a>=0;a--)l[a]=YE.charAt(n%64),n=Math.floor(n/64);he(n===0,"Cannot push at time == 0");let u=l.join("");if(i){for(a=11;a>=0&&t[a]===63;a--)t[a]=0;t[a]++}else for(a=0;a<12;a++)t[a]=Math.floor(Math.random()*64);for(a=0;a<12;a++)u+=YE.charAt(t[a]);return he(u.length===20,"nextPushId: Length should be 20."),u}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HU{constructor(t,n,i,a){this.eventType=t,this.eventRegistration=n,this.snapshot=i,this.prevName=a}getPath(){const t=this.snapshot.ref;return this.eventType==="value"?t._path:t.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+zt(this.snapshot.exportVal())}}class FU{constructor(t,n,i){this.eventRegistration=t,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(t,n){this.snapshotCallback=t,this.cancelCallback=n}onValue(t,n){this.snapshotCallback.call(null,t,n)}onCancel(t){return he(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)}get hasCancelCallback(){return!!this.cancelCallback}matches(t){return this.snapshotCallback===t.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(t,n,i,a){this._repo=t,this._path=n,this._queryParams=i,this._orderByCalled=a}get key(){return Ye(this._path)?null:t_(this._path)}get ref(){return new Si(this._repo,this._path)}get _queryIdentifier(){const t=OE(this._queryParams),n=Xv(t);return n==="{}"?"default":n}get _queryObject(){return OE(this._queryParams)}isEqual(t){if(t=Gt(t),!(t instanceof I_))return!1;const n=this._repo===t._repo,i=n_(this._path,t._path),a=this._queryIdentifier===t._queryIdentifier;return n&&i&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+Mj(this._path)}}class Si extends I_{constructor(t,n){super(t,n,new a_,!1)}get parent(){const t=JR(this._path);return t===null?null:new Si(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}class Jc{constructor(t,n,i){this._node=t,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const n=new ut(t),i=eu(this.ref,t);return new Jc(this._node.getChild(n),i,At)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,a)=>t(new Jc(a,eu(this.ref,i),At)))}hasChild(t){const n=new ut(t);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function yr(e,t){return e=Gt(e),e._checkNotDeleted("ref"),t!==void 0?eu(e._root,t):e._root}function eu(e,t){return e=Gt(e),Fe(e._path)===null?SU("child","path",t):kA("child","path",t),new Si(e._repo,Rt(e._path,t))}function qU(e,t){e=Gt(e),x_("push",e._path),MA("push",t,e._path,!0);const n=jA(e._repo),i=BU(n),a=eu(e,i),l=eu(e,i);let u;return t!=null?u=D_(l,t).then(()=>l):u=Promise.resolve(l),a.then=u.then.bind(u),a.catch=u.then.bind(u,void 0),a}function FA(e){return x_("remove",e._path),D_(e,null)}function D_(e,t){e=Gt(e),x_("set",e._path),MA("set",t,e._path,!1);const n=new lu;return OU(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}function qA(e,t){bU("update",t,e._path);const n=new lu;return NU(e._repo,e._path,t,n.wrapCallback(()=>{})),n.promise}function VA(e){e=Gt(e);const t=new HA(()=>{}),n=new Gh(t);return DU(e._repo,e,n).then(i=>new Jc(i,new Si(e._repo,e._path),e._queryParams.getIndex()))}class Gh{constructor(t){this.callbackContext=t}respondsTo(t){return t==="value"}createEvent(t,n){const i=n._queryParams.getIndex();return new HU("value",this,new Jc(t.snapshotNode,new Si(n._repo,n._path),i))}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,n){return this.callbackContext.hasCancelCallback?new FU(this,t,n):null}matches(t){return t instanceof Gh?!t.callbackContext||!this.callbackContext?!0:t.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function VU(e,t,n,i,a){let l;if(typeof i=="object"&&(l=void 0,a=i),typeof i=="function"&&(l=i),a&&a.onlyOnce){const h=n,p=(g,y)=>{VE(e._repo,e,f),h(g,y)};p.userCallback=n.userCallback,p.context=n.context,n=p}const u=new HA(n,l||void 0),f=new Gh(u);return kU(e._repo,e,f),()=>VE(e._repo,e,f)}function O_(e,t,n,i){return VU(e,"value",t,n,i)}V5(Si);K5(Si);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GU="FIREBASE_DATABASE_EMULATOR_HOST",Ky={};let YU=!1;function QU(e,t,n,i){const a=t.lastIndexOf(":"),l=t.substring(0,a),u=Vo(l);e.repoInfo_=new qR(t,u,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0,n),i&&(e.authTokenProvider_=i)}function WU(e,t,n,i,a){let l=i||e.options.databaseURL;l===void 0&&(e.options.projectId||mi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Jt("Using default host for project ",e.options.projectId),l=`${e.options.projectId}-default-rtdb.firebaseio.com`);let u=GE(l,a),f=u.repoInfo,h;typeof process<"u"&&hE&&(h=hE[GU]),h?(l=`http://${h}?ns=${f.namespace}`,u=GE(l,a),f=u.repoInfo):u.repoInfo.secure;const p=new oj(e.name,e.options,t);wU("Invalid Firebase Database URL",u),Ye(u.path)||mi("Database URL must point to the root of a Firebase Database (not including a child path).");const g=XU(f,e,p,new aj(e,n));return new ZU(g,e)}function KU(e,t){const n=Ky[t];(!n||n[e.key]!==e)&&mi(`Database ${t}(${e.repoInfo_}) has already been deleted.`),LU(e),delete n[e.key]}function XU(e,t,n,i){let a=Ky[t.name];a||(a={},Ky[t.name]=a);let l=a[e.toURLString()];return l&&mi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new RU(e,YU,n,i),a[e.toURLString()]=l,l}class ZU{constructor(t,n){this._repoInternal=t,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(AU(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Si(this._repo,Xe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(KU(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&mi("Cannot call "+t+" on a deleted database.")}}function JU(e=jv(),t){const n=Yo(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const i=FL("database");i&&ez(n,...i)}return n}function ez(e,t,n,i={}){e=Gt(e),e._checkNotDeleted("useEmulator");const a=`${t}:${n}`,l=e._repoInternal;if(e._instanceStarted){if(a===e._repoInternal.repoInfo_.host&&da(i,l.repoInfo_.emulatorOptions))return;mi("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let u;if(l.repoInfo_.nodeAdmin)i.mockUserToken&&mi('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new vf(vf.OWNER);else if(i.mockUserToken){const f=typeof i.mockUserToken=="string"?i.mockUserToken:qL(i.mockUserToken,e.app.options.projectId);u=new vf(f)}Vo(t)&&(LC(t),PC("Database",!0)),QU(l,a,i,u)}/**
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
 */function tz(e){q3(Qo),Nr(new hr("database",(t,{instanceIdentifier:n})=>{const i=t.getProvider("app").getImmediate(),a=t.getProvider("auth-internal"),l=t.getProvider("app-check-internal");return WU(i,a,l,n)},"PUBLIC").setMultipleInstances(!0)),Wn(pE,mE,e),Wn(pE,mE,"esm2020")}di.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)};di.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};tz();var Fs={},Vg={},Gg={},QE;function GA(){return QE||(QE=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.getBookableStatus=e.isWaitlistFull=e.isFree=e.WAITLIST_MAX=void 0,e.WAITLIST_MAX=10;const t=a=>a.occupancy<a.max_occupancy;e.isFree=t;const n=a=>a.waiting_count>=e.WAITLIST_MAX;e.isWaitlistFull=n;const i=a=>(0,e.isFree)(a)?"free":(0,e.isWaitlistFull)(a)?"full":"waitlist";e.getBookableStatus=i})(Gg)),Gg}var qs={},WE;function YA(){return WE||(WE=1,Object.defineProperty(qs,"__esModule",{value:!0}),qs.DEFAULT_STUDIO_ID=qs.STUDIOS=void 0,qs.STUDIOS={7248695:{location:"New York",timezone:"America/New_York"},7248663:{location:"London",timezone:"Europe/London"}},qs.DEFAULT_STUDIO_ID="7248695"),qs}var KE;function nz(){return KE||(KE=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.getChangeType=e.classifyMatch=e.matchesAlert=void 0;const t=GA(),n=YA(),i=(g,y)=>!(y.maxStatus==="free"&&!(0,t.isFree)(g)||y.maxStatus==="waitlist"&&(0,t.isWaitlistFull)(g)),a=(g,y)=>y.disciplines?y.disciplines.some(v=>v===String(g.offering_type.category.id)):!0,l=(g,y)=>y.instructors?g.instructors.some(v=>y.instructors.indexOf(String(v.id))!==-1):!0,u=(g,y)=>{if(!y.timeRanges)return!0;const v=n.STUDIOS[y.studioId]?.timezone;if(!v)return!1;const S=new Date(g.starts_at),w=new Date(S.toLocaleString("en-US",{timeZone:"UTC"})),D=new Date(S.toLocaleString("en-US",{timeZone:v})),C=w.getTime()-D.getTime();S.setTime(S.getTime()-C);const I=y.timeRanges[S.getDay()];if(!I)return!1;const k=S.getHours()*60+S.getMinutes();return I.startMin<=k&&I.endMin>=k},f=(g,y)=>i(g,y)&&a(g,y)&&l(g,y)&&u(g,y);e.matchesAlert=f;const h=(g,y)=>{const v=[];return i(g,y)||v.push("status"),a(g,y)||v.push("discipline"),l(g,y)||v.push("instructor"),u(g,y)||v.push("time"),v.length===0?{type:"match"}:v.length===1?{type:"near-miss",reason:v[0]}:{type:"skipped"}};e.classifyMatch=h;const p=(g,y,v)=>(0,e.matchesAlert)(v,g)?g.maxStatus==="free"&&!(0,t.isFree)(y)&&(0,t.isFree)(v)?"became_free":g.maxStatus==="waitlist"&&(0,t.isWaitlistFull)(y)&&!(0,t.isWaitlistFull)(v)?"waitlist_opened":null:null;e.getChangeType=p})(Vg)),Vg}var Yg={},XE;function rz(){return XE||(XE=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isBookableStatus=e.BOOKABLE_STATUS_KEYS=void 0,e.BOOKABLE_STATUS_KEYS=["free","waitlist","full"];const t=n=>e.BOOKABLE_STATUS_KEYS.indexOf(n)!==-1;e.isBookableStatus=t})(Yg)),Yg}var Qg={},ZE;function iz(){return ZE||(ZE=1,Object.defineProperty(Qg,"__esModule",{value:!0})),Qg}var oc={},JE;function sz(){return JE||(JE=1,Object.defineProperty(oc,"__esModule",{value:!0}),oc.PATHS=void 0,oc.PATHS={alerts:e=>`alerts/${e}`,alert:(e,t)=>`alerts/${e}/${t}`,alertPreferences:e=>`alertPreferences/${e}`,messagingTokens:e=>`messagingTokens/${e}`,messagingToken:(e,t)=>`messagingTokens/${e}/${t}`,classHistory:e=>`classHistory/${e}`,classSnapshot:(e,t)=>`classHistory/${e}/${t}`}),oc}var Vs={},ex;function az(){if(ex)return Vs;ex=1,Object.defineProperty(Vs,"__esModule",{value:!0}),Vs.isNotEmpty=Vs.isEmpty=void 0;const e=n=>n==null;Vs.isEmpty=e;const t=n=>n!=null;return Vs.isNotEmpty=t,Vs}var Wg={},tx;function oz(){return tx||(tx=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isAllDay=e.DEFAULT_TIME_RANGE=e.SPECIFIC_DEFAULT_TIME_RANGE=e.ALL_DAY_TIME_RANGE=void 0,e.ALL_DAY_TIME_RANGE={startMin:0,endMin:1440},e.SPECIFIC_DEFAULT_TIME_RANGE={startMin:420,endMin:1140},e.DEFAULT_TIME_RANGE=e.ALL_DAY_TIME_RANGE;const t=n=>n.startMin===e.ALL_DAY_TIME_RANGE.startMin&&n.endMin===e.ALL_DAY_TIME_RANGE.endMin;e.isAllDay=t})(Wg)),Wg}var nx;function lz(){return nx||(nx=1,(function(e){var t=Fs&&Fs.__createBinding||(Object.create?(function(i,a,l,u){u===void 0&&(u=l);var f=Object.getOwnPropertyDescriptor(a,l);(!f||("get"in f?!a.__esModule:f.writable||f.configurable))&&(f={enumerable:!0,get:function(){return a[l]}}),Object.defineProperty(i,u,f)}):(function(i,a,l,u){u===void 0&&(u=l),i[u]=a[l]})),n=Fs&&Fs.__exportStar||function(i,a){for(var l in i)l!=="default"&&!Object.prototype.hasOwnProperty.call(a,l)&&t(a,i,l)};Object.defineProperty(e,"__esModule",{value:!0}),n(nz(),e),n(rz(),e),n(iz(),e),n(GA(),e),n(sz(),e),n(az(),e),n(YA(),e),n(oz(),e)})(Fs)),Fs}var Qe=lz();const Mn=Oh(()=>JU(xc)),QA=async(e,t)=>{const n=Mn;if(!n)throw new Error("No Firebase database connection to use");const i=yr(n,Qe.PATHS.messagingToken(e,t));await FA(i)},rx=async(e,t)=>{const n=Mn;if(!n)throw new Error("No Firebase database connection to use");const i=yr(n,Qe.PATHS.messagingToken(e,t)),a={timestamp:new Date().getTime(),userAgent:navigator.userAgent};await D_(i,a)},cz=({children:e})=>{const[t,n]=R.useState();R.useEffect(()=>{if(_o){const u=H6(_o,f=>{console.log("[MessagingProvider] Received message ",f);const h=f.notification?.title??f.data?.title,p=f.notification?.body??f.data?.body;h&&new Notification(h,{body:p})});return()=>{u()}}return()=>{}},[]);const i=ct(fu);R.useEffect(()=>{_o&&i&&Zw().then(u=>(n(u),rx(i,u))).catch(u=>{Or(u)})},[i]);const a=R.useCallback(()=>{_o&&i&&Zw().then(u=>(n(u),rx(i,u))).catch(u=>{Or(u)})},[i]);R.useEffect(()=>{const u=()=>{document.visibilityState==="visible"&&a()};return document.addEventListener("visibilitychange",u),()=>document.removeEventListener("visibilitychange",u)},[a]);const l=R.useCallback(async()=>{t&&i&&(await QA(i,t),n(void 0))},[t,i]);return _.jsx(hu.Provider,{value:{token:t,refreshToken:a,deleteToken:l},children:e})},WA=60,N_=e=>e.session.state!=="fulfilled"?!1:e.session.data?.isAdmin===!0,rt={CLASS_LIST:"/class-list",ABOUT:"/about",SIGN_IN:"/sign-in",ALERTS:"/alerts",ALERTS_EDITOR:"/alerts/edit",STATS:"/stats"},KA=({size:e=22})=>_.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[_.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M 7.556 3.681 C 8.185 3.199 8.927 2.837 9.796 2.612 C 9.786 2.524 9.781 2.435 9.781 2.345 C 9.781 1.089 10.8 0.072 12.055 0.072 C 13.311 0.072 14.328 1.089 14.328 2.345 C 14.328 2.435 14.323 2.524 14.313 2.612 C 15.181 2.837 15.925 3.199 16.553 3.681 C 17.662 4.533 18.304 5.677 18.683 6.817 C 19.062 7.948 19.198 9.126 19.264 10.119 C 19.29 10.523 19.308 10.91 19.321 11.252 L 19.331 11.482 C 19.349 11.893 19.368 12.199 19.398 12.425 C 19.62 14.086 19.895 15.252 20.289 16.183 C 20.673 17.094 21.187 17.828 21.952 18.592 C 22.277 18.917 22.374 19.406 22.198 19.831 C 22.023 20.256 21.609 20.532 21.148 20.532 L 14.025 20.532 C 14.218 20.867 14.328 21.255 14.328 21.668 C 14.328 22.925 13.311 23.943 12.055 23.943 C 10.8 23.943 9.781 22.925 9.781 21.668 C 9.781 21.255 9.892 20.867 10.086 20.532 L 2.961 20.532 C 2.502 20.532 2.087 20.256 1.911 19.831 C 1.735 19.406 1.832 18.917 2.157 18.592 C 2.923 17.826 3.437 17.098 3.819 16.19 C 4.213 15.262 4.488 14.099 4.711 12.425 C 4.742 12.199 4.76 11.893 4.777 11.482 L 4.787 11.252 C 4.802 10.91 4.818 10.523 4.844 10.119 C 4.911 9.126 5.048 7.948 5.424 6.817 C 5.805 5.677 6.447 4.533 7.556 3.681 Z M 5.312 18.259 C 5.537 17.889 5.736 17.497 5.914 17.075 C 6.421 15.879 6.73 14.485 6.965 12.727 C 7.011 12.384 7.032 11.98 7.049 11.581 L 7.06 11.337 C 7.074 10.996 7.089 10.644 7.113 10.272 C 7.175 9.347 7.296 8.394 7.582 7.536 C 7.865 6.686 8.292 5.982 8.941 5.484 C 9.582 4.992 10.546 4.618 12.055 4.618 C 13.564 4.618 14.527 4.992 15.167 5.484 C 15.816 5.982 16.245 6.686 16.528 7.536 C 16.814 8.394 16.934 9.347 16.997 10.272 C 17.021 10.644 17.036 10.996 17.05 11.337 L 17.061 11.581 C 17.077 11.98 17.098 12.384 17.144 12.727 C 17.377 14.475 17.688 15.867 18.194 17.066 C 18.373 17.491 18.573 17.884 18.799 18.259 L 5.312 18.259 Z",fill:"currentColor"}),_.jsx("path",{d:"M 15.285 7.952 L 16.425 5.973 C 16.754 5.392 16.56 4.649 15.98 4.318 C 15.402 3.986 14.657 4.18 14.326 4.761 L 13.179 6.741 C 10.743 5.973 8.016 6.97 6.686 9.274 C 5.838 10.74 5.736 12.426 6.25 13.905 L 8.359 10.243 C 8.359 10.243 8.359 10.243 8.359 10.243 C 8.841 9.403 9.63 8.802 10.568 8.551 C 11.506 8.296 12.482 8.427 13.323 8.917 C 15.056 9.918 15.655 12.146 14.652 13.877 C 13.648 15.611 11.428 16.21 9.689 15.206 L 10.9 13.109 C 11.479 13.44 12.222 13.247 12.555 12.666 C 12.886 12.087 12.69 11.345 12.111 11.013 C 11.532 10.68 10.788 10.877 10.457 11.454 L 6.602 18.144 C 6.269 18.725 6.464 19.466 7.044 19.8 C 7.624 20.13 8.367 19.935 8.699 19.355 L 9.846 17.377 C 12.281 18.144 15.009 17.149 16.338 14.842 C 17.666 12.543 17.165 9.685 15.285 7.952 Z",fill:"currentColor",style:{strokeWidth:"0.5px",stroke:"currentColor"}})]});function XA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ZA=XA,JA=new wa("auth","Firebase",XA());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh=new Lv("@firebase/auth");function uz(e,...t){nh.logLevel<=lt.WARN&&nh.warn(`Auth (${Qo}): ${e}`,...t)}function _f(e,...t){nh.logLevel<=lt.ERROR&&nh.error(`Auth (${Qo}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(e,...t){throw k_(e,...t)}function fr(e,...t){return k_(e,...t)}function M_(e,t,n){const i={...ZA(),[t]:n};return new wa("auth","Firebase",i).create(t,{appName:e.name})}function fi(e){return M_(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function dz(e,t,n){const i=n;if(!(t instanceof i))throw i.name!==t.constructor.name&&Jn(e,"argument-error"),M_(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function k_(e,...t){if(typeof e!="string"){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return JA.create(e,...t)}function Oe(e,t,...n){if(!e)throw k_(t,...n)}function li(e){const t="INTERNAL ASSERTION FAILED: "+e;throw _f(t),new Error(t)}function gi(e,t){e||li(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xy(){return typeof self<"u"&&self.location?.href||""}function fz(){return ix()==="http:"||ix()==="https:"}function ix(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hz(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fz()||QL()||"connection"in navigator)?navigator.onLine:!0}function pz(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(t,n){this.shortDelay=t,this.longDelay=n,gi(n>t,"Short delay should be less than long delay!"),this.isMobile=kv()||jC()}get(){return hz()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(e,t){gi(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{static initialize(t,n,i){this.fetchImpl=t,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;li("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;li("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;li("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mz={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gz=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],yz=new bu(3e4,6e4);function ys(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function vs(e,t,n,i,a={}){return tI(e,a,async()=>{let l={},u={};i&&(t==="GET"?u=i:l={body:JSON.stringify(i)});const f=Go({key:e.config.apiKey,...u}).slice(1),h=await e._getAdditionalHeaders();h["Content-Type"]="application/json",e.languageCode&&(h["X-Firebase-Locale"]=e.languageCode);const p={method:t,headers:h,...l};return YL()||(p.referrerPolicy="no-referrer"),e.emulatorConfig&&Vo(e.emulatorConfig.host)&&(p.credentials="include"),eI.fetch()(await nI(e,e.config.apiHost,n,f),p)})}async function tI(e,t,n){e._canInitEmulator=!1;const i={...mz,...t};try{const a=new _z(e),l=await Promise.race([n(),a.promise]);a.clearNetworkTimeout();const u=await l.json();if("needConfirmation"in u)throw Kd(e,"account-exists-with-different-credential",u);if(l.ok&&!("errorMessage"in u))return u;{const f=l.ok?u.errorMessage:u.error.message,[h,p]=f.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Kd(e,"credential-already-in-use",u);if(h==="EMAIL_EXISTS")throw Kd(e,"email-already-in-use",u);if(h==="USER_DISABLED")throw Kd(e,"user-disabled",u);const g=i[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw M_(e,g,p);Jn(e,g)}}catch(a){if(a instanceof _i)throw a;Jn(e,"network-request-failed",{message:String(a)})}}async function Su(e,t,n,i,a={}){const l=await vs(e,t,n,i,a);return"mfaPendingCredential"in l&&Jn(e,"multi-factor-auth-required",{_serverResponse:l}),l}async function nI(e,t,n,i){const a=`${t}${n}?${i}`,l=e,u=l.config.emulator?L_(e.config,a):`${e.config.apiScheme}://${a}`;return gz.includes(n)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(u).toString():u}function vz(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class _z{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(fr(this.auth,"network-request-failed")),yz.get())})}}function Kd(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const a=fr(e,t,i);return a.customData._tokenResponse=n,a}function sx(e){return e!==void 0&&e.enterprise!==void 0}class bz{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return vz(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Sz(e,t){return vs(e,"GET","/v2/recaptchaConfig",ys(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wz(e,t){return vs(e,"POST","/v1/accounts:delete",t)}async function rh(e,t){return vs(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Ez(e,t=!1){const n=Gt(e),i=await n.getIdToken(t),a=P_(i);Oe(a&&a.exp&&a.auth_time&&a.iat,n.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,u=l?.sign_in_provider;return{claims:a,token:i,authTime:Nc(Kg(a.auth_time)),issuedAtTime:Nc(Kg(a.iat)),expirationTime:Nc(Kg(a.exp)),signInProvider:u||null,signInSecondFactor:l?.sign_in_second_factor||null}}function Kg(e){return Number(e)*1e3}function P_(e){const[t,n,i]=e.split(".");if(t===void 0||n===void 0||i===void 0)return _f("JWT malformed, contained fewer than 3 sections"),null;try{const a=kf(n);return a?JSON.parse(a):(_f("Failed to decode base64 JWT payload"),null)}catch(a){return _f("Caught error parsing JWT payload as JSON",a?.toString()),null}}function ax(e){const t=P_(e);return Oe(t,"internal-error"),Oe(typeof t.exp<"u","internal-error"),Oe(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tu(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof _i&&xz(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function xz({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tz{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Nc(this.lastLoginAt),this.creationTime=Nc(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ih(e){const t=e.auth,n=await e.getIdToken(),i=await tu(e,rh(t,{idToken:n}));Oe(i?.users.length,t,"internal-error");const a=i.users[0];e._notifyReloadListener(a);const l=a.providerUserInfo?.length?rI(a.providerUserInfo):[],u=Rz(e.providerData,l),f=e.isAnonymous,h=!(e.email&&a.passwordHash)&&!u?.length,p=f?h:!1,g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:u,metadata:new Zy(a.createdAt,a.lastLoginAt),isAnonymous:p};Object.assign(e,g)}async function Cz(e){const t=Gt(e);await ih(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Rz(e,t){return[...e.filter(i=>!t.some(a=>a.providerId===i.providerId)),...t]}function rI(e){return e.map(({providerId:t,...n})=>({providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Az(e,t){const n=await tI(e,{},async()=>{const i=Go({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:a,apiKey:l}=e.config,u=await nI(e,a,"/v1/token",`key=${l}`),f=await e._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:f,body:i};return e.emulatorConfig&&Vo(e.emulatorConfig.host)&&(h.credentials="include"),eI.fetch()(u,h)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Iz(e,t){return vs(e,"POST","/v2/accounts:revokeToken",ys(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Oe(t.idToken,"internal-error"),Oe(typeof t.idToken<"u","internal-error"),Oe(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):ax(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){Oe(t.length!==0,"internal-error");const n=ax(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Oe(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:i,refreshToken:a,expiresIn:l}=await Az(t,n);this.updateTokensAndExpiration(i,a,Number(l))}updateTokensAndExpiration(t,n,i){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(t,n){const{refreshToken:i,accessToken:a,expirationTime:l}=n,u=new To;return i&&(Oe(typeof i=="string","internal-error",{appName:t}),u.refreshToken=i),a&&(Oe(typeof a=="string","internal-error",{appName:t}),u.accessToken=a),l&&(Oe(typeof l=="number","internal-error",{appName:t}),u.expirationTime=l),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new To,this.toJSON())}_performRefresh(){return li("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(e,t){Oe(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class or{constructor({uid:t,auth:n,stsTokenManager:i,...a}){this.providerId="firebase",this.proactiveRefresh=new Tz(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Zy(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(t){const n=await tu(this,this.stsTokenManager.getToken(this.auth,t));return Oe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Ez(this,t)}reload(){return Cz(this)}_assign(t){this!==t&&(Oe(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>({...n})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new or({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(t){Oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),n&&await ih(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Nn(this.auth.app))return Promise.reject(fi(this.auth));const t=await this.getIdToken();return await tu(this,wz(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){const i=n.displayName??void 0,a=n.email??void 0,l=n.phoneNumber??void 0,u=n.photoURL??void 0,f=n.tenantId??void 0,h=n._redirectEventId??void 0,p=n.createdAt??void 0,g=n.lastLoginAt??void 0,{uid:y,emailVerified:v,isAnonymous:S,providerData:w,stsTokenManager:D}=n;Oe(y&&D,t,"internal-error");const C=To.fromJSON(this.name,D);Oe(typeof y=="string",t,"internal-error"),Yi(i,t.name),Yi(a,t.name),Oe(typeof v=="boolean",t,"internal-error"),Oe(typeof S=="boolean",t,"internal-error"),Yi(l,t.name),Yi(u,t.name),Yi(f,t.name),Yi(h,t.name),Yi(p,t.name),Yi(g,t.name);const I=new or({uid:y,auth:t,email:a,emailVerified:v,displayName:i,isAnonymous:S,photoURL:u,phoneNumber:l,tenantId:f,stsTokenManager:C,createdAt:p,lastLoginAt:g});return w&&Array.isArray(w)&&(I.providerData=w.map(k=>({...k}))),h&&(I._redirectEventId=h),I}static async _fromIdTokenResponse(t,n,i=!1){const a=new To;a.updateFromServerResponse(n);const l=new or({uid:n.localId,auth:t,stsTokenManager:a,isAnonymous:i});return await ih(l),l}static async _fromGetAccountInfoResponse(t,n,i){const a=n.users[0];Oe(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?rI(a.providerUserInfo):[],u=!(a.email&&a.passwordHash)&&!l?.length,f=new To;f.updateFromIdToken(i);const h=new or({uid:a.localId,auth:t,stsTokenManager:f,isAnonymous:u}),p={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new Zy(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!l?.length};return Object.assign(h,p),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ox=new Map;function ci(e){gi(e instanceof Function,"Expected a class definition");let t=ox.get(e);return t?(gi(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ox.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}iI.type="NONE";const lx=iI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bf(e,t,n){return`firebase:${e}:${t}:${n}`}class Co{constructor(t,n,i){this.persistence=t,this.auth=n,this.userKey=i;const{config:a,name:l}=this.auth;this.fullUserKey=bf(this.userKey,a.apiKey,l),this.fullPersistenceKey=bf("persistence",a.apiKey,l),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await rh(this.auth,{idToken:t}).catch(()=>{});return n?or._fromGetAccountInfoResponse(this.auth,n,t):null}return or._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,i="authUser"){if(!n.length)return new Co(ci(lx),t,i);const a=(await Promise.all(n.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let l=a[0]||ci(lx);const u=bf(i,t.config.apiKey,t.name);let f=null;for(const p of n)try{const g=await p._get(u);if(g){let y;if(typeof g=="string"){const v=await rh(t,{idToken:g}).catch(()=>{});if(!v)break;y=await or._fromGetAccountInfoResponse(t,v,g)}else y=or._fromJSON(t,g);p!==l&&(f=y),l=p;break}}catch{}const h=a.filter(p=>p._shouldAllowMigration);return!l._shouldAllowMigration||!h.length?new Co(l,t,i):(l=h[0],f&&await l._set(u,f.toJSON()),await Promise.all(n.map(async p=>{if(p!==l)try{await p._remove(u)}catch{}})),new Co(l,t,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cx(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(lI(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(sI(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(uI(t))return"Blackberry";if(dI(t))return"Webos";if(aI(t))return"Safari";if((t.includes("chrome/")||oI(t))&&!t.includes("edge/"))return"Chrome";if(cI(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=e.match(n);if(i?.length===2)return i[1]}return"Other"}function sI(e=fn()){return/firefox\//i.test(e)}function aI(e=fn()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function oI(e=fn()){return/crios\//i.test(e)}function lI(e=fn()){return/iemobile/i.test(e)}function cI(e=fn()){return/android/i.test(e)}function uI(e=fn()){return/blackberry/i.test(e)}function dI(e=fn()){return/webos/i.test(e)}function j_(e=fn()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Dz(e=fn()){return j_(e)&&!!window.navigator?.standalone}function Oz(){return WL()&&document.documentMode===10}function fI(e=fn()){return j_(e)||cI(e)||dI(e)||uI(e)||/windows phone/i.test(e)||lI(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(e,t=[]){let n;switch(e){case"Browser":n=cx(fn());break;case"Worker":n=`${cx(fn())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Qo}/${i}`}/**
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
 */class Nz{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const i=l=>new Promise((u,f)=>{try{const h=t(l);u(h)}catch(h){f(h)}});i.onAbort=n,this.queue.push(i);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const i of this.queue)await i(t),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const a of n)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
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
 */async function Mz(e,t={}){return vs(e,"GET","/v2/passwordPolicy",ys(e,t))}/**
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
 */const kz=6;class Lz{constructor(t){const n=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??kz,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=t.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,n),this.validatePasswordCharacterOptions(t,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(t,n){const i=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=t.length>=i),a&&(n.meetsMaxPasswordLength=t.length<=a)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let a=0;a<t.length;a++)i=t.charAt(a),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(t,n,i,a,l){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pz{constructor(t,n,i,a){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ux(this),this.idTokenSubscription=new ux(this),this.beforeStateQueue=new Nz(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=JA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=ci(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Co.create(this,t),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await rh(this,{idToken:t}),i=await or._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){if(Nn(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(u,u))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,a=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=this.redirectUser?._redirectEventId,u=i?._redirectEventId,f=await this.tryRedirectSignIn(t);(!l||l===u)&&f?.user&&(i=f.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(l){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await ih(t)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=pz()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Nn(this.app))return Promise.reject(fi(this));const n=t?Gt(t):null;return n&&Oe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&Oe(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Nn(this.app)?Promise.reject(fi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Nn(this.app)?Promise.reject(fi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ci(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Mz(this),n=new Lz(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new wa("auth","Firebase",t())}onAuthStateChanged(t,n,i){return this.registerStateListener(this.authStateSubscription,t,n,i)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,i){return this.registerStateListener(this.idTokenSubscription,t,n,i)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const i=this.onAuthStateChanged(()=>{i(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await Iz(this,i)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(t,n){const i=await this.getOrInitRedirectPersistenceManager(n);return t===null?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&ci(t)||this._popupRedirectResolver;Oe(n,this,"argument-error"),this.redirectPersistenceManager=await Co.create(this,[ci(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===t?this._currentUser:this.redirectUser?._redirectEventId===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=this.currentUser?.uid??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,i,a){if(this._deleted)return()=>{};const l=typeof n=="function"?n:n.next.bind(n);let u=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(Oe(f,this,"internal-error"),f.then(()=>{u||l(this.currentUser)}),typeof n=="function"){const h=t.addObserver(n,i,a);return()=>{u=!0,h()}}else{const h=t.addObserver(n);return()=>{u=!0,h()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=hI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){if(Nn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return t?.error&&uz(`Error while retrieving App Check token: ${t.error}`),t?.token}}function _s(e){return Gt(e)}class ux{constructor(t){this.auth=t,this.observer=null,this.addObserver=iP(n=>this.observer=n)}get next(){return Oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function jz(e){Yh=e}function pI(e){return Yh.loadJS(e)}function Uz(){return Yh.recaptchaEnterpriseScript}function zz(){return Yh.gapiScript}function $z(e){return`__${e}${Math.floor(Math.random()*1e6)}`}class Bz{constructor(){this.enterprise=new Hz}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class Hz{ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const Fz="recaptcha-enterprise",mI="NO_RECAPTCHA";class qz{constructor(t){this.type=Fz,this.auth=_s(t)}async verify(t="verify",n=!1){async function i(l){if(!n){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(u,f)=>{Sz(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const p=new bz(h);return l.tenantId==null?l._agentRecaptchaConfig=p:l._tenantRecaptchaConfigs[l.tenantId]=p,u(p.siteKey)}}).catch(h=>{f(h)})})}function a(l,u,f){const h=window.grecaptcha;sx(h)?h.enterprise.ready(()=>{h.enterprise.execute(l,{action:t}).then(p=>{u(p)}).catch(()=>{u(mI)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Bz().execute("siteKey",{action:"verify"}):new Promise((l,u)=>{i(this.auth).then(f=>{if(!n&&sx(window.grecaptcha))a(f,l,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let h=Uz();h.length!==0&&(h+=f),pI(h).then(()=>{a(f,l,u)}).catch(p=>{u(p)})}}).catch(f=>{u(f)})})}}async function dx(e,t,n,i=!1,a=!1){const l=new qz(e);let u;if(a)u=mI;else try{u=await l.verify(n)}catch{u=await l.verify(n,!0)}const f={...t};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const h=f.phoneEnrollmentInfo.phoneNumber,p=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:h,recaptchaToken:p,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const h=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:h,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return i?Object.assign(f,{captchaResp:u}):Object.assign(f,{captchaResponse:u}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function Jy(e,t,n,i,a){if(e._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await dx(e,t,n,n==="getOobCode");return i(e,l)}else return i(e,t).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await dx(e,t,n,n==="getOobCode");return i(e,u)}else return Promise.reject(l)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(e,t){const n=Yo(e,"auth");if(n.isInitialized()){const a=n.getImmediate(),l=n.getOptions();if(da(l,t??{}))return a;Jn(a,"already-initialized")}return n.initialize({options:t})}function Vz(e,t){const n=t?.persistence||[],i=(Array.isArray(n)?n:[n]).map(ci);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,t?.popupRedirectResolver)}function Gz(e,t,n){const i=_s(e);Oe(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const a=!1,l=yI(t),{host:u,port:f}=Yz(t),h=f===null?"":`:${f}`,p={url:`${l}//${u}${h}/`},g=Object.freeze({host:u,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!i._canInitEmulator){Oe(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),Oe(da(p,i.config.emulator)&&da(g,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=p,i.emulatorConfig=g,i.settings.appVerificationDisabledForTesting=!0,Vo(u)?(LC(`${l}//${u}${h}`),PC("Auth",!0)):Qz()}function yI(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Yz(e){const t=yI(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){const l=a[1];return{host:l,port:fx(i.substr(l.length+1))}}else{const[l,u]=i.split(":");return{host:l,port:fx(u)}}}function fx(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Qz(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return li("not implemented")}_getIdTokenResponse(t){return li("not implemented")}_linkToIdToken(t,n){return li("not implemented")}_getReauthenticationResolver(t){return li("not implemented")}}async function Wz(e,t){return vs(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kz(e,t){return Su(e,"POST","/v1/accounts:signInWithPassword",ys(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xz(e,t){return Su(e,"POST","/v1/accounts:signInWithEmailLink",ys(e,t))}async function Zz(e,t){return Su(e,"POST","/v1/accounts:signInWithEmailLink",ys(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu extends U_{constructor(t,n,i,a=null){super("password",i),this._email=t,this._password=n,this._tenantId=a}static _fromEmailAndPassword(t,n){return new nu(t,n,"password")}static _fromEmailAndCode(t,n,i=null){return new nu(t,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Jy(t,n,"signInWithPassword",Kz);case"emailLink":return Xz(t,{email:this._email,oobCode:this._password});default:Jn(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Jy(t,i,"signUpPassword",Wz);case"emailLink":return Zz(t,{idToken:n,email:this._email,oobCode:this._password});default:Jn(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ro(e,t){return Su(e,"POST","/v1/accounts:signInWithIdp",ys(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jz="http://localhost";class _a extends U_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new _a(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Jn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:i,signInMethod:a,...l}=n;if(!i||!a)return null;const u=new _a(i,a);return u.idToken=l.idToken||void 0,u.accessToken=l.accessToken||void 0,u.secret=l.secret,u.nonce=l.nonce,u.pendingToken=l.pendingToken||null,u}_getIdTokenResponse(t){const n=this.buildRequest();return Ro(t,n)}_linkToIdToken(t,n){const i=this.buildRequest();return i.idToken=n,Ro(t,i)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Ro(t,n)}buildRequest(){const t={requestUri:Jz,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Go(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e8(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function t8(e){const t=gc(yc(e)).link,n=t?gc(yc(t)).deep_link_id:null,i=gc(yc(e)).deep_link_id;return(i?gc(yc(i)).link:null)||i||n||t||e}class z_{constructor(t){const n=gc(yc(t)),i=n.apiKey??null,a=n.oobCode??null,l=e8(n.mode??null);Oe(i&&a&&l,"argument-error"),this.apiKey=i,this.operation=l,this.code=a,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(t){const n=t8(t);try{return new z_(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(){this.providerId=el.PROVIDER_ID}static credential(t,n){return nu._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const i=z_.parseLink(n);return Oe(i,"argument-error"),nu._fromEmailAndCode(t,i.code,i.tenantId)}}el.PROVIDER_ID="password";el.EMAIL_PASSWORD_SIGN_IN_METHOD="password";el.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu extends $_{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji extends wu{constructor(){super("facebook.com")}static credential(t){return _a._fromParams({providerId:Ji.PROVIDER_ID,signInMethod:Ji.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ji.credentialFromTaggedObject(t)}static credentialFromError(t){return Ji.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ji.credential(t.oauthAccessToken)}catch{return null}}}Ji.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ji.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends wu{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return _a._fromParams({providerId:si.PROVIDER_ID,signInMethod:si.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return si.credentialFromTaggedObject(t)}static credentialFromError(t){return si.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:i}=t;if(!n&&!i)return null;try{return si.credential(n,i)}catch{return null}}}si.GOOGLE_SIGN_IN_METHOD="google.com";si.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es extends wu{constructor(){super("github.com")}static credential(t){return _a._fromParams({providerId:es.PROVIDER_ID,signInMethod:es.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return es.credentialFromTaggedObject(t)}static credentialFromError(t){return es.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return es.credential(t.oauthAccessToken)}catch{return null}}}es.GITHUB_SIGN_IN_METHOD="github.com";es.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts extends wu{constructor(){super("twitter.com")}static credential(t,n){return _a._fromParams({providerId:ts.PROVIDER_ID,signInMethod:ts.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return ts.credentialFromTaggedObject(t)}static credentialFromError(t){return ts.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=t;if(!n||!i)return null;try{return ts.credential(n,i)}catch{return null}}}ts.TWITTER_SIGN_IN_METHOD="twitter.com";ts.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n8(e,t){return Su(e,"POST","/v1/accounts:signUp",ys(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,i,a=!1){const l=await or._fromIdTokenResponse(t,i,a),u=hx(i);return new ba({user:l,providerId:u,_tokenResponse:i,operationType:n})}static async _forOperation(t,n,i){await t._updateTokensIfNecessary(i,!0);const a=hx(i);return new ba({user:t,providerId:a,_tokenResponse:i,operationType:n})}}function hx(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh extends _i{constructor(t,n,i,a){super(n.code,n.message),this.operationType=i,this.user=a,Object.setPrototypeOf(this,sh.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(t,n,i,a){return new sh(t,n,i,a)}}function vI(e,t,n,i){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?sh._fromErrorAndOperation(e,l,t,i):l})}async function r8(e,t,n=!1){const i=await tu(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return ba._forOperation(e,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i8(e,t,n=!1){const{auth:i}=e;if(Nn(i.app))return Promise.reject(fi(i));const a="reauthenticate";try{const l=await tu(e,vI(i,a,t,e),n);Oe(l.idToken,i,"internal-error");const u=P_(l.idToken);Oe(u,i,"internal-error");const{sub:f}=u;return Oe(e.uid===f,i,"user-mismatch"),ba._forOperation(e,a,l)}catch(l){throw l?.code==="auth/user-not-found"&&Jn(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _I(e,t,n=!1){if(Nn(e.app))return Promise.reject(fi(e));const i="signIn",a=await vI(e,i,t),l=await ba._fromIdTokenResponse(e,i,a);return n||await e._updateCurrentUser(l.user),l}async function s8(e,t){return _I(_s(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bI(e){const t=_s(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function a8(e,t,n){if(Nn(e.app))return Promise.reject(fi(e));const i=_s(e),u=await Jy(i,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",n8).catch(h=>{throw h.code==="auth/password-does-not-meet-requirements"&&bI(e),h}),f=await ba._fromIdTokenResponse(i,"signIn",u);return await i._updateCurrentUser(f.user),f}function o8(e,t,n){return Nn(e.app)?Promise.reject(fi(e)):s8(Gt(e),el.credential(t,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&bI(e),i})}function l8(e,t,n,i){return Gt(e).onIdTokenChanged(t,n,i)}function c8(e,t,n){return Gt(e).beforeAuthStateChanged(t,n)}function u8(e,t,n,i){return Gt(e).onAuthStateChanged(t,n,i)}const ah="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ah,"1"),this.storage.removeItem(ah),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d8=1e3,f8=10;class wI extends SI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=fI(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),a=this.localCache[n];i!==a&&t(n,a,i)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((u,f,h)=>{this.notifyListeners(u,h)});return}const i=t.key;n?this.detachListener():this.stopPolling();const a=()=>{const u=this.storage.getItem(i);!n&&this.localCache[i]===u||this.notifyListeners(i,u)},l=this.storage.getItem(i);Oz()&&l!==t.newValue&&t.newValue!==t.oldValue?setTimeout(a,f8):a()}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const a of Array.from(i))a(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:i}),!0)})},d8)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}wI.type="LOCAL";const h8=wI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI extends SI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}EI.type="SESSION";const xI=EI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p8(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(a=>a.isListeningto(t));if(n)return n;const i=new Qh(t);return this.receivers.push(i),i}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:i,eventType:a,data:l}=n.data,u=this.handlersMap[a];if(!u?.size)return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:a});const f=Array.from(u).map(async p=>p(n.origin,l)),h=await p8(f);n.ports[0].postMessage({status:"done",eventId:i,eventType:a,response:h})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B_(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m8{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,i=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,u;return new Promise((f,h)=>{const p=B_("",20);a.port1.start();const g=setTimeout(()=>{h(new Error("unsupported_event"))},i);u={messageChannel:a,onMessage(y){const v=y;if(v.data.eventId===p)switch(v.data.status){case"ack":clearTimeout(g),l=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(v.data.response);break;default:clearTimeout(g),clearTimeout(l),h(new Error("invalid_response"));break}}},this.handlers.add(u),a.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:t,eventId:p,data:n},[a.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(){return window}function g8(e){Dr().location.href=e}/**
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
 */function TI(){return typeof Dr().WorkerGlobalScope<"u"&&typeof Dr().importScripts=="function"}async function y8(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function v8(){return navigator?.serviceWorker?.controller||null}function _8(){return TI()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI="firebaseLocalStorageDb",b8=1,oh="firebaseLocalStorage",RI="fbase_key";class Eu{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wh(e,t){return e.transaction([oh],t?"readwrite":"readonly").objectStore(oh)}function S8(){const e=indexedDB.deleteDatabase(CI);return new Eu(e).toPromise()}function ev(){const e=indexedDB.open(CI,b8);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const i=e.result;try{i.createObjectStore(oh,{keyPath:RI})}catch(a){n(a)}}),e.addEventListener("success",async()=>{const i=e.result;i.objectStoreNames.contains(oh)?t(i):(i.close(),await S8(),t(await ev()))})})}async function px(e,t,n){const i=Wh(e,!0).put({[RI]:t,value:n});return new Eu(i).toPromise()}async function w8(e,t){const n=Wh(e,!1).get(t),i=await new Eu(n).toPromise();return i===void 0?null:i.value}function mx(e,t){const n=Wh(e,!0).delete(t);return new Eu(n).toPromise()}const E8=800,x8=3;class AI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ev(),this.db)}async _withRetries(t){let n=0;for(;;)try{const i=await this._openDb();return await t(i)}catch(i){if(n++>x8)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return TI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qh._getInstance(_8()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await y8(),!this.activeServiceWorker)return;this.sender=new m8(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&t[0]?.fulfilled&&t[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||v8()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ev();return await px(t,ah,"1"),await mx(t,ah),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>px(i,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(i=>w8(i,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>mx(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(a=>{const l=Wh(a,!1).getAll();return new Eu(l).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(t.length!==0)for(const{fbase_key:a,value:l}of t)i.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),n.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!i.has(a)&&(this.notifyListeners(a,null),n.push(a));return n}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const a of Array.from(i))a(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),E8)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}AI.type="LOCAL";const T8=AI;new bu(3e4,6e4);/**
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
 */function II(e,t){return t?ci(t):(Oe(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_ extends U_{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Ro(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Ro(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Ro(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function C8(e){return _I(e.auth,new H_(e),e.bypassAuthState)}function R8(e){const{auth:t,user:n}=e;return Oe(n,t,"internal-error"),i8(n,new H_(e),e.bypassAuthState)}async function A8(e){const{auth:t,user:n}=e;return Oe(n,t,"internal-error"),r8(n,new H_(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(t,n,i,a,l=!1){this.auth=t,this.resolver=i,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:i,postBody:a,tenantId:l,error:u,type:f}=t;if(u){this.reject(u);return}const h={auth:this.auth,requestUri:n,sessionId:i,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(h))}catch(p){this.reject(p)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return C8;case"linkViaPopup":case"linkViaRedirect":return A8;case"reauthViaPopup":case"reauthViaRedirect":return R8;default:Jn(this.auth,"internal-error")}}resolve(t){gi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){gi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I8=new bu(2e3,1e4);async function D8(e,t,n){if(Nn(e.app))return Promise.reject(fr(e,"operation-not-supported-in-this-environment"));const i=_s(e);dz(e,t,$_);const a=II(i,n);return new ra(i,"signInViaPopup",t,a).executeNotNull()}class ra extends DI{constructor(t,n,i,a,l){super(t,n,a,l),this.provider=i,this.authWindow=null,this.pollId=null,ra.currentPopupAction&&ra.currentPopupAction.cancel(),ra.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return Oe(t,this.auth,"internal-error"),t}async onExecution(){gi(this.filter.length===1,"Popup operations only handle one event");const t=B_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(fr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(fr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ra.currentPopupAction=null}pollUserCancellation(){const t=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,I8.get())};t()}}ra.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O8="pendingRedirect",Sf=new Map;class N8 extends DI{constructor(t,n,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let t=Sf.get(this.auth._key());if(!t){try{const i=await M8(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(i)}catch(n){t=()=>Promise.reject(n)}Sf.set(this.auth._key(),t)}return this.bypassAuthState||Sf.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function M8(e,t){const n=P8(t),i=L8(e);if(!await i._isAvailable())return!1;const a=await i._get(n)==="true";return await i._remove(n),a}function k8(e,t){Sf.set(e._key(),t)}function L8(e){return ci(e._redirectPersistence)}function P8(e){return bf(O8,e.config.apiKey,e.name)}async function j8(e,t,n=!1){if(Nn(e.app))return Promise.reject(fi(e));const i=_s(e),a=II(i,t),u=await new N8(i,a,n).execute();return u&&!n&&(delete u.user._redirectEventId,await i._persistUserIfCurrent(u.user),await i._setRedirectUser(null,t)),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U8=600*1e3;class z8{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(t,i)&&(n=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!$8(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){if(t.error&&!OI(t)){const i=t.error.code?.split("auth/")[1]||"internal-error";n.onError(fr(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const i=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=U8&&this.cachedEventUids.clear(),this.cachedEventUids.has(gx(t))}saveEventToCache(t){this.cachedEventUids.add(gx(t)),this.lastProcessedEventTime=Date.now()}}function gx(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function OI({type:e,error:t}){return e==="unknown"&&t?.code==="auth/no-auth-event"}function $8(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return OI(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B8(e,t={}){return vs(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H8=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,F8=/^https?/;async function q8(e){if(e.config.emulator)return;const{authorizedDomains:t}=await B8(e);for(const n of t)try{if(V8(n))return}catch{}Jn(e,"unauthorized-domain")}function V8(e){const t=Xy(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const u=new URL(e);return u.hostname===""&&i===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&u.hostname===i}if(!F8.test(n))return!1;if(H8.test(e))return i===e;const a=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(i)}/**
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
 */const G8=new bu(3e4,6e4);function yx(){const e=Dr().___jsl;if(e?.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Y8(e){return new Promise((t,n)=>{function i(){yx(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{yx(),n(fr(e,"network-request-failed"))},timeout:G8.get()})}if(Dr().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(Dr().gapi?.load)i();else{const a=$z("iframefcb");return Dr()[a]=()=>{gapi.load?i():n(fr(e,"network-request-failed"))},pI(`${zz()}?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw wf=null,t})}let wf=null;function Q8(e){return wf=wf||Y8(e),wf}/**
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
 */const W8=new bu(5e3,15e3),K8="__/auth/iframe",X8="emulator/auth/iframe",Z8={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},J8=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function e$(e){const t=e.config;Oe(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?L_(t,X8):`https://${e.config.authDomain}/${K8}`,i={apiKey:t.apiKey,appName:e.name,v:Qo},a=J8.get(e.config.apiHost);a&&(i.eid=a);const l=e._getFrameworks();return l.length&&(i.fw=l.join(",")),`${n}?${Go(i).slice(1)}`}async function t$(e){const t=await Q8(e),n=Dr().gapi;return Oe(n,e,"internal-error"),t.open({where:document.body,url:e$(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Z8,dontclear:!0},i=>new Promise(async(a,l)=>{await i.restyle({setHideOnLeave:!1});const u=fr(e,"network-request-failed"),f=Dr().setTimeout(()=>{l(u)},W8.get());function h(){Dr().clearTimeout(f),a(i)}i.ping(h).then(h,()=>{l(u)})}))}/**
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
 */const n$={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},r$=500,i$=600,s$="_blank",a$="http://localhost";class vx{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function o$(e,t,n,i=r$,a=i$){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),u=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const h={...n$,width:i.toString(),height:a.toString(),top:l,left:u},p=fn().toLowerCase();n&&(f=oI(p)?s$:n),sI(p)&&(t=t||a$,h.scrollbars="yes");const g=Object.entries(h).reduce((v,[S,w])=>`${v}${S}=${w},`,"");if(Dz(p)&&f!=="_self")return l$(t||"",f),new vx(null);const y=window.open(t||"",f,g);Oe(y,e,"popup-blocked");try{y.focus()}catch{}return new vx(y)}function l$(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const c$="__/auth/handler",u$="emulator/auth/handler",d$=encodeURIComponent("fac");async function _x(e,t,n,i,a,l){Oe(e.config.authDomain,e,"auth-domain-config-required"),Oe(e.config.apiKey,e,"invalid-api-key");const u={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:Qo,eventId:a};if(t instanceof $_){t.setDefaultLanguage(e.languageCode),u.providerId=t.providerId||"",xy(t.getCustomParameters())||(u.customParameters=JSON.stringify(t.getCustomParameters()));for(const[g,y]of Object.entries({}))u[g]=y}if(t instanceof wu){const g=t.getScopes().filter(y=>y!=="");g.length>0&&(u.scopes=g.join(","))}e.tenantId&&(u.tid=e.tenantId);const f=u;for(const g of Object.keys(f))f[g]===void 0&&delete f[g];const h=await e._getAppCheckToken(),p=h?`#${d$}=${encodeURIComponent(h)}`:"";return`${f$(e)}?${Go(f).slice(1)}${p}`}function f$({config:e}){return e.emulator?L_(e,u$):`https://${e.authDomain}/${c$}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg="webStorageSupport";class h${constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xI,this._completeRedirectFn=j8,this._overrideRedirectResult=k8}async _openPopup(t,n,i,a){gi(this.eventManagers[t._key()]?.manager,"_initialize() not called before _openPopup()");const l=await _x(t,n,i,Xy(),a);return o$(t,l,B_())}async _openRedirect(t,n,i,a){await this._originValidation(t);const l=await _x(t,n,i,Xy(),a);return g8(l),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:a,promise:l}=this.eventManagers[n];return a?Promise.resolve(a):(gi(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(t);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(t){const n=await t$(t),i=new z8(t);return n.register("authEvent",a=>(Oe(a?.authEvent,t,"invalid-auth-event"),{status:i.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=n,i}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Xg,{type:Xg},a=>{const l=a?.[0]?.[Xg];l!==void 0&&n(!!l),Jn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=q8(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return fI()||aI()||j_()}}const p$=h$;var bx="@firebase/auth",Sx="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m${constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(i=>{t(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g$(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function y$(e){Nr(new hr("auth",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),a=t.getProvider("heartbeat"),l=t.getProvider("app-check-internal"),{apiKey:u,authDomain:f}=i.options;Oe(u&&!u.includes(":"),"invalid-api-key",{appName:i.name});const h={apiKey:u,authDomain:f,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hI(e)},p=new Pz(i,a,l,h);return Vz(p,n),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,i)=>{t.getProvider("auth-internal").initialize()})),Nr(new hr("auth-internal",t=>{const n=_s(t.getProvider("auth").getImmediate());return(i=>new m$(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wn(bx,Sx,g$(e)),Wn(bx,Sx,"esm2020")}/**
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
 */const v$=300,_$=kC("authIdTokenMaxAge")||v$;let wx=null;const b$=e=>async t=>{const n=t&&await t.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>_$)return;const a=n?.token;wx!==a&&(wx=a,await fetch(e,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function S$(e=jv()){const t=Yo(e,"auth");if(t.isInitialized())return t.getImmediate();const n=gI(e,{popupRedirectResolver:p$,persistence:[T8,h8,xI]}),i=kC("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const u=b$(l.toString());c8(n,u,()=>u(n.currentUser)),l8(n,f=>u(f))}}const a=NC("auth");return a&&Gz(n,`http://${a}`),n}function w$(){return document.getElementsByTagName("head")?.[0]??document}jz({loadJS(e){return new Promise((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=a=>{const l=fr("internal-error");l.customData=a,n(l)},i.type="text/javascript",i.charset="UTF-8",w$().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});y$("Browser");const E$=ZA,ai=Oh(()=>{if(!xc)throw new Error("Firebase app not initialized");try{return S$(xc)}catch{return gI(xc,{errorMap:E$})}}),x$=M(ms)`
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
`,T$=M.div`
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
  margin-bottom: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,C$=M.button`
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
`,R$=()=>{const e=ct(Ko),{deleteToken:t}=R.useContext(hu),n=R.useCallback(async()=>{await t(),await ai?.signOut()},[t]);return e.state==="loading"?null:e.state!=="fulfilled"||!e.data?_.jsx(x$,{to:rt.SIGN_IN,children:"Sign in"}):_.jsxs(_.Fragment,{children:[_.jsx(T$,{children:e.data.displayName}),_.jsx(C$,{type:"button",onClick:n,children:"Sign out"})]})},A$="#181a2f",I$=280,D$=M.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  transition: opacity 0.2s;
  opacity: ${e=>e.$open?1:0};
  pointer-events: ${e=>e.$open?"all":"none"};
  z-index: 10;
`,O$=M.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: ${I$}px;
  max-width: 90vw;
  background-color: ${e=>e.theme.colors.mainSurface};
  z-index: 11;
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(${e=>e.$open?"0":"100%"});
  overflow: hidden;
`,N$=M.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: env(safe-area-inset-top, 0) 16px 0;
  height: calc(60px + env(safe-area-inset-top, 0px));
  background-color: ${A$};
  color: #fff;
  flex-shrink: 0;
`,M$=M(ms)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: inherit;
`,k$=M.span`
  font-size: 15px;
  font-weight: 600;
`,L$=M.button`
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
`,P$=M.nav`
  flex: 1;
  padding: 8px 0;
  overflow-y: auto;
`,Xd=M(Sv)`
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
`,j$=M.div`
  padding: 16px 20px;
  border-top: 1px solid ${e=>e.theme.borderColor};
  flex-shrink: 0;
`,U$=()=>_.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none","aria-hidden":"true",children:_.jsx("path",{d:"M4 4l10 10M14 4L4 14",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})}),z$=({open:e,onClose:t})=>{const n=ct(N_);return _.jsxs(_.Fragment,{children:[_.jsx(D$,{$open:e,onClick:t}),_.jsxs(O$,{$open:e,onClick:i=>i.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":"Navigation menu",children:[_.jsxs(N$,{children:[_.jsxs(M$,{to:rt.CLASS_LIST,onClick:t,children:[_.jsx(KA,{size:20}),_.jsx(k$,{children:"Peloton Alerts"})]}),_.jsx(L$,{onClick:t,"aria-label":"Close menu",children:_.jsx(U$,{})})]}),_.jsxs(P$,{onClick:t,children:[_.jsx(Xd,{to:rt.CLASS_LIST,end:!0,children:"Classes"}),_.jsx(Xd,{to:rt.ALERTS,children:"Alerts"}),_.jsx(Xd,{to:rt.ABOUT,end:!0,children:"FAQ"}),n&&_.jsx(Xd,{to:rt.STATS,children:"Stats"})]}),_.jsx(j$,{children:_.jsx(R$,{})})]})]})},$$=M.div`
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
`,B$=({children:e,open:t,onClose:n})=>{const i=R.useRef(null),a=R.useCallback(l=>{l.key==="Escape"&&n()},[n]);return R.useEffect(()=>{if(t)return document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a)}},[t,a]),R.useEffect(()=>{if(!t)return;const l=f=>{const h=f.target;if(!(h instanceof Node)){n();return}const p=i.current;p&&p.contains(h)||n()},u=setTimeout(()=>{document.addEventListener("click",l,!0)},0);return()=>{clearTimeout(u),document.removeEventListener("click",l,!0)}},[t,n]),t?_.jsx($$,{ref:i,role:"dialog","aria-modal":"true",children:e}):null},H$=M(ms)`
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
`,F$=M.button`
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
`,q$=M.div`
  position: relative;
`,V$=M.button`
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
`,G$=()=>{const e=ct(Ko),[t,n]=R.useState(!1),{deleteToken:i}=R.useContext(hu),a=R.useCallback(async()=>{await i(),await ai?.signOut()},[i]);if(e.state!=="fulfilled"||!e.data){const l=e.state==="loading";return _.jsx(H$,{to:rt.SIGN_IN,$disabled:l,"aria-disabled":l,tabIndex:l?-1:void 0,children:"Sign in"})}return _.jsxs(q$,{children:[_.jsx(F$,{type:"button",onClick:()=>n(!0),"aria-expanded":t,"aria-haspopup":"dialog",children:e.data.displayName}),_.jsx(B$,{open:t,onClose:()=>n(!1),children:_.jsx(V$,{type:"button",onClick:a,children:"Sign out"})})]})},Y$="#181a2f",Kh=680,Q$=M.nav`
  height: inherit;
  background-color: ${Y$};
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

  @media only screen and (min-width: ${Kh+1}px) {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
  }
`,W$=M(ms)`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  justify-self: start;
`,K$=M.span`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.01em;
  white-space: nowrap;
`,X$=M.div`
  display: flex;
  align-items: center;
  gap: 2px;

  @media only screen and (max-width: ${Kh}px) {
    display: none;
  }
`,Zd=M(Sv)`
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
`,Z$=M.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  justify-self: end;

  @media only screen and (max-width: ${Kh}px) {
    display: none;
  }
`,J$=M.button`
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

  @media only screen and (max-width: ${Kh}px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,eB=()=>_.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:_.jsx("path",{d:"M3 5h14M3 10h14M3 15h14",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})}),tB=()=>{const[e,t]=R.useState(!1),n=ct(N_);return _.jsxs(_.Fragment,{children:[_.jsxs(Q$,{children:[_.jsxs(W$,{to:rt.CLASS_LIST,children:[_.jsx(KA,{}),_.jsx(K$,{children:"Peloton Alerts"})]}),_.jsxs(X$,{children:[_.jsx(Zd,{to:rt.CLASS_LIST,end:!0,children:"Classes"}),_.jsx(Zd,{to:rt.ALERTS,children:"Alerts"}),_.jsx(Zd,{to:rt.ABOUT,end:!0,children:"FAQ"}),n&&_.jsx(Zd,{to:rt.STATS,children:"Stats"})]}),_.jsx(Z$,{children:_.jsx(G$,{})}),_.jsx(J$,{type:"button","aria-label":"Open menu",onClick:()=>t(!0),children:_.jsx(eB,{})})]}),_.jsx(z$,{open:e,onClose:()=>t(!1)})]})},nB=M.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`,rB=M.div`
  position: sticky;
  height: calc(${WA}px + env(safe-area-inset-top));
  top: 0;
  z-index: 1;
`,iB=M.div`
  flex: 1;
  background-color: ${e=>e.theme.colors.secondarySurface};
`,aa=({children:e})=>_.jsxs(nB,{children:[_.jsx(rB,{children:_.jsx(tB,{})}),_.jsx(iB,{children:e})]}),Re=(...e)=>on`
  @media only screen and (max-width: ${t=>t.theme.widths.mobile}px) {
    ${on(...e)}
  }
`,NI=(...e)=>on`
  @media only screen and (max-width: ${t=>t.theme.widths.tablet}px) {
    ${on(...e)}
  }
`,sB=M.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 24px 20px;

  ${Re`
    padding: 16px 12px;
  `}
`,aB=M.div`
  margin-bottom: 20px;
`,oB=M.h1`
  font-size: 22px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
  margin: 0;
`,lc=M.section`
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  overflow: hidden;
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
`,cc=M.div`
  padding: 14px 20px;
  border-bottom: 1px solid ${e=>e.theme.borderColor};
`,uc=M.h2`
  font-size: 15px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
  margin: 0;
`,dc=M.div`
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
`,lB=()=>_.jsx(aa,{children:_.jsxs(sB,{children:[_.jsx(aB,{children:_.jsx(oB,{children:"FAQ"})}),_.jsxs(lc,{children:[_.jsx(cc,{children:_.jsx(uc,{children:"What is this?"})}),_.jsx(dc,{children:_.jsxs("p",{children:["A quicker, smarter way to browse"," ",_.jsx("a",{href:"https://studio.onepeloton.com/",target:"_blank",rel:"noreferrer",children:"Peloton Studios"})," ","class reservations. Filter by status (free, waitlist, full), instructor, or discipline — things the official site doesn't support. Classes are fetched directly from Peloton each time you load the page."]})})]}),_.jsxs(lc,{children:[_.jsx(cc,{children:_.jsx(uc,{children:"How do I view classes?"})}),_.jsx(dc,{children:_.jsxs("p",{children:["Open the ",_.jsx(ms,{to:rt.CLASS_LIST,children:"Class List"})," and use the sidebar to set filters or switch between studio locations."]})})]}),_.jsxs(lc,{children:[_.jsx(cc,{children:_.jsx(uc,{children:"Is the class data live?"})}),_.jsx(dc,{children:_.jsx("p",{children:"Yes — data is fetched fresh from Peloton each time you load the page or switch studio. Filters persist across refreshes, unlike the official site."})})]}),_.jsxs(lc,{children:[_.jsx(cc,{children:_.jsx(uc,{children:"When do new classes become available?"})}),_.jsx(dc,{children:_.jsx("p",{children:"New classes typically open at 12:00 pm on Mondays and Thursdays in your studio's local timezone."})})]}),_.jsxs(lc,{children:[_.jsx(cc,{children:_.jsx(uc,{children:"Can I request a feature or report a bug?"})}),_.jsx(dc,{children:_.jsxs("p",{children:["Yes — this project is open source and lives on"," ",_.jsx("a",{href:"https://github.com/Abbondanzo/peloton-reservations",target:"_blank",rel:"noreferrer",children:"GitHub"}),". Open an issue to request a feature, report a bug, or just share feedback. Pull requests are welcome too."]})})]})]})}),cB=e=>{try{return window.localStorage.getItem(e)}catch(t){return Or(t),null}},uB="STUDIO_ID",MI=e=>{const t=cB(uB);return t===null?e:Object.keys(Qe.STUDIOS).includes(t)?t:e},Ta=bi([e=>e.studioSelector],e=>e.studioId),dB={studioId:MI(Qe.DEFAULT_STUDIO_ID)},tv=Ar({name:"studioSelector",initialState:dB,reducers:{setStudioId(e,t){e.studioId=t.payload}}}),{setStudioId:Ef}=tv.actions,rs=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],lh=new Array(48).fill(null).map((e,t)=>{const n=t*30,i=new Date;i.setHours(Math.floor(n/60)),i.setMinutes(n%60);const a=new Intl.DateTimeFormat(void 0,{hour:"numeric",minute:"numeric"});return{minutes:n,label:a.format(i)}}),fB=async(e,t)=>{const n=Mn;if(!n)throw new Error("No Firebase database connection to use");const i=(await qU(yr(n,Qe.PATHS.alerts(e)),t)).key;if(!i)throw new Error("Missing ID from insertion operation");return{...t,id:i}},hB=async(e,t)=>{const n=Mn;if(!n)throw new Error("No Firebase database connection to use");await qA(yr(n,Qe.PATHS.alert(e,t.id)),t)},Ca=on`
  border-color: ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  border-style: solid;
  border-width: 1px;
`,kI=on`
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;on`
  &:focus {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;const pB=M.div`
  display: flex;
  flex-direction: column;
`,mB=M.label`
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,gB=M.input`
  ${Ca}
  padding: 12px 8px;
  font-family: inherit;
`,yB=M.span`
  margin-top: 4px;
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,vB=({label:e,hint:t,placeholder:n,value:i,onChange:a})=>{const l=R.useId();return _.jsxs(pB,{children:[_.jsx(mB,{htmlFor:l,children:e}),_.jsx(gB,{id:l,placeholder:n,value:i,"aria-describedby":t?`${l}-hint`:void 0,onChange:({target:u})=>a(u.value)}),t&&_.jsx(yB,{id:`${l}-hint`,children:t})]})},_B=M.label`
  ${Ca}
  ${kI}
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
`,bB=M.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,SB=M.span`
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
`,wB=M.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,EB=M.input`
  accent-color: ${e=>e.theme.colors.accent};
`,Ex=({name:e,value:t,checked:n,onChange:i,label:a,hint:l,icon:u})=>{const f=R.useId();return _.jsxs(_B,{htmlFor:f,children:[_.jsx(EB,{type:"radio",id:f,name:e,value:t,checked:n,onChange:i}),u,_.jsxs(bB,{children:[_.jsx(SB,{children:a}),l&&_.jsx(wB,{children:l})]})]})},xx=M.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`,Tx=M.legend`
  font-weight: 600;
  font-size: 18px;
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,Cx=M.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  margin: 0 0 16px;
`,Rx=M.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Ax=M.div`
  margin-top: 32px;

  ${Re`
    margin-top: 24px;
  `}
`,xB=Object.entries(Qe.STUDIOS).map(([e,t])=>({id:e,label:t.location})),TB=[{status:"free",label:"Open spots only",hint:"Alert me when a class has available spots"},{status:"waitlist",label:"Open spots or waitlist",hint:"Alert me even if I'd join the waitlist"}],CB=({name:e,onNameChange:t,studioId:n,onStudioChange:i,maxStatus:a,onStatusChange:l})=>_.jsxs("div",{children:[_.jsx(vB,{label:"Alert name (optional)",hint:"Leave blank to auto-generate a name from your filters",placeholder:"e.g. Morning Cycling with Cody",value:e,onChange:t}),_.jsx(Ax,{}),_.jsxs(xx,{children:[_.jsx(Tx,{children:"Which studio?"}),_.jsx(Cx,{children:"Pick the Peloton studio you want to monitor."}),_.jsx(Rx,{children:xB.map(u=>_.jsx(Ex,{name:"studio",value:u.id,checked:n===u.id,onChange:()=>i(u.id),label:u.label},u.id))})]}),_.jsx(Ax,{}),_.jsxs(xx,{children:[_.jsx(Tx,{children:"When should we alert you?"}),_.jsx(Cx,{children:"Choose whether to include waitlisted classes."}),_.jsx(Rx,{children:TB.map(u=>_.jsx(Ex,{name:"status",value:u.status,checked:a===u.status,onChange:()=>l(u.status),label:u.label,hint:u.hint},u.status))})]})]}),Ix={Cardio:"#d8ec43",Cycling:"#bbd4f4",Meditation:"#e6d4ff",Rowing:"#cbf293","Outdoor Run":"#a8e6cf","Outdoor Run/Walk":"#94f3d0",Running:"#fde987",Strength:"#ffc0d5",Tread:"#fdbe9f",Walking:"#ffa8a9",Yoga:"#ceffdc"},LI=.2,ch=e=>Math.round(e*(1-LI*2)),RB=e=>Math.round(e*LI),AB=M.div`
  width: ${e=>ch(e.size)}px;
  height: ${e=>ch(e.size)}px;
  border-radius: ${e=>e.size}px;
  background-color: ${e=>e.color};
  padding: ${e=>RB(e.size)}px;
  flex-shrink: 0;
`,IB=M.img`
  width: ${e=>ch(e.size)}px;
  height: ${e=>ch(e.size)}px;
  display: block;
`,uh=({discipline:e,size:t=32})=>{const n=R.useMemo(()=>{const i=Object.keys(Ix),a=e.name.toLowerCase(),l=i.find(u=>u.toLowerCase()===a)??i.find(u=>{const f=u.toLowerCase();return f.includes(a)||a.includes(f)});if(l)return Ix[l];{const u=`Received unsupported discipline ${e.name}`;return console.log(u),Ov(u),"#fafafa"}},[e.name]);return _.jsx(AB,{color:n,size:t,children:_.jsx(IB,{alt:e.name,src:e.iconUrl,size:t,color:n})})},DB=M.img`
  width: ${e=>e.size}px;
  min-width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  color: #bbb;
`,F_=({instructor:e,size:t=32})=>_.jsx(DB,{src:e.imageUrl,alt:`Profile of ${e.name}`,size:t});var OB=class extends Error{issues;constructor(e){super(e[0].message),this.name="SchemaError",this.issues=e}},PI=(e=>(e.uninitialized="uninitialized",e.pending="pending",e.fulfilled="fulfilled",e.rejected="rejected",e))(PI||{});function Dx(e){return{status:e,isUninitialized:e==="uninitialized",isLoading:e==="pending",isSuccess:e==="fulfilled",isError:e==="rejected"}}var Ox=us;function q_(e,t){if(e===t||!(Ox(e)&&Ox(t)||Array.isArray(e)&&Array.isArray(t)))return t;const n=Object.keys(t),i=Object.keys(e);let a=n.length===i.length;const l=Array.isArray(t)?[]:{};for(const u of n)l[u]=q_(e[u],t[u]),a&&(a=e[u]===l[u]);return a?e:l}function Zg(e){let t=0;for(const n in e)t++;return t}var Nx=e=>[].concat(...e);function NB(e){return new RegExp("(^|:)//").test(e)}function MB(){return typeof document>"u"?!0:document.visibilityState!=="hidden"}function dh(e){return e!=null}function kB(){return typeof navigator>"u"||navigator.onLine===void 0?!0:navigator.onLine}var LB=e=>e.replace(/\/$/,""),PB=e=>e.replace(/^\//,"");function jB(e,t){if(!e)return t;if(!t)return e;if(NB(t))return t;const n=e.endsWith("/")||!t.startsWith("?")?"/":"";return e=LB(e),t=PB(t),`${e}${n}${t}`}function UB(e,t,n){return e.has(t)?e.get(t):e.set(t,n).get(t)}function nv(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}var rv=()=>new Map,Mx=(...e)=>fetch(...e),zB=e=>e.status>=200&&e.status<=299,$B=e=>/ion\/(vnd\.api\+)?json/.test(e.get("content-type")||"");function kx(e){if(!us(e))return e;const t={...e};for(const[n,i]of Object.entries(t))i===void 0&&delete t[n];return t}function BB({baseUrl:e,prepareHeaders:t=y=>y,fetchFn:n=Mx,paramsSerializer:i,isJsonContentType:a=$B,jsonContentType:l="application/json",jsonReplacer:u,timeout:f,responseHandler:h,validateStatus:p,...g}={}){return typeof fetch>"u"&&n===Mx&&console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."),async(v,S,w)=>{const{getState:D,extra:C,endpoint:I,forced:k,type:x}=S;let A,{url:N,headers:T=new Headers(g.headers),params:P=void 0,responseHandler:V=h??"json",validateStatus:H=p??zB,timeout:B=f,...$}=typeof v=="string"?{url:v}:v,G,F=S.signal;B&&(G=new AbortController,S.signal.addEventListener("abort",G.abort),F=G.signal);let K={...g,signal:F,...$};T=new Headers(kx(T)),K.headers=await t(T,{getState:D,arg:v,extra:C,endpoint:I,forced:k,type:x,extraOptions:w})||T;const ue=de=>typeof de=="object"&&(us(de)||Array.isArray(de)||typeof de.toJSON=="function");if(!K.headers.has("content-type")&&ue(K.body)&&K.headers.set("content-type",l),ue(K.body)&&a(K.headers)&&(K.body=JSON.stringify(K.body,u)),P){const de=~N.indexOf("?")?"&":"?",me=i?i(P):new URLSearchParams(kx(P));N+=de+me}N=jB(e,N);const U=new Request(N,K);A={request:new Request(N,K)};let ne,oe=!1,O=G&&setTimeout(()=>{oe=!0,G.abort()},B);try{ne=await n(U)}catch(de){return{error:{status:oe?"TIMEOUT_ERROR":"FETCH_ERROR",error:String(de)},meta:A}}finally{O&&clearTimeout(O),G?.signal.removeEventListener("abort",G.abort)}const X=ne.clone();A.response=X;let le,ie="";try{let de;if(await Promise.all([y(ne,V).then(me=>le=me,me=>de=me),X.text().then(me=>ie=me,()=>{})]),de)throw de}catch(de){return{error:{status:"PARSING_ERROR",originalStatus:ne.status,data:ie,error:String(de)},meta:A}}return H(ne,le)?{data:le,meta:A}:{error:{status:ne.status,data:le},meta:A}};async function y(v,S){if(typeof S=="function")return S(v);if(S==="content-type"&&(S=a(v.headers)?"json":"text"),S==="json"){const w=await v.text();return w.length?JSON.parse(w):null}return v.text()}}var Lx=class{constructor(e,t=void 0){this.value=e,this.meta=t}},V_=cr("__rtkq/focused"),jI=cr("__rtkq/unfocused"),G_=cr("__rtkq/online"),UI=cr("__rtkq/offline");function Xh(e){return e.type==="query"}function HB(e){return e.type==="mutation"}function Zh(e){return e.type==="infinitequery"}function fh(e){return Xh(e)||Zh(e)}function Y_(e,t,n,i,a,l){return FB(e)?e(t,n,i,a).filter(dh).map(iv).map(l):Array.isArray(e)?e.map(iv).map(l):[]}function FB(e){return typeof e=="function"}function iv(e){return typeof e=="string"?{type:e}:e}function qB(e,t){return e.catch(t)}var ru=Symbol("forceQueryFn"),sv=e=>typeof e[ru]=="function";function VB({serializeQueryArgs:e,queryThunk:t,infiniteQueryThunk:n,mutationThunk:i,api:a,context:l,internalState:u}){const{runningQueries:f,runningMutations:h}=u,{unsubscribeQueryResult:p,removeMutationResult:g,updateSubscriptionOptions:y}=a.internalActions;return{buildInitiateQuery:I,buildInitiateInfiniteQuery:k,buildInitiateMutation:x,getRunningQueryThunk:v,getRunningMutationThunk:S,getRunningQueriesThunk:w,getRunningMutationsThunk:D};function v(A,N){return T=>{const P=l.endpointDefinitions[A],V=e({queryArgs:N,endpointDefinition:P,endpointName:A});return f.get(T)?.[V]}}function S(A,N){return T=>h.get(T)?.[N]}function w(){return A=>Object.values(f.get(A)||{}).filter(dh)}function D(){return A=>Object.values(h.get(A)||{}).filter(dh)}function C(A,N){const T=(P,{subscribe:V=!0,forceRefetch:H,subscriptionOptions:B,[ru]:$,...G}={})=>(F,K)=>{const ue=e({queryArgs:P,endpointDefinition:N,endpointName:A});let U;const ee={...G,type:"query",subscribe:V,forceRefetch:H,subscriptionOptions:B,endpointName:A,originalArgs:P,queryCacheKey:ue,[ru]:$};if(Xh(N))U=t(ee);else{const{direction:Ae,initialPageParam:be}=G;U=n({...ee,direction:Ae,initialPageParam:be})}const ne=a.endpoints[A].select(P),oe=F(U),O=ne(K()),{requestId:X,abort:le}=oe,ie=O.requestId!==X,de=f.get(F)?.[ue],me=()=>ne(K()),pe=Object.assign($?oe.then(me):ie&&!de?Promise.resolve(O):Promise.all([de,oe]).then(me),{arg:P,requestId:X,subscriptionOptions:B,queryCacheKey:ue,abort:le,async unwrap(){const Ae=await pe;if(Ae.isError)throw Ae.error;return Ae.data},refetch:()=>F(T(P,{subscribe:!1,forceRefetch:!0})),unsubscribe(){V&&F(p({queryCacheKey:ue,requestId:X}))},updateSubscriptionOptions(Ae){pe.subscriptionOptions=Ae,F(y({endpointName:A,requestId:X,queryCacheKey:ue,options:Ae}))}});if(!de&&!ie&&!$){const Ae=UB(f,F,{});Ae[ue]=pe,pe.then(()=>{delete Ae[ue],Zg(Ae)||f.delete(F)})}return pe};return T}function I(A,N){return C(A,N)}function k(A,N){return C(A,N)}function x(A){return(N,{track:T=!0,fixedCacheKey:P}={})=>(V,H)=>{const B=i({type:"mutation",endpointName:A,originalArgs:N,track:T,fixedCacheKey:P}),$=V(B),{requestId:G,abort:F,unwrap:K}=$,ue=qB($.unwrap().then(oe=>({data:oe})),oe=>({error:oe})),U=()=>{V(g({requestId:G,fixedCacheKey:P}))},ee=Object.assign(ue,{arg:$.arg,requestId:G,abort:F,unwrap:K,reset:U}),ne=h.get(V)||{};return h.set(V,ne),ne[G]=ee,ee.then(()=>{delete ne[G],Zg(ne)||h.delete(V)}),P&&(ne[P]=ee,ee.then(()=>{ne[P]===ee&&(delete ne[P],Zg(ne)||h.delete(V))})),ee}}}var zI=class extends OB{constructor(e,t,n,i){super(e),this.value=t,this.schemaName=n,this._bqMeta=i}},Gs=(e,t)=>Array.isArray(e)?e.includes(t):!!e;async function Ys(e,t,n,i){const a=await e["~standard"].validate(t);if(a.issues)throw new zI(a.issues,t,n,i);return a.value}function Px(e){return e}var fc=(e={})=>({...e,[Mh]:!0});function GB({reducerPath:e,baseQuery:t,context:{endpointDefinitions:n},serializeQueryArgs:i,api:a,assertTagType:l,selectors:u,onSchemaFailure:f,catchSchemaFailure:h,skipSchemaValidation:p}){const g=($,G,F,K)=>(ue,U)=>{const ee=n[$],ne=i({queryArgs:G,endpointDefinition:ee,endpointName:$});if(ue(a.internalActions.queryResultPatched({queryCacheKey:ne,patches:F})),!K)return;const oe=a.endpoints[$].select(G)(U()),O=Y_(ee.providesTags,oe.data,void 0,G,{},l);ue(a.internalActions.updateProvidedBy([{queryCacheKey:ne,providedTags:O}]))};function y($,G,F=0){const K=[G,...$];return F&&K.length>F?K.slice(0,-1):K}function v($,G,F=0){const K=[...$,G];return F&&K.length>F?K.slice(1):K}const S=($,G,F,K=!0)=>(ue,U)=>{const ne=a.endpoints[$].select(G)(U()),oe={patches:[],inversePatches:[],undo:()=>ue(a.util.patchQueryData($,G,oe.inversePatches,K))};if(ne.status==="uninitialized")return oe;let O;if("data"in ne)if(pr(ne.data)){const[X,le,ie]=TR(ne.data,F);oe.patches.push(...le),oe.inversePatches.push(...ie),O=X}else O=F(ne.data),oe.patches.push({op:"replace",path:[],value:O}),oe.inversePatches.push({op:"replace",path:[],value:ne.data});return oe.patches.length===0||ue(a.util.patchQueryData($,G,oe.patches,K)),oe},w=($,G,F)=>K=>K(a.endpoints[$].initiate(G,{subscribe:!1,forceRefetch:!0,[ru]:()=>({data:F})})),D=($,G)=>$.query&&$[G]?$[G]:Px,C=async($,{signal:G,abort:F,rejectWithValue:K,fulfillWithValue:ue,dispatch:U,getState:ee,extra:ne})=>{const oe=n[$.endpointName],{metaSchema:O,skipSchemaValidation:X=p}=oe;try{let le=Px;const ie={signal:G,abort:F,dispatch:U,getState:ee,extra:ne,endpoint:$.endpointName,type:$.type,forced:$.type==="query"?I($,ee()):void 0,queryCacheKey:$.type==="query"?$.queryCacheKey:void 0},de=$.type==="query"?$[ru]:void 0;let me;const pe=async(be,De,Ue,_t)=>{if(De==null&&be.pages.length)return Promise.resolve({data:be});const gt={queryArg:$.originalArgs,pageParam:De},kn=await Ae(gt),Et=_t?y:v;return{data:{pages:Et(be.pages,kn.data,Ue),pageParams:Et(be.pageParams,De,Ue)},meta:kn.meta}};async function Ae(be){let De;const{extraOptions:Ue,argSchema:_t,rawResponseSchema:gt,responseSchema:kn}=oe;if(_t&&!Gs(X,"arg")&&(be=await Ys(_t,be,"argSchema",{})),de?De=de():oe.query?(le=D(oe,"transformResponse"),De=await t(oe.query(be),ie,Ue)):De=await oe.queryFn(be,ie,Ue,Lr=>t(Lr,ie,Ue)),typeof process<"u",De.error)throw new Lx(De.error,De.meta);let{data:Et}=De;gt&&!Gs(X,"rawResponse")&&(Et=await Ys(gt,De.data,"rawResponseSchema",De.meta));let Ln=await le(Et,De.meta,be);return kn&&!Gs(X,"response")&&(Ln=await Ys(kn,Ln,"responseSchema",De.meta)),{...De,data:Ln}}if($.type==="query"&&"infiniteQueryOptions"in oe){const{infiniteQueryOptions:be}=oe,{maxPages:De=1/0}=be;let Ue;const _t={pages:[],pageParams:[]},gt=u.selectQueryEntry(ee(),$.queryCacheKey)?.data,Et=I($,ee())&&!$.direction||!gt?_t:gt;if("direction"in $&&$.direction&&Et.pages.length){const Ln=$.direction==="backward",Yt=(Ln?$I:av)(be,Et,$.originalArgs);Ue=await pe(Et,Yt,De,Ln)}else{const{initialPageParam:Ln=be.initialPageParam}=$,Lr=gt?.pageParams??[],Yt=Lr[0]??Ln,tl=Lr.length;Ue=await pe(Et,Yt,De),de&&(Ue={data:Ue.data.pages[0]});for(let bs=1;bs<tl;bs++){const Ra=av(be,Ue.data,$.originalArgs);Ue=await pe(Ue.data,Ra,De)}}me=Ue}else me=await Ae($.originalArgs);return O&&!Gs(X,"meta")&&me.meta&&(me.meta=await Ys(O,me.meta,"metaSchema",me.meta)),ue(me.data,fc({fulfilledTimeStamp:Date.now(),baseQueryMeta:me.meta}))}catch(le){let ie=le;if(ie instanceof Lx){let de=D(oe,"transformErrorResponse");const{rawErrorResponseSchema:me,errorResponseSchema:pe}=oe;let{value:Ae,meta:be}=ie;try{me&&!Gs(X,"rawErrorResponse")&&(Ae=await Ys(me,Ae,"rawErrorResponseSchema",be)),O&&!Gs(X,"meta")&&(be=await Ys(O,be,"metaSchema",be));let De=await de(Ae,be,$.originalArgs);return pe&&!Gs(X,"errorResponse")&&(De=await Ys(pe,De,"errorResponseSchema",be)),K(De,fc({baseQueryMeta:be}))}catch(De){ie=De}}try{if(ie instanceof zI){const de={endpoint:$.endpointName,arg:$.originalArgs,type:$.type,queryCacheKey:$.type==="query"?$.queryCacheKey:void 0};oe.onSchemaFailure?.(ie,de),f?.(ie,de);const{catchSchemaFailure:me=h}=oe;if(me)return K(me(ie,de),fc({baseQueryMeta:ie._bqMeta}))}}catch(de){ie=de}throw console.error(ie),ie}};function I($,G){const F=u.selectQueryEntry(G,$.queryCacheKey),K=u.selectConfig(G).refetchOnMountOrArgChange,ue=F?.fulfilledTimeStamp,U=$.forceRefetch??($.subscribe&&K);return U?U===!0||(Number(new Date)-Number(ue))/1e3>=U:!1}const k=()=>fE(`${e}/executeQuery`,C,{getPendingMeta({arg:G}){const F=n[G.endpointName];return fc({startedTimeStamp:Date.now(),...Zh(F)?{direction:G.direction}:{}})},condition(G,{getState:F}){const K=F(),ue=u.selectQueryEntry(K,G.queryCacheKey),U=ue?.fulfilledTimeStamp,ee=G.originalArgs,ne=ue?.originalArgs,oe=n[G.endpointName],O=G.direction;return sv(G)?!0:ue?.status==="pending"?!1:I(G,K)||Xh(oe)&&oe?.forceRefetch?.({currentArg:ee,previousArg:ne,endpointState:ue,state:K})?!0:!(U&&!O)},dispatchConditionRejection:!0}),x=k(),A=k(),N=fE(`${e}/executeMutation`,C,{getPendingMeta(){return fc({startedTimeStamp:Date.now()})}}),T=$=>"force"in $,P=$=>"ifOlderThan"in $,V=($,G,F)=>(K,ue)=>{const U=T(F)&&F.force,ee=P(F)&&F.ifOlderThan,ne=(O=!0)=>{const X={forceRefetch:O,isPrefetch:!0};return a.endpoints[$].initiate(G,X)},oe=a.endpoints[$].select(G)(ue());if(U)K(ne());else if(ee){const O=oe?.fulfilledTimeStamp;if(!O){K(ne());return}(Number(new Date)-Number(new Date(O)))/1e3>=ee&&K(ne())}else K(ne(!1))};function H($){return G=>G?.meta?.arg?.endpointName===$}function B($,G){return{matchPending:Cc(Qv($),H(G)),matchFulfilled:Cc(ds($),H(G)),matchRejected:Cc(Po($),H(G))}}return{queryThunk:x,mutationThunk:N,infiniteQueryThunk:A,prefetch:V,updateQueryData:S,upsertQueryData:w,patchQueryData:g,buildMatchThunkActions:B}}function av(e,{pages:t,pageParams:n},i){const a=t.length-1;return e.getNextPageParam(t[a],t,n[a],n,i)}function $I(e,{pages:t,pageParams:n},i){return e.getPreviousPageParam?.(t[0],t,n[0],n,i)}function BI(e,t,n,i){return Y_(n[e.meta.arg.endpointName][t],ds(e)?e.payload:void 0,Lh(e)?e.payload:void 0,e.meta.arg.originalArgs,"baseQueryMeta"in e.meta?e.meta.baseQueryMeta:void 0,i)}function Jd(e,t,n){const i=e[t];i&&n(i)}function iu(e){return("arg"in e?e.arg.fixedCacheKey:e.fixedCacheKey)??e.requestId}function jx(e,t,n){const i=e[iu(t)];i&&n(i)}var ef={};function YB({reducerPath:e,queryThunk:t,mutationThunk:n,serializeQueryArgs:i,context:{endpointDefinitions:a,apiUid:l,extractRehydrationInfo:u,hasRehydrationInfo:f},assertTagType:h,config:p}){const g=cr(`${e}/resetApiState`);function y(H,B,$,G){H[B.queryCacheKey]??={status:"uninitialized",endpointName:B.endpointName},Jd(H,B.queryCacheKey,F=>{F.status="pending",F.requestId=$&&F.requestId?F.requestId:G.requestId,B.originalArgs!==void 0&&(F.originalArgs=B.originalArgs),F.startedTimeStamp=G.startedTimeStamp;const K=a[G.arg.endpointName];Zh(K)&&"direction"in B&&(F.direction=B.direction)})}function v(H,B,$,G){Jd(H,B.arg.queryCacheKey,F=>{if(F.requestId!==B.requestId&&!G)return;const{merge:K}=a[B.arg.endpointName];if(F.status="fulfilled",K)if(F.data!==void 0){const{fulfilledTimeStamp:ue,arg:U,baseQueryMeta:ee,requestId:ne}=B;let oe=uu(F.data,O=>K(O,$,{arg:U.originalArgs,baseQueryMeta:ee,fulfilledTimeStamp:ue,requestId:ne}));F.data=oe}else F.data=$;else F.data=a[B.arg.endpointName].structuralSharing??!0?q_(Mr(F.data)?Z6(F.data):F.data,$):$;delete F.error,F.fulfilledTimeStamp=B.fulfilledTimeStamp})}const S=Ar({name:`${e}/queries`,initialState:ef,reducers:{removeQueryResult:{reducer(H,{payload:{queryCacheKey:B}}){delete H[B]},prepare:nc()},cacheEntriesUpserted:{reducer(H,B){for(const $ of B.payload){const{queryDescription:G,value:F}=$;y(H,G,!0,{arg:G,requestId:B.meta.requestId,startedTimeStamp:B.meta.timestamp}),v(H,{arg:G,requestId:B.meta.requestId,fulfilledTimeStamp:B.meta.timestamp,baseQueryMeta:{}},F,!0)}},prepare:H=>({payload:H.map(G=>{const{endpointName:F,arg:K,value:ue}=G,U=a[F];return{queryDescription:{type:"query",endpointName:F,originalArgs:G.arg,queryCacheKey:i({queryArgs:K,endpointDefinition:U,endpointName:F})},value:ue}}),meta:{[Mh]:!0,requestId:Wv(),timestamp:Date.now()}})},queryResultPatched:{reducer(H,{payload:{queryCacheKey:B,patches:$}}){Jd(H,B,G=>{G.data=sE(G.data,$.concat())})},prepare:nc()}},extraReducers(H){H.addCase(t.pending,(B,{meta:$,meta:{arg:G}})=>{const F=sv(G);y(B,G,F,$)}).addCase(t.fulfilled,(B,{meta:$,payload:G})=>{const F=sv($.arg);v(B,$,G,F)}).addCase(t.rejected,(B,{meta:{condition:$,arg:G,requestId:F},error:K,payload:ue})=>{Jd(B,G.queryCacheKey,U=>{if(!$){if(U.requestId!==F)return;U.status="rejected",U.error=ue??K}})}).addMatcher(f,(B,$)=>{const{queries:G}=u($);for(const[F,K]of Object.entries(G))(K?.status==="fulfilled"||K?.status==="rejected")&&(B[F]=K)})}}),w=Ar({name:`${e}/mutations`,initialState:ef,reducers:{removeMutationResult:{reducer(H,{payload:B}){const $=iu(B);$ in H&&delete H[$]},prepare:nc()}},extraReducers(H){H.addCase(n.pending,(B,{meta:$,meta:{requestId:G,arg:F,startedTimeStamp:K}})=>{F.track&&(B[iu($)]={requestId:G,status:"pending",endpointName:F.endpointName,startedTimeStamp:K})}).addCase(n.fulfilled,(B,{payload:$,meta:G})=>{G.arg.track&&jx(B,G,F=>{F.requestId===G.requestId&&(F.status="fulfilled",F.data=$,F.fulfilledTimeStamp=G.fulfilledTimeStamp)})}).addCase(n.rejected,(B,{payload:$,error:G,meta:F})=>{F.arg.track&&jx(B,F,K=>{K.requestId===F.requestId&&(K.status="rejected",K.error=$??G)})}).addMatcher(f,(B,$)=>{const{mutations:G}=u($);for(const[F,K]of Object.entries(G))(K?.status==="fulfilled"||K?.status==="rejected")&&F!==K?.requestId&&(B[F]=K)})}}),D={tags:{},keys:{}},C=Ar({name:`${e}/invalidation`,initialState:D,reducers:{updateProvidedBy:{reducer(H,B){for(const{queryCacheKey:$,providedTags:G}of B.payload){I(H,$);for(const{type:F,id:K}of G){const ue=(H.tags[F]??={})[K||"__internal_without_id"]??=[];ue.includes($)||ue.push($)}H.keys[$]=G}},prepare:nc()}},extraReducers(H){H.addCase(S.actions.removeQueryResult,(B,{payload:{queryCacheKey:$}})=>{I(B,$)}).addMatcher(f,(B,$)=>{const{provided:G}=u($);for(const[F,K]of Object.entries(G.tags??{}))for(const[ue,U]of Object.entries(K)){const ee=(B.tags[F]??={})[ue||"__internal_without_id"]??=[];for(const ne of U)ee.includes(ne)||ee.push(ne),B.keys[ne]=G.keys[ne]}}).addMatcher(pi(ds(t),Lh(t)),(B,$)=>{k(B,[$])}).addMatcher(S.actions.cacheEntriesUpserted.match,(B,$)=>{const G=$.payload.map(({queryDescription:F,value:K})=>({type:"UNKNOWN",payload:K,meta:{requestStatus:"fulfilled",requestId:"UNKNOWN",arg:F}}));k(B,G)})}});function I(H,B){const $=H.keys[B]??[];for(const G of $){const F=G.type,K=G.id??"__internal_without_id",ue=H.tags[F]?.[K];ue&&(H.tags[F][K]=ue.filter(U=>U!==B))}delete H.keys[B]}function k(H,B){const $=B.map(G=>{const F=BI(G,"providesTags",a,h),{queryCacheKey:K}=G.meta.arg;return{queryCacheKey:K,providedTags:F}});C.caseReducers.updateProvidedBy(H,C.actions.updateProvidedBy($))}const x=Ar({name:`${e}/subscriptions`,initialState:ef,reducers:{updateSubscriptionOptions(H,B){},unsubscribeQueryResult(H,B){},internal_getRTKQSubscriptions(){}}}),A=Ar({name:`${e}/internalSubscriptions`,initialState:ef,reducers:{subscriptionsUpdated:{reducer(H,B){return sE(H,B.payload)},prepare:nc()}}}),N=Ar({name:`${e}/config`,initialState:{online:kB(),focused:MB(),middlewareRegistered:!1,...p},reducers:{middlewareRegistered(H,{payload:B}){H.middlewareRegistered=H.middlewareRegistered==="conflict"||l!==B?"conflict":!0}},extraReducers:H=>{H.addCase(G_,B=>{B.online=!0}).addCase(UI,B=>{B.online=!1}).addCase(V_,B=>{B.focused=!0}).addCase(jI,B=>{B.focused=!1}).addMatcher(f,B=>({...B}))}}),T=vR({queries:S.reducer,mutations:w.reducer,provided:C.reducer,subscriptions:A.reducer,config:N.reducer}),P=(H,B)=>T(g.match(B)?void 0:H,B),V={...N.actions,...S.actions,...x.actions,...A.actions,...w.actions,...C.actions,resetApiState:g};return{reducer:P,actions:V}}var ir=Symbol.for("RTKQ/skipToken"),HI={status:"uninitialized"},Ux=uu(HI,()=>{}),zx=uu(HI,()=>{});function QB({serializeQueryArgs:e,reducerPath:t,createSelector:n}){const i=x=>Ux,a=x=>zx;return{buildQuerySelector:v,buildInfiniteQuerySelector:S,buildMutationSelector:w,selectInvalidatedBy:D,selectCachedArgsForQuery:C,selectApiState:u,selectQueries:f,selectMutations:p,selectQueryEntry:h,selectConfig:g};function l(x){return{...x,...Dx(x.status)}}function u(x){return x[t]}function f(x){return u(x)?.queries}function h(x,A){return f(x)?.[A]}function p(x){return u(x)?.mutations}function g(x){return u(x)?.config}function y(x,A,N){return T=>{if(T===ir)return n(i,N);const P=e({queryArgs:T,endpointDefinition:A,endpointName:x});return n(H=>h(H,P)??Ux,N)}}function v(x,A){return y(x,A,l)}function S(x,A){const{infiniteQueryOptions:N}=A;function T(P){const V={...P,...Dx(P.status)},{isLoading:H,isError:B,direction:$}=V,G=$==="forward",F=$==="backward";return{...V,hasNextPage:I(N,V.data,V.originalArgs),hasPreviousPage:k(N,V.data,V.originalArgs),isFetchingNextPage:H&&G,isFetchingPreviousPage:H&&F,isFetchNextPageError:B&&G,isFetchPreviousPageError:B&&F}}return y(x,A,T)}function w(){return x=>{let A;return typeof x=="object"?A=iu(x)??ir:A=x,n(A===ir?a:P=>u(P)?.mutations?.[A]??zx,l)}}function D(x,A){const N=x[t],T=new Set;for(const P of A.filter(dh).map(iv)){const V=N.provided.tags[P.type];if(!V)continue;let H=(P.id!==void 0?V[P.id]:Nx(Object.values(V)))??[];for(const B of H)T.add(B)}return Nx(Array.from(T.values()).map(P=>{const V=N.queries[P];return V?[{queryCacheKey:P,endpointName:V.endpointName,originalArgs:V.originalArgs}]:[]}))}function C(x,A){return Object.values(f(x)).filter(N=>N?.endpointName===A&&N.status!=="uninitialized").map(N=>N.originalArgs)}function I(x,A,N){return A?av(x,A,N)!=null:!1}function k(x,A,N){return!A||!x.getPreviousPageParam?!1:$I(x,A,N)!=null}}var $x=WeakMap?new WeakMap:void 0,Bx=({endpointName:e,queryArgs:t})=>{let n="";const i=$x?.get(t);if(typeof i=="string")n=i;else{const a=JSON.stringify(t,(l,u)=>(u=typeof u=="bigint"?{$bigint:u.toString()}:u,u=us(u)?Object.keys(u).sort().reduce((f,h)=>(f[h]=u[h],f),{}):u,u));us(t)&&$x?.set(t,a),n=a}return`${e}(${n})`};function FI(...e){return function(n){const i=Hf(p=>n.extractRehydrationInfo?.(p,{reducerPath:n.reducerPath??"api"})),a={reducerPath:"api",keepUnusedDataFor:60,refetchOnMountOrArgChange:!1,refetchOnFocus:!1,refetchOnReconnect:!1,invalidationBehavior:"delayed",...n,extractRehydrationInfo:i,serializeQueryArgs(p){let g=Bx;if("serializeQueryArgs"in p.endpointDefinition){const y=p.endpointDefinition.serializeQueryArgs;g=v=>{const S=y(v);return typeof S=="string"?S:Bx({...v,queryArgs:S})}}else n.serializeQueryArgs&&(g=n.serializeQueryArgs);return g(p)},tagTypes:[...n.tagTypes||[]]},l={endpointDefinitions:{},batch(p){p()},apiUid:Wv(),extractRehydrationInfo:i,hasRehydrationInfo:Hf(p=>i(p)!=null)},u={injectEndpoints:h,enhanceEndpoints({addTagTypes:p,endpoints:g}){if(p)for(const y of p)a.tagTypes.includes(y)||a.tagTypes.push(y);if(g)for(const[y,v]of Object.entries(g))typeof v=="function"?v(l.endpointDefinitions[y]):Object.assign(l.endpointDefinitions[y]||{},v);return u}},f=e.map(p=>p.init(u,a,l));function h(p){const g=p.endpoints({query:y=>({...y,type:"query"}),mutation:y=>({...y,type:"mutation"}),infiniteQuery:y=>({...y,type:"infinitequery"})});for(const[y,v]of Object.entries(g)){if(p.overrideExisting!==!0&&y in l.endpointDefinitions){if(p.overrideExisting==="throw")throw new Error(ur(39));continue}l.endpointDefinitions[y]=v;for(const S of f)S.injectEndpoint(y,v)}return u}return u.injectEndpoints({endpoints:n.endpoints})}}function ni(e,...t){return Object.assign(e,...t)}var WB=({api:e,queryThunk:t,internalState:n,mwApi:i})=>{const a=`${e.reducerPath}/subscriptions`;let l=null,u=null;const{updateSubscriptionOptions:f,unsubscribeQueryResult:h}=e.internalActions,p=(D,C)=>{if(f.match(C)){const{queryCacheKey:k,requestId:x,options:A}=C.payload,N=D.get(k);return N?.has(x)&&N.set(x,A),!0}if(h.match(C)){const{queryCacheKey:k,requestId:x}=C.payload,A=D.get(k);return A&&A.delete(x),!0}if(e.internalActions.removeQueryResult.match(C))return D.delete(C.payload.queryCacheKey),!0;if(t.pending.match(C)){const{meta:{arg:k,requestId:x}}=C,A=nv(D,k.queryCacheKey,rv);return k.subscribe&&A.set(x,k.subscriptionOptions??A.get(x)??{}),!0}let I=!1;if(t.rejected.match(C)){const{meta:{condition:k,arg:x,requestId:A}}=C;if(k&&x.subscribe){const N=nv(D,x.queryCacheKey,rv);N.set(A,x.subscriptionOptions??N.get(A)??{}),I=!0}}return I},g=()=>n.currentSubscriptions,S={getSubscriptions:g,getSubscriptionCount:D=>g().get(D)?.size??0,isRequestSubscribed:(D,C)=>!!g()?.get(D)?.get(C)};function w(D){return JSON.parse(JSON.stringify(Object.fromEntries([...D].map(([C,I])=>[C,Object.fromEntries(I)]))))}return(D,C)=>{if(l||(l=w(n.currentSubscriptions)),e.util.resetApiState.match(D))return l={},n.currentSubscriptions.clear(),u=null,[!0,!1];if(e.internalActions.internal_getRTKQSubscriptions.match(D))return[!1,S];const I=p(n.currentSubscriptions,D);let k=!0;if(I){u||(u=setTimeout(()=>{const N=w(n.currentSubscriptions),[,T]=TR(l,()=>N);C.next(e.internalActions.subscriptionsUpdated(T)),l=N,u=null},500));const x=typeof D.type=="string"&&!!D.type.startsWith(a),A=t.rejected.match(D)&&D.meta.condition&&!!D.meta.arg.subscribe;k=!x&&!A}return[k,!1]}},KB=2147483647/1e3-1,XB=({reducerPath:e,api:t,queryThunk:n,context:i,internalState:a,selectors:{selectQueryEntry:l,selectConfig:u},getRunningQueryThunk:f,mwApi:h})=>{const{removeQueryResult:p,unsubscribeQueryResult:g,cacheEntriesUpserted:y}=t.internalActions,v=a.runningQueries.get(h.dispatch),S=pi(g.match,n.fulfilled,n.rejected,y.match);function w(x){const A=a.currentSubscriptions.get(x);if(!A)return!1;const N=A.size>0,T=v?.[x]!==void 0;return N||T}const D={},C=(x,A,N)=>{const T=A.getState(),P=u(T);if(S(x)){let V;if(y.match(x))V=x.payload.map(H=>H.queryDescription.queryCacheKey);else{const{queryCacheKey:H}=g.match(x)?x.payload:x.meta.arg;V=[H]}I(V,A,P)}if(t.util.resetApiState.match(x))for(const[V,H]of Object.entries(D))H&&clearTimeout(H),delete D[V];if(i.hasRehydrationInfo(x)){const{queries:V}=i.extractRehydrationInfo(x);I(Object.keys(V),A,P)}};function I(x,A,N){const T=A.getState();for(const P of x){const V=l(T,P);V?.endpointName&&k(P,V.endpointName,A,N)}}function k(x,A,N,T){const V=i.endpointDefinitions[A]?.keepUnusedDataFor??T.keepUnusedDataFor;if(V===1/0)return;const H=Math.max(0,Math.min(V,KB));if(!w(x)){const B=D[x];B&&clearTimeout(B),D[x]=setTimeout(()=>{if(!w(x)){const $=l(N.getState(),x);$?.endpointName&&N.dispatch(f($.endpointName,$.originalArgs))?.abort(),N.dispatch(p({queryCacheKey:x}))}delete D[x]},H*1e3)}}return C},Hx=new Error("Promise never resolved before cacheEntryRemoved."),ZB=({api:e,reducerPath:t,context:n,queryThunk:i,mutationThunk:a,internalState:l,selectors:{selectQueryEntry:u,selectApiState:f}})=>{const h=jy(i),p=jy(a),g=ds(i,a),y={};function v(I,k,x){const A=y[I];A?.valueResolved&&(A.valueResolved({data:k,meta:x}),delete A.valueResolved)}function S(I){const k=y[I];k&&(delete y[I],k.cacheEntryRemoved())}const w=(I,k,x)=>{const A=D(I);function N(T,P,V,H){const B=u(x,P),$=u(k.getState(),P);!B&&$&&C(T,H,P,k,V)}if(i.pending.match(I))N(I.meta.arg.endpointName,A,I.meta.requestId,I.meta.arg.originalArgs);else if(e.internalActions.cacheEntriesUpserted.match(I))for(const{queryDescription:T,value:P}of I.payload){const{endpointName:V,originalArgs:H,queryCacheKey:B}=T;N(V,B,I.meta.requestId,H),v(B,P,{})}else if(a.pending.match(I))k.getState()[t].mutations[A]&&C(I.meta.arg.endpointName,I.meta.arg.originalArgs,A,k,I.meta.requestId);else if(g(I))v(A,I.payload,I.meta.baseQueryMeta);else if(e.internalActions.removeQueryResult.match(I)||e.internalActions.removeMutationResult.match(I))S(A);else if(e.util.resetApiState.match(I))for(const T of Object.keys(y))S(T)};function D(I){return h(I)?I.meta.arg.queryCacheKey:p(I)?I.meta.arg.fixedCacheKey??I.meta.requestId:e.internalActions.removeQueryResult.match(I)?I.payload.queryCacheKey:e.internalActions.removeMutationResult.match(I)?iu(I.payload):""}function C(I,k,x,A,N){const T=n.endpointDefinitions[I],P=T?.onCacheEntryAdded;if(!P)return;const V={},H=new Promise(ue=>{V.cacheEntryRemoved=ue}),B=Promise.race([new Promise(ue=>{V.valueResolved=ue}),H.then(()=>{throw Hx})]);B.catch(()=>{}),y[x]=V;const $=e.endpoints[I].select(fh(T)?k:x),G=A.dispatch((ue,U,ee)=>ee),F={...A,getCacheEntry:()=>$(A.getState()),requestId:N,extra:G,updateCachedData:fh(T)?ue=>A.dispatch(e.util.updateQueryData(I,k,ue)):void 0,cacheDataLoaded:B,cacheEntryRemoved:H},K=P(k,F);Promise.resolve(K).catch(ue=>{if(ue!==Hx)throw ue})}return w},JB=({api:e,context:{apiUid:t},reducerPath:n})=>(i,a)=>{e.util.resetApiState.match(i)&&a.dispatch(e.internalActions.middlewareRegistered(t))},e9=({reducerPath:e,context:t,context:{endpointDefinitions:n},mutationThunk:i,queryThunk:a,api:l,assertTagType:u,refetchQuery:f,internalState:h})=>{const{removeQueryResult:p}=l.internalActions,g=pi(ds(i),Lh(i)),y=pi(ds(i,a),Po(i,a));let v=[];const S=(C,I)=>{g(C)?D(BI(C,"invalidatesTags",n,u),I):y(C)?D([],I):l.util.invalidateTags.match(C)&&D(Y_(C.payload,void 0,void 0,void 0,void 0,u),I)};function w(C){const{queries:I,mutations:k}=C;for(const x of[I,k])for(const A in x)if(x[A]?.status==="pending")return!0;return!1}function D(C,I){const k=I.getState(),x=k[e];if(v.push(...C),x.config.invalidationBehavior==="delayed"&&w(x))return;const A=v;if(v=[],A.length===0)return;const N=l.util.selectInvalidatedBy(k,A);t.batch(()=>{const T=Array.from(N.values());for(const{queryCacheKey:P}of T){const V=x.queries[P],H=nv(h.currentSubscriptions,P,rv);V&&(H.size===0?I.dispatch(p({queryCacheKey:P})):V.status!=="uninitialized"&&I.dispatch(f(V)))}})}return S},t9=({reducerPath:e,queryThunk:t,api:n,refetchQuery:i,internalState:a})=>{const{currentPolls:l,currentSubscriptions:u}=a,f=new Set;let h=null;const p=(C,I)=>{(n.internalActions.updateSubscriptionOptions.match(C)||n.internalActions.unsubscribeQueryResult.match(C))&&g(C.payload.queryCacheKey,I),(t.pending.match(C)||t.rejected.match(C)&&C.meta.condition)&&g(C.meta.arg.queryCacheKey,I),(t.fulfilled.match(C)||t.rejected.match(C)&&!C.meta.condition)&&y(C.meta.arg,I),n.util.resetApiState.match(C)&&(w(),h&&(clearTimeout(h),h=null),f.clear())};function g(C,I){f.add(C),h||(h=setTimeout(()=>{for(const k of f)v({queryCacheKey:k},I);f.clear(),h=null},0))}function y({queryCacheKey:C},I){const k=I.getState()[e],x=k.queries[C],A=u.get(C);if(!x||x.status==="uninitialized")return;const{lowestPollingInterval:N,skipPollingIfUnfocused:T}=D(A);if(!Number.isFinite(N))return;const P=l.get(C);P?.timeout&&(clearTimeout(P.timeout),P.timeout=void 0);const V=Date.now()+N;l.set(C,{nextPollTimestamp:V,pollingInterval:N,timeout:setTimeout(()=>{(k.config.focused||!T)&&I.dispatch(i(x)),y({queryCacheKey:C},I)},N)})}function v({queryCacheKey:C},I){const x=I.getState()[e].queries[C],A=u.get(C);if(!x||x.status==="uninitialized")return;const{lowestPollingInterval:N}=D(A);if(!Number.isFinite(N)){S(C);return}const T=l.get(C),P=Date.now()+N;(!T||P<T.nextPollTimestamp)&&y({queryCacheKey:C},I)}function S(C){const I=l.get(C);I?.timeout&&clearTimeout(I.timeout),l.delete(C)}function w(){for(const C of l.keys())S(C)}function D(C=new Map){let I=!1,k=Number.POSITIVE_INFINITY;for(const x of C.values())x.pollingInterval&&(k=Math.min(x.pollingInterval,k),I=x.skipPollingIfUnfocused||I);return{lowestPollingInterval:k,skipPollingIfUnfocused:I}}return p},n9=({api:e,context:t,queryThunk:n,mutationThunk:i})=>{const a=Qv(n,i),l=Po(n,i),u=ds(n,i),f={};return(p,g)=>{if(a(p)){const{requestId:y,arg:{endpointName:v,originalArgs:S}}=p.meta,w=t.endpointDefinitions[v],D=w?.onQueryStarted;if(D){const C={},I=new Promise((N,T)=>{C.resolve=N,C.reject=T});I.catch(()=>{}),f[y]=C;const k=e.endpoints[v].select(fh(w)?S:y),x=g.dispatch((N,T,P)=>P),A={...g,getCacheEntry:()=>k(g.getState()),requestId:y,extra:x,updateCachedData:fh(w)?N=>g.dispatch(e.util.updateQueryData(v,S,N)):void 0,queryFulfilled:I};D(S,A)}}else if(u(p)){const{requestId:y,baseQueryMeta:v}=p.meta;f[y]?.resolve({data:p.payload,meta:v}),delete f[y]}else if(l(p)){const{requestId:y,rejectedWithValue:v,baseQueryMeta:S}=p.meta;f[y]?.reject({error:p.payload??p.error,isUnhandledError:!v,meta:S}),delete f[y]}}},r9=({reducerPath:e,context:t,api:n,refetchQuery:i,internalState:a})=>{const{removeQueryResult:l}=n.internalActions,u=(h,p)=>{V_.match(h)&&f(p,"refetchOnFocus"),G_.match(h)&&f(p,"refetchOnReconnect")};function f(h,p){const g=h.getState()[e],y=g.queries,v=a.currentSubscriptions;t.batch(()=>{for(const S of v.keys()){const w=y[S],D=v.get(S);if(!D||!w)continue;const C=[...D.values()];(C.some(k=>k[p]===!0)||C.every(k=>k[p]===void 0)&&g.config[p])&&(D.size===0?h.dispatch(l({queryCacheKey:S})):w.status!=="uninitialized"&&h.dispatch(i(w)))}})}return u};function i9(e){const{reducerPath:t,queryThunk:n,api:i,context:a,internalState:l}=e,{apiUid:u}=a,f={invalidateTags:cr(`${t}/invalidateTags`)},h=v=>v.type.startsWith(`${t}/`),p=[JB,XB,e9,t9,ZB,n9];return{middleware:v=>{let S=!1;const w={...e,internalState:l,refetchQuery:y,isThisApiSliceAction:h,mwApi:v},D=p.map(k=>k(w)),C=WB(w),I=r9(w);return k=>x=>{if(!_R(x))return k(x);S||(S=!0,v.dispatch(i.internalActions.middlewareRegistered(u)));const A={...v,next:k},N=v.getState(),[T,P]=C(x,A,N);let V;if(T?V=k(x):V=P,v.getState()[t]&&(I(x,A,N),h(x)||a.hasRehydrationInfo(x)))for(const H of D)H(x,A,N);return V}},actions:f};function y(v){return e.api.endpoints[v.endpointName].initiate(v.originalArgs,{subscribe:!1,forceRefetch:!0})}}var Fx=Symbol(),qI=({createSelector:e=bi}={})=>({name:Fx,init(t,{baseQuery:n,tagTypes:i,reducerPath:a,serializeQueryArgs:l,keepUnusedDataFor:u,refetchOnMountOrArgChange:f,refetchOnFocus:h,refetchOnReconnect:p,invalidationBehavior:g,onSchemaFailure:y,catchSchemaFailure:v,skipSchemaValidation:S},w){l3();const D=pe=>pe;Object.assign(t,{reducerPath:a,endpoints:{},internalActions:{onOnline:G_,onOffline:UI,onFocus:V_,onFocusLost:jI},util:{}});const C=QB({serializeQueryArgs:l,reducerPath:a,createSelector:e}),{selectInvalidatedBy:I,selectCachedArgsForQuery:k,buildQuerySelector:x,buildInfiniteQuerySelector:A,buildMutationSelector:N}=C;ni(t.util,{selectInvalidatedBy:I,selectCachedArgsForQuery:k});const{queryThunk:T,infiniteQueryThunk:P,mutationThunk:V,patchQueryData:H,updateQueryData:B,upsertQueryData:$,prefetch:G,buildMatchThunkActions:F}=GB({baseQuery:n,reducerPath:a,context:w,api:t,serializeQueryArgs:l,assertTagType:D,selectors:C,onSchemaFailure:y,catchSchemaFailure:v,skipSchemaValidation:S}),{reducer:K,actions:ue}=YB({context:w,queryThunk:T,mutationThunk:V,serializeQueryArgs:l,reducerPath:a,assertTagType:D,config:{refetchOnFocus:h,refetchOnReconnect:p,refetchOnMountOrArgChange:f,keepUnusedDataFor:u,reducerPath:a,invalidationBehavior:g}});ni(t.util,{patchQueryData:H,updateQueryData:B,upsertQueryData:$,prefetch:G,resetApiState:ue.resetApiState,upsertQueryEntries:ue.cacheEntriesUpserted}),ni(t.internalActions,ue);const U={currentSubscriptions:new Map,currentPolls:new Map,runningQueries:new Map,runningMutations:new Map},{buildInitiateQuery:ee,buildInitiateInfiniteQuery:ne,buildInitiateMutation:oe,getRunningMutationThunk:O,getRunningMutationsThunk:X,getRunningQueriesThunk:le,getRunningQueryThunk:ie}=VB({queryThunk:T,mutationThunk:V,infiniteQueryThunk:P,api:t,serializeQueryArgs:l,context:w,internalState:U});ni(t.util,{getRunningMutationThunk:O,getRunningMutationsThunk:X,getRunningQueryThunk:ie,getRunningQueriesThunk:le});const{middleware:de,actions:me}=i9({reducerPath:a,context:w,queryThunk:T,mutationThunk:V,infiniteQueryThunk:P,api:t,assertTagType:D,selectors:C,getRunningQueryThunk:ie,internalState:U});return ni(t.util,me),ni(t,{reducer:K,middleware:de}),{name:Fx,injectEndpoint(pe,Ae){const be=t,De=be.endpoints[pe]??={};Xh(Ae)&&ni(De,{name:pe,select:x(pe,Ae),initiate:ee(pe,Ae)},F(T,pe)),HB(Ae)&&ni(De,{name:pe,select:N(),initiate:oe(pe)},F(V,pe)),Zh(Ae)&&ni(De,{name:pe,select:A(pe,Ae),initiate:ne(pe,Ae)},F(T,pe))}}}});qI();function tf(e){return e.replace(e[0],e[0].toUpperCase())}function s9(e){return e.type==="query"}function a9(e){return e.type==="mutation"}function VI(e){return e.type==="infinitequery"}function hc(e,...t){return Object.assign(e,...t)}var Jg=Symbol();function ey(e){const t=R.useRef(e),n=R.useMemo(()=>q_(t.current,e),[e]);return R.useEffect(()=>{t.current!==n&&(t.current=n)},[n]),n}function nf(e){const t=R.useRef(e);return R.useEffect(()=>{_c(t.current,e)||(t.current=e)},[e]),_c(t.current,e)?t.current:e}var o9=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",l9=o9(),c9=()=>typeof navigator<"u"&&navigator.product==="ReactNative",u9=c9(),d9=()=>l9||u9?R.useLayoutEffect:R.useEffect,f9=d9(),qx=e=>e.isUninitialized?{...e,isUninitialized:!1,isFetching:!0,isLoading:e.data===void 0,status:PI.pending}:e;function ty(e,...t){const n={};return t.forEach(i=>{n[i]=e[i]}),n}var ny=["data","status","isLoading","isSuccess","isError","error"];function h9({api:e,moduleOptions:{batch:t,hooks:{useDispatch:n,useSelector:i,useStore:a},unstable__sideEffectsInRender:l,createSelector:u},serializeQueryArgs:f,context:h}){const p=l?A=>A():R.useEffect;return{buildQueryHooks:I,buildInfiniteQueryHooks:k,buildMutationHook:x,usePrefetch:v};function g(A,N,T){if(N?.endpointName&&A.isUninitialized){const{endpointName:G}=N,F=h.endpointDefinitions[G];T!==ir&&f({queryArgs:N.originalArgs,endpointDefinition:F,endpointName:G})===f({queryArgs:T,endpointDefinition:F,endpointName:G})&&(N=void 0)}let P=A.isSuccess?A.data:N?.data;P===void 0&&(P=A.data);const V=P!==void 0,H=A.isLoading,B=(!N||N.isLoading||N.isUninitialized)&&!V&&H,$=A.isSuccess||V&&(H&&!N?.isError||A.isUninitialized);return{...A,data:P,currentData:A.data,isFetching:H,isLoading:B,isSuccess:$}}function y(A,N,T){if(N?.endpointName&&A.isUninitialized){const{endpointName:G}=N,F=h.endpointDefinitions[G];T!==ir&&f({queryArgs:N.originalArgs,endpointDefinition:F,endpointName:G})===f({queryArgs:T,endpointDefinition:F,endpointName:G})&&(N=void 0)}let P=A.isSuccess?A.data:N?.data;P===void 0&&(P=A.data);const V=P!==void 0,H=A.isLoading,B=(!N||N.isLoading||N.isUninitialized)&&!V&&H,$=A.isSuccess||H&&V;return{...A,data:P,currentData:A.data,isFetching:H,isLoading:B,isSuccess:$}}function v(A,N){const T=n(),P=nf(N);return R.useCallback((V,H)=>T(e.util.prefetch(A,V,{...P,...H})),[A,T,P])}function S(A,N,{refetchOnReconnect:T,refetchOnFocus:P,refetchOnMountOrArgChange:V,skip:H=!1,pollingInterval:B=0,skipPollingIfUnfocused:$=!1,...G}={}){const{initiate:F}=e.endpoints[A],K=n(),ue=R.useRef(void 0);if(!ue.current){const me=K(e.internalActions.internal_getRTKQSubscriptions());ue.current=me}const U=ey(H?ir:N),ee=nf({refetchOnReconnect:T,refetchOnFocus:P,pollingInterval:B,skipPollingIfUnfocused:$}),ne=G.initialPageParam,oe=nf(ne),O=R.useRef(void 0);let{queryCacheKey:X,requestId:le}=O.current||{},ie=!1;X&&le&&(ie=ue.current.isRequestSubscribed(X,le));const de=!ie&&O.current!==void 0;return p(()=>{de&&(O.current=void 0)},[de]),p(()=>{const me=O.current;if(U===ir){me?.unsubscribe(),O.current=void 0;return}const pe=O.current?.subscriptionOptions;if(!me||me.arg!==U){me?.unsubscribe();const Ae=K(F(U,{subscriptionOptions:ee,forceRefetch:V,...VI(h.endpointDefinitions[A])?{initialPageParam:oe}:{}}));O.current=Ae}else ee!==pe&&me.updateSubscriptionOptions(ee)},[K,F,V,U,ee,de,oe,A]),[O,K,F,ee]}function w(A,N){return(P,{skip:V=!1,selectFromResult:H}={})=>{const{select:B}=e.endpoints[A],$=ey(V?ir:P),G=R.useRef(void 0),F=R.useMemo(()=>u([B($),(ne,oe)=>oe,ne=>$],N,{memoizeOptions:{resultEqualityCheck:_c}}),[B,$]),K=R.useMemo(()=>H?u([F],H,{devModeChecks:{identityFunctionCheck:"never"}}):F,[F,H]),ue=i(ne=>K(ne,G.current),_c),U=a(),ee=F(U.getState(),G.current);return f9(()=>{G.current=ee},[ee]),ue}}function D(A){R.useEffect(()=>()=>{A.current?.unsubscribe?.(),A.current=void 0},[A])}function C(A){if(!A.current)throw new Error(ur(38));return A.current.refetch()}function I(A){const N=(V,H={})=>{const[B]=S(A,V,H);return D(B),R.useMemo(()=>({refetch:()=>C(B)}),[B])},T=({refetchOnReconnect:V,refetchOnFocus:H,pollingInterval:B=0,skipPollingIfUnfocused:$=!1}={})=>{const{initiate:G}=e.endpoints[A],F=n(),[K,ue]=R.useState(Jg),U=R.useRef(void 0),ee=nf({refetchOnReconnect:V,refetchOnFocus:H,pollingInterval:B,skipPollingIfUnfocused:$});p(()=>{const X=U.current?.subscriptionOptions;ee!==X&&U.current?.updateSubscriptionOptions(ee)},[ee]);const ne=R.useRef(ee);p(()=>{ne.current=ee},[ee]);const oe=R.useCallback(function(X,le=!1){let ie;return t(()=>{U.current?.unsubscribe(),U.current=ie=F(G(X,{subscriptionOptions:ne.current,forceRefetch:!le})),ue(X)}),ie},[F,G]),O=R.useCallback(()=>{U.current?.queryCacheKey&&F(e.internalActions.removeQueryResult({queryCacheKey:U.current?.queryCacheKey}))},[F]);return R.useEffect(()=>()=>{U?.current?.unsubscribe()},[]),R.useEffect(()=>{K!==Jg&&!U.current&&oe(K,!0)},[K,oe]),R.useMemo(()=>[oe,K,{reset:O}],[oe,K,O])},P=w(A,g);return{useQueryState:P,useQuerySubscription:N,useLazyQuerySubscription:T,useLazyQuery(V){const[H,B,{reset:$}]=T(V),G=P(B,{...V,skip:B===Jg}),F=R.useMemo(()=>({lastArg:B}),[B]);return R.useMemo(()=>[H,{...G,reset:$},F],[H,G,$,F])},useQuery(V,H){const B=N(V,H),$=P(V,{selectFromResult:V===ir||H?.skip?void 0:qx,...H}),G=ty($,...ny);return R.useDebugValue(G),R.useMemo(()=>({...$,...B}),[$,B])}}}function k(A){const N=(P,V={})=>{const[H,B,$,G]=S(A,P,V),F=R.useRef(G);p(()=>{F.current=G},[G]);const K=R.useCallback(function(ee,ne){let oe;return t(()=>{H.current?.unsubscribe(),H.current=oe=B($(ee,{subscriptionOptions:F.current,direction:ne}))}),oe},[H,B,$]);D(H);const ue=ey(V.skip?ir:P),U=R.useCallback(()=>C(H),[H]);return R.useMemo(()=>({trigger:K,refetch:U,fetchNextPage:()=>K(ue,"forward"),fetchPreviousPage:()=>K(ue,"backward")}),[U,K,ue])},T=w(A,y);return{useInfiniteQueryState:T,useInfiniteQuerySubscription:N,useInfiniteQuery(P,V){const{refetch:H,fetchNextPage:B,fetchPreviousPage:$}=N(P,V),G=T(P,{selectFromResult:P===ir||V?.skip?void 0:qx,...V}),F=ty(G,...ny,"hasNextPage","hasPreviousPage");return R.useDebugValue(F),R.useMemo(()=>({...G,fetchNextPage:B,fetchPreviousPage:$,refetch:H}),[G,B,$,H])}}}function x(A){return({selectFromResult:N,fixedCacheKey:T}={})=>{const{select:P,initiate:V}=e.endpoints[A],H=n(),[B,$]=R.useState();R.useEffect(()=>()=>{B?.arg.fixedCacheKey||B?.reset()},[B]);const G=R.useCallback(function(X){const le=H(V(X,{fixedCacheKey:T}));return $(le),le},[H,V,T]),{requestId:F}=B||{},K=R.useMemo(()=>P({fixedCacheKey:T,requestId:B?.requestId}),[T,B,P]),ue=R.useMemo(()=>N?u([K],N):K,[N,K]),U=i(ue,_c),ee=T==null?B?.arg.originalArgs:void 0,ne=R.useCallback(()=>{t(()=>{B&&$(void 0),T&&H(e.internalActions.removeMutationResult({requestId:F,fixedCacheKey:T}))})},[H,T,B,F]),oe=ty(U,...ny,"endpointName");R.useDebugValue(oe);const O=R.useMemo(()=>({...U,originalArgs:ee,reset:ne}),[U,ee,ne]);return R.useMemo(()=>[G,O],[G,O])}}}var p9=Symbol(),m9=({batch:e=YN,hooks:t={useDispatch:RT,useSelector:AT,useStore:CT},createSelector:n=bi,unstable__sideEffectsInRender:i=!1,...a}={})=>({name:p9,init(l,{serializeQueryArgs:u},f){const h=l,{buildQueryHooks:p,buildInfiniteQueryHooks:g,buildMutationHook:y,usePrefetch:v}=h9({api:l,moduleOptions:{batch:e,hooks:t,unstable__sideEffectsInRender:i,createSelector:n},serializeQueryArgs:u,context:f});return hc(h,{usePrefetch:v}),hc(f,{batch:e}),{injectEndpoint(S,w){if(s9(w)){const{useQuery:D,useLazyQuery:C,useLazyQuerySubscription:I,useQueryState:k,useQuerySubscription:x}=p(S);hc(h.endpoints[S],{useQuery:D,useLazyQuery:C,useLazyQuerySubscription:I,useQueryState:k,useQuerySubscription:x}),l[`use${tf(S)}Query`]=D,l[`useLazy${tf(S)}Query`]=C}if(a9(w)){const D=y(S);hc(h.endpoints[S],{useMutation:D}),l[`use${tf(S)}Mutation`]=D}else if(VI(w)){const{useInfiniteQuery:D,useInfiniteQuerySubscription:C,useInfiniteQueryState:I}=g(S);hc(h.endpoints[S],{useInfiniteQuery:D,useInfiniteQuerySubscription:C,useInfiniteQueryState:I}),l[`use${tf(S)}InfiniteQuery`]=D}}}}}),g9=FI(qI(),m9());const GI=e=>({id:String(e.id),name:e.name,imageUrl:e.picture_url,display:!0}),y9=e=>e.results.map(GI).sort((n,i)=>n.name.localeCompare(i.name)),YI=e=>{const t=e.image.original_height||48,n=e.image.original_width||48;return{id:e.id,name:e.name,iconUrl:e.image.url.replace("{height}",t).replace("{width}",n)}},v9=e=>e.results.map(YI).sort((n,i)=>n.name.localeCompare(i.name)),_9=e=>{const t=e.instructors[0],n=t?GI(t):{id:"0",name:"Unknown Instructor",imageUrl:"",display:!1},i=Qe.getBookableStatus(e),a=new Date(e.starts_at),u=(new Date(e.ends_at).getTime()-a.getTime())/1e3;return Number.isNaN(u)&&Ov("Computed invalid duration",{extra:{rawClass:e}}),{...e,id:e.id,name:e.name,start:e.starts_at,end:e.ends_at,customerUrl:e.customer_url,duration:u,discipline:YI(e.offering_type.category),instructor:n,status:i}},ry=e=>e.results.map(_9),Q_="https://cors.abbondanzo.workers.dev",iy=e=>({"Teamup-Request-Mode":"customer","Teamup-Provider-ID":e}),Vx=e=>{const{search:t}=new URL(e);return`${Q_}/https://schedule.studio.onepeloton.com/api/v2/events${t}`},b9=()=>{const e=["id","name","max_occupancy","occupancy","attending_count","starts_at","ends_at","waiting_count","active_registration_status","category.name","venue","customer_url","description"],t=["instructors","active_registration_status","category","offering_type","offering_type.category","venue","suggested_booking_action"],n=new URLSearchParams({fields:e.join(","),expand:t.join(","),local_starts_at_gte:new Date().toISOString().replace("Z",""),page_size:"500",sort:"start"});return`${Q_}/https://schedule.studio.onepeloton.com/api/v2/events?${n}`},xf=g9({reducerPath:"pelotonApi",baseQuery:BB({baseUrl:`${Q_}/https://schedule.studio.onepeloton.com/api/v2/`}),endpoints:e=>({getClasses:e.query({queryFn:async t=>{try{const n=iy(t),i=await fetch(b9(),{headers:n});if(!i.ok)return{error:{status:i.status,data:await i.text()}};const a=await i.json();if(!a.next)return{data:ry(a)};const l=ry(a);let u=Vx(a.next);for(;u;){const f=await fetch(u,{headers:n});if(!f.ok)return{error:{status:f.status,data:await f.text()}};const h=await f.json();l.push(...ry(h)),u=h.next?Vx(h.next):null}return{data:l}}catch(n){return{error:{status:"FETCH_ERROR",error:String(n)}}}}}),getDisciplines:e.query({query:t=>({url:`offering_type_categories?${new URLSearchParams({sort:"name"})}`,method:"GET",headers:iy(t)}),transformResponse:t=>v9(t)}),getInstructors:e.query({query:t=>({url:`instructors?${new URLSearchParams({sort:"name"})}`,method:"GET",headers:iy(t)}),transformResponse:t=>y9(t)})})}),{useGetClassesQuery:QI,useGetDisciplinesQuery:W_,useGetInstructorsQuery:K_}=xf,S9=e=>{if("error"in e&&typeof e.error=="string")return e.error;if("message"in e&&typeof e.message=="string")return e.message},w9=M.label`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  cursor: pointer;
  user-select: none;
  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.$checked?`${e.theme.colors.accent}0a`:"transparent"};
  transition: background-color 0.15s;

  ${kI}
`,E9=M.span`
  color: ${e=>e.theme.colors.main};
  font-size: 14px;
`,x9=M.input`
  accent-color: ${e=>e.theme.colors.accent};
`,WI=({value:e,checked:t,onChange:n,label:i,icon:a})=>{const l=R.useId();return _.jsxs(w9,{$checked:t,htmlFor:l,children:[_.jsx(x9,{type:"checkbox",id:l,value:e,checked:t,onChange:n}),a,_.jsx(E9,{children:i})]})},Gx=M.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`,Yx=M.legend`
  font-weight: 600;
  font-size: 18px;
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,Qx=M.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  margin: 0 0 12px;
`,Wx=M.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
`,rf=M.button`
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
`,KI=M.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 4px;
  max-height: 320px;
  overflow-y: auto;
  padding: 4px;
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};

  ${Re`
    grid-template-columns: 1fr;
    max-height: 260px;
  `}
`,Kx=M.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
  margin-left: auto;
`,hh=M.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  padding: 24px;
  text-align: center;
`,XI=M.p`
  color: #d93025;
  font-size: 14px;
  padding: 16px;
`,ZI=M.button`
  border: none;
  background: none;
  color: ${e=>e.theme.colors.accent};
  cursor: pointer;
  font-family: inherit;
  font-size: 14px;
  text-decoration: underline;
  padding: 0;
`,T9=M.div`
  margin-top: 32px;

  ${Re`
    margin-top: 24px;
  `}
`,C9=({studioId:e,selectedInstructors:t,setSelectedInstructors:n,selectedDisciplines:i,setSelectedDisciplines:a})=>{const l=K_(e),u=W_(e),f=R.useRef(t),h=R.useRef(i);R.useEffect(()=>{const S=f.current;if(!l.currentData||!Qe.isNotEmpty(S))return;const w=new Set(l.currentData.map(C=>C.id)),D=S.filter(C=>w.has(C));D.length<S.length&&(n(D),f.current=D)},[l.currentData,n]),R.useEffect(()=>{const S=h.current;if(!u.currentData||!Qe.isNotEmpty(S))return;const w=new Set(u.currentData.map(C=>String(C.id))),D=S.filter(C=>w.has(String(C)));D.length<S.length&&(a(D),h.current=D)},[u.currentData,a]);const p=S=>{if(!Qe.isNotEmpty(t))return;const w=t.includes(S);n(w?t.filter(D=>D!==S):[...t,S])},g=S=>{if(!Qe.isNotEmpty(i))return;const w=i.includes(S);a(w?i.filter(D=>D!==S):[...i,S])},y=Qe.isNotEmpty(t),v=Qe.isNotEmpty(i);return _.jsxs("div",{children:[_.jsxs(Gx,{children:[_.jsx(Yx,{children:"Instructors"}),_.jsx(Qx,{children:"Filter by specific instructors or get alerts for all of them."}),_.jsxs(Wx,{children:[_.jsx(rf,{type:"button",$active:!y,onClick:()=>n(null),children:"Any instructor"}),_.jsx(rf,{type:"button",$active:y,onClick:()=>{y||n([])},children:"Specific instructors"}),y&&t.length>0&&_.jsxs(Kx,{children:[t.length," selected"]})]}),y&&_.jsx(R9,{query:l,selectedIds:t,onToggle:p})]}),_.jsx(T9,{}),_.jsxs(Gx,{children:[_.jsx(Yx,{children:"Disciplines"}),_.jsx(Qx,{children:"Filter by class type or get alerts for everything."}),_.jsxs(Wx,{children:[_.jsx(rf,{type:"button",$active:!v,onClick:()=>a(null),children:"Any discipline"}),_.jsx(rf,{type:"button",$active:v,onClick:()=>{v||a([])},children:"Specific disciplines"}),v&&i.length>0&&_.jsxs(Kx,{children:[i.length," selected"]})]}),v&&_.jsx(A9,{query:u,selectedIds:i,onToggle:g})]})]})},R9=({query:e,selectedIds:t,onToggle:n})=>e.isLoading?_.jsx(hh,{children:"Loading instructors…"}):e.error?_.jsxs(XI,{children:["Couldn't load instructors."," ",_.jsx(ZI,{type:"button",onClick:()=>e.refetch(),children:"Try again"})]}):!e.currentData||e.currentData.length===0?_.jsx(hh,{children:"No instructors found for this studio."}):_.jsx(KI,{role:"group","aria-label":"Instructors",children:e.currentData.map(i=>_.jsx(WI,{value:i.id,checked:t.includes(i.id),onChange:()=>n(i.id),label:i.name,icon:_.jsx(F_,{instructor:i,size:28})},i.id))}),A9=({query:e,selectedIds:t,onToggle:n})=>e.isLoading?_.jsx(hh,{children:"Loading disciplines…"}):e.error?_.jsxs(XI,{children:["Couldn't load disciplines."," ",_.jsx(ZI,{type:"button",onClick:()=>e.refetch(),children:"Try again"})]}):!e.currentData||e.currentData.length===0?_.jsx(hh,{children:"No disciplines found for this studio."}):_.jsx(KI,{role:"group","aria-label":"Disciplines",children:e.currentData.map(i=>_.jsx(WI,{value:i.id,checked:t.includes(i.id),onChange:()=>n(i.id),label:i.name,icon:_.jsx(uh,{discipline:i,size:24})},i.id))}),I9=M.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 16px;
  margin-bottom: 24px;

  ${Re`
    padding: 0;
    margin-bottom: 12px;
  `}
`,D9=M.button`
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

  ${Re`
    width: 12px;
    height: 12px;
  `}
`,O9=M.div`
  flex: 1;
  height: 2px;
  background-color: ${e=>e.$filled?e.theme.colors.accent:e.theme.borderColor};
  transition: background-color 0.2s;
`,N9=M.span`
  position: absolute;
  top: 18px;
  font-size: 10px;
  white-space: nowrap;
  color: ${e=>e.$state==="active"?e.theme.colors.main:e.theme.colors.secondary};
  font-weight: ${e=>e.$state==="active"?600:400};

  ${Re`
    display: none;
  `}
`,M9=M.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`,k9=({steps:e,currentStep:t,onStepClick:n})=>_.jsx(I9,{role:"navigation","aria-label":"Editor steps",children:e.map((i,a)=>{const l=a<t?"completed":a===t?"active":"upcoming";return _.jsxs(M9,{style:{flex:a<e.length-1?1:0},children:[_.jsxs("div",{style:{display:"flex",alignItems:"center",width:"100%"},children:[_.jsx(D9,{$state:l,onClick:()=>{l!=="upcoming"&&n(a)},"aria-label":`Step ${a+1}: ${i}`,"aria-current":l==="active"?"step":void 0,type:"button"}),a<e.length-1&&_.jsx(O9,{$filled:a<t})]}),_.jsx(N9,{$state:l,children:i})]},a)})}),L9=M.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`,P9=M.legend`
  font-weight: 600;
  font-size: 18px;
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,j9=M.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  margin: 0 0 20px;
`,U9=M.div`
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  overflow: hidden;
`,Qs=M.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 12px 16px;
  gap: 8px;

  &:not(:last-child) {
    border-bottom: 1px solid ${e=>e.theme.borderColor};
  }

  ${Re`
    flex-direction: column;
    gap: 4px;
  `}
`,Ws=M.span`
  font-size: 13px;
  font-weight: 500;
  color: ${e=>e.theme.colors.secondary};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  flex-shrink: 0;
`,Qi=M.span`
  font-size: 14px;
  color: ${e=>e.theme.colors.main};
  text-align: right;
  word-break: break-word;

  ${Re`
    text-align: left;
  `}
`,z9=M.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  justify-content: flex-end;

  ${Re`
    justify-content: flex-start;
  `}
`,$9=M.span`
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  background-color: ${e=>e.theme.colors.secondarySurface};
  color: ${e=>e.theme.colors.main};
`,B9=e=>{if(Qe.isAllDay(e))return"All day";const t=lh.find(i=>i.minutes===e.startMin),n=lh.find(i=>i.minutes===e.endMin);return!t||!n?"All day":`${t.label} – ${n.label}`},H9=e=>{switch(e){case"free":return"Open spots only";case"waitlist":return"Open spots or waitlist";case"full":return"Any status"}},F9=({name:e,studioId:t,maxStatus:n,selectedInstructors:i,selectedDisciplines:a,timeRanges:l})=>{const u=Qe.STUDIOS[t],f=rs.filter((g,y)=>l[y]),h=l.find(Boolean),p=l.filter(Boolean).every(g=>g&&h&&g.startMin===h.startMin&&g.endMin===h.endMin);return _.jsxs(L9,{children:[_.jsx(P9,{children:"Review your alert"}),_.jsx(j9,{children:"Double-check everything looks right, then hit Save."}),_.jsxs(U9,{children:[e.trim()&&_.jsxs(Qs,{children:[_.jsx(Ws,{children:"Name"}),_.jsx(Qi,{children:e.trim()})]}),_.jsxs(Qs,{children:[_.jsx(Ws,{children:"Studio"}),_.jsx(Qi,{children:u?.location||t})]}),_.jsxs(Qs,{children:[_.jsx(Ws,{children:"Alert on"}),_.jsx(Qi,{children:H9(n)})]}),_.jsxs(Qs,{children:[_.jsx(Ws,{children:"Instructors"}),_.jsx(Qi,{children:i===null?"Any instructor":i.length===0?"None selected":`${i.length} selected`})]}),_.jsxs(Qs,{children:[_.jsx(Ws,{children:"Disciplines"}),_.jsx(Qi,{children:a===null?"Any discipline":a.length===0?"None selected":`${a.length} selected`})]}),_.jsxs(Qs,{children:[_.jsx(Ws,{children:"Days"}),f.length===0?_.jsx(Qi,{children:"No days selected"}):f.length===7?_.jsx(Qi,{children:"Every day"}):_.jsx(z9,{children:f.map(g=>_.jsx($9,{children:g.slice(0,3)},g))})]}),h&&_.jsxs(Qs,{children:[_.jsx(Ws,{children:"Time window"}),_.jsx(Qi,{children:p?B9(h):"Varies by day"})]})]})]})},q9=M.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`,V9=M.legend`
  font-weight: 600;
  font-size: 18px;
  color: ${e=>e.theme.colors.main};
  margin-bottom: 4px;
`,G9=M.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
  margin: 0 0 16px;
`,Y9=M.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,Q9=M.div`
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

  ${Re`
    flex-wrap: wrap;
    gap: 8px;
    min-height: 0;
  `}
`,W9=M.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
  font-weight: 500;
  min-width: 120px;
  color: ${e=>e.theme.colors.main};

  ${Re`
    min-width: 0;
    flex: 1;
  `}
`,K9=M.input`
  accent-color: ${e=>e.theme.colors.accent};
`,X9=M.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: auto;

  ${Re`
    margin-left: 28px;
    width: calc(100% - 28px);
  `}
`,Z9=M.label`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
`,J9=M.input`
  accent-color: ${e=>e.theme.colors.accent};
`,Xx=M.select`
  ${Ca}
  font-family: inherit;
  font-size: 13px;
  padding: 6px 8px;
  background-color: inherit;
  cursor: pointer;
  color: ${e=>e.theme.colors.main};

  ${Re`
    flex: 1;
    min-width: 0;
  `}
`,eH=M.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,tH=M.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  flex-wrap: wrap;
`,sy=M.button`
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
`,nH=({timeRanges:e,setTimeRanges:t})=>{const n=e.filter(Boolean).length,i=R.useRef(rs.map(()=>{})),a=R.useCallback(g=>{const y=[...e];y[g]=y[g]?null:Qe.DEFAULT_TIME_RANGE,t(y)},[e,t]),l=R.useCallback(g=>{const y=e[g];if(!y)return;const v=[...e];Qe.isAllDay(y)?v[g]=i.current[g]??Qe.SPECIFIC_DEFAULT_TIME_RANGE:(i.current[g]=y,v[g]=Qe.ALL_DAY_TIME_RANGE),t(v)},[e,t]),u=R.useCallback((g,y,v)=>{const S=[...e],w=S[g];w&&(y==="startMin"?S[g]={startMin:v,endMin:w.endMin===0||w.endMin>=v?w.endMin:0}:S[g]={...w,endMin:v},t(S))},[e,t]),f=()=>{t(rs.map(()=>Qe.DEFAULT_TIME_RANGE))},h=()=>{t(rs.map(()=>null))},p=()=>{const g=e.find(Boolean);g&&t(e.map(y=>y?{...g}:null))};return _.jsxs(q9,{children:[_.jsx(V9,{children:"Days & times"}),_.jsx(G9,{children:"Choose which days and time windows to monitor. Alerts fire when a matching class falls within these windows (in the studio's timezone)."}),_.jsxs(tH,{children:[_.jsx(sy,{type:"button",onClick:f,children:"Select all days"}),n>0&&_.jsx(sy,{type:"button",onClick:h,children:"Clear all"}),n>1&&_.jsx(sy,{type:"button",onClick:p,children:"Copy time to all"})]}),_.jsx(Y9,{children:rs.map((g,y)=>{const v=e[y],S=!!v&&Qe.isAllDay(v);return _.jsxs(Q9,{$enabled:!!v,children:[_.jsxs(W9,{htmlFor:`day-${y}`,children:[_.jsx(K9,{type:"checkbox",id:`day-${y}`,checked:!!v,onChange:()=>a(y)}),g]}),v&&_.jsxs(X9,{children:[_.jsxs(Z9,{htmlFor:`allday-${y}`,children:[_.jsx(J9,{type:"checkbox",id:`allday-${y}`,checked:S,onChange:()=>l(y)}),"All day"]}),!S&&_.jsxs(_.Fragment,{children:[_.jsx(Xx,{value:v.startMin,"aria-label":`${g} start time`,onChange:({target:w})=>{const D=parseInt(w.value);Number.isNaN(D)||u(y,"startMin",D)},children:lh.map(w=>_.jsx("option",{value:w.minutes,children:w.label},w.minutes))}),_.jsx(eH,{children:"to"}),_.jsx(Xx,{value:v.endMin,"aria-label":`${g} end time`,onChange:({target:w})=>{const D=parseInt(w.value);Number.isNaN(D)||u(y,"endMin",D)},children:lh.map(w=>_.jsx("option",{value:w.minutes,disabled:w.minutes>0&&w.minutes<v.startMin,children:w.label},w.minutes))})]})]})]},g)})})]})},ay=["Basics","Filters","Schedule","Review"],rH=M.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
  background-color: white;
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
`,iH=M.div`
  padding: 24px 24px 0;

  ${Re`
    padding: 16px 16px 0;
  `}
`,sH=M.h2`
  margin: 0 0 4px;
  font-size: 22px;
  color: ${e=>e.theme.colors.main};
`,aH=M.p`
  margin: 0 0 20px;
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
`,oH=M.div`
  padding: 8px 24px 24px;
  flex: 1;
  overflow-y: auto;

  ${Re`
    padding: 8px 16px 16px;
  `}
`,lH=M.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding: 16px 24px;
  border-top: 1px solid ${e=>e.theme.borderColor};
  background-color: ${e=>e.theme.colors.mainSurface};

  ${Re`
    padding: 12px 16px;
  `}
`,sf=M.button`
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

  ${Re`
    padding: 10px 16px;
    font-size: 13px;
  `}
`,cH=M.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,uH=M.span`
  font-size: 13px;
  color: ${e=>e.$error?"#d93025":e.theme.colors.secondary};

  ${Re`
    font-size: 12px;
  `}
`,dH=({alertToEdit:e,onSave:t,onCancel:n})=>{const i=gs(),a=ct(Ta),l=ct(fu),[u,f]=R.useState(0),[h,p]=R.useState(!1),[g,y]=R.useState();R.useEffect(()=>{e.studioId?i(Ef(e.studioId)):i(Ef(MI(Qe.DEFAULT_STUDIO_ID)))},[e.studioId,i]);const[v,S]=R.useState(e.name||""),[w,D]=R.useState(e.instructors||null),[C,I]=R.useState(e.disciplines||null),[k,x]=R.useState(()=>e.timeRanges||rs.map(()=>Qe.DEFAULT_TIME_RANGE)),[A,N]=R.useState(e.maxStatus||"free"),T=R.useRef(e.studioId);R.useEffect(()=>{a&&T.current&&a!==T.current&&(D(K=>K&&[]),I(K=>K&&[])),T.current=a},[a]);const P=u<ay.length-1,V=u>0,H=u===ay.length-1,B=R.useCallback(()=>{P&&f(K=>K+1)},[P]),$=R.useCallback(()=>{V&&f(K=>K-1)},[V]),G=R.useCallback(async()=>{if(!a||!l)return;p(!0),y(void 0);const K={id:e.id||null,created:e.created||new Date().getTime(),...v.trim()?{name:v.trim()}:{},studioId:a,instructors:w,disciplines:C,timeRanges:k,maxStatus:A};try{K.id?await hB(l,K):await fB(l,K),t()}catch(ue){Or(ue),y("Something went wrong. Please try again."),p(!1)}},[e.id,e.created,v,a,l,w,C,k,A,t]),F=!!e.id;return _.jsxs(rH,{children:[_.jsxs(iH,{children:[_.jsx(sH,{children:F?"Edit alert":"New alert"}),_.jsx(aH,{children:F?"Update your alert settings below.":"Set up a new alert in a few quick steps."}),_.jsx(k9,{steps:ay,currentStep:u,onStepClick:f})]}),_.jsxs(oH,{children:[u===0&&_.jsx(CB,{name:v,onNameChange:S,studioId:a,onStudioChange:K=>i(Ef(K)),maxStatus:A,onStatusChange:N}),u===1&&_.jsx(C9,{studioId:a,selectedInstructors:w,setSelectedInstructors:D,selectedDisciplines:C,setSelectedDisciplines:I}),u===2&&_.jsx(nH,{timeRanges:k,setTimeRanges:x}),u===3&&_.jsx(F9,{name:v,studioId:a,maxStatus:A,selectedInstructors:w,selectedDisciplines:C,timeRanges:k})]}),_.jsxs(lH,{children:[_.jsx("div",{children:V?_.jsx(sf,{type:"button",onClick:$,children:"Back"}):_.jsx(sf,{type:"button",onClick:n,children:"Cancel"})}),_.jsxs(cH,{children:[g&&_.jsx(uH,{$error:!0,children:g}),H?_.jsx(sf,{type:"button",$primary:!0,onClick:G,disabled:h,children:h?"Saving…":"Save alert"}):_.jsx(sf,{type:"button",$primary:!0,onClick:B,children:"Continue"})]})]})]})},fH=()=>{const e=vi(),t=au(),n=e.state||{};return _.jsx(dH,{alertToEdit:n,onSave:()=>{t(rt.ALERTS)},onCancel:()=>{t(rt.ALERTS)}})},JI=R.createContext({state:"idle"}),hH=({children:e,userId:t})=>{const[n,i]=R.useState({state:"idle"});return R.useEffect(()=>{i({state:"loading"});const a=Mn;if(!a)return i({state:"failed",error:new Error("No database set up")}),()=>{};const l=yr(a,`messagingTokens/${t}`),u=O_(l,f=>{const h=f.val();i({state:"fulfilled",data:h||{}})},f=>{i({state:"failed",error:f})});return()=>u()},[t]),_.jsx(JI.Provider,{value:n,children:e})},eD=R.createContext({state:"idle"}),pH=({children:e,userId:t})=>{const[n,i]=R.useState({state:"idle"});return R.useEffect(()=>{i({state:"loading"});const a=Mn;if(!a)return i({state:"failed",error:new Error("No database set up")}),()=>{};const l=yr(a,Qe.PATHS.alertPreferences(t)),u=O_(l,f=>{const h=f.val();i({state:"fulfilled",data:h||{}})},f=>{i({state:"failed",error:f})});return()=>u()},[t]),_.jsx(eD.Provider,{value:n,children:e})},tD=R.createContext({state:"idle"}),mH=({children:e,userId:t})=>{const[n,i]=R.useState({state:"idle"});return R.useEffect(()=>{i({state:"loading"});const a=Mn;if(!a)return i({state:"failed",error:new Error("No database set up")}),()=>{};const l=yr(a,Qe.PATHS.alerts(t)),u=O_(l,f=>{const h=f.val();if(!h){i({state:"fulfilled",data:[]});return}const p=Object.entries(h).map(([g,y])=>({...y,timeRanges:new Array(rs.length).fill(null).map((v,S)=>y.timeRanges[S]||null),id:g}));i({state:"fulfilled",data:p})},f=>{i({state:"failed",error:f})});return()=>u()},[t]),_.jsx(tD.Provider,{value:n,children:e})},gH=M.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 16px;

  ${Re`
    padding: 8px;
  `}
`,yH=M.div`
  overflow: auto;
  height: 100%;
`,vH=M.div`
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 48px 32px;
  text-align: center;
  max-width: 440px;
  margin: 40px auto 0;

  ${Re`
    padding: 32px 20px;
    margin-top: 16px;
  `}
`,_H=M.div`
  font-size: 36px;
  margin-bottom: 16px;
  line-height: 1;
`,bH=M.h1`
  font-size: 20px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
  margin: 0 0 10px;
`,SH=M.p`
  font-size: 15px;
  color: ${e=>e.theme.colors.secondary};
  line-height: 1.55;
  margin: 0 0 24px;
`,wH=M(ms)`
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
`,EH=M.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
  padding: 32px 0;
  margin: 0;
`,xH=({children:e})=>{const t=ct(Ko);return t.state==="loading"?_.jsx(EH,{children:"Loading…"}):t.state!=="fulfilled"||!t.data?_.jsxs(vH,{children:[_.jsx(_H,{children:"🔔"}),_.jsx(bH,{children:"Sign in to use Alerts"}),_.jsx(SH,{children:"Track class availability and get push notifications when a spot opens up for the classes you care about."}),_.jsx(wH,{to:rt.SIGN_IN,children:"Sign in"})]}):e(t.data.id)},TH=e=>_.jsx(aa,{children:_.jsx(yH,{children:_.jsx(gH,{children:_.jsx(xH,{...e})})})}),CH=({userId:e})=>_.jsx(mH,{userId:e,children:_.jsx(pH,{userId:e,children:_.jsx(hH,{userId:e,children:_.jsx(Ek,{})})})}),RH=()=>_.jsx(TH,{children:e=>_.jsx(CH,{userId:e})}),AH=async(e,t)=>{const n=Mn;if(!n)throw new Error("No Firebase database connection to use");await qA(yr(n,Qe.PATHS.alertPreferences(e)),t)},IH=M.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,DH=M.div`
  display: flex;
  align-items: center;
  gap: 12px;

  ${Re`
    flex-direction: column;
    align-items: stretch;
  `}
`,OH=M.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,NH=M.label`
  font-size: 13px;
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
`,MH=M.input`
  ${Ca}
  padding: 8px 12px;
  font-family: inherit;
  font-size: 14px;
  color: ${e=>e.theme.colors.main};
  width: 80px;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.accent};
  }

  ${Re`
    width: 100%;
  `}
`,kH=M.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,LH=M.button`
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

  ${Re`
    padding: 10px 20px;
  `}
`,PH=M.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
  padding: 16px;
`,jH=M.p`
  margin: 0;
  font-size: 14px;
  color: #d93025;
  text-align: center;
  padding: 16px;
`,UH=({alertPreferences:e})=>{const t=ct(fu),[n,i]=R.useState(e.notificationDelayMin||5),[a,l]=R.useState(!1),[u,f]=R.useState(!1),h=R.useCallback(async p=>{if(p.preventDefault(),!!t){l(!0),f(!1);try{await AH(t,{lastUpdated:new Date().getTime(),notificationDelayMin:n}),f(!0),setTimeout(()=>f(!1),2e3)}catch{}finally{l(!1)}}},[t,n]);return _.jsxs(IH,{onSubmit:h,children:[_.jsxs(OH,{children:[_.jsx(NH,{htmlFor:"delay-input",children:"Cooldown (minutes)"}),_.jsx(kH,{children:"Minimum delay between consecutive alert notifications"})]}),_.jsxs(DH,{children:[_.jsx(MH,{id:"delay-input",type:"number",min:0,value:n,onChange:p=>{const g=parseInt(p.target.value,10);Number.isNaN(g)||i(g)}}),_.jsx(LH,{type:"submit",disabled:a,$saved:u,children:a?"Saving…":u?"Saved ✓":"Save"})]})]})},zH=()=>{const e=R.useContext(eD);return e.state==="idle"||e.state==="loading"?_.jsx(PH,{children:"Loading preferences…"}):e.state==="failed"?_.jsx(jH,{children:"Failed to load preferences."}):_.jsx(UH,{alertPreferences:e.data},e.data.lastUpdated)},$H=e=>{if(!e)return"Unknown device";const t=BH(e),n=HH(e);return t&&n?`${t} on ${n}`:t||n||"Unknown device"},BH=e=>{if(e.includes("Edg/"))return"Edge";if(e.includes("OPR/")||e.includes("Opera"))return"Opera";if(e.includes("CriOS"))return"Chrome";if(e.includes("FxiOS"))return"Firefox";if(e.includes("Chrome/")&&!e.includes("Chromium"))return"Chrome";if(e.includes("Firefox/"))return"Firefox";if(e.includes("Safari/")&&!e.includes("Chrome"))return"Safari"},HH=e=>{if(/iPhone/.test(e))return"iPhone";if(/iPad/.test(e))return"iPad";if(/iPod/.test(e))return"iPod";if(/Android/.test(e))return"Android";if(/CrOS/.test(e))return"ChromeOS";if(/Mac OS X|Macintosh/.test(e))return"macOS";if(/Windows/.test(e))return"Windows";if(/Linux/.test(e))return"Linux"},FH=M.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,qH=M.li`
  ${Ca}
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  transition: box-shadow 0.15s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 12px;
  }

  ${Re`
    flex-wrap: wrap;
    padding: 10px 12px;
    gap: 8px;
  `}
`,VH=M.span`
  font-size: 20px;
  flex-shrink: 0;
`,GH=M.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
`,YH=M.span`
  font-weight: 500;
  font-size: 14px;
  color: ${e=>e.theme.colors.main};
  display: flex;
  align-items: center;
  gap: 6px;
`,QH=M.span`
  padding: 1px 6px;
  border-radius: 10px;
  font-size: 10px;
  font-weight: 600;
  background-color: ${e=>e.theme.colors.accent}14;
  color: ${e=>e.theme.colors.accent};
`,WH=M.span`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,KH=M.button`
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

  ${Re`
    margin-left: auto;
  `}
`,XH=M.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
  padding: 16px;
`,ZH=M.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
  padding: 16px;
`,JH=M.p`
  margin: 0;
  font-size: 14px;
  color: #d93025;
  text-align: center;
  padding: 16px;
`,e7=e=>e?/iPhone|iPad|iPod/i.test(e)||/Android/i.test(e)?"📱":/Windows/i.test(e)||/Macintosh|Mac OS/i.test(e)?"💻":/Linux/i.test(e)?"🖥️":"💻":"💻",t7=({device:e,isCurrentDevice:t,onDelete:n})=>{const i=R.useMemo(()=>{const u=new Date(e.timestamp).getFullYear()===new Date().getFullYear();return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"numeric",...u?{}:{year:"numeric"}}).format(e.timestamp)},[e.timestamp]),a=$H(e.userAgent);return _.jsxs(qH,{children:[_.jsx(VH,{children:e7(e.userAgent)}),_.jsxs(GH,{children:[_.jsxs(YH,{children:[a,t&&_.jsx(QH,{children:"This device"})]}),_.jsxs(WH,{children:["Last active ",i]})]}),_.jsx(KH,{type:"button",onClick:n,"aria-label":`Remove ${a}`,children:"Remove"})]})},n7=({devices:e})=>{const n=R.useContext(hu).token,i=ct(fu),a=l=>{i&&QA(i,l).catch(console.error)};return e.length===0?_.jsx(XH,{children:"No devices registered for push notifications yet."}):_.jsx(FH,{children:e.map(([l,u])=>_.jsx(t7,{device:u,isCurrentDevice:n!==void 0?l===n:u.userAgent!==void 0&&u.userAgent===navigator.userAgent,onDelete:()=>a(l)},l))})},r7=()=>{const e=R.useContext(JI),t=R.useMemo(()=>e.state==="fulfilled"?Object.entries(e.data).sort(([,n],[,i])=>i.timestamp-n.timestamp):[],[e]);return e.state==="idle"||e.state==="loading"?_.jsx(ZH,{children:"Loading devices…"}):e.state==="failed"?_.jsx(JH,{children:"Failed to load devices. Please try again."}):_.jsx(n7,{devices:t})},i7=async(e,t)=>{const n=Mn;if(!n)throw new Error("No Firebase database connection to use");await FA(yr(n,Qe.PATHS.alert(e,t)))},Zx=(e,t,n)=>!e||e.length===0?t:e.length===1?e[0]:e.length===2?`${e[0]} or ${e[1]}`:`${e.length} ${n}`,s7=(e,t)=>{const n=Zx(e,"Any Class","Disciplines"),i=Zx(t,"Any Instructor","Instructors");return`${n} with ${i}`},a7=M.li`
  ${Ca}
  padding: 16px;
  transition: box-shadow 0.15s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 12px;
  }

  ${Re`
    padding: 12px;
  `}
`,o7=M.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;

  ${Re`
    flex-direction: column;
    gap: 8px;
  `}
`,l7=M.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`,c7=M.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`,u7=M.span`
  font-weight: 600;
  font-size: 15px;
  color: ${e=>e.theme.colors.main};
`,d7=M.span`
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 500;
  background-color: ${e=>e.$status==="free"?"#e8f5e9":e.$status==="waitlist"?"#fff3e0":"#fce4ec"};
  color: ${e=>e.$status==="free"?"#2e7d32":e.$status==="waitlist"?"#e65100":"#c62828"};
`,f7=M.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
`,h7=M.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  margin-top: 2px;
`,p7=M.span`
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
`,m7=M.div`
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;

  ${Re`
    align-self: flex-end;
  `}
`,ov=M.button`
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

  ${Re`
    padding: 6px 10px;
    font-size: 11px;
  `}
`,g7=M(ov)`
  &:hover {
    border-color: #d93025;
    color: #d93025;
  }
`,y7=M.span`
  font-size: 11px;
  color: ${e=>e.theme.colors.secondary};
  margin-top: 4px;
`,v7={free:{label:"Open spots",title:"Only alerts when a class has open spots available to book"},waitlist:{label:"Waitlist",title:"Alerts when a class has open spots or waitlist availability"},full:{label:"Any",title:"Alerts regardless of availability status"}},_7=e=>v7[e]||{label:e,title:""},b7=R.memo(({alert:e,onDuplicate:t,onEdit:n})=>{const i=ct(fu),{data:a}=K_(e.studioId),{data:l}=W_(e.studioId),u=R.useMemo(()=>{const y=new Date(e.created).getFullYear()===new Date().getFullYear();return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",...y?{}:{year:"numeric"}}).format(e.created)},[e.created]),f=R.useMemo(()=>{if(e.name)return e.name;const g=Qe.isNotEmpty(e.instructors)&&a?e.instructors.map(v=>a.find(S=>S.id===v)?.name).filter(v=>!!v):null,y=Qe.isNotEmpty(e.disciplines)&&l?e.disciplines.map(v=>l.find(S=>S.id===v)?.name).filter(v=>!!v):null;return s7(y,g)},[e.name,e.instructors,e.disciplines,a,l]),h=Qe.STUDIOS[e.studioId]?.location||e.studioId||"No studio",p=_7(e.maxStatus);return _.jsx(a7,{children:_.jsxs(o7,{children:[_.jsxs(l7,{children:[_.jsxs(c7,{children:[_.jsx(u7,{children:f}),_.jsx(d7,{$status:e.maxStatus,title:p.title,children:p.label})]}),_.jsx(f7,{children:h}),_.jsx(h7,{children:rs.map((g,y)=>_.jsx(p7,{$active:!!e.timeRanges[y],title:e.timeRanges[y]?`${g}: monitoring enabled`:`${g}: not monitored`,children:g.charAt(0)},g))}),_.jsxs(y7,{children:["Created ",u]})]}),_.jsxs(m7,{children:[_.jsx(ov,{type:"button",onClick:n,"aria-label":"Edit alert",children:"Edit"}),_.jsx(ov,{type:"button",onClick:t,"aria-label":"Duplicate alert",children:"Duplicate"}),_.jsx(g7,{type:"button",onClick:()=>i&&i7(i,e.id),"aria-label":"Delete alert",children:"Delete"})]})]})})}),S7=M.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,w7=({alerts:e,onDuplicate:t,onEdit:n})=>_.jsx(S7,{children:e.map(i=>_.jsx(b7,{alert:i,onDuplicate:()=>t(i),onEdit:()=>n(i)},i.id))}),E7=M.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px 0;

  ${Re`
    padding: 16px 16px 0;
  `}
`,x7=M.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,T7=M.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
`,C7=M.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
`,R7=M.button`
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

  ${Re`
    padding: 8px 14px;
    font-size: 13px;
  `}
`,A7=M.div`
  padding: 16px 24px 24px;

  ${Re`
    padding: 12px 16px 16px;
  `}
`,I7=M.p`
  margin: 0;
  padding: 24px;
  text-align: center;
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
`,D7=M.p`
  margin: 0;
  padding: 24px;
  text-align: center;
  color: #d93025;
  font-size: 14px;
`,O7=({onAdd:e,onEdit:t,onDuplicate:n})=>{const i=R.useContext(tD),a=i.state==="loading"||i.state==="idle",l=i.state==="failed",u=i.state==="fulfilled"?i.data:[];return _.jsxs(_.Fragment,{children:[_.jsxs(E7,{children:[_.jsxs(x7,{children:[_.jsx(T7,{children:"Alerts"}),_.jsx(C7,{children:a?"Loading your alerts…":l?"Something went wrong":u.length===0?"You haven't created any alerts yet":`${u.length} alert${u.length===1?"":"s"}`})]}),!a&&!l&&_.jsx(R7,{type:"button",onClick:e,children:"+ New alert"})]}),_.jsxs(A7,{children:[a&&_.jsx(I7,{children:"Loading…"}),l&&_.jsx(D7,{children:"Failed to load your alerts. Please refresh and try again."}),!a&&!l&&u.length===0&&_.jsx(L7,{onAdd:e}),!a&&!l&&u.length>0&&_.jsx(w7,{alerts:u,onEdit:t,onDuplicate:n})]})]})},N7=M.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 32px 16px;
`,M7=M.p`
  margin: 0;
  font-size: 15px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
`,k7=M.button`
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
`,L7=({onAdd:e})=>_.jsxs(N7,{children:[_.jsx(M7,{children:"Create your first alert to get notified when classes become available."}),_.jsx(k7,{type:"button",onClick:e,children:"Create an alert"})]}),P7=M.button`
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
`;M.button`
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
`;const j7=M.div`
  background-color: white;
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 16px;
`,U7=()=>["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document||/iPad|iPhone|iPod/.test(navigator.userAgent),oy=M(j7)`
  margin-bottom: 1em;
`,z7=M(P7)`
  margin-top: 1em;
`,Jx=M.h2`
  color: ${e=>e.theme.colors.accent};
`,$7=()=>{const[e,t]=R.useState(window.Notification?window.Notification.permission:void 0),{refreshToken:n}=R.useContext(hu),i=U7(),a=!!navigator.standalone||window.matchMedia("(display-mode: standalone)").matches,l=R.useCallback(()=>{window.Notification&&typeof window.Notification.requestPermission=="function"&&window.Notification.requestPermission().then(u=>{t(u),u==="granted"&&n()}).catch(u=>{console.error(u),Or(u)})},[n]);return i&&!a?_.jsxs(oy,{children:[_.jsx(Jx,{children:"Installation Required"}),_.jsx("p",{children:"To receive notifications on iOS, you must first add this app to your home screen. Tap the share button in Safari and select “Add to Home Screen”, then open the app from there."})]}):e===void 0||!("serviceWorker"in navigator)?_.jsxs(oy,{children:[_.jsx(Jx,{children:"Unsupported Browser"}),_.jsx("p",{children:"This browser does not support sending you notifications in the background. Alerts for new classes will only display if you keep this tab open."})]}):e!=="granted"?_.jsxs(oy,{children:[_.jsx("h2",{children:"Grant notification permissions"}),_.jsx("p",{children:"In order to get notified when any of your alerts trigger, you need to grant permission to send notifications"}),_.jsx(z7,{type:"button",onClick:l,children:"Grant Permission"})]}):null},B7=M.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${Re`
    gap: 16px;
  `}
`,ly=M.section`
  background-color: white;
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  overflow: hidden;
`,eT=M.div`
  padding: 20px 24px 0;

  ${Re`
    padding: 16px 16px 0;
  `}
`,tT=M.h2`
  margin: 0 0 4px;
  font-size: 20px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
`,nT=M.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
`,rT=M.div`
  padding: 16px 24px 24px;

  ${Re`
    padding: 12px 16px 16px;
  `}
`,H7=()=>{const e=au();return _.jsxs(B7,{children:[_.jsx(ly,{children:_.jsx(O7,{onAdd:()=>{e(rt.ALERTS_EDITOR,{state:{}})},onEdit:t=>{e(rt.ALERTS_EDITOR,{state:t})},onDuplicate:t=>{e(rt.ALERTS_EDITOR,{state:{...t,id:void 0,created:void 0}})}})}),_.jsxs(ly,{children:[_.jsxs(eT,{children:[_.jsx(tT,{children:"Preferences"}),_.jsx(nT,{children:"Control how often you receive alert notifications."})]}),_.jsx(rT,{children:_.jsx(zH,{})})]}),_.jsxs(ly,{children:[_.jsxs(eT,{children:[_.jsx(tT,{children:"Devices"}),_.jsx(nT,{children:"Devices registered to receive push notifications. Removed devices will re-register on their next visit."})]}),_.jsxs(rT,{children:[_.jsx($7,{}),_.jsx(r7,{})]})]})]})},F7=M.button.attrs({"aria-label":"Close",type:"button"})`
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
`,X_=e=>{try{return window.localStorage.getItem(e)}catch(t){return Or(t),null}},Z_=(e,t)=>{try{window.localStorage.setItem(e,t)}catch(n){Or(n)}},nD=e=>{try{window.localStorage.removeItem(e)}catch(t){Or(t)}},rD="BOOKABLE_STATUS_FILTERS",lv="DISCIPLINE_FILTERS",cv="INSTRUCTOR_FILTERS",q7=e=>{const t=X_(rD);return t===null?e:t.split(";").filter(Qe.isBookableStatus)},V7=e=>{Z_(rD,e.join(";"))},G7=e=>{const t=X_(lv);return t===null?e:t.split(";").filter(Boolean)},iT=e=>{e.length===0?nD(lv):Z_(lv,e.join(";"))},Y7=e=>{const t=X_(cv);return t===null?e:t.split(";").filter(Boolean)},sT=e=>{e.length===0?nD(cv):Z_(cv,e.join(";"))},Q7={selectedBookableStatuses:q7(["free","waitlist"]),selectedInstructors:Y7([]),selectedDisciplines:G7([])},iD=Ar({name:"filters",initialState:Q7,reducers:{toggleBookableStatus(e,t){e.selectedBookableStatuses.includes(t.payload)?e.selectedBookableStatuses=e.selectedBookableStatuses.filter(n=>n!==t.payload):e.selectedBookableStatuses=[...e.selectedBookableStatuses,t.payload],V7(e.selectedBookableStatuses)},toggleInstructor(e,t){e.selectedInstructors.includes(t.payload)?e.selectedInstructors=e.selectedInstructors.filter(n=>n!==t.payload):e.selectedInstructors=[...e.selectedInstructors,t.payload],sT(e.selectedInstructors)},resetInstructors(e){e.selectedInstructors=[],sT(e.selectedInstructors)},toggleDiscipline(e,t){e.selectedDisciplines.includes(t.payload)?e.selectedDisciplines=e.selectedDisciplines.filter(n=>n!==t.payload):e.selectedDisciplines=[...e.selectedDisciplines,t.payload],iT(e.selectedDisciplines)},resetDisciplines(e){e.selectedDisciplines=[],iT(e.selectedDisciplines)}}}),{toggleBookableStatus:W7,toggleInstructor:K7,resetInstructors:X7,toggleDiscipline:Z7,resetDisciplines:J7}=iD.actions,eF=iD.reducer,tF=()=>{const e=ct(i=>i.filters.selectedBookableStatuses),t=gs(),n=R.useCallback(i=>{t(W7(i))},[t]);return{bookableStatuses:e,toggleBookableStatus:n}},nF=M.button`
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
`,rF=M.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px 8px;
`,iF=M.h3`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${e=>e.theme.colors.secondary};
  margin: 0;
`,Jh=({label:e,onReset:t,children:n})=>_.jsxs(rF,{children:[_.jsx(iF,{children:e}),t&&_.jsx(nF,{type:"button",onClick:t,children:"Reset"}),n]}),sF=[{label:"Free",status:"free",color:"#2e7d32"},{label:"Waitlist",status:"waitlist",color:"#e65100"},{label:"Full",status:"full",color:"#9e9e9e"}],aF=M.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 0 16px 16px;
`,oF=M.button`
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
`,lF=()=>{const{bookableStatuses:e,toggleBookableStatus:t}=tF();return _.jsxs("fieldset",{style:{border:"none",margin:0,padding:0},children:[_.jsx("legend",{style:{padding:0,width:"100%"},children:_.jsx(Jh,{label:"Status"})}),_.jsx(aF,{children:sF.map(n=>{const i=e.includes(n.status);return _.jsx(oF,{type:"button",$active:i,$color:n.color,onClick:()=>t(n.status),"aria-pressed":i,children:n.label},n.status)})})]})},cF=()=>{const e=ct(i=>i.filters.selectedDisciplines),t=gs(),n=R.useCallback(i=>{t(Z7(i))},[t]);return{selectedDisciplines:e,toggleDiscipline:n}},sD=M.ul`
  list-style: none;
  margin: 0;
  padding: 0 0 8px;
`,aD=M.li`
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
`,oD=M.span`
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
`,lD=M.span`
  font-size: 14px;
  color: ${e=>e.theme.colors.main};
`,ph=M.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  padding: 8px 16px 16px;
  margin: 0;
`,uF=({discipline:e,checked:t,onClick:n})=>_.jsxs(aD,{$checked:t,onClick:n,role:"checkbox","aria-checked":t,children:[_.jsx(oD,{$checked:t}),_.jsx(uh,{discipline:e,size:24}),_.jsx(lD,{children:e.name})]}),dF=()=>{const e=ct(Ta),{currentData:t,isLoading:n,error:i}=W_(e),{selectedDisciplines:a,toggleDiscipline:l}=cF();return i&&!n?_.jsx(ph,{children:"Failed to load disciplines"}):!t||n?_.jsx(ph,{children:"Loading…"}):_.jsx(sD,{children:t.map((u,f)=>_.jsx(uF,{discipline:u,checked:a.includes(u.id),onClick:()=>l(u.id)},f))})},fF=()=>{const e=ct(n=>n.filters.selectedDisciplines.length>0),t=gs();return _.jsxs("div",{children:[_.jsx(Jh,{label:"Disciplines",onReset:e?()=>t(J7()):void 0}),_.jsx(dF,{})]})},hF=()=>{const e=ct(i=>i.filters.selectedInstructors),t=gs(),n=R.useCallback(i=>{t(K7(i))},[t]);return{selectedInstructors:e,toggleInstructor:n}},pF=({instructor:e,checked:t,onClick:n})=>_.jsxs(aD,{$checked:t,onClick:n,role:"checkbox","aria-checked":t,children:[_.jsx(oD,{$checked:t}),_.jsx(F_,{instructor:e,size:28}),_.jsx(lD,{children:e.name})]}),mF=()=>{const e=ct(Ta),{currentData:t,isLoading:n,error:i}=K_(e),{selectedInstructors:a,toggleInstructor:l}=hF();return i&&!n?_.jsx(ph,{children:"Failed to load instructors"}):!t||n?_.jsx(ph,{children:"Loading…"}):_.jsx(sD,{children:t.map((u,f)=>_.jsx(pF,{instructor:u,checked:a.includes(u.id),onClick:()=>l(u.id)},f))})},gF=()=>{const e=ct(n=>n.filters.selectedInstructors.length>0),t=gs();return _.jsxs("div",{children:[_.jsx(Jh,{label:"Instructors",onReset:e?()=>t(X7()):void 0}),_.jsx(mF,{})]})},yF=Object.entries(Qe.STUDIOS).map(([e,t])=>({id:e,label:t.location})),vF=M.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 0 16px 16px;
`,_F=M.label`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  ${Ca}
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
`,bF=M.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`,SF=M.span`
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
`,wF=M.span`
  font-size: 15px;
  color: ${e=>e.theme.colors.main};
`,EF=()=>{const e=gs(),t=ct(Ta);return _.jsxs("fieldset",{style:{border:"none",margin:0,padding:0},children:[_.jsx("legend",{style:{padding:0,width:"100%"},children:_.jsx(Jh,{label:"Studio"})}),_.jsx(vF,{children:yF.map(n=>{const i=t===n.id;return _.jsxs(_F,{$selected:i,htmlFor:`studio-${n.id}`,children:[_.jsx(bF,{type:"radio",id:`studio-${n.id}`,name:"studio-selected",value:n.id,checked:i,onChange:()=>{i||e(Ef(n.id))}}),_.jsx(SF,{$selected:i}),_.jsx(wF,{children:n.label})]},n.id)})})]})},xF=M.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`,TF=M.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 16px 12px;
  border-bottom: 1px solid ${e=>e.theme.borderColor};
  position: sticky;
  top: 0;
  background-color: ${e=>e.theme.colors.secondarySurface};
  z-index: 1;

  ${NI`
    display: flex;
  `}
`,CF=M.h2`
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${e=>e.theme.colors.main};
  margin: 0;
`,RF=M(F7)`
  display: none;

  ${NI`
    display: block;
  `}
`,AF=M.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  overflow-y: auto;
  flex: 1;
`,af=M.div`
  border-bottom: 1px solid ${e=>e.theme.borderColor};

  &:last-child {
    border-bottom: none;
  }
`,IF=({onClose:e})=>_.jsxs(xF,{children:[_.jsxs(TF,{children:[_.jsx(CF,{children:"Filters"}),_.jsx(RF,{onClick:()=>e()})]}),_.jsxs(AF,{children:[_.jsx(af,{children:_.jsx(EF,{})}),_.jsx(af,{children:_.jsx(lF,{})}),_.jsx(af,{children:_.jsx(fF,{})}),_.jsx(af,{children:_.jsx(gF,{})})]})]}),DF=()=>{const e=ct(Ta),{refetch:t}=QI(e);return{refresh:R.useCallback(async()=>{await t()},[t])}},aT=150,oT=60,OF=()=>document.documentElement.scrollTop||document.body.scrollTop,NF=({refresh:e})=>{const t=R.useRef(null),n=R.useRef(null),i=R.useMemo(()=>!!navigator.standalone||window.matchMedia("(display-mode: standalone)").matches||!1,[]);return R.useEffect(()=>{if(!i)return;let a=0,l=!1,u=!1,f=!1;const h=S=>{const w=n.current;w&&(w.style.transition=S?"transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease":"none",w.style.transform="",w.style.opacity="0")},p=S=>{a=S.touches[0].clientY,l=!1,u=!1},g=S=>{if(f||OF()>0)return;const w=S.touches[0].clientY-a;if(w<=0){l&&(l=!1,u=!1,h(!1));return}l=!0,u=w>=aT;const D=Math.min(w/aT,1),C=oT*(1-Math.pow(1-D,2)),I=Math.pow(D,.5),k=Math.floor(D*270),x=n.current;x&&(x.style.transition="none",x.style.transform=`translateY(${C}px) rotate(${k}deg)`,x.style.opacity=String(Math.min(I,1)))},y=()=>{if(l)if(l=!1,u&&!f){u=!1,f=!0;const S=n.current;S&&(S.classList.add("animate"),S.style.transition="none",S.style.transform=`translateY(${oT}px)`,S.style.opacity="1"),e().finally(()=>{f=!1;const w=n.current;w&&(w.classList.remove("animate"),h(!0))})}else u=!1,h(!0)},v=()=>{l=!1,u=!1,h(!1)};return document.addEventListener("touchstart",p,{passive:!0}),document.addEventListener("touchmove",g,{passive:!0}),document.addEventListener("touchend",y,{passive:!0}),document.addEventListener("touchcancel",v,{passive:!0}),()=>{document.removeEventListener("touchstart",p),document.removeEventListener("touchmove",g),document.removeEventListener("touchend",y),document.removeEventListener("touchcancel",v)}},[e,i]),{swipeRef:t,spinnerRef:n}},MF=e=>e.filters.selectedDisciplines.length>0||e.filters.selectedInstructors.length>0,lT=(e,t,n)=>{const i=new Date(e),a=new Intl.DateTimeFormat(void 0,{month:"long",timeZone:t}).format(i),l=new Intl.DateTimeFormat(void 0,{day:"numeric",timeZone:t}).format(i);return`${new Intl.DateTimeFormat(void 0,{weekday:"long",timeZone:t}).format(i)}, ${a} ${l}`},kF=e=>e.filters.selectedBookableStatuses,LF=e=>e.filters.selectedDisciplines,PF=e=>e.filters.selectedInstructors,jF=(e,t)=>t,UF=bi([kF,LF,PF,jF],(e,t,n,i)=>i.filter(a=>e.includes(a.status)).filter(a=>n.length>0?n.some(l=>l===a.instructor.id):!0).filter(a=>t.length>0?t.includes(a.discipline.id):!0)),cD=bi([Ta],e=>{if(e)return Qe.STUDIOS[e]}),zF=bi([UF,cD],(e,t)=>{if(e.length===0)return[];const n=t?.timezone||"",i=[];let a=1,l=lT(e[0].start,n),u=[e[0]];for(;a<e.length;){const f=e[a],h=lT(f.start,n);h===l?u.push(f):(i.push({formattedDate:l,classes:u}),l=h,u=[f]),a++}return u.length>0&&i.push({formattedDate:l,classes:u}),i}),$F=(e,t)=>new Intl.DateTimeFormat(void 0,{hour:"numeric",minute:"numeric",timeZone:t}).format(new Date(e)),Ao={free:{accentColor:"#2e7d32",buttonBg:"#cb3449",buttonText:"#fff",buttonBorder:"#cb3449",label:"Book"},waitlist:{accentColor:"#e65100",buttonBg:"transparent",buttonText:"#e65100",buttonBorder:"#e65100",label:"Waitlist"},full:{accentColor:"#c4c4c4",buttonBg:"transparent",buttonText:"#aaa",buttonBorder:"#d1d1d1",label:"Full"}},BF=M.a`
  display: flex;
  align-items: center;
  gap: 14px;
  text-decoration: none;
  color: inherit;
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-left: 4px solid ${e=>Ao[e.$status].accentColor};
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

  ${Re`
    padding: 10px 12px;
    gap: 10px;
  `}
`,HF=M.div`
  flex-shrink: 0;
  width: 84px;
  ${Re`
    width: 70px;
  `}
`,FF=M.div`
  font-weight: 600;
  font-size: 16px;
  color: ${e=>e.theme.colors.main};
  white-space: nowrap;
  ${Re`
    font-size: 13px;
  `}
`,qF=M.div`
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
  margin-top: 2px;
  ${Re`
    font-size: 11px;
  `}
`,VF=M.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  ${Re`
    display: none;
  `}
`,GF=M.div`
  flex: 1;
  min-width: 0;
`,YF=M.div`
  font-size: 16px;
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${Re`
    font-size: 13px;
  `}
`,QF=M.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  margin-top: 3px;
  ${Re`
    font-size: 12px;
  `}
`,WF=M.span`
  color: ${e=>e.theme.borderColor};
`,KF=M.div`
  display: none;
  ${Re`
    display: flex;
    align-items: center;
  `}
`,XF=M.button`
  flex-shrink: 0;
  border: 1px solid ${e=>Ao[e.$status].buttonBorder};
  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>Ao[e.$status].buttonBg};
  color: ${e=>Ao[e.$status].buttonText};
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

  ${Re`
    font-size: 12px;
    padding: 5px 10px;
  `}
`,ZF=R.memo(({clazz:e})=>{const t=ct(cD),n=e.status,i=n==="free"||n==="waitlist",a=R.useMemo(()=>e.customerUrl?new URL(e.customerUrl,"https://schedule.studio.onepeloton.com").href:(Ov("Missing customer URL",{extra:{clazz:e}}),""),[e]),l=R.useMemo(()=>$F(e.start,t?.timezone),[e.start,t?.timezone]),u=Ao[n]??Ao.full;return _.jsxs(BF,{$status:n,$interactive:i,href:a,target:"_blank","aria-label":`${u.label} ${e.name} at ${l}`,children:[_.jsxs(HF,{children:[_.jsx(FF,{children:l}),_.jsxs(qF,{children:[e.duration/60," min"]})]}),_.jsxs(VF,{children:[_.jsx(F_,{instructor:e.instructor,size:44}),_.jsx(uh,{discipline:e.discipline,size:36})]}),_.jsxs(GF,{children:[_.jsx(YF,{children:e.name}),_.jsxs(QF,{children:[e.instructor.name,_.jsx(WF,{children:"·"}),e.discipline.name,_.jsx(KF,{children:_.jsx(uh,{discipline:e.discipline,size:20})})]})]}),_.jsx(XF,{$status:n,disabled:!i,tabIndex:-1,children:u.label})]})}),JF=M.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,eq=M.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,tq=M.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 0 4px 6px;
  border-bottom: 1px solid ${e=>e.theme.borderColor};
  margin-bottom: 2px;
`,nq=M.h2`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${e=>e.theme.colors.main};
  margin: 0;
`,cT=M.span`
  font-size: 13px;
  color: ${e=>e.theme.colors.secondary};
`,rq=M.div`
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 32px 24px;
  text-align: center;
  ${Re`
    padding: 24px 16px;
  `}
`,iq=M.p`
  font-size: 16px;
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
  margin: 0 0 8px;
`,uT=M.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  margin: 0;
  line-height: 1.5;
`,sq=({classes:e,fulfilledTimeStamp:t})=>{const n=ct(u=>zF(u,e)),i=ct(MF),a=ct(u=>u.filters.selectedBookableStatuses.includes("free")),l=R.useMemo(()=>t?new Intl.DateTimeFormat(void 0,{hour:"numeric",minute:"numeric"}).format(t):void 0,[t]);return n.length===0?_.jsxs(rq,{children:[_.jsx(iq,{children:"No classes found"}),i&&_.jsx(uT,{children:"Try resetting your filters or selecting more options in the sidebar."}),a&&!i&&_.jsx(uT,{children:"New classes usually open at 12:00 pm on Mondays and Thursdays in your studio's timezone."})]}):_.jsx(JF,{children:n.map((u,f)=>_.jsxs(eq,{children:[_.jsxs(tq,{children:[_.jsx(nq,{children:u.formattedDate}),f===0&&l&&_.jsxs(cT,{children:["Times in studio timezone · loaded ",l]}),f===0&&!l&&_.jsx(cT,{children:"All times in studio timezone"})]}),u.classes.map((h,p)=>_.jsx(ZF,{clazz:h},p))]},f))})},dT=M.div`
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 32px 24px;
  text-align: center;
  ${Re`
    padding: 24px 16px;
  `}
`,aq=M.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  margin: 0;
`,oq=M.p`
  font-size: 14px;
  color: #d93025;
  margin: 0 0 6px;
`,lq=M.code`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,cq=()=>{const e=ct(Ta),{currentData:t,isLoading:n,error:i,fulfilledTimeStamp:a}=QI(e,{refetchOnMountOrArgChange:!0});return i&&!n?_.jsxs(dT,{children:[_.jsx(oq,{children:"Failed to load classes"}),_.jsx(lq,{children:S9(i)})]}):!t||n?_.jsx(dT,{children:_.jsx(aq,{children:"Loading classes…"})}):_.jsx(sq,{classes:t,fulfilledTimeStamp:a})},uq=M.div``,uv=300,dq=M.aside`
  max-width: 100%;
  width: ${uv}px;
  top: calc(${WA}px + env(safe-area-inset-top, 0px));
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
    left: ${e=>e.$toggleVisible?0:-uv}px;
    z-index: 2;
    box-shadow: ${e=>e.$toggleVisible?"4px 0 16px rgba(0,0,0,0.08)":"none"};
  }
`,fq=M.div`
  flex: 1;
  background-color: ${e=>e.theme.colors.secondarySurface};
  padding: 20px;
  position: relative;
  margin-left: ${uv}px;

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
  }
`,of=40,hq=M.div`
  padding-top: 10px;
  position: absolute;
  left: 0;
  width: 100%;
  top: -50px;
  text-align: center;
`,pq=M.div`
  display: inline-block;
  position: relative;
  width: ${of}px;
  height: ${of}px;
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
    width: ${of}px;
    height: ${of}px;
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
`,mq=M.div`
  display: none;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;

  @media only screen and (max-width: ${e=>e.theme.widths.tablet}px) {
    display: flex;
  }
`,gq=M.button`
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
`,yq=()=>_.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:_.jsx("path",{d:"M1 3h12M3 7h8M5 11h4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),vq=()=>{const{refresh:e}=DF(),{swipeRef:t,spinnerRef:n}=NF({refresh:e}),[i,a]=R.useState(!1);return _.jsx(aa,{children:_.jsxs(uq,{children:[_.jsx(dq,{$toggleVisible:i,children:_.jsx(IF,{onClose:()=>{a(!1)}})}),_.jsxs(fq,{$toggleVisible:i,onClick:()=>{a(!1)},ref:t,children:[_.jsx(hq,{children:_.jsxs(pq,{ref:n,children:[_.jsx("div",{}),_.jsx("div",{}),_.jsx("div",{})]})}),_.jsx(mq,{children:_.jsxs(gq,{type:"button",onClick:l=>{a(!0),l.stopPropagation()},children:[_.jsx(yq,{}),"Filters"]})}),_.jsx(cq,{})]})]})})},_q=({children:e})=>{const t=ct(Ko),n=ct(N_);return t.state!=="fulfilled"?null:n?_.jsx(_.Fragment,{children:e}):_.jsx(vv,{to:rt.CLASS_LIST,replace:!0})},fT=e=>{switch(e.code){case"auth/user-not-found":return"No account found with this email address. Please check your email or create a new account.";case"auth/wrong-password":return"Incorrect password. Please try again or reset your password.";case"auth/invalid-email":return"Please enter a valid email address.";case"auth/user-disabled":return"This account has been disabled. Please contact support for assistance.";case"auth/too-many-requests":return"Too many failed login attempts. Please try again later or reset your password.";case"auth/weak-password":return"Password should be at least 6 characters long.";case"auth/email-already-in-use":return"An account with this email already exists. Please sign in instead.";case"auth/invalid-credential":return"Invalid email or password. Please check your credentials and try again.";case"auth/operation-not-allowed":return"This sign-in method is not enabled. Please contact support.";case"auth/account-exists-with-different-credential":return"An account already exists with the same email but different sign-in credentials. Please sign in using the original method.";case"auth/credential-already-in-use":return"This credential is already associated with a different user account.";case"auth/popup-closed-by-user":return"Sign-in was cancelled. Please try again.";case"auth/popup-blocked":return"Pop-up was blocked by your browser. Please allow pop-ups for this site and try again.";case"auth/cancelled-popup-request":return"Sign-in was cancelled. Please try again.";case"auth/network-request-failed":return"Network error occurred. Please check your internet connection and try again.";case"auth/internal-error":return"An internal error occurred. Please try again later.";case"auth/invalid-api-key":return"Configuration error. Please contact support.";case"auth/app-deleted":return"Application error. Please refresh the page and try again.";case"auth/invalid-user-token":return"Your session has expired. Please sign in again.";case"auth/user-token-expired":return"Your session has expired. Please sign in again.";case"auth/null-user":return"No user is currently signed in.";case"auth/requires-recent-login":return"This operation requires recent authentication. Please sign in again.";default:return e.message||"An unexpected error occurred. Please try again."}},bq=M.h1`
  font-size: 26px;
  font-weight: 600;
  color: ${e=>e.theme.colors.main};
  margin: 0 0 6px;
`,Sq=M.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  margin: 0 0 16px;
  line-height: 1.5;
`,wq=M.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,hT=M.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,pT=M.label`
  font-size: 13px;
  font-weight: 500;
  color: ${e=>e.theme.colors.main};
`,mT=M.input`
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
`,Eq=M.button`
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
`,xq=M.button`
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
`,Tq=M.div`
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
`,Cq=M.p`
  margin: 0;
  font-size: 13px;
  color: #d93025;
`,Rq=M.p`
  margin: 32px 0 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.secondary};
  text-align: center;
`,Aq=M.button`
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
`,Iq=()=>{const e=au(),[t,n]=R.useState(!1),[i,a]=R.useState(""),[l,u]=R.useState(!1),[f,h]=R.useState(""),[p,g]=R.useState(""),y=R.useCallback(async S=>{if(S.preventDefault(),!(!ai||!f||!p)){n(!0),a("");try{l?await a8(ai,f,p):await o8(ai,f,p),e(rt.CLASS_LIST)}catch(w){console.error("Email auth error:",w);const D=w&&typeof w=="object"&&"code"in w?fT(w):"Authentication failed";a(D),Or(w)}finally{n(!1)}}},[f,p,l,e]),v=R.useCallback(async()=>{if(ai){n(!0),a("");try{const S=new si;await D8(ai,S),e(rt.CLASS_LIST)}catch(S){console.error("Google sign-in error:",S);const w=S&&typeof S=="object"&&"code"in S?fT(S):"Google sign-in failed";a(w),Or(S)}finally{n(!1)}}},[e]);return _.jsxs("div",{children:[_.jsx(bq,{children:l?"Create account":"Sign in"}),_.jsx(Sq,{children:"Set alerts, persist filters across devices, and access beta features."}),_.jsxs(wq,{onSubmit:y,children:[_.jsxs(hT,{children:[_.jsx(pT,{htmlFor:"signin-email",children:"Email"}),_.jsx(mT,{id:"signin-email",type:"email",placeholder:"you@example.com",value:f,onChange:S=>h(S.target.value),required:!0,disabled:t})]}),_.jsxs(hT,{children:[_.jsx(pT,{htmlFor:"signin-password",children:"Password"}),_.jsx(mT,{id:"signin-password",type:"password",placeholder:"••••••••",value:p,onChange:S=>g(S.target.value),required:!0,disabled:t})]}),i&&_.jsx(Cq,{role:"alert",children:i}),_.jsx(Eq,{type:"submit",disabled:t,children:t?"Loading…":l?"Create account":"Sign in"})]}),_.jsx(Tq,{style:{marginTop:20,marginBottom:16},children:"or"}),_.jsx(xq,{type:"button",onClick:v,disabled:t,children:"Continue with Google"}),_.jsxs(Rq,{children:[l?"Already have an account?":"Don't have an account?"," ",_.jsx(Aq,{type:"button",onClick:()=>{u(!l),a("")},disabled:t,children:l?"Sign in":"Create account"})]})]})},Dq=bi([Ko],e=>e.state==="fulfilled"&&!!e.data),Oq=M.div`
  padding: 32px 20px;
  display: flex;
  justify-content: center;

  ${Re`
    padding: 16px 12px;
  `}
`,Nq=M.div`
  width: 100%;
  max-width: 400px;
  background-color: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 32px;

  ${Re`
    padding: 24px 20px;
  `}
`,Mq=()=>ct(Dq)?_.jsx(vv,{to:rt.CLASS_LIST}):_.jsx(aa,{children:_.jsx(Oq,{children:_.jsx(Nq,{children:_.jsx(Iq,{})})})});function kq(e){const t=[];for(let n=e-1;n>=0;n--){const i=new Date;i.setDate(i.getDate()-n),t.push(i.toISOString().slice(0,10))}return t}function Lq(e=14){const[t,n]=R.useState({state:"idle"});return R.useEffect(()=>{if(!Mn){n({state:"failed",error:new Error("No database")});return}n({state:"loading"}),VA(yr(Mn,"metrics")).then(i=>{const a=i.val()??{},u=kq(e).map(f=>{const h=a[f]??{},p=h.diffs??{},g={};for(const[v,S]of Object.entries(p))g[v]={added:S.added??0,changed:S.changed??0,removed:S.removed??0};const y=h.notifications??{};return{date:f,diffs:g,notifications:{sent:y.sent??0,failed:y.failed??0,usersReached:y.usersReached??0}}});n({state:"fulfilled",data:u})}).catch(i=>{n({state:"failed",error:i})})},[e]),t}const cy=M.div`
  padding: 32px 24px;
  max-width: 900px;
  margin: 0 auto;

  ${Re`
    padding: 20px 16px;
  `}
`,uy=M.h1`
  font-size: 22px;
  font-weight: 700;
  color: ${e=>e.theme.colors.main};
  margin: 0 0 28px;
`,gT=M.section`
  margin-bottom: 40px;
`,yT=M.h2`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${e=>e.theme.colors.secondary};
  margin: 0 0 16px;
`,Pq=M.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 40px;

  ${Re`
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  `}
`,po=M.div`
  background: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 16px 20px;
`,mo=M.div`
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
  margin-bottom: 4px;
`,go=M.div`
  font-size: 24px;
  font-weight: 700;
  color: ${e=>e.theme.colors.main};
`,vT=M.p`
  color: ${e=>e.theme.colors.secondary};
  font-size: 14px;
`,uD=80,jq=M.div`
  background: ${e=>e.theme.colors.mainSurface};
  border: 1px solid ${e=>e.theme.borderColor};
  border-radius: ${e=>e.theme.borderRadius};
  padding: 20px 16px 12px;
  overflow-x: auto;
`,Uq=M.div`
  display: flex;
  align-items: flex-end;
  gap: 6px;
  min-width: max-content;
`,zq=M.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`,$q=M.div`
  display: flex;
  align-items: flex-end;
  gap: 2px;
  height: ${uD+16}px;
`,Bq=M.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`,Hq=M.div`
  font-size: 9px;
  font-weight: 600;
  line-height: 1;
  color: ${e=>e.$color};
`,Fq=M.div`
  width: 10px;
  height: ${e=>e.$height}px;
  background-color: ${e=>e.$color};
  border-radius: 2px 2px 0 0;
  min-height: 1px;
`,qq=M.div`
  font-size: 10px;
  color: ${e=>e.theme.colors.secondary};
  white-space: nowrap;
`,Vq=M.div`
  display: flex;
  gap: 16px;
  margin-top: 12px;
  flex-wrap: wrap;
`,Gq=M.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: ${e=>e.theme.colors.secondary};
`,Yq=M.div`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  background-color: ${e=>e.$color};
  flex-shrink: 0;
`;function Qq(e){const[,t,n]=e.split("-");return`${parseInt(t)}/${parseInt(n)}`}function _T({days:e,barsForDay:t,legend:n}){const i=e.flatMap(l=>t(l).map(u=>u.value)),a=Math.max(...i,1);return _.jsxs(jq,{children:[_.jsx(Uq,{children:e.map(l=>_.jsxs(zq,{children:[_.jsx($q,{children:t(l).map(u=>_.jsxs(Bq,{children:[u.value>0&&_.jsx(Hq,{$color:u.color,children:u.value}),_.jsx(Fq,{$height:Math.round(u.value/a*uD),$color:u.color})]},u.label))}),_.jsx(qq,{children:Qq(l.date)})]},l.date))}),_.jsx(Vq,{children:n.map(l=>_.jsxs(Gq,{children:[_.jsx(Yq,{$color:l.color}),l.label]},l.label))})]})}const Gn={added:"#4ade80",changed:"#facc15",removed:"#f87171",sent:"#60a5fa",failed:"#f87171",usersReached:"#a78bfa"},Wq=()=>{const e=Lq(14);if(e.state==="idle"||e.state==="loading")return _.jsx(aa,{children:_.jsxs(cy,{children:[_.jsx(uy,{children:"Stats"}),_.jsx(vT,{children:"Loading…"})]})});if(e.state==="failed")return _.jsx(aa,{children:_.jsxs(cy,{children:[_.jsx(uy,{children:"Stats"}),_.jsxs(vT,{children:["Failed to load metrics: ",e.error.message??"unknown error"]})]})});const t=e.data,n=t.reduce((a,l)=>{a.sent+=l.notifications.sent,a.failed+=l.notifications.failed,a.usersReached+=l.notifications.usersReached;for(const u of Object.values(l.diffs))a.added+=u.added,a.changed+=u.changed,a.removed+=u.removed;return a},{sent:0,failed:0,usersReached:0,added:0,changed:0,removed:0}),i=[...new Set(t.flatMap(a=>Object.keys(a.diffs)))];return _.jsx(aa,{children:_.jsxs(cy,{children:[_.jsx(uy,{children:"Stats"}),_.jsxs(Pq,{children:[_.jsxs(po,{children:[_.jsx(mo,{children:"Notifications sent (14d)"}),_.jsx(go,{children:n.sent.toLocaleString()})]}),_.jsxs(po,{children:[_.jsx(mo,{children:"Users reached (14d)"}),_.jsx(go,{children:n.usersReached.toLocaleString()})]}),_.jsxs(po,{children:[_.jsx(mo,{children:"Delivery failures (14d)"}),_.jsx(go,{children:n.failed.toLocaleString()})]}),_.jsxs(po,{children:[_.jsx(mo,{children:"Classes added (14d)"}),_.jsx(go,{children:n.added.toLocaleString()})]}),_.jsxs(po,{children:[_.jsx(mo,{children:"Classes changed (14d)"}),_.jsx(go,{children:n.changed.toLocaleString()})]}),_.jsxs(po,{children:[_.jsx(mo,{children:"Classes removed (14d)"}),_.jsx(go,{children:n.removed.toLocaleString()})]})]}),_.jsxs(gT,{children:[_.jsx(yT,{children:"Push notifications (14 days)"}),_.jsx(_T,{days:t,barsForDay:a=>[{value:a.notifications.sent,color:Gn.sent,label:"Sent"},{value:a.notifications.failed,color:Gn.failed,label:"Failed"},{value:a.notifications.usersReached,color:Gn.usersReached,label:"Users reached"}],legend:[{color:Gn.sent,label:"Sent"},{color:Gn.failed,label:"Failed"},{color:Gn.usersReached,label:"Users reached"}]})]}),i.map(a=>_.jsxs(gT,{children:[_.jsxs(yT,{children:["Schedule changes — ",Qe.STUDIOS[a]?.location??a," (14 days)"]}),_.jsx(_T,{days:t,barsForDay:l=>{const u=l.diffs[a]??{added:0,changed:0,removed:0};return[{value:u.added,color:Gn.added,label:"Added"},{value:u.changed,color:Gn.changed,label:"Changed"},{value:u.removed,color:Gn.removed,label:"Removed"}]},legend:[{color:Gn.added,label:"Added"},{color:Gn.changed,label:"Changed"},{color:Gn.removed,label:"Removed"}]})]},a))]})})},Kq=Qk(Tk(_.jsxs(Cr,{children:[_.jsx(Cr,{path:rt.CLASS_LIST,element:_.jsx(vq,{})}),_.jsxs(Cr,{path:rt.ALERTS,element:_.jsx(RH,{}),children:[_.jsx(Cr,{index:!0,element:_.jsx(H7,{})}),_.jsx(Cr,{path:"edit",element:_.jsx(fH,{})})]}),_.jsx(Cr,{path:rt.SIGN_IN,element:_.jsx(Mq,{})}),_.jsx(Cr,{path:rt.ABOUT,element:_.jsx(lB,{})}),_.jsx(Cr,{path:rt.STATS,element:_.jsx(_q,{children:_.jsx(Wq,{})})}),_.jsx(Cr,{path:"*",element:_.jsx(vv,{to:rt.CLASS_LIST,replace:!0})})]}))),Xq=(e,t)=>({id:e.uid,displayName:e.displayName||e.email||"",isAdmin:t}),Zq={state:"idle"},dD=Ar({name:"session",initialState:Zq,reducers:{setLoading(e){return{state:"loading"}},setSession(e,t){return{state:"fulfilled",data:t.payload}},removeSession(e){return{state:"fulfilled",data:null}}}}),{setLoading:bT,setSession:Jq,removeSession:ST}=dD.actions,eV=dD.reducer,tV=({children:e})=>{const t=gs();return R.useEffect(()=>{if(t(bT()),!ai)return t(ST()),()=>{};const n=u8(ai,async i=>{if(t(bT()),i){let a=!1;try{a=(Mn?await VA(yr(Mn,`admins/${i.uid}`)):null)?.val()===!0}catch{}t(Jq(Xq(i,a)))}else t(ST())});return()=>n()},[t]),_.jsx(_.Fragment,{children:e})},nV={alerts:[]},fD=Ar({name:"alerts",initialState:nV,reducers:{addAlert(e,t){e.alerts.push(t.payload)},setAlerts(e,t){e.alerts=t.payload},removeAlerts(e){e.alerts=[]}}}),{addAlert:lV,setAlerts:cV,removeAlerts:uV}=fD.actions,rV=fD.reducer,iV=R3({reducer:{alerts:rV,filters:eF,session:eV,[xf.reducerPath]:xf.reducer,[tv.name]:tv.reducer},middleware:e=>e().concat(xf.middleware)}),sV={borderRadius:"8px",borderColor:"#d1d1d1",colors:{main:"#494f59",secondary:"#514e60",mainSurface:"#fff",secondarySurface:"#ededed",accent:"#cb3449"},widths:{tablet:1024,mobile:560}};function aV(){return _.jsx(oL,{theme:sV,children:_.jsx(FN,{store:iV,children:_.jsx(tV,{children:_.jsx(cz,{children:_.jsx(a2,{router:Kq})})})})})}RN.createRoot(document.getElementById("root")).render(_.jsx(R.StrictMode,{children:_.jsx(aV,{})}));
//# sourceMappingURL=index-BF0NuJNy.js.map
